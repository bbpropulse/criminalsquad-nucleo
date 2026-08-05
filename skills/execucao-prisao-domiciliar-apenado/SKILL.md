---
name: execucao-prisao-domiciliar-apenado
description: >-
  Use ao pleitear a PRISÃO DOMICILIAR DO CONDENADO em execução penal (não do preso cautelar) — as
  hipóteses legais do art. 117 da LEP no regime aberto (maior de 70 anos, doença grave, gestante,
  filho menor/deficiente) e a domiciliar HUMANITÁRIA excepcional por falta de estabelecimento
  adequado ao regime (semiaberto/aberto) ou por saúde, com base na dignidade da pessoa humana.
  Gatilhos: prisão domiciliar do apenado, art. 117… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-prisao-domiciliar-apenado"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-prisao-domiciliar-apenado", "execucao prisao", "domiciliar apenado"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Prisão Domiciliar do Apenado (art. 117 da LEP + domiciliar humanitária)

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

Esta skill orienta o **pedido de prisão domiciliar do CONDENADO em execução penal**: a autorização para o apenado cumprir a pena em residência particular, seja nas **hipóteses legais do art. 117 da LEP** (regime aberto), seja na **domiciliar humanitária excepcional** — construção pretoriana que estende o benefício a preso do semiaberto/fechado quando o Estado não oferece estabelecimento adequado ou quando a saúde/dignidade o exigem.

> **Lição central:** identifique **de qual domiciliar** se trata antes de qualquer coisa. Há duas famílias completamente distintas e a confusão entre elas é o erro nº 1. (1) A **domiciliar CAUTELAR** (arts. 317-318-B do CPP) é do **preso provisório** — não é objeto desta skill (use a skill `prisao-domiciliar`). (2) A **domiciliar do APENADO** — objeto desta skill — é da **execução**: ou é a legal do **art. 117 da LEP** (só no **regime aberto**, taxativa) ou é a **humanitária excepcional** (jurisprudencial, para o semiaberto/fechado por falta de vaga ou por saúde). Errar a base legal derruba o pedido.

> **Cautela de vigência (obrigatória antes de citar):** confira o **art. 117 da LEP**, os **arts. 33, §1º, e 36 do CP** e a jurisprudência atual da domiciliar humanitária/falta de vaga. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução. Toda autoridade passa pelo Citation Gate.

> **Gate P0 do art. 112:** domiciliar ou harmonização não escolhe a regra de progressão. Se a tese depender de percentual, lapso ou data de mudança de regime, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte fontes oficiais no mesmo dia e registre regra intertemporal, decisões e revisor humano. Incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**.

## Distinção que estrutura tudo (não pular)

| Eixo | Domiciliar CAUTELAR (não é esta skill) | Domiciliar do APENADO (esta skill) |
|------|----------------------------------------|-------------------------------------|
| Sujeito | Preso **provisório** (sem trânsito) | **Condenado** em execução |
| Base legal | Arts. **317-318-B do CPP** | **Art. 117 da LEP** + humanitária |
| Natureza | Cautelar (substitui a preventiva) | Modo de **cumprimento** da pena |
| Juízo | Juízo do processo de conhecimento | **Juízo da Execução Penal (VEP)** |
| Skill | `prisao-domiciliar` | **`execucao-prisao-domiciliar-apenado`** |

➡️ **Regra de ouro:** gestante presa provisoriamente → domiciliar **cautelar** (CPP). Gestante **condenada** cumprindo pena → **art. 117 da LEP** (se no aberto) ou humanitária. São regimes jurídicos diferentes com pressupostos diferentes.

## Base legal

- **Art. 117 da LEP (Lei 7.210/84)** — admite o recolhimento do beneficiário do **regime aberto** em residência particular nas quatro hipóteses taxativas (ver quadro abaixo).
- **Art. 33, §1º, "c", do CP** — define o regime aberto (trabalho externo, frequência a curso, autodisciplina e senso de responsabilidade).
- **Art. 36 do CP** — a execução do regime aberto se dá em **casa de albergado** ou estabelecimento adequado.
- **CF, art. 1º, III (dignidade da pessoa humana)** e **art. 5º, III e XLIX (vedação a tratamento desumano; respeito à integridade física e moral do preso)** — fundamento da domiciliar humanitária e da vedação ao regime mais gravoso por omissão do Estado.
- **CF, art. 5º, XLV e XLVI + art. 227 (proteção à criança)** — reforçam a domiciliar por saúde e por dependente menor.
- **Art. 66, V, "b" e "c", da LEP** — competência do Juízo da Execução para decidir sobre a forma de cumprimento e incidentes.

