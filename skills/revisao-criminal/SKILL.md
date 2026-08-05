---
name: revisao-criminal
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de REVISÃO CRIMINAL no processo
  penal brasileiro — ação autônoma de impugnação (não é recurso) que reexamina sentença condenatória
  já transitada em julgado, SEMPRE em favor do réu. Gatilhos: revisão criminal, revisionando, ação
  autônoma de impugnação, sentença transitada em julgado, coisa julgada, art. 621 CPP (hipóteses de
  cabimento)…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-revisao-criminal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["revisao-criminal", "revisao criminal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Revisão Criminal

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

Esta skill orienta a construção da peça de **Revisão Criminal**, conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Natureza

A coisa julgada é **indispensável à segurança jurídica** (art. 5º, XXXVI, CF). Excepcionalmente, pode ser **afastada pela Revisão Criminal**, que é **ação autônoma de impugnação** (ao lado do **Habeas Corpus** e do **Mandado de Segurança em matéria criminal**) — **NÃO é recurso**. Visa **reexaminar sentença condenatória já transitada em julgado**.

É semelhante à ação rescisória do processo civil, mas com **duas diferenças básicas**:
1. A rescisória pode ser ajuizada por qualquer das partes, terceiros e MP; a Revisão Criminal é **sempre PRÓ-RÉU** (nunca *pro societate*).
2. A rescisória tem prazo decadencial de 2 anos; a Revisão Criminal **não se sujeita a prazos preclusivos** (pode ser ajuizada a qualquer tempo).

## Hipóteses de cabimento (art. 621 CPP)

A revisão dos processos findos (com trânsito em julgado) será admitida quando:
- **I** — a sentença condenatória for **contrária ao texto expresso da lei penal** ou **à evidência dos autos**;
- **II** — a sentença condenatória se **fundar em depoimentos, exames ou documentos comprovadamente falsos**;
- **III** — após a sentença, se **descobrirem novas provas de inocência** do condenado ou de circunstância que autorize **diminuição especial da pena**.

## Prazo, legitimidade e pedidos possíveis (lei)

- **Prazo (art. 622):** a qualquer tempo, antes da extinção da pena ou após, **mesmo no caso de morte do réu**. **Não há tempestividade** a alegar.
- **Legitimidade (art. 623):** o **próprio réu** (não exige advogado), procurador legalmente habilitado, ou — no caso de morte — **cônjuge, ascendente, descendente ou irmão**.
- **Pedidos possíveis (art. 626):** **alterar a classificação** da infração; **absolver** o réu; **modificar a pena**; **anular o processo**.
- **Indenização (art. 630):** o tribunal, se requerido, pode reconhecer o direito a **justa indenização** pelos prejuízos sofridos (erro judiciário).

## Endereçamento

Ao **Presidente do Tribunal**: `Excelentíssimo Senhor Doutor Desembargador Presidente do Tribunal de Justiça do Estado de [...]` (estadual) ou `[...] do Tribunal Regional Federal da [N]ª Região` (federal).

## Estrutura da peça (petição única)

```
1. Endereçamento (Presidente do Tribunal)
2. Preâmbulo: nome + qualificação + procuração + verbo (ajuizar/propor/apresentar) + fundamento (621) — SEM tempestividade
3. I — Dos Fatos
4. II — Do Direito (fundamentos do 621 que autorizam a revisão pró-réu)
5. III — Dos Pedidos
6. Fechamento (SEM rol de testemunhas)
```

### Preâmbulo

Nome + **qualificação completa** (art. 319, II, CPC por analogia — analogia admitida pelo art. 3º CPP) — **qualificar** (é ação nova, processo novo; **não** usar "já qualificado") + `por seu(sua) advogado(a) (procuração anexada no evento/folha [...]), vem, respeitosamente, à presença de Vossa Excelência, [ajuizar/propor/apresentar] REVISÃO CRIMINAL, com fundamento no art. 621, [inciso], do Código de Processo Penal (CPP), pelas razões de fato e de direito a seguir expostas:`

> **Verbos: ajuizar, propor ou apresentar.** **NÃO** use "impetrar" (é do HC), "interpor" (recursos) nem "opor" (embargos).
> **NÃO há item de tempestividade** (não há prazo preclusivo — art. 622).
> Chame o cliente de **revisionando** (autor da revisão criminal).

### I — Dos Fatos

Resumo da situação fática.

### II — Do Direito

Indicar os fundamentos (uma das hipóteses do art. 621) que autorizam o tribunal a rever, **em benefício do réu**, a condenação transitada em julgado. Exemplo (621, III — nova prova de inocência):

> *"O revisionando foi condenado pela prática do crime de estupro. Ocorre que, após o trânsito em julgado da sentença condenatória, aportou aos autos exame de DNA indicando que o material genético encontrado nas roupas íntimas da vítima não é compatível com o perfil genético do autor. Tal prova, somente agora descoberta, é decisiva para o deslinde do feito, pois exclui o revisionando de qualquer participação no crime narrado na denúncia."*

### III — Dos Pedidos

`Diante do exposto, requer:`
- **a)** a **procedência** da presente ação de revisão criminal para o fim de [ex.: **absolver** o revisionando do crime narrado na denúncia];
- **b)** se for o caso, a **fixação de indenização por erro judiciário** (art. 630 CPP);
- **c)** subsidiariamente, se houver elementos, a **redução da pena**.

> Use **"procedência"** (ação), não "provimento" (que é de recurso).

### Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

> **SEM rol de testemunhas** na revisão criminal (a coleta de provas pode ser feita antes, na **justificação criminal**, que visa instruir futura revisão).

## Checklist final

- [ ] Tratada como **ação autônoma de impugnação** (não recurso)?
- [ ] **Pró-réu** e sobre **condenação transitada em julgado**?
- [ ] Hipótese do **art. 621** (I, II ou III) corretamente identificada?
- [ ] Endereçada ao **Presidente do Tribunal** (TJ ou TRF)?
- [ ] Cliente **qualificado** (não "já qualificado"); chamado **revisionando**?
- [ ] Verbo **ajuizar/propor/apresentar** (nunca impetrar/interpor/opor)?
- [ ] **Sem item de tempestividade** (art. 622)?
- [ ] Pedido de **procedência** (não "provimento") + indenização (630, se for o caso) + subsidiário?
- [ ] **Sem rol de testemunhas**?

## Lembretes finais

- **Ação autônoma de impugnação — NÃO é recurso** (ao lado do HC e do MS criminal).
- **Sempre PRÓ-RÉU; sem prazos preclusivos** (a qualquer tempo, art. 622).
- **Cabimento: art. 621** (contrária à lei/evidência; prova falsa; nova prova de inocência).
- **Verbos: ajuizar/propor/apresentar.** Cliente = **revisionando**. Qualificar (ação nova).
- **Sem tempestividade.**
- **Pedidos (626): absolver, modificar a pena, alterar a classificação, anular** + indenização (630). Use **"procedência"**.
- **Sem rol de testemunhas** (isso é da justificação criminal).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
