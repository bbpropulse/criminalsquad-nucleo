---
name: defesa-concussao-excesso-exacao
description: >-
  Use ao DEFENDER concussão (CP 316, caput) ou excesso de exação e desvio de tributo (§§1º e 2º) —
  teses de distinção entre EXIGIR e solicitar (fronteira com corrupção passiva, CP 317), ausência do
  metus publicae potestatis, atipicidade quando a vantagem é devida, ausência de nexo funcional,
  desclassificação para corrupção passiva ou para os §§ do 316. Gatilhos: concussão, CP 316, exigir
  vantagem indevida, excesso de exação… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, administracao-publica, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-concussao-excesso-exacao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-concussao-excesso-exacao", "defesa concussao", "excesso exacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Concussão e Excesso de Exação (CP, art. 316 e §§)

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

Esta skill orienta a **defesa técnica** nos crimes do **art. 316 do Código Penal**: a **concussão** (*caput*), o **excesso de exação** (§1º) e o **desvio de tributo/contribuição** (§2º). O eixo defensivo é sempre um de três: **atipicidade** (a vantagem era devida, faltou o nexo funcional, ou não houve o temor da autoridade), **desclassificação** (o verbo não era *exigir* — era *solicitar/receber*, deslocando para corrupção passiva, CP 317, de pena menor no §2º), ou a **redução da imputação** dentro do próprio 316. Toda entrega é **rascunho técnico sob revisão humana obrigatória**.

> **Lição central:** o crime de concussão vive do verbo **EXIGIR** somado ao **metus publicae potestatis** — o *temor reverencial da autoridade* que constrange a vítima. Se a conduta descrita foi **solicitar, receber ou aceitar** (e não impor), o caso é **corrupção passiva (317)**, não concussão — e a defesa deve **atacar a capitulação pelo verbo concreto narrado**, não pelo rótulo da denúncia. Concussão sem *exigência* impositiva, ou com vantagem **devida**, é fato atípico ou desclassificável. Classifique a conduta descrita **antes** de discutir prova.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** do art. 316 do CP e §§, a pena da concussão (majorada pela **Lei 10.763/2003**) e o conceito de **funcionário público (art. 327 e §§)**. Confira **súmulas, temas repetitivos e overruling** via o agente `jurisprudencia-stj-stf` e a redação legal via `lei-e-sumula` **antes** de fundamentar. Nenhum precedente, informativo ou número de acórdão entra na peça sem passar pelo **gate de `verificacao-citacoes`** — há sanções reais por jurisprudência inventada por IA.

---

## Base legal — mapa do art. 316

| Figura | Dispositivo | Núcleo / elementar decisiva |
|---|---|---|
| **Concussão** | CP 316, *caput* | **Exigir**, para si ou para outrem, direta ou indiretamente, ainda que **fora da função** ou **antes de assumi-la**, mas **em razão dela**, **vantagem indevida** |
| **Excesso de exação** | CP 316, §1º | Funcionário que **exige tributo ou contribuição social que sabe ou deveria saber indevido**, ou, quando devido, **emprega na cobrança meio vexatório ou gravoso** que a lei não autoriza |
| **Desvio de tributo (forma agravada)** | CP 316, §2º | Funcionário que **desvia**, em proveito próprio ou de outrem, o que **recebeu indevidamente** a título de tributo/contribuição — pena mais grave (reclusão de 2 a 12 anos, conferir redação) |
| **Funcionário público (conceito)** | CP 327 e §§ | Quem exerce cargo/emprego/função pública, ainda que transitoriamente e sem remuneração (**equiparação** no §1º; **causa de aumento** do §2º p/ dirigentes) — elementar do tipo |

> **Diferença de pena importa.** A concussão (*caput*) e o excesso de exação na modalidade *exigir* têm pena distinta do **desvio do §2º**, que é a figura **mais grave** do artigo. Confira os patamares na **redação vigente** — a defesa pode ter interesse em **desclassificar para figura menos grave** (por exemplo, do §2º para o §1º, ou do 316 para o 317). Todo patamar de pena e prescrição usado na peça passa por `lei-e-sumula` / calculadora, nunca de memória.

