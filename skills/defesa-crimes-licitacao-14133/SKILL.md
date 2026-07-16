---
name: defesa-crimes-licitacao-14133
description: >-
  Use ao defender acusados de crimes em licitações e contratos administrativos incorporados ao
  Código Penal pela Lei 14.133/2021 (arts. 337-E a 337-P) — frustração/fraude ao caráter
  competitivo, contratação direta ilegal, patrocínio de interesse privado, perturbação de processo
  licitatório. Teses centrais: exigência de dolo específico e de efetivo prejuízo/potencialidade
  lesiva, atipicidade da mera irregularidade… Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, administracao-publica, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-licitacao-14133"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-licitacao-14133", "defesa crimes", "licitacao 14133"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes de Licitação (CP, arts. 337-E a 337-P — Lei 14.133/2021)

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

Esta skill orienta a **defesa técnica** (resposta à acusação, alegações finais, memoriais, razões de apelação e habeas corpus) nos **crimes em licitações e contratos administrativos** que a **Lei 14.133/2021** deslocou para o **Título XI, Capítulo II-B, do Código Penal** (arts. 337-E a 337-P), **revogando os arts. 89 a 108 da Lei 8.666/93** (art. 193, I, da Lei 14.133). São crimes de colarinho branco: a defesa vive de **atipicidade material**, **ausência de dolo específico**, **inexistência de prejuízo** e, quase sempre, de uma **questão de direito intertemporal quente** — porque muitos fatos ocorreram sob a lei antiga.

> **Lição central:** nestes crimes, **irregularidade administrativa NÃO é crime**. O eixo da defesa é separar o **ilícito administrativo/improbidade** (que se resolve no TCU/TCE e na ação de improbidade) do **ilícito penal** (que exige dolo específico e, na maioria dos tipos, dano ou risco concreto ao erário/à competição). Antes de discutir mérito, **classifique o tipo exato** (337-E? 337-F? 337-K?) e verifique **qual lei regia o fato** — a resposta a essas duas perguntas define toda a tese.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 14.133 tornou-se **exclusiva a partir de 30/12/2023** (fim do regime de transição com a 8.666/93). Confirme a **redação vigente** dos arts. 337-E a 337-P e a data-limite da revogação da 8.666/93 na fonte oficial, pois houve alterações e adiamentos legislativos no período de transição. **Todo precedente específico (número de HC/REsp/RE, informativo, tema repetitivo/de repercussão geral) passa obrigatoriamente pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de ir para a peça.** Na dúvida, ensine a tese e o dispositivo; não arrisque o número do acórdão.

---

## Base legal

- **CP, arts. 337-E a 337-P** (Capítulo II-B, inserido pela Lei 14.133/2021) — os tipos penais dos certames e contratos.
- **Lei 14.133/2021, art. 193, I** — **revoga os arts. 89 a 108 da Lei 8.666/93** (e, com a Lei 14.133, também o art. 337-O que tratava do RDC/Lei 12.462 no que couber — conferir).
- **CP, art. 2º** — lei penal no tempo: *abolitio criminis* (parágrafo único) e retroatividade da lei mais benéfica; base do direito intertemporal.
- **CF, art. 5º, XL** — irretroatividade da lei penal mais gravosa / retroatividade da mais benéfica.
- **CP, art. 327** — conceito de **funcionário público** (importa para o sujeito ativo de vários tipos e para o **concurso com o particular**, art. 30 CP).
- **Lei 14.133/2021, arts. 72, 74, 75** — hipóteses de **inexigibilidade e dispensa** (pano de fundo do art. 337-E: só é crime a contratação direta *fora* das hipóteses legais).
- **Lei 8.137/90 e Lei 12.850/13** — eventual concurso com crimes tributários ou organização criminosa (frequente em denúncias amplas).

---

## Mapa dos tipos penais (arts. 337-E a 337-P)

> Confirme a **redação exata** de cada dispositivo na fonte oficial antes de subsumir — abaixo vai a **estrutura típica** para orientar a tese, não a transcrição literal.

