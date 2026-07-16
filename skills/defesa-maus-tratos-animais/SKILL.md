---
name: defesa-maus-tratos-animais
description: >-
  Use ao construir a DEFESA no crime de maus-tratos a animais — art. 32 da Lei 9.605/1998 (abuso,
  maus-tratos, ferir ou mutilar), inclusive a forma qualificada da Lei 14.064/2020 para cães e
  gatos: atipicidade por ausência de materialidade/perícia, dolo x mero descuido, limites do
  conceito de maus-tratos (manejo, abate, cultura, experimentação regulada), incidência restrita da
  qualificadora, competência (JECRIM x comum)… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, maus-tratos-animais, ambiental]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-maus-tratos-animais", "defesa maus", "tratos animais"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-maus-tratos-animais"]
---

# Maus-tratos a animais — Defesa (Lei 9.605/98, art. 32)

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

Esta skill orienta a **defesa técnica** no crime de **maus-tratos a animais**, tipificado no **art. 32 da Lei 9.605/1998** (Lei dos Crimes Ambientais). O bem jurídico é a **fauna** e o **sentimento coletivo de proteção animal**, com assento constitucional no **art. 225, §1º, VII, da CF** (vedação de práticas que submetam animais a crueldade). É crime que combina forte **carga emocional** — o que exige contenção argumentativa — com uma estrutura típica **aberta e dependente de perícia**, terreno fértil para a defesa técnica.

> **Lição central:** a defesa se decide em **dois eixos** — **materialidade pericial** e **elemento subjetivo**. O art. 32 é **doloso e sem forma culposa**; punir mero **descuido**, **negligência não intencional** ou **omissão de cuidado sem vontade de maltratar** é atipicidade. E o resultado (abuso, maus-tratos, lesão, mutilação) **exige demonstração técnica do nexo** entre a conduta imputada e o sofrimento do animal — laudo veterinário/pericial (auto de exame, necropsia) é regra, não formalidade. Antes de qualquer tese, pergunte: **há prova pericial da materialidade e do nexo?** e **há dolo, ou apenas descuido/atipicidade?**

