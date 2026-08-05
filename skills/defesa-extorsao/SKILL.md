---
name: defesa-extorsao
description: >-
  Use ao defender acusado de EXTORSÃO (art. 158, CP) e formas qualificadas — distinção extorsão ×
  roubo (na extorsão a vítima colabora), extorsão × estelionato (grave ameaça, não fraude) e
  extorsão × exercício arbitrário das próprias razões (art. 345); crime formal (Súmula 96/STJ);
  qualificadoras do §1º (concurso/arma) e §3º (restrição de liberdade — 'sequestro relâmpago');
  idoneidade da grave ameaça. Gatilhos: extorsão, art… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, patrimonio]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-extorsao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-extorsao", "defesa extorsao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Extorsão (art. 158 do Código Penal)

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

Esta skill orienta a **estratégia defensiva** na imputação de **extorsão** (CP, art. 158) e suas formas qualificadas. Extorsão é **constranger alguém, mediante violência ou grave ameaça, com o intuito de obter indevida vantagem econômica, a fazer, tolerar que se faça ou deixar de fazer alguma coisa**. A elementar decisiva — e a chave de toda a defesa — é que **a vítima colabora**: é ela quem, sob coação, realiza (ou omite) o ato que gera a vantagem. Essa colaboração é o que separa a extorsão do roubo, do estelionato e do mero exercício arbitrário das próprias razões.

> **Lição central:** antes de discutir dolo, prova ou qualificadoras, **classifique corretamente o tipo**. O erro mais comum da acusação é rotular como "extorsão" fatos que são roubo (a subtração é do próprio agente, sem a colaboração indispensável da vítima), estelionato (a vantagem vem de fraude, não de grave ameaça) ou exercício arbitrário das próprias razões (art. 345 — a exigência tem **causa jurídica**, uma dívida real). Cada desclassificação muda radicalmente a pena e o regime.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 158 do CP (caput, §1º, §2º e §3º — este acrescido pela Lei 11.923/2009, "sequestro relâmpago") e do art. 345. Confira se a extorsão do §3º (com resultado lesão grave ou morte) permanece equiparada a hediondo na Lei 8.072/90 (art. 1º, III). **Toda súmula, tese ou precedente citado passa OBRIGATORIAMENTE pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de ir para a peça** — há sanções reais por jurisprudência inventada por IA.

## Base legal

- **Art. 158, caput, CP** — extorsão: constranger, mediante violência ou grave ameaça, com intuito de vantagem econômica indevida, a fazer/tolerar/deixar de fazer. Pena de reclusão de 4 a 10 anos e multa.
- **Art. 158, §1º, CP** — aumento (1/3 até 1/2) se cometida por **duas ou mais pessoas** ou com **emprego de arma**.
- **Art. 158, §2º, CP** — aplica-se a extorsão o disposto no **art. 157, §3º** (extorsão qualificada por **lesão corporal grave** ou **morte**), com as mesmas penas.
- **Art. 158, §3º, CP** (Lei 11.923/2009) — **"sequestro relâmpago"**: extorsão mediante **restrição da liberdade da vítima**, quando essa condição é necessária à obtenção da vantagem; pena de reclusão de 6 a 12 anos e multa (e as majorações do §2º se houver lesão grave ou morte).
- **Art. 159, CP** — **extorsão mediante sequestro** (tipo autônomo, distinto): sequestrar pessoa **com o fim de obter** qualquer vantagem como **condição ou preço do resgate**. Não confundir com o §3º do 158.
- **Art. 345, CP** — **exercício arbitrário das próprias razões**: fazer justiça pelas próprias mãos para satisfazer **pretensão legítima**, salvo quando a lei o permite. Pena baixa (detenção 15 dias a 1 mês, ou multa) e, em regra, ação penal privada quando não há violência.
- **Súmula 96/STJ** — o crime de extorsão **consuma-se independentemente da obtenção da vantagem** indevida (natureza **formal**).

## Anatomia da defesa — a matriz de desclassificação

A primeira e mais poderosa linha de defesa é **desclassificatória**. Antes de tudo, situe o fato na matriz:

