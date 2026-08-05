---
name: standard-probatorio-in-dubio-pro-reo
description: >-
  Use ao redigir a tese de absolvição por insuficiência de prova — o standard 'além de dúvida
  razoável' (BARD), o ônus INTEGRAL da acusação (art. 156 CPP), o teste de suficiência (o que sobra
  da acusação depois de excluídos os elementos frágeis) e a subsunção ao art. 386, VII do CPP. É o
  fecho argumentativo que dá unidade à análise probatória e alimenta memoriais, apelação e plenário.
  Gatilhos: in dubio pro reo, dúvida… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-standard-probatorio-in-dubio-pro-reo"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["standard-probatorio-in-dubio-pro-reo", "standard probatorio", "probatorio dubio"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Standard Probatório e In Dubio Pro Reo (CPP arts. 156 e 386, VII; CF art. 5º, LVII)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill fornece o **arcabouço teórico e a fórmula da tese de insuficiência probatória** — o argumento para o qual toda defesa converge no fecho das alegações finais, da apelação e do plenário. Ela define o **patamar de convencimento exigido para condenar** ("além de dúvida razoável"), ancora o **ônus integral da prova na acusação** (art. 156 do CPP), ensina o **teste de suficiência** (o que resta da imputação depois de excluídos os elementos frágeis) e amarra todos os achados parciais na **subsunção ao art. 386, VII do CPP** (absolvição por insuficiência de prova).

Não é a skill que *produz* as contradições nem a que *estrutura* a peça inteira — é o **cimento argumentativo** que transforma achados dispersos ("esta testemunha se contradiz", "o laudo é lacunar") em uma **tese jurídica autônoma**: a de que o conjunto probatório não atinge o patamar constitucional para condenar.

> **Lição central:** a defesa **não precisa provar a inocência** — precisa **instaurar a dúvida razoável**. O ônus é integralmente da acusação (art. 156, primeira parte). O erro mais comum é a defesa "assumir" o encargo de demonstrar que o réu é inocente; a técnica correta é **demonstrar que a acusação não se desincumbiu do seu**. Absolve-se por **insuficiência** (art. 386, VII) tanto quanto por prova da inocência (art. 386, I e IV) — e a insuficiência é o terreno mais largo e mais seguro.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. **156 e 386 do CPP** e do art. **5º, LVII, da CF** na fonte oficial. Qualquer súmula, tema, informativo ou acórdão citado abaixo é **hipótese a confirmar** — passe **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pela best-practice `verificacao-citacoes`) antes de fundamentar a peça. Na dúvida, **ensine a tese e cite o dispositivo** — omitir um número de acórdão vence inventá-lo.

## Base legal

- **CPP, art. 156, primeira parte** — "A prova da alegação incumbirá a quem a fizer". No processo penal, quem alega o fato criminoso é a **acusação**; o ônus da prova da autoria e da materialidade é **dela**, e é **integral e indivisível**.
- **CPP, art. 386, VII** — o juiz absolverá o réu quando "não existir prova suficiente para a condenação". É a **cláusula de absolvição por insuficiência** — o destino processual da dúvida razoável.
- **CPP, art. 386** (demais incisos) — o rol de fundamentos de absolvição; útil para escolher o inciso correto (ver quadro adiante).
- **CF, art. 5º, LVII** — "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória" — a **presunção de inocência**, matriz constitucional do in dubio pro reo e da regra de que o **estado de dúvida milita a favor do réu**.
- **CADH (Pacto de San José da Costa Rica), art. 8.2** — presunção de inocência no plano convencional (controle de convencionalidade; incorporada pelo Decreto 678/1992).
- **Standard "beyond a reasonable doubt" (BARD)** — o patamar de convencimento "além de dúvida razoável", referência dogmática do grau de certeza exigido para condenar. Não é dispositivo de lei brasileiro, mas é o **conteúdo** que a doutrina e a jurisprudência atribuem à presunção de inocência aplicada ao juízo condenatório.

## O que é "standard probatório" — e por que ele é decisivo

