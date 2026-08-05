---
name: transferencia-direitos-preso
description: >-
  Use ao peticionar ao juízo da execução/VEP direitos e condições de custódia do preso —
  transferência/remoção de estabelecimento (art. 86 LEP, proximidade da família), rol de direitos do
  art. 41 da LEP (visita, entrevista pessoal com advogado, assistência material e à saúde),
  impugnação de RDD/isolamento (arts. 52-54 e 60 LEP) e interdição de estabelecimento (art. 66,
  VIII, LEP). Gatilhos: transferência de preso, remoção de… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-transferencia-direitos-preso"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["transferencia-direitos-preso", "transferencia direitos", "direitos preso"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Transferência e Direitos do Preso (execução penal)

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

Esta skill orienta as **petições de direitos e condições de custódia** perante o Juízo da Execução Penal (VEP): **transferência/remoção de estabelecimento** (art. 86 da LEP — proximidade da família ou segurança do próprio preso), **efetivação dos direitos do art. 41 da LEP** (visita, entrevista pessoal com advogado, assistência material e à saúde), **impugnação de RDD e isolamento** (arts. 52-54 e 60) e **interdição de estabelecimento inadequado** (art. 66, VIII). É o complemento necessário dos benefícios de tempo de pena: enquanto `execucao-progressao-regime` e as demais skills `execucao-*` tratam de **quando** o preso sai, esta trata de **como** e **onde** ele cumpre a pena.

> **Lição central:** a pena atinge só a liberdade de ir e vir — **todos os demais direitos permanecem** (art. 3º da LEP; CF, art. 5º, XLIX). O erro mais comum é tratar o pedido como "favor" à discricionariedade da administração: enquadre sempre como **direito subjetivo ou interesse juridicamente tutelado**, com base legal expressa, e escolha o **eixo certo** (remoção, direito do art. 41, sanção disciplinar ou interdição), pois cada um tem rito e endereçamento próprios.

> **Cautela de vigência (obrigatória antes de citar):** confira o art. 52 da LEP, a Lei 11.671/2008 e as normas de transferência/RDD. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução; confira cada dispositivo e autoridade em fonte oficial.

> **Gate P0 do art. 112:** transferência ou RDD não define regra de progressão. Se a saída tocar percentual, lapso ou data de benefício, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte fontes oficiais no mesmo dia e registre regra intertemporal, decisões e revisor humano. Incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**.

## Instituto e base legal

- **CF, art. 5º, XLVIII, XLIX e L** — cumprimento em estabelecimento adequado à natureza do delito, idade e sexo; respeito à integridade física e moral; permanência da mãe com o filho na amamentação. **CF, art. 1º, III** (dignidade) e **art. 227** (convivência familiar da criança).
- **LEP, arts. 3º, 10-14 e 40-41** — direitos não atingidos pela sentença; assistências (material, saúde, jurídica, educacional, social, religiosa); dever de respeito à integridade; rol de direitos do preso.
- **LEP, art. 86 e §§** — execução da pena em outra unidade da federação; estabelecimento distante no interesse da segurança pública **ou do próprio condenado**; definição judicial do estabelecimento adequado (§3º — redação **a confirmar** via `lei-e-sumula`).
- **LEP, art. 103** — cada comarca terá ao menos uma cadeia pública para garantir a **permanência do preso próximo ao meio social e familiar** (âncora legal da tese de proximidade).
- **LEP, arts. 52-54, 57-60** — RDD (hipóteses taxativas), decisão judicial prévia, procedimento disciplinar e isolamento preventivo.
- **LEP, art. 66, V, "g", VI, VII e VIII** — competência do juiz da execução para remoção, zelo pelo correto cumprimento da pena, inspeção mensal e **interdição** de estabelecimento.
- **Lei 8.906/94 (EAOAB), art. 7º, III** — direito do advogado de comunicar-se **pessoal e reservadamente** com cliente preso, mesmo sem procuração.
- **Lei 11.671/2008** — inclusão e transferência em **presídio federal** de segurança máxima (rito próprio, juízo de origem + juízo federal corregedor).
- **Regras de Mandela (ONU)** — Regra 59 (alocação próxima ao lar/meio de reinserção); Regras 43-44 (vedação do confinamento solitário prolongado — mais de 15 dias consecutivos). Reforço de convencionalidade, com o Pacto de San José (art. 5º).
- **ADPF 347/STF (estado de coisas inconstitucional do sistema carcerário)** — notória; use como pano de fundo argumentativo e **confira o estado atual do cumprimento** via `jurisprudencia-stj-stf`.

