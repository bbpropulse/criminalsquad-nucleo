---
name: acusacao-dolo-eventual-transito
description: >-
  Use para analisar acusacao dolo eventual transito: [POLO ACUSATÓRIO — MP/assistente] Use para
  fundamentar homicídio DOLOSO por dolo eventual no trânsito (embriaguez + alta velocidade, racha,
  contramão, reiteração) e deslocar a competência ao Tribunal do Júri — assunção do risco (art. 18,
  I, CP), indicadores fáticos, redação da denúncia/aditamento, sustentação na pronúncia (in dubio
  pro societate) e resposta à… Não use para conclusão definitiva sem autos suficientes, fonte atual
  ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, acusacao, transito, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-dolo-eventual-transito"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-dolo-eventual-transito", "acusacao dolo", "eventual transito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Imputação de Dolo Eventual e Pronúncia ao Júri no Trânsito (art. 18, I, CP; art. 121 c/c art. 5º, XXXVIII, CF)

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

> **⚠️ POLO ACUSATÓRIO.** Esta skill é do **Ministério Público / assistente de acusação**. Sustenta que o homicídio no trânsito foi **doloso** (dolo eventual) e deve ir a **júri**, e responde à tese defensiva de **culpa consciente** (que puxa para o art. 302 do CTB). **O chefe-roteador deve conferir o polo da instituição** (`_criminalsquad/_memory/company.md`): se a instituição é de **defesa**, o polo é o oposto — use `defesa-homicidio-culposo-transito`, que sustenta a culpa e a competência do juízo singular. A maior parte do acervo criminal é de **defesa**; esta skill existe por **simetria** (fundamentar o lado acusatório).

Esta skill orienta a atuação do órgão de acusação quando um homicídio na direção de veículo, em vez de tratado como **culposo** (art. 302 do CTB), é imputado como **doloso por dolo eventual** (art. 121 do CP) — deslocando a competência ao **Tribunal do Júri** (CF, art. 5º, XXXVIII, "d"). Cobre a construção fática do dolo eventual, a redação da denúncia/aditamento, a sustentação na **decisão de pronúncia** e a réplica à tese de culpa consciente.

> **Lição central:** dolo eventual **não se presume da gravidade do resultado nem do só fato de dirigir embriagado**. Ele se **constrói** a partir de **indicadores fáticos concretos e cumulativos** de que o agente, prevendo a morte como possível, **anuiu** ao risco ("dane-se", *foda-se*, indiferença ao resultado). Denúncia que apenas rotula "dolo eventual" sem descrever os fatos que revelam a **assunção do risco** é inepta e não sobrevive à defesa técnica.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 302 do CTB (Lei 9.503/97)** e do **art. 306 do CTB** (embriaguez ao volante) — houve alterações (Leis 11.705/2008, 12.760/2012, 13.546/2017, entre outras) que criaram a **causa de aumento / figura qualificada** do homicídio culposo sob influência de álcool. Confira também o estado atual da **jurisprudência do STF e do STJ** sobre dolo eventual no trânsito (há oscilação e casos concretos decididos nos dois sentidos) via a skill `jurisprudencia-stj-stf`. **Não afirme numericamente HC/REsp/RE, tema ou informativo sem verificação.**

## A distinção central — dolo eventual × culpa consciente

Ambos partilham a **previsão** do resultado como possível. A fronteira está no **elemento volitivo**:

| | Previsão do resultado | Atitude perante o resultado previsto |
|---|---|---|
| **Dolo eventual** (art. 18, I, 2ª parte, CP) | Prevê a morte como possível | **Anui / assume o risco** — é-lhe **indiferente** que ocorra ("aceita" o resultado) |
| **Culpa consciente** (art. 18, II, CP) | Prevê a morte como possível | **Confia** sinceramente que **não** ocorrerá (acredita poder evitá-la; não a aceita) |

- **Teoria adotada (consentimento/assentimento):** no dolo eventual o agente **consente** no resultado; na culpa consciente ele **repele** o resultado (confia em evitá-lo). É a fórmula de **Frank** ("seja como for, atuo") que a acusação precisa demonstrar por fatos.
- **A prova é indireta.** Ninguém confessa "aceitei matar". O dolo eventual se **infere** do conjunto das circunstâncias objetivas da conduta — daí a importância de **descrever os indicadores** na denúncia, e não apenas rotular.

## Base legal

