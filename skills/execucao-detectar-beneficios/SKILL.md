---
name: execucao-detectar-beneficios
description: >-
  Use para triar oportunidades, benefícios possivelmente implementados e excessos em uma execução
  penal já estruturada. Não use para conclusão definitiva sem autos suficientes, fonte atual ou
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
  aliases: [ep-beneficios-vencidos-detector]
  positive_triggers: ["beneficio_vencido", "oportunidade_execucao", "excesso_execucao"]
  negative_triggers: ["peticao_final", "regra_nao_verificada", "dados_incompletos"]
  eval_case_ids: ["ep-canon-beneficios-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Detectar benefícios e excessos

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

Produza uma triagem de oportunidades, nunca uma conclusão automática. Carregue `execucao-penal-alta-performance`.

## Protocolo

1. Confirme que cronologia, títulos, custódias, remições, faltas, unificações e cálculo oficial têm âncoras.
2. Liste os institutos potencialmente relevantes sem presumir cabimento.
3. Para cada instituto, separe requisitos objetivos, subjetivos, documentais e temporais.
4. Vincule qualquer projeção a um cálculo determinístico com `regra_id` validada.
5. Compare projeção da defesa, cálculo oficial e decisões; preserve divergências.
6. Classifique: `possivel`, `possivelmente_implementado`, `nao_demonstrado` ou `bloqueado`.
7. Priorize liberdade, excesso, regime indevidamente gravoso, extinção e urgências de saúde/proteção.
8. Indique a skill canônica seguinte, documentos faltantes, responsável e prazo.

## Saída mínima

Tabela com instituto, hipótese, premissas, evidências, regra temporal, cálculo, data possível, divergência, risco, confiança, blockers e próxima ação. Gere também o sidecar v4.

Nunca use a expressão “benefício vencido” sem demonstrar a regra, os inputs, a memória do cálculo e a revisão humana.
