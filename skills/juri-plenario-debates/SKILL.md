---
name: juri-plenario-debates
description: >-
  Use ao preparar, estruturar ou roteirizar a atuação da DEFESA em PLENÁRIO na 2ª fase do Tribunal
  do Júri (judicium causae) — construção da tese de defesa (negativa de autoria, legítima defesa,
  desclassificação, clemência/absolvição), roteiro de debates, técnica de oralidade e manejo de
  provas em plenário. Gatilhos: plenário do júri, debates, tese de defesa, plenitude de defesa,
  debate oral, sustentação no júri, art. 477 CPP… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-plenario-debates"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-plenario-debates", "juri plenario", "plenario debates"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Júri em Plenário — Preparação dos Debates pela Defesa

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

Esta skill orienta a **preparação da atuação da DEFESA na 2ª fase do Tribunal do Júri** — o *judicium causae*, o julgamento em plenário perante o Conselho de Sentença. Não é uma peça escrita protocolada: é um **roteiro de atuação oral** (com apoio escrito) para a sessão de julgamento.

> **Premissa estrutural.** O procedimento do júri é **bifásico**: 1ª fase (*judicium accusationis*, encerrada por pronúncia, impronúncia, absolvição sumária ou desclassificação) e 2ª fase (*judicium causae*, o plenário). Esta skill cobre a **2ª fase**. Sobreveio **pronúncia** transitada/preclusa → o réu vai a plenário, e é aqui que a defesa atua.

> **Princípio reitor — PLENITUDE DE DEFESA** (art. 5º, XXXVIII, "a", CF). No júri não vigora a "ampla defesa" comum: vigora a **plenitude de defesa**, mais larga. Permite à defesa, além de argumentos estritamente jurídicos, **argumentos extrajurídicos** — emocionais, sociais, morais, de clemência, de política criminal, de equidade. O jurado leigo decide por **íntima convicção** (não fundamenta o voto); por isso a defesa fala à razão **e** ao sentimento do julgador. Isso é próprio e exclusivo do júri.

---

## ⚖️ As quatro grandes linhas de tese defensiva em plenário

Identifique cedo qual(is) tese(s) a defesa sustentará. Em regra escolhe-se **uma tese principal** e teses subsidiárias (eventualidade), mas o júri tolera apresentação cumulada quando coerente.

| Tese | Natureza | Pedido ao Conselho | Quesito decisivo |
|---|---|---|---|
| **Negativa de autoria** | Fática | Absolver: o réu não foi o autor | Quesito de **autoria/participação** (resposta NÃO) |
| **Legítima defesa** (e demais excludentes) | Jurídica (excludente de ilicitude/culpabilidade) | Absolver: o fato é lícito ou o réu é isento | Quesito **genérico de absolvição** (art. 483, §2º) |
| **Desclassificação** | Jurídica (típica) | Afastar o dolo de matar → crime diverso, fora da competência do júri | Quesito de desclassificação (após materialidade/autoria) |
| **Clemência / absolvição genérica** | Extrajurídica (plenitude) | Absolver por convicção, ainda que sem excludente clássica | Quesito **genérico de absolvição** (art. 483, §2º) |

> **A tese da clemência e o quesito genérico.** Após a Lei 11.689/2008, há um **quesito obrigatório e genérico**: *"O jurado absolve o acusado?"* (art. 483, §2º, CPP). Ele permite a absolvição por **qualquer fundamento**, inclusive **clemência / por convicção íntima**, mesmo sem tese jurídica clássica. É a expressão máxima da plenitude de defesa e da soberania dos veredictos — a defesa pode, legitimamente, **pedir a absolvição apelando à consciência do jurado**. (A formulação detalhada dos quesitos é tema da skill `juri-quesitacao`.)

### Negativa de autoria
Ataca o elo **réu ↔ fato**. Trabalha contradições de reconhecimento, fragilidade da prova de autoria, álibi, ausência de prova técnica vinculante. Em plenário, é a tese de maior apelo quando a prova de autoria é frágil — e dialoga com a futura apelação pela alínea "d" (decisão manifestamente contrária à prova).

### Legítima defesa (art. 25 CP) e demais excludentes
Excludente de ilicitude por excelência no júri (homicídios em contexto de agressão). Requisitos a demonstrar ao jurado em linguagem simples: **agressão injusta, atual ou iminente; uso moderado dos meios necessários; defesa de direito próprio ou alheio.** Vizinhas: estado de necessidade (art. 24 CP), estrito cumprimento de dever legal e exercício regular de direito; e excludentes de culpabilidade (inimputabilidade, coação moral irresistível, erro). Todas levam ao **quesito genérico de absolvição**.

