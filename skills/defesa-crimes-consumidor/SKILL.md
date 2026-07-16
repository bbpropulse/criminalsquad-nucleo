---
name: defesa-crimes-consumidor
description: >-
  Use ao defender crime contra as relações de consumo — tipos penais do CDC (Lei 8.078/1990, arts.
  61-80) e do art. 7º da Lei 8.137/1990 (produto impróprio, sonegação de insumo/matéria-prima,
  publicidade enganosa, venda acima de tabela): atipicidade, ausência de dolo, princípio da
  insignificância, laudo/perícia como prova da impropriedade e responsabilidade penal do dirigente.
  Gatilhos: crime contra o consumidor, CDC penal… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, penal-economico, leis-especiais, consumidor]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-consumidor"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-consumidor", "defesa crimes", "crimes consumidor"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos Crimes contra as Relações de Consumo (CDC, arts. 61-80, e Lei 8.137/90, art. 7º)

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

Esta skill orienta a **defesa criminal** nos delitos contra as relações de consumo: os tipos penais do **Título II do CDC (Lei 8.078/1990, arts. 61 a 80)** e, sobretudo, o **art. 7º da Lei 8.137/1990** (crimes contra as relações de consumo). É a interface **penal-empresarial** típica de fornecedores, comerciantes, industriais e dirigentes — e o campo onde a acusação frequentemente confunde **ilícito administrativo/civil de consumo** (PROCON, indenização) com **crime**.

> **Lição central:** o primeiro movimento da defesa é **separar o ilícito de consumo do crime**. Nem toda infração ao CDC é penalmente típica; e vários tipos do art. 7º da Lei 8.137/90 **exigem prova pericial** (impropriedade do produto) e/ou **dolo**. Classifique o tipo imputado, verifique se o **elemento normativo** (produto "impróprio", publicidade "enganosa") está tecnicamente comprovado e se há **dolo** — antes de discutir mérito. Muita denúncia desaba já na atipicidade.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 61-80 do CDC** e do **art. 7º da Lei 8.137/1990**, bem como das **penas** (o art. 7º comina detenção de 2 a 5 anos, ou multa; vários tipos do CDC têm pena máxima que atrai a competência dos **Juizados Especiais Criminais** — Lei 9.099/95). Verifique também a incidência da **transação penal / suspensão condicional do processo (arts. 76 e 89 da Lei 9.099/95)** e do **ANPP (art. 28-A do CPP)**. Toda súmula, tese ou precedente passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de ir para a peça. Na dúvida sobre um número de acórdão, **omitir vence inventar**.

## Delimitação — o que esta skill cobre (e o que não)

- **Cobre:** crimes do **art. 7º da Lei 8.137/90** (produto/mercadoria imprópria, sonegação de insumo, venda acima de tabela, indução a erro sobre natureza/qualidade, entrega de mercadoria em desacordo etc.) e os **crimes do CDC (arts. 61-80)** — em especial a **publicidade enganosa/abusiva criminal (arts. 66, 67, 68)** e a **omissão de informação/nocividade (arts. 63-64)**.
- **NÃO cobre (skill vizinha):** `defesa-sonegacao-fiscal-8137` trata dos **arts. 1º e 2º** da Lei 8.137/90 (ordem tributária) — não do art. 7º; `crimes-ambientais-defesa` cobre a **Lei 9.605/98**. Se o fato for **saúde pública** com produto destinado a consumo, verifique também os **arts. 272-273 do CP** (falsificação/adulteração de produto alimentício ou medicinal), de pena muito mais grave — a defesa disputa a **subsunção** (consumo x saúde pública).
- **Concurso aparente de normas:** um mesmo fato pode tangenciar CDC, art. 7º da Lei 8.137/90 e arts. 272-273 do CP. Definir **qual tipo incide** (princípio da especialidade/consunção) é tese central e pode reduzir drasticamente a pena.

## Base legal