## As quatro hipóteses do art. 117 da LEP (regime aberto — taxativas)

O art. 117 autoriza o recolhimento domiciliar do beneficiário do **regime aberto** quando se tratar de:

| Inciso | Hipótese | Núcleo |
|--------|----------|--------|
| I | Condenado(a) **maior de 70 anos** | Critério etário objetivo |
| II | Condenado(a) acometido de **doença grave** | Incompatibilidade do cárcere com o tratamento/estado de saúde |
| III | Condenada com **filho menor ou deficiente físico ou mental** | Proteção do dependente |
| IV | Condenada **gestante** | Proteção da gestação |

> **Ponto crítico de literalidade × interpretação:** o art. 117 fala em **regime aberto**. Literalmente, o benefício legal se dirige a quem já está no aberto e não dispõe de casa de albergado adequada, ou preenche uma das quatro hipóteses. **A extensão a apenados do semiaberto/fechado** (idoso, doente grave, gestante) **não decorre da letra do art. 117**, mas da **construção humanitária** fundada na dignidade — por isso deve ser pedida **com esse fundamento constitucional**, e não como se fosse aplicação direta do art. 117. Não misture as fundamentações.

> **Interpretação ampliativa (tese defensiva):** embora os incisos III e IV mencionem a **condenada** (mulher), há forte corrente que estende a proteção do **filho menor/deficiente ao pai condenado** quando ele for o único ou indispensável responsável pela criança, por isonomia e pelo melhor interesse do menor (art. 227 CF). Sustente com base constitucional e confira o estado da jurisprudência via `jurisprudencia-stj-stf`. **[NÃO VERIFICADO]** o precedente específico — ensinar a tese, não arriscar o número.

## A domiciliar humanitária excepcional (semiaberto/fechado)

Fora das hipóteses do art. 117, a jurisprudência admite a domiciliar como medida **humanitária e excepcional** em duas grandes situações:

### 1) Falta de estabelecimento adequado ao regime (déficit de vagas)

Quando o apenado tem **direito** ao semiaberto (por progressão ou por fixação na sentença) mas **não há vaga** em colônia agrícola/industrial ou estabelecimento similar, é **vedado** mantê-lo em regime mais gravoso (fechado) por omissão do Estado.

- **SV 56/STF:** "A falta de estabelecimento penal adequado não autoriza a manutenção do condenado em regime prisional mais gravoso, devendo-se observar os parâmetros fixados no RE 641.320/RS." A consequência prática, na ausência de vaga, é a **saída para o regime aberto/domiciliar com monitoração eletrônica** enquanto não surge vaga adequada — e não a permanência no fechado.
- **RE 641.320/RS (Tema 423 STF)** — fixou os parâmetros (referência da SV 56). **Confira o inteiro teor e os parâmetros via `jurisprudencia-stj-stf`** antes de citar tese específica.

➡️ **Tese (forte):** progredido ao semiaberto sem vaga adequada → **domiciliar** (com ou sem tornozeleira), jamais a manutenção no fechado (SV 56).

### 2) Saúde grave incompatível com o cárcere / dignidade

Doença grave que não pode ser adequadamente tratada no estabelecimento prisional, gestação/puerpério de risco, ou situação que caracterize tratamento desumano, autorizam a domiciliar humanitária ainda que o apenado não esteja no regime aberto — com fundamento na **dignidade** e na **vedação a tratamento cruel/desumano** (CF, art. 5º, III e XLIX).

- Exige, em regra, **prova robusta**: laudo médico oficial/pericial atestando a gravidade e a **incompatibilidade concreta** do tratamento com o ambiente carcerário (não basta a doença abstrata).
- **[NÃO VERIFICADO]** precedentes numéricos de HC do STJ/STF sobre saúde na execução — **confira via `jurisprudencia-stj-stf`**; prefira sustentar a tese (dignidade + prova pericial da incompatibilidade) a arriscar o número do acórdão.

