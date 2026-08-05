---
name: interpelacao-judicial-pedido-explicacoes
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a INTERPELAÇÃO JUDICIAL ou NOTIFICAÇÃO PARA PEDIDO
  DE EXPLICAÇÕES EM JUÍZO (art. 144 do CP) — providência PREPARATÓRIA e FACULTATIVA dos crimes
  contra a honra, para esclarecer referências, alusões ou frases equívocas antes de decidir pela
  queixa-crime. Gatilhos: interpelação judicial, pedido de explicações, explicações em juízo,
  notificação para explicações, art. 144 CP… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-interpelacao-judicial-pedido-explicacoes"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["interpelacao-judicial-pedido-explicacoes", "interpelacao judicial", "pedido explicacoes"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Interpelação Judicial / Pedido de Explicações (CP art. 144)

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

Esta skill orienta a construção da **Interpelação Judicial** (também chamada **notificação para pedido de explicações em juízo**), a providência **preparatória e facultativa** prevista no **art. 144 do Código Penal** para os **crimes contra a honra** (calúnia, difamação, injúria) — quando alguém, "em referências, alusões ou frases", diz coisa que **admite sentido ofensivo**, mas cujo alcance é **equívoco/dúbio**. A interpelação serve para o ofendido **pedir explicações em juízo** antes de decidir se ajuíza a queixa. Ela **PREPARA** a peça acusatória: a decisão de processar (e como capitular) mora na skill `queixa-crime`; a hipótese de a vítima não querer processar, nos crimes de honra em que a ação seja **pública condicionada à representação** — p. ex. a hipótese do art. 145, parágrafo único, CP (crime contra a honra de funcionário público em razão das funções), a confirmar via `lei-e-sumula` [NÃO VERIFICADO] —, mora em `retratacao-representacao`. Aqui só se cuida do ato preparatório de **esclarecimento**.

> **Lição central:** a interpelação **NÃO é condição de procedibilidade** — não é obrigatória, e a queixa pode ser ajuizada diretamente. E o ponto que mais derruba: o pedido de explicações **NÃO interrompe nem suspende a decadência**. O prazo de 6 meses (art. 38 CPP) segue correndo enquanto se aguarda a resposta. Quem interpela às vésperas do fim do prazo pode ver a decadência consumar-se antes de resolver processar.

## O instituto e a base legal

| Dispositivo | O que garante / exige |
|---|---|
| **CP art. 144** | Cabimento: "se, de referências, alusões ou frases, se infere calúnia, difamação ou injúria, quem se julga ofendido pode pedir explicações em juízo. Aquele que se recusa a dá-las ou, a critério do juiz, não as dá satisfatórias, responde pela ofensa." |
| **CP arts. 138, 139, 140** | Os crimes contra a honra cujo sentido dúbio se busca esclarecer: **calúnia** (138), **difamação** (139), **injúria** (140). |
| **CPP art. 38** | Prazo **decadencial** de 6 meses da queixa — **corre normalmente**; a interpelação não o interrompe nem suspende. |
| **CPP art. 44** | Procuração **com poderes especiais** (nome do ofendido + menção ao fato) — porque a interpelação prepara ação penal privada. |
| **CPC arts. 726 a 729** (subsidiário) | Procedimento da **notificação e interpelação** (jurisdição voluntária), aplicado por analogia ao pedido de explicações. |

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência | Onde |
|---|---|---|
| Manifestação **claramente** ofensiva, autoria e sentido inequívocos | **Não** interpele — ajuíze a queixa direto | `queixa-crime` |
| Frase/alusão de **sentido dúbio**, ofensa apenas *inferível* | Interpelação judicial (art. 144) para esclarecer | **esta skill** |
| Explicações prestadas **satisfatórias** | Arquiva-se o pedido; reavaliar se ainda cabe queixa | `queixa-crime` |
| Recusa a explicar, ou explicações **insatisfatórias** | Isso **não** condena ninguém — habilita/embasa a queixa | `queixa-crime` |
| Crime de honra de **ação pública condicionada à representação** (ex.: art. 145, par. único, CP) e a vítima não quer processar | Renúncia/retratação da representação | `retratacao-representacao` |
| Prazo decadencial **próximo do fim** | **Cuidado:** interpelar não segura o prazo — pondere ajuizar direto | **esta skill** (alerta) |

## Cabimento e facultatividade

