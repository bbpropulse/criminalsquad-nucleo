---
name: requerimento-investigacao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de REQUERIMENTO PARA INSTAURAÇÃO
  DE INVESTIGAÇÃO no processo penal brasileiro — peça da fase de investigação que provoca a
  autoridade a instaurar IP, TC ou PIC nos crimes de AÇÃO PENAL PÚBLICA INCONDICIONADA ou de AÇÃO
  PENAL PRIVADA. Gatilhos: requerimento de inquérito policial, instaurar IP, termo circunstanciado
  (TC/TCO), procedimento investigatório criminal… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  aliases: [requerimento-para-instauracao-de-investigacao]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-requerimento-investigacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["requerimento-investigacao", "requerimento investigacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Requerimento para Instauração de Investigação

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

Esta skill orienta a construção do **Requerimento para Instauração de Investigação** (IP, TC ou PIC), conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais". É peça **básica** da **fase de investigação** (persecução penal extrajudicial), em que se advoga para a **vítima**.

## Quando usar — natureza da ação e fundamento

| Natureza da ação penal | Instaurar | Fundamento |
|---|---|---|
| Pública **incondicionada** | IP / TC | **art. 5º, II, CPP** (requerimento do ofendido ou de quem o represente) |
| Pública **incondicionada** | PIC | **art. 3º, caput, *in fine*, Res. CNMP 181/2017** |
| **Privada** | IP / TC | **art. 5º, §5º, CPP** (requerimento de quem tenha qualidade para intentá-la) |

> **Esta peça serve à ação pública INCONDICIONADA e à ação PRIVADA.** Se a ação for pública **condicionada à representação**, a peça é a **Representação** (art. 5º, §4º, CPP), não o requerimento.

> **PIC só em ação pública** (Res. CNMP 181 trata de "infração penal de iniciativa pública"). Em ação privada, jamais PIC — só IP/TC, art. 5º, §5º.

> **TC/TCO** no lugar do IP quando a infração for de **menor potencial ofensivo** (contravenções + crimes com pena máxima até 2 anos — art. 61 da Lei 9.099; instauração no art. 69).

### Caso recorrente — crimes contra a honra (em geral, ação privada)

Calúnia (138), difamação (139), injúria (140) — regra: *"somente se procede mediante queixa"* (**art. 145, caput, CP**), ou seja, **ação privada** (requerimento com base no art. 5º, §5º). **Exceções** (art. 145, p.ú.):
- **Injúria real com violência** que resulta lesão corporal (140, §2º) → pública **incondicionada**.
- **Requisição do Ministro da Justiça** — crime contra a honra de Presidente da República ou chefe de governo estrangeiro (141, I).
- **Representação do ofendido** — injúria preconceituosa/qualificada (140, §3º) e crime contra funcionário público em razão das funções; neste último, a **Súmula 714 STF** dá legitimidade **concorrente** (representação **ou** queixa).
- **Injúria majorada por rede social:** art. 141, §2º, CP — pena aplicada **em triplo**.

> Não confundir injúria preconceituosa (140, §3º, CP) com **injúria racial/crime de racismo** (Lei 7.716/89, ação pública **incondicionada**).

## Endereçamento

- **IP/TC:** ao **Delegado de Polícia** (estadual) ou **Delegado Federal** (federal).
- **PIC:** ao **Promotor de Justiça** (estadual) ou **Procurador da República** (federal).
- Sempre `Excelentíssimo Senhor Doutor [...]`.

> **Tratamento do delegado: "Excelentíssimo"** (Lei 12.830/2013, art. 3º — mesmo tratamento dos magistrados). **Nunca** "Ao Juízo" para delegado/MP.

## Estrutura da peça (petição única)

```
1. Endereçamento (delegado ou MP)
2. Preâmbulo: nome + qualificação + procuração + fundamento + verbo APRESENTAR + requerido
3. I — Dos Fatos
4. II — Do Direito (2.1 Da Adequação Típica + 2.2 Do Requerimento do Ofendido)
5. III — Dos Pedidos
6. Fechamento
7. Rol de testemunhas (se houver) — após a assinatura
```

### Preâmbulo

Nome + **qualificação completa** (art. 319, II, CPC por analogia) — **qualificar** (primeira manifestação) + `por seu(sua) advogado(a) firmatário(a), conforme procuração anexa, vem perante Vossa Excelência, com fundamento no [art. 5º, II, do Código de Processo Penal (CPP) / art. 5º, §5º, do CPP / art. 3º, caput, in fine, da Res. CNMP 181/2017], apresentar requerimento para instauração de [inquérito policial / termo circunstanciado / procedimento investigatório criminal] em face de [nome e qualificação do requerido], pelos seguintes motivos de fato e de direito:`

> **Verbo: APRESENTAR** (requerimento). O réu aqui se chama **requerido**.

### I — Dos Fatos

Resumo da situação fática. Ex.: o requerente possui o Instagram [...]; conforme prints em anexo, no dia [...] foi vítima de ofensas a partir de sua rede social.

### II — Do Direito

- **2.1 — Da Adequação Típica:** subsunção do fato à norma — falar do crime e de **todas as suas circunstâncias** (ex.: injúria, art. 140, **majorada pelo art. 141, §2º**, por rede social). A injúria atinge a honra subjetiva; consuma-se quando a vítima toma ciência da ofensa.
- **2.2 — Do Requerimento do Ofendido:** afirmar a **legitimidade da vítima**, agora explicitando o fundamento legal (ex.: crime de ação privada, art. 5º, §5º, CPP; ou ação pública, art. 5º, II) — esmiuçar o que foi apenas citado no preâmbulo.

### III — Dos Pedidos

`Ante o exposto, requer:`
- **a)** a instauração de **IP / TC(TCO) / PIC** para apurar **materialidade e autoria** do crime relatado, a fim de que, sendo o caso, possa ser ajuizada a respectiva ação penal;
- **b)** a realização de **perícia** (ex.: exame de corpo de delito do ofendido, art. 158 CPP) / a **juntada de documentos** / a juntada de **ata notarial** (ex.: print levado a cartório);
- **c)** a **inquirição das testemunhas** abaixo arroladas (se houver);
- **d)** o **interrogatório e o consequente indiciamento do requerido**.

### Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### Rol de testemunhas

Se houver, **após o fechamento**: nome e qualificação; etc.

## Checklist final

- [ ] Natureza correta = **ação pública incondicionada** ou **privada** (não condicionada)?
- [ ] Verbo **APRESENTAR**; réu chamado **requerido**?
- [ ] Endereçamento ao delegado/MP com **"Excelentíssimo"**?
- [ ] Fundamento certo (5º, II / 5º, §5º / art. 3º Res. 181)? **PIC só em ação pública?**
- [ ] Crime contra a honra: identificou corretamente a ação penal e eventuais majorantes (141, §2º)?
- [ ] Direito com **Adequação Típica + Requerimento do Ofendido (legitimidade)**?
- [ ] Pedidos: instauração (apurar materialidade e autoria) + perícia/documentos + testemunhas + interrogatório e indiciamento do requerido?
- [ ] Rol de testemunhas (se houver) após o fechamento?

## Lembretes finais

- **Fase de investigação; verbo: apresentar; réu = requerido.**
- **Ação pública incondicionada (5º, II) ou privada (5º, §5º); PIC só em ação pública (Res. 181).**
- **"Excelentíssimo" para o delegado** (Lei 12.830/2013) — nunca "Ao Juízo".
- **Crimes contra a honra:** regra é queixa/ação privada (145 CP); atenção às exceções e à Súmula 714 STF.
- **Adequação típica** = falar do crime e de todas as circunstâncias (subsunção).
- **Não confundir:** requerimento (incondicionada/privada) × representação (condicionada) × queixa (inicial da ação privada, ao juiz).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
