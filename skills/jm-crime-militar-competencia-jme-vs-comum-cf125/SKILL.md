---
name: jm-crime-militar-competencia-jme-vs-comum-cf125
description: >-
  Use para definir a COMPETÊNCIA em crimes militares após a Lei 13.491/2017 — quando o caso vai à
  Justiça Militar (JME estadual / JMU federal), quando há desclassificação para a Justiça comum, e o
  regime dos crimes DOLOSOS contra a vida de civil praticados por militar (deslocamento ao Tribunal
  do Júri). Gatilhos: competência da Justiça Militar, crime militar, Lei 13.491/2017, art. 9º do
  CPM, art. 124/125 da CF, Justiça… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, competencia, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-crime-militar-competencia-jme-vs-comum-cf125"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-crime-militar-competencia-jme-vs-comum-cf125", "crime militar", "comum cf125"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Competência na Justiça Militar após a Lei 13.491/2017 (CF arts. 124-125; art. 9º do CPM)

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

Esta skill orienta a **análise da competência** para o processo e julgamento de crimes envolvendo militares: definir **se o fato é crime militar** (e, portanto, cai na Justiça Militar) ou **crime comum** (Justiça comum), e resolver o **regime especial dos crimes dolosos contra a vida de civil** praticados por militar. É a espinha dorsal de qualquer defesa criminal em que o réu é policial militar, bombeiro militar ou integrante das Forças Armadas, porque **a competência é pressuposto de validade do processo** — julgamento por juízo incompetente é nulidade (art. 564, I, CPP; CF, art. 5º, LIII, juiz natural).

> **Lição central:** competência aqui **não se decide pelo lugar, pela farda ou pelo nome do órgão que denunciou** — decide-se pela **subsunção do fato ao art. 9º do CPM**. O primeiro passo é sempre classificar o fato nas hipóteses do art. 9º; só depois se pergunta qual Justiça Militar (estadual ou federal) e se há alguma exceção que desloque a competência (dolo contra a vida de civil → júri; crime cometido por civil contra as instituições estaduais → jamais à JME). Errar a Justiça é nulidade absoluta, arguível a qualquer tempo.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente do art. 9º do CPM** (Decreto-Lei 1.001/1969) — a **Lei 13.491/2017** reescreveu o inciso II e acrescentou os §§1º e 2º, ampliando radicalmente o conceito de crime militar (passou a abarcar crimes previstos na **legislação penal comum**, não só os do CPM). Confira também os arts. **124 e 125, §§3º a 5º, da CF** (com a EC 45/2004) e a redação do art. 125, §4º, quanto ao **deslocamento ao júri**. Toda súmula, tese ou precedente (STF/STJ/STM) citado nesta skill passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir para a peça. Na dúvida sobre um número de acórdão, **omitir vence inventar**.

## Base legal

- **CF, art. 124** — Justiça Militar **da União** (JMU): processa e julga os **crimes militares definidos em lei**. Órgão de cúpula: **STM**.
- **CF, art. 125, §§3º a 5º** — Justiça Militar **dos Estados** (JME): criável por lei estadual; competente para processar e julgar os **militares dos Estados** (PM e bombeiros militares) nos **crimes militares definidos em lei** e as **ações judiciais contra atos disciplinares militares**.
- **CF, art. 125, §4º (red. EC 45/2004)** — a JME **julga os militares dos Estados**, **ressalvada a competência do júri quando a vítima for civil** — isto é, **crime doloso contra a vida de civil** praticado por militar estadual vai ao **Tribunal do Júri** da Justiça comum.
- **CF, art. 125, §5º** — cabe ao **juiz de direito do juízo militar** (singular) processar e julgar, isoladamente, os **crimes militares cometidos contra civis** e as ações contra atos disciplinares; ao **Conselho de Justiça** (colegiado), os demais crimes militares.
- **Art. 9º do CPM (DL 1.001/69, red. Lei 13.491/2017)** — **define o que é crime militar em tempo de paz**. É o coração da análise.
  - **Inciso I** — crimes **previstos no CPM**, quando definidos de modo diverso na lei comum ou nela não previstos (crimes propriamente militares em sentido estrito).
  - **Inciso II (red. Lei 13.491/17)** — crimes **previstos no CPM E na legislação penal comum**, quando praticados nas circunstâncias das alíneas "a" a "e" (militar em serviço, contra militar, em lugar sujeito à administração militar etc.). **Foi aqui a grande ampliação**: agora crimes da lei comum (ex.: tortura, abuso, crimes da Lei de Drogas, do Estatuto do Desarmamento) podem ser **crime militar** se presentes as circunstâncias.
  - **Inciso III** — crimes praticados por **militar da reserva, reformado ou civil**, contra as instituições militares, nas hipóteses das alíneas.
  - **§1º (red. Lei 13.491/17)** — os **crimes dolosos contra a vida praticados por militar contra CIVIL** serão da competência do **Tribunal do Júri** (regra geral do deslocamento — ver seção própria).
  - **§2º (red. Lei 13.491/17)** — **exceção** ao §1º: crimes dolosos contra a vida de civil praticados por **militar das Forças Armadas** em determinadas situações de missão/operação (ex.: no cumprimento de atribuições do art. 142 CF, em operações de GLO, atividades de autoridade de aviação/tráfego etc.) permanecem na **Justiça Militar da União**. **Confira o rol exato do §2º na fonte** — é casuístico e de alta litigiosidade constitucional.
