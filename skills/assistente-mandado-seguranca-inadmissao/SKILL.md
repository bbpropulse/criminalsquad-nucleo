---
name: assistente-mandado-seguranca-inadmissao
description: >-
  Use ao impetrar MANDADO DE SEGURANÇA contra a decisão que indefere a habilitação do assistente de
  acusação — via residual porque o art. 273 do CPP torna essa decisão irrecorrível. Demonstra o
  direito líquido e certo do legitimado (ofendido, seu representante legal ou o CADI do art. 31) que
  comprova a condição de vítima e a tempestividade, com prova pré-constituída e pedido de liminar
  para participar de atos iminentes… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, assistente-de-acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-mandado-seguranca-inadmissao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-mandado-seguranca-inadmissao", "assistente mandado", "seguranca inadmissao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Mandado de Segurança contra a Inadmissão do Assistente de Acusação (art. 273 do CPP; Lei 12.016/2009)

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

Esta skill orienta a elaboração do **mandado de segurança** impetrado contra a **decisão que indefere a habilitação do assistente de acusação** na ação penal pública. O ponto de partida é uma anomalia processual: o **art. 273 do CPP** declara **irrecorrível** o despacho que admite *ou* que **não admite** o assistente. Fechada a via recursal ordinária, sobra ao ofendido preterido o **mandado de segurança** (CF, art. 5º, LXIX; Lei 12.016/2009) como remédio residual para atacar ato judicial ilegal que fere direito líquido e certo.

> **Escopo — polo ativo da acusação.** Esta skill serve a quem atua **ao lado da acusação**: o **advogado do ofendido** (ou de seu representante legal, ou do sucessor/CADI do art. 31 do CPP) que quer se habilitar como **assistente do Ministério Público** e teve o pedido negado. Ela **não** é peça de defesa. O chefe-roteador deve confirmar, antes de sugeri-la, que o usuário representa a **vítima/ofendido** — e não o réu. Se quem foi indeferido tivesse legitimidade de defesa, o instrumento seria outro.

> **Lição central:** o MS aqui **não é recurso disfarçado** — não se discute o mérito da causa penal nem se reexamina prova. Discute-se **um único ponto de direito**: o impetrante **tem** legitimidade para assistir (é ofendido/representante/sucessor, art. 268 c/c 31 do CPP) e o pedido era **tempestivo** (art. 269 — a qualquer tempo enquanto não transitar em julgado, recebendo o processo no estado em que se acha). Comprovada a condição de ofendido **por documento**, o direito é **líquido e certo** e a inadmissão é ilegal.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 268 a 273 do CPP** e da **Lei 12.016/2009** (prazo decadencial de 120 dias — art. 23; requisitos da inicial — art. 6º; liminar — art. 7º, III). Todo precedente do STF/STJ sobre cabimento de MS contra ato judicial, sobre legitimação do assistente e sobre a irrecorribilidade do art. 273 passa **obrigatoriamente** pelo gate da skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir para a peça. Melhor faltar precedente do que citar julgado inexistente.

## Por que o MS — a irrecorribilidade do art. 273

A decisão sobre a **admissão do assistente é irrecorrível** por expressa disposição legal:

- **Art. 273 do CPP:** *"Do despacho que admitir, ou não, o assistente, não caberá recurso, devendo, entretanto, constar dos autos o pedido e a decisão."*

Não há **recurso em sentido estrito** previsto (o rol do art. 581 do CPP **não** contempla essa hipótese), nem apelação, nem agravo. O sistema simplesmente **fecha** a via ordinária. Quando um ato judicial ilegal fere direito líquido e certo e **não há recurso próprio com efeito suspensivo capaz de evitar o dano**, abre-se a via do **mandado de segurança** (CF, art. 5º, LXIX; Lei 12.016/2009, art. 5º, II, *a contrario sensu*). É exatamente o cenário do assistente preterido.

