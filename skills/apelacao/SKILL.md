---
name: apelacao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de APELAÇÃO no processo penal
  brasileiro — o recurso ordinário por excelência, que ataca sentenças definitivas de condenação ou
  absolvição. Gatilhos: apelação, recurso de apelação, apelar, razões de apelação, art. 593 CPP,
  art. 416 CPP (impronúncia e absolvição sumária no júri), art. 82 da Lei…. Não use para decisão
  final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-apelacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["apelacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Apelação

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

Esta skill orienta a construção da peça criminal de **Apelação**, o recurso ordinário por excelência, conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais".

> **Lição central:** *"Quem sabe fazer memoriais, sabe fazer a apelação. A lógica é exatamente a mesma. Aquilo que você alegou nos seus memoriais, você vai alegar também na sua apelação."*

## Cabimento — mapa das manifestações judiciais

Fixe o mapa mental das manifestações judiciais:
- **(a) Despachos de mero expediente** — em regra irrecorríveis (quando muito, correição parcial em caso de inversão tumultuária dos atos processuais).
- **(b) Decisões interlocutórias** — simples ou mistas; as mistas podem ser terminativas (definitivas) ou não terminativas (com força de definitivas). Atacadas pelo **RESE** quando previstas no art. 581 CPP (ou por interpretação extensiva, art. 3º CPP).
- **(c) Sentenças definitivas de condenação ou absolvição** — atacadas pela **APELAÇÃO**.

### As hipóteses de cabimento

**No CPP:**
- **Art. 593, I** — sentenças definitivas de condenação ou absolvição proferidas por juiz singular.
- **Art. 593, II** — decisões definitivas, ou com força de definitivas, proferidas por juiz singular, **não previstas no capítulo do RESE** (não constantes do art. 581).
- **Art. 593, III, "a"/"b"/"c"/"d"** — decisões do Tribunal do Júri.
- **Art. 416** — sentença de **impronúncia** ou de **absolvição sumária** (1ª fase do júri).

**No JECRIM:**
- **Art. 82 da Lei 9.099/95** — rejeição da denúncia/queixa e sentença (condenatória ou absolutória), nas infrações de menor potencial ofensivo (todas as contravenções + crimes com pena máxima até 2 anos).

### A apelação no Tribunal do Júri (art. 593, III)

- **"a" — nulidade posterior à pronúncia:** provimento → **novo júri**.
- **"b" — sentença do presidente contrária à lei expressa ou à decisão dos jurados:** o tribunal *ad quem* retifica (§1º). **Sem novo júri.**
- **"c" — erro ou injustiça na aplicação da pena/medida de segurança:** o tribunal *ad quem* retifica (§2º). **Sem novo júri.**
- **"d" — decisão dos jurados manifestamente contrária à prova dos autos:** provimento → **novo júri**, mas apenas **um** (§3º: não se admite segunda apelação pelo mesmo motivo).

> **Súmula 713 STF:** *"O efeito devolutivo da apelação contra decisões do júri é adstrito aos fundamentos da sua interposição."* Regra geral, o efeito devolutivo (*tantum devolutum quantum appellatum*) vem limitado **nas razões**; na apelação do júri, a limitação está **na interposição**.

### Macete consoante/vogal (1ª fase do júri)

**Consoante anda com consoante, vogal com vogal:**
- **P**ronúncia → **R**ESE (581, IV); **D**esclassificação → **R**ESE (581, II).
- **I**mpronúncia → **A**pelação (416); **A**bsolvição sumária → **A**pelação (416).

## Prazos — CPP × JECRIM

| Diploma | Prazo | Sistemática |
|---|---|---|
| **CPP** (art. 593, *caput*) | **5 dias** | Interpor em 5 dias e, após intimação, juntar razões em **8 dias** (art. 600, *caput*); **ou** interpor já com razões, tudo em 5 dias |
| **JECRIM** (art. 82, §1º, Lei 9.099) | **10 dias** | **Tudo junto** — interposição com razões |

> **Cuidado:** na 9.099 **não existe** interpor primeiro e juntar razões depois. Interposição **com** razões, tudo em 10 dias, sob pena de não conhecimento.

## Princípio orientador

**Não há efeito regressivo na apelação** (ao contrário do RESE e do agravo em execução). Não se pede retratação. As teses subsidiárias regem-se pelo **princípio da eventualidade**.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Interposição**, dirigida ao **juiz** que prolatou a decisão; (2) **razões**, endereçadas ao **tribunal**. Folhas separadas.

### PRIMEIRA PARTE — Interposição

**Endereçamento:** `Ao Juízo da [N]ª Vara Criminal da Comarca de [...]` (moderna, art. 319, I, CPC + art. 3º CPP) ou `Excelentíssimo Senhor Doutor Juiz de Direito da [...]` (tradicional). Estadual → juiz de direito; federal → juiz federal.

**Preâmbulo:** nome + `já qualificado nos autos da ação penal que lhe move o Ministério Público` + `por intermédio do(a) advogado(a) que ao final subscreve (procuração anexada no evento/folha [...])` + `vem, respeitosamente, à presença de Vossa Excelência,` + **tempestividade** + verbo **INTERPOR** + nome em caixa alta + fundamento.

**Tempestividade** (primeira menção: por extenso + sigla; depois só CPP):
- `no prazo legal de 5 (cinco) dias, conforme art. 593, caput, do Código de Processo Penal (CPP)` — CPP
- `no prazo legal de 10 (dez) dias, conforme art. 82, §1º, da Lei 9.099/95` — JECRIM

**Verbo: INTERPOR** + `RECURSO DE APELAÇÃO` (caixa alta) + fundamento com **"forte no"** (evitando repetir "com fundamento"):
- `art. 593, I, do CPP` (sentença condenatória/absolutória)
- `art. 593, III, "a"/"b"/"c"/"d", do CPP` (júri)
- `art. 416 do CPP` (impronúncia/absolvição sumária)
- `art. 82, caput, da Lei 9.099/95` (JECRIM)

**Requerimento:** `Requer seja o presente recurso recebido e processado com as anexas razões, remetendo-se os autos à superior instância [Tribunal de Justiça / Tribunal Regional Federal / Turma Recursal].`

**Fechamento:** `Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### SEGUNDA PARTE — Razões (nova folha)

Cabeçalho: `Razões de Apelação`.
- `Apelante: [nome do cliente]` / `Apelado: o Ministério Público` (ou querelante).

Endereçamento ao tribunal:
- **Estadual:** `Egrégio Tribunal de Justiça — Colenda Câmara Criminal`
- **Federal:** `Egrégio Tribunal Regional Federal — Colenda Turma Criminal`
- **JECRIM (IMPO):** `Egrégia Turma Recursal — Ilustres Julgadores`

**I — Dos Fatos:** resumo da situação fática (MP denunciou; após instrução, sobreveio sentença condenatória; inconformado, apela).

**II — Do Direito** ("melhor dos mundos" — adaptar ao caso):
- **Do Cabimento** — explicar por que cabe a apelação (sentença definitiva, art. 593/416/82).
- **Das Preliminares** (se houver) — nulidades (art. 564 CPP; art. 5º, LV e LVI, CF — ampla defesa, prova ilícita); incompetência absoluta; **falta de instituto despenalizador** (macete **TAS**: **T**ransação penal, **A**NPP, **S**uspensão condicional do processo); **prescrição/extinção da punibilidade** (que na apelação é **preliminar** — só na RA é mérito, art. 397, IV, CPP). Exemplos concretos de nulidade que o professor cita: **inversão da ordem de inquirição** — o interrogatório é o **último ato** da AIJ (art. 400 CPP, em nome da ampla defesa); ouvir testemunha de defesa antes da acusação, sem concordância da defesa e fora de precatória, é **nulidade absoluta** (a ampla defesa prevalece sobre a especialidade, mesmo na Lei de Drogas, art. 57); **excesso de prazo** gerando constrangimento ilegal (que, quanto à prisão, enseja **relaxamento**, não revogação).
- **Do Mérito (teses principais)** — em regra ligadas à **teoria do crime**: exclusão da **atipicidade** (insignificância, crime impossível, erro de tipo); exclusão da **ilicitude** (legítima defesa, estado de necessidade, estrito cumprimento de dever legal, exercício regular de direito); exclusão da **culpabilidade** (doença mental, embriaguez acidental completa — art. 28, §1º, CP, erro de proibição, coação moral irresistível). Ancorar a absolvição no **art. 386 CPP**.
- **Das Teses Subsidiárias** — em regra ligadas à **teoria da pena**, sob o **princípio da eventualidade**: pena-base no mínimo, atenuantes/minorantes, regime diverso do fechado, substituição da PPL por PRD, *sursis* (art. 77 CP), desclassificação.

**III — Dos Pedidos** (sempre **conhecimento + provimento**):
```
Ante o exposto, requer o conhecimento e o provimento do presente Recurso de Apelação para:
a) o acolhimento da preliminar de [ex.: prescrição] (se houver);
b) no mérito, a absolvição do réu com fundamento no art. 386, [inciso], do CPP
   [ex.: VI, pois agiu em legítima defesa];
