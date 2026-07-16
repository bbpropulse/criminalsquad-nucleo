---
name: juri-recusas-peremptorias-estrategia
description: >-
  Use ao planejar e executar as 3 recusas peremptórias (imotivadas) da defesa durante o sorteio dos
  7 jurados do Conselho de Sentença — critérios de descarte, orçamento de recusas, ordem de arguição
  (defesa primeiro), risco de esgotamento e a interação com a separação de julgamentos por corréus.
  Gatilhos: recusa peremptória, recusa imotivada, recusa motivada, escolha de jurados, formação do
  Conselho de Sentença, sorteio dos… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, analise, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-recusas-peremptorias-estrategia"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-recusas-peremptorias-estrategia", "juri recusas", "peremptorias estrategia"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Recusas Peremptórias na Formação do Conselho de Sentença (arts. 468-469 e 471 CPP)

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

Esta skill orienta a **decisão tática das 3 recusas peremptórias (imotivadas) da defesa** durante o sorteio dos 7 jurados que formarão o Conselho de Sentença, na 2ª fase do júri. Não é sobre *como* impugnar um jurado por impedimento/suspeição (recusa **motivada**, ilimitada), mas sobre **quando e em quem gastar** cada uma das 3 recusas **imotivadas** — um problema de **gestão de escassez sob pressão**, decidido em segundos no plenário, à medida que cada nome é sorteado.

> **Lição central:** recusa peremptória é **orçamento fixo de 3 balas** que se gasta na ordem do sorteio, sem poder voltar atrás. O erro clássico é **queimar recusa cedo** com um jurado apenas "morno" e **chegar ao fim sem munição** diante de um jurado claramente hostil. Decida por **limiar** (só recuso quem cruza um patamar de risco), não por impulso — e conte sempre quantas balas restam a você **e ao MP**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 463 a 472 do CPP** (procedimento do júri reescrito pela **Lei 11.689/2008**) na fonte oficial antes de afirmar número de recusas, ordem de arguição ou regra de separação. Qualquer súmula, tese ou acórdão sobre nulidade na formação do Conselho passa **obrigatoriamente** pelo gate `verificacao-citacoes` (ou pela skill `jurisprudencia-stj-stf`). Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 5º, XXXVIII, CF** — soberania dos veredictos e **plenitude de defesa** (mais ampla que a "ampla defesa" comum): é o fundamento constitucional que legitima a recusa imotivada.
- **Art. 468 CPP** — à medida que as cédulas são sorteadas, **defesa e, depois, acusação** podem recusar os jurados **sem motivar**, até **3 de cada parte**. O parágrafo único: o jurado recusado por qualquer das partes é **excluído daquela sessão**.
- **Art. 469 CPP** — havendo **mais de um réu**, as recusas podem ser feitas por **um só defensor**; **não havendo acordo** entre as defesas sobre a recusa, prevalece a que recusar (separam-se ou não os julgamentos conforme o número de jurados restantes — ver adiante).
- **Art. 470 CPP** — desacordo entre acusadores (assistente/MP) quanto à recusa: **prevalece a do MP**.
- **Art. 471 CPP** — se, **em consequência das recusas**, não houver número suficiente para completar os 7, o julgamento é **adiado** para o primeiro dia desimpedido, com novo sorteio.
- **Arts. 466-467 CPP** — advertências e exortação aos jurados; ponto de partida do pregão.
- **Recusa motivada (arts. 448-449, 462 CPP e causas de impedimento/suspeição/incompatibilidade):** **ilimitada** e **fundamentada** (parentesco, amizade íntima/inimizade, interesse na causa etc.). **Não** consome o orçamento das 3 peremptórias — use-a primeiro sempre que houver causa legal.

## Recusa motivada × recusa peremptória (não confundir)

| | Recusa **motivada** | Recusa **peremptória** (imotivada) |
|---|---|---|
| Fundamento | Causa legal (impedimento, suspeição, incompatibilidade) | Nenhum — íntima convicção da parte |
| Limite | **Ilimitada** | **3 por parte** (art. 468) |
| Precisa justificar? | **Sim**, ao juiz-presidente | **Não** |
| Decisão | Juiz-presidente decide | Automática (basta arguir) |
| Estratégia | Esgotar **antes** de gastar peremptória | Orçamento escasso — gerir |

➡️ **Regra de ouro:** havendo causa legal, **recuse por motivo** e preserve as 3 peremptórias. Só gaste bala imotivada em quem você **não consegue** afastar por causa legal, mas ainda assim quer fora.

## A mecânica do sorteio (o que acontece no plenário)

