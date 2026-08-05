---
name: jm-defesa-conselho-justificacao-disciplina
description: >-
  Use na defesa administrativo-disciplinar de militar submetido a Conselho de Justificação (oficiais
  — Lei 5.836/1972) ou Conselho de Disciplina (praças estáveis — Dec. 71.500/1972), procedimentos
  que podem culminar na PERDA do posto e patente / graduação, julgada pelo Tribunal Militar (STM ou
  TJM). NÃO é peça penal. Gatilhos: Conselho de Justificação, Conselho de Disciplina, Lei
  5.836/1972, perda do posto e patente… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, administrativo-disciplinar, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-conselho-justificacao-disciplina"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-conselho-justificacao-disciplina", "defesa conselho", "justificacao disciplina"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa no Conselho de Justificação e no Conselho de Disciplina (Lei 5.836/1972; CF art. 42, §1º, e art. 142, §3º)

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

Esta skill orienta a **defesa de militar** submetido a **Conselho de Justificação** (destinado a **oficiais** das Forças Armadas e das Forças Auxiliares — Lei 5.836/1972) ou a **Conselho de Disciplina** (destinado a **praças estáveis** — regulamentos próprios de cada Força, p. ex. Decreto 71.500/1972 no Exército). São **procedimentos administrativo-disciplinares especiais** que apuram a incapacidade do militar para permanecer na ativa e podem culminar na sanção mais grave da carreira: a **perda do posto e da patente** (oficial) ou da **graduação** (praça), com eventual **declaração de indignidade ou incompatibilidade** para o oficialato — decisão reservada ao **Tribunal Militar** (STM, na esfera federal; TJM/TJ, nas Polícias Militares e Corpos de Bombeiros Militares).

> **Lição central:** este **não é um processo penal** — é procedimento **administrativo-disciplinar**. O erro mais comum é tratá-lo como ação penal (ou vice-versa) e ignorar a **independência das instâncias**. A defesa vence, na maioria das vezes, no **processo** (nulidades por violação ao contraditório e à ampla defesa, cerceamento, prescrição disciplinar, vício de portaria/competência) **e** no **mérito da proporcionalidade** (a perda do posto/graduação é a *ultima ratio* disciplinar; sanções menos gravosas devem ser preferidas). Absolvição penal por **negativa de autoria** ou **inexistência do fato** repercute na esfera disciplinar; absolvição por **insuficiência de provas** ou extinção da punibilidade, em regra, **não** vincula.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Lei 5.836/1972** (Conselho de Justificação) e do **regulamento disciplinar da Força específica** (Exército, Marinha, Aeronáutica, ou a PM/CBM do Estado), pois cada Força e cada Estado tem norma própria para o **Conselho de Disciplina** e para os **prazos**. Confira também a **Constituição de cada Estado** e a **lei orgânica/estatuto** dos militares estaduais (o regime da PM/CBM não é idêntico ao das Forças Armadas). Toda súmula, tese ou precedente (STM, STF, STJ, TJM) passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ser citado. Na dúvida, **omitir vence inventar**.

---

## Base legal (conferir vigência)

- **CF, art. 5º, LV** — contraditório e ampla defesa em processo administrativo (fundamento-mãe da defesa).
- **CF, art. 42, §1º** e **art. 142, §3º, VI e VII** — o oficial só perde o posto e a patente por decisão de **tribunal militar** de caráter permanente, em tempo de paz, se **julgado indigno do oficialato ou com ele incompatível**; a praça perde a graduação na forma da lei.
- **CF, art. 125, §4º** — competência da **Justiça Militar estadual** (TJM/TJ) para decidir sobre a **perda do posto e da patente dos oficiais** e da **graduação das praças** das PM/CBM.
- **Lei 5.836/1972** — dispõe sobre o **Conselho de Justificação** (oficiais): hipóteses de submissão, composição, procedimento, prazos, defesa e julgamento.
- **Regulamentos disciplinares / decretos de cada Força** para o **Conselho de Disciplina** (praças estáveis) — p. ex. **Decreto 71.500/1972** (Exército); normas próprias da Marinha, Aeronáutica e de cada PM/CBM estadual.
- **Estatuto dos Militares — Lei 6.880/1980** (federais) e **estatutos estaduais** das PM/CBM — deveres, valores, transgressões e a moldura da perda do posto/graduação.
- **Lei 9.784/1999** (processo administrativo federal) — aplicação **subsidiária** aos procedimentos federais, no que couber (motivação, ampla defesa, razoabilidade, proporcionalidade). Nos Estados, aplica-se a lei de processo administrativo estadual correspondente.
- **CPPM (Dec.-Lei 1.002/1969)** e **CPM (Dec.-Lei 1.001/1969)** — pertinentes à **interface com a esfera penal militar**, não ao rito disciplinar em si.

