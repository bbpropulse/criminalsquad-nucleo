---
name: embargos-de-declaracao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de EMBARGOS DE DECLARAÇÃO
  (embargos declaratórios, EDs) no processo penal brasileiro — recurso que visa a INTEGRAÇÃO (não a
  reforma) de decisões judiciais com vício de ambiguidade, obscuridade, contradição ou omissão.
  Gatilhos: embargos de declaração, embargos declaratórios, EDs, opor embargos, art. 382 CPP
  (sentença), art. 619 CPP (acórdão), art. 83 da Lei… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-embargos-de-declaracao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["embargos-de-declaracao", "embargos declaracao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Embargos de Declaração (EDs)

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

Esta skill orienta a construção da peça criminal de **Embargos de Declaração** (embargos declaratórios, EDs), conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Noção e finalidade

Os EDs são **recurso facultado às partes visando a INTEGRAÇÃO — e não a substituição/reforma — de decisões judiciais**, sejam estas acórdãos, sentenças ou decisões interlocutórias.

> Se quero a **reforma** de uma sentença, **apelo**. Com os EDs quero **integração**: se a decisão é incompreensível, quero esclarecimento; se está incompleta, quero complementação.

## Vícios ensejadores

| Diploma | Vícios | Quantidade |
|---|---|---|
| **CPP** (arts. 382 e 619) | **Ambiguidade**, **obscuridade**, **contradição**, **omissão** | **4 vícios** |
| **JECRIM** (art. 83, Lei 9.099) | **Obscuridade**, **contradição**, **omissão** | **3 vícios** (não traz a ambiguidade) |

Significado:
- **Ambiguidade** — a decisão permite duas ou mais interpretações.
- **Obscuridade** — não é clara; o pensamento do julgador é incompreensível.
- **Contradição** — encerra aspectos conflitantes.
- **Omissão** — falta de pronunciamento sobre ponto relevante (ex.: condenou mas não fixou o regime; não disse se cabe substituição por PRD).

## Fundamento legal e prazo

| Situação | Fundamento | Prazo |
|---|---|---|
| Em face de **sentença** (CPP) | **art. 382 CPP** | **2 dias** |
| Em face de **acórdão** (CPP) | **art. 619 CPP** | **2 dias** |
| **JECRIM** (sentença ou acórdão) | **art. 83, caput, Lei 9.099** (prazo no §1º) | **5 dias** |

## Princípio orientador

**PETIÇÃO ÚNICA** — os EDs **não** são peça bipartida. Não há divisão entre interposição e razões (diferente de RESE, apelação, agravo). Apresenta-se tudo de uma vez, **na forma dos memoriais**.

**Verbo: OPOR** (opõem-se embargos de declaração). *Lembrete:* só os **embargos** (declaratórios, infringentes, de nulidade) usam "opor"; os demais recursos usam "interpor".

## Estrutura da peça (petição única)

```
1. Endereçamento (ao juízo, em face de sentença; ao Relator, em face de acórdão)
2. Preâmbulo (nome + já qualificado + procuração + tempestividade + verbo OPOR + fundamento + "pelas razões a seguir")
3. I — Dos Fatos
4. II — Do Direito (os vícios — teses no mesmo sentido das hipóteses de cabimento)
5. III — Dos Pedidos (conhecimento + provimento, para corrigir o vício)
6. Fechamento
```

### 1. Endereçamento

- **Em face de SENTENÇA (1ª instância):** `Ao Juízo da [N]ª Vara Criminal da Comarca de [...]` ou fórmula tradicional.
- **Em face de ACÓRDÃO (2ª/3ª instância):** `Ao Excelentíssimo Senhor Doutor Desembargador Relator da [N]ª Câmara Criminal do Egrégio Tribunal de Justiça do Estado de [...]`. Na Justiça Federal: **Turma Criminal** e **Tribunal Regional Federal**. No STJ/STF: **Ministro Relator**.

### 2. Preâmbulo

Nome do cliente + `já qualificado` + `por intermédio do(a) advogado(a) que ao final subscreve (procuração [...])` + `vem, respeitosamente, à presença de Vossa Excelência,` + **tempestividade** (`no prazo legal de 2 (dois) dias` no CPP; `no prazo legal de 5 (cinco) dias, conforme art. 83, §1º, da Lei 9.099/95` no JECRIM) + verbo **OPOR** + `EMBARGOS DE DECLARAÇÃO` (caixa alta) + fundamento (use **"forte no"**: `forte no art. 382 do CPP` para sentença; `art. 619 do CPP` para acórdão; `art. 83, caput, da Lei 9.099/95` no JECRIM) + `pelas razões de fato e de direito a seguir expostas`.

### 3. I — Dos Fatos

Resumo da situação fática (pode encerrar com "é o breve relato").

### 4. II — Do Direito

> **Dica central:** *"As teses aventadas nos EDs são no mesmo sentido das hipóteses de seu cabimento."* No item do Direito, aponta-se o **vício**.

Estrutura conforme o vício (CPP: obscuridade e/ou ambiguidade e/ou contradição e/ou omissão; JECRIM: sem ambiguidade). Exemplo com omissão:

> **Da omissão verificada na r. decisão** — `Conforme sentença prolatada às folhas [...], o digníssimo juízo condenou o réu, mas não fixou o regime inicial de cumprimento de pena. Na hipótese, cabível o regime inicial aberto, pois presentes os requisitos do art. 33, §2º, "c", do Código Penal.`

### 5. III — Dos Pedidos

`Diante do exposto, requer sejam conhecidos e providos os presentes Embargos de Declaração, a fim de que seja corrigida a referida [omissão/ambiguidade/obscuridade/contradição], [consequência concreta — ex.: sendo fixado o regime inicial aberto para o cumprimento da pena].`

Sempre **conhecimento + provimento**.

### 6. Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

## Checklist final

- [ ] **Petição única** (sem divisão interposição/razões)?
- [ ] Verbo **OPOR**; nome em caixa alta; **"forte no"** no fundamento?
- [ ] Vício corretamente identificado (4 no CPP × 3 no JECRIM)?
- [ ] Endereçamento conforme a decisão (juízo, em face de sentença; Relator, em face de acórdão)?
- [ ] Fundamento e prazo corretos (382/619 CPP, 2 dias; 83 da 9.099, 5 dias)?
- [ ] No Direito, a tese aponta o **vício** (mesmo sentido do cabimento)?
- [ ] Pedido de **conhecimento + provimento** para **integrar** (não reformar)?

## Lembretes finais

- **Finalidade: integração, não reforma/substituição.**
- **Petição única** — como os memoriais; sem interposição/razões separadas.
- **Verbo: opor** (regra dos embargos).
- **Vícios: 4 no CPP** (ambiguidade, obscuridade, contradição, omissão); **3 no JECRIM** (sem ambiguidade).
- **Fundamento/prazo: 382 (sentença) e 619 (acórdão) CPP — 2 dias; 83 da 9.099 — 5 dias.**
- **As teses do Direito = as hipóteses de cabimento** (apontar o vício).
- **Não confundir com embargos infringentes e de nulidade** (art. 609, p.ú., CPP — decisão não unânime).
- **EDs com fins de prequestionamento** (preparar REsp/RE contra acórdão omisso): a camada específica está na skill `embargos-prequestionamento` — esta skill fornece a forma da peça; aquela, a técnica prequestionadora.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
