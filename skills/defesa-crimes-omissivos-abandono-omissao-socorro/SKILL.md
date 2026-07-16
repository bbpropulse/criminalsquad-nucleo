---
name: defesa-crimes-omissivos-abandono-omissao-socorro
description: >-
  Use ao defender crimes OMISSIVOS de perigo à pessoa fora do júri — abandono de incapaz (CP, art.
  133), exposição/abandono de recém-nascido (art. 134) e omissão de socorro (art. 135). Teses:
  ausência de dever de agir / posição de garantidor, inexistência de perigo concreto, socorro
  possível sem risco pessoal, ausência de dolo de perigo, quebra do nexo com o resultado agravador
  (§§ de morte/lesão grave), e desclassificação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-a-pessoa, crimes-omissivos]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-omissivos-abandono-omissao-socorro"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-omissivos-abandono-omissao-socorro", "defesa crimes", "omissao socorro"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes Omissivos de Perigo à Pessoa (CP, arts. 133 a 135)

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

Esta skill orienta a **defesa técnica** nas três figuras omissivas de perigo à pessoa do Capítulo III do Título I do Código Penal: **abandono de incapaz** (art. 133), **exposição ou abandono de recém-nascido** (art. 134) e **omissão de socorro** (art. 135). São crimes de **perigo** — punem a conduta que expõe a vítima a risco, não necessariamente o dano — e têm em comum a **estrutura omissiva**: o agente responde por **não ter feito** o que o direito lhe exigia. O núcleo da defesa está em testar, um a um, os pressupostos da omissão penalmente relevante: **dever de agir, possibilidade de agir sem risco pessoal, perigo concreto à vítima e dolo de perigo**.

> **Lição central:** em crime omissivo, a pergunta não é "o que o réu fez", mas "o que o direito exigia que ele fizesse e ele podia fazer". A defesa vence quando demonstra que **faltava o dever jurídico de agir**, que **a ação exigida era impossível ou arriscada à própria integridade**, que **não havia perigo concreto** à vítima, ou que **faltava o dolo de perigo**. Distinga sempre: arts. 133 e 135 são **omissivos próprios** (o dever nasce do próprio tipo); só há falar em **garantidor (art. 13, §2º)** e crime **comissivo por omissão** quando se imputa um resultado (morte/lesão) como se o réu o tivesse causado — e aí a exigência probatória é muito maior.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente dos arts. 133, 134 e 135 do CP e de suas causas de aumento e figuras qualificadas pelo resultado. Leis recentes de crimes contra a pessoa (p.ex. a **Lei 14.994/2024**, que mexeu no feminicídio e em majorantes de crimes contra a pessoa) podem repercutir em causas de aumento correlatas — **não presuma o texto**. Confira súmulas, teses, temas e overruling via a skill `jurisprudencia-stj-stf` antes de fundamentar qualquer peça. Nada de citar de memória (Citation Gate).

## Base legal

