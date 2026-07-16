---
name: execucao-exame-criminologico
description: >-
  Use para analisar exigência, produção, conteúdo e impugnação de exame criminológico na execução
  penal. Não use para conclusão definitiva sem autos suficientes, fonte atual ou revisão
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
  aliases: [ep-exame-criminologico, ep-peca-exame-criminologico]
  positive_triggers: ["exame_criminologico", "requisito_subjetivo", "laudo_execucao"]
  negative_triggers: ["diagnostico_clinico_por_ia", "exigencia_generica", "laudo_ausente"]
  eval_case_ids: ["ep-canon-exame-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Exame criminológico

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

1. Identifique a decisão que exigiu, dispensou ou valorou o exame e sua finalidade concreta.
2. Verifique redação legal, precedentes e alcance temporal em fonte oficial atual; não reutilize regra histórica por memória.
3. Separe comportamento documentado, avaliação técnica, prognóstico, inferência judicial e argumento das partes.
4. Teste fundamentação individualizada, contraditório, atualidade, metodologia, qualificação, consistência interna e aderência aos autos.
5. Aponte dados extrajurídicos discriminatórios, conceitos vagos, fato não comprovado e conclusão que exceda o método.
6. Construa tese principal e alternativas: dispensa, complementação, esclarecimento, contradita, nova avaliação ou valoração limitada, conforme validação jurídica.
7. Se houver demora estatal, registre impacto sobre liberdade e via urgente a validar.

## Bloqueios

Sem decisão, laudo integral, finalidade, data, autoria e fontes atuais, entregue apenas plano de diligências. Nunca produza diagnóstico psicológico, psiquiátrico ou criminológico.

## Saída

Matriz decisão–fundamento–prova–crítica–providência, riscos, objeção provável, documentos e minuta somente após checkpoint humano.
