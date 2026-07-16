---
step: "04"
name: "Pesquisa de Precedentes"
type: agent
agent: pesquisador
depends_on: step-03
---

# Step 04: Júlia Jurisprudência — Pesquisa de Precedentes

## Para o Pipeline Runner

Executar a Pesquisadora (Júlia Jurisprudência) como subagente. A partir das teses prováveis da peça confirmada, ela deve levantar os precedentes que sustentarão as razões. **Consultar o acervo local antes da web** (estratégia híbrida): primeiro `acervo/_index.yaml`, depois fontes oficiais online (STJ, STF, súmulas).

## Inputs para este Step

- `output/decisao.md` → decisão atacada (extrair os pontos impugnáveis)
- `output/cabimento.md` → peça confirmada e fundamento (orienta as teses a pesquisar)
- `acervo/_index.yaml` → acervo local de jurisprudência/doutrina/modelos (consultar PRIMEIRO)
- Subagente nativo `.claude/agents/jurisprudencia-stj-stf.md` → especialista de apoio para STJ/STF
- Best-practice `pesquisa-jurisprudencial` → estratégia híbrida (acervo → fontes oficiais)

## Expected Outputs

- `output/precedentes.md` → tabela de precedentes (tribunal/classe/nº/relator/data/tese/vinculação CPC 927/URL) + leading cases comentados + roteiro de citação para as razões

## Citation Gate (marcação explícita — obrigatório)

Há **sanção real (2026)** contra peças com jurisprudência inventada por IA. Por isso, toda citação que a Júlia **não conseguir confirmar** no acervo local ou em fonte oficial (REsp/AREsp/HC/RHC/AgRg/RE/ARE; súmula; tema/repetitivo; dispositivo de lei) deve ser **marcada com `[NÃO VERIFICADO]`** ao lado, em `output/precedentes.md`:

- Só recebe identificação "limpa" (sem marcador) a citação **confirmada** em fonte idônea, com número, órgão e — em acórdão — relator/data batendo.
- Súmula cancelada/superada ou dado que não bate → marcar `[DIVERGENTE]`.
- Na dúvida, marque `[NÃO VERIFICADO]` — nunca "provavelmente existe".

Esses marcadores são insumo do Citation Gate dos Steps 05 e 07: o `verificador-citacoes` reaudita e o hook `verifica-citacoes` bloqueia a finalização enquanto restar qualquer marcador pendente.

## Execution Mode

- **Modo:** Subagente
- **Skills permitidas:** web_search, web_fetch

## Quality Gate

Antes de avançar para o Step 05, verificar:
- [ ] `output/precedentes.md` existe
- [ ] Contém tabela com pelo menos 5 precedentes pertinentes às teses da peça
- [ ] Cada precedente tem fonte/URL verificável e indicação de vinculação (vinculante × persuasivo)
- [ ] Inclui ao menos 2 leading cases comentados (ratio + aplicação ao caso)
- [ ] Há roteiro de citação pronto para incorporar às razões
- [ ] O acervo local foi consultado antes da busca na web
- [ ] **Citation Gate:** toda citação não confirmada está marcada com `[NÃO VERIFICADO]` (ou `[DIVERGENTE]` se a fonte não bate)

Se qualquer verificação falhar, solicitar que a Júlia Jurisprudência refaça/complete a pesquisa.

## Nota Especial

A pesquisa serve às RAZÕES (dirigidas ao tribunal), não à interposição. Priorizar precedentes alinhados às teses prováveis: na defesa, primeiro as teses de absolvição (teoria do crime), depois as subsidiárias de pena (princípio da eventualidade).