- **Art. 133, CP — Abandono de incapaz:** abandonar pessoa que está sob seu **cuidado, guarda, vigilância ou autoridade** e que, por qualquer motivo, é **incapaz de defender-se** dos riscos do abandono. Pena base: detenção de 6 meses a 3 anos. **§1º**: se resulta **lesão corporal grave** (pena de reclusão de 1 a 5 anos); **§2º**: se resulta **morte** (reclusão de 4 a 12 anos) — figuras **preterdolosas** (dolo no perigo, culpa no resultado). **§3º**: causas de **aumento** (abandono em lugar ermo; ascendente/descendente, cônjuge, irmão, tutor/curador; maior de 60 anos — conferir a redação e os patamares vigentes).
- **Art. 134, CP — Exposição ou abandono de recém-nascido:** expor ou abandonar recém-nascido **para ocultar desonra própria**. Pena base: detenção de 6 meses a 2 anos. **§1º** (lesão grave) e **§2º** (morte) — também qualificadas pelo resultado. É crime **próprio** (só o pai/mãe/parente que age para ocultar a desonra) e com **elemento subjetivo especial** (o fim de "ocultar desonra própria").
- **Art. 135, CP — Omissão de socorro:** deixar de prestar assistência, **quando possível fazê-lo sem risco pessoal**, a criança abandonada ou extraviada, ou a pessoa **inválida ou ferida, ao desamparo, ou em grave e iminente perigo**; ou não pedir, nesses casos, o socorro da autoridade pública. Pena: detenção de 1 a 6 meses, ou multa. **Parágrafo único**: pena **aumentada de metade** se da omissão resulta lesão grave, e **triplicada** se resulta morte.
- **Art. 135-A, CP — Condicionamento de atendimento médico-hospitalar emergencial** (Lei 12.653/2012): exigir cheque-caução, nota promissória ou preenchimento prévio de formulários como condição de atendimento de emergência — **figura próxima**, para distinção/desclassificação em contexto hospitalar.
- **Art. 13, §2º, CP — Relevância da omissão / posição de garantidor:** a omissão só é penalmente relevante quando o omitente **devia e podia agir** para evitar o resultado; o dever incumbe a quem tem **obrigação legal de cuidado, proteção ou vigilância** (a), a quem **assumiu de outra forma** a responsabilidade de impedir o resultado (b), e a quem, com **comportamento anterior, criou o risco** (c). **Base da distinção entre omissivo próprio e impróprio.**
- **Art. 13, *caput*, CP — Nexo de causalidade:** essencial para as figuras qualificadas pelo resultado (§§ de lesão grave/morte) e para toda imputação de resultado por omissão.
- **Art. 18, parágrafo único, CP** — só há crime culposo quando a lei expressamente prevê; os arts. 133 a 135, na base, são **dolosos** (dolo de perigo). **Não há forma culposa** da omissão de socorro na figura simples.
- **Art. 23, CP** — excludentes de ilicitude (estado de necessidade, inclusive quanto ao risco pessoal que legitima a não intervenção).
- **Lei 10.741/2003 (Estatuto da Pessoa Idosa)** e **Lei 8.069/90 (ECA)** — deveres de cuidado e figuras próprias de abandono correlatas (para distinção/concurso aparente).

## O que distingue as três figuras (mapa rápido)

| | Art. 133 (abandono de incapaz) | Art. 134 (recém-nascido) | Art. 135 (omissão de socorro) |
|---|---|---|---|
| **Sujeito ativo** | Quem tem a vítima sob **cuidado, guarda, vigilância ou autoridade** (crime **próprio**) | Pai/mãe/parente que age para **ocultar desonra própria** (crime **próprio**) | **Qualquer pessoa** (crime **comum**) |
| **Vítima** | Incapaz de defender-se dos riscos do abandono | **Recém-nascido** | Criança abandonada/extraviada; inválido/ferido ao desamparo; pessoa em grave e iminente perigo |
| **Vínculo prévio** | **Exigido** (relação de cuidado/guarda) | **Exigido** (parentesco + fim de ocultar desonra) | **Dispensado** (dever geral de solidariedade) |
| **Elemento subjetivo especial** | Não (basta o dolo de perigo) | **Sim**: fim de ocultar desonra própria | Não (basta o dolo de perigo) |
| **Estrutura** | Omissivo **próprio** de perigo | Omissivo **próprio** de perigo | Omissivo **próprio** de perigo |

> **Regra prática de subsunção.** Havendo relação de cuidado/guarda com a vítima, o tipo tende a ser o **art. 133**, mais grave, e **não** o art. 135. A defesa examina se o vínculo de garantia existia de fato — se **não** existia, pode-se pleitear a **desclassificação** para a omissão de socorro (art. 135), de pena sensivelmente menor, ou a atipicidade.

## Pressupostos da omissão penalmente relevante — os pontos que a defesa ataca

