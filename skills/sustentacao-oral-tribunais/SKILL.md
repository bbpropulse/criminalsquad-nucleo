---
name: sustentacao-oral-tribunais
description: >-
  Use ao preparar, roteirizar ou ensaiar SUSTENTAÇÃO ORAL em sessão de julgamento de câmaras/turmas
  criminais de TJ/TRF, do STJ e do STF — os 15 minutos na tribuna perante julgadores togados, com
  memorial de apoio e despacho prévio com gabinetes. Gatilhos: sustentação oral, sustentar da
  tribuna, tribuna, sessão de julgamento, pauta de julgamento, processo em mesa, art. 937 CPC, art.
  3º CPP, arts. 610 e…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, audiencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-sustentacao-oral-tribunais"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["sustentacao-oral-tribunais", "sustentacao oral", "oral tribunais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Sustentação Oral em Tribunais (Câmaras Criminais, STJ e STF)

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

Esta skill orienta a **atuação oral perante julgadores togados** na sessão de julgamento colegiado: câmaras/turmas criminais de TJ e TRF, Turmas do STJ (matéria penal: 5ª e 6ª, na 3ª Seção) e do STF. Não é peça protocolada — o entregável é duplo: **roteiro falado de 15 minutos** + **memorial de apoio** para os gabinetes. Cobre cabimento, inscrição prévia (presencial e por videoconferência), sessão virtual, a fronteira da sustentação em **AgRg criminal**, a estrutura do discurso e a rotina de **despacho com gabinetes** antes da sessão.

> **Posição no acervo:** a skill `juri-plenario-debates` cobre a oralidade perante **jurados leigos** (plenitude de defesa, 1h30, réplica/tréplica); as skills recursais (ex.: `recurso-especial-criminal`) cobrem a **peça escrita**. Aqui está o que nenhuma delas cobre: a **oralidade técnica** no dia em que o recurso ou o HC é julgado — rotina recorrente de quem atua em 2º grau e nos tribunais superiores. Serve à defesa (foco), ao MP, à Defensoria e ao assistente de acusação.

## O instituto e a base legal

| Fonte | O que traz |
|---|---|
| **CPC, art. 937** (c/c **art. 3º CPP**) | Regra geral moderna: sustentação de **15 minutos**, rol de classes que a comportam, **preferência de julgamento** a requerimento (§2º), sustentação em agravo interno contra monocrática que extingue ação originária (§3º) e **videoconferência** para advogado domiciliado em cidade diversa, requerida **até o dia anterior à sessão** (§4º) — confira a redação vigente dos parágrafos via agente `lei-e-sumula` |
| **CPP, arts. 610, parágrafo único, e 613** | Disciplina original do julgamento dos recursos criminais; o art. 610, p.ú., prevê palavra de **10 minutos** — na prática atual, prevalecem o padrão de 15 minutos e o rito dos **regimentos internos** |
| **Regimentos internos** (RISTF, RISTJ, RITJ/RITRF) | Fixam inscrição, ordem da sessão, processos julgados **"em mesa"** (HC, AgRg), sessão virtual e destaque. **Nunca cite artigo de regimento de memória** — confira no texto oficial do tribunal antes de invocar |
| **EAOAB (Lei 8.906/94), art. 7º, VIII e X** | Prerrogativas que sustentam a rotina: ser recebido pelo magistrado (despacho com gabinetes) e **usar da palavra, pela ordem, para esclarecer equívoco ou dúvida de fato** que influa no julgamento |
| **EAOAB, art. 7º, §2º-B (Lei 14.365/2022)** | Ampliou a sustentação oral em **agravos internos/regimentais** contra decisão monocrática de mérito — dispositivo recente e de alcance disputado: **confira a redação vigente via `lei-e-sumula`** antes de invocar |

**Natureza:** ato postulatório **oral e facultativo**, exercido na sessão de julgamento. Não amplia a devolutividade: o colegiado julga o que a **peça escrita** devolveu — a sustentação ilumina, hierarquiza e atualiza, mas não cria tese nova vinculante (exceção prática: matéria de ordem pública e fato superveniente, como prescrição consumada, que podem e devem ser levados à tribuna).

## Cabimento — em que classes se sustenta

