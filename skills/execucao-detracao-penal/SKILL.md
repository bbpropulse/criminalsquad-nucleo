---
name: execucao-detracao-penal
description: >-
  Use ao requerer detração penal na execução — cômputo, na pena a cumprir, do tempo de prisão
  provisória, prisão administrativa, internação e prisão domiciliar/cautelar (art. 42 CP; art. 387,
  §2º, CPP; art. 111 LEP), inclusive detração de prisão em processo distinto (contemporaneidade) e o
  reflexo nos marcos dos benefícios e no atestado/cálculo de pena. Gatilhos: detração, art. 42 CP,
  art. 387 §2º CPP, prisão provisória… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-detracao-penal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-detracao-penal", "execucao detracao", "detracao penal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Detração Penal na Execução (art. 42 do CP; art. 387, §2º, do CPP)

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

Esta skill orienta a elaboração do **requerimento de detração penal** perante o Juízo da Execução (ou, na fase de conhecimento, o pedido de detração antecipada em sentença). **Detração** é o **desconto**, na pena a cumprir, do tempo em que o condenado esteve **preso provisoriamente**, **preso administrativamente**, **internado** ou submetido à **prisão domiciliar/medida cautelar restritiva** por conta do mesmo fato (ou de fato conexo/contemporâneo). Serve à proporcionalidade e à vedação do bis puniendi: **ninguém cumpre duas vezes o mesmo tempo de encarceramento**.

> **Lição central:** a detração **não é só somar dias no cálculo** — ela **antecipa o *dies a quo*** e, com ele, **recalcula os marcos de TODOS os benefícios** (progressão, livramento, indulto, comutação, saída temporária). Quantificar o período detraído e refleti-lo na data-base é a essência da peça; deixar de fazê-lo mantém o apenado preso além do devido.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 42 do CP**, do **art. 387, §2º, do CPP** e do **art. 111 da LEP**. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram requisitos da execução. Valide numeração e redação em fonte oficial e passe toda autoridade pelo Citation Gate.

> **Gate P0 do art. 112:** detração pode alterar a base temporal, mas não escolhe a regra de progressão. Se a saída afirmar percentual, lapso ou data de benefício, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte as fontes oficiais no mesmo dia e registre direito intertemporal, decisões aplicáveis e revisor humano. Incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; limitar-se ao tempo detraível documentado.

## Base legal

- **Art. 42 do CP** — computam-se, na pena privativa de liberdade e na medida de segurança, **o tempo de prisão provisória** (no Brasil ou no estrangeiro), **o de prisão administrativa** e **o de internação** (art. 41 e seguintes, hospital de custódia).
- **Art. 387, §2º, do CPP** (red. Lei 12.736/2012) — o **tempo de prisão provisória** será **computado para fins de determinação do regime inicial** de pena privativa de liberdade **já na sentença** (detração antecipada, que pode fixar regime mais brando de largada).
- **Art. 111 da LEP** — quando houver **condenação por mais de um crime**, no mesmo ou em processos distintos, a **soma** das penas serve de base para os benefícios; a detração incide sobre esse cômputo unificado.
- **Art. 66, III, "c", da LEP** — competência do **Juízo da Execução** para decidir sobre a **soma ou unificação** das penas e, por consequência, o cálculo com detração.
- **Art. 319, IX, do CPP c/c Lei 12.258/2010** — **monitoração eletrônica** como medida cautelar diversa da prisão; e **recolhimento domiciliar** cautelar (art. 318 do CPP) como objeto de detração quando houver efetiva restrição da liberdade (tese — ver adiante).

## O que se detrai (e o que não se detrai)

| Detrai (art. 42 CP) | Observação |
|---|---|
| Prisão em **flagrante**, **temporária**, **preventiva** | Regra clássica; conta desde a captura. |
| **Prisão administrativa** | Ex.: prisão para extradição/expulsão relativa ao mesmo fato. |
| **Internação** provisória / medida de segurança | Hospital de custódia; conta o tempo internado. |
| **Prisão no estrangeiro** pelo mesmo fato | Art. 42 abrange a prisão provisória no exterior. |
| **Prisão domiciliar cautelar** (substitutiva da preventiva, art. 318 CPP) | Tese consolidada — restrição de liberdade equiparável. |
| **Internação em comunidade terapêutica / medida cautelar de internação** | Detrai-se o tempo de efetiva privação/restrição. |

