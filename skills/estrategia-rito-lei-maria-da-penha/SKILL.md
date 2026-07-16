---
name: estrategia-rito-lei-maria-da-penha
description: >-
  Use para traçar a estratégia do caso de violência doméstica sob a Lei 11.340/2006 (Maria da Penha)
  ponta a ponta — enquadramento (arts. 5º e 7º), competência do JVDFM, vedação total do JECRIM (art.
  41 + Súmula 536/STJ), medidas protetivas de urgência e sua articulação com a ação penal, e prisão
  preventiva por descumprimento (art. 20 da LMP; art. 313, III, CPP; art. 24-A). Gatilhos: rito
  Maria da Penha, art. 41, Súmula 536… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, violencia-domestica, rito, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-estrategia-rito-lei-maria-da-penha"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["estrategia-rito-lei-maria-da-penha", "estrategia rito", "maria penha"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Rito e estratégia do caso — Lei Maria da Penha (Lei 11.340/2006)

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

Esta skill orienta a **estratégia forense do caso de violência doméstica ponta a ponta**: do enquadramento fático-jurídico à competência do Juizado de Violência Doméstica e Familiar contra a Mulher (JVDFM), passando pela **vedação total do JECRIM** (art. 41), pelo regime autônomo das **medidas protetivas de urgência** e sua articulação com a ação penal, até a **prisão preventiva por descumprimento** (art. 20). É um mapa de decisões, não uma peça: cada fase abre teses de um e de outro polo.

> **Polo (padrão desta instituição): DEFESA.** As teses estão marcadas por polo. A defesa técnica do acusado é legítima e constitucional (ampla defesa, contraditório) — mas há um limite ético inegociável: **jamais orientar constrangimento, pressão ou indução da ofendida à retratação** (pode configurar coação no curso do processo — art. 344, CP — e infração disciplinar). Se a instituição atuar em favor da ofendida (assistente de acusação / advocacia da mulher), a ótica se inverte: o roteiro serve para consolidar o enquadramento, as protetivas e as vedações.

> **Lição central:** antes de qualquer tese, decida o **ENQUADRAMENTO** — há violência **baseada no gênero** contra a mulher, no âmbito **doméstico, familiar ou de relação íntima de afeto** (art. 5º c/c art. 7º)? Dessa única resposta decorre **todo o resto**: a competência do JVDFM, a vedação integral do JECRIM (art. 41), o regime das protetivas e a natureza da ação penal. Para a **defesa**, o enquadramento é a **primeira trincheira** — afastá-lo reabre transação/sursis. Para a **acusação/ofendida**, é o alicerce a consolidar.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 11.340/2006 sofreu alterações relevantes e recentes — **Lei 14.550/2023** (protetivas autônomas, independentes de BO/inquérito/ação e de tipificação penal), **Lei 13.827/2019** (art. 12-C — afastamento do lar pelo delegado/policial), **Lei 13.641/2018** (art. 24-A — crime de descumprimento de protetiva) e **Lei 14.994/2024** (feminicídio como **tipo autônomo** — art. 121-A do CP — e endurecimento). Confira a **redação vigente** dos artigos e todas as súmulas/temas via a skill `jurisprudencia-stj-stf` **antes de fundamentar**.

## Enquadramento — é caso de Lei Maria da Penha? (arts. 5º e 7º)

- **Vítima:** mulher, em situação de vulnerabilidade fundada no **gênero**. O parágrafo único do art. 5º dispensa consideração de orientação sexual (alcança relações homoafetivas femininas). Aplicação a **mulher trans** vem sendo reconhecida — [NÃO VERIFICADO] conferir o precedente específico via `jurisprudencia-stj-stf`.
- **Âmbito (art. 5º, I-III):** unidade **doméstica**, relação **familiar**, ou qualquer **relação íntima de afeto** (atual ou pretérita, ainda que sem coabitação — **Súmula 600/STJ**).
- **Formas de violência (art. 7º):** física, psicológica, sexual, patrimonial e moral. Não se limita a lesão física.
- **Sujeito ativo:** pode ser homem ou mulher, desde que presente a violência de gênero na relação doméstica/afetiva.

**Tese central da defesa aqui:** ausência de **motivação de gênero** ou de vulnerabilidade (ex.: conflito patrimonial neutro entre parentes, sem submissão de gênero) → **afasta a LMP**, desloca a competência e **reabre os institutos do JECRIM**. **Contra-tese:** a relação doméstica/afetiva presume a vulnerabilidade; Súmula 600 dispensa coabitação; o art. 7º abrange violência psicológica/moral.

## Base legal — mapa do rito

