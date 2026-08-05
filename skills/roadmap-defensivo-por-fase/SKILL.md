---
name: roadmap-defensivo-por-fase
description: >-
  Use ao montar o plano de defesa ao longo de TODO o processo — o calendário estratégico que mapeia,
  fase a fase (investigação, recebimento, resposta, instrução, sentença, recursos, execução), quais
  atos praticar, prazos-chave, janelas de oportunidade e pontos de decisão no rito comum
  ordinário/sumário e sumaríssimo. Não executa nenhuma peça: orquestra as skills de cada fase e
  evita a atuação reativa peça a peça. Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-roadmap-defensivo-por-fase"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["roadmap-defensivo-por-fase", "roadmap defensivo", "defensivo fase"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Roadmap Defensivo por Fase do Processo (CPP, arts. 394-405 — rito comum)

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

Esta skill é o **calendário estratégico da defesa**: uma visão macro que percorre o processo penal do começo ao fim — **investigação → recebimento da denúncia → resposta → instrução (AIJ) → alegações finais → sentença → recursos → execução** — e responde, em cada marco, três perguntas: **(1) que atos praticar agora, (2) qual a janela e o prazo, (3) que decisão estratégica tomar aqui.** Ela **não redige peça alguma**: aponta *quando* e *por que* acionar cada skill especializada, para o escritório deixar de atuar reativamente e passar a antecipar movimentos.

> **Lição central:** processo penal é **jogo de janelas que precluem**. A maioria das derrotas evitáveis não vem de tese fraca, mas de **oportunidade perdida** — a diligência não requerida antes de precluir, o incidente não suscitado no momento próprio, a preliminar não arguida na resposta, a ANPP não negociada antes da instrução, o quesito/protesto não consignado em ata. **Mapeie a linha do tempo inteira ANTES de agir na primeira peça** e trabalhe de trás para frente a partir do resultado desejado.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 394-405 do CPP (rito comum) e dos marcos do rito — em especial art. 396/396-A (resposta), art. 400 (ordem da AIJ) e art. 403 (alegações finais). Súmulas, temas repetitivos/de repercussão geral e *overruling* mudam com frequência; **nenhum precedente entra na estratégia sem passar pela skill `jurisprudencia-stj-stf`**. Institutos como ANPP (Lei 13.964/19), colaboração premiada e cadeia de custódia (arts. 158-A a 158-F) têm jurisprudência viva — reconfira antes de decidir.

## Base legal (âncoras)

- **CPP, arts. 394 a 405** — rito comum: define **ordinário** (pena máxima ≥ 4 anos), **sumário** (< 4 anos) e a aplicação subsidiária a procedimentos especiais.
- **CPP, art. 396 e 396-A** — recebimento da denúncia/queixa e **resposta à acusação** (10 dias): preliminares, documentos, testemunhas (até 8/5).
- **CPP, art. 397** — **absolvição sumária** (as 4 hipóteses).
- **CPP, art. 399 e 400** — designação e **audiência de instrução e julgamento**; **ordem da AIJ** (ofendido → testemunhas de acusação → de defesa → esclarecimentos periciais → acareações/reconhecimento → **interrogatório por último**).
- **CPP, art. 402 e 403** — diligências ao fim da instrução (art. 402) e **alegações finais** (orais em 20 min ou memoriais em 5 dias, art. 403, §3º).
- **Lei 9.099/95** — rito **sumaríssimo** (JECrim): infrações de menor potencial ofensivo (pena máx. ≤ 2 anos), composição civil, **transação penal**, suspensão condicional do processo.
- **Marcos transversais:** IP e controle de legalidade (CPP arts. 4º-23); ANPP (CPP art. 28-A); nulidades (CPP arts. 563-573); recursos (arts. 574 e ss.); execução (LEP 7.210/84).

## O mapa — as 7 fases e suas janelas

