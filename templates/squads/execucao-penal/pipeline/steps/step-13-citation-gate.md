---
step: "13"
name: "Citation Gate Independente"
type: agent
agent: revisor-citacoes
execution: subagent
model_tier: powerful
depends_on: step-09
parallel_group: revisao-quarteto
on_reject: step-08
max_review_cycles: 3
---

# Step 13 — Citation Gate independente

Execute `agents/revisor-citacoes.custom.md` com três verificadores independentes. Inventarie cada proposição jurídica material, consulte acervo classificado e confirme em fonte oficial atual.

Produza `output/revisao-citacoes/relatorio.md` com `verdict`, `fixes`, contagem por status, URL/data/teor de cada item e divergências entre verificadores.

Qualquer citação `DIVERGENTE`, `NÃO ENCONTRADA`, expirada ou sem alcance confirmado resulta em `REJECT`. Não substitua por citação inventada.
