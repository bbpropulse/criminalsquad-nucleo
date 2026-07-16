---
name: trancamento-inquerito-hc
description: >-
  Use ao elaborar RASCUNHO de habeas corpus com pedido específico de TRANCAMENTO DE INQUÉRITO
  POLICIAL — paralisar a investigação por atipicidade da conduta, ausência de justa causa, extinção
  da punibilidade ou ilegalidade manifesta, sob a excepcionalidade da via. Gatilhos: trancamento do
  inquérito, HC para trancar o IP, atipicidade da conduta investigada, falta de justa causa para
  investigar, investigação abusiva, IP…. Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, inquerito, hc]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-trancamento-inquerito-hc"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["trancamento-inquerito-hc", "trancamento inquerito"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Trancamento de Inquérito Policial via Habeas Corpus (CF, art. 5º, LXVIII; CPP, arts. 647-648)

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

Esta skill orienta a elaboração do **rascunho de habeas corpus** cujo pedido é o **trancamento do inquérito policial (IP)** — a extinção da investigação ainda na fase pré-processual, antes do oferecimento da denúncia. O fundamento constitucional é a proteção contra o **constrangimento ilegal** à liberdade de locomoção (CF, art. 5º, LXVIII; CPP, art. 648): a **simples existência** de um inquérito manifestamente ilegal já constitui coação passível de HC.

> **Lição central:** o trancamento de IP é medida **excepcional**. A regra é que o inquérito é peça informativa, dispensável e de investigação ampla — o Judiciário **não** interrompe a apuração por juízo de conveniência ou mérito probatório. Só se tranca quando a ilegalidade é **manifesta e demonstrável de plano**, sem necessidade de dilação probatória (prova pré-constituída). Se a tese exige revolver provas, o HC **não é a via** — a peça deve ser indeferida e o remédio é aguardar a instrução ou o arquivamento.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 647-648 do CPP e do art. 5º, LXVIII, da CF, além do regime de arquivamento do **art. 28 do CPP** (redação da Lei 13.964/2019 — Pacote Anticrime), cuja eficácia foi objeto de decisão do STF nas ADIs 6.298 e conexas. Confira toda súmula, tema e precedente via a skill `jurisprudencia-stj-stf` (ou o gate `verificacao-citacoes`) antes de fundamentar a peça. Nada de jurisprudência de memória.

## Base legal

- **CF, art. 5º, LXVIII** — cabimento do HC contra ilegalidade ou abuso de poder que ameace a liberdade de locomoção.
- **CPP, art. 647** — o HC protege quem sofre ou está ameaçado de sofrer violência/coação ilegal na liberdade de ir e vir.
- **CPP, art. 648** — hipóteses de coação ilegal: **falta de justa causa** (inc. I), **cessada a causa que autorizou a coação** (inc. II), **extinção da punibilidade** (inc. VII), entre outras. É o núcleo da fundamentação do trancamento.
- **CPP, arts. 4º a 23** — natureza, finalidade e disciplina do inquérito policial (peça informativa, presidida pela autoridade policial).
- **CPP, art. 28** (red. Lei 13.964/2019) — regime de arquivamento do IP pelo Ministério Público e controle interno.
- **CP, art. 107** — causas de extinção da punibilidade (prescrição, decadência, morte do agente, etc.) que podem fulminar a investigação.

## O que é (e o que não é) o trancamento do IP

O inquérito é **procedimento administrativo, inquisitivo e informativo**, destinado a apurar a autoria e a materialidade de infração penal para embasar (ou não) a ação penal. Por ser dispensável e não contraditório, seus vícios em regra **não** contaminam a futura ação penal e **não** justificam intervenção judicial precoce.

O **trancamento** é a exceção: interrompe-se a investigação porque sua continuidade é, por si só, um constrangimento ilegal. Cabe quando, à luz do que já está documentado, é **evidente** que nunca haverá justa causa para a ação penal — de modo que manter o investigado sob a pecha de um IP é coação sem lastro.

> **Fronteira decisiva — prova pré-constituída.** O HC é via de cognição sumária e **rito documental**: não admite instrução, testemunhas nem perícia. A ilegalidade tem de saltar dos autos (do próprio IP, dos documentos que o instruem, da peça de HC). Se a tese depende de "provar que o fato não ocorreu" ou de "pesar indícios", falta o pressuposto e o pedido não vinga.

## As quatro teses de trancamento (o coração da peça)

