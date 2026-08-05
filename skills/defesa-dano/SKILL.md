---
name: defesa-dano
description: >-
  Use ao defender acusado de DANO (art. 163 CP) e figuras próximas — exigência de dolo (dano culposo
  é atípico), impugnação das qualificadoras do parágrafo único (violência/grave ameaça, substância
  inflamável/explosiva, patrimônio público, motivo egoístico/prejuízo considerável), ação penal
  PRIVADA no dano simples (decadência, renúncia, perdão), insignificância, e fronteira com dano
  ambiental (Lei 9.605) e… Não use para conclusão definitiva sem autos suficientes, fonte atual ou
  revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, crimes-patrimonio, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-dano"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-dano", "defesa dano"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Dano (art. 163 do Código Penal) e figuras próximas

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

Esta skill orienta a **estratégia e a redação da defesa** do acusado de **dano** (art. 163 do CP) — crime de destruir, inutilizar ou deteriorar coisa alheia — e das figuras vizinhas (introdução ou abandono de animais em propriedade alheia, art. 164; dano em coisa de valor artístico/arqueológico/histórico, arts. 165 e 166, hoje em grande parte absorvidos pela legislação especial). É uma defesa de **alto rendimento** porque conjuga uma **atipicidade estrutural** (não há dano culposo), um **regime de ação penal** que abre portas processuais (o dano simples é de **ação privada**) e **qualificadoras** frequentemente mal capituladas.

> **Lição central:** antes de discutir mérito, **classifique a modalidade e o regime de ação**. Pergunte, nesta ordem: (1) há **dolo** de danificar (o dano **culposo é atípico** — não há previsão)? (2) a coisa é **alheia** (dano em coisa própria é atípico)? (3) incide alguma **qualificadora** do parágrafo único — e ela foi corretamente imputada? (4) qual é a **ação penal** cabível (privada no simples; pública nas hipóteses do art. 167)? Cada resposta abre uma tese autônoma. Errar o regime de ação (tratar como pública o que é privada) rende **decadência** e trancamento.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** do art. 163 e seu parágrafo único, do art. 164, dos arts. 165-167 do CP e do art. 62 da **Lei 9.605/98** (dano ambiental/patrimônio cultural) antes de fundamentar. Confira também súmulas, temas repetitivos e eventual *overruling* pela skill `jurisprudencia-stj-stf`. Não cite número de HC/REsp/RE, informativo ou tema sem verificação — prefira ensinar a **tese e o dispositivo** a arriscar um acórdão.

## Base legal

- **Art. 163, *caput*, CP** — Dano: "Destruir, inutilizar ou deteriorar coisa alheia". Pena: detenção de 1 a 6 meses, ou multa (dano simples).
- **Art. 163, parágrafo único, CP** — Dano **qualificado** (pena de detenção de 6 meses a 3 anos, e multa, além da pena correspondente à violência):
  - **I** — com **violência à pessoa ou grave ameaça**;
  - **II** — com emprego de **substância inflamável ou explosiva**, se o fato não constitui crime mais grave;
  - **III** — contra o **patrimônio da União, Estados, Municípios, empresa concessionária de serviços públicos ou sociedade de economia mista** (redação da Lei 13.531/2017, que ampliou o rol);
  - **IV** — por **motivo egoístico** ou **com prejuízo considerável para a vítima**.
- **Art. 164, CP** — Introdução ou abandono de animais em propriedade alheia (crime de dano por assimilação; **ação penal privada**).
- **Arts. 165 e 166, CP** — Dano em coisa de valor artístico/arqueológico/histórico e alteração de local especialmente protegido (em regra **derrogados** pela Lei 9.605/98, art. 62 e 63 — verificar a incidência da lei especial).
- **Art. 167, CP** — **Somente se procede mediante queixa** o dano do *caput* (163) e o do inciso IV do parágrafo único; nos demais casos (parágrafo único, I a III), a ação é **pública**.
- **Fronteiras:** **Lei 9.605/98, art. 62** (dano a bem cultural/protegido) e **art. 65** (pichação/grafitagem em edificação ou monumento urbano); **art. 161, §1º, II, CP** (esbulho/turbação — crime diverso, de posse, não de destruição).

## Passo 0 — Tipicidade e a atipicidade estrutural

O tipo do art. 163 exige uma conduta (destruir, inutilizar, deteriorar), um objeto (**coisa alheia**, móvel ou imóvel) e **dolo**. Três atipicidades estruturais devem ser rastreadas antes de qualquer coisa:

1. **Dano culposo é atípico.** Não existe modalidade culposa do dano no CP. Se a destruição decorreu de **imprudência, negligência ou imperícia** (ex.: acidente, incêndio acidental, colisão sem dolo), **o fato é atípico na esfera penal** — resolve-se em **responsabilidade civil** (reparação), jamais em crime. É a tese de maior rendimento e a mais esquecida pela acusação.
2. **Coisa própria é atípica.** O objeto deve ser **alheio**. Destruir coisa própria (ainda que gravada, penhorada ou em condomínio) não configura dano — pode configurar outro crime (ex.: fraude à execução, art. 179; subtração de coisa comum, art. 156), mas não o art. 163. **Coisa de ninguém (res nullius) ou abandonada (res derelicta)** também não serve de objeto.
3. **Dolo específico? Debate doutrinário — use a favor.** Corrente tradicional exige, além do dolo de danificar, o **animus nocendi** (vontade de causar prejuízo, sem proveito próprio); por isso quem destrói para **subtrair** (arrombar porta para furtar) responde só pelo furto, sendo o dano **meio absorvido** (princípio da consunção — dano como *ante factum* impunível). A defesa explora a consunção sempre que o dano for **instrumento** de outro crime.

## Passo 1 — Insignificância (bagatela)

O dano é terreno fértil para o **princípio da insignificância** (atipicidade material) quando presentes os vetores consagrados: **mínima ofensividade**, **ausência de periculosidade social**, **reduzido grau de reprovabilidade** e **inexpressividade da lesão** ao bem jurídico. Aplicar com cautela reforçada:

- **Valor irrisório da coisa** e **plena reparabilidade** favorecem a bagatela (ex.: risco superficial em veículo, quebra de objeto de ínfimo valor).
- **Cautela — dano ao patrimônio público:** há forte resistência jurisprudencial à insignificância quando o objeto é **bem público** (parágrafo único, III), por razões de proteção reforçada do erário e de prevenção. **Verificar o entendimento atual** via `jurisprudencia-stj-stf` — não afirme aplicação automática.
- **Reincidência/habitualidade** costuma afastar a bagatela pela reprovabilidade elevada — antecipe a contra-tese.

## Passo 2 — O regime de ação penal (art. 167) — a chave processual

Este é o ponto mais subestimado e mais poderoso da defesa em dano:

- **Dano simples (art. 163, *caput*) → ação penal PRIVADA** (só se procede mediante **queixa**, art. 167). Consequências:
  - **Decadência (art. 103 CP / art. 38 CPP):** o ofendido tem **6 meses** contados do conhecimento da autoria para oferecer queixa. Passado o prazo, **extingue-se a punibilidade** — tese de trancamento.
  - **Renúncia (art. 104 CP), perdão do ofendido (arts. 105-106 CP) e perempção (art. 60 CPP):** causas extintivas típicas da ação privada. Rastreie composição civil, recibos de reparação, inércia processual do querelante.
  - **Legitimidade e forma:** queixa deve conter os requisitos do art. 41 CPP e vir por **advogado com poderes especiais**; defeitos são impugnáveis.
- **Dano qualificado por violência/grave ameaça (I), inflamável/explosiva (II) e contra patrimônio público (III) → ação penal PÚBLICA incondicionada.**
- **Dano qualificado por motivo egoístico ou prejuízo considerável (IV) → ação PRIVADA** (o art. 167 remete ao inciso IV) — ponto sensível: verifique a redação vigente do art. 167 antes de afirmar.

➡️ **Tese defensiva (forte):** se a acusação capitulou como **dano simples** (ou inciso IV) e a ação foi promovida por **denúncia do MP** (ação pública) — ou se decorreram mais de 6 meses sem queixa —, **falta legitimidade/condição de procedibilidade**, cabendo rejeição da inicial ou trancamento por decadência.

## Passo 3 — Impugnar as qualificadoras (parágrafo único)

Cada qualificadora tem um flanco de defesa próprio:

| Qualificadora | Núcleo a atacar | Tese defensiva típica |
|---|---|---|
| **I — violência/grave ameaça** | Violência **contra a pessoa** (não contra a coisa) | Se a força foi **sobre o objeto** (arrombar, quebrar), não há a qualificadora; o dano à coisa é elementar do *caput*, não "violência à pessoa". |
| **II — inflamável/explosiva** | Emprego efetivo de substância + subsidiariedade | "Se o fato não constitui crime mais grave" — verificar **incêndio (art. 250)** ou **explosão (art. 251)**, que **absorvem** o dano. E provar que houve emprego real da substância. |
| **III — patrimônio público** | Titularidade do bem no rol do inciso | Bem de **particular** ou de ente **fora do rol** não qualifica; concessionária/economia mista exige enquadramento. Discutir a **insignificância** com as cautelas do Passo 1. |
| **IV — motivo egoístico / prejuízo considerável** | Prova do **elemento subjetivo** especial ou da **extensão** do prejuízo | "Motivo egoístico" exige **proveito/vantagem** ao agente — mera vingança ou impulso não basta; "prejuízo considerável" é **relativo à vítima** e deve ser **demonstrado**, não presumido. |

