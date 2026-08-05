---
name: defesa-epidemia-medida-sanitaria-omissao-notificacao
description: >-
  Use para analisar defesa epidemia medida sanitaria omissao notificacao: Placeholder em quarentena
  para futura skill sobre delitos relacionados a epidemia, medida sanitária e omissão de
  notificação; não usar em produção até validação jurídica e casos-ouro. Não use para conclusão
  definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  lifecycle: "quarantined"
  positive_triggers: ["epidemia", "medida_sanitaria", "omissao_notificacao"]
  negative_triggers: ["entrega_producao", "peca_protocolavel", "parecer_final"]
  type: "prompt"
  version: "0.0.0"
  categories: [law, criminal, defesa, saude-publica]
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "quarantined"
  eval_case_ids: ["csq-v5-defesa-epidemia-medida-sanitaria-omissao-notificacao"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Skill em quarentena

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `quarantined` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta pasta ainda não contém um protocolo jurídico validado. Não executar nem
usar como fundamento de peça, parecer ou orientação. Encaminhe a demanda para
triagem humana e para as skills ativas pertinentes até que esta skill cumpra os
gates de pesquisa oficial, citações verificadas, casos-ouro e revisão jurídica.