> **Distinção crucial (não confundir):** esta skill trata do procedimento **administrativo-militar** de perda do posto/graduação. Ela **não** se confunde com o **PAD da execução penal** (LEP) de presos comuns (skill `execucao-defesa-falta-grave-pad`), nem com a **ação penal militar** perante a Justiça Militar. Confirme sempre em qual esfera está atuando antes de escolher a peça.

---

## Panorama dos dois procedimentos

| Aspecto | Conselho de Justificação | Conselho de Disciplina |
|---|---|---|
| Destinatário | **Oficial** (e, em alguns casos, oficial da reserva/reformado) | **Praça estável** (com estabilidade assegurada) |
| Norma-base | **Lei 5.836/1972** | Regulamento/decreto da Força (ex.: **Dec. 71.500/1972** — Exército) e normas estaduais |
| Objeto | Apurar se o oficial é **incapaz de permanecer** na ativa / **indigno** ou **incompatível** com o oficialato | Apurar se a praça deve **permanecer** na ativa ou perder a graduação |
| Sanção máxima | **Perda do posto e da patente** (decidida pelo Tribunal Militar) | **Perda da graduação** (decidida pelo Tribunal Militar) |
| Órgão julgador final | **STM** (federais) / **TJM ou TJ** (estaduais) | **STM** / **TJM ou TJ** |
| Natureza | Administrativo-disciplinar | Administrativo-disciplinar |

> **Praça NÃO estável:** a praça **sem estabilidade** costuma ser licenciada/excluída por ato administrativo **sem** Conselho de Disciplina — mas ainda assim com **direito ao contraditório e à ampla defesa** (CF, art. 5º, LV). Se o cliente é praça não estável, confirme o rito próprio na norma da Força; a ausência de defesa prévia é vício sindicável (inclusive por mandado de segurança).

---

## Hipóteses típicas de submissão (Lei 5.836/1972 — conferir texto vigente)

O oficial é, em regra, submetido a Conselho de Justificação quando (roteiro para verificar o enquadramento e atacá-lo):

1. For **acusado oficialmente** ou por **qualquer meio lícito** de ter **procedido incorretamente** no desempenho do cargo.
2. Tiver **conduta irregular** ou **praticado ato** que afetem a **honra pessoal**, o **pundonor militar** ou o **decoro da classe**.
3. Houver **contra si sentença penal transitada em julgado** por crime cuja pena restritiva de liberdade seja igual ou superior a determinado patamar (verificar o limite na redação vigente).
4. Estiver enquadrado em **incompatibilidade** ou **indignidade** para o oficialato definida na legislação.
5. Demonstrar **incapacidade** para permanecer na ativa por outras hipóteses previstas.

➡️ **Primeira frente de defesa:** verificar se o **fato imputado se enquadra** de fato numa hipótese legal de submissão. Enquadramento **atípico**, genérico, ou baseado em mera suspeita/acusação não comprovada é vício de mérito e de motivação — atacar a **portaria instauradora** e a **capitulação**.

---

## Estrutura e rito do procedimento (o que fiscalizar)

O procedimento, em linhas gerais (confirmar cada etapa na norma da Força), observa:

1. **Portaria de instauração / nomeação do Conselho** — designa os membros (oficiais de posto superior ao do justificante, em regra) e delimita o objeto. **Fiscalizar:** competência da autoridade nomeante; composição regular; impedimento/suspeição de membros; delimitação clara do objeto.
2. **Citação/notificação do militar** — com **cópia da portaria** e ciência dos fatos. **Fiscalizar:** notificação pessoal e válida; prazo para defesa; direito à defesa técnica.
3. **Instrução** — inquirição de testemunhas, juntada de documentos, produção de provas. **Fiscalizar:** direito de **arrolar testemunhas**, de **reperguntar**, de **requerer diligências** e de ter **acesso integral aos autos**.
4. **Interrogatório / oitiva do justificante** — momento de exercício da autodefesa.
5. **Razões finais / defesa escrita** — a peça central desta skill. **Prazo próprio** — atenção à **tempestividade** (ver `calculadora-tempestividade` quando o prazo for controvertido).
6. **Relatório e decisão do Conselho** — conclui pela **procedência** ou **improcedência**, com proposta de providência.
7. **Remessa ao Tribunal Militar** (STM/TJM/TJ) — quando a proposta é a perda do posto/graduação, a decisão final é **judicial**, em processo próprio, com **nova oportunidade de defesa técnica** perante o Tribunal.

> **Duas defesas, dois momentos:** há a **defesa no âmbito do Conselho** (administrativa) e a **defesa perante o Tribunal Militar** (judicial, quando a proposta é de perda do posto/graduação). **Não desperdice** nenhuma delas — teses preclusas ou não deduzidas no momento próprio enfraquecem a etapa seguinte.

---

## Estrutura da peça de defesa (razões finais / defesa administrativa)

Roteiro de redação da **defesa escrita** apresentada ao Conselho (e adaptável às **alegações finais** perante o Tribunal Militar):

**I — DA TEMPESTIVIDADE E DA REPRESENTAÇÃO**
- Demonstrar o prazo e a juntada de procuração/defesa técnica. Se o prazo for exíguo ou contado de forma equivocada, sustentar aqui (e conferir com `calculadora-tempestividade`).

**II — DA SÍNTESE FÁTICA E PROCESSUAL**
- Narrar objetivamente a portaria, os fatos imputados e a marcha do procedimento — sem admitir o que não está provado.

**III — DAS PRELIMINARES (nulidades processuais)**
- **Incompetência / vício da autoridade** instauradora ou de composição do Conselho.
- **Cerceamento de defesa:** indeferimento imotivado de testemunhas/diligências; negativa de acesso aos autos; prazo insuficiente; ausência de defesa técnica.
- **Prescrição da pretensão disciplinar** (ver seção própria).
- **Nulidade da portaria:** objeto genérico, capitulação atípica, ausência de motivação.
- **Violação ao contraditório** (CF, art. 5º, LV): defesa apenas formal, sem influência real na decisão.

**IV — DO MÉRITO**
- **Atipicidade disciplinar:** o fato não se enquadra em hipótese de submissão (Lei 5.836/1972) nem em transgressão que justifique a perda do posto/graduação.
- **Insuficiência probatória:** o ônus é da Administração; dúvida milita em favor do militar.
- **Repercussão da esfera penal:** se houve **absolvição penal** por **negativa de autoria** ou **inexistência do fato**, invocar a repercussão vinculante na esfera disciplinar (independência **relativa** das instâncias).
- **Boa-ficha funcional / primariedade disciplinar:** tempo de serviço, elogios, medalhas, ausência de antecedentes.

**V — DA PROPORCIONALIDADE (mérito subsidiário)**
- A **perda do posto/graduação é a sanção extrema** — reservada à indignidade/incompatibilidade. Sustentar que o fato, **ainda que provado**, comporta **medida menos gravosa**, sob pena de violação à **razoabilidade e proporcionalidade** (Lei 9.784/99, art. 2º, e princípio constitucional).

**VI — DOS PEDIDOS**
- Reconhecimento das preliminares (com extinção do procedimento) e/ou improcedência no mérito; subsidiariamente, afastamento da perda do posto/graduação por desproporcionalidade; produção das provas requeridas.

