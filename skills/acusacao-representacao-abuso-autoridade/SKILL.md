---
name: acusacao-representacao-abuso-autoridade
description: >-
  Use para redigir ou estruturar acusacao representacao abuso autoridade: [POLO ACUSATÓRIO/OFENDIDO]
  Use ao representar contra agente público por abuso de autoridade (Lei 13.869/2019) —
  notícia-crime, representação ao MP, e ação penal privada subsidiária da pública (art. 3º + art. 29
  CPP), demonstrando o DOLO ESPECÍFICO e o enquadramento nos tipos dos arts. 9º a 38. Gatilhos:
  representação abuso de autoridade, notícia-crime… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, leis-especiais, abuso-de-autoridade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-representacao-abuso-autoridade"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-representacao-abuso-autoridade", "acusacao representacao", "abuso autoridade"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Representação por Abuso de Autoridade (Lei 13.869/2019)

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

Esta skill orienta o **ofendido e o polo acusatório** (Ministério Público e assistente de acusação) a **noticiar, representar e — subsidiariamente — acusar** agente público pela prática de crime de abuso de autoridade. Cobre três vias: (a) a **notícia-crime / representação** dirigida ao MP e aos órgãos correcionais; (b) o **impulso do inquérito** e da persecução; (c) a **ação penal privada subsidiária da pública** (art. 3º da Lei 13.869/2019 c/c art. 29 do CPP), quando o MP se mantém inerte além do prazo legal.

> ⚖️ **Polo desta skill — CONFIRA ANTES DE USAR.** Esta é uma skill do **polo ACUSATÓRIO/OFENDIDO** (vítima, MP, assistente). Se o cliente é o **agente público acusado** de abuso, a skill correta é `defesa-abuso-autoridade` — pare aqui. O chefe-roteador e o revisor humano devem **checar o polo no `company.md`** antes de prosseguir. Toda entrega é **rascunho sob revisão humana obrigatória**.

> **Lição central:** o abuso de autoridade **não se presume da mera ilegalidade do ato**. O crime exige **DOLO ESPECÍFICO** — a finalidade de *prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal* (art. 1º, §1º). Quem representa **tem de narrar e indicar prova dessa finalidade**; a peça que só descreve o ato irregular (sem o elemento subjetivo especial) nasce fadada ao arquivamento. **Divergência de interpretação de lei ou avaliação de fatos e provas NÃO é crime** (art. 1º, §2º).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da Lei 13.869/2019 — houve **vetos presidenciais** (alguns derrubados pelo Congresso) e a lei sofreu **ADIs no STF** (que afastaram interpretações e reconheceram a constitucionalidade de núcleos). Antes de tipificar, confirme (i) o **texto atual** de cada artigo dos arts. 9º a 38, (ii) o alcance dado pelo STF nas ADIs e (iii) súmulas/teses aplicáveis — tudo via a skill `jurisprudencia-stj-stf` e o gate `verificacao-citacoes`. **Nunca cite número de acórdão de memória.**

---

## Base legal

- **Lei 13.869/2019** — Lei de Abuso de Autoridade (substituiu a Lei 4.898/65).
- **Art. 1º, §1º** — exige **finalidade específica** (dolo especial): prejudicar outrem, beneficiar a si/terceiro, ou por mero capricho/satisfação pessoal.
- **Art. 1º, §2º** — a **divergência na interpretação de lei** ou na **avaliação de fatos e provas** **não** configura abuso.
- **Art. 2º** — sujeito ativo: **qualquer agente público**, servidor ou não, dos três Poderes (inclui membros do MP, magistratura, polícias, forças armadas em atividade de segurança pública, etc.).
- **Art. 3º** — **ação penal pública incondicionada**; admitida a **ação privada subsidiária** se não oferecida denúncia no prazo legal (art. 29 do CPP).
- **Arts. 4º e 5º** — **efeitos da condenação** (perda do cargo/tornar certa a obrigação de indenizar) e **penas restritivas de direitos**.
- **Arts. 9º a 38** — **tipos penais** (rol taxativo de condutas).
- **CPP, art. 5º, II e §3º** (notícia-crime), **art. 27** (qualquer do povo pode provocar o MP), **art. 29** (ação privada subsidiária), **art. 39** (representação), **arts. 268-273** (assistente de acusação).

