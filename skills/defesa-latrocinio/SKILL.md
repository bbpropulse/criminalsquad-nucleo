---
name: defesa-latrocinio
description: >-
  Use ao defender LATROCÍNIO (roubo seguido de morte — art. 157, §3º, II, CP): desclassificação para
  roubo majorado + homicídio quando ausente o nexo subtração↔morte, latrocínio tentado (Súmula 610
  STF), competência do juízo singular e NÃO do júri (Súmula 603 STF), (in)comunicabilidade do
  resultado ao partícipe, excludentes e dosimetria do hediondo. Gatilhos: latrocínio, roubo seguido
  de morte, art. 157 §3º II, nexo… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, patrimonio, crime-hediondo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-latrocinio"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-latrocinio", "defesa latrocinio"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Latrocínio — roubo seguido de morte (CP, art. 157, §3º, II)

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

Esta skill orienta a **defesa técnica no crime de latrocínio** — o roubo qualificado pelo resultado morte (**art. 157, §3º, II, do CP**). O latrocínio é **crime complexo** (roubo + morte) e **crime hediondo** (Lei 8.072/90, art. 1º, II), com **teoria e competência próprias**: é julgado por **juiz singular, não pelo Tribunal do Júri** (Súmula 603/STF). Por isso, **nenhuma skill de júri se aplica aqui** — o eixo da defesa é a **desclassificação**, a **tentativa**, o **nexo entre a violência do roubo e a morte** e a **dosimetria do hediondo**.

> **Lição central:** o coração do latrocínio é o **nexo entre a subtração patrimonial e a morte**. A morte deve decorrer da **violência empregada para roubar** (ou para assegurar a subtração/impunidade), e o **dolo do agente deve estar voltado ao patrimônio** (*animus furandi / animus rem sibi habendi*). Rompido esse nexo — a morte não tem relação com a subtração, ou o dolo era exclusivamente homicida —, **não há latrocínio**: há roubo + homicídio em concurso, ou homicídio simples, com consequências enormes de **pena e de competência**. Classifique o nexo ANTES de tudo.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 157 do CP** e dos preceitos secundários — a **Lei 13.654/2018** reestruturou as majorantes do roubo (revogou o antigo aumento por arma e criou o §2º-A) e a **Lei 13.964/2019 (Pacote Anticrime)** alterou execução, livramento e dosimetria de hediondos. Confira também **Súmulas 603 e 610 do STF** e qualquer precedente **antes** de fundamentar, via a skill `jurisprudencia-stj-stf` (ou a best-practice `verificacao-citacoes`). Na dúvida sobre um número de acórdão/tema/informativo, **omitir vence inventar**.

---

## Base legal

- **Art. 157, *caput*, CP** — roubo (subtração mediante violência, grave ameaça ou redução à impossibilidade de resistência).
- **Art. 157, §3º, II, CP** — **latrocínio**: "se da violência resulta morte, a reclusão é de 20 a 30 anos, e multa". É o **roubo qualificado pelo resultado**.
- **Art. 157, §3º, I, CP** — roubo qualificado por **lesão grave** (não confundir com latrocínio; pena menor).
- **Art. 1º, II, da Lei 8.072/90** — latrocínio é **crime hediondo** (repercute em progressão, livramento, regime inicial e prescrição).
- **Art. 19, CP** — no crime qualificado pelo resultado, o agente **só responde pelo resultado agravador se o causou ao menos culposamente**. Base dogmática central da defesa quanto ao partícipe e ao resultado imprevisível.
- **Art. 29, CP** — concurso de agentes; medida da culpabilidade de cada partícipe (base da tese de (in)comunicabilidade do resultado morte).
- **Art. 14, II, CP** — tentativa (fundamento do **latrocínio tentado**).
- **Art. 68, CP** — dosimetria (método trifásico; ver skill `calculadora-dosimetria`).
- **Súmula 603/STF** — a competência para o julgamento do latrocínio é do **juiz singular**, e não do Tribunal do Júri.
- **Súmula 610/STF** — há latrocínio **consumado** ainda que **não realizada a subtração** dos bens, quando **consumado o homicídio**.

---

## O que caracteriza (e o que descaracteriza) o latrocínio

O latrocínio exige a convergência de três elementos. Atacar qualquer um deles é a espinha dorsal da defesa:

1. **Dolo voltado ao patrimônio (*animus furandi*)** — o agente quer subtrair; a morte é meio ou consequência da empreitada patrimonial. Se o dolo era **exclusivamente de matar** (a subtração foi pretexto, encenação ou fato posterior desvinculado), **não há latrocínio** — há homicídio (eventualmente qualificado), e a subtração pode ser fato à parte.
2. **Nexo causal entre a violência do roubo e a morte** — a morte deve **decorrer da violência** empregada para subtrair, assegurar a subtração ou garantir a impunidade. Morte por causa **estranha ao roubo** (ex.: desavença pessoal iniciada depois e sem relação com a subtração) **rompe o nexo**.
3. **Ao menos culpa quanto ao resultado morte (art. 19, CP)** — mesmo no latrocínio preterdoloso (dolo no roubo, culpa na morte), é preciso que a morte fosse **previsível**. Resultado **absolutamente imprevisível** não se imputa ao agente a título de latrocínio.

> **Latrocínio é doloso OU preterdoloso.** A doutrina admite as duas formas: **dolo no roubo + dolo na morte** (o agente quis matar para roubar) **ou dolo no roubo + culpa na morte** (a morte foi resultado culposo da violência). Em ambos há latrocínio — o que **não** pode faltar é o **nexo com a subtração** e o **dolo patrimonial** de base.

---

## Roteiro de defesa por tese (do mais forte ao subsidiário)

### 1. Desclassificação — ausência de nexo subtração↔morte (tese-mãe)

Quando a morte **não tem relação** com a intenção de subtrair — ex.: o agente matou por vingança/desavença e só depois subtraiu; ou a subtração é fato autônomo posterior à morte —, **afasta-se o §3º, II**, e reclassifica-se para:

- **homicídio (art. 121)** + **furto/roubo em concurso**, conforme o caso concreto; ou
- **roubo majorado (art. 157, §2º)** + **homicídio (art. 121)** em concurso material, se ambos os dolos coexistiram mas sem a relação de meio/fim que funde os crimes no latrocínio.

**Consequência processual decisiva:** se a reclassificação reconhecer **crime doloso contra a vida autônomo** (homicídio como núcleo, não como qualificadora do roubo), a **competência pode deslocar-se para o Tribunal do Júri** (CF, art. 5º, XXXVIII, "d") — o oposto do latrocínio, que é do juiz singular (Súmula 603/STF). **Avalie o polo estratégico:** ir ao júri pode ser vantajoso (clemência dos jurados) ou não, conforme o caso. Esta é a decisão tática mais importante da tese.

### 2. Latrocínio tentado × consumado — Súmula 610/STF (decorar a lógica)

A consumação do latrocínio segue a **sorte do resultado morte**, não da subtração:

| Morte | Subtração | Resultado |
|-------|-----------|-----------|
| Consumada | Consumada | Latrocínio **consumado** |
| Consumada | **Não** consumada | Latrocínio **consumado** (**Súmula 610/STF**) |
| **Tentada** (vítima sobrevive) | Consumada | Latrocínio **tentado** |
| Tentada | Não consumada | Latrocínio **tentado** |

- **Súmula 610/STF:** consumado o **homicídio**, há latrocínio **consumado** ainda que **não subtraídos** os bens.
- **Tese defensiva (tentativa):** se a **vítima sobreviveu** (morte tentada), o crime é **latrocínio tentado** (art. 157, §3º, II, c/c art. 14, II, CP), com **redução de 1/3 a 2/3** da pena — ainda que o roubo tenha se consumado. É erro grave da acusação tratar como consumado o latrocínio quando a vítima não morreu.
- **Contra-tese (acusação):** sustentar consumação com base na consumação da subtração — **rejeitada** pela Súmula 610, que ancora a consumação no resultado morte.

### 3. (In)comunicabilidade do resultado morte ao partícipe (art. 19 c/c art. 29, CP)

No concurso de agentes, o partícipe que **aderiu apenas ao roubo** e **não quis nem podia prever a morte** provocada por comparsa **não responde por latrocínio**, mas por **roubo** — porque o resultado agravador só se imputa a quem o causou **ao menos culposamente** (art. 19, CP).

