---
name: defesa-prevaricacao-condescendencia
description: >-
  Use ao defender prevaricação (CP 319), prevaricação imprópria / omissão em estabelecimento penal
  (CP 319-A) ou condescendência criminosa (CP 320) — teses centradas no elemento subjetivo especial
  'para satisfazer interesse ou sentimento pessoal', na distinção entre ato discricionário e
  retardo/omissão dolosa, na indulgência por mera negligência (atípica) e na fronteira com a
  improbidade. Gatilhos: prevaricação, CP 319, CP… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-administracao-publica, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-prevaricacao-condescendencia"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-prevaricacao-condescendencia", "defesa prevaricacao", "prevaricacao condescendencia"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Prevaricação e Condescendência Criminosa (arts. 319, 319-A e 320 do CP)

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

Esta skill orienta a **defesa técnica** nos crimes de **prevaricação** (CP, art. 319), **prevaricação imprópria / omissão do diretor de estabelecimento penal** (CP, art. 319-A) e **condescendência criminosa** (CP, art. 320) — figuras do Capítulo I do Título XI (crimes praticados por **funcionário público** contra a Administração em geral). São os **tipos de fechamento** das denúncias por omissão de servidor: quando não há peculato nem corrupção (não há proveito econômico nem mercadejar da função), a acusação recua para a prevaricação/condescendência. É aí que a defesa ataca o **elemento subjetivo especial**, quase sempre afirmado sem prova.

> **Lição central:** prevaricação **não é crime de resultado ruim nem de ineficiência**. O núcleo do tipo do art. 319 é o **fim especial de agir** — atuar (ou omitir/retardar) **"para satisfazer interesse ou sentimento pessoal"**. Sem esse dolo específico **provado**, a conduta é, no máximo, **falta funcional/administrativa** ou **atipia penal**. A tese-mãe da defesa é: *ausência do interesse ou sentimento pessoal* → não há prevaricação.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. **319, 319-A e 320 do CP** e do conceito de **funcionário público (art. 327 e §§)**. O art. **319-A foi inserido pela Lei 11.466/2007** (celular em presídio) — confirme o texto atual. Verifique também o rebaixamento de certas omissões à esfera **administrativa/improbidade** (Lei 8.429/92, alterada pela **Lei 14.230/2021**, que passou a exigir **dolo específico** na improbidade). Toda súmula, tema ou acórdão citado passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de ir para a peça.

---

## Base legal

- **CP, art. 319 (prevaricação):** "Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, **para satisfazer interesse ou sentimento pessoal**" — pena de detenção, 3 meses a 1 ano, e multa.
- **CP, art. 319-A (prevaricação imprópria):** deixar o **Diretor de Penitenciária e/ou agente público**, de vedar ao preso o acesso a aparelho **telefônico, de rádio ou similar** que permita comunicação com outros presos ou com o ambiente externo — pena de detenção, 3 meses a 1 ano (figura **omissiva própria**; inserida pela Lei 11.466/2007). **Confirme se há exigência do fim especial de agir** — a doutrina majoritária entende que o 319-A **dispensa** o "interesse ou sentimento pessoal" (basta a omissão dolosa do dever de vedar), diferentemente do 319 puro.
- **CP, art. 320 (condescendência criminosa):** "Deixar o funcionário, **por indulgência**, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não levar o fato ao conhecimento da autoridade competente" — pena de detenção, 15 dias a 1 mês, ou multa.
- **CP, art. 327 e §§ (funcionário público):** define o sujeito ativo — indispensável à tipicidade. **Elemento normativo do tipo:** sem a qualidade de funcionário público (própria ou por equiparação), não há o crime funcional.
- **CP, art. 337-A e ss. / crimes correlatos:** cuidado com a **fronteira** entre prevaricação e outros tipos funcionais (peculato art. 312; corrupção passiva art. 317; advocacia administrativa art. 321; abuso de autoridade Lei 13.869/2019).
- **Lei 8.429/92 (improbidade), art. 11, red. Lei 14.230/2021:** rebaixamento das omissões meramente ilegais/ineficientes à esfera cível-administrativa, agora com **exigência de dolo específico** — munição para a tese de que o fato é, no máximo, ilícito administrativo, **não penal**.

