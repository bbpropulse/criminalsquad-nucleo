---
name: extradicao-ativa-pedido-brasil
description: >-
  Use para analisar extradicao ativa pedido brasil: POLO ATIVO/IMPULSIONADOR. Use quando o Brasil
  quer trazer do exterior um investigado/réu/condenado foragido — extradição ATIVA (Lei 13.445/2017,
  arts. 88-90; Decreto 9.199/2017; via MJ/DRCI): instrução do pedido, dupla incriminação, prescrição
  pelas duas leis, compromissos assumidos pelo Brasil como Estado requerente, especialidade e
  detração. Gatilhos: extradição… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, extradicao, polo-ativo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-extradicao-ativa-pedido-brasil"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["extradicao-ativa-pedido-brasil", "extradicao ativa", "pedido brasil"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Extradição Ativa — pedido brasileiro (Lei 13.445/2017, arts. 88-90; Decreto 9.199/2017)

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

Esta skill orienta a **instrução e o encaminhamento do pedido brasileiro de extradição ativa** — quando o **Brasil é o Estado requerente** e busca que um Estado estrangeiro **entregue** pessoa que aqui responde a investigação/processo (extradição **instrutória/processual**) ou já foi condenada (extradição **executória**), mas se encontra foragida no exterior. É cooperação jurídica internacional penal regida pela **Lei de Migração (Lei 13.445/2017)** e seu regulamento, com trâmite pelo **Ministério da Justiça (DRCI/SNJ)** e pela via diplomática.

> **Polo — ATENÇÃO (impulsionador):** esta skill é do lado que **impulsiona** a vinda do foragido. O interessado prático costuma ser o **juízo criminal / autoridade requisitante** (e, no seu apoio, o MP e eventual assistente de acusação); a **defesa técnica** brasileira normalmente **não** conduz o pedido — mas pode ter interesse legítimo (ex.: réu que quer se apresentar, ou defesa do extraditando no Estado requerido, que é outra skill). **O roteador deve confirmar o polo e o legítimo interesse antes de acionar.** Não é peça de defesa criminal típica; é instrução de cooperação.

> **Lição central:** o pedido de extradição ativa **se ganha ou se perde na instrução**. O motivo nº 1 de indeferimento pelo Estado requerido é **defeito documental** — ausência de decisão que ordena a prisão, tipificação incompleta, **falta de demonstração da dupla incriminação**, ou **prescrição** já consumada por uma das duas leis. Monte o dossiê pensando como o juiz **estrangeiro** vai lê-lo: tudo traduzido, autenticado/apostilado e com a **prescrição demonstrada pelas duas legislações**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Lei 13.445/2017 (arts. 81-99, esp. 88-90)** e do **Decreto 9.199/2017 (regulamento)**, além de **tratado bilateral/multilateral específico** com o país onde está o foragido (Mercosul, ONU/Palermo, ONU/Mérida, Convenção de Viena sobre drogas, tratados bilaterais). **Cada tratado tem regras próprias** (rol de crimes, prazos, prisão cautelar internacional, especialidade). Confira também a atuação da **Interpol (difusão vermelha)** e do **DRCI** pelos canais oficiais. Jurisprudência (STF/STJ), sempre pela skill `jurisprudencia-stj-stf`.

## Distinções que não podem se confundir

| Instituto | Polo do Brasil | Autoridade que decide | Skill |
|---|---|---|---|
| **Extradição ATIVA** (esta) | **Requerente** | Estado estrangeiro (Judiciário/Executivo de lá) | esta |
| Extradição **passiva** | **Requerido** | **STF** (art. 102, I, "g", CF) | defesa-extradicao-passiva-stf |
| **Transferência de pessoa condenada** | pode ser origem/destino | acordo entre Estados | (instituto próprio — não confundir) |
| **Transferência de execução da pena** | — | — | (instituto próprio) |
| Entrega ao **TPI** (*surrender*) | — | regime do Estatuto de Roma | (instituto próprio) |

➡️ **Nunca** trate extradição ativa como se o STF fosse julgar: no polo ativo, **quem julga é o Estado requerido**. O Brasil **instrui, encaminha e assume compromissos**.

## Base legal

