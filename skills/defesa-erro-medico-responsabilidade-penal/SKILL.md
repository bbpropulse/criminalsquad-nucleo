---
name: defesa-erro-medico-responsabilidade-penal
description: >-
  Use ao elaborar a DEFESA penal do profissional de saúde acusado de ERRO MÉDICO — homicídio culposo
  (CP 121, §3º) ou lesão corporal culposa (CP 129, §6º): ausência de culpa (lex artis, álea
  terapêutica), rompimento do nexo causal (concausas), erro profissional escusável x imperícia,
  consentimento informado e impugnação do laudo pericial médico-legal. Gatilhos: erro médico,
  homicídio culposo, lesão culposa, imperícia… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, erro-medico, contra-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-erro-medico-responsabilidade-penal", "defesa erro", "responsabilidade penal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-erro-medico-responsabilidade-penal"]
---

# Erro médico — responsabilidade penal do profissional de saúde (defesa)

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

Esta skill orienta a **defesa técnica** do médico (e demais profissionais de saúde) acusado de **erro médico** na esfera **penal**, tipicamente por **homicídio culposo** (art. 121, §3º, do CP) ou **lesão corporal culposa** (art. 129, §6º, do CP). O objeto jurídico protegido é a **vida** e a **integridade corporal** do paciente, mas a persecução recai sobre **conduta culposa** — nunca dolosa —, o que desloca toda a controvérsia para dois campos: a **existência de culpa** (violação do dever objetivo de cuidado) e o **nexo causal** entre a conduta e o resultado.

> **Lição central:** o erro médico penalmente relevante **não** é todo mau resultado, nem toda insatisfação do paciente — é a **conduta que viola o dever objetivo de cuidado** (imprudência, negligência ou imperícia) **e** que **causou** o resultado. A medicina é **obrigação de meio, não de resultado**: o médico se obriga a atuar conforme a *lex artis*, não a curar. Antes de qualquer tese, separe rigorosamente **(a)** o resultado infeliz (morte/lesão) — que existe, **(b)** a conduta do profissional — que pode ter sido correta, e **(c)** o vínculo causal entre elas — que pode estar rompido. Resultado ruim **não** é sinônimo de culpa; e culpa sem nexo, ou nexo sem culpa, **não** fecha o tipo culposo. É nesse eixo — **culpa e nexo** — que a defesa ganha ou perde.

> **Cautela de vigência (obrigatória antes de citar):** (1) a matéria é **casuística** — o desfecho depende do **laudo pericial** e das circunstâncias clínicas concretas, e **não há súmula que resolva erro médico de plano**; **todo precedente** passa pela skill `jurisprudencia-stj-stf` antes de ir à peça (**[NÃO VERIFICADO]** por padrão). (2) A interface com a deontologia médica se dá pelo **Código de Ética Médica e Resoluções do CFM** — cuja **redação vigente** deve ser conferida em **fonte oficial atual** (as normas do Conselho são revisadas periodicamente); não cite número de resolução de memória. (3) Confira o **recorte temporal** dos fatos e a redação vigente dos tipos culposos. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 121, §3º, do CP** — **homicídio culposo** (pena de detenção, de 1 a 3 anos). É o tipo aplicável quando do erro resulta a **morte** do paciente.
- **Art. 121, §4º, do CP** — **causa de aumento** de pena no homicídio culposo pela **inobservância de regra técnica de profissão, arte ou ofício** (entre outras hipóteses). Atenção defensiva: essa majorante **não pode coincidir** com a própria **imperícia** que fundamenta a culpa, sob pena de **bis in idem** — é um dos pontos de ataque à dosimetria (ver adiante).
- **Art. 129, §6º, do CP** — **lesão corporal culposa** (pena de detenção, de 2 meses a 1 ano), aplicável quando do erro resulta **lesão à integridade** do paciente, sem morte.
- **Art. 18, II, do CP** — define o **crime culposo**: o agente dá causa ao resultado por **imprudência, negligência ou imperícia**. É a moldura das três modalidades de culpa (ver seção de subsunção).
- **Relação de causalidade (nexo causal) — art. 13 do CP**, com a regra da **concausa superveniente relativamente independente** (art. 13, §1º), central para a tese de **rompimento do nexo**. A **teoria da imputação objetiva** agrega o filtro normativo: só se imputa o resultado a quem **criou ou incrementou risco proibido** — o **risco permitido** (inerente ao ato médico) exclui a imputação.
- **Art. 159 do CPP** — **exame de corpo de delito e perícia**; direito da defesa de indicar **assistente técnico** e formular **quesitos**. É a base processual para disputar o **laudo médico-legal**, prova central nesses casos.
- **Interface deontológica** — **Código de Ética Médica e Resoluções do CFM** (fonte oficial atual): definem a *lex artis*, o **consentimento informado** e os deveres do profissional. Servem de parâmetro do dever de cuidado, mas a **infração ética não é, por si, crime** — são esferas autônomas.
- **Interface cível** — a responsabilidade civil do médico é **subjetiva** e por **obrigação de meio** (não de resultado); a absolvição ou a existência de culpa numa esfera **não vincula automaticamente** a outra (independência relativa das instâncias). Útil para conter a importação acrítica de conclusões cíveis para o processo penal.

