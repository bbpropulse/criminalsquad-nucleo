---
name: alegacoes-finais-acusacao
description: >-
  Use ao redigir os memoriais / alegações finais do Ministério Público (ou do assistente de
  acusação) pedindo a CONDENAÇÃO — juízo de subsunção fato-tipo, demonstração positiva de autoria e
  materialidade prova a prova, refutação antecipada das teses defensivas, dosimetria requerida (CP
  59-68), regime inicial e reparação mínima (CPP 387, IV). Gatilhos: alegações finais da acusação,
  memoriais do MP, pedido de condenação, art… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-alegacoes-finais-acusacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["alegacoes-finais-acusacao", "alegacoes finais", "finais acusacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Alegações Finais / Memoriais da Acusação (CPP 403, §3º e 404, p.u.)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a redação dos **memoriais (alegações finais escritas)** ou das **alegações finais orais** do **Ministério Público** — ou do **assistente de acusação habilitado** — na fase do art. 403 do CPP, encerrada a instrução. É a peça em que a acusação, **provado o que lhe cabia provar**, requer a **condenação** do réu, sustenta a **subsunção** do fato ao tipo penal, encadeia a prova produzida, **antecipa e refuta** as teses defensivas e formula a **dosimetria concreta** que entende cabível.

> ⚠️ **POLO ACUSATÓRIO — leia antes de usar.** Esta skill é exclusiva de quem **atua na acusação**: membro do Ministério Público (titular da ação penal pública, CF art. 129, I) ou **assistente de acusação** (CPP arts. 268-273). A lógica aqui é do **ônus probatório para a frente** — demonstrar positivamente cada elementar e pedir condenação. **NÃO** serve à defesa. O roteador/pipeline deve **conferir o polo do usuário no `company.md`** antes de sugerir ou executar esta skill; se o escritório atua na **defesa**, use `memoriais` ou `alegacoes-finais-orais` (peças de perspectiva defensiva). A conformidade ética aqui é a do **CNMP** (não OAB/Provimento 205), quando o autor for membro do MP; sendo assistente, aplica-se a ética do advogado (OAB/CED).

> **Lição central:** o ônus da prova da acusação é **positivo e integral**. Não basta afastar a versão defensiva — é preciso **demonstrar afirmativamente cada elementar** do tipo (conduta, resultado, nexo, dolo/culpa, elementos normativos), **casando cada uma com prova específica dos autos**. Alegação final que só narra os fatos e pede condenação "pelo exposto", sem o roteiro elementar-por-prova, é frágil e convida à absolvição por insuficiência probatória (CPP 386, VII; in dubio pro reo).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 155, 386, 387, 403 e 404 do CPP e dos arts. 59 a 68 do CP antes de fundamentar. Toda súmula, tese ou precedente citado passa **obrigatoriamente** pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` — há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.

## Momento processual e base legal

Encerrada a instrução em audiência (art. 400), as partes fazem alegações finais **orais** (20 min, prorrogáveis por 10 — art. 403, *caput*) **ou**, se o juiz deferir ou a causa for complexa/houver várias vítimas ou réus, por **memoriais escritos** em 5 dias (art. 403, §3º). Havendo **diligências** cujo resultado influa no julgamento, as alegações vêm por memoriais após elas (art. 404, parágrafo único).

- **CPP, art. 403, *caput* e §3º** — alegações finais orais ou por memoriais (prazo sucessivo: primeiro a acusação, depois a defesa).
- **CPP, art. 404, parágrafo único** — memoriais após diligências (art. 404, *caput*).
- **CF, art. 129, I** — o MP é o **titular privativo** da ação penal pública; a condenação é o pedido que encerra sua função acusatória.
- **CPP, arts. 268-273** — assistente de acusação: pode aditar, arrazoar e recorrer.
- **CPP, art. 155** — **livre convencimento motivado**; o juiz forma a convicção pela prova produzida em **contraditório judicial**, não podendo fundar condenação **exclusivamente** em elementos do inquérito (ressalvadas provas cautelares, não repetíveis e antecipadas).
- **CP, arts. 59 a 68** — dosimetria (base, agravantes/atenuantes, causas de aumento/diminuição); a acusação **deve requerer** a pena que entende justa.
- **CPP, art. 387** — sentença condenatória: fixação de pena, regime (III), **valor mínimo de reparação** (IV) e detração para fins de regime inicial (§2º).

## O ônus probatório da acusação — a lógica "para a frente"

A defesa escreve na **eventualidade** (nega, e no que for, pede o mínimo). A acusação faz o inverso: **constrói a certeza**. O eixo é o **standard probatório** — prova **além de dúvida razoável (BARD)**. Roteiro:

1. **Decompor o tipo em elementares.** Antes de escrever, liste cada elementar do tipo imputado (objetivas: conduta, objeto, resultado, nexo; subjetivas: dolo/culpa; normativas: "sem justa causa", "alheia", "funcionário público" etc.).
2. **Casar cada elementar com prova específica.** Para cada elementar, aponte **qual** meio de prova a demonstra (laudo, depoimento de fl./ev. X, interceptação, apreensão, confissão, prova documental). Elementar sem lastro = ponto de fragilidade a reconhecer honestamente (dever de objetividade do MP).
3. **Materialidade → autoria → tipicidade → ilicitude → culpabilidade.** Percorra o conceito analítico do crime **na ordem**, provando cada camada e afastando excludentes eventualmente ventiladas.
4. **Encadear a prova (teoria do caso da acusação).** A prova isolada convence menos que a prova **articulada**: corroboração recíproca entre depoimentos, laudos e documentos; explicar por que a versão acusatória é a **única** compatível com o conjunto.
5. **Enfrentar o art. 155.** Sinalizar que a condenação se apoia em prova **produzida em juízo** (não só no IP); quando invocar prova cautelar/não repetível/antecipada do inquérito, **nominá-la** e justificar a exceção.

## Estrutura da peça (memoriais da acusação)

1. **Endereçamento e preâmbulo** — Juízo, autos, "o Ministério Público, por seu presentante, apresenta MEMORIAIS".
2. **Síntese da denúncia e da imputação** — o que foi imputado e a capitulação.
3. **Da materialidade** — prova de que o fato **existiu** (laudos, autos de apreensão/exame, documentos), elementar a elementar.
4. **Da autoria** — prova de que **o réu** foi o autor (reconhecimento, depoimentos, provas técnicas, confissão, elementos de ligação).
5. **Da tipicidade (subsunção)** — encaixe **explícito** do fato provado em cada elementar do tipo; dolo/culpa; elementos normativos; consumação ou tentativa.
6. **Da ilicitude e da culpabilidade** — ausência de excludentes; imputabilidade; potencial consciência da ilicitude; exigibilidade de conduta diversa.
7. **Da refutação das teses defensivas** — enfrentar **antecipadamente** (memoriais da acusação são sucessivos: a acusação fala primeiro) as teses **previsíveis** e, quando os memoriais forem posteriores, as **efetivamente** deduzidas.
8. **Da dosimetria requerida** — proposta trifásica concreta (CP 68), com pena, regime e reparação.
9. **Dos pedidos** — condenação nos termos da denúncia; pena e regime sugeridos; art. 387, IV; consequências (custas, comunicações, confisco, medidas do art. 91-92 CP se cabíveis).

## Subsunção fato-tipo — a técnica

A subsunção é o **coração** da peça: transportar o **fato provado** para dentro do **tipo penal**, elementar por elementar. Modelo de raciocínio (furto qualificado, ilustrativo):

```
Tipo: art. 155, §4º, I, CP — "subtrair, para si ou para outrem, coisa alheia
móvel", com "rompimento de obstáculo".

Elementar             | Fato provado           | Prova
----------------------|------------------------|------------------------------
subtrair              | retirada dos bens      | auto de apreensão fl. X; réu
                      |                        | filmado saindo (mídia ev. Y)
coisa alheia móvel    | notebook da vítima     | NF/propriedade fl. X; oitiva
                      |                        | da vítima (ev. Z)
para si/para outrem   | posse dos bens c/ réu  | apreensão em poder do réu
dolo (animus rem      | intenção de assenhorar | contexto: venda dos bens
sibi habendi)         |                        | (interceptação ev. W)
rompimento de         | fechadura arrombada    | laudo pericial fl. X
obstáculo (§4º, I)    |                        |
```

Cada linha do quadro vira um **parágrafo argumentativo** na peça, não uma tabela seca: *"A elementar 'subtrair' está demonstrada pelo auto de apreensão de fl. X e pela mídia do ev. Y, que registra o acusado deixando o local com os bens..."*. **Consumação:** afirmar a teoria adotada (posse tranquila dispensada — o STJ firmou a **teoria da apprehensio/amotio**; **confira via `jurisprudencia-stj-stf`** o enunciado sumular pertinente antes de citar número [NÃO VERIFICADO]).

## Refutação antecipada das teses defensivas (contra-teses)

A força da alegação final da acusação está em **neutralizar a defesa antes que ela fale** (nos memoriais sucessivos) ou em **desmontá-la ponto a ponto** (quando posteriores). Mapa das teses defensivas típicas e da contra-tese acusatória:

| Tese defensiva provável | Contra-tese da acusação |
|---|---|
| **Negativa de autoria** | Encadear as provas de autoria; demonstrar que a versão do réu é isolada e incompatível com o conjunto; reconhecimento pessoal válido + corroboração técnica. |
| **Insuficiência de provas / in dubio pro reo** | Sustentar que o standard BARD foi atingido: prova judicializada, coerente e convergente; a dúvida invocada é abstrata, não razoável. |
| **Fragilidade do reconhecimento (CPP 226)** | Demonstrar observância do rito do art. 226 **e** a **corroboração independente** (não se condena só pelo reconhecimento — mas aqui há prova adicional). Confira o entendimento atual do STJ sobre a formalidade do art. 226 via `jurisprudencia-stj-stf` [NÃO VERIFICADO]. |
| **Prova só do inquérito (art. 155)** | Apontar que a condenação se ampara em prova **judicial**; quando usar elemento do IP, enquadrá-lo como cautelar/não repetível/antecipado. |
| **Atipicidade / princípio da insignificância** | Afastar a bagatela pela presença dos vetores (não é ínfima a lesão; reprovabilidade; reiteração); sustentar a tipicidade material. |
| **Excludente (legítima defesa, estado de necessidade)** | Ônus de **contraprova** da acusação: demonstrar ausência dos requisitos (atualidade, injustiça da agressão, proporcionalidade); a excludente não se presume. |
| **Desclassificação** | Manter a capitulação: provar o elemento subjetivo específico (ex.: *animus necandi* no homicídio tentado) pelos meios e instrumentos empregados, região atingida, reiteração de golpes. |
| **Confissão espontânea como só atenuante** | Reconhecer a atenuante (art. 65, III, "d") — é dever de objetividade — mas usar a confissão como **reforço de autoria** (Súmula 545/STJ: se serviu à condenação, aplica-se a atenuante). Confira via `jurisprudencia-stj-stf`. |

> **Dever de objetividade (CNMP).** O MP não é um "vencer a qualquer custo": deve **reconhecer** atenuantes, causas de diminuição e até requerer absolvição quando a prova não sustentar a condenação (CPP art. 385 permite condenação apesar do pedido de absolvição do MP, mas a atuação proba recomenda pedir o que a prova autoriza). Sustentar tese sem lastro compromete a credibilidade da peça.

## Dosimetria requerida — a proposta de pena (CP 59-68)

A acusação **deve** propor pena concreta, sob pena de deixar a dosimetria "solta". Método trifásico (art. 68):

**1ª fase — pena-base (art. 59).** Analisar as **8 circunstâncias judiciais** (culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências, comportamento da vítima). Requerer exasperação **fundamentada e individualizada** para cada vetor desfavorável **efetivamente provado** — vedada valoração genérica (Súmula 444/STJ veda usar inquéritos/ações em curso como maus antecedentes; **confira via `jurisprudencia-stj-stf`**). Partir do **mínimo** e justificar cada fração de aumento.

**2ª fase — agravantes e atenuantes (arts. 61-66).** Requerer as **agravantes** provadas (reincidência art. 61, I; motivo fútil/torpe; contra ascendente etc.) e **reconhecer** as atenuantes cabíveis (confissão, menoridade relativa <21, art. 65). **Súmula 231/STJ:** as atenuantes **não** reduzem a pena abaixo do mínimo legal — a acusação sustenta esse limite (confira via `jurisprudencia-stj-stf`).

**3ª fase — causas de aumento e diminuição.** Aplicar as **majorantes** provadas (ex.: art. 157, §2º; concurso de pessoas) e as **minorantes** que a lei impuser (tentativa art. 14, II; participação de menor importância). **Só aqui** a pena pode ir abaixo do mínimo.

**Após as fases:** concurso (material art. 69 / formal art. 70 / continuidade art. 71); **regime inicial** (art. 33, §§2º-3º + Súmulas 718 e 719/STF — motivação idônea; confira); **substituição** por restritivas (art. 44 — a acusação pode opor-se fundamentadamente); **valor mínimo de reparação** (CPP 387, IV — **requerer expressamente e com pedido/parâmetro na denúncia ou instrução**, sob pena de o juiz não poder fixá-lo por surpresa; confira o entendimento atual do STJ sobre a necessidade de pedido/contraditório via `jurisprudencia-stj-stf` [NÃO VERIFICADO]).

> **Regra prática:** proponha **um número**, com a conta trifásica exposta. Ex.: "pena-base no mínimo (X anos), agravada em 1/6 pela reincidência, majorada em 1/3 pelo concurso de pessoas, resultando em Y anos, regime inicial Z (art. 33, §2º), inviável a substituição (art. 44, I/III)".

## Súmulas e dispositivos de apoio (conferir vigência via `jurisprudencia-stj-stf`)

Cite livremente os **dispositivos** (CPP 155, 386, 387, 403, 404; CP 59-68, 91-92; CF 129, I). Para **súmulas e precedentes específicos**, passe pelo gate antes de afirmar número:

- **Súmula 545/STJ** — confissão usada para embasar a condenação enseja a atenuante (art. 65, III, "d"). *(confirmar)*
- **Súmula 444/STJ** — vedado usar inquéritos/ações penais em curso para agravar a pena-base. *(confirmar)*
- **Súmula 231/STJ** — atenuante não reduz a pena aquém do mínimo legal. *(confirmar)*
- **Súmulas 718 e 719/STF** — a opinião sobre a gravidade em abstrato **não** justifica regime mais severo; a imposição de regime mais gravoso exige **motivação idônea**. *(confirmar)*
- Qualquer **HC/REsp/RE, tema repetitivo ou informativo** citado como precedente: marque **[NÃO VERIFICADO]** e confira na fonte antes de incluir. **Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.**

## Erros comuns / anti-padrões (evitar)

- **Pedir condenação "pelo exposto"** sem o roteiro elementar-por-prova (subsunção implícita) — a peça fica sem lastro demonstrativo.
- **Ignorar o art. 155** e apoiar a condenação em prova só do inquérito, sem enquadrá-la nas exceções (cautelar/não repetível/antecipada).
- **Não decompor o tipo** — tratar "autoria e materialidade" em bloco, sem casar cada elementar com prova específica.
- **Dosimetria genérica** — exasperar a pena-base com fórmulas vazias ("personalidade voltada ao crime") sem prova individualizada; usar inquéritos como maus antecedentes (Súmula 444).
- **Furar o piso indevidamente** — reduzir por atenuante abaixo do mínimo (Súmula 231) ou majorar sem causa de aumento.
- **Esquecer o art. 387, IV** — não requerer o valor mínimo de reparação (ou requerê-lo sem pedido/contraditório prévio, gerando nulidade).
- **Não refutar a defesa** — deixar teses previsíveis (insignificância, excludente, desclassificação, fragilidade do reconhecimento) sem contra-tese.
- **Excesso de acusação** — sustentar agravantes/majorantes não provadas ou negar atenuante cabível, violando o dever de objetividade (CNMP) e enfraquecendo a peça.
- **Citar súmula/precedente de memória** — sem passar pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`.

## Checklist final

- [ ] **Polo conferido** — o usuário atua na **acusação** (MP ou assistente)? Ética aplicável identificada (CNMP / OAB para assistente)?
- [ ] Cada **elementar do tipo** foi decomposta e **casada com prova específica** dos autos?
- [ ] **Materialidade** e **autoria** demonstradas separadamente e com lastro?
- [ ] **Subsunção explícita** (fato → tipo, elementar a elementar), com dolo/culpa e consumação/tentativa?
- [ ] **Ilicitude e culpabilidade** afirmadas; excludentes ventiladas afastadas?
- [ ] **Art. 155** enfrentado — condenação apoiada em prova **judicial**; provas do IP enquadradas nas exceções?
- [ ] **Teses defensivas** previsíveis/deduzidas **refutadas** uma a uma?
- [ ] **Dosimetria trifásica** concreta (CP 68) — pena, regime (Súmulas 718/719), substituição (art. 44)?
- [ ] **Súmula 231** (piso) e **Súmula 444** (antecedentes) respeitadas?
- [ ] **Art. 387, IV** — reparação mínima requerida **com pedido/contraditório**?
- [ ] **Dever de objetividade** — atenuantes/minorantes cabíveis reconhecidas; nada sustentado sem prova?
- [ ] **Efeitos da condenação** (arts. 91-92 CP; confisco; custas; comunicações) requeridos quando cabíveis?
- [ ] **Todas as súmulas/precedentes** conferidos via `jurisprudencia-stj-stf` (`[NÃO VERIFICADO]` resolvido)?
- [ ] **Revisão humana** do membro do MP / advogado assistente responsável realizada?

## Nota de conformidade

Esta skill produz **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, nunca peça pronta para protocolo. É uma skill do **polo acusatório**: só se aplica a quem atua na acusação, e o roteador deve conferir o polo do usuário (`company.md`) antes de sugeri-la. A ética aplicável é a do **CNMP** quando o autor for membro do Ministério Público; sendo **assistente de acusação**, incide a ética do advogado (OAB/CED). **Citation Gate inegociável:** nenhuma súmula, tese ou precedente vai à peça sem passar por `verificacao-citacoes` / `jurisprudencia-stj-stf` — há sanções reais por jurisprudência inventada por IA; melhor faltar precedente do que citar julgado inexistente.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso (aqui, a **teoria acusatória**), narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
