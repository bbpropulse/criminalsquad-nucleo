---
name: defesa-crime-tortura
description: >-
  Use ao defender acusado de tortura da Lei 9.455/1997 — tortura-prova/confissão (art. 1º, I, a),
  tortura-castigo e contra pessoa sob guarda (I, b e §1º), tortura-discriminação (I, c) e
  tortura-omissão (§2º): atipicidade por ausência da finalidade específica (desclassificação para
  lesão corporal, constrangimento ilegal ou abuso de autoridade), delimitação do sujeito ativo,
  ataque à prova (confissão/depoimento colhido sob… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, leis-penais-especiais, defesa, tortura]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crime-tortura"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crime-tortura", "defesa crime", "crime tortura"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos Crimes de Tortura (Lei 9.455/1997)

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

Esta skill orienta a **defesa técnica do acusado de tortura** (Lei 9.455/1997), crime **equiparado a hediondo** (CF, art. 5º, XLIII; Lei 8.072/90, art. 2º) e grave violação de direitos humanos. O eixo defensivo não é negar a violência em abstrato, mas **atacar a subsunção**: a tortura tem **elemento subjetivo especial** (finalidade) e, na maioria das figuras, **estrutura típica rígida**. Faltando a finalidade específica ou o sujeito ativo adequado, **o fato migra** para lesão corporal, constrangimento ilegal, maus-tratos ou abuso de autoridade — todos muito menos graves.

> **Lição central:** tortura não é sinônimo de "violência grave". Cada inciso do art. 1º exige uma **finalidade específica** (confissão/informação, castigo/prevenção, ou discriminação). **Identifique primeiro qual figura foi imputada e qual é o seu dolo específico** — e verifique se a acusação o provou. Sem a finalidade típica, **não há tortura**: há desclassificação. A tese-mãe da defesa é a **atipicidade por ausência do especial fim de agir**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da Lei 9.455/1997 (especialmente o art. 1º, incisos e §§, e o efeito da perda do cargo do §5º) e a interação com a **Lei de Abuso de Autoridade (Lei 13.869/2019)**, que reorganizou condutas de agentes públicos e pode ser a capitulação correta em vez da tortura. Confira também súmulas, temas e eventual *overruling* pela skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nada de jurisprudência de memória (Citation Gate).

## Base legal

- **Lei 9.455/1997** — define os crimes de tortura; regulamenta a **CF, art. 5º, III** (ninguém será submetido a tortura) e o **XLIII** (tortura equiparada a hediondo: inafiançável e insuscetível de graça/anistia).
- **Art. 1º, I** — tortura **finalística** (constranger alguém com violência ou grave ameaça, causando sofrimento físico ou mental):
  - **alínea a** — para obter **informação, declaração ou confissão** (tortura-prova);
  - **alínea b** — para **provocar ação ou omissão de natureza criminosa**;
  - **alínea c** — em razão de **discriminação** racial ou religiosa.
- **Art. 1º, II** — submeter alguém **sob sua guarda, poder ou autoridade**, com emprego de violência ou grave ameaça, a **intenso sofrimento** físico ou mental, **como forma de aplicar castigo pessoal ou medida de caráter preventivo** (tortura-castigo).
- **Art. 1º, §1º** — submeter **preso ou pessoa sujeita a medida de segurança** a sofrimento não decorrente de medida legal (tortura do custodiado).
- **Art. 1º, §2º** — **tortura-omissão**: quem **se omite** em face das condutas, quando tinha o **dever de evitá-las ou apurá-las** (pena menor, própria).
- **Art. 1º, §3º** — **formas qualificadas** pelo resultado (lesão grave/gravíssima; morte).
- **Art. 1º, §4º** — **causas de aumento** (agente público; contra criança/gestante/idoso/deficiente/adolescente [conferir rol vigente]; mediante sequestro).
- **Art. 1º, §5º** — **efeito da condenação**: perda do cargo, função ou emprego público e interdição para seu exercício pelo dobro do prazo da pena.
- **Art. 1º, §6º** — crime **inafiançável e insuscetível de graça ou anistia**.
- **Art. 1º, §7º** — regime **inicial fechado** [conferir vigência à luz do julgamento pelo STF do regime obrigatoriamente fechado — ver adiante].
- **Art. 2º** — **extraterritorialidade** (aplica-se ainda que o crime não tenha sido cometido em território nacional, sendo a vítima brasileira ou estando o agente em local sob jurisdição brasileira).
- **CP, arts. 129 (lesão), 146 (constrangimento ilegal), 136 (maus-tratos)** e **Lei 13.869/2019 (abuso de autoridade)** — **figuras de desclassificação**, alvo central da defesa.