| Art. | Núcleo típico (rótulo) | Elemento subjetivo / finalidade | Porta de defesa mais comum |
|------|------------------------|---------------------------------|----------------------------|
| **337-E** | Contratação direta ilegal (dispensa/inexigibilidade fora das hipóteses legais) | Dolo + fim de dispensar/inexigir indevidamente | Enquadramento em hipótese legal (arts. 72/74/75); erro sobre a legalidade; ausência de dolo específico |
| **337-F** | Frustração/fraude ao caráter competitivo do certame | Fim de frustrar/fraudar a competição, com intuito de vantagem | Ausência de ajuste/conluio; competição real preservada; atipicidade da mera falha formal |
| **337-G** | Patrocínio de contratação indevida (advocacia administrativa no certame) | Interesse privado perante a Administração | Ausência de patrocínio de interesse privado; ato regular de ofício |
| **337-H** | Modificação/pagamento irregular em contrato administrativo | Dolo de causar dano/vantagem indevida | Aditivo lícito (art. 124 e ss. da 14.133); ausência de dano |
| **337-I** | Perturbação de processo licitatório (impedir/perturbar/fraudar a realização) | Dolo de impedir/perturbar | Ausência de nexo com a perturbação; conduta atípica |
| **337-J** | Violação de sigilo em licitação | Dolo + quebra do sigilo devido | Informação já pública; ausência de dever de sigilo |
| **337-K** | Afastamento de licitante (por violência, grave ameaça, fraude ou vantagem) | Fim de afastar/desestimular concorrente | Ausência de coação/fraude; concorrência não afetada |
| **337-L** | Fraude em licitação/contrato (entrega/quantidade/qualidade diversa; superfaturamento) | Dolo de fraudar (elevar preço, alterar qualidade/quantidade) | Ausência de fraude; execução regular; perícia que afasta o sobrepreço |
| **337-M** | Contratação inidônea (contratar com empresa declarada inidônea/suspensa) | Dolo de contratar quem não podia | Desconhecimento não exigível; ausência de dolo |
| **337-N** | Impedimento indevido de inscrição/registro cadastral | Dolo de impedir/obstruir | Ato regular; ausência de finalidade obstrutiva |
| **337-O** | Omissão grave de dado/informação por projetista | Dolo de omitir dado relevante | Ausência de relevância; erro técnico não doloso |
| **337-P** | Pena de multa (regra de dosimetria/critério da multa dos crimes do capítulo) | — | Discussão de dosimetria, não de tipicidade |

> **Regra de leitura:** quase todos exigem **elemento subjetivo especial** (fim de frustrar, de fraudar, de obter vantagem, de causar dano). É aí que a defesa mais ganha: **sem a finalidade específica, o fato é atípico** — sobra, quando muito, ilícito administrativo.

---

## As quatro teses-mãe da defesa

### 1. Atipicidade material — irregularidade administrativa não é crime
A **mera falha formal** (vício em edital, ausência de 3 orçamentos, formalização precária de dispensa) é ilícito **administrativo/de improbidade**, não penal. O Direito Penal é **ultima ratio**: só incrimina condutas com **lesividade** ao bem jurídico (moralidade + competitividade + erário). Defesa: demonstrar que a irregularidade apontada **não frustrou a competição nem causou dano**, ficando no plano administrativo.

### 2. Ausência de dolo específico (elemento subjetivo especial do tipo)
Vários tipos exigem **finalidade especial** — "com o fim de frustrar", "para obter vantagem", "para afastar licitante". Não basta o dolo genérico de praticar o ato; é preciso a **intenção qualificada**. Defesa: **não há prova do especial fim de agir**; o agente atuou por interpretação jurídica defensável, orientação de assessoria/parecer, ou dentro da discricionariedade administrativa. **Erro de proibição** (art. 21 CP) e **erro de tipo** (art. 20 CP) são armas frequentes: o gestor que segue **parecer jurídico** favorável à dispensa age, no mínimo, sem consciência da ilicitude.

### 3. Ausência de prejuízo / de potencialidade lesiva
Onde o tipo exige **dano** (ex.: superfaturamento no 337-L, pagamento irregular no 337-H), **sem prejuízo comprovado não há crime consumado**. Mesmo nos tipos formais, sustenta-se a exigência de **potencialidade lesiva concreta** à competição (não basta a lesão presumida). Defesa: **perícia contábil/de engenharia** que afaste sobrepreço; preço praticado **dentro do mercado**; objeto **efetivamente entregue** na quantidade/qualidade contratada.