- **Concurso e proporcionalidade:** na qualificadora I, a pena da **violência** é aplicada **em separado** ("além da pena correspondente à violência") — atenção ao concurso e a eventual **bis in idem**.
- **Emendatio/mutatio (arts. 383-384 CPP):** se a prova não sustenta a qualificadora, pleiteie a **desclassificação para o dano simples** (com a consequência do regime de ação privada — Passo 2).

## Passo 4 — Fronteiras típicas (não confundir os crimes)

Delimitar o tipo correto costuma ser a diferença entre condenação e absolvição:

- **Dano x Pichação/grafitagem (Lei 9.605/98, art. 65).** Pichar/grafitar edificação ou monumento urbano é **crime ambiental próprio** (art. 65), não dano do art. 163 — inclusive com **causa de exclusão** para grafite artístico autorizado/consentido. Capitular como art. 163 pode ser **atipicidade** relativa (fato é o do art. 65) — tese de desclassificação/absolvição.
- **Dano x Crime ambiental / patrimônio cultural (Lei 9.605/98, arts. 62-63).** Destruir/danificar bem especialmente protegido (valor artístico, arqueológico, histórico, unidade de conservação) migra para a **lei especial**, que em regra **derroga** os arts. 165-166 do CP. Ver skill `crimes-ambientais-defesa`.
- **Dano x Esbulho/turbação (art. 161, §1º, II, CP).** O art. 161 protege a **posse** (invadir com violência/concurso para esbulhar) — não a integridade da coisa. Destruir ≠ esbulhar.
- **Dano x Furto/roubo (consunção).** Destruir para **subtrair** → o dano é **meio** absorvido pelo crime-fim (furto/roubo qualificado por rompimento de obstáculo, art. 155, §4º, I). Não há concurso material — é *ante factum* impunível.
- **Dano x Crime falimentar / fraude à execução.** Destruir bem próprio para frustrar credor não é dano (coisa própria) — verificar tipos específicos.

## Teses e contra-teses (mapa rápido)

| Tese da defesa | Fundamento | Contra-tese da acusação |
|---|---|---|
| **Dano culposo é atípico** | Ausência de previsão de modalidade culposa | Sustentar dolo eventual (assunção do risco) — a defesa rebate exigindo prova do elemento volitivo |
| **Coisa própria / não alheia** | Elementar "coisa alheia" | Discutir titularidade/condomínio |
| **Decadência (ação privada)** | Arts. 103 CP / 38 CPP; art. 167 CP | Sustentar que incide qualificadora de ação pública (I-III) |
| **Ilegitimidade (MP em crime privado)** | Art. 167 CP | Requalificar para hipótese de ação pública |
| **Insignificância** | Atipicidade material | Bem público / reincidência / prejuízo relevante |
| **Consunção (dano-meio)** | *Ante factum* impunível | Autonomia das condutas / dolos distintos |
| **Desclassificação p/ dano simples** | Prova não sustenta a qualificadora (arts. 383-384 CPP) | Manter a qualificadora com base no contexto |
| **Desclassificação p/ pichação (art. 65 Lei 9.605)** | Especialidade | Sustentar destruição/deterioração além do pichar |
| **Reparação do dano (arrependimento/atenuante)** | Art. 16 CP (arrependimento posterior) / art. 65, III, "b" CP | Não afasta o crime, só reduz pena (usar como tese subsidiária) |

## Súmulas e precedentes (sob o Citation Gate)

