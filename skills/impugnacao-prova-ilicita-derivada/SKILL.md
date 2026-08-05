---
name: impugnacao-prova-ilicita-derivada
description: >-
  Use ao construir a teoria geral da prova ilícita e da contaminação por derivação (frutos da árvore
  envenenada) — CPP art. 157, caput e §§1º a 3º; CF art. 5º, LVI: mapear a árvore de contaminação,
  provar o nexo causal entre a prova ilícita originária e as derivadas e, sobretudo, desmontar
  antecipadamente as três exceções da acusação (fonte independente, descoberta inevitável e
  limitação da mancha purgada), com pedido de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, provas, processual-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-impugnacao-prova-ilicita-derivada"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["impugnacao-prova-ilicita-derivada", "impugnacao prova", "ilicita derivada"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Prova Ilícita e Prova Derivada — Frutos da Árvore Envenenada (CPP, art. 157)

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

Esta skill é a **teoria geral (peça-chapéu) da ilicitude probatória por derivação**. Não cuida de um vício específico — cuida do **método transversal**: como, uma vez identificada uma prova ilícita na origem (busca sem mandado, prisão ilegal, interrogatório sem direitos, interceptação irregular, denúncia anônima etc.), **mapear a cadeia de provas que dela decorreram** e **contaminá-las por derivação**, vencendo as exceções que a acusação sempre levanta. É a skill que as demais impugnações (cadeia de custódia, interceptação/sigilo, infiltração, embriaguez) invocam mas nenhuma desenvolve.

> **Lição central:** o caso de prova ilícita **não se ganha na prova originária — ganha-se no nexo causal**. Provar que a prova de origem é ilícita costuma ser a parte fácil. O jogo se decide em **estender a ilicitude às provas derivadas** (art. 157, §1º) e em **antecipar-se às três exceções da acusação** — fonte independente, descoberta inevitável e mancha purgada. Quem só ataca a prova-mãe e ignora os frutos perde metade da causa.

> **Cautela de vigência (obrigatória antes de citar):** a redação vigente do art. 157 do CPP decorre da **Lei 11.690/2008** (que constitucionalizou a inadmissibilidade e a teoria dos frutos) — **não** existe mais a exigência de "trânsito em julgado" para a inutilização (o §3º pré-Pacote Anticrime dizia inutilizar "preclusa a decisão"; o §5º do art. 157 introduzido pela **Lei 13.964/2019 — juiz das garantias/contaminação do julgador** teve eficácia suspensa/condicionada pelo STF nas ADIs do Pacote Anticrime). **Confira o texto atualizado do art. 157 e a situação do §5º na fonte oficial**, e passe toda súmula, tema e acórdão pela skill `jurisprudencia-stj-stf` antes de fundamentar. Na dúvida sobre um precedente concreto, **omitir vence inventar**.

## Base legal

- **CF, art. 5º, LVI** — "são inadmissíveis, no processo, as provas obtidas por meios ilícitos" (matriz constitucional).
- **CPP, art. 157, *caput*** — inadmissibilidade e **desentranhamento** das provas ilícitas (obtidas com violação a normas constitucionais ou legais).
- **CPP, art. 157, §1º** — **teoria da prova ilícita por derivação** (frutos da árvore envenenada): são inadmissíveis as provas **derivadas** das ilícitas, **salvo** quando (a) **não evidenciado o nexo de causalidade** entre umas e outras, ou (b) quando as derivadas **puderem ser obtidas por fonte independente** — e traz a **exceção da fonte independente**.
- **CPP, art. 157, §2º** — conceito legal de **fonte independente**: "aquela que por si só, seguindo os trâmites típicos e de praxe, próprios da investigação ou instrução criminal, seria capaz de conduzir ao fato objeto da prova" — redação que a doutrina critica por, na verdade, descrever a **descoberta inevitável**.
- **CPP, art. 157, §3º** — **inutilização** da prova declarada inadmissível, facultado o acompanhamento pelas partes.
- **CPP, art. 157, §5º (Lei 13.964/2019)** — juiz que conhecer da prova declarada inadmissível **não poderá proferir sentença** (regra atrelada ao juiz das garantias; **conferir a eficácia atual** após o julgamento das ADIs 6.298 e correlatas). [NÃO VERIFICADO — confira número e desfecho via `jurisprudencia-stj-stf`.]
- **Doutrina/direito comparado (origem das teses):** *fruit of the poisonous tree* (Silverthorne; Nardone v. US), *independent source*, *inevitable discovery* (Nix v. Williams) e *purged taint / attenuation* (Wong Sun v. US) — **matriz teórica**, a citar como doutrina, não como precedente brasileiro vinculante.

## Passo 1 — Mapear a árvore de contaminação