Em qualquer crime omissivo, a punição exige a presença **cumulativa** dos seguintes elementos. A ausência de **um** já compromete a tipicidade:

| Pressuposto | O que exige | Ataque da defesa |
|---|---|---|
| **Dever jurídico de agir** | Norma/relação que impõe a conduta (posição de garante nos impróprios; o próprio tipo nos próprios) | Inexistência do vínculo de cuidado/guarda (art. 133); ausência de parentesco ou do fim de ocultar desonra (art. 134); situação que não se enquadra nas hipóteses do art. 135 |
| **Poder de agir (possibilidade real)** | O agente devia **e podia** agir concretamente | Impossibilidade física, ausência no local, desconhecimento da situação de perigo, incapacidade momentânea |
| **Ausência de risco pessoal (art. 135)** | O socorro só é exigível **sem risco pessoal** | Risco concreto à integridade do agente (incêndio, afogamento, agressor armado, contágio) **afasta a exigibilidade** — elementar expressa do art. 135 |
| **Perigo concreto à vítima** | A conduta deve expor a vítima a **risco real** | Se o incapaz/recém-nascido/desamparado **não correu perigo concreto** (havia outra assistência, o local era seguro, terceiros presentes), falta o resultado de perigo |
| **Dolo de perigo** | Vontade/consciência de expor a vítima ao risco | Ausência de dolo: o agente não sabia da situação, agiu por descuido não doloso, ou confiou razoavelmente em que outrem prestaria o socorro |
| **Nexo (só nas figuras qualificadas)** | O resultado agravador (lesão grave/morte) deve **decorrer** da omissão | O resultado teria ocorrido **de todo modo** (causalidade hipotética); causa superveniente independente (art. 13, §1º); ausência de previsibilidade da culpa no resultado (preterdolo) |

> **Omissivo próprio × comissivo por omissão (crucial).** Nos arts. 133 e 135 (e no 134), o dever nasce **do próprio tipo** — são **omissivos próprios**, e o agente responde pela **omissão em si**, um crime de mera conduta/perigo, **sem** que se lhe impute o resultado como obra sua. Quando a acusação pretende imputar **morte ou lesão** como se o réu as tivesse **causado** (comissivo por omissão, art. 13, §2º), a exigência sobe: é preciso demonstrar **posição de garante**, **poder concreto de evitar o resultado** e **nexo de evitação** (que a ação omitida teria, com quase certeza, impedido o dano). A defesa insiste nessa fronteira: **omissivo próprio qualificado pelo resultado ≠ homicídio/lesão por omissão**. Confunde-los infla indevidamente a imputação.

## Roteiro de análise e defesa (ordem recomendada)

