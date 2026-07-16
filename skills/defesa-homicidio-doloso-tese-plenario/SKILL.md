---
name: defesa-homicidio-doloso-tese-plenario
description: >-
  Use ao construir a DEFESA MATERIAL do homicídio doloso (art. 121, CP) — tipicidade, autoria,
  dolo/animus necandi, qualificadoras, privilégio e desclassificação — articulada com a pronúncia e
  o plenário do júri. Gatilhos: homicídio doloso, art. 121 CP, animus necandi, dolo eventual x culpa
  consciente, desclassificação para lesão seguida de morte (art. 129, §3º) ou…. Não use para
  conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, juri, crimes-contra-a-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-homicidio-doloso-tese-plenario"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-homicidio-doloso-tese-plenario", "defesa homicidio", "tese plenario"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa Material do Homicídio Doloso (art. 121 do CP)

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

Esta skill orienta a **construção da tese de defesa material** no homicídio doloso: como atacar a **tipicidade**, a **autoria**, o **dolo (animus necandi)**, as **qualificadoras** e como pleitear **privilégio** ou **desclassificação** — sempre pensando na projeção da tese para a **pronúncia** (1ª fase) e para o **plenário** (2ª fase). É a defesa do **tipo penal**, complementar às skills procedimentais do júri (`juri-quesitacao`, `juri-plenario-debates`, `defesa-primeira-fase-juri`).

> **Lição central:** homicídio se ganha (ou se perde) na **escolha da tese** e na sua **coerência com a prova**. Defina UMA tese central e subordine as demais em ordem lógica — **negativa de autoria** › **excludente (legítima defesa)** › **desclassificação (afastar o dolo de matar)** › **privilégio/afastar qualificadoras** (redução de pena). Teses incompatíveis sustentadas em pé de igualdade destroem a credibilidade perante o jurado leigo.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 121 do CP — a **Lei 14.994/2024** reformulou o tratamento do **feminicídio**, que passou a ser **tipo autônomo (art. 121-A)** com pena própria, deixando de ser mera qualificadora do §2º, VI. Confira também as demais qualificadoras, causas de aumento (§§ 4º a 7º) e todo precedente (súmulas, temas, informativos) via a skill `jurisprudencia-stj-stf` **antes** de fundamentar. Na dúvida sobre um número de acórdão, **omitir vence inventar**.

## Base legal

- **Art. 121, caput, CP** — homicídio simples (matar alguém).
- **Art. 121, §1º, CP** — homicídio **privilegiado** (relevante valor social/moral; violenta emoção logo após injusta provocação da vítima): causa de **diminuição** de 1/6 a 1/3.
- **Art. 121, §2º, CP** — homicídio **qualificado** (motivo torpe, fútil; meio cruel/insidioso; recurso que dificulta/impossibilita a defesa; para assegurar outro crime, etc.).
- **Art. 121, §2º-A e seguintes / art. 121-A CP (conferir vigência — Lei 14.994/2024)** — feminicídio como tipo autônomo.
- **Art. 121, §3º/§4º, CP** — homicídio **culposo** e causas de aumento (relevante para a **desclassificação**).
- **Art. 129, §3º, CP** — **lesão corporal seguida de morte** (dolo de lesionar + morte culposa): principal alvo da desclassificação.
- **Art. 13, 18, I e II, CP** — nexo causal; dolo (direto/eventual) x culpa: o coração da desclassificação.
- **Arts. 23 a 25, CP** — excludentes de ilicitude (legítima defesa, estado de necessidade).
- **Art. 26, CP** — inimputabilidade/semi-imputabilidade.
- **Art. 14, II, CP** — tentativa (homicídio tentado).
- **Arts. 413-421 CPP** (pronúncia e 1ª fase) e **arts. 482-497 CPP** (plenário) — projeção processual das teses.

## O eixo material — o que a acusação precisa provar (e a defesa ataca)

Para condenar por homicídio doloso, a acusação deve demonstrar, além de dúvida razoável:

1. **Materialidade** — a morte e sua causa (laudo de exame de corpo de delito, necroscópico; nexo entre a conduta e o resultado).
2. **Autoria** — que foi o acusado quem produziu o resultado.
3. **Dolo (animus necandi)** — a **vontade** de matar (dolo direto) ou a **assunção do risco** de matar (dolo eventual). Este é o elemento mais frágil e mais atacável.
4. **Ilicitude e culpabilidade** — ausência de excludentes; imputabilidade.

