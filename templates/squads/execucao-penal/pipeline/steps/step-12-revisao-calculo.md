---
step: "12"
name: "Revisão de Cálculo e Prazo"
type: agent
agent: revisor-calculo
execution: subagent
model_tier: powerful
depends_on: step-09
parallel_group: revisao-quarteto
on_reject: step-08
max_review_cycles: 3
---

# Step 12 — Revisão independente de cálculo e prazo

Execute `agents/revisor-calculo.custom.md` em contexto fresco. Reproduza a conta a partir da memória, sem trocar a regra para fazer o resultado coincidir.

Produza `output/revisao-calculo/relatorio.md` com `verdict`, `fixes`, `hard_fails`, hash/versão dos inputs e comparação com a minuta e o cálculo oficial.

Regra não aprovada, input sem prova, erro de unidade/contagem, memória não reproduzível ou divergência não explicada resulta em `REJECT`.
