---
name: decadencia-honra-controle-prazo
description: >-
  Use ao calcular, arguir ou impugnar a DECADÊNCIA nos crimes contra a honra de ação privada — perda
  do direito de queixa pelo decurso dos 6 meses contados do conhecimento da autoria (art. 38 CPP;
  art. 103 CP; art. 107, IV, CP). Cobre termo inicial, natureza fatal (não se interrompe nem se
  suspende; a interpelação do art. 144 CP não interrompe), distinção da prescrição, decadência na
  ação pública condicionada à representação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra, prazo, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-decadencia-honra-controle-prazo"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["decadencia-honra-controle-prazo", "decadencia honra", "controle prazo"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Decadência em Crimes contra a Honra (art. 38 CPP; art. 103 CP; art. 107, IV, CP)

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

Esta skill orienta a **arguição, o cálculo e a impugnação da decadência** nos crimes contra a honra de ação penal privada (calúnia, difamação e injúria — arts. 138 a 140 do CP). Decadência é a **perda do direito de oferecer a queixa-crime** (ou a representação, na ação pública condicionada) pelo decurso do prazo de **6 meses** contado do dia em que o ofendido **soube quem foi o autor** do crime (art. 38 CPP; art. 103 CP). Consumada, extingue a punibilidade (art. 107, IV, CP).

> **Lição central:** decadência **não é prescrição**. A prescrição corre do **fato**; a decadência corre do **conhecimento da autoria**. O prazo decadencial é **fatal e improrrogável** — **não se interrompe nem se suspende** por nada (nem por inquérito, nem por pedido de explicações do art. 144 CP, nem por tentativa de conciliação). Fixe primeiro o *dies a quo* (data em que o ofendido soube quem foi o autor) e conte 6 meses corridos; se a queixa foi protocolada depois, a punibilidade está extinta.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 138–145 e 103, IV do CP e dos arts. 38, 44, 100 e 145 do CPP, e da **Lei 14.532/2023** (que reformulou a injúria racial, deslocando-a para a Lei 7.716/89 como crime de **racismo — ação pública incondicionada, imprescritível**; ver seção específica). Toda súmula, tese ou precedente citado passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de ir para a peça. Na dúvida sobre número de acórdão, **omitir vence inventar**.

## Base legal

- **Art. 103 do CP** — "salvo disposição expressa em contrário, o ofendido decai do direito de queixa ou de representação se não o exerce dentro do prazo de **6 meses**, contado do dia em que **veio a saber quem é o autor do crime** [...]".
- **Art. 38 do CPP** — mesmo prazo de 6 meses para a queixa e para a representação, contado do conhecimento da autoria (no caso do art. 29 — ação privada subsidiária — do dia em que se esgota o prazo do MP).
- **Art. 107, IV, do CP** — a **decadência** é causa de **extinção da punibilidade**.
- **Art. 100, §§ 2º e 3º, do CP** — ação privada mediante queixa; titularidade do ofendido / representante legal.
- **Arts. 138, 139 e 140 do CP** — calúnia, difamação e injúria (os tipos protegidos por ação privada, salvo exceções do art. 145).
- **Art. 145 do CP** — regra da ação: em regra **privada** (queixa); **pública condicionada à representação** em algumas hipóteses (ex.: injúria racial na redação anterior; ofensa a funcionário público *propter officium* — Súmula 714 STF permite legitimidade concorrente); **pública incondicionada** contra o Presidente da República ou chefe de governo estrangeiro (art. 141, I).
- **Art. 144 do CP** — pedido de explicações em juízo: faculdade que **NÃO interrompe nem suspende** a decadência.
- **Art. 10 do CP + art. 798, §1º, CPP** — contagem do prazo: **decadencial é prazo de direito material** (inclui o dia do começo, conta-se pelo calendário comum, não se prorroga se terminar em fim de semana/feriado).

## Natureza e contagem do prazo — o ponto que decide tudo

A decadência é **prazo penal (de direito material)**, não processual. Consequências práticas:

- **Inclui-se o dia do começo** (o *dies a quo*), na forma do **art. 10 do CP** ("o dia do começo inclui-se no cômputo do prazo"). É diferente do prazo processual (art. 798, §1º, CPP), que exclui o dia do começo.
- **Conta-se em meses pelo calendário comum**, não em dias: 6 meses a partir de tal dia terminam no dia anterior ao correspondente do 6º mês (regra do art. 10 CP c/c art. 132, §3º, CC, aplicada por analogia à contagem em meses).
- **Não se prorroga** se o termo final cair em sábado, domingo ou feriado — por ser material, o prazo fatal se consuma no dia, ainda que sem expediente forense (ao contrário do prazo recursal). **Confira este ponto no caso concreto** — há divergência prática sobre prorrogação; a corrente majoritária trata o prazo decadencial como improrrogável.
- **É fatal, peremptório e improrrogável**: não admite interrupção nem suspensão. Nenhum ato do ofendido, do juízo ou da parte contrária reabre o prazo.

**Fórmula de trabalho (método — não é cálculo determinístico automatizável, pois o *dies a quo* depende de prova):**

```
dies a quo  = dia em que o ofendido SOUBE quem é o autor (não a data do fato)
termo final = dies a quo + 6 meses (calendário comum, dia do começo incluído)
Se DATA DA QUEIXA/REPRESENTAÇÃO > termo final  → DECADÊNCIA → extinção (art. 107, IV, CP)
```

> Para a **contagem material exata** (meses pelo calendário, dia do começo incluído, e a controvérsia sobre prorrogação em dia não útil), este é um cálculo determinístico simples de datas — **aponte para a `calculadora-tempestividade`** (ou marque **[calculadora de prazo decadencial a implementar com testes]** caso ela não trate contagem material em meses). A skill descreve o **método**; a aferição da data em que o ofendido conheceu a autoria é **questão de prova**, não de cálculo.

**Exemplo didático (ilustrativo — adaptar):** ofensa publicada em 10/01. O ofendido só descobre a identidade do autor (perfil anônimo) em **20/03**. O *dies a quo* é **20/03** (não 10/01). Somados 6 meses (dia do começo incluído, art. 10 CP), o termo final é **19/09**. Queixa protocolada em 25/09 → **decadência consumada** → extinção da punibilidade (art. 107, IV, CP). Note: a **prescrição** teria corrido de 10/01 (data do fato) — marcos independentes.

## O termo inicial — "veio a saber quem é o autor"

O nó de toda a matéria é fixar o *dies a quo*. Regras:

1. **Conta-se do conhecimento da AUTORIA, não do fato.** Saber que foi ofendido não basta; o prazo só corre quando o ofendido sabe **quem** o ofendeu, com identificação suficiente para propor a queixa.
2. **Conhecimento certo e inequívoco**, não mera suspeita. Boato ou desconfiança não deflagra o prazo; exige-se conhecimento apto a permitir o ajuizamento.
3. **Ônus da prova do termo inicial.** Quem alega a decadência (a defesa) aponta a data do conhecimento; mas, na dúvida sobre quando o ofendido soube, a jurisprudência tende a resolver conforme os elementos concretos — daí a importância de datar mensagens, e-mails, prints, notificações extrajudiciais, boletins de ocorrência e o próprio pedido de explicações. **[NÃO VERIFICADO: consultar `jurisprudencia-stj-stf` sobre a distribuição do ônus e o standard de "conhecimento inequívoco" no STJ.]**
4. **Ofensa por escrito/publicada.** Em regra o termo inicial é a ciência da autoria, não a data da publicação; mas, se autoria e conteúdo são conhecidos simultaneamente (ex.: ofensa assinada, cara a cara), *dies a quo* = data da ofensa.
5. **Autoria anônima / redes sociais.** Quando o autor é anônimo, o prazo só corre quando o ofendido efetivamente **identifica** a pessoa (ex.: após quebra de sigilo, resposta de provedor). A instauração de inquérito ou o pedido de dados **não interrompe** o prazo — mas o *dies a quo* fica postergado até a efetiva identificação.

## Ofensa continuada e reiteração — quando o prazo se renova

- **Ofensa única:** um *dies a quo*, um prazo.
- **Reiteração de ofensas (posts sucessivos, mensagens repetidas):** a corrente dominante trata **cada ofensa autônoma como um fato com termo inicial próprio** — a decadência quanto a uma ofensa **não** alcança as posteriores. Assim, ofensas dentro dos 6 meses anteriores à queixa continuam persequíveis, ainda que as mais antigas tenham decaído.
- **Continuidade delitiva (art. 71 CP):** havendo nexo de continuidade, discute-se se o prazo conta da **última** ofensa da série. **Tese defensiva:** cada ofensa é autônoma para fins de decadência, devendo o juízo excluir as ofensas cujo *dies a quo* individual já superou os 6 meses. **Contra-tese (querelante):** a continuidade delitiva unifica a contagem pela última ofensa. **[NÃO VERIFICADO: conferir o entendimento atual do STJ sobre termo inicial da decadência em crimes continuados contra a honra via `jurisprudencia-stj-stf`.]**