| Classe (criminal) | Cabe sustentação? | Nota prática |
|---|---|---|
| **Apelação criminal** | Sim | Art. 937, I, CPC c/c art. 3º CPP; arts. 610/613 CPP |
| **RESE / agravo em execução** | Sim, em regra | Rito do art. 610 CPP; confirme no regimento do tribunal local |
| **Habeas corpus e RHC** | Sim | HC costuma ser julgado **"em mesa"** (sem pauta prévia) — monitore e inscreva-se no próprio dia, conforme o regimento |
| **Recurso ordinário (ROC)** | Sim | Art. 937, II, CPC |
| **REsp / RE** | Sim | Art. 937, III e IV, CPC — a sessão de julgamento da peça construída na skill `recurso-especial-criminal` |
| **Embargos de divergência** | Sim | Art. 937, V, CPC |
| **Revisão criminal (ação de competência originária)** | Sim, em regra | Verifique o regimento do tribunal |
| **AgRg / agravo interno** | **Em regra, NÃO** | Exceções: art. 937, §3º, CPC e art. 7º, §2º-B, EAOAB — ver seção própria |
| **Embargos de declaração** | Não, em regra | Reste o memorial e a palavra pela ordem para equívoco de fato |

## Inscrição, tempo e modalidades — o filtro que precede o mérito

**Quem não se inscreve, não sustenta.** A perda do prazo de inscrição é a preclusão mais banal e mais frequente da rotina de tribunais:

1. **Pauta publicada** → capture a data da sessão pelo DJEN (skill `monitor-dje`) e identifique o órgão julgador e o relator. Processos **"em mesa"** (HC, AgRg, conforme o regimento) podem ser julgados **sem pauta prévia** — acompanhe o andamento.
2. **Inscrição prévia** → cada tribunal tem canal próprio (sistema eletrônico, e-mail do gabinete/coordenadoria, formulário). Antecedência varia por regimento e resolução — **confira no site oficial do tribunal**; não presuma o prazo de um tribunal para outro.
3. **Videoconferência** → o art. 937, §4º, do CPC assegura ao advogado de **cidade diversa** da sede sustentar por vídeo, com requerimento **até o dia anterior à sessão**; resoluções locais podem exigir antecedência maior e cadastro em plataforma — confira. Teste conexão, use fundo neutro e mantenha documento de identificação à mão.
4. **Sessão virtual (assíncrona)** → em regra **não há sustentação ao vivo**: dentro do prazo regimental, **oponha-se ao julgamento virtual ou peça destaque** para sessão presencial/telepresencial, ou envie **sustentação gravada** onde o tribunal a admitir. Perdido esse prazo, o julgamento corre sem voz da parte.
5. **Preferência de julgamento** → inscrito para sustentar, requeira **até o início da sessão** o julgamento prioritário (art. 937, §2º, CPC) — evita horas de espera e julgadores fatigados.
6. **Tempo: 15 minutos** por parte, em regra. Havendo litisconsortes com procuradores distintos, há regra de divisão/ampliação de tempo — confira o art. 937 e o regimento. **Não existe réplica/tréplica** na sessão colegiada (diferença central para o júri): depois da tribuna, só a **palavra pela ordem** para equívoco **de fato** (art. 7º, X, EAOAB).

**Ordem das falas:** relatório do relator → sustentação do **recorrente** → sustentação do **recorrido** → manifestação do MP (quando oficia como fiscal, fala após as partes) → votos. Em recurso exclusivo da acusação, a **defesa sustenta por último**; havendo inversão que prejudique a defesa, **registre protesto em ata/notas taquigráficas** para futura arguição de nulidade.

## Sustentação em AgRg criminal — a fronteira em disputa

Grande parte da matéria criminal no STJ e no STF morre em **decisão monocrática** do relator, atacável por agravo regimental/interno — classe em que, pela regra clássica, **não cabe sustentação oral**. O cenário mudou parcialmente:

- **Art. 937, §3º, CPC:** admite sustentação no **agravo interno** contra decisão monocrática que **extingue ação originária** (rescisória, MS, reclamação) — por paralelismo, sustente a extensão ao **HC originário extinto monocraticamente**, tese a validar no tribunal.
- **Art. 7º, §2º-B, EAOAB (Lei 14.365/2022):** ampliou a sustentação em agravos contra monocrática que julga o **mérito** ou **não conhece** de recurso — e o rol do dispositivo menciona expressamente o **habeas corpus** entre as ações. **Confira a redação vigente e o alcance via `lei-e-sumula`**; a aplicação pelos tribunais superiores em matéria criminal oscila — **pesquise o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** o que não confirmar.