1. Presentes ao menos **15 jurados** (art. 463), o juiz-presidente instala a sessão e faz as advertências (arts. 466-467).
2. As cédulas com os nomes vão à **urna**; o juiz sorteia **um a um**.
3. A cada nome sorteado, **antes de o jurado ir ao Conselho**, o juiz pergunta às partes se **aceitam ou recusam** — **a defesa se manifesta PRIMEIRO**, depois a acusação (art. 468).
4. Recusado (por qualquer lado, motivada ou imotivadamente), o jurado **sai daquela sessão** (parágrafo único do art. 468); aceito por ambos, **assenta-se** e integra os 7.
5. Repete-se até completar **7 jurados**. Se as recusas esgotarem os presentes antes disso, **adia-se** (art. 471).

> **Consequência tática de "defesa primeiro":** você decide **sem saber** se o MP também recusaria aquele jurado. Se você recusa alguém que o MP também recusaria, **desperdiçou** uma bala num nome que sairia de graça. Por isso o cálculo: *a acusação provavelmente já quer este jurado fora?* Se sim, **espere** — deixe o MP gastar a bala dele.

## O núcleo tático — o "orçamento de recusas"

Pense em **duas variáveis vivas** ao longo do sorteio:

```
minhas_recusas_restantes   (começa em 3)
recusas_MP_restantes       (começa em 3, estime pelo comportamento)
jurados_ainda_por_sortear  (quantas cédulas restam na urna)
vagas_no_Conselho          (quantas das 7 ainda faltam preencher)
```

**Princípios de alocação:**

1. **Limiar, não impulso.** Defina *antes* da sessão um patamar: "só recuso quem cruzar risco ALTO". Jurado "morno" (risco médio) **não** justifica gastar 1/3 do seu poder de veto.
2. **Munição vale mais no fim.** Os últimos nomes sorteados são os mais perigosos de aceitar por obrigação (você já sem balas). **Não** esvazie o orçamento nos primeiros nomes salvo risco extremo.
3. **Leia o placar do MP.** Cada recusa do MP é informação: revela o **perfil que a acusação teme** (útil para você) e **reduz a munição adversária**. Quando o MP zera as recusas, todos os jurados seguintes entram **se você aceitar** — sua bala passa a valer mais.
4. **Não recuse o que o adversário recusaria.** Se um jurado é obviamente pró-defesa fraca / pró-acusação forte, o MP tende a mantê-lo e você o recusa; se é obviamente hostil à acusação, **deixe o MP gastar** — economia de bala.
5. **Conte as vagas.** Se faltam 2 vagas e restam poucos nomes na urna, recusar pode **forçar o adiamento** (art. 471) — às vezes é o que você quer (recompor a plateia de jurados), às vezes é um tiro no pé (perde-se preparação, adia-se réu preso). Decida conscientemente.
6. **Registre em ata** cada recusa (sua e do MP) e o momento — munição de eventual nulidade e controle do próprio orçamento.

### Fluxo de decisão por jurado sorteado

```
Jurado sorteado → há CAUSA LEGAL de impedimento/suspeição?
   ├── SIM → RECUSA MOTIVADA (ilimitada; não gasta peremptória) → requerer ao juiz
   └── NÃO → o perfil cruza meu LIMIAR de risco ALTO?
         ├── NÃO → ACEITO (não desperdiço bala em risco médio/baixo)
         └── SIM → o MP provavelmente também recusaria este jurado?
               ├── SIM → ESPERO (deixo o MP gastar a bala dele)
               └── NÃO → tenho recusa peremptória sobrando E as vagas/urna
                         comportam o risco de adiamento?
                     ├── SIM → RECUSO (peremptória) e consigno em ata
                     └── NÃO → reavalio: aceito ou aceito o adiamento (art. 471)
```

## Critérios de descarte — o que "risco ALTO" pode significar (para a defesa)

> Estes são **fatores de leitura de perfil a partir de dados lícitos e públicos** (ver *Limites éticos* abaixo). São hipóteses de trabalho, não verdades — e **jamais** substituem a proibição de contato com jurado.

- **Vínculo institucional com a persecução:** parentes de policiais, ex-agentes de segurança, servidores da persecução penal (quando não configurarem impedimento legal, que aí seria recusa motivada).
- **Rigor punitivo declarado publicamente** em manifestações lícitas e públicas (ex.: postagens abertas defendendo pena máxima, "bandido bom é bandido morto") — sopesar com cautela e sem devassa.
- **Relação com a vítima, o local ou a comunidade** afetada pelo fato (proximidade que gere pré-julgamento sem chegar a impedimento).
- **Perfil refratário à tese central da defesa** (ex.: tese de legítima defesa diante de jurado com posição pública contrária).
- **Reação corporal/verbal hostil** durante as advertências e a instrução em plenário (linguagem não verbal observável na sessão).

