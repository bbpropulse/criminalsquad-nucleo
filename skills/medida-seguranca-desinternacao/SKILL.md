---
name: medida-seguranca-desinternacao
description: >-
  Use ao elaborar os pedidos do internado em medida de segurança perante o Juízo da Execução —
  desinternação e liberação condicional (arts. 175 a 179 da LEP), exame de cessação de
  periculosidade (inclusive a antecipação do art. 176 da LEP), extinção pelo limite temporal (Súmula
  527/STJ — máximo da pena abstrata; posição do STF pelo teto do art. 75 do CP), prescrição da
  medida de segurança, conversão da internação em… Não use para decisão final, assinatura, protocolo
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
  eval_case_ids: ["csq-v5-medida-seguranca-desinternacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["medida-seguranca-desinternacao", "medida seguranca", "seguranca desinternacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Medida de Segurança — Desinternação e Cessação de Periculosidade

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

Esta skill orienta os **pedidos originários do internado em medida de segurança** perante o Juízo da Execução Penal: exame de cessação de periculosidade (e sua **antecipação**), **desinternação/liberação condicional**, extinção pelo **limite temporal** ou pela **prescrição**, **conversão da internação em tratamento ambulatorial** e providências contra a falta de **vaga em HCTP**. O internado sem termo é o cliente mais vulnerável da execução — frequentemente esquecido, sem pedido protocolado há anos. Esta skill cobre o **pedido**; o **recurso** contra o indeferimento é o agravo em execução — ver skill `agravo-em-execucao`.

> **Lição central:** medida de segurança **não é pena**, mas é **sanção penal** — e por isso tem **limite**. O erro mais grave da prática é tratar a internação como indeterminada de fato: sem exame anual, sem provocação da defesa, o internado fica "esquecido". **Todo internado tem direito ao exame anual (art. 97, §2º, CP) e à antecipação a qualquer tempo (art. 176 da LEP)** — e a medida não pode ultrapassar o máximo da pena abstrata (Súmula 527/STJ).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 96 a 99 do CP, dos arts. 171 a 179 da LEP e da Lei 10.216/2001 via agente `lei-e-sumula`. Onde a peça exigir precedente atual (limite temporal no STF, desinternação progressiva, prescrição da MS), **pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**.

## O instituto e a base legal

A medida de segurança é a resposta penal ao **inimputável** (art. 26, *caput*, CP) absolvido **impropriamente** (art. 386, parágrafo único, III, CPP) e, no sistema **vicariante** da Reforma de 1984, ao **semi-imputável** (art. 26, parágrafo único, c/c art. 98, CP) quando o laudo recomendar substituição da pena. Duas espécies (art. 96, CP):

- **Internação** em Hospital de Custódia e Tratamento Psiquiátrico — HCTP (art. 96, I) — estabelecimento com características **hospitalares** (art. 99, CP);
- **Tratamento ambulatorial** (art. 96, II) — cabível quando o fato for punível com **detenção** (art. 97, *caput*) e, pela leitura atual, sempre que a condição clínica o recomendar (Lei 10.216/2001, art. 4º: a internação só se justifica quando os recursos extra-hospitalares forem **insuficientes**).

Execução: **arts. 171 a 179 da LEP**. Ninguém é internado sem a **guia de internamento** expedida após o trânsito em julgado (arts. 171-173). A duração é "por prazo indeterminado" com **mínimo de 1 a 3 anos** (art. 97, §1º) — mas o "indeterminado" foi domesticado pela jurisprudência (ver limite temporal abaixo).

## Cabimento — o cardápio de pedidos do internado

| Pedido | Base legal | Quando cabe |
|--------|-----------|-------------|
| Exame de cessação **ordinário** | art. 97, §2º, CP; art. 175 LEP | ao fim do prazo mínimo; **repetido de ano em ano** |
| **Antecipação** do exame | art. 176 LEP | **a qualquer tempo, ainda no curso do prazo mínimo** — a requerimento do MP, do interessado, de seu procurador ou defensor |
| **Desinternação / liberação** condicional | art. 97, §3º, CP; arts. 178-179 LEP | laudo atestando cessação da periculosidade |
| Conversão internação → **ambulatorial** | arts. 96-97 CP; Lei 10.216/2001, art. 4º | periculosidade atenuada / desinternação progressiva |
| **Extinção pelo limite temporal** | Súmula 527/STJ; art. 75 CP (posição STF) | tempo de MS superior ao máximo da pena abstrata |
| **Extinção pela prescrição** | arts. 107, IV, e 109 CP | cálculo pelo **máximo da pena abstratamente cominada** |
| Transferência a **HCTP** / vedação de cadeia comum | art. 99 CP; Lei 10.216/2001 | internado recolhido a presídio comum por falta de vaga |

**Terminologia (cai em prova e em despacho):** *desinternação* é para quem está **internado**; *liberação* é para quem está em **tratamento ambulatorial**. Ambas são **sempre condicionais** por **1 ano** (art. 97, §3º, CP).

## O rito do exame de cessação (art. 175 da LEP)

1. Até **1 mês antes** de expirar o prazo mínimo, a autoridade administrativa remete ao juiz **relatório** que habilite a decidir sobre a revogação ou permanência da medida;
2. O relatório é instruído com o **laudo psiquiátrico**;
3. Vista ao **MP** e ao **curador ou defensor** — **3 dias** para cada;
4. O juiz ordena diligências (se necessárias) e **decide em 5 dias**.

**Antecipação (art. 176):** a qualquer tempo, mesmo dentro do prazo mínimo, o juiz **pode** ordenar o exame, a requerimento fundamentado do MP, do interessado, procurador ou defensor — segue o mesmo rito do art. 175. É a porta de entrada da defesa ativa: **não espere o exame anual** se há elementos clínicos novos (relatório da equipe de saúde, estabilização medicamentosa, suporte familiar).

## Desinternação e liberação condicional (arts. 178-179 da LEP)

- Atestada a cessação da periculosidade, a desinternação/liberação é deferida **sob condições** — aplicam-se, no que couber, as condições do **livramento condicional** (art. 178 da LEP, que remete aos arts. 132 e 133).
- **Cláusula de retorno (art. 97, §3º, CP):** restabelece-se a situação anterior se, **antes de 1 ano**, o liberado pratica **"fato indicativo de persistência de periculosidade"** — atenção: **não exige novo crime**, o que a defesa deve atacar quando o "fato" for trivial (mera resistência a tratamento, conflito familiar sem relevância penal).
- **Art. 179 da LEP — a pegadinha do trânsito em julgado:** o juiz só expede a ordem de desinternação/liberação **após o trânsito em julgado** da decisão. Consequência: o agravo em execução interposto pelo MP contra a desinternação tem, **excepcionalmente, efeito suspensivo** — é a única exceção ao art. 197 da LEP. O rito, o prazo de 5 dias (Súmula 700/STF) e o efeito regressivo estão detalhados na skill `agravo-em-execucao` (não duplique: fundamente o pedido aqui; recorra lá).

## Limite temporal — a medida de segurança não é perpétua

A CF veda penas de caráter perpétuo (art. 5º, XLVII, "b") e a medida de segurança, como espécie de sanção penal, sofre a mesma trava:

- **Súmula 527/STJ:** *"O tempo de duração da medida de segurança não deve ultrapassar o limite máximo da pena abstratamente cominada ao delito praticado."* — é o **teto mais favorável** e a tese principal da defesa.
- **Posição do STF:** limite pelo teto do **art. 75 do CP** (30 anos à época dos precedentes; **40 anos** após a Lei 13.964/2019) — patamar menos favorável que o do STJ. Pesquise o precedente atual e eventual evolução via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar.
- **Consequência prática:** atingido o teto, a medida se **extingue** — a persistência do transtorno mental **não autoriza** manter a custódia penal; a via passa a ser **civil** (interdição/internação compulsória na forma da Lei 10.216/2001), a requerimento do MP ou de familiar perante o juízo cível.
- Use o agente `dosimetria-pena` para identificar o **máximo da pena abstrata** do tipo imputado (com majorantes em fração máxima, quando incidirem sobre o teto) — é ele que define o marco da Súmula 527.

## Prescrição da medida de segurança

STF e STJ reconhecem que a medida de segurança, por ser sanção penal, **prescreve** (art. 107, IV, CP). O cálculo se faz pela **pena máxima abstratamente cominada** ao delito (art. 109, CP) — tanto para a pretensão punitiva quanto, na leitura dominante, para a executória do inimputável (que não tem pena concreta como parâmetro). Verifique a tese atual via `jurisprudencia-stj-stf` antes de peticionar; marque [NÃO VERIFICADO] o que não confirmar. Cliente internado por fato antigo, com longa espera de vaga ou execução paralisada, é candidato natural a essa tese. Para a metodologia geral do cálculo (marcos, suspensões, art. 115) e a estrutura do pedido, ver a skill `extincao-punibilidade-prescricao`, sempre com o cálculo conferido pelo agente `dosimetria-pena`.

## Conversão internação → ambulatorial e desinternação progressiva

- **Base normativa:** a Lei 10.216/2001 (reforma psiquiátrica) impõe que a internação seja **ultima ratio** (art. 4º) e orientada à **reinserção social** (art. 4º, §1º) — ela **releu** o art. 97 do CP: a jurisprudência admite tratamento ambulatorial **mesmo em crime punível com reclusão**, quando o laudo recomendar (pesquise os precedentes via `jurisprudencia-stj-stf`).
- **Desinternação progressiva:** construção jurisprudencial que autoriza etapas intermediárias (alta progressiva, saídas terapêuticas, ambulatorial supervisionado) antes da desinternação definitiva — pleiteie como pedido **subsidiário** quando o laudo indicar melhora sem cessação completa.
- **Cuidado com o §4º do art. 97:** a via inversa (ambulatorial → internação) pode ser determinada pelo juiz "em qualquer fase do tratamento" — a defesa exige **fundamentação concreta** e laudo atual para essa regressão.

## Vaga em HCTP — internado não fica em cadeia comum

Manter o internado em **presídio comum** por falta de vaga em HCTP é constrangimento ilegal: viola o art. 99 do CP (estabelecimento com características hospitalares), a Lei 10.216/2001 e a dignidade da pessoa humana. Teses escalonadas:

1. **Transferência imediata** a HCTP ou ala de tratamento adequada;
2. Subsidiariamente, **tratamento ambulatorial** ou internação em rede pública de saúde (RAPS) enquanto não há vaga — o déficit estrutural do Estado não pode ser suportado pelo internado (mesma lógica da SV 56/STF para a falta de vaga em regime prisional, invocada **por analogia** — pesquise a aplicação específica à MS via `jurisprudencia-stj-stf`);
3. Comunicação ao juízo e ao MP para providências junto à Secretaria competente.

## Estrutura forense da peça

Peça **simples** (não bipartida), dirigida ao **Juízo da Execução Penal** onde corre a execução da medida (art. 66 da LEP — competência para desinternação e restabelecimento). Estrutura: **endereçamento → qualificação → fatos → direito → pedidos** (escalonados do principal ao subsidiário).

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução de Medida de Segurança nº [Nº DA EXECUÇÃO]


[NOME DO INTERNADO], já qualificado nos autos em epígrafe, submetido a medida de
segurança de [INTERNAÇÃO/TRATAMENTO AMBULATORIAL] imposta na sentença de
absolvição imprópria proferida nos autos nº [Nº DO PROCESSO DE ORIGEM] (art. 386,
parágrafo único, III, do CPP), por seu [advogado/defensor público] que esta
subscreve [(procuração anexa)], vem, respeitosamente, à presença de Vossa
Excelência, com fundamento nos arts. 97, §§2º e 3º, do Código Penal e 175, 176 e
178 da Lei de Execução Penal, requerer

[A ANTECIPAÇÃO DO EXAME DE CESSAÇÃO DE PERICULOSIDADE / A DESINTERNAÇÃO
CONDICIONAL / A EXTINÇÃO DA MEDIDA DE SEGURANÇA PELO LIMITE TEMPORAL]

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O requerente encontra-se internado no [HCTP/ESTABELECIMENTO] desde [DATA DO
INÍCIO], em razão do fato descrito como [TIPO PENAL — ex.: art. 129, §1º, do CP],
cuja pena máxima abstrata é de [MÁXIMO ABSTRATO].

[Narrar: prazo mínimo fixado e seu termo; data do último exame de cessação (ou a
ausência de exame anual); elementos clínicos atuais — relatório da equipe de
saúde, estabilização, suporte familiar; se for o caso, o tempo total de medida já
cumprido ou a permanência indevida em presídio comum.]


II — DO DIREITO

a) [Do direito ao exame de cessação / da antecipação — art. 97, §2º, CP; arts.
175 e 176 da LEP: exame ao fim do prazo mínimo, repetição anual e antecipação a
qualquer tempo a requerimento da defesa.]

