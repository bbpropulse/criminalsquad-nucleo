---
name: juri-replica-treplica-aparte
description: >-
  Use ao planejar a estratégia de RÉPLICA, TRÉPLICA e APARTE na sessão do Tribunal do Júri (arts.
  476, 477 e 497, XII do CPP) — a matriz de decisão sobre provocar ou renunciar à réplica, o roteiro
  da tréplica (última palavra), a disciplina do aparte (pedir/conceder/negar) e o registro do aparte
  abusivo como nulidade, além da controvérsia sobre inovar tese na tréplica. Gatilhos: réplica,
  tréplica, aparte, aparte abusivo, art… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-replica-treplica-aparte"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-replica-treplica-aparte", "juri replica", "treplica aparte"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Réplica, Tréplica e Aparte no Tribunal do Júri (arts. 476, 477 e 497, XII do CPP)

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

Esta skill é o **módulo tático dedicado ao combate dialético final** do plenário do júri: a **réplica** (nova fala da acusação após a defesa), a **tréplica** (resposta da defesa, que detém a **última palavra**) e o **aparte** (a intervenção breve de uma parte na fala da outra). É a fase mais decisiva e mais viva da sessão — decide-se aqui, no calor do debate, o que o Conselho de Sentença leva para a sala secreta. A skill `juri-plenario-debates` constrói a **tese** e a **sustentação principal**; esta cuida do **duelo final**: quando provocar réplica, como estruturar a tréplica e como manejar/impugnar o aparte.

> **Lição central:** no júri, a **defesa fala por último** (tréplica). Essa é a peça-mestra da tática. A acusação só decide **provocar a réplica** quando o ganho de reforçar a tese superar o custo de **entregar à defesa a última palavra** perante os jurados. Quem raciocina em cima dessa assimetria domina os debates; quem replica por reflexo, a perde.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 476, 477 e 497 do CPP** — a sistemática atual dos tempos e da ordem dos debates decorre da **Lei 11.689/2008**, que reescreveu o procedimento do júri. Antes de afirmar prazos, ordem de fala ou o alcance de qualquer regra, confirme o texto na fonte oficial. Toda súmula, tese, informativo ou acórdão passa **obrigatoriamente** pelo gate da skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de uso — há sanções reais por jurisprudência inventada por IA.

## Base legal

- **Art. 476 do CPP** — ordem dos debates: acusação (MP e, havendo, assistente) sustenta a acusação; em seguida a **defesa**. Fixa a **sequência das falas**.
- **Art. 477 do CPP** — **tempos**: a acusação e a defesa dispõem, em regra, de **1h30 cada** para a fala principal; havendo **réplica**, há **1h para a réplica e 1h para a tréplica**. Com **mais de um acusado**, os tempos se ampliam (**2h30 de sustentação e 2h de réplica/tréplica**), divididos entre os réus, e a réplica pode ser distribuída conforme o número de acusados/assistentes.
- **Art. 497, XII, do CPP** — atribuição do **juiz-presidente** de **regular, durante os debates, a intervenção de uma das partes na fala da outra (o aparte)**, concedendo a palavra pelo tempo necessário. É a base legal do **controle do aparte** — e da sua **impugnação** quando abusivo.
- **Art. 5º, XXXVIII, "a", da CF + plenitude de defesa** — no júri a defesa é **plena** (mais ampla que a "ampla defesa" comum); isso reforça a garantia da **última palavra** e o direito de a defesa não ser cerceada por aparte abusivo.
- **Art. 593, III, "a" e "d", do CPP** — apelação por **nulidade posterior à pronúncia** (aparte abusivo não sanado, cerceamento) e por decisão manifestamente contrária à prova; a **ata** é o pressuposto de todas.

## A assimetria estrutural — quem fala por último

```
1) Acusação (MP; depois assistente, se houver)  — sustentação principal
2) Defesa                                        — sustentação principal
   ── aqui o debate se ENCERRARIA, se não houver réplica ──
3) Réplica (acusação) ....... FACULTATIVA — a acusação decide se usa
4) Tréplica (defesa) ........ só existe se houve réplica; a defesa detém a ÚLTIMA PALAVRA
```

- Sem réplica, a **defesa já teria falado por último** na sustentação principal. A réplica **reabre** o debate — e, ao reabri-lo, **obriga** a dar à defesa a tréplica.
- **A tréplica não é obrigatória para a defesa**: é uma **faculdade**. Mas raramente se renuncia a ela — é a chance de responder à acusação com a palavra final gravada na memória dos jurados.
- A defesa **não pode replicar** (não existe "quádrupla fala"); o ciclo encerra na tréplica.

