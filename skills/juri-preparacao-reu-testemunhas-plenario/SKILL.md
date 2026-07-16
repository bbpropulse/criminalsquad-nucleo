---
name: juri-preparacao-reu-testemunhas-plenario
description: >-
  Use ao preparar o RÉU (interrogatório em plenário) e as TESTEMUNHAS DE DEFESA para a sessão do
  Tribunal do Júri — postura e narrativa perante jurados leigos que decidem por íntima convicção,
  antecipação da inquirição cruzada, exercício do direito ao silêncio sem prejuízo, e a estratégia
  da testemunha imprescindível arrolada para o plenário. Gatilhos: preparar réu para o júri,
  interrogatório em plenário, preparação de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-preparacao-reu-testemunhas-plenario"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-preparacao-reu-testemunhas-plenario", "juri preparacao", "testemunhas plenario"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Preparação do Réu e das Testemunhas para o Plenário (arts. 422, 473 e 474 CPP; art. 5º, XXXVIII, "a", e LXIII, CF)

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

Esta skill orienta a **preparação do réu para o interrogatório em plenário** e das **testemunhas de defesa** para a **sessão do Tribunal do Júri** (2ª fase). Não é sobre o discurso do advogado (isso é `juri-plenario-debates`) nem sobre a formulação de perguntas jurídicas (isso é `juri-quesitacao`): aqui o foco é **quem vai falar diante do Conselho de Sentença** — o réu e suas testemunhas — e **como chegam preparados** para um julgador que é **leigo, decide por íntima convicção e não fundamenta o voto**.

> **Lição central:** no plenário, quem julga é **pessoa comum**, não juiz técnico. A preparação não é decorar respostas — é **alinhar verdade, coerência e postura**. O réu e a testemunha que se contradizem, que parecem ensaiados ou que se irritam sob inquirição cruzada **perdem o júri antes dos debates**. Prepare a **serenidade e a coerência**, nunca um roteiro falso.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 422, 473 e 474 do CPP** e do rito do júri (arts. 406 a 497), reescrito pela **Lei 11.689/2008** — citar a dinâmica anterior a 2008 é erro grave. Confira súmulas, temas e overruling via a skill `jurisprudencia-stj-stf` antes de fundamentar qualquer requerimento. **Nada de precedente citado de memória.**

## Por que o plenário é diferente (e por que existe esta skill)

Na **audiência de instrução** do rito comum (skills `preparacao-interrogatorio-cliente` e `preparacao-audiencia`), o interlocutor é o **juiz togado**, que decide por **livre convicção motivada** e fundamenta a sentença. No **plenário do júri**, tudo muda:

- **O julgador é leigo** (7 jurados sorteados) e decide por **íntima convicção**, sem fundamentar o voto.
- Vige a **plenitude de defesa** (CF, art. 5º, XXXVIII, "a") — mais ampla que a "ampla defesa" comum: cabem argumentos **jurídicos e extrajurídicos** (emocionais, morais, sociais).
- O réu **se dirige emocionalmente às pessoas** que decidirão seu destino; a **impressão pessoal** pesa tanto quanto o conteúdo.
- A **testemunha imprescindível** (art. 422 CPP, com intimação obrigatória) é peça-chave que precisa comparecer e sustentar-se sob inquirição cruzada.
- O **silêncio** tem peso **psicológico** distinto do silêncio técnico da instrução — a decisão de falar ou calar é estratégica e específica do plenário.

## Base legal

