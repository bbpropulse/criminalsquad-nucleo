---
name: apropriacao-indebita-previdenciaria
description: >-
  Use ao defender imputação de APROPRIAÇÃO INDÉBITA PREVIDENCIÁRIA (CP 168-A) e SONEGAÇÃO DE
  CONTRIBUIÇÃO PREVIDENCIÁRIA (CP 337-A): natureza omissiva do delito e exigência de constituição
  definitiva do crédito à luz da Súmula Vinculante 24, extinção da punibilidade pelo pagamento e
  suspensão da pretensão punitiva pelo parcelamento (Leis 10.684/03 e 11.941/09), inexigibilidade de
  conduta diversa por dificuldades financeiras… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, previdenciario]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-apropriacao-indebita-previdenciaria"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["apropriacao-indebita-previdenciaria", "apropriacao indebita", "indebita previdenciaria"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Apropriação Indébita Previdenciária (CP 168-A) e Sonegação de Contribuição (CP 337-A)

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

Esta skill orienta a **defesa de quem é acusado de apropriação indébita previdenciária** (CP, art. 168-A) e de **sonegação de contribuição previdenciária** (CP, art. 337-A) — os dois crimes do ramo previdenciário que atingem o empresário e o sócio-administrador que deixaram de repassar à Previdência valores descontados ou de declarar contribuições devidas. Ela ocupa uma lacuna deliberada e trabalha em par com as skills irmãs: a **`extincao-punibilidade-pagamento-tributario`** entrega a **estrutura forense do pedido de extinção pelo pagamento e de suspensão pelo parcelamento** (certidão, cascata de pedidos, modelo de peça) — **reúse-a e não duplique** o cálculo nem o rito da válvula; a **`extincao-punibilidade-prescricao`** cuida da porta prescricional; e a **`defesa-lavagem-capitais`** cuida da lavagem eventualmente acoplada (que **não** é arrastada pela extinção do antecedente previdenciário). Aqui mora o que é **específico do tipo penal previdenciário**: a natureza omissiva, o dolo de apropriação, a inexigibilidade de conduta diversa e a fronteira com o mero inadimplemento.

> **Lição central:** apropriação indébita previdenciária **não é dívida com o INSS** — é a **omissão dolosa de repassar** o que já se descontou de terceiro. A defesa vive de duas frentes que se somam: (1) **destipificar** — mostrar que faltou o **dolo específico de apropriar-se** ou que a conduta era **inexigível** por asfixia financeira real (não é crime quem não podia agir de outro modo); e (2) **extinguir/suspender** pela válvula do **pagamento/parcelamento**, que alcança expressamente esses crimes. Peça séria trabalha as duas: nega o crime **e** guarda a válvula econômica.

> **Divisão de trabalho:** a **mecânica** da extinção pelo pagamento e da suspensão pelo parcelamento (certidão da RFB/PGFN, identidade débito ↔ denúncia, pedidos sucessivos, endereçamento, modelo) vive na skill **`extincao-punibilidade-pagamento-tributario`** — consulte-a **sempre** antes de redigir o pedido econômico. Esta skill fornece as **teses penais próprias** do instituto previdenciário e o **enquadramento** que decide qual frente puxar primeiro.

## O instituto e a base legal

