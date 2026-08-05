---
name: controle-imputacao-mp
description: >-
  Use na análise técnica que ANTECEDE a decisão do Ministério Público entre denunciar, arquivar ou
  negociar — o teste de justa causa e de lastro probatório mínimo, a escolha e defesa da capitulação
  (concurso, continuidade, qualificadoras), a individualização da conduta em autoria coletiva e a
  verificação dos filtros dos arts. 28 e 28-A do CPP antes de oferecer a inicial. É a opinio delicti
  sobre autos de inquérito. Gatilhos… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, acusacao, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-controle-imputacao-mp"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["controle-imputacao-mp", "controle imputacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Controle e Tese de Imputação — análise pré-denúncia do MP (CPP, arts. 41, 395, III, 28 e 28-A)

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

Esta skill orienta o **trabalho intelectual que antecede qualquer peça acusatória**: recebido o inquérito (ou peças de informação), o membro do Ministério Público precisa decidir entre **denunciar, arquivar ou negociar** (ANPP/suspensão) e, se for denunciar, **fixar a tese de imputação e a capitulação** que sustentará a inicial. É a formação do **opinio delicti** — análoga ao parecer técnico da defesa, mas no polo acusatório.

> **SKILL DO POLO ACUSATÓRIO.** Este material serve **exclusivamente a quem atua na acusação** (membro do Ministério Público ou assistente de acusação habilitado — CPP, art. 268). NÃO se destina à defesa. O roteador deve **conferir o polo do usuário** (em `_criminalsquad/_memory/company.md`) antes de sugerir esta skill; se a instituição atua na defesa, oferecer `parecer-juridico-criminal` no lugar. Ainda assim, tudo aqui é **rascunho técnico sob revisão humana obrigatória** do promotor natural.

> **Lição central:** a decisão de imputar não é "há indícios de crime?", e sim **"há justa causa para uma acusação?"** — lastro probatório mínimo de materialidade **e** de autoria, tipicidade formal e material, e ausência de causa manifesta de arquivamento. Denunciar sem justa causa é abuso; arquivar o que tinha lastro é omissão. **Primeiro se testa a justa causa; só depois se escolhe a capitulação.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. **28 e 28-A do CPP** — o art. 28 (arquivamento) foi reescrito pela **Lei 13.964/2019 (Pacote Anticrime)**, que retirou o controle do juiz e o transferiu à instância de revisão do próprio MP; a eficácia desse dispositivo foi objeto de decisões do STF nas **ADIs 6.298 e outras** [NÃO VERIFICADO — conferir a modulação/eficácia atual via `jurisprudencia-stj-stf`]. Confira também súmulas, temas e overruling via a skill `jurisprudencia-stj-stf` **antes** de fundamentar qualquer promoção.

## Base legal

- **Art. 41 do CPP** — requisitos da denúncia: exposição do fato criminoso com **todas as suas circunstâncias**, qualificação do acusado, **classificação do crime** e rol de testemunhas. É o parâmetro da imputação bem-feita.
- **Art. 395 do CPP** — hipóteses de **rejeição** da inicial: inépcia (I), falta de pressuposto processual/condição da ação (II) e **falta de justa causa** (III). Antecipar esse controle é o núcleo desta análise: denunciar sabendo que será rejeitada é desperdício e violência.
- **Art. 28 do CPP** (red. Lei 13.964/19) — **arquivamento**: ordenado pelo membro do MP, com remessa à instância de revisão; comunicação à vítima, ao investigado e à autoridade policial.
- **Art. 28-A do CPP** — **acordo de não persecução penal (ANPP)**: não sendo caso de arquivamento e confessada formalmente a infração **sem violência ou grave ameaça** e com pena mínima **inferior a 4 anos**, o MP **poderá** propor o acordo (filtro obrigatório antes de denunciar quando cabível).
- **Art. 3º-A do CPP** — estrutura **acusatória** do processo: veda a iniciativa do juiz na fase investigativa e reforça a titularidade da ação pelo MP.
- **CP, arts. 69–71** — **concurso material (69), formal (70) e crime continuado (71)**: definem a capitulação correta em pluralidade de fatos e impactam pena e cabimento de ANPP.
- **CF, art. 129, I** — **titularidade privativa** da ação penal pública pelo MP; c/c art. 127 (princípios institucionais) e Resoluções do CNMP sobre a atuação.

