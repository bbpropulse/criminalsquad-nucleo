---
name: teoria-do-caso-construcao
description: >-
  Use ao construir a TEORIA DO CASO da defesa ANTES de qualquer peça — a hipótese defensiva única e
  testável que amarra fato, direito e prova e governa todo o processo. É trabalho interno de
  arquitetura do caso, não documento para terceiros. Gatilhos: teoria do caso, tese central,
  hipótese da defesa, versão da defesa, o que vamos sustentar, linha de defesa, fio condutor do
  caso, coerência da tese…. Não use para conclusão definitiva sem autos suficientes, fonte atual ou
  revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-teoria-do-caso-construcao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["teoria-do-caso-construcao", "teoria caso", "caso construcao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Construção da Teoria do Caso (arts. 155, 156 e 386 do CPP; in dubio pro reo)

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

Esta skill orienta a **decisão estratégica mais importante e mais anterior** de qualquer defesa criminal: **qual é a teoria do caso** — a hipótese defensiva **única, coerente e testável** que explica *o que aconteceu* de um jeito compatível com a inocência (ou com a melhor posição possível) do assistido, e que **amarra fato, direito e prova** num só fio condutor. Ela é decidida **antes** de existir peça: é a arquitetura que governa a resposta à acusação, os requerimentos de prova, os debates e o recurso.

> **Lição central:** a teoria do caso não é "o que eu quero que seja verdade" — é a **melhor explicação sustentável** dos fatos, testada contra a prova e o direito. Toda peça nasce dela; sem eixo unificador, o escritório produz teses que **se autofagocitam entre fases** (nega autoria na instrução e alega legítima defesa nas alegações finais — e perde as duas). **Escolha UMA tese-mestra, e só admita teses subsidiárias que não a contradigam.**

> **Cautela de vigência (obrigatória antes de citar):** a base é o CPP (arts. 155, 156, 386) e princípios constitucionais (presunção de inocência — CF, art. 5º, LVII). Antes de fundamentar qualquer peça a partir da teoria escolhida, confira redação vigente, súmulas, temas e overruling via a skill `jurisprudencia-stj-stf`. O standard de prova ("além de dúvida razoável") e os precedentes sobre ônus probatório citados aqui devem ser conferidos — **prefira a tese e o dispositivo a arriscar número de acórdão.**

## O que é (e o que NÃO é) teoria do caso

- **É** a hipótese que responde, numa frase, a três perguntas ao mesmo tempo: *o que aconteceu* (fato), *por que isso favorece o assistido* (direito) e *o que na prova sustenta isso* (prova). Ex.: "*O réu não estava no local — a única prova é o reconhecimento fotográfico viciado, sem qualquer elemento independente.*"
- **É** trabalho **interno** de arquitetura do caso — não é peça, não é parecer, não vai para terceiros.
- **NÃO é** a redação persuasiva da tese já escolhida (isso é a skill `redacao-persuasiva-criminal`, que **escreve** a teoria dentro de uma peça).
- **NÃO é** o parecer de viabilidade formal para o cliente (isso é `parecer-juridico-criminal`).
- **NÃO é** um amontoado de teses alternativas jogadas "para ver o que cola" — teoria do caso é **escolha** e **compromisso**, com subsidiárias controladas.

## Base legal e principiológica

- **CPP, art. 155** — livre convicção motivada; **vedada** a condenação fundada *exclusivamente* em elementos do inquérito não repetidos em juízo (as provas cautelares, não repetíveis e antecipadas são a exceção). É o alicerce da teoria de **insuficiência probatória**.
- **CPP, art. 156** — o **ônus da prova** da imputação é de quem alega, isto é, **da acusação**. A defesa não precisa provar inocência; precisa criar **dúvida razoável**.
- **CPP, art. 386** — hipóteses de **absolvição**, incluindo a do inciso VII (não existir prova suficiente para a condenação). É o "cardápio" para onde toda teoria do caso deve mirar.
- **CF, art. 5º, LVII** — presunção de inocência; e o **in dubio pro reo** como regra de julgamento: dúvida se resolve a favor do réu.
- **Standard de prova** — a condenação exige certeza **além de dúvida razoável**; a defesa vence ao **instalar a dúvida razoável**, não ao provar a versão alternativa. [NÃO VERIFICADO: a formulação do standard e sua sede jurisprudencial (STF/STJ) devem ser conferidas via `jurisprudencia-stj-stf`.]
- **Princípio da correlação (CPP, arts. 383-384)** — a sentença se vincula ao fato imputado; conhecer os limites da imputação é o que permite escolher a teoria que ataca o ponto certo (fato x tipificação).

## Os três eixos da teoria do caso (o tripé que precisa fechar)

Uma teoria do caso só se sustenta se os **três eixos** forem coerentes entre si. O trabalho é testar cada um e, sobretudo, a **costura** entre eles.

1. **Eixo factual** — Qual a versão dos fatos? Ela é **fisicamente possível**, **cronologicamente coerente** e **compatível com o incontroverso** (o que nem a defesa nega)? Uma teoria que exige negar um fato provado por documento nasce morta.
2. **Eixo jurídico** — Se a versão factual for aceita, ela conduz a **qual resultado jurídico**? Absolvição por atipicidade? Por excludente? Desclassificação? Insuficiência de prova? A teoria precisa desaguar numa **hipótese concreta do art. 386** (ou em redução/desclassificação).
3. **Eixo probatório** — **O que na prova** sustenta a versão factual, e **o que a contradiz**? Aqui se mapeia a prova favorável, a prova contrária e — crucial — a **prova que falta à acusação** (é a lacuna dela que a defesa explora).

> **A costura é o teste decisivo.** Teorias fracassam não por um eixo isolado, mas pela **incompatibilidade entre eles**: a versão factual é linda, mas nenhuma prova a sustenta; ou a prova é boa, mas a consequência jurídica pretendida não decorre da versão. **Escreva a teoria numa frase e verifique se os três eixos cabem nela sem contradição.**

## As grandes famílias de teoria do caso (escolha o gênero antes da espécie)

Antes de detalhar, decida **em que família** a defesa vai jogar — elas têm lógicas probatórias distintas e **não se somam livremente**:

| Família | Afirma | Mira (art. 386) | Ônus prático |
|---|---|---|---|
| **Negativa de autoria** | "não fui eu" | VII (ou IV) | atacar a prova de autoria; álibi/identificação viciada |
| **Negativa de fato / materialidade** | "o fato não existiu" | I | atacar laudo, corpo de delito, nexo |
| **Atipicidade** | "o fato existiu, mas não é crime" | III | subsunção; elemento do tipo ausente; princípio da insignificância |
| **Excludente de ilicitude/culpabilidade** | "foi crime, mas justificado/inexigível" | VI | legítima defesa, estado de necessidade, coação, erro |
| **Insuficiência probatória** | "não há prova para condenar" | VII | explorar a lacuna da acusação; in dubio pro reo |
| **Desclassificação / minorante** | "é crime, mas outro/menos grave" | (redução/troca) | tipificação; dolo; causas de diminuição |

> **A escolha de família governa a postura sobre a prova.** Quem nega autoria **não** pode, sem custo, invocar legítima defesa (que admite a autoria). Quem sustenta insignificância admite o fato. **Misturar famílias antagônicas destrói credibilidade** — a teoria do caso é o instrumento que impõe essa disciplina.

## Metodologia — construção passo a passo

### Passo 1 — Reunir o material bruto
Denúncia/queixa, inquérito, laudos, autos de prisão, oitivas, cadeia de custódia, versão do assistido. **Separe o incontroverso** (o que ambos os lados aceitam) do **controvertido** (onde a batalha ocorre). A teoria do caso só pode conflitar com o controvertido — nunca com o incontroverso.

### Passo 2 — Mapear a tese da acusação e seu ponto mais fraco
Reconstrua a **teoria do caso da acusação**: qual o fato, qual o tipo, qual a prova de cada elemento. Identifique **onde a acusação está mais frágil** (autoria? materialidade? nexo? dolo? cadeia de custódia?). A teoria da defesa muitas vezes se define **pelo flanco aberto do adversário**.

### Passo 3 — Gerar teorias candidatas (divergir antes de convergir)
Liste **todas** as teorias plausíveis — negativa de autoria, atipicidade, excludente, insuficiência, desclassificação — **sem escolher ainda**. Para cada uma, esboce os três eixos.

### Passo 4 — Testar cada candidata (o teste de sustentabilidade)
Submeta cada teoria aos testes da seção seguinte. Elimine as que quebram. Ao final, deve restar **uma tese-mestra**.

### Passo 5 — Escolher a tese-mestra e definir subsidiárias compatíveis
Escolha a teoria que **melhor sobrevive** aos testes e que **melhor resultado** entrega. Depois, e só depois, admita **teses subsidiárias** que **não contradigam** a principal (ex.: principal = insuficiência probatória; subsidiária compatível = desclassificação — ambas convivem porque nenhuma afirma a autoria como certa). **Rejeite subsidiárias antagônicas.**

### Passo 6 — Redigir a teoria em UMA frase (o "theme")
Condense a teoria numa **frase-tema** memorável, que caiba na abertura de qualquer peça e no encerramento de qualquer sustentação. Se não couber numa frase coerente, a teoria ainda não está pronta.

### Passo 7 — Derivar o roadmap
Da teoria escolhida decorrem: **estratégia probatória** (que testemunhas ouvir, que perícia requerer, o que **não** perguntar), **mapa de nulidades** a suscitar, **decisão recorrer x negociar (ANPP/acordo)**, e a **gestão da narrativa** ao longo das fases. A teoria é o que dá **eixo** a tudo isso.

## O teste de sustentabilidade da teoria (aplicar a cada candidata)

- **Teste da compatibilidade com o incontroverso** — a teoria conflita com algum fato que a própria defesa não nega? Se sim, **descartar**.
- **Teste da prova mais forte da acusação** — a teoria sobrevive **à melhor prova** do adversário, ou depende de que ela não exista? Uma teoria que só funciona ignorando a prova mais forte da acusação é frágil.
- **Teste da coerência interna (os três eixos)** — factual, jurídico e probatório cabem na mesma frase sem contradição?
- **Teste da coerência temporal (entre fases)** — a tese sustentada na resposta à acusação **sobrevive** até as alegações finais e o recurso, ou vai obrigar a defesa a **se contradizer** depois? Teoria do caso é compromisso **plurifásico**.
- **Teste da narrativa única (Occam)** — a teoria explica os fatos com o **menor número de suposições** improváveis? Júri e juiz preferem a explicação simples.
- **Teste do ônus** — a teoria coloca sobre a **acusação** o peso de provar (art. 156), ou obriga a defesa a provar o improvável? Prefira teorias que **exploram a lacuna** alheia.
- **Teste do resultado** — se a teoria vencer, **qual o ganho concreto**? (absolvição plena > desclassificação > minorante). Entre teorias igualmente sustentáveis, prefira a de **maior resultado** — mas nunca sacrifique sustentabilidade por ambição.

## Teses e contra-teses (o diálogo com a acusação)

Toda teoria do caso deve ser construída **antecipando a réplica** da acusação. Para cada tese-mestra, mapeie a contra-tese esperada e a **tréplica** da defesa:

- **Defesa (negativa de autoria):** "a autoria se apoia só em reconhecimento, sem prova independente." → **Contra-tese:** "o reconhecimento é firme e há indícios convergentes." → **Tréplica:** exigir observância do art. 226 do CPP e apontar a ausência de lastro autônomo (a prova única e frágil não vence o standard).
- **Defesa (insuficiência probatória):** "não há prova além de dúvida razoável." → **Contra-tese:** "o conjunto indiciário é suficiente." → **Tréplica:** art. 155 (vedada condenação só com inquérito) + in dubio pro reo — indício não é prova plena.
- **Defesa (atipicidade / insignificância):** "falta elemento do tipo / lesão irrelevante." → **Contra-tese:** "o tipo se consumou." → **Tréplica:** subsunção estrita; princípio da legalidade; ausência do elemento normativo.
- **Defesa (legítima defesa):** "houve agressão injusta atual e reação proporcional." → **Contra-tese:** "excesso / provocação." → **Tréplica:** demonstrar moderação e necessidade; o ônus de afastar a excludente, uma vez trazida prova mínima, tende a se deslocar para a acusação (conferir via `jurisprudencia-stj-stf`).

> **Regra de ouro do diálogo:** se a **contra-tese** da acusação for mais simples e mais provável que a sua teoria, **a sua teoria é a errada** — volte ao Passo 3.

## Súmulas e princípios de apoio (conferir vigência via `jurisprudencia-stj-stf`)

Evite ancorar a teoria do caso em número de acórdão de memória. Prefira os **dispositivos e princípios** notórios:

- **CPP, art. 155** — condenação não pode se fundar **exclusivamente** em elementos do inquérito.
- **CPP, art. 156** — ônus da prova da imputação é da **acusação**.
- **CPP, art. 386, VII** — absolvição por **insuficiência de provas** (a válvula do in dubio pro reo).
- **CF, art. 5º, LVII** — presunção de inocência (regra de tratamento e regra de julgamento).
- **CPP, art. 226** — procedimento legal do **reconhecimento de pessoas** (relevante em teorias de negativa de autoria). [NÃO VERIFICADO: a orientação atual do STJ sobre a natureza — se o art. 226 é regra cogente cuja inobservância invalida o reconhecimento — deve ser conferida via `jurisprudencia-stj-stf` antes de citar tese ou precedente.]
- **Standard "além de dúvida razoável"** e **distribuição do ônus quanto a excludentes** — [NÃO VERIFICADO] conferir sede e alcance via `jurisprudencia-stj-stf`.

> Qualquer HC, REsp, RE, informativo ou tema específico que se pretenda invocar para reforçar a teoria **passa obrigatoriamente** pelo gate de `verificacao-citacoes` / `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência fabricada por IA.

## Erros comuns (anti-padrões)

- **Teses que se autofagocitam** — negar autoria na instrução e alegar legítima defesa nas finais. As duas se destroem; escolha uma família e mantenha.
- **Escolher a tese pela vontade, não pela prova** — construir a teoria a partir do resultado desejado, ignorando o que a prova permite sustentar.
- **Ignorar o incontroverso** — montar versão que conflita com um fato que a própria defesa aceita.
- **Assumir ônus que é da acusação** — desenhar a teoria de modo a ter de **provar** inocência, quando bastaria **instalar dúvida** (art. 156; art. 386, VII).
- **Empilhar subsidiárias antagônicas** — jogar cinco teses alternativas incompatíveis "para ver o que cola"; isso sinaliza fraqueza ao julgador.
- **Teoria sem tradução em resultado jurídico** — versão factual que não desagua em nenhuma hipótese do art. 386, desclassificação ou minorante.
- **Teoria monofásica** — pensar só na peça imediata, sem checar se a tese sobrevive coerente até o recurso.
- **Ancorar em acórdão de memória** — dar número de julgado sem passar pelo gate de verificação.

## Checklist final da teoria do caso

- [ ] A teoria cabe em **uma frase** que responde fato + direito + prova?
- [ ] Os **três eixos** (factual, jurídico, probatório) são coerentes **entre si**?
- [ ] A teoria é **compatível com o incontroverso**?
- [ ] Sobrevive à **prova mais forte** da acusação?
- [ ] Escolhi **uma família** (negativa / atipicidade / excludente / insuficiência / desclassificação) e as subsidiárias são **compatíveis**?
- [ ] A teoria **explora a lacuna** da acusação e mantém o **ônus** sobre ela (art. 156)?
- [ ] Ela **sobrevive coerente entre as fases** (resposta → instrução → finais → recurso)?
- [ ] Desagua numa **hipótese concreta** de absolvição/desclassificação/minorante?
- [ ] A **contra-tese** da acusação foi antecipada e há **tréplica**?
- [ ] Todo dispositivo/súmula/precedente que reforça a teoria foi **conferido** via `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] Do eixo escolhido derivam **estratégia probatória, mapa de nulidades e decisão recorrer x negociar**?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** A teoria do caso é **hipótese estratégica interna** a ser confirmada, calibrada e assumida pelo **advogado responsável** — não é peça nem parecer, e a decisão final sobre a linha de defesa é indelegável (CED/OAB, art. 2º; dever de zelo e independência técnica).
- **Ética por polo.** Esta skill serve à **defesa**. A responsabilidade profissional observa: **advocacia** — Estatuto da OAB + Código de Ética e Disciplina + Provimento 205/2021 (uso de IA); **Defensoria** — LC 80/94. (Skill de polo defensivo; se o usuário atuar na acusação, a lógica de teoria do caso é análoga, mas a conformidade seria a do MP/CNMP.)
- **Citation Gate inegociável.** Nenhuma súmula, tese ou acórdão citado de memória: tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Marcações **[NÃO VERIFICADO]** neste material sinalizam pontos que **exigem** conferência antes de qualquer uso.
- **Sigilo e LGPD.** Dados do assistido usados na construção da teoria nunca vão para repositório público (`acervo/casos/` é gitignored).

## Lembretes finais

- **Uma teoria, uma frase, um eixo** — se não cabe numa frase coerente, não está pronta.
- **Escolha a família antes da espécie** — e não misture famílias antagônicas.
- **A lacuna da acusação é o seu ativo** — mantenha o ônus onde a lei o colocou (art. 156; art. 386, VII).
- **Teste contra a melhor prova do adversário**, não contra a mais fraca.
- **Coerência plurifásica** — a tese de hoje é a tese do recurso.
- **A teoria do caso governa tudo** — prova, nulidades, recorrer x negociar, narrativa. Decidida ela, cada peça ganha eixo; ao redigir, aplique `redacao-persuasiva-criminal` para **escrever** a teoria já escolhida.
