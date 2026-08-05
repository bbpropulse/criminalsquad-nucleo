#!/usr/bin/env node

import {
  addBlocker,
  addCalendarDuration,
  addStep,
  addUtcDays,
  addWarning,
  createAuditMemory,
  daysBetween,
  finalizeAudit,
  intervalDays,
  isDirectRun,
  isPlainObject,
  iso,
  parseIsoDate,
  requireEnum,
  requireSafeInteger,
  runJsonCli,
  validatePayload,
  validateVerifiedLegalRule,
} from './audit-core.mjs';

const ENGINE_ID = 'executory-limitation';

function validatePeriod(memory, parameters) {
  if (!isPlainObject(parameters.period)) {
    addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.period', 'Informe years, months e days explicitamente.');
    return null;
  }
  const years = requireSafeInteger(memory, parameters.period.years, '$.legalRule.parameters.period.years');
  const months = requireSafeInteger(memory, parameters.period.months, '$.legalRule.parameters.period.months');
  const days = requireSafeInteger(memory, parameters.period.days, '$.legalRule.parameters.period.days');
  if (years === 0 && months === 0 && days === 0) {
    addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.period', 'O período não pode ser integralmente zero.');
  }
  return memory.blockers.length === 0 ? { years, months, days } : null;
}

function validateEventPolicies(memory, parameters) {
  if (!Array.isArray(parameters.eventPolicies)) {
    addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', '$.legalRule.parameters.eventPolicies', 'Informe explicitamente as políticas de eventos, ainda que a lista esteja vazia.');
    return new Map();
  }
  const policies = new Map();
  parameters.eventPolicies.forEach((policy, index) => {
    const path = `$.legalRule.parameters.eventPolicies[${index}]`;
    if (!isPlainObject(policy)) {
      addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', path, 'Cada política de evento deve ser um objeto.');
      return;
    }
    if (typeof policy.type !== 'string' || policy.type.trim() === '') {
      addBlocker(memory, 'LEGAL_RULE_INCOMPLETE', `${path}.type`, 'Identifique o tipo do evento.');
    } else if (policies.has(policy.type)) {
      addBlocker(memory, 'LEGAL_RULE_CONFLICT', `${path}.type`, `Há políticas conflitantes ou duplicadas para ${policy.type}.`);
    }
    const effect = requireEnum(memory, policy.effect, ['interrupt', 'suspend'], `${path}.effect`);
    if (effect === 'interrupt') {
      requireEnum(
        memory,
        policy.restartConvention,
        ['from_event_date', 'day_after_event'],
        `${path}.restartConvention`,
      );
    }
    if (effect === 'suspend') {
      requireEnum(
        memory,
        policy.intervalConvention,
        ['include_start_exclude_end', 'include_both', 'exclude_start_include_end', 'exclude_both'],
        `${path}.intervalConvention`,
      );
      requireEnum(
        memory,
        policy.extensionBasis,
        ['full_interval', 'only_until_current_expiry'],
        `${path}.extensionBasis`,
      );
    }
    if (typeof policy.type === 'string' && policy.type.trim() !== '' && !policies.has(policy.type)) {
      policies.set(policy.type, policy);
    }
  });
  return policies;
}

