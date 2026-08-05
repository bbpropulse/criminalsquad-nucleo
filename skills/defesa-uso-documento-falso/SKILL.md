---
name: defesa-uso-documento-falso
description: >-
  Use ao defender acusado de USO de documento falso (CP, art. 304) — fazer uso de qualquer documento
  falsificado ou alterado. Explora a consunção falsário/usuário (quem falsifica e usa responde por
  um só crime — pós-fato impunível), o uso ESPONTÂNEO x PROVOCADO (exibição exigida pela autoridade
  em abordagem não configura o tipo), a remissão de pena ao documento usado (art. 297/298/299/302),
  a atipicidade por falso grosseiro… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica, falso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-uso-documento-falso"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-uso-documento-falso", "defesa documento", "documento falso"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Uso de Documento Falso (CP, art. 304)

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

Esta skill orienta a **defesa penal do acusado** do crime de **uso de documento falso** (CP, art. 304): *"fazer uso de qualquer dos papéis falsificados ou alterados, a que se referem os arts. 297 a 302"*. É, na prática, o crime contra a fé pública **mais frequente na ponta** — nasce na abordagem policial e na blitz, quando alguém exibe CNH, RG ou CRLV falso. Diferente das skills de **quem falsifica** (`defesa-falsificacao-documento-publico` / `defesa-falsificacao-documento-particular`), esta cuida de **quem usa** — e reúne teses defensivas próprias: a **consunção falsário/usuário**, a distinção **uso espontâneo x provocado** e a **remissão da pena** ao tipo do documento empregado.

> **Lição central:** o art. 304 é um **tipo remissivo** e a conduta nuclear é **"fazer uso"**. Antes de discutir dolo ou pena, responda a três perguntas: (1) o assistido **usou** o documento **espontaneamente**, ou apenas o **exibiu porque a autoridade exigiu** numa abordagem? (2) ele é o **próprio falsário** que também usou, ou terceiro que só usou documento alheio? (3) o documento é **idôneo** a enganar ou é **falso grosseiro**? A resposta muda a tese — e, muitas vezes, a própria tipicidade.

> **Cautela de vigência (obrigatória antes de citar):** o art. 304 do CP não sofreu alteração recente, mas **confirme a redação vigente** dele e dos arts. **297 a 302** a que ele remete (a **pena do 304 é a do documento usado** — daí a remissão). Toda súmula, tema repetitivo, informativo ou número de acórdão — em especial a **Súmula 17/STJ** (consunção do falso pelo estelionato) e o debate sobre **uso provocado x espontâneo** e sobre **competência** — passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de ir para a peça. Na dúvida sobre um número, **ensine a tese e cite o dispositivo — não arrisque o acórdão**.

## Base legal

- **CP, art. 304** — *"Fazer uso de qualquer dos papéis falsificados ou alterados, a que se referem os arts. 297 a 302"*. **Pena: a cominada à falsificação ou à alteração** (tipo remissivo — a reprimenda é a do documento empregado).
- **CP, art. 297** — falsificação de **documento público** (pena reclusão 2 a 6 anos e multa) → é a pena do 304 quando o documento usado é público (CNH, RG, passaporte, CTPS).
- **CP, art. 298** — falsificação de **documento particular** → pena do 304 quando o documento é particular.
- **CP, art. 299** — **falsidade ideológica** (documento formalmente íntegro, conteúdo falso) → o "uso" respectivo herda essa pena.
- **CP, art. 302** — **falsidade de atestado médico** (tipo próprio; ver `defesa-uso-atestado-falso-e-certidao-falsa`).
- **CP, art. 232** — conceito de **documento** (escrito com autor certo e conteúdo juridicamente relevante) — elementar do objeto.
- **CP, art. 17** — **crime impossível** (base da tese de **falso grosseiro** / ineficácia absoluta do meio).
- **CP, art. 171** — **estelionato**: quando o documento falso serve **só** de ardil para a vantagem indevida, discute-se a **consunção** (Súmula 17/STJ).
- **CP, art. 307** — **falsa identidade** (crime **verbal**, sem documento): a linha divisória com o 304 é a **presença de documento** (ver `defesa-falsa-identidade`).
- **CF, art. 5º, LXIII e LXIV** — silêncio e não autoincriminação (sustentação do **uso provocado** e da autodefesa na abordagem).
- **CPP, art. 158-A a 158-F** — cadeia de custódia do documento; **art. 159 e 174** — perícia/exame documentoscópico (materialidade do falso).
- **CP, arts. 44 e 59** — se sobrevier condenação: dosimetria e substituição (aponte `calculadora-dosimetria`; **não calcule aqui**).

