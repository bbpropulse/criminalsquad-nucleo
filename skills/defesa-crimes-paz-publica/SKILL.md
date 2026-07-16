---
name: defesa-crimes-paz-publica
description: >-
  Use ao defender em crimes contra a paz pública (Título IX da Parte Especial do CP) — incitação ao
  crime (art. 286), apologia de crime ou criminoso (art. 287), associação criminosa (art. 288, a
  antiga quadrilha/bando) e constituição de milícia privada (art. 288-A). Gatilhos: incitação ao
  crime, apologia de crime, associação criminosa, formação de quadrilha ou bando, milícia privada,
  três ou mais pessoas, estabilidade e…. Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, parte-especial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-paz-publica"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-paz-publica", "defesa crimes", "crimes publica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em crimes contra a paz pública (CP, arts. 286–288-A)

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

Esta skill orienta a **defesa criminal** nos crimes contra a paz pública (Título IX da Parte Especial do CP): **incitação ao crime** (art. 286), **apologia de crime ou criminoso** (art. 287), **associação criminosa** (art. 288, a antiga "quadrilha ou bando") e **constituição de milícia privada** (art. 288-A). São crimes de **perigo abstrato**, cujo bem jurídico é o **sentimento coletivo de segurança e tranquilidade** — o que os aproxima perigosamente da mera manifestação de pensamento e do concurso eventual de pessoas, exigindo defesa técnica atenta à **tipicidade material** e às **liberdades constitucionais**.

> **Lição central:** a fronteira decisiva destes tipos é entre **conduta** e **opinião**, e entre **associação** e **ajuste ocasional**. Incitar / fazer apologia exige provocação concreta e pública à prática de **crime determinado** — não a defesa abstrata de ideias, teses ou mudança da lei (protegida pelo art. 5º, IV, IX e XVI, CF). Na associação (288), o divisor de águas é a **estabilidade e a permanência** do vínculo: sem elas há mero **concurso de pessoas** (art. 29), não associação. Ataque esses dois eixos — publicidade/determinação e estabilidade — **antes** de discutir pena.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 286 a 288-A. O **art. 288 foi reescrito pela Lei 12.850/2013** — trocou o *nomen iuris* ("quadrilha ou bando" → "associação criminosa") e **reduziu o mínimo de 4 para 3 pessoas**; para fatos **anteriores a 19/09/2013** exigem-se **4** agentes (irretroatividade da lei mais gravosa — CF, art. 5º, XL), ressalvada a **permanência** que avance na vigência da lei nova (Súmula 711/STF — [conferir]). O **art. 286 ganhou parágrafo único pela Lei 14.197/2021** (incitação a animosidade entre/das Forças Armadas). O **art. 288-A** foi inserido pela **Lei 12.720/2012**. Confira leis, súmulas e teses via `jurisprudencia-stj-stf` antes de fundamentar.

## Base legal

- **Art. 286, CP** — incitação, publicamente, à prática de crime (detenção, 3–6 meses, ou multa); **parágrafo único** (Lei 14.197/21) — incitar animosidade entre as Forças Armadas ou delas contra os poderes/instituições.
- **Art. 287, CP** — apologia, publicamente, de **fato criminoso** ou de **autor de crime** (detenção, 3–6 meses, ou multa).
- **Art. 288, CP** — associação de **3 ou mais** pessoas para o fim específico de cometer **crimes** (reclusão, 1–3 anos). **Parágrafo único:** pena até **metade** se a associação é **armada** ou há participação de **criança/adolescente**.
- **Art. 288-A, CP** — constituir/organizar/integrar/manter/custear organização paramilitar, milícia particular, grupo ou esquadrão para praticar crimes do CP (reclusão, 4–8 anos).
- **Art. 5º, IV, IX e XVI, CF** — liberdades de expressão, manifestação do pensamento e reunião: **limite constitucional** dos arts. 286 e 287.
- **Art. 29, CP** — concurso de pessoas: **fronteira** com o art. 288.
- **Art. 35, Lei 11.343/06** — associação para o tráfico (norma **especial**). **Lei 12.850/13, arts. 1º, §1º, e 2º** — organização criminosa (**não confundir** com o 288).

---

## Metodologia de defesa — roteiro por tipo penal

### Art. 286 — Incitação ao crime

