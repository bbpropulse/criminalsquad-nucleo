---
name: estrategia-probatoria-defesa
description: >-
  Use ao planejar a produção probatória da defesa como estratégia — o plano de prova que define o
  que cada fonte precisa provar, distribui o ônus, decide quais provas produzir ativamente x quais
  apenas atacar, ordena a sequência de produção e ancora cada tese a um meio de prova concreto.
  Gatilhos: plano de prova, estratégia probatória, quais provas produzir, ônus da prova da defesa, o
  que preciso provar, prova a favor e prova… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia, prova]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-estrategia-probatoria-defesa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["estrategia-probatoria-defesa", "estrategia probatoria", "probatoria defesa"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Estratégia Probatória da Defesa (plano de prova — CPP arts. 155-157 e 156)

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

Esta skill orienta a construção do **plano de prova** da defesa: a camada **estratégica** que decide, antes da instrução, **o que cada fonte precisa provar**, **quem tem o ônus de provar o quê**, **quais provas a defesa produz ativamente** e **quais apenas ataca**, **em que sequência** produzir e **como ancorar cada tese a um meio de prova**. É o "portfólio probatório" ligado à teoria do caso — não a execução de um meio isolado.

> **Lição central:** a defesa **não precisa provar inocência** — precisa **impedir que a acusação atinja o standard**. Comece pelo ônus: o que a **acusação** tem de provar além de dúvida razoável (materialidade, autoria, dolo/culpa, ausência de excludentes quando invocadas), e onde esse edifício é **frágil**. Só depois decida onde a defesa gasta prova ativa. Prova de defesa mal calibrada pode **assumir um ônus que não era seu** e reforçar a tese acusatória.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 155 a 157 e 156 do CPP e do art. 386, VII (absolvição por insuficiência), bem como súmulas, temas e overruling, via a skill `jurisprudencia-stj-stf` (gate `verificacao-citacoes`) antes de fundamentar qualquer requerimento. Regras sobre cadeia de custódia (arts. 158-A a 158-F, Lei 13.964/2019) e prova ilícita (art. 157) são especialmente sensíveis.

## Base legal

- **Art. 156 do CPP** — distribuição do ônus da prova: "a prova da alegação incumbirá a quem a fizer". Lido à luz da **presunção de inocência (CF, art. 5º, LVII)**, o ônus principal (materialidade, autoria, elemento subjetivo) é da **acusação**.
- **Art. 155 do CPP** — livre convicção motivada; o juiz **não pode fundamentar condenação exclusivamente em elementos do inquérito** não repetidos em juízo (contraditório judicial).
- **Art. 157 do CPP** — inadmissibilidade das **provas ilícitas** e das **derivadas** (teoria dos frutos da árvore envenenada), com as ressalvas de fonte independente e descoberta inevitável.
- **Arts. 158-A a 158-F do CPP** — **cadeia de custódia** do vestígio (Lei 13.964/2019): a quebra é munição para atacar a prova pericial da acusação.
- **Art. 400 e art. 402 do CPP** — momento de produção na **AIJ** (audiência de instrução) e as **diligências cuja necessidade se origine de circunstâncias apuradas na instrução**.
- **Art. 396-A do CPP** — na **resposta à acusação**, a defesa **especifica as provas** e **arrola testemunhas** (é o marco em que o rol se preclui — planejar antes).
- **Art. 386, VII, do CPP** — absolvição por **não existir prova suficiente** para a condenação: a tradução processual do *in dubio pro reo* e do standard "além de dúvida razoável".

## O primeiro movimento — mapear o ônus (não a inocência)

Antes de listar provas, decomponha a imputação nos **fatos que a acusação precisa provar** e classifique cada um:

| Fato a provar | De quem é o ônus | Standard | Onde a defesa atua |
|---|---|---|---|
| Materialidade (o fato existiu) | Acusação | Além de dúvida razoável | Atacar laudo/cadeia de custódia |
| Autoria (foi o réu) | Acusação | Além de dúvida razoável | Álibi, prova negativa, contradições |
| Dolo / culpa (elemento subjetivo) | Acusação | Além de dúvida razoável | Narrativa alternativa, erro, ausência de finalidade |
| Excludente (legítima defesa, estado de necessidade…) | **Ônus repartido** — a defesa **alega e produz indícios**; a dúvida favorece o réu (art. 386, VI) | Basta gerar dúvida razoável | Prova ativa da defesa |
| Causa de diminuição / privilégio | Defesa (produz), mas dúvida aproveita ao réu | Dúvida razoável | Prova ativa |

➡️ **Regra de ouro:** para **negativas** (não fui eu, o fato não existiu) a defesa **não carrega o ônus** — basta **corroer** a prova acusatória. Para **afirmativas** (legítima defesa, álibi, causa de diminuição), a defesa **precisa produzir** prova que ao menos gere dúvida razoável. **Separe as duas listas** — é o eixo de todo o plano.

## Metodologia — o plano de prova em 7 passos

1. **Fixar a teoria do caso** (via skill `teoria-do-caso`): qual a versão da defesa e as **1 a 3 teses** que a sustentam (negativa de autoria, atipicidade, excludente, desclassificação, insuficiência de prova). Cada tese é uma "afirmação a provar ou a defender".
2. **Decompor a imputação** em fatos-alegação (tabela acima) e marcar, para cada um, **de quem é o ônus** e **qual o standard**.
3. **Inventariar a prova da acusação** já existente (autos): depoimentos, laudos, interceptações, reconhecimento, mídias. Para cada uma, anotar **força**, **ponto de ataque** (licitude, cadeia de custódia, contradição, credibilidade) e **momento** de contestá-la.
4. **Ancorar cada tese a um meio de prova** — nenhuma tese vai a juízo "no ar". Perguntar, por tese: *qual documento/testemunha/perícia a sustenta? já existe nos autos ou precisa ser produzida?* Tese sem âncora probatória é **alegação, não prova**.
5. **Decidir produzir x atacar** (o núcleo estratégico — quadro abaixo): o que a defesa **produz ativamente** (rol, perícia, documentos) e o que apenas **contesta** sem assumir ônus.
6. **Sequenciar a produção** (linha do tempo processual): resposta à acusação (art. 396-A: arrola e especifica) → AIJ (art. 400: ordem de oitiva) → diligências do art. 402 → memoriais. Definir **ordem tática** das testemunhas e o momento de cada requerimento.
7. **Definir o gatilho de cada requerimento** e o **plano B**: se a perícia da acusação for hígida, o que muda? Se a testemunha-chave faltar, há prova alternativa? Registrar tudo em ata (preclusão).

## O núcleo estratégico — produzir x atacar

> **A pergunta que define o plano:** *esta prova, se eu a produzir, ajuda mais a defesa do que fortalece a acusação ou expõe o réu?* Prova ativa **abre flancos** (contraprova, contradita, reforço do dolo). Muitas vezes a melhor estratégia é **não produzir** e apostar na **insuficiência** da acusação (art. 386, VII).

**Produzir ativamente quando:**
- A tese é **afirmativa** (álibi, legítima defesa, causa de diminuição) e o ônus é, ao menos parcialmente, da defesa.
- Existe prova **robusta e controlável** (documento inequívoco, perícia técnica sólida) que **fecha** a questão a favor do réu.
- A prova **neutraliza** um ponto forte da acusação sem criar novo flanco.

**Apenas atacar (não produzir) quando:**
- A tese é **negativa** (não fui eu / o fato não existiu) — o ônus é da acusação; produzir prova própria pode **assumir ônus alheio**.
- A prova da defesa é **frágil ou de duplo gume** (testemunha que pode se contradizer, perícia inconclusiva que legitima a da acusação).
- A acusação **não atingiu o standard** — reforçar a dúvida vale mais que "empatar provas".

**Checklist por prova candidata (produzir?):**
- [ ] Ajuda a tese sem abrir flanco para a acusação?
- [ ] O ônus daquele fato é realmente da defesa (afirmativa) ou é da acusação (negativa)?
- [ ] A fonte é **controlável e confiável** (testemunha coerente, documento inequívoco)?
- [ ] Há risco de **contraprova** que anule o ganho?
- [ ] O custo/risco (exposição do réu, contradita) compensa o ganho probatório?

## Ancoragem tese ↔ meio de prova

Para cada tese, preencher: **o que preciso provar → com qual meio → já existe ou produzo → quem tem o ônus → standard.**

| Tese defensiva | Fato a provar/defender | Meio de prova (âncora) | Já existe? | Ônus | Standard |
|---|---|---|---|---|---|
| Negativa de autoria | Réu não estava no local | Testemunha de álibi + registro (celular/câmera) | Produzir | Acusação prova autoria; defesa gera dúvida | Dúvida razoável basta |
| Atipicidade / erro | Ausência de dolo | Interrogatório + contexto documental | Parte nos autos | Acusação | Além de dúvida razoável (dela) |
| Legítima defesa | Agressão injusta atual | Testemunha presencial + laudo de lesões | Produzir | Repartido (defesa indicia) | Dúvida favorece o réu (art. 386, VI) |
| Insuficiência de prova | Fragilidade da autoria | Ataque à prova acusatória (não produz nova) | — | Acusação | Se não atinge → art. 386, VII |

## Meios de prova — como cada um entra no plano

- **Prova testemunhal (rol — art. 396-A):** definir **quem prova o quê** e a **ordem tática**. Evitar testemunha de duplo gume; preferir a que **corrobora** ponto específico. Cuidar do **número legal** e da distinção entre testemunha e informante (parentes/suspeitos). Planejar as **perguntas-âncora** (skill `oitiva-testemunhas-estrategia`, se houver).
- **Prova pericial da defesa:** requerer **quesitos** (skill `quesitos-pericia`) e, se cabível, **assistente técnico**. A perícia própria é forte quando **fecha** uma questão técnica; é arriscada quando **inconclusiva** (pode legitimar a da acusação). Sempre avaliar **atacar a cadeia de custódia** (arts. 158-A a 158-F) da perícia acusatória antes de produzir a própria.
- **Prova documental:** juntar cedo o que é **inequívoco e controlável** (contratos, registros, laudos particulares). Documento ambíguo pode ser lido contra o réu.
- **Prova emprestada / produção antecipada:** avaliar a skill `producao-antecipada-provas` quando houver risco de perecimento (testemunha idosa/enferma, prova volátil).
- **Ataque à prova ilícita (art. 157):** identificar **ilicitude na origem** (busca sem mandado, interceptação sem autorização, quebra de cadeia de custódia) e requerer **desentranhamento** — muitas vezes é a jogada de maior impacto, e **não custa prova ativa**.

## Sequência da instrução — a linha do tempo

```
1) RESPOSTA À ACUSAÇÃO (art. 396-A)
   → arrolar testemunhas (PRECLUI aqui) + especificar provas + requerer perícia/diligências
   → suscitar absolvição sumária (art. 397) e nulidades/ilicitudes (art. 157)
2) SANEAMENTO / DECISÕES INTERLOCUTÓRIAS
   → deferimento das provas; impugnar indeferimentos (consignar para recurso)
3) AIJ (art. 400) — ordem: ofendido → testemunhas de acusação → testemunhas de defesa
   → perícias/esclarecimentos de peritos → interrogatório do réu (POR ÚLTIMO — ampla defesa)
4) DILIGÊNCIAS (art. 402) — cuja necessidade surja de circunstância apurada na instrução
5) MEMORIAIS / ALEGAÇÕES FINAIS (art. 403) — amarrar cada tese à prova produzida
```

> **Ordem tática das testemunhas de defesa:** em regra, **construir do periférico ao decisivo** (corroborar contexto antes da testemunha-chave), ou reservar a mais forte conforme o que a acusação tiver aberto na sua fase. O **interrogatório do réu é o último ato** (art. 400) — planejar a versão do réu **coerente com a prova já produzida**.

## Standard probatório e o *in dubio pro reo*

- O juízo condenatório exige prova **além de dúvida razoável**; a **insuficiência** conduz à **absolvição (art. 386, VII)**. O plano de prova deve, no mínimo, **garantir a dúvida razoável**.
- Para **excludentes** (art. 386, VI), a lei já manda absolver quando **houver fundada dúvida** sobre a existência da causa — a defesa não precisa provar cabalmente, basta **indiciar e semear dúvida**.
- **Não caia na armadilha do "empate de provas".** O empate não é neutro: pela presunção de inocência, **dúvida beneficia o réu**. Produzir prova a mais para "empatar" pode ser desnecessário e arriscado.

## Teses e contra-teses (eixo probatório)

➡️ **Tese (defesa):** "A acusação não atingiu o standard — a autoria repousa em reconhecimento frágil e prova de inquérito não repetida em juízo (art. 155)." **Âncora:** ataque ao reconhecimento e à ausência de corroboração judicial.
➡️ **Tese (defesa):** "A prova pericial é imprestável por **quebra da cadeia de custódia** (arts. 158-A a 158-F)." **Âncora:** rastreamento das etapas do vestígio; não exige prova ativa da defesa.
➡️ **Tese (defesa):** "Prova obtida por meio ilícito (art. 157) contamina as derivadas." **Âncora:** ilicitude na origem + nexo de derivação.
➡️ **Contra-tese (acusação):** invocar **fonte independente / descoberta inevitável** (art. 157, §§1º e 2º) para salvar a derivada — a defesa deve **antecipar** e rebater o nexo autônomo.
➡️ **Contra-tese (acusação):** sustentar corroboração da prova de inquérito por elementos judiciais — a defesa isola o que **não** foi repetido sob contraditório.

## Erros comuns (anti-padrões)

- **Assumir ônus que não é seu** — produzir prova de "inocência" em tese **negativa**, quando bastava atacar a insuficiência da acusação.
- **Tese sem âncora** — sustentar em memoriais uma tese que **nenhuma prova produzida** sustenta.
- **Perícia própria inconclusiva** que acaba **legitimando** a perícia da acusação.
- **Testemunha de duplo gume** arrolada sem avaliar risco de contradita/contradição.
- **Perder o marco do art. 396-A** — não arrolar/especificar a tempo e **precluir** o rol e as provas.
- **Ignorar a cadeia de custódia** (arts. 158-A a 158-F) e a **licitude** (art. 157) — os ataques de maior impacto e menor custo probatório.
- **Não consignar** indeferimentos de prova — perder a matéria para o recurso (cerceamento de defesa).
- **"Empatar provas"** achando que empate condena — pela presunção de inocência, a dúvida absolve.
- **Interrogatório do réu incoerente** com a prova já produzida na AIJ.

## Checklist final do plano de prova

- [ ] Imputação **decomposta** em fatos-alegação, com **ônus e standard** de cada um?
- [ ] Separadas as **tese negativas** (só atacar) das **afirmativas** (produzir)?
- [ ] **Cada tese ancorada** a um meio de prova concreto (existente ou a produzir)?
- [ ] Decisão **produzir x atacar** justificada por prova a prova (sem abrir flancos)?
- [ ] **Rol e especificação de provas** planejados para a **resposta à acusação** (art. 396-A) — sem precluir?
- [ ] **Quesitos / assistente técnico** decididos para a perícia (skill `quesitos-pericia`)?
- [ ] **Licitude (art. 157)** e **cadeia de custódia (arts. 158-A a 158-F)** rastreadas para ataque?
- [ ] **Sequência** da instrução (art. 400/402) e **ordem tática das testemunhas** definidas?
- [ ] **Interrogatório do réu** planejado para o fim, coerente com a prova produzida?
- [ ] **Indeferimentos de prova** serão **impugnados e consignados** (preservar o recurso)?
- [ ] Cada norma/súmula/precedente passou pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável realizada?

## Skills relacionadas

- `teoria-do-caso` — a versão e as teses que o plano de prova serve.
- `matriz-contradicoes-prova-oral` — ataca a prova oral **já produzida** (esta skill planeja **antes**).
- `quesitos-pericia`, `producao-antecipada-provas`, `pedido-diligencias` — **executam** um meio; esta skill **decide** quais acionar.
- `cadeia-custodia` — para o ataque à prova pericial (arts. 158-A a 158-F), se houver.
- `redacao-persuasiva-criminal` — padrão de redação ao converter o plano em requerimentos e memoriais.

## Nota de conformidade

Rascunho técnico **sob revisão humana obrigatória** — hipótese de trabalho, não decisão final. Toda lei, súmula, tese ou precedente citado passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes do uso (há sanções reais por jurisprudência inventada por IA); na dúvida, **omitir vence inventar**. A responsabilidade pela estratégia probatória e pelos requerimentos é sempre do **advogado** (Estatuto da OAB e Código de Ética; **Provimento 205/2021** quanto à publicidade). Esta skill é de **polo defensivo** (advocacia/Defensoria); a estratégia probatória do polo acusatório segue lógica de ônus e ética próprias (CNMP).
