---
name: defesa-crimes-administracao-justica
description: >-
  Use ao defender acusado de crimes contra a Administração da Justiça (arts. 338-359 CP) — falso
  testemunho/perícia (342), denunciação caluniosa (339), comunicação falsa de crime (340),
  auto-acusação falsa (341), coação no curso do processo (344), fraude processual (347),
  favorecimento pessoal (348) e real (349), exercício arbitrário das próprias razões (345/346).
  Gatilhos: falso testemunho, testemunha mentiu… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, parte-especial, administracao-da-justica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-administracao-justica"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-administracao-justica", "defesa crimes", "administracao justica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa de Crimes contra a Administração da Justiça (arts. 338-359 do CP)

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

Esta skill orienta a **defesa** de acusados dos crimes do **Capítulo III do Título XI da Parte Especial do CP** — os crimes contra a Administração da Justiça. São tipos de **altíssima incidência** no dia a dia forense (o falso testemunho e a denunciação caluniosa surgem em quase todo processo com prova testemunhal ou notícia-crime) e cujo **bem jurídico** é a **regular administração da Justiça** — o correto funcionamento da atividade jurisdicional e persecutória do Estado.

> **Lição central:** antes de discutir prova, **teste a tipicidade**. Vários desses crimes têm elementos rígidos que a acusação costuma presumir: o falso testemunho exige **falsidade sobre fato juridicamente relevante feita por quem tem o dever de dizer a verdade** (não abrange o réu nem quem se recusa a depor por autoincriminação); a denunciação caluniosa exige **imputação de crime a pessoa determinada que o agente SABE inocente**, com **instauração** de investigação/processo. Falta um elemento → **atipicidade**. E há uma trava transversal poderosíssima: **ninguém é obrigado a produzir prova contra si (nemo tenetur se detegere)** — a autodefesa descriminaliza muita conduta que a denúncia rotula de falso.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 338 a 359 do CP na fonte oficial — o art. 342 teve penas majoradas pela **Lei 10.268/2001** e o §1º ampliado pela **Lei 12.850/2013** (falso em processo/inquérito por organização criminosa). Confira também penas, súmulas, temas repetitivos e overruling via a skill `jurisprudencia-stj-stf` (ou a best-practice `verificacao-citacoes`) **antes** de fundamentar a peça. Nenhum precedente entra na peça sem passar pelo gate.

## Base legal

- **Arts. 338 a 359 do CP** — Capítulo III (crimes contra a Administração da Justiça). Núcleo desta skill: **339, 340, 341, 342, 344, 345, 346, 347, 348, 349**.
- **CF, art. 5º, LXIII e LV** — direito ao silêncio, ampla defesa e contraditório; base constitucional do **nemo tenetur se detegere** (não autoincriminação).
- **CPP, art. 203 e 206** — compromisso da testemunha de dizer a verdade e as **hipóteses de recusa a depor** (parente); quem depõe sem compromisso (art. 208 — parentes, doente/menor) tende a **não** cometer falso testemunho compromissado.
- **CPP, art. 342, §2º, CP** — **retratação** antes da sentença no processo em que ocorreu o falso: **extingue a punibilidade** (causa extintiva específica, ver adiante).
- **CP, art. 107, VI** — a retratação como causa de extinção da punibilidade nos casos em que a lei admite.

## Mapa dos tipos e do que a defesa ataca em cada um

| Art. | Crime | Elemento que a defesa mais ataca |
|------|-------|----------------------------------|
| 339 | Denunciação caluniosa | Saber da inocência (dolo direto); imputação de **crime** (não contravenção — aí é 340); instauração efetiva |
| 340 | Comunicação falsa de crime/contravenção | Provocar ação de autoridade; ausência de imputação a pessoa certa (senão é 339) |
| 341 | Auto-acusação falsa | Autoacusar-se de crime **inexistente** ou cometido por outrem; dolo |
| 342 | Falso testemunho ou falsa perícia | Dever de verdade; fato juridicamente relevante; **retratação** (§2º); autodefesa |
| 343 | Suborno de testemunha/perito (corrupção ativa de testemunha) | Oferta/promessa de vantagem para falso — polo próprio |
| 344 | Coação no curso do processo | Violência/grave ameaça **contra** sujeito do processo, para satisfazer interesse |
| 345 | Exercício arbitrário das próprias razões | Pretensão **legítima**; fazer justiça com as próprias mãos; ação penal (privada, salvo violência) |
| 346 | (Tirar/danificar coisa própria em poder de terceiro por ordem judicial) | Coisa própria; existência de constrição judicial |
| 347 | Fraude processual | Inovar artificiosamente estado de lugar/coisa/pessoa **para induzir** juiz/perito a erro |
| 348 | Favorecimento pessoal | Auxiliar autor de crime a subtrair-se à ação da autoridade; **escusa** do §2º (parente) |
| 349 | Favorecimento real | Prestar auxílio a criminoso para tornar seguro o proveito do crime (fora de coautoria/receptação) |