- **Lei 13.445/2017 (Lei de Migração), arts. 81 a 99** — regime geral da extradição; **arts. 88-90** tratam da **extradição ativa** (encaminhamento pelo órgão competente ao Ministério da Justiça; requisitos; compromissos do Estado requerente).
- **Decreto 9.199/2017** — regulamento da Lei de Migração (procedimento administrativo do pedido, documentos, tradução, tramitação).
- **CF, art. 102, I, "g"** — o STF julga a extradição **passiva** (contexto: mostra que, no ativo, a competência decisória é do **outro** Estado).
- **CF, art. 5º, LI e LII** — vedações do lado brasileiro (brasileiro nato não se extradita; naturalizado só em hipóteses restritas; não se extradita por crime político/opinião). No **ativo**, importam como espelho: **o Estado requerido aplicará as vedações da lei DELE** (nacionalidade do foragido, crime político etc.).
- **Tratado aplicável** — bilateral (há dezenas) ou multilateral (Mercosul; convenções da ONU). **Na falta de tratado**, o pedido vai por **promessa de reciprocidade** (compromisso formal do Brasil de tratar igualmente pedido futuro daquele Estado).
- **CP, arts. 109-119** — **prescrição** pela lei brasileira (a ser demonstrada); e a prescrição pela **lei do Estado requerido** (requisito de dupla punibilidade temporal).

## Pressupostos materiais que a instrução deve provar

O pedido brasileiro precisa demonstrar, para convencer o Estado requerido, os requisitos clássicos da extradição (variam conforme o tratado, mas o núcleo é comum):

1. **Dupla incriminação (dupla tipicidade).** O fato deve ser **crime nos dois países** — no Brasil e no Estado requerido. Não se exige nomen iuris idêntico, mas **correspondência da conduta** como crime em ambos. Demonstre a subsunção nas **duas** legislações (ou, no mínimo, a brasileira com clareza suficiente para o cotejo estrangeiro).
2. **Dupla punibilidade — inclusive prescrição.** O crime **não pode estar prescrito** nem pela lei brasileira nem pela do Estado requerido. **Calcule e demonstre a prescrição pela lei brasileira** (CP, arts. 109-119) — pena em abstrato (extradição instrutória) ou pena aplicada/saldo (executória) — e sinalize a não prescrição pela lei estrangeira. *(Cálculo determinístico da prescrição brasileira: use a skill `calculadora-prescricao` e o método da skill de prescrição; aqui descrevemos apenas o requisito.)*
3. **Gravidade mínima (limiar de pena).** Em regra os tratados exigem crime punível com pena privativa de liberdade **acima de determinado patamar** (comumente 1 ou 2 anos, conforme o tratado). Confirme o limiar do **tratado aplicável**.
4. **Jurisdição/competência brasileira** sobre o fato e **título** que a sustente (decisão que decreta a prisão, na instrutória; sentença condenatória transitada, na executória).
5. **Ausência das vedações do Estado requerido** (nacionalidade do foragido, crime político, prescrição por lá, *ne bis in idem*, pena de morte/perpétua sem comutação etc.). Antecipe-as e neutralize-as na instrução.

## Compromissos que o BRASIL assume como Estado requerente

Este é o coração do polo ativo. Ao pedir, o Brasil **assume formalmente compromissos** (art. 89 e correlatos; e exigências do tratado). Sem eles, muitos Estados **não entregam**. Inclua no pedido, de modo expresso e formal:

- **Princípio da especialidade.** O extraditando **só será processado/punido pelos fatos que fundamentaram o pedido** — não por outros anteriores, salvo nova extradição ou consentimento do Estado requerido. Comprometa-se a respeitá-lo.
- **Detração / cômputo da prisão no exterior.** Compromisso de **computar na pena** o tempo de **prisão cautelar cumprida no Estado requerido** para fins da extradição (detração — art. 42, CP).
- **Comutação de pena de morte e de prisão perpétua.** Compromisso de **não aplicar pena de morte** e de **comutar prisão perpétua** em pena temporal máxima admitida (limite do art. 75, CP), quando o Estado requerido condicionar a entrega a isso.
- **Vedação de pena/tratamento cruel** e de tribunal de exceção; respeito ao devido processo.
- **Não reextradição a terceiro Estado** pelos mesmos fatos sem consentimento.
- **Não agravamento por motivo político** — o foragido não será punido por questões estranhas ao pedido.

➡️ **Regra prática:** liste esses compromissos como cláusulas expressas do encaminhamento. Compromisso **ausente** ou **genérico** é convite ao indeferimento.

## Fluxo procedimental (extradição ativa)

```
1) Título no Brasil
   ├── Instrutória: decisão que decreta a PRISÃO (preventiva) do foragido +
   │                denúncia/processo em curso
   └── Executória: sentença CONDENATÓRIA transitada em julgado + guia/mandado

2) Localização do foragido no exterior
   └── Difusão VERMELHA da Interpol (via canal nacional) — pedido de prisão
       cautelar para fins de extradição, enquanto se instrui o pedido formal

3) Formação do pedido pelo órgão requisitante (juízo/autoridade competente)
   └── Encaminhamento ao MINISTÉRIO DA JUSTIÇA (DRCI/SNJ) — art. 88

4) Análise e tradução no MJ + via DIPLOMÁTICA (Itamaraty)
   └── Pedido formal ao Estado requerido, com documentos traduzidos e
       autenticados/apostilados, dentro do PRAZO do tratado (após a prisão
       cautelar, há prazo para formalizar — confira o tratado)

5) Julgamento no ESTADO REQUERIDO (Judiciário/Executivo de lá)
   └── Deferida a entrega → recebimento do extraditando (escolta) e
       cumprimento dos COMPROMISSOS assumidos
```

