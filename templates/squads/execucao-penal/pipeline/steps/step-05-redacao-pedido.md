---
step: "05"
name: "Redação do Pedido"
type: agent
agent: redator
execution: inline
depends_on: step-04
on_reject_target: true
max_review_cycles: 3
---

# Step 05: Pedro Progressão — Redação do Pedido

## Para o Pipeline Runner

Executar a redação da minuta pela persona **Pedro Progressão** (`agents/redator.custom.md`), que **carrega a skill do instituto** indicado em `output/caso.md` (`instituto:`):

- progressão → `skills/execucao-progressao-regime/SKILL.md`
- livramento condicional → `skills/execucao-livramento-condicional/SKILL.md`
- remição → `skills/execucao-remicao/SKILL.md`
- saída temporária → `skills/execucao-saida-temporaria/SKILL.md`
- unificação de penas → `skills/execucao-unificacao-penas/SKILL.md`
- indulto/comutação → `skills/execucao-indulto-comutacao/SKILL.md`
- relaxamento/cautelares → `skills/liberdade-provisoria-relaxamento/SKILL.md`

Apoia-se no cálculo apenas depois de a regra jurídica estar aprovada. O redator cobre SOMENTE os requisitos confirmados. Ferramenta ou agente de cálculo não pode escolher inciso, valor, base ou data-base.

### Temporal Gate do art. 112 (antes de redigir)

Se a peça mencionar art. 112, progressão, inciso, percentual, lapso ou data correspondente, exigir:

- `output/verificacao-temporal-art-112.yaml` com `status: REGRA_APROVADA_POR_HUMANO`;
- `verificado_em` e `aprovado_em` na data corrente;
- fontes oficiais, versões comparadas, regra intertemporal e alcance das decisões;
- revisor humano identificado e justificativa de aprovação;
- nenhuma pendência material.

Ausência, expiração ou divergência: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**. Não criar minuta com número nem deixar placeholder para posterior preenchimento.

### Citation Gate (obrigatório)

Todo argumento tem fundamento: nenhuma súmula/SV/tema/dispositivo citado de memória — só o que vem de `output/pesquisa-juridica.md`. Não gravar a peça com marcador `[NÃO VERIFICADO]`/`[DIVERGENTE]` pendente (o hook `verifica-citacoes` bloqueia a gravação).

> Este step também é o ponto de retorno do loop de revisão: se o Step 07 emitir **REJECT**, o pipeline volta para cá com os `fixes` (`output/revisao-juridica.md`) e o Pedro Progressão refaz APENAS os pontos indicados (feedback-delta, não reescrever do zero).

## Inputs para este Step

- `output/requisitos-instituto.md` → requisitos confirmados (escopo da peça)
- `output/verificacao-temporal-art-112.yaml` → gate obrigatório quando houver art. 112; `NAO_APLICAVEL` exige justificativa
- `output/pesquisa-juridica.md` → fundamentos (súmulas/SVs/temas/dispositivos)
- `output/resumo-execucao.md` → pena, regime, *dies a quo*, lapsos, faltas
- `output/caso.md` → apenado, autos, Vara de Execução, instituto pretendido
- `output/revisao-juridica.md` → (apenas em re-execução pós-REJECT) os `fixes`
- Skill carregada: a skill do instituto (ver lista acima)
- Best-practice de referência (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md`

## Expected Outputs

- `output/peticao-execucao-minuta.md` → minuta completa e auto-contida da petição do instituto, pronta para revisão jurídica

## Execution Mode

- **Modo:** Inline
- **Skills:** a skill do instituto (carregada conforme `instituto:`)
- **Apoio:** subagente nativo `dosimetria-pena`

## Quality Gate

Antes de avançar para o Step 06:
- [ ] `output/peticao-execucao-minuta.md` existe
- [ ] A skill carregada corresponde ao `instituto:` de `output/caso.md`
- [ ] Endereçamento ao Juízo da Execução e qualificação (apenado, autos) corretos
- [ ] Todos os requisitos de `output/requisitos-instituto.md` estão desenvolvidos (e nada inventado)
- [ ] Cada requisito cita seu fundamento (súmula/SV/tema/dispositivo) — sem citação de memória
- [ ] Nenhum marcador `[NÃO VERIFICADO]`/`[DIVERGENTE]` pendente na peça
- [ ] Se houver art. 112, o gate temporal está aprovado por humano, vigente e sem pendências
- [ ] Regra, base, data-base e cálculo reproduzem exatamente o contrato aprovado e os documentos
- [ ] Se `NAO_APLICAVEL`, a peça não contém número ou comparação de progressão
- [ ] Em re-execução: todos os `fixes` de `output/revisao-juridica.md` foram aplicados

Se falhar o gate temporal, retornar ao Step 03/04; o redator não pode “ajustar” a regra. Nas demais falhas, ajustar a minuta.
