---
name: acareacao-fase-policial
description: >-
  Use ao lidar com ACAREAÇÃO no inquérito policial (CPP, arts. 229-230, aplicáveis ao IP por força
  do art. 6º) — requerer acareação favorável entre depoentes que se contradizem em ponto essencial,
  ou resistir a acareação prejudicial ao investigado invocando o nemo tenetur se detegere (o
  investigado não é obrigado a se submeter), controlar o registro das divergências no termo e
  preservar o resultado para uso na instrução… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, inquerito, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acareacao-fase-policial"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acareacao-fase-policial", "acareacao fase", "fase policial"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Acareação na Fase Policial (CPP, arts. 229-230 c/c art. 6º)

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

Esta skill orienta a atuação da **defesa** diante da **acareação realizada durante o inquérito policial** — o ato de **colocar frente a frente** duas ou mais pessoas (testemunhas, investigado, ofendido) cujos depoimentos **divergem sobre fato ou circunstância relevante**, para que expliquem a contradição. É meio de prova nominado (arts. 229-230 do CPP), plenamente aplicável à fase pré-processual por força do **art. 6º do CPP**, que autoriza a autoridade policial a colher todas as provas úteis à apuração.

A questão é **estratégica e de dois lados**: a defesa pode ter interesse em **requerer** a acareação (quando o confronto tende a expor a fragilidade da prova acusatória) ou em **resistir** a ela (quando prejudicial, sobretudo se pretende forçar o investigado a falar — barreira do *nemo tenetur*).

> **Lição central:** decida o **lado** antes de agir. Acareação **entre testemunhas/depoentes acusatórios que se contradizem** costuma ser aliada da defesa — requeira e exija o registro fiel da divergência. Já a acareação que **envolve o investigado** esbarra no **direito ao silêncio (CF, art. 5º, LXIII)**: o investigado **não é obrigado** a se acarear nem a responder, e a recusa **não pode gerar prejuízo**. E lembre: o que vale na fase policial é o **registro** — o termo de acareação é material de **contradição** que será usado na instrução, não prova que, sozinha, condena (art. 155 do CPP).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 229 e 230 do CPP** e do **art. 6º** (poderes da autoridade policial) na fonte oficial antes de fundamentar. Confira também súmulas, temas e eventual overruling via a skill `jurisprudencia-stj-stf`. Qualquer precedente específico (número de HC/RHC/REsp, informativo, tema) deve passar pelo gate de `verificacao-citacoes` — na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 229 do CPP** — cabimento da acareação: entre acusados, entre acusado e testemunha, entre testemunhas, entre acusado ou testemunha e o ofendido, e entre os ofendidos, **sempre que divergirem** em suas declarações sobre **fatos ou circunstâncias relevantes**. O parágrafo único determina que a autoridade **explique os pontos de divergência**, reinquira os acareados e **reduza a termo** o que ocorrer.
- **Art. 230 do CPP** — acareação de pessoa **ausente** (por precatória): quando os acareados residem em comarcas distintas, transcrevem-se as declarações e devolve-se para nova inquirição, dispensando-se a presença física.
- **Art. 6º do CPP** — poderes-deveres da autoridade policial no inquérito; é o dispositivo que **estende a acareação à fase policial** (o IP colhe todas as provas úteis, inclusive as nominadas dos arts. 229-230).
- **CF, art. 5º, LXIII + Súmula Vinculante 11 (algemas) e o princípio *nemo tenetur se detegere***: o preso/investigado tem direito de permanecer **calado**; disso decorre que **não é obrigado a produzir prova contra si**, o que abrange a **recusa a se submeter à acareação** ou a **responder** nela.
- **Art. 155 do CPP** — o juiz não pode fundamentar condenação **exclusivamente** em elementos colhidos no inquérito, ressalvadas as provas cautelares, não repetíveis e antecipadas. Define o **valor** do termo de acareação policial na sentença.

## O que é (e o que não é) a acareação

- **É** um confronto de **versões já prestadas**: só cabe acareação se as pessoas **já depuseram** e há **divergência** entre os depoimentos sobre ponto **relevante**. Não se acareia quem ainda não foi ouvido, nem sobre ponto irrelevante.
- **Não é** interrogatório novo nem "acerto" de versões: a autoridade **aponta a contradição** e pede esclarecimento; não pode induzir, pressionar ou coagir a mudança de versão.
- **Registro é da essência** (art. 229, parágrafo único): tudo o que os acareados disserem — inclusive **quem manteve** e **quem alterou** a versão, e **quem se calou** — deve ser **reduzido a termo**. Sem registro fiel, o ato perde utilidade probatória e vira campo de nulidade.

## Metodologia — roteiro de análise e atuação da defesa

