#!/usr/bin/env node

import {
  addBlocker,
  addStep,
  addUtcDays,
  addWarning,
  createAuditMemory,
  finalizeAudit,
  hasOwn,
  isDirectRun,
  isIsoDate,
  isPlainObject,
  iso,
  parseIsoDate,
  requireEnum,
  requireSafeInteger,
  runJsonCli,
  validatePayload,
  validateVerifiedLegalRule,
} from './audit-core.mjs';

const ENGINE_ID = 'fraction-date';

function toSafeNumber(memory, value, path) {
  if (value > BigInt(Number.MAX_SAFE_INTEGER)) {
    addBlocker(memory, 'ARITHMETIC_OVERFLOW', path, 'O resultado excede o limite de inteiro seguro; normalize a unidade antes do cálculo.');
    return null;
  }
  return Number(value);
}

function validateAdjustment(memory, adjustment, index, seenIds) {
  const path = `$.facts.adjustments[${index}]`;
  if (!isPlainObject(adjustment)) {
    addBlocker(memory, 'INVALID_ADJUSTMENT', path, 'Cada ajuste deve ser um objeto auditável.');
    return;
  }
  if (typeof adjustment.id !== 'string' || adjustment.id.trim() === '') {
    addBlocker(memory, 'INVALID_ADJUSTMENT', `${path}.id`, 'Identifique o ajuste.');
  } else if (seenIds.has(adjustment.id)) {
    addBlocker(memory, 'INPUT_CONFLICT', `${path}.id`, `Identificador de ajuste repetido: ${adjustment.id}.`);
  } else {
    seenIds.add(adjustment.id);
  }
  requireEnum(memory, adjustment.effect, ['add', 'subtract'], `${path}.effect`);
  requireSafeInteger(memory, adjustment.days, `${path}.days`);
  if (typeof adjustment.reason !== 'string' || adjustment.reason.trim() === '') {
    addBlocker(memory, 'INVALID_ADJUSTMENT', `${path}.reason`, 'Explique a razão do ajuste.');
  }
  if (typeof adjustment.evidenceRef !== 'string' || adjustment.evidenceRef.trim() === '') {
    addBlocker(memory, 'EVIDENCE_REFERENCE_REQUIRED', `${path}.evidenceRef`, 'Ancore o ajuste em documento, página, evento ou decisão.');
  }
  if (!isPlainObject(adjustment.verification)
      || adjustment.verification.status !== 'verified'
      || typeof adjustment.verification.verifiedBy !== 'string'
      || adjustment.verification.verifiedBy.trim() === ''
      || !isIsoDate(adjustment.verification.verifiedAt)) {
    addBlocker(memory, 'ADJUSTMENT_NOT_VERIFIED', `${path}.verification`, 'O ajuste deve trazer status verified, responsável e data de verificação.');
  }
}

