---
name: direitos-preso-oitiva-delegacia
description: >-
  Use ao GARANTIR e fiscalizar os direitos da pessoa PRESA no momento da oitiva/interrogatório na
  delegacia (CF, art. 5º, LXIII a LXV; CPP, art. 6º, V) — checklist dos direitos exigíveis no ato e
  da coleta de prova para arguir nulidade da declaração autoincriminatória. Gatilhos: direitos do
  preso na oitiva, interrogatório do preso na delegacia, algemas no interrogatório, Súmula
  Vinculante 11, declaração sob coação… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, inquerito, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-direitos-preso-oitiva-delegacia"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["direitos-preso-oitiva-delegacia", "direitos preso", "oitiva delegacia"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Direitos do Preso na Oitiva na Delegacia (CF, art. 5º, LXIII–LXV; CPP, art. 6º, V)

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

Esta skill orienta a **garantia e a fiscalização dos direitos da pessoa presa no exato momento da oitiva/interrogatório na delegacia** — e a **coleta de prova** para, depois, arguir a **ilicitude** de declaração autoincriminatória obtida com vício. O foco não é a logística das 24h nem a fiança, mas o **ato da oitiva do custodiado**: o que é exigível no instante em que a autoridade policial ouve alguém que está sob custódia.

Há uma diferença material entre o investigado **solto** e o **preso** sendo interrogado: vulnerabilidade acentuada, risco de coação, algemas, e confissão viciada que contamina toda a investigação. É esse recorte que esta skill isola.

> **Lição central:** o direito do preso na oitiva **não é conselho ético — é condição de validade da prova**. Silêncio, assistência de advogado e ausência de coação não são "boa prática": sua violação torna a declaração **ilícita** (CPP, art. 157) e pode arrastar as provas dela derivadas. **Documente o vício no momento** — o que não é registrado (em ata, em requerimento, em exame de corpo de delito) tende a se perder.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 5º, LXIII–LXV, da CF; do art. 6º, V, e do art. 157 do CPP; e da Lei 9.455/97 (tortura). Confira a **Súmula Vinculante 11/STF** e qualquer precedente sobre nulidade de interrogatório/confissão viciada via a skill `jurisprudencia-stj-stf` **antes** de fundamentar. A audiência de custódia e a videogravação de interrogatório têm normas que evoluem — não cite de memória.

## Este é um recorte de garantias (polo neutro)

A skill serve a quem **defende** o preso (advocacia, Defensoria) e a quem **fiscaliza** a legalidade do ato. Não confundir com:
- `plantao-pos-flagrante-primeiras-24h` — localização do preso, prerrogativas de acesso e fiança do art. 322 (logística das 24h).
- `audiencia-de-custodia` — o ato perante o **juiz**, em 24h, para controle da prisão e apuração de maus-tratos.

Aqui o foco é **o momento da oitiva na delegacia**: algemas (SV 11), coação viciando a confissão, e o *nemo tenetur se detegere* sob custódia.

## Base legal

- **CF, art. 5º, LXIII** — o preso será informado de seus direitos, entre os quais o de **permanecer calado**, sendo-lhe assegurada a **assistência da família** e de **advogado**.
- **CF, art. 5º, LXIV** — o preso tem direito à **identificação dos responsáveis** por sua prisão e por seu interrogatório policial.
- **CF, art. 5º, LXV** — a **prisão ilegal** será imediatamente **relaxada** pela autoridade judiciária.
- **CF, art. 5º, LXII** — a prisão de qualquer pessoa será **comunicada imediatamente ao juiz** e à **família do preso** ou pessoa por ele indicada.
- **CF, art. 5º, III** — vedação à **tortura** e a tratamento desumano ou degradante (núcleo do que a oitiva do preso não pode violar).
- **CPP, art. 6º, V** — na apuração da infração, a autoridade policial deverá **ouvir o indiciado**, com observância, no que couber, do procedimento dos arts. 185 a 196 (interrogatório judicial).
- **CPP, arts. 185–196** — regime do interrogatório: direito ao silêncio (art. 186), garantia de não prejudicar a defesa pelo silêncio (art. 186, parágrafo único), entrevista prévia e reservada com o defensor (art. 185, §5º, no interrogatório judicial — parâmetro a invocar por analogia).
- **CPP, art. 157** — são **inadmissíveis** as provas **ilícitas**, devendo ser desentranhadas; **contamina as derivadas** (teoria dos frutos da árvore envenenada, art. 157, §1º).
- **Súmula Vinculante 11/STF** — o uso de **algemas** só é lícito em caso de **resistência, fundado receio de fuga ou perigo à integridade** física, com **justificativa por escrito**; o excesso gera responsabilidade e pode **nulificar** o ato.
- **Lei 9.455/97** — define o crime de **tortura**, inclusive a praticada para obter declaração/confissão (art. 1º, I, "a").
- **Nemo tenetur se detegere** — ninguém é obrigado a produzir prova contra si (base convencional: **Pacto de São José da Costa Rica**, art. 8.2.g; e o silêncio do art. 5º, LXIII, CF). Alcança **não fornecer material** que o incrimine.

