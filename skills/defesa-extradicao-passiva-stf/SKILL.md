---
name: defesa-extradicao-passiva-stf
description: >-
  Use ao defender o extraditando em EXTRADIÇÃO PASSIVA no STF (Lei 13.445/2017 — Lei de Migração,
  arts. 81-99; RISTF). Cobre os limites cogentes da defesa técnica (art. 91, §1º: identidade da
  pessoa, defeito de forma dos documentos, ilegalidade da extradição), os óbices materiais (crime
  político, brasileiro nato, prescrição pela lei brasileira OU estrangeira, ausência de dupla
  incriminação, especialidade, competência… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, cooperacao-internacional, stf]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-extradicao-passiva-stf"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-extradicao-passiva-stf", "defesa extradicao", "extradicao passiva"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa na Extradição Passiva (Lei 13.445/2017, arts. 81-99; RISTF)

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

Esta skill orienta a **defesa técnica do extraditando** na **extradição passiva** — o processo em que um Estado estrangeiro requer ao Brasil a entrega de pessoa que aqui se encontra, para responder a processo penal ou cumprir pena lá. A competência é **originária do Supremo Tribunal Federal** (CF, art. 102, I, "g"), autuada como **Extradição (EXT)**, e o rito é o dos **arts. 81 a 99 da Lei de Migração** combinado com o **RISTF**. A extradição é ato de **cooperação jurídica internacional**, mas com forte carga de garantia individual: o STF exerce **controle de legalidade**, não de mérito da acusação estrangeira (sistema de **contenciosidade limitada** / delibação).

