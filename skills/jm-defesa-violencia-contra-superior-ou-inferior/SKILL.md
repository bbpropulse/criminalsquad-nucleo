---
name: jm-defesa-violencia-contra-superior-ou-inferior
description: >-
  Use ao defender militar acusado de VIOLÊNCIA CONTRA SUPERIOR (art. 157 CPM), contra MILITAR DE
  SERVIÇO / sentinela (art. 158 CPM), com resultado lesão/morte (art. 159 CPM) ou contra INFERIOR
  (art. 175 CPM): descaracterização da relação superior-inferior e do nexo funcional,
  desclassificação para lesão/vias de fato comuns, excludentes próprias do CPM (arts. 42-44), causa
  de aumento por emprego de arma e teses de dosimetria… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, defesa, tipo-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-violencia-contra-superior-ou-inferior"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-violencia-contra-superior-ou-inferior", "defesa violencia", "superior inferior"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em violência contra superior / militar de serviço / inferior (arts. 157-159 e 175 do CPM)

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

Esta skill orienta a **defesa técnica** do militar acusado dos crimes de **violência contra superior** (art. 157 do Código Penal Militar — Decreto-Lei 1.001/69), **violência contra militar de serviço / sentinela** (art. 158), a figura **qualificada pelo resultado** (art. 159) e **violência contra inferior** (art. 175). São crimes de **hierarquia e disciplina** — os pilares da instituição militar (CF, art. 142) — cujo desvalor não está na simples agressão, mas na **relação funcional** entre agressor e ofendido. É exatamente essa relação que a defesa deve atacar.

> **Lição central:** o que qualifica esses tipos não é o soco — é o **nexo hierárquico-funcional**. Sem relação de superior/inferior *reconhecida em serviço ou em razão dele*, o fato desce para **lesão corporal** ou **vias de fato comuns** (militar ou até civil). **Antes de discutir excludente, ataque a subsunção**: prove que faltou a condição de superior/inferior, ou que a agressão não teve nexo com a função. Desclassificar muda a competência, a pena e a prescrição.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente dos **arts. 157, 158, 159 e 175 do CPM** e das excludentes dos **arts. 42 a 44 do CPM** na fonte oficial (Decreto-Lei 1.001/69). Verifique a competência (**EC 45/2004** e a redação atual do art. 9º do CPM sobre crime militar em tempo de paz, alterado pela **Lei 13.491/2017**) e **toda** súmula, tese ou precedente do STM/STJ/STF pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de fundamentar a peça. Na dúvida sobre um número de acórdão, **ensine a tese e cite o dispositivo — não arrisque o número**.

## Base legal

- **Art. 157, CPM** — violência contra superior (praticar violência contra superior); **§§** com aumento por arma, oficial/comandante, resultado lesão/morte (conferir os parágrafos e frações na redação vigente).
- **Art. 158, CPM** — violência contra militar de serviço (sentinela, vigia, plantão, ronda, e demais em serviço), com desvalor agravado pela função protegida.
- **Art. 159, CPM** — violência qualificada pelo resultado (lesão grave/gravíssima ou morte) — figura preterdolosa: dolo na violência, resultado agravador a título de culpa (art. 19, "b", CPM — versari conferir).
- **Art. 175, CPM** — violência contra inferior (praticar violência contra inferior), espelho hierárquico do art. 157.
- **Arts. 42 a 44, CPM** — **excludentes de ilicitude no CPM**: estado de necessidade (art. 43), legítima defesa (art. 44) e o rol do art. 42 (estrito cumprimento do dever legal, exercício regular de direito, e as hipóteses militares próprias). **Não se aplica o CP comum** — a excludente militar tem contornos próprios.
- **Art. 9º, CPM** (red. Lei 13.491/2017) — define **crime militar em tempo de paz** e a competência da Justiça Militar; determina a moldura de subsunção.
- **Arts. 69-83, CPM** — dosimetria militar (circunstâncias, atenuantes/agravantes próprias, ex.: art. 72; conferir numeração e conteúdo atualizados).
- **CPPM (Decreto-Lei 1.002/69)** — rito, cadeia de custódia, nulidades processuais militares (IPM, prisão, Conselho de Justiça).