---

## Os três verbos que decidem o caso (a fronteira típica)

A defesa em 316 se ganha, na maioria das vezes, **capitulando corretamente a conduta narrada**. O quadro abaixo é a espinha dorsal:

| Conduta descrita | Tipo | Consequência defensiva |
|---|---|---|
| **EXIGIR** (impor, ordenar, com peso da função) | **Concussão** (316) | É a imputação a combater — questione se houve *exigência* impositiva ou mero pedido |
| **SOLICITAR / RECEBER / ACEITAR promessa** | **Corrupção passiva** (317) | **Desclassificação** — verbo bilateral, sem imposição; §2º do 317 (privilegiada) é ainda menor |
| **EXIGIR mediante violência/grave ameaça** de mal injusto **alheio à função** | **Extorsão** (158) | Fronteira oposta — a acusação às vezes infla; a defesa distingue o mal injusto estranho à função |
| Vantagem **DEVIDA** exigida (ainda que com abuso na forma) | Atipicidade da concussão | Pode restar excesso de exação (§1º, *meio vexatório*) ou ilícito administrativo — não concussão |

> **A charneira concussão × corrupção passiva.** É o ponto nevrálgico e a razão de existir desta skill (o `distinct_from` da spec). A concussão é **unilateral e impositiva** — o funcionário **exige** e a vítima cede pelo **temor da autoridade** (*metus publicae potestatis*), sem margem real de recusa. A corrupção passiva é **bilateral e negocial** — há **solicitação/oferta** e um espaço de barganha; a "vítima" é, em regra, **coautora** de corrupção ativa (333). **Se a narrativa revela negociação, contraproposta, iniciativa do particular ou ausência de imposição, o caso é 317 — não 316.** Como a pena da concussão tende a ser mais gravosa que a da corrupção passiva privilegiada (317, §2º), a desclassificação é **materialmente favorável**.

> **O *metus publicae potestatis* é elementar implícita.** Não basta que um funcionário peça vantagem: a concussão pressupõe que a **exigência** opere pelo **medo/constrangimento decorrente da própria autoridade** — a vítima cede porque teme o poder do agente, não por conluio. Sem esse temor (ex.: a "vítima" é comparsa, agiu por interesse próprio, ou tinha plena liberdade para recusar), a tipicidade da concussão fica comprometida — abrindo desclassificação para 317 ou atipicidade.

---

## Roteiro de análise e defesa por eixo

### Eixo 1 — Atipicidade

Antes de discutir prova, teste se o **fato narrado** preenche o tipo. Falhando qualquer elementar, é **atipicidade** (absolvição, CPP 386, III) ou trancamento (HC/rejeição da denúncia por inépcia/falta de justa causa).

1. **A vantagem exigida era INDEVIDA?** Se a vantagem/tributo era **devida**, não há concussão (*caput*). No excesso de exação, a cobrança de tributo **devido** só é típica se por **meio vexatório/gravoso não autorizado** (§1º, 2ª parte) — a mera cobrança regular do que se deve é atípica.
2. **Havia NEXO com a função?** A exigência tem de decorrer do **exercício do poder funcional** (mesmo fora dele ou antes de assumi-lo, mas *em razão dele*). Vantagem ligada a **relação privada paralela** ao cargo não é concussão — pode ser outro crime ou fato atípico penalmente.
3. **O agente é funcionário público (CP 327)?** Elementar do tipo. Cheque o vínculo e o **marco temporal** (perda da condição antes/depois do fato altera a tipicidade). Discuta equiparação (§1º) e afaste a causa de aumento do 327, §2º, quando indevidamente aplicada.
4. **Houve EXIGÊNCIA impositiva (com *metus*)?** Se a conduta foi **pedir/aceitar**, falta a elementar *exigir* — desclassifica para 317. Se não houve constrangimento pela autoridade, questione o *metus publicae potestatis*.
5. **Excesso de exação — o tributo era "sabidamente indevido"?** O §1º exige que o funcionário **sabia ou deveria saber** indevido. **Erro sobre a legitimidade da cobrança** (interpretação plausível de norma tributária) pode afastar o dolo — sustente **erro de tipo/erro de proibição** conforme o caso.

