---
name: pedido-diligencias
description: >-
  Use ao requerer diligências complementares ao final da audiência de instrução e julgamento — fase
  de diligências do art. 402 do CPP —, seja na formulação oral em audiência, seja na petição
  escrita, e ao reagir ao indeferimento (consignação em ata + cerceamento de defesa). Gatilhos:
  pedido de diligências, diligências complementares, art. 402 CPP, fase de diligências, fim da AIJ,
  encerramento da instrução, nova perícia…. Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-pedido-diligencias"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["pedido-diligencias", "pedido diligencias"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Pedido de Diligências Complementares (art. 402 do CPP)

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

Esta skill orienta o **requerimento de diligências ao final da audiência de instrução e julgamento (AIJ)** — a chamada *fase de diligências* do procedimento comum ordinário (art. 402 do CPP). É um momento **único e preclusivo**: encerrada a colheita da prova, a parte tem uma só oportunidade de pedir as providências que a própria instrução revelou necessárias, antes das alegações finais.

> **Lição central:** o art. 402 **não reabre a instrução** para o que já se sabia — só cabe diligência cuja necessidade **nasceu na própria instrução** ("circunstâncias ou fatos apurados na instrução"). Amarrar cada pedido ao fato novo revelado em audiência, com indicação do trecho da ata ou da mídia, é o que decide entre deferimento e indeferimento.

> **Fronteira de escopo:** não confunda com a skill `requerimento-investigacao`, que é peça **pré-processual** (provocação de instauração de IP/TC/PIC pela vítima — art. 5º, II, CPP). O pedido do art. 402 é **endoprocessual**: já há ação penal, a instrução acabou de se encerrar e a peça vai ao **mesmo juízo** que preside o feito.

## O instituto e sua base legal

- **Art. 402, CPP** — produzidas as provas, ao final da audiência, o MP, o querelante e o assistente e, **a seguir, o acusado**, poderão requerer diligências **cuja necessidade se origine de circunstâncias ou fatos apurados na instrução**.
- **Art. 404, *caput*, CPP** — ordenada diligência considerada **imprescindível** (de ofício ou a requerimento), a audiência é **concluída sem as alegações finais**.
- **Art. 404, parágrafo único, CPP** — realizada a diligência, as partes apresentam **memoriais em prazo sucessivo de 5 dias**; sentença em 10.
- **Art. 156, II, CPP** — faculdade do **juiz** de determinar, de ofício, diligências para dirimir dúvida sobre ponto relevante. Não é direito subjetivo da parte, mas pode (e deve) ser **provocado subsidiariamente**.
- **Art. 400, §1º, CPP** — o juiz pode indeferir as provas **irrelevantes, impertinentes ou protelatórias**; é a régua que o julgador aplicará ao seu pedido.

A ordem legal favorece a defesa: **a acusação requer primeiro, o acusado fala por último**. Antes de formular os próprios pedidos, manifeste-se sobre os da acusação — impugnar diligência protelatória do MP também é atuação do art. 402.

## Cabimento e requisitos

| Requisito | Conteúdo | Onde a peça naufraga |
|---|---|---|
| **Momento** | Ao final da AIJ, produzidas todas as provas (o interrogatório é o último ato — art. 400). Instrução fracionada (continuação, precatórias): o momento é o **encerramento efetivo** da instrução | Silenciar em audiência e peticionar dias depois, sem prazo aberto pelo juízo → extemporâneo |
| **Legitimidade e ordem** | MP, querelante e assistente; **a seguir**, o acusado | Defesa que requer antes de ouvir os pedidos da acusação desperdiça a vantagem da última palavra |
| **Requisito material** | Necessidade **originada de circunstâncias ou fatos apurados na instrução** — é o filtro legal | Repetir pedido que já cabia na resposta à acusação → indeferimento legítimo |
| **Especificidade** | Cada diligência individualizada, com fundamento próprio e pertinência demonstrada | "Requer as diligências que se fizerem necessárias" → genérico, indeferível de plano |
| **Forma** | Em regra **oral**, na própria audiência, consignada em ata; **escrita** quando o juízo converte o ato ou abre prazo | Formular oralmente sem pedir consignação → o requerimento "evapora" dos autos |

## O requisito de ouro — a necessidade nasceu na instrução

Antes de redigir, submeta cada diligência ao teste da **novidade instrutória**. Exemplos de calibragem:

