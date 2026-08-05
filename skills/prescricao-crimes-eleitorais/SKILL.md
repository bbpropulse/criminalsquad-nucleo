---
name: prescricao-crimes-eleitorais
description: >-
  Use ao arguir prescrição ou extinção da punibilidade em crime eleitoral — aplicação das regras
  gerais do CP (arts. 107-119) sobre as penas dos tipos do Código Eleitoral (Lei 4.737/65) e da Lei
  9.504/97, com atenção aos marcos interruptivos do rito eleitoral (art. 359 CE), às penas curtas
  que aceleram a prescrição e à peculiaridade das multas eleitorais. Rascunho para revisão humana.
  Gatilhos: prescrição crime eleitoral… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, prescricao, extincao-punibilidade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-prescricao-crimes-eleitorais"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["prescricao-crimes-eleitorais", "prescricao crimes", "crimes eleitorais"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Prescrição e Extinção da Punibilidade em Crimes Eleitorais (CP arts. 107-119 c/c CE art. 359)

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

Esta skill orienta a **arguição de prescrição e das demais causas de extinção da punibilidade** nos **crimes eleitorais** — os tipos do **Código Eleitoral (Lei 4.737/65, arts. 289 a 354)** e os da **Lei das Eleições (Lei 9.504/97, arts. 68, 72, 90-A etc.)**. A tese central é simples de enunciar e sofisticada de aplicar: **não existe prazo prescricional próprio do Direito Eleitoral** — a prescrição corre pelas **regras gerais do Código Penal (arts. 107 a 119)**, calculada sobre a **pena cominada a cada tipo eleitoral**, mas com **marcos interruptivos que precisam ser lidos à luz do rito eleitoral**.

> **Lição central:** as penas dos crimes eleitorais são, em regra, **curtas** (muitos com máximo de 1, 2 ou 3 anos, além de multa). Pena curta significa **prazo prescricional curto** (CP, art. 109) — por isso a prescrição, sobretudo a **retroativa** e a **em perspectiva**, é a tese mais eficaz nesta seara. **Classifique o tipo e leia a pena máxima em abstrato ANTES de tudo**: é ela que define o prazo do art. 109. Depois, mapeie os marcos interruptivos (art. 117 CP) sobre a linha do tempo real do processo eleitoral.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 109 do CP** (Lei 12.234/2010 aboliu a prescrição retroativa entre o fato e o recebimento da denúncia — ver adiante), do **art. 337 do CE** (regime da multa) e dos tipos eleitorais invocados; as penas do CE foram **majoradas em diversos dispositivos** ao longo do tempo, e a **lei penal mais benéfica retroage** (CF, art. 5º, XL; CP, art. 2º) — sempre confira a **data do fato**. Toda súmula, tema ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes do uso. Na dúvida, **omitir vence inventar**.

## Base legal

- **CP, arts. 107 a 119** — causas de extinção da punibilidade e disciplina integral da prescrição (aplicáveis subsidiariamente ao Direito Eleitoral por força do **art. 287 do CE**, que manda aplicar ao processo penal eleitoral as normas do CPP, e da natureza penal comum das regras de prescrição).
- **CP, art. 109** — prazos da prescrição da pretensão punitiva pela **pena máxima em abstrato**.
- **CP, art. 110** — prescrição da pretensão **executória** (pela pena aplicada) e regência da **prescrição retroativa** (§1º, na redação da Lei 12.234/2010).
- **CP, art. 114** — prescrição da **pena de multa** (2 anos quando for a única cominada/aplicada; ou o prazo da privativa quando cominada em conjunto).
- **CP, art. 115** — **redução pela metade** dos prazos para menor de 21 anos ao tempo do fato ou maior de 70 na data da sentença.
- **CP, art. 116-117-118** — causas impeditivas e **interruptivas** da prescrição; art. 117, §1º (efeito da interrupção a todos os autores e comunicabilidade nos conexos).
- **Código Eleitoral (Lei 4.737/65)** — **arts. 289 a 354** (tipos penais eleitorais); **art. 287** (aplicação subsidiária do CPP); **art. 337** (pena de multa eleitoral e sua conversão); **art. 355** (conexão que atrai crimes comuns à Justiça Eleitoral); **art. 359** (marco procedimental: recebimento da denúncia / instrução).
- **Lei 9.504/97** — tipos autônomos (ex.: **art. 68** — burla de fiscalização; **art. 72** — crimes de urna eletrônica; **art. 90-A** etc.), cujas penas também se submetem ao regime geral de prescrição do CP.