## Como funcionam os tipos — o núcleo é a relação funcional

Cada tipo pressupõe uma **relação militar qualificada** no momento do fato:

| Tipo | Sujeito ativo | Sujeito passivo | Núcleo que a defesa ataca |
|------|---------------|-----------------|---------------------------|
| **Art. 157** — contra superior | militar (inferior) | **superior** | Havia relação de superioridade reconhecida? Em serviço / em razão da função? |
| **Art. 158** — contra militar de serviço | militar ou civil (conf. art. 9º) | militar **em serviço** (sentinela, plantão) | O ofendido estava efetivamente **em serviço**? A agressão teve nexo com o serviço? |
| **Art. 159** — qualificado pelo resultado | idem 157/158 | idem | O resultado agravador (lesão grave/morte) tem nexo? Houve dolo direto no resultado (aí muda o tipo) ou só culpa? |
| **Art. 175** — contra inferior | militar (**superior**) | inferior | Havia relação de inferioridade? Ou foi desavença pessoal sem nexo funcional? |

> **Superior e inferior no CPM.** A superioridade pode ser **hierárquica** (posto/graduação — art. superior conferir no CPM) ou **funcional** (por função exercida, ainda que de igual posto). A defesa deve verificar **qual** superioridade a denúncia invoca e se ela se sustenta no caso concreto (ex.: militares de mesma graduação, fora de serviço, em rixa pessoal → não há o crime hierárquico).

> **"Em razão da função" e "em serviço".** É o divisor de águas. Agressão entre militares por **motivo estritamente pessoal**, fora do serviço e sem relação com a função, tende a **descer** para lesão/vias de fato (militar comum, arts. 209/210 CPM, ou até crime comum, a depender do art. 9º). O nexo funcional é **elemento do tipo** — não é presumido.

## Roteiro de defesa — na ordem de ataque

### 1. Atacar a subsunção (a tese mais forte) — descaracterizar a relação funcional
- **Ausência de relação superior-inferior** no momento do fato (militares de mesmo posto/graduação sem função de comando; reservista; licenciado; situação fora da cadeia).
- **Ausência de nexo com a função/serviço**: rixa por motivo pessoal (dívida, ciúme, desavença), fora do horário e do local de serviço, sem ordem/ato de ofício envolvido. → **desclassificação** para lesão corporal (art. 209 CPM) ou vias de fato (art. 210 CPM), ou crime comum conforme art. 9º.
- **Ofendido não estava em serviço** (art. 158): comprovar escala, folga, dispensa — a condição de "militar de serviço" é elementar.
- **Consequência prática:** desclassificar reduz a pena, pode alterar a **competência** (Justiça comum vs. militar) e encurta a **prescrição**.

### 2. Excludentes de ilicitude do CPM (arts. 42-44) — não confundir com o CP
- **Legítima defesa (art. 44 CPM):** repulsa a **agressão injusta**, atual ou iminente, com meios moderados. No ambiente militar, atenção à **ordem manifestamente ilegal**: cumprir ordem ilegal não escusa (art. 38, §2º, CPM — conferir), mas **resistir a agressão ilegítima de superior** pode configurar legítima defesa, e não violência contra superior.
- **Estado de necessidade (art. 43 CPM):** perigo atual, não provocado, inevitável de outro modo.
- **Estrito cumprimento do dever legal / exercício regular (art. 42 CPM):** relevante para o **superior** acusado do art. 175 que agiu no exercício do poder disciplinar dentro dos limites legais (o excesso, porém, responde).
- **Ordem superior (obediência hierárquica):** ordem **não manifestamente ilegal** exclui a culpabilidade de quem cumpre (art. 38, §2º, CPM — conferir redação); a manifestamente ilegal, não.