## Cabimento — escolha o eixo certo

| Eixo | Pedido típico | Base | Quem decide |
|------|---------------|------|-------------|
| 1. Remoção/transferência | mudar de unidade (proximidade da família; risco de morte; saúde) | art. 86 c/c arts. 66, V, "g", e 103 LEP | Juízo da execução (interestadual: com anuência do juízo de destino) |
| 2. Direitos do art. 41 | restabelecer visita, entrevista com advogado, assistência à saúde/material | arts. 40-41 LEP; art. 7º, III, EAOAB | Diretor (administrativo) → Juízo da execução (art. 66, VI) |
| 3. RDD/isolamento | impugnar inclusão, prorrogação ou isolamento preventivo | arts. 52-54 e 60 LEP | **Só o juiz** decreta RDD; diretor apenas isola preventivamente até 10 dias |
| 4. Interdição | interditar (total/parcialmente) unidade em condições inadequadas | art. 66, VIII, LEP | Juízo da execução, provocável por qualquer legitimado do art. 195 |

**Legitimidade ampla (art. 195 da LEP):** o procedimento judicial inicia-se de ofício, a requerimento do MP, **do interessado, de quem o represente**, do cônjuge, parente ou descendente, por proposta do Conselho Penitenciário ou da autoridade administrativa. A defesa pode provocar qualquer dos quatro eixos.

## Eixo 1 — Transferência e remoção de estabelecimento

**O que sustentar:** a transferência para unidade próxima à família **não é direito absoluto**, mas a recusa precisa de motivação concreta — a regra legal é a permanência no meio social e familiar (art. 103 da LEP; Regra 59 de Mandela), instrumento da finalidade ressocializadora (art. 1º da LEP) e da proteção à convivência familiar dos filhos (CF, art. 227). Conveniência genérica da administração não basta para negá-la.

- **Proximidade da família:** prove o vínculo (certidões, comprovante de residência dos familiares, declaração de hipossuficiência para visitar) e **indique a unidade de destino** (ou ao menos a comarca/região). Pedido genérico é indeferido de plano.
- **Risco à vida/integridade (facção, ameaça):** art. 86, §1º (interesse de segurança **do próprio condenado**) — instrua com boletins internos, declarações, notícias de conflito entre facções; peça **tramitação urgente** e, se preciso, custódia provisória em seção segura.
- **Saúde:** tratamento indisponível na unidade → remoção para estabelecimento com atendimento adequado ou hospital de custódia (arts. 14 e 40-41, VII, LEP), sem prejuízo do pedido autônomo de saúde (eixo 2).
- **Interestadual:** o pedido corre no juízo da execução **de origem**, que oficia ao juízo do estado de destino para anuência/vaga; havendo impasse entre juízos, cabe conflito de competência no tribunal competente.
- **Presídio federal (Lei 11.671/2008):** rito próprio — em regra é pleito do Estado/MP contra o preso; a defesa atua **impugnando** a inclusão/renovação (excepcionalidade, prazo de permanência, fundamentação concreta). **Súmula 639/STJ:** a transferência ou permanência em presídio federal **sem oitiva prévia da defesa não fere** contraditório — não gaste a tese na forma; ataque os **fundamentos** e a ausência dos requisitos.
- **Preso provisório:** a competência é do **juízo do processo de conhecimento**, não da VEP — endereçamento distinto. E lembre a **Súmula 192/STJ**: condenados da Justiça Federal, Militar ou Eleitoral recolhidos em estabelecimento estadual executam a pena perante o Juízo das Execuções **do Estado**.

## Eixo 2 — Direitos do art. 41 da LEP

Rol central (não exaustivo — art. 3º): alimentação e vestuário (I); trabalho remunerado (II); previdência (III); pecúlio (IV); proporcionalidade na distribuição do tempo (V); atividades profissionais, intelectuais e desportivas (VI); **assistências** material, à saúde, jurídica, educacional, social e religiosa (VII); proteção contra sensacionalismo (VIII); **entrevista pessoal e reservada com o advogado (IX)**; **visita** de cônjuge, companheira, parentes e amigos (X); chamamento nominal (XI); igualdade de tratamento (XII); audiência com o diretor (XIII); **representação e petição a qualquer autoridade** (XIV); contato com o mundo exterior — correspondência e leitura (XV); atestado anual de pena a cumprir (XVI).

