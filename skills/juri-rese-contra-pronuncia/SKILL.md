---
name: juri-rese-contra-pronuncia
description: >-
  Use ao redigir o RECURSO EM SENTIDO ESTRITO contra a decisão de PRONÚNCIA no Tribunal do Júri
  (art. 581, IV, CPP) — impugnando materialidade, indícios de autoria, qualificadoras pronunciadas e
  excesso de linguagem, com pedido de despronúncia, impronúncia, absolvição sumária ou
  desclassificação. Gatilhos: RESE contra pronúncia, recurso da pronúncia, despronúncia,
  impronúncia, excesso de linguagem, decote de qualificadora, in… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-rese-contra-pronuncia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-rese-contra-pronuncia", "juri rese", "contra pronuncia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# RESE contra a Pronúncia (arts. 581, IV, e 589 CPP)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a redação do **Recurso em Sentido Estrito (RESE) contra a decisão de pronúncia** — o recurso que a **defesa** interpõe quando o juiz, ao encerrar a 1ª fase do júri (*judicium accusationis*), decide **remeter o réu a julgamento pelo Tribunal do Júri** (art. 413 CPP). É o **recurso mais importante da primeira fase**: é a última oportunidade de barrar o julgamento em plenário antes de o réu ser submetido ao Conselho de Sentença.

> **Lição central:** o efeito devolutivo do RESE contra a pronúncia é **restrito** e a linguagem do recurso deve ser **contida**. Aqui vigora o *in dubio pro societate* (a pronúncia é juízo de admissibilidade, não de mérito), então **não se ganha o RESE "provando inocência"** — ganha-se demonstrando **ausência de prova da materialidade** ou **inexistência de indício mínimo de autoria**, atacando **qualificadoras sem lastro** (decote) ou apontando **excesso de linguagem** do juiz. Errar o pedido (pedir absolvição quando o caso é de impronúncia) enfraquece a peça.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 413 a 421 e do art. 581, IV, do CPP (a estrutura atual do procedimento do júri decorre da **Lei 11.689/2008**, que reescreveu a 1ª fase, criou a **absolvição sumária do art. 415** e o **quesito genérico**). Confira também súmulas, temas e eventual *overruling* — em especial a discussão sobre o *in dubio pro societate* — via a skill `jurisprudencia-stj-stf` antes de fundamentar. Nenhum precedente entra na peça sem passar por esse gate.

## O que é a pronúncia e por que se recorre dela

Encerrada a instrução da 1ª fase, o juiz tem **quatro caminhos** (Lei 11.689/2008):

| Decisão | Artigo | Natureza | Recurso cabível |
|---|---|---|---|
| **Pronúncia** | art. 413 | interlocutória mista | **RESE** (art. 581, IV) |
| **Impronúncia** | art. 414 | interlocutória mista terminativa | **Apelação** (art. 416) |
| **Absolvição sumária** | art. 415 | sentença definitiva | **Apelação** (art. 416) |
| **Desclassificação** | art. 419 | interlocutória modificativa de competência | **RESE** (art. 581, II) |

A **pronúncia** (art. 413) exige, cumulativamente: (a) **prova da materialidade** do fato e (b) **indícios suficientes de autoria ou de participação**. É juízo de **admissibilidade da acusação**, não de culpa — por isso o padrão probatório é mais brando (basta o indício, não a certeza). Contra ela, o recurso próprio é o **RESE do art. 581, IV**.

## Base legal

- **Art. 581, IV, CPP** — cabimento do RESE contra a decisão que **pronunciar** o réu.
- **Art. 581, II, CPP** — cabimento do RESE contra a decisão que **desclassificar** a infração para outra da competência de juízo diverso (quando a defesa recorre da desclassificação, ou o cenário for esse).
- **Art. 413 CPP** — requisitos da pronúncia (materialidade + indícios de autoria) e limites da fundamentação (§1º).
- **Art. 414 CPP** — impronúncia (não convencido da materialidade ou dos indícios de autoria).
- **Art. 415 CPP** — absolvição sumária (prova de inexistência do fato/não autoria/atipicidade/excludentes de ilicitude ou culpabilidade — ressalvada inimputabilidade que não seja a única tese).
- **Art. 419 CPP** — desclassificação (convencimento de crime diverso, não doloso contra a vida) e remessa ao juízo competente.
- **Arts. 582 e 586 CPP** — processamento do RESE (nos próprios autos ou por instrumento; prazo e forma).
- **Art. 589 CPP** — **juízo de retratação**: recebido o RESE, o juiz pode **reformar sua própria decisão** (efeito regressivo/iterativo). Se retratar, a parte contrária pode recorrer da nova decisão.
- **Art. 593, III, CPP** — apelação das decisões do júri (a montante/jusante do fluxo — não é o recurso da pronúncia, mas orienta a estratégia recursal).
- **CF, art. 5º, LVII** — presunção de não culpabilidade (o vetor constitucional que a defesa opõe ao *in dubio pro societate*).

