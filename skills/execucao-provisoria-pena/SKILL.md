---
name: execucao-provisoria-pena
description: >-
  Use ao elaborar pedido de expedição de guia de execução provisória (guia de recolhimento
  provisória) para preso cautelar com condenação recorrível, e a fruição antecipada de benefícios da
  execução — progressão de regime e livramento condicional ANTES do trânsito em julgado (Súmulas 716
  e 717 do STF; Res. CNJ 417/2021). Gatilhos: execução provisória da pena, guia provisória, guia de
  recolhimento provisória, preso preventivo… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-provisoria-pena"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-provisoria-pena", "execucao provisoria", "provisoria pena"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Execução Provisória da Pena (guia provisória e benefícios antes do trânsito)

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

Esta skill orienta a elaboração do **pedido de expedição de guia de execução provisória** para o **preso cautelar já condenado por sentença recorrível**, e a subsequente **fruição antecipada dos benefícios da execução** (progressão de regime, livramento condicional) antes do trânsito em julgado, com apoio nas **Súmulas 716 e 717 do STF** e na **Resolução CNJ 417/2021**. Entregável típico: **petição de expedição da guia + checklist de documentos** que a instruem.

> **Lição central:** sem a guia provisória, o preso preventivo condenado vive num **limbo** — cumpre pena de fato (a prisão cautelar conta como pena, por detração — art. 42 do CP) mas **não acessa nenhum instituto da execução**: não progride, não remite, não obtém livramento. A guia é a **porta de entrada** do sistema; todo o restante (progressão, unificação, remição) pressupõe a execução autuada. É exatamente essa a lacuna que esta skill fecha: as demais skills de execução penal **pressupõem a guia já expedida**.

> **Cautela de citação (obrigatória):** as Súmulas 716/717 do STF e os artigos da LEP/CP/CPP citados aqui são consolidados. Já o **texto interno da Res. CNJ 417/2021** (artigos, prazos e rol documental exato) deve ser conferido via agente `lei-e-sumula` antes de citado na peça — não afirme número de artigo da Resolução de memória. Precedentes atuais: pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque **[NÃO VERIFICADO]** o que não confirmar.

## O instituto — e o que ele NÃO é

**É:** a formalização, perante o juízo da execução, do cumprimento de pena por quem está **preso cautelarmente** (flagrante convertido, preventiva) e já foi **condenado**, ainda que a condenação penda de recurso. Como o tempo de prisão provisória será integralmente descontado da pena (detração — art. 42 do CP), o condenado preso tem **direito subjetivo** a que esse tempo produza desde logo os efeitos da execução: progressão, remição, livramento.

**NÃO é:** a "execução provisória da pena" **contra o réu solto** — a antecipação do cumprimento após condenação em 2ª instância. Essa foi vedada pelo STF no julgamento das **ADCs 43, 44 e 54 (Pleno, 2019)**: a pena só se executa após o trânsito em julgado (CPP, art. 283). A execução provisória desta skill opera **em favor do réu** (*in bonam partem*): quem já está preso não pode ficar em situação pior do que ficaria se a condenação fosse definitiva.

**Linha do tempo:** as Súmulas 716 e 717 do STF (2003) consagraram a progressão antes do trânsito; a LEP já mandava aplicar seus institutos ao preso provisório (art. 2º, parágrafo único); o CNJ padronizou a expedição da guia (Res. 113/2010, depois consolidada na **Res. 417/2021**), tornando-a **dever de ofício** do juízo da condenação.

## Base legal