**Elementos:** *incitar* (instigar, estimular) **publicamente** (perante número indeterminado de pessoas, ou com aptidão de difusão ampla — redes sociais ampliam o alcance) a prática de **crime** (não de contravenção nem de fato lícito), **determinado ou determinável**. Crime **formal / de perigo abstrato**: consuma-se com a incitação pública, independentemente de qualquer resultado.

**Teses defensivas:**
- **Atipicidade por defesa abstrata de ideia** — criticar a lei, defender sua revogação ou discutir teses não é incitar conduta concreta (art. 5º, IV/IX, CF).
- **Falta de publicidade** — manifestação em círculo restrito/privado não preenche o "publicamente".
- **Objeto que não é crime** — incitação a **contravenção** ou a fato atípico é **atípica** (o tipo exige "crime").
- **Indeterminação do crime incitado** — apelo genérico ("à violência", "ao caos") sem crime identificável não subsome ao tipo.
- **Ausência de dolo** — exaltação retórica, ironia, arte ou hipérbole sem vontade de provocar a prática do crime.

**Contra-tese (acusação):** o alcance em redes sociais reforça a publicidade e o perigo; a incitação a crime determinado, com dolo, basta (crime formal). Rebata pela **ausência de crime concreto** e pela **liberdade de expressão**.

### Art. 287 — Apologia de crime ou criminoso

**Elementos:** *fazer apologia* (elogiar, exaltar, glorificar) **publicamente** de **fato criminoso** concreto **já ocorrido** (não de crime em abstrato) **ou** de **autor de crime** — em razão do crime. Perigo abstrato.

**Teses defensivas:**
- **Distinção entre apologia punível e livre manifestação** — defender publicamente a **descriminalização** de uma conduta é exercício legítimo das liberdades de expressão e reunião, não apologia (linha da **"Marcha da Maconha"** — ADPF 187 e ADI 4274, STF; [conferir via `jurisprudencia-stj-stf`]).
- **Ausência de fato criminoso concreto e determinado** — o tipo não alcança a defesa genérica/abstrata de ideias ou condutas.
- **"Autor de crime" e exigência de fato típico** — exaltar pessoa fora do contexto do crime, ou sem crime demonstrado, esvazia o tipo.
- **Falta de publicidade / ausência de dolo de apologia.**

**Contra-tese (acusação):** a exaltação estimula a reiteração e fere o sentimento de segurança. Rebata separando **exaltar a ideia/crítica à lei** (lícito) de **glorificar o crime concreto** (típico).

### Art. 288 — Associação criminosa

**Elementos (cumulativos):** (1) **3 ou mais** pessoas (4+ para fatos pré-19/09/2013); (2) **estabilidade e permanência** do vínculo associativo — requisito jurisprudencial nuclear que **distingue do concurso eventual**; (3) **fim específico de cometer crimes** (pluralidade e **indeterminação** dos delitos visados). Crime **autônomo, formal e permanente**: consuma-se com a associação estável, **independentemente** de os crimes-fim virem a ser praticados.

**Teses defensivas (as mais fortes):**
- **Ausência de estabilidade/permanência → mero concurso de pessoas (art. 29)** — grupo reunido para **um** crime determinado, sem *animus* associativo duradouro, **não** é associação. É a tese central.
- **Número insuficiente** de agentes (menos de 3; ou menos de 4 para fatos anteriores a 2013) — atipicidade.
- **Fim voltado a crime único/determinado** — falta a finalidade de cometer **crimes** (indeterminados).
- **Falta de prova da adesão individual** — presença ou parentesco/convivência não prova vínculo associativo; exija **individualização da conduta** de cada acusado.
- **Concurso aparente / especialidade** — se o fim é o **tráfico**, aplica-se o **art. 35 da Lei 11.343/06** (norma especial), afastando o 288 (evita dupla incidência).

**Contra-tese (acusação):** responder pela associação (288) **e** pelos crimes efetivamente cometidos **não é** *bis in idem* (condutas autônomas — a associação é crime de perigo, independe da execução). Rebata negando a **estabilidade** (é o elo mais frágil da acusação) e exigindo prova da **permanência** do vínculo.

### Art. 288-A — Constituição de milícia privada

