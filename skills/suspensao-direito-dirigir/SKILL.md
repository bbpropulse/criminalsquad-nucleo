---
name: suspensao-direito-dirigir
description: >-
  Use para defender contra a suspensão ou proibição de obter a permissão/habilitação para dirigir
  nos crimes de trânsito — como PENA (CTB arts. 292-293 cumulada; CP art. 47, III, interdição
  temporária de direitos) e como MEDIDA CAUTELAR no curso do IP/processo (CTB art. 294, com recurso
  em sentido estrito pelo parágrafo único). Cobre requisitos e proporcionalidade da cautelar, prazo
  mínimo/máximo e detração, e a fronteira… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, transito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-suspensao-direito-dirigir"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["suspensao-direito-dirigir", "suspensao direito", "direito dirigir"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Suspensão/proibição do direito de dirigir (defesa)

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

Esta skill entrega a **defesa da liberdade de conduzir** contra as duas frentes penais que atacam a CNH: a **pena** de suspensão ou proibição de obter a permissão/habilitação (CTB arts. 292-293; CP art. 47, III) e a **medida cautelar** homônima decretável já no inquérito ou no curso do processo (CTB art. 294). O produto é um **roteiro de impugnação da cautelar + módulo dosimétrico da pena de suspensão** para acoplar à peça da fase (RESE, resposta à acusação, memoriais, apelação). A prova do estado etílico e a auditoria do etilômetro moram na skill `impugnacao-prova-embriaguez`; a moldura estratégica do nicho (culpa × dolo eventual, perdão judicial, JECRIM, despenalizadores) mora na best-practice `defesa-crimes-transito`. Aqui se aprofunda **só o que acontece com a habilitação** — a sanção que o cliente sente todos os dias.

> **Lição central:** a suspensão do direito de dirigir tem **duas faces com regimes distintos** que a defesa precisa separar cirurgicamente. Como **pena**, é sanção autônoma que exige fundamentação própria na dosimetria — não pode ser imposta "no automático" nem no piso máximo por reflexo. Como **cautelar** (art. 294), é medida excepcional que exige demonstração concreta de **necessidade** (o *periculum*): sem risco atual e demonstrado da manutenção da direção, a cautelar é desproporcional e ataca-se por RESE.

## O instituto e a base legal

O CTB (Lei 9.503/97) tratou a suspensão do direito de dirigir como sanção **penal específica** dos crimes de trânsito, distinta da administrativa. Fixe cada dispositivo:

| Dispositivo | O que garante/exige |
|---|---|
| **CTB art. 292** | A suspensão ou a proibição de obter a permissão/habilitação pode ser imposta **isolada ou cumulativamente** com outras penas, quando o tipo a prevê |
| **CTB art. 293** | Prazo da penalidade: **2 meses a 5 anos**; ao transitar em julgado, o condenado entrega a CNH ao juízo em 48h; o prazo **só corre** com a entrega (art. 293, §§1º-2º) |
| **CTB art. 294** | **Cautelar**: em qualquer fase do IP ou da ação penal, "havendo necessidade para a garantia da ordem pública", o juiz pode decretar, em decisão **motivada**, a suspensão ou a proibição de obter a habilitação |
| **CTB art. 294, parágrafo único** | Da decisão que decreta (ou indefere) a cautelar cabe **recurso em sentido estrito, sem efeito suspensivo** |
| **CP art. 47, III** | A **suspensão de autorização ou de habilitação para dirigir veículo** é modalidade de **interdição temporária de direitos** (pena restritiva de direitos, via da substituição do CP art. 44). Cabimento restrito aos **crimes culposos de trânsito** — confira a **Súmula 182/STJ** e sua atualidade via agente `lei-e-sumula` [NÃO VERIFICADO] |
| **CTB arts. 302, 303, 306, 308, 309, 311** | Tipos que **cominam** a suspensão cumulada (homicídio e lesão culposos no trânsito, embriaguez, racha, direção sem habilitação com perigo etc.) |
| **CTB arts. 256-263** | Penalidades **administrativas** (advertência, multa, suspensão, cassação) aplicadas pelo **DETRAN/CETRAN** — competência e regime **próprios**, que não se confundem com a esfera penal |