> **Espelho da acusação:** o MP tende a recusar quem parece **leniente/garantista**; observar as recusas do MP ajuda a inferir o perfil que ele teme — e a **não gastar** bala em jurado que ele mesmo tiraria.

## Cenário crítico — pluralidade de réus e a separação de julgamentos

Este é o ponto onde a matemática das recusas vira **decisão de separar ou não os julgamentos**.

- **Regra (art. 469):** com **mais de um réu**, as recusas peremptórias **podem** ser feitas por **um só defensor**. **Não havendo acordo** entre as defesas, **prevalece a recusa** feita por qualquer delas — ou seja, a recusa de um corréu **aproveita** (e vincula) o conjunto quanto àquele jurado.
- **A conta que estoura os jurados:** se as defesas **não se acordam** e cada uma quer usar suas próprias recusas, o total de recusas pode ser tão alto que **não sobram jurados** para formar o Conselho.
- **Separação (art. 469, §1º, e sistemática do art. 471):** quando, **em razão das recusas**, não houver número para completar os 7, procede-se à **separação dos julgamentos** — julga-se primeiro o réu a quem a recusa aproveitou (ou por sorteio/critério legal), adiando-se os demais. **Confirme na redação vigente** o critério exato de quem é julgado primeiro e a mecânica de adiamento (art. 471).

> **Alerta tático (defesa de corréu):** provocar deliberadamente o **estouro** de recusas para **forçar a separação** pode ser estratégia legítima (isolar o cliente da "contaminação" por corréu, escolher a ordem de julgamento) **ou** um tiro no pé (adiamento, réu preso, perda de preparação, jurado favorável perdido). Alinhe **antes** com as demais defesas; a decisão de separar tem efeitos que ultrapassam o seu cliente.

## Teses e contra-teses (nulidade na formação do Conselho)

**Teses defensivas (para preservar via ata → apelação, art. 593, III, "a"):**

1. **Cerceamento do direito de recusa** — juiz-presidente que **não oportuniza** a manifestação da defesa antes de assentar o jurado, ou inverte a ordem (acusação antes da defesa) contra o art. 468, viola a **plenitude de defesa** (art. 5º, XXXVIII, CF).
2. **Recusa motivada indevidamente indeferida** — impedimento/suspeição concreto rejeitado sem fundamentação → nulidade; **consignar o protesto**.
3. **Formação viciada do Conselho** — jurado impedido/suspeito que **integrou** os 7 apesar de causa legal apontada → nulidade (grau — absoluta/relativa — a **confirmar na jurisprudência atual**; costuma exigir demonstração de prejuízo, art. 563 CPP).
4. **Ata omissa** — ausência de registro das recusas e das decisões impede o controle → argumento de nulidade por **falta de documentação** do ato.

**Contra-tese (acusação / a antecipar):** *pas de nullité sans grief* (art. 563 CPP) — a parte precisa demonstrar **prejuízo concreto**; recusa peremptória é **imotivada por natureza** e seu "mau uso" tático **não** gera nulidade (não se anula júri porque a defesa administrou mal o próprio orçamento). Por isso a ênfase: o que se preserva por ata é **vício do procedimento** (ordem, indeferimento de motivada, jurado impedido), **não** arrependimento tático.

## Limites éticos (perfilamento e imparcialidade do Conselho)

Esta seção é **inegociável**. A gestão das recusas opera dentro de fronteiras estritas:

- **Somente dados públicos e lícitos.** Qualquer leitura de perfil de jurado usa **apenas** informação de acesso público e obtida por meio lícito (ex.: o que consta dos autos e o que é publicamente observável). **Vedada** a devassa da vida privada, a coleta ilícita de dados e a investigação intrusiva do jurado.
- **Proibição absoluta de contato.** É **vedado abordar, contatar, sondar, pressionar, aliciar ou influenciar** jurado — antes, durante ou depois da sessão. Nada que comprometa a **imparcialidade** ou a **incomunicabilidade** do Conselho, nem o **sigilo das votações** (art. 466, §1º, incomunicabilidade dos jurados).
- **Recusa imotivada ≠ recusa discriminatória.** A peremptória dispensa motivação **perante o juiz**, mas **não** pode ter, na sua razão de ser, **fim discriminatório ilícito** (recusar sistematicamente por raça, cor, religião, gênero, orientação sexual ou origem é ilícito e mancha a legitimidade do veredicto). O poder de veto imotivado **não** é salvo-conduto para discriminação vedada pela Constituição.
- **Nada que comprometa o Conselho.** Não se instrumentaliza a formação do júri para fraudar a imparcialidade, criar constrangimento aos jurados ou quebrar o sigilo. Em caso de dúvida ética, **abster-se** e consultar a best-practice de ética (OAB + Provimento 205/2021 na advocacia).

