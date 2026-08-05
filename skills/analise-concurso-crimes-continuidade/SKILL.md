---
name: analise-concurso-crimes-continuidade
description: >-
  Use para classificar a relação entre múltiplas condutas/imputações — concurso material (art. 69
  CP), concurso formal próprio/impróprio (art. 70) ou crime continuado (art. 71 e §único) — e
  projetar o efeito na pena (cúmulo material × exasperação), definindo a tese mais vantajosa que
  alimenta a dosimetria. Análise estratégica PRÉVIA (não é peça). Gatilhos: concurso de crimes,
  concurso material ou formal, crime continuado… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, dosimetria, teoria-do-crime]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-concurso-crimes-continuidade"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-concurso-crimes-continuidade", "analise concurso", "crimes continuidade"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise de Concurso de Crimes e Continuidade Delitiva (arts. 69 a 71 do CP)

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

Esta skill é uma **análise de mérito, não uma peça**. Ela responde a três perguntas encadeadas que decidem a pena antes de qualquer petição: **(1) há um crime ou vários?** **(2) se vários, qual a relação entre eles — concurso material, formal ou crime continuado?** **(3) qual regra de aplicação da pena — cúmulo material ou exasperação — resulta mais favorável ao réu?** O resultado alimenta a dosimetria e a estratégia de defesa (ou, no polo acusatório, a imputação).

> **Lição central:** classificar a relação entre as condutas é o que muda a pena, não a soma dos tipos. O mesmo conjunto de fatos pode render **soma pura (cúmulo)** ou **uma pena exasperada por fração** conforme se enquadre em concurso material, formal ou continuidade. **Compare sempre os dois resultados numéricos** — a lei manda aplicar o mais benéfico no concurso formal e na continuidade (arts. 70 e 71, parte final), e a exasperação nunca pode superar o cúmulo material.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 69, 70 e 71 do CP e a Súmula 711/STF (crime continuado e lei mais grave no tempo) antes de fundamentar. Súmulas, temas repetitivos e overruling sobre unidade de desígnios, requisitos objetivos da continuidade e limites do aumento devem passar pela skill `jurisprudencia-stj-stf`. Esta skill ensina a **tese e o dispositivo**; qualquer número de HC/REsp/RE citado abaixo está marcado como [NÃO VERIFICADO] e deve ser conferido.

## Base legal

- **Art. 69 CP** — **concurso material**: duas ou mais ações/omissões, dois ou mais crimes → penas **somadas** (cúmulo material). Regra do §1º sobre suspensão condicional e do §2º sobre penas restritivas de direitos.
- **Art. 70 CP** — **concurso formal**: uma só ação/omissão, dois ou mais crimes.
  - *Caput*, 1ª parte — **formal próprio (perfeito)**: sem desígnios autônomos → pena do crime mais grave (ou de uma delas, se iguais) **aumentada de 1/6 até 1/2** (**exasperação**).
  - *Caput*, 2ª parte — **formal impróprio (imperfeito)**: **desígnios autônomos** (dolo direto voltado a cada resultado) → penas **somadas** (cúmulo), como no material.
  - **Parágrafo único (concurso material benéfico)** — a exasperação do concurso formal **não pode** exceder a pena que resultaria do cúmulo material; se exceder, aplica-se a soma.
- **Art. 71 CP** — **crime continuado**:
  - *Caput* — mesma espécie, condições de tempo, lugar, maneira de execução e outras semelhantes; os crimes subsequentes havidos como **continuação** do primeiro → pena de um só dos crimes (a mais grave, se diversas) **aumentada de 1/6 a 2/3** (**exasperação**).
  - **Parágrafo único (continuidade específica)** — crimes dolosos, contra vítimas diferentes, com **violência ou grave ameaça** à pessoa → o juiz pode aumentar a pena de um só dos crimes **até o triplo**, observados a culpabilidade, os antecedentes, a conduta social e a personalidade, os motivos e as circunstâncias.
- **Art. 68 CP** — a causa de aumento do concurso/continuidade incide na **terceira fase** da dosimetria (após a pena definitiva de cada crime isolado).
- **Art. 119 CP** — **prescrição** no concurso incide sobre a pena de **cada crime isoladamente** (não sobre o total).

