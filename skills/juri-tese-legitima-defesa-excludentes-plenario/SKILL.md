---
name: juri-tese-legitima-defesa-excludentes-plenario
description: >-
  Use ao construir e sustentar em PLENÁRIO do Tribunal do Júri a tese de EXCLUDENTE — legítima
  defesa, estado de necessidade, estrito cumprimento do dever legal, exercício regular de direito
  (ilicitude) e inexigibilidade de conduta diversa, coação moral irresistível, obediência
  hierárquica (culpabilidade) — em homicídio e demais crimes dolosos contra a vida. Cobre requisitos
  de cada excludente, o excesso (art. 23, § único)… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, analise, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-tese-legitima-defesa-excludentes-plenario"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-tese-legitima-defesa-excludentes-plenario", "juri tese", "excludentes plenario"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Excludentes no Plenário do Júri (arts. 23-25 CP; art. 483, III e §2º, CPP)

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

Esta skill orienta a **construção e a sustentação, perante os jurados**, das teses de **excludente de ilicitude e de culpabilidade** — o núcleo defensivo em homicídio e nos demais crimes dolosos contra a vida. O objetivo final é a **absolvição própria**: reconhecido que o fato existiu e que o réu o praticou, sustenta-se que **não há crime** (falta a ilicitude) ou que **não há reprovabilidade** (falta a culpabilidade), o que se traduz em resposta afirmativa ao **quesito genérico de absolvição** (art. 483, III e §2º, CPP).