---

## Roteiro de defesa por tipo penal

### 1) Falso testemunho ou falsa perícia — art. 342

**Tipo.** Fazer afirmação falsa, negar ou calar a verdade, como **testemunha, perito, contador, tradutor ou intérprete**, em processo judicial, administrativo, inquérito policial ou em juízo arbitral. É crime de **mão própria** (só o portador da qualidade pode praticá-lo).

**Teses defensivas típicas:**
- **Atipicidade por autodefesa / nemo tenetur (a mais forte).** O **réu/investigado** que mente em seu interrogatório **não** comete falso testemunho — não é testemunha, não presta compromisso e exerce autodefesa (CF, art. 5º, LXIII). O mesmo raciocínio protege quem, ouvido como testemunha, cala ou distorce **para não se autoincriminar**: a resposta que o incriminaria está coberta pelo direito ao silêncio.
- **Ausência de compromisso.** Quem depõe **sem prestar compromisso** (parentes e afins do acusado — CPP, art. 206; e as pessoas do art. 208) tende a **não** cometer o crime na modalidade compromissada. **[NÃO VERIFICADO]** o grau de exigência de compromisso formal como elementar varia na jurisprudência — confira o entendimento atual via `jurisprudencia-stj-stf`.
- **Falsidade sobre fato juridicamente irrelevante.** A mentira só é típica se recair sobre **fato relevante** para a causa. Imprecisão, esquecimento, contradição periférica ou opinião **não** configuram o crime.
- **Ausência de dolo.** Erro, falha de memória, confusão entre versões, sugestionabilidade — afastam o dolo de faltar com a verdade. O tipo **não admite forma culposa**.
- **Retratação — art. 342, §2º (causa extintiva da punibilidade).** Se o agente **se retrata ou declara a verdade** antes da **sentença** no processo em que se deu o falso, **extingue-se a punibilidade** (arts. 342, §2º, e 107, VI, CP). Tese central de defesa: provocar/documentar a retratação tempestiva.
- **Aumento de pena (§1º) só se presentes as elementares.** As causas de aumento (falso mediante suborno; para favorecer/prejudicar; em processo por organização criminosa etc.) devem estar **provadas** — atacar a incidência automática.

### 2) Denunciação caluniosa — art. 339

**Tipo.** Dar causa à **instauração** de investigação policial, processo judicial, inquérito civil, ação de improbidade ou procedimento administrativo **contra alguém, imputando-lhe crime de que o sabe inocente**.

**Teses defensivas típicas:**
- **Elemento subjetivo especial — "de que o sabe inocente".** Exige **dolo direto e certeza da inocência** do imputado. Se o agente **acreditava** na veracidade da imputação (mesmo que equivocado), **não há** denunciação caluniosa. Dúvida sobre a autoria **afasta** o tipo.
- **Imputação de crime, não de contravenção.** Imputar **contravenção** desloca para o **art. 339, §2º** (pena reduzida à metade) ou, se apenas comunicação sem pessoa certa, para o **art. 340**. Reclassificar reduz a pena.
- **Ausência de instauração efetiva.** O tipo se consuma com a **efetiva instauração** do procedimento. Notícia que não gera investigação → no máximo tentativa (discutível) ou atipicidade.
- **Direito de petição / exercício regular de direito.** Comunicar suspeita fundada à autoridade, requerer instauração de inquérito ou noticiar fato de que se tem indício **é exercício regular de direito** (CF, art. 5º, XXXIV, "a") — não é crime.
- **Pessoa determinada.** Exige-se **vítima certa e determinada**; imputação genérica não configura.

### 3) Comunicação falsa de crime ou contravenção — art. 340

**Tipo.** Provocar a ação de autoridade **comunicando a ocorrência de crime ou contravenção que sabe não se ter verificado**. Diferença crucial para o 339: **não há imputação a pessoa determinada** — é a mera notícia falsa de um fato.

**Teses:** ausência de dolo (crente na ocorrência); fato que efetivamente ocorreu (ainda que exagerado); ausência de provocação real da autoridade; e a **reclassificação** — se houve imputação a pessoa certa, o crime seria o 339 (e a defesa pode discutir qual moldura é mais benéfica ao caso concreto).

### 4) Auto-acusação falsa — art. 341