> **Nota sobre o art. 359 do CE:** o Código Eleitoral tem rito próprio (arts. 355-364). O **recebimento da denúncia** e a **decisão de pronúncia** (quando cabível) são marcos interruptivos do art. 117 do CP que, na prática eleitoral, aparecem no procedimento do art. 359 e seguintes. Confirme, no caso concreto e na fonte oficial, **qual ato do rito eleitoral corresponde** a cada inciso do art. 117 do CP — é ponto sensível.

## Por que a prescrição é a tese-rainha no eleitoral — a lógica das penas curtas

A prescrição da pretensão punitiva **pela pena máxima em abstrato** segue a tabela do art. 109 do CP:

| Pena máxima cominada | Prazo prescricional (art. 109 CP) |
|---|---|
| até 1 ano | 3 anos |
| mais de 1 até 2 anos | 4 anos |
| mais de 2 até 4 anos | 8 anos |
| mais de 4 até 8 anos | 12 anos |
| mais de 8 até 12 anos | 16 anos |
| mais de 12 anos | 20 anos |

Como muitíssimos tipos eleitorais têm **máximo de 1 a 3 anos**, o prazo prescricional cai na faixa de **3, 4 ou 8 anos** — curto o bastante para que a **demora natural do processo eleitoral** (inquérito, oferecimento e recebimento da denúncia, instrução, sentença, recursos ao TRE/TSE) frequentemente **ultrapasse** o lapso. Some-se a isso o art. 115 (réu **menor de 21** ao tempo do fato → prazos pela **metade**), comum em crimes eleitorais de "boca de urna" e afins, e a prescrição se torna a **primeira** hipótese a testar.

> **Método (aponta para calculadora):** o cálculo do prazo, dos marcos e da eventual retroatividade é **determinístico**. Descreva o método aqui e delegue a contagem à **`calculadora-prescricao`** (ou marque **[calculadora a implementar com testes]** se o cenário eleitoral exigir um módulo próprio de marcos do art. 359 CE). **Não** calcule "no olho".

## Modalidades de prescrição aplicáveis — roteiro de análise

### 1. Prescrição da pretensão punitiva **em abstrato** (antes do trânsito para a acusação)
- Prazo pela **pena máxima cominada** ao tipo eleitoral (art. 109 CP).
- **Marcos interruptivos (art. 117 CP):** (i) **recebimento** da denúncia; (ii) **pronúncia** e (iii) sua confirmação (quando houver rito de pronúncia — raro no eleitoral); (iv) **publicação da sentença/acórdão condenatório recorrível**. Entre dois marcos, decorrido o prazo do art. 109 → **extinção**.
- **Causas impeditivas (art. 116):** conferir suspensões (ex.: questão prejudicial, suspensão condicional do processo — art. 89 da Lei 9.099/95, cabível em vários crimes eleitorais de menor potencial).

### 2. Prescrição **retroativa** (art. 110, §1º, CP) — a mais poderosa no eleitoral
- Depois de **transitada em julgado para a acusação** (ou improvido seu recurso), calcula-se a prescrição **pela pena concretamente aplicada**, projetada **para trás**.
- **Atenção à Lei 12.234/2010:** para fatos **posteriores** a 05/05/2010, a retroativa **não pode** mais tomar como termo o período **entre o fato e o recebimento da denúncia** — só corre **do recebimento da denúncia em diante**. Para fatos **anteriores**, ainda vale a retroativa "cheia" (lei mais benéfica). **Sempre confira a data do fato** (CF, art. 5º, XL).
- Como as penas eleitorais aplicadas costumam ser baixas (muitas vezes fixadas no mínimo + multa, ou substituídas), a retroativa **pela pena aplicada** frequentemente fulmina a pretensão punitiva.

