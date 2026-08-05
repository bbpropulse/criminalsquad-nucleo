---
name: carta-rogatoria-penal-exequatur-stj
description: >-
  Use ao elaborar, cumprir ou IMPUGNAR carta rogatória penal — ativa (Brasil pede ato no exterior)
  ou passiva (exequatur pelo STJ a rogatória estrangeira) — e ao defender no juízo deprecado após o
  exequatur. Cobre o rito próprio (RISTJ), os limites materiais (ordem pública/soberania nacional),
  o contraditório ANTES do exequatur, a distinção entre atos que exigem delibação e os que admitem
  auxílio direto, e as nulidades de… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, exequatur, stj]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-carta-rogatoria-penal-exequatur-stj"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["carta-rogatoria-penal-exequatur-stj", "carta rogatoria", "penal exequatur"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Carta Rogatória Penal e Exequatur no STJ (CF, art. 105, I, i; RISTJ, arts. 216-O a 216-X)

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

Esta skill orienta a **elaboração, o cumprimento e — sobretudo — a IMPUGNAÇÃO** de carta rogatória em matéria penal, seja **ativa** (o Brasil roga a autoridade estrangeira a prática de ato processual no exterior) ou **passiva** (autoridade estrangeira roga ato a ser cumprido no Brasil, sujeito a **exequatur** pelo STJ). É instrumento de **cooperação jurídica internacional** que passa por um **juízo de delibação** — o STJ não rejulga o mérito da causa estrangeira, mas verifica se o ato rogado ofende a **soberania nacional, a ordem pública ou a dignidade da pessoa humana**.

> **Lição central:** o erro que mata a impugnação é confundir o **juízo de delibação** com o **juízo de mérito**. No exequatur, o STJ **não** discute se o acusado é culpado, se a prova é boa ou se a lei estrangeira é justa — discute **apenas** se o ato rogado, tal como formulado, viola soberania, ordem pública ou dignidade e se cumpre os requisitos formais. **Ataque o filtro delibatório (formalidade, ordem pública, contraditório), não o mérito da persecução estrangeira** — este último se defende lá fora ou, quanto à prova, no juízo deprecado que a executa.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 216-O a 216-X do RISTJ** (a Emenda Regimental 18/2014 incorporou a cooperação internacional ao Regimento; pode haver emendas posteriores) e dos **arts. 26 a 41 do CPC/2015** (cooperação internacional, auxílio direto e carta rogatória — aplicação subsidiária ao processo penal por força do art. 3º do CPP). Confira também tratados bilaterais/multilaterais aplicáveis (MLATs, Convenção de Palermo, Convenção de Mérida, Convenção de Viena sobre tráfico) e **todo precedente** via a skill `jurisprudencia-stj-stf`. **Polo:** esta skill é majoritariamente de **DEFESA**; o roteador deve confirmar o polo — MP/assistente de acusação e a própria autoridade rogante têm interesse oposto.

## Natureza e as duas vias da cooperação

A cooperação internacional passiva no Brasil corre por **duas vias distintas** — e distingui-las é o primeiro passo técnico:

1. **Carta rogatória (via da delibação):** quando o ato estrangeiro tem **caráter decisório/executório** ou exige juízo prévio de admissibilidade — depende de **exequatur do STJ** (CF, art. 105, I, i). Só depois de concedido o exequatur o ato é remetido ao **juízo federal de 1º grau** para cumprimento (o "juízo deprecado").
2. **Auxílio direto (via sem delibação):** quando o pedido **dispensa juízo de delibação** porque não há decisão estrangeira a ser homologada — a autoridade brasileira **produz uma decisão própria** (CPC, arts. 28 a 34). Aqui a competência é da **Justiça Federal de 1º grau**, não do STJ. É a distinção nuclear apontada na razão de ser desta skill: **a rogatória DEPENDE de exequatur (delibação); o auxílio direto o DISPENSA.**

> **Regra prática de triagem:** pergunte "há um **ato decisório da autoridade estrangeira** que se quer fazer valer no Brasil?" Se **sim** → rogatória + exequatur (STJ). Se o pedido é para que a **autoridade brasileira decida e produza** o ato (ex.: representar por quebra de sigilo perante juiz brasileiro) → **auxílio direto** (1º grau). Enquadramento errado gera incompetência e nulidade — e é uma tese defensiva quando a acusação escolheu a via para burlar o contraditório do exequatur.

## Base legal