> **Distinção necessária.** A skill `assistente-acusacao` **menciona** que cabe MS contra o indeferimento — mas não redige a impetração. É esta skill que produz a peça: define a **autoridade coatora**, isola o **direito líquido e certo**, monta a **prova pré-constituída** e formula o **pedido liminar**. Habeas corpus e reclamação constitucional são remédios distintos, com pressupostos próprios, e **não** tratam da inadmissão do assistente.

## Base legal

- **Art. 268 do CPP** — legitimados a intervir como assistente: o **ofendido** ou seu **representante legal**, e, na falta, as pessoas do **art. 31** (cônjuge/companheiro, ascendente, descendente ou irmão — o chamado CADI, sucessão processual).
- **Art. 269 do CPP** — o assistente será admitido **enquanto não passar em julgado a sentença** e **recebe a causa no estado em que se achar** (tempestividade).
- **Art. 270 do CPP** — o **corréu** no mesmo processo **não** pode intervir como assistente (vedação — filtro de legitimidade).
- **Art. 271 do CPP** — poderes do assistente (propor meios de prova, requerer perguntas, aditar libelo — hoje razões, participar dos debates, arrazoar recursos, requerer o que couber). Fundamenta o **prejuízo** e o **interesse** que justificam a liminar.
- **Art. 272 do CPP** — o MP será **ouvido** previamente sobre a admissão do assistente (o parecer ministerial não vincula, mas integra o iter e pode ser peça de instrução do MS).
- **Art. 273 do CPP** — **irrecorribilidade** da decisão; obrigatoriedade de constar dos autos o pedido e a decisão (base documental do MS).
- **Art. 31 do CPP** — rol de sucessores (CADI) legitimados na morte/ausência do ofendido.
- **CF, art. 5º, LXIX** — cabimento do mandado de segurança contra ato ilegal de autoridade, quando não amparado por HC ou HD.
- **Lei 12.016/2009** — regência do MS: **art. 1º** (direito líquido e certo); **art. 5º, II** (não cabe MS de decisão judicial recorrível com efeito suspensivo — aqui **não há** recurso, o que confirma o cabimento); **art. 6º** (requisitos da inicial e prova documental); **art. 7º, III** (liminar); **art. 23** (decadência de **120 dias**).

## Requisitos da impetração (o que precisa estar comprovado *documentalmente*)

O MS é ação de **rito documental**: não há dilação probatória. Tudo que sustenta o direito tem de estar **pré-constituído** e juntado com a inicial.

1. **Legitimidade ativa (ser ofendido/representante/sucessor).** Documento que comprove a **condição de vítima** do crime apurado (BO, cópia da denúncia que nomeia o ofendido, laudo, certidão) ou a **condição de sucessor** (certidão de óbito + prova do vínculo do art. 31 — casamento/união estável/filiação).
2. **Autoridade coatora.** É o **juiz (ou Tribunal)** que proferiu a decisão de inadmissão. Identificar o juízo, a vara e os autos de origem.
3. **Ato coator — a decisão de indeferimento.** Cópia integral da **decisão que não admitiu** o assistente e da **petição de habilitação** indeferida (o art. 273 exige que ambos constem dos autos — use isso a favor).
4. **Direito líquido e certo.** A legitimidade do art. 268 + a tempestividade do art. 269 são **questões de direito** resolvíveis à luz dos documentos, sem prova a produzir → direito **líquido e certo**.
5. **Tempestividade da própria impetração.** MS dentro do **prazo decadencial de 120 dias** (Lei 12.016/2009, art. 23) contados da ciência da decisão coatora.
6. **Ausência de recurso próprio.** Justificar que o art. 273 do CPP **veda** o recurso ordinário — daí o cabimento do MS (não é sucedâneo recursal indevido, é a **única** via).
7. **Fundamento da liminar (art. 7º, III).** **Fumus boni iuris** (a legitimidade documentada) + **periculum in mora** (ato processual **iminente** — audiência de instrução, plenário do júri, prazo recursal — que ocorrerá sem a participação do assistente, gerando prejuízo de difícil reparação aos poderes do art. 271).