**Standard probatório** é o **grau de convencimento** que a prova precisa alcançar para autorizar uma decisão. Não é sobre *como* se valora a prova (isso é livre convencimento motivado, art. 155 CPP), mas sobre **quanto** de certeza a decisão exige.

O ponto central da tese: **o juízo condenatório exige o standard MAIS ALTO** — "além de dúvida razoável". Não basta que a versão acusatória seja **plausível**, nem sequer que seja a **mais provável** que a defensiva. A **preponderância de probabilidade** (o standard do processo civil, "mais provável que não") é **insuficiente** para condenar. Enquanto subsistir uma **hipótese defensiva razoável e compatível com as provas**, não há certeza para condenar — e a dúvida se resolve **pro reo**.

> **Formulação-chave da tese:** "Para condenar, não basta que a hipótese acusatória seja possível ou provável; é preciso que seja a **única compatível** com o conjunto probatório, afastando qualquer hipótese razoável de inocência. Persistindo hipótese defensiva razoável, impõe-se a absolvição (art. 386, VII, CPP)."

## O ônus integral da acusação (art. 156) — e o que a defesa NÃO precisa fazer

| A acusação DEVE provar (ônus integral) | A defesa NÃO precisa provar |
|---|---|
| A **materialidade** (existência do fato típico) | Que o fato não ocorreu |
| A **autoria** (que foi o réu) | Que outra pessoa o cometeu |
| O **dolo/elemento subjetivo** | A ausência de dolo |
| A **inexistência** de causas de exclusão suscitadas com base mínima | A inocência em sentido positivo |

- **Presunção de inocência como regra de julgamento:** na dúvida, absolve-se. A dúvida não é neutra — ela tem **destinatário certo** (o réu).
- **Cuidado com a inversão do ônus:** é vício comum a sentença condenatória que reprova o réu por "não ter provado sua versão" (ex.: não ter comprovado o álibi, não ter explicado a origem do bem). Isso **inverte o art. 156** e viola a presunção de inocência. A defesa deve **nominar essa inversão** como erro de julgamento.
- **Standard mínimo ≠ standard condenatório.** Para atos de mera **admissibilidade** (recebimento da denúncia, decreto de prisão, pronúncia) basta juízo de probabilidade / *fumus commissi delicti*. **Não se pode importar esse patamar mínimo para a sentença condenatória.** Confundir "há indícios suficientes para receber a denúncia" com "há prova suficiente para condenar" é erro grave — e é justamente o que a tese de insuficiência denuncia.

## O teste de suficiência — o método (passo a passo)

O teste de suficiência é o **procedimento** que converte achados parciais na tese de insuficiência. É o que dá unidade à análise probatória.

**1. Isolar os elementos de prova da CONDENAÇÃO.** Liste, um a um, os elementos em que a acusação apoia materialidade e autoria (depoimento X, laudo Y, reconhecimento Z, confissão informal na fase policial, etc.).

**2. Filtrar por qualidade — excluir o que não sustenta condenação.** Passe cada elemento pelos filtros:
   - **Prova exclusivamente do inquérito** não repetida em juízo → **art. 155 CPP**: não pode ser o **único** fundamento da condenação (o convencimento não pode basear-se exclusivamente nos elementos informativos colhidos na investigação). Marque para exclusão do núcleo condenatório.
   - **Prova ilícita ou derivada** → **art. 157 CPP** + CF, art. 5º, LVI: **desentranha-se**; some-a à teoria dos frutos da árvore envenenada (usar com a skill de cadeia de custódia / provas ilícitas, se houver).
   - **Prova oral frágil** (contradições internas, contradição com a materialidade, interesse da testemunha, "ouvir dizer") → depurar com a skill `matriz-contradicoes-prova-oral`.
   - **Reconhecimento de pessoa em desacordo com o art. 226 do CPP** → valor probatório fortemente diminuído; reconhecimento viciado não sustenta, sozinho, condenação. **[NÃO VERIFICADO — há orientação do STJ endurecendo a observância do art. 226; conferir tese e precedente atual via `jurisprudencia-stj-stf`.]**
   - **Laudo lacunar, cadeia de custódia quebrada, ausência de exame de corpo de delito** em crime que deixa vestígios (**art. 158 CPP**) → materialidade comprometida.

