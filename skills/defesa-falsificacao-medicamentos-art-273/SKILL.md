---
name: defesa-falsificacao-medicamentos-art-273
description: >-
  Use ao defender acusado pelo art. 273 do CP — falsificar, corromper, adulterar ou alterar produto
  destinado a fins terapêuticos ou medicinais, mais as figuras equiparadas (§§1º, 1º-A e 1º-B) e a
  culposa (§2º). Recorte monográfico: desproporcionalidade/inconstitucionalidade do preceito
  secundário (10 a 15 anos) do §1º-B e a substituição pela pena do art. 33 da Lei 11.343/06;
  desclassificação e distinção típica; dosimetria e… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, saude-publica, dosimetria]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-falsificacao-medicamentos-art-273"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-falsificacao-medicamentos-art-273", "defesa falsificacao", "falsificacao medicamentos"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa no art. 273 do CP — falsificação de produtos terapêuticos/medicinais

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

Esta skill orienta a **defesa** no crime do **art. 273 do CP** (falsificação, corrupção, adulteração ou alteração de produto destinado a fins terapêuticos ou medicinais), aprofundando os três eixos que a prática cobra: **(1)** a desproporcionalidade/inconstitucionalidade do **preceito secundário** (reclusão de 10 a 15 anos), **(2)** a **desclassificação** para tipos menos graves e **(3)** a **dosimetria** e a **hediondez**. É crime de **perigo comum** cujo bem jurídico é a **saúde pública** (a incolumidade coletiva, não a de vítima determinada).

