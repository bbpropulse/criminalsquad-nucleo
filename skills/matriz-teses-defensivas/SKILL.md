---
name: matriz-teses-defensivas
description: >-
  Use ANTES de escrever qualquer peça para levantar, hierarquizar e ordenar em eventualidade TODAS
  as teses defensivas cabíveis de um caso — o mapa que separa tese principal e subsidiárias sem que
  uma destrua a outra, da preliminar processual à prejudicial, ao mérito e à dosimetria (princípio
  da eventualidade; CPP art. 396-A). Gatilhos: matriz de teses, mapa de teses, quais teses cabem,
  tese principal e subsidiária, ordem das… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-matriz-teses-defensivas"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["matriz-teses-defensivas", "matriz teses", "teses defensivas"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Matriz de Teses Defensivas (princípio da eventualidade — CPP, art. 396-A)

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

Esta skill orienta o trabalho **estratégico anterior à redação**: mapear o **repertório completo de teses defensivas cabíveis** em um caso concreto e ordená-las em **eventualidade lógica compatível** — tese principal, subsidiárias e de reserva —, da **preliminar processual** à **prejudicial**, ao **mérito** e, por fim, à **dosimetria**. É o inventário que garante que nenhuma tese cabível seja esquecida e que nenhuma tese destrua a outra.

> **Lição central:** teses não se empilham, se **escalonam**. Negar autoria e, na mesma respiração, pedir a minorante do tráfico privilegiado (que pressupõe autoria) é **autofagia** — uma tese devora a outra e entrega a autoria ao juiz. A eventualidade correta abre cada tese subsidiária com a fórmula **"caso superada a anterior / ad argumentandum tantum / na remota hipótese de..."**, do mais forte (absolvição plena) ao menos ambicioso (redução de pena).

> **Cautela de vigência (obrigatória antes de citar):** esta skill trabalha o **método** (o que mapear e em que ordem), não um rol fechado de julgados. Antes de fundamentar qualquer tese na peça, confira a redação vigente do dispositivo invocado e verifique súmulas, temas repetitivos, repercussão geral e eventual *overruling* pela skill `jurisprudencia-stj-stf`. Prefira ancorar a tese no **dispositivo de lei** a arriscar um número de acórdão.

## Base legal

- **CPP, art. 396-A** — resposta à acusação: alegar tudo o que interesse à defesa, arguir preliminares, oferecer documentos e justificações, especificar provas e arrolar testemunhas. É o **momento de máxima amplitude** para deduzir a matriz.
- **CPP, art. 41 e art. 395** — requisitos da denúncia e hipóteses de rejeição (inépcia, falta de pressuposto/condição, falta de justa causa) — matéria-prima das **preliminares**.
- **CPP, arts. 564 e 563** — nulidades e o princípio *pas de nullité sans grief* (sem prejuízo não há nulidade) — base e limite das teses de **nulidade**.
- **CP, arts. 23 a 25** — exclusão da ilicitude (legítima defesa, estado de necessidade, estrito cumprimento do dever legal, exercício regular de direito).
- **CP, arts. 26 a 28** — exclusão/redução da culpabilidade (inimputabilidade, erro, coação moral irresistível, obediência hierárquica) e o que **não** exclui (emoção, paixão, embriaguez voluntária).
- **CP, arts. 20 e 21** — erro de tipo (exclui dolo) e erro de proibição (exclui/atenua culpabilidade).
- **CP, art. 59 e ss.** — dosimetria: circunstâncias judiciais, atenuantes/agravantes, causas de aumento/diminuição, regime e substituição (o **piso** da eventualidade).
- **CF, art. 5º, LV e LVII** — contraditório, ampla defesa e presunção de inocência (lastro do *in dubio pro reo* e do ônus acusatório).

## As 4 camadas da matriz (ordem de dedução na peça)