c) na eventualidade de não vir a ser absolvido, [tese subsidiária — ex.: fixação da pena
   no mínimo legal, pois primário e de bons antecedentes].
```

**Fechamento** padrão.

## Checklist final

- [ ] Peça **bipartida** (interposição ao juiz + razões ao tribunal)?
- [ ] Verbo **INTERPOR**; nome em caixa alta; **"forte no"** no fundamento?
- [ ] Fundamento correto (593, I / 593, III / 416 / 82 da 9.099)?
- [ ] Prazo correto (5 dias CPP × 10 dias JECRIM — JECRIM tudo junto)?
- [ ] **Sem efeito regressivo**?
- [ ] Razões: ordem lógica (cabimento → preliminares → mérito/teoria do crime → subsidiárias/teoria da pena)?
- [ ] Mérito ancorado no art. 386 CPP?
- [ ] Pedido de **conhecimento + provimento**?
- [ ] No júri, atenção à Súmula 713 STF (limitação na interposição) e a quando há novo júri?

## Lembretes finais

- **Recurso ordinário por excelência** — ataca sentenças definitivas.
- **Peça bipartida** — interposição (juiz) + razões (tribunal). **Verbo: interpor.**
- **Sem efeito regressivo** (diferente do RESE e do agravo em execução).
- **Prazo: 5 dias (CPP) × 10 dias (JECRIM)** — no JECRIM tudo junto.
- **Quem sabe memoriais sabe apelação.**
- **Teses de mérito = teoria do crime; teses subsidiárias = teoria da pena** (eventualidade).
- **Súmula 713 STF** — no júri, efeito devolutivo limitado na interposição.
- **Macete consoante/vogal** — pronúncia/desclassificação → RESE; impronúncia/absolvição sumária → apelação.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
