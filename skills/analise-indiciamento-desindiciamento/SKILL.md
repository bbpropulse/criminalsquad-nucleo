---
name: analise-indiciamento-desindiciamento
description: >-
  Use para analisar e impugnar o ATO DE INDICIAMENTO — controle dos requisitos (fundamentação
  técnico-jurídica, lastro de autoria e materialidade, momento adequado), diagnóstico de
  indiciamento prematuro/imotivado/coato e elaboração de RASCUNHO de requerimento de desindiciamento
  ao delegado ou de HC contra indiciamento ilegal. Gatilhos: análise do indiciamento, cliente foi
  indiciado, indiciamento sem fundamentação… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-indiciamento-desindiciamento"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-indiciamento-desindiciamento", "analise indiciamento", "indiciamento desindiciamento"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Análise do Indiciamento e Desindiciamento (Lei 12.830/2013, art. 2º, §6º)

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

Esta skill orienta a **leitura crítica e a impugnação do ato de indiciamento** — o ato formal, privativo do Delegado de Polícia, pelo qual a autoridade **aponta um investigado como provável autor** da infração, com base em análise técnico-jurídica do fato. Aqui se **analisa** se o indiciamento preencheu seus requisitos, se **diagnostica** eventual ilegalidade (prematuro, imotivado, incompetente ou fora de momento) e se **produz** o pedido: **desindiciamento** ao delegado ou **habeas corpus** contra o ato coator.

Não confundir com `defesa-no-inquerito`, que trata da rotina defensiva ampla na investigação (diligências, oitivas, investigação defensiva) e cita o indiciamento *en passant*. Esta é a skill **atômica** do ato de indiciamento em si.

> **Lição central:** indiciamento **não** é sinônimo de "ser investigado" nem de "ser denunciado". É ato específico, com **efeitos próprios** (registro nos antecedentes policiais, constrangimento à imagem, marco de individualização da suspeita) e por isso **exige fundamentação** (Lei 12.830/2013, art. 2º, §6º). Sem análise técnico-jurídica que aponte indícios convergentes de autoria e materialidade, o indiciamento é ilegal — e o ato imotivado ou intempestivo é o alvo natural do desindiciamento e do HC.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente da **Lei 12.830/2013** (art. 2º e §§) e dos **arts. 6º, 9º e 23 do CPP**, bem como o teor atual das **súmulas e precedentes** do STJ/STF sobre indiciamento após o recebimento da denúncia e sobre a via do HC — tudo via a skill `jurisprudencia-stj-stf`. Não cite número de acórdão, informativo ou tema de memória.

## O instituto e a base legal

O indiciamento é a **imputação administrativa** da autoria provável a alguém, dentro do inquérito, pelo Delegado. É **ato de convicção da autoridade policial**, mas **não discricionário puro**: a Lei 12.830/2013 o vinculou a **fundamentação** e a **análise técnico-jurídica do fato**. Dele decorrem consequências reais (constrangimento, anotação em prontuário/antecedentes policiais, uso desabonador), o que legitima seu controle pela defesa.

| Dispositivo | O que estabelece |
|---|---|
| **Lei 12.830/2013, art. 2º, §6º** | O indiciamento é **ato privativo do Delegado de Polícia**, mediante **despacho fundamentado**, com **análise técnico-jurídica do fato** e indicação da **autoria, materialidade e circunstâncias** |
| **Lei 12.830/2013, art. 2º, *caput* e §1º** | As funções de polícia judiciária e a apuração de infrações são **privativas do Delegado** — daí decorre a **privatividade** do indiciamento |
| **CPP, art. 6º** | Providências da autoridade policial ao tomar conhecimento do fato (colheita de elementos que lastreiam, ou não, o juízo de indiciamento) |
| **CPP, art. 9º** | O inquérito é **escrito** — o indiciamento deve constar formalmente dos autos, por despacho/auto próprio |
| **CPP, art. 23** | Ao **relatar** o inquérito, a autoridade remete os autos ao juízo/MP; o relatório não é o momento de inovar em indiciamento após a fase própria |
| **CF, art. 5º, LXVIII** | Cabimento do **habeas corpus** contra constrangimento ilegal — via de impugnação do indiciamento abusivo |

