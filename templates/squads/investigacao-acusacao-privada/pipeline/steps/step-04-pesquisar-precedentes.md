---
step: "04"
name: "Pesquisa de Precedentes"
type: agent
agent: pesquisador
depends_on: step-03
---

# Step 04: Júlia Jurisprudência — Pesquisa de Precedentes

## Para o Pipeline Runner

Executar a Pesquisadora (Júlia Jurisprudência) como subagente. A partir do tipo penal e da peça confirmada, ela deve levantar os precedentes que sustentarão a tipificação, o cabimento e a legitimidade da vítima. **Consultar o acervo local antes da web** (estratégia híbrida): primeiro `acervo/_index.yaml`, depois fontes oficiais online (STJ, STF, súmulas).

## Inputs para este Step

- `output/fatos.md` → relato e tipo penal provável (extrair os pontos a fundamentar)
- `output/cabimento.md` → espécie de ação, peça confirmada e fundamento (orienta as teses a pesquisar)
- `acervo/_index.yaml` → acervo local de jurisprudência/doutrina/modelos (consultar PRIMEIRO)
- Subagente nativo `.claude/agents/jurisprudencia-stj-stf.md` → especialista de apoio para STJ/STF
- Best-practice `pesquisa-jurisprudencial` → estratégia híbrida (acervo → fontes oficiais)

## Expected Outputs

- `output/precedentes.md` → tabela de precedentes (tribunal/classe/nº/relator/data/tese/vinculação CPC 927/URL) + leading cases comentados + roteiro de citação para a peça

## Execution Mode

- **Modo:** Subagente
- **Skills permitidas:** web_search, web_fetch

## Citation Gate (marcação na pesquisa)

Toda súmula/precedente/tese cuja fonte/URL **não** tenha sido aberta e conferida pela Júlia deve ser marcada no texto com **`[NÃO VERIFICADO]`** ao lado da citação (ver best-practice `verificacao-citacoes`). É proibido citar de memória: súmula/precedente sem fonte verificada entra marcado, nunca como verdade assentada. Essas marcações são o insumo do `verificador-citacoes` acionado nos Steps 05/07 — uma citação `[NÃO VERIFICADO]` não pode chegar verificada à peça sem conferência.

## Quality Gate

Antes de avançar para o Step 05, verificar:
- [ ] `output/precedentes.md` existe
- [ ] Contém tabela com pelo menos 5 precedentes pertinentes ao tipo penal e à espécie de ação
- [ ] Cada precedente tem fonte/URL verificável e indicação de vinculação (vinculante × persuasivo)
- [ ] Inclui ao menos 2 leading cases comentados (ratio + aplicação ao caso)
- [ ] Há roteiro de citação pronto para incorporar à peça
- [ ] O acervo local foi consultado antes da busca na web
- [ ] Toda citação sem fonte conferida está marcada com `[NÃO VERIFICADO]` (Citation Gate)

Se qualquer verificação falhar, solicitar que a Júlia Jurisprudência refaça/complete a pesquisa.

## Nota Especial

A pesquisa serve a uma peça da ACUSAÇÃO (lado da vítima), não da defesa. Priorizar precedentes que sustentem: (a) a **adequação típica** (que a conduta narrada configura o crime), (b) o **cabimento** da peça e a **legitimidade** do ofendido (ex.: Súmula 714 STF na ofensa a funcionário público; natureza da ação nos crimes contra a honra) e, quando relevante, (c) o **termo inicial da decadência** e a **indivisibilidade** (CPP art. 48). Conferir overruling em precedentes antigos (>5 anos).
