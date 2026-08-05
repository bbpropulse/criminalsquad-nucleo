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

Executar a revisão jurídica da minuta pela persona **Vera Veredito** (`agents/revisor.custom.md`). Este step **NÃO é opcional** (`optional: false`): toda minuta de acordo/manifestação passa por revisão antes de ir à versão final.

A Vera Veredito avalia a minuta contra a rubrica de revisão, **aciona o subagente `verificador-citacoes`** (Citation Gate) e emite um veredicto único: **APPROVE** ou **REJECT**.

## Context Loading

Load these files before executing:
- `output/acordo-minuta.md` — minuta a revisar
- `output/instituto-e-termos.md` — checar se o instituto e as condições aprovadas foram desenvolvidos (e nada inventado)
- `output/pesquisa-juridica.md` — conferir se cada fundamento citado é fiel à fonte e se não há `[NÃO VERIFICADO]` pendente
- `output/caso.md` — conferir endereçamento, fase e qualificação
- Best-practices (não duplicar): `_criminalsquad/core/best-practices/revisao-juridica.md`, `justica-negocial.md`, `etica-oab-sigilo.md`, `verificacao-citacoes.md`

## Instructions

### Process

1. Ler a rubrica `revisao-juridica.md` e a minuta; conferir o preenchimento dos **requisitos legais do instituto** (cabimento + ausência de óbices) contra `output/instituto-e-termos.md` e `output/pesquisa-juridica.md`.
2. Conferir que **cada fundamento** citado na peça corresponde fielmente à fonte da pesquisa; checar proporcionalidade das condições e o registro de **consentimento informado** (confissão no ANPP / delação na colaboração) sem promessa de resultado.
3. **Acionar o subagente `.claude/agents/verificador-citacoes.md`** (read-only) sobre `output/acordo-minuta.md` + `output/pesquisa-juridica.md`. Qualquer `[NÃO VERIFICADO]`/`[DIVERGENTE]` remanescente ou citação infiel → **REJECT**. Registrar, para **cada** citação conferida, título completo, `status` (`verificada` quando a fonte primária foi aberta e o teor conferido; `acesso_falhou` quando o portal não abriu — e aí a citação sai da peça), URL HTTPS da fonte e data/hora da consulta: essa tabela é o insumo do manifesto do Citation Gate no Step 09, e sem ela a entrega não fecha.
4. Emitir o veredicto: APPROVE somente se requisitos, fundamentos, ética e Citation Gate estiverem todos satisfeitos; caso contrário, REJECT com `fixes`.
5. Salvar em `output/revisao-juridica.md`, iniciando pelo bloco YAML parseável.

## Output Format

```
verdict: APPROVE | REJECT
fixes:
  - "{correção específica — o quê, onde, como — direcionada ao Step 05}"

# Relatório de Revisão — Negociação Penal

## Checklist por critério
- Requisitos do instituto (cabimento + óbices): [ok / problema]
- Fundamentação fiel à fonte: [ok / problema]
- Condições proporcionais: [ok / problema]
- Ética / consentimento informado (sem promessa de resultado): [ok / problema]
- Completude da peça/termo: [ok / problema]

## Citation Gate (verificador-citacoes)
- Resultado: [sem pendências | pendências encontradas]
- Itens (uma linha por citação — é o que o Step 09 transcreve no manifesto):
  - título: [norma/súmula/tema/precedente, identificação completa] | status: [verificada | acesso_falhou] | fonte: https://[fonte primária] | consulta: [AAAA-MM-DDTHH:MM:SS-03:00]
```

## Output Example

> Relatório de referência (qualidade esperada).

```
verdict: REJECT
fixes:
  - "Seção II: a Súmula 444/STJ está marcada [NÃO VERIFICADO] na pesquisa —
     confirmar a redação ou remover o argumento de habitualidade antes de citar."
  - "Seção IV: dimensionar a prestação pecuniária à capacidade econômica
     demonstrada; o valor atual é desproporcional ao furto (CP 45)."

# Relatório de Revisão — Negociação Penal

## Checklist por critério
- Requisitos do instituto (cabimento + óbices): ok — pena mínima < 4 anos, sem
  violência, primário.
- Fundamentação fiel à fonte: problema — Súmula 444/STJ não verificada.
- Condições proporcionais: problema — prestação pecuniária acima da capacidade.
- Ética / consentimento informado: ok — consentimento e impugnação ao art. 18-F
  registrados.
- Completude da peça/termo: ok — pedido subsidiário do §14 presente.

## Citation Gate (verificador-citacoes)
- Resultado: pendências encontradas
- Itens:
  - título: Art. 28-A, §§1º, 2º III, 4º e 14, do CPP (Lei 13.964/2019) | status: verificada | fonte: https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm | consulta: 2026-07-14T16:12:00-03:00
  - título: Súmula 444 do STJ | status: acesso_falhou | fonte: https://scon.stj.jus.br/SCON/ | consulta: 2026-07-14T16:25:00-03:00 — portal fora do ar; enquanto não abrir, o argumento de habitualidade sai da peça.
```

## Veto Conditions

Reject and redo if ANY are true:
1. O `output/revisao-juridica.md` não começa pelo bloco YAML com `verdict:` parseável.
2. O veredicto é APPROVE sem que o `verificador-citacoes` tenha sido acionado e sem pendências de citação resolvidas.
3. A seção Citation Gate não traz, para cada citação, título, status, fonte HTTPS e consulta — sem esses quatro campos o Step 09 não consegue gravar o manifesto e a entrega trava no último step.

## Quality Criteria

- [ ] `output/revisao-juridica.md` existe e começa pelo bloco YAML (`verdict:` + `fixes:`)
- [ ] O veredicto está claramente declarado como APPROVE ou REJECT
- [ ] O subagente `verificador-citacoes` foi acionado e seu resultado consta no relatório
- [ ] Cada citação da seção Citation Gate traz título, `status` (`verificada`/`acesso_falhou`), fonte HTTPS e data/hora da consulta — insumo do manifesto do Step 09
- [ ] Em REJECT, cada `fix` indica o quê, onde e como corrigir (direcionado ao Step 05)

### Se APPROVE:
- Avançar para o Step 08 (Aprovar Final)

### Se REJECT (loop de revisão — on_reject: step-05, teto max_review_cycles=3):
- Retornar ao **Step 05** (Redação da Minuta) passando **apenas** a lista `fixes` (feedback-delta) + a minuta anterior — não "reescreva tudo".
- A Nara Negociação aplica APENAS as correções indicadas.
- A execução **retoma para a frente** pelo pipeline: nova minuta → **Step 06 (o advogado re-aprova a minuta corrigida)** → Step 07 (nova revisão). O checkpoint humano a cada ciclo é **intencional** no jurídico.
- Repetir até APPROVE ou atingir o teto (3); no teto, **escalar ao usuário** com o histórico.