- **Arts. 5º e 7º** — definição de violência doméstica e das suas formas.
- **Art. 14** — JVDFM, com competência **cível e criminal**; **art. 33** — enquanto não instalado, a **vara criminal** acumula, com prioridade.
- **Art. 15** — competência **territorial à escolha da ofendida**: seu domicílio/residência, o lugar do fato, ou o domicílio do agressor.
- **Arts. 18 a 24** — medidas protetivas de urgência (à ofendida e obrigando o agressor); **art. 19** com os §§ da **Lei 14.550/2023** (autonomia).
- **Art. 12-C** (Lei 13.827/2019) — afastamento imediato do agressor do lar por juiz, delegado (comarca não sede) ou policial (na falta de delegado).
- **Art. 41** — **não se aplica a Lei 9.099/95** a nenhum crime de violência doméstica, qualquer que seja a pena.
- **Art. 17** — vedadas penas de **cesta básica/prestação pecuniária** e substituição por **pagamento isolado de multa**.
- **Art. 16** — retratação da representação (nos crimes de ação **condicionada**) só perante o juiz, em audiência especial, **antes do recebimento da denúncia**, ouvido o MP.
- **Art. 20** — prisão preventiva decretável em qualquer fase; conjugar com **art. 313, III, CPP**.
- **Art. 24-A** (Lei 13.641/2018) — **crime** de descumprimento de medida protetiva (detenção, 3 meses a 2 anos).

## Roteiro estratégico ponta a ponta (árvore de decisão)

```
1) Há violência baseada no GÊNERO contra a mulher? (art. 5º + art. 7º)
   ├── NÃO → fora da LMP → rito comum ou JECRIM conforme a pena
   │         (tese de defesa: reabre transação/composição/sursis)
   └── SIM → âmbito doméstico, familiar ou relação íntima de afeto? (art. 5º, I-III)
             ├── NÃO → fora da LMP
             └── SIM → RITO MARIA DA PENHA:
                       • Competência do JVDFM (art. 14) / vara criminal (art. 33);
                         foro à escolha da ofendida (art. 15)
                       • JECRIM VEDADO (art. 41; Súmula 536) — sem transação,
                         composição civil ou suspensão condicional do processo
                       • Protetivas AUTÔNOMAS (arts. 18-24; Lei 14.550/23) — 48h (art. 18)
                       • Ação penal: lesão corporal = INCONDICIONADA (Súmula 542);
                         demais tipos, conferir a natureza do crime-base
                       • Preventiva possível (art. 20; art. 313, III, CPP);
                         descumprir protetiva = crime (art. 24-A) e/ou preventiva
```

## Ponto nevrálgico 1 — Competência (JVDFM x vara criminal)

O JVDFM concentra o cível e o criminal do caso (art. 14). Onde não instalado, a vara criminal acumula (art. 33). **Foro territorial** é opção da ofendida (art. 15). **Feminicídio** (art. 121-A do CP, com a Lei 14.994/2024 — conferir redação) é crime **doloso contra a vida** → competência do **Tribunal do Júri**; a LMP incide no plano das protetivas e do tratamento processual, sem retirar o júri.

- **Defesa:** arguir **incompetência do JVDFM** quando não configurada a hipótese do art. 5º (é preliminar que, se acolhida, arrasta o afastamento do art. 41).
- **Acusação/ofendida:** competência do JVDFM e escolha do foro pela vítima (art. 15).

## Ponto nevrálgico 2 — Medidas protetivas e sua articulação com a ação penal

A **Lei 14.550/2023** consolidou a **autonomia** das protetivas (art. 19, §§): independem de registro de ocorrência, inquérito, tipificação penal ou de ação penal/cível em curso; são deferidas em **juízo de plausibilidade**, vigoram **enquanto persistir o risco** e têm natureza **cautelar cível-satisfativa**, não acessória ao processo-crime. Prazo de decisão: **48 horas** (art. 18). Espécies: proteção à ofendida (arts. 23-24) e restrições ao agressor (art. 22 — afastamento do lar, proibição de contato/aproximação, suspensão de porte de arma, programas de recuperação e reeducação).

- **Defesa:** atacar **excesso/desproporção** e **ausência de risco atual/contemporâneo**; pleitear revisão, limitação temporal ou substituição por medida menos gravosa; distinguir a protetiva (cautelar) do mérito penal — a concessão **não** presume culpa.
- **Acusação/ofendida:** requerer/renovar protetivas com base na autonomia e na palavra da ofendida; sustentar a manutenção enquanto houver risco.
- **Natureza recursal da decisão sobre protetiva** (agravo de instrumento x apelação): há divergência entre tribunais — [NÃO VERIFICADO] confirmar o meio adequado no tribunal de atuação via `jurisprudencia-stj-stf`.

## Ponto nevrálgico 3 — Vedação do JECRIM (art. 41) e do art. 17

