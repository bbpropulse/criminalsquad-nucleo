# Acervo de Conhecimento — CriminalSquad

Base de conhecimento **local** do escritório. Funciona em conjunto com os agentes de pesquisa online (STJ/STF/DJEN) numa estratégia **híbrida**: os agentes consultam **primeiro** este acervo, **depois** as fontes oficiais na web.

Mantido simples por princípio (sem banco de dados, sem Docker): são **arquivos + um índice** (`_index.yaml`) navegável por `Grep`/`Read`.

## Estrutura

| Pasta | Conteúdo |
|-------|----------|
| `jurisprudencia/stf/` `stj/` `tribunais-locais/` | Acórdãos, informativos, súmulas salvas (PDF/md/txt) |
| `doutrina/` | Teses, artigos, capítulos de referência |
| `legislacao/` | CPP, CP, LEP, súmulas consolidadas, legislação especial |
| `teses-modelos/` | Peças-modelo do próprio escritório (fonte de exemplos de qualidade para os squads de redação) |
| `casos/` | Material por processo/cliente — **gitignored** (sigilo profissional e LGPD) |

## Como alimentar

1. Coloque o documento na pasta adequada.
2. Registre uma entrada em [`_index.yaml`](_index.yaml) com `path`, `tipo`, `tema` e `tags`.
3. Pronto — os agentes de pesquisa e os squads passam a encontrá-lo.

## Privacidade

`acervo/casos/` contém dados sensíveis de clientes e **nunca** deve ir para repositório público. Está no `.gitignore`. Ver a best-practice `etica-oab-sigilo`.
