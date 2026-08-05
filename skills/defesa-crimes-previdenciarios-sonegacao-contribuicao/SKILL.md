---
name: defesa-crimes-previdenciarios-sonegacao-contribuicao
description: >-
  Use ao defender CRIMES PREVIDENCIÁRIOS — apropriação indébita previdenciária (CP, art. 168-A) e
  sonegação de contribuição previdenciária (CP, art. 337-A) — crimes omissivos próprios contra a
  Administração Pública. Cobre a extinção da punibilidade pelo PAGAMENTO integral e a SUSPENSÃO pelo
  PARCELAMENTO, a dificuldade financeira/inexigibilidade de conduta diversa, a ausência de dolo
  específico, o perdão judicial e o §3º do… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, previdenciario, tributario, white-collar, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-previdenciarios-sonegacao-contribuicao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-previdenciarios-sonegacao-contribuicao", "defesa crimes", "sonegacao contribuicao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes Previdenciários (CP, arts. 168-A e 337-A)

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

Esta skill orienta a **estratégia defensiva** nos dois crimes previdenciários nucleares do Código Penal: a **apropriação indébita previdenciária** (art. 168-A) — deixar de repassar à Previdência as contribuições **descontadas** dos segurados no prazo e forma legais — e a **sonegação de contribuição previdenciária** (art. 337-A) — suprimir ou reduzir contribuição mediante omissão de folha, de GFIP ou de informações à Administração. São crimes **omissivos próprios**, do capítulo dos crimes contra a Administração Pública (white-collar), e sua defesa gira em torno de três eixos: **as válvulas do pagamento/parcelamento**, a **inexigibilidade de conduta diversa** por dificuldade financeira e a **ausência do dolo específico** de apropriação/sonegação.

> **Lição central:** o 168-A **não pune inadimplência** — pune quem **desconta** a contribuição do salário do empregado (a retém em mãos) e **não repassa** ao INSS. A elementar é o **desconto prévio**: sem prova de que a contribuição foi efetivamente descontada e retida, não há o tipo. E, em ambos os crimes, o **pagamento integral extingue a punibilidade** e o **parcelamento suspende** a pretensão punitiva — antes de qualquer tese de mérito, verifique o **estado do crédito previdenciário**: é a defesa mais forte e a mais barata.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 168-A e 337-A do CP (incluídos pela **Lei 9.983/2000**), com seus parágrafos — as figuras equiparadas do 168-A, §1º; o **perdão judicial e a extinção pelo pagamento** do 168-A, §3º; as causas de exclusão/perdão do 337-A, §§ 1º a 3º; e os patamares de valor. Confira também o regime das leis extravagantes de pagamento/parcelamento (Lei 10.684/03; Lei 9.430/96; Lei 11.941/09) e **toda** súmula, tema ou acórdão via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nenhuma citação de memória.

## Base legal

