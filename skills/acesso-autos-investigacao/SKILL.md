---
name: acesso-autos-investigacao
description: >-
  Use ao elaborar pedido de ACESSO AOS AUTOS DE INVESTIGAÇÃO em favor do investigado/defesa — vista
  e cópia de inquérito policial (IP), PIC do MP ou qualquer procedimento investigatório, com base na
  Súmula Vinculante 14 do STF e no art. 7º, XIV e §§ 10-12, do EAOAB (Lei 8.906/94, com a redação da
  Lei 13.245/2016) — e ao redigir a RECLAMAÇÃO CONSTITUCIONAL ao STF por descumprimento da SV 14
  (CF, art. 103-A, § 3º; Lei… Gatilhos… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acesso-autos-investigacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acesso-autos-investigacao", "acesso autos", "autos investigacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Acesso aos Autos de Investigação (SV 14 e Reclamação ao STF)

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

Esta skill orienta a construção das peças de **acesso aos autos de investigação em favor do investigado** — a prerrogativa da defesa de examinar e copiar os elementos **já documentados** em IP, PIC ou qualquer procedimento investigatório (Súmula Vinculante 14; EAOAB, art. 7º, XIV) — e a **escalada** quando o acesso é negado, culminando na **Reclamação constitucional ao STF**. Não confundir o polo: aqui se advoga para o **investigado**; a peça da **vítima** que provoca a instauração de IP/TC/PIC é outra — **ver skill `requerimento-investigacao`**. Para a rotina de peticionamento de entrada no feito (juntada de procuração, cadastro no sistema, pedido de habilitação), **ver skill `habilitacao-acesso-autos`** — esta skill aprofunda a **via da SV 14** quando a prerrogativa é resistida.

> **Lição central:** o direito de acesso tem **objeto delimitado** — elementos de prova **já documentados** nos autos. Pedir acesso a diligência **em andamento e ainda não documentada** dá à autoridade uma negativa legítima (EAOAB, art. 7º, § 11) e enfraquece a peça. Delimite o pedido ao que está documentado e **documente a negativa**: sem prova do ato que contraria a SV 14, não há Reclamação viável.

## O instituto e a base legal

**Súmula Vinculante 14 (STF):** *"É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa."*

O enunciado concretiza a **ampla defesa** (CF, art. 5º, LV) e a **assistência de advogado** (CF, art. 5º, LXIII) já na fase pré-processual, e se articula com o Estatuto da OAB:

| Dispositivo | Conteúdo |
|---|---|
| **EAOAB, art. 7º, XIV** (redação da Lei 13.245/2016) | Direito de **examinar**, em qualquer instituição, autos de flagrante e de **investigações de qualquer natureza**, findos ou em andamento, **ainda que conclusos à autoridade**, podendo **copiar peças e tomar apontamentos**, em meio físico ou digital — **mesmo sem procuração** |
| **EAOAB, art. 7º, § 10** | Autos **sujeitos a sigilo**: acesso condicionado à apresentação de **procuração** |
| **EAOAB, art. 7º, § 11** | A autoridade pode **delimitar** o acesso quanto aos elementos relativos a **diligências em andamento** e ainda não documentadas, quando o acesso puder comprometer sua eficácia |
| **EAOAB, art. 7º, § 12** | Inobservância do XIV, **fornecimento incompleto** de autos ou **retirada de peças** já juntadas → **responsabilização criminal e funcional por abuso de autoridade** de quem impedir o acesso para prejudicar a defesa, sem prejuízo do direito de **requerer o acesso ao juiz competente** |
| **Lei 13.869/2019, art. 32** (abuso de autoridade) | Crime: **negar** ao interessado/defensor **acesso** a autos de investigação ou **impedir a obtenção de cópias** — ressalvadas peças de diligências em curso ou futuras cujo sigilo seja imprescindível |
| **EAOAB, art. 7º, XXI** (Lei 13.245/2016) | Direito de **assistir** o cliente investigado durante a apuração, **sob pena de nulidade absoluta** do interrogatório/depoimento e dos elementos deles derivados, e de apresentar **razões e quesitos** |

> A SV 14 fala em "órgão com competência de polícia judiciária", mas sua ratio (paridade de armas + ampla defesa) é aplicada também a **PIC do Ministério Público** e a outros procedimentos apuratórios; para o alcance exato em CPIs, procedimentos administrativos sancionadores e sindicâncias, **pesquise via agente jurisprudencia-stj-stf e verifique com verificador-citacoes; marque [NÃO VERIFICADO] o que não confirmar**.

## Cabimento e requisitos

| Pergunta | Resposta | Base |
|---|---|---|
| **Quem pede?** | O **advogado/defensor**, no interesse do representado (investigado, indiciado ou até quem ainda não foi formalmente indiciado, mas é alvo da apuração) | SV 14; EAOAB 7º, XIV |
| **Precisa de procuração?** | **Não**, como regra (prerrogativa profissional); **sim**, se houver **sigilo decretado** (§ 10) | EAOAB 7º, XIV e § 10 |
| **O quê se acessa?** | Elementos **já documentados**: depoimentos, laudos, relatórios, representações, decisões, **mídias** (interceptações já transcritas/juntadas, vídeos, extratos) | SV 14 |
| **O que NÃO se acessa?** | Diligências **em andamento e não documentadas** (interceptação em curso, campana, ação controlada) | EAOAB 7º, § 11 |
| **Onde?** | IP (Polícia Civil/Federal), PIC (MP), flagrante, e investigações "de qualquer natureza" | EAOAB 7º, XIV |
| **Sigilo é oponível à defesa?** | O sigilo do procedimento é oponível a **terceiros e à publicidade geral** — não à defesa quanto aos elementos documentados que digam respeito ao representado (com procuração, se decretado o sigilo) | SV 14 c/c § 10 |

## Via 1 — Requerimento de acesso (à autoridade que preside a investigação)

Primeira providência: requerimento **administrativo** dirigido a quem preside o feito — **Delegado de Polícia** (IP/flagrante) ou **membro do MP** (PIC). Se os autos já estão judicializados ou há sigilo decretado por juiz, dirige-se **ao juízo** (petição nos autos ou no procedimento cautelar sigiloso). Tratamento: **"Excelentíssimo"** também para o delegado — ver skill `requerimento-investigacao` para o detalhamento do endereçamento a delegado/MP (Lei 12.830/2013, art. 3º).

```
EXCELENTÍSSIMO SENHOR DOUTOR DELEGADO DE POLÍCIA DA [Nª] DELEGACIA DE [COMARCA/CIRCUNSCRIÇÃO] — [UF]
[ou: Promotor de Justiça / Procurador da República — PIC nº ...]
[ou: Juiz(a) de Direito da Nª Vara Criminal — se judicializado/sigilo judicial]

Autos nº [Nº DO IP / PIC / APF / PROCEDIMENTO]

[NOME DO INVESTIGADO], [qualificação], por seu(sua) advogado(a) firmatário(a)
[procuração anexa — indispensável se houver sigilo, art. 7º, § 10, EAOAB], vem,
respeitosamente, perante Vossa Excelência, com fundamento na Súmula Vinculante 14
do STF e no art. 7º, XIV, da Lei 8.906/94 (redação da Lei 13.245/2016), requerer
ACESSO AOS AUTOS, pelos motivos a seguir:

I — DOS FATOS
Existência da investigação em face do requerente; como a defesa tomou ciência
(intimação, busca e apreensão, prisão de corréu, notícia na imprensa); eventual
negativa ou acesso parcial já ocorrido (juntar prova/certidão).

II — DO DIREITO
1. Da prerrogativa de acesso — SV 14 + art. 7º, XIV, EAOAB: elementos JÁ
   DOCUMENTADOS que digam respeito ao representado; acesso inclui cópia
   (física ou digital) e MÍDIAS anexadas aos autos.
2. Do sigilo — se decretado, não é oponível à defesa munida de procuração
   (art. 7º, § 10); o sigilo protege a investigação contra terceiros, não
   contra o investigado.
3. Da delimitação legítima — a defesa NÃO requer acesso a diligências em
   andamento não documentadas (art. 7º, § 11), afastando de antemão a
   objeção usual.
4. Das consequências da negativa — responsabilização criminal e funcional
   (art. 7º, § 12, EAOAB) e crime do art. 32 da Lei 13.869/2019 (mencionar
   com sobriedade, como fundamento normativo, não como ameaça).

III — DOS PEDIDOS
a) VISTA dos autos e CÓPIA INTEGRAL (meio digital preferencial), inclusive
   das mídias e anexos já juntados;
b) subsidiariamente, acesso aos elementos já documentados que digam respeito
   ao requerente, com indicação expressa e fundamentada do que for retido
   por força do art. 7º, § 11;
c) em caso de indeferimento, a CERTIDÃO da negativa, com os motivos, para
   fins de tutela da prerrogativa (documento que instruirá a Reclamação).

Termos em que pede deferimento.
[LOCAL], [DATA]. [ADVOGADO(A)] — OAB/[UF] nº [Nº]
```

**Documentos:** procuração (obrigatória se sigilo); prova da existência do procedimento e do interesse (mandado, ofício, auto de apreensão); prova de negativa anterior, se houver.

## Escalada — o que fazer quando o acesso é negado

| Situação | Via | Observação |
|---|---|---|
| Negativa do **delegado** ou acesso incompleto | Reiterar ao delegado com prazo + **requerimento ao juízo** competente; representação à corregedoria e comunicação à OAB (prerrogativas) | Documentar tudo |
| Negativa que **contraria frontalmente a SV 14** (ato de delegado, MP ou juiz) | **Reclamação ao STF** (CF 103-A, § 3º; Lei 11.417/2006, art. 7º) | Via desta skill — abaixo |
| Negativa com **reflexo na liberdade de locomoção** (ex.: defesa impedida de acessar APF/decreto de preventiva) | **Habeas corpus** — ver skill `habeas-corpus` | O HC tutela locomoção, não a prerrogativa em si |
| Violação de prerrogativa como **direito líquido e certo** sem reflexo na locomoção | **Mandado de segurança** contra o ato da autoridade | Alternativa à Reclamação; prazo decadencial de **120 dias** (Lei 12.016/2009, art. 23) |
| Negativa por **omissão de ato administrativo** | Reclamação **só após esgotar as vias administrativas** (Lei 11.417/2006, art. 7º, § 1º) | Pegadinha clássica — ver abaixo |

## Via 2 — Reclamação constitucional ao STF (descumprimento da SV 14)

**Cabimento:** ato administrativo ou decisão judicial que **contrarie** a SV 14, **negue-lhe vigência** ou a **aplique indevidamente** (CF, art. 102, I, *l*, e art. 103-A, § 3º; Lei 11.417/2006, art. 7º; CPC, arts. 988, III [observância de súmula vinculante], a 993 — no STF, observe também o Regimento Interno). A Reclamação **não substitui** recursos cabíveis — pode ser proposta "sem prejuízo dos recursos ou outros meios admissíveis de impugnação" (Lei 11.417, art. 7º, *caput*), mas não serve de **sucedâneo recursal** quando o que se ataca é mérito diverso.

**Requisitos práticos:**
- **Ato concreto e documentado** que negou o acesso (certidão, despacho, decisão, ofício, gravação de atendimento — sem isso a Rcl é natimorta);
- **Aderência estrita** entre o ato reclamado e o enunciado da SV 14 (negativa de acesso a elementos **já documentados**; se a autoridade reteve apenas diligência em andamento, não há descumprimento);
- Contra **omissão/ato da administração** (ex.: delegado que simplesmente não responde), **esgotamento das instâncias administrativas** (Lei 11.417, art. 7º, § 1º);
- Petição **eletrônica** ao STF, com procuração com poderes específicos se houver sigilo.

```
EXCELENTÍSSIMO SENHOR MINISTRO PRESIDENTE DO SUPREMO TRIBUNAL FEDERAL

RECLAMAÇÃO CONSTITUCIONAL, com pedido de liminar

RECLAMANTE: [investigado, qualificado] — por seu advogado (procuração anexa)
AUTORIDADE RECLAMADA: [Delegado de Polícia da ...ª DP / Promotor de Justiça
da ... / Juízo da ...ª Vara Criminal de ...]
BENEFICIÁRIO/INTERESSADO: [se distinto]

I — DO CABIMENTO
CF, art. 102, I, "l", e art. 103-A, § 3º; Lei 11.417/2006, art. 7º; CPC,
art. 988, III. Ato concreto que contraria a Súmula Vinculante 14.
[Se ato omissivo da administração: demonstrar o esgotamento administrativo
— art. 7º, § 1º, da Lei 11.417/2006.]

II — DOS FATOS
Investigação em curso; pedido de acesso formulado em [data] (doc.); negativa
ou fornecimento incompleto em [data] (doc. — certidão/despacho); prejuízo
concreto à defesa (ex.: prazo em curso, audiência de custódia, resposta à
representação por preventiva).

III — DO DIREITO
1. Aderência: o ato nega acesso a elementos JÁ DOCUMENTADOS que dizem
   respeito ao reclamante — hipótese nuclear da SV 14.
2. Sigilo não é oponível à defesa com procuração (EAOAB, art. 7º, § 10).
3. Precedentes do STF em Reclamações sobre a SV 14 [pesquise via agente
   jurisprudencia-stj-stf e verifique com verificador-citacoes; marque
   [NÃO VERIFICADO] o que não confirmar].

IV — DA LIMINAR (CPC, art. 989, II)
Fumus: enunciado vinculante + prova documental da negativa. Periculum:
prejuízo atual à defesa (prazos, custódia em curso, risco de indiciamento
sem contraditório possível). Pedido: suspensão do ato e acesso IMEDIATO.

V — DOS PEDIDOS
a) liminarmente, a determinação de acesso imediato aos autos (vista e cópia
   integral, inclusive mídias);
b) a notificação da autoridade reclamada para informações (CPC, art. 989, I);
c) a oitiva da Procuradoria-Geral da República (CPC, art. 991);
d) no mérito, a PROCEDÊNCIA, cassando-se o ato reclamado e determinando-se
   à autoridade a observância da SV 14 (CPC, art. 992).

Termos em que pede deferimento.
[LOCAL], [DATA]. [ADVOGADO(A)] — OAB/[UF] nº [Nº]
```

**Documentos essenciais:** procuração; cópia do requerimento de acesso protocolado; **prova da negativa** (certidão, despacho, print de sistema com protocolo sem resposta + reiterações, para o caso de omissão); comprovação da existência do procedimento investigatório.

## Teses típicas da prática

- **Paridade de armas e contraditório (ainda que diferido) na investigação** — a apuração unilateral não pode se converter em processo secreto contra o investigado; o acesso aos elementos documentados é condição do exercício útil da defesa (CF, 5º, LV; SV 14).
- **Sigilo interno ≠ sigilo contra a defesa** — a decretação de sigilo protege a eficácia da investigação perante terceiros; quanto ao investigado, apenas condiciona o acesso à procuração (EAOAB, 7º, § 10).
- **Acesso à íntegra das mídias** — não basta o relatório: a defesa tem direito aos áudios/arquivos **já juntados** (interceptações documentadas, laudos com anexos digitais); o **fornecimento incompleto** é hipótese literal do art. 7º, § 12, do EAOAB, e **impedir a obtenção de cópias** é o crime do art. 32 da Lei 13.869/2019.
- **Colaboração premiada** — termos de colaboração **já documentados** que mencionem o investigado entram no espectro da SV 14 (respeitado o sigilo até os marcos legais da Lei 12.850/2013); ver skill `colaboracao-premiada`; para o estado atual da jurisprudência sobre o momento do acesso, pesquise via agente jurisprudencia-stj-stf.
- **Nulidade absoluta (art. 7º, XXI, EAOAB)** — interrogatório/depoimento colhido sem que a defesa pudesse assistir o cliente é **nulo de pleno direito**, contaminando os elementos derivados; articular com o cerceamento do acesso (XIV) e com a responsabilização do § 12.
- **Investigado ainda não indiciado** — o interesse defensivo não depende de indiciamento formal; basta que os elementos documentados "digam respeito" ao representado.

## Erros comuns e pegadinhas

- **Pedir o que o § 11 permite negar:** requerer "acesso irrestrito a tudo, inclusive diligências em curso" entrega a fundamentação da negativa. Delimite: elementos **já documentados**.
- **Não documentar a negativa:** sem certidão/despacho/protocolo, a Reclamação não demonstra o ato concreto. Sempre peça **certidão da negativa** no próprio requerimento (pedido "c").
- **Reclamação contra omissão sem esgotamento administrativo:** Lei 11.417/2006, art. 7º, § 1º — contra omissão ou ato da administração, só **após esgotadas as vias administrativas**. Reitere, protocole, esgote — depois reclame.
- **Endereçamento errado da Reclamação:** descumprimento de **súmula vinculante** → **STF**, sempre (não TJ, não STJ). Já o requerimento de acesso vai à autoridade que preside o feito — inverter os destinatários é erro fatal.
- **Usar HC como via ordinária de prerrogativa:** o HC pressupõe reflexo na **liberdade de locomoção**; negativa de vista, isoladamente, se ataca por requerimento/MS/Reclamação — ver skill `habeas-corpus`.
- **Esquecer a procuração quando há sigilo:** sem procuração, a negativa é **legítima** (§ 10) e a Reclamação sucumbe na aderência.
- **Confundir com a vista de processo judicial:** processo em juízo tem regime próprio (EAOAB, art. 7º, XV); esta skill trata da fase **investigativa**.
- **Confundir o polo:** a peça da vítima para **instaurar** investigação é o requerimento do art. 5º, II/§ 5º, do CPP — ver skill `requerimento-investigacao`.
- **Tom de ameaça à autoridade:** citar o art. 32 da Lei 13.869/2019 como fundamento normativo, nunca como intimidação — a peça é técnica e o destinatário decidirá outros pedidos da mesma defesa.
- **Prazo do MS:** se optar pelo mandado de segurança, atenção aos **120 dias** do ato coator (Lei 12.016/2009, art. 23) — a Reclamação não tem prazo, mas exige ato ainda eficaz: não cabe contra decisão judicial **transitada em julgado** (Súmula 734/STF — confira o teor via agente `lei-e-sumula`).
- **Custas da Reclamação no STF:** antes de protocolar, confira na tabela de custas vigente do STF se há recolhimento devido ou isenção para a Rcl no caso concreto — não presuma gratuidade.

## Checklist antes de protocolar

**Requerimento de acesso:**
- [ ] Destinatário correto (delegado / MP / juízo, conforme quem preside ou decretou o sigilo)?
- [ ] Procuração anexada (obrigatória se sigilo — § 10)?
- [ ] Pedido delimitado aos elementos **já documentados** (afastando o § 11 de antemão)?
- [ ] Pedido de **cópia integral + mídias** em meio digital?
- [ ] Pedido subsidiário de **certidão da negativa**?

**Reclamação ao STF:**
- [ ] Ato concreto que contraria a SV 14 **provado por documento**?
- [ ] Aderência estrita (negativa recaiu sobre elementos documentados)?
- [ ] Se omissão administrativa: vias administrativas **esgotadas** (art. 7º, § 1º)?
- [ ] Liminar fundamentada em prejuízo **atual** à defesa (prazo, custódia)?
- [ ] Pedidos completos: liminar + informações + PGR + cassação do ato?
- [ ] Precedentes atuais do STF pesquisados via agente e verificados (nada citado de memória)?

## Apoie-se em

- **Agentes:** `lei-e-sumula` (conferir o teor vigente da SV 14 e dos §§ do art. 7º do EAOAB antes de transcrever), `jurisprudencia-stj-stf` (precedentes atuais em Reclamações sobre a SV 14, colaboração premiada e PIC), `verificador-citacoes` (validação obrigatória de toda citação — marque [NÃO VERIFICADO] o que não confirmar).
- **Best-practices:** `peticao-criminal` (forma e estilo da peça), `etica-oab-sigilo` (manejo de autos sigilosos e dever de sigilo profissional), `verificacao-citacoes` (Citation Gate — nenhum julgado citado de memória).
- **Skills relacionadas:** `habilitacao-acesso-autos` (rotina de entrada/habilitação nos autos — ver delimitação na introdução), `requerimento-investigacao` (peça da vítima para instaurar IP/TC/PIC — polo oposto), `habeas-corpus` (quando a negativa repercute na liberdade de locomoção), `colaboracao-premiada` (acesso a termos de colaboração documentados).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
