---
name: defesa-organizacao-criminosa
description: >-
  Use ao defender acusado de promover, constituir, financiar ou integrar organização criminosa (Lei
  12.850/2013, art. 2º) — ataque aos requisitos estruturais, desclassificação para associação
  criminosa (CP, art. 288) ou associação para o tráfico (Lei 11.343/2006, art. 35) e teses de bis in
  idem, com estrutura de resposta à acusação e memoriais. Gatilhos: organização criminosa, orcrim,
  Lei 12.850, art. 2º da 12.850, facção… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-organizacao-criminosa"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-organizacao-criminosa", "defesa organizacao", "organizacao criminosa"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa na Imputação de Organização Criminosa (Lei 12.850/2013, art. 2º)

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

Esta skill orienta a **defesa de quem é acusado** pelo tipo do art. 2º da Lei 12.850/2013 — promover, constituir, financiar ou integrar organização criminosa. O caminho defensivo tem uma lógica própria: a acusação precisa provar **cada um** dos requisitos estruturais do conceito legal (art. 1º, §1º); a defesa vence desmontando **um só deles**. O entregável típico são **teses de absolvição/desclassificação** organizadas em **resposta à acusação** (CPP, art. 396-A) e **memoriais** (CPP, art. 403, §3º).

> **Síntese operacional:** organização criminosa não é sinônimo de "vários réus na mesma denúncia". O tipo exige **4+ agentes, estabilidade, estrutura ordenada e divisão de tarefas** — cumulativamente. Faltando qualquer requisito, o fato é **atípico** quanto ao art. 2º e, no máximo, **desclassifica-se** para o art. 288 do CP ou para o art. 35 da Lei 11.343/2006. Concurso eventual de agentes (CP, art. 29) **não é associação nenhuma**.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 13.964/2019 (Pacote Anticrime) alterou a Lei 12.850 (incluiu, entre outros, os §§8º e 9º do art. 2º — regime inicial fechado para liderança armada e vedação de benefícios com vínculo atual, dispositivos de constitucionalidade discutida). Confira a redação vigente via agente `lei-e-sumula` e valide todo precedente via `jurisprudencia-stj-stf` antes de fundamentar — julgado não conferido entra na peça como **[NÃO VERIFICADO]**.

## O tipo penal e o conceito legal — dois dispositivos, um só alvo probatório

- **Art. 1º, §1º (conceito):** organização criminosa é a associação de **4 ou mais pessoas**, **estruturalmente ordenada** e caracterizada pela **divisão de tarefas** (ainda que informalmente), com objetivo de obter vantagem de qualquer natureza, mediante a prática de **infrações penais com pena máxima superior a 4 anos** ou de **caráter transnacional**.
- **Art. 2º (tipo):** promover, constituir, financiar ou integrar, pessoalmente ou por interposta pessoa, organização criminosa. Pena: reclusão de **3 a 8 anos** e multa, **sem prejuízo** das penas dos crimes praticados pela organização.
- **Art. 2º, §1º:** mesmas penas para quem impede ou embaraça a investigação de organização criminosa.
- **Crime autônomo e permanente:** o art. 2º não depende da condenação pelos crimes-fim (autonomia), e a conduta de "integrar" se protrai no tempo (permanência) — com efeitos sobre flagrante, prescrição e lei aplicável (Súmula 711 do STF: aplica-se a lei mais grave vigente antes da **cessação** da permanência).

A consequência prática: **a materialidade da orcrim não se presume da materialidade dos crimes-fim.** A denúncia e a sentença precisam de prova específica dos elementos estruturais — e é aí que a defesa trabalha.

## Requisitos estruturais — cada um é uma frente de defesa