## Prazos e processamento (conferir na redação vigente)

- **Interposição:** **5 dias** (art. 586, CPP), por petição ou termo nos autos.
- **Razões:** **2 dias** após a interposição (art. 588), embora a praxe admita razões já com a interposição.
- **Contrarrazões:** **2 dias** (art. 588).
- **Juízo de retratação (art. 589):** com as contrarrazões, os autos vão conclusos ao juiz, que **pode se retratar**. Não retratando, sobe ao tribunal.
- **Processamento:** em regra **nos próprios autos** (art. 583, II) — o RESE contra pronúncia não sobe por instrumento, salvo hipótese específica; confirmar a modalidade no caso concreto.

> **Atenção — confira os prazos na redação vigente antes de peticionar.** Há divergência prática entre interposição+razões conjuntas e o desdobramento clássico (5 + 2). Não protocole sem checar o texto atual do CPP e o entendimento do tribunal de atuação.

## Efeito devolutivo restrito — a regra de ouro do RESE contra pronúncia

O RESE contra a pronúncia devolve ao tribunal apenas o **juízo de admissibilidade** — não o mérito da acusação. O tribunal **não absolve** nem julga culpa: apenas confirma a pronúncia, **despronuncia** (impronúncia/absolvição sumária) ou reconhece **desclassificação**, ou ainda **decota qualificadora** manifestamente descabida.

> **Súmula 713 do STF (NOTÓRIA):** *"O efeito devolutivo da apelação contra decisões do júri é adstrito aos fundamentos da sua interposição."* Embora fale da apelação do art. 593, III, sinaliza a **lógica restritiva** que permeia os recursos no júri — o tribunal fica adstrito aos fundamentos invocados. Aplique com cuidado ao RESE e confirme o alcance via `jurisprudencia-stj-stf`.

## As teses defensivas do RESE contra a pronúncia

O RESE tem **quatro grandes linhas de ataque**. Identifique qual (ou quais) o caso comporta e formule o **pedido correspondente** — errar o pedido é o vício mais comum.

### 1) Ausência de prova da materialidade → IMPRONÚNCIA (art. 414)

A pronúncia exige **prova** da materialidade (não mero indício). Se o laudo é inconclusivo, se não há corpo de delito nem prova indireta suficiente da existência do crime, **falta pressuposto** e o caso é de **impronúncia** (art. 414), não de julgamento em plenário.

- **Pedido:** reforma para **impronunciar** o réu (art. 414).

### 2) Inexistência de indícios suficientes de autoria → IMPRONÚNCIA

Indício "suficiente" não é qualquer indício: precisa ser **idôneo e convergente**. Depoimento único frágil, reconhecimento viciado, ausência de elemento que ligue o réu ao fato — tudo isso ataca o segundo requisito do art. 413.

- **Tese-chave — limites do *in dubio pro societate*:** o brocardo **não autoriza pronunciar sem lastro probatório mínimo**. A dúvida que remete a júri é a dúvida *entre teses plausíveis lastreadas em prova*, não o **vazio probatório**. Pronúncia fundada apenas em elementos do **inquérito** (não confirmados em juízo, sob contraditório) viola o art. 155 do CPP e a presunção de não culpabilidade (CF, art. 5º, LVII). **[NÃO VERIFICADO]** Há precedentes recentes do STF e do STJ **relativizando/afastando** o *in dubio pro societate* e exigindo standard probatório na pronúncia — **confirmar número, órgão e vigência via `jurisprudencia-stj-stf` antes de citar**. Prefira sustentar a **tese** (presunção de inocência + art. 155 CPP + exigência de prova produzida em contraditório) a arriscar um número de acórdão.
- **Pedido:** reforma para **impronunciar** (art. 414); subsidiariamente, **absolvição sumária** (art. 415) se presente causa do art. 415.

