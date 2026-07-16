---
name: defesa-crimes-saude-publica
description: >-
  Use ao defender réu acusado de crime contra a saúde pública (CP, arts. 267-285) —
  falsificação/adulteração de produto destinado a fins terapêuticos ou medicinais (art. 273),
  exercício ilegal da medicina/charlatanismo/curandeirismo (arts. 282-284), envenenamento/corrupção
  de água potável ou de substância alimentícia/medicinal (arts. 270-272), epidemia e omissão de
  notificação (arts. 267-269). Gatilhos: crime contra a saúde… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, saude-publica, leis-penais-especiais]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-saude-publica"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-saude-publica", "defesa crimes", "saude publica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos Crimes contra a Saúde Pública (CP, arts. 267 a 285)

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

Esta skill orienta a **defesa** de acusado por crime contra a saúde pública — o Capítulo III do Título VIII da Parte Especial do Código Penal (arts. 267 a 285). São crimes de **perigo comum** cujo bem jurídico é a **incolumidade pública** (a saúde coletiva, não a de uma vítima determinada). O carro-chefe defensivo é o **art. 273** (falsificação/adulteração de produto destinado a fins terapêuticos ou medicinais), cujo **preceito secundário** (reclusão de **10 a 15 anos**, herdado do tráfico pela Lei 9.677/1998) sustenta uma das teses de **desproporcionalidade** mais fortes do Direito Penal brasileiro.

> **Lição central:** antes de discutir mérito, **enquadre o tipo com precisão e ataque o preceito secundário**. No art. 273 a tese matriz não é negar o fato, é a **inconstitucionalidade/desproporcionalidade da pena de 10-15 anos** aplicada a condutas heterogêneas (de um lote adulterado de laboratório a um comprimido importado sem registro). Classifique **antes**: é produto "destinado a fins terapêuticos ou medicinais" (art. 273) ou é outro objeto material (alimento — art. 272; água — arts. 270-271)? É falsificação/adulteração real ou mera **ausência de registro** (art. 273, §1º-B)? A resposta define a tese.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 267 a 285 do CP e, em especial, do **art. 273 e seus §§1º, 1º-A e 1º-B** (inseridos pela **Lei 9.677/1998** e alterados pela **Lei 9.695/1998**, que incluiu o art. 273 no rol de hediondos da Lei 8.072/90). Verifique a **classificação da conduta como hedionda** e o estado atual da tese de desproporcionalidade — há **repercussão geral** sobre o preceito secundário. Súmulas, temas de repercussão geral, informativos e overruling passam **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de fundamentar a peça. Na dúvida sobre um número de acórdão, **ensine a tese e cite o dispositivo — não arrisque o número**.

## Base legal

- **CP, arts. 267 a 285** — crimes contra a saúde pública (perigo comum; incolumidade pública).
- **CP, art. 267** — epidemia (com resultado morte: forma qualificada, §1º).
- **CP, arts. 268-269** — infração de medida sanitária preventiva; omissão de notificação de doença.
- **CP, arts. 270-271** — envenenamento e corrupção/poluição de água potável ou de substância alimentícia/medicinal.
- **CP, art. 272** — falsificação, corrupção, adulteração ou alteração de **substância ou produtos alimentícios**.
- **CP, art. 273** — falsificação, corrupção, adulteração ou alteração de **produto destinado a fins terapêuticos ou medicinais** (pena: reclusão, **10 a 15 anos**, e multa). **§1º** equipara a importação, venda, exposição, depósito etc.; **§1º-A** estende a matérias-primas, insumos, cosméticos e saneantes; **§1º-B** equipara condutas sobre produto **sem registro** no órgão de vigilância sanitária, **em desacordo com a fórmula constante do registro**, com data de validade vencida, de procedência ignorada ou adquirido de estabelecimento sem licença.
- **CP, arts. 274-276** — outras substâncias nocivas; emprego de processo proibido; invólucro/recipiente com falsa indicação.
- **CP, arts. 282-284** — **exercício ilegal da medicina, arte dentária ou farmacêutica** (282); **charlatanismo** (283); **curandeirismo** (284).
- **CP, art. 285** — causa de aumento por resultado (remete aos arts. 258 e 259).
- **Lei 8.072/1990, art. 1º, VII-B** — art. 273 caput e §§1º, 1º-A e 1º-B tratados como **hediondos** (conferir vigência via gate).
- **Lei 5.991/1973; Lei 6.360/1976; Lei 9.782/1999** — controle sanitário de medicamentos e criação da ANVISA (moldura administrativa/regulatória).
- **CF, art. 5º, XLVI (individualização) e XL (irretroatividade gravosa); art. 5º, LIV (devido processo/proporcionalidade)** — âncoras constitucionais da tese de desproporcionalidade.

