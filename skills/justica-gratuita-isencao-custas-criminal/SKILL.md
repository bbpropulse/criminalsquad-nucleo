---
name: justica-gratuita-isencao-custas-criminal
description: >-
  Use ao requerer justiça gratuita / assistência judiciária e isenção ou suspensão da exigibilidade
  das custas processuais penais para o réu pobre ou o querelante hipossuficiente, em qualquer fase
  do processo — no bojo da própria peça ou em petição incidental autônoma —, e ao recorrer da
  decisão que indefere o benefício. Gatilhos: justiça gratuita, gratuidade da justiça, assistência
  judiciária, benefício da gratuidade, réu… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, incidental]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-justica-gratuita-isencao-custas-criminal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["justica-gratuita-isencao-custas-criminal", "justica gratuita", "custas criminal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Justiça Gratuita e Isenção de Custas (processo penal)

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

Esta skill orienta o **requerimento da gratuidade da justiça e da isenção/suspensão das custas** no processo penal — a assistência judiciária ao **querelante economicamente pobre** da ação penal privada (CPP art. 32) e ao **réu hipossuficiente** (via CF 5º, LXXIV, e CPC 98-99 aplicáveis subsidiariamente). É peça **incidental e transversal**: acompanha a resposta à acusação, a queixa, a apelação, os memoriais ou qualquer manifestação, ou vem como **petição autônoma** a qualquer tempo — o que o benefício alcança é o **custo do processo**, não o mérito da causa.

> **Lição central:** a defesa técnica do réu é **indisponível** — nenhum acusado é processado sem defensor (CPP art. 261), e o juiz nomeia dativo se o réu não constituir advogado (CPP art. 263), independentemente de prova de miserabilidade. Já a **gratuidade da justiça** (isenção de custas/taxa) depende de **requerimento** com declaração de hipossuficiência, que goza de presunção **relativa** de veracidade quanto à pessoa natural (CPC 99, §3º). O pedido formal serve, sobretudo, para **blindar o cliente contra a cobrança de custas, taxa judiciária e multa processual** ao final. Peça a gratuidade **desde a primeira manifestação** e, na condenação, ataque desde logo a **exigibilidade** da verba, não só o débito.

> **Fronteira de escopo:** aqui mora só o **custeio do processo** (custas, taxa judiciária, honorários do dativo, exigibilidade da multa). A construção da defesa de mérito não vive aqui — a `resposta-preliminar` e a `apelacao` cuidam disso. A gratuidade do **querelante** que ajuíza a `queixa-crime` é requerida na própria inicial (esta skill dá a fundamentação); a **nomeação e os honorários do defensor dativo** têm desdobramento próprio, mas a isenção do assistido é o que se trata aqui. A **multa penal** como pena (dosimetria, conversão) é tema de execução (`execucao-progressao-regime` e afins) — aqui só se cuida da sua **suspensão de exigibilidade** por hipossuficiência.

## O instituto e a base legal

| Dispositivo | O que garante / exige |
|---|---|
| **CF art. 5º, LXXIV** | O Estado presta **assistência jurídica integral e gratuita** aos que comprovarem insuficiência de recursos — matriz constitucional do benefício |
| **CPP art. 32** | Nos crimes de **ação privada**, o juiz nomeia advogado ao **querelante que comprovar pobreza**; §1º **define** pobre (quem não pode prover às despesas sem privar-se do necessário ao sustento próprio ou da família); §2º admite como prova suficiente o **atestado da autoridade policial** da residência do ofendido |
| **CPP art. 261** | **Nenhum acusado** será processado ou julgado **sem defensor** — a ampla defesa é indisponível, independe de recursos |
| **CPP art. 263** | Se o réu não constituir advogado, o juiz **nomeará defensor** (dativo), ressalvado o direito de, a todo tempo, nomear o de sua confiança |
| **CPP arts. 804-806** | Regime das **custas**: a sentença condenatória as impõe ao vencido (804); a ação privada tem regras próprias de custas do querelante e da absolvição (805-806) |
| **CPP art. 806, §2º** | Na **ação penal privada**, o feito **não anda** sem o preparo das custas — salvo se o querelante for **pobre**, hipótese em que a gratuidade destrava o processo |
| **Lei 1.060/1950** | Assistência judiciária aos necessitados — subsiste no que não foi revogado pelo CPC/2015; base histórica da **declaração de hipossuficiência** |
| **CPC arts. 98-102** (subsidiários — CPP art. 3º) | Disciplina atual da **gratuidade**: rol do que abrange (98, §1º), presunção de veracidade da declaração da pessoa natural (99, §3º), **suspensão** da exigibilidade por 5 anos ao sucumbente beneficiário (98, §3º), impugnação e **recurso** (100 e 101) |
| **LC 80/94** | Organiza a **Defensoria Pública** — assistência integral e gratuita ao necessitado; prazo em dobro e intimação pessoal do defensor público |
| **Taxa judiciária estadual** | Tributo de competência **estadual** (código tributário / lei de custas de cada TJ) — a isenção acompanha a gratuidade; **confira a lei estadual de regência** via agente `lei-e-sumula` |

A gratuidade **não é** perdão do débito: é **isenção** (o querelante pobre da ação privada litiga sem preparo — CPP 32 e 806, §2º) ou **suspensão da exigibilidade** (para o sucumbente beneficiário, que só paga se, em até 5 anos, cessar a hipossuficiência — CPC art. 98, §3º). Peça a providência **correta** para cada caso.

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência | Onde aprofundar |
|---|---|---|
| Réu sem condições de contratar advogado | Nomeação de **defensor dativo** (CPP arts. 263 e 261) ou remessa à Defensoria; o assistido **não paga** honorários | esta skill (isenção) + fronteira com nomeação do dativo |
| Réu que teme custas e taxa judiciária ao final | Requerer **gratuidade** já na 1ª manifestação (CF 5º, LXXIV c/c CPC 98-99, aplicáveis pelo CPP 3º) | esta skill (declaração + prova) |
| **Querelante** pobre que quer ajuizar queixa sem preparo | Gratuidade na **própria inicial** (CPP art. 806, §2º) — o feito anda sem preparo | `queixa-crime` (a inicial) + esta skill (fundamento) |
| **Condenação** que impôs custas ao réu beneficiário | Requerer a **suspensão da exigibilidade** (CPC 98, §3º) na sentença/apelação | `apelacao` (recurso) + esta skill (tese de exigibilidade) |
| **Multa processual/penal** que o condenado pobre não pode pagar | Suspender a **exigibilidade** por insuficiência; a cobrança segue rito da dívida ativa (LEP art. 51, red. Lei 13.964/19) | esta skill + fronteira com execução |
| Juiz **indefere** a gratuidade | Impugnar por **agravo/recurso** conforme o momento; consignar prejuízo | seção "Indeferimento" desta skill |

## Requisitos e prova da hipossuficiência

O núcleo do benefício é a **insuficiência de recursos** — mas o **standard de prova** difere conforme o beneficiário:

| Beneficiário | O que basta | Cuidado |
|---|---|---|
| **Réu** em ação penal | A defesa técnica é **indisponível** (CPP 261); se o réu não constituir advogado, o juiz nomeia **dativo** (CPP 263), independentemente de prova de miserabilidade. Para a **isenção de custas**, a **declaração de hipossuficiência** firmada goza de presunção de veracidade (CPC 99, §3º) | A presunção da pessoa natural é **relativa** — o juízo pode exigir prova se houver **elementos concretos** que a contrariem (patrimônio ostensivo nos autos) |
| **Querelante** (pessoa natural) | Declaração de hipossuficiência; a presunção de veracidade também o alcança (CPC 99, §3º) — destrava o preparo (CPP 806, §2º) | Querelante com sinais de capacidade econômica → junte elementos (renda, ausência de patrimônio) para reforçar |
| **Pessoa jurídica** | **Não** há presunção — deve **comprovar** a impossibilidade de arcar com as custas | Aplica-se ao querelante PJ e a assistentes PJ |

**A declaração é o instrumento, não a prova plena.** Firme **declaração de hipossuficiência** (do próprio beneficiário; o advogado pode declarar se tiver poderes na procuração), e **reforce com elementos** quando o perfil do cliente puder gerar dúvida: comprovante de renda, CTPS, ausência de bens, inscrição em programa social, condição de preso. Nunca afirme fato patrimonial que os autos desmintam — a má-fé na declaração autoriza revogação e multa (CPC 100, p.ú.).

## O que a gratuidade abrange (e o que não)

- **Abrange** (CPC 98, §1º, aplicável): custas e despesas processuais, **taxa judiciária**, selos, despesas com editais, perícia requerida pelo beneficiário (com ressalvas de rateio), honorários de dativo/perito quando a lei atribuir ao Estado, e a **isenção de preparo recursal**.
- **Suspende a exigibilidade** (CPC 98, §3º) das verbas de sucumbência a que for condenado o beneficiário: só se paga se, em **5 anos**, o credor provar que cessou a hipossuficiência; depois, **extingue-se**.
- **Não abrange** automaticamente: **multa penal** como **pena** (é sanção, não custa — mas sua **exigibilidade** pode ser suspensa por insuficiência, e sua execução segue a LEP art. 51); **efeitos civis** da condenação (reparação — CPP 387, IV); **honorários de advogado constituído** pelo próprio beneficiário.

## Momento e forma — desde a primeira manifestação, ou a qualquer tempo

- **No bojo da peça:** o mais comum e seguro. Inclua um **tópico** ("Do pedido de gratuidade da justiça") na resposta à acusação, na queixa, na apelação ou nos memoriais, e o **pedido correspondente** no dispositivo. A gratuidade pode ser pedida **a qualquer tempo e grau** (CPC 99, *caput*).
- **Petição incidental autônoma:** quando o benefício não foi pedido na peça inicial e surge a necessidade (intimação para recolher custas/taxa, preparo de recurso). Dirigida ao **juízo/relator do feito**.
- **Contagem de prazos:** os prazos penais são **contínuos e peremptórios**, excluído o dia do começo e incluído o do vencimento (**CPP art. 798, *caput* e §1º**). Para a **Defensoria Pública**, prazo **em dobro** e intimação **pessoal** (LC 80/94). O pedido de gratuidade em si não tem prazo preclusivo — mas o **recurso** contra o indeferimento, sim.

## Estrutura forense do requerimento (tópico ou petição)

Endereçamento ao **juízo/tribunal do feito** (padrão estrutural na best-practice `peticao-criminal`):

```
[Como TÓPICO da peça, ou como petição autônoma:]
AO JUÍZO DA [N]ª VARA CRIMINAL DA COMARCA DE [COMARCA] — [UF]
[ou ao Relator, se em grau recursal]

Autos nº [Nº DO PROCESSO]

[Se autônoma:] [NOME], já qualificado(a) nos autos em epígrafe, por seu
advogado que ao final subscreve, vem requerer os BENEFÍCIOS DA GRATUIDADE
DA JUSTIÇA, com fulcro no art. 5º, LXXIV, da CF, no art. 32 do CPP e nos
arts. 98 e seguintes do CPC (aplicação subsidiária — art. 3º do CPP),
pelas razões seguintes:

I — DO DIREITO À GRATUIDADE
Fundamento constitucional (CF 5º, LXXIV) e legal (CPP 32 — querelante
pobre; CPC 98-99, aplicáveis por força do CPP 3º). No processo penal, a
defesa técnica é indisponível: nenhum acusado é processado sem defensor
(CPP 261), nomeando-se dativo se não constituir advogado (CPP 263).

II — DA HIPOSSUFICIÊNCIA
Declaração de hipossuficiência firmada (anexa), com presunção de veracidade
(CPC 99, §3º), REFORÇADA por [renda / ausência de bens / condição de preso /
inscrição em programa social — juntar os que existirem]. [Se PJ: comprovação
efetiva, pois não há presunção.]

III — DA ABRANGÊNCIA
Isenção de custas, taxa judiciária estadual, despesas processuais e preparo
recursal (CPC 98, §1º); em caso de sucumbência, SUSPENSÃO DA EXIGIBILIDADE
por 5 anos (CPC 98, §3º).

IV — DOS PEDIDOS
Requer-se:
  a) a concessão dos BENEFÍCIOS DA GRATUIDADE DA JUSTIÇA;
  b) a ISENÇÃO de custas, taxa judiciária e despesas processuais, inclusive
     de preparo recursal;
  c) [querelante] o processamento da queixa INDEPENDENTEMENTE DE PREPARO
     (CPP 806, §2º);
  d) [em condenação] a SUSPENSÃO DA EXIGIBILIDADE das verbas de sucumbência
     e da multa (CPC 98, §3º), por insuficiência de recursos;
  e) em caso de indeferimento, a intimação para complementar a prova ANTES
     de eventual exigência de recolhimento, e a consignação do PROTESTO.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

## A multa e as custas na condenação — ataque a exigibilidade

Sobrevindo condenação, a sentença impõe custas ao vencido (CPP 804) e, quando for o caso, **multa**. Para o cliente pobre:

- **Custas e taxa judiciária:** requeira a **suspensão da exigibilidade** (CPC 98, §3º) — o débito existe, mas só é cobrável se, em 5 anos, cessar a hipossuficiência; após, extingue-se. Faça o pedido na própria **apelação** (ver skill `apelacao`), como capítulo autônomo.
- **Multa penal:** com a Lei 13.964/2019, a multa não paga tem execução perante a **vara de execução penal** e cobrança pelo rito da **dívida ativa** (LEP art. 51). A **insolvência** do apenado autoriza requerer a **suspensão da exigibilidade** — a multa **não impede** benefícios da execução se comprovada a impossibilidade de pagamento (tema com entendimento consolidado; **confira o parâmetro atual do STF/STJ** via agente `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**).
- **Honorários do dativo:** o **assistido não paga**; o defensor dativo tem direito a honorários **arbitrados** pelo juízo, a cargo do **Estado** (ou, quando fixados contra o vencido não beneficiário, cobrados deste). A isenção do cliente é o que se sustenta aqui.

