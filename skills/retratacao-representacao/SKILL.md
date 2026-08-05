---
name: retratacao-representacao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de RETRATAÇÃO DA REPRESENTAÇÃO (ou
  RENÚNCIA à representação) no processo penal brasileiro — peça pela qual o ofendido desiste/retira
  a representação já oferecida (retratação) ou abdica de oferecê-la (renúncia), nos crimes de ação
  penal pública condicionada à representação. Gatilhos: retratação da representação, renúncia à
  representação, retirar a representação… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  aliases: [retratacao-da-representacao]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-retratacao-representacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["retratacao-representacao", "retratacao representacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Retratação da Representação (e Renúncia)

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

Esta skill orienta a construção da peça de **Retratação da Representação** (ou **Renúncia** à representação), conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais". Peça da **fase de investigação**, nos crimes de **ação penal pública condicionada à representação**.

## Renúncia × Retratação

- **Renúncia** — a representação **ainda não foi oferecida**; o ofendido abdica de oferecê-la.
- **Retratação** — a representação **já foi oferecida**; o ofendido a **retira/desiste**.

A peça é a mesma; muda o substantivo (e o verbo de pedido), conforme o caso.

## Momento — a regra e a exceção (Maria da Penha)

| Hipótese | Limite temporal | Fundamento |
|---|---|---|
| **Regra geral** | até **antes do OFERECIMENTO da denúncia** | **art. 25 CPP** e **art. 102 CP** (*"a representação será irretratável depois de oferecida a denúncia"* — logo, antes é retratável) |
| **Lei Maria da Penha** | até **antes do RECEBIMENTO da denúncia**, perante o juiz, em **audiência especialmente designada**, ouvido o MP | **art. 16 da Lei 11.340/2006** |

> **ADI 7.217/STF (Plenário):** o art. 16 deve ser aplicado de forma estrita; **só a ofendida** pode requerer a audiência de renúncia — é **vedado** ao juiz designá-la de ofício ou a requerimento de outra parte; e o **não comparecimento** da vítima **não** implica retratação/renúncia tácita.

## Endereçamento

Pode ser ao **Delegado de Polícia**, ao **Promotor de Justiça** ou ao **próprio Juiz de Direito**. Diferente do requerimento e da representação (que não vão ao juiz), aqui o endereçamento **ao juiz é cabível** — e, no âmbito da **Maria da Penha**, é o juiz que preside a audiência de renúncia (art. 16).

## Estrutura da peça (petição única)

```
1. Endereçamento (delegado, MP ou juiz)
2. Preâmbulo: nome + qualificação + procuração + fundamento + verbo APRESENTAR + (renúncia/retratação) + representado
3. I — Dos Fatos
4. II — Do Direito (Da possibilidade de renúncia/retratação + tempestividade)
5. III — Dos Pedidos
6. Fechamento (SEM rol de testemunhas)
```

### Preâmbulo

Nome + **qualificação completa** (art. 319, II, CPC por analogia) + `por seu(sua) advogado(a) firmatário(a), conforme procuração anexa, vem perante Vossa Excelência, com fundamento no art. 102 do Código Penal (CP) [ou art. 25 do Código de Processo Penal (CPP)], apresentar [renúncia à representação / retratação da representação] oferecida em face de [nome do representado], já qualificado, uma vez que não possui mais interesse em vê-lo processado criminalmente, pelas seguintes razões de fato e de direito:`

> **Verbo: APRESENTAR.** O réu é o **representado**.

### I — Dos Fatos

Resumo da situação fática — incluindo, se for caso de **retratação**, que **houve o oferecimento** da representação.

### II — Do Direito

- **Da possibilidade de renúncia/retratação** + **tempestividade:** demonstrar que é cabível porque feita **antes do oferecimento da denúncia** (art. 25 CPP / art. 102 CP); ou, no âmbito da **Maria da Penha**, **antes do recebimento** da denúncia (art. 16 da Lei 11.340/2006).

### III — Dos Pedidos

`Diante do exposto, requer seja acolhida a [renúncia / retratação] ora apresentada, pois não há mais interesse em ver o representado processado criminalmente, com o consequente arquivamento dos autos.`

### Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

> **SEM rol de testemunhas** nesta peça.

## Checklist final

- [ ] Identificou corretamente **renúncia** (não oferecida) × **retratação** (já oferecida)?
- [ ] **Momento** correto: antes do **oferecimento** (regra) ou antes do **recebimento** (Maria da Penha)?
- [ ] Fundamento certo (art. 25 CPP / art. 102 CP; ou art. 16 da 11.340)?
- [ ] Verbo **APRESENTAR**; réu = **representado**?
- [ ] No Direito, demonstrou a **possibilidade + tempestividade**?
- [ ] Pedido de **acolhimento + arquivamento dos autos**?
- [ ] **Sem rol de testemunhas**?

## Lembretes finais

- **Renúncia** (não oferecida) × **Retratação** (já oferecida). Verbo: apresentar; réu = representado.
- **Regra: antes do OFERECIMENTO da denúncia** (art. 25 CPP / art. 102 CP).
- **Maria da Penha: antes do RECEBIMENTO**, em audiência designada, ouvido o MP (art. 16 da 11.340).
- **ADI 7.217 STF:** só a ofendida requer a audiência; juiz não designa de ofício; não há renúncia tácita por ausência.
- **Endereçamento pode ser ao juiz** (cabível aqui, diferente do requerimento/representação).
- **Sem rol de testemunhas.**

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
