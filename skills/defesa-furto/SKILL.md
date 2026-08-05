---
name: defesa-furto
description: >-
  Use ao defender FURTO (CP, art. 155) em todas as formas — simples, qualificado (§4º) e
  privilegiado (§2º): destipificação por ausência de subtração ou de animus furandi, furto de uso,
  princípio da insignificância, reconhecimento do privilégio, impugnação das qualificadoras do §4º
  (rompimento de obstáculo sem laudo, concurso de pessoas, chave falsa, escalada, abuso de
  confiança), aumento noturno do §1º e a distinção furto ×… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, patrimonio, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-furto"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-furto", "defesa furto"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Furto (CP, art. 155)

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

Esta skill orienta a **estratégia defensiva** no crime de **furto** (art. 155 do Código Penal), em todas as suas formas: **simples** (*caput*), **noturno** (§1º), **privilegiado** (§2º) e **qualificado** (§4º e §5º). O núcleo do tipo é **subtrair, para si ou para outrem, coisa alheia móvel** — conduta que exige (a) o ato de **subtração** (retirar a coisa da esfera de disponibilidade de quem a detinha), (b) que a coisa seja **alheia e móvel**, e (c) o **animus furandi**: a vontade de assenhorear-se **definitivamente** da coisa (dolo + fim de apropriação). É a ausência de **qualquer** desses elementos, ou a presença de uma causa de diminuição/privilégio, que estrutura a defesa.

> **Lição central:** antes de discutir provas, **teste os três alicerces do tipo** — houve mesmo *subtração* (e não entrega, achado ou posse anterior)? A coisa era *alheia e móvel*? Havia *animus furandi de apropriação definitiva* (e não mero uso momentâneo)? Cada "não" abre uma porta: reclassificação, furto de uso (atípico), insignificância ou privilégio. **A capitulação do MP quase sempre pode ser atacada** — furto qualificado é a imputação onde mais se erra o enquadramento.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 155 e de **todos** os incisos do §4º, além do §4º-A, §4º-B, §4º-C e §5º, na fonte oficial — o dispositivo foi sucessivamente alterado (Leis 13.330/2016, 13.654/2018, 14.155/2021, entre outras) e o texto do §1º e do §2º pode divergir do que se tem de memória. Verifique também o cabimento de **ANPP** (art. 28-A, CPP), **suspensão condicional do processo** (art. 89, Lei 9.099/95) e **arrependimento posterior** (art. 16, CP). Toda súmula, tema, informativo ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes de fundamentar a peça. Nenhuma citação de memória.

## Base legal

- **Art. 155, *caput*, CP** — "Subtrair, para si ou para outrem, coisa alheia móvel". Pena: reclusão de **1 a 4 anos**, e multa.
- **Art. 155, §1º, CP** — **aumento de 1/3** se o furto é praticado durante o **repouso noturno**.
- **Art. 155, §2º, CP (FURTO PRIVILEGIADO)** — se o criminoso é **primário** e é de **pequeno valor** a coisa furtada, o juiz **pode** substituir a reclusão por detenção, **diminuir a pena de 1/3 a 2/3**, ou aplicar só a multa.
- **Art. 155, §3º, CP** — equipara-se à coisa móvel a **energia elétrica** ou outra que tenha valor econômico.
- **Art. 155, §4º, CP (FURTO QUALIFICADO)** — pena de reclusão de **2 a 8 anos** e multa, se o crime é cometido: **I** — com destruição ou rompimento de obstáculo à subtração da coisa; **II** — com abuso de confiança, ou mediante fraude, escalada ou destreza; **III** — com emprego de chave falsa; **IV** — mediante concurso de duas ou mais pessoas.
- **Art. 155, §4º-A / §4º-B / §4º-C / §5º / §6º / §7º, CP** — figuras específicas (subtração de veículo para outro Estado/exterior; fraude eletrônica; semovente domesticável de produção; explosivo etc.). **Conferir a redação vigente** — esta skill trata do furto **físico comum**; para a **fraude eletrônica (§4º-B e §4º-C)**, usar a skill `defesa-fraude-eletronica`.
- **Art. 157, CP (roubo)** e **art. 168, CP (apropriação indébita)** — os tipos com que o furto mais se confunde; a distinção é o **meio** (violência/grave ameaça → roubo) e o **momento da posse** (posse lícita anterior → apropriação). Ver quadro abaixo.
- **Art. 181–183, CP** — **imunidades e escusas** nos crimes patrimoniais praticados no âmbito de relações familiares (cônjuge, ascendente, descendente) — **verificar sempre**: podem extinguir a punibilidade ou condicionar a ação a representação.
- **Art. 16, CP** — arrependimento posterior (restituição da coisa ou reparação até o recebimento da denúncia → redução de 1/3 a 2/3).
- **Art. 14, II, CP** — tentativa (subtração não consumada por circunstâncias alheias à vontade).

