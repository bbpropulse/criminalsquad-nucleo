---
name: protesto-consignacao-ata-nulidade
description: >-
  Use para a TÉCNICA de protesto e consignação em ata que preserva a nulidade e evita a preclusão —
  o registro imediato do inconformismo no termo de audiência, na ata do júri ou no auto da
  diligência, para manter viva a matéria e prequestioná-la ao recurso. Gatilhos: protesto em ata,
  consignar em ata, consignação em ata, reclamação em audiência, preservar nulidade, evitar
  preclusão, arguir nulidade logo depois de…. Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, tecnica, nulidades]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-protesto-consignacao-ata-nulidade"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["protesto-consignacao-ata-nulidade", "protesto consignacao", "consignacao nulidade"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Protesto e consignação em ata (técnica de preservação de nulidade)

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

Esta skill orienta a **técnica de ofício** de protestar contra um vício processual **no exato momento em que ele ocorre** e exigir sua **consignação em ata/termo**, para (1) **evitar a preclusão**, (2) **documentar o prejuízo** e (3) **prequestionar** a matéria para os recursos. É transversal: serve em audiência de instrução, plenário do júri, diligências (busca/apreensão) e sessões de tribunal. Embora aqui redigida na perspectiva predominante da **defesa**, a mesma técnica assiste a **qualquer parte** (inclusive a acusação e o assistente de acusação).

> **Lição central:** nulidade que não se protesta **na hora** e não se **registra em ata** tende a **precluir** (art. 571, VIII, c/c art. 572, I, do CPP). O ato reflexo do bom criminalista é: identificou o vício → **protesta em voz alta → requer a consignação em ata do requerimento E da decisão**. Não confie na rotulagem "nulidade absoluta" para deixar de protestar: a jurisprudência moderna cobra **demonstração de prejuízo** (art. 563) mesmo em vícios ditos absolutos — e o que blinda o recurso é o protesto documentado, não a etiqueta.

> **Cautela de vigência (obrigatória antes de citar):** o **art. 571 do CPP tem redação anterior à Lei 11.719/2008** e ainda remete a artigos do rito revogado (arts. 406, 500, 537 na redação antiga). Faça a **tradução ao procedimento atual** (resposta à acusação — art. 396-A; audiência una — arts. 400/411; alegações finais orais ou por memoriais — arts. 403, §3º, e 404, § único) e **confirme redação de dispositivos, súmulas e teses via `jurisprudencia-stj-stf` e o gate `verificacao-citacoes`** antes de fundamentar. Não confunda esta técnica com o **"protesto por novo júri"** (recurso **revogado** pela Lei 11.689/2008 — ex-arts. 607 e 608).

## Base legal

- **Art. 571 do CPP** — **momentos** de arguição das nulidades. Núcleo desta skill é o **inciso VIII**: as nulidades "do julgamento em plenário, em audiência ou em sessão do tribunal" devem ser arguidas **"logo depois de ocorrerem"**.
- **Art. 572 do CPP** — **convalidação (sanatória)** das nulidades relativas: sanam-se (I) se **não arguidas em tempo oportuno** (art. 571); (II) se o ato, praticado por outra forma, **atingiu o fim**; (III) se a parte, **ainda que tacitamente**, aceitou seus efeitos.
- **Art. 563 do CPP** — ***pas de nullité sans grief***: sem **prejuízo**, não se declara a nulidade. O protesto eficaz **descreve o prejuízo concreto**.
- **Art. 565 do CPP** — a parte **não pode arguir** nulidade a que **deu causa** ou que só interesse à parte contrária.
- **Art. 405 do CPP** — do ocorrido em audiência **lavra-se termo** (assinado por juiz e partes); §§1º e 2º tratam do **registro audiovisual**.
- **Art. 245, §7º, do CPP** — finda a **busca domiciliar**, lavra-se **auto circunstanciado** (assinado por duas testemunhas presenciais) — onde se consignam as irregularidades da diligência.
- **Arts. 494 e 495 do CPP** — de cada sessão do **júri** o escrivão lavra **ata** que descreve fielmente as ocorrências (rol do art. 495); **art. 484** — leitura dos quesitos é o **momento** de requerimento/reclamação.
- **Art. 564 do CPP** — rol das nulidades (para classificar o vício e localizar a base do protesto).