b) [Da cessação da periculosidade e da desinternação condicional — art. 97, §3º,
CP; art. 178 da LEP: laudo favorável anexo/os elementos clínicos indicam a
cessação; condições dos arts. 132 e 133 da LEP.]

c) [Do limite temporal — Súmula 527/STJ: a medida não pode ultrapassar o máximo
da pena abstratamente cominada ([MÁXIMO ABSTRATO]), já superado em [DATA];
subsidiariamente, o teto do art. 75 do CP. Precedentes atuais: pesquisar via
jurisprudencia-stj-stf e verificar com verificador-citacoes; marcar
[NÃO VERIFICADO] o que não se confirmar.]

d) [Subsidiário — conversão em tratamento ambulatorial / desinternação
progressiva — Lei 10.216/2001, art. 4º: internação como ultima ratio.]


III — DOS PEDIDOS

Diante do exposto, requer:

a) [a designação imediata do exame de cessação de periculosidade, na forma dos
   arts. 175 e 176 da LEP, com vista ao MP e à defesa (3 dias) e decisão em 5
   dias];
b) [atestada a cessação, a DESINTERNAÇÃO CONDICIONAL, nos termos do art. 97,
   §3º, do CP e do art. 178 da LEP];
c) [subsidiariamente, a conversão da internação em TRATAMENTO AMBULATORIAL ou a
   desinternação progressiva];