- **Súmula 716/STF** — admite-se a progressão de regime, ou a aplicação imediata de regime menos severo, **antes do trânsito em julgado** da sentença condenatória.
- **Súmula 717/STF** — a prisão especial não impede a progressão de regime fixada em sentença não transitada em julgado.
- **Art. 2º, parágrafo único, da LEP** — a Lei de Execução Penal aplica-se **igualmente ao preso provisório**.
- **Art. 42 do CP** — detração: computa-se na pena o tempo de prisão provisória.
- **Art. 387, §2º, do CPP** — o juiz da condenação considera a detração para fixar o **regime inicial**.
- **Art. 66 da LEP** — competência do **juízo da execução** para decidir progressão, livramento, detração e demais incidentes.
- **Súmula 192/STJ** — compete ao juízo das execuções do **Estado** a execução das penas de sentenciados da Justiça Federal, Militar ou Eleitoral recolhidos a estabelecimentos estaduais.
- **Res. CNJ 417/2021** — disciplina a expedição da guia de recolhimento (definitiva e provisória) e os documentos que a instruem (conferir o rol exato via `lei-e-sumula`).
- **Art. 147 da LEP** — pena **restritiva de direitos** só se executa após o trânsito em julgado (limite do instituto — ver pegadinhas).

## Cabimento e requisitos

| Situação | Cabe guia provisória? | Observação |
|----------|----------------------|------------|
| Preso cautelar + sentença condenatória recorrível (recurso da defesa) | **SIM** | Caso clássico. A pena não pode aumentar (*ne reformatio in pejus*, CPP art. 617) — cálculo seguro |
| Preso cautelar + recurso exclusivo da acusação | **SIM** | Benefícios calculados sobre a pena imposta; se o recurso acusatório buscar aumento, o cálculo fica sujeito a readequação |
| Preso cautelar + recursos de ambas as partes | **SIM** | Idem: executa-se sobre a pena atual, com ressalva de recálculo |
| Réu **solto** condenado, pendente recurso | **NÃO** | Não há pena em curso a executar (ADCs 43/44/54; CPP art. 283) |
| Condenado pelo **Tribunal do Júri**, preso por execução imediata (art. 492, I, "e", CPP) | **SIM** | Preso por força da condenação do júri também depende da guia provisória; confira o estágio atual da constitucionalidade da execução imediata via `jurisprudencia-stj-stf` [NÃO VERIFICADO] |
| Condenado a pena **restritiva de direitos** ou só multa | **NÃO** | Art. 147 da LEP: PRD exige trânsito em julgado |
| Preso por **outro processo** (cautelar diversa da condenação) | Depende | A detração exige nexo — pesquise o entendimento atual via `jurisprudencia-stj-stf` (marque [NÃO VERIFICADO] se não confirmar) |

**Requisitos práticos:** (1) prisão cautelar em curso vinculada ao processo; (2) sentença ou acórdão condenatório a **pena privativa de liberdade**, ainda que recorrível; (3) inexistência de guia já expedida (conferir no sistema — às vezes ela existe e o problema é outro).

## O fluxo em duas etapas — quem faz o quê

**A pegadinha número um do instituto é de endereçamento.** São dois juízos e duas petições distintas:

```
ETAPA 1 — Expedição da guia
  Peticionário → JUÍZO DA CONDENAÇÃO (vara criminal de origem;
                 se os autos estiverem no tribunal, o próprio
                 tribunal/relator determina a expedição)
  Pedido: expedir a guia de recolhimento PROVISÓRIA e remetê-la
          ao juízo da execução competente (o do local do
          recolhimento — art. 66 LEP; Súmula 192/STJ)

ETAPA 2 — Benefícios (após autuada a execução provisória)
  Peticionário → JUÍZO DA EXECUÇÃO PENAL
  Pedidos: cálculo de liquidação com detração (art. 42 CP),
           progressão (ver skill execucao-progressao-regime),
           livramento, remição etc.
```

A expedição da guia é **dever de ofício** do juízo da condenação (Res. CNJ 417/2021) tão logo proferida a sentença condenatória de réu preso — mas, na prática, frequentemente **não acontece sem provocação**. Daí a petição desta skill.

## Estrutura forense da peça (Etapa 1 — pedido de expedição)