> **Distinção crucial de fonte.** Esta skill é para o **ofendido/acusação**. Não a confunda com: `defesa-abuso-autoridade` (réu); `representacao` / `representacao-cautelares-mp` (genéricas, sem o tipo, o dolo específico e o art. 3º); `assistente-acusacao` (processo **já instaurado** — usar em conjunto quando já houver ação penal).

---

## O elemento nuclear — DOLO ESPECÍFICO (art. 1º, §1º)

Este é o coração da peça acusatória. Todo tipo dos arts. 9º a 38 **só se consuma** se presente a finalidade especial. A representação deve, para **cada conduta**, articular:

1. **O ato** (o quê o agente fez — a conduta descrita no tipo).
2. **A ilegalidade/excesso** (por que o ato extrapolou os limites legais).
3. **A FINALIDADE ESPECÍFICA** (o elemento subjetivo especial): *para prejudicar*, *para beneficiar*, *por mero capricho ou satisfação pessoal* — com os **indícios** que a revelam (frases ditas, retaliação, perseguição, ausência de qualquer justificativa plausível, desproporção gritante).

> **Roteiro anti-arquivamento.** Pergunte sempre: *"além de ilegal, o ato foi praticado PARA QUÊ?"* Se a resposta honesta for "o agente errou / interpretou mal a lei / avaliou mal a prova", **não há crime** (art. 1º, §2º) — e a peça deve mudar de rota (correição administrativa, responsabilidade civil, HC/relaxamento). Se a resposta for "para humilhar / retaliar / satisfazer vaidade / prejudicar deliberadamente", **há dolo específico** — e é isso que a peça precisa **narrar e provar**.

---

## Mapa dos tipos mais recorrentes (arts. 9º a 38 — conferir texto vigente)

> Rol **exemplificativo do uso prático** — confirme a redação e os elementos de cada tipo na fonte oficial antes de imputar. Cada tipo tem verbo, sujeito e, sempre, o dolo especial do art. 1º, §1º.

| Cenário fático típico | Artigo (conferir texto) | Núcleo da conduta |
|---|---|---|
| Prisão/detenção ilegal; manter preso quem já podia ser solto | **arts. 9º e 12** | decretar/executar medida privativa de liberdade em desconformidade com a lei; deixar de relaxar/comunicar |
| Constrangimento do preso a exibir-se/expor-se; produção de prova contra si | **art. 13** | submeter preso a situação vexatória não prevista em lei; exposição indevida |
| Violência/algemas indevidas; constrangimento no interrogatório | **arts. 13, 15, 18** | constranger a depor; algemas fora das hipóteses (SV 11); prosseguir interrogatório indevido |
| Entrada em domicílio sem mandado/fora das hipóteses | **art. 22** | invadir imóvel alheio ou nele permanecer sem determinação judicial/flagrante |
| Requisição/quebra de sigilo sem autorização; acesso indevido a dados | **arts. 25, 32** | proceder à busca/apreensão ou obter prova por meio ilícito; impedir acesso do defensor aos autos |
| Cerceamento da defesa técnica; impedir entrevista reservada com advogado | **art. 20** | impedir o entrevistar-se do preso com seu advogado |
| Divulgação de gravação/imagem sem relação com a prova; vazamento | **art. 28, 38** (conferir) | divulgar informação/registro fora das hipóteses legais |
| Continuar investigação já arquivada/extinta para constranger | **art. 27** | requisitar instauração/prosseguir procedimento sem indício de infração |
| Coação/perseguição do investigado ou de terceiros | **art. 33** (conferir) | exigir informação/cumprimento de obrigação sem previsão legal |

> ⚠️ **Sempre passe a tipificação pelo `verificacao-citacoes`.** Numeração e redação dos artigos da Lei 13.869/2019 são sensíveis (vetos, promulgação de partes vetadas). Não afirme "art. X pune Y" sem conferir o **texto vigente**.