### 3. Excludentes de culpabilidade e teses subjetivas
- **Coação irresistível / obediência hierárquica** (art. 38 CPM).
- **Erro** sobre a condição de superior/inferior ou sobre a situação de serviço (erro de tipo → exclui o dolo do elemento qualificador; pode restar lesão comum).
- **Embriaguez, inimputabilidade (arts. 48-49 CPM)** — conferir requisitos militares próprios.
- **Ausência de dolo específico** de atingir o superior *como superior* — se o agente sequer sabia da condição, falta o elemento subjetivo do tipo hierárquico.

### 4. Atacar o resultado agravador (art. 159) — preterdolo
- O art. 159 é **preterdoloso**: dolo na violência + **culpa** no resultado (lesão grave/morte). Se houve **dolo direto de matar/lesionar gravemente**, o enquadramento correto pode ser **outro tipo** (homicídio/lesão dolosa militar) — o que muda toda a estratégia; se **não houve nexo causal** entre a violência e o resultado, afasta-se a qualificadora.
- **Nexo causal e concausas (art. 29 CPM — conferir):** rompimento por concausa superveniente relativamente independente exclui a imputação do resultado agravado.
- **Prova pericial:** exigir laudo que estabeleça o nexo entre a conduta e a lesão/morte; atacar cadeia de custódia (skill `cadeia-de-custodia`).

### 5. Causa de aumento por emprego de arma e demais majorantes
- Verificar se a majorante do **emprego de arma** está **descrita e provada** (arma própria/imprópria; apreensão; perícia). Aumento não presumido; ataca-se por ausência de prova ou por **bis in idem** quando a arma já integra outra circunstância.
- Conferir aumentos por **oficial/comandante como vítima** e por **local sujeito à administração militar** — cada um exige subsunção específica.

### 6. Dosimetria militar (arts. 69-83 CPM)
- Circunstâncias judiciais e **atenuantes próprias do CPM** (ex.: relevância do valor moral, provocação da vítima — conferir arts.).
- **Atenuante da menoridade militar / bons antecedentes de caserna**; folha corrida militar (FLD).
- Discutir **regime e substituição** conforme o sistema do CPM (que difere do CP comum) — conferir cabimento de sursis militar (arts. 84 e ss., CPM) e as restrições próprias.

### 7. Nulidades processuais militares (CPPM)
- Vícios no **IPM (Inquérito Policial Militar)**: cerceamento de defesa, ausência de contraditório na fase que o exige.
- Composição e competência do **Conselho de Justiça**; **CPPM** para prazos e ritos.
- Cadeia de custódia da prova (arma, laudos) e **quebra** desqualifica a majorante.

## Teses típicas × contra-teses (acusação)

| Tese defensiva | Fundamento | Contra-tese provável da acusação |
|----------------|------------|----------------------------------|
| Não havia relação superior-inferior no fato | Elemento do tipo (157/175) | Superioridade funcional/hierárquica presente e documentada |
| Agressão por motivo pessoal, sem nexo funcional | Desclassificação p/ lesão/vias de fato | O nexo com a caserna/serviço basta; ambiente militar |
| Ofendido não estava em serviço (158) | Escala/folga/dispensa | Estava de sobreaviso / função permanente |
| Legítima defesa contra agressão ilegítima de superior | Art. 44 CPM | Ordem legal / desproporção da reação |
| Preterdolo: só culpa no resultado (159) | Art. 159 é qualificado pelo resultado | Dolo eventual quanto ao resultado |
| Sem emprego provado de arma | Ausência de perícia/apreensão | Prova testemunhal do uso |
| Erro sobre a condição de superior | Erro de tipo | Notoriedade da condição (uniforme, insígnia) |

## Súmulas e precedentes (sob o Citation Gate — conferir antes de citar)

