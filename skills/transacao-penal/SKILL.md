---
name: transacao-penal
description: >-
  Use ao manifestar-se sobre proposta de transação penal no JECRIM (art. 76 da Lei 9.099/95):
  infrações de menor potencial ofensivo — contravenções e crimes com pena máxima até 2 anos. Cobre
  cabimento, requisitos negativos (art. 76, §2º), natureza (não gera reincidência nem maus
  antecedentes, não consta em certidão para fins civis), aplicação imediata de pena restritiva/multa
  e descumprimento (Súmula Vinculante 35/STF)… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, justica-negocial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-transacao-penal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["transacao-penal", "transacao penal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Transação Penal (art. 76 da Lei 9.099/95)

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

Esta skill orienta a manifestação da defesa sobre a **transação penal**: acordo proposto pelo Ministério Público, na **fase preliminar** do Juizado Especial Criminal, pelo qual se aplica **de imediato** pena restritiva de direitos ou multa, **sem oferecimento de denúncia** e **sem discussão de culpa**. É medida despenalizadora destinada às **infrações de menor potencial ofensivo**.

> **Lição central:** transação **não é condenação**. Não há instrução, não há análise de mérito, não há reconhecimento de culpa. A aceitação **não gera reincidência, não gera maus antecedentes** e **não consta em certidão** para fins civis — registra-se apenas para impedir nova transação no quinquênio (art. 76, §§4º e 6º).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 76 da Lei 9.099/95, o conceito de infração de menor potencial ofensivo (art. 61 da Lei 9.099/95 — pena máxima **não superior a 2 anos**, cumulada ou não com multa, e contravenções) e a sobrevida da **Súmula Vinculante 35/STF**. Verifique súmulas e *overruling* pela skill `verificacao-citacoes` antes de fundamentar.

## Natureza e momento processual

A transação ocorre **antes da denúncia**, na audiência preliminar (art. 72), **após frustrada a composição civil dos danos** (art. 74) ou quando esta não impedir a ação penal. Pressupõe **ação penal pública** (incondicionada ou condicionada, esta com representação ofertada). É **transação processual** que depende de **aceitação do autor do fato e de seu defensor** (art. 76, §3º).

| Eixo | Composição civil (art. 74) | Transação penal (art. 76) | Suspensão condicional (art. 89) |
|---|---|---|---|
| **Natureza** | Acordo cível sobre o dano | Acordo penal — aplica pena de imediato | Suspende o processo por período de prova |
| **Momento** | Audiência preliminar (antes) | Audiência preliminar (antes da denúncia) | Após o recebimento da denúncia |
| **Critério** | — | Pena **máxima** ≤ 2 anos / contravenções | Pena **mínima** ≤ 1 ano |
| **Efeito de culpa** | Nenhum | **Não** importa reconhecimento de culpa | **Não** há sentença de mérito |

> Nos crimes de **ação penal privada**, a jurisprudência admite a transação por iniciativa do **querelante**. A composição civil, nos crimes de ação **privada** ou **pública condicionada**, homologada, **acarreta a renúncia ao direito de queixa ou representação** (art. 74, parágrafo único) — extinguindo a punibilidade.

## Cabimento — infrações de menor potencial ofensivo

Cabe transação nas **infrações de menor potencial ofensivo** (art. 61 da Lei 9.099/95):
- **contravenções penais**; e
- **crimes** a que a lei comine **pena máxima não superior a 2 (dois) anos**, cumulada ou não com multa.

O critério é a **pena máxima** cominada (diferente do sursis processual, que olha a pena **mínima**). Consideram-se majorantes/minorantes no cálculo do teto.

> **Limites materiais:** a transação **não se aplica** aos crimes de **violência doméstica e familiar contra a mulher** (art. 41 da Lei 11.340/2006; Súmula 536/STJ), nem aos **crimes militares** (art. 90-A da Lei 9.099/95).

## Requisitos negativos (art. 76, §2º) — quando NÃO se admite

A transação **não** será admitida se ficar comprovado (incisos do §2º):
- **I —** ter sido o autor da infração **condenado, por sentença definitiva, à pena privativa de liberdade**, pela prática de crime;
- **II —** ter sido o agente **beneficiado anteriormente**, no prazo de **5 (cinco) anos**, pela transação penal (art. 76, §4º);
- **III —** não indicarem os **antecedentes, a conduta social e a personalidade** do agente, bem como os **motivos e as circunstâncias**, ser necessária e suficiente a adoção da medida.

> Presentes os requisitos e ausentes os impedimentos, a proposta é **obrigatória** ao MP; a recusa imotivada é controlável (art. 28 do CPP por analogia; Súmula 696/STF, por extensão da lógica do sursis). A defesa deve assegurar **decisão informada do cliente** antes de aceitar.

## Aplicação imediata de pena restritiva ou multa

Aceita a proposta pelo autor e pelo defensor, o juiz aplica, **de imediato**, a pena **restritiva de direitos** ou **multa** (art. 76, *caput*), **especificando-a** na sentença homologatória. Pontos de controle:
- a pena é **negociada** e deve guardar **proporcionalidade** com a infração (impugnar exigências desarrazoadas);
- **não** se aplica pena privativa de liberdade na transação;
- a sentença homologatória **não gera os efeitos de uma condenação** (não há culpa reconhecida).

## Efeitos da transação (natureza despenalizadora)

- **Não importa reincidência** (art. 76, §4º, parte final);
- a sentença **não constará de certidão de antecedentes criminais**, salvo para impedir nova transação no quinquênio (art. 76, §§4º e 6º);
- **não tem efeitos civis** — o interessado deve buscar reparação no juízo cível (art. 76, §6º);
- **não importa reconhecimento de culpa** penal nem responsabilidade civil.

## Descumprimento da transação — Súmula Vinculante 35/STF

Questão central: descumprida a pena restritiva/multa aceita, **o que ocorre?**

> **Súmula Vinculante 35/STF:** *"A homologação da transação penal prevista no art. 76 da Lei 9.099/1995 não faz coisa julgada material e, descumpridas suas cláusulas, retoma-se a situação anterior, possibilitando-se ao Ministério Público a continuidade da persecução penal mediante oferecimento de denúncia ou requisição de inquérito policial."*

Consequências práticas:
- a homologação faz apenas **coisa julgada formal**, não material;
- **descumprida**, **não** se converte automaticamente a pena restritiva em privativa de liberdade — **retoma-se o status quo ante** e o MP pode **oferecer denúncia** (ou requisitar IP);
- não há execução da transação como título penal definitivo.

## Rito no JECRIM — ordem dos atos despenalizadores

A sequência da fase preliminar do Juizado é escalonada; a defesa deve conhecê-la para postular no momento certo:

1. **Termo circunstanciado** (art. 69) — lavrado em vez do flagrante/IP; o autor que assume compromisso de comparecimento **não é preso** nem se exige fiança.
2. **Audiência preliminar** (art. 72) — presentes autor, vítima, responsável civil e o MP.
3. **Composição civil dos danos** (art. 74) — tentada primeiro; homologada, nos crimes de ação **privada** ou **pública condicionada**, acarreta **renúncia** ao direito de queixa/representação (extinção da punibilidade).
4. **Representação** (art. 75) — nos crimes de ação pública condicionada, se não houver composição, colhe-se a representação (sua falta na audiência não implica decadência).
5. **Transação penal** (art. 76) — frustrada ou irrelevante a composição, o MP propõe a aplicação imediata de pena restritiva/multa.
6. **Denúncia oral** (art. 77) — rejeitada/descumprida a transação, segue-se o rito sumaríssimo.

> **Não cabe transação cumulada com discussão de mérito:** ao aceitar, o autor **não** discute culpa; ao recusar, o feito segue para denúncia e instrução. A defesa deve ponderar com o cliente o custo-benefício de cada via.

## Quadro de prazos e registros (sempre conferir)

| Marco | Regra | Observação |
|---|---|---|
| **Quinquênio entre transações** | 5 anos (art. 76, §4º) | nova transação só após 5 anos da anterior |
| **Registro** | só para impedir nova transação (§§4º e 6º) | **não** consta em certidão para fins civis/funcionais |
| **Reincidência** | **não** gera (art. 76, §4º) | aceitação não vale como condenação |
| **Efeitos civis** | inexistentes (art. 76, §6º) | reparação se busca no juízo cível |
| **Coisa julgada** | apenas **formal** (SV 35/STF) | descumprida, retoma-se o status quo ante |

## Estrutura da manifestação

A peça é **manifestação/requerimento** dirigida ao Juizado Especial Criminal. Cenários típicos: (a) **concordar** com a proposta; (b) **requerer** a transação quando o MP, devendo, não propôs; (c) **impugnar** pena desproporcional ou apontar **impedimento** indevidamente invocado.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DO JUIZADO ESPECIAL
CRIMINAL DA COMARCA DE [COMARCA] — [UF]

Autos/Termo Circunstanciado nº [NÚMERO]

[NOME], autor(a) do fato, já qualificado(a), por seu(sua) advogado(a) que
esta subscreve (procuração anexa), vem, respeitosamente, à presença de Vossa
Excelência, MANIFESTAR-SE acerca da TRANSAÇÃO PENAL (art. 76 da Lei
9.099/95), pelas razões a seguir:

I — DO CABIMENTO
   A infração imputada [tipificação] constitui infração de menor potencial
   ofensivo (art. 61), por ser contravenção / por cominar pena máxima não
   superior a 2 anos, sendo cabível a transação penal.

II — DA AUSÊNCIA DE IMPEDIMENTOS (art. 76, §2º)
   O(a) autor(a) do fato não foi condenado(a) à pena privativa de liberdade
   por crime (inc. I), não foi beneficiado(a) por transação nos últimos 5 anos
   (inc. II) e seus antecedentes, conduta social e personalidade recomendam a
   medida (inc. III).

III — [escolher o pedido]
   (a) Da concordância: aceita a proposta de aplicação de [pena restritiva de
       direitos / multa] ofertada pelo MP, nos termos do art. 76, caput.
   (b) Do requerimento (MP não propôs, devendo): presentes os requisitos e
       ausentes os impedimentos, a proposta é obrigatória; requer-se vista ao
       MP e, persistindo a recusa imotivada, a aplicação do art. 28 do CPP.
   (c) Da impugnação: a pena proposta [especificar] é desproporcional à
       infração, pelo que se requer sua adequação. / O impedimento do art. 76,
       §2º, [inc.] foi indevidamente invocado, porquanto [fundamentar].

IV — DOS PEDIDOS
   Requer-se: a) a aplicação imediata da TRANSAÇÃO PENAL (art. 76), com
   especificação de pena restritiva de direitos ou multa proporcional;
   b) o registro tão somente para fins do art. 76, §§4º e 6º, sem constar em
   certidão para fins civis e sem efeitos de reincidência/maus antecedentes.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; certidão de antecedentes criminais; comprovante de residência; documentos que demonstrem os critérios do art. 76, §2º, III (conduta social, ocupação lícita); se houver, comprovante de composição civil dos danos (art. 74).