| Situação concreta | Passa no art. 402? |
|---|---|
| Testemunha menciona **pessoa até então desconhecida** que presenciou os fatos | **Sim** — oitiva da pessoa referida (art. 209, §1º) |
| Perito ouvido em audiência revela **omissão ou contradição** do laudo | **Sim** — esclarecimentos/complementação (arts. 159, §5º, I, e 181) |
| Vítima e testemunha **divergem frontalmente** sobre circunstância relevante | **Sim** — acareação (art. 229) |
| Depoente revela existência de **câmeras, registros ou dados** de que não se tinha notícia | **Sim** — requisição judicial, com preservação urgente |
| Reconhecimento do réu feito **informalmente em audiência**, fora do rito do art. 226 | **Sim** — refazimento sob as formalidades legais |
| Defesa quer ouvir testemunha que **esqueceu de arrolar** na resposta à acusação | **Não** — preclusão da fase própria; reste provocar o juízo (art. 209, *caput*, c/c 156, II) |
| Perícia que **já era possível requerer** desde a denúncia | **Não** — a necessidade não nasceu da instrução |
| Pedido genérico de "novas diligências" sem fato originador | **Não** — impertinente por indeterminação |

## Diligências típicas e seus fundamentos

| Diligência | Fundamento | Gatilho instrutório típico |
|---|---|---|
| Esclarecimentos do perito / quesitos complementares | art. 159, §5º, I | laudo posto em xeque por depoimento |
| Complementação do laudo ou **novo exame** por outros peritos | art. 181 e p.ú. | omissão, obscuridade ou contradição pericial |
| Oitiva de **pessoa referida** | art. 209, §1º | testemunha menciona terceiro que presenciou os fatos |
| **Testemunha do juízo** (provocar o magistrado) | art. 209, *caput*, c/c 156, II | ponto relevante que ninguém arrolado esclarece |
| **Acareação** | arts. 229-230 | divergência sobre fato ou circunstância relevante |
| Refazimento do **reconhecimento** sob o rito legal | art. 226 | reconhecimento informal ou viciado em audiência |
| Requisição de **imagens, registros telefônicos/telemáticos, ERB** | art. 402 c/c reserva de jurisdição das leis de regência | menção a câmera, celular ou sistema em depoimento — **peça preservação imediata** (risco de descarte automático) |
| Afastamento de **sigilo bancário/fiscal** | LC 105/2001 e leis de regência (confira a redação vigente via agente `lei-e-sumula`) | movimentação ou vínculo financeiro revelado na prova oral |
| **Juntada/requisição de documentos** | art. 231 (documentos cabem em qualquer fase, salvo exceções legais — ex.: art. 479 no plenário do júri) | documento novo mencionado em audiência que a parte não consegue obter sozinha |
| **Incidente de insanidade mental** | art. 149 | dúvida séria sobre a higidez mental surgida no interrogatório |

## Formulação oral — o pedido se faz na hora

O requerimento nasce, em regra, **ditado em ata ao final da audiência**. Estruture-o no tripé que espelha o art. 402:

1. **A diligência** — individualizada ("oitiva de F., referida pela testemunha X"), não etiqueta genérica;
2. **O fato originador** — o que **surgiu hoje** e onde está registrado ("conforme depoimento de X, gravado na mídia desta AIJ"), e por que a providência **não podia** ter sido requerida antes;
3. **A relevância** — o que a diligência tende a demonstrar e como isso repercute no julgamento (pertinência com a teoria do caso).

Fórmula de audiência: *"A defesa requer, com fundamento no art. 402 do CPP, [diligência], uma vez que na presente instrução [fato apurado], circunstância que não constava dos autos; a providência é relevante porque [o que tende a demonstrar]. Requer a consignação integral deste requerimento em ata."*

**Chegue com a minuta pronta.** A skill `preparacao-audiencia` e o agente `analise-contradicoes` permitem **antever** as diligências prováveis (lacunas da prova, pontos que a instrução deve iluminar); leve requerimento escrito e peça sua **juntada como parte integrante da ata** — audiência não é lugar de improvisar redação.

## Estrutura forense da petição escrita

Cabível quando o juízo converte o ato, abre prazo em audiência ou determina manifestação escrita. Endereçamento ao **mesmo juízo da instrução** (padrão estrutural na best-practice `peticao-criminal`):