## Metodologia — os 4 filtros antes da inicial

A análise percorre quatro filtros **em ordem**. Reprovado em qualquer um, muda-se o caminho (arquivar, aguardar diligências ou negociar) antes de escrever a denúncia.

### Filtro 1 — Justa causa (lastro probatório mínimo)

Justa causa = **prova da materialidade** + **indícios suficientes de autoria** + **tipicidade** (formal e material) + **punibilidade não extinta**. É o filtro do art. 395, III, do CPP.

- **Materialidade:** o fato existiu e é o descrito? (laudo, corpo de delito quando a infração deixa vestígios — CPP, art. 158; documentos; perícia). Sem materialidade minimamente demonstrada, **não há justa causa**.
- **Autoria:** há **indícios suficientes** (não certeza — isso é para a sentença) apontando o investigado? Delação isolada, reconhecimento viciado ou mera suspeita **não bastam**.
- **Tipicidade material:** o fato ofende o bem jurídico de forma relevante? Avaliar **insignificância** (bagatela), adequação social e **causas manifestas de exclusão** já evidentes nos autos (legítima defesa flagrante, atipicidade).
- **Punibilidade:** conferir **prescrição** (usar a skill `prescricao`), decadência (ação penal privada/condicionada), morte do agente, anistia. Extinta a punibilidade → arquivamento, não denúncia.

> **Regra prática:** o padrão de justa causa é **mais baixo** que o de condenação (in dubio pro societate ainda é a régua majoritária na admissão da acusação), **mas não é zero**. Denúncia que não passaria pelo art. 395, III, deve ser **evitada, não ajuizada** — e a insuficiência probatória pede **diligências complementares** (retorno dos autos) ou arquivamento, não uma inicial temerária.

### Filtro 2 — Saídas alternativas (arquivamento e justiça negocial)

Havendo justa causa, **antes de denunciar** verifique se o caminho não é outro:

- **Arquivamento (art. 28):** ausência de crime, atipicidade, excludente evidente, ausência de lastro **irremediável** (diligências esgotadas), ou punibilidade extinta. Fundamentar e remeter à revisão. → skill `arquivamento-inquerito`.
- **ANPP (art. 28-A):** infração **sem violência ou grave ameaça** + pena mínima **< 4 anos** (somadas causas de aumento/diminuição no mínimo/máximo, conforme a técnica de cálculo) + confissão formal + não reincidente/sem indicativo de conduta reiterada. Cabendo ANPP, ela é **filtro obrigatório de análise** — recusar exige fundamentação. → skill `anpp`.
- **Suspensão condicional do processo (art. 89 da Lei 9.099/95):** pena mínima **≤ 1 ano** — proposta na própria denúncia. → skill `suspensao-condicional-processo`.

> **Ponto sensível:** a capitulação escolhida **determina** o cabimento das saídas negociais. Superqualificar o fato (ver Filtro 4) para "estourar" o teto do ANPP é desvio de finalidade — a capitulação deve espelhar o fato provado, não a estratégia de afastar o acordo.

### Filtro 3 — Individualização da conduta (autoria coletiva)

Em fatos com **pluralidade de agentes**, a denúncia **não pode ser genérica**. Cada imputado precisa de um **nexo mínimo entre a sua conduta concreta e o resultado** (CP, arts. 29–31 — concurso de pessoas).

- **Vedação à denúncia genérica:** imputar a todos "em conjunto", sem descrever o quê cada um fez, viola o art. 41 (fato com todas as circunstâncias) e a ampla defesa → inépcia (art. 395, I).
- **Crimes societários / de gabinete:** admite-se descrição **mais aberta** do liame quando a estrutura empresarial dificulta individualizar cada gesto, **mas ainda se exige o vínculo do agente ao fato** (poder de decisão, domínio funcional). A mera condição de sócio/administrador **não autoriza** a imputação automática (responsabilidade penal objetiva é vedada).
- **Autoria x participação:** distinguir autor, coautor e partícipe (indução, instigação, auxílio) — reflete na pena e na narrativa. Participação de menor importância (art. 29, §1º) e cooperação dolosamente distinta (§2º) são pontos a antecipar.

### Filtro 4 — Capitulação e concurso (a tese jurídica)

