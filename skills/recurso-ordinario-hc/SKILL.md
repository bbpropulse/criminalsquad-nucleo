---
name: recurso-ordinario-hc
description: >-
  Use ao elaborar, redigir, estruturar ou revisar o RECURSO ORDINÁRIO CONSTITUCIONAL EM HABEAS
  CORPUS (RHC) no processo penal brasileiro — recurso cabível contra acórdão DENEGATÓRIO de HC
  proferido por tribunal em única ou última instância. Gatilhos: recurso ordinário em habeas corpus,
  RHC, recurso ordinário constitucional, ROC em HC, art. 102, II, 'a', CF, art. 105, II, 'a', CF,
  Lei 8.038/90…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-recurso-ordinario-hc"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["recurso-ordinario-hc", "recurso ordinario"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Recurso Ordinário Constitucional em Habeas Corpus (RHC)

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

Esta skill orienta a construção do **Recurso Ordinário Constitucional em Habeas Corpus** (RHC), a via recursal contra o **acórdão que denega HC** em única ou última instância. Ela **complementa** a skill `habeas-corpus`, que trata da **impetração** (a ação autônoma): aqui o HC já foi julgado e **denegado** — e o relógio do prazo de **5 dias** está correndo. Para as teses de fundo (ilegalidade da prisão, trancamento, nulidades), ver skill `habeas-corpus`; para o comparativo completo das vias perante STJ/STF, ver skill `hc-tribunais-superiores`.

> **Mudança de natureza:** o HC é ação autônoma, sem prazo; o RHC é **recurso**, com **prazo peremptório de 5 dias**. Quem trata a denegação "como se fosse só impetrar de novo" corre o risco de perder a via recursal própria.

## O instituto e a base legal

- **CF, art. 102, II, "a"** — compete ao **STF** julgar, em recurso ordinário, o HC decidido em **única instância** pelos **Tribunais Superiores** (STJ, STM, TSE), se **denegatória** a decisão.
- **CF, art. 105, II, "a"** — compete ao **STJ** julgar, em recurso ordinário, o HC decidido em **única ou última instância** pelos **TRFs** ou pelos **TJs**, quando a decisão for **denegatória**.
- **Lei 8.038/90, arts. 30 a 32** — procedimento do RHC dirigido ao STJ:
  - **Art. 30** — interposição no prazo de **5 dias**, **já com as razões** do pedido de reforma;
  - **Art. 31** — no STJ, vista ao Ministério Público Federal por **2 dias**; o relator submete o feito a julgamento **independentemente de pauta** (parágrafo único);
  - **Art. 32** — aplica-se subsidiariamente, no que couber, o rito do **HC originário** (daí a possibilidade de **pedido liminar** no próprio RHC).
- No **STF**, o prazo do RHC também é de **5 dias** (previsão regimental — confira o dispositivo do RISTF via agente `lei-e-sumula` antes de citar o número do artigo na peça).

**"Denegatória" em sentido amplo:** abrange tanto o acórdão que **indefere a ordem no mérito** quanto o que **não conhece** do HC — em ambos os casos a tutela foi negada e o RHC é a via.

## Cabimento — quem denegou define o destino

| Quem denegou o HC | Via cabível | Fundamento |
|---|---|---|
| **TJ** ou **TRF** (única ou última instância) | **RHC ao STJ** | CF, art. 105, II, "a" + Lei 8.038/90, art. 30 |
| **STJ**, **STM** ou **TSE** (única instância) | **RHC ao STF** | CF, art. 102, II, "a" |
| **Juiz de 1º grau** que denega HC | **RESE** (art. 581, X, CPP) — **não** RHC | ver skill `rese` |
| **Turma Recursal do JECRIM** | novo **HC ao TJ/TRF** (entendimento atual; a antiga Súmula 690 STF está superada — confirme via agente `lei-e-sumula`) | — |
| Decisão **monocrática** de relator no tribunal | **agravo interno** primeiro, para formar o acórdão colegiado — ver skill `agravo-regimental` (5 dias no criminal) | regimentos internos |

### Requisitos de admissibilidade

