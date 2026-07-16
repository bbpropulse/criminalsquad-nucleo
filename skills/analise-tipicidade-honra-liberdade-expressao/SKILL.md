---
name: analise-tipicidade-honra-liberdade-expressao
description: >-
  Use ao TRIAR e classificar uma manifestação supostamente ofensiva ANTES de definir a estratégia —
  enquadrar em calúnia (art. 138), difamação (art. 139), injúria (art. 140) ou fato atípico, e
  ponderar honra x liberdade de expressão (animus injuriandi vs. jocandi/criticandi/narrandi,
  crítica jornalística/política, discurso de ódio vs. crítica legítima). Rascunho analítico para
  revisão humana. Gatilhos: análise de manifestação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, crimes-contra-a-honra, liberdade-de-expressao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-tipicidade-honra-liberdade-expressao"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-tipicidade-honra-liberdade-expressao", "analise tipicidade", "liberdade expressao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise de Tipicidade — Crimes contra a Honra x Liberdade de Expressão (arts. 138 a 145 CP; CF, art. 5º, IV, V, IX, X)

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

Esta skill é a **porta de entrada analítica** do nicho de crimes contra a honra. Ela **não redige peça** — ela **classifica**: dada uma manifestação supostamente ofensiva (fala, post, matéria, comentário, e-mail, reportagem), decide **qual dos três tipos incide** (calúnia, difamação, injúria) **ou se o fato é atípico**, e faz a **ponderação constitucional** entre a honra (CF, art. 5º, X) e a liberdade de expressão/manifestação do pensamento/informação (CF, art. 5º, IV e IX). O produto é um **diagnóstico técnico** que orienta a estratégia posterior.

> **Lição central:** o erro mais comum é pular direto para a peça sem classificar. **Classifique o CONTEÚDO da ofensa ANTES de tudo** — imputação de *fato criminoso* determinado → calúnia; imputação de *fato desonroso* (não-criminoso) determinado → difamação; atribuição de *qualidade/xingamento* que atinge a dignidade/decoro, sem fato → injúria. Trocar o tipo compromete queixa, prazo decadencial, competência e toda a tese. Depois da classificação, **pese o animus** e o **peso da liberdade de expressão** — muita "ofensa" é, tecnicamente, crítica, humor ou narração de fato verdadeiro de interesse público, e portanto **atípica**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 138 a 145 do CP e a **Lei 14.532/2023**, que reposicionou a **injúria racial** — hoje tratada como **crime de racismo** (art. 2º-A da Lei 7.716/89), **imprescritível e inafiançável**, com reflexos diretos em prescrição, competência e ação penal. Confira também o marco constitucional da liberdade de expressão firmado pelo STF (vedação à censura prévia; responsabilização apenas *a posteriori*) e qualquer súmula/tese/precedente pela skill `jurisprudencia-stj-stf` **antes** de fundamentar. Nada de número de acórdão citado de memória.

## Base legal

- **Art. 138, CP — Calúnia:** imputar falsamente **fato definido como crime**. Admite **exceção da verdade** (§3º, com ressalvas).
- **Art. 139, CP — Difamação:** imputar **fato ofensivo à reputação** (fato determinado, não necessariamente criminoso). Exceção da verdade **só** se o ofendido é funcionário público e a ofensa é relativa ao exercício da função (parágrafo único).
- **Art. 140, CP — Injúria:** ofender a **dignidade ou o decoro** (juízo de valor/qualidade negativa; **sem imputação de fato**). §1º: perdão judicial (provocação reprovável / retorsão imediata). §2º: **injúria real** (violência/vias de fato). **§3º: injúria por elementos referentes a religião ou condição de pessoa idosa/com deficiência** — atenção à distinção da injúria **racial** (ver Lei 14.532/2023).
- **Art. 141, CP — Causas de aumento** (contra Presidente/chefe de governo; funcionário público em razão da função; presença de várias pessoas ou meio que facilite a divulgação; contra maior de 60/pessoa com deficiência; mediante paga). **§2º:** crime cometido ou divulgado em **rede social / meio que facilite a divulgação** → aumento (conferir redação vigente).
- **Art. 142, CP — Imunidades (exclusão do crime):** (I) ofensa em **discussão judicial** pela parte/procurador; (II) opinião desfavorável da **crítica literária, artística ou científica**, salvo intuito de injuriar/difamar; (III) conceito desfavorável em **informação/parecer prestado por funcionário no cumprimento do dever**. **Imunidade da advocacia:** CF, art. 133 + art. 7º, §2º, do EAOAB (manifestação no exercício profissional — não alcança calúnia).
- **Art. 143, CP — Retratação:** na **calúnia e difamação** (não na injúria), antes da sentença, extingue a punibilidade.
- **Art. 145, CP — Ação penal:** em regra **privada** (queixa-crime), com exceções (ação pública condicionada à requisição do Ministro da Justiça / representação em certas hipóteses; ver injúria real e injúria do §3º). **Confirmar a espécie de ação para cada caso** — muda o instrumento (queixa x representação) e o prazo.
- **CF, art. 5º:** IV (livre manifestação do pensamento, vedado o anonimato); V (direito de resposta + indenização); IX (liberdade de expressão intelectual/artística/científica/comunicação, independente de censura ou licença); X (inviolabilidade da honra e da imagem).