1. **Identificar a figura correta.** Há relação de cuidado/guarda? → art. 133. Recém-nascido + fim de ocultar desonra? → art. 134. Nenhum vínculo prévio, apenas dever geral de solidariedade? → art. 135. **A subsunção errada pela acusação abre desclassificação.**
2. **Testar o dever de agir.** No art. 133, provar que **não** havia cuidado/guarda/vigilância/autoridade (ex.: o réu não era responsável pela vítima naquele momento; a guarda era de terceiro). No art. 134, atacar o **elemento subjetivo especial** ("ocultar desonra própria") — sem esse fim, não é o art. 134. No art. 135, checar se a situação se enquadra nas hipóteses legais (criança abandonada/extraviada, inválido/ferido ao desamparo, grave e iminente perigo).
3. **Testar o poder de agir.** O réu **podia** agir? Estava presente, ciente e capaz? Impossibilidade física, ausência, desconhecimento do perigo → atipicidade por ausência de conduta omissiva relevante.
4. **Risco pessoal (art. 135).** Prestar socorro implicava **risco à própria integridade**? Se sim, a assistência direta não era exigível — restava, quando muito, **pedir socorro à autoridade** (segunda modalidade do art. 135). Demonstrar que o réu **acionou** ou tentou acionar a autoridade pode ser atipicidade da conduta central.
5. **Perigo concreto à vítima.** Houve **risco real**, ou a vítima estava assistida/segura (terceiros presentes, local protegido, socorro já a caminho)? Sem perigo concreto, não se consuma o crime de perigo.
6. **Dolo de perigo.** O réu **sabia** da situação e **quis/aceitou** expor a vítima ao risco? Descuido não doloso, confiança razoável em terceiro, erro sobre a situação de perigo (art. 20) → afastam o dolo. **Não há forma culposa** na omissão de socorro simples.
7. **Nexo e resultado agravador (§§).** Se imputada a forma qualificada (lesão grave/morte), atacar o **nexo**: o resultado decorreu **da omissão**, ou teria ocorrido de todo modo? Há **causa superveniente independente** (art. 13, §1º)? Faltou **previsibilidade** (o preterdolo exige culpa no resultado)? Sem nexo/previsibilidade, **remanesce apenas a figura simples**.
8. **Excludentes.** Estado de necessidade (art. 24), inexigibilidade de conduta diversa, coação — especialmente quando o socorro colidia com outro dever ou expunha o agente a perigo.
9. **Desclassificação e concurso aparente.** Do art. 133 para o 135 (quando cai o vínculo de garantia); distinção de **maus-tratos** (art. 136 — há dever de cuidado mas a conduta é de submeter a perigo por abuso dos meios de correção/disciplina, não abandono); afastar bis in idem com figuras do ECA/Estatuto da Pessoa Idosa.
10. **Dosimetria e substitutivos.** Não afastada a tipicidade: pleitear o mínimo, afastar causas de aumento do art. 133, §3º não comprovadas, e — nas penas compatíveis (art. 135; art. 133 base; art. 134) — **ANPP, suspensão condicional do processo, transação ou penas restritivas** conforme cabimento e o rito (a omissão de socorro simples é **infração de menor potencial ofensivo**, rito da Lei 9.099/95).

## Teses típicas de defesa (e suas contra-teses)

### 1. Inexistência de dever de agir / de posição de garantidor
- **Tese:** no art. 133, o réu **não** detinha cuidado, guarda, vigilância ou autoridade sobre a vítima no momento dos fatos — logo, não era destinatário do dever especial; quando muito, poderia cogitar-se do dever geral do art. 135. No art. 134, ausente o **fim de ocultar desonra própria**, a conduta não se subsome ao tipo. Sem dever jurídico de agir, a omissão é penalmente irrelevante (art. 13, §2º, a contrario).
- **Contra-tese (acusação):** o vínculo de cuidado existia de fato (guarda assumida, autoridade doméstica, dever legal); ou, no art. 134, o contexto revela a finalidade de ocultar a desonra. Havendo garantia, a omissão é típica.

### 2. Impossibilidade ou risco pessoal — inexigibilidade da conduta (art. 135)
- **Tese:** o art. 135 só exige o socorro **"quando possível fazê-lo sem risco pessoal"**. Havendo **risco concreto** à integridade do agente (agressor armado, incêndio, afogamento, ambiente perigoso), a assistência direta **não era exigível**; a norma remete, então, ao **pedido de socorro à autoridade** — que, se feito, satisfaz o dever. A cláusula do risco pessoal é **elementar do tipo**, não mera atenuante.
- **Contra-tese:** o risco alegado era abstrato/remoto, ou o réu poderia ao menos ter **acionado a autoridade** e não o fez; a omissão total permanece típica.