## Teses do impetrante (assistente) e contra-teses (para antecipar)

**Teses do impetrante:**

1. **Direito líquido e certo à habilitação.** Comprovada por documento a condição de ofendido (art. 268) e sendo o pedido tempestivo (art. 269, antes do trânsito em julgado), a admissão do assistente é **direito**, não faculdade discricionária do juízo — o indeferimento é ato ilegal.
2. **Recebimento no estado em que se acha (art. 269).** Eventual argumento de "processo avançado" **não** obsta a habilitação: a lei manda receber a causa no estado em que estiver. Negar por "fase adiantada" é ilegalidade.
3. **Interesse processual concreto (art. 271).** Os poderes do assistente (produzir prova, formular perguntas, arrazoar recursos, participar dos debates) são reais e atuais; sua supressão causa **dano** ao ofendido titular do direito de assistir.
4. **MS é a via adequada (art. 273 do CPP).** Não sendo cabível recurso, o MS é o remédio próprio — não há sucedâneo indevido, mas exercício regular da garantia do art. 5º, LXIX, da CF.
5. **Legitimidade do sucessor (art. 31), quando o caso.** Morto/ausente o ofendido, o CADI habilita-se; a prova do vínculo é documental (certidões), preservando a liquidez e certeza.

**Contra-teses prováveis (da autoridade coatora / do réu / do MP em contrarrazões) — e como responder:**

- *"Cabe reexame de prova / dilação"* → **Não.** O que se discute é **legitimidade + tempestividade**, questões de direito com suporte documental; não se reexamina o mérito penal.
- *"O impetrante não é ofendido"* (falta legitimidade) → responder com o **documento** que fixa a condição de vítima/sucessor; se a controvérsia sobre a condição de ofendido exigir prova, aí sim a liquidez cai — **por isso a prova pré-constituída é decisiva**.
- *"É corréu, logo vedado (art. 270)"* → afastar demonstrando que o impetrante **não** figura como acusado no mesmo processo.
- *"MS não é sucedâneo de recurso"* → invocar o **art. 273 do CPP**: **não existe** recurso; o MS é a via constitucional própria justamente porque a lei fechou a recursal.
- *"Falta interesse / o MP já atua"* → a atuação do MP **não** exclui a do assistente; são poderes autônomos do art. 271, e o ofendido tem direito próprio de intervir.

## Autoridade coatora, competência e litisconsórcio

- **Autoridade coatora:** o **juiz** que indeferiu a habilitação (ou o **órgão do Tribunal**, se a inadmissão veio de decisão colegiada). O MS é impetrado no **tribunal competente** para julgar aquela autoridade (via de regra, o **TJ** ou **TRF** — verificar a organização judiciária local e o foro por prerrogativa, se houver).
- **Litisconsórcio passivo necessário:** citar como **litisconsorte** a parte beneficiada pelo ato (em regra, o **réu** da ação penal, cujo interesse é obstar a assistência) — a Lei 12.016/2009 e a jurisprudência exigem a integração de quem se beneficia do ato coator, sob pena de nulidade. **Confirmar a exigência no caso concreto e na jurisprudência atual via `jurisprudencia-stj-stf`.**
- **Ministério Público:** oficia como **custos legis** no MS (Lei 12.016/2009, art. 12) — distinto do MP como parte na ação penal de origem.
- **Informações da autoridade (art. 7º, I):** a autoridade coatora será notificada a prestar informações; a decisão coatora e o parecer do art. 272 já anexados abreviam a controvérsia.

## Estrutura da petição inicial do MS (Lei 12.016/2009, art. 6º)