> **Cautela de vigência (obrigatória antes de citar):** a **forma qualificada da Lei 14.064/2020** (reclusão de 2 a 5 anos, multa e proibição da guarda) é **recente** e tem **incidência restrita a cães e gatos**. Ela **entrou em vigor em 30/09/2020** e **não pode retroagir** para agravar fatos anteriores (irretroatividade da lei penal mais grave — CF, art. 5º, XL). Para fato anterior a essa data, ainda que a vítima seja cão ou gato, aplica-se a pena do **caput** (mais branda). Confira redação vigente, competência e todo precedente pela skill `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 32, caput, Lei 9.605/1998** — "Praticar ato de **abuso, maus-tratos, ferir ou mutilar** animais silvestres, domésticos ou domesticados, nativos ou exóticos." Pena: **detenção de 3 meses a 1 ano, e multa**. Verbos alternativos (crime de ação múltipla).
- **Art. 32, §1º** — incorre nas mesmas penas **quem realiza experiência dolorosa ou cruel em animal vivo, ainda que para fins didáticos ou científicos**, quando existirem recursos alternativos. Ponto de defesa: a **existência de alternativa** e a **regulação** da atividade.
- **Art. 32, §1º-A e §2º** (redação da **Lei 14.064/2020**) — **forma qualificada** quando se trata de **cão ou gato**: **reclusão de 2 (dois) a 5 (cinco) anos, multa e proibição da guarda**; causa de aumento **se resulta morte** do animal. Confirmar redação/numeração vigente via `jurisprudencia-stj-stf`.
- **CF, art. 225, §1º, VII** — fundamento constitucional da vedação à crueldade contra animais.
- **CP, art. 18, I, e art. 20** — só há crime doloso (não há previsão de modalidade culposa no art. 32); **erro de tipo** exclui o dolo.
- **Lei 9.605/1998, arts. 6º e 7º-8º** — critérios de dosimetria ambiental e **penas restritivas de direitos** (substituição privilegiada nos crimes ambientais).
- **Lei 9.099/1995** — **JECRIM**: o **caput** (pena máxima de 1 ano) é **infração de menor potencial ofensivo** → transação penal, composição, suspensão condicional do processo (art. 89). A **forma qualificada** (2 a 5 anos) **deixa de ser IMPO** e segue rito comum.
- **CPP, arts. 158 e 159** — exame de corpo de delito e perícia (materialidade); **arts. 158-A a 158-F** — cadeia de custódia dos vestígios.
- **Interface com o dano ambiental** e com legislação de proteção/manejo (abate regulado, experimentação, atividades rurais e culturais) — define os **limites do conceito** de maus-tratos.

## Anatomia do tipo — roteiro de subsunção (o que a defesa disseca)

Praticar, **(1) dolosamente**, ato de **(2) abuso, maus-tratos, ferir ou mutilar**, contra **(3) animal** (silvestre, doméstico ou domesticado, nativo ou exótico), produzindo **(4) sofrimento/lesão comprovados**:

1. **Conduta e verbos-núcleo:** *abusar*, *maltratar*, *ferir*, *mutilar*. Crime de **ação múltipla / conteúdo variável** — praticar mais de um verbo no mesmo contexto configura **crime único**. São **conceitos normativos abertos** que reclamam preenchimento pelo caso concreto e pela perícia.
2. **Elemento subjetivo: dolo.** Vontade livre e consciente de submeter o animal a abuso/sofrimento, ou dolo eventual (assunção do risco). **Não há modalidade culposa.** Negligência não intencional, acidente, desconhecimento razoável e mero descuido **não tipificam** (atipicidade / erro de tipo).
3. **Objeto material:** *animal* em sentido amplo. **Atenção:** a **qualificadora** só alcança **cão e gato**; para as demais espécies, mesmo com crueldade, incide apenas o **caput**.
4. **Resultado e nexo:** o abuso/maus-trato/lesão/mutilação deve estar **comprovado por perícia** e **ligado causalmente** à conduta imputada ao réu. Lesão preexistente, causa concorrente, autoria difusa ou sofrimento não demonstrado tecnicamente abrem a atipicidade por ausência de materialidade.

**Método:** teste cada elemento em separado. A ausência **de qualquer um** — dolo, materialidade pericial, nexo, enquadramento da espécie na qualificadora — leva à atipicidade, à desqualificação (do §2º para o caput) ou à absolvição por insuficiência de prova.

## Os dois pilares da defesa

### Pilar 1 — Materialidade e perícia (nexo entre conduta e sofrimento)

- Crime que **deixa vestígios** exige, em regra, **exame de corpo de delito** (CPP, art. 158): laudo veterinário/pericial, necropsia em caso de morte, exame do animal vivo. Ausência ou fragilidade do laudo → **materialidade não demonstrada**.
- **Nexo causal:** o laudo precisa vincular a lesão/sofrimento à **conduta do acusado**, e não a causa preexistente, doença, acidente, ação de terceiro ou fator ambiental. Cobrar da acusação a **individualização** da conduta e do agente (especialmente em contextos coletivos — canis, sítios, feiras).
- **Cadeia de custódia** (CPP, arts. 158-A a 158-F): coleta, preservação e rastreabilidade dos vestígios (fotos, amostras, o próprio animal apreendido). Quebra ou lacuna contamina a prova.
- **Prova puramente testemunhal/emocional** não supre a materialidade técnica; fotos e vídeos sem contexto, datação e cadeia de custódia têm valor limitado.

### Pilar 2 — Dolo x descuido (a fronteira da atipicidade subjetiva)

- **Sem dolo, não há crime.** Distinguir **maus-tratos intencionais** de **falha de cuidado não intencional**: um animal em más condições por **dificuldade econômica**, doença não percebida, orientação técnica equivocada ou evento fortuito não revela, por si, vontade de maltratar.
- **Dolo eventual** exige demonstração de que o agente **assumiu o risco** do sofrimento — não se presume da mera precariedade das condições.
- **Erro de tipo** (CP, art. 20): agente que ignora circunstância elementar (ex.: desconhecia a dor causada por prática que reputava lícita/veterinária) age sem dolo.

## Limites do conceito de maus-tratos (condutas que a defesa sustenta como atípicas ou justificadas)

O conceito é **aberto**, mas **não ilimitado**. Não é todo manejo ou incômodo ao animal que configura crime. A defesa delimita a **fronteira do penalmente relevante**:

- **Abate e manejo regulados** — abate para consumo, controle sanitário e manejo pecuário conforme normas técnicas não são, em regra, "crueldade" típica.
- **Atividades rurais e adestramento lícito** — contenção, transporte e adestramento dentro de parâmetros aceitos.
- **Experimentação científica/didática regulada** (§1º) — a tipicidade depende da **existência de método alternativo** e do descumprimento da regulação (Lei 11.794/2008 — Lei Arouca, **conferir** aplicação); atividade autorizada e sem alternativa disponível afasta o tipo.
- **Manifestações culturais** — tema **constitucionalmente sensível e controvertido** (a CF veda a crueldade; há debate sobre práticas culturais). **Não sustentar** licitude cultural sem checar a jurisprudência atual do STF via `jurisprudencia-stj-stf` — **[NÃO VERIFICADO]**.
- **Estado de necessidade / exercício regular de direito (CP, art. 23)** — sacrifício humanitário indicado por veterinário, defesa contra ataque, contenção necessária.

> Cada uma dessas hipóteses é **argumento a testar contra o caso concreto e a prova**, não escudo automático. O eixo continua sendo **dolo** e **materialidade**.

## A qualificadora da Lei 14.064/2020 (cães e gatos) e o direito intertemporal

- **Incidência restrita:** a pena de **reclusão de 2 a 5 anos** só alcança **cão ou gato**. Para **qualquer outra espécie**, mesmo diante de crueldade grave, a capitulação é o **caput** (detenção de 3 meses a 1 ano). Tese de **desqualificação** quando a denúncia aplica a forma grave a espécie diversa.
- **Irretroatividade (CF, art. 5º, XL; CP, art. 2º):** para **fatos anteriores a 30/09/2020**, ainda que a vítima seja cão/gato, aplica-se a **pena mais branda do caput** — a lei nova mais gravosa **não retroage**. **Conferir a data do fato** é passo obrigatório.
- **Efeito na competência e nos benefícios:** o caput é **IMPO** (JECRIM, transação, sursis processual); a forma qualificada **não é IMPO** e segue o rito comum, mas ainda admite **substituição por restritivas** e discussão de regime. **Confirmar competência e cabimento via `jurisprudencia-stj-stf`.**

## Competência (JECRIM x Justiça comum)

- **Caput (máx. 1 ano):** infração de **menor potencial ofensivo** → **JECRIM** (Lei 9.099/95): transação penal, composição civil, suspensão condicional do processo.
- **Forma qualificada (2 a 5 anos):** afasta o JECRIM; **rito comum**. Ainda cabem, conforme o caso, **suspensão condicional do processo** (se a mínima ≤ 1 ano — **atenção: a mínima da qualificada é 2 anos, o que a afasta**), **substituição por restritivas** e regime aberto.
- **Justiça estadual x federal:** em regra **estadual**; verificar interesse da União/fauna federal específica antes de afirmar competência — **conferir**.

## Catálogo de teses defensivas

1. **Atipicidade por ausência de materialidade** — sem laudo pericial/exame de corpo de delito que comprove a lesão/sofrimento e o **nexo** com a conduta (CPP, art. 158).
2. **Atipicidade subjetiva (ausência de dolo)** — mero descuido, negligência não intencional, acidente ou impossibilidade material de cuidado; **não há forma culposa** no art. 32.
3. **Erro de tipo (CP, art. 20)** — desconhecimento de circunstância elementar (ex.: da dor/impropriedade da prática) que exclui o dolo.
4. **Desqualificação (do §2º para o caput)** — animal que **não é cão nem gato**; a qualificadora não incide.
5. **Atipicidade temporal / irretroatividade** — fato anterior a **30/09/2020**: aplica-se a pena do caput, não a da Lei 14.064/2020.
6. **Excludentes de ilicitude (CP, art. 23)** — estado de necessidade (sacrifício humanitário, defesa contra ataque), exercício regular de direito (manejo, abate ou experimentação regulados; contenção necessária).
7. **Ausência de individualização/autoria** — contexto coletivo (canil, sítio, feira) sem prova de quem praticou a conduta contra qual animal.
8. **Fragilidade e ilicitude da prova** — quebra de cadeia de custódia (arts. 158-A ss.), imagens sem datação/contexto, ingresso irregular no local (art. 5º, XI, CF; art. 157 CPP).
9. **Institutos despenalizadores** — no caput: **composição civil, transação penal e suspensão condicional do processo** (art. 89, Lei 9.099/95); avaliar **ANPP** (CPP, art. 28-A) quando cabível.
10. **Dosimetria e substituição** — pena-base no mínimo; afastar agravantes/causas de aumento mal fundamentadas; **penas restritivas de direitos** (regime privilegiado dos crimes ambientais, arts. 7º-8º da Lei 9.605/98); regime aberto.
11. **Extinção da punibilidade** — **prescrição** (pena baixa no caput → prazo curto, art. 109 CP; verificar prescrição retroativa/intercorrente).

## Contra-teses da acusação (antecipar)

- **Dolo evidenciado** por reiteração, ocultação, condições deliberadamente cruéis ou agressão direta filmada.
- **Materialidade robusta** por laudo veterinário conclusivo, necropsia e registro fotográfico datado com cadeia de custódia íntegra.
- **Incidência da qualificadora** por se tratar de cão/gato e por resultado morte (causa de aumento).
- **Afastamento das excludentes** por ausência de necessidade real ou de regulação da atividade.
- **Vedação à insignificância** — a tutela é da fauna e do sentimento coletivo; a acusação sustentará a inaplicabilidade do princípio da bagatela.

A defesa **ataca cada uma na origem**: qualidade e conclusividade do laudo; prova concreta (não presumida) do dolo; espécie do animal e data do fato para a qualificadora; e a real ausência de individualização da conduta.

## Distinção de figuras próximas

| Figura | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Maus-tratos — caput (art. 32)** | abuso/lesão/mutilação de **qualquer** animal; detenção 3 m–1 ano | Base típica; **IMPO** → JECRIM e despenalizadores |
| **Forma qualificada (§2º, Lei 14.064/2020)** | **apenas cão/gato**; reclusão 2–5 anos | **Desqualificar** se a espécie não for cão/gato ou o fato for anterior a 30/09/2020 |
| **Dano (CP, art. 163)** | destruir/deteriorar coisa alheia (animal como semovente/propriedade) | Cenário patrimonial sem crueldade típica |
| **Crimes contra a fauna silvestre (arts. 29-31, Lei 9.605/98)** | caça, apanha, comercialização de silvestres | Se a conduta é de **caça/tráfico**, não de maus-tratos |
| **Descuido não intencional** | falha de cuidado sem vontade de maltratar | **Atipicidade subjetiva** — não há forma culposa no art. 32 |
| **Mero incômodo/manejo lícito** | contenção, transporte, abate/experimentação regulados | Fora do âmbito do penalmente relevante |

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** a **qualificadora da Lei 14.064/2020 é recente** e a jurisprudência sobre competência, incidência e direito intertemporal **está em formação**. **Não cite acórdão, tema ou súmula de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça.

Pontos que **exigem verificação** antes de afirmar (todos **[NÃO VERIFICADO]**):
- **Competência** do caput (JECRIM) x qualificada (comum) e eventual deslocamento — confirmar orientação atual.
- **Constitucionalidade/limites** de práticas culturais frente ao art. 225, §1º, VII, da CF (STF) — tema sensível e específico.
- **Exigência e conteúdo do exame pericial** para a materialidade em maus-tratos.
- **Aplicação (ou rejeição) do princípio da insignificância** nos crimes ambientais/maus-tratos.
- **Marco temporal** e não retroação da Lei 14.064/2020 a fatos anteriores a 30/09/2020.

Qualquer enunciado sobre esses pontos → **[NÃO VERIFICADO]** — buscar precedente atual antes de afirmar.

## Checklist e anti-padrões

- [ ] **Materialidade:** há **laudo pericial/exame de corpo de delito** comprovando lesão/sofrimento (CPP, art. 158)?
- [ ] **Nexo:** o laudo liga a lesão à **conduta do acusado**, afastando causa preexistente/concorrente?
- [ ] **Dolo:** há prova de **vontade de maltratar**, ou apenas descuido/negligência não intencional (atipicidade)?
- [ ] **Espécie:** o animal é **cão ou gato** (única hipótese da qualificadora)? Se não, **desqualificar** para o caput.
- [ ] **Data do fato:** é **anterior a 30/09/2020**? Então aplica-se a pena do **caput** (irretroatividade).
- [ ] **Excludentes (art. 23):** havia necessidade, regulação ou exercício regular de direito (abate/manejo/experimentação/sacrifício humanitário)?
- [ ] **Individualização:** em contexto coletivo, há prova de **quem** praticou a conduta contra **qual** animal?
- [ ] **Prova:** cadeia de custódia íntegra (arts. 158-A ss.)? Ingresso no local foi lícito? Imagens datadas e contextualizadas?
- [ ] **Despenalizadores:** no caput, avaliou composição, transação e **sursis processual** (art. 89, Lei 9.099/95) e eventual ANPP?
- [ ] **Prescrição** verificada (pena baixa no caput; prazos curtos; retroativa/intercorrente)?
- [ ] **Súmulas e precedentes conferidos** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- Aceitar condenação por **maus-tratos** sem **laudo pericial** que comprove a materialidade e o nexo.
- Tratar **descuido/negligência não intencional** como crime — o art. 32 **não tem forma culposa**.
- Aplicar a **qualificadora** (2 a 5 anos) a animal que **não é cão nem gato**.
- **Retroagir** a Lei 14.064/2020 a fatos anteriores a 30/09/2020 (irretroatividade da lei mais grave).
- Presumir **dolo eventual** da mera precariedade das condições, sem prova de assunção do risco.
- Ignorar os **despenalizadores** do JECRIM no caput (IMPO).
- Sustentar licitude de **prática cultural** sem checar a jurisprudência atual do STF (tema sensível).
- Citar acórdão "sobre maus-tratos" **sem** passar pelo gate de jurisprudência.
- Revitimizar ou desqualificar quem denunciou; o ataque é à **qualificação jurídica** e à **prova**, não à causa da proteção animal.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar dolo, materialidade pericial e nexo é da acusação; espelhar as teses acima como pontos a **provar**, e não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido e de terceiros não vão a repositório público.

## Lembretes finais

- **Dois pilares:** **materialidade pericial** (laudo + nexo) e **dolo** (não há forma culposa) — teste os dois primeiro.
- **Descuido não é crime** aqui: distinga falha de cuidado não intencional de vontade de maltratar.
- **Qualificadora só para cão e gato** — e só para fatos a partir de **30/09/2020** (irretroatividade).
- **Caput é IMPO** → JECRIM, transação e sursis processual; a qualificada segue rito comum.
- **Limites do conceito:** manejo, abate, experimentação e cultura reguladas podem afastar a tipicidade — mas cada um se testa contra a prova.
- **Sem jurisprudência de memória** — a Lei 14.064/2020 é recente; confira via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