## Mapa das figuras e do sujeito ativo (a chave da desclassificação)

Antes de qualquer tese, **classifique a figura imputada**. O erro de capitulação é a maior porta defensiva.

| Figura | Dispositivo | Sujeito ativo | Elemento subjetivo especial (finalidade) |
|---|---|---|---|
| Tortura-prova/confissão | art. 1º, I, *a* | **Comum** (qualquer pessoa) | Obter informação, declaração ou confissão |
| Tortura para crime | art. 1º, I, *b* | **Comum** | Provocar ação/omissão criminosa |
| Tortura-discriminação | art. 1º, I, *c* | **Comum** | Discriminação racial ou religiosa |
| Tortura-castigo | art. 1º, II | **Próprio** (quem tem a vítima sob guarda, poder ou autoridade) | Aplicar castigo pessoal ou medida preventiva |
| Tortura do custodiado | art. 1º, §1º | **Próprio** (custodiante) | (submeter preso a sofrimento fora da medida legal) |
| Tortura-omissão | art. 1º, §2º | **Próprio** (dever de evitar/apurar) | (omissão dolosa; pena menor) |

> **Duas consequências práticas dessa tabela.** (1) Nas figuras do inciso I, o sujeito ativo é **comum** — não é preciso ser agente público (a condição de agente público é **causa de aumento**, art. 1º, §4º, não elementar). (2) Nas figuras do inciso II e §§1º-2º, o sujeito é **próprio**: se o acusado **não tinha a vítima sob guarda/poder/autoridade** nem o dever de evitar, **falta elementar** e a figura não se completa — atipicidade ou desclassificação.

## Roteiro de análise e defesa por figura

### 1. Atipicidade por ausência da finalidade específica (tese-mãe)

Todas as figuras do inciso I e a do inciso II exigem **elemento subjetivo especial** (dolo específico / especial fim de agir). A violência **por raiva, descontrole, vingança pessoal ou excesso na abordagem**, **sem** a finalidade típica, **não é tortura**.

- **Tortura-confissão (I, a):** exija prova de que a violência visava **arrancar confissão/informação**. Agressão durante prisão em flagrante, sem o objetivo de fazer o preso confessar, **não é** o inciso *a* — pode ser lesão corporal (CP, art. 129) ou **abuso de autoridade** (Lei 13.869/2019).
- **Tortura-castigo (II):** exija prova de que o sofrimento foi **intenso** e imposto **como castigo/medida preventiva** a pessoa **sob guarda**. Correção excessiva ou violência doméstica sem esse fim próprio pode ser **maus-tratos** (CP, art. 136) ou **lesão**.
- ➡️ **Pedido:** desclassificação (CPP, art. 383 — *emendatio*; ou art. 384 — *mutatio*, se surgir elementar nova) para o tipo menos grave, com todas as consequências (pena, regime, prescrição, não incidência do §5º).

### 2. Delimitação do sujeito ativo (figuras próprias)

Nas figuras próprias (II, §§1º e 2º), a defesa deve **negar a elementar da relação de guarda/poder/autoridade** ou do **dever jurídico** de agir.

- Réu que **não é** custodiante, guardião legal, agente responsável pela vítima → **não pratica** o inciso II nem o §1º.
- Na **omissão (§2º)**, exija a demonstração do **dever concreto** de evitar ou apurar (posição de garantidor / competência funcional) e do **dolo** de se omitir — a mera negligência administrativa **não** preenche o tipo (que é doloso).

