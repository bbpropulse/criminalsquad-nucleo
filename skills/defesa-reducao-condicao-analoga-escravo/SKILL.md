---
name: defesa-reducao-condicao-analoga-escravo
description: >-
  Use ao defender imputações dos arts. 149 (redução a condição análoga à de escravo) e 149-A
  (tráfico de pessoas) do CP — separar o ilícito TRABALHISTA do tipo PENAL, atipicidade por mera
  irregularidade, ausência das quatro modalidades típicas (trabalho forçado, jornada exaustiva,
  condição degradante, servidão por dívida), ausência de dolo e ataque ao standard probatório dos
  autos de infração do MTE/auditor-fiscal. Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-a-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-reducao-condicao-analoga-escravo"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-reducao-condicao-analoga-escravo", "defesa reducao", "analoga escravo"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Redução a Condição Análoga à de Escravo e Tráfico de Pessoas (CP arts. 149 e 149-A)

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

Esta skill orienta a **defesa técnica** em imputações dos crimes contra a liberdade individual e a dignidade do trabalhador: **art. 149 do CP** (reduzir alguém a condição análoga à de escravo) e o correlato **art. 149-A** (tráfico de pessoas). Prevalece o entendimento de que a competência é da **Justiça Federal** (CF, art. 109, VI), por ofensa à organização do trabalho como bem jurídico coletivo — mas **confirme o julgado-âncora e sua atualidade** via `jurisprudencia-stj-stf` antes de fundamentar a peça (não cite número de acórdão de memória). [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`] O eixo estratégico central é **separar o ilícito trabalhista do ilícito penal** — nem toda precariedade laboral configura crime.

> **Lição central:** o erro capital da acusação é tratar **irregularidade trabalhista como crime**. Registro em CTPS ausente, salário atrasado, alojamento sem alvará, ausência de EPI ou de PPRA — isso rende **auto de infração administrativo e ação trabalhista**, não necessariamente o art. 149. O tipo penal exige a **supressão da liberdade** ou a **ofensa grave e concreta à dignidade** (condição degradante/servidão), com **dolo** de submeter o trabalhador a essa condição. A defesa deve, ANTES de tudo, mapear em qual das quatro modalidades típicas a acusação se ancora e demolir a subsunção.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 149 do CP** (a **Lei 10.803/2003** deu-lhe a redação atual, com as quatro modalidades e as causas de aumento do §2º) e do **art. 149-A** (incluído pela **Lei 13.344/2016** — Lei de Enfrentamento ao Tráfico de Pessoas). Confira também competência, súmulas, teses e eventual *overruling* via a skill `jurisprudencia-stj-stf` antes de fundamentar a peça. Não cite acórdão de memória.

## Base legal

- **Art. 149, *caput*, CP** (red. Lei 10.803/2003) — quatro modalidades típicas: (i) **trabalho forçado**; (ii) **jornada exaustiva**; (iii) **condição degradante** de trabalho; (iv) **servidão por dívida** (restrição da locomoção em razão de dívida). Pena: reclusão de 2 a 8 anos e multa, além da pena pela violência.
- **Art. 149, §1º, CP** — figuras equiparadas: cercear o uso de meio de transporte, manter vigilância ostensiva ou apoderar-se de documentos/objetos pessoais para reter o trabalhador no local.
- **Art. 149, §2º, CP** — causas de **aumento de metade**: contra criança/adolescente; por motivo de preconceito de raça, cor, etnia, religião ou origem.
- **Art. 149-A, CP** (red. Lei 13.344/2016) — **tráfico de pessoas**: agenciar, aliciar, recrutar, transportar, transferir, comprar, alojar ou acolher pessoa mediante grave ameaça, violência, coação, fraude ou abuso, para as finalidades dos incisos I a V (inclusive submissão a trabalho em condições análogas à de escravo — inc. II). Causas de aumento e de diminuição nos §§1º e 2º.
- **CF, art. 5º, III** (vedação a tratamento desumano/degradante) e **art. 109, VI** — **competência da Justiça Federal**.
- **Convenções OIT nº 29 e nº 105** (trabalho forçado) — vetor interpretativo do conceito de "trabalho forçado", mas **não criam tipo penal** (princípio da legalidade estrita).
- **CLT e NRs do MTE** — definem o ilícito **administrativo/trabalhista**; sua violação, por si só, **não** perfaz o tipo penal. É exatamente essa fronteira que a defesa explora.

## As quatro modalidades típicas — e como atacar cada uma

A denúncia precisa dizer **em qual modalidade** o fato se enquadra e **descrever a conduta concreta**. Denúncia genérica ("submeteu a condição análoga à de escravo") sem individualizar a modalidade e os fatos é **inepta** (art. 41 CPP).

| Modalidade (art. 149) | Núcleo do tipo | Tese defensiva típica |
|---|---|---|
| **Trabalho forçado** | Labor imposto contra a vontade, sob coação (física, moral ou psicológica) | Trabalhador podia **deixar o serviço livremente**; havia liberdade de ir e vir; ausência de coação real |
| **Jornada exaustiva** | Jornada que, pela intensidade/duração, esgota o trabalhador além do humanamente tolerável, atingindo sua saúde/dignidade | Excesso de horas é **infração trabalhista** (art. 59 CLT), não "exaustão" penal; ausência de risco concreto à saúde/dignidade; comprovar controle de jornada e descanso |
| **Condição degradante** | Condições de trabalho/moradia que aviltam a dignidade — alojamento insalubre, ausência de água potável/sanitário, comida imprópria | Precariedade **não é sinônimo de degradação**; comparar com o padrão da região/atividade; irregularidade sanável ≠ aviltamento da dignidade; providências já adotadas |
| **Servidão por dívida** | Restrição da locomoção por dívida (truck system: descontos de moradia, alimentação, ferramentas que aprisionam) | Adiantamentos e descontos **lícitos e consentidos** não configuram servidão; ausência de retenção; trabalhador saldava e circulava livremente |

> **Ponto doutrinário decisivo (bem jurídico):** o STF fixou que o bem jurídico do art. 149 é a **dignidade da pessoa humana e a liberdade do trabalhador em sentido amplo** — **não se exige** *cerceamento físico da liberdade de locomoção* (o "trabalhador acorrentado") para as modalidades de **condição degradante** e **jornada exaustiva**. Isso é uma faca de dois gumes: amplia o tipo, mas também confina cada modalidade a um **núcleo próprio**, que a defesa deve exigir seja provado. **Confira o precedente-âncora (Inq/RE do Pleno do STF) via `jurisprudencia-stj-stf` — não cite número de memória.** [NÃO VERIFICADO — confirmar acórdão e ementa]

## Eixos de defesa (roteiro por camadas)

Trabalhe do mais radical (extinção) ao mais brando (redução), sempre subsidiariamente.

### 1. Atipicidade — a fronteira ilícito trabalhista × crime
- **Tese-mãe:** o conjunto probatório descreve **descumprimento da legislação trabalhista**, não a supressão da liberdade nem o aviltamento grave da dignidade. Aponte, item a item, que cada "irregularidade" do auto de infração tem **sanção administrativa própria** e **não migra automaticamente** para o tipo penal.
- **Princípio da intervenção mínima / fragmentariedade:** o Direito Penal só alcança as ofensas **mais graves**; a mera precariedade é resolvida pelo Direito do Trabalho.
- **Padrão regional e da atividade:** contextualizar as condições (trabalho rural, safra, construção) sem relativizar a dignidade — mas afastando a leitura urbana/idealizada que a acusação projeta.

### 2. Ausência de dolo
- O art. 149 é **doloso** (não há forma culposa). É preciso a **vontade de submeter** o trabalhador à condição típica.
- Teses: empregador **desconhecia** a extensão da precariedade (obra terceirizada, gato/empreiteiro intermediário); adotou/estava adotando **providências** de regularização; **erro de tipo** quanto às circunstâncias (art. 20 CP) afasta o dolo.
- **Responsabilidade penal é pessoal:** individualizar a conduta. Sócio que não geria a frente de trabalho, tomador de serviço que contratou empreiteira idônea — atacar a **imputação objetiva** e o nexo com o resultado.

### 3. Ataque ao standard probatório (auto de infração do MTE)
- O **auto de infração** e o **relatório de fiscalização** do auditor-fiscal/grupo móvel gozam de **presunção *juris tantum*** no âmbito **administrativo**, mas **no processo penal** valem como **prova documental sujeita a contraditório**, **não** como prova plena da materialidade do crime.
- Exigir **corroboração**: laudos periciais (das condições de moradia/trabalho), **oitiva dos próprios trabalhadores** em juízo (e não apenas o termo colhido na fiscalização), fotografias com cadeia de custódia, prova da coação/da dívida.
- **Depoimentos colhidos na diligência administrativa** sem contraditório penal têm valor **relativo**; requerer a **ratificação em juízo** (art. 155 CPP — a condenação não pode fundar-se exclusivamente em elementos do inquérito/fiscalização).
- Atacar **generalização**: fiscalização que descreve "os trabalhadores" em bloco, sem individualizar quem, quando e como foi submetido a quê.

### 4. Nulidades e questões processuais próprias
- **Inépcia da denúncia (art. 41 CPP):** não indica a **modalidade típica**, não descreve conduta individualizada, imputa responsabilidade objetiva a sócios.
- **Competência:** é da **Justiça Federal** (art. 109, VI, CF). Processo que tramitou na Justiça Estadual pode gerar **nulidade absoluta por incompetência**. [Confirmar o alcance atual do entendimento via `jurisprudencia-stj-stf` — NÃO VERIFICADO]
- **Cadeia de custódia** das fotos/vídeos/documentos apreendidos na fiscalização (arts. 158-A a 158-F CPP) — ver skill `cadeia-de-custodia`.
- **Prova emprestada** do procedimento administrativo/trabalhista para o penal: só com **contraditório** e deferimento fundamentado.

### 5. Teses de redução e alternativas (subsidiárias)
- **Afastar causas de aumento do §2º** (criança/adolescente; preconceito): exigir prova específica do elemento majorante.
- **Desclassificação** do art. 149 para **infrações menos graves** (ex.: art. 203 CP — frustração de direito assegurado por lei trabalhista; art. 207 CP — aliciamento de trabalhadores), quando o fato não alcança o núcleo do 149. **Cuidado:** desclassificar para tipo de menor pena pode reabrir competência/prescrição favoráveis à defesa.
- **Prescrição:** com pena de 2 a 8 anos, checar prescrição pela pena em concreto após eventual condenação (ver skill `calculadora-prescricao`).
- **Dosimetria:** se a condenação for inevitável, brigar por pena-base no mínimo, afastar majorantes e buscar substituição por restritivas de direitos (art. 44 CP) quando cabível — ver skill `calculadora-dosimetria`.

## Teses e contra-teses (defesa × acusação)

| Tese defensiva | Contra-tese acusatória (antecipar) | Reforço da defesa |
|---|---|---|
| "É irregularidade trabalhista, não crime" | O art. 149 protege a dignidade; degradação basta, sem cárcere | Mostrar que a **precariedade concreta** não atinge o **núcleo de aviltamento**; padrão da atividade; providências adotadas |
| "Trabalhador tinha liberdade de ir e vir" | Nas modalidades degradante/exaustiva não se exige cerceamento físico | Reconduzir cada modalidade ao **seu núcleo próprio**; exigir prova da exaustão/degradação **concreta** |
| "Ausência de dolo — empreiteiro intermediário" | Responsabilidade do tomador/empregador pela frente de trabalho | Individualizar a gestão; contrato com empresa idônea; **erro de tipo**; imputação objetiva |
| "Auto de infração não é prova plena penal" | Presunção de legitimidade do ato administrativo | Art. 155 CPP; exigir **oitiva em juízo** e corroboração pericial; contraditório |
| "Descontos eram lícitos e consentidos" | *Truck system* configura servidão por dívida | Prova de que o trabalhador **saldava e circulava**; ausência de retenção/coação |

## Súmulas, precedentes e enunciados (sob o Citation Gate)

> **Regra inegociável — Citation Gate.** Dispositivos de lei e conceitos consolidados podem ser afirmados; **qualquer número específico de HC/RE/REsp/Inq, informativo, tema ou súmula** deve ser **conferido** via `jurisprudencia-stj-stf` antes de ir para a peça. Prefira ensinar a **tese** e citar o **dispositivo** a arriscar um número de acórdão. Na dúvida, **omitir vence inventar** (há sanção real por jurisprudência fabricada por IA).

- **Competência da Justiça Federal** para o art. 149 — orientação consolidada do STF. Confirmar o julgado-âncora e sua atualidade. [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`]
- **Bem jurídico = dignidade + liberdade em sentido amplo; dispensa de cárcere físico** nas modalidades degradante/exaustiva — tese fixada pelo Pleno do STF. Confirmar acórdão. [NÃO VERIFICADO]
- **Distinção condição degradante × mera irregularidade trabalhista** — há precedentes do STJ delimitando o alcance do tipo. Buscar e conferir antes de citar. [NÃO VERIFICADO]
- Não afirme "Súmula nº X" sem verificação: **não há súmula notória** específica sobre o art. 149 que se possa citar de memória com segurança — **trate toda súmula invocada como sujeita a conferência**.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Aceitar a equação "auto de infração = crime": é o coração da acusação e deve ser **atacado de saída**.
- Não identificar **em qual das quatro modalidades** a denúncia se ancora — cada uma tem núcleo e defesa próprios.
- Confundir o padrão **trabalhista** (CLT/NR) com o padrão **penal** (aviltamento grave) — a fronteira é a tese central.
- Deixar de exigir **oitiva dos trabalhadores em juízo** e aceitar termos da fiscalização como prova plena (art. 155 CPP).
- Ignorar a **competência federal** (art. 109, VI) e eventual nulidade por processamento no juízo estadual.
- Esquecer de individualizar a conduta de cada acusado (sócios, tomador, empreiteiro) — responsabilidade penal é pessoal.
- Desprezar a **cadeia de custódia** das provas materiais colhidas na fiscalização.
- Citar acórdão/súmula de memória — **passar tudo pelo Citation Gate**.

