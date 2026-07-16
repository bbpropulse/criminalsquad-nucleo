---
name: defesa-crimes-fraude-execucao-processos-343-347
description: >-
  Use ao defender o PARTICULAR (lado ativo) em corrupção ativa (CP 333), tráfico de influência (CP
  332) e exploração de prestígio (CP 357) — o corruptor, o vendedor de influência e o vendedor de
  prestígio junto a agentes da Justiça. Banco de teses de atipicidade (ato de ofício determinado; a
  pretexto de influir; utilidade indevida × cortesia), distinção entre os três tipos e com corrupção
  passiva (317) e concussão (316)… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-administracao-publica, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-fraude-execucao-processos-343-347"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-fraude-execucao-processos-343-347", "defesa crimes", "execucao processos"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa do particular em Corrupção Ativa, Tráfico de Influência e Exploração de Prestígio (CP arts. 332, 333 e 357)

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

Esta skill orienta a **defesa técnica** do **particular** (o lado **ativo**) em três tipos vizinhos: **corrupção ativa (art. 333)**, **tráfico de influência (art. 332)** e **exploração de prestígio (art. 357)**. O fio condutor é o **corruptor / vendedor de influência** — quem oferece a vantagem ao funcionário, ou quem **mercadeja influência** ("a pretexto de influir") sobre agentes públicos ou sobre agentes da Justiça. Cobre a estrutura dos tipos, o banco de teses de atipicidade, as **distinções** entre eles (e com a corrupção passiva 317 e a concussão 316) e a estrutura forense da defesa.

> **Recorte desta skill (leia antes de acionar):**
> - **Corrupção passiva × ativa como par (317/333)** já tem skill própria (`defesa-corrupcao-passiva-ativa`) — o *binômio* funcionário/particular. Aqui o foco é **o particular corruptor** e, sobretudo, os **tipos autônomos** que aquela não desenvolve: **tráfico de influência (332)** e **exploração de prestígio (357)**.
> - **Crimes contra a administração da Justiça** (falso testemunho 342, corrupção de testemunha 343, coação no curso do processo 344, fraude processual 347, denunciação caluniosa 339) têm skill própria: `defesa-crimes-administracao-justica`. **Não** são objeto desta skill — apesar do slug histórico citar "343-347", **o conteúdo correto é 332-333-357** (o particular que corrompe / vende influência).
> - **Polo acusatório** (denúncia/memoriais do MP) → `acusacao-crimes-administracao-publica`.

