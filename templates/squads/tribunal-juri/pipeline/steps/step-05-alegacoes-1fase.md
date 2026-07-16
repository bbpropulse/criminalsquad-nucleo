---
step: "05"
name: "Alegações da 1ª Fase"
type: agent
agent: redator-1fase
depends_on: step-04
---

# Step 05: Redator — Alegações da 1ª Fase

## Para o Pipeline Runner
Executar o agente `redator-1fase` (Rafael Pronúncia). Carrega as skills `juri-pronuncia-defesa` e `memoriais`; segue `peticao-criminal`. É o ponto de retorno do loop de revisão.

## Inputs
- `output/teses-1fase.md`, `output/resumo-autos.md`, `output/pesquisa.md`

## Expected Outputs
- `output/alegacoes-1fase.md` — alegações finais da 1ª fase (petição única), só com as teses aprovadas, na ordem da eventualidade, cada uma com fundamento citado.

## Quality Gate
- [ ] Apenas teses aprovadas no Step 04
- [ ] Cada tese com fundamento de output/pesquisa.md
- [ ] Estrutura e linguagem conforme peticao-criminal
