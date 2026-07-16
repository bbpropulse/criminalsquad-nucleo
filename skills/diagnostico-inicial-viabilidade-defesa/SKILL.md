---
name: diagnostico-inicial-viabilidade-defesa
description: >-
  Use na PRIMEIRA análise de um caso novo — a triagem estratégica que lê a acusação/autos e produz o
  raio-X de entrada: imputação, elementos fortes e fracos da acusação, teses aparentes, riscos,
  prazos críticos, urgências (prisão/prescrição iminente) e o PRÓXIMO movimento defensivo. Trabalho
  interno rápido, sem formalidade de parecer. Gatilhos: análise inicial do caso, primeira leitura
  dos autos, raio-x do processo, triagem… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-diagnostico-inicial-viabilidade-defesa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["diagnostico-inicial-viabilidade-defesa", "diagnostico inicial", "viabilidade defesa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Diagnóstico Inicial e Triagem de Viabilidade da Defesa (CPP; CP art. 109; CF art. 5º)

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

Esta skill é o **passo zero** de todo caso novo: a **triagem estratégica** que lê a acusação (notícia-crime, IP, denúncia/queixa, decisão de recebimento, autos) e devolve um **raio-X de entrada** — o que se imputa, onde a acusação é forte e onde é frágil, que teses despontam, quais os riscos e prazos críticos, e **qual o próximo movimento defensivo**. Não é peça nem parecer: é **trabalho interno de bússola**, rápido e sem formalidade, focado no PRÓXIMO passo.

> **Lição central:** diagnóstico não é opinião sobre culpa — é **mapa de decisão sob o tempo**. Antes de teorizar o mérito, encontre **o que corre contra o relógio**: prisão em curso, prescrição iminente, prazo de resposta/recurso, decadência da queixa. Uma tese brilhante perdida por prazo é derrota. **Urgência primeiro; profundidade depois.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos dispositivos antes de fundamentar qualquer movimento — CPP, CP e leis especiais sofrem alterações frequentes (ex.: prazos de prescrição, marco da preventiva, procedimentos). O diagnóstico levanta hipóteses; **toda súmula, tema ou precedente específico passa pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de virar peça.** Melhor faltar precedente do que citar julgado inexistente.

Esta skill **antecede e dispara** as demais: levanta o material bruto que alimenta `teoria-do-caso`, `roadmap-defensivo-por-fase` e as skills de peça específicas. Não as substitui — é o gatilho que as ativa na sequência certa.

## Base legal (âncoras)

- **CPP** — recebimento da acusação (arts. 395-399), resposta à acusação (art. 396-A), absolvição sumária (art. 397), rejeição da denúncia (art. 395), justa causa e condições da ação penal.
- **CP, art. 109** — prazos da **prescrição** da pretensão punitiva (em abstrato); art. 110 (retroativa/intercorrente); art. 115 (redução pela idade < 21 na data do fato ou > 70 na sentença); arts. 116-117 (causas suspensivas/interruptivas).
- **CP, arts. 103 e 38 CPP** — **decadência** do direito de queixa/representação (6 meses) na ação penal privada e na pública condicionada.
- **CF, art. 5º** — devido processo (LIV), contraditório e ampla defesa (LV), presunção de inocência (LVII), inadmissibilidade da prova ilícita (LVI), juiz natural (LIII), fundamentação das decisões (art. 93, IX).
- **CPP, arts. 647-648** — **habeas corpus** (medida de urgência quando há prisão/constrangimento ilegal ou risco de).
- **CPP, art. 282 e 310** — necessidade/adequação das cautelares, audiência de custódia e controle da prisão.

## Roteiro de análise em 7 blocos (a sequência importa)

O diagnóstico corre nesta ordem. Os blocos 1-2 são **triagem de sobrevivência** (nada avança sem eles); 3-7 constroem o raio-X estratégico.

### Bloco 1 — Relógio: prazos e urgências (SEMPRE primeiro)

Antes de qualquer análise de mérito, mapeie o que corre contra o tempo:

- **Há prisão em curso?** (flagrante, preventiva, temporária, decorrente de sentença). Se sim → avaliar **relaxamento** (ilegalidade), **revogação/substituição** por cautelar diversa (art. 319), **liberdade provisória** ou **HC**. Verificar se houve audiência de custódia.
- **Prazo processual aberto?** Resposta à acusação (10 dias — art. 396-A), alegações finais, prazo recursal, contrarrazões, defesa prévia. Anotar termo inicial e final de cada um.
- **Prescrição iminente?** Calcular a prescrição em abstrato (CP art. 109) pela pena máxima; conferir causas interruptivas (art. 117) e a redução do art. 115. Sinalizar se está próxima ou já consumada.
- **Decadência (ação privada/condicionada)?** Contar os 6 meses da ciência da autoria (CP art. 103; CPP art. 38). Queixa/representação fora do prazo = extinção.
- **Fase do caso** (define o leque de movimentos): pré-processual (IP/investigação) · oferecimento/recebimento da denúncia · instrução · sentença · recursal · execução. Cada fase tem peças e prazos próprios.

➡️ **Saída do bloco:** lista de prazos com datas + a urgência #1 (o que não pode esperar).

### Bloco 2 — Imputação: o que exatamente se acusa

- **Tipo(s) penal(is) imputado(s)** e capitulação (artigo, incisos, §§, causas de aumento/qualificadoras). Concurso de crimes? Continuidade? Concurso de agentes (autoria/participação)?
- **Núcleo fático** da acusação: quem, o quê, quando, onde, como, com que meio (a narrativa que a denúncia sustenta).
- **Espécie de ação penal:** pública incondicionada · pública condicionada à representação · privada. Define legitimidade, decadência e possibilidade de retratação/perdão.
- **Pena em abstrato** (mínimo-máximo) — insumo para prescrição, cabimento de ANPP/transação/suspensão condicional do processo, regime provável e estratégia de negociação.

➡️ **Saída do bloco:** frase única "acusa-se [cliente] de [tipo] por [núcleo fático], ação penal [espécie], pena [X-Y]".

### Bloco 3 — Forças da acusação (o que joga contra)

Leia os autos como o adversário os leria. Elenque, sem autoengano:

- **Provas robustas:** confissão, flagrante próprio bem documentado, prova pericial conclusiva, cadeia de custódia íntegra, testemunhas presenciais coerentes, imagens/interceptações autorizadas.
- **Coerência da narrativa acusatória** e ajuste entre denúncia e lastro probatório (justa causa).
- **Antecedentes/contexto** que agravam (reincidência, maus antecedentes) — impacta pena, cautelar e negociação.

➡️ **Saída do bloco:** ranking dos 3 pontos mais fortes da acusação.

### Bloco 4 — Fraquezas da acusação e mapa de nulidades (onde atacar)

O coração do diagnóstico defensivo. Rastreie:

- **Nulidades e ilicitudes probatórias:** busca/apreensão sem mandado ou fora dos limites, quebra de cadeia de custódia (CPP arts. 158-A a 158-F), interceptação sem autorização, confissão sob coação, reconhecimento em desacordo com o art. 226 do CPP, prova derivada de ilícita (fruits — art. 157, §1º).
- **Falta de justa causa / atipicidade:** o fato narrado é típico? Faltou dolo específico? Cabe princípio da insignificância? Bis in idem? Falta de materialidade (laudo ausente/inconclusivo)?
- **Frouxidão probatória:** autoria apoiada só em indício, em depoimento de policial isolado, em reconhecimento fotográfico frágil, em delação não corroborada.
- **Vícios procedimentais:** incompetência do juízo, cerceamento de defesa, denúncia inepta (art. 41 CPP), ausência de condição de procedibilidade.
- **Prescrição/decadência/extinção** (já triadas no Bloco 1) — se presentes, sobem ao topo.

➡️ **Saída do bloco:** lista priorizada de vulnerabilidades, marcando quais são **terminativas** (extinguem o processo) e quais são **de mérito** (levam à absolvição).

### Bloco 5 — Teses aparentes (defensivas) e contra-teses

Levante as **hipóteses** de defesa que o material sugere — sem fechar teoria do caso ainda (isso é da skill `teoria-do-caso`). Para cada tese, anote a contra-tese provável da acusação:

| Frente | Tese defensiva aparente | Contra-tese (acusação) |
|---|---|---|
| **Terminativa** | Prescrição/decadência; atipicidade; falta de justa causa; nulidade absoluta | Marco interruptivo válido; tipicidade presente; lastro suficiente |
| **Probatória** | Prova ilícita a excluir (art. 157); reconhecimento inválido (art. 226); insuficiência de autoria | Prova lícita e independente; reconhecimento ratificado em juízo |
| **Mérito** | Negativa de autoria; excludente (legítima defesa, estado de necessidade); ausência de dolo; erro de tipo/proibição | Autoria comprovada; excludente não demonstrada; dolo evidenciado |
| **Redução/mitigação** | Desclassificação; tentativa; privilégio; participação de menor importância; confissão como atenuante | Crime consumado; qualificadora presente; coautoria relevante |

➡️ **Saída do bloco:** 2 a 4 teses aparentes ranqueadas por força e por impacto (terminativa > absolutória > redutora).

### Bloco 6 — Caminhos de saída: litigar × negociar

Todo diagnóstico avalia se há porta negocial mais vantajosa que o litígio:

- **ANPP** (Lei 13.964/19; CPP art. 28-A) — cabível? (pena mínima < 4 anos, sem violência/grave ameaça, confissão formal, não reincidente em crime doloso, requisitos negativos). Ver skill `anpp-acordo`.
- **Transação penal / suspensão condicional do processo** (Lei 9.099/95) — infração de menor potencial ofensivo? Pena mínima ≤ 1 ano (sursis processual)?
- **Colaboração premiada** (Lei 12.850/13) — cabível e conveniente? (decisão sensível, exige cautela).
- **Litígio puro** — quando as teses terminativas/absolutórias são fortes e a negociação não compensa.

➡️ **Saída do bloco:** recomendação preliminar (litigar / negociar / híbrido) com a razão em uma linha.

### Bloco 7 — Próximo movimento e lacunas de informação

Fecha o diagnóstico com ação concreta:

- **O PRÓXIMO passo defensivo** (um só, o mais urgente): ex. "impetrar HC contra a preventiva", "protocolar resposta à acusação até [data] arguindo nulidade da busca", "requerer diligências no IP", "buscar ANPP".
- **Documentos/informações faltantes** para decidir bem: cópia integral dos autos, laudo pericial, folha de antecedentes, mídia da interceptação, versão do cliente, testemunhas de defesa.
- **Skills a acionar na sequência:** `teoria-do-caso`, `roadmap-defensivo-por-fase`, e a skill de peça pertinente (HC, resposta à acusação, relaxamento de prisão etc.).

➡️ **Saída do bloco:** 1 próximo passo + lista de pendências + skills seguintes.

## Formato do raio-X (entregável interno)

Saída enxuta, em tópicos — não é peça. Sugestão de esqueleto:

```
RAIO-X DO CASO — [cliente] · [fase] · [data da triagem]

1. URGÊNCIA Nº 1: [o que não pode esperar + prazo]
2. IMPUTAÇÃO: acusa-se de [tipo/capitulação] · ação penal [espécie] · pena [X-Y]
3. RELÓGIO: [prazos abertos com datas] · prescrição [status] · decadência [status]
4. FORÇAS DA ACUSAÇÃO: [top 3]
5. FRAQUEZAS / NULIDADES: [priorizadas; marcar terminativas]
6. TESES APARENTES: [2-4, ranqueadas] (+ contra-teses)
7. CAMINHO: [litigar / negociar / híbrido] — [razão em 1 linha]
8. PRÓXIMO PASSO: [1 movimento] · PENDÊNCIAS: [docs/infos]
9. SKILLS SEGUINTES: [lista]

⚠️ Rascunho de triagem — hipóteses a confirmar. Citações NÃO verificadas.
```

## Súmulas e dispositivos de apoio (sob o Citation Gate)

Dispositivos de lei podem ser citados com segurança; **qualquer precedente/súmula específico confere via `jurisprudencia-stj-stf` antes de usar em peça.**

- **Súmula 145/STF** — não há crime quando a preparação do flagrante torna impossível a consumação (flagrante preparado/provocado). Útil na triagem de casos de "flagrante forjado".
- **Súmula 444/STJ** — vedado usar inquéritos/ações em curso para agravar a pena-base (impacta o peso dos "antecedentes" no Bloco 3).
- **Súmula 24/STF (vinculante)** — nos crimes materiais contra a ordem tributária, não há tipicidade antes do lançamento definitivo do tributo (gatilho de atipicidade/falta de justa causa em casos tributários).
- **Princípio da insignificância** — critérios da mínima ofensividade, ausência de periculosidade, reduzido grau de reprovabilidade e inexpressividade da lesão (linha do STF/STJ) — testar no Bloco 4. **[NÃO VERIFICADO]** o precedente-líder e a modulação atual: conferir via `jurisprudencia-stj-stf`.
- **Reconhecimento de pessoas — art. 226 CPP** — a jurisprudência recente do STJ endureceu a exigência de observância do rito; **[NÃO VERIFICADO]** o(s) acórdão(s) paradigma e o alcance (relativo/absoluto): conferir via `jurisprudencia-stj-stf` antes de sustentar nulidade.

> Para **qualquer** número de HC/REsp/RE, informativo ou tema de repercussão geral: **não cite de memória.** Ensine a tese e o dispositivo; delegue o acórdão ao gate. Melhor faltar precedente do que citar julgado inexistente.

## Erros comuns (anti-padrões)

- **Mergulhar no mérito antes de checar o relógio** — perder prazo de resposta/recurso ou não ver prisão/prescrição iminente. O Bloco 1 vem sempre primeiro.
- **Autoengano otimista** — subestimar as forças da acusação (Bloco 3). O diagnóstico honesto é o que protege o cliente.
- **Confundir triagem com teoria do caso** — o diagnóstico *levanta* teses aparentes; não as fecha. Fechar é da skill `teoria-do-caso`.
- **Ignorar a porta negocial** — não testar ANPP/transação/sursis processual quando cabíveis (Bloco 6) pode custar ao cliente uma saída melhor.
- **Citar jurisprudência de memória no raio-X** — mesmo sendo documento interno, marque tudo como não verificado; o número inventado tende a migrar para a peça.
- **Não listar pendências** — decidir estratégia sem os autos íntegros, o laudo ou a versão do cliente é diagnóstico cego.
- **Recomendar mais de um "próximo passo"** — o valor da triagem é apontar O movimento prioritário, não uma lista difusa.

## Checklist final da triagem

- [ ] **Relógio conferido** — prisão em curso, prazos abertos (datas), prescrição (CP 109) e decadência (CP 103) verificados?
- [ ] **Imputação resumida** em uma frase (tipo · ação penal · pena)?
- [ ] **Fase do caso** identificada (define o leque de movimentos)?
- [ ] **Forças da acusação** elencadas sem autoengano (top 3)?
- [ ] **Fraquezas/nulidades** priorizadas, com as **terminativas** destacadas?
- [ ] **Teses aparentes** (2-4) ranqueadas por impacto, com contra-teses?
- [ ] **Caminho** (litigar/negociar) recomendado com razão em 1 linha?
- [ ] **Próximo passo único** definido + pendências listadas?
- [ ] **Skills seguintes** apontadas (`teoria-do-caso`, `roadmap-defensivo-por-fase`, peça)?
- [ ] **Conflito de interesses** checado (art. 17 EAOAB) antes de assumir?
- [ ] **Citações marcadas como NÃO verificadas** e enviadas ao gate `jurisprudencia-stj-stf` antes de qualquer peça?

## Lembretes finais

- **Urgência primeiro, profundidade depois** — o relógio (Bloco 1) precede o mérito.
- **Diagnóstico é bússola, não peça** — enxuto, interno, focado no próximo movimento.
- **Honestidade sobre as forças da acusação** protege o cliente melhor que otimismo.
- **Terminativa > absolutória > redutora** — ranqueie sempre as teses por impacto.
- **Levantar, não fechar** — a teoria do caso é o passo seguinte (`teoria-do-caso`).
- **Nenhum precedente citado de memória** — tudo pelo Citation Gate (`jurisprudencia-stj-stf`).

## Nota de conformidade

Este material é **rascunho técnico de triagem para revisão humana obrigatória** — hipótese de trabalho, não decisão. A responsabilidade pela estratégia, pelos prazos e pelas peças é sempre do **advogado** (EAOAB e Código de Ética; Provimento 205/2021 na advocacia; CNMP no Ministério Público; LC 80/94 na Defensoria). O sigilo do cliente e a LGPD são inegociáveis: dados do assistido nunca vão a repositório público. **Toda** súmula, tese ou acórdão passa pelo gate `jurisprudencia-stj-stf` antes de migrar para qualquer peça — há sanções reais por jurisprudência inventada por IA.