### Eixo 2 — Desclassificação (a jogada mais frequente)

1. **316 → 317 (corrupção passiva):** demonstre que **não houve imposição** — houve pedido, aceite, negociação ou iniciativa do particular. É a tese central. Se cabível, avance para a **forma privilegiada do 317, §2º** (cedeu a pedido de terceiro sem receber). **Atenção:** a desclassificação para 317 pode implicar reconhecer a **coautoria da "vítima" em corrupção ativa (333)** — pondere a estratégia (nem sempre interessa ao conjunto probatório da defesa).
2. **316, §2º → §1º (ou → *caput*):** o desvio do §2º é a figura **mais grave**; se a prova revela **exigência** (não **desvio** do já recebido), o caso pode ser do *caput* ou do §1º — de pena menor.
3. **158 (extorsão) → 316:** quando a acusação capitula extorsão, a defesa pode ter interesse **inverso** — sustentar concussão (mal ligado à função, sem violência/grave ameaça de mal injusto estranho ao cargo), tipo em regra menos grave que a extorsão. Avalie caso a caso qual capitulação favorece.
4. **Consumação e tentativa:** a concussão consuma-se com a **exigência** (crime formal — independe do recebimento da vantagem). Discuta **tentativa** quando a exigência não chegou ao conhecimento da vítima, e afaste a punição por *recebimento* como se fosse elementar (não é — o recebimento é mero exaurimento).

### Eixo 3 — Dosimetria e efeitos (se a condenação é inevitável)

1. **Atacar a base** — afastar circunstâncias judiciais (CP 59) valoradas de forma genérica; impedir bis in idem entre elementares e agravantes.
2. **Causa de aumento do 327, §2º** — só incide para **ocupante de cargo em comissão/função de direção** em entidades específicas; afaste se o réu não se enquadra.
3. **Perda do cargo (CP 92, I) NÃO é automática** — exige **declaração motivada** e pedido; sem fundamentação da alínea (pena ≥ 1 ano com abuso/violação de dever, ou > 4 anos), a perda decretada é **anulável**. Ataque a decretação automática.
4. **ANPP (CPP 28-A)** — quando a pena mínima for **inferior a 4 anos** e o crime **sem violência ou grave ameaça**, o acordo de não persecução é **cabível em tese**; a concussão do *caput* pode qualificar-se. Verifique os requisitos e **postule o ANPP** se presentes (a recusa imotivada do MP é revisável — CPP 28-A, §14). Confira patamares e requisitos vigentes via `lei-e-sumula`.
5. **Prescrição** — calcule pela **pena aplicada** (PPP) ou máxima em abstrato conforme a fase; o **desvio do §2º** tem pena alta e prazo maior. Use a **calculadora de prescrição** (`calculadora-prescricao`) — nunca calcule prazo de cabeça.

---

## Teses e contra-teses (por eixo)

Domine o argumento acusatório para blindar a defesa — quadro útil nos dois polos.

- **"Foi mero pedido, não exigência" (316 → 317).**
  - *Defesa:* a narrativa não descreve **imposição** nem *metus*; houve solicitação/negociação → **corrupção passiva** (317), eventualmente privilegiada (§2º).
  - *Acusação:* o *exigir* pode ser **implícito/indireto** (CP 316 admite exigência "direta ou indiretamente"); o peso da função por si constrange. → *Resposta da defesa:* exigência indireta ainda é **imposição**, não pedido; distinga o gesto que **constrange** do que apenas **propõe**.