### 3. Prescrição da pretensão **executória** (art. 110, *caput*)
- Após o trânsito em julgado para ambas as partes, pela **pena aplicada**; marco inicial no trânsito para a acusação (súmula do STJ sobre o termo — conferir via `jurisprudencia-stj-stf`). Reincidência **aumenta em 1/3** (art. 110, *caput*).

### 4. Prescrição da **pena de multa** (arts. 114 CP; 337 CE)
- **Peculiaridade eleitoral:** muitos tipos preveem **multa isolada** ou pena privativa **+ multa**. Se a multa for a **única** pena cominada/aplicada → prescreve em **2 anos** (art. 114, I). Se cominada **junto** com privativa → prescreve **no mesmo prazo** desta (art. 114, II).
- O **art. 337 do CE** disciplina a multa eleitoral (valor e conversão); não cria prazo prescricional próprio — a prescrição da multa segue o **art. 114 do CP**. **Confirmar a redação vigente do art. 337 e eventual sistemática de conversão.**

### 5. Prescrição **em perspectiva / virtual** (tese de defesa, não de decreto de ofício)
- Projeção da pena **provável** (dado o perfil do réu — primário, bons antecedentes, pena tenderia ao mínimo) para antecipar que **qualquer** condenação já estaria prescrita na modalidade retroativa. **Não é reconhecida para extinção de ofício** (há entendimento sumular contrário do STJ — conferir **[NÃO VERIFICADO]** via `jurisprudencia-stj-stf`), mas é **argumento legítimo** para pleitear o **arquivamento por falta de interesse de agir** / rejeição da denúncia e para instruir a estratégia. Use-a como **tese de economia processual**, não como certeza de deferimento.

## Marcos interruptivos no rito eleitoral (art. 117 CP × art. 359 CE)

```
FATO ──▶ inquérito/representação ──▶ DENÚNCIA ──▶ [RECEBIMENTO] ──▶ instrução (art. 359 CE)
                                                       │(marco 1: art.117,I)
                                                       ▼
                                              ──▶ [SENTENÇA/ACÓRDÃO CONDENATÓRIO]
                                                       │(marco: art.117,IV)
                                                       ▼
                                              ──▶ recursos TRE/TSE ──▶ TRÂNSITO
```

- **Entre o fato e o recebimento:** para fatos **pós-2010**, esse intervalo **não** gera retroativa (Lei 12.234/2010), mas a prescrição **em abstrato** pode correr aqui pela pena máxima.
- **Entre o recebimento e a sentença:** intervalo crítico — a lentidão da instrução eleitoral frequentemente supera o prazo do art. 109.
- **Recursos ao TRE/TSE:** o **acórdão** condenatório também interrompe; conferir se **acórdão confirmatório** de condenação interrompe (tema em evolução — **[NÃO VERIFICADO]**, checar via `jurisprudencia-stj-stf`).
- **Comunicabilidade (art. 117, §1º):** a interrupção da prescrição, salvo os incisos V e VI, produz efeitos **a todos os autores** e, nos crimes **conexos** que sejam objeto do mesmo processo, **estende-se** aos demais. Relevante quando o crime eleitoral é **conexo** a crime comum (art. 355 CE atrai a competência à Justiça Eleitoral).

## Outras causas de extinção da punibilidade (art. 107 CP) no eleitoral

- **Morte do agente** (art. 107, I) — certidão de óbito nos autos.
- **Anistia, graça, indulto** (art. 107, II) — atenção: em regra **não** alcançam crimes eleitorais por decreto comum de indulto (conferir o texto do decreto anual — **[NÃO VERIFICADO]**).
- **Abolitio criminis / lei posterior que deixa de considerar crime** (art. 107, III; art. 2º CP) — relevante diante das reformas eleitorais; conferir se o tipo invocado permanece vigente.
- **Retratação, perdão judicial** nas hipóteses legais — em crimes eleitorais **contra a honra** (calúnia/difamação/injúria eleitorais — arts. 324-326 CE), examinar **retratação** e as regras próprias (ver skill `defesa-crimes-honra` para a técnica de honra, adaptando ao rito eleitoral).
- **Prescrição, decadência e perempção** (art. 107, IV) — nos crimes eleitorais de **ação penal pública** (a regra), não há decadência/perempção do ofendido; atenção quando houver **ação penal privada subsidiária**.