| Dispositivo | O que garante / exige | Nota crítica |
|---|---|---|
| **CP, art. 168-A, *caput*** | Crime **omissivo próprio**: deixar de **repassar** à Previdência as contribuições **descontadas** de segurados/terceiros, no prazo e forma legais — pena 2 a 5 anos e multa | O núcleo é a **retenção do que é alheio** (desconto do empregado não repassado). Sem desconto prévio, discuta a subsunção — confira a redação exata via **lei-e-sumula** |
| **CP, art. 168-A, §1º** | Equipara: deixar de recolher contribuição descontada de pagamento a segurados/terceiros; de recolher valores cobrados do público; de pagar benefício reembolsado | Amplia o tipo além do desconto folha; delimite **qual** hipótese a denúncia usa |
| **CP, art. 168-A, §2º** | **Extinção da punibilidade** se o agente **declara, confessa e paga** as contribuições **antes do início da ação fiscal** | Válvula própria do tipo — mais estreita que a das leis de parcelamento; ver interação abaixo |
| **CP, art. 168-A, §3º** | **Perdão judicial** ou só multa: réu primário, bons antecedentes, valor abaixo do mínimo para ajuizamento de execuções fiscais | Tese de **atipicidade material / insignificância** por baixo valor — patamar a confirmar via **jurisprudencia-stj-stf** e **[NÃO VERIFICADO]** |
| **CP, art. 337-A** | **Sonegação** de contribuição: **suprimir/reduzir** contribuição mediante **omissão de folha, declaração falsa** etc. — crime **material** contra a ordem tributária previdenciária | Distinto do 168-A: aqui há **fraude/omissão declaratória**, não simples não repasse; o §1º prevê **extinção da punibilidade** se o agente, **espontaneamente, declara e confessa** e presta as informações devidas **antes do início da ação fiscal** — a redação corrente **não exige pagamento** nessa hipótese (ao contrário do §2º do 168-A); confira o texto exato via **lei-e-sumula** |
| **Súmula Vinculante 24 (STF)** | Crime **material** contra a ordem tributária não se tipifica antes do **lançamento definitivo** do tributo | Aplicação ao **337-A** (material) é a leitura corrente; ao **168-A** o alcance é **controverso** — pesquise o estado atual via **jurisprudencia-stj-stf** e marque **[NÃO VERIFICADO]** |
| **Lei 10.684/03, art. 9º** | Parcelamento **suspende** a pretensão punitiva (e a prescrição); **pagamento integral** (§2º) **extingue** a punibilidade — alcança expressamente **CP 168-A e 337-A** | É a válvula econômica **ampla** ("a qualquer tempo" na leitura consolidada); mecânica na skill `extincao-punibilidade-pagamento-tributario` |
| **Lei 11.941/09, arts. 68-69** | Parcelamento suspende pretensão punitiva e prescrição; pagamento integral extingue | Mesma cautela de redação — conferir via **lei-e-sumula** |

**Duas válvulas de extinção que convivem — não confunda:** o **§2º do art. 168-A** exige o combo **declarar + confessar + pagar antes do início da ação fiscal** — janela estreita. O **§1º do art. 337-A**, na redação corrente, extingue a punibilidade pela **declaração e confissão espontâneas** das contribuições, com prestação das informações devidas, **antes do início da ação fiscal** — sem exigir, ali, o pagamento (confira o texto exato via **lei-e-sumula** antes de invocar). Já as **Leis 10.684/03 e 11.941/09** extinguem pelo **pagamento integral sem esse marco temporal** (leitura ampla) e **suspendem** pelo **parcelamento**. Na prática, a válvula das leis de parcelamento é a mais generosa; use o §2º quando a quitação for **precoce** (antes da fiscalização) e as leis extravagantes quando for **tardia**. O alcance temporal do pagamento após sentença/trânsito é construção jurisprudencial: **pesquise via jurisprudencia-stj-stf** e marque **[NÃO VERIFICADO]**.

## Mapa — situação concreta → providência → onde aprofundar

