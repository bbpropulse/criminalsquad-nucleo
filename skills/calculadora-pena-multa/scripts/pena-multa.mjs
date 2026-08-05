#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ENGINE_ID = 'fine-amount';
const ENGINE_VERSION = '1.1.0';

function plain(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function https(value) {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (plain(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value === undefined ? null : value);
}

function inputHash(payload) {
  if (!plain(payload)) return null;
  return `sha256:${createHash('sha256').update(stableJson({
    facts: payload.facts ?? null,
    legalRule: payload.legalRule ?? null,
  })).digest('hex')}`;
}

function createMemory(payload) {
  return {
    schemaVersion: 'criminalsquad.legal-calculation-memory.v1',
    engine: { id: ENGINE_ID, version: ENGINE_VERSION },
    calculationId: typeof payload?.calculationId === 'string' ? payload.calculationId : null,
    inputHash: inputHash(payload),
    status: 'blocked',
    legalReadiness: 'human_review_required',
    ruleSnapshot: payload?.legalRule === undefined ? null : structuredClone(payload.legalRule),
    inputSnapshot: payload?.facts === undefined ? null : structuredClone(payload.facts),
    steps: [],
    result: null,
    blockers: [],
    warnings: [
      {
        code: 'HUMAN_REVIEW_REQUIRED',
        message: 'Memória aritmética para conferência; regra, capacidade econômica e consequência jurídica exigem revisão humana.',
      },
      {
        code: 'CALLER_ATTESTATION_ONLY',
        message: 'O motor confere a presença da atestação e da fonte, mas não autentica conteúdo jurídico externo.',
      },
    ],
  };
}

function block(state, code, path, message) {
  state.blockers.push({ code, path, message });
}

function integer(state, value, path, minimum = 0) {
  if (!Number.isSafeInteger(value) || value < minimum) {
    block(state, 'INVALID_INTEGER', path, `Informe inteiro seguro maior ou igual a ${minimum}.`);
    return null;
  }
  return value;
}

function finish(state, result = null) {
  if (state.blockers.length) return state;
  state.status = 'completed';
  state.result = result;
  return state;
}

function validateRule(state, rule) {
  if (!plain(rule)) {
    block(state, 'LEGAL_RULE_REQUIRED', '$.legalRule', 'Forneça regra única, atual e verificada; o motor não escolhe a lei.');
    return null;
  }
  for (const key of ['id', 'version', 'description', 'jurisdiction']) {
    if (typeof rule[key] !== 'string' || !rule[key].trim()) {
      block(state, 'LEGAL_RULE_INCOMPLETE', `$.legalRule.${key}`, `Campo obrigatório ausente: ${key}.`);
    }
  }
  const verification = rule.verification;
  if (!plain(verification)
    || verification.status !== 'verified'
    || typeof verification.verifiedBy !== 'string'
    || !verification.verifiedBy.trim()
    || !isoDate(verification.verifiedAt)
    || verification.caseApplicability !== 'confirmed'
    || typeof verification.caseApplicabilityConfirmedBy !== 'string'
    || !verification.caseApplicabilityConfirmedBy.trim()
    || !isoDate(verification.caseApplicabilityConfirmedAt)) {
    block(state, 'LEGAL_RULE_NOT_VERIFIED', '$.legalRule.verification', 'Exija status verified, responsáveis, datas e aplicabilidade confirmada.');
  }
  if (!Array.isArray(rule.sources) || !rule.sources.length) {
    block(state, 'OFFICIAL_SOURCE_REQUIRED', '$.legalRule.sources', 'Informe fonte oficial HTTPS com data de consulta.');
  } else {
    rule.sources.forEach((source, index) => {
      if (!plain(source) || source.type !== 'official' || !https(source.url) || !isoDate(source.retrievedAt)) {
        block(state, 'OFFICIAL_SOURCE_REQUIRED', `$.legalRule.sources[${index}]`, 'Fonte exige type official, URL HTTPS e retrievedAt válido.');
      }
    });
  }
  if (!plain(rule.parameters)) {
    block(state, 'LEGAL_RULE_PARAMETERS_REQUIRED', '$.legalRule.parameters', 'Forneça faixas e arredondamento na regra verificada.');
    return null;
  }

  const dayMin = integer(state, rule.parameters.dayCountMin, '$.legalRule.parameters.dayCountMin', 1);
  const dayMax = integer(state, rule.parameters.dayCountMax, '$.legalRule.parameters.dayCountMax', 1);
  const unitMin = integer(state, rule.parameters.unitAmountMinCents, '$.legalRule.parameters.unitAmountMinCents', 1);
  const unitMax = integer(state, rule.parameters.unitAmountMaxCents, '$.legalRule.parameters.unitAmountMaxCents', 1);
  if (dayMin !== null && dayMax !== null && dayMin > dayMax) {
    block(state, 'LEGAL_RULE_CONFLICT', '$.legalRule.parameters', 'A faixa de dias está invertida.');
  }
  if (unitMin !== null && unitMax !== null && unitMin > unitMax) {
    block(state, 'LEGAL_RULE_CONFLICT', '$.legalRule.parameters', 'A faixa do valor unitário está invertida.');
  }
  if (!['floor', 'ceil', 'nearest'].includes(rule.parameters.rounding)) {
    block(state, 'INVALID_CONFIGURATION', '$.legalRule.parameters.rounding', 'Use floor, ceil ou nearest.');
  }
  return state.blockers.length ? null : rule;
}

function divide(numerator, denominator, rounding) {
  const quotient = numerator / denominator;
  const remainder = numerator % denominator;
  if (rounding === 'floor' || remainder === 0n) return quotient;
  if (rounding === 'ceil') return quotient + 1n;
  return remainder * 2n >= denominator ? quotient + 1n : quotient;
}

function safeNumber(state, value, path) {
  if (value > BigInt(Number.MAX_SAFE_INTEGER)) {
    block(state, 'ARITHMETIC_OVERFLOW', path, 'Resultado excede o limite de inteiro seguro.');
    return null;
  }
  return Number(value);
}

function calculateFineAmount(payload) {
  const state = createMemory(payload);
  if (!plain(payload)) {
    block(state, 'INPUT_REQUIRED', '$', 'Informe um objeto de entrada.');
    return finish(state);
  }
  if (typeof payload.calculationId !== 'string' || !payload.calculationId.trim()) {
    block(state, 'CALCULATION_ID_REQUIRED', '$.calculationId', 'Informe identificador auditável.');
  }
  if (!plain(payload.facts)) {
    block(state, 'FACTS_REQUIRED', '$.facts', 'Informe fatos numéricos separados da regra.');
  }
  const rule = validateRule(state, payload.legalRule);
  if (!rule || !plain(payload.facts)) return finish(state);

  const facts = payload.facts;
  const dayCount = integer(state, facts.dayCount, '$.facts.dayCount', 1);
  const unitAmountCents = integer(state, facts.unitAmountCents, '$.facts.unitAmountCents', 1);
  const correctionFactorBps = integer(state, facts.correctionFactorBps, '$.facts.correctionFactorBps', 1);
  const installments = integer(state, facts.installments, '$.facts.installments', 1);
  for (const key of ['dayCountEvidenceRef', 'unitAmountEvidenceRef', 'correctionEvidenceRef']) {
    if (typeof facts[key] !== 'string' || !facts[key].trim()) {
      block(state, 'EVIDENCE_REFERENCE_REQUIRED', `$.facts.${key}`, `Ancore ${key} em documento, página, índice ou decisão.`);
    }
  }
  if (dayCount !== null && (dayCount < rule.parameters.dayCountMin || dayCount > rule.parameters.dayCountMax)) {
    block(state, 'INPUT_OUTSIDE_VERIFIED_RULE', '$.facts.dayCount', 'Dias-multa fora da faixa da regra fornecida.');
  }
  if (unitAmountCents !== null
    && (unitAmountCents < rule.parameters.unitAmountMinCents || unitAmountCents > rule.parameters.unitAmountMaxCents)) {
    block(state, 'INPUT_OUTSIDE_VERIFIED_RULE', '$.facts.unitAmountCents', 'Valor unitário fora da faixa da regra fornecida.');
  }
  if (state.blockers.length) return finish(state);

  const base = BigInt(dayCount) * BigInt(unitAmountCents);
  const corrected = divide(base * BigInt(correctionFactorBps), 10_000n, rule.parameters.rounding);
  const baseCents = safeNumber(state, base, '$.result.baseAmountCents');
  const correctedCents = safeNumber(state, corrected, '$.result.correctedAmountCents');
  if (state.blockers.length) return finish(state);

  state.steps.push({
    sequence: 1,
    id: 'base-amount',
    description: 'Multiplicação dos dias pelo valor unitário informado e ancorado.',
    inputs: { dayCount, unitAmountCents },
    operation: `${dayCount} * ${unitAmountCents}`,
    output: { baseAmountCents: baseCents },
  });
  state.steps.push({
    sequence: 2,
    id: 'monetary-correction',
    description: 'Aplicação do fator monetário fornecido, sem escolher índice ou data-base.',
    inputs: { baseAmountCents: baseCents, correctionFactorBps, rounding: rule.parameters.rounding },
    operation: `${baseCents} * ${correctionFactorBps} / 10000`,
    output: { correctedAmountCents: correctedCents },
  });

  const quotient = Math.floor(correctedCents / installments);
  const remainder = correctedCents % installments;
  const installmentAmountsCents = Array.from(
    { length: installments },
    (_, index) => quotient + (index < remainder ? 1 : 0),
  );
  state.steps.push({
    sequence: 3,
    id: 'installments',
    description: 'Distribuição exata em centavos; primeiras parcelas absorvem o resto.',
    inputs: { correctedAmountCents: correctedCents, installments },
    operation: 'quociente inteiro e distribuição determinística do resto',
    output: { installmentAmountsCents },
  });

  return finish(state, {
    dayCount,
    unitAmountCents,
    baseAmountCents: baseCents,
    correctionFactorBps,
    correctedAmountCents: correctedCents,
    installments,
    installmentAmountsCents,
    ruleId: rule.id,
    ruleVersion: rule.version,
  });
}

async function cli() {
  let raw = process.argv[2];
  if (!raw && !process.stdin.isTTY) {
    raw = await new Promise((resolve) => {
      let data = '';
      process.stdin.on('data', (chunk) => { data += chunk; });
      process.stdin.on('end', () => resolve(data.trim()));
    });
  }
  if (!raw) {
    console.error('Uso: node pena-multa.mjs \'{"calculationId":"...","legalRule":{...},"facts":{...}}\'');
    process.exitCode = 2;
    return;
  }
  try {
    const result = calculateFineAmount(JSON.parse(raw));
    console.log(JSON.stringify(result, null, 2));
    if (result.status === 'blocked') process.exitCode = 3;
  } catch (error) {
    console.error(`Entrada inválida: ${error.message}`);
    process.exitCode = 2;
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) await cli();

export { calculateFineAmount };
