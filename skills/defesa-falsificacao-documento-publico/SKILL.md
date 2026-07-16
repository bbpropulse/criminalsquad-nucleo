---
name: defesa-falsificacao-documento-publico
description: >-
  Use ao defender acusado de falsificar, no todo ou em parte, ou de alterar documento público
  verdadeiro (CP, art. 297, caput e §§ — CNH, RG, CTPS, passaporte, documento previdenciário).
  Explora falso grosseiro / ausência de potencialidade lesiva (atipicidade), consunção do falso pelo
  crime-fim quando nele se exaure (Súmula 17/STJ), documento sem fé pública, falsidade material x
  ideológica, exame documentoscópico e uso x… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica, falso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-falsificacao-documento-publico"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-falsificacao-documento-publico", "defesa falsificacao", "documento publico"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Falsificação de Documento Público (CP, art. 297)

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

Esta skill orienta a **defesa penal do acusado** do crime de **falsificação de documento público** (CP, art. 297): falsificar, no todo ou em parte, documento público, **ou alterar documento público verdadeiro**. É um dos falsos mais imputados na prática (CNH, RG, CTPS, passaporte, guias e documentos previdenciários) e reúne teses defensivas próprias — de atipicidade por falso grosseiro à consunção pelo crime-fim — que não têm cobertura nas skills de estelionato ou de incidente de falsidade.

> **Lição central:** antes de discutir dolo ou pena, **classifique o vício**. Falsidade **material** (adulteração da forma/estrutura do documento — art. 297) é coisa distinta de falsidade **ideológica** (documento formalmente perfeito com conteúdo mentiroso — art. 299). E pergunte sempre três coisas: (1) o documento tem **fé pública** e é apto a enganar? (2) a falsificação é **idônea** para iludir o homem médio ou é **grosseira**? (3) o falso **se esgotou** num único crime-fim (ex.: estelionato) ou tem **potencialidade lesiva autônoma**? A resposta muda a tese — e às vezes a própria tipicidade.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do art. 297 do CP e seus §§ (as figuras equiparadas do §3º e §4º — documentos previdenciários — foram introduzidas pela **Lei 9.983/2000**) e do art. 304 (uso de documento falso). Súmulas, temas repetitivos e overruling — em especial a **Súmula 17/STJ** (consunção do falso pelo estelionato) e a competência (Súmula 546/STJ; competência da Justiça Federal para falso de documento federal) — devem passar pela skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nada de jurisprudência de memória.

## Base legal

- **CP, art. 297, caput** — falsificar, no todo ou em parte, documento público, ou alterar documento público verdadeiro. Pena: **reclusão, 2 a 6 anos, e multa**.
- **CP, art. 297, §1º** — **causa de aumento (1/6)** se o agente é **funcionário público** e comete o crime prevalecendo-se do cargo.
- **CP, art. 297, §2º** — **equiparação a documento público**: o emanado de entidade paraestatal, o título ao portador ou transmissível por endosso, as ações de sociedade comercial, os livros mercantis e o testamento particular.
- **CP, art. 297, §§3º e 4º** — figuras equiparadas relativas a **documentos previdenciários** (folha de pagamento, CTPS, documento de contabilidade, GFIP etc.) — inseridas pela **Lei 9.983/2000**.
- **CP, art. 299** — **falsidade ideológica** (documento formalmente verdadeiro, conteúdo falso) — a *distinguir* do art. 297; a subsunção correta é matéria de defesa.
- **CP, art. 304** — **uso de documento falso**: quem faz uso de documento falsificado responde nas mesmas penas do falso; discutir *quem* fabricou e *quem* usou (autofalso × uso por terceiro).
- **CP, art. 293-294** — falsificação de papéis/selos públicos (tipos vizinhos, para afastamento).
- **CP, art. 70** — concurso formal; **art. 71** — continuidade delitiva (relevante em pluralidade de documentos).
- **CPP, art. 158-A a 158-F** — cadeia de custódia; **art. 159 e 174** — perícia e exame documentoscópico/grafotécnico.

## Passo 0 — a classificação que define tudo

