---
step: "11"
name: "Revisão Probatória Independente"
type: agent
agent: revisor-probatorio
execution: subagent
model_tier: powerful
depends_on: step-09
parallel_group: revisao-quarteto
on_reject: step-08
max_review_cycles: 3
---

# Step 11 — Revisão probatória independente

Execute `agents/revisor-probatorio.custom.md` em contexto fresco. Confronte a minuta e o sidecar com cronologia, matriz e documentos.

Produza `output/revisao-probatoria/relatorio.md` com `verdict`, `fixes`, `hard_fails` e tabela afirmação–âncora–contraprova–conclusão.

Fato material sem âncora, mistura de processo, contradição oculta ou inferência apresentada como fato resulta em `REJECT`.
