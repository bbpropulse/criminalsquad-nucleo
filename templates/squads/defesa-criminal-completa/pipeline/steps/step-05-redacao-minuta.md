---
step: "05"
name: "Redação da Minuta"
type: agent
agent: redator
depends_on: step-04
---

# Step 05: Rafael Resposta — Redação da Minuta

## Para o Pipeline Runner

Executar a redação da minuta pela persona **Rafael Resposta** (`agents/redator.custom.md`), que **carrega a skill `resposta-preliminar`** (`skills/resposta-preliminar/SKILL.md` — a peça) e se apoia no subagente nativo `.claude/agents/defesa-criminal-resposta-acusacao.md`.

O Rafael Resposta deve redigir a **resposta à acusação** (CPP 396 e 396-A) cobrindo SOMENTE as teses aprovadas em `output/teses-selecionadas.md`, com a estrutura nuclear da skill/subagente: endereçamento → preliminares (CPP 395) → absolvição sumária (CPP 397) → mérito/tese principal → rol de até 8 testemunhas (CPP 401) → provas requeridas → fecho.

> Este step também é o ponto de retorno do loop de revisão: se o Step 07 emitir **REJECT**, o pipeline volta para cá com as instruções de correção (`output/revisao-juridica.md`) e o Rafael Resposta refaz APENAS os pontos indicados.

## Inputs para este Step

- `output/teses-selecionadas.md` → teses aprovadas (escopo da peça)
- `output/pesquisa-juridica.md` → fundamentos (súmulas/precedentes/dispositivos)
- `output/resumo-autos.md` → fatos e fragilidades da acusação
- `output/caso.md` → réu, processo, vara/comarca, tipo penal
- `output/revisao-juridica.md` → (apenas em re-execução pós-REJECT) instruções de correção
- Skill carregada: `skills/resposta-preliminar/SKILL.md`
- Best-practice de referência (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md`

## Expected Outputs

- `output/resposta-acusacao-minuta.md` → minuta completa e auto-contida da resposta à acusação, pronta para revisão jurídica

## Execution Mode

- **Modo:** Inline
- **Skills:** resposta-preliminar
- **Apoio:** subagente nativo `defesa-criminal-resposta-acusacao`

## Quality Gate

Antes de avançar para o Step 06:
- [ ] `output/resposta-acusacao-minuta.md` existe
- [ ] Endereçamento e qualificação (réu, processo, vara) corretos conforme `output/caso.md`
- [ ] Todas as teses de `output/teses-selecionadas.md` estão desenvolvidas (e nenhuma tese não-aprovada foi inventada)
- [ ] Cada tese cita seu fundamento (súmula/precedente/dispositivo)
- [ ] Rol de até 8 testemunhas (CPP 401) e provas requeridas presentes
- [ ] Em re-execução: todas as correções de `output/revisao-juridica.md` foram aplicadas

Se qualquer verificação falhar, solicitar que o Rafael Resposta ajuste a minuta.
