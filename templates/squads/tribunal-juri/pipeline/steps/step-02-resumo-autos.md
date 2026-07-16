---
step: "02"
name: "Resumo dos Autos"
type: agent
agent: leitor
depends_on: step-01
---

# Step 02: Leitor — Resumo dos Autos

## Para o Pipeline Runner
Executar o agente `leitor` (Marcos Memória), que se apoia no subagente nativo `resumo-processo`.

## Inputs
- `output/caso.md`
- Autos anexados (denúncia, IP, instrução)

## Expected Outputs
- `output/resumo-autos.md` — resumo estruturado com âncora de folhas/IDs: materialidade, autoria, qualificadoras, versões da vítima/testemunhas/réu.

## Quality Gate
- [ ] Resumo cobre materialidade e autoria
- [ ] Cada ponto referencia folha/ID
- [ ] Provas contraditórias/faltantes sinalizadas