function validateAndNormalizeEvents(memory, facts, policies, baseDate, overlapPolicy) {
  if (!Array.isArray(facts.events)) {
    addBlocker(memory, 'EVENTS_REQUIRED', '$.facts.events', 'Informe explicitamente os eventos, ainda que a lista esteja vazia.');
    return [];
  }

  const seenIds = new Set();
  const normalized = [];
  facts.events.forEach((event, index) => {
    const path = `$.facts.events[${index}]`;
    if (!isPlainObject(event)) {
      addBlocker(memory, 'INVALID_EVENT', path, 'Cada evento deve ser um objeto auditável.');
      return;
    }
    if (typeof event.id !== 'string' || event.id.trim() === '') {
      addBlocker(memory, 'INVALID_EVENT', `${path}.id`, 'Identifique o evento.');
    } else if (seenIds.has(event.id)) {
      addBlocker(memory, 'INPUT_CONFLICT', `${path}.id`, `Identificador de evento repetido: ${event.id}.`);
    } else {
      seenIds.add(event.id);
    }
    const policy = typeof event.type === 'string' ? policies.get(event.type) : null;
    if (!policy) {
      addBlocker(memory, 'EVENT_POLICY_MISSING', `${path}.type`, `Não há política jurídica verificada para o evento ${event.type ?? '(ausente)'}.`);
      return;
    }
    if (typeof event.evidenceRef !== 'string' || event.evidenceRef.trim() === '') {
      addBlocker(memory, 'EVIDENCE_REFERENCE_REQUIRED', `${path}.evidenceRef`, 'Ancore o evento em documento, página, certidão ou decisão.');
    }

    if (policy.effect === 'interrupt') {
      const date = parseIsoDate(memory, event.date, `${path}.date`);
      if (date && date < baseDate) {
        addBlocker(memory, 'EVENT_BEFORE_BASE_DATE', `${path}.date`, 'O evento antecede o marco inicial; revise a cronologia e a regra aplicável.');
      }
      if (date) normalized.push({ ...event, policy, effect: 'interrupt', effectiveDate: date });
    }
    if (policy.effect === 'suspend') {
      const startDate = parseIsoDate(memory, event.startDate, `${path}.startDate`);
      const endDate = parseIsoDate(memory, event.endDate, `${path}.endDate`);
      if (startDate && endDate && endDate < startDate) {
        addBlocker(memory, 'INVALID_EVENT_INTERVAL', path, 'O fim da suspensão não pode anteceder o início.');
      }
      if (startDate && startDate < baseDate) {
        addBlocker(memory, 'EVENT_BEFORE_BASE_DATE', `${path}.startDate`, 'A suspensão começa antes do marco inicial; a entrada deve ser juridicamente normalizada.');
      }
      if (startDate && endDate) normalized.push({ ...event, policy, effect: 'suspend', effectiveDate: startDate, start: startDate, end: endDate });
    }
  });

  if (memory.blockers.length > 0) return normalized;

  const suspensions = normalized
    .filter((event) => event.effect === 'suspend')
    .sort((left, right) => left.start - right.start || left.end - right.end);
  if (overlapPolicy === 'reject') {
    for (let index = 1; index < suspensions.length; index += 1) {
      const previous = suspensions[index - 1];
      const current = suspensions[index];
      if (current.start <= previous.end) {
        addBlocker(
          memory,
          'OVERLAPPING_SUSPENSIONS',
          '$.facts.events',
          `Suspensões ${previous.id} e ${current.id} se sobrepõem; resolva o conflito antes do cálculo.`,
        );
      }
    }
  }

  const interruptions = normalized.filter((event) => event.effect === 'interrupt');
  for (const suspension of suspensions) {
    for (const interruption of interruptions) {
      if (interruption.effectiveDate >= suspension.start && interruption.effectiveDate <= suspension.end) {
        addBlocker(
          memory,
          'EVENT_TIMELINE_CONFLICT',
          '$.facts.events',
          `A interrupção ${interruption.id} ocorre dentro da suspensão ${suspension.id}; a precedência deve ser definida juridicamente antes do cálculo.`,
        );
      }
    }
  }

  return normalized;
}

function computeExpiry(anchor, period, calendarPolicy, startDateCounting) {
  const date = addCalendarDuration(anchor, period, calendarPolicy);
  return startDateCounting === 'include_start_date' ? addUtcDays(date, -1) : date;
}

function eventApplies(effectiveDate, currentExpiry, eventAtDeadlinePolicy) {
  return eventAtDeadlinePolicy === 'applies'
    ? effectiveDate <= currentExpiry
    : effectiveDate < currentExpiry;
}