Antes de qualquer tese, **desenhe a árvore**. Prova ilícita por derivação é um problema de **causalidade em cadeia**: uma raiz ilícita e os galhos (frutos) que dela brotaram.

```
        [PROVA-RAIZ ILÍCITA]  ← o vício originário
         (ex.: busca domiciliar sem mandado / sem justa causa)
                 │
     ┌───────────┼─────────────┐
     ▼           ▼             ▼
 [derivada 1] [derivada 2]  [derivada 3]
  droga        celular        confissão
  apreendida   apreendido     do acusado
     │            │
     ▼            ▼
 [derivada 1.1] [derivada 2.1]
  laudo          mensagens →
  toxicológico   novos alvos → [derivada 2.1.1] busca em 3º
```

Para **cada nó** da árvore, registre em tabela:

| Nó (prova) | É raiz ou fruto? | De qual prova deriva? | Nexo causal (como surgiu)? | Fólio/evento nos autos |
|---|---|---|---|---|
| Busca domiciliar | Raiz ilícita | — | violação do art. 5º, XI, CF | ev. X |
| Droga apreendida | Fruto | da busca | achada **na** busca ilícita | ev. X |
| Confissão | Fruto | da busca | obtida **por causa** da droga achada | ev. Y |
| Mensagens do celular | Fruto | do celular apreendido na busca | extraídas do aparelho ilícito | ev. Z |

**Regra prática:** o ônus de demonstrar o **nexo causal** entre a raiz e cada fruto é da **defesa** (é o que aciona o §1º); o ônus de provar a **exceção** (fonte independente / descoberta inevitável) que **quebra** esse nexo é da **acusação**. Deixe isso explícito na peça — inverter o ônus é erro comum.

## Passo 2 — Provar o nexo causal (o coração da tese)

O art. 157, §1º só contamina o fruto se houver **nexo de causalidade** com a raiz ilícita. Logo, a defesa precisa demonstrar que **sem a prova ilícita, a derivada não teria existido** (teste do *but for* / *conditio sine qua non*):

- **Teste da supressão hipotética:** elimine mentalmente a prova ilícita. A derivada ainda surgiria pelos meios que efetivamente ocorreram nos autos? Se **não** → há nexo → o fruto está contaminado.
- **Cronologia é tudo:** monte a **linha do tempo** (data/hora de cada diligência). A prova derivada tem de ser **posterior** e **causalmente dependente** da ilícita. Se a derivada é anterior ou paralela, o nexo pode não existir (e a acusação usará isso).
- **Documentar a dependência:** mostre nos autos que a diligência derivada **só foi deflagrada porque** a ilícita revelou o dado (ex.: "a autoridade só soube do endereço X porque leu as mensagens do celular apreendido na busca ilícita").

## Passo 3 — Desmontar as TRÊS exceções da acusação

É aqui que os casos são ganhos ou perdidos. A acusação, encurralada no nexo, sempre invoca uma das três. **Antecipe e derrube cada uma.**

### Exceção 1 — Fonte independente (art. 157, §1º, parte final, e §2º)

**Tese da acusação:** a prova derivada teria sido obtida por uma **fonte autônoma, real e já existente**, sem relação com a ilícita.

**Contra-tese da defesa:**
- A fonte independente tem de ser **efetiva e concreta** — uma diligência que **realmente existiu** e correu **em paralelo**, não uma hipótese abstrata. Fonte "que poderia ter havido" é **descoberta inevitável** (exceção 2), não fonte independente. Não deixe a acusação misturar as duas.
- Exija a **prova documental da autonomia**: se a acusação alega que já havia investigação paralela apta a chegar ao mesmo dado, **cadê o procedimento?** Data, número, o que já tinha antes da prova ilícita. Sem lastro documental, a alegação é retórica.
- **Contaminação real:** demonstre que a suposta "fonte independente" **na verdade se alimentou** da ilícita (ex.: a "denúncia anônima paralela" surgiu depois e foi provocada pelo que a busca ilícita revelou).

### Exceção 2 — Descoberta inevitável (*inevitable discovery*)

**Tese da acusação:** ainda que a via ilícita não existisse, a prova **inevitavelmente seria descoberta** pelos trâmites normais da investigação (é o que o art. 157, §2º, mal redigido, na prática descreve).

**Contra-tese da defesa:**
- **Inevitabilidade não é probabilidade.** A acusação precisa demonstrar que a descoberta era **certa**, por linha investigativa **já em curso e independente**, não apenas "provável" ou "possível". Padrão exigido é alto.
- **Juízo hipotético não pode ser retrospectivo e conveniente:** vedado construir *a posteriori* uma cadeia investigativa fictícia que "chegaria lá". Cobre **elementos concretos e pré-existentes** à ilicitude.
- **Distinga da fonte independente:** fonte independente = fonte que **existiu de fato**; descoberta inevitável = fonte que **teria existido**. A acusação frequentemente rotula de "fonte independente" o que é mera "descoberta inevitável" (padrão mais frágil) — force a acusação ao terreno mais exigente.