## Teses e contra-teses

**Teses de defesa (foco majoritário desta skill):**
1. **Prescrição retroativa pela pena aplicada** — a mais forte: penas eleitorais baixas + demora do rito ⇒ extinção (art. 110, §1º; observar o corte da Lei 12.234/2010 pela data do fato).
2. **Prescrição em abstrato** entre marcos (fato→recebimento, se fato anterior a 2010; recebimento→sentença) pela pena máxima (art. 109).
3. **Redução do art. 115** (menor de 21 ao tempo do fato / maior de 70 na sentença) — prazos **pela metade**; comum em condutas de campanha.
4. **Prescrição da multa isolada em 2 anos** (art. 114, I) quando a multa eleitoral for a única pena.
5. **Prescrição em perspectiva** como fundamento de **rejeição da denúncia / arquivamento** por falta de interesse de agir (tese, não decreto de ofício).
6. **Abolitio / lei mais benéfica** (art. 2º CP) diante de reforma que descriminalize ou reduza pena do tipo eleitoral.
7. **Lei mais benéfica sobre a pena** que rebaixe a máxima → **redução do prazo** do art. 109 retroagindo (CF, art. 5º, XL).

**Contra-teses (acusação — MP Eleitoral):**
- Sustentar **interrupção** válida em cada marco (recebimento, sentença, acórdão) reiniciando o prazo.
- Afastar a retroativa **cheia** para fatos **pós-2010** (Lei 12.234/2010 — só do recebimento em diante).
- Sustentar a **inaplicabilidade** da prescrição virtual para extinção de ofício.
- **Causas suspensivas** (art. 116) e **conexão** (art. 355 CE) para justificar dilação do prazo.

## Súmulas e precedentes (sob o Citation Gate — conferir vigência via `jurisprudencia-stj-stf`)

Dispositivos de lei e o **enunciado** das súmulas notórias podem ser citados; **qualquer número específico** de HC/REsp/RE, informativo ou tema deve ser confirmado.

- **Súmula 438/STJ** — é **inadmissível** a extinção da punibilidade pela prescrição **em perspectiva/virtual** (com base em pena hipotética). Enunciado notório; **conferir redação atual** via `jurisprudencia-stj-stf`.
- **Súmula 146/STF** — a **prescrição da ação penal regula-se pela pena concretizada na sentença** (base histórica da retroativa). Conferir.
- **Súmula 592/STF** e outras sobre marco da executória — **[NÃO VERIFICADO]**, confirmar aplicabilidade.
- **Tema/entendimento** sobre acórdão confirmatório como marco interruptivo (art. 117, IV) — **[NÃO VERIFICADO]**, há evolução no STF/STJ; **não citar número sem conferir**.
- **Competência da Justiça Eleitoral** para crime comum **conexo** a crime eleitoral (art. 355 CE) — orientação do STF; **[NÃO VERIFICADO]** quanto ao precedente específico, checar via `jurisprudencia-stj-stf`.

> **Regra de ouro do gate:** prefira **ensinar a tese e citar o dispositivo** (art. 109, 110, §1º, 114, 115 CP; arts. 287, 337, 355, 359 CE) a arriscar o número de um acórdão. Todo precedente entra na peça **só depois** de confirmado.

## Método de cálculo (roteiro — delega à calculadora)

Não calcule prazos manualmente na peça. Siga o roteiro e delegue a contagem:

```
1) Identificar o TIPO eleitoral e ler a PENA MÁXIMA em abstrato → prazo do art. 109 (tabela).
2) Verificar art. 115 (menor de 21 no fato / maior de 70 na sentença) → prazo pela METADE.
3) Levantar a LINHA DO TEMPO real: data do fato · recebimento da denúncia · sentença/acórdão · trânsito.
4) Testar PPP em abstrato entre marcos (art. 109 + art. 117).
5) Havendo condenação, testar RETROATIVA pela pena aplicada (art. 110, §1º),
   respeitando o corte da Lei 12.234/2010 conforme a DATA DO FATO.
6) Testar prescrição da MULTA (art. 114) se isolada.
7) Conferir causas suspensivas (art. 116) e demais causas do art. 107.
→ Executar a contagem em `calculadora-prescricao`
  [ou marcar: calculadora a implementar com testes p/ marcos do art. 359 CE].
```

## Estrutura da peça (petição/alegação de prescrição)

Adapte à fase (resposta à acusação, alegações finais, exceção, HC ou RSE conforme o caso):

1. **Endereçamento** — Juízo Eleitoral (Zona/TRE) competente; nº do processo/RCED/inquérito.
2. **Síntese fática** — tipo eleitoral imputado, pena cominada, **data do fato** e datas dos marcos.
3. **Fundamento** — dispositivo(s): art. 107, IV, c/c art. 109/110/114/115 do CP e arts. 287/337/359 do CE, conforme a modalidade.
4. **Demonstração do lapso** — apontar o **intervalo entre marcos** que superou o prazo (remeter ao cálculo anexo da `calculadora-prescricao`).
5. **Pedido** — **declaração de extinção da punibilidade** (art. 107, IV, CP) e arquivamento; subsidiariamente, o que couber.
6. **Documentos** — certidões de datas dos atos (recebimento, sentença, trânsito), FA para art. 115, cálculo anexo.

## Erros comuns / checklist

- [ ] **Leu a pena MÁXIMA em abstrato** do tipo eleitoral **antes** de fixar o prazo do art. 109? (Erro nº 1: chutar o prazo.)
- [ ] Verificou a **data do fato** para aplicar (ou não) o **corte da Lei 12.234/2010** na retroativa?
- [ ] Aplicou o **art. 115** (metade) se réu menor de 21 no fato ou maior de 70 na sentença?
- [ ] Mapeou os **marcos interruptivos reais** (recebimento, sentença, acórdão) sobre a linha do tempo — e não presumiu marcos?
- [ ] Tratou a **multa** pelo art. 114 (2 anos se isolada) e conferiu o **art. 337 CE** vigente?
- [ ] Conferiu **causas suspensivas** (art. 116) e **conexão** (art. 355 CE) que possam ter dilatado o prazo?
- [ ] Usou a **prescrição virtual** apenas como **tese** (rejeição/arquivamento), ciente da **Súmula 438/STJ** contra o decreto de ofício?
- [ ] **Delegou a contagem** à `calculadora-prescricao` (sem cálculo "no olho")?
- [ ] Passou **toda** súmula/precedente pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar número?

**Anti-padrões (evitar):**
- Supor que existe "prescrição eleitoral" com prazo próprio — **não existe**; é o CP que rege.
- Aplicar a retroativa "cheia" a fatos **pós-2010** ignorando a Lei 12.234/2010.
- Citar número de HC/REsp/tema **de memória** — é vedado (sanção real por jurisprudência inventada).
- Ignorar o **art. 115** em crimes de campanha praticados por jovens.
- Confundir prescrição da **multa isolada** (2 anos) com a da privativa.
- Decretar prescrição **virtual** de ofício (Súmula 438/STJ).

## Nota de conformidade

Este material é **rascunho técnico para revisão humana obrigatória** — hipótese a confirmar, não peça pronta. A responsabilidade final é sempre do profissional responsável. **Ética por polo:** advocacia sob o **EAOAB, o CED e o Provimento 205/2021 da OAB**; Ministério Público Eleitoral sob as normas do **CNMP**; Defensoria sob a **LC 80/94**. Esta skill é de **defesa** (foco majoritário na extinção da punibilidade em favor do réu); se o roteador designar atuação **acusatória** (MP Eleitoral), confira o **polo** no `company.md` e trate as "teses de defesa" como matéria a **rebater** (contra-teses acima). **Citation Gate inegociável:** nenhuma súmula, tema ou acórdão vai à peça sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
