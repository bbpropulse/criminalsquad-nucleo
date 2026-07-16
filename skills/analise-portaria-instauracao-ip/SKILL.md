---
name: analise-portaria-instauracao-ip
description: >-
  Use para examinar a legalidade do ATO QUE ABRE o inquérito — controle da portaria e da forma de
  instauração (requisição, requerimento, flagrante, notícia anônima), justa causa mínima para
  investigar, competência da autoridade, delimitação do objeto/imputação e vícios que autorizam
  trancamento ab initio. Gatilhos: análise da portaria, instauração ilegal do inquérito, IP
  instaurado sem justa causa, denúncia anônima como base… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-portaria-instauracao-ip"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-portaria-instauracao-ip", "analise portaria", "portaria instauracao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise da Portaria e da Instauração do Inquérito Policial (art. 5º do CPP)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **leitura crítica do ato inaugural da investigação** — a **portaria** (ou o ato equivalente) que instaura o inquérito policial. O foco não são os atos praticados ao longo da apuração, mas o **nascimento** do IP: a **forma** pela qual foi instaurado, a **base fática mínima** que o legitima, a **competência** da autoridade e a **delimitação do objeto**. Detectados vícios de origem, abre-se caminho para **trancamento do inquérito** (via HC) ou para o reconhecimento de que a investigação nasceu ilegítima.

> **Lição central:** o inquérito não precisa de "prova", mas precisa de **justa causa mínima** — um substrato fático idôneo que indique a existência de infração e algum elemento de autoria/participação. Instauração **genérica**, movida só por suspeita difusa ou por **notícia anônima isolada**, é abuso. Ataque **a origem**, não os detalhes: um vício inaugural contamina tudo o que vem depois.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 5º do CPP**, da **Lei 12.830/2013** (investigação criminal conduzida pelo delegado) e o estado atual da jurisprudência sobre **notícia anônima** e **trancamento de IP**. Passe toda súmula, tese ou precedente pelo gate `verificacao-citacoes` (ou pela skill `jurisprudencia-stj-stf`) antes de fundamentar — há sanções reais por jurisprudência inventada por IA.

## Base legal

- **Art. 5º do CPP** — as **formas de instauração** do inquérito nos crimes de ação pública: **de ofício** (portaria da autoridade policial), por **requisição** da autoridade judiciária ou do Ministério Público, ou a **requerimento** do ofendido.
- **Art. 5º, §1º, CPP** — requisitos do **requerimento** do ofendido (narrativa do fato, individualização do indiciado ou seus sinais, razões de convicção, nomeação de testemunhas).
- **Art. 5º, §2º, CPP** — do **indeferimento** do requerimento cabe **recurso ao chefe de Polícia** (delegado-geral).
- **Art. 5º, §3º, CPP** — a ***delatio criminis*** (notícia de qualquer pessoa): a autoridade **verifica a procedência** das informações antes de mandar instaurar. É a base que impõe **filtro** à notícia anônima.
- **Art. 5º, §§4º e 5º, CPP** — nos crimes de **ação penal privada** e de **ação pública condicionada**, a instauração depende de **requerimento/representação** de quem tenha qualidade para intentá-la (sem ela, o IP é irregular).
- **Art. 4º e art. 6º do CPP** — atribuição da polícia judiciária e primeiras providências (delimitam o que o inquérito apura).
- **Lei 12.830/2013, art. 2º** — a investigação criminal é atribuição do **delegado de polícia**, ato de **natureza jurídica**, com fundamentação; o **indiciamento** é ato **privativo e fundamentado** do delegado (§6º).
- **CF, art. 5º, LIV (devido processo) e LX; art. 129, VIII (requisição pelo MP)** — moldura constitucional do controle.

## O que se ataca no ato inaugural (5 eixos de vício)

A instauração tem **vícios próprios**, distintos dos vícios de atos internos da apuração. Rode os cinco eixos:

1. **FORMA de instauração** — o IP foi aberto por uma das vias do art. 5º? A via está formalmente correta (portaria de ofício, requisição, requerimento/representação)? Em ação privada/pública condicionada, houve a **representação/requerimento** de quem tem legitimidade?
2. **JUSTA CAUSA mínima para investigar** — há substrato fático idôneo (fato aparentemente típico + algum elemento de autoria) ou a portaria se apoia em **suspeita difusa**, **ilação** ou **anônimo isolado** sem verificação prévia (art. 5º, §3º)?
3. **COMPETÊNCIA/atribuição** — a autoridade que instaurou tinha **atribuição** para o fato (matéria, território, foro por prerrogativa, esfera federal x estadual)?
4. **OBJETO/imputação delimitados** — a portaria descreve **fato determinado** (o *quê*, *quando*, *onde*, contra *quem*) ou é **genérica**, autorizando devassa aberta ("pescaria") sem objeto definido?
5. **LICITUDE da fonte que originou o IP** — a *notitia criminis* veio de **prova ilícita**, de interceptação sem autorização, de quebra de sigilo indevida ou de encontro fortuito fora dos limites? Fonte contaminada na origem projeta ilicitude sobre o inquérito.

## As formas de instauração — leitura de cada via

| Via (art. 5º) | Ato inaugural | Ponto de controle da defesa |
|---|---|---|
| **De ofício** (crime de ação pública) | **Portaria** da autoridade policial | A portaria descreve fato determinado e indica a base fática? Não é genérica? |
| **Requisição** do juiz ou do MP | Ofício de requisição + portaria | A requisição aponta fato concreto? (Requisição não é ordem para "investigar a pessoa X" sem fato.) |
| **Requerimento do ofendido** | Requerimento (art. 5º, §1º) + portaria | Preenche os requisitos do §1º? Se indeferido, cabe recurso ao chefe de Polícia (§2º). |
| ***Delatio criminis*** (qualquer do povo, §3º) | Verificação prévia + portaria | Houve **verificação da procedência** antes de instaurar? Anônimo isolado **não basta**. |
| **Ação privada / pública condicionada** (§§4º-5º) | Requerimento do ofendido / **representação** | Existe a representação/requerimento de quem tem legitimidade? Prazo decadencial observado? |

> **Nota sobre a requisição do MP (CF, art. 129, VIII; art. 5º, II, CPP):** o MP pode **requisitar** a instauração, mas a requisição deve apontar **fato concreto e determinado** — não serve para abrir devassa contra pessoa certa sem imputação de fato. A condução da investigação, instaurado o IP, é do **delegado** (Lei 12.830/2013, art. 2º).

## O problema da notícia anônima (delatio criminis inqualificada)

A **notícia anônima** (denúncia apócrifa, disque-denúncia) é o vício de origem mais comum e o mais fértil para a defesa.

- **Regra:** o anonimato, por si só, **não instaura** inquérito nem autoriza medidas invasivas. O art. 5º, §3º, do CPP impõe à autoridade **verificar a procedência** das informações **antes** de instaurar.
- **Roteiro consolidado (tese defensiva):** diante de notícia anônima, a autoridade deve (i) realizar **diligências prévias e discretas** para aferir a verossimilhança e (ii) só então, **se confirmada uma base mínima**, instaurar o IP e adotar medidas mais gravosas. **Instaurar direto** — ou pior, deferir busca/interceptação — **com base exclusiva no anônimo** é ilegal.
- **Súmula 397 do STF** — trata do poder de polícia do presidente da Câmara sobre o edifício e não é fundamento geral para instauração por anônimo; **cuidado ao invocá-la fora de contexto** (verifique o enunciado e a pertinência via `jurisprudencia-stj-stf`).
- ➡️ **Tese defensiva (forte):** IP instaurado **exclusivamente** com base em notícia anônima, **sem verificação prévia idônea** (art. 5º, §3º), é nulo em sua origem; as provas subsequentes são **frutos da árvore envenenada** (art. 157 do CPP).
- ➡️ **Contra-tese (acusação):** houve **diligências preliminares** que confirmaram a plausibilidade antes da instauração — o anônimo foi apenas o **impulso inicial**, não a base única. A defesa deve **cobrar nos autos** a demonstração dessas diligências prévias; se não existirem, o vício se mantém.

## Justa causa para investigar (≠ justa causa para denunciar)

- O inquérito é **peça informativa e inquisitiva** — dispensa contraditório pleno e não exige "prova", mas exige **um mínimo de lastro fático** que justifique mobilizar o aparato investigativo. Investigar **sem qualquer indício** é constrangimento ilegal.
- **Distinção crucial:** a justa causa para **instaurar** é menos exigente do que a justa causa para a **ação penal** (art. 395, III, CPP). Mas "menos exigente" **não** significa "nenhuma": portaria que não aponta fato típico determinado, ou que se move por antipatia/suspeita genérica, carece de justa causa investigativa.
- **Objeto indeterminado = devassa vedada.** A investigação deve ter **objeto delimitado** (fato certo). Portaria "guarda-chuva" que autoriza investigar tudo de uma pessoa, sem fato definido, viola o devido processo e serve de base para trancamento.