> **Prisão cautelar para extradição (difusão vermelha):** normalmente **precede** o pedido formal e serve para não perder o foragido. Após a prisão no exterior, o tratado fixa **prazo** para o Brasil **formalizar** o pedido documental — **perder esse prazo pode levar à soltura**. Marque o prazo no controle do caso.

## Dossiê de instrução — o que anexar (traduzido e autenticado)

1. **Título penal brasileiro:**
   - *Instrutória:* cópia da **decisão que decretou a prisão** (preventiva) + denúncia recebida.
   - *Executória:* cópia da **sentença condenatória** com **certidão de trânsito em julgado** + mandado/guia.
2. **Exposição dos fatos** — narrativa clara de tempo, lugar, modo e resultado (o juiz estrangeiro precisa entender o caso).
3. **Textos legais** — **transcrição literal** dos dispositivos penais brasileiros incidentes (tipo, pena) **e** dos dispositivos sobre **prescrição** (CP, arts. 109-119).
4. **Demonstração da dupla incriminação** — cotejo da conduta com a lei do Estado requerido (quando conhecida) ou subsunção brasileira suficiente para o cotejo.
5. **Demonstração da não prescrição** pela lei brasileira (cálculo) — e sinalização quanto à lei estrangeira.
6. **Dados de identificação/qualificação** do foragido (nome, documentos, foto, digitais se houver) e **elementos de localização**.
7. **Compromissos formais do Brasil** (especialidade, detração, comutação de morte/perpétua, não reextradição etc.).
8. **Tradução oficial** de todas as peças para o idioma do Estado requerido (ou o previsto no tratado) + **autenticação/apostila** (Convenção da Apostila da Haia, quando aplicável).
9. **Indicação do tratado** aplicável **ou** a **promessa de reciprocidade**, se não houver tratado.

## Teses e pontos de ataque/defesa (do lado requerente)

**Para o pedido prosperar, antecipe as objeções que o extraditando levantará no Estado requerido e neutralize-as na instrução:**

- **"O fato está prescrito"** → apresente o **cálculo da prescrição** pela lei brasileira já pronto (marco interruptivo, pena-base) e, quando possível, pela lei estrangeira. *(Use `calculadora-prescricao`.)*
- **"Falta dupla incriminação"** → demonstre a **correspondência típica** com a legislação do Estado requerido, focando na **conduta**, não no nome do crime.
- **"É crime político"** → caracterize a **natureza comum** do delito; crimes de terrorismo, hediondos e correlatos em regra **não** são políticos (mas confira o tratado e a jurisprudência do Estado requerido).
- **"Risco de pena de morte/perpétua"** → ofereça, desde logo, o **compromisso de não aplicação/ comutação** (limite do art. 75, CP).
- **"O foragido é nacional do Estado requerido"** → nesse caso muitos Estados **não extraditam nacionais**; sinalize a alternativa da **transferência do processo** ou do julgamento no país do foragido (*aut dedere aut judicare*), conforme o tratado.
- **"Título insuficiente"** → garanta que a **decisão de prisão** (instrutória) ou o **trânsito em julgado** (executória) estejam completos, datados e traduzidos.

> **Contraponto (perspectiva do extraditando, para antecipar):** a defesa no Estado requerido tende a alegar prescrição, ausência de dupla incriminação, crime político, risco de tratamento desumano, e defeito formal do pedido brasileiro. **Instrua o dossiê para fechar cada porta.**

## Súmulas, precedentes e fontes (sob o Citation Gate)

> **Citation Gate — inegociável.** Dispositivos de lei citados acima (Lei 13.445/2017, arts. 88-90; Decreto 9.199/2017; CF, art. 102, I, "g" e art. 5º, LI/LII; CP, arts. 42, 75, 109-119) são de **texto legal** — confira a **redação vigente** na fonte oficial. **Qualquer precedente específico** do STF/STJ sobre extradição (número de Ext, HC, informativo, tema), bem como o **teor de tratado bilateral específico**, **NÃO** deve ser citado de memória: marque **[NÃO VERIFICADO]** e confirme via `jurisprudencia-stj-stf` e pelos canais oficiais (DRCI, Itamaraty, texto do tratado no Planalto/Concórdia).

