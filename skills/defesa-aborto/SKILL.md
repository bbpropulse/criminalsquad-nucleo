---
name: defesa-aborto
description: >-
  Use ao construir a defesa nos crimes de aborto (CP, arts. 124 a 128): autoaborto e aborto
  consentido (124), aborto provocado por terceiro sem (125) e com (126) consentimento, aborto
  qualificado pelo resultado — lesão grave ou morte da gestante (127) — e as excludentes de
  ilicitude do art. 128 (aborto necessário/terapêutico e sentimental/humanitário no estupro).
  Gatilhos: aborto, art. 124, autoaborto, aborto consentido, art… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, crimes-contra-a-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-aborto"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-aborto", "defesa aborto"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa nos Crimes de Aborto (CP, arts. 124 a 128)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a construção das **teses defensivas nos crimes de aborto** — nicho de forte carga moral e política, em que a defesa técnica vence menos pela retórica do valor da vida e mais pelo **rigor sobre a materialidade** (houve gravidez? houve interrupção provocada? há nexo?) e pelo **domínio das excludentes legais do art. 128 e da ADPF 54**. O entregável são **blocos de tese estruturados** para acoplar na **resposta à acusação** (CPP, art. 396-A), guiar a **instrução** e fechar nos **memoriais** — não uma peça única, mas a espinha argumentativa que atravessa as fases.

> **Lição central:** neste nicho a defesa quase nunca começa pela discussão moral — começa pela **prova**. Três movimentos: (1) exigir a **materialidade dupla** — prova de que houve **gravidez** e prova de que houve **interrupção dolosamente provocada** (aborto espontâneo/natural é fato atípico; sem laudo idôneo, a acusação desaba pelo art. 158 do CPP); (2) dominar as **excludentes de ilicitude do art. 128** (necessário e no estupro) e a **atipicidade da ADPF 54** (anencéfalo), que não são "benesses" mas hipóteses legais/constitucionais de licitude ou de fato atípico; (3) disputar **dolo, autoria e consentimento** — no 124/126 o consentimento é elementar que altera a capitulação, e a ausência de dolo (culpa não é punida no aborto) leva à atipicidade.

> **Cautela de vigência (obrigatória antes de citar):** os arts. 124 a 128 do CP têm a **redação original de 1940** e não sofreram alteração legislativa recente — mas o **cenário normativo do aborto é dinâmico e sensível**. A descriminalização do **anencéfalo** decorre da **ADPF 54 (STF, Pleno, 2012)**, não de lei. Há discussão constitucional em curso sobre a interrupção nas **primeiras semanas de gestação** (ADPF 442 — pendente/[NÃO VERIFICADO]) e sobre resoluções de conselhos profissionais (CFM) que **não são lei penal**. **Confirme a redação vigente dos dispositivos via agente `lei-e-sumula`** e o **estado atual de toda tese constitucional, tema ou julgado via agente `jurisprudencia-stj-stf`**, marcando **[NÃO VERIFICADO]** o que não confirmar. Não invente número de HC, RE, ADPF, informativo ou tema.

## O mapa dos tipos — arts. 124 a 128 do CP

| Dispositivo | Crime / regra | Nota defensiva |
|---|---|---|
| **Art. 124** | **Autoaborto** ("provocar aborto em si mesma") **e aborto consentido** ("consentir que outrem lho provoque") — pena 1 a 3 anos, **detenção** | Sujeito ativo é a **própria gestante**; culpa é atípica; a gestante que consente responde pelo 124 (não pelo 126) |
| **Art. 125** | Aborto provocado **por terceiro SEM consentimento** da gestante — pena 3 a 10 anos, reclusão | Forma mais grave; exige prova do **dissenso** — se houve consentimento válido, a capitulação correta é o 126 |
| **Art. 126** | Aborto provocado por terceiro **COM consentimento** da gestante — pena 1 a 4 anos, reclusão | **Parágrafo único**: equipara ao 125 (sem consentimento) se a gestante é **menor de 14, alienada/débil mental, ou o consentimento foi obtido por fraude/grave ameaça/violência** — atenção à validade do consentimento |
| **Art. 127** | **Qualificadoras pelo resultado** — as penas dos 125 e 126 aumentam **1/3 se a gestante sofre lesão corporal grave**, e **duplicam se lhe sobrevém a morte** | Resultado **preterdoloso** (culpa quanto ao resultado agravador); exige **nexo causal** rigoroso entre a manobra abortiva e a lesão/morte |
| **Art. 128, I** | **Aborto necessário / terapêutico** — não se pune quando **não há outro meio de salvar a vida da gestante** | **Excludente de ilicitude**; dispensa autorização judicial; questão fática-médica (risco à vida) |
| **Art. 128, II** | **Aborto sentimental / humanitário** — não se pune se a gravidez **resulta de estupro** e há **consentimento** da gestante (ou de seu representante, se incapaz) | **Excludente de ilicitude**; **não exige** sentença penal condenatória prévia do estupro nem autorização judicial |
| **ADPF 54 (STF, 2012)** | Interrupção da gravidez de feto **anencéfalo** é **fato atípico** (não incide o tipo de aborto) — [confirmar via `jurisprudencia-stj-stf`] | Não é excludente: é **atipicidade** por decisão do STF em controle concentrado; terminologia técnica: "antecipação terapêutica do parto" |

