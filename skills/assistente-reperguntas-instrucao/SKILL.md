---
name: assistente-reperguntas-instrucao
description: >-
  Use ao planejar a atuação do ASSISTENTE DE ACUSAÇÃO na instrução criminal (AIJ) — requerer meios
  de prova (art. 271 CPP, ouvido o MP), formular reperguntas às testemunhas SEMPRE APÓS o Ministério
  Público (art. 212 CPP), consignar protestos e reagir ao indeferimento, respeitando o ônus de
  comparecimento do art. 271, §2º (o processo segue sem nova intimação do faltoso). Gatilhos:
  assistente de acusação, reperguntas do… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, acusacao, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-reperguntas-instrucao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-reperguntas-instrucao", "assistente reperguntas", "reperguntas instrucao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Reperguntas e Requerimentos Probatórios do Assistente na Instrução (arts. 271 e 212 do CPP)

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

Esta skill orienta o **roteiro operacional de audiência do ASSISTENTE DE ACUSAÇÃO**: como requerer meios de prova, formular reperguntas às testemunhas e consignar protestos na Audiência de Instrução e Julgamento (AIJ), respeitando as regras específicas do polo do ofendido/querelante habilitado. Não trata dos poderes genéricos do assistente (isso é `assistente-acusacao`), mas do **como fazer** dentro da sala de audiência.

> **⚠️ SKILL DO POLO ACUSATÓRIO.** Esta skill é do **assistente de acusação** — o ofendido, seu representante legal ou sucessores (art. 268 CPP) habilitados **ao lado do Ministério Público** na ação penal pública. **Só se aplica a quem atua na acusação.** O chefe-roteador deve **conferir o polo do usuário** (perfil da instituição em `_memory/company.md`) antes de sugeri-la: para a **defesa**, use `audiencia-inquiricao-testemunhas` e `preparacao-audiencia`; para o **MP titular**, a proposição de prova é direta, sem a submissão do art. 271, §1º.

> **Lição central:** a posição do assistente na instrução é **subordinada e sucessiva**. Ele **propõe** prova (não a determina), sempre **ouvido o MP** (art. 271, §1º), e repergunta **sempre depois** do Ministério Público (a acusação pública tem precedência). O erro mais comum é o assistente tentar assumir o protagonismo da acusação — o papel é de **reforço**, não de substituição.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 271, 212 e 473 do CPP na fonte oficial antes de fundamentar. A ordem direta de inquirição do art. 212 (partes primeiro, juiz por último e só para complementar) decorre da **Lei 11.690/2008**; citar o regime anterior (juiz inquirindo primeiro) é erro grave de vigência. Toda súmula, tema ou precedente passa pela skill `jurisprudencia-stj-stf` (ou pela best-practice `verificacao-citacoes`) antes do uso.

## Quem é o assistente e quando entra

- **Legitimados (art. 268 CPP):** o **ofendido**, seu representante legal ou, na falta, o cônjuge, ascendente, descendente ou irmão (art. 31 CPP). Habilita-se **apenas na ação penal pública** — na ação penal privada o ofendido já é o querelante.
- **Momento de admissão (art. 269 CPP):** a assistência é admitida **enquanto não passar em julgado a sentença** e o assistente **recebe a causa no estado em que se achar** (não retroage — não se reabre fase preclusa por conta da habilitação tardia).
- **Ouvido o MP (art. 272 CPP):** o juiz decide o pedido de assistência **ouvido o Ministério Público**; do indeferimento **não cabe recurso** (mas admite-se mandado de segurança / correição, segundo a prática — confira via `jurisprudencia-stj-stf`).

## Base legal (dispositivos-âncora)

- **Art. 271, caput, CPP** — poderes do assistente: propor meios de prova, requerer perguntas às testemunhas, aditar libelo (revogado) e o articulado, participar do debate oral e arrazoar recursos.
- **Art. 271, §1º, CPP** — o juiz, ao admitir/atuar sobre a **proposição de prova**, decide **ouvido o Ministério Público** (submissão da iniciativa probatória do assistente ao titular da ação).
- **Art. 271, §2º, CPP** — o processo **prosseguirá independentemente de nova intimação** do assistente quando, **intimado, deixar de comparecer** a qualquer ato da instrução ou do julgamento (ônus de comparecimento; a ausência não suspende o feito).
- **Art. 212 CPP** — **inquirição direta**: as perguntas são feitas **diretamente pelas partes** à testemunha; o juiz **indefere** as impertinentes/repetidas e **complementa** ao final (parágrafo único). A **ordem** entre as partes acusatórias põe o **MP antes** do assistente.
- **Art. 402 CPP** — encerrada a instrução, as partes podem **requerer diligências** cuja necessidade se origine de circunstância ou fato apurado na audiência (ver `pedido-diligencias` — é neutro de polo e ocorre ao **fim** da AIJ).
- **Art. 473 CPP** — no **plenário do júri**, a ordem de inquirição das testemunhas segue a sequência legal (MP, assistente, querelante, defesa) e as reperguntas obedecem à mesma lógica de precedência da acusação pública.