## Os três alicerces do tipo (onde nasce a defesa)

O furto exige, cumulativamente, **subtração**, **coisa alheia móvel** e **animus furandi**. A defesa examina cada um:

| Elemento | O que significa | O que a defesa investiga |
|---|---|---|
| **Subtração** | Retirar a coisa da esfera de disponibilidade/vigilância de quem a detinha, **contra a vontade** deste | Houve mesmo subtração, ou **entrega** (→ estelionato), **posse lícita anterior** (→ apropriação, art. 168) ou **coisa achada** (→ art. 169)? |
| **Coisa alheia móvel** | Bem de terceiro, corpóreo e deslocável (energia elétrica equiparada, §3º) | A coisa era **mesmo alheia**? Havia **condomínio, sociedade, res nullius, res derelicta** (coisa abandonada) ou **res communis**? Coisa própria não é furto |
| **Animus furandi** | Dolo + fim de assenhoreamento **definitivo** (apropriação) | Houve intenção de ter para si em **definitivo**, ou apenas **uso momentâneo com devolução** (furto de uso, atípico)? |

> **Ponto de virada — o momento da consumação.** O furto **consuma-se** quando o agente obtém a **posse tranquila** (ou, na orientação sumular, a mera inversão da posse, ainda que por breve tempo e sob monitoramento) — o que define a fronteira **furto consumado × tentado** e, logo, a pena. É ponto sensível: **confirme a orientação atual do STJ/STF via `jurisprudencia-stj-stf`** antes de sustentar tentativa ou consumação, porque a tese da "posse mansa e pacífica" e a do "furto sob vigilância/monitoramento" têm tratamentos divergentes.

## Distinção dos crimes vizinhos (teste antes de tudo)

A imputação de furto às vezes **erra o tipo** — e o erro favorece a defesa (muda pena, competência, ANPP, prescrição):

- **Furto (155) × Roubo (157):** o roubo emprega **violência à pessoa, grave ameaça** ou reduz a vítima à impossibilidade de resistência para subtrair; o furto é a subtração **sem** esses meios (clandestina ou sub-reptícia). **Teste:** houve violência/grave ameaça contemporânea à subtração? Se **não**, é furto (mais brando, não hediondo, admite privilégio e insignificância). Atenção ao **roubo impróprio** (art. 157, §1º): violência **após** a subtração para garantir a coisa ou a impunidade — a defesa afasta quando não há esse nexo.
- **Furto (155) × Apropriação indébita (168):** no furto o agente **subtrai** (nunca teve a posse lícita e desvigiada — tinha, no máximo, detenção subordinada/vigiada); na apropriação a posse **foi entregue licitamente** e o agente depois inverte o ânimo. **Teste:** *quem tinha a posse desvigiada no momento anterior?* Empregado que retira do caixa que só manuseia sob vigilância = **furto**; depositário que vende o bem confiado = **apropriação**. (Ver skill `defesa-apropriacao-indebita`.)
- **Furto (155) × Estelionato (171):** no furto a coisa é **tomada**; no estelionato a vítima **entrega** iludida por fraude. **Teste:** a fraude serviu para **enganar a vítima a entregar** (estelionato) ou apenas para **reduzir a vigilância** e facilitar a subtração (furto qualificado pela fraude, §4º, II)? A distinção é fina e decisiva.
- **Furto (155) × Furto de uso (atípico):** ver seção própria abaixo — é tese de **atipicidade**, não de desclassificação.

