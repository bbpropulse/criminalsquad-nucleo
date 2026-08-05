---
name: sursis-da-pena
description: >-
  Use ao postular ou defender a suspensão condicional da PENA (sursis — arts. 77 a 82 do CP) na
  sentença, em apelação ou na execução penal: requisitos, espécies (simples, especial, etário,
  humanitário), condições do art. 78, audiência admonitória, revogação obrigatória/facultativa (art.
  81), prorrogação do período de prova e extinção da pena (art. 82). Gatilhos: sursis, sursis da
  pena, suspensão condicional da pena, suspensão… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-sursis-da-pena"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["sursis-da-pena", "sursis pena"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Sursis da Pena (suspensão condicional da execução da pena — arts. 77 a 82 do CP)

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

Esta skill orienta o pedido e a defesa do **sursis da pena**: benefício que, na condenação a pena privativa de liberdade **aplicada** não superior a 2 anos (ou 4, nas espécies etária e humanitária), **suspende a execução da pena** por um período de prova de 2 a 4 anos (ou 4 a 6), mediante condições; expirado o prazo sem revogação, a **pena é extinta** (art. 82 do CP). Cobre o pedido na sentença, em apelação e na execução, a audiência admonitória, as causas de revogação e a extinção.

> **Lição central:** não confunda com a **suspensão condicional do PROCESSO** (art. 89 da Lei 9.099/95). O sursis processual atua **antes da instrução**, olha a pena **mínima cominada** (≤ 1 ano) e evita a própria condenação; o sursis da pena atua **depois da condenação**, olha a pena **concreta aplicada** (≤ 2 anos) e suspende apenas a **execução**. A skill `suspensao-condicional-processo` trata do primeiro; esta, do segundo. O quadro de contraste abaixo é de uso obrigatório quando houver risco de confusão nos autos.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 77 a 82 do CP e dos arts. 156 a 163 da LEP via agente `lei-e-sumula`. Para qualquer precedente atual (prorrogação automática e subsistência das condições, sursis em violência doméstica, vedações de leis especiais), **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até a conferência. Não cite número de julgado de memória.

## Instituto e base legal

- **CP, arts. 77 a 82** — requisitos, espécies, condições, revogação, prorrogação e extinção.
- **LEP, arts. 156 a 163** — execução do sursis: dever de o juiz ou tribunal **pronunciar-se motivadamente** na sentença, quer conceda, quer denegue (art. 157); audiência admonitória (art. 160); cassação por não comparecimento (art. 161).
- **LEP, art. 66, III, "d"** — após o trânsito em julgado, compete ao **juízo da execução** decidir sobre o sursis (concessão superveniente, fiscalização, revogação, extinção).
- **CPP, arts. 696 e seguintes** — disciplina residual, no que não derrogada pela LEP.

Prevalece na doutrina que, presentes os requisitos, o sursis é **direito subjetivo do condenado** — a denegação exige fundamentação concreta e idônea. O benefício é **subsidiário**: só incide quando **não indicada ou não cabível** a substituição por restritivas de direitos do art. 44 do CP (art. 77, III) — em regra a PRD é mais benéfica e vem primeiro na cadeia de pedidos.

## Quadro de contraste — sursis da pena × sursis processual

| Eixo | Sursis da pena (CP, arts. 77-82) | Sursis processual (art. 89, Lei 9.099/95) |
|---|---|---|
| **Momento** | Na sentença condenatória, em grau de recurso ou na execução | Após o recebimento da denúncia, antes da instrução |
| **Critério** | Pena **aplicada** ≤ 2 anos (≤ 4 no etário/humanitário) | Pena **mínima cominada** ≤ 1 ano |
| **Pressuposto** | Condenação (que subsiste) | Não há condenação |
| **Objeto suspenso** | A **execução da pena** | O **processo** |
| **Efeito do cumprimento** | Extinção da **pena** (art. 82); a condenação permanece para reincidência e antecedentes | Extinção da **punibilidade** sem condenação, sem reincidência |
| **Período de prova** | 2 a 4 anos (4 a 6 no etário/humanitário) | 2 a 4 anos |

## Requisitos (art. 77 do CP) — cumulativos

