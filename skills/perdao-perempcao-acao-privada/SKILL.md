---
name: perdao-perempcao-acao-privada
description: >-
  Use ao arguir ou reconhecer as causas extintivas PRÓPRIAS da ação penal privada — perdão do
  ofendido (CP arts. 105-106, bilateral e comunicável a corréus), perempção (CPP art. 60, por
  inércia do querelante) e renúncia ao direito de queixa (CP art. 104) —, distinguindo-as da
  decadência e da prescrição (que moram em extincao-punibilidade-prescricao) e aplicando a
  indivisibilidade (CPP arts. 48-49). Serve tanto ao querelante… Não use para conclusão definitiva
  sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, acao-privada]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-perdao-perempcao-acao-privada"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["perdao-perempcao-acao-privada", "perdao perempcao", "acao privada"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Perdão, perempção e renúncia na ação penal privada

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

Esta skill trata das causas extintivas da punibilidade **exclusivas da ação penal privada**: o **perdão do ofendido** (CP arts. 105-106), a **perempção** (CPP art. 60) e a **renúncia ao direito de queixa** (CP art. 104). Todas figuram no rol do art. 107 do CP (incisos IV — perempção — e V — renúncia e perdão aceito), mas cada uma tem regime, momento e efeitos próprios que se confundem na prática. A fronteira com as skills irmãs é rígida: a **`queixa-crime`** cuida do *ajuizamento* da ação privada (querelante × querelado, procuração com poderes especiais, indivisibilidade na propositura); a **`retratacao-representacao`** cuida da vontade da vítima na **ação pública condicionada** (renúncia e retratação da *representação*, não da *queixa*); e a **`extincao-punibilidade-prescricao`** cuida da **decadência** (6 meses para queixa/representação, CPP 38) e da **prescrição** — que **não** se confundem com os institutos aqui. Aqui mora o que é *próprio* de quem já é titular (ou réu) de uma ação penal privada e a extingue por vontade ou por inércia.

> **Lição central:** renúncia, perdão e perempção não são sinônimos, e o erro na escolha custa o pedido. A régua temporal resolve quase tudo: **renúncia** é *antes* de a queixa ser oferecida (abdica-se do direito de agir); **perdão** é *depois* de oferecida e *antes* do trânsito em julgado (é ato bilateral — só extingue se **aceito**); **perempção** é a *sanção* pela inércia do querelante *no curso* da ação já instaurada (independe da vontade do querelado). Renúncia e perempção são **unilaterais**; o perdão, **não** — perdão recusado não produz efeito nenhum.

## O instituto e a base legal