**Tipo.** Acusar-se, perante a autoridade, de **crime inexistente ou praticado por outrem**.

**Teses:** o crime **existe e foi praticado pelo próprio agente** (então não é falso); ausência de dolo; **coação moral** (art. 22 CP) de quem se autoacusa para proteger terceiro sob ameaça; e a discussão sobre autoacusação de **contravenção** (fora do tipo, que fala em "crime").

### 5) Coação no curso do processo — art. 344

**Tipo.** Usar de **violência ou grave ameaça** contra autoridade, parte, testemunha, perito, tradutor, intérprete ou funcionário, para **favorecer interesse próprio ou alheio** em processo, inquérito, juízo arbitral etc.

**Teses:** ausência de violência/grave ameaça idônea (mero desconforto, discussão, aborrecimento não bastam); **ausência do fim específico** de influenciar o processo; inexistência de processo/procedimento em curso ou iminente; e eventual **absorção** por crime mais grave conforme o caso.

### 6) Exercício arbitrário das próprias razões — arts. 345 e 346

**Tipo.** Fazer justiça pelas próprias mãos, para satisfazer **pretensão legítima**, salvo quando a lei o permite (art. 345). O art. 346 pune tirar, suprimir, destruir ou danificar **coisa própria** que está em poder de terceiro por convenção ou ordem judicial.

**Teses:** **ilegitimidade da pretensão** afasta o 345 (se a pretensão é ilegítima, o crime pode ser outro — furto, dano, extorsão); ausência de dolo; e, no art. 346, inexistência de constrição judicial/convencional sobre a coisa própria. Atenção à **ação penal**: no art. 345, sem violência, procede-se **mediante queixa** (ação penal privada) — atacar a legitimidade e a decadência.

### 7) Fraude processual — art. 347

**Tipo.** **Inovar artificiosamente**, na pendência de processo civil ou administrativo (ou de processo penal, ainda que não iniciado — parágrafo único, com pena em dobro), o **estado de lugar, de coisa ou de pessoa**, com o fim de **induzir a erro o juiz ou o perito**.

**Teses:** ausência do **fim específico** de induzir juiz/perito a erro (a alteração precisa ter finalidade fraudulenta dirigida ao julgador/perito, não mera reorganização); inexistência de processo pendente ou de perícia a ser realizada; e **irrelevância** da inovação (que não tinha aptidão para enganar). Distinguir de mero exercício de direito sobre a própria coisa.

### 8) Favorecimento pessoal — art. 348 — e favorecimento real — art. 349

**Favorecimento pessoal (348).** Auxiliar a subtrair-se à ação de autoridade pública **autor de crime a que é cominada pena de reclusão**.
- **Escusa absolutória do §2º:** se o favorecedor for **ascendente, descendente, cônjuge ou irmão** do criminoso, **fica isento de pena** — tese peremptória.
- Teses: o favorecido **não** é autor de crime apenado com reclusão; ausência de auxílio efetivo; ausência de dolo (não sabia da condição de criminoso).

**Favorecimento real (349).** Prestar a criminoso, **fora dos casos de coautoria ou de receptação**, auxílio destinado a tornar **seguro o proveito do crime**.
- Teses: **coautoria/participação no crime antecedente** (então responde por ele, não pelo 349 — atenção ao *bis in idem*); configuração de **receptação** (art. 180) em vez de favorecimento; ausência de dolo específico de assegurar o proveito.

---

## Teses transversais (valem para vários tipos)

1. **Nemo tenetur se detegere (não autoincriminação).** Trava constitucional que descaracteriza falso testemunho, autoacusação e até favorecimento quando a conduta é forma de **autodefesa**. Sempre a primeira linha quando o cliente é o próprio investigado/réu.
2. **Ausência de dolo / erro de tipo (art. 20 CP).** Todos esses crimes são **dolosos** e vários exigem **elemento subjetivo especial** (saber da inocência no 339; fim de induzir a erro no 347; fim de favorecer no 344). Atacar o dolo é atacar a própria tipicidade.
3. **Exercício regular de direito / direito de petição (CF, art. 5º, XXXIV).** Noticiar fato, requerer apuração ou peticionar não é crime — descriminaliza condutas rotuladas de denunciação/comunicação falsa.
4. **Reclassificação para figura menos grave.** 339 → 339, §2º (contravenção) ou 340; 349 → 180 (receptação); 345 sem violência → ação penal privada. A reclassificação correta pode reduzir pena, mudar a ação penal ou abrir a decadência.
5. **Retratação (art. 342, §2º) e demais causas extintivas.** No falso testemunho/perícia, a retratação antes da sentença **extingue a punibilidade** — verificar sempre a janela temporal.
6. **Prescrição.** Muitos desses crimes têm penas baixas (o 340, o 345, o 348 têm penas mínimas curtas) — **calcular a prescrição** (retroativa/intercorrente) é frequentemente a via mais eficaz. Ver a skill de prescrição e, para o método de cálculo, a `calculadora-prescricao`.