| Tipo | Quem age? | Meio | Núcleo distintivo |
|------|-----------|------|-------------------|
| **Roubo (157)** | O **agente** subtrai | Violência/grave ameaça | A vítima **não colabora** — o agente toma a coisa; a entrega é dispensável (arrebatamento) |
| **Extorsão (158)** | A **vítima** faz/tolera/omite | Violência/grave ameaça | A **colaboração da vítima é imprescindível** para a vantagem |
| **Estelionato (171)** | A vítima é iludida | **Fraude** (ardil), sem coação | A vítima entrega por **erro**, não por medo |
| **Exerc. arbitrário (345)** | O agente cobra o que lhe é devido | Pode haver ameaça/violência | A exigência tem **causa jurídica** (pretensão legítima/existente) — falta o "**indevida**" |
| **Extorsão med. sequestro (159)** | Sequestro como condição do resgate | Privação de liberdade duradoura | Vantagem é **preço do resgate**; regime jurídico próprio e mais grave |

> **Critério de ouro extorsão × roubo (STJ/STF, consolidado):** distingue-se pela **imprescindibilidade da colaboração da vítima**. Se a vítima **poderia ser dispensada** e o agente tomaria a coisa de qualquer modo → **roubo**. Se **sem o comportamento da vítima** (ex.: informar a senha, transferir valores, assinar documento) a vantagem seria inalcançável → **extorsão**. **Confirme a formulação atual desse critério e os precedentes específicos via `jurisprudencia-stj-stf`.** [NÃO VERIFICADO: números de HC/REsp específicos]

## Roteiro de teses defensivas por eixo

### Eixo 1 — Atipicidade / desclassificação para o art. 345 (a tese mais forte quando há dívida real)
- **Núcleo:** se a exigência tem **causa jurídica** — o agente cobra dívida **real e existente**, ainda que por meio reprovável —, falta a elementar "**indevida** vantagem". A conduta migra para **exercício arbitrário das próprias razões (art. 345)** ou, se ausente violência à pessoa, pode ser penalmente irrelevante como extorsão.
- **Prova a produzir:** demonstrar a **preexistência e a legitimidade da dívida/pretensão** (contrato, confissão de dívida, mensagens, testemunhas, negócio subjacente). O ônus de provar a **legitimidade da pretensão** é da defesa, mas a **dúvida sobre a existência da dívida** favorece a desclassificação.
- **Limite honesto:** parte da jurisprudência entende que **excesso** (exigir valor muito superior ao devido, ou usar grave ameaça desproporcional) pode reconstituir a extorsão. Trabalhe com a **proporção** entre o exigido e o efetivamente devido. **Confirme a orientação atual via `jurisprudencia-stj-stf`.**

### Eixo 2 — Desclassificação para roubo (157) quando a colaboração da vítima era dispensável
- Nem sempre desclassificar para roubo é pior: em certos cenários (pena-base, majorantes, prescrição, tese de participação) pode interessar. Sustente que **a vítima não tinha papel imprescindível** — o agente subtraiu diretamente — logo **roubo**, não extorsão. Analise **caso a caso** qual tipificação é mais favorável ao assistido antes de escolher a tese.

### Eixo 3 — Ausência/atipicidade da grave ameaça (idoneidade da ameaça)
- A grave ameaça deve ser **séria, idônea e capaz** de constranger. Ameaça **vaga, jocosa, de mal futuro incerto, condicionada a evento improvável ou impossível** não realiza a elementar.
- **Ameaça de exercício regular de direito** (ex.: "vou te processar", "vou registrar boletim de ocorrência", "vou contar a verdade a quem de direito") **não é grave ameaça típica** — é anúncio de conduta lícita. A extorsão exige que o mal prometido seja **injusto**.
- Aferir a idoneidade **na perspectiva da vítima concreta** e do contexto, mas sem presumir intimidação onde há mero constrangimento social ou moral.

### Eixo 4 — Ausência de dolo específico (intuito de vantagem econômica indevida)
- O tipo exige **elemento subjetivo especial**: agir **com o intuito de obter indevida vantagem econômica**. Falta esse fim especial quando o objetivo é **vingança, coação para outro fim não patrimonial, ou brincadeira**. Sem o especial fim de lucro **indevido**, não há extorsão.