> **Não invente jurisprudência.** Cite dispositivos do CPM/CPPM com certeza; para **qualquer** número de acórdão do STM/STJ/STF, informativo ou tema, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`. Prefira ensinar a tese e o dispositivo a arriscar o número.

- **Competência da Justiça Militar** — moldura do **art. 9º do CPM** com a redação da **Lei 13.491/2017** (ampliou crimes militares por extensão); **EC 45/2004** para a JMU/JME. Súmulas do STJ sobre competência JME × Justiça comum: **[NÃO VERIFICADO — conferir número e vigência]**.
- **Distinção crime militar × crime comum** entre militares por motivo pessoal — orientação jurisprudencial de que a **desavença estritamente pessoal, fora da função**, pode afastar a competência militar: **[NÃO VERIFICADO — confirmar a linha atual do STJ/STF]**.
- **Preterdolo e nexo causal** (art. 159): teses gerais de imputação objetiva/concausa — **fundamentar pelo dispositivo (arts. 159 e 29 CPM)**; qualquer acórdão específico **[NÃO VERIFICADO]**.
- **Legítima defesa e ordem manifestamente ilegal** — construção doutrinária consolidada; precedente específico **[NÃO VERIFICADO — conferir STM]**.

## Erros comuns / checklist do defensor

- [ ] Confirmou a **competência** (art. 9º CPM red. Lei 13.491/2017; EC 45/2004) e o **foro** (JMU/JME × comum)?
- [ ] Identificou **qual superioridade** a denúncia invoca (hierárquica ou funcional) e se ela se sustenta no fato?
- [ ] Provou (ou não há prova de) **nexo com a função/serviço** — elemento do tipo?
- [ ] No art. 158, comprovou a **condição de "em serviço"** do ofendido (escala/dispensa)?
- [ ] Avaliou **desclassificação** para lesão (art. 209 CPM) / vias de fato (art. 210 CPM) / crime comum antes de partir para excludente?
- [ ] Trabalhou as **excludentes do CPM (arts. 42-44)** — e **não** as do CP comum?
- [ ] No art. 159, separou **dolo na violência × culpa no resultado** (preterdolo) e verificou o **nexo causal**?
- [ ] Atacou a **majorante de arma** por ausência de perícia/apreensão ou bis in idem?
- [ ] Explorou a **dosimetria militar** (arts. 69-83 CPM) e o **sursis militar** (arts. 84 e ss.)?
- [ ] Verificou **nulidades do IPM / CPPM** e a **cadeia de custódia** (skill `cadeia-de-custodia`)?
- [ ] Passou **toda** citação pelo gate `jurisprudencia-stj-stf` (Citation Gate)?

**Anti-padrões (evitar):**
- Aplicar excludentes do **CP comum** (arts. 23-25) quando o caso é militar (valem os **arts. 42-44 do CPM**).
- Presumir a relação superior-inferior sem checar posto/graduação/função no momento do fato.
- Tratar toda briga entre militares como crime militar hierárquico — **motivo pessoal fora da função** pode desclassificar e mudar a competência.
- Aceitar a majorante de arma sem exigir **prova pericial/apreensão**.
- Confundir o **preterdolo do art. 159** com dolo direto no resultado (enquadramentos distintos).
- Citar **número de acórdão** do STM/STJ/STF de memória — sempre pelo gate.

## Lembretes finais

- **Subsunção antes de excludente:** o nexo hierárquico-funcional é elemento do tipo; derrubá-lo desclassifica e muda competência, pena e prescrição.
- **CPM tem excludentes próprias** (arts. 42-44) — nunca importe o CP comum.
- **Art. 159 é preterdoloso** — ataque o nexo causal e a natureza (dolo × culpa) do resultado.
- **Competência é questão de ordem pública** — confira art. 9º CPM (Lei 13.491/2017) e EC 45/2004 logo no início.
- **Citation Gate inegociável** — dispositivo com certeza; acórdão só depois de `jurisprudencia-stj-stf`.

## Conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. Skill de **DEFESA** (o militar acusado). A responsabilidade pela tese e pela peça é sempre do **advogado/defensor** (CED/EAOAB; Provimento 205/2021 da OAB; Defensoria sob a LC 80/94). Se atuar como **assistente da acusação ou pelo MP/MPM**, o roteador deve confirmar o **polo** e adaptar a estratégia — esta skill foi redigida pela ótica defensiva. Toda citação normativa e jurisprudencial passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça (resposta à acusação no CPPM, alegações finais, apelação ao STM), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
