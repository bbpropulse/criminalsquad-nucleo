---
name: correicao-parcial-tumulto-processual
description: >-
  Use ao manejar CORREIÇÃO PARCIAL (reclamação correicional) contra erro de procedimento (error in
  procedendo) do juiz criminal que cause inversão tumultuária dos atos e fórmulas legais do
  processo, quando não houver recurso próprio. Gatilhos: correição parcial, reclamação correicional,
  inversão tumultuária, tumulto processual, erro de procedimento, error in procedendo, ato do juiz
  sem…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recursos, procedimentos-incidentes]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-correicao-parcial-tumulto-processual"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["correicao-parcial-tumulto-processual", "correicao parcial", "tumulto processual"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Correição Parcial (reclamação correicional contra inversão tumultuária)

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

Esta skill orienta o manejo da **correição parcial** — também chamada **reclamação correicional** ou, em alguns estados, apenas **reclamação** — medida de índole **administrativo-processual** dirigida ao tribunal para **corrigir erro de procedimento** (*error in procedendo*) do juiz que importe **inversão tumultuária dos atos e fórmulas legais do processo**, **quando não houver recurso específico** previsto em lei.

> **Lição central:** a correição parcial é remédio **RESIDUAL** contra erro de **PROCEDIMENTO** (*error in procedendo*) que tumultue a marcha do processo — **nunca** contra erro de julgamento (*error in judicando*, o conteúdo/mérito da decisão) e **nunca** quando houver recurso próprio (RESE, apelação, agravo em execução, carta testemunhável, embargos). Errar qualquer um desses dois filtros leva ao **não conhecimento**. Antes de redigir, responda: (1) é vício de *forma/atividade* ou de *julgamento*? (2) existe recurso previsto para este ato?

> **Cautela de vigência (obrigatória antes de citar):** a correição parcial **não é disciplinada pelo CPP de forma sistemática**. Seu cabimento, prazo, rito e órgão competente vêm do **Regimento Interno do tribunal** e da **Lei de Organização Judiciária** local (e, na **Justiça Federal**, historicamente da **Lei 5.010/66** — conferir dispositivo vigente). Antes de peticionar, confira **no regimento do seu tribunal**: prazo (em regra 5 dias, mas **varia**), órgão destinatário (Presidência, Corregedoria, Câmara/Turma) e rito. Toda súmula, tese ou precedente citado passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf`.

## Natureza jurídica (controvertida)

Há três correntes; conhecê-las evita erro de fundamentação:

1. **Medida administrativo-disciplinar** — decorre do **poder de correição** do tribunal sobre os atos dos juízes (corregedoria). É a leitura que **preserva a constitucionalidade** do instituto, pois afasta a objeção de que regimento/lei estadual estaria a criar "recurso" (matéria de competência privativa da União — CF, art. 22, I).
2. **Sucedâneo recursal / recurso anômalo** — tem efeitos processuais (pode desconstituir o ato tumultuário), funcionando como sucedâneo de recurso onde a lei não previu recurso.
3. **Natureza mista** — administrativa na origem (poder correcional), com efeitos processuais no resultado.

> **Por que isso importa:** ao fundamentar, ancore o cabimento no **poder correcional** do tribunal (regimento + organização judiciária) **e** demonstre o **efeito processual** buscado (restabelecer a ordem). Não a apresente como se fosse "mais um recurso" do CPP — é justamente a **ausência de recurso** que a legitima.

## Base normativa (âncoras — conferir vigência)

- **Regimento Interno do tribunal** (TJ/TRF) — sede primária do cabimento, prazo, rito e competência. **Sempre citar o artigo do RI aplicável.**
- **Lei de Organização Judiciária** estadual (Código de Organização e Divisão Judiciárias) — atividade correicional e competência.
- **LOMAN — Lei Complementar 35/79** (Lei Orgânica da Magistratura Nacional) — disciplina a corregedoria e a **atividade correicional** dos tribunais, fundamento do poder de correição.
- **Lei 5.010/66** (organização da Justiça Federal de 1º grau) — sede histórica da correição parcial na **Justiça Federal**. [NÃO VERIFICADO: dispositivo/inciso exato — conferir texto vigente via `jurisprudencia-stj-stf`.]
- **CPP** — não prevê a correição parcial de modo sistemático; entra como pano de fundo (o rol **taxativo** do art. 581 é o que **delimita o espaço residual** da medida — ver adiante).

## Pressupostos de cabimento (todos cumulativos)

1. **Ato ou despacho de juiz** (decisão interlocutória, provimento ou até omissão que trave a marcha).
2. **Erro de procedimento** (*error in procedendo*) — vício de **forma/atividade**, não de conteúdo.
3. **Inversão tumultuária** dos atos e fórmulas legais — **subversão da ordem** ou da regularidade procedimental (a expressão-chave é *inversão tumultuária dos atos e fórmulas legais do processo*).
4. **Inexistência de recurso específico** — a medida é **subsidiária/residual**. Se cabe RESE, apelação, agravo em execução, carta testemunhável ou embargos, **não cabe correição**.
5. **Tempestividade** conforme o regimento (em regra 5 dias — conferir).
6. **Ausência de trânsito/preclusão** sobre o ato atacado.

## O núcleo: *error in procedendo* × *error in judicando*

| | *Error in procedendo* | *Error in judicando* |
|---|---|---|
| **O que é** | Erro na **condução/forma** do processo (atividade do juiz) | Erro no **julgamento** — no conteúdo da decisão (juízo de fato/direito) |
| **Exemplos** | Inverter a ordem de atos; indeferir prova sem fundamento tumultuando a instrução; negar vista; obstar diligência devida | Valorar mal a prova; interpretar erradamente a lei; dosar mal a pena |
| **Remédio** | **Correição parcial** (se não houver recurso próprio) | **Recurso** cabível (RESE, apelação etc.) — **jamais** correição |

➡️ **Regra de ouro:** correição parcial ataca **como** o juiz conduziu o processo, **não o que** ele decidiu. Tentar rediscutir o mérito por correição é o erro que mais gera **não conhecimento**.

## Residualidade — a fronteira com o rol do art. 581 do CPP

O **RESE tem rol taxativo** (art. 581, CPP). As decisões interlocutórias criminais **fora** desse rol — e que **não** desafiam apelação, agravo em execução (LEP), carta testemunhável (art. 639) ou embargos — formam o **campo fértil** da correição parcial **quando causam inversão tumultuária**. Fluxo de triagem:

```
1) O ato é decisão/despacho do juiz que subverte a marcha? ── NÃO → não é correição
        │ SIM
        ▼