**3. Perguntar: "o que SOBRA?"** Depois de excluídos os elementos frágeis, ilícitos e meramente inquisitoriais, **o que resta** sustenta a condenação *além de dúvida razoável*?
   - Se sobra **apenas prova do inquérito** → art. 155 impede a condenação.
   - Se sobra **um único elemento frágil** (uma só testemunha interessada, um reconhecimento viciado) → não atinge o standard.
   - Se **nada sobra** que seja lícito, judicializado e coerente → materialidade e/ou autoria não provadas.

**4. Formular a hipótese defensiva razoável.** A dúvida ganha força quando existe uma **narrativa alternativa compatível com as provas** (não precisa estar provada — basta ser **razoável** e **não excluída**). "Os mesmos fatos comportam a leitura de que [...], que a acusação não afastou."

**5. Subsumir ao art. 386, VII.** Fechar: excluídos os elementos frágeis, o que resta não permite juízo de certeza; subsiste hipótese defensiva razoável; logo, **não existe prova suficiente para a condenação** — absolvição com fundamento no art. 386, VII, do CPP.

## Escolha do inciso do art. 386 (não confundir)

| Inciso | Fundamento | Quando usar |
|---|---|---|
| I | está provada a **inexistência do fato** | há prova positiva de que o fato não ocorreu |
| II | não há prova da **existência do fato** | materialidade não demonstrada |
| III | o fato **não constitui infração penal** (atipicidade) | fato existe, mas é atípico |
| IV | está provado que o réu **não concorreu** para a infração | prova positiva de negativa de autoria (ex.: álibi provado) |
| V | **não existir prova de ter o réu concorrido** para a infração | autoria não demonstrada |
| VI | existir **circunstância que exclua o crime** ou isente de pena (ou **fundada dúvida** sobre ela) | excludente de ilicitude/culpabilidade — inclusive na dúvida |
| **VII** | **não existir prova suficiente para a condenação** | **a cláusula-mãe da insuficiência — o terreno do in dubio pro reo** |

> **Regra prática:** o inciso VII é o **mais seguro e mais amplo**, porque não exige prova positiva de nada — basta a **insuficiência**. Sempre que a tese é "a dúvida não foi vencida", o fundamento é o **VII** (e, no cabimento, cumulado com o V, quando o déficit é especificamente de autoria, ou com o VI, quando a dúvida recai sobre excludente). **In dubio pro reo aplica-se também às excludentes**: a dúvida fundada sobre legítima defesa, por exemplo, resolve-se pela absolvição (art. 386, VI, parte final).

## Teses (defensiva e contra-tese da acusação)

**Teses defensivas (a favor da insuficiência):**
1. **O standard condenatório é o mais alto (BARD).** Plausibilidade e preponderância não bastam; exige-se certeza além de dúvida razoável.
2. **O ônus é integral da acusação (art. 156).** A defesa não tem o encargo de provar a inocência; a sentença que a reprova por não provar sua versão inverte o ônus e viola a presunção de inocência.
3. **Art. 155 CPP:** condenação não pode assentar-se **exclusivamente** em elementos do inquérito não repetidos em juízo.
4. **Hipótese defensiva razoável não afastada** → dúvida razoável → art. 386, VII.
5. **In dubio pro reo alcança as excludentes** (art. 386, VI, parte final): a dúvida fundada sobre justificante ou dirimente também absolve.
6. **Vedação da responsabilidade penal objetiva e do standard mínimo importado:** o juízo de admissibilidade (indícios) não se confunde com o juízo de certeza (condenação).

