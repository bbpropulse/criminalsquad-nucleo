---
name: acompanhamento-interrogatorio-policial
description: >-
  Use ao ATUAR AO VIVO no interrogatório/oitiva do investigado na delegacia — conduta técnica do
  advogado DURANTE o ato (CPP, art. 6º, V c/c arts. 185-196; EAOAB, art. 7º, III, XIV e XXI; CF,
  art. 5º, LXIII e LXIV). Cobre: exigir entrevista prévia reservada, exercer o silêncio pergunta a
  pergunta, impedir perguntas capciosas/indutivas, requerer consignação literal de perguntas
  indeferidas e protestos no termo, controlar a… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, inquerito, analise, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acompanhamento-interrogatorio-policial"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acompanhamento-interrogatorio-policial", "acompanhamento interrogatorio", "interrogatorio policial"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Acompanhamento do Interrogatório do Investigado na Delegacia (CPP art. 6º, V; EAOAB art. 7º, XXI)

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

Esta skill orienta a **atuação técnica do advogado AO VIVO durante o interrogatório (ou oitiva) do investigado na delegacia** — o que fazer minuto a minuto no ato, como consignar, quando calar, como impedir perguntas viciadas e como **preservar a nulidade** para uso posterior. Não é a preparação do cliente para o interrogatório judicial (isso é `preparacao-interrogatorio-cliente`), nem o panorama estratégico do inquérito (`defesa-no-inquerito`): é a **execução do ato** em que o defensor está presente e fiscaliza.

> **Lição central:** na delegacia, o advogado é **fiscal e escudo**, não expectador. Duas armas valem mais que qualquer tese: (1) o **silêncio exercido pergunta a pergunta** (CF, art. 5º, LXIII) e (2) o **registro literal no termo** — perguntas indeferidas, protestos e recusas de consignação. **O que não está no termo não aconteceu.** A nulidade do art. 7º, XXI, do EAOAB só se aproveita se houver rastro documental do vício.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 7º, III, XIV e XXI, do EAOAB (Lei 8.906/94, com as alterações da Lei 13.245/2016)**, dos **arts. 185-196 do CPP** e da **Súmula 522/STJ**. Súmulas, temas e overruling passam **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de fundamentar qualquer requerimento ou futura tese de nulidade. Na dúvida, **omitir vence inventar**.

## Base legal

- **CPP, art. 6º, V** — na apuração da infração, a autoridade policial deverá **ouvir o indiciado**, observando, no que aplicável, os arts. 185-196 (procedimento do interrogatório judicial serve de baliza mínima).
- **CPP, arts. 185-196** — direito ao silêncio (art. 186), vedação de que o silêncio prejudique (art. 186, parágrafo único), interrogatório de identificação e de mérito (arts. 187-188), formulação de perguntas pelas partes com poder de o juiz/autoridade indeferir as **impertinentes ou que induzam a resposta** (lógica do art. 188).
- **CF, art. 5º, LXIII** — direito ao **silêncio** e à **assistência de advogado** e da família ao preso.
- **CF, art. 5º, LXIV** — direito à identificação dos responsáveis pela prisão/interrogatório.
- **EAOAB (Lei 8.906/94), art. 7º:**
  - **III** — assistir o cliente investigado durante a apuração de infrações, sob pena de nulidade, **podendo apresentar razões e quesitos** (redação da Lei 13.245/2016);
  - **XIV** — direito de **examinar autos** de flagrante e de investigação (com/sem sigilo, na forma da lei — ver **SV 14/STF**);
  - **XXI** — assistir o cliente investigado **durante a apuração**, sendo obrigatória a presença do advogado no interrogatório, **sob pena de nulidade** do respectivo interrogatório ou depoimento e de todos os elementos investigatórios e probatórios dele decorrentes.
- **Súmula Vinculante 14/STF** — direito de o defensor acessar, no interesse do representado, os **elementos de prova já documentados** no procedimento investigatório.
- **Súmula 522/STJ** — a conduta de atribuir-se **falsa identidade** perante autoridade policial é típica (art. 307, CP), ainda que em situação de alegada autodefesa. Baliza o controle da fase de qualificação.
- **Provimento 205/2021 (OAB)** — parâmetros éticos de publicidade/atuação; a atuação no ato é sempre sob **revisão e responsabilidade do advogado** (CED).

## Antes do ato — checklist de chegada (5 minutos)