| Pergunta | Se SIM | Se NÃO |
|---|---|---|
| O objeto é **documento** (escrito com autor e conteúdo juridicamente relevante — CP art. 232) e tem **fé pública** / é **público** (ou equiparado, §2º)? | segue no art. 297 | pode ser art. 298 (particular), atipicidade ou tipo diverso |
| O vício é na **forma/estrutura** (adulteração material, montagem, rasura, contrafação)? | **falsidade material** → art. 297 | se só o **conteúdo** é mentiroso em documento formalmente íntegro → **art. 299** (ideológica) |
| A imitação é **idônea** para enganar o homem médio? | crime em tese | **falso grosseiro** → atipicidade (crime impossível, art. 17 CP) |
| A falsificação **se exauriu** num único crime-fim (ex.: estelionato)? | discutir **consunção** (Súmula 17/STJ) | falso com **potencialidade lesiva autônoma** subsiste |

> Errar a classificação é a falha mais comum: acusar como material (297) o que é ideológico (299), ou tratar como público documento sem fé pública. **A subsunção equivocada é, por si, matéria de absolvição ou de desclassificação.**

## Teses defensivas típicas (por ordem de força)

### 1. Falso grosseiro / ausência de potencialidade lesiva → atipicidade
O falso punível é o **idôneo a iludir** o destinatário (o homem médio). A falsificação **grosseira**, perceptível a olho nu, **não tem potencialidade lesiva** e configura **crime impossível** (CP, art. 17) — atipicidade. Argumentar com o **laudo documentoscópico** (papel, fonte, hologramas, chip, brasões, numeração) e com as circunstâncias da apreensão.
- **Tese:** falsificação grosseira, inapta a enganar, não lesiona a fé pública → fato atípico (art. 17 CP).
- **Prova:** exame pericial; fotos do documento; ausência de qualquer engano concreto.
- **Nuance:** parte da jurisprudência entende que, no falso grosseiro que ainda assim ludibria a vítima, pode remanescer **estelionato** (crime impossível quanto ao falso, não quanto à fraude) — antecipe e module o pedido (absolvição do 297; se for o caso, desclassificação). [NAO VERIFICADO — conferir o estado atual do entendimento na skill `jurisprudencia-stj-stf`.]

### 2. Consunção do falso pelo crime-fim (Súmula 17/STJ)
Quando o **falso se esgota** no crime-fim, sem mais potencialidade lesiva, é por ele **absorvido** (princípio da consunção). O caso clássico é o **estelionato** (art. 171): documento falsificado **só** para obter a vantagem indevida.
- **Súmula 17/STJ:** "Quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido." (conferir vigência/aplicação em `jurisprudencia-stj-stf`).
- **Efeito:** afasta a condenação autônoma pelo 297 (que tem pena maior, 2 a 6 anos, do que o estelionato-base) — logo, **beneficia a dosimetria** e pode extinguir a punibilidade do falso pela prescrição própria.
- **Limite (contra-tese acusatória):** se o documento falso **permanece apto** a novas lesões (ex.: CNH falsa que continua em poder do agente, usável em outras abordagens), **não** há exaurimento e o falso **subsiste** autonomamente. A defesa deve demonstrar o **esgotamento concreto** no crime-fim único.

### 3. Documento sem fé pública / não equiparado
O tipo do art. 297 exige documento **público** ou **equiparado** (§2º). Documento **meramente particular** vai ao art. 298; escrito **sem relevância jurídica**, ou cópia sem autenticação com valor de mero indício, pode não ostentar a fé pública protegida. **Recusar a moldura do 297** quando o objeto não é público nem equiparado.

### 4. Falsidade ideológica x material (desclassificação)
Se o documento é **formalmente autêntico** e só o **conteúdo** é inverídico (declaração falsa inserida em documento verdadeiro), o crime é o do **art. 299 (ideológica)**, não o do art. 297. A distinção importa: muda o tipo, a pena e, por vezes, a competência. Sustentar a **desclassificação 297 → 299** quando não há adulteração da forma.

### 5. Ausência de dolo / erro de tipo
O tipo é **doloso**; não há forma culposa. Cabe defesa por **erro de tipo** (art. 20 CP): o agente que **desconhecia** a falsidade (recebeu o documento de terceiro, acreditava genuíno) não tem dolo de falsificar nem de usar documento sabidamente falso (art. 304). Reforçar com a origem do documento e a ausência de proveito compatível com a autoria da fabricação.