**A chave do parágrafo único:** somente os incisos **V, X e XV** podem ser suspensos ou restringidos, e ainda assim **por ato motivado do diretor**. Consequências práticas:

1. **Entrevista com advogado (IX) é irrestringível** por ato administrativo — soma-se o art. 7º, III, do EAOAB (comunicação pessoal e reservada, mesmo sem procuração). Negativa de atendimento ao advogado enseja pedido imediato ao juízo (art. 66, VI) e, conforme o caso, representação contra a autoridade.
2. **Visita suspensa sem motivação escrita e individualizada** = ato nulo; sanção coletiva é vedada (art. 45, §3º). Peça a exibição do ato e o restabelecimento.
3. **Assistência à saúde (VII c/c art. 14):** omissão do Estado → requerer escolta para atendimento externo, fornecimento de medicamento ou remoção; instrua com receitas, laudos e requerimentos administrativos não atendidos.
4. **Esgotar a via administrativa não é requisito** (inafastabilidade da jurisdição — CF, art. 5º, XXXV), mas **documentar o requerimento ao diretor e a negativa/inércia** fortalece muito o pedido judicial.

## Eixo 3 — RDD e isolamento

Hipóteses **taxativas** do art. 52 (red. Lei 13.964/2019): falta grave consistente em crime doloso com subversão da ordem ou disciplina internas; alto risco para a ordem e segurança do estabelecimento ou da sociedade; fundadas suspeitas de envolvimento ou participação em organização criminosa. Características (cela individual, visitas e banho de sol limitados, entrevistas monitoradas **exceto com o defensor**, prazo de até 2 anos e prorrogações) — **confira a redação vigente dos §§ via `lei-e-sumula`** antes de transcrever.

**Garantias procedimentais a fiscalizar (teses de nulidade):**
- RDD **só por prévio e fundamentado despacho judicial** (art. 54) — jamais por ato do diretor; o requerimento deve ser circunstanciado e a decisão precedida de **manifestação da defesa e do MP**, no prazo máximo de 15 dias (art. 54, §§).
- **Isolamento preventivo** decretado pela autoridade administrativa: máximo de **10 dias** (art. 60); o tempo de isolamento/inclusão preventiva **é detraído** da sanção (art. 60, parágrafo único).
- Sanção disciplinar exige **previsão legal anterior** (art. 45), sem cela escura (§2º) nem sanção coletiva (§3º); falta grave exige PAD com direito de defesa (art. 59; **Súmula 533/STJ** — defesa técnica no PAD). **Atenção:** o STF, em repercussão geral, admitiu que a audiência de justificação judicial supre vícios do PAD — pesquise o estado atual dessa tensão via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até conferir.
- **Convencionalidade:** Regras de Mandela 43-44 vedam o confinamento solitário prolongado (mais de 15 dias consecutivos) — use como reforço contra RDD desproporcional e prorrogações automáticas.
- Fundamentação **concreta e atual**: "periculosidade abstrata" ou pertença genérica a facção, sem fato específico, não sustenta inclusão nem prorrogação.

## Eixo 4 — Interdição de estabelecimento (art. 66, VIII)

O juiz da execução **interdita, no todo ou em parte**, estabelecimento que funcione em condições inadequadas ou com infringência à LEP. A defesa provoca por petição (art. 195), instruída com fotos, relatórios de inspeção (juiz — art. 66, VII; MP — art. 68, parágrafo único; Defensoria e Conselho da Comunidade), dados de superlotação e laudos sanitários. Pedidos escalonados: interdição parcial (ala/cela), proibição de novas entradas, prazo para adequação com obrigações de fazer, realocação dos presos. O STF assentou em repercussão geral que o Judiciário **pode impor à Administração obrigações de fazer** (reformas/obras) em presídios, sem esbarrar na separação de poderes — pesquise o precedente via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**. Não confunda com a SV 56 (falta de vaga em regime — matéria de `execucao-progressao-regime`).

## Estrutura forense da peça

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]

Autos de Execução Penal nº [Nº DA EXECUÇÃO]