- **Art. 18, I, CP** — dolo (direto e eventual): "quando o agente quis o resultado **ou assumiu o risco de produzi-lo**".
- **Art. 121, CP** — homicídio doloso (competência do júri).
- **Art. 302, CTB (Lei 9.503/97)** — homicídio **culposo** na direção de veículo automotor (crime comum, juízo singular) — a moldura que a acusação afasta ao sustentar o dolo.
- **Art. 306, CTB** — embriaguez ao volante (crime de perigo; pode concorrer como indicador e como crime autônomo).
- **CF, art. 5º, XXXVIII, "d"** — competência do **Tribunal do Júri** para os crimes **dolosos** contra a vida.
- **Art. 413, CPP** — decisão de **pronúncia**: exige **prova da materialidade** e **indícios suficientes de autoria** (juízo de admissibilidade, não de certeza).
- **Art. 419, CPP** — **desclassificação** pelo juiz sumariante (remete ao juízo competente quando não é crime doloso contra a vida).
- **Art. 492, §1º, CPP** — desclassificação **em plenário** (competência passa ao juiz-presidente).

## Os indicadores fáticos do dolo eventual no trânsito

A acusação deve **selecionar e narrar** os indicadores presentes no caso — quanto **mais elementos cumulativos**, mais robusta a imputação. Nenhum isolado é decisivo; é o **conjunto** que revela a indiferença ao resultado:

1. **Embriaguez ao volante** (alcoolemia comprovada; teste, exame clínico, prova testemunhal do art. 306 CTB) — assume-se voluntariamente a incapacidade de reagir.
2. **Velocidade excessiva e incompatível** com a via (muito acima do limite; perícia de velocidade/marcas de frenagem).
3. **Racha / "pega" / competição não autorizada** (art. 308 CTB) — disputa que evidencia desprezo pela segurança alheia.
4. **Direção na contramão** ou avanço deliberado de sinal vermelho / cruzamento.
5. **Manobras perigosas reiteradas** (zigue-zague, ultrapassagens em local proibido, "cavalos de pau", direção em calçada/local de aglomeração).
6. **Reiteração / histórico** (multas gravíssimas, condenações anteriores por embriaguez, CNH suspensa/cassada) — reforça a representação do risco.
7. **Ausência de frenagem / fuga do local** (não tentou evitar; comportamento pós-fato que sugere indiferença).
8. **Consciência prévia do perigo** (foi advertido, dirigia visivelmente alterado, transportava a alta velocidade em zona escolar/pedestres).

> **A regra de ouro da denúncia:** para **cada** indicador, descrever o **fato concreto** e a **fonte de prova** (laudo, testemunha, imagem, exame). O dolo eventual sustenta-se na **soma** desses fatos — não na adjetivação. Evitar a "denúncia-etiqueta" (só cola o rótulo "dolo eventual").

## Estrutura da DENÚNCIA por dolo eventual (art. 41 CPP)

A denúncia deve conter os requisitos do art. 41 do CPP **e**, no elemento subjetivo, **descrever os fatos que revelam a assunção do risco** (não basta afirmar "agiu com dolo eventual"):

1. **Exposição do fato criminoso** — narrativa cronológica do evento (condução, circunstâncias, colisão/atropelamento, morte).
2. **Elemento subjetivo fundamentado** — parágrafo próprio elencando os **indicadores fáticos** (embriaguez + velocidade + racha + contramão…) e concluindo pela **anuência ao risco de morte** (art. 18, I, CP). Explicitar a **indiferença** ao resultado.
3. **Afastamento expresso da culpa** — antecipar a distinção: por que **não** é culpa consciente (o agente não confiava em evitar; a conduta revela aceitação, não mera imprudência).
4. **Classificação** — art. 121 do CP (e eventuais **qualificadoras** compatíveis; ver adiante), com pedido de recebimento e rito do júri (arts. 406 e ss., CPP).
5. **Concurso material**, se cabível — com o art. 306 (embriaguez) e/ou art. 308 (racha) do CTB, e demais crimes de trânsito autônomos.
6. **Rol de testemunhas e requerimentos de prova** (laudos de alcoolemia, velocidade, necroscópico; imagens; degravações).

> **Qualificadoras e dolo eventual — cautela técnica.** A compatibilidade de **qualificadoras subjetivas** (motivo torpe/fútil) com o dolo eventual é **controvertida** e frequentemente **rejeitada** (a qualificadora subjetiva pressupõe direção final de vontade). Já qualificadoras de índole **objetiva** (meio que dificultou a defesa da vítima) tendem a ser admitidas com mais cautela. **Não afirme a orientação como pacífica** — cheque a jurisprudência atual via `jurisprudencia-stj-stf` e reserve as qualificadoras subjetivas.

