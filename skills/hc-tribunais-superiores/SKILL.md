---
name: hc-tribunais-superiores
description: >-
  Use ao elaborar, redigir ou revisar HABEAS CORPUS impetrado perante os TRIBUNAIS SUPERIORES (STJ e
  STF), inclusive o pedido de LIMINAR, o HC substitutivo de recurso próprio e a estratégia sucessiva
  TJ→STJ→STF. Gatilhos: HC no STJ, HC no STF, habeas corpus em tribunal superior, liminar em habeas
  corpus, pedido liminar de alvará de soltura, fumus boni iuris, periculum…. Não use para decisão
  final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-hc-tribunais-superiores"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["hc-tribunais-superiores", "tribunais superiores"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Habeas Corpus nos Tribunais Superiores (STJ e STF)

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

Esta skill orienta a impetração de **Habeas Corpus perante o STJ e o STF** — a fase "vertical" do writ, quando a coação ilegal já foi praticada ou mantida por um tribunal. Cobre o que a impetração clássica não alcança: **pedido de liminar**, **HC substitutivo de recurso próprio**, **Súmula 691 do STF e sua superação**, **supressão de instância** e a **estratégia sucessiva TJ→STJ→STF**.

> **Complementa — não substitui — a skill `habeas-corpus`.** A estrutura básica do writ (natureza de ação autônoma, três sujeitos, verbo IMPETRAR, hipóteses do art. 648 CPP, relaxamento × revogação) está lá e **não é repetida aqui**. Ver skill `habeas-corpus` para esses fundamentos.

## O instituto e a base legal

O fundamento material é o mesmo do HC comum (**art. 5º, LXVIII, CF** e **arts. 647 e 648 CPP** — ver skill `habeas-corpus`). O que muda é a **competência originária**:

- **STJ** — julga HC quando o **coator é Tribunal de Justiça ou TRF** (ou autoridade sujeita à sua jurisdição): **art. 105, I, "c", CF**.
- **STF** — julga HC quando o **coator é Tribunal Superior** (STJ, TSE, TST, STM): **art. 102, I, "i", CF**.
- A **concessão de ofício** segue possível em qualquer grau: **art. 654, § 2º, CPP**. O **art. 647-A CPP** (Lei 14.836/2024) reforçou a concessão de ofício em hipótese específica (prisão em desacordo com entendimento vinculante) — **confira o teor exato via agente `lei-e-sumula`** antes de transcrever.
- Ritos internos (distribuição, poderes do relator, pedido de informações) constam dos **Regimentos Internos do STJ e do STF** — não afirme número de artigo regimental de memória: **confira via agente `lei-e-sumula`** antes de citar.

## Cabimento — quem é o coator define o tribunal

| Situação concreta | Coator | Impetra-se em | Fundamento |
|---|---|---|---|
| TJ/TRF **denega HC** ou **mantém prisão** em recurso | TJ ou TRF (órgão colegiado) | **STJ** | art. 105, I, "c", CF |
| **Desembargador relator** indefere liminar em HC no TJ/TRF | Desembargador | **STJ** — mas atenção à lógica da Súmula 691 (aplicada por analogia) | art. 105, I, "c", CF |
| **STJ denega HC** (acórdão de mérito) | STJ | **STF** | art. 102, I, "i", CF |
| **Ministro relator do STJ** indefere a liminar | Ministro do STJ | **STF** — barreira da **Súmula 691** (só com superação) | art. 102, I, "i", CF |
| Juiz de 1º grau decreta a prisão e o TJ **ainda não decidiu** | Juiz | **TJ/TRF** — impetrar direto no STJ é **supressão de instância** | ver skill `habeas-corpus` |

> **Regra de ouro:** identifique o **último ato de coação**. É ele — e a autoridade que o praticou — que fixa o endereçamento. Pular degraus gera não conhecimento por **supressão de instância**.

## A liminar em HC — construção pretoriana

Não há previsão expressa de liminar em HC no CPP: é criação jurisprudencial consolidada, fundada no **poder geral de cautela** e na urgência inerente à tutela da liberdade. Requisitos clássicos:

- ***Fumus boni iuris*** — plausibilidade jurídica da tese: a ilegalidade deve saltar aos olhos **de plano**, na prova pré-constituída (HC não admite dilação probatória).
- ***Periculum in mora*** — o dano de aguardar o julgamento de mérito: paciente **preso** (cada dia é dano irreparável), risco iminente de prisão, início de cumprimento de pena em regime indevido, pauta de júri iminente etc.

