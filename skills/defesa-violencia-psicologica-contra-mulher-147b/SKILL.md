---
name: defesa-violencia-psicologica-contra-mulher-147b
description: >-
  Use ao construir a DEFESA na violência psicológica contra a mulher — art. 147-B do CP (Lei
  14.188/2021): atipicidade por ausência de dano emocional e nexo causal, subsidiariedade expressa
  ("se a conduta não constitui crime mais grave"), bis in idem com ameaça (147), injúria (140) e
  perseguição (147-A), prova por laudo psicológico, recorte temporal e despenalizadores no contexto
  Maria da Penha. Gatilhos: violência… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, violencia-psicologica, violencia-domestica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-violencia-psicologica-contra-mulher-147b", "defesa violencia", "mulher 147b"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-violencia-psicologica-contra-mulher-147b"]
---

# Violência psicológica contra a mulher — Defesa (CP art. 147-B)

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

Esta skill orienta a **defesa técnica** no crime de **violência psicológica contra a mulher**, tipificado no **art. 147-B do CP** pela **Lei 14.188/2021**. O bem jurídico é a **saúde/integridade psíquica e emocional da mulher** em contexto de gênero — o tipo penaliza a violência que antes tinha assento apenas na **Lei Maria da Penha (art. 7º, II)** como forma de violência, sem sanção penal autônoma. O entregável são **blocos de tese** para a **resposta à acusação** (CPP, art. 396-A), a instrução e os **memoriais** — a espinha argumentativa que atravessa as fases, no **polo defensivo**.

> **Lição central:** o coração do tipo é o **dano emocional efetivo e o nexo causal** — não é crime de mera conduta, nem se presume. A defesa se ganha ou se perde em duas frentes: **(1) provar que não houve dano emocional causalmente ligado à conduta** e **(2) explorar a subsidiariedade expressa** ("se a conduta não constitui crime mais grave"). Antes de qualquer tese, pergunte: a denúncia demonstra **dano emocional concreto** (com lastro probatório, idealmente laudo psicológico) e o **nexo** com a conduta imputada? Ou apenas descreve palavras e atritos de relacionamento rotulados de "violência psicológica"? E: esses **mesmos fatos** já não configuram **ameaça (147)**, **injúria (140)** ou **perseguição (147-A)** — atraindo a subsidiariedade e o **ne bis in idem**?

> **Cautela de vigência (obrigatória antes de citar):** crime **novo** — o art. 147-B foi **incluído pela Lei 14.188/2021** e a **jurisprudência ainda está em formação; não há súmula específica**. Confira: (1) a **redação vigente** do art. 147-B e a **natureza da ação penal**, que têm interface direta com o regime da Maria da Penha e com o art. 147-A; (2) **fatos anteriores a 29/07/2021 não se tipificam** como 147-B — antes disso a violência psicológica era conduta descrita na LMP **sem tipo penal autônomo** (irretroatividade da lei penal mais grave — CF, art. 5º, XL); (3) **todo precedente passa pela skill `jurisprudencia-stj-stf`** antes de ir à peça. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 147-B, CP (Lei 14.188/2021)** — tipo penal: **causar dano emocional à mulher** que a prejudique e perturbe o pleno desenvolvimento **ou** que **vise a degradar ou a controlar** suas ações, comportamentos, crenças e decisões, **mediante** ameaça, constrangimento, humilhação, manipulação, isolamento, chantagem, ridicularização, limitação do direito de ir e vir **ou qualquer outro meio**. Pena: **reclusão, de 6 meses a 2 anos, e multa, se a conduta não constitui crime mais grave**.
- **Lei 11.340/2006 (Maria da Penha), art. 7º, II** — define a **violência psicológica** como forma de violência doméstica e familiar contra a mulher; base conceitual do tipo e definição do **contexto de gênero** (art. 5º).
- **Art. 147, CP** — ameaça (figura próxima; risco de *bis in idem* e de subsidiariedade).
- **Art. 140, CP** — injúria (figura próxima; ofensa à honra subjetiva).
- **Art. 147-A, CP** — perseguição/stalking (figura próxima; sobreposição de condutas reiteradas).
- **CF, art. 5º, XL** — irretroatividade da lei penal mais gravosa (recorte temporal: fatos anteriores a 29/07/2021).
- **Art. 109 do CP** — prescrição (pena baixa: prescreve rápido — ver adiante).

