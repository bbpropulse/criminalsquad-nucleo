---
name: memoriais
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de Memoriais (alegações finais
  escritas) no processo penal brasileiro — seja memoriais da DEFESA (réu), da ACUSAÇÃO (Ministério
  Público) ou da ASSISTÊNCIA DE ACUSAÇÃO (vítima) — no procedimento comum ordinário ou, por
  analogia, na 1ª fase do Tribunal do Júri. Gatilhos: memoriais, memorial, alegações finais
  escritas, art. 403 §3º, art. 404 parágrafo único… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-memoriais"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["memoriais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Memoriais (Alegações Finais Escritas)

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

Esta skill orienta a construção da peça criminal de **Memoriais**, também chamada de *alegações finais escritas*, *memorial* (singular) ou *alegações finais por memoriais*, conforme a metodologia ensinada pelo Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

Ao lado da Resposta à Acusação, é uma das peças mais importantes do **procedimento comum ordinário**. Trata-se da última oportunidade das partes de se manifestarem antes da sentença, exaurindo todos os argumentos possíveis.

> **Petição única (não bipartida).** Diferentemente de RESE e Apelação, os memoriais são **apresentados em petição única** — não há divisão entre interposição (dirigida ao juiz a quo) e razões (dirigidas ao tribunal). Toda a peça é dirigida ao mesmo juízo da instrução. Mesma lógica vale para Embargos de Declaração.

> **Observação pedagógica.** *"Quem sabe fazer memoriais, sabe fazer a apelação — a lógica é exatamente a mesma. Aquilo que você alegou nos memoriais, vai alegar também na apelação."* A estrutura aprendida aqui replica-se nas peças recursais. Dominar memoriais é um investimento que rende em apelação, embargos infringentes, etc.

---

## ⚖️ MEMORIAIS POR PARTE — três (ou quatro) cenários distintos

A skill cobre os três tipos principais, com **estruturas e princípios distintos**:

| Tipo | Quem apresenta | Princípio orientador | Pedido típico |
|---|---|---|---|
| **Memoriais da Acusação** | Ministério Público (em ação pública) ou Querelante (em ação privada) | Suficiência probatória + adequada dosimetria | Procedência da ação (condenação) |
| **Memoriais da Defesa** | Réu, via advogado(a) ou Defensoria Pública | **Eventualidade** (absolvição + subsidiárias) | Absolvição (art. 386 CPP) |
| **Memoriais da Assistência de Acusação** | Vítima ou seu representante (art. 268 CPP) | Reforço probatório + reparação | Procedência + indenização |
| Memoriais do Querelado | Réu em ação privada (substitui a "defesa") | Eventualidade | Absolvição + improcedência da queixa |

Identifique **quem** está apresentando antes de redigir — a estrutura muda significativamente.

---

## Quando esta peça é cabível

Os memoriais ocupam a **7ª fase do procedimento comum ordinário** (alegações finais), após a Audiência de Instrução e Julgamento (AIJ) e a fase de diligências.

As alegações finais podem ser **orais** (chamadas *debates*) ou **escritas** (chamadas *memoriais* ou *memorial*). O art. 403, *caput*, do CPP, estabelece a regra dos debates orais (20 minutos para cada parte, prorrogáveis por 10), mas **na prática hoje a exceção virou regra**: pelo invencível volume de processos, os juízes substituem rotineiramente os debates orais por memoriais escritos.

> **Detalhe linguístico.** A lei usa as duas formas: o **art. 403, §3º** fala em *"memoriais"* (plural); o **art. 404, parágrafo único** fala em *"memorial"* (singular). Ambas as formas são corretas — bem como *"alegações finais escritas"* ou *"alegações finais por memoriais"*.

### Fundamento legal duplo (atenção a este detalhe)

A fonte do prazo depende de **haver ou não diligência pendente** ao final da AIJ:

- **Art. 403, §3º, CPP** — quando **NÃO há** diligência pendente: o juiz pode, considerada a complexidade do caso ou o número de acusados, conceder às partes prazo de **5 dias sucessivos** para apresentação de memoriais. Sentença em 10 dias.