## Requisitos de validade do indiciamento (o que a análise fiscaliza)

Um indiciamento hígido reúne, cumulativamente:

1. **Competência (privatividade)** — foi formalizado pelo **Delegado de Polícia**, não por juiz, MP, CPI ou autoridade administrativa diversa. O indiciamento **por requisição** de juiz ou promotor é ponto sensível: a autoridade policial não está obrigada a indiciar por ordem externa, pois o ato é de sua convicção técnica (**tese a confirmar via `jurisprudencia-stj-stf`**).
2. **Fundamentação (motivação técnico-jurídica)** — despacho que **exponha as razões**: quais elementos apontam a autoria provável, qual a materialidade, como o fato se subsume ao tipo. Indiciamento "por presunção", por mera posição funcional ou por estar o nome nos autos é **imotivado**.
3. **Lastro probatório mínimo (justa causa da suspeita)** — **indícios convergentes** de autoria + prova da materialidade. Não se exige certeza (isso é do processo), mas **elementos concretos**, não conjecturas.
4. **Momento adequado (tempestividade)** — o indiciamento é ato da **fase investigativa**. Regra prática de forte aceitação: **é ilegal o indiciamento após o recebimento da denúncia**, porque, iniciada a ação penal, a formação da culpa migra para o juízo e o ato perde utilidade, servindo apenas para constranger (**confirmar o precedente aplicável via `jurisprudencia-stj-stf`**).
5. **Individualização** — aponta **quem**, por **qual conduta**, em **qual tipo** — sem generalização que atinja pessoas por vínculo genérico (societário, familiar, funcional).

## Roteiro de análise — passo a passo

1. **Localizar o ato nos autos.** Onde e como se deu o indiciamento? Auto de qualificação e interrogatório do indiciado, despacho autônomo, ou apenas menção no **relatório final** (art. 23)? Indiciamento "escondido" no relatório, sem despacho fundamentado próprio, é vício formal a explorar.
2. **Datar o ato e cruzar com a marcha processual.** O indiciamento veio **antes** do oferecimento/recebimento da denúncia? Se **posterior ao recebimento**, há forte fundamento de ilegalidade por intempestividade.
3. **Testar a competência.** Quem indiciou foi o Delegado? Houve **requisição** de juiz/MP determinando o indiciamento? Registrar para a tese da privatividade.
4. **Auditar a fundamentação.** O despacho **explica** por que se atribui a autoria? Ou é fórmula genérica ("os elementos apontam para o investigado")? Fundamentação aparente = ausência de fundamentação.
5. **Medir o lastro.** Que elementos concretos sustentam a autoria provável? Há **indícios convergentes** ou só ilações? Materialidade demonstrada (laudo, corpo de delito, documento)?
6. **Verificar a individualização.** A imputação é personalizada ou decorre de vínculo genérico (sócio, cônjuge, subordinado)?
7. **Escolher a via.** Vício **sanável/gradual** e ainda em fase policial → **requerimento de desindiciamento ao próprio delegado**. Constrangimento **patente e atual**, delegado inerte ou ato consumado sem base → **HC** (autoridade coatora: o Delegado; competência conforme a estrutura — analisar caso a caso).

## Teses defensivas (impugnação) e contra-teses

**Teses defensivas típicas:**

- **Ausência de fundamentação (art. 2º, §6º, Lei 12.830):** o despacho não fez a **análise técnico-jurídica** exigida; indiciamento por presunção/genérico é nulo. *In dubio pro reo* não legitima suspeita imotivada.
- **Indiciamento intempestivo (após o recebimento da denúncia):** iniciada a ação penal, o ato é **desnecessário** e serve só ao constrangimento — impugnável por HC. **[NÃO VERIFICADO — conferir o precedente exato via `jurisprudencia-stj-stf`.]**
- **Indiciamento coato (por requisição de juiz/MP):** o ato é de convicção do Delegado; a imposição externa desnatura sua privatividade (art. 2º, Lei 12.830). **[NÃO VERIFICADO — conferir precedente via `jurisprudencia-stj-stf`.]**
- **Falta de justa causa da suspeita:** sem indícios convergentes de autoria e sem materialidade, o indiciamento é abuso — mesma lógica do trancamento de IP por falta de justa causa (ver `habeas-corpus`).
- **Incompetência da autoridade / vício de forma:** ato praticado por quem não é Delegado, ou sem a forma escrita e fundamentada (arts. 9º e 6º do CPP).
- **Ausência de individualização:** imputação por vínculo genérico, sem descrição de conduta própria.

