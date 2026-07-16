---
name: rese
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de RECURSO EM SENTIDO ESTRITO
  (RESE/RSE) no processo penal brasileiro — recurso que ataca decisões interlocutórias previstas no
  art. 581 do CPP. Gatilhos: recurso em sentido estrito, RESE, RSE, razões de RESE, art. 581 CPP,
  art. 586 CPP, art. 589 CPP, interpretação extensiva (art. 3º CPP), decisão de…. Não use para
  decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  aliases: [recurso-em-sentido-estrito]
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-rese"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["rese"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Recurso em Sentido Estrito (RESE / RSE)

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

Esta skill orienta a construção da peça criminal de **Recurso em Sentido Estrito** (RESE, também grafado RSE), conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais". É *"uma das peças mais utilizadas na prática"*.

## Cabimento

**Regra geral:** o RESE ataca **decisões interlocutórias expressas no art. 581 do CPP**.

**Interpretação extensiva** (doutrina e jurisprudência modernas, com fundamento no **art. 3º CPP**): admite-se a extensão *"quando a lei não quis evidentemente excluir e as decisões são conceitualmente muito próximas, trazendo efeitos de sucumbência muito semelhantes."*

> **Exemplo da interpretação extensiva:** o art. 581, V, prevê RESE contra o indeferimento de **prisão preventiva**. E contra o indeferimento de **prisão temporária**? Cabe RESE também — as decisões são conceitualmente próximas e os efeitos de sucumbência muito semelhantes, embora a temporária não conste expressamente do inciso.

### O caput do art. 581 é ATÉCNICO

O *caput* fala em "decisão, **despacho** ou **sentença**", mas:
- **Despachos** são, em regra, **irrecorríveis** (quando muito, correição parcial).
- **Sentenças** definitivas (condenam/absolvem) são atacadas por **apelação**.

Logo, leia-se o 581 como referente **apenas a decisões interlocutórias**. Note ainda o inciso I: *"que não receber a denúncia ou queixa"* (= rejeitar). O **recebimento** da denúncia **não** é atacado por RESE — aqui a lei quis evidentemente excluir.

### Status dos 25 incisos do art. 581 (panorama do professor)

Cabimento **ativo** (principais):
- **I** — não receber (rejeitar) denúncia ou queixa (hipóteses de rejeição no art. 395 CPP). **Atenção ao contraste:** essa decisão é atacada por RESE como **regra geral**; mas, se a rejeição se der no **JECRIM**, o recurso é a **apelação** (art. 82 da Lei 9.099), não o RESE.
- **II** — concluir pela incompetência do juízo.
- **III** — julgar procedentes as exceções (salvo a de suspeição).
- **IV** — **pronunciar o réu** (atenção: a **impronúncia** vai por **apelação**, art. 416).
- **V** — fiança (conceder/negar/arbitrar/cassar/julgar inidônea); **indeferir requerimento de preventiva ou revogá-la**; conceder liberdade provisória; relaxar prisão em flagrante.
- **VI** — julgar quebrada a fiança ou perdido seu valor.
- **VII** — decretar a prescrição ou julgar extinta a punibilidade **por decisão interlocutória** (se no bojo da sentença → apelação, art. 593, §4º).
- **X** — conceder ou negar a ordem de habeas corpus.
- **XIII** — anular o processo da instrução criminal, no todo ou em parte.
- **XIV** — incluir/excluir jurado da lista geral — **única hipótese de prazo de 20 dias**.
- **XV** — denegar a apelação ou julgá-la deserta.
- **XVI** — ordenar a suspensão do processo por questão prejudicial.
- **XVIII** — decidir o incidente de falsidade.
- **XXV** — **recusar homologação à proposta de ANPP** (art. 28-A CPP).