**Passo 1 — Mapear as divergências.** Antes de qualquer requerimento, cotejar os depoimentos já colhidos no IP e **identificar as contradições** sobre fatos/circunstâncias relevantes (autoria, presença no local, horário, dinâmica, reconhecimento). Sem divergência concreta e relevante, não há hipótese legal de acareação (art. 229).

**Passo 2 — Decidir o lado (favorável × prejudicial).**
- **Favorável (requerer):** quando a acareação tende a **expor a fragilidade** da prova acusatória — ex.: duas testemunhas de acusação que se contradizem sobre a autoria; a confrontação pode fazer uma delas **recuar** ou **hesitar**, e isso fica registrado.
- **Prejudicial (resistir):** quando a acareação serve para **reforçar** a versão acusatória ou para **arrancar** manifestação do investigado. Aqui entram o *nemo tenetur* e o controle do ato.

**Passo 3 — Se favorável: requerer com precisão.** Peticionar à autoridade policial (art. 6º c/c art. 229) indicando **quem** deve ser acareado, **os pontos exatos** de divergência (transcrevendo os trechos contraditórios) e **por que** são relevantes. Requerimento genérico ("acareação das testemunhas") é frágil; requerimento **cirúrgico** (ponto a ponto) é difícil de indeferir sem fundamentação.

**Passo 4 — Se prejudicial ao investigado: opor o *nemo tenetur*.** O investigado **não é obrigado** a comparecer para se acarear nem a **responder** na acareação (CF, art. 5º, LXIII). A defesa registra que a presença/participação é **facultativa**, que a **recusa é direito** e **não pode ser interpretada em prejuízo** (não gera confissão ficta nem presunção de culpa). Se a autoridade insistir em conduzir coercitivamente para acareação, cabe questionar a legalidade da condução.

**Passo 5 — Controlar o ato e o termo.** Presente à acareação (o advogado pode e deve acompanhar), a defesa fiscaliza: (a) que a autoridade **aponte a contradição** sem induzir; (b) que **não haja coação** sobre os acareados; (c) que o **termo registre fielmente** o que cada um disse, quem manteve/alterou a versão e quem se calou; (d) requerer a **consignação** de qualquer irregularidade e das próprias perguntas, se indeferidas.

**Passo 6 — Preservar o resultado para a instrução.** O termo de acareação é **material de contradição**: se uma testemunha acusatória recuou ou hesitou no IP, isso será **confrontado em juízo** na AIJ, quando ela for reinquirida (ver skill `audiencia-inquiricao-testemunhas`). O objetivo, muitas vezes, não é "vencer" na delegacia, mas **cristalizar a divergência** para explorá-la depois, sob o contraditório judicial.

## Teses da defesa (e as contra-teses)

**Tese 1 — Nemo tenetur: o investigado não se acareia obrigatoriamente.**
O direito ao silêncio (CF, art. 5º, LXIII) e a garantia de não produzir prova contra si abrangem a **recusa a se submeter à acareação** e a **permanecer calado** durante ela. A recusa é **exercício de direito** e **não pode fundamentar** juízo de culpa nem ser valorada negativamente.
- *Contra-tese (acusação):* a acareação seria ato instrutório regular e o investigado, uma vez presente, deveria responder. **Resposta da defesa:** o comparecimento não converte o silêncio em dever; a garantia constitucional prevalece sobre a conveniência instrutória.

**Tese 2 — Sem divergência relevante, não cabe acareação.**
A acareação pressupõe **contradição concreta sobre fato/circunstância relevante** (art. 229). Acareação sobre ponto irrelevante, ou entre quem não divergiu de fato, é ato **sem substrato legal** — a defesa impugna e requer consignação.

**Tese 3 — Acareação como instrumento de defesa (requerimento favorável).**
Havendo **contradição entre depoentes acusatórios**, a defesa tem interesse legítimo em requerer a acareação para **evidenciar a fragilidade** da prova. O indeferimento imotivado do requerimento defensivo é vício a registrar (cerceamento na formação da prova).

**Tese 4 — Vício de coação/indução anula o ato.**
Se a autoridade **induziu**, **pressionou** ou **coagiu** os acareados a "harmonizar" versões, o termo é **imprestável**; a defesa aponta o vício na hora, exige consignação e o suscita depois (a prova policial já é de eficácia limitada — art. 155).

**Tese 5 — Valor probatório limitado do termo policial (art. 155).**
O termo de acareação, colhido **sem contraditório judicial**, **não pode**, sozinho, embasar condenação (art. 155, CPP). Serve como **elemento de investigação** e, sobretudo, como **material de confronto** na instrução — não como prova autônoma e suficiente.

## Súmulas, dispositivos e diretrizes (sob o Citation Gate)