### Desclassificação
Pede ao Conselho que reconheça **crime diverso** do doloso contra a vida (ex.: homicídio doloso → lesão corporal seguida de morte / homicídio culposo; afastamento do *animus necandi*). Provida a desclassificação **própria**, a competência desloca-se para o **juiz-presidente**, que julga o crime remanescente (art. 492, §1º, CPP). Atenção à distinção desclassificação **própria** (jurados não dizem qual o crime) x **imprópria**.

---

## 🕐 Tempo dos debates — art. 477 CPP (decorar)

| Situação | Acusação | Defesa | Réplica / Tréplica |
|---|---|---|---|
| **1 réu, 1 acusador** | 1h30 | 1h30 | 1h (réplica) + 1h (tréplica) |
| **Mais de um acusado** (ou mais de um acusador) | 2h30 | 2h30 | 2h (réplica) + 2h (tréplica) |

- **Ordem da palavra (art. 476):** primeiro a **acusação** (MP/assistente/querelante); depois a **defesa**. Havendo réplica da acusação, abre-se a **tréplica** à defesa — **a defesa tem sempre a última palavra**.
- **A réplica é facultativa para a acusação**, mas se usada, **garante a tréplica** à defesa pelo mesmo tempo. Estratégia clássica: a defesa **provoca** ou **explora** a tréplica para falar por último.
- Havendo **mais de um réu**, o tempo é dividido entre os defensores, salvo acordo (art. 477, §2º).
- O tempo de réplica/tréplica **não se soma** ao da sustentação principal — é prazo autônomo.

> **Inovar tese na tréplica?** Tema controvertido. Há posição que admite a defesa inovar na tréplica (plenitude de defesa); há posição que veda surpresa à acusação que não poderá rebater. **Confira o entendimento atual do tribunal de atuação e o estado da jurisprudência (STJ/STF) antes de planejar a tréplica como espaço de tese nova** — passe pelo gate de `verificacao-citacoes`.

---

## 🚫 Vedações e provas em plenário — arts. 478 e 479 CPP

### Art. 478 — o que NÃO pode ser usado como argumento de autoridade
Sob pena de **nulidade**, as partes **não podem** fazer referência, em prejuízo ou benefício indevido:
- **I —** à **decisão de pronúncia** (e decisões posteriores que julgaram admissível a acusação) ou às **decisões de algemas** como argumento de autoridade que beneficie/prejudique o acusado;
- **II —** ao **silêncio do acusado** ou à ausência de interrogatório por falta de requerimento, em seu prejuízo.

> **Uso defensivo:** se a acusação invocar a pronúncia como "atestado de culpa" perante os jurados, **registre o protesto** (consignação em ata) — pode gerar nulidade. O mesmo quanto a explorar o silêncio do réu.

### Art. 479 — documentos e mídias: a regra dos 3 DIAS
Durante o julgamento **não se permitirá a leitura de documento ou a exibição de objeto** que **não tiver sido juntado aos autos com antecedência mínima de 3 (três) dias úteis**, dando-se ciência à outra parte (art. 479, *caput* e parágrafo único). Abrange **documento, fotografia, vídeo, gravação, mídia, jornal, laudo**.

> **Dupla função:** (1) **escudo** — impugnar/protestar contra documento-surpresa da acusação exibido em plenário sem os 3 dias; (2) **arma** — a defesa que pretende usar prova nova em plenário **deve juntá-la com 3 dias úteis de antecedência** e dar ciência ao MP, sob pena de não poder exibi-la. Planeje a juntada com folga.

---

## 🗺️ Roteiro de preparação dos debates (DEFESA) — passo a passo

### 1. Diagnóstico do caso e escolha da tese
- Reler **pronúncia** (delimita o que vai a julgamento — congruência), denúncia, laudos, depoimentos e o interrogatório.
- Mapear pontos fortes/fracos da prova de **autoria** e de **materialidade**.
- Definir **tese principal** + **subsidiárias** (eventualidade): ex.: *negativa de autoria* (principal) → *legítima defesa* → *desclassificação* → *clemência* → *minorantes/afastamento de qualificadoras* (se condenar).
- Antecipar a **linha da acusação** e os pontos que o MP explorará.

### 2. Antecipação da acusação (defesa preventiva)
- Listar os **3 a 5 argumentos mais fortes do MP** e preparar resposta para cada.
- Preparar resposta à **provável tese da acusação** sobre qualificadoras (ex.: motivo torpe, meio cruel, recurso que dificultou a defesa da vítima — art. 121, §2º, CP) — porque elas viram **quesitos**.
- Decidir se vale **abrir mão de rebater** algo (não dar palco) ou enfrentar de frente.

