---
name: execucao-trabalho-externo
description: >-
  Use ao requerer, defender ou manter a AUTORIZAÇÃO de trabalho externo do apenado na execução penal
  — requisitos do art. 37 da LEP (aptidão, disciplina, responsabilidade e cumprimento mínimo de 1/6
  da pena), trabalho externo no regime fechado (obra pública/serviço/entidade privada, com
  vigilância) e no semiaberto, distinção do trabalho interno e do reflexo na remição, e defesa
  contra a revogação por falta grave, fuga ou… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-trabalho-externo"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-trabalho-externo", "execucao trabalho", "trabalho externo"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Trabalho Externo do Apenado (arts. 36 e 37 da LEP)

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

Esta skill orienta o pedido, a defesa e a manutenção da **autorização de trabalho externo** perante o Juízo da Execução Penal: a permissão para que o condenado exerça trabalho **fora do estabelecimento prisional** — em obras públicas, serviços ou entidades privadas — como instrumento de ressocialização, reinserção social e preparo para a progressão. O trabalho é **direito e dever** do preso (arts. 28 e 31 da LEP) e não tem natureza aflitiva (art. 28, §2º).

> **Lição central:** trabalho externo **não se confunde com progressão de regime**. É pressuposto fático **anterior** ao trabalho que gera remição — sem posto de trabalho autorizado e efetivamente exercido, não há dias a remir. Separe sempre três coisas distintas: (1) a **autorização** do posto (esta skill, art. 37); (2) o **abatimento** de pena pelos dias trabalhados (skill `execucao-remicao`, art. 126); e (3) a **transferência de regime** (skill `execucao-progressao-regime`, art. 112). O erro clássico é misturar os requisitos de uma com os da outra.

> **Cautela de vigência (obrigatória antes de citar):** confira os arts. 36 e 37 da LEP, o art. 34, §3º, do CP e as normas locais. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução. Toda autoridade passa pelo Citation Gate.

> **Gate P0 do art. 112:** o requisito próprio do art. 37 não é percentual de progressão. Se a saída comparar, calcular ou projetar progressão, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte fontes oficiais no mesmo dia e registre regra intertemporal, decisões e revisor humano. Incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**.

## O que é (e o que não é)

- **Trabalho interno** (arts. 28 a 35 da LEP): dentro do estabelecimento; é a regra para o regime fechado. Não exige autorização judicial específica de saída.
- **Trabalho externo** (arts. 36 e 37): fora dos muros. **No regime fechado** só é admissível em **serviço ou obra pública** (Administração direta/indireta) ou em **entidade privada**, sempre com **as cautelas contra a fuga e em favor da disciplina** (vigilância) e mediante **autorização** — é o objeto desta skill.
- **No regime semiaberto** o trabalho externo é a **tônica do regime** (art. 35, §2º, CP; art. 122 da LEP): admite trabalho externo, frequência a cursos e atividades autorizadas, com disciplina mais branda (a autorização de saídas para trabalho, aqui, aproxima-se da lógica do art. 122).
- **No regime aberto** o trabalho externo, sem vigilância, é da própria essência do regime (art. 36, §1º, CP; casa do albergado).

## Base legal

- **Art. 36 da LEP** — cabimento do trabalho externo no regime fechado apenas em serviço/obra pública ou entidade privada, com cautelas contra fuga; o §2º prevê limite de mão de obra e o §3º disciplina a **revogação**.
- **Art. 37 da LEP** — **requisitos**: a prestação depende de **aptidão, disciplina e responsabilidade**, além do cumprimento **mínimo de 1/6 da pena**, e a autorização é dada pela **direção do estabelecimento** (competência administrativa; ver ressalva abaixo).
- **Art. 34, §3º, do CP** — o trabalho externo, no regime fechado, é admissível **em serviço ou obra pública**.
- **Art. 35, §2º, do CP + arts. 122 e 35 da LEP** — trabalho externo no **semiaberto**.
- **Arts. 28 a 33 da LEP** — trabalho do preso como direito/dever, jornada, remuneração e proteção previdenciária.
- **Art. 126 da LEP** — reflexo do trabalho na **remição** (objeto da skill própria; aqui só o elo).

## Requisitos do art. 37 (checklist objetivo)

Para o trabalho externo **no regime fechado**, o art. 37 exige, cumulativamente:

1. **Cumprimento mínimo de 1/6 da pena** — requisito **objetivo** e temporal (fração aferida sobre a pena a executar; havendo unificação, sobre a soma — ver skill `execucao-unificacao-penas`).
2. **Aptidão** para o trabalho — capacidade física/técnica de exercer a atividade oferecida.
3. **Disciplina** — ausência de fatos desabonadores relevantes; bom comportamento carcerário atestado.
4. **Responsabilidade** — mérito subjetivo, avaliado pela direção.
5. **Posto de trabalho definido** — em serviço/obra pública ou entidade privada, com anuência do tomador e **cautelas contra a fuga** (vigilância; no semiaberto, mais branda).

> **Quem autoriza.** O art. 37 atribui a autorização à **direção do estabelecimento**. Na prática, contudo, a **matéria costuma ser submetida ao Juízo da Execução** (por provocação do apenado, do MP ou da própria administração), sobretudo quando há indeferimento administrativo, controvérsia sobre o preenchimento dos requisitos ou necessidade de fixação de condições. **Confirme a competência e o rito na sua Vara/comarca** — em muitos estados a decisão final, ou a revisão do indeferimento, é judicial.

## O requisito de 1/6 — pontos sensíveis

- O **1/6** do art. 37 é **critério próprio do trabalho externo** e não se confunde com a regra temporal de progressão do art. 112. Não reproduzir faixa histórica de percentuais.
- **Discussão relevante:** há entendimento de que a exigência de 1/6 tem por foco o regime fechado, sendo **dispensável/atenuada** para o apenado do **semiaberto**, dada a própria natureza do regime (em que o trabalho externo é ordinário). **Tese defensiva:** ao semiaberto não se transporta rigidamente o lapso de 1/6 do art. 37, pena de esvaziar o regime. **Confirme o estado atual da jurisprudência** via `jurisprudencia-stj-stf` antes de sustentar. [NÃO VERIFICADO — checar se há súmula/tema consolidando a dispensa do 1/6 no semiaberto]
- A fração incide sobre a pena **em execução**; havendo detração (art. 42 do CP), o *dies a quo* é a **prisão cautelar**, não o trânsito em julgado.

## Revogação da autorização (art. 37, parágrafo único, e art. 36, §3º)

A autorização de trabalho externo é **revogável**. As hipóteses legais são:

| Hipótese | Base | Efeito |
|---|---|---|
| **Prática de fato definido como crime** (nova infração) | art. 37, parágrafo único, LEP | revogação |
| **Punição por falta grave** (arts. 50-52 LEP) | art. 37, parágrafo único, LEP | revogação |
| **Comportamento contrário aos requisitos** (indisciplina, quebra de responsabilidade) | art. 37, parágrafo único, LEP | revogação |
| **Fuga / não retorno** ao estabelecimento | falta grave (art. 50, II, LEP) + art. 36, §3º | revogação e regressão |

> **Distinção crucial.** A revogação do **trabalho externo** segue os pressupostos do art. 37/36 — não se confunde automaticamente com a **regressão de regime** (art. 118 da LEP) nem com a **interrupção da remição por falta grave** (art. 127 da LEP, Súmula 534/STJ — que trata do reflexo na progressão). Uma falta grave pode desencadear vários efeitos, mas cada um exige seu próprio procedimento e contraditório.

> **Devido processo obrigatório.** Revogação por falta grave **exige apuração** com **contraditório e ampla defesa** — **Procedimento Administrativo Disciplinar (PAD)** e/ou audiência de justificação com **defesa técnica** (Súmula 533/STJ). Revogação **automática**, sem PAD e sem oitiva do apenado, é **nula**.

## Teses defensivas (e contra-teses da acusação)

**Para obter/manter a autorização:**
1. **Requisitos preenchidos:** 1/6 cumprido + atestado de conduta (disciplina) + aptidão + posto definido → deferimento é medida de ressocialização (arts. 1º e 10 da LEP).
2. **Indeferimento administrativo imotivado:** exigir **fundamentação idônea**; motivação genérica ("gravidade do crime", "clamor social") não obsta o benefício quando os requisitos legais estão satisfeitos.
3. **Semiaberto:** o trabalho externo é **inerente** ao regime; a exigência de 1/6 do art. 37 deve ser lida com temperamento (tese acima; conferir jurisprudência).
4. **Vaga/oferta de emprego concreta:** comprovar promessa de contratação ou vínculo com entidade idônea reforça a **responsabilidade** e a viabilidade da vigilância.

