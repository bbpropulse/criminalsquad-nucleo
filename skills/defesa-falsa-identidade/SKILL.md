---
name: defesa-falsa-identidade
description: >-
  Use ao defender FALSA IDENTIDADE (art. 307 do CP) — atribuir-se ou atribuir a terceiro identidade
  falsa, para obter vantagem ou causar dano. Roteiro de defesa: autodefesa x tipicidade (a Súmula
  522/STJ afasta a tese; conferir o precedente de repercussão geral do STF), cláusula de
  subsidiariedade expressa (desclassificação para o crime mais grave ou absorção), ausência de
  vantagem/dano, distinção do uso de documento falso… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-falsa-identidade"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-falsa-identidade", "defesa falsa", "falsa identidade"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Falsa Identidade (art. 307 do Código Penal)

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

Esta skill orienta a **defesa técnica** na imputação de **falsa identidade** (art. 307 do CP): "atribuir-se ou atribuir a terceiro falsa identidade para obter vantagem, em proveito próprio ou alheio, ou para causar dano a outrem". É um crime **verbal** (não exige documento), de imputação **massiva** em abordagens policiais, e cuja discussão central — se a mentira sobre a própria identidade é **autodefesa impune** ou **fato típico** — está sumulada de forma desfavorável, mas ainda comporta teses de **atipicidade material**, **subsidiariedade** e **absorção**.

> **Lição central:** não brigue às cegas com a Súmula 522/STJ. Ela afastou a tese pura da autodefesa. A defesa moderna ataca por **três outras frentes**: (1) **ausência do elemento finalístico** (não houve intenção de vantagem nem dano — o dolo específico é elementar); (2) **cláusula de subsidiariedade expressa** do próprio art. 307 ("se o fato não constitui elemento de crime mais grave") — desclassificação/absorção; e (3) **atipicidade material / bagatela** quando a conduta é inócua e sem lesão à fé pública. Autodefesa entra como reforço argumentativo constitucional, não como bala única.

> **Cautela de vigência (obrigatória antes de citar):** o art. 307 do CP não sofreu alteração recente, mas **confira a redação vigente** e o **teor atual da Súmula 522/STJ** e do precedente do STF em repercussão geral sobre o tema antes de fundamentar. Todo enunciado sumular, tema de repercussão geral, informativo ou número de acórdão **passa obrigatoriamente pela skill `jurisprudencia-stj-stf` (Citation Gate)** antes de ir para a peça. Na dúvida sobre um número, **ensine a tese e cite o dispositivo — não arrisque o acórdão**.

## Base legal

- **Art. 307 do CP** — falsa identidade. Pena: **detenção, de 3 meses a 1 ano, ou multa**, *"se o fato não constitui elemento de crime mais grave"* (cláusula de subsidiariedade expressa).
- **Art. 68 da Lei das Contravenções Penais (Dec.-lei 3.688/41)** — recusa de dados sobre a própria identidade ou qualificação (contravenção; figura menos grave, relevante para desclassificação).
- **Art. 304 do CP** — uso de documento falso (crime distinto: exige **documento**; ver `defesa-uso-documento-falso`).
- **Art. 299 do CP** — falsidade ideológica (inserir declaração falsa em documento); distinguir do 307, que é **verbal e sobre identidade**.
- **Art. 340 do CP** — comunicação falsa de crime/contravenção (autoacusação x falsa identidade).
- **CF, art. 5º, LXIII e LXIV** — direito ao silêncio e à não autoincriminação (base constitucional da tese de autodefesa).
- **CP, art. 59 e art. 44** — se sobrevier condenação: dosimetria mínima e substituição por restritiva de direitos (pena baixa; alto potencial de substituição).

## Anatomia do tipo — o que a acusação precisa provar

Para condenar, o Ministério Público tem de demonstrar **todos** os elementos. Cada um é uma porta de defesa:

| Elemento | O que exige | Frente de defesa |
|---|---|---|
| **Conduta** | atribuir-se OU atribuir a terceiro identidade falsa | Houve efetiva atribuição de identidade, ou mera recusa/silêncio? (recusa → art. 68 LCP, não 307) |
| **Objeto: identidade** | nome, filiação, estado — atributos identificadores da pessoa | Falseou identidade, ou apenas dado periférico irrelevante? |
| **Forma verbal** | dispensa documento (se há documento → art. 304) | Se houve exibição de documento, o enquadramento migra para o 304 |
| **Dolo específico (fim)** | "para obter vantagem... ou para causar dano" | **Elementar.** Sem finalidade de vantagem/dano → atípico |
| **Subsidiariedade** | só incide "se o fato não constitui elemento de crime mais grave" | Se integra crime mais grave → desclassifica/absorve |