---

## As três vias do ofendido/acusação

### Via 1 — Notícia-crime / Representação (a mais comum)
Dirigida ao **Ministério Público** (destinatário natural da ação pública, art. 3º) e/ou à **autoridade policial** para instauração de inquérito (CPP, art. 5º), com cópia às **corregedorias** competentes (Polícia, CNMP, CNJ, OAB conforme o agente). Como o crime é de **ação pública incondicionada**, qualquer do povo pode provocar o MP (CPP, art. 27) — a "representação" aqui tem sentido amplo de *provocação*, não é condição de procedibilidade.

### Via 2 — Assistente de acusação (processo já em curso)
Se já há **ação penal** oferecida pelo MP, o ofendido habilita-se como **assistente** (CPP, arts. 268-273) para aditar, arrolar, requerer e recorrer. Nesse caso, use **em conjunto** a skill `assistente-acusacao`.

### Via 3 — Ação penal privada SUBSIDIÁRIA da pública (art. 3º Lei 13.869 + art. 29 CPP)
**A via própria e distintiva desta skill.** Cabível **apenas** quando o MP, **findo o prazo legal**, **não oferece denúncia, não requer diligência nem promove o arquivamento** — ou seja, **inércia/omissão** (não se confunde com arquivamento fundamentado, que **não** abre a via subsidiária). O ofendido oferece **queixa-crime subsidiária**; o MP permanece na causa como **interveniente** (pode aditar, repudiar a queixa e oferecer denúncia substitutiva, retomar a ação em caso de negligência do querelante — art. 29 CPP).

> **Prazo (conferir):** o **prazo decadencial de 6 meses** para a queixa subsidiária conta-se **do encerramento do prazo do MP** para denunciar (e não do fato). **Confirme o marco e a contagem** — é ponto de erro frequente. Antes de protocolar, cheque a tempestividade (método na skill `calculadora-tempestividade`; se ausente, **[calculadora a implementar com testes]**).

---

## Estrutura da peça — Representação / Notícia-crime ao MP

```
EXCELENTÍSSIMO(A) SENHOR(A) PROMOTOR(A) DE JUSTIÇA [/PROCURADOR DA REPÚBLICA]
COM ATRIBUIÇÃO CRIMINAL DA COMARCA DE [COMARCA] [/DA PJ DE ...]

[Se o agente tiver foro por prerrogativa, endereçar ao órgão competente —
CONFERIR o foro do agente noticiado.]

Ref.: Notícia-crime / Representação — abuso de autoridade (Lei 13.869/2019)

[NOME DO OFENDIDO], [qualificação completa], por seu advogado (procuração anexa),
vem, com fundamento no art. 27 do CPP e no art. 3º da Lei 13.869/2019, NOTICIAR e
REPRESENTAR contra [NOME/CARGO DO AGENTE PÚBLICO], pelos fatos e fundamentos a
seguir, requerendo a instauração de procedimento investigatório e, ao final, o
oferecimento de denúncia.

I — DOS FATOS
[Narrativa cronológica, objetiva e datada: quem, quando, onde, como. Descreva o
ATO do agente e o EXCESSO/ILEGALIDADE. Guarde a intenção para o item seguinte —
mas já semeie os indícios (frases, gestos, contexto de retaliação).]

II — DO DIREITO
a) Da tipicidade — a conduta e o(s) tipo(s) dos arts. 9º a 38
   [Subsuma cada ato ao tipo respectivo, com o TEXTO VIGENTE conferido.]
b) Do DOLO ESPECÍFICO (art. 1º, §1º) — o ponto decisivo
   [Demonstre a finalidade: prejudicar / beneficiar / capricho / satisfação
   pessoal, apontando os indícios concretos. Explique por que NÃO se trata de
   mera divergência de interpretação ou de avaliação de prova (art. 1º, §2º).]
c) Da autoria e da qualidade de agente público (art. 2º)

III — DA PROVA
[Documentos, laudos, boletim de ocorrência, imagens/vídeos, testemunhas, autos do
procedimento onde ocorreu o abuso. Requerer diligências: oitivas, requisição de
imagens de câmera corporal/CFTV, preservação de registros — cadeia de custódia.]

IV — DOS REQUERIMENTOS
a) a instauração de inquérito/PIC e a colheita das diligências indicadas;
b) a habilitação do noticiante para acompanhar o feito;
c) o oferecimento de denúncia ao final;
d) a comunicação à Corregedoria [órgão] para a apuração disciplinar concorrente.

Termos em que pede deferimento.
[LOCAL], [DATA].
[ADVOGADO] — OAB/[UF] nº [Nº]
```