## Matriz de decisão — provocar ou renunciar à RÉPLICA (ótica da acusação)

> Esta seção interessa sobretudo a quem atua na **acusação** (MP ou assistente). A defesa a estuda para **antecipar** a decisão do adversário e preparar-se para os dois cenários.

**A réplica é uma faculdade da acusação (art. 477).** Decidir bem exige pesar ganho × custo:

| Provocar réplica quando… | Renunciar à réplica quando… |
|---|---|
| A defesa levantou **tese nova/perigosa** que precisa ser desmontada na hora | A acusação **já convenceu** e reabrir só dá palco à defesa |
| Há **contradição factual** flagrante na sustentação defensiva a explorar | A tese defensiva é **fraca** e responder a ela lhe daria importância |
| Surgiu **fato ou prova** mal enfrentado que a réplica pode ancorar | O caso é **robusto** e o silêncio projeta segurança ao Conselho |
| O júri parece **hesitante** e um reforço pode consolidar a convicção | Replicar entregaria à defesa a **última palavra** sobre ponto sensível |

**Regra de ouro (acusação):** *não replique por reflexo.* Cada réplica **transfere para a defesa a última palavra**. Só vale quando o que se ganha desmontando a defesa supera o que se perde ao lhe dar a tréplica.

**Espelho (defesa):**
- **Se a defesa tem tese forte e simpática**, muitas vezes **convém provocar/estimular** a acusação a replicar (deixando pontas a atacar), para **garantir a tréplica** e fechar com a última palavra.
- **Se a defesa já dominou o plenário**, o silêncio da acusação lhe é favorável — não é preciso a tréplica, e uma acusação que renuncia sinaliza fraqueza.
- A defesa deve chegar ao plenário **com a tréplica já esboçada para os dois cenários** (com e sem réplica).

## Roteiro da TRÉPLICA — a última palavra da defesa

A tréplica não repete a sustentação: **responde à réplica** e **fecha** com a mensagem que o jurado levará à sala secreta. Estrutura sugerida (adaptar ao caso e ao tempo do art. 477):

1. **Abertura de reenquadramento (30–60s):** retomar o **fio condutor** da defesa — a "frase-tese" que sintetiza a teoria do caso — antes de responder à acusação, para não entrar no terreno dela.
2. **Rebate ponto a ponto da réplica:** enfrentar **cada** argumento novo/reforçado da réplica, na ordem em que atinge o jurado — priorizar o que ficou "no ar". Não deixar acusação sem resposta é o cerne da tréplica.
3. **Desarme das armadilhas:** apontar apelos emocionais, generalizações e inversões de ônus da acusação; **devolver o foco à prova e à dúvida razoável** (*in dubio pro reo*).
4. **Ancoragem no quesito genérico de absolvição:** lembrar ao jurado que ele pode **absolver por qualquer fundamento** — inclusive **clemência/íntima convicção** — respondendo "sim" a *"O jurado absolve o acusado?"* (art. 483, §2º, CPP — ver skill `juri-quesitacao`). A tréplica é o momento de **plantar** esse caminho.
5. **Fecho memorável:** a última frase da tréplica é a **última coisa** que o Conselho ouve antes de votar. Curta, concreta, humana. É o ativo mais valioso do plenário — não desperdiçar com tecnicismo.

> **Economia de tempo.** Havendo **corréus** ou **assistente de acusação**, os tempos e a divisão mudam (art. 477, §§). Planeje a tréplica **dentro do tempo efetivo** que caberá à defesa; cronometre os blocos. Confirme sempre a distribuição de tempo com o juiz-presidente **antes** dos debates.

## A controvérsia — INOVAR TESE na tréplica

Ponto sensível e de **divergência prática/jurisprudencial**. A discussão: pode a **defesa** sustentar na tréplica uma **tese que não apresentou** na sustentação principal (à qual a acusação não terá como responder, pois não há "quádrupla fala")?