- **Acórdão colegiado denegatório** — contra decisão monocrática, esgote antes o agravo interno; contra **indeferimento de liminar** por relator, nem RHC nem novo HC ao tribunal superior (**Súmula 691 STF**), salvo teratologia.
- **Tempestividade** — 5 dias **corridos** (contagem penal: CPP, art. 798 — exclui o dia do começo; vencimento em domingo/feriado prorroga ao dia útil seguinte, §§ 1º e 3º); **Defensoria Pública tem prazo em dobro** (LC 80/94, arts. 44, I, 89, I e 128, I) e intimação pessoal.
- **Interposição na origem, com razões** — petição dirigida ao tribunal que denegou, acompanhada das razões (art. 30 da Lei 8.038/90). Não há prazo separado para razões.
- **Sem preparo** — o HC é gratuito por força constitucional (CF, art. 5º, LXXVII) e o RHC segue a mesma lógica; não existe deserção por falta de preparo.
- **Legitimidade** — na prática, é recurso **da defesa**: só cabe contra decisão **denegatória**, de modo que o MP não tem interesse recursal por essa via (contra a concessão, as vias são outras).

### Efeitos

- **Devolutivo amplo** — devolve ao tribunal ad quem **toda a matéria impugnada nas razões**; mas vale a regra da **supressão de instância**: matéria **não enfrentada** pelo tribunal de origem em regra não é conhecida diretamente.
- **Sem efeito suspensivo** automático — a coação persiste durante o processamento; por isso o **pedido liminar** no RHC (art. 32 da Lei 8.038/90 c/c rito do HC) é peça-chave nos casos de urgência.
- **Sem efeito regressivo** — diferentemente do RESE, **não há juízo de retratação**: o tribunal de origem apenas processa e remete.

## Escolha estratégica — RHC × novo HC substitutivo

Contra o acórdão denegatório, a prática conhece dois caminhos. A escolha é **estratégica**, não indiferente:

| Critério | RHC | Novo HC (substitutivo) |
|---|---|---|
| Prazo | **5 dias** (peremptório) | Sem prazo |
| Devolutividade | **Ampla** — tribunal deve enfrentar todas as razões | Cognição do writ; tribunal pode **não conhecer** |
| Liminar | Cabível (art. 32, Lei 8.038/90) | Cabível — tramitação tipicamente **mais célere** |
| Risco de admissibilidade | Baixo (via própria) | **Alto**: STF e STJ consolidaram o **não cabimento do HC substitutivo do recurso ordinário**, conhecendo-o apenas para eventual **concessão de ofício** em flagrante ilegalidade (art. 654, §2º, CPP) — pesquise o estágio atual via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar |
| Sustentação oral | Cabível no julgamento | Cabível |

**Regra prática de decisão:**
1. **Dentro do prazo de 5 dias → interponha o RHC.** É a via própria, com devolutividade garantida; a urgência se resolve com **pedido liminar no próprio RHC**.
2. **Prazo perdido ou fato superveniente** (nova prisão, novo fundamento, excesso de prazo que se agravou) → **novo HC**, assumindo o ônus do eventual não conhecimento e apostando na concessão de ofício.
3. **Evite duplicar as vias** (RHC + HC simultâneos sobre a mesma matéria): o tribunal tende a julgar **prejudicado** um deles — a duplicidade não acelera e pode desorganizar a defesa.

## Estrutura forense da peça — BIPARTIDA

Como todo recurso interposto na origem com razões ao tribunal ad quem (ver BP `recurso-criminal` para a técnica recursal geral): (1) **interposição** dirigida ao tribunal que denegou; (2) **razões** endereçadas ao STJ ou ao STF, em folha própria.

### PRIMEIRA PARTE — Interposição

**Endereçamento:** `Excelentíssimo(a) Senhor(a) Desembargador(a) Presidente do Tribunal de Justiça do Estado de [...]` (ou do TRF da [N]ª Região; se o RHC for ao STF, ao Presidente do STJ/STM/TSE). **Nunca** endereçar a interposição diretamente ao STJ/STF.

