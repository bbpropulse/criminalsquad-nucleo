---
name: defesa-difamacao-139
description: >-
  Use ao defender querelado/réu acusado de DIFAMAÇÃO (CP art. 139) — imputação de FATO ofensivo à
  reputação, ainda que verdadeiro: honra objetiva, animus diffamandi, exceção da verdade só quando o
  ofendido é funcionário público e a ofensa é relativa ao exercício das funções (art. 139, p.u.),
  distinção difamação × calúnia × injúria, crítica e informação de interesse público, imunidade do
  advogado (art. 142, I). Rascunho para… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-difamacao-139"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-difamacao-139", "defesa difamacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Difamação (CP, art. 139)

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

Esta skill orienta a **defesa** de quem é acusado de **difamação** — o crime de **imputar a alguém fato determinado ofensivo à sua reputação** (CP, art. 139). O bem jurídico é a **honra objetiva** (a reputação, o conceito que a pessoa goza no meio social), diferentemente da injúria (honra subjetiva, a autoestima) e da calúnia (imputação de fato definido como **crime**). A ação penal é, em regra, **privada** (queixa-crime), o que abre um leque de defesas processuais próprias — decadência, ilegitimidade, ausência de requisitos da queixa.

> **Lição central:** o eixo da defesa é **classificar corretamente** o que se imputou. Difamação exige **FATO determinado, concreto e desabonador** (não criminoso). Se o que se disse é **juízo de valor / xingamento**, é injúria (art. 140), não difamação. Se o fato imputado é **crime**, é calúnia (art. 138). E se o fato **não é apto a abalar a reputação** perante terceiros, **não há difamação**. Errar a classificação é errar a defesa inteira.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 138 a 145 do CP e, sobretudo, das **causas de exclusão do crime (art. 142)** e da **exceção da verdade na difamação (art. 139, parágrafo único)**. Confira ainda a **Lei 14.197/2021** (revogou a Lei de Segurança Nacional e criou os crimes contra o Estado Democrático de Direito — relevante quando o ofendido é autoridade pública) e a evolução do STF sobre liberdade de expressão × honra. Toda súmula, tema ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de ir para a peça. **Na dúvida, omitir vence inventar.**

---

## Base legal

- **Art. 139, *caput*, CP** — "Difamar alguém, imputando-lhe fato ofensivo à sua reputação." Pena: detenção, 3 meses a 1 ano, e multa.
- **Art. 139, parágrafo único, CP** — **exceção da verdade** admitida **apenas** se o ofendido é **funcionário público** e a ofensa é **relativa ao exercício de suas funções**.
- **Art. 138, CP (calúnia)** e **art. 140, CP (injúria)** — para a distinção típica (ver quadro abaixo).
- **Art. 141, CP** — causas de **aumento** de pena (crime contra Presidente da República/chefe de governo estrangeiro; contra funcionário público em razão das funções; na presença de várias pessoas ou por meio que facilite a divulgação; contra pessoa maior de 60 anos ou com deficiência — exceto injúria; mediante paga ou promessa).
- **Art. 142, CP** — **causas de exclusão do crime** (não há injúria ou difamação punível): **I** — imunidade judiciária (ofensa na discussão da causa, por parte ou procurador); **II** — opinião desfavorável da crítica literária, artística ou científica; **III** — conceito desfavorável emitido por funcionário público em apreciação/informação de dever de ofício. Atenção: o art. 142 **não abrange a calúnia**.
- **Art. 143, CP** — **retratação** cabal, antes da sentença, isenta de pena (na calúnia e na difamação; **não** na injúria).
- **Art. 145, CP** — **ação penal privada** em regra (queixa); pública condicionada à requisição do Ministro da Justiça (ofensa ao Presidente/chefe de governo estrangeiro) ou à representação do ofendido (funcionário público em razão das funções — ver **Súmula 714/STF**).
- **Arts. 44 a 46, CPP** — requisitos da **queixa-crime** e prazo **decadencial de 6 meses** (art. 38, CPP) contados do conhecimento da autoria.
- **Art. 142, I, CP + art. 7º, §2º, EAOAB (Lei 8.906/94)** — **imunidade profissional do advogado** por manifestações no exercício da atividade (limites reconhecidos pelo STF — ver Citation Gate).

---

## O primeiro filtro — difamação × calúnia × injúria

A tríade dos crimes contra a honra se separa por **o que** se imputa e **qual honra** se atinge:

| Crime | Conduta | Honra atingida | O que se imputa | Exceção da verdade |
|-------|---------|----------------|-----------------|--------------------|
| **Calúnia (138)** | Imputar **fato definido como CRIME**, falso | Objetiva | Fato criminoso e **falso** | **Regra**: admitida (art. 138, §3º, salvo exceções) |
| **Difamação (139)** | Imputar **fato** ofensivo à reputação (não criminoso) | Objetiva | Fato **determinado**, desabonador, **ainda que verdadeiro** | **Exceção**: só se ofendido = funcionário público (p.u.) |
| **Injúria (140)** | Atribuir **qualidade negativa** / xingar | **Subjetiva** | **Juízo de valor**, ofensa à dignidade/decoro | **Não** se admite |

**Consequências defensivas dessa classificação:**
- Se o querelante enquadrou como **difamação** algo que é **mero juízo de valor / adjetivação** ("é incompetente", "é um canalha"), a tese é de **atipicidade por erro de classificação** — no máximo seria injúria (que tem regime próprio, inclusive de retratação e ação).
- Se o fato imputado **é crime**, a imputação verdadeira pode configurar **calúnia** (com exceção da verdade ampla) ou nem crime ser — mas **não** difamação; a defesa aponta a **inépcia** da queixa que confunde os tipos.
- Se o "fato" é **genérico, vago, não determinado** ("faz coisas erradas", "tem comportamento suspeito"), **falta o fato determinado** exigido pelo art. 139 → **atipicidade**.

---

## Elementos do tipo (art. 139) — onde a defesa ataca

1. **Fato determinado.** A difamação exige a imputação de **fato concreto e específico**, não de qualidade genérica. Ataque: se a imputação é vaga/abstrata, não há fato determinado → atipicidade (aproxima-se, quando muito, da injúria).
2. **Ofensivo à reputação.** O fato deve ser **apto a diminuir o conceito social** da vítima perante terceiros. Ataque: se o fato, no contexto, **não abala a reputação** (é neutro, trivial, ou até elogioso conforme o meio), falta a ofensividade.
3. **Elemento subjetivo — *animus diffamandi*.** Exige-se **dolo específico de ofender**, a vontade de macular a reputação. Ataque: demonstrar **outro ânimo** — *animus narrandi* (narrar/informar), *animus criticandi* (criticar), *animus jocandi* (brincar), *animus defendendi* (defender-se), *animus corrigendi/consulendi* (corrigir/aconselhar). Ausente o dolo de difamar, **o fato é atípico**.
4. **Imputação a pessoa certa.** A difamação pressupõe vítima **determinada ou determinável**. Ataque: se a manifestação é genérica, dirigida a coletividade indeterminada, não há sujeito passivo certo.
5. **Comunicação a terceiro (potencialidade lesiva).** Como atinge a **honra objetiva**, a difamação pressupõe que o fato **chegue (ou possa chegar) ao conhecimento de terceiros** — não basta dizer só à própria vítima. Ataque: se a comunicação foi estritamente reservada à vítima, discutir a ausência de lesão à reputação (aqui, no máximo, cogitar-se-ia de injúria).

> **Diferença-chave para a calúnia:** na difamação, **a verdade do fato NÃO exclui o crime** (salvo a hipótese do parágrafo único). Ou seja: dizer a verdade sobre um fato desabonador **pode configurar difamação**. Por isso a defesa **não** aposta, como regra, na prova da veracidade — aposta no **ânimo (art. 142/atipicidade subjetiva)**, no **interesse público** e nos **vícios processuais da queixa**.

---

## As teses de defesa (roteiro por eixo)

### Eixo 1 — Atipicidade objetiva
- **Não é fato determinado** (é juízo de valor → injúria, ou é vago → atípico).
- **Fato não é ofensivo à reputação** no contexto concreto.
- **Vítima indeterminada** / manifestação genérica.
- **Ausência de comunicação a terceiro** apta a lesar a honra objetiva.

### Eixo 2 — Atipicidade subjetiva (ausência de *animus diffamandi*)
- Demonstrar **animus narrandi / criticandi / defendendi / jocandi / consulendi**.
- Contexto de **informação jornalística**, **crítica política**, **relato de fato de interesse público**, **defesa em juízo ou fora dele**, **desabafo emocional**.
- **Crítica a agente público** no exercício da função tem proteção reforçada da **liberdade de expressão** (o STF valoriza o debate público — conferir precedentes via Citation Gate).

### Eixo 3 — Causas de exclusão do crime (art. 142, CP)
- **Inciso I — imunidade judiciária:** ofensa irrogada **na discussão da causa**, por parte ou procurador. **Combinar com o art. 142, I + art. 7º, §2º, EAOAB** quando o autor da fala é **advogado** (imunidade profissional). Limite: a imunidade **não** é absoluta e não cobre excessos gratuitos e desconexos da causa (verificar a jurisprudência do STF via Citation Gate).
- **Inciso II — crítica literária, artística ou científica:** opinião desfavorável em resenha/análise, sem dolo de ofender a pessoa.
- **Inciso III — conceito de funcionário público** em apreciação/informação de dever de ofício.
- **Atenção:** o art. 142 exclui **injúria e difamação**, **não a calúnia**.