### 1) Atipicidade da conduta (formal ou material)

O fato investigado **não é crime**. Pode ser:
- **Atipicidade formal:** a conduta não se subsome a nenhum tipo penal (fato penalmente irrelevante; conduta lícita; mero ilícito civil/administrativo travestido de crime).
- **Atipicidade material:** incide o **princípio da insignificância** (bagatela) — ausência de lesividade relevante ao bem jurídico. Os vetores usualmente exigidos são mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão. **[NÃO VERIFICADO]** os requisitos e a aplicabilidade concreta (há restrições jurisprudenciais, ex.: reincidência, valor do bem, natureza do delito) — conferir via `jurisprudencia-stj-stf`.

> **Força da tese:** atipicidade é a tese **mais forte** de trancamento, porque é questão **de direito** aferível de plano — se o fato narrado não é crime, não há o que investigar, independentemente de prova.

### 2) Ausência de justa causa (CPP, art. 648, I)

Falta o **lastro probatório mínimo** que legitima a investigação — **inexistência de indício** de autoria e/ou de materialidade. Distinguir:
- **IP sem qualquer elemento** — instaurado sobre notícia vaga, anônima e não confirmada, ou sem indício de crime.
- **Investigação abusiva / desvirtuada** — IP usado como instrumento de pressão, sem apuração real, ou eternizado sem diligência útil (excesso de prazo abusivo na investigação).

> **Cuidado:** a "ausência de justa causa" para trancar exige que a **falta de lastro seja demonstrável de plano**. Se há algum indício e a defesa apenas o reputa insuficiente, a via é imprópria — insuficiência probatória se resolve na investigação/instrução, não por HC.

### 3) Extinção da punibilidade (CPP, art. 648, VII; CP, art. 107)

Já operou causa extintiva — tipicamente a **prescrição** (da pretensão punitiva pela pena máxima em abstrato, contada da data do fato até a instauração/andamento do IP), mas também **decadência** (nos crimes de ação privada/pública condicionada, ultrapassados os 6 meses), **morte do agente**, **abolitio criminis**, etc. Se a punibilidade está extinta, investigar é constrangimento ilegal manifesto — questão de direito, ideal para HC. *(Ver skill `prescricao` para o cálculo.)*

### 4) Ilegalidade manifesta na instauração ou na condução

Vícios que tornam ilegítimo o próprio inquérito, por exemplo:
- **Ausência de condição de procedibilidade** — falta de representação (ação penal pública condicionada) ou de requisição, ou instauração de IP em crime de ação privada sem provocação do ofendido.
- **Falta de justa causa duplicada / bis in idem investigativo** — IP sobre fato já arquivado (sem provas novas — em regra o desarquivamento exige elemento novo).
- **Incompetência absoluta / ilegitimidade da autoridade** ou vício insanável na origem.
- **Prova ilícita como único fundamento** — se toda a base do IP deriva de prova ilícita (e sua contaminação por derivação), pode faltar justa causa. **[NÃO VERIFICADO]** o alcance da teoria dos frutos da árvore envenenada no caso concreto — conferir.

## Estrutura da peça de HC de trancamento

O HC pode ser impetrado por **qualquer pessoa** em favor do paciente (CPP, art. 654) e **não exige capacidade postulatória**, mas na prática o advogado o subscreve. Estrutura recomendada:

```
1. ENDEREÇAMENTO
   - Ao Tribunal competente para julgar a autoridade coatora:
     · Autoridade coatora = Delegado de Polícia (preside o IP) e/ou o
       membro do MP que requisitou/mantém a investigação.
     · Competência: em regra, TJ ou TRF (a depender de quem coage e do
       foro). CONFIRMAR a competência caso a caso — é erro comum errar o
       tribunal e ver o HC não conhecido.

2. QUALIFICAÇÃO
   - Impetrante, paciente e autoridade coatora (identificar com precisão:
     é a autoridade que preside/mantém o IP, não a que apenas o registrou).
   - Indicar o número do IP / procedimento e a delegacia/promotoria.

3. DOS FATOS
   - Narrar objetivamente a instauração e o estado atual do IP.
   - Demonstrar o CONSTRANGIMENTO: a mera existência/tramitação do IP como
     coação ilegal à liberdade (ainda que sem prisão — a jurisprudência
     admite HC preventivo/liberatório pela ameaça à locomoção).

4. DO DIREITO — a tese de trancamento
   - Escolher e desenvolver a(s) tese(s): atipicidade / ausência de justa
     causa / extinção da punibilidade / ilegalidade manifesta.
   - Demonstrar que a ilegalidade é AFERÍVEL DE PLANO (prova pré-constituída),
     antecipando a objeção da "excepcionalidade" e do "não revolvimento de provas".
   - Subsunção explícita ao art. 648 do CPP (inciso pertinente).

5. DA LIMINAR (se cabível)
   - Requerer a suspensão do IP (ou de diligência gravosa) até o julgamento,
     demonstrando fumus boni iuris (ilegalidade manifesta) e periculum in mora
     (dano da continuidade da investigação).

6. DOS PEDIDOS
   - Concessão da ordem para TRANCAR o inquérito policial nº [...];
     subsidiariamente, o que couber (ex.: trancar quanto a um dos fatos/tipos).
   - Requisição de informações à autoridade coatora (CPP, art. 662).

7. DOCUMENTOS (prova pré-constituída) e fecho.
```

## Documentos a instruir (prova pré-constituída é indispensável)

1. **Procuração** (se subscrito por advogado — dispensável a rigor, mas usual).
2. **Cópia integral (ou peças essenciais) do IP** — portaria de instauração, boletim, relatórios — que demonstrem o vício de plano.
3. **Documentos que provem a tese** sem dilação: certidão de trânsito/óbito (extinção), documento que revele a atipicidade (contrato, nota fiscal, laudo já existente), decisão de arquivamento anterior (bis in idem), etc.
4. **Comprovante da existência e do estado do IP** (número, delegacia, data — para caracterizar a coação atual e o interesse de agir).

> Sem documento que demonstre a ilegalidade **de plano**, o HC é o remédio errado. A ausência de prova pré-constituída é a causa nº 1 de não conhecimento.

## Teses defensivas × contra-teses (a "excepcionalidade" que a acusação invoca)

| Tese defensiva (impetrante) | Contra-tese (MP / autoridade coatora) |
|---|---|
| Fato atípico — não há crime a investigar | O enquadramento típico é possível em tese; a atipicidade depende de análise do dolo/contexto (revolvimento de provas) |
| Ausência de justa causa — IP sem indício | Há elementos mínimos; a suficiência se afere na investigação, não por HC |
| Punibilidade extinta (prescrição/decadência) | Marco interruptivo/termo inicial controvertido — questão de fato |
| Prova ilícita contamina o IP | A ilicitude/derivação exige exame aprofundado, incabível na via estreita |
| Insignificância (bagatela) | Requisitos não preenchidos (reincidência, valor, reprovabilidade) |

> **Regra de ouro da defesa:** ancorar a tese em **questão de direito** ou em **fato incontroverso documentado**. Quanto mais a tese depender de valoração de prova, mais frágil é o trancamento — e mais provável a resposta "a via eleita não comporta dilação probatória".

## O que esta skill NÃO é (distinções que evitam erro de peça)

- **≠ HC genérico (`habeas-corpus`)** — aquela é a skill ampla da ação de HC (liberdade de locomoção em geral: prisão ilegal, excesso de prazo, relaxamento). Esta é o **recorte específico** do HC cujo pedido é trancar a **fase investigativa**.
- **≠ Trancamento de AÇÃO PENAL** — quando a **denúncia já foi recebida**, o objeto é outro (rejeição/inépcia da denúncia, falta de justa causa para a ação já instaurada). Os requisitos e o momento diferem; use a skill própria.
- **≠ Inépcia da denúncia (`inepcia-denuncia-generica`)** — aquela ataca a **peça acusatória já oferecida** (art. 41 e 395 do CPP); esta ataca o **IP**, antes da denúncia.
- **≠ Pedido de arquivamento** — o arquivamento é requerido/decidido no fluxo do próprio IP (MP, art. 28 do CPP); o trancamento por HC é o caminho **judicial e excepcional** quando a via ordinária não estanca a ilegalidade.

## Súmulas e precedentes relevantes (todos sob o Citation Gate)

> **NÃO cite nenhum número de julgado, informativo ou tema de memória.** Ensine a tese e o dispositivo; confirme cada referência via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de peticionar.