> **Lição central:** no art. 273 a defesa quase nunca começa negando o fato — começa **enquadrando a figura exata** e **atacando a pena**. Separe desde a primeira leitura: houve **falsificação/adulteração material** (caput/§1º) ou apenas **irregularidade sanitária** de perigo abstrato — produto sem registro, vencido, de procedência ignorada (§1º-B)? É o §1º-B que sustenta a tese-matriz de desproporcionalidade e a substituição do preceito secundário pela pena do tráfico. Classifique **antes**; a pena vem depois.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** do art. 273 e seus §§ (inseridos pela **Lei 9.677/1998**) e da inclusão no rol de hediondos (**Lei 9.695/1998** → Lei 8.072/90, art. 1º, VII-B). O estado da tese de desproporcionalidade é **dinâmico**: há **repercussão geral no STF** sobre o preceito secundário do §1º-B. Toda súmula, tema, informativo, tese ou número de acórdão passa **obrigatoriamente** pelos gates `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de ir para a peça. Na dúvida sobre o número, **ensine a tese e cite o dispositivo — não arrisque o acórdão**.

## Recorte desta skill (e o que fica na skill-mãe)

`defesa-crimes-saude-publica` cobre **todo** o Capítulo dos crimes contra a saúde pública (CP, arts. 267-285: epidemia, água, alimento, exercício ilegal da medicina etc.). **Esta skill é o aprofundamento monográfico do art. 273** — use-a quando a imputação for **especificamente** de falsificação/comércio de produto terapêutico/medicinal e você precisar da mecânica fina da desproporcionalidade, das distinções típicas e da dosimetria. Para objeto material que **não** seja terapêutico/medicinal (alimento → art. 272; água → arts. 270-271), volte à skill-mãe.

## Anatomia do art. 273 — mapa das figuras

| Figura | Conduta / condição | Natureza | Preceito secundário (redação legal) |
|--------|--------------------|----------|-------------------------------------|
| **caput** | falsificar, corromper, adulterar ou **alterar** produto p/ fins terapêuticos/medicinais | falsificação **material** | reclusão **10 a 15 anos** + multa |
| **§1º** | importar, vender, expor à venda, **ter em depósito para vender**, distribuir ou entregar a consumo o produto já falsificado/adulterado | comércio do produto viciado | mesmas penas do caput |
| **§1º-A** | inclui **medicamentos, matérias-primas, insumos farmacêuticos, cosméticos, saneantes e produtos de diagnóstico** | norma de extensão do objeto | — |
| **§1º-B** | praticar as ações do §1º sobre produto: **I** sem registro (quando exigível); **II** em desacordo com a fórmula do registro; **III** sem identidade/qualidade admitidas; **IV** com redução do valor terapêutico/atividade; **V** de **procedência ignorada**; **VI** adquirido de estabelecimento **sem licença** sanitária | **perigo abstrato** / irregularidade sanitária (o alvo da tese-matriz) | mesmas penas do caput |
| **§2º** | forma **culposa** de qualquer das condutas | culpa | detenção **1 a 3 anos** + multa |

> **Ponto de virada:** as figuras do **§1º-B** punem **irregularidade administrativo-sanitária** (sem registro, vencido, procedência ignorada) com a **mesma pena** da adulteração dolosa de um lote hospitalar. É essa equiparação — condutas de gravidade radicalmente distinta sob a mesma pena de 10-15 anos — que fundamenta a inconstitucionalidade do preceito secundário.

## Base legal

- **CP, art. 273, caput e §§ 1º, 1º-A, 1º-B e 2º** — redação da **Lei 9.677/1998**.
- **CF, art. 5º, XLVI (individualização) e LIV (devido processo substantivo/proporcionalidade)** — âncoras da tese de desproporcionalidade.
- **Lei 8.072/1990, art. 1º, VII-B** — art. 273 (caput e §§1º, 1º-A, 1º-B) tratado como **hediondo** (conferir vigência e alcance no gate).
- **Lei 11.343/2006, art. 33, caput** — pena de referência da substituição (**reclusão de 5 a 15 anos** e 500-1.500 dias-multa); **§4º** — redutor de 1/6 a 2/3.
- **CPP, arts. 158 e 167** — **exame de corpo de delito** (materialidade da falsificação/adulteração).

## A tese-matriz — inconstitucionalidade do preceito secundário do §1º-B

**Mecânica.** A Lei 9.677/1998 elevou a pena do art. 273 para **10 a 15 anos** — patamar próximo do latrocínio e superior ao do estupro — e a estendeu, pelo §1º-B, a condutas de **perigo abstrato** (produto sem registro, vencido, de procedência ignorada). A defesa sustenta:

1. **Ofensividade (lesividade):** punir a mera irregularidade sanitária, sem demonstração de **perigo concreto** à saúde, com pena de homicídio qualificado, viola a proporcionalidade em sentido estrito.
2. **Individualização e isonomia:** a mesma pena para o laboratório que adultera dolosamente e para quem revende caixa de remédio de origem duvidosa fere a proporção entre conduta e sanção.
3. **Solução (analogia *in bonam partem*):** afastado o preceito secundário do §1º-B, aplica-se, por ser o tipo penal **mais próximo** e também de saúde pública, a pena do **tráfico de drogas (art. 33 da Lei 11.343/2006 — 5 a 15 anos)**, abrindo caminho ao redutor do **§4º**.

- **Estado da arte (STJ):** a **Corte Especial** declarou, em controle **difuso**, a **inconstitucionalidade do preceito secundário do art. 273, §1º-B**, determinando a aplicação da pena do art. 33 da Lei 11.343/06. **Tese + dispositivo são firmes; o número do acórdão** (AI no HC 239.363/PR) **[NÃO VERIFICADO — confirmar número, órgão e vigência no gate `jurisprudencia-stj-stf`].**
- **Estado da arte (STF):** o tema está em **repercussão geral** (Tema 1003, RE 979.962/RS). **[NÃO VERIFICADO — confirmar o número do tema, o estado do julgamento e a tese eventualmente firmada antes de citar como vinculante.]**
- **Alcance:** o reconhecimento tradicional recai sobre o **§1º-B**. Para **caput/§1º** (falsificação material), avalie caso a caso se a tese se estende — não presuma; confira no gate.

## Metodologia forense (roteiro em fases)

**Fase 1 — Enquadrar a figura exata.** Qual verbo e qual parágrafo? Falsificação material (caput/§1º) × irregularidade sanitária (§1º-B)? Objeto é mesmo terapêutico/medicinal (§1º-A)? A resposta define todas as teses seguintes.

**Fase 2 — Materialidade e perícia.** Crime que deixa vestígio exige **exame de corpo de delito** (CPP, art. 158). Sem **laudo** que comprove a falsificação/adulteração/impropriedade — ou, no §1º-B, sem prova documental da condição (ausência de registro, procedência) —, ataca-se a **materialidade**. Confira a **cadeia de custódia** do produto apreendido (ver `impugnacao-cadeia-custodia`).

**Fase 3 — Desproporcionalidade (preceito secundário).** Sendo §1º-B, arguir a inconstitucionalidade e requerer, **desde a resposta à acusação e nas alegações finais**, a substituição pela pena do art. 33 da Lei 11.343/06 (com pleito subsidiário do §4º).

**Fase 4 — Desclassificação / atipicidade.** Testar migração para tipo menos grave ou para o ilícito administrativo (tabela adiante) e a **ausência de dolo** (erro de tipo, CP, art. 20 → §2º culposo ou atipicidade).

**Fase 5 — Dosimetria e hediondez.** Fixar a pena sobre a base **substituída** (5-15), aplicar o §4º, discutir a **hediondez residual**, o **regime** e a **substituição por restritivas** — e os reflexos em **progressão** e **prescrição**.

## Distinções típicas (desclassificação) — mapa de fuga do 273

| Da figura do 273… | …para | Quando cabe | Efeito |
|-------------------|-------|-------------|--------|
| §1º-B, I (sem registro) via **importação** | **contrabando** — CP, art. 334-A (reclusão 2-5 anos) | introdução de medicamento sem registro, **sem** falsificação material; a lesão é ao controle de importação | pena muito menor; **[confirmar no gate a orientação atual §1º-B × contrabando — há divergência]** |
| §1º-B (produto **impróprio/vencido** exposto à venda) | **relações de consumo** — Lei 8.137/90, art. 7º, IX (detenção 2-5 anos) | mercadoria em **condições impróprias** ao consumo, sem adulteração dolosa do princípio ativo | detenção, patamar muito inferior |
| §1º-B (irregularidade formal) | **infração sanitária administrativa** — Lei 6.437/77 | ilícito **meramente administrativo**, sem tipicidade penal (ultima ratio) | atipicidade penal |
| art. 273 (objeto **alimentício**, não medicinal) | **art. 272 do CP** (reclusão 4-8 anos) | o produto é **alimento**, não terapêutico/medicinal | reclassificação com pena menor |
| qualquer figura sem dolo | **§2º (culposo)** — detenção 1-3 anos, ou atipicidade | comerciante/farmacêutico que **desconhecia** o vício (erro de tipo, CP, art. 20) | desclassificação para culposo |

## Dosimetria passo a passo (após a substituição)

1. **Preceito secundário:** afastado o do §1º-B, parta de **5 a 15 anos** (art. 33, Lei 11.343/06).
2. **1ª fase (art. 59):** na modalidade §1º-B, argumente que a **natureza de perigo abstrato** e a ausência de dano concreto **não autorizam** exasperação da base; culpabilidade e consequências devem refletir o real desvalor.
3. **2ª fase:** agravantes/atenuantes (primariedade, confissão — CP, arts. 61-66).
4. **3ª fase — o redutor decisivo (§4º):** réu **primário, bons antecedentes, que não se dedica a atividades criminosas nem integra organização** → redução de **1/6 a 2/3**. É onde a pena despenca.
5. **Regime e substituição (CP, arts. 33 e 44):** pena final baixa e crime sem violência/grave ameaça → sustentar regime aberto e **substituição por restritivas de direitos** (discutindo a hediondez — ver adiante).

**Exemplo didático (use `calculadora-dosimetria` para o cálculo formal):** réu **primário**, acusado de **ter em depósito para vender medicamento de procedência ignorada** (§1º-B, V). Preceito legal: 10-15 anos. **Tese:** aplicar o art. 33 (5-15) → base no mínimo **5 anos**; sem agravantes/atenuantes; **§4º** na fração máxima (2/3) → **1 ano e 8 meses**. Com esse patamar, discute-se **regime aberto**, **substituição por PRD** e até **prescrição** (a pena concreta desloca o prazo do art. 109 — ver `calculadora-prescricao`).

## Teses e contra-teses (defesa × acusação)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|----------------|-----------|------------------------|
| Inconstitucionalidade do preceito secundário do §1º-B → pena do art. 33 da Lei 11.343/06 | CF, art. 5º, XLVI e LIV; analogia *in bonam partem* | pena é opção legislativa legítima; gravidade da saúde coletiva justifica o rigor |
| Aplicação do redutor do §4º (tráfico privilegiado) à pena substituída | coerência: se se importa o preceito do 33, importam-se seus benefícios | §4º é próprio do tráfico; não se transplanta ao 273 |
| Desclassificação para contrabando (334-A) / relações de consumo (Lei 8.137/90, art. 7º, IX) | conduta é burla ao controle de importação ou impropriedade, não falsificação | subsunção direta ao §1º-B; especialidade do 273 |
| Atipicidade por ausência de perigo concreto (ofensividade) | perigo abstrato exige mínima lesividade; princípio da ofensividade | §1º-B é crime de perigo abstrato, dispensa dano concreto |
| Erro de tipo / desclassificação para o §2º (culposo) | comerciante desconhecia o vício (CP, art. 20) | dolo eventual: assumiu o risco ao comercializar produto de origem duvidosa |
| Falta de materialidade (ausência/vício de laudo pericial) | CPP, art. 158; cadeia de custódia | prova documental e testemunhal supre (CPP, art. 167) |
| Descaracterização da hediondez após a substituição da pena | a pena e a natureza equiparada afastariam o enquadramento | rol da Lei 8.072/90 permanece; hediondez independe do quantum |

## Prova e processo (pontos sensíveis)

- **Perícia é o coração da materialidade.** Exija o **laudo** de constatação da falsificação/adulteração ou da condição do §1º-B. Ausente o vestígio, discuta CPP, art. 167 (prova supletiva) — e **impugne** a cadeia de custódia (`impugnacao-cadeia-custodia`).
- **Norma penal em branco (§1º-B).** A tipicidade depende do **regulamento sanitário** (registro ANVISA) vigente e aplicável — ataque a ausência/inaplicabilidade do complemento.
- **Competência.** Em regra, **Justiça Estadual**; desloca-se à **Federal** havendo **transnacionalidade** (importação) ou lesão a bem/serviço/interesse da União. **[Confirmar a orientação atual no gate — evite cravar número de súmula.]**
- **Prisão preventiva.** A pena elevada do 273 costuma sustentar preventiva; peça reavaliação à luz da **pena efetivamente aplicável** (art. 33) e de cautelares diversas (CPP, art. 319).

## Súmulas, temas e precedentes — sob Citation Gate

> A matéria **não se resolve por súmula**: é primordialmente **controle difuso de constitucionalidade** do preceito secundário. Trate cada referência abaixo como **hipótese a confirmar** no gate `jurisprudencia-stj-stf` / `verificacao-citacoes`.

- **STJ, Corte Especial** — inconstitucionalidade do preceito secundário do **§1º-B** e aplicação da pena do art. 33 da Lei 11.343/06. **[NÃO VERIFICADO — confirmar número/órgão do acórdão; ensinar a tese e citar o dispositivo, não o número de memória.]**
- **STF — Tema 1003 (repercussão geral)** sobre o preceito secundário do §1º-B. **[NÃO VERIFICADO — confirmar número do tema, RE e estado do julgamento.]**
- **Súmula 711/STF** — lei penal no tempo em crime **permanente/continuado** (relevante ao "ter em depósito"). **[Conferir enunciado e aplicação no gate.]**
- Enunciados sobre **exame de corpo de delito** e continuidade delitiva: **[confirmar no gate antes de citar.]**

## Erros comuns e checklist

- [ ] **Figura exata** identificada (caput/§1º falsificação material × §1º-B irregularidade sanitária)?
- [ ] **Objeto material** é mesmo terapêutico/medicinal (§1º-A)? Se alimento → art. 272; água → 270-271 (skill-mãe).
- [ ] **Tese de desproporcionalidade** do §1º-B arguida, com âncora constitucional (art. 5º, XLVI e LIV) e pleito **subsidiário** de pena do art. 33 da Lei 11.343/06?
- [ ] **Redutor do §4º** requerido sobre a base substituída?
- [ ] **Desclassificação** testada (contrabando 334-A; Lei 8.137/90 art. 7º IX; art. 272; §2º culposo; infração administrativa)?
- [ ] **Dolo** enfrentado (erro de tipo do comerciante que desconhecia o vício)?
- [ ] **Laudo pericial** exigido e **cadeia de custódia** conferida?
- [ ] **Hediondez** e seus reflexos (regime, progressão, livramento) discutidos após a substituição da pena?
- [ ] **Prescrição** recalculada sobre a pena concreta substituída (`calculadora-prescricao`)?
- [ ] **Toda citação** passou pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Aceitar o preceito secundário de 10-15 anos sem arguir a desproporcionalidade do §1º-B.
- Confundir **falsificação material** (caput) com **irregularidade sanitária** (§1º-B) — muda a força da tese.
- Pedir a substituição da pena sem requerer, na sequência, o **§4º**.
- Tratar o §1º-B como perigo concreto (ou vice-versa) sem enfrentar a ofensividade.
- Citar o número do leading case **de memória** — ensine a tese, cite o dispositivo, confirme o número no gate.
- Deixar de exigir **perícia**/cadeia de custódia e discutir só o direito.

## Conformidade e lembretes finais

- **Revisão humana obrigatória.** Este material é **rascunho técnico de apoio**; a responsabilidade pela peça e pela estratégia é sempre do **advogado** (CED/EAOAB). É hipótese a confirmar, não peça pronta.
- **Polo:** esta skill é de **defesa** — todas as teses miram a redução da pena, a desclassificação ou a absolvição do acusado.
- **Citation Gate.** Nenhuma súmula, tema, informativo ou acórdão vai à peça sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes` — há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.
- **Recorte:** para o panorama dos demais crimes contra a saúde pública, use `defesa-crimes-saude-publica`; para a mecânica da pena do tráfico importada na substituição, `defesa-trafico-drogas`; para o cálculo, `calculadora-dosimetria` e `calculadora-prescricao`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