## Sustentação na PRONÚNCIA — o terreno mais favorável à acusação (art. 413 CPP)

A **pronúncia** é juízo de **admissibilidade**, não de mérito. Para pronunciar bastam **materialidade** + **indícios suficientes de autoria** (art. 413 CPP). Aqui a acusação tem vantagem estrutural:

- **In dubio pro societate na pronúncia.** Tradicionalmente, **a dúvida sobre o elemento subjetivo (dolo eventual × culpa)** resolve-se **em favor da sociedade**, remetendo a decisão ao **juiz natural da causa — o Conselho de Sentença**. Sustentar que **a definição do animus é competência dos jurados**, não do juiz sumariante. **[ATENÇÃO — VERIFICAÇÃO OBRIGATÓRIA]:** o próprio princípio *in dubio pro societate* na pronúncia foi **questionado/relativizado** em julgados recentes do STF; **confira o estado atual** via `jurisprudencia-stj-stf` antes de invocá-lo como dogma — pode ser necessário reforçar com **standard probatório** (indícios suficientes) em vez do brocardo.
- **Vedação ao excesso de linguagem.** A pronúncia deve ser **sóbria** (art. 413, §1º, CPP): descrever a materialidade e apontar os indícios de autoria **sem** afirmação categórica de que houve dolo — sob pena de **influência indevida sobre os jurados** e nulidade. A acusação pede pronúncia **bem fundamentada, porém contida**.
- **Não usurpar a competência do júri.** Argumento-chave: afastar o dolo eventual na pronúncia (desclassificando para o art. 302 CTB) só se admite quando a **culpa é estreme de dúvida**; havendo **elementos** de assunção do risco, a dúvida vai ao júri (art. 74, §1º, e art. 413 CPP).
- **Manter a imputação diante da tese de desclassificação (art. 419 CPP).** Combater o pedido de desclassificação do juiz sumariante demonstrando que os indícios de dolo eventual **existem** e são **suficientes** — o mérito é dos jurados.

## Teses da acusação × contra-teses da defesa

| Tese da ACUSAÇÃO (esta skill) | Contra-tese da DEFESA (a antecipar/rebater) |
|---|---|
| Embriaguez + velocidade + racha/contramão = **assunção do risco** (art. 18, I) | Embriaguez e velocidade, por si, indicam **culpa** (imprudência), não dolo — o agente **não quis** matar |
| Conjunto de indicadores revela **indiferença** ao resultado (fórmula de Frank) | Agente **confiava** em chegar sem acidente → **culpa consciente** (art. 18, II) |
| Na pronúncia, a dúvida sobre o *animus* vai ao **júri** (competência constitucional) | Deve **desclassificar** (art. 419) para o art. 302 CTB — juízo singular; *in dubio pro reo* também na pronúncia |
| Reiteração e histórico reforçam a **representação e aceitação** do risco | Antecedentes não provam dolo **neste** fato; é *versari in re illicita* vedado |
| A morte era **previsível e aceita**; não houve tentativa de evitá-la | Houve **frenagem/desvio** → prova de que **não** aceitava o resultado (repele o dolo) |
| Cabe **denúncia por dolo eventual** com narrativa dos fatos que o revelam | Denúncia é **inepta** (rótulo sem descrição da assunção do risco) — art. 41 CPP |

> **Réplica-padrão à culpa consciente:** a linha de fratura é **volitiva**. Demonstrar, pelos fatos, que o agente **não tinha base real** para confiar em evitar o resultado (não é confiança **fundada**, mas desprezo): quem dirige embriagado, em altíssima velocidade, em racha e na contramão **não confia** que evitará — **aceita** o que vier. Onde a "confiança" é irracional/temerária, ela deixa de afastar o dolo e se converte em **anuência**.

## Súmulas e jurisprudência (sob o Citation Gate — conferir em `jurisprudencia-stj-stf`)

> **Citation Gate (inegociável).** Este é um dos temas de **maior oscilação** jurisprudencial do Direito Penal brasileiro (STF e STJ já decidiram casos concretos nos **dois sentidos**, a depender dos fatos). **Não cite número de HC/REsp/RE, tema repetitivo ou informativo sem verificação absoluta.** Prefira ensinar a **tese** e o **dispositivo** a arriscar um acórdão.