> **Lição central:** antes de discutir dolo, **feche o tipo**. Cada artigo tem elementares rígidas — no **333** exige-se **ato de ofício determinado** e a **finalidade de corromper**; no **332** e no **357** o núcleo é agir **"a pretexto de influir"** (o agente **não** compra o ato do funcionário, **vende a própria influência** — pode até ser *fumaça*, influência inexistente). A tese mais forte quase sempre é a **atipicidade objetiva**: cortesia/presente de bagatela não é vantagem indevida; gestão/consultoria/*lobby* lícito não é tráfico de influência; oferta genérica sem ato de ofício determinado esvazia o 333. Só depois se discute autoria e dolo.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. **332** (tráfico de influência — redação da **Lei 9.127/1995**), **333** (corrupção ativa) e **357** (exploração de prestígio) do CP e das respectivas causas de aumento. Passe **toda** súmula, tese ou acórdão pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de fundamentar. Na dúvida, **omitir vence inventar**.

---

## Base legal (mapa dos três tipos)

| Art. | Crime | Onde está no CP | Núcleo (verbos) | O que o agente compra/vende |
|------|-------|-----------------|-----------------|-----------------------------|
| **333** | Corrupção ativa | Crimes contra a Adm. Pública **praticados por particular** (Cap. II) | **oferecer** ou **prometer** vantagem indevida a funcionário público | compra o **ato de ofício** (praticar, omitir ou retardar) |
| **332** | Tráfico de influência | Crimes contra a Adm. Pública **praticados por particular** (Cap. II) | **solicitar, exigir, cobrar** ou **obter** vantagem/promessa **a pretexto de influir** em ato de funcionário | vende a **própria influência** sobre o funcionário (real ou fictícia) |
| **357** | Exploração de prestígio | Crimes contra a **Administração da Justiça** (Cap. III) | **solicitar** ou **receber** dinheiro/utilidade **a pretexto de influir** em **juiz, jurado, MP, funcionário de justiça, perito, tradutor, intérprete ou testemunha** | vende **prestígio/influência** junto a **agentes da Justiça** |

- **Bem jurídico:** no 332/333, a **moralidade e a probidade da Administração Pública**; no 357, a **regular administração da Justiça** (por isso está em outro capítulo, embora a lógica de "venda de influência" seja a mesma do 332, aqui **especializada** para o ambiente processual/judiciário).
- **Consumação (regra):** são **crimes formais / de mera conduta**. O **333** consuma-se com a **oferta ou promessa** — não exige que o funcionário aceite nem que o ato seja praticado. O **332** e o **357** consumam-se com **solicitar/exigir/cobrar/obter** (332) ou **solicitar/receber** (357) — **não exige** que a influência exista de fato nem que o ato do agente público ocorra.
- **Sujeito ativo:** **qualquer pessoa** (o particular; no 333, o *extraneus* que corrompe). O funcionário público pode responder pelo **passivo** (317) e não pelo ativo — daí a importância de fixar **quem** ofereceu e **quem** recebeu.

---

## Roteiro de defesa por tipo penal

### Art. 333 — Corrupção ativa (o corruptor)

**Núcleo:** *oferecer* ou *prometer* vantagem indevida a funcionário público **para determiná-lo a praticar, omitir ou retardar ato de ofício**.

**Elementares para atacar:**
- **Ato de ofício determinado e identificável.** O tipo exige que a oferta se dirija a um **ato de ofício concreto**, inserido nas atribuições do funcionário. **Oferta genérica**, "para ficar bem", captação difusa de simpatia ou pagamento sem vínculo com ato específico tende à **atipicidade** (tese central: falta o *quê* — o ato de ofício visado).
- **Vantagem indevida × cortesia/presente de bagatela.** Brinde social, cortesia usual, hospitalidade módica **sem contrapartida funcional** não é "vantagem indevida". Aferir **valor, contexto e nexo** com um ato.
- **Iniciativa e bilateralidade aparente.** Se o funcionário **exigiu/impôs** a vantagem (constrangimento), o particular pode ser **vítima de concussão (316)**, não autor de corrupção ativa — o pagamento **cedendo a exigência** não configura, em regra, o 333. Delimitar quem teve a **iniciativa**.
- **Ausência de dolo de corromper.** Pagamento por **erro**, coação, ou crença de estar quitando taxa/obrigação legítima afasta o dolo específico de **determinar** o ato.

**Causa de aumento (parágrafo único):** confira a redação — aumento (em regra, **1/3**) se, **em razão da vantagem ou promessa**, o funcionário **retarda ou omite** ato de ofício ou o **pratica infringindo dever funcional**. Atacar o **nexo** entre a vantagem e o efetivo desvio funcional.

**Teses típicas (defesa):**
1. Atipicidade por **ausência de ato de ofício determinado** (oferta genérica).
2. **Cortesia / bagatela** — a utilidade não é "vantagem indevida".
3. **Concussão (316)** — o funcionário exigiu; o particular cedeu (é vítima, não corruptor).
4. **Ausência de dolo** de corromper (erro, coação, obrigação legítima).
5. Afastamento da **causa de aumento** — sem nexo vantagem↔desvio do ato.
6. **Prova frágil** da oferta/promessa (palavra isolada, sem corroboração).

### Art. 332 — Tráfico de influência (o vendedor de influência)

**Núcleo:** *solicitar, exigir, cobrar* ou *obter*, para si ou para outrem, **vantagem ou promessa de vantagem**, **a pretexto de influir** em ato praticado por funcionário público no exercício da função (redação da **Lei 9.127/1995**).

- **Diferença essencial para o 333:** aqui **não se corrompe o funcionário** — vende-se ao **terceiro interessado** a **própria influência** sobre o funcionário. A influência pode ser **real ou inexistente** ("venda de fumaça"): o tipo se consuma com o **mercadejar** do pretexto, ainda que o agente **não tenha** o poder que alega.
- **Elementares para atacar:**
  - **"A pretexto de influir" ausente.** Se a contratação foi de **serviço lícito de fato** — consultoria, assessoria, advocacia, *lobby* regular, intermediação legítima — sem a **promessa de influência sobre agente público** para dobrar um ato, o fato é **atípico**. A fronteira é: **vender conhecimento/trabalho** (lícito) × **vender influência sobre a decisão pública** (típico).
  - **Ausência de vínculo com ato de funcionário.** A "influência" prometida deve mirar **ato de funcionário público no exercício da função** — influência sobre particular ou sobre esfera não pública não preenche o tipo.
  - **Dolo específico.** É preciso a vontade de **explorar o pretexto de influência**; a mera jactância social, gabolice ou promessa vazia sem intenção de obter vantagem por esse pretexto pode ser atípica.
- **Causa de aumento (parágrafo único):** confira a redação — pena aumentada (em regra, **de metade**) se o agente **alega ou insinua** que a vantagem é **também destinada ao funcionário** (aproxima-se da corrupção, mas o tipo segue sendo tráfico de influência do lado do vendedor).
- **Teses típicas (defesa):** (i) **serviço lícito** (consultoria/advocacia/lobby) — não houve venda de influência sobre ato público; (ii) **ausência do "pretexto de influir"** — o pagamento tinha causa legítima; (iii) atipicidade por **influência dirigida a esfera não pública**; (iv) afastamento da **majorante** (não houve alegação de destino ao funcionário); (v) **distinção do 333** — não houve oferta ao funcionário.

### Art. 357 — Exploração de prestígio (venda de prestígio junto à Justiça)

**Núcleo:** *solicitar* ou *receber* dinheiro ou qualquer outra utilidade, **a pretexto de influir** em **juiz, jurado, órgão do Ministério Público, funcionário de justiça, perito, tradutor, intérprete ou testemunha**.

- **Especialização em relação ao 332:** é o "tráfico de influência" **especializado para o ambiente da Justiça** — por isso está no **Capítulo III** (crimes contra a administração da Justiça). O rol de agentes é **taxativo** (juiz, jurado, MP, funcionário de justiça, perito, tradutor, intérprete, testemunha): se o "pretexto de influir" mira **outro agente** (ex.: servidor administrativo comum, autoridade não listada), o enquadramento tende ao **332**, não ao 357 — **fixar o destinatário do pretexto** é tese de reclassificação.
- **Elementares para atacar:**
  - **Objeto e destinatário.** Verificar se a utilidade foi solicitada/recebida **a pretexto de influir** especificamente em **um dos agentes listados** e no **contexto de um processo/atuação da Justiça**.
  - **Serviço advocatício legítimo × venda de prestígio.** Honorários por **trabalho técnico** (defesa, parecer, sustentação) **não** são exploração de prestígio; a linha é a **promessa de influenciar** a decisão do agente da Justiça por prestígio/relacionamento, não pelo mérito.
  - **"Fumaça".** Como no 332, a influência prometida pode ser **inexistente**; o crime está no **mercadejar do pretexto** — mas a defesa deve checar se **houve** efetivamente a **venda do pretexto** ou apenas **cobrança de honorário/serviço**.
- **Causa de aumento (parágrafo único):** confira a redação — agravamento se o agente **alega ou insinua** que o dinheiro/utilidade se destina **também** a qualquer das pessoas referidas (juiz, jurado etc.). Atacar a prova dessa alegação/insinuação.
- **Teses típicas (defesa):** (i) **honorário/serviço técnico legítimo** — não houve venda de prestígio; (ii) **destinatário fora do rol** → reclassificar para 332 (ou atipicidade); (iii) ausência de **pretexto de influir** demonstrado; (iv) afastamento da **majorante** (não houve alegação de destino ao agente); (v) **prova frágil** (palavra do interessado sem corroboração).

---

## Distinções que decidem a capitulação

| Confronto | Chave de distinção | Efeito prático da tese |
|---|---|---|
| **333 (corrupção ativa) × 332 (tráfico de influência)** | No 333 a vantagem vai **ao funcionário** (compra do ato); no 332 a vantagem fica **com o intermediário** (venda da influência) | Se o cliente **pagou ao intermediário** e nada foi ao funcionário, **não é 333** |
| **332 × 357** | 332 mira **funcionário público em geral**; 357 mira **agentes da Justiça** (rol taxativo) | Destinatário fora do rol da Justiça → **332**, não 357 |
| **333 × 316 (concussão)** | Na concussão o **funcionário exige**; na corrupção ativa o **particular oferece** | Se houve **exigência** do funcionário, o particular é **vítima**, não corruptor |
| **332/357 × serviço lícito** | Vender **influência sobre a decisão pública** (típico) × vender **trabalho/conhecimento** (lícito: advocacia, consultoria, lobby regular) | Contrato de serviço real e lícito → **atipicidade** |
| **333 × 337-B (corrupção ativa em transação comercial internacional)** | Funcionário público **estrangeiro** e transação internacional deslocam para o **337-B** | Conferir a **qualidade do funcionário** e o contexto internacional |

> **Regra de ouro da defesa:** identifique **para quem** a vantagem se destinava e **o que** foi prometido. "Vantagem ao funcionário + ato de ofício determinado" = 333. "Vantagem ao intermediário + pretexto de influir" = 332 (ou 357, se o alvo é da Justiça). "Exigência partiu do funcionário" = concussão, e o particular é vítima. "Contrato de serviço lícito real" = atipicidade.

---

## Teses transversais e contra-teses

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Falta **ato de ofício determinado** (333) | Elementar do tipo; oferta genérica é atípica | Ato identificável pelo contexto; basta a finalidade |
| Utilidade é **cortesia/bagatela**, não vantagem indevida | Adequação social; ausência de nexo funcional | Valor/contexto revelam contrapartida |
| Particular é **vítima de concussão (316)**, não corruptor | Iniciativa/exigência do funcionário | Houve oferta espontânea, não cessão a exigência |
| **332/357** exigem "**a pretexto de influir**"; houve serviço lícito | Fronteira advocacia/consultoria/lobby × venda de influência | O "serviço" era fachada para mercadejar influência |
| Alvo do pretexto **não está no rol do 357** | Rol taxativo do art. 357 | Enquadra-se por analogia/contexto (rechaçar analogia in malam partem) |
| Afastar **majorante** (alegação de destino ao funcionário/agente) | § único de 332/357/333 | A prova indica a insinuação de repasse |
| **Prova frágil** (palavra isolada do interessado) | In dubio pro reo; ausência de corroboração | Coerência do relato + elementos indiciários |

> **Estratégia forense:** por serem crimes **formais**, a acusação costuma sustentar-se em **oferta/solicitação** documentada frágil (áudio, mensagem, palavra do interessado). A defesa vive de **(a) atipicidade objetiva** (falta ato de ofício / falta "pretexto de influir" / é serviço lícito), **(b) reclassificação** (333↔332↔357↔316) e **(c) fragilidade probatória** com pedido de **absolvição** ou, na fase inicial, **HC de trancamento** por atipicidade/inépcia (justa causa ausente).

---

## Prescrição, competência e institutos despenalizadores

- **Penas e benefícios:** conferir na **redação vigente** as penas de cada tipo e rodar a **prescrição** pela skill `calculadora-prescricao` (método em `execucao-prescricao`). Checar **ANPP** (art. 28-A CPP), **suspensão condicional do processo** (art. 89 da Lei 9.099/95) e **acordo/colaboração** quando o mínimo e o rito permitirem — o enquadramento do benefício depende da **pena mínima cominada** de cada artigo. **[NÃO VERIFICADO]** os patamares atuais de pena — confira o texto legal antes de afirmar cabimento.
- **Competência:** se a corrupção/tráfico atinge **funcionário ou interesse federal** (ou o 357 se dá em **processo de competência federal**), a competência desloca-se para a **Justiça Federal**. Havendo **foro por prerrogativa** do funcionário envolvido, avaliar o impacto sobre a persecução. Conferir caso a caso.
- **Concurso e continuidade:** ofertas/solicitações reiteradas podem gerar **concurso** ou **continuidade delitiva** — atacar o número de condutas e a unidade de desígnio para reduzir a resposta penal.

---

## Súmulas e precedentes (sob o Citation Gate)

> **Regra do gate:** dispositivos de lei podem ser citados com certeza; **qualquer número de HC/REsp/RE, súmula, informativo ou tema** entra marcado **[NÃO VERIFICADO]** e só vai à peça após conferência em `jurisprudencia-stj-stf`. Prefira ensinar a **tese e o dispositivo** a arriscar um acórdão.

- **Corrupção ativa** — art. 333 e parágrafo único, CP (dispositivo — citável).
- **Tráfico de influência** — art. 332 e parágrafo único, CP, com a redação da **Lei 9.127/1995** (dispositivo — citável).
- **Exploração de prestígio** — art. 357 e parágrafo único, CP (dispositivo — citável).
- **Concussão** (fronteira: funcionário exige) — art. 316, CP (dispositivo — citável).
- **Distinção corrupção ativa × tráfico de influência × exploração de prestígio na jurisprudência do STF/STJ** — **[NÃO VERIFICADO]** — conferir número e teor antes de citar.
- **Atipicidade do "lobby lícito" / fronteira com o tráfico de influência** — orientação **[NÃO VERIFICADO]** — confira via `jurisprudencia-stj-stf`.
- **Súmula sobre exigência de ato de ofício determinado no art. 333** — **[NÃO VERIFICADO]** — não afirmar enunciado sem conferência.

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Aceitar **corrupção ativa (333)** quando a vantagem ficou **com o intermediário** e não foi ao funcionário — é **tráfico de influência (332)**.
- Confundir **332** com **357** sem checar o **destinatário do pretexto** — o 357 tem **rol taxativo** de agentes da Justiça.
- Capitular como **333** o pagamento feito **cedendo a exigência** do funcionário — pode ser **concussão (316)**, com o particular como **vítima**.
- Tratar **serviço lícito** (advocacia, consultoria, lobby regular) como **venda de influência** — sem o "**pretexto de influir**" sobre ato público, é atípico.
- Deixar passar a **ausência de ato de ofício determinado** no 333 — oferta genérica esvazia o tipo.
- Não atacar a **causa de aumento** (alegação/insinuação de destino ao funcionário/agente) quando a prova não a sustenta.
- Não rodar **prescrição** e **benefícios** (ANPP, sursis processual) conforme a pena mínima de cada tipo.
- Citar acórdão/informativo **de memória** — passar tudo pelo gate `jurisprudencia-stj-stf`.

**Checklist de defesa:**
- [ ] **Tipo corretamente fechado** — verbos (oferecer/prometer × solicitar/exigir/obter × solicitar/receber) e destinatário conferidos?
- [ ] No **333**, há **ato de ofício determinado** e **dolo de corromper**? A utilidade é **indevida** ou cortesia/bagatela?
- [ ] A vantagem foi **ao funcionário** (333) ou ficou **com o intermediário** (332/357)?
- [ ] No **332/357**, houve efetivamente "**a pretexto de influir**" ou era **serviço lícito**?
- [ ] No **357**, o alvo do pretexto está no **rol taxativo** (juiz, jurado, MP, funcionário de justiça, perito, tradutor, intérprete, testemunha)?
- [ ] Cabe **reclassificação** (333↔332↔357) ou **concussão (316)** com o cliente como **vítima**?
- [ ] A **causa de aumento** (alegação de destino ao funcionário/agente) está **provada**? Cabe afastá-la?
- [ ] **Prova** da oferta/solicitação é robusta ou **isolada** (palavra do interessado sem corroboração)?
- [ ] Cabível **HC de trancamento** por atipicidade/inépcia (ausência de justa causa)?
- [ ] **Prescrição** calculada e **benefícios** (ANPP/sursis/JECrim) verificados pela pena mínima?
- [ ] Redação **vigente** dos arts. 332 (Lei 9.127/1995), 333 e 357 conferida?
- [ ] **Citações verificadas** (`jurisprudencia-stj-stf`) e **revisão humana** do advogado responsável?

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à construção da tese e ao fechamento do tipo — **não** substitui o exame do caso concreto, dos autos e da prova pelo **advogado responsável** (CED/OAB, art. 2º; **Provimento 205/2021** quanto à publicidade). A tese peticionada é sempre "hipótese a confirmar".
- **Polo:** skill de **defesa** (particular/acusado — o corruptor / vendedor de influência). Se a atuação for do **polo acusatório** (MP/assistente), o roteador deve confirmar o polo e acionar `acusacao-crimes-administracao-publica` — aqui o enquadramento é o da defesa técnica.
- **Escopo e vizinhança:** para o **binômio 317/333** use `defesa-corrupcao-passiva-ativa`; para **crimes contra a administração da Justiça** (falso testemunho 342, corrupção de testemunha 343, coação 344, fraude processual 347, denunciação caluniosa 339) use `defesa-crimes-administracao-justica`. Esta skill trata **do particular corruptor e da venda de influência/prestígio (332-333-357)**.
- **Citação zero de memória:** nenhuma súmula, tese ou acórdão vai à peça sem passar por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA.
- **Vigência:** confirmar sempre o texto atual dos arts. 332, 333 e 357 do CP e das causas de aumento antes de fundamentar.

**Padrão de redação:** ao redigir a peça (resposta à acusação, memoriais, alegações finais, HC), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
