---
name: defesa-racha-308
description: >-
  Use para defender racha/pega/competição não autorizada (art. 308 do CTB) — ataque à prova do
  animus competitivo e do dano potencial à incolumidade pública, atipicidade quando ausente a
  disputa (excesso de velocidade isolado ≠ racha) e, sobretudo, a defesa contra a MIGRAÇÃO para dolo
  eventual com lesão corporal grave (§1º) ou morte (§2º), que leva o caso ao Tribunal do Júri.
  Gatilhos: racha, pega, competição não autorizada… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, transito, ctb, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-racha-308"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-racha-308", "defesa racha"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa — Racha / Competição não autorizada (art. 308 do CTB)

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

Esta skill orienta a **defesa técnica** na imputação do art. 308 do Código de Trânsito Brasileiro (**Lei 9.503/97**) — participar, na via pública, de **corrida, disputa ou competição automobilística/por instrumento de mobilidade não autorizada** ("racha", "pega"), gerando situação de risco à incolumidade pública. O foco é duplo: (i) desconstruir o **tipo do caput**; e (ii) **impedir a migração** do caso para dolo eventual com resultado lesão corporal grave (**§1º**) ou morte (**§2º**) — porque, reconhecido o homicídio doloso, a competência desloca-se ao **Tribunal do Júri** (CF, art. 5º, XXXVIII).

> **Lição central:** o coração do art. 308 é o **animus de competição** contra outrem — a **disputa**. Sem prova de que o agente *competia* com alguém, não há racha: **excesso de velocidade isolado, "cavalo de pau" solitário ou direção perigosa sem adversário** é, quando muito, outro tipo (art. 311, direção perigosa em via com pedestres; art. 306, embriaguez; infração administrativa), **nunca** o art. 308. Atacar o animus competitivo é a primeira e mais decisiva frente de defesa.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 308 e dos §§1º e 2º do CTB — o tipo foi **substancialmente alterado pela Lei 12.971/2014** (que criou as qualificadoras de resultado) e ajustado por leis posteriores. Confirme também a redação atual do art. 302 (homicídio culposo na direção) e do art. 303 (lesão culposa) e **toda súmula, tema ou precedente** via a skill `jurisprudencia-stj-stf` antes de fundamentar a peça. Na dúvida sobre um número de acórdão/informativo/tema, **omitir vence inventar**.

## Base legal

- **Art. 308, caput, do CTB (Lei 9.503/97)** — participar de corrida, disputa ou competição automobilística **não autorizada** pela autoridade competente, em via pública, gerando situação de risco à incolumidade pública ou privada. Crime de **perigo**.
- **Art. 308, §1º, do CTB** — se da conduta resulta **lesão corporal de natureza grave** (redação da Lei 12.971/2014, com pena aumentada pela Lei 13.281/2016) — [confira a redação e a pena vigentes na fonte oficial antes de citar].
- **Art. 308, §2º, do CTB** — se resulta **morte** (redação da Lei 12.971/2014, com pena aumentada pela Lei 13.281/2016) — [idem: confirmar a redação e a pena vigentes]. **Fixe:** na redação atual, **§1º = lesão grave** e **§2º = morte** — não inverta.
- **Art. 18, I e parágrafo único, do CP** — dolo (direto e **eventual**) × culpa; regra da excepcionalidade do crime culposo.
- **Art. 302 do CTB** — homicídio **culposo** na direção de veículo (tipo autônomo culposo — a alternativa que a defesa busca quando há resultado morte).
- **Art. 303 do CTB** — lesão corporal **culposa** na direção.
- **CF, art. 5º, XXXVIII** — competência do Tribunal do Júri para os crimes **dolosos** contra a vida (o divisor de águas: dolo eventual → júri; culpa → juízo singular do CTB).

> **Atenção à moldura correta.** Antes de qualquer tese, **fixe se a imputação é (a) só o art. 308 caput (perigo), (b) art. 308 com resultado (§§), ou (c) homicídio doloso por dolo eventual (art. 121 CP) com o racha como circunstância**. A estratégia muda inteiramente conforme a moldura. Confirme a capitulação da denúncia e a redação dos parágrafos na fonte oficial.

