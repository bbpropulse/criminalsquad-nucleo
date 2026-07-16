---
step: "07"
name: "Preparação de Plenário"
type: agent
agent: plenario
depends_on: step-06
---

# Step 07: Plenário — Tese e Quesitação

## Para o Pipeline Runner
Executar o agente `plenario` (Paulo Plenário) — SOMENTE se o réu foi pronunciado. Carrega as skills `juri-plenario-debates` e `juri-quesitacao`.

## Inputs
- `output/caso.md` (confirmar pronúncia), `output/resumo-autos.md`, `output/pesquisa.md`

## Expected Outputs
- `output/plenario.md` — tese de plenário, roteiro de debates (art. 477) e quesitação comentada com pontos de impugnação (art. 482-491).

## Quality Gate
- [ ] Executado apenas com pronúncia confirmada
- [ ] Tese de defesa clara + subsidiárias hierarquizadas
- [ ] Quesitação na ordem cogente, com impugnações antecipadas
