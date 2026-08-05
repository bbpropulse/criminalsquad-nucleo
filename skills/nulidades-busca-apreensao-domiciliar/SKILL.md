---
name: nulidades-busca-apreensao-domiciliar
description: >-
  Use ao impugnar a legalidade da busca e apreensão DOMICILIAR e a licitude das provas dela
  derivadas — o ingresso na 'casa' protegida (CF, art. 5º, XI; arts. 240-250 do CPP). Perspectiva de
  DEFESA. Gatilhos: nulidade de busca domiciliar, ingresso sem mandado, fundadas razões,
  consentimento do morador, flagrante de crime permanente (tráfico/arma)…. Não use para conclusão
  definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, prova, nulidades]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-nulidades-busca-apreensao-domiciliar"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["nulidades-busca-apreensao-domiciliar", "nulidades busca", "apreensao domiciliar"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Nulidades da busca e apreensão domiciliar (defesa)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **impugnação da busca domiciliar** e o pedido de reconhecimento da **ilicitude da prova** dela obtida (e das provas derivadas). O ponto de partida é a **inviolabilidade do domicílio** (CF, art. 5º, XI) — garantia fundamental que só cede diante de hipóteses taxativas. É a peça central da defesa em crimes descobertos "dentro de casa" (tráfico, armas, receptação).

> **Lição central:** a licitude do ingresso afere-se pelo que a autoridade sabia **ANTES** de entrar, nunca pelo que encontrou depois. Achar droga, arma ou dinheiro **não convalida** ingresso sem justa causa prévia. Ataque sempre a **fundada razão *ex ante*** — e lembre que o **ônus de provar** o consentimento ou as fundadas razões é do **Estado**, não da defesa.

> **Cautela de vigência (obrigatória antes de citar):** o marco é o **Tema 280 do STF (RE 603.616/RO)** — ingresso forçado só é lícito quando há "fundadas razões, devidamente justificadas *a posteriori*", de flagrante no interior. Antes de fundamentar, confira a redação vigente dos **arts. 240-250 do CPP** e o estado atual dos precedentes (STF/STJ sobre consentimento documentado, fuga, denúncia anônima, faro de cão) via a skill `jurisprudencia-stj-stf`. Não cite acórdão de memória.

## A garantia e o conceito de "casa"

**CF, art. 5º, XI:** "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial".

**"Casa" é conceito amplo** (art. 150, §4º, do CP): qualquer compartimento habitado, aposento ocupado de habitação coletiva e compartimento não aberto ao público onde alguém exerce profissão/atividade. Alcança, em regra, **quarto de hotel ocupado, escritório, consultório, quintal murado e áreas de vivência anexas**. Só **não** é protegida a parte franqueada ao público (o salão do bar, por exemplo). Delimitar o que é "casa" é o primeiro filtro — sem domicílio protegido, não há inviolabilidade a invocar.

## Base legal

- **CF, art. 5º, XI** — inviolabilidade do domicílio e as exceções taxativas.
- **CF, art. 5º, LVI** — inadmissibilidade das provas obtidas por meios ilícitos.
- **CPP, art. 240, §1º** — busca domiciliar quando **fundadas razões** a autorizarem (apreender coisas/instrumentos, colher elementos de convicção etc.).
- **CPP, art. 241** — a busca não realizada pessoalmente pela autoridade deve ser precedida de **mandado**. Atenção: a leitura constitucional impõe **reserva de jurisdição** — fora das exceções do art. 5º, XI, a busca domiciliar exige **mandado judicial** (não basta ordem da autoridade policial).
- **CPP, art. 243** — requisitos do mandado: indicação **precisa** da casa e do morador; o **fim** da diligência; subscrição do escrivão e assinatura da autoridade. O §2º veda a apreensão de documento em poder do defensor, salvo corpo de delito.
- **CPP, art. 245** — buscas domiciliares **executadas de dia**, com formalidades (exibição do mandado, franqueamento, e **auto circunstanciado assinado por duas testemunhas** presenciais).
- **CPP, arts. 244, 248, 249** — busca pessoal (não confundir — ver adiante); execução sem molestar mais que o indispensável; busca em mulher por outra mulher.
- **CPP, art. 157** — desentranhamento da prova ilícita e das **derivadas**, salvo **fonte independente** e **descoberta inevitável** (§§1º e 2º).
- **CPP, arts. 158-A a 158-F** — **cadeia de custódia** do material apreendido.