### 4. Direito intertemporal — a questão mais quente (CP, art. 2º)
Como os tipos **migraram** da Lei 8.666/93 (arts. 89-108) para o CP (337-E a 337-P), o fato praticado **antes da vigência da 14.133** exige comparação lei-a-lei:
- **Continuidade típico-normativa** (não houve *abolitio*): se a conduta continua incriminada, aplica-se a **lei mais benéfica** ao caso concreto (pena, requisitos, elementos).
- ***Abolitio criminis*** (CP, art. 2º, parágrafo único): se algum tipo **deixou de ser crime** ou passou a exigir elemento **antes dispensado** (ex.: dano/finalidade que a lei antiga não pedia), a conduta pretérita que não preenche o novo tipo é **atípica** → **extinção da punibilidade**.
- **Novatio legis mais benéfica / mais gravosa:** comparar **penas em abstrato**, **causas de aumento**, **prescrição** e **elementos do tipo** entre 8.666/93 e 14.133; aplicar a mais favorável, ainda que exija **combinação de aspectos favoráveis** — ponto controvertido, sustentar com cautela e confirmar a orientação atual no Citation Gate.

> **Roteiro intertemporal (obrigatório em todo caso pré-2023):** (a) datar o fato; (b) identificar o tipo revogado da 8.666 e o correspondente do CP; (c) comparar elementos e penas; (d) invocar *abolitio* se o novo tipo exige o que a conduta não tem; senão, (e) requerer a **lei mais benéfica** (CF, art. 5º, XL; CP, art. 2º). O **cálculo de pena** e a **prescrição** comparados apontam para a calculadora — ver "Dosimetria e prescrição".

---

## Roteiro de análise/defesa por tipo penal

### 337-E — Contratação direta ilegal (o "novo art. 89")
- **Pergunta 1:** a contratação direta se enquadra em **dispensa (art. 75) ou inexigibilidade (art. 74)** da 14.133? Se sim → **atípica**.
- **Pergunta 2:** havia **parecer jurídico** favorável (art. 53 da 14.133)? O gestor que segue parecer age sem dolo/consciência da ilicitude → **erro de proibição** (art. 21 CP) ou atipicidade subjetiva.
- **Pergunta 3:** houve **prejuízo** ou **favorecimento** concreto? A jurisprudência historicamente exigiu, no antigo art. 89, **dolo específico + dano ao erário** — sustentar a continuidade dessa exigência no 337-E. **[NÃO VERIFICADO — a orientação sobre exigência de dolo específico e dano no antigo art. 89 (STF/STJ) deve ser confirmada via `jurisprudencia-stj-stf`.]**
- **Tese-síntese:** contratação direta amparada em hipótese legal e parecer, sem prejuízo e sem intenção de favorecer, é **fato atípico**.

### 337-F — Frustração/fraude ao caráter competitivo
- Exige **ajuste, combinação ou artifício** para frustrar a competição. Defesa: **não houve conluio**; a competição foi **real** (vários licitantes; disputa efetiva); a suposta falha não teve **aptidão** para frustrar o certame.
- **Cartel/combinação de preços:** cuidar do **concurso** com a Lei 12.529/11 (infração à ordem econômica) — mas fato administrativo-concorrencial não é, por si, crime licitatório.

### 337-K — Afastamento de licitante
- Exige **violência, grave ameaça, fraude ou oferecimento de vantagem** para afastar/desestimular concorrente. Defesa: ausência do **meio executório** típico; a desistência do concorrente foi **espontânea** ou por razões comerciais próprias.

### 337-L — Fraude em licitação/contrato (superfaturamento, objeto diverso)
- Núcleo: **elevar arbitrariamente o preço**, **entregar mercadoria/serviço diverso**, **alterar qualidade/quantidade**. Defesa **pericial** é central: preço **compatível com o mercado**; objeto **entregue conforme contrato**; eventual diferença é **erro de execução**, não fraude dolosa.
- **Sobrepreço x superfaturamento:** sobrepreço (preço acima do mercado no papel) sem **dano efetivo** (pagamento a maior) pode não consumar o crime — explorar a distinção.

### 337-H — Modificação/pagamento irregular em contrato
- Exige **modificação ou pagamento sem autorização legal**. Defesa: o **aditivo** observou os arts. 124 e ss. da 14.133 (limites de acréscimo/supressão); o pagamento seguiu **medição regular**; ausência de **dano**.

### 337-G, 337-I, 337-J, 337-M, 337-N, 337-O
- Tipos de menor incidência, mas mesma lógica: identificar o **elemento subjetivo especial** e a **lesividade concreta**; afastar quando a conduta for **ato regular de ofício**, **informação já pública**, **desconhecimento não exigível** ou **erro técnico não doloso**.