**Checklist da defesa:**
- [ ] A denúncia indica a **modalidade típica** e descreve conduta **individualizada**? (Se não → inépcia, art. 41 CPP.)
- [ ] Mapeei, item a item, quais "irregularidades" são meramente **trabalhistas** e quais a acusação eleva a crime?
- [ ] Consigo demonstrar **liberdade de locomoção** / ausência de coação / de retenção por dívida?
- [ ] Há prova de que a precariedade **não atinge** o núcleo de aviltamento (padrão da atividade/região; providências)?
- [ ] Ataquei o **dolo** (desconhecimento, intermediação por empreiteiro, erro de tipo, providências)?
- [ ] Requeri **oitiva dos trabalhadores em juízo** e **corroboração pericial** do relatório de fiscalização (art. 155 CPP)?
- [ ] Verifiquei a **competência federal** (art. 109, VI) e a **cadeia de custódia** das provas?
- [ ] Considerei **desclassificação** (arts. 203/207 CP) e o impacto em pena/prescrição?
- [ ] Calculei **prescrição** e **dosimetria** pelas skills próprias (`calculadora-prescricao`, `calculadora-dosimetria`)?
- [ ] **Todas** as súmulas/precedentes/teses passaram pelo gate `jurisprudencia-stj-stf`/`verificacao-citacoes`?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a estratégia, a subsunção e as citações são de responsabilidade do **advogado** (EAOAB; CED, art. 2º). Não substitui a análise dos autos concretos, dos laudos e da oitiva dos trabalhadores.
- **Polo:** skill de **DEFESA** (`polo_acusacao: false`). O roteador deve **conferir o polo** da instituição em `_criminalsquad/_memory/company.md` antes de usar — se a atuação for do **Ministério Público/assistente de acusação**, o enfoque probatório se inverte e esta skill não é a adequada. Ética por polo: advocacia (OAB + Provimento 205/2021); MP (CNMP); Defensoria (LC 80/94).
- **Citation Gate:** nenhuma súmula, tese ou acórdão citado de memória — tudo pela best-practice `verificacao-citacoes` / skill `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).
- **Sigilo/LGPD:** dados dos trabalhadores e do assistido nunca em repositório público.

**Padrão de redação:** ao redigir a peça (resposta à acusação, memoriais, alegações finais, recurso), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