---

## Anatomia dos três tipos (elementos que a defesa disseca)

### Art. 319 — Prevaricação (o tipo central)

Três **modalidades de conduta**, todas dolosas:

1. **Retardar** ato de ofício (procrastinação indevida);
2. **Deixar de praticar** ato de ofício (omissão indevida);
3. **Praticar** ato de ofício **contra disposição expressa de lei** (ação ilegal).

**Elementos que precisam coexistir** (a ausência de qualquer um leva à atipia):

- **Sujeito ativo:** funcionário público (art. 327) — crime **próprio**.
- **Ato de ofício:** a conduta deve recair sobre **atribuição funcional específica** do agente. Se o ato não é de sua competência, **não há prevaricação** (falta o objeto).
- **"Indevidamente" / "contra disposição expressa de lei":** ilegalidade objetiva do retardo/omissão/ação.
- **Elemento subjetivo geral:** dolo (consciência e vontade de retardar/omitir/agir contra a lei).
- **Elemento subjetivo ESPECIAL (o coração do tipo):** o fim de **"satisfazer interesse ou sentimento pessoal"**. É o *dolo específico*. **Culpa não tipifica prevaricação** (não há forma culposa). Negligência, desídia, sobrecarga, erro de interpretação **não são** interesse/sentimento pessoal.

> **Interesse pessoal ≠ interesse patrimonial necessariamente.** "Interesse" pode ser material ou moral (ex.: favorecer amigo, prejudicar desafeto, vaidade, comodismo qualificado). "Sentimento pessoal" é o afeto/desafeto, ódio, amizade, vingança, simpatia. **Mas exige prova concreta** desse móvel — não se presume da mera irregularidade. **Comodismo genérico / preguiça / falta de estrutura NÃO é "sentimento pessoal"** para a corrente que exige um móvel individualizado (tese defensiva forte).

### Art. 319-A — Prevaricação imprópria (celular em presídio)

- **Sujeito ativo:** Diretor de Penitenciária e/ou **agente público** (a redação abrange o agente penitenciário, conforme entendimento — **confirmar alcance subjetivo** na jurisprudência atual via `jurisprudencia-stj-stf`).
- **Conduta:** **omissiva própria** — deixar de **cumprir o dever de vedar** o acesso do preso a aparelho de comunicação.
- **Ponto sensível:** parte da doutrina sustenta que o 319-A **não exige** o fim de "satisfazer interesse ou sentimento pessoal" (basta a omissão dolosa do dever legal de vigilância). A defesa deve verificar o **dolo** (conhecimento do acesso + inércia voluntária) e afastar responsabilidade **objetiva** por resultado (o aparelho encontrado não gera, por si, o crime do diretor).

### Art. 320 — Condescendência criminosa

- **Núcleo:** deixar de responsabilizar (ou de comunicar) subordinado infrator **por INDULGÊNCIA**.
- **Elemento subjetivo especial:** a **indulgência** (tolerância, complacência, "passar a mão na cabeça"). **Se a omissão decorre de negligência, medo, dúvida sobre a infração, ou avaliação equivocada — não há condescendência criminosa** (falta a indulgência dolosa). É **subsidiário**: se a tolerância visava proveito ou móvel pessoal, pode migrar para prevaricação/corrupção; se foi mera desídia, é falta administrativa.
- Pena ínfima (15 dias a 1 mês, ou multa) → **crime de menor potencial ofensivo** (competência do JECRIM; cabíveis transação penal e, se for o caso, ANPP — ver skill `anpp`).

---

## O móvel do ataque: penas baixas → institutos despenalizadores