| Situação do caso | Providência primeira | Onde aprofundar |
|---|---|---|
| Débito ainda **em discussão administrativa** (impugnação/CARF pendente) | Arguir **SV 24** (falta de constituição definitiva) — mais firme no 337-A (material); no 168-A, **[NÃO VERIFICADO]** | Trancamento via **`habeas-corpus`**; rito da válvula em `extincao-punibilidade-pagamento-tributario` |
| Débito **quitado integralmente** (tributo + multa + juros) | **Extinção da punibilidade** pelo pagamento (Lei 10.684/03, art. 9º, §2º; ou §2º do 168-A se antes da ação fiscal) | Certidão e pedidos sucessivos em `extincao-punibilidade-pagamento-tributario` |
| Débito **parcelado e em dia** | **Suspensão** da pretensão punitiva e da prescrição — sobrestamento | Idem — mecânica na skill irmã |
| Empresa **quebrou / caixa negativo** no período (não podia repassar) | **Inexigibilidade de conduta diversa** — dossiê contábil provando a asfixia | Teses abaixo (T2); prova documental é o coração |
| Denúncia narra **mero atraso/inadimplemento** sem dolo de apropriação | **Atipicidade subjetiva** — falta o dolo específico de apropriar-se | Teses abaixo (T1); interface com **`inepcia-denuncia-generica`** |
| Sócio **sem poder de gestão** responsabilizado só pelo contrato social | Atacar a **autoria** — quem tinha o **domínio do fato** sobre o repasse? | Teses abaixo (T4); **`denuncia-mp`** para dissecar a imputação |
| Valor abaixo do mínimo de ajuizamento fiscal | **Insignificância / perdão judicial** (§3º) | Teses abaixo (T3); patamar via **jurisprudencia-stj-stf** **[NÃO VERIFICADO]** |

## Banco de teses

### T1 — Atipicidade subjetiva: falta o dolo específico de apropriação (o cerne)
O art. 168-A não pune o **inadimplemento**, e sim a **apropriação** — a vontade de **fazer seu** o valor descontado de terceiro. A jurisprudência majoritária afasta o crime quando o não repasse decorre de **dificuldade financeira** e não de **animus de apropriar-se**; a denúncia que descreve só o "deixar de recolher", sem apontar **destinação diversa** dos valores nem indício de apropriação, é **inepta** (CP 168-A + CPP 41; ver **`inepcia-denuncia-generica`**). Distinga: **desviar** o desconto para benefício próprio/da empresa = crime; **não ter o dinheiro** para repassar em meio à crise = fato atípico ou inexigível. Confirme o entendimento atual via **jurisprudencia-stj-stf** e marque **[NÃO VERIFICADO]**.

### T2 — Inexigibilidade de conduta diversa: a asfixia financeira real
Causa **supralegal** de exclusão da culpabilidade: não se exige do administrador que repasse o que a empresa **comprovadamente não tinha**, em quadro de **grave dificuldade financeira** que impôs escolha entre pagar salários/tributos essenciais e recolher a contribuição. **Não basta alegar** — é preciso **provar**: balanços, fluxo de caixa negativo, protestos, execuções, folha atrasada, pedido de recuperação judicial, demissões. É a tese mais poderosa e a mais dependente de **prova documental contábil**. O patamar de aceitação e os requisitos exigidos variam: pesquise via **jurisprudencia-stj-stf** e marque **[NÃO VERIFICADO]**.

### T3 — Atipicidade material / insignificância e perdão judicial (§3º)
Quando o débito descontado e não repassado é **inferior ao mínimo** para ajuizamento de execuções fiscais pela Fazenda, sustenta-se a **insignificância** (ausência de lesão relevante ao bem jurídico) ou, ao menos, o **perdão judicial / pena de multa** do §3º (réu primário, bons antecedentes). **Cautela conservadora:** a insignificância em crime previdenciário costuma encontrar **resistência maior** que no descaminho — parte da jurisprudência recusa o transporte automático do patamar de execuções fiscais, ao argumento de que o bem jurídico é supraindividual (custeio da seguridade); o **perdão judicial / multa do §3º** tende a ser terreno mais firme que a atipicidade material. Atenção também à **contumácia**: a reiteração pode afastar a insignificância. Patamar, aplicabilidade e requisitos **variam** — pesquise via **jurisprudencia-stj-stf** e trate como tese **[NÃO VERIFICADO]**.