A matriz se organiza em quatro camadas, **da mais externa (que nem chega ao fato) à mais interna (que já aceita a condenação e só disputa a pena)**. Esta é a espinha dorsal da eventualidade:

```
CAMADA 1 — PRELIMINARES (processo)      → sequer se julga o mérito
CAMADA 2 — PREJUDICIAIS (extinção)      → o poder de punir já não existe
CAMADA 3 — MÉRITO (fato/autoria/crime)  → não houve crime / não foi o réu
CAMADA 4 — DOSIMETRIA (pena)            → se condenar, condene o mínimo
```

Regra de ouro: **quanto mais a tese resolve, mais alto ela vem.** Uma preliminar acolhida encerra o processo sem análise de mérito; uma tese de dosimetria só opera **depois** de aceita a condenação. Deduzir na ordem inversa (começar pedindo pena mínima) sinaliza rendição.

### Camada 1 — Preliminares (matéria processual)

Atacam a **relação processual**, não o fato. Não dependem de o réu ser inocente:

- **Inépcia da denúncia** (CPP, art. 41 / 395, I) — imputação genérica, sem individualização de conduta (crítico em concurso de agentes e crimes societários).
- **Falta de justa causa** (CPP, art. 395, III) — ausência de lastro probatório mínimo/indício de autoria.
- **Falta de pressuposto processual ou condição da ação** (CPP, art. 395, II) — ex.: decadência da queixa, falta de representação, ilegitimidade.
- **Incompetência** do juízo (absoluta ou relativa).
- **Nulidades** (CPP, art. 564) — prova ilícita e a **contaminação por derivação** (CPP, art. 157, §1º — fruits of the poisonous tree), quebra da **cadeia de custódia** (CPP, arts. 158-A a 158-F), cerceamento de defesa, vícios do interrogatório/reconhecimento (art. 226 CPP). Sempre demonstrar o **prejuízo** (art. 563).
- **Litispendência / coisa julgada** (*bis in idem*).

### Camada 2 — Prejudiciais de mérito (extinção da punibilidade)

Reconhecem que o **poder-dever de punir se extinguiu** (CP, art. 107) — independem da autoria:

- **Prescrição** (da pretensão punitiva ou executória) — checar sempre em primeiro lugar entre as prejudiciais; ver skill de prescrição.
- **Decadência / perempção** (ação penal privada e condicionada).
- **Anistia, graça, indulto**; **abolitio criminis** (retroatividade benéfica, CP, art. 2º); **morte do agente**; **renúncia/perdão** aceitos.
- **Extinção pelo pagamento** (crimes tributários) e outras causas específicas.

### Camada 3 — Mérito (o fato, a autoria, o crime)

Aqui a defesa disputa a **existência do crime** e a **responsabilidade do réu**. Ordenar do mais absolutório ao menos:

1. **Negativa de autoria** (não foi o réu) — a mais forte; pede absolvição por **negativa de autoria** (CPP, art. 386, IV ou V).
2. **Atipicidade** — material (princípio da insignificância), formal (fato não se ajusta ao tipo), ou por ausência de dolo/elemento subjetivo.
3. **Excludentes de ilicitude** (CP, arts. 23-25) — legítima defesa etc. (absolvição, CPP, art. 386, VI).
4. **Excludentes de culpabilidade** (CP, arts. 26-28, 20-21) — inimputabilidade, erro de proibição, coação moral irresistível, obediência hierárquica.
5. **In dubio pro reo / insuficiência de provas** (CPP, art. 386, VII) — a prova acusatória não vence a dúvida razoável.
6. **Desclassificação** — para crime menos grave, ou de doloso para culposo, ou afastamento de forma qualificada/tentada.

### Camada 4 — Dosimetria (se houver condenação)

O **piso** da matriz — opera aceitando *ad argumentandum* a condenação:

- **1ª fase (CP, art. 59):** afastar valoração negativa de circunstâncias judiciais; base no mínimo.
- **2ª fase:** reconhecer **atenuantes** (confissão — Súmula 545/STJ; menoridade relativa; etc.) e afastar/reduzir agravantes; observar que atenuante não leva abaixo do mínimo (Súmula 231/STJ) — mas discutir a tese contrária quando estratégica.
- **3ª fase:** aplicar **causas de diminuição** (tentativa, arrependimento posterior, privilégio, tráfico privilegiado — art. 33, §4º, Lei 11.343/06) e reduzir causas de aumento.
- **Consectários:** regime inicial mais brando, **substituição por restritivas** (CP, art. 44), sursis, detração, afastamento de reincidência mal caracterizada.

## Método passo a passo — construir a matriz

1. **Ler o caso pelas 4 camadas.** Percorra denúncia, inquérito e provas fazendo quatro perguntas, nesta ordem: (1) há vício **processual**? (2) a punibilidade **existe** (prescrição etc.)? (3) houve **crime** e foi o **réu**? (4) se sim, dá para **reduzir a pena**?
2. **Inventariar exaustivamente.** Liste toda tese *plausível* de cada camada, mesmo as fracas — nesta fase não se descarta, se **cataloga**. O erro nº 1 dos escritórios é esquecer tese cabível.
3. **Testar a compatibilidade (o teste da autofagia).** Para cada par de teses, pergunte: *a tese B pressupõe algo que a tese A nega?* Se sim, elas só coexistem em **eventualidade** (uma como principal, a outra como subsidiária expressa), nunca como afirmações simultâneas. Ver tabela adiante.
4. **Escolher a tese principal.** É a de maior **força × probabilidade**, alinhada à **teoria do caso** (ver skill `teoria-do-caso-construcao`). A matriz organiza o leque; a teoria do caso escolhe a hipótese central que a peça vai sustentar com mais vigor.
5. **Ordenar as subsidiárias em cascata.** Da mais absolutória à menos, cada uma aberta pela fórmula da eventualidade. Preliminares e prejudiciais vêm sempre antes do mérito, e a dosimetria por último.
6. **Marcar o ônus e a prova de cada tese.** Anote, para cada uma, quem tem o ônus, que prova a sustenta e se depende de perícia/testemunha a requerer já na resposta (art. 396-A).
7. **Registrar as citações a verificar.** Toda súmula/precedente que sustente uma tese entra numa lista para passar pelo Citation Gate (`jurisprudencia-stj-stf`) antes da redação.

## Teste da autofagia — pares que NÃO podem ser afirmados juntos

| Tese A (afirma) | Tese B (pressupõe) | Compatíveis? | Como conciliar |
|---|---|---|---|
| Negativa de autoria ("não fui eu") | Legítima defesa ("fui eu, mas era lícito") | ❌ Autofagia | B só como **subsidiária**: "caso superada a negativa de autoria, no mérito, agiu em legítima defesa" |
| Negativa de autoria | Tráfico privilegiado / confissão atenuante | ❌ Autofagia | Confissão destrói a negativa; escolher uma como principal |
| Atipicidade (fato não é crime) | Excludente de ilicitude (é crime, mas justificado) | ⚠️ Tensão lógica | Em eventualidade: atipicidade primeiro; ilicitude como subsidiária |
| Insignificância (não há lesão relevante) | Pedido de pena mínima | ⚠️ Enfraquece | Dosimetria é sempre a **última** camada, aberta por eventualidade |
| Inimputabilidade (art. 26 — absolvição imprópria) | Absolvição própria por negativa de autoria | ⚠️ Cuidado | Inimputabilidade **admite** o fato; deduzir só se a negativa cair |
| Prescrição (prejudicial) | Qualquer tese de mérito | ✅ Compatíveis | Prejudicial vem **antes**; se acolhida, nem se julga o mérito — não há autofagia |
| Nulidade processual | Qualquer tese de mérito | ✅ Compatíveis | Preliminar não afirma nada sobre o fato; convivem naturalmente |