| Dispositivo | O que garante / exige |
|---|---|
| **CP art. 104** | **Renúncia** ao direito de queixa — expressa ou tácita; tácita resulta da prática de ato incompatível com a vontade de processar (o **recebimento de indenização do dano** *não* implica renúncia, art. 104, parágrafo único) |
| **CP art. 105** | **Perdão do ofendido** — obsta o prosseguimento da ação; cabível na exclusivamente privada e na personalíssima; **não** cabe na ação pública |
| **CP art. 106** | Regime do perdão: **comunica-se a todos os querelados** (mas só aproveita o que aceitar); concedido a um, estende-se aos demais; concedido por um dos ofendidos, **não** prejudica o direito dos outros; **depende de aceitação** |
| **CP art. 106, §2º** | Perdão **não é admissível depois que passa em julgado a sentença condenatória** — isto é, cabe **até o trânsito em julgado** |
| **CP art. 107, V** | **Renúncia** e **perdão aceito** são causas de **extinção da punibilidade** |
| **CPP art. 48** | A queixa é **indivisível** contra todos os autores; o MP vela pela indivisibilidade |
| **CPP art. 49** | **Renúncia** ao direito de queixa quanto a **um** dos autores **estende-se a todos**; e o **perdão** concedido a um dos querelados **aproveita a todos**, sem efeito quanto ao que o **recusar** |
| **CPP art. 51** | **Perdão concedido a um** dos querelados aproveita a todos, **sem** que produza efeito quanto ao que o **recusar** |
| **CPP art. 58** | Concedido o perdão, o querelado será **intimado** a dizer se o aceita; **silêncio em 3 dias importa aceitação** |
| **CPP art. 59** | A aceitação do perdão **fora do processo** far-se-á por declaração assinada |
| **CPP art. 60** | **Perempção** — extingue-se a punibilidade nas quatro hipóteses de inércia do querelante (abaixo) |

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Instituto | Providência |
|---|---|---|
| Vítima ainda **não ofereceu** queixa e não quer processar | **Renúncia** (CP 104) | Termo/petição de renúncia; se tácita, provar o ato incompatível. Ajuizamento é da **`queixa-crime`** |
| Queixa **já oferecida**, querelante quer encerrar e o querelado tende a aceitar | **Perdão** (CP 105-106) | Petição de perdão + provocar a intimação do querelado (CPP 58) |
| Querelante **abandonou** o processo (sumiu, faltou, morreu, não pediu condenação) | **Perempção** (CPP 60) | Requerimento do querelado (ou reconhecimento de ofício) pela extinção |
| A vontade era sobre **representação** (ação pública condicionada), não queixa | Renúncia/retratação da representação | Vai para a skill **`retratacao-representacao`** |
| Passou o prazo de **6 meses** sem oferecer queixa | **Decadência** (CPP 38) | Vai para a skill **`extincao-punibilidade-prescricao`** |
| Inércia estatal pelo **tempo**, com ou sem ação | **Prescrição** | Vai para a skill **`extincao-punibilidade-prescricao`** |

## Renúncia (CP 104) — antes de oferecer a queixa

Ato **unilateral** do ofendido (ou de seu representante legal) pelo qual abdica do direito de agir, **antes** do oferecimento da queixa. Pode ser:

- **Expressa** — declaração assinada (CPP 50, *caput*: firmada pelo ofendido, representante legal ou procurador com poderes especiais).
- **Tácita** — prática de ato **incompatível** com a vontade de processar (ex.: convidar o ofensor para ser padrinho de casamento; frequentar reconciliado). **Cuidado:** o **recebimento de indenização** do dano **não** é renúncia tácita (CP 104, parágrafo único).

> **Indivisibilidade (CPP 49):** renúncia a **um** dos autores **estende-se a todos**. Por isso, na **`queixa-crime`**, deixar um coautor de fora é lido como **renúncia tácita** que fulmina a ação inteira. Aqui é o outro lado da moeda: quando o cliente é querelado deixado de fora, argua a renúncia tácita (48-49) para extinguir contra todos.

## Perdão do ofendido (CP 105-106) — bilateral, depois de oferecida a queixa

Cabível **após** o oferecimento da queixa e **até o trânsito em julgado** (CP 106, §2º). É a viga que distingue este instituto de todos os outros: **o perdão é bilateral**. Concedido pelo querelante, só extingue a punibilidade **se o querelado o aceitar** (expressa ou tacitamente).

**Regras de comunicação (CP 106 + CPP 51):**
- Perdão a **um** dos querelados **aproveita a todos** — mas só quanto aos que **aceitarem**; o que recusar segue respondendo (CPP 49, parte final; 51).
- Havendo **vários ofendidos**, o perdão de um **não prejudica** o direito dos demais de prosseguir (CP 106, I).
- **Processual** (nos autos) ou **extraprocessual** (declaração assinada, CPP 59).

**Aceitação (CPP 58):** oferecido o perdão, o querelado é **intimado** a manifestar-se; **silêncio por 3 dias importa aceitação** — pegadinha clássica: o silêncio do querelado *aceita*, mas o silêncio do querelante *jamais* concede perdão (perdão é ato positivo).

> Perdão **não cabe na ação pública** (nem na condicionada). Se a hipótese é de representação, a vontade da vítima se veicula por renúncia/retratação da representação — skill **`retratacao-representacao`**.

## Perempção (CPP 60) — a sanção pela inércia do querelante