### 6. Autofalso e uso (art. 304) — quem fez x quem usou
Discussão recorrente: o **autor da falsificação** que **usa** o próprio documento responde **apenas pelo falso** (o uso é *post factum* impunível / consunção), não em concurso com o art. 304. Já o **terceiro que apenas usa** documento falso alheio, sem participar da fabricação, responde pelo **304**, não pelo 297. Ajustar a imputação à conduta concreta do assistido evita a dupla punição indevida.

### 7. Princípio da insignificância — cautela
A insignificância é **excepcional** nos crimes contra a fé pública, porque o bem jurídico é **supraindividual** (a confiança pública), não patrimonial. Em regra **não se aplica** ao 297. Só cogitar em hipóteses muito particulares e sempre subsidiariamente — não é a tese principal. [NAO VERIFICADO — confira o entendimento atual em `jurisprudencia-stj-stf` antes de sustentar.]

## Nulidades e ataques probatórios próprios

- **Exame documentoscópico/grafotécnico (CP art. 297; CPP art. 158 e 159):** a materialidade do falso depende, em regra, de **perícia**. Ausência de laudo, laudo genérico, ou exame que não afirma a **idoneidade** da falsificação abrem espaço para absolvição por dúvida (in dubio pro reo). Requerer **esclarecimentos**, **assistente técnico** e, se preciso, **nova perícia** (CPP art. 159, §§).
- **Cadeia de custódia do documento apreendido (CPP 158-A a 158-F):** vícios na coleta, lacre, guarda e identificação do documento comprometem a confiabilidade da prova material; podem levar à **inutilizabilidade** do elemento.
- **Autoria por presunção:** a mera posse do documento não prova a **fabricação**. Distinguir *ter/usar* de *falsificar*; sem prova de que o assistido produziu ou alterou, a imputação do 297 (fabricação) não se sustenta — quando muito remanesce o 304 (uso).
- **Competência:** falso de documento de interesse da **União** (ex.: passaporte, CTPS, documento previdenciário federal) pode atrair a **Justiça Federal**; erro de competência é matéria de nulidade — conferir Súmula 546/STJ e correlatas em `jurisprudencia-stj-stf`.

## Dosimetria e reflexos (método — não calcule aqui)

- **Pena base:** reclusão de **2 a 6 anos e multa** (caput). Descrever a metodologia trifásica e **apontar** a skill `calculadora-dosimetria` para o cálculo (não gerar cálculo determinístico nesta skill).
- **Aumento do §1º (1/6):** só incide se o agente for **funcionário público** e se **prevalecer do cargo** — atacar a incidência automática.
- **Concurso e continuidade:** pluralidade de documentos pode configurar **concurso formal** (art. 70) ou **crime continuado** (art. 71) — impacto relevante na pena; discutir os requisitos objetivos/subjetivos.
- **Prescrição:** com a **consunção** (tese 2) ou a desclassificação para 299/304, muda o marco prescricional. Para o cálculo, **aponte** a skill `calculadora-prescricao` (não calcular aqui).

## Teses x contra-teses (síntese)

| Tese defensiva | Contra-tese (acusação) | Como sustentar a defesa |
|---|---|---|
| Falso grosseiro → atipicidade (art. 17) | Falso idôneo; ou remanesce estelionato | Laudo pericial mostrando grosseria; ausência de engano concreto |
| Consunção pelo estelionato (Súm. 17/STJ) | Documento com potencialidade lesiva autônoma subsistente | Demonstrar exaurimento concreto do falso no crime-fim único |
| Documento sem fé pública / particular | Documento equiparado (§2º) | Enquadrar o objeto fora do rol público/equiparado |
| Desclassificação 297 → 299 (ideológica) | Houve adulteração da forma (material) | Provar integridade formal; só o conteúdo é falso |
| Erro de tipo / ausência de dolo | Dolo evidenciado pelas circunstâncias | Origem do documento; ausência de proveito de autoria |
| Só uso (304), não fabricação (297) | Coautoria na falsificação | Ausência de prova da produção/alteração pelo assistido |

## Súmulas e precedentes (sob o Citation Gate)

Cite com certeza apenas os **dispositivos de lei** acima. Para qualquer **súmula, tema ou acórdão**, confirme número, teor e vigência na skill `jurisprudencia-stj-stf` antes de usar:
- **Súmula 17/STJ** — consunção do falso pelo estelionato quando nele se exaure (tese central 2). Confirmar teor e aplicação atual.
- **Súmula 546/STJ** — competência (uso de documento falso / juízo competente). [Conferir número e enunciado — NAO VERIFICADO.]
- Entendimentos sobre **falso grosseiro** e sobre **(in)aplicabilidade da insignificância** ao art. 297 são **jurisprudenciais** e oscilam — **não citar número de HC/REsp/RE de memória**. Ensine a **tese** e o **dispositivo**; se precisar de precedente específico, **busque e verifique** em `jurisprudencia-stj-stf`.