**Contra a revogação:**
5. **Nulidade por ausência de PAD/contraditório** (Súmula 533/STJ) — revogação automática é ilegal.
6. **Atipicidade da conduta imputada** como falta grave — nem todo descumprimento é falta grave (rol do art. 50).
7. **Ausência de dolo na fuga/atraso** — retorno espontâneo, motivo de força maior, atraso justificado.
8. **Desproporcionalidade** — revogar por fato de menor gravidade, quando cabível sanção mais branda, viola a individualização (art. 5º, XLVI, CF).

**Contra-teses típicas da acusação (MP):** requisito de 1/6 não cumprido; conduta carcerária desfavorável; risco concreto à ordem/segurança pública; ausência de vigilância eficaz; falta grave apurada em PAD regular autoriza a revogação e a regressão.

## Súmulas e dispositivos correlatos (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 533/STJ** — para reconhecimento de **falta grave**, é imprescindível a **instauração de PAD** com defesa técnica (base para atacar revogação sem procedimento).
- **Súmula 526/STJ** — o reconhecimento de falta grave decorrente do cometimento de fato definido como crime **não depende do trânsito em julgado** do processo penal respectivo. [conferir aplicação ao caso de trabalho externo]
- **Súmula 534/STJ** — falta grave **interrompe** o prazo para **progressão** (data-base sobre o saldo) — reflexo distinto, mencionado para não confundir com a revogação do posto de trabalho.
- **Súmula 562/STJ** — é **possível a remição** pela **frequência a curso**/estudo; útil para articular trabalho + estudo (o elo com a remição é da skill própria). [conferir redação]
- **Art. 126, §6º, LEP** — o preso em regime aberto/semiaberto e o que usufrui de liberdade condicional podem remir pela **frequência a curso** (elo com estudo/trabalho externo).

> Para qualquer **número de HC/REsp/tema/informativo**, não cite de memória: passe pelo gate `jurisprudencia-stj-stf`. Prefira ensinar a **tese** e o **dispositivo** a arriscar um acórdão.

## Estrutura da petição (requerimento de autorização)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento nos arts. 36 e 37 da Lei de
Execução Penal (Lei 7.210/84) e no art. 34, §3º, do Código Penal, requerer a

AUTORIZAÇÃO PARA TRABALHO EXTERNO

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O apenado cumpre pena de [PENA TOTAL] de reclusão, em regime [REGIME ATUAL],
estando preso, por força de detração (art. 42 do CP), desde [DATA DA PRISÃO].
Possui boa conduta carcerária, conforme atestado de comportamento expedido pela
direção do estabelecimento (doc. anexo), e conta com oferta concreta de trabalho
junto a [ENTIDADE/EMPREGADOR], conforme declaração/promessa de contratação anexa.


II — DO DIREITO

a) Do requisito temporal (1/6)
Nos termos do art. 37 da LEP, a autorização de trabalho externo pressupõe o
cumprimento de, no mínimo, 1/6 da pena. Sobre a pena de [PENA TOTAL], a fração
de 1/6 corresponde a [LAPSO 1/6], lapso integralmente cumprido em [DATA],
conforme o cálculo de liquidação de pena em anexo.
[Se semiaberto: sustentar que o trabalho externo é inerente ao regime (art. 35,
§2º, CP; art. 122 da LEP), com temperamento do lapso do art. 37 — conferir
jurisprudência via jurisprudencia-stj-stf.]

b) Da aptidão, disciplina e responsabilidade
O apenado é apto ao serviço oferecido, ostenta comportamento disciplinado
(atestado anexo) e demonstra responsabilidade, preenchendo os requisitos
subjetivos do art. 37 da LEP. A atividade será prestada em [OBRA PÚBLICA/
SERVIÇO/ENTIDADE PRIVADA], com as cautelas contra a fuga e em favor da
disciplina (art. 36 da LEP).

c) Da finalidade ressocializadora
O trabalho é direito e dever do preso (arts. 28 e 31 da LEP) e instrumento
essencial da reinserção social (arts. 1º e 10 da LEP), preparando o apenado
para a progressão e concorrendo, ainda, para a remição da pena (art. 126).


III — DO PEDIDO

Diante do exposto, requer:

a) a AUTORIZAÇÃO para trabalho externo junto a [ENTIDADE/EMPREGADOR], nos
   termos dos arts. 36 e 37 da LEP;
b) a fixação das condições e da forma de fiscalização/vigilância cabíveis;
c) a comunicação à direção do estabelecimento para as providências;
d) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA TOTAL], [REGIME ATUAL], [DATA DA PRISÃO], [ENTIDADE/EMPREGADOR], [LAPSO 1/6], [DATA], [OBRA PÚBLICA/SERVIÇO/ENTIDADE PRIVADA], [LOCAL], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Estrutura da petição (defesa contra a revogação)