### Exceção 3 — Limitação da mancha purgada / atenuação (*purged taint / attenuation*)

**Tese da acusação:** entre a prova ilícita e a derivada intercorreu um **fator atenuante** que **purgou** a contaminação (ex.: ato de vontade livre do acusado, decurso do tempo, cadeia causal longa e com eventos independentes).

**Contra-tese da defesa:**
- Questione a alegada **autonomia da vontade**: uma confissão prestada **logo após** e **em razão** da diligência ilícita, sem que o acusado soubesse da ilicitude, **não purga nada** — a vontade estava contaminada pelo cenário criado pela prova ilícita.
- **Proximidade temporal e causal** milita **contra** a purgação: quanto mais próximo e mais direto o fruto, menos plausível a atenuação.
- Exija a **identificação concreta do fator atenuante independente** — a acusação tem de apontar **qual** evento interveniente teria rompido a cadeia; alegação genérica de "atenuação" não serve.

> **Síntese das três (memorizar):** **fonte independente** = a prova veio de outra fonte **que existiu**; **descoberta inevitável** = a prova viria de fonte **que teria existido**; **mancha purgada** = a cadeia causal **se rompeu** por fator interveniente. A defesa vence mostrando que **nenhuma** delas se sustenta no caso concreto — e que, no rótulo, a acusação vende descoberta inevitável (frágil) como fonte independente (mais forte).

## Passo 4 — Pedir o desentranhamento e a inutilização

Identificada a raiz e contaminados os frutos, o pedido é duplo (art. 157, *caput* e §3º):

1. **Desentranhamento** — retirada física/lógica da prova ilícita **e das derivadas** dos autos, para que **não sejam valoradas** (nem fundamentem recebimento de denúncia, decreto de prisão, pronúncia ou sentença).
2. **Inutilização** — destruição da prova (art. 157, §3º), facultado o acompanhamento pelas partes, no momento processual próprio.

**Momentos para suscitar:** resposta à acusação (art. 396-A CPP), memoriais, questão de ordem em audiência, HC (quando a ilicitude é aferível de plano — *habeas corpus* é via idônea para trancar ação penal fundada exclusivamente em prova ilícita), RESE/apelação, e — no júri — **antes da pronúncia** (prova ilícita não pode lastrear a pronúncia nem ir a plenário).

## Roteiro de teses (defesa) e contra-teses (acusação)

**Teses defensivas (o arsenal):**
1. **Ilicitude da raiz** — apontar o vício originário concreto (delegar o vício específico à skill própria: `impugnacao-cadeia-custodia`, `impugnacao-interceptacao-sigilo`, busca/prisão ilegal, interrogatório sem direitos etc.).
2. **Nexo causal comprovado** — pelo teste da supressão hipotética e da cronologia (Passo 2).
3. **Derrubada das três exceções** — fonte independente não é concreta; descoberta inevitável não é inevitável; mancha não foi purgada (Passo 3).
4. **Contaminação da sentença/pronúncia** — se a decisão se apoiou, ainda que em parte, na prova ilícita, é nula; sobrando prova lícita autônoma e suficiente, discutir aproveitamento (ver "erros comuns").
5. **Prova ilícita *pro reo*** — a inadmissibilidade protege o acusado; prova ilícita **em favor da defesa** é admitida pela doutrina majoritária (não se usa a garantia contra quem ela protege).

**Contra-teses típicas da acusação (esteja pronto):**
- Nexo causal inexistente ou "atenuado".
- Fonte independente (real) / descoberta inevitável / mancha purgada.
- Prova derivada obtida também por via lícita autônoma suficiente (independência dos fundamentos).
- Boa-fé da autoridade / relativização (importada do direito comparado — **tese frágil e controversa no Brasil**; a defesa deve repelir a "exceção da boa-fé" como estranha ao sistema constitucional brasileiro do art. 5º, LVI).

## Súmulas, precedentes e teses (sob o Citation Gate)

> **Citation Gate (inegociável):** os **dispositivos de lei** acima (CPP art. 157 e §§; CF art. 5º, LVI) podem ser citados livremente. **Qualquer precedente numérico** (HC, RE, REsp, informativo, tema de repercussão geral/recursos repetitivos) **só entra na peça após conferência** pela skill `jurisprudencia-stj-stf`. Abaixo vão apenas **teses consolidadas** e balizas — **sem** arriscar números de acórdão.

