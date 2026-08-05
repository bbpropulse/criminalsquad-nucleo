---
name: assistente-reparacao-quantum-387
description: >-
  Use ao formular, quantificar e sustentar o PEDIDO DE VALOR MÍNIMO de indenização à vítima na ação
  penal (art. 387, IV, CPP) — o memorial de danos materiais e morais que blinda a fixação na
  sentença e serve de título para a execução civil. Gatilhos: valor mínimo de indenização, art. 387
  IV CPP, reparação do dano na sentença penal, dano moral in re ipsa, Tema 983 STJ (violência
  doméstica), Tema…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-reparacao-quantum-387"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-reparacao-quantum-387", "assistente reparacao", "reparacao quantum"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Valor Mínimo de Reparação à Vítima (art. 387, IV, CPP)

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

Esta skill orienta o **assistente de acusação** (advogado do ofendido ou de seus sucessores habilitados na ação penal pública) a **formular, quantificar e sustentar o pedido de valor mínimo de indenização** que o juiz penal fixa na sentença condenatória, com base no **art. 387, IV, do CPP** (redação da Lei 11.719/2008). É a **fronteira penal-cível** de maior valor econômico para a vítima: o que se fizer aqui vira **título executivo** no cível, dispensando nova fase de conhecimento sobre o *an debeatur*.