O art. 41 afasta **integralmente** a Lei 9.099/95: **não há** transação penal, composição civil dos danos, nem suspensão condicional do processo — qualquer que seja a pena (**Súmula 536/STJ**). O art. 17 veda cesta básica/prestação pecuniária isolada e substituição por pagamento isolado de multa. Some-se, na dosimetria/execução, a **Súmula 588/STJ** (veda substituição por restritiva de direitos em crime com violência/grave ameaça) e a **Súmula 589/STJ** (afasta a insignificância).

- **Defesa:** o campo dos benefícios do JECRIM só se reabre **derrubando o enquadramento** da LMP; dentro do rito, concentrar em tipicidade, autoria, prova e dosimetria. Persiste a possibilidade de **ANPP** quando presentes os requisitos legais? Ponto controvertido — [NÃO VERIFICADO] conferir via `jurisprudencia-stj-stf` (o art. 41 mira a Lei 9.099, e o ANPP tem sede no art. 28-A do CPP).
- **Acusação/ofendida:** invocar Súmula 536 para barrar qualquer benefício despenalizador e as Súmulas 588/589 na fase de pena.

## Ponto nevrálgico 4 — Ação penal (condicionada x incondicionada)

- **Lesão corporal** (leve, grave ou gravíssima) em contexto de violência doméstica: **ação penal pública INCONDICIONADA** — **Súmula 542/STJ**, na esteira da **ADI 4424** e da **ADC 19 (STF)**. Dispensa representação; irretratável.
- **Ameaça (art. 147, CP) e outros crimes de ação condicionada:** dependem de **representação** válida; admite-se **retratação** apenas na forma do **art. 16** (perante o juiz, em audiência especial, antes do recebimento da denúncia, ouvido o MP).
- **Defesa:** nos crimes condicionados, verificar a **validade e tempestividade da representação**; a retratação, quando ocorrer, deve ser **espontânea da ofendida** e colhida em juízo — nunca provocada pela defesa.
- **Acusação/ofendida:** sustentar a incondicionalidade na lesão (Súmula 542) e a higidez da representação nos demais.

## Ponto nevrálgico 5 — Prisão preventiva e descumprimento de protetiva

- **Art. 20 da LMP + art. 313, III, CPP:** cabe preventiva para **garantir a execução das protetivas**, hipótese que **dispensa o limite de pena** do art. 313, I — alcança até crimes de menor gravidade abstrata.
- **Descumprimento de protetiva:** configura o **crime autônomo do art. 24-A** (Lei 13.641/2018) e, no plano cautelar, reforça a necessidade de preventiva por risco concreto reiterado.
- **Defesa:** exigir **contemporaneidade e necessidade** concretas (art. 312, CPP); a mera concessão da protetiva não basta para prender; pleitear cautelares diversas (art. 319, CPP). **Tese técnica:** após a Lei 13.964/2019, veda-se a decretação **de ofício** (art. 311, CPP), o que atrai leitura restritiva da expressão "de ofício" do art. 20 — [NÃO VERIFICADO] conferir orientação atual via `jurisprudencia-stj-stf`.
- **Acusação/ofendida:** demonstrar descumprimento e reiteração para fundamentar a preventiva do art. 313, III, e a imputação do art. 24-A.

## Teses de defesa x contra-teses (quadro-síntese)

| Ponto | Tese de defesa | Contra-tese (acusação/ofendida) |
|---|---|---|
| Enquadramento | Ausência de motivação de gênero/vulnerabilidade afasta a LMP e reabre o JECRIM | Presunção de vulnerabilidade na relação doméstica/afetiva; art. 7º; Súmula 600 (dispensa coabitação) |
| Competência | Incompetência do JVDFM se não configurado o art. 5º | Competência do JVDFM (art. 14); foro à escolha da ofendida (art. 15) |
| Protetivas | Excesso/desproporção; ausência de risco atual; revisão/limitação | Autonomia e plausibilidade (art. 19, §§, Lei 14.550/23); vigora enquanto houver risco |
| Ação penal | Nos crimes condicionados, exigir representação válida; retratação só espontânea (art. 16) | Lesão = incondicionada (Súmula 542; ADI 4424; ADC 19); irretratável |
| Prova | Fragilidade da palavra isolada; contradições; contexto | Especial relevância da palavra da vítima na violência doméstica |
| Prisão | Falta de contemporaneidade/necessidade (art. 312); cautelares diversas (art. 319) | Preventiva do art. 20 + art. 313, III; descumprimento = risco concreto (art. 24-A) |
| Pena | Proporcionalidade; individualização; regime | Súmulas 588 (sem restritiva) e 589 (sem insignificância); art. 17 (sem cesta básica) |