**Contra-teses (a antecipar — visão da autoridade/acusação):**

- O indiciamento é **ato de convicção** do Delegado, sujeito a controle apenas de legalidade, não de mérito da suspeita — o Judiciário não substitui a valoração policial.
- O inquérito é **peça informativa e inquisitiva**; vícios do IP, em regra, **não contaminam** a ação penal, salvo prova ilícita (CPP, art. 157).
- Há **lastro mínimo** nos autos; a exigência de fundamentação não impõe certeza, própria do processo.
- HC **não é a via** para revolver prova / matéria que dependa de dilação — reservado a constrangimento **manifesto** e demonstrável de plano.

> **Régua da via:** o **desindiciamento** dialoga com o delegado e é reversível/administrativo; o **HC** exige ilegalidade **evidente e atual**, comprovável **documentalmente** (sem dilação probatória). Escolher a via errada custa tempo e credibilidade.

## Efeitos do indiciamento (por que impugnar importa)

- **Registro em antecedentes/prontuário policial** e possível menção desabonadora em consultas e certidões de natureza policial.
- **Constrangimento à imagem e à honra**, sobretudo em casos de repercussão.
- **Marco simbólico** que orienta a leitura do MP sobre o caso (mesmo sem vincular a denúncia).
- Não é condenação nem culpa — daí a força da **presunção de inocência (CF, art. 5º, LVII)** como fundamento transversal da impugnação.

## Súmulas e precedentes relevantes (sob o Citation Gate)

- **Súmula Vinculante 14/STF** — direito do defensor de **acesso aos elementos de prova já documentados** no procedimento investigatório: pressuposto para **conhecer o ato** de indiciamento e impugná-lo (skill irmã `acesso-autos-investigacao`).
- **Jurisprudência STJ/STF sobre indiciamento após o recebimento da denúncia** (ilegalidade por intempestividade) — **[NÃO VERIFICADO]**: confirmar número e teor via `jurisprudencia-stj-stf` antes de citar.
- **Jurisprudência STJ/STF sobre indiciamento por requisição de juiz/MP** (privatividade do ato pelo Delegado) — **[NÃO VERIFICADO]**: confirmar via `jurisprudencia-stj-stf`.
- **Trancamento de IP / desindiciamento por falta de justa causa via HC** — **[NÃO VERIFICADO]**: linha reservada a casos de **atipicidade manifesta** ou **ausência absoluta de indícios**; conferir o precedente e o padrão de excepcionalidade via `jurisprudencia-stj-stf`.

> **Diretriz anti-alucinação:** ensine a **tese** e o **dispositivo** (Lei 12.830, art. 2º, §6º; CPP, arts. 6º, 9º, 23; CF, art. 5º, LVII e LXVIII). **Número de HC/REsp/RE, informativo e tema** só entram após conferência na skill `jurisprudencia-stj-stf`. Melhor faltar precedente do que citar julgado inexistente.

## Modelo — Requerimento de desindiciamento (ao Delegado)