### 3. Distinção tortura × lesão × constrangimento × abuso de autoridade

Este é o **campo de batalha probatório**. Sustente a capitulação mais branda quando faltar o núcleo da tortura:

- **× Lesão corporal (CP, art. 129):** falta a finalidade típica → é lesão (eventualmente qualificada), não tortura.
- **× Constrangimento ilegal (CP, art. 146):** se houve constrangimento com violência/ameaça **sem** o sofrimento intenso e a finalidade da tortura.
- **× Maus-tratos (CP, art. 136):** correção/disciplina excessiva de pessoa sob autoridade, **sem** o *animus* de castigo cruel típico do inciso II.
- **× Abuso de autoridade (Lei 13.869/2019):** agente público que se excede no exercício da função, **sem** finalidade de confissão nem castigo cruel — capitulação frequentemente correta e **muito menos gravosa** (não é hedionda, não gera §5º automático). **Verifique se o MP não "inflou" o abuso de autoridade em tortura.**

### 4. Ataque à prova (quando a tortura é meio, e a confissão é o alvo)

Sempre que houver alegação de que **confissão/depoimento** foi obtido sob tortura (o próprio contexto do art. 1º, I, *a*), articule com a defesa probatória:

- **Confissão obtida sob tortura é ilícita** (CF, art. 5º, LVI; CPP, art. 157) — deve ser **desentranhada** e **não pode fundamentar condenação** (nem a do seu cliente, nem a de terceiro). Combine com as skills `prova-ilicita-desentranhamento` e `cadeia-custodia-prova` [conferir nomes exatos no `skills/_index.yaml`].
- **Corpo de delito e nexo:** exija exame de corpo de delito (CPP, art. 158) e laudo que ligue as lesões à conduta imputada; sem materialidade e nexo, a tortura não se sustenta.
- **Palavra da suposta vítima × contexto:** avalie contradições, motivação para incriminar, e a cronologia das lesões (podem ser anteriores/posteriores à custódia).

### 5. Formas qualificadas e causas de aumento (dosimetria defensiva)

- **§3º (resultado lesão grave/morte):** discuta o **nexo** entre a conduta e o resultado agravador e o **elemento subjetivo** quanto a ele (culpa no resultado × dolo); atacar o resultado qualificador reduz drasticamente a pena.
- **§4º (aumentos):** conferir o **rol vigente** e impugnar aumento não comprovado (ex.: condição da vítima não demonstrada; ausência de sequestro).
- Encaminhar o cálculo à skill `calculadora-dosimetria` (dosimetria trifásica) e à `calculadora-prescricao` (prescrição pela pena em concreto) — **método aqui, número lá**.

### 6. O efeito automático da perda do cargo (§5º)

O art. 1º, §5º prevê, **como efeito da condenação**, a **perda do cargo/função/emprego público** e a interdição pelo dobro do prazo da pena. Frentes defensivas:

- Sustentar que o efeito **depende da capitulação em tortura** — obtida a **desclassificação** (para lesão/abuso), **não incide** o §5º automático (a perda do cargo passa a exigir fundamentação específica e patamar de pena, na forma do CP, art. 92, I).
- Discutir a **necessidade de motivação concreta** e proporcionalidade, e a distinção entre o efeito **específico e automático** do §5º e o efeito **genérico e motivado** do art. 92 do CP [tese e distinção; confirmar o estado atual da jurisprudência via `jurisprudencia-stj-stf`].

## Teses defensivas × contra-teses (acusação)