- **Súmula 191/STJ** *(notória)* — a **pronúncia é causa interruptiva da prescrição**, ainda que o Tribunal do Júri venha a desclassificar o crime. Útil à acusação para afastar prescrição após a pronúncia. *(Confirmar redação e vigência.)*
- **Excesso de linguagem na pronúncia** — orientação consolidada de que a pronúncia com **juízo de certeza/eloquência acusatória** é **nula** por influenciar os jurados (art. 413, §1º, CPP). A acusação deve **pedir contenção**, não excesso. *(Tese consolidada; conferir precedentes concretos.)*
- ***In dubio pro societate*** na pronúncia — **[NÃO VERIFICADO / EM REVISÃO]:** princípio historicamente aplicado, mas **relativizado** em julgados recentes do STF. **Obrigatório conferir o estado atual** antes de usá-lo como fundamento central.
- **Dolo eventual no trânsito (casos concretos)** — **[NÃO VERIFICADO]:** há precedentes de STF/STJ **mantendo** a pronúncia por dolo eventual (embriaguez + velocidade + racha) **e** outros **desclassificando** para culpa. **Nunca** cite um número específico sem checar; sustente pelos **fatos do caso** e pela **teoria**, não por acórdão de memória.

## Erros comuns da acusação (evitar)

- **Denúncia-etiqueta:** afirmar "dolo eventual" sem **narrar os indicadores fáticos** da assunção do risco (risco de inépcia — art. 41 CPP).
- **Presumir dolo da só embriaguez** ou do **resultado grave** (morte). Embriaguez isolada, sem os demais elementos, tende a caracterizar **culpa** (art. 302, hoje com aumento/qualificadora). O dolo eventual pede o **conjunto**.
- **Excesso de linguagem na pronúncia** (afirmar categoricamente o dolo) → **nulidade**. A pronúncia é **sóbria** (art. 413, §1º).
- **Invocar *in dubio pro societate* como dogma** sem checar a jurisprudência atual (foi relativizado).
- **Sustentar qualificadora subjetiva** (motivo torpe/fútil) com dolo eventual sem reservar a controvérsia.
- **Ignorar a distinção volitiva** e responder à defesa só com a gravidade do fato — a réplica correta é sobre **aceitação × confiança**.
- **Citar acórdão de memória** — o tema é oscilante; qualquer número sem verificação é risco (sanção real por citação inventada).

## Checklist da acusação

- [ ] **Polo conferido** — a instituição é de **acusação** (MP/assistente)? Se for defesa, usar `defesa-homicidio-culposo-transito`.
- [ ] **Indicadores fáticos** do dolo eventual **narrados um a um**, cada qual com **fonte de prova**?
- [ ] Denúncia **descreve a assunção do risco** (art. 18, I) e **afasta expressamente** a culpa consciente?
- [ ] Requisitos do **art. 41 CPP** satisfeitos (não é denúncia-etiqueta)?
- [ ] **Laudos** requeridos (alcoolemia, velocidade, necroscópico) e **imagens/testemunhas** arroladas?
- [ ] **Concurso** com arts. 306/308 CTB avaliado, quando cabível?
- [ ] **Qualificadoras** — reservada a controvérsia sobre as **subjetivas** com dolo eventual?
- [ ] Na **pronúncia**: pedido **sóbrio** (sem excesso de linguagem — art. 413, §1º) e fundado em **indícios suficientes**?
- [ ] Argumento de **competência do júri** para definir o *animus* (combater desclassificação do art. 419)?
- [ ] *In dubio pro societate* — **verificado** o estado atual antes de invocar?
- [ ] **Réplica à culpa consciente** pronta (eixo volitivo: aceitação × confiança fundada)?
- [ ] Toda súmula/precedente **passou pelo gate** `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] **Prescrição** — atenção à interrupção pela pronúncia (Súm. 191/STJ, conferida)?

## Lembretes finais

- **Dolo eventual se constrói por fatos**, não por rótulo — narre os **indicadores cumulativos** e as **provas**.
- A fronteira com a culpa consciente é **volitiva**: **aceitação** (dolo) × **confiança fundada em evitar** (culpa).
- **Pronúncia é admissibilidade**, não certeza — peça-a **sóbria** (sem excesso de linguagem) e sustente que o *animus* é do **júri**.
- **Verifique** o estado atual de *in dubio pro societate* e dos precedentes de dolo eventual no trânsito — **tema oscilante**.
- **Nunca** cite acórdão de memória; ensine a tese e o dispositivo.
- **Rascunho sob revisão humana obrigatória.** A responsabilidade pela imputação e pela peça é do **membro do MP / advogado do assistente** — ética por polo: **CNMP** (Ministério Público) e **OAB + Provimento 205/2021** (assistente/advogado). Este material é apoio à preparação, não substitui o juízo funcional.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