> **Lição central:** no plenário, a tese de excludente **não vence por dogmática, vence por narrativa provada**. Escolha **uma tese-mãe** (em regra, legítima defesa), ancore cada requisito legal num **fato do processo** (depoimento, laudo, local, arma) e converta a tese em **quesito** — porque tese sustentada que não vira quesito, ou que não é levada à íntima convicção do jurado, morre na sala secreta. Excludente é, ao mesmo tempo, argumento **jurídico** (afasta crime/reprovação) e argumento **humano** (o jurado precisa *sentir* que faria o mesmo).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 23, 24, 25 do CP** e dos **arts. 476 a 497 do CPP** (sistemática do plenário e da quesitação vem da **Lei 11.689/2008**). O **quesito genérico de absolvição** ("O jurado absolve o acusado?") é posterior a 2008 — citar a antiga quesitação por excludente específica é **erro grave de vigência**. Toda súmula, tema ou acórdão passa **obrigatoriamente** pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` antes do uso. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 23, CP** — exclusão da ilicitude: **estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito**; e o **parágrafo único** — responde pelo **excesso doloso ou culposo**.
- **Art. 24, CP** — **estado de necessidade** (perigo atual, não provocado voluntariamente, inevitável, sacrifício de bem cujo salvamento não era razoável exigir).
- **Art. 25, CP** — **legítima defesa**: repulsa a **injusta agressão, atual ou iminente**, a direito próprio ou de outrem, com **uso moderado dos meios necessários**. **Parágrafo único (Lei 13.964/19)** — presunção reforçada para agente de segurança pública em situações específicas (conferir redação e alcance).
- **Art. 22, CP** — **coação moral irresistível** e **obediência hierárquica** (excludentes de culpabilidade — só o coator/autor da ordem responde).
- **Inexigibilidade de conduta diversa** — causa **supralegal** de exclusão da culpabilidade (construção doutrinária e jurisprudencial; não tem artigo próprio).
- **Art. 26, CP** — inimputabilidade/semi-imputabilidade (não é "excludente" no sentido desta skill, mas tese de culpabilidade adjacente — ver skill própria de imputabilidade se existir).
- **Art. 483, III e §2º, CPP** — quesito genérico de absolvição, porta processual de **toda** excludente no plenário.
- **CF, art. 5º, XXXVIII** — plenitude de defesa, soberania dos veredictos, sigilo das votações, competência para crimes dolosos contra a vida.

## Mapa das excludentes — o que provar em cada uma

### 1. Legítima defesa (art. 25, CP) — a tese-rainha do júri

Cinco requisitos **cumulativos** — falta um, cai a tese (mas pode restar excesso ou desclassificação):

| Requisito | O que significa | O que provar em plenário |
|---|---|---|
| **Agressão injusta** | Conduta humana contrária ao direito (não precisa ser crime) | Que a vítima iniciou/ameaçou o ataque; contexto de ameaça |
| **Atual ou iminente** | Já em curso ou prestes a ocorrer — não passada nem futura remota | Cronologia; não houve intervalo que permitisse fuga/polícia |
| **Direito próprio ou de outrem** | Vida, integridade, patrimônio, honra, liberdade | Qual bem estava sob ataque |
| **Meios necessários** | Os disponíveis, dentro do menos lesivo eficaz | O que o réu tinha à mão; desproporção de forças |
| **Uso moderado** | Repulsa proporcional, sem excesso | Nº de golpes/disparos; cessação da agressão |

- **Elemento subjetivo:** o réu deve ter agido **conhecendo** a situação de defesa (*animus defendendi*). Defesa "por acaso" (sem saber que se defendia) é controvertida.
- **Legítima defesa putativa (art. 20, §1º):** o réu, por **erro plenamente justificado pelas circunstâncias**, supõe agressão que não existe. É **erro sobre a ilicitude/situação** → afasta dolo/culpabilidade conforme o caso. Tese poderosa quando há **fundado receio** (ex.: vítima simulou saque de arma).
- **Legítima defesa da honra:** **VEDADA** como tese pelo STF (ADPF 779) — inconstitucional invocá-la, expressa ou veladamente, sob pena de **nulidade**. [NÃO VERIFICADO: confirmar número/alcance da ADPF 779 via `jurisprudencia-stj-stf` antes de citar em peça.] **Nunca** estruturar defesa de feminicídio nessa linha.

### 2. Estado de necessidade (art. 24, CP)

- **Perigo atual**, **não provocado voluntariamente** pelo agente, **inevitável** por outro modo, sacrifício de bem cujo salvamento **não se podia razoavelmente exigir**.
- Diferença-chave para a legítima defesa: no estado de necessidade há **conflito de bens/perigo** (não uma *agressão humana injusta*); pode-se sacrificar bem de terceiro inocente.
- Raro em homicídio doloso, mas surge em contextos de risco extremo (naufrágio, incêndio, confronto coletivo).

### 3. Estrito cumprimento do dever legal / exercício regular de direito (art. 23, III)

- Típico de **agente público** (policial em serviço) — ação dentro dos **limites legais** do dever. Fora dos limites → excesso.
- Não confundir com legítima defesa: aqui a licitude nasce do **dever/direito**, não da repulsa a agressão. Muitas vezes se alegam **em conjunto** (dever legal **+** legítima defesa).

### 4. Excludentes de culpabilidade (arts. 22 e supralegal)

- **Coação moral irresistível (art. 22):** o réu agiu porque **coagido moralmente** de modo irresistível — responde **só o coator**. Provar a coação real e sua irresistibilidade.
- **Obediência hierárquica (art. 22):** ordem **não manifestamente ilegal** de superior hierárquico (relação de direito público). Se a ordem é manifestamente ilegal, não exclui.
- **Inexigibilidade de conduta diversa (supralegal):** nas circunstâncias, **não se podia exigir** conduta conforme o direito. Tese de fechamento humanista — funciona muito bem **na chave da íntima convicção** do jurado, ainda que dogmaticamente controvertida.

## O excesso (art. 23, § único) — a tese de reserva indispensável

Reconhecida a **situação** de excludente mas **ultrapassados os limites**, há **excesso**:

- **Excesso doloso:** o réu quis continuar após cessar a agressão → responde pelo resultado a título de **dolo** (a excludente cai).
- **Excesso culposo:** por imprudência/erro de avaliação foi além → responde por **crime culposo** (no júri, tende à **desclassificação** para homicídio culposo, competência do juiz-presidente — art. 492, §1º).
- **Excesso exculpante (acidental/astênico):** o excesso decorre de **medo, susto ou perturbação de ânimo** diante da agressão → sustenta-se **exclusão da culpabilidade** por inexigibilidade → **absolvição**.

> **Estratégia:** legítima defesa é a tese principal; **excesso exculpante** (medo/perturbação) e **excesso culposo → desclassificação** são as teses **subsidiárias** que impedem a condenação por homicídio doloso mesmo se o jurado achar que "passou do ponto". Planeje as três desde a tribuna e **garanta o quesito de cada uma**.

## Da tese ao quesito — como a excludente é votada (integra-se com `juri-quesitacao`)

No sistema pós-Lei 11.689/2008, **não há quesito específico "houve legítima defesa?"**. Toda excludente é absorvida pelo **quesito genérico** (art. 483, III e §2º):

```
1º  MATERIALIDADE                      (art. 483, I)
2º  AUTORIA                            (art. 483, II)
3º  "O JURADO ABSOLVE O ACUSADO?"      (art. 483, III + §2º)  ← aqui vive a excludente
4º  causa de diminuição (defesa)       (art. 483, IV)
5º  qualificadora/aumento              (art. 483, V)
```

- Reconhecidos **materialidade** e **autoria** (mais de 3 votos "sim" a cada), formula-se **obrigatoriamente** o quesito genérico. **SIM** de mais de 3 jurados → **absolvição** e encerramento.
- O quesito é **genérico**: o jurado pode absolver por legítima defesa, por dúvida, **ou por pura clemência/íntima convicção**, sem declarar o motivo. Isso é o **coração da estratégia**: a excludente não precisa ser "provada além da dúvida" — basta convencer **quatro** consciências.
- **Excesso culposo / desclassificação:** se a tese subsidiária é desclassificatória (homicídio culposo, ou dolo eventual → culpa), há **quesito de desclassificação** próprio, cuja técnica de inserção **confirme no tribunal de atuação** (ver `juri-quesitacao`).
- **Regra de ouro processual:** cada tese sustentada em plenário **deve virar quesito**; a omissão é **nulidade** (cerceamento da plenitude de defesa). Impugne e **consigne em ata** no momento do art. 484.

## Roteiro de sustentação em plenário

1. **Escolher a tese-mãe** — em regra, **legítima defesa**. Evitar dispersão: o júri não decora cinco excludentes; ele decide **uma história**.
2. **Ancorar cada requisito num fato** — para cada elemento do art. 25, apontar a **prova** (testemunha X, laudo Y, croqui do local, laudo de lesões do réu que comprova que ele *também* foi agredido).
3. **Construir a agressão injusta** — quem começou, o histórico de ameaças, a arma/instrumento da vítima, o local (ambiente hostil), a impossibilidade de fuga.
4. **Explicar os meios e a moderação** — porque aquele meio era o disponível; contextualizar nº de golpes/disparos (pânico, luta corporal) e o **momento em que a agressão cessou**.
5. **Neutralizar o excesso** — se a acusação vai gritar "excesso", **antecipar**: sustentar excesso **exculpante** (medo/perturbação) como absolvição, e culposo como desclassificação.
6. **Traduzir para o jurado** — linguagem do leigo: "o que o senhor faria se, encurralado, visse a arma apontada para si?". A excludente vive na **empatia**.
7. **Fechar na íntima convicção** — lembrar que o quesito genérico permite absolver por **qualquer** fundamento; a dúvida razoável já basta (*in dubio pro reo*).
8. **Blindar processualmente** — pedir a **quesitação** de todas as teses; impugnar e **consignar em ata** (munição de apelação, art. 593, III, "a" e "d").

## Teses defensivas e contra-teses da acusação

| Tese da defesa | Contra-tese usual da acusação | Reforço defensivo |
|---|---|---|
| Legítima defesa própria (art. 25) | Não houve agressão / foi provocação recíproca / réu buscou o confronto | Provar quem iniciou; laudo de lesões no réu; ameaças pretéritas |
| Legítima defesa de terceiro | O terceiro não corria risco real | Testemunho do protegido; proximidade e iminência |
| Legítima defesa putativa (art. 20, §1º) | Erro evitável / não era razoável supor agressão | Circunstâncias concretas do fundado receio (simulação de saque, penumbra) |
| Excesso exculpante (medo/perturbação) | Excesso doloso — réu quis matar após cessar a agressão | Estado emocional; cronologia dos golpes; ausência de intervalo frio |
| Estado de necessidade (art. 24) | Perigo provocado pelo réu / era evitável | Inevitabilidade; não provocação |
| Inexigibilidade de conduta diversa (supralegal) | Era exigível conduta conforme o direito | Contexto humano extremo; íntima convicção do jurado |
| Coação moral irresistível (art. 22) | Coação evitável / réu aderiu voluntariamente | Prova da ameaça e da irresistibilidade |

> **Interação com desclassificação e privilégio:** quando a excludente é frágil, a **desclassificação** (dolo eventual → culpa; tentativa) e o **privilégio** (art. 121, §1º — violenta emoção após injusta provocação) são caminhos alternativos que reduzem/afastam a pena. Ver skills `juri-quesitacao` e, se houver, a de desclassificação/privilégio.

## Súmulas, dispositivos e precedentes (sob o Citation Gate)

- **CP, arts. 23, 24, 25, 22, 20 §1º e 26** — base legal segura, citável diretamente (conferir redação vigente).
- **CPP, arts. 476-497** (plenário/quesitação), **art. 483, III e §2º** (quesito genérico), **art. 492, §1º** (desclassificação → juiz-presidente), **art. 593, III, "a" e "d"** (apelação por nulidade e por decisão manifestamente contrária à prova) — citáveis diretamente.
- **CF, art. 5º, XXXVIII** — plenitude de defesa e soberania dos veredictos — citável diretamente.
- **STF — ADPF 779 (legítima defesa da honra é inconstitucional):** **[NÃO VERIFICADO]** confirmar número, data e alcance via `jurisprudencia-stj-stf` antes de citar. O **conteúdo da tese** (vedação da "legítima defesa da honra" em feminicídio) é seguro; o **número do precedente** deve ser conferido.
- **Qualquer HC/REsp/RE, Tema ou Informativo** sobre excludentes no júri, sobre absolvição pelo §2º ou sobre apelação do art. 593, III, "d" → **NÃO citar de memória**. Ensinar a tese e o dispositivo; buscar o julgado via `jurisprudencia-stj-stf`. **Melhor faltar precedente do que citar acórdão inexistente.**

> **Alerta específico do júri:** a decisão dos jurados é **soberana** e por **íntima convicção**. A **apelação da acusação** contra absolvição fundada no quesito genérico (art. 593, III, "d" — "manifestamente contrária à prova") é **tema sensível e em disputa** no STF/STJ (limites da soberania). **Confirme o estado atual da jurisprudência** antes de afirmar que a absolvição por clemência é ou não recorrível — passe por `jurisprudencia-stj-stf`.

## Erros comuns / anti-padrões

- **Sustentar cinco excludentes ao mesmo tempo** — dispersa o jurado e enfraquece a narrativa. Uma tese-mãe + subsidiárias claras.
- **Esquecer o elemento subjetivo** (*animus defendendi*) e o momento em que a agressão **cessou** — é onde a acusação constrói o excesso doloso.
- **Não preparar a tese de excesso exculpante/culposo** — sem rede de segurança, "passou do ponto" vira condenação por homicídio doloso.
- **Confundir estado de necessidade com legítima defesa** — há agressão humana injusta? é legítima defesa; há perigo/conflito de bens? é estado de necessidade.
- **Invocar "legítima defesa da honra"** — vedada (ADPF 779); gera nulidade e desserve o réu.
- **Sustentar tese em plenário e não exigir o quesito correspondente** — nulidade por omissão; sempre impugnar e **consignar em ata** (art. 484).
- **Citar número de HC/REsp/Tema de memória** — risco de jurisprudência inventada (há sanções reais). Passar pelo gate.
- **Tratar a excludente só como dogmática** — no júri, sem a **narrativa humana** que leve à íntima convicção, a melhor tese jurídica não convence quatro jurados.

## Checklist final (defesa)

- [ ] Tese-mãe definida (em regra legítima defesa) e **uma história** coerente construída?
- [ ] Cada requisito da excludente (arts. 23-25) **ancorado em prova** dos autos?
- [ ] Elemento subjetivo (*animus defendendi*) e **cessação da agressão** endereçados?
- [ ] Teses subsidiárias prontas — **excesso exculpante** (absolvição) e **excesso culposo/desclassificação**?
- [ ] "Legítima defesa da honra" **descartada** (ADPF 779)?
- [ ] Cada tese sustentada **convertida em quesito** — quesito genérico do §2º garantido e, se for o caso, quesito de desclassificação (art. 492, §1º)?
- [ ] Impugnações e teses **consignadas em ata** (art. 484) para eventual apelação (art. 593, III, "a" e "d")?
- [ ] Narrativa **traduzida ao leigo** (empatia + íntima convicção), não só dogmática?
- [ ] Dispositivos citados na **redação vigente**; súmulas/precedentes conferidos via `jurisprudencia-stj-stf`?
- [ ] Nada de citação de julgado de memória — tudo pelo **Citation Gate**?

## Lembretes finais

- **Uma tese-mãe, provada e humana** — o júri absolve histórias, não silogismos.
- **Todo requisito legal tem um fato** — se não há prova para ele, o argumento é frágil; ajuste a tese.
- **O excesso é a rede de segurança** — exculpante (absolve) e culposo (desclassifica) evitam a condenação por doloso.
- **A excludente vive no quesito genérico (§2º)** — não precisa vencer "além da dúvida"; precisa convencer **quatro** jurados.
- **Tese sem quesito = nulidade** — impugne e consigne em ata sempre.
- **Legítima defesa da honra é vedada** — nunca, nem velada.
- **Conferir vigência** dos arts. 23-25 CP e 476-497 CPP e **passar toda súmula/precedente** por `jurisprudencia-stj-stf` antes de citar.

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação da tese e da sustentação**, sujeito a **revisão humana obrigatória** — a responsabilidade pela estratégia, pela sustentação em plenário e pelas impugnações é sempre do **advogado(a)** (EAOAB e Código de Ética e Disciplina da OAB; Provimento 205/2021 quanto à publicidade). Não substitui o exame concreto dos autos, a leitura do questionário em plenário nem o juízo profissional. **Toda** referência a lei, súmula, tese ou acórdão passa pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` antes do uso. **Padrão de redação:** ao materializar a tese em peça (alegações finais da 1ª fase, memoriais, razões de apelação), aplique também a skill `redacao-persuasiva-criminal`.