### 3) Qualificadora sem lastro → DECOTE (exclusão da qualificadora)

Qualificadora **manifestamente improcedente** ou sem **qualquer** suporte probatório pode e deve ser **decotada** já na pronúncia — do contrário vai a plenário e influencia os jurados. O tribunal, no RESE, exclui a qualificadora **teratológica**; a qualificadora com **algum** amparo, porém, deve ir a júri (é o juiz natural da causa).

- **Tese-chave:** só se decota a qualificadora **manifestamente descabida** / sem lastro nenhum. Havendo **dúvida razoável** sobre a qualificadora, ela é mantida e submetida ao Conselho de Sentença (juiz natural). O ataque no RESE mira as qualificadoras **teratológicas** (ex.: motivo fútil sem qualquer indicativo; meio cruel não descrito em nenhuma prova).
- **Pedido:** reforma **parcial** para **excluir/decotar** a(s) qualificadora(s) [indicar], mantendo a pronúncia quanto ao restante.

### 4) Excesso de linguagem → NULIDADE da pronúncia

O art. 413, §1º, CPP exige que a pronúncia se limite à **indicação da materialidade e dos indícios de autoria**, em linguagem **sóbria e comedida**, **sem** análise aprofundada do mérito nem afirmações que possam **influenciar os jurados**. Quando o juiz **antecipa juízo de culpa**, tece considerações veementes sobre a autoria ou emite juízos de valor sobre a prova, há **excesso de linguagem (eloquência acusatória)** — vício que **contamina** o julgamento, porque a pronúncia é peça de que os jurados podem ter conhecimento.

- **Consequência (ponto sensível):** o entendimento consolidado é de **anulação** da pronúncia para que **outra** seja proferida sem os excessos — **e não** o mero desentranhamento/envelopamento da decisão. **[NÃO VERIFICADO]** Confirmar via `jurisprudencia-stj-stf` a orientação atual do STF/STJ (houve oscilação entre "anular e refazer" e "apenas não fornecer cópia aos jurados"); a tese majoritária tem sido a **anulação**. Não cite número de HC/REsp sem verificar.
- **Pedido:** **anulação** da decisão de pronúncia por excesso de linguagem (art. 413, §1º, CPP), determinando-se que outra seja prolatada em termos comedidos.

### 5) (Subsidiária) Desclassificação → não é dolo contra a vida

Se a prova aponta crime **diverso**, fora da competência do júri (ex.: lesão corporal seguida de morte — art. 129, §3º; homicídio culposo), cabe **desclassificação** (art. 419), com remessa ao juízo comum. Contra a **desclassificação**, o recurso é o **RESE do art. 581, II**; mas a defesa pode **pedir a desclassificação** dentro do RESE contra a pronúncia como tese subsidiária.

- **Pedido subsidiário:** **desclassificação** para [crime diverso], com remessa ao juízo competente (art. 419).

## Ordem lógica dos pedidos (afunilamento)

Formule os pedidos do **mais amplo ao mais restrito**, para dar ao tribunal a escala de opções:

```
1º  ABSOLVIÇÃO SUMÁRIA (art. 415) — se presente causa do art. 415 (raro em RESE, mas cabível)
2º  IMPRONÚNCIA (art. 414) — ausência de materialidade OU de indícios de autoria
3º  ANULAÇÃO por excesso de linguagem (art. 413, §1º) — se houver eloquência acusatória
4º  DESCLASSIFICAÇÃO (art. 419) — se o crime não for doloso contra a vida
5º  DECOTE de qualificadora(s) — exclusão da(s) teratológica(s), mantida a pronúncia base
```

> **Não misture níveis incompatíveis sem hierarquizar.** Pedir "absolvição" como principal num caso que é de impronúncia sinaliza desconhecimento do efeito devolutivo restrito. Estruture como **principal + subsidiários** e deixe claro o que se pede em cada nível.

## Contra-teses (o que a acusação/o tribunal oporão)

Antecipe para reforçar a peça:

- **"*In dubio pro societate*":** a pronúncia é juízo de **admissibilidade**; qualquer dúvida sobre autoria resolve-se **em favor da sociedade**, remetendo-se ao juiz natural (jurados). ➡️ **Resposta da defesa:** o brocardo não dispensa **prova mínima** produzida em contraditório (art. 155 CPP); dúvida ≠ vazio probatório; presunção de não culpabilidade (CF, art. 5º, LVII).
- **"Qualificadora vai a júri":** salvo teratologia, a qualificadora é do **juiz natural** (Conselho de Sentença), não se decota na pronúncia. ➡️ **Resposta:** o decote pedido mira apenas a qualificadora **manifestamente sem lastro**, não a controvertida.
- **"Não houve excesso, houve fundamentação":** o juiz deve fundamentar (CF, art. 93, IX). ➡️ **Resposta:** fundamentar ≠ **antecipar culpa**; o vício está no **tom** (afirmações categóricas sobre autoria/mérito), não na existência de motivação.
- **Súmula 713 STF:** o tribunal fica **adstrito aos fundamentos** da interposição — reforça a necessidade de **articular bem cada fundamento** no RESE (o que não se pede, não se devolve).

## Estrutura da peça — RESE contra a pronúncia

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [Nª] VARA DO TRIBUNAL DO JÚRI
DA COMARCA DE [COMARCA]


Autos nº [Nº DO PROCESSO]


[NOME DO RÉU], já qualificado nos autos da ação penal em epígrafe, por seu
advogado que esta subscreve (procuração anexa), inconformado com a r. decisão
de fls./ev. [Nº] que o PRONUNCIOU, vem, tempestivamente e com fundamento no
art. 581, IV, do Código de Processo Penal, interpor

RECURSO EM SENTIDO ESTRITO

requerendo o recebimento e o processamento nos termos dos arts. 582 e seguintes
do CPP, com posterior remessa ao Egrégio Tribunal de Justiça, apresentando,
desde já, as inclusas razões recursais.

[LOCAL], [DATA].

[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]


================= RAZÕES DE RECURSO EM SENTIDO ESTRITO =================

Egrégio Tribunal, Colenda Câmara, Ínclitos Julgadores.

I — SÍNTESE DO PROCESSADO
[Narrativa objetiva: denúncia, imputação (art. 121, §2º, CP etc.), instrução e a
r. decisão de pronúncia recorrida.]

II — DA TEMPESTIVIDADE E DO CABIMENTO
Decisão de pronúncia (art. 413 CPP) recorrível por RESE (art. 581, IV, CPP),
interposto no prazo legal (art. 586 CPP).

III — DAS RAZÕES DE REFORMA / ANULAÇÃO

  III.1 — [PRINCIPAL] Da ausência de prova da materialidade / de indícios
          suficientes de autoria — IMPRONÚNCIA (art. 414)
          [Demonstrar que falta o requisito do art. 413. Sustentar os limites do
          in dubio pro societate: dúvida não é vazio probatório; prova só do
          inquérito não pronuncia (art. 155 CPP; CF, art. 5º, LVII).]

  III.2 — [se houver] Do excesso de linguagem — NULIDADE (art. 413, §1º)
          [Transcrever os trechos da pronúncia que antecipam culpa/valoram o
          mérito. Pedir anulação para que outra decisão seja proferida em termos
          comedidos.]

  III.3 — [subsidiário] Da desclassificação (art. 419)
          [Se o crime não for doloso contra a vida — remessa ao juízo comum.]

  III.4 — [subsidiário] Do decote de qualificadora(s)
          [Indicar a(s) qualificadora(s) manifestamente sem lastro e requerer a
          exclusão, mantida a pronúncia quanto ao restante.]

IV — DO PEDIDO
Requer o conhecimento e provimento do recurso para, reformando/anulando a r.
decisão recorrida:
  a) PRINCIPALMENTE, IMPRONUNCIAR o recorrente (art. 414 CPP); ou
  b) ANULAR a pronúncia por excesso de linguagem (art. 413, §1º); ou
  c) SUBSIDIARIAMENTE, DESCLASSIFICAR a infração (art. 419 CPP); ou
  d) SUBSIDIARIAMENTE, DECOTAR a(s) qualificadora(s) [indicar].
Requer, ainda, o juízo de retratação (art. 589 CPP).

