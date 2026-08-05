---
step: "05"
name: "Redação da Minuta"
type: agent
agent: redator
execution: inline
depends_on: step-04
on_reject_target: true
---

# Step 05: Nara Negociação — Redação da Minuta

## Para o Pipeline Runner

Executar a redação da minuta pela persona **Nara Negociação** (`agents/redator.custom.md`), que **carrega a skill do instituto escolhido** em `output/instituto-e-termos.md` (`anpp`, `transacao-penal`, `suspensao-condicional-processo` ou `colaboracao-premiada`) e se apoia no subagente nativo `.claude/agents/negociacao-penal.md` (estratégia de negociação).

A Nara Negociação deve redigir o **acordo / manifestação** do instituto aprovado, usando o modelo de manifestação/termo da skill carregada, cobrindo SOMENTE o instituto e as condições aprovadas em `output/instituto-e-termos.md`.

> "Todo argumento tem fundamento": cada requisito de cabimento e cada condição cita o dispositivo/súmula/precedente vindo de `output/pesquisa-juridica.md` — nada de memória. Nenhuma citação com `[NÃO VERIFICADO]` pendente pode ir à minuta entregue (o Citation Gate da revisão bloqueia).

> Este step também é o ponto de retorno do loop de revisão: se o Step 07 emitir **REJECT**, o pipeline volta para cá com os `fixes` (`output/revisao-juridica.md`) e a Nara Negociação refaz APENAS os pontos indicados.

## Context Loading

Load these files before executing:
- `output/instituto-e-termos.md` — instituto, skill a carregar, requisitos e condições aprovadas (escopo da peça)
- `output/pesquisa-juridica.md` — fundamentos (dispositivos/súmulas/precedentes)
- `output/resumo-autos.md` — fatos, natureza e força da prova
- `output/caso.md` — investigado/réu, processo, órgão, tipo penal, fase
- `output/revisao-juridica.md` — (apenas em re-execução pós-REJECT) os `fixes` a aplicar
- `skills/{instituto}/SKILL.md` — skill do instituto escolhido (modelo da peça/termo)
- Best-practice (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md` e `justica-negocial.md`

## Instructions

### Process

1. Ler `output/instituto-e-termos.md`, identificar o instituto e **carregar a skill correspondente**; usar seu modelo de manifestação/termo como estrutura.
2. Redigir a peça cobrindo o instituto e as condições aprovadas — endereçamento correto (MP para ANPP; juízo para transação/sursis; termo bilateral para colaboração), fatos e cabimento, preenchimento dos requisitos, ausência de óbices, condições propostas/cláusulas, pedidos e fecho. Para ANPP incluir o pedido subsidiário de remessa ao órgão superior (§14); para colaboração, os anexos com cláusula de corroboração (§16).
3. Vincular cada requisito/condição a um fundamento de `output/pesquisa-juridica.md`; registrar o consentimento informado do cliente e a ausência de promessa de resultado; **não** deixar `[NÃO VERIFICADO]` pendente.
4. Em re-execução pós-REJECT: aplicar APENAS os `fixes` de `output/revisao-juridica.md` — não reescrever o que já estava aprovado.
5. Salvar em `output/acordo-minuta.md`.

## Output Format

```
[ENDEREÇAMENTO conforme o instituto]

Autos/IP/PIC nº [número]

[Qualificação do investigado/réu + advogado]

I — DOS FATOS E DO CABIMENTO
[fatos + enquadramento no critério do instituto, com fundamento]

II — DO PREENCHIMENTO DOS REQUISITOS
[requisito a requisito, cada um com citação da pesquisa]

III — DA AUSÊNCIA DE ÓBICES
[óbices afastados com fundamento]

IV — DAS CONDIÇÕES / CLÁUSULAS
[condições propostas, proporcionais e fundamentadas]

V — DOS PEDIDOS
[pedido principal + subsidiário (ex.: ANPP §14); consentimento informado]

[LOCAL], [DATA]. [ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

## Output Example

> Minuta de referência (qualidade esperada, resumida).

```
EXCELENTÍSSIMO(A) SENHOR(A) PROMOTOR(A) DE JUSTIÇA

Autos de Inquérito nº 0000000-00.0000.0.00.0000

JOÃO DA SILVA, já qualificado, por seu advogado (procuração anexa), com fundamento
no art. 28-A do CPP e na Resolução CNMP nº 289/2024, vem REQUERER A PROPOSITURA DE
ACORDO DE NÃO PERSECUÇÃO PENAL, pelas razões a seguir.

I — DOS FATOS E DO CABIMENTO
Investigado por furto simples (CP art. 155), infração praticada SEM violência ou
grave ameaça, cuja pena mínima (1 ano) é INFERIOR a 4 anos (art. 28-A, caput e §1º).
Não é caso de arquivamento.

II — DO PREENCHIMENTO DOS REQUISITOS
a) disposto a confessar formal e circunstanciadamente (consentimento informado anexo);
b) ausência de violência/grave ameaça; c) pena mínima inferior a 4 anos (art. 28-A
§1º); d) acordo necessário e suficiente à reprovação e prevenção.

III — DA AUSÊNCIA DE ÓBICES (art. 28-A, §2º)
Réu primário; inquéritos sem trânsito não configuram habitualidade; sem benefício
negocial no quinquênio; fato não envolve violência doméstica.

IV — DAS CONDIÇÕES PROPOSTAS (art. 28-A, I a V)
Reparação do dano (I) e prestação pecuniária proporcional à capacidade econômica,
com parcelamento (IV, c/c CP 45).

V — DOS PEDIDOS
a) formulação da proposta de ANPP; b) subsidiariamente, não oferecida a proposta,
remessa ao órgão superior (art. 28-A, §14). A decisão de aceitar é do cliente.

São Paulo, 27 de junho de 2026. [ADVOGADO] — OAB/SP nº 000.000
```

## Veto Conditions

Reject and redo if ANY are true:
1. A minuta desenvolve instituto ou condição não aprovados no Step 04, ou usa a skill do instituto errado.
2. Algum requisito/condição é afirmado sem citação da pesquisa, ou há `[NÃO VERIFICADO]` pendente na minuta.

## Quality Criteria

- [ ] `output/acordo-minuta.md` existe
- [ ] Endereçamento e qualificação corretos conforme o instituto e `output/caso.md`
- [ ] Todos os requisitos e condições de `output/instituto-e-termos.md` desenvolvidos (e nada inventado)
- [ ] Cada requisito/condição cita seu fundamento (dispositivo/súmula/precedente)
- [ ] Consentimento informado e ausência de promessa de resultado registrados
- [ ] Em re-execução: todos os `fixes` de `output/revisao-juridica.md` foram aplicados
