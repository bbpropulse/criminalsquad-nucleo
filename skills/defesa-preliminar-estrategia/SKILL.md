---
name: defesa-preliminar-estrategia
description: >-
  Use ao decidir a ESTRATÉGIA da resposta à acusação (art. 396-A CPP) ANTES de redigi-la — o que
  revelar e o que reservar, quando arguir absolvição sumária já (art. 397) ou aguardar a instrução
  (art. 400), se antecipar teses ou preservar surpresa, e como calibrar o rol de testemunhas. É
  deliberação de timing e revelação que precede a peça. Gatilhos: estratégia da resposta à acusação,
  o que colocar na defesa preliminar… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-preliminar-estrategia"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-preliminar-estrategia", "defesa preliminar", "preliminar estrategia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Estratégia da Defesa Preliminar (art. 396-A do CPP)

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

Esta skill **delibera a estratégia** da resposta à acusação **antes** de a peça ser redigida. Recebida a denúncia/queixa e citado o réu, abre-se o prazo de 10 dias para a resposta escrita (art. 396 c/c 396-A do CPP). A pergunta que esta skill responde **não** é "como redigir" — é **o que a resposta deve conter e o que deve calar**: antecipar teses ou reservá-las para a instrução, pedir absolvição sumária (art. 397) já ou aguardar, e como calibrar o rol de testemunhas. É uma decisão de **timing e revelação** que precede — e comanda — a redação.

> **Lição central:** a resposta à acusação é **obrigatória**, mas o seu *conteúdo estratégico* é uma escolha. O erro clássico é tratá-la como uma mini-alegação final e **entregar toda a tese defensiva** ao acusador, que ainda tem toda a instrução para se preparar contra ela. Decida **em cada tese**: revelar agora compra um ganho (absolvição sumária, correção de rumo, prova documental incontornável) ou apenas **entrega o jogo**? O que **não pode calar** é o que preclui — rol de testemunhas e exceções.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 396, 396-A, 397 e 400 do CPP na fonte oficial antes de fundamentar. Confira também súmulas, temas repetitivos e eventual *overruling* via a skill `jurisprudencia-stj-stf`. Nada de jurisprudência citada de memória — há sanção real por precedente inventado por IA.

## O que esta skill NÃO faz (fronteira)

- **Não redige a peça.** A redação da resposta à acusação é das skills de peça (`resposta-acusacao` / `resposta-preliminar`). Aqui se decide **o que entra nelas**.
- **Não cataloga o repertório de teses.** O mapa de teses defensivas é da `matriz-teses-defensivas`. Aqui se decide **quais teses do repertório expor JÁ e quais guardar** para a instrução ou para as alegações finais.
- **É deliberação estratégica** — teoria do caso, mapa de nulidades, roadmap defensivo, escolha de tese e estratégia de revelação probatória. O produto é uma **decisão fundamentada** (revelar/reservar, pedir/aguardar, arrolar/dosar), não uma petição.

## Base legal

- **Art. 396 do CPP** — recebida a denúncia/queixa e citado o acusado, ele responde por escrito em **10 dias**.
- **Art. 396-A do CPP** — na resposta, o acusado pode arguir **preliminares** e alegar **tudo o que interesse à sua defesa**, oferecer **documentos e justificações**, especificar as **provas** pretendidas e **arrolar testemunhas** (até o número legal), qualificando-as e requerendo intimação quando necessário.
- **Art. 397 do CPP** — após a resposta, o juiz **absolverá sumariamente** o acusado quando verificar: (I) existência manifesta de causa **excludente da ilicitude**; (II) causa **excludente da culpabilidade**, salvo inimputabilidade; (III) que o **fato narrado evidentemente não constitui crime**; ou (IV) **extinta a punibilidade**.
- **Art. 400 do CPP** — a **audiência de instrução e julgamento** (AIJ): tomada de declarações, oitiva de testemunhas de acusação e defesa, esclarecimentos de peritos, acareações, reconhecimento e, por fim, o interrogatório. É a **outra janela** onde a tese reservada pode aparecer.
- **Nulidade pela não-abertura de prazo:** a resposta é peça **obrigatória**; a falta de intimação para apresentá-la, ou a ausência de defensor, é matéria de nulidade (art. 564 e ss.). **Confira a natureza — absoluta ou relativa — via `jurisprudencia-stj-stf`** antes de afirmar.