- **Regra da especialidade, dupla incriminação, dupla punibilidade e comutação de pena** são **princípios consolidados** do direito extradicional — ensine a **tese e o dispositivo/tratado**, não um número de acórdão incerto.
- **Jurisprudência do STF sobre extradição** é majoritariamente do polo **passivo** (Brasil requerido); **não a importe automaticamente** para o polo ativo. [NÃO VERIFICADO — confirmar pertinência de qualquer precedente ao polo ATIVO antes de usar.]
- **Tratados** aplicáveis (Mercosul; ONU/Palermo — crime organizado; ONU/Mérida — corrupção; Convenção de Viena — drogas; bilaterais): **cite o tratado e o artigo apenas após conferir o texto oficial vigente** para o país do foragido. [NÃO VERIFICADO — conferir texto e vigência.]

## Erros comuns e checklist de instrução

**Anti-padrões (evitar):**
- Tratar o pedido como se o **STF** fosse decidir (é o **Estado requerido** quem julga a extradição ativa).
- Enviar título **incompleto** — decisão de prisão sem assinatura/data, ou sentença sem certidão de trânsito.
- **Não demonstrar a prescrição** pela lei brasileira (deixar o juiz estrangeiro concluir que prescreveu).
- Ignorar a **dupla incriminação** — assumir que o crime existe igual no outro país.
- **Omitir os compromissos** (especialidade, detração, comutação) — motivo recorrente de indeferimento.
- Perder o **prazo de formalização** após a prisão cautelar (difusão vermelha) → soltura do foragido.
- Documentos **sem tradução oficial** ou **sem apostila/autenticação**.
- Citar **tratado ou precedente de memória**, sem conferir vigência e pertinência ao polo ativo.

**Checklist:**
- [ ] Polo confirmado (Brasil **requerente**) e legítimo interesse do solicitante verificado?
- [ ] Título correto para o tipo: **decisão de prisão** (instrutória) **ou** **sentença transitada** (executória)?
- [ ] **Dupla incriminação** demonstrada (correspondência da conduta nas duas leis)?
- [ ] **Prescrição** calculada e afastada pela **lei brasileira** (CP, 109-119) — e sinalizada quanto à estrangeira? *(via `calculadora-prescricao`)*
- [ ] **Limiar de pena** do tratado atendido?
- [ ] **Compromissos formais** do Brasil incluídos (especialidade; detração; comutação de morte/perpétua — art. 75 CP; não reextradição)?
- [ ] **Difusão vermelha** da Interpol acionada e **prazo de formalização** controlado?
- [ ] Encaminhamento ao **Ministério da Justiça (DRCI)** pela via correta (art. 88)?
- [ ] **Tradução oficial + apostila/autenticação** de todas as peças?
- [ ] **Tratado aplicável identificado** (ou **promessa de reciprocidade**), com texto conferido? [NÃO VERIFICADO até conferência]
- [ ] Citações e precedentes conferidos via `jurisprudencia-stj-stf` (nada de memória)?
- [ ] **Revisão humana** da autoridade/advogado responsável antes do envio?

## Lembretes finais

- **No polo ativo, quem julga é o Estado requerido** — instrua o dossiê pensando no juiz estrangeiro.
- **Ganha-se na instrução:** dupla incriminação + prescrição afastada pelas **duas** leis + título completo + compromissos formais.
- **Compromissos do Brasil** (especialidade, detração, comutação) são cláusulas **obrigatórias**, não formalidade.
- **Difusão vermelha** primeiro (não perder o foragido); depois **formalizar no prazo** do tratado.
- **Tratado específico manda** — confira o texto vigente para o país do foragido; sem tratado, **reciprocidade**.
- **Cálculo determinístico** (prescrição/detração): delegue à `calculadora-prescricao` e às skills de cálculo — não improvise números aqui.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à **instrução** do pedido; a responsabilidade pela requisição, pelos compromissos assumidos em nome do Brasil e pelo envio é sempre da **autoridade/advogado competente**.
- **Ética por polo:** advocacia — **OAB (EAOAB) + Provimento 205/2021 CFOAB**; Ministério Público — **CNMP**; Defensoria — **LC 80/94**. Como este é instituto **impulsionador** (interesse tipicamente do juízo/MP), **o roteador deve confirmar o polo e o legítimo interesse** de quem aciona a skill.
- **Citation Gate:** nenhum tratado, súmula, tema ou precedente entra na peça sem conferência via `jurisprudencia-stj-stf` e canais oficiais (DRCI/Itamaraty). Na dúvida, **omitir vence inventar** — há sanções reais por citação inventada por IA.

**Padrão de redação:** ao redigir o encaminhamento/requisição, aplique também a skill `redacao-persuasiva-criminal` — clareza da narrativa dos fatos, subsunção explícita e coesão (a régua de qualidade que a revisão cobra).
