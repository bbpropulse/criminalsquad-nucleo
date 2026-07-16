---
name: arvore-decisao-medidas-cautelares-diversas
description: >-
  Use para escolher e argumentar QUAL cautelar diversa da prisão é adequada — matriz que cruza o
  risco processual invocado (fuga, reiteração, instrução, ordem pública) com o cardápio do art. 319
  do CPP, testando adequação/necessidade/proporcionalidade para substituir a preventiva ou impugnar
  cautelar excessiva. É análise estratégica prévia (mapa de proporcionalidade), NÃO a peça pronta.
  Gatilhos: qual cautelar cabe, medidas… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cautelares, processo-penal, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-arvore-decisao-medidas-cautelares-diversas"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["arvore-decisao-medidas-cautelares-diversas", "arvore decisao", "cautelares diversas"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Árvore de Decisão das Cautelares Diversas da Prisão (arts. 282 e 319 do CPP)

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

Esta skill é uma **ferramenta de raciocínio estratégico**, não uma peça. Ela ajuda a **cruzar o risco processual concretamente invocado** (o fundamento cautelar) **com o cardápio do art. 319 do CPP** e a **testar a proporcionalidade** de cada medida — para (a) sustentar a **substituição da preventiva** por cautelar menos gravosa, (b) **impugnar cautelar excessiva ou desnecessária** já imposta, ou (c) **antecipar** qual medida oferecer ao juízo antes que a prisão seja o único caminho na mesa. A peça propriamente dita (relaxamento, liberdade provisória, revogação, domiciliar, recurso) é redigida por outra skill — aqui se **decide o quê pedir e por quê**.

> **Lição central:** cautelar não se escolhe pelo "gosto" nem pela gravidade abstrata do crime — escolhe-se pelo **risco concreto** que o Estado invocou. Toda medida do art. 319 é **instrumental a um fim cautelar específico**. Primeiro **nomeie o risco** (fuga? reiteração? ameaça à instrução? ordem pública?); depois **pergunte qual medida neutraliza exatamente aquele risco com o menor sacrifício**. Medida que não guarda relação com o risco alegado é **inadequada** (art. 282, II) — e isso é tese, não detalhe.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 282, 283, 319 e 320 do CPP** — a Lei 12.403/2011 criou o sistema de cautelares diversas e a **Lei 13.964/2019 (Pacote Anticrime)** alterou o art. 282 (vedação à decretação de ofício, contraditório prévio, reavaliação periódica da necessidade). Confira também súmulas, teses e eventual *overruling* pela skill `jurisprudencia-stj-stf` **antes** de fundamentar qualquer peça. Nada de precedente citado de memória.

---

## Polo e escopo

**Esta skill é primordialmente de DEFESA** (e também da Defensoria). Serve para o defensor mapear a medida menos gravosa e atacar excessos. O polo acusatório tem instrumento próprio (`representacao-cautelares-mp` / equivalente): se o roteador estiver operando pelo **Ministério Público / assistente de acusação**, confira o polo antes de reaproveitar este conteúdo — a lógica de proporcionalidade é a mesma, mas o objetivo (requerer x afastar) inverte. A ética varia conforme o polo (OAB + Provimento 205/2021 para a advocacia; CNMP para o MP; LC 80/94 para a Defensoria).

---

## Base legal

- **Art. 282, CPP** — os dois vetores que governam TODA cautelar: **necessidade** (I) e **adequação** (II). Também: contraditório prévio (§3º), vedação à decretação de ofício (§2º, red. Lei 13.964/19), substituição/cumulação/revogação (§§4º e 5º), reavaliação periódica (§§ acrescidos pelo Anticrime — conferir redação).
- **Art. 283, CPP** — ninguém será preso senão em flagrante, por ordem escrita e fundamentada, ou por condenação — **a prisão é a *ultima ratio***.
- **Art. 319, CPP** — o **cardápio** das medidas cautelares diversas (incisos I a IX).
- **Art. 320, CPP** — proibição de ausentar-se do país (entrega de passaporte).
- **Art. 321, CPP** — liberdade provisória sem fiança quando ausentes os requisitos da preventiva.
- **Art. 312 e 313, CPP** — pressupostos e condições de admissibilidade da **preventiva** (o "teto" que a cautelar diversa evita) — se não cabe nem preventiva, não cabe cautelar alguma.
- **Art. 310, CPP** — audiência de custódia: o juiz **converte, relaxa ou concede liberdade** (com ou sem cautelar) — momento-chave para oferecer a medida diversa.