[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe,
atualmente recolhido no [ESTABELECIMENTO ATUAL], por seu advogado que esta
subscreve (procuração anexa), vem, respeitosamente, à presença de Vossa
Excelência, com fundamento nos arts. 3º, 41, 66 e [86 / 52-54 / 66, VIII] da
Lei de Execução Penal, requerer

[TRANSFERÊNCIA DE ESTABELECIMENTO PRISIONAL / EFETIVAÇÃO DE DIREITO DO ART. 41
/ REVOGAÇÃO DE RDD OU ISOLAMENTO / INTERDIÇÃO DE ESTABELECIMENTO]

pelas razões de fato e de direito a seguir expostas.

I — DOS FATOS
[Situação concreta: unidade atual e distância da família (km, custo, frequência
de visitas); OU direito negado/suspenso, com data e ato do diretor; OU decisão
de RDD/isolamento impugnada; OU condições da unidade. Narrativa documentada.]

II — DO DIREITO
a) [Eixo 1] Da permanência próxima ao meio familiar — arts. 86 e 103 da LEP;
   CF, arts. 1º, III, e 227; Regra 59 das Regras de Mandela; finalidade
   ressocializadora (art. 1º da LEP). Indicação da unidade de destino e da
   viabilidade concreta (vaga/regional).
b) [Eixo 2] Do direito subjetivo do art. 41, [INCISO] — irrestringibilidade
   fora do parágrafo único; exigência de ato motivado; art. 7º, III, do EAOAB
   (se entrevista com advogado); arts. 14 e 40 (se saúde).
c) [Eixo 3] Da ilegalidade do RDD/isolamento — taxatividade do art. 52;
   ausência de decisão judicial prévia fundamentada (art. 54); excesso de
   prazo do isolamento (art. 60); detração; Regras de Mandela 43-44.
d) [Eixo 4] Da interdição — art. 66, VIII; provas das condições inadequadas;
   pedidos escalonados de adequação.

III — DO PEDIDO
a) [pedido principal do eixo escolhido];
b) subsidiariamente, [alternativa: outra unidade da mesma região / restabele-
   cimento parcial / limitação do prazo da sanção];
c) tramitação prioritária/urgente [se risco à vida ou à saúde];
d) a juntada dos documentos anexos e a intimação do Ministério Público.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Documentos por eixo:** procuração e guia de recolhimento (sempre); eixo 1 — certidões de vínculo familiar, comprovante de residência dos familiares, atestado de conduta, indicação da unidade de destino; eixo 2 — cópia do ato do diretor (ou prova da inércia), requerimento administrativo, laudos/receitas médicas; eixo 3 — cópia da decisão de RDD e do PAD; eixo 4 — fotos, relatórios de inspeção, dados de lotação.

## Teses típicas

1. **Permanência junto à família é a regra legal** (art. 103 da LEP) — a negativa exige motivação concreta; invocar CF, art. 227, quando há filhos menores.
2. **Remoção por risco à integridade** (art. 86, §1º — segurança do próprio condenado) com urgência.
3. **Entrevista com advogado não se restringe** (art. 41, IX, fora do parágrafo único + art. 7º, III, EAOAB).
4. **Suspensão de visita sem ato motivado e individualizado é nula** (art. 41, parágrafo único, c/c art. 45, §3º).
5. **Omissão de assistência à saúde** = constrangimento ilegal reparável pelo juízo da execução (arts. 14, 40 e 41, VII; CF, art. 5º, XLIX).
6. **RDD sem decisão judicial prévia fundamentada é nulo** (art. 54); isolamento preventivo acima de 10 dias é excesso (art. 60), com detração obrigatória.
7. **Prorrogação de RDD por fundamento genérico** (pertença abstrata a facção) não se sustenta — exigir fato novo concreto.
8. **Interdição com obrigações de fazer** — condições degradantes violam o art. 40 da LEP e o estado de coisas inconstitucional reconhecido na ADPF 347 (conferir estado atual).

## Erros comuns e pegadinhas

