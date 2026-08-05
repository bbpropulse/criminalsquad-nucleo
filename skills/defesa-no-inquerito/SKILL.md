---
name: defesa-no-inquerito
description: >-
  Use ao atuar na DEFESA DO INVESTIGADO durante o inquérito policial (IP), PIC ou investigação
  criminal de qualquer natureza — a rotina defensiva da fase pré-processual: requerimento de
  diligências ao delegado (CPP, art. 14), acompanhamento de oitivas e do interrogatório policial com
  apresentação de razões e quesitos (EAOAB, art. 7º, XXI — Lei 13.245/2016) e investigação defensiva
  (Provimento 188/2018 do Conselho Federal da… Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-defesa-no-inquerito"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-no-inquerito", "defesa inquerito"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa no Inquérito (atuação defensiva na investigação)

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

Esta skill orienta a **atuação da defesa do investigado dentro do inquérito** — a rotina central da fase pré-processual, organizada em **três frentes**: **acompanhar** os atos de apuração (EAOAB, art. 7º, XXI), **requerer** diligências à autoridade (CPP, art. 14) e **investigar** por conta própria (investigação defensiva — Provimento 188/2018 do CFOAB). Não confundir os polos nem as vias: a peça da **vítima** que provoca a instauração de IP/TC/PIC é a skill `requerimento-investigacao`; o **acesso aos autos** resistido (SV 14 e Reclamação ao STF) é a skill irmã `acesso-autos-investigacao` — aqui se **pressupõe o acesso obtido** e se organiza o que fazer com ele. Para as primeiras 24h após prisão em flagrante, ver `plantao-pos-flagrante-primeiras-24h`.

> **Lição central:** o inquérito não é "fase de esperar a denúncia". O conjunto indiciário que sustentará a acusação **se forma agora, sem contraditório** — a defesa que só aparece na resposta à acusação herda um terreno escolhido pelo adversário. Atue nas três frentes desde a habilitação: cada oitiva acompanhada, cada diligência requerida e cada elemento colhido pela investigação defensiva **muda o material** sobre o qual o MP decidirá entre denúncia, ANPP e arquivamento.

## O instituto e a base legal

O inquérito policial é procedimento **administrativo, inquisitivo e presidido pelo Delegado de Polícia** (Lei 12.830/2013), destinado a apurar materialidade e autoria (CPP, arts. 4º-23). É **peça informativa**: seus vícios, em regra, não anulam a ação penal — mas os **elementos ilícitos** nele colhidos contaminam o que deles derivar (CPP, art. 157). Por isso a defesa atua em dois registros simultâneos: **influenciar** a apuração e **documentar** os vícios para uso futuro (alimente o agente `mapa-nulidades` desde já).

| Dispositivo | O que garante à defesa |
|---|---|
| **CPP, art. 14** | O indiciado (e o ofendido) pode **requerer qualquer diligência**, que será realizada ou não "a juízo da autoridade" |
| **CPP, art. 184** | A perícia requerida pode ser negada se desnecessária — **salvo o exame de corpo de delito**, que não pode ser recusado |
| **EAOAB, art. 7º, XXI** (Lei 13.245/2016) | Direito de **assistir o cliente investigado** durante a apuração, **sob pena de nulidade absoluta** do interrogatório/depoimento e de todos os elementos deles **decorrentes ou derivados**, podendo **apresentar razões e quesitos** (alínea *a*; a alínea *b* foi vetada) |
| **CF, art. 5º, LXIII** | Direito ao **silêncio** e à assistência de advogado e da família |
| **CPP, art. 6º, V** | O interrogatório do indiciado observa, "no que for aplicável", o regime do interrogatório judicial (arts. 185-196 — inclusive entrevista prévia reservada) |
| **Provimento 188/2018 (CFOAB)** | Disciplina a **investigação defensiva** pelo advogado, em qualquer fase da persecução (confira o texto vigente via agente `lei-e-sumula` antes de transcrever artigos) |
| **Lei 12.830/2013, art. 2º, § 6º** | **Indiciamento é ato privativo do delegado**, por decisão **fundamentada** (análise técnico-jurídica do fato) |

## Mapa — a providência certa em cada momento do inquérito

| Situação concreta | Providência defensiva | Onde aprofundar |
|---|---|---|
| Cliente descobre que é investigado | Triagem + habilitação nos autos + leitura integral | agente `triagem-novo-caso`; skills `habilitacao-acesso-autos` / `acesso-autos-investigacao` |
| Cliente **intimado a depor** na delegacia | Entrevista prévia, estratégia (falar × silêncio), acompanhamento presencial | skill `preparacao-interrogatorio-cliente` + Frente 2 |
| Oitiva de testemunhas/corréus designada | Acompanhar e requerer consignação do essencial; apresentar quesitos e razões | Frente 2 |
| **Perícia** determinada ou em curso | Apresentar **quesitos** (art. 14 c/c 7º, XXI, *a*) e, se útil, parecer técnico defensivo | Frentes 1 e 3; skill `quesitos-pericia` |
| Prova favorável **perecível** (câmeras, registros, logs) | Requerimento **urgente** de preservação/requisição + notificação extrajudicial paralela | Frente 1 + skill `preservacao-prova-digital-defesa` |
| Versão defensiva precisa de suporte | Investigação defensiva: entrevistas, documentos, pareceres | Frente 3 |
| **Indiciamento** iminente ou consumado sem base | Razões ao delegado (fundamentação — Lei 12.830, art. 2º, § 6º); se abusivo/patente falta de justa causa, HC para trancamento | Frente 2; skill `habeas-corpus` |
| IP **relatado**, indo ao MP | **Razões escritas ao MP**: arquivamento, atipicidade, ANPP | Frente 2; skills `arquivamento-inquerito` / `anpp` |
| Investigado **preso** com prazo estourado | Relaxamento por excesso de prazo | skill `liberdade-provisoria-relaxamento` |

## Frente 1 — Requerimento de diligências (CPP, art. 14): discricionariedade regrada, não arbítrio

O art. 14 confere ao investigado o direito de **requerer qualquer diligência**; a autoridade decide "a seu juízo" — mas sustente que esse juízo é **discricionariedade regrada** e que o indeferimento deve ser **motivado**: é construção doutrinária (dever geral de motivação dos atos administrativos + natureza técnico-jurídica da condução do IP, Lei 12.830/2013), **não texto expresso do art. 14** — apresente como tese, não como letra de lei. O que é texto expresso: o **exame de corpo de delito não pode ser negado** (CPP, art. 184, *a contrario*; art. 158). A peça detalhada desta frente está na skill `pedido-diligencias`; quesitos periciais aprofundados em `quesitos-pericia`.

**O que tipicamente se requer (individualize e justifique cada item):**
- **Oitivas** de testemunhas que sustentem a versão defensiva (nome, qualificação e o que cada uma pode esclarecer);
- **Requisição/preservação de imagens** de câmeras públicas e privadas, registros de acesso, ERBs, extratos — **prova perecível: peça com urgência destacada** (sistemas descartam gravações em prazos curtos);
- **Perícias** (local, voz, grafotécnica, informática) com **quesitos** desde logo;
- **Juntada de documentos** defensivos (rol descritivo) e de peças da investigação defensiva que **interessem** à defesa;
- **Acareações e reconhecimentos regulares** (atenção ao rito do art. 226 do CPP) — apenas quando favoreçam a defesa.

**Se o delegado indefere:** exija decisão **fundamentada** e **certidão** da negativa (pedido expresso na própria peça); reitere ao **MP**, que pode **requisitar** diligências à autoridade policial (CPP, art. 13, II — e art. 16 para diligências imprescindíveis à denúncia); conforme o regime local, avalie levar ao juízo competente — a estrutura do **juiz das garantias** (CPP, arts. 3º-A a 3º-F) está em implantação heterogênea: **confira a vigência e o alcance no foro via agente `lei-e-sumula`**. A negativa imotivada, documentada, vira **tese futura** de cerceamento e deficiência investigativa.

**Prazos de conclusão do IP (controle da mora):**

| Regime | Investigado preso | Investigado solto | Base |
|---|---|---|---|
| Comum (estadual) | 10 dias | 30 dias (prorrogável) | CPP, art. 10 |
| Justiça Federal | 15 + 15 dias | 30 dias (prorrogável) | Lei 5.010/66, art. 66 (preso); CPP, art. 10 (solto) |
| Drogas | 30 (duplicável) | 90 (duplicável) | Lei 11.343/2006, art. 51 |

> **Contagem:** com investigado **preso**, o prazo restringe a liberdade — conta-se como prazo **material** (inclui o dia do começo, CP, art. 10) e, no regime comum, **não admite prorrogação** (o § 3º do art. 10 do CPP só autoriza prorrogar com indiciado **solto**). Excesso de prazo com preso → constrangimento ilegal: ver `liberdade-provisoria-relaxamento`. Com investigado solto, a mora prolongada alimenta tese de perda de contemporaneidade de eventuais cautelares e reforça pedido de arquivamento.

## Frente 2 — Acompanhamento dos atos e interrogatório (EAOAB, art. 7º, XXI)

O advogado tem o direito de **assistir o cliente durante toda a apuração**, e a violação é sancionada com **nulidade absoluta** do interrogatório ou depoimento e de **tudo o que deles derivar**, direta ou indiretamente (art. 7º, XXI). O alcance prático da nulidade (assistência **impedida** × mera ausência de advogado não constituído) é objeto de leituras divergentes — antes de usar a tese em juízo, **pesquise o estado atual via agente `jurisprudencia-stj-stf`, valide com `verificador-citacoes` e marque [NÃO VERIFICADO] o que não confirmar**. O que é seguro: **impedir** o acompanhamento, a entrevista prévia ou a apresentação de razões e quesitos contamina o ato.

**Conduta no acompanhamento (delegacia, MP ou sede de perícia):**
- **Entrevista prévia e reservada** com o cliente antes do ato (CPP, art. 185, § 5º, aplicável por força do art. 6º, V);
- **Silêncio é estratégia, não confissão de culpa** (CF, art. 5º, LXIII): decida antes, com o cliente, o que será e o que não será respondido — a preparação está em `preparacao-interrogatorio-cliente`;
- *Nemo tenetur se detegere:* o investigado **não é obrigado** a participar de acareação ou reconstituição, nem a fornecer padrões (grafia, voz, material genético) para prova contra si — recusas que não podem ser lidas em seu desfavor;
- Requeira a **consignação literal** de perguntas indeferidas, protestos e ocorrências relevantes no termo; não assinado ≠ não registrado: se a consignação for recusada, lavre a ocorrência por outros meios (petição imediata nos autos);
- Apresente **razões e quesitos** (art. 7º, XXI, *a*) sempre que houver perícia ou ato técnico — quesito bem formulado orienta o laudo antes de ele nascer.

**Razões ao MP antes da denúncia — a peça mais subutilizada da fase:** relatado o IP (CPP, art. 10, § 1º), o destino do caso se decide no gabinete do promotor. Apresente **razões escritas** demonstrando atipicidade, fragilidade indiciária ou causa extintiva, e requerendo **arquivamento** (peça aprofundada na skill `arquivamento-inquerito`) — subsidiariamente, sinalize os requisitos do **ANPP** (CPP, art. 28-A; ver skill `anpp`). O regime do arquivamento foi redesenhado pelo Pacote Anticrime (CPP, art. 28) e teve a eficácia discutida em ADIs: **confira a redação vigente e o fluxo aplicável via agente `lei-e-sumula`** antes de fundamentar. Use o agente `analise-denuncia` em modo prospectivo: avalie os elementos indiciários como o acusador os verá — as fragilidades encontradas são a espinha das razões.

## Frente 3 — Investigação defensiva (Provimento 188/2018): a defesa também apura

O Provimento 188/2018 do CFOAB disciplina a **investigação defensiva**: o complexo de atividades investigatórias que o advogado realiza, **em qualquer fase da persecução**, para reunir elementos de convicção em favor do cliente. Pontos estruturais (confira o texto vigente via `lei-e-sumula` antes de transcrever):

- **Autonomia:** independe de autorização estatal e **não exige comunicação** à autoridade que investiga;
- **Meios legítimos:** colher **entrevistas** (depoimentos informais de testemunhas), obter documentos e certidões, contratar **peritos e técnicos** para pareceres, realizar vistorias, pesquisar fontes abertas — sempre por meios lícitos;
- **Juntada seletiva:** o advogado junta aos autos **apenas o que interessa à defesa** — não há dever de apresentar o material desfavorável, protegido pelo **sigilo profissional** (articule com a best-practice `etica-oab-sigilo`);
- **Vedações:** nada de meios ilícitos, constrangimento de testemunhas, promessa de vantagem ou obtenção de dados protegidos sem base legal — o vício aqui **contamina o elemento e expõe o advogado**;
- **Documentação técnica:** entrevista defensiva se registra com **identificação, data, local e consentimento** do entrevistado (gravação consentida ou termo escrito, preferencialmente com testemunha); parecer técnico se apresenta com qualificação do experto e metodologia. Elemento mal documentado morre na primeira impugnação;
- **Prova digital:** cadeia de custódia própria desde a coleta (hash, espelhamento, ata notarial) — o roteiro está em `preservacao-prova-digital-defesa`;
- **Não confundir:** o **assistente técnico** do CPP (art. 159, §§ 3º-4º) é figura **judicial** — atua após admissão pelo juiz e depois do laudo oficial. O **experto privado** da investigação defensiva é livre e atua desde já; no IP, os quesitos defensivos entram pela via do art. 14 c/c art. 7º, XXI, *a*.

## Estrutura da peça — requerimento de diligências ao delegado

```
EXCELENTÍSSIMO SENHOR DOUTOR DELEGADO DE POLÍCIA DA [Nª] DELEGACIA DE
[COMARCA/CIRCUNSCRIÇÃO] — [UF]
[ou: Promotor de Justiça / Procurador da República — se PIC]

Inquérito Policial nº [Nº DO IP / APF / PIC]

[NOME DO INVESTIGADO], [qualificação completa], por seu(sua) advogado(a)
firmatário(a) (procuração anexa — indispensável se houver sigilo, EAOAB,
art. 7º, § 10), vem, respeitosamente, perante Vossa Excelência, com
fundamento no art. 14 do CPP e no art. 7º, XXI, da Lei 8.906/94 (redação
da Lei 13.245/2016), requerer DILIGÊNCIAS, pelos motivos a seguir:

I — DOS FATOS
Síntese da investigação e da posição do requerente; versão defensiva em
linhas objetivas (o suficiente para demonstrar a PERTINÊNCIA de cada
diligência, sem antecipar a estratégia completa da defesa).

II — DO DIREITO
1. Do direito à diligência — CPP, art. 14: participação do investigado na
   formação do conjunto apuratório; juízo da autoridade é discricionariedade
   regrada, que exige indeferimento motivado.
2. Da imprescindibilidade — utilidade concreta de cada diligência para o
   esclarecimento da verdade (CPP, art. 184, a contrario); urgência das
   provas perecíveis.
3. Da prerrogativa de acompanhamento — EAOAB, art. 7º, XXI: ciência prévia
   dos atos designados, para assistência e apresentação de razões e quesitos.

III — DAS DILIGÊNCIAS REQUERIDAS (rol numerado, cada item com justificativa)
   a) oitiva de [NOME, qualificação], que presenciou [fato] e pode esclarecer
      [ponto controvertido];
   b) URGENTE — requisição e preservação das imagens das câmeras de [local],
      período [data/hora], ante o risco de descarte automático;
   c) perícia em [objeto/local], respondendo a QUESITOS anexos (art. 14 c/c
      art. 7º, XXI, "a", do EAOAB);
   d) juntada dos documentos anexos (rol descritivo), colhidos em
      investigação defensiva (Provimento 188/2018-CFOAB).

IV — DOS PEDIDOS
   a) a realização das diligências acima, na ordem de urgência indicada;
   b) a intimação da defesa das datas designadas, para acompanhamento
      (EAOAB, art. 7º, XXI);
   c) em caso de indeferimento, decisão fundamentada e CERTIDÃO da negativa,
      para documentação e providências cabíveis.

Termos em que pede deferimento.
[LOCAL], [DATA]. [ADVOGADO(A)] — OAB/[UF] nº [Nº]
```

**Variante — razões ao MP (pré-denúncia):** mesmo esqueleto, endereçado ao Promotor/Procurador com "Excelentíssimo Senhor Doutor", fundamento no art. 7º, XXI, *a*, do EAOAB; o item III vira "DAS RAZÕES" (atipicidade, fragilidade dos indícios, causa extintiva) e o IV pede **arquivamento** e, subsidiariamente, **ANPP**.

## Teses típicas da fase

- **Indeferimento imotivado = cerceamento na investigação** — a discricionariedade do art. 14 não dispensa motivação; a negativa em bloco, sem exame item a item, documentada por certidão, sustenta futura tese de deficiência investigativa e reforça o *in dubio pro reo* sobre o material incompleto.
- **Corpo de delito não se nega** (CPP, arts. 158 e 184) — nas infrações que deixam vestígios, a recusa da perícia essencial vicia a base material da imputação.
- **Nulidade do art. 7º, XXI e seus derivados** — impedida a assistência, caem o ato **e** os elementos dele decorrentes, direta ou indiretamente (efeito expansivo expresso na lei).
- **Paridade de armas na apuração** — os elementos da investigação defensiva são admissíveis e devem ser considerados na decisão sobre denúncia/arquivamento; a apuração não é monopólio de quem acusa.
- **Indiciamento exige fundamentação técnico-jurídica** (Lei 12.830/2013, art. 2º, § 6º) — indiciamento sem lastro é constrangimento sanável por razões ao delegado e, nos casos patentes, por HC (trancamento/desindiciamento — ver `habeas-corpus`).
- **Vícios do IP: separar os planos** — irregularidade formal do inquérito, em regra, não anula a ação penal (peça informativa); **ilicitude da prova** (CPP, art. 157) contamina e deriva. Catalogar tudo no `mapa-nulidades` e escolher o momento de cada ataque.

## Erros comuns e pegadinhas

- **Endereçar "Ao Juízo" para o delegado:** o tratamento é **"Excelentíssimo Senhor Doutor Delegado"** (Lei 12.830/2013, art. 3º — mesmo tratamento dos magistrados). Inverter destinatários desmoraliza a peça.
- **Requerer "todas as diligências necessárias":** pedido genérico entrega o indeferimento legítimo. **Individualize** cada diligência com justificativa própria.
- **Não pedir certidão da negativa:** sem documento, não há como reiterar ao MP nem construir a tese futura — o pedido "c" é obrigatório (mesma disciplina da skill irmã `acesso-autos-investigacao`).
- **Esperar o delegado para prova perecível:** imagens de câmera se apagam em dias. Requeira **e**, em paralelo, notifique extrajudicialmente o detentor para preservação (investigação defensiva) — dupla via documentada.
- **Confundir os polos e as vias:** vítima que quer instaurar IP → `requerimento-investigacao`; acesso negado aos autos → `acesso-autos-investigacao`; esta skill é a **atuação** do investigado dentro do feito.
- **Levar o cliente a depor sem estratégia:** sem entrevista prévia e sem decidir o uso do silêncio, o interrogatório policial vira a melhor prova da acusação — prepare com `preparacao-interrogatorio-cliente`.
- **Juntar toda a investigação defensiva aos autos:** a juntada é **seletiva**; despejar material bruto (inclusive o desfavorável) viola a lógica do Provimento 188/2018 e pode ser irreversível.
- **Entrevistar testemunha sem registro e consentimento:** abre flanco para alegação de constrangimento e queima o elemento colhido — documente sempre.
- **"Preclusão" invertida — o timing material:** o IP não tem preclusão em sentido próprio, mas cada janela fecha de fato: **quesitos** antes do laudo; **razões** antes da denúncia; **preservação** antes do descarte. Relatado o IP, o centro decisório migra ao MP — mude o endereçamento junto.
- **Fundar a peça em regime normativo em transição:** art. 28 do CPP (arquivamento) e juiz das garantias (arts. 3º-A a 3º-F) tiveram eficácia modulada em ADIs e implantação heterogênea — **confira a redação e a vigência no foro via agente `lei-e-sumula`** antes de citar.
- **Tom de ameaça à autoridade:** fundamentos normativos (nulidade, responsabilização) entram com sobriedade técnica — o mesmo delegado decidirá os próximos requerimentos desta defesa.

## Checklist antes de protocolar/atuar

**Requerimento de diligências (Frente 1):**
- [ ] Destinatário e tratamento corretos (delegado/MP — "Excelentíssimo")?
- [ ] Cada diligência **individualizada** com justificativa de pertinência?
- [ ] Provas perecíveis destacadas como **urgentes** (+ preservação extrajudicial paralela)?
- [ ] Quesitos anexados quando houver perícia?
- [ ] Pedidos de **intimação da defesa** para os atos e de **certidão** em caso de negativa?

**Acompanhamento e interrogatório (Frente 2):**
- [ ] Entrevista prévia reservada realizada e estratégia (falar × silêncio) definida?
- [ ] Consignações, protestos e indeferimentos registrados no termo (ou por petição imediata)?
- [ ] Razões ao MP planejadas para **antes** da denúncia (arquivamento/ANPP)?
- [ ] Tese de nulidade (7º, XXI) com jurisprudência atual pesquisada e verificada (nada de memória)?

**Investigação defensiva (Frente 3):**
- [ ] Meios lícitos, sem contato indevido com testemunhas arroladas pela autoridade?
- [ ] Entrevistas documentadas (identificação, consentimento, registro)?
- [ ] Prova digital com cadeia de custódia própria (hash/ata notarial)?
- [ ] Juntada **seletiva** decidida peça a peça (sigilo profissional sobre o restante)?

## Apoie-se em

- **Agentes:** `analise-denuncia` (avaliação prospectiva dos elementos indiciários — leia o IP com os olhos do acusador antes de escrever as razões), `mapa-nulidades` (catálogo dos vícios da investigação desde a origem), `triagem-novo-caso` (entrada do caso, urgências e conflito de interesses), `lei-e-sumula` (redação vigente do art. 28 do CPP, juiz das garantias e Provimento 188/2018), `jurisprudencia-stj-stf` + `verificador-citacoes` (precedentes atuais sobre o alcance do art. 7º, XXI — marque [NÃO VERIFICADO] o que não confirmar).
- **Best-practices:** `peticao-criminal` (forma e estilo da peça), `etica-oab-sigilo` (sigilo profissional e juntada seletiva), `verificacao-citacoes` (Citation Gate — nenhum julgado citado de memória).
- **Skills relacionadas:** `acesso-autos-investigacao` (irmã — obter e destravar o acesso via SV 14/Reclamação), `pedido-diligencias` (peça detalhada da Frente 1), `quesitos-pericia` (quesitos aprofundados), `arquivamento-inquerito` (razões/promoção de arquivamento), `requerimento-investigacao` (polo oposto — vítima instaurando IP/TC/PIC), `plantao-pos-flagrante-primeiras-24h` (fase aguda do flagrante), `preparacao-interrogatorio-cliente` (preparo do cliente para o ato), `preservacao-prova-digital-defesa` (coleta defensiva digital), `habeas-corpus` (trancamento/desindiciamento), `liberdade-provisoria-relaxamento` (investigado preso), `anpp` (saída negocial pré-denúncia), `habilitacao-acesso-autos` (entrada formal no feito).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
