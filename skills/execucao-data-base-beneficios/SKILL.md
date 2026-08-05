---
name: execucao-data-base-beneficios
description: >-
  Use para analisar datas-base candidatas e montar cenários auditáveis de benefícios na execução
  penal. Não use para escolha automática de lei, fração, marco ou consequência jurídica.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r4"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-data-base-analyzer]
  positive_triggers: ["data_base", "marco_inicial", "projecao_beneficio"]
  negative_triggers: ["percentual_por_memoria", "fato_sem_ancora", "lei_nao_verificada"]
  engines: ["fraction-date"]
  eval_case_ids: ["ep-canon-data-base-001"]
  type: "prompt"
  quality_profile: "legal-calculation"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "audit-calculation"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["regra, fonte oficial ou aplicabilidade não confirmada", "data ou valor material ausente/conflitante", "motor sem teste compatível ou memória reproduzível"]
---

# Datas-base e cenários de benefícios

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-calculation`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** modalidade do cálculo e pergunta exata.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** validar schema e recusar input incompleto ou conflitante; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; resultado e memória de cálculo reproduzível; regra_id, fontes, versão do motor e hash dos inputs; divergências, cenários e campo de revisão humana.
- **Gate:** pedido para declarar consequência jurídica automaticamente. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

## Entradas

- títulos e cronologia ancorados;
- períodos de custódia e liberdade;
- decisões de unificação, detração, remição, falta e reabilitação;
- instituto analisado;
- regras candidatas, cada qual com `regra_id`, fonte e validação humana.

## Método

1. Extraia todos os marcos sem escolher o conveniente.
2. Separe a data-base por instituto; nunca propague automaticamente um evento a todos os benefícios.
3. Identifique qual evento teria efeito interruptivo, suspensivo ou modificador em cada regra candidata.
4. Monte cenários rotulados quando houver controvérsia fática ou jurídica.
5. Passe ao motor apenas `data_base`, duração/base, fração configurada e ajustes já aprovados.
6. Compare resultados com cálculo oficial e registre divergência por variável.

## Saída

Matriz `instituto × marco × regra × cenário`, com âncoras, justificativa, confiança, blockers e memória de cálculo. Bloqueie a conclusão quando não houver decisão sobre a regra temporal ou quando eventos materiais conflitarem.

O motor faz aritmética; o profissional decide a regra jurídica.

## Motor disponível

Depois de a regra e sua aplicabilidade ao caso serem aprovadas por humano, use:

```bash
node scripts/legal-calculators/fraction-date-engine.mjs '<json>'
```

O JSON deve separar `legalRule` de `facts`. O motor recusa regra pendente, fonte não oficial, aplicabilidade não confirmada, conflito de parâmetros e ajuste sem evidência. A saída é memória auditável; não é conclusão jurídica.