- **Endereçamento trocado:** preso **provisório** → juízo do processo, não a VEP; condenado da Justiça Federal em presídio estadual → VEP estadual (Súmula 192/STJ); presídio federal → rito da Lei 11.671/2008 (juízo de origem + corregedor federal).
- **Indeferimento sem recurso:** a decisão do juiz da execução desafia **agravo em execução em 5 dias** (art. 197 da LEP; **Súmula 700/STF**) — sem efeito suspensivo em regra; perder o quinquídio preclui. Contagem **penal** (art. 798 do CPP): dias corridos, exclui-se o dia do começo e inclui-se o do vencimento; prazo **em dobro** para a Defensoria Pública (LC 80/94, arts. 44, I, 89, I, e 128, I). Use a skill `agravo-em-execucao`.
- **HC como atalho:** transferência de estabelecimento e condições de custódia, em regra, **não comportam habeas corpus** — a via própria é a petição ao juízo da execução (art. 66 da LEP); reserve o HC para ilegalidade com reflexo direto na liberdade e confira o entendimento atual via `jurisprudencia-stj-stf`.
- **Pedido genérico de transferência** sem unidade de destino, sem prova do vínculo familiar e sem viabilidade concreta → indeferimento quase certo.
- **Tratar transferência como direito absoluto:** a tese vencedora é razoabilidade + motivação da recusa, não "direito líquido e certo" à unidade escolhida.
- **Atacar presídio federal pela falta de oitiva prévia:** Súmula 639/STJ fecha essa porta — concentre-se nos requisitos materiais e no prazo de permanência (redação vigente **a confirmar** via `lei-e-sumula`).
- **Confundir RDD com regressão de regime:** RDD é **sanção disciplinar** (art. 53, V) com rito próprio; regressão é incidente da execução (outra peça, outros requisitos).
- **Ignorar a detração do isolamento preventivo** (art. 60, parágrafo único) ao impugnar a sanção.
- **Citar Súmula 533/STJ sem ressalva:** verifique antes o entendimento do STF sobre a audiência de justificação suprir o PAD (**[NÃO VERIFICADO]** até pesquisa via `jurisprudencia-stj-stf`).
- **Não documentar a via administrativa:** não é requisito, mas a inércia/negativa do diretor comprovada transforma o pedido em quase incontestável.

## Checklist antes de protocolar

- [ ] Eixo correto identificado (remoção / art. 41 / RDD / interdição) e endereçamento conferido?
- [ ] Redação vigente dos dispositivos conferida (art. 52 e §§; art. 86, §3º; Lei 11.671/2008; impacto das Leis 14.843/2024, 15.358/2026 e 15.402/2026)?
- [ ] Súmulas e precedentes verificados via `jurisprudencia-stj-stf` (nada citado de memória; pendências marcadas **[NÃO VERIFICADO]**)?
- [ ] Vínculo familiar/risco/saúde **documentado** e unidade de destino indicada (eixo 1)?
- [ ] Ato do diretor (ou inércia) comprovado e confrontado com o parágrafo único do art. 41 (eixo 2)?
- [ ] Prazos do RDD/isolamento e manifestação prévia da defesa conferidos nos autos do incidente (eixo 3)?
- [ ] Pedido subsidiário e requerimento de urgência incluídos quando cabíveis?
- [ ] Prazo de 5 dias do agravo em execução anotado na agenda desde a intimação do indeferimento (contagem do art. 798 do CPP; em dobro se Defensoria)?

## Apoie-se em

- **Squad `execucao-penal`** — mesmo pipeline e endereçamento ao juízo da execução (art. 66 da LEP); esta peça entra no fluxo de petições da VEP.
- **Skill `agravo-em-execucao`** — recurso cabível (5 dias — Súmula 700/STF) se o pedido for indeferido.
- **Agente `follow-up-cliente`** — comunicação com a família (coleta de documentos de vínculo, atualização sobre transferência e visitas).
- **Skill `execucao-progressao-regime`** — complementar: lá, os benefícios de tempo de pena (percentuais do art. 112, SV 56, falta grave e data-base); aqui, os direitos e as condições de custódia. Falta grave que gera RDD também repercute na progressão — trate os dois efeitos em conjunto.
- **Skill `redacao-persuasiva-criminal`** — **sempre**: teoria do caso, narrativa dos fatos, subsunção explícita e a régua de obra-prima que a revisão cobra.
- **Agente `verificador-citacoes`**, com **`jurisprudencia-stj-stf` e `lei-e-sumula`** — Citation Gate: verificação obrigatória de toda súmula, precedente e redação legal antes de citar; pendências ficam marcadas **[NÃO VERIFICADO]**.