- **Art. 168-A, *caput*, CP** — "Deixar de repassar à previdência social as contribuições recolhidas dos contribuintes, no prazo e forma legais ou convencionais". Pena: reclusão de **2 a 5 anos**, e multa.
- **Art. 168-A, §1º, CP** — figuras **equiparadas** (deixar de recolher contribuição descontada de pagamento a segurados/terceiros; de recolher valores descontados por lei/contrato; de pagar benefício reembolsado). Verificar a redação exata na fonte.
- **Art. 168-A, §2º, CP** — **extinção da punibilidade** se o agente, **espontaneamente**, declara e confessa as contribuições e presta as informações **antes do início da ação fiscal**.
- **Art. 168-A, §3º, CP** — o juiz **pode** deixar de aplicar a pena (**perdão judicial**) ou aplicar só multa se o agente for **primário e de bons antecedentes**, desde que: (I) tenha **promovido o pagamento** após o início da ação fiscal e antes de oferecida a denúncia; **ou** (II) o valor das contribuições devidas, inclusive acessórios, seja **igual ou inferior** ao mínimo para ajuizamento de execução fiscal (**insignificância legislada** — patamar a conferir na norma vigente).
- **Art. 337-A, CP** — **sonegação de contribuição previdenciária**: suprimir ou reduzir contribuição/acessórios mediante (I) omissão de folha de pagamento, GFIP ou documento de informações; (II) omissão de receita/lucro; (III) omissão de segurado. Pena: reclusão de **2 a 5 anos**, e multa.
- **Art. 337-A, §1º, CP** — **extinção da punibilidade** se o agente, **espontaneamente**, declara e confessa antes do início da ação fiscal.
- **Art. 337-A, §2º e §3º, CP** — perdão judicial/só multa ao primário de bons antecedentes e **insignificância** pelo valor (conferir patamar e redação atuais).
- **Lei 8.212/91** — Plano de Custeio da Seguridade; define a **obrigação** de recolher e as contribuições — a moldura extrapenal que integra o tipo.
- **Lei 10.684/03, art. 9º** — pagamento integral **extingue a punibilidade**; parcelamento **suspende** a pretensão punitiva. O *caput* alcança **expressamente** os arts. 168-A e 337-A do CP (ver skill `extincao-punibilidade-pagamento-tributario`).
- **Lei 9.430/96, art. 83** e **Lei 11.941/09, arts. 68-69** — regime da representação fiscal, parcelamento e suspensão da prescrição — conferir redação atual via `jurisprudencia-stj-stf` / `lei-e-sumula`.

## A elementar-chave do 168-A: o DESCONTO prévio (crime omissivo próprio)

O art. 168-A é **crime omissivo próprio**: consuma-se pela simples **omissão** de repassar, no prazo legal, a contribuição **que foi descontada** do segurado. Sua teoria é **oposta** à da apropriação indébita comum (art. 168 — ver skill `defesa-apropriacao-indebita`): lá exige-se posse lícita anterior e **inversão do ânimo** de dono (crime material); aqui basta o **não repasse** do que foi retido (crime formal/omissivo). Não confundir os dois é o primeiro dever técnico.

| Elemento do 168-A | Como se manifesta | O que a defesa investiga |
|---|---|---|
| **Desconto/retenção prévia** | A contribuição foi **descontada** do salário do empregado e retida com o empregador | Houve prova do **desconto efetivo**? Se a contribuição é **patronal** (não descontada de terceiro), o enquadramento tende a ser **337-A**, não 168-A |
| **Omissão do repasse no prazo** | Não recolhimento na GPS no prazo e forma legais | Havia **impossibilidade material** de repasse (caixa zerado, folha atrasada)? |
| **Dolo específico de apropriação** | Vontade de **não repassar** o que se descontou, apropriando-se | Havia intenção de reter para si, ou **mera impossibilidade financeira**? |
| **Constituição definitiva do crédito** | Lançamento/crédito previdenciário definitivamente constituído | O crédito está **em discussão** administrativa (impugnação, recurso)? |

> **Ponto de virada — desconto ≠ inadimplência patronal.** Se a empresa **deixou de recolher a contribuição patronal** (a parte do empregador, não descontada de ninguém), o fato **não é 168-A** — que exige o desconto de terceiro. A defesa deve depurar, nas GFIPs e na perícia contábil, **o que era contribuição descontada do segurado** e **o que era contribuição patronal**, porque só a primeira tipifica a apropriação. Erro comum da acusação é imputar 168-A sobre débito puramente patronal.

## Roteiro de defesa por frentes (sucessivas, da mais forte à mais técnica)

### Frente 1 — As válvulas do crédito (a defesa primeira e decisiva)

No crime previdenciário, como no tributário, **quem controla o crédito controla o processo penal**. Antes de qualquer tese de mérito, mapeie o **estado do crédito** e escolha a válvula:

| Válvula | Requisito | Efeito | Base |
|---|---|---|---|
| **Pagamento integral** | Quitação de todo o débito (contribuição + acessórios), comprovada por certidão | **Extinção da punibilidade** | Lei 10.684/03, art. 9º, §2º (alcança 168-A e 337-A) |
| **Parcelamento em dia** | Adesão formalizada e parcelas em dia | **Suspensão** da pretensão punitiva **e** da prescrição | Lei 10.684/03, art. 9º; Lei 9.430/96, art. 83 |
| **Declaração/confissão espontânea antes da ação fiscal** | Declarar e confessar antes de iniciada a fiscalização | **Extinção da punibilidade** | CP, art. 168-A, §2º; art. 337-A, §1º |
| **Pagamento após ação fiscal e antes da denúncia** (primário/bons antecedentes) | Pagamento nessa janela | **Perdão judicial** ou só multa | CP, art. 168-A, §3º, I |
| **Falta de constituição definitiva do crédito** | Crédito previdenciário ainda em discussão administrativa | **Falta de justa causa** → trancamento/rejeição (analogia à SV 24 — confirmar alcance) | jurisprudência a conferir via `jurisprudencia-stj-stf` |

> Para a **estrutura forense** das válvulas (cabimento, pedidos sucessivos, checklist documental e modelo de peça), use a skill irmã `extincao-punibilidade-pagamento-tributario`, cujo *caput* já alcança expressamente 168-A e 337-A. Pedido de extinção **sem certidão** do estado do crédito (PGFN/RFB) é pedido fadado ao indeferimento.

### Frente 2 — Inexigibilidade de conduta diversa (dificuldade financeira)

É a tese material mais característica do 168-A. Sustenta-se que, diante de **grave dificuldade financeira** comprovada, era **inexigível** do empregador conduta diversa: pagar salários e manter a empresa **em vez de** repassar a contribuição descontada. Trata-se de **causa supralegal de exclusão da culpabilidade**.

- **Ônus de prova concreta:** a tese não vive de alegação genérica de crise. Exige **prova contábil robusta** — balanços, fluxo de caixa negativo, protestos, execuções, folha em atraso, demissões, ações trabalhistas, pedido de recuperação judicial. A **perícia contábil** é o coração da frente 2.
- **Cuidado com a seletividade:** se, no mesmo período, houve **retiradas de sócios**, pagamento de credores privilegiados ou distribuição de lucros, a inexigibilidade enfraquece — a defesa precisa demonstrar que a empresa **priorizou a subsistência**, não o benefício dos sócios.
- **Aplicação jurisprudencial:** a admissibilidade e o rigor da tese variam — pesquise o estado atual via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** qualquer precedente cujo número/teor você não confirme.

### Frente 3 — Ausência de dolo específico

O 168-A exige a **vontade de não repassar o que se descontou** (dolo de apropriação); não basta o não recolhimento culposo ou por impossibilidade. No 337-A, exige-se o **dolo de suprimir/reduzir** a contribuição pela omissão fraudulenta de informações. A defesa investiga:

- Erro/atraso **contábil ou administrativo** (não intencional) na escrituração ou no envio da GFIP.
- **Delegação** da gestão fiscal a contador/terceiro e desconhecimento fático do administrador (com cautela — não afasta automaticamente).
- Ausência de **omissão fraudulenta** no 337-A: contribuição **declarada** (GFIP entregue) e não paga aproxima-se do 168-A/mero débito, não da sonegação por omissão de informações.

### Frente 4 — Insignificância e teses de valor

- **Insignificância legislada (§3º, II do 168-A / §§ do 337-A):** se o débito, com acessórios, é **igual ou inferior** ao mínimo para ajuizamento de execução fiscal, cabe **perdão judicial** ou aplicação só de multa — patamar a conferir na norma vigente.
- **Princípio da insignificância (atipicidade material):** para débitos abaixo do piso de ajuizamento/arquivamento das execuções fiscais federais, discute-se a **atipicidade** — tese e patamar a confirmar via `jurisprudencia-stj-stf`, atentando para **mitigações** como habitualidade/contumácia.