1. **Identifique-se e junte a procuração/substabelecimento** — registre no plantão sua condição de defensor do investigado.
2. **Exija acesso aos autos já documentados** (SV 14/STF; EAOAB, art. 7º, XIV) — auto de prisão em flagrante, portaria, representações, o que já houver. **Sem saber o que a autoridade tem, não há defesa técnica.** Diligências em andamento e não documentadas podem ser negadas — anote a recusa.
3. **Confirme a natureza do ato:** interrogatório do investigado? Oitiva como testemunha? Acareação? Reconhecimento? Cada um tem regra própria (o reconhecimento segue o art. 226 do CPP e sua jurisprudência restritiva — ver `jurisprudencia-stj-stf`).
4. **Verifique a situação do cliente:** preso (flagrante/temporária/preventiva) ou solto? Houve **condução coercitiva**? (A condução coercitiva **para interrogatório** foi tida por incompatível com a CF — confira o precedente vigente via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.)
5. **Cheque integridade física e condições** — sinais de coação, cansaço extremo, embriaguez, estado de saúde. Ato colhido sob coação é imprestável e deve ser recusado/consignado.

## O direito que abre tudo — a ENTREVISTA PRÉVIA RESERVADA

> **Regra de ouro:** **nenhuma pergunta** deve ser respondida antes de o advogado ter conversado **a sós** com o cliente. A entrevista prévia e reservada é decorrência do direito de defesa e do sigilo advogado-cliente (EAOAB, art. 7º, III e sigilo profissional). Sem ela, a assistência é meramente formal — e isso é matéria de nulidade.

- **Exija a entrevista reservada** antes do início do ato. Se negada ou apenas "aparente" (com policial ao alcance da voz, câmera com áudio, ambiente devassado), **consigne a negativa no termo** e protesto.
- **Na entrevista**, alinhe com o cliente a estratégia deste ato específico: **silêncio total, silêncio seletivo ou colaboração pontual** — decisão que é do cliente, informada pelo advogado. Regra prática de segurança: **na fase policial, o silêncio é o padrão**; falar exige razão concreta (ex.: versão de legítima defesa robusta e já documentável).
- **Instrua o combinado do silêncio pergunta a pergunta:** o cliente **qualifica-se** (nome, dados — a recusa aqui pode configurar falsa identidade/desobediência, ver Súmula 522/STJ), mas, no **mérito**, responde a cada pergunta apenas se assim se decidiu, podendo calar-se a partir de qualquer ponto.

## Durante o ato — roteiro minuto a minuto do advogado

### 1. Abertura e qualificação
- Confirme que a autoridade **advertiu o investigado do direito ao silêncio** (CF, art. 5º, LXIII; CPP, art. 186). **Se não advertiu, requeira a advertência e consigne a omissão.**
- **Qualificação (art. 187, 1ª parte):** oriente o cliente a fornecer os dados de identificação verdadeiros. **Atenção:** dar **falsa identidade** para se ocultar é crime autônomo (art. 307, CP; **Súmula 522/STJ**) — o silêncio protege o mérito, **não** autoriza mentir a qualificação. Ficar em silêncio sobre a qualificação, por sua vez, pode gerar atrito e nota de desobediência; avalie caso a caso.

### 2. Mérito — exercício do silêncio pergunta a pergunta
- Decidido o silêncio (total ou seletivo), a fórmula é: o investigado, **a cada pergunta de mérito**, invoca o **direito constitucional de permanecer calado (CF, art. 5º, LXIII)**. Peça que **cada recusa seja consignada** como "o interrogando, orientado por seu advogado, exerceu o direito ao silêncio".
- **O silêncio não pode ser interpretado em prejuízo** (CPP, art. 186, parágrafo único). Se a autoridade insinuar o contrário no termo, **protesto e consignação**.
- **Nunca deixe o cliente "explicar rapidinho"** algo fora do combinado. Se ele começar a se comprometer, **peça pausa para nova conversa reservada** (é seu direito assistir e orientar — art. 7º, III).

### 3. Fiscalização das perguntas — o escudo
O advogado tem o dever de **impedir que perguntas viciadas entrem no termo** como se legítimas fossem. Fiscalize e reaja a:

| Vício da pergunta | O que é | Reação do advogado |
|---|---|---|
| **Capciosa** | Pressupõe fato não provado ("quando você escondeu a arma…") | Requerer indeferimento; se colhida, consignar a impugnação |
| **Indutiva/sugestiva** | Já contém a resposta desejada | Idem — pedir reformulação neutra |
| **Ameaçadora/coativa** | Promessa de benefício ou ameaça de mal | Consignar imediatamente; suspender o ato se persistir |
| **Sobre fato estranho** | Alheia à apuração / pescaria (*fishing*) | Impugnar pertinência |
| **Repetitiva de exaustão** | Insistir para desgastar o silêncio | Consignar a insistência indevida |

- **Requeira a consignação LITERAL** de toda pergunta que impugnar **e** da decisão da autoridade (deferiu/indeferiu). Modelo de fala: *"Requeiro que conste no termo a pergunta formulada, a impugnação da defesa por [capciosa/indutiva] e a decisão da autoridade."*
- Você **pode apresentar razões e quesitos** (EAOAB, art. 7º, III) — use para **direcionar a apuração** a favor do cliente (ex.: requerer que se pergunte/consigne circunstância exculpante, ou que se documente uma diligência).

### 4. Se a autoridade recusar a consignação
- Esse é o ponto mais sensível. Diga, de forma registrável: *"Requeiro a consignação da pergunta e do protesto; caso indeferida, requeiro que conste no termo a própria recusa de consignação."*
- Se ainda assim recusar, **documente por fora**: anotação própria com horário, súmula do ocorrido, e — se possível — testemunhas presentes. Considere **registrar a ocorrência** e, conforme a gravidade, comunicar a **Comissão de Prerrogativas da OAB** (a violação de prerrogativa é infração — EAOAB, art. 7º).
- **Grave mentalmente a linha do tempo**: hora de chegada, hora da entrevista negada/concedida, hora do início, perguntas-chave. Isso alimenta a futura arguição de nulidade.

### 5. Encerramento e leitura do termo
- **Exija a leitura integral do termo antes da assinatura.** Confira se: (a) constaram as advertências; (b) constaram as impugnações e o silêncio; (c) não há afirmação atribuída ao cliente que ele não fez; (d) constou a presença e a atuação do advogado.
- **Havendo divergência, NÃO assine sem ressalva.** Faça consignar a ressalva ("a defesa assina apenas para atestar presença, ressalvando que [x] não corresponde ao declarado"). **Assinatura sem ressalva convalida.**
- Requeira **cópia do termo** (art. 7º, XIV) e do que mais foi documentado no ato.

## Situações especiais

- **Cliente preso em flagrante:** o ato integra o **auto de prisão em flagrante (APF)**. Some ao roteiro a fiscalização da **legalidade da prisão** e prepare-se para a **audiência de custódia** (prazo de 24h — CPP, art. 310). Comunicação da prisão à família e à Defensoria/advogado é direito (CF, art. 5º, LXII e LXIII).
- **Oitiva como "testemunha" que vira suspeito:** se, no curso da oitiva, o investigado passa a ser tratado como suspeito, **as garantias do interrogatório incidem** (silêncio, advogado). Interromper e reposicionar o ato é dever — consigne a mudança de qualidade.
- **Acareação (arts. 229-230, CPP):** mantenha o cliente sob a mesma estratégia de silêncio/seletividade; acareação não é brecha para extrair confissão.
- **Reconhecimento (art. 226, CPP):** exija a observância do **procedimento legal** (descrição prévia, pluralidade de pessoas semelhantes, formalização). A jurisprudência recente é **restritiva** quanto ao reconhecimento fora das formalidades — confira via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.
- **Cliente vulnerável** (menor apreendido — ECA; pessoa com deficiência; não falante de português): exija as garantias adicionais próprias (intérprete, presença de responsável/curador, procedimento do ECA para adolescente).

## Teses e contra-teses (para a nulidade posterior)