| Tese defensiva | Fundamento | Contra-tese típica (acusação) |
|---|---|---|
| Atipicidade por ausência da finalidade específica → desclassificação | Elemento subjetivo especial de cada figura do art. 1º | A finalidade se extrai do contexto (violência dirigida a confissão/castigo) |
| Réu não é sujeito ativo próprio (II / §§1º-2º) | Falta a relação de guarda/poder/dever | Relação de fato/funcional configura o poder sobre a vítima |
| É abuso de autoridade (Lei 13.869/19), não tortura | Excesso funcional sem finalidade típica | Sofrimento intenso + finalidade caracterizam a tortura |
| Confissão obtida sob tortura é ilícita e não fundamenta condenação | CF, art. 5º, LVI; CPP, art. 157 | Prova independente/derivada válida (fonte autônoma) |
| Afastar o resultado qualificador (§3º) por ausência de nexo/dolo | Necessidade de nexo e elemento subjetivo quanto ao resultado | Resultado agravador se comunica pela previsibilidade |
| §5º (perda do cargo) não incide fora da tortura | Efeito atrelado à capitulação; art. 92 CP exige motivação | Perda do cargo é efeito automático da condenação por tortura |

> **Regra de ouro da tortura:** a acusação tende a **partir do resultado (lesões graves)** e presumir a tortura. A defesa trabalha **de trás para frente**: prova o resultado, mas **cobra a finalidade típica e o sujeito próprio**. Onde faltar qualquer elementar especial, **cai a tortura** e sobe uma figura branda.

## Legislação, súmulas e precedentes (sob o Citation Gate)

**Dispositivos citáveis com certeza** (confira a redação vigente na fonte oficial):
- **CF, art. 5º, III, XLIII, LVI**; **Lei 9.455/1997** (art. 1º e §§; art. 2º); **Lei 8.072/90, art. 2º** (equiparação a hediondo); **CPP, arts. 157, 158, 383 e 384**; **CP, arts. 92, I, 129, 136 e 146**; **Lei 13.869/2019** (abuso de autoridade).

**Pontos que dependem de jurisprudência — NÃO cite número de acórdão/informativo/tema de memória:**
- Regime inicial **obrigatoriamente fechado** (Lei 9.455/97, art. 1º, §7º): há discussão sobre sua **constitucionalidade**, à luz do entendimento do STF que afastou a obrigatoriedade do regime fechado em hediondos. **[NÃO VERIFICADO]** — confirmar o precedente e o estado atual via `jurisprudencia-stj-stf` antes de sustentar regime menos gravoso.
- Alcance do **especial fim de agir** e da linha divisória **tortura × abuso/lesão** na jurisprudência do STJ/STF. **[NÃO VERIFICADO]** — buscar precedente atual; **prefira ensinar a tese e o dispositivo a arriscar um número**.
- Automaticidade e limites do **efeito de perda do cargo (§5º)** e sua relação com o art. 92 do CP. **[NÃO VERIFICADO]** — verificar entendimento consolidado.
- Aplicação da **extraterritorialidade** (art. 2º) e casos de competência (Justiça Estadual × Federal) conforme o sujeito/contexto. **[NÃO VERIFICADO]**.

