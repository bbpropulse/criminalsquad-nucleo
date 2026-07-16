---
step: "09"
name: "Revisão Jurídica"
type: agent
agent: revisor
optional: false
execution: subagent
model_tier: powerful
depends_on: step-08
on_reject: step-05
max_review_cycles: 3
---

# Step 09: Vera Veredito — Revisão Jurídica

## Para o Pipeline Runner

Executar a revisão jurídica da peça pela persona **Vera Veredito** (`agents/revisor.custom.md`). Este step **NÃO é opcional** (`optional: false`): toda peça (alegações da 1ª fase ou preparação de plenário) passa por revisão antes da revisão final humana e do protocolo.

A Vera Veredito avalia a peça contra a rubrica de revisão e emite um veredicto único: **APPROVE** ou **REJECT**.

- **Modo:** Subagent — roda em **contexto isolado/fresco** (quem redigiu a peça NÃO é quem a revisa; anti-viés). Não use execução inline aqui.

## Inputs para este Step

- `output/alegacoes-1fase.md` (1ª fase) **e/ou** `output/plenario.md` (plenário) → peça(s) a revisar, conforme a fase corrente
- `output/teses-1fase.md` → checar se as teses aprovadas foram desenvolvidas (e nada inventado)
- `output/pesquisa.md` → conferir se cada fundamento citado é fiel à fonte
- `output/caso.md` → conferir a fase (1ª fase ou pronunciado), endereçamento e qualificação
- Best-practices de referência (não duplicar): `_criminalsquad/core/best-practices/revisao-juridica.md`, `_criminalsquad/core/best-practices/tribunal-juri.md` e `_criminalsquad/core/best-practices/verificacao-citacoes.md`

## Expected Outputs

- `output/revisao.md`, começando por um **bloco YAML estruturado** que o Pipeline Runner parseia (não prosa livre):
  ```yaml
  verdict: APPROVE | REJECT
  fixes:
    - "{correção específica — o quê, onde, como — direcionada ao step de redação da fase corrente}"
  ```
  (em APPROVE, `fixes` fica vazio). Abaixo do bloco, o relatório:
  - Checklist por critério (técnica processual, cabimento das teses na fase certa, fundamentação fiel à fonte, completude da peça)
  - No **plenário**: conferência da ordem e da redação dos **quesitos** (CPP 482-490)
  - Conferência de citações (cada súmula/precedente × `output/pesquisa.md`) — complementa o Citation Gate do runner

## Execution Mode

- **Modo:** Subagent — roda em **contexto isolado/fresco** (anti-viés; o redator não revisa o próprio texto).
- **Skills:** Nenhuma

## Quality Gate

Antes de prosseguir:
- [ ] `output/revisao.md` existe
- [ ] O veredicto está claramente declarado como APPROVE ou REJECT
- [ ] Toda citação verificada (gate); citação não confirmada → REJECT
- [ ] Cabimento das teses na fase correta conferido
- [ ] No plenário, ordem/redação dos quesitos conferida
- [ ] REJECT acompanhado de instruções de correção específicas (lista `fixes`)

### Se APPROVE:
- A peça está pronta para revisão final humana e protocolo. Encerrar o pipeline.

### Se REJECT (loop de revisão — teto `max_review_cycles=3`):

**REGRA POR FASE (on_reject condicional).** O `on_reject` declarado no frontmatter e no `pipeline.yaml` é um **valor único** (`step-05`), que cobre o caso padrão (1ª fase). Porém o step de retorno **depende da fase corrente** da peça que foi revisada — determine a fase a partir de `output/caso.md` e de qual artefato foi revisado:

- **1ª fase** (réu ainda não pronunciado; revisou `output/alegacoes-1fase.md`):
  → retornar ao **Step 05** (Alegações da 1ª Fase), passando **apenas** a lista `fixes` (feedback-delta) + a peça anterior — não "reescreva tudo".
  → a execução **retoma para a frente**: nova minuta → Citation Gate → **Step 06 (o advogado re-aprova as alegações corrigidas)** → Step 09 (nova revisão).

- **Plenário** (réu já pronunciado; revisou `output/plenario.md`):
  → retornar ao **Step 07** (Preparação de Plenário), passando **apenas** a lista `fixes` + a peça anterior.
  → a execução **retoma para a frente**: nova preparação → Citation Gate → **Step 08 (o advogado re-aprova a preparação de plenário corrigida)** → Step 09 (nova revisão).

Em ambos os casos:
- O redator da fase (Rafael 1ª Fase no Step 05; Plínio Plenário no Step 07) aplica **APENAS** as correções indicadas em `fixes`.
- O checkpoint humano de re-aprovação a cada ciclo (Step 06 ou Step 08, conforme a fase) é **intencional** no jurídico.
- Repetir até APPROVE ou atingir o teto (`max_review_cycles=3`). **Detecção de não-convergência:** se um mesmo `fix` reaparecer entre ciclos, **escalar ao usuário imediatamente** com o histórico — não gastar os ciclos restantes. No teto sem APPROVE, **escalar ao usuário** para decisão manual.