## Método de análise (passo a passo)

O cálculo aritmético final é da `calculadora-dosimetria` (a fração incide na 3ª fase, art. 68). Esta skill fornece o **enquadramento** que a alimenta.

**Passo 1 — Contar as condutas (unidade × pluralidade de ações).** Antes de contar crimes, conte **ações**. Uma única ação que atinge vários bens/vítimas tende ao concurso formal; ações distintas tendem ao material ou à continuidade. Critérios: unidade de contexto fático, de dolo, de tempo/espaço.

**Passo 2 — Uma ação?**
- **Sim** → **concurso formal (art. 70)**. Verifique os **desígnios**: houve dolo autônomo dirigido a cada resultado?
  - Sem desígnios autônomos → **formal próprio** → exasperação 1/6 a 1/2.
  - Com desígnios autônomos → **formal impróprio** → cúmulo (soma).
- **Não (várias ações)** → vá ao Passo 3.

**Passo 3 — Várias ações: é crime continuado (art. 71)?** Confira **cumulativamente** os requisitos:
- **Objetivos:** crimes da **mesma espécie**; condições semelhantes de **tempo** (a jurisprudência costuma balizar intervalo de até ~30 dias entre os fatos — confira o parâmetro atual via `jurisprudencia-stj-stf`), **lugar** e **maneira de execução**.
- **Subjetivo (ponto de disputa):** o STJ tende a exigir também a **unidade de desígnios** (teoria mista/objetivo-subjetiva) — os fatos como elos de uma mesma empreitada, não crimes ocasionais reiterados. **Confirme a orientação vigente** em `jurisprudencia-stj-stf`.
- **Preenchidos** → continuidade → exasperação **1/6 a 2/3** (ou até o **triplo** na específica do §único). Vá ao Passo 5.
- **Não preenchidos** → **concurso material (art. 69)** → soma. Vá ao Passo 5.

**Passo 4 — "Mesma espécie".** Predomina que **mesma espécie = mesmo tipo penal** (ou tipos que tutelam o mesmo bem jurídico com estrutura equivalente — ex.: furto simples e furto qualificado). Roubo e extorsão, ou roubo e furto, em regra **não** são da mesma espécie para fins do art. 71 — o que empurra para o concurso material. **Este é ponto de divergência: confira via `jurisprudencia-stj-stf`.**

**Passo 5 — Comparar os dois cenários numéricos e escolher o mais favorável.** A exasperação (formal próprio e continuidade) **nunca pode superar** o cúmulo material (art. 70, §único, aplicado por analogia também à continuidade). Rode ambos na `calculadora-dosimetria` e adote o menor. **[calculadora a implementar: comparador cúmulo × exasperação, com testes]** caso não exista módulo dedicado.

## Quadro-resumo (classificação → efeito na pena)

| Instituto | Base | Ações | Requisito nuclear | Efeito na pena |
|---|---|---|---|---|
| Concurso material | art. 69 | várias | crimes autônomos | **soma** (cúmulo) |
| Formal próprio | art. 70, 1ª parte | **uma** | sem desígnios autônomos | exasperação **1/6 a 1/2** |
| Formal impróprio | art. 70, 2ª parte | **uma** | **desígnios autônomos** | **soma** (cúmulo) |
| Continuado (comum) | art. 71, caput | várias | mesma espécie + tempo/lugar/modo (+ desígnio) | exasperação **1/6 a 2/3** |
| Continuado específico | art. 71, §único | várias | + violência/grave ameaça + vítimas diversas | exasperação **até o triplo** |

## Critérios do quantum de aumento (defesa)

O **percentual não é livre**. A jurisprudência fixa parâmetros que a defesa deve invocar para **minorar** o aumento:

- **Continuidade (1/6 a 2/3):** o critério predominante é o **número de infrações** — 2 crimes → 1/6; 3 → 1/5; 4 → 1/4; 5 → 1/3; 6 → 1/2; 7 ou mais → 2/3 (patamar difundido pela jurisprudência do STJ — **confirme em `jurisprudencia-stj-stf`** [NÃO VERIFICADO]). **Tese defensiva:** com poucos fatos, exigir o **piso de 1/6**; atacar aumento acima do que o número de infrações justifica como falta de fundamentação.
- **Concurso formal próprio (1/6 a 1/2):** o quantum também gravita em torno do **número de resultados**. Poucos resultados → 1/6.
- **Continuidade específica (até o triplo):** o §único manda ponderar culpabilidade, antecedentes, conduta social, personalidade, motivos e circunstâncias — a defesa exige **fundamentação concreta** para qualquer aumento acima do mínimo.

## Teses típicas de DEFESA (foco majoritário)

1. **Puxar para a exasperação, não para o cúmulo.** Sustentar concurso formal ou continuidade sempre que o cenário admitir — a exasperação por fração costuma render pena bem menor que a soma. Enquadrar várias subtrações num mesmo contexto como **crime único** ou **continuado**, não material.
2. **Afastar o concurso formal impróprio → puxar para o próprio.** Negar os **desígnios autônomos**: sem dolo direto e independente a cada resultado, é formal próprio (exasperação), não soma.
3. **Reconhecer a continuidade delitiva** onde a acusação vê concurso material: demonstrar mesma espécie, proximidade de tempo/lugar/modo e a unidade de desígnios (empreitada única).
4. **Minorar o quantum:** aumento pelo **número de infrações** (piso de 1/6 com poucos fatos); atacar exasperação desfundamentada.
5. **Crime único (absorção/progressão).** Antes mesmo do concurso, checar se não há **crime único** por progressão criminosa, *antefactum/postfactum* impunível ou princípio da consunção (Súmula 17/STJ — falso absorvido pelo estelionato quando exaure sua potencialidade [NÃO VERIFICADO, conferir]). Um crime só é sempre melhor que qualquer concurso.
6. **Prescrição por crime (art. 119).** No concurso, a prescrição corre sobre a pena de **cada** delito isolado — pode fulminar os mais leves ainda que o conjunto persista. Rodar a `calculadora-prescricao` crime a crime.
7. **Continuidade específica → puxar para a comum.** Se houver dúvida sobre violência/grave ameaça ou identidade de vítimas, sustentar o *caput* (teto 2/3) e não o §único (até o triplo).

## Contra-teses (acusação — atenção ao polo)

> Esta skill é **de análise transversal**, majoritariamente a serviço da **defesa**. As teses abaixo são do **polo acusatório** — o roteador deve conferir o **polo da instituição** (`company.md`) antes de usá-las. Se o polo for defensivo, servem apenas para **antecipar** o argumento adversário.

- **Concurso material** onde a defesa vê continuidade: negar a mesma espécie, apontar descontinuidade de tempo/lugar ou ausência de unidade de desígnios (crimes ocasionais reiterados ≠ continuidade — "habitualidade criminosa" não é continuidade).
- **Formal impróprio:** afirmar os **desígnios autônomos** (dolo direto a cada vítima) para obter o cúmulo em vez da exasperação.
- **Continuidade específica (§único):** presentes violência/grave ameaça e vítimas diversas, pleitear o aumento até o triplo.
- **Quantum maior:** número elevado de infrações justifica fração próxima do teto.

## Súmulas e dispositivos (sob o Citation Gate)

Cite com certeza os **dispositivos de lei** (arts. 68, 69, 70, 71, 119 do CP). Para **súmulas e precedentes**, confira antes via `jurisprudencia-stj-stf`:

- **Súmula 711/STF** — a lei penal mais grave aplica-se ao **crime continuado** ou **permanente** se a sua vigência é anterior à cessação da continuidade/permanência. (Notória — citar com atenção à redação.)
- **Súmula 605/STF** — [NÃO VERIFICADO: há entendimento histórico sobre continuidade em crimes contra a vida, hoje superado pelo art. 71, §único; conferir a vigência antes de citar].
- **Súmula 17/STJ** — consunção do falso pelo estelionato quando aquele se exaure neste [NÃO VERIFICADO, conferir aplicação].
- **Tese do "número de infrações" para o quantum** (2 crimes = 1/6 … 7+ = 2/3) — construção jurisprudencial do STJ [NÃO VERIFICADO: confirmar o precedente e o patamar atual].
- **Unidade de desígnios como requisito da continuidade** (teoria mista) — orientação do STJ [NÃO VERIFICADO: confirmar acórdão/informativo vigente].

