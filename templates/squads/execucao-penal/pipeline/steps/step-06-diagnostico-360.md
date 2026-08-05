---
step: "06"
name: "Diagnóstico 360 e Estratégia"
type: agent
agent: estrategista
execution: subagent
model_tier: powerful
depends_on: step-05
---

# Step 06 — Diagnóstico 360 e estratégia

## Para o Pipeline Runner

Execute `agents/estrategista.custom.md` em contexto isolado. Aplique `_criminalsquad/core/best-practices/execucao-penal-alta-performance.md`.

Não carregue toda a biblioteca. Use o catálogo e selecione somente a skill ativa do instituto. Skills `pilot` exigem opt-in explícito registrado no Step 01; `preview`, `deprecated` e `quarantined` não entram.

## Inputs

- `output/caso.md`, `output/resumo-execucao.md` e `output/caso-estruturado.json`;
- `output/pesquisa-juridica.md` e registro temporal;
- `output/requisitos-instituto.md`;
- `output/memoria-calculo.json` e `output/calculo-auditado.md`.

## Outputs

- `output/diagnostico-360.md` — situação, oportunidades, riscos, urgências, matriz fato–prova–tese, objeções, cenários e estratégia ordenada;
- `output/entrega-juridica.json` — sidecar v4 pré-redação conforme `_criminalsquad/core/execution-output.schema.json`.

## Quality Gate

- [ ] tese principal e subsidiárias são compatíveis;
- [ ] melhor objeção do MP e motivo provável de rejeição foram tratados;
- [ ] ação, responsável e prazo estão definidos.

## Veto Conditions

O risco central deste step é a estratégia que se apoia em fato que ninguém
comprovou. Isso não é item de checklist — é veto:

- fato material da matriz fato–prova–tese sem âncora (`documento_id` + página/evento
  + trecho), inclusive o fato herdado do Step 02 (hard stop `material_fact_without_anchor`);
- regra ou cálculo que não venham dos artefatos aprovados nos Steps 04 e 05;
- inferência do estrategista apresentada como fato provado.

Qualquer veto grava `status: bloqueado` no sidecar, **não avance** para a redação
e retorne ao Step 02 (coleta/âncora) ou ao Step 04/05 (regra/cálculo). Conclusão
parcial, cenário "assumindo que", ressalva e "confirmar depois" não liberam o
step — na execução penal, a tese apoiada em fato não ancorado é pedido indeferido
com o apenado preso a mais.