Todos os três tipos têm **penas baixas** — o que abre, quase sempre, portas processuais que a defesa deve mapear **antes** de discutir mérito:

- **Art. 319 e 319-A** (máximo de 1 ano): **infração de menor potencial ofensivo** → **JECRIM** (Lei 9.099/95), cabível **transação penal** e **suspensão condicional do processo** (pena mínima de 3 meses).
- **Art. 320** (máximo de 1 mês): menor potencial ofensivo, transação penal.
- **ANPP (art. 28-A do CPP):** para o 319/319-A, pena mínima inferior a 4 anos → **cabível acordo de não persecução penal**, se preenchidos os requisitos (confissão, não reincidência, etc.) — avaliar com a skill `anpp`.
- **Prescrição:** penas máximas baixas → **prazos prescricionais curtos** (art. 109 CP). No 319/319-A (máx. 1 ano) a prescrição em abstrato pode ser de **poucos anos**; no 320 (máx. 1 mês), **ainda menor**. **Sempre calcular prescrição da pretensão punitiva** (em abstrato e, após sentença, em concreto/retroativa) — muitas denúncias por prevaricação já nascem ou morrem prescritas. Método e cálculo determinístico: use a skill `calculadora-prescricao` (aponte o marco inicial — consumação/último ato — e os interruptivos do art. 117 CP). **[Se a calculadora-prescricao não existir: calculadora a implementar com testes.]**

> **Regra de ouro processual:** antes de redigir a defesa de mérito, **cheque prescrição e cabimento de ANPP/transação/suspensão**. Em prevaricação, a extinção da punibilidade pela prescrição ou a solução consensual costuma ser o caminho mais eficiente — e o menos arriscado para o cliente.

---

## Teses típicas de defesa (por eixo)

### Eixo 1 — Atipia por ausência do elemento subjetivo especial (a mais forte)

- **Não há "interesse ou sentimento pessoal" provado.** A denúncia afirma o móvel de forma **genérica/presumida** ("agiu para favorecer") sem lastro probatório. Sem prova do fim especial, a conduta é atípica (não há prevaricação culposa).
- **O móvel alegado é, na verdade, cumprimento de outro dever, dúvida jurídica ou interpretação divergente da lei** — não interesse pessoal. Atuar segundo entendimento jurídico defensável **não** é "praticar contra disposição expressa de lei" com fim pessoal.
- **Comodismo/negligência/sobrecarga não são sentimento pessoal.** Retardo por acúmulo de trabalho, falta de estrutura, férias, licença, fila de processos = **falta funcional**, não crime.

### Eixo 2 — Atipia objetiva

- **O ato não era "de ofício" do acusado** (não integra sua competência funcional) → falta o objeto do tipo.
- **Ausência de "disposição expressa de lei" violada** na modalidade de ação: se a norma é aberta, interpretável, ou o ato estava no espaço de **discricionariedade administrativa**, não há tipicidade. **Ato discricionário exercido dentro da margem legal ≠ prevaricação.**
- **Inexistência de dever jurídico de agir** na modalidade omissiva (não havia prazo/obrigação específica descumprida).

### Eixo 3 — Erro e ausência de dolo

- **Erro de tipo (art. 20 CP):** o agente não sabia que retardava/omitia ato devido, ou desconhecia a circunstância fática (ex.: não tinha ciência do acesso ao celular, no 319-A).
- **Erro de proibição (art. 21 CP):** convicção escusável de que agia conforme o direito (interpretação da norma).
- **Ausência de dolo:** a conduta foi **culposa** (esquecimento, desorganização) — e **não há prevaricação/condescendência culposa**.

### Eixo 4 — Fronteiras e desclassificação (evitar tipo mais grave; ou rebaixar para não penal)

