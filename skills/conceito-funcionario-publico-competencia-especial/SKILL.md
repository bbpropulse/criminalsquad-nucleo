---
name: conceito-funcionario-publico-competencia-especial
description: >-
  Use como incidente/análise preliminar em qualquer crime funcional para trabalhar a elementar
  'funcionário público' (conceito e equiparação do art. 327 CP — estatal, empregado de estatal,
  terceirizado, quem exerce cargo/emprego/função ainda que transitoriamente e sem remuneração) e a
  comunicabilidade dessa elementar ao particular coautor/partícipe (art. 30 CP), e para FIXAR ou
  IMPUGNAR a competência por prerrogativa de foro… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, crimes-administracao-publica, competencia, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-conceito-funcionario-publico-competencia-especial"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["conceito-funcionario-publico-competencia-especial", "conceito funcionario", "competencia especial"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Funcionário Público (CP, art. 327) e Competência por Prerrogativa de Foro

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

Esta skill é um **insumo-base transversal** das defesas em crimes funcionais e *white-collar*. Ela cuida de dois pontos que atravessam quase todo crime contra a Administração Pública: (1) **quem é "funcionário público"** para o Direito Penal — a elementar do tipo, sua **equiparação** (art. 327, §1º) e sua **comunicabilidade** ao particular coautor (art. 30); e (2) **qual juízo é competente** quando o agente tem **foro por prerrogativa de função**, sob a doutrina restritiva do **AP 937**. Não é uma peça autônoma: é análise preliminar/incidental que **alimenta** a denúncia-defesa (atipicidade por ausência da elementar) ou a exceção de incompetência.