> **Autoaborto é competência do juízo singular, não do júri.** O aborto (arts. 124 a 127) é **crime contra a vida** topograficamente, mas o objeto jurídico é a vida **intrauterina** — a jurisprudência dominante mantém o julgamento no **juízo comum singular**, e **não** no Tribunal do Júri (a competência do júri é para os crimes dolosos contra a vida **do art. 121 ao 128**? — **confirme a extensão exata da competência do júri sobre o aborto via `jurisprudencia-stj-stf` antes de afirmar**, pois há divergência e a redação do art. 5º, XXXVIII, CF, e do art. 74, §1º, CPP, deve ser lida com cuidado). Na dúvida, trate a competência como **ponto a confirmar**, não como certeza.

## As frentes defensivas do nicho

| Frente | Pergunta-chave | Onde se decide |
|---|---|---|
| 1. Materialidade da gravidez e do aborto | Provou-se a gravidez **e** a interrupção provocada? | Instrução + memoriais |
| 2. Aborto espontâneo × provocado | A prova exclui o aborto natural/espontâneo? | Instrução + memoriais |
| 3. Excludentes do art. 128 (necessário e estupro) | Incide causa legal de licitude? | Resposta à acusação + memoriais |
| 4. ADPF 54 — anencefalia | O feto era anencéfalo (fato atípico)? | Resposta à acusação (absolvição sumária) |
| 5. Dolo e ausência de forma culposa | Houve dolo de abortar? Culpa é atípica? | Instrução + memoriais |
| 6. Consentimento e capitulação (124/125/126) | O consentimento é válido e altera o tipo? | Toda a defesa |
| 7. Nexo causal no resultado agravador (127) | A morte/lesão veio da manobra abortiva? | Instrução + memoriais |
| 8. Dosimetria e substitutivos | Pena-base, causas, PRD, ANPP, prescrição | Memoriais + recurso |

## Frente 1 — a materialidade é dupla: gravidez comprovada + interrupção provocada

O aborto **não deixa presumir-se**. A acusação precisa provar, com laudo idôneo (CPP, arts. 158 e 167), **dois fatos**:

- **A gravidez preexistente** — sem prova da gestação, não há objeto material do crime. Suspeita clínica, "atraso menstrual" ou relato isolado não bastam; exigem-se exame (beta-HCG, ultrassom, laudo) ou meios idôneos supletivos (CPP, art. 167, quando desaparecidos os vestígios — mas o supletivo tem de ser robusto).
- **A interrupção dolosamente provocada** — laudo que demonstre manobra abortiva (mecânica, medicamentosa) e a morte do produto da concepção por causa provocada. **Laudo que não distingue aborto provocado de aborto espontâneo é laudo que não prova a elementar.**

➡️ **Tese defensiva (forte):** ausência ou insuficiência do exame de corpo de delito sobre a **gravidez** e/ou sobre o **caráter provocado** da interrupção → materialidade não demonstrada → absolvição por insuficiência probatória (CPP, art. 386, II ou VII). Quando os vestígios desapareceram, cobrar o rigor do art. 167 (prova testemunhal supletiva **idônea**, não boato).

## Frente 2 — aborto espontâneo é fato atípico: a acusação tem de excluí-lo

O aborto **espontâneo/natural** (não provocado) é **penalmente irrelevante** — não há crime. Como abortos espontâneos são clinicamente frequentes, a defesa explora o **ônus da acusação** de demonstrar que a interrupção foi **provocada e dolosa**:

- Perícia que apenas constata a interrupção da gravidez, **sem estabelecer a causa provocada**, deixa aberta a hipótese do aborto espontâneo → dúvida razoável → absolvição.
- Requeira **assistente técnico** e formule **quesitos** sobre a causa da interrupção (compatibilidade com abortamento espontâneo, presença de fármacos abortivos, sinais de manobra).
- Contexto médico (histórico de abortos anteriores, comorbidades, idade gestacional) alimenta a tese da espontaneidade.

## Frente 3 — as excludentes de ilicitude do art. 128

O art. 128 traz **duas causas legais de exclusão da ilicitude** — o fato é típico, mas **não é punido** porque é lícito. São **direito**, não favor.

### Art. 128, I — aborto necessário / terapêutico

- Não se pune o aborto praticado por **médico** quando **não há outro meio de salvar a vida da gestante**.
- É questão **fático-médica**: risco concreto à **vida** (a lei fala em salvar a vida — a extensão a risco grave à saúde é discutida; **confira o estado da tese via `jurisprudencia-stj-stf`**).
- **Dispensa autorização judicial** e sentença — a licitude decorre da lei. A prova é o **laudo/prontuário** que documenta a necessidade.
- Praticado por quem **não é médico** em situação de risco iminente à vida, discutir **estado de necessidade** (CP, art. 24) como excludente geral.

### Art. 128, II — aborto sentimental / humanitário (gravidez de estupro)

- Não se pune o aborto praticado por **médico** se a gravidez **resulta de estupro** e há **consentimento** da gestante (ou de seu representante legal, se incapaz).
- **Pontos que a defesa firma (e a acusação costuma contestar):**
  - **Não se exige sentença condenatória prévia** do estupro nem inquérito concluído — basta a **verossimilhança** do relato/boletim de ocorrência; exigir prévia condenação é **acréscimo ilegal ao tipo permissivo**.
  - **Não se exige autorização judicial** — a licitude é legal; a jurisprudência e a doutrina majoritária dispensam alvará.
  - O **consentimento** da gestante (ou do representante) é elementar da causa de justificação — documentar.
- Se o profissional agiu na **crença sincera e amparada** de que estavam presentes os pressupostos do 128 (ex.: acreditava no estupro relatado), discutir **descriminante putativa** (CP, art. 20, §1º) — erro sobre situação de fato que, se existisse, tornaria a ação lícita.

## Frente 4 — ADPF 54: anencefalia é fato atípico

O STF, na **ADPF 54 (Pleno, 2012)** [confirmar via `jurisprudencia-stj-stf`], declarou que a interrupção da gravidez de **feto anencéfalo** **não configura o crime de aborto** — é **fato atípico** (a inviabilidade vital absoluta do feto afasta a tutela penal do tipo). Uso defensivo:

- Terminologia técnica correta: **"antecipação terapêutica do parto"**, não "aborto".
- Prova: **laudos** que atestem a anencefalia (em regra dois exames de imagem por médicos distintos, conforme a técnica consolidada — **confirme o protocolo probatório exigido via `jurisprudencia-stj-stf`**).
- Consequência processual: cabível **absolvição sumária** (CPP, art. 397, III — o fato não constitui crime) ou trancamento por atipicidade, já na resposta à acusação.
- **Não confundir** com outras malformações fetais graves não anencefálicas — a ADPF 54 é específica; para outras hipóteses, a via é a autorização judicial casuística e a discussão constitucional aberta (**estado atual via `jurisprudencia-stj-stf`; marcar [NÃO VERIFICADO]**).

## Frente 5 — dolo: a culpa não é punível no aborto

O aborto é **crime exclusivamente doloso** (não há tipo culposo). Consequências:

- Sem **dolo de provocar o aborto**, o fato é **atípico**. Manobra terapêutica legítima que, sem intenção abortiva, culmina em perda gestacional não é crime.
- **Ingestão de substância por outra finalidade** (tratamento médico) sem finalidade abortiva → ausência de dolo.
- **Erro de tipo** (CP, art. 20): quem ignora a gravidez ou a natureza abortiva do meio não age com dolo do 124/126.
- A **lesão/morte culposa da gestante** decorrente de manobra (127) é **preterdolosa** — se não houve dolo sequer quanto ao aborto, cai a base do agravamento.

## Frente 6 — consentimento e a capitulação correta (124 × 125 × 126)

O **consentimento** da gestante é o divisor de águas entre os tipos, com penas muito diferentes:

| Situação | Tipo correto | Pena |
|---|---|---|
| Gestante provoca em si / consente que terceiro provoque | **Art. 124** (responde a gestante) | 1 a 3 anos, detenção |
| Terceiro provoca **sem** consentimento válido | **Art. 125** | 3 a 10 anos, reclusão |
| Terceiro provoca **com** consentimento válido | **Art. 126** | 1 a 4 anos, reclusão |
| Terceiro, com "consentimento" **inválido** (menor de 14, alienada, fraude/ameaça/violência) | **Art. 126, parágrafo único → pena do 125** | 3 a 10 anos |

**Uso defensivo:** quando a acusação capitula no **125** (sem consentimento, mais grave), a defesa demonstra o **consentimento válido** da gestante para **desclassificar** ao **126** — diferença de pena expressiva e reflexo direto em regime, prescrição e substitutivos. Inversamente, alegações de fraude/violência para atrair o parágrafo único exigem **prova concreta** do vício, não presunção.

## Frente 7 — nexo causal no resultado agravador (art. 127)

As qualificadoras do art. 127 (lesão grave → +1/3; morte → dobra a pena) são **preterdolosas**: exigem que o resultado agravador **decorra causalmente** da manobra abortiva e seja imputável ao menos a título de **culpa**.

- **Quebra do nexo:** intervenções médicas posteriores, doença preexistente, causa superveniente relativamente independente (CP, art. 13, §1º) podem **afastar** a imputação do resultado.
- **Ausência de culpa quanto ao resultado:** se a morte/lesão era **imprevisível**, não há preterdolo — responde-se só pelo aborto-base.
- **Vedação da responsabilidade objetiva:** o resultado não se agrava por mera causação física sem culpa (CP, art. 19).

## Frente 8 — dosimetria, substitutivos e prescrição

- **Pena-base (CP, art. 59):** decotar vetoriais genéricas ou que coincidem com elementares (o "aborto em si" não agrava consequências do próprio aborto — non bis in idem).
- **Penas baixas → substitutivos amplos:** no **124** (1 a 3 anos, detenção) e no **126** (1 a 4 anos), há espaço para **pena restritiva de direitos** (CP, art. 44), **sursis** (art. 77) e, conforme a pena mínima e requisitos, para **ANPP** (CPP, art. 28-A — pena mínima **inferior a 4 anos** e crime **sem violência ou grave ameaça**; o aborto consentido do 124/126, em regra, não envolve violência contra a gestante — **confirme cabimento e vedações via `lei-e-sumula`**).
- **Prescrição:** as penas máximas do 124 (3 anos) e do 126 (4 anos) atraem prazos prescricionais curtos (CP, art. 109); confira **marco inicial, interrupções e prescrição da pretensão punitiva** — muitas vezes a **prescrição** é a tese mais forte e mais simples. Use a skill/calculadora **`calculadora-prescricao`** para o cálculo e a skill **`prescricao`** para a metodologia.
- **Dosimetria** completa via agente `dosimetria-pena` (e calculadora `calculadora-dosimetria`) — simule cenários (com e sem desclassificação 125→126) antes de ordenar os pedidos.

## Estrutura forense — o bloco de teses que atravessa as fases

O entregável é um **conjunto de capítulos de tese** numerados, cada um autossuficiente, prontos para acoplar na peça da fase. Formato de cada capítulo:

```
TESE [N] — [NOME AFIRMATIVO DA TESE]

I — PREMISSA FÁTICA
   [O que os autos mostram, com folha/ID: laudos (gravidez, causa da
   interrupção), prontuários, relato de estupro/BO, consentimento, contexto
   médico. Sem adjetivos — só fatos referenciados.]

II — PREMISSA JURÍDICA
   [Dispositivos (arts. 124-128 CP) e regra constitucional (ADPF 54) só depois
   de conferidos via lei-e-sumula / jurisprudencia-stj-stf; o que não confirmar
   entra como [NÃO VERIFICADO] ou sai.]

III — SUBSUNÇÃO
   [Por que ESTA prova, medida por AQUELA régua, produz o resultado defendido —
   atipicidade / licitude / desclassificação / absolvição.]

IV — PEDIDO CORRESPONDENTE
   [Absolvição (art. 386 e inciso exato) / absolvição sumária (art. 397, III) /
   desclassificação 125→126 / reconhecimento da excludente / prescrição — um
   pedido por tese, em ordem sucessiva de eventualidade.]
```

**Distribuição por fase:**