## A ordem de inquirição — quem pergunta primeiro (decorar)

O ponto nevrálgico da skill. Na inquirição de **testemunha de acusação** (regra do art. 212, combinado com a posição do assistente):

```
1º  Quem ARROLOU / a parte ACUSADORA TITULAR → Ministério Público
2º  ASSISTENTE de acusação          → SEMPRE APÓS o MP
3º  DEFESA
   (Juiz por último, só para complementar — art. 212, parágrafo único)
```

- O **MP pergunta primeiro** (é o titular da ação penal pública). O **assistente pergunta depois** do MP — nunca antes, nunca no lugar dele. Inverter a ordem, colocando o assistente à frente do MP, é **irregularidade** que a defesa pode arguir.
- Em **testemunha de defesa**, a defesa (que arrolou) pergunta primeiro; MP e, depois, assistente reperguntam na sequência da acusação.
- No **júri em plenário (art. 473)**, a ordem legal é observada rigidamente: MP → assistente → querelante → defesa; o descumprimento gera reclamação em ata.

## Metodologia de audiência do assistente — passo a passo

### 1. Antes da AIJ (preparação)
1. **Confirmar a habilitação** e que a decisão do art. 272 (ouvido o MP) já foi proferida — sem admissão deferida, não há legitimidade para reperguntar.
2. **Alinhar com o MP** a estratégia probatória (o assistente **reforça**, não atropela). Combinar quem cobre cada ponto evita repetição — e repergunta repetida é indeferida (art. 212, parágrafo único).
3. **Propor meios de prova** por petição, **ciente de que a iniciativa é submetida ao MP** (art. 271, §1º): arrolar testemunhas ainda não ouvidas, requerer perícia complementar, juntada de documentos — sempre com **pertinência e utilidade** demonstradas.
4. **Mapear os pontos controvertidos** que o assistente quer firmar (materialidade, autoria, elemento subjetivo, qualificadoras/causas de aumento, extensão do dano para fins civis) e preparar um **roteiro de reperguntas** por testemunha.

### 2. Durante a inquirição (reperguntas)
1. **Aguardar o MP concluir** — o assistente só inicia após a acusação titular (ordem do art. 212).
2. **Formular perguntas diretamente** à testemunha (não mais "por intermédio do juiz" — art. 212 pós-Lei 11.690/08), de forma **objetiva, pertinente e não repetitiva**.
3. **Focar no que o MP não cobriu** ou no que ficou incompleto — o valor do assistente está em **complementar**, fechar lacunas e reforçar a linha acusatória.
4. **Não induzir** a testemunha nem formular pergunta capciosa/ofensiva — sujeita a indeferimento e a nota nos autos.

### 3. Diante do indeferimento (protesto)
1. Se o juiz **indeferir** repergunta (art. 212, parágrafo único) ou a **proposição de prova** (art. 271, §1º), **requerer a consignação em ata**: (a) o **teor exato** da pergunta/diligência indeferida; (b) a **razão** do indeferimento; (c) o **protesto** do assistente.
2. **A consignação é o pressuposto** de futura irresignação — sem registro em ata, a matéria **preclui**. Ata é munição.
3. Reforçar, na consignação, a **pertinência e a utilidade** do ato indeferido (por que a resposta importava ao esclarecimento dos fatos), demonstrando eventual **prejuízo** (art. 563 CPP — *pas de nullité sans grief*).

### 4. Ao encerrar a instrução
1. **Requerimento de diligências (art. 402):** se surgiu fato novo na audiência, o assistente pode requerer diligência — mas isso é regime **do art. 402, neutro de polo** (ver `pedido-diligencias`), distinto da proposição de prova do art. 271.
2. **Debates orais / memoriais:** o assistente participa do debate e pode arrazoar (art. 271, caput) — sempre **após** o MP.