Termos em que, pede deferimento.
[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DO PROCESSO], [NOME DO RÉU], [Nº DA FL./EV. DA PRONÚNCIA], [IMPUTAÇÃO], [QUALIFICADORAS], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos e providências

1. **Procuração** (se ainda não nos autos).
2. **Cópia da decisão de pronúncia** recorrida (com destaque dos trechos de excesso de linguagem, se houver).
3. **Indicação precisa das folhas/eventos** da prova que sustenta cada tese (materialidade frágil, autoria sem indício, qualificadora sem lastro).
4. **Certidão de intimação** da pronúncia (para aferir a tempestividade).
5. Requerer expressamente o **juízo de retratação** (art. 589) nas razões/interposição.

## Erros comuns / anti-padrões (evitar)

- **Pedir absolvição** (mérito) quando o caso é de **impronúncia** (admissibilidade) — confunde o efeito devolutivo restrito e enfraquece a peça.
- **Tentar reexaminar prova como se fosse plenário** — o RESE não julga culpa; ataca a **admissibilidade** (falta de materialidade/indício) ou a **legalidade** (excesso; qualificadora teratológica).
- **Pedir decote de qualificadora "controvertida"** — só se decota a **manifestamente sem lastro**; a duvidosa é do juiz natural (jurados).
- **Ignorar o excesso de linguagem** quando a pronúncia antecipa culpa — é nulidade que pode anular a decisão; não deixar passar.
- **Errar o recurso:** contra **impronúncia** e **absolvição sumária** cabe **apelação** (art. 416), não RESE; contra **desclassificação**, RESE do art. 581, **II**. Só a **pronúncia** desafia o RESE do art. 581, **IV**.
- **Esquecer o juízo de retratação** (art. 589) — é chance real de reforma no 1º grau.
- **Citar precedente de memória** sobre *in dubio pro societate* ou excesso de linguagem — passar pelo gate `jurisprudencia-stj-stf`; melhor faltar o número do que inventar julgado.
- **Não hierarquizar os pedidos** (principal x subsidiários) — dá ao tribunal a impressão de tese confusa.

## Checklist final

- [ ] O recurso correto é o **RESE do art. 581, IV** (decisão é de **pronúncia**, não impronúncia/absolvição sumária/desclassificação)?
- [ ] **Tempestividade** conferida (prazo do art. 586; certidão de intimação anexada)?
- [ ] Tese(s) identificada(s): ausência de materialidade? de indício de autoria? excesso de linguagem? qualificadora sem lastro? desclassificação?
- [ ] **Pedidos hierarquizados** (principal + subsidiários), cada um com o artigo correto (414 / 413, §1º / 419 / decote)?
- [ ] *In dubio pro societate* enfrentado com **presunção de inocência + art. 155 CPP** (prova do inquérito não pronuncia)?
- [ ] Trechos de **excesso de linguagem** transcritos e localizados na decisão?
- [ ] **Juízo de retratação (art. 589)** requerido expressamente?
- [ ] Toda súmula/precedente/tese passou pelo gate `jurisprudencia-stj-stf`? (Nenhum número citado de memória.)
- [ ] **Revisão humana** do advogado responsável antes do protocolo?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta skill é apoio à elaboração do RESE; a decisão sobre teses, pedidos e protocolo é sempre do **advogado responsável** (CED/OAB, art. 2º; EAOAB). Não substitui a leitura da decisão de pronúncia concreta e dos autos.
- **Skill do polo DEFENSIVO.** O RESE contra a pronúncia é o recurso típico da **defesa** (inconformismo com a remessa a júri). Quando o cenário for de recurso da **acusação** (ex.: MP recorrendo da **impronúncia** — por apelação — ou pedindo qualificadora decotada), a peça e a estratégia mudam: confirmar o **polo do usuário** no `company.md` antes de aplicar.
- **Verificação de citações inegociável.** Cite livremente dispositivos do CPP/CP/CF e a **Súmula 713/STF** (notória). Para qualquer **HC/REsp/RE, informativo, tema ou tese jurisprudencial** — sobretudo o estado atual do *in dubio pro societate* e o tratamento do **excesso de linguagem** (anular x não fornecer cópia) — marque como pendente e **confira via `jurisprudencia-stj-stf`**. Há sanções reais por jurisprudência inventada por IA: **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
