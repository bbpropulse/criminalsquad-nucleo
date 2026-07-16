---
name: eca-execucao-medida-socioeducativa
description: >-
  Use na EXECUÇÃO da medida socioeducativa (Lei 12.594/2012 — SINASE; ECA, arts. 112-125):
  fiscalizar o PIA e a individualização, cobrar a reavaliação periódica (máx. a cada 6 meses — art.
  42 do SINASE), pedir progressão de meio (internação → semiliberdade → meio aberto), impugnar
  regressão e unificação, atacar excesso de prazo (teto de 3 anos e liberação compulsória aos 21 —
  art. 121, §§ 3º a 5º), postular remissão como… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-eca-execucao-medida-socioeducativa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["eca-execucao-medida-socioeducativa", "execucao medida", "medida socioeducativa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Execução de medida socioeducativa (SINASE)

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

Esta skill orienta a **defesa técnica na fase de EXECUÇÃO** da medida socioeducativa — depois de aplicada por sentença, quando o adolescente já cumpre internação, semiliberdade ou medida em meio aberto (Lei 12.594/2012 — SINASE; ECA, arts. 112-125). O que se litiga aqui é **como a medida é cumprida, reavaliada, progredida, regredida, unificada e extinta** — não a autoria nem a existência do ato infracional, que moram na fase de conhecimento. Ela **complementa — sem duplicar —** a skill `eca-defesa-ato-infracional`: lá está o rito de apuração (arts. 171-190), a internação **provisória** de 45 dias, a remissão como saída do processo e a impugnação da sentença; **aqui** está a vida da medida **já imposta** e os incidentes que a movem. A oitiva especial de criança vítima segue na skill `depoimento-especial-lei-13431` — outro microssistema, outro polo.

> **Lição central:** na execução socioeducativa, a liberdade se conquista **por passagem de tempo qualificada**, não por prazo fixo. A medida **não tem prazo determinado** (ECA, art. 121, §2º) — mas está cercada por travas que a defesa aciona em ciclo: (1) a **reavaliação obrigatória a cada 6 meses no máximo** (art. 42 do SINASE) é a janela recorrente para pedir **progressão** ou **extinção**; (2) o **teto de 3 anos** de internação e a **liberação compulsória aos 21 anos** (art. 121, §§ 3º e 5º) são limites absolutos; (3) manter a internação exige **fundamentação concreta e atual** — a mera reprovação do ato originário não a sustenta indefinidamente. Cada reavaliação que se aproxima é uma peça a protocolar, não uma data a esperar.

> **Princípios reitores:** brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento (CF, art. 227, §3º, V; ECA, art. 121); prioridade da medida **menos gravosa** e em **meio aberto** (SINASE, art. 35, VI e VII); **defesa técnica assegurada em todos os atos** do processo de execução (SINASE, art. 49, IV) — inclusive na reavaliação, na regressão e na apuração de falta disciplinar em unidade.

## O instituto e a base legal

| Dispositivo | O que garante / exige |
|---|---|
| **ECA, art. 121, §2º** | A internação **não comporta prazo determinado**; mantida enquanto necessária, com reavaliação periódica |
| **ECA, art. 121, §3º** | **Prazo máximo de internação: 3 anos** — teto absoluto, insuperável por gravidade ou reiteração |
| **ECA, art. 121, §4º** | Atingido o teto, o adolescente é **liberado**, posto em semiliberdade ou em liberdade assistida |
| **ECA, art. 121, §5º** | **Liberação compulsória aos 21 anos** — limite etário improrrogável |
| **ECA, art. 122** | A internação só se sustenta nas três hipóteses taxativas (violência/grave ameaça; reiteração grave; descumprimento reiterado) — vale também na execução como teto qualitativo |
| **ECA, art. 123, p.ú.** | Durante a internação são **obrigatórias** atividades pedagógicas — sua ausência é argumento de ineficácia da medida |
| **ECA, art. 121, §2º + SINASE, art. 42** | **Reavaliação obrigatória, no máximo a cada 6 meses** (a trava já está no próprio ECA, art. 121, §2º — reforçada pelo SINASE, art. 42); a autoridade judiciária pode fixar prazo menor |
| **SINASE, arts. 52-59** | **PIA — Plano Individual de Atendimento**: base da individualização; sua ausência/genericidade é vício |
| **SINASE, art. 43** | **Substituição/progressão e regressão** da medida por decisão fundamentada, ouvida a defesa |
| **SINASE, art. 45** | Ao aplicar nova medida por outro ato, o juiz **considera a medida em curso** e **veda a regressão** de internado por ato mais leve que o anterior — trava contra regressão automática |
| **SINASE, art. 46** | Hipóteses de **extinção**: morte; realização da finalidade; aplicação de pena privativa de liberdade a ser executada; condição de doença grave; demais previstas em lei |
| **SINASE, art. 35** | Princípios da execução: legalidade, excepcionalidade, prioridade a medidas em meio aberto, mínima intervenção, proporcionalidade |
| **SINASE, art. 49** | **Direitos do adolescente na execução** — entre eles ser incluído em programa, receber visitas, peticionar e ter **defesa técnica** por todo o processo |
| **ECA, art. 188** | **Remissão como forma de extinção** ou suspensão do processo — cabível também no curso da execução como via extintiva |

## Mapa da execução — situação concreta → providência → onde aprofundar

| Situação | Providência da defesa | Base / cross-ref |
|---|---|---|
| Medida imposta, execução iniciada | Exigir instauração do **PIA** e do processo de execução autônomo, com guia | SINASE, arts. 39, 52-59 |
| PIA ausente, genérico ou não elaborado no prazo | Impugnar a individualização; requerer sua confecção com participação do adolescente e da família | SINASE, arts. 53-56 |
| Aproximação dos 6 meses de medida | Protocolar pedido de **reavaliação** com prova de evolução (relatórios, escola, trabalho) → progressão ou extinção | SINASE, art. 42 |
| Adolescente evoluiu na internação | Pedir **progressão** para semiliberdade ou meio aberto (não há salto obrigatório etapa a etapa) | SINASE, art. 43; ECA, art. 122, §2º |
| Regressão decretada (ex.: falta, evasão) | Exigir **oitiva prévia**, defesa técnica e fundamentação; atacar regressão automática | SINASE, arts. 43, 45; Súmula 265/STJ |
| Pluralidade de medidas por atos diversos | Pedir **unificação**, respeitando o teto de 3 anos e a vedação de regressão por ato mais leve | SINASE, art. 45; ECA, art. 121, §3º |
| Internação além de 3 anos ou próxima disso | Requerer **liberação/progressão compulsória** (art. 121, §§3º e 4º) | ECA, art. 121, §§3º-4º |
| Adolescente completa 21 anos | Requerer **liberação compulsória** imediata | ECA, art. 121, §5º |
| Finalidade da medida alcançada | Postular **extinção** por realização da finalidade ou **remissão extintiva** | SINASE, art. 46, II; ECA, art. 188 |
| Superveniência de pena (condenação como adulto) | Requerer extinção da MSE; discutir detração/unificação com o processo criminal | SINASE, art. 46, III; ver `execucao-unificacao-penas` |
| Decisão desfavorável no incidente | **Agravo** (rito do CPP para execução — art. 197 ECA remete; conferir) | ver `agravo-em-execucao` |

## Teses e frentes defensivas

**1. Reavaliação não é formalidade — é a janela de progressão.** O art. 42 do SINASE fixa o **teto de 6 meses**, não um piso: a defesa pode e deve provocar reavaliação **antecipada** sempre que houver evolução. Reavaliação que apenas "mantém a medida" repetindo os fundamentos da sentença, sem análise concreta da evolução e sem relatório atualizado da equipe técnica, é decisão **sem fundamentação idônea** (CF, art. 93, IX). Instrua o pedido com o que mudou: frequência escolar, conclusão de etapas do PIA, trabalho, vínculo familiar, parecer favorável da equipe.

**2. A internação não pode se eternizar pela gravidade do ato originário.** A internação é medida **sem prazo determinado** justamente porque sua manutenção depende de necessidade **atual** — não da reprovação do ato que a originou. Insista: a gravidade abstrata do ato análogo já foi valorada na aplicação; mantê-la meses depois exige **fato novo** que demonstre a persistência da necessidade. **Súmula 492/STJ:** ato análogo a tráfico, por si só, não conduz à internação — raciocínio que se projeta na execução contra a manutenção da medida.

**3. Progressão não exige degrau a degrau.** Nada obriga a passagem obrigatória internação → semiliberdade → meio aberto quando a evolução justifica salto maior. Sustente a **prioridade da medida menos gravosa e em meio aberto** (SINASE, art. 35, VI e VII) e o art. 122, §2º (havendo medida adequada diversa, a internação é vedada).

**4. Regressão só com contraditório, oitiva e fundamentação.** A regressão de medida (ou a internação-sanção por descumprimento — ECA, art. 122, III, §1º) exige **oitiva prévia do adolescente** (**Súmula 265/STJ**), defesa técnica e decisão motivada. Descumprimento **justificado** (falta de vaga em programa, doença, ausência de oferta pedagógica pelo Estado — art. 123, p.ú.) **não** autoriza regressão: o Estado não pode punir o adolescente pela própria falha na oferta da medida. A internação-sanção tem teto de **3 meses** (art. 122, §1º). O art. 45, §2º do SINASE **veda** regredir internado para internação por ato mais leve que o anterior.

**5. Teto de 3 anos e liberação aos 21 são absolutos.** Nenhuma gravidade, reiteração ou novo ato praticado durante a internação supera o teto de 3 anos (art. 121, §3º) nem a liberação compulsória aos 21 (art. 121, §5º). Atingido qualquer limite, a liberação/progressão é **direito** — não faculdade do juízo.

**6. Extinção e remissão extintiva.** Alcançada a finalidade da medida (art. 46, II do SINASE), postule a **extinção**. A **remissão** do art. 188 do ECA também opera como forma de extinção no curso da execução — útil quando a manutenção da medida perdeu sentido socioeducativo. A **superveniência da maioridade (18 anos) não extingue** a medida — **Súmula 605/STJ**: a maioridade não interfere na medida em curso (só os 21 liberam). Não desperdice petição pedindo extinção pelos 18 anos.

## Procedimento, incidentes e prazos

- **Processo de execução autônomo:** a execução da MSE corre em **autos próprios**, com guia de execução, PIA e reavaliações periódicas registradas (SINASE, arts. 38-39 e 52-59). Peticione nesses autos, não nos autos de conhecimento arquivados.
- **Competência:** **Vara da Infância e da Juventude** (ou vara com competência cumulada) do local de cumprimento da medida — **nunca** a vara criminal comum. A execução acompanha a unidade de cumprimento; transferência de unidade pode deslocar a competência (conferir a regra do tribunal local).
- **Legitimidade para provocar incidentes:** defesa, MP, direção do programa/entidade e o próprio adolescente (SINASE, art. 49, direito de peticionar).
- **Recurso — via em disputa:** o ECA (art. 198) sujeita os recursos ao **rito do estatuto processual (CPC)** com **prazo de 10 dias** e **independência de preparo**; parte da jurisprudência, contudo, importa para a execução socioeducativa o **agravo em execução** próprio da execução penal (art. 197 da LEP — Lei 7.210/84), por simetria com a LEP. **Divergência real e não pacificada: NÃO afirme a via nem o prazo de memória — confirme o entendimento atual do STJ/STF via agente `jurisprudencia-stj-stf` e a redação vigente dos arts. 197-198 do ECA via `lei-e-sumula`, marcando [NÃO VERIFICADO]** antes de escolher o recurso. Na dúvida, protocole pelo **prazo mais curto**. A mecânica da peça, se for o caso do agravo, está em `agravo-em-execucao` (adapte o vocabulário: "adolescente/medida", não "apenado/pena").
- **Prazos penais contam-se pelo CPP, art. 798, §1º** (exclui-se o dia do começo, inclui-se o do vencimento) — explicite isso ao calcular o marco dos 6 meses da reavaliação e prazos recursais. **Defensoria tem prazo em dobro e intimação pessoal** (LC 80/94); advogado constituído, não.
- **Pegadinhas de preclusão/competência:**
  - Deixar a **reavaliação passar em branco** sem instruir o pedido = perder a janela útil de progressão; o silêncio favorece a manutenção da medida.
  - Atacar a **autoria/mérito do ato** na execução é **inadequação de via** — isso precluiu na fase de conhecimento (`eca-defesa-ato-infracional`); na execução discute-se cumprimento, não culpa.
  - **Falta disciplinar em unidade** apurada sem procedimento e sem defesa técnica é nula — exija contraditório antes de qualquer consequência (regressão, perda de benefício).
  - **Transferência de unidade** para longe da família fere o direito à convivência familiar (ECA, art. 124, VI) e pode ser impugnada; não a trate como ato meramente administrativo.
  - **Vocabulário:** não existe "pena", "regime", "progressão de regime", "livramento condicional", "réu", "apenado" — existem **medida socioeducativa, progressão/substituição de medida, meio aberto/semiliberdade/internação, adolescente e cumprimento**. Errar o vocabulário trai o despreparo e enfraquece a peça.

## Antes de protocolar

- [ ] Petição está nos **autos de execução** (guia + PIA + reavaliações), não nos autos de conhecimento?
- [ ] Endereçamento à **Vara da Infância e da Juventude** do local de cumprimento?
- [ ] Vocabulário socioeducativo em toda a peça (medida/adolescente/progressão de medida — nunca pena/regime/apenado)?
- [ ] **Reavaliação** conferida no calendário (marco de 6 meses pelo CPP 798, §1º) e pedido **instruído** com prova de evolução (relatórios, escola, trabalho, vínculo)?
- [ ] **PIA** verificado — existência, tempestividade e efetiva individualização?
- [ ] Manutenção da internação atacada por **falta de fundamentação atual** (não a gravidade do ato originário)?
- [ ] Progressão pedida com **prioridade ao meio aberto** (SINASE, art. 35; ECA, art. 122, §2º), sem exigência de degrau a degrau?
- [ ] Regressão/internação-sanção: **oitiva prévia** (Súmula 265/STJ), defesa técnica, teto de 3 meses e vedação do art. 45, §2º conferidos?
- [ ] Teto de **3 anos** (art. 121, §3º) e **liberação aos 21** (art. 121, §5º) verificados como limites absolutos?
- [ ] Extinção/remissão avaliadas (SINASE, art. 46; ECA, art. 188); **não** pedida extinção pelos 18 anos (Súmula 605/STJ)?
- [ ] Via recursal (agravo — prazo e rito) confirmada via `lei-e-sumula` e `jurisprudencia-stj-stf`; na dúvida, prazo mais curto?
- [ ] Súmulas e dispositivos conferidos; precedentes marcados **[NÃO VERIFICADO]** até o gate; **sigilo** preservado (iniciais, arts. 143 e 247)?

## Lembretes finais

- **A reavaliação é a alavanca:** quem não protocola pedido instruído a cada janela de 6 meses assiste à medida se prolongar por inércia. A progressão é conquistada, não concedida de ofício.
- **A internação não se sustenta pela memória do ato:** exija sempre necessidade **atual e concreta** — a gravidade abstrata já foi valorada na aplicação.
- **Não brigue com o que precluiu:** autoria e mérito ficaram na fase de conhecimento; na execução discute-se cumprimento, progressão e extinção.
- **Vocabulário socioeducativo, não penal:** "medida", "adolescente", "progressão de medida", "meio aberto" — jamais "pena", "regime", "apenado".
- **Conformidade transversal:** toda entrega é **rascunho técnico para revisão humana obrigatória**; aplicar sigilo reforçado (segredo de justiça e LGPD) e o gate `verificacao-citacoes`.

## Apoie-se em

- **Best-practice `peticao-criminal`** — arquitetura da petição/incidente de execução: endereçamento, qualificação, fundamentação e pedido em cascata.
- **Skill `eca-defesa-ato-infracional`** — a **fase de conhecimento** (apuração do ato, internação provisória de 45 dias, remissão como saída do processo, sentença, HC do adolescente); esta skill começa **onde aquela termina** — na medida já imposta.
- **Skill `depoimento-especial-lei-13431`** — oitiva de criança/adolescente vítima (Lei 13.431/2017); outro microssistema e outro polo, sem sobreposição com a execução da MSE.
- **Skill `agravo-em-execucao`** — mecânica da peça recursal; adaptar o vocabulário ao rito socioeducativo (medida/adolescente, não pena/apenado) e confirmar rito e prazo antes de manejar.
- **Skill `execucao-unificacao-penas`** — apenas para o cruzamento quando sobrevém **pena de adulto** que extingue a MSE (SINASE, art. 46, III); a unificação de **medidas** entre si é do SINASE, art. 45, tratada nesta skill.
- **Agente `lei-e-sumula`** — redação vigente dos arts. 42-46 do SINASE e arts. 121-123, 197-198 do ECA (numeração e rito recursal mudam).
- **Agente `jurisprudencia-stj-stf`** — estado atual sobre reavaliação, regressão automática, unificação e via recursal; sempre com número e ementa reais.
- **Agente `verificador-citacoes`** (best-practice `verificacao-citacoes`) — **gate obrigatório**: nenhuma súmula, precedente ou dispositivo citado de memória; o que não confirmar sai marcado **[NÃO VERIFICADO]**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