## O ônus de comparecimento — art. 271, §2º (não subestimar)

> **Regra dura:** intimado, se o assistente **deixar de comparecer** a qualquer ato da instrução ou julgamento **sem motivo justificado**, o processo **prossegue sem nova intimação** dele para aquele ato. A ausência do assistente **não adia** a audiência nem suspende o feito.

- **Consequência prática:** o assistente que falta **perde a oportunidade** daquela inquirição/ato — não há repetição por conta de sua ausência.
- **Diligência do escritório:** controlar rigorosamente a agenda (skill `agenda-juridica`), confirmar intimações (DJEN — `djen-api-oficial` / `monitor-dje`) e, havendo impedimento, **peticionar justificativa antes** do ato, pedindo redesignação — sem garantia de deferimento.
- **Distinção:** a ausência do assistente é irrelevante para o prosseguimento; já a ausência do MP ou do defensor tem regime próprio (não confundir).

## Teses e contra-teses (na perspectiva do assistente)

**Teses do assistente (acusação):**
1. **Legitimidade para propor prova** (art. 271, caput): pertinência e utilidade demonstradas → a prova complementa a acusação e esclarece os fatos.
2. **Indeferimento imotivado de repergunta pertinente** = cerceamento da acusação; consignar prejuízo em ata para futura irresignação.
3. **Direito ao contraditório reforçado:** o assistente integra o polo ativo e tem interesse legítimo no esclarecimento da verdade e na eventual reparação (art. 387, IV, CPP — fixação de valor mínimo).

**Contra-teses (defesa) que o assistente deve antecipar:**
1. **Inversão da ordem** (assistente perguntando antes do MP) → nulidade/irregularidade; o assistente deve **respeitar a precedência** para não gerar vício aproveitável pela defesa.
2. **Repergunta repetitiva/impertinente** → indeferível (art. 212, parágrafo único); o assistente deve ser **cirúrgico**.
3. **Ausência de prejuízo** → sem demonstração de prejuízo concreto, o indeferimento não vicia (art. 563 CPP); por isso a consignação deve **explicitar o prejuízo**.
4. **Proposição de prova sem oitiva do MP** → o assistente não pode contornar o art. 271, §1º; a iniciativa probatória do assistente é **submetida** ao titular.

## Dispositivos e súmulas de apoio (conferir vigência via `jurisprudencia-stj-stf`)

- **Arts. 268 a 273 CPP** — regime do assistente de acusação (legitimidade, admissão, poderes, ônus).
- **Art. 212 CPP** — inquirição direta pelas partes; ordem de precedência; indeferimento das impertinentes.
- **Súmula 448/STF** — o **prazo** para o assistente que não interveio no processo interpor recurso (ex.: apelação supletiva) começa a correr **do término do prazo do MP** (relevante para a atuação recursal do assistente, complementar à instrução). **[VERIFICAR redação e alcance atuais via `jurisprudencia-stj-stf`.]**
- **Súmula 210/STF** — competência recursal em ação penal com assistente. **[NÃO VERIFICADO — conferir teor e pertinência via `jurisprudencia-stj-stf` antes de citar.]**
- **Tese sobre reperguntas por intermédio do juiz × diretas:** eventual **nulidade** por inobservância do art. 212 tende a ser tratada como **relativa**, exigindo impugnação oportuna e prejuízo. **[NÃO VERIFICADO — confirmar o entendimento atual do STJ/STF via `jurisprudencia-stj-stf`; não citar número de HC/REsp sem verificação.]**

> **Citation Gate:** os itens marcados **[NÃO VERIFICADO]** e qualquer número de acórdão, informativo ou tema **não** devem ser afirmados sem conferência na skill `jurisprudencia-stj-stf`. Prefira ensinar a tese e o dispositivo a arriscar um número de julgado. Melhor faltar precedente do que citar julgado inexistente.

## Modelo — consignação de repergunta indeferida (em ata)

```
REQUERIMENTO DE CONSIGNAÇÃO EM ATA — ASSISTENTE DE ACUSAÇÃO

O assistente de acusação, habilitado nos autos, requer a consignação em ata de que,
após a inquirição pelo Ministério Público, formulou à testemunha [NOME] a seguinte
repergunta:

"[TRANSCREVER LITERALMENTE A PERGUNTA]"

pergunta que foi INDEFERIDA por Vossa Excelência sob o fundamento de
[RAZÃO DO INDEFERIMENTO — ex.: impertinência / repetição].

O assistente, respeitosamente, PROTESTA pelo indeferimento, por entender a pergunta
pertinente e útil ao esclarecimento de [PONTO CONTROVERTIDO — ex.: elemento
subjetivo / autoria / qualificadora], cuja ausência de resposta lhe causa prejuízo
(art. 563 do CPP), requerendo o registro do protesto para os fins de direito.
```