- **Teoria dos frutos da árvore envenenada é acolhida pelo STF** e positivada no art. 157, §1º (Lei 11.690/2008) — tese pacífica; **o número do leading case histórico deve ser confirmado** via `jurisprudencia-stj-stf` antes de citar. [NÃO VERIFICADO]
- **Ingresso domiciliar sem mandado** exige **fundadas razões** (justa causa) aferíveis *a posteriori*, sob pena de ilicitude da prova e de tudo o que dela derivar — há **tese fixada em repercussão geral** pelo STF nesse sentido; **confira o número do tema e do RE** via `jurisprudencia-stj-stf`. [NÃO VERIFICADO]
- **Acesso a dados de celular apreendido sem autorização judicial** gera ilicitude — orientação do STJ/STF; **confira o precedente** antes de citar. [NÃO VERIFICADO]
- **Denúncia anônima** não autoriza, por si só, medida invasiva; se a diligência nasceu **só** da notícia anônima e produziu a prova, discutir a ilicitude derivada — **confira as balizas jurisprudenciais** via `jurisprudencia-stj-stf`. [NÃO VERIFICADO]
- **Independência dos fundamentos:** havendo prova **lícita autônoma e suficiente**, a nulidade da ilícita pode não anular a condenação — tese que a **acusação** usa; a defesa a enfrenta demonstrando que a prova ilícita **influiu** no resultado. **Confirme o estado atual** da orientação. [NÃO VERIFICADO]

**Regra de ouro:** prefira **ensinar a tese e ancorar no dispositivo** a arriscar um número de acórdão. Precedente inventado por IA gera **sanção real** (o CriminalSquad tem gate próprio para isso).

## Erros comuns e checklist final

**Erros comuns (evitar):**
- Atacar só a prova-raiz e **esquecer de mapear e contaminar os frutos** (perde-se o §1º).
- **Não desenhar a árvore** nem a linha do tempo — sem cronologia, o nexo causal fica no plano da alegação.
- Deixar a acusação **rotular descoberta inevitável como fonte independente** (padrão mais fácil), sem forçá-la ao terreno mais exigente.
- Aceitar **fonte independente hipotética** (sem procedimento documentado e paralelo real).
- Confundir **fonte independente** (existiu) com **descoberta inevitável** (teria existido) — são exceções distintas, com ônus e padrões distintos.
- Tolerar a **"exceção da boa-fé"** como se fosse tese consolidada no Brasil — é importada e controversa; repila.
- Inverter o ônus: exigir que a **defesa** prove a inexistência da fonte independente (o ônus da **exceção** é da **acusação**).
- Citar precedente **de memória**, sem passar por `jurisprudencia-stj-stf` (risco de julgado inexistente).
- Esquecer de pedir, além do **desentranhamento**, a **inutilização** (art. 157, §3º) e de suscitar a contaminação da **sentença/pronúncia**.

**Checklist final:**
- [ ] Árvore de contaminação desenhada, com **raiz** e **cada fruto** identificados?
- [ ] Tabela nó a nó (deriva de quê / nexo / fólio) montada?
- [ ] **Linha do tempo** das diligências (a derivada é posterior e dependente da ilícita)?
- [ ] **Teste da supressão hipotética** aplicado a cada fruto?
- [ ] **Vício da raiz** ancorado (com delegação à skill do vício específico)?
- [ ] As **três exceções** antecipadas e derrubadas uma a uma (fonte independente / descoberta inevitável / mancha purgada)?
- [ ] Ônus corretamente distribuído (nexo = defesa; exceção = acusação)?
- [ ] Pedido de **desentranhamento** E de **inutilização** (art. 157, *caput* e §3º)?
- [ ] Contaminação da **sentença/pronúncia/prisão** suscitada, se for o caso?
- [ ] **Redação vigente** do art. 157 (Lei 11.690/2008; situação do §5º) conferida na fonte oficial?
- [ ] **Todo** precedente numérico passou pela skill `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio metodológico à construção da tese de prova ilícita por derivação; **não substitui** o juízo do profissional nem a leitura dos autos concretos. A responsabilidade pela peça e pelas alegações é sempre do **advogado** (CED/OAB; **Provimento 205/2021** quanto à atuação e à comunicação). No Ministério Público, observar o **CNMP**; na Defensoria, a **LC 80/94**.
- **Citation Gate:** dispositivos de lei livres; **nenhuma** súmula/tese/acórdão citado de memória — tudo pela `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.
- **Sigilo e LGPD:** dados do assistido/cliente jamais em repositório público; peças com dados sensíveis fora do versionamento aberto.

**Padrão de redação:** ao converter a análise em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