| Fase | O que entra | Instrumento |
|---|---|---|
| **Resposta à acusação** (CPP, art. 396-A) — **10 dias** da citação (art. 396; contagem do art. 798, §1º; **em dobro para a Defensoria** — LC 80/94) | Preliminares (inépcia, ausência de justa causa por falta de materialidade), **absolvição sumária** (art. 397 — atipicidade da anencefalia/ausência de dolo; excludente do art. 128), **rol de testemunhas + assistente técnico + quesitos** sobre a perícia | Peça de resposta |
| **Instrução** | Roteiro de inquirição e quesitos periciais (gravidez? causa provocada? nexo do resultado?) | Skill `audiencia-inquiricao-testemunhas` |
| **Memoriais** | Desenvolvimento pleno: preliminares → materialidade → excludentes/atipicidade → desclassificação → subsidiárias de dosimetria/prescrição | Skill `memoriais` |

## Teses típicas do nicho e contra-teses da acusação

| Tese defensiva | Contra-tese acusatória a antecipar |
|---|---|
| **Materialidade não provada** — sem laudo idôneo de gravidez e/ou da causa provocada (CPP, arts. 158/167) | Prova supletiva do art. 167; testemunhas e circunstâncias supririam o exame |
| **Aborto espontâneo** — perícia não exclui a interrupção natural | Perícia + contexto indicariam manobra; ônus estaria satisfeito |
| **Atipicidade por anencefalia** (ADPF 54) — fato atípico, absolvição sumária | Discussão sobre a extensão a outras malformações; exigência de duplo laudo |
| **Aborto necessário** (128, I) — risco à vida, sem outro meio | Existência de meio alternativo; ausência de risco atual à vida |
| **Aborto no estupro** (128, II) — gravidez de estupro + consentimento | Exigência (indevida) de sentença/autorização; questionamento da verossimilhança do estupro |
| **Ausência de dolo / erro de tipo** — culpa é atípica | Dolo eventual; conhecimento da gravidez e do efeito abortivo |
| **Desclassificação 125 → 126** — havia consentimento válido | Consentimento viciado (fraude/violência/menoridade) → parágrafo único |
| **Quebra do nexo no art. 127** — resultado por causa independente | Preterdolo caracterizado; previsibilidade do resultado |
| **Prescrição** (CP, art. 109) — penas máximas baixas | Marco interruptivo recente; prescrição não consumada |

> **Descriminante putativa (128, II):** a tese de que o médico/agente acreditava sinceramente na existência do estupro (erro sobre situação de fato — CP, art. 20, §1º) é sensível e depende de lastro concreto; **pesquise o tratamento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** o que não confirmar.

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|---|---|---|
| Aceitar a **materialidade** sem exigir laudo da gravidez **e** da causa provocada | Condenação sobre elementar não provada | Cobrar os arts. 158/167 do CPP; assistente técnico e quesitos |
| Tratar aborto **espontâneo** como se fosse presumidamente provocado | Inverter o ônus contra o réu | Firmar que a causa provocada é elementar a cargo da acusação |
| Exigir de si mesmo (ou aceitar do MP) **sentença/autorização judicial** para o 128, II | Renunciar a tese de licitude legal | O 128 dispensa condenação prévia e alvará — é excludente legal |
| Chamar de "aborto" a interrupção de **anencéfalo** | Perde a atipicidade da ADPF 54 | Terminologia: "antecipação terapêutica do parto"; fato atípico |
| Capitular passivamente no **125** quando houve consentimento | Deixa na mesa a desclassificação ao 126 (pena muito menor) | Provar o consentimento válido; atacar alegação de vício sem prova |
| Esquecer que **culpa é atípica** no aborto | Não explorar ausência de dolo / erro de tipo | Sem dolo de abortar, fato atípico |
| Aceitar o agravamento do **127** por mera causação física | Responsabilidade objetiva vedada (CP, art. 19) | Exigir nexo + culpa quanto ao resultado; causa superveniente (art. 13, §1º) |
| Não checar a **prescrição** (penas baixas do 124/126) | Perde a tese mais econômica e muitas vezes decisiva | Rodar `calculadora-prescricao`; conferir marcos |
| Afirmar competência do **júri** (ou do juízo singular) sem conferir | Erro de competência e nulidade | Tratar como ponto a confirmar via `jurisprudencia-stj-stf` |
| Citar **ADPF 54 / ADPF 442 / tema / informativo** de memória | Precedente desatualizado, mal aplicado ou inexistente — sanção real | Tudo via `jurisprudencia-stj-stf` + gate `verificacao-citacoes`; o que não confirmar sai **[NÃO VERIFICADO]** |