Incisos **tacitamente revogados** (matéria hoje resolvida em sentença → apelação, ou na execução → agravo em execução):
- **XI e XII** — *sursis* e livramento condicional (fase de execução → **agravo em execução**, art. 197 LEP).
- **XVII** — unificação de penas (sentença → apelação; execução → agravo).
- **XIX a XXIII** — medidas de segurança (todas → agravo em execução).
- **XXIV** — converter multa em detenção/prisão (a **multa não pode mais ser convertida em prisão**).

## Prazo

- **Regra geral: 5 dias** — art. 586, *caput*, CPP: *"O recurso voluntário poderá ser interposto no prazo de 5 (cinco) dias."*
- **Exceção: 20 dias** — art. 586, parágrafo único, c/c art. 581, XIV (lista de jurados). Caso isolado.

> Cite sempre o **caput** do 586 na tempestividade, mostrando ao magistrado a interposição no prazo correto de 5 dias (e não nos 20 da exceção).

## Princípio orientador — EFEITO REGRESSIVO

O RESE tem **efeito regressivo** (também chamado iterativo ou diferido), previsto no **art. 589 CPP**: permite o **juízo de retratação** — *"será o recurso concluso ao juiz que, dentro de 2 (dois) dias, reformará ou sustentará o seu despacho"*. Na interposição, pede-se a retratação; em caso negativo, a remessa à instância superior.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Interposição**, dirigida ao **juiz** que prolatou a decisão; (2) **razões**, endereçadas ao **tribunal**. Em uma folha a interposição; em folha seguinte, as razões.

### PRIMEIRA PARTE — Interposição

**Endereçamento:** `Ao Juízo da [N]ª Vara Criminal da Comarca de [...]` (moderna, art. 319, I, CPC por analogia + art. 3º CPP) ou `Excelentíssimo Senhor Doutor Juiz de Direito da [...]` (tradicional). Dirigida ao **magistrado que prolatou a decisão** (juiz de direito, na estadual; juiz federal, na federal).

**Preâmbulo:**
- Nome do cliente + `já qualificado nos autos da ação penal que lhe move o Ministério Público` (não requalificar — está em fase recursal, já qualificado desde a denúncia).
- `por intermédio do(a) advogado(a) que ao final subscreve (procuração anexada no evento [...] / juntada na folha [...])`
- `vem, respeitosamente, à presença de Vossa Excelência,`
- **Tempestividade:** `no prazo legal de 5 (cinco) dias, conforme art. 586, caput, do Código de Processo Penal (CPP),` (primeira menção: por extenso + sigla entre parênteses; depois, só CPP)
- Verbo **INTERPOR** + nome em caixa alta: `interpor RECURSO EM SENTIDO ESTRITO (RESE)`
- Fundamento (use **"forte no"** para não repetir "com fundamento"): `forte no art. 581, [inciso], do CPP` (ex.: inciso IV, para a pronúncia).

**Efeito regressivo (nova linha):** `Requer, uma vez recebido e processado o recurso, a retratação de Vossa Excelência, com base no art. 589, caput, do CPP, ou, em caso negativo, a sua remessa à superior instância para análise e julgamento.`

