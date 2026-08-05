---
name: execucao-penas-restritivas-direitos
description: >-
  Use para analisar cumprimento, modificação, incidentes e possível conversão de penas restritivas
  de direitos na execução. Não use para conclusão definitiva sem autos suficientes, fonte atual ou
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
  aliases: [ep-penas-restritivas-direitos]
  positive_triggers: ["pena_alternativa", "prestacao_servicos", "conversao_prd"]
  negative_triggers: ["descumprimento_presumido", "conversao_automatica", "titulo_ausente"]
  eval_case_ids: ["ep-canon-prd-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Penas restritivas de direitos

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

1. Confira título, modalidade, condições, carga, entidade, fiscalização e início efetivo.
2. Construa cronologia de intimações, comparecimentos, cumprimento, justificativas e decisões.
3. Diferencie impossibilidade, inadimplemento parcial, descumprimento voluntário e falha estatal/documental.
4. Verifique contraditório, defesa, proporcionalidade, adaptação, compensação e consequências na lei e jurisprudência atuais.
5. Calcule horas, parcelas ou período apenas com motor/configuração auditável.
6. Modele soluções principal e subsidiárias compatíveis; inclua prova para cada justificativa.
7. Faça red team da alegação de descumprimento e da resposta provável do juízo.

## Saída

Quadro condição–prova–cumprimento–divergência–risco–providência, cronologia, cálculo reproduzível quando houver e minuta somente depois do checkpoint.

Bloqueie sem título, ciência comprovada, registros da entidade, decisão atacada ou fonte jurídica atual.