## Estrutura do tipo do caput — os elementos que a acusação precisa provar

Para condenar pelo art. 308 caput, a acusação deve demonstrar, cumulativamente:

1. **Conduta de participar** de corrida/disputa/competição — pressupõe **pluralidade de participantes em disputa** (competir *com alguém*).
2. **Não autorização** pela autoridade competente (elemento normativo).
3. **Via pública** (elemento espacial).
4. **Geração de situação de risco** à incolumidade pública ou privada — é crime de **perigo**; discute-se se **concreto** ou abstrato (ver adiante).
5. **Dolo de participar** da disputa (elemento subjetivo — a vontade de competir).

➡️ A defesa ataca **qualquer** desses elementos. A ausência de um deles conduz à **atipicidade** (absolvição, art. 386, III, CPP) ou à **desclassificação** para figura menos grave.

## Roteiro de defesa — frentes por hipótese

### Frente 1 — Atipicidade por ausência de animus competitivo (a mais forte)

- **Não havia disputa/competição.** Excesso de velocidade **isolado**, ultrapassagem perigosa, "empinar" moto ou "cavalo de pau" **solitário** não configuram racha: falta o **outro competidor** e a **combinação/adesão à disputa**. Sem adversário, não há "corrida" no sentido do tipo.
- **Prova frágil do animus.** Depoimentos vagos ("estavam correndo") sem identificação do suposto adversário, sem prova de largada combinada, de apostas, de comunicação prévia (redes sociais, grupos), de ponto de encontro — não sustentam o elemento subjetivo. **Exigir prova concreta da disputa.**
- **Confusão com outros tipos.** Direção perigosa em via com aglomeração pode ser **art. 311 do CTB**; conduzir sob embriaguez é **art. 306**; a mera infração de velocidade é **administrativa** (art. 218 do CTB). Nenhuma delas é art. 308.

### Frente 2 — Ausência de perigo concreto (se a corrente exigir dano potencial real)

- **A dupla natureza do perigo.** A própria letra do art. 308 exige que a conduta gere **"situação de risco à incolumidade pública ou privada"** — texto que, para uma corrente, **incorpora o perigo ao tipo** (perigo concreto: a situação de risco é elemento a ser provado); para outra, basta a conduta perigosa em abstrato (perigo abstrato de perigo). A escolha da corrente **define toda a Frente 2** e não pode ser feita "de cabeça".
- Se o tribunal de atuação entende o art. 308 como crime de **perigo concreto**, a acusação deve provar **risco real e efetivo** a pessoas ou bens determinados — via **deserta**, madrugada, sem pedestres ou outros veículos, afasta o perigo concreto. **Exija na denúncia a individualização de quem/o quê foi exposto ao risco:** "risco à coletividade" em abstrato não basta para o perigo concreto.
- **Tese:** ausente a demonstração de risco concreto à incolumidade, o fato é atípico (para quem exige perigo concreto). **Contra-tese acusatória:** parte da doutrina/jurisprudência trata como perigo abstrato — **confirme o entendimento atual do STJ/STF via `jurisprudencia-stj-stf`** antes de escolher a tese, pois é ponto sensível e divergente. Enquanto pende a controvérsia, **sustente a tese mais favorável e, subsidiariamente, a insuficiência probatória do risco** — assim a defesa não fica refém de uma única corrente.

### Frente 3 — A migração para dolo eventual (o núcleo defensivo quando há morte/lesão grave)

Quando há resultado morte ou lesão grave, a acusação frequentemente tenta **capitular como homicídio doloso (art. 121, CP) por dolo eventual**, sob a tese de que quem participa de racha "assume o risco" de matar — o que **leva o caso ao Júri**. A defesa deve **barrar essa migração ainda na fase de conhecimento** (resposta à acusação, alegações finais, e sobretudo **impugnação da pronúncia**):