1. **Pena privativa de liberdade aplicada ≤ 2 anos** (*caput*) — é a pena **concreta** da sentença, não a cominada; a viabilidade do sursis se decide, portanto, na **dosimetria** (acione o agente `dosimetria-pena`).
2. **Não reincidência em crime doloso** (inciso I). Três aberturas defensivas: (a) condenação anterior **só a multa não impede** o benefício (art. 77, §1º; **Súmula 499/STF**); (b) reincidência em crime **culposo** ou em **contravenção** não obsta; (c) decorrido o **período depurador de 5 anos** do art. 64, I, do CP, a condenação anterior não gera reincidência.
3. **Circunstâncias judiciais favoráveis** (inciso II) — culpabilidade, antecedentes, conduta social, personalidade, motivos e circunstâncias devem **autorizar** a concessão. Denegação apoiada em **gravidade abstrata** do delito ou em elementos já valorados na dosimetria é fundamentação inidônea — impugne.
4. **Não caber a substituição do art. 44** (inciso III) — o sursis é a via **residual**: p. ex., crime com violência ou grave ameaça (que veda a PRD) e pena ≤ 2 anos.

**Regras especiais de teto** (confira a vigência via `lei-e-sumula`):
- **Contravenções:** prisão simples, período de prova de 1 a 3 anos (art. 11 da LCP).
- **Crimes ambientais:** sursis para condenação **≤ 3 anos** (art. 16 da Lei 9.605/98).
- **Vedações de leis especiais:** o art. 44 da Lei 11.343/2006 veda o sursis ao tráfico e figuras conexas — há controvérsia sobre a subsistência da vedação; **pesquise o estado atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** antes de sustentar a tese.

## Espécies e período de prova

| Espécie | Base | Pressupostos próprios | Período de prova | Condição do 1º ano |
|---|---|---|---|---|
| **Simples** | art. 78, §1º | requisitos gerais do art. 77 | 2 a 4 anos | prestação de serviços à comunidade (art. 46) **ou** limitação de fim de semana (art. 48) |
| **Especial** | art. 78, §2º | dano **reparado** (salvo impossibilidade) **+** circunstâncias do art. 59 **inteiramente favoráveis** | 2 a 4 anos | substitui-se o §1º pelas condições cumulativas das alíneas *a*, *b* e *c* (mais brandas) |
| **Etário** | art. 77, §2º | condenado **maior de 70 anos** e pena ≤ **4 anos** | 4 a 6 anos | art. 78, §1º (ou as do §2º, se preenchidos os pressupostos do especial) |
| **Humanitário** | art. 77, §2º, parte final | **razões de saúde** justificarem e pena ≤ **4 anos** | 4 a 6 anos | art. 78, §1º (ou as do §2º, se preenchidos os pressupostos do especial) |

**Condições:** além das legais do art. 78, o juiz pode especificar **outras condições** adequadas ao fato e à situação pessoal (art. 79) e a LEP permite **modificá-las a qualquer tempo** (art. 158, §2º) — porta para pedir o abrandamento. Impugne condição desproporcional ou que transforme o sursis em pena mais gravosa que a própria reprimenda suspensa. **O sursis não alcança as penas restritivas de direitos nem a multa** (art. 80): a multa continua exigível.

## Audiência admonitória — o sursis só produz efeitos depois dela

- Transitada em julgado a condenação, o juiz **lê a sentença ao condenado em audiência**, advertindo-o das consequências de nova infração e do descumprimento das condições (art. 160 da LEP).
- **Termo inicial do período de prova:** prevalece que é a **audiência admonitória** (não o trânsito em julgado) — impacta diretamente a contagem da extinção do art. 82.
- **Cassação:** se, intimado pessoalmente ou por edital com prazo de 20 dias, o condenado **não comparece injustificadamente**, a suspensão **fica sem efeito** e executa-se de imediato a pena (art. 161 da LEP). **Oriente o cliente**: faltar à admonitória custa o benefício.
- **Recusa:** o condenado pode **recusar** o sursis (p. ex., por preferir discutir a pena em regime aberto ou aguardar recurso) — a aceitação das condições é ato do beneficiário; documente a decisão informada.

## Revogação (art. 81), prorrogação e extinção (art. 82)

| Regime | Hipóteses | Efeito |
|---|---|---|
| **Revogação obrigatória** (art. 81, I a III) | (I) condenação **irrecorrível por crime doloso** no curso do prazo; (II) frustração, **embora solvente**, da execução da multa **ou** não reparação injustificada do dano; (III) descumprimento da condição do art. 78, §1º | O juiz **deve** revogar |
| **Revogação facultativa** (art. 81, §1º) | descumprimento de **qualquer outra condição**; condenação irrecorrível, por **crime culposo ou contravenção**, a pena privativa de liberdade ou restritiva | O juiz **pode** revogar — ou, em vez disso, **prorrogar o prazo até o máximo**, se não era o fixado (art. 81, §3º) |
| **Prorrogação automática** (art. 81, §2º) | beneficiário **processado** por outro crime ou contravenção no curso do prazo | Prazo prorrogado **ope legis** até o julgamento definitivo |