**Preâmbulo:**
- Nome do paciente/recorrente + `já qualificado nos autos do Habeas Corpus nº [...]` (não requalificar);
- `por intermédio do(a) advogado(a) que ao final subscreve (procuração nos autos)` — ou Defensor(a) Público(a), com a prerrogativa do prazo em dobro;
- **Tempestividade:** `no prazo legal de 5 (cinco) dias, conforme art. 30 da Lei 8.038/90` (Defensoria: `em dobro, na forma da LC 80/94`);
- Verbo **INTERPOR** + nome em caixa alta: `interpor RECURSO ORDINÁRIO CONSTITUCIONAL EM HABEAS CORPUS (RHC)`;
- Fundamento: `forte no art. 105, II, "a", da Constituição Federal` (RHC ao STJ) ou `forte no art. 102, II, "a", da Constituição Federal` (RHC ao STF);
- `contra o v. acórdão que denegou a ordem no HC nº [...], requerendo o processamento do recurso e a remessa dos autos ao [Superior Tribunal de Justiça / Supremo Tribunal Federal], acompanhado das inclusas razões (art. 30 da Lei 8.038/90).`

> **Não peça retratação** — o RHC não tem efeito regressivo (contraste com o RESE, art. 589 CPP).

**Fechamento:** `Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### SEGUNDA PARTE — Razões (em nova folha)

Cabeçalho: `Razões de Recurso Ordinário Constitucional em Habeas Corpus`.
- `Recorrente: [nome do paciente]`
- `Recorrido: o Ministério Público`

Endereçamento ao tribunal ad quem:
- **RHC ao STJ:** `Colendo Superior Tribunal de Justiça — Eminente Ministro(a) Relator(a) — Egrégia [5ª/6ª] Turma`
- **RHC ao STF:** `Excelso Supremo Tribunal Federal — Eminente Ministro(a) Relator(a) — Egrégia Turma`

**I — Dos Fatos:** síntese em 3 movimentos: (a) a coação originária (prisão/ato impugnado); (b) a impetração do HC e suas teses; (c) a **denegação** pelo acórdão recorrido, com a data da intimação (base da tempestividade).

**II — Do Cabimento e da Tempestividade:** acórdão denegatório de HC proferido por [TJ/TRF] em única/última instância → RHC ao [STJ/STF] (CF, art. 105/102, II, "a"); interposição no quinquídio do art. 30 da Lei 8.038/90.

**III — Do Direito:** aqui está o diferencial técnico do RHC — **ataque os fundamentos do acórdão denegatório**, não recopie a inicial do HC:
1. Identifique **cada fundamento** usado pelo tribunal para denegar;
2. **Rebata um a um** (error in judicando/in procedendo), demonstrando por que a coação ilegal persiste;
3. Desenvolva as teses de fundo — fundamentação inidônea da preventiva (arts. 312 e 315 CPP), ausência de contemporaneidade, suficiência das cautelares diversas (art. 319 CPP), excesso de prazo, trancamento, nulidades — conforme a skill `habeas-corpus`; para calibrar a tese ao perfil decisório de STJ/STF, ver skill `hc-tribunais-superiores`;
4. Onde a peça exigir precedente atual do tribunal de destino, **pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**.

**IV — Da Medida Liminar** (se houver urgência): demonstrar *fumus boni iuris* (plausibilidade das razões) e *periculum in mora* (paciente preso; dano diário à liberdade), requerendo a concessão liminar da ordem até o julgamento do mérito (art. 32 da Lei 8.038/90 c/c rito do HC).

**V — Dos Pedidos** (binômio **conhecimento + provimento**):
```
Diante do exposto, requer:
a) a concessão da medida liminar, para [ex.: expedição de alvará de soltura /
   salvo-conduto] até o julgamento definitivo do recurso;
b) o conhecimento do recurso ordinário;
c) o seu provimento, para que seja concedida a ordem de habeas corpus, com
   [ex.: relaxamento da prisão ilegal / revogação da preventiva / substituição
   por cautelares do art. 319 do CPP / trancamento da ação penal];
d) subsidiariamente, a concessão da ordem de ofício (art. 654, §2º, do CPP),
   caso superado qualquer óbice de conhecimento.