- **Lei 8.137/1990, art. 7º** — crimes contra as relações de consumo (pena: detenção, 2 a 5 anos, ou multa; incisos I a IX). Núcleos típicos: favorecer/vender produto **impróprio** ao consumo (inc. IX); vender/expor mercadoria cuja embalagem/tipo/especificação esteja em desacordo (inc. II); induzir consumidor a erro sobre natureza/qualidade/quantidade (inc. VII); sonegar insumo/matéria-prima (inc. V); elevar preço/exigir vantagem acima de tabela oficial (incs. IV, VI) etc.
- **Lei 8.078/1990 (CDC), arts. 61 a 80** — Título II ("Das Infrações Penais"): omissão de informação sobre periculosidade/nocividade (art. 63); falta de comunicação de nocividade à autoridade e aos consumidores (art. 64); publicidade **enganosa ou abusiva** (art. 67); publicidade que induz a comportamento **perigoso** à saúde/segurança (art. 68); falta de base fática/técnica da publicidade (art. 69); emprego de peças/componentes de reposição usados sem autorização (art. 70); cobrança abusiva/vexatória (art. 71); impedir acesso a cadastro (art. 72) etc.
- **CDC, arts. 66, §1º, e 75** — **responsabilidade penal do dirigente**: respondem o **diretor, administrador ou gerente** que **tiver conhecimento** e **deixar de determinar** as providências (âncora contra a responsabilidade objetiva/por cargo).
- **CP, art. 13, §2º** — dever de agir e nexo (relevância da omissão) — filtro do dirigente omisso.
- **CP, arts. 18 e 20** — só há crime **doloso**, salvo previsão de culpa (a maioria dos tipos de consumo é **dolosa**); **erro de tipo** exclui o dolo.
- **CP, arts. 272 e 273** — falsificação/corrupção/adulteração de produto **alimentício** ou **destinado a fins medicinais** (saúde pública) — fronteira a disputar.
- **Lei 9.099/95, arts. 76, 88, 89** — JECrim, transação penal e suspensão condicional do processo (muitos tipos de consumo são de menor/médio potencial ofensivo).
- **CPP, art. 28-A** — **ANPP** (acordo de não persecução penal), cabível quando presentes os requisitos e ausente violência/grave ameaça.

## Roteiro de análise e defesa (por eixo de tese)

O raciocínio segue do **mais radical** (não há crime) ao **subsidiário** (redução/benefício):

### 1. Atipicidade (a tese mais forte no consumo)

- **Elemento normativo não comprovado tecnicamente.** Nos tipos que exigem produto **"impróprio ao consumo"** (art. 7º, IX, Lei 8.137/90 — remissão ao conceito do art. 18, §6º, do CDC: produto **deteriorado, alterado, adulterado, avariado, falsificado, corrompido, fraudado, nocivo à vida/saúde ou em desacordo com normas regulamentares**), a impropriedade é **elementar** e **só se prova por perícia/laudo**. Sem laudo idôneo (ou com laudo que apenas aponta **irregularidade formal**, como rótulo/prazo, sem demonstrar impropriedade real), **a conduta é atípica**. Ataque a cadeia de custódia da amostra (skill `cadeia-custodia`).
- **Mera irregularidade administrativa não é crime.** Descumprir norma do PROCON/vigilância sanitária, ter produto com validade próxima ou informação incompleta pode gerar **sanção administrativa/civil** sem constituir o **tipo penal**. A defesa exige que a acusação demonstre a **subsunção exata** ao núcleo típico, não a genérica "infração ao CDC".
- **Publicidade: enganosidade/abusividade como elemento normativo.** No crime de publicidade enganosa (art. 67 do CDC), a **enganosidade** deve ser real e apta a **induzir em erro** o consumidor sobre dado essencial; puffing (exagero publicitário reconhecível) e informação verdadeira **não** tipificam. Discutir se a peça publicitária era **capaz de enganar** o consumidor médio.

