---
step: "02"
name: "Pesquisa de Julgados"
type: agent
agent: pesquisador
model: powerful
depends_on: step-01
---

# Step 02: Júlia Jurisprudência — Pesquisa e Ranqueamento de Julgados

## Para o Pipeline Runner

Executar a pesquisa pela persona **Júlia Jurisprudência** (`agents/pesquisador.custom.md`), que se apoia no subagente nativo `.claude/agents/jurisprudencia-stj-stf.md`.

A Júlia deve fazer **pelo menos 3 buscas** com recortes diferentes sobre a área/objetivo do `output/foco.md` e retornar **5 a 7 temas** (julgados, súmulas, teses, novidades legislativas) ranqueados por potencial de conteúdo de autoridade.

Este step usa o **modelo mais potente (`model: powerful`)** pela complexidade do raciocínio jurídico.

### Estratégia de busca

1. Acionar o subagente nativo `jurisprudencia-stj-stf` para STJ/STF (acórdãos, repetitivos CPC 1.036, repercussão geral CPC 1.035, súmulas, informativos). NÃO duplicar o conteúdo do subagente.
2. Complementar com novidades legislativas (Planalto) quando o foco pedir.
3. Filtrar pelo período do `output/foco.md`; descartar o que estiver fora.

## Inputs para este Step

- `output/foco.md` → área, objetivo e período definidos no Step 01
- `_criminalsquad/_memory/company.md` → contexto do escritório (público, nicho, tom)
- Subagente nativo: `.claude/agents/jurisprudencia-stj-stf.md`
- Best-practice: `_criminalsquad/core/best-practices/conteudo-juridico-redes.md` (para já antecipar o crivo ético)

## Expected Outputs

- `output/temas.yaml` → 5 a 7 temas ranqueados, cada um com:
  - `titulo` — título do julgado/súmula/lei em linguagem clara
  - `tipo` — julgado | súmula | tese repetitiva | repercussão geral | lei nova
  - `fonte` — tribunal/órgão, nº do acórdão/tema/súmula/lei, relator, data
  - `url` — URL oficial (STJ/STF/Planalto) verificada e acessível
  - `resumo` — 2-3 linhas do que foi decidido/alterado
  - `por_que_importa` — por que o público leigo deve se interessar
  - `potencial_autoridade` — score 1-10 (utilidade pública + atualidade + clareza)
  - `risco_etico` — sinalizar se o tema tende a sensacionalismo/caso identificável (alerta para copy e revisão)

## Execution Mode

- **Modo:** Subagente
- **Modelo:** powerful
- **Skills permitidas:** web_search, web_fetch
- **Apoio:** subagente nativo `jurisprudencia-stj-stf`

## Quality Gate

Antes de avançar para o Step 03:
- [ ] `output/temas.yaml` existe
- [ ] Contém entre 5 e 7 temas
- [ ] Cada tema tem: titulo, tipo, fonte (identificação completa), url, resumo, por_que_importa, potencial_autoridade, risco_etico
- [ ] URLs apontam para fontes oficiais (STJ/STF/Planalto) e são acessíveis
- [ ] Temas ordenados por `potencial_autoridade` (decrescente)
- [ ] Nenhum tema central depende de caso/cliente identificável (sigilo)

Se qualquer verificação falhar, solicitar que a Júlia Jurisprudência refaça/complemente a pesquisa.