- **Art. 404, parágrafo único, CPP** — quando **HÁ** diligência pendente: ordenada a diligência considerada imprescindível, a audiência conclui-se sem alegações finais. Realizada a diligência, as partes apresentam memoriais no prazo **sucessivo de 5 dias**. Sentença em 10 dias.

### Ordem das partes: MP fala primeiro, depois a defesa

Os memoriais são apresentados em prazo **sucessivo**, não simultâneo. Primeiro fala a **acusação** (MP ou querelante); depois fala a **assistência de acusação**, se houver; depois fala a **defesa**. Quando a defesa for redigir seus memoriais, **os memoriais da acusação já estarão nos autos** — leia-os antes de começar a escrever, e rebata pontos específicos quando pertinente.

### E no Tribunal do Júri?

Na primeira fase do procedimento bifásico (escalonado) do Júri (*judicium accusationis*), o **art. 411, §4º, CPP** prevê apenas alegações finais **orais** (20 + 10 minutos): *"As alegações serão orais, concedendo-se a palavra, respectivamente, à acusação e à defesa, pelo prazo de 20 (vinte) minutos, prorrogáveis por mais 10 (dez)."* Não há previsão expressa de memoriais.

Por isso, quando se pretende apresentar memoriais no Júri, o caminho é a **analogia** autorizada pelo **art. 3º do CPP**: aplicam-se os mesmos artigos do procedimento comum ordinário — 403, §3º (sem diligência) ou 404, parágrafo único (com diligência).

---

## 🟦 BLOCO I — MEMORIAIS DA DEFESA

### Princípio orientador

Vigora o **princípio da eventualidade**: pede-se primeiramente a absolvição (objetivo principal); na **eventualidade** de o cliente vir a ser condenado, postulam-se teses subsidiárias relacionadas à pena (mínimo legal, regime, substituição, sursis) e ao afastamento de qualificadoras/agravantes.

> **Comparação importante:** Na **RA** vigora o princípio da *concentração da matéria de defesa* (alega-se tudo, **menos** teses subsidiárias de pena). Nos **memoriais** vigora o princípio da *eventualidade* (alega-se tudo, **inclusive** teses subsidiárias de pena).

### Estrutura da peça (6 elementos — sem rol de testemunhas)

```
1. Endereçamento
2. Ementa (opcional, estilo acórdão — recurso visual potente)
3. Preâmbulo
4. I — Da Síntese Processual / Dos Fatos / Do Relatório
5. II — Do Direito
   2.1. Do Cabimento (opcional — costuma ser absorvido no preâmbulo)
   2.2. Das Preliminares (se houver)
   2.3. Do Mérito / Das Teses Principais
   2.4. Das Teses Subsidiárias
6. III — Dos Pedidos
7. Fechamento
```

> **Sobre a Ementa (elemento opcional, mas poderoso):** após o endereçamento e antes do preâmbulo, pode-se inserir uma ementa no estilo acórdão, em fonte menor, alinhada à direita ou em caixa, listando as principais teses. Modelo:
>
> ```
> EMENTA: INSUFICIÊNCIA PROBATÓRIA PARA CONDENAÇÃO DO RÉU.
> AFASTAMENTO DA QUALIFICADORA DE MEIO CRUEL.
> AFASTAMENTO DA QUALIFICADORA DO ART. 121-A, §1º, I, DO CP.
> AFASTAMENTO DA INDENIZAÇÃO EM FAVOR DA OFENDIDA.
> ```
> Esse recurso facilita a leitura pela magistratura e antecipa o "índice" das teses.

### Endereçamento

Duas fórmulas válidas:

- **Moderna:** `Ao Juízo da [N]ª Vara Criminal da Comarca de [...]`
- **Tradicional:** `Excelentíssimo(a) Senhor(a) Juiz(a) de Direito da [N]ª Vara Criminal da Comarca de [...]`