## Passo 0 — a classificação que define tudo

| Pergunta | Se SIM | Se NÃO |
|---|---|---|
| O objeto é **documento** (CP art. 232) e **falsificado/alterado** (não é o documento verdadeiro de outrem)? | segue no art. 304 | usar documento **autêntico alheio** ≠ 304 (avaliar outro tipo/atipicidade) |
| Houve **uso** — apresentação, exibição, invocação do documento perante alguém que nele confia? | conduta nuclear presente | mera **posse** sem uso **não** é 304 (posse ≠ uso) |
| O **próprio agente** foi quem **falsificou** o documento e depois o usou? | **um só crime** (consunção — pós-fato impunível) | terceiro que só usa responde pelo **304** |
| A imitação é **idônea** para enganar o homem médio? | crime em tese | **falso grosseiro** → atipicidade (crime impossível, art. 17) |
| O documento serviu **só** de ardil de um **estelionato** e nele se exauriu? | discutir **consunção** (Súmula 17/STJ) | falso com **potencialidade lesiva autônoma** subsiste |

> Errar a classificação é a falha mais comum: tratar **posse** como **uso**, ou punir **em concurso** o falsário que também usou. **A subsunção equivocada é, por si, matéria de absolvição ou de desclassificação.**

## As frentes de defesa (roteiro, por ordem de força)

### 1. Consunção falsário/usuário — quem falsifica e usa responde por UM crime
A tese **mais própria** desta skill. Quem **fabrica** o documento e depois o **usa** pratica **um único crime**: o **uso é pós-fato (post factum) impunível**, absorvido pela falsificação (a maior desvalia), pelo princípio da **consunção** e vedação ao *ne bis in idem*.

- **Tese:** o assistido que falsificou e usou o mesmo documento responde **só pela falsificação** (art. 297/298/299), **não** em concurso com o 304. Não se somam as penas.
- **Espelho inverso:** o **terceiro que apenas usa** documento falsificado por outrem, sem participar da fabricação, responde pelo **304** (e não pelo 297) — ajustar a imputação à conduta concreta do assistido.
- **Ataque à denúncia:** recusar a **cumulação 297 + 304** pela mesma cártula e pela mesma pessoa; é bis in idem.
- **Contra-tese (acusação):** sustentar autonomia das condutas quando o uso ocorre em **contexto diverso** e com **nova potencialidade lesiva**. Rebater demonstrando a **unidade de desígnio** e o esgotamento do uso no mesmo substrato.

### 2. Uso espontâneo x uso provocado — a exibição exigida pela autoridade
O verbo é **"fazer uso"**, o que pressupõe **conduta voluntária e espontânea** de invocar o documento. **Exibir o documento porque a autoridade policial o exigiu**, numa abordagem/blitz, é comportamento **provocado** — e há forte corrente que **descaracteriza o uso típico**, sobretudo quando serve à **autodefesa** (não autoincriminação — CF, art. 5º, LXIII).

- **Tese:** a exibição **provocada** pela exigência da autoridade não configura o "uso" do art. 304; falta a **espontaneidade** da conduta nuclear. Cabível, ainda, ler o ato como **autodefesa** atípica.
- **Distinção fina com a Súmula 522/STJ:** a súmula trata de **falsa identidade** (art. 307, conduta **verbal**), **não** do uso de documento (art. 304). **Não deixe a acusação transportar** o entendimento sumular do 307 para o 304 sem mais — são tipos e substratos distintos.
- **[NÃO VERIFICADO]** — o **estado atual** da jurisprudência sobre "uso provocado x espontâneo" no art. 304 **oscila**; confira teor, precedentes e eventual overruling na skill `jurisprudencia-stj-stf` antes de sustentar. **Ensine a tese e o dispositivo; não cite número de HC/REsp de memória.**

### 3. Falso grosseiro / ausência de potencialidade lesiva → atipicidade
O uso punível pressupõe documento **idôneo a iludir** o destinatário (o homem médio). Documento **grosseiramente falsificado**, perceptível a olho nu, **não tem potencialidade lesiva**: o meio é **absolutamente ineficaz** → **crime impossível** (CP, art. 17) → atipicidade.

