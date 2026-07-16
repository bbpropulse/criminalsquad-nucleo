---
name: execucao-competencia-vep
description: >-
  Use para diagnosticar o juízo e a via competentes em questão de execução penal, inclusive
  transferência, execução provisória e incidentes. Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r4"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-competencia-vep]
  positive_triggers: ["competencia_execucao", "juizo_execucao", "transferencia_vep"]
  negative_triggers: ["enderecamento_por_memoria", "norma_local_nao_verificada", "protocolo"]
  eval_case_ids: ["ep-canon-competencia-001"]
  type: "prompt"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Competência e via na execução penal

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

## Perguntas obrigatórias

1. Qual título está em execução e qual o seu status?
2. Onde a pessoa está custodiada, domiciliada ou fiscalizada?
3. Há transferência, delegação, execução provisória, pena alternativa, multa ou medida de segurança?
4. Qual decisão ou omissão é impugnada e qual remédio possui prioridade?
5. Há norma de organização judiciária, ato do tribunal ou regra do sistema eletrônico aplicável?

## Método

- Separe competência jurisdicional, atribuição administrativa, local de cumprimento e órgão de protocolo.
- Construa cenários quando fato ou vínculo territorial for controvertido.
- Verifique regra nacional e norma local em fonte oficial no uso atual.
- Aponte prevenção, conexão, risco de declínio, conflito e consequência sobre prazo.
- Para HC, recurso ou mandado de segurança, valide autoridade coatora, subsidiariedade, adequação e competência do tribunal em skill própria.

## Saída

Entregue hipótese principal e alternativas, cada uma com fatos-âncora, fonte oficial, risco, documentos faltantes e providência segura. Status `bloqueado` se faltar título, localização, decisão atacada ou norma local verificável.