---

## O cardápio do art. 319 (o que cada medida serve para conter)

| Inciso | Medida | Risco que neutraliza |
|--------|--------|----------------------|
| I | Comparecimento periódico em juízo | Fuga (baixo/médio) — mantém o réu "localizável" |
| II | Proibição de acesso/frequência a lugares | Reiteração / ordem pública ligada a local determinado |
| III | Proibição de contato com pessoa determinada | Risco à **instrução** (testemunha/vítima) e à **vítima** (violência doméstica) |
| IV | Proibição de ausentar-se da comarca | Fuga / conveniência da instrução |
| V | Recolhimento domiciliar noturno e nos dias de folga | Reiteração / ordem pública, preservando trabalho e vínculos |
| VI | Suspensão do exercício de função pública ou atividade econômica/financeira | Reiteração **no exercício** da função/atividade (ex.: crime funcional, econômico) |
| VII | Internação provisória (inimputável/semi-imputável + risco de reiteração violenta) | Periculosidade decorrente de transtorno + crime com violência/grave ameaça |
| VIII | Fiança | Garante comparecimento e assegura, quando cabível, a ordem — recompõe risco de fuga |
| IX | Monitoração eletrônica (tornozeleira) | Fuga / controle territorial — permite verificar cumprimento das demais |

> **Art. 320:** proibição de ausentar-se do **país**, com entrega de passaporte em 24h — medida específica contra o **risco de fuga ao exterior**.

> **Cumulação (art. 282, §1º):** as medidas podem ser aplicadas **isolada ou cumulativamente**. Isso é uma faca de dois gumes: permite oferecer um "pacote" menos gravoso que a prisão (ex.: comparecimento + proibição de contato + monitoração), mas também abre espaço para o excesso (empilhar medidas redundantes). A defesa fiscaliza a **necessidade de cada camada**.

---

## A árvore — do risco invocado à medida adequada

O ponto de partida é sempre **o fundamento que o Estado invocou** (na representação/decreto). Leia o decreto e identifique o risco. Depois percorra:

```
0) A preventiva é sequer cabível? (arts. 312 + 313)
   ├── NÃO (falta fumus/periculum, ou crime fora do art. 313) → NÃO cabe cautelar alguma
   │                                                            → LIBERDADE PLENA (art. 321) / relaxamento
   └── SIM → siga: qual risco concreto?

1) RISCO DE FUGA
   ├── Localização basta?            → comparecimento periódico (I) + proibição de sair da comarca (IV)
   ├── Fuga ao exterior?             → entrega de passaporte / proibição de sair do país (art. 320)
   ├── Precisa de controle real?     → monitoração eletrônica (IX)
   └── Réu com meios de fuga/fiança  → fiança (VIII), cumulada com I/IX

2) RISCO À INSTRUÇÃO (ameaça a prova/testemunha)
   ├── Contra pessoa determinada     → proibição de contato (III)
   ├── Ligado a local determinado    → proibição de frequência (II)
   └── Fim da instrução esgota o risco? → a cautelar deve CESSAR (pedir revogação superada a colheita da prova)

3) RISCO DE REITERAÇÃO / ORDEM PÚBLICA
   ├── Ligada ao exercício de função/atividade → suspensão da função/atividade (VI)
   ├── Ligada a lugar/ambiente                 → proibição de frequência (II)
   ├── Difusa, mas com vínculos preservados    → recolhimento noturno (V) + monitoração (IX)
   └── Violência doméstica                     → proibição de contato/aproximação (III) + medidas da Lei Maria da Penha

4) INIMPUTÁVEL/SEMI-IMPUTÁVEL + crime violento + risco de reiteração
   └── internação provisória (VII) — excepcional, exige laudo; NÃO é regra
```