## Súmulas e teses aplicáveis (conferir vigência via `jurisprudencia-stj-stf`)

- **SV 56/STF** — falta de estabelecimento adequado **não autoriza** regime mais gravoso; observar parâmetros do RE 641.320/RS. **É a súmula-chave da domiciliar por falta de vaga.**
- **Súmula 491/STJ** — inadmissível a progressão **per saltum**; relevante para não pedir domiciliar de aberto sem antes ter havido progressão regular ao semiaberto.
- **Súmula 40/STJ** — o tempo de cumprimento em regime domiciliar (quando reconhecido como cumprimento de pena) conta para fins de benefícios — **confirmar alcance e vigência via `jurisprudencia-stj-stf`** antes de citar.
- **Monitoração eletrônica (art. 146-B da LEP)** — a tornozeleira é frequentemente a condição para deferir a domiciliar por falta de vaga; conferir a redação vigente.

> **Diretriz anti-alucinação:** cite livremente os **dispositivos** (art. 117 LEP; arts. 33, §1º, e 36 CP; art. 146-B LEP; CF) e a **SV 56** (notória). Para **qualquer** HC/REsp/RE específico, informativo ou tema, marque **[NÃO VERIFICADO]** e conduza pela skill `jurisprudencia-stj-stf`. **Melhor faltar precedente do que citar julgado inexistente.**

## Metodologia — roteiro do pedido (passo a passo)

1. **Classifique a via.** Preso provisório? → não é esta skill (use `prisao-domiciliar`, CPP). Condenado em execução? → siga.
2. **Identifique o regime atual** do apenado (aberto, semiaberto, fechado) e o **título** (sentença/cálculo).
3. **Escolha o fundamento certo:**
   - Regime **aberto** + uma das 4 hipóteses (≥70 anos, doença grave, filho menor/deficiente, gestante) → **art. 117 da LEP** (aplicação direta).
   - **Semiaberto sem vaga** adequada → **domiciliar humanitária por SV 56** (não é art. 117 puro).
   - **Saúde grave** incompatível com o cárcere (qualquer regime) → **domiciliar humanitária** (dignidade + laudo).
4. **Reúna a prova da hipótese** (é o coração do pedido): documento de idade; **laudo médico/pericial** para doença grave ou gestação; certidão de nascimento/laudo do filho menor/deficiente; **certidão de inexistência de vaga** no regime devido (para a hipótese de déficit).
5. **Dimensione a condição** (monitoração eletrônica, art. 146-B): oferecê-la proativamente reforça a viabilidade do deferimento por falta de vaga.
6. **Endereço ao Juízo da Execução (VEP)** competente; instrua com o cálculo de pena atualizado.
7. **Peça subsidiário:** se indeferida a domiciliar plena, requerer ao menos a **monitoração** e a **vedação à manutenção no regime mais gravoso** (SV 56).

## Teses (defesa) × contra-teses (acusação)

**Teses defensivas (fortes):**
- **Art. 117 é direito, não faculdade**, presente a hipótese e a prova: preenchidos o regime aberto e um dos incisos, o recolhimento domiciliar se impõe.
- **SV 56:** sem vaga no semiaberto, a solução é a **domiciliar**, nunca o retorno/manutenção no fechado — a omissão estatal não pode agravar o regime do apenado.
- **Dignidade e vedação ao tratamento desumano** (CF, art. 5º, III e XLIX) sustentam a domiciliar humanitária por saúde, com laudo pericial da incompatibilidade concreta.
- **Melhor interesse do menor/dependente** (art. 227 CF) estende a proteção dos incisos III e IV, inclusive ao pai único responsável (interpretação ampliativa).
- **Interpretação in bonam partem** das hipóteses de saúde e de proteção familiar.

**Contra-teses (acusação) a antecipar:**
- **Taxatividade do art. 117** — o benefício legal só alcança o **regime aberto**; extensão ao semiaberto/fechado exige o fundamento humanitário (não a letra do 117).
- **Doença abstrata não basta** — exige-se prova de que o cárcere **impede** o tratamento adequado (incompatibilidade concreta), sob perícia.
- **Existência de vaga** ou de estabelecimento adequado afasta a domiciliar por déficit; a acusação sustentará a suficiência da estrutura.
- **Gravidade do delito e periculosidade** para negar a humanitária — a defesa rebate com a natureza **humanitária** (não meritória) do benefício e a irrelevância, para saúde/idade, do mérito carcerário.