**Estratégia prática no AgRg criminal:** (1) requeira a sustentação por petição fundamentada no §2º-B ao se inscrever; (2) indeferida, **consigne o protesto** — cerceamento de defesa é tese para nulidade e para os tribunais superiores; (3) sustente **no papel**: o **memorial** é sempre cabível e, no AgRg, costuma ser a única voz da parte — capriche nele; (4) na tribuna (se admitida), o alvo é um só: o **distinguishing** entre o caso e o precedente que fundou a monocrática.

## Estrutura forense do roteiro falado (15 minutos)

O julgador togado **já leu (ou lerá) o processo pelo voto do relator**: a sustentação não relata — **decide a atenção do colegiado sobre 2-3 pontos**. Hierarquize as teses pela lógica da eventualidade (BP `recurso-criminal`) e corte o resto.

```
ROTEIRO DE SUSTENTAÇÃO — [classe] nº [...] | Relator: [...] | Sessão: [data]
Parte: [recorrente/recorrido/impetrante] | Tempo-alvo: 12-13 min (margem de 2)

0:00–1:00  ABERTURA
  - Saudação protocolar curta: "Senhor(a) Presidente, Senhores(as)
    Desembargadores(as)/Ministros(as), [Senhor(a) Procurador(a)]".
  - Identificação: nome, OAB, por quem fala.
  - FRASE-SÍNTESE do caso: uma sentença que resume por que o recurso
    deve ser provido (a tese-âncora, que será repetida no fecho).

1:00–2:30  DELIMITAÇÃO
  - O que está em julgamento e o que NÃO se pede (no STJ: "não se
    pretende reexame de prova — a moldura fática do acórdão basta"
    — blindagem expressa contra a Súmula 7/STJ).
  - Anúncio das 2-3 teses, na ordem em que serão sustentadas.

2:30–11:00  TESES (2-3, da mais forte à subsidiária)
  Para cada tese, o mesmo ciclo:
  a) enunciado em uma frase;
  b) amarração ao processo: folha/evento, trecho do acórdão ou do
     depoimento — mostrar, não só afirmar;
  c) norma ou precedente (só os verificados pelo `verificador-citacoes`);
  d) conclusão parcial ("logo, impõe-se [efeito]").

11:00–13:00  ENFRENTAMENTO
  - O fundamento central do acórdão recorrido (ou do parecer contrário)
    e por que não se sustenta — dialeticidade também na tribuna.
  - Fato superveniente, se houver (ex.: prescrição consumada após a
    interposição — matéria de ordem pública, sempre cabível).

13:00–14:00  PEDIDO + FECHO
  - Pedido específico e operacional: "conhecer e prover para [efeito
    exato]"; subsidiárias em uma frase.
  - Retorno à frase-síntese da abertura — fecho sóbrio e memorável.
```

**Regras de ouro da tribuna togada:**
- **Não leia a peça nem o memorial** — o colegiado os tem; fale de cabeça, com o roteiro como mapa.
- **Máximo de 3 teses.** Sustentação é escolha, não índice do recurso.
- **Perguntas dos julgadores são oportunidade**, não interrupção: responda direto, curto, e volte ao roteiro.
- **Adapte ao placar:** se o voto do relator já circulou (destaque de sessão virtual) ou foi antecipado, sustente **contra o fundamento do voto**, não contra o acórdão de origem em abstrato.
- **Ensaie cronometrado** para 12-13 minutos — o presidente corta aos 15.

## Oralidade togada não é tribuna do júri

A técnica retórica da skill `juri-plenario-debates` (narrativa, tese-âncora, gestão do tempo, antecipação do adversário) **transfere-se adaptada** — o que muda é o auditório:

| Dimensão | Plenário do júri | Sessão colegiada togada |
|---|---|---|
| Julgador | Jurado leigo, **íntima convicção** | Togado, decide com **fundamentação técnica** |
| Registro | Plenitude de defesa: razão **e** emoção | Sobriedade técnica; emoção apenas residual e contida |
| Tempo | 1h30 (+ réplica/tréplica) | **15 minutos**, sem tréplica |
| Conteúdo | História concreta, cenas, linguagem cotidiana | Tese, subsunção e amarração a folhas dos autos |
| Pedido | Voto no quesito ("votem SIM") | Dispositivo ("conhecer e prover para...") |
| Última palavra | Sempre da defesa (tréplica) | Ordem do art. 937; defesa por último se só a acusação recorre |

