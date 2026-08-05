---
name: juri-quesitacao
description: >-
  Use ao elaborar, conferir, impugnar ou estudar os QUESITOS do Tribunal do Júri (2ª fase /
  plenário) — a formulação, a ordem de votação e a impugnação dos quesitos submetidos ao Conselho de
  Sentença. Gatilhos: quesitos, quesitação, questionário do júri, ordem dos quesitos, quesito
  genérico de absolvição, impugnação de quesitos, nulidade por quesitação…. Não use para decisão
  final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-quesitacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-quesitacao", "juri quesitacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Quesitação do Tribunal do Júri (arts. 482-491 CPP)

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

Esta skill orienta a **formulação, a ordem de votação e a impugnação dos quesitos** submetidos ao Conselho de Sentença na 2ª fase do júri. A quesitação é o momento em que a decisão dos jurados se traduz em respostas a perguntas objetivas — e onde **erros de formulação ou de ordem geram nulidade**.

> **O que é o quesito.** Quesito é a **pergunta** que o juiz-presidente formula ao Conselho de Sentença, a ser respondida por **sim** ou **não**, em **votação na sala secreta** (art. 485 CPP). O conjunto de quesitos é o **questionário**. As respostas, somadas, formam o **veredicto** soberano.

> **Base na decisão de pronúncia + debates.** Os quesitos derivam da **pronúncia** (que delimita a imputação que vai a júri), da **denúncia** e do que foi **efetivamente debatido** em plenário (art. 482, parágrafo único: a redação dos quesitos toma por base a pronúncia, o interrogatório e as alegações das partes). **Tese sustentada em plenário deve virar quesito** — não quesitar tese defensiva é causa de nulidade.

---

## 🔢 A ORDEM DOS QUESITOS — art. 483 CPP (decorar)

A ordem é **legal e cogente**. Inverter a ordem é nulidade. Sequência do art. 483:

```
1º  MATERIALIDADE do fato            (art. 483, I)
2º  AUTORIA ou PARTICIPAÇÃO          (art. 483, II)
3º  "O JURADO ABSOLVE O ACUSADO?"    (art. 483, III + §2º)  ← QUESITO GENÉRICO
4º  CAUSA DE DIMINUIÇÃO de pena alegada pela defesa  (art. 483, IV)
5º  QUALIFICADORA ou CAUSA DE AUMENTO de pena        (art. 483, V)
```

> **Regra de afunilamento (art. 483, §1º).** A resposta **negativa**, de mais de 3 jurados, a qualquer dos quesitos de **materialidade (1º)** ou **autoria (2º)** **encerra a votação** e implica a **ABSOLVIÇÃO** do acusado. Ou seja: se os jurados disserem "não" à materialidade ou "não" à autoria, não se passa aos quesitos seguintes — o réu está absolvido.

> **O quesito genérico de absolvição (3º) — art. 483, §2º.** Respondidos afirmativamente (por mais de 3 jurados) os quesitos de **materialidade e autoria**, será formulado quesito **obrigatório** com a redação:
>
> **"O jurado absolve o acusado?"**
>
> - É **genérico**: não menciona a tese específica. Permite ao jurado absolver por **qualquer fundamento** — excludente, dúvida, ou **clemência/íntima convicção** —, sem precisar declarar o motivo.
> - É **obrigatório** sempre que superados materialidade e autoria, **independentemente da tese** sustentada pela defesa (a defesa pode até ter sustentado só desclassificação — o quesito do §2º ainda é formulado).
> - Resposta **SIM** (mais de 3 jurados) → **absolvição**, encerrando a votação. Resposta **NÃO** → segue-se aos quesitos de diminuição e qualificadoras.

> **Quesito de desclassificação.** Quando há tese de desclassificação (afastar o crime doloso contra a vida), o quesito correspondente é formulado **após materialidade e autoria** (em regra logo após o 2º, antes/junto da lógica do genérico, conforme a técnica de cada tribunal), porque, **reconhecida a desclassificação própria, a competência passa ao juiz-presidente** (art. 492, §1º) e cessa a competência do Conselho quanto ao mais. **Confirme a técnica de inserção do quesito desclassificatório adotada no tribunal de atuação** — é ponto sensível e de divergência prática.

