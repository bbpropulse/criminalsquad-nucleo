---
name: defesa-fuga-local-305
description: >-
  Use para defender fuga do local do acidente (art. 305 do CTB, Lei 9.503/97) — tese central de
  inconstitucionalidade/inexigibilidade à luz do nemo tenetur se detegere (CF, art. 5º, LXIII e
  LXIV), enfrentando o precedente de repercussão geral do STF, atipicidade por ausência do fim
  especial de eximir-se à responsabilidade (evasão por medo, risco de linchamento, socorro à vítima)
  e distinção da omissão de socorro (art. 304)… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, transito, ctb, constitucional]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-fuga-local-305"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-fuga-local-305", "defesa fuga", "fuga local"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa — Fuga do Local do Acidente (art. 305 do CTB, Lei 9.503/97)

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

Esta skill orienta a **defesa técnica na imputação do art. 305 do CTB** — "afastar-se o condutor do veículo do local do acidente, para fugir à responsabilidade penal ou civil que lhe possa ser atribuída". É um tipo de **trânsito** de baixa pena (detenção de 6 meses a 1 ano, ou multa), mas com discussão **constitucional viva**: a acusação sustenta o dever de permanecer no local; a defesa opõe o **direito de não produzir prova contra si mesmo** (*nemo tenetur se detegere*).

> **Lição central:** o art. 305 pune uma conduta **omissiva-evasiva com fim especial** — afastar-se **"para fugir à responsabilidade"**. A defesa vence em dois planos que não se confundem: (a) o plano **constitucional** (o tipo violaria o *nemo tenetur*, pois obriga o condutor a se autoincriminar permanecendo no local); e (b) o plano **da tipicidade concreta** (faltou o **elemento subjetivo especial** — o réu se afastou por medo, para buscar socorro, para evitar linchamento, e não para escapar à responsabilização). Nunca confunda o art. 305 (fugir à responsabilidade) com o art. 304 (deixar de prestar socorro): são tipos autônomos, com bens jurídicos distintos.

> **Cautela de vigência (obrigatória antes de citar):** o STF julgou a **constitucionalidade do art. 305 do CTB em sede de repercussão geral** — confira o **número do tema, do RE-paradigma, a tese fixada e a data** [NÃO VERIFICADO] pela skill `jurisprudencia-stj-stf` antes de mencionar. **Não afirme "o art. 305 é inconstitucional" como direito posto se o STF fixou tese em sentido contrário** — a tese defensiva passa a ser de **atipicidade concreta** (ausência do fim especial) e/ou de **modulação/distinção do precedente**, não de inconstitucionalidade em abstrato. Confira ainda a redação vigente do art. 305 do CTB e a existência de eventual alteração legislativa via `jurisprudencia-stj-stf`.

## Base legal

- **Art. 305 do CTB (Lei 9.503/97)** — "Afastar-se o condutor do veículo do local do acidente, para fugir à responsabilidade penal ou civil que lhe possa ser atribuída: Penas — detenção, de seis meses a um ano, ou multa." É o **tipo imputado**. O núcleo é *afastar-se*; o **fim especial** ("para fugir à responsabilidade") é elementar.
- **Art. 304 do CTB** — omissão de socorro no acidente de trânsito (**tipo distinto** — ver a fronteira abaixo). Não confundir.
- **CF, art. 5º, LXIII** — direito ao silêncio do preso/investigado; base textual do *nemo tenetur*.
- **CF, art. 5º, LXIV e LIV** — devido processo legal e ampla defesa; **CF, art. 5º, LVII** — presunção de não culpabilidade.
- **Convenção Americana de Direitos Humanos (Pacto de San José), art. 8º, 2, "g"** — direito de não ser obrigado a depor contra si mesmo; **PIDCP, art. 14, 3, "g"** — reforço convencional do *nemo tenetur* (controle de convencionalidade).
- **CP, art. 13** — nexo de causalidade; **CP, art. 18, I** — dolo (aqui, com **elemento subjetivo especial do tipo**, o "para fugir à responsabilidade").
- **CTB, arts. 301 e 302** — o dever de socorro e o homicídio culposo na direção; úteis para separar a conduta do art. 305 de outras figuras.