## Modelo de petição

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento no art. 117 da Lei de Execução
Penal (Lei 7.210/84) [e/ou no princípio da dignidade da pessoa humana — art.
1º, III, e art. 5º, III e XLIX, da CF, e na Súmula Vinculante 56/STF], requerer
a

PRISÃO DOMICILIAR

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O apenado cumpre pena de [PENA TOTAL] de reclusão, em regime [REGIME ATUAL],
pela prática do crime de [CRIME], perante este Juízo da Execução.

[Descrever a HIPÓTESE concreta:]
[- art. 117, I: o apenado conta com [IDADE] anos de idade (doc. anexo); OU]
[- art. 117, II: o apenado é acometido de [DOENÇA GRAVE], conforme laudo médico
   pericial anexo, incompatível com o tratamento adequado no ambiente prisional; OU]
[- art. 117, III: a apenada possui filho menor de idade / com deficiência,
   conforme documento anexo, sendo a responsável indispensável por seus cuidados; OU]
[- art. 117, IV: a apenada encontra-se gestante, conforme laudo anexo; OU]
[- humanitária por falta de vaga: o apenado, progredido ao regime semiaberto
   (decisão de fl./ev. [...]), não dispõe de vaga em estabelecimento adequado,
   conforme certidão anexa, sendo vedada sua manutenção em regime mais gravoso.]


II — DO DIREITO

a) [Se art. 117 LEP] Do direito à prisão domiciliar do art. 117 da LEP
Presente a hipótese do art. 117, [INCISO], da LEP — [descrever] —, e comprovada
documentalmente, faz jus o apenado ao recolhimento em residência particular,
tratando-se de direito e não de mera faculdade do juízo.

b) [Se humanitária por falta de vaga] Da vedação ao regime mais gravoso (SV 56)
Nos termos da Súmula Vinculante 56/STF, a falta de estabelecimento penal
adequado não autoriza a manutenção do condenado em regime mais gravoso. Não
havendo vaga no regime [SEMIABERTO], impõe-se a concessão da prisão domiciliar,
se necessário com monitoração eletrônica (art. 146-B da LEP), vedado o retorno
ou a permanência no regime fechado.

c) [Se humanitária por saúde] Da domiciliar humanitária
O estado de saúde do apenado, atestado por laudo pericial (doc. anexo), é
incompatível com o tratamento no ambiente carcerário, de modo que a manutenção
no cárcere configuraria tratamento desumano, vedado pelo art. 5º, III e XLIX,
da CF, autorizando a prisão domiciliar por fundamento humanitário.

[Toda súmula/precedente específico deve ser conferido via jurisprudencia-stj-stf
antes de citado — revisão humana obrigatória.]


III — DO PEDIDO

Diante do exposto, requer:

a) a concessão da PRISÃO DOMICILIAR ao apenado, com fundamento no art. 117,
   [INCISO], da LEP [e/ou na SV 56/STF e na dignidade da pessoa humana];
b) subsidiariamente, caso não deferida a domiciliar plena, a fixação de
   MONITORAÇÃO ELETRÔNICA (art. 146-B da LEP) e a vedação à manutenção em
   regime mais gravoso (SV 56/STF);
c) a produção de prova pericial médica, se reputada necessária [na hipótese de
   doença grave / gestação];
d) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA TOTAL], [REGIME ATUAL], [CRIME], [INCISO], [IDADE], [DOENÇA GRAVE], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. Cálculo de liquidação de pena atualizado.
3. **Prova da hipótese** (o item decisivo):
   - art. 117, I → documento de identidade comprovando idade ≥ 70 anos;
   - art. 117, II / humanitária por saúde → **laudo médico/pericial** atestando a doença grave **e a incompatibilidade concreta** com o cárcere;
   - art. 117, III → certidão de nascimento do filho menor / laudo de deficiência + prova da indispensabilidade do apenado nos cuidados;
   - art. 117, IV → laudo/atestado de gestação;
   - humanitária por falta de vaga → **certidão de inexistência de vaga** no regime devido.
