---
name: excesso-prazo-prisao-formacao-culpa
description: >-
  Use ao sustentar RELAXAMENTO ou revogação de prisão cautelar por EXCESSO DE PRAZO na formação da
  culpa — CF art. 5º, LXV e LXXVIII; CPP arts. 310, 316 (revisão a cada 90 dias) e 319; princípio da
  razoabilidade (análise global, sem prazo aritmético fixo). Gatilhos: excesso de prazo, prisão
  cautelar, relaxamento, formação da culpa, razoável duração, revisão 90 dias, preso sem julgamento,
  habeas corpus… Não use para conclusão definitiva sem autos suficientes, fonte atual ou revisão
  profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, prisao-cautelar, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["excesso-prazo-prisao-formacao-culpa", "excesso prazo", "formacao culpa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-excesso-prazo-prisao-formacao-culpa"]
---

# Excesso de prazo na prisão e na formação da culpa — relaxamento

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

Esta skill orienta a **defesa técnica** de quem está **preso cautelarmente** (em flagrante convertido, preventiva ou temporária) e cujo processo **não anda no prazo razoável** — o clássico **excesso de prazo na formação da culpa**. O eixo constitucional é duplo: **ninguém deve permanecer preso além do razoável** (CF, art. 5º, LXXVIII — razoável duração do processo) e **prisão ilegal deve ser imediatamente relaxada** (CF, art. 5º, LXV). O produto é o **relaxamento** da prisão ou, subsidiariamente, a **revogação** da preventiva com aplicação de **medidas cautelares diversas** (CPP, art. 319).

> **Lição central:** não existe **prazo aritmético fixo** de encarceramento cautelar. O excesso se afere por **razoabilidade global** — o tempo total de segregação confrontado com a complexidade do caso, o número de réus e presos, e, sobretudo, **a quem se deve a demora**. A pergunta decisiva não é "passou de X dias?", e sim: **quem causou o atraso?** Demora imputável à **desídia do Estado** (juízo, cartório, MP, perícia) fundamenta o relaxamento; demora causada **pela própria defesa** não conta a seu favor (Súmula 64/STJ — conferir). Todo o trabalho é demonstrar que o excesso **não é imputável ao réu**.

> **Cautela de vigência (obrigatória antes de citar):** a leitura do **art. 316, parágrafo único, do CPP** (revisão da preventiva a cada 90 dias) foi **introduzida pela Lei 13.964/2019 (Pacote Anticrime)** e sua aplicação — se a ausência de revisão gera **relaxamento automático** ou apenas dever de reavaliar — é **objeto de precedentes específicos**. As **Súmulas 21, 52 e 64 do STJ** têm redação e alcance próprios (ver adiante) e **passam obrigatoriamente pela skill `jurisprudencia-stj-stf`** antes de ir à peça. Na dúvida sobre número ou teor de súmula/julgado, **omitir vence inventar**.

## Base legal

- **CF, art. 5º, LXXVIII** — a todos é assegurada a **razoável duração do processo** e os meios que garantam a celeridade de sua tramitação. É o fundamento matriz do excesso de prazo.
- **CF, art. 5º, LXV** — a **prisão ilegal será imediatamente relaxada** pela autoridade judiciária. Prisão que se tornou ilegal pelo excesso de prazo **relaxa-se**, não apenas se "revoga".
- **CPP, art. 310** — atuação judicial sobre a prisão (relaxamento da prisão ilegal, conversão/manutenção ou concessão de liberdade). Sede do **relaxamento** quando a segregação perde a legalidade.
- **CPP, art. 316, parágrafo único** — o órgão emissor da **preventiva** deve **revisar a necessidade de sua manutenção a cada 90 dias**, mediante decisão fundamentada, sob pena de tornar a prisão **ilegal**. Instrumento central e recente (Lei 13.964/2019).
- **CPP, art. 319** — **medidas cautelares diversas da prisão** (comparecimento periódico, proibição de acesso, monitoração eletrônica, recolhimento noturno etc.). São a **alternativa subsidiária**: se a prisão não se sustenta, pede-se liberdade **com** cautelares proporcionais.
- **Princípio da razoabilidade** — não há prazo legal único e somável; o excesso se mede pela **análise global** do caso concreto (complexidade, pluralidade de réus/presos, atos pendentes e responsabilidade pela demora).
- **Habeas corpus** — remédio constitucional para atacar o constrangimento ilegal quando o excesso não é sanado no juízo de origem (via idônea para relaxamento por excesso de prazo).

## Anatomia do excesso — o que a defesa precisa demonstrar

O relaxamento por excesso de prazo não decorre da simples passagem do tempo. Monte a tese sobre **três pilares cumulativos**:

1. **Segregação cautelar em curso** — o réu está efetivamente **preso** (flagrante convertido, preventiva ou temporária). Identifique a data do início da custódia e o **tempo total** de encarceramento.
2. **Demora desarrazoada na marcha processual** — a instrução/formação da culpa **não avança** em ritmo compatível com a razoabilidade. Aqui entra a **análise global**: não basta somar prazos legais isolados; confronte o **tempo total preso** com a **complexidade real** do feito.
3. **Não imputabilidade à defesa** — o núcleo. O atraso decorre de **desídia ou estrutura do Estado** (pauta congestionada, cartório parado, perícia atrasada, adiamentos por conveniência da acusação, cartas precatórias sem cumprimento), e **não** de manobras ou requerimentos da própria defesa (Súmula 64/STJ — conferir).

**Método:** para cada período de paralisação, **atribua a causa**. Uma linha do tempo dos atos processuais (com datas e responsável por cada atraso) é a peça de convicção mais forte — transforma "está preso há muito tempo" em "está preso há muito tempo **por culpa do Estado**".

## A revisão obrigatória a cada 90 dias (art. 316, parágrafo único)

Frente autônoma e frequentemente decisiva, trazida pela Lei 13.964/2019:

- A **preventiva** exige **reavaliação fundamentada a cada 90 dias**. Não é formalidade: é controle periódico da **atualidade** dos motivos que justificaram a prisão.
- **Omissão da revisão** → argumento de que a prisão se tornou **ilegal** por falta do controle legal obrigatório. Se o efeito é relaxamento imediato ou dever de sanar, **confira a posição atual** via `jurisprudencia-stj-stf` — **[NÃO VERIFICADO]** (a interpretação do STF/STJ sobre a consequência da omissão é específica).
- **Revisão meramente carimbada** (decisão que apenas repete a fundamentação original, sem enfrentar a atualidade do risco) equivale, na prática, à ausência de revisão — atacar a **falta de contemporaneidade** dos fundamentos.
- Combine as duas frentes: **excesso de prazo** (o tempo total é desarrazoado) **+** **ausência/deficiência da revisão trimestral** (o controle legal falhou). São fundamentos independentes que se reforçam.

## Catálogo de teses defensivas

1. **Excesso desarrazoado não imputável à defesa** — tese-mãe: o tempo total de prisão superou o razoável **por causa do Estado** (pauta, cartório, perícia, precatórias, adiamentos da acusação). Ancorar na linha do tempo dos atos.
2. **Análise global do prazo** — afastar a leitura de que "os prazos legais ainda não se esgotaram somados": o parâmetro é a **razoabilidade do conjunto**, não a aritmética de prazos isolados.
3. **Ausência de revisão a cada 90 dias (art. 316)** — prisão ilegal por falta do controle periódico obrigatório, ou por revisão sem contemporaneidade.
4. **Perda de contemporaneidade dos fundamentos** — os motivos da preventiva (garantia da ordem pública, instrução, aplicação da lei penal) **já não subsistem** após meses de custódia sem os fatos que os justificavam.
5. **Complexidade não comprovada** — a acusação invoca "complexidade" genérica para justificar a demora; exigir **demonstração concreta** (não basta rotular o caso de complexo).
6. **Relaxamento (CF, art. 5º, LXV; CPP, art. 310)** — pedido principal: prisão que se tornou ilegal **relaxa-se de imediato**.
7. **Subsidiariamente, revogação com cautelares diversas (art. 319)** — se o juízo resistir ao relaxamento puro, requerer liberdade **acompanhada** de medidas proporcionais (comparecimento, monitoração, recolhimento noturno), demonstrando que a prisão é desnecessária e desproporcional.
8. **Habeas corpus** — quando o juízo de origem não sana o constrangimento, levar o excesso de prazo à instância superior pela via do HC.
9. **Distinção atraso justificado × desarrazoado** — reconhecer que **algum** atraso pode ser legítimo, mas isolar os períodos de **paralisação injustificada** que rompem a razoabilidade.

## Contra-teses da acusação (antecipar)

- **Súmula 64/STJ (conferir)** — "não constitui constrangimento ilegal o excesso de prazo na instrução **provocado pela defesa**". A acusação tentará **imputar à defesa** os adiamentos; a resposta é a linha do tempo mostrando que os atrasos foram **do Estado**, não da defesa.
- **Súmulas 21 e 52/STJ (conferir)** — **encerrada a instrução criminal**, fica **superada** a alegação de excesso de prazo (Súmula 52); **pronunciado o réu** (no rito do júri), não há falar em excesso por instrução encerrada (Súmula 21). Verificar a **fase processual**: essas súmulas cortam a tese quando a instrução já se encerrou.
- **Complexidade do feito** — pluralidade de réus/presos, cartas precatórias, provas periciais volumosas como justificativa do prazo alongado.
- **Gravidade concreta e risco atual** — a acusação sustentará que os fundamentos da preventiva persistem, para afastar tanto o relaxamento quanto as cautelares diversas.