## Checklist de teses (verificar antes de protocolar)

**Cabimento:**
- [ ] Infração é de **menor potencial ofensivo** — contravenção ou pena **máxima** ≤ 2 anos (art. 61)?
- [ ] Trata-se de **ação penal pública** (ou privada, admitida iniciativa do querelante)?
- [ ] **Não** é violência doméstica (Súm. 536/STJ) nem crime militar (art. 90-A)?
- [ ] A **composição civil** (art. 74) foi tentada, quando cabível?

**Impedimentos (art. 76, §2º):**
- [ ] Autor **não** foi condenado, por sentença definitiva, a PPL por crime (inc. I)?
- [ ] **Não** houve transação penal nos últimos **5 anos** (inc. II)?
- [ ] Antecedentes, conduta social e personalidade **recomendam** a medida (inc. III)?

**Proposta, pena e efeitos:**
- [ ] MP propôs? Se não, e havendo requisitos, acionar art. 28 do CPP (Súm. 696/STF, por extensão)?
- [ ] **Decisão informada do cliente** colhida antes da aceitação?
- [ ] Pena restritiva/multa **proporcional** à infração (impugnar exagero)?
- [ ] Confirmado que **não** gera reincidência/maus antecedentes e **não** consta para fins civis?

**Descumprimento:**
- [ ] Cliente ciente de que, descumprida, **retoma-se o status quo** e cabe denúncia (SV 35/STF) — sem conversão automática em prisão?

## Lembretes finais

- **Transação ≠ condenação:** sem culpa, sem reincidência, sem maus antecedentes; registro só para impedir nova transação no quinquênio (art. 76, §§4º e 6º).
- **Critério é a pena MÁXIMA** ≤ 2 anos (ou contravenção) — não confundir com o sursis processual (pena mínima ≤ 1 ano).
- **Antes da denúncia**, na fase preliminar, após tentada a **composição civil** (art. 74).
- **Proposta obrigatória** presentes os requisitos e ausentes os impedimentos do §2º — recusa imotivada é controlável.
- **Súmula Vinculante 35/STF:** descumprida a transação, **não há conversão automática em prisão** — retoma-se o status quo e o MP pode denunciar.
- **Sem efeitos civis** (art. 76, §6º) — a vítima busca reparação no cível.
- Garantir **decisão informada do cliente** sobre pena, efeitos e consequências do descumprimento.
- **Conferir vigência** do art. 76, do art. 61 e da SV 35 pela skill `verificacao-citacoes`, adaptando ao caso concreto.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