1. **Endereçamento** ao Tribunal competente (Relator a distribuir).
2. **Qualificação** do impetrante (ofendido/representante/sucessor) e da **autoridade coatora** (juízo/vara), e indicação do **litisconsorte passivo** (réu da ação penal).
3. **Dos fatos:** o crime, a condição de ofendido do impetrante, o pedido de habilitação como assistente e a **decisão de indeferimento** (com data da ciência — marco do prazo do art. 23).
4. **Do direito:** (a) legitimidade — arts. 268 e 31; (b) tempestividade — art. 269; (c) irrecorribilidade e cabimento do MS — art. 273 do CPP + CF, art. 5º, LXIX; (d) direito líquido e certo — Lei 12.016/2009, art. 1º.
5. **Da liminar** (art. 7º, III): *fumus* + *periculum* (ato iminente), pedindo a suspensão do ato/os efeitos da inadmissão e a **admissão provisória** para participar do ato próximo.
6. **Dos pedidos:** notificação da autoridade; ciência ao MP (custos legis); citação do litisconsorte; ao final, **concessão da segurança** para **admitir o impetrante como assistente de acusação**.
7. **Documentos** (prova pré-constituída) e **valor da causa**.

## Modelo de petição

```
EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE [UF]
(ou TRIBUNAL REGIONAL FEDERAL DA [Nª] REGIÃO)


[NOME DO IMPETRANTE], [qualificação completa], na condição de OFENDIDO
[/representante legal do ofendido / sucessor nos termos do art. 31 do CPP] nos
autos da Ação Penal nº [Nº], em curso perante o Juízo da [VARA] Criminal da
Comarca de [COMARCA], por seu advogado que esta subscreve (procuração anexa),
vem, respeitosamente, impetrar

MANDADO DE SEGURANÇA COM PEDIDO DE LIMINAR

com fundamento no art. 5º, LXIX, da Constituição Federal e na Lei 12.016/2009,
contra ato do MM. JUÍZO DA [VARA] CRIMINAL DA COMARCA DE [COMARCA] (autoridade
coatora), indicando como litisconsorte passivo [NOME DO RÉU], pelas razões de
fato e de direito a seguir expostas.


I — DOS FATOS

O impetrante é o ofendido [/sucessor] no crime de [CRIME] apurado na Ação Penal
em epígrafe, conforme comprovam os documentos anexos [BO/denúncia/laudo/
certidões]. Requereu sua habilitação como ASSISTENTE DE ACUSAÇÃO (petição anexa),
tempestivamente, pois o processo ainda não transitou em julgado (art. 269 do CPP).

Não obstante, o pedido foi INDEFERIDO pela decisão de [DATA] (cópia anexa), da
qual o impetrante tomou ciência em [DATA DA CIÊNCIA] — dentro, portanto, do prazo
decadencial de 120 dias do art. 23 da Lei 12.016/2009.


II — DO CABIMENTO (a via mandamental)

O art. 273 do CPP dispõe que "do despacho que admitir, ou não, o assistente, NÃO
CABERÁ RECURSO". Fechada a via recursal ordinária — e não figurando a hipótese no
rol do art. 581 do CPP —, resta ao ofendido preterido o mandado de segurança
(CF, art. 5º, LXIX; Lei 12.016/2009), remédio próprio contra ato judicial ilegal
que fere direito líquido e certo e não é amparado por recurso com efeito
suspensivo (art. 5º, II, da Lei 12.016/2009, a contrario sensu). Não se trata de
sucedâneo recursal, mas da ÚNICA via disponível.


III — DO DIREITO LÍQUIDO E CERTO

a) Legitimidade (arts. 268 e 31 do CPP). O impetrante é o ofendido
[/representante legal / sucessor CADI], legitimado a intervir como assistente,
condição comprovada por documento (prova pré-constituída), não figurando como
corréu (art. 270).

b) Tempestividade (art. 269 do CPP). O assistente é admitido enquanto não passar
em julgado a sentença, recebendo a causa no estado em que se achar. Eventual
"fase adiantada" não obsta a habilitação.

c) Ilegalidade do ato. Comprovadas legitimidade e tempestividade — questões de
direito resolvíveis à luz dos documentos —, a admissão é DIREITO do ofendido, e
não faculdade discricionária do juízo; o indeferimento constitui ato ilegal e
abusivo, sanável pela via mandamental.


IV — DA LIMINAR (art. 7º, III, da Lei 12.016/2009)

Presente o FUMUS BONI IURIS (a legitimidade documentada e a tempestividade) e o
PERICULUM IN MORA — pois está designado(a) [AUDIÊNCIA DE INSTRUÇÃO / SESSÃO DO
JÚRI / PRAZO RECURSAL] para [DATA], ato que se realizará sem a participação do
assistente, suprimindo os poderes do art. 271 do CPP e causando dano de difícil
reparação —, requer-se a concessão de LIMINAR para suspender os efeitos da
decisão coatora e ADMITIR PROVISORIAMENTE o impetrante como assistente de
acusação, habilitando-o a participar do ato iminente.


V — DOS PEDIDOS

Requer:
a) a concessão da LIMINAR (art. 7º, III), admitindo provisoriamente o impetrante
   como assistente de acusação para participar do ato designado;
b) a notificação da autoridade coatora para prestar informações (art. 7º, I);
c) a citação do litisconsorte passivo [NOME DO RÉU];
d) a ciência ao Ministério Público (custos legis — art. 12);
e) ao final, a CONCESSÃO DA SEGURANÇA, confirmando a liminar, para determinar a
   ADMISSÃO DEFINITIVA do impetrante como ASSISTENTE DE ACUSAÇÃO na Ação Penal nº
   [Nº], com todos os poderes do art. 271 do CPP;
f) a produção de prova exclusivamente documental (rito da Lei 12.016/2009).

Dá-se à causa o valor de [VALOR].

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [UF], [Nº DA AÇÃO PENAL], [VARA], [COMARCA], [NOME DO IMPETRANTE], [qualificação], [condição — ofendido/representante/sucessor], [CRIME], [DATA DA DECISÃO], [DATA DA CIÊNCIA], [NOME DO RÉU], [AUDIÊNCIA/JÚRI/PRAZO], [DATA do ato iminente], [VALOR], [LOCAL], [DATA], [NOME DO ADVOGADO], [NÚMERO] OAB.

## Documentos a anexar (prova pré-constituída — indispensável)

1. **Procuração** com poderes específicos.
2. **Petição de habilitação** como assistente (a que foi indeferida).
3. **Decisão de indeferimento** integral (o ato coator) — com a data da ciência.
4. **Parecer do MP** sobre a admissão (art. 272), se houver nos autos.
5. **Prova da condição de ofendido:** BO, denúncia que nomeia a vítima, laudo, certidões.
6. **Prova da condição de sucessor (CADI, art. 31)**, quando o ofendido faleceu/está ausente: certidão de óbito + prova do vínculo (casamento/união estável/filiação).
7. **Cópia de peças essenciais** da ação penal (denúncia, decisão de recebimento, ata que designa o ato iminente que fundamenta a liminar).

## Roteiro de tese (impetrante — assistente)

1. **Isolar o ponto de direito:** legitimidade (art. 268/31) + tempestividade (art. 269). Não deixar o MS resvalar para o mérito penal.
2. **Fixar a condição de ofendido por documento** — é o que confere **liquidez e certeza**. Sem documento, o MS perde a via (exigiria dilação).
3. **Fundamentar o cabimento no art. 273 do CPP** — não há recurso; o MS é a via constitucional própria (não sucedâneo).
4. **Provar a tempestividade da impetração** — 120 dias do art. 23, contados da ciência.
5. **Sustentar a liminar** com **ato iminente concreto** (audiência/júri/prazo) — o *periculum* é o coração do pedido de urgência.
6. **Indicar litisconsorte e MP custos legis** corretamente — falha aqui gera nulidade/extinção sem mérito.
7. **Passar toda citação pelo gate** `jurisprudencia-stj-stf` antes de peticionar.

## Erros comuns e checklist final

**Anti-padrões (evitar):**
- **Tratar o MS como recurso** e discutir o mérito penal — o objeto é só a legitimidade/tempestividade da habilitação.
- **Impetrar sem prova pré-constituída** da condição de ofendido — sem documento não há direito líquido e certo; o MS será denegado.
- **Errar a autoridade coatora** (apontar o MP ou o cartório em vez do **juiz** que decidiu).
- **Esquecer o litisconsorte passivo** (o réu beneficiado pelo ato) — causa de extinção sem mérito.
- **Perder o prazo decadencial** de 120 dias (art. 23) contado da ciência.
- **Pedir liminar sem *periculum* concreto** — apontar sempre o **ato processual iminente** que ocorrerá sem o assistente.
- **Invocar o art. 270** contra si (habilitar corréu) — verificar que o impetrante não é acusado no mesmo processo.
- **Citar precedente de memória** — passar tudo por `jurisprudencia-stj-stf`.

**Checklist:**
- [ ] Impetrante é **ofendido/representante/sucessor** (art. 268/31) e **não** é corréu (art. 270)?
- [ ] Condição de ofendido/sucessor **comprovada por documento** (liquidez e certeza)?
- [ ] Pedido de habilitação era **tempestivo** (art. 269 — antes do trânsito em julgado)?
- [ ] **Decisão de indeferimento** e **petição de habilitação** anexadas (art. 273 exige constarem dos autos)?
- [ ] **Autoridade coatora** corretamente identificada (o **juiz** que decidiu)?
- [ ] **Litisconsorte passivo** (réu) indicado e a **ciência ao MP** (custos legis) requerida?
- [ ] Impetração dentro dos **120 dias** (art. 23) contados da **ciência**?
- [ ] **Liminar** com *fumus* + *periculum* baseado em **ato iminente** (audiência/júri/prazo)?
- [ ] Pedido final claro: **concessão da segurança para admitir como assistente** (art. 271)?
- [ ] **Citações verificadas** via `jurisprudencia-stj-stf` e **revisão humana** do advogado responsável?

## Lembretes finais

- **MS não é recurso** — é remédio de direito líquido e certo; o campo de discussão é **legitimidade + tempestividade**, nunca o mérito penal.
- **Documento é tudo** — a liquidez do direito nasce da prova pré-constituída da condição de ofendido/sucessor.
- **O art. 273 é a chave do cabimento** — sem recurso, o MS é a via própria (CF, art. 5º, LXIX).
- **A liminar vive do ato iminente** — sem *periculum* concreto, não há urgência a tutelar.
- **Litisconsorte e MP custos legis** integrados corretamente, sob pena de nulidade.
- **Conferir vigência** dos arts. 268–273 do CPP e da Lei 12.016/2009 e passar toda súmula/precedente por `jurisprudencia-stj-stf` antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a ser confirmada pelo advogado responsável, jamais peça protocolável de forma automática. A responsabilidade pela impetração, pelas teses e pela prova é sempre do **advogado** (Estatuto da OAB e Código de Ética; na publicidade, o **Provimento 205/2021 da OAB**). Nenhuma súmula, tese ou precedente pode ser citado de memória: **tudo passa pelo gate de verificação de citações** (`jurisprudencia-stj-stf` / `verificacao-citacoes`) — há sanções reais por jurisprudência inventada por IA. Confira a **redação vigente** da legislação antes de citar. Esta skill atua no **polo do assistente de acusação** (advocacia do ofendido) e não se presta à defesa do acusado.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