---

## Nulidades e questões processuais próprias

- **Competência:** crime de licitação de verba **federal** (convênio, transferência voluntária da União) tende à **Justiça Federal** (Súmula 208/STJ — desvio de verba sujeita à prestação de contas ao órgão federal; Súmula 209/STJ — verba já incorporada ao município é competência estadual). **Datar a origem da verba** define o juízo — nulidade por incompetência absoluta é tese de HC.
- **Inépcia da denúncia / falta de justa causa:** exigir **descrição individualizada** da conduta de cada acusado (vedada a **denúncia genérica** em crimes societários/de gabinete) e a **indicação do dolo específico**. Denúncia que apenas descreve a irregularidade administrativa, sem imputar dolo e dano, é **inepta** (art. 41 CPP) — resposta à acusação pedindo rejeição (art. 395 CPP) ou absolvição sumária (art. 397 CPP).
- **Prova emprestada do TCU/TCE:** relatório de tribunal de contas **não é sentença penal**; a responsabilização administrativa **não vincula** a esfera penal (independência relativa das instâncias). Atacar o uso do acórdão de contas como se fosse prova cabal do dolo.
- **Cadeia de custódia e prova pericial:** contestar laudos de sobrepreço com **contraperícia**; questionar metodologia de apuração de preço de referência.
- **Bis in idem / concurso aparente:** afastar cumulação indevida com peculato, corrupção, organização criminosa quando o fato é **único** — princípios da consunção/especialidade (ver `defesa-corrupcao` e `defesa-peculato` para os tipos genéricos).

---

## Dosimetria e prescrição (método — não calcule aqui)

- **Comparação de penas 8.666 x 14.133:** para o direito intertemporal, é preciso **comparar a pena em abstrato** (mínimo/máximo) do tipo revogado e do novo, além de causas de aumento e da **multa** (337-P). Faça a **dosimetria comparada** com a skill `calculadora-dosimetria` (não estime pena à mão).
- **Prescrição:** os prazos mudam conforme a **pena máxima cominada** (art. 109 CP); a migração de tipos pode **alterar o prazo prescricional**, favorecendo a defesa quando a pena nova for menor. Calcule com `calculadora-prescricao`, atento ao **termo inicial** (consumação, que em crime de licitação costuma ser a **homologação/contratação** ou o **pagamento**, conforme o tipo).
- **Tempestividade** de recursos e da resposta à acusação: `calculadora-tempestividade`.

> Estas três são calculadoras deterministas já existentes no acervo. Se alguma não cobrir a comparação intertemporal específica (ex.: prescrição comparada 8.666 x 14.133), trate como **[calculadora a implementar com testes]** e, enquanto isso, faça a conta **manualmente com dupla conferência humana**.

---

## Teses e contra-teses (defesa × acusação)

| Tese de defesa | Contra-tese (MP/assistente) | Como reforçar a defesa |
|----------------|-----------------------------|------------------------|
| Irregularidade é administrativa, não penal | O tipo é formal; basta a violação da norma licitatória | Mostrar ausência de lesividade concreta; Direito Penal como *ultima ratio* |
| Ausência de dolo específico (seguiu parecer) | Dolo eventual basta; parecer não exime | Erro de proibição (art. 21); parecer técnico afasta consciência da ilicitude |
| Sem prejuízo, não há crime consumado | Crime de perigo; dano é dispensável | Perícia que afasta sobrepreço; distinção sobrepreço x superfaturamento |
| *Abolitio*/lei mais benéfica (fato pré-2023) | Continuidade normativa; aplica-se a nova pena | Comparar elemento a elemento; requerer o regime mais favorável (art. 2º CP) |
| Denúncia genérica / inépcia | Crime societário admite descrição geral | Exigir individualização e imputação de dolo/dano (art. 41 CPP) |
| Incompetência (verba federal/estadual) | Competência do juízo que processou | Súmulas 208/209 STJ; datar a origem da verba |

---

## Súmulas e precedentes sob o Citation Gate