> **Tentativa e divergência de tipificação — art. 483, §5º.** Sustentada a tentativa (ou sendo a imputação de tentativa), ela é objeto de quesito próprio (a não consumação por circunstâncias alheias à vontade — art. 14, II, CP). O **§5º** é a âncora que falta na maioria das quesitações: ele cobre **duas** hipóteses — a **forma tentada** e a **divergência sobre a tipificação do delito quando este continua sendo da competência do júri** — e manda que o quesito seja respondido **após o segundo quesito**. Não confunda com o **§4º**, que trata da desclassificação para crime de competência do **juiz singular** e admite o quesito após o 2º **ou** o 3º, "conforme o caso". A pergunta que separa os dois: depois de acolhida a tese, **quem julga?** Se continua o Conselho, é §5º; se sai do júri, é §4º.

> **Crime conexo — art. 492, §2º.** Reconhecida a desclassificação, o crime conexo que não seja doloso contra a vida **também** é julgado pelo juiz-presidente. É dispositivo próprio: o §1º cuida da desclassificação em si, o §2º do destino do conexo. Invocar o §1º para o conexo é erro de remissão que aparece na peça e não passa por uma leitura atenta do MP.

---

## 🛠️ Regras de formulação — arts. 482, 484, 486-487 CPP

- **Proposições afirmativas, simples e distintas** (art. 482, parágrafo único). Cada quesito versa **um fato** — vedado o quesito **complexo** (que reúne mais de uma indagação numa só pergunta), porque induz resposta e impede o jurado de discriminar.
- **Linguagem acessível ao leigo.** Quesito deve ser compreensível ao jurado comum; tecnicismo que confunde é vício.
- **Esclarecimento prévio (art. 484).** Encerrados os debates, o juiz-presidente **lê os quesitos** e indaga às partes se têm **requerimento ou reclamação** quanto a eles — **este é o momento de impugnar** (ver adiante). Pode esclarecer aos jurados o significado de cada quesito e as consequências das respostas.
- **Votação (art. 486-487).** Cada quesito é votado **separadamente**, na sala secreta, com cédulas "sim"/"não"; apurados os votos, **a maioria** (mais de 3 dos 7) decide — e, atingida a maioria, **não se prossegue na contagem** (preserva o sigilo do voto).
- **Materialidade desdobrada.** Quando útil, a materialidade pode desdobrar-se (existência do fato; nexo causal/resultado morte) em quesitos distintos, sempre simples.

---

## ⚔️ Impugnação de quesitos — o momento e a técnica

> **O momento é o art. 484.** A impugnação se faz **ao ser lido o questionário, antes da votação**, mediante **requerimento/reclamação consignados em ATA**. Quesito aceito sem impugnação no momento próprio pode gerar **preclusão** — por isso o registro em ata é indispensável.

### O que a defesa fiscaliza ao ler o questionário
1. **A tese defensiva sustentada em plenário foi quesitada?** Toda tese debatida deve ter quesito. Omissão de quesito de tese é nulidade.
2. **A ordem do art. 483 foi respeitada?** Materialidade → autoria → genérico de absolvição → diminuição → qualificadora/aumento.
3. **O quesito genérico de absolvição (§2º) está presente** após materialidade e autoria?
4. **Há quesito complexo** (mais de uma pergunta numa só)? Pedir desdobramento.
5. **A redação é afirmativa, simples e clara** ao leigo? Sem termos que induzam o voto.
6. **Causas de diminuição alegadas pela defesa** (ex.: privilégio do art. 121, §1º; tentativa; participação de menor importância) foram incluídas como quesito (art. 483, IV)?
7. **Qualificadoras/aumentos** estão **após** o genérico de absolvição (não antes)?
8. **Quesitos correspondem à pronúncia** (congruência) — nada além do que foi pronunciado?