- **Pressuposto:** a ofensa é **inferível**, não expressa. Se as palavras são claras e diretas, falta objeto ao pedido — vai-se à queixa. A interpelação é para o **equívoco**, a **alusão**, a **frase de duplo sentido**.
- **Facultativa:** o ofendido **pode** interpelar; não é etapa obrigatória. A jurisprudência é firme em que o pedido de explicações **não é condição de procedibilidade** da ação penal por crime contra a honra — pode-se oferecer a queixa diretamente. [confira o entendimento atual do STJ/STF via agente `jurisprudencia-stj-stf`] [NÃO VERIFICADO]
- **Legitimidade ativa:** "quem se julga ofendido" — a própria vítima (aqui o **interpelante/requerente**), por advogado com **poderes especiais** (art. 44 CPP), já que o ato prepara ação privada.
- **Polo passivo:** o autor das referências dúbias (o **interpelado/requerido**), a ser **notificado** para explicar-se.

## O juiz NÃO julga o mérito

Ponto nuclear e recorrente em prova: no pedido de explicações **o juiz não decide se houve crime**, não condena, não absolve e não valora antecipadamente a ofensa. Seu papel é de **jurisdição voluntária**: ele **manda notificar** o interpelado e, prestadas (ou recusadas) as explicações, **limita-se a encaminhá-las** ao interpelante — que então avaliará, por sua conta e risco, se ajuíza a queixa. A parte final do art. 144 ("responde pela ofensa" quem se recusa ou não explica satisfatoriamente) **não** significa condenação no bojo da interpelação: significa apenas que a recusa/insuficiência **fica registrada** e poderá ser sopesada na **futura** ação penal. Pedir que o juiz "declare ofensivas" as frases, ou que "condene" o interpelado, é erro de pedido.

## O efeito sobre a decadência (alerta central de prazo)

- O prazo **decadencial** de 6 meses do art. 38 do CPP conta-se, na regra dos crimes de honra, **do conhecimento da autoria**, e é **contínuo, fatal e improrrogável**.
- A interpelação **não interrompe nem suspende** esse prazo. O tempo gasto notificando o interpelado, aguardando resposta e recebendo o encaminhamento judicial **é debitado** dos 6 meses.
- **Consequência prática:** interpele **cedo**. Se restam poucas semanas de prazo, ponderar seriamente ajuizar a queixa diretamente — sob pena de a decadência extinguir a punibilidade (CP art. 107, IV) enquanto se espera a explicação.
- Contagem: a decadência é prazo de natureza **penal/material** (extingue a punibilidade, CP art. 107, IV), contado na forma do **art. 10 do CP** — **inclui-se o dia do começo**, ainda que não seja dia útil. Não se confunde com prazos processuais (art. 798, §1º, CPP, que exclui o dia do começo). Confirme a contagem aplicável ao caso via `lei-e-sumula`.

## Estrutura da peça (notificação/interpelação)

```
1. Endereçamento (ao JUIZ competente para a futura queixa)
2. Preâmbulo: qualificar o interpelante + procuração COM PODERES ESPECIAIS
   + verbo REQUERER a notificação + qualificação do interpelado
3. I — Dos Fatos (a manifestação dúbia; reprodução literal das referências/alusões/frases)
4. II — Do Direito (cabimento do art. 144 CP; sentido equívoco a esclarecer)
5. III — Dos Pedidos (notificar o interpelado para explicar-se; sem pedido de mérito)
6. Fechamento
```

### Preâmbulo

- **Qualificar o interpelante** (a vítima/cliente) — art. 319, II, CPC por analogia; **não** usar "já qualificado".
- `por seu(sua) advogado(a), conforme procuração anexa **com poderes especiais**` — art. 44 CPP (prepara ação privada).
- Verbo **REQUERER** a **notificação/interpelação** do requerido `com fundamento no art. 144 do Código Penal`.
- **Qualificar o interpelado** (o autor das frases dúbias) — art. 319, II, CPC.
- `pelas seguintes razões de fato e de direito:`

> **Verbo: REQUERER (a notificação).** Vítima = **interpelante/requerente**; a outra parte = **interpelado/requerido/notificado**. **Procuração com poderes especiais (art. 44)** é imprescindível.

### I — Dos Fatos

Narrar o contexto e **reproduzir literalmente** as referências, alusões ou frases equívocas (data, meio, canal — post, entrevista, ofício, mensagem). É a matéria-prima do pedido: o juiz precisa ver **exatamente** o que se quer esclarecer.