## As portas de entrada legítima (art. 5º, XI) — e o que cada uma exige

Só existem cinco fundamentos para o ingresso. Identifique **qual** foi invocado e teste os requisitos **daquela** porta:

1. **Consentimento do morador** — a qualquer hora, mas **voluntário e comprovado**.
2. **Flagrante delito** — a qualquer hora, mas com **fundadas razões prévias**.
3. **Desastre** e (4) **prestar socorro** — situações emergenciais, alheias à persecução.
5. **Determinação judicial** — **somente durante o dia** e com mandado válido.

## Roteiro de análise da defesa

```
PASSO 1 — O local é "casa" protegida (art. 150, §4º, CP)?
          NÃO → inviolabilidade não incide; reavaliar (busca pessoal? via pública?).
          SIM → seguir.

PASSO 2 — Qual porta de entrada a autoridade invocou?
          ├── MANDADO JUDICIAL → testar no Passo 3-A
          ├── CONSENTIMENTO     → testar no Passo 3-B
          └── FLAGRANTE          → testar no Passo 3-C

PASSO 3 — Testar os requisitos da porta invocada (abaixo).

PASSO 4 — Cadeia de custódia da apreensão (arts. 158-A a 158-F): lacre,
          auto de apreensão, testemunhas, rastreabilidade — houve quebra?

PASSO 5 — Definir os efeitos: prova ilícita (art. 157) + contaminação das
          derivadas (§1º) x fonte independente / descoberta inevitável (§2º).
```

### Passo 3-A — Ingresso por MANDADO judicial

- **Foi cumprido de dia?** O mandado judicial só autoriza ingresso **durante o dia** (art. 5º, XI; art. 245). Cumprimento noturno sem consentimento é vício. *(O critério de "dia" — cronológico 6h-18h x físico-astronômico aurora/crepúsculo — é controvertido; confira a posição atual no gate.)*
- **O mandado é específico?** Deve indicar **a casa** e **o morador** com precisão e o **fim** da diligência (art. 243). **Mandado genérico/coletivo** (sem individualizar endereço ou pessoa) é fortemente atacável.
- **Respeitou o objeto?** Busca autorizada para um fim não é salvo-conduto para vasculhar tudo; apreensão fora do objeto suscita discussão sobre **serendipidade** (encontro fortuito).
- **Formalidades do art. 245?** Exibição do mandado, franqueamento, **auto circunstanciado com duas testemunhas**. Ausência de auto/testemunhas gera nulidade formal.

### Passo 3-B — Ingresso por CONSENTIMENTO do morador

- **Foi voluntário e livre de coação?** Consentimento obtido sob cerco ostensivo, ameaça ou "convite" da guarnição armada é viciado.
- **Há prova da voluntariedade?** O **ônus é do Estado** — e a orientação é de **registro idôneo (preferencialmente audiovisual)** do consentimento. Sem prova, presume-se a ilegalidade. *(Tese consolidada no HC 598.051/SP, STJ — conferir no gate.)*
- **Quem consentiu tinha legitimidade?** Deve ser o **morador**; consentimento de terceiro sem poder de disposição não vale.
- **Consentimento não se presume:** silêncio, porta aberta ou "não se opôs" não equivalem a autorização.

### Passo 3-C — Ingresso por FLAGRANTE (crime permanente)

- Tráfico na modalidade "ter em depósito/guardar" e posse de arma são **crimes permanentes** — a flagrância se protrai. **Mas isso não é cheque em branco:** o STF (Tema 280) exige **fundadas razões prévias e concretas** de que o crime ocorre no interior, **justificadas *a posteriori*** de forma idônea.
- A **justificação genérica** ("atitude suspeita", "denúncia de que ali se vendia droga") **não** satisfaz o padrão. Exija elementos objetivos anteriores ao ingresso (investigação, campana, monitoramento).

## O que NÃO configura fundada razão (teses de defesa)

- **Denúncia anônima isolada** — autoriza diligência investigativa prévia, **não** o ingresso imediato. *(Jurisprudência consolidada STF/STJ — conferir no gate; [NÃO VERIFICADO] o acórdão específico.)*
- **Fuga ou nervosismo** do indivíduo ao avistar a polícia — por si só **não** legitima a entrada. *(Orientação do STJ — conferir; [NÃO VERIFICADO].)*
- **"Atitude suspeita" genérica**, faro do cão sem outros elementos, ou intuição do agente.
- **Resultado positivo da diligência** — encontrar droga/arma **não** convalida ingresso ilegal (juízo *ex ante*).