## Metodologia — roteiro de análise em 6 passos

Aplique **em ordem**. Cada passo pode encerrar a análise (fato atípico) ou refinar a classificação.

### Passo 1 — Isolar a manifestação e o suporte
- Transcreva **literalmente** a frase/imputação (print, gravação, matéria). Sem o texto exato não há tipicidade a analisar.
- Identifique **meio e alcance** (privado x público; rede social; grupo fechado; matéria jornalística) — impacta art. 141, §2º (aumento) e a ponderação com a liberdade de informação.
- Identifique **quem fala** (jornalista, advogado no processo, parlamentar, agente público, particular) — pode atrair **imunidade** (art. 142; art. 53 CF para parlamentar; art. 133 CF / EAOAB para advogado).

### Passo 2 — Identificar o BEM JURÍDICO atingido
- **Honra objetiva** (reputação, o que os outros pensam) → calúnia e difamação. Consumam-se quando **terceiro** toma conhecimento.
- **Honra subjetiva** (autoestima, dignidade/decoro, o que a pessoa pensa de si) → injúria. Consuma-se quando **o próprio ofendido** toma conhecimento.
- Regra prática: se a ofensa só faz sentido perante terceiros (mancha a reputação), é objetiva; se atinge a pessoa "na cara", é subjetiva.

### Passo 3 — Classificar o TIPO pela natureza do conteúdo (o coração da skill)

```
A manifestação imputa um FATO determinado?
├── SIM → o fato é definido como CRIME?
│        ├── SIM  → CALÚNIA (art. 138)      [ex.: "Fulano desviou verba pública"]
│        └── NÃO  → o fato é desonroso à reputação?
│                  ├── SIM → DIFAMAÇÃO (art. 139)   [ex.: "Fulano não paga os fornecedores"]
│                  └── NÃO → possivelmente ATÍPICO (fato neutro)
└── NÃO (é qualidade/xingamento/juízo de valor) → atinge dignidade ou decoro?
         ├── SIM → INJÚRIA (art. 140)        [ex.: "Fulano é um imbecil/vagabundo"]
         └── NÃO → ATÍPICO (mera grosseria sem carga ofensiva típica)
```

**Testes decisivos:**
- **Fato x qualidade:** "Ele roubou o cofre" (fato → calúnia se crime) ≠ "Ele é um ladrão" (qualidade genérica → injúria). A **determinação do fato** (circunstâncias, quando, como) empurra para calúnia/difamação; a **generalidade** empurra para injúria.
- **Crime x fato meramente imoral:** só é calúnia se o fato imputado for **típico penalmente**. "É corrupto" genérico tende a injúria; "recebeu R$ X de propina no contrato Y" tende a calúnia.
- **Injúria racial x racismo (Lei 14.532/2023):** ofensa que utiliza elementos de **raça, cor, etnia ou procedência nacional** deixou de ser mero art. 140, §3º e passou a **art. 2º-A da Lei 7.716/89 (racismo)** — imprescritível, inafiançável, ação penal pública. **Não classifique como injúria simples** ofensa com carga racial — a moldura, o prazo e a ação mudam completamente. Confirmar enquadramento pela `jurisprudencia-stj-stf`.