> **Ponto de ouro:** o **dolo específico** ("*para obter vantagem... ou causar dano*") é **elementar do tipo**. Falsa identidade **não admite forma culposa** e não se contenta com o dolo genérico de mentir. Se a mentira não visou vantagem indevida nem dano a terceiro — por exemplo, quando o agente apenas tentou **ocultar antecedentes ou fugir de constrangimento**, sem obter proveito jurídico ilícito específico — a tipicidade fica seriamente comprometida. Explore isso **sempre**.

## As frentes de defesa (roteiro)

### Frente 1 — Autodefesa x tipicidade (e o que a Súmula 522 realmente diz)

A tese clássica: mentir sobre a própria identidade para não se autoincriminar seria exercício do **direito ao silêncio e à não autoincriminação** (CF, art. 5º, LXIII), logo **conduta atípica** (autodefesa).

- **Estado atual — desfavorável, mas delimitado:** a **Súmula 522/STJ** firmou que *a conduta de atribuir-se falsa identidade perante autoridade policial é típica, ainda que em situação de alegada autodefesa*. O **STF, em repercussão geral** [Tema — verificar número via `jurisprudencia-stj-stf`; **[NÃO VERIFICADO]** o número exato do RE], também assentou a **tipicidade** da conduta. **Não sustente a autodefesa como tese isolada e definitiva** — está superada nos tribunais superiores.
- **Como ainda usar a autodefesa (com técnica):**
  - Como **reforço constitucional** que reduz a reprovabilidade (dosimetria — art. 59, culpabilidade diminuída pelo contexto de pânico/coação da abordagem).
  - Para **distinguir o caso concreto** da hipótese sumulada: a Súmula fala em **atribuir-se falsa identidade**. Se o agente **apenas silenciou** ou **recusou-se a fornecer dados** (sem inventar identidade), a Súmula 522 **não incide** — desloca-se para o **art. 68 da LCP** (contravenção) ou para a **atipicidade** pura.
  - Para casos **anteriores/limítrofes**, sempre conferir se há evolução ou distinção jurisprudencial via `jurisprudencia-stj-stf`.

### Frente 2 — Ausência do fim de vantagem ou dano (atipicidade por falta de dolo específico)

A frente **mais robusta** hoje, porque não colide frontalmente com a Súmula:

- O tipo exige a finalidade **"para obter vantagem... ou para causar dano a outrem"**. É **dolo específico elementar**.
- **Tese:** ausente a demonstração de que o agente buscava **vantagem indevida** ou **dano a terceiro**, a conduta é **atípica**. A simples mentira, desacompanhada do especial fim de agir, não realiza o tipo.
- **Cuidado com a contra-tese:** a acusação (e parte da jurisprudência) tende a enxergar a "vantagem" na própria **evasão da persecução penal** — escapar à identificação já seria a vantagem. Antecipe isso: sustente que **vantagem juridicamente relevante** não se confunde com o mero desconforto de ser identificado, e que interpretação ampliativa esvazia a elementar. **Confirme o estado do debate via `jurisprudencia-stj-stf`** — há oscilação.

### Frente 3 — Subsidiariedade expressa e absorção (desclassificação)

O art. 307 traz cláusula **"se o fato não constitui elemento de crime mais grave"**. Isso é munição de desclassificação:

- **Se a falsa identidade foi meio/elemento de crime mais grave** (ex.: estelionato — art. 171 — em que a identidade falsa integra o ardil), o 307 **é absorvido** pelo crime-fim, por **subsidiariedade expressa** e **consunção**. Não há concurso: pune-se o mais grave.
- **Se houve uso de documento falso** (art. 304), o enquadramento correto é o 304, **não** o 307 (o 307 é verbal). A defesa não deve deixar cumular indevidamente 304 + 307 pela mesma identidade.
- **Se houve mera recusa de identificação**, sem atribuição de identidade falsa → **art. 68 da LCP** (contravenção, muito menos grave) ou atipicidade.
- **Princípio da consunção / *ne bis in idem*:** vedar dupla punição pelo mesmo substrato fático.

### Frente 4 — Atipicidade material / princípio da insignificância

