---
name: defesa-genocidio-2889
description: >-
  Use ao defender acusado de GENOCÍDIO (Lei 2.889/1956) — teses de atipicidade por ausência do dolo
  especial de destruir grupo nacional/étnico/racial/religioso, distinção do homicídio comum, do
  racismo (Lei 7.716) e do terrorismo, competência (Justiça Federal / júri), e o regime de
  imprescritibilidade/inafiançabilidade. Rascunho técnico para revisão humana. Gatilhos: genocídio,
  Lei 2.889, Lei 2.889/56, dolo especial de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, leis-especiais, genocidio]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-genocidio-2889"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-genocidio-2889", "defesa genocidio", "genocidio 2889"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos Crimes de Genocídio (Lei 2.889/1956)

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

Esta skill orienta a **defesa técnica** de acusado pela prática de **genocídio** — a Lei 2.889/1956 (Lei de Genocídio), que internaliza a Convenção da ONU de 1948 para a Prevenção e Repressão do Crime de Genocídio. O núcleo da defesa é quase sempre a **atipicidade por ausência do dolo especial** (a intenção de destruir, no todo ou em parte, um grupo **nacional, étnico, racial ou religioso** como tal) e a correta **distinção** entre genocídio, homicídio qualificado, crimes de racismo (Lei 7.716) e terrorismo (Lei 13.260/2016).

> **Lição central:** genocídio **não é homicídio em massa**. O que qualifica a conduta como genocídio é o **dolo especial de destruir o grupo protegido** (*dolus specialis* / *intent to destroy*), não o número de vítimas. Ataque de móvel pessoal, patrimonial, passional ou de facção — ainda que letal e coletivo — **não é genocídio**; a defesa deve **negar a finalidade de destruição do grupo** e requerer a desclassificação para o tipo comum. Classificar o dolo ANTES de tudo é a régua de toda a peça.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** da Lei 2.889/1956 (o art. 1º, alíneas *a* a *e*, e as regras de concurso, tentativa, associação, incitação e conexão dos arts. 2º a 5º), e o regime constitucional dos crimes imprescritíveis/inafiançáveis (CF, art. 5º, XLII e XLIV — que tratam de racismo e ação de grupos armados, **não** do genocídio: cuidado com a fonte da imprescritibilidade). **Não cite súmula, tema repetitivo, informativo ou número de HC/RE/REsp de memória** — todo precedente específico passa pela skill `jurisprudencia-stj-stf` antes de ir para a peça. Na dúvida entre omitir e arriscar um número de acórdão, **omita e ensine a tese**.

## Base legal

- **Lei 2.889/1956** — define e pune o genocídio. Ponto central: **todas as condutas do art. 1º exigem o fim especial "com a intenção de destruir, no todo ou em parte, grupo nacional, étnico, racial ou religioso, como tal".**
- **Art. 1º, alíneas *a*–*e* da Lei 2.889/56** — modalidades típicas: (a) matar membros do grupo; (b) causar lesão grave à integridade física ou mental de membros; (c) submeter o grupo a condições de existência capazes de ocasionar sua destruição física total ou parcial; (d) adotar medidas destinadas a impedir os nascimentos no seio do grupo; (e) efetuar a transferência forçada de crianças do grupo para outro grupo.
- **Art. 2º** — associação para a prática de genocídio (crime autônomo).
- **Art. 3º** — incitação, direta e pública, ao genocídio (e forma tentada/frustrada, conforme a redação).
- **Art. 4º** — aumento de pena para autoridade ou funcionário público (conferir a redação).
- **Art. 5º** — punição da tentativa.
- **Convenção de 1948 (Decreto 30.822/1952)** — fonte internacional do tipo; interpretação conforme o *dolus specialis*.
- **Grupos protegidos (rol taxativo):** apenas **nacional, étnico, racial ou religioso**. Grupos **políticos, sociais, econômicos ou de gênero NÃO integram** o tipo do genocídio — extermínio por motivação política não é genocídio (é homicídio/tipo comum). Esse recorte é uma porta de atipicidade.

> **Nota de escopo (distinção obrigatória — evitar duplicidade):**
> - **Racismo/injúria racial (Lei 7.716 e art. 2º-A):** protege a **igualdade e a honra** contra discriminação; **não** exige finalidade de destruição do grupo. Para a defesa nesses tipos, use `defesa-injuria-racial-racismo`. Se a imputação é de destruir o grupo, é genocídio; se é discriminar/ofender, é racismo — **não confundir os tipos**.
> - **Terrorismo (Lei 13.260/2016):** exige finalidade de **provocar terror social ou generalizado** (motivação de xenofobia, discriminação, etc.), distinta da **destruição do grupo como tal**. Ver `defesa-crime-terrorismo`.
> - **Homicídio (art. 121 CP):** protege a **vida individual**; ausente o dolo de destruir o grupo, a morte coletiva desce para homicídio (eventualmente qualificado/em concurso).