**A distinção que decide a peça:** a suspensão **penal** é imposta por **juiz criminal** (na sentença, como pena; ou no curso, como cautelar do art. 294). A suspensão/cassação **administrativa** é ato do **órgão executivo de trânsito** (arts. 256-263), com processo administrativo próprio e recurso ao CETRAN/CONTRAN. São instâncias **independentes**: não se compensam automaticamente, não se recorrem no mesmo lugar, e argumento de uma não absolve na outra. Errar a porta é perder o prazo.

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência imediata | Onde aprofundar |
|---|---|---|
| Juiz decretou cautelar do art. 294 no IP/processo | **RESE** (CTB art. 294, § único) atacando o *periculum* e a proporcionalidade | Seções "Cautelar" e "RESE" abaixo |
| Denúncia recebida com pedido de suspensão | Resposta à acusação (CPP 396-A): impugnar justa causa e antecipar tese sobre a pena de suspensão | `defesa-crimes-transito` (moldura) |
| Sentença condenatória fixou suspensão no piso alto ou sem fundamentar | **Apelação** — nulidade da dosimetria da suspensão | Seção "Dosimetria" + agente `dosimetria-pena` |
| Cliente quer voltar a dirigir durante o processo | Avaliar detração e substituição; requerer revogação/atenuação da cautelar por fato novo | Seções "Prazo/detração" e "Cautelar" |
| Órgão de trânsito instaurou processo administrativo paralelo | Separar as esferas; defesa administrativa é **outra** peça, outro foro | Seção "Penal × administrativa" |

## A cautelar do art. 294 — o campo de batalha da defesa

A cautelar é a frente mais urgente porque atinge o cliente **antes** de qualquer condenação. Ataque-a por **falta de pressuposto**, não por retórica:

1. **Ausência de *periculum* concreto.** O art. 294 exige "necessidade para a garantia da ordem pública" — não basta a gravidade abstrata do crime. Exija do juízo a demonstração de **risco atual** da manutenção da direção (reincidência específica, embriaguez habitual, fuga, direção após o fato). Réu primário, com um único evento e habilitação regular, não oferece o risco que a cautelar pressupõe.
2. **Fundamentação idônea (CF art. 93, IX).** Decisão que apenas repete a letra da lei ("presentes os requisitos, decreto a suspensão") é **nula por falta de motivação**. Cautelar não se fundamenta em clichê.
3. **Proporcionalidade e adequação (CPP art. 282, aplicável por analogia).** A suspensão deve ser **necessária e adequada**, sem alternativa menos gravosa. Se a direção é o **meio de sustento** do cliente (motorista, entregador, representante), o gravame econômico irreversível pesa contra a medida — sustente a desproporção.
4. **Provisoriedade e revisão.** A cautelar não é definitiva: **fato novo** (encerramento da instrução, prova favorável, mudança da situação) autoriza pedido de revogação ou atenuação a qualquer tempo (lógica do CPP art. 282, §5º).
5. **Contaminação da origem.** Se a materialidade repousa em prova ilícita/imprestável (etilômetro vencido, sinais genéricos), a cautelar cai por arrastamento — o vetor probatório está na skill `impugnacao-prova-embriaguez`.

## RESE — o recurso próprio (e suas armadilhas)

- **Cabimento e prazo:** contra a decisão que decreta (ou indefere) a cautelar cabe **recurso em sentido estrito** (CTB art. 294, § único), prazo de **5 dias** para interpor (CPP art. 586) e **2 dias** para as razões (CPP art. 588). Contagem processual **exclui o dia do começo** (CPP art. 798, §1º) e corre **em dobro** para a Defensoria Pública (prerrogativa de intimação pessoal e prazo em dobro da LC 80/94 — art. 44, I / 89, I / 128, I conforme o ramo; confira o dispositivo aplicável via `lei-e-sumula`).
- **Sem efeito suspensivo:** o próprio parágrafo único nega efeito suspensivo. Para sustar a suspensão de imediato, avalie o **efeito suspensivo ativo** via petição ao relator (medida cautelar no bojo do recurso) ou, subsidiariamente, o **mandado de segurança**. O cabimento do **HC** é controvertido — parte da jurisprudência não o admite para discutir suspensão da habilitação por não atingir diretamente a liberdade de locomoção ambulatorial; **confirme o entendimento atual via `jurisprudencia-stj-stf` [NÃO VERIFICADO]** antes de eleger essa via.
- **Juízo de retratação:** o RESE admite retratação do próprio juiz (CPP art. 589) — endereça-se a ele antes de subir. Peça bem fundamentada aumenta a chance de reforma na origem.
- **Não confunda o recurso.** Suspensão imposta na **sentença** como **pena** desafia **apelação** (CPP art. 593, I), não RESE. RESE é para a **cautelar** incidental. Errar a via arrisca não conhecimento.

## A pena de suspensão — dosimetria própria (art. 293)

Quando imposta como **pena** (nos tipos que a cominam), a suspensão tem **dosimetria autônoma**, que não segue automaticamente a pena privativa:

- **Prazo:** de **2 meses a 5 anos** (art. 293). O ponto de partida é o **mínimo**; a elevação exige fundamentação nas circunstâncias do art. 59 do CP, **específica para a suspensão**. Piso alto sem motivar é nulidade — trabalhe com o agente `dosimetria-pena`.
- **Fundamentação vinculada, não reflexa.** Fixar a suspensão "no mesmo patamar da pena corporal" é erro: são sanções distintas, com fins distintos. Exija do juízo (ou ataque na apelação) a motivação **própria** do prazo da suspensão.
- **Proporcionalidade concreta.** Prazos longos para réu primário, sem reincidência específica em trânsito, contrariam a individualização (CF art. 5º, XLVI). Aponte a desproporção.
- **Substituição (CP arts. 44 e 47, III).** Nos crimes **culposos** de trânsito, a suspensão da habilitação figura entre as restritivas de direitos substitutivas (Súmula 182/STJ — confira via `lei-e-sumula` [NÃO VERIFICADO]); discuta o cabimento e o **regime de cumprimento** favorável.

## Prazo, entrega da CNH e detração

- **Termo inicial (art. 293, §§1º-2º):** transitada em julgado a condenação, o réu entrega a CNH em **48h**; o prazo da penalidade **só começa a correr com a entrega**. Enquanto não entrega, não corre — informe o cliente para não "perder" tempo de suspensão dirigindo irregularmente (o que ainda expõe ao art. 307 do CTB).
- **Detração da cautelar (tese).** Sustente que o **tempo já cumprido sob a cautelar** do art. 294 seja **abatido** do prazo da pena de suspensão, por aplicação **analógica** da lógica detrativa do CP art. 42 (que trata literalmente da prisão provisória/internação) — a extensão à pena de suspensão da habilitação é **construção doutrinária/jurisprudencial**, não regra expressa; **confirme o entendimento atual via agente `jurisprudencia-stj-stf` [NÃO VERIFICADO]** antes de afirmar como certo. Requeira o desconto expressamente — é ganho concreto que passa despercebido.
- **Descumprir a suspensão é crime.** Dirigir durante o período de suspensão configura o **art. 307 do CTB** — oriente o cliente e não deixe a violação nascer de desinformação.

## Penal × administrativa — não confunda competências

| Eixo | Penal (esta skill) | Administrativa (arts. 256-263) |
|---|---|---|
| Quem decide | **Juiz criminal** (sentença ou cautelar art. 294) | **DETRAN/CETRAN** (órgão executivo) |
| Base | CTB arts. 292-294; CP art. 47, III | CTB arts. 256-263 (suspensão/cassação) |
| Recurso | RESE (cautelar) / apelação (pena) | Recurso administrativo ao CETRAN/CONTRAN |
| Efeito recíproco | Independentes — não se compensam nem se recorrem no mesmo foro | Independentes |

Use a independência **a favor**: a absolvição penal não apaga automaticamente a sanção administrativa, mas a **administrativa não presume** culpa penal. Não misture os planos na peça, e não deixe o prazo de um correr enquanto trata do outro. A defesa administrativa é **outra** peça — não a redija dentro da criminal.

## Teses típicas

| Tese | Fundamento | Cuidado |
|---|---|---|
| Cautelar sem *periculum* concreto → revogação | CTB art. 294 (necessidade) + CF 93, IX | Aponte a ausência de risco atual, não só a primariedade |
| Cautelar desproporcional (meio de sustento) | Proporcionalidade; CPP 282 por analogia | Junte prova de que dirigir é a fonte de renda |
| Decisão que só repete a lei é nula | CF art. 93, IX | Cite o trecho genérico da decisão atacada |
| Suspensão-pena no piso alto sem motivar | CTB art. 293 + CP art. 59 | Dosimetria própria; acione `dosimetria-pena` |
| Detração do tempo de cautelar (tese) | CP art. 42 por **analogia** + CTB art. 294 | Não é regra expressa; confirme via `jurisprudencia-stj-stf` [NÃO VERIFICADO] |
| Prazo só corre com a entrega da CNH | CTB art. 293, §§1º-2º | Orientar o cliente para não incorrer no art. 307 |
| Substituição pela suspensão da habilitação (art. 47, III) | CP arts. 44 e 47, III; Súmula 182/STJ | Cabimento restrito aos crimes **culposos** de trânsito; confira a súmula via `lei-e-sumula` [NÃO VERIFICADO] |
| Independência das esferas | CTB arts. 256-263 vs. 292-294 | Não pedir compensação automática entre elas |

## Erros comuns e pegadinhas