## Nota sobre cálculo de pena e prazos

Esta skill é de **metodologia forense** (roteiro de tipicidade e teses), **não** de cálculo determinístico. Para dosimetria, prescrição e tempestividade, **descreva o método na peça e aponte para as calculadoras**:
- **Dosimetria** (pena-base, agravantes/atenuantes, causas de aumento como o art. 342, §1º) → `calculadora-dosimetria`.
- **Prescrição** (penas baixas destes tipos favorecem a extinção) → `calculadora-prescricao`.
- **Tempestividade** de recursos/medidas → `calculadora-tempestividade`.

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer** número de HC/REsp/RE, informativo ou tema repetitivo entra como **[NÃO VERIFICADO]** e deve ser conferido em `jurisprudencia-stj-stf` antes de ir para a peça. **Ensinar a tese e o dispositivo vence arriscar um número de acórdão.**

- **Tese pacífica (dispositivo, não súmula):** o **réu que mente em interrogatório não comete falso testemunho** (autodefesa; CF, art. 5º, LXIII) — funda-se na Constituição e no sistema, dispensando citação de acórdão. Se quiser reforçar com precedente do STF/STJ, marque **[NÃO VERIFICADO]** e confira.
- **Retratação no falso testemunho aproveita ao corréu/coautor?** Ponto controvertido — **[NÃO VERIFICADO]**; confira o entendimento atual antes de afirmar.
- **Denunciação caluniosa exige instauração efetiva do procedimento** — decorre do próprio verbo do tipo ("dar causa à instauração"); qualquer precedente de reforço entra como **[NÃO VERIFICADO]**.
- **Súmulas específicas** sobre estes tipos são escassas; **não invente número de súmula**. Se precisar de súmula, confirme existência e redação via `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar como falso testemunho a mentira do **réu** em interrogatório (é autodefesa — atipicidade).
- Aceitar denunciação caluniosa sem o elemento **"sabe inocente"** (basta a crença na imputação para afastar o tipo).
- Confundir **339** (imputação a pessoa certa) com **340** (mera notícia falsa) e com **341** (autoacusação) — a moldura correta muda pena e ação penal.
- Esquecer a **escusa absolutória do art. 348, §2º** (parente próximo isento).
- Ignorar a **retratação** do art. 342, §2º como causa extintiva quando ainda há janela (antes da sentença).
- Deixar de calcular **prescrição** em tipos de pena baixa (340, 345, 348) — muitas vezes é a defesa mais eficiente.
- Não distinguir **favorecimento real (349)** de **receptação (180)** ou de **coautoria** no crime antecedente.
- Citar acórdão/súmula **de memória** — todo precedente passa pelo gate.

**Checklist da defesa:**
- [ ] Cliente é **testemunha compromissada** ou é o **próprio investigado/réu** (autodefesa)?
- [ ] A conduta está coberta pelo **nemo tenetur** (não autoincriminação)?
- [ ] Presentes **todos** os elementos do tipo imputado (inclusive o elemento subjetivo especial)?
- [ ] Cabe **reclassificação** para figura menos grave (339→340/§2º; 349→180)?
- [ ] Há **retratação** possível/ocorrida (art. 342, §2º) dentro da janela temporal?
- [ ] Incide **escusa absolutória** (art. 348, §2º) ou causa de isenção (coação moral, art. 22)?
- [ ] A **prescrição** foi calculada (`calculadora-prescricao`)?
- [ ] **Ação penal** correta (queixa no 345 sem violência) e prazo decadencial?
- [ ] Todas as citações passaram por `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio metodológico à construção da tese defensiva — não substitui o exame do caso concreto, dos autos e do juízo profissional. A responsabilidade pela peça e pela estratégia é sempre do **advogado** (EAOAB e Código de Ética; Provimento 205/2021 da OAB para atuação digital).
- **Polo:** esta skill é de **DEFESA** (foco no acusado destes crimes). O flag `polo_acusacao` da matéria é **false** — o roteador deve confirmar o polo do escritório em `company.md`. Havendo atuação como **assistente de acusação** ou **querelante** (ex.: vítima de denunciação caluniosa ajuizando queixa), inverta a lógica e observe a ética do polo (CNMP para o MP; EAOAB para a advocacia).
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória. Há sanções reais por jurisprudência inventada por IA — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