### Eixo 5 — Consumação e tentativa (impacto da Súmula 96/STJ)
- **Extorsão é crime formal (Súmula 96/STJ):** consuma-se com o **constrangimento**, **independentemente de a vantagem ser obtida**. Consequência defensiva: **não se pode sustentar mera tentativa só porque o agente não recebeu o valor** — isso já é consumação.
- **Onde cabe tentativa:** quando o **constrangimento não chega ao conhecimento da vítima** ou **não tem aptidão para constranger** (ex.: mensagem extorsiva interceptada antes de chegar; ameaça que a vítima nunca percebeu). Nesse caso, tentativa (redução de 1/3 a 2/3).

### Eixo 6 — Ataque às qualificadoras e majorantes
- **§1º (concurso de duas ou mais pessoas / emprego de arma):** exigir **prova concreta** do concurso (liame subjetivo e divisão de tarefas, não mera presença) e da **arma** (apreensão/perícia; discutir a jurisprudência sobre arma não apreendida/inapta). Afastada a majorante, a pena cai sensivelmente.
- **§2º (lesão grave/morte — art. 157, §3º):** exigir **nexo causal** entre a violência da extorsão e o resultado; discutir **culpa/dolo** no resultado agravador e eventual concurso × qualificação.
- **§3º ("sequestro relâmpago"):** a restrição de liberdade deve ser **meio necessário** à obtenção da vantagem e ter **duração/relevância** que a caracterize; **restrição ínfima e instantânea** pode não configurar o §3º, remanescendo o caput. Discutir a fronteira com a **extorsão mediante sequestro (159)** — que é tipo autônomo e mais grave.

### Eixo 7 — Prova e autoria
- Extorsões modernas são frequentemente **digitais** (mensagens, e-mails, "sextortion", falsos sequestros por telefone). Ataque a **cadeia de custódia** da prova digital, a **autoria** (titularidade de linha/conta ≠ autoria pessoal), a **integridade** de prints e a **legalidade** de eventual interceptação (skills `cadeia-custodia`, `prova-digital` / `analise-provas`, conforme disponíveis).

## Teses × contra-teses (mapa de confronto)

| Tese defensiva | Fundamento | Contra-tese (acusação) provável |
|----------------|-----------|--------------------------------|
| Desclassificar p/ art. 345 (dívida real) | Vantagem não é "indevida"; causa jurídica | Excesso na cobrança / valor > devido reconstitui a extorsão |
| Desclassificar p/ roubo (157) | Colaboração da vítima era dispensável | A entrega pela vítima era imprescindível → extorsão |
| Ameaça não idônea / exercício regular de direito | Mal prometido é lícito ou inapto | Ameaça, no contexto, foi séria e constrangeu a vítima |
| Ausência de dolo de lucro indevido | Fim era vingança/coação não patrimonial | Intuito econômico demonstrado pelo pedido de valor |
| Tentativa | Vantagem não obtida | **Súmula 96/STJ** — crime formal, já consumado |
| Afastar §1º (arma/concurso) | Falta perícia/apreensão; mera presença | Prova testemunhal do uso da arma e do liame subjetivo |
| §3º não configurado (restrição ínfima) | Privação instantânea | Restrição foi necessária e relevante p/ a vantagem |

## Súmulas e precedentes (sob o Citation Gate)

**Cite com segurança (notórios):**
- **Súmula 96/STJ** — a extorsão **consuma-se independentemente da obtenção da vantagem** (crime formal). Base da defesa quanto a tentativa/consumação.
- **Dispositivos legais**: arts. 158 (caput, §§1º a 3º), 159, 171, 345 do CP; art. 1º, III, da Lei 8.072/90 (extorsão qualificada pela morte como hediondo — **confirmar redação vigente**).

**Marque [NÃO VERIFICADO] e confira via `jurisprudencia-stj-stf` antes de citar:**
- Números específicos de **HC/REsp/AgRg** do STJ ou **HC/RE** do STF sobre: critério extorsão × roubo (imprescindibilidade da colaboração da vítima); desclassificação p/ art. 345 e o problema do "excesso"; idoneidade da grave ameaça digital; alcance do §3º (sequestro relâmpago) × art. 159; arma não apreendida na extorsão. [NÃO VERIFICADO]
- Existência de **súmula ou tese em repetitivo/Tema** específica sobre extorsão além da Súmula 96. [NÃO VERIFICADO]
- **Informativos** de jurisprudência citados de memória. [NÃO VERIFICADO]

