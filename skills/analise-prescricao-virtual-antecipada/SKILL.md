---
name: analise-prescricao-virtual-antecipada
description: >-
  Use para avaliar a PRESCRIÇÃO VIRTUAL (antecipada / em perspectiva) — projeção do prazo
  prescricional pela pena hipotética, ANTES da sentença, para sustentar falta de interesse-utilidade
  e requerer arquivamento/absolvição sumária/trancamento, ciente da Súmula 438/STJ, que rejeita seu
  reconhecimento judicial. É análise ESTRATÉGICA (não-peça), não cálculo de prescrição já consumada.
  Gatilhos: prescrição virtual, prescrição… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, prescricao, analise, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-prescricao-virtual-antecipada"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-prescricao-virtual-antecipada", "analise prescricao", "virtual antecipada"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise de Prescrição Virtual / Antecipada (arts. 109-110 CP; Súmula 438/STJ)

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

Esta skill orienta a **análise estratégica** da **prescrição virtual** — também chamada **antecipada** ou **em perspectiva** —: a **projeção**, ainda no curso do processo (ou já na fase de investigação), do prazo prescricional que incidiria sobre a **pena que hipoteticamente seria aplicada** ao réu, para sustentar que o processo **não tem mais utilidade prática** (falta de interesse-utilidade / justa causa), pedindo o **arquivamento**, o **trancamento** ou a **absolvição sumária**.

Não é peça de prescrição consumada nem cálculo de prazo já ocorrido — para isso, use `calculadora-prescricao` (cômputo determinístico) e `extincao-punibilidade-prescricao` (a petição de prescrição real). Aqui se trabalha a **pena que ainda NÃO existe**: uma **tese controvertida e sumulada contra** (Súmula 438/STJ), cujo valor é predominantemente **argumentativo e de gestão de risco** do processo.