> **Regra de ouro da adequação (art. 282, II):** a medida escolhida tem de **corresponder ao risco alegado**. Monitoração eletrônica para conter risco à instrução, por exemplo, é **inadequada** — tornozeleira controla território, não silencia coação de testemunha. Apontar esse **descasamento entre medida e risco** é uma das teses defensivas mais fortes e mais subutilizadas.

---

## O teste tríplice de proporcionalidade (aplicar a CADA medida cogitada)

Toda cautelar — inclusive a diversa — só se sustenta se passar nos três filtros. É o roteiro para **defender** a medida que você propõe e para **atacar** a que foi imposta:

1. **Adequação** (art. 282, II) — a medida é *idônea* para conter **aquele** risco concreto? (meio × fim) Se a medida não neutraliza o risco alegado, é inadequada.
2. **Necessidade** (art. 282, I) — não há medida **menos gravosa** igualmente eficaz? Se comparecimento periódico basta, monitoração é desnecessária; se cautelar diversa basta, a **prisão é desnecessária** (art. 282, §6º — prisão preventiva como *extrema ratio*, só quando inadequadas ou insuficientes as diversas).
3. **Proporcionalidade em sentido estrito** — o sacrifício imposto ao réu é **proporcional** à gravidade concreta e à pena provável? Cautelar que, somada, supera o que seria a pena ou o regime provável é **desproporcional** (a cautelar não pode ser antecipação de pena).

> **Vetor decisivo (art. 282, §6º):** a preventiva só quando **não for cabível a sua substituição por outra medida cautelar** (art. 319). Ou seja, a lei **inverte o ônus**: quem quer a prisão tem de demonstrar que **nenhuma** diversa serve. A defesa explora exatamente isso — oferecer um cardápio concreto do art. 319 e exigir do juízo a demonstração de por que cada uma seria insuficiente.

---

## Teses defensivas típicas (e as contra-teses)

**Tese 1 — Descasamento medida × risco (inadequação, art. 282, II).**
A medida imposta não guarda relação instrumental com o risco invocado. Ex.: decreto fundado em risco à instrução, mas impõe monitoração eletrônica (que controla fuga, não coação de testemunha).
*Contra-tese (acusação):* a cumulação é lícita (art. 282, §1º) e a medida integra um conjunto de controle. *Réplica:* a licitude da cumulação não dispensa a adequação de **cada** medida isolada.

**Tese 2 — Existência de medida menos gravosa (necessidade, art. 282, I e §6º).**
Há no art. 319 medida que neutraliza o mesmo risco com menor sacrifício — logo a prisão (ou a cautelar mais gravosa) é desnecessária. A defesa **oferece o cardápio concreto**.
*Contra-tese:* gravidade do crime / periculosidade exigem controle máximo. *Réplica:* gravidade **abstrata** não fundamenta cautelar (a fundamentação deve ser concreta — art. 315, §2º; e a Súmula não substitui análise do caso).

**Tese 3 — Fundamentação genérica / gravidade abstrata.**
O decreto se apoia na gravidade em tese do delito, sem apontar elementos concretos do risco. Fundamentação *per relationem* ou padronizada não sustenta cautelar.
*Base:* art. 312 (contemporaneidade e concretude do *periculum libertatis*, red. Lei 13.964/19); art. 315, §§1º e 2º (dever de fundamentação).

**Tese 4 — Perda superveniente do fundamento (cláusula *rebus sic stantibus*).**
Encerrada a instrução, cessa o risco à colheita da prova → a cautelar imposta para protegê-la deve ser **revogada** (art. 282, §5º). Cautelar é situacional, não definitiva.
*Ação:* pedir revogação/substituição sempre que o fundamento original se esvair.