Justificativa da fórmula moderna: art. 319, I, CPC + art. 3º CPP. Em Justiça Federal, *"Ao Juízo Federal da [N]ª Vara Federal Criminal da [N]ª Subseção Judiciária"*. Em juizados especializados (ex.: Juizado de Violência Doméstica e Familiar), endereçamento específico ao juízo competente.

### Preâmbulo

**[NOME DO CLIENTE]**, já qualificado(a) nos autos da ação penal em epígrafe, vem, respeitosamente, por intermédio do(a) advogado(a) que ao final subscreve (procuração anexa) [ou: *"por intermédio da Defensoria Pública do Estado [...] através do(a) Defensor(a) Público(a) abaixo assinado(a)"*], com fulcro no art. 403, §3º, do **Código de Processo Penal (CPP)** [ou 404, parágrafo único, se houver diligência pendente], apresentar tempestivamente, no prazo legal de 5 (cinco) dias, **MEMORIAIS**, pelas razões de fato e de direito a seguir expostas:

### I — Da Síntese Processual / Dos Fatos

Resumo objetivo do que ocorreu no processo até aqui: oferecimento da denúncia, recebimento, citação, resposta, AIJ, eventuais diligências. **Não é o momento de teses jurídicas** — apenas contextualização processual e fática enxuta. Nome aceito também: "**Relatório**" ou "**Da Síntese Processual**".

### II — Do Direito

Subdivide-se em até **quatro subitens** no "melhor dos mundos":

#### 2.1. Do Cabimento (opcional)

Conforme a aula "Montando a Peça": *"Sempre estará presente o um do cabimento."* Nos memoriais, costuma-se **absorver o cabimento no próprio preâmbulo** (com a citação do art. 403, §3º ou 404, p.ú.). Quando se opta pela versão expandida, esta subseção reforça por que aquela peça é a adequada naquele momento processual.

#### 2.2. Das Preliminares (se houver)

Teses comuns:

- **Nulidades por ofensa a princípios constitucionais** — art. 5º, **LV** CF (contraditório e ampla defesa: *"Aos litigantes em processo judicial ou administrativo, e aos acusados em geral, são assegurados o contraditório e ampla defesa com os meios e recursos a ela inerentes."*); art. 5º, **LVII** (presunção de inocência); art. 5º, **LVI** (provas ilícitas).
- **Nulidades do CPP** — em especial art. 564, **V** (decisão carente de fundamentação — incluído pelo Pacote Anticrime, Lei 13.964/2019).
- **Falta de instituto despenalizador** — ANPP (art. 28-A CPP), transação penal (art. 76, §2º, Lei 9.099/95), suspensão condicional do processo (art. 89, Lei 9.099/95).
- **Prova ilícita** — art. 5º, LVI, CF + art. 157 CPP + teoria dos frutos da árvore envenenada (art. 157, §1º CPP).
- **Extinção da punibilidade** (prescrição, decadência, perempção). **Atenção:** na RA é mérito (exceção legal do 397, IV); aqui nos memoriais e na apelação, volta a ser **preliminar**.

#### 2.3. Do Mérito (Teses Principais)

**Norte: art. 386 do CPP** — hipóteses de absolvição. As teses devem ser amarradas aos incisos:

| Inciso do art. 386, CPP | Tese principal correspondente |
|---|---|
| I — estar provada a inexistência do fato | Falta de materialidade delitiva (forte) |
| II — não haver prova da existência do fato | Falta de materialidade delitiva (*in dubio*) |
| III — não constituir o fato infração penal | Atipicidade |
| IV — estar provado que o réu não concorreu para a infração | Negativa de autoria (forte) |
| V — não existir prova de ter o réu concorrido para a infração | Falta de prova de autoria |
| VI — circunstâncias que excluam o crime ou isentem o réu de pena, **ou** havendo fundada dúvida | Excludentes; ***in dubio pro reo*** |
| VII — não existir prova suficiente para a condenação | **Insuficiência probatória** (inciso muito utilizado em memoriais) |