> **Lição central:** a defesa na extradição é **estruturalmente limitada** pelo art. 91, §1º da Lei de Migração — em regra só se discute **identidade da pessoa reclamada, defeito de forma dos documentos ou ilegalidade da extradição**. Não se rediscute a prova do crime nem a culpa. Por isso a estratégia vencedora não é "provar inocência": é **mapear os requisitos legais e os óbices do art. 82** e demonstrar que **um deles não está satisfeito** (falta de dupla incriminação, prescrição, crime político, nacionalidade, defeito documental, ausência de compromisso do Estado requerente). Achado **um** óbice, indefere-se a extradição.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Lei 13.445/2017 (Lei de Migração)**, arts. 81-99, e do **Decreto 9.199/2017** (regulamento), além das normas do **RISTF** sobre o rito da EXT. A Lei de Migração **revogou o antigo Estatuto do Estrangeiro (Lei 6.815/80)** — citar dispositivos do Estatuto revogado é **erro grave de vigência**. Verifique também **tratados bilaterais/multilaterais** aplicáveis ao Estado requerente (podem alterar prazos, requisitos e a própria dupla incriminação) e, se houver, o **Estatuto de Roma** e regras de entrega ao TPI (regime distinto da extradição). Todo precedente do STF (número de EXT/HC, informativo, tese) passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes` antes de uso.

## Natureza e fases do processo

A extradição passiva combina **fase administrativa** (pedido do Estado estrangeiro pela via diplomática → Ministério da Justiça → encaminhamento ao STF) e **fase judicial** (processo de delibação no STF). Não confundir com:

- **Extradição ativa** — o Brasil é quem requer a entrega (não é objeto desta skill).
- **Expulsão / deportação / repatriação** — medidas de retirada compulsória de migrante, de competência administrativa (arts. 46 e ss. da Lei de Migração), sem pedido de Estado estrangeiro.
- **Transferência de pessoa condenada / de execução da pena** — o preso cumpre no país de origem pena imposta alhures (regime da execução; ver `execucao-incidente-cumprimento-pena-estrangeiro-transferencia`). A extradição decide a **entrega**, não a execução interna.
- **Entrega (surrender) ao TPI** — regime do Estatuto de Roma, **não** sujeito às mesmas vedações da extradição (ex.: nem sempre incide a vedação de entrega de nacional). Regime próprio.

## Base legal

- **CF, art. 5º, LI e LII** — o **brasileiro nato NUNCA é extraditado**; o **naturalizado** só por crime comum anterior à naturalização ou comprovado envolvimento com tráfico de drogas; **não se extradita por crime político ou de opinião**.
- **CF, art. 102, I, "g"** — competência **originária do STF** para julgar a extradição requerida por Estado estrangeiro.
- **Lei 13.445/2017 (Lei de Migração), arts. 81 a 99** — requisitos, óbices, rito, prisão e compromissos.
  - **Art. 82** — hipóteses que **NÃO autorizam** a extradição (óbices).
  - **Art. 83** — condições de admissibilidade (crime também previsto no Brasil — dupla incriminação; competência do Estado requerente).
  - **Art. 91** — rito no STF; **§1º** delimita a **defesa** (identidade, defeito de forma, ilegalidade).
  - **Art. 96** — **compromissos** que o Estado requerente deve assumir antes da entrega (comutação, detração, não reextradição etc.).
- **Decreto 9.199/2017** — regulamento da Lei de Migração.
- **RISTF** — rito interno da Extradição (relatoria, prisão, interrogatório, julgamento pela Turma/Plenário).
- **Tratado de extradição** aplicável ao Estado requerente (bilateral ou multilateral) — quando existe, **prevalece** e pode dispensar/alterar requisitos. Na ausência, aplica-se a **promessa de reciprocidade**.

## O sistema de delibação (contenciosidade limitada)

O STF **não julga a causa penal estrangeira**. Faz **juízo de delibação**: confere se o pedido preenche os requisitos formais e materiais da lei brasileira e do tratado, sem reexaminar a prova nem a justiça da condenação/acusação. Consequência prática para a defesa:

- **Não adianta** sustentar álibi, insuficiência de provas, teses de mérito da imputação estrangeira — em regra são **irrelevantes** no juízo de delibação.
- **Adianta** atacar **requisitos e óbices**: nacionalidade, dupla incriminação, prescrição, crime político, defeito documental, especialidade, compromissos do art. 96, competência do Estado requerente.
- Exceção estreita: a defesa pode invocar **grave violação a garantias fundamentais** no Estado requerente (ex.: risco de tortura, pena vedada não comutável, tribunal de exceção) como **ilegalidade da extradição** (art. 91, §1º) e afronta à ordem pública — tese sensível, sempre a confirmar na jurisprudência atual do STF via `jurisprudencia-stj-stf`.

## Os óbices à extradição (art. 82 — a espinha dorsal da defesa)

A extradição **NÃO será concedida** quando, entre outras hipóteses do art. 82 (conferir a redação vigente, item a item):

| Óbice | Conteúdo (síntese) | Nota defensiva |
|---|---|---|
| **Nacionalidade** | Extraditando é **brasileiro nato** (nunca); ou naturalizado fora das exceções da CF, art. 5º, LI | Verificar naturalidade/naturalização e a **data** do crime vs. naturalização |
| **Crime político/opinião** | Fato é **crime político** ou de opinião (CF, art. 5º, LII) | STF distingue crime político "puro" de crime comum conexo; pode haver **preponderância** do comum |
| **Ausência de dupla incriminação** | Fato **não é crime também no Brasil** (art. 83, I) | Comparar tipos penais dos dois ordenamentos; nomen iuris é irrelevante, importa a **conduta** |
| **Falta de competência** | Estado requerente **não tem jurisdição** sobre o fato | Verificar território/nacionalidade/competência do requerente |
| **Extinção da punibilidade** | **Prescrição** pela lei brasileira **OU** pela do Estado requerente; ou outra causa extintiva | Basta prescrição por **um** dos ordenamentos para obstar |
| **Coisa julgada / litispendência no Brasil** | Extraditando já **respondeu/está respondendo** no Brasil pelo **mesmo fato** | Impede a entrega (ne bis in idem) |
| **Tribunal ou juízo de exceção** | Processo no Estado requerente perante **tribunal de exceção** | Óbice clássico de ordem pública |
| **Pena vedada não comutada** | **Pena de morte** ou **prisão perpétua** sem compromisso de comutação | Liga-se ao art. 96 (compromissos) |
| **Anistia no Brasil** relativa ao fato, quando cabível | | Conferir hipótese na redação vigente |

> **Regra de ouro da defesa:** basta **UM** óbice para indeferir. A peça deve varrer **todos** os incisos do art. 82 e os requisitos do art. 83 e apontar, fundamentadamente, o(s) que não se satisfaz(em). Não escolher "a melhor tese" e abandonar as demais sem análise — a extradição é decidida por **exclusão de óbices**.

## Requisitos de admissibilidade (art. 83) e prescrição

- **Dupla incriminação (art. 83, I):** o fato deve ser crime **no Brasil e no Estado requerente**. Compara-se a **conduta**, não o nome do crime. Contravenção, em regra, **não** autoriza extradição.
- **Competência do Estado requerente (art. 83, II):** deve haver **jurisdição** do requerente sobre o fato.
- **Prescrição (óbice do art. 82):** verifica-se pela **lei brasileira E pela lei do Estado requerente**; **prescrito por qualquer das duas → não se extradita**. Analisar prazos, marcos interruptivos/suspensivos de **ambos** os ordenamentos.
- **Gravidade mínima:** conferir, na redação vigente e no tratado, o **patamar de pena** exigido (em regra crimes de certa gravidade; delitos ínfimos não ensejam extradição).

## Os compromissos do Estado requerente (art. 96 — condição da entrega)

Concedida a extradição pelo STF, a **entrega efetiva** condiciona-se a o Estado requerente assumir **compromissos formais** (art. 96 — conferir o rol vigente), tipicamente:

1. **Não punir por crime anterior ao pedido** não incluído no pleito → **princípio da especialidade** (o extraditando só pode ser processado/punido pelos fatos que fundamentaram a extradição).
2. **Comutar pena de morte ou prisão perpétua** em pena privativa de liberdade temporária compatível com o teto brasileiro.
3. **Detração** — computar o tempo de **prisão para extradição (PPE)** cumprido no Brasil.
4. **Não reextraditar** a terceiro Estado sem anuência do Brasil.
5. **Não agravar a pena** por motivo político; não submeter a tribunal de exceção; observar garantias.

> **Tese defensiva prática:** ausência ou insuficiência dos compromissos do art. 96 é **fundamento autônomo** para obstar a **entrega** — mesmo deferida a extradição, sem os compromissos ela **não se efetiva**. A defesa deve exigir compromisso **expresso** de comutação e detração e monitorar a **especialidade** (evitar julgamento por fatos não deferidos).

## O princípio da especialidade

O extraditando entregue só pode ser **processado, julgado ou punido** pelos **fatos que motivaram o deferimento** — não por outros anteriores nem por fatos novos sem **extensão da extradição** (novo pleito e nova análise do STF). É simultaneamente **requisito de entrega** (art. 96) e **limite permanente** da jurisdição estrangeira. Havendo **pedido de extensão**, o STF reabre a delibação para os fatos novos, com nova oportunidade de defesa.

## A prisão para extradição (PPE)

O processo de extradição, em regra, tramita com o extraditando **preso** (prisão cautelar específica — **PPE**, decretada pelo relator no STF). Pontos de defesa:

- A PPE tem **natureza cautelar própria** e submete-se a controle de **necessidade e proporcionalidade**; a jurisprudência do STF admite, excepcionalmente, **medidas alternativas** ou até liberdade sob condições em casos peculiares — tese a sustentar e **confirmar na jurisprudência atual** via `jurisprudencia-stj-stf` [NÃO VERIFICADO — conferir o estado da arte].
- Requerer **detração** do período de PPE (art. 96) no compromisso do Estado requerente.
- Pedidos de **relaxamento/revogação** por excesso de prazo ou desaparecimento do pressuposto cautelar seguem a via incidental no próprio processo de extradição (e, se for o caso, HC — ver `hc-tribunais-superiores`).

## Rito no STF e o momento da defesa (art. 91 e RISTF)

1. **Autuação** da EXT no STF; distribuição a **relator**.
2. **Prisão do extraditando** (PPE) e **interrogatório** pelo relator.
3. **Defesa (art. 91, §1º)** — prazo legal para a **defesa técnica**, **limitada** a: (a) **identidade** da pessoa reclamada; (b) **defeito de forma** dos documentos apresentados; (c) **ilegalidade** da extradição. Toda a estratégia de óbices do art. 82 se encaixa em "ilegalidade da extradição".
4. **Diligências** (tradução, complementação documental pelo Estado requerente).
5. **Manifestação da PGR**.
6. **Julgamento** pela **Turma** (ou Plenário, conforme o caso e o RISTF): defere ou indefere a extradição. Deferida, a **entrega** fica condicionada aos compromissos do art. 96, e a **decisão política final de entrega** cabe ao Presidente da República (o STF autoriza; a entrega efetiva é ato do Executivo, que não pode entregar se o STF indeferir).

> **Onde a defesa atua:** a peça central é a **defesa do art. 91, §1º**. Some-se a ela: impugnação documental (defeito de forma/tradução), memoriais, sustentação oral no julgamento, requerimentos sobre a PPE e, ao final, a **exigência dos compromissos do art. 96** antes de qualquer entrega.

## Teses típicas de defesa (checklist estratégico)

1. **Nacionalidade** — brasileiro nato (óbice absoluto); naturalizado fora das exceções da CF, art. 5º, LI (checar **data** do crime vs. naturalização).
2. **Crime político/opinião** — enquadrar o fato como político puro; se conexo a crime comum, discutir **preponderância** (a jurisprudência do STF afasta a natureza política quando **prepondera** o crime comum — confirmar via `jurisprudencia-stj-stf`).
3. **Ausência de dupla incriminação** — o fato **não é crime no Brasil**; comparar **condutas**, não nomes; afastar contravenção.
4. **Prescrição** — pela lei **brasileira** ou **estrangeira**; basta uma. Recalcular prazos e marcos dos **dois** ordenamentos.
5. **Coisa julgada / litispendência no Brasil** — mesmo fato já julgado/em curso no Brasil (**ne bis in idem**).
6. **Falta de competência** do Estado requerente sobre o fato.
7. **Tribunal de exceção** / risco de julgamento sem garantias no requerente.
8. **Pena de morte / perpétua** sem compromisso de **comutação** (art. 96) — obstar a entrega.
9. **Defeito de forma / documental** — pedido instruído sem os documentos exigidos, sem tradução oficial, sem cópia do texto legal estrangeiro, sem individualização dos fatos, sem título prisional válido no requerente.
10. **Ilegalidade da extradição** (cláusula-guarda-chuva do art. 91, §1º) — para veicular qualquer óbice do art. 82/83 e violações de ordem pública/garantias.
11. **Especialidade** — exigir o compromisso e vigiar a extensão a fatos não deferidos.
12. **PPE** — proporcionalidade, excesso de prazo, detração.

## Teses e contra-teses

- **Defesa:** "Falta dupla incriminação — a conduta não configura crime no Brasil."
  **Contra (Estado requerente/PGR):** basta que a **conduta** seja típica nos dois ordenamentos, ainda que com **nomen iuris** diverso.
  **Réplica da defesa:** demonstrar que **nenhum tipo penal brasileiro** abrange a conduta descrita (não apenas nome diferente, mas **atipicidade material** no Brasil).

- **Defesa:** "O crime é político, logo não se extradita (CF, art. 5º, LII)."
  **Contra:** quando há **crime comum conexo** e este **prepondera**, afasta-se a natureza política.
  **Réplica:** sustentar a **preponderância do elemento político** e a motivação/contexto; subsidiariamente, pedir a exclusão apenas dos fatos comuns.

- **Defesa:** "O fato está prescrito pela lei estrangeira."
  **Contra:** a prescrição deve ser aferida à luz do direito do requerente, com seus marcos.
  **Réplica:** aplicar os **marcos e prazos do próprio Estado requerente** (juntar o texto legal estrangeiro traduzido); e, cumulativamente, verificar a **prescrição pela lei brasileira** — basta **uma** para obstar.

- **Defesa:** "Há pena perpétua/morte sem comutação."
  **Contra:** o Estado requerente pode assumir o **compromisso de comutação** (art. 96), sanando o óbice.
  **Réplica:** enquanto **não houver compromisso formal e expresso**, a entrega **não pode** ocorrer; exigir o compromisso como condição.

## Precedentes e súmulas — sob o Citation Gate

> **Não invente jurisprudência.** Os dispositivos de **lei e Constituição** citados acima podem ser afirmados com certeza (conferida a redação vigente). Para **qualquer precedente específico** do STF (número de EXT, HC, informativo, tese) que fundamente prescrição, crime político, dupla incriminação, PPE ou compromissos, marque **[NÃO VERIFICADO]** e **confira via `jurisprudencia-stj-stf`** antes de citar. **Ensine a tese e o dispositivo; não arrisque um número de acórdão.**

- **Súmula 421/STF** — "Não impede a extradição a circunstância de ser o extraditando casado com brasileira ou ter filho brasileiro." (súmula notória; ainda assim **confirmar vigência/atualidade** de aplicação via `jurisprudencia-stj-stf`).
- **Preponderância do crime comum sobre o político** — orientação consolidada do STF; **[NÃO VERIFICADO — citar o leading case só após conferência]**.
- **Delibação / contenciosidade limitada** — doutrina e jurisprudência pacíficas do STF; ao citar acórdão específico, **[NÃO VERIFICADO]**.
- **Compromissos do art. 96 como condição da entrega** — decorre da lei; precedentes ilustrativos **[NÃO VERIFICADO]**.

## Erros comuns e anti-padrões

- **Citar o Estatuto do Estrangeiro (Lei 6.815/80)** — **revogado** pela Lei de Migração. Erro de vigência grave.
- **Tentar rediscutir a prova/culpa** do crime estrangeiro — fora do juízo de delibação; desperdiça a defesa.
- **Escolher "uma tese" e ignorar os demais óbices** — a extradição se decide por **exclusão de óbices**; varra **todo** o art. 82/83.
- **Aferir prescrição só pela lei brasileira** (ou só pela estrangeira) — é preciso **ambas**; basta uma para obstar.
- **Esquecer os compromissos do art. 96** — sem comutação/detração/especialidade formalizadas, a **entrega não se efetiva**, mesmo deferida a extradição.
- **Confundir extradição com expulsão/deportação/transferência de condenado ou entrega ao TPI** — regimes distintos, requisitos distintos.
- **Não juntar o texto legal estrangeiro traduzido** ao sustentar prescrição/dupla incriminação — o STF precisa do parâmetro normativo do requerente.
- **Ignorar tratado bilateral aplicável** — quando existe, **prevalece** e muda requisitos/prazos.
- **Tratar a PPE como automática e imutável** — cabe controle de proporcionalidade e detração.

## Checklist da defesa

- [ ] **Nacionalidade** verificada (nato? naturalizado? data do crime vs. naturalização)?
- [ ] Existe **tratado** com o Estado requerente? Confere prevalência e requisitos próprios?
- [ ] **Dupla incriminação** analisada pela **conduta** (não pelo nome), afastada a contravenção?
- [ ] **Prescrição** aferida pela lei **brasileira E** pela **estrangeira** (texto legal traduzido juntado)?
- [ ] **Crime político/opinião** avaliado (e a questão da **preponderância** do crime comum)?
- [ ] **Coisa julgada / litispendência** no Brasil pelo mesmo fato?
- [ ] **Competência** do Estado requerente sobre o fato?
- [ ] **Tribunal de exceção** ou risco a garantias fundamentais?
- [ ] **Pena de morte/perpétua** → exigido o **compromisso de comutação** (art. 96)?
- [ ] **Defeito de forma / documental** (documentos, tradução oficial, título prisional, individualização dos fatos)?
- [ ] **Compromissos do art. 96** (especialidade, comutação, detração, não reextradição) exigidos por escrito antes da entrega?
- [ ] **PPE** — proporcionalidade, excesso de prazo e **detração** requeridas?
- [ ] Defesa apresentada **no prazo do art. 91, §1º**, dentro dos limites (identidade / defeito de forma / ilegalidade)?
- [ ] Todo dispositivo conferido na **redação vigente da Lei de Migração** (não do Estatuto revogado)?
- [ ] Toda **súmula/precedente/tese** conferido via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar?

## Lembretes finais

- **Delibação, não mérito:** a defesa ataca **requisitos e óbices**, não a prova do crime estrangeiro.
- **Basta UM óbice** (art. 82/83) para indeferir — varra todos.
- **Prescrição por qualquer dos dois ordenamentos** obsta a extradição.
- **Brasileiro nato nunca** é extraditado; **crime político/opinião** também obsta.
- **Estatuto do Estrangeiro está revogado** — use a **Lei de Migração (13.445/2017)**.
- **Compromissos do art. 96** (especialidade, comutação, detração, não reextradição) são **condição da entrega**.
- **Tratado aplicável prevalece** — sempre verificar.
- **Confira vigência** dos arts. 81-99 e **todo precedente do STF** via `jurisprudencia-stj-stf` antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. A responsabilidade pela defesa e pelas teses é sempre do **advogado** (Estatuto da OAB e CED; **Provimento 205/2021** quanto à publicidade), ou da **Defensoria Pública** (LC 80/94) quando for o caso — o extraditando frequentemente é assistido pela DPU perante o STF. **Nenhuma súmula, precedente ou tese** deve ser citado de memória: tudo passa pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Esta skill é do **polo de DEFESA** do extraditando; se o cenário for de atuação pró-extradição, o roteador deve conferir o polo e a instituição no `company.md`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