> **Regra de ouro do gate:** na dúvida sobre um número de acórdão, **ensine a tese e o artigo, não arrisque o número**. Omitir vence inventar. Nenhuma jurisprudência entra na análise sem passar por `jurisprudencia-stj-stf`.

## Erros comuns / checklist

- [ ] Contei **ações** antes de contar crimes (uma ação → art. 70; várias → art. 69/71)?
- [ ] No concurso formal, verifiquei **desígnios autônomos** (próprio × impróprio)?
- [ ] Na continuidade, confirmei **todos** os requisitos objetivos **e** a unidade de desígnios (teoria mista do STJ)?
- [ ] Testei "**mesma espécie**" corretamente (mesmo tipo/bem jurídico)?
- [ ] **Comparei numericamente** cúmulo × exasperação e adotei o mais benéfico (art. 70, §único)?
- [ ] A exasperação escolhida **não superou** o cúmulo material?
- [ ] Justifiquei o **quantum** pelo número de infrações (piso 1/6 com poucos fatos)?
- [ ] Considerei **crime único** (consunção/progressão) antes de qualquer concurso?
- [ ] Rodei a **prescrição por crime** (art. 119) — algum delito leve já prescreveu?
- [ ] A fração foi lançada na **3ª fase** da dosimetria (art. 68), sobre a pena já definitiva?

**Anti-padrões (evitar):**
- Somar penas (cúmulo) quando o caso comportava exasperação (formal próprio ou continuidade) — pena inflada indevidamente.
- Confundir **habitualidade/reiteração criminosa** com **continuidade** (esta exige unidade de desígnios e vínculo entre os fatos).
- Tratar roubo + furto (ou roubo + extorsão) como "mesma espécie" para forçar o art. 71.
- Aplicar a exasperação sobre a **soma** das penas em vez de sobre a **pena de um só** crime (a mais grave).
- Deixar a exasperação **ultrapassar** o cúmulo material (viola o art. 70, §único).
- Fixar o aumento no **teto** sem fundamentar pelo número de infrações.
- Esquecer a **prescrição isolada** por crime (art. 119) — perde-se defesa fácil.
- Citar súmula/precedente de memória sem passar por `jurisprudencia-stj-stf`.

## Encadeamento com outras skills

- **`calculadora-dosimetria`** — executa a incidência da fração na 3ª fase e o comparador cúmulo × exasperação (o cálculo determinístico não é feito aqui).
- **`calculadora-prescricao`** — prescrição crime a crime (art. 119).
- **`execucao-unificacao-penas`** — **distinção:** esta skill é a análise de mérito **prévia** (na sentença/dosimetria); a unificação opera na **execução**, sobre títulos **já transitados**. Não confundir os planos.
- **`jurisprudencia-stj-stf`** — gate obrigatório de toda súmula/precedente/tese aqui esboçados.
- **`redacao-persuasiva-criminal`** — quando a análise virar tópico de peça (alegações finais, apelação, dosimetria), aplicar o padrão de redação persuasiva.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta análise é hipótese de trabalho para a dosimetria e a estratégia; a decisão final e a responsabilidade são sempre do **advogado/profissional** (CED/EAOAB; Provimento 205/2021 para advocacia; CNMP para o Ministério Público; LC 80/94 para a Defensoria).
- **Ética por polo:** foco majoritário em **defesa**. As contra-teses são do **polo acusatório** — confira o polo da instituição em `company.md` antes de empregá-las; se defensivo, use-as só para antecipar o adversário.
- **Citation Gate inegociável:** nenhum número de acórdão/informativo/tema entra sem verificação em `jurisprudencia-stj-stf`. Dispositivos de lei e súmulas notórias citam-se com certeza; o resto vai marcado como [NÃO VERIFICADO].