```
AO JUÍZO DA [N]ª VARA CRIMINAL DA COMARCA DE [COMARCA] — [UF]
[ou tradicional: EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA ...]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a) nos autos da ação penal em epígrafe, por
intermédio do(a) advogado(a) que ao final subscreve, vem, respeitosamente,
com fulcro no art. 402 do Código de Processo Penal (CPP), requerer
DILIGÊNCIAS COMPLEMENTARES cuja necessidade se originou de circunstâncias
e fatos apurados na instrução, pelas razões a seguir:

I — DO CABIMENTO E DA OPORTUNIDADE
Encerrada a instrução na AIJ de [DATA], este é o momento legal do
art. 402. [Se por escrito: registrar que o juízo abriu prazo/converteu
o ato em audiência — indicar o termo de ata.]

II — DOS FATOS APURADOS NA INSTRUÇÃO QUE ORIGINAM A NECESSIDADE
Um subitem por diligência, sempre com o tripé:
   (i) o que SURGIU na instrução (depoimento/declaração/esclarecimento
       pericial — indicar o trecho da ata ou da mídia);
   (ii) por que a providência NÃO podia ter sido requerida antes;
   (iii) o que a diligência tende a demonstrar e sua relevância para o
       julgamento.

III — DAS DILIGÊNCIAS REQUERIDAS (uma a uma, com fundamento próprio)
   a) [ex.: esclarecimentos do perito / novo exame — arts. 159, §5º, I,
      e 181, CPP — quesitos anexos];
   b) [ex.: oitiva de (NOME), pessoa referida pela testemunha X —
      art. 209, §1º, CPP];
   c) [ex.: requisição de imagens/registros a (órgão/empresa), com ordem
      de PRESERVAÇÃO IMEDIATA ante o risco de descarte automático];
   d) [...]

IV — DOS PEDIDOS
Ante o exposto, requer-se:
   a) o DEFERIMENTO das diligências acima, concluindo-se a audiência sem
      alegações finais (art. 404, caput, CPP);
   b) realizadas as diligências, VISTA às partes para manifestação sobre
      o resultado e, após, abertura do prazo sucessivo de 5 dias para
      MEMORIAIS (art. 404, parágrafo único, CPP);
   c) em caso de indeferimento, a CONSIGNAÇÃO INTEGRAL do requerimento,
      de seus fundamentos e do respectivo PROTESTO, para fins de arguição
      de cerceamento de defesa (art. 5º, LV, CF).

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

Antes de fechar a lista de diligências, rode o agente `resumo-processo`: ele mostra **o que já consta dos autos** — requerer o que já existe mina a credibilidade de todo o requerimento.

## Indeferimento — consigne hoje para anular amanhã

O indeferimento de diligência é decisão interlocutória **sem recurso imediato** (não integra o rol do art. 581 do CPP). A reação correta tem dois tempos:

**Na audiência (tempo 1):**
- Exija a **consignação em ata** de quatro elementos: o requerimento, seus fundamentos, a decisão de indeferimento e o **protesto expresso** da defesa. Sem ata, não há tese: o que não foi consignado não existe para o tribunal.
- Se o juiz resistir à consignação, requeira-a **nominalmente como direito da parte** e registre a recusa.

**Nos memoriais e na apelação (tempo 2):**
- Argua **cerceamento de defesa** (art. 5º, LV, CF) como **preliminar de nulidade** nos memoriais (ver skill `memoriais`) e, sobrevindo condenação, como preliminar da apelação.
- Demonstre o **prejuízo concreto** (art. 563 — *pas de nullité sans grief*): diga **o que** a diligência demonstraria e **como** o resultado do julgamento seria outro. Alegação abstrata de cerceamento não anula nada.
- Os parâmetros atuais do STJ/STF sobre nulidade por indeferimento de diligência (pertinência, prejuízo, dever de fundamentação do indeferimento) devem ser levantados via agente `jurisprudencia-stj-stf` e marcados **[NÃO VERIFICADO]** até conferência na fonte oficial.

## Efeito no rito — a diligência muda a base dos memoriais

- **Nada requerido ou tudo indeferido** → alegações finais **orais** na própria audiência (art. 403, *caput*) ou memoriais em 5 dias (art. 403, §3º).
- **Diligência imprescindível deferida** → a audiência **conclui-se sem alegações finais** (art. 404, *caput*); realizada a diligência, memoriais em prazo sucessivo de 5 dias (art. 404, p.ú.). O fundamento legal do preâmbulo dos memoriais **muda** (403, §3º × 404, p.ú.) — a skill `memoriais` detalha essa bifurcação.
- **Contraditório sobre a prova nova:** peça expressamente vista do resultado da diligência **antes** do prazo de memoriais — a prova que ninguém pôde debater é nulidade em potencial.
- **Contagem do prazo de memoriais:** prazo processual penal — contínuo e peremptório, exclui o dia do começo e inclui o do vencimento (art. 798, caput e §1º, CPP). Para a **Defensoria Pública**, o prazo é **em dobro** e a intimação é **pessoal**, com termo inicial na vista dos autos (LC 80/94, arts. 44, I, 89, I, e 128, I).

## Erros comuns e pegadinhas

- **Preclusão do silêncio.** O momento do art. 402 é o final da AIJ. Quem sai calado da audiência não peticiona depois — e dificilmente convencerá o tribunal de cerceamento quanto à prova que **não requereu** na hora própria.
- **Requentar a resposta à acusação.** Diligência que já era possível desde a denúncia não passa no filtro da novidade instrutória. Se a fase própria precluiu, o caminho residual é **provocar** o poder instrutório do juiz (arts. 209 e 156, II) — pedido subsidiário, sem direito subjetivo.
- **Pedido genérico.** "Requer diligências" sem fato originador, sem especificação e sem pertinência é indeferimento certo (art. 400, §1º).
- **Ata ou nada.** Requerimento oral não consignado e indeferimento sem protesto registrado inviabilizam a preliminar futura.
- **Confundir 402 com 156, II.** O art. 402 é **faculdade da parte** no momento próprio; o art. 156, II, é **poder do juiz**. Invocar só o 156 é entregar ao juízo a decisão sem ônus de fundamentar o indeferimento do **seu** requerimento.
- **Esquecer o efeito no prazo.** Diligência deferida desloca as alegações finais para depois de sua realização (art. 404) — controle o novo marco na agenda e a base legal correta dos memoriais.
- **Ritos sem previsão expressa.** No rito **sumário** (art. 534: alegações orais) e no **sumaríssimo** (art. 81 da Lei 9.099/95) não há fase de diligências expressa; na **1ª fase do júri** (art. 411), a audiência é una e as alegações são orais. A aplicação subsidiária do art. 402 (art. 394, §5º, CPP) é defensável, mas controvertida — pesquise o entendimento atual via agente `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**. Já na **2ª fase do júri** o momento próprio de requerer diligências é outro: a intimação do art. 422 do CPP (preparação do plenário), **preclusiva** — não confunda com o 402.
- **Enderecamento.** A peça vai ao **juízo da instrução** — não é peça autônoma dirigida a tribunal. Ilegalidade flagrante na condução da fase se ataca por outras vias (HC), fora deste escopo.
- **Uso protelatório cobra preço.** Diligência artificial para ganhar prazo é indeferível de plano e corrói a credibilidade da defesa perante o juízo — inclusive das diligências legítimas do mesmo requerimento.
- **Fiscalize a acusação.** O MP requer primeiro: impugne na hora as diligências acusatórias impertinentes ou protelatórias e peça a consignação da impugnação.