Teses típicas: falta de materialidade; falta de autoria/participação; teses de teoria do crime (atipicidade, excludente de ilicitude — ex.: **legítima defesa, art. 25 CP**; exclusão de culpabilidade); insignificância; *in dubio pro reo*; **insuficiência probatória**.

#### 2.4. Das Teses Subsidiárias

Subseção **exclusiva dos memoriais (e da apelação)** — sob o princípio da eventualidade. Categorias principais:

**A) Subsidiárias relativas à PENA (cenário clássico):**

- **Pena-base no mínimo legal** — art. 59 CP.
- **Reconhecimento de atenuantes** — art. 65 CP.
- **Reconhecimento de minorantes** (causas de diminuição).
- **Regime inicial diverso do fechado** — arts. 33 e 59, III, CP.
- **Substituição da PPL por PRD** — art. 44 CP.
- ***Sursis*** (suspensão condicional da pena) — art. 77 CP.

> **Mnemônico do Prof. Salim — "telefone das teses subsidiárias": 59, 65, 77** (+ 44 para PRD). Atenção também à **Súmula 231 STJ**: *"A incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal."*

**B) Subsidiárias relativas ao TIPO PENAL (desclassificação):**

- **Desclassificação** — pedir que o juiz desclassifique a imputação (ex.: consumado → tentado; qualificado → simples; decote de qualificadora).
- **Súmula 337 STJ**: *"É cabível a suspensão condicional do processo na desclassificação do crime e na procedência parcial da pretensão punitiva."* A inteligência pode ser estendida à transação penal e ao ANPP.

**C) Subsidiárias relativas ao AFASTAMENTO DE QUALIFICADORAS/AGRAVANTES:**

Especialmente úteis em casos com múltiplas qualificadoras cumuladas. Exemplos:

- **Afastamento de qualificadora por contradição com a prova pericial** — quando o laudo pericial nega a existência da circunstância qualificadora (ex.: lesão corporal qualificada por meio cruel/asfixia, mas o laudo responde "NÃO" ao quesito sobre meio cruel). Fundamento: **art. 158 CPP** (necessidade de exame de corpo de delito direto quando há vestígios).

- **Bis in idem** — quando a mesma circunstância fática está sendo utilizada para configurar o crime autônomo **e** para incidir agravante/qualificadora. Argumento de **dupla punição pelo mesmo fato**.

  > **Cuidado importante (Tema Repetitivo 1197 STJ):** *"A aplicação da agravante do art. 61, inc. II, alínea f, do Código Penal, em conjunto com as disposições da Lei Maria da Penha (Lei n. 11.340/2006), não configura bis in idem."* Em violência doméstica, a tese de bis in idem precisa ser construída com cuidado para não esbarrar diretamente neste precedente.

**D) Subsidiárias relativas à REPARAÇÃO À VÍTIMA (afastamento):**

- Afastamento do pedido de indenização (art. 387, IV, CPP) por **ausência de contraditório específico** sobre o valor — argumento processual de violação ao art. 5º, LV, CF.
- Argumento de **hipossuficiência econômica** do réu (presunção quando assistido pela Defensoria).
- Argumento de **inexistência de prejuízo material ou moral demonstrado**.

### III — Dos Pedidos

Iniciar com `Ante o exposto, requer-se:`.

```
a) o recebimento dos presentes Memoriais;
b) o acolhimento da(s) preliminar(es) suscitada(s) [se houver];
c) NO MÉRITO, a ABSOLVIÇÃO do(a) acusado(a), com fundamento no
   art. 386, [inciso aplicável], do CPP;
d) SUBSIDIARIAMENTE, com base no princípio da eventualidade:
   d.1) afastamento da qualificadora [...] (art. [...]);
   d.2) reconhecimento da atenuante [...];
   d.3) fixação da pena-base no mínimo legal;
   d.4) regime inicial [aberto/semiaberto];
   d.5) substituição da PPL por PRD (art. 44 CP);
   d.6) sursis (art. 77 CP);
   d.7) afastamento da indenização à vítima (art. 387, IV, CPP).
```