- **CF, art. 105, I, i** — competência **originária do STJ** para conceder **exequatur** às cartas rogatórias.
- **RISTJ, arts. 216-O a 216-X** — rito do exequatur e da homologação (redação da Emenda Regimental 18/2014; **conferir vigência**).
- **CPC/2015, arts. 26 a 41** — cooperação internacional, auxílio direto (arts. 28-34) e carta rogatória (arts. 35-36); aplicação subsidiária ao penal (**CPP, art. 3º**).
- **LINDB (Dec.-Lei 4.657/42), art. 7º e arts. 12 e 17** — o art. 17 é a **cláusula de ordem pública**: não terão eficácia no Brasil atos que ofendam a **soberania nacional, a ordem pública e os bons costumes**.
- **CPP, arts. 780 a 790** — relações jurisdicionais com autoridade estrangeira (cartas rogatórias no processo penal; **conferir redação vigente**).
- **Tratados aplicáveis** (verificar caso a caso via `jurisprudencia-stj-stf` e fonte oficial): MLATs bilaterais (ex.: Brasil–EUA, Dec. 3.810/2001), Convenção de Palermo (Dec. 5.015/2004), Convenção de Mérida (Dec. 5.687/2006), Convenção de Viena de 1988.
- **Portaria/atos do Ministério da Justiça e Segurança Pública** — o **DRCI/MJSP** é a **autoridade central** que tramita os pedidos (salvo canal diplomático ou autoridade central específica de tratado).

## O juízo de delibação — o que o STJ analisa (e o que NÃO analisa)

O exequatur é **juízo de delibação (cognição limitada)**. O STJ **verifica**:

1. **Autenticidade e regularidade formal** — origem de autoridade estrangeira competente, tradução por tradutor juramentado (salvo dispensa por tratado), tramitação pela autoridade central/via diplomática.
2. **Ordem pública, soberania e dignidade** (LINDB, art. 17) — o ato rogado não pode ofender esses limites materiais.
3. **Observância do contraditório** — a parte interessada domiciliada no Brasil deve ser **citada/intimada** para impugnar **antes** da concessão (salvo medidas de urgência sem prévia comunicação — ver adiante).

O STJ **NÃO** analisa: o **mérito** da causa estrangeira; a **justiça** ou o acerto da decisão estrangeira; a **validade da prova** segundo o direito estrangeiro; a **culpa** do investigado/réu. Trazer mérito para a impugnação do exequatur é erro técnico — o STJ não conhece.

## Impugnação do exequatur — o momento, a técnica e as teses

> **O momento é o contraditório prévio.** No procedimento do exequatur, a parte interessada é **intimada para, no prazo regimental, impugnar** (RISTJ; **conferir prazo vigente**). É aí que a defesa atua. A impugnação corre perante o **Presidente do STJ** (ou o órgão competente conforme o RISTJ); da decisão cabe **agravo regimental** ao órgão colegiado (Corte Especial). **Confirmar via `jurisprudencia-stj-stf` a competência interna e o recurso cabível vigentes.**

### Teses defensivas típicas (atacar o filtro delibatório, não o mérito)

1. **Ofensa à ordem pública / soberania (LINDB, art. 17):** o ato rogado viola garantia fundamental do ordenamento brasileiro — ex.: rogatória que pede diligência **vedada** no Brasil, ou cuja execução importaria **quebra de sigilo sem os requisitos** da lei nacional, ou medida com **finalidade político-persecutória**.
2. **Ausência ou vício do contraditório prévio:** a parte domiciliada no Brasil **não foi intimada** para impugnar antes do exequatur, quando o ato não era de urgência que justificasse a postergação. Ataca-se a **nulidade do procedimento delibatório**.
3. **Falta de requisito formal:** origem de autoridade **não** jurisdicional/competente, **ausência de tradução** juramentada, documentação incompleta, tramitação por canal irregular (fora da autoridade central sem previsão de tratado).
4. **Bis in idem / dupla incriminação (quando exigida por tratado):** ato que pressupõe fato **atípico no Brasil** quando o tratado condiciona a cooperação à dupla incriminação, ou persecução já extinta.
5. **Via processual errada (rogatória x auxílio direto):** o pedido, por sua natureza, deveria ter seguido a via do **auxílio direto** (1º grau) e foi trazido como rogatória (ou vice-versa) para **suprimir uma instância de controle** — vício de competência/procedimento.
6. **Extrapolação do pedido:** o ato rogado excede o objeto do pedido estrangeiro (ex.: pede-se oitiva e executa-se busca), ou a medida é **desproporcional** ao fim declarado.
7. **Prescrição/extinção da punibilidade pela lei brasileira** como óbice de ordem pública, quando cabível — **conferir** a orientação atual, pois nem toda extinção estrangeira/brasileira barra a cooperação (via `jurisprudencia-stj-stf`).