> **Lição central:** a prescrição virtual **não é reconhecida pelo Judiciário** (Súmula 438/STJ) — logo, **nunca** a apresente como direito líquido a ser "declarado". Use-a como **radar estratégico**: (i) para decidir se vale a pena litigar ou propor solução consensual; (ii) para fundamentar **falta de interesse-utilidade / ausência de justa causa** quando a inutilidade do processo for gritante; e (iii) para **preparar o terreno da prescrição retroativa real** (art. 110, §1º, CP), que essa sim é reconhecida **depois** do trânsito para a acusação. A tese vale como argumento; a **prescrição retroativa concreta** é o que efetivamente extingue a punibilidade.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 109, 110 e 117 do CP** e o texto atual da **Súmula 438/STJ**. A **Lei 12.234/2010** aboliu a prescrição retroativa "pela pena em concreto" **em relação a período anterior ao recebimento da denúncia/queixa** (fatos a partir de 06/05/2010), reduzindo o espaço da tese; para fatos **anteriores**, aplica-se a lei mais benéfica (irretroatividade da lei penal gravosa — CF, art. 5º, XL). Súmulas, temas e eventual overruling passam **obrigatoriamente** pelo gate de `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de fundamentar qualquer manifestação.

## Distinção essencial — três figuras que não se confundem

| Figura | Marco / base de cálculo | Reconhecida? | Skill |
|---|---|---|---|
| **Prescrição da pretensão punitiva pela pena máxima em abstrato** | maior pena **cominada** ao tipo (art. 109) | **Sim** | `calculadora-prescricao` |
| **Prescrição retroativa (pela pena em concreto)** | pena **efetivamente fixada** na sentença, com trânsito p/ acusação; conta do **recebimento** da denúncia até a sentença (art. 110, §1º) | **Sim** (fatos ≥ 06/05/2010, só a partir do recebimento) | `extincao-punibilidade-prescricao` |
| **Prescrição VIRTUAL / antecipada / em perspectiva** | pena **hipotética/projetada** (a que provavelmente seria aplicada), **antes** da sentença | **NÃO** (Súmula 438/STJ) | **esta skill** |

➡️ A virtual é a **antecipação mental** da retroativa: pergunta-se "se este réu for condenado, a pena em concreto provável, projetada retroativamente, já estará prescrita?". Se a resposta for "sim", o processo tende à **inutilidade** — mas o juiz **não pode** extinguir a punibilidade por esse fundamento antes da sentença.

## Base legal e normativa

- **Art. 109 do CP** — prazos da prescrição da pretensão punitiva, escalonados pela pena.
- **Art. 110, §1º, do CP** — **prescrição retroativa**: regulada pela **pena aplicada**, contada **do recebimento** da denúncia/queixa até a publicação da sentença (redação da **Lei 12.234/2010**).
- **Art. 110, caput, do CP** — prescrição da pretensão **executória** (pela pena aplicada, após o trânsito).
- **Art. 117 do CP** — **marcos interruptivos** (recebimento da denúncia/queixa, pronúncia, sentença condenatória recorrível etc.). Essencial para projetar o cálculo.
- **Art. 115 do CP** — **redução do prazo pela metade** (réu < 21 na data do fato ou > 70 na data da sentença) — pode ser decisivo na projeção.
- **Súmula 438/STJ** — "É **inadmissível** a extinção da punibilidade pela prescrição da pretensão punitiva com fundamento em **pena hipotética**, independentemente da existência ou sorte do processo penal." → **é o obstáculo central**.
- **Art. 395, II e III, CPP** — rejeição da denúncia por **falta de pressuposto processual ou de condição da ação** / **ausência de justa causa** (porta argumentativa da "falta de interesse-utilidade").
- **Art. 397 CPP** — **absolvição sumária** (inclusive por causa extintiva da punibilidade — inciso IV).
- **CF, art. 5º, LXXVIII** — **duração razoável do processo** (reforço de política judiciária à tese da inutilidade).

## Metodologia da análise (roteiro do cálculo projetivo)

A análise é **determinística no cálculo** e **estratégica na conclusão**. O cálculo em si (prazos, redução do art. 115, marcos do art. 117) deve ser feito na **`calculadora-prescricao`** — esta skill **descreve o método** e usa o resultado para a decisão estratégica. [Se for necessário um cálculo projetivo dedicado, marcar: **calculadora de prescrição virtual a implementar com testes**, reaproveitando o motor de `calculadora-prescricao`.]

**Passo a passo:**

1. **Estime a pena em concreto provável.** Não é chute: projete uma dosimetria realista (skill `calculadora-dosimetria`) — pena-base próxima do mínimo se favoráveis as circunstâncias do art. 59; atenuantes/agravantes; causas de diminuição/aumento; concurso. Use a **hipótese mais provável**, não a mais otimista.
2. **Enquadre a pena projetada na tabela do art. 109.** A pena projetada define o **prazo prescricional** aplicável (ex.: pena projetada de 1 ano → prazo de 4 anos, art. 109, V — **conferir a redação vigente**).
3. **Aplique reduções de prazo, se houver.** Art. 115 (menor de 21 no fato / maior de 70 na sentença) → prazo **pela metade**. Isso frequentemente **decide** a virtual.
4. **Identifique os marcos interruptivos (art. 117) já ocorridos e os previsíveis.** O período crítico da retroativa (para fatos ≥ 06/05/2010) corre **do recebimento da denúncia** até a **sentença**. Meça o tempo decorrido desde o recebimento.
5. **Projete a data provável da sentença.** Some ao tempo já decorrido a estimativa realista de tramitação até a sentença.
6. **Compare.** Se o **prazo prescricional da pena projetada** for **menor** que o **intervalo (recebimento → sentença provável)**, há **prescrição virtual**: ao final, a **retroativa real** provavelmente extinguirá a punibilidade — o processo é **inútil**.
7. **Decida a estratégia** (ver abaixo) — a análise não gera, por si, extinção; gera **decisão de litígio**.

> **Atenção ao corte da Lei 12.234/2010.** Para fatos **a partir de 06/05/2010**, **não há** prescrição retroativa relativa ao período **anterior ao recebimento** da denúncia/queixa. Logo, a virtual perdeu força para a fase de inquérito, mas **subsiste** no intervalo **recebimento → sentença**. Para fatos **anteriores**, a retroativa alcança também o período investigatório (lei mais benéfica) — a virtual é mais potente.

## Para que serve na prática (usos estratégicos legítimos)

Como o juiz não declara a virtual (Súmula 438), o valor da análise é **instrumental**:

1. **Decisão de litígio / gestão de risco.** Se a projeção aponta prescrição retroativa quase certa, orienta a **estratégia**: manter defesa técnica sem acordos onerosos, resistir a propostas desvantajosas, priorizar teses que **acelerem** a sentença (para disparar o marco e permitir a retroativa real).
2. **Falta de interesse-utilidade / ausência de justa causa (art. 395, II/III, CPP).** Em casos de **inutilidade manifesta** (pena projetada baixíssima, tempo já decorrido enorme, art. 115 incidente), sustentar que **falta interesse-utilidade** à ação penal — reconhecendo que a Súmula 438 é obstáculo, mas invocando **economia processual, duração razoável (CF, 5º, LXXVIII) e ausência de finalidade prática**. É tese **de resistência**, ciente da baixa taxa de acolhimento.
3. **Reforço em trancamento (HC/RHC) e resposta à acusação.** Compor argumento **subsidiário** — não como pedido principal isolado (que a Súmula fulmina), mas somado a atipicidade, ausência de justa causa, inépcia etc.
4. **Provocar a prescrição retroativa REAL no momento certo.** Após a **sentença** condenatória e o **trânsito em julgado para a acusação** (ou improvimento do recurso do MP), requerer a **prescrição retroativa** pela pena em concreto (art. 110, §1º) — essa **é reconhecida** e extingue a punibilidade. A virtual é o **radar**; a retroativa é a **execução**.
5. **Base para ANPP / soluções consensuais.** A projeção de prescrição iminente é dado relevante para negociar (ou recusar) acordo de não persecução, transação ou suspensão condicional (skills `anpp-acordo` / justiça negocial), evitando aceitar condições quando o processo tende a se extinguir.

## Teses e contra-teses

**Tese defensiva (uso subsidiário e honesto):**
- "O prazo prescricional da pena concretamente projetada já se esgotou (ou se esgotará antes da sentença viável), de modo que o processo **carece de interesse-utilidade** (art. 395, II/III, CPP); a persistência viola a **duração razoável** (CF, 5º, LXXVIII) e a **economia processual**, sem qualquer resultado penal útil." → pedir arquivamento/rejeição/absolvição sumária **reconhecendo** a Súmula 438 e sustentando a excepcionalidade do caso.
- Reforço: quando incidente o **art. 115** (metade do prazo), a inutilidade fica ainda mais evidente.

**Contra-teses (acusação / juízo — hoje majoritárias):**
- **Súmula 438/STJ**: inadmissível extinção por pena hipotética, "independentemente da existência ou sorte do processo penal".
- **Presunção de inocência inversa**: projetar a pena antecipa juízo condenatório que ainda não existe; a pena pode ser maior que a projetada.
- **Interesse de agir presente**: o Estado tem interesse na apuração até a sentença; a utilidade não se afere por prognóstico.
- **Indisponibilidade da ação penal pública** (art. 42 CPP): o MP não pode desistir; o juízo não arquiva por conveniência.

➡️ **Postura recomendada:** apresentar a virtual como **argumento de reforço**, nunca como pedido autônomo apostado como vencedor. O **ganho concreto** vem depois, pela **retroativa real**.

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 438/STJ** — inadmissível a extinção da punibilidade pela prescrição da pretensão punitiva com base em **pena hipotética**. (Súmula **notória** — ainda assim, **confira a redação vigente** antes de transcrever.)
- **Súmula 146/STF** — a prescrição da ação penal regula-se pela pena **imposta** na sentença (base conceitual da retroativa). [Conferir número/redação em `jurisprudencia-stj-stf` antes de citar.]
- Precedentes específicos do STJ/STF sobre **inadmissibilidade** da virtual, sobre os **efeitos da Lei 12.234/2010** e sobre **falta de justa causa por inutilidade** (números de HC/REsp/RE, informativos, temas): **[NÃO VERIFICADO]** — **não** cite número de acórdão de memória. Confira **cada** precedente via `jurisprudencia-stj-stf` / `verificacao-citacoes`. Prefira **ensinar a tese e o dispositivo** (art. 110, §1º, CP; Súmula 438/STJ) a arriscar um número.

> **Regra de ouro do Citation Gate:** dispositivo de lei e súmula notória, com certeza, podem ser citados; **qualquer** precedente específico sem certeza absoluta vai **marcado [NÃO VERIFICADO]** e conferido na fonte oficial. Na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência alucinada por IA).

## Erros comuns / anti-padrões

- **Pedir ao juiz que "declare" a prescrição virtual** como se fosse direito — a Súmula 438 fulmina o pedido e enfraquece a defesa. Use-a como **argumento subsidiário**, não como tese central.
- **Confundir virtual com retroativa real.** A retroativa (art. 110, §1º) **é reconhecida** e vem **depois** da sentença; a virtual é só a **projeção** dela.
- **Ignorar a Lei 12.234/2010** e projetar prescrição sobre o período **anterior ao recebimento** para fatos ≥ 06/05/2010 (não cabe).
- **Esquecer o art. 115** (redução do prazo pela metade) — é o fator que mais muda o resultado.
- **Projetar pena irrealisticamente baixa** para "forçar" a prescrição — a projeção deve ser **honesta e provável**, sob pena de perder credibilidade.
- **Deixar de requerer a retroativa real no momento certo** (após sentença + trânsito para a acusação) — perder esse marco é abrir mão do ganho efetivo.
- **Citar número de HC/REsp/informativo de memória** — Citation Gate obrigatório.
- **Não conferir a redação vigente** dos arts. 109/110/117 e da Súmula 438 antes de fundamentar.

## Checklist da análise

- [ ] Pena em concreto **provável** projetada com dosimetria realista (`calculadora-dosimetria`)?
- [ ] Prazo prescricional enquadrado no **art. 109** conforme a pena projetada (redação vigente)?
- [ ] **Art. 115** (menor de 21 / maior de 70) verificado — prazo pela metade?
- [ ] **Marcos do art. 117** identificados (recebimento, pronúncia, sentença) e datas medidas?
- [ ] Corte da **Lei 12.234/2010** aplicado (fato ≥ 06/05/2010 → só do recebimento em diante)?
- [ ] Cálculo determinístico conferido na **`calculadora-prescricao`**?
- [ ] Conclusão traduzida em **decisão estratégica** (litigar / resistir a acordo / acelerar sentença / preparar retroativa real)?
- [ ] Se for peticionar: virtual usada como **reforço subsidiário**, reconhecendo a **Súmula 438**?
- [ ] Planejado o **requerimento da prescrição retroativa REAL** no momento processual adequado?
- [ ] Súmulas/precedentes conferidos via `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável antes de qualquer protocolo?