**Campos a preencher:** [NOME] da testemunha, [PERGUNTA LITERAL], [RAZÃO DO INDEFERIMENTO], [PONTO CONTROVERTIDO].

## Modelo — proposição de meio de prova (art. 271, §1º)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [Nª] VARA CRIMINAL DA COMARCA DE
[COMARCA]

Autos nº [Nº DO PROCESSO]

[NOME DO ASSISTENTE], assistente de acusação habilitado nos autos (art. 268 do CPP),
por seu advogado (procuração anexa), vem, com fundamento no art. 271, caput e §1º,
do CPP, PROPOR a produção do(s) seguinte(s) meio(s) de prova:

[Ex.: a) oitiva da testemunha [NOME], que presenciou [FATO]; b) juntada do documento
[DESCRIÇÃO]; c) perícia complementar em [OBJETO]],

por serem pertinentes e úteis ao esclarecimento de [PONTO CONTROVERTIDO],
requerendo, ouvido o Ministério Público (art. 271, §1º), o deferimento e a
designação dos atos necessários.

Termos em que, pede deferimento.
[LOCAL], [DATA]. [ADVOGADO] — OAB/[UF] nº [Nº]
```

## Erros comuns (anti-padrões a evitar)

- **Perguntar antes do MP** — o assistente é sucessivo; a precedência é da acusação titular (art. 212).
- **Assumir a acusação** em vez de reforçá-la — o assistente **complementa**, não substitui o MP.
- **Propor prova sem submeter ao MP** — ignora o art. 271, §1º.
- **Reperguntas repetidas/impertinentes** — indeferíveis e desgastam a credibilidade (art. 212, parágrafo único).
- **Não consignar o protesto em ata** ao ser indeferido — a matéria **preclui**; sem registro, não há irresignação futura.
- **Subestimar o art. 271, §2º** — faltar a um ato faz o processo prosseguir **sem nova intimação**; perde-se a oportunidade.
- **Citar jurisprudência de memória** — todo precedente/súmula passa pela `jurisprudencia-stj-stf`.
- **Tratar a habilitação tardia como se reabrisse fase preclusa** — o assistente recebe a causa **no estado em que se achar** (art. 269).

## Checklist final (assistente na AIJ)

- [ ] Polo do usuário é **acusação** e habilitação do assistente **deferida** (art. 272)?
- [ ] Estratégia probatória **alinhada com o MP** (reforço, não sobreposição)?
- [ ] Proposição de prova **submetida ao MP** (art. 271, §1º), com pertinência/utilidade?
- [ ] Ordem de reperguntas respeitada: **MP antes, assistente depois** (art. 212 / art. 473 no júri)?
- [ ] Reperguntas **objetivas, pertinentes e não repetitivas**?
- [ ] Indeferimento → **protesto consignado em ata** (pergunta literal + razão + prejuízo)?
- [ ] Agenda e intimações controladas (art. 271, §2º — ônus de comparecimento)?
- [ ] Fato novo na audiência → avaliar **diligência do art. 402** (`pedido-diligencias`)?
- [ ] Súmulas/precedentes conferidos via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável antes de qualquer atuação?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da audiência; não substitui o juízo profissional nem a leitura do caso concreto. A responsabilidade pela atuação e pelas impugnações é sempre do **advogado** (CED/OAB; Provimento 205/2021 quando aplicável à comunicação/atuação).
- **Skill do polo acusatório.** Aplica-se ao assistente de acusação (advocacia do ofendido habilitado na ação penal pública). O chefe-roteador deve conferir o **polo** e o **tipo de instituição** (`_memory/company.md`) antes de sugeri-la — para a defesa, use as skills de audiência da defesa.
- **Citation Gate.** Nenhuma súmula, tema ou acórdão é afirmado de memória: tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Itens **[NÃO VERIFICADO]** exigem conferência antes do uso.
- **Vigência.** Confirme a redação vigente dos arts. 271, 212 e 473 do CPP na fonte oficial antes de peticionar.

**Padrão de redação:** ao redigir peças (proposição de prova, memoriais, arrazoados), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão.
