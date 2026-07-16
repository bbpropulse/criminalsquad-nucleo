---
name: acusacao-controle-prazos-prescricao-intercorrente
description: >-
  Use no POLO ACUSATÓRIO (Ministério Público / assistente de acusação) para monitorar marcos
  prescricionais e agir a tempo — requerer diligências, aditar a denúncia, impulsionar o feito e
  recorrer — evitando a extinção da punibilidade pela prescrição (arts. 107, IV, e 109 a 119 do CP).
  Gatilhos: prescrição, prazo prescricional, marco interruptivo, art. 117 CP, prescrição da
  pretensão punitiva…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, acusacao, analise, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-controle-prazos-prescricao-intercorrente"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-controle-prazos-prescricao-intercorrente", "acusacao controle", "prescricao intercorrente"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Controle de Prazos e Prescrição para a Acusação (arts. 109 a 119 do CP)

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

> **⚠️ SKILL DO POLO ACUSATÓRIO.** Esta skill serve exclusivamente a quem atua na **acusação** — Ministério Público (titular da ação penal pública, CF art. 129, I) ou **assistente de acusação** (art. 268 do CPP) na ação penal privada subsidiária/adesiva. Seu objetivo é o **oposto** do da defesa: aqui se **impede** a prescrição, não se a persegue. Antes de sugerir ou aplicar esta skill, **o roteador deve conferir o polo do usuário** no `company.md` (perfil da instituição). Se o usuário atua na **defesa**, esta skill é imprópria — use as skills defensivas de extinção da punibilidade.

Esta skill orienta o **monitoramento dos marcos prescricionais** e a **atuação tempestiva** do órgão acusador para que a pretensão punitiva (ou executória) do Estado **não se extinga pela prescrição** (art. 107, IV, do CP). A prescrição é a perda, pelo decurso do tempo, do direito de punir — e, para a acusação, cada dia de inércia é risco de arquivamento por decurso de prazo. A régua é simples: **conhecer o prazo, cravar o próximo marco interruptivo e agir antes dele.**

> **Lição central:** o erro mais comum da acusação é **calcular a prescrição pela pena máxima em abstrato e esquecer que, após a sentença condenatória, a régua muda para a pena em concreto** (prescrição retroativa e superveniente, art. 110, §1º). Depois de condenar, o prazo pode **encolher** — reavalie o risco a cada marco, não só no recebimento da denúncia.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 109 a 119 do CP** e das leis que os alteraram — a **Lei 12.234/2010** aboliu a prescrição retroativa entre a **data do fato e o recebimento da denúncia** (para fatos posteriores a 06/05/2010), e a **Lei 11.596/2007** incluiu a **publicação do acórdão condenatório** como marco interruptivo (art. 117, IV). Para fatos **anteriores**, aplica-se a lei vigente ao tempo do fato (irretroatividade da lei penal gravosa — CF art. 5º, XL). Confira súmulas, temas e overruling via a skill `jurisprudencia-stj-stf` **antes** de fundamentar qualquer manifestação.

## Base legal

- **Art. 107, IV, do CP** — a prescrição é causa de **extinção da punibilidade**.
- **Art. 109 do CP** — **tabela dos prazos** da prescrição da pretensão punitiva, calculados sobre o **máximo da pena** privativa de liberdade cominada.
- **Art. 110 do CP** — prescrição **depois de transitar em julgado** para a acusação (pretensão executória): regula-se pela **pena aplicada** (concreta) e aumenta de **1/3 se o condenado é reincidente**.
- **Art. 110, §1º** — prescrição da pretensão punitiva pela pena em concreto (**retroativa** e **superveniente/intercorrente**), a partir da publicação da sentença/acórdão condenatório recorrível.
- **Art. 111 do CP** — **termo inicial** da prescrição (dia da consumação; tentativa; permanente; habitual; bigamia/falso em registro; crimes contra a dignidade sexual de vulnerável).
- **Art. 112 do CP** — termo inicial da prescrição **executória** (trânsito para a acusação; revogação de sursis/livramento; etc.).
- **Art. 113 do CP** — prescrição da **pena restritiva/multa** e do **saldo** (evasão, revogação do livramento).
- **Art. 115 do CP** — **redução pela metade** do prazo quando o agente era **menor de 21** na data do fato **ou maior de 70** na data da sentença.
- **Art. 116 do CP** — causas **suspensivas** (impeditivas) da prescrição.
- **Art. 117 do CP** — causas **interruptivas** da prescrição (o núcleo operacional desta skill).
- **Art. 118 e 119 do CP** — prescrição das penas mais leves prescreve com as mais graves; no **concurso**, incide sobre a pena de **cada** crime **isoladamente** (Súmula 497/STF).