## Teses defensivas típicas (por ordem de força)

1. **Destipificação por ausência de subtração / de coisa alheia / de animus furandi:** atacar a própria existência do fato típico — não houve subtração (foi entrega, achado, posse anterior), a coisa não era alheia (própria, abandonada, comum), ou faltou o dolo de apropriação. → **Absolvição** (art. 386, III ou VII, CPP) ou reclassificação.
2. **Furto de uso (atipicidade):** o agente subtraiu a coisa **para uso momentâneo**, com **intenção de restituí-la** ao *statu quo*, e **efetivamente a devolveu** intacta. Falta o *animus rem sibi habendi* definitivo → **fato atípico**. Requisitos cumulativos: (a) subtração para uso passageiro; (b) *ânimo* de devolver **desde o início**; (c) restituição da coisa em condições, à esfera do dono. **Cuidado:** se o bem se deteriora, se consome ou não é devolvido, descaracteriza-se o furto de uso.
3. **Princípio da insignificância (bagatela) → atipicidade material:** coisa de valor ínfimo e lesão desprezível. Vetores (do STF): **mínima ofensividade** da conduta, **ausência de periculosidade** social da ação, **reduzido grau de reprovabilidade** do comportamento e **inexpressividade** da lesão jurídica. Fatores que a acusação usa para **afastar** a insignificância — e que a defesa deve neutralizar: reincidência/habitualidade, valor da coisa próximo/superior ao salário mínimo, rompimento de obstáculo, concurso de pessoas, repouso noturno. **A admissão não é automática — conferir a posição atual do STF/STJ para o caso concreto via `jurisprudencia-stj-stf`.**
4. **Furto privilegiado (§2º):** **primariedade** do agente + **pequeno valor** da coisa (parâmetro usual: até **um salário mínimo** ao tempo do fato — conferir) → o juiz **pode** substituir reclusão por detenção, **reduzir de 1/3 a 2/3** ou aplicar só multa. **Tese forte e frequentemente esquecida.** O privilégio **convive com o furto qualificado** (furto **qualificado-privilegiado**) quando a qualificadora for **objetiva** — pleitear a compatibilização.
5. **Impugnação das qualificadoras do §4º** (ver seção dedicada abaixo) — cada qualificadora tem seu próprio ponto de ataque (laudo ausente, insuficiência de prova do concurso, chave falsa não pericial, etc.). Afastar a qualificadora derruba a pena de 2–8 anos para 1–4 anos (com reflexos em ANPP, *sursis* processual, prescrição).
6. **Afastamento do aumento noturno (§1º):** o **repouso noturno** exige que o furto ocorra em **período de sossego/recolhimento** e — na leitura mais restritiva — em local **habitado e em repouso**. Discutir se o local estava **habitado**, se havia **efetivo repouso**, e se o §1º incide sobre **estabelecimento comercial vazio**. **Conferir a orientação atual — há divergência sobre a exigência de casa habitada.**
7. **Tentativa (art. 14, II):** a subtração não se consumou por circunstâncias alheias à vontade (agente preso em flagrante antes da posse tranquila, coisa recuperada de imediato sob monitoramento). Redução de **1/3 a 2/3**. Depende da **teoria de consumação** adotada — **conferir via gate**.
8. **Prescrição:** furto simples (máx. 4 anos) → prescrição em **8 anos** (art. 109, IV, CP); furto qualificado (máx. 8 anos) → **12 anos** (art. 109, III). Recalcular com a pena em concreto e conferir marcos interruptivos.

## Impugnação das qualificadoras do §4º (o campo de batalha)

Afastar a qualificadora é, muitas vezes, o maior ganho da defesa (2–8 anos → 1–4 anos). Cada inciso tem seu ataque próprio:

- **§4º, I — destruição ou rompimento de obstáculo:** a qualificadora exige **prova pericial** da existência e do rompimento do obstáculo (o "obstáculo" deve ser **externo** à coisa — arrombar porta/janela/cofre, não simplesmente vencer a resistência natural do bem). **Tese central:** **ausência de laudo pericial** (exame de corpo de delito do arrombamento). Havendo **vestígios**, o exame é **obrigatório** (art. 158, CPP), e a **confissão não supre** a perícia (art. 158, CPP; e, quanto à materialidade da qualificadora, a orientação restritiva). Sem laudo — e sem justificativa idônea para o exame indireto (art. 167, CPP) — a qualificadora **cai**. Discutir também se o rompimento foi da **própria coisa** (ex.: quebrar o vidro do carro para levar o próprio carro é meio de execução, não obstáculo externo — ponto controvertido, conferir).
- **§4º, II — abuso de confiança, fraude, escalada ou destreza:**
  - **Abuso de confiança:** exige **relação de confiança prévia e específica** que **facilitou** a subtração — mero vínculo empregatício **não basta**; é preciso demonstrar a confiança depositada e sua quebra.
  - **Fraude:** o ardil deve ter servido para **reduzir a vigilância** e viabilizar a subtração (distinguir do estelionato — ver acima). Contestar a prova do ardil.
  - **Escalada:** ingresso por via **anormal**, com **esforço incomum** (pular muro alto, usar corda/andaime). Muro baixo, cerca vencida sem esforço extraordinário **não** é escalada — em regra, exige **prova pericial** ou robusta demonstração do meio.
  - **Destreza:** habilidade especial que impede a percepção da vítima (batedor de carteira). **Vítima que percebe** a subtração, ou **flagrante** no momento, **descaracteriza** a destreza (a orientação é de que a destreza frustrada leva ao furto simples tentado, não à qualificadora).
- **§4º, III — chave falsa:** **todo instrumento** (não a chave verdadeira) usado para abrir a fechadura. A **cópia/chave verdadeira subtraída** é ponto controvertido. Exige, em regra, **prova pericial** do instrumento e do seu emprego. **Ausência de perícia** ou de apreensão do instrumento fragiliza a qualificadora.
- **§4º, IV — concurso de duas ou mais pessoas:** exige prova de **coautoria/participação** de **duas ou mais pessoas** no furto (basta que uma seja identificada e a outra apenas comprovadamente existente?). **Tese defensiva:** insuficiência de prova da pluralidade de agentes; participação de agente **inimputável** ou **não identificado**; mera **presença** sem liame subjetivo (adesão ao dolo comum). Há discussão relevante — **conferir se, para o furto, o §4º, IV, exige a efetiva presença de dois agentes no local ou basta o concurso, à diferença do roubo majorado — questão sensível e divergente, confira via gate.**

> **Regra de ouro das qualificadoras:** deixando vestígios, o exame de corpo de delito é **indispensável** (art. 158, CPP), e a confissão **não o supre**. Rompimento de obstáculo, escalada e chave falsa vivem de **prova pericial** — a **ausência do laudo** (ou a perícia deficiente/indireta sem justificativa) é o ataque mais eficaz. Verifique se houve **exame direto**, e não simples descrição no boletim de ocorrência.

## Contra-teses da acusação (antecipe-as)

- **"A subtração se consumou com a inversão da posse, ainda que breve"** → a defesa opõe a exigência de **posse tranquila/mansa** ou, no mínimo, discute a **teoria adotada** e o **flagrante imediato sob monitoramento** para sustentar **tentativa** — sempre conferindo a orientação atual via gate.
- **"O réu é reincidente / há habitualidade — não cabe insignificância"** → a defesa distingue **maus antecedentes** de **reincidência**, discute a **reprovabilidade concreta** e sustenta que a insignificância é **excludente de tipicidade material** que não se afasta por presunção; alternativamente, migra para o **privilégio** (§2º) e a **dosimetria**.
- **"O valor da coisa não é ínfimo"** → discutir o **parâmetro** (salário mínimo ao tempo do fato) e a **inexpressividade da lesão** no caso concreto; se a insignificância não vinga, invocar o **privilégio** e a **atenuação**.
- **"Há laudo/perícia da qualificadora"** → atacar a **qualidade** do laudo (exame indireto imotivado, ausência de nexo entre o rompimento e a subtração, obstáculo interno à própria coisa).
- **"Furto qualificado não admite privilégio"** → **rebater**: a jurisprudência admite o **furto qualificado-privilegiado** quando a qualificadora é **objetiva** (rompimento, chave falsa, escalada, concurso) — **conferir o enunciado sumular aplicável via gate**.