A defesa **ataca cada uma na origem:** individualizar a **autoria de cada atraso** (contra a Súmula 64); verificar se a **instrução realmente se encerrou** ou se há atos pendentes (contra as Súmulas 21/52); e exigir **demonstração concreta** da complexidade e da contemporaneidade do risco (não rótulos genéricos).

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** as súmulas abaixo estruturam o debate, mas **não vão à peça sem conferência de número, teor e vigência** via `jurisprudencia-stj-stf`. Marque **[NÃO VERIFICADO]** e confirme **tese + redação** antes de citar. Há sanção real por jurisprudência inventada por IA.

- **Súmula 64/STJ** — excesso de prazo **provocado pela defesa** não gera constrangimento ilegal **[CONFERIR redação e vigência]**. Usada **pela acusação**; a defesa a neutraliza provando que o atraso foi do Estado.
- **Súmula 52/STJ** — **encerrada a instrução criminal**, fica superada a alegação de excesso de prazo **[CONFERIR]**. Verificar se a instrução de fato se encerrou.
- **Súmula 21/STJ** — réu **pronunciado** não reclama excesso de prazo por instrução encerrada (rito do júri) **[CONFERIR]**.
- **Leitura do art. 316, parágrafo único, pós-Lei 13.964/2019** — consequência da **omissão da revisão a cada 90 dias** (relaxamento automático × dever de sanar) é fixada por precedentes do STF/STJ **[NÃO VERIFICADO — conferir posição atual]**.
- **Parâmetros de razoabilidade / análise global** do excesso de prazo → tese e precedentes casuísticos; **[NÃO VERIFICADO]** — buscar julgado atual antes de afirmar.

## Checklist e anti-padrões

- [ ] **Custódia:** data de início da prisão e **tempo total** de encarceramento apurados?
- [ ] **Linha do tempo** dos atos processuais montada, com **responsável por cada atraso** identificado?
- [ ] **Não imputabilidade à defesa** demonstrada (afastar a Súmula 64/STJ)?
- [ ] **Análise global** articulada (não apenas soma de prazos legais isolados)?
- [ ] **Revisão a cada 90 dias (art. 316)** conferida — houve? foi fundamentada e contemporânea, ou carimbada/omitida?
- [ ] **Fase processual** verificada — a instrução **já se encerrou**? (Súmulas 21/52 podem cortar a tese.)
- [ ] **Complexidade** invocada pela acusação foi **concretamente comprovada** ou é rótulo genérico?
- [ ] **Contemporaneidade** dos fundamentos da preventiva enfrentada?
- [ ] **Pedido principal (relaxamento — art. 310; CF, art. 5º, LXV)** e **subsidiário (revogação + cautelares do art. 319)** estruturados?
- [ ] **Via adequada** definida (requerimento ao juízo × habeas corpus à instância superior)?
- [ ] **Súmulas e precedentes conferidos** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- Sustentar excesso por **mera aritmética** de prazos ("somados dão X dias") sem a **análise global** e sem apontar a **causa** da demora.
- **Ignorar a Súmula 64/STJ** — não antecipar que a acusação imputará os atrasos à defesa; sem a linha do tempo, a tese cai.
- Alegar excesso **depois de encerrada a instrução** sem enfrentar as Súmulas 21/52 (ou sem checar se há atos realmente pendentes).
- Tratar a **omissão da revisão a cada 90 dias** como relaxamento automático **sem conferir** a posição atual do STF/STJ.
- Pedir **só o relaxamento puro** sem oferecer o **subsidiário** com cautelares diversas (art. 319) — o juízo tende a preferir a via intermediária.
- Aceitar a rotulação de **"caso complexo"** sem exigir demonstração concreta.
- Citar súmula/acórdão **de memória**, sem passar pelo gate de jurisprudência.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a)/defensor(a) responsável (CED/EAOAB; LC 80/94 na Defensoria).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica se **inverte** — o foco passa a ser demonstrar que o prazo é **razoável** (complexidade concreta, atrasos imputáveis à defesa, instrução encerrada) e que a prisão **persiste necessária**; espelhar as teses acima como pontos a **refutar**.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido e do processo não vão a repositório público.

## Lembretes finais

- **Quem causou o atraso?** É a pergunta que decide — atraso do Estado relaxa; atraso da defesa não conta a favor (Súmula 64/STJ — conferir).
- **Análise global, não aritmética** — o parâmetro é a razoabilidade do conjunto (CF, art. 5º, LXXVIII).
- **Revisão a cada 90 dias (art. 316)** é frente autônoma — omissão ou revisão carimbada fundamentam a ilegalidade.
- **Cheque a fase** — instrução encerrada/pronúncia podem atrair as Súmulas 21/52 e superar a tese.
- **Pedido principal + subsidiário** — relaxamento (art. 310; CF, LXV) e, na resistência, cautelares diversas (art. 319).
- **Vigência:** a aplicação do art. 316 pós-Anticrime e as Súmulas 21/52/64 passam pelo `jurisprudencia-stj-stf` — sem jurisprudência de memória.

**Padrão de redação:** ao redigir o pedido de relaxamento ou o habeas corpus, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, linha do tempo dos atos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).