## Precedentes qualificados (conferir SEMPRE via `jurisprudencia-stj-stf`)

> Prefira sustentar pela **tese + dispositivo**; trate os números de acórdão como referência a confirmar.

- **STF — Tema 280 (RE 603.616/RO):** "A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em **fundadas razões, devidamente justificadas *a posteriori***, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade do agente e de **nulidade** dos atos praticados." Repercussão geral — base de quase toda tese defensiva aqui.
- **STJ — HC 598.051/SP (6ª Turma):** o **consentimento** para o ingresso deve ser **voluntário** e o **ônus da prova** de sua validade é do **Estado**, exigindo-se **documentação idônea (registro audiovisual)**; o êxito da apreensão não sana a ausência de autorização válida. *(Confirmar teor e eventual modulação no gate.)*
- **Enunciados sumulares:** não há súmula vinculante consolidada especificamente sobre "fundadas razões" para busca domiciliar — a matéria é regida sobretudo pelo **Tema 280** e por precedentes das Turmas. **Não invente súmula**; se for citar enunciado, confirme número e teor no gate.

## Efeitos da ilicitude — prova ilícita e derivadas

- **Prova ilícita** (art. 5º, LVI, CF; art. 157, *caput*, CPP): **inadmissível**, deve ser **desentranhada** dos autos.
- **Provas derivadas** (art. 157, §1º) — a **teoria dos frutos da árvore envenenada**: a ilicitude do ingresso **contamina** o que dele decorreu (o material apreendido, os depoimentos e confissões subsequentes, a própria prisão em flagrante).
- **Exceções que a acusação invocará** (art. 157, §1º e §2º): **fonte independente** e **descoberta inevitável**. A defesa deve demonstrar que **não** havia linha investigativa autônoma capaz de chegar à mesma prova sem o ingresso ilícito.
- **Consequência prática:** sem a prova contaminada, costuma restar **insuficiência probatória** — daí o pedido de **absolvição** (art. 386, CPP), **relaxamento** do flagrante ou **trancamento**.

## Teses defensivas x contra-teses (acusação)

| Tese da defesa | Contra-tese (acusação) — antecipe |
|---|---|
| Ausência de fundadas razões prévias (Tema 280) | "Crime permanente autoriza flagrante a qualquer hora" — rebater: permanência **não dispensa** justa causa *ex ante* |
| Consentimento não comprovado / viciado (ônus do Estado) | "O morador franqueou a entrada" — exigir **prova idônea**; silêncio não é consentimento |
| Justificação *a posteriori* genérica | "Havia denúncias e atitude suspeita" — genérico **não** basta |
| Mandado noturno / genérico / coletivo | "A urgência autorizava" — reserva de jurisdição e especificidade (art. 243) |
| Contaminação das provas derivadas (art. 157, §1º) | "Fonte independente / descoberta inevitável" — exigir **demonstração concreta** da linha autônoma |
| Resultado não convalida ingresso ilegal | "Mas a droga estava lá" — licitude se afere **antes** de entrar, não pelo êxito |

**Distinção que não pode faltar:** **busca domiciliar** (esta skill — reserva de jurisdição e exceções do art. 5º, XI) **não** se confunde com **busca pessoal** (art. 244 — dispensa mandado quando há *fundada suspeita* de porte de arma/objeto ilícito). Confundir os regimes enfraquece a tese.

## Modelo — arguição de ilicitude (resposta à acusação / memoriais / HC)