## A tese matriz — desproporcionalidade do preceito secundário do art. 273

A **Lei 9.677/1998** elevou a pena do art. 273 para **reclusão de 10 a 15 anos** — patamar **igual ou superior** ao do homicídio simples (6 a 20) e **idêntico** ao do tráfico de drogas da época — para condutas que vão da adulteração dolosa de lote hospitalar até a simples **importação de medicamento sem registro** (§1º-B). A defesa sustenta:

1. **Ofensa à proporcionalidade (CF, art. 5º, LIV; art. 5º, XLVI).** Pena mínima de **10 anos** para condutas de lesividade abstrata muito díspares fere a proporcionalidade em sentido estrito e a individualização.
2. **Solução de substituição do preceito secundário.** A tese consolidada (a conferir e citar via gate) propõe aplicar, ao **§1º-B** (e correlatos de menor lesividade), o **preceito secundário do art. 33 da Lei 11.343/2006** (tráfico: 5 a 15 anos) — mais brando —, por analogia *in bonam partem*, enquanto não sobrevém correção legislativa. **[NÃO VERIFICADO — confira no gate `jurisprudencia-stj-stf` o precedente do STF/STJ que fixou essa substituição do preceito secundário e o estado da repercussão geral; não cite número de memória.]**
3. **Distinção entre falsificar/adulterar (lesividade concreta) e mera irregularidade registral (§1º-B).** A ausência de registro ANVISA, sem prova de nocividade real do produto, aproxima a conduta de ilícito administrativo-sanitário e reforça o pleito de pena proporcional.

> **Regra de ouro:** a tese de desproporcionalidade é **jurídica** e assenta em **dispositivos constitucionais** — ensine-a com segurança. O **número** do leading case, o tema de repercussão geral e o informativo, esses só entram **depois de verificados**.

## Roteiro de defesa por tipo penal

### 1. Art. 273 — produto terapêutico/medicinal (o núcleo)

**Teses típicas:**
- **Desproporcionalidade do preceito secundário** (tese matriz acima) — pleitear a pena do art. 33 da Lei 11.343/2006 ou a declaração incidental de inconstitucionalidade do quantum.
- **Atipicidade por ausência de "produto destinado a fins terapêuticos ou medicinais".** O objeto material precisa ser medicamento/insumo terapêutico. Suplemento alimentar, cosmético comum ou produto sem finalidade terapêutica pode **não** se subsumir ao caput (verificar §1º-A quanto a cosméticos/saneantes).
- **Desclassificação para contrabando/descaminho (CP, arts. 334 e 334-A).** Se a conduta é **importar/introduzir** medicamento **sem registro**, sem falsificação/adulteração material, discute-se a desclassificação para contrabando (art. 334-A) — de pena muito menor —, sustentando que a criminalização adequada da mera burla ao controle de importação é o contrabando, não o art. 273. **[Confirme no gate a orientação atual sobre §1º-B × contrabando — há divergência.]**
- **Insignificância / lesividade concreta.** Quantidade ínfima, uso pessoal, ausência de risco à coletividade — atacar a tipicidade material (perigo comum concreto/abstrato).
- **Ausência de dolo / erro de tipo.** Desconhecimento da irregularidade registral ou da adulteração; boa-fé do comerciante que revende produto com aparência regular.
- **Prova pericial deficiente.** Crime que reclama **perícia** para atestar a falsificação/adulteração/nocividade; laudo ausente, inconclusivo ou sem cadeia de custódia derruba a materialidade (ver `analise-laudo-pericial`, `cadeia-de-custodia`).

