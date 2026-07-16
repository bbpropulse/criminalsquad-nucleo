---
name: defesa-crimes-mercado-capitais-cvm-4595
description: >-
  Use ao defender em crimes contra o Sistema Financeiro Nacional (Lei 7.492/86 — gestão
  fraudulenta/temerária art. 4º, evasão de divisas art. 22, instituição financeira sem autorização
  art. 16) e em crimes do mercado de capitais (Lei 6.385/76 — arts. 27-C uso indevido de informação
  privilegiada/insider trading, 27-D manipulação de mercado, 27-E exercício irregular de
  cargo/profissão). Gatilhos: colarinho branco, penal… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, penal-economico, mercado-financeiro]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-mercado-capitais-cvm-4595"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-mercado-capitais-cvm-4595", "defesa crimes", "capitais 4595"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes contra o SFN e o Mercado de Capitais (Lei 7.492/86 e Lei 6.385/76)

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

Esta skill orienta a **defesa técnica** nos crimes do **direito penal econômico** ligados ao sistema financeiro e ao mercado de capitais: os crimes contra o **Sistema Financeiro Nacional** (Lei 7.492/86 — "Lei do Colarinho Branco") e os crimes do **mercado de valores mobiliários** (Lei 6.385/76, arts. 27-C a 27-E, inseridos pela Lei 10.303/2001 e alterados pela Lei 13.506/2017). São crimes de **autoria societária**, apurados em regra pela Justiça Federal, com forte interface administrativa (Banco Central e CVM) e sancionadora paralela.

> **Lição central:** neste campo, a defesa se ganha (ou se perde) em **duas frentes preliminares** antes do mérito. Primeiro, a **atipicidade/imputação genérica**: denúncia que descreve a estrutura da instituição mas não **individualiza a conduta** de cada acusado é inepta — não basta ser sócio, diretor ou administrador. Segundo, o **dolo específico e a tipicidade estrita**: gestão temerária e fraudulenta não se presumem do mau resultado do negócio (risco empresarial ≠ crime), e insider/manipulação exigem elementos normativos precisos (informação **relevante e ainda não divulgada**; **intenção** de alterar artificialmente o mercado). **Classifique o tipo penal e recorte a conduta concreta ANTES de discutir prova.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da Lei 7.492/86 e da Lei 6.385/76 (arts. 27-C/D/E, alterados pela **Lei 13.506/2017**, que elevou penas e reformou o processo administrativo sancionador do BACEN/CVM). Confira também competência (Justiça Federal — art. 26 da Lei 7.492/86; Súmula 122/STJ para conexão), a legislação cambial vigente (a **Lei 14.286/2021 — novo marco cambial** revogou dispositivos da Lei 4.131/62 e alterou o regime de capitais e declarações, com reflexo direto no art. 22 da Lei 7.492/86) e toda súmula/precedente pela skill `jurisprudencia-stj-stf` antes de fundamentar. **Não cite número de acórdão, tema ou informativo de memória.**

## Base legal

**Crimes contra o SFN — Lei 7.492/86:**
- **Art. 1º** — conceito (amplo) de **instituição financeira** e **equiparação** (inclusive quem, mesmo sem autorização, exerça atividade típica). Ponto central de tipicidade: só há crime da lei se houver instituição financeira (real ou equiparada).
- **Art. 4º, *caput*** — **gestão fraudulenta** de instituição financeira (crime próprio, pena 3–12 anos + multa).
- **Art. 4º, parágrafo único** — **gestão temerária** (forma menos grave, pena 2–8 anos + multa).
- **Art. 5º, 6º, 7º** — apropriação/desvio, sonegação de informação, emissão irregular de títulos.
- **Art. 16** — operar **instituição financeira sem autorização** (ou com autorização falsa).
- **Art. 17** — empréstimo/adiantamento vedado a controlador/administrador.
- **Art. 22** — **evasão de divisas**: operação de câmbio não autorizada para promover evasão (*caput*); **manter depósitos no exterior não declarados** à repartição federal competente (parágrafo único, 2ª parte).
- **Art. 25** — sujeito ativo: **controlador e administradores** da instituição (define quem pode ser autor — crucial para a individualização).
- **Art. 26** — competência da **Justiça Federal**; atribuição do MPF.

