# Avaliação e promoção de skills

Esta pasta separa três coisas que não podem ser confundidas:

1. `catalog-v5.json` e `execucao-canonicas.json` são **especificações de contrato**. Elas descrevem comportamento normal, adversarial e hard fails, mas não provam que um modelo executou a skill.
2. `results/profile-forward-*.json` e o forward-run das canônicas são **observações representativas e sintéticas** do desenvolvimento do pacote. Não concedem maturidade.
3. Um resultado que promove usa obrigatoriamente `promotion-evidence.schema.json`. O resolvedor confere o envelope e a instalação local antes de reconhecer `verified` ou `certified`.

## Fluxo fail-closed de promoção

1. Selecione a skill e a onda de risco em `skills/_quality-report.json`.
2. Prepare fixtures fictícias e pseudonimizadas. Nunca use dados de cliente nesta pasta.
3. Altere `quality_status` apenas para o status candidato. Até existir evidência válida para os bytes resultantes, a skill fica bloqueada para promoção e para invocação implícita.
4. Execute baseline e skill nos mesmos casos e no mesmo modelo versionado.
5. Persista hashes SHA-256 de input, output e, quando houver, trace; identifique grader e rubrica.
6. Obtenha revisão independente, rode regressão e grave o envelope em `skills/_evals/results/`.
7. Rode `npx criminalsquad audit-skills`. Só `high_performance_eligible: true` confirma a promoção.

Mínimos mecânicos: R4 = 12 cenários, R3 = 8, R1/R2 = 5. Certificação R4 exige dois revisores humanos independentes. Caso normal e adversarial são obrigatórios; a suíte deve também cobrir fronteira, dado ausente, conflito, input não confiável e regressão conforme o risco.

O resultado cronologicamente mais recente prevalece. `fail`, envelope inválido ou `revoked` derruba aprovação anterior. Alterar qualquer byte, versão ou contrato da `SKILL.md` invalida o binding e exige nova execução.

## Distribuição

O pacote-fonte inclui apenas resultados sintéticos de referência. O instalador copia as especificações, este guia e o schema, mas não copia nem sobrescreve `_evals/results/`; cada aluno constrói sua própria evidência no ambiente em que usa os modelos.