---

## Prescrição da pretensão disciplinar (frente forte de defesa)

- A pretensão disciplinar **prescreve** — o prazo e o termo inicial dependem da **norma de cada Força** (não há prazo único). Verificar o **estatuto/regulamento aplicável** e a data do conhecimento do fato pela autoridade competente.
- **Nunca presuma** o prazo de memória: confirme na legislação da Força/Estado e, se controvertido o cálculo, use `calculadora-prescricao` **apenas** se houver módulo aplicável à prescrição administrativo-disciplinar militar; caso contrário, marque **[calculadora a implementar com testes]** e faça o cálculo com base literal na norma vigente.
- **Interrupção/suspensão:** verificar as causas previstas na norma específica (instauração, decisão etc.) antes de afirmar termo final.
- **Interface com a prescrição penal:** quando o fato é também crime, parte da jurisprudência admite que o prazo prescricional disciplinar acompanhe o **penal** — **[NÃO VERIFICADO]**: confirmar a orientação atual e a norma aplicável via `jurisprudencia-stj-stf` antes de sustentar.

---

## Teses defensivas típicas × contra-teses da Administração

| Tese da defesa | Fundamento | Contra-tese (Administração) |
|---|---|---|
| **Cerceamento de defesa** | Indeferimento imotivado de provas; acesso negado aos autos; prazo exíguo (CF, art. 5º, LV) | Defesa foi oportunizada; provas eram impertinentes/protelatórias |
| **Prescrição disciplinar** | Decurso do prazo da norma da Força desde o conhecimento do fato | Prazo não fluiu / houve interrupção; acompanha a prescrição penal |
| **Atipicidade disciplinar** | Fato não se enquadra em hipótese de submissão nem em transgressão grave | Conduta afeta honra, pundonor e decoro da classe |
| **Repercussão da absolvição penal** | Absolvição por negativa de autoria/inexistência do fato vincula (independência relativa) | Absolvição foi por insuficiência de provas / extinção da punibilidade — não vincula |
| **Desproporcionalidade da sanção** | Perda do posto/graduação é *ultima ratio*; cabível sanção menor | Gravidade do fato torna o militar indigno/incompatível |
| **Vício da portaria/competência** | Objeto genérico; autoridade incompetente; Conselho mal composto | Portaria regular; competência e composição conforme regulamento |
| **Bis in idem disciplinar** | Dupla punição pelo mesmo fato | Fatos/enquadramentos distintos |

> **Independência das instâncias — a distinção que decide o caso:** a regra é a **independência** entre a esfera penal e a disciplinar. **Exceção vinculante:** a **absolvição penal** que reconhece a **inexistência do fato** ou a **negativa de autoria** repercute e vincula a Administração — não se pode punir disciplinarmente por fato declarado inexistente ou não autorado pelo militar. Já a absolvição por **falta/insuficiência de provas** (in dubio pro reo penal) ou por **extinção da punibilidade** **não** impede a sanção disciplinar. Fundamente essa distinção com o dispositivo pertinente e **confirme a tese e eventuais precedentes** via `jurisprudencia-stj-stf`.

---

## Dispositivos e súmulas — sob o Citation Gate

**Dispositivos de lei (citáveis com certeza, conferida a vigência):**
- **CF, art. 5º, LV** (contraditório e ampla defesa no PAD); **art. 42, §1º**; **art. 142, §3º, VI e VII**; **art. 125, §4º**.
- **Lei 5.836/1972** (Conselho de Justificação) e o **regulamento disciplinar da Força** (Conselho de Disciplina).
- **Lei 6.880/1980** (Estatuto dos Militares) / estatutos estaduais.
- **Lei 9.784/1999** (processo administrativo federal — subsidiária) / lei estadual correspondente.

