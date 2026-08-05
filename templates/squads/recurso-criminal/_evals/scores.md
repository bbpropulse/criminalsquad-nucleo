# Scores — recurso-criminal

> Log de avaliações (`/criminalsquad eval`). Para acompanhar a qualidade e pegar regressão.

| Data | Run/Caso | Nota | Verdict | Observações |
|------|----------|------|---------|-------------|
| 2026-07-26 | smoke-run/exemplo-rese-pronuncia | 60 | REPROVADO | Núcleo técnico certo (RESE por CPP 581 IV, tempestividade auditável, 4 armadilhas do caso evitadas). Mas 0 citações verificadas, com 2 [DIVERGENTE] e 9 [NÃO VERIFICADO] remanescentes, e veredito REJECT onde o caso-ouro exige APPROVE. |
| 2026-07-26 | smoke-run r2/exemplo-rese-pronuncia | 90 | APROVADO | +30, a maior recuperação. RESE (CPP 581 IV) com 5 alternativas afastadas, tempestividade conferida contra calendário real, estrutura bipartida completa, revisão isolada APPROVE. Ressalva séria: o manifesto do citation-gate gravou status "verificada" para URL que retornou ECONNRESET. |