- **"A vantagem era devida" (atipicidade da concussão).**
  - *Defesa:* exigir o que é **devido** não é concussão; no máximo, excesso de exação por meio vexatório (§1º) ou ilícito administrativo.
  - *Acusação:* a vantagem cobrada extrapolava o devido / não tinha causa lícita. → *Resposta da defesa:* ônus de demonstrar o caráter **indevido** é da acusação (in dubio pro reo); cobrança amparada em interpretação plausível de norma afasta o dolo.

- **"Faltou o nexo funcional."**
  - *Defesa:* a exigência ligava-se a **relação privada**, não ao exercício da função → atipicidade da concussão.
  - *Acusação:* a vantagem, sem causa lícita e contemporânea a ato do cargo, lastreia o nexo. → *Resposta da defesa:* proximidade temporal não supre a **descrição concreta** do poder funcional mercadejado; genérico é inépcia.

- **"A vítima era coautora / não sofreu temor."**
  - *Defesa:* sem *metus publicae potestatis* (a "vítima" agiu por interesse, negociou, tinha liberdade de recusa) → não é concussão; é corrupção (bilateral).
  - *Acusação:* o temor é presumido do poder do agente. → *Resposta da defesa:* o temor é **elementar a comprovar**, não presunção; havendo barganha, a bilateralidade descaracteriza o *caput*.

- **"Excesso de exação: não sabia indevido."**
  - *Defesa:* o §1º exige o funcionário que **sabe ou deveria saber** indevido; **erro** sobre a legitimidade da cobrança afasta o dolo (erro de tipo).
  - *Acusação:* o dever funcional impunha conhecer a ilegitimidade. → *Resposta da defesa:* norma tributária controvertida/plausível ≠ ilegitimidade "sabida"; sem dolo, não há tipo.

- **"Perda do cargo automática."**
  - *Defesa:* a perda (CP 92, I) **não é automática**; exige pedido e **declaração motivada** com a alínea; sem isso, é anulável.
  - *Acusação:* o abuso de poder é ínsito ao crime funcional. → *Resposta da defesa:* a motivação é **requisito de validade**, não formalidade — a sentença tem de declará-la, sob pena de nulidade do efeito.

---

## Nulidades e questões processuais próprias

- **Inépcia da denúncia (CPP 41):** denúncia que narra o pagamento/vantagem **sem descrever a exigência impositiva, o ato funcional e o nexo** é inepta — a defesa argui **rejeição** (CPP 395, I) ou, recebida, **absolvição sumária/HC trancativo** por falta de justa causa. "Exigência genérica do cargo" não individualiza a conduta.
- **Capitulação equivocada:** embora vigore o *iura novit curia* e a defesa se defenda dos **fatos** (não da capitulação), a **emendatio/mutatio** (CPP 383/384) tem regras próprias — se a instrução revela conduta diversa (pedido, não exigência), a defesa provoca o **reconhecimento da desclassificação** já nas alegações finais, e a **mutatio** exige aditamento e contraditório quando surge fato novo.
- **Competência:** havendo autoridade com **foro por prerrogativa de função**, ou lesão a bem/serviço/interesse da União (CF 109), confira o juízo competente — endereçamento errado gera nulidade. **Alcance atual do foro** vai por `jurisprudencia-stj-stf` [NÃO VERIFICADO].
- **Cadeia de custódia da prova:** interceptação, quebra de sigilo e apreensão digital que lastreiam a acusação abrem preliminar — apoie-se em `cadeia-custodia-prova`. Prova ilícita contamina a exigência que dela deriva.
- **Provas de gravação ambiental/telefônica** feitas pela "vítima": discuta licitude e contexto (a jurisprudência oscila conforme a autoria e a expectativa de privacidade) — passe por `jurisprudencia-stj-stf` [NÃO VERIFICADO].

---

## Súmulas, precedentes e balizas (todos sob o Citation Gate)