d) [na hipótese de excesso temporal: a EXTINÇÃO da medida de segurança, com a
   expedição de alvará de desinternação, sem prejuízo do encaminhamento à rede
   de saúde na forma da Lei 10.216/2001];
e) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO/DEFENSOR]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO INTERNADO], [Nº DO PROCESSO DE ORIGEM], [HCTP/ESTABELECIMENTO], [DATA DO INÍCIO], [TIPO PENAL], [MÁXIMO ABSTRATO], [LOCAL], [DATA], [NOME], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração (ou indicação da atuação da Defensoria — LC 80/94).
2. Guia de internamento e cálculo/atestado de tempo de medida cumprido.
3. Último laudo de cessação de periculosidade (ou certidão de que **não há** exame anual — isso é fundamento, não obstáculo).
4. Relatórios da equipe multidisciplinar de saúde (psiquiatria, psicologia, serviço social).
5. Comprovação de suporte familiar/rede de acolhimento (fortalece a desinternação condicional e o ambulatorial).

## Roteiro de tese (defesa)

1. **Levantar a linha do tempo:** data do fato, início da internação, prazo mínimo, data do último exame, máximo da pena abstrata (via `dosimetria-pena`). A maioria das teses nasce desse cálculo.
2. **Sem exame anual?** → requerer imediatamente (art. 97, §2º, CP) e, se conveniente, **antecipar** (art. 176 da LEP) — a omissão do Estado é constrangimento ilegal.
3. **Tempo de medida > máximo abstrato** → extinção (Súmula 527/STJ); subsidiariamente teto do art. 75 CP (STF).
4. **Fato antigo / execução paralisada** → prescrição pela pena máxima em abstrato.
5. **Laudo com melhora parcial** → desinternação progressiva ou conversão em ambulatorial (Lei 10.216/2001).
6. **Internado em presídio comum** → transferência imediata a HCTP ou ambulatorial provisório (analogia à SV 56/STF).
7. **Restabelecimento da internação** (art. 97, §§3º-4º) → exigir fundamentação concreta e laudo atual; "fato indicativo de periculosidade" não é qualquer intercorrência.
8. **Indeferido o pedido** → agravo em execução em 5 dias (ver skill `agravo-em-execucao`).