### Eixo 4 — Interesse público / liberdade de informação e crítica
- **Notícia verdadeira de interesse público** e **crítica a agente/gestão pública** gravitam na zona protegida pela **liberdade de expressão e de imprensa** (CF, art. 5º, IV, IX, XIV; art. 220). A ponderação honra × liberdade de expressão é central quando o querelante é **figura pública/autoridade** e o tema é de **relevância social**. Sustentar ausência de *animus diffamandi* e/ou o exercício regular de direito de informar/criticar.

### Eixo 5 — Exceção da verdade (art. 139, parágrafo único) — uso restrito
- **Só cabe** quando o ofendido é **funcionário público** e a ofensa é **relativa ao exercício das funções**. Fora disso, **não se prova a verdade** para excluir a difamação. Se aplicável, oferecer **exceção da verdade** (incidente processual), com prova documental/testemunhal do fato funcional imputado.

### Eixo 6 — Defesas processuais (ação privada — muitas vezes decisivas)
- **Decadência (art. 38, CPP):** queixa oferecida **após 6 meses** do conhecimento da autoria → extinção da punibilidade (art. 107, IV, CP). **Verificar sempre a data do conhecimento.**
- **Inépcia da queixa (arts. 41 e 44, CPP):** ausência de descrição do fato determinado, da individualização da conduta, de procuração com poderes especiais e menção ao fato (art. 44, CPP).
- **Ilegitimidade ativa:** quem oferece a queixa não é o ofendido/representante legal.
- **Renúncia / perdão do ofendido (arts. 104-106, CP; 49-59, CPP):** renúncia tácita (ex.: convívio/tratamento incompatível com a intenção de processar) e perdão extinguem a punibilidade.
- **Retratação (art. 143, CP):** o querelado que **se retrata cabalmente antes da sentença** fica **isento de pena** (cabível na difamação). Avaliar a conveniência estratégica.
- **Princípio da indivisibilidade (art. 48, CPP):** se a queixa deixou de incluir coautor/partícipe, discutir a **renúncia extensiva** a todos.
- **Falta de justa causa / trancamento por HC** quando a atipicidade é manifesta.

### Eixo 7 — Consequências e conciliação
- Nos crimes contra a honra de ação privada, o rito do **art. 519-523 do CPP** prevê **audiência de reconciliação** (art. 520) — oportunidade de **compor** e extinguir. Explorar sempre.
- **Suspensão condicional do processo** (art. 89, Lei 9.099/95) e transação/composição no **JECrim** quando cabível (pena máxima permite): a difamação simples é de **menor potencial ofensivo**.

---

## Contra-teses típicas da acusação (querelante) e como enfrentá-las

- **"Houve *animus diffamandi*, não mera narração."** → Rebater com o contexto integral da manifestação (informação, crítica, defesa), a ausência de adjetivação gratuita e a finalidade legítima. O ônus de demonstrar o dolo específico é da acusação.
- **"O fato é determinado e desabonador."** → Sustentar que é **juízo de valor** (injúria) ou **fato vago** (atípico), ou que **não abala a reputação** no meio social concreto.
- **"A verdade não importa na difamação."** → Correto como regra — por isso a defesa **não** aposta na veracidade, salvo na hipótese do parágrafo único; desloca o eixo para **ânimo, art. 142 e interesse público**.
- **"A imunidade do advogado não cobre o excesso."** → Delimitar a fala ao **nexo com a causa/defesa**; se houve nexo, incide o art. 142, I + art. 7º, §2º, EAOAB. Reconhecer que **excessos desconexos** não são cobertos (honestidade argumentativa fortalece o pedido no que é legítimo).
- **"É figura pública, mas a honra também é protegida."** → Ponderação: quanto mais **público o cargo** e **relevante o tema**, maior a tolerância à crítica; exigir demonstração de dolo de ofender além do debate legítimo.

---

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e súmulas **notórias** podem ser citados com certeza; **qualquer** precedente específico (número de HC/REsp/RE, ADPF, tema, informativo) só entra na peça **após conferência** via `jurisprudencia-stj-stf` / `verificacao-citacoes`. Prefira **ensinar a tese e o dispositivo** a arriscar um número.