A defesa mira **o elo mais fraco da prova concreta**. Não há tese universal: há a tese que a prova daquele caso sustenta.

## Roteiro de teses por linha de ataque

### 1. Negativa de autoria (in dubio pro reo)
A tese mais forte quando cabível: **o acusado não é o autor**. Explora álibi, fragilidade do reconhecimento (art. 226 CPP — o descumprimento do rito é grave; **conferir a jurisprudência recente do STJ sobre reconhecimento** via `jurisprudencia-stj-stf`), cadeia de custódia da prova (ver `cadeia-de-custodia`), contradições de testemunhas. Objetivo na 1ª fase: **impronúncia/absolvição sumária**; no plenário: resposta **NÃO** ao quesito de autoria (encerra em absolvição — art. 483, §1º, CPP).

### 2. Excludentes de ilicitude — legítima defesa (art. 25 CP)
Reconhece a autoria, mas nega o crime: **agressão injusta, atual ou iminente**, repelida com **meios necessários** e **moderação**. Atenção ao **excesso** (art. 23, parágrafo único): se doloso, subsiste responsabilidade; se culposo/exculpante, atenua ou afasta. No plenário, a legítima defesa pode ser reconhecida **pelo quesito genérico de absolvição** ("O jurado absolve o acusado?", art. 483, §2º) — a defesa não precisa "provar" a excludente, basta gerar dúvida.

### 3. Desclassificação — afastar o dolo de matar (o núcleo desta skill)
Quando autoria e morte são incontroversas, ataca-se o **animus necandi**:

- **Homicídio doloso → homicídio culposo (art. 121, §3º):** não houve vontade nem assunção do risco de matar; houve **imprudência/negligência/imperícia**.
- **Homicídio doloso → lesão corporal seguida de morte (art. 129, §3º):** havia dolo de **lesionar**, não de matar; a morte foi resultado **culposo** (preterdolo). É a desclassificação mais comum em brigas, socos, empurrões.
- **Dolo eventual x culpa consciente:** a fronteira decisiva. No **dolo eventual** o agente **assume o risco** e é indiferente ao resultado ("foda-se se morrer"); na **culpa consciente** ele **prevê mas confia sinceramente** que o resultado não ocorrerá. Casos típicos: racha/embriaguez ao volante, disparo "para assustar", roleta-russa. A defesa sustenta a **confiança sincera na não ocorrência** = culpa consciente = desclassificação.

**Consequência processual crucial:** reconhecida a **desclassificação própria** (para crime **não doloso contra a vida**), a **competência passa ao juiz-presidente** (art. 492, §1º, CPP) — sai da alçada do Conselho. Por isso o **posicionamento do quesito desclassificatório** é sensível (ver `juri-quesitacao`).

**Indicadores objetivos do animus necandi** (que a acusação usa e a defesa neutraliza): região do corpo atingida (zona letal x não letal), número/profundidade dos golpes, meio empregado (arma de fogo/faca x mãos), distância do disparo, reiteração após a queda da vítima, declarações do agente. A defesa reconstrói **cada indicador** para mostrar dolo de lesão, não de morte.

### 4. Homicídio privilegiado (art. 121, §1º) — causa de diminuição
Reconhece o homicídio doloso, mas pleiteia a **redução de 1/6 a 1/3**:
- **Relevante valor social ou moral** (motivo nobre segundo o senso comum);
- **Violenta emoção logo após injusta provocação da vítima** (imediatidade + provocação injusta).
No júri, o privilégio é objeto de **quesito de causa de diminuição** (art. 483, IV, CPP). Vale mesmo em caso de condenação — reduz a pena de partida.

### 5. Afastamento das qualificadoras (art. 121, §2º)
Cada qualificadora **não reconhecida** reduz a pena e pode redefinir a hediondez. Linhas de ataque:
- **Motivo fútil/torpe:** ausência de motivo torpe/fútil, ou motivo **não provado**; ciúme e discussão nem sempre configuram futilidade — questão de prova.
- **Meio cruel/insidioso:** exige demonstração concreta do sofrimento desnecessário/da insídia.
- **Recurso que dificultou/impossibilitou a defesa (surpresa, emboscada):** a defesa mostra que a vítima **teve chance de reação** ou percebeu a agressão.
- **Compatibilidade privilégio + qualificadora:** o **privilégio (§1º)** é compatível com **qualificadoras de natureza objetiva** (meio/modo de execução), mas **incompatível com qualificadoras subjetivas** (motivo torpe/fútil). Tese defensiva clássica do **homicídio privilegiado-qualificado**. **Conferir a jurisprudência atual sobre a (in)compatibilidade e a hediondez do privilegiado-qualificado** via `jurisprudencia-stj-stf`.