4. Decisão de progressão / guia de recolhimento (para a hipótese de déficit de vaga).
5. Comprovante de residência fixa (viabiliza o cumprimento domiciliar).

## Roteiro de tese (defesa)

1. **Classificar a via** (execução, não cautelar) e o **regime atual**.
2. **Encaixar o fundamento**: art. 117 (aberto + hipótese) OU humanitária (SV 56 por vaga / dignidade por saúde).
3. **Provar a hipótese** — laudo/certidão/documento — porque é a prova que ganha o pedido.
4. **Invocar a SV 56** sempre que houver déficit de vaga (jamais aceitar regime mais gravoso por omissão do Estado).
5. **Oferecer a monitoração** (art. 146-B) proativamente como condição viabilizadora.
6. **Interpretação ampliativa** dos incisos III/IV (pai responsável; melhor interesse do menor) com base constitucional.
7. **Pedido subsidiário** (monitoração + vedação ao regime mais gravoso) para não sair de mãos vazias.
8. **Conferir todo precedente** via `jurisprudencia-stj-stf` antes de citar.

## Checklist e anti-padrões

- [ ] Confirmado que se trata de **condenado em execução** (não preso cautelar)?
- [ ] **Regime atual** identificado e coerente com o fundamento escolhido?
- [ ] Fundamento correto: **art. 117** (aberto) **ou** humanitária (SV 56 / dignidade) — sem misturar as bases?
- [ ] **Prova da hipótese** anexada (laudo, certidão de vaga, documento de idade, etc.)?
- [ ] **SV 56** invocada na hipótese de falta de vaga?
- [ ] **Monitoração eletrônica** (art. 146-B) oferecida como condição/subsidiário?
- [ ] **Redação vigente** do art. 117 LEP e arts. 33/36 CP conferida (Leis 14.843/2024, 15.358/2026 e 15.402/2026)?
- [ ] Súmulas e julgados **conferidos via `jurisprudencia-stj-stf`** antes de citar?
- [ ] Endereçado ao **Juízo da Execução (VEP)** competente?

**Anti-padrões (evitar):**
- **Confundir com a domiciliar cautelar** (arts. 317-318-B CPP) — errar a base legal derruba tudo.
- Pedir domiciliar do art. 117 para apenado do **fechado** como se fosse aplicação direta da lei (é humanitária, com fundamento constitucional).
- Alegar **doença grave abstrata** sem laudo da **incompatibilidade concreta** com o cárcere.
- Aceitar a **manutenção no fechado** por falta de vaga no semiaberto (viola a SV 56).
- Esquecer de **oferecer a monitoração** — muitas vezes é o que viabiliza o deferimento.
- Citar **HC/REsp/RE de memória** — todo precedente passa por `jurisprudencia-stj-stf`.
- Não instruir com **cálculo de pena** e **prova da hipótese** (pedido tende a ser indeferido).

## Lembretes finais

- **Duas famílias, não confundir:** cautelar (CPP, preso provisório) × apenado (LEP/humanitária, condenado).
- **Art. 117 é taxativo e do regime aberto**; a extensão ao semiaberto/fechado é **humanitária** (dignidade + SV 56).
- **A prova da hipótese ganha o pedido** — laudo pericial, certidão de vaga, documento de idade.
- **SV 56** é a chave do déficit de vaga: sem vaga → domiciliar/monitoração, nunca regime mais gravoso.
- **Sempre há pedido subsidiário** (monitoração + vedação ao regime mais gravoso).
- **Conferir vigência** (Leis 14.843/2024, 15.358/2026 e 15.402/2026) e todo precedente oficial antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico para revisão humana obrigatória** — hipótese a confirmar, jamais peça pronta para protocolo automático. A responsabilidade pela atuação é sempre do **advogado** (ética da advocacia — Estatuto da OAB, CED e Provimento 205/2021; no Ministério Público, normas do CNMP; na Defensoria, LC 80/94). **Nenhuma súmula, tese ou precedente pode ser citado de memória:** tudo passa pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Dados do assistido são sigilosos (LGPD) e não vão a repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