**Fechamento:** `Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### SEGUNDA PARTE — Razões (em nova folha)

Cabeçalho: `Razões de Recurso em Sentido Estrito`.
- `Recorrente: [nome do cliente]`
- `Recorrido: o Ministério Público` (o professor prefere "Ministério Público" a "Justiça Pública"; em ação privada, "Querelante").

Endereçamento ao tribunal:
- **Estadual:** `Egrégio Tribunal de Justiça — Colenda Câmara Criminal`
- **Federal:** `Egrégio Tribunal Regional Federal — Colenda Turma Criminal`

> Cuidado: **Câmara** Criminal na Justiça Estadual; **Turma** Criminal na Federal.

**I — Dos Fatos:** resumo da situação fática (2-3 frases). Ex.: *"O Ministério Público denunciou o réu pela prática de homicídio doloso duplamente qualificado. Encerrada a instrução, o juiz pronunciou o acusado na forma da denúncia. Inconformado, apresenta-se o presente recurso."*

**II — Do Direito** (estrutura específica do RESE):
1. **Do Cabimento** — dizer que a decisão atacada está prevista no art. 581, [inciso], e é atacável por RESE.
2. **Da(s) Preliminar(es)** (se houver — não inventar) — ex.: prescrição; nulidade (ex.: ofensa ao **art. 226 CPP**, que trata das formalidades do reconhecimento de pessoas).
3. **Do Mérito:**
   - **Se atacar PRONÚNCIA (581, IV):** alegar ausência dos requisitos do **art. 413 CPP** → pedir a **DESPRONÚNCIA**; pedir exclusão/decote de qualificadora; absolvição sumária (art. 415); desclassificação (art. 419, dizendo que não é crime doloso contra a vida).
   - **Se atacar recusa de ANPP (581, XXV):** demonstrar a presença dos requisitos do **art. 28-A CPP**, requisito por requisito.

> **Despronúncia × impronúncia:** **impronúncia** é a decisão do próprio juiz de 1º grau que não pronuncia (art. 414); **DESPRONÚNCIA** é a reforma da pronúncia **pelo tribunal**, no julgamento do RESE (mesmo art. 414).

> **ATENÇÃO CRÍTICA:** no RESE **NÃO se suscitam teses subsidiárias relativas à pena e/ou ao regime** (pena no mínimo, substituição por PRD, regime aberto). Estamos no fim da **1ª fase** do procedimento bifásico do júri — isso fica para a **apelação**, na 2ª fase, em caso de eventual condenação pelo júri.

**III — Dos Pedidos** (binômio **conhecimento + provimento**):
```
Diante do exposto, requer:
a) o conhecimento do recurso;
b) o acolhimento da preliminar de [...] (se houver);
c) no mérito, o provimento do recurso para [ex.: que o réu seja despronunciado, com
   fundamento no art. 414 do CPP; OU que o réu seja beneficiado com o ANPP, art. 28-A].
```

**Fechamento** padrão.

## Checklist final

- [ ] Peça **bipartida** (interposição ao juiz + razões ao tribunal, folhas separadas)?
- [ ] Cabimento no art. 581 (inciso específico) ou interpretação extensiva (art. 3º CPP)?
- [ ] Inciso ainda vigente (atenção aos tacitamente revogados: XI, XII, XVII, XIX-XXIV)?
- [ ] Tempestividade com **art. 586, caput** (5 dias)?
- [ ] Verbo **INTERPOR**; nome em caixa alta; **"forte no"** para o fundamento?
- [ ] **Efeito regressivo** (retratação, art. 589) na interposição?
- [ ] Razões: Recorrente (cliente) / Recorrido (MP); endereçamento ao tribunal correto?
- [ ] Direito com **Do Cabimento + Preliminar(es) + Mérito**?
- [ ] Mérito da pronúncia: **despronúncia** (413/414), decote de qualificadora, 415, 419?
- [ ] **SEM teses subsidiárias de pena/regime**?
- [ ] Pedido de **conhecimento + provimento**?

## Lembretes finais

- **Ataca decisões interlocutórias do art. 581 CPP** (ou por interpretação extensiva, art. 3º).
- **Caput do 581 é atécnico** — só decisões interlocutórias; recebimento da denúncia não é atacado.
- **Peça bipartida** — interposição (juiz) + razões (tribunal).
- **Verbo: interpor.**
- **EFEITO REGRESSIVO** (art. 589) — pede retratação. Diferença marcante para a apelação.
- **Prazo: 5 dias** (exceção: 20 dias, lista de jurados — art. 581, XIV).
- **Pronúncia = 581, IV → despronúncia (414); desclassificação = 581, II.**
- **ANPP recusado = 581, XXV → requisitos do art. 28-A.**
- **NUNCA teses de pena/regime no RESE** (isso é da apelação, 2ª fase do júri).
- O **agravo em execução** segue o mesmo procedimento do RESE (prazo, rito, forma).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