## Indeferimento — recorra na hora certa

O indeferimento da gratuidade **não pode** simplesmente barrar o andamento sem oportunidade de prova (CPC 99, §2º: o juiz só indefere após permitir a **comprovação** dos pressupostos). A reação:

- **Antes de indeferir**, o juízo deve **intimar** o requerente para comprovar a hipossuficiência — invoque isso se o indeferimento vier de plano.
- **Recurso:** a decisão que **indefere** ou **revoga** a gratuidade desafia **recurso** próprio. No processo penal, o meio varia conforme o momento e o tribunal: em 1º grau, **agravo/recurso** cabível (frequentemente pela via do CPC 101 c/c CPP 3º) ou, se a decisão integra sentença, no bojo da **apelação**; em grau recursal, **agravo interno**. **Não presuma o recurso de memória** — confira o cabimento no rito e no regimento do tribunal via agente `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**.
- **Prejuízo e efeito suspensivo:** demonstre o **prejuízo concreto** (impossibilidade de recolher preparo → deserção iminente) e requeira **efeito suspensivo** para que o não recolhimento não gere deserção antes do julgamento do recurso.

## Antes de protocolar

- [ ] Fundamento **constitucional + penal + subsidiário** citado (CF 5º, LXXIV; CPP 32/261/263; CPC 98-99)?
- [ ] **Declaração de hipossuficiência** firmada e anexada?
- [ ] Prova **reforçada** quando o perfil do cliente gera dúvida (ou obrigatória, se **pessoa jurídica**)?
- [ ] Pedido distingue **isenção** (réu pobre, já isento) de **suspensão da exigibilidade** (sucumbente beneficiário)?
- [ ] Abrangência pedida inclui **taxa judiciária estadual** e **preparo recursal**?
- [ ] **Querelante pobre:** pedido de processamento **sem preparo** (CPP 806, §2º)?
- [ ] Em condenação: pedido de **suspensão da exigibilidade** de custas **e** da multa (CPC 98, §3º)?
- [ ] Prazos conferidos pelo **CPP 798, §1º** (e em dobro, se Defensoria)?
- [ ] Dispositivos conferidos (números atuais) e precedentes marcados **[NÃO VERIFICADO]** até o Citation Gate?

## Lembretes finais

- **Defesa indisponível:** nenhum acusado é processado sem defensor (CPP 261) e o juiz nomeia dativo se o réu não constituir advogado (CPP 263), sem prova prévia de miserabilidade — mas peça a gratuidade **formalmente** para blindar contra custas e taxa ao final.
- **Isenção ≠ suspensão:** o querelante pobre tem isenção de custas na ação privada (CPP 32); o réu/sucumbente beneficiário da gratuidade tem a exigibilidade das verbas de sucumbência **suspensa** por 5 anos (CPC 98, §3º). Peça o correto.
- **Declaração + reforço:** a declaração presume-se verdadeira (pessoa natural), mas reforce com elementos quando houver dúvida; **PJ comprova**, não presume.
- **Querelante pobre destrava o preparo** (CPP 806, §2º) — sem gratuidade, a ação privada não anda.
- **Na condenação, ataque a exigibilidade** de custas **e** da multa — não deixe a cobrança correr contra o cliente insolvente.
- **Indeferimento:** exija a chance de comprovar antes (CPC 99, §2º), recorra no meio certo e peça efeito suspensivo para não deserção.
- **Nada de memória:** dispositivos por `lei-e-sumula`; recurso cabível e precedentes por `jurisprudencia-stj-stf`, com **[NÃO VERIFICADO]** até conferir.
- Toda entrega é **rascunho técnico para revisão humana obrigatória**.

## Apoie-se em

- **Best-practice `peticao-criminal`** — padrão estrutural do requerimento e do tópico (endereçamento, preâmbulo, pedidos).
- **Skill `queixa-crime`** — fronteira: a gratuidade do **querelante** pobre é pedida na própria inicial (CPP 806, §2º); esta skill fornece a fundamentação da isenção do preparo.
- **Skill `resposta-preliminar`** — fronteira: a defesa de mérito e as preliminares vivem lá; aqui só o custeio do processo. Inclua o tópico de gratuidade na resposta.
- **Skill `apelacao`** — fronteira: em condenação, o capítulo de **suspensão da exigibilidade** de custas e multa é deduzido no recurso; esta skill dá a tese.
- **Agente `lei-e-sumula`** — conferência dos dispositivos do CPP/CPC e, sobretudo, da **lei estadual de custas/taxa judiciária** de regência.
- **Agente `jurisprudencia-stj-stf`** — cabimento do recurso contra o indeferimento e parâmetros atuais sobre exigibilidade da multa ao insolvente (sempre com **[NÃO VERIFICADO]** até validação).
- **Agente `verificador-citacoes`** — Citation Gate **obrigatório** antes de finalizar: toda súmula, precedente ou dispositivo citado na peça passa por ele; nada sai com **[NÃO VERIFICADO]** pendente.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, blocos completos, coesão e persuasão, zero enchimento (a régua de obra-prima que a revisão cobra).