**Crimes do mercado de capitais — Lei 6.385/76:**
- **Art. 27-C** — **manipulação de mercado**: realizar operações fraudulentas para alterar artificialmente o funcionamento/preço/liquidez de valores mobiliários, com o fim de obter vantagem indevida ou causar dano a terceiros.
- **Art. 27-D** — **uso indevido de informação privilegiada (insider trading)**: utilizar informação **relevante ainda não divulgada** ao mercado, de que tenha conhecimento e que deva manter sigilo, para negociar (própria conta ou de terceiro). **§1º** figura equiparada (quem repassa/obtém a informação); **§2º** causa de aumento (agente com dever legal de sigilo).
- **Art. 27-E** — **exercício irregular de cargo, profissão, atividade ou função** no mercado sem autorização/registro da CVM.
- **Art. 27-F** — efeitos e fixação de multa (conferir redação vigente).

## Roteiro de análise e defesa — por tipo penal

### 1) Gestão fraudulenta e gestão temerária (art. 4º)

**Elementos e distinção.** *Fraudulenta* exige **ardil, artifício, fraude** (dolo de enganar) na condução da instituição; *temerária* é a gestão com **risco excessivo/injustificado** (culpa grave normativamente elevada a dolo de perigo). É crime **habitual impróprio** para parte da doutrina — pratica-se por **atos de gestão**, não por ato isolado ordinário.

**Teses típicas de defesa:**
- **Atipicidade por ausência de fraude/temeridade:** mau resultado empresarial, prejuízo ou inadimplência **não** convertem risco empresarial lícito em crime. O direito penal não pune o **insucesso do negócio**. Recortar que a conduta era decisão de gestão amparada em pareceres, comitês, normas internas.
- **Ausência de individualização da conduta:** o art. 25 restringe a autoria a **controlador e administradores** *que efetivamente geriram*. Diretor sem poder de decisão sobre o ato, membro de conselho consultivo, ou administrador de área diversa **não** respondem por atos alheios (vedada a **responsabilidade penal objetiva** — art. 5º, XLV, CF; art. 18 CP).
- **Denúncia genérica / inépcia (art. 41 CPP):** em crime societário admite-se certa mitigação na descrição, **mas não a imputação coletiva sem vínculo mínimo** de cada acusado ao fato. Pleitear rejeição/absolvição sumária.
- **Bis in idem entre fraudulenta e temerária:** não se pune duplamente a mesma gestão como fraudulenta *e* temerária; a temerária é **subsidiária**.
- **Erro de tipo/proibição** em operações complexas amparadas em interpretação técnica ou orientação do órgão regulador.

### 2) Instituição financeira sem autorização (art. 16) e a discussão do art. 1º

- **Tese-chave — inexistência de instituição financeira:** sem enquadramento no art. 1º (ou equiparação), **falta elementar** e o fato migra para outra figura (p. ex., estelionato, ou fato atípico sob a Lei 7.492). Discutir se a atividade era **captação/intermediação de recursos de terceiros** em caráter de instituição, ou mero negócio civil/mercantil.
- **Fronteira com pirâmide financeira e "factoring":** operações de fomento mercantil sem captação pública podem **não** configurar o art. 16 — conferir a natureza concreta do negócio.

### 3) Evasão de divisas (art. 22)

Três condutas: (a) operação de câmbio **não autorizada** para evasão (*caput*); (b) **saída de moeda/divisas** sem autorização; (c) **manter depósitos não declarados** no exterior (parágrafo único, 2ª parte).

