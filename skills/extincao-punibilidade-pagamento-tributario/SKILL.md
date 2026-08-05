---
name: extincao-punibilidade-pagamento-tributario
description: >-
  Use ao elaborar pedido estruturado das 'válvulas' do CRIME TRIBUTÁRIO: extinção da punibilidade
  pelo PAGAMENTO INTEGRAL do débito a qualquer tempo (art. 9º, §2º, Lei 10.684/03; art. 83, Lei
  9.430/96), SUSPENSÃO da pretensão punitiva pelo PARCELAMENTO e trancamento/sobrestamento por
  ausência de CONSTITUIÇÃO DEFINITIVA do crédito (Súmula Vinculante 24), em pedidos sucessivos.
  Gatilhos: extinção da punibilidade pelo pagamento… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-extincao-punibilidade-pagamento-tributario"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["extincao-punibilidade-pagamento-tributario", "extincao punibilidade", "pagamento tributario"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Extinção da Punibilidade pelo Pagamento — Crimes Tributários (pedidos sucessivos)

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

Esta skill orienta a construção do **pedido estruturado das "válvulas" do crime tributário**: a **extinção da punibilidade pelo pagamento integral** do débito, a **suspensão da pretensão punitiva pelo parcelamento** e o **trancamento/sobrestamento por ausência de constituição definitiva do crédito** (Súmula Vinculante 24) — as três alavancas que resolvem ou adiam a maioria das persecuções fiscais. Ela preenche uma lacuna deliberada: a best-practice **`defesa-crimes-tributarios`** entrega as **teses** (frentes 1 e 2 do playbook); aqui está a **estrutura forense** — cabimento, pedidos sucessivos, checklist documental e modelo de peça. A skill irmã **`extincao-punibilidade-prescricao`** cobre a outra porta do art. 107 do CP (a prescrição); esta cobre a porta **específica do nicho fiscal**.

> **Lição central:** no crime tributário, quem controla o **crédito tributário** controla o **processo penal**. Débito ainda não constituído definitivamente = não há crime material (SV 24); débito parcelado e em dia = pretensão punitiva suspensa; débito quitado integralmente = punibilidade extinta. A peça só convence com a **prova documental do estado do crédito** — pedido de extinção sem certidão PGFN/RFB é pedido fadado ao indeferimento.

> **Divisão de trabalho:** as teses e suas mitigações vêm da best-practice **`defesa-crimes-tributarios`** e das fichas **TRI-001 a TRI-010** do acervo (`acervo/teses-modelos/crime-tributarios.md`) — consulte-as **sempre** antes de redigir. Esta skill transforma a tese em peça.

## O instituto e a base legal

Diferentemente da prescrição (CP 107, IV — ver skill `extincao-punibilidade-prescricao`), a extinção pelo pagamento é criação de **legislação extravagante**, em camadas sucessivas que a defesa deve conhecer para invocar a mais favorável:

| Diploma | O que estabelece | Nota crítica |
|---|---|---|
| **Lei 9.249/95, art. 34** | Pagamento **antes do recebimento da denúncia** extingue a punibilidade | Marco histórico; amplitude superada pelas leis posteriores |
| **Lei 9.430/96, art. 83** (redação da Lei 12.382/2011) | Representação fiscal para fins penais só após **decisão final no PAF**; **parcelamento** formalizado **antes do recebimento da denúncia** suspende a pretensão punitiva; durante a suspensão **não corre a prescrição**; **pagamento integral** extingue a punibilidade | Confira a redação e os parágrafos exatos via **lei-e-sumula** antes de citar — o artigo foi remodelado mais de uma vez |
| **Lei 10.684/03, art. 9º, §2º** | Pagamento integral extingue a punibilidade — a leitura consolidada na prática é **"a qualquer tempo"**, por ausência de marco temporal no dispositivo | O alcance máximo (mesmo após sentença ou trânsito em julgado) é construção jurisprudencial: pesquise via **jurisprudencia-stj-stf**, verifique com **verificador-citacoes** e marque [NÃO VERIFICADO] o que não confirmar |
| **Lei 11.941/09, arts. 68-69** | Parcelamento suspende a pretensão punitiva e a prescrição; pagamento integral extingue | Mesma cautela de redação — conferir via **lei-e-sumula** |
| **Súmula Vinculante 24 (STF)** | Crime **material** contra a ordem tributária (Lei 8.137/90, art. 1º, I a IV) **não se tipifica antes do lançamento definitivo** do tributo | Consolidada; atenção às **mitigações** (TRI-008/009/010) |