### Contra-teses (polo acusatório — rogante/MP/assistente)

- O juízo é de **delibação**: o mérito e a validade probatória **não** se discutem no exequatur, mas na origem ou no juízo deprecado.
- **Medidas de urgência** (ex.: bloqueio de ativos, quebra de sigilo com risco de perecimento) admitem **postergação do contraditório** para depois de cumprido o ato, sem nulidade.
- A **presunção de regularidade** dos atos da autoridade estrangeira e da autoridade central milita a favor do cumprimento; ordem pública é exceção de interpretação **restritiva**, não válvula para rejulgar o mérito.

## Defesa no juízo deprecado (após o exequatur)

Concedido o exequatur, o ato é remetido à **Justiça Federal de 1º grau** para **execução**. Aqui abre-se um **segundo espaço de defesa**, distinto do exequatur:

- **Vícios de execução do ato** (ex.: oitiva de testemunha sem observância das formalidades, ausência de intimação do réu/defensor para acompanhar a diligência, cerceamento de defesa na produção da prova) → arguir **nulidade** perante o juízo federal deprecado.
- **Cadeia de custódia** da prova produzida no exterior e trazida pela cooperação → conferir integridade e regularidade (aciona a skill `cadeia-de-custodia` quando houver).
- **Contraditório diferido sobre a prova:** ainda que o exequatur não discuta a validade probatória, a **prova produzida por cooperação** submete-se ao **contraditório no processo penal de destino** — a defesa pode impugnar sua **admissibilidade e valoração** no processo de origem/destino, não no STJ.

> **Distinção crucial:** o exequatur (STJ) filtra a **admissibilidade formal e a ordem pública** do ato; o juízo deprecado (1º grau) cuida da **regularidade da execução**; e o **juízo da causa** (onde tramita a ação penal) cuida da **admissibilidade e valoração da prova**. São três controles diferentes — não confundir onde cada tese é cabível.

## Carta rogatória ATIVA (Brasil roga ao exterior)

Quando é o Brasil que precisa de ato no exterior (oitiva de testemunha, citação, obtenção de documento), a rogatória **ativa** é expedida pelo juízo brasileiro e tramita pela **autoridade central (DRCI/MJSP)** ou canal de tratado. Pontos de atenção para a **defesa** que requer diligência no exterior:

- **Fundamentar a imprescindibilidade** da prova/diligência e a **impossibilidade** de obtê-la no país — o indeferimento de rogatória requerida pela defesa, se a prova é pertinente e relevante, pode configurar **cerceamento de defesa** (nulidade).
- **Prazo e suspensão:** a expedição de rogatória para **citação** ou prova essencial pode **suspender** o curso do processo/prazo prescricional em hipóteses legais — **conferir** o regime aplicável (arts. 368 e 369 do CPP; via `jurisprudencia-stj-stf`).
- **Tradução e requisitos do país destinatário** — observar as exigências do tratado/Estado requerido para evitar devolução sem cumprimento.

## Súmulas, precedentes e teses — sob o Citation Gate