```

**Fechamento** padrão.

## Teses típicas da prática

- **Preventiva com fundamentação genérica/abstrata** — violação dos arts. 312 e 315, §2º, do CPP (gravidade abstrata do delito, fórmulas vazias de "garantia da ordem pública").
- **Falta de contemporaneidade** entre os fatos e o decreto prisional (art. 312, §2º, CPP).
- **Não análise das cautelares diversas** (arts. 282, §6º, e 319 CPP) — a prisão como *ultima ratio*.
- **Excesso de prazo** na formação da culpa ou na prisão cautelar.
- **Acórdão que não enfrentou tese defensiva** relevante — omissão que o RHC devolve integralmente ao tribunal superior.
- **Trancamento** (atipicidade, ausência de justa causa, extinção da punibilidade) — sempre no filtro da excepcionalidade (ver skill `habeas-corpus`).
- Para todas: precedente atual do STJ/STF **apenas** via agente `jurisprudencia-stj-stf` + `verificador-citacoes`.

## Erros comuns e pegadinhas

- **"HC não tem prazo" → RHC TEM.** O erro clássico: tratar a fase recursal com a informalidade da impetração e perder os 5 dias. Denegado o HC, anote o prazo **no dia da intimação**.
- **Contar o quinquídio em dias úteis.** O prazo penal é **corrido e peremptório** (CPP, art. 798) — a contagem em dias úteis é do CPC e **não** se aplica; a única prorrogação é o vencimento em domingo/feriado (art. 798, §3º).
- **Interpor direto no STJ/STF.** A petição entra **na origem** (tribunal que denegou); endereçar ao tribunal ad quem gera risco de intempestividade quando o protocolo é redirecionado.
- **Interpor sem razões.** O art. 30 da Lei 8.038/90 exige a interposição **com as razões** — não existe a "juntada posterior" típica de outros recursos.
- **Denegação por juiz de 1º grau → RESE (art. 581, X, CPP), não RHC.** O RHC pressupõe **tribunal** denegando em única/última instância (ver skill `rese`).
- **Atacar decisão monocrática por RHC.** Sem acórdão colegiado, falta o pressuposto: interponha **agravo interno** primeiro. Contra indeferimento de **liminar** por relator, incide a **Súmula 691 STF**.
- **Pedir retratação.** Não há efeito regressivo no RHC — o pedido revela desconhecimento do rito e enfraquece a peça.
- **Recopiar a inicial do HC nas razões.** O RHC ataca **o acórdão**; razões que ignoram os fundamentos da denegação convidam ao desprovimento.
- **Inovar em matéria não levada ao tribunal de origem** — risco de não conhecimento por supressão de instância (ressalvada a ilegalidade flagrante cognoscível de ofício).
- **Apostar tudo no HC substitutivo dentro do prazo do RHC.** Se o tribunal não conhecer e não conceder de ofício, o quinquídio já terá escoado — a via própria morreu junto.
- **Citar julgado de memória.** Nenhum número de HC/RHC/AgRg vai para a peça sem passar pelo `verificador-citacoes`.

## Checklist final

- [ ] Acórdão **colegiado denegatório** de HC (incluído o não conhecimento)?
- [ ] Destino correto: TJ/TRF → **STJ** (105, II, "a"); STJ/STM/TSE → **STF** (102, II, "a")?
- [ ] Tempestividade: **5 dias** (art. 30, Lei 8.038/90); em dobro para a Defensoria (LC 80/94)?
- [ ] Interposição **na origem**, ao Presidente do tribunal que denegou?
- [ ] **Razões juntas** com a interposição, endereçadas ao tribunal ad quem?
- [ ] Verbo **INTERPOR**; nome da peça em caixa alta; **sem** pedido de retratação?
- [ ] Razões atacam **os fundamentos do acórdão** (não recopiam a inicial do HC)?
- [ ] Pedido **liminar** avaliado (paciente preso → quase sempre cabível)?
- [ ] Pedidos: liminar + **conhecimento + provimento** + concessão **de ofício** subsidiária (art. 654, §2º, CPP)?
- [ ] Precedentes verificados via `jurisprudencia-stj-stf` + `verificador-citacoes` ([NÃO VERIFICADO] no que não confirmar)?

## Apoie-se em

- **Best-practice `recurso-criminal`** — técnica recursal geral (interposição × razões, admissibilidade, dialeticidade).
- **Skill `habeas-corpus`** — a impetração originária, hipóteses do art. 648 CPP, sujeitos e teses de fundo (esta skill começa onde aquela termina: no acórdão denegatório).
- **Skill `hc-tribunais-superiores`** — comparativo estratégico das vias perante STJ/STF (HC originário × RHC × agravos) e perfil decisório dos tribunais superiores.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes atuais para as razões.
- **Agente `verificador-citacoes`** — verificação obrigatória de toda citação antes de entrar na peça.
- **Squad `recurso-criminal`** — pipeline completo de produção e revisão da peça recursal.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