- **Distinção de peculato (312) e corrupção passiva (317):** prevaricação **não tem proveito econômico nem mercadejo da função**. Se a acusação não prova vantagem/pagamento, **não migra** para corrupção — e, sem interesse pessoal, também não fica na prevaricação (dupla atipia). Usar a ausência de proveito como argumento **a favor** (afasta o crime mais grave) e, na sequência, exigir prova do móvel pessoal (afasta a própria prevaricação).
- **Distinção de advocacia administrativa (321):** patrocinar interesse privado perante a Administração é outro tipo — não confundir com prevaricação.
- **Rebaixamento para ilícito administrativo/improbidade:** a conduta, se existente, é **falta funcional** (PAD) ou **improbidade** (Lei 8.429/92, art. 11, red. Lei 14.230/2021 — que passou a exigir **dolo específico**), **não crime**. Princípio da **subsidiariedade / intervenção mínima** do Direito Penal.
- **Condescendência (320) vs. prevaricação (319):** se a tolerância com o subordinado foi por **indulgência pura** (e não por móvel pessoal próprio), o tipo correto é o 320 (pena muito menor) — desclassificação **in bonam partem**.

### Eixo 5 — Nulidades e princípios processuais próprios

- **Inépcia da denúncia (art. 41 CPP):** a peça acusatória **precisa descrever concretamente** o "interesse ou sentimento pessoal" (o fim especial de agir) e o ato de ofício específico. **Denúncia que apenas afirma o móvel, sem narrar os fatos que o revelam, é inepta** (não permite o exercício da defesa). Tese de rejeição/absolvição sumária.
- **Falta de justa causa:** ausência de lastro probatório mínimo do dolo específico.
- **Prescrição** (ver seção própria) e **competência** (JECRIM, se menor potencial ofensivo).

---

## Teses × Contra-teses (mapa rápido)

| Tese da defesa | Contra-tese usual da acusação | Como sustentar a defesa |
|---|---|---|
| Ausência de "interesse/sentimento pessoal" | O móvel se infere da própria conduta ilegal | Exigir prova **autônoma** do móvel; ilegalidade objetiva não presume dolo específico; não há prevaricação culposa |
| Foi negligência/comodismo/sobrecarga | Comodismo é "sentimento pessoal" | Sustentar que comodismo genérico é falta funcional, não móvel individualizado — subsidiariedade penal |
| Ato discricionário dentro da margem legal | Praticou "contra disposição expressa de lei" | Demonstrar a margem de discricionariedade / interpretação defensável; não há norma expressa violada |
| Denúncia inepta (art. 41 CPP) | A narrativa é suficiente | Apontar a ausência de descrição concreta do fim especial e do ato de ofício |
| É improbidade/falta administrativa, não crime | Há dolo penal | Intervenção mínima; Lei 14.230/2021 exige dolo específico; bis in idem/duplicidade de esferas |
| No 319-A, não havia dolo/ciência do acesso | Responsabilidade do diretor pelo resultado | Afastar responsabilidade objetiva; exigir prova de ciência + inércia voluntária |
| Condescendência (320), não prevaricação (319) | Houve móvel pessoal → 319 | Provar indulgência pura (menor pena) → desclassificação in bonam partem |
| Prescrição da pretensão punitiva | — | Calcular art. 109/117 CP; penas baixas → prazos curtos |

---

## Dispositivos e enunciados sob o Citation Gate

**Cite com certeza (lei e conceitos notórios):**
- **CP, arts. 319, 319-A, 320** — os tipos.
- **CP, art. 327 e §§** — conceito de funcionário público (elemento normativo do tipo).
- **CP, arts. 20 e 21** — erro de tipo e erro de proibição.
- **CP, arts. 109 e 117** — prescrição (prazos e marcos interruptivos).
- **CPP, art. 41** — requisitos da denúncia (base da inépcia); **art. 395** (rejeição); **art. 397** (absolvição sumária); **art. 28-A** (ANPP).
- **Lei 9.099/95** — juizados especiais criminais (menor potencial ofensivo), transação penal, suspensão condicional do processo.
- **Lei 8.429/92, art. 11 (red. Lei 14.230/2021)** — improbidade com dolo específico (fronteira administrativa).

