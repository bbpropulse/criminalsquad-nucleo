# Scores — conteudo-juridico

> Log de avaliações (`/criminalsquad eval`). Para acompanhar a qualidade e pegar regressão.

| Data | Run/Caso | Nota | Verdict | Observações |
|------|----------|------|---------|-------------|
| 2026-07-26 | smoke-run/exemplo-prova-digital-cadeia-custodia | 40 | REPROVADO | Slides não criados (Step 06 é inline, omitido por decisão do run) e marcadores [NÃO VERIFICADO]/divergência de datas no artefato entregue. DEFEITO REAL: o Step 02 falhou no próprio Quality Gate de URLs oficiais e avançou mesmo assim, em vez de refazer a pesquisa. |
| 2026-07-26 | smoke-run r2/exemplo-prova-digital-cadeia-custodia | 80 | APROVADO | +40 após o gate virar barreira. 7 temas com URL oficial, 5 armadilhas éticas evitadas, Step 09 irreversível barrado. Passa raspando: Step 08 rodou SEM o isolamento anti-viés que ele próprio exige — corrigir antes de caso real. |