**Tese 5 — Ausência de reavaliação periódica.**
O decreto/manutenção não foi reavaliado nos prazos legais (art. 282, §§ da Lei 13.964/19 — conferir redação e prazo vigentes). A falta de reavaliação é vício.
*Cautela:* confirme o prazo e o alcance da nulidade/ilegalidade na `jurisprudencia-stj-stf` — há divergência sobre efeito automático.

**Tese 6 — Cautelar como antecipação de pena (proporcionalidade estrita).**
Medida cujo peso supera a pena/regime provável configura constrangimento ilegal — a cautelar não pode ser mais severa que o resultado final provável do processo.

**Tese 7 — Hipossuficiência e fiança (art. 350, CPP).**
Sendo o réu economicamente hipossuficiente, a fiança pode ser **dispensada** e substituída por outra cautelar, sob pena de a liberdade virar privilégio de quem paga. Conferir também redução/dispensa dos arts. 325 e 350.

---

## Situações-âncora frequentes (mapa rápido)

- **Preso em flagrante, primário, crime sem violência, réu com residência e trabalho fixos:** na custódia (art. 310), pleitear liberdade com **comparecimento periódico (I)** — eventualmente **+ proibição de sair da comarca (IV)**. Prisão aqui é desproporcional.
- **Risco de coação de testemunha específica:** oferecer **proibição de contato (III)** — mede-se exatamente ao risco à instrução; é alternativa direta à preventiva por conveniência da instrução.
- **Violência doméstica:** **proibição de aproximação/contato (III)** + medidas protetivas da Lei 11.340/2006. A cautelar penal e a protetiva coexistem; a defesa fiscaliza a necessidade concreta de cada uma.
- **Crime funcional / econômico:** **suspensão da função ou atividade (VI)** neutraliza a reiteração *no exercício* sem encarcerar — alternativa forte à preventiva por ordem pública/econômica.
- **Réu com passaporte e meios de deixar o país:** **entrega de passaporte (art. 320)** + **monitoração (IX)**; a fuga ao exterior se contém sem prisão.
- **Ordem pública com vínculos preservados (trabalho, família):** **recolhimento noturno (V)** + **monitoração (IX)** preserva a atividade lícita e contém o período de maior risco.

> **Monitoração eletrônica (IX):** é medida-meio poderosa, mas **não é panaceia** nem deve ser imposta reflexamente. Para o regime de execução da tornozeleira e suas nuances, ver `execucao-monitoracao-eletronica`. Aqui, o foco é a **decisão** de ofertá-la (ou combatê-la) como cautelar diversa na fase de conhecimento.

---

## Súmulas e balizas (sob o Citation Gate — conferir SEMPRE via `jurisprudencia-stj-stf`)

- **Gravidade abstrata do delito não fundamenta prisão/cautelar** — orientação consolidada de STF/STJ; a fundamentação deve ser **concreta**. Ampara a Tese 3. *(Localizar o precedente/enunciado exato antes de citar — não fixar número de memória.)* **[NÃO VERIFICADO — confirmar]**
- **Súmula 81/STJ** — "Não se concede fiança quando, em concurso material, a soma das penas mínimas cominadas for superior a dois anos de reclusão." *(Súmula notória; ainda assim conferir vigência/redação.)*
- **Contemporaneidade do *periculum*** (art. 312, red. Lei 13.964/19) — fato remoto não sustenta cautelar atual; há teses do STJ sobre isso. **[NÃO VERIFICADO — buscar informativo/tema via `jurisprudencia-stj-stf`]**
- **Súmula Vinculante 11/STF** (uso de algemas) — tangencia a audiência de custódia; citar só se pertinente ao caso concreto.

> **Regra do Citation Gate (inegociável):** dispositivos de lei e súmulas **notórias** podem ser citados com certeza. **Qualquer** número de HC/RHC/REsp/RE, informativo, tema repetitivo ou tese específica **sem certeza absoluta** deve ser marcado **[NÃO VERIFICADO]** e conferido em `jurisprudencia-stj-stf` antes de ir para a peça. **Ensinar a tese e apontar o dispositivo vence arriscar um acórdão inventado** — há sanções reais por jurisprudência fabricada por IA.