> **Regra do gate:** cite com certeza **dispositivos de lei** (arts. 163-167 CP; art. 167 CP p/ ação privada; Lei 9.605/98, arts. 62 e 65). Para **qualquer** número de HC/REsp/RE, informativo ou tema repetitivo, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` antes de peticionar. Na dúvida, **omitir vence inventar**.

- **Insignificância — vetores** (mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade, inexpressividade da lesão): critério consolidado no STF, mas o **precedente-líder e sua aplicação ao dano ao patrimônio público** devem ser **[NÃO VERIFICADO]** — conferir tese atual.
- **Insignificância e bem público:** há orientação **restritiva**; **[NÃO VERIFICADO]** — confirmar o estado da jurisprudência (STJ/STF) antes de invocar bagatela contra dano ao erário.
- **Consunção do dano como crime-meio do furto qualificado (rompimento de obstáculo, art. 155, §4º, I):** entendimento corrente de que o dano é absorvido; **[NÃO VERIFICADO]** quanto a acórdão específico.
- Não afirme número de súmula sobre dano sem verificação — não há súmula notória diretamente sobre o art. 163 que dispense conferência.

## Roteiro de defesa (checklist operacional)

1. **Dolo?** Rastrear se o resultado foi **culposo/acidental** → **atipicidade** (dano culposo não existe). Tese #1.
2. **Coisa alheia?** Confirmar titularidade — coisa própria/res nullius/derelicta → atípico.
3. **Regime de ação (art. 167):** simples ou inciso IV = **privada**. Checar **decadência (6 meses)**, renúncia, perdão, perempção e **legitimidade** (MP não age em crime privado).
4. **Qualificadora bem imputada?** Atacar I (violência à **pessoa**, não à coisa), II (subsidiariedade a incêndio/explosão + emprego real), III (titularidade no rol), IV (motivo egoístico/prejuízo **provado**).
5. **Insignificância** cabível? Ponderar valor, reparabilidade e a **resistência quanto a bem público**.
6. **Consunção:** o dano é **meio** de furto/roubo? → absorvido (não há concurso).
7. **Fronteira típica:** é caso de **pichação (art. 65 Lei 9.605)**, **crime ambiental/patrimônio cultural (art. 62)**, ou **esbulho (art. 161)**? → desclassificação.
8. **Reparação do dano:** houve? → **arrependimento posterior (art. 16 CP)** ou **atenuante (art. 65, III, "b")** — tese subsidiária de pena.
9. **Emendatio/mutatio (arts. 383-384 CPP):** pleitear **desclassificação para dano simples** quando a qualificadora cai (reabre o regime de ação privada).
10. **Citações:** todo precedente/súmula/tese passa por `jurisprudencia-stj-stf` **antes** de ir para a peça.

## Erros comuns e anti-padrões (evitar)

- Aceitar imputação de **dano** quando o fato foi **culposo/acidental** (deveria ser atipicidade — só reparação civil).
- Deixar passar a **decadência** no dano simples (ação privada, 6 meses) — trancamento perdido por desatenção.
- Tratar como **ação pública** o dano simples/inciso IV (o correto é **privada**, art. 167) — não impugnar a legitimidade do MP.
- Não distinguir **violência à pessoa** (qualificadora I) de **força sobre a coisa** (elementar do *caput*).
- Ignorar a **subsidiariedade** da qualificadora II a **incêndio (art. 250)** ou **explosão (art. 251)**.
- Presumir "**prejuízo considerável**" (IV) sem prova concreta da extensão em relação à vítima.
- Confundir **dano** com **pichação (art. 65 Lei 9.605)**, **crime ambiental (art. 62)** ou **esbulho (art. 161)** — perder a desclassificação.
- Cobrar **concurso material** onde há **consunção** (dano-meio do furto/roubo).
- Aplicar **insignificância** ao patrimônio público como se fosse automática (há forte resistência — verificar).
- **Inventar** número de HC/REsp/súmula — passar tudo por `jurisprudencia-stj-stf`.

## Lembretes finais

- **Classificação e regime de ação primeiro, mérito depois** — é o que mais rende no dano.
- **Dano culposo é atípico**: a defesa mais forte e mais esquecida.
- **Dano simples e inciso IV são de ação privada (art. 167)** → decadência, renúncia, perdão, perempção e ilegitimidade do MP.
- **Qualificadoras mal capituladas** → desclassificação (arts. 383-384 CPP) e reabertura do regime privado.
- **Fronteiras**: pichação (art. 65 Lei 9.605), patrimônio cultural (art. 62), esbulho (art. 161) — não deixar a acusação forçar o art. 163.
- **Conferir vigência** dos arts. 163-167 CP e da Lei 9.605/98, e toda jurisprudência via `jurisprudencia-stj-stf`, antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico de apoio** à preparação da defesa — **não** substitui o juízo do(a) advogado(a) responsável nem a leitura integral dos autos concretos. **Revisão humana é obrigatória** antes de protocolar. A responsabilidade pela peça e pelas teses é sempre do(a) profissional (CED/OAB; Provimento 205/2021 quanto à comunicação). Nenhuma súmula, tese ou precedente vai à peça sem passar pelo **Citation Gate** (`jurisprudencia-stj-stf`) — há sanções reais por jurisprudência inventada por IA. **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