> Regra de ouro do Citation Gate: **omitir vence inventar**. Preferir "há entendimento no sentido de X, a confirmar em jurisprudência atual" a arriscar um número de acórdão.

## Erros comuns / checklist da defesa

- [ ] Classifiquei corretamente **material (297) x ideológica (299)** antes de qualquer tese?
- [ ] Confirmei que o documento é **público ou equiparado (§2º)** e tem **fé pública**?
- [ ] Avaliei **falso grosseiro / potencialidade lesiva** (crime impossível — art. 17)?
- [ ] Verifiquei se o falso **se exauriu** no crime-fim (consunção — Súmula 17/STJ) ou tem lesividade autônoma?
- [ ] Distingui **fabricar (297)** de **usar (304)** e ajustei a imputação à conduta concreta (autofalso × uso por terceiro)?
- [ ] Ataquei o **exame documentoscópico** ausente/genérico e a **cadeia de custódia** do documento?
- [ ] Testei **erro de tipo / ausência de dolo** (não há forma culposa)?
- [ ] Conferi **competência** (Justiça Federal em documento de interesse da União)?
- [ ] Modulei o pedido: **absolvição** (atipicidade) → **desclassificação** (299/304) → **consunção/dosimetria** (subsidiário)?
- [ ] Apontei `calculadora-dosimetria` e `calculadora-prescricao` para os cálculos (sem calcular aqui)?
- [ ] Passei **todas** as súmulas/precedentes pela skill `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aceitar a moldura do 297 sem checar se o documento é **público/equiparado** e se o vício é **material**.
- Tratar como falso idôneo o que é **grosseiro** (crime impossível) — ou o contrário.
- Deixar de arguir **consunção** (Súmula 17/STJ) quando o falso se esgotou no estelionato — dobra indevidamente a pena.
- Confundir **fabricar** e **usar** e aceitar concurso 297 + 304 no autofalso.
- Sustentar **insignificância** como tese principal em crime contra a fé pública (bem supraindividual).
- Citar número de HC/REsp/Súmula **de memória** — sempre pelo gate de verificação.

## Vias correlatas (não confundir)

- **Impugnar o documento nos autos** (desentranhamento, perícia, remessa ao MP) → skill `incidente-falsidade-documental` (CPP 145-148). *Esta* skill é a **defesa penal do acusado** do crime de falso — planos distintos, que podem coexistir.
- **Estelionato** como crime-fim absorvente → skill `defesa-estelionato-171`.
- **Falsidade ideológica** (art. 299) → skill `defesa-falsidade-ideologica`.
- **Falsa identidade** (art. 307) → skill `defesa-falsa-identidade`.
- **Atestado médico falso** (art. 302) → skill `defesa-falsidade-atestado-medico`.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. A responsabilidade pela tese, pela subsunção e pelas citações é sempre do **advogado** (EAOAB; CED; Provimento 205/2021 quanto à comunicação/publicidade). Toda lei, súmula, tese ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes do uso (há sanções reais por jurisprudência inventada por IA). Ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua que a revisão cobra).

## Lembretes finais

- **Classificar antes de argumentar:** material (297) x ideológica (299); público/equiparado x particular; idôneo x grosseiro.
- **Falso grosseiro** = crime impossível (art. 17) → **atipicidade**.
- **Consunção (Súmula 17/STJ):** falso que se exaure no estelionato é por ele absorvido — grande tese de dosimetria/prescrição.
- **Fabricar (297) ≠ usar (304):** autofalso não gera concurso; terceiro que só usa responde pelo 304.
- **Perícia é o coração da materialidade** — atacar laudo ausente/genérico e cadeia de custódia.
- **Modular pedidos** do mais forte (absolvição) ao subsidiário (desclassificação → consunção → dosimetria).
- **Cálculos** de pena/prescrição → `calculadora-dosimetria` / `calculadora-prescricao`. **Citações** → `jurisprudencia-stj-stf`. **Sempre.**
