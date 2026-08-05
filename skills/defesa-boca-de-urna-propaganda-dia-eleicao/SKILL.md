---
name: defesa-boca-de-urna-propaganda-dia-eleicao
description: >-
  Use ao defender acusado de boca de urna, aglomeração, uso de alto-falante/amplificador,
  distribuição de material ou manifestação ruidosa no dia da eleição (art. 39, §5º, I-III, da Lei
  9.504/97): atipicidade da manifestação individual e silenciosa (STF), ausência de dolo/finalidade
  eleitoral, distinção entre conduta permitida e crime, vícios do flagrante e da prova, e
  proporcionalidade da pena de detenção. Rascunho para… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-boca-de-urna-propaganda-dia-eleicao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-boca-de-urna-propaganda-dia-eleicao", "defesa boca", "propaganda eleicao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Boca de Urna e Propaganda no Dia da Eleição (art. 39, §5º, da Lei 9.504/97)

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

Esta skill orienta a **defesa criminal** de quem é acusado dos crimes eleitorais do **art. 39, §5º, I a III, da Lei 9.504/97** (Lei das Eleições) — as condutas vedadas **no dia da eleição**, popularmente reunidas sob o rótulo de "boca de urna": arregimentação de eleitor e propaganda de "boca de urna" (inciso I); uso de alto-falantes, amplificadores ou promoção de comício/carreata (inciso II); e distribuição de material ou colocação de mesas de recepção de votos com propaganda (inciso III). São crimes eleitorais de **competência da Justiça Eleitoral**, apurados em regra por **flagrante** no próprio dia do pleito.

> **Lição central:** o núcleo da defesa é a **fronteira entre a manifestação individual do eleitor — que é LÍCITA e constitucionalmente protegida — e a propaganda/arregimentação vedada**. A conduta só é típica quando há **propaganda** (mensagem que pede voto / promove candidatura) e/ou **arregimentação** (aliciamento organizado de eleitores). A manifestação **individual e silenciosa** de preferência (camiseta, adesivo, boné) NÃO é crime. Antes de discutir dolo ou prova, classifique se o fato sequer se encaixa no verbo típico.

> **Cautela de vigência (obrigatória antes de citar):** o art. 39 da Lei 9.504/97 sofreu **múltiplas alterações** (Lei 11.300/2006, Lei 12.034/2009, Lei 12.891/2013, Lei 13.165/2015, entre outras) e a Justiça Eleitoral edita **Resolução do TSE a cada eleição** (calendário e propaganda) que baliza o que é permitido. Confira a **redação vigente do art. 39, §5º**, a **Resolução do TSE aplicável ao pleito do fato** e a orientação do STF sobre manifestação individual **antes de fundamentar a peça**. Toda súmula, tese, informativo ou acórdão passa pelo gate `verificacao-citacoes` e pela conferência via `jurisprudencia-stj-stf`.

## Base legal

- **Art. 39, §5º, I, da Lei 9.504/97** — "o uso de alto-falantes e amplificadores de som ou a promoção de comício ou carreata" e a arregimentação de eleitor / propaganda de **boca de urna** (conferir o texto e a distribuição exata entre os incisos na redação vigente).
- **Art. 39, §5º, II, da Lei 9.504/97** — arregimentação de eleitor ou propaganda de boca de urna (verbo típico central do rótulo).
- **Art. 39, §5º, III, da Lei 9.504/97** — divulgação de propaganda de qualquer natureza, inclusive **distribuição de material** (santinhos), ou colocação de mesas de recepção/convencimento de votos.
- **Pena:** em regra **detenção** de seis meses a um ano e **multa** (conferir a cominação exata na redação vigente — é a base do argumento de proporcionalidade e das medidas despenalizadoras).
- **Art. 39, §4º** — o que é **permitido** no dia da eleição (manifestação individual e silenciosa da preferência do eleitor por partido/candidato, vedada a arregimentação e a propaganda — a **âncora** da tese de atipicidade).
- **Código Eleitoral (Lei 4.737/65), arts. 355 e ss.** — regras processuais penais eleitorais, competência e rito.
- **CF, art. 5º, IX e art. 220** — liberdade de manifestação do pensamento (fundamento constitucional da manifestação individual).
- **CP, art. 15, e Lei 9.099/95** — desistência voluntária e institutos despenalizadores (o crime é de menor potencial ofensivo; ver adiante).

## Distinção nuclear — conduta permitida × crime