## Erros comuns e pegadinhas

- [ ] **Endereçamento errado:** o pedido vai ao **Juízo da Execução** (art. 66 da LEP), não ao juízo da condenação nem ao tribunal.
- [ ] **Confundir institutos:** desinternação **não é** progressão de regime — não há percentuais do art. 112 da LEP, não há falta grave interrompendo lapso; o critério é **clínico** (periculosidade), não meritório-temporal (ver skill `execucao-progressao-regime` apenas para contraste, não para fundamentar).
- [ ] **Ignorar o art. 179 da LEP:** a ordem de desinternação só sai **após o trânsito em julgado** — gerencie a expectativa do cliente e da família; o agravo do MP segura a soltura (única hipótese de efeito suspensivo — detalhes na skill `agravo-em-execucao`).
- [ ] **Esperar o exame anual** quando o art. 176 permite a antecipação a qualquer tempo.
- [ ] **Esquecer a condicionalidade de 1 ano** (art. 97, §3º) — oriente o cliente/família sobre a cláusula de retorno.
- [ ] **Semi-imputável com pena substituída (art. 98):** a duração da MS substitutiva orienta-se pela pena aplicada/limites próprios — não trate como internação de inimputável; confira a tese vigente via `jurisprudencia-stj-stf`.
- [ ] **Confundir com o art. 183 da LEP** (doença mental superveniente na execução da **pena** → conversão em MS): ali a jurisprudência limita a duração ao **restante da pena** — instituto diverso do desta skill.
- [ ] **Citar precedente de memória:** número de HC/REsp sobre limite temporal, prescrição ou desinternação progressiva **somente** após pesquisa via `jurisprudencia-stj-stf` + `verificador-citacoes`; o que não se confirmar, marque [NÃO VERIFICADO] e não protocole assim.
- [ ] **Prazo do recurso:** indeferido o pedido, o agravo tem **5 dias** (Súmula 700/STF) — não deixe precluir aguardando "reconsideração". Contagem **processual penal** (art. 798, §1º, do CPP: dias corridos, exclui o dia do começo e inclui o do vencimento) — não confundir com a contagem **penal material** do art. 10 do CP (que inclui o dia do começo e rege prazos como o prescricional).
- [ ] **Defensoria Pública:** prazo **em dobro** e **intimação pessoal** (LC 80/94) — o termo inicial só corre da entrega dos autos/intimação pessoal; não aplique a dobra ao advogado constituído.