**Campos a preencher:** [COMARCA], [NOME DO OFENDIDO], [NOME/CARGO DO AGENTE], [tipos aplicáveis], [indícios do dolo], [provas], [LOCAL], [DATA], [ADVOGADO], [UF], [Nº OAB].

---

## Estrutura da peça — Queixa-crime SUBSIDIÁRIA (art. 3º + art. 29 CPP)

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [VARA CRIMINAL] DE [COMARCA]

[NOME DO QUERELANTE], [qualificação], por seu advogado (procuração com poderes
especiais — art. 44 CPP), vem oferecer

QUEIXA-CRIME SUBSIDIÁRIA DA PÚBLICA

com fundamento no art. 5º, LIX, da CF, no art. 29 do CPP e no art. 3º da Lei
13.869/2019, em face de [NOME DO QUERELADO — agente público], pelos fatos abaixo.

I — DA TEMPESTIVIDADE E DO CABIMENTO (a via subsidiária)
[Demonstrar: (i) o MP foi provocado / recebeu os autos em [data]; (ii) escoou o
prazo legal SEM denúncia, SEM pedido de diligência e SEM arquivamento — INÉRCIA;
(iii) a queixa é oferecida dentro dos 6 meses contados do fim do prazo do MP.
Anexar comprovação da inércia. CONFERIR marco e contagem — calculadora-tempestividade.]

II — DOS FATOS  [narrativa datada — ver acima]

III — DA CLASSIFICAÇÃO — tipo(s) dos arts. 9º a 38 + DOLO ESPECÍFICO (art. 1º, §1º)
[Imputação individualizada, com o elemento subjetivo especial e por que não é o
§2º. Texto dos tipos conferido.]

IV — DO ROL DE TESTEMUNHAS  [até o máximo legal do rito]

V — DOS REQUERIMENTOS
a) o recebimento da queixa subsidiária e a citação do querelado;
b) a intimação do MP para intervir em todos os termos (art. 29 CPP);
c) a produção das provas indicadas;
d) a condenação, com os efeitos dos arts. 4º e 5º da Lei 13.869/2019.