- **Art. 422, CPP** — preclusa a pronúncia, o juiz abre vista às partes para **arrolar testemunhas para o plenário (até 5)**, juntar documentos e requerer diligências. Aqui se define **quem** vai depor perante os jurados.
- **Art. 473, CPP** — na sessão, **inquirição das testemunhas**: primeiro o juiz-presidente, depois **acusação e defesa diretamente** (Ministério Público/assistente e defensor), e os **jurados por intermédio do juiz-presidente**.
- **Art. 474, CPP** — **interrogatório do réu em plenário**: o acusado é interrogado se estiver presente; **as partes formulam perguntas por intermédio do juiz-presidente**; **vedada referência à decisão de pronúncia** e ao uso de algemas como argumento (§§ do art. 474).
- **Art. 5º, LXIII, CF** — direito ao silêncio; **o silêncio não pode ser interpretado em prejuízo** do réu (também art. 186, parágrafo único, CPP).
- **Art. 5º, XXXVIII, "a", CF** — **plenitude de defesa**, base de toda a estratégia de preparação e de sustentação emocional perante os jurados.
- **Art. 411, §7º / arts. 217 e 201, CPP** — dinâmica de tomada de depoimentos (afastamento do réu que intimida testemunha; tratamento da vítima) que se projeta na organização da prova oral.

## A testemunha imprescindível (art. 422 CPP) — a jogada estratégica do plenário

O art. 422 permite arrolar **até 5 testemunhas** para o plenário. A distinção decisiva é entre a testemunha **comum** e a **imprescindível**:

- **Testemunha arrolada sem cláusula de imprescindibilidade:** se não comparecer, o julgamento **prossegue** sem ela (o júri não se adia por sua ausência).
- **Testemunha arrolada com cláusula de imprescindibilidade + pedido de intimação:** a defesa requer que a testemunha seja **intimada** e declara sua presença **imprescindível**. Nesse caso, **a ausência pode adiar o julgamento** e determinar condução, porque a defesa afirmou não poder prescindir daquele depoimento perante os jurados.

➡️ **Regra de ouro:** ao arrolar no prazo do art. 422, a defesa deve **decidir conscientemente** quais testemunhas são **imprescindíveis** (requerer intimação + declarar imprescindibilidade em petição) e quais são acessórias. Errar aqui é fatal: a testemunha-chave que não foi declarada imprescindível **não comparece e o júri ocorre sem ela**, sem direito a adiamento.

> **Cuidado com a preclusão.** O momento de arrolar é o do **art. 422** (após a preclusão da pronúncia). Testemunha não arrolada tempestivamente pode não ser admitida em plenário. **Planeje o rol de plenário desde o encerramento da 1ª fase** — não deixe para a véspera.

## Preparação do RÉU para o interrogatório em plenário (art. 474)

### Passo 1 — Decisão estratégica: falar ou silenciar

A **primeira decisão** não é *o que* dizer, mas *se* o réu vai depor. É decisão do réu, **orientada pela defesa**, ponderando:

| Fator | Falar tende a ajudar quando… | Silenciar tende a ajudar quando… |
|---|---|---|
| Versão | há **versão coerente e sustentável** (legítima defesa, negativa de autoria, álibi) | qualquer versão se choca com a prova e a contradição é provável |
| Emocional | o réu **transmite serenidade e humanidade** aos jurados | o réu é impulsivo, agressivo ou colapsa sob pressão |
| Prova | o depoimento **preenche lacunas** favoráveis | a acusação está frágil e falar só cria flanco para o cross |
| Persona | o réu **gera empatia** ao se dirigir aos jurados | a exposição pessoal reforça estigma |

> **O silêncio no plenário (art. 5º, LXIII, CF).** O réu pode calar e **isso não pode ser usado contra ele** — o juiz-presidente adverte os jurados, e a acusação **não pode explorar o silêncio como confissão**. Mas o silêncio tem **peso psicológico** perante leigos: pode ser lido como frieza. Se o réu vai silenciar, **a defesa deve preparar a narrativa que ocupa esse espaço** nos debates (skill `juri-plenario-debates`), para que o silêncio não seja vácuo. Silêncio bem sustentado ≠ silêncio abandonado.

### Passo 2 — Alinhar a verdade, não decorar respostas

