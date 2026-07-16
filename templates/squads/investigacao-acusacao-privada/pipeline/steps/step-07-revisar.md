---
step: "07"
name: "Revisão Final"
type: agent
agent: revisor
optional: false
execution: subagent
model_tier: powerful
depends_on: step-06
on_reject: step-05
max_review_cycles: 3
---

# Step 07: Vera Veredito — Revisão Final (APPROVE / REJECT)

## Para o Pipeline Runner

Executar a Revisora (Vera Veredito) em **contexto isolado/fresco** (subagente): quem redigiu a peça (Quim Queixa) **NÃO** pode ser quem a revisa — anti-viés. Este step **NÃO é opcional** (`optional: false`): toda peça da acusação passa por revisão antes do protocolo. Ela avalia a peça com rubrica jurídica e emite veredicto único **APPROVE** ou **REJECT**. A **decadência** (prazo de 6 meses consumado) e o **incabimento** (peça errada para a espécie de ação) são condições de veto: qualquer um leva a REJECT imediato, independentemente da qualidade do mérito.

## Inputs para este Step

- `output/peca.md` → peça final para revisão
- `output/cabimento.md` → espécie de ação, peça/fundamento e prazo indicados (conferir aderência)
- `output/fatos.md` → relato e tipo penal (conferir adequação típica e termo inicial da decadência)
- `output/precedentes.md` → precedentes (conferir se cada citação da peça é fiel à fonte pesquisada)
- Best-practice `revisao-juridica` → rubrica de revisão
- Best-practice `peticao-criminal` → conferência de estrutura, endereçamento e requisitos da peça
- Best-practice `verificacao-citacoes` → conferência das citações antes do veredicto

## Expected Outputs

- `output/revisao-final.md`, começando por um **bloco YAML estruturado** que o Pipeline Runner parseia (não prosa livre):
  ```yaml
  verdict: APPROVE | REJECT
  fixes:
    - "{correção específica — o quê, onde, como — direcionada ao Step 05}"
  ```
  (em APPROVE, `fixes` fica vazio). Abaixo do bloco, o relatório:
  - Checklist por critério (decadência, cabimento, endereçamento/verbo/partes, requisitos da queixa, adequação típica, precedentes)
  - Conferência de citações (cada súmula/precedente × `output/precedentes.md`) — complementa o Citation Gate do runner
  - Linha "Strength:" explícita (o que funcionou)

## Citation Gate (obrigatório antes do APPROVE)

Antes de emitir APPROVE, o Pipeline Runner executa o **Citation Gate** (Passo 4.5 do runner) sobre `output/peca.md`:

1. Acionar o subagente `verificador-citacoes` (read-only, contexto fresco) passando `output/peca.md` + `output/precedentes.md`. Ele devolve, por citação: VERIFICADA / DIVERGENTE / NÃO ENCONTRADA.
2. Toda citação DIVERGENTE/NÃO ENCONTRADA é marcada no texto com `[DIVERGENTE]`/`[NÃO VERIFICADO]` (ver best-practice `verificacao-citacoes`).
3. **Enquanto restar qualquer marcador de pendência, o veredicto NÃO pode ser APPROVE.** Devolver ao Step 05 apenas as citações problemáticas para correção/remoção e reverificar (loop gerador→verificador, teto `max_review_cycles=3`). No teto sem APROVADO, escalar ao usuário com a lista de pendências.

## Execution Mode

- **Modo:** Subagent — roda em **contexto isolado/fresco** (quem redigiu a peça não é quem a revisa; anti-viés).
- **Skills permitidas:** nenhuma

## Quality Gate

Antes de concluir o pipeline:
- [ ] `output/revisao-final.md` existe
- [ ] O veredicto está claramente declarado como APPROVE ou REJECT no bloco YAML do topo
- [ ] Nenhum marcador `[DIVERGENTE]`/`[NÃO VERIFICADO]` remanescente em `output/peca.md` (Citation Gate aprovado)
- [ ] **VERIFICAÇÃO DE DECADÊNCIA (crítico):** a revisora confirmou expressamente a tempestividade (termo inicial = conhecimento da autoria, prazo de 6 meses, data-limite). Prazo vencido = REJECT obrigatório com alerta de decadência consumada (extinção da punibilidade — CP art. 107, IV).

### Se APPROVE:
- Concluir o pipeline. A peça em `output/peca.md` está pronta para protocolo.

### Se REJECT (loop de revisão — on_reject: step-05, teto max_review_cycles=3):
- Retornar ao **Step 05** (Quim Queixa) passando **apenas** a lista `fixes` (feedback-delta) + a peça anterior — não "reescreva tudo".
- O Quim Queixa aplica APENAS as correções indicadas.
- A execução **retoma para a frente** pelo pipeline: nova peça → Citation Gate → **Step 06 (o advogado re-aprova a peça corrigida)** → Step 07 (nova revisão). O checkpoint humano a cada ciclo é **intencional** no jurídico.
- **Não-convergência:** se uma mesma correção (`fixes`) reaparecer entre ciclos, escalar ao usuário antes do teto.
- Repetir até APPROVE ou atingir o teto (3); no teto, **escalar ao usuário** com o histórico.