## Por que o protesto evita a preclusão (a mecânica)

A **nulidade relativa** convalida-se se não arguida no momento próprio (art. 572, I, remetendo ao art. 571). A **nulidade absoluta**, em tese, é arguível a qualquer tempo e o prejuízo é presumido — **mas** os tribunais superiores vêm exigindo prejuízo concreto até em várias hipóteses ditas absolutas, e a inércia enfraquece a tese. O protesto tempestivo, **consignado em ata**, produz quatro efeitos que salvam o recurso:

1. **Afasta a preclusão temporal** (arts. 571, VIII, e 572, I).
2. **Impede a "aceitação tácita"** (art. 572, III) — quem protesta não aceitou.
3. **Documenta o prejuízo** (art. 563) — a descrição na ata vira prova pré-constituída.
4. **Prequestiona** a matéria (indispensável para RESE, apelação e, sobretudo, REsp/RE).

## Anatomia do protesto eficaz (os 6 elementos)

Um protesto genérico ("a defesa protesta") **não prequestiona e não documenta prejuízo**. Registre sempre:

1. **Ato viciado** — qual ato/momento (ex.: inquirição da testemunha X; leitura de documento; formulação de quesito).
2. **Norma violada** — o dispositivo concreto (ex.: art. 212 do CPP; art. 479 do CPP; art. 483 do CPP).
3. **Prejuízo concreto** — o dano à parte (art. 563), descrito em fatos, não em fórmula abstrata.
4. **Pedido de correção/renovação** — antes de protestar, **peça sanar** o ato (retificar, renovar, excluir).
5. **Protesto para fins recursais** — indeferido o pedido, **protesta pela nulidade** para os fins do art. 571, VIII, e para **prequestionamento**.
6. **Consignação dupla** — requeira que constem em ata **o requerimento E a decisão** do juiz (deferimento/indeferimento). Sem a decisão registrada, falta prova do indeferimento.

## Roteiro por cenário (onde consignar)