Cite dispositivos de lei com certeza; **qualquer** número de HC/REsp/RE, informativo ou tema vai **[NÃO VERIFICADO]** até a validação via `jurisprudencia-stj-stf` + `verificacao-citacoes`. Prefira ensinar a **tese e o dispositivo** a arriscar um acórdão.

- **Dispositivos citáveis com certeza:** CP 316 (*caput*, §§1º e 2º); CP 317 (corrupção passiva e §2º privilegiado); CP 327 e §§ (funcionário público e equiparação/aumento); CP 158 (extorsão, para a distinção); CP 92, I (perda do cargo — não automática); CPP 41, 383, 384, 386, 395; CPP 28-A (ANPP).
- **Distinção concussão × corrupção × extorsão:** é **doutrina e jurisprudência consolidadas**, mas **não afirme número de acórdão de memória** — sustente a tese pelo **verbo típico** e confira o precedente concreto no gate.
- **Perda do cargo não automática (CP 92, I):** entendimento **notório** de que exige motivação; o **precedente específico** que o afirma vai pelo gate [NÃO VERIFICADO].
- **Insignificância nos crimes funcionais:** orientação predominantemente **restritiva** (bem jurídico = moralidade administrativa) — **não afirme aplicação nem vedação automática**; confira súmula/tema atual [NÃO VERIFICADO].
- **Recusa imotivada de ANPP:** o CPP 28-A, §14 prevê revisão; o alcance atual do controle judicial/ministerial vai por `jurisprudencia-stj-stf` [NÃO VERIFICADO].

---

## Estrutura da peça defensiva (resposta à acusação / alegações finais)

Use a estrutura-base das skills de peça (`resposta-acusacao`, `alegacoes-finais-defesa`). O que é **próprio** do 316:

```
I — PRELIMINARES (quando cabíveis)
   • Inépcia da denúncia (CPP 41/395, I): ausência de descrição da EXIGÊNCIA
     impositiva, do ato funcional e do nexo — pedir rejeição/trancamento.
   • Nulidades da prova (cadeia de custódia; interceptação; gravação ambiental).
   • Incompetência (foro por prerrogativa; Justiça Federal — CF 109).

II — DO MÉRITO — ATIPICIDADE
   • Vantagem DEVIDA (afasta o caput) OU ausência de nexo funcional
     OU ausência de metus publicae potestatis.
   • Excesso de exação (§1º): erro sobre a legitimidade do tributo (afasta dolo).
   • Condição de funcionário público (327): marco temporal; afastar aumento do §2º
     se indevido.

III — DA DESCLASSIFICAÇÃO (subsidiária)
   • 316 (caput) → 317 (corrupção passiva): a conduta foi SOLICITAR/ACEITAR,
     não exigir — verbo bilateral, sem imposição; eventualmente §2º privilegiado.
   • 316, §2º → §1º / caput: houve exigência, não desvio do já recebido
     (figura menos grave).
   • Ponderar o efeito de reconhecer corrupção ativa (333) da "vítima".

IV — DA DOSIMETRIA (subsidiária)
   • Atacar base genérica (CP 59); afastar 327, §2º; impedir bis in idem.
   • Perda do cargo (92, I): NÃO automática — exigir declaração motivada/afastar.
   • ANPP (28-A) se cabível; prescrição (calculadora-prescricao).

V — DOS PEDIDOS
   • Absolvição (CPP 386, III — atipicidade) ou, subsidiariamente,
     desclassificação para 317 (ou figura menos grave do 316) e dosimetria mínima.
```

**Nas alegações finais:** feche cada eixo com a **prova produzida na instrução** — a exigência foi descrita como imposição ou como pedido? Houve *metus* comprovado? A vantagem era indevida? Amarre a **desclassificação** à prova concreta do verbo. Aplique `redacao-persuasiva-criminal` na redação final.

---

## Erros comuns / checklist antes de protocolar

