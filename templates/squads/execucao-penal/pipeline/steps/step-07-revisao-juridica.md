---
step: "07"
name: "Revisão Jurídica"
type: agent
agent: revisor
optional: false
execution: subagent
model_tier: powerful
depends_on: step-06
on_reject: step-05
max_review_cycles: 3
---

# Step 07: Vânia Veredito — Revisão Jurídica

## Para o Pipeline Runner

Executar a revisão jurídica da minuta pela persona **Vânia Veredito** (`agents/revisor.custom.md`). Este step **NÃO é opcional** (`optional: false`): toda petição da execução passa por revisão isolada antes de ir à versão final.

A Vânia Veredito avalia a minuta contra a rubrica de revisão e emite um veredicto único: **APPROVE** ou **REJECT**. Roda como **subagente** (`execution: subagent`, `model_tier: powerful`) em contexto fresco — quem redigiu a minuta não é quem a revisa (anti-viés).

### Citation Gate (condiciona o APPROVE)

Antes de aprovar, acionar o subagente nativo `.claude/agents/verificador-citacoes.md` (read-only, contexto isolado) sobre a minuta + `output/pesquisa-juridica.md`. Ele devolve, por citação: VERIFICADA / DIVERGENTE / NÃO ENCONTRADA. Qualquer súmula/SV/tema DIVERGENTE ou NÃO ENCONTRADA, ou qualquer marcador `[NÃO VERIFICADO]`/`[DIVERGENTE]` remanescente na peça, **resulta em REJECT** com o `fix` correspondente. Ver `_criminalsquad/core/best-practices/verificacao-citacoes.md`.

### Temporal Gate (também condiciona o APPROVE)

Se a minuta tocar art. 112 ou apresentar número/data de progressão, conferir `output/verificacao-temporal-art-112.yaml` contra a minuta e as fontes oficiais. Exigir `REGRA_APROVADA_POR_HUMANO`, consulta e aprovação na data corrente, versões comparadas, alcance das decisões, revisor identificado e ausência de pendências. Qualquer falha = **REJECT**. A revisão deve verificar a regra jurídica antes da aritmética.

## Inputs para este Step

- `output/peticao-execucao-minuta.md` → minuta a revisar
- `output/requisitos-instituto.md` → checar se todos os requisitos confirmados foram desenvolvidos (e nada inventado)
- `output/pesquisa-juridica.md` → conferir se cada fundamento citado é fiel à fonte (Citation Gate)
- `output/verificacao-temporal-art-112.yaml` → conferir regra, freshness, alcance e aprovação humana quando aplicável
- `output/resumo-execucao.md` e `output/caso.md` → conferir fatos, documentos, regra/cálculo, competência e qualificação
- Best-practices de referência (não duplicar): `_criminalsquad/core/best-practices/revisao-juridica.md`, `verificacao-citacoes.md` e `etica-oab-sigilo.md`

## Expected Outputs

- `output/revisao-juridica.md`, começando por um **bloco YAML estruturado** que o Pipeline Runner parseia:
  ```yaml
  verdict: APPROVE | REJECT
  fixes:
    - "{correção específica — o quê, onde, como — direcionada ao Step 05}"
  ```
  (em APPROVE, `fixes` fica vazio). Abaixo do bloco, o relatório:
  - Checklist por critério (técnica processual/competência art. 66 LEP, fidelidade do cálculo, fundamentação fiel à fonte, ética/sigilo, completude da peça)
  - Conferência de citações (resultado do `verificador-citacoes`, cada súmula/SV × `output/pesquisa-juridica.md`) — complementa o Citation Gate do runner
  - Conferência temporal: versão aplicada, regra intertemporal, decisões/alcance, freshness e identidade do revisor

## Execution Mode

- **Modo:** Subagent — roda em **contexto isolado/fresco** (quem redigiu a minuta não é quem a revisa; anti-viés).
- **Modelo:** powerful
- **Skills:** Nenhuma
- **Apoio:** subagente nativo `verificador-citacoes`

## Quality Gate

Antes de prosseguir:
- [ ] `output/revisao-juridica.md` existe
- [ ] O veredicto está claramente declarado como APPROVE ou REJECT
- [ ] O `verificador-citacoes` foi acionado e seu resultado consta do relatório
- [ ] Quando aplicável, o Temporal Gate foi conferido e seu resultado consta do relatório

### Se APPROVE:
- Nenhuma citação DIVERGENTE/NÃO ENCONTRADA remanescente
- Nenhuma regra do art. 112 ausente, expirada, divergente ou sem aprovação humana
- Avançar para o Step 08 (Aprovar Final)

### Se REJECT (loop de revisão — on_reject: step-05, teto max_review_cycles=3):
- Retornar ao **Step 05** (Redação do Pedido) passando **apenas** a lista `fixes` (feedback-delta) + a minuta anterior — não "reescreva tudo".
- O Pedro Progressão aplica APENAS as correções indicadas.
- A execução **retoma para a frente** pelo pipeline: nova minuta → Citation Gate → **Step 06 (o operador re-aprova a minuta corrigida)** → Step 07 (nova revisão). O checkpoint humano a cada ciclo é **intencional** no jurídico.
- Repetir até APPROVE ou atingir o teto (3); no teto, ou se um mesmo `fix` reaparecer (não convergiu), **escalar ao usuário** com o histórico.