- **Argumento pró-inovação (defesa):** a **plenitude de defesa** (CF, art. 5º, XXXVIII, "a") autoriza a defesa a usar **qualquer** meio e argumento em favor do réu, a qualquer tempo dos debates; vedar tese nova na tréplica cercearia essa plenitude. O **quesito genérico de absolvição** (art. 483, §2º) permite ao jurado absolver por fundamento não debatido — logo, a tese pode ser lançada.
- **Argumento contra-inovação (acusação):** inovar na tréplica violaria o **contraditório e a paridade de armas**, pois a acusação não pode replicar; a defesa estaria "guardando" a tese para o momento em que o adversário não responde. Daí a resistência a **teses factuais surpresa** que dependeriam de contraprova.
- **Fronteira que costuma orientar a prática:** distingue-se **aprofundar/reforçar** um argumento já lançado (em regra admitido) de **inaugurar uma tese completamente estranha** ao que se debateu (mais controverso). Teses **jurídicas** de absolvição tendem a ter trânsito mais livre que **inovações factuais** que exigiriam nova prova.

➡️ **Orientação operacional:**
- **Defesa:** se pretende trazer tese nova/decisiva na tréplica, avalie o risco de **impugnação da acusação** e de **incidente**; quando possível, **plante a semente** na sustentação principal (uma menção, ainda que breve) para depois **desenvolvê-la** na tréplica sem o rótulo de "inovação". **Registre em ata** a sustentação para preservar a matéria.
- **Acusação:** se a defesa inovar de forma que repute abusiva, **requeira a palavra pela ordem**, formule **protesto** e **exija a consignação em ata** — construindo, se for o caso, a tese de nulidade (art. 593, III, "a").
- **[NÃO VERIFICADO]** Existe jurisprudência do STF e do STJ sobre a (im)possibilidade de inovação de tese na tréplica e sobre seus limites. **Não** afirme número de HC/REsp/RE, tema ou informativo de memória — **confira via a skill `jurisprudencia-stj-stf`** antes de citar. Ensine a **tese** e o **dispositivo** (plenitude de defesa; contraditório; art. 483, §2º); **não arrisque um número de acórdão.**

## O APARTE — pedir, conceder, negar e impugnar (art. 497, XII)

O **aparte** é a **intervenção breve** de uma parte durante a fala da outra, para esclarecer, retificar ou contrapor um ponto. Quem **regula** o aparte é o **juiz-presidente** (art. 497, XII): é ele quem concede a palavra pelo tempo necessário — o aparte **não é direito potestativo** de interromper à vontade.

### Como manejar (técnica dos dois lados)

- **Ao pedir aparte:** dirija-se ao **juiz-presidente** ("Excelência, peço um aparte"), não ao adversário. Aguarde a concessão. Seja **cirúrgico**: um aparte é para **um** ponto — retificar um dado, apontar uma contradição —, não para discursar.
- **Ao ter a palavra e ser aparteado:** você pode **conceder** ou **não conceder** o aparte. Conceder demonstra segurança e permite rebater na hora; **negar** ("não concedo o aparte, Excelência") preserva o **fluxo** da sua fala — legítimo, sobretudo no fecho da tréplica. Se conceder, **retome o controle** logo após: responda em uma frase e volte ao seu roteiro.
- **Ao presidir a concessão:** o tempo do aparte, **em regra, não se abate** do tempo da parte que fala (é concedido "pelo tempo necessário") — confirme o critério do tribunal/juízo, pois há variação prática.

### O APARTE ABUSIVO — quando vira nulidade

Aparte abusivo é o que **excede** a função de intervenção breve e passa a **cercear** a fala da outra parte: interrupções **reiteradas**, **discurso** disfarçado de aparte, provocações, ou aparte **não concedido** pelo juiz-presidente e mesmo assim imposto. Perante os jurados, isso pode **quebrar o fluxo** da sustentação/tréplica e **influir** no Conselho.

**Protocolo de reação (defesa aparteada de forma abusiva na tréplica — o caso mais grave):**
1. **Dirigir-se ao juiz-presidente** e requerer que **faça cessar** o aparte abusivo, invocando o **art. 497, XII** e a **plenitude de defesa**.
2. **Requerer a consignação em ATA** do **incidente** — o número, o teor e o caráter reiterado dos apartes, e a decisão do juiz-presidente. **Sem ata, não há nulidade demonstrável.**
3. Persistindo o abuso, **formular protesto** e sustentar o **cerceamento** (base para apelação — art. 593, III, "a").
4. Se necessário, requerer que o juiz-presidente **advirta** a parte ou registre a advertência.

**Protocolo espelho (quem aparteia):** peça o aparte **sempre pelo juiz-presidente**, respeite a negativa, e **não transforme aparte em discurso** — o excesso vira munição de nulidade contra a própria acusação/defesa.