## Checklist antes de protocolar

- [ ] **Materialidade dupla** cobrada — laudo idôneo da **gravidez** e da **causa provocada** (CPP, arts. 158/167)?
- [ ] Hipótese de **aborto espontâneo** explorada (perícia exclui a causa natural)?
- [ ] **Excludentes do art. 128** avaliadas (necessário — risco à vida; estupro — gravidez + consentimento, sem exigir sentença/autorização)?
- [ ] **ADPF 54 / anencefalia** — atipicidade e **absolvição sumária** (CPP, art. 397, III) requeridas, com laudos, se for o caso?
- [ ] **Dolo** enfrentado — culpa é atípica; erro de tipo (art. 20) e descriminante putativa (art. 20, §1º) considerados?
- [ ] **Capitulação** correta / **desclassificação 125 → 126** pela validade do consentimento?
- [ ] **Nexo causal** e culpa no resultado agravador do **127** testados (arts. 13, §1º, e 19 CP)?
- [ ] **Dosimetria, substitutivos (art. 44/77), ANPP e prescrição** calculados (`calculadora-dosimetria`, `calculadora-prescricao`)?
- [ ] **Competência** (juízo singular × júri) confirmada via `jurisprudencia-stj-stf`, não presumida?
- [ ] Rol de testemunhas, **assistente técnico** e **quesitos** periciais completos na **resposta à acusação** (janela que precluirá)?
- [ ] Pedidos em **ordem sucessiva** (atipicidade/licitude → absolutórios → desclassificatórios → prescrição/dosimetria)?
- [ ] Toda citação de dispositivo, súmula, ADPF, tema ou julgado conferida via `lei-e-sumula` / `jurisprudencia-stj-stf` e aprovada no gate `verificacao-citacoes` (o resto **[NÃO VERIFICADO]** ou removido)?

## Lembretes finais

- **Prova antes de moral:** a defesa técnica ganha na **materialidade dupla** (gravidez + causa provocada) e no **aborto espontâneo**, não na tribuna.
- **Art. 128 é direito, não favor:** necessário (risco à vida) e estupro (gravidez + consentimento) **dispensam** sentença prévia e autorização judicial.
- **Anencefalia = fato atípico (ADPF 54):** "antecipação terapêutica do parto"; cabe absolvição sumária — mas **confirme o precedente**.
- **Culpa é atípica:** sem dolo de abortar, o fato não é crime; erro de tipo e descriminante putativa entram aqui.
- **Consentimento manda na capitulação:** 124 (gestante) × 125 (sem consentimento) × 126 (com consentimento) — a desclassificação 125→126 é ganho real.
- **127 é preterdoloso:** exige nexo e culpa quanto ao resultado; nada de responsabilidade objetiva.
- **Prescrição costuma ser a tese mais econômica** — as penas do 124/126 são baixas; calcule cedo.
- **Conformidade transversal:** toda entrega é **rascunho para revisão humana**; dados de saúde da gestante são sensíveis (LGPD/sigilo médico); nenhum precedente citado de memória.

## Apoie-se em

- **Agentes `lei-e-sumula` e `jurisprudencia-stj-stf`** — redação vigente dos arts. 124-128 e estado atual da ADPF 54, ADPF 442 e temas correlatos (obrigatório antes de citar).
- **Agente/best-practice `verificacao-citacoes`** — gate final: o que não confirmar sai marcado **[NÃO VERIFICADO]**.
- **Agente `dosimetria-pena`** e **`calculadora-dosimetria`** — pena-base, causas, substitutivos e cenários de desclassificação.
- **`calculadora-prescricao`** e skill **`prescricao`** — cálculo e metodologia da prescrição (tese frequentemente decisiva no nicho).
- **Skill `memoriais`** — desenvolvimento pleno do bloco de teses na fase final da instrução.
- **Skill `audiencia-inquiricao-testemunhas`** — execução ao vivo da prova oral e dos quesitos periciais (esta skill entrega as teses; aquela, o método do ato).
- **Skill `defesa-crimes-sexuais`** — quando a excludente do 128, II depender da apuração do estupro (interface, sem sobreposição: aquela cuida da violência sexual; esta, do aborto).
- **Skill `defesa-lesao-corporal`** — quando o aborto figurar apenas como **resultado agravador** (CP, art. 129, §2º, V — aborto como qualificadora da lesão contra a gestante), matéria daquela skill, não desta.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