## O elemento nuclear — o dolo especial de destruir o grupo

O genocídio é crime de **tipo subjetivo especial**: além do dolo de praticar a conduta-base (matar, lesionar, etc.), exige-se o **elemento subjetivo do injusto** — a **intenção de destruir o grupo protegido, no todo ou em parte, como tal**. Sem essa finalidade, **o fato é atípico como genocídio**.

**Consequências práticas para a defesa:**
- **Não basta o dolo de matar** vários membros de um grupo: é preciso provar que o agente atuou **para destruir o grupo** enquanto grupo. A acusação carrega esse ônus.
- **"Como tal"** significa que a vítima foi atingida **por pertencer ao grupo**, e o alvo último é o **grupo**, não o indivíduo. Motivação pessoal, vingança, disputa de tráfico, conflito fundiário sem recorte étnico, etc., **afastam** o tipo.
- **"No todo ou em parte":** a destruição parcial basta, mas exige que a "parte" seja **substancial/significativa** do grupo (ou de um segmento relevante em dado território). A defesa pode sustentar que o alcance da conduta não visava nem podia atingir parte substancial do grupo.
- **Prova do dolo:** como é elemento anímico, a acusação costuma inferi-lo de **indicadores objetivos** (discurso do agente, escala e sistematicidade, seleção das vítimas pelo pertencimento, planejamento). A defesa deve **desconstruir cada indicador**, oferecendo explicação alternativa (motivação comum) para os mesmos fatos.

## Roteiro de análise e defesa (por eixo de tese)

### 1. Atipicidade por ausência do dolo especial (tese-mãe)
Negar a **finalidade de destruir o grupo**. Demonstrar motivação diversa (pessoal, patrimonial, passional, de facção, política) que explica os fatos sem o *dolus specialis*. Requerer **desclassificação** para homicídio (art. 121 CP) ou outro tipo comum. É a tese mais forte porque ataca o **cerne** do tipo.

### 2. Grupo não protegido (atipicidade do rol)
Sustentar que a coletividade atingida **não é** grupo nacional, étnico, racial ou religioso — mas grupo **político, social, econômico ou de gênero** —, hipóteses **fora** do rol taxativo do art. 1º. Nesse caso, ainda que houvesse "intenção de destruir", **não há genocídio**.

### 3. Distinção do homicídio e correta desclassificação
Quando há mortes, insistir na diferença de bem jurídico: **vida individual** (homicídio) × **existência do grupo** (genocídio). Se o único dolo demonstrado é o de matar pessoas determinadas, o crime é **homicídio** (simples/qualificado, eventualmente em concurso), competência do **júri**, com todo o regime de dosimetria, qualificadoras e teses próprias.

### 4. Distinção do racismo e do terrorismo
Se a conduta é **discriminatória/ofensiva** sem finalidade de destruição, o campo é da **Lei 7.716** (usar `defesa-injuria-racial-racismo`), não da Lei 2.889. Se a finalidade é **terror generalizado**, discute-se **Lei 13.260/2016** (`defesa-crime-terrorismo`). A correta rotulagem muda pena, competência e regime — e frequentemente **beneficia** a defesa.

### 5. Concurso de crimes × bis in idem
Genocídio na modalidade "matar membros do grupo" (art. 1º, *a*) **absorve** os homicídios praticados como meio de execução, ou há **concurso**? É ponto controvertido. A defesa deve **evitar dupla punição pelo mesmo substrato fático** (ne bis in idem): se condenado por genocídio, questionar a cumulação autônoma dos homicídios; se afastado o genocídio, remanesce o tipo comum. **Tese defensiva:** subsunção única, vedado apenar duas vezes a mesma morte sob rótulos distintos. **Confirmar o entendimento atual** dos tribunais superiores via `jurisprudencia-stj-stf` antes de fixar a posição.