## Anatomia do tipo — por que a defesa nasce dele

O art. 305 é um **tipo de intenção transcendente** (delito de tendência interna transcendente): o legislador exige, **além do dolo de afastar-se**, um **fim especial de agir** — *fugir à responsabilidade penal ou civil*. Sem esse fim, **não há tipicidade**, ainda que o condutor de fato tenha deixado o local.

Decompondo:
- **Conduta (objetiva):** afastar-se do local do acidente (condutor do veículo).
- **Elemento subjetivo geral:** dolo de deixar o local.
- **Elemento subjetivo especial (elementar):** *para fugir à responsabilidade penal ou civil*. **É aqui que a defesa ataca:** se o afastamento teve outra finalidade (medo, socorro, preservação da própria integridade, desconhecimento do acidente), o fim especial **não se realizou** e o fato é **atípico**.
- **Bem jurídico protegido:** a administração da justiça / a apuração de responsabilidade no trânsito — **não** a vida ou a integridade da vítima (esse é o objeto do art. 304). Por isso os dois tipos coexistem sem *bis in idem*, mas **respondem a acusações diferentes**.

## Eixo 1 — Tese constitucional (nemo tenetur) e o enfrentamento do precedente do STF

A tese matriz da defesa: obrigar o condutor a **permanecer no local para ser responsabilizado** equivaleria a compeli-lo a **produzir prova contra si mesmo**, em choque com o *nemo tenetur se detegere* (CF, art. 5º, LXIII/LXIV; CADH, art. 8º, 2, "g").

- **Como sustentar hoje:** o STF, em repercussão geral, decidiu sobre a **constitucionalidade do art. 305** [NÃO VERIFICADO — conferir tema/RE/tese/data via `jurisprudencia-stj-stf`]. **Se a tese fixada foi pela constitucionalidade**, a defesa **não** deve afirmar o tipo como inconstitucional em abstrato (perderia credibilidade e contrariaria precedente vinculante). A estratégia madura é:
  1. **Migrar o eixo** da inconstitucionalidade **em tese** para a **atipicidade concreta** (Eixo 2) — que o precedente do STF **não afasta**, pois o Supremo validou o tipo, não dispensou o **fim especial**.
  2. **Distinguir** o caso concreto do paradigma (distinguishing): mostrar que o precedente examinou a validade abstrata do dever de permanência, mas o caso em julgamento carece do **elemento subjetivo especial** — questão de **subsunção**, não de validade da norma.
  3. **Preservar a matéria constitucional para instâncias superiores** (prequestionamento), sustentando o *nemo tenetur* como **vetor de interpretação restritiva** do tipo (interpretação conforme: o art. 305 só alcança o afastamento **doloso e finalisticamente dirigido a escapar da responsabilização**, jamais a mera saída do local).
- **Reforço convencional (controle de convencionalidade):** ainda que o STF tenha declarado a constitucionalidade, a defesa pode articular a **compatibilidade com a CADH (art. 8º, 2, "g")** e o PIDCP como parâmetro de interpretação restritiva do tipo. **Confirme a existência de precedente específico da Corte IDH ou do STF sobre o ponto via `jurisprudencia-stj-stf`** antes de citar número.

> **Cautela de honestidade argumentativa:** sustentar inconstitucionalidade **contra** tese de repercussão geral já fixada é, na prática, sustentar a superação/revisão do precedente — anuncie isso como tal (pedido de *overruling*/modulação) e **não** como direito consolidado. O ganho realista está no **Eixo 2**.

## Eixo 2 — Atipicidade concreta (ausência do fim especial de agir) — a tese mais forte

Aqui a defesa quase sempre tem o melhor terreno, **independentemente** do que o STF decidiu sobre a validade abstrata do tipo. O ônus de provar o **fim de fugir à responsabilidade** é da **acusação**; o afastamento, isoladamente, **não** presume o dolo específico.