### 3. Ausência de perigo concreto à vítima
- **Tese:** os arts. 133 a 135 são crimes **de perigo**; sem **risco real** à vítima não há resultado típico. Se o incapaz/recém-nascido/desamparado **não correu perigo concreto** (havia terceiros a assisti-lo, o local era seguro, o socorro já estava a caminho), o crime de perigo **não se consuma**.
- **Contra-tese:** para parte da doutrina o art. 133/134 é de **perigo concreto** e o art. 135 de **perigo abstrato/presumido** — nesse enquadramento, bastaria a omissão na situação de risco típica, sem prova de perigo específico. **Cuidado:** a natureza (perigo concreto x abstrato) de cada figura é objeto de divergência — sustente o **perigo concreto** como exigência garantista, mas conheça a corrente contrária. [NAO VERIFICADO — a classificação de cada tipo como perigo concreto ou abstrato tem tratamento doutrinário divergente; conferir o entendimento aplicável e eventual jurisprudência via `jurisprudencia-stj-stf` antes de afirmar como pacífico].

### 4. Ausência de dolo de perigo
- **Tese:** o réu **não tinha consciência** da situação de perigo (não percebeu o estado da vítima, foi induzido a erro sobre a gravidade — art. 20, CP) ou **confiou razoavelmente** em que terceiro presente prestaria o socorro. Não há **dolo de perigo**, e **não existe forma culposa** da omissão de socorro simples (art. 18, par. único). A ausência de dolo impõe a absolvição.
- **Contra-tese:** as circunstâncias eram evidentes; o réu percebeu o perigo e, ainda assim, omitiu-se, ao menos com **dolo eventual** de perigo; a "confiança em terceiro" não afasta o dever pessoal e simultâneo de cada um.

### 5. Quebra do nexo com o resultado agravador (§§ de lesão grave/morte)
- **Tese:** imputada a forma qualificada, falta o **nexo** entre a omissão e o resultado: a lesão grave/morte **teria ocorrido de todo modo** (a vítima já estava em quadro irreversível), ou sobreveio **causa independente** (art. 13, §1º). Além disso, o resultado agravador é **preterdoloso** — exige **culpa** (previsibilidade) no resultado; sem previsibilidade, não se agrava. Afastado o nexo/previsibilidade, **remanesce apenas a figura simples** (base).
- **Contra-tese:** a omissão foi **condição** determinante do agravamento; o socorro tempestivo teria evitado ou reduzido o dano; o resultado era **previsível** ao homem médio na posição do réu.

### 6. Desclassificação entre as figuras (e para tipo menos grave)
- **Tese:** ausente o vínculo de garantia, **desclassifica-se do art. 133 para o art. 135** (pena muito menor e rito de menor potencial ofensivo). Ausente o fim de ocultar desonra, o art. 134 não se aplica. E há **fronteira com os maus-tratos (art. 136)** — quando a conduta é de expor a perigo por abuso de meios de correção/disciplina, e não de abandonar. A tipificação correta altera pena, rito e ação penal.
- **Contra-tese:** o vínculo de cuidado estava presente (mantém-se o 133); ou a conduta ultrapassa a mera omissão de socorro e configura abandono/maus-tratos com dever de garantia.

### 7. Distinção crucial — omissivo próprio qualificado ≠ homicídio/lesão por omissão
- **Tese:** a acusação não pode transformar um **omissivo próprio qualificado pelo resultado** (art. 133, §2º / art. 135, par. único) em **homicídio ou lesão por omissão** (comissivo por omissão, art. 13, §2º) sem demonstrar **posição de garante**, **poder concreto de evitar** e **nexo de evitação** (quase-certeza de que a ação omitida impediria o dano). Trata-se de imputações **distintas**, com penas e exigências probatórias diversas; a moldura correta é a do tipo omissivo próprio, não a do crime de dano por omissão.
- **Contra-tese:** presentes a posição de garante e o poder de evitar o resultado, a imputação por comissivo por omissão (homicídio/lesão) é cabível e absorve a figura omissiva de perigo.