### 6. Tentativa (art. 14, II) e semi-imputabilidade (art. 26)
- **Tentativa:** disputa-se se houve **início de execução** com dolo de matar (tentativa de homicídio) ou mera lesão consumada; e o **quantum** da redução (1/3 a 2/3, conforme o *iter criminis* percorrido).
- **Semi-imputabilidade (art. 26, parágrafo único):** redução de 1/3 a 2/3, ou medida de segurança — exige incidente/laudo.

## Teses e contra-teses (defesa × acusação)

| Tese da defesa | Contra-tese (acusação) | Onde se decide |
|---|---|---|
| Negativa de autoria | Prova de autoria (reconhecimento, testemunhas, perícia) | Quesito de autoria (483, II) — "NÃO" absolve |
| Legítima defesa | Ausência de agressão injusta/excesso doloso | Quesito genérico (§2º) — "SIM" absolve |
| Culpa consciente (desclassificação) | Dolo eventual — assunção do risco | Quesito desclassificatório → juiz-presidente (492, §1º) |
| Lesão seguida de morte (129, §3º) | Animus necandi provado por indicadores objetivos | Quesito desclassificatório |
| Privilégio (§1º) | Ausência de valor moral/provocação injusta | Quesito de diminuição (483, IV) |
| Afastar qualificadora | Prova do motivo/meio/recurso | Quesito de qualificadora (483, V) — "NÃO" reduz |

## Projeção processual — da pronúncia ao plenário

- **1ª fase (juízo de pronúncia):** vigora o ***in dubio pro societate*** (mitigado — **conferir o estado atual do debate no STF/STJ** via `jurisprudencia-stj-stf`). Persegue-se **impronúncia** (art. 414), **absolvição sumária** (art. 415 — excludentes evidentes) ou **desclassificação** (art. 419). **Excesso de linguagem** na pronúncia (juiz que afirma autoria/dolo como certos) é nulidade — ataca-se por recurso. Ver `defesa-primeira-fase-juri`.
- **Qualificadoras na pronúncia:** só vão a plenário as qualificadoras **minimamente lastreadas** — a defesa pede a **exclusão das manifestamente improcedentes** já na 1ª fase, para não contaminarem o julgamento.
- **2ª fase (plenário):** a tese vira **quesito** (ver `juri-quesitacao`). Toda tese sustentada em plenário **deve ser quesitada** — omissão é nulidade. Planeje desde já como cada tese se converte em pergunta ao Conselho.

## Súmulas e precedentes (sob o Citation Gate — conferir SEMPRE via `jurisprudencia-stj-stf`)

**Dispositivos e súmulas de vigência notória** (citar com base no texto oficial):
- **Súmula 191/STJ** — a pronúncia é o **termo interruptivo** da prescrição, ainda que o Tribunal do Júri venha a desclassificar o crime. (Confirmar redação.)

**Teses a sustentar pelo raciocínio (não arriscar número de acórdão sem verificar):**
- **In dubio pro reo** no mérito do plenário e na dúvida sobre o dolo → desclassificação.
- **Compatibilidade** do privilégio com qualificadoras **objetivas** (privilegiado-qualificado). [Verificar posição atual e a repercussão na hediondez — `jurisprudencia-stj-stf`.]
- **Distinção dolo eventual × culpa consciente** em crimes de trânsito. [O tratamento oscila; **NÃO VERIFICADO** para qualquer número específico — conferir orientação vigente do STJ/STF.]
- **Reconhecimento pessoal** (art. 226 CPP) e a nulidade da prova quando descumprido o rito. [Há evolução jurisprudencial relevante no STJ — **NÃO VERIFICADO**; conferir os precedentes atuais.]
- **Feminicídio** como tipo autônomo (art. 121-A) e efeitos intertemporais da Lei 14.994/2024. [Conferir vigência e eventual modulação.]