### Passo 4 — Aferir o DOLO ESPECÍFICO (animus)
Os crimes contra a honra exigem **animus injuriandi vel diffamandi** (vontade de ofender). A ausência desse dolo específico **exclui a tipicidade**. Afastam o dolo de ofender:
- **Animus narrandi** — intenção de **narrar/informar** um fato (relato jornalístico, depoimento, notitia criminis, reportagem de interesse público).
- **Animus criticandi** — intenção de **criticar** (crítica política, jornalística, artística, científica; ver art. 142, II).
- **Animus jocandi** — intenção de **brincar/satirizar** (humor, charge, sátira). Limite: humor que descamba para ataque gratuito à dignidade pode configurar injúria.
- **Animus corrigendi/consulendi** — intenção de **corrigir/aconselhar** (ex.: repreensão de superior; conselho).
- **Animus defendendi** — no calor da **defesa** (inclusive art. 142, I — discussão da causa).

> **Regra de ouro da tese defensiva:** grande parte das "ofensas" trazidas ao advogado é, na verdade, **crítica, humor ou narração** — e portanto **atípica por ausência de animus injuriandi**. Antes de aceitar a tipicidade (seja para defender, seja para acusar), teste qual animus predomina no contexto concreto.

### Passo 5 — Ponderar HONRA x LIBERDADE DE EXPRESSÃO
Nenhum direito é absoluto: honra (art. 5º, X) e liberdade de expressão/informação (art. 5º, IV e IX) colidem e se ponderam pelo **caso concreto**. Critérios que a jurisprudência costuma sopesar (confirmar formulações e precedentes via `jurisprudencia-stj-stf`):
- **Interesse público** do tema e **notoriedade/exposição** do ofendido (agente público e figura pública toleram crítica mais ácida sobre sua atuação — mas não ataque gratuito à vida privada).
- **Veracidade / diligência** na apuração (informação x boato; *animus narrandi* pressupõe base fática).
- **Proporcionalidade e pertinência** entre a crítica e o fato (crítica ao ato ≠ ataque à pessoa).
- **Discurso de ódio NÃO é liberdade de expressão:** manifestação que incita discriminação/violência contra grupos (raça, religião, orientação, deficiência) **não** se protege sob o art. 5º, IX — é o limite constitucional da liberdade de expressão. Distinguir **crítica legítima** (protegida) de **discurso de ódio/injúria discriminatória** (punível) é o eixo sensível da análise.
- **Vedação à censura prévia:** o STF firmou que não cabe censura prévia; a responsabilização é **posterior** (penal/cível), preservado o direito de resposta (art. 5º, V). Isso reforça a cautela ao **acusar**: o remédio é *a posteriori*, não a mordaça.

### Passo 6 — Verificar EXCLUDENTES, IMUNIDADES e causas extintivas
- **Imunidades (art. 142):** discussão da causa (I); crítica literária/artística/científica (II); parecer funcional (III). **Parlamentar:** inviolabilidade material (art. 53 CF) por opiniões/palavras/votos no exercício do mandato. **Advogado:** art. 133 CF + EAOAB, art. 7º, §2º (não alcança calúnia).
- **Exceção da verdade:** cabível na **calúnia** (art. 138, §3º, com ressalvas); na **difamação** só se o ofendido é funcionário público e a ofensa toca a função (art. 139, parágrafo único); **não cabe** na injúria.
- **Retratação (art. 143):** extingue a punibilidade na **calúnia e difamação** (não na injúria), antes da sentença.
- **Perdão judicial (art. 140, §1º):** injúria por **provocação reprovável** do ofendido ou **retorsão imediata**.
- **Decadência (art. 103 CP):** ação privada → **6 meses** do conhecimento da autoria (prazo decadencial). Errar o tipo pode ocultar decadência já consumada — checar sempre.

## Grade de classificação (resumo operacional)