- **Tese:** falsificação grosseira, inapta a enganar, não lesa a fé pública → fato atípico (art. 17 CP).
- **Prova:** **exame documentoscópico**, fotos do documento (papel, fonte, hologramas, chip, brasões, numeração, QR-code), ausência de engano concreto.
- **Nuance:** parte da jurisprudência entende que o falso grosseiro que ainda assim ludibria a vítima pode remanescer como **estelionato** (crime impossível quanto ao falso, não quanto à fraude) — antecipe e module o pedido. **[NÃO VERIFICADO]** — conferir o estado atual em `jurisprudencia-stj-stf`.

### 4. Consunção pelo crime-fim (Súmula 17/STJ) — o uso que se exaure no estelionato
Quando o documento falso serve **apenas** de ardil de um **estelionato** e nele **se esgota**, sem mais potencialidade lesiva, o falso (e o seu uso) é **absorvido** pelo crime-fim (**consunção**).

- **Súmula 17/STJ:** *"Quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido."* (conferir teor e aplicação atual em `jurisprudencia-stj-stf`).
- **Efeito:** afasta a condenação autônoma pelo 304 (cuja pena, sendo o documento público, é a do 297 — 2 a 6 anos, maior que a do estelionato-base), **beneficiando a dosimetria** e podendo antecipar a **prescrição**.
- **Limite (contra-tese):** se o documento **permanece apto** a novas lesões (CNH falsa que segue em poder do agente, usável em outras abordagens), **não** há exaurimento e o uso **subsiste** autonomamente. A defesa demonstra o **esgotamento concreto** no crime-fim único.

### 5. Ausência de dolo / erro de tipo — o "sabidamente falso"
O 304 é **doloso**; não há forma culposa. O tipo exige que o agente **saiba** da falsidade do documento que usa.

- **Tese:** o assistido que **recebeu o documento de terceiro** acreditando ser genuíno (ex.: comprou "CNH" que supunha regular, recebeu documento de sócio/empregador) **não tem dolo** de usar documento **sabidamente** falso → **erro de tipo** (art. 20 CP), que **exclui o dolo**.
- **Prova:** origem do documento, ausência de proveito compatível com o conhecimento da falsidade, contexto de boa-fé.

### 6. Posse não é uso / atipicidade da conduta nuclear
- **Tese:** a **mera posse ou guarda** do documento falso, sem **exibição/apresentação** perante alguém que nele confie, **não realiza** o verbo "fazer uso" — é conduta **atípica** para o 304 (podendo, no máximo, sinalizar preparação, impunível).
- Recusar a condenação por 304 quando os autos só demonstram que o documento **estava com** o assistido, sem prova de **efetivo uso**.

### 7. Nulidades e ataques probatórios próprios
- **Exame documentoscópico (CP art. 304; CPP art. 158-159):** a materialidade do falso depende, em regra, de **perícia**. Ausência de laudo, laudo genérico ou exame que **não afirma a idoneidade** da falsificação abrem espaço para absolvição por dúvida (*in dubio pro reo*). Requerer **esclarecimentos**, **assistente técnico** e, se preciso, **nova perícia** (CPP art. 159, §§).
- **Cadeia de custódia (CPP 158-A a 158-F):** vícios na coleta, lacre, guarda e identificação do documento apreendido comprometem a prova material.
- **Legalidade da abordagem (CPP art. 244):** se a busca pessoal/abordagem que revelou o documento foi **sem fundada suspeita**, a prova derivada pode ser **ilícita por derivação** (CF, art. 5º, LVI — frutos da árvore envenenada). Atacar a **fundada suspeita** na origem.
- **Autoria e "uso":** a acusação precisa provar **quando, onde e perante quem** o documento foi usado — vaguidade na descrição do ato de uso enfraquece a materialidade.

## Distinções que a defesa não pode errar

- **Uso (304) x Falsificação (297/298):** **fazer uso** ≠ **fabricar/alterar**. Quem **só** usa documento alheio → 304; quem **fabricou** → 297/298 (e o uso pelo próprio falsário é absorvido — frente 1).
- **Uso de documento falso (304) x Falsa identidade (307):** o 304 exige **documento**; o 307 é **verbal**, sobre a identidade, **sem documento**. Se houve **exibição de documento**, o tipo é o **304**, **não** o 307 — e não se aceita **cumulação 304 + 307** pela mesma conduta (ver `defesa-falsa-identidade`).
- **Uso de documento público falso x particular:** a **pena** do 304 é a do documento usado (297 público, 2–6 anos; 298 particular, pena menor). Classificar o documento é definir a pena.
- **Uso (304) x Uso de atestado/certidão falsa (302):** atestado médico e certidão têm **tipo/skill próprios** — ver `defesa-uso-atestado-falso-e-certidao-falsa`.