**Na prática:**

- A liminar merece **seção própria e destacada** na peça (não um parágrafo perdido no meio dos fatos).
- O pedido liminar típico: **expedição imediata de alvará de soltura** (ou salvo-conduto, contramandado, suspensão do processo/ato), até o julgamento definitivo do writ.
- Seja **cirúrgico**: liminar genérica ("requer liminar") é liminar indeferida. Diga exatamente qual provimento urgente se pede e por quê a demora o inutiliza.
- O indeferimento da liminar pelo relator é, tradicionalmente, tido por **irrecorrível**, mas o **cabimento do agravo regimental contra essa decisão é oscilante** na jurisprudência — **confirme o estado atual via agente `jurisprudencia-stj-stf`** antes de escolher a via (ver skill `agravo-regimental`) — daí a relevância da Súmula 691 (abaixo).

## HC substitutivo de recurso próprio

Quando o tribunal **denega o HC no mérito**, o recurso cabível é o **Recurso Ordinário em Habeas Corpus** (ver skill `recurso-ordinario-hc` para a escolha da via). A prática, porém, consagrou impetrar **novo HC** diretamente no tribunal superior — o chamado **HC substitutivo de recurso próprio**.

**Estado atual da jurisprudência (restritiva):**

- STF e STJ firmaram orientação de **não conhecer** do HC substitutivo — a via adequada seria o RHC ou o recurso próprio (agravo em execução, apelação etc.).
- **Porém**, os próprios tribunais ressalvam: constatada **flagrante ilegalidade**, concede-se a ordem **de ofício** (art. 654, § 2º, CPP), mesmo sem conhecer do writ.

**Consequência redacional obrigatória:** todo HC substitutivo deve conter **pedido subsidiário expresso de concessão da ordem de ofício**. A peça que só pede o conhecimento do writ morre no juízo de admissibilidade; a peça bem-feita entrega ao relator a porta da ilegalidade flagrante.

> Ao afirmar o estado atual dessa orientação na peça real, **pesquise precedentes recentes via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**.

## Súmula 691 do STF e sua superação

**Súmula 691 STF:** *"Não compete ao Supremo Tribunal Federal conhecer de habeas corpus impetrado contra decisão do Relator que, em habeas corpus requerido a tribunal superior, indefere a liminar."*

Racional: se o STF examinasse o mérito antes do STJ, haveria **supressão de instância** e o julgamento *per saltum*. O STJ aplica a mesma lógica, por analogia, ao indeferimento de liminar por desembargador relator.

**Critérios de superação (mitigação) — construção jurisprudencial:**

| Critério | O que demonstrar na peça |
|---|---|
| **Flagrante ilegalidade** | A coação viola texto expresso de lei ou súmula, perceptível de plano, sem exame aprofundado de prova |
| **Teratologia** | Decisão aberrante, fora de qualquer parâmetro razoável (ex.: prisão preventiva sem nenhum fundamento concreto, apenas gravidade abstrata) |
| **Abuso de poder / desvio manifesto** | O indeferimento da liminar, em si, perpetua constrangimento evidente |

**Como redigir a superação:** dedique um tópico próprio ("Da superação da Súmula 691 do STF") **antes** do mérito, reconhecendo a súmula e demonstrando, com a prova pré-constituída, por que o caso é excepcional. Ignorar a súmula e torcer para o relator não notar é a receita do não conhecimento.

> O precedente notório do **HC coletivo 143.641/STF** (prisão domiciliar para gestantes e mães de crianças) ilustra a vocação do writ nos tribunais superiores para corrigir ilegalidades estruturais. Para qualquer outro julgado específico de superação da 691, **pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**.

## Supressão de instância e o HC sucessivo (TJ → STJ → STF)

**Supressão de instância:** o tribunal superior não examina **tese que a instância anterior ainda não apreciou**. Consequências práticas:

- Só leve ao STJ os fundamentos que o TJ/TRF efetivamente **enfrentou** (ou deveria ter enfrentado por serem de ordem pública).
- Tese nova surgida depois do acórdão? Em regra, volta-se à origem — salvo flagrante ilegalidade cognoscível de ofício.
- Impetrar direto no STF contra ato de TJ, pulando o STJ, é não conhecimento certo.

**A estratégia sucessiva (escada do writ):**