| # | Fase | Ato/marco | Janela crítica da defesa | Decisão estratégica |
|---|------|-----------|--------------------------|---------------------|
| 0 | **Investigação (IP)** | inquérito, cautelares, indiciamento | requerer diligências, relaxamento de prisão, HC, arquivamento | investigação defensiva? antecipar-se ao indiciamento? |
| 1 | **Oferecimento / recebimento** | denúncia (art. 41) / recebimento (art. 396) | rejeição (art. 395), inépcia, falta de justa causa; **ANPP** | negociar ANPP × brigar pelo mérito |
| 2 | **Resposta à acusação** | art. 396-A (10 dias) | **preliminares, documentos, rol de testemunhas, absolvição sumária (397)** | onde apostar: preliminar × mérito × prova |
| 3 | **Instrução (AIJ)** | art. 400 | contraditar/inquirir, ordem do 400, incidentes, cadeia de custódia | tese probatória; réu depõe? |
| 4 | **Diligências + alegações finais** | arts. 402-403 | requerer diligências (402); **memoriais** (403, §3º) | consolidar teoria do caso; teses subsidiárias |
| 5 | **Sentença** | art. 387 | dosimetria, detração (387, §2º), regime, ANPP tardia | recorrer × transitar; o que atacar |
| 6 | **Recursos** | apelação (593), RESE (581), embargos, HC | efeito devolutivo/suspensivo; prequestionamento | qual recurso; o que devolver ao tribunal |
| 7 | **Execução** | LEP | guia, progressão, livramento, remição, indulto | migrar a estratégia para a VEP |

> **Regra de ouro do roadmap — "de trás para frente".** Defina primeiro o **resultado realista** (absolvição? desclassificação? redução de pena? regime aberto? ANPP?) e só então volte à fase atual perguntando: *que ato, praticado agora, preserva esse resultado?* Cada tese que se pretende sustentar na sentença ou no recurso precisa ter sido **plantada** (prova requerida, incidente suscitado, preliminar arguida, protesto consignado) na fase própria — sob pena de **preclusão**.

---

## Fase 0 — Investigação (inquérito policial)

**O que está em jogo:** legalidade da colheita da prova, liberdade do investigado, e a chance de **matar o caso antes da denúncia**.

- **Atos da defesa:** requerer diligências à autoridade policial (CPP art. 14); **investigação defensiva** (Provimento 188/2018 da OAB); pleitear arquivamento; atacar prisão em flagrante (relaxamento) ou preventiva (revogação/HC).
- **Cautelares e prisões →** skill `cautelares-relaxamento` / HC. Prazo é *agora*: prisão ilegal não espera.
- **Cadeia de custódia (CPP arts. 158-A a 158-F):** documentar desde já qualquer quebra — a impugnação nasce aqui e amadurece na instrução. Skill `cadeia-de-custodia`.
- **Janela que preclui:** provas que se perdem com o tempo (imagens, testemunhas, perícia) — requerer **preservação** cedo.

**Decisão estratégica:** antecipar-se com investigação defensiva pode inviabilizar a denúncia; mas expor a tese cedo às vezes entrega o jogo. Pesar caso a caso.

## Fase 1 — Oferecimento e recebimento da denúncia (arts. 41, 395-396)

**O que está em jogo:** barrar a ação penal na porta e decidir o **grande ponto de bifurcação: negociar ou litigar**.

- **Controle da denúncia:** aptidão (art. 41 — narração do fato com todas as circunstâncias), **rejeição** (art. 395: inépcia, falta de pressuposto/condição, ausência de justa causa).
- **Ponto de decisão — ANPP (CPP art. 28-A):** cabível em crimes **sem violência ou grave ameaça**, pena mínima **< 4 anos**, réu não reincidente e confissão formal. A janela ideal é **antes/no início do processo**. Skill `anpp` / `justica-negocial`. Reconferir requisitos e jurisprudência (inclusive ANPP em ação penal já em curso) via `jurisprudencia-stj-stf`.
- **Rito sumaríssimo (Lei 9.099/95):** se IMPO, avaliar **composição civil**, **transação penal** e suspensão condicional do processo — outra lógica de janelas.

**Decisão estratégica:** **ANPP × mérito.** Confissão para ANPP fecha portas de absolvição. Só negociar depois de mapear a força probatória da acusação e o pior cenário na sentença.

## Fase 2 — Resposta à acusação (art. 396-A) — a peça mais subestimada

**O que está em jogo:** é a **primeira e mais completa** manifestação da defesa — e a única chance de **absolvição sumária (art. 397)** antes da instrução.

- **Prazo:** **10 dias** (art. 396-A). Preclui o que não for alegado aqui em matéria de **prova** (rol de testemunhas — até **8** no ordinário, **5** no sumário) e de **preliminares** cujo momento é este.
- **Conteúdo:** preliminares (nulidades, incompetência, ilegitimidade), documentos, especificação de provas, exceções, e o pedido de **absolvição sumária** nas 4 hipóteses do art. 397 (existência manifesta de excludente de ilicitude/culpabilidade, atipicidade, extinção da punibilidade).
- **Skill de execução:** `resposta-a-acusacao` (redação) + `mapa-de-nulidades` (o que arguir e quando é absoluto × relativo).