### Como impugnar (técnica)
- Formular **requerimento oral fundamentado** no momento do art. 484, pedindo a **inclusão**, **exclusão**, **desdobramento** ou **reformulação** do quesito.
- **Exigir a consignação em ata** do requerimento **e** da decisão do juiz-presidente (deferimento/indeferimento) — o registro é pressuposto da futura **apelação por nulidade (art. 593, III, "a")**.
- Indeferida a impugnação, **protesto** consignado em ata, mantendo a matéria viva para o recurso.

---

## ❌ Nulidades por quesitação defeituosa

| Vício | Descrição | Consequência |
|---|---|---|
| **Inversão da ordem** | Não seguir a sequência do art. 483 (ex.: qualificadora antes do genérico de absolvição) | Nulidade |
| **Omissão de quesito de tese** | Tese sustentada em plenário não foi quesitada | Nulidade (cerceamento da plenitude de defesa) |
| **Ausência do quesito genérico (§2º)** | Não formular "O jurado absolve o acusado?" após materialidade e autoria | Nulidade |
| **Quesito complexo** | Reunir mais de uma indagação numa só pergunta | Nulidade (induz resposta) |
| **Redação obscura/indutora** | Quesito incompreensível ou que sugere a resposta ao leigo | Nulidade |
| **Quesito além da pronúncia** | Quesitar fato/qualificadora não admitido na pronúncia | Nulidade (incongruência) |
| **Contradição nas respostas** | Respostas logicamente incompatíveis entre si | Art. 490 (ver abaixo) |

> **Contradição nas respostas — art. 490 CPP.** Se houver **contradição entre as respostas**, o juiz-presidente **explica aos jurados** o ponto e **submete novamente** à votação os quesitos contraditórios (art. 490, *caput*). Persistindo a incompatibilidade lógica, há nulidade. A defesa deve **apontar a contradição na hora** e exigir consignação.

> **Nulidade relativa x absoluta.** Boa parte dos vícios de quesitação reclama **impugnação no momento próprio (art. 484)** e demonstração de **prejuízo** (art. 563 CPP — *pas de nullité sans grief*); a omissão tempestiva pode **precluir**. Por isso a regra de ouro: **impugnar e consignar em ata sempre.** **Confirme, caso a caso e na jurisprudência atual (STJ/STF), se o vício concreto é tido por absoluto ou relativo** — passe pelo gate de `verificacao-citacoes`.

---

## 🎯 Estratégia defensiva na formulação dos quesitos

- **Garantir o quesito genérico de absolvição (§2º):** é a porta da clemência e da íntima convicção. Mesmo com tese jurídica clássica, ele amplia as chances de absolvição.
- **Provocar o desdobramento** de quesitos complexos: cada pergunta isolada dá ao jurado a chance de responder favoravelmente a um ponto sem se comprometer com o todo.
- **Incluir todas as causas de diminuição** alegadas (art. 483, IV) — privilégio (art. 121, §1º), participação de menor importância, semi-imputabilidade — pois reduzem pena mesmo em caso de condenação. ⚠️ **A tentativa não entra sob o inciso IV:** embora seja causa de diminuição no plano material (CP, art. 14, p.ú.), o CPP lhe deu **posição própria** — quesito respondido **após o 2º** (art. 483, §5º), portanto **antes** do genérico de absolvição. Quesitá-la no bloco do inciso IV a joga para depois do 3º quesito e inverte a ordem cogente.
- **Atacar qualificadoras** como quesitos autônomos (art. 483, V): a resposta "não" a uma qualificadora reduz a pena-base de partida do juiz-presidente.
- **Cuidar da ordem:** assegurar que materialidade e autoria venham primeiro (a negativa encerra em absolvição, art. 483, §1º) e que qualificadoras fiquem por último.
- **Vincular cada tese debatida a um quesito:** ao sustentar em plenário (skill `juri-plenario-debates`), já planejar como aquela tese se converterá em pergunta.

---

## 📐 MODELO — quesitos comentados (homicídio, ilustrativo)

