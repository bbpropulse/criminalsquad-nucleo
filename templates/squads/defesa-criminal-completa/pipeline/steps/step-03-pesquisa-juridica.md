---
step: "03"
name: "Pesquisa Jurídica"
type: agent
agent: pesquisador
model: powerful
depends_on: step-02
---

# Step 03: Júlia Jurisprudência — Pesquisa Jurídica

## Para o Pipeline Runner

Executar a pesquisa de jurisprudência e súmulas pela persona **Júlia Jurisprudência** (`agents/pesquisador.custom.md`), que se apoia no subagente nativo `.claude/agents/jurisprudencia-stj-stf.md`.

Este step usa o **modelo mais potente (`model: powerful`)** pela complexidade do raciocínio jurídico.

### Estratégia HÍBRIDA obrigatória (acervo local ANTES da web)

1. **PRIMEIRO**, consultar o acervo local: ler `acervo/_index.yaml` e fazer Grep por `tema`/`tags` pertinentes às fragilidades do `output/resumo-autos.md`. Ler os documentos relevantes em `acervo/jurisprudencia/`, `acervo/doutrina/`, `acervo/legislacao/`, `acervo/teses-modelos/`.
2. **DEPOIS**, somente para o que faltar, buscar nas fontes oficiais online (STJ, STF) com `web_search` e `web_fetch`.

Ver a best-practice (não duplicar conteúdo): `_criminalsquad/core/best-practices/pesquisa-jurisprudencial.md`.

## Inputs para este Step

- `output/resumo-autos.md` → fragilidades e pontos da acusação que demandam fundamento
- `output/caso.md` → tipo penal e capitulação
- `acervo/_index.yaml` → índice do acervo local (consultar PRIMEIRO)
- Best-practice: `_criminalsquad/core/best-practices/pesquisa-jurisprudencial.md`

## Expected Outputs

- `output/pesquisa-juridica.md` → fontes jurídicas organizadas por tese candidata, contendo para cada item:
  - Tese / fundamento (ex: atipicidade material — Tema 1.099 STF; reconhecimento sem CPP 226 — Tema 1.016 STJ; excludentes CP 23/26-28; prescrição CP 109; inépcia/falta de justa causa — CPP 395)
  - Súmula / precedente / dispositivo (com identificação completa: tribunal, nº, órgão)
  - Origem: **acervo local** (caminho do arquivo) ou **web** (URL oficial)
  - Aplicação ao caso concreto (como o precedente sustenta a tese)

## Execution Mode

- **Modo:** Subagente
- **Modelo:** powerful
- **Skills permitidas:** web_search, web_fetch
- **Apoio:** subagente nativo `jurisprudencia-stj-stf`

## Quality Gate

Antes de avançar para o Step 04:
- [ ] `output/pesquisa-juridica.md` existe
- [ ] O acervo local foi consultado ANTES da web (origem indicada em cada item)
- [ ] Cada fonte tem identificação completa (tribunal, nº, órgão julgador) e está verificada
- [ ] Há ao menos uma fonte por tese candidata levantada no resumo dos autos
- [ ] URLs (quando da web) apontam para fontes oficiais (STJ/STF) e são acessíveis

Se qualquer verificação falhar, solicitar que a Júlia Jurisprudência refaça/complemente a pesquisa.
