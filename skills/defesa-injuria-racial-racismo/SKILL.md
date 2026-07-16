---
name: defesa-injuria-racial-racismo
description: >-
  Use ao defender réu acusado de INJÚRIA RACIAL, hoje tipificada como RACISMO pelo art. 2º-A da Lei
  7.716/89 (redação da Lei 14.532/2023): ação penal pública incondicionada, imprescritibilidade e
  inafiançabilidade (CF, art. 5º, XLII), irretroatividade da lei mais gravosa para fatos anteriores
  a 11/01/2023, distinção injúria racial × injúria comum (art. 140, §3º, CP) × incitação/segregação
  (art. 20 da Lei 7.716), e… Não use para conclusão definitiva sem autos suficientes, fonte atual ou
  revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, honra, racismo, discriminacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-injuria-racial-racismo"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-injuria-racial-racismo", "defesa injuria", "racial racismo"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Injúria Racial / Racismo (Lei 7.716/89, art. 2º-A — Lei 14.532/2023)

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

Esta skill orienta a **defesa técnica** do réu acusado de **injúria racial**, conduta que deixou de ser modalidade qualificada de injúria (art. 140, §3º, do CP) e passou a ser **crime de racismo autônomo**, tipificado no **art. 2º-A da Lei 7.716/89**, por força da **Lei 14.532/2023**. A mudança é profunda: o crime tornou-se de **ação penal pública incondicionada**, **imprescritível** e **inafiançável** (CF, art. 5º, XLII), com pena majorada. Por isso, a linha central da defesa é dupla — **direito intertemporal** (o que se aplica ao fato conforme sua data) e **atipicidade material** (falta do dolo específico de discriminar).

> **Lição central:** duas perguntas comandam toda a estratégia. **(1) Qual a DATA do fato?** Fato anterior a 11/01/2023 rege-se pela lei antiga (injúria qualificada do art. 140, §3º — prescritível, pena de 1 a 3 anos), pois a lei nova é mais gravosa e **não retroage** (CF, art. 5º, XL). **(2) Havia DOLO ESPECÍFICO de discriminar** por raça, cor, etnia, religião ou procedência nacional, ou apenas ânimo genérico de ofender/xingar? Sem a *finalidade discriminatória*, o fato não é injúria racial nem racismo — quando muito, injúria comum (art. 140, *caput*), ou nem crime. **Classifique a data e o dolo ANTES de tudo.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da Lei 7.716/89 — em especial os **arts. 2º-A e 20** — e a **Lei 14.532/2023** (publicada e vigente em **11/01/2023**), além do art. 140, §3º, do CP. Confirme também o marco constitucional (**CF, art. 5º, XLII**) e o alcance dado pelo STF à **equiparação da homofobia/transfobia ao racismo** (ADO 26 e HC 154.248). Qualquer súmula, tema, informativo ou número de acórdão citado nesta skill deve passar **antes** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`. Na dúvida, ensine a tese e o dispositivo — **não arrisque o número do julgado.**

## Base legal

- **Lei 7.716/89, art. 2º-A** (incluído pela Lei 14.532/2023) — **injúria racial como racismo**: injuriar alguém, ofendendo-lhe a dignidade ou o decoro, **em razão** de raça, cor, etnia ou procedência nacional. Pena: reclusão de 2 a 5 anos e multa. **Parágrafo único** — causa de aumento se o crime é cometido em **contexto de atividade esportiva, religiosa, artística ou cultural** destinada ao público.
- **Lei 7.716/89, art. 20** — praticar, induzir ou incitar a **discriminação ou preconceito** (conduta *coletiva/difusa*, dirigida a grupo, não à honra de pessoa determinada). Distinguir de 2º-A.
- **CP, art. 140, §3º** — a antiga **injúria racial qualificada** (redação anterior à Lei 14.532/2023); ainda é a lei de regência para **fatos anteriores** a 11/01/2023. Pena: reclusão de 1 a 3 anos e multa.
- **CP, art. 140, *caput*** — **injúria comum** (ofensa à dignidade/decoro sem recorte discriminatório). Pena: detenção de 1 a 6 meses ou multa. Ação penal **privada** (CP, art. 145).
- **CF, art. 5º, XLII** — a prática do **racismo** constitui crime **inafiançável e imprescritível**, sujeito a reclusão.
- **CF, art. 5º, XL** — a lei penal **não retroagirá**, salvo para beneficiar o réu (base do direito intertemporal aqui).

## Direito intertemporal — o eixo da matéria

A Lei 14.532/2023 é **lei penal mais gravosa** (novatio legis in pejus): elevou a pena, tornou o crime imprescritível, inafiançável e de ação pública incondicionada. Logo, **não alcança fatos praticados antes de sua vigência** (11/01/2023).

**Fluxo de decisão (data do fato):**
```
1) O fato é ANTERIOR a 11/01/2023?
   ├── SIM → aplica-se o art. 140, §3º, do CP (injúria racial qualificada):
   │         • crime PRESCRITÍVEL (pena máxima 3 anos → prescrição em 8 anos, art. 109, IV, CP)
   │         • pena 1 a 3 anos (mais branda que a atual)
   │         • ação penal: à época, PÚBLICA CONDICIONADA à representação
   │           (Lei 12.033/2009) — conferir exigência/decadência da representação
   │         → Teses fortes: prescrição, decadência do direito de representação,
   │           irretroatividade da lei nova (proibido aplicar 2º-A e imprescritibilidade
   │           a fato pretérito).
   └── NÃO (fato em/ou após 11/01/2023) → aplica-se o art. 2º-A da Lei 7.716/89:
             • crime IMPRESCRITÍVEL e INAFIANÇÁVEL (CF, art. 5º, XLII)
             • ação penal PÚBLICA INCONDICIONADA
             → Teses centrais: ATIPICIDADE (ausência de dolo específico),
               desclassificação para injúria comum, contexto e prova.