## Trancamento do inquérito (a via de ataque)

O ataque à instauração viciada se materializa, em regra, por **habeas corpus** (art. 5º, LXVIII, CF; art. 647-648 do CPP) — trancamento do IP por **falta de justa causa** ou **ilegalidade da origem**.

- **Excepcionalidade:** o trancamento de IP por HC é **medida excepcional**, cabível quando a ilegalidade é **manifesta** — atipicidade evidente do fato, ausência absoluta de justa causa, causa extintiva da punibilidade (ex.: prescrição, decadência), ou ilegitimidade/incompetência patente. Não serve para revolver prova.
- **Hipóteses típicas de trancamento ab initio:**
  1. **Atipicidade** manifesta do fato descrito na portaria.
  2. **Ausência de justa causa** — nenhum indício mínimo de autoria/materialidade.
  3. **Instauração por anônimo isolado**, sem verificação prévia (art. 5º, §3º).
  4. **Falta de representação** em ação pública condicionada / requerimento em ação privada (§§4º-5º).
  5. **Decadência/prescrição** já consumadas ao tempo da instauração.
  6. **Incompetência/ausência de atribuição** manifesta da autoridade.
  7. **Origem em prova ilícita** que contamina toda a investigação (art. 157 CPP).
- **Alternativas ao HC:** representação por **arquivamento** ao MP (dominus litis), pedido de **relaxamento** de medidas cautelares dele decorrentes, ou impugnação incidental quando a matéria chegar ao juízo. O HC é o caminho mais direto para o **trancamento**.

## Teses defensivas e contra-teses (síntese)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Portaria genérica, sem fato determinado → devassa vedada | Devido processo; objeto do IP deve ser delimitado | A portaria remete a peças de informação anexas que concretizam o fato |
| Base exclusiva em anônimo, sem verificação prévia → nulo | Art. 5º, §3º, CPP | Houve diligências preliminares que confirmaram a plausibilidade |
| Ausência de justa causa investigativa → trancamento | Art. 647-648 CPP; HC | Há lastro mínimo suficiente para investigar (não para denunciar) |
| Falta de representação (ação condicionada) → IP irregular | Art. 5º, §§4º-5º, CPP | A representação está suprida por manifestação inequívoca do ofendido nos autos |
| Incompetência/ausência de atribuição da autoridade | Regras de competência; Lei 12.830/2013 | Atribuição fixada pela natureza do fato/território; eventual vício sanável |
| Origem em prova ilícita contamina o IP | Art. 157 CPP (frutos da árvore envenenada) | Fonte independente / descoberta inevitável |
| Atipicidade manifesta do fato | Art. 395, III, por analogia; HC | O juízo de tipicidade é prematuro na fase de IP |

## Roteiro de análise (passo a passo)

1. **Identifique a via de instauração** (art. 5º): ofício/portaria, requisição, requerimento, *delatio criminis*, representação. A via está formalmente correta para a espécie de ação penal?
2. **Leia a portaria integralmente** e extraia: fato imputado (o quê/quando/onde), pessoa(s) visada(s), base fática invocada, autoridade signatária e data.
3. **Teste a justa causa mínima:** há fato típico determinado + algum elemento de autoria/materialidade? Ou é suspeita difusa?
4. **Rastreie a origem da *notitia criminis*:** anônimo? disque-denúncia? houve **verificação prévia** (art. 5º, §3º)? A fonte é lícita?
5. **Confira a competência/atribuição** da autoridade (matéria, território, foro por prerrogativa, esfera).
6. **Verifique pressupostos da ação penal** conforme a espécie: representação (condicionada), requerimento e prazo decadencial (privada).
7. **Cheque causas extintivas** já presentes ao tempo da instauração (prescrição, decadência).
8. **Avalie a delimitação do objeto:** o IP tem objeto certo ou vira "pescaria"?
9. **Mapeie a contaminação:** se a origem é ilícita, liste as provas subsequentes atingidas (art. 157 CPP).
10. **Escolha a via de ataque:** HC para trancamento; representação por arquivamento ao MP; relaxamento de cautelares; impugnação incidental — sempre sob **revisão humana** e **Citation Gate**.

## Súmulas e dispositivos de apoio (conferir vigência via `jurisprudencia-stj-stf`)