## Decadência x prescrição — não confundir (quadro)

| Critério | **Decadência** | **Prescrição (da pretensão punitiva)** |
|---|---|---|
| Objeto | Perda do **direito de queixa/representação** | Perda da **pretensão punitiva/executória** do Estado |
| Termo inicial | Dia em que **soube da autoria** (art. 103 CP) | Em regra, **data do fato/consumação** (art. 111 CP) |
| Prazo | **6 meses** fixo (salvo disposição diversa) | Variável pela pena (art. 109 CP) |
| Interrupção/suspensão | **Não** admite — fatal e improrrogável | **Admite** (arts. 116 e 117 CP) |
| Natureza | Direito material; conta-se com o dia do começo (art. 10 CP) | Direito material |
| Efeito | Extingue a punibilidade (art. 107, IV) | Extingue a punibilidade (art. 107, IV) |
| Quem argui | Sobretudo a **defesa** (querelado) | Defesa; reconhecível de ofício |

> **Erro clássico:** contar a decadência da data do fato (isso é prescrição) ou contar a prescrição do conhecimento da autoria (isso é decadência). São réguas independentes — verifique **as duas** em todo caso de honra.

## Decadência na ação pública condicionada à representação

O art. 103 do CP e o art. 38 do CPP aplicam o **mesmo prazo de 6 meses** à **representação**. Assim:

- Nos crimes contra a honra de **ação pública condicionada** (ex.: ofensa a funcionário público em razão da função — art. 145, par. único, c/c Súmula 714/STF, que admite legitimidade **concorrente** do ofendido por queixa ou do MP por representação), a **falta de representação no prazo de 6 meses** do conhecimento da autoria também gera **decadência**.
- A representação **independe de forma sacramental**: manifestação inequívoca de vontade de ver o autor processado, feita no prazo, basta (registro de ocorrência com pedido de responsabilização pode valer como representação — **[NÃO VERIFICADO: confirmar no STJ o standard de representação informal]**).
- **Súmula 714/STF** [NÃO VERIFICADO — conferir número e teor via `jurisprudencia-stj-stf`]: legitimidade concorrente do ofendido (queixa) e do MP (ação pública condicionada à representação) na ofensa a funcionário público *propter officium*.

## O art. 144 do CP (pedido de explicações) — armadilha frequente

O ofendido pode, **antes** de oferecer a queixa, pedir explicações em juízo (art. 144 CP) sobre referências equívocas/dúbias. Pontos críticos:

- O pedido de explicações **NÃO interrompe nem suspende** o prazo decadencial. Enquanto tramita, os 6 meses **continuam correndo**.
- Não é condição de procedibilidade: pode-se ajuizar a queixa direto, sem pedir explicações.
- **Tese defensiva:** se o querelante "gastou" meses no pedido de explicações e só depois ofereceu a queixa, verificar se o prazo já se consumou — frequentemente o pedido de explicações **antecipa** o conhecimento e **não** ganha tempo.

## Injúria racial e a Lei 14.532/2023 — atenção redobrada

A **Lei 14.532/2023** reconfigurou o tratamento da injúria racial:

- A injúria racial (antes art. 140, §3º, CP, de **ação pública condicionada à representação**, sujeita a decadência) foi **equiparada ao crime de racismo** e deslocada para a **Lei 7.716/89**, tornando-se **ação penal pública INCONDICIONADA e IMPRESCRITÍVEL** (CF, art. 5º, XLII).
- **Consequência decisiva:** para fatos sob a nova disciplina, **não há decadência nem prescrição** — a lógica dos 6 meses **não se aplica**. Não invoque decadência em injúria racial pós-Lei 14.532/2023.
- **Direito intertemporal:** para fatos **anteriores** à vigência da Lei 14.532/2023, verifique a lei mais benéfica (irretroatividade da lei penal gravosa — CF, art. 5º, XL) e a disciplina de ação/decadência então vigente. **Confira a data do fato e a vigência via `jurisprudencia-stj-stf`.**