## Furto privilegiado, qualificado-privilegiado e a dosimetria

- **Privilégio (§2º):** requisitos **cumulativos** — (a) **primariedade** e (b) **coisa de pequeno valor** (aferido ao **tempo do fato**; parâmetro usual de até um salário mínimo, a confirmar). O benefício é **direito subjetivo** do réu quando presentes os requisitos (o "pode" da lei tem sido lido como dever de aplicar a redução; discutir a extensão — substituição, redução ou só multa). **Não confundir** "pequeno valor" (privilégio) com "valor insignificante" (bagatela/atipicidade): são patamares e efeitos distintos.
- **Furto qualificado-privilegiado:** a coexistência da qualificadora **objetiva** do §4º com o privilégio do §2º é admitida — pleitear a **redução do §2º sobre a pena qualificada**. Não se aplica o privilégio se a única "qualificadora" for **subjetiva**.
- **Cálculo determinístico:** a **dosimetria** (pena-base, agravantes/atenuantes, §1º noturno, §2º privilégio, causas de aumento/diminuição) e a **prescrição** (pena em concreto; art. 109 CP) são determinísticas — descreva o **método** na peça e obtenha os números com `calculadora-dosimetria` e `calculadora-prescricao`, conferindo prazos processuais com `calculadora-tempestividade`. Não invente cálculo na peça.

## Institutos despenalizadores e benefícios

- **ANPP (art. 28-A, CPP):** furto é crime **sem violência/grave ameaça**; se a **pena mínima for inferior a 4 anos** (o que abrange o furto simples e, a depender do cálculo, o qualificado), cabe **acordo de não persecução penal**, mediante confissão e reparação/condições — avaliar a conveniência com o assistido.
- **Suspensão condicional do processo (art. 89, Lei 9.099/95):** pena mínima do **furto simples** = 1 ano → **cabível o *sursis* processual** (preenchidos os demais requisitos). No qualificado (mínima de 2 anos), **não cabe**.
- **Arrependimento posterior (art. 16, CP):** restituição da coisa ou reparação do dano, por ato voluntário, **até o recebimento da denúncia** → redução de **1/3 a 2/3**. Via frequente e vantajosa nos patrimoniais sem violência.
- **Imunidades (arts. 181–183, CP):** furto entre cônjuges na constância do casamento, contra ascendente/descendente → **isenção de pena** ou **ação condicionada a representação**. **Verificar sempre** — pode extinguir a punibilidade.
- **Atenuantes:** confissão espontânea (art. 65, III, "d"), reparação fora do prazo do art. 16, primariedade e bons antecedentes (ver `calculadora-dosimetria`).

## Roteiro de análise da defesa (passo a passo)

1. **Testar os três alicerces** — houve subtração? A coisa era alheia e móvel? Havia animus furandi definitivo? → cada "não" é uma tese (reclassificação, furto de uso, atipicidade).
2. **Testar a distinção com roubo, apropriação e estelionato** — o meio empregado e o momento da posse. → reclassificação, se cabível (muda pena, ANPP, competência).
3. **Verificar a consumação** — posse tranquila ou flagrante imediato sob monitoramento? → **tentativa** (art. 14, II), conferindo a teoria via gate.
4. **Furto de uso?** — subtração para uso momentâneo + ânimo de devolver desde o início + restituição efetiva. → **atipicidade**.
5. **Insignificância?** — valor ínfimo + os quatro vetores do STF, neutralizando reincidência/rompimento/concurso. → **atipicidade material** (conferir admissão via gate).
6. **Qualificadoras do §4º** — atacar cada uma: **laudo pericial** (I, II-escalada, III), relação de confiança específica (II), destreza percebida (II), pluralidade de agentes provada (IV). → derrubar a qualificadora.
7. **Aumento noturno (§1º)** — local habitado? repouso efetivo? → afastar o aumento.
8. **Privilégio (§2º)** — primariedade + pequeno valor → redução; se qualificado, pleitear o **qualificado-privilegiado**.
9. **Despenalizadores e prescrição** — ANPP, *sursis* processual, art. 16, imunidades (181–183), prescrição (arts. 109/110). → extinção ou saída negociada.
10. **Dosimetria** — método na peça; números com as calculadoras.