## Anatomia do tipo — roteiro de subsunção (o que a defesa disseca)

**Causar dano emocional à mulher**, por meio taxativo/aberto, com **uma das duas finalidades/resultados normativos**, a título de **dolo**:

1. **Resultado material — "causar dano emocional":** o tipo exige **dano emocional** à vítima. É o elemento decisivo — **não se presume** e não se confunde com mero desconforto, mágoa ou desgaste natural de conflito conjugal. Sem dano demonstrável, **atipicidade**.
2. **Duplo núcleo normativo (basta um):**
   - (a) dano que **prejudique e perturbe o pleno desenvolvimento** da mulher; **ou**
   - (b) conduta que **vise a degradar ou a controlar** ações, comportamentos, crenças e decisões.
3. **Meios executórios:** ameaça, constrangimento, humilhação, manipulação, isolamento, chantagem, ridicularização, limitação do direito de ir e vir **ou qualquer outro meio** (fórmula aberta — mas o meio precisa ser **idôneo** a causar o dano).
4. **Sujeito passivo qualificado:** **mulher**, em **contexto de gênero** (art. 5º da LMP). Fora desse contexto, discutir a própria incidência do tipo.
5. **Elemento subjetivo: dolo** (vontade de causar o dano com uma das finalidades). **Não há forma culposa** — atrito, desabafo ou reação emocional sem vontade dirigida não tipifica.
6. **Cláusula de subsidiariedade expressa: "se a conduta não constitui crime mais grave".** Se o fato já configura crime mais grave, o 147-B **cede**.

**Método:** teste cada elemento em separado. A ausência **de qualquer um** — dano, nexo, finalidade, dolo — leva à atipicidade. A defesa ataca, em regra, o **dano/nexo** e opera a **subsidiariedade**.

## O dano emocional e o nexo causal — a tese-mãe da atipicidade

O 147-B pune um **resultado** (dano emocional), não a mera troca de ofensas. Consequências que a defesa explora:

- **Dano não se presume.** Denúncia que descreve apenas palavras, discussões ou "clima" do relacionamento, **sem demonstrar dano emocional concreto e seu nexo com a conduta**, é **inepta** (art. 41 c/c art. 395, I, CPP) → cabível **rejeição da denúncia**, **absolvição sumária** (art. 397 CPP) ou **trancamento por HC** por atipicidade.
- **Prova do dano — laudo psicológico.** O dano emocional é fato que, em regra, reclama **corroboração técnica** (avaliação/laudo psicológico, prontuário, acompanhamento). A defesa exige que a acusação demonstre o dano e afasta a **presunção** a partir do rótulo "violência psicológica".
- **Nexo causal.** Ainda que haja sofrimento, é preciso ligá-lo **à conduta imputada** — não a outras causas concomitantes (conflitos familiares, disputa de guarda, questões preexistentes). Atacar o nexo é atacar a materialidade.
- **Idoneidade do meio.** O meio executório precisa ser apto a degradar/controlar ou a perturbar o pleno desenvolvimento; conduta trivial ou isolada dificilmente satisfaz o resultado exigido.

➡️ **Tese central de defesa:** ausência de dano emocional e/ou de nexo causal → **atipicidade**. Subsidiariamente, subsidiariedade/desclassificação e afastamento do *bis in idem*.

## Subsidiariedade expressa e o *bis in idem* com 147, 147-A e 140

