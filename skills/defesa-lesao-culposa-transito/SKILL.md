---
name: defesa-lesao-culposa-transito
description: >-
  Use para defender no crime de lesão corporal culposa na direção de veículo automotor (art. 303 do
  CTB) — o eixo é decidir a PORTA DE ENTRADA processual: JECRIM (ação penal pública condicionada à
  representação, composição civil, transação penal) ou o AFASTAMENTO dos despenalizadores pelas
  exceções do art. 291, §1º, do CTB (embriaguez/influência de álcool, racha/competição não
  autorizada, velocidade ≥ 50% acima do limite)… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, ctb, transito, jecrim]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-lesao-culposa-transito"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-lesao-culposa-transito", "defesa lesao", "culposa transito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa — Lesão Corporal Culposa na Direção de Veículo Automotor (art. 303 do CTB)

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

Esta skill orienta a **defesa técnica** no crime de **lesão corporal culposa na direção de veículo automotor** (art. 303 da Lei 9.503/97 — Código de Trânsito Brasileiro). Diferentemente do homicídio culposo, aqui a batalha decisiva **não** é evitar o Júri — é decidir e disputar a **porta de entrada processual**: o caso corre no **JECRIM** (com todos os despenalizadores) ou as **exceções do art. 291, §1º, do CTB** afastam esses benefícios e jogam o feito para o rito comum, com ação penal pública **incondicionada**.

> **Lição central:** o primeiro movimento não é a dosimetria nem a tese de culpa — é **classificar a estrada processual**. Verifique se incide alguma das **três exceções do art. 291, §1º, CTB** (influência de álcool/substância; racha/competição não autorizada; velocidade ≥ 50% acima do limite). **Sem exceção** → JECRIM: ação penal **condicionada à representação**, composição civil, transação penal, e o relógio da **decadência (6 meses)** corre a favor da defesa. **Com exceção** → afastam-se os despenalizadores e a ação passa a ser **incondicionada** (rito comum). Toda a estratégia deriva dessa bifurcação — e ela **não é tratada por nenhuma outra skill**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 303 e do art. 291, §§, do CTB** — a **Lei 12.971/2014** reescreveu o art. 291 e introduziu as exceções do §1º; a **Lei 13.546/2017** e a **Lei 14.071/2020** (nova CNH, penalidades) mexeram no entorno; e o **§2º do art. 303** (lesão grave/gravíssima com embriaguez, red. Lei 13.546/2017) merece conferência de texto e pena. Toda súmula, tese, tema repetitivo ou acórdão citado passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de ir para a peça. Na dúvida sobre número de HC/REsp/RE, informativo ou tema, **omita e ensine a tese** — não invente.

---

## Base legal

- **Art. 303, caput, CTB** — lesão corporal culposa na direção de veículo automotor: pena de **detenção de 6 meses a 2 anos** e suspensão/proibição de obter a permissão ou a habilitação.
- **Art. 303, parágrafo único, CTB** — **causa de aumento** de pena (as mesmas hipóteses do art. 302, §1º: sem habilitação; sobre faixa de pedestres/calçada; omissão de socorro possível; no exercício de atividade de transporte de passageiros). **Confira o texto vigente** — a técnica remissiva mudou com as reformas.
- **Art. 303, §2º, CTB (red. Lei 13.546/2017)** — figura **mais gravosa** quando a lesão é **grave ou gravíssima** e o agente conduzia sob influência de álcool ou substância psicoativa — **reclusão de 2 a 5 anos**. Ponto sensível: aqui, além de afastar despenalizadores, muda a moldura e o regime. **Conferir texto e pena antes de citar.**
- **Art. 291, caput, CTB** — aplicação subsidiária do CP e da Lei 9.099/95 aos crimes de trânsito.
- **Art. 291, §1º, CTB (red. Lei 12.971/2014)** — nas hipóteses de **lesão culposa (art. 303)**, aplicam-se os institutos despenalizadores da Lei 9.099/95 (**composição civil, transação, representação**), **SALVO** se o agente estava: **(I)** sob a influência de álcool ou substância psicoativa; **(II)** participando de **corrida/disputa/competição** não autorizada (racha/"pega"); **(III)** transitando em velocidade **superior à máxima permitida para a via em 50 km/h** — atenção ao texto: a lei fala em **"50 km/h acima"**, não "50%"; **confira a redação exata**, pois é ponto que se erra na prática.
- **Art. 291, §2º, CTB** — a **ação penal** nos crimes de lesão culposa do art. 303 depende de **representação** (é pública **condicionada**) — *salvo* nas exceções do §1º, em que passa a ser **incondicionada**.
- **Art. 88 da Lei 9.099/95** — lesão corporal **leve** e culposa: ação penal pública **condicionada à representação** (regra geral que dialoga com o §2º do art. 291 CTB).
- **Art. 74, parágrafo único, da Lei 9.099/95** — a **composição civil** homologada, nos crimes de ação condicionada, acarreta **renúncia ao direito de representação** (extinção da punibilidade).
- **Art. 76 da Lei 9.099/95** — **transação penal** (pena restritiva/multa antecipada, sem assunção de culpa e sem reincidência/antecedentes).
- **Art. 89 da Lei 9.099/95** — **suspensão condicional do processo** (pena mínima ≤ 1 ano) — cabível no **caput** do art. 303 (mínimo 6 meses).
- **Art. 28-A do CPP** — **ANPP**, quando não for caso de transação e presentes os requisitos (pena mínima < 4 anos, sem violência **dolosa**).
- **Arts. 103 e 107, IV, do CP** — **decadência** do direito de representação em **6 meses** e a consequente **extinção da punibilidade**.
- **Art. 18, II, CP** — culpa (imprudência, negligência, imperícia). **Art. 13 e §1º, CP** — nexo causal e concausa.
- **Art. 44 CP** — substituição por restritivas de direitos (crime culposo).