**NÃO cite de memória — marque [NÃO VERIFICADO] e confira via `jurisprudencia-stj-stf`:**
- Qualquer **número específico de HC, REsp, RE, AgRg, informativo ou tema** sobre: (i) exigência/dispensa do fim especial de agir no **art. 319-A**; (ii) alcance subjetivo do 319-A (diretor × agente penitenciário); (iii) inépcia de denúncia por prevaricação sem descrição do móvel; (iv) distinção prevaricação × improbidade após a Lei 14.230/2021; (v) prescrição em concreto/retroativa nos crimes funcionais. **Prefira ensinar a TESE e o dispositivo a arriscar um número de acórdão.**
- **[NÃO VERIFICADO]** eventual entendimento sumular específico — não há súmula notória diretamente sobre o elemento subjetivo da prevaricação; **não invente enunciado**.

> **Regra anti-alucinação:** na dúvida, **omitir vence inventar**. Um dispositivo de lei correto + a tese bem construída valem mais do que um número de acórdão inventado (há sanções reais por jurisprudência fabricada por IA).

---

## Estrutura da peça de defesa (resposta à acusação / alegações finais)

Roteiro-esqueleto (adaptar à fase processual — art. 396-A CPP para resposta à acusação; art. 403/§3º para memoriais):

```
I — SÍNTESE DA IMPUTAÇÃO
   Delimitar o tipo imputado (319 / 319-A / 320), a conduta e, sobretudo,
   COMO a denúncia descreveu (ou não) o "interesse ou sentimento pessoal".

II — PRELIMINARES
   a) Prescrição da pretensão punitiva (cálculo art. 109/117 — quase sempre a
      primeira tese a testar; penas baixas).
   b) Inépcia da denúncia (art. 41 CPP) — ausência de descrição concreta do
      fim especial de agir e do ato de ofício → rejeição (art. 395) ou
      absolvição sumária (art. 397).
   c) Incompetência / cabimento de JECRIM, transação, suspensão, ANPP.

III — MÉRITO — ATIPIA
   a) Ausência do elemento subjetivo especial (interesse/sentimento pessoal)
      — a tese-mãe. Não há prevaricação culposa.
   b) Atipia objetiva (ato não era de ofício; ausência de norma expressa
      violada; discricionariedade administrativa).
   c) Ausência de dolo / erro de tipo ou de proibição (arts. 20 e 21 CP).
   d) Subsidiariedade penal: o fato é, no máximo, falta administrativa/
      improbidade (Lei 8.429/92, art. 11, red. 14.230/2021), não crime.

IV — DESCLASSIFICAÇÃO SUBSIDIÁRIA (se não acolhida a atipia)
   Do 319 para o 320 (indulgência pura, pena menor), ou afastamento de
   qualquer proveito econômico (não é peculato/corrupção).

V — PROVA
   Requerer diligências que demonstrem a ausência de móvel pessoal (contexto
   da conduta, sobrecarga, interpretação jurídica adotada, ausência de
   relação com o beneficiado/prejudicado).

VI — PEDIDOS
   Rejeição da denúncia / absolvição sumária / absolvição (art. 386, III ou
   VII, CPP — fato atípico ou ausência de prova do dolo específico) /
   desclassificação subsidiária / reconhecimento da prescrição.
```

> **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).

---

## Erros comuns / checklist da defesa