**Súmulas/orientações a conferir antes de citar (NÃO afirmar de memória):**
- Enunciados sobre **repercussão da instância penal na administrativa** e sobre **independência das instâncias** — **[NÃO VERIFICADO]**: confirmar teor, número e vigência via `jurisprudencia-stj-stf`.
- Orientações do **STF/STJ/STM** sobre **prescrição disciplinar militar**, **cerceamento de defesa** e **proporcionalidade** na perda do posto/graduação — **[NÃO VERIFICADO]**: qualquer número de HC, MS, RMS, REsp, RE, ADI, tema repetitivo ou informativo **só** entra na peça após verificação. **Prefira ensinar a tese e o dispositivo** a arriscar um número de acórdão.

> **Regra de ouro do Citation Gate:** dispositivos de lei e garantias constitucionais notórias podem ser citados com segurança (conferida a redação vigente). **Qualquer** precedente específico — número de processo, informativo, tema, súmula não notória — que não tenha certeza absoluta é marcado **[NÃO VERIFICADO]** e conferido via `jurisprudencia-stj-stf` antes de ir para a peça.

---

## Erros comuns (anti-padrões)

- **Tratar como processo penal:** confundir o rito administrativo-disciplinar com a ação penal militar, aplicando institutos incompatíveis.
- **Ignorar a independência das instâncias:** invocar absolvição penal por insuficiência de provas como se vinculasse a esfera disciplinar (não vincula — só a negativa de autoria / inexistência do fato).
- **Presumir o prazo prescricional:** afirmar prescrição sem localizar o prazo na **norma da Força/Estado** específica.
- **Deixar precluir provas e nulidades:** não requerer testemunhas/diligências no momento próprio, não consignar o cerceamento — enfraquece a defesa no Tribunal.
- **Não atacar a portaria:** aceitar objeto genérico, capitulação atípica ou motivação ausente sem impugnar.
- **Esquecer a proporcionalidade:** não sustentar, subsidiariamente, sanção menos gravosa (a perda do posto/graduação é a extrema).
- **Citar jurisprudência de memória:** inserir número de HC/MS/RMS/REsp/RE/tema sem passar pelo gate — risco de sanção por citação inventada.
- **Confundir praça estável e não estável:** aplicar o rito do Conselho de Disciplina a quem não tem estabilidade (ou vice-versa).
- **Perder a defesa perante o Tribunal:** concentrar tudo na fase do Conselho e negligenciar as alegações finais no STM/TJM/TJ.

## Checklist da defesa

- [ ] Confirmado o procedimento correto: **Conselho de Justificação** (oficial) ou **de Disciplina** (praça estável)?
- [ ] Norma-base **vigente** localizada (Lei 5.836/72 e/ou regulamento da Força/Estado)?
- [ ] **Portaria** de instauração analisada (competência, composição, objeto, capitulação, motivação)?
- [ ] **Tempestividade** da defesa conferida (prazo próprio; `calculadora-tempestividade` se controvertido)?
- [ ] **Cerceamento de defesa** verificado (testemunhas, diligências, acesso aos autos, prazo, defesa técnica)?
- [ ] **Prescrição disciplinar** examinada na norma específica (termo inicial, interrupção/suspensão)?
- [ ] **Enquadramento** atacado (atipicidade / hipótese de submissão)?
- [ ] **Repercussão penal** avaliada (natureza da absolvição — vincula ou não)?
- [ ] **Proporcionalidade** sustentada subsidiariamente (sanção menos gravosa que a perda do posto/graduação)?
- [ ] Preliminares e mérito **consignados** para preservar a defesa perante o **Tribunal Militar**?
- [ ] Toda súmula/tese/precedente **verificado** via `jurisprudencia-stj-stf` (Citation Gate)?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa administrativo-disciplinar militar — **não** substitui o juízo do advogado responsável, a leitura da norma específica da Força/Estado, nem a análise dos autos concretos.
- **Ética por polo (DEFESA):** a atuação observa o Estatuto da Advocacia e o Código de Ética e Disciplina da OAB, além do **Provimento 205/2021**. Se a atuação for da Defensoria, observa-se a **LC 80/94**. (Esta skill é do **polo de defesa** do militar; não é peça acusatória.)
- **Independência das instâncias** e **sigilo/LGPD** dos dados do assistido observados; nada de dado sensível em repositório público.
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