### Fechamento

```
Termos em que,
Pede deferimento.

[Local], [data].

_________________________________________
[NOME DO(A) ADVOGADO(A)]
OAB/[UF] nº [número]
```

**Sem rol de testemunhas.**

---

## 🟥 BLOCO II — MEMORIAIS DA ACUSAÇÃO (MP ou Querelante)

### Princípio orientador

Não vigora o princípio da eventualidade. A acusação trabalha **suficiência probatória** (materialidade e autoria) + **adequada dosimetria da pena** + **reparação à vítima**, quando cabível.

### Estrutura da peça

```
1. Cabeçalho institucional (Ministério Público / Promotoria)
2. Identificação do juízo, processo, réu, vítima
3. Título: MEMORIAIS
4. Vocativo: "MM. Juíza:" ou "MM. Juiz:"
5. 1 — Relatório
6. 2 — Fundamentação
   2.1. Dos elementos informativos do Inquérito Policial
   2.2. Das provas produzidas em Juízo
   2.3. Análise da prova (materialidade + autoria)
7. 3 — Dosimetria da pena
   1ª fase — Pena-base (circunstâncias judiciais do art. 59 CP)
   2ª fase — Agravantes e atenuantes (arts. 61-65 CP)
   3ª fase — Causas de aumento e diminuição
8. 4 — Indenização à vítima (quando cabível)
9. 5 — Pedidos
10. Local, data e assinatura do membro do MP/querelante
```

### Diferenças marcantes em relação aos memoriais da defesa

| Elemento | Acusação | Defesa |
|---|---|---|
| Pedido principal | Procedência (condenação) | Absolvição |
| Subsidiárias | Não há | Há (eventualidade) |
| Dosimetria | **Tópico autônomo destacado** | Entra nas subsidiárias |
| Indenização à vítima | Postula (quando cabível) | Refuta |
| Ementa inicial | Geralmente não usa | Pode usar |
| Tom | Acusatório fundamentado | Defensivo argumentativo |

### Sobre a Dosimetria (estrutura sempre presente em memoriais do MP)

Apresentar em **três fases**, conforme o sistema trifásico de Nélson Hungria (positivado no art. 68 CP):

**1ª fase — Pena-base:** análise das 8 circunstâncias judiciais do **art. 59 CP** (culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias e consequências do crime, comportamento da vítima). Fundamentação concreta de cada circunstância negativa, com vinculação aos fatos provados nos autos.

**2ª fase — Agravantes e atenuantes:** arts. **61** (genéricas) e **62** (em concurso de pessoas) para agravantes; arts. **65** e **66** para atenuantes. Em violência doméstica, agravante do **art. 61, II, "f"** ("prevaleceu-se de relações domésticas"). Reincidência (art. 61, I) também aqui.

**3ª fase — Causas de aumento e diminuição:** específicas do tipo penal (Parte Especial) ou da Parte Geral (ex.: tentativa, art. 14, II; arrependimento posterior, art. 16; semi-imputabilidade, art. 26, p.ú.).

> **Súmula 231 STJ** — *"A incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal."* — limite da 2ª fase.

> **Tema Repetitivo 1197 STJ** — *"A aplicação da agravante do art. 61, inc. II, alínea f, do Código Penal (CP), em conjunto com as disposições da Lei Maria da Penha (Lei n. 11.340/2006), não configura bis in idem."*

### Sobre a Reparação à Vítima (art. 387, IV, CPP)

A reparação mínima exige **pedido expresso** na denúncia ou nos memoriais. Não pode ser fixada de ofício.

> **Tema Repetitivo 983 STJ** — *"Nos casos de violência contra a mulher praticados no âmbito doméstico e familiar, é possível a fixação de valor mínimo indenizatório a título de dano moral, desde que haja pedido expresso da acusação ou da parte ofendida, ainda que não especificada a quantia, e independentemente de instrução probatória."*