A cláusula **"se a conduta não constitui crime mais grave"** é elemento do próprio tipo e a **segunda alavanca** da defesa:

- **Se o fato é ameaça (147):** a promessa de mal injusto e grave, isoladamente, é **ameaça** — não se soma a 147-B pelos **mesmos fatos**. Verificar se a acusação **desdobrou um único fato** em dois crimes.
- **Se o fato é perseguição (147-A):** condutas **reiteradas** de invasão/perturbação da esfera de liberdade e privacidade podem ser **stalking** — há **sobreposição** com a violência psicológica. Não punir **duas vezes** o mesmo padrão de conduta (ver skill `defesa-perseguicao-stalking-147a`).
- **Se o fato é injúria (140):** ofensa à honra subjetiva (humilhação, ridicularização) pode esgotar-se na **injúria** — afastar a dupla imputação.
- **Regra prática:** delimite **o que é um único fato**. A acusação não pode fatiar a mesma conduta para multiplicar tipos; e, se houver crime **mais grave**, o 147-B **não incide** por força da subsidiariedade expressa.

➡️ **Tese subsidiária:** ou **absorção** pelo crime mais grave (subsidiariedade), ou **reconhecimento do *bis in idem*** e afastamento da imputação sobreposta.

## Recorte temporal — direito intertemporal (fatos anteriores a 29/07/2021)

- **Antes da Lei 14.188/2021**, a violência psicológica era **forma de violência** descrita na Maria da Penha (art. 7º, II), **sem tipo penal autônomo** que a punisse como crime próprio.
- O art. 147-B é **novatio legis incriminadora** e **não retroage** (CF, art. 5º, XL): **fatos anteriores a 29/07/2021 são atípicos** sob o 147-B.
- **Confira sempre a data de cada fato.** Em condutas que se prolongam no tempo, separar o que ocorreu antes e depois da vigência — só a fração posterior pode ser imputada.

## Institutos despenalizadores e o contexto Maria da Penha

- **Contexto de gênero (art. 5º da LMP) muda o regime.** Configurada a violência doméstica e familiar contra a mulher:
  - **Afasta a Lei 9.099/95** (art. 41 LMP) → sem transação penal e sem suspensão condicional do processo (**Súmula 536/STJ** — conferir).
  - **Veda a ANPP** (art. 28-A, §2º, IV, CPP) — conferir.
  - **Afasta a insignificância** (**Súmula 589/STJ** — conferir): **não** sustentar bagatela em violência de gênero.
  - Cabem **medidas protetivas de urgência** independentemente de ação penal — dimensionar proporcionalidade e contraditório.
- **Menor potencial ofensivo:** pena máxima de 2 anos seria, em tese, IMPO — **mas** o contexto doméstico **afasta** o JECRIM (art. 41 LMP). Verificar se há efetivo contexto de gênero; **sem ele**, rediscutir a própria tipicidade e os benefícios.
- **Prescrição (art. 109 CP):** pena máxima de **2 anos** → prescreve em **4 anos** (inc. V). Crime de **pena baixa**: sempre checar prescrição **retroativa/intercorrente**, sobretudo em processos que se arrastam.

## Distinção de figuras próximas (subsidiariedade / desclassificação)

| Tipo | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Ameaça (147)** | promessa de mal injusto e grave; ato pode ser único | Fato isolado de ameaça → afastar 147-B pela subsidiariedade / *bis in idem* |
| **Perseguição (147-A)** | **reiteração** que invade/perturba liberdade e privacidade | Padrão reiterado → *stalking*; não punir duas vezes o mesmo padrão |
| **Injúria (140)** | ofensa à honra subjetiva | Humilhação/ridicularização que se esgota na honra → injúria |
| **Violência doméstica (LMP art. 7º, II)** | violência psicológica como **forma de violência** (esfera protetiva) | Base conceitual e das protetivas — **não** é, por si, o tipo penal do 147-B |
| **Constrangimento ilegal (146)** | constranger a fazer/não fazer o que a lei não obriga | Cenário sem dano emocional e sem finalidade do 147-B |