**Teses típicas:**
- **Novo marco cambial (Lei 14.286/2021):** reviu obrigações declaratórias e o regime de capitais brasileiros no exterior. Verificar se a **conduta concreta** ainda é típica sob a legislação vigente à época e a atual (**abolitio criminis parcial / lei posterior mais benéfica** — art. 5º, XL, CF; art. 2º, parágrafo único, CP). Confira limites e obrigações de declaração vigentes.
- **Depósito não declarado:** discutir o **momento consumativo** (crime permanente ou instantâneo?) e a **prescrição**; discutir a **espontaneidade/regularização** e reflexos.
- **Elemento subjetivo:** o *caput* exige **fim especial** de promover evasão — recortar operação com finalidade lícita e registrada.
- **Concurso com sonegação/lavagem:** afastar imputação cumulativa quando a conduta é uma só (consunção) ou quando falta autonomia do delito antecedente.

### 4) Insider trading — uso indevido de informação privilegiada (art. 27-D)

**Elementos que a defesa ataca (cada um é uma tese):**
- **Relevância da informação:** a informação deve ser **relevante** (apta a influir na cotação) — informação já refletida no preço, boato, projeção pública ou dado imaterial **não** tipifica.
- **Ainda não divulgada:** se a informação **já era pública** (fato relevante publicado, notícia veiculada) ao tempo da operação, **falta elementar**. Datar com precisão a divulgação vs. a operação.
- **Dever de sigilo/condição de *insider*:** o tipo pressupõe que o agente **devesse manter sigilo** (administrador, controlador, quem tem acesso por função). O *outsider* que negocia sem esse dever pode não se enquadrar no *caput* (verificar figura equiparada do §1º).
- **Nexo entre a informação e a decisão de negociar:** operação **pré-programada**, decorrente de necessidade de liquidez, de plano prévio de investimento ou de recomendação independente, quebra o nexo. Investigar *trading plans* e histórico de operações.
- ***Ne bis in idem* e independência de instâncias:** o mesmo fato pode gerar **processo administrativo sancionador na CVM** e ação penal. São instâncias independentes, **mas** a defesa deve monitorar o resultado administrativo (absolvição na CVM por inexistência do fato/insuficiência de prova é forte argumento de reforço, ainda que não vincule automaticamente).

### 5) Manipulação de mercado (art. 27-C)

- **Tese-chave — artificialidade e dolo:** exige **operação fraudulenta** com o **fim** de alterar **artificialmente** preço/liquidez/funcionamento e obter vantagem indevida ou causar dano. Operação de mercado **real**, com efetiva transferência de risco e liquidação, ainda que agressiva, **não** é manipulação — recortar a diferença entre estratégia legítima e simulação (*spoofing*, *layering*, *wash trades*).
- **Prova do resultado/perigo:** discutir se houve efetiva **alteração artificial** ou risco concreto a ela, e não mera oscilação normal de mercado.
- **Individualização em operações algorítmicas/de mesa:** apurar quem **decidiu e ordenou** a operação, não a estrutura da corretora.

### 6) Exercício irregular (art. 27-E)

- Discutir se a atividade exigia **registro/autorização da CVM** e se o agente atuava profissionalmente no mercado, ou se se trata de ato isolado/consultoria não sujeita a registro.

## Teses transversais (valem para todos os tipos)