> **Regra de ouro do Citation Gate:** cite **dispositivo de lei** e **súmula notória** com o texto conferido; para **qualquer** HC/REsp/RE/Tema/Informativo específico, marque **[NAO VERIFICADO]** e resolva pela skill `jurisprudencia-stj-stf`. Prefira **ensinar a tese e o dispositivo** a arriscar um número de acórdão. Há sanções reais por jurisprudência inventada por IA.

## Erros comuns / checklist da defesa

- [ ] **Uma** tese central definida e teses subordinadas em **ordem lógica** (autoria › excludente › desclassificação › privilégio/qualificadoras)?
- [ ] A tese é **coerente com a prova** do caso (não com o que seria ideal)?
- [ ] O **animus necandi** foi atacado **indicador por indicador** (região atingida, meio, reiteração, distância)?
- [ ] **Dolo eventual × culpa consciente** enfrentado com o critério da **confiança sincera** na não ocorrência?
- [ ] A **desclassificação própria** e seu efeito (competência ao juiz-presidente, art. 492, §1º) foram considerados na estratégia de quesitos?
- [ ] **Privilégio (§1º)** pleiteado quando cabível — mesmo em cenário de condenação (reduz pena)?
- [ ] Cada **qualificadora** enfrentada isoladamente; verificada a **(in)compatibilidade** privilégio × qualificadora?
- [ ] Na **pronúncia**: pedido de exclusão de qualificadoras sem lastro e de correção de **excesso de linguagem**?
- [ ] Toda tese de plenário será **quesitada** (nada fica sem quesito — ver `juri-quesitacao`)?
- [ ] **Legítima defesa** encaminhada também pelo **quesito genérico de absolvição** (§2º), não só como excludente formal?
- [ ] **Vigência** conferida (Lei 14.994/2024 — feminicídio autônomo) e **citações** passadas pelo gate `jurisprudencia-stj-stf`?
- [ ] **Reconhecimento** e **cadeia de custódia** auditados (arts. 226 e 158-A ss. CPP)?

**Anti-padrões (evitar):**
- Sustentar **teses incompatíveis** em pé de igualdade (negar autoria *e* alegar legítima defesa como se equivalentes) — mina a credibilidade no júri.
- Tratar todo homicídio em briga como **dolo eventual** sem enfrentar a **culpa consciente**.
- Aceitar **qualificadoras** em bloco sem atacar cada uma (a queda de uma qualificadora muda a pena e a hediondez).
- Esquecer o **privilégio** por focar só na absolvição (privilégio salva pena mesmo perdendo o mérito).
- Deixar tese sustentada em plenário **sem quesito** (nulidade — `juri-quesitacao`).
- Citar **feminicídio como qualificadora do §2º, VI** sem checar a **Lei 14.994/2024** (tipo autônomo agora).
- Arriscar **número de acórdão** de memória — passar tudo por `jurisprudencia-stj-stf`.

## Nota de conformidade

Material de **apoio à construção de tese** — **rascunho técnico sob revisão humana obrigatória**. A escolha e a sustentação da tese são sempre do **advogado responsável** (EAOAB; CED; Provimento 205/2021 da OAB). Esta skill é **do polo de DEFESA**; se a instituição atuar como **assistente de acusação / Ministério Público**, o chefe-roteador deve **conferir o polo** e usar as skills de acusação, pois a lógica probatória se inverte. Toda referência normativa e todo precedente passam **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` (e por `verificacao-citacoes`) antes do uso; a confirmação de vigência (art. 121 e Lei 14.994/2024) é pré-requisito.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais da 1ª fase, memoriais, sustentação de plenário), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).

## Lembretes finais

- **Uma tese central**, subordinadas em ordem lógica — coerência vence quantidade no júri.
- O **animus necandi** é o elo mais atacável: desclassificação (culposo ou 129, §3º) quando a prova permite.
- **Dolo eventual × culpa consciente:** a chave é a **confiança sincera** na não ocorrência do resultado.
- **Desclassificação própria** → competência ao **juiz-presidente** (art. 492, §1º) — pense o quesito.
- **Privilégio (§1º)** reduz pena mesmo na condenação; **qualificadoras** caem uma a uma.
- **Feminicídio** agora é **tipo autônomo** (Lei 14.994/2024) — conferir vigência antes de citar.
- **Toda tese de plenário vira quesito** — projete a tese material já pensando na quesitação.
- **Citation Gate inegociável:** dispositivo e súmula com texto conferido; acórdão específico só via `jurisprudencia-stj-stf`.
