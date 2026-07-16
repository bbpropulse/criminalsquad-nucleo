#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const DAY_MS = 86_400_000;
const SCHEMA_VERSION = 'criminalsquad.legal-calculation-memory.v1';
const ENGINE_VERSION = '1.1.0';

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function cloneForAudit(value) {
  return value === undefined ? null : structuredClone(value);
}

function hasOwn(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (isPlainObject(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value === undefined ? null : value);
}

function inputHash(payload) {
  if (!isPlainObject(payload)) return null;
  return `sha256:${createHash('sha256').update(stableJson({
    facts: payload.facts ?? null,
    legalRule: payload.legalRule ?? null,
  })).digest('hex')}`;
}

function createAuditMemory(engineId, payload) {
  return {
    schemaVersion: SCHEMA_VERSION,
    engine: { id: engineId, version: ENGINE_VERSION },
    calculationId: typeof payload?.calculationId === 'string' ? payload.calculationId : null,
    inputHash: inputHash(payload),
    status: 'blocked',
    legalReadiness: 'human_review_required',
    ruleSnapshot: cloneForAudit(payload?.legalRule),
    inputSnapshot: cloneForAudit(payload?.facts),
    steps: [],
    result: null,
    blockers: [],
    warnings: [
      {
        code: 'HUMAN_REVIEW_REQUIRED',
        message: 'Memória aritmética para conferência; não substitui a decisão jurídica e exige revisão humana antes de uso no caso.',
      },
      {
        code: 'CALLER_ATTESTATION_ONLY',
        message: 'O motor valida a presença da atestação e da fonte informadas, mas não autentica o conteúdo jurídico externo.',
      },
    ],
  };
}

function addBlocker(memory, code, path, message) {
  memory.blockers.push({ code, path, message });
}

function addWarning(memory, code, message) {
  memory.warnings.push({ code, message });
}

function addStep(memory, id, description, inputs, operation, output) {
  memory.steps.push({
    sequence: memory.steps.length + 1,
    id,
    description,
    inputs: cloneForAudit(inputs),
    operation,
    output: cloneForAudit(output),
  });
}

function finalizeAudit(memory, result = null) {
  if (memory.blockers.length > 0) {
    memory.status = 'blocked';
    memory.result = null;
    return memory;
  }
  memory.status = 'completed';
  memory.result = cloneForAudit(result);
  return memory;
}

function validatePayload(memory, payload) {
  if (!isPlainObject(payload)) {
    addBlocker(memory, 'INPUT_REQUIRED', '$', 'Informe um objeto de entrada.');
    return false;
  }
  if (typeof payload.calculationId !== 'string' || payload.calculationId.trim() === '') {
    addBlocker(memory, 'CALCULATION_ID_REQUIRED', '$.calculationId', 'Informe um identificador auditável para o cálculo.');
  }
  if (!isPlainObject(payload.facts)) {
    addBlocker(memory, 'FACTS_REQUIRED', '$.facts', 'Informe os fatos numéricos e temporais em um objeto separado da regra jurídica.');
  }
  return memory.blockers.length === 0;
}

function isIsoDate(value) {
  if (typeof value !== 'string') return false;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
}

function parseIsoDate(memory, value, path) {
  if (!isIsoDate(value)) {
    addBlocker(memory, 'INVALID_DATE', path, 'Use uma data civil válida no formato AAAA-MM-DD.');
    return null;
  }
  return new Date(`${value}T00:00:00.000Z`);
}

function validateHttpsUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

function validateVerifiedLegalRule(memory, rule) {
  if (rule === undefined || rule === null) {
    addBlocker(
      memory,
      'LEGAL_RULE_REQUIRED',
      '$.legalRule',
      'A regra jurídica verificada deve ser fornecida; o motor não escolhe nem infere a lei aplicável.',
    );
    return null;
  }
  if (!isPlainObject(rule)) {
    addBlocker(memory, 'LEGAL_RULE_INVALID', '$.legalRule', 'A regra jurídica deve ser um único objeto, não uma lista ou valor simples.');
    return null;
  }

  for (const field of ['id', 'version', 'description', 'jurisdiction']) {
    if (typeof rule[field] !== 'string' || rule[field].trim() === '') {
      addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', `$.legalRule.${field}`, `Campo obrigatório ausente: ${field}.`);
    }
  }

  if (!isPlainObject(rule.verification)) {
    addBlocker(memory, 'LEGAL_RULE_NOT_VERIFIED', '$.legalRule.verification', 'Inclua a atestação humana de verificação e aplicabilidade.');
  } else {
    const verification = rule.verification;
    if (verification.status !== 'verified') {
      addBlocker(memory, 'LEGAL_RULE_NOT_VERIFIED', '$.legalRule.verification.status', 'O status deve ser exatamente "verified".');
    }
    if (typeof verification.verifiedBy !== 'string' || verification.verifiedBy.trim() === '') {
      addBlocker(memory, 'LEGAL_RULE_NOT_VERIFIED', '$.legalRule.verification.verifiedBy', 'Identifique quem verificou a regra.');
    }
    if (!isIsoDate(verification.verifiedAt)) {
      addBlocker(memory, 'LEGAL_RULE_NOT_VERIFIED', '$.legalRule.verification.verifiedAt', 'Informe a data da verificação em AAAA-MM-DD.');
    }
    if (verification.caseApplicability !== 'confirmed') {
      addBlocker(
        memory,
        'CASE_APPLICABILITY_NOT_CONFIRMED',
        '$.legalRule.verification.caseApplicability',
        'A aplicabilidade da regra ao caso deve ser confirmada expressamente; o motor não realiza essa subsunção.',
      );
    }
    if (typeof verification.caseApplicabilityConfirmedBy !== 'string' || verification.caseApplicabilityConfirmedBy.trim() === '') {
      addBlocker(memory, 'CASE_APPLICABILITY_NOT_CONFIRMED', '$.legalRule.verification.caseApplicabilityConfirmedBy', 'Identifique quem confirmou a aplicabilidade ao caso.');
    }
    if (!isIsoDate(verification.caseApplicabilityConfirmedAt)) {
      addBlocker(memory, 'CASE_APPLICABILITY_NOT_CONFIRMED', '$.legalRule.verification.caseApplicabilityConfirmedAt', 'Informe a data da confirmação em AAAA-MM-DD.');
    }
  }

  if (!Array.isArray(rule.sources) || rule.sources.length === 0) {
    addBlocker(memory, 'OFFICIAL_SOURCE_REQUIRED', '$.legalRule.sources', 'Informe ao menos uma fonte oficial auditável.');
  } else {
    rule.sources.forEach((source, index) => {
      const path = `$.legalRule.sources[${index}]`;
      if (!isPlainObject(source) || source.type !== 'official') {
        addBlocker(memory, 'OFFICIAL_SOURCE_REQUIRED', `${path}.type`, 'A fonte deve estar classificada como "official".');
      }
      if (!isPlainObject(source) || !validateHttpsUrl(source.url)) {
        addBlocker(memory, 'OFFICIAL_SOURCE_REQUIRED', `${path}.url`, 'Informe URL HTTPS da fonte oficial.');
      }
      if (!isPlainObject(source) || !isIsoDate(source.retrievedAt)) {
        addBlocker(memory, 'OFFICIAL_SOURCE_REQUIRED', `${path}.retrievedAt`, 'Informe a data de consulta da fonte em AAAA-MM-DD.');
      }
    });
  }

  if (!isPlainObject(rule.parameters)) {
    addBlocker(memory, 'LEGAL_RULE_PARAMETERS_REQUIRED', '$.legalRule.parameters', 'Forneça todos os parâmetros aritméticos da regra verificada.');
  }
  return memory.blockers.length === 0 ? rule : null;
}

function requireSafeInteger(memory, value, path, { minimum = 0 } = {}) {
  if (!Number.isSafeInteger(value) || value < minimum) {
    addBlocker(memory, 'INVALID_INTEGER', path, `Informe um inteiro seguro maior ou igual a ${minimum}.`);
    return null;
  }
  return value;
}

function requireEnum(memory, value, allowed, path) {
  if (!allowed.includes(value)) {
    addBlocker(memory, 'INVALID_CONFIGURATION', path, `Valor aceito: ${allowed.join(' | ')}.`);
    return null;
  }
  return value;
}

function iso(date) {
  return date.toISOString().slice(0, 10);
}

function addUtcDays(date, days) {
  return new Date(date.getTime() + days * DAY_MS);
}

function daysBetween(start, end) {
  return Math.round((end.getTime() - start.getTime()) / DAY_MS);
}

function daysInUtcMonth(year, monthIndex) {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

function addCalendarDuration(date, duration, policy) {
  const years = duration.years ?? 0;
  const months = duration.months ?? 0;
  const days = duration.days ?? 0;
  let result;

  if (policy === 'clamp_end_of_month') {
    const totalMonths = date.getUTCFullYear() * 12 + date.getUTCMonth() + years * 12 + months;
    const targetYear = Math.floor(totalMonths / 12);
    const targetMonth = ((totalMonths % 12) + 12) % 12;
    const targetDay = Math.min(date.getUTCDate(), daysInUtcMonth(targetYear, targetMonth));
    result = new Date(Date.UTC(targetYear, targetMonth, targetDay));
  } else if (policy === 'rollover') {
    result = new Date(Date.UTC(
      date.getUTCFullYear() + years,
      date.getUTCMonth() + months,
      date.getUTCDate(),
    ));
  } else {
    throw new Error(`Política de calendário não suportada: ${policy}`);
  }
  return addUtcDays(result, days);
}

function intervalDays(start, end, convention) {
  const difference = daysBetween(start, end);
  if (convention === 'include_start_exclude_end') return difference;
  if (convention === 'include_both') return difference + 1;
  if (convention === 'exclude_start_include_end') return difference;
  if (convention === 'exclude_both') return Math.max(0, difference - 1);
  throw new Error(`Convenção de intervalo não suportada: ${convention}`);
}

function isDirectRun(metaUrl) {
  return Boolean(process.argv[1]) && fileURLToPath(metaUrl) === process.argv[1];
}

async function runJsonCli(calculator, usage) {
  let raw = process.argv[2];
  if (!raw && !process.stdin.isTTY) {
    raw = await new Promise((resolve) => {
      let data = '';
      process.stdin.on('data', (chunk) => { data += chunk; });
      process.stdin.on('end', () => resolve(data.trim()));
    });
  }
  if (!raw) {
    console.error(usage);
    process.exitCode = 2;
    return;
  }
  try {
    const result = calculator(JSON.parse(raw));
    console.log(JSON.stringify(result, null, 2));
    if (result.status === 'blocked') process.exitCode = 3;
  } catch (error) {
    console.error(`Erro de entrada: ${error.message}`);
    process.exitCode = 2;
  }
}

export {
  ENGINE_VERSION,
  addBlocker,
  addCalendarDuration,
  addStep,
  addUtcDays,
  addWarning,
  createAuditMemory,
  daysBetween,
  finalizeAudit,
  hasOwn,
  intervalDays,
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
};