---

## PASSO 1 — Classificar a porta de entrada (art. 291, §1º): JECRIM ou rito comum?

Antes de qualquer tese de mérito, responda: **incide alguma das três exceções do art. 291, §1º, CTB?** É a pergunta que define a ação penal, os benefícios disponíveis e o próprio ritmo do relógio decadencial.

```
Há EMBRIAGUEZ/influência de álcool, RACHA ou VELOCIDADE ≥ 50 km/h acima do limite?
   ├── NÃO (regra) → JECRIM
   │      • Ação penal pública CONDICIONADA à representação (art. 291, §2º)
   │      • Cabem: composição civil (renúncia à representação), transação penal (art. 76)
   │      • Corre a DECADÊNCIA de 6 meses (arts. 103 e 107, IV, CP) — trunfo defensivo
   │
   └── SIM (exceção) → afasta os despenalizadores do art. 303
          • Ação penal pública INCONDICIONADA; rito comum (sumário)
          • Ainda cabem, conforme a pena: susp. condicional do processo (art. 89),
            ANPP (art. 28-A CPP), substituição (art. 44 CP)
          • Se lesão GRAVE/GRAVÍSSIMA + embriaguez → art. 303, §2º (reclusão 2–5 anos):
            reavaliar cabimento de benefícios
```

**A defesa disputa a bifurcação.** O objetivo, quando favorável, é **derrubar a exceção** e conduzir o feito ao JECRIM. Para cada exceção do §1º há um flanco de ataque:

- **Influência de álcool/substância (inciso I):** exigir **prova idônea** da influência — etilômetro aferido (INMETRO), exame de sangue com cadeia de custódia, ou prova indireta robusta (art. 306, §2º, CTB + resolução do CONTRAN). A **recusa ao bafômetro não presume embriaguez** para fins penais (nemo tenetur se detegere) e, portanto, **não basta** para afastar o JECRIM. Fragilidade ou contradição da prova → mantém-se a porta do JECRIM.
- **Racha/competição não autorizada (inciso II):** exige demonstração de **disputa/competição** (dois ou mais veículos, ajuste, comportamento competitivo) — velocidade alta isolada **não** é racha. Sem prova da competição, a exceção cai.
- **Velocidade ≥ 50 km/h acima do limite (inciso III):** exige **aferição confiável** da velocidade e do **limite da via** no ponto exato. Atacar cálculo de velocidade por vestígios/frenagem sem base metodológica; conferir a **sinalização** do trecho. **Atenção ao texto legal:** é "50 km/h acima da máxima permitida" — não confundir com "50% acima"; a leitura errada pode enquadrar (ou desenquadrar) indevidamente.

> **Regra de ouro:** as exceções do §1º são **taxativas** e **não se presumem**. Cada uma deve estar **individualizada e provada** na denúncia. Imputação genérica ("dirigia de forma imprudente e embriagado") sem lastro probatório da exceção é combatida na **resposta à acusação** — e, derrubada a exceção, restabelece-se o regime do JECRIM (com representação, decadência e transação).