```
À AUTORIDADE POLICIAL — [DELEGACIA] — [COMARCA/UF]

Inquérito Policial nº [Nº DO IP]

[NOME DO INVESTIGADO], já qualificado nos autos do inquérito em epígrafe,
por seu advogado que esta subscreve (procuração e substabelecimento anexos),
vem, respeitosamente, requerer o seu

DESINDICIAMENTO

pelas razões de fato e de direito a seguir expostas.

I — DO ATO IMPUGNADO
Consta dos autos o indiciamento do requerente [em [DATA] / no despacho de
fl./ev. [...] / no relatório final], atribuindo-lhe a autoria do crime de
[TIPO PENAL], nos seguintes termos: [transcrever o essencial do ato].

II — DA AUSÊNCIA DOS REQUISITOS (Lei 12.830/2013, art. 2º, §6º)
O indiciamento é ato privativo do Delegado de Polícia e reclama despacho
FUNDAMENTADO, com análise técnico-jurídica do fato. No caso, [apontar o vício:
ausência de fundamentação / falta de lastro de autoria / indiciamento após o
recebimento da denúncia / imputação por vínculo genérico / requisição externa].

[Desenvolver a tese aplicável — ver "Teses defensivas". Toda referência
jurisprudencial deve ser conferida via `jurisprudencia-stj-stf`.]

III — DO PEDIDO
Requer, ao final:
a) o DESINDICIAMENTO do requerente, com a exclusão do ato dos autos e das bases
   de antecedentes policiais correspondentes;
b) subsidiariamente, a fundamentação complementar do ato, sob pena de nulidade;
c) a certificação, nos autos, da presente manifestação.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [Nº]
```

**Campos a preencher:** [DELEGACIA], [COMARCA/UF], [Nº DO IP], [NOME DO INVESTIGADO], [DATA], [TIPO PENAL], [LOCAL], [NOME DO ADVOGADO], [UF], [Nº] OAB.

> **HC contra indiciamento ilegal:** quando o delegado for inerte, o ato consumado e o constrangimento patente e atual, a via é o **habeas corpus** — autoridade coatora o Delegado, pedido de **anulação do indiciamento**/trancamento parcial. Redija com a skill `habeas-corpus` (impetração, competência, prova pré-constituída, ausência de dilação).

## Erros comuns / checklist final

- [ ] **Ato localizado e datado** — despacho autônomo, auto de qualificação ou só o relatório (art. 23)?
- [ ] **Tempestividade** conferida — houve indiciamento **após o recebimento da denúncia**?
- [ ] **Competência** verificada — foi o **Delegado**? Houve **requisição** de juiz/MP?
- [ ] **Fundamentação** auditada — análise técnico-jurídica real (art. 2º, §6º) ou fórmula genérica?
- [ ] **Lastro** medido — indícios convergentes de autoria + materialidade, ou conjectura?
- [ ] **Individualização** — conduta própria descrita, sem vínculo genérico?
- [ ] **Via correta** — desindiciamento (delegado) × HC (constrangimento manifesto, prova pré-constituída)?
- [ ] **Acesso aos autos** garantido (SV 14) para conhecer e impugnar o ato?
- [ ] **Citações conferidas** via `jurisprudencia-stj-stf` — nenhum número de julgado de memória?

**Anti-padrões (evitar):**
- Tratar "indiciado", "investigado" e "denunciado" como sinônimos — são fases e atos distintos, com efeitos distintos.
- Impetrar HC para discutir **mérito da suspeita** que exige dilação probatória (reservar o HC ao vício **manifesto**).
- Pedir desindiciamento sem apontar **qual requisito** faltou (o pedido genérico é indeferido).
- Citar precedente sobre "indiciamento após a denúncia" **sem** conferir número e teor atualizados.
- Ignorar o vício **formal** (ato só no relatório, sem despacho fundamentado próprio).
- Confundir a privatividade do ato: não é o juiz nem o MP que indicia.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material apoia a análise e a redação; a responsabilidade pela peça e pela estratégia é do **advogado** que subscreve.
- **Citation Gate.** Dispositivos de lei podem ser citados; **qualquer precedente específico** (HC/REsp/RE, informativo, tema) só após verificação na skill `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.
- **Sigilo e LGPD.** Dados do investigado não vão a repositório público; observar o sigilo do inquérito.
- **Ética por polo.** Advocacia: **EAOAB + CED + Provimento 205/2021** da OAB. Se a instituição atuar em outro polo, aplicam-se **CNMP** (Ministério Público) ou **LC 80/94** (Defensoria) — o roteador confere o polo no `company.md` antes de acionar esta skill.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