Sanção processual: extingue a punibilidade quando o querelante **abandona** a ação já instaurada. **Independe da vontade do querelado** e **só existe na ação exclusivamente privada** (não na privada subsidiária da pública — nesta, a inércia devolve a titularidade ao MP, art. 29 CPP). As **quatro hipóteses** do art. 60:

| Inc. | Hipótese | Pegadinha |
|---|---|---|
| **I** | Querelante deixa de **promover o andamento** do processo por **30 dias** seguidos | Prazo **contínuo**; a inércia deve ser do querelante, não do juízo/cartório |
| **II** | Falecendo o querelante (ou tornando-se incapaz), **não comparecer** sucessor legitimado (**CADI** — cônjuge, ascendente, descendente ou irmão, CPP 31/36) para prosseguir em **60 dias** | Na ação **personalíssima** (art. 236 CP), a morte extingue a punibilidade — não há sucessão; ver **`queixa-crime`**. Inclusão do **companheiro/união estável** é tese doutrinária/jurisprudencial — verifique antes de invocar [NÃO VERIFICADO] |
| **III** | Querelante **deixar de comparecer**, sem justo motivo, a **ato** do processo a que deva estar presente, **ou** deixar de **formular o pedido de condenação nas alegações finais** | O querelante que comparece mas **não pede condenação** nas finais **perime** — erro fatal em prática |
| **IV** | Sendo o querelante **pessoa jurídica**, esta se **extinguir sem deixar sucessor** | — |

> A perempção é **matéria de ordem pública** dentro da ação privada, mas seu reconhecimento pressupõe **ação já instaurada** (queixa recebida). Antes disso, inércia é **decadência** (CPP 38), não perempção — não troque os institutos.

## Distinção operacional — a tabela que evita o erro

| Instituto | Natureza | Momento | Depende de aceitação? | Efeito da indivisibilidade |
|---|---|---|---|---|
| **Renúncia** (CP 104) | Unilateral | **Antes** de oferecer a queixa | Não | Renúncia a um estende-se a todos (CPP 49) |
| **Perdão** (CP 105) | **Bilateral** | Após oferecer, até o **trânsito em julgado** | **Sim** (CPP 58) | Aproveita a todos, mas só quem **aceita** (CPP 51) |
| **Perempção** (CPP 60) | Unilateral (sanção) | **No curso** da ação instaurada | Não | Extingue a ação (querelante único titular) |
| **Decadência** (CPP 38) | — | Fim dos **6 meses** sem queixa | — | → skill `extincao-punibilidade-prescricao` |

## Procedimento e prática

- **Petição de renúncia (querelante):** endereçada ao juízo (ou apresentada antes do ajuizamento); verbo **renunciar**; fundamento CP 104; pedido de **não instauração/arquivamento** por extinção da punibilidade (CP 107, V). Se **tácita**, o querelado a argua nos autos, provando o ato incompatível e invocando a indivisibilidade (CPP 48-49) para estendê-la a todos.
- **Petição de perdão (querelante):** verbo **conceder perdão**; fundamento CP 105-106; requerer a **intimação do(s) querelado(s)** para manifestar aceitação (CPP 58); pedido de extinção da punibilidade quando aceito (CP 107, V). Registre expressamente que o perdão alcança **todos** os querelados que o aceitarem (CP 106; CPP 51).
- **Aceitação/recusa (querelado):** aceitação por declaração nos autos ou assinada fora deles (CPP 59); o **silêncio em 3 dias aceita** (CPP 58) — se a estratégia da defesa é **não** ser perdoada (ex.: quer absolvição de mérito), a **recusa deve ser expressa e tempestiva**, sob pena de aceitação tácita e extinção que impede o julgamento do mérito.
- **Requerimento de perempção (querelado):** demonstrar a hipótese do art. 60 com a **data** do abandono/omissão (juntar certidão de decurso de prazo, termo de audiência com a ausência, alegações finais sem pedido condenatório); requerer a **extinção da punibilidade** (CP 107, IV) e o arquivamento.

## Prazos e preclusão (contagem penal × processual)

