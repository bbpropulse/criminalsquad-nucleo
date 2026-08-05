---
name: reclamacao-constitucional
description: >-
  Use ao elaborar, redigir ou revisar RECLAMAÇÃO CONSTITUCIONAL ao STF ou ao STJ em matéria criminal
  — ação autônoma para preservar a competência do tribunal e garantir a autoridade de suas decisões,
  de súmula vinculante e de precedente qualificado (CF, art. 102, I, 'l', art. 103-A, § 3º, e art.
  105, I, 'f'; CPC, arts. 988 a 993; Lei 11.417/2006, art. 7º). Gatilhos: reclamação, reclamação
  constitucional, Rcl, Rcl STF, Rcl STJ… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-reclamacao-constitucional"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["reclamacao-constitucional", "reclamacao constitucional"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Reclamação Constitucional em Matéria Criminal (Rcl — STF/STJ)

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

Esta skill orienta a construção da **Reclamação constitucional ao STF e ao STJ em matéria criminal**, com entregável definido: **petição inicial de Rcl com pedido liminar**. A Rcl **não é recurso** — é **ação autônoma** de assento constitucional, e por isso não está coberta pelas skills recursais nem pelas ações já mapeadas (HC, revisão criminal). Cresce na prática penal na exata medida da cultura de **precedentes vinculantes**: ordem de soltura descumprida, audiência de custódia não realizada, juiz das garantias ignorado, tese de repetitivo negada. Serve à **defesa** (foco principal), mas o art. 988, *caput*, do CPC legitima também o **Ministério Público**, e a estrutura vale igualmente para a Defensoria. Duas delimitações de partida: a Rcl específica por **descumprimento da SV 14** (acesso aos autos de investigação) já está detalhada na skill `acesso-autos-investigacao` — aqui se domina o **instituto geral**; e a fronteira entre Rcl e **novo HC** contra ato de tribunal está traçada adiante, em diálogo com a skill `hc-tribunais-superiores`.

## O instituto e a base legal

| Fonte | O que traz |
|---|---|
| **CF, art. 102, I, "l"** | Competência originária do **STF**: reclamação para **preservação de sua competência** e **garantia da autoridade de suas decisões** |
| **CF, art. 105, I, "f"** | A mesma competência originária, no **STJ**, quanto às decisões e à competência **dele** |
| **CF, art. 103-A, § 3º** | Rcl ao STF contra ato administrativo ou decisão judicial que **contrariar súmula vinculante** ou **aplicá-la indevidamente**; procedente, o STF **anula o ato ou cassa a decisão** e determina que outra seja proferida |
| **CPC, arts. 988 a 993** | Regime geral (aplicável ao processo penal por **analogia — art. 3º CPP**): hipóteses de cabimento, inadmissibilidades (§ 5º), prova documental, liminar, informações, citação do beneficiário, MP, cassação e cumprimento imediato |
| **Lei 11.417/2006, art. 7º** | Rcl por violação de súmula vinculante, **"sem prejuízo dos recursos ou outros meios admissíveis de impugnação"**; contra **omissão ou ato da administração**, só após **esgotadas as vias administrativas** (§ 1º) |
| **RISTF / RISTJ** | Processamento interno (distribuição, prevenção, poderes do relator) — **não cite artigo regimental de memória: confira via agente `lei-e-sumula`** |

**Natureza:** ação autônoma de índole constitucional (a posição prevalente afasta a antiga tese do mero direito de petição). Consequências práticas: **não há prazo** (o limite é o trânsito em julgado do ato reclamado), **exige capacidade postulatória** (procuração — diferente do HC) e o resultado típico é **cassação**, não reforma: o tribunal desfaz o ato e determina que outro seja praticado em conformidade (arts. 992 CPC e 103-A, § 3º, CF).

## Cabimento — as quatro portas do art. 988 do CPC