### T4 — Autoria: domínio do fato sobre o repasse, não presunção pelo contrato social
Não basta o nome no contrato social. Responde quem tinha **poder de decisão efetivo** e **ingerência concreta** sobre a gestão financeira e o recolhimento no período do débito — a mera condição de sócio ou administrador nominal **não** basta (vedação à responsabilidade penal objetiva; a autoria em crime societário reclama **nexo individualizado** entre a conduta e o agente). Ataque a imputação genérica: sócio minoritário sem ingerência, administrador afastado, delegação formal a diretor financeiro, período fora da gestão. **Nota de técnica:** a **teoria do domínio do fato** é ambígua — a acusação também a usa para *presumir* autoria a partir do cargo; a defesa deve ancorar-se na **ausência de ingerência real**, não em uma leitura invertida da teoria. Delegue a dissecção da imputação ao agente **`analise-denuncia`** e cruze com a skill **`denuncia-mp`**. Precedentes de suporte: **jurisprudencia-stj-stf** **[NÃO VERIFICADO]**.

### T5 — SV 24 e a exigência de constituição definitiva do crédito
No **art. 337-A** (crime **material**), a SV 24 opera com firmeza: sem **lançamento definitivo** (PAF encerrado), **não há crime** — falta de justa causa, via **`habeas-corpus`** trancativo. No **art. 168-A**, a incidência da SV 24 é **controvertida** (parte da doutrina/jurisprudência o trata como omissivo próprio que dispensaria a constituição): **não afirme** o alcance de memória — pesquise o estado atual via **jurisprudencia-stj-stf** e marque **[NÃO VERIFICADO]**. Enquanto pendente o PAF, o crédito não é exigível e a prescrição do material **sequer começou** a correr.

### T6 — Válvula econômica: pagamento extingue, parcelamento suspende
Frente **subsidiária que nunca se abandona**: os arts. 9º da Lei 10.684/03 e 68-69 da Lei 11.941/09 alcançam **expressamente** 168-A e 337-A. Quitação integral (tributo + multa + juros + encargos, comprovada por **certidão** da RFB/PGFN) **extingue** a punibilidade; parcelamento **em dia** **suspende** pretensão punitiva **e** prescrição. **Toda a mecânica** (certidão, identidade débito ↔ denúncia, cascata de pedidos, endereçamento, modelo de peça) está na skill **`extincao-punibilidade-pagamento-tributario`** — **não a reproduza**, invoque-a.

### T7 — Distinção entre 168-A e 337-A (não deixe a acusação embaralhar)
São tipos **diferentes**: o **168-A** pune **omissão de repasse** do que foi **descontado** (apropriação); o **337-A** pune **supressão/redução** de contribuição por **fraude/omissão declaratória** (sonegação). Denúncia que imputa 168-A a fato que é, na verdade, mera não declaração sem desconto, ou que soma os dois pelo mesmo fato, comporta **desclassificação** e vigilância a **bis in idem**. Delimite qual conduta a inicial descreve — a válvula, a prova e a SV 24 incidem de modo distinto em cada um.

## Procedimento, prazos e preclusão

- **Momento das teses de mérito (T1–T4):** a **resposta à acusação** (CPP 396/396-A) é a hora de arrolar testemunhas e **requerer a perícia contábil** que sustentará a inexigibilidade (T2) e a ausência de apropriação (T1) — **preclusão** rígida: prova não requerida aqui dificilmente volta. A perícia contábil que rastreia o fluxo de caixa é, com frequência, a prova decisiva da defesa.
- **Trancamento pela SV 24 (T5):** **habeas corpus** exige **prova pré-constituída** do PAF pendente — anexe impugnação/recurso e certidão de ausência de decisão final; sem o dossiê, o Tribunal não conhece (ver **`habeas-corpus`**).
- **Válvula econômica (T6):** matéria de **ordem pública** (CPP 61) — a extinção da punibilidade é cognoscível **a qualquer tempo e grau**, sem preclusão; mas o **endereçamento** muda (juízo do feito → relator → juízo da execução após o trânsito). Rito completo na skill irmã.
- **Prazos penais** contam-se pelo **CPP 798, §1º** (exclui-se o dia do começo, inclui-se o do vencimento) — relevante para a resposta à acusação e para recursos; ao articular prescrição, **desconte** o período de **suspensão pelo parcelamento** (interface com **`extincao-punibilidade-prescricao`**).
- **Competência:** contribuição previdenciária é tributo **federal** — a persecução corre, em regra, na **Justiça Federal**; confira antes de protocolar, pois erro de endereçamento custa meses.