2) O vício é de PROCEDIMENTO (forma) e não de JULGAMENTO (mérito)? ── NÃO → é recurso, não correição
        │ SIM
        ▼
3) Existe recurso específico para este ato?
        ├── SIM (está no art. 581; ou cabe apelação/agravo em execução/carta
        │        testemunhável/embargos) → use o RECURSO. Correição não cabe.
        └── NÃO → há inversão tumultuária? ── SIM → CORREIÇÃO PARCIAL (residual)
                                             └─ NÃO → reavaliar (MS? HC? nada?)
```

## Distinção de remédios vizinhos (não confundir)

- **× Recurso próprio** — se a lei prevê recurso para o ato, ele **prevalece**; a correição é subsidiária. Verificar sempre primeiro o art. 581, a apelação (art. 593), o agravo em execução (art. 197, LEP) e a **carta testemunhável** (art. 639 — cabível quando o juiz **denega** o recurso ou **obsta** seu seguimento: aqui é carta, **não** correição).
- **× Mandado de segurança** — ambos ocupam o espaço do ato judicial sem recurso próprio. O **MS** exige **direito líquido e certo** e ato ilegal/abusivo com risco de dano; a **correição** exige **tumulto procedimental**. Há **fungibilidade** em parte dos tribunais, mas **erro grosseiro** (via manifestamente incabível) pode obstar o aproveitamento — conferir a orientação local.
- **× Habeas corpus** — se o tumulto atinge a **liberdade de locomoção**, o **HC** costuma ser a via preferível (mais célere, sem preclusão). Não use correição para o que é matéria de HC.
- **× Reclamação constitucional (art. 988, CPC)** — **NÃO confundir**. A reclamação constitucional preserva **competência de tribunal** e **autoridade de suas decisões** (e precedentes vinculantes); a correição parcial corrige **tumulto procedimental do juízo de 1º grau**. Nomes parecidos, cabimentos distintos.
- **× Exceções e nulidades** — o tumulto pode também ser atacado por **arguição de nulidade** no próprio processo; a correição é para levá-lo **ao tribunal** quando não há recurso e a marcha já foi subvertida.

## Legitimidade e polo

A correição parcial **não é exclusiva de um polo**: pode ser manejada por **qualquer das partes** prejudicada pela inversão tumultuária —

- **Defesa** (réu/investigado, por seu advogado; Defensoria Pública);
- **Acusação** (Ministério Público);
- **Querelante** (ação penal privada) e **assistente de acusação**, na medida de seu interesse.

> **Ética por polo:** a responsabilidade e os deveres seguem o polo de quem peticiona — **advocacia** (EAOAB/CED e Provimento 205/2021), **Ministério Público** (CNMP) ou **Defensoria** (LC 80/94). O manejo pela acusação exige demonstrar o interesse recursal/correicional legítimo, sem uso protelatório.

## Procedimento (conferir no regimento)

- **Órgão destinatário:** Presidência, **Corregedoria-Geral** ou Câmara/Turma criminal — conforme o RI. **Errar o destinatário custa o conhecimento.**
- **Prazo:** em regra **5 dias** da ciência do ato (mas **varia** por tribunal — conferir).
- **Rito:** em muitos regimentos processa-se **pelo rito do agravo de instrumento** — logo, **instruir a petição com as peças do processo de origem** (cópia do ato atacado, procuração, peças que demonstram o tumulto). [NÃO VERIFICADO: rito específico do seu tribunal — conferir no RI.]
- **Informações do juízo:** o relator em regra **requisita informações** ao juiz apontado; segue manifestação da parte contrária e **parecer do MP/PGJ** (2º grau).
- **Efeito suspensivo:** **não é automático.** Se o ato tumultuário produz efeitos imediatos, **requerer liminar** (efeito suspensivo ativo) para sustar/restabelecer a ordem até o julgamento.

## Casuística — inversões tumultuárias típicas (sempre checar residualidade)

Exemplos recorrentes de *error in procedendo* que, **na ausência de recurso próprio**, ensejam correição:

1. **Inversão da ordem instrutória** — designar/realizar o **interrogatório antes** da oitiva das testemunhas, contra o art. 400 do CPP (o interrogatório é o **último** ato da instrução).
2. **Indeferimento imotivado de prova** requerida tempestivamente, subvertendo a instrução (cerceamento que **tumultua** a marcha) — distinto do mérito da valoração probatória.
3. **Negativa de vista dos autos** ou de acesso a elementos de prova já documentados.
4. **Diligências protelatórias/descabidas** determinadas de ofício que **paralisam ou desordenam** o feito.
5. **Reunião ou desmembramento indevido** de processos, alterando a ordem legal do procedimento.
6. **Processamento de ato em desacordo com a fase** procedimental (subversão de sequência prevista em lei).

> **Alerta de residualidade em cada exemplo:** muitos desses cenários **têm recurso ou remédio próprio** (p. ex., a **recusa de recebimento de recurso** desafia **carta testemunhável**, art. 639; questão de liberdade desafia **HC**). Só reste na correição o que **não** comporta recurso específico.

## Teses (quem maneja) × contra-teses (a resistência)

**Teses de cabimento/provimento:**
- O ato configura *error in procedendo* que **inverteu a ordem legal** dos atos/fórmulas — descreva a sequência correta (lei) × a sequência imposta (ato).
- **Inexiste recurso específico** para o ato — demonstre a lacuna (fora do art. 581; não é apelável; não é caso de carta testemunhável).
- A inversão gera **prejuízo concreto** e risco de dano de difícil reparação — funda o **pedido liminar**.
- **Poder-dever correcional** do tribunal (regimento + organização judiciária + LOMAN) autoriza o restabelecimento da regularidade.

**Contra-teses comuns (antecipe e neutralize):**
- **Existência de recurso próprio** → não conhecimento por residualidade. *Refutar:* mapear o rol do art. 581 e demonstrar que o ato não se enquadra.
- **Pretensão de rediscutir o mérito** (*error in judicando*) → não conhecimento. *Refutar:* delimitar o pedido ao **vício de forma**, sem tocar no acerto/desacerto do julgado.
- **Preclusão / perda de objeto** → *refutar:* tempestividade pelo prazo do RI e atualidade dos efeitos do ato.
- **Via inadequada (deveria ser MS/HC)** → *refutar:* invocar **fungibilidade** e ausência de erro grosseiro, se a orientação local admitir.

## Súmulas e precedentes (sob Citation Gate — `jurisprudencia-stj-stf`)

Não há corpo sumular abundante e específico sobre correição parcial; a matéria é regida sobretudo por **regimentos** e pela **construção jurisprudencial**. **Não invente enunciado.** Ao fundamentar:

- **Constitucionalidade do instituto** — há entendimento de que a correição parcial, por ter **natureza correcional (administrativa)**, **não** usurpa a competência privativa da União para legislar sobre processo (CF, art. 22, I), podendo ser prevista em regimento/organização judiciária. **Tese a sustentar pelo *dispositivo e pela ratio*, com o precedente específico conferido** — [NÃO VERIFICADO: acórdão/enunciado exato] → confira via `jurisprudencia-stj-stf`.
- **Cabimento residual** (só *error in procedendo*, só sem recurso próprio) — orientação consolidada na doutrina e nos tribunais; **cite o precedente atual conferido**, não de memória.
- **Regra prática:** prefira sustentar **tese + dispositivo** (art. do RI, art. 581 CPP a contrario, art. 22, I, CF, LOMAN) a arriscar **número de acórdão**. Na dúvida entre citar e omitir, **omitir vence inventar**.

## Modelo de petição (adaptar ao regimento local)

```
EXCELENTÍSSIMO SENHOR DOUTOR DESEMBARGADOR PRESIDENTE (ou CORREGEDOR-GERAL
DA JUSTIÇA / PRESIDENTE DA CÂMARA CRIMINAL) DO TRIBUNAL DE JUSTIÇA DO
ESTADO DE [UF]                              [conferir o órgão no Regimento Interno]