### 8. Excludentes — estado de necessidade e inexigibilidade
- **Tese:** o réu deixou de agir porque a ação exigida **colidia com outro dever** ou o expunha a **perigo atual** que não tinha o dever de suportar (art. 24) — configura **estado de necessidade** ou **inexigibilidade de conduta diversa**, afastando a culpabilidade.
- **Contra-tese:** não havia perigo atual e inevitável a legitimar a omissão; o réu poderia ter cumprido o dever sem sacrifício desproporcional.

## Súmulas, precedentes e temas (sob o Citation Gate)

> **Regra do gate:** dispositivos de lei podem ser citados com certeza; **qualquer número de HC/REsp/RE, informativo ou tema** deve ser conferido em `jurisprudencia-stj-stf` antes de ir para a peça. Nestes tipos omissivos há **pouca súmula específica** — a defesa se constrói sobretudo pela **anatomia do tipo e pela doutrina**, não por catálogo de acórdãos. Ensine a tese e o **dispositivo**; não arrisque o número.

- **Natureza de perigo (concreto x abstrato) de cada figura** — objeto de divergência doutrinária e jurisprudencial. [NAO VERIFICADO — localizar o entendimento aplicável no tribunal de atuação via `jurisprudencia-stj-stf`; não afirmar como pacífico].
- **Fronteira omissão de socorro (art. 135) × homicídio comissivo por omissão** em contexto de trânsito, hospitalar e de relação de garantia — há decisões relevantes, mas **os números devem ser conferidos**. [NAO VERIFICADO — conferir precedentes específicos via `jurisprudencia-stj-stf`].
- **Abandono de incapaz × maus-tratos (art. 136)** — a distinção pela presença/ausência do abuso dos meios de correção é doutrinária; eventual precedente ilustrativo deve passar pelo gate. [NAO VERIFICADO].
- **Ação penal:** os arts. 133 a 135 são, em regra, de **ação penal pública incondicionada** — confirmar a inexistência de condição de procedibilidade específica no caso concreto (não presumir representação como na ameaça).
- **Competência:** crimes de perigo à pessoa **fora do júri** (não são dolosos contra a vida) — competência do **juízo singular**; a forma qualificada pelo resultado morte (preterdolosa) **não** desloca ao Tribunal do Júri, por não ser homicídio doloso. **Conferir a competência concreta**, especialmente se a denúncia tentar capitular como homicídio doloso por omissão (aí, sim, iria a júri — e essa recapitulação é ponto de combate).

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Aceitar a capitulação no **art. 133** sem checar se havia **de fato** relação de cuidado/guarda (a desclassificação para o 135 muda tudo).
- Deixar passar a elementar **"sem risco pessoal"** do art. 135 — é excludente da própria exigibilidade, não mero detalhe.
- Tratar as figuras como crimes de **dano** e discutir só o resultado — são crimes de **perigo**; a ausência de **perigo concreto** (na leitura garantista) já é tese.
- Confundir **omissivo próprio qualificado pelo resultado** com **homicídio/lesão por omissão** — e aceitar a imputação inflada sem exigir posição de garante e nexo de evitação.
- Esquecer que **não há forma culposa** da omissão de socorro simples (art. 18, par. único) — a ausência de **dolo de perigo** absolve.
- No art. 134, ignorar o **elemento subjetivo especial** ("ocultar desonra própria") — sem ele, não é o tipo.
- Aceitar a **forma qualificada** (§§) sem atacar o **nexo** e a **previsibilidade** do resultado (preterdolo).
- Deixar de invocar **ANPP / sursis processual / transação** nas penas compatíveis e no rito de menor potencial ofensivo (art. 135).
- Citar precedente de memória — **todo número passa pelo `jurisprudencia-stj-stf`**.

