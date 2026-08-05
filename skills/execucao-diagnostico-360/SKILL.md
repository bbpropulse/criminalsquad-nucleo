---
name: execucao-diagnostico-360
description: >-
  Use após classificação, extração e cronologia para produzir diagnóstico estratégico integral de
  uma execução penal. Não use para conclusão definitiva sem autos suficientes, fonte atual ou
  revisão profissional.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r3"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-diagnostico-360-execucao]
  positive_triggers: ["diagnostico_360", "auditoria_execucao", "estrategia_execucao"]
  negative_triggers: ["documentos_brutos", "peticao_imediata", "dados_sem_ancora"]
  eval_case_ids: ["ep-canon-diagnostico-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Diagnóstico 360 da execução

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Carregue `execucao-penal-alta-performance`, a matriz fato–prova–tese e somente as skills dos institutos efetivamente detectados.

## Eixos obrigatórios

1. situação atual, títulos, regime e custódia;
2. integridade da guia, cálculo, datas-base e saldo;
3. benefícios, extinção, excesso e regime indevidamente gravoso;
4. incidentes: falta, regressão, unificação, detração, remição e novas condenações;
5. saúde, vulnerabilidade, proteção e condições de cumprimento;
6. competência, prazos, recursos e providências administrativas;
7. documentos ausentes, contradições e decisões pendentes;
8. estratégia principal, alternativas compatíveis e custo do erro.

## Processo

- Use somente fatos ancorados e cálculos reproduzíveis.
- Para cada oportunidade, formule a melhor objeção do MP e a provável razão de indeferimento.
- Classifique impacto, urgência, força probatória, risco jurídico e reversibilidade.
- Priorize uma sequência de ações; não produza lista indiferenciada de teses.
- Pare em checkpoint humano antes de redação.

## Guard de entrada

Se autos ou documentos críticos estiverem incompletos, não improvise um diagnóstico parcial como conclusão. Emita `status: bloqueado`, liste cada blocker com seu impacto, indique a diligência necessária e limite a saída a um plano de complementação documental.

## Entrega

Relatório executivo legível + sidecar v4 com status, cronologia, fatos, provas, lacunas, teses hierarquizadas, cenários, riscos, fontes, cálculos, ação, responsável e prazo.
