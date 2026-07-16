---
name: quesitos-acusacao-juri
description: >-
  Use ao construir a estratégia da ACUSAÇÃO para a quesitação do Tribunal do Júri — garantir que
  qualificadoras, causas de aumento e a materialidade/autoria sejam corretamente quesitadas na ótica
  condenatória, administrar o quesito genérico de absolvição (art. 483, III e §2º, CPP — que é
  pró-réu) e blindar o veredicto condenatório contra nulidade via protesto do MP em ata. É skill do
  POLO ACUSATÓRIO (Ministério Público /… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-quesitos-acusacao-juri"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["quesitos-acusacao-juri", "quesitos acusacao", "acusacao juri"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Quesitos e Tese da Acusação no Júri (arts. 482-491 CPP)

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

Esta skill orienta a **estratégia da acusação na quesitação** do Tribunal do Júri: como pleitear que **qualificadoras e majorantes admitidas na pronúncia virem quesitos autônomos**, como se posicionar diante do **quesito genérico de absolvição** (que joga a favor do réu), e como **protestar em ata** para preservar o veredicto condenatório contra futura anulação. É o **outro lado do balcão** em relação à skill `juri-quesitacao` (formulação/impugnação em ótica técnico-defensiva) e à `juri-plenario-debates` (sustentação da defesa).

> **Skill do polo acusatório.** Este material só se aplica a quem **atua na acusação** — **Ministério Público** ou **assistente de acusação** (advogado do ofendido/sucessores, arts. 268-273 CPP). O chefe-roteador **deve conferir o polo do usuário** (perfil da instituição em `company.md`) **antes de sugerir esta skill**. Para o advogado de defesa, a skill correta é `juri-quesitacao`. A ética aqui é a do **CNMP** (membro do MP) ou a da **OAB + CED** (assistente de acusação) — jamais a promoção da acusação a qualquer custo: o MP é fiscal da ordem jurídica e pode até pedir a absolvição.

> **Lição central:** a acusação **não formula** o questionário — quem o redige é o **juiz-presidente** (art. 482, parágrafo único). O papel do MP/assistente é (1) **requerer**, no momento do art. 484, que **cada qualificadora e cada majorante pronunciada** vire quesito próprio; (2) **fiscalizar** a congruência com a pronúncia; e (3) **protestar em ata** contra qualquer defeito, porque **ata é munição de recurso** (art. 593, III, "a"). O erro clássico da acusação é deixar precluir uma qualificadora não quesitada por não ter reclamado no momento certo.

> **Cautela de vigência (obrigatória antes de citar):** a sistemática atual da quesitação — em especial a **inversão histórica** que colocou o **quesito genérico de absolvição** ("O jurado absolve o acusado?") logo após materialidade e autoria — decorre da **Lei 11.689/2008**. Citar a quesitação anterior a 2008 (um quesito por excludente, na ordem antiga) é **erro grave de vigência**. Confira a redação vigente dos **arts. 482 a 491 CPP** na fonte oficial e passe **toda súmula, tese ou acórdão** pela skill `jurisprudencia-stj-stf` antes de fundamentar. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 482 CPP** — os quesitos são redigidos pelo juiz-presidente **com base na pronúncia, no interrogatório e nas alegações das partes**; proposições **afirmativas, simples e distintas**.
- **Art. 483 CPP** — **ordem cogente** dos quesitos: I materialidade; II autoria/participação; III **"O jurado absolve o acusado?"** (§2º); IV causa de diminuição alegada pela defesa; V **qualificadora ou causa de aumento** reconhecida na pronúncia.
- **Art. 483, §1º** — resposta **negativa** (mais de 3 jurados) à **materialidade** ou à **autoria** encerra a votação e **absolve**.
- **Art. 483, §2º e §3º** — o quesito genérico de absolvição é **obrigatório** após materialidade e autoria; superado ele (resposta "não" à absolvição), passa-se às causas de diminuição (§3º, I) e às qualificadoras/aumentos (§3º, II).
- **Art. 484 CPP** — lido o questionário, o juiz indaga às partes se têm **requerimento ou reclamação**; é o **momento** de a acusação pedir inclusão/desdobramento e de **protestar**.
- **Art. 490 CPP** — havendo **contradição** entre respostas, o juiz reexplica e **submete de novo** à votação.
- **Art. 492 CPP** — efeitos da decisão; **desclassificação própria** desloca a competência ao juiz-presidente (§1º).
- **Arts. 268-273 CPP** — habilitação e poderes do **assistente de acusação** (pode requerer quesitos, arrazoar e recorrer).
- **Art. 593, III, "a" e "c" CPP** — **apelação** por nulidade posterior à pronúncia ou por decisão manifestamente contrária à prova — via de resgate quando o defeito de quesitação foi consignado em ata.

## O que a acusação fiscaliza ao ser lido o questionário (art. 484)

Ao ouvir a leitura dos quesitos, o MP/assistente confere, **na ótica condenatória**:

1. **Materialidade e autoria** foram quesitadas de forma **clara e completa** (inclusive, quando útil, a materialidade **desdobrada**: existência do fato + nexo causal/resultado morte)?
2. **Cada qualificadora admitida na pronúncia** (art. 121, §2º; ou as do crime respectivo) virou **quesito autônomo** (art. 483, V)? Qualificadora pronunciada e **não quesitada** é ponto a **reclamar imediatamente** — sem quesito, o júri não a reconhece e a pena-base do juiz-presidente parte mais baixa.
3. **Cada causa de aumento** imputada (ex.: art. 121, §4º; concurso de pessoas; emprego de arma) tem **quesito próprio e separado**?
4. Os quesitos estão **congruentes com a pronúncia** — nada **aquém** dela (sob pena de a acusação perder tese que já vencera na 1ª fase). A acusação **não pode** quesitar **além** da pronúncia, mas **deve** exigir tudo o que **nela** consta.
5. A **ordem do art. 483** foi respeitada? Qualificadoras/aumentos devem vir **por último**, depois do genérico de absolvição — mas devem **existir**.
6. Há **quesito complexo** (mais de uma pergunta numa só) que possa **induzir** o jurado a negar a qualificadora em bloco? Pedir **desdobramento** também interessa à acusação.
7. Se houver **tese de desclassificação** da defesa, o quesito desclassificatório está corretamente posicionado e **não engole** indevidamente a imputação dolosa contra a vida?

## O quesito genérico de absolvição na ótica da acusação (art. 483, §2º)

O quesito **"O jurado absolve o acusado?"** é **obrigatório** e **pró-réu**: permite a absolvição por **qualquer** fundamento — inclusive **clemência / íntima convicção**, sem declaração de motivo. A acusação **não pode impedir** sua formulação (é imposição legal), mas deve:

- **Reforçar em plenário**, antes da votação, a **prova da materialidade e da autoria**, porque é o "sim" a esses dois quesitos que **abre caminho** ao genérico; e sustentar por que **não há** fundamento absolutório.
- **Não confundir** o campo: o §2º absolve por convicção íntima; ele **não** é o lugar de discutir qualificadora. A acusação zela para que qualificadoras fiquem em **seus próprios quesitos** (V), depois do genérico.
- Estar atenta ao debate atual sobre **soberania dos veredictos × absolvição por clemência**: há discussão sobre o cabimento e os limites da **apelação da acusação (art. 593, III, "d")** contra absolvição pelo quesito genérico. **[NÃO VERIFICADO]** — a orientação de STF e STJ sobre anular (ou não) absolvição fundada no §2º por suposto descompasso com a prova **oscila e é objeto de repercussão geral**; **confira o estado atual via `jurisprudencia-stj-stf` antes de recorrer ou de afirmar tese**. Não cite número de tema/HC/RE de memória.

## Requerimentos e protesto da acusação — a técnica (art. 484)

> **O momento é o art. 484**, na leitura do questionário, **antes da votação**. Requerimento aceito sem reclamação no momento próprio pode **precluir**. Por isso a regra de ouro da acusação: **requerer, e consignar tudo em ata.**

- **Requerer a inclusão/desdobramento** de quesito de **qualificadora ou aumento** pronunciado e omitido, com **fundamentação oral** (indicar o dispositivo e o trecho da pronúncia que o admitiu).
- **Exigir a consignação em ata** do requerimento **e** da decisão do juiz-presidente (deferimento/indeferimento). O registro é **pressuposto** da apelação por nulidade (art. 593, III, "a").
- Indeferido o pedido, **protesto expresso em ata**, mantendo a matéria viva para o recurso — sem protesto, presume-se **aceitação** e a acusação perde a via.
- Após a votação, **monitorar contradição entre respostas** (ex.: jurados afirmam a qualificadora do motivo torpe e, ao mesmo tempo, uma diminuição incompatível) e **provocar o art. 490** de imediato, com registro.

## Teses da acusação e contra-teses da defesa

| Ponto | Tese da acusação | Contra-tese (defesa) a antecipar |
|---|---|---|
| **Qualificadora pronunciada** | Deve virar quesito autônomo (art. 483, V); omiti-la é nulidade a favor da acusação, reclamável em ata | Defesa tenta que qualificadora frágil não seja quesitada ou seja fundida em quesito complexo |
| **Materialidade desdobrada** | Desdobrar (fato + nexo/morte) reforça a base condenatória e evita ambiguidade | Defesa prefere quesito único, mais fácil de negar em bloco |
| **Genérico de absolvição (§2º)** | É pró-réu e obrigatório; a acusação combate o **fundamento** absolutório nos debates, não o quesito | Defesa maximiza o §2º como porta da clemência |
| **Congruência com a pronúncia** | Acusação exige **tudo** o que a pronúncia admitiu; nada aquém | Defesa alega excesso/inovação para anular |
| **Absolvição por clemência × prova** | Discute-se se cabe apelação da acusação (art. 593, III, "d") **[NÃO VERIFICADO — conferir]** | Defesa invoca **soberania dos veredictos** (CF, art. 5º, XXXVIII, "c") |

> **Contra-tese estrutural que a acusação sempre enfrenta:** a **soberania dos veredictos** (CF, art. 5º, XXXVIII, "c") limita a revisão do mérito da decisão dos jurados. A apelação da acusação por decisão contrária à prova (art. 593, III, "d") leva, quando provida, a **novo júri** — **não** à substituição do veredicto pelo tribunal. Antecipe isso ao decidir recorrer.

## Nulidades de quesitação relevantes para a acusação

| Vício | Descrição | Interesse da acusação |
|---|---|---|
| **Omissão de quesito de qualificadora/aumento pronunciado** | Circunstância admitida na pronúncia não foi quesitada | Reclamar no art. 484 e protestar; base de apelação (art. 593, III, "a") |
| **Quesito complexo** | Qualificadora fundida a outra pergunta, induzindo negativa em bloco | Pedir desdobramento |
| **Inversão da ordem (art. 483)** | Qualificadora antes do genérico, ou sequência trocada | Reclamar; pode contaminar o veredicto |
| **Contradição nas respostas (art. 490)** | Respostas logicamente incompatíveis | Provocar reexplicação/revotação na hora |
| **Incongruência com a pronúncia** | Quesito **além** do pronunciado | Aqui o vício favorece a defesa — a acusação **não** deve pleitear quesito extra-pronúncia |

> **Regra de ouro (art. 563 CPP — *pas de nullité sans grief*):** boa parte dos vícios é **relativa** e exige impugnação tempestiva **e** demonstração de **prejuízo**. A acusação que não reclama no art. 484 tende a **precluir**. **Confirme, caso a caso e na jurisprudência atual, se o vício concreto é absoluto ou relativo** via `jurisprudencia-stj-stf`.

## Súmulas e dispositivos notórios (conferir vigência via `jurisprudencia-stj-stf`)

- **CF, art. 5º, XXXVIII** — competência do júri para crimes dolosos contra a vida; **plenitude de defesa**, **sigilo das votações** e **soberania dos veredictos**.
- **Súmula 156/STF** — é **absoluta** a nulidade por falta de quesito **obrigatório**. (Notória; ainda assim, confirmar redação e alcance atual.)
- **Súmula 162/STF** — é **absoluta** a nulidade do julgamento por quesito da **defesa** não formulado quando cabível. (Enunciado clássico, anterior à reforma de 2008 — **confira a compatibilidade com o rito atual** antes de invocar.)
- Para **qualquer** número de HC/REsp/RE, **informativo** ou **tema/repercussão geral** (inclusive o debate sobre apelação contra absolvição pelo §2º), **use `jurisprudencia-stj-stf`**. Prefira **ensinar a tese e o dispositivo** a arriscar um número de acórdão.

## Roteiro de atuação da acusação na quesitação

1. **Antes do plenário:** liste, a partir da **pronúncia**, **todas** as qualificadoras e majorantes admitidas — cada uma deve virar quesito. Prepare a fundamentação de cada requerimento.
2. **Nos debates:** sustente **materialidade e autoria** com solidez (é o "sim" a elas que estrutura a condenação) e enfrente diretamente o **fundamento absolutório** que a defesa oferecerá ao §2º.
3. **Na leitura do questionário (art. 484):** confira a lista contra a pronúncia; **requeira** inclusão/desdobramento do que faltar; **exija consignação em ata** do pedido e da decisão.
4. **Se indeferido:** **protesto em ata** — sem ele, preclui.
5. **Após a votação:** cheque **contradição** (art. 490) e provoque a revotação de imediato, com registro.
6. **Pós-julgamento:** avalie **apelação** (art. 593, III, "a" para nulidade de quesitação; "d" para decisão contrária à prova) — sempre lembrando que o provimento leva a **novo júri** (soberania). Confira jurisprudência antes.

## Erros comuns da acusação (evitar)

- **Não reclamar** no art. 484 a **qualificadora pronunciada e não quesitada** — e depois descobrir que **precluiu**.
- **Confiar na memória** para citar súmula/precedente do júri — passa **obrigatoriamente** por `jurisprudencia-stj-stf`.
- **Tentar impedir** o quesito genérico de absolvição do §2º — é **obrigatório**; combate-se o **fundamento**, não o quesito.
- **Pleitear quesito além da pronúncia** — cria nulidade **a favor da defesa**.
- **Deixar de exigir consignação em ata** do requerimento e do protesto — a ata é a **munição** do recurso.
- **Recorrer** de absolvição pelo §2º sem conferir o estado atual da jurisprudência sobre soberania × clemência (**[NÃO VERIFICADO]** — checar).
- **Esquecer** que decisão contrária à prova (art. 593, III, "d") leva a **novo júri**, não à condenação direta pelo tribunal.

## Checklist final da acusação

- [ ] Todas as **qualificadoras/aumentos da pronúncia** foram convertidas em **quesitos autônomos** (art. 483, V)?
- [ ] **Materialidade e autoria** quesitadas de forma clara (e desdobradas quando útil)?
- [ ] **Nenhum quesito complexo** funde qualificadora com outra pergunta (pedir desdobramento)?
- [ ] **Ordem do art. 483** respeitada, com qualificadoras/aumentos **após** o genérico de absolvição?
- [ ] **Congruência com a pronúncia** — nada **aquém**; nada **além**?
- [ ] **Requerimento e decisão consignados em ATA** (art. 484)?
- [ ] **Protesto registrado** em caso de indeferimento (para apelação, art. 593, III, "a")?
- [ ] **Contradição nas respostas** monitorada (art. 490) e provocada na hora?
- [ ] **Toda súmula/precedente** conferido via `jurisprudencia-stj-stf` — nada de memória?
- [ ] **Polo do usuário confirmado** como acusação (MP/assistente) antes de aplicar esta skill?
- [ ] **Revisão humana** do membro do MP / advogado assistente responsável?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação; **não** substitui o juízo profissional nem a leitura do questionário concreto em plenário. A responsabilidade pela atuação, requerimentos e protestos é sempre de quem atua na acusação.
- **Ética por polo:** membro do **Ministério Público** rege-se pelo **CNMP** (e é **fiscal da ordem jurídica** — pode requerer absolvição, não busca condenação a qualquer custo); **assistente de acusação** advogado rege-se pela **OAB, CED e Provimento 205/2021**. Vedado promover acusação temerária ou infundada.
- **Citation Gate:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `jurisprudencia-stj-stf`. Números de acórdão/tema **não verificados** aqui estão marcados **[NÃO VERIFICADO]** e devem ser conferidos antes de qualquer uso. Há sanções reais por jurisprudência inventada por IA.
- **Confira a vigência** dos arts. 482-491 CPP (redação pós-Lei 11.689/2008) na fonte oficial antes de peticionar ou protestar.

**Padrão de redação:** ao redigir requerimentos, razões de apelação ou o protesto em ata, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