Situações que **excluem** ou **infirmam** o fim especial (atipicidade / dúvida razoável):
- **Afastamento para buscar socorro** à vítima (hospital, chamar ajuda) — a finalidade é oposta à de fugir; aproxima-se de estado de necessidade de terceiro.
- **Evasão por medo fundado** — risco de agressão, **linchamento**, tumulto ou revolta de populares no local. A saída visa à **preservação da própria integridade física**, não a escapar da responsabilização (inexigibilidade de conduta diversa / ausência do fim especial).
- **Comparecimento posterior e espontâneo** — o condutor identifica-se depois, procura a autoridade, apresenta-se à delegacia, comunica o seguro/registra o acidente: comportamento **incompatível** com o ânimo de furtar-se à responsabilidade.
- **Identificação preservada / veículo identificável** — placa anotada, câmeras, testemunhas, documentos deixados: se a responsabilidade **permaneceu apurável**, o afastamento não frustrou a atribuição de responsabilidade (frustração do resultado que o tipo quer evitar).
- **Desconhecimento do acidente** — condutor que não percebeu o abalroamento/atropelamento; sem consciência do sinistro, não há dolo de afastar-se **do acidente**.
- **Necessidade concreta** — levar passageiro ferido, atender emergência, afastar o veículo para desobstruir via/evitar novo acidente.

> **Estrutura da tese de atipicidade:** (1) narrar o **motivo real** do afastamento; (2) demonstrar que a **responsabilidade permaneceu apurável** (o bem jurídico não foi lesado); (3) desconstruir a **inferência** acusatória de que "saiu = quis fugir", exigindo prova do fim especial; (4) na dúvida, **in dubio pro reo** sobre o elemento subjetivo.

## Fronteira crítica — art. 305 (fuga) × art. 304 (omissão de socorro)

Erro recorrente da acusação (e a explorar na defesa): **confundir os dois tipos** ou imputá-los cumulativamente sem base.

| Aspecto | Art. 305 — fuga do local | Art. 304 — omissão de socorro |
|---|---|---|
| **Bem jurídico** | Administração da justiça / apuração de responsabilidade | Vida e integridade da vítima |
| **Conduta** | Afastar-se do local | Deixar de prestar socorro (podendo fazê-lo) |
| **Elemento especial** | Fim de **fugir à responsabilidade** | Não exige fim especial; é o **dever de socorro** |
| **Vítima ferida?** | Irrelevante para o tipo (pode não haver ferido) | **Pressupõe vítima que necessita de socorro** |
| **Se prestou socorro e depois saiu** | Pode configurar 305 se saiu para fugir à responsabilidade | **Afasta o 304** (socorro foi prestado) |

- **Tese de exclusão do 304:** se o condutor **prestou** socorro (levou ao hospital, acionou o SAMU), o art. 304 **não incide**; e, se saiu **para socorrer**, também não há o fim especial do 305.
- **Vedação ao *bis in idem*:** não se pode punir a **mesma** conduta duas vezes; imputação cumulativa exige **fatos distintos** (deixar de socorrer **e**, além disso, evadir-se para escapar da responsabilidade). Atacar a dupla imputação quando o núcleo fático é único.
- **Absorção/consunção:** conforme o caso, discutir se uma figura absorve a outra — **confirme a orientação atual do STJ sobre concurso entre 304 e 305 via `jurisprudencia-stj-stf`** [NÃO VERIFICADO], evitando afirmar concurso ou consunção sem respaldo.

## Teses e contra-teses

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Atipicidade por ausência do fim especial | Elementar "para fugir à responsabilidade" não provada | Afastamento indica dolo de fuga |
| Interpretação conforme à CF (restritiva) | *Nemo tenetur* (CF 5º LXIII/LXIV; CADH 8º,2,"g") | STF validou o tipo em repercussão geral [NÃO VERIFICADO] |
| Evasão por medo/linchamento | Inexigibilidade de conduta diversa; preservação da integridade | Fuga é fuga; medo não elide o tipo |
| Afastou-se para socorrer | Finalidade oposta à de fugir; estado de necessidade de terceiro | Deveria retornar/identificar-se |
| Responsabilidade permaneceu apurável | Bem jurídico não lesado (placa/câmeras/testemunhas) | O tipo pune o afastamento, não o resultado |
| Comparecimento espontâneo posterior | Comportamento incompatível com ânimo de fuga | Comparecimento tardio não retroage |
| Prescrição / pena baixa | Pena máxima de 1 ano → prescrição em 4 anos (art. 109, V, CP) [conferir marcos] | Curso normal do prazo |
| Substituição / transação penal / suspensão | Infração de menor potencial ofensivo (JECrim) | — |

