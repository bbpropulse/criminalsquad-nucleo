---
step: "08"
name: "Redação Condicional"
type: agent
agent: redator
execution: inline
depends_on: step-07
---

# Step 08 — Redação por uma skill canônica

## Para o Pipeline Runner

Leia `output/caso.md` e `output/estrategia-aprovada.md`. Consulte `skills/_index.yaml` e carregue **exatamente uma** skill ativa do instituto, conforme `squad.yaml.conditional_skills`. Não injete a lista inteira de competências.

O redator aplica `peticao-criminal`, `redacao-persuasiva-criminal`, o protocolo de execução e somente as conclusões aprovadas. Em retorno de revisão, aplique apenas os `fixes` e preserve o restante.

## Inputs

- estratégia aprovada, sidecar, pesquisa e requisitos;
- memória de cálculo e gate temporal;
- documentos/âncoras aprovados;
- fixes dos revisores, quando houver.

## Outputs

- `output/peticao-execucao-minuta.md`;
- `output/entrega-juridica.json` atualizado com fatos, fontes, cálculos, riscos e pedido da minuta.

## Veto Conditions

- skill ausente, errada ou lifecycle não permitido;
- tese, fato, número ou pedido fora da estratégia aprovada;
- citação de memória ou marcador pendente;
- cálculo divergente da memória;
- art. 112 sem gate temporal válido;
- sidecar sem âncora, regra ou revisão humana obrigatória.