---

## Erros comuns (anti-padrões)

- **Escolher a medida pela gravidade abstrata do crime**, não pelo risco concreto invocado. (O crime ser grave não define qual cautelar cabe — o **risco** define.)
- **Oferecer medida que não neutraliza o risco alegado** (ex.: comparecimento periódico para conter coação de testemunha) — enfraquece a proposta e dá munição à acusação.
- **Aceitar cumulação redundante** sem questionar a necessidade de cada camada (art. 282, §1º não dispensa o teste de necessidade medida a medida).
- **Não oferecer o cardápio concreto do art. 319** ao pedir liberdade — deixar o juízo sem alternativa é empurrá-lo para a prisão. Ofereça o "pacote" menos gravoso, explícito.
- **Esquecer o *rebus sic stantibus*** — manter cautelar cujo fundamento já se esvaiu (instrução encerrada, prova colhida) é constrangimento que se combate com pedido de revogação (art. 282, §5º).
- **Tratar cautelar diversa como "favor"** e não como direito decorrente da proporcionalidade — a preventiva é *extrema ratio* (art. 282, §6º), o ônus é de quem quer prender.
- **Citar número de precedente de memória** — sempre passar pela verificação.

## Checklist de análise (antes de decidir o quê pedir)

- [ ] Li o **decreto/representação** e **identifiquei o risco concreto** invocado (fuga? instrução? reiteração/ordem pública?)?
- [ ] Verifiquei se a **preventiva é sequer cabível** (arts. 312 + 313)? (Se não, o pedido é liberdade plena/relaxamento, não cautelar diversa.)
- [ ] Para cada medida cogitada, apliquei o **teste tríplice** (adequação, necessidade, proporcionalidade estrita)?
- [ ] A medida que vou **oferecer** neutraliza **exatamente** o risco alegado (adequação)?
- [ ] Existe medida **menos gravosa** igualmente eficaz que eu deva propor primeiro (necessidade)?
- [ ] A medida **imposta** (se houver) tem **descasamento** com o risco (tese de inadequação)?
- [ ] A fundamentação do decreto é **concreta** ou apenas **gravidade abstrata** (Tese 3)?
- [ ] O fundamento **ainda subsiste** ou já se esvaiu (*rebus sic stantibus*, Tese 4)?
- [ ] Houve **reavaliação periódica** (Tese 5) e **contraditório prévio** (art. 282, §3º)?
- [ ] Há **hipossuficiência** que justifique dispensa/redução de fiança (art. 350)?
- [ ] Todas as **súmulas/precedentes** passaram por `jurisprudencia-stj-stf` (Citation Gate)?
- [ ] Confirmei a **redação vigente** dos arts. 282/319/320 (Lei 13.964/19 e posteriores)?

---

## Encaminhamento (desta análise para a peça)

Concluída a análise, o resultado alimenta a peça adequada — **esta skill decide, outra redige**:

- **Substituir preventiva / conceder liberdade com cautelar** → `liberdade-provisoria-relaxamento` (ou skill de revogação/relaxamento vigente).
- **Prisão domiciliar** como alternativa (art. 318) → `prisao-domiciliar`.
- **Regime da tornozeleira** já concedida → `execucao-monitoracao-eletronica`.
- **Polo acusatório** (requerer cautelar) → `representacao-cautelares-mp`.
- **Verificação de qualquer citação** → `jurisprudencia-stj-stf`.

**Padrão de redação:** ao converter a análise em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).

---

## Nota de conformidade

Este material é **rascunho técnico e apoio à decisão estratégica — não substitui o juízo do advogado responsável nem dispensa a revisão humana obrigatória** antes de qualquer protocolo. A escolha e a fundamentação da cautelar são sempre do profissional (CED/OAB, art. 2º; Provimento 205/2021 para a advocacia; CNMP para o MP; LC 80/94 para a Defensoria). **Toda** referência a súmula, tese ou precedente passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` — na dúvida, **omitir vence inventar**. Confirme a redação vigente dos dispositivos citados antes de fundamentar.