> **Regra de ouro do Citation Gate:** ensine a **tese e o dispositivo** com segurança; **nunca** invente número de acórdão, informativo ou tema. Na dúvida sobre um precedente, **omitir vence inventar** — e sempre passar pela skill `jurisprudencia-stj-stf`.

## Dosimetria e consequências (apontar, não calcular aqui)

- **Pena-base:** caput 4–10 anos; §3º 6–12 anos. A **classificação/desclassificação** é o que mais move a pena — priorize-a.
- Para o **cálculo concreto** (circunstâncias do art. 59, agravantes/atenuantes, majorantes do §1º em fração de 1/3 a 1/2, causas de aumento/diminuição, tentativa), use a skill **`calculadora-dosimetria`** — não faça o cálculo determinístico nesta skill.
- **Prescrição:** verificar marcos e prazos com a skill **`calculadora-prescricao`** (pena elevada afasta prescrição em curto prazo, mas conferir sempre).
- **Hediondez:** extorsão qualificada pela **morte** é equiparada a hediondo (Lei 8.072/90) — reflete em regime, progressão e livramento; **confirmar a redação vigente** e articular com a skill `execucao-progressao-regime` na fase de execução.

## Erros comuns e checklist da defesa

**Anti-padrões (evitar):**
- Aceitar a rotulação de "extorsão" sem testar a **matriz de desclassificação** (roubo/estelionato/345).
- Sustentar **tentativa** apenas porque o valor não foi recebido — a **Súmula 96/STJ** derruba a tese (crime formal).
- Ignorar a **causa jurídica** da exigência (dívida real) que levaria ao art. 345.
- Tratar como grave ameaça o **anúncio de conduta lícita** (processar, denunciar fato verdadeiro).
- Não atacar **majorantes** (arma/concurso) por falta de perícia/prova concreta.
- Confundir o **§3º do art. 158** (sequestro relâmpago) com o **art. 159** (extorsão mediante sequestro) — regimes distintos.
- Citar precedente de memória sem passar pelo Citation Gate.

**Checklist:**
- [ ] A **colaboração da vítima era imprescindível**? (extorsão) ou dispensável? (roubo)
- [ ] Houve **fraude** em vez de coação? (estelionato)
- [ ] A exigência tinha **causa jurídica** — dívida real? (art. 345; afasta "indevida")
- [ ] A **grave ameaça** era séria, idônea e de mal **injusto** (não exercício regular de direito)?
- [ ] Há **dolo específico** de vantagem econômica **indevida**?
- [ ] Consumação × tentativa avaliadas à luz da **Súmula 96/STJ**?
- [ ] **Majorantes do §1º** (arma/concurso) provadas concretamente? Cabível impugná-las?
- [ ] **§3º** (restrição de liberdade) realmente necessário e relevante, ou é apenas o caput?
- [ ] Fronteira com o **art. 159** examinada?
- [ ] **Prova digital** (mensagens, prints, linhas) com cadeia de custódia e autoria íntegras?
- [ ] **Dosimetria** remetida à `calculadora-dosimetria` e **prescrição** à `calculadora-prescricao`?
- [ ] Todas as **súmulas/precedentes** conferidos via `jurisprudencia-stj-stf` antes de citar?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a estratégia, a tese escolhida e cada citação são de responsabilidade do **advogado** que subscreve a peça (EAOAB; CED, art. 2º; Provimento OAB 205/2021).
- **Polo:** skill de **DEFESA** (acusado de extorsão). Se o pedido vier do **polo acusatório** (MP/assistente de acusação), o chefe-roteador deve conferir o polo e acionar a skill correspondente — as teses aqui são majoritariamente **defensivas** e não devem ser usadas como roteiro de acusação sem adaptação.
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente vai à peça sem passar pela skill `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, apelação, memoriais), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