- **CPPM (DL 1.002/69)** — rito do processo penal militar (não confundir com o CPP comum).

## O método — árvore de competência (aplicar sempre nesta ordem)

O erro clássico é começar perguntando "é PM ou Exército?". Comece pelo **fato** e pelo **art. 9º**.

```
PASSO 1 — O fato subsome a alguma hipótese do art. 9º do CPM?
   ├── NÃO → NÃO é crime militar → Justiça COMUM (estadual/federal conforme o caso).
   └── SIM → é crime militar → segue.

PASSO 2 — É crime DOLOSO contra a VIDA e a VÍTIMA é CIVIL?
   ├── SIM →
   │     • Militar ESTADUAL (PM/bombeiro) → Tribunal do JÚRI (CF 125, §4º; art. 9º, §1º CPM).
   │     • Militar das FORÇAS ARMADAS → REGRA: Júri (§1º); EXCEÇÃO do §2º
   │       (missões/operações do rol) → permanece na JMU. [Confirmar rol do §2º.]
   └── NÃO → segue na Justiça Militar.

PASSO 3 — Qual Justiça Militar?
   ├── Militar dos ESTADOS (PM/bombeiro militar) → Justiça Militar ESTADUAL (JME) — CF 125, §4º.
   └── Militar da UNIÃO (Forças Armadas) OU civil contra instituições militares federais
       → Justiça Militar da UNIÃO (JMU/STM) — CF 124.

PASSO 4 — Dentro da JME, órgão competente (CF 125, §5º):
   ├── Crime militar contra CIVIL → JUIZ DE DIREITO do juízo militar (singular).
   └── Demais crimes militares → CONSELHO DE JUSTIÇA (colegiado).

PASSO 5 — Há CONEXÃO entre crime militar e crime comum (ou civil corréu)?
   → NÃO se unificam: SEPARAM-SE os processos (cada Justiça julga o que é seu).
     Civil NUNCA é julgado pela JME; a competência da JME é ratione personae do militar estadual.
```

## Antes e depois da Lei 13.491/2017 — o divisor

- **Regra anterior:** era crime militar sobretudo o **tipificado no próprio CPM**. Crime da lei comum praticado por militar (ex.: tortura, abuso de autoridade) tendia a ficar na **Justiça comum**, salvo quando havia figura correspondente no CPM.
- **Regra atual (inciso II, red. 13.491/17):** passou a ser crime militar também o crime **previsto na legislação penal comum** quando praticado nas circunstâncias das alíneas do inciso II. Consequência prática: **muitas condutas migraram para a Justiça Militar** (tortura de preso por PM em serviço, tráfico praticado por militar em lugar sujeito à administração militar, crimes do Estatuto do Desarmamento etc.).
- **Ponto de altíssima litigiosidade defensiva:** discute-se a constitucionalidade e o alcance dessa ampliação — se ela viola o **juiz natural**, se retira do réu garantias (ex.: colegialidade do júri, ampla defesa), e se leis especiais com regime próprio (Lei de Tortura, com efeito automático de perda do cargo) convivem com o julgamento na JME. **Verifique o estado atual da controvérsia** (ADIs no STF sobre a Lei 13.491/17) via `jurisprudencia-stj-stf` — é matéria viva. **[NÃO VERIFICADO: números de ADI/precedente — conferir.]**

## Crime militar próprio × impróprio (conceito operacional)

