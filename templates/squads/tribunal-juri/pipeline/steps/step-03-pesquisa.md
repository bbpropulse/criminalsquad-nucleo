---
step: "03"
name: "Pesquisa de Jurisprudência do Júri"
type: agent
agent: pesquisador
depends_on: step-02
---

# Step 03: Pesquisador — Jurisprudência do Júri

## Para o Pipeline Runner
Executar o agente `pesquisador` (Júlia Jurisprudência). Consultar `acervo/` ANTES da web. Apoia-se em `jurisprudencia-stj-stf`. Seguir `pesquisa-jurisprudencial` e o gate `verificacao-citacoes`.

## Inputs
- `output/caso.md`, `output/resumo-autos.md`, `acervo/_index.yaml`

## Expected Outputs
- `output/pesquisa.md` — tabela de precedentes (tribunal/classe/nº/relator/órgão/data/tese/vinculação) + roteiro de citação, focado nas teses do caso (pronúncia/impronúncia/desclassificação, qualificadoras, Súmula 713 STF, Tema 1.068 STF).

## Quality Gate
- [ ] Acervo local consultado antes da web
- [ ] Precedentes com nº/relator/órgão/data
- [ ] Citações marcadas como verificadas (gate verificacao-citacoes)