**Elementos:** constituir, organizar, integrar, manter ou custear **organização paramilitar, milícia particular, grupo ou esquadrão** com a finalidade de praticar **qualquer** crime do CP. Pena elevada (4–8 anos).

**Teses defensivas:**
- **Tipicidade estrita** — o tipo é **aberto** e criticado pela doutrina; exija demonstração da **estrutura paramilitar/miliciana** (hierarquia, aparato, finalidade delitiva), sem a qual se retorna ao 288 (mais brando).
- **Ausência de finalidade delitiva estruturada** ou de estrutura paramilitar → **desclassificação** para associação criminosa (288) ou atipicidade.
- **Individualização** da adesão de cada integrante e do dolo.

---

## Quadro comparativo — figuras associativas (não confundir)

| Figura | Base legal | Nº mínimo | Requisito central | Pena |
|---|---|---|---|---|
| **Concurso de pessoas** | art. 29, CP | 2 | vínculo **eventual** para crime determinado | pena do crime |
| **Associação criminosa** | art. 288, CP | 3 (4 pré-2013) | **estabilidade + permanência** p/ crimes indeterminados | 1–3 anos |
| **Associação p/ tráfico** | art. 35, Lei 11.343/06 | 2 | fim de traficar (arts. 33/34), norma **especial** | 3–10 anos |
| **Organização criminosa** | Lei 12.850/13, arts. 1º, §1º, e 2º | 4 | estrutura ordenada + divisão de tarefas + vantagem + infrações c/ pena máx. > 4 anos (ou transnacional) | 3–8 anos |
| **Milícia privada** | art. 288-A, CP | (lei silente) | estrutura paramilitar/milícia/esquadrão p/ crimes do CP | 4–8 anos |

> **Uso defensivo do quadro:** a acusação frequentemente rotula como "organização criminosa" ou "milícia" o que é, no máximo, associação (288) — ou mesmo simples concurso (art. 29). **Desclassificar para baixo** reduz pena, altera regime e reabre benefícios processuais. Cada requisito ausente é uma tese.

---

## Consequências processuais favoráveis (mapear sempre)

- **Arts. 286 e 287** (máx. 6 meses) → **infração de menor potencial ofensivo**: competência do **JECRIM** e cabimento de **transação penal** (art. 76 da Lei 9.099/95).
- **Suspensão condicional do processo** (art. 89 da Lei 9.099/95, pena mínima ≤ 1 ano) → cabível em **286, 287 e 288** (mín. 1 ano). **Não** cabe no 288-A (mín. 4 anos).
- **ANPP** (art. 28-A, CPP; pena mínima **inferior** a 4 anos) → em tese cabível em **286, 287 e 288**; **incabível no 288-A** (mínimo = 4 anos). Atenção às vedações (reincidência, habitualidade) que a acusação costuma opor — combata a alegação de habitualidade.
- **Dosimetria** — no 288, a **causa de aumento** do parágrafo único (associação armada / com criança ou adolescente) deve ser individualizada e provada; para a dose da pena, apoie-se na skill/calculadora de **dosimetria** do acervo.
- **Competência** — em regra **Justiça Estadual**; desloca-se à **Justiça Federal** apenas se atingido bem/interesse da União (art. 109, IV, CF) — [conferir hipótese concreta].

---

## Precedentes e súmulas (sob Citation Gate)