Processo de origem nº [Nº]
Juízo da [Nª] Vara Criminal da Comarca de [COMARCA]


[NOME DO CORREICIONANTE], já qualificado(a) nos autos do processo em epígrafe,
por seu advogado que esta subscreve (procuração anexa), vem, com fundamento
no art. [Nº] do Regimento Interno deste Egrégio Tribunal [e na Lei de
Organização Judiciária do Estado / Lei 5.010/66, na Justiça Federal],
interpor a presente

                    CORREIÇÃO PARCIAL (RECLAMAÇÃO CORRECIONAL)

contra ato do MM. Juízo de Direito da [Nª] Vara Criminal da Comarca de
[COMARCA], que [DESCREVER O ATO — ex.: designou o interrogatório do acusado
para data anterior à oitiva das testemunhas de acusação e de defesa,
invertendo a ordem legal da instrução criminal (art. 400 do CPP)], pelas
razões de fato e de direito a seguir expostas.


I — DA TEMPESTIVIDADE E DO CABIMENTO
A presente medida é tempestiva (art. [Nº] do RI — prazo de [Nº] dias, ciência
em [DATA]). Cabível a correição parcial porque: (a) o ato configura ERRO DE
PROCEDIMENTO (error in procedendo), não erro de julgamento; (b) importa
INVERSÃO TUMULTUÁRIA dos atos e fórmulas legais do processo; e (c) NÃO há
recurso específico previsto em lei para impugná-lo (o ato não se inscreve no
rol taxativo do art. 581 do CPP, não desafia apelação, agravo em execução,
carta testemunhável nem embargos).


