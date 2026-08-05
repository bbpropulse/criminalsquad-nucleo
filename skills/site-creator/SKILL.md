---
name: site-creator
description: >-
  Use para criar ou operar site creator: monta site, landing page ou dashboard (HTML/CSS/JS)
  delegando para a skill `ui-ux-pro-max` (design de UI e stacks como React/Next.js/Tailwind/shadcn)
  e publica com o `Artifact` (URL compartilhável na hora); para deploy com domínio/hospedagem
  própria, usa o MCP da Vercel já conectado. Não use para mutação de produção, duplicação de
  capability ou dependência presumida sem validação.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [design, site, produto]
  lifecycle: "active"
  positive_triggers: ["site-creator", "site creator", "criar site", "landing page", "pagina institucional", "site do escritorio"]
  schema_version: "5"
  quality_profile: "system-orchestration"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r2"
  delivery_type: "system-artifact"
  freshness_policy: "dependency-state-current"
  negative_triggers: ["mutação de produção, duplicação de capability ou dependência presumida sem validação"]
  guard_triggers: ["capability equivalente não auditada", "dependência, ferramenta ou permissão presumida", "teste usa dado real/sigiloso ou contamina o ambiente"]
  eval_case_ids: ["csq-v5-site-creator"]
---

# Site Creator

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

Use quando o pedido for montar um site, landing page, página institucional ou
dashboard -- **não** conteúdo jurídico. É a skill certa para o marketing do
próprio escritório (site institucional, landing de produto), nunca para peça,
parecer ou conteúdo que cite lei/jurisprudência: isso fica fora do Citation
Gate e do resto do motor jurídico do CriminalSquad de propósito, porque não é
matéria jurídica -- é produção de site.

Se o pedido for conteúdo de autoridade para redes sociais (carrossel/post),
não é aqui: use o squad `conteudo-juridico` + skill `publicacao-redes`, que
tem o gate ético do Provimento 205/2021 da OAB embutido.

## Instructions

1. **Escopo primeiro.** Confirme com quem pediu: é página única (landing) ou
   site com várias seções? Precisa de hospedagem com domínio próprio, ou uma
   URL compartilhável já resolve?
2. **Design e build.** Invoque a ferramenta `Skill` com `skill: ui-ux-pro-max`
   para gerar o HTML/CSS/JS (ou o stack apropriado -- React, Next.js, Tailwind,
   shadcn/ui) com paleta, tipografia e componentes coerentes.
3. **Publicação rápida (padrão).** Para uma página única ou protótipo, publique
   o HTML resultante com a ferramenta `Artifact` -- sai com URL compartilhável
   sem nenhuma configuração adicional.
4. **Deploy real (quando pedido).** Se precisar de domínio próprio ou hospedagem
   fora do Artifact, use as ferramentas MCP da Vercel (`deploy_to_vercel` e
   correlatas) já conectadas nesta sessão.
5. **Verificar antes de entregar.** Leia o resultado publicado (ou peça
   confirmação visual) antes de considerar concluído -- não declare pronto sem
   ter visto o site renderizado.

## Available operations

- **Montar site/landing/dashboard** -- via `ui-ux-pro-max`
- **Publicar rápido com URL** -- via `Artifact`
- **Deploy com domínio próprio** -- via MCP da Vercel