## Memorial de apoio e despacho com gabinetes

A sustentação começa **dias antes da sessão** — nos gabinetes. O voto costuma estar minutado antes da tribuna: o memorial e o despacho são a via de influência no momento em que o voto ainda se escreve.

**Memorial de julgamento (2-4 páginas):** figura distinta das alegações finais — reutilize da skill `memoriais` a técnica de síntese e a **ementa inicial** com as teses, adaptando o alvo (lá, o juiz da instrução; aqui, o colegiado):

```
MEMORIAL — [classe] nº [...] | Relator(a): [...] | Sessão de [data] | [órgão julgador]
[Parte] : [nome]
EMENTA DAS TESES (3-5 linhas, estilo acórdão)
I  — Síntese do caso (meia página, sem adjetivos)
II — Teses (uma seção por tese: enunciado → folha/evento → norma → efeito)
III — Pedido (espelho do pedido recursal)
[assinatura, OAB, contato]
```

- **Entregue a todos os gabinetes** do órgão julgador (não só ao relator) com alguns dias de antecedência, pelo canal que cada gabinete indicar (peticionamento, e-mail institucional, protocolo físico).
- **Despacho com o relator** (art. 7º, VIII, EAOAB — direito de ser recebido): agende com o gabinete, leve o memorial, exponha em 5-10 minutos as 2-3 teses e responda dúvidas da assessoria. Onde houver **revisor**, repita a visita. Nos demais vogais, a entrega do memorial basta em regra.
- **Coerência total** entre peça escrita, memorial e sustentação: o trio conta a mesma história com a mesma hierarquia de teses.

## Teses típicas na tribuna (o que escolher em 15 minutos)

- **Apelação criminal (defesa):** uma tese absolutória forte (fragilidade da prova de autoria, nulidade determinante) + dosimetria como subsidiária em uma frase.
- **HC/RHC:** ilegalidade objetiva e visível — fundamentação inidônea da preventiva, falta de contemporaneidade, excesso de prazo, inadequação das cautelares.
- **REsp/RE:** a violação de lei federal **já prequestionada**, formulada como questão de direito sobre a moldura fática do acórdão — jamais pedir reexame de prova (Súmula 7/STJ).
- **AgRg:** distinguishing entre o caso concreto e o precedente invocado na monocrática — um único alvo, cirúrgico.
- **Acusação/assistente:** restabelecimento de qualificadora ou majorante decotada, correção de dosimetria contra legem, tese de direito sobre marco prescricional.

## Erros comuns e pegadinhas

- **Perder a inscrição**: sem inscrição tempestiva (ou sem o requerimento de vídeo **até o dia anterior** — art. 937, §4º, CPC), não há tribuna. Primeiro ato ao ver a pauta: inscrever-se.
- **Subir à tribuna sem procuração nos autos**: quem vai sustentar precisa de **procuração ou substabelecimento juntado** (e identidade profissional à mão). Em HC a exigência é abrandada (qualquer pessoa pode impetrar) — ainda assim, regularize a representação antes da sessão; conferência do tratamento regimental via `lei-e-sumula`.
- **Ignorar o "em mesa"**: HC e AgRg podem ser julgados sem pauta prévia — quem espera a publicação da pauta perde a sessão. Monitore o andamento (skill `monitor-dje`).
- **Deixar correr a sessão virtual**: sem oposição/destaque no prazo regimental, o julgamento assíncrono ocorre **sem sustentação**. Trate o prazo de destaque como prazo processual.
- **Relatar em vez de sustentar**: gastar 10 minutos contando os fatos que o relator acabou de relatar é a forma mais comum de desperdiçar a tribuna.
- **Ler a peça** ou despejar 6 teses — o colegiado desliga; escolha 2-3 e desenvolva.
- **Sustentar prova no STJ**: pedir "reavaliação do conjunto probatório" da tribuna queima o tempo e a credibilidade (Súmula 7/STJ) — reformule como qualificação jurídica.
- **Contar com tréplica**: não existe segunda fala; munição não usada se perde. A única volta é a **palavra pela ordem** para **equívoco de fato** (art. 7º, X, EAOAB) — use-a com parcimônia e precisão.
- **Tese nova na tribuna**: a devolutividade foi fixada na peça escrita; sustentação não a amplia (salvo ordem pública/fato superveniente). Tese esquecida no recurso não renasce no microfone.
- **Endereçamento/tratamento trocado**: Desembargador(a) em TJ/TRF, Ministro(a) em STJ/STF; "Egrégia Câmara/Colenda Turma" conforme o órgão. Erro protocolar mina a credibilidade nos primeiros segundos.
- **Citar julgado de memória na tribuna**: vale a mesma disciplina da peça — só precedentes pesquisados via `jurisprudencia-stj-stf` e confirmados pelo `verificador-citacoes`; na dúvida, sustente a norma e o princípio, não o número.
- **Não registrar incidentes**: indeferimento de sustentação (ex.: no AgRg), inversão da ordem em prejuízo da defesa, corte indevido de tempo — **protesto consignado** é o pressuposto da nulidade futura.
- **Esquecer o memorial no AgRg**: onde a voz é negada, o papel entra em todos os gabinetes — memorial é o plano B permanente.