**A) Audiência de instrução (art. 405).**
- Protesto **oral**, imediato, com pedido de consignação no **termo**.
- **Atenção à gravação audiovisual (art. 405, §§1º/2º):** o protesto verbal fica no áudio/vídeo, mas o termo escrito costuma ser enxuto ("breve resumo"). **Verbalize de forma destacada** e **peça consignação expressa no termo** — indexa o momento e cobre eventual falha de mídia. Guarde cópia da mídia (ver skill `transcricao-audiencia`).
- Vícios típicos: violação da ordem de inquirição/*cross-examination* (art. 212); indeferimento de reperguntas; ausência de intimação; cerceamento de defesa. Ver `audiencia-inquiricao-testemunhas`, `assistente-reperguntas-instrucao` e `preparacao-audiencia`.

**B) Plenário do júri (arts. 494/495; 484; 571, VIII).**
- A nulidade de plenário arguir-se **"logo depois de ocorrer"** (art. 571, VIII); **impugnação de quesitos** faz-se na **leitura do questionário** (art. 484).
- Exija **consignação na ata da sessão** (art. 495) — do requerimento **e** da decisão do juiz-presidente. **Ata é munição de apelação** (art. 593, III, "a" e "d"). Ver `juri-nulidades-plenario`, `juri-quesitacao` e `juri-plenario-debates`.

**C) Busca/apreensão e diligências (art. 245, §7º).**
- Exija que as **irregularidades constem no auto circunstanciado** (ausência/excesso de mandado, arrombamento indevido, ausência do morador, quebra da cadeia de custódia). É a "consignação em ata" da diligência e preserva a **ilicitude da prova**. Ver `nulidades-busca-apreensao-domiciliar` e `nulidades-busca-pessoal-abordagem-policial`.

**D) Sessão de tribunal / sustentação oral (art. 571, VIII).**
- Vício surgido em sessão (ex.: julgamento sem intimação, composição irregular) → protesto **na própria sessão**, consignado no acórdão/ata.

## Modelo de protesto para ditar/consignar

```
A defesa, com fundamento no art. 571, VIII, do CPP, REQUER a consignação em ata
do seguinte protesto:

No ato de [DESCREVER O ATO — ex.: inquirição da testemunha (NOME)], verificou-se
[DESCREVER O VÍCIO — ex.: que o Juízo formulou perguntas diretamente à testemunha
antes de facultada a palavra à defesa], em afronta ao [DISPOSITIVO — ex.: art. 212
do CPP], do que resulta prejuízo concreto consistente em [DESCREVER O PREJUÍZO —
ex.: cerceamento da inquirição pela defesa e comprometimento da higidez da prova].

Requer, primeiro, a [CORREÇÃO/RENOVAÇÃO/EXCLUSÃO] do ato. Indeferido o pedido,
PROTESTA a defesa pela nulidade, para os fins do art. 571, VIII, do CPP e para
fins de prequestionamento, requerendo que constem em ata tanto o presente
requerimento quanto a respectiva decisão de Vossa Excelência.
```

**Campos a preencher:** [DESCREVER O ATO], [DESCREVER O VÍCIO], [DISPOSITIVO], [DESCREVER O PREJUÍZO], [CORREÇÃO/RENOVAÇÃO/EXCLUSÃO].

## Teses e contra-teses

**Tese (defesa) — nulidade relativa preservada.** Vício arguido **tempestivamente** (art. 571, VIII) e **prejuízo demonstrado** (art. 563) **não se convalida** — o protesto documentado afasta as sanatórias do art. 572, I e III. A matéria segue viva para apelação/RESE.

**Tese (defesa) — nulidade absoluta, protesto ainda assim.** Vícios estruturais (ex.: cerceamento de defesa; ausência de quesito obrigatório) são arguíveis a qualquer tempo e o prejuízo tende à presunção — **mesmo assim protesta-se** para blindar contra o argumento de preclusão e para deixar o prejuízo já descrito nos autos.

**Contra-tese (acusação/juízo) e a réplica da defesa:**
- *"Precluiu"* (art. 571/572, I) → réplica: houve **protesto tempestivo consignado em ata** — não há inércia.
- *"Falta prejuízo"* (art. 563) → réplica: o prejuízo foi **descrito no ato do protesto** (por isso os 6 elementos).
- *"O ato atingiu o fim"* (art. 572, II) → réplica: demonstrar que a finalidade **não** foi atingida (o vício comprometeu resultado/garantia).
- *"Aceitação tácita"* (art. 572, III) → réplica: **quem protesta não aceita** — a ata prova o inconformismo.
- *"A parte deu causa"* (art. 565) → cautela: **não** protestar vício a que a própria parte concorreu.

## Súmulas e prequestionamento (sob Citation Gate — conferir via `jurisprudencia-stj-stf`)

Trate os enunciados abaixo como **tese + dispositivo a confirmar**; havendo incerteza de número/redação, use `[NÃO VERIFICADO]` e cheque antes de citar. Prefira a **tese** ao número do acórdão.

- **Prejuízo / deficiência de defesa** — a falta de defesa é nulidade absoluta, mas a **deficiência** só anula com **prova de prejuízo** (linha da **Súmula 523/STF** — conferir).
- **Classificação relativa × absoluta** — vários vícios têm rótulo sumulado (ex.: incompetência por prevenção como **relativa**; falta de quesito obrigatório no júri como **absoluta**). Confirmar enunciado e alcance **antes** de decidir se o protesto é imperativo. `[NÃO VERIFICADO]` até checar.
- **Prequestionamento (REsp/RE)** — a matéria federal/constitucional deve ter sido **ventilada e decidida**; o protesto consignado é a prova de que foi suscitada (linha das **Súmulas 282 e 356/STF** e **211/STJ** — conferir). Ver `recurso-especial-criminal` e `recurso-extraordinario-criminal`.
- **Reformatio in pejus e nulidade** — limites ao reconhecimento de nulidade contra o réu em recurso exclusivo da acusação (linha da **Súmula 160/STF** — conferir).

> Regra do gate: **nenhuma súmula/precedente/tese entra na peça de memória.** Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência fabricada por IA.

## Erros comuns e anti-padrões

- **Confundir com "protesto por novo júri"** — recurso **revogado** (Lei 11.689/2008). Aqui se trata de **técnica de preservação de nulidade**, não de recurso.
- **Protestar sem pedir consignação** — depois **não há prova** de que se protestou.
- **Protesto genérico** ("a defesa protesta") — sem ato, norma, prejuízo e pedido, **não prequestiona**.
- **Consignar só o requerimento** — falta registrar a **decisão** do juiz (o indeferimento).
- **Confiar no rótulo "absoluta"** e não protestar — risco de preclusão da *discussão* e de o tribunal exigir prejuízo.
- **Deixar para as alegações finais/apelação** vício ocorrido em audiência — o art. 571, VIII exige "logo depois de ocorrer".
- **Achar que "está gravado"** e não indexar o momento no termo — dificulta o recurso e sucumbe a falha de mídia.
- **Não guardar cópia** do termo/ata/mídia.
- **Arguir nulidade a que a própria parte deu causa** (art. 565).

## Checklist do protesto

- [ ] O vício foi identificado **no momento** em que ocorreu?
- [ ] O protesto foi feito **imediatamente** ("logo depois de ocorrer" — art. 571, VIII)?
- [ ] Registraram-se os **6 elementos** (ato, norma, prejuízo, pedido de correção, protesto recursal, consignação)?
- [ ] Pediu-se, **primeiro**, a correção/renovação do ato — e só depois o protesto?
- [ ] Requereu-se a **consignação em ata do requerimento E da decisão**?
- [ ] O suporte correto foi usado: **termo** (art. 405) / **ata do júri** (art. 495) / **auto da busca** (art. 245, §7º)?
- [ ] Guardou-se **cópia** do termo/ata/mídia?
- [ ] A matéria ficou **prequestionada** para o recurso cabível (RESE, apelação, REsp/RE)?
- [ ] Súmulas/precedentes **conferidos** via `jurisprudencia-stj-stf` e `verificacao-citacoes`?

## Nota de conformidade

- **Revisão humana obrigatória:** este material é apoio à atuação em ato processual, **não** substitui o juízo do advogado responsável (CED/EAOAB) nem a leitura do termo/ata concreto.
- **Ética por polo:** a técnica é **transversal** — assiste defesa, Ministério Público e assistente de acusação. Ajuste a finalidade do protesto ao **polo** definido em `_memory/company.md`.
- **Citation Gate:** dispositivos, súmulas e teses passam por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso.

## Lembretes finais

- **Identificou o vício → protesta → consigna em ata (requerimento E decisão).** Reflexo de ofício.
- **"Logo depois de ocorrer"** (art. 571, VIII) — a janela é **imediata**; depois preclui (art. 572, I).
- **Prejuízo descrito** (art. 563) é o que dá força ao protesto — nunca fórmula vazia.
- **Não confundir** com o extinto **protesto por novo júri**.
- **Confirmar vigência** do art. 571 (redação pré-2008) e conferir súmulas via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao converter o protesto/impugnação em peça (memoriais, razões de RESE ou apelação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).