> **Armadilha clássica:** tratar a resposta como formalidade ("nego os fatos, arrolo testemunhas"). É aqui que se **planta** quase toda a estratégia: a testemunha não arrolada não será ouvida; a preliminar não arguida pode precluir; o documento não juntado perde o momento ideal.

**Decisão estratégica:** onde concentrar fogo — **preliminar** (encerra o processo), **mérito** (absolvição sumária) ou **prova** (guardar munição para a instrução). Definir a **teoria do caso** agora e mantê-la coerente até o fim.

## Fase 3 — Instrução (AIJ, art. 400)

**O que está em jogo:** a **prova** que sustentará (ou derrubará) a acusação — e a fase mais rica em **incidentes e janelas de preclusão**.

- **Ordem cogente (art. 400):** ofendido → testemunhas de acusação → testemunhas de defesa → esclarecimentos de peritos/acareações/reconhecimento → **interrogatório do réu por ÚLTIMO** (garantia da ampla defesa; inversão gera nulidade). Confirmar alcance atual via `jurisprudencia-stj-stf`.
- **Atos da defesa na audiência:** contraditar testemunha suspeita/impedida **antes do compromisso**; inquirir diretamente (*cross-examination*, art. 212); **consignar em ata** indeferimentos e protestos (munição de nulidade); suscitar incidentes de cadeia de custódia e de prova ilícita (art. 157) **no momento**.
- **Skills:** `instrucao-e-provas`, `interrogatorio-estrategia`, `cadeia-de-custodia`, `mapa-de-nulidades`.

> **Janela que preclui aqui:** perguntas indeferidas sem protesto em ata; prova ilícita não impugnada na hora; contradita não oposta antes do compromisso. **"Não consignou, não aconteceu."**

**Decisão estratégica:** tese probatória (negar autoria? desclassificar? excludente?) e a decisão sensível de **o réu ser interrogado** — direito ao silêncio × versão que ancora a defesa.

## Fase 4 — Diligências finais e alegações finais (arts. 402-403)

**O que está em jogo:** a **última chance de produzir prova** (art. 402) e o **fechamento da teoria do caso** (art. 403).

- **Diligências (art. 402):** requerer, ao fim da instrução, diligências cuja necessidade surgiu de fatos apurados — **janela final de prova**.
- **Alegações finais (art. 403):** orais (20 min, prorrogáveis) ou, sendo o caso, **memoriais em 5 dias** (art. 403, §3º). É onde se amarra **tese principal + teses subsidiárias em cascata** (absolvição → desclassificação → causa de diminuição → dosimetria favorável).
- **Skill:** `alegacoes-finais` (memoriais) + `redacao-persuasiva-criminal`.

> **Princípio da eventualidade / teses subsidiárias:** ainda que se sustente absolvição, **pedir subsidiariamente** o mínimo (desclassificação, minorantes, regime brando). Não deixar a dosimetria por conta só do juiz.

**Decisão estratégica:** hierarquizar teses sem se contradizer; decidir se cabe **memorial** (mais tempo e densidade) ou oral.

## Fase 5 — Sentença (art. 387)

**O que está em jogo:** o que **atacar** e a bifurcação **recorrer × transitar**.

- **Pontos de controle:** dosimetria trifásica (art. 68 CP), fundamentação de cada circunstância, **regime inicial** (art. 33 CP), substituição por restritivas (art. 44 CP), sursis, e **detração já na sentença** (art. 387, §2º — antecipa marcos de execução).
- **Janela curta:** o prazo recursal corre da intimação. Mapear **de imediato** o que é atacável.
- **Skills:** `analise-de-sentenca`, `dosimetria-critica`.

**Decisão estratégica:** **recorrer × transitar em julgado.** Às vezes o trânsito acelera benefícios de execução (progressão, livramento) e evita *reformatio* indireta; às vezes há erro claro de dosimetria/nulidade que compensa recorrer. Decidir com o cliente, por escrito.

## Fase 6 — Recursos (arts. 574 e ss.)

**O que está em jogo:** **devolver ao tribunal** apenas o que foi preservado — e escolher a via certa.