---

## PASSO 2 — A decadência da representação (o trunfo do trânsito)

No regime do JECRIM (sem exceção do §1º), a ação penal do art. 303 é **condicionada à representação** (art. 291, §2º, CTB). O direito de representar **decai em 6 meses** (art. 103 CP), contados, em regra, **da data em que a vítima veio a saber quem é o autor do crime**. Findo o prazo **sem representação válida**, opera-se a **decadência** e, com ela, a **extinção da punibilidade** (art. 107, IV, CP).

**Roteiro de controle (o cálculo do prazo é determinístico):**

1. **Fixe o *dies a quo*** — regra do art. 103 CP: **conhecimento da autoria** pela vítima (não necessariamente a data do acidente; muitas vezes coincidem, mas confirme).
2. **Conte 6 meses** — o prazo é **decadencial** (não se suspende nem se interrompe; conta-se na forma do art. 10 CP, incluindo o dia do começo). Para conferência de datas e tempestividade, use a skill **`calculadora-tempestividade`** (ou **`calculadora-prescricao`** para o quadro geral de extinção da punibilidade). Se faltar rotina específica de contagem decadencial, marque **[calculadora a implementar com testes]** e **não** improvise a data na peça.
3. **Verifique a validade da "representação"** — a representação **não** exige forma sacramental (basta manifestação inequívoca de vontade de ver processado o autor), mas deve ser **tempestiva** e **atribuível a quem tem legitimidade** (vítima ou representante legal). Registro de ocorrência genérico, sem vontade de representar, pode **não** valer como representação.
4. **Cheque a composição civil (art. 74, p. único)** — acordo homologado nos crimes de ação condicionada gera **renúncia** ao direito de representação → **extinção da punibilidade**. É via de encerramento frequentemente mais rápida e favorável que a transação.

> **Tese defensiva forte:** decorridos **6 meses** do conhecimento da autoria **sem representação válida**, requer-se a **decadência** e a **extinção da punibilidade** (art. 107, IV, CP) — independentemente do mérito da culpa. **Sempre confira o *dies a quo* e a existência de representação tempestiva antes de partir para o mérito.**

> **Cuidado (contra-tese da acusação):** se incidir exceção do §1º, a ação é **incondicionada** e **não há** decadência da representação a explorar — por isso o Passo 1 vem antes. E a decadência exige demonstração de que **não** houve representação válida no prazo; a jurisprudência sobre o que configura representação tácita/válida é sensível — **confira via `jurisprudencia-stj-stf`**.

---

## PASSO 3 — Mérito: atacar a culpa e o nexo (tipo culposo)

Fixada a estrada processual, ataca-se **cada elemento do tipo culposo**. Basta derrubar um para absolver (atipicidade) — e, sem lesão dolosa, o crime é **sempre culposo** (não há a discussão culpa × dolo eventual do homicídio, pois lesão dolosa é outro tipo, do CP).

1. **Inobservância do dever de cuidado — modalidade da culpa.** Identifique o que a acusação imputa:
   - **Imprudência** — ação afoita (excesso de velocidade, ultrapassagem proibida, avanço de sinal).
   - **Negligência** — omissão de cautela devida (freios/pneus sem manutenção; não reduzir sob chuva).
   - **Imperícia** — falta de aptidão técnica (no trânsito comum, muitas vezes reconduzível a imprudência).
   - *Tese:* a denúncia deve **descrever concretamente** a conduta culposa; imputação genérica ("dirigia sem os cuidados devidos") é **inépcia** — atacar na resposta à acusação (art. 396-A CPP).
2. **Previsibilidade objetiva.** O resultado era previsível ao homem médio nas circunstâncias? **Evento imprevisível** (surgimento abrupto e inevitável do pedestre; falha mecânica oculta) **rompe a culpa** → atipicidade.
3. **Nexo de causalidade e concausas (art. 13 CP).**
   - **Culpa exclusiva da vítima** → **atipicidade** (rompe o nexo). Ex.: pedestre que se lança na via em local impróprio; ciclista na contramão sem sinalização.
   - **Culpa concorrente** → **não** exclui o crime, mas é forte argumento de **redução na dosimetria** e, no JECRIM, reforça a busca por **composição/transação**.
   - **Concausa superveniente relativamente independente (art. 13, §1º)** → se a lesão grave decorreu de causa autônoma (ex.: erro médico grave e independente), o agente responde só pelos atos praticados — pode reclassificar a extensão da lesão. Exige laudo robusto.