| **Não** detrai (ou é controverso) | Observação |
|---|---|
| **Medidas cautelares diversas** que **não** privam a liberdade (comparecimento periódico, proibição de contato) | Não há encarceramento a compensar. |
| **Monitoração eletrônica** sem recolhimento | **Controverso** — sustentável a detração quando somada a recolhimento domiciliar/noturno; sem restrição de locomoção, tende a ser negada. Tratar como **tese**, não como regra. |
| Tempo de **livramento condicional revogado** por novo crime | Não se restitui como detração (regra do art. 88 CP). |
| Prisão civil (alimentos) | Natureza distinta; não é pena. |

## Metodologia passo a passo

1. **Levantar os períodos de restrição.** Reúna, com documento, **cada intervalo** de prisão/internação/domiciliar cautelar: data de início (captura/decreto) e data de fim (soltura/relaxamento/transferência para cumprimento definitivo). Fonte: BNMP, guia de recolhimento, alvarás, atas de audiência de custódia.
2. **Classificar cada período** conforme a tabela acima (detrai / não detrai / tese).
3. **Verificar a contemporaneidade** para detração em **processo distinto** (ver seção própria).
4. **Quantificar** o total em dias (convenção: ano = 365 dias; mês = 30 dias; incluir o *dies a quo* e o dia da soltura).
5. **Definir o *dies a quo* da execução** = **primeira** data de prisão cautelar detraível (não o trânsito em julgado).
6. **Recalcular os marcos dos benefícios** aplicando o período detraído: progressão (skill `execucao-progressao-regime`), livramento (`execucao-livramento-condicional`), indulto/comutação, saída temporária.
7. **Requerer** a homologação do cálculo com detração e a **retificação do atestado de pena / guia de recolhimento**.

```
período detraído (dias) = Σ (data-fim − data-início + 1) de cada intervalo restritivo
dies a quo da execução   = primeira data de prisão cautelar detraível
saldo a cumprir          = pena total (em dias) − período detraído
marcos de benefício      = recalculados a partir do dies a quo (não do trânsito)
```

## Detração em processo distinto — o ponto técnico central

Nem sempre a prisão provisória se deu no processo em que veio a condenação. **É possível detrair, na pena de um processo, o tempo de prisão cautelar sofrido em OUTRO processo**, desde que haja **contemporaneidade** entre a custódia e o fato apenado — ou seja, a prisão cautelar do processo A pode ser abatida da pena do processo B se o **fato do processo B já existia** (fora praticado) **antes ou durante** aquela custódia. O que se veda é a **conta-corrente de detração**: guardar "crédito" de prisão de um processo para abater **crime futuro**, cometido **depois** da soltura (isso incentivaria o delito).

- **Regra prática:** detrai-se se, ao tempo da prisão cautelar, o crime a ser descontado **já havia sido cometido** (contemporaneidade/simultaneidade); **não** se detrai prisão anterior a crime **posterior**.
- **Sede da decisão:** compete ao **Juízo da Execução** (art. 66, III, "c", e art. 111 da LEP), ao unificar/somar as penas.
- **Tese defensiva:** havendo custódia cautelar em processo que resultou em **absolvição** ou **prescrição**, esse tempo **não se perde** — detrai-se em processo condenatório **contemporâneo**, sob pena de o Estado ficar com um "saldo" indevido de encarceramento do cidadão.
- **Cautela:** o exato contorno da contemporaneidade e os limites da detração em processo diverso são objeto de jurisprudência específica — **confirme o precedente aplicável** via `jurisprudencia-stj-stf`. **[NÃO VERIFICADO]** os números de acórdãos do STJ/STF sobre "detração em processo distinto" e "vedação à conta-corrente": **não citar de memória**; passar pelo gate antes de nomear qualquer HC/REsp/Tema.

## Detração antecipada na sentença — art. 387, §2º, CPP

Desde a **Lei 12.736/2012**, o **juiz da condenação** deve computar o tempo de prisão provisória **já na sentença**, para **fixar o regime inicial**. Efeito prático: réu que ficaria no fechado pela pena pode **iniciar no semiaberto** se o tempo já preso, descontado, o reconduzir a patamar inferior.