➡️ **Diretriz:** todo enunciado sumular, tema repetitivo ou acórdão específico **passa obrigatoriamente** pelo gate `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir para a peça. Na dúvida, **omitir vence inventar** — sustente o **dispositivo de lei** e a **tese**, que são sólidos.

## Estrutura da peça (resposta à acusação / alegações finais / recurso)

Adapte a peça ao momento processual. A espinha argumentativa é a mesma:

1. **Síntese da imputação e da capitulação** — identifique **qual figura** do art. 1º foi denunciada.
2. **Preliminares** (se houver): incompetência; inépcia da denúncia (falta de descrição da **finalidade típica**); ilicitude de prova (confissão sob tortura → CPP, art. 157).
3. **Mérito — atipicidade / desclassificação:**
   a) ausência do **elemento subjetivo especial** (finalidade) → não é tortura;
   b) ausência do **sujeito ativo próprio** (nas figuras próprias);
   c) reenquadramento na figura branda (lesão / maus-tratos / abuso de autoridade);
   d) ataque à **materialidade e ao nexo** (corpo de delito; cronologia das lesões).
4. **Subsidiariamente — dosimetria:** afastar qualificadoras (§3º) e aumentos (§4º); pleitear regime e efeitos proporcionais; discutir o §5º.
5. **Pedidos:** absolvição (CPP, art. 386, III/VII) ou **desclassificação** (arts. 383/384) e, subsidiariamente, redução de pena e afastamento dos efeitos automáticos.

> **Redação:** ao redigir, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita da (a)tipicidade e persuasão (a régua que a revisão cobra).

## Erros comuns e checklist da defesa

**Anti-padrões (evitar):**
- Aceitar a capitulação em tortura só porque houve **lesão grave** — sem discutir a **finalidade típica**.
- Confundir **agente público** (causa de aumento, §4º) com **elementar** do tipo — nas figuras do inciso I o sujeito é **comum**.
- Tratar toda violência policial como tortura, ignorando o **abuso de autoridade** (Lei 13.869/19) como capitulação correta e mais branda.
- Esquecer de **desentranhar** a confissão obtida sob tortura (CPP, art. 157) e de discutir a prova derivada.
- Deixar passar o **§5º** (perda do cargo) sem atacar sua incidência quando cabível a desclassificação.
- Sustentar regime ou benefício **sem conferir a vigência** do §7º e a jurisprudência do STF sobre regime fechado obrigatório.
- Citar **número de HC/REsp/tema/informativo de memória** — sanção real por jurisprudência inventada.

**Checklist:**
- [ ] Qual **figura** do art. 1º foi imputada (I *a/b/c*, II, §1º, §2º)? A denúncia descreve a **finalidade típica**?
- [ ] O **elemento subjetivo especial** (finalidade) está **provado**, ou há espaço para atipicidade/desclassificação?
- [ ] O réu é **sujeito ativo adequado** (comum no inciso I; **próprio** no II e §§)?
- [ ] Cabe **reenquadramento** em lesão (129), maus-tratos (136), constrangimento (146) ou **abuso de autoridade** (Lei 13.869/19)?
- [ ] Há **confissão/depoimento sob tortura** a desentranhar (CPP, art. 157; CF, art. 5º, LVI)?
- [ ] **Materialidade e nexo** demonstrados (corpo de delito, art. 158; cronologia das lesões)?
- [ ] **Qualificadoras (§3º)** e **aumentos (§4º)** têm base probatória? Nexo/dolo quanto ao resultado?
- [ ] **§5º (perda do cargo)**: incide? Cai com a desclassificação? Distinção com o art. 92, I, CP feita?
- [ ] Dosimetria encaminhada à `calculadora-dosimetria` e prescrição à `calculadora-prescricao`?
- [ ] **Toda** súmula/tese/acórdão passou por `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa, não substitui o juízo profissional nem a análise do caso concreto (autos, laudos, contexto).
- **Polo:** skill de **DEFESA**. A tortura é grave violação de direitos humanos; a atuação defensiva é **técnica e ética** — nega a subsunção, não a dignidade da vítima. Se a instituição atuar no **polo acusatório** (MP/assistente), o chefe-roteador deve **conferir o polo** e acionar a skill correspondente de acusação, pois a lógica argumentativa se inverte.
- **Ética por polo:** advocacia (OAB — EAOAB e CED; Provimento 205/2021 para comunicação); Ministério Público (CNMP); Defensoria (LC 80/94). Sigilo e LGPD: dados do assistido nunca em repositório público.
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese de memória. Dispositivo de lei e súmula notória com certeza; qualquer número de acórdão/tema/informativo → `[NÃO VERIFICADO]` + conferência via `jurisprudencia-stj-stf`.

## Lembretes finais

- **Finalidade específica primeiro** — sem o especial fim de agir, não há tortura; há desclassificação.
- **Sujeito ativo:** **comum** no inciso I; **próprio** no II e §§ — falta de elementar derruba a figura.
- **Abuso de autoridade (Lei 13.869/19)** é o grande "reenquadramento" da violência policial sem finalidade típica.
- **Confissão sob tortura → CPP, art. 157** (ilícita, desentranha, não condena).
- **§5º (perda do cargo)** cai com a desclassificação — não deixe passar.
- **Vigência e jurisprudência** (regime do §7º, linha tortura × abuso, §5º) → sempre pelo gate antes de citar.