## Catálogo de teses defensivas

1. **Atipicidade por ausência de dano emocional** — não demonstrado dano concreto; mero desgaste/conflito de relacionamento não preenche o resultado do tipo.
2. **Atipicidade por ausência de nexo causal** — sofrimento não ligado à conduta imputada (causas concomitantes; disputa de guarda; questões preexistentes).
3. **Subsidiariedade expressa** — o fato constitui **crime mais grave** → 147-B **não incide** ("se a conduta não constitui crime mais grave").
4. **Vedação ao *bis in idem*** — mesmos fatos já subsumidos em 147 (ameaça), 147-A (perseguição) ou 140 (injúria); afastar a dupla imputação.
5. **Atipicidade temporal** — fatos **anteriores a 29/07/2021** (irretroatividade da lei incriminadora).
6. **Ausência de dolo** — desabafo, reação emocional, atrito bilateral sem vontade dirigida a causar dano/degradar/controlar.
7. **Ausência/ inidoneidade do meio** — meio executório não apto a produzir o dano exigido; conduta trivial ou isolada.
8. **Ausência de contexto de gênero** — fora da hipótese do art. 5º da LMP, rediscutir a incidência do tipo e reabrir os benefícios.
9. **Fragilidade probatória do dano** — inexistência de laudo/avaliação psicológica; presunção do dano a partir do rótulo; prova exclusivamente unilateral sem corroboração.
10. **Extinção da punibilidade** — **prescrição** (pena baixa, prazo curto); verificar retroativa/intercorrente.
11. **Dosimetria** — pena-base no mínimo; primariedade e bons antecedentes; adequação da pena de multa; regime aberto/substituição por restritivas (art. 44 CP), observadas as vedações do contexto doméstico.

## Contra-teses da acusação (antecipar)

- **Dano emocional demonstrado** por laudo/avaliação psicológica, prontuário, acompanhamento e relato consistente da vítima.
- **Finalidade de controle/degradação** evidenciada por padrão de isolamento, chantagem, humilhação e limitação de ir e vir.
- **Autonomia do 147-B** frente às figuras próximas — a violência psicológica teria conteúdo próprio, não absorvido por 147/140.
- **Contexto de gênero** → afastamento dos despenalizadores, medidas protetivas e agravamento do juízo de reprovabilidade.
- **Palavra da vítima** com especial valor nos crimes praticados em âmbito doméstico (ambiente sem testemunhas).

A defesa deve **atacar cada uma na origem**: exigir prova técnica do dano e do nexo; delimitar o fato único para barrar o *bis in idem*; opor a subsidiariedade quando houver crime mais grave; e cobrar corroboração da palavra da vítima, sem revitimização gratuita — o ataque é à **prova do dano** e à **qualificação jurídica**, não à honra da ofendida.

## Prova do dano, laudo psicológico e corroboração

- O **dano emocional** é elemento do tipo: exigir da acusação **prova concreta** — avaliação/laudo psicológico, prontuário, histórico de acompanhamento — e não a mera afirmação de sofrimento.
- **Palavra da vítima** tem peso relevante no âmbito doméstico, mas **reclama corroboração** e coerência com os demais elementos; a defesa aponta contradições, motivações concorrentes (litígio de guarda, separação litigiosa) e ausência de lastro técnico.
- **Prova digital** (mensagens, áudios, prints): questionar **autenticidade, integridade e contexto** (metadados, recortes, edição) e a **cadeia de custódia** de vestígios (arts. 158-A a 158-F do CPP); print isolado não supre dano nem nexo.
- Ver skills de análise probatória, `leitura-interpretacao-laudo-pericial-defesa` e cadeia de custódia do acervo para o detalhamento técnico.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** por ser crime de 2021, a jurisprudência do STJ/STF sobre o **147-B está em formação e não há súmula específica**. **Não cite acórdão sobre violência psicológica de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo** via `jurisprudencia-stj-stf` antes de levar à peça.