- Isso **não esgota** a detração — o cômputo detalhado dia a dia e o reflexo nos demais benefícios **permanecem** a cargo do Juízo da Execução (art. 66 LEP).
- **Tese (defesa):** omitida a detração do art. 387, §2º, na sentença, cabe **embargos de declaração** (omissão) e, no mérito da execução, o recálculo do regime de largada.
- **Não confundir:** o §2º define **regime inicial**; o cômputo integral para **progressão/livramento** é o do art. 42 CP na execução.

## Teses defensivas e contra-teses

**Teses defensivas (favoráveis ao apenado):**
1. **Detração de prisão domiciliar cautelar** (art. 318 CPP) — período de recolhimento domiciliar substitutivo da preventiva é privação equiparável e deve ser descontado.
2. **Detração em processo distinto contemporâneo** — custódia em processo absolvido/prescrito abate-se de condenação contemporânea (veda-se apenas o crédito para crime futuro).
3. **Detração antecipada omitida** (art. 387, §2º) — embargos + retificação do regime inicial.
4. **Monitoração eletrônica com recolhimento** — quando houver efetiva restrição de locomoção (recolhimento noturno/domiciliar), sustentar a detração do período — **tese**, dependente de precedente atual.
5. **Internação provisória / comunidade terapêutica** — o tempo de internação cautelar integra a detração (art. 42 CP).

**Contra-teses (acusação / juízo restritivo) a antecipar:**
- **Vedação à conta-corrente de detração:** prisão cautelar **anterior** a crime **posterior** não gera crédito abatível.
- **Cautelares não privativas não se detraem:** medidas do art. 319 CPP que não encarceram (comparecimento, proibição de contato) não têm tempo a compensar.
- **Monitoração sem recolhimento:** sem restrição de locomoção, não há detração (posição restritiva).

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 715/STF** — "A pena unificada para atender ao limite de trinta anos de cumprimento, determinado pelo art. 75 do CP, **não** é considerada para a concessão de outros benefícios, como o livramento condicional ou regime mais favorável de execução." Ou seja: o **teto** de 30 anos (art. 75) é só limite de tempo máximo de cumprimento — **não** serve de base para os benefícios; a base é a **pena total** (soma das condenações). A detração incide sobre essa pena total — ver skill `execucao-unificacao-penas`. **Confirmar redação/vigência via `verificacao-citacoes` antes de citar.**
- Para **QUALQUER** número de HC/REsp/RE, Tema ou Informativo sobre detração (processo distinto, prisão domiciliar, monitoração, contemporaneidade): **[NÃO VERIFICADO]** — **não citar de memória**. Ensine a **tese e o dispositivo** (art. 42 CP; art. 387, §2º, CPP; art. 111 LEP) e confira o precedente exato via `jurisprudencia-stj-stf`. **Melhor faltar precedente do que citar julgado inexistente** (há sanções reais por jurisprudência inventada por IA).

## Modelo de petição

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento no art. 42 do Código Penal, no
art. 387, §2º, do CPP e no art. 66, III, "c", c/c art. 111 da LEP, requerer a

DETRAÇÃO PENAL E A RETIFICAÇÃO DO CÁLCULO DE PENA

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O apenado cumpre pena de [PENA TOTAL] de reclusão, em regime [REGIME ATUAL],
pela prática do crime de [CRIME]. Antes do início do cumprimento definitivo,
esteve submetido às seguintes restrições de liberdade, computáveis para fins de
detração:

a) prisão [FLAGRANTE/PREVENTIVA/TEMPORÁRIA], de [DATA INÍCIO] a [DATA FIM]
   ([Nº] dias);
b) [internação provisória / prisão domiciliar cautelar / prisão administrativa],
   de [DATA INÍCIO] a [DATA FIM] ([Nº] dias);
[c) prisão cautelar sofrida nos autos nº [OUTRO PROCESSO], contemporânea ao
   fato desta condenação, de [DATA] a [DATA] ([Nº] dias).]

Total de tempo a detrair: [TOTAL] dias, conforme demonstrativo anexo.


II — DO DIREITO

a) Do cômputo do tempo de restrição (art. 42 do CP)
Nos termos do art. 42 do Código Penal, computa-se na pena o tempo de prisão
provisória, de prisão administrativa e de internação. Os períodos acima
descritos devem, pois, ser abatidos da pena a cumprir.

[Se domiciliar cautelar: a prisão domiciliar substitutiva da preventiva (art.
318 do CPP) constitui efetiva restrição da liberdade, equiparável para fins de
detração.]

