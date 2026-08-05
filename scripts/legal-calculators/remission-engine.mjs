#!/usr/bin/env node

import {
  addBlocker,
  addStep,
  addWarning,
  createAuditMemory,
  finalizeAudit,
  isDirectRun,
  isPlainObject,
  requireEnum,
  requireSafeInteger,
  runJsonCli,
  validatePayload,
  validateVerifiedLegalRule,
} from './audit-core.mjs';

const ENGINE_ID = 'remission';

function multiplySafely(memory, left, right, path) {
  const product = BigInt(left) * BigInt(right);
  if (product > BigInt(Number.MAX_SAFE_INTEGER)) {
    addBlocker(memory, 'ARITHMETIC_OVERFLOW', path, 'O crédito calculado excede o limite de inteiro seguro.');
    return null;
  }
  return Number(product);
}

function validateConversionRules(memory, parameters) {
  if (!Array.isArray(parameters.conversionRules) || parameters.conversionRules.length === 0) {
    addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.conversionRules', 'Informe ao menos uma regra de conversão verificada.');
    return new Map();
  }

  const rules = new Map();
  parameters.conversionRules.forEach((conversion, index) => {
    const path = `$.legalRule.parameters.conversionRules[${index}]`;
    if (!isPlainObject(conversion)) {
      addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', path, 'Cada conversão deve ser um objeto.');
      return;
    }
    if (typeof conversion.category !== 'string' || conversion.category.trim() === '') {
      addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', `${path}.category`, 'Identifique a categoria da atividade.');
    } else if (rules.has(conversion.category)) {
      addBlocker(memory, 'LEGAL_RULE_CONFLICT', `${path}.category`, `Há mais de uma conversão para a categoria ${conversion.category}.`);
    }
    if (typeof conversion.unitLabel !== 'string' || conversion.unitLabel.trim() === '') {
      addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', `${path}.unitLabel`, 'Informe a unidade documental usada na conversão.');
    }
    requireSafeInteger(memory, conversion.unitsPerBlock, `${path}.unitsPerBlock`, { minimum: 1 });
    requireSafeInteger(memory, conversion.creditDaysPerBlock, `${path}.creditDaysPerBlock`, { minimum: 1 });
    if (typeof conversion.category === 'string' && conversion.category.trim() !== '' && !rules.has(conversion.category)) {
      rules.set(conversion.category, conversion);
    }
  });
  return rules;
}

function validateEntries(memory, entries, conversionRules) {
  if (!Array.isArray(entries)) {
    addBlocker(memory, 'ENTRIES_REQUIRED', '$.facts.entries', 'Informe explicitamente os registros de atividade, ainda que a lista esteja vazia.');
    return;
  }
  const seenIds = new Set();
  entries.forEach((entry, index) => {
    const path = `$.facts.entries[${index}]`;
    if (!isPlainObject(entry)) {
      addBlocker(memory, 'INVALID_ENTRY', path, 'Cada registro deve ser um objeto auditável.');
      return;
    }
    if (typeof entry.id !== 'string' || entry.id.trim() === '') {
      addBlocker(memory, 'INVALID_ENTRY', `${path}.id`, 'Identifique o registro de atividade.');
    } else if (seenIds.has(entry.id)) {
      addBlocker(memory, 'INPUT_CONFLICT', `${path}.id`, `Identificador de atividade repetido: ${entry.id}.`);
    } else {
      seenIds.add(entry.id);
    }
    if (typeof entry.category !== 'string' || !conversionRules.has(entry.category)) {
      addBlocker(memory, 'CONVERSION_RULE_MISSING', `${path}.category`, `Não há conversão verificada para a categoria ${entry.category ?? '(ausente)'}.`);
    }
    requireSafeInteger(memory, entry.units, `${path}.units`);
    if (typeof entry.evidenceRef !== 'string' || entry.evidenceRef.trim() === '') {
      addBlocker(memory, 'EVIDENCE_REFERENCE_REQUIRED', `${path}.evidenceRef`, 'Ancore a quantidade em atestado, certificado, página ou evento processual.');
    }
  });
}

function convertUnits(memory, item, conversion, path) {
  const completedBlocks = Math.floor(item.units / conversion.unitsPerBlock);
  const unconvertedUnits = item.units % conversion.unitsPerBlock;
  const creditedDays = multiplySafely(memory, completedBlocks, conversion.creditDaysPerBlock, path);
  return {
    ...item,
    unitLabel: conversion.unitLabel,
    unitsPerBlock: conversion.unitsPerBlock,
    creditDaysPerBlock: conversion.creditDaysPerBlock,
    completedBlocks,
    unconvertedUnits,
    creditedDays,
  };
}

