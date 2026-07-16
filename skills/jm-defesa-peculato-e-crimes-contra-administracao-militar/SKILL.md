---
name: jm-defesa-peculato-e-crimes-contra-administracao-militar
description: >-
  Use ao defender PECULATO MILITAR e demais crimes contra a Administração Militar do CPM (arts. 303
  a 334) — peculato (303), peculato-furto (303, §2º), peculato culposo com reparação (303, §§3º/4º),
  concussão (305), corrupção passiva (308) e ativa (309), prevaricação (319), condescendência
  criminosa (322) e falsidades castrenses (311-315). Trabalha a distinção peculato militar × CP 312,
  atipicidade por bem não afeto à… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, defesa, cpm]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-peculato-e-crimes-contra-administracao-militar"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-peculato-e-crimes-contra-administracao-militar", "defesa peculato", "administracao militar"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em peculato militar e crimes contra a Administração Militar (arts. 303 a 334 do CPM — Decreto-Lei 1.001/69)

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

Esta skill orienta a **defesa técnica** nos crimes contra a Administração Militar tipificados no **Código Penal Militar** (Decreto-Lei 1.001/1969), com centro de gravidade no **peculato militar (art. 303)** e irradiação para concussão, corrupção passiva e ativa, prevaricação e falsidades castrenses. É material de **defesa** (advocacia/Defensoria) perante a **Justiça Militar** — da União (STM/auditorias militares) ou Estadual (TJM/Juízo Militar), conforme o agente e o vínculo.

> **Lição central:** antes de discutir tese de mérito, resolva **duas portas de entrada**: (1) o fato é **crime militar** (subsome ao **art. 9º do CPM**)? e (2) o objeto é **bem afeto à Administração Militar**? Se a resposta a qualquer delas for negativa, a defesa **não briga no mérito do 303** — ela ataca a **competência** (deslocamento à Justiça comum, com aplicação do **CP, art. 312**) ou a **atipicidade castrense**. Errar a porta é gastar munição no alvo errado.