| Requisito (art. 1º, §1º) | O que a acusação deve provar | Ataque defensivo típico |
|---|---|---|
| **4 ou mais agentes** | Ao menos 4 pessoas vinculadas à associação (identificadas ou identificáveis) | Denúncia com menos de 4 integrantes descritos; corréus absolvidos/excluídos que derrubam o número; mera menção a "outros não identificados" sem lastro probatório |
| **Estabilidade / permanência** | Vínculo associativo duradouro, *animus associativo* prévio e autônomo | Reunião ocasional para crime(s) determinado(s) = **concurso de agentes** (CP, art. 29), não associação |
| **Estrutura ordenada** | Organização interna, hierarquia ou coordenação (ainda que informal) | Grupo horizontal e amorfo, sem comando nem organização demonstrada nos autos |
| **Divisão de tarefas** | Papéis definidos e distribuídos entre os membros | Condutas indistintas, todos fazendo tudo; imputação que não diz **qual** tarefa coube ao acusado |
| **Finalidade de vantagem** | Objetivo de obter vantagem de qualquer natureza | Finalidade diversa (política, ideológica sem proveito) — analisar no caso concreto |
| **Crimes-fim qualificados** | Infrações com pena máxima **> 4 anos** ou transnacionais | Crimes-fim com pena máxima ≤ 4 anos e sem transnacionalidade → o conceito legal **não se preenche** |

> **Método:** trate a tabela como roteiro de instrução. Para cada requisito, aponte nos memoriais **qual prova dos autos o sustentaria — e por que ela não existe ou não basta**. Tese estrutural sem análise de prova é retórica; com análise de prova, é absolvição ou desclassificação.

## Distinção entre os tipos associativos — a chave da desclassificação

| Elemento | **Art. 288, CP** (associação criminosa) | **Art. 35, Lei 11.343/2006** (associação para o tráfico) | **Art. 2º, Lei 12.850/2013** (organização criminosa) |
|---|---|---|---|
| Nº mínimo de agentes | **3** | **2** | **4** |
| Estrutura ordenada + divisão de tarefas | não exigidas | não exigidas | **exigidas** |
| Estabilidade | exigida | exigida (a expressão "reiteradamente ou não" não dispensa o vínculo estável — confira via `jurisprudencia-stj-stf`) | exigida |
| Crimes visados | crimes em geral | tráfico (arts. 33, *caput* e §1º, e 34) | infrações com pena máxima > 4 anos ou transnacionais |
| Pena | reclusão, 1 a 3 anos | reclusão, 3 a 10 anos + 700 a 1.200 dias-multa | reclusão, 3 a 8 anos + multa |

**Regras de desclassificação:**
- Grupo estável **sem** estrutura ordenada/divisão de tarefas, ou com **3** agentes → **art. 288 do CP** (pena muito menor: 1 a 3 anos, com reflexos em prescrição, regime, substituição, suspensão condicional do processo (Lei 9.099/95, art. 89 — pena mínima de 1 ano) e ANPP em tese (CPP, art. 28-A — verificados os demais requisitos)).
- Associação voltada **ao tráfico** → **art. 35 da Lei 11.343** por **especialidade**, ainda que presentes 4+ agentes — a imputação simultânea de art. 2º da 12.850 **e** art. 35 pelos mesmos fatos configura **bis in idem** (entendimento a confirmar via `jurisprudencia-stj-stf`; marque [NÃO VERIFICADO] até validar).
- Nenhum vínculo estável provado → **atipicidade das três figuras**: resta o concurso de agentes nos crimes-fim (CP, art. 29).

## Teses defensivas típicas

**1. Atipicidade por falha estrutural (absolvição — CPP, art. 386, III).** A via principal: demonstrar, requisito a requisito, que o conceito do art. 1º, §1º não se preenche. É tese de mérito, mas deve ser **semeada já na resposta à acusação** para orientar a instrução (perguntas às testemunhas sobre hierarquia, papéis, duração do vínculo).

**2. Desclassificação (art. 288 do CP ou art. 35 da Lei 11.343).** Subsidiária à atipicidade: admite o vínculo, nega a estrutura. Explicite as consequências favoráveis (pena, regime, prescrição) — o juiz precisa ver o que muda.