## Teses x contra-teses (síntese)

| Tese da DEFESA | Fundamento | Contra-tese da acusação | Resposta da defesa |
|---|---|---|---|
| Consunção falsário/usuário | uso é pós-fato impunível (consunção; *ne bis in idem*) | condutas autônomas / contextos diversos | unidade de desígnio; esgotamento no mesmo substrato; vedar 297 + 304 |
| Uso provocado ≠ típico | "fazer uso" pressupõe espontaneidade; autodefesa (CF 5º LXIII) | exibição já é uso; transportar Súmula 522 | Súmula 522 é do 307 (verbal), não do 304; falta espontaneidade **[verificar]** |
| Falso grosseiro → atipicidade | crime impossível (art. 17) | falso idôneo; ou remanesce estelionato | laudo pericial mostrando grosseria; ausência de engano concreto |
| Consunção pelo estelionato | Súmula 17/STJ | documento com lesividade autônoma subsistente | demonstrar exaurimento concreto no crime-fim único |
| Erro de tipo / sem dolo | falta o "sabidamente falso" (art. 20 CP) | dolo evidenciado pelas circunstâncias | origem do documento; boa-fé; ausência de proveito |
| Posse não é uso | verbo nuclear "fazer uso" | posse já basta | sem exibição/apresentação, atípico para o 304 |
| Prova ilícita | abordagem sem fundada suspeita (art. 244 CPP) | flagrante regular | ilicitude por derivação (CF, art. 5º, LVI) |

## Súmulas e precedentes (sob o Citation Gate)

Cite com certeza apenas os **dispositivos de lei** acima. Para qualquer **súmula, tema ou acórdão**, confirme número, teor e vigência na skill `jurisprudencia-stj-stf` antes de usar:

- **Súmula 17/STJ** — consunção do falso pelo estelionato quando nele se exaure (frente 4). **Notória; ainda assim conferir teor e aplicação atual.**
- **Súmula 522/STJ** — trata de **falsa identidade** (art. 307), **não** do 304. Citada aqui só para **impedir o transporte indevido** ao uso de documento — não a invoque como se fosse do 304.
- **Súmula 546/STJ** e enunciados sobre **competência** (Justiça Federal em documento de interesse da União — passaporte, CTPS, documento previdenciário federal): **[NÃO VERIFICADO]** número/enunciado — confira em `jurisprudencia-stj-stf`.
- Entendimentos sobre **uso provocado x espontâneo**, **falso grosseiro** e **(in)aplicabilidade da insignificância** ao 304 são **jurisprudenciais** e **oscilam** — **não cite número de HC/REsp/RE de memória**. Ensine a **tese** e o **dispositivo**; se precisar de precedente específico, **busque e verifique** em `jurisprudencia-stj-stf`.

> Regra de ouro do Citation Gate: **omitir vence inventar**. Prefira "há entendimento no sentido de X, a confirmar em jurisprudência atual" a arriscar um número de acórdão.

## Dosimetria e reflexos (método — não calcule aqui)

- **Pena remissiva:** a do documento usado — **297** (público): reclusão **2 a 6 anos e multa**; **298** (particular): pena menor. Descrever a metodologia trifásica e **apontar** a skill `calculadora-dosimetria` (não gerar cálculo determinístico nesta skill).
- **Concurso e continuidade:** pluralidade de usos/documentos pode configurar **concurso formal** (art. 70) ou **crime continuado** (art. 71) — discutir requisitos objetivos/subjetivos; impacto relevante na pena.
- **Substituição e despenalização:** conforme a pena concreta, avaliar **substituição por restritiva de direitos** (art. 44 CP) e, se cabível pelo rito, **suspensão condicional do processo** (art. 89, Lei 9.099/95) — verificar pena mínima e requisitos.
- **Prescrição:** com a **consunção** (frentes 1 e 4) ou a desclassificação, muda o marco prescricional. Para o cálculo, **aponte** a skill `calculadora-prescricao` (não calcular aqui).

## Erros comuns / checklist da defesa