- **Tese defensiva:** demonstrar que o cliente participou do **roubo** sem **dolo nem previsibilidade** do excesso letal do comparsa (ex.: combinaram roubo desarmado; comparsa, por conta própria, sacou arma e matou). Pleitear a responsabilização **só pelo roubo** (art. 157, §2º), afastando o §3º, II.
- **Contra-tese (acusação):** quando **todos** aderiram ao emprego de violência apta a matar (ex.: assalto a mão armada com disparo previsível), a jurisprudência tende a **comunicar** o resultado aos coautores — a morte estava **no âmbito do risco assumido**. A defesa deve estreitar o dolo comum ao **roubo**, não à violência letal.
- **Ponto fino:** distinguir **desígnios autônomos** (o comparsa agiu por conta própria, fora do plano) de **risco previsível do plano** (violência armada). O primeiro rompe a imputação; o segundo, em regra, não.

### 4. Excludentes e afastamento do dolo patrimonial

- **Legítima defesa / estado de necessidade** quanto à conduta letal, quando a morte não integra empreitada de subtração (arts. 23–25, CP).
- **Afastamento do *animus furandi*:** se o agente **não pretendia subtrair** (ex.: retomada de coisa própria — exercício arbitrário das próprias razões, art. 345; ou disputa sem intenção de assenhoreamento definitivo), cai a base do roubo e, com ela, o latrocínio.
- **Ausência de autoria/materialidade** e **cadeia de custódia** da prova (ver skills `analise-de-provas` e `cadeia-de-custodia`) — laudo de necropsia, nexo causal da morte, ligação do cliente à arma.

### 5. Dosimetria e execução — minimizar o hediondo

Não conseguindo desclassificar, a defesa migra para **reduzir a pena e suavizar a execução**:

- **Método trifásico (art. 68, CP)** — atacar a valoração negativa das circunstâncias judiciais (art. 59); afastar dupla valoração (bis in idem). Ver `calculadora-dosimetria` **[calculadora a implementar/checar com testes]**.
- **Concurso de crimes:** havendo **pluralidade de vítimas fatais** num mesmo contexto de subtração, discute-se **concurso formal impróprio × crime único** — tese sensível e divergente; **confira a orientação atual** via `jurisprudencia-stj-stf` (há entendimento de **concurso formal** quando há mais de uma morte, mesmo com patrimônio único). **[NÃO VERIFICADO — conferir o precedente específico]**.
- **Regime, progressão e livramento:** latrocínio é hediondo **com resultado morte** → percentuais mais altos e **vedação ao livramento condicional** na execução (ver skills `execucao-progressao-regime` e `execucao-livramento-condicional`; conferir redação vigente do art. 112 da LEP).
- **Prescrição:** pena máxima de 30 anos → prazo prescricional máximo (ver `calculadora-prescricao`).

---

## Teses e contra-teses (quadro-síntese)

| Tese da DEFESA | Fundamento | Contra-tese (ACUSAÇÃO) |
|---|---|---|
| Desclassificar: morte sem nexo com a subtração | Art. 157, §3º, II (nexo) + art. 121 | Nexo presente: violência do roubo causou a morte |
| Latrocínio **tentado** (vítima sobreviveu) | Art. 14, II + Súmula 610 (a contrario) | Consumação pela subtração — **rejeitada** pela Súm. 610 |
| Partícipe responde só pelo roubo | Art. 19 c/c art. 29 (sem culpa no resultado) | Morte no risco previsível do plano armado → comunica |
| Dolo era exclusivamente homicida → júri | CF art. 5º XXXVIII + art. 121 | Dolo patrimonial de base → latrocínio → juiz singular |
| Afastar *animus furandi* (retomada/disputa) | Ausência de subtração dolosa | Subtração dolosa comprovada |
| Reduzir pena / crime único (várias mortes) | Art. 68 + tese de crime único | Concurso formal impróprio [conferir] |

---

## Súmulas e precedentes (sob o Citation Gate)

**Súmulas notórias — citar com segurança (confira o texto atual):**

- **Súmula 603/STF** — competência do **juiz singular** para o latrocínio (**não** vai a júri).
- **Súmula 610/STF** — latrocínio **consumado** quando consumado o **homicídio**, ainda que **não realizada a subtração**.

**Dispositivos legais — citar com segurança:** art. 157, *caput*, §2º, §2º-A, §3º, I e II, CP; art. 19, CP; art. 29, CP; art. 14, II, CP; art. 68, CP; art. 1º, II, Lei 8.072/90.