➡️ **Tese defensiva central (art. 7º, XXI, EAOAB):** interrogatório/depoimento colhido **sem a presença do advogado**, quando requerida a assistência, é **nulo**, contaminando os elementos dele decorrentes. Registrar a ausência/impedimento é o que viabiliza a tese.
➡️ **Tese — assistência meramente formal:** presença do advogado **impedida de atuar** (sem entrevista prévia, sem consignação, sem poder impugnar) equivale à ausência de defesa técnica — nulidade material, não só formal.
➡️ **Tese — coação/vício de vontade:** ato colhido sob ameaça, cansaço extremo ou promessa ilegal é prova ilícita (CF, art. 5º, LVI); ataca-se o conteúdo e a cadeia dele derivada (`teoria-frutos-arvore-envenenada`, se existir; senão, ver `cadeia-de-custodia`).
➡️ **Contra-tese (acusação/autoridade), a antecipar:** (a) a Lei 13.245/2016 tornaria a presença **obrigatória apenas quando o investigado constitui advogado**, não um dever de intimação prévia da autoridade em todo ato — daí a importância de **registrar o requerimento de assistência**; (b) nulidade relativa exige **prejuízo** (CPP, art. 563 — *pas de nullité sans grief*): por isso o **prejuízo concreto** deve ficar demonstrado no próprio termo (perguntas viciadas consignadas, versão distorcida, etc.). **Confirme, no caso e na jurisprudência atual, se o vício é tido por absoluto ou relativo** via `jurisprudencia-stj-stf`.

## Erros comuns / anti-padrões

- **Chegar sem ler os autos** (SV 14) e "descobrir" a imputação durante o ato.
- **Dispensar a entrevista prévia reservada** por pressa ou pressão da autoridade.
- **Deixar o cliente falar "só o começo"** — no policial, silêncio é o padrão; qualquer fala exige razão concreta e combinada.
- **Confundir silêncio com mentira na qualificação** — falsa identidade é crime (Súmula 522/STJ).
- **Não consignar a pergunta viciada** — o vício some do processo; a nulidade fica sem prova.
- **Assinar o termo sem leitura e sem ressalva** — convalida o que houver de errado.
- **Não registrar a recusa de consignação** — perde-se a única prova do abuso.
- **Esquecer a linha do tempo** (horários de chegada, entrevista, início) — é o esqueleto da arguição de nulidade.
- **Citar precedente de memória** — todo número de HC/REsp/RE, tema ou informativo passa por `jurisprudencia-stj-stf`.

## Checklist final do ato

- [ ] Procuração/substabelecimento juntada e condição de defensor registrada?
- [ ] Acesso aos autos já documentados exigido (SV 14; art. 7º, XIV)?
- [ ] **Entrevista prévia reservada** realizada (ou negativa consignada)?
- [ ] Estratégia do ato definida **com o cliente** (silêncio total/seletivo/colaboração)?
- [ ] Advertência do direito ao silêncio conferida e, se omitida, consignada?
- [ ] Qualificação verdadeira prestada (sem risco de art. 307, CP — Súmula 522/STJ)?
- [ ] Silêncio de mérito exercido **pergunta a pergunta** e consignado?
- [ ] Perguntas capciosas/indutivas impugnadas **e** consignadas (pergunta + impugnação + decisão)?
- [ ] Razões/quesitos da defesa apresentados quando úteis (art. 7º, III)?
- [ ] Recusas de consignação registradas (e, se grave, comunicação à Comissão de Prerrogativas)?
- [ ] Termo **lido integralmente** antes da assinatura?
- [ ] Divergências ressalvadas por escrito (assinatura só com ressalva)?
- [ ] Cópia do termo requerida?
- [ ] Linha do tempo anotada (horários-chave) para a eventual nulidade?
- [ ] Se preso: legalidade do flagrante fiscalizada e **audiência de custódia** (24h) agendada/preparada?
- [ ] Citações verificadas via `jurisprudencia-stj-stf` antes de qualquer tese?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à atuação; a responsabilidade pela conduta no ato, pelas impugnações e pelas ressalvas é sempre do **advogado responsável** (CED). Nada aqui substitui o juízo profissional diante do caso concreto.
- **Ética por polo:** esta skill é de **defesa** (advocacia) — OAB + **Provimento 205/2021**, sigilo profissional e vedação a conflito de interesses (EAOAB, art. 17). No Ministério Público, observar CNMP; na Defensoria, LC 80/94.
- **Verificação de citações inegociável:** dispositivos de lei (CPP/CF/EAOAB) e súmulas notórias podem ser citados; **qualquer precedente específico** (número de HC/REsp/RE, informativo, tema) marcado como **[NÃO VERIFICADO]** ou não confirmado deve passar por `jurisprudencia-stj-stf` antes de ir a uma peça. **Melhor faltar precedente do que citar julgado inexistente.**

**Padrão de redação:** ao converter o ocorrido em peça (arguição de nulidade, memoriais no IP, relaxamento de prisão), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