**Contra-teses da acusação (a antecipar e neutralizar):**
- "O conjunto é **harmônico** e a versão acusatória é a mais verossímil" → responder: **verossimilhança não é certeza**; enquanto houver hipótese defensiva razoável, não há standard para condenar.
- "A palavra da vítima tem **especial valor** em crimes cometidos às ocultas" → responder: valor **relativo** e **condicionado à coerência e à harmonia com o restante da prova**; palavra isolada, contraditória ou desmentida por prova técnica não sustenta condenação além de dúvida razoável. **[Orientação sobre o peso da palavra da vítima — conferir alcance e limites via `jurisprudencia-stj-stf`.]**
- "Os elementos do inquérito **corroboram** a prova judicial" → responder: corroboração exige **prova judicial idônea a corroborar**; se o núcleo é inquisitorial, o art. 155 barra.
- "A defesa não apresentou álibi / não provou sua tese" → responder: **inversão do ônus (art. 156)** — a defesa não tem esse encargo.

## Súmulas e dispositivos de apoio (conferir vigência via `jurisprudencia-stj-stf`)

- **CPP, art. 155** — o convencimento não pode fundar-se **exclusivamente** nos elementos informativos colhidos na investigação (motor da tese "o que sobra depois de excluído o inquérito").
- **CPP, art. 157** — inadmissibilidade e desentranhamento das **provas ilícitas** e derivadas.
- **CPP, art. 158** — **exame de corpo de delito** indispensável nas infrações que deixam vestígios (a confissão não o supre).
- **CPP, art. 226** — procedimento legal do **reconhecimento de pessoas** (parâmetro de validade).
- **Súmula 74/STJ** — a prova da **menoridade** do réu exige documento hábil (exemplo de que certos fatos reclamam prova específica; usar por analogia argumentativa, com cautela).
- **[NÃO VERIFICADO]** Precedentes do **STJ/STF** sobre: (a) impossibilidade de condenação lastreada **só** em prova do inquérito (art. 155); (b) reconhecimento fotográfico/pessoal em desacordo com o art. 226 e seu valor probatório; (c) limites da palavra da vítima; (d) in dubio pro reo como regra de julgamento. **Não cite número de HC/REsp/RE/Tema/Informativo de memória — recupere e confirme cada um via `jurisprudencia-stj-stf` antes de inserir na peça.**

## Esqueleto da tese (para colar em memoriais / apelação / plenário)

```
DA INSUFICIÊNCIA PROBATÓRIA — ABSOLVIÇÃO (ART. 386, VII, DO CPP)

1. Do standard de prova exigido para condenar.
   A condenação criminal reclama o mais elevado grau de convencimento —
   certeza além de dúvida razoável —, corolário da presunção de inocência
   (CF, art. 5º, LVII; CADH, art. 8.2). Não basta a plausibilidade nem a
   preponderância da versão acusatória: enquanto subsistir hipótese
   defensiva razoável e compatível com as provas, não há certeza que
   autorize a condenação.

2. Do ônus integral da acusação (art. 156 do CPP).
   O encargo de provar a [materialidade e a] autoria é, integralmente, da
   acusação. À defesa não incumbe provar a inocência, mas apenas instaurar
   a dúvida razoável. [Se for o caso: a r. sentença/denúncia inverte esse
   ônus ao reprovar o réu por não ter comprovado sua versão — o que viola
   o art. 156 e a presunção de inocência.]

3. Do teste de suficiência — o que resta da acusação.
   Excluídos os elementos que não sustentam condenação — [prova do inquérito
   não repetida em juízo (art. 155); prova ilícita (art. 157); prova oral
   contraditória; reconhecimento em desacordo com o art. 226; laudo lacunar]
   —, o que remanesce é [DESCREVER O QUE SOBRA]. Esse acervo não permite
   juízo de certeza sobre a autoria/materialidade.

4. Da hipótese defensiva razoável não afastada.
   Os mesmos fatos comportam a leitura de que [HIPÓTESE ALTERNATIVA], que a
   acusação não excluiu. Persistindo essa dúvida razoável, ela milita a
   favor do réu (in dubio pro reo).

5. Da subsunção ao art. 386, VII.
   Não existindo prova suficiente para a condenação, impõe-se a ABSOLVIÇÃO,
   com fundamento no art. 386, VII, do CPP.
```

**Campos a preencher:** [DESCREVER O QUE SOBRA], [HIPÓTESE ALTERNATIVA], e o recorte de materialidade/autoria conforme o caso.

