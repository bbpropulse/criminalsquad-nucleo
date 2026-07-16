---
name: representacao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de OFERECIMENTO DE REPRESENTAÇÃO
  no processo penal brasileiro — peça da fase de investigação que provoca a autoridade nos crimes de
  AÇÃO PENAL PÚBLICA CONDICIONADA à representação do ofendido. Gatilhos: representação, oferecer
  representação, representação do ofendido, ação penal pública condicionada, art. 5º §4º CPP, art.
  39 CPP, IP/TC/PIC mediante…. Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  aliases: [oferecimento-de-representacao]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-representacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["representacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Oferecimento de Representação

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

Esta skill orienta a construção da peça criminal de **Oferecimento de Representação**, conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais". É peça **básica e simples** da **fase de investigação** (persecução penal extrajudicial).

## Quando usar — os três cenários de provocação da investigação

Fixe o quadro completo (o que distingue a representação das peças vizinhas):

| Natureza da ação penal | Peça (verbo) | Para instaurar | Fundamento |
|---|---|---|---|
| Pública **incondicionada** | **Requerimento** (apresentar) | IP/TC | art. 5º, II, CPP |
| Pública **incondicionada** | **Requerimento** (apresentar) | PIC | art. 3º, caput, *in fine*, Res. CNMP 181/2017 |
| **Privada** | **Requerimento** (apresentar) | IP/TC | art. 5º, §5º, CPP (**não cabe PIC**) |
| Pública **condicionada à representação** | **REPRESENTAÇÃO** (oferecer) | IP/TC | **art. 5º, §4º, CPP** |
| Pública **condicionada à representação** | **REPRESENTAÇÃO** (oferecer) | PIC | **art. 3º, caput, *in fine*, Res. CNMP 181/2017** |

> Nos crimes de ação pública **condicionada à representação**, a palavra deixa de ser "requerimento": é **representação**. O **IP** não pode, sem ela, ser iniciado (art. 5º, §4º, CPP); o mesmo vale para o **TC** e para o **PIC**.

> **PIC só em ação pública** (a Res. CNMP 181 trata de "infração penal de iniciativa pública"). Em ação privada, jamais PIC.

> **TC/TCO** (Termo Circunstanciado de Ocorrência) no lugar do IP quando a infração for de **menor potencial ofensivo** (contravenções + crimes com pena máxima até 2 anos — art. 61 da Lei 9.099; instauração no art. 69).

### Exemplos de crimes de ação pública condicionada à representação

- **Ameaça** — art. 147, §2º, CP (*"somente se procede mediante representação"*). **Exceção:** se for contra a mulher por razões da condição do sexo feminino (Lei Maria da Penha, menosprezo/discriminação), a ação é pública **incondicionada**.
- **Perseguição (stalking)** — art. 147-A, §3º, CP (*"somente se procede mediante representação"*).

## Endereçamento

- **IP/TC:** ao **Delegado de Polícia** (estadual) ou **Delegado Federal** (federal).
- **PIC:** ao **Promotor de Justiça** (estadual) ou **Procurador da República** (federal).
- Sempre `Excelentíssimo Senhor Doutor [Delegado de Polícia / Promotor de Justiça] de [...]`.

> **Tratamento do delegado: "Excelentíssimo".** Não é "Ilustríssimo/Senhoria". A Lei 12.830/2013, art. 3º, garante ao delegado o **mesmo tratamento protocolar** dos magistrados, membros do MP e da Defensoria. **Nunca** use "Ao Juízo" para delegado ou MP — essa fórmula (art. 319, I, CPC) é só para magistrado.

## Princípio orientador — TEMPESTIVIDADE (prazo decadencial)

A representação tem **prazo decadencial de 6 meses, contado do dia do conhecimento da autoria** (art. 38 CPP / art. 103 CP). É contagem de **prazo de direito material** (inclui o dia do começo).

## Estrutura da peça (petição única)

```
1. Endereçamento (delegado ou MP)
2. Preâmbulo: nome + qualificação + procuração + fundamento + verbo OFERECER + representado
3. I — Dos Fatos
4. II — Do Direito (2.1 Da Adequação Típica + 2.2 Da Representação do Ofendido)
5. III — Dos Pedidos
6. Fechamento
7. Rol de testemunhas (se houver) — após a assinatura
```

### Preâmbulo

Nome + **qualificação completa** (art. 319, II, CPC por analogia: nome, prenome, estado civil, união estável, profissão, CPF, e-mail, domicílio, residência, WhatsApp) — **qualificar** (é a primeira manifestação) + `por sua advogada, firma, conforme procuração em anexo, vem perante Vossa Excelência, com fundamento no [art. 5º, §4º, do Código de Processo Penal (CPP) / art. 3º da Res. CNMP 181/2017 / art. 147, §2º, do CP], oferecer representação em face de [nome e qualificação do representado], pelas seguintes razões de fato e de direito:`

> **Verbo: OFERECER.** O réu aqui se chama **representado** (não "requerido", não "querelado").

### I — Dos Fatos

Resumo da situação fática. Ex.: o cliente foi ameaçado por [fulano], no dia [...], consistindo a ameaça em [...].

### II — Do Direito

- **2.1 — Da Adequação Típica:** falar do crime e de **todas as suas circunstâncias** (inclusive as que aumentam a pena); fazer a **subsunção** do fato (item I) à norma.
- **2.2 — Da Representação do Ofendido:** afirmar que o crime **exige** a representação e que ela é oferecida **tempestivamente** (6 meses do conhecimento da autoria, art. 38 CPP / art. 103 CP).

### III — Dos Pedidos

`Ante o exposto, requer a Vossa Excelência:`
- a instauração de **IP / TC(TCO) / PIC** (conforme o caso);
- a realização de **perícia** (se for o caso);
- a **juntada de documentos** (se houver);
- a **inquirição das testemunhas** abaixo arroladas (se houver);
- o **interrogatório e o indiciamento do representado**.

> "Se for o caso" / "se houver" — não inventar diligências, documentos ou testemunhas.

### Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### Rol de testemunhas

Se houver, **após o fechamento** (depois da assinatura): nome e qualificação; nome e qualificação; etc.

## Checklist final

- [ ] Cenário correto = **ação pública condicionada à representação** (não incondicionada, não privada)?
- [ ] Verbo **OFERECER**; réu chamado **representado**?
- [ ] Endereçamento ao delegado/MP com **"Excelentíssimo"** (Lei 12.830/2013)?
- [ ] Fundamento correto (art. 5º, §4º, CPP para IP/TC; art. 3º Res. CNMP 181 para PIC)?
- [ ] Direito com **Adequação Típica + Representação do Ofendido (tempestividade 6 meses)**?
- [ ] Pedidos: instauração + perícia/documentos/testemunhas (se for o caso) + interrogatório e indiciamento do representado?
- [ ] Rol de testemunhas (se houver) após o fechamento?

## Lembretes finais

- **Fase de investigação; verbo: oferecer; réu = representado.**
- **Só em ação pública condicionada à representação** (ameaça 147 §2º; stalking 147-A §3º).
- **"Excelentíssimo" para o delegado** (Lei 12.830/2013) — nunca "Ao Juízo".
- **PIC só em ação pública**; em IMPO, TC/TCO no lugar do IP.
- **Tempestividade: 6 meses do conhecimento da autoria** (art. 38 CPP / art. 103 CP), prazo decadencial.
- **Não confundir:** requerimento (incondicionada/privada) × representação (condicionada) × queixa (privada, ao juiz).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