Em violência doméstica, o dano moral é considerado *in re ipsa* (presumido).

### Pedidos típicos (MP)

```
Isso posto, o Ministério Público requer:

a) seja a ação penal julgada procedente, condenando-se o réu
   [NOME] pelos delitos de [...], com o reconhecimento do
   concurso material (art. 69 CP) [se for o caso];

b) a fixação de pena-base acima do mínimo legal em razão das
   circunstâncias judiciais negativas;

c) o reconhecimento das agravantes [...];

d) a fixação de valor mínimo de reparação dos danos materiais e
   morais causados pelas infrações (art. 387, IV, CPP), que são
   in re ipsa.
```

---

## 🟨 BLOCO III — MEMORIAIS DA ASSISTÊNCIA DE ACUSAÇÃO

### Fundamento legal

A assistência de acusação é regulada pelos **arts. 268 a 273 do CPP**. A vítima (ofendido) ou seu representante legal pode intervir na ação penal pública, **aderindo à acusação**.

> **Cuidado:** a assistência **só cabe em ação penal pública**. Em ação penal privada, a vítima já é a parte (querelante).

### Princípio orientador

A assistência **reforça a acusação do MP**: amplia argumentos, traz aspectos probatórios que o MP possa ter deixado de explorar, e **postula a reparação à vítima** (quando o MP não o fez ou para reforçar o pedido).

### Estrutura da peça

A estrutura é semelhante à dos memoriais do MP, mas com tom de **adesão e complementação**:

```
1. Endereçamento (idem)
2. Cabeçalho do escritório do assistente
3. (Opcional) Sumário inicial dos pontos a serem desenvolvidos
4. Identificação do processo e da vítima
5. 1 — Condutas delitivas e provas
   A. [crime 1] — fatos, provas, fundamentos
   B. [crime 2] — fatos, provas, fundamentos
6. 2 — Penas (dosimetria, alinhada ao MP)
7. 3 — Reparação à vítima (pedido específico de valor)
8. 4 — Conclusões e pedidos
9. Fechamento com OAB
```

### Pedidos típicos (assistência)

```
a) a condenação do réu nos termos da denúncia, ratificando os
   pedidos do Ministério Público;

b) a aplicação dos aumentos de pena a partir das circunstâncias
   judiciais negativas e agravantes comprovadas;

c) a fixação de indenização à vítima em valor não inferior a
   R$ [valor], em decorrência da violência [doméstica contra a
   mulher / patrimonial / moral] sofrida.
```

> **Recurso visual frequente em memoriais da assistência:** uso de **boxes laterais ou destacados** com transcrições de depoimentos, laudos periciais e citações jurídicas. Facilita a leitura e funciona como apelo visual ao magistrado.

---

## 🟪 BLOCO IV — VIOLÊNCIA DOMÉSTICA E FAMILIAR (cenário muito frequente)

Por ser um dos cenários mais comuns em memoriais — e por ter particularidades importantes — vale tratamento específico.

### Marco normativo

- **Lei 11.340/2006 (Lei Maria da Penha)** — proteção à mulher contra a violência doméstica.
- **Art. 129, §13, CP** — lesão corporal qualificada quando praticada contra a mulher por razões da condição do sexo feminino, no âmbito doméstico (introduzido pela Lei 14.188/2021).
- **Art. 121-A CP** — feminicídio como tipo autônomo (introduzido pela Lei 14.994/2024, que separou o feminicídio do homicídio qualificado).
- **Art. 147, §1º, CP** — ameaça no contexto de violência doméstica (com aumento de pena).
- **Art. 61, II, "f", CP** — agravante de prevalecimento de relações domésticas.
- **Resolução 492/2023 do CNJ** — **Protocolo para Julgamento com Perspectiva de Gênero** — fonte normativa que orienta a valoração da palavra da vítima em delitos de violência de gênero.

### Particularidades probatórias