## Providências processuais e despenalizadoras (aproveitar a pena baixa)

Pela pena máxima (1 ano), o art. 305 é, em regra, **infração de menor potencial ofensivo** — atenção às medidas da Lei 9.099/95:
- **Transação penal** (art. 76 da Lei 9.099/95) e **composição civil** — avaliar conveniência antes de assumir a via contenciosa.
- **Suspensão condicional do processo** (art. 89 da Lei 9.099/95) quando cabível (pena mínima ≤ 1 ano).
- **Competência do JECrim** e rito sumaríssimo — conferir eventual conexão que desloque a competência (ex.: se houver homicídio culposo — art. 302 CTB — em concurso).
- **Prescrição:** pena máxima de 1 ano → prazo prescricional de **4 anos** (art. 109, V, do CP), com atenção aos marcos interruptivos e à eventual **prescrição em perspectiva** — o cálculo determinístico deve ser feito pela `calculadora-prescricao` (conferir data do fato, recebimento da denúncia e demais marcos).
- **Multa isolada:** o preceito secundário admite **multa** como alternativa à detenção — pleitear a modalidade mais branca.

## Roteiro de análise/defesa (passo a passo)

1. **Confirmar a redação vigente** do art. 305 do CTB e a **tese de repercussão geral do STF** sobre a constitucionalidade (`jurisprudencia-stj-stf`) — antes de escolher o eixo.
2. **Isolar o fato:** houve acidente? o cliente era **condutor**? afastou-se? **por quê**?
3. **Atacar o fim especial (Eixo 2):** reconstruir o motivo real do afastamento (socorro, medo, desconhecimento, necessidade) — é a tese mais robusta.
4. **Demonstrar apurabilidade da responsabilidade:** placa, câmeras, testemunhas, seguro, comparecimento posterior — o bem jurídico não foi lesado.
5. **Separar do art. 304:** houve socorro? há vítima que precisava de socorro? afastar imputação cumulativa/consunção indevida.
6. **Sustentar o vetor constitucional (Eixo 1)** como interpretação restritiva e para **prequestionamento**, sem afirmar inconstitucionalidade contra tese vinculante já fixada.
7. **Explorar despenalização:** transação, suspensão do processo, JECrim, multa isolada, **prescrição** (via `calculadora-prescricao`).
8. **Dosimetria (se condenação):** buscar pena mínima e substituição/multa — método na `calculadora-dosimetria`.
9. **Citation Gate + revisão humana:** todo número de tema/RE/HC/REsp e toda súmula passam por `jurisprudencia-stj-stf`; a peça é rascunho sob revisão do(a) advogado(a).

## Súmulas e precedentes (sob o Citation Gate)

- **STF — constitucionalidade do art. 305 do CTB (repercussão geral):** existe tese fixada. **Número do tema, do RE-paradigma, redação da tese e data: [NÃO VERIFICADO]** — conferir **obrigatoriamente** via `jurisprudencia-stj-stf` antes de citar. **Não** cite número de memória.
- **STF — alcance do *nemo tenetur se detegere*:** jurisprudência consolidada de que ninguém é obrigado a produzir prova contra si (base para interpretação restritiva). **Qualquer número de HC/RE específico: [NÃO VERIFICADO]** — conferir via `jurisprudencia-stj-stf`.
- **STJ — concurso/consunção entre arts. 304 e 305 do CTB; exigência do fim especial no art. 305:** há orientação, mas **todo número de REsp/AgRg/HC e informativo é [NÃO VERIFICADO]** — conferir via `jurisprudencia-stj-stf`.
- **Dispositivos com certeza (podem ser citados):** art. 305 e art. 304 do CTB; CF, art. 5º, LXIII, LXIV, LIV, LVII; CADH, art. 8º, 2, "g"; PIDCP, art. 14, 3, "g"; CP, arts. 13, 18, 109, V; Lei 9.099/95, arts. 76 e 89.