## Subsunção / requisitos — o roteiro que a defesa disseca

O crime culposo (art. 18, II, c/c 121, §3º, ou 129, §6º) exige, **cumulativamente**:

1. **Conduta voluntária** do profissional (ação ou omissão no ato de saúde).
2. **Violação do dever objetivo de cuidado**, em uma das três modalidades de culpa:
   - **Imprudência** — agir açodado, sem a cautela devida (ex.: intervir sem exames que a *lex artis* exigia).
   - **Negligência** — deixar de fazer o que o cuidado impunha (ex.: omitir monitoramento, não acompanhar o pós-operatório).
   - **Imperícia** — falta de aptidão técnica **para o ato praticado** dentro da própria especialidade/habilitação.
3. **Resultado naturalístico** — morte (121, §3º) ou lesão (129, §6º).
4. **Nexo causal** entre a conduta culposa e o resultado (art. 13 do CP), sem concausa que o rompa.
5. **Previsibilidade objetiva** do resultado e **ausência de dolo** (inclusive eventual — se houver assunção do risco, muda-se de figura).

**Método:** teste **elemento por elemento**. A ausência de **qualquer um** — sobretudo a **culpa** (2) ou o **nexo** (4) — leva à **atipicidade** e à **absolvição**. Não confunda: **erro** existe; **culpa** é o erro **evitável** que viola o cuidado exigível. O **erro profissional escusável** — resultado ligado à **álea terapêutica** e ao **risco inerente**, com atuação conforme a *lex artis* — **não** é culpa e **não** tipifica.

## Erro escusável x conduta culposa — a fronteira decisiva

