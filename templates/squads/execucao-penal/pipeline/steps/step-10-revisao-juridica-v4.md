---
step: "10"
name: "Revisão Jurídica Independente"
type: agent
agent: revisor
execution: subagent
model_tier: powerful
depends_on: step-09
parallel_group: revisao-quarteto
on_reject: step-08
max_review_cycles: 3
---

# Step 10 — Revisão jurídica independente

Revise via, competência, cabimento, direito intertemporal, coerência multítese, pedidos, ética e completude. Não execute a revisão probatória, aritmética ou de citações por amostragem: elas têm ramos próprios.

Produza `output/revisao-juridica/relatorio.md` com YAML no topo:

```yaml
verdict: APPROVE | REJECT
fixes: []
score: 0
hard_fails: []
```

Defeito crítico **ou alto** resulta em `REJECT`. Liberdade/prazo/cálculo exigem nota mínima 95; demais entregas, 90; nenhum hard fail é compensável.
