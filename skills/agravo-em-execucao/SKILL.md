---
name: agravo-em-execucao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de AGRAVO EM EXECUÇÃO (agravo de
  execução ou simplesmente agravo) no processo penal brasileiro — recurso que ataca decisões do juiz
  da execução penal. Gatilhos: agravo em execução, agravo de execução, agravo, art. 197 LEP, Lei
  7.210/84, juiz da execução, VEC, vara de execução penal, progressão de regime…. Não use para
  decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-agravo-em-execucao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["agravo-em-execucao", "agravo execucao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Agravo em Execução

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

Esta skill orienta a construção da peça criminal de **Agravo em Execução** (também *agravo de execução* ou, simplesmente, *agravo*), conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

## Cabimento e fundamento

O agravo em execução **ataca decisões do juiz da execução penal**. Fundamento: **art. 197 da LEP** (Lei 7.210/84): *"Das decisões proferidas pelo juiz caberá recurso de agravo, sem efeito suspensivo."*

> **Ponto-chave:** este é o **único** dispositivo de toda a LEP a tratar do agravo. A LEP **não traz prazo, nem forma, nem rito**. Por isso, a jurisprudência pacífica dos tribunais superiores determina a aplicação do **procedimento do RESE**. *"Tudo o que vale para o RESE em termos de prazo, forma e rito vale para o agravo em execução"* — a única diferença é o **cabimento**.

### Competência do juiz da execução (art. 66 LEP)

Qualquer decisão do juiz da execução é atacável por agravo. O art. 66 lista a competência: aplicar lei posterior mais benéfica; declarar extinta a punibilidade; decidir sobre soma/unificação de penas, **progressão/regressão de regimes**, detração e remição; *sursis*, **livramento condicional** e incidentes da execução; saídas temporárias; conversões de pena; medidas de segurança (aplicação, revogação, desinternação, restabelecimento); etc.

### Exceção — efeito suspensivo (art. 179 LEP)

O art. 197 diz "sem efeito suspensivo". **Exceção: art. 179 LEP** (macete do professor — *"troque os dois últimos números do 197"*). Na **desinternação ou liberação de inimputável** cuja periculosidade cessou, o juiz só expede a ordem **após o trânsito em julgado** — logo, interposto o agravo, aguarda-se o julgamento, e o recurso tem, **excepcionalmente, efeito suspensivo**.

## Prazo e princípio orientador

- **Prazo: 5 dias.** Fundamento duplo possível: **Súmula 700 STF** (*"É de cinco dias o prazo para interposição de agravo contra decisão do juiz da execução penal."*) **e/ou** art. 586, *caput*, CPP (por seguir o rito do RESE). Como a Súmula 700 fundamenta a tempestividade, use `no prazo de 5 dias` (e não "prazo legal", já que a base é súmula) — ou cite os dois fundamentos.
- **Efeito regressivo** (art. 589 CPP) — como segue o rito do RESE, **tem efeito regressivo**: pede-se a retratação.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Interposição**, dirigida ao **juiz da execução** (VEC); (2) **razões**, endereçadas ao **tribunal**.

### PRIMEIRA PARTE — Interposição

**Endereçamento:** `Ao Juízo da Vara de Execução Penal da Comarca de [...]` (ou fórmula tradicional). Dirigida ao juiz da execução.

**Preâmbulo:** nome do cliente + `já qualificado` (fase de execução, após o trânsito em julgado) + `por intermédio do(a) advogado(a) que ao final subscreve (procuração [...])` + `vem, respeitosamente, à presença de Vossa Excelência,` + **tempestividade** (`no prazo de 5 (cinco) dias, conforme Súmula 700 do Supremo Tribunal Federal (STF) e art. 586, caput, do Código de Processo Penal (CPP),`) + verbo **INTERPOR** + `RECURSO DE AGRAVO EM EXECUÇÃO` (caixa alta) + fundamento (`forte no art. 197 da Lei de Execução Penal — Lei 7.210/84`).

**Efeito regressivo (nova linha):** `Requer, uma vez recebido e processado o recurso, a retratação de Vossa Excelência, com base no art. 589, caput, do CPP, ou, em caso negativo, a sua remessa à superior instância para análise e julgamento.`

**Fechamento** padrão.

### SEGUNDA PARTE — Razões (nova folha)

Cabeçalho: `Razões de Agravo em Execução`.
- `Agravante: [nome do cliente]` / `Agravado: o Ministério Público`.

Endereçamento: `Egrégio Tribunal de Justiça — Colenda Câmara Criminal` (estadual) ou `Egrégio Tribunal Regional Federal — Colenda Turma Criminal` (federal).

**I — Dos Fatos:** resumo da situação fática.

**II — Do Direito:**
- **Do Cabimento** — a decisão atacada é do juiz da execução (art. 66 LEP) e é atacável por agravo (art. 197 LEP).
- **Da Preliminar** (se houver) — ex.: nulidade do PAD (procedimento administrativo disciplinar).
- **Do Mérito** — atacar a **incorreção da decisão** do juiz da execução. Ex.: se indeferiu a progressão de regime, demonstrar a presença dos requisitos legais (objetivo e subjetivo) para a progressão.

**III — Dos Pedidos** (conhecimento + provimento):
```
Diante do exposto, requer:
a) o conhecimento do recurso;
b) o acolhimento da preliminar de [...] (se houver);
c) no mérito, o provimento do recurso para [ex.: que o apenado seja beneficiado com a
   progressão de regime].
```

**Fechamento** padrão.

## Checklist final

- [ ] Peça **bipartida** (interposição à VEC + razões ao tribunal)?
- [ ] Verbo **INTERPOR** ("Recurso de Agravo em Execução"), em caixa alta?
- [ ] Fundamento: **art. 197 LEP** (forte no)?
- [ ] Tempestividade: **Súmula 700 STF** e/ou art. 586, caput, CPP (5 dias)?
- [ ] **Efeito regressivo** (retratação, art. 589) — porque segue o rito do RESE?
- [ ] Agravante = cliente; Agravado = MP?
- [ ] Mérito: incorreção da decisão do juiz da execução?
- [ ] Pedido de conhecimento + provimento?

## Lembretes finais

- **Ataca decisões do juiz da execução** (competência no art. 66 LEP).
- **Fundamento único: art. 197 LEP** — mas a LEP é omissa quanto a prazo/rito/forma → **segue o procedimento do RESE**.
- **Peça bipartida** — interposição (VEC) + razões (tribunal). **Verbo: interpor.**
- **Prazo: 5 dias** (Súmula 700 STF e/ou art. 586, caput, CPP).
- **EFEITO REGRESSIVO** (art. 589) — pede retratação, como no RESE.
- **Exceção do efeito suspensivo: art. 179 LEP** (desinternação/liberação de inimputável) — macete "troque os dois últimos números do 197".
- **Mérito = incorreção da decisão da execução.**

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
