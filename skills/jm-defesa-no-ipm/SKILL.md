---
name: jm-defesa-no-ipm
description: >-
  Use na atuação DEFENSIVA dentro do Inquérito Policial Militar (IPM) — fase pré-processual
  presidida pelo encarregado (oficial), regida pelo CPPM (Dec.-Lei 1.002/69, arts. 9º-28):
  acompanhamento de oitivas e do interrogatório, requerimento de diligências, arguição de nulidades,
  controle da solução/relatório e do indiciamento, acesso aos autos (SV 14) e preparação para a
  denúncia do MPM. Difere do IP comum (Lei 12.830… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, inquerito, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-no-ipm"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-no-ipm", "defesa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa do Indiciado no Inquérito Policial Militar (CPPM, arts. 9º a 28)

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

Esta skill orienta a **atuação da defesa dentro do IPM** — o procedimento **administrativo, inquisitorial e pré-processual** de apuração de infração penal militar, **presidido por um oficial (o encarregado)**, e não por delegado de polícia. É a fase que antecede a denúncia do Ministério Público Militar (na Justiça Militar da União) ou do Ministério Público Estadual (na Justiça Militar Estadual) e define, muitas vezes, o destino do caso. Aqui a defesa é **preventiva e documental**: fiscaliza a legalidade, semeia teses e blinda a fase judicial.

> **Lição central:** o IPM **não é o IP comum**. Esqueça delegado, Lei 12.830 e arts. 4º-23 do CPP — aplicam-se o **CPPM (Dec.-Lei 1.002/69)** e o **Código Penal Militar (Dec.-Lei 1.001/69)**. Antes de qualquer tese, **confirme a competência**: o fato é **crime militar** (art. 9º do CPM)? Se não for, o IPM é via imprópria e há nulidade/incompetência a arguir. Classificar o fato **antes** de tudo evita atuar no rito errado.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do CPPM (arts. 9º-28) e do CPM (art. 9º — alterado por diversas leis, entre elas a **Lei 13.491/2017**, que ampliou o conceito de crime militar). Confira também a EC e a legislação de organização da Justiça Militar (Estadual e da União), a competência do juiz de direito do juízo militar (crimes militares praticados contra civis na JME) e qualquer súmula/tese pela skill `jurisprudencia-stj-stf` **antes** de fundamentar. Nunca cite número de acórdão de memória.

## Como o IPM difere do IP comum (mapa rápido)

| Aspecto | IP comum | IPM |
|---|---|---|
| Diploma | CPP (arts. 4º-23) + Lei 12.830/13 | **CPPM (Dec.-Lei 1.002/69), arts. 9º-28** |
| Quem preside | Delegado de polícia (autoridade policial) | **Encarregado** — oficial designado pela autoridade militar |
| Instauração | Portaria do delegado | **Portaria** da autoridade militar (art. 10 CPPM) + designação do encarregado |
| Natureza | Administrativo, inquisitorial | Administrativo, inquisitorial (idem) |
| Encerramento | Relatório do delegado | **Solução** e **relatório** do encarregado, com **despacho da autoridade militar** |
| Destinatário | MP (Justiça comum) | **MPM** (JMU) ou **MP Estadual** (JME) |
| Prazo (regra) | 10/30 dias (CPP art. 10) | **20 dias preso / 40 dias solto**, prorrogável (art. 20 CPPM) |

## Base legal

- **CPPM (Dec.-Lei 1.002/69)** — o inquérito: **arts. 9º a 28** (finalidade, instauração, poderes do encarregado, oitivas, prazos, solução e remessa).
  - **Art. 9º CPPM** — finalidade do IPM (apuração sumária do fato e da autoria, elementos para a ação penal militar).
  - **Art. 10 CPPM** — formas de instauração (de ofício pela autoridade militar; requisição; requerimento; auto de prisão em flagrante).
  - **Art. 13 CPPM** — providências e poderes instrutórios do encarregado.
  - **Art. 20 CPPM** — **prazos** de conclusão (20 dias indiciado preso; 40 dias solto) e prorrogação.
  - **Arts. 22 a 28 CPPM** — **solução**, relatório, despacho da autoridade e remessa dos autos.
- **CPM (Dec.-Lei 1.001/69)** — **art. 9º** (definição de crime militar em tempo de paz), alterado pela **Lei 13.491/2017**.
- **CF/88** — **art. 5º, LV** (contraditório e ampla defesa, também na esfera administrativa), **LXIII** (direito ao silêncio), **art. 124** (JMU) e **art. 125, §§4º e 5º** (JME).
- **SV 14/STF** — acesso da defesa aos elementos **já documentados** no procedimento investigatório.
- **Estatuto da OAB (Lei 8.906/94)** — prerrogativas do advogado; acesso a autos e assistência ao investigado/testemunha.

## Roteiro de atuação da defesa no IPM (linha do tempo)

### 1) Triagem de competência e de tipicidade militar
- O fato é **crime militar** (art. 9º do CPM)? Verifique o critério **ratione materiae/personae/loci** e o impacto da **Lei 13.491/2017** (crimes previstos na legislação penal comum, praticados nas circunstâncias do art. 9º, II).
- **Crime doloso contra a vida de civil** praticado por militar: atenção à competência (regra do júri × exceções do art. 9º, §§ do CPM — **conferir a redação vigente e a jurisprudência atual** via `jurisprudencia-stj-stf`).
- Não sendo crime militar → arguir **incompetência/nulidade** e pleitear declínio para a Justiça comum.

### 2) Controle da portaria de instauração (art. 10 CPPM)
- A portaria descreve **fato determinado** com **mínima justa causa**? Portaria genérica/sem lastro é atacável.
- **Impedimento/suspeição do encarregado** (relação hierárquica com envolvidos; interesse pessoal) — arguir e requerer substituição.

### 3) Acesso aos autos e constituição de defesa
- **SV 14/STF**: requerer **vista/cópia** dos elementos já documentados (o sigilo alcança apenas diligências em curso).
- Juntar **procuração**; requerer **intimação** da defesa dos atos designados.

### 4) Acompanhamento das oitivas e do interrogatório
- **Direito ao silêncio (CF, art. 5º, LXIII)** do indiciado; a autodefesa não pode ser usada como confissão presumida.
- Fiscalizar **advertências**, identificação correta, e **reperguntas** (na medida admitida ao inquérito).
- **Testemunhas:** conferir compromisso, contradita de impedidas/suspeitas, e o registro fiel dos depoimentos.

### 5) Requerimento de diligências (art. 13 CPPM)
- Requerer, **por escrito e protocolado**, as diligências úteis à defesa: perícias, juntada de documentos, acareações, oitiva de testemunhas de defesa, exames.
- O encarregado pode indeferir — mas o **indeferimento deve ser fundamentado**; o requerimento indeferido **fica nos autos** e vira munição (cerceamento) para a fase judicial.

### 6) Cadeia de custódia e prova
- Fiscalizar apreensões, laudos e a **cadeia de custódia** de vestígios (integrar com a skill `cadeia-de-custodia`): coleta, acondicionamento, rastreabilidade. Vício aqui macula a prova que servirá à denúncia.

### 7) Prazos (art. 20 CPPM)
- **20 dias** com indiciado **preso**; **40 dias** com indiciado **solto**, prorrogáveis por despacho fundamentado da autoridade militar (para o solto).
- **Excesso de prazo** com indiciado preso → base para **relaxamento/soltura** (integrar `cautelares-relaxamento`) e para pressionar a conclusão.

### 8) Controle do indiciamento
- O **indiciamento** é ato do encarregado que atribui a autoria — deve ser **fundamentado** e lastreado em indícios; indiciamento genérico é impugnável.
- Requerer o **não indiciamento** quando ausente justa causa, apresentando razões escritas antes da solução.

### 9) Solução, relatório e remessa (arts. 22-28 CPPM)
- A **solução** e o **relatório** do encarregado, com o **despacho da autoridade militar**, encerram o IPM e remetem os autos ao **MPM/MP** e ao juízo.
- A **opinião** do encarregado **não vincula** o MP nem o juízo; mesmo assim, atacar conclusões sem lastro **documenta** a tese defensiva desde já.

## Teses e contra-teses típicas

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Fato **não é crime militar** (art. 9º CPM) → incompetência | Ausência de critério do art. 9º; declínio à Justiça comum | Enquadramento no art. 9º, II (pós-Lei 13.491/17) |
| **Portaria genérica** / sem justa causa | Falta de fato determinado (art. 10 CPPM) | Justa causa mínima na fase de apuração sumária |
| **Cerceamento** — diligência de defesa indeferida sem motivação | Art. 13 CPPM + CF art. 5º, LV | Discricionariedade do encarregado no inquérito |
| **Impedimento/suspeição do encarregado** | Interesse/hierarquia com envolvidos | Mera hierarquia não gera suspeição automática |
| **Excesso de prazo** (indiciado preso) | Art. 20 CPPM | Complexidade justifica prorrogação |
| **Vício de cadeia de custódia** | Quebra de rastreabilidade do vestígio | Higidez formal dos autos |
| **Nulidade das oitivas** (silêncio desrespeitado; sem intimação da defesa) | CF art. 5º, LXIII e LV | Inquérito é inquisitorial; vícios sanáveis na fase judicial |
| **Não indiciamento** por ausência de indícios | Falta de justa causa | Indícios suficientes para a fase pré-processual |

> **Nota de proporção (natureza inquisitorial):** o IPM é inquisitorial, e parte da jurisprudência trata vícios da fase investigatória como **não contaminantes** da ação penal, salvo prova ilícita e reflexos (teoria dos frutos da árvore envenenada). Por isso a defesa **documenta tudo por escrito** no IPM: o valor prático é (a) blindar a fase judicial, (b) fundar relaxamento/HC quando há prisão, e (c) preparar a **resposta à acusação** e eventual pedido de **rejeição da denúncia/absolvição sumária**. Confirme, no caso concreto e na jurisprudência atual, se o vício é tido por **nulidade** ou por mera irregularidade — passe pela skill `jurisprudencia-stj-stf`.

## Instrumentos da defesa no IPM (peças e vias)

- **Requerimento de vista/cópia dos autos** (SV 14) endereçado ao encarregado.
- **Requerimento de diligências** (art. 13 CPPM), sempre protocolado e datado.
- **Petição de arguição de impedimento/suspeição** do encarregado.
- **Manifestação pelo não indiciamento** / razões escritas antes da solução.
- **Habeas corpus** ao **juízo militar competente** (JMU/JME) contra constrangimento ilegal (falta de justa causa, excesso de prazo, prova ilícita) — integrar `cautelares-relaxamento`.
- **Pedido de relaxamento de prisão** por excesso de prazo (art. 20 CPPM).
- Preparação antecipada da **resposta à acusação** (fase judicial) com base no que foi semeado no IPM.

## Súmulas e dispositivos sob o Citation Gate

- **SV 14/STF** — acesso do defensor aos elementos de prova **já documentados** em procedimento investigatório (aplica-se ao IPM). *(Súmula vinculante notória.)*
- **CF, art. 5º, LV** — contraditório e ampla defesa, inclusive em processo administrativo. **LXIII** — direito ao silêncio. *(Texto constitucional.)*
- **Art. 9º do CPM (Dec.-Lei 1.001/69)** — define crime militar; alterado pela **Lei 13.491/2017**. *(Confirmar redação vigente.)*
- **Arts. 9º-28 do CPPM (Dec.-Lei 1.002/69)** — disciplina do IPM. *(Confirmar redação vigente.)*
- Para **qualquer precedente específico** (número de HC/REsp/RE do STF/STJ/STM, informativo, tema repetitivo — p. ex. sobre competência pós-Lei 13.491/17, sobre valor do IPM inquisitorial, sobre excesso de prazo) → **[NÃO VERIFICADO]**: **não cite de memória**; confira número, órgão e vigência via `jurisprudencia-stj-stf`. Prefira **ensinar a tese e o dispositivo** a arriscar um número de acórdão.

## Erros comuns / checklist

- [ ] Confirmei que o fato é **crime militar** (art. 9º CPM) e a **competência** (JMU × JME × Justiça comum)?
- [ ] Apliquei o **CPPM** — e **não** o CPP/Lei 12.830 (não há delegado no IPM)?
- [ ] Requeri **vista/cópia** dos autos (SV 14) e juntei **procuração**?
- [ ] Protocolei **por escrito** os **requerimentos de diligência** (art. 13) — deixando rastro para a fase judicial?
- [ ] Verifiquei **impedimento/suspeição** do encarregado?
- [ ] Controlei os **prazos** (20 dias preso / 40 solto — art. 20) e avaliei **excesso de prazo**?
- [ ] Fiscalizei o **direito ao silêncio** e a regularidade das **oitivas/interrogatório**?
- [ ] Avaliei a **cadeia de custódia** dos vestígios (skill `cadeia-de-custodia`)?
- [ ] Ataquei **indiciamento** sem lastro e pleiteei o **não indiciamento** quando cabível?
- [ ] Preparei a **resposta à acusação** já com o material do IPM?
- [ ] Passei **toda** súmula/precedente/tese pelo gate `jurisprudencia-stj-stf` antes de citar?

**Anti-padrões (evitar):**
- Tratar o IPM como IP comum (citar delegado, Lei 12.830, arts. 4º-23 do CPP) — **erro de diploma**.
- Confundir prazos do CPP com os do **art. 20 do CPPM**.
- Deixar requerimentos de diligência **só na oralidade** — sem protocolo não há prova do cerceamento.
- Presumir que "vício de inquérito não importa" e nada documentar — perde-se munição para HC, relaxamento e resposta à acusação.
- Citar competência do art. 9º do CPM **sem conferir** a alteração da Lei 13.491/2017.
- Arriscar **número de HC/REsp** de memória (risco de jurisprudência inventada — há sanções reais).

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Todo requerimento, HC ou manifestação é **hipótese a confirmar**; a revisão final pelo(a) advogado(a) responsável é obrigatória antes de protocolar (CED, art. 2º).
- **Citação verificada:** nenhuma súmula, precedente ou tese citado de memória — tudo pela skill `jurisprudencia-stj-stf` (há sanções por jurisprudência inventada por IA).
- **Ética por polo:** esta skill é do **polo de defesa** (advocacia — OAB + Provimento 205/2021; ou Defensoria — LC 80/94). O chefe-roteador deve **conferir o polo** da instituição no `company.md` antes de aplicar. Havendo atuação no polo acusatório (MPM/MP), observar o CNMP.
- **Sigilo e LGPD:** dados do assistido nunca em repositório público; observar o sigilo do IPM.

## Lembretes finais

- **CPPM, não CPP** — o IPM tem encarregado (oficial), não delegado.
- **Competência primeiro** — é crime militar (art. 9º CPM, red. Lei 13.491/17)? Qual Justiça Militar?
- **Documentar por escrito** tudo — requerimentos, silêncio, cerceamento — é o que gera valor na fase judicial.
- **Prazos do art. 20** (20/40) → excesso com preso funda relaxamento/HC.
- **SV 14** garante o acesso aos elementos já documentados.
- **Gate de citação** antes de qualquer número de acórdão; **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça (HC, requerimento, manifestação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