**3. Bis in idem (tripla frente).**
- **Orcrim + associação para o tráfico** pelos mesmos fatos: especialidade resolve pelo art. 35 — cumular os dois tipos pune duas vezes o mesmo vínculo.
- **Agravante de comando (art. 2º, §3º) usada duas vezes:** a liderança não pode, simultaneamente, agravar a pena (§3º) **e** exasperar a pena-base como circunstância judicial (CP, art. 59) — o mesmo fato não pesa duas vezes.
- **Majorantes espelhadas em crimes autônomos:** o emprego de arma (§2º) ou a transnacionalidade (§4º, V) não podem majorar a orcrim **e** figurar como fundamento idêntico em outra imputação ou etapa dosimétrica. Caso típico: lavagem majorada por organização criminosa (Lei 9.613/98, art. 1º, §4º) **cumulada** com o art. 2º da 12.850 pelo mesmo vínculo — o mesmo fato não pode majorar um crime e constituir o outro (tese T7 da skill `defesa-lavagem-capitais`; precedentes via `jurisprudencia-stj-stf`). Mapeie a dosimetria inteira à caça de fato único valorado em dobro.

**4. Inépcia da denúncia por imputação genérica (CPP, arts. 41 e 395, I).** "Integrar organização criminosa" sem dizer **o que** o acusado fazia, **quando** e **como** aderiu não é imputação — é rótulo. Em crimes de autoria coletiva admite-se alguma generalidade na exordial, mas o mínimo de individualização da conduta é inegociável. Peça a rejeição/absolvição sumária na resposta à acusação (tese que **preclui** se guardada para depois — ver pegadinhas).

**5. Fragilidade probatória — delação sem corroboração (Lei 12.850, art. 4º, §16).** Nenhuma condenação, recebimento de denúncia ou cautelar pode fundar-se **exclusivamente** na palavra de colaborador. Se a imputação de "integrar" repousa só em delação, exija o lastro externo — a blindagem do delatado é a tese central aqui. O regime completo do acordo está na skill `colaboracao-premiada` (que trata do **acordo** como meio de obtenção de prova; esta skill trata da **defesa contra a imputação do tipo** — não confunda os planos).

**6. Nulidade dos meios especiais de obtenção de prova.** A Lei 12.850 traz meios próprios — **ação controlada** (art. 8º: exige comunicação prévia ao juiz) e **infiltração de agentes** (arts. 10 a 14: exige autorização judicial motivada e prazo). Flagrante retardado sem comunicação, infiltração sem autorização ou fora do prazo contaminam a prova derivada (CPP, art. 157). Varra os autos com o agente `mapa-nulidades`.

**7. Pena e regime — dispositivos do Pacote Anticrime sob suspeita.** O art. 2º, §8º (regime inicial fechado obrigatório para liderança de orcrim armada) e o §9º (vedação de progressão/livramento com vínculo atual) reproduzem lógica de obrigatoriedade que o STF já rejeitou em contextos análogos (regime fechado automático). Sustente a inconstitucionalidade/inaplicabilidade **pesquisando o estado atual via `jurisprudencia-stj-stf`** e marcando [NÃO VERIFICADO] o que não validar.

**8. Excesso de prazo com réu preso (Lei 12.850, art. 22, parágrafo único).** A instrução deve encerrar-se em **120 dias** quando o réu estiver preso, prorrogáveis motivadamente por igual período. Estourado o prazo sem justificativa, a via é o **habeas corpus** por constrangimento ilegal — ver a skill `habeas-corpus`.

**9. Competência.** Transnacionalidade que atrai a Justiça Federal (CF, art. 109, V) exige crime previsto em tratado **e** iter internacional — imputação federal sem esses elementos rende preliminar de incompetência. Inversamente, cuidado com a tese que "ganha" a incompetência e entrega o caso a juízo pior: avalie estrategicamente.