> Exemplo **didático** para fixar a lógica — a redação real é do **juiz-presidente** e depende da pronúncia e dos debates do caso. Adaptar sempre; toda referência normativa passa por `verificacao-citacoes`.

```
QUESTIONÁRIO — Réu: [NOME] | Imputação: homicídio (art. 121, CP) | Sessão: [data]

1º QUESITO — MATERIALIDADE (art. 483, I)
   "No dia [...], no local [...], a vítima [NOME] sofreu os ferimentos
    descritos no laudo de fl./ev. [...], que foram a causa de sua morte?"
   → Mais de 3 votos NÃO = ABSOLVE e encerra (art. 483, §1º).

2º QUESITO — AUTORIA (art. 483, II)
   "O acusado [NOME], no dia e local referidos, produziu tais ferimentos
    na vítima?"
   → Mais de 3 votos NÃO = ABSOLVE e encerra (art. 483, §1º).

[Se houver TESE DE DESCLASSIFICAÇÃO sustentada — quesito próprio, após autoria:]
   "O acusado quis apenas lesionar a vítima?"   (afastamento do animus necandi,
                                                 em proposição AFIRMATIVA)
   → SIM (mais de 3) → desclassificação: competência passa ao
     juiz-presidente (art. 492, §1º).  [Confirmar a técnica de inserção
     adotada no tribunal.]

   ⚠️ NÃO redija "O acusado agiu SEM a intenção de matar?". A fórmula negativa é
   corrente na praxe, mas colide com o art. 482, parágrafo único, que este mesmo
   documento exige quatro vezes — e um jurado que queira negar o dolo tem de
   votar "sim" a uma negativa, o que embaralha o voto. Se o juízo insistir na
   forma negativa, requeira a afirmativa e registre em ata (art. 484).

   Esta linha já foi um defeito real: a versão anterior deste modelo trazia a
   fórmula negativa, um squad gerado a copiou, e a auditoria pegou o quesito
   "O acusado agiu sem a intenção de matar, tendo querido apenas lesionar?" —
   negativo E com dois fatos. O exemplo que o documento oferece é o que o modelo
   reproduz; exemplo errado vira quesito errado no plenário.

3º QUESITO — GENÉRICO DE ABSOLVIÇÃO (art. 483, III e §2º) — OBRIGATÓRIO
   "O jurado absolve o acusado?"
   → Mais de 3 votos SIM = ABSOLVE e encerra a votação.
   → NÃO → prossegue.

4º QUESITO — CAUSA DE DIMINUIÇÃO alegada pela defesa (art. 483, IV)
   [Ex.: privilégio — art. 121, §1º. Quesitar SOMENTE a hipótese
    efetivamente sustentada em plenário, UMA POR QUESITO:]
   "O acusado cometeu o crime impelido por motivo de relevante valor social?"
   [ou] "O acusado cometeu o crime impelido por motivo de relevante valor moral?"
   [ou] "O acusado cometeu o crime sob o domínio de violenta emoção, logo em
    seguida a injusta provocação da vítima?"
   → SIM → incide a redução de pena.
   [Um quesito para CADA causa de diminuição alegada, separadamente.]

   ⚠️ NÃO reúna as três hipóteses do art. 121, §1º numa só pergunta ligada por
   "ou". São fatos autônomos, com prova distinta: é o quesito complexo que a
   tabela de nulidades deste documento classifica como vício, e que o art. 482,
   parágrafo único, veda ao exigir proposições "simples e distintas". Há um
   prejuízo concreto além da forma: na fórmula disjuntiva, 3 jurados que
   reconheçam o valor moral somados a 3 que reconheçam a violenta emoção
   produzem 6 "sim" a um privilégio que nenhuma das hipóteses teria
   isoladamente — veredito sem base fática majoritária. Se o questionário vier
   assim, requeira o desdobramento no momento do art. 484 e consigne em ata.

5º QUESITO — QUALIFICADORA / CAUSA DE AUMENTO (art. 483, V)
   [Ex.: meio cruel — art. 121, §2º, III:]
   "O crime foi praticado com emprego de [meio cruel descrito]?"
   → SIM → reconhece a qualificadora.
   [Um quesito para CADA qualificadora/aumento, separadamente.]
```