| Situação de fato | Enquadramento provável | Tese |
|---|---|---|
| Eleitor com **camiseta/adesivo/boné** de candidato, **sozinho e em silêncio** | **Permitido** (art. 39, §4º) — atípico | Atipicidade; liberdade de manifestação individual (STF) |
| **Um** eleitor que verbaliza sua preferência isoladamente | Zona cinzenta → tende a atípico se sem aliciamento | Ausência de arregimentação; manifestação individual |
| **Distribuir santinhos/material** a eleitores na fila | Típico (inciso III) | Discutir prova, dolo, número/organização, quantidade |
| **Grupo organizado** abordando eleitores pedindo voto | Típico (arregimentação, inciso II) | Discutir autoria concreta, organização, prova |
| **Alto-falante/carro de som** tocando jingle | Típico (inciso II) | Discutir prova do funcionamento, autoria, finalidade |
| **Mesa/tenda** de candidato próxima à seção | Típico (inciso III) | Discutir montagem, finalidade eleitoral, autoria |

> **Regra de ouro da defesa:** exija a demonstração concreta do **verbo típico** (arregimentar / distribuir / usar alto-falante / promover comício) somada à **finalidade eleitoral** (propaganda). Fato equívoco, isolado e sem organização gravita para a **atipicidade** ou, ao menos, para a **dúvida razoável**.

## Roteiro de análise e defesa (por eixo)

### 1) Tipicidade — o eixo mais forte

- **Atipicidade da manifestação individual e silenciosa.** O art. 39, §4º, autoriza a manifestação **individual e silenciosa** da preferência do eleitor. O STF firmou entendimento protegendo a manifestação individual do eleitor no dia da eleição (liberdade de expressão) — **confirme o precedente e seu alcance** via `jurisprudencia-stj-stf` [NÃO VERIFICADO — checar ADI/decisão específica sobre manifestação individual no dia da eleição antes de citar número].
- **Ausência do verbo típico.** Se não houve **arregimentação organizada**, nem **distribuição de material**, nem **uso de alto-falante/amplificador**, o fato é atípico. Portar símbolo não é propaganda vedada.
- **Ausência de finalidade eleitoral (elemento subjetivo do tipo).** A conduta precisa visar a **captação de votos/propaganda**. Sem essa finalidade, falta o especial fim de agir.
- **Princípio da insignificância / lesividade mínima.** Conduta pontual, sem potencialidade de influir no pleito, discute-se a **ofensividade ao bem jurídico** (higidez do pleito) — tese subsidiária, com uso cauteloso (a jurisprudência eleitoral é resistente; use como reforço, não como pilar).

### 2) Ausência de dolo

- O tipo é **doloso** e exige consciência de praticar propaganda/arregimentação vedada. **Erro sobre a licitude** (crença de que a conduta era permitida — ex.: eleitor que porta material achando lícito) afasta o dolo ou configura **erro de proibição** (CP, art. 21).
- Distinguir o **militante/cabo eleitoral** (mais próximo do dolo) do **eleitor comum** apanhado em situação equívoca.

### 3) Prova e flagrante

- **Materialidade e autoria concretas.** Boca de urna gera flagrantes coletivos e imprecisos. Exija a **individualização da conduta**: o que **este** acusado fez, quando, para quem, com que material.
- **Cadeia de custódia da prova** (material apreendido, alto-falante, santinhos): conferir apreensão, auto, testemunhas — ver skill `cadeia-custodia-prova`.
- **Prova testemunhal frágil.** Depoimentos de fiscais/adversários políticos exigem **contraprova** e escrutínio de parcialidade.
- **Nulidades do flagrante:** ausência de auto regular, de testemunhas idôneas, apreensão sem individualização, prisão de eleitor no dia (o art. 236 do Código Eleitoral restringe a prisão do eleitor no período — **conferir alcance e exceções na redação vigente** via `verificacao-citacoes`).

### 4) Proporcionalidade e despenalização

- **Crime de menor potencial ofensivo:** a pena máxima cominada permite, em tese, os institutos da **Lei 9.099/95** — **transação penal** e **suspensão condicional do processo** (art. 89) — no âmbito da Justiça Eleitoral (JECrim/juízo eleitoral competente). **Confirmar a admissão desses institutos no processo penal eleitoral e as balizas do MP eleitoral.**
- **ANPP (art. 28-A do CPP):** avaliar cabimento do acordo de não persecução penal — ver skill `defesa-anpp-acordo` e a orientação do MP Eleitoral.
- **Dosimetria:** se houver condenação, atacar a exasperação — ver `calculadora-dosimetria`. Réu primário, conduta isolada → pena mínima e substituição por restritiva de direitos.

## Teses e contra-teses

- **Tese (defesa) — atipicidade da manifestação individual.** Portar símbolo (camiseta/adesivo), isoladamente e em silêncio, é conduta **permitida** (art. 39, §4º) e protegida pela liberdade de expressão; não há propaganda nem arregimentação.
  - **Contra-tese (acusação/MP Eleitoral):** houve **conjunto de atos** (mais de um eleitor, material distribuído, abordagem verbal) que caracteriza arregimentação/propaganda, e não mera manifestação individual.
  - **Réplica:** ausência de prova da **organização/aliciamento**; individualização deficiente; dúvida resolvida *pro reo*.