## Os cinco tipos de prescrição (mapa mental)

Para a acusação, o risco muda de natureza conforme a fase do processo:

| Espécie | Régua | Quando incide | Como a acusação afasta |
|---|---|---|---|
| **PPP abstrata** | pena **máxima** cominada (art. 109) | do fato até a sentença | oferecer denúncia e impulsionar o feito a tempo |
| **PPP retroativa** | pena **concreta** (art. 110, §1º), contada para **trás** | após sentença condenatória, entre marcos anteriores | condenar antes de esgotar o prazo da pena aplicada |
| **PPP superveniente / intercorrente** | pena **concreta**, contada para **frente** | da sentença condenatória até o trânsito final | recorrer e impulsionar a instância recursal |
| **Prescrição executória** | pena **concreta** + 1/3 se reincidente (art. 110) | após o trânsito em julgado | requerer a execução/guia sem demora |
| **Prescrição da multa** (art. 114) | prazo próprio | conforme o caso | executar a multa tempestivamente |

> **A "intercorrente" propriamente dita** é a prescrição da pretensão punitiva **superveniente** (art. 110, §1º), que corre **entre a publicação da sentença condenatória recorrível e o trânsito em julgado final**, já pela **pena em concreto**. É o ponto cego clássico: a acusação condena, relaxa a vigilância, e o feito prescreve no tribunal enquanto aguarda julgamento do recurso.

## A tabela do art. 109 (decorar — é a régua abstrata)

Prazo da PPP abstrata pelo **máximo** da pena privativa de liberdade cominada:

| Pena máxima cominada | Prazo prescricional |
|---|---|
| superior a 12 anos | **20 anos** |
| superior a 8 até 12 anos | **16 anos** |
| superior a 4 até 8 anos | **12 anos** |
| superior a 2 até 4 anos | **8 anos** |
| de 1 a 2 anos | **4 anos** |
| inferior a 1 ano | **3 anos** |

> **Atenção às causas de aumento/diminuição.** No cálculo abstrato, aplica-se a causa de **aumento no máximo** e a de **diminuição no mínimo** (o que **prolonga** o prazo — favorável à acusação). Qualificadoras e majorantes alteram o teto cominado: computá-las corretamente é o que separa um controle de prazo confiável de um susto no balcão.

## Marcos interruptivos — o núcleo operacional (art. 117 CP)

**Interromper zera o relógio:** a prescrição recomeça a correr, por inteiro, a partir do dia da interrupção (art. 117, §2º). A estratégia da acusação é **cravar o próximo marco antes que o prazo se esgote**.

| Inciso | Marco interruptivo | Fase |
|---|---|---|
| **I** | **recebimento** da denúncia ou da queixa | início da ação penal |
| **II** | **pronúncia** | júri (1ª fase) |
| **III** | **decisão confirmatória da pronúncia** (acórdão) | júri (recurso) |
| **IV** | **publicação da sentença ou acórdão condenatórios recorríveis** | mérito |
| **V** | **início ou continuação** do cumprimento da pena | execução |
| **VI** | **reincidência** | execução |

> **Efeito coletivo (art. 117, §1º).** Salvo os incisos V e VI, a interrupção **produz efeitos relativamente a todos os autores** do crime; e, nos crimes conexos objeto do mesmo processo, a interrupção quanto a um **estende-se aos demais**. Para a acusação, isso significa: um marco bem cravado protege **todo** o polo passivo conexo.

> **Recebimento do aditamento.** O **aditamento** que inclui novo fato ou coautor deve ser recebido — e esse recebimento também é ato relevante. Confira, via `jurisprudencia-stj-stf`, o entendimento atual sobre o efeito interruptivo do recebimento do aditamento em relação ao fato/agente novo.

