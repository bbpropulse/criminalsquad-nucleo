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

# Step 07: Vera Veredito — Revisão Jurídica

## Para o Pipeline Runner

Executar a revisão jurídica da minuta pela persona **Vera Veredito** (`agents/revisor.custom.md`). Este step **NÃO é opcional** (`optional: false`): toda resposta à acusação passa por revisão antes de ir à versão final.

A Vera Veredito avalia a minuta contra a rubrica de revisão e emite um veredicto único: **APPROVE** ou **REJECT**.

## Inputs para este Step

- `output/resposta-acusacao-minuta.md` → minuta a revisar
- `output/teses-selecionadas.md` → checar se todas as teses aprovadas foram desenvolvidas (e nada inventado)
- `output/pesquisa-juridica.md` → conferir se cada fundamento citado é fiel à fonte
- `output/caso.md` → conferir endereçamento, prazo (CPP 396) e qualificação
- Best-practices de referência (não duplicar): `_criminalsquad/core/best-practices/revisao-juridica.md` e `_criminalsquad/core/best-practices/etica-oab-sigilo.md`

## Expected Outputs

- `output/revisao-juridica.md`, começando por um **bloco YAML estruturado** que o Pipeline Runner parseia:
  ```yaml
  verdict: APPROVE | REJECT
  fixes:
    - "{correção específica — o quê, onde, como — direcionada ao Step 05}"
  ```
  (em APPROVE, `fixes` fica vazio). Abaixo do bloco, o relatório:
  - Checklist por critério (técnica processual, fundamentação, tempestividade, ética/sigilo, completude da peça)
  - Conferência de citações (cada súmula/precedente × `output/pesquisa-juridica.md`) — complementa o Citation Gate do runner

## Execution Mode

- **Modo:** Subagent — roda em **contexto isolado/fresco** (quem redigiu a minuta não é quem a revisa; anti-viés).
- **Skills:** Nenhuma

## Quality Gate

Antes de prosseguir:
- [ ] `output/revisao-juridica.md` existe
- [ ] O veredicto está claramente declarado como APPROVE ou REJECT

### Se APPROVE:
- Avançar para o Step 08 (Aprovar Final)

### Se REJECT (loop de revisão — on_reject: step-05, teto max_review_cycles=3):
- Retornar ao **Step 05** (Redação da Minuta) passando **apenas** a lista `fixes` (feedback-delta) + a minuta anterior — não "reescreva tudo".
- O Rafael Resposta aplica APENAS as correções indicadas.
- A execução **retoma para a frente** pelo pipeline: nova minuta → Citation Gate → **Step 06 (o advogado re-aprova a minuta corrigida)** → Step 07 (nova revisão). O checkpoint humano a cada ciclo é **intencional** no jurídico.
- Repetir até APPROVE ou atingir o teto (3); no teto, **escalar ao usuário** com o histórico.