**Causas de diminuição / minorantes a explorar:**
- Se admitida a substituição pelo art. 33 da Lei 11.343/2006, pleitear também o **§4º (tráfico privilegiado)** quando presentes primariedade, bons antecedentes, não dedicação a atividades criminosas e não integração a organização — redução de 1/6 a 2/3. **[Confirmar cabimento no gate.]**
- Dosimetria: atacar a valoração das circunstâncias do art. 59; afastar consequências não comprovadas; confissão (atenuante do art. 65, III, "d").

### 2. Arts. 282-284 — exercício ilegal, charlatanismo, curandeirismo

**Teses típicas:**
- **Art. 282 (exercício ilegal da medicina/odontologia/farmácia):** atipicidade quando há **habilitação** ou quando o ato não é privativo da profissão; distinção entre exercício habitual e ato isolado; profissional habilitado que apenas excede limites administrativos (ilícito ético, não penal).
- **Art. 283 (charlatanismo):** exige **inculcar/anunciar cura por meio secreto ou infalível** — atipicidade se não há promessa de cura infalível/secreta; liberdade de informação e distinção de práticas integrativas reconhecidas.
- **Art. 284 (curandeirismo):** discussão sobre **práticas religiosas/culturais** e liberdade de crença (CF, art. 5º, VI); atipicidade quando ausente habitualidade ou intuito de cura mediante gesto/palavra/substância; princípio da lesividade.
- **Desclassificação entre os três** conforme a conduta concreta (o profissional habilitado que erra ≠ o leigo que se faz passar por médico ≠ o que promete cura infalível).
- **Estelionato x saúde pública:** se o fim é obter vantagem econômica mediante fraude, discutir o enquadramento adequado.

### 3. Arts. 270-272 — água e alimentos

**Teses típicas:**
- **Objeto material errado:** confirmar se é **água potável** (270-271), **substância alimentícia** (272) ou **produto terapêutico** (273) — o enquadramento muda a pena drasticamente.
- **Perigo concreto x abstrato:** exigir prova de que a substância se tornou **nociva à saúde** (elemento normativo do tipo); laudo que não demonstra nocividade real esvazia a tipicidade.
- **Adulteração x mera irregularidade:** diferenças de rotulagem, prazo ou padrão de identidade sem risco à saúde tendem ao ilícito administrativo/consumerista (ver `defesa-crimes-consumidor`), não penal.

### 4. Arts. 267-269 — epidemia, medida sanitária, notificação

**Teses típicas:**
- **Art. 267 (epidemia):** exigência de **propagação de germes patogênicos** e nexo causal; distinção de meras infrações sanitárias; resultado morte (§1º) demanda prova robusta do nexo.
- **Arts. 268-269:** tipos de menor potencial ofensivo em muitos casos; atipicidade por ausência de **determinação legal específica** de medida sanitária (norma penal em branco — a moldura administrativa precisa existir e estar vigente); ausência do dever de notificar (art. 269 é próprio do médico).

## Nulidades e questões processuais próprias

- **Perícia e cadeia de custódia (CPP, arts. 158 a 158-F).** Crimes materiais de perigo que dependem de exame do produto: **quebra da cadeia de custódia**, ausência de laudo, perícia por não perito ou amostra contaminada geram **fragilidade probatória**. Explorar `cadeia-de-custodia` e `analise-laudo-pericial`.
- **Norma penal em branco (arts. 268, 273, §1º-B).** A tipicidade depende de **regulamento sanitário** (ANVISA, vigilância) vigente e aplicável ao caso — atacar a ausência/inaplicabilidade do complemento normativo.
- **Competência.** Verificar competência **federal** quando há lesão a bem/serviço/interesse da União (ex.: registro na ANVISA, importação), sob pena de nulidade por incompetência absoluta — **[confirmar critério de fixação de competência no gate; há distinção conforme a conduta.]**
- **Busca e apreensão / interceptação.** Impugnar provas obtidas com vício (ausência de mandado, extrapolação do objeto) — prova ilícita e derivada (CF, art. 5º, LVI; CPP, art. 157).
- **Excesso de prazo / prisão preventiva.** Diante da pena elevada do art. 273, atacar a necessidade e a proporcionalidade da preventiva (CPP, arts. 312-316); pleitear medidas cautelares diversas (art. 319).