**Crimes alcançados pelas válvulas do pagamento** (art. 9º, *caput*, da Lei 10.684/03): Lei 8.137/90, **arts. 1º e 2º**; CP, **art. 168-A** (apropriação indébita previdenciária) e **art. 337-A** (sonegação previdenciária).

**Crimes NÃO alcançados — não formule o pedido:**

| Crime | Por quê |
|---|---|
| **Descaminho (CP 334)** | Pagamento **não** extingue a punibilidade (TRI-004) e a SV 24 **não** se aplica (dispensa constituição definitiva — TRI-003); a válvula defensiva do descaminho é a **insignificância** — patamar jurisprudencial a confirmar via **jurisprudencia-stj-stf**, enfrentando as fichas **contrárias** TRI-001 (contumácia afasta) e TRI-002 (parâmetro restritivo) |
| **Contrabando (CP 334-A)** | Bem jurídico além do tributo (ex.: TRI-005); nem pagamento, nem insignificância — confirmar o estado atual via **jurisprudencia-stj-stf** |
| **Lavagem conexa (Lei 9.613/98)** | **Autônoma**: a extinção da punibilidade do crime tributário antecedente **não a arrasta** (TRI-007) — trate como contenção de danos separada |

## As três válvulas — requisitos e efeitos

| Válvula | Requisito | Efeito | Momento |
|---|---|---|---|
| **SV 24** (falta de constituição definitiva) | PAF pendente (impugnação, recurso ao CARF) em crime **material** do art. 1º | **Falta de justa causa** → trancamento (HC) ou rejeição da denúncia; a prescrição **nem começou a correr** (o crime não se consumou) | Enquanto não houver decisão final administrativa |
| **Parcelamento** | Adesão formalizada e parcelas **em dia**; pela regra do art. 83 da Lei 9.430/96, formalização **antes do recebimento da denúncia** | **Suspensão** da pretensão punitiva **e da prescrição** — o processo congela, não morre | Durante a vigência do parcelamento; exclusão por inadimplência **retoma** a persecução |
| **Pagamento integral** | Quitação de **todo** o débito — tributo + **multa + juros + encargos**, comprovada por certidão | **Extinção da punibilidade** — mata a ação penal | "A qualquer tempo" na leitura ampla do art. 9º, §2º, da Lei 10.684/03 — alcance após sentença/trânsito: **confirmar** via jurisprudencia-stj-stf |

> **Controvérsia central a mapear antes de redigir:** convivem o regime do art. 83 da Lei 9.430/96 (com marco temporal no recebimento da denúncia para o **parcelamento**) e o do art. 9º da Lei 10.684/03 (sem marco para o **pagamento**). Qual prevalece para adesões e quitações tardias é disputa viva — pesquise o estado atual via **jurisprudencia-stj-stf** e marque [NÃO VERIFICADO] o que não confirmar. No **ICMS declarado e não recolhido** (tese do RHC 163.334/STF referida na best-practice — confirmar inteiro teor), o pagamento segue extinguindo: a válvula vale também para o art. 2º, II.

## Cabimento — onde e como arguir

| Situação | Veículo | Endereçamento |
|---|---|---|
| Inquérito/PIC instaurado com PAF pendente | **Habeas corpus** para trancamento (SV 24) — ver skill `habeas-corpus`; exige **prova documental pré-constituída** do PAF pendente | Depende da **autoridade coatora**: delegado → juiz de 1º grau; juiz ou membro do MP → Tribunal respectivo |
| Denúncia oferecida e ainda não recebida | **Manifestação prévia** arguindo rejeição (CPP 395, II e III) | Juízo da causa |
| Ação penal em curso | **Petição autônoma** nos autos (esta skill) ou preliminar de resposta à acusação | Juízo onde tramita o feito |
| Processo em grau recursal | Petição ao **relator** (matéria de ordem pública — extinção da punibilidade é cognoscível a qualquer tempo, art. 61 do CPP) | Relator no Tribunal |
| Após trânsito em julgado (pagamento tardio, na leitura ampla) | Petição ao **juízo da execução** (LEP 66, II) — tese a confirmar via jurisprudencia-stj-stf | Vara de Execuções Penais |