Quando o pedido é para **evitar/anular a revogação**, a peça muda de eixo: requerimento de **manutenção** ou **restabelecimento** do trabalho externo, atacando a validade da revogação.

```
III — DO DIREITO (defesa)

a) Da nulidade por ausência de procedimento (Súmula 533/STJ)
A revogação do trabalho externo por suposta falta grave pressupõe a instauração
de PAD com contraditório e ampla defesa técnica. No caso, a revogação foi
[automática/sem oitiva/sem PAD], em afronta à Súmula 533/STJ, impondo-se sua
anulação e o restabelecimento do benefício.

b) Da atipicidade/ausência de dolo
[A conduta imputada não configura falta grave do rol do art. 50 da LEP / O
atraso/não retorno decorreu de força maior, sem dolo de evasão, com retorno
espontâneo — afastando a falta grave e a revogação.]

c) Da desproporcionalidade
Ainda que houvesse fato desabonador, a revogação integral do posto de trabalho
é medida desproporcional frente à sanção mais branda cabível, violando a
individualização executória (art. 5º, XLVI, da CF).
```

## Documentos a anexar

1. Procuração.
2. Cálculo de liquidação de pena atualizado (comprova o **1/6**).
3. Atestado de conduta carcerária (comprova **disciplina/responsabilidade**).
4. Declaração/promessa de contratação ou vínculo com a entidade (posto de trabalho).
5. Guia de recolhimento e folha de antecedentes.
6. Na defesa contra revogação: cópia do PAD/decisão revocatória atacada e do atestado de comportamento.

## Erros comuns / anti-padrões (evitar)

- **Confundir trabalho externo com progressão** — pedir "1/6 para progredir" (o percentual da progressão é o do art. 112, não o do art. 37).
- **Confundir autorização com remição** — pleitear remição sem antes garantir o posto de trabalho autorizado e efetivo (a remição é consequência, art. 126).
- **Transportar o rígido 1/6 do art. 37 ao semiaberto** sem discutir a natureza do regime (perde tese defensiva).
- **Aceitar revogação automática** por falta grave, sem PAD e contraditório (Súmula 533/STJ) — atacar sempre.
- **Contar o 1/6 do trânsito em julgado**, ignorando a detração (art. 42 do CP).
- **Esquecer o posto de trabalho concreto** — pedido genérico, sem empregador/entidade e sem vigilância definida, tende ao indeferimento.
- **Citar número de HC/REsp/tema de memória** — passar pelo gate `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Instituto correto isolado: **autorização** (art. 37), não progressão (art. 112) nem remição (art. 126)?
- [ ] **1/6** cumprido e demonstrado no cálculo de liquidação (com detração)?
- [ ] **Aptidão, disciplina e responsabilidade** documentadas (atestado de conduta)?
- [ ] **Posto de trabalho concreto** (obra/serviço público ou entidade privada) e **cautelas contra fuga** indicados?
- [ ] Redação vigente dos arts. 36 e 37 da LEP e do art. 34, §3º, do CP conferida (Leis 14.843/2024, 15.358/2026 e 15.402/2026)?
- [ ] Competência e rito (administrativo × judicial) confirmados na comarca?
- [ ] Na defesa contra revogação: **PAD/contraditório** exigido (Súmula 533/STJ) e falta grave efetivamente demonstrada?
- [ ] Súmulas e julgados conferidos via `jurisprudencia-stj-stf` antes de citar?
- [ ] Documentos anexados (procuração, cálculo, atestado, promessa de contratação)?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da peça; a responsabilidade pela atuação, pela tese e pelo protocolo é sempre do **advogado** (EAOAB; Código de Ética e Disciplina). Não substitui a leitura dos autos da execução, do cálculo de liquidação nem das normas locais.
- **Verificação de citações inegociável.** Nenhuma súmula, tema, informativo ou acórdão é citado de memória — todos passam pela skill `jurisprudencia-stj-stf`. Itens marcados **[NÃO VERIFICADO]** exigem conferência antes do uso; na dúvida, **omitir vence inventar** (há sanções por jurisprudência inventada por IA).
- **Ética por polo:** advocacia — OAB e Provimento 205/2021; Ministério Público — CNMP; Defensoria Pública — LC 80/94. Esta skill é de **atuação defensiva** (em favor do apenado); o roteador deve conferir o perfil da instituição antes de sugeri-la.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