- **Excepcionalidade do trancamento** — é firme na jurisprudência de STF e STJ que o trancamento de IP/ação penal por HC é medida excepcional, cabível só quando a atipicidade, a ausência de justa causa ou a extinção da punibilidade se mostram **de plano**, sem exame aprofundado de provas. **[NÃO VERIFICADO]** os precedentes específicos que consolidam essa orientação — conferir.
- **Súmula 524/STF** — arquivado o IP por despacho do juiz, a pedido do MP, **não pode a ação penal ser iniciada sem novas provas**. Relevante para a tese de bis in idem investigativo (reabertura sem elemento novo). *(Conferir redação e vigência.)*
- **Princípio da insignificância** — os vetores e as restrições (reincidência, habitualidade, natureza do delito) são objeto de farta e oscilante jurisprudência. **[NÃO VERIFICADO]** — conferir o estado atual antes de sustentar bagatela.
- **Regime do art. 28 do CPP (Pacote Anticrime)** — a nova sistemática de arquivamento pelo MP teve eficácia discutida no STF (ADIs). **[NÃO VERIFICADO]** o estado atual da vigência/modulação — conferir antes de invocar.

## Erros comuns / anti-padrões (evitar)

- **Pedir trancamento com tese que exige prova** — a objeção "não se revolve prova em HC" é fatal. Reserve o HC para atipicidade, extinção da punibilidade e ausência **manifesta** de lastro.
- **Não instruir com prova pré-constituída** — sem documento que revele a ilegalidade de plano, o HC não é conhecido.
- **Errar a autoridade coatora / a competência** — apontar quem apenas registrou o fato, e não quem preside/mantém o IP; ou endereçar ao tribunal errado. HC não conhecido.
- **Confundir com trancamento de ação penal** — usar fundamentos de rejeição de denúncia (art. 395) num IP em que **ainda não há** denúncia.
- **Tratar insuficiência de indícios como ausência de justa causa** — insuficiência se resolve na investigação; só a **ausência manifesta** de lastro tranca.
- **Ignorar o caráter dispensável do IP** — muitos vícios do inquérito não contaminam a ação penal futura e, por isso, não autorizam trancamento (o STJ costuma dizer que irregularidade do IP não anula a ação).
- **Citar jurisprudência de memória** — sanção real por precedente inventado; tudo passa pelo gate.

## Checklist final

- [ ] A tese é **questão de direito** ou **fato incontroverso documentado** (não exige dilação)?
- [ ] A peça está instruída com **prova pré-constituída** que revela a ilegalidade **de plano**?
- [ ] A tese foi corretamente enquadrada no **art. 648 do CPP** (inciso pertinente)?
- [ ] O caso é de **IP** (antes da denúncia) — e não de ação penal já instaurada?
- [ ] **Autoridade coatora** identificada com precisão (quem preside/mantém o IP)?
- [ ] **Competência** do tribunal endereçado conferida?
- [ ] O **constrangimento ilegal** (coação à liberdade pela existência do IP) está demonstrado?
- [ ] Se prescrição/decadência: cálculo conferido (ver `prescricao`)?
- [ ] **Liminar** avaliada (suspensão do IP) com fumus + periculum, se cabível?
- [ ] Todas as súmulas/precedentes conferidos via `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] Antecipada a objeção da **excepcionalidade** e do **não revolvimento de provas**?

## Lembretes finais

- **Excepcionalidade primeiro** — o trancamento é exceção; a peça deve provar que a ilegalidade é manifesta e aferível de plano.
- **Atipicidade e extinção da punibilidade** são as teses mais robustas (questão de direito); **ausência de justa causa** exige lastro-zero demonstrável; **insignificância** é oscilante — confira.
- **Prova pré-constituída é o passaporte** do HC — sem ela, não há via.
- **IP ≠ ação penal ≠ denúncia** — cada objeto tem sua skill e seu momento.
- **Conferir vigência** do art. 28 do CPP e de toda súmula/precedente via `jurisprudencia-stj-stf` antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho, não peça final. A responsabilidade pela impetração, pela estratégia e pelas citações é sempre do **advogado** subscritor (Estatuto da OAB; Código de Ética e Disciplina; **Provimento 205/2021** do CFOAB sobre uso de tecnologia/IA na advocacia). Nenhuma súmula, tese ou precedente pode ser citado sem passar pelo **Citation Gate** (`verificacao-citacoes` / `jurisprudencia-stj-stf`) — há sanções reais por jurisprudência inventada por IA. A revisão final do profissional é obrigatória antes de protocolar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