| Tipo | Núcleo | Bem jurídico | Conteúdo | Exceção da verdade | Retratação (143) | Ação penal (regra) |
|------|--------|--------------|----------|--------------------|--------------------|--------------------|
| **Calúnia** (138) | imputar **crime** falso | honra objetiva | **fato criminoso** determinado | **Sim** (§3º, ressalvas) | **Sim** | privada (queixa) |
| **Difamação** (139) | imputar **fato** desonroso | honra objetiva | **fato** determinado não-criminoso | só func. público (função) | **Sim** | privada (queixa) |
| **Injúria** (140) | ofender dignidade/decoro | honra subjetiva | **qualidade/juízo**, sem fato | **Não** | **Não** | privada (queixa)\* |

\* **Exceções relevantes:** injúria **real** (§2º) e injúria do **§3º** têm regime próprio de ação; **injúria racial** migrou para **racismo** (Lei 14.532/2023 → ação pública, imprescritível). **Sempre confirmar a espécie de ação e o prazo caso a caso.**

## Teses e contra-teses

**Teses de ATIPICIDADE / defesa (afastar o crime):**
1. **Ausência de animus injuriandi** — a manifestação é narração, crítica ou humor (narrandi/criticandi/jocandi). Tese mais poderosa; ataca o **dolo específico**.
2. **Exercício regular da liberdade de expressão/informação** (art. 5º, IV e IX) sobre tema de **interesse público**, com base fática e proporcionalidade — sobretudo contra **agente/figura pública** quanto à **atuação** (não à vida privada).
3. **Imunidade** aplicável (art. 142, I/II/III; art. 53 CF parlamentar; art. 133 CF/EAOAB advogado).
4. **Erro de tipo/atipicidade objetiva** — o "fato" imputado não é crime (afasta calúnia; no máximo difamação/injúria); ou a imputação é genérica demais (afasta calúnia/difamação; no máximo injúria).
5. **Exceção da verdade** (calúnia) ou **retratação** (calúnia/difamação, art. 143) — extinção/afastamento.
6. **Perdão judicial** por provocação ou retorsão imediata (injúria, art. 140, §1º).
7. **Decadência** (art. 103 CP): decorridos 6 meses do conhecimento da autoria na ação privada.

**Contra-teses (acusação — assistente/querelante; ver nota de polo):**
1. **Presença do animus injuriandi** demonstrada pelo contexto, pelos termos empregados e pela ausência de pertinência com qualquer crítica legítima (ataque gratuito à pessoa, não ao ato).
2. **Extrapolação dos limites** da liberdade de expressão — a manifestação é **discurso de ódio / injúria discriminatória**, não crítica; ou ataca a **vida privada** sem interesse público.
3. **Ausência de base fática** (boato, sem apuração) afasta o *animus narrandi* e revela o dolo de ofender.
4. **Determinação do fato** demonstra calúnia/difamação (não mera injúria), com maior reprovabilidade.
5. **Incidência de causa de aumento** (art. 141) — meio de divulgação em rede social (§2º), presença de várias pessoas, vítima idosa/com deficiência.

## Súmulas, teses e precedentes (sob o Citation Gate)