- **Súmula 714/STF** *(notória)* — é **concorrente** a legitimidade do ofendido (queixa) e do Ministério Público (representação) na ação penal por crime contra a honra de **funcionário público** em razão do exercício de suas funções.
- **ADPF 130/STF** *(notória)* — declarou **não recepcionada** a **Lei de Imprensa (Lei 5.250/67)**; os crimes contra a honra por meio de imprensa regem-se pelo **Código Penal**.
- **Liberdade de expressão × honra / crítica a agentes públicos:** há orientação consolidada do STF valorizando o **debate público** e a **crítica a autoridades**, com tolerância ampliada à manifestação sobre temas de interesse social. **Localizar o precedente específico e o alcance exato via Citation Gate antes de citar número.** `[NÃO VERIFICADO — conferir precedente e ementa via jurisprudencia-stj-stf]`
- **Imunidade profissional do advogado (art. 142, I, CP + art. 7º, §2º, EAOAB):** o STF já se pronunciou sobre os limites da imunidade (ADI e casos concretos), reconhecendo-a para manifestações **conexas à causa** e afastando-a em **excessos gratuitos**. **Não citar número sem conferência.** `[NÃO VERIFICADO — conferir ADI e leading cases via jurisprudencia-stj-stf]`
- **Distinção difamação × injúria e exigência de fato determinado:** jurisprudência pacífica do STJ/STF, mas **conferir o julgado concreto** antes de anexar número. `[NÃO VERIFICADO]`

---

## Erros comuns / checklist da defesa

**Checklist antes de peticionar:**
- [ ] **Classifiquei corretamente** o que foi imputado (difamação × calúnia × injúria)? A queixa não confunde os tipos?
- [ ] A imputação é **fato determinado e ofensivo à reputação** — ou é juízo de valor/fato vago (atipicidade)?
- [ ] Há **prova (ou ausência) do *animus diffamandi***? Qual ânimo alternativo sustento (narrandi/criticandi/defendendi)?
- [ ] Alguma **causa de exclusão do art. 142** incide (imunidade judiciária, crítica, funcionário público)? Lembrei que **não** cobre calúnia?
- [ ] Se o autor da fala é **advogado**, invoquei o **art. 142, I + art. 7º, §2º, EAOAB** (delimitando o nexo com a causa)?
- [ ] **Decadência** conferida (6 meses do conhecimento da autoria — art. 38, CPP)?
- [ ] A **queixa** é apta (arts. 41 e 44, CPP) — fato descrito, procuração com poderes especiais e menção ao fato?
- [ ] **Legitimidade ativa** e **indivisibilidade** (art. 48, CPP) verificadas?
- [ ] Cabe **retratação** (art. 143) ou **conciliação** (art. 520, CPP) como estratégia?
- [ ] **Exceção da verdade** só foi cogitada na hipótese do **parágrafo único** (funcionário público, função)?
- [ ] Tema de **interesse público / crítica a agente público** foi sustentado (liberdade de expressão)?
- [ ] Todas as **súmulas/precedentes** passaram pelo gate `jurisprudencia-stj-stf` antes de entrar na peça?

**Anti-padrões (evitar):**
- **Aceitar a rotulação da queixa** sem checar se o imputado é fato (difamação), juízo de valor (injúria) ou crime (calúnia).
- **Tentar provar a verdade** do fato como se fosse calúnia — na difamação a veracidade **não** exclui o crime (salvo o parágrafo único).
- **Esquecer a decadência** e os requisitos da queixa — nos crimes de ação privada, as defesas **processuais** costumam ser as mais eficazes.
- **Invocar imunidade do advogado** para excessos desconexos da causa (o STF afasta a proteção nesses casos).
- **Confundir o art. 142** achando que exclui a calúnia (não exclui).
- **Deixar de explorar a audiência de reconciliação** (art. 520, CPP) e a retratação (art. 143).
- **Citar número de HC/RE/tema de memória** — passe tudo pelo Citation Gate.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a estratégia, a redação final e a responsabilidade pela peça são **sempre do advogado** (EAOAB; CED, art. 2º). Toda tese deve ser confrontada com os autos concretos, a jurisprudência atual e a leitura integral da manifestação atacada.
- **Polo:** esta skill é de **DEFESA** (querelado/réu). O querelante costuma ser **particular** (ação penal privada); quando o ofendido é **funcionário público** em razão das funções, pode atuar o **Ministério Público** por representação (Súmula 714/STF) — o roteador deve **conferir o polo** do usuário antes de aplicar.
- **Citation Gate:** nenhuma súmula, tese ou acórdão vai à peça sem conferência via `jurisprudencia-stj-stf` / `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA).
- **Ética conforme a instituição:** OAB + Provimento 205/2021 (advocacia); CNMP (Ministério Público); LC 80/94 (Defensoria).

**Padrão de redação:** ao redigir a peça (resposta à acusação, defesa prévia, alegações finais, resposta à queixa), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