- [ ] **Verbo típico conferido** — a conduta narrada é *exigir* (316) ou *solicitar/receber/aceitar* (317)? Pedida a desclassificação quando o caso é pedido, não imposição?
- [ ] ***Metus publicae potestatis*** questionado — houve temor da autoridade, ou a "vítima" negociou/tinha liberdade de recusa (bilateralidade → 317)?
- [ ] **Vantagem indevida** — a acusação provou que era indevida? Se devida, arguida a atipicidade da concussão?
- [ ] **Nexo funcional** atacado — a exigência ligava-se ao poder do cargo ou a relação privada?
- [ ] **Excesso de exação (§1º)** — discutido o "sabidamente indevido" e o erro sobre a legitimidade do tributo (afasta dolo)?
- [ ] **§2º (desvio)** — se há exigência (não desvio do recebido), pedida a desclassificação para figura menos grave?
- [ ] **Funcionário público (327)** — marco temporal conferido; aumento do §2º afastado se indevido?
- [ ] **Inépcia/justa causa** — a denúncia descreve a exigência, o ato e o nexo, ou é genérica (CPP 41)?
- [ ] **Perda do cargo (92, I)** — atacada como não automática; exigida declaração motivada?
- [ ] **ANPP (28-A)** e **prescrição** analisados (via `lei-e-sumula` / `calculadora-prescricao`)?
- [ ] **Cadeia de custódia / provas** (interceptação, gravação ambiental) impugnadas quando ilícitas?
- [ ] **Súmulas, temas e acórdãos** pesquisados via `jurisprudencia-stj-stf`, redação legal via `lei-e-sumula`, tudo validado no **gate `verificacao-citacoes`** — nada de memória?

**Anti-padrões (evitar):**
- Aceitar a capitulação da denúncia sem testar o **verbo concreto** narrado (perde-se a desclassificação 316→317).
- Tratar a concussão como consumada só pelo **recebimento** — ela se consuma com a **exigência** (crime formal); recebimento é exaurimento.
- Presumir o *metus publicae potestatis* — é elementar a **questionar**, não a aceitar.
- Confundir a **extorsão** (158, mal injusto estranho à função) com a concussão (mal ligado à função) — pode interessar uma ou outra capitulação.
- Deixar de discutir o **erro sobre a legitimidade do tributo** no excesso de exação (§1º).
- Aceitar a **perda do cargo** como efeito automático, sem exigir motivação (92, I).
- **Citar número de acórdão/informativo de memória** — a fronteira 316×317 é rica em jurisprudência; passe **tudo** pelo gate.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** A peça/parecer é hipótese a confirmar; a revisão final do advogado responsável é indispensável antes de protocolar.
- **Foco em DEFESA.** Esta skill é do **polo defensivo** (advogado sob OAB + Provimento 205/2021 + CED). Se a instituição atuar como **assistente de acusação** ou for de **Ministério Público**, use a skill `acusacao-crimes-administracao-publica` (polo acusatório) — e **o roteador deve conferir o polo** em `_criminalsquad/_memory/company.md` antes de acionar qualquer das duas.
- **Citation Gate inegociável:** nenhuma súmula, tema, informativo ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf` + `lei-e-sumula` e é validado no gate `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Na dúvida, **omitir vence inventar**.
- **Sigilo e LGPD:** dados do assistido nunca em repositório público.

**Skills e agentes de apoio:** `acusacao-crimes-administracao-publica` (tese acusatória — leitura em espelho) · `resposta-acusacao` e `alegacoes-finais-defesa` (estrutura-base das peças) · `anpp` (acordo de não persecução) · `cadeia-custodia-prova` (prova digital/interceptação) · `calculadora-prescricao` (prazo prescricional) · `jurisprudencia-stj-stf` e `lei-e-sumula` (pesquisa e vigência) · `verificacao-citacoes` (gate obrigatório) · `redacao-persuasiva-criminal` (padrão de obra-prima — aplicar SEMPRE na redação final).