Escolhida a via da denúncia, fixa-se a **classificação do crime** (art. 41) — que não vincula o juízo (o réu se defende dos fatos, não da capitulação — *emendatio*/*mutatio*), mas orienta pena, competência, rito e cabimento de benefícios.

- **Tipo penal correto:** subsunção do fato à norma. Cuidado com tipos próximos (furto x apropriação; estelionato x furto mediante fraude; roubo x extorsão).
- **Qualificadoras e causas de aumento:** só as **provadas**, não as meramente possíveis. Superqualificar é vício que a defesa explora e pode inflar artificialmente a pena.
- **Concurso de crimes (CP 69-71):**
  - **Material (69):** condutas autônomas, penas somadas.
  - **Formal (70):** uma conduta, vários resultados — pena mais grave aumentada (formal próprio) ou soma (formal impróprio, desígnios autônomos).
  - **Continuado (71):** crimes da **mesma espécie**, em condições semelhantes de tempo, lugar e modo de execução — fração de aumento, **não** soma. A escolha entre concurso material e continuidade **muda a pena e o cabimento de ANPP/suspensão** — decidir com base no fato, com honestidade técnica.

## Roteiro de análise (passo a passo)

```
1) MATERIALIDADE   — o fato existiu e está provado? (laudo/corpo de delito/docs)
2) AUTORIA         — há indícios SUFICIENTES contra o investigado? (não certeza)
3) TIPICIDADE      — formal (subsunção) e material (lesão relevante; sem bagatela)
4) PUNIBILIDADE    — prescrição/decadência/extinção? (skill `prescricao`)
   └─ Reprovou em 1–4 → ARQUIVAR (art. 28) ou diligências. NÃO denunciar.
5) SAÍDA NEGOCIAL  — cabe ANPP (28-A) ou sursis processual (89/9.099)?
   └─ Cabendo → analisar/propor (filtro obrigatório); recusa fundamentada.
6) INDIVIDUALIZAÇÃO — cada agente tem conduta descrita e nexo? (evitar genérica)
7) CAPITULAÇÃO     — tipo correto + qualificadoras PROVADAS + concurso (69-71)
8) REQUISITOS 41   — fato com todas as circunstâncias, qualificação, rol, classificação
   └─ Aprovou em tudo → DENUNCIAR (skill `denuncia-mp`)
```

> **Só depois deste roteiro** aciona-se a peça: `denuncia-mp` (se denunciar), `arquivamento-inquerito` (se arquivar), `anpp` ou `suspensao-condicional-processo` (se negociar). Esta skill é a **decisão prévia**; ela não redige a peça, ela escolhe qual peça.

## Teses e contra-teses (na perspectiva da acusação)

| Situação | Tese da acusação | Antecipar a defesa |
|---|---|---|
| Lastro fino de autoria | Indícios suficientes bastam à admissão (in dubio pro societate na fase de recebimento) | Defesa pedirá rejeição por falta de justa causa (art. 395, III) → reforçar o nexo concreto |
| Insignificância suscitada | Afastar bagatela se há reprovabilidade, reiteração ou lesão relevante ao bem jurídico | Defesa invocará atipicidade material → cotejar valor, contexto e reiteração |
| Autoria coletiva | Descrever a conduta e o liame de cada agente (domínio do fato/funcional) | Defesa alegará denúncia genérica/responsabilidade objetiva → individualizar de fato |
| Pluralidade de fatos | Capitular pelo que se prova: material (69), formal (70) ou continuado (71) | Defesa buscará continuidade (menor pena) → fundamentar a espécie de concurso pelo fato real |
| Cabe ANPP mas o fato é grave | Recusar/condicionar o acordo com fundamentação idônea (não basta discricionariedade nua) | Defesa/investigado pode reclamar à instância revisora → registrar as razões da recusa |

> **Honestidade acusatória (dever institucional):** o MP é **fiscal da ordem jurídica**, não parte interessada em condenar a todo custo. Capitulação, qualificadoras e concurso devem espelhar o **fato provado** — inflar a imputação para afastar benefício ou pressionar acordo é desvio de finalidade e vicia a persecução.

## Súmulas e diretrizes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 524/STF** — arquivado o inquérito por **falta de provas**, só cabe nova ação penal se surgirem **provas novas** (regra de reabertura — antecipar antes de arquivar). *(súmula notória; confirmar redação/aplicação atual)*
- **Trancamento de ação penal / rejeição por falta de justa causa** — a jurisprudência de STJ/STF admite o trancamento **apenas** quando a atipicidade, a ausência de indícios de autoria ou a extinção da punibilidade forem **evidentes de plano**, sem necessidade de dilação probatória. **Qualquer número de HC, REsp, tema ou informativo específico deve ser tratado como [NÃO VERIFICADO]** e conferido via `jurisprudencia-stj-stf` antes de citar.
- **Denúncia genérica em crimes societários** — orientação consolidada de que a condição de sócio/administrador não basta, exigindo-se vínculo mínimo com o fato. **Precedente numérico específico: [NÃO VERIFICADO]** — confirmar acórdão-líder antes de invocar.
- **Eficácia do art. 28 (novo) do CPP** — a redação da Lei 13.964/19 teve eficácia discutida no STF (ADIs do Pacote Anticrime). **[NÃO VERIFICADO]** — conferir a situação vigente (suspensão/modulação/vigência plena) via `jurisprudencia-stj-stf` **antes** de descrever o rito de arquivamento.

> **Preferir a tese e o dispositivo ao número do acórdão.** Ensine a razão jurídica (ex.: "trancamento só cabe quando a atipicidade é manifesta") e deixe o número do julgado para a conferência no gate. **Melhor faltar precedente do que citar julgado inexistente** — há sanções reais por jurisprudência inventada por IA.

## Erros comuns (anti-padrões)

- **Denunciar por "haver indícios de crime"** sem testar a **justa causa** completa (materialidade + autoria + tipicidade material + punibilidade).
- **Confundir o padrão de recebimento com o de condenação** — exigir prova plena na denúncia (paralisa) ou, no oposto, denunciar com lastro **zero** de autoria.
- **Denúncia genérica** em autoria coletiva — imputar a todos sem descrever a conduta de cada um (inépcia, art. 395, I).
- **Superqualificar o fato** — incluir qualificadoras/causas de aumento não provadas, inclusive para estourar o teto do ANPP (desvio de finalidade).
- **Pular o filtro do ANPP (28-A)** quando cabível — recusar sem fundamentação idônea.
- **Errar a espécie de concurso** (material x formal x continuado) — impacta pena, competência e benefícios.
- **Ignorar a prescrição** já consumada — denunciar fato prescrito (usar `prescricao`).
- **Citar jurisprudência de memória** sem passar pelo gate `jurisprudencia-stj-stf` — risco de julgado inexistente.

## Checklist final (antes de decidir o caminho)

- [ ] **Materialidade** comprovada (laudo/corpo de delito/documentos)?
- [ ] **Autoria** com indícios **suficientes** (não mera suspeita/delação isolada)?
- [ ] **Tipicidade** formal e material (afastada a insignificância quando o caso for de bagatela)?
- [ ] **Punibilidade** viva — sem prescrição/decadência/extinção (skill `prescricao`)?
- [ ] Caso de **arquivamento** (art. 28) ou de **diligências** em vez de denúncia?
- [ ] **ANPP (28-A)** ou **sursis processual (89)** cabível e analisado/proposto?
- [ ] Em autoria coletiva, **conduta de cada agente** descrita com nexo concreto?
- [ ] **Capitulação** correta, com qualificadoras **provadas** e **concurso** (69-71) bem definido?
- [ ] Requisitos do **art. 41** atendíveis (fato com circunstâncias, qualificação, rol, classificação)?
- [ ] **Citações verificadas** via `jurisprudencia-stj-stf` e decisão submetida à **revisão do promotor natural**?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à formação do *opinio delicti*; a decisão de denunciar, arquivar ou negociar é **sempre** do membro do Ministério Público natural, indelegável e fundamentada.
- **Ética do polo acusatório.** A atuação rege-se pelo regime do **Ministério Público (CNMP** e Lei Orgânica respectiva — LC 75/93 / Lei 8.625/93), pela **independência funcional** e pelo dever de **objetividade** (o MP busca a correta aplicação da lei, não a condenação a qualquer preço). Assistente de acusação atua nos limites do art. 268 e seguintes do CPP.
- **Skill do polo acusatório** — inaplicável à defesa; o roteador confere o polo antes de sugerir.
- **Verificação de citações** — nenhuma súmula/tese/precedente citado de memória: tudo passa por `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** decidido o caminho, ao redigir a peça correspondente (`denuncia-mp`, `arquivamento-inquerito`, `anpp`) aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e clareza.