### II — Do Direito

Demonstrar o **enquadramento no art. 144 do CP**: as expressões **admitem sentido ofensivo** (calúnia/difamação/injúria) mas são **equívocas**, justificando o pedido de explicações antes da eventual queixa. Sublinhar que se trata de ato **preparatório e facultativo**, e que **não** se pede juízo de mérito.

### III — Dos Pedidos

`Ante o exposto, requer:`
- **a)** o **recebimento e processamento** do presente pedido de explicações;
- **b)** a **notificação do interpelado** para que, no prazo assinado, preste em juízo as **explicações** sobre o sentido das referências/alusões/frases indicadas;
- **c)** que, prestadas ou recusadas as explicações, sejam elas **encaminhadas ao interpelante** para as providências que entender cabíveis.

> **Não** peça condenação, declaração de que as frases são ofensivas, nem valoração da recusa — isso extrapola a natureza do art. 144.

### Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

## Fronteira — o que NÃO é desta skill

- **Decidir processar, capitular e redigir a acusação** → `queixa-crime` (inicial da ação penal privada; verbo *oferecer*; querelante × querelado; art. 41 CPP).
- **Renúncia/retratação da representação** (nos crimes de honra de ação **pública condicionada à representação**, como a hipótese do art. 145, par. único, CP) → `retratacao-representacao`.
- A interpelação é **só** o ato preparatório de esclarecimento. Não duplique aqui o roteiro da queixa.

## Antes de protocolar

- [ ] O caso é de ofensa **inferível/equívoca** (referências, alusões, frases dúbias) — e não de ofensa clara (que iria direto à queixa)?
- [ ] Peça **endereçada ao juiz** competente para a futura queixa?
- [ ] **Interpelante qualificado** (não "já qualificado")?
- [ ] Verbo **REQUERER a notificação**; partes nomeadas como **interpelante × interpelado**?
- [ ] **Procuração com poderes especiais (art. 44 CPP)** mencionada?
- [ ] Fatos com **reprodução literal** das expressões a esclarecer (data, meio, autoria)?
- [ ] Direito ancorado no **art. 144 CP**, afirmando o caráter **facultativo/preparatório**?
- [ ] Pedidos limitados a **notificar + encaminhar as explicações** — **sem** pedir mérito/condenação?
- [ ] **Prazo decadencial** conferido: quanto resta dos 6 meses (art. 38 CPP, contagem pelo art. 10 do CP — inclui o dia do começo)? A interpelação **não** o segura?
- [ ] Se o prazo está curto, avaliou **ajuizar a queixa diretamente** em vez de interpelar?

## Lembretes finais

- **Ato preparatório e FACULTATIVO** — não é condição de procedibilidade; a queixa pode ir direto.
- **O juiz NÃO julga o mérito** — apenas notifica e encaminha as explicações (ou a recusa). Nada de pedir condenação.
- **A decadência NÃO para** — o prazo de 6 meses (art. 38 CPP) corre durante a interpelação; interpele cedo.
- **Verbo: requerer a notificação;** vítima = **interpelante**, autor das frases = **interpelado**.
- **Procuração com poderes especiais (art. 44 CPP)** — prepara ação penal privada.
- **Reproduza literalmente** as referências/alusões/frases dúbias nos fatos.
- **Decadência conta-se pelo art. 10 do CP** (prazo material — inclui o dia do começo), não pelo art. 798, §1º, CPP.
- Toda entrega é **rascunho técnico para revisão humana obrigatória**.

## Apoie-se em

- **Best-practices:** `defesa-crimes-contra-honra` (nicho: calúnia, difamação, injúria — elementos, exceção da verdade, causas de exclusão) e `peticao-criminal` (forma, endereçamento, estrutura da petição).
- **Agentes:** `jurisprudencia-stj-stf` (para confirmar o entendimento atual sobre facultatividade e efeito na decadência — **nunca** citar julgado de memória) e `lei-e-sumula` (conferir a literalidade do art. 144 CP e dos arts. 38/44/798 CPP).
- **Verificação obrigatória:** antes de entregar, passe todas as citações pelo agente `verificador-citacoes` — há **sanções reais** por jurisprudência inventada por IA. Súmulas e artigos podem ser afirmados (confira o número); precedentes específicos exigem verificação.
- **Skills irmãs:** `queixa-crime` (a peça acusatória que esta interpelação prepara) e `retratacao-representacao` (quando a vítima não quer processar).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
