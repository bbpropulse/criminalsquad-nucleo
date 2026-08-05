---
step: "05"
name: "Cálculo Determinístico"
type: agent
agent: calculista
execution: subagent
model_tier: powerful
depends_on: step-04
---

# Step 05 — Cálculo determinístico e memória auditável

## Para o Pipeline Runner

Execute `agents/calculista.custom.md` somente depois do checkpoint jurídico do Step 04.

Selecione no máximo um motor principal:

- `fraction-date-engine.mjs` para data por fração ou dias fixos já aprovados;
- `remission-engine.mjs` para conversões de remição já aprovadas;
- `executory-limitation-engine.mjs` para prescrição executória com período/eventos já aprovados.

O agente recebe a regra; não a inventa. Se o instituto não exigir conta, produza memória `not_applicable` com justificativa, sem executar motor.

## Inputs

- `output/caso.md`
- `output/resumo-execucao.md`
- `output/caso-estruturado.json`
- `output/requisitos-instituto.md`
- `output/verificacao-temporal-art-112.yaml`, quando aplicável
- documentos citados como âncoras

## Outputs

- `output/memoria-calculo.json` — saída integral do motor ou registro `not_applicable`;
- `output/calculo-auditado.md` — inputs, regra, passos, resultado, divergências, blockers e aviso de revisão humana.

## Veto Conditions

- regra ou aplicabilidade não confirmada por humano;
- fonte sem URL oficial/data;
- fato/ajuste sem âncora;
- art. 112 sem `REGRA_APROVADA_POR_HUMANO` na data corrente;
- memória sem snapshots, passos ou blockers;
- resultado apresentado como conclusão jurídica.

Qualquer veto mantém o pipeline `BLOQUEADO` e retorna ao Step 04 ou à coleta documental; não avance por ressalva.