- **Próprio (em sentido estrito):** só pode ser praticado por militar e só existe no CPM (ex.: deserção — art. 187 CPM; motim; abandono de posto). Não tem correspondente na lei comum.
- **Impróprio:** tem figura correspondente na lei comum, mas, dadas as circunstâncias do art. 9º, é tratado como militar (ex.: homicídio, lesão, furto praticados nas condições do art. 9º).
- **Relevância defensiva:** a classificação influencia **prescrição, efeitos da condenação (perda de posto/graduação — art. 92, CP e CPM), e a própria competência**. Um crime só existente na lei comum e sem correspondência no CPM **antes** de 2017 tendia à Justiça comum; **depois**, pode ser militar pelo inciso II. Sempre datar o fato (irretroatividade da lei penal mais gravosa — CF, art. 5º, XL — pode impedir o deslocamento retroativo à JME quando prejudicial). **Confirme na jurisprudência se a mudança de competência da 13.491/17 retroage** — há debate. **[NÃO VERIFICADO — conferir.]**

## O regime dos crimes DOLOSOS contra a vida de civil (o divisor mais sensível)

Este é o ponto que mais gera exceção de incompetência e conflito.

1. **Militar ESTADUAL (PM/bombeiro) mata ou tenta matar dolosamente um CIVIL** → competência do **Tribunal do Júri** da Justiça comum (CF, art. 125, §4º; art. 9º, §1º, CPM). **A JME não julga** esse crime.
   - **Fase de inquérito:** o **IPM** (inquérito policial militar) pode apurar, mas a ação penal e o julgamento são do júri. Fique atento à necessidade de **remessa dos autos** à Justiça comum e à validade dos atos praticados no IPM.
   - **Vítima MILITAR:** se a vítima também é militar (doloso contra a vida de militar), **não** há deslocamento ao júri — permanece na Justiça Militar. O deslocamento é **só quando a vítima é civil**.
2. **Militar das FORÇAS ARMADAS mata dolosamente civil** → **REGRA:** júri (§1º). **EXCEÇÃO (§2º, red. 13.491/17):** se o fato ocorre no contexto das **missões/operações** listadas no §2º (cumprimento de atribuições constitucionais das Forças Armadas, GLO, etc.), a competência é da **JMU**. Esse §2º é **objeto de forte questionamento constitucional** — verifique o estado da controvérsia antes de afirmar categoricamente. **[NÃO VERIFICADO — conferir ADI/precedente.]**
3. **Crimes dolosos contra a vida conexos a outros crimes militares:** o **doloso contra a vida de civil** vai ao júri; os demais crimes militares seguem na Justiça Militar (**separação de processos**). Não se atrai o júri para os crimes militares "puros" nem se atrai a JME para o doloso contra a vida de civil.

## Teses e contra-teses (foco em DEFESA)

**Tese defensiva 1 — Incompetência da Justiça comum (o fato é crime militar).**
Quando a denúncia foi oferecida na Justiça comum, mas o fato subsome ao art. 9º do CPM (militar em serviço, em lugar sujeito à administração militar etc.), argua-se a **incompetência absoluta** e a remessa à Justiça Militar. Instrumento: **exceção de incompetência** (art. 95, CPP) ou preliminar de nulidade. Contra-tese acusatória: negar a subsunção ao art. 9º (fato praticado fora das circunstâncias militares, por vingança pessoal, sem nexo com a função).

**Tese defensiva 2 — Incompetência da Justiça Militar (o fato NÃO é crime militar).**
Espelho da anterior: sustentar que **faltam as circunstâncias do art. 9º** (militar de folga, motivação estritamente pessoal, fora de lugar/atividade militar) → o caso é da **Justiça comum**, com todas as garantias (inclusive o júri, se doloso contra a vida). Útil quando a defesa prefere o júri ou o rito comum.

**Tese defensiva 3 — Deslocamento ao júri (vítima civil, dolo contra a vida).**
Militar estadual acusado de doloso contra a vida de civil deve ser julgado pelo **júri**, não pela JME (CF 125, §4º). Se a JME processou, há **nulidade por incompetência** e a defesa pode preferir a soberania dos veredictos e a plenitude de defesa do júri (ou o contrário, conforme a estratégia).

**Tese defensiva 4 — Separação obrigatória de processos (civil corréu).**
**Civil não é julgado pela JME estadual.** Havendo corréu civil, exige-se a **separação**: o militar responde na JME (pelo crime militar) e o civil na Justiça comum. Reunir tudo na JME contra o civil é nulidade.

