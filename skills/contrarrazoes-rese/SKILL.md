---
name: contrarrazoes-rese
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de CONTRARRAZÕES DE RECURSO EM
  SENTIDO ESTRITO (contrarrazões de RESE/RSE) no processo penal brasileiro — resposta do recorrido
  que visa a MANUTENÇÃO da decisão recorrida favorável ao cliente. Gatilhos: contrarrazões de RESE,
  contrarrazões de recurso em sentido estrito, razões do recorrido, art. 588 caput CPP, art. 589
  CPP, petição de juntada…. Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  aliases: [contrarrazoes-de-rese]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-contrarrazoes-rese"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["contrarrazoes-rese", "contrarrazoes rese"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Contrarrazões de Recurso em Sentido Estrito

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

Esta skill orienta a construção da peça criminal de **Contrarrazões de RESE** (também "razões do recorrido"), conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Quando surge

No RESE, o cliente pode ser **recorrente** (ex.: o juiz pronunciou o cliente — art. 581, IV — e a defesa recorre) ou **recorrido** (ex.: o juiz revogou a prisão preventiva do cliente — art. 581, V — e o MP recorre). Quando o cliente é **recorrido**, apresentam-se **contrarrazões**.

## Objetivo

**MANUTENÇÃO da decisão recorrida** — a decisão foi favorável ao cliente.

## Fundamento e prazo

- **Art. 588, caput, CPP** — **2 dias**: *"Dentro de 2 (dois) dias, contados da interposição do recurso [...], este oferecerá as razões e, em seguida, será aberta vista ao recorrido, por igual prazo."*

## Princípio orientador — NÃO há interposição

**Não se faz interposição** — o recurso já foi interposto pela outra parte. Faz-se **petição de juntada** (verbo **APRESENTAR**). Peça **bipartida**.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Petição de juntada**, dirigida ao **juiz**; (2) **contrarrazões**, endereçadas ao **tribunal**.

### PRIMEIRA PARTE — Petição de juntada

**Endereçamento:** `Ao Juízo da [...]` (ao juiz que prolatou a decisão).

**Preâmbulo:** nome do cliente + `já qualificado` + `por intermédio do(a) advogado(a) que ao final subscreve (procuração anexada no evento/folha [...])` + `vem, respeitosamente, à presença de Vossa Excelência,` + verbo **APRESENTAR** + `CONTRARRAZÕES DE RECURSO EM SENTIDO ESTRITO` (caixa alta; ou "razões do recorrido") + fundamento (`forte no art. 588, caput, do Código de Processo Penal (CPP)`) + tempestividade (`no prazo legal de 2 (dois) dias`).

**Pedido de manutenção (art. 589 — pedindo a SUSTENTAÇÃO):** `Requer seja o presente recurso processado com a manutenção da decisão recorrida, com fundamento no art. 589, caput, do CPP, encaminhando-se os autos com as anexas contrarrazões à superior instância.`

> O art. 589 permite ao juiz **reformar** (juízo de retratação — o que o recorrente quer) **ou sustentar** seu despacho. Como recorridos, queremos que o juiz **sustente/mantenha** a decisão.

**Fechamento** padrão.

### SEGUNDA PARTE — Contrarrazões (nova folha)

Cabeçalho: `Contrarrazões de Recurso em Sentido Estrito`.
- `Recorrente: o Ministério Público` (ou querelante) / `Recorrido: [nome do cliente]`.

Endereçamento: `Egrégio Tribunal de Justiça — Colenda Câmara Criminal` (estadual) ou `Egrégio Tribunal Regional Federal — Colenda Turma Criminal` (federal).

**I — Dos Fatos:** resumo da situação fática.

**II — Do Direito:**
- **Da preliminar de intempestividade** — **apenas se** o recorrente interpôs fora do prazo (**não inventar**).
- **Do mérito:** **rebater TODOS os argumentos do recorrente**, ponto a ponto, **sem inovar**. Ex.: se o MP alegou não haver materialidade, não haver autoria e ser o crime hediondo, contra-argumenta-se que há materialidade, há autoria e não é hediondo. Queremos a **manutenção**.

**III — Dos Pedidos:**
```
Ante o exposto, requer:
a) o não conhecimento do recurso, pois interposto fora do prazo legal (se for o caso);
b) o improvimento (não provimento) do recurso, com a consequente manutenção da
   decisão recorrida.
```

**Fechamento** padrão.

> **Recorrente recorre → conhecimento + provimento. Recorrido responde → não conhecimento (se for o caso) + improvimento.**

## Checklist final

- [ ] Objetivo = **manutenção da decisão recorrida**?
- [ ] **Sem interposição** — petição de juntada (verbo **APRESENTAR**)?
- [ ] Peça **bipartida** (petição ao juiz + contrarrazões ao tribunal)?
- [ ] Fundamento: **art. 588, caput, CPP** (2 dias)?
- [ ] Pedido de manutenção/sustentação (art. 589) na petição de juntada?
- [ ] Recorrente = MP/querelante; Recorrido = cliente?
- [ ] No mérito, **rebater todos os argumentos** do recorrente, **sem inovar**?
- [ ] Pedido de **não conhecimento (se for o caso) + improvimento + manutenção**?

## Lembretes finais

- **Objetivo: manter a decisão favorável ao cliente.**
- **Sem interposição** — faz-se **petição de juntada**. **Verbo: apresentar.**
- **Peça bipartida** — petição de juntada (juiz) + contrarrazões (tribunal).
- **Fundamento: art. 588, caput, CPP — 2 dias.**
- **Na petição de juntada, pede-se a manutenção/sustentação (art. 589)** — não a retratação.
- **No mérito: rebater todos os argumentos do recorrente, sem inovar.**
- **Pedido: não conhecimento (se intempestivo) + improvimento + manutenção.**

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