## Marcos suspensivos/impeditivos (art. 116 CP) — o relógio pausa, não zera

Diferente da interrupção, a **suspensão** apenas **congela** a contagem; retomada a marcha, soma-se o tempo anterior. Causas úteis à acusação porque **estendem** o prazo disponível:

- **Art. 116, I** — enquanto não resolvida, em outro processo, **questão de que dependa** o reconhecimento da existência do crime (questão prejudicial).
- **Art. 116, II** — enquanto o agente **cumpre pena no estrangeiro**.
- **Art. 116, parágrafo único** — na fase de **execução**, enquanto o condenado está **preso por outro motivo**.
- **Suspensão do art. 366 do CPP** — réu citado por edital que não comparece nem constitui advogado: **suspende-se o processo E o prazo prescricional**. Marco de proteção clássico da acusação — mas confira, via `jurisprudencia-stj-stf`, o **limite temporal** dessa suspensão (Súmula 415/STJ e o julgamento do tema pelo STF).
- **Suspensão condicional do processo (art. 89 da Lei 9.099/95)** — durante o período de prova, o curso da prescrição fica **suspenso**.
- **Cooperação jurídica / carta rogatória** — verificar a hipótese de suspensão aplicável.

## Metodologia — roteiro de controle prescricional (passo a passo)

**Fase 1 — Diagnóstico do prazo (fazer para cada crime, isoladamente — Súmula 497/STF):**
1. **Identificar o(s) tipo(s) penal(is)** imputado(s) e a **pena máxima cominada**, já com qualificadoras e causas de aumento **no máximo** / diminuição **no mínimo**.
2. **Enquadrar na tabela do art. 109** → obter o **prazo abstrato**.
3. **Fixar o termo inicial (art. 111)** — regra geral: **dia da consumação**; atenção a tentativa, permanentes (cessação da permanência), habituais e vulnerável (art. 111, V).
4. **Aplicar o art. 115** se cabível — **metade do prazo** para menor de 21 (data do fato) ou maior de 70 (data da sentença). É a causa mais esquecida e a que mais encurta o prazo.

**Fase 2 — Linha do tempo dos marcos:**
5. **Mapear os marcos interruptivos já ocorridos** (art. 117) e **cravar as datas**: fato → recebimento da denúncia → (pronúncia) → sentença/acórdão condenatório → trânsito.
6. **Calcular, entre cada par de marcos, se o prazo foi respeitado.** Recomeça do zero a cada interrupção (art. 117, §2º).
7. **Registrar as causas suspensivas** (art. 116; art. 366 CPP; art. 89 Lei 9.099/95) que congelaram a contagem.

**Fase 3 — Reavaliação pós-condenação (o ponto cego):**
8. **Após a sentença condenatória**, recalcular pela **pena em concreto** (art. 110, §1º): verificar **retroativa** (para trás, entre marcos anteriores) e **superveniente/intercorrente** (para frente, até o trânsito).
9. **Somar 1/3** ao prazo se **reincidente**, na fase executória (art. 110, caput).

**Fase 4 — Ação para afastar o risco (o que a acusação FAZ):**
10. **Requerer diligências** e provas **tempestivamente**; cobrar impulso oficial do juízo quando o feito estiver parado.
11. **Oferecer/aditar a denúncia** sem demora quando presentes os pressupostos.
12. **Recorrer** de decisões que impliquem risco prescricional (ex.: sentença que aplica pena baixa aproximando a retroativa; absolvição/desclassificação que a acusação combate).
13. **Zelar pelo próximo marco interruptivo** — a régua de ouro: **não deixar o prazo correr até o fim sem um novo ato interruptivo à vista.**

## Cálculo — exemplos didáticos

**Exemplo 1 — PPP abstrata.** Furto qualificado (art. 155, §4º, CP), pena máxima **8 anos** → art. 109, III → **12 anos** de prazo. Consumação em 10/03/2020. A denúncia deve ser recebida antes de 10/03/2032 (sem outros marcos). Recebida em 10/06/2021, o relógio **zera**: nova contagem de 12 anos a partir daí.