### 3. Estrutura da sustentação oral (tese principal)
```
A. SAUDAÇÃO E CONEXÃO — cumprimentar o Conselho, o juiz-presidente, o MP;
   criar empatia com os jurados (linguagem simples, respeitosa).
B. PROMESSA / TESE EM UMA FRASE — dizer, logo no início, o que se vai provar
   ("ao final, V. Exas. estarão convencidos de que [tese]").
C. NARRATIVA DOS FATOS pela ótica da defesa — contar a história de forma
   humana, cronológica, concreta; o jurado decide por história, não por artigo.
D. ANCORAGEM NA PROVA — amarrar a narrativa a provas dos autos
   (depoimentos, laudo, contradições da acusação). Mostrar, não só afirmar.
E. ENFRENTAMENTO DA ACUSAÇÃO — desmontar os pontos fortes do MP
   (antecipação do item 2).
F. DIMENSÃO HUMANA / PLENITUDE — quando cabível, o apelo legítimo à
   clemência, ao contexto, à dúvida razoável, à consciência do jurado.
G. PEDIDO CLARO E A LIGAÇÃO COM O QUESITO — dizer exatamente como o
   jurado deve votar ("ao quesito 'o jurado absolve o acusado?', votem SIM").
H. FECHO FORTE — frase memorável que sintetiza a tese.
```

### 4. Roteiro de réplica/tréplica
- A defesa **fala por último** (tréplica). Reserve munição: não esgote tudo na sustentação principal.
- Anotar, durante a réplica do MP, **cada ponto a rebater** → responder em bloco, do mais forte ao mais fraco.
- Encerrar a tréplica **retornando ao pedido e ao quesito** ("votem SIM ao quesito da absolvição").

### 5. Material de apoio e logística
- **Quesitos:** antecipar a redação provável e preparar impugnações (ver skill `juri-quesitacao`).
- **Provas a exibir:** conferir juntada com **3 dias úteis** (art. 479).
- **Ata:** preparar requerimentos de **consignação em ata** (protestos do art. 478, nulidades, indeferimentos) — registro é pressuposto de futura apelação (alínea "a").
- **Plano B:** se a absolvição não vier, ter pronto o pedido de afastamento de qualificadoras e as teses de pena para a sentença do juiz-presidente.

---

## 🎤 Técnica de oralidade no júri (jurado leigo, íntima convicção)

- **Linguagem simples.** Traduzir o jurídico ("dolo eventual", "in dubio pro reo") para o cotidiano. Nada de latim sem explicar.
- **Histórias, não teses abstratas.** O jurado retém narrativa concreta, nomes, imagens. Construa cenas.
- **Repetição da tese-âncora.** Repetir, em momentos-chave, a frase que resume a defesa.
- **Contato visual e presença.** Falar **para** os jurados, individualmente; ocupar o espaço com naturalidade.
- **Emoção com verdade, sem teatro vazio.** A plenitude autoriza o apelo emocional, mas o exagero artificial perde o Conselho.
- **Conduzir ao voto.** Sempre fechar ligando o argumento ao **quesito** correspondente e ao **como votar**.
- **Respeito ao Conselho e ao adversário.** Agressividade gratuita ao MP costuma voltar-se contra a defesa.
- **Gestão do tempo.** Cronometrar ensaios para caber em 1h30 (ou 2h30) com folga para o fecho.

---

## 📐 MODELO — esqueleto de roteiro de debates (DEFESA)

> Roteiro **interno** de atuação (não é peça protocolada). Adaptar ao caso concreto; toda citação passa por `verificacao-citacoes`.

```
ROTEIRO DE PLENÁRIO — DEFESA
Réu: [NOME] | Imputação: [art. 121 ... CP] | Sessão: [data] | Comarca: [...]
Tese principal: [ex.: negativa de autoria]
Teses subsidiárias (eventualidade): [legítima defesa → desclassificação →
  clemência → afastamento de qualificadoras → pena no mínimo]

1. ABERTURA (≈5 min)
   - Saudação ao Conselho, juiz-presidente, MP.
   - Tese em uma frase: "Ao final, ficará claro que [...]."

2. NARRATIVA DOS FATOS (≈15-20 min)
   - História pela ótica da defesa, cronológica e concreta.
   - [Cena 1] [Cena 2] [Cena 3]

3. PROVA QUE SUSTENTA A TESE (≈20-25 min)
   - Depoimento de [...] (fl./ev. [...]): [o que prova].
   - Laudo [...] : [ponto favorável].
   - Contradições da acusação: [a], [b], [c].

4. ENFRENTAMENTO DA ACUSAÇÃO (≈15 min)
   - Argumento forte do MP nº 1 → resposta.
   - Argumento forte do MP nº 2 → resposta.
   - Qualificadoras pretendidas → por que não incidem.

5. PLENITUDE / DIMENSÃO HUMANA (≈10 min)
   - Dúvida razoável; contexto humano; apelo legítimo à consciência.

6. PEDIDO + LIGAÇÃO COM O QUESITO (≈5 min)
   - "Ao quesito 'O jurado absolve o acusado?' (art. 483, §2º), votem SIM."
   - Fecho forte: "[frase memorável]."

RÉPLICA DO MP → TRÉPLICA (munição reservada):
   - Ponto a rebater [1] [2] [3] → retorno ao pedido de absolvição.

CONSIGNAÇÕES EM ATA (se ocorrerem):
   - [ ] Referência indevida à pronúncia (art. 478, I) — protesto.
   - [ ] Exploração do silêncio (art. 478, II) — protesto.
   - [ ] Documento sem os 3 dias (art. 479) — impugnação.
   - [ ] Indeferimento de [...] — protesto para fins de apelação (alínea "a").
```

