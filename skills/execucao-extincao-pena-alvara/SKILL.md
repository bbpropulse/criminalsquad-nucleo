---
name: execucao-extincao-pena-alvara
description: >-
  Use para auditar hipótese de pena integralmente cumprida, extinção e providência de soltura ou
  baixa na execução penal. Não use para conclusão definitiva sem autos suficientes, fonte atual ou
  revisão profissional.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r4"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-extincao-pena-alvara]
  positive_triggers: ["pena_cumprida", "extincao_execucao", "alvara_pendente"]
  negative_triggers: ["saldo_presumido", "outro_titulo_nao_conferido", "ordem_automatica"]
  eval_case_ids: ["ep-canon-extincao-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Extinção da pena e providência de soltura

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

## Checklist crítico

1. Confira todos os títulos, processos, mandados e ordens de custódia da pessoa correta.
2. Refaça o saldo com motor determinístico, regra identificada, detração, remição, interrupções e decisões.
3. Compare cálculo auditado, cálculo oficial, atestado e movimentações recentes.
4. Separe extinção da pena, extinção da punibilidade, baixa, expedição e efetivo cumprimento de alvará/ordem.
5. Verifique competência, comunicação entre órgãos, monitoramento e impedimento por outro título.
6. Classifique urgência e risco de custódia indevida; proponha canais e vias a validar pelo profissional.

## Hard fails

- identidade ou título não confirmado;
- cálculo não revisado;
- existência de outro mandado ou processo não pesquisada na fonte autorizada;
- decisão ainda não eficaz ou comunicação não comprovada;
- citação ou regra temporal pendente.

## Saída

Entregue linha do tempo, quadro de títulos, saldo por cenário, blockers, providências ordenadas, responsáveis e comprovantes exigidos. Qualquer peça ou contato externo depende de checkpoint humano.