### 6. Competência e procedimento (questão preliminar)
- **Justiça Federal?** Genocídio contra comunidades (ex.: povos indígenas) tende a atrair interesse da União/direitos indígenas (CF, art. 109) — mas a competência concreta depende do caso e do entendimento firmado. **Não afirme categoricamente**; suscite/defenda a competência conforme a estratégia e **confirme o precedente aplicável** (há discussão histórica sobre genocídio de indígenas e competência do júri × juízo singular federal). Passe pela skill `jurisprudencia-stj-stf`.
- **Júri?** Se a modalidade é "matar" (art. 1º, *a*), há tese de que a competência seria do **Tribunal do Júri** por envolver crime doloso contra a vida (conexão com homicídio); há também posição de que o genocídio, como crime autônomo pluriofensivo, seria de **juízo singular**. **Ponto sensível e divergente** — sustente a via que favoreça a defesa no caso e **verifique o entendimento vigente**. Se for a júri, articular com as skills `juri-quesitacao` e `juri-plenario-debates`.

### 7. Autoria, participação e associação (art. 2º)
Distinguir **executor, partícipe e mero associado**. A **associação para o genocídio (art. 2º)** é crime autônomo — atacar a prova do vínculo associativo estável e da finalidade comum. Afastar responsabilidade objetiva; exigir prova do **dolo próprio** de cada agente quanto à finalidade de destruição.

### 8. Incitação (art. 3º) — liberdade de expressão × discurso genocida
Na incitação direta e pública ao genocídio, discutir a fronteira com a **liberdade de expressão**: exigir **incitação direta, pública e concreta** (não mera opinião abjeta) e o **dolo de incitar à destruição do grupo**. Discurso genérico e ofensivo, sem apelo direto e público à destruição, pode não preencher o tipo (podendo, quando muito, migrar para racismo). Verificar precedentes via `jurisprudencia-stj-stf`.

### 9. Erro de tipo e imputabilidade
- **Erro de tipo (art. 20 CP)** sobre elementos do tipo (ex.: desconhecimento do pertencimento das vítimas ao grupo, quando esse dado integra o dolo) exclui o dolo — e, sem o especial fim, não há genocídio.
- **Inimputabilidade/semi-imputabilidade (arts. 26 e 28 CP)**, coação, obediência hierárquica em contexto de conflito — teses de exclusão/atenuação da culpabilidade a examinar conforme o quadro probatório.

## Teses × contra-teses (mapa rápido)

| Tese da defesa | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Ausência do *dolus specialis* → atipicidade/desclassificação | Art. 1º, Lei 2.889 (fim especial de destruir o grupo) | Dolo de destruição inferido de discurso, escala, seleção das vítimas e sistematicidade |
| Grupo fora do rol (político/social/gênero) | Rol taxativo do art. 1º | Recorte étnico/racial/religioso encoberto por rótulo político |
| É homicídio, não genocídio | Bem jurídico = vida individual | Pluriofensividade; alvo é o grupo "como tal" |
| É racismo (Lei 7.716), não genocídio | Finalidade discriminatória, não destrutiva | Discriminação instrumental à destruição do grupo |
| Vedação ao bis in idem no concurso | Ne bis in idem | Autonomia dos tipos; concurso material |
| Incitação não configurada (liberdade de expressão) | Exigência de incitação direta e pública | Apelo concreto e público à destruição do grupo |
| Nulidade por competência/procedimento | CF, art. 109 / regime do júri | Competência firmada conforme a modalidade e o precedente |

## Regime constitucional — imprescritibilidade e fiança (cuidado técnico)

- A **imprescritibilidade** e a **inafiançabilidade** expressas na CF, art. 5º, referem-se ao **racismo (XLII)** e à **ação de grupos armados contra a ordem constitucional (XLIV)** — **o texto constitucional não lista o "genocídio" nominalmente**. Há **debate doutrinário e jurisprudencial** sobre estender (ou não) o regime de imprescritibilidade ao genocídio (via Convenção da ONU, jus cogens, ou pela intersecção com racismo). **Não afirme como pacífico** que o genocídio é imprescritível: essa é, inclusive, **matéria defensiva** — sustentar a **prescritibilidade** conforme as regras gerais dos arts. 109 e ss. do CP pode ser tese central de extinção da punibilidade.
- **Tese defensiva (prescrição):** ausente previsão constitucional **expressa** de imprescritibilidade para o genocídio, aplicam-se as regras ordinárias de prescrição (arts. 109–119 CP), calculadas pela pena da conduta correspondente. **Verificar o entendimento atual do STF/STJ** antes de deduzir a tese — é ponto sensível e potencialmente decisivo. Para o cálculo, usar a metodologia da skill `execucao-prescricao` / a calculadora `calculadora-prescricao` (não calcular de memória).