- **Palavra da vítima como meio de prova qualificado** — a jurisprudência consolidada (notadamente STJ) reconhece especial valor probatório à palavra da vítima nos crimes praticados em âmbito doméstico, dada a clandestinidade típica desses delitos.
- **Atestado médico em substituição ao exame de corpo de delito** — **art. 12, §3º, Lei 11.340/2006** autoriza laudos e prontuários médicos como meio de prova substitutivo do exame pericial.
- **Súmula 589 STJ** — *"É inaplicável o princípio da insignificância nos crimes ou contravenções penais praticados contra a mulher no âmbito das relações domésticas."*
- **Súmula 588 STJ** — *"A prática de crime ou contravenção penal contra a mulher com violência ou grave ameaça no ambiente doméstico impossibilita a substituição da pena privativa de liberdade por restritiva de direitos."*

### Teses defensivas comuns

- **Legítima defesa** (art. 25 CP) — quando a versão do réu é de que repeliu agressão da vítima.
- **Insuficiência probatória** (386, VII, CPP) — quando os depoimentos não convergem ou há contradições.
- **Afastamento de qualificadora por contradição com o laudo pericial** (ex.: laudo nega meio cruel/asfixia).
- **Bis in idem** entre tipificação autônoma (art. 129, §13) e qualificadora/agravante (art. 121-A, §1º, I, ou art. 61, II, "f") — **atenção ao Tema 1197 STJ**, que rejeita a tese quanto à agravante do 61, II, "f".
- **Afastamento da indenização** por ausência de contraditório específico sobre o valor.

### Teses acusatórias comuns

- **Aplicação da Lei Maria da Penha** + **agravantes do art. 61, II, "f"** (relações domésticas) e art. 61, II, "d" (meio cruel — quando aplicável) ou **inciso I** (reincidência).
- **Concurso material** (art. 69 CP) entre lesão corporal + ameaça.
- **Reparação à vítima** com fundamento no **Tema 983 STJ** (dano moral *in re ipsa*).
- **Valoração da palavra da vítima** com apoio na **Resolução 492 CNJ** e nas Súmulas 588 e 589 STJ.

### Endereçamento específico

```
AO JUÍZO DO [Nº] JUIZADO DE VIOLÊNCIA DOMÉSTICA E FAMILIAR
CONTRA A MULHER DA COMARCA DE [CIDADE] — [UF]
```

ou, na fórmula tradicional:

```
EXCELENTÍSSIMA(O) SENHORA(O) JUÍZA(O) DE DIREITO DO [Nº] JUIZADO
DE VIOLÊNCIA DOMÉSTICA E FAMILIAR CONTRA A MULHER
DA COMARCA DE [CIDADE] — [UF]
```

---

## 📚 Súmulas e Temas Repetitivos verificados (citáveis com segurança)

> **Atenção:** o teor literal deve sempre ser confirmado na fonte oficial. Esta é uma lista de **referências verificadas** úteis em memoriais. Não cite súmula fora desta lista sem confirmação prévia (ver Diretriz Anti-Alucinação).

| Norma | Teor (resumido) | Aplicação típica |
|---|---|---|
| **Súmula 231 STJ** | Atenuante não reduz pena abaixo do mínimo legal | Dosimetria — 2ª fase |
| **Súmula 337 STJ** | SCP cabível na desclassificação e procedência parcial | Subsidiárias — desclassificação |
| **Súmula 444 STJ** | Vedada utilização de IP/ação penal em curso para agravar pena-base | Dosimetria — afastamento de antecedentes |
| **Súmula 588 STJ** | Impossível substituição de PPL por PRD em crime com violência/grave ameaça no ambiente doméstico contra mulher | Subsidiárias defesa (afastamento da tese de PRD) |
| **Súmula 589 STJ** | Princípio da insignificância inaplicável em violência doméstica | Mérito (afastamento da tese de insignificância) |
| **Súmula 700 STF** | 5 dias para agravo em execução penal | Não aplicável a memoriais |
| **Súmula 713 STF** | Efeito devolutivo da apelação do júri adstrito aos fundamentos da interposição | Não aplicável a memoriais |
| **Tema Repetitivo 983 STJ** | Fixação de valor mínimo indenizatório em violência doméstica exige pedido expresso, mas independe de instrução probatória; dano moral *in re ipsa* | Reparação à vítima (MP/assistência) |
| **Tema Repetitivo 1197 STJ** | Agravante do art. 61, II, "f" + Lei Maria da Penha **não** é bis in idem | Dosimetria (MP) / cuidado nas teses defensivas |
| **Resolução 492/2023 CNJ** | Protocolo para Julgamento com Perspectiva de Gênero | Valoração da palavra da vítima |