**Exemplo 2 — PPP superveniente/intercorrente (o risco clássico).** No mesmo furto, o réu é **condenado a 2 anos** (pena concreta). Publicada a sentença condenatória em 15/05/2023. Agora a régua muda para a **pena aplicada** (art. 110, §1º): 2 anos → art. 109, V → **4 anos**. Da publicação da sentença (15/05/2023) até o trânsito em julgado final, se decorrerem **mais de 4 anos** sem novo marco (ex.: acórdão condenatório confirmatório — art. 117, IV), **prescreve a pretensão punitiva superveniente**. ➡️ A acusação deve **acompanhar o recurso e cobrar celeridade** para que o acórdão seja publicado dentro dos 4 anos.

**Exemplo 3 — art. 115 (redução pela metade).** Réu com **20 anos** na data do fato, crime de pena máxima 4 anos (art. 109, IV → 8 anos). Reduz-se à **metade**: **4 anos**. Um controle que ignore o art. 115 superestima o prazo em 100% — erro grave para a acusação.

> **Convenção de contagem:** o prazo prescricional é de **direito material** — inclui-se o dia do começo (art. 10 do CP) e conta-se pelo calendário comum. Confirme sempre a data-marco no processo, não estime.

## Teses e contra-teses

**Teses da acusação (para afastar a prescrição):**
- **Marco interruptivo válido cravado no prazo** — demonstrar, na linha do tempo, que cada intervalo entre marcos respeitou o art. 109/110.
- **Suspensão do art. 366 do CPP** — réu revel citado por edital: o prazo esteve **suspenso**, devendo ser descontado do cômputo (observado o limite temporal fixado na jurisprudência).
- **Suspensão pela questão prejudicial (art. 116, I)** ou pela **suspensão condicional do processo (art. 89 da Lei 9.099/95)**.
- **Termo inicial correto em crime permanente/continuado** — a permanência desloca o *dies a quo* para a **cessação** (art. 111, III), ampliando o prazo útil.
- **Causa de aumento no máximo / qualificadora** eleva o teto cominado e, com ele, o prazo abstrato.

**Contra-teses (o que a defesa alega — antecipar):**
- **Prescrição retroativa pela pena em concreto** (art. 110, §1º) — a acusação rebate demonstrando marco interruptivo dentro do intervalo, ou pena que ainda comporta prazo.
- **Prescrição virtual/antecipada (em perspectiva)** — a defesa pede reconhecimento antecipado com base na pena provável. ➡️ A acusação sustenta a **inadmissibilidade**: a prescrição em perspectiva **não tem previsão legal** e é rechaçada pela jurisprudência sumulada (**Súmula 438/STJ**).
- **Redução do art. 115** — a defesa invoca a idade; a acusação confere a data exata (menor de 21 **no fato**; maior de 70 **na sentença**, não no acórdão — ponto controvertido, conferir via `jurisprudencia-stj-stf`).

## Súmulas e enunciados relevantes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 497/STF** — no **crime continuado**, a prescrição regula-se pela pena imposta, **desprezado o acréscimo** decorrente da continuação (cada crime, isoladamente).
- **Súmula 438/STJ** — é **inadmissível** a extinção da punibilidade pela **prescrição da pretensão punitiva com fundamento em pena hipotética** (rechaça a "prescrição virtual/em perspectiva"). Tese-chave da acusação.
- **Súmula 220/STJ** — a **reincidência** não influi no prazo da prescrição da pretensão **punitiva** (só na executória, art. 110). Cuidado para não somar 1/3 na fase errada.
- **Súmula 415/STJ** — o período de suspensão do prazo prescricional (art. 366 do CPP) é regulado pelo **máximo da pena cominada**. Confira a interação com o julgamento do tema pelo STF.
- **Súmula 191/STJ** — a **pronúncia** é causa interruptiva da prescrição, ainda que o Tribunal do Júri venha a desclassificar o crime.
- **Súmula 146/STF** — a prescrição da ação penal regula-se pela **pena concretizada** na sentença, quando não há recurso da acusação (base da retroativa).

> **[NÃO VERIFICADO]** Qualquer número específico de HC, REsp, RE, tema repetitivo ou informativo sobre prescrição (ex.: limite temporal da suspensão do art. 366; termo inicial da executória a partir do trânsito para a acusação vs. trânsito para ambas — RE 848.107/DF) **deve ser conferido** via a skill `jurisprudencia-stj-stf` antes de citar. Prefira ensinar a **tese e o dispositivo** a arriscar um número de acórdão. **Melhor faltar precedente do que citar julgado inexistente.**