---

## ✅ Checklist de impugnação de quesitos (DEFESA)

- [ ] **Tese(s) defensiva(s) sustentada(s) em plenário** foram **todas quesitadas**?
- [ ] **Ordem do art. 483** respeitada (materialidade → autoria → genérico → diminuição → qualificadora)?
- [ ] **Quesito genérico de absolvição** ("O jurado absolve o acusado?", §2º) presente após materialidade e autoria?
- [ ] **Nenhum quesito complexo** (mais de uma indagação numa só) — pedir desdobramento se houver?
- [ ] **Redação afirmativa, simples e clara** ao leigo — sem indução?
- [ ] **Congruência com a pronúncia** — nenhum quesito além do pronunciado?
- [ ] **Causas de diminuição** da defesa incluídas (art. 483, IV)?
- [ ] **Qualificadoras/aumentos** quesitados **separadamente** e **após** o genérico (art. 483, V)?
- [ ] **Tentativa / desclassificação** corretamente posicionadas, se sustentadas?
- [ ] **Requerimento e decisão consignados em ATA** (art. 484) — inclusão/exclusão/desdobramento/reformulação?
- [ ] **Protesto registrado** em caso de indeferimento (para apelação — art. 593, III, "a")?
- [ ] **Contradição nas respostas** monitorada (art. 490) — apontada e consignada na hora?
- [ ] **Citações verificadas** (gate `verificacao-citacoes`) e **revisão humana** do advogado responsável?

---

## ⚠️ Cautelas e diretriz anti-alucinação

- **Confira a redação vigente dos arts. 482 a 491 CPP.** A sistemática atual da quesitação — em especial a **inversão histórica** que colocou o **quesito genérico de absolvição** logo após materialidade e autoria — decorre da **Lei 11.689/2008**, que reescreveu o procedimento do júri. Citar a quesitação **anterior** a 2008 (com quesitos sobre cada excludente, na velha ordem) é **erro grave de vigência**. **Antes de afirmar a ordem ou a redação de qualquer quesito, confirme o texto atual na fonte oficial.**
- **Toda lei, súmula, tese ou acórdão** (ex.: jurisprudência do STJ/STF sobre nulidade por quesitação, sobre o alcance do quesito do §2º, sobre quesito complexo) passa **obrigatoriamente** pelo gate de `verificacao-citacoes` antes de uso. Na dúvida, **omitir vence inventar**.
- **Revisão humana obrigatória.** A responsabilidade pela atuação e pelas impugnações é sempre do **advogado** (CED, art. 2º). Este material é apoio à preparação, não substitui o juízo profissional nem a leitura do questionário concreto em plenário.

---

## Lembretes finais

- **Quesito = pergunta sim/não** ao Conselho; conjunto = **questionário**; respostas = **veredicto** soberano.
- **Ordem cogente (art. 483):** materialidade → autoria → **"O jurado absolve o acusado?"** → diminuição → qualificadora/aumento.
- **Afunilamento (§1º):** "não" à materialidade **ou** à autoria (mais de 3 votos) → **absolve e encerra**.
- **Quesito genérico de absolvição (§2º):** **obrigatório** após materialidade e autoria; absolve por **qualquer** fundamento (inclusive clemência).
- **Desclassificação própria** → competência ao **juiz-presidente** (art. 492, §1º).
- **Formulação:** afirmativa, **simples**, clara ao leigo; **vedado quesito complexo**.
- **Impugnação no momento do art. 484**, antes da votação, **consignada em ata** — sob pena de preclusão.
- **Nulidades típicas:** inversão de ordem, omissão de tese, ausência do §2º, quesito complexo, incongruência com a pronúncia.
- **Contradição nas respostas → art. 490** (reexplicar e revotar).
- **Ata é munição de apelação** (art. 593, III, "a"). Registre tudo.
- **Sempre adaptar ao caso concreto** — o quesito decorre da pronúncia e dos debates, não de fórmula pronta.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