### 2. Ausência de dolo / erro de tipo

- Os crimes de consumo são, em regra, **dolosos** (CP, art. 18, I). A defesa demonstra que o agente **não sabia** da impropriedade/enganosidade, ou que agiu por **erro** sobre elemento do tipo (CP, art. 20) — p. ex., comerciante que recebeu produto lacrado do fabricante, confiou em laudo/certificado, não tinha como perceber o vício. **Erro de tipo escusável exclui o dolo (e, sem previsão de culpa, o crime).**
- **Delegação e culpa in vigilando não bastam:** responsabilidade penal exige dolo do agente concreto; a existência de falha no controle de qualidade não converte, por si, o dirigente em autor doloso.

### 3. Insignificância / lesividade

- **Princípio da insignificância** pode incidir quando a lesão ao bem jurídico (interesse difuso dos consumidores) for **ínfima**: ínfima quantidade de produto, ausência de risco concreto à saúde, inexpressividade da conduta. Avaliar os vetores clássicos (mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade, inexpressividade da lesão). **Tese sensível** em delitos de perigo à saúde/coletividade — sustentar com parcimônia e prova concreta da inofensividade. [Aplicabilidade da insignificância a crime de consumo/perigo — conferir posição atual do STJ/STF via `jurisprudencia-stj-stf`.]

### 4. Responsabilidade penal do dirigente — combater a imputação por cargo

- **Não há responsabilidade penal objetiva.** A denúncia que imputa o crime ao sócio/diretor **só pela posição** na empresa é inepta: deve descrever o **vínculo concreto** entre a conduta do dirigente e o fato (nexo de causalidade e dolo). Exigir da acusação a **individualização da conduta** (quem sabia, quem decidiu, quem tinha o poder de evitar).
- **Filtro do art. 75 c/c art. 66, §1º, do CDC e do art. 13, §2º, do CP:** o dirigente responde por **omissão** apenas se **tinha conhecimento** da conduta e **poder de determinar** a correção e **omitiu-se**. Sem ciência e sem poder de agir, não há crime omissivo impróprio.
- **Denúncia genérica em crime societário:** admite-se certa flexibilização na descrição em crimes de gabinete, mas **não a supressão** do vínculo mínimo com o fato — a defesa maneja **HC para trancamento** ou **rejeição/absolvição sumária** quando falta a mínima descrição individualizadora. [Standard de denúncia em crime societário — conferir precedentes atuais via `jurisprudencia-stj-stf`.]

### 5. Teses processuais e de prova

- **Cadeia de custódia da amostra** (CPP, arts. 158-A a 158-F): impugnar coleta, lacre, transporte e exame do produto tido por impróprio — falha na cadeia contamina o laudo (skill `cadeia-custodia`).
- **Nulidade da perícia** ausente/unilateral: se a impropriedade é elementar, laudo oficial idôneo é imprescindível; contrapor com **assistente técnico** e quesitos.
- **Prescrição:** penas relativamente baixas (art. 7º: 2 a 5 anos; vários tipos do CDC ainda menores) tornam a **prescrição** — inclusive **retroativa** e **intercorrente** — tese central. Calcular pela pena em concreto quando possível (skill/calculadora `calculadora-prescricao`).
- **Bis in idem / concurso aparente:** afastar dupla imputação pelo mesmo fato (CDC + art. 7º + arts. 272/273 CP) pela **especialidade/consunção**.

### 6. Eixo negocial e despenalizador (subsidiário)

- **ANPP (CPP, art. 28-A):** cabível em boa parte desses crimes (sem violência/grave ameaça; pena mínima < 4 anos), mediante confissão e condições. Avaliar antes do mérito (skill `anpp`).
- **Transação penal e suspensão condicional do processo (Lei 9.099/95, arts. 76 e 89):** muitos tipos de consumo são de menor/médio potencial ofensivo — pleitear os institutos no JECrim.
- **Reparação/composição:** a correção do vício, o recall e a indenização ao consumidor pesam favoravelmente (dosimetria, arrependimento posterior — CP, art. 16, quando cabível — e política de acordos).

