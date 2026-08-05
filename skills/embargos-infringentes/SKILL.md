---
name: embargos-infringentes
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de EMBARGOS INFRINGENTES E DE
  NULIDADE no processo penal brasileiro — recurso privativo da defesa que visa reformar decisão de
  tribunal NÃO UNÂNIME (2x1) e desfavorável ao réu. Gatilhos: embargos infringentes, embargos de
  nulidade, embargos infringentes e de nulidade, opor embargos, art. 609 parágrafo único CPP,
  decisão não unânime…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  aliases: [embargos-infringentes-e-de-nulidade]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-embargos-infringentes"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["embargos-infringentes", "embargos infringentes"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Embargos Infringentes e de Nulidade

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

Esta skill orienta a construção da peça criminal de **Embargos Infringentes e de Nulidade**, conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Noção e cabimento

Visam **reformar decisão NÃO UNÂNIME proferida por tribunal e DESFAVORÁVEL ao réu**.

Três requisitos cumulativos (mapa mental):
1. **Decisão proferida por tribunal** — no julgamento de uma **apelação**, de um **RESE** ou de um **agravo em execução**.
2. **Decisão não unânime** — placar de **2x1** (se 3x0, é unânime e **não cabem** os embargos).
3. **Decisão contrária aos interesses do réu** — a acusação levou 2 votos, a defesa 1 (a defesa "perdeu, mas levou um voto").

> **Recursos PRIVATIVOS DA DEFESA.** Só podem ser opostos pela defesa.

## Diferença entre as duas espécies

- **Embargos Infringentes** — a divergência (o voto vencido) diz respeito ao **mérito**.
- **Embargos de Nulidade** — a divergência diz respeito a alguma **nulidade processual**.

## Fundamento e prazo

- **Art. 609, parágrafo único, CPP**: *"Quando não for unânime a decisão de segunda instância desfavorável ao réu, admitem-se embargos infringentes e de nulidade, que poderão ser opostos dentro de 10 (dez) dias a contar da publicação do acórdão [...]."*
- **Prazo: 10 dias.** **Verbo: OPOR** (regra dos embargos).

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Interposição**, endereçada ao **Relator do acórdão impugnado**; (2) **razões**, endereçadas ao **respectivo órgão colegiado**.

### PRIMEIRA PARTE — Interposição

**Endereçamento:** `Ao Excelentíssimo Senhor Doutor Desembargador Relator da [N]ª Câmara Criminal do Egrégio Tribunal de Justiça do Estado de [...]`. Na Justiça Federal: **Turma Criminal** e **Tribunal Regional Federal**.

**Preâmbulo:** nome do cliente + `já qualificado` + `por intermédio do(a) advogado(a) que ao final subscreve (procuração anexada no evento/folha [...])` + `vem, respeitosamente, à presença de Vossa Excelência,` + **tempestividade** (`no prazo legal de 10 (dez) dias`) + verbo **OPOR** + `EMBARGOS INFRINGENTES` (ou `EMBARGOS DE NULIDADE`, conforme a divergência) + fundamento (`forte no art. 609, parágrafo único, do CPP`).

`Requer seja o presente recurso recebido e processado com as anexas razões.`

**Fechamento** padrão.

### SEGUNDA PARTE — Razões (nova folha)

Cabeçalho: `Razões de Recurso de Embargos Infringentes` (ou `de Embargos de Nulidade`).
- `Embargante: [nome do cliente]` / `Embargado: o Ministério Público` (ou querelante).

Endereçamento: `Egrégio Tribunal de Justiça — Colenda Câmara Criminal` (estadual) ou `Egrégio Tribunal Regional Federal — Colenda Turma Criminal` (federal).

**I — Dos Fatos:** resumo da situação fática.

**II — Do Direito:** o objetivo é **fazer prevalecer o voto do desembargador vencido** — reforçam-se os argumentos do voto vencido (aquele que votou de acordo com as teses sustentadas pela defesa durante o processo).

> Exemplo: **Do afastamento da majorante do emprego de arma de fogo** — `Conforme bem fundamentado no voto vencido, o acusado, durante a prática do roubo, valeu-se de réplica de arma de fogo (arma de brinquedo), razão pela qual a pena não poderia ser majorada por tal circunstância, sob pena de analogia in malam partem, vedada em Direito Penal.`

**III — Dos Pedidos:** `Diante do exposto, requer seja conhecido e provido o presente recurso, com a reforma do acórdão recorrido, nos termos do voto vencido, a fim de [consequência concreta — ex.: afastar o aumento de pena decorrente do emprego de arma de fogo].`

**Fechamento** padrão.

## Checklist final

- [ ] Decisão de tribunal, **não unânime (2x1)**, **contra o réu**?
- [ ] Espécie correta (infringentes = mérito; nulidade = nulidade processual)?
- [ ] Peça **bipartida** (interposição ao **Relator** + razões ao **órgão colegiado**)?
- [ ] Verbo **OPOR**; nome em caixa alta; **"forte no"** no fundamento?
- [ ] Fundamento: **art. 609, parágrafo único, CPP**; prazo **10 dias**?
- [ ] No Direito, busca-se **fazer prevalecer o voto vencido**?
- [ ] Pedido de conhecimento + provimento, com reforma **nos termos do voto vencido**?

## Lembretes finais

- **Decisão de tribunal não unânime (2x1) e desfavorável ao réu** — em apelação, RESE ou agravo em execução.
- **Recursos PRIVATIVOS DA DEFESA.**
- **Infringentes = divergência de mérito; Nulidade = divergência sobre nulidade processual.**
- **Peça bipartida** — interposição ao **Relator do acórdão impugnado** + razões ao **órgão colegiado**. **Verbo: opor.**
- **Fundamento: art. 609, p.ú., CPP; prazo: 10 dias.**
- **Objetivo: fazer prevalecer o voto vencido.**
- **Não confundir com embargos de declaração** (382/619 CPP — vício de integração).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