```
DA ILICITUDE DA BUSCA DOMICILIAR E DA PROVA DELA DERIVADA

1. Síntese fática do ingresso: em [DATA/HORA], agentes de [ÓRGÃO] ingressaram
   na residência de [MORADOR] invocando [MANDADO / CONSENTIMENTO / FLAGRANTE],
   apreendendo [OBJETO].

2. Da inviolabilidade do domicílio (CF, art. 5º, XI): a casa é asilo inviolável;
   o ingresso só se admite em flagrante, desastre, socorro ou, de dia, por ordem
   judicial — o que aqui não se verificou de modo válido.

3. Da ausência de fundadas razões prévias (STF, Tema 280 — RE 603.616/RO [conferir]):
   o ingresso apoiou-se em [denúncia anônima / fuga / intuição], sem qualquer
   elemento concreto anterior; a justificação a posteriori é genérica.

4. [Se consentimento] Da falta de prova da voluntariedade — ônus do Estado, não
   demonstrado, sem registro idôneo (STJ, HC 598.051/SP [conferir]).

5. Da irrelevância do resultado: a apreensão de [OBJETO] não convalida o ingresso
   ilegal — a licitude afere-se ex ante.

6. Do efeito: nulidade do ingresso e ILICITUDE da prova (art. 157, caput, CPP;
   art. 5º, LVI, CF), com contaminação das provas derivadas (art. 157, §1º —
   frutos da árvore envenenada), inexistente fonte independente ou descoberta
   inevitável (§2º).

7. Do pedido: o DESENTRANHAMENTO das provas ilícitas e derivadas e, por
   insuficiência probatória remanescente, a ABSOLVIÇÃO (art. 386, VII, CPP)
   [ou o relaxamento do flagrante / o trancamento da ação penal].
```

**Campos a preencher:** [DATA/HORA], [ÓRGÃO], [MORADOR], [MANDADO/CONSENTIMENTO/FLAGRANTE], [OBJETO]. Ajuste o veículo processual (resposta à acusação, memoriais, HC, apelação) e confirme cada precedente no gate antes de protocolar.

## Erros comuns e checklist

- [ ] O local foi corretamente qualificado como **"casa" protegida** (art. 150, §4º, CP)?
- [ ] Identificou-se **qual porta** de entrada a autoridade invocou (mandado / consentimento / flagrante)?
- [ ] **Fundadas razões prévias e concretas** foram exigidas — e não a mera justificação *a posteriori* genérica (Tema 280)?
- [ ] Em consentimento: cobrou-se **prova da voluntariedade** (ônus do Estado; registro idôneo)?
- [ ] Em mandado: verificou-se **dia**, **especificidade** (art. 243) e **auto com testemunhas** (art. 245)?
- [ ] Explorou-se a **contaminação das provas derivadas** (art. 157, §1º) e afastou-se **fonte independente / descoberta inevitável**?
- [ ] Conferiu-se a **cadeia de custódia** do material apreendido (arts. 158-A a 158-F)?
- [ ] Pediu-se **desentranhamento** + consequência (absolvição / relaxamento / trancamento)?
- [ ] Todo precedente/súmula passou pelo gate `jurisprudencia-stj-stf` **antes** da citação?

**Anti-padrões (evitar):**
- Deixar o resultado da diligência (droga encontrada) "convalidar" o ingresso ilegal.
- Aceitar consentimento presumido (porta aberta, silêncio, "não se opôs").
- Tratar crime permanente como dispensa automática de fundadas razões.
- Confundir **busca domiciliar** com **busca pessoal** (art. 244).
- Impugnar só o ingresso e esquecer de pedir o **desentranhamento das derivadas**.
- Citar acórdão/súmula de memória (risco de sanção por jurisprudência inventada).

## Conformidade e diretriz anti-alucinação

- **Revisão humana obrigatória.** Este material é apoio à preparação; a tese, a estratégia e a peça são de responsabilidade do **advogado** (CED, art. 2º). É hipótese a confirmar, não peça final.
- **Citação sob gate.** Toda lei, súmula, tese ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes do uso. Para precedente específico incerto, marque **[NÃO VERIFICADO]** e confira. **Na dúvida, omitir vence inventar** — prefira **tese + dispositivo** a número de acórdão.
- **Perspectiva.** Esta skill é de **defesa** (arguição de nulidades). As contra-teses acusatórias constam apenas para antecipação — a atuação no polo oposto exige a skill/ótica própria da acusação.

## Lembretes finais

- **Licitude se afere *ex ante*** — o êxito da diligência nunca convalida o ingresso.
- **Ônus é do Estado** — cabe a ele provar consentimento válido ou fundadas razões.
- **Tema 280 é o eixo:** fundadas razões prévias + justificação *a posteriori* idônea.
- **Consentimento:** voluntário, do morador, **documentado** — sem prova, ilícito.
- **Mandado:** de dia, específico (art. 243), com auto e testemunhas (art. 245).
- **Efeito:** desentranhar a prova ilícita **e as derivadas** (frutos da árvore envenenada, art. 157, §1º).
- **Conferir tudo** no gate `jurisprudencia-stj-stf` antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