- **Vias principais:** **apelação** (art. 593 — sentença definitiva); **RESE** (art. 581 — rol taxativo, ex.: rejeição da denúncia, pronúncia); **embargos de declaração** (omissão/contradição/obscuridade — e **prequestionamento**); **HC** (coação ilegal, a qualquer tempo); recursos aos Tribunais Superiores (REsp/RE, com prequestionamento e requisitos próprios).
- **Efeitos:** conferir **devolutivo × suspensivo** e o risco de **execução provisória**; o efeito devolutivo limita-se ao que se impugna (**tantum devolutum quantum appellatum**).
- **Skills:** `apelacao-criminal`, `rese`, `embargos-declaracao`, `habeas-corpus`, `recursos-tribunais-superiores`.

> **Preclusão e prequestionamento:** o tribunal só examina o que foi **arguido e consignado** nas fases anteriores. Tese nova em recurso, sem prequestionamento, esbarra em não conhecimento. Aqui se **colhe** o que foi plantado na resposta e na instrução.

**Decisão estratégica:** qual recurso, o que devolver, e como blindar prequestionamento (embargos, se preciso) para chegar aos Superiores.

## Fase 7 — Execução penal (LEP)

**O que está em jogo:** a estratégia **migra para a VEP** e o trabalho vira gestão de benefícios.

- **Marcos:** guia de recolhimento; **progressão de regime** (art. 112 LEP); **livramento condicional**; **remição** (trabalho/estudo/leitura); **saída temporária**; **indulto/comutação**; incidentes (falta grave, unificação de penas).
- **Skills:** `execucao-progressao-regime`, `livramento-condicional`, `remicao-falta-grave`, `saida-temporaria`, `indulto-anistia-comutacao`, `unificacao-de-penas`, `prescricao`.

**Decisão estratégica:** calcular lapsos e **datas-base** desde o trânsito (ou desde a prisão cautelar, por detração) para **não perder a janela** de cada benefício.

---

## Como a skill orquestra (fluxo de uso)

```
1) DIAGNÓSTICO: em que fase o caso está? (0 a 7)  → localizar no mapa
2) RESULTADO-ALVO: qual desfecho realista? (absolvição / desclass. / pena menor / ANPP / regime)
3) BACKWARD PLANNING: que teses precisam existir no fim? → em que fase cada uma se planta?
4) LISTA DE ATOS DA FASE ATUAL: o que fazer agora + prazo + skill que executa
5) JANELAS FUTURAS: marcar os próximos pontos de decisão e o que NÃO pode precluir
6) HANDOFF: acionar a skill especializada de cada peça (esta skill não redige)
```

> Esta skill **não escreve peças**. Ela produz o **plano** e o **cronograma**; a redação de cada ato é da skill correspondente (resposta, alegações, apelação, HC, progressão etc.). É o "mapa", não o "veículo".

## Teses e movimentos por fase (defesa × contra-tese)

| Fase | Movimento defensivo típico | Contra-tese/risco da acusação |
|------|----------------------------|-------------------------------|
| 0 | relaxamento/HC; investigação defensiva | pedido de preventiva; indiciamento robusto |
| 1 | rejeição (395); inépcia; **ANPP** | denúncia apta; recusa de ANPP por requisitos |
| 2 | preliminares; absolvição sumária (397) | contraditório sobre nulidades relativas |
| 3 | prova ilícita (157); cadeia de custódia; ordem do 400 | convalidação; ausência de prejuízo (art. 563) |
| 4 | diligências (402); teses subsidiárias (memoriais) | preclusão de prova; suficiência do conjunto |
| 5 | erro de dosimetria; nulidade; regime | manutenção da pena; agravantes |
| 6 | apelação/RESE; prequestionamento | não conhecimento por preclusão; *tantum devolutum* |
| 7 | progressão/livramento/remição | falta grave; interrupção de lapso (Súm. 534) |

> Cada linha remete a uma skill própria. Aqui só se decide **quando** e **por quê** — a fundamentação e os precedentes específicos são conferidos na skill executora e no gate `jurisprudencia-stj-stf`.

## Precedentes e súmulas — sob o Citation Gate

Esta skill **não cita números de acórdão**. Ela orienta **onde** a jurisprudência pesa em cada fase, para a skill executora buscar e verificar:

- **Fase 3 (interrogatório por último, art. 400):** há orientação consolidada de que a inversão da ordem, com prejuízo, gera nulidade — **[NÃO VERIFICADO]**, confirmar alcance e modulação via `jurisprudencia-stj-stf`.
- **Fase 3 (prova ilícita por derivação, art. 157, §1º):** teoria dos frutos da árvore envenenada e suas exceções (fonte independente, descoberta inevitável) — **[NÃO VERIFICADO]**, conferir.
- **Nulidades (arts. 563-573):** **Súmula 523/STF** (no processo penal, a falta de defesa constitui nulidade absoluta; a deficiência só a anula se houver prejuízo) — súmula notória; ainda assim reconfira o texto antes de citar.
- **Fase 7 (falta grave e nova data-base):** **Súmula 534/STJ** e distinções (Súm. 441/535) — ver skill `execucao-progressao-regime`.

> **Regra:** prefira ensinar a **tese e o dispositivo** a arriscar o número do julgado. Qualquer HC/REsp/RE/Tema/Informativo **só entra na estratégia após passar por `jurisprudencia-stj-stf`**. Melhor faltar precedente do que citar julgado inexistente — há sanção real por jurisprudência inventada por IA.

## Erros comuns (anti-padrões)

- **Atuar peça a peça, sem mapa** — perder janelas por não enxergar a linha do tempo inteira.
- **Tratar a resposta à acusação (396-A) como formalidade** — é onde se planta a prova e as preliminares; o que falta aqui precluí.
- **Não arrolar testemunha no momento certo** (limite de 8/5) — não há segunda chance.
- **Deixar de consignar protesto/indeferimento em ata na AIJ** — sem registro, não há prequestionamento nem nulidade a alegar.
- **Confundir ANPP com derrota** ou negociá-la **tarde** (após a instrução) — e sem calcular o pior cenário de sentença.
- **Impugnar prova ilícita só no recurso** — o momento é a instrução; depois, esbarra em preclusão/convalidação (art. 563 — *pas de nullité sans grief*).
- **Esquecer a detração na sentença** (art. 387, §2º) — antecipa marcos de execução.
- **Não hierarquizar teses subsidiárias** nas alegações finais — deixar a dosimetria só com o juiz.
- **Recorrer sem prequestionar** — o tribunal não conhece tese não devolvida.
- **Não migrar a estratégia para a execução** — perder lapsos de progressão/livramento por não calcular datas-base.

## Checklist final (por fase)

- [ ] **Fase atual identificada** no mapa (0 a 7) e **resultado-alvo** definido com o cliente?
- [ ] **Backward planning** feito — cada tese futura tem uma fase de plantio identificada?
- [ ] **Janelas de preclusão** próximas mapeadas (prazos, rol de testemunhas, incidentes)?
- [ ] **ANPP / transação** avaliadas na janela certa (fase 1/2), com pior cenário calculado?
- [ ] **Resposta à acusação (396-A):** preliminares + prova + absolvição sumária pensadas juntas?
- [ ] **AIJ:** contraditas, ordem do art. 400, incidentes e **protestos em ata** planejados?
- [ ] **Alegações finais:** tese principal + subsidiárias (eventualidade) estruturadas?
- [ ] **Sentença:** pontos atacáveis mapeados e decisão **recorrer × transitar** registrada por escrito?
- [ ] **Recursos:** via correta escolhida e **prequestionamento** garantido nas fases anteriores?
- [ ] **Execução:** datas-base e lapsos calculados; benefícios agendados?
- [ ] **Cada ato encaminhado à skill executora** correta (esta skill não redige)?
- [ ] **Todo precedente conferido** via `jurisprudencia-stj-stf` antes de citar?

## Nota de conformidade

Rascunho técnico de **apoio estratégico** — não substitui o juízo do advogado responsável nem a análise dos autos concretos. Toda peça citada exige **revisão humana obrigatória** antes de protocolar; nenhuma súmula, tese ou precedente é citado de memória — tudo passa pelo gate `jurisprudencia-stj-stf` (há sanção real por jurisprudência inventada por IA). A responsabilidade pela estratégia e pelos atos é sempre do advogado (**EAOAB e Código de Ética e Disciplina da OAB; Provimento 205/2021** na advocacia). Prazos, competências e ritos devem ser conferidos na **redação vigente** do CPP e das leis especiais antes de qualquer movimento — este mapa orienta o *quando* e o *porquê*; o *como* e o *com base em quê* são das skills executoras e da conferência de fontes.

**Interface com o júri:** para crimes dolosos contra a vida, o rito é **bifásico** e tem roadmap próprio — use `juri-mapa-completo` (pronúncia → plenário). Esta skill cobre o **rito comum** (ordinário/sumário/sumaríssimo) e a linha do tempo transversal; para **agenda e prazos operacionais**, use `agenda-juridica` (aqui é estratégia processual, não gestão de agenda).