| Porta | Hipótese | Nota criminal |
|---|---|---|
| **I** | **Preservar a competência** do tribunal | Usurpação: investigação/processo contra autoridade com **foro por prerrogativa** conduzido no 1º grau; instância inferior que avoca o que é do STJ/STF |
| **II** | **Garantir a autoridade das decisões** do tribunal | A porta clássica da defesa: decisão do STF/STJ **no processo do próprio reclamante** (HC, RHC, REsp, ARE) descumprida ou esvaziada. Decisão em processo subjetivo vincula **inter partes**: quem não foi parte nem beneficiário não reclama por ela (a "transcendência dos motivos determinantes" é rejeitada — confirme o estado atual via agente `jurisprudencia-stj-stf`) |
| **III** | Garantir a observância de **súmula vinculante** e de **decisão do STF em controle concentrado** (ADI, ADC, ADPF) | Eficácia **erga omnes**: qualquer atingido reclama, **sem exigência de esgotamento**. Inclui tanto a **não aplicação** quanto a **aplicação indevida** da tese (art. 988, § 4º) |
| **IV** | Garantir a observância de acórdão de **IRDR** ou **IAC** | Raro no crime, mas possível (IAC do STJ em matéria penal/execução) |

**Repercussão geral e recursos repetitivos:** acórdão de RE com RG reconhecida ou de RE/REsp **repetitivos** só sustenta Rcl **depois de esgotadas as instâncias ordinárias** (art. 988, § 5º, II) — e a leitura de STF e STJ sobre o alcance desse esgotamento é **restritiva e oscilante** (há orientação exigindo o exaurimento até o agravo interno na origem). Pior: no **STJ** há orientação de Corte Especial no sentido do **próprio descabimento** da Rcl para controlar a aplicação de tese de repetitivo, mesmo após o esgotamento. Antes de propor Rcl por tema de RG/repetitivo, **pesquise o estado atual via agente `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** o que não confirmar — e tenha pronta a via recursal alternativa.

### Requisitos de admissibilidade

| Requisito | Conteúdo | Armadilha correspondente |
|---|---|---|
| **Ato concreto e ainda eficaz** | Decisão judicial ou ato administrativo identificado e provado | **Trânsito em julgado** da decisão reclamada = inadmissível (art. 988, § 5º, I; **Súmula 734/STF**). A Rcl não tem prazo, mas o trânsito a fulmina |
| **Aderência estrita** | Correspondência objetiva entre o **ato reclamado** e o **paradigma** (mesma questão, mesma moldura) | Paradigma genérico, "jurisprudência dominante" ou precedente **não vinculante** de turma não abrem a via — é o erro que mais mata Rcl |
| **Prova documental** | Petição instruída desde logo com o paradigma e o ato reclamado (art. 988, § 2º) | Não há dilação probatória: o que não estiver anexado não existe |
| **Legitimidade** | Parte interessada ou MP (art. 988, *caput*) | Inciso II pressupõe ter sido **parte/beneficiário** da decisão paradigma |
| **Não ser sucedâneo recursal** | A Rcl corrige **desobediência a paradigma vinculante**, não erro de julgamento comum | Injustiça da decisão sem paradigma violado = via recursal, não Rcl |
| **Convivência com recursos** | Pode ser proposta **sem prejuízo** dos recursos cabíveis (Lei 11.417, art. 7º; CPC, art. 988, § 6º) | O recurso paralelo não prejudica a Rcl — mas nenhum dos dois supre o outro: avalie a **dupla via** |

### A escolha do tribunal segue o paradigma

O julgamento compete ao órgão **cuja competência se busca preservar ou cuja autoridade se pretende garantir** (art. 988, § 1º): paradigma do **STF** (SV, controle concentrado, decisão do STF no caso, RG esgotada) → **Rcl no STF**; paradigma do **STJ** (decisão do STJ no caso, competência do STJ usurpada; tema repetitivo esgotado — **cabimento controvertido, confira antes**) → **Rcl no STJ**. Sempre que possível, a Rcl é distribuída ao **relator do processo principal** (art. 988, § 3º) — indique o processo de origem na inicial para ativar a prevenção.

## Estrutura forense da peça — petição inicial com pedido liminar

```
EXCELENTÍSSIMO SENHOR MINISTRO PRESIDENTE DO SUPREMO TRIBUNAL FEDERAL
[ou: DO SUPERIOR TRIBUNAL DE JUSTIÇA — conforme o paradigma]