- **Erro escusável (não punível):** o profissional atuou **conforme a *lex artis*** (protocolos, diretrizes/*guidelines*, estado da técnica), e o mau resultado decorreu de **risco inerente**, reação idiossincrática, evolução imprevisível da doença ou **álea terapêutica**. A medicina lida com incerteza; o resultado adverso **previsto e aceito** dentro do risco permitido é fortuito, não crime.
- **Conduta culposa (punível):** houve **desvio** do padrão técnico exigível — o resultado era **evitável** pela cautela que o profissional podia e devia observar. Aqui a acusação precisa apontar **qual regra de cuidado** foi violada e **como** essa violação **causou** o dano.
- **Chave da defesa:** demonstrar **aderência à *lex artis*** (o que se fez era o indicado à época e às condições reais) e que o resultado se situa na **álea** — não na **falha evitável**. Isso desloca o caso do art. 18, II, para o **fortuito atípico**.

## Catálogo de teses defensivas

1. **Atipicidade por ausência de culpa** — atuação **conforme a *lex artis*** e os protocolos aplicáveis; resultado ligado a **risco inerente/álea terapêutica**; ausência de violação do dever objetivo de cuidado (elemento 2).
2. **Rompimento do nexo causal (art. 13, §1º, CP)** — **concausa** superveniente relativamente independente (ex.: infecção hospitalar autônoma, intercorrência estranha ao ato), **estado mórbido prévio** do paciente que determinou o desfecho, **culpa exclusiva de terceiro** (outra equipe, outro serviço) ou **da própria vítima** (não adesão ao tratamento, omissão de dados, alta a pedido).
3. **Imputação objetiva — risco permitido** — o ato médico é atividade de **risco autorizado**; sem **criação ou incremento de risco proibido**, o resultado **não se imputa** ao profissional.
4. **Erro profissional escusável x imperícia** — distinção entre a **falha honesta** dentro da técnica (escusável) e a **inaptidão** para o ato; imperícia exige **falta concreta de habilitação/técnica**, não mero insucesso.
5. **Consentimento informado documentado** — o paciente foi **informado dos riscos** e os **assumiu**; o resultado adverso previamente esclarecido reforça a **álea** e afasta a surpresa exigível para o cuidado.
6. **Impugnação do laudo pericial (art. 159 do CPP)** — atacar **metodologia**, premissas, ausência de resposta aos **quesitos**, exame incompleto, perito sem a especialidade adequada; requerer **novo laudo/esclarecimentos** e apresentar **assistente técnico** e parecer da especialidade.
7. **Independência das instâncias** — eventual conclusão **cível** (obrigação de meio) ou **administrativa/ética (CFM)** **não** transporta culpa penal automática; a culpa penal exige demonstração **própria**, sob standard mais estrito.
8. **Ausência de dolo (inclusive eventual)** — reafirmar que se trata de figura **culposa**; não há assunção do risco do resultado, o que impede a migração para tipo doloso.
9. **In dubio pro reo sobre a causalidade e a culpa** — quando a perícia é **inconclusiva** sobre o que causou o resultado ou sobre a existência de desvio técnico, a dúvida **absolve** (art. 386, VII, do CPP).
10. **Dosimetria — vedação ao bis in idem** — impedir que a **imperícia** que fundamenta a culpa seja **também** usada como **causa de aumento** do art. 121, §4º (inobservância de regra técnica); afastar majorante mal fundamentada; primariedade e bons antecedentes; regime aberto e substituição por restritivas (pena baixa).
11. **Extinção da punibilidade** — verificar **prescrição** (penas baixas dos tipos culposos → prazos curtos) e, na **lesão culposa**, eventual **condição de procedibilidade** (natureza da ação penal) — **conferir** a regra aplicável antes de sustentar.

## Contra-teses da acusação (antecipar)

- **Violação demonstrada da *lex artis*** — protocolo/diretriz claro e descumprido; conduta fora do estado da técnica.
- **Nexo causal afirmado pelo laudo** — perícia médico-legal apontando a conduta como **causa** direta e evitável do resultado.
- **Imperícia por ato fora da habilitação** — profissional atuando em campo para o qual não tinha aptidão/especialização.
- **Negligência no acompanhamento** — omissão de monitoramento, de exames ou do dever de cuidado no pós-procedimento.
- **Consentimento viciado ou ausente** — falta de informação adequada sobre riscos como reforço da culpa.
- **Causa de aumento (121, §4º)** — inobservância de regra técnica como majorante.

A defesa deve **atacar cada uma na origem**: qualidade e método do **laudo**; individualização de **qual** regra técnica teria sido violada e **quando**; a **cadeia causal** real (concausas, estado prévio); a distinção entre **insucesso** e **desvio evitável**; e a **documentação** do consentimento. Exija da acusação que aponte a **conduta devida omitida** — não basta afirmar que o resultado foi ruim.

## Prova pericial e prontuário — o coração do caso

- O **laudo médico-legal** é a prova **determinante**. Sob o art. 159 do CPP, a defesa deve **desde cedo** indicar **assistente técnico** com a **especialidade pertinente**, formular **quesitos** dirigidos à *lex artis* e ao nexo, e requerer **esclarecimentos** do perito oficial.
- **Ataque metodológico:** exame baseado apenas em prontuário sem contextualizar as condições reais; perito de área diversa opinando sobre especialidade específica; conclusões que confundem **resultado adverso** com **falha técnica**; ausência de resposta a quesito essencial.
- **Prontuário e documentação** (registros, termo de consentimento, evolução clínica, prescrições) são a **memória técnica** da conduta — sua integridade, cronologia e completude sustentam a tese de aderência à *lex artis*. Questione também a **cadeia de custódia** de vestígios e exames quando pertinente.
- **Separe fato, prova, inferência e tese:** o **fato** (o que ocorreu clinicamente), a **prova** (laudo, prontuário, testemunhos técnicos), a **inferência** (o que dela se extrai sobre culpa/nexo) e a **tese** (atipicidade, rompimento do nexo). Não apresente **inferência como fato** — é o gate.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** erro médico é matéria **casuística**; precedentes sobre **nexo causal**, **imperícia** e **valor do laudo** dependem das circunstâncias e **não** há súmula que decida o mérito por si. **Não cite acórdão de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo** via `jurisprudencia-stj-stf` antes de levar à peça.

- Precedentes sobre **exigência de nexo causal demonstrado** e vedação à **responsabilidade penal objetiva** em erro médico → **[NÃO VERIFICADO]** — conferir via `jurisprudencia-stj-stf`.
- Entendimentos sobre **bis in idem** entre a **imperícia** (culpa) e a **causa de aumento** do art. 121, §4º → **[NÃO VERIFICADO]** — conferir.
- Posição sobre **valor e limites do laudo pericial** e sobre **in dubio pro reo** em causalidade inconclusiva → **[NÃO VERIFICADO]** — conferir.
- **Código de Ética Médica / Resoluções do CFM** (consentimento informado, *lex artis*): **conferir a redação vigente em fonte oficial atual** — não citar número de norma de memória.

## Checklist e anti-padrões

- [ ] **Culpa:** a acusação apontou **qual** regra de cuidado (imprudência/negligência/imperícia) foi violada, e **quando**?
- [ ] **Lex artis:** há prova de que a conduta seguiu protocolos/diretrizes aplicáveis à época e às condições reais?
- [ ] **Álea x falha:** o resultado se situa em **risco inerente/álea terapêutica** ou em **desvio evitável**?
- [ ] **Nexo causal:** há **concausa**, **estado prévio** ou **culpa de terceiro/da vítima** que rompa o vínculo (art. 13, §1º)?
- [ ] **Risco permitido:** houve criação/incremento de **risco proibido**, ou o ato estava no risco autorizado?
- [ ] **Laudo:** perito da especialidade correta? Quesitos respondidos? **Assistente técnico** indicado (art. 159 CPP)?
- [ ] **Consentimento informado** documentado nos autos?
- [ ] **Bis in idem:** a imperícia foi indevidamente usada **também** como aumento do §4º?
- [ ] **Prescrição** e **condição de procedibilidade** (lesão culposa) verificadas?
- [ ] **Independência das instâncias** afirmada (cível/ético não vincula o penal)?
- [ ] **Súmulas e precedentes conferidos** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- Tratar **mau resultado** (morte/lesão) como **prova de culpa** — a medicina é obrigação de **meio**.
- Aceitar **responsabilidade penal objetiva** — sem culpa concreta e nexo, não há crime culposo.
- Confundir **erro escusável** (álea, risco inerente) com **imperícia** (inaptidão técnica).
- Deixar de **impugnar o laudo** e de indicar **assistente técnico** no momento próprio (art. 159 CPP).
- Importar conclusão **cível/ética** como se decidisse o **penal**.
- Permitir **bis in idem** entre a imperícia (culpa) e a majorante do art. 121, §4º.
- Ignorar **concausas** e o **estado mórbido prévio** do paciente ao discutir o nexo.
- Citar acórdão ou resolução do CFM **sem** passar pelo gate de verificação.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica se **inverte** — o **ônus** de demonstrar a **violação do dever de cuidado** e o **nexo causal** é da acusação; espelhe as teses acima como pontos a **provar** (com laudo idôneo e regra técnica individualizada), e não a atacar.
- **Citation Gate:** nenhuma súmula, tese, precedente ou resolução do CFM vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados clínicos do paciente e do assistido — prontuário, laudos, identificação — **não** vão a repositório público; observância da LGPD e do sigilo médico e profissional.

## Lembretes finais

- **Culpa + nexo** são o eixo — teste elemento por elemento; a falta de um leva à **atipicidade**.
- **Obrigação de meio:** resultado ruim **não** é culpa; culpa é o erro **evitável** que viola o dever de cuidado.
- **Álea terapêutica** e **risco permitido** afastam a imputação — ancore na *lex artis*.
- **Rompimento do nexo** (concausas, estado prévio, culpa de terceiro/vítima — art. 13, §1º) é a segunda linha de defesa.
- **Laudo** decide o caso: impugne método e indique **assistente técnico** cedo (art. 159 CPP).
- **Bis in idem** entre imperícia e o aumento do §4º — sempre atacar na dosimetria.
- **Sem jurisprudência nem norma do CFM de memória** — confira via `jurisprudencia-stj-stf` e fonte oficial atual.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