## O eixo da decisão — revelar × reservar

A resposta à acusação vive numa tensão estrutural: é **cedo** (a instrução ainda não começou; o acusador ainda molda a prova) mas há **oportunidades que só existem agora** (absolvição sumária; correção de rumo antes de a prova se consolidar). Cada tese cabe num de três destinos:

| Destino | Quando escolher | Risco de errar |
|---|---|---|
| **REVELAR JÁ** (na resposta) | A tese pode **encerrar o processo agora** (absolvição sumária), é **puramente jurídica** (não depende de prova a produzir), ou vem com **documento incontornável** que o acusador não conseguirá contornar na instrução | Se revelar tese **fática frágil**, dá ao acusador tempo e roteiro para produzir prova contrária e blindar a acusação |
| **RESERVAR** (para a instrução / alegações finais) | A tese depende de **fazer a prova ruir no contraditório** (contradizer testemunha, explorar lacuna do laudo, expor a fragilidade do reconhecimento), ou o **efeito-surpresa** aumenta a chance de êxito | Se reservar algo que **preclui** (rol, exceção) ou que **teria encerrado o feito agora**, perde-se a janela |
| **NUNCA CALAR** (obrigatório na resposta) | **Rol de testemunhas** (preclui se não arrolado — art. 396-A), **exceções** processuais próprias do momento, **preliminares de nulidade já existentes** cuja arguição tem momento, e **provas cuja produção precisa ser requerida agora** | Omitir aqui não é "reserva estratégica" — é **perda de direito** |

> **Regra de ouro da revelação:** revele o que **converte** (encerra o feito, corrige o rumo, ancora prova documental) e reserve o que **apenas informa** o adversário. Antecipar a linha de defesa fática sem ganho concreto é **munição gratuita** para a acusação.

## O que NUNCA se reserva (sob pena de preclusão / perda)

1. **Rol de testemunhas** — a resposta é o momento de arrolar (art. 396-A). Testemunha não arrolada, em regra, **preclui**. Na dúvida sobre quem chamar, **arrole a mais** dentro do teto legal — é mais fácil desistir depois do que incluir quem ficou de fora.
2. **Exceções** (suspeição, incompetência, litispendência, coisa julgada, ilegitimidade) — têm **momento próprio** e rito paralelo; verifique o cabimento e o prazo.
3. **Preliminares e nulidades já perceptíveis** — nulidade da citação, inépcia da denúncia, ausência de justa causa, ilicitude de prova aparente nos autos. **Silenciar sobre nulidade relativa no momento próprio pode convalidá-la** (art. 571-572 — confira a hipótese concreta).
4. **Requerimentos de prova cuja produção depende de deferimento** — perícia, diligência, expedição de ofício: peça agora e fundamente; o que não se requer, não se produz.
5. **Questões de admissibilidade que, se não suscitadas, precluem** — sempre confira, caso a caso, se o vício é de arguição imediata.

## Absolvição sumária (art. 397) — arguir JÁ ou aguardar?

A absolvição sumária é o **grande prêmio** da fase preliminar: encerra o processo sem instrução. Mas o pedido tem **dois efeitos**: se acolhido, ganha tudo; se rejeitado, **revela a tese** e o acusador segue com a instrução já sabendo por onde a defesa vai. A decisão depende do **grau de robustez** da tese à luz das 4 hipóteses do art. 397.