- **Distinção dolo eventual × culpa consciente.** Na **culpa consciente**, o agente **prevê** o resultado mas **confia sinceramente** em evitá-lo (acredita na própria perícia/sorte); no **dolo eventual**, ele **assume/consente** com o resultado ("dane-se"). O racha, por si só, **não converte automaticamente** culpa consciente em dolo eventual — a jurisprudência **repele o dolo eventual presumido** ("automático") pela só participação na disputa. **Exigir prova do elemento volitivo de anuência ao resultado.**
- **Indicadores que a defesa vira a seu favor.** Contra o dolo eventual, argumente: **tentativa de frenagem, desvio ou manobra evasiva** no momento do acidente (quem tenta evitar não consente); **ausência de embriaguez/entorpecente**; a **própria exposição do agente ao risco** (dirigia o veículo que colidiu — não é indiferente quem arrisca a própria vida); vínculo afetivo com a vítima (carona, amigo). Cada um desses dados **desmonta a alegação de "assunção do risco"** e reforça a culpa consciente.
- **Ônus argumentativo é da acusação.** Não cabe à defesa provar a ausência de dolo; cabe à acusação **demonstrar positivamente** o consentimento com o resultado. Realce a **inversão indevida** quando a peça acusatória trata o dolo eventual como decorrência lógica do racha, transferindo à defesa o ônus de afastá-lo.
- **Fundamentação individualizada.** A denúncia/pronúncia que afirma dolo eventual **apenas** porque houve racha, sem apontar dados concretos de indiferença ao resultado (ex.: dirigir contra fluxo, ignorar semáforo em zona de intensa circulação, velocidade absurda em local com pedestres), é **carente de fundamentação** — impugnável.
- **O tipo específico do §2º (racha com morte) versus art. 121 do CP.** Existe **tese de que o resultado morte no racha tem tipo próprio no CTB (art. 308, §2º)** e que a punição por esse dispositivo **afasta** o deslocamento ao júri — o legislador teria tratado especificamente o resultado no âmbito dos crimes de trânsito. **Esta é a tese central para evitar o júri.** Há divergência jurisprudencial relevante sobre se o resultado morte no racha atrai o art. 308, §2º (juízo singular) ou o art. 121 por dolo eventual (júri) — **confirme o estado atual da questão no STJ/STF via `jurisprudencia-stj-stf`** e adeque a peça; **não** afirme um precedente específico sem verificação.
- **In dubio pro societate na pronúncia — e seus limites.** Se, apesar de tudo, houver pronúncia, atacar por **excesso de linguagem** (art. 413 CPP; a pronúncia não pode ser sentença antecipada), sustentar a **desclassificação** (art. 419 CPP) para o art. 302 do CTB (homicídio culposo) e recorrer **em sentido estrito** (RESE, art. 581, IV, CPP). Ver skill `juri-pronuncia-impronuncia`.

### Frente 4 — Desclassificação e nulidades

- **Desclassificação para art. 302/303 do CTB** (culposo) quando há resultado, ou para **art. 311/306/218** quando não há disputa provada.
- **Prova pericial.** Exigir laudo que **quantifique a velocidade**, reconstrua a dinâmica e demonstre (ou não) a disputa. Ausência/precariedade da perícia mina a materialidade e o animus.
- **Cadeia de custódia** das provas (imagens de câmeras, celulares apreendidos com combinações do racha) — atacar quebras (ver skill `cadeia-de-custodia`).
- **Confissão / interrogatório** — verificar voluntariedade e cerceamento (ver `analise-provas`).

## Teses e contra-teses (mapa rápido)

| Frente | Tese defensiva | Contra-tese acusatória (a antecipar) |
|---|---|---|
| Animus | Sem disputa provada → atipicidade; excesso isolado ≠ racha | Prova indireta (testemunhas, redes) basta para o animus |
| Perigo | Exige perigo concreto; via deserta afasta risco | Crime de perigo abstrato — basta a conduta [verificar STJ] |
| Dolo eventual | Racha não gera dolo eventual automático; era culpa consciente | Quem racha assume o risco de matar → dolo eventual → júri |
| Tipo do resultado | Morte no racha → art. 308, §2º (CTB), juízo singular | Homicídio doloso (art. 121, CP) → competência do júri |
| Pronúncia | Excesso de linguagem; desclassificação (art. 419) para art. 302 | In dubio pro societate mantém a pronúncia |

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e súmulas **notórias** podem ser citados com certeza; **qualquer** número de HC/REsp/RE, informativo ou tema de repercussão geral/recurso repetitivo **sem certeza absoluta** deve ir marcado **[NÃO VERIFICADO]** e ser conferido via `jurisprudencia-stj-stf`. Prefira **ensinar a tese e o dispositivo** a arriscar um número de acórdão.