```
1º degrau — TJ/TRF:  HC contra o ato do juiz (ver skill habeas-corpus)
2º degrau — STJ:     (a) TJ denegou no mérito → RHC (regra) ou HC substitutivo
                          com pedido de ofício (prática) — ver recurso-ordinario-hc
                     (b) relator do TJ indeferiu só a liminar → HC ao STJ
                          demonstrando superação da lógica da S. 691
3º degrau — STF:     (a) STJ denegou no mérito → RHC ou HC substitutivo
                     (b) relator do STJ indeferiu a liminar → HC ao STF
                          SOMENTE com superação da Súmula 691
```

**Decisões de timing que definem o caso:**

- **Aguardar o mérito na origem × subir já?** Se a liminar foi indeferida mas o mérito será julgado em breve, muitas vezes é melhor aguardar o acórdão (que abre a via limpa do RHC) do que enfrentar a 691. Se o paciente está preso e o julgamento não tem data, a superação da 691 é o caminho.
- **Julgado o mérito na origem, o HC contra o indeferimento da liminar perde o objeto** — a impugnação deve mirar o novo ato (o acórdão).
- **HC sucessivo ≠ reiteração:** impetrar novo writ com os **mesmos fundamentos** já rejeitados no mesmo tribunal é reiteração — não conhecimento. O HC sucessivo legítimo ataca **ato novo** ou traz **fundamento novo**.

## Estrutura forense da peça

A espinha dorsal é a do HC comum (ver skill `habeas-corpus`); abaixo, apenas as **adaptações** para o tribunal superior:

```
1. Endereçamento:
   STJ → EXCELENTÍSSIMO SENHOR MINISTRO PRESIDENTE DO SUPERIOR TRIBUNAL DE JUSTIÇA
   STF → EXCELENTÍSSIMO SENHOR MINISTRO PRESIDENTE DO SUPREMO TRIBUNAL FEDERAL
2. Preâmbulo: três sujeitos (ver skill habeas-corpus), com fundamento acrescido de
   art. 105, I, "c", CF (STJ) ou art. 102, I, "i", CF (STF)
   Impetrado: o ÓRGÃO coator — ex.: "colenda [N]ª Câmara Criminal do TJ/[UF]"
   ou "Ministro Relator do HC nº [...] do STJ" (indicar o processo de origem)
3. I — Dos Fatos e do histórico processual (a "escada": o que cada instância decidiu)
4. II — Do cabimento (se substitutivo: enfrentar o não conhecimento + pedir ofício;
   se contra indeferimento de liminar: "Da superação da Súmula 691 do STF")
5. III — Do Direito (a ilegalidade da coação — teses abaixo)
6. IV — Da Liminar (fumus + periculum, em seção destacada)
7. V — Dos Pedidos (ordem lógica: liminar → notificação/informações do coator →
   parecer do MPF → mérito: concessão da ordem → subsidiário: concessão DE OFÍCIO)
8. Fechamento e rol de documentos (prova pré-constituída COMPLETA)
```

**Prova pré-constituída é tudo:** junte cópia integral das decisões atacadas, da denúncia, do acórdão da origem, das certidões de julgamento. O tribunal superior não requisita autos para completar a instrução da impetração — o que não estiver anexado não existe.

## Teses típicas da prática

- **Prisão preventiva sem fundamentação concreta** — gravidade abstrata do delito, presunção de fuga sem base fática, decisão-padrão (art. 312 e art. 315 CPP): terreno clássico de flagrante ilegalidade. Para as teses de fundo sobre prisão, ver skill `liberdade-provisoria-relaxamento`.
- **Excesso de prazo** da prisão sem sentença ou sem julgamento do recurso.
- **Ausência de contemporaneidade** entre os fatos e o decreto prisional.
- **Cabimento de medidas cautelares diversas** (art. 319 CPP) ignorado sem motivação.
- **Regime inicial ou execução mais gravosa que a lei permite** — inclusive com apoio nas súmulas consolidadas de individualização (ex.: **Súmulas 718 e 719 do STF**, **Súmula 440 do STJ**).
- **Trancamento de ação penal** por atipicidade, ausência de justa causa ou inépcia mantida pelo tribunal de origem (requisitos na skill `habeas-corpus`).
- **Nulidade manifesta** reconhecível de plano (incompetência absoluta, quebra de cadeia de custódia evidente, prova ilícita).

## Erros comuns e pegadinhas

