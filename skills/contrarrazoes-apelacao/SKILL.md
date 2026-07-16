---
name: contrarrazoes-apelacao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de CONTRARRAZÕES DE APELAÇÃO no
  processo penal brasileiro — resposta do recorrido (apelado) que visa a MANUTENÇÃO da decisão
  recorrida favorável ao cliente. Gatilhos: contrarrazões de apelação, razões do apelado, resposta
  ao recurso de apelação, art. 600 caput CPP, art. 82 §2º da Lei 9.099, petição de juntada…. Não use
  para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  aliases: [contrarrazoes-de-apelacao]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-contrarrazoes-apelacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["contrarrazoes-apelacao", "contrarrazoes apelacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Contrarrazões de Apelação

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

Esta skill orienta a construção da peça criminal de **Contrarrazões de Apelação** (também "razões do apelado/recorrido"), conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Objetivo

**MANUTENÇÃO da decisão recorrida.** A decisão foi favorável ao cliente; quem quer a reforma é o recorrente (apelante, em regra o MP). Como **apelados (recorridos)**, queremos manter a decisão.

## Fundamento e prazo

| Diploma | Fundamento | Prazo |
|---|---|---|
| **CPP** | **art. 600, caput, CPP** | **8 dias** |
| **JECRIM** | **art. 82, §2º, Lei 9.099** | **10 dias** |

> CPP, art. 600, *caput*: *"Assinado o termo de apelação, o apelante e, depois dele, o apelado terão um prazo de 8 (oito) dias, cada um, para oferecer razões."* (O trecho "salvo nos processos de contravenção, em que o prazo será de 3 dias" está **tacitamente revogado** pelo art. 82 da 9.099 — contravenção é IMPO, vai ao JECRIM.) JECRIM, art. 82, §2º: *"O recorrido será intimado para oferecer resposta escrita no prazo de 10 dias."*

## Princípio orientador — NÃO há interposição

**Não se faz interposição** — o recurso **já foi interposto** pela outra parte. Faz-se uma **petição de juntada** (verbo **APRESENTAR**, não "interpor"). Peça **bipartida**.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Petição de juntada**, dirigida ao **juiz** que prolatou a decisão; (2) **contrarrazões**, endereçadas ao **tribunal**.

### PRIMEIRA PARTE — Petição de juntada

**Endereçamento:** `Ao Juízo da [...]` (ao juiz que prolatou a decisão).

**Preâmbulo:** nome do cliente + `já qualificado nos autos da ação penal que lhe move o Ministério Público` + `por intermédio do(a) advogado(a) que ao final subscreve (procuração [...])` + `vem, respeitosamente, à presença de Vossa Excelência,` + verbo **APRESENTAR** + `CONTRARRAZÕES DE APELAÇÃO` (caixa alta; ou "razões do apelado") + fundamento (`forte no art. 600, caput, do Código de Processo Penal (CPP)`, ou `art. 82, §2º, da Lei 9.099/95`) + tempestividade (`no prazo legal de 8 (oito) dias` no CPP; `10 (dez) dias` no JECRIM).

`Requer seja o presente recurso processado com as anexas contrarrazões, remetendo-se os autos à superior instância.`

**Fechamento** padrão.

### SEGUNDA PARTE — Contrarrazões (nova folha)

Cabeçalho: `Contrarrazões de Apelação`.
- `Apelante: o Ministério Público` (ou querelante) / `Apelado: [nome do cliente]`.

Endereçamento: `Egrégio Tribunal de Justiça — Colenda Câmara Criminal` (estadual); `Egrégio Tribunal Regional Federal — Colenda Turma Criminal` (federal); `Egrégia Turma Recursal — Ilustres Julgadores` (JECRIM).

**I — Dos Fatos:** resumo da situação fática.

**II — Do Direito:**
- **Da preliminar de intempestividade** — **apenas se** o apelante interpôs fora do prazo (difícil tratando-se do MP, sempre zeloso; **não inventar**).
- **Do mérito:** **rebater TODOS os argumentos do apelante**, ponto a ponto, **sem inovar** com teses próprias. Ex.: se o MP sustentou que o fato é típico, que é crime hediondo e que cabe regime fechado, contra-argumenta-se que não é típico, não é hediondo e não cabe regime fechado. Queremos a **manutenção** da decisão.

**III — Dos Pedidos:**
```
Ante o exposto, requer:
a) o não conhecimento do apelo, pois interposto fora do prazo legal (se for o caso);
b) no mérito, o improvimento (não provimento) do recurso, com a consequente
   manutenção da decisão recorrida.
```

**Fechamento** padrão.

> **Apelante recorre → conhecimento + provimento. Apelado responde → não conhecimento (se for o caso) + improvimento.**

## Checklist final

- [ ] Objetivo = **manutenção da decisão recorrida**?
- [ ] **Sem interposição** — petição de juntada (verbo **APRESENTAR**)?
- [ ] Peça **bipartida** (petição ao juiz + contrarrazões ao tribunal)?
- [ ] Fundamento/prazo corretos (600, caput, CPP — 8 dias; 82, §2º, 9.099 — 10 dias)?
- [ ] Apelante = MP/querelante; Apelado = cliente?
- [ ] No mérito, **rebater todos os argumentos** do apelante, **sem inovar**?
- [ ] Pedido de **não conhecimento (se for o caso) + improvimento + manutenção**?

## Lembretes finais

- **Objetivo: manter a decisão favorável ao cliente.**
- **Sem interposição** — o recurso já foi interposto pela outra parte; faz-se **petição de juntada**. **Verbo: apresentar.**
- **Peça bipartida** — petição de juntada (juiz) + contrarrazões (tribunal).
- **Fundamento/prazo: art. 600, caput, CPP — 8 dias; art. 82, §2º, da 9.099 — 10 dias.**
- **No mérito: rebater todos os argumentos do apelante, sem inovar teses.**
- **Pedido: não conhecimento (se intempestivo) + improvimento + manutenção.**

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