## Os direitos exigíveis NO ATO da oitiva — checklist operacional

Ao acompanhar (ou reconstruir) a oitiva do preso, confirme, um a um:

1. **Informação dos direitos (CF, art. 5º, LXIII).** O preso foi **informado** do direito ao silêncio e à assistência? A omissão dessa advertência vicia o ato — a confissão sem prévia ciência do direito de calar é imprestável.
2. **Direito ao silêncio (CPP, art. 186).** O preso pode **calar** sobre tudo ou sobre parte, e o silêncio **não** pode ser interpretado em prejuízo da defesa. Pressão para "colaborar" ou insinuação de que o silêncio agrava a situação é coação.
3. **Assistência de advogado (CF, art. 5º, LXIII).** Interrogatório de preso **sem defensor presente**, quando requerida ou necessária a assistência, é ponto de nulidade. Garantir **entrevista prévia e reservada** com o advogado antes do ato (parâmetro do art. 185, §5º, CPP).
4. **Comunicação à família (CF, art. 5º, LXII e LXIII).** A prisão e o local foram **comunicados** à família ou a pessoa indicada? A incomunicabilidade é **vedada** (não há incomunicabilidade do preso na ordem constitucional vigente).
5. **Comunicação ao juiz (CF, art. 5º, LXII).** A prisão foi **imediatamente comunicada ao juiz competente**? Falha aqui abre relaxamento (LXV) e reforça o vício do ato.
6. **Identificação dos responsáveis (CF, art. 5º, LXIV).** Quem prendeu e quem interrogou está **identificado** no auto? A ausência dificulta a apuração de abuso e é irregularidade a consignar.
7. **Vedação de algemas sem justificativa (SV 11).** Se o preso foi ouvido **algemado**, há **justificativa escrita** de resistência/fuga/perigo? Sem ela, o uso é ilícito e o ato pode ser nulificado — **fotografe/consigne** a presença das algemas.
8. **Ausência de tortura, coação ou maus-tratos (CF, art. 5º, III; Lei 9.455/97).** Houve violência, ameaça, privação de sono/comida/água, ou promessa/intimidação para obter a declaração? Qualquer coação **contamina** a confissão. **Requeira exame de corpo de delito imediato** e registre lesões.
9. **Nemo tenetur — recusa a produzir prova contra si.** O preso **não é obrigado** a participar de reconstituição, a fornecer padrões grafotécnicos/voz/material, nem a responder de forma autoincriminatória. Recusa **não** é confissão nem indício de culpa.
10. **Voluntariedade e higidez da declaração.** A oitiva foi **livre**? O preso estava lúcido (não embriagado, drogado, em surto, ou em estado de exaustão)? Estado que compromete a voluntariedade vicia o ato.
11. **Registro fiel do ato.** O que foi dito consta com fidelidade no termo? Divergência entre o que o preso declarou e o que foi reduzido a termo é matéria de impugnação (idealmente, **videogravação** do interrogatório).

## Teses defensivas e contra-teses

**Teses de ilicitude/nulidade (defesa):**
- **Confissão sem prévia advertência do silêncio** (CF, art. 5º, LXIII) → declaração **imprestável**; o preso não foi validamente cientificado de que podia calar.
- **Coação/tortura para confessar** (CF, art. 5º, III; Lei 9.455/97) → prova **ilícita** (CPP, art. 157), com **desentranhamento** e contaminação das derivadas (§1º). Instruir com exame de corpo de delito e, se houver, notícia-crime pela tortura.
- **Interrogatório sem defensor** quando exigível → nulidade por cerceamento; a confissão isolada, obtida assim, não sustenta condenação (a confissão extrajudicial retratada e não corroborada tem valor probatório reduzido).
- **Algemas sem justificativa escrita** (SV 11) → ilicitude do constrangimento no ato; consignar a violação e explorar o efeito sobre a voluntariedade.
- **Violação do nemo tenetur** → provas obtidas pela **compulsão** do preso a produzir material contra si são ilícitas.
- **Incomunicabilidade / não comunicação à família e ao juiz** (CF, art. 5º, LXII) → irregularidade que soma-se ao pedido de relaxamento (LXV) e reforça a nulidade do ato.

**Contra-teses / limites a antecipar:**
- **Confissão espontânea, informada e com defensor** tende a ser válida; o vício precisa ser **demonstrado**, não presumido — daí a importância do registro no momento.
- **Prova independente:** a acusação pode sustentar **fonte autônoma** (CPP, art. 157, §1º, parte final) para as provas ditas derivadas — a defesa deve atacar a alegada independência.
- **Nulidade relativa x prejuízo:** parte dos vícios de forma reclama demonstração de **prejuízo** (*pas de nullité sans grief*); a **ilicitude por coação/tortura**, ao contrário, atinge a admissibilidade da prova (art. 157) e não se convalida.
- **Valor da confissão extrajudicial retratada em juízo:** isolada e não corroborada por outras provas, **não** basta para condenar — sustentar a retratação e a ausência de corroboração.