RECLAMAÇÃO CONSTITUCIONAL, com pedido de liminar
(indicar o paradigma e o processo de origem para fins de prevenção — art. 988, § 3º, CPC)

RECLAMANTE: [nome, qualificação — réu/investigado/apenado], por seu(sua)
advogado(a) (procuração anexa — a Rcl exige capacidade postulatória)
AUTORIDADE RECLAMADA: [Juízo da ...ª Vara Criminal de ... / ...ª Câmara
Criminal do TJ... / autoridade administrativa que praticou o ato]
BENEFICIÁRIO DA DECISÃO IMPUGNADA: [se houver — ex.: o Ministério Público]

I — DO CABIMENTO
Porta do art. 988 invocada (I, II, III ou IV) + fundamento constitucional
(art. 102, I, "l" / 103-A, § 3º / 105, I, "f", CF). Se o paradigma for tema
de RG/repetitivo: demonstrar o ESGOTAMENTO das instâncias ordinárias
(art. 988, § 5º, II). Se ato omissivo da administração contra SV:
esgotamento administrativo (Lei 11.417/2006, art. 7º, § 1º).

II — DOS FATOS
Três tempos, nesta ordem: (1) o PARADIGMA — o que o STF/STJ decidiu, em
que processo, com que comando; (2) o ATO RECLAMADO — o que a autoridade
fez/deixou de fazer, quando, com que fundamento (doc.); (3) o CONFRONTO —
por que o ato nega, esvazia ou aplica mal o paradigma.

III — DO DIREITO — DA ADERÊNCIA ESTRITA
Cotejo lado a lado: trecho dispositivo do paradigma × trecho do ato
reclamado, com demonstração da identidade da questão. Paradigmas e seu
estado atual: pesquise via agente jurisprudencia-stj-stf e marque
[NÃO VERIFICADO] o que não confirmar — nunca de memória.

IV — DA LIMINAR (art. 989, II, CPC)
Fumus: paradigma vinculante + prova documental do descumprimento.
Periculum: dano irreparável concreto (paciente preso após ordem de
soltura, custódia sem audiência, ato processual iminente perante juízo
incompetente). Pedido cirúrgico: SUSPENSÃO do processo ou do ato
reclamado e/ou provimento urgente específico (ex.: expedição imediata
de alvará de soltura).

V — DOS PEDIDOS
a) liminarmente, a suspensão do ato/processo reclamado (art. 989, II) e
   [provimento urgente específico];
b) a requisição de informações à autoridade reclamada — prazo de 10 dias
   (art. 989, I);
c) a citação do beneficiário da decisão impugnada para contestar em 15
   dias (art. 989, III);
d) a vista ao Ministério Público — no STF, à PGR (art. 991);
e) no mérito, a PROCEDÊNCIA, com a CASSAÇÃO do ato reclamado e a
   determinação da medida adequada à solução da controvérsia (art. 992)
   [na SV: anulação do ato administrativo ou cassação da decisão, com
   determinação de que outra seja proferida — CF, art. 103-A, § 3º];
f) o imediato cumprimento da decisão, lavrando-se o acórdão após
   (art. 993);
g) subsidiariamente, estando em jogo a liberdade, a concessão de
   HABEAS CORPUS DE OFÍCIO (art. 654, § 2º, CPP).