1. **Endereçamento** — ao juízo da **condenação** (vara criminal de origem). Se os autos subiram em apelação, endereçar ao **relator** no tribunal (ou peticionar na origem pedindo comunicação). Nunca à VEP — ela não expede guia de processo que não é seu.
2. **Qualificação** — nome do réu, número do processo de conhecimento, situação prisional (local de recolhimento, data da prisão) e fase recursal (quem recorreu e de quê).
3. **Fundamentos** —
   a) **dos fatos:** prisão cautelar desde [data]; condenação a [pena] em [data]; recurso pendente; guia não expedida;
   b) **do direito:** art. 2º, parágrafo único, da LEP + Súmulas 716/717 do STF (direito aos institutos da execução antes do trânsito); Res. CNJ 417/2021 (dever de expedição); art. 42 do CP e art. 387, §2º, do CPP (detração); art. 66 da LEP e Súmula 192/STJ (juízo destinatário);
   c) **do prejuízo concreto:** demonstrar que o lapso de progressão já foi (ou está prestes a ser) atingido — o que transforma a omissão em constrangimento ilegal. Para o percentual e o cálculo, ver a skill `execucao-progressao-regime`; para a soma de penas de múltiplas condenações, ver `execucao-unificacao-penas`.
4. **Pedidos** — expedição imediata da guia provisória; remessa ao juízo da execução do local do recolhimento; consignação das datas de prisão para fins de detração; juntada dos documentos.

## Modelo de petição (Etapa 1)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [Nª] VARA CRIMINAL DA COMARCA
DE [COMARCA]

Autos nº [Nº DO PROCESSO DE CONHECIMENTO]


[NOME DO RÉU], já qualificado nos autos em epígrafe, por seu advogado que esta
subscreve (procuração anexa), vem, respeitosamente, à presença de Vossa
Excelência, com fundamento no art. 2º, parágrafo único, da Lei de Execução
Penal, nas Súmulas 716 e 717 do Supremo Tribunal Federal e na Resolução CNJ
nº 417/2021, requerer a

EXPEDIÇÃO DE GUIA DE RECOLHIMENTO PROVISÓRIA

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O requerente encontra-se preso cautelarmente desde [DATA DA PRISÃO], recolhido
em [ESTABELECIMENTO/COMARCA]. Em [DATA DA SENTENÇA], sobreveio sentença
condenatória à pena de [PENA] de reclusão, em regime inicial [REGIME], pela
prática do crime de [CRIME]. A condenação pende de [RECURSO — ex.: apelação
da defesa / recurso exclusivo da acusação].

Até a presente data, não foi expedida a guia de recolhimento provisória, de
modo que o requerente cumpre pena de fato sem acesso a qualquer instituto da
execução penal.


II — DO DIREITO

A Lei de Execução Penal aplica-se igualmente ao preso provisório (art. 2º,
parágrafo único). As Súmulas 716 e 717 do STF asseguram a progressão de
regime e a aplicação de regime menos severo antes do trânsito em julgado da
condenação. A Resolução CNJ nº 417/2021 impõe ao juízo da condenação o dever
de expedir a guia de recolhimento provisória do réu preso, com remessa ao
juízo da execução competente (art. 66 da LEP; Súmula 192/STJ).

O tempo de prisão cautelar computa-se na pena por detração (art. 42 do CP;
art. 387, §2º, do CPP). Considerada a prisão desde [DATA DA PRISÃO], o
requerente [já atingiu / atingirá em (DATA)] o lapso objetivo para a
progressão de regime, conforme demonstrativo anexo, de modo que a omissão na
expedição da guia lhe impõe constrangimento ilegal concreto.

[Se recurso exclusivo da acusação: ressalvar que os benefícios serão
calculados sobre a pena imposta, sujeitos a readequação.]
[Precedente atual sobre a demora na expedição da guia como constrangimento
ilegal: pesquise via agente jurisprudencia-stj-stf e verifique com
verificador-citacoes; marque [NÃO VERIFICADO] o que não confirmar.]


III — DOS PEDIDOS

Diante do exposto, requer:

a) a EXPEDIÇÃO IMEDIATA da guia de recolhimento provisória, instruída com os
   documentos exigidos pela Resolução CNJ nº 417/2021;
b) a remessa da guia ao Juízo da Execução Penal de [COMARCA DO RECOLHIMENTO],
   competente na forma do art. 66 da LEP [e da Súmula 192/STJ, se condenação
   federal/militar/eleitoral com recolhimento estadual];
c) a consignação, na guia, das datas de prisão e soltura, para fins de
   detração (art. 42 do CP);
d) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DO PROCESSO], [NOME DO RÉU], [DATA DA PRISÃO], [ESTABELECIMENTO], [DATA DA SENTENÇA], [PENA], [REGIME], [CRIME], [RECURSO], [COMARCA DO RECOLHIMENTO], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Checklist de documentos da guia (entregável nº 2)

Rol prático dos documentos que instruem a guia provisória — **confira o rol exato e vigente da Res. CNJ 417/2021 via agente `lei-e-sumula`** antes de fechar a peça:

- [ ] Qualificação completa do condenado (com documento de identificação, se houver)
- [ ] Cópia da denúncia (ou queixa) e de eventual aditamento
- [ ] Cópia da sentença condenatória e, se houver, do acórdão
- [ ] Certidão/informação das **datas de prisão e de soltura** (base da detração)
- [ ] Informação sobre os **recursos pendentes** e quem recorreu
- [ ] Cálculo/atestado de pena a cumprir (demonstrativo de liquidação)
- [ ] Folha de antecedentes / certidão de outras execuções (para futura unificação — ver `execucao-unificacao-penas`)
- [ ] Indicação do estabelecimento de recolhimento atual

Para o **cálculo da detração e da data de progressão** que instruem o item "prejuízo concreto", acione o agente `dosimetria-pena` e a skill `execucao-progressao-regime`.

## Teses típicas da prática (defesa)

1. **Direito subjetivo à guia** — a expedição é dever de ofício (Res. CNJ 417/2021); a omissão gera constrangimento ilegal, sobretudo quando o lapso de progressão já foi atingido.
2. **Progressão antes do trânsito** — Súmulas 716/717 do STF: pendência de recurso não obsta a progressão nem a aplicação imediata de regime menos severo fixado na sentença.
3. **Detração como acelerador** — o *dies a quo* do lapso é a **prisão cautelar** (art. 42 do CP), não a sentença nem o trânsito; se o juiz já aplicou o art. 387, §2º, do CPP, o regime inicial pode até já ser o semiaberto/aberto. O art. 42 do CP abrange também a **internação** cautelar; para prisão **domiciliar** e monitoração eletrônica, pesquise o entendimento atual via `jurisprudencia-stj-stf` [NÃO VERIFICADO].
4. **Regime da sentença sem vaga** — expedida a guia e fixado regime menos severo, a falta de vaga não autoriza manter o preso em regime mais gravoso (SV 56 — desdobramentos na skill `execucao-progressao-regime`).
5. **Recurso exclusivo da acusação não impede** — executa-se sobre a pena imposta, com ressalva de readequação; a pendência não pode ser usada para negar a guia.
6. **Demora na expedição → HC** — persistindo a inércia após a petição, impetrar habeas corpus por excesso de prazo/constrangimento ilegal (pesquise precedente atual via `jurisprudencia-stj-stf`; verifique com `verificador-citacoes`).

## Erros comuns e pegadinhas

