---
name: design-creator
description: >-
  Use para criar ou operar design creator: gera artes, banners, ilustrações e ativos visuais
  delegando para a skill `higgsfield-generate`, com orientação de sistema visual (paleta,
  tipografia, layout) das skills `frontend-design` e `ui-ux-pro-max`, e gráficos/visualização de
  dados via `dataviz`. Não use para mutação de produção, duplicação de capability ou dependência
  presumida sem validação.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [design, visual, marca]
  lifecycle: "active"
  positive_triggers: ["design-creator", "design creator", "arte visual", "banner", "design grafico", "identidade visual"]
  schema_version: "5"
  quality_profile: "system-orchestration"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r2"
  delivery_type: "system-artifact"
  freshness_policy: "dependency-state-current"
  negative_triggers: ["mutação de produção, duplicação de capability ou dependência presumida sem validação"]
  guard_triggers: ["capability equivalente não auditada", "dependência, ferramenta ou permissão presumida", "teste usa dado real/sigiloso ou contamina o ambiente"]
  eval_case_ids: ["csq-v5-design-creator"]
---

# Design Creator

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `system-orchestration`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, escopo, ambiente e critérios de aceite.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** reusar antes de adaptar e adaptar antes de criar; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; artefato versionado e critérios de aceite; logs/testes sem segredos e dependências declaradas; riscos, rollback e próxima ação.
- **Gate:** mutação externa/produção sem aprovação. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

## When to use

Use quando o pedido for produzir um ativo visual isolado -- arte, banner,
ilustração, elemento de identidade visual, gráfico de dados -- **não** um site
inteiro (use `site-creator`) nem slides de apresentação (use `slides-creator`)
nem conteúdo jurídico de autoridade para redes (use o squad `conteudo-juridico`,
que tem o gate ético do Provimento 205/2021 embutido).

## Instructions

1. **Tipo de ativo primeiro.** Confirme o que precisa ser gerado: imagem/arte
   (passo 2), orientação de sistema visual como paleta/tipografia (passo 3),
   ou gráfico/dado (passo 4).
2. **Geração de imagem.** Invoque a ferramenta `Skill` com
   `skill: higgsfield-generate` para gerar a arte/banner/ilustração em si.
3. **Sistema visual.** Para paleta, tipografia e diretrizes de UI que sustentem
   a arte gerada, invoque `Skill` com `skill: frontend-design` ou
   `skill: ui-ux-pro-max`.
4. **Gráfico/dado.** Se o ativo for um gráfico ou visualização de dado, invoque
   `Skill` com `skill: dataviz` em vez de gerar como imagem solta.
5. **Verificar antes de entregar.** Confira o resultado renderizado antes de
   considerar concluído -- não declare pronto sem ter visto o ativo final.

## Available operations

- **Gerar imagem/arte/banner** -- via `higgsfield-generate`
- **Orientação de sistema visual (paleta, tipografia)** -- via `frontend-design` / `ui-ux-pro-max`
- **Gráfico e visualização de dado** -- via `dataviz`
