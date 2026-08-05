---
name: anpp-taticas-negociacao-avancada-mp
description: >-
  Use ao NEGOCIAR com o Ministério Público um Acordo de Não Persecução Penal (ANPP, art. 28-A do
  CPP) — mapear BATNA/ZOPA, calibrar e sequenciar as condições do §1º (reparação, prestação
  pecuniária, serviço à comunidade), usar a confissão como moeda com cautela, provocar o §14 diante
  de recusa infundada e proteger o cliente de condições abusivas. Gatilhos: ANPP, acordo de não
  persecução, art. 28-A, negociar com o MP, prestação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, anpp, negociacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["anpp-taticas-negociacao-avancada-mp", "anpp taticas", "negociacao avancada"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-anpp-taticas-negociacao-avancada-mp"]
---

# ANPP — táticas avançadas de negociação com o MP (art. 28-A do CPP)

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

Esta skill é o **ofício da negociação** do Acordo de Não Persecução Penal: assumido que a ANPP é **cabível** (esse juízo de cabimento é da skill `estrategia-plea-negociacao-integrada-anpp-colaboracao`), aqui se decide **como negociar** — que posição adotar, o que conceder, em que ordem, em que momento e com que salvaguardas. Perspectiva **da defesa** (advocacia/Defensoria): a proposta é ato do **Ministério Público**, mas a defesa **provoca, dimensiona condições, contrapropõe e recomenda** — e **quem decide aceitar é sempre o cliente**, informado.

> **Lição central:** a ANPP não é uma peça, é uma **negociação** — e negociação se ganha na preparação, não na assinatura. Antes de sentar com o Promotor, a defesa precisa saber **três números**: o custo real do litígio para o cliente (sua BATNA), o custo da persecução para o MP (a BATNA *dele*) e a **capacidade concreta de cumprimento** do cliente. Quem conhece a alternativa ao acordo de cada lado define a ZOPA — a faixa em que o acordo é melhor que litigar para ambos. E a **moeda mais cara que a defesa põe na mesa é a confissão**: uma vez formalizada, ela fica nos autos mesmo se o acordo ruir. Calibrar essa entrega é o coração do craft.

> **Cautela de vigência (obrigatória antes de citar):** o **art. 28-A do CPP** foi introduzido pela **Lei 13.964/2019** (Pacote Anticrime). Questões sensíveis — **retroatividade** do instituto a fatos anteriores, o **momento-limite** para oferecer/provocar a ANPP (até o recebimento da denúncia? até a sentença?), o **valor da confissão** se o acordo não homologar e o **cabimento de recurso** contra a recusa — são objeto de precedentes do STF/STJ e de **Enunciados do CNPG e da 2ª CCR do MPF** que **mudam**. Confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de fundamentar. Na dúvida sobre um número de julgado, **omita antes de inventar**.

## Base legal

- **Art. 28-A, *caput*, do CPP** — requisitos **cumulativos** de cabimento: (i) **confissão formal e circunstanciada** da prática da infração; (ii) infração **sem violência ou grave ameaça**; (iii) **pena mínima inferior a 4 anos**, considerando **causas de aumento e diminuição** aplicáveis ao caso (§1º); (iv) que o acordo seja **necessário e suficiente para a reprovação e prevenção** do crime. Sem qualquer um, não há ANPP.
- **Art. 28-A, §1º, I a V** — as **condições negociáveis** (é aqui que a negociação vive): I — **reparar o dano** ou restituir a coisa à vítima (salvo impossibilidade); II — **renunciar** voluntariamente a bens e direitos indicados como **instrumentos, produto ou proveito** do crime; III — **prestar serviço à comunidade** por período correspondente à pena mínima diminuída de 1/3 a 2/3; IV — **pagar prestação pecuniária** a entidade pública/de interesse social; V — **cumprir outra condição** indicada pelo MP, **desde que proporcional e compatível** com a infração.
- **Art. 28-A, §2º** — **vedações** (fecham a porta mesmo com pena compatível): (I) cabível **transação penal**; (II) **reincidente** ou com conduta criminal **habitual, reiterada ou profissional** (salvo condutas insignificantes); (III) ANPP, transação ou *sursis* concedidos nos **5 anos** anteriores; (IV) crime em contexto de **violência doméstica/familiar** ou contra a mulher por razões da condição de sexo feminino.
- **Art. 28-A, §§4º a 7º** — **homologação judicial**: designação de audiência, aferição de **voluntariedade** (ouvindo o investigado na presença do defensor) e de **legalidade**; o juiz pode **devolver** os autos ao MP para reformular condições **inadequadas, insuficientes ou abusivas** (§5º) e pode **recusar** a homologação (§7º), caso em que os autos voltam ao MP.
- **Art. 28-A, §8º** — recusa de homologação → o MP deverá **analisar a necessidade de complementação** das investigações ou o **oferecimento da denúncia**.
- **Art. 28-A, §14** — se o MP **recusar-se** a propor a ANPP, o investigado pode **requerer a remessa dos autos a órgão superior** do próprio MP (na forma do art. 28 do CPP) — a alavanca da defesa contra a recusa imotivada.

## Anatomia do acordo — o que se negocia (e o que não se negocia)

Separe o **não-negociável** (requisitos legais de existência) do **negociável** (as condições e sua calibragem):

**Não se negocia (é pressuposto ou vedação — checar antes de sentar à mesa):**
- A **confissão formal e circunstanciada** é exigência de existência do acordo — não é "concessão" que se troca; sem ela, não há ANPP. O que se negocia é o **timing e a forma** de prestá-la (ver roteiro).
- A **pena mínima < 4 anos** (com aumentos/diminuições) e a **ausência de violência/grave ameaça** definem cabimento — matéria da skill de decisão, não desta.
- As **vedações do §2º** não se contornam por acordo.

**Negocia-se (o campo de manobra — §1º, I a V):**
- **Quais** condições incidirão (reparação, renúncia de instrumentos, serviço, prestação pecuniária, "outra condição").
- **Quanto** de cada uma (valor da prestação pecuniária; horas/meses de serviço; extensão da reparação).
- **Como** e **em que prazo** cumprir (parcelamento, cronograma, forma de comprovação).
- A **proporcionalidade** do conjunto — o teto implícito é o §1º, V (condição deve ser **proporcional e compatível** com a infração) e o próprio *caput* (**necessário e suficiente**). Condição excessiva é **ilegal**, não apenas indesejável.

> **Eixo do dimensionamento:** a prestação pecuniária e o serviço à comunidade devem ser calibrados à **capacidade econômica real** do cliente e à **proporcionalidade**. Um valor que o cliente **não consegue pagar** transforma o "bom acordo" no **pior dos mundos**: descumprimento → rescisão → denúncia **com a confissão já nos autos** (art. 28-A, §10). Melhor negociar valor menor com parcelamento crível do que aceitar número alto que quebrará no meio.

## Roteiro tático de negociação

### 1) Preparação — mapear BATNA e ZOPA antes da primeira conversa

- **BATNA da defesa** (*Best Alternative To a Negotiated Agreement* — a melhor alternativa ao acordo): o que acontece com o cliente **se não houver ANPP**? Denúncia, instrução, risco real de condenação, pena provável, custo, exposição, tempo. Quanto **pior** for a alternativa ao acordo, mais o acordo interessa — mas isso é para **calibrar a própria disposição**, não para revelar ao MP.
- **BATNA do MP:** qual o custo da **persecução plena** para a acusação? Prova frágil, testemunhas problemáticas, prescrição no horizonte, volume de trabalho, chance concreta de absolvição elevam o **interesse do MP** em resolver por acordo. Ler a força probatória da acusação é ler a BATNA dela.
- **ZOPA** (*Zone Of Possible Agreement*): a faixa de condições em que o acordo é **melhor que litigar para os dois lados**. Se a prestação pecuniária que o MP quer supera o que o cliente pode pagar **e** o litígio ainda assim é pior para o cliente, a ZOPA existe, mas é estreita — abre-se com **parcelamento, serviço em substituição parcial e comprovação de capacidade**.

### 2) Sequenciamento das concessões — o que ceder, e em que ordem

- **Ancore primeiro no cabimento e na proporcionalidade**, não no valor. Comece firmando que a ANPP é cabível (afaste vedações do §2º) e que a **medida do §1º, V** é a **proporcionalidade** — isso enquadra a discussão de valores num teto legal, não na vontade do Promotor.
- **Ceda no que custa pouco ao cliente e sinaliza boa-fé cedo:** a **reparação do dano à vítima** (§1º, I) e a **renúncia a instrumentos/produto do crime** (§1º, II) costumam ser as concessões de menor atrito e maior valor simbólico para o MP — oferecê-las de forma estruturada demonstra seriedade e **compra margem** na prestação pecuniária.
- **Guarde a prestação pecuniária e o serviço para o ajuste fino:** são as condições em que a **capacidade real** do cliente é o argumento — traga **prova** dela (renda, encargos, dependentes) para sustentar valor menor e **parcelamento**.
- **Nunca revele sua BATNA nem seu piso.** Revelar o quanto o cliente está disposto a pagar destrói a margem. Trabalhe com **contraproposta fundamentada** (proporcionalidade + capacidade), não com "quanto o senhor aceita?".

### 3) Timing — a ANPP vale mais barato mais cedo

- A ANPP é, por natureza, instrumento da **fase pré-processual** (antes da denúncia). Negociar **cedo**, quando a acusação ainda tem incerteza probatória, tende a produzir condições melhores — a BATNA do MP é pior quanto mais incerta a prova.
- Oferecida a **denúncia** sem que a ANPP tenha sido proposta quando cabível, a defesa pode **provocar** a aferição do acordo. O **marco-limite** para isso (recebimento da denúncia? até a sentença?) é **controvertido** — [NÃO VERIFICADO — conferir a posição atual do STF/STJ via `jurisprudencia-stj-stf` antes de fixar o marco na petição].
- **Não espere "para ver toda a prova".** Diferente do litígio, aqui o tempo em geral **corre contra** o benefício: quanto mais a investigação avança e consolida prova, menor o incentivo do MP a transigir.

### 4) A confissão como moeda — usar com cautela

- A confissão **formal e circunstanciada** é **requisito de existência** da ANPP: sem ela o acordo não nasce. Mas ela é também a **entrega mais irreversível na prática** que a defesa faz.
- **Risco central:** se o acordo **não se homologa** (§7º) ou é **rescindido por descumprimento** (§10), a confissão **já está nos autos**. O **valor probatório** dessa confissão na ação penal retomada é **sensível e controvertido** — há discussão sobre seu uso restrito ao contexto do acordo — [NÃO VERIFICADO — conferir posição atual via `jurisprudencia-stj-stf`].
- **Tática:** só recomende ANPP a cliente com **capacidade real de cumprir** as condições até o fim, e **estruture a confissão** de forma circunstanciada mas **sem exceder** o necessário à existência do acordo. Documente ao cliente, por escrito, a irreversibilidade prática dessa entrega.

### 5) Diante da recusa do MP — a alavanca do §14

- Se o MP **recusa** propor a ANPP, a defesa não fica sem saída: **requeira a remessa dos autos ao órgão superior** do próprio MP (art. 28-A, §14, na forma do art. 28 do CPP). É o controle interno da recusa.
- **Fundamente a provocação:** demonstre que os requisitos do *caput* estão presentes e que as **vedações do §2º não incidem** (em especial, que "conduta reiterada/habitual" exige **demonstração concreta**, não meros inquéritos em curso — presunção de inocência, CF art. 5º, LVII). Recusa **imotivada** ou por fundamento vedado por analogia é atacável.
- **Distinga recusa de contraproposta:** o MP que oferece condições que a defesa considera abusivas **não recusou** — abriu negociação. Aí o caminho é **contrapropor com proporcionalidade** (e, subsidiariamente, levar a desproporção ao juiz na homologação, §5º), não o §14.

## Armadilhas e cláusulas a evitar

- **Aceitar prestação pecuniária acima da capacidade** do cliente — descumprimento futuro traz rescisão **com a confissão já nos autos** (§10). É o erro mais caro.
- **Confessar antes de fechar as condições** — a confissão é requisito, mas não a entregue "de boa-fé" antes de a proposta estar madura; o texto e o momento da confissão integram a negociação.
- **Renunciar a bens que não são instrumento/produto/proveito do crime** — o §1º, II autoriza renúncia dos bens **ligados ao crime**; cláusula que exige renúncia a patrimônio lícito do investigado é **abusiva** e atacável na homologação.
- **"Outra condição" (§1º, V) desproporcional ou vexatória** — a lei exige que seja **proporcional e compatível** com a infração; recuse condição que funcione como pena antecipada disfarçada.
- **Prazos e forma de comprovação vagos** — sem cronograma claro e meio de comprovação definido, o cliente fica exposto a alegação de descumprimento. Negocie **calendário, parcelamento e como comprovar** cada condição.
- **Não checar as vedações do §2º antes de negociar** — descobrir a vedação depois de confessar é desastre; a triagem de cabimento (skill de decisão) vem **antes**.
- **Tratar a homologação como automática** — o juiz pode devolver por condições inadequadas/abusivas (§5º) ou recusar (§7º); alinhe as condições à proporcionalidade **pensando já no crivo judicial**.
- **Decidir pelo cliente** — aceitar ANPP (com confissão) é escolha **do assistido**, informado; ao advogado cabe aconselhar e negociar, não impor.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** a ANPP é instituto **recente** (Lei 13.964/2019) e sua jurisprudência **está em consolidação**. **Não cite acórdão, tema ou enunciado de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça. Dispositivos de lei (o próprio art. 28-A e seus parágrafos) podem ser citados livremente; **precedente e enunciado, não**.

Pontos a conferir (todos **[NÃO VERIFICADO]** — buscar antes de afirmar):
- **Retroatividade** do art. 28-A a fatos anteriores à Lei 13.964/2019 e o **marco temporal-limite** para propor/provocar a ANPP (recebimento da denúncia? até a sentença?) — posição atual do STF/STJ.
- **Valor probatório da confissão** prestada para a ANPP quando o acordo **não se homologa** ou é **rescindido** — há discussão sobre uso restrito.
- **Recorribilidade** da decisão que homologa/recusa a ANPP e do indeferimento da provocação do §14.
- **Enunciados do CNPG e da 2ª CCR do MPF** sobre parâmetros de oferecimento, condições e recusa — confirmar existência, número e teor.

> Na peça, prefira **ensinar a tese e ancorar no dispositivo** (art. 28-A e parágrafos) a arriscar um número de julgado. Todo precedente entra só **depois do gate**.

## Checklist e anti-padrões

- [ ] **Cabimento** já confirmado pela skill de decisão (pena mínima < 4 anos com aumentos/diminuições; sem violência/grave ameaça; vedações do §2º afastadas)?
- [ ] **BATNA** da defesa e do MP mapeadas (custo do litígio para cada lado; força probatória lida)?
- [ ] **Capacidade econômica real** do cliente apurada e **documentada** para sustentar valor/parcelamento?
- [ ] **Sequenciamento** definido — reparação/renúncia de instrumentos cedo; prestação pecuniária/serviço no ajuste fino?
- [ ] **Confissão** estruturada, circunstanciada **sem exceder** o necessário, e sua irreversibilidade prática **explicada por escrito** ao cliente?
- [ ] **Proporcionalidade** das condições verificada (§1º, V; *caput* — necessário e suficiente) — nada abusivo/vexatório?
- [ ] **Cronograma, parcelamento e forma de comprovação** de cada condição negociados e claros?
- [ ] Diante de recusa: fundamentos do **§14** (remessa ao órgão superior) preparados, distinguindo recusa de contraproposta?
- [ ] **Homologação** antecipada — condições alinhadas ao crivo do juiz (§§5º, 7º)?
- [ ] **Consentimento informado** do cliente documentado (opções, custo, irreversibilidade da confissão, recomendação)?
- [ ] Toda **súmula/precedente/enunciado** conferido via `jurisprudencia-stj-stf` — nada de memória?

**Anti-padrões (evitar):**
- Negociar valor **antes** de firmar o teto da proporcionalidade — entrega a régua ao MP.
- Aceitar prestação pecuniária que o cliente **não conseguirá pagar**.
- Entregar a **confissão** antes de a proposta amadurecer.
- Confundir **recusa** (aciona o §14) com **contraproposta dura** (aciona contraproposta/homologação).
- Tratar a **homologação como automática** e ignorar o crivo judicial dos §§5º e 7º.
- Renunciar a **patrimônio lícito** sob rótulo de "instrumento do crime".
- Citar **enunciado do CNPG/CCR ou acórdão** sobre ANPP sem passar pelo gate.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio metodológico à **negociação** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a)/defensor(a) responsável, e a decisão de aceitar o acordo é **do cliente**, informado (CED/EAOAB; LC 80/94 na Defensoria).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **Ministério Público** (proponente do acordo), a lógica se **inverte**: o foco passa a ser aferir requisitos, dimensionar condições **necessárias e suficientes** e fundamentar oferecimento/recusa conforme o CNMP — as táticas acima viram **pontos a antecipar da defesa**, não a executar. A proposta, na ação pública, é ato do MP.
- **Citation Gate:** nenhuma súmula, tema, enunciado ou acórdão vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido, capacidade econômica e termos negociados **nunca** em repositório público.

## Lembretes finais

- **Negociação se ganha na preparação:** BATNA de cada lado + capacidade real do cliente = a ZOPA.
- **A confissão é a moeda mais cara** — irreversível na prática; calibrar timing e extensão, e só para quem pode cumprir.
- **Dimensione à capacidade e à proporcionalidade** — acordo impagável vira rescisão com confissão nos autos (§10).
- **Sequencie concessões:** boa-fé cedo (reparação/renúncia de instrumentos), ajuste fino depois (pecuniária/serviço).
- **Cedo vale mais:** ANPP na fase pré-processual, com prova ainda incerta, produz melhores condições.
- **Recusa infundada tem antídoto:** o §14 (remessa ao órgão superior) — distinto da contraproposta dura.
- **Sem jurisprudência de memória** — instituto recente; confira via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao formalizar a proposta/contraproposta ou a petição do §14, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