> **Regra de ouro do Citation Gate:** ensine a **tese e o dispositivo** — que são seguros — e **jamais invente número de acórdão, tema ou informativo**. Na dúvida sobre um precedente específico, marque **[NÃO VERIFICADO]** e remeta a `jurisprudencia-stj-stf`. Omitir vence inventar (há sanções reais por jurisprudência fabricada por IA).

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Afirmar "o art. 305 é inconstitucional" como direito posto **depois** de o STF ter fixado tese pela constitucionalidade — sustentar, no máximo, *overruling*/interpretação conforme e migrar para a atipicidade concreta.
- Presumir o **fim especial** ("saiu, logo quis fugir") — o dolo específico **tem de ser provado pela acusação**.
- Confundir art. 305 (fugir à responsabilidade) com art. 304 (omissão de socorro) — bens jurídicos e elementares distintos.
- Aceitar **imputação cumulativa** 304+305 sobre **um único** núcleo fático (risco de *bis in idem*).
- Ignorar as vias despenalizadoras (transação, suspensão do processo, multa isolada) e a **prescrição** de uma infração de pena baixa.
- Citar número de tema/RE/HC/REsp de memória.

**Checklist antes de protocolar:**
- [ ] Redação vigente do art. 305 e a **tese de repercussão geral do STF** conferidas via `jurisprudencia-stj-stf`?
- [ ] O **fim especial** ("para fugir à responsabilidade") foi efetivamente atacado (motivo real do afastamento narrado e provado)?
- [ ] Demonstrada a **apurabilidade da responsabilidade** (placa/câmeras/testemunhas/comparecimento posterior)?
- [ ] Fronteira com o **art. 304** tratada (houve socorro? há vítima que precisava? há dupla imputação a impugnar)?
- [ ] Tese constitucional (*nemo tenetur*) usada como **interpretação restritiva** e **prequestionamento**, sem contrariar tese vinculante?
- [ ] Vias despenalizadoras avaliadas (transação/art. 76, suspensão/art. 89, JECrim, multa isolada)?
- [ ] **Prescrição** verificada na `calculadora-prescricao` (pena máx. 1 ano → 4 anos, art. 109, V, CP)?
- [ ] Todos os números de precedente marcados **[NÃO VERIFICADO]** e conferidos via `jurisprudencia-stj-stf`?
- [ ] Peça submetida à **revisão humana** do(a) advogado(a) responsável?

## Lembretes finais

- **A elementar é o fim especial:** sem "para fugir à responsabilidade", **não há crime** — essa é a defesa mais segura, imune ao precedente do STF sobre a validade abstrata do tipo.
- **Dois eixos, um alvo:** o constitucional serve à **interpretação restritiva** e ao prequestionamento; a **atipicidade concreta** ganha o caso.
- **304 ≠ 305:** vidas × apuração de responsabilidade — não confunda nem aceite cumulação indevida.
- **Pena baixa é oportunidade:** JECrim, transação, suspensão do processo, multa isolada e **prescrição** entram cedo na estratégia.
- **Citation Gate inegociável:** dispositivo e tese com certeza; **número de acórdão, tema e informativo só via `jurisprudencia-stj-stf`**.

## Nota de conformidade

Material de **apoio técnico**; toda peça é **rascunho sob revisão humana obrigatória** do(a) advogado(a) responsável (defesa criminal). A responsabilidade pela tese, pela subsunção e pelas citações é sempre profissional. Ética por polo: advocacia sob o **Estatuto da OAB, o Código de Ética e Disciplina e o Provimento 205/2021 do CFOAB**; se a atuação for do **Ministério Público**, observar o **CNMP**; se da **Defensoria Pública**, a **LC 80/94**. **Esta skill é do polo de DEFESA.** Toda súmula, tese ou precedente citado passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` antes do uso.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