## Súmulas e precedentes relevantes (sob o Citation Gate)

- **Súmula Vinculante 11/STF** — algemas apenas com justificativa escrita (resistência, fuga, perigo à integridade); o excesso responsabiliza e pode nulificar o ato. *(Súmula notória; ainda assim confirme a redação vigente.)*
- **Direito ao silêncio e à não autoincriminação** — ancorados no art. 5º, LXIII, CF, e no art. 8.2.g do Pacto de São José da Costa Rica (Dec. 678/92). Dispositivos citáveis diretamente.
- Para **qualquer** precedente específico do STF/STJ sobre **nulidade de interrogatório de preso, valor da confissão extrajudicial viciada, alcance do nemo tenetur (fornecimento de material, bafômetro, reconstituição), ou efeitos da violação da SV 11** — **[NAO VERIFICADO]**: **não** cite número de HC/RE/REsp, tema ou informativo de memória. Confirme via a skill `jurisprudencia-stj-stf`. Prefira sustentar a **tese e o dispositivo** a arriscar um acórdão. Melhor faltar precedente do que citar julgado inexistente.

## Roteiro de atuação

1. **Chegar ao preso e garantir a entrevista reservada** antes de qualquer oitiva (parâmetro do art. 185, §5º, CPP). Orientar sobre o **silêncio** e sobre o *nemo tenetur*.
2. **Fiscalizar o ato** com o checklist acima — advertência do silêncio, defensor presente, ausência de algemas injustificadas, ausência de coação.
3. **Documentar em tempo real:** exigir consignação em **termo/ata** de toda irregularidade (algemas sem justificativa, ausência de advertência, coação, estado do preso).
4. **Preservar a prova do vício:** requerer **exame de corpo de delito** imediato (lesões), pedir **videogravação**, registrar identidade dos responsáveis (CF, art. 5º, LXIV).
5. **Se houver tortura/coação:** notícia-crime (Lei 9.455/97), comunicação ao juiz da custódia e ao Ministério Público; pleitear a **ilicitude** da declaração (CPP, art. 157).
6. **Encaminhar as consequências processuais:** pedido de **relaxamento** da prisão ilegal (CF, art. 5º, LXV) quando cabível; **desentranhamento** da prova ilícita e **contaminação** das derivadas (art. 157, §§1º e 3º); levar o registro dos vícios à **audiência de custódia** (skill própria).

## Erros comuns / anti-padrões

- **Tratar direito do preso como formalidade** — é condição de validade da prova; violado, gera ilicitude (art. 157), não mera irregularidade.
- **Deixar o vício sem registro** — coação, algemas e ausência de advertência que não são consignadas no momento tendem a virar "palavra contra palavra".
- **Não pedir exame de corpo de delito** diante de indício de agressão — é a prova material da coação.
- **Aceitar interrogatório sem entrevista prévia reservada** com o defensor.
- **Confundir silêncio com confissão** — silêncio e recusa a produzir prova **não** podem ser lidos em prejuízo do preso.
- **Presumir independência da prova derivada** sem atacar a alegada fonte autônoma (art. 157, §1º).
- **Citar precedente de memória** — jurisprudência sobre nulidade de interrogatório passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Preso **informado** do direito ao silêncio e à assistência (CF, art. 5º, LXIII)?
- [ ] **Defensor** presente e **entrevista prévia reservada** garantida (parâmetro art. 185, §5º, CPP)?
- [ ] Prisão **comunicada à família e ao juiz** (CF, art. 5º, LXII)?
- [ ] **Responsáveis identificados** no auto (CF, art. 5º, LXIV)?
- [ ] **Algemas** — havia justificativa escrita (SV 11)? Consignado o uso?
- [ ] Ausência de **coação/tortura/maus-tratos** (CF, art. 5º, III; Lei 9.455/97) — exame de corpo de delito requerido se houver lesão?
- [ ] **Nemo tenetur** respeitado — sem compulsão a produzir prova contra si?
- [ ] **Voluntariedade e higidez** do preso no ato (lucidez, ausência de exaustão)?
- [ ] Vícios **consignados em termo/ata** e prova do vício preservada (videogravação, fotos, exame)?
- [ ] Consequências processuais encaminhadas — **relaxamento** (LXV), **desentranhamento** e contaminação (art. 157)?
- [ ] Súmulas e precedentes **verificados** via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável realizada?

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — apoio à atuação, não substituto do juízo profissional nem do acompanhamento presencial do ato. Nenhuma súmula, tese ou acórdão é citado de memória: tudo passa pelo gate `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). A atuação e as impugnações são de responsabilidade do profissional, observada a ética por polo — **advocacia** (Estatuto da OAB e Código de Ética e Disciplina, com as prerrogativas do art. 7º; Provimento 205/2021 na comunicação); **Defensoria Pública** (LC 80/94); e, no controle externo da atividade policial, o **Ministério Público** (LC/CNMP). Sigilo e LGPD: dados do assistido nunca em repositório público.