function calculateRemission(payload) {
  const memory = createAuditMemory(ENGINE_ID, payload);
  if (!validatePayload(memory, payload)) return finalizeAudit(memory);
  const rule = validateVerifiedLegalRule(memory, payload.legalRule);
  if (!rule) return finalizeAudit(memory);

  const parameters = rule.parameters;
  const aggregationMode = requireEnum(
    memory,
    parameters.aggregationMode,
    ['by_category', 'per_entry'],
    '$.legalRule.parameters.aggregationMode',
  );
  const conversionRules = validateConversionRules(memory, parameters);

  if (!isPlainObject(parameters.cap)) {
    addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.cap', 'Informe explicitamente cap.mode como none ou maximum_days.');
  } else {
    requireEnum(memory, parameters.cap.mode, ['none', 'maximum_days'], '$.legalRule.parameters.cap.mode');
    if (parameters.cap.mode === 'maximum_days') {
      requireSafeInteger(memory, parameters.cap.days, '$.legalRule.parameters.cap.days');
    }
    if (parameters.cap.mode === 'none' && Object.prototype.hasOwnProperty.call(parameters.cap, 'days')) {
      addBlocker(memory, 'LEGAL_RULE_CONFLICT', '$.legalRule.parameters.cap', 'A configuração sem teto não pode informar quantidade máxima de dias.');
    }
  }

  validateEntries(memory, payload.facts.entries, conversionRules);
  if (memory.blockers.length > 0) return finalizeAudit(memory);

  const calculationItems = [];
  if (aggregationMode === 'by_category') {
    const groups = new Map();
    for (const entry of payload.facts.entries) {
      const current = groups.get(entry.category) ?? { category: entry.category, units: 0, entryIds: [], evidenceRefs: [] };
      current.units += entry.units;
      if (!Number.isSafeInteger(current.units)) {
        addBlocker(memory, 'ARITHMETIC_OVERFLOW', '$.facts.entries', `A soma das unidades da categoria ${entry.category} excede o limite seguro.`);
        return finalizeAudit(memory);
      }
      current.entryIds.push(entry.id);
      current.evidenceRefs.push(entry.evidenceRef);
      groups.set(entry.category, current);
    }
    for (const group of groups.values()) {
      calculationItems.push(convertUnits(memory, group, conversionRules.get(group.category), '$.result.breakdown'));
    }
  } else {
    for (const entry of payload.facts.entries) {
      calculationItems.push(convertUnits(
        memory,
        {
          category: entry.category,
          units: entry.units,
          entryIds: [entry.id],
          evidenceRefs: [entry.evidenceRef],
        },
        conversionRules.get(entry.category),
        '$.result.breakdown',
      ));
    }
  }

  if (memory.blockers.length > 0) return finalizeAudit(memory);

  let grossCreditedDays = 0;
  for (const item of calculationItems) {
    grossCreditedDays += item.creditedDays;
    if (!Number.isSafeInteger(grossCreditedDays)) {
      addBlocker(memory, 'ARITHMETIC_OVERFLOW', '$.result.grossCreditedDays', 'A soma dos créditos excede o limite de inteiro seguro.');
      return finalizeAudit(memory);
    }
  }

  const cap = parameters.cap;
  const capApplied = cap.mode === 'maximum_days' && grossCreditedDays > cap.days;
  const creditedDays = capApplied ? cap.days : grossCreditedDays;
  if (capApplied) {
    addWarning(memory, 'CAP_APPLIED', `O crédito bruto foi limitado a ${cap.days} dia(s), conforme a regra fornecida.`);
  }

  addStep(
    memory,
    'aggregation',
    'Agrupamento dos registros segundo a modalidade expressamente configurada.',
    { aggregationMode, entries: payload.facts.entries },
    aggregationMode === 'by_category' ? 'soma de unidades por categoria' : 'preservação de cada registro',
    { calculationItems: calculationItems.map(({ category, units, entryIds }) => ({ category, units, entryIds })) },
  );
  addStep(
    memory,
    'conversion',
    'Conversão inteira por blocos, sem presumir destino jurídico das unidades remanescentes.',
    { conversionRules: parameters.conversionRules },
    'floor(units / unitsPerBlock) * creditDaysPerBlock',
    { breakdown: calculationItems, grossCreditedDays },
  );
  addStep(
    memory,
    'cap',
    'Aplicação do teto somente quando fornecido na regra verificada.',
    { cap },
    cap.mode === 'none' ? 'nenhum teto' : `min(${grossCreditedDays}, ${cap.days})`,
    { capApplied, creditedDays },
  );

  const unconvertedUnitsByCategory = {};
  for (const item of calculationItems) {
    unconvertedUnitsByCategory[item.category] = (unconvertedUnitsByCategory[item.category] ?? 0) + item.unconvertedUnits;
  }

  return finalizeAudit(memory, {
    aggregationMode,
    grossCreditedDays,
    creditedDays,
    capApplied,
    breakdown: calculationItems,
    unconvertedUnitsByCategory,
    ruleId: rule.id,
    ruleVersion: rule.version,
  });
}

if (isDirectRun(import.meta.url)) {
  await runJsonCli(
    calculateRemission,
    'Uso: node remission-engine.mjs \'{"calculationId":"...","legalRule":{...},"facts":{"entries":[]}}\'',
  );
}

export { calculateRemission };