## Erros comuns (anti-padrões)

- **Queimar bala cedo** em jurado apenas "morno" e chegar ao fim sem munição diante do hostil.
- **Recusar por impulso** um jurado que o **MP** também recusaria — desperdício de orçamento.
- **Usar peremptória** onde cabia **recusa motivada** (impedimento/suspeição), esgotando o orçamento à toa.
- **Não contar as balas do MP** — perder a informação de quando a acusação zera as recusas (a partir daí, seu veto vale mais).
- **Provocar estouro** de recusas em pluralidade de réus **sem alinhar** com as demais defesas — separação/adiamento indesejados.
- **Não consignar em ata** as recusas e decisões — perde-se munição de nulidade e o controle do próprio orçamento.
- **Confundir** o "mau uso" tático (não anula nada) com **vício de procedimento** (ordem/indeferimento de motivada/jurado impedido — este sim, preservável).
- **Ignorar o art. 471** — recusar sem perceber que se força o adiamento do julgamento.

## Checklist de plenário (formação do Conselho — DEFESA)

- [ ] **Antes da sessão:** limiar de risco definido (só recuso risco ALTO) e leitura de perfil feita **apenas** com dados públicos/lícitos?
- [ ] **Ordem correta:** a defesa se manifesta **antes** da acusação a cada sorteio (art. 468)?
- [ ] **Motivada primeiro:** há causa legal? Então recuso **por motivo** (ilimitada) e **preservo** as 3 peremptórias?
- [ ] **Contagem viva:** minhas 3 recusas e as 3 do MP monitoradas a cada nome?
- [ ] **Não gastar o que o MP gastaria:** avaliei se a acusação já quer aquele jurado fora?
- [ ] **Vagas × urna:** conferi se recusar força o adiamento (art. 471) — e se isso me interessa?
- [ ] **Pluralidade de réus:** acordo de recusas alinhado **antes** com as demais defesas (art. 469)? Separação decidida conscientemente?
- [ ] **Ata:** cada recusa (minha e do MP), cada indeferimento de motivada e cada protesto **consignados**?
- [ ] **Ética:** nenhum contato/pressão sobre jurado; nenhuma recusa com viés discriminatório ilícito?
- [ ] **Citações verificadas** (`verificacao-citacoes` / `jurisprudencia-stj-stf`) e **revisão humana** do advogado responsável?

## Lembretes finais

- **3 balas imotivadas por parte** (art. 468); **defesa arguí primeiro**, depois a acusação.
- **Motivada é ilimitada** — esgote-a antes de gastar peremptória.
- **Limiar, não impulso;** **munição vale mais no fim;** **leia o placar do MP.**
- **Recusado = fora da sessão** (art. 468, parágrafo único); **recusas demais → adiamento** (art. 471).
- **Pluralidade de réus (art. 469):** desacordo faz **prevalecer a recusa**; pode **estourar** o número e **separar** os julgamentos — alinhe antes.
- **Nulidade se preserva por ata** (vício de procedimento), **não** por arrependimento tático (*pas de nullité sans grief*, art. 563).
- **Ética inegociável:** só dados públicos/lícitos; **zero contato** com jurado; **nada discriminatório**; nada que quebre imparcialidade/incomunicabilidade/sigilo.
- **Conferir vigência** dos arts. 463-472 CPP e das teses via `verificacao-citacoes` antes de sustentar qualquer nulidade.

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação do plenário**, sob **revisão humana obrigatória** — não substitui o juízo do advogado responsável nem a leitura do caso concreto e da sessão real. A atuação e as impugnações na formação do Conselho são sempre de responsabilidade do **advogado** (ética conforme o polo: **OAB + Provimento 205/2021** na advocacia; **CNMP** no Ministério Público; **LC 80/94** na Defensoria). Toda referência normativa, súmula ou precedente passa **obrigatoriamente** pelo gate `verificacao-citacoes`. Ao consolidar peças ou memoriais correlatos, aplique também a skill `redacao-persuasiva-criminal`.