**Árvore de decisão:**
```
1) A tese cabe em UMA das 4 hipóteses do art. 397?
   (I excludente de ilicitude · II excludente de culpabilidade [salvo inimputabilidade]
    · III fato narrado evidentemente não é crime · IV extinta a punibilidade)
   ├── NÃO → não é caso de absolvição sumária. Reservar a tese ou tratá-la
   │         como preliminar/mérito na instrução.
   └── SIM → 2) A prova da tese é DOCUMENTAL / INCONTROVERSA neste momento?
             (a "manifesta"/"evidente" do art. 397 exige robustez de plano)
             ├── SIM (ex.: certidão de óbito → extinção; atipicidade flagrante
             │         na própria narrativa; prescrição pela pena in abstracto)
             │   → PEDIR JÁ. O ganho (encerrar o feito) supera o custo de revelar.
             └── NÃO (a tese depende de prova a produzir / de convencimento
                       gradual) → NÃO forçar o art. 397 agora. Um pedido
                       fadado a rejeição só ENTREGA A TESE. Reservar para a
                       instrução e alegações finais (art. 403/CPP).
```

- **Casos de "pedir já" quase automáticos:** extinção da punibilidade líquida (prescrição pela pena em abstrato, morte do agente com certidão, decadência, anistia/abolitio) e **atipicidade flagrante da própria narrativa** (o fato, como descrito, não é crime — inciso III). Aqui a prova é o próprio texto ou um documento — não há o que o acusador contorne na instrução.
- **Casos de "não forçar":** legítima defesa que **depende de contexto probatório** ainda a construir, inexigibilidade de conduta diversa dependente de instrução, dúvida sobre autoria. Pedir absolvição sumária com prova que ainda precisa ser produzida é **antecipar mérito sem munição** — a rejeição é quase certa e a tese vai revelada para a instrução.
- **Custo assimétrico:** rejeitada a absolvição sumária, **nada impede** rediscutir a mesma matéria na sentença; mas a **surpresa** já se perdeu. Por isso, só se paga esse custo quando a chance de acolhimento é **alta**.

## Calibragem do rol de testemunhas

O rol é decisão estratégica, não formalidade. Três eixos:

1. **Quantidade × teto legal** — respeite o número máximo do rito (procedimento comum ordinário/sumário; júri tem regra própria). **Arrolar até o teto** preserva opções; sobra é descartável, falta preclui.
2. **Testemunha revela tese?** — a **qualificação** e a mera indicação de quem se arrola já **sinaliza a linha de defesa**. Arrolar o álibi denuncia o álibi. Pondere: o depoimento é forte o bastante para compensar a antecipação? Às vezes vale arrolar como **"testemunha do juízo"/imprescindível** com requerimento de intimação, para garantir a presença sem detalhar o conteúdo.
3. **Testemunha própria × exploração da acusação** — parte da estratégia é **não** trazer testemunha própria e vencer **desconstruindo** as de acusação no contraditório (art. 400). Se a defesa é de **negativa/fragilidade probatória**, muitas vezes a melhor prova é a que **falta ao acusador**, não a que a defesa produz.

> **Cautela:** a dúvida "arrolo ou não?" resolve-se pró-inclusão. Rol é dos poucos pontos onde **reservar = perder**. Reserve conteúdo, nunca a testemunha.

## Teoria do caso — a decisão que ordena todas as outras

Antes de decidir revelar/reservar, fixe a **teoria do caso**: a versão defensiva coerente que explica os fatos de modo compatível com a absolvição (ou com a tese mais branda viável). Ela é a **régua** da revelação:

- **Defesa de mérito/negativa de autoria** → tende a **reservar** a linha fática e vencer na instrução, expondo a fragilidade da prova acusatória. Revela-se **pouco**.
- **Defesa jurídica pura (atipicidade, excludente evidente, extinção)** → tende a **revelar já** e mirar o art. 397. O ganho de encerrar supera a antecipação.
- **Defesa processual (nulidade, ilicitude de prova, inépcia)** → **revela-se as que têm momento** e cuja omissão convalida; **reserva-se** o timing das demais para quando o impacto for maior (ex.: explorar a ilicitude só depois de fixada a contaminação da prova derivada).

Escolhida a teoria do caso, cada tese do repertório (ver `matriz-teses-defensivas`) recebe seu destino: **revelar / reservar / nunca calar**. Esse mapa **é o produto** desta skill.

## Erros comuns (anti-padrões)