Súmulas de contexto (violência doméstica) — **conferir vigência/redação** via `jurisprudencia-stj-stf`, todas **[NÃO VERIFICADO]** aqui:
- **Súmula 536/STJ** — não cabem suspensão condicional do processo e transação penal nos crimes de violência doméstica contra a mulher.
- **Súmula 589/STJ** — inaplicável a insignificância aos crimes/contravenções praticados contra a mulher no âmbito das relações domésticas.
- **Súmula 588/STJ** — vedada a substituição por pena restritiva de direitos em crime cometido com violência/grave ameaça em violência doméstica.

Tese/enunciado específico sobre **dano emocional, natureza da ação penal, subsidiariedade ou concurso do 147-B** → **[NÃO VERIFICADO]** — buscar precedente atual antes de afirmar. A **interface do 147-B com o 147-A** e a **ação penal** são pontos ainda oscilantes: **conferir** antes de fundamentar.

## Checklist e anti-padrões

- [ ] **Dano emocional:** há **prova concreta** do dano (laudo/avaliação psicológica), ou apenas o rótulo "violência psicológica"?
- [ ] **Nexo causal:** o dano está ligado **à conduta imputada** ou a causas concomitantes?
- [ ] **Subsidiariedade:** o fato constitui **crime mais grave** (147-B cede)?
- [ ] ***Bis in idem*** com **147 / 147-A / 140** afastado (delimitação do fato único)?
- [ ] **Recorte temporal:** algum fato é **anterior a 29/07/2021** (atipicidade — irretroatividade)?
- [ ] **Dolo e meio idôneo** presentes, ou atrito/desabafo sem vontade dirigida?
- [ ] **Contexto de gênero** (art. 5º LMP) efetivamente configurado — e seus efeitos sobre os despenalizadores mapeados?
- [ ] **Prescrição** verificada (pena baixa; retroativa/intercorrente)?
- [ ] **Prova digital** com autenticidade e **cadeia de custódia** íntegras (arts. 158-A ss. CPP)?
- [ ] **Súmulas e precedentes conferidos** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- **Presumir o dano emocional** a partir do rótulo "violência psicológica" — o dano é elemento do tipo e precisa de prova.
- Ignorar a **subsidiariedade expressa** e a **dupla punição** com 147, 147-A ou 140.
- Aplicar o 147-B a **fatos anteriores a 29/07/2021** (lei incriminadora não retroage).
- Sustentar **insignificância** em contexto de violência de gênero (Súmula 589/STJ — conferir).
- Aceitar prova do dano **exclusivamente unilateral**, sem corroboração e sem lastro técnico.
- Confundir **desgaste/atrito conjugal** com o resultado típico de dano emocional.
- Citar acórdão "sobre violência psicológica" **sem** passar pelo gate de jurisprudência (crime recente, jurisprudência instável).

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar **dano emocional, nexo e dolo** é da acusação; espelhar as teses acima como pontos a **provar**, e não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados da vítima e do assistido não vão a repositório público; observe a sensibilidade redobrada em violência doméstica.

## Lembretes finais

- **Dano emocional + nexo causal** são o eixo — teste elemento por elemento; sem prova do dano, é atipicidade.
- **Subsidiariedade expressa** — "se a conduta não constitui crime mais grave", o 147-B **cede**.
- ***Bis in idem*** com 147, 147-A e 140 — delimite o fato único e barre a dupla imputação.
- **Recorte temporal** — nada de 147-B para fatos anteriores a 29/07/2021.
- **Contexto LMP** muda o regime: afasta 9.099/95, veda ANPP e a insignificância, atrai protetivas — mas confira se há efetivo contexto de gênero.
- **Sem jurisprudência de memória** — o 147-B é recente; confira via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