> **A ata é a munição.** Aparte abusivo, réplica/tréplica cerceada, tese impugnada — nada disso sobe em apelação se **não estiver na ata da sessão**. A regra de ouro do plenário: **requerer, protestar e consignar em ata, na hora.** O que não se registra, precluí.

## Erros comuns (anti-padrões)

**Acusação:**
- **Replicar por reflexo**, sem calcular que isso entrega a última palavra à defesa.
- Usar a réplica para **repetir** a sustentação, em vez de desmontar pontos específicos da defesa.
- Deixar passar **inovação factual** da defesa na tréplica sem protesto e sem consignar em ata.
- **Aparte-discurso**: transformar o aparte em nova sustentação — abusivo e contraproducente.

**Defesa:**
- **Renunciar à tréplica** sem necessidade, abrindo mão da última palavra.
- Usar a tréplica para **repisar** a sustentação em vez de **responder** à réplica ponto a ponto.
- **Guardar** a única tese decisiva para a tréplica sem ao menos **plantar a semente** na sustentação — expondo-a à pecha de inovação e à impugnação.
- **Conceder** apartes no **fecho** da tréplica, perdendo o controle da última frase.
- Sofrer **aparte abusivo** e **não consignar** o incidente em ata (mata a futura nulidade).

**Ambos:**
- Discutir com o adversário **em vez de** com o juiz-presidente ao pedir/regular aparte.
- Ignorar a **redistribuição de tempo** com corréus/assistente (art. 477, §§) e estourar o cronômetro.
- Citar **número de acórdão** de memória sobre inovação na tréplica — **sempre** passar por `jurisprudencia-stj-stf`.

## Checklist final (antes e durante os debates)

- [ ] Tempos do art. 477 conferidos para o **número de réus/assistentes** do caso (sustentação, réplica, tréplica)?
- [ ] **Acusação:** decisão de replicar tomada pela **matriz** (ganho × custo da última palavra), não por reflexo?
- [ ] **Defesa:** tréplica **esboçada para os dois cenários** (com e sem réplica) antes da sessão?
- [ ] Tréplica **responde** à réplica ponto a ponto e **ancora** o quesito genérico de absolvição (art. 483, §2º)?
- [ ] **Fecho** da tréplica preparado (última frase — curta, concreta, memorável)?
- [ ] Tese nova/decisiva **plantada** na sustentação para desenvolver na tréplica sem rótulo de inovação?
- [ ] Apartes pedidos **pelo juiz-presidente** (art. 497, XII), não impostos ao adversário?
- [ ] **Aparte abusivo** → requerimento ao juiz-presidente + **consignação em ata** + protesto?
- [ ] Incidentes (aparte, inovação, cerceamento) **registrados em ATA** para apelação (art. 593, III, "a")?
- [ ] Jurisprudência sobre inovação na tréplica e sobre aparte abusivo **conferida** via `jurisprudencia-stj-stf` (nada citado de memória)?
- [ ] **Revisão humana** do advogado/promotor responsável antes de usar em plenário?

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação** dos debates orais no plenário do júri e **não substitui** o juízo do profissional responsável nem a leitura do caso concreto em audiência. A atuação, os apartes, os protestos e as impugnações são de responsabilidade e sob a ética do profissional que atua:

- **Advocacia (defesa/assistente de acusação):** Estatuto da OAB, Código de Ética e Disciplina e **Provimento 205/2021** — atuação com urbanidade, sem provocação gratuita ao adversário; o aparte e o protesto se fazem com técnica, não com deselegância.
- **Ministério Público:** normas do **CNMP** e do respectivo estatuto — objetividade e lealdade processual na réplica e no manejo do aparte.
- **Defensoria Pública:** **LC 80/94** e normas internas.

**Citation Gate (inegociável):** dispositivos de lei (CPP/CF) podem ser citados livremente, conferida a **vigência**; **qualquer** precedente específico (número de HC/REsp/RE, informativo, tema) — sobretudo sobre **inovação de tese na tréplica** e **aparte abusivo como nulidade** — está marcado como **[NÃO VERIFICADO]** e deve ser conferido via `jurisprudencia-stj-stf` antes de qualquer uso. **Melhor faltar precedente do que citar julgado inexistente.**

**Padrão de redação:** para memoriais, razões de apelação ou peça derivada do incidente, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
