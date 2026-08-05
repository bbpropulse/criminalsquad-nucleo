---
name: contrarrazoes-agravo
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de CONTRARRAZÕES DE AGRAVO EM
  EXECUÇÃO no processo penal brasileiro — resposta do agravado que visa a MANUTENÇÃO da decisão do
  juiz da execução favorável ao cliente. Gatilhos: contrarrazões de agravo em execução,
  contrarrazões de agravo, razões do agravado, art. 197 LEP, art. 588 caput CPP, art. 589 CPP, art.
  179 LEP…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  aliases: [contrarrazoes-de-agravo-em-execucao]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-contrarrazoes-agravo"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["contrarrazoes-agravo", "contrarrazoes agravo"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Contrarrazões de Agravo em Execução

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

Esta skill orienta a construção da peça criminal de **Contrarrazões de Agravo em Execução**, conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Contexto

O agravo em execução ataca decisões do juiz da execução (art. 197 LEP) e **segue o procedimento do RESE** (a LEP é omissa quanto a prazo, rito e forma). Tudo o que vale para o RESE — inclusive as contrarrazões — vale para o agravo em execução. Quando o **MP agrava** de decisão favorável ao apenado (ex.: deferimento de progressão de regime), o cliente é o **agravado** e apresenta contrarrazões.

> **Exceção do efeito suspensivo — art. 179 LEP** (macete: *"troque os dois últimos números do 197"*): na desinternação/liberação de inimputável, o agravo do MP tem efeito suspensivo, pois a ordem só é expedida após o trânsito em julgado.

## Objetivo

**MANUTENÇÃO da decisão recorrida** — a decisão do juiz da execução foi favorável ao cliente.

## Fundamento e prazo

- **Art. 588, caput, CPP** — **2 dias** (segue o rito do RESE; o 588 é o dispositivo das contrarrazões de RESE e, por extensão, do agravo em execução).

## Princípio orientador — NÃO há interposição

**Não se faz interposição** — o recurso já foi interposto pelo MP. Faz-se **petição de juntada** (verbo **APRESENTAR**). Peça **bipartida**.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Petição de juntada**, dirigida ao **juiz da execução** (VEC); (2) **contrarrazões**, endereçadas ao **tribunal**.

### PRIMEIRA PARTE — Petição de juntada

**Endereçamento:** `Ao Juízo da Vara de Execução Penal da Comarca de [...]` (ao juiz da execução, que prolatou a decisão).

**Preâmbulo:** nome do cliente + `já qualificado` (fase de execução, após o trânsito em julgado) + `por intermédio do(a) advogado(a) que ao final subscreve (procuração [...])` + `vem, respeitosamente, à presença de Vossa Excelência,` + verbo **APRESENTAR** + `CONTRARRAZÕES DE AGRAVO EM EXECUÇÃO` (caixa alta; ou "razões do agravado") + fundamento (`forte no art. 588, caput, do Código de Processo Penal (CPP)`) + tempestividade (`no prazo legal de 2 (dois) dias`).

**Pedido de manutenção (art. 589 — pedindo a SUSTENTAÇÃO):** `Requer seja o presente agravo processado com a manutenção da decisão recorrida, com fundamento no art. 589, caput, do CPP, encaminhando-se os autos com as anexas contrarrazões à superior instância.`

> O art. 589 permite ao juiz reformar (retratação — o que o agravante/MP quer) ou **sustentar** seu despacho. Como agravados, queremos que ele **mantenha/sustente** a decisão.

**Fechamento** padrão.

### SEGUNDA PARTE — Contrarrazões (nova folha)

Cabeçalho: `Contrarrazões de Agravo em Execução`.
- `Agravante: o Ministério Público` / `Agravado: [nome do cliente]`.

Endereçamento: `Egrégio Tribunal de Justiça — Colenda Câmara Criminal` (estadual) ou `Egrégio Tribunal Regional Federal — Colenda Turma Criminal` (federal).

**I — Dos Fatos:** resumo da situação fática.

**II — Do Direito:**
- **Da preliminar de intempestividade** — **apenas se** o MP agravou fora do prazo (difícil; **não inventar**).
- **Do mérito:** **rebater TODOS os argumentos do agravante (MP)**, ponto a ponto, **sem inovar**. Queremos a **manutenção** da decisão (ex.: manutenção do deferimento da progressão de regime).

**III — Dos Pedidos:**
```
Ante o exposto, requer:
a) o não conhecimento do recurso, pois interposto fora do prazo legal (se for o caso);
b) o improvimento (não provimento) do recurso, com a consequente manutenção da
   decisão recorrida.
```

**Fechamento** padrão.

## Checklist final

- [ ] Objetivo = **manutenção da decisão do juiz da execução**?
- [ ] **Sem interposição** — petição de juntada (verbo **APRESENTAR**)?
- [ ] Peça **bipartida** (petição à VEC + contrarrazões ao tribunal)?
- [ ] Fundamento: **art. 588, caput, CPP** (2 dias — rito do RESE)?
- [ ] Pedido de manutenção/sustentação (art. 589) na petição de juntada?
- [ ] Agravante = MP; Agravado = cliente?
- [ ] No mérito, **rebater todos os argumentos** do agravante, **sem inovar**?
- [ ] Pedido de **não conhecimento (se for o caso) + improvimento + manutenção**?

## Lembretes finais

- **Objetivo: manter a decisão da execução favorável ao cliente.**
- **Segue o rito do RESE** (como o próprio agravo em execução).
- **Sem interposição** — faz-se **petição de juntada**. **Verbo: apresentar.**
- **Peça bipartida** — petição de juntada (VEC) + contrarrazões (tribunal).
- **Fundamento: art. 588, caput, CPP — 2 dias.**
- **Na petição de juntada, pede-se a manutenção/sustentação (art. 589).**
- **Exceção do efeito suspensivo: art. 179 LEP.**
- **Pedido: não conhecimento (se intempestivo) + improvimento + manutenção.**

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