## Skills relacionadas

- `calculadora-prescricao` — cálculo determinístico dos prazos (motor do cômputo).
- `extincao-punibilidade-prescricao` — a **petição** de prescrição consumada/retroativa real.
- `calculadora-dosimetria` — projeção da pena em concreto que alimenta a análise virtual.
- `jurisprudencia-stj-stf` / `verificacao-citacoes` — gate obrigatório de citações.
- `anpp-acordo` e skills de justiça negocial — decisão consensual à luz do risco de prescrição.
- `estrategia-defesa` — enquadramento da virtual no plano geral de defesa.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta análise é **hipótese estratégica a confirmar**, não parecer definitivo nem garantia de resultado; a responsabilidade pela decisão de litígio e por qualquer peça é sempre do **advogado** responsável (EAOAB; CED; Provimento 205/2021).
- **Polo:** skill de uso **defensivo** (advocacia / Defensoria — foco majoritário em defesa por tipo penal). O **Ministério Público** e o **assistente de acusação** têm interesse oposto (sustentar o interesse-utilidade e a indisponibilidade da ação — art. 42 CPP); o **chefe-roteador deve conferir o polo** da instituição (`_criminalsquad/_memory/company.md`) antes de aplicar a tese, adaptando a manifestação à ética do polo (OAB+Prov. 205/2021 na defesa; CNMP no MP; LC 80/94 na Defensoria).
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese citada de memória — tudo passa por `verificacao-citacoes` (sanções reais por jurisprudência inventada por IA).
- **Padrão de redação:** ao converter a análise em manifestação processual, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).