## Teses e contra-teses (defesa × acusação)

| Tese defensiva | Fundamento | Contra-tese acusatória típica |
|---|---|---|
| **Atipicidade — impropriedade não comprovada** | Elemento normativo exige perícia idônea (CDC, art. 18, §6º) | Laudo/prova indireta demonstraria a impropriedade |
| **Irregularidade administrativa, não crime** | Sanção PROCON/sanitária ≠ tipo penal | O fato preencheria o núcleo do art. 7º/CDC |
| **Ausência de dolo / erro de tipo** | CP, arts. 18 e 20 | Dolo eventual pela assunção do risco do negócio |
| **Publicidade não enganosa (puffing/verdade)** | Enganosidade real e apta a induzir erro (art. 67 CDC) | Consumidor médio teria sido induzido |
| **Insignificância** | Lesão ínfima ao bem difuso | Crime de perigo protege a coletividade — não admite bagatela |
| **Sem responsabilidade do dirigente** | Vedação à responsabilidade objetiva; art. 75 CDC + art. 13, §2º, CP | Dirigente tinha o dever de garante e o poder de evitar |
| **Denúncia inepta (societário)** | Falta de individualização da conduta | Flexibilização admitida em crimes de gabinete |
| **Prescrição** | Penas baixas; cálculo pela pena em concreto | Marcos interruptivos afastariam a prescrição |
| **Concurso aparente (especialidade/consunção)** | Um único tipo incide sobre o fato | Concurso material/formal entre CDC, art. 7º e CP |

## Súmulas e precedentes (sob Citation Gate — conferir antes de citar)

> **Regra do gate:** cite com certeza apenas **dispositivos de lei e súmulas notórias**. Para **qualquer** número de HC/REsp/RE, informativo ou tema, marque **[NÃO VERIFICADO]** e confirme via `jurisprudencia-stj-stf`. Prefira ensinar a **tese e o dispositivo** a arriscar um acórdão.

- **Súmula 645/STJ** — o crime de fraude/adulteração de produto (fronteira dos arts. 272-273 do CP) é de perigo abstrato/comum — relevante para disputar a **subsunção consumo × saúde pública**. [Conferir enunciado e alcance exatos via `jurisprudencia-stj-stf`.]
- **Insignificância em crimes de perigo à saúde/consumo** — há orientação **restritiva** dos Tribunais Superiores; sustentar com prova concreta da inofensividade. [NÃO VERIFICADO — conferir posição atual.]
- **Denúncia em crime societário / individualização da conduta** — jurisprudência consolidada exige o vínculo mínimo do dirigente com o fato (repúdio à responsabilidade objetiva). [NÃO VERIFICADO — buscar o precedente atual antes de citar número.]
- **Competência (JECrim × vara comum)** e cabimento de transação/suspensão — depende da pena máxima do tipo concreto; conferir. [NÃO VERIFICADO.]
- **Cadeia de custódia e nulidade probatória (arts. 158-A ss. CPP)** — evolução jurisprudencial recente; conferir standard atual antes de invocar consequência de nulidade. [NÃO VERIFICADO.]

Qualquer outro enunciado (informativo, tema repetitivo, HC específico) **só entra na peça após verificação**. Se não confirmar, **não cite o número** — sustente pela lei e pela tese.

## Erros comuns e checklist da defesa

**Checklist antes de peticionar:**