## Apoie-se em

- **Agente `analise-contradicoes`** — mapeia contradições e lacunas probatórias reveladas na prova oral: é a matéria-prima do requisito "fatos apurados na instrução".
- **Agente `resumo-processo`** — inventário do que já consta dos autos, para não requerer o que já existe.
- **Skill `preparacao-audiencia`** — antevê as diligências prováveis e prepara a minuta que você levará pronta para a AIJ.
- **Best-practice `peticao-criminal`** — padrão estrutural da petição criminal (endereçamento, preâmbulo, pedidos).
- **Skill `memoriais`** — a peça seguinte do rito: bifurcação 403, §3º × 404, p.ú., e a preliminar de cerceamento de defesa construída aqui.
- **Skill `requerimento-investigacao`** — fronteira de escopo: diligências **pré-processuais** (fase de investigação) são lá, não aqui.
- **Agentes `lei-e-sumula` e `jurisprudencia-stj-stf`** — conferência de dispositivos e levantamento de precedentes atuais (sempre com marcação **[NÃO VERIFICADO]** até validação).
- **Agente `verificador-citacoes`** — Citation Gate obrigatório antes de finalizar: toda súmula, precedente ou dispositivo citado na peça passa por ele; nada sai com **[NÃO VERIFICADO]** pendente.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima: aplique **sempre** ao redigir (teoria do caso, subsunção explícita, blocos completos, zero enchimento).

## Lembretes finais

- **Momento único e preclusivo:** final da AIJ, produzidas as provas — quem silencia, preclui.
- **Filtro legal:** a necessidade deve **nascer na instrução** — amarre cada diligência ao fato novo, com trecho de ata/mídia.
- **Tripé do pedido:** diligência individualizada + fato originador + relevância para o julgamento.
- **Ordem das falas:** acusação primeiro, defesa por último — ouça, impugne, depois requeira.
- **Oral com rede de proteção:** minuta pronta, ditada em ata, juntada como parte integrante.
- **Indeferimento:** consignação integral + protesto → preliminar de cerceamento nos memoriais e na apelação, **com prejuízo demonstrado** (art. 563).
- **Diligência deferida muda o rito:** audiência sem alegações finais (art. 404) e memoriais só após a diligência — com vista sobre o resultado antes.
- **Provocação subsidiária:** o que precluiu para a parte ainda pode ser determinado pelo juiz (arts. 209 e 156, II) — peça.
- **Precedentes e dispositivos sensíveis:** nada de memória — `lei-e-sumula` e `jurisprudencia-stj-stf`, com **[NÃO VERIFICADO]** até conferir; Citation Gate (`verificador-citacoes`) antes de finalizar.