> **Método de cálculo de prazos/prescrição:** esta skill **não** calcula prescrição. Identifique a pena da conduta (art. 1º remete às penas do art. 121 e correlatos, conforme a modalidade), o marco interruptivo e o regime aplicável, e **aponte** para a `calculadora-prescricao` (ou marque `[calculadora a implementar com testes]` se indisponível). Prazo deve ser sempre **conferido**, nunca estimado no corpo da peça.

## Estrutura da peça de defesa (resposta/alegações/memoriais)

1. **Endereçamento e qualificação** — ao juízo competente (verificar Justiça Federal × Estadual e júri × singular como **preliminar**).
2. **Síntese da imputação** — expor o que a denúncia atribui e **isolar o elemento do dolo especial** como ponto nevrálgico.
3. **Preliminares** — competência, nulidades (cadeia de custódia da prova pericial e testemunhal — ver `cadeia-de-custodia`), inépcia da denúncia por não descrever o *dolus specialis*.
4. **Mérito — atipicidade** — desenvolver a **tese-mãe** (ausência de finalidade de destruição do grupo) e as subsidiárias (grupo fora do rol; desclassificação para homicídio/racismo).
5. **Prova** — atacar a **inferência do dolo**: cada indicador da acusação recebe leitura alternativa; requerer perícias, oitivas e diligências que evidenciem a motivação comum.
6. **Concurso e dosimetria** — vedar bis in idem; subsidiariamente, discutir dosimetria pela `calculadora-dosimetria` (não calcular no corpo).
7. **Prescrição/extinção** — se cabível, deduzir a tese de prescritibilidade e apontar o cálculo à `calculadora-prescricao`.
8. **Pedidos** — absolvição por atipicidade; subsidiariamente, desclassificação; subsidiariamente, reconhecimento de causa de exclusão/atenuação e/ou prescrição.

> Ao redigir, aplique a skill `redacao-persuasiva-criminal` (teoria do caso, narrativa, subsunção explícita, coesão) — a régua de qualidade que a revisão cobra.

## Erros comuns / checklist antes de protocolar

- [ ] **Confundir genocídio com homicídio em massa** — sempre exigir e discutir o **dolo especial de destruir o grupo**.
- [ ] **Aceitar grupo político/social/de gênero como grupo protegido** — o rol do art. 1º é **taxativo** (nacional/étnico/racial/religioso).
- [ ] **Tratar imprescritibilidade como pacífica** — é debatível; considerar a **tese de prescrição** (arts. 109 ss. CP) e conferir o entendimento atual.
- [ ] **Não distinguir do racismo/terrorismo** — encaminhar a rotulagem correta muda pena, competência e regime (usar `defesa-injuria-racial-racismo` / `defesa-crime-terrorismo`).
- [ ] **Ignorar o bis in idem** no concurso genocídio × homicídios que lhe servem de meio.
- [ ] **Deixar de suscitar competência** (Federal × Estadual; júri × singular) como **preliminar**.
- [ ] **Calcular pena/prescrição "no olho"** — apontar para `calculadora-dosimetria` / `calculadora-prescricao` (ou `[calculadora a implementar com testes]`).
- [ ] **Aceitar dolo por presunção** — exigir prova; desconstruir cada indicador objetivo com explicação alternativa.
- [ ] **Cadeia de custódia** da prova pericial/documental conferida (`cadeia-de-custodia`)?
- [ ] **Toda citação verificada** via `jurisprudencia-stj-stf` — nenhum número de acórdão, tema ou informativo de memória?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela tese, pela peça e pelo protocolo é **sempre do(a) advogado(a)** (EAOAB; Código de Ética; Provimento 205/2021 quanto à comunicação). Não substitui o exame do caso concreto nem a leitura integral dos autos.
- **Polo:** esta skill é de **DEFESA** (`polo_acusacao=false`). O roteador deve **conferir o polo** da instituição no `company.md` antes de aplicá-la; se a atuação for do **Ministério Público/assistente de acusação**, use a skill acusatória correspondente — não esta.
- **Sensibilidade do tema.** Genocídio envolve discriminação e violência contra grupos protegidos. A defesa técnica de **atipicidade/desclassificação é legítima e não implica negação ou banalização** do fato: sustenta-se a **correta subsunção jurídica**, com rigor probatório e respeito à dignidade das vítimas.
- **Citation Gate (inegociável):** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer** precedente específico (HC/RE/REsp, tema, informativo) sem certeza absoluta é marcado `[NÃO VERIFICADO]` e conferido via `jurisprudencia-stj-stf`. **Ensinar a tese e o dispositivo vence arriscar um número de acórdão.**
