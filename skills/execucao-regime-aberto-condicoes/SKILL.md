---
name: execucao-regime-aberto-condicoes
description: >-
  Use para auditar fixação, cumprimento, modificação e alegado descumprimento de condições do regime
  aberto. Não use para conclusão definitiva sem autos suficientes, fonte atual ou revisão
  profissional.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r3"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-regime-aberto-condicoes]
  positive_triggers: ["condicoes_regime_aberto", "casa_albergado", "descumprimento_aberto"]
  negative_triggers: ["condicao_presumida", "falta_sem_prova", "norma_local_nao_verificada"]
  eval_case_ids: ["ep-canon-aberto-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Condições do regime aberto

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

## Protocolo

1. Leia decisão, termo de condições, prova de ciência e normas locais oficiais.
2. Separe condição legal, judicial, administrativa e limitação material do estabelecimento.
3. Construa cronologia de cumprimento e de cada suposto incidente.
4. Teste clareza, individualização, possibilidade material, proporcionalidade e compatibilidade com trabalho, estudo, saúde e cuidado familiar.
5. Para alegado descumprimento, confronte fato, prova, justificativa, contraditório e consequência juridicamente possível.
6. Modele providências graduais e alternativas, incluindo ajuste de condição, regularização e impugnação, conforme fonte atual.
7. Verifique se inexistência de vaga ou estrutura produziu cumprimento mais gravoso e encaminhe à skill pertinente.

## Saída

Matriz condição–fonte–ciência–cumprimento–prova–risco–solução, com documentos, objeções e próxima ação. Bloqueie sem decisão integral, termo, ciência ou registro do incidente.