- **Tratar a resposta como alegações finais antecipadas** — despejar toda a tese fática e entregar o roteiro ao acusador sem ganho concreto.
- **Pedir absolvição sumária sem robustez** — forçar o art. 397 com tese que depende de prova a produzir; a rejeição é quase certa e **queima a surpresa**.
- **Reservar o que preclui** — esquecer testemunha no rol, deixar de arguir exceção/nulidade no momento próprio "para usar depois". Depois, precluiu.
- **Confundir "econômica" com "vazia"** — resposta enxuta é estratégia; resposta que **omite o obrigatório** (rol, preliminares de momento) é **erro grave**.
- **Ignorar a teoria do caso** — decidir revelar/reservar tese a tese sem uma linha mestra, produzindo defesa incoerente.
- **Antecipar a nulidade cedo demais** — arguir vício de prova antes de a contaminação da prova derivada estar madura, dando ao acusador tempo de "sanear".
- **Não conferir vigência** dos arts. 396-A/397/400 nem passar súmulas/precedentes pelo gate de `jurisprudencia-stj-stf`.

## Checklist estratégico (antes de mandar redigir a peça)

- [ ] **Teoria do caso** definida (negativa · jurídica pura · processual · mista)?
- [ ] Cada tese do repertório classificada em **revelar já / reservar / nunca calar**?
- [ ] **Absolvição sumária (art. 397):** a tese cabe numa das 4 hipóteses **e** tem prova robusta de plano? Se sim, **pedir**; se não, **reservar**.
- [ ] **Rol de testemunhas** montado dentro do teto legal (arrolar não preclui; omitir preclui)?
- [ ] **Exceções / nulidades / ilicitudes de arguição imediata** identificadas e destinadas (arguir agora × convalidação)?
- [ ] **Requerimentos de prova** (perícia, diligência, ofício) cuja produção depende de deferimento — todos pedidos?
- [ ] Cada **revelação** justificada por um **ganho concreto** (encerra o feito / corrige rumo / ancora documento), e não por hábito?
- [ ] **Vigência** dos arts. 396-A, 397 e 400 conferida e súmulas/precedentes passados por `jurisprudencia-stj-stf`?
- [ ] Decisão registrada como **hipótese a confirmar** — **revisão humana obrigatória** do advogado responsável?

## Lembretes finais

- **A resposta é obrigatória; o seu conteúdo é escolha.** Revele o que **converte**, reserve o que **apenas informa** o adversário.
- **Absolvição sumária:** só forçar o art. 397 com tese que **cabe nas 4 hipóteses** e é **robusta de plano** — senão, é entregar a tese e colher rejeição.
- **Rol e exceções não se reservam** — é o único terreno onde reservar significa **perder**. Na dúvida, inclua.
- **A teoria do caso ordena tudo** — é a régua que decide, tese a tese, revelar/reservar.
- **O produto desta skill é a decisão**, não a peça. Definido o mapa, encaminhe à redação (`resposta-acusacao` / `resposta-preliminar`) e ao repertório (`matriz-teses-defensivas`).
- **Conferir vigência** dos arts. 396-A/397/400 e passar toda súmula/precedente pelo gate `jurisprudencia-stj-stf` antes de fundamentar.

## Nota de conformidade

Este material é **rascunho técnico de apoio à decisão estratégica**, sujeito a **revisão humana obrigatória** do advogado responsável — a estratégia da defesa, a escolha de teses e o timing de revelação são juízo profissional indelegável (CED/OAB, art. 2º; Provimento 205/2021, na comunicação/publicidade). Nenhuma súmula, tese ou precedente aqui referido deve ser usado sem passar pelo gate de verificação (`jurisprudencia-stj-stf`) e sem conferência da redação vigente dos dispositivos citados na fonte oficial. Na dúvida entre omitir e inventar, **omitir vence**.

**Padrão de decisão:** ao converter esta estratégia em peça, aplique também `resposta-acusacao` (redação da resposta) e `matriz-teses-defensivas` (repertório) — esta skill entrega o **mapa de revelação**; elas o transformam em petição.