- [ ] Confirmei se houve **efetivo uso** (exibição/apresentação) ou **mera posse** (posse ≠ uso)?
- [ ] O uso foi **espontâneo** ou **provocado** pela exigência da autoridade na abordagem?
- [ ] O assistido é o **próprio falsário** (uso absorvido — só o 297/298) ou **terceiro** que só usou (304)?
- [ ] Recusei a **cumulação 297 + 304** pela mesma cártula/pessoa (bis in idem)?
- [ ] Avaliei **falso grosseiro / potencialidade lesiva** (crime impossível — art. 17)?
- [ ] Verifiquei se o uso **se exauriu** no estelionato (consunção — Súmula 17/STJ) ou tem lesividade autônoma?
- [ ] Testei **erro de tipo** — faltou o **"sabidamente falso"** (art. 20 CP)?
- [ ] Ataquei o **exame documentoscópico** ausente/genérico e a **cadeia de custódia** (CPP 158-A a 158-F)?
- [ ] A **abordagem** teve **fundada suspeita** (art. 244 CPP)? Se não, arguir **prova ilícita** (CF, art. 5º, LVI)?
- [ ] Classifiquei o **documento** (público 297 x particular 298) para definir a **pena** remissiva?
- [ ] Modulei o pedido: **absolvição** (atipicidade/erro de tipo) → **desclassificação/consunção** → **dosimetria** (subsidiário)?
- [ ] Apontei `calculadora-dosimetria` e `calculadora-prescricao` para os cálculos (sem calcular aqui)?
- [ ] Passei **todas** as súmulas/precedentes pela skill `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aceitar **concurso 297 + 304** quando o assistido **falsificou e usou** o mesmo documento (o uso é pós-fato impunível).
- Tratar **posse** como **uso** — o verbo nuclear é "fazer uso"; posse isolada é atípica para o 304.
- Deixar a acusação **transportar a Súmula 522/STJ** (que é do art. 307, verbal) para o uso de documento (304).
- Tratar como **idôneo** o documento **grosseiro** (crime impossível, art. 17) — ou o contrário.
- Deixar de arguir **consunção pelo estelionato** (Súmula 17/STJ) quando o uso se exauriu no crime-fim.
- Ignorar o **erro de tipo** de quem recebeu o documento sem saber da falsidade.
- Errar a **pena remissiva** (usar a do 297 quando o documento é particular — 298).
- Citar número de **HC/REsp/Súmula de memória** — sempre pelo Citation Gate.

## Vias correlatas (não confundir)

- **Quem falsifica documento público** → `defesa-falsificacao-documento-publico`.
- **Quem falsifica documento particular** → `defesa-falsificacao-documento-particular`.
- **Falsa identidade** (art. 307 — verbal, sem documento) → `defesa-falsa-identidade`.
- **Uso de atestado/certidão falsa** (art. 302) → `defesa-uso-atestado-falso-e-certidao-falsa`.
- **Estelionato** como crime-fim absorvente (art. 171) → skill de defesa de estelionato, quando houver.
- **Impugnar o documento nos autos** (desentranhamento/perícia) → `incidente-falsidade-documental` (planos distintos, que podem coexistir).

## Lembretes finais

- **Três perguntas primeiro:** uso espontâneo ou provocado? falsário-usuário ou só usuário? documento idôneo ou grosseiro?
- **Falsário que usa = um crime só** (consunção; pós-fato impunível) — vedar 297 + 304.
- **Exibição provocada** na abordagem ≠ "fazer uso" espontâneo — e **Súmula 522 é do 307, não do 304**.
- **Falso grosseiro** = crime impossível (art. 17) → **atipicidade**.
- **Consunção pelo estelionato** (Súmula 17/STJ): uso que se exaure no crime-fim é por ele absorvido.
- **Posse ≠ uso**; **erro de tipo** afasta o "sabidamente falso".
- **Pena é remissiva** — a do documento usado (297 público / 298 particular).
- **Cálculos** → `calculadora-dosimetria` / `calculadora-prescricao`. **Citações** → `jurisprudencia-stj-stf`. **Sempre.**

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. A responsabilidade pela tese, pela subsunção e pelas citações é sempre do **advogado** (EAOAB, art. 2º; CED; Provimento 205/2021 quanto à comunicação/publicidade). Toda lei, súmula, tese ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes do uso — há sanções reais por jurisprudência inventada por IA; **omitir vence inventar**.

**Polo:** esta skill é de **DEFESA** (advocacia — OAB + Provimento 205/2021). O chefe-roteador deve **conferir o polo** da instituição no `company.md`; se o pedido for do polo acusatório (MP/assistente), redirecionar à skill própria de acusação (`acusacao-crimes-fe-publica-denuncia`).

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, memoriais, apelação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