> **Lição central:** duas perguntas resolvem 90% dos casos. **Primeira — o agente é "funcionário público" no sentido do art. 327?** (Se não é e a condição é elementar, o fato pode ser **atípico** para ele; se é por equiparação, cabe discutir os limites do §1º.) **Segunda — se há foro por prerrogativa, o crime foi praticado NO cargo e EM RAZÃO dele?** (Se não, pós-AP 937 o processo desce para a 1ª instância.) Classifique a condição do agente e a natureza do ato **antes** de qualquer tese de mérito.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 327 do CP** (o §1º foi ampliado pela Lei 9.983/2000; o §2º — causa de aumento — tem redação própria) e a **cláusula de foro na Constituição** (arts. 102, I; 105, I; 96, III; 29, X; e as constituições estaduais para prefeitos/agentes locais). A **restrição do foro** decorre da **AP 937 QO/RJ (STF, Pleno, 2018)** — releia a tese fixada e os julgados posteriores que a modularam. Toda súmula, tema ou acórdão citado passa **obrigatoriamente** pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` antes do uso. Na dúvida, **omitir vence inventar**.

---

## PARTE I — O conceito de "funcionário público" (art. 327 CP)

### Base legal
- **Art. 327, *caput*, CP** — conceito **penal** (mais amplo que o administrativo): "considera-se funcionário público, para os efeitos penais, quem, embora **transitoriamente ou sem remuneração**, exerce **cargo, emprego ou função pública**."
- **Art. 327, §1º, CP** (funcionário **por equiparação**, red. Lei 9.983/2000) — equipara quem exerce cargo/emprego/função em **entidade paraestatal** e quem trabalha para **empresa prestadora de serviço contratada ou conveniada** para a **execução de atividade típica da Administração Pública**.
- **Art. 327, §2º, CP** — **causa de aumento** (não é elementar): pena aumentada quando os autores forem **ocupantes de cargo em comissão / função de direção / assessoramento** de órgão da administração direta, sociedade de economia mista, empresa pública ou fundação instituída pelo poder público.
- **Art. 30, CP** — **comunicabilidade das elementares**: as circunstâncias e condições de caráter pessoal **não se comunicam**, *salvo quando elementares do crime*. "Funcionário público" é **elementar** dos crimes funcionais próprios → comunica-se ao coautor/partícipe particular que a conheça.

### O conceito penal é amplo (e por quê importa)
O art. 327 adota conceito **funcional**, não formal: importa o **exercício** de cargo/emprego/função pública, ainda que **transitório** (mesário eleitoral, jurado, perito nomeado) ou **gratuito**. Não se exige investidura regular nem remuneração. Consequências práticas:
- **Estagiário, contratado temporário, requisitado, comissionado** — em regra, funcionário público para fins penais, se exercem função pública.
- **Mesário, jurado, perito, tradutor, curador nomeado** — exercentes de função pública transitória.
- A condição é **elementar** dos crimes funcionais próprios (peculato, corrupção passiva, concussão, prevaricação etc.): **sem ela, para aquele agente, o tipo funcional não se realiza** (podendo restar, quando muito, outro tipo comum).

### O §1º — funcionário por equiparação (o terreno de disputa)
O §1º **estende** o conceito a duas hipóteses:
1. quem exerce cargo/emprego/função em **entidade paraestatal**;
2. quem trabalha para **empresa prestadora de serviço contratada ou conveniada** para **execução de atividade típica da Administração Pública**.

Pontos sensíveis para a **defesa**:
- **Empregado de empresa privada terceirizada** só é equiparado se a empresa foi contratada/conveniada para **atividade típica** da Administração — não basta prestar serviço genérico ao ente público. Serviço-meio, atividade puramente privada ou vínculo sem execução de função pública **afastam** a equiparação.
- **Empregado de sociedade de economia mista / empresa pública** que explora atividade econômica: discutir se exerce **função pública** ou atividade empresarial privada — a extensão do conceito não é automática para toda relação de emprego na estatal. [Confira o tratamento jurisprudencial atual via `jurisprudencia-stj-stf`.]
- A **equiparação é elementar**: sua ausência, num crime funcional próprio, conduz à **atipicidade** para aquele agente. Atacar a subsunção é tese de mérito de primeira linha.

### O §2º — causa de aumento, não elementar
O §2º **não** cria funcionário público: pressupõe que o agente já o seja e **agrava** a pena pela posição de **direção/assessoramento/cargo em comissão**. Teses defensivas: (a) o agente **não** ocupava função de direção/assessoramento (mera chefia operacional não basta — confira o alcance na jurisprudência); (b) o aumento **não incide** sobre o particular equiparado por comunicabilidade se este não detinha a posição do §2º (a causa de aumento é **pessoal** e **não elementar** — pelo art. 30, condições pessoais **não** elementares **não** se comunicam).

### Comunicabilidade ao particular coautor (art. 30 CP)
Nos crimes funcionais **próprios**, "funcionário público" é **elementar**. Pelo art. 30, elementares de caráter pessoal **comunicam-se** ao coautor/partícipe **que delas tenha conhecimento**. Logo:
- O **particular** que concorre, dolosamente e ciente da condição funcional do comparsa, para peculato/corrupção passiva **responde pelo crime funcional** (como partícipe ou coautor), ainda que ele próprio não seja funcionário.
- **Requisito indispensável — o conhecimento (dolo abrangente):** o particular precisa **saber** que concorre para crime praticado por/junto a funcionário público. Sem esse conhecimento, **não há comunicação** da elementar → tese defensiva de **erro de tipo** (art. 20 CP) afastando o dolo quanto à elementar, ou de atipicidade da conduta do particular naquele tipo.
- **Distinguir corrupção passiva (funcionário) de corrupção ativa (particular):** o particular que oferece/promete vantagem responde por **corrupção ativa (art. 333)** — tipo **autônomo** —, não por comunicabilidade da passiva. A comunicabilidade do art. 30 opera nos crimes em que o particular **concorre** para o crime funcional, não onde a lei já criou tipo próprio para ele.

### Teses defensivas típicas (Parte I)
1. **Ausência da elementar** — o agente não exercia cargo/emprego/função pública no sentido do art. 327 → **atipicidade** do crime funcional próprio (pode subsistir tipo comum, se houver).
2. **Não enquadramento no §1º** — terceirizado/empregado de estatal que **não** executava **atividade típica** da Administração → afastar a equiparação.
3. **§2º inaplicável** — inexistência de cargo de direção/assessoramento/comissão; e não comunicação da causa de aumento (pessoal, não elementar) ao particular (art. 30, a contrario).
4. **Particular sem conhecimento da elementar** — **erro de tipo** (art. 20 CP): sem ciência da condição funcional, não se comunica a elementar; afasta o dolo quanto ao crime funcional.
5. **Enquadramento em tipo diverso** — o fato pode configurar crime comum (ex.: apropriação indébita, estelionato) e não o funcional, se ausente a elementar → reflexo em pena, prescrição e competência.

### Contra-teses (acusação — se o polo for MP/assistente)
- Conceito penal **amplo**: exercício de fato da função basta; irregularidade da investidura não descaracteriza.
- Equiparação do §1º alcança o terceirizado que executa **atividade-fim** delegada pela Administração.
- Comunicabilidade do art. 30: basta o **conhecimento** da condição funcional pelo particular — não se exige que ele próprio seja servidor.

---

## PARTE II — Competência por prerrogativa de foro

### Base legal e natureza
- **CF, art. 102, I** — foro no **STF** (Presidente, ministros, parlamentares federais, etc., nos casos ali previstos).
- **CF, art. 105, I** — foro no **STJ** (governadores, desembargadores, membros de tribunais e do MP da União/estados nos crimes comuns, etc.).
- **CF, art. 96, III / art. 29, X** e **constituições estaduais** — foro de magistrados, membros do MP, prefeitos e outros agentes locais (TJ/TRF conforme o caso).
- Natureza: é competência **ratione muneris** (em razão da função) — **absoluta**, portanto **improrrogável em regra e cognoscível de ofício**; sua violação gera **nulidade**. Mas o **alcance** do foro foi **restringido** pela jurisprudência (abaixo).

### A restrição do AP 937 (STF, Pleno, QO, 2018)
O STF fixou, no julgamento da **AP 937 QO/RJ**, que o **foro por prerrogativa de função aplica-se apenas aos crimes praticados (a) no exercício do cargo e (b) em razão das funções a ele relacionadas**. [Confira a redação exata da tese e os marcos temporais via `jurisprudencia-stj-stf`.] Consequências centrais:
- Crime **sem relação com o cargo** (ex.: fato pretérito ou da vida privada) → **não** atrai o foro especial → processa-se na **1ª instância**.
- **Marco de fixação/prorrogação:** o STF assentou que, **após o encerramento da instrução** (publicada a intimação para alegações finais), a competência do tribunal **se prorroga** e não se altera pela posterior perda do cargo. Ou seja: a **perda superveniente do foro** (fim do mandato, renúncia, não reeleição) desloca o feito para a 1ª instância **enquanto não superado esse marco**; superado, **prorroga-se** no tribunal.
- A tese, concebida para parlamentares, foi **estendida** por decisões posteriores a outras autoridades — **confira, caso a caso, a extensão aplicável** ao agente concreto, pois há modulações. [Verificar via `jurisprudencia-stj-stf`.]

### Perda superveniente do foro e prorrogação
Cenários a diagnosticar:
- **Deixou o cargo antes do marco de prorrogação** → competência **desce** à 1ª instância (declínio); atos já praticados costumam ser **aproveitados** (não anulados só pelo deslocamento) — confira o tratamento no caso concreto.
- **Deixou o cargo após o marco (instrução encerrada)** → competência **permanece** no tribunal (prorrogação).
- **Assumiu o cargo no curso do processo** (novo foro) → discutir o deslocamento **para cima** e o momento; e se o crime é **no cargo e em razão dele** (senão, AP 937 mantém em 1ª instância).

### Desmembramento (corréus sem foro)
- Havendo **corréus sem prerrogativa**, a regra atual é o **desmembramento**: mantém-se no tribunal apenas quem tem foro; os demais vão à 1ª instância, **salvo** quando a **cisão** causar prejuízo relevante à instrução/unidade do julgamento (juízo de conveniência do tribunal). A **defesa** do corréu sem foro em regra **pleiteia o desmembramento** (juiz natural de 1º grau, duplo grau pleno).
- **Conexão/continência não deslocam automaticamente** todos ao tribunal: a prerrogativa é **pessoal**; a atração do corréu comum é **excepcional** e fundamentada.

### Teses e impugnações típicas (Parte II)
1. **Incompetência por ausência de nexo funcional (AP 937)** — o crime **não** foi praticado no cargo e em razão dele → **declínio** para a 1ª instância. Arguir por **exceção de incompetência** (arts. 108-111 CPP) ou preliminar; competência **ratione muneris** é **absoluta** e cognoscível de ofício.
2. **Perda do foro antes do marco de prorrogação** → declínio; requerer remessa e reavaliação de atos que dependam do juízo natural.
3. **Desmembramento** — corréu sem foro pede separação para o juiz natural de 1º grau (garantia do **duplo grau** e do **juiz natural**, CF, art. 5º, LIII).
4. **Prorrogação indevida** — impugnar a permanência no tribunal quando **não** superado o marco da instrução, ou quando o crime não tem nexo funcional.
5. **Nulidade por juízo incompetente** — se autoridade com foro foi processada em 1º grau (ou o inverso), arguir a **incompetência absoluta** (nulidade), ressalvado o aproveitamento de atos não decisórios conforme a jurisprudência.

### Contra-teses (acusação)
- **Nexo funcional presente** — o crime relaciona-se ao cargo (ex.: corrupção no exercício da função) → foro mantido.
- **Prorrogação consumada** — instrução encerrada antes da saída do cargo → competência do tribunal se **firmou**.
- **Manutenção do corréu no tribunal** — cisão prejudicaria a unidade instrutória → excepcional atração fundamentada.

---

## Roteiro de análise (defesa) — passo a passo

1. **Qualifique o agente.** É funcionário público pelo *caput* (exercício de cargo/emprego/função, ainda que transitório/gratuito)? Se **não**, e a condição é **elementar**, sustente **atipicidade** do crime funcional.
2. **Se por equiparação (§1º),** teste a **atividade típica** da Administração e a natureza do vínculo (terceirizado/estatal). Serviço-meio ou atividade privada → **afastar** a equiparação.
3. **Verifique o §2º** — há cargo de direção/assessoramento/comissão? Se não, **excluir** a causa de aumento; se o coautor é particular, **não comunicar** o §2º (art. 30).
4. **Particular coautor:** ele **conhecia** a condição funcional? Sem conhecimento → **erro de tipo** (art. 20), afastando a comunicabilidade da elementar (art. 30).
5. **Reclassifique se possível** para tipo comum (reflete em pena, **prescrição** e **competência**).
6. **Há foro por prerrogativa?** Identifique o cargo e o dispositivo (CF 102/105/96/29 ou constituição estadual).
7. **Teste o nexo funcional (AP 937):** crime no cargo e em razão dele? Se **não** → **declínio** à 1ª instância.
8. **Diagnostique o momento** (saída do cargo × marco de prorrogação/instrução encerrada) → declínio ou prorrogação.
9. **Corréus sem foro?** Pleiteie **desmembramento** (juiz natural, duplo grau).
10. **Instrumentalize:** exceção de incompetência (arts. 108-111 CPP) e/ou preliminar; consigne a matéria para eventual recurso; passe todas as citações pelo gate `verificacao-citacoes`.

---

## Súmulas e precedentes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 704/STF** — não viola as garantias do juiz natural, contraditório e ampla defesa a **atração por conexão/continência** do processo do corréu ao foro por prerrogativa de função de um dos denunciados. *(Ler à luz da tendência atual ao desmembramento — a súmula é anterior à orientação restritiva; confira a compatibilização vigente.)*
- **AP 937 QO/RJ (STF, Pleno, 2018)** — restrição do foro aos crimes **praticados no cargo e em razão dele**; marco de prorrogação após o fim da instrução. **[NÃO VERIFICADO — conferir redação exata da tese, data e modulações via `jurisprudencia-stj-stf`.]**
- Qualquer **HC/REsp/RE/Inq** específico sobre equiparação do §1º (terceirizado, empregado de estatal), sobre comunicabilidade do art. 30, ou sobre extensão do AP 937 a outras autoridades: **[NÃO VERIFICADO]** — **não citar número/informativo/tema sem conferência**. Prefira ensinar a **tese e o dispositivo** a arriscar um acórdão.

> Regra de ouro do Citation Gate: dispositivos de lei (arts. 327, 30, 20, 333 CP; 108-111 CPP; CF 102/105/96/29) e súmulas notórias podem ser citados com certeza; **todo precedente com número** — sem certeza absoluta — vai marcado **[NÃO VERIFICADO]** e conferido antes de ir para a peça.

---

## Erros comuns / checklist

- [ ] Confundir conceito **penal** (art. 327, amplo) com conceito **administrativo** de servidor (mais estrito)?
- [ ] Tratar o **§2º** como elementar (é **causa de aumento**) e comunicá-lo indevidamente ao particular?
- [ ] Esquecer que a **elementar** "funcionário público" **comunica-se** ao particular coautor **que a conheça** (art. 30) — e que, sem conhecimento, há **erro de tipo**?
- [ ] Equiparar automaticamente **todo terceirizado/empregado de estatal** sem testar a **atividade típica** da Administração (§1º)?
- [ ] Aplicar o foro por prerrogativa a crime **sem nexo funcional** (violação da restrição do **AP 937**)?
- [ ] Ignorar o **marco de prorrogação** (instrução encerrada) ao avaliar a **perda superveniente** do cargo?
- [ ] Manter corréu **sem foro** no tribunal sem fundamentar a excepcionalidade (deveria ser **desmembramento**)?
- [ ] Arguir a incompetência **ratione muneris** como se fosse relativa (é **absoluta**, cognoscível de ofício, gera nulidade)?
- [ ] Citar **AP 937** ou qualquer precedente **de memória**, sem passar pelo gate `verificacao-citacoes`?
- [ ] Deixar de **reclassificar** para tipo comum quando ausente a elementar (impacto em pena/prescrição/competência)?

---

## Como esta skill se conecta

- **Insumo para** as defesas *white-collar* e funcionais (peculato, corrupção, concussão, prevaricação, fraude a licitação): a discussão da **elementar** e da **competência** é preliminar à tese de mérito.
- **Exceção de incompetência / preliminares:** ao arguir a competência, componha com a skill de **exceções processuais** (esta traz a **doutrina específica** do art. 327 e do AP 937 que a genérica não cobre).
- **Redação:** ao converter a análise em peça, aplique também `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão.
- **Verificação:** toda citação passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à análise e à peça; a responsabilidade pela tese, pela classificação do agente e pela arguição de competência é sempre do **advogado** (CED/EAOAB; **Provimento 205/2021** da OAB). Não substitui o exame do caso concreto nem a leitura dos autos.
- **Polo:** esta skill é **majoritariamente defensiva** (foco em atipicidade por ausência de elementar e em impugnação de competência). As **contra-teses** de acusação foram assinaladas para quem atua no **polo acusatório (MP/assistente)** — o **roteador deve conferir o polo** da instituição (`company.md`) antes de orientar o uso. Ética por polo: OAB + Prov. 205/2021 (advocacia); **CNMP** (Ministério Público); **LC 80/94** (Defensoria).
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese citado de memória — tudo confere-se em fonte oficial antes de protocolar. Há sanções reais por jurisprudência inventada por IA.