- [ ] **Tipo penal exato identificado** (qual inciso do art. 7º da Lei 8.137/90 ou qual artigo do CDC) — e não a genérica "infração ao consumidor"?
- [ ] **Elemento normativo comprovado?** Há **laudo/perícia idônea** demonstrando a impropriedade / a enganosidade — ou só irregularidade formal?
- [ ] **Cadeia de custódia** da amostra íntegra (coleta, lacre, exame)? (skill `cadeia-custodia`)
- [ ] **Dolo demonstrado** pela acusação? Cabe **erro de tipo** (produto lacrado do fabricante, confiança em certificado)?
- [ ] **Fronteira com os arts. 272-273 do CP** (saúde pública) avaliada — a defesa disputa a subsunção menos gravosa?
- [ ] **Concurso aparente de normas** resolvido (especialidade/consunção) — sem bis in idem?
- [ ] **Responsabilidade do dirigente** individualizada pela denúncia (ciência + poder de evitar + omissão)? Se não, **inépcia/trancamento**?
- [ ] **Insignificância** viável e sustentada com prova concreta da inofensividade?
- [ ] **Prescrição** calculada (retroativa/intercorrente; pena em concreto)? (skill `calculadora-prescricao`)
- [ ] **Competência (JECrim?)** e cabimento de **ANPP / transação / suspensão** verificados? (skills `anpp`, Lei 9.099/95)
- [ ] **Reparação/recall/composição** documentados para a dosimetria e acordos?
- [ ] **Toda citação** passou pelo gate (`verificacao-citacoes` / `jurisprudencia-stj-stf`)?

**Anti-padrões (evitar):**

- Tratar **ilícito administrativo de consumo** (PROCON/sanitária) como se fosse automaticamente **crime** — sem subsunção ao núcleo típico.
- Aceitar a impropriedade do produto **sem laudo** (ou com laudo que só aponta vício formal de rótulo/prazo, não impropriedade real).
- Ignorar a **cadeia de custódia** da amostra periciada.
- Deixar de disputar a **fronteira com os arts. 272-273 do CP** (aceitar o tipo mais grave sem discutir subsunção).
- Aceitar imputação ao dirigente **por cargo**, sem exigir a individualização da conduta e o **art. 75 do CDC**.
- Presumir **dolo** onde há erro de tipo escusável ou mera culpa (que, sem previsão legal, não tipifica).
- Esquecer da **prescrição** (penas baixas) e dos **benefícios despenalizadores** (ANPP, transação, suspensão).
- Citar HC/REsp/tema **de memória** — jurisprudência inventada gera sanção real.

## Lembretes finais

- **Separar consumo de crime primeiro:** nem toda infração ao CDC é típica; muitos tipos exigem **perícia** e **dolo**.
- **Impropriedade = elemento normativo** → sem laudo idôneo e cadeia de custódia íntegra, **atipicidade**.
- **Dirigente:** vedada a responsabilidade objetiva — exigir **ciência + poder de evitar + omissão** (art. 75 CDC; art. 13, §2º, CP).
- **Fronteira com os arts. 272-273 do CP** (saúde pública) muda radicalmente a pena — disputar a subsunção.
- **Penas baixas** → **prescrição** e **institutos despenalizadores** (ANPP, transação, suspensão) quase sempre na mesa.
- **Conferir vigência** dos arts. 61-80 do CDC e do art. 7º da Lei 8.137/90, e **toda** citação via `verificacao-citacoes` / `jurisprudencia-stj-stf` **antes** de peticionar.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à estratégia e à redação; a peça final, a subsunção e as citações são de responsabilidade do **advogado** (CED/OAB, art. 2º; Provimento OAB 205/2021 quanto à comunicação/publicidade). Não substitui o exame do caso concreto e dos autos.
- **Polo:** esta skill é de **defesa** (fornecedor/dirigente/empresa). O roteador deve **conferir o polo** do escritório em `_criminalsquad/_memory/company.md`; havendo atuação como **assistente de acusação** (consumidor lesado) ou **MP**, adaptar o enfoque e observar a ética do respectivo polo (CNMP; LC 80/94, se Defensoria).
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória — sanções reais existem por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