## Checklist documental (o coração da peça)

Sem estes documentos, não protocole:

- [ ] **Certidão PGFN/RFB** do estado do débito: quitação/extinção do crédito (pagamento), situação "parcelamento ativo e em dia" (suspensão) ou "crédito com exigibilidade suspensa / PAF pendente" (SV 24);
- [ ] **Comprovantes de pagamento** (DARF/GPS/DAS) vinculados ao débito objeto da denúncia — número do PAF/auto de infração deve **coincidir** com o descrito na inicial acusatória;
- [ ] **Extrato do parcelamento** (portal REGULARIZE/e-CAC): termo de adesão, número de parcelas, comprovantes das parcelas pagas, ausência de exclusão;
- [ ] **Andamento do PAF**: cópia da impugnação/recurso, última movimentação no CARF/DRJ, certidão de que **não há decisão final**;
- [ ] Cópia do **auto de infração** e da representação fiscal para fins penais (para conferir a correspondência débito ↔ denúncia);
- [ ] Procuração e peças processuais de praxe.

> **Pegadinha documental nº 1:** DARF isolado **não prova integralidade**. O juízo (e o MP) só se convencem com a **certidão do Fisco** atestando a extinção do crédito. Peça a certidão antes de peticionar — ou requeira, na própria peça, a **intimação da Fazenda** para atestar a quitação.

## Estrutura da petição (pedidos sucessivos)

A força da peça está na **ordem estratégica**: formule as válvulas em cascata, da mais definitiva disponível para as subsidiárias. Quem pagou pede extinção; quem parcela pede suspensão; quem discute o crédito pede trancamento/sobrestamento — e é legítimo **cumular** em pedidos sucessivos quando os estados convivem (ex.: parte do débito quitada, parte em discussão).

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]  [ou: Federal, se tributo federal]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a) nos autos em epígrafe, por seu(sua) advogado(a)
(procuração anexa), vem, respeitosamente, requerer a EXTINÇÃO DA
PUNIBILIDADE PELO PAGAMENTO INTEGRAL DO DÉBITO TRIBUTÁRIO e, sucessivamente,
a SUSPENSÃO DA PRETENSÃO PUNITIVA PELO PARCELAMENTO e o RECONHECIMENTO DA
AUSÊNCIA DE JUSTA CAUSA por falta de constituição definitiva do crédito
(SV 24), pelas razões a seguir:

I — DO ESTADO DO CRÉDITO TRIBUTÁRIO (fatos documentados)
Tabela: débito da denúncia (PAF/auto de infração nº, valor) — estado atual
(quitado / parcelado em dia / em discussão administrativa) — documento
comprobatório (certidão PGFN/RFB, DARF, extrato, andamento do CARF).

II — DO DIREITO
   1. [PRINCIPAL — se quitado] Da extinção da punibilidade pelo pagamento
      integral (art. 9º, §2º, Lei 10.684/03; art. 83, Lei 9.430/96)
      [identidade débito ↔ denúncia; integralidade com multa e juros;
      certidão do Fisco; alcance temporal do pagamento no caso concreto].
   2. [SUCESSIVO — se parcelado] Da suspensão da pretensão punitiva e da
      prescrição pelo parcelamento em vigor
      [data da adesão × data do recebimento da denúncia; parcelas em dia;
      pedido de sobrestamento enquanto vigente].
   3. [SUCESSIVO/PRELIMINAR — se PAF pendente] Da ausência de justa causa —
      falta de constituição definitiva do crédito (SV 24)
      [crime material do art. 1º; PAF pendente documentado; enfrentar
      desde logo as mitigações — inexistência de fraude estruturada ou
      de crime não tributário conexo (TRI-008/009/010)].
   4. Do caráter de ordem pública da extinção da punibilidade (CPP, art. 61).

III — DOS PEDIDOS (sucessivos)
   a) a EXTINÇÃO DA PUNIBILIDADE pelo pagamento integral, com as baixas
      e comunicações de praxe;
   b) sucessivamente, a SUSPENSÃO da pretensão punitiva e do prazo
      prescricional enquanto vigente o parcelamento, com sobrestamento;
   c) sucessivamente, o RECONHECIMENTO DA AUSÊNCIA DE JUSTA CAUSA (SV 24),
      com [rejeição da denúncia / absolvição sumária / sobrestamento até
      a decisão final do PAF];
   d) subsidiariamente, a intimação da PGFN/RFB para certificar o estado
      atual do débito, caso este juízo repute insuficiente a prova anexa.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