**Checklist de defesa:**
- [ ] **Figura correta** identificada (133 x 134 x 135) e cabimento de **desclassificação** testado?
- [ ] **Dever de agir**: existia cuidado/guarda (133)? fim de ocultar desonra (134)? hipótese legal do 135?
- [ ] **Poder de agir**: o réu estava presente, ciente e capaz de agir?
- [ ] **Risco pessoal (135)**: o socorro era exigível sem risco à integridade do agente? tentou acionar a autoridade?
- [ ] **Perigo concreto**: a vítima correu risco real, ou estava assistida/segura?
- [ ] **Dolo de perigo**: o réu sabia e quis/aceitou expor a vítima ao risco? (não há forma culposa no 135 simples)
- [ ] **Figura qualificada (§§)**: atacado o **nexo** e a **previsibilidade** do resultado agravador (preterdolo)?
- [ ] **Comissivo por omissão**: a acusação tentou imputar homicídio/lesão por omissão sem posição de garante e nexo de evitação?
- [ ] **Excludentes** (estado de necessidade, inexigibilidade) e **causas de aumento** do art. 133, §3º conferidas/afastadas?
- [ ] **Ação penal e competência** conferidas (fora do júri; capitulação como homicídio doloso combatida)?
- [ ] **Substitutivos** (ANPP, sursis processual, transação, PRD) avaliados conforme pena e rito?
- [ ] Todas as **súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota sobre o polo acusatório (MP / assistente de acusação)

O perfil desta skill é **DEFENSIVO** (spec: `polo_acusacao: false`) — o roteador deve **confirmar o polo** no `company.md`. Ainda assim, quem atua pela **acusação** (Ministério Público ou assistente) usa o mesmo mapa **em espelho**: sustentar a **presença** do dever de garantia (relação de cuidado/guarda no 133; parentesco + fim de ocultar desonra no 134; hipótese legal no 135), a **exigibilidade** da conduta (risco pessoal apenas remoto/abstrato), o **perigo** à vítima, o **dolo de perigo** (inclusive eventual), e — nas formas qualificadas — o **nexo** e a **previsibilidade** do resultado agravador. As **contra-teses** listadas acima são, para o acusador, o roteiro de imputação. **O foco majoritário desta skill, contudo, é a DEFESA por tipo penal.**

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à elaboração de tese e peça; não substitui o juízo do advogado responsável nem a análise dos autos concretos. A responsabilidade final é sempre do profissional (CED/OAB, art. 2º).
- **Ética por polo:** advocacia (Estatuto da OAB e Provimento 205/2021 — publicidade e captação); Ministério Público (regime do CNMP); Defensoria (LC 80/94). Verifique conflito de interesses (art. 17 do EAOAB) na triagem.
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa pela skill `jurisprudencia-stj-stf`. Na dúvida entre citar e omitir, **omitir vence inventar** (há sanções reais por jurisprudência inventada por IA).
- **Sigilo e LGPD:** dados do assistido/cliente nunca em repositório público.

## Lembretes finais

- **Pergunta central do omissivo:** o que o direito **exigia** que o réu fizesse, e ele **podia** fazer? Falta de dever ou de poder de agir = atipicidade.
- **Figura certa primeiro:** 133 (cuidado/guarda) x 134 (recém-nascido + ocultar desonra) x 135 (dever geral) — a desclassificação do 133 para o 135 é a virada mais valiosa.
- **"Sem risco pessoal" (art. 135)** é **elementar** — risco à integridade do agente afasta a exigibilidade da assistência direta.
- **Crimes de perigo:** discutir o **perigo concreto** à vítima (leitura garantista), não só o resultado.
- **Dolo de perigo** é indispensável — **não há forma culposa** na omissão de socorro simples.
- **§§ qualificados são preterdolosos:** atacar **nexo** e **previsibilidade**; sem eles, remanesce a figura simples.
- **Omissivo próprio qualificado ≠ homicídio/lesão por omissão** — não deixar inflar a imputação sem posição de garante e nexo de evitação.
- **Fora do júri** — combater qualquer recapitulação como homicídio doloso por omissão.
- **Todo precedente** passa por `jurisprudencia-stj-stf`; e **revisão humana** sempre.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, memoriais, recurso), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