- **Nunca** ensaiar mentira ou fabricar versão: além de antiético (CED/OAB) e criminoso, jurados **percebem o ensaio** e a contradição destrói a credibilidade.
- Trabalhar a **coerência** entre o que o réu dirá e o que já consta dos autos (interrogatório da 1ª fase, provas). Contradição com o depoimento anterior é munição do cross.
- Fixar os **pontos-âncora** da versão defensiva (o "o quê", o "porquê", o contexto humano) — sem script literal, para soar autêntico.

### Passo 3 — Postura e comunicação diante dos jurados

- **Olhar para os jurados** ao responder (é a eles que o réu fala, não só ao juiz ou ao promotor).
- **Tom sereno**, respeitoso, sem arrogância nem vitimização exagerada.
- **Vocabulário simples** — o júri é leigo; termos técnicos afastam.
- **Não se irritar** sob inquirição cruzada da acusação (a perda de controle é o que a acusação busca).
- **Vestuário e apresentação** dignos e sóbrios; linguagem corporal aberta.
- **Humanizar-se** sem teatralizar: mostrar arrependimento genuíno quando cabível, contexto de vida, vínculos.

### Passo 4 — Antecipar o interrogatório e a inquirição cruzada

- Mapear as **perguntas prováveis da acusação** e treinar **respostas verdadeiras e curtas** (resposta longa abre flancos).
- Ensaiar o **enfrentamento das contradições** já existentes nos autos (o promotor vai apontá-las).
- Reforçar: **perguntas passam pelo juiz-presidente** (art. 474, §§) — o ritmo é mais formal que na instrução; o réu deve **esperar a pergunta ser dirigida** e responder com calma.
- Lembrar o réu de que **é vedado à acusação usar a pronúncia como argumento** contra ele (art. 474, §3º) — se ocorrer, a defesa reclama e consigna em ata.

## Preparação das TESTEMUNHAS de defesa (art. 473)

> **Limite ético inegociável:** preparar testemunha **não é** ensinar o que dizer nem induzir a versão. É **esclarecer o rito**, reduzir o nervosismo e orientar postura. Sugerir conteúdo falso ou combinar depoimento é **falso testemunho** (art. 342 CP) e infração ética grave. A testemunha diz **a verdade que conhece**; a defesa só a prepara para **dizê-la bem**.

### O que orientar (legítimo)
- **Explicar o rito:** quem pergunta e em que ordem (juiz-presidente, depois acusação e defesa **diretamente**, jurados por intermédio do juiz — art. 473); onde ficará; que os jurados observam.
- **Postura:** falar de forma clara, olhar para quem pergunta e também para os jurados, manter a calma, **não inventar** o que não sabe ("não me recordo" é resposta legítima e melhor que chutar).
- **Responder ao que foi perguntado**, sem divagar; respostas objetivas resistem melhor ao cross.
- **Antecipar o tom da inquirição cruzada** da acusação: a testemunha deve saber que será questionada e **não deve se sentir atacada** nem entrar em confronto.
- **Compromisso e sanção:** a testemunha presta compromisso e responde por **falso testemunho** — reforço ético que também protege a defesa.

### O que NÃO fazer (vedado)
- Ditar respostas, combinar versão, entregar "roteiro" de depoimento.
- Pressionar testemunha reticente ou premiá-la de qualquer forma.
- Aproximar testemunhas para "alinharem" versões entre si.

### Seleção e ordem
- **Escolher testemunhas que agregam** ao Conselho de Sentença: quem tem **conhecimento direto e credibilidade**, não apenas quem "fala bem". Testemunha frágil sob cross **prejudica** mais que ajuda.
- Definir a **ordem de inquirição** de modo a construir a narrativa (contexto → fato → caráter), quando a técnica do juízo permitir.
- Sinalizar a **imprescindibilidade** (art. 422) das que **não podem faltar**.

## Erros comuns (anti-padrões)