Termos em que pede deferimento.
[LOCAL], [DATA]. [ADVOGADO(A)] — OAB/[UF] nº [Nº]
```

**Documentos essenciais:** procuração; cópia integral do **paradigma** (acórdão/decisão, certidão de julgamento); cópia integral do **ato reclamado**; certidão de que a decisão reclamada **não transitou em julgado**; se RG/repetitivo, prova do **esgotamento** (certidões das decisões na origem); se omissão administrativa em SV, prova do esgotamento administrativo.

## Teses típicas da prática criminal

- **Ordem de soltura descumprida ou esvaziada** — o juízo não expede o alvará, retarda o cumprimento ou **reedita a prisão com os mesmos fundamentos já censurados** pelo STJ/STF no HC do próprio paciente (art. 988, II). Fronteira decisiva: se o novo decreto traz **fundamentos novos**, o ato é outro — a via é **novo HC** (ver skill `hc-tribunais-superiores`); se **reproduz** o que foi cassado, é Rcl.
- **Audiência de custódia não realizada** — descumprimento da decisão do STF na **ADPF 347** (precedente notório sobre o sistema prisional; controle concentrado → art. 988, III, sem esgotamento). Confirme o estado atual dos comandos via agente `jurisprudencia-stj-stf` antes de transcrever.
- **Juiz das garantias descumprido** — inobservância das regras fixadas pelo STF no julgamento das **ADIs do juiz das garantias** (Lei 13.964/2019): identifique o paradigma exato e seus marcos de eficácia via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** o que não confirmar.
- **Súmulas vinculantes penais** (art. 988, III — confira o teor vigente via `lei-e-sumula` antes de transcrever): **SV 11** (algemas sem justificativa escrita), **SV 14** (acesso aos autos — Rcl detalhada na skill `acesso-autos-investigacao`), **SV 24** (crime tributário material antes do lançamento definitivo), **SV 26** (progressão em crimes hediondos), **SV 45** (competência do júri × prerrogativa de constituição estadual), **SV 56** (falta de vaga não autoriza regime mais gravoso — execução penal).
- **Tese de repetitivo/RG negada na origem** (dosimetria, tráfico privilegiado, marcos de execução) — somente **após o esgotamento** (art. 988, § 5º, II) e, no STJ, com o alerta de descabimento acima; identifique o número do tema e o estado da tese via `jurisprudencia-stj-stf`.
- **Usurpação de competência** (art. 988, I) — investigação contra detentor de foro por prerrogativa tocada no 1º grau sem supervisão do tribunal competente; juízo que retém feito da competência originária do STJ/STF.

## Erros comuns e pegadinhas

- **Usar a Rcl como sucedâneo recursal**: apontar "injustiça" ou má aplicação de jurisprudência **não vinculante** — inclusive **súmula comum (não vinculante) do STF/STJ**, que não abre nenhuma porta do art. 988. Sem porta de cabimento, a Rcl morre liminarmente — a via é o recurso próprio (REsp, RHC, agravo).
- **Reclamar após o trânsito em julgado** do ato reclamado (art. 988, § 5º, I; **Súmula 734/STF**): a Rcl não tem prazo, mas o trânsito a inviabiliza — monitore a certidão e, se preciso, ajuíze **antes** de esgotar recursos meramente protelatórios; após o trânsito, a via residual é a **revisão criminal** (quando couber).
- **Pular o esgotamento** das instâncias ordinárias em Rcl por tema de RG/repetitivo (art. 988, § 5º, II) — inclusive **agravo interno pendente** na origem já derruba a admissibilidade nas leituras mais restritivas; e no **STJ** verifique antes se a Rcl por tema repetitivo é sequer admitida (ver seção de cabimento).
- **Falta de aderência estrita**: colar ementa do paradigma sem cotejo com o ato reclamado; invocar tese vinculante sobre moldura fática diversa. Demonstre a identidade **ponto a ponto** (a disciplina é a mesma da BP `verificacao-citacoes`).
- **Reclamar por decisão de processo subjetivo alheio** (art. 988, II sem ter sido parte): efeito inter partes não aproveita a terceiros — para tese geral, procure a porta III (SV/controle concentrado) ou o tema qualificado (com esgotamento).
- **Omissão administrativa em SV sem esgotamento administrativo** (Lei 11.417/2006, art. 7º, § 1º): reitere, protocole e esgote antes de reclamar.
- **Errar o tribunal**: paradigma do STJ reclamado no STF (ou vice-versa) = não conhecimento. O paradigma define a casa (art. 988, § 1º); não há fungibilidade garantida.
- **Não indicar o processo de origem**: perde-se a distribuição por prevenção ao relator do paradigma (art. 988, § 3º) — e a Rcl ganha relator sem memória do caso.
- **Pedir reforma em vez de cassação**: a Rcl desfaz o ato e determina outro conforme o paradigma (art. 992); pedido de rejulgamento do mérito pelo próprio tribunal superior desborda do objeto.
- **Liminar genérica**: sem periculum individualizado (dias de prisão indevida, ato iminente) e sem dizer **qual** provimento urgente se quer, a liminar não sai.
- **Esquecer o pedido subsidiário de HC de ofício** quando a liberdade está em jogo: mesmo não conhecida a Rcl, a ilegalidade flagrante pode ser corrigida de ofício (art. 654, § 2º, CPP) — deixe a porta aberta.
- **Prova documental incompleta**: sem a íntegra do paradigma **e** do ato reclamado, o relator não afere a aderência de plano — indeferimento liminar.
- **Presumir gratuidade**: diferente do HC, a Rcl pode exigir custas — confira a tabela vigente do STF/STJ antes de protocolar.
- **Citar julgado de memória**: paradigmas, temas e o estado atual das orientações **sempre** via agente `jurisprudencia-stj-stf`, com validação pelo `verificador-citacoes`; o que não confirmar recebe **[NÃO VERIFICADO]** ou sai da peça.

## Checklist final

- [ ] Porta do art. 988 identificada (I, II, III ou IV) e declarada no cabimento?
- [ ] Tribunal correto conforme o **paradigma** (STF × STJ — art. 988, § 1º)?
- [ ] Paradigma vinculante **pesquisado via `jurisprudencia-stj-stf`** e validado pelo `verificador-citacoes` (nada de memória)?
- [ ] **Aderência estrita** demonstrada com cotejo paradigma × ato reclamado?
- [ ] Ato reclamado **ainda eficaz** — sem trânsito em julgado (S. 734; art. 988, § 5º, I)?
- [ ] Se RG/repetitivo: **esgotamento das instâncias ordinárias** provado (art. 988, § 5º, II) e, no STJ, **cabimento confirmado** via `jurisprudencia-stj-stf`?
- [ ] Se omissão administrativa em SV: **esgotamento administrativo** provado (Lei 11.417, art. 7º, § 1º)?
- [ ] Se art. 988, II: reclamante foi **parte/beneficiário** da decisão paradigma?
- [ ] **Prova documental completa** (paradigma + ato reclamado + certidões) anexada?
- [ ] Processo de origem indicado para **prevenção** ao relator (art. 988, § 3º)?
- [ ] Liminar com fumus/periculum concretos e provimento urgente **específico** (art. 989, II)?
- [ ] Pedidos completos: liminar → informações (10 dias) → citação do beneficiário (15 dias) → MP/PGR → **cassação + medida adequada** → cumprimento imediato?
- [ ] Pedido subsidiário de **HC de ofício** (art. 654, § 2º, CPP) quando houver reflexo na liberdade?
- [ ] Avaliada a **dupla via** (recurso paralelo não prejudica a Rcl — art. 988, § 6º) e descartado o uso como sucedâneo recursal?
- [ ] Custas conferidas na tabela vigente do tribunal?

## Apoie-se em

- **Agente `jurisprudencia-stj-stf`** — identificação do **paradigma vinculante violado** (decisão no caso, SV, controle concentrado, tema de RG/repetitivo) e do estado atual das orientações sobre esgotamento e cabimento.
- **Agente `lei-e-sumula`** — conferência do teor vigente das súmulas vinculantes, dos arts. 988-993 do CPC e dos regimentos internos antes de transcrever qualquer dispositivo.
- **Best-practice `verificacao-citacoes`** — Citation Gate obrigatório e a régua da **aderência estrita ao precedente**: nenhum paradigma citado sem confirmação; pendências marcadas **[NÃO VERIFICADO]**.
- **Best-practice `peticao-criminal`** — forma, formatação e tom da petição criminal.
- **Agente `verificador-citacoes`** — validação final de toda citação que entrar na peça.
- **Skill `acesso-autos-investigacao`** — a Rcl específica por descumprimento da **SV 14** (acesso aos autos), com o requerimento prévio e a prova da negativa; esta skill traz o instituto geral que a sustenta.
- **Skill `hc-tribunais-superiores`** — a via paralela quando o ato é **coação nova** (fundamentos novos) e não mera desobediência ao paradigma; consulte-a antes de escolher entre Rcl e novo HC.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