- Quando a conduta é **inócua** — a identidade real foi rapidamente apurada, não houve prejuízo à Administração nem a terceiro, a lesão à **fé pública** é **mínima** — cabe arguir **atipicidade material** (princípio da insignificância / bagatela).
- A jurisprudência é **restritiva** quanto à insignificância na falsa identidade (o bem jurídico "fé pública" costuma barrar a bagatela). Use como **tese subsidiária**, combinada com a ausência de dolo específico (Frente 2), e **confira o estado atual** via `jurisprudencia-stj-stf` — não afirme "cabe insignificância" como regra.

### Frente 5 — Nulidades e prova (abordagem e materialidade)

- **Legalidade da abordagem:** se a abordagem/busca pessoal que gerou a identificação foi **ilegal** (sem fundada suspeita — art. 244 do CPP), a prova daí derivada pode ser **ilícita por derivação** (teoria dos frutos da árvore envenenada — CF, art. 5º, LVI). Ataque a **fundada suspeita** na origem.
- **Materialidade e autoria:** a acusação precisa provar **qual** identidade falsa foi dada e **a quem** foi atribuída. Vaguidade na descrição (a testemunha policial não recorda o nome falso declarado) enfraquece a materialidade.
- **Confissão e interrogatório:** aferir se a "identidade falsa" não decorreu de erro/pânico na abordagem, o que impacta o **dolo**.

## Teses e contra-teses (mapa rápido)

| Tese da DEFESA | Fundamento | Contra-tese da acusação | Resposta da defesa |
|---|---|---|---|
| Atipicidade por autodefesa | CF, art. 5º, LXIII | Súmula 522/STJ (típica) | Distinguir: silêncio/recusa ≠ atribuir identidade falsa → art. 68 LCP |
| Ausência de dolo específico | "para obter vantagem/dano" é elementar | Vantagem = evadir-se da persecução | Vantagem deve ser juridicamente relevante; interpretação ampliativa esvazia a elementar |
| Subsidiariedade / absorção | "se não constitui elemento de crime mais grave" | Concurso material com o crime-fim | Consunção: o 307 é absorvido; veda *bis in idem* |
| Enquadramento no art. 304 | houve documento | 307 mesmo com documento | O 307 é verbal; com documento, o tipo é o 304 |
| Mera recusa de dados | não atribuiu identidade falsa | 307 aplicável | Recusa → art. 68 LCP (contravenção) ou atipicidade |
| Insignificância | lesão mínima à fé pública | fé pública não comporta bagatela | Tese subsidiária + ausência de dolo específico |
| Prova ilícita | abordagem sem fundada suspeita (art. 244 CPP) | flagrante regular | Ilicitude por derivação (CF, art. 5º, LVI) |

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 522/STJ** — a conduta de atribuir-se falsa identidade perante autoridade policial é típica, ainda que em situação de alegada autodefesa. **Notória; citar com certeza, mas conferir o teor atual.**
- **STF — repercussão geral sobre a tipicidade da falsa identidade em autodefesa** — o Supremo firmou a **tipicidade** da conduta. **[NÃO VERIFICADO]** o **número do RE e do Tema** — confira obrigatoriamente via `jurisprudencia-stj-stf` antes de citar (não escreva o número de memória).
- **Súmula 73/STJ** — a utilização de papel-moeda grosseiramente falsificado... (mencionada apenas para **não confundir** temas de fé pública; **não** é da falsa identidade — não a use aqui sem conferir pertinência).
- Qualquer **HC, REsp, informativo ou tema** específico invocado na peça **deve** passar por `jurisprudencia-stj-stf`. **Prefira ensinar a tese e citar o art. 307 e sua cláusula de subsidiariedade a arriscar um número de acórdão.**

## Distinções que a defesa não pode errar

- **Falsa identidade (307) x Uso de documento falso (304):** o 307 é **verbal, sem documento**; se o agente **exibe documento** falso ou alheio, o crime é o **304** (ver `defesa-uso-documento-falso`). Não aceite cumulação 304 + 307 pela mesma identidade.
- **Falsa identidade (307) x Falsidade ideológica (299):** o 299 exige **documento** com declaração falsa; o 307 é a mentira **verbal** sobre quem se é.
- **Falsa identidade (307) x Comunicação falsa de crime (340) / autoacusação falsa (341):** temas distintos; o 307 é sobre **identidade**, não sobre imputar-se/imputar crime.
- **Falsa identidade (307) x Recusa de dados (art. 68 LCP):** **atribuir** identidade falsa (307) ≠ **recusar-se** a informar a própria identidade (contravenção do art. 68). Diferença central para a **desclassificação**.