- **Endereçamento invertido:** pedir a guia à VEP (que não a expede) ou pedir progressão ao juízo da condenação (que não a defere). Etapa 1 → condenação; Etapa 2 → execução.
- **Esperar o trânsito em julgado** para "começar a execução" — é exatamente o que as Súmulas 716/717 dispensam; cada dia de espera é lapso desperdiçado.
- **Confundir os institutos:** invocar ADCs 43/44/54 **contra** o pedido é erro do juízo, não fundamento — aquelas vedam execução provisória *in malam partem* (réu solto); aqui a execução é *in bonam partem* (réu preso).
- **Réu solto:** não cabe guia provisória — sem prisão, não há pena em curso; o caminho é outro (aguardar trânsito ou discutir a própria prisão).
- **Pena restritiva de direitos:** não se executa provisoriamente (art. 147 da LEP) — não peça guia provisória de PRD.
- **Esquecer o demonstrativo de cálculo:** pedido de guia sem mostrar o prejuízo concreto (lapso atingido) perde força e urgência.
- **Datas de prisão incompletas na guia:** períodos de prisão não consignados somem da detração — confira soltura/reprisão intercorrentes antes de protocolar.
- **Deixar o pedido "dentro" da apelação:** o pleito deve ser **petição avulsa** nos autos (ou dirigida ao relator), com tramitação própria — embutido nas razões recursais, tende a só ser apreciado no julgamento.
- **Não conferir se a guia já existe:** às vezes ela foi expedida e o problema é a falta de cálculo ou de atualização na VEP — o pedido muda de natureza (Etapa 2).
- **Recurso errado contra o indeferimento:** decisão do **juízo da execução** (negando benefício/cálculo) desafia **agravo em execução em 5 dias** (Súmula 700/STF; skill `agravo-em-execucao`) — prazo curtíssimo, não confundir com apelação. Já a **inércia/negativa do juízo da condenação** em expedir a guia ataca-se por **HC** (skill `habeas-corpus`).

## Checklist final e anti-padrões

- [ ] Réu está **preso cautelarmente** e vinculado ao processo da condenação?
- [ ] Condenação é a **pena privativa de liberdade** (não PRD/multa — art. 147 LEP)?
- [ ] Petição endereçada ao **juízo da condenação** (ou relator, se autos no tribunal)?
- [ ] Datas de prisão/soltura levantadas e demonstrativo de detração anexado (art. 42 CP)?
- [ ] Lapso de progressão calculado (skill `execucao-progressao-regime`) para demonstrar prejuízo concreto?
- [ ] Rol documental da Res. CNJ 417/2021 conferido via `lei-e-sumula`?
- [ ] Precedentes citados pesquisados via `jurisprudencia-stj-stf` e validados por `verificador-citacoes`?
- [ ] Prazos de acompanhamento registrados (BP `gestao-prazos-processuais`) — a guia costuma exigir cobrança?

**Anti-padrões (evitar):**
- Tratar a guia provisória como "favor" do juízo — é dever de ofício e direito subjetivo do preso.
- Citar artigo interno da Res. CNJ 417/2021 de memória, sem conferir a redação vigente.
- Pedir, na mesma petição ao juízo da condenação, a própria progressão (competência da execução — art. 66 LEP).
- Calcular o lapso a partir da sentença, ignorando a detração da prisão cautelar.
- Inventar número de HC/REsp para sustentar a urgência — use a instrução de pesquisa e o Citation Gate.

## Apoie-se em

- **Skill `execucao-progressao-regime`** — requisitos, percentuais do art. 112 da LEP e cálculo do lapso (Etapa 2, após a guia). Esta skill **complementa** aquela: aqui se abre a porta; lá se pede o benefício.
- **Skill `execucao-unificacao-penas`** — soma/unificação quando houver múltiplas condenações a consolidar na execução provisória.
- **Agente `dosimetria-pena`** — cálculo da detração (art. 42 CP) e do demonstrativo de pena a cumprir.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes atuais (demora na guia, detração em processo diverso); nada entra na peça sem passar pelo **`verificador-citacoes`**.
- **Agente `lei-e-sumula`** — conferência da redação vigente da Res. CNJ 417/2021 e do rol documental da guia.
- **Squad `execucao-penal`** — pipeline completo da execução; esta skill é o passo zero que habilita os demais outputs do squad.
- **BP `peticao-criminal`** — padrão de estrutura, tom e formatação da petição.
- **BP `gestao-prazos-processuais`** — controle da data-alvo de progressão e cobrança da expedição da guia.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