## Checklist final

- [ ] Pauta/andamento monitorado (inclusive **"em mesa"**) e sessão identificada (órgão, relator, data)?
- [ ] **Inscrição** feita no canal e prazo do tribunal; vídeo requerido **até o dia anterior** (art. 937, §4º, CPC) se for o caso?
- [ ] Sessão **virtual**? Oposição/destaque apresentado no prazo, ou sustentação gravada enviada onde admitida?
- [ ] **Preferência de julgamento** a requerer até o início da sessão (art. 937, §2º, CPC)?
- [ ] Classe comporta sustentação? Em **AgRg**, requerimento fundado no art. 7º, §2º-B, EAOAB (redação conferida via `lei-e-sumula`) e plano B do memorial pronto?
- [ ] **2-3 teses** escolhidas e hierarquizadas (eventualidade — BP `recurso-criminal`), coerentes com a peça escrita?
- [ ] Roteiro cronometrado em **12-13 minutos**, com frase-síntese na abertura e no fecho?
- [ ] Blindagem contra **Súmula 7/STJ** explícita (quando no STJ)?
- [ ] **Memorial (2-4 págs)** entregue a todos os gabinetes; **despacho com o relator** agendado (art. 7º, VIII, EAOAB)?
- [ ] Precedentes da fala **pesquisados e verificados**; pendências marcadas **[NÃO VERIFICADO]** e fora do roteiro?
- [ ] Respostas preparadas para as **3-5 perguntas prováveis** do colegiado e para o fundamento central do acórdão/parecer?
- [ ] Protestos possíveis mapeados (indeferimento de sustentação, inversão de ordem, corte de tempo) para **consignação em ata**?
- [ ] Fato superveniente (ex.: prescrição) conferido na véspera da sessão?

## Apoie-se em

- **Skill `juri-plenario-debates`** — a técnica retórica de oralidade (tese-âncora, antecipação do adversário, gestão de tempo), aqui **adaptada** do jurado leigo para o julgador togado.
- **Skill `memoriais`** — a técnica de síntese e a ementa de teses, adaptadas das alegações finais para o **memorial de julgamento**.
- **Skill `recurso-especial-criminal`** — a peça escrita cuja sessão de julgamento no STJ esta skill prepara; a sustentação espelha as teses e os filtros lá construídos.
- **Best-practice `recurso-criminal`** — hierarquia de teses (eventualidade) e dialeticidade, que ordenam o roteiro falado.
- **Best-practice `verificacao-citacoes`** — Citation Gate: nada é dito na tribuna ou escrito no memorial sem confirmação.
- **Agente `resumo-processo`** — dossiê do processo (decisões, provas, cronologia) como insumo da preparação do roteiro.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes do colegiado e do próprio relator antes da sessão.
- **Agente `lei-e-sumula`** — conferência do art. 937 do CPC e seus parágrafos, do art. 7º, §2º-B, do EAOAB e do regimento interno aplicável.
- **Agente `verificador-citacoes`** — validação final de toda citação do memorial e do roteiro; o que não confirmar sai ou recebe **[NÃO VERIFICADO]**.

**Padrão de redação:** ao redigir o roteiro e o memorial, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