function calculateExecutoryLimitation(payload) {
  const memory = createAuditMemory(ENGINE_ID, payload);
  if (!validatePayload(memory, payload)) return finalizeAudit(memory);
  const rule = validateVerifiedLegalRule(memory, payload.legalRule);
  if (!rule) return finalizeAudit(memory);

  const parameters = rule.parameters;
  const period = validatePeriod(memory, parameters);
  const calendarPolicy = requireEnum(
    memory,
    parameters.calendarAdditionPolicy,
    ['clamp_end_of_month', 'rollover'],
    '$.legalRule.parameters.calendarAdditionPolicy',
  );
  const startDateCounting = requireEnum(
    memory,
    parameters.startDateCounting,
    ['exclude_start_date', 'include_start_date'],
    '$.legalRule.parameters.startDateCounting',
  );
  const eventAtDeadlinePolicy = requireEnum(
    memory,
    parameters.eventAtDeadlinePolicy,
    ['applies', 'does_not_apply'],
    '$.legalRule.parameters.eventAtDeadlinePolicy',
  );
  const overlapPolicy = requireEnum(
    memory,
    parameters.suspensionOverlapPolicy,
    ['reject', 'sum_explicitly'],
    '$.legalRule.parameters.suspensionOverlapPolicy',
  );
  const policies = validateEventPolicies(memory, parameters);
  const baseDate = parseIsoDate(memory, payload.facts.baseDate, '$.facts.baseDate');
  const referenceDate = payload.facts.referenceDate === undefined
    ? null
    : parseIsoDate(memory, payload.facts.referenceDate, '$.facts.referenceDate');
  if (memory.blockers.length > 0) return finalizeAudit(memory);

  const events = validateAndNormalizeEvents(memory, payload.facts, policies, baseDate, overlapPolicy);
  if (memory.blockers.length > 0) return finalizeAudit(memory);

  const sortedEvents = [...events].sort((left, right) => {
    const dateDifference = left.effectiveDate - right.effectiveDate;
    if (dateDifference !== 0) return dateDifference;
    return left.id.localeCompare(right.id);
  });
  const inputOrder = events.map((event) => event.id).join('|');
  const sortedOrder = sortedEvents.map((event) => event.id).join('|');
  if (inputOrder !== sortedOrder) {
    addWarning(memory, 'EVENTS_SORTED', 'Os eventos foram ordenados cronologicamente; a ordem original permanece no inputSnapshot.');
  }

  for (let index = 1; index < sortedEvents.length; index += 1) {
    const previous = sortedEvents[index - 1];
    const current = sortedEvents[index];
    if (previous.effectiveDate.getTime() === current.effectiveDate.getTime()
        && (previous.effect === 'interrupt' || current.effect === 'interrupt')) {
      addBlocker(memory, 'EVENT_ORDER_CONFLICT', '$.facts.events', `Eventos ${previous.id} e ${current.id} têm o mesmo marco e ordem juridicamente ambígua.`);
    }
  }
  if (memory.blockers.length > 0) return finalizeAudit(memory);

  const initialExpiry = computeExpiry(baseDate, period, calendarPolicy, startDateCounting);
  let currentExpiry = initialExpiry;
  const appliedEvents = [];
  const ignoredEvents = [];

  addStep(
    memory,
    'initial-expiry',
    'Cálculo da data-base de expiração exclusivamente com o período e a convenção fornecidos.',
    { baseDate: payload.facts.baseDate, period, calendarPolicy, startDateCounting },
    'adição calendárica configurada e ajuste expresso de inclusão do marco inicial',
    { expiryDate: iso(initialExpiry) },
  );

  for (const event of sortedEvents) {
    if (!eventApplies(event.effectiveDate, currentExpiry, eventAtDeadlinePolicy)) {
      ignoredEvents.push({
        id: event.id,
        type: event.type,
        reason: 'event_after_current_expiry',
        currentExpiryAtEvaluation: iso(currentExpiry),
      });
      addWarning(memory, 'EVENT_AFTER_EXPIRY_NOT_APPLIED', `O evento ${event.id} não foi aplicado porque ocorreu após o prazo corrente, conforme a configuração informada.`);
      continue;
    }

    if (event.effect === 'interrupt') {
      const previousExpiry = currentExpiry;
      const restartAnchor = event.policy.restartConvention === 'day_after_event'
        ? addUtcDays(event.effectiveDate, 1)
        : event.effectiveDate;
      currentExpiry = computeExpiry(restartAnchor, period, calendarPolicy, startDateCounting);
      const applied = {
        id: event.id,
        type: event.type,
        effect: event.effect,
        evidenceRef: event.evidenceRef,
        previousExpiry: iso(previousExpiry),
        eventDate: iso(event.effectiveDate),
        restartAnchor: iso(restartAnchor),
        newExpiry: iso(currentExpiry),
      };
      appliedEvents.push(applied);
      addStep(
        memory,
        `event-${event.id}`,
        'Aplicação de interrupção previamente classificada pela regra jurídica fornecida.',
        { event: { id: event.id, type: event.type, date: event.date, evidenceRef: event.evidenceRef }, policy: event.policy },
        'reinício integral a partir do marco configurado',
        applied,
      );
    }

    if (event.effect === 'suspend') {
      const previousExpiry = currentExpiry;
      const intervalEnd = event.policy.extensionBasis === 'only_until_current_expiry' && event.end > currentExpiry
        ? currentExpiry
        : event.end;
      const extensionDays = intervalDays(event.start, intervalEnd, event.policy.intervalConvention);
      currentExpiry = addUtcDays(currentExpiry, extensionDays);
      const applied = {
        id: event.id,
        type: event.type,
        effect: event.effect,
        evidenceRef: event.evidenceRef,
        previousExpiry: iso(previousExpiry),
        intervalStart: iso(event.start),
        intervalEndUsed: iso(intervalEnd),
        extensionDays,
        newExpiry: iso(currentExpiry),
      };
      appliedEvents.push(applied);
      addStep(
        memory,
        `event-${event.id}`,
        'Aplicação de suspensão previamente classificada pela regra jurídica fornecida.',
        {
          event: { id: event.id, type: event.type, startDate: event.startDate, endDate: event.endDate, evidenceRef: event.evidenceRef },
          policy: event.policy,
        },
        `extensão por ${extensionDays} dia(s) segundo a convenção de intervalo configurada`,
        applied,
      );
    }
  }

  let referenceComparison = null;
  if (referenceDate) {
    const difference = daysBetween(currentExpiry, referenceDate);
    referenceComparison = {
      referenceDate: payload.facts.referenceDate,
      relationToExpiry: difference < 0 ? 'before' : difference === 0 ? 'on' : 'after',
      signedDaysFromExpiry: difference,
    };
    addStep(
      memory,
      'reference-comparison',
      'Comparação cronológica neutra; o motor não declara extinção da punibilidade.',
      { expiryDate: iso(currentExpiry), referenceDate: payload.facts.referenceDate },
      'diferença de dias civis entre a expiração calculada e a data de referência',
      referenceComparison,
    );
  }

  return finalizeAudit(memory, {
    baseDate: payload.facts.baseDate,
    period,
    initialExpiryDate: iso(initialExpiry),
    finalExpiryDate: iso(currentExpiry),
    appliedEvents,
    ignoredEvents,
    referenceComparison,
    ruleId: rule.id,
    ruleVersion: rule.version,
  });
}

if (isDirectRun(import.meta.url)) {
  await runJsonCli(
    calculateExecutoryLimitation,
    'Uso: node executory-limitation-engine.mjs \'{"calculationId":"...","legalRule":{...},"facts":{"baseDate":"AAAA-MM-DD","events":[]}}\'',
  );
}

export { calculateExecutoryLimitation };
