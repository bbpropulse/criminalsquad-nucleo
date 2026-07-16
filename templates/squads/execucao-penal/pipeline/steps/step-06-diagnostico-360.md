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

- [ ] fatos materiais têm âncoras;
- [ ] regra e cálculo provêm dos artefatos aprovados;
- [ ] tese principal e subsidiárias são compatíveis;
- [ ] melhor objeção do MP e motivo provável de rejeição foram tratados;
- [ ] ação, responsável e prazo estão definidos;
- [ ] hard fail gera `status: bloqueado`, não conclusão parcial.
