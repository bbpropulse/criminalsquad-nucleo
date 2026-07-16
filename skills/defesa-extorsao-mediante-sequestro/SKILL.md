---
name: defesa-extorsao-mediante-sequestro
description: >-
  Use ao defender EXTORSÃO MEDIANTE SEQUESTRO (CP, art. 159) — o crime de sequestrar pessoa com o
  fim de obter, para si ou para outrem, qualquer vantagem como condição ou preço do resgate. Cobre a
  desclassificação para sequestro/cárcere privado (art. 148) ou para extorsão simples (art. 158)
  quando falta o binômio privação de liberdade + exigência de resgate, as qualificadoras do §1º
  (duração 24h, vítima menor de 18/maior de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, patrimonio, defesa, hediondo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-extorsao-mediante-sequestro"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-extorsao-mediante-sequestro", "defesa extorsao", "mediante sequestro"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Extorsão Mediante Sequestro (CP, art. 159)

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

Esta skill orienta a **defesa técnica no crime de extorsão mediante sequestro** — o delito do **art. 159 do Código Penal**, que pune *"sequestrar pessoa com o fim de obter, para si ou para outrem, qualquer vantagem, como condição ou preço do resgate"*. É crime **hediondo** (Lei 8.072/90, art. 1º, IV, em todas as formas), **formal** (consuma-se com a privação de liberdade voltada ao resgate, ainda que o resgate não seja pago) e **permanente** (a consumação se prolonga enquanto dura a privação). O foco é majoritariamente **defensivo**: desclassificar, afastar qualificadoras/resultados e maximizar a diminuição do §4º.

> **Lição central:** o elemento que define o 159 é o **binômio** — *privação de liberdade* **+** *exigência de vantagem como condição/preço do resgate*. Ataque o binômio antes de tudo. Sem o **fim de resgate**, some o 159: sobra **sequestro/cárcere privado (art. 148)** ou, conforme o caso, **extorsão simples (art. 158)** — reclassificação que despenca a pena e, no 148, retira a hediondez. **Classifique o fato concreto antes de discutir pena.**

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do **art. 159 e §§ do CP** e da **Lei 8.072/90** (hediondos) na fonte oficial antes de fundamentar. As frações de progressão/livramento e a disciplina de execução do hediondo foram alteradas por leis sucessivas (Lei 13.964/2019 e posteriores) — para lapsos de execução, use a skill `execucao-progressao-regime`. **Toda** súmula, tese ou acórdão citado passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`. Na dúvida sobre um número de acórdão, **omitir vence inventar**.

---

## Base legal

- **Art. 159, caput, CP** — extorsão mediante sequestro: sequestrar pessoa com o fim de obter vantagem como **condição ou preço do resgate**. Pena de reclusão de **8 a 15 anos**.
- **Art. 159, §1º, CP** — **qualificadoras**: sequestro que **dura mais de 24 horas**, ou se o sequestrado é **menor de 18** ou **maior de 60 anos**, ou se o crime é cometido por **bando ou quadrilha** (associação de agentes). Pena de **12 a 20 anos**.
- **Art. 159, §2º, CP** — se do fato resulta **lesão corporal de natureza grave**: reclusão de **16 a 24 anos**.
- **Art. 159, §3º, CP** — se resulta a **morte**: reclusão de **24 a 30 anos** (o mais grave patamar do Código para crimes patrimoniais).
- **Art. 159, §4º, CP** — **DELAÇÃO PREMIADA LEGAL PRÓPRIA**: se o crime é cometido **em concurso**, o **coautor que denunciar à autoridade**, facilitando a **libertação do sequestrado**, terá a pena **reduzida de 1/3 a 2/3**.
- **Lei 8.072/90 (Crimes Hediondos)** — o art. 159, *caput* e §§, é **hediondo** em todas as figuras; reflete em regime, progressão, livramento, fiança, anistia/graça/indulto.
- **Distinção normativa:** **art. 148, CP** (sequestro e cárcere privado — privação de liberdade **sem** o fim de resgate); **art. 158, CP** (extorsão — constrangimento a fazer/tolerar/deixar de fazer para obter vantagem, **sem** o sequestro como meio-fim de resgate); **art. 158, §3º, CP** (extorsão com **restrição da liberdade** da vítima — "sequestro relâmpago", figura autônoma que **não** se confunde com o 159).

---

## Anatomia do tipo — os elementos que a defesa fiscaliza

O art. 159 exige, cumulativamente:

1. **Conduta:** *sequestrar pessoa* — privar alguém de liberdade de locomoção (detenção/deslocamento/ocultação).
2. **Elemento subjetivo especial (dolo específico):** o **fim de obter vantagem como condição ou preço do resgate**. É a *finalidade de resgate* que transforma o sequestro comum (148) em extorsão mediante sequestro (159). **Sem esse fim, não há 159.**
3. **Vantagem:** *qualquer* vantagem exigida de terceiro (ou da própria vítima) para a libertação — em regra econômica, mas o tipo diz "qualquer vantagem".

> **Crime formal e permanente.** Consuma-se no **momento da privação de liberdade** com o fim de resgate — **independe do efetivo pagamento** e independe de a vantagem ser obtida. Sendo **permanente**, admite **prisão em flagrante enquanto dura o cativeiro** e o *dies a quo* da **prescrição** conta da **cessação da permanência** (verificar art. 111, III, CP e a skill de `calculo-prescricao`). A permanência também repercute na **lei aplicável no tempo** e na incidência de qualificadora temporal (§1º, "mais de 24h").

---

## Roteiro de defesa — teses por eixo

### 1. Ataque ao binômio — desclassificação (a tese-mãe)

O ponto mais poderoso: **não há o fim de resgate** (dolo específico). Consequências conforme o que sobra do fato:

- **Para sequestro / cárcere privado (art. 148):** privação de liberdade **sem** exigência de vantagem como preço da libertação (ex.: vingança, ciúme, coação para fim diverso do resgate, retenção por dívida pessoal sem constrangimento extorsivo). **Ganho enorme:** pena de 1 a 3 anos (com qualificadoras próprias) e **perda da hediondez**.
- **Para extorsão simples (art. 158) ou "sequestro relâmpago" (art. 158, §3º):** quando a **restrição de liberdade é breve e instrumental** do constrangimento para obter a vantagem no ato (ex.: rendição da vítima para sacar em caixa, transferência imediata), sem verdadeiro **cativeiro voltado ao resgate**. O 158, §3º é figura autônoma, **menos grave** que o 159 e com regime próprio.
- **Critério de corte (defensivo):** privação **breve, contemporânea e meio** da extorsão → 158/§3º; privação **prolongada, com cativeiro e exigência de resgate a terceiro** → 159. Sustente a subsunção **mais benéfica** com base na prova concreta da finalidade e da duração.

### 2. Afastamento das qualificadoras do §1º

- **Duração superior a 24 horas:** exigir prova **precisa do lapso**. Sendo permanente o crime, a **contagem do tempo de cativeiro** deve ser demonstrada; dúvida sobre a ultrapassagem das 24h resolve-se *pro reo* (afasta a qualificadora, mantendo o *caput*).
- **Vítima menor de 18 / maior de 60:** exigir **prova documental** da idade e discutir o **conhecimento** dessa condição pelo agente (erro sobre elemento — art. 20, CP — pode afastar a qualificadora subjetivamente conhecida).
- **Quadrilha/bando (associação):** distinguir **concurso eventual de pessoas** (co-autoria pontual, art. 29 CP) de **associação estável** (pluralidade + estabilidade + finalidade associativa). Concurso ocasional **não** qualifica; ataque também eventual **bis in idem** se houver imputação autônoma de organização criminosa/associação pelos mesmos fatos.

### 3. Afastamento/questionamento dos resultados agravadores (§§2º e 3º)

- **Nexo causal e imputação:** a lesão grave (§2º) e a morte (§3º) são **resultados** que agravam. Discutir o **nexo** entre a conduta de sequestro e o resultado, a **previsibilidade** e a natureza (preterdolosa vs. dolosa) — quem responde pelo resultado é quem lhe deu causa e a quem ele é imputável.
- **Concurso de agentes e comunicabilidade:** o resultado morte causado por **um** coautor nem sempre se estende automaticamente aos demais — discutir o **âmbito do dolo comum**, o desvio subjetivo (excesso) e os limites da coautoria (art. 29, §2º, CP — cooperação dolosamente distinta).
- **Vedar dupla valoração:** o resultado que qualifica não pode, ao mesmo tempo, servir de circunstância judicial desfavorável na 1ª fase da dosimetria (ver `calculadora-dosimetria`).

### 4. Autoria, participação e o partícipe de menor importância

- **Provar a autoria/participação individual:** negativa de autoria, álibi, fragilidade de reconhecimento (rigor do art. 226, CPP), delação de corréu sem corroboração.
- **Participação de menor importância (art. 29, §1º, CP):** redução de 1/6 a 1/3 para quem teve **contribuição secundária** (ex.: quem apenas emprestou o local, ou vigiou por período curto sem domínio do fato). Não se confunde com o §4º do 159.
- **Desistência voluntária / arrependimento eficaz (art. 15, CP):** por ser permanente, a **libertação espontânea antes da obtenção do resgate** pode, conforme a tese, repercutir — mas atenção: consumado o crime com a privação voltada ao resgate, discute-se antes o §4º (diminuição) do que o art. 15. Avaliar caso a caso.

### 5. A delação premiada do §4º — causa de diminuição LEGAL e AUTÔNOMA

> **Este é o diferencial do 159.** O §4º é uma **causa de diminuição de pena prevista na própria lei penal**, distinta da colaboração premiada processual da **Lei 12.850/2013**. Não depende de acordo homologado nos moldes da 12.850 — é benefício **material**, de aplicação pelo juiz na sentença quando presentes os requisitos.

**Requisitos cumulativos do §4º:**
1. **Crime cometido em concurso** (coautoria/participação — pluralidade de agentes);
2. **Denúncia à autoridade** feita por um dos coautores;
3. **Facilitação da libertação** do sequestrado — a delação deve ser **eficaz**, contribuindo concretamente para a soltura da vítima.

**Efeito:** redução de **1/3 a 2/3**, cujo *quantum* se gradua pela **efetividade e relevância** da colaboração (quanto mais decisiva a facilitação da libertação, maior a fração — sustentar 2/3 quando a delação foi determinante).

**Teses defensivas ao aplicar o §4º:**
- Sustentar a **incidência mesmo sem acordo formal** de colaboração (o §4º é benefício legal autônomo; não se exige o rito da Lei 12.850 para reconhecê-lo).
- Requerer a **fração máxima (2/3)** demonstrando que a informação prestada foi a **causa eficiente** da libertação (nexo entre a delação e a soltura).
- Se o cliente colaborou **e** houve acordo de colaboração premiada (Lei 12.850), articular os dois regimes na dosimetria sem **bis in idem** e buscando o **resultado mais favorável** — coordenar com a skill `colaboracao-premiada`.
- Preservar a colaboração **por escrito e com registro**, resguardando a **voluntariedade** e vedando uso da delação como confissão coagida.

### 6. Nulidades e prova — a defesa processual

- **Cadeia de custódia** dos vestígios (interceptações do cativeiro, geolocalização, rastreamento do resgate) — arts. 158-A a 158-F, CPP; questionar quebras (skill `cadeia-de-custodia`).
- **Interceptações telefônicas/telemáticas:** legalidade da autorização, prazos, fundamentação (Lei 9.296/96) — comum nesse tipo de investigação.
- **Reconhecimento pessoal:** rigor do **art. 226, CPP** (o STJ tem endurecido a exigência do procedimento legal — **[NÃO VERIFICADO]**, conferir precedente atual via `jurisprudencia-stj-stf`).
- **Confissão/interrogatório:** voluntariedade, direito ao silêncio (art. 5º, LXIII, CF), presença de defensor.
- **Prisão preventiva:** por ser crime grave e permanente, a preventiva é frequente — atacar fundamentação concreta (art. 312, CPP), excesso de prazo e revisar a contemporaneidade (art. 316, parágrafo único, CPP).

---

## Dosimetria e execução (método — sem cálculo aqui)

A pena do 159 é **alta** e a base varia por figura (caput 8–15; §1º 12–20; §2º 16–24; §3º 24–30). O **método** de dosimetria (trifásico, art. 68 CP) e o cálculo de pena/multa devem ser feitos pela skill **`calculadora-dosimetria`**; a **prescrição** (contada da cessação da permanência) pela **`calculo-prescricao`**; e os **lapsos de progressão/livramento** — considerando a **hediondez** e eventual **resultado morte** — pela **`execucao-progressao-regime`**. Pontos de atenção do método:

- **1ª fase:** não usar o resultado que já qualifica (§§1º–3º) como circunstância judicial negativa (vedação ao *bis in idem*).
- **2ª fase:** confissão (art. 65, III, "d") e menoridade/senilidade; coação resistível; participação.
- **3ª fase:** aplicar a **diminuição do §4º (1/3 a 2/3)** — causa de diminuição que incide na terceira fase e pode reduzir drasticamente a pena; buscar a fração máxima.
- **Livramento condicional:** o §3º (resultado morte) tem restrições próprias no regime hediondo — conferir a vedação/lapso vigente antes de afirmar (gate de vigência).

> Se a instituição precisar de **cálculo determinístico** replicável de pena/prescrição para este tipo, marque **[calculadora a implementar com testes]** e direcione ao `calculadora-dosimetria` / `calculo-prescricao` existentes.

---

## Teses × contra-teses (defesa × acusação)

| Tese da defesa | Fundamento | Contra-tese (acusação) |
|---|---|---|
| **Desclassificar para 148** (não há fim de resgate) | ausência do dolo específico de resgate | havia exigência de vantagem como preço da libertação — subsome ao 159 |
| **Desclassificar para 158/§3º** (restrição breve e instrumental) | privação contemporânea da extorsão, sem cativeiro | houve cativeiro prolongado voltado a resgate de terceiro → 159 |
| **Afastar §1º "mais de 24h"** | prova imprecisa do lapso; dúvida *pro reo* | prova do tempo de cativeiro demonstra a ultrapassagem |
| **Afastar qualificadora de quadrilha/bando** | concurso eventual, não associação estável | estabilidade e divisão de tarefas configuram a associação |
| **Excluir resultado morte de coautor (§3º)** | desvio subjetivo/excesso; art. 29, §2º, CP | resultado previsível no plano comum do sequestro |
| **Aplicar §4º na fração de 2/3** | delação foi causa eficiente da libertação | colaboração tardia/pouco relevante → fração mínima ou não incide |
| **Participação de menor importância (art. 29, §1º)** | contribuição secundária sem domínio do fato | agente teve papel essencial no cativeiro |

---

## Súmulas, precedentes e temas (sob o Citation Gate)

> **Regra de ouro:** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer número específico de HC/REsp/RE, informativo ou tema** só entra **após** conferência em `jurisprudencia-stj-stf`. Prefira ensinar a **tese** e o **dispositivo** a arriscar um acórdão.

- **Hediondez do art. 159** — decorre da **Lei 8.072/90, art. 1º, IV** (dispositivo legal — citar com segurança). Reflexos em progressão/livramento/fiança seguem a lei de execução vigente (conferir vigência).
- **Crime formal (consuma-se com a privação voltada ao resgate, independe do pagamento)** — entendimento consolidado; **confirmar o enunciado sumular/precedente aplicável** via gate antes de numerar. **[NÃO VERIFICADO]**
- **Rigor do reconhecimento pessoal (art. 226, CPP)** — há evolução jurisprudencial recente do STJ exigindo o procedimento legal sob pena de nulidade — **[NÃO VERIFICADO]**, conferir HC/tema atual via `jurisprudencia-stj-stf`.
- **Natureza autônoma do §4º (delação legal, independente da Lei 12.850)** — sustentar como **tese doutrinária/legal**; se citar precedente confirmatório, **verificar antes**. **[NÃO VERIFICADO]**
- **Comunicabilidade do resultado morte no concurso de agentes** — matéria de forte divergência; **não** afirmar posição do tribunal sem conferir o acórdão. **[NÃO VERIFICADO]**

---

## Erros comuns / checklist da defesa

- [ ] **Classifiquei o fato ANTES da pena?** (159 × 148 × 158/§3º) — o binômio *privação + fim de resgate* está realmente provado?
- [ ] Testei a **desclassificação** mais benéfica (148 retira a hediondez; 158/§3º reduz muito a pena)?
- [ ] Confiei o **lapso do cativeiro** à prova, sem aceitar "mais de 24h" (§1º) por presunção?
- [ ] Distingui **concurso eventual** de **quadrilha/bando** ao atacar o §1º?
- [ ] Discuti **nexo, previsibilidade e comunicabilidade** dos resultados §§2º/3º no concurso de agentes?
- [ ] Verifiquei se cabe **participação de menor importância** (art. 29, §1º) — distinta do §4º?
- [ ] **Explorei o §4º** como causa de diminuição **legal e autônoma** (não exige acordo da Lei 12.850) e requeri a **fração máxima (2/3)** quando a delação facilitou a libertação?
- [ ] Ataquei **cadeia de custódia**, **interceptações** e **reconhecimento** (art. 226 CPP)?
- [ ] Impedi o **bis in idem** (resultado qualificador reaproveitado na 1ª fase)?
- [ ] Deleguei **dosimetria/prescrição/execução** às calculadoras (`calculadora-dosimetria`, `calculo-prescricao`, `execucao-progressao-regime`)?
- [ ] Passei **todas as citações** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] Marquei a peça como **rascunho para revisão humana**?

**Anti-padrões (evitar):**
- Aceitar a capitulação da denúncia (159 qualificado) sem testar a **desclassificação**.
- Tratar o §4º como se fosse a colaboração da Lei 12.850 (é benefício **legal autônomo**; não exige o rito do acordo).
- Presumir "mais de 24h" ou "quadrilha" sem prova concreta.
- Estender automaticamente a **morte/lesão** a todos os coautores sem discutir o dolo comum.
- Citar número de HC/REsp/informativo **de memória** — passe pelo gate.
- Confundir **participação de menor importância** (art. 29, §1º) com a **delação do §4º**.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à elaboração da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado** (CED/OAB, dever de diligência; **Provimento 205/2021** quanto à comunicação/publicidade). Nada aqui substitui a análise do caso concreto e dos autos.
- **Polo:** skill **defensiva** (advocacia criminal / defesa). Ao articular colaboração/delação, observar a **voluntariedade** do assistido e o sigilo (LGPD; `acervo/casos/` sigiloso). Se o roteador identificar atuação de **acusação** (MP/assistente), confira o polo — esta skill é do polo **defensivo**.
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese citada de memória; tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