> **No plenário do júri:** a insuficiência probatória é o combustível do **quesito genérico de absolvição** ("O jurado absolve o acusado?", art. 483, §2º, CPP) — a dúvida razoável autoriza absolver por **qualquer** fundamento, inclusive a simples ausência de certeza. Articular com a skill `juri-quesitacao` e com a sustentação em plenário.

## Erros comuns / anti-padrões (evitar)

- **Assumir o ônus da inocência.** Prometer "provar que o réu é inocente" em vez de "demonstrar que a acusação não provou a culpa". Reformule sempre para o registro da **insuficiência**.
- **Confundir os standards.** Tratar "indícios suficientes para denunciar/pronunciar" como se equivalessem a "prova suficiente para condenar". São patamares diferentes.
- **Pedir absolvição pelo inciso errado.** Invocar o art. 386, I ou IV (que exigem prova **positiva** da inocência) quando o caso é de **insuficiência** (inciso VII). Escolha o inciso pelo que a prova permite afirmar.
- **Deixar a tese pulverizada.** Apontar contradições e lacunas sem **fechar** no teste de suficiência e no art. 386, VII — os achados parciais precisam convergir para uma tese jurídica única.
- **Esquecer o art. 155.** Não denunciar que o núcleo condenatório é meramente inquisitorial quando a prova judicial é vazia.
- **Ignorar o in dubio pro reo nas excludentes.** A dúvida fundada sobre legítima defesa/estado de necessidade também absolve (art. 386, VI, parte final) — não é só sobre autoria.
- **Citar jurisprudência de memória.** Inserir número de acórdão, Tema ou Informativo sem passar pelo gate. Sanção real por citação inventada.

## Checklist final

- [ ] A tese está formulada como **insuficiência** (ônus da acusação), e não como "prova da inocência"?
- [ ] O **standard condenatório (BARD)** foi explicitado e distinguido da plausibilidade/preponderância?
- [ ] O **ônus integral da acusação (art. 156)** está afirmado — e eventual **inversão** na sentença foi denunciada?
- [ ] O **teste de suficiência** foi aplicado (isolar → filtrar → "o que sobra?") e está **escrito** na peça?
- [ ] Os filtros foram usados: **art. 155** (só inquérito), **art. 157** (ilícita), prova oral frágil (`matriz-contradicoes-prova-oral`), **art. 226** (reconhecimento), **art. 158** (corpo de delito)?
- [ ] Há uma **hipótese defensiva razoável** enunciada e apontada como **não afastada**?
- [ ] A subsunção fechou no **inciso correto do art. 386** (em regra o **VII**; combinado com V/VI se couber)?
- [ ] Toda súmula/tese/precedente passou por **`jurisprudencia-stj-stf`** / `verificacao-citacoes`?
- [ ] No júri: a tese foi articulada com o **quesito genérico de absolvição** (art. 483, §2º)?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à construção da tese de insuficiência probatória — não substitui o juízo do(a) advogado(a) responsável nem a leitura integral dos autos concretos. A escolha do inciso do art. 386, a formulação da hipótese defensiva e a valoração da prova dependem do caso.
- **Citation Gate inegociável.** Nenhuma súmula, tese, tema ou acórdão vai à peça sem confirmação via `jurisprudencia-stj-stf` (best-practice `verificacao-citacoes`). Há sanções reais por jurisprudência inventada por IA. Dispositivos de lei podem ser citados livremente após conferir a **redação vigente** na fonte oficial.
- **Ética profissional conforme o polo.** Na advocacia, observância do Estatuto da OAB, do Código de Ética e Disciplina e do **Provimento 205/2021** (uso de IA e publicidade). Esta é uma skill **de defesa** — a insuficiência probatória é argumento do réu; a acusação opera com o ônus da prova e não com esta tese.
- **Encadeamento recomendado:** alimente-se de `matriz-contradicoes-prova-oral` (matéria-prima da prova oral) e entregue a tese pronta a `memoriais`, à apelação e ao plenário. Ao redigir a peça, aplique também `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