## Roteiro de arguição da decadência (DEFESA)

1. **Classificar a ação penal** do crime imputado: privada (queixa), pública condicionada (representação) ou incondicionada. Só nas duas primeiras cabe decadência.
2. **Descartar injúria racial pós-Lei 14.532/2023** (ação pública incondicionada, imprescritível — **não decai**).
3. **Fixar o *dies a quo*** — data em que o ofendido **soube quem foi o autor**, com prova (prints datados, notificações, BO, pedido de explicações, resposta de provedor). Distinguir da data do fato.
4. **Contar 6 meses** pela regra material (art. 10 CP; dia do começo incluído; meses pelo calendário) → apontar via `calculadora-tempestividade`.
5. **Comparar com a data da queixa/representação.** Se posterior ao termo final → decadência.
6. **Neutralizar tentativas de "reabrir" o prazo:** demonstrar que inquérito, pedido de explicações (art. 144) e conciliação **não interrompem** a decadência.
7. **Ofensas reiteradas:** separar as ofensas já decaídas (individualmente) das ainda persequíveis — pedir a exclusão daquelas.
8. **Requerer a extinção da punibilidade** (art. 107, IV, CP) e, na ação privada, a rejeição da queixa por falta de condição de procedibilidade / decadência (art. 395, II, CPP) — antes do recebimento — ou a absolvição sumária, conforme o momento.
9. **Verificar TAMBÉM a prescrição** (régua paralela) — não confundir, mas alegar as duas quando cabíveis.
10. **Passar todas as citações pelo gate** `verificacao-citacoes` / `jurisprudencia-stj-stf` e submeter à **revisão humana**.

## Momento e via processual da arguição

- **Antes do recebimento da queixa:** a decadência é matéria de **rejeição da inicial acusatória** — falta condição/pressuposto (art. 395, II e III, CPP: falta de condição para o exercício da ação / de pressuposto processual). Arguir em **resposta preliminar** (art. 396-A CPP) ou em **petição de exceção/preliminar**.
- **Após o recebimento:** decadência conduz à **extinção da punibilidade** (art. 107, IV) e à **absolvição sumária** (art. 397, IV, CPP — causa extintiva da punibilidade) ou à extinção a qualquer tempo (matéria de ordem pública, reconhecível de ofício).
- **É matéria de ordem pública:** pode ser reconhecida a qualquer tempo e grau, inclusive em HC (via `habeas-corpus-*` do acervo, se houver) quando a extinção for evidente e não demandar dilação probatória.
- **Distinguir decadência de outras causas de extinção próprias da honra:** **retratação** (art. 143 CP — cabível na calúnia e difamação, não na injúria; antes da sentença) e **perdão/perempção** na ação privada (arts. 105, 106, 60 CPP). São hipóteses autônomas — não confundir com decadência.

## Teses e contra-teses

- **Tese (defesa):** *dies a quo* fixado em data anterior à alegada pelo querelante (ex.: prova de que já sabia da autoria há mais de 6 meses) → decadência. **Contra-tese (querelante):** conhecimento inequívoco só ocorreu depois (mera suspeita não conta).
- **Tese (defesa):** pedido de explicações (art. 144) e inquérito não interromperam o prazo → queixa intempestiva. **Contra-tese:** o prazo só passou a correr da efetiva identificação do autor (autoria antes desconhecida).
- **Tese (defesa):** em ofensas reiteradas, as anteriores aos 6 meses da queixa estão decaídas → exclusão. **Contra-tese (querelante):** continuidade delitiva conta da última ofensa (unifica).
- **Tese (querelante/assistente — polo acusatório, ver nota):** representação informal e tempestiva no BO supre a exigência do art. 38 → não há decadência. **Contra-tese (defesa):** ausência de manifestação inequívoca de vontade de processar no prazo → decadência.

## Súmulas e precedentes (sob o Citation Gate — conferir antes de citar)

- **Súmula 714/STF** [NÃO VERIFICADO]: legitimidade concorrente (queixa do ofendido / representação ao MP) na ofensa a funcionário público em razão da função. Conferir número e teor via `jurisprudencia-stj-stf`.
- **Termo inicial e "conhecimento inequívoco da autoria"**: há jurisprudência do STJ sobre o *dies a quo* e o standard de conhecimento — **[NÃO VERIFICADO: buscar HC/RHC/REsp específicos via `jurisprudencia-stj-stf`; não citar número de acórdão de memória].**
- **Decadência em crime continuado contra a honra**: termo inicial pela última ofensa vs. autonomia de cada fato — **[NÃO VERIFICADO: conferir posição atual do STJ].**
- **Racismo / injúria racial imprescritível (Lei 14.532/2023 + CF art. 5º, XLII)**: dispositivo constitucional é certo; para precedentes de aplicação, **[NÃO VERIFICADO: conferir via `jurisprudencia-stj-stf`].**

