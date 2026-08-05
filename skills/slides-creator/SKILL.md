---
name: slides-creator
description: >-
  Use para criar ou operar slides creator: monta apresentação de palestra, treinamento ou aula em
  PowerPoint (.pptx) delegando para a skill `pptx` e as ferramentas de PowerPoint, ou em deck
  HTML/web via `frontend-slides` quando o formato de apresentação em navegador for preferível. Não
  use para mutação de produção, duplicação de capability ou dependência presumida sem validação.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [design, apresentacao, treinamento]
  lifecycle: "active"
  positive_triggers: ["slides-creator", "slides creator", "apresentacao", "slides de palestra", "powerpoint", "deck"]
  schema_version: "5"
  quality_profile: "system-orchestration"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r2"
  delivery_type: "system-artifact"
  freshness_policy: "dependency-state-current"
  negative_triggers: ["mutação de produção, duplicação de capability ou dependência presumida sem validação"]
  guard_triggers: ["capability equivalente não auditada", "dependência, ferramenta ou permissão presumida", "teste usa dado real/sigiloso ou contamina o ambiente"]
  eval_case_ids: ["csq-v5-slides-creator"]
---

# Slides Creator

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

Use quando o pedido for montar os slides de uma palestra, aula, treinamento ou
apresentação institucional -- **não** conteúdo jurídico. Peça/parecer/conteúdo
que cite lei ou jurisprudência fica fora do escopo desta skill.

## Instructions

1. **Formato primeiro.** Confirme: o destino é apresentar com PowerPoint/Keynote
   (arquivo `.pptx` de verdade), ou uma apresentação em navegador (HTML) serve
   melhor? A resposta define qual skill acionar no passo 2.
2. **PowerPoint (padrão para palestra).** Invoque a ferramenta `Skill` com
   `skill: pptx` (via `anthropic-skills:pptx`) e use as ferramentas de
   PowerPoint (criar apresentação, adicionar slide, inserir texto/imagem,
   exportar PDF) para montar o `.pptx`.
3. **Deck web (alternativa).** Se o formato HTML/web for preferível, invoque a
   ferramenta `Skill` com `skill: frontend-slides`.
4. **Estrutura antes de estilo.** Monte primeiro o esqueleto (título de cada
   slide + 1 linha do que ele prova), só depois entre em design -- evita
   retrabalho quando o conteúdo muda.
5. **Verificar antes de entregar.** Abra o arquivo gerado (ou exporte para PDF)
   e confirme visualmente antes de considerar concluído.

## Available operations

- **Montar apresentação .pptx** -- via `pptx` + ferramentas de PowerPoint
- **Montar deck HTML/web** -- via `frontend-slides`
- **Exportar para PDF** -- via ferramentas de PowerPoint