## Erros comuns / anti-padrões (evitar)

- **Calcular só a prescrição abstrata e esquecer a retroativa/superveniente** após a condenação — o prazo **encolhe** com a pena em concreto.
- **Ignorar o art. 115** (redução pela metade por idade) — superestima o prazo e leva à prescrição por descuido.
- **Somar 1/3 da reincidência na pretensão PUNITIVA** — só cabe na **executória** (Súmula 220/STJ; art. 110).
- **Contar o prazo global no crime continuado/concurso** — cada crime prescreve **isoladamente** (Súmula 497/STF; art. 119).
- **Aplicar prescrição retroativa entre fato e recebimento da denúncia em fato posterior a 06/05/2010** — **abolida** pela Lei 12.234/2010.
- **Esquecer de cravar o próximo marco interruptivo** — deixar o feito parado sem ato interruptivo à vista é a causa nº 1 de prescrição intercorrente.
- **Não requerer diligências/impulso a tempo** — a inércia da acusação é aproveitada pela defesa; documente cada requerimento nos autos.
- **Contar como marco interruptivo ato inválido** (ex.: recebimento de denúncia depois anulada) — confira a validade do ato antes de confiar nele.

## Checklist final (controle prescricional da acusação)

- [ ] Pena **máxima cominada** apurada com qualificadoras e aumentos **no máximo**?
- [ ] Prazo abstrato do **art. 109** corretamente enquadrado?
- [ ] **Termo inicial** (art. 111) correto — consumação, tentativa, permanente, habitual, vulnerável?
- [ ] **Art. 115** (metade) verificado — idade no fato / na sentença?
- [ ] **Linha do tempo dos marcos interruptivos** (art. 117) traçada, com datas cravadas?
- [ ] **Causas suspensivas** (art. 116; art. 366 CPP; art. 89 Lei 9.099/95) descontadas?
- [ ] Após condenação, **recalculado pela pena em concreto** (retroativa e superveniente, art. 110, §1º)?
- [ ] **Reincidência** somada apenas na fase **executória** (Súmula 220/STJ)?
- [ ] **Próximo marco interruptivo identificado** e ação planejada para cravá-lo a tempo?
- [ ] **Diligências, aditamentos e recursos** protocolados **tempestivamente** e documentados nos autos?
- [ ] Súmulas, temas e precedentes **conferidos via `jurisprudencia-stj-stf`** antes de citar?
- [ ] Manifestação submetida à **revisão humana** do promotor/procurador responsável?

## Lembretes finais

- **Conhecer o prazo, cravar o próximo marco, agir antes dele** — é toda a disciplina do controle prescricional.
- **A régua muda após a condenação:** de máxima abstrata para **pena em concreto** (art. 110, §1º). Reavalie sempre.
- **Cada crime prescreve isoladamente** (Súmula 497/STF; art. 119) — nunca calcule o prazo global.
- **Prescrição virtual não existe** (Súmula 438/STJ) — sustente sua inadmissibilidade.
- **Documente a diligência a tempo:** a inércia registrada da acusação pode ser o que evita — ou o que sela — a prescrição.
- **Conferir vigência** dos arts. 109–119 do CP (Leis 11.596/2007 e 12.234/2010) e das súmulas via `jurisprudencia-stj-stf` antes de manifestar.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a ser confirmada pelo membro do Ministério Público ou pelo advogado do assistente de acusação responsável, jamais manifestação pronta para protocolo automático. **Toda** citação de súmula, tese ou precedente passa **obrigatoriamente** pelo gate de `verificacao-citacoes` / `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA; na dúvida, **omitir vence inventar**). A atuação funcional observa os deveres do **CNMP** (Ministério Público) ou, no caso do assistente de acusação, a **ética da advocacia** (Estatuto da OAB, Código de Ética e Disciplina e Provimento 205/2021). O controle de prazos aqui descrito **não substitui** o sistema oficial de acompanhamento processual do órgão nem a conferência das datas diretamente nos autos.

**Padrão de redação:** ao converter a análise em peça (promoção, cota, recurso), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