- **Art. 5º, §3º, CPP** — dever de **verificar a procedência** da notícia antes de instaurar (âncora do controle do anônimo).
- **Art. 157 do CPP** — **inadmissibilidade das provas ilícitas** e por derivação (frutos da árvore envenenada) — aplica-se à contaminação de origem.
- **Art. 395, III, CPP** — falta de **justa causa** (parâmetro para a ação; usado por analogia no exame da instauração).
- **Súmula 397/STF** — poder de polícia do presidente da Câmara sobre o edifício; **invocar só no contexto próprio** (não é regra geral de instauração por anônimo).
- **Lei 12.830/2013, art. 2º e §6º** — investigação e **indiciamento** como atos fundamentados e privativos do delegado.
- **[NÃO VERIFICADO]** Jurisprudência do STF/STJ sobre (i) **notícia anônima** exigir diligências prévias antes de medidas invasivas e (ii) **excepcionalidade do trancamento de IP** por HC: as teses são consolidadas, mas **não cite número de HC/RHC/Inq, tema ou informativo sem conferir** o acórdão real via `jurisprudencia-stj-stf`. Prefira sustentar a **tese** e o **dispositivo legal** a arriscar um número de precedente.

## Distinção de escopo (para não sobrepor skills)

- Esta skill trata **exclusivamente do ATO INAUGURAL** (portaria/forma de instauração e sua legalidade).
- Para varredura de **vícios e nulidades ao longo da apuração** (atos internos do IP), use `diagnostico-vicios-nulidades-inquerito`.
- Para o **fim** do inquérito (arquivamento), use `arquivamento-inquerito`.
- Para **redigir o HC de trancamento**, combine com a skill de **habeas corpus** e com `redacao-persuasiva-criminal`.

## Erros comuns e anti-padrões

- **Atacar o detalhe em vez da origem.** Discutir um interrogatório mal feito quando o próprio IP nasceu de anônimo isolado — o vício de origem é mais forte e contamina tudo.
- **Exigir do IP o padrão da denúncia.** Cobrar "prova" na fase inquisitiva; a justa causa investigativa é menor — mas **não é zero**.
- **Confundir "impulso inicial" com "base única".** Anônimo pode disparar diligências; o vício está em **instaurar/invadir com base exclusiva** nele.
- **Ignorar a espécie de ação penal.** Esquecer a **representação** (condicionada) ou o **prazo decadencial** (privada) — vícios que trancam o IP.
- **Invocar a Súmula 397/STF fora de contexto** como se legitimasse instauração por anônimo.
- **Citar número de precedente de memória.** Sanção real por jurisprudência inventada — passe tudo pelo gate.
- **Pedir trancamento sem ilegalidade manifesta.** O HC não revolve prova; sem vício patente, o pedido é indeferido e queima a tese.

## Checklist final

- [ ] Identifiquei a **via de instauração** (art. 5º) e ela é correta para a espécie de ação penal?
- [ ] A **portaria descreve fato determinado** (o quê/quando/onde/contra quem) ou é genérica?
- [ ] Há **justa causa mínima** para investigar (fato típico + algum elemento de autoria)?
- [ ] Se houve **notícia anônima**, houve **verificação prévia** idônea (art. 5º, §3º)?
- [ ] A **autoridade tinha atribuição/competência** para o fato?
- [ ] Em ação **condicionada/privada**, existe **representação/requerimento** e o **prazo** foi observado?
- [ ] Há **causa extintiva** (prescrição/decadência) já consumada na instauração?
- [ ] A **origem da prova** é lícita, ou contamina o IP (art. 157 CPP)?
- [ ] O **objeto** está delimitado (sem devassa aberta)?
- [ ] Escolhi a **via de ataque** adequada (HC de trancamento / arquivamento / relaxamento)?
- [ ] Todas as **súmulas/precedentes** passaram por `jurisprudencia-stj-stf` / `verificacao-citacoes`?

## Nota de conformidade

Este material é **rascunho técnico para revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. A responsabilidade pela análise e por eventual impugnação é sempre do **advogado** (Código de Ética da OAB; EAOAB; Provimento 205/2021 na atuação em meios digitais). Nenhuma súmula, tese ou precedente pode ser citado de memória: tudo passa pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`. Dados de cliente/assistido não vão a repositório público (sigilo e LGPD).

**Padrão de redação:** ao converter esta análise em peça (ex.: HC de trancamento), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