- **Súmula 208/STJ** e **Súmula 209/STJ** — competência (verba sujeita a prestação de contas à União → Justiça Federal; verba incorporada ao patrimônio municipal → Justiça Estadual). **Notórias; ainda assim confirmar a redação vigente.**
- **Exigência de dolo específico e dano no antigo art. 89 da Lei 8.666/93** — havia forte orientação jurisprudencial (STF/STJ) nesse sentido, transportável ao **337-E**. **[NÃO VERIFICADO — confirmar número de precedente/tema via `jurisprudencia-stj-stf` antes de citar.]**
- **Continuidade normativo-típica na migração 8.666 → 14.133 e efeitos intertemporais** — tema de decisões recentes dos tribunais superiores. **[NÃO VERIFICADO — não citar número de HC/REsp/RE/Informativo sem confirmação no Citation Gate.]**
- **Independência das instâncias (penal x TCU/improbidade)** — princípio consolidado; a absolvição/condenação administrativa não vincula a penal, salvo negativa categórica de autoria/materialidade. **Confirmar o enunciado e eventuais precedentes aplicáveis via `jurisprudencia-stj-stf`.**

> **Regra de ouro do Citation Gate:** dispositivo de lei e súmula notória, cite com segurança. **Qualquer número de acórdão, informativo ou tema**, marque `[NÃO VERIFICADO]` e confira em `jurisprudencia-stj-stf`. **Omitir vence inventar** — há sanções reais por jurisprudência alucinada.

---

## Erros comuns / checklist da defesa

- [ ] **Tipo penal exato identificado** (337-E? 337-F? 337-L?) e **redação vigente conferida**?
- [ ] **Data do fato** verificada e **direito intertemporal** analisado (8.666 x 14.133; *abolitio*? lei mais benéfica)?
- [ ] Separou o **ilícito administrativo/improbidade** do **ilícito penal** (atipicidade material)?
- [ ] Atacou o **dolo específico** (finalidade especial do tipo) — parecer jurídico, erro de proibição/tipo?
- [ ] Demonstrou **ausência de prejuízo / potencialidade lesiva** (perícia; preço de mercado; objeto entregue)?
- [ ] Verificou **competência** (verba federal x estadual — Súmulas 208/209 STJ)?
- [ ] Argumentou **inépcia/denúncia genérica** e falta de imputação individualizada de dolo e dano (art. 41 CPP)?
- [ ] Afastou uso do **acórdão do TCU/TCE** como prova cabal do dolo (independência das instâncias)?
- [ ] Checou **concurso aparente** (consunção/especialidade) com peculato/corrupção/organização criminosa?
- [ ] **Dosimetria e prescrição comparadas** feitas nas calculadoras (`calculadora-dosimetria`, `calculadora-prescricao`), não à mão?
- [ ] **Toda súmula/precedente/tese passou pelo Citation Gate** (`jurisprudencia-stj-stf`)?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

**Anti-padrões (evitar):**
- Tratar **irregularidade formal** como se fosse automaticamente crime (ignora a *ultima ratio* e a atipicidade material).
- Aceitar **dolo genérico** onde o tipo exige **finalidade especial** — sem o especial fim de agir, o fato é atípico.
- **Ignorar o direito intertemporal** em fatos pré-2023 — pode haver *abolitio* ou pena/prescrição mais benéfica na comparação 8.666 x 14.133.
- Deixar de **datar a origem da verba** e discutir competência (Súmulas 208/209 STJ).
- Usar o **relatório do TCU** como se decidisse a esfera penal (viola a independência das instâncias).
- Somar tipos em **concurso** sem checar consunção/especialidade (bis in idem).
- Citar **número de acórdão de memória** — passar tudo pelo Citation Gate.
- **Estimar pena/prescrição à mão** em vez de usar as calculadoras deterministas.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à elaboração da defesa; a peça final e todas as teses são de responsabilidade do **advogado** que subscreve (EAOAB; CED; **Provimento 205/2021 da OAB**).
- **Polo:** esta skill é do **polo de DEFESA** (advocacia criminal). Se o pedido for de **acusação** (MP/assistente), o **chefe-roteador deve conferir o polo** em `_criminalsquad/_memory/company.md` e acionar a skill acusatória correspondente — o enfoque aqui é **defensivo por tipo penal**. (A spec registra `polo_acusacao=false`.)
- **Ética por instituição:** advocacia (OAB + Prov. 205/2021); Ministério Público (CNMP); Defensoria (LC 80/94). Conflito de interesses (art. 17 EAOAB) checado na triagem — comum em casos com múltiplos gestores/empresas coacusados.
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese citado de memória; tudo confere em `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita (dolo específico e ausência de dano ponto a ponto), coesão e persuasão (a régua de obra-prima que a revisão cobra).