Frentes defensivas no incidente de revogação:

- **Contraditório prévio:** sustente a necessidade de **oitiva do condenado antes da revogação**, com oportunidade de justificar o descumprimento (pesquise o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]).
- **Multa frustrada (art. 81, II):** após a Lei 9.268/96 (multa inconversível em prisão e tratada como dívida de valor), há tese consistente de **inaplicabilidade da revogação** por inadimplemento da multa — sustente-a e confirme o estado da jurisprudência antes de citar precedente.
- **Prorrogação do §2º:** é automática, mas sustente que **as condições não subsistem** no período prorrogado (tese acolhida no STJ — pesquise e marque [NÃO VERIFICADO]).
- **Revogação após o prazo:** só se admite se a **causa ocorreu dentro** do período de prova e a extinção ainda não foi declarada. Expirado o prazo sem causa de revogação nem processo em curso, a extinção do art. 82 opera **automaticamente** — a decisão é meramente **declaratória**: requeira-a de imediato para estabilizar a situação.

## Estrutura forense — três momentos do pedido

**(a) Na sentença** — o pedido nasce nas **alegações finais/memoriais** (skill `memoriais`), como tópico final da cadeia subsidiária: absolvição → desclassificação → dosimetria mínima → substituição do art. 44 → **sursis** → regime aberto. Lembre ao juízo o **dever de pronunciamento motivado** do art. 157 da LEP.

**(b) Em apelação** (skill `apelacao`) — capítulo próprio de pedido subsidiário: denegação sem fundamentação concreta, omissão total (antes, oponha **embargos de declaração em 2 dias** — art. 382 do CPP; skill `embargos-de-declaracao`) ou pena reduzida em 2º grau que passa a caber no teto.

**(c) Na execução** — requerimento autônomo ao juízo da execução (art. 66, III, "d", da LEP): concessão superveniente (pena reduzida por revisão, comutação ou novo cálculo), abrandamento de condições (art. 158, §2º), defesa no incidente de revogação e declaração de extinção. Contra a decisão que revoga ou denega: **agravo em execução em 5 dias** (art. 197 da LEP; **Súmula 700/STF**) — skill `agravo-em-execucao`.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA VARA DE EXECUÇÕES PENAIS
DA COMARCA DE [COMARCA] — [UF]
[Concessão originária: endereçar ao juízo da condenação ou ao tribunal da apelação]

Execução Penal nº [Nº]

[NOME], já qualificado(a), por seu(sua) advogado(a) que esta subscreve
(procuração anexa), vem, respeitosamente, requerer [SUSPENSÃO CONDICIONAL DA
PENA / MANIFESTAR-SE SOBRE A REVOGAÇÃO DO SURSIS / EXTINÇÃO DA PENA],
com fundamento nos arts. 77 a 82 do CP e 156 a 163 da LEP:

I — DO CABIMENTO
   A pena aplicada é de [___], não superior a 2 (dois) anos [ou: não superior a
   4 anos, sendo o(a) condenado(a) maior de 70 anos / justificando-o razões de
   saúde — art. 77, §2º], incabível a substituição do art. 44 do CP [motivo].

II — DOS REQUISITOS
   O(a) requerente não é reincidente em crime doloso [se houver condenação
   anterior: apenas a pena de multa — art. 77, §1º e Súmula 499/STF / crime
   culposo / alcançada pelo período depurador do art. 64, I, do CP], e as
   circunstâncias do art. 77, II, autorizam a concessão.

III — [escolher o pedido]
   (a) Da concessão: requer o sursis [simples/especial — dano reparado e art. 59
       inteiramente favorável], pelo prazo mínimo de 2 anos, com designação de
       audiência admonitória (art. 160 da LEP).
   (b) Da não revogação: o descumprimento foi justificado [prova]; a hipótese é
       de revogação facultativa, bastando a prorrogação do prazo (art. 81, §3º);
       requer-se a prévia oitiva e a manutenção do benefício.
   (c) Da extinção: expirado o período de prova sem revogação, requer a
       declaração de extinção da pena (art. 82 do CP).

IV — DOS PEDIDOS
   [Consolidar: concessão com condições proporcionais / manutenção do sursis /
   extinção da pena e baixas de estilo.]

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos:** procuração; certidões de antecedentes e executivas; cálculo/atestado de pena; comprovantes de residência e ocupação lícita; prova da reparação do dano (sursis especial) ou da impossibilidade; laudos e atestados médicos (humanitário); justificativas documentadas no incidente de revogação.

## Teses típicas