> **Nada de número de acórdão de memória.** Ensine a tese e o dispositivo; para qualquer precedente específico, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`.

- **Marco constitucional da liberdade de expressão (STF):** vedação à censura prévia; responsabilização apenas *a posteriori*; prevalência, em regra, do debate de interesse público sobre a honra de agentes públicos quanto à sua atuação — **formulações e leading cases a confirmar** **[NÃO VERIFICADO]**.
- **Injúria racial como racismo (imprescritibilidade):** entendimento consolidado antes mesmo da Lei 14.532/2023 e depois positivado — **conferir o enquadramento e os efeitos (imprescritibilidade/inafiançabilidade) na redação vigente** **[NÃO VERIFICADO]**.
- **Discurso de ódio fora do escudo da liberdade de expressão:** linha jurisprudencial que exclui a incitação à discriminação da proteção do art. 5º, IX — **precedente específico a confirmar** **[NÃO VERIFICADO]**.
- **Súmulas de honra/imprensa e competência (ex.: crimes por meio da internet, foro):** **não citar número de súmula de memória** — verificar existência, teor e vigência via `jurisprudencia-stj-stf` antes de usar.

**Diretriz:** prefira fundamentar em **dispositivo de lei** (CP e CF, citados acima com segurança) e na **tese** (animus, ponderação, imunidade). Todo **número** de HC/REsp/RE/AgRg, informativo, tema repetitivo/repercussão geral e súmula → **conferência obrigatória**.

## Erros comuns / checklist de triagem

- [ ] Transcrevi a **manifestação literal** e identifiquei **meio e alcance** (rede social → art. 141, §2º)?
- [ ] Identifiquei o **bem jurídico** (honra objetiva → calúnia/difamação; subjetiva → injúria)?
- [ ] Apliquei o **teste fato x qualidade** e **crime x fato imoral** para não confundir calúnia/difamação/injúria?
- [ ] Verifiquei se há **carga racial/discriminatória** que desloca para **racismo** (Lei 14.532/2023), com efeitos de imprescritibilidade e ação pública?
- [ ] Testei o **animus** (narrandi/criticandi/jocandi/defendendi) — a manifestação pode ser **atípica** por ausência de dolo de ofender?
- [ ] Fiz a **ponderação honra x liberdade de expressão** (interesse público, veracidade, proporcionalidade, figura pública, discurso de ódio)?
- [ ] Chequei **imunidades** (art. 142; parlamentar art. 53 CF; advogado art. 133 CF/EAOAB)?
- [ ] Chequei **exceção da verdade**, **retratação (143)**, **perdão judicial (140, §1º)** e **decadência (art. 103 — 6 meses)**?
- [ ] Confirmei a **espécie de ação penal** (queixa x representação x pública) e o **prazo** para o tipo correto?
- [ ] **Todo** precedente/súmula/tese passou pela `jurisprudencia-stj-stf` antes de citar?

**Anti-padrões (evitar):**
- Redigir queixa-crime **antes** de classificar o tipo (compromete competência, ação e prazo).
- Chamar de **calúnia** o que é injúria (imputação genérica de "ladrão/corrupto" sem fato determinado) — ou vice-versa.
- Tratar **injúria racial** como injúria comum, ignorando o regime de **racismo** (prazo, ação, imprescritibilidade).
- Aceitar tipicidade sem testar o **animus** — perde-se a tese de atipicidade mais forte (narrandi/criticandi/jocandi).
- Confundir **crítica legítima** com **discurso de ódio** (nos dois sentidos: criminalizar crítica, ou blindar ódio como "opinião").
- Ignorar a **decadência de 6 meses** e o **prazo** ao errar o tipo.
- Citar **súmula/precedente de memória** — sanções reais por jurisprudência inventada por IA.

## Encadeamento com outras skills

- **Definido o tipo**, passe a `selecao-tese-por-tipo-penal` (deriva as teses do tipo já classificado) e, para o diagnóstico global do caso, a `diagnostico-inicial-viabilidade-defesa`.
- **Para a peça** (queixa-crime, resposta à acusação, alegações), aplique a skill de redação penal + `redacao-persuasiva-criminal`.
- **Todo** dispositivo/súmula/precedente → gate `jurisprudencia-stj-stf` / `verificacao-citacoes`.

## Nota de conformidade e de polo

- **Rascunho técnico sob revisão humana obrigatória.** Este material é **hipótese de trabalho** (classificação e ponderação), não parecer definitivo. A responsabilidade final é sempre do profissional (CED/OAB, art. 2º; Provimento 205/2021 para publicidade/atuação).
- **Skill NEUTRA quanto ao polo (`polo_acusacao: false`).** Serve à **triagem** tanto da **defesa** (querelado/réu) quanto da **acusação** (querelante/assistente de acusação / MP nas hipóteses de ação pública). **O foco majoritário do CriminalSquad é a DEFESA por tipo penal** — as contra-teses acima existem para o profissional antecipar o outro polo. **O roteador deve conferir o polo da instituição** (`_criminalsquad/_memory/company.md`): se for advocacia (querelante/querelado), rege a **ética da OAB + Provimento 205/2021**; se for Ministério Público (ação pública em injúria racial/racismo, injúria real), regem as normas do **CNMP**; se Defensoria, a **LC 80/94**.
- **Citation Gate inegociável:** nenhuma súmula/tese/precedente citado de memória — tudo passa por `jurisprudencia-stj-stf` antes de ir para a peça.