## Teses típicas da prática

- **Pagamento integral após o recebimento da denúncia** — a aplicação mais comum do art. 9º, §2º, da Lei 10.684/03: quitação no curso do processo mata a ação penal.
- **Pagamento após a sentença condenatória (antes ou depois do trânsito)** — leitura ampla do "a qualquer tempo"; é a tese de maior impacto e a mais dependente de precedente atual: **pesquise via jurisprudencia-stj-stf e marque [NÃO VERIFICADO]** o que não confirmar.
- **Parcelamento em dia = processo congelado** — suspensão da pretensão punitiva **e** da prescrição; útil para ganhar tempo, negociar transação e quitar ao final com extinção.
- **SV 24 como preliminar de mérito zero** — denúncia por crime material do art. 1º com recurso pendente no CARF: não há crime consumado, não há justa causa; via rápida é o **HC trancativo** (skill `habeas-corpus`).
- **Quitação parcial dirigida** — em denúncia com múltiplos débitos/exercícios, quitar integralmente **um** dos débitos e pedir extinção **parcial** (débito a débito), reduzindo a imputação remanescente.
- **Pagamento por terceiro (pessoa jurídica ou corréu)** — a lei fala em pagamento pela "pessoa física ou jurídica relacionada com o agente": sustente o caráter **objetivo** da causa extintiva, aproveitando a todos os denunciados pelo mesmo débito — alcance a confirmar via **jurisprudencia-stj-stf** e marcar [NÃO VERIFICADO] se não confirmar.
- **ICMS declarado (art. 2º, II)** — mesmo na tese da criminalização da contumácia, o pagamento/parcelamento segue operando; muitas vezes é a saída mais barata que a discussão da tipicidade.
- **Combinação com a prescrição** — extinta a exigibilidade de um débito e reduzido o objeto do processo, recalcule a prescrição do que sobrou (skill `extincao-punibilidade-prescricao`) — mas **desconte a suspensão** do período de parcelamento.

## Erros comuns e pegadinhas

- **Pagamento parcial tratado como integral** — a extinção exige a quitação de **todo** o débito, com multa, juros e encargos; saldo residual mínimo derruba o pedido. Confirme a integralidade pela **certidão**, não pela soma dos comprovantes.
- **Confundir suspensão com extinção** — parcelamento **suspende**; só a quitação da última parcela **extingue**. Não prometa ao cliente a morte do processo na adesão ao REFIS/PERT.
- **Esquecer que a prescrição congela junto** — durante o parcelamento **não corre prescrição**; tese prescricional montada sem descontar esse período será desmontada pelo MP (articular com `extincao-punibilidade-prescricao`).
- **Formular a válvula no crime errado** — pagamento não extingue **descaminho** (TRI-004); insignificância não vale para **contrabando**; SV 24 não se aplica aos crimes **formais** do art. 2º nem ao descaminho/contrabando (TRI-003). Cada figura tem a sua válvula — errar aqui queima a credibilidade da defesa.
- **HC trancativo sem prova pré-constituída** — o writ não admite dilação probatória: sem a certidão/andamento do PAF **anexos**, o Tribunal não conhece; monte o dossiê documental antes de impetrar.
- **Ignorar as mitigações da SV 24** — fraude estruturada (empresas de fachada, laranjas — TRI-008), crimes não tributários conexos (TRI-009) e investigação complexa (TRI-010) autorizam a persecução antes do lançamento; a peça séria **enfrenta** as mitigações em vez de fingir que não existem.
- **Supor que a extinção arrasta a lavagem** — a lavagem conexa é **autônoma** e pode subsistir (TRI-007); alinhe a expectativa do cliente e prepare a frente própria de defesa.
- **Descasamento débito ↔ denúncia** — comprovante de pagamento de PAF diferente do descrito na inicial não extingue nada; confira número do auto de infração, exercícios e tributos, item a item.
- **Transação tributária com desconto tratada como pagamento integral sem verificação** — a quitação por transação (Lei 13.988/2020) com redução de multa/juros extingue a punibilidade? A resposta depende de precedente atual: **pesquise via jurisprudencia-stj-stf** antes de afirmar; dispositivo e regulamentação, confira via **lei-e-sumula**.
- **Marco temporal do parcelamento ignorado** — pela regra do art. 83 da Lei 9.430/96 (redação da Lei 12.382/2011), a suspensão pressupõe adesão **antes do recebimento da denúncia**; para adesões posteriores, a viabilidade depende da controvérsia com a Lei 10.684/03 — mapeie antes de prometer o sobrestamento.
- **Exclusão do parcelamento não monitorada** — inadimplência gera exclusão e **retomada** da persecução (com prescrição voltando a correr); a suspensão exige vigilância contínua das parcelas.
- **Endereçamento errado** — em grau recursal, a petição vai ao **relator**; após o trânsito (na tese do pagamento tardio), ao **juízo da execução** (LEP 66, II). Não há preclusão — extinção da punibilidade é matéria de ordem pública (CPP 61) —, mas peça no juízo errado perde meses.
- **Pedir "absolvição" em vez de extinção** — o efeito técnico é a **extinção da punibilidade** (declaratória), não absolvição de mérito; o dispositivo pedido deve ser o correto.
- **Citar precedente de memória** — números de HC/REsp/Temas **nunca** de memória: consulte o acervo (fichas TRI-xxx), pesquise via **jurisprudencia-stj-stf** e verifique com **verificador-citacoes**; marque [NÃO VERIFICADO] o que não confirmar. Redação atual do art. 83 da Lei 9.430/96 e do art. 9º da Lei 10.684/03: confira via **lei-e-sumula** antes de transcrever.