- **Pular instância** — impetrar no STJ contra ato de juiz de 1º grau, ou no STF contra ato de TJ: não conhecimento por supressão de instância.
- **Ignorar a Súmula 691** — atacar indeferimento de liminar sem tópico de superação: indeferimento liminar do próprio writ.
- **HC substitutivo sem pedido de ofício** — se o tribunal não conhecer (regra atual), a peça sem pedido subsidiário de concessão de ofício não deixa porta aberta.
- **Trazer tese nova não apreciada na origem** — supressão de instância; limite-se ao que foi decidido (ou ao cognoscível de ofício).
- **Reiterar HC idêntico** no mesmo tribunal após denegação: não conhecimento; é preciso ato novo ou fundamento novo.
- **Liminar genérica** — sem fumus/periculum individualizados e sem dizer qual provimento urgente se quer, a liminar não sai.
- **Prova pré-constituída incompleta** — faltou a cópia da decisão atacada ou do acórdão de origem: impossível aferir a ilegalidade de plano; writ não conhecido.
- **Perda de objeto não monitorada** — o julgamento do mérito na origem esvazia o HC contra a liminar; acompanhe a pauta e, se necessário, adite ou impetre novo writ contra o acórdão.
- **Confundir a via** — denegação de mérito na origem abre RHC, com **prazo de 5 dias** (art. 30 da Lei 8.038/90; **em dobro para a Defensoria**); avalie na skill `recurso-ordinario-hc` antes de optar pelo substitutivo (que não tem prazo, mas enfrenta o não conhecimento).
- **Transpor lógica recursal ao writ** — HC é **gratuito** (art. 5º, LXXVII, CF): não há preparo, custas nem deserção; também não há prazo para impetrar.
- **Endereçar ao relator da origem** — o impetrado é o órgão/autoridade coatora; o endereçamento é ao **Presidente do tribunal superior competente**.
- **Citar artigo de regimento interno de memória** — confirme via agente `lei-e-sumula`.

## Checklist final

- [ ] Último ato de coação identificado e **coator correto** no preâmbulo?
- [ ] Endereçamento: **STJ (art. 105, I, "c", CF)** ou **STF (art. 102, I, "i", CF)**?
- [ ] Estrutura básica do writ conferida na skill `habeas-corpus` (três sujeitos, verbo IMPETRAR)?
- [ ] Se ataca indeferimento de liminar: tópico **"Da superação da Súmula 691"** com flagrante ilegalidade/teratologia demonstradas?
- [ ] Se substitutivo: pedido **subsidiário de concessão da ordem DE OFÍCIO** (art. 654, § 2º, CPP)?
- [ ] Seção destacada **"Da Liminar"** com fumus e periculum concretos e provimento urgente especificado (alvará de soltura)?
- [ ] Nenhuma tese que a instância de origem não apreciou (salvo cognoscível de ofício)?
- [ ] **Prova pré-constituída completa** anexada (decisões, denúncia, acórdãos, certidões)?
- [ ] Precedentes atuais pesquisados via `jurisprudencia-stj-stf` e validados por `verificador-citacoes` — sem julgado citado de memória?
- [ ] Avaliada a alternativa do **RHC** (skill `recurso-ordinario-hc`) antes de fechar a via?

## Apoie-se em

- **Skill `habeas-corpus`** — estrutura básica da peça, três sujeitos (impetrante/paciente/impetrado), hipóteses do art. 648 CPP e endereçamento geral. **Referência cruzada obrigatória: não redija HC superior sem dominar a base.**
- **Skill `liberdade-provisoria-relaxamento`** — teses de mérito sobre prisão (relaxamento, revogação, cautelares do art. 319 CPP) que alimentam o "Do Direito" do writ.
- **Skill `recurso-ordinario-hc`** (desta onda) — a via recursal própria contra denegação de HC; consulte-a **antes** de optar pelo HC substitutivo.
- **Skill `agravo-regimental`** (desta onda) — impugnação de decisões monocráticas do relator no próprio tribunal superior (inclusive discussão sobre agravo contra indeferimento de liminar).
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes atuais (superação da 691, não conhecimento do substitutivo, teses de prisão).
- **Agente `verificador-citacoes`** — validação obrigatória de todo julgado antes de entrar na peça; marque [NÃO VERIFICADO] o que não confirmar.
- **Best-practice `peticao-criminal`** — padrões de redação, formatação e tom da peça criminal.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