> **Princípio:** teses de **camadas diferentes** quase nunca se autodevoram (uma preliminar não diz nada sobre o fato). A autofagia mora **dentro da camada de mérito**, quando duas teses fazem afirmações fáticas opostas. O antídoto é sempre a **eventualidade expressa**.

## A ordem canônica da eventualidade (esqueleto da peça)

```
1. PRELIMINARMENTE
   1.1. [Preliminar processual mais forte] → rejeição / nulidade / absolvição sumária
   1.2. [Preliminar subsidiária]
   → "Não acolhidas as preliminares, o que se admite apenas por eventualidade:"

2. PREJUDICIAL DE MÉRITO
   2.1. [Prescrição / extinção da punibilidade]
   → "Ultrapassada a prejudicial, quanto ao mérito:"

3. NO MÉRITO
   3.1. TESE PRINCIPAL [ex.: negativa de autoria / absolvição]
   → "Caso Vossa Excelência supere a tese principal, ad argumentandum tantum:"
   3.2. TESE SUBSIDIÁRIA 1 [ex.: excludente de ilicitude]
   3.3. TESE SUBSIDIÁRIA 2 [ex.: desclassificação]
   → "Na remota hipótese de condenação, subsidiariamente, quanto à pena:"

4. DA DOSIMETRIA (subsidiário)
   4.1. 1ª fase — base no mínimo (art. 59)
   4.2. 2ª fase — atenuantes / agravantes
   4.3. 3ª fase — causas de diminuição / aumento
   4.4. Regime, substituição, sursis
```

> **Fórmulas de transição (memorizar):** *"Superada a preliminar, o que se admite apenas por amor ao debate..."* · *"Ad argumentandum tantum, caso ultrapassada a tese principal..."* · *"Na remota e indesejada hipótese de condenação, requer, subsidiariamente..."*. Elas deixam **explícito** que cada tese seguinte só é sustentada se a anterior cair — é isso que evita a autofagia aos olhos do juiz.

## Teses e contra-teses (o que a acusação dirá)

Para cada tese mapeada, antecipe a réplica acusatória — a matriz é mais forte quando já traz a resposta:

- **Preliminar de inépcia** ↔ acusação invoca a suficiência da narrativa e a possibilidade de defesa; contra-ataque com a **individualização faltante** de cada conduta.
- **Nulidade de prova** ↔ acusação invoca *pas de nullité sans grief* e fonte independente/descoberta inevitável; a defesa demonstra o **prejuízo concreto** e a **derivação** (art. 157, §1º).
- **Negativa de autoria** ↔ acusação aponta reconhecimento/indícios; a defesa ataca o **reconhecimento** (art. 226 CPP e sua leitura atual — verificar via `jurisprudencia-stj-stf`) e a cadeia probatória.
- **Insignificância** ↔ acusação invoca reincidência/habitualidade como obstáculo; discutir os **vetores** do princípio (mínima ofensividade, ausência de periculosidade, reduzido grau de reprovabilidade, inexpressividade da lesão) — verificar entendimento atual.
- **In dubio pro reo** ↔ acusação sustenta prova suficiente; a defesa realoca o **ônus** (CF, art. 5º, LVII) para a acusação.
- **Dosimetria** ↔ acusação pede exasperação; a defesa cobra **fundamentação idônea** de cada circunstância (vedado fundamento genérico).

## Súmulas e âncoras úteis (conferir vigência via `jurisprudencia-stj-stf`)

Dispositivos e enunciados **notórios** que costumam sustentar teses da matriz — cada um confirmado antes de citar:

- **Súmula 545/STJ** — confissão espontânea usada na condenação enseja a **atenuante** (art. 65, III, "d") — âncora da dosimetria.
- **Súmula 231/STJ** — atenuante **não** reduz a pena abaixo do mínimo legal (útil para calibrar o pedido de 2ª fase e, quando estratégico, para atacar a tese).
- **Súmula 444/STJ** — vedado usar inquéritos/ações em curso para agravar a pena-base.
- **CPP, art. 157, §1º** — inadmissibilidade das provas **derivadas** das ilícitas (teoria dos frutos da árvore envenenada) — âncora das nulidades.
- **CPP, arts. 158-A a 158-F** — **cadeia de custódia** (ver skill própria) — âncora recorrente de nulidade.
- **CF, art. 5º, LVII + CPP, art. 386, VII** — presunção de inocência e absolvição por insuficiência de provas — âncora do *in dubio pro reo*.
- Para **precedentes específicos** (números de HC/REsp/RE, temas, informativos) que sustentem insignificância, reconhecimento pessoal, tráfico privilegiado, prescrição etc.: **[NÃO VERIFICADO]** — não citar de memória; levantar e confirmar via `jurisprudencia-stj-stf`. Melhor faltar o número do que inventar o julgado.

## Erros comuns (anti-padrões)

- **Esquecer tese cabível** — não percorrer as 4 camadas e perder uma preliminar ou uma prejudicial (prescrição não vista é erro grave). O inventário exaustivo do passo 2 existe para isso.
- **Autofagia** — afirmar simultaneamente teses de mérito que se excluem (negar autoria e confessar para atenuar). Sempre em **eventualidade expressa**.
- **Inversão da ordem** — começar pela dosimetria ou pôr o mérito antes da preliminar; sinaliza rendição e pode gerar preclusão de matéria não deduzida no momento próprio (art. 396-A).
- **Eventualidade implícita** — encadear teses sem as fórmulas de transição; o juiz lê como contradição, não como subsidiariedade.
- **Tese sem prova** — mapear a tese e não indicar/requerer a prova que a sustenta já na resposta à acusação (perde-se a oportunidade do art. 396-A).
- **Citar de memória** — sustentar tese com súmula/precedente não verificado. Tudo passa pelo Citation Gate.
- **Confundir a matriz com a teoria do caso** — a matriz é o **leque** (tudo o que cabe, hierarquizado); a teoria do caso é a **hipótese central** escolhida. Uma alimenta a outra.

## Checklist final

- [ ] Percorri as **4 camadas** (preliminar → prejudicial → mérito → dosimetria) e listei toda tese plausível de cada uma?
- [ ] Rodei o **teste da autofagia** em cada par de teses de mérito?
- [ ] Defini a **tese principal** (maior força × probabilidade, alinhada à teoria do caso)?
- [ ] Ordenei as **subsidiárias em cascata**, cada uma aberta por **fórmula de eventualidade** expressa?
- [ ] **Prescrição** e demais prejudiciais foram checadas antes do mérito?
- [ ] Cada tese tem **ônus, prova e requerimento probatório** anotados (art. 396-A)?
- [ ] Antecipei a **contra-tese** acusatória de cada ponto?
- [ ] Todas as súmulas/precedentes entraram na lista do **Citation Gate** (`jurisprudencia-stj-stf`)?
- [ ] A matriz será entregue à **teoria do caso** e à peça (redação com `redacao-persuasiva-criminal`)?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta matriz é hipótese de trabalho — o mapa das teses cabíveis —, não decisão. A escolha final da estratégia, a redação e o protocolo são do **advogado responsável** (CED/OAB, art. 2º).
- **Polo:** skill do **polo defensivo** (advocacia / Defensoria). Confirme o polo do usuário antes de aplicá-la; para a Defensoria, observe a LC 80/94; na advocacia privada, o EAOAB e o **Provimento 205/2021** (publicidade).
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão vai à peça sem passar por `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.
- **Sequência recomendada:** `matriz-teses-defensivas` (mapa) → `teoria-do-caso-construcao` (hipótese central) → peça específica (resposta à acusação, alegações finais, recurso) → `redacao-persuasiva-criminal` (régua de redação) → Citation Gate.

**Padrão de redação:** ao converter a matriz em peça, aplique a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