## Se sobrevier condenação — dosimetria e substituição

Pena de **3 meses a 1 ano ou multa** é baixíssima. A defesa deve, subsidiariamente:

- Pleitear **pena-base no mínimo** (art. 59) — invocar o contexto da abordagem, ausência de prejuízo concreto, primariedade.
- Requerer **substituição por pena restritiva de direitos** (art. 44 do CP) ou **multa** isolada — cabíveis pela quantidade e natureza.
- Avaliar **suspensão condicional do processo** (art. 89 da Lei 9.099/95): a pena mínima de **3 meses** admite o *sursis* processual — verificar cabimento (pena mínima ≤ 1 ano) e negociar já na resposta/audiência.
- Avaliar **transação penal** e demais institutos despenalizadores (Juizado Especial Criminal, se o rito for o da Lei 9.099/95 — verificar competência).

## Erros comuns / checklist da defesa

- [ ] Verifiquei se houve **atribuição** de identidade falsa (307) ou **mera recusa** de dados (art. 68 LCP)?
- [ ] Ataquei o **dolo específico** — a finalidade de **vantagem** ou **dano** ficou provada? (é elementar)
- [ ] Há **documento** envolvido? Se sim, o enquadramento correto é **304**, não 307?
- [ ] A falsa identidade é **meio** de crime mais grave? Então **subsidiariedade/absorção** (desclassificação)?
- [ ] A **abordagem** teve **fundada suspeita** (art. 244 CPP)? Se não, arguir **prova ilícita** (CF, art. 5º, LVI)?
- [ ] A **materialidade** está descrita (qual identidade falsa, atribuída a quem)?
- [ ] Cabe **suspensão condicional do processo** (art. 89, Lei 9.099/95) / **transação** / **substituição** (art. 44)?
- [ ] **Súmula 522 e o precedente do STF** conferidos no teor **atual** via `jurisprudencia-stj-stf`?
- [ ] Nenhum **número de acórdão/tema citado de memória** (Citation Gate)?

**Anti-padrões (evitar):**
- Sustentar **autodefesa** como tese única e definitiva, ignorando a Súmula 522/STJ (perde credibilidade e a peça toda).
- Confundir **falsa identidade (307)** com **uso de documento falso (304)** — enquadramento distinto por presença de documento.
- Deixar **cumular 304 + 307** pela mesma identidade (dupla punição).
- Aceitar que "vantagem" é qualquer coisa — **exigir vantagem juridicamente relevante** e atacar a interpretação ampliativa.
- Tratar **recusa de identificação** como se fosse 307 (é contravenção do art. 68 LCP).
- Citar **número de RE/HC/Tema de memória** — sempre pelo Citation Gate.
- Esquecer os **institutos despenalizadores** (sursis processual, transação) diante da pena mínima baixíssima.

## Lembretes finais

- **Três frentes vencem mais que uma:** ausência de dolo específico + subsidiariedade + (subsidiariamente) atipicidade material. Autodefesa é reforço, não bala única.
- **Documento muda tudo:** com documento → art. 304; sem documento → art. 307. Verbal x documental é a linha divisória.
- **Recusa ≠ atribuição:** só atribuir identidade falsa é 307; recusar dados é art. 68 da LCP.
- **A cláusula de subsidiariedade** do próprio 307 é a chave da desclassificação/absorção.
- **Pena baixa = despenalização:** priorize sursis processual, transação e substituição na estratégia.
- **Súmula 522/STJ e o precedente do STF** — confira sempre o teor atual; **não invente números** de acórdão.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Todo enquadramento, tese e dosimetria aqui são **hipóteses a confirmar** pelo(a) advogado(a) responsável antes de protocolar; a responsabilidade pela atuação é sempre profissional (EAOAB, art. 2º; CED).
- **Citation Gate inegociável:** nenhuma súmula, tese, tema de repercussão geral ou número de acórdão vai para a peça sem passar pela skill `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA — **omitir vence inventar**.
- **Polo:** esta skill é de **DEFESA** (advocacia — OAB + Provimento 205/2021). O chefe-roteador deve **conferir o polo** da instituição no `company.md`; se o pedido for do polo acusatório (MP/assistente), redirecionar à skill própria de acusação.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, memoriais, apelação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
