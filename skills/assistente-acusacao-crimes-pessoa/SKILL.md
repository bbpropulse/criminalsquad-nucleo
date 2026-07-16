---
name: assistente-acusacao-crimes-pessoa
description: >-
  Use para analisar assistente acusacao crimes pessoa: [POLO ACUSATÓRIO] Use no polo da
  vítima/assistente de acusação ou do Ministério Público para sustentar a imputação em crimes contra
  a pessoa fora do rito do júri (lesão corporal, ameaça, maus-tratos, cárcere privado,
  perseguição/stalking, violência psicológica, feminicídio tentado no que couber): demonstrar as
  elementares e o dolo, sustentar a classificação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, acusacao, crimes-contra-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-acusacao-crimes-pessoa"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-acusacao-crimes-pessoa", "assistente acusacao", "crimes pessoa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Assistência de Acusação em Crimes contra a Pessoa — fora do júri (CP, arts. 129 a 154-B)

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

Esta skill orienta a **sustentação da imputação pelo polo acusatório** — **assistente de acusação** (vítima/sucessores, arts. 268 a 273 do CPP) ou **Ministério Público** — em **crimes contra a pessoa** que **não** tramitam pelo Tribunal do Júri: lesão corporal (art. 129), ameaça (art. 147), perseguição/*stalking* (art. 147-A), violência psicológica contra a mulher (art. 147-B), maus-tratos (art. 136), sequestro e cárcere privado (art. 148), entre outros. O objetivo é **demonstrar as elementares e o dolo**, **sustentar a classificação mais gravosa** amparada em prova, **refutar teses de atipicidade e de excludentes** e **requerer a resposta penal e reparatória** cabíveis.

> **⚠️ ATENÇÃO — POLO ACUSATÓRIO.** Esta skill é do **polo da acusação**. Antes de usá-la, o roteador/profissional deve **confirmar o polo** no perfil da instituição (`_memory/company.md`): assistente de acusação exige advogado(a) da vítima **habilitado** nos autos (art. 268 CPP); atuação como MP segue a **LC 75/93 e a Lei 8.625/93**, não a advocacia. Se a instituição atua na **defesa**, use as skills de defesa por tipo penal — não esta.

> **Lição central:** a acusação em crime contra a pessoa **vive da prova do resultado e do dolo**. **Classifique a lesão pelo laudo ANTES de qualquer coisa** (leve/grave/gravíssima — art. 129 e §§) e **prove o elemento subjetivo** (dolo de lesionar, de ameaçar, de submeter). Tese acusatória sem laudo que sustente o resultado, ou sem prova do dolo, é tese frágil — antecipa a desclassificação ou a absolvição.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos tipos e das causas de aumento. Alterações recentes reescreveram este campo — em especial a **Lei 14.994/2024**, que tornou o **feminicídio crime autônomo (art. 121-A do CP)** e criou/agravou dispositivos correlatos, e a **Lei 14.188/2021**, que criou a **violência psicológica contra a mulher (art. 147-B)** e o tipo de **lesão corporal contra a mulher por razões da condição do sexo feminino (art. 129, §13)**. Confira também súmulas, temas e eventual *overruling* via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça.

> **Recorte de rito (importante).** Feminicídio **consumado ou tentado** é crime **doloso contra a vida** e vai a **júri** — não é esta skill. Aqui se cuida da acusação em crimes contra a pessoa **fora do júri**; menções ao feminicídio tentado servem apenas para **delimitar competência** e para o correto encaminhamento ao rito do júri (skills de júri e `quesitos-acusacao-juri`). Na dúvida entre lesão grave e homicídio tentado / feminicídio tentado, a controvérsia é sobre o **animus** e define a **competência** — trate-a explicitamente.

## Base legal

- **CP, art. 129 e §§** — lesão corporal (leve, grave, gravíssima, seguida de morte); **§9º** (violência doméstica e familiar); **§13** (contra a mulher por razões da condição do sexo feminino — Lei 14.188/2021); **§§ de aumento** conforme redação vigente.
- **CP, art. 136** — maus-tratos; **art. 147** — ameaça; **art. 147-A** — perseguição (*stalking*, Lei 14.132/2021); **art. 147-B** — violência psicológica contra a mulher (Lei 14.188/2021); **art. 148** — sequestro e cárcere privado.
- **Lei 11.340/2006 (Lei Maria da Penha)** — quando a vítima é mulher em contexto doméstico/familiar (medidas protetivas; vedações do art. 41; competência do Juizado de Violência Doméstica).
- **CPP, arts. 268 a 273** — o **assistente de acusação**: habilitação, poderes (propor meios de prova, requerer perguntas, aditar/arrazoar, recorrer) e limites.
- **CPP, art. 387, IV** — fixação do **valor mínimo de reparação** dos danos na sentença condenatória (ver skill `assistente-reparacao-quantum-387`).
- **CPP, art. 383 (emendatio) e art. 384 (mutatio)** — correção da capitulação e ampliação da imputação em face da prova.
- **CP, art. 23 e 25** — excludentes de ilicitude (legítima defesa) a serem **refutadas** quando invocadas pela defesa.

## Poderes e limites do assistente de acusação (CPP, arts. 268-273)

O **assistente** atua **ao lado do MP**, não no lugar dele. Antes de qualquer sustentação:

- **Habilitação (art. 268):** a vítima (ou, morta, o cônjuge/companheiro, ascendente, descendente ou irmão — art. 31 CPP) requer a admissão nos autos; **exige-se advogado**. Sem habilitação deferida, não há atuação como assistente.
- **Poderes (art. 271):** propor meios de prova, requerer perguntas às testemunhas, aditar o libelo (onde aplicável), participar dos debates, **arrazoar recursos** e **recorrer** (inclusive supletivamente — ver `assistente-recurso-supletivo`).
- **Recurso supletivo:** o assistente pode apelar quando o MP não recorre (Súmula 210/STF [NÃO VERIFICADO — conferir número e teor via `jurisprudencia-stj-stf`]); atenção ao **prazo** e à legitimação — ver `calculadora-tempestividade`.
- **Limite:** o assistente **não dispõe da ação penal pública** nem substitui a *opinio delicti*; sua atuação é **acessória e fiscalizatória**, voltada ao interesse na condenação e na reparação.

## Método de sustentação — o caminho da imputação

Para **cada tipo penal**, a acusação percorre a mesma espinha dorsal. Preencha-a com a prova concreta:

1. **Materialidade** — o fato existiu e produziu o resultado típico. Em lesão: **laudo de exame de corpo de delito** (art. 158 CPP; a falta é suprível por prova testemunhal quando os vestígios desaparecem, art. 167). Em ameaça/*stalking*: prova do ato (mensagens, testemunhas, boletim, contexto reiterado).
2. **Autoria** — o acusado é quem praticou. Reconhecimento (atenção à formalidade do **art. 226 CPP** — ver jurisprudência sobre reconhecimento via `jurisprudencia-stj-stf`), prova testemunhal, elementos de corroboração.
3. **Tipicidade e classificação** — subsumir o fato ao tipo **mais gravoso que a prova sustenta** (ex.: lesão gravíssima, não leve, se o laudo aponta deformidade/perda de função). É aqui que se joga o resultado da causa.
4. **Elemento subjetivo (dolo)** — dolo de lesionar/ameaçar/submeter; nos crimes contra a mulher, o **dolo específico** ("por razões da condição do sexo feminino") quando o tipo o exigir. **Refutar culpa** onde a defesa alega crime culposo (lesão culposa, art. 129, §6º, tem pena e rito muito menores).
5. **Qualificadoras / causas de aumento** — sustentá-las **uma a uma**, com prova de cada elementar (violência doméstica; contra a mulher; motivação; meio; concurso; vítima vulnerável).
6. **Ilicitude e culpabilidade** — **refutar** legítima defesa e demais excludentes suscitadas (ver adiante).
7. **Resposta penal e reparatória** — requerer condenação, o reconhecimento de qualificadoras/aumentos e o **quantum reparatório mínimo (art. 387, IV)**.

## Roteiro por tipo penal (elementares, teses acusatórias e pontos de atenção)

### Lesão corporal (art. 129)
- **A classificação é tudo.** O laudo define **leve** (*caput*), **grave** (§1º), **gravíssima** (§2º) ou **seguida de morte** (§3º). **Sustente a gradação mais gravosa que o laudo ampara** (perigo de vida, debilidade permanente, incapacidade > 30 dias, perda/inutilização de membro/sentido/função, deformidade permanente, aceleração de parto/aborto).
- **Violência doméstica (§9º) e contra a mulher (§13):** provar o **contexto** (relação doméstica/familiar/afetiva) e, no §13, a **razão de gênero**. Afasta a transação penal e a suspensão condicional do processo em Maria da Penha (art. 41 da Lei 11.340/2006; vedação de penas de cesta básica/pecuniárias, art. 17).
- **Teses acusatórias típicas:** materialidade pelo laudo; dolo de lesionar (não mero acidente); dolo eventual quando a conduta assume o risco do resultado; unidade/continuidade em agressões reiteradas.
- **Ponto de atenção — dolo de matar × lesão:** se a prova aponta **animus necandi** (região atingida, meio, reiteração, declarações), a capitulação correta pode ser **tentativa de homicídio/feminicídio** — o que **desloca a competência ao júri**. Sustente a tese pelo *animus* e requeira, se o caso, a *mutatio libelli* (art. 384 CPP) e o encaminhamento ao rito do júri.

### Ameaça (art. 147)
- **Elementares:** promessa de mal **injusto e grave**, séria e idônea a intimidar; **crime formal** (consuma-se com a ciência da vítima, independe do mal se concretizar).
- **Ação penal:** em regra **pública condicionada à representação** — **verificar a representação** e sua tempestividade. Em contexto de violência doméstica, atentar à orientação sobre representação e sua (ir)retratabilidade [conferir via `jurisprudencia-stj-stf`].
- **Tese acusatória:** seriedade e idoneidade da ameaça no **contexto** (histórico de violência reforça a gravidade e a credibilidade da promessa).

### Perseguição / *stalking* (art. 147-A) e violência psicológica (art. 147-B)
- **Perseguição (147-A):** **reiteração** de atos que ameaçam a integridade, restringem a liberdade ou perturbam a esfera de liberdade/privacidade. Provar o **padrão** (várias condutas), não um episódio isolado.
- **Violência psicológica (147-B):** causar **dano emocional** à mulher que a prejudique/perturbe o pleno desenvolvimento, por qualquer meio (ameaça, constrangimento, humilhação, manipulação, vigilância, isolamento). Prova por **contexto, testemunhas, laudo psicológico** e histórico.
- **Concurso e subsidiariedade:** atentar à **relação de subsidiariedade** desses tipos com crimes mais graves e à **vedação de bis in idem** — sustente o concurso **apenas** quando os bens jurídicos e as condutas forem distintos [conferir enquadramento via `jurisprudencia-stj-stf`].

### Maus-tratos (art. 136) e cárcere privado (art. 148)
- **Maus-tratos:** exposição a perigo da vida/saúde de pessoa **sob autoridade/guarda/vigilância**, por abuso dos meios de correção/disciplina, privação de alimentos/cuidados ou trabalho excessivo. Distinguir de **lesão dolosa** (no maus-tratos o dolo é de expor a perigo, não de lesionar) e de **tortura** (Lei 9.455/97, mais grave) — **capitular corretamente** conforme o *animus* provado.
- **Cárcere privado (148):** privação da liberdade de locomoção; sustentar as **qualificadoras** dos §§ (vítima ascendente/descendente/cônjuge; internação fraudulenta; duração > 15 dias; menor de 18; fim libidinoso).

## Refutação de teses defensivas frequentes (contra-teses)

| Tese da defesa | Contra-tese acusatória |
|---|---|
| **Legítima defesa (art. 25)** | Exigir a prova cabal de **agressão injusta, atual/iminente**; demonstrar **ausência de agressão** ou **excesso** (art. 23, § único) — a lesão desproporcional ou posterior à cessação da agressão **rompe** a excludente. Ônus de comprovar a excludente é de quem a alega; havendo dúvida sobre os requisitos, não se absolve por presunção. |
| **Atipicidade / lesão leve por não haver laudo** | Materialidade suprível por **prova testemunhal** quando os vestígios desaparecem (art. 167 CPP); sustentar a classificação pela prova global, não só pelo laudo faltante. |
| **Crime culposo (lesão culposa, §6º)** | Demonstrar **previsibilidade e assunção do risco** (dolo eventual) ou o **dolo direto** pelo modo de execução — afastar a culpa. |
| **Consentimento da vítima** | Em crimes contra a pessoa em contexto de violência doméstica, o consentimento é **irrelevante/viciado**; a integridade física é bem indisponível nos limites da lei. |
| **Retratação da representação / vítima não quer prosseguir** | Verificar a **natureza da ação** (incondicionada não se retrata) e as regras específicas de Maria da Penha sobre retratação (audiência do art. 16 da Lei 11.340/2006) [conferir via `jurisprudencia-stj-stf`]. |
| **Insignificância** | Regra: **não se aplica** a crimes com violência/grave ameaça à pessoa, nem em violência doméstica — sustentar a inaplicabilidade. |

## Estrutura das peças da acusação

A skill serve a três momentos típicos do assistente/MP. Adapte o esqueleto:

**(a) Requerimento de habilitação como assistente (CPP, art. 268)** — qualificação da vítima/legitimado, demonstração do interesse, procuração, pedido de admissão e de intimação de todos os atos.

**(b) Memoriais / alegações finais da acusação** — para o roteiro completo e transversal, aplique também `alegacoes-finais-acusacao`. Estrutura mínima:
```
I  — SÍNTESE DA IMPUTAÇÃO (o que a denúncia narrou)
II — DA MATERIALIDADE (laudo/prova do resultado, por elemento)
III— DA AUTORIA (prova, corroboração, reconhecimento válido)
IV — DA TIPICIDADE E CLASSIFICAÇÃO (subsunção ao tipo mais gravoso amparado)
V  — DO DOLO (elemento subjetivo; refutação da culpa)
VI — DAS QUALIFICADORAS/AUMENTOS (uma a uma, com prova)
VII— DA REFUTAÇÃO DAS TESES DEFENSIVAS (excludentes, atipicidade)
VIII—DO PEDIDO (condenação; qualificadoras; art. 387, IV — reparação mínima)
```

**(c) Razões/contrarrazões e recurso** — inclusive **recurso supletivo** do assistente quando o MP se omite (ver `assistente-recurso-supletivo` e a tempestividade em `calculadora-tempestividade`).

## Pedido e reparação (o fecho da acusação)

- **Condenação** pelo tipo e grau sustentados, com **reconhecimento expresso** das qualificadoras/aumentos.
- **Valor mínimo de reparação (art. 387, IV, CPP):** requerer **desde a denúncia/alegações**, com **pedido expresso e parâmetro** (o STJ exige pedido e contraditório sobre o *quantum* — ver `assistente-reparacao-quantum-387`; conferir tese/temas via `jurisprudencia-stj-stf`). Sem pedido e sem oportunidade de contraditório, o valor tende a ser afastado.
- **Dosimetria:** subsidiar o juízo com circunstâncias do art. 59 e agravantes (o cálculo determinístico é de `calculadora-dosimetria`; aqui se **descreve o método e se aponta a calculadora**, não se calcula).
- **Prescrição:** como acusação, **vigiar a prescrição** (inclusive intercorrente) para não perder a pretensão — método e cálculo em `calculadora-prescricao` e `analise-prescricao-virtual-antecipada`.

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 210/STF** — legitimidade do assistente para recorrer supletivamente [NÃO VERIFICADO — confirmar número/teor e vigência via `jurisprudencia-stj-stf`].
- Orientação do **STJ sobre reconhecimento de pessoas (art. 226 CPP)** e sua nulidade quando descumprido o procedimento [NÃO VERIFICADO — conferir precedente/tema via `jurisprudencia-stj-stf`].
- Orientação sobre **art. 387, IV** (necessidade de pedido e contraditório para o valor mínimo) [NÃO VERIFICADO — conferir tema/recurso repetitivo via `jurisprudencia-stj-stf`].
- Orientação sobre **(in)aplicabilidade da insignificância** em violência doméstica e crimes com violência à pessoa [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`].

> **Citation Gate (inegociável):** dispositivos de lei e súmulas notórias podem ser citados com certeza. **Qualquer número de acórdão (HC/REsp/RE), informativo, tema repetitivo ou súmula sobre a qual haja dúvida** deve ser marcado **[NÃO VERIFICADO]** e conferido via `jurisprudencia-stj-stf` **antes** de ir para a peça. **Ensine a tese e o dispositivo; não arrisque o número.**

## Erros comuns e checklist da acusação

**Anti-padrões (evitar):**
- Capitular lesão **leve** quando o laudo ampara **grave/gravíssima** (perder gravidade por comodismo).
- Não descrever/provar o **dolo** e deixar a porta aberta para a desclassificação para lesão culposa.
- Confundir **animus necandi** com dolo de lesionar — errar a competência (o júri some ou aparece indevidamente).
- Requerer o **art. 387, IV** sem pedido expresso e sem parâmetro/contraditório — o valor cai.
- Atuar como assistente **sem habilitação deferida**, ou fora dos limites dos arts. 268-273.
- Sustentar concurso entre 147-A/147-B e crime mais grave sem checar **subsidiariedade** (bis in idem).
- Ignorar a **representação** e sua tempestividade nos crimes condicionados.
- Citar súmula/precedente **de memória**, sem passar pelo gate.

**Checklist:**
- [ ] **Polo confirmado** (assistente habilitado / MP) no `_memory/company.md`?
- [ ] Tipo penal **fora do júri** (senão, encaminhar ao rito do júri)?
- [ ] **Laudo** classifica a lesão e sustenta o grau **mais gravoso** possível?
- [ ] **Materialidade** e **autoria** provadas (art. 167 se faltar laudo; art. 226 no reconhecimento)?
- [ ] **Dolo** demonstrado; **culpa** refutada?
- [ ] **Qualificadoras/aumentos** provados **um a um** (violência doméstica; §13; motivação)?
- [ ] **Excludentes** da defesa refutadas com prova (legítima defesa: agressão injusta e proporcionalidade)?
- [ ] **Representação** verificada (crimes condicionados) e tempestiva?
- [ ] **Art. 387, IV** requerido com pedido expresso, parâmetro e contraditório?
- [ ] **Prescrição** monitorada (`calculadora-prescricao`)?
- [ ] **Vigência** dos tipos conferida (Leis 14.994/2024, 14.188/2021, 14.132/2021) e citações pelo gate `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado/membro do MP responsável antes de protocolar?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da acusação; a responsabilidade pela imputação, pela capitulação e pelos pedidos é **sempre** do profissional responsável.
- **Ética por polo.** **Assistente de acusação:** advocacia sob o **EAOAB e o Provimento 205/2021**; exige habilitação (art. 268 CPP) e atuação nos limites dos arts. 268-273. **Ministério Público:** atuação sob a **LC 75/93 / Lei 8.625/93** e o **CNMP**; a acusação é regida pela **imparcialidade objetiva** e pela busca da verdade, não pela condenação a qualquer custo — o MP pode, inclusive, requerer a absolvição. Não confundir os regimes.
- **Vítima e LGPD.** Dados da vítima e do processo são sigilosos; não expor em repositório público (`acervo/casos/` é gitignored).
- **Citações.** Nenhuma súmula/precedente/tese de memória — tudo pelo gate `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