## Súmulas e precedentes aplicáveis (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 536/STJ** — transação penal e suspensão condicional do processo **não** se aplicam ao rito da LMP.
- **Súmula 542/STJ** — lesão corporal em violência doméstica é de **ação penal pública incondicionada**.
- **Súmula 588/STJ** — crime/contravenção com violência ou grave ameaça no ambiente doméstico **impede** a substituição por restritiva de direitos.
- **Súmula 589/STJ** — **inaplicável** a insignificância nos crimes/contravenções domésticos contra a mulher.
- **Súmula 600/STJ** — a configuração da violência doméstica **não exige coabitação**.
- **ADC 19 e ADI 4424 (STF)** — constitucionalidade da LMP e ação penal incondicionada na lesão corporal.

> **Citation Gate:** os números acima são **âncoras de memória**, não dispensam conferência. Precedente específico incerto (mulher trans; natureza recursal da protetiva; decretação de ofício; ANPP na LMP) foi marcado **[NÃO VERIFICADO]** — confirme redação, vigência e overruling na fonte oficial via `jurisprudencia-stj-stf` **antes de citar**. Na dúvida, **prefira a tese + o dispositivo ao número do acórdão**; **omitir vence inventar**.

## Erros comuns / anti-padrões

- Tratar o caso como de "menor potencial ofensivo" e buscar transação/sursis — **vedado** pelo art. 41 e Súmula 536.
- Aceitar (ou negar) o enquadramento da LMP **sem** analisar a motivação de gênero e o âmbito do art. 5º.
- Exigir representação na **lesão corporal** doméstica — é **incondicionada** (Súmula 542).
- Confundir a protetiva (cautelar autônoma) com juízo de culpa, ou tratá-la como acessória do processo-crime (a Lei 14.550/23 a tornou autônoma).
- Requerer/aceitar cesta básica ou pagamento isolado de multa (art. 17).
- Sustentar insignificância ou pleitear restritiva de direitos ignorando as Súmulas 589 e 588.
- Fundar a preventiva apenas na existência da protetiva, sem contemporaneidade e necessidade (art. 312, CPP).
- **(Ético/grave)** Orientar ou intermediar pressão sobre a ofendida para retratação — a retratação é ato espontâneo dela, em juízo (art. 16).

## Checklist estratégico

- [ ] Enquadramento analisado: gênero + âmbito doméstico/familiar/relação íntima (arts. 5º e 7º)?
- [ ] Competência definida (JVDFM/art. 14 ou vara criminal/art. 33; foro do art. 15)?
- [ ] Vedação do JECRIM (art. 41 + Súmula 536) considerada em todas as fases?
- [ ] Natureza da ação penal aferida (lesão = incondicionada, Súmula 542; demais = conferir)?
- [ ] Protetivas mapeadas quanto a autonomia, proporcionalidade e prazo de 48h (arts. 18-24; Lei 14.550/23)?
- [ ] Cabimento/limites da preventiva (art. 20; art. 313, III, CPP) e do art. 24-A avaliados?
- [ ] Súmulas 588/589 e art. 17 considerados na dosimetria/execução?
- [ ] Todas as citações passaram pelo gate `jurisprudencia-stj-stf`?
- [ ] Nenhuma orientação envolve constrangimento à ofendida (limite ético)?

## Nota de conformidade e ética

- **Revisão humana obrigatória.** Este material é apoio à preparação estratégica — **rascunho a confirmar**, jamais substitui o juízo do profissional responsável (CED/EAOAB) nem a análise do caso concreto e do título/decisões dos autos.
- **Ética por polo.** O **polo padrão desta instituição é a defesa**; a defesa técnica é legítima, mas a tutela da mulher em situação de violência é bem jurídico de especial proteção. **Nunca** produzir estratégia que implique revitimização, intimidação ou indução à retratação da ofendida.
- **Verificação de citações.** Nenhuma súmula, tese ou precedente citado de memória — tudo passa por `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).
- **Cautela de vigência.** Reconfira as Leis 14.550/2023, 13.827/2019, 13.641/2018 e 14.994/2024 e as súmulas antes de peticionar.

## Lembretes finais

- **Enquadramento primeiro, tese depois** — é o que decide competência, JECRIM, protetivas e ação penal.
- **JECRIM totalmente vedado** (art. 41; Súmula 536) — o campo dos benefícios só reabre derrubando o enquadramento.
- **Lesão corporal doméstica = incondicionada** (Súmula 542); ameaça e afins = condicionada, retratação só pelo art. 16.
- **Protetivas são autônomas** (Lei 14.550/23) — cautelares, não acessórias, e não presumem culpa.
- **Preventiva do art. 20 + art. 313, III** dispensa o teto de pena, mas exige contemporaneidade e necessidade; descumprir protetiva é **crime** (art. 24-A).
- **Limite ético inegociável:** nada de pressão sobre a ofendida.

**Padrão de redação:** ao converter a estratégia em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
