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

Executar a Revisora (**Vera Veredito**, `agents/revisor.custom.md`) em **contexto isolado/fresco** (`execution: subagent`): quem redigiu a peça no Step 05 **não** é quem a julga — anti-viés de autoconfirmação. Ela avalia a peça com rubrica jurídica e emite veredicto único **APPROVE** ou **REJECT**. A **intempestividade** e o **incabimento** são condições de veto: qualquer um leva a REJECT imediato, independentemente da qualidade do mérito.

Este step **NÃO é opcional** (`optional: false`): toda peça recursal passa por revisão antes do protocolo.

## Inputs para este Step

- `output/recurso.md` → peça final para revisão
- `output/cabimento.md` → peça/prazo/forma indicados (conferir aderência)
- `output/decisao.md` → decisão atacada (conferir dialeticidade e tempestividade)
- `output/precedentes.md` → precedentes (conferir se foram corretamente citados)
- Best-practice `revisao-juridica` → rubrica de revisão
- Best-practice `recurso-criminal` → conferência de cabimento, peça bipartida e prazos

## Expected Outputs

- `output/revisao-final.md`, começando por um **bloco YAML estruturado** que o Pipeline Runner parseia (não prosa livre):
  ```yaml
  verdict: APPROVE | REJECT
  fixes:
    - "{correção específica — o quê, onde, como — direcionada ao Step 05}"
  ```
  (em APPROVE, `fixes` fica vazio). Abaixo do bloco, o relatório:
  - Checklist por critério (tempestividade, cabimento, peça bipartida/endereçamento, dialeticidade, escalonamento de teses, precedentes citados)
  - Conferência de citações (cada súmula/precedente da peça × `output/precedentes.md`) — complementa o Citation Gate do runner

## Execution Mode

- **Modo:** Subagent — roda em **contexto isolado/fresco** (quem redigiu a peça não é quem a revisa; anti-viés).
- **Modelo:** powerful
- **Skills permitidas:** nenhuma

## Citation Gate (obrigatório antes do APPROVE)

Antes de declarar **APPROVE**, a Vera Veredito **aciona o subagente `verificador-citacoes`** (read-only, contexto isolado) sobre `output/recurso.md` + `output/precedentes.md`. O subagente devolve um veredito por citação (VERIFICADA / DIVERGENTE / NÃO ENCONTRADA) e um veredito geral (`APROVADO`/`REPROVADO`).

- O **APPROVE da revisão fica condicionado** ao veredito `APROVADO` do `verificador-citacoes`.
- Se o `verificador-citacoes` retornar `REPROVADO` (qualquer citação DIVERGENTE ou NÃO ENCONTRADA), a Vera Veredito emite **REJECT**, listando em `fixes` exatamente quais citações corrigir/remover (com a marcação `[DIVERGENTE]` / `[NÃO VERIFICADO]`) — direcionado ao Step 05.

## Quality Gate

Antes de concluir o pipeline:
- [ ] `output/revisao-final.md` existe
- [ ] O bloco YAML no topo declara o veredicto claramente como APPROVE ou REJECT
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** a revisora confirmou expressamente a tempestividade (termo inicial, prazo, data-limite). Prazo vencido = REJECT obrigatório com alerta de preclusão.
- [ ] O `verificador-citacoes` foi acionado e seu veredito geral é `APROVADO` (pré-condição do APPROVE)

### Se APPROVE:
- Concluir o pipeline. A peça em `output/recurso.md` está pronta para protocolo.

### Se REJECT (loop de revisão — on_reject: step-05, teto max_review_cycles=3):
- Retornar ao **Step 05** (Rafael Recurso) passando **apenas** a lista `fixes` (feedback-delta) + a peça anterior — não "reescreva tudo".
- O Rafael Recurso aplica APENAS as correções indicadas.
- A execução **retoma para a frente** pelo pipeline: nova peça → Citation Gate → **Step 06 (o advogado re-aprova a peça corrigida)** → Step 07 (nova revisão). O checkpoint humano a cada ciclo é **intencional** no jurídico.
- Repetir até APPROVE ou atingir o teto (3). Detecção de não-convergência: se um mesmo `fix` reaparecer entre ciclos, **escalar ao usuário antes do teto** com o histórico; no teto sem APPROVE, escalar igualmente.