- **Ensaiar mentira / decorar respostas:** jurados percebem; a contradição destrói a credibilidade e pode configurar crime.
- **Não declarar a testemunha-chave como imprescindível** (art. 422): ela falta e o júri ocorre sem ela, sem adiamento.
- **Deixar o rol de plenário para a véspera:** risco de preclusão e de intimação frustrada.
- **Réu falando "para o juiz" e não para os jurados:** perde o canal emocional que decide o veredicto.
- **Réu que se irrita no cross:** entrega à acusação exatamente o que ela quer.
- **Silêncio abandonado:** o réu cala e a defesa não ocupa o espaço narrativo nos debates.
- **Testemunha instruída a "não lembrar" do que sabe** ou a inventar o que não sabe: fragiliza e criminaliza.
- **Tratar a preparação do plenário como se fosse a da instrução:** ignorar a íntima convicção, a plenitude de defesa e a dinâmica leiga.

## Checklist final

**Testemunhas / rol de plenário (art. 422):**
- [ ] Rol de plenário definido **no prazo do art. 422** (até 5), com margem?
- [ ] Testemunhas **imprescindíveis** identificadas, com **pedido de intimação** e **declaração de imprescindibilidade** em petição?
- [ ] Testemunhas frágeis sob cross reavaliadas (agregam ou prejudicam)?
- [ ] Cada testemunha **orientada quanto ao rito** (art. 473) — sem indução de conteúdo?

**Réu (art. 474):**
- [ ] Decisão **falar × silenciar** tomada pelo réu, orientada pela defesa, e com plano B narrativo para o silêncio?
- [ ] Versão **coerente com os autos** (sem contradição com o interrogatório da 1ª fase)?
- [ ] Postura ensaiada: **olhar aos jurados**, tom sereno, vocabulário simples, autocontrole no cross?
- [ ] Réu ciente de que **perguntas passam pelo juiz-presidente** e de que a **pronúncia não pode ser usada contra ele** (art. 474, §3º)?

**Conformidade:**
- [ ] Nenhuma orientação cruzou para **indução de falso testemunho** (art. 342 CP)?
- [ ] Dispositivos e eventual jurisprudência **conferidos** via `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes da sessão?

## Súmulas e precedentes (conferir vigência via `jurisprudencia-stj-stf`)

O núcleo desta skill é **legal** (arts. 422, 473, 474 CPP; CF, art. 5º, XXXVIII "a" e LXIII) e **prático** — cite os dispositivos livremente. Para **qualquer** tese jurisprudencial específica sobre o tema (p.ex., alcance do silêncio perante o júri, nulidade por cerceamento na prova oral do plenário, consequências da ausência de testemunha imprescindível, vedação de referência à pronúncia como causa de nulidade), **não invente número de HC/REsp/RE nem informativo**: marque **[NAO VERIFICADO]** e confira na skill `jurisprudencia-stj-stf` antes de usar em petição ou sustentação. **Prefira ensinar a tese e o dispositivo a arriscar um acórdão inexistente.**

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da sessão do júri; a condução do interrogatório e da prova oral, a decisão sobre falar/silenciar e as impugnações são sempre de responsabilidade do **advogado** (CED/OAB, Provimento 205/2021).
- **Ética por polo:** advocacia (OAB + Provimento 205/2021); Ministério Público (CNMP); Defensoria (LC 80/94). Esta skill é de **defesa** (preparação do réu e de testemunhas de defesa).
- **Vedação absoluta à indução de falso testemunho** (art. 342 CP): preparar testemunha é esclarecer o rito e reduzir o nervosismo, **nunca** ditar conteúdo ou combinar versão.
- **Citation Gate:** nenhuma súmula/tese/acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao converter esta preparação em petição (rol de plenário do art. 422, requerimento de intimação de testemunha imprescindível), aplique também a skill `redacao-persuasiva-criminal` — clareza, coesão e persuasão que a revisão cobra.