4. **Ataque à prova técnica.** Laudo de lesão corporal (natureza leve/grave/gravíssima — art. 129, §§, CP, como referência para a extensão), dinâmica do acidente, velocidade por vestígios, etilômetro:
   - Impugnar a **classificação da lesão** (leve × grave/gravíssima) — decisiva para o §2º e para o cabimento dos benefícios.
   - **Cadeia de custódia** dos vestígios e do resultado do etilômetro (ver `cadeia-de-custodia` se disponível).
   - Requerer **perícia complementar / assistente técnico** (art. 159, §§, CPP).

---

## PASSO 4 — Causa de aumento (parágrafo único) e a figura do §2º

- **Parágrafo único (causa de aumento).** As hipóteses (sem habilitação; sobre faixa/calçada; omissão de socorro possível; transporte de passageiros no exercício da atividade) são atacadas **uma a uma**, sem presunção, com lastro fático individualizado; a fração deve ser **fundamentada**. Ex.: **omissão de socorro não incide** se o socorro era impossível ou se o agente prestou socorro; a **ausência de CNH** exige falta **efetiva** de habilitação válida, e **não** deve, por si só, servir para agravar além do previsto. **Confira o texto vigente do parágrafo único** — a remissão às hipóteses do art. 302, §1º, é feita por técnica legislativa que mudou nas reformas.
- **§2º — lesão grave/gravíssima + embriaguez (Lei 13.546/2017).** Eleva para **reclusão de 2 a 5 anos** e **muda a moldura**. Teses: (a) **prova idônea** da influência do álcool/substância (mesma disciplina do etilômetro/sangue/prova indireta); (b) **classificação da lesão** como grave/gravíssima efetivamente comprovada por laudo; (c) **vedação ao bis in idem** (a embriaguez que qualifica não pode, a um só tempo, agravar por outra via); (d) **irretroatividade** (art. 5º, XL, CF) — fato anterior à Lei 13.546/2017 não recebe o §2º; **confira a data do fato**.

---

## Teses × contra-teses (mapa rápido)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Não incide exceção do §1º → caso é do JECRIM | Art. 291, §1º e §2º, CTB (exceções taxativas) | A exceção está provada (etilômetro/racha/velocidade) |
| Recusa ao bafômetro não afasta o JECRIM | Nemo tenetur se detegere; embriaguez não se presume | Prova indireta (art. 306, §2º) supre a influência |
| Velocidade não atinge o patamar do inciso III | Aferição frágil; limite da via no ponto | Cálculo pericial confirma ≥ 50 km/h acima |
| Decadência da representação (6 meses) | Arts. 103 e 107, IV, CP; art. 291, §2º, CTB | Houve representação válida/tempestiva |
| Composição civil → renúncia à representação | Art. 74, p. único, Lei 9.099/95 | Não homologada / vítima recusa |
| Culpa exclusiva da vítima → atipicidade | Art. 13 CP (rompe o nexo) | Culpa apenas concorrente; agente também descuidou |
| §2º irretroativo a fato anterior a 2017 | Art. 5º, XL, CF | Fato posterior à Lei 13.546/2017 |
| Denúncia inepta (conduta culposa genérica) | Art. 41 e 396-A CPP | Descrição suficiente da imprudência |

---

## Benefícios e institutos despenalizadores (método — usar calculadoras)

Reconhecida a moldura, mapeie os benefícios **na ordem da porta de entrada**. O cálculo de pena/prazo é **determinístico** — descreva o método e **aponte para a calculadora**:

- **No JECRIM (sem exceção do §1º):**
  1. **Composição civil dos danos (art. 74)** — homologada, gera **renúncia à representação** → **extinção da punibilidade**. Muitas vezes a saída mais vantajosa.
  2. **Transação penal (art. 76)** — proposta do MP; pena restritiva/multa antecipada, **sem** assunção de culpa, **sem** reincidência/antecedentes. Verificar requisitos (não beneficiado nos últimos 5 anos etc.).
  3. **Decadência** (arts. 103/107, IV, CP) — se já operada, é a via mais limpa (extinção sem qualquer ônus).