> **Não cite de memória.** Toda súmula/tese/acórdão passa **obrigatoriamente** por `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes do uso. Prefira **tese + dispositivo** a número de acórdão. Precedente específico incerto → marque **[NÃO VERIFICADO]** e confira.

- **Estabilidade e permanência como requisito da associação (art. 288)** — entendimento consolidado de STF/STJ que distingue a associação do concurso eventual. Afirme como **tese** e confirme o precedente atual via gate. [NÃO VERIFICADO — conferir julgado específico]
- **Liberdade de expressão x apologia/incitação** — a defesa pública da **descriminalização** é exercício legítimo das liberdades (linha da "Marcha da Maconha", **ADPF 187** e **ADI 4274**, STF). Confirme redação/alcance via gate antes de citar. [conferir]
- **Súmula 711/STF** — crime **permanente**/continuado: aplica-se a lei mais grave se a permanência se estende à sua vigência (relevante para o **nº de agentes** do 288 em fatos que cruzam 19/09/2013). [conferir]
- **Súmula 588/STJ** e teses sobre **substituição/regime** em crime cometido com violência/grave ameaça — verificar incidência caso o crime-fim as envolva. [conferir]

Se o precedente exato não for confirmável, **sustente a tese pelo dispositivo legal** (elementos do tipo, art. 29, art. 5º da CF) — argumento normativo não depende de acórdão.

---

## Erros comuns / anti-padrões (evitar)

- Tratar **crítica à lei / defesa da descriminalização** como incitação ou apologia (viola a liberdade de expressão — ADPF 187).
- Aceitar a imputação de **associação (288)** sem exigir prova de **estabilidade e permanência** (é o ponto mais frágil da acusação).
- Confundir **associação criminosa** com **organização criminosa** ou **milícia** — cada uma tem requisitos e penas próprias; a desclassificação para baixo é dever da defesa.
- Aplicar **3 pessoas** a fatos **anteriores a 19/09/2013** (então eram **4**) — erro de lei penal no tempo.
- Ignorar a **especialidade** do art. 35 da Lei 11.343/06 quando o fim associativo é o tráfico.
- Esquecer os **benefícios processuais** (transação, sursis processual, ANPP) cabíveis em 286/287/288.
- Não **individualizar** a conduta de cada acusado no 288/288-A (responsabilidade penal é pessoal).
- Citar súmula/acórdão **sem passar pelo gate** de verificação.

## Checklist da defesa

- [ ] Tipo corretamente **classificado** (286 / 287 / 288 / 288-A) e **redação vigente** conferida?
- [ ] **286/287:** há **publicidade** e **crime concreto/determinado** — ou é defesa abstrata de ideia (atípica)?
- [ ] **286/287:** a conduta está protegida pela **liberdade de expressão/reunião** (art. 5º, IV/IX/XVI, CF; ADPF 187)?
- [ ] **288:** há **estabilidade e permanência** provadas — ou é **mero concurso de pessoas** (art. 29)?
- [ ] **288:** número mínimo (**3**, ou **4** para fatos pré-2013) atendido? Fim voltado a **crimes** (indeterminados)?
- [ ] **288 vs. 35 da Lei 11.343/06 vs. Lei 12.850/13:** afastada a figura **mais grave** por ausência de requisito?
- [ ] **288-A:** demonstrada a **estrutura paramilitar/miliciana** — ou cabe desclassificar para o 288?
- [ ] **Individualização** da conduta e do dolo de cada acusado?
- [ ] **Benefícios** mapeados (transação / sursis processual / ANPP) e vedações rebatidas?
- [ ] **Dosimetria** e causas de aumento (parágrafo único do 288) conferidas?
- [ ] **Citações verificadas** via `jurisprudencia-stj-stf` e **revisão humana** do advogado responsável?

---

## Nota de conformidade

- **Perspectiva:** esta skill adota o **polo de defesa** (`polo_acusacao: false`). Havendo atuação pelo Ministério Público ou assistência de acusação, inverta o enfoque (foco em provar estabilidade, publicidade e adesão) e observe a ética do respectivo polo.
- **Revisão humana obrigatória:** todo produto é **rascunho técnico** — hipótese a confirmar. A responsabilidade pela tese e pela peça é sempre do **advogado** (EAOAB; CED).
- **Citation Gate:** nenhuma lei, súmula, tese ou precedente entra na peça sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência alucinada por IA).
- **Vigência:** reconfira arts. 286–288-A e as alterações das Leis 12.720/12, 12.850/13 e 14.197/21 antes de peticionar.

## Lembretes finais

- **Conduta x opinião** (286/287) e **associação x ajuste ocasional** (288) — são os dois eixos que ganham o caso.
- **Estabilidade e permanência** é o elo mais frágil da acusação por associação — ataque-o primeiro.
- **Desclassifique para baixo:** organização criminosa → 288 → concurso de pessoas; milícia → 288.
- **Lei penal no tempo:** 4 pessoas para fatos pré-2013; cuidado com a permanência (Súmula 711/STF).
- **Especialidade:** fim de tráfico → art. 35 da Lei 11.343/06, não o 288.
- **Não esqueça os benefícios** (transação, sursis processual, ANPP) — mudam o desfecho.
- **Conferir vigência e citações** via `jurisprudencia-stj-stf` antes de qualquer afirmação normativa.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