II — DOS FATOS
[Narrar objetivamente a marcha do processo e o ato que a subverteu.]


III — DO DIREITO — DA INVERSÃO TUMULTUÁRIA (ERROR IN PROCEDENDO)
A ordem legal impõe [SEQUÊNCIA CORRETA — ex.: art. 400 do CPP: interrogatório
como último ato da instrução]. O ato correicionado inverteu essa ordem ao
[DESCREVER], subvertendo as fórmulas legais e tumultuando o processo, o que
autoriza a correição parcial no exercício do poder correcional deste Tribunal
(art. [Nº] do RI; LOMAN — LC 35/79). Não se pretende rediscutir o mérito de
qualquer decisão, mas tão somente restabelecer a REGULARIDADE do procedimento.


IV — DO PEDIDO LIMINAR (EFEITO SUSPENSIVO)
Presentes o fumus boni iuris (inversão evidente da ordem legal) e o periculum
in mora (o ato produz efeitos imediatos e de difícil reparação), requer-se a
concessão de LIMINAR para suspender [O ATO / OS EFEITOS] e sustar [ex.: a
audiência designada] até o julgamento final.


V — DO PEDIDO
Requer-se:
a) o CONHECIMENTO e o PROVIMENTO da correição parcial;
b) a requisição de INFORMAÇÕES ao MM. Juízo correicionado;
c) a desconstituição do ato e o RESTABELECIMENTO da ordem processual
   [ex.: com a realização do interrogatório como último ato da instrução];