> **Lição central:** o art. 387, IV, não se auto-executa. Ele **exige pedido expresso e prova do dano**, sob **contraditório**, para blindar a fixação. O erro que aniquila o direito da vítima é tratar o valor mínimo como consequência automática da condenação — a jurisprudência anula a fixação feita **de ofício ou por surpresa**. Sem pedido articulado e sem oportunidade de defesa sobre o *quantum*, a reparação cai no recurso.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 387, IV, do CPP e o estado atual dos **Temas 983 e 1197 do STJ** — teses de repetitivos podem ser revistas, moduladas ou complementadas. Todo Tema, súmula, informativo ou acórdão citado passa **obrigatoriamente** pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` **antes** de ir para a peça. Melhor faltar precedente do que citar julgado inexistente.

## Base legal

- **Art. 387, IV, CPP** — o juiz, ao proferir sentença condenatória, **fixará valor mínimo para reparação dos danos** causados pela infração, considerando os prejuízos sofridos pelo ofendido.
- **Art. 387, §2º, CPP** — detração para fins de regime (não confundir com o inciso IV; é dispositivo distinto do mesmo artigo).
- **Art. 63, parágrafo único, CPP** — transitada em julgado a sentença, a execução pode ser efetuada **pelo valor fixado** nos termos do art. 387, IV, **sem prejuízo da liquidação** do que exceder.
- **Art. 64, CPP** — a ação civil *ex delicto* pode correr no juízo cível; a condenação penal não impede a busca do que superar o mínimo.
- **Art. 515, VI, CPC** — a **sentença penal condenatória transitada em julgado** é **título executivo judicial** no cível.
- **Art. 297 do CPC (por analogia)** — poder geral de efetivação; e o dever de fundamentação (art. 489, §1º, CPC; art. 93, IX, CF) exige que a fixação do *quantum* seja motivada, o que só é possível se houver pedido e prova nos autos.
- **Lei 11.340/2006 (Maria da Penha)** — base da tese do **dano moral presumido** em violência doméstica (Tema 983/STJ).
- **Súmula 387/STJ** — *lícita a cumulação das indenizações de dano estético e dano moral* (útil para justificar parcelas distintas do memorial). Conferir vigência via `jurisprudencia-stj-stf`.

## O que a skill genérica não faz (e esta faz)

A skill `assistente-acusacao` menciona o art. 387, IV, em um parágrafo e no checklist, mas **não operacionaliza** o *quantum*. Esta skill entrega o **método**: como (1) estruturar o **memorial probatório** do valor, (2) distinguir **dano material** (que exige prova) de **dano moral** (in re ipsa nas hipóteses admitidas), (3) articular os **repetitivos do STJ**, (4) garantir o **contraditório** para evitar anulação por surpresa, e (5) **recorrer** da omissão ou do subdimensionamento.

Não confundir com `memoriais` (alegações finais completas da defesa ou do MP) nem com `assistente-execucao-civil-ex-delicto` (que **cobra** o valor já fixado, depois do trânsito). Aqui o foco é **produzir e sustentar o título** dentro da ação penal.

## As duas espécies de dano — método de quantificação

A distinção entre dano material e dano moral governa **o que precisa de prova** e **como se pede**.

### 1) Dano material (emergente + lucros cessantes) — EXIGE prova documental

O dano material **nunca** é presumido. Cada parcela deve estar **provada e documentada** nos autos.

- **Danos emergentes:** despesas médicas, hospitalares, medicamentos, fisioterapia, funeral (em homicídio), reparo/reposição do bem (em patrimoniais), transporte, laudos.
- **Lucros cessantes:** o que a vítima **deixou de ganhar** — dias parados, incapacidade laborativa (temporária ou permanente), pensão aos dependentes no homicídio (com base na renda da vítima e na expectativa de vida).
- **Prova:** notas fiscais, recibos, relatórios médicos, carteira de trabalho/holerite, declaração de imposto de renda, laudo pericial de incapacidade. **O que não estiver comprovado, remete-se à liquidação no cível** (art. 63, parágrafo único, CPP) — não se "chuta" dano material.

### 2) Dano moral — pode ser in re ipsa nas hipóteses admitidas

O dano moral decorre da **lesão a direito da personalidade** (honra, integridade, dignidade). Em certas hipóteses é **presumido (in re ipsa)** — dispensa prova do sofrimento, bastando o fato criminoso.

- **Violência doméstica e familiar contra a mulher (Lei 11.340/2006):** o **Tema 983 do STJ** [NÃO VERIFICADO — confira número, redação e vigência via `jurisprudencia-stj-stf`] firma que o dano moral é **in re ipsa**, presumido do próprio ato de violência, **dispensando instrução probatória específica** sobre o abalo, desde que **haja pedido na denúncia ou na inicial do assistente**.
- **Pedido expresso e contraditório:** o **Tema 1197 do STJ** [NÃO VERIFICADO — confira número, redação e vigência via `jurisprudencia-stj-stf`] é o eixo de que a fixação do art. 387, IV, **depende de pedido expresso** (do MP, do ofendido ou do assistente) e de **oportunidade de contraditório** ao réu sobre o *quantum*. **Tese a sustentar, mesmo sem o número:** o dispositivo e o dever de fundamentação (art. 489, §1º, CPC) impõem pedido + prova + contraditório; a fixação de ofício é nula por violação à ampla defesa.
- **Homicídio, lesão grave, crimes sexuais:** o dano moral aos sucessores/vítima costuma ser reconhecido pela **gravidade objetiva do fato**, mas **não presuma o patamar de VD para todo crime** — fora das hipóteses de *in re ipsa* consolidadas, articule os elementos concretos (gravidade, repercussão, condição das partes).

> **Regra de ouro do quantum moral:** não existe tabela. O valor segue os critérios de **proporcionalidade e razoabilidade**, ponderando (a) gravidade do fato, (b) intensidade do dano, (c) condições econômicas do réu, (d) caráter pedagógico/punitivo, (e) vedação ao enriquecimento sem causa. **Fundamente cada critério** — valor "cravado" sem motivação é alvo fácil de reforma.

## Estrutura do MEMORIAL DE DANOS (o núcleo da peça)

O memorial é apresentado nas **alegações finais** do assistente (ou em petição autônoma antes da sentença, sempre com ciência à parte contrária). Estrutura sugerida:

```
I    — DA HABILITAÇÃO E DA LEGITIMIDADE
       (assistente já admitido — arts. 268-273 CPP; ou requerer a habilitação)