[LOCAL], [DATA] — [ADVOGADO], OAB/[UF] nº [Nº]
```

> **Procuração com poderes especiais e menção ao fato** (CPP, art. 44) é requisito da queixa — inclusive a subsidiária. Verifique antes de protocolar.

---

## Teses da acusação × contra-teses da defesa (antecipar)

| Tese da acusação/ofendido | Contra-tese esperada da defesa | Como reforçar a acusação |
|---|---|---|
| Presença do **dolo específico** (art. 1º, §1º) | "Houve mera divergência de interpretação / avaliação de prova" (art. 1º, §2º) | Ancorar em **indícios objetivos** da finalidade (retaliação, frases, desproporção, histórico) — não em ilação |
| Conduta subsome-se ao **tipo** (arts. 9º-38) | Atipicidade / conduta amparada em lei ou ordem | Demonstrar **ausência de amparo legal** e o **excesso concreto**; juntar o ato/decisão impugnado |
| **Cabimento da subsidiária** (inércia do MP) | "Houve arquivamento / pedido de diligência — não há inércia" | Provar que o prazo **escoou em branco**; arquivamento fundamentado **fecha** a via |
| Agente é **sujeito ativo** (art. 2º) | Ilegitimidade / não é agente público na função | Comprovar o vínculo e o exercício da função no momento do ato |
| Efeitos da condenação (arts. 4º/5º): perda do cargo, indenização | Desproporção da sanção | Pedir os efeitos de forma **fundamentada e individualizada** (não automáticos) |

---

## Súmulas e balizas (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula Vinculante 11/STF** — **algemas** só em caso de resistência, fundado receio de fuga ou perigo; uso indevido pode indiciar abuso (arts. 13/15 — conferir enquadramento).
- **ADIs sobre a Lei 13.869/2019 no STF** — reconheceram a **constitucionalidade** de núcleos da lei e fixaram **interpretação conforme** de alguns tipos (afastando criminalização de atos jurisdicionais/opinativos de boa-fé). **[NÃO VERIFICADO — números e teor das ADIs conferir obrigatoriamente via `jurisprudencia-stj-stf` antes de citar.]**
- Entendimentos do STJ sobre a **exigência de dolo específico** e sobre os limites do **art. 1º, §2º**. **[NÃO VERIFICADO — conferir número de acórdão/tema antes de citar.]**

> **Regra de ouro do Citation Gate:** cite **dispositivos de lei** (arts. da Lei 13.869/2019, do CPP e da CF) com segurança; para **qualquer precedente específico** (número de HC/REsp/RE/ADI, informativo, tema repetitivo), marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`. **Ensinar a tese e o dispositivo vence arriscar um número de acórdão.**

---

## Erros comuns / checklist antes de protocolar

- [ ] **Polo conferido**: cliente é ofendido/MP/assistente (e não o agente acusado)? Se réu → `defesa-abuso-autoridade`.
- [ ] A peça **narra e prova o DOLO ESPECÍFICO** (art. 1º, §1º), e não apenas a ilegalidade do ato?
- [ ] Ficou **afastada a hipótese do art. 1º, §2º** (mera divergência de interpretação/avaliação de prova)?
- [ ] Cada conduta foi **subsumida a um tipo concreto** dos arts. 9º a 38, com **texto vigente conferido**?
- [ ] Verificada a **qualidade de agente público** do noticiado (art. 2º) e o eventual **foro por prerrogativa**?
- [ ] Se **subsidiária**: comprovada a **inércia** do MP (não arquivamento, não diligência) e a **tempestividade** (6 meses do fim do prazo do MP)? Procuração com poderes especiais (art. 44 CPP)?
- [ ] Requerida a **preservação de provas** (câmeras, registros) e observada a **cadeia de custódia**?
- [ ] Requerida a **apuração disciplinar concorrente** na Corregedoria pertinente?
- [ ] Todas as **súmulas/precedentes/ADIs** passaram pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Confundir **ilegalidade do ato** com **crime de abuso** — sem dolo específico, não há tipo (art. 1º, §2º).
- Tratar a "representação" como **condição de procedibilidade** — o crime é de ação **pública incondicionada** (art. 3º).
- Ajuizar **subsidiária** após **arquivamento fundamentado** do MP (só cabe na **inércia**).
- Errar o **marco da decadência** (conta-se do fim do prazo do MP, não do fato).
- Citar **artigo vetado/promulgado parcialmente** sem conferir o texto vigente.
- Invocar **número de ADI/HC/REsp de memória** — passe pelo Citation Gate.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória** — a peça é hipótese a confirmar; a revisão final do advogado responsável é indispensável antes de protocolar.
- **Ética por polo:** se **advocacia** (ofendido/assistente/querelante subsidiário) → EAOAB + CED + **Provimento 205/2021**; se **Ministério Público** (titular da ação) → CNMP; se **Defensoria** → LC 80/94. **Confirme o polo no `company.md`** — esta skill é do lado acusatório.
- **Citation Gate inegociável:** nenhuma súmula, tese, informativo ou acórdão citado de memória — tudo por `verificacao-citacoes` / `jurisprudencia-stj-stf`.
- **Sigilo e LGPD:** dados do ofendido e do procedimento nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita (com destaque para o dolo específico), coesão e persuasão (a régua de obra-prima que a revisão cobra).