function calculateFractionDate(payload) {
  const memory = createAuditMemory(ENGINE_ID, payload);
  if (!validatePayload(memory, payload)) return finalizeAudit(memory);
  const rule = validateVerifiedLegalRule(memory, payload.legalRule);
  if (!rule) return finalizeAudit(memory);

  const facts = payload.facts;
  const parameters = rule.parameters;
  const mode = requireEnum(memory, parameters.mode, ['fraction', 'fixed_days'], '$.legalRule.parameters.mode');
  const counting = requireEnum(
    memory,
    parameters.baseDateCounting,
    ['exclude_base_date', 'include_base_date'],
    '$.legalRule.parameters.baseDateCounting',
  );
  const adjustmentPolicy = requireEnum(
    memory,
    parameters.adjustmentPolicy,
    ['forbid', 'allow_verified'],
    '$.legalRule.parameters.adjustmentPolicy',
  );
  const negativeResultPolicy = requireEnum(
    memory,
    parameters.negativeResultPolicy,
    ['block', 'clamp_zero'],
    '$.legalRule.parameters.negativeResultPolicy',
  );

  const hasFraction = hasOwn(parameters, 'fraction');
  const hasFixedDays = hasOwn(parameters, 'fixedDays');
  if (hasFraction && hasFixedDays) {
    addBlocker(memory, 'LEGAL_RULE_CONFLICT', '$.legalRule.parameters', 'A regra contém fração e dias fixos simultaneamente. Escolha um único modo verificado.');
  }
  if (mode === 'fraction' && (!hasFraction || hasFixedDays)) {
    addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.fraction', 'O modo fraction exige somente numerator e denominator.');
  }
  if (mode === 'fixed_days' && (!hasFixedDays || hasFraction)) {
    addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.fixedDays', 'O modo fixed_days exige somente fixedDays.');
  }

  const baseDate = parseIsoDate(memory, facts.baseDate, '$.facts.baseDate');
  if (!Array.isArray(facts.adjustments)) {
    addBlocker(memory, 'ADJUSTMENTS_REQUIRED', '$.facts.adjustments', 'Informe explicitamente a lista de ajustes, ainda que vazia.');
  }
  if (adjustmentPolicy === 'forbid' && Array.isArray(facts.adjustments) && facts.adjustments.length > 0) {
    addBlocker(memory, 'INPUT_RULE_CONFLICT', '$.facts.adjustments', 'A regra informada proíbe ajustes, mas a entrada contém ajustes.');
  }
  if (adjustmentPolicy === 'allow_verified' && Array.isArray(facts.adjustments)) {
    const seenIds = new Set();
    facts.adjustments.forEach((adjustment, index) => validateAdjustment(memory, adjustment, index, seenIds));
  }

  let grossRequiredDays = null;
  let thresholdDetail = null;

  if (mode === 'fraction' && hasFraction && !hasFixedDays) {
    const totalTermDays = requireSafeInteger(memory, facts.totalTermDays, '$.facts.totalTermDays', { minimum: 1 });
    const fraction = parameters.fraction;
    if (!isPlainObject(fraction)) {
      addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.fraction', 'Informe numerator e denominator inteiros.');
    } else {
      const numerator = requireSafeInteger(memory, fraction.numerator, '$.legalRule.parameters.fraction.numerator', { minimum: 1 });
      const denominator = requireSafeInteger(memory, fraction.denominator, '$.legalRule.parameters.fraction.denominator', { minimum: 1 });
      const rounding = requireEnum(memory, parameters.rounding, ['floor', 'ceil'], '$.legalRule.parameters.rounding');
      if (totalTermDays !== null && numerator !== null && denominator !== null && rounding !== null) {
        const product = BigInt(totalTermDays) * BigInt(numerator);
        const divisor = BigInt(denominator);
        const quotient = product / divisor;
        const remainder = product % divisor;
        const rounded = rounding === 'ceil' && remainder > 0n ? quotient + 1n : quotient;
        grossRequiredDays = toSafeNumber(memory, rounded, '$.result.grossRequiredDays');
        thresholdDetail = {
          mode,
          formula: `${totalTermDays} * ${numerator} / ${denominator}`,
          exactNumerator: product.toString(),
          denominator: denominator.toString(),
          integerQuotient: quotient.toString(),
          remainder: remainder.toString(),
          rounding,
          roundedDays: grossRequiredDays,
        };
      }
    }
  }

  if (mode === 'fixed_days' && hasFixedDays && !hasFraction) {
    grossRequiredDays = requireSafeInteger(memory, parameters.fixedDays, '$.legalRule.parameters.fixedDays');
    thresholdDetail = { mode, fixedDays: grossRequiredDays };
  }

  if (memory.blockers.length > 0) return finalizeAudit(memory);

  addStep(
    memory,
    'threshold',
    'Determinação do número bruto de dias segundo os parâmetros da regra fornecida.',
    { mode, totalTermDays: facts.totalTermDays ?? null, rule: thresholdDetail },
    mode === 'fraction' ? 'multiplicação racional exata seguida do arredondamento configurado' : 'aplicação dos dias fixos configurados',
    { grossRequiredDays },
  );

  let additionsDays = 0;
  let deductionsDays = 0;
  if (adjustmentPolicy === 'allow_verified') {
    for (const adjustment of facts.adjustments) {
      if (adjustment.effect === 'add') additionsDays += adjustment.days;
      if (adjustment.effect === 'subtract') deductionsDays += adjustment.days;
      if (!Number.isSafeInteger(additionsDays) || !Number.isSafeInteger(deductionsDays)) {
        addBlocker(memory, 'ARITHMETIC_OVERFLOW', '$.facts.adjustments', 'A soma dos ajustes excede o limite de inteiro seguro.');
        return finalizeAudit(memory);
      }
    }
  }

  let netRequiredDays = grossRequiredDays + additionsDays - deductionsDays;
  if (!Number.isSafeInteger(netRequiredDays)) {
    addBlocker(memory, 'ARITHMETIC_OVERFLOW', '$.result.netRequiredDays', 'O resultado líquido excede o limite de inteiro seguro.');
    return finalizeAudit(memory);
  }
  if (netRequiredDays < 0 && negativeResultPolicy === 'block') {
    addBlocker(memory, 'NEGATIVE_RESULT_REQUIRES_REVIEW', '$.result.netRequiredDays', 'Os ajustes produziram resultado negativo e a regra determinou bloqueio.');
    return finalizeAudit(memory);
  }
  if (netRequiredDays < 0 && negativeResultPolicy === 'clamp_zero') {
    addWarning(memory, 'NEGATIVE_RESULT_CLAMPED', 'O resultado negativo foi limitado a zero conforme configuração expressa da regra.');
    netRequiredDays = 0;
  }

  addStep(
    memory,
    'adjustments',
    'Aplicação exclusiva dos ajustes previamente verificados e documentados.',
    { adjustments: facts.adjustments },
    `${grossRequiredDays} + ${additionsDays} - ${deductionsDays}`,
    { additionsDays, deductionsDays, netRequiredDays },
  );

  const dateOffsetDays = counting === 'include_base_date'
    ? Math.max(0, netRequiredDays - 1)
    : netRequiredDays;
  const targetDate = addUtcDays(baseDate, dateOffsetDays);

  addStep(
    memory,
    'target-date',
    'Conversão dos dias líquidos em data civil UTC, segundo a convenção expressa de inclusão do marco.',
    { baseDate: facts.baseDate, netRequiredDays, counting },
    `${facts.baseDate} + ${dateOffsetDays} dia(s) de deslocamento`,
    { dateOffsetDays, targetDate: iso(targetDate) },
  );

  return finalizeAudit(memory, {
    baseDate: facts.baseDate,
    grossRequiredDays,
    additionsDays,
    deductionsDays,
    netRequiredDays,
    dateOffsetDays,
    targetDate: iso(targetDate),
    countingConvention: counting,
    ruleId: rule.id,
    ruleVersion: rule.version,
  });
}

if (isDirectRun(import.meta.url)) {
  await runJsonCli(
    calculateFractionDate,
    'Uso: node fraction-date-engine.mjs \'{"calculationId":"...","legalRule":{...},"facts":{...}}\'',
  );
}

export { calculateFractionDate };