> **Citation Gate (inegociável):** para **qualquer precedente específico** — número de HC/REsp/RE, informativo, tema repetitivo, tese de repercussão geral (ex.: sobre concurso de crimes em pluralidade de mortes, sobre comunicabilidade do resultado, sobre marco de consumação) — **não cite de memória**. Marque **[NÃO VERIFICADO]** e confira na skill `jurisprudencia-stj-stf` (ou best-practice `verificacao-citacoes`) antes de levar à peça. **Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.** Há sanções reais por jurisprudência inventada por IA.

---

## Erros comuns e checklist

**Anti-padrões (evitar):**

- Tratar o latrocínio como crime do **júri** — é do **juiz singular** (Súmula 603/STF). Só vai ao júri se **desclassificado** para homicídio doloso autônomo.
- Considerar **consumado** o latrocínio quando a **vítima sobreviveu** — é **tentado** (Súmula 610 a contrario; art. 14, II).
- Considerar **tentado** quando a **morte consumou** mas a subtração falhou — é **consumado** (Súmula 610).
- Confundir **§3º, I (lesão grave)** com **§3º, II (morte)** — penas e enquadramentos distintos.
- Imputar o **resultado morte ao partícipe** sem aferir **culpa/previsibilidade** (art. 19) — responsabilidade objetiva é vedada.
- Aceitar latrocínio quando o **dolo era exclusivamente homicida** e a subtração foi pretexto/fato posterior — aí é homicídio (+ júri).
- Esquecer que latrocínio é **hediondo com resultado morte** — impacta progressão, livramento (vedado) e regime.
- Citar **número** de HC/REsp/tema de memória — passar pelo Citation Gate.

**Checklist da defesa:**

- [ ] **Nexo** subtração↔morte examinado (a morte decorreu da violência do roubo)?
- [ ] **Dolo** de base é **patrimonial** (*animus furandi*) ou **exclusivamente homicida**? (define latrocínio × homicídio/júri)
- [ ] **Consumação** aferida pelo **resultado morte** (Súmula 610), não pela subtração?
- [ ] Se vítima sobreviveu → **latrocínio tentado** (art. 14, II) com redução de 1/3 a 2/3?
- [ ] **Partícipe**: houve **dolo/previsibilidade** da morte (art. 19 c/c 29)? Caso não, pleitear só o **roubo**?
- [ ] Distinção **§3º, I (lesão grave)** × **§3º, II (morte)** conferida?
- [ ] **Competência** correta (juiz singular; júri só se desclassificado para homicídio autônomo)?
- [ ] **Dosimetria** (art. 68) e **crime único × concurso** (pluralidade de mortes) avaliados? [precedente conferido]
- [ ] Reflexos de **execução** do hediondo (progressão, livramento vedado, regime) mapeados?
- [ ] **Prescrição** verificada (pena máx. 30 anos)?
- [ ] Toda **súmula/precedente** conferido via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar?
- [ ] **Revisão humana** do advogado responsável realizada?

---

## Skills relacionadas

- `defesa-roubo-majorado` — roubo **sem** morte (art. 157, §2º/§2º-A); base para a tese de desclassificação.
- `jurisprudencia-stj-stf` / `verificacao-citacoes` — **gate obrigatório** de toda súmula/precedente.
- `calculadora-dosimetria` — método trifásico da pena **[conferir/implementar com testes]**.
- `calculadora-prescricao` — prazos prescricionais **[conferir/implementar com testes]**.
- `execucao-progressao-regime` e `execucao-livramento-condicional` — reflexos do hediondo na execução.
- `analise-de-provas` e `cadeia-de-custodia` — ataque à materialidade (necropsia, nexo, arma).
- `redacao-persuasiva-criminal` — padrão de redação (teoria do caso, narrativa, subsunção, persuasão).

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; toda tese, enquadramento e citação é **hipótese a confirmar**. A responsabilidade pela peça e pela estratégia é sempre do **advogado** (EAOAB; CED, art. 2º).
- **Polo:** esta skill é de **DEFESA** (`polo_acusacao: false`). O foco é desclassificar, reduzir e suavizar. Se o roteador estiver operando em **polo acusatório** (MP/assistente de acusação), **confira o polo** e adapte — as teses aqui devem ser lidas como o **contraditório a enfrentar**, não como a acusação a sustentar.
- **Ética por polo:** advocacia (OAB + Provimento 205/2021); Ministério Público (CNMP); Defensoria (LC 80/94). Conflito de interesses (art. 17 EAOAB) checado na triagem.
- **Citation Gate:** nenhuma súmula/precedente/tese citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