> **Citation Gate (inegociável):** os dispositivos legais e regimentais acima podem ser afirmados com conferência da redação vigente. **Nenhum número de precedente específico** (CR, AgRg na CR, Pet, HC, informativo, tema) deve ser citado de memória. Para qualquer acórdão do STJ sobre exequatur, ordem pública, contraditório prévio, auxílio direto x rogatória ou nulidade de execução, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` antes de peticionar.

- **Tese consolidada (dispositivo + doutrina, segura):** o exequatur é **juízo de delibação de cognição limitada** (soberania, ordem pública, dignidade — LINDB, art. 17; CF, art. 105, I, i). **Confirmar a formulação atual** do STJ sobre o alcance do controle — [NÃO VERIFICADO quanto a acórdão específico].
- **Contraditório prévio ao exequatur** como regra, com **postergação** admitida em medidas de urgência — orientação corrente do STJ; **conferir o precedente atual** via `jurisprudencia-stj-stf` — [NÃO VERIFICADO quanto a número].
- **Distinção rogatória x auxílio direto** e a competência do 1º grau para o auxílio direto — decorre do CPC/2015; **conferir** a jurisprudência que a aplicou em matéria penal — [NÃO VERIFICADO quanto a número].
- **Não cabimento de reexame de mérito** no exequatur — orientação clássica; **conferir** a ementa atual antes de citar — [NÃO VERIFICADO quanto a número].

**Regra de ouro:** ensine a **tese** e ancore no **dispositivo** (CF, art. 105, I, i; LINDB, art. 17; RISTJ, arts. 216-O e ss.; CPC, arts. 26-41). Só cite número de acórdão depois do gate. **Omitir vence inventar.**

## Roteiro de análise / defesa (passo a passo)

1. **Classificar a via:** rogatória (exequatur/STJ) ou auxílio direto (1º grau)? A via errada é tese de nulidade/incompetência.
2. **Identificar o polo e o momento:** o cliente é o interessado impugnante no exequatur? Réu no juízo deprecado? Requerente de rogatória ativa? Cada um tem peça e foro próprios.
3. **No exequatur (impugnação):** atacar **formalidade** (autenticidade, tradução, autoridade central), **ordem pública/soberania** (LINDB, art. 17) e **contraditório prévio** — **não** o mérito.
4. **Verificar urgência:** se houve postergação do contraditório, aferir se a **urgência** era real e proporcional; senão, arguir nulidade.
5. **No juízo deprecado:** fiscalizar a **regularidade da execução** (intimação da defesa para a diligência, formalidades da oitiva, cadeia de custódia).
6. **No juízo da causa:** impugnar **admissibilidade e valoração** da prova produzida por cooperação (contraditório diferido).
7. **Recurso:** da decisão do exequatur, **agravo regimental** ao colegiado (Corte Especial) — **conferir cabimento e prazo vigentes**.
8. **Citation Gate:** todo precedente e súmula por `jurisprudencia-stj-stf`; **revisão humana** obrigatória.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Discutir **mérito** da persecução estrangeira ou **validade probatória** dentro do exequatur (o STJ não conhece).
- Confundir **rogatória** (exequatur/STJ) com **auxílio direto** (1º grau) e peticionar no foro errado.
- Perder o **contraditório prévio** do exequatur por não impugnar no prazo regimental (preclusão).
- Tratar a **ordem pública** como cláusula genérica para rejulgar o caso — ela é de interpretação **restritiva**; é preciso apontar a **violação concreta** a garantia do ordenamento brasileiro.
- Ignorar que **medidas de urgência** admitem contraditório **diferido** — alegar nulidade sem aferir a real urgência é tese fraca.
- Não separar os **três controles** (exequatur / execução no deprecado / valoração no juízo da causa) e alegar a tese no foro errado.
- Requerer rogatória **ativa** da defesa sem demonstrar **pertinência e imprescindibilidade** (facilita o indeferimento).
- Citar **número de acórdão** de memória (risco de jurisprudência inventada — sanções reais).

**Checklist:**
- [ ] Via corretamente classificada (rogatória/exequatur x auxílio direto)?
- [ ] Foro/órgão correto (STJ para exequatur; JF 1º grau para execução e auxílio direto)?
- [ ] No exequatur, a tese ataca **formalidade / ordem pública / contraditório** (e não o mérito)?
- [ ] Requisitos formais conferidos (autoridade estrangeira competente, tradução juramentada, autoridade central/tratado)?
- [ ] Contraditório prévio observado? Se postergado, a **urgência** era real e proporcional?
- [ ] Ordem pública invocada com **violação concreta** apontada (LINDB, art. 17), não como cláusula genérica?
- [ ] No juízo deprecado, a **execução** (intimação da defesa, formalidades, cadeia de custódia) foi regular?
- [ ] Recurso cabível e prazo (agravo regimental) conferidos na redação vigente do RISTJ?
- [ ] Dispositivos conferidos na **redação vigente** (RISTJ 216-O a 216-X; CPC 26-41; LINDB 17; CF 105, I, i)?
- [ ] Precedentes e súmulas verificados via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável realizada?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da peça e da estratégia — não substitui o juízo profissional nem a leitura dos autos do exequatur/rogatória concreta. A responsabilidade é sempre do **advogado** (CED/OAB; Provimento 205/2021 quando aplicável à divulgação).
- **Polo majoritário: DEFESA.** A skill é escrita para quem **impugna** o exequatur ou defende no juízo deprecado. O **roteador deve confirmar o polo**: para o polo acusatório (MP/assistente de acusação/autoridade rogante), inverta a lógica das teses e observe a ética do **CNMP**; para a Defensoria, a **LC 80/94**.
- **Citation Gate:** dispositivos legais/regimentais conferidos na fonte oficial; **todo** precedente específico via `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.
- **Sigilo/LGPD:** dados do assistido e documentos da cooperação (que podem correr em segredo) nunca em repositório público.

**Padrão de redação:** ao redigir a peça (impugnação ao exequatur, agravo regimental, nulidade no juízo deprecado, requerimento de rogatória ativa), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
