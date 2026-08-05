---
name: habeas-corpus
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de HABEAS CORPUS (HC) no processo
  penal brasileiro — ação autônoma de impugnação (não é recurso) que tutela a liberdade de locomoção
  contra violência ou coação ilegal. Gatilhos: habeas corpus, HC, impetrar habeas corpus, art. 5º
  LXVIII CF, art. 647 CPP, art. 648 CPP, art. 654 CPP, art. 647-A CPP, liberdade de locomoção…. Não
  use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-habeas-corpus"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["habeas-corpus", "habeas corpus"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Habeas Corpus (HC)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a construção da peça criminal de **Habeas Corpus**, conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais". É *"uma das peças mais importantes no trabalho prático do advogado criminalista."*

> **O HC NÃO é recurso.** Ao lado da **Revisão Criminal** e do **Mandado de Segurança em matéria criminal**, é uma **ação autônoma de impugnação**.

## Cabimento das ações autônomas de impugnação

São cabíveis: (1) contra **decisões criminais condenatórias já com trânsito em julgado**; (2) contra **decisões sucedâneas de recursos** (decisões contra as quais não há previsão de recurso). Diferença marcante para os recursos: estes são interpostos **antes** do trânsito em julgado (salvo o agravo em execução).

## Fundamento

- **Art. 5º, LXVIII, CF:** *"conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder."*
- **Art. 647 CPP:** *"Dar-se-á habeas corpus sempre que alguém sofrer ou se achar na iminência de sofrer violência ou coação ilegal na sua liberdade de ir e vir, salvo nos casos de punição disciplinar."*
- *Habeas corpus* = "haver o corpo" / exibir o corpo / apresentar a pessoa.
- A CF fala em "liberdade de **locomoção**"; o CPP, em "liberdade de **ir e vir**".

## Espécies

- **HC preventivo** — a privação da liberdade está **prestes a ocorrer** (expede-se salvo-conduto).
- **HC repressivo (liberatório)** — a privação da liberdade **já ocorreu**.

## Princípios orientadores

- **Celeridade** — qualquer do povo pode impetrar, **mesmo sem advogado**; a ordem pode ser concedida **de ofício** pelo juízo/tribunal (**art. 647-A CPP**, incluído pela **Lei 14.836/2024** — positivou o que já era jurisprudência).
- **Gratuidade** — o impetrante **não recolhe custas**.
- **Informalidade** — não há forma previamente definida em lei.

## Violência × coação

- **Violência** — agressão física (*vis corporalis* / *vis absoluta*).
- **Coação** — violência moral, ameaça, medo, intimidação (*vis compulsiva* / *vis relativa*).

## Hipóteses de coação ilegal (art. 648 CPP)

Quando: não houver **justa causa** (lastro probatório mínimo: elementos de tipicidade/ilicitude/culpabilidade + materialidade e indícios de autoria); alguém estiver preso por mais tempo que a lei determina; quem ordenou a coação não tiver competência; houver cessado o motivo que a autorizou; não for admitida fiança nos casos legais; o processo for manifestamente nulo; estiver extinta a punibilidade.

## Súmulas do STF (não cabimento — sem atentado à liberdade de locomoção)

- **Súmula 693 STF** — não cabe HC contra decisão condenatória a pena de **multa** (a multa não pode mais ser convertida em prisão).
- **Súmula 694 STF** — não cabe HC contra exclusão de militar, perda de patente ou de função pública.
- **Súmula 695 STF** — não cabe HC quando já extinta a pena privativa de liberdade.

## Trancamento de inquérito policial ou ação penal

Uso **excepcional**, só quando ficar **manifesto de plano, sem necessidade de dilação probatória**. Hipóteses: ausência de materialidade; ausência de autoria/participação; atipicidade da conduta; extinção da punibilidade (ex.: prescrição); inépcia da denúncia ou queixa.

> **Aplicação concreta — o recebimento da denúncia:** a decisão que **recebe** a denúncia ou queixa é, em regra, **irrecorrível** (não há recurso previsto em lei). Por isso, pode ser atacada por **HC** (justamente por ser decisão sucedânea de recurso), nas hipóteses excepcionais de trancamento acima. Lembre que o recebimento **interrompe a prescrição** (art. 117, I, CP).

## Legitimidade — três sujeitos

- **Impetrante** — quem ajuíza a ação. **Qualquer pessoa** (física ou jurídica), o próprio paciente, ou o MP. Sem necessidade de advogado (**art. 654 CPP**).
- **Paciente** — o beneficiário da ordem. Pode coincidir com o impetrante. **NÃO pode ser pessoa jurídica** (PJ não sofre atentado à liberdade de locomoção).
- **Impetrado** — a parte passiva, responsável pelo ato ilegal (autoridade coatora). **Não precisa ser autoridade** (diferente do MS) — ex.: diretor de clínica que retém paciente por dívida. No mais das vezes, é autoridade (delegado, membro do MP, juiz).