### Frente 5 — Responsabilidade penal do administrador (autoria)

Nos crimes societários, é vedada a **responsabilidade objetiva** e a **denúncia genérica**. A defesa exige a **individualização da conduta**: qual administrador tinha, de fato, o **poder de decisão** sobre o recolhimento no período. Sócio sem gestão, administrador que ingressou após o fato, ou o que provadamente não geria o setor fiscal têm tese própria de atipicidade subjetiva/exclusão de autoria (confira a orientação atual sobre denúncia genérica em crimes societários via `jurisprudencia-stj-stf`).

## Teses e contra-teses (mapa rápido)

| Tese da defesa | Contra-tese (acusação) | Como reforçar a defesa |
|---|---|---|
| Pagamento integral → extinção (Lei 10.684/03) | Pagamento após a denúncia/sentença não alcança | Sustentar a leitura ampla ("a qualquer tempo") e confirmar o alcance atual via `jurisprudencia-stj-stf` |
| Parcelamento → suspensão | Parcelamento tardio (após denúncia) não suspende (art. 83, Lei 9.430/96) | Verificar o marco temporal vigente e a adesão formalizada; certidão de regularidade |
| Inexigibilidade por dificuldade financeira | Crise genérica; houve retirada de sócios/pagamento seletivo | Perícia contábil; demonstrar priorização da subsistência da empresa |
| Débito era patronal, não descontado → não é 168-A | Basta o não recolhimento | Depurar GFIP: separar contribuição descontada do segurado × patronal |
| Falta de constituição definitiva do crédito | Crime formal dispensa lançamento definitivo | Sustentar a analogia à SV 24 / falta de justa causa — confirmar alcance atual |
| Ausência de dolo (erro contábil) | Dolo presumido pela omissão | Contribuição **declarada** em GFIP afasta a sonegação por omissão (337-A) |
| Denúncia genérica em crime societário | Sócio responde pela empresa | Exigir individualização da conduta e do poder de gestão |

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e súmulas **notórias** podem ser citados com certeza; **qualquer** precedente específico (número de HC/REsp/RE, informativo, tema repetitivo) sem certeza absoluta deve ser marcado **[NÃO VERIFICADO]** e conferido via `jurisprudencia-stj-stf`. Prefira ensinar a **tese e o dispositivo** a arriscar um número de acórdão.

- **Súmula Vinculante 24/STF** — crime **material** contra a ordem tributária não se tipifica antes do lançamento definitivo. Notória; sua **aplicação analógica** ao crédito previdenciário (natureza do 168-A/337-A, se material ou formal) deve ser **confirmada** via `jurisprudencia-stj-stf`.
- **Tese da natureza do 168-A** (crime omissivo próprio / formal, que dispensaria constituição definitiva) — orientação a **confirmar** [NÃO VERIFICADO].
- **Alcance da extinção pelo pagamento "a qualquer tempo"** (art. 9º, Lei 10.684/03) mesmo após a sentença — construção jurisprudencial a **confirmar** [NÃO VERIFICADO].
- **Insignificância no crime previdenciário** — existência e patamar do parâmetro (piso de ajuizamento/arquivamento de execução fiscal) a **confirmar** [NÃO VERIFICADO]; atenção às mitigações por contumácia.
- **Denúncia genérica em crimes societários** — orientação sobre a exigência de individualização a **confirmar** [NÃO VERIFICADO].

## Cálculo de pena, multa e prescrição (método — não implementar aqui)

Esta skill **não calcula** pena, multa ou prescrição. Para os cálculos deterministicos, use as calculadoras existentes com testes:

- **Dosimetria** (pena de 2 a 5 anos de reclusão; circunstâncias judiciais; agravantes/atenuantes; causas de aumento/diminuição): use `calculadora-dosimetria`.
- **Multa penal** (dias-multa): use `calculadora-pena-multa`.
- **Prescrição** (inclusive o efeito **suspensivo do parcelamento** sobre o prazo, e o marco da **constituição definitiva do crédito** como possível termo inicial da pretensão punitiva): use `calculadora-prescricao`. Atenção: no crime tributário/previdenciário, a definição do **termo inicial** (consumação vs. lançamento definitivo) altera o cálculo — parametrize com cuidado e confira a orientação atual.
- **Tempestividade** de eventual recurso: use `calculadora-tempestividade`.

Método defensivo de dosimetria: pena mínima de 2 anos permite discutir **regime aberto** e **substituição por restritivas de direitos** (art. 44, CP) na condenação; a **confissão** e o **pagamento parcial** (art. 16, CP — arrependimento posterior, se anterior à denúncia) reduzem a reprimenda. A pena mínima **não** admite suspensão condicional do processo (art. 89, Lei 9.099/95, exige mínima ≤ 1 ano), mas o ANPP pode caber (ver skill `anpp`) — confira os requisitos e o marco de constituição do crédito.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Confundir o **168-A** (crime omissivo próprio, desconto de terceiro) com a **apropriação indébita comum** (art. 168, crime material — teoria oposta).
- Aceitar imputação de **168-A sobre débito patronal** (não descontado de segurado) — deveria ser 337-A ou mero débito.
- Ir ao mérito **sem antes** mapear o estado do crédito e as válvulas do pagamento/parcelamento.
- Sustentar **inexigibilidade** com alegação genérica de crise, sem perícia contábil e ignorando retiradas de sócios no período.
- Tratar contribuição **declarada em GFIP** e não paga como **sonegação (337-A)** — a omissão de informações é elementar da sonegação; declarar e não pagar aproxima-se do 168-A.
- Aceitar **denúncia genérica** em crime societário sem exigir individualização da conduta e do poder de gestão.
- Citar precedente de memória — **jurisprudência inventada por IA gera sanção real**.

**Checklist antes de peticionar:**
- [ ] Tipo correto identificado (168-A × 337-A × débito patronal atípico)?
- [ ] Estado do crédito previdenciário mapeado (constituído? em discussão? pago? parcelado?) com **certidão**?
- [ ] Válvula do pagamento/parcelamento verificada **antes** das teses de mérito (frente 1)?
- [ ] Perícia contábil requerida/juntada para a tese de inexigibilidade (frente 2)?
- [ ] GFIP depurada: contribuição descontada do segurado × patronal?
- [ ] Individualização da conduta do administrador (autoria) conferida?
- [ ] Dosimetria, multa e prescrição feitas pelas calculadoras (`calculadora-dosimetria`, `calculadora-pena-multa`, `calculadora-prescricao`), não à mão?
- [ ] Perdão judicial/§3º e insignificância avaliados (patamar na norma vigente)?
- [ ] **Todas** as súmulas, temas e acórdãos conferidos via `jurisprudencia-stj-stf` (Citation Gate) e o que não se confirmou marcado **[NÃO VERIFICADO]**?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pelas teses e pelas citações é sempre do **advogado** subscritor (CED/OAB, art. 2º; Provimento 205/2021).
- **Foco defensivo.** Esta skill é do **polo da defesa** (réu/investigado). Eventual atuação do polo acusatório (MP/assistente) exige skill própria — o roteador deve conferir o polo da instituição em `_criminalsquad/_memory/company.md`.
- **Citation Gate.** Nenhuma súmula, tese, tema ou acórdão citado de memória: tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Na dúvida, **omitir vence inventar**.
- **Sigilo e LGPD.** Dados do assistido e documentos contábeis do caso jamais em repositório público (`acervo/casos/` é gitignored).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