[Se processo distinto: a custódia cautelar sofrida nos autos nº [...] é
contemporânea ao fato ora executado, sendo detraível na forma do art. 111 da
LEP; veda-se apenas o crédito de prisão anterior a crime posterior, o que não é
o caso.]

b) Do reflexo nos marcos dos benefícios
A detração antecipa o dies a quo da execução para [DATA DA PRIMEIRA PRISÃO
CAUTELAR], e não o trânsito em julgado, impondo o recálculo dos marcos de
progressão de regime, livramento condicional e demais benefícios, conforme o
demonstrativo anexo.

[Se regime inicial: nos termos do art. 387, §2º, do CPP, o tempo já cumprido
reconduz o apenado ao regime [SEMIABERTO/ABERTO] de largada.]


III — DO PEDIDO

Diante do exposto, requer:

a) o reconhecimento da DETRAÇÃO de [TOTAL] dias, na forma do art. 42 do CP;
b) a RETIFICAÇÃO do cálculo de liquidação de pena e do atestado de pena, com o
   novo dies a quo e os marcos de benefícios recalculados;
c) a expedição de guia de recolhimento atualizada;
d) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA TOTAL], [REGIME ATUAL], [CRIME], [DATA INÍCIO], [DATA FIM], [Nº] dias, [OUTRO PROCESSO], [TOTAL], [DATA DA PRIMEIRA PRISÃO CAUTELAR], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. **Demonstrativo de cálculo da detração** (períodos, datas, total em dias).
3. Cálculo de liquidação de pena atual (para retificação).
4. Guia de recolhimento / atestado de pena vigente.
5. **Comprovantes das custódias**: auto de prisão em flagrante, decreto de preventiva/temporária, alvarás de soltura, atas de audiência de custódia, extrato BNMP.
6. Se detração em processo distinto: **certidão** do outro feito (datas da custódia, desfecho — absolvição/prescrição/condenação) demonstrando a **contemporaneidade**.

## Erros comuns / anti-padrões

- Contar o *dies a quo* do **trânsito em julgado**, ignorando a detração (erro que mantém o apenado preso além do devido).
- Somar os dias no cálculo mas **não recalcular os marcos** de progressão/livramento — a detração só produz efeito quando reflete nas datas-base.
- Pleitear detração de **cautelar não privativa** (comparecimento periódico, proibição de contato) — não há encarceramento a compensar.
- Tentar a **conta-corrente**: usar prisão cautelar **anterior** para abater crime **posterior** (vedado).
- Tratar **monitoração eletrônica** como detração automática — só sustentável com **recolhimento** efetivo, e como **tese**.
- Esquecer a detração **antecipada** do art. 387, §2º, na sentença (cabe embargos + retificação do regime inicial).
- Citar número de acórdão de detração **de memória** — passar pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Todos os períodos de restrição levantados e **documentados** (flagrante, preventiva, temporária, domiciliar, internação, prisão no estrangeiro)?
- [ ] Cada período **classificado** (detrai / não detrai / tese)?
- [ ] **Contemporaneidade** verificada para detração em processo distinto (sem conta-corrente)?
- [ ] Total em dias calculado (ano = 365; mês = 30; *dies a quo* e dia da soltura incluídos)?
- [ ] **Novo *dies a quo*** = primeira prisão cautelar detraível, e não o trânsito em julgado?
- [ ] Marcos de **todos** os benefícios recalculados (progressão, livramento, indulto/comutação, saída temporária)?
- [ ] Detração **antecipada** do art. 387, §2º, conferida na sentença (regime inicial)?
- [ ] Redação vigente do art. 42 CP / art. 387, §2º, CPP / art. 111 LEP e das Leis 14.843/2024, 15.358/2026 e 15.402/2026 conferida na fonte oficial?
- [ ] Súmulas e julgados conferidos via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar?
- [ ] Demonstrativo de cálculo e comprovantes de custódia anexados?

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese a confirmar, não peça pronta para protocolo. A responsabilidade pela atuação é sempre do **advogado** (Estatuto da OAB e Código de Ética; Provimento 205/2021 na advocacia; CNMP no Ministério Público; LC 80/94 na Defensoria). **Nenhuma súmula, tese ou precedente** citado de memória: tudo passa pelo gate `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Dados do assistido não vão a repositório público (LGPD; `acervo/casos/` é sigiloso).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