## Lembretes finais

- **Linha do tempo primeiro** — prazo mínimo, exames, tempo total × máximo abstrato: é dela que saem as teses.
- **Exame anual é direito; antecipação é estratégia** (arts. 97, §2º, CP; 176 da LEP).
- **MS não é perpétua:** Súmula 527/STJ (máximo abstrato) como tese principal; art. 75 CP (STF) como subsidiária.
- **Desinternação é sempre condicional (1 ano)** e a ordem só sai com o trânsito em julgado (art. 179 da LEP).
- **Esgotado o teto, a via é civil** (Lei 10.216/2001) — não se prorroga custódia penal por laudo desfavorável.
- **Conferir dispositivos e precedentes** via `lei-e-sumula`, `jurisprudencia-stj-stf` e `verificador-citacoes` antes de protocolar. Toda peça é rascunho para revisão humana.

## Apoie-se em

- **Skill `agravo-em-execucao`** — recurso contra o indeferimento (prazo de 5 dias, peça bipartida, efeito regressivo) e o efeito suspensivo excepcional do art. 179 da LEP.
- **Agente `jurisprudencia-stj-stf`** — Súmula 527/STJ, posição do STF sobre o limite temporal, desinternação progressiva, prescrição da MS e teses supervenientes.
- **Agente `dosimetria-pena`** — cálculo do máximo da pena abstrata (marco do limite temporal e da prescrição).
- **Agente `verificador-citacoes`** — Citation Gate: nenhum precedente entra na peça sem verificação; o não confirmado recebe [NÃO VERIFICADO].
- **Agente `lei-e-sumula`** — conferência da redação vigente de CP, LEP e Lei 10.216/2001.
- **Best-practice `peticao-criminal`** — estrutura, tom e formatação da petição.
- **Squad `execucao-penal`** — esta skill integra o fluxo de execução penal do squad, ao lado de progressão, livramento e remição.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