## Erros comuns e pegadinhas

- **Tratar 168-A como dívida civil** — não é; mas o inverso também engana: nem todo não repasse é crime. O eixo é o **dolo de apropriação** (T1). Não conceda a tipicidade só porque houve o débito.
- **Alegar inexigibilidade sem prova** — a crise financeira **decreta-se com documento** (balanços, execuções, folha atrasada, recuperação judicial), não com adjetivo. Tese de T2 sem dossiê contábil é petição fadada ao indeferimento.
- **Afirmar a SV 24 no 168-A como se fosse pacífica** — o alcance ao crime omissivo próprio é **disputado**; no 337-A é firme. Não decore — pesquise via **jurisprudencia-stj-stf** e marque **[NÃO VERIFICADO]** (T5).
- **Confundir suspensão com extinção** — parcelamento **suspende**; só a quitação da **última parcela** extingue. Não prometa ao cliente a morte do processo na adesão ao parcelamento (mecânica em `extincao-punibilidade-pagamento-tributario`).
- **Perder a janela do §2º (168-A) / §1º (337-A)** — a extinção própria do tipo exige o marco **antes do início da ação fiscal**: no **168-A**, o combo *declarar+confessar+pagar*; no **337-A**, *declarar+confessar espontaneamente* (sem exigência de pagamento na redação corrente — cheque via **lei-e-sumula**). Passada a fiscalização, migre para a válvula ampla das Leis 10.684/03 e 11.941/09.
- **Aceitar a autoria pelo contrato social** — responde quem tinha **domínio do fato** sobre o recolhimento no período (T4); ataque a responsabilidade objetiva do sócio sem gestão.
- **Embaralhar 168-A e 337-A** — apropriação (não repasse do descontado) ≠ sonegação (fraude declaratória); a válvula, a prova e a SV 24 incidem diferente em cada (T7). Cheque **qual** tipo e **qual** parágrafo a denúncia usa.
- **Esquecer que a prescrição congela no parcelamento** — durante o parcelamento **não corre prescrição**; tese prescricional sem descontar esse período será desmontada (articule com **`extincao-punibilidade-prescricao`**).
- **Requerer a perícia contábil tarde** — a prova do fluxo de caixa é o alicerce da inexigibilidade e da atipicidade; não requerida na **resposta à acusação**, precluiu.
- **Supor que a extinção do previdenciário arrasta a lavagem conexa** — a lavagem é **autônoma** e pode subsistir; trate-a em frente própria (**`defesa-lavagem-capitais`**).
- **Descasamento débito ↔ denúncia** — GPS/comprovante de competência ou empresa diferente da descrita na inicial **não extingue nada**; confira competências (mês/ano), CNPJ e número do débito, item a item.
- **Citar precedente de memória** — números de HC/REsp/AgRg/Tema **nunca** de memória: pesquise via **jurisprudencia-stj-stf**, verifique com **verificador-citacoes** e marque **[NÃO VERIFICADO]** o que não confirmar. Redação de CP 168-A/337-A e dos arts. 9º da Lei 10.684/03 e 68-69 da Lei 11.941/09: confira via **lei-e-sumula** antes de transcrever.

## Antes de protocolar