- **Individualização da conduta (a mãe de todas):** em crimes societários a denúncia deve indicar, ainda que sucintamente, **o vínculo concreto de cada acusado com o fato** (art. 41 CPP; art. 5º, XLV, CF). Sem isso: inépcia → rejeição da denúncia (art. 395, I, CPP) ou absolvição por atipicidade da conduta imputada.
- **Prescrição:** dado o rito e a complexidade (perícias, cartas rogatórias), a **prescrição** (da pretensão punitiva, inclusive **retroativa** e **intercorrente**) é frequente. Calcular sempre — descreva o método e use a skill `calculadora-prescricao`; para dosimetria da pena aplicada, `calculadora-dosimetria`; para prazo recursal, `calculadora-tempestividade`. *(Não invente prazos — o cálculo é determinístico e vive nas calculadoras dedicadas.)*
- **Competência da Justiça Federal (art. 26 da Lei 7.492/86):** verificar conexão e eventual desmembramento; **Súmula 122/STJ** (conexão entre crime federal e estadual → competência da JF) — conferir vigência via `jurisprudencia-stj-stf`.
- **Interface administrativa (BACEN/CVM):** a esfera penal é independente da administrativa, **mas** o processo administrativo pode conter **prova técnica favorável**, definições de relevância/artificialidade e decisões de arquivamento úteis à defesa. Requerer a **juntada** do PAS e monitorar seu desfecho.
- **Perícia e cadeia de custódia:** crimes econômicos vivem de **prova documental e pericial** (contábil, financeira, de mercado). Impugnar laudo unilateral, requerer perícia contraditória e assistente técnico; fiscalizar a cadeia de custódia de dados eletrônicos (aplica-se a skill `preservacao-prova-digital-defesa`).
- **Colaboração premiada e prova emprestada:** aferir a **corroboração** de delações e a licitude de prova compartilhada de acordos de leniência (CVM/CADE) ou cooperação internacional.
- **Consunção e concurso com lavagem:** quando a imputação soma o crime-base e **lavagem de capitais**, delimitar autonomia — a mera fruição do proveito não é, por si, lavagem (aplica-se `defesa-lavagem-capitais`). Em falência da instituição, dialogar com `defesa-crimes-falimentares`.

## Súmulas e precedentes (sob o Citation Gate — conferir tudo em `jurisprudencia-stj-stf`)

- **Súmula 122/STJ** — conexão entre crime de competência federal e estadual atrai a competência da **Justiça Federal**. *(Enunciado notório; confirmar redação e aplicação.)*
- **Súmula 24/STF** — nos crimes materiais **contra a ordem tributária** não se tipifica antes do lançamento definitivo (Súmula Vinculante 24). **Atenção:** é tese **tributária**, não do SFN — usar apenas por analogia argumentativa quando houver imputação tributária conexa, sem transplantá-la para gestão fraudulenta/insider. *(Verificar aplicabilidade concreta.)*
- **Necessidade de individualização da conduta em crimes societários** — orientação **consolidada** de STF e STJ de que a denúncia genérica é inepta, embora se admita descrição menos pormenorizada. **[NÃO VERIFICADO]** o número de cada precedente (HC/RHC/AgRg) — **não citar acórdão específico sem conferir** em `jurisprudencia-stj-stf`.
- **Independência entre a instância penal e o processo administrativo sancionador da CVM/BACEN** — entendimento corrente. **[NÃO VERIFICADO]** quanto a informativos/temas específicos — conferir antes de citar.
- **Marco temporal do art. 22 e reflexos da Lei 14.286/2021 (novo marco cambial)** — há discussão sobre *abolitio*/lei mais benéfica em condutas cambiais. **[NÃO VERIFICADO]** — não afirmar orientação pacificada sem checagem atual.

> **Regra de ouro do Citation Gate:** ensine a **tese e o dispositivo** (que você domina) e **omita o número do acórdão** quando não tiver certeza absoluta. Precedente inventado gera sanção real. Todo enunciado específico passa por `jurisprudencia-stj-stf` (e/ou `verificacao-citacoes`) antes de ir para a peça.

## Estrutura da peça (defesa)

Ajuste ao momento processual (resposta à acusação, alegações finais, HC, RSE/apelação). Esqueleto lógico:

1. **Síntese da imputação** e recorte do **tipo penal** concreto (qual artigo, qual conduta).
2. **Preliminares:** competência; inépcia/denúncia genérica (art. 41 CPP); ausência de justa causa (art. 395, III, CPP); prescrição; nulidades de prova/cadeia de custódia.
3. **Mérito por elementar:** atacar **cada elemento** do tipo (existência de instituição financeira; fraude/temeridade; relevância e não divulgação da informação; artificialidade da operação; fim especial na evasão).
4. **Autoria e individualização:** demonstrar a ausência de vínculo concreto do acusado com o ato de gestão/operação (art. 25 da Lei 7.492/86; art. 18 CP).
5. **Dolo:** afastar o dolo específico exigido; sustentar risco empresarial lícito, erro, boa-fé, conformidade regulatória (*compliance*).
6. **Prova técnica:** impugnação de laudos, requerimento de perícia contraditória e de juntada do PAS.
7. **Subsidiariamente:** desclassificação (fraudulenta → temerária), consunção, dosimetria e prescrição.
8. **Pedidos:** absolvição/rejeição; subsidiários; diligências.

## Erros comuns e checklist

- [ ] Identifiquei **qual tipo penal** exato (art. 4º *caput* vs. p. único; 16; 22; 27-C; 27-D; 27-E) e **recortei a conduta concreta** do meu cliente?
- [ ] Verifiquei a existência de **instituição financeira** (art. 1º) — elementar dos crimes da Lei 7.492?
- [ ] Ataquei a **individualização da conduta**? (Não basta ser sócio/administrador — art. 25; art. 41 CPP.)
- [ ] No insider: datei **divulgação da informação × operação** e discuti **relevância** e **dever de sigilo**?
- [ ] Na manipulação: separei **operação real** de **operação fraudulenta/artificial** e discuti o **dolo**?
- [ ] Na evasão: confirmei a legislação **cambial vigente à época e atual** (Lei 14.286/2021 — lei mais benéfica)?
- [ ] Calculei a **prescrição** (PPP, retroativa, intercorrente) via `calculadora-prescricao`?
- [ ] Requeri a **juntada do PAS** (CVM/BACEN) e monitoro seu desfecho?
- [ ] Impugnei laudos e fiscalizei a **cadeia de custódia** de prova digital/documental?
- [ ] Confirmei **competência** (Justiça Federal — art. 26) e eventual conexão (Súm. 122/STJ)?
- [ ] Todas as súmulas/precedentes passaram por `jurisprudencia-stj-stf` **antes** de citar?

**Anti-padrões (evitar):**
- Presumir crime a partir do **prejuízo/insucesso** do negócio (risco empresarial ≠ gestão temerária/fraudulenta).
- Aceitar **imputação coletiva** ("os denunciados, na qualidade de administradores...") sem exigir a conduta individual.
- Tratar como insider a negociação com informação **já pública** ou **imaterial**, sem datar a divulgação.
- Confundir **operação agressiva legítima** com **manipulação** — sem prova de artificialidade e dolo.
- Ignorar a **Lei 14.286/2021** ao analisar evasão de divisas (pode haver *abolitio*/lei mais benéfica).
- Deixar de calcular a **prescrição** em processo longo e pericial.
- Citar número de HC/REsp/tema/informativo **de memória** — sempre passar pelo gate.
- Transplantar a **SV 24** (crimes tributários) para gestão fraudulenta/insider sem base.

## Conformidade e nota final

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pelas teses e pela leitura do caso concreto é sempre do **advogado** (EAOAB; Código de Ética; Provimento 205/2021 na comunicação/publicidade). Não substitui o juízo profissional nem a análise dos autos.
- **Polo:** skill de **defesa** (réu/investigado). O chefe-roteador deve **conferir o polo** da instituição em `_criminalsquad/_memory/company.md` — se a atuação for do **Ministério Público Federal / assistente de acusação**, esta skill serve apenas como mapa dos elementos típicos a **provar** (não como roteiro acusatório).
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória; tudo por `jurisprudencia-stj-stf` / `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA).
- **Sigilo e LGPD:** dados do assistido nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita por elementar, coesão e persuasão (a régua de obra-prima que a revisão cobra).