- [ ] **Móvel pessoal:** a denúncia **descreve concretamente** o "interesse ou sentimento pessoal", ou apenas o **presume**? (Se presume → inépcia + atipia.)
- [ ] **Culpa × dolo:** ficou claro que a conduta foi **negligência/comodismo/sobrecarga** (atípico), e não dolo específico?
- [ ] **Ato de ofício:** o ato realmente integrava a **competência funcional** do acusado?
- [ ] **"Contra disposição expressa de lei":** havia norma **expressa** violada, ou a conduta estava na **discricionariedade** / interpretação defensável?
- [ ] **Prescrição:** calculada em abstrato (e, se houver sentença, em concreto/retroativa)? Penas baixas → **testar primeiro**. (`calculadora-prescricao`)
- [ ] **Institutos despenalizadores:** JECRIM, transação, suspensão condicional do processo, ANPP mapeados? (`anpp`)
- [ ] **319-A:** provou-se **ciência + inércia voluntária** do diretor/agente, ou é responsabilidade objetiva pelo aparelho encontrado?
- [ ] **320:** a omissão foi por **indulgência** (dolosa) ou por negligência/medo/dúvida (atípica)?
- [ ] **Fronteira:** afastou-se peculato/corrupção (ausência de proveito) **sem** com isso admitir a prevaricação (exigir o móvel pessoal)?
- [ ] **Subsidiariedade:** sustentou-se o rebaixamento para **falta administrativa/improbidade** (não penal)?
- [ ] **Citações:** todo dispositivo/tese/acórdão passou pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`? Números incertos marcados **[NÃO VERIFICADO]**?

**Anti-padrões (evitar):**
- Discutir mérito **antes** de testar prescrição e cabimento de ANPP/transação (perde a via mais econômica).
- Aceitar que "a ilegalidade do ato revela o móvel pessoal" — **não revela**; o dolo específico exige prova autônoma.
- Confundir prevaricação com **crime de resultado** (basta a conduta com o fim especial; e a ausência do fim especial é atipia, não mero indício).
- Tratar 319-A como responsabilidade objetiva do diretor (exigir dolo/ciência).
- Migrar para tese de corrupção/peculato ao negar proveito econômico sem, na sequência, atacar o próprio elemento subjetivo da prevaricação.
- Citar número de acórdão/informativo "de memória" — passar pelo Citation Gate.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pelas teses e pelas citações é sempre do **advogado responsável** (CED/OAB, art. 2º; **Provimento 205/2021** para atuação e comunicação). Nenhuma tese aqui substitui o exame do caso concreto e dos autos.
- **Skill de DEFESA (polo defensivo).** O foco é a defesa do funcionário público acusado (arts. 319, 319-A, 320). Não é peça acusatória. Se o **chefe-roteador** identificar que a instituição atua no **polo acusatório** (MP/assistente de acusação) neste caso, **conferir o polo** e redirecionar para a skill/roteiro adequado — a lógica aqui (exigência de prova do fim especial de agir) serve à acusação apenas como *checklist do que precisa comprovar*, não como modelo de denúncia.
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese citada de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de protocolar (há sanções reais por jurisprudência inventada por IA).
- **Sigilo e LGPD:** dados do assistido nunca em repositório público.

## Lembretes finais

- **A tese-mãe é o elemento subjetivo especial:** sem "interesse ou sentimento pessoal" **provado**, não há prevaricação (não existe forma culposa).
- **Comodismo/negligência/sobrecarga = falta funcional**, não crime.
- **Penas baixas → teste primeiro** prescrição e institutos despenalizadores (JECRIM, transação, suspensão, ANPP).
- **319-A não é responsabilidade objetiva:** exigir dolo/ciência do acesso ao aparelho.
- **320 (condescendência) exige indulgência dolosa** — negligência/dúvida/medo é atípico; pena ínfima (menor potencial ofensivo).
- **Subsidiariedade penal:** o fato costuma ser improbidade/falta administrativa (Lei 14.230/2021, dolo específico), não crime.
- **Sem proveito econômico** afasta peculato/corrupção — mas isso **não** confirma a prevaricação; ataque também o móvel pessoal.
- **Conferir vigência** dos arts. 319, 319-A, 320 e 327 CP e passar toda citação pelo gate antes de peticionar.