**Tese defensiva 5 — Afastar a ampliação do inciso II para o fato concreto.**
Sustentar que a conduta imputada, embora prevista na lei comum, **não preenche as circunstâncias** das alíneas do inciso II (não foi em serviço, não foi em lugar sujeito à administração militar, não foi contra militar) → não migra para a JME; ou, quando prejudicial ao réu e o fato for **anterior** à Lei 13.491/17, invocar a **irretroatividade** (CF, art. 5º, XL). **Confirmar a orientação atual dos tribunais. [NÃO VERIFICADO.]**

**Tese defensiva 6 — Nulidade dos atos do juízo incompetente.**
Reconhecida a incompetência (absoluta), **anulam-se os atos decisórios** e, conforme a extensão, os instrutórios praticados perante o juízo errado (art. 567, CPP — na incompetência, anulam-se os atos decisórios; os demais podem ser ratificados). Instrumentos: exceção de incompetência (art. 95, CPP / correspondente no CPPM), **conflito de competência** (arts. 113-117, CPP, perante o tribunal comum a que toca dirimir), habeas corpus por manifesta incompetência.

## Instrumentos processuais de competência (roteiro prático)

- **Exceção de incompetência** — momento próprio: **na resposta à acusação / defesa preliminar**, sob pena de preclusão da incompetência relativa (a **absoluta** — que é a regra em Justiça errada, ratione materiae/personae — pode ser arguida a qualquer tempo e reconhecida de ofício). Registre e fundamente na subsunção ao art. 9º do CPM.
- **Conflito de competência** — quando dois juízos (ex.: vara comum e auditoria militar) se declaram competentes ou incompetentes; dirime o tribunal comum a que ambos estejam vinculados (ou o STJ, se envolver juízos de tribunais diversos — **conferir o órgão competente para dirimir no caso concreto**).
- **Habeas corpus** — quando a incompetência é manifesta e há coação/ameaça à liberdade; pode atacar o processamento por juízo absolutamente incompetente.
- **Nulidade em preliminar de apelação/recurso** — se a incompetência só se evidenciou após a sentença, arguir a nulidade absoluta em preliminar recursal (não preclui).

## Súmulas e precedentes (sob o Citation Gate — conferir via `jurisprudencia-stj-stf`)

> **Regra do Citation Gate:** os enunciados abaixo são pontos de partida de pesquisa. **Nenhum número de HC/REsp/RE, tema ou informativo deve ir para a peça sem verificação.** Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.

- **Súmula 6/STJ** — "Compete à Justiça Comum Estadual processar e julgar delito decorrente de acidente de trânsito envolvendo viatura de polícia militar, salvo se autor e vítima forem policiais militares em situação de atividade." (**Notória; ainda assim conferir a redação e a vigência.**)
- **Súmula 53/STJ** — "Compete à Justiça Comum Estadual processar e julgar civil acusado de prática de crime contra instituições militares estaduais." (Reforça: **civil não é julgado pela JME.** Conferir vigência.)
- **Súmula 172/STJ** — "Compete à Justiça Comum processar e julgar militar por crime de abuso de autoridade, ainda que praticado em serviço." (**ATENÇÃO à vigência:** a Lei 13.491/2017 e a nova Lei de Abuso de Autoridade — Lei 13.869/2019 — podem ter impactado a leitura desse enunciado. **Não citar sem confirmar se subsiste** via `jurisprudencia-stj-stf`.) **[NÃO VERIFICADO — impacto da 13.491/17 e da 13.869/19.]**
- **Súmula Vinculante 36/STF** — competência para processar e julgar servidor/militar em determinado contexto de Justiça (Marinha/registro de embarcações). **Conferir o enunciado exato e a pertinência ao caso — NÃO citar de memória.** **[NÃO VERIFICADO.]**
- **Precedentes sobre a Lei 13.491/2017** (constitucionalidade da ampliação, alcance do §2º, competência do júri x JMU): **matéria viva no STF/STM.** **[NÃO VERIFICADO: números de ADI/HC/RE — conferir obrigatoriamente via `jurisprudencia-stj-stf` antes de qualquer citação.]**

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Decidir a competência **pela farda** ("é PM, logo é Justiça Militar") em vez de subsumir o fato ao **art. 9º do CPM**.
- Esquecer o **deslocamento ao júri** no doloso contra a vida de **civil** por militar estadual (CF 125, §4º) — mandar ao júri o doloso contra a vida de **militar** (que fica na JME) ou manter na JME o doloso contra a vida de **civil**.
- Tratar o **§2º** (Forças Armadas, missões) como se aplicável a **militar estadual** — ele é exceção **só** para militar das Forças Armadas.
- Julgar **civil** na JME **estadual** (vedado — Súm. 53/STJ; separação de processos).
- Ignorar a **data do fato** ao aplicar a ampliação da Lei 13.491/17 (irretroatividade da lei mais gravosa — CF, art. 5º, XL).
- Confundir **JME** (Estados, PM/bombeiro, CF 125) com **JMU** (União, Forças Armadas, CF 124) — competências e órgãos de cúpula distintos (TJM/TJ x STM).
- Confundir **juiz de direito do juízo militar** (crime militar contra civil, CF 125, §5º) com o **Conselho de Justiça** (demais crimes militares) na JME.
- Aplicar o **CPP comum** quando o rito é do **CPPM**, ou vice-versa.
- Citar **súmula impactada** pela 13.491/17 (ex.: Súm. 172/STJ sobre abuso) sem confirmar se subsiste.
- Perder o momento da **exceção de incompetência** (embora a absoluta não preclua, o registro tempestivo evita discussão).