## Estrutura sugerida da peça (resposta à acusação / alegações finais / memoriais)

1. **Síntese da imputação** — o que a denúncia narra e sob qual figura (simples, §1º, §4º); **confira se o MP acertou o enquadramento e a consumação**.
2. **Tese principal** — em regra: **atipicidade** (furto de uso / insignificância / ausência de elementar) **ou** **reclassificação** (não é furto, ou não é qualificado).
3. **Teses subsidiárias, em cascata** — afastamento das qualificadoras (§4º) por ausência de perícia; afastamento do §1º; **furto de uso**; **tentativa**.
4. **Privilégio e dosimetria** — §2º (privilégio / qualificado-privilegiado); pena no mínimo; atenuantes; art. 16.
5. **Prova** — laudos (ou sua **ausência**), autos de apreensão, imagens de CFTV, boletim de ocorrência, avaliação da coisa, folha de antecedentes (primariedade), demonstração da devolução (furto de uso) ou da reparação (art. 16). **A prova pericial das qualificadoras é o campo de batalha.**
6. **Institutos despenalizadores** — ANPP, *sursis* processual, imunidades, prescrição.
7. **Pedido** — absolvição (art. 386, III/VI/VII, CPP) por atipicidade; subsidiariamente, desclassificação/afastamento das qualificadoras; subsidiariamente, privilégio + pena mínima + redução do art. 16.

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** os **dispositivos legais** acima (art. 155 e §§; arts. 157, 168, 171, 16, 14, 181–183 do CP; arts. 158, 167 do CPP; art. 28-A do CPP; art. 89 da Lei 9.099/95) são citáveis com certeza, conferida a redação vigente. **Qualquer súmula, tema, informativo ou número de acórdão (HC/REsp/RE/AgRg) DEVE ser conferido** via `jurisprudencia-stj-stf` antes de ir para a peça. Prefira **ensinar a tese e ancorá-la no dispositivo** a arriscar um número.

Teses cuja **existência** é notória, mas cujo **enunciado, número e alcance atual** exigem verificação:

- **Furto qualificado-privilegiado** (compatibilidade do §2º com a qualificadora **objetiva** do §4º) — orientação sumular consolidada. **[NÃO VERIFICADO — conferir o enunciado da súmula e sua redação atual via `jurisprudencia-stj-stf`.]**
- **Princípio da insignificância no furto** — os quatro vetores e os fatores de afastamento (reincidência, valor, rompimento) têm base jurisprudencial firme, mas a **aplicação é casuística**. **[NÃO VERIFICADO — conferir a posição atual do STF/STJ para o caso.]**
- **Consumação do furto** (teoria da inversão da posse × posse tranquila; furto sob monitoramento) — há orientação sumular e precedentes; **[NÃO VERIFICADO — conferir enunciado e overruling via gate antes de sustentar tentativa/consumação.]**
- **Obrigatoriedade da perícia para as qualificadoras** (rompimento de obstáculo, chave falsa, escalada) — ancorar no **art. 158 do CPP**; o precedente específico do STJ/STF sobre a insuficiência da confissão para a materialidade da qualificadora **[NÃO VERIFICADO — conferir acórdão via gate.]**
- **Repouso noturno e estabelecimento não habitado** — há divergência; **[NÃO VERIFICADO — conferir a orientação atual.]**

Não invente número de HC, REsp, RE, AgRg, Súmula, Tema ou Informativo. Na dúvida, **omitir vence inventar**.