- **Distinção dolo eventual × culpa consciente no trânsito** — há vasta jurisprudência do STJ e do STF exigindo **fundamentação concreta** para o dolo eventual e repelindo sua presunção automática pela só embriaguez ou pela só participação em racha. **[NÃO VERIFICADO — localizar os julgados/informativos atuais via `jurisprudencia-stj-stf`.]**
- **Competência (júri × juízo singular) no resultado morte em racha** — questão com **divergência** e evolução legislativa (Lei 12.971/2014); confirmar o entendimento consolidado atual. **[NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`.]**
- **Natureza do perigo no art. 308 (concreto × abstrato)** — verificar a posição vigente antes de escolher a tese da Frente 2. **[NÃO VERIFICADO.]**

*(Não há súmula notória específica sobre o art. 308 a citar de memória. Toda referência a acórdão/tema deve passar pelo gate.)*

## Erros comuns / checklist da defesa

- [ ] **A moldura da imputação foi corretamente identificada** — caput (perigo), §§ (com resultado) ou art. 121 CP por dolo eventual (júri)?
- [ ] **A prova do animus competitivo foi atacada** — há realmente um adversário e uma disputa combinada, ou é excesso de velocidade isolado?
- [ ] **A distinção dolo eventual × culpa consciente foi trabalhada** com dados concretos, exigindo prova do elemento volitivo?
- [ ] **A tese do art. 308, §2º (juízo singular) versus art. 121 CP (júri)** foi sustentada, quando há morte, para **evitar a migração ao júri**?
- [ ] **A natureza do perigo (concreto/abstrato)** foi confirmada no tribunal de atuação antes de invocar "via deserta"?
- [ ] **A perícia** (velocidade, dinâmica, disputa) foi exigida/impugnada?
- [ ] **A desclassificação** subsidiária (art. 302/303 ou art. 311/306) foi pleiteada?
- [ ] **Havendo pronúncia**, atacou-se **excesso de linguagem** (art. 413) e recorreu-se **em sentido estrito** (art. 581, IV, CPP)?
- [ ] **Cadeia de custódia** das provas digitais/imagens verificada?
- [ ] **Toda súmula/precedente/tema conferido** via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável realizada antes de protocolar?

**Anti-padrões (evitar):**
- Tratar qualquer velocidade excessiva como racha — **sem disputa não há art. 308**.
- Aceitar passivamente a capitulação por dolo eventual sem exigir prova do consentimento no resultado.
- Deixar o caso migrar ao júri sem sustentar a tese do tipo específico do CTB (§2º) e a desclassificação.
- Invocar "via deserta / perigo concreto" sem confirmar que o tribunal de atuação exige perigo concreto.
- Citar número de HC/REsp/tema "de cabeça" — **sempre** passar pelo gate de verificação.
- Esquecer a impugnação da pronúncia por **excesso de linguagem** e o RESE.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa (hipótese a confirmar), **não** substitui o juízo do advogado nem a leitura dos autos concretos. A responsabilidade pela peça e pela estratégia é sempre do **advogado responsável** (CED/OAB; Provimento 205/2021).
- **Skill do polo de DEFESA** (defesa técnica do acusado/réu). Se o pedido for de atuação pelo **polo acusatório** (MP/assistente de acusação), o chefe-roteador deve **conferir o polo** e acionar skill própria de acusação — as teses aqui são orientadas a **afastar a imputação e evitar o júri**.
- **Citation Gate:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso. Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra). Para a fase do júri (caso haja pronúncia), articular com `juri-pronuncia-impronuncia` e `juri-quesitacao`.