II   — DO PEDIDO EXPRESSO DE FIXAÇÃO DO VALOR MÍNIMO (art. 387, IV, CPP)
       Deixar CLARO e destacado que se pede a fixação — é o pressuposto de
       validade (Tema 1197/STJ). Requerer que o réu tenha vista para
       manifestar-se sobre o quantum (contraditório).

III  — DO DANO MATERIAL (com prova)
       a) Danos emergentes — lista item a item, com remissão ao documento (fl./ev.)
       b) Lucros cessantes / pensão — memória de cálculo
       c) Total do dano material comprovado: R$ [...]
       (O que não comprovado → pedir remessa à liquidação, art. 63, § único)

IV   — DO DANO MORAL
       a) Fundamento: lesão a direito da personalidade
       b) Se VD: in re ipsa (Tema 983/STJ) — dispensa prova do abalo
       c) Critérios de arbitramento (proporcionalidade/razoabilidade) aplicados
          ao caso concreto, um a um
       d) Valor sugerido: R$ [...] (sempre "no mínimo", nunca teto)

V    — DA CONSOLIDAÇÃO DO QUANTUM
       Valor mínimo total requerido = dano material comprovado + dano moral
       arbitrado. Deixar expresso que é MÍNIMO (art. 63, § único: o excedente
       vai à liquidação no cível).

VI   — DOS PEDIDOS
       a) Fixação do valor mínimo do art. 387, IV, no montante de R$ [...]
       b) Abertura de vista ao réu sobre o quantum (contraditório)
       c) Correção monetária e juros — definir termos iniciais
