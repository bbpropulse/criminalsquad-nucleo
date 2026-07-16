---
name: resposta-preliminar
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de RESPOSTA PRELIMINAR (também
  Defesa Preliminar ou Defesa Prévia) no processo penal brasileiro — defesa apresentada ANTES do
  recebimento da denúncia ou queixa, em procedimentos especiais. Gatilhos: resposta preliminar,
  defesa preliminar, defesa prévia, antes do recebimento da denúncia, crimes de responsabilidade de
  funcionário público (art. 514…. Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-resposta-preliminar"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["resposta-preliminar", "resposta preliminar"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Resposta Preliminar (Defesa Preliminar / Defesa Prévia)

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

Esta skill orienta a construção da **Resposta Preliminar** — também chamada **Defesa Preliminar** ou **Defesa Prévia** (sinônimos, mesma peça) — conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Distinção essencial — RA × Resposta Preliminar

**Não confundir** com a **Resposta à Acusação (RA)**:

| | Resposta à Acusação (RA) | **Resposta Preliminar** |
|---|---|---|
| Fundamento | arts. 396 e 396-A CPP | art. 514 CPP / art. 81 da 9.099 / art. 55 da Lei de Drogas |
| Momento | **DEPOIS** do recebimento da denúncia/queixa | **ANTES** do recebimento da denúncia/queixa |
| Procedimento | comum ordinário e sumário | especiais (funcionário público, JECRIM, Lei de Drogas) |

> A marca da Resposta Preliminar é ser **anterior ao recebimento** — por isso o réu é, em regra, **notificado** (não citado). O recebimento vem só depois.

## Os três procedimentos principais

1. **Crimes de responsabilidade de funcionário público** (crimes **funcionais** — peculato, concussão, corrupção passiva etc.; não basta o autor ser servidor, o **crime** tem de ser funcional). **Art. 514 CPP** — notificação para responder por escrito em **15 dias**; o juiz só recebe a denúncia/queixa no art. 517, seguindo depois o rito ordinário.
2. **JECRIM** (infração de menor potencial ofensivo — art. 61 da 9.099). **Art. 81 da Lei 9.099** — *"aberta a audiência, será dada a palavra ao defensor para responder à acusação, após o que o juiz receberá ou não a denúncia ou queixa"*. Embora a lei diga "responder à acusação", é **verdadeira resposta preliminar** (anterior ao recebimento) e, em regra, **oral** em audiência.
3. **Lei de Drogas** (Lei 11.343/2006). **Art. 55** — oferecida a denúncia, o juiz notifica o acusado para **defesa prévia** por escrito em **10 dias**; pode arguir preliminares, oferecer documentos, especificar provas e **arrolar até 5 testemunhas**; o juiz só recebe a denúncia no art. 56. A própria lei usa as três nomenclaturas (defesa prévia, resposta, defesa preliminar).

## Estrutura da peça (petição única)

```
1. Endereçamento (ao juízo)
2. Preâmbulo: nome + já qualificado + fundamento (muda conforme o procedimento) + verbo APRESENTAR + tempestividade
3. I — Dos Fatos
4. II — Do Direito (2.1 Das Preliminares + 2.2 Do Mérito)
5. III — Dos Pedidos
6. Fechamento
7. Rol de testemunhas — após a assinatura
```

### Endereçamento e preâmbulo

`Ao Juízo da [...]` ou `Excelentíssimo Senhor Doutor Juiz de Direito da [...]`. No preâmbulo, nome do cliente + `já qualificado nos autos` (ele já foi qualificado quando denunciado/querelado).

**Fundamento legal** (muda conforme o procedimento): art. 514 CPP (funcionário público) / art. 81 da Lei 9.099 (JECRIM) / **art. 55 da Lei 11.343/2006** (drogas).

**Verbo: APRESENTAR** (como na RA) + `Resposta Preliminar` (ou Defesa Prévia / Defesa Preliminar). O verbo "oferecer" também é aceitável; o professor reserva "oferecer" para a queixa e "apresentar" para as respostas.

**Tempestividade:** `no prazo legal de 15 (quinze) dias` (funcionário público) ou `10 (dez) dias` (drogas). No JECRIM não há prazo em dias — é **imediato, em audiência**, logo após dada a palavra ao defensor.

`Pelas razões de fato e de direito a seguir expostas:`

### I — Dos Fatos

Resumo da situação fática: o MP denunciou (ou o querelante ofereceu queixa) imputando ao cliente [...], mas os fatos não ocorreram como descrito na inicial.

### II — Do Direito

- **2.1 — Das Preliminares:** pode-se invocar **todas** as preliminares possíveis — nulidade, extinção da punibilidade (inclusive **prescrição**), incompetência absoluta do juízo, **falta de instituto despenalizador** (macete **TAS**: Transação penal, ANPP, Suspensão condicional do processo), **rejeição tardia** (tese admitida por decisões do STJ). Aqui a prescrição é **preliminar** (diferente da RA, onde a extinção da punibilidade é mérito/absolvição sumária, art. 397, IV).
- **2.2 — Do Mérito:** em regra, teses ligadas à **teoria do crime** — exclusão da **atipicidade** (ex.: princípio da insignificância), da **ilicitude** (ex.: estado de necessidade, art. 24 CP), da **culpabilidade** (ex.: coação moral irresistível).

### III — Dos Pedidos

`Ante o exposto, requer:` o **recebimento** da peça; o **acolhimento da preliminar** (se houver); no mérito, a **absolvição** (com o fundamento da tese — ex.: art. 24 CP); a **juntada de documentos** e a **produção de provas**; a **inquirição das testemunhas** abaixo arroladas.

### Fechamento e rol de testemunhas

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.` — e, **após a assinatura**, o rol de testemunhas (na Lei de Drogas, **no máximo 5**).

## Checklist final

- [ ] É mesmo caso de **Resposta Preliminar** (antes do recebimento) e não de RA?
- [ ] Procedimento identificado (funcionário público / JECRIM / drogas) e **fundamento** correto?
- [ ] No funcional, o crime é **funcional** (não basta o autor ser servidor)?
- [ ] Preâmbulo com `já qualificado`; verbo **APRESENTAR**?
- [ ] **Tempestividade** certa (15 dias funcional; 10 dias drogas; oral/imediata no JECRIM)?
- [ ] Direito com **Preliminares + Mérito (teoria do crime)**? Prescrição como **preliminar**?
- [ ] Pedidos: recebimento + preliminar + absolvição + provas + testemunhas?
- [ ] Rol de testemunhas após a assinatura (drogas: **máx. 5**)?

## Lembretes finais

- **Defesa ANTES do recebimento da denúncia/queixa** — eis a diferença para a RA.
- **Sinônimos:** Resposta Preliminar = Defesa Preliminar = Defesa Prévia.
- **Procedimentos:** funcionário público (514 CPP, 15 dias), JECRIM (81 da 9.099, oral em audiência), Lei de Drogas (55 da 11.343, 10 dias, até 5 testemunhas).
- **Verbo: apresentar; cliente "já qualificado".**
- **Prescrição/extinção da punibilidade aqui é PRELIMINAR** (na RA seria mérito — absolvição sumária, 397, IV).
- **Rol de testemunhas após a assinatura** (drogas: máximo 5).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