> **Cautela de vigência (obrigatória antes de citar):** o CPM é de 1969 e convive com a **CF/88**, com a **EC 45/2004** (competência da Justiça Militar estadual) e com a **Lei 13.491/2017**, que **ampliou o conceito de crime militar** (art. 9º, II, do CPM passou a alcançar também crimes previstos na legislação penal comum quando praticados nas condições do inciso). Confira a **redação vigente** dos arts. 9º, 303 a 334 do CPM e a competência aplicável **antes de fundamentar**. Todo dispositivo, súmula, tema ou acórdão passa **obrigatoriamente** pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` — **omitir vence inventar**.

---

## Duas portas de entrada (resolver ANTES do mérito)

### Porta 1 — É crime militar? (art. 9º do CPM)

O art. 9º define **em que condições** um fato é crime militar. A defesa sempre confere:

- **Crime propriamente militar** (só o militar pode cometer, previsto só no CPM) × **impropriamente militar** (também previsto na lei comum, mas cometido nas circunstâncias do art. 9º). O **peculato do art. 303** é crime **impropriamente militar** — tem correspondente no CP (art. 312), e o que o torna militar são as circunstâncias do art. 9º (agente militar em situação de atividade, contra o patrimônio sob administração militar, em lugar sujeito à administração militar etc.).
- **Ratio da competência:** o que atrai a Justiça Militar não é o "uniforme" do réu, e sim a **subsunção às hipóteses do art. 9º**. Faltando a circunstância militar (ex.: militar da reserva agindo como particular; bem que não é da Administração Militar), **desloca-se à Justiça comum** — e a imputação passa a ser pelo **CP, art. 312**, não pelo CPM.
- **Lei 13.491/2017:** ampliou o inciso II para abranger crimes da legislação penal comum praticados nas condições do art. 9º. **Confirme o alcance atual** e eventual jurisprudência de sobreposição (competência) antes de sustentar tese.

> **Tese defensiva de competência:** demonstrar a **ausência de uma das circunstâncias do art. 9º** → o fato **não é crime militar** → **incompetência absoluta** da Justiça Militar → nulidade e remessa à Justiça comum (com a moldura mais favorável, se houver, do CP e de institutos despenalizadores indisponíveis no rito castrense — ver adiante).

### Porta 2 — O bem é afeto à Administração Militar? (elemento normativo do tipo)

O **peculato militar (303)** exige que o objeto material — dinheiro, valor ou bem móvel — esteja **sob a administração militar** e sob a **posse do militar em razão do cargo**. Se o bem **não é afeto** à Administração Militar (ex.: verba não incorporada, bem particular, valor que não ingressou no erário militar), falta **elemento normativo do tipo** → **atipicidade**. Este é um ataque **de mérito** distinto do de competência: aqui não se muda o juízo, afasta-se o próprio crime militar.

---

## Base legal (CPM — Decreto-Lei 1.001/69)

- **Art. 9º** — define o crime militar (portas de competência; Lei 13.491/17 ampliou o inciso II).
- **Art. 303** — **Peculato**: apropriar-se de dinheiro, valor ou bem móvel, público ou particular, de que tem a posse ou detenção em razão do cargo, ou desviá-lo em proveito próprio ou alheio.
  - **§1º** — equipara quem, embora não tendo a posse, subtrai ou concorre para a subtração (aproxima-se do **peculato-furto**).
  - **§2º** — **peculato-furto** (subtração com facilidade da qualidade de militar/funcionário).
  - **§3º** — **peculato culposo**: concorrer culposamente para o crime de outrem.
  - **§4º** — **reparação do dano no peculato culposo**: a reparação **antes da sentença irrecorrível extingue a punibilidade**; se **posterior**, **reduz de metade** a pena. (Traço próprio do regime castrense — ver quadro adiante.)
- **Art. 304** — peculato mediante aproveitamento do erro de outrem (**peculato-estelionato**).
- **Art. 305** — **Concussão** (exigir vantagem indevida).
- **Art. 306** — excesso de exação. **Art. 307** — desvio.
- **Art. 308** — **Corrupção passiva** (militar/funcionário que recebe/aceita/solicita vantagem).
- **Art. 309** — **Corrupção ativa** (particular que oferece/promete).
- **Arts. 311 a 318** — **falsidades castrenses** (falsificação de documento, certidão, uso de documento falso, supressão de documento no âmbito militar).
- **Art. 319** — **Prevaricação** (retardar/deixar de praticar ato de ofício, ou praticá-lo contra disposição de lei, para satisfazer interesse/sentimento pessoal).
- **Art. 322** — **Condescendência criminosa** (deixar de responsabilizar subordinado).
- **Arts. 323 a 334** — demais crimes contra a Administração Militar (usurpação, desacato a superior/militar, resistência, e figuras correlatas). **Confirmar numeração e redação vigentes** no CPM antes de citar dispositivo específico.

> **Regra prática:** o CPM tem **numeração própria** e não coincide com o CP. Nunca transponha "art. 312 = peculato" do CP para o CPM. No CPM, peculato é **303**; corrupção passiva é **308**; concussão é **305**. Confirme cada número na fonte oficial.

---

## Peculato militar (303) × Peculato comum (CP 312) — o quadro decisivo

| Aspecto | Peculato **militar** (CPM 303) | Peculato **comum** (CP 312) |
|---|---|---|
| **Sujeito ativo** | Militar (em atividade, nas condições do art. 9º) — e o funcionário a serviço da administração militar | Funcionário público (CP, art. 327) |
| **Objeto** | Bem **afeto à Administração Militar** | Bem sob a Administração Pública em geral |
| **Competência** | Justiça **Militar** (União ou Estadual) | Justiça **comum** |
| **Peculato culposo + reparação** | Reparação **antes** da sentença irrecorrível **extingue a punibilidade**; **depois**, reduz de metade (CPM 303, §4º) | Reparação antes da sentença irrecorrível extingue; depois, reduz de metade (CP 312, §3º) — **redação análoga**, mas confira |
| **Despenalizadores** | Rito castrense: **cautela** com transação/ANPP (aplicabilidade discutida) — ver adiante | ANPP (CPP 28-A), suspensão condicional do processo (L. 9.099), a depender da pena |

**Consequência estratégica:** se a defesa **desloca** o caso para o **CP 312** (afastando o art. 9º), pode **abrir a porta** de institutos despenalizadores (ANPP, susp. condicional) que a jurisprudência tradicionalmente **restringe** no âmbito militar. Esse é, muitas vezes, o **maior ganho prático** da tese de competência. **Confirme a jurisprudência atual** sobre despenalizadores na Justiça Militar via `jurisprudencia-stj-stf` — é ponto sensível e em evolução.

---

## Roteiro de defesa por figura típica

### Peculato próprio (303, caput) — apropriação/desvio

Teses típicas de defesa, na ordem de ataque:

1. **Incompetência (art. 9º)** — ausência da circunstância militar → Justiça comua → CP 312 (ver Porta 1).
2. **Atipicidade objetiva** — bem **não afeto** à Administração Militar; ou **inexistência de posse/detenção em razão do cargo** (o militar precisa ter a posse *em razão do cargo*, não a mero acesso de fato).
3. **Ausência de dolo de apropriação (animus rem sibi habendi)** — uso momentâneo, empréstimo, extravio, erro administrativo, ausência de proveito próprio ou alheio. **Mero descontrole contábil não é peculato doloso.**
4. **Peculato de uso** — o uso temporário de coisa **infungível** com devolução, sem ânimo de apropriação definitiva, **não configura** peculato doloso (afasta o *animus*). Distinga bem **fungível** (dinheiro) de **infungível** (equipamento) na tese.
5. **Desclassificação para peculato culposo (§3º)** — se houve concurso **culposo** para o crime de outrem, com a chave da **reparação** (§4º): extinção da punibilidade se reparado antes da sentença irrecorrível.
6. **Insignificância** — controvertida no âmbito militar (a tutela é também da **hierarquia e disciplina**); sustentar com cautela e só em valor ínfimo, checando a jurisprudência atual (tende a ser **rejeitada** em crimes militares que ofendam a Administração Militar). [NÃO VERIFICADO — conferir posição atual de STM/STJ/STF via `jurisprudencia-stj-stf`.]

### Peculato-furto (303, §1º e §2º)

- Ataca-se a **subtração** e o **aproveitamento da facilidade** da qualidade de militar. Tese: **não houve facilitação decorrente do cargo** (o agente subtraiu como qualquer particular o faria) → afasta a figura qualificada, podendo recair em **furto** comum (deslocando competência/tipo).
- Verificar **coautoria/participação**: o §1º alcança quem concorre para a subtração — discutir **domínio do fato** e a efetiva contribuição.

### Peculato culposo (303, §3º) e a reparação (§4º)

> **A chave-mestra da defesa culposa.** No **peculato culposo**, a **reparação integral do dano ANTES da sentença irrecorrível EXTINGUE a punibilidade** (CPM 303, §4º). Se a reparação for **posterior**, **reduz a pena de metade**. **Providencie a reparação o quanto antes** e documente-a nos autos — é, com frequência, o desfecho mais favorável e concreto.

Passos: (a) desclassificar de doloso para culposo (afastar o *animus* de apropriação); (b) comprovar a **reparação integral** (não parcial) e sua **data** frente ao trânsito em julgado; (c) requerer a **extinção da punibilidade** (antes) ou a **redução de metade** (depois).

### Concussão (305) e corrupção passiva (308)

- **Concussão (305):** exige **exigir** (imposição, constrangimento). Tese: houve, no máximo, **solicitação/recebimento** (corrupção passiva, 308) — pena e configuração distintas; ou o ato foi **devido** e a "exigência" inexistiu.
- **Corrupção passiva (308):** exige **vínculo entre a vantagem e o ato de ofício** (ainda que futuro/omitido). Tese: **ausência de nexo funcional** (a vantagem não se liga a ato do cargo) → atipicidade; ou **ausência de dolo** (recebimento por causa lícita).
- **Corrupção ativa (309):** para o **particular** — discutir a **bilateralidade** e o **oferecimento efetivo** (mera cogitação/ato preparatório não basta).

### Prevaricação (319) e condescendência criminosa (322)

- **Prevaricação (319):** o núcleo é o **elemento subjetivo especial** — agir "para satisfazer **interesse ou sentimento pessoal**". Tese central da defesa: **ausência do fim especial** (o ato/omissão decorreu de erro, sobrecarga, dúvida jurídica, orientação superior, e **não** de interesse/sentimento pessoal). Sem esse dolo específico, **não há prevaricação**.
- **Condescendência criminosa (322):** deixar de responsabilizar subordinado por indulgência. Tese: **inexistência de infração a apurar**, ou **encaminhamento** regular do caso à autoridade competente (afasta a omissão típica).

### Falsidades castrenses (arts. 311 a 318)

- Discutir **potencialidade lesiva** (falso grosseiro/inócuo é atípico), **materialidade** (perícia documentoscópica — dialogar com a skill de **cadeia de custódia**/prova pericial) e **autoria** (quem produziu × quem apenas usou). Em **uso de documento falso**, discutir o **dolo de uso** e o **conhecimento** da falsidade.
- **Consunção/absorção:** se a falsidade é **meio** para o peculato e se **exaure** nele, sustentar a **absorção** (princípio da consunção) para evitar dupla incidência. [NÃO VERIFICADO — conferir a orientação atual sobre consunção falso/peculato no âmbito militar via `jurisprudencia-stj-stf`.]

---

## Teses transversais (valem para várias figuras)

1. **Incompetência da Justiça Militar (art. 9º)** — a mais potente: reclassifica o crime, muda o juízo e pode destravar despenalizadores.
2. **Atipicidade por elemento normativo** — bem não afeto à Administração Militar; ausência de posse em razão do cargo; ato devido.
3. **Ausência de dolo** — geral (apropriação) ou **específico** (prevaricação/concussão) — o vício subjetivo derruba o tipo.
4. **Desclassificação para modalidade culposa** (quando cabível) + **reparação** (303, §4º) → extinção/redução.
5. **Nulidades próprias do processo penal militar** — cerceamento de defesa, vícios do IPM (inquérito policial militar), cadeia de custódia da prova, participação do Conselho de Justiça, ausência de fundamentação. Dialogar com skills de **nulidades** e **cadeia de custódia**.
6. **Prescrição** — regime do CPM (arts. 123 e seguintes) tem **particularidades**; **não** aplicar automaticamente os prazos do CP. Para o cálculo, siga o **método** da skill de prescrição e use a **`calculadora-prescricao`** (conferindo se ela cobre o regime do **CPM**; se não cobrir, marque **[calculadora a implementar com testes para o regime do CPM]** e faça o cálculo manual conferido).
7. **Dosimetria** — pena do CPM segue os **arts. 69 e seguintes do CPM** (circunstâncias próprias). Descreva o método e aponte para a **`calculadora-dosimetria`**, verificando se contempla o regime militar; do contrário, marque **[calculadora a implementar/ajustar para o CPM]**.

---

## Contra-teses (o que a acusação sustentará) — antecipe

- **Competência militar mantida** — presença das circunstâncias do art. 9º; a Lei 13.491/17 **reforça** a jurisdição militar em vários cenários.
- **Bem afeto à Administração Militar** — ainda que de origem particular, uma vez sob guarda/administração militar, integra o objeto do 303.
- **Dolo demonstrado** — apropriação/desvio evidenciados por prova documental e contábil; afastamento do "erro administrativo".
- **Insignificância inaplicável** — a tutela penal militar protege também **hierarquia e disciplina**, não apenas o valor patrimonial.
- **Reparação irrelevante no doloso** — o §4º só extingue no **culposo**; no doloso, a reparação é, no máximo, atenuante/arrependimento (discutir).

A defesa deve **preparar resposta** a cada uma, ancorada no caso concreto e na jurisprudência **verificada**.

---

## Súmulas, precedentes e temas (todos sob o Citation Gate)

> **NÃO cite nenhum número de HC/REsp/RE, informativo ou tema sem verificação.** Ensine a **tese** e cite o **dispositivo**; para qualquer acórdão específico, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` / gate `verificacao-citacoes`.