- [ ] Tipo penal certo identificado (**168-A** apropriação × **337-A** sonegação) e o **parágrafo** exato da imputação delimitado?
- [ ] Frente de **mérito** definida: falta dolo de apropriação (T1) e/ou inexigibilidade por crise (T2) e/ou insignificância (T3) e/ou autoria (T4)?
- [ ] **Prova documental** da asfixia financeira reunida (balanços, fluxo de caixa, execuções, folha, recuperação judicial) para sustentar T2?
- [ ] **Perícia contábil** requerida na **resposta à acusação** (preclusão)?
- [ ] Se **337-A** ou débito em discussão: **SV 24** arguida com PAF pendente **certificado**; alcance no 168-A tratado como **[NÃO VERIFICADO]**?
- [ ] **Válvula econômica** avaliada: pagamento (extingue) × parcelamento (suspende), com a mecânica de `extincao-punibilidade-pagamento-tributario`?
- [ ] Identidade **débito ↔ denúncia** conferida (competências, CNPJ, número do débito)?
- [ ] Autoria atacada pelo **domínio do fato** e não presumida pelo contrato social?
- [ ] Efeito sobre a **prescrição** considerado (suspensão no parcelamento), articulado com `extincao-punibilidade-prescricao`?
- [ ] **Competência** (Justiça Federal) e **endereçamento** conferidos?
- [ ] Nenhuma súmula/precedente citado de memória — tudo passou pelo **verificador-citacoes**?

## Lembretes finais

- **Apropriação exige apropriar-se** — o eixo do 168-A é o **dolo específico**, não o débito; mero inadimplemento não é crime.
- **Inexigibilidade prova-se com contabilidade** — a crise financeira decide a tese, e a retórica só embala.
- **Duas frentes que se somam** — destipificar (dolo/inexigibilidade/autoria) **e** guardar a válvula econômica (pagamento extingue, parcelamento suspende); a peça forte trabalha as duas na ordem da eventualidade.
- **SV 24: firme no 337-A, controversa no 168-A** — não afirme o alcance no omissivo próprio sem pesquisa verificada.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes do protocolo.

## Apoie-se em

- **Best-practice `defesa-crimes-tributarios`** — playbook do nicho fiscal-previdenciário (SV 24 e mitigações, pagamento/parcelamento, lavagem autônoma); referência de teses que esta skill adapta ao ramo previdenciário.
- **Best-practice `peticao-criminal`** — régua de estrutura, endereçamento e técnica da peça criminal em que este pedido se encaixa.
- **Skill `extincao-punibilidade-pagamento-tributario`** — **fonte única** da mecânica da extinção pelo pagamento e da suspensão pelo parcelamento (certidão, cascata de pedidos, modelo, endereçamento); invoque-a, não a duplique.
- **Skill `extincao-punibilidade-prescricao`** — interface da prescrição (desconto do período de suspensão pelo parcelamento no cálculo).
- **Skill `defesa-lavagem-capitais`** — quando há lavagem conexa: autônoma, não arrastada pela extinção do antecedente previdenciário.
- **Skill `inepcia-denuncia-generica`** e **skill `denuncia-mp`** — para atacar a inépcia da imputação (ausência do dolo de apropriação, autoria presumida).
- **Skill `habeas-corpus`** — veículo do trancamento pela SV 24 (T5) quando a via é o writ.
- **Agente `jurisprudencia-stj-stf`** — precedentes atuais (dolo de apropriação, inexigibilidade, insignificância, alcance da SV 24 no 168-A, alcance temporal do pagamento) antes de citar qualquer julgado.
- **Agente `lei-e-sumula`** — conferência de vigência e redação (CP 168-A/337-A; arts. 9º da Lei 10.684/03 e 68-69 da Lei 11.941/09) antes da citação.
- **Agente `verificador-citacoes`** — gate final obrigatório: nenhuma citação entra na peça sem verificação; o que não confirmar recebe **[NÃO VERIFICADO]**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
