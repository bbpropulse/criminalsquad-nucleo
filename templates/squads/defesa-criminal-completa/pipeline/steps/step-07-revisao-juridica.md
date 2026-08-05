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
  revisor: "revisor · ciclo {n}"   # veredito anônimo não é auditável
  fixes:
    - "{correção específica — o quê, onde, como — direcionada ao Step 05}"
  ```
  (em APPROVE, `fixes` fica vazio).

  ⚠️ **Fail-closed — a Vera reprova, não ressalva.** No primeiro smoke-run real
  deste squad (ver `_evals/calibracao-do-juiz.md`) a revisão emitiu `APPROVE`
  marcando ✅ em "nenhuma citação não verificada" e registrou, linhas adiante, que
  a pesquisa jurisprudencial **não havia sido executada**: aprovou o que ela mesma
  declarou incompleto. Portanto:
  - **Etapa obrigatória não executada ⇒ `REJECT`** — pesquisa que não rodou,
    Citation Gate não conferido, input obrigatório ausente. Nunca "APPROVE com
    ressalva". Na dúvida, `REJECT`: um ciclo a mais é barato; peça aprovada por
    engano, não.
  - **Proibido se contradizer** — não marque critério como atendido se o próprio
    relatório registra pendência que o afeta. Se o risco contradiz o ✅, vale o risco.

  Abaixo do bloco, o relatório:
  - Checklist por critério (técnica processual, fundamentação, tempestividade, ética/sigilo, completude da peça)
  - Conferência de citações (cada súmula/precedente × `output/pesquisa-juridica.md`) — complementa o Citation Gate do runner. Registrar em tabela, **uma linha por citação da peça**, com os quatro campos que o Step 09 transcreve para o manifesto do Citation Gate: identificação completa · `verificada` (fonte primária aberta e teor conferido) ou `acesso_falhou` (portal fora do ar, timeout, captcha) · URL HTTPS da fonte oficial · data/hora ISO 8601 da consulta. Sem essa tabela o Step 09 não tem de onde tirar o `citations[]` e a entrega trava no gate.

## Execution Mode

- **Modo:** Subagent — roda em **contexto isolado/fresco** (quem redigiu a minuta não é quem a revisa; anti-viés).
- **Skills:** Nenhuma

## Quality Gate

Antes de prosseguir:
- [ ] `output/revisao-juridica.md` existe
- [ ] O veredicto está claramente declarado como APPROVE ou REJECT
- [ ] Em APPROVE: a tabela de conferência traz, para **cada** citação da peça, identificação completa, status (`verificada` / `acesso_falhou`), URL HTTPS e data/hora da consulta — insumo obrigatório do manifesto do Step 09

### Se APPROVE:
- Avançar para o Step 08 (Aprovar Final)

### Se REJECT (loop de revisão — on_reject: step-05, teto max_review_cycles=3):
- Retornar ao **Step 05** (Redação da Minuta) passando **apenas** a lista `fixes` (feedback-delta) + a minuta anterior — não "reescreva tudo".
- O Rafael Resposta aplica APENAS as correções indicadas.
- A execução **retoma para a frente** pelo pipeline: nova minuta → Citation Gate → **Step 06 (o advogado re-aprova a minuta corrigida)** → Step 07 (nova revisão). O checkpoint humano a cada ciclo é **intencional** no jurídico.
- Repetir até APPROVE ou atingir o teto (3); no teto, **escalar ao usuário** com o histórico.