## Estrutura forense — resposta à acusação e memoriais

A defesa contra a orcrim se articula em **dois tempos**: a resposta à acusação planta as preliminares e o roteiro probatório; os memoriais colhem o que a instrução (não) provou. Esqueleto comum:

```
AO JUÍZO DA [N]ª VARA CRIMINAL [FEDERAL, se o caso] DE [COMARCA/SEÇÃO] — [UF]

Autos nº [PROCESSO]

[NOME], já qualificado(a), por seu(sua) advogado(a), vem apresentar
[RESPOSTA À ACUSAÇÃO — CPP, art. 396-A / ALEGAÇÕES FINAIS POR MEMORIAIS —
CPP, art. 403, §3º], expondo:

I — SÍNTESE DA IMPUTAÇÃO
Transcrever COMO a denúncia descreve a organização: quantos agentes, qual
estrutura, qual tarefa atribuída ao acusado. (Quase sempre a fragilidade já
aparece aqui: a denúncia afirma os requisitos, não os descreve.)

II — PRELIMINARES (na resposta à acusação; renovar nos memoriais se não apreciadas)
   1. Inépcia da denúncia — imputação genérica (CPP, arts. 41 e 395, I).
   2. Incompetência do juízo (se cabível).
   3. Nulidade dos meios de obtenção de prova (ação controlada sem comunicação,
      art. 8º, §1º; infiltração sem autorização, arts. 10-14) + prova derivada
      (CPP, art. 157).

III — MÉRITO (em ordem sucessiva — eventualidade)
   1. ATIPICIDADE do art. 2º — ausência de requisito estrutural
      [requisito a requisito: nº de agentes, estabilidade, estrutura ordenada,
      divisão de tarefas, crimes-fim qualificados — confrontando com a prova
      (ou a falta dela) dos autos].
   2. FRAGILIDADE PROBATÓRIA — delação sem corroboração (art. 4º, §16);
      in dubio pro reo (CPP, art. 386, VII).
   3. SUBSIDIARIAMENTE, DESCLASSIFICAÇÃO
      [para o art. 288 do CP ou para o art. 35 da Lei 11.343, conforme o caso,
      explicitando as consequências penais favoráveis].
   4. SUBSIDIARIAMENTE, DOSIMETRIA
      [bis in idem do §3º com a pena-base; afastamento de majorantes dos §§2º
      e 4º sem prova específica; inconstitucionalidade dos §§8º e 9º; pena-base
      no mínimo; regime adequado à pena].

IV — PEDIDOS (sucessivos)
   a) acolhimento das preliminares [rejeição/absolvição sumária ou nulidade];
   b) ABSOLVIÇÃO da imputação do art. 2º da Lei 12.850/2013 (CPP, art. 386,
      III ou VII);
   c) subsidiariamente, DESCLASSIFICAÇÃO para o art. [288 do CP / 35 da Lei
      11.343/2006], com os consectários legais;
   d) subsidiariamente, revisão da dosimetria [exclusão da agravante do §3º
      e das majorantes; regime compatível].

[Na resposta à acusação, acrescer: rol de testemunhas e requerimentos de prova
— inclusive os voltados a DESMENTIR os requisitos estruturais.]

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

Para o desenvolvimento completo das alegações finais (valoração da prova produzida, confronto testemunha a testemunha), aplique a skill `memoriais`; para a prisão decorrente da imputação, `habeas-corpus`.

## Erros comuns e pegadinhas

- **Confundir os três tipos associativos.** Pedir "desclassificação para o art. 288" quando o grupo visava tráfico (o correto seria o art. 35), ou atacar "estrutura ordenada" numa imputação de art. 288 (que não a exige), desmoraliza a peça.
- **Guardar a inépcia para os memoriais.** A inépcia da denúncia deve ser arguida **na resposta à acusação**; suscitá-la após a sentença esbarra na **preclusão** (entendimento consolidado — ainda assim, renove nos memoriais se não apreciada, para prequestionar).
- **Prazo da resposta à acusação: 10 dias** (CPP, art. 396), contados na forma do CPP, art. 798, §1º (exclui-se o dia do começo, inclui-se o do vencimento). **Defensoria Pública: prazo em dobro** (LC 80/94, arts. 44, I, 89, I e 128, I). Em processos multitudinários com réus soltos e presos, confira a contagem **individual** de cada réu; o termo inicial na citação por mandado tem nuances — confirme o entendimento atual via `jurisprudencia-stj-stf` antes de apostar no fim do prazo.
- **Esquecer a autonomia do art. 2º.** Absolvição dos crimes-fim **não** absolve automaticamente da orcrim (e vice-versa). Cada imputação exige ataque probatório próprio — mas use a absolvição dos crimes-fim para corroer a "finalidade de vantagem mediante infrações qualificadas".
- **Ignorar o caráter permanente.** "Integrar" se protrai: a prescrição só corre da **cessação** do vínculo, e a Súmula 711 do STF autoriza a lei mais grave vigente antes dessa cessação. Se o cliente se desligou, **prove a data do desligamento** — ela define prescrição e lei aplicável.
- **Atacar a delação sem atacar a corroboração.** Não basta desqualificar o colaborador; demonstre que os elementos "de corroboração" apontados ou não existem ou derivam da própria delação (corroboração cruzada entre delatores não é lastro externo — confirme o entendimento via `jurisprudencia-stj-stf`).
- **Endereçamento errado em foro por prerrogativa ou vara especializada.** Varas especializadas em organização criminosa (onde existam) e conexão com juízo federal mudam o destinatário — confira antes de protocolar.
- **Funcionário público réu:** atenção ao afastamento cautelar (art. 2º, §5º) e ao efeito da condenação (perda do cargo e interdição por 8 anos — §6º): peças e memoriais devem enfrentá-los expressamente, sob pena de o cliente ser surpreendido por efeito não debatido.
- **Citar julgado de memória.** Precedente sobre bis in idem, corroboração ou §§8º/9º só entra na peça **depois** de pesquisado via `jurisprudencia-stj-stf` e validado pelo `verificador-citacoes` — até lá, [NÃO VERIFICADO].

## Apoie-se em

- **Skill `colaboracao-premiada`** — o regime do acordo de colaboração (arts. 3º-A a 7º), do lado de quem colabora; esta skill cobre o outro lado — a defesa do imputado/delatado. Use as duas em conjunto quando houver delator no processo.
- **Skill `memoriais`** — desenvolvimento completo das alegações finais escritas (valoração da prova da instrução).
- **Skill `habeas-corpus`** — prisões e constrangimentos ilegais decorrentes da imputação (inclusive excesso do prazo de 120 dias do art. 22, parágrafo único).
- **Skill `defesa-lavagem-capitais`** (desta onda) — a lavagem (Lei 9.613/1998) é imputação satélite frequente da orcrim; as teses de autonomia e bis in idem conversam entre si.
- **Agente `analise-denuncia`** — triagem da exordial: individualização de condutas, requisitos formais do CPP, art. 41.
- **Agente `mapa-nulidades`** — varredura de nulidades dos autos (ação controlada, infiltração, cadeia de custódia, prova derivada).
- **Agente `jurisprudencia-stj-stf`** — pesquisa e validação de todo precedente (bis in idem, corroboração, §§8º/9º) antes de citar.
- **Agente `verificador-citacoes`** — gate final de citações: nada protocola com julgado não conferido.
- **Skill `redacao-persuasiva-criminal`** — **sempre**: teoria do caso, narrativa, subsunção explícita e a régua de obra-prima que a revisão cobra.

Toda entrega é rascunho técnico sujeito a **revisão humana obrigatória** antes de protocolar.