**Checklist de análise de competência:**
- [ ] O fato foi **subsumido ao art. 9º do CPM** (não decidido pela farda)?
- [ ] Identifiquei se o crime é **próprio** (só CPM) ou **impróprio** (também na lei comum, inciso II)?
- [ ] Datei o fato e verifiquei **irretroatividade** (art. 5º, XL, CF) diante da Lei 13.491/17?
- [ ] É **doloso contra a vida** e a **vítima é civil**? Se sim, apliquei o **deslocamento ao júri** (CF 125, §4º; art. 9º, §1º)?
- [ ] Se militar das Forças Armadas: verifiquei a **exceção do §2º** (missões/operações) e seu estado de controvérsia?
- [ ] **JME ou JMU?** (militar estadual → JME; militar da União → JMU.)
- [ ] Dentro da JME: **juiz de direito** (crime contra civil) ou **Conselho** (demais)?
- [ ] Há **civil corréu** → exigi a **separação de processos** (civil nunca na JME)?
- [ ] Escolhi o **instrumento** certo (exceção de incompetência, conflito de competência, HC, preliminar recursal)?
- [ ] Apliquei o **rito correto** (CPPM x CPP)?
- [ ] Todas as **súmulas/precedentes** foram conferidos via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar?

## Distinção — quando usar outra skill

- Esta skill resolve o **divisor de competência JME × Justiça comum** e o **regime do doloso contra a vida de civil por militar** (pós-13.491). Para a **classificação genérica** de crimes militares e enquadramento tipológico, use a skill de classificação de crimes militares (`jm-classificacao-competencia`), se existente — esta aqui é o recorte **especializado no divisor pós-reforma**.
- Confirmado o **deslocamento ao júri**, a fase de plenário/quesitação é tratada pelas skills do **Tribunal do Júri** (ex.: `juri-quesitacao`, `juri-plenario-debates`).
- Para o **cálculo de prescrição** (que varia conforme o CPM/CP e a pena), aponte para a `calculadora-prescricao` (não calcular à mão aqui).

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta skill é apoio à análise da competência; a decisão sobre a via processual, a arguição de incompetência e a estratégia (preferir o júri, a JME ou a Justiça comum) é sempre do **advogado responsável**, que deve ler os autos concretos e conferir a redação vigente das normas.
- **Ética por polo:** advocacia — OAB/CED + Provimento 205/2021; Ministério Público — CNMP; Defensoria — LC 80/94. Esta skill é de **análise de competência**, aproveitável por qualquer polo; o **foco é a DEFESA** do militar acusado (arguir incompetência, buscar o juízo natural mais favorável). **Não há polo acusatório presumido** — o roteador deve conferir o polo da instituição (`company.md`) antes de orientar a peça.
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória. Dispositivos de lei e súmulas notórias, com certeza; **qualquer** número de acórdão, informativo, tema ou ADI marcado **[NÃO VERIFICADO]** deve ser confirmado via `jurisprudencia-stj-stf` antes de ir para a peça. Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao converter a análise em peça (exceção de incompetência, conflito, HC, preliminar), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita ao art. 9º do CPM, coesão e persuasão (a régua de obra-prima que a revisão cobra).