## Erros comuns e checklist (defesa)

**Anti-padrões (evitar):**
- Aceitar a capitulação do MP sem **testar furto × roubo × apropriação × estelionato** e sem checar a **consumação**.
- Deixar de atacar a **ausência de laudo pericial** das qualificadoras (rompimento, escalada, chave falsa) — é o ganho mais barato e mais frequente.
- Confundir **furto de uso** (atipicidade, exige devolução efetiva) com **furto privilegiado** (redução de pena, exige primariedade + pequeno valor).
- Confundir **insignificância** (valor **ínfimo** → atipicidade material) com **pequeno valor** (privilégio → redução) — patamares e efeitos distintos.
- Esquecer o **privilégio (§2º)** e a tese do **qualificado-privilegiado** quando a qualificadora é objetiva.
- Ignorar as **imunidades dos arts. 181–183** em furto no âmbito familiar.
- Deixar passar **ANPP**, **sursis* processual** e **arrependimento posterior (art. 16)**.
- Tratar a **destreza percebida pela vítima** ou o **concurso não comprovado** como qualificadora consumada.
- Citar súmula/acórdão **de memória**, sem o gate de `jurisprudencia-stj-stf`.

**Checklist:**
- [ ] Testados os três alicerces — **subtração**, **coisa alheia móvel**, **animus furandi** definitivo?
- [ ] Feita a **distinção** com roubo (157), apropriação (168) e estelionato (171)?
- [ ] Verificada a **consumação** (posse tranquila × tentativa), conferindo a teoria via gate?
- [ ] Avaliado o **furto de uso** (uso momentâneo + ânimo de devolver + restituição efetiva)?
- [ ] Avaliada a **insignificância** (quatro vetores; neutralizados os fatores de afastamento)?
- [ ] Cada **qualificadora do §4º** impugnada (laudo pericial ausente? confiança específica? destreza percebida? concurso provado?)?
- [ ] Discutido o **aumento noturno (§1º)** — local habitado, repouso efetivo?
- [ ] Requerido o **privilégio (§2º)** e, se cabível, o **qualificado-privilegiado**?
- [ ] Conferidos **ANPP**, **sursis* processual**, **art. 16**, **imunidades (181–183)** e **prescrição** (arts. 109/110)?
- [ ] **Dosimetria** e prazos calculados com `calculadora-dosimetria` / `calculadora-prescricao` / `calculadora-tempestividade`?
- [ ] Toda **súmula/precedente** conferido via `jurisprudencia-stj-stf`?

## Lembretes finais

- **Teste o tipo antes da prova** — subtração, coisa alheia móvel, animus furandi: cada falha é uma tese.
- **Qualificadora vive de perícia** — a **ausência de laudo** (art. 158, CPP) é o ataque mais eficaz ao §4º, I/II/III.
- **Furto de uso = atipicidade** (devolução efetiva); **privilégio = redução** (primariedade + pequeno valor); **insignificância = atipicidade material** (valor ínfimo). **Não confundir.**
- **Qualificado-privilegiado** existe quando a qualificadora é **objetiva** — pleiteie sempre.
- **Não é furto** se houve violência/grave ameaça (roubo), posse lícita anterior (apropriação) ou entrega iludida (estelionato).
- **Imunidades familiares (181–183)** podem extinguir a punibilidade — verificar.
- **Conferir vigência** do art. 155 e §§ e a jurisprudência via `jurisprudencia-stj-stf` **antes** de peticionar.
- **Para furto por fraude eletrônica (§4º-B/§4º-C)**, usar a skill `defesa-fraude-eletronica` — esta cuida do furto **físico comum**.

## Nota de conformidade

Este material é **rascunho técnico de apoio**, sujeito a **revisão humana obrigatória** — a responsabilidade pela peça, pela estratégia e pelas citações é sempre do(a) **advogado(a)** (EAOAB e CED; Provimento 205/2021 da OAB para a comunicação e o marketing jurídico). **Foco em DEFESA por tipo penal.** Nenhuma súmula, tese ou acórdão vai para a peça sem passar pelo gate de `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA — na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