```

> **Armadilha nº 1 (a acusação erra e a defesa explora):** aplicar a **imprescritibilidade** e a **ação pública incondicionada** a fato **anterior** a 2023. Isso viola a irretroatividade (CF, art. 5º, XL). Para o fato antigo, valem a **prescrição** e o regime de **representação** vigentes à época. **Sempre verifique a data do fato na denúncia e cruze com 11/01/2023.**

## Roteiro de análise e defesa por eixo

### Eixo 1 — Tipicidade e o dolo específico de discriminar
O núcleo do art. 2º-A é injuriar **"em razão de"** raça, cor, etnia, religião ou procedência nacional. Exige **elemento subjetivo especial** — a *finalidade* de ofender a dignidade **pela** condição racial/étnica, não mero ânimo de xingar.

- **Tese de atipicidade:** a ofensa, embora grosseira, **não teve motivação discriminatória**; foi produto de discussão, embriaguez, revide, exaltação momentânea, sem intenção de rebaixar a vítima por sua raça/cor. Ausente o dolo específico, **não há injúria racial nem racismo**.
- **Desclassificação para injúria comum (art. 140, *caput*):** se houve ofensa à honra, mas sem recorte discriminatório, o fato migra para injúria comum — crime **de ação privada** (exige queixa, não denúncia), com efeitos processuais imensos (ilegitimidade do MP; decadência; possibilidade de perdão/retratação).
- **Contexto importa:** palavra isolada, fora de contexto, pode não revelar dolo discriminatório; expressão idiomática, ironia, citação ou reprodução de fala de terceiro exigem exame do **animus** concreto.

### Eixo 2 — Distinção entre os tipos (art. 2º-A × art. 140 CP × art. 20 da Lei 7.716)
| Figura | Bem jurídico | Alvo | Ação penal | Prescrição |
|---|---|---|---|---|
| **Injúria racial — art. 2º-A (Lei 14.532/23)** | honra + dignidade humana / igualdade | **pessoa determinada** | pública **incondicionada** | **imprescritível** |
| **Injúria racial qualificada — art. 140, §3º CP** (fato pré-2023) | honra | pessoa determinada | pública condicionada (à época) | prescritível |
| **Injúria comum — art. 140, *caput* CP** | honra subjetiva | pessoa determinada | **privada** (queixa) | prescritível |
| **Racismo do art. 20 — Lei 7.716** | igualdade / dignidade coletiva | **grupo/coletividade** difusa | pública incondicionada | imprescritível |

- **2º-A × art. 20:** o divisor é o **alvo**. Ofensa a **pessoa certa** → injúria racial (2º-A). Discriminação/incitação dirigida a **grupo ou coletividade** (segregar, negar acesso, incitar ódio contra "os X") → art. 20. Denúncia que confunde os dois abre tese de **atipicidade/emendatio** ou inépcia.

### Eixo 3 — Prova, autoria e materialidade
- **Prova das palavras:** exigir a **transcrição fiel** do que foi dito e o **contexto**. Áudio/print/vídeo → **cadeia de custódia** (skill `cadeia-de-custodia`): integridade, autenticidade, ausência de edição, identificação do autor.
- **Autoria em ambiente digital:** postagem/mensagem exige vincular **conta → pessoa** (IP, perícia, quebra de sigilo regular). Conta hackeada, perfil falso, uso por terceiro → dúvida sobre autoria.
- ***In dubio pro reo*:** ambiguidade sobre o teor exato, sobre quem falou ou sobre a finalidade discriminatória milita pela absolvição (CPP, art. 386, especialmente V e VII).

### Eixo 4 — Nulidades e questões processuais próprias
- **Fato pré-2023 tratado como imprescritível/inafiançável:** ilegalidade material — pleitear reconhecimento da **prescrição** ou trancamento (HC).
- **Injúria comum processada por denúncia do MP:** se desclassificado para o *caput* do art. 140, o MP é **parte ilegítima** (ação privada) — arguir a nulidade/decadência da queixa.
- **Inépcia da denúncia:** peça acusatória que não descreve **em que consistiu o recorte discriminatório** nem individualiza a conduta é inepta (CPP, art. 41).
- **Competência:** conferir se o fato atrai competência estadual ou, em hipóteses de racismo por meios de comunicação/internet com transnacionalidade, eventual discussão de competência federal — **verificar caso a caso** e via `jurisprudencia-stj-stf`.

## Teses e contra-teses

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| **Fato anterior a 11/01/2023 → lei antiga** | CF, art. 5º, XL; art. 140, §3º, CP | Nenhuma legítima — a irretroatividade é garantia constitucional |
| **Prescrição** (fato pré-2023) | art. 109, IV, CP (pena máx. 3 anos → 8 anos) | Sustentar imprescritibilidade — **inaplicável** a fato pretérito |
| **Decadência da representação** (fato pré-2023) | Lei 12.033/2009; art. 38 CPP | Alegar que a representação foi tempestiva/dispensável — conferir prazo |
| **Atipicidade — ausência de dolo específico** | art. 2º-A exige finalidade discriminatória | Contexto e reiteração demonstram o dolo discriminatório |
| **Desclassificação p/ injúria comum** (art. 140, *caput*) | ofensa sem recorte racial | Manter a qualificadora racial pela expressão empregada |
| **Ilegitimidade do MP** (se injúria comum) | ação privada — art. 145 CP; art. 30 CPP | — |
| **Dúvida sobre autoria digital** | ausência de perícia/vínculo conta-pessoa | Prova indiciária/conjunto probatório |
| **Inépcia da denúncia** | art. 41 CPP — não descreve o recorte discriminatório | Denúncia apta descreve o fato e permite defesa |

> **Cautela sobre "liberdade de expressão":** a tese de que a ofensa racial seria manifestação livre é **fraca e perigosa** — o STF firmou que o **discurso de ódio e o racismo não são protegidos** pela liberdade de expressão. Use, se for o caso, apenas para **contextualizar** crítica legítima/opinião sem recorte discriminatório (reforçando a atipicidade por ausência de dolo), **nunca** como salvo-conduto para a ofensa racial em si.

## Precedentes e marcos — sob o Citation Gate

Cite com segurança **dispositivos de lei** e o **marco constitucional**. Para **qualquer número de julgado, tema ou informativo**, trate como **[NÃO VERIFICADO]** e confirme via `jurisprudencia-stj-stf` antes de peticionar.

- **CF, art. 5º, XLII** — racismo imprescritível e inafiançável (**norma constitucional — citar com certeza**).
- **STF — HC 82.424/RS (caso Ellwanger)** — conceito **amplo e social** de raça; racismo não se limita a critério biológico. **[VERIFICAR o número e o teor exato antes de citar]** via `jurisprudencia-stj-stf`.
- **STF — ADO 26 e MI 4.733** — equiparação de **homofobia e transfobia** ao crime de racismo (enquadramento na Lei 7.716 até legislação específica). **[VERIFICAR]**.
- **STF — HC 154.248/DF** — discussão sobre a **imprescritibilidade da injúria racial** e sua natureza como racismo (anterior à Lei 14.532/2023, que positivou o entendimento). **[VERIFICAR número, órgão julgador, data e alcance]** — não afirmar tese específica sem conferência.
- **Tese defensiva de irretroatividade:** sustente pelo **dispositivo** (CF, art. 5º, XL) e pela lógica do direito intertemporal — é sólida **sem** depender de número de acórdão.

> **Regra de ouro:** prefira ensinar **a tese e o artigo** a arriscar um número de HC/REsp/RE. Jurisprudência inventada por IA gera sanção real (CLAUDE.md do projeto). Omitir vence inventar.

## Erros comuns / checklist da defesa

- [ ] **Data do fato** conferida na denúncia e cruzada com **11/01/2023** (define lei aplicável)?
- [ ] Para fato **pré-2023**: examinada **prescrição** (art. 109, IV, CP) e **decadência da representação**?
- [ ] Para fato **pré-2023**: barrada a aplicação retroativa de **imprescritibilidade / ação incondicionada** (CF, art. 5º, XL)?
- [ ] **Dolo específico de discriminar** presente e provado — ou há **atipicidade** por ausência de finalidade discriminatória?
- [ ] Cabível **desclassificação para injúria comum** (art. 140, *caput*)? Se sim, arguida **ilegitimidade do MP** (ação privada)?
- [ ] Correta a distinção **art. 2º-A (pessoa)** × **art. 20 (grupo/coletividade)** — sem confusão na imputação?
- [ ] **Transcrição fiel** da ofensa e **contexto** exigidos? Palavra isolada ≠ dolo automático.
- [ ] **Cadeia de custódia** da prova digital (áudio/print/vídeo) íntegra? Autoria da conta **vinculada à pessoa**?
- [ ] **Inépcia da denúncia** (art. 41 CPP) — descreve o recorte discriminatório e individualiza a conduta?
- [ ] Toda **súmula/precedente/tema** conferido via `jurisprudencia-stj-stf` **antes** de citar?
- [ ] **Revisão humana** do advogado responsável realizada antes de protocolar?

**Anti-padrões (evitar):**
- Aceitar, sem checar a data, que o fato é imprescritível e de ação pública incondicionada — pode ser **fato pré-2023** (prescritível, representação).
- Tratar toda ofensa grosseira como injúria racial — sem **dolo discriminatório** há, no máximo, injúria comum, ou atipicidade.
- Confundir **injúria racial (art. 2º-A)** com **racismo do art. 20** (alvo coletivo) — são tipos distintos.
- Apostar em "liberdade de expressão" como excludente da ofensa racial (tese perdedora no STF).
- Citar número de HC/REsp/RE de memória — passar tudo pelo Citation Gate.
- Deixar de arguir a **ilegitimidade do MP** quando o caso se desclassifica para injúria comum (ação privada).

## Lembretes finais

- **Data e dolo primeiro** — a data define a lei (irretroatividade da mais gravosa); o dolo específico define a tipicidade.
- **Fato pré-2023** → art. 140, §3º, CP: **prescrição** e **decadência da representação** são as teses mais fortes.
- **Fato pós-2023** → art. 2º-A: foco em **atipicidade** (sem dolo discriminatório) e **desclassificação** para injúria comum.
- **2º-A × art. 20:** pessoa determinada × grupo/coletividade — divisor essencial.
- **Prova digital** exige cadeia de custódia e vínculo conta-pessoa; ambiguidade → *in dubio pro reo*.
- **Citation Gate sempre:** dispositivos e CF com certeza; números de acórdão só após `jurisprudencia-stj-stf`.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese a confirmar, não peça pronta. A responsabilidade pela tese, pela peça e pela adequação ao caso concreto é sempre do **advogado** (EAOAB e Código de Ética; Provimento OAB 205/2021 para comunicação). Esta skill é do **polo de DEFESA** (réu/investigado); se o caso for de atuação do **polo acusatório** (MP ou assistente de acusação da vítima), o roteador deve confirmar o polo e acionar a skill correspondente — a lógica de tipicidade e distinção aqui exposta serve de espelho, mas a estratégia se inverte. Tema de **sensibilidade social elevada** (discriminação): trate a vítima e os fatos com rigor técnico e sem minimizar a conduta; a defesa é da tese jurídica, não do preconceito.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, HC de trancamento/prescrição, RESE), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