---

## ✅ Checklist de preparação para o plenário (DEFESA)

- [ ] **Pronúncia relida** e **congruência** conferida (o que efetivamente vai a júri)?
- [ ] **Tese principal definida** + subsidiárias ordenadas por eventualidade?
- [ ] **Plenitude de defesa** explorada (argumentos jurídicos **e** extrajurídicos/clemência)?
- [ ] **Quesito genérico de absolvição** (art. 483, §2º) incorporado ao pedido?
- [ ] **Tempo dominado** (1h30 / 2h30 + réplica/tréplica — art. 477)? Ensaiado e cronometrado?
- [ ] **Última palavra** (tréplica) planejada, com munição reservada?
- [ ] **Acusação antecipada** (3-5 argumentos do MP com resposta pronta)?
- [ ] **Qualificadoras pretendidas** mapeadas (viram quesitos)?
- [ ] **Provas a exibir** juntadas com **3 dias úteis** e ciência ao MP (art. 479)?
- [ ] **Protestos do art. 478** (pronúncia / silêncio) preparados para consignação em ata?
- [ ] **Quesitos** antecipados e impugnações prontas (skill `juri-quesitacao`)?
- [ ] **Plano B**: afastamento de qualificadoras + teses de pena para a sentença, caso haja condenação?
- [ ] **Linguagem simples** revisada (sem jargão não traduzido)?
- [ ] **Pedido ao Conselho** claro e ligado ao **voto no quesito**?
- [ ] **Citações verificadas** (gate `verificacao-citacoes`) e **revisão humana** do advogado responsável?

---

## ⚠️ Cautelas e diretriz anti-alucinação

- **Confira a redação vigente dos artigos** (arts. 476 a 484 CPP). A redação atual decorre da **Lei 11.689/2008** e houve alterações posteriores relevantes na 2ª fase (ex.: **art. 492, I, "e"**, sobre execução imediata da pena no júri, objeto do **Tema 1.068/STF**, RE 1.235.340, com tese fixada em 2024). **Antes de afirmar tempo, ordem de quesitos ou execução da pena, confirme o texto atual na fonte oficial.**
- **Toda lei, súmula, tese ou acórdão citado** (ex.: Súmula 713/STF sobre devolutividade na apelação do júri; Tema 1.068/STF; padrão do STJ sobre a alínea "d") passa **obrigatoriamente** pelo gate de `verificacao-citacoes` antes de qualquer uso em plenário ou em peça. Na dúvida, **omitir vence inventar**.
- **Revisão humana obrigatória.** A responsabilidade pela atuação é sempre do **advogado** (CED, art. 2º). Este roteiro é apoio à preparação, não substitui o juízo profissional.

---

## Lembretes finais

- **2ª fase = plenário** (*judicium causae*); pressupõe **pronúncia** preclusa.
- **Plenitude de defesa** (não "ampla"): argumentos jurídicos **e** extrajurídicos; jurado decide por **íntima convicção**.
- **Quatro linhas de tese:** negativa de autoria, legítima defesa (excludentes), desclassificação, clemência.
- **Quesito genérico de absolvição** (art. 483, §2º) permite absolver por **qualquer** fundamento — inclusive clemência.
- **Tempo (art. 477):** 1h30 (regra) / 2h30 (pluralidade) + réplica/tréplica de 1h/2h. **Defesa tem a última palavra.**
- **Art. 478:** não usar **pronúncia** nem **silêncio** como argumento de autoridade — protestar e consignar em ata.
- **Art. 479:** documento/mídia só com **3 dias úteis** de antecedência e ciência à parte — escudo **e** arma.
- **Ata é munição de apelação** (alínea "a"): registre indeferimentos e nulidades.
- **Sempre adaptar ao caso concreto** — a tese decorre da prova, não de fórmula pronta.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