- **Fora do JECRIM (com exceção do §1º) — conforme a pena:**
  4. **Suspensão condicional do processo (art. 89)** — cabível no **caput** do art. 303 (mínimo 6 meses ≤ 1 ano); **no §2º (mínimo 2 anos) não cabe** diretamente.
  5. **ANPP (art. 28-A CPP)** — pena mínima < 4 anos, sem violência **dolosa** (a lesão culposa não é violência dolosa) e requisitos presentes — discutir cabimento inclusive no §2º (mínimo 2 anos), sob o controle do art. 28-A.
  6. **Substituição por restritivas (art. 44 CP)** — crime culposo → cabível independentemente do quantum.
- **Dosimetria e extinção da punibilidade (sempre pela calculadora):**
  - **Dosimetria (art. 68 CP):** método trifásico — skill **`calculadora-dosimetria`**. Culpa concorrente da vítima e menor reprovabilidade favorecem a base (art. 59).
  - **Prescrição / decadência:** conferir marcos e prazos com **`calculadora-prescricao`** (pena baixa do caput → prazos curtos, art. 109 CP; atenção à prescrição em concreto).
  - **Tempestividade** de recurso e do prazo decadencial: **`calculadora-tempestividade`**.
  - **Suspensão do direito de dirigir:** a suspensão/proibição é **efeito** do art. 303 — discutir proporcionalidade do prazo (art. 293 CTB); ver skill `suspensao-direito-dirigir` se aplicável.

> Se algum cálculo específico não tiver calculadora, marque **[calculadora a implementar com testes]** e **não** improvise número/data na peça.

---

## Súmulas, teses e precedentes (sob o Citation Gate)

> **Não cite de memória.** Abaixo estão **dispositivos de lei notórios** (uso seguro) e **temas de tese** (a confirmar). Todo **número** de HC/REsp/RE, informativo, tema repetitivo ou súmula específica deve ser conferido na skill `jurisprudencia-stj-stf` antes de entrar na peça.

**Dispositivos seguros (lei):**
- **Art. 303, caput, p. único e §2º, CTB** — o tipo e suas figuras.
- **Art. 291, §§1º e 2º, CTB** — despenalizadores, exceções e ação condicionada.
- **Arts. 74, 76, 88 e 89 da Lei 9.099/95** — composição, transação, ação condicionada, suspensão do processo.
- **Arts. 103 e 107, IV, CP** — decadência e extinção da punibilidade.
- **Art. 18, II; art. 13 e §1º, CP** — culpa; nexo e concausa.
- **Art. 5º, XL e LXIII, CF** — irretroatividade da lei gravosa e não autoincriminação.

**Teses jurisprudenciais a confirmar (ensinar a tese, verificar o número):**
- **As exceções do art. 291, §1º, CTB são taxativas e não se presumem** — cada uma exige prova concreta para afastar os despenalizadores. [NÃO VERIFICADO — confirmar acórdãos do STJ via `jurisprudencia-stj-stf`.]
- **Recusa ao etilômetro não caracteriza, por si só, a influência de álcool** para fins penais (nemo tenetur). [NÃO VERIFICADO — conferir.]
- **Representação: forma e tempestividade** — o que configura representação válida/tácita e o termo inicial do prazo decadencial. [NÃO VERIFICADO — conferir; prefira o dispositivo à súmula duvidosa.]
- **Irretroatividade do art. 303, §2º (Lei 13.546/2017)** e alcance da exigência de comprovação da embriaguez. [NÃO VERIFICADO — conferir.]
- **Súmula sobre ação penal / representação na lesão culposa de trânsito.** [NÃO VERIFICADO — conferir numeração e alcance antes de citar.]

---

## Erros comuns / checklist da defesa