- **Competência (art. 9º; Lei 13.491/17):** há jurisprudência do **STF e do STJ** sobre a fronteira Justiça Militar × comum e sobre o alcance da Lei 13.491/17. **[NÃO VERIFICADO — conferir os leading cases e a orientação vigente.]**
- **Súmula 90 do STJ** — trata de conexão/competência envolvendo crime militar e comum. **[CONFERIR o enunciado exato e a atualidade via `jurisprudencia-stj-stf` antes de invocar.]**
- **Insignificância em crime militar:** orientação predominante é **restritiva**. **[NÃO VERIFICADO — conferir posição atual de STM/STJ/STF.]**
- **ANPP/transação penal na Justiça Militar:** aplicabilidade **discutida e restringida** pela jurisprudência tradicional. **[NÃO VERIFICADO — conferir evolução recente; é ponto em disputa.]**
- **Consunção falso × peculato:** verificar a orientação aplicável ao regime militar. **[NÃO VERIFICADO.]**

Dispositivos que se pode afirmar com segurança (sempre reconferindo a redação vigente): **CPM, arts. 9º, 303 (§§1º-4º), 304, 305, 308, 309, 319, 322**; **CF, art. 5º (devido processo, ampla defesa), arts. 124 e 125, §4º (competência da Justiça Militar da União e Estadual)**; **CP, art. 312** (para o deslocamento à Justiça comum).