## Endereçamento conforme a autoridade coatora

| Autoridade coatora | Endereçamento | Fundamento |
|---|---|---|
| Tribunal Superior — STJ, TSE, TST, STM (coator) | Presidente do STF | art. 102, I, "i", CF |
| Desembargador/TJ ou TRF (coator) | Presidente do STJ | art. 105, I, "c", CF |
| **Juiz federal** (coator) | Presidente do TRF da [...] região | art. 108, I, "d", CF |
| **Juiz de direito** ou **membro do MP** (coator) | Presidente do Tribunal de Justiça do Estado | (competência do TJ) |
| **Delegado federal** (coator) | Juiz Federal da Vara Criminal Federal | — |
| **Delegado de polícia civil** (coator) | Juiz de Direito da Vara Criminal da Comarca | — |

## Estrutura da peça (petição única)

```
1. Endereçamento (conforme a autoridade coatora)
2. Preâmbulo: IMPETRANTE (advogado) + verbo IMPETRAR + fundamento + PACIENTE + IMPETRADO
3. I — Dos Fatos
4. II — Do Direito (ex.: Da Ilegalidade da Prisão)
5. III — Dos Pedidos (concessão da ordem)
6. Fechamento
```

### 2. Preâmbulo — os três sujeitos

- **Impetrante (o advogado):** `[Nome do advogado], advogado(a), inscrito(a) na OAB/[UF] sob o nº [...], com endereço profissional em [...], vem, respeitosamente, à presença de Vossa Excelência,` + verbo **IMPETRAR** + `HABEAS CORPUS, com fundamento no art. 5º, LXVIII, da Constituição Federal e no art. 647 do Código de Processo Penal,`
- **Paciente:** `em favor de [nome do cliente], [qualificação: nacionalidade, estado civil, CPF, profissão, endereço],`
- **Impetrado:** `diante de ato do(a) [autoridade coatora — ex.: Excelentíssimo Senhor Juiz de Direito Titular da 2ª Vara Criminal da Comarca de (...)],`
- `pelas razões de fato e de direito a seguir expostas:`

> **Verbo: IMPETRAR.** Não use "apresentar" nem "oferecer".

### 3. I — Dos Fatos

Resumo da situação fática.

### 4. II — Do Direito (exemplo: Da Ilegalidade da Prisão)

`Conforme a r. decisão de folhas/evento [...], foi decretada a prisão temporária do paciente pela prática do delito de furto qualificado. Ocorre que as hipóteses de cabimento da prisão temporária estão expressas no art. 1º, III, da Lei 7.960/89, e, dentre elas, não consta o delito de furto qualificado. A prisão, portanto, é ilegal e deve ser imediatamente relaxada.`

> **Relaxamento × revogação:** pede-se o **relaxamento** da prisão **ilegal**; se a prisão é **legal**, mas atualmente desnecessária, pede-se a **revogação**.

### 5. III — Dos Pedidos

`Diante do exposto, o impetrante requer a concessão da ordem de Habeas Corpus para o fim de [ex.: ser relaxada a prisão ilegal, com imediata expedição de alvará de soltura do paciente].`

### 6. Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

## Checklist final

- [ ] Tratado como **ação autônoma de impugnação** (não recurso)?
- [ ] Fundamento: **art. 5º, LXVIII, CF + art. 647 CPP**?
- [ ] Espécie correta (preventivo × repressivo)?
- [ ] Endereçamento conforme a **autoridade coatora**?
- [ ] Três sujeitos no preâmbulo (**impetrante / paciente / impetrado**)?
- [ ] Verbo **IMPETRAR**?
- [ ] **Paciente** não é pessoa jurídica?
- [ ] Pedido de **concessão da ordem**, com a medida correta (**relaxamento** se ilegal × **revogação** se desnecessária)?

## Lembretes finais

- **Não é recurso — é ação autônoma de impugnação** (ao lado da revisão criminal e do MS criminal).
- **Verbo: impetrar.**
- **Três sujeitos: impetrante (qualquer pessoa, até PJ), paciente (beneficiário, nunca PJ), impetrado (coator, autoridade ou não).**
- **Princípios: celeridade, gratuidade, informalidade.**
- **Violência (vis absoluta) × coação (vis compulsiva).**
- **Súmulas 693, 694, 695 STF** — não cabe HC sem atentado à liberdade de locomoção.
- **Trancamento de IP/ação penal:** excepcional, sem dilação probatória.
- **Relaxamento** (prisão ilegal) × **revogação** (prisão legal, mas desnecessária).
- **Concessão de ofício:** art. 647-A CPP (Lei 14.836/2024).
- **HC perante STJ/STF** (liminar, Súmula 691, HC substitutivo, estratégia TJ→STJ→STF): ver skill `hc-tribunais-superiores`. Contra **acórdão denegatório de HC**, a via recursal própria é o **RHC — prazo de 5 dias** (ver skill `recurso-ordinario-hc`).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