- [ ] **Porta de entrada definida primeiro?** Verificou as **três exceções** do art. 291, §1º (álcool/substância; racha; velocidade) **antes** de qualquer tese de mérito?
- [ ] **Exceção do §1º atacada** (prova da influência do álcool, da competição ou da velocidade), para **restabelecer o JECRIM** quando favorável?
- [ ] **Texto do inciso III conferido** — é **"50 km/h acima"** do limite (não "50%")? Aferição e limite da via checados?
- [ ] **Decadência** verificada — *dies a quo* (conhecimento da autoria), 6 meses, ausência de representação válida (arts. 103/107, IV, CP)?
- [ ] **Composição civil** avaliada como via de **renúncia à representação** (art. 74, p. único) → extinção da punibilidade?
- [ ] **Transação penal** (art. 76) requerida/analisada quando no JECRIM?
- [ ] **Modalidade de culpa** descrita **concretamente** na denúncia? Se genérica, arguir **inépcia**?
- [ ] **Nexo causal** examinado — culpa exclusiva da vítima (atipicidade) ou concorrente (dosimetria)? Concausa superveniente (art. 13, §1º)?
- [ ] **Classificação da lesão** (leve × grave/gravíssima) impugnada por laudo — decisiva para o §2º e para os benefícios?
- [ ] **§2º:** prova idônea da embriaguez? Sem **bis in idem**? Irretroativo se fato anterior a 2017?
- [ ] **Causa de aumento** (p. único) atacada **uma a uma**, sem presunção, com fração fundamentada?
- [ ] **Data do fato** conferida para a lei aplicável (Leis 12.971/14, 13.546/17, 14.071/20)?
- [ ] **Benefícios** avaliados na ordem certa (JECRIM: composição → transação → decadência; fora: susp. do processo → ANPP → substituição)?
- [ ] **Cálculos** feitos pelas calculadoras (`calculadora-dosimetria`, `calculadora-prescricao`, `calculadora-tempestividade`) — nunca "no olho"?
- [ ] **Citações** conferidas via `jurisprudencia-stj-stf` (nada de súmula/precedente de memória)?

**Anti-padrões (evitar):**
- Ir direto ao mérito da culpa **sem** decidir a porta de entrada (art. 291, §1º) — perde-se a chance de levar ao JECRIM e de arguir a decadência.
- Ler o inciso III como "**50% acima**" do limite quando a lei diz "**50 km/h acima**" (ou o contrário) — erro que muda o enquadramento.
- Aceitar a **exceção do §1º** (e o rito comum incondicionado) sem exigir **prova concreta** de cada hipótese.
- Tratar a **recusa ao bafômetro** como prova de embriaguez para afastar o JECRIM.
- **Perder a decadência** por não fixar o *dies a quo* (conhecimento da autoria) e não checar a existência de representação válida.
- Ignorar a **composição civil** (art. 74) como via de renúncia à representação — muitas vezes a saída mais favorável.
- Deixar o **§2º** retroagir a fato anterior à Lei 13.546/2017; ou usar a embriaguez duas vezes (**bis in idem**).
- Ignorar a **culpa exclusiva da vítima** (atipicidade, não mera atenuação).
- Citar HC/REsp/RE "de cabeça" — risco de sanção por jurisprudência inventada.

---

## Distinção de escopo (o que esta skill NÃO faz)

- **`transacao-penal`, `composicao-civil-danos-jecrim`, `suspensao-condicional-processo`** operam os institutos **quando o caso já está no JECRIM/rito**; esta skill decide **SE** o caso entra no JECRIM (exceções do art. 291, §1º) e trata a **decadência** própria do trânsito. Acione-as **depois** de fixada a porta de entrada.
- **`defesa-homicidio-culposo-transito`** cuida do **art. 302** (morte), onde o eixo é **evitar o Júri** (culpa × dolo eventual). Aqui, por ser **lesão** (não morte), essa discussão **não** existe do mesmo modo — o alvo é a **porta processual** e a **decadência**.
- **`defesa-culpa-nexo-acidente-transito`** aprofunda a análise de **culpa e nexo** (imprudência/negligência/imperícia, concausas) comum a todos os crimes de trânsito — use-a como apoio ao **Passo 3**.
- **`acusacao-dolo-eventual-transito`** é do **polo acusatório** — não confundir.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Todo enquadramento, tese e peça produzidos com esta skill são **hipóteses a confirmar**; a revisão final e a responsabilidade pela atuação são sempre do **advogado** (CED/EAOAB; Provimento OAB 205/2021). Esta skill é do **polo de DEFESA** — o chefe-roteador deve **confirmar o polo** da instituição em `company.md` antes de acionar. **Atenção:** a spec desta matéria também marca relevância para o **polo acusatório** (o mesmo divisor do art. 291, §1º interessa ao MP/assistente para sustentar a incondicionalidade e afastar despenalizadores); se a atuação for **acusatória**, use as skills próprias de acusação (ex.: `acusacao-dolo-eventual-transito`) e trate este material apenas como mapa do terreno. **O roteador deve conferir o polo antes de usar.**
- **Citation Gate inegociável:** nenhuma súmula, tese, tema ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf`. Prefira ensinar a tese e o dispositivo a arriscar um número.
- **Sigilo e LGPD:** dados do assistido e das vítimas nunca em repositório público.
- **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