> **Regra de ouro:** dispositivos de lei (arts. 38 CPP; 103, 107 IV, 138-145 CP) e a garantia constitucional da imprescritibilidade do racismo (art. 5º, XLII) podem ser afirmados com segurança. **Qualquer número de HC/REsp/RE, informativo ou tema** só entra na peça depois de conferido — na dúvida, **ensine a tese e cite o dispositivo**, não o acórdão.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Contar a decadência da **data do fato** (isso é prescrição) em vez do conhecimento da autoria.
- Esquecer de verificar a **prescrição** em paralelo (régua independente).
- Tratar o prazo como processual (excluir o dia do começo) — é **material** (art. 10 CP, dia do começo **incluído**).
- Achar que **inquérito**, **pedido de explicações** (art. 144) ou **conciliação** interrompem/suspendem o prazo — **não** interrompem.
- Alegar decadência em **injúria racial pós-Lei 14.532/2023** (é racismo — ação pública incondicionada, imprescritível, **não decai**).
- Confundir decadência com **retratação** (art. 143), **perdão** ou **perempção** (art. 60 CPP) — causas autônomas.
- Aplicar decadência à ação pública **incondicionada** (art. 141, I — ofensa ao Presidente/chefe de governo estrangeiro): ali **não há** decadência.
- Citar número de acórdão de memória, sem passar pelo Citation Gate.

**Checklist:**
- [ ] Ação penal classificada (privada / pública condicionada / incondicionada)?
- [ ] Injúria racial pós-Lei 14.532/2023 descartada (não decai)?
- [ ] *Dies a quo* = **conhecimento da autoria** (com prova datada), não a data do fato?
- [ ] 6 meses contados pela regra **material** (art. 10 CP; dia do começo incluído; meses pelo calendário) — via `calculadora-tempestividade`?
- [ ] Data da queixa/representação comparada ao termo final?
- [ ] Demonstrado que art. 144, inquérito e conciliação **não** interromperam o prazo?
- [ ] Ofensas reiteradas separadas (decaídas x persequíveis)?
- [ ] Prescrição verificada em paralelo?
- [ ] Pedido correto conforme o momento (rejeição art. 395 / extinção art. 107, IV / absolvição sumária art. 397, IV)?
- [ ] Todas as súmulas/precedentes passaram por `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] Revisão humana do advogado responsável?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio metodológico; a fixação do *dies a quo* depende de **prova** e a peça final é responsabilidade do **advogado** (EAOAB; CED). Toda súmula/precedente/tese passa pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de uso — há sanções reais por jurisprudência inventada por IA.
- **Foco de polo:** esta skill é majoritariamente de **DEFESA** (o querelado argui a decadência para extinguir a punibilidade). Quando manejada pelo **polo acusatório** (querelante/assistente de acusação, MP na ação condicionada), a lógica se inverte — demonstrar a **tempestividade** da queixa/representação. **Roteador: confirme o polo da instituição no `company.md`** (advocacia — OAB + Prov. 205/2021; MP — CNMP; Defensoria — LC 80/94) e ajuste o tom e o objetivo.
- **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).

## Lembretes finais

- **Decadência ≠ prescrição:** conhecimento da autoria (decadência) vs. data do fato (prescrição). Verifique as duas.
- **6 meses fatais:** não se interrompem nem se suspendem — nem por inquérito, nem pelo art. 144, nem por conciliação.
- **Prazo material:** dia do começo **incluído** (art. 10 CP); meses pelo calendário; improrrogável.
- **Injúria racial (Lei 14.532/2023):** racismo, imprescritível — **não decai**.
- **Ofensas reiteradas:** cada fato tem *dies a quo* próprio — separe decaídas e persequíveis.
- **Efeito:** extinção da punibilidade (art. 107, IV, CP); via processual conforme o momento (art. 395 / 397, IV).
- **Citation Gate sempre:** dispositivo de lei com certeza; acórdão só depois de conferir.
