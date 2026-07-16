---
name: execucao-estrategia-multiteses
description: >-
  Use para construir e hierarquizar teoria estratégica principal, alternativas e teses subsidiárias
  compatíveis em execução penal. Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r3"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-raciocinio-defensivo-multiteses]
  positive_triggers: ["estrategia_execucao", "teses_subsidiarias", "cenarios_defensivos"]
  negative_triggers: ["lista_de_teses", "contradicao_nao_explicada", "fato_nao_ancorado"]
  eval_case_ids: ["ep-canon-estrategia-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Estratégia multítese

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

## Método

1. Defina objetivo, resultado mínimo aceitável, urgência e restrições éticas/processuais.
2. Construa matriz fato–prova–inferência antes das teses.
3. Formule uma narrativa principal coerente e identifique as premissas que a sustentam.
4. Separe:
   - tese principal, sustentada pelos fatos aprovados;
   - subsidiárias compatíveis por eventualidade;
   - exploratórias dependentes de prova ou pesquisa;
   - teses rejeitadas, com motivo.
5. Para cada tese, teste cabimento, prova, fonte, objeção do MP, motivo provável de rejeição, resposta, custo e efeito sobre as demais.
6. Ordene por força, impacto, risco e reversibilidade — não por quantidade.
7. Registre qual mudança factual ou jurídica altera a estratégia.

## Saída

Mapa de decisão com tese, premissas, âncoras, autoridades verificadas, pedidos, incompatibilidades, risco, confiança e gatilho de revisão. O profissional aprova a arquitetura antes da redação.