## Checklist antes de protocolar

- [ ] Crime alcançado pela válvula certa (art. 1º/2º da Lei 8.137, 168-A, 337-A × descaminho/contrabando/lavagem fora)?
- [ ] Estado do crédito documentado por **certidão PGFN/RFB** (não só comprovantes)?
- [ ] Identidade débito ↔ denúncia conferida (nº do PAF/auto de infração, exercícios, tributos)?
- [ ] Integralidade verificada (tributo + multa + juros + encargos)?
- [ ] Se parcelamento: adesão × recebimento da denúncia datados; parcelas em dia comprovadas; efeito sobre a prescrição explicado?
- [ ] Se SV 24: crime **material** do art. 1º confirmado; PAF pendente certificado; **mitigações enfrentadas** (TRI-008/009/010)?
- [ ] Pedidos em **cascata sucessiva** (extinção → suspensão → falta de justa causa) na ordem do caso concreto?
- [ ] Fichas TRI-001 a TRI-010 do acervo consultadas antes da web?
- [ ] Alcance temporal do pagamento (pós-sentença/trânsito) sustentado em precedente **verificado** — nada de memória?
- [ ] Endereçamento correto (juízo do feito / relator / VEC) e competência (estadual × federal) conferida?
- [ ] Nenhuma súmula/precedente citado de memória — tudo passou pelo **verificador-citacoes**?

## Lembretes finais

- **Certidão vale mais que argumento** — o estado do crédito documentado decide o pedido; a retórica só embala.
- **Extinção mata; suspensão congela; SV 24 nega o crime** — escolha a válvula do estado real do débito e prometa ao cliente o efeito certo.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes do protocolo.

## Apoie-se em

- **Best-practice `defesa-crimes-tributarios`** — referência **obrigatória**: playbook do nicho (SV 24 e mitigações, pagamento/parcelamento, descaminho, lavagem autônoma) que esta skill transforma em peça.
- **Fichas TRI-001 a TRI-010** do acervo (`acervo/teses-modelos/crime-tributarios.md`) — banco de teses verificadas com os precedentes de origem; consulte **antes** da web.
- **Skill `extincao-punibilidade-prescricao`** — padrão da peça de extinção da punibilidade e a interface com a prescrição (suspensão pelo parcelamento entra no cálculo).
- **Skill `habeas-corpus`** — veículo do trancamento pela SV 24 quando a via é o writ ao Tribunal.
- **Agente `lei-e-sumula`** — conferência de vigência e redação (art. 83 da Lei 9.430/96, art. 9º da Lei 10.684/03, Lei 13.988/2020) antes da citação.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais (alcance temporal do pagamento, parcelamento tardio, transação com desconto, RHC 163.334) antes de citar qualquer julgado.
- **Agente `verificador-citacoes`** — gate final: nenhuma citação entra na peça sem verificação; o que não confirmar recebe [NÃO VERIFICADO].

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
