---
name: impugnacao-valor-confissao
description: >-
  Use ao atacar o VALOR PROBATÓRIO da confissão — confissão policial retratada em juízo, confissão
  isolada sem corroboração no restante da prova (art. 197 CPP), confissão 'informal' relatada por
  policiais, confissão obtida sob coação/vício de vontade ou sem defesa técnica e sem advertência do
  direito ao silêncio, divisibilidade e retratabilidade (art. 200 CPP) e a distinção entre confissão
  como prova e como atenuante (Súmula… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, prova]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-impugnacao-valor-confissao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["impugnacao-valor-confissao", "impugnacao valor", "valor confissao"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Valoração e Impugnação da Confissão (arts. 197-200 CPP)

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

Esta skill orienta o **ataque ao valor probatório da confissão** — não a produção de uma peça específica, mas o **roteiro de análise e as teses** para desconstruir uma confissão que sustenta (ou ameaça sustentar) uma condenação. Aplica-se em memoriais/alegações finais, apelação (art. 593, III, CPP), *habeas corpus* por falta de justa causa, resposta à acusação e sustentação oral, sempre que a acusação apoiar a autoria numa confissão — em especial a **confissão policial depois retratada** e a **confissão "informal"** que policiais relatam ter ouvido do preso.

> **Lição central:** confissão **não é a rainha das provas**. Ela tem regime valorativo próprio (art. 197 CPP): é **divisível e retratável** (art. 200) e **só vale se confirmada pelo restante do conjunto probatório**. Confissão **isolada** — sobretudo a extrajudicial retratada em juízo — **não basta para condenar**. O erro do defensor é tratar a confissão como fato consumado; o correto é **submetê-la ao crivo do art. 197** e cobrar da acusação a **corroboração** que a lei exige.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 197 a 200 do CPP** e do **art. 155 do CPP** (proibição de condenar com base exclusiva em elementos do inquérito). Confira também a **Súmula 545/STJ**, temas repetitivos e eventual *overruling* via a skill `jurisprudencia-stj-stf` antes de fundamentar qualquer peça. Nenhum precedente entra sem passar por esse gate.

## Base legal

- **Art. 197 do CPP** — o valor da confissão se afere pelos **mesmos critérios das demais provas** e **confrontando-a com o restante da prova** para verificar compatibilidade e concordância. É o coração da tese: confissão **não vincula** o juiz e **não dispensa** corroboração.
- **Art. 198 do CPP** — o **silêncio do acusado não importa confissão**, mas pode constituir elemento de convicção — **dispositivo lido em conformidade com a CF/88**: após a Constituição, o silêncio **não pode ser valorado em desfavor** do réu (o trecho final é tido por não recepcionado). Ver `nemo tenetur`.
- **Art. 199 do CPP** — a confissão, quando feita fora do interrogatório, será **tomada por termo nos autos**, observado o art. 195 (forma).
- **Art. 200 do CPP** — a confissão é **divisível e retratável**, sem prejuízo do livre convencimento do juiz. É o que autoriza o réu a **retratar** a confissão policial em juízo e a acusação a não poder "escolher" só a parte que a incrimina.
- **Art. 155 do CPP** — o juiz **não pode fundar a condenação exclusivamente** em elementos colhidos no inquérito (prova não repetida em contraditório). Confissão **só** policial, não ratificada em juízo, cai sob esse crivo.
- **Art. 5º, LXIII, da CF** — direito de **permanecer calado**; e, por construção, direito de **não produzir prova contra si** (`nemo tenetur se detegere`).
- **Art. 8.2.g e 8.3 da CADH (Pacto de San José)** — direito de não ser obrigado a depor contra si mesmo e de que a confissão só seja válida se **feita sem coação**.
- **Súmula 545/STJ** — reconhecida a confissão como fundamento da condenação, a **atenuante do art. 65, III, "d", CP incide** (plano da dosimetria — distinto do plano probatório, ver adiante).

## Os dois planos da confissão (não confundir)

A confissão vive em **dois planos independentes**. Misturá-los é o erro conceitual mais comum.

| Plano | Pergunta | Dispositivo | Consequência |
|-------|----------|-------------|--------------|
| **Probatório** | A confissão **prova a autoria**? | arts. 197, 200 CPP; art. 155 | Se isolada/retratada/viciada → **não sustenta condenação** (absolvição, art. 386) |
| **Dosimetria** | Se houve condenação, incide a **atenuante**? | art. 65, III, "d", CP; Súmula 545 STJ | Reduz a pena, mesmo se a confissão foi **parcial** ou **retratada** e usada na sentença |

➡️ **Consequência prática:** a defesa **ataca no plano probatório** (imprestabilidade → absolvição) **e**, subsidiariamente, **pleiteia no plano da dosimetria** (se o juiz condenar e tiver usado a confissão, deve aplicar a atenuante — Súmula 545). São teses que **coexistem**, não se excluem.

## Roteiro de análise (passo a passo)

Ao receber um caso sustentado em confissão, percorra na ordem:

1. **Onde e quando foi a confissão?** Distinguir: (a) confissão **extrajudicial** (delegacia, sem juiz); (b) confissão **judicial** (em interrogatório, sob contraditório); (c) confissão **"informal"** (policial relata em juízo que o preso "confessou" na abordagem/viatura, sem termo). O regime e a fragilidade variam muito conforme a origem.
2. **Houve retratação em juízo?** Se o réu **negou** em juízo a confissão policial, incide o art. 200 (retratabilidade) + art. 155 (não se condena só com o inquérito). **Confissão policial retratada = elemento do inquérito não confirmado sob contraditório.**
3. **Houve advertência do direito ao silêncio e defesa técnica?** Confissão sem informação do direito de calar (CF, art. 5º, LXIII) ou sem defensor tende à **ilicitude/imprestabilidade** (art. 5º, LVI, CF — prova ilícita).
4. **Há vício de vontade?** Coação, tortura, promessa indevida, cansaço/privação, indução. A CADH (8.3) exige confissão **sem coação**. Vício → prova **ilícita**, a ser desentranhada (art. 157 CPP).
5. **A confissão está corroborada?** Este é o teste do art. 197: **confrontar a confissão com o restante da prova**. Existe prova **independente** da autoria (testemunha, perícia, imagem, rastreamento)? Se a confissão é a **única** base — ou se as demais provas **derivam** dela —, é **confissão isolada**.
6. **A confissão é coerente e verossímil?** Bate com a materialidade, a dinâmica, a perícia? Confissão que **contraria** a prova técnica é indício de confissão falsa/induzida (falsas confissões existem e são estudadas).
7. **É confissão qualificada?** O réu admite o fato mas agrega tese defensiva (legítima defesa, ausência de dolo). Aqui a **divisibilidade** (art. 200) protege o réu: a acusação **não pode** usar só a parte incriminadora e descartar a excludente afirmada — o ônus de afastar a tese é dela.
8. **Definir os pedidos:** imprestabilidade → **absolvição** (art. 386, V ou VII, CPP); subsidiariamente, **atenuante** (Súmula 545) se sobrevier condenação.

## Teses defensivas (e as contra-teses da acusação)

### Tese 1 — Confissão isolada não condena (art. 197 CPP)
A confissão **não prevalece** sobre o conjunto probatório nem o dispensa. Ausente prova **independente** da autoria, a condenação viola o art. 197 e o art. 155 (vedação de condenar só com o inquérito, quando extrajudicial). **Pedido:** absolvição por insuficiência de provas (art. 386, VII).
- **Contra-tese (acusação):** a confissão está **corroborada** por [perícia/testemunha/rastreamento X] — prova independente que confirma a autoria. **Defesa rebate:** verificar se essa "corroboração" é **realmente independente** ou apenas **deriva** da própria confissão (o que a torna circular).

### Tese 2 — Confissão policial retratada em juízo (arts. 200 + 155)
Confissão feita **só na delegacia** e **negada em juízo** é **elemento do inquérito não repetido em contraditório**. O art. 155 **proíbe** fundar a condenação exclusivamente nela. **Pedido:** desconsiderar a confissão retratada; absolvição se ela for a base única.
- **Contra-tese:** a confissão judicial anterior ou os detalhes que "só o autor saberia" reforçam a versão policial. **Defesa rebate:** submeter esses "detalhes" ao art. 197 (podem ter sido sugeridos no interrogatório informal); exigir prova externa.

### Tese 3 — Confissão "informal" relatada por policiais é imprestável
A "confissão informal" — policial narrando em juízo que o preso "confessou" na abordagem, **sem termo, sem advertência de direito ao silêncio, sem defensor** — burla o regime legal do interrogatório e o `nemo tenetur`. **Pedido:** reconhecer a imprestabilidade dessa narrativa como prova da autoria.
- **Contra-tese:** vale como **testemunho** do policial sobre o que ouviu. **Defesa rebate:** o conteúdo é uma **confissão sem as garantias legais** (advertência, defesa técnica, termo — art. 199); admiti-la por via oblíqua **frauda** a CF, art. 5º, LXIII. **[NÃO VERIFICADO]** — há jurisprudência oscilante do STF/STJ sobre a chamada "confissão informal"; conferir o estado atual via `jurisprudencia-stj-stf` antes de afirmar tese vencedora.

### Tese 4 — Vício de vontade / coação (art. 157 CPP; CADH 8.3)
Confissão obtida sob coação, tortura, ameaça, promessa indevida ou privação é **prova ilícita** e deve ser **desentranhada** (art. 157 CPP), contaminando as provas dela **derivadas** (fruits of the poisonous tree — art. 157, §1º). **Pedido:** desentranhamento e absolvição.
- **Contra-tese:** ausência de indício de coação; confissão "espontânea". **Defesa rebate:** apontar sinais objetivos (horário, tempo de custódia, ausência de defensor, laudo de lesões, ausência de gravação audiovisual do ato).

### Tese 5 — Confissão sem advertência do silêncio / sem defesa técnica
A ausência de informação do direito de calar (CF, art. 5º, LXIII) e de defensor no ato macula a confissão. **Pedido:** imprestabilidade.

### Tese 6 — Confissão qualificada e a divisibilidade (art. 200)
Se o réu confessa o fato mas afirma **excludente** (legítima defesa) ou **elemento negativo** (ausência de dolo), a confissão é **divisível**, mas a acusação **não pode fatiá-la** a seu favor: assumido o fato pela via da confissão, **o ônus de afastar a tese defensiva agregada é da acusação**. **Pedido:** absolvição pela excludente (art. 386, VI) ou desclassificação.

### Tese 7 (subsidiária, dosimetria) — Atenuante da confissão (Súmula 545/STJ)
Se, apesar de tudo, houver condenação **e** o juiz **usou a confissão** como fundamento, incide a **atenuante do art. 65, III, "d", CP** — inclusive na **confissão qualificada** e mesmo que **retratada**, desde que utilizada na motivação. **Pedido:** redução na 2ª fase da dosimetria.

## O teste da corroboração (art. 197 na prática)

Pergunte, item a item:

```
1) Retire mentalmente a confissão dos autos.
   → Sobra prova SUFICIENTE e AUTÔNOMA da autoria?
      ├── SIM → a confissão é acessória; foque na atenuante (Súmula 545)
      └── NÃO → confissão ISOLADA → tese de absolvição (arts. 197 + 155)
2) As "corroborações" apontadas pela acusação são independentes,
   ou apenas repetem/derivam da própria confissão? (corroboração circular = nula)
3) A confissão é coerente com a materialidade e a perícia?
   → Contradiz a prova técnica? Indício de confissão falsa/induzida.
4) A confissão foi tomada com garantias (silêncio advertido, defensor, termo)?
   → Faltou alguma? Ataca a validade, não só o peso.
```

## Erros comuns (anti-padrões)

- **Tratar a confissão como prova plena** e desistir da tese de autoria — ela é **relativa** (art. 197) e **retratável** (art. 200).
- **Aceitar corroboração circular** — "provas" que apenas repetem o que o réu disse na confissão não corroboram nada.
- **Não separar os dois planos** — abrir mão da absolvição (probatório) porque vai pedir a atenuante (dosimetria); ou vice-versa. Pleiteie **os dois** (principal e subsidiário).
- **Deixar passar a "confissão informal"** sem impugnar a ausência de termo, advertência e defensor.
- **Esquecer a divisibilidade** na confissão qualificada — permitir que a acusação use só a parte incriminadora.
- **Não invocar o art. 155** quando a única base é confissão **policial** retratada.
- **Renunciar à atenuante** por a confissão ter sido **parcial/retratada** — a Súmula 545 alcança a confissão **usada** na sentença.
- **Não requerer o desentranhamento** (art. 157) quando há vício de vontade, deixando a prova ilícita nos autos.
- **Citar precedente de memória** sobre confissão informal ou sobre o alcance da Súmula 545 sem passar pelo gate.

## Checklist final (defesa)

- [ ] Identificada a **origem** da confissão (extrajudicial / judicial / "informal")?
- [ ] Houve **retratação em juízo**? Invocado o art. 200 + art. 155?
- [ ] Aplicado o **teste da corroboração** (art. 197) — a confissão é **isolada**?
- [ ] As "corroborações" da acusação são **independentes** (não circulares)?
- [ ] Verificada **advertência do silêncio** (CF, art. 5º, LXIII) e **defesa técnica** no ato?
- [ ] Investigado **vício de vontade** (coação/promessa/privação) → art. 157 e desentranhamento?
- [ ] Tratada a **confissão qualificada** com a **divisibilidade** (art. 200) a favor do réu?
- [ ] Formulados **pedido principal** (absolvição, art. 386) **e subsidiário** (atenuante, Súmula 545)?
- [ ] Todas as súmulas/precedentes conferidos via `jurisprudencia-stj-stf` **antes** de citar?
- [ ] Peça submetida à **revisão humana** do advogado responsável?

## Distinção de escopo

- **`matriz-contradicoes-prova-oral`** cuida da **contradição entre versões** de testemunhas/vítima e do art. 155 em geral — **não** trata do regime específico da confissão (arts. 197/200), da confissão informal, do vício de vontade nem da Súmula 545. Use aquela para o cotejo de depoimentos; **esta** para o valor e a impugnação da confissão.
- **`preparacao-interrogatorio-cliente`** prepara o cliente **para o ato** (o que dizer/calar) — **esta** skill impugna uma confissão **já existente** nos autos.

## Nota de conformidade

Este material é **rascunho técnico de apoio** e **não substitui** o juízo do advogado responsável. A responsabilidade pela estratégia probatória e pelas teses é sempre do profissional (**EAOAB e Código de Ética e Disciplina da OAB**; no Ministério Público, **CNMP**; na Defensoria, **LC 80/94**). **Revisão humana é obrigatória** antes de qualquer protocolo. **Nenhuma súmula, tese ou precedente** (em especial sobre a "confissão informal" e o alcance da Súmula 545) deve ser afirmado de memória — tudo passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf`; na dúvida, **omitir vence inventar**. Ao converter a análise em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).