- Os prazos da **perempção** (30 dias do inc. I; 60 dias do inc. II) são **processuais** — contam-se pelo CPP 798 (exclui-se o dia do começo, inclui-se o do vencimento; prorroga em feriado/fim de semana).
- A **decadência** do direito de queixa (6 meses, CPP 38) é prazo **penal/decadencial** — conta-se pelo CP 10 (**inclui o dia do começo**), **não** se interrompe nem se suspende, e **não** se confunde com a perempção. Errar a natureza do prazo desloca a data e derruba o pedido. (A decadência é da skill **`extincao-punibilidade-prescricao`**.)
- **Perdão:** o marco final é o **trânsito em julgado** (CP 106, §2º) — depois dele, só resta a via da execução, não o perdão.

## Antes de protocolar

- [ ] Identificou o instituto correto — **renúncia** (antes da queixa), **perdão** (depois, até o trânsito), **perempção** (inércia no curso)?
- [ ] Confirmou que a ação é **exclusivamente privada** (perempção e perdão **não** cabem na pública; perempção **não** cabe na subsidiária)?
- [ ] No **perdão**, requereu a **intimação do querelado** e tratou a **aceitação** (inclusive o silêncio de 3 dias, CPP 58)?
- [ ] Aplicou a **indivisibilidade** (CPP 48-49; 51) — renúncia/perdão estendidos a todos, ressalvado quem recusa o perdão?
- [ ] Se **renúncia tácita**, provou o **ato incompatível** e afastou o recebimento de indenização (CP 104, parágrafo único)?
- [ ] Na **perempção**, indicou a **hipótese do art. 60** com **data documentada** do abandono/omissão?
- [ ] Verificou a **natureza do prazo** (perempção = processual, CPP 798; decadência = penal, CP 10)?
- [ ] Pediu expressamente a **extinção da punibilidade** (CP 107, IV ou V) e o **arquivamento**?
- [ ] Nenhuma súmula/precedente citado de memória — tudo passou pelo **verificador-citacoes**?

## Lembretes finais

- **Renúncia = antes da queixa (unilateral); perdão = depois, bilateral, exige aceitação; perempção = inércia no curso (sanção).** Não troque os três.
- **Perdão e perempção só existem na ação exclusivamente privada** — nunca na pública; a perempção **não** cabe na subsidiária (lá a inércia devolve a ação ao MP).
- **Silêncio do querelado em 3 dias aceita o perdão (CPP 58)** — defesa que quer mérito precisa **recusar expressamente**.
- **Indivisibilidade (CPP 48-49; 51):** renúncia a um alcança todos; perdão aproveita todos, menos quem recusar.
- **Decadência e prescrição não estão aqui** — moram em `extincao-punibilidade-prescricao`; cuidado com a natureza do prazo (penal × processual).
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes do protocolo.

## Apoie-se em

- **Skill `queixa-crime`** — o *ajuizamento* da ação privada (querelante × querelado, procuração com poderes especiais, indivisibilidade na propositura, personalíssima/subsidiária); esta skill começa onde aquela termina.
- **Skill `retratacao-representacao`** — a vontade da vítima na **ação pública condicionada** (renúncia/retratação da *representação*); não confundir com renúncia à *queixa*.
- **Skill `extincao-punibilidade-prescricao`** — **decadência** (CPP 38) e **prescrição**, os outros incisos do art. 107, IV, com metodologia de cálculo e linha do tempo.
- **Agente `lei-e-sumula`** — conferência de vigência e redação exata dos dispositivos (CP 104-107; CPP 48-60) e de eventuais súmulas antes da citação.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes atuais (ex.: alcance da renúncia tácita, contagem da perempção do art. 60, I, perdão em concurso de querelados) antes de afirmar qualquer julgado; nunca citar número de acórdão de memória.
- **Agente `verificador-citacoes`** — gate final: nenhuma citação entra na peça sem verificação; o que não confirmar recebe [NÃO VERIFICADO].
- **Best-practice `peticao-criminal`** — forma, endereçamento e técnica da petição criminal.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