---

## ⚠️ Auditoria pré-protocolo

Toda peça de memoriais gerada deve terminar com bloco de auditoria explícito (ver Diretriz Anti-Alucinação). Itens críticos:

- [ ] **Quem está apresentando?** Acusação / Defesa / Assistência — estrutura adequada?
- [ ] **Fundamento legal correto?** 403, §3º (sem diligência) ou 404, p.ú. (com diligência)?
- [ ] **No Júri**, mencionada a aplicação por analogia (art. 3º CPP)?
- [ ] **CPP escrito por extenso na primeira menção**?
- [ ] **Tempestividade** mencionada ("5 (cinco) dias")?
- [ ] **Memoriais da acusação já foram lidos** (defesa fala depois, em prazo sucessivo)?
- [ ] **Estrutura adequada à parte** (defesa: preliminares + mérito + subsidiárias; MP: provas + dosimetria + indenização; assistência: condutas + penas + reparação)?
- [ ] **Mérito amarrado a incisos específicos do art. 386 CPP** (na defesa)?
- [ ] **Dosimetria em 3 fases** (no MP)?
- [ ] **Reparação à vítima** considerada (art. 387, IV + Tema 983 STJ em VD)?
- [ ] **Petição única** (sem divisão interposição/razões)?
- [ ] **Sem rol de testemunhas**?
- [ ] **Súmulas e Temas Repetitivos** citados — todos verificados?
- [ ] **Em violência doméstica**: Resolução 492 CNJ, art. 12 §3º da Lei 11.340 e Súmulas 588/589 STJ considerados?

---

## Distinções e Júri

Leia [complementos processuais](references/complementos-processuais.md) quando precisar comparar memoriais com as peças adjacentes ou atuar na primeira fase do Tribunal do Júri. Confirme rito, fundamento e prazo na fonte oficial atual.

---

## Lembretes finais

- **Identifique a parte antes de redigir.** Memoriais da acusação, defesa e assistência têm estruturas distintas.
- **Petição única** — sem divisão entre interposição e razões.
- **Fundamento legal duplo**: 403, §3º (sem diligência) ou 404, p.ú. (com diligência).
- **Prazo: 5 dias sucessivos** — MP fala primeiro, depois assistência (se houver), depois defesa.
- **Princípio da eventualidade** (defesa) — não confundir com concentração (RA).
- **Sem rol de testemunhas** — diferença marcante em relação à RA, queixa-crime e resposta preliminar.
- **Telefone das subsidiárias: 59, 65, 77** (+ 44 para PRD).
- **Súmulas críticas em VD**: 588 e 589 STJ; Temas 983 e 1197 STJ.
- **Dosimetria em 3 fases** — sempre presente nos memoriais do MP, e nas subsidiárias da defesa.
- **Reparação à vítima (art. 387, IV CPP)** — exige pedido expresso; em VD, dano moral é *in re ipsa* (Tema 983 STJ).
- **No Júri (1ª fase)** — não há previsão legal expressa de memoriais; aplica-se por analogia (art. 3º CPP). Pedidos específicos: impronúncia (414), absolvição sumária (415), desclassificação (419).
- **Investimento que rende:** quem domina memoriais domina apelação — a estrutura se replica.
- Sempre **adaptar ao caso concreto**: as teses devem decorrer dos fatos e provas, não ser repetidas como fórmula vazia.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