## Teses e contra-teses (quadro)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Desproporcionalidade do preceito secundário do art. 273 → pena do art. 33 da Lei 11.343/06 | CF, art. 5º, LIV e XLVI; analogia *in bonam partem* | Pena é opção legislativa legítima; gravidade do bem jurídico (saúde coletiva) |
| §1º-B (sem registro) ≠ falsificação → desclassificação p/ contrabando (art. 334-A) | Menor lesividade; ausência de adulteração material | §1º-B tipifica autonomamente; risco sanitário presumido |
| Atipicidade: objeto não é "produto terapêutico" | Elemento normativo do tipo (caput/§1º-A) | Interpretação ampla de insumo/produto de saúde |
| Ausência de nocividade real (270-272) | Tipo exige tornar nociva à saúde | Perigo abstrato basta |
| Insignificância / uso pessoal | Lesividade material; perigo comum não configurado | Bem jurídico coletivo indisponível afasta bagatela |
| Erro de tipo / ausência de dolo (comerciante de boa-fé) | CP, art. 20; aparência de regularidade | Dever de diligência do comerciante de medicamentos |
| Nulidade por quebra de cadeia de custódia | CPP, arts. 158-A a 158-F | Higidez da prova; mera irregularidade sem prejuízo |
| Tráfico privilegiado (se aplicada a pena do art. 33) | Lei 11.343/06, art. 33, §4º | Não cabível fora do tipo do art. 33 |

## Súmulas e precedentes (sob o Citation Gate)

> **NÃO** cite número de HC/REsp/RE, tema de repercussão geral ou informativo **de memória**. Os itens abaixo indicam **o que procurar** e **onde a tese vive** — confirme cada um em `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de escrever na peça.

- **Arts. 282-284 (exercício ilegal, charlatanismo, curandeirismo) — não há súmula específica de STJ/STF conhecida sobre exercício ilegal da medicina.** **Não** invoque enunciado numerado atribuindo a esses tipos qualquer tese (ação múltipla, dispensa de dano etc.) — a defesa dessas condutas apoia-se em **doutrina** e no dispositivo, não em súmula. Ensine a tese doutrinária: (i) o art. 282 pune o exercício **habitual** (habitualidade como elemento — ato isolado tende à atipicidade); (ii) atipicidade quando o ato **não é privativo** da profissão ou quando há **habilitação** (excesso de limites administrativos = ilícito ético, não penal); (iii) distinção entre os três tipos conforme a conduta concreta (art. 282 = exercer sem habilitação/além dos limites; art. 283 = inculcar cura por meio **secreto ou infalível** — charlatanismo; art. 284 = **curandeirismo**, com a ressalva de liberdade religiosa/cultural, CF, art. 5º, VI). **Se localizar algum enunciado ou precedente aplicável, confirme número, órgão, enunciado literal e vigência em `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar — nunca de memória.**
- **Desproporcionalidade do preceito secundário do art. 273, §1º-B** e **substituição pela pena do art. 33 da Lei 11.343/2006** — há entendimento do **STF/STJ** e **repercussão geral** sobre o tema. **[NÃO VERIFICADO — localizar o leading case, o número do tema e o estado atual do julgamento no gate; ensinar a tese sem arriscar o número.]**
- **§1º-B × contrabando/descaminho (art. 334-A)** — divergência jurisprudencial sobre desclassificação da mera importação de medicamento sem registro. **[NÃO VERIFICADO — conferir orientação atual no gate.]**
- **Natureza hedionda do art. 273** (Lei 8.072/90, art. 1º, VII-B) — repercute em regime, progressão e livramento; **[confirmar vigência e alcance no gate; ver `execucao-progressao-regime` para os percentuais.]**

## Cálculo e dosimetria (aponta para as calculadoras)

Esta skill **não** calcula pena. Descreva o **método** e delegue às calculadoras determinísticas:

- **Dosimetria da pena** (trifásica, art. 59 e ss.): use `calculadora-dosimetria`. Se a tese de substituição do preceito secundário for acolhida, recalcular sobre a moldura do art. 33 da Lei 11.343/2006 (5 a 15 anos), aplicando eventual §4º.
- **Prescrição** (a pena elevada do art. 273 desloca o prazo do art. 109 do CP): use `calculadora-prescricao` — inclusive prescrição em perspectiva/retroativa após a substituição da pena.
- **Tempestividade** de recurso/pedido: use `calculadora-tempestividade`.
- **Progressão de regime** (art. 273 tratado como hediondo): ver `execucao-progressao-regime` para os percentuais do art. 112 da LEP.