- **CPP, arts. 229 e 230** — cabimento, procedimento (apontar divergência, reinquirir, reduzir a termo) e a modalidade por precatória para ausentes. **Citáveis** com conferência da redação vigente.
- **CPP, art. 6º** — poderes da autoridade policial; base para a acareação no IP. **Citável.**
- **CPP, art. 155** — vedação de condenação fundada **exclusivamente** em elementos do inquérito (ressalvadas cautelares, não repetíveis e antecipadas). **Citável.**
- **CF, art. 5º, LXIII** — direito ao silêncio, origem do *nemo tenetur se detegere*. **Citável.**
- **Súmula Vinculante 11/STF** — uso excepcional de algemas; relevante quando a acareação/condução se dá com o investigado preso (vedação de constrangimento além do necessário). Conferir aplicação ao caso.
- **Jurisprudência específica** (STJ/STF sobre alcance do *nemo tenetur* na acareação, sobre nulidade por coação no ato, sobre valor do termo policial): **NÃO citar de memória**. Qualquer número de HC/RHC/REsp, informativo ou tema deve ser **confirmado** via `jurisprudencia-stj-stf` e passar por `verificacao-citacoes`. Prefira sustentar a **tese e o dispositivo** a arriscar um acórdão. [NÃO VERIFICADO para todo precedente numérico — conferir antes de usar.]

## Erros comuns (anti-padrões)

- **Tratar a acareação do investigado como obrigatória.** Não é: o *nemo tenetur* autoriza a recusa e o silêncio, sem prejuízo.
- **Requerer acareação genérica** ("acarear as testemunhas") sem apontar os **pontos exatos** de divergência — pedido fraco e facilmente indeferido.
- **Não acompanhar o ato.** A ausência da defesa deixa o termo à mercê da condução da autoridade; a fiscalização presencial é o que garante o registro fiel.
- **Deixar de exigir a consignação** de irregularidades, perguntas indeferidas, coação ou indução — sem registro, a nulidade "não aconteceu".
- **Confundir acareação com novo interrogatório** ou aceitar que a autoridade "harmonize" versões — a função é apontar a contradição, não eliminá-la.
- **Superestimar o termo policial** como se fosse prova suficiente — ele vale como material de contradição, sob a régua do art. 155.
- **Esquecer o objetivo de médio prazo:** cristalizar a divergência para explorá-la na AIJ, quando o depoente for reinquirido sob contraditório.

## Checklist final (defesa)

- [ ] As **divergências** foram mapeadas ponto a ponto entre os depoimentos já colhidos no IP?
- [ ] A divergência é sobre **fato/circunstância relevante** (art. 229)? Se não, impugnar.
- [ ] Definido o **lado**: acareação é **favorável** (requerer) ou **prejudicial** (resistir)?
- [ ] Se favorável: requerimento **cirúrgico**, com transcrição dos trechos contraditórios e da relevância?
- [ ] Se envolve o investigado: registrada a **facultatividade** e o **direito ao silêncio** (CF, art. 5º, LXIII), sem prejuízo pela recusa?
- [ ] A defesa **acompanhou** o ato e fiscalizou indução/coação?
- [ ] O **termo** registra fielmente o que cada um disse, quem manteve/alterou a versão e quem se calou?
- [ ] Irregularidades, perguntas indeferidas e protestos foram **consignados**?
- [ ] O resultado foi **preservado** para confronto na AIJ (reinquirição judicial)?
- [ ] Súmulas/dispositivos conferidos na **redação vigente** e precedentes passados por `jurisprudencia-stj-stf` / `verificacao-citacoes`?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta skill é apoio à análise e à atuação na fase policial; **não substitui** o juízo do advogado responsável, que decide a estratégia (requerer × resistir) à luz do caso concreto e dos autos.
- **Citation Gate inegociável:** dispositivos de lei e súmulas notórias podem ser citados com conferência de vigência; **todo precedente específico** (número de acórdão, informativo, tema) passa por `jurisprudencia-stj-stf` e `verificacao-citacoes`. **Melhor faltar precedente do que citar julgado inexistente** — há sanções reais por jurisprudência inventada por IA.
- **Ética (advocacia):** atuação sob o Estatuto da OAB, o Código de Ética e Disciplina e o **Provimento 205/2021**; a responsabilidade pela condução e pelas impugnações é sempre do advogado (CED, art. 2º). Em Ministério Público, observar o CNMP; na Defensoria, a LC 80/94.
- **Sigilo e LGPD:** dados do investigado/assistido nunca em repositório público; o material de casos concretos é sigiloso.

**Padrão de redação:** ao converter a análise em peça (requerimento de acareação, impugnação, memorial), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