1. **Omissão do juízo** sobre o sursis na sentença viola o art. 157 da LEP — embargos de declaração imediatos e, persistindo, apelação.
2. **Fundamentação inidônea na denegação** — gravidade abstrata, bis in idem com a dosimetria ou presunções sobre a personalidade não sustentam o indeferimento.
3. **Condenação anterior só a multa não impede** o sursis (art. 77, §1º; Súmula 499/STF); **reincidência culposa** e **período depurador** (art. 64, I) também não.
4. **Sursis etário/humanitário** amplia o teto para 4 anos — explore laudos e a idade na data da decisão.
5. **Violência doméstica:** com a PRD vedada (Súmula 588/STJ) e o sursis processual incabível (Súmula 536/STJ), o **sursis da pena é a via residual** para penas ≤ 2 anos — confirme o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] se citar precedente.
6. **Condições desproporcionais** (art. 79) — impugnação e pedido de modificação a qualquer tempo (art. 158, §2º, da LEP).
7. **Sursis especial** em vez do simples: dano reparado + art. 59 inteiramente favorável afastam a prestação de serviços do primeiro ano.
8. **Extinção automática** (art. 82): expirado o prazo sem causa de revogação, o Estado não pode reabrir a discussão — a demora cartorária não prejudica o beneficiário.
9. **Dosimetria instrumental:** reduzir a pena a ≤ 2 anos (ou ≤ 4) é pressuposto do benefício — combine as teses de pena com o agente `dosimetria-pena`.

## Erros comuns e pegadinhas

- **Confundir os institutos:** pedir "sursis processual" após a condenação (ou vice-versa) desmoraliza a peça — use o quadro de contraste.
- **Olhar a pena errada:** aqui vale a pena **aplicada**; no art. 89, a **mínima cominada**. Em apelação que reduz a pena para ≤ 2 anos, **peça expressamente** o sursis — o tribunal pode não conceder de ofício.
- **Ordem dos pedidos subsidiários:** PRD (art. 44) antes do sursis (art. 77, III); inverter a ordem entrega ao juízo a via mais gravosa.
- **Preclusão:** sentença omissa sem embargos de declaração e sem capítulo na apelação consolida a denegação — o tema não "reabre" sozinho na execução, salvo fato superveniente.
- **Endereçamento:** antes do trânsito, juízo da condenação/tribunal; depois, **juízo da execução** (art. 66, III, "d", da LEP). Contra revogação: **agravo em execução, 5 dias** (Súmula 700/STF) — não apelação.
- **Contagem dos prazos (5 dias do agravo, 2 dias dos embargos):** prazo **processual penal** — contínuo, exclui o dia do começo e inclui o do vencimento (art. 798, §1º, do CPP); **não** se conta em dias úteis. Defensoria Pública tem **prazo em dobro** e intimação pessoal (LC 80/94, arts. 44, I, 89, I e 128, I).
- **Audiência admonitória negligenciada:** falta injustificada = sursis **sem efeito** e pena executada (art. 161 da LEP); e o período de prova só corre a partir dela.
- **Multa "esquecida":** o sursis não suspende a multa (art. 80) — o inadimplemento pode virar causa de revogação (art. 81, II); antecipe a tese da Lei 9.268/96.
- **Extinção não requerida:** cumprido o prazo, protocole desde logo o pedido declaratório do art. 82 — evita revogação tardia por fato ocorrido dentro do período.
- **Leis especiais:** cheque teto ampliado (ambiental) e vedações (drogas) antes de prometer o benefício ao cliente — confirme a vigência via `lei-e-sumula`.

## Apoie-se em

- **Skill `suspensao-condicional-processo`** — o instituto irmão (art. 89 da Lei 9.099/95); o quadro de contraste desta skill é de uso obrigatório para não misturar requisitos e momentos.
- **Skills `apelacao` e `memoriais`** — os dois veículos do pedido originário: tópico final da cadeia subsidiária nos memoriais e capítulo próprio na apelação.
- **Skill `agravo-em-execucao`** — recurso contra a decisão que revoga, denega ou deixa de declarar extinto o sursis na execução (5 dias — Súmula 700/STF).
- **Agente `dosimetria-pena`** — confirma a pena concreta ≤ 2 anos (ou ≤ 4 no etário/humanitário) e constrói a dosimetria que viabiliza o benefício.
- **Agentes `jurisprudencia-stj-stf` e `lei-e-sumula`** — verificação obrigatória de precedentes atuais (prorrogação, violência doméstica, vedações especiais) e da vigência dos dispositivos.
- **Agente `verificador-citacoes`** — Citation Gate: toda súmula, artigo e precedente citado na peça final passa por ele antes do protocolo (SEMPRE).
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima em toda peça: teoria do caso, subsunção explícita, subtítulos afirmativos e persuasão (SEMPRE).