> Se algum cálculo específico de saúde pública não estiver coberto pelas calculadoras acima, marque **[calculadora a implementar com testes]** e **não** improvise número na peça.

## Erros comuns / checklist da defesa

- [ ] **Objeto material** corretamente identificado (terapêutico/medicinal → 273; alimento → 272; água → 270-271)? O enquadramento errado infla a pena.
- [ ] **Conduta** é falsificação/adulteração **material** ou mera **irregularidade registral** (§1º-B)? Muda a tese (desproporcionalidade / desclassificação).
- [ ] **Tese de desproporcionalidade** do preceito secundário do art. 273 arguida, com âncora constitucional (art. 5º, LIV e XLVI) e pleito subsidiário de pena do art. 33 da Lei 11.343/06?
- [ ] **Desclassificação** para contrabando/descaminho (art. 334-A) avaliada quando a conduta é importação sem registro?
- [ ] **Perícia** existente, hígida e com **cadeia de custódia** preservada? Laudo comprova nocividade/adulteração?
- [ ] **Norma penal em branco** — o complemento sanitário (ANVISA/vigilância) existe, está vigente e se aplica ao fato?
- [ ] **Dolo** demonstrado, ou há erro de tipo / boa-fé (comerciante que revende produto de aparência regular)?
- [ ] **Competência** (federal x estadual) verificada conforme a lesão a interesse da União?
- [ ] **Preventiva** atacada por desproporcionalidade, dada a pena elevada do art. 273 (medidas do art. 319)?
- [ ] **Insignificância / lesividade** material discutida (perigo comum não configurado)?
- [ ] Nos arts. 282-284, distinção correta entre exercício ilegal, charlatanismo e curandeirismo (e liberdade religiosa/cultural no 284)?
- [ ] **Toda** súmula/precedente/tema conferido em `jurisprudencia-stj-stf` / `verificacao-citacoes` — nenhum número citado de memória?
- [ ] **Dosimetria e prescrição** remetidas às calculadoras (`calculadora-dosimetria`, `calculadora-prescricao`), não calculadas à mão?

**Anti-padrões (evitar):**
- Aceitar a pena de 10-15 anos do art. 273 sem arguir a desproporcionalidade e o pleito de substituição pelo art. 33 da Lei 11.343/06.
- Confundir **irregularidade registral** (§1º-B) com **falsificação material** — são teses distintas.
- Enquadrar como art. 273 objeto que é alimento (272) ou água (270-271) — ou o inverso.
- Citar número de HC/REsp/RE, tema ou informativo **de memória** sobre a inconstitucionalidade do art. 273.
- **Atribuir a súmula existente um conteúdo que não é o dela** (ex.: dar à Súmula 96/STJ, que trata de **extorsão**, tese de exercício ilegal da medicina) — súmula sempre conferida por **número + enunciado literal** no gate antes de citar.
- Ignorar a **perícia** e a **cadeia de custódia** num crime que depende de exame do produto.
- Tratar mera infração sanitária administrativa como crime (arts. 268, 272) sem verificar o complemento normativo.
- Desprezar a tese de **desclassificação para contrabando** na importação de medicamento sem adulteração.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Todo produto desta skill é **hipótese técnica a confirmar** — a peça só é protocolada após revisão do(a) advogado(a) responsável (CED/OAB, art. 2º).
- **Citation Gate inegociável.** Dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer** precedente específico (número de acórdão, tema de repercussão geral, informativo) passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso. Há sanções reais por jurisprudência inventada por IA — **omitir vence inventar**.
- **Polo:** esta skill é de **DEFESA** (advocacia/Defensoria). O chefe-roteador deve **conferir o polo** da instituição no `company.md` antes de acionar; se o pedido for do **polo acusatório** (MP/assistente de acusação), redirecionar para as skills próprias da acusação (o material aqui é escrito da perspectiva da defesa).
- **Ética por polo:** advocacia — EAOAB/CED + Provimento 205/2021; Defensoria — LC 80/94; Ministério Público — CNMP. Conflito de interesses (art. 17, EAOAB) checado na triagem.
- **Padrão de redação:** ao redigir a peça, aplique também `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).
</content>
</invoke>