- **Tese (defesa) — ausência de finalidade eleitoral/dolo.** Faltou o especial fim de captar votos; erro de proibição do eleitor leigo.
  - **Contra-tese:** a proximidade da seção, a quantidade de material e o vínculo com a campanha revelam o dolo.
  - **Réplica:** circunstâncias equívocas não suprem a prova do elemento subjetivo.

- **Tese (defesa) — nulidade/fragilidade da prova.** Flagrante coletivo sem individualização; testemunhas parciais; quebra da cadeia de custódia.
  - **Contra-tese:** auto de prisão, apreensão e testemunhos são suficientes.
  - **Réplica:** exigir prova **individualizada e idônea**; *in dubio pro reo*.

- **Tese (defesa) — despenalização/proporcionalidade.** Menor potencial ofensivo → transação/sursis processual/ANPP; se condenar, pena mínima e substituição.
  - **Contra-tese:** gravidade para o pleito afasta benefícios.
  - **Réplica:** ausência de circunstâncias que impeçam os institutos; conduta pontual.

## Dispositivos e balizas (sob o Citation Gate)

Cite com certeza apenas o que for lei/texto normativo conferido na redação vigente. Para **qualquer precedente específico** (número de HC/RE/ADI/REsp, informativo, tema, ementa), marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de usar na peça.

- **Art. 39, §4º e §5º, da Lei 9.504/97** — permitido × vedado no dia da eleição (base normativa segura, conferir redação vigente).
- **Resolução do TSE do pleito** (propaganda/calendário) — baliza administrativa do que era permitido no dia (conferir a resolução exata do ano do fato).
- **Código Eleitoral, art. 236** — restrição à prisão do eleitor no período eleitoral (conferir alcance/exceções na redação vigente) [confirmar].
- **CP, arts. 15 e 21** — desistência voluntária; erro de proibição.
- **Lei 9.099/95, art. 89** — suspensão condicional do processo (confirmar aplicação no processo penal eleitoral).
- **CPP, art. 28-A** — ANPP (confirmar cabimento e política do MP Eleitoral).
- **STF — manifestação individual do eleitor no dia da eleição:** existe orientação protetiva da liberdade de expressão individual — **[NÃO VERIFICADO]**: não cite número de ADI/decisão sem conferir o precedente e seu alcance atual.
- Não há súmula notória específica do tipo do art. 39, §5º — **evite atribuir súmula ao tema**; prefira ensinar a tese e o dispositivo a arriscar um enunciado.

## Erros comuns / anti-padrões (evitar)

- Tratar o **porte de símbolo individual** como crime — é conduta permitida (§4º).
- Aceitar **flagrante coletivo** sem exigir a **individualização** da conduta de cada acusado.
- Ignorar a distinção entre **eleitor comum** (erro de proibição plausível) e **cabo eleitoral organizado**.
- Deixar de invocar a **Resolução do TSE** do pleito, que delimita o permitido.
- Esquecer os **institutos despenalizadores** (transação, sursis processual, ANPP) por se tratar de menor potencial ofensivo.
- Citar **precedente do STF/TSE por número** sem conferência — risco de jurisprudência inventada (há sanções reais).
- Confundir a competência: crime eleitoral → **Justiça Eleitoral** (ver `competencia-justica-eleitoral-conexao`).
- Apoiar a defesa **só** na insignificância — a jurisprudência eleitoral resiste; use como reforço.

## Checklist da defesa

- [ ] O fato se enquadra em algum **verbo típico** do art. 39, §5º, ou é **manifestação individual** permitida (§4º)?
- [ ] Há prova de **arregimentação/organização** e de **finalidade eleitoral**, ou o fato é isolado e equívoco?
- [ ] A conduta de **cada acusado** foi **individualizada** (o que fez, quando, com que material)?
- [ ] O **flagrante/auto de apreensão** é regular? Testemunhas idôneas e imparciais? Cadeia de custódia preservada?
- [ ] Cabível **erro de proibição** (eleitor leigo) ou ausência de dolo?
- [ ] Foram avaliados **transação penal, sursis processual (art. 89) e ANPP**?
- [ ] A **Resolução do TSE** do pleito e a **redação vigente** do art. 39 foram conferidas?
- [ ] Todo precedente citado passou por `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] Competência da **Justiça Eleitoral** confirmada (`competencia-justica-eleitoral-conexao`)?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado** (CED/OAB; Provimento 205/2021). Não substitui o exame do caso concreto nem a leitura dos autos.
- **Polo:** skill de **DEFESA** (acusado/investigado). O espelho acusatório é `acusacao-crimes-eleitorais-mp` — o roteador deve conferir o **polo** da instituição (advocacia × MP Eleitoral) antes de acionar.
- **Citation Gate inegociável:** nenhuma súmula, tese, informativo ou acórdão é citado de memória; tudo passa por `verificacao-citacoes`. Na dúvida, **omitir vence inventar** — ensine a tese e o dispositivo, não o número não conferido.
- **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão.