- **Recorrer pela via errada.** Cautelar (art. 294) → **RESE**; pena na sentença → **apelação**. Confundir arrisca não conhecimento e trânsito em julgado da suspensão.
- **Perder o prazo do RESE.** 5 dias para interpor, 2 para razões (CPP 586/588); contagem exclui o dia do começo (CPP 798, §1º). Não deixe a ausência de efeito suspensivo virar desânimo — cabe pleitear efeito suspensivo ativo (ou MS) em paralelo; o HC é via controvertida (confira `jurisprudencia-stj-stf` [NÃO VERIFICADO]).
- **Tratar a cautelar como definitiva.** Ela é revisível a qualquer tempo por fato novo — não abandone o cliente após o indeferimento inicial.
- **Aceitar dosimetria reflexa da suspensão.** Prazo da suspensão colado ao da pena corporal, sem motivação própria, é nulidade a explorar.
- **Esquecer a detração.** Sustente que o tempo de cautelar cumprido abata a pena de suspensão (tese por analogia ao CP art. 42; confira `jurisprudencia-stj-stf` [NÃO VERIFICADO]) — omissão custa meses ao cliente.
- **Misturar penal e administrativo.** Argumento do processo do DETRAN não absolve no juízo criminal, e vice-versa; e cada esfera tem seu prazo e seu foro.
- **Não avisar sobre o art. 307.** Cliente que dirige durante a suspensão comete novo crime — a orientação é dever da defesa.
- **Invocar precedente de memória.** Todo entendimento de STJ/STF sobre requisitos da cautelar do art. 294, detração e limites da suspensão-pena deve ser **pesquisado via agente `jurisprudencia-stj-stf` e marcado [NÃO VERIFICADO]** até o gate de citações aprovar. Nunca invente número de acórdão.

## Antes de protocolar

**Cautelar / RESE:**
- [ ] A decisão demonstra *periculum* concreto ou apenas repete a lei?
- [ ] Proporcionalidade/adequação enfrentadas (meio de sustento, alternativa menos gravosa)?
- [ ] Via correta escolhida (RESE para cautelar; apelação para pena)?
- [ ] Prazo do RESE calculado (5+2 dias; CPP 798, §1º; dobro Defensoria)?
- [ ] Avaliado efeito suspensivo ativo / MS (e o cabimento controvertido do HC) diante da ausência de efeito suspensivo?

**Pena de suspensão:**
- [ ] Prazo da suspensão tem fundamentação **própria** (art. 293 + art. 59)?
- [ ] Detração do tempo de cautelar requerida como **tese** (CP art. 42 por analogia; entendimento confirmado via `jurisprudencia-stj-stf`)?
- [ ] Substituição pela suspensão da habilitação (CP art. 47, III) avaliada nos crimes **culposos** de trânsito (Súmula 182/STJ, conferida via `lei-e-sumula`)?
- [ ] Cliente orientado: prazo só corre com a entrega da CNH; dirigir suspenso = art. 307?

**Esferas e citações:**
- [ ] Penal e administrativa separadas (foro, prazo, peça corretos)?
- [ ] Artigos e súmulas conferidos via `lei-e-sumula`; precedentes via `jurisprudencia-stj-stf` e marcados [NÃO VERIFICADO] até o gate?

## Lembretes finais

- A entrega é **rascunho técnico para revisão humana obrigatória** — nenhuma peça vai a protocolo sem revisão final do(a) profissional.
- A cautelar atinge o cliente **hoje**: priorize a urgência (RESE/HC) sem sacrificar a fundamentação.
- Separe sempre penal e administrativo — a maioria dos erros nasce da confusão de competências.
- Precedente nenhum entra sem verificação; a lei e a súmula, confira o número.

## Apoie-se em

- **BP `defesa-crimes-transito`** — playbook do nicho (culpa × dolo eventual, perdão judicial, JECRIM, despenalizadores do art. 291 CTB); esta skill aprofunda o que ocorre com a habilitação.
- **BP `peticao-criminal`** — estrutura, endereçamento e técnica da peça (RESE, resposta à acusação, apelação) onde o módulo será embutido.
- **Skill `impugnacao-prova-embriaguez`** — auditoria do etilômetro/exame de sangue/sinais notórios; a materialidade frágil derruba a cautelar por arrastamento.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima aplicado à peça final.
- **Agente `dosimetria-pena`** — fixação fundamentada do prazo da suspensão-pena (art. 293) e da detração.
- **Agente `lei-e-sumula`** — conferência de artigos do CTB/CP e súmulas antes de citar.
- **Agente `jurisprudencia-stj-stf`** — pesquisa do entendimento atual (requisitos do art. 294, detração, limites da suspensão-pena); resultado entra como [NÃO VERIFICADO] até o gate.
- **Agente `verificador-citacoes`** — gate obrigatório: nenhuma súmula, precedente ou tese vai à peça sem verificação (há sanção real por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça final (RESE, resposta à acusação, apelação, memoriais), aplique SEMPRE a skill `redacao-persuasiva-criminal` — teoria do caso coerente, narrativa dos fatos, subsunção explícita dos requisitos (ou de sua ausência) e persuasão dirigida ao pedido de revogação/atenuação da suspensão.