d) a intimação do Ministério Público (parecer);
e) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]     OAB/[UF] nº [NÚMERO]
```

**Documentos a instruir** (rito de agravo em muitos tribunais): procuração; cópia do **ato correicionado** e da respectiva intimação (comprova tempestividade); peças do processo de origem que demonstrem a **inversão** (marcha anterior e posterior); eventual prova do prejuízo.

## Erros comuns / anti-padrões

- Usar correição para **rediscutir o mérito** da decisão (*error in judicando*) → não conhecimento.
- Manejar correição **existindo recurso próprio** (RESE do art. 581, apelação, agravo em execução, **carta testemunhável** do art. 639) → não conhecimento por residualidade.
- Errar o **órgão destinatário** ou o **prazo** do regimento (não presumir 5 dias — conferir o RI).
- **Confundir com a reclamação constitucional** (art. 988, CPC) — cabimentos distintos.
- **Não pedir liminar** quando o ato tumultuário produz efeitos imediatos (perda de eficácia prática).
- **Não instruir** a petição com as peças do processo de origem (rito de agravo exige instrução).
- Não **descrever a ordem legal violada** (a inversão só aparece no contraste sequência-legal × sequência-imposta).
- Citar **súmula/acórdão de memória** sobre correição — passar tudo por `jurisprudencia-stj-stf`.

## Checklist antes de protocolar

- [ ] O vício é de **procedimento** (*error in procedendo*), e não de **julgamento**?
- [ ] **Inexiste recurso próprio** (checado o art. 581, apelação, agravo em execução, carta testemunhável, embargos)?
- [ ] Está caracterizada a **inversão tumultuária** — descrita a ordem legal e o ato que a subverteu?
- [ ] **Órgão destinatário** e **prazo** conferidos **no Regimento Interno** do tribunal?
- [ ] Petição **instruída** com o ato atacado, a intimação (tempestividade) e as peças de origem?
- [ ] **Liminar** (efeito suspensivo) requerida quando o ato produz efeitos imediatos?
- [ ] **Ética do polo** observada (OAB/CED e Prov. 205/2021; CNMP; LC 80/94)?
- [ ] **Súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` (nada de memória)?
- [ ] **Revisão humana** do advogado/promotor/defensor responsável antes do protocolo?

## Lembretes finais

- **Residual + procedimento:** sem recurso próprio **e** vício de forma — os dois filtros que definem o cabimento.
- **Nunca mérito:** correição não reforma o **conteúdo** da decisão; ataca o **modo** de conduzir o processo.
- **Fonte é o regimento**, não o CPP — confira prazo, rito e órgão no RI do seu tribunal (e Lei 5.010/66 na Justiça Federal).
- **Descreva a inversão** pelo contraste ordem-legal × ato imposto — é o coração da peça.
- **Peça liminar** quando houver efeito imediato; **instrua** como agravo.
- **Ambos os polos** podem manejá-la — com a ética do respectivo polo.
- **Cite tese + dispositivo**, não número de acórdão incerto; **conferir sempre** via `jurisprudencia-stj-stf`.

## Conformidade (obrigatória)

- **Rascunho para revisão humana.** Este material é apoio à preparação; a responsabilidade pela peça e pelo protocolo é sempre do **profissional** (advocacia — CED, art. 2º; ou MP/Defensoria, no polo respectivo). Não substitui a leitura do **Regimento Interno** concreto nem o juízo técnico.
- **Citation Gate:** nenhuma súmula, tese ou precedente é citado de memória — tudo passa por `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.
- **Vigência:** cabimento, prazo, rito e competência da correição parcial dependem do **regimento** e da **organização judiciária** locais — confira antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