```

> **Correção e juros (definir na peça):** peça expressamente correção monetária e juros e **indique os termos iniciais** — em regra, correção a partir do arbitramento e juros de mora a contar do evento danoso (responsabilidade extracontratual). **Confirme o entendimento atual sobre os marcos** via `jurisprudencia-stj-stf`; súmulas de juros/correção (ex.: Súmula 54/STJ sobre juros desde o evento em ato ilícito) devem ser conferidas antes de citar.

## Teses do assistente (acusação) × contra-teses (defesa)

| Ponto | Tese do assistente (vítima) | Contra-tese da defesa |
|---|---|---|
| **Pedido** | Basta pedido expresso do MP, do ofendido **ou** do assistente; consta da denúncia/memorial | Sem pedido específico e sem contraditório, a fixação é nula (surpresa) |
| **Dano moral em VD** | *In re ipsa* — presumido do ato (Tema 983/STJ); dispensa prova do abalo | Fora da VD, dano moral exige demonstração; patamar de VD não se estende a todo crime |
| **Dano material** | Comprovado por documento; excedente à liquidação | Parcela não documentada **não** pode entrar no mínimo — remeter ao cível |
| **Quantum** | Proporcional à gravidade e ao caráter pedagógico | Excessivo; enriquecimento sem causa; ignora capacidade do réu |
| **Fixação de ofício** | Se houver pedido nos autos, o juiz deve fixar motivadamente | Ausente pedido/contraditório, cabe anular só o capítulo indenizatório |

> **Contraditório é escudo, não formalidade:** o assistente que **pede e garante vista ao réu** blinda a fixação. A nulidade do art. 387, IV, costuma ser **relativa e restrita ao capítulo civil** — a defesa a suscita para derrubar o valor sem tocar na condenação penal. Antecipe-se: peça o contraditório você mesmo.

## Súmulas e repetitivos (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 387/STJ** — cumulação de dano estético e dano moral (justifica parcelas distintas). *Conferir.*
- **Súmula 54/STJ** — juros de mora desde o evento danoso em responsabilidade extracontratual. *Conferir marco no caso.*
- **Tema 983/STJ** — dano moral **in re ipsa** em violência doméstica contra a mulher. **[NÃO VERIFICADO]** — confirme número, redação e vigência via `jurisprudencia-stj-stf`.
- **Tema 1197/STJ** — pedido expresso e contraditório como pressupostos da fixação do art. 387, IV. **[NÃO VERIFICADO]** — confirme número, redação e vigência via `jurisprudencia-stj-stf`.

> **Diretriz anti-alucinação:** os dois Temas acima são **o coração desta skill**, mas os **números** só entram na peça **depois** de confirmados na fonte oficial. Prefira sustentar a **tese** (dano moral presumido em VD; pedido + contraditório obrigatórios) ancorada no **dispositivo** (art. 387, IV, CPP; Lei 11.340/2006; art. 489, §1º, CPC). Nunca invente HC/REsp/RE, informativo ou tema.

## Recurso quando a sentença omite ou subdimensiona

Se a sentença **condena mas não fixa** o valor mínimo (ou fixa aquém do provado), o assistente tem legitimidade recursal supletiva (arts. 271 e 598, CPP).

1. **Embargos de declaração** — se houve pedido e prova e a sentença **silenciou** sobre a reparação (omissão, art. 619 CPP): o caminho mais rápido para integrar o julgado.
2. **Apelação do assistente (art. 598, CPP)** — prazo de **15 dias** a contar do fim do prazo do MP (art. 598, parágrafo único; conferir contagem e Súmulas 448/208/210 STF via `jurisprudencia-stj-stf`). Devolve ao tribunal a fixação/majoração do valor mínimo.
3. **Fundamento:** dano provado + pedido expresso nos autos → a não fixação motivada viola o art. 387, IV, e o dever de fundamentação (art. 489, §1º, CPC). Requerer que o tribunal **fixe ou majore** o mínimo, ou remeta à liquidação o excedente.

> **Cuidado com o polo:** se **o MP** recorre da omissão, o assistente pode **aderir/complementar**; se o MP silencia, o assistente recorre **supletivamente**. Não deixe o prazo do art. 598 fluir sem manifestação.

## Erros comuns / checklist final

- [ ] **Pedido expresso** de fixação do art. 387, IV, consta da denúncia **ou** do memorial do assistente? (Sem ele, a fixação é nula — Tema 1197.)
- [ ] **Contraditório sobre o quantum** foi requerido (vista ao réu)? (Blinda contra anulação por surpresa.)
- [ ] **Dano material** apresentado **item a item, com documento** (fl./ev.)? Nada de valor material sem prova.
- [ ] **Dano moral** fundamentado — se **VD**, invocada a presunção *in re ipsa* (Tema 983, conferido)?
- [ ] **Quantum moral** justificado pelos **critérios de proporcionalidade/razoabilidade**, um a um (não "cravado")?
- [ ] Deixou **expresso que o valor é MÍNIMO** e que o excedente vai à liquidação (art. 63, § único)?
- [ ] **Correção e juros** pedidos, com **termos iniciais** definidos e conferidos?
- [ ] Se a sentença **omitiu** → **embargos de declaração** interpostos? Se **subdimensionou** → **apelação (art. 598)** no prazo de 15 dias?
- [ ] **Todos os Temas/súmulas conferidos** via `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de citar número?

**Anti-padrões (evitar):**
- Tratar o valor mínimo como automático da condenação — **sem pedido não há fixação válida**.
- Lançar dano material "estimado" sem nota/recibo — o não comprovado **vai à liquidação**, não ao mínimo.
- Presumir dano moral no patamar de VD para **qualquer** crime — a presunção *in re ipsa* tem hipóteses definidas.
- Fixar/pleitear *quantum* sem fundamentar os critérios — motivação ausente é reforma certa.
- Citar **número** de Tema/REsp/HC de memória — passe pelo gate antes.
- Perder o **prazo de 15 dias** da apelação do assistente (art. 598) contra a omissão.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese a confirmar, não peça pronta para protocolo. A responsabilidade pela atuação, pela quantificação e pelas citações é sempre do **advogado** (CED/OAB; Provimento 205/2021 quanto à publicidade). Nenhuma súmula, Tema, informativo ou acórdão vai à peça sem passar pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` — há sanções reais por jurisprudência inventada por IA. Dados da vítima e do assistido são **sigilosos** (LGPD; `acervo/casos/` gitignored).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