---

## Erros comuns e checklist

**Anti-padrões (evitar):**

- **Confundir a numeração** do CPM com a do CP (peculato é **303** no CPM, não 312).
- **Ir ao mérito do 303** sem antes checar as **duas portas** (art. 9º e bem afeto à Administração Militar).
- **Aplicar a prescrição do CP** ao crime militar (o CPM tem regime próprio — arts. 123 e ss.).
- **Confundir concussão (305) com corrupção passiva (308)** — "exigir" × "solicitar/receber" mudam o tipo e a pena.
- **Esquecer a reparação do peculato culposo (§4º)** — extingue a punibilidade se **antes** da sentença irrecorrível; providenciar e documentar cedo.
- **Sustentar insignificância** no militar sem cautela e sem verificar a jurisprudência restritiva.
- **Deixar de explorar o deslocamento à Justiça comum** quando ele abre despenalizadores (ANPP/suspensão).
- **Citar acórdão de memória** — todo precedente passa pelo gate `verificacao-citacoes`.

**Checklist de defesa:**

- [ ] **Porta 1 — art. 9º:** todas as circunstâncias que tornam o fato **crime militar** estão presentes? (Se não, arguir **incompetência** e remessa à Justiça comum → CP 312.)
- [ ] **Porta 2 — objeto:** o bem é **afeto à Administração Militar** e havia **posse em razão do cargo**? (Se não, **atipicidade**.)
- [ ] **Figura típica correta** identificada e confrontada com a denúncia (peculato próprio/furto/culposo; concussão × corrupção; prevaricação; falsidade)?
- [ ] **Dolo** (geral e/ou específico) efetivamente demonstrado pela acusação — ou há espaço para **erro/culpa/ausência de fim especial**?
- [ ] **Peculato culposo?** Reparação **integral** providenciada e **datada** frente ao trânsito em julgado (§4º)?
- [ ] **Deslocamento à Justiça comum** abre **ANPP/suspensão condicional**? (Verificado.)
- [ ] **Nulidades do IPM / do rito castrense** mapeadas (cadeia de custódia, Conselho de Justiça, fundamentação)?
- [ ] **Prescrição** conferida pelo **regime do CPM** (não do CP) — método/calculadora conferidos?
- [ ] **Dosimetria** pelos **arts. 69 e ss. do CPM** — método/calculadora conferidos?
- [ ] **Todas as súmulas/precedentes/temas** passaram por `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado(a) responsável antes de protocolar?

---

## Lembretes finais

- **Duas portas antes do mérito:** art. 9º (é crime militar?) e bem afeto à Administração Militar (o objeto se subsome?).
- **Numeração é do CPM:** peculato **303**, concussão **305**, corrupção passiva **308**, ativa **309**, prevaricação **319**.
- **Peculato culposo + reparação (§4º):** extinção da punibilidade se **antes** da sentença irrecorrível — a saída mais concreta.
- **Deslocar à Justiça comum** (CP 312) pode ser o **maior ganho prático** (despenalizadores) — sempre avaliar.
- **Prescrição e dosimetria** seguem o **CPM**, não o CP — conferir método e calculadoras.
- **Citation Gate inegociável:** dispositivo e tese com certeza; **acórdão/tema/informativo só verificado** — na dúvida, omitir.

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação da defesa**, sujeito à **revisão humana obrigatória** — não substitui o juízo do(a) profissional nem a leitura integral dos autos e da denúncia. A responsabilidade pela peça e pelas teses é sempre do(a) **advogado(a)/Defensor(a)** (CED/OAB; **Provimento 205/2021**; **LC 80/94** para a Defensoria). **Skill de polo de DEFESA** — se o pedido for do **polo acusatório** (MP Militar/assistente), o roteador deve conferir o polo e selecionar skill acusatória compatível. Toda citação de súmula, precedente, tese ou tema é **hipótese a confirmar** e passa **obrigatoriamente** pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` antes de uso (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
