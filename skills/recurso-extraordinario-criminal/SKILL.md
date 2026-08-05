---
name: recurso-extraordinario-criminal
description: >-
  Use ao elaborar, redigir, estruturar ou revisar RECURSO EXTRAORDINÁRIO em matéria criminal
  dirigido ao STF — recurso de fundamentação vinculada contra decisão de única ou última instância
  que contrariar dispositivo da Constituição (art. 102, III, CF), com preliminar formal de
  repercussão geral. Gatilhos: recurso extraordinário, RE, RE criminal, razões de recurso
  extraordinário, art. 102, III, CF, alínea a, alíneas b/c/d… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-recurso-extraordinario-criminal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["recurso-extraordinario-criminal", "recurso extraordinario", "extraordinario criminal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Recurso Extraordinário Criminal (RE — STF)

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

Esta skill orienta a construção do **Recurso Extraordinário em matéria criminal**, dirigido ao **Supremo Tribunal Federal**. É a peça-irmã do REsp: os **pressupostos comuns da instância excepcional** (esgotamento, prequestionamento, prazo, procuração, mecânica da petição bipartida) estão detalhados na skill `recurso-especial-criminal` e **não se repetem aqui**. O foco desta skill é o que só o RE tem: a **preliminar formal de repercussão geral**, a fronteira entre **ofensa constitucional direta e reflexa**, o **aproveitamento dos temas de RG criminais** (sobrestamento e tese vinculante) e o **manejo simultâneo com o REsp**. A best-practice `recurso-criminal` para nas Súmulas 282/356 do STF (prequestionamento); daqui em diante o terreno é próprio. Serve à defesa (foco principal), mas a estrutura vale para MP, Defensoria e assistente de acusação.

## O instituto e a base legal

| Fonte | O que traz |
|---|---|
| **CF, art. 102, III, a/b/c/d** | Cabimento: causas decididas em única/última instância, quando a decisão **(a)** contrariar dispositivo da CF; **(b)** declarar a inconstitucionalidade de tratado ou lei federal; **(c)** julgar válida lei ou ato de governo local contestado em face da CF; **(d)** julgar válida lei local contestada em face de lei federal (EC 45/2004). Na prática criminal, a **alínea a** domina |
| **CF, art. 102, § 3º (EC 45/2004)** | **Repercussão geral**: o recorrente **deve demonstrar** a RG das questões constitucionais discutidas; a recusa exige **2/3 dos membros** do STF |
| **CPC, art. 1.035** | Regulamenta a RG (aplicável ao penal via **art. 3º CPP**): conceito de relevância + transcendência (§ 1º), **preliminar formal** (§ 2º), RG presumida (§ 3º), **sobrestamento nacional** (§ 5º), efeito expansivo da negativa (§ 8º) |
| **CPC, arts. 1.029 a 1.041** | Procedimento comum a RE/REsp — detalhado na skill `recurso-especial-criminal`; aqui interessam os **arts. 1.031 a 1.033** (pontes entre STJ e STF na interposição conjunta) |
| **CPP, art. 637** | O RE **não tem efeito suspensivo**; a parte final (execução imediata) foi redimensionada pela jurisprudência do STF sobre presunção de inocência — ver "Erros comuns" |
| **CPP, art. 798** | Prazos criminais em **dias corridos** — vale para o RE criminal |
| **RISTF** | Processamento interno da RG (Plenário Virtual, preliminar formal); confira os dispositivos regimentais vigentes via agente `lei-e-sumula` antes de citá-los na peça |

**Natureza:** recurso **excepcional**, de **fundamentação vinculada** e **sem devolutividade fática** (Súmula 279/STF) — o STF guarda a Constituição; não revisa a justiça da condenação nem reexamina prova.

## Cabimento e pressupostos — o que muda em relação ao REsp

Esgotamento das vias ordinárias (Súmula 281/STF), prazo de **15 dias corridos** (art. 1.003, § 5º, CPC c/c art. 798 CPP; Defensoria em dobro, MP sem dobra), prequestionamento (Súmulas 282/356 STF), regularidade formal (Súmula 284/STF), impugnação de todos os fundamentos (Súmula 283/STF), preparo (risco de deserção só na ação penal privada) e procuração nos autos: **regime idêntico ao do REsp — ver skill `recurso-especial-criminal`**. O que muda:

| Pressuposto | No REsp (STJ) | No RE (STF) |
|---|---|---|
| **Decisão recorrida** | Acórdão de **TJ/TRF** (Súmula 203/STJ exclui Turma Recursal) | Decisão de única/última instância de **qualquer órgão** — cabe RE contra acórdão de **Turma Recursal de JECRIM** e até de causas de alçada (**Súmula 640/STF**) |
| **Matéria** | Lei federal infraconstitucional | Norma **constitucional**, com ofensa **direta e frontal** |
| **Filtro de relevância** | Relevância **presumida** nas ações penais (art. 105, § 3º, I, CF) | **Não há presunção criminal**: a RG deve ser **demonstrada caso a caso** (só o art. 1.035, § 3º, traz hipóteses presumidas) |
| **Reexame de prova** | Súmula 7/STJ | **Súmula 279/STF** |
| **Direito local** | Súmula 280/STF, por analogia | Súmula 280/STF, em sede própria |
| **Decisão precária** | — | Não cabe RE contra acórdão que defere **liminar** (Súmula 735/STF) — falta decisão definitiva |

## A preliminar formal de repercussão geral — o requisito que decide o recurso

A RG é demonstrada em **tópico destacado, no início das razões** (art. 1.035, § 2º, CPC; a exigência de preliminar **formal e fundamentada** consta também do RISTF, art. 327 — confirme a redação vigente via `lei-e-sumula`): a questão constitucional deve ser **relevante** (do ponto de vista econômico, político, social **ou** jurídico) e **transcendente** (ultrapassar os interesses subjetivos do processo — art. 1.035, § 1º). **Sem a preliminar formal, o RE não é conhecido** — e a prática do STF trata o vício como insanável: não conte com abertura de prazo para suprir.

Roteiro de construção em matéria criminal:

1. **Enuncie a questão constitucional em uma frase** ("saber se [norma/prática] viola o art. 5º, [inciso], da CF").
2. **Relevância jurídica e social**: a liberdade como direito fundamental em jogo, a uniformidade do sistema de justiça criminal, a integridade de garantias processuais constitucionais.
3. **Transcendência**: multiplicidade de casos idênticos (dosimetria, regime, execução, provas), impacto no sistema penitenciário, definição de standard aplicável a todos os processos penais.
4. **RG presumida**, quando presente: acórdão que **contraria súmula ou jurisprudência dominante do STF** (art. 1.035, § 3º, I) ou que **reconheceu a inconstitucionalidade de tratado ou lei federal** (inciso III). O inciso II foi revogado — confira a redação vigente do § 3º via agente `lei-e-sumula`.
5. **Tema de RG já reconhecido** sobre a mesma questão é o argumento mais forte: a relevância já foi decidida pelo próprio STF (ver seção de temas, abaixo).

Preliminar de **boilerplate** ("a matéria é relevantíssima e transcende as partes") não passa: amarre o caso concreto à transcendência com dados do processo. A recusa da RG exige quórum de 2/3, é **irrecorrível** (art. 1.035, *caput*) e contamina todos os recursos sobre matéria idêntica (§ 8º).

## Ofensa constitucional direta × reflexa — a fronteira que derruba o RE criminal

**Ofensa direta**: o acórdão viola a norma constitucional por si, sem intermediação de lei. **Ofensa reflexa**: para chegar à CF é preciso antes reinterpretar CPP, CP ou lei especial — e aí a sede correta é o **REsp**. A Súmula 636/STF cristaliza o filtro para a legalidade: não cabe RE por ofensa ao princípio da legalidade quando sua verificação pressupõe rever a interpretação de normas infraconstitucionais. A invocação genérica de **devido processo legal, contraditório e ampla defesa** (art. 5º, LIV e LV) cuja solução depende de norma processual é o exemplo clássico de reflexa — o STF tem tema de RG negando repercussão a essa alegação genérica: pesquise o tema e seu estágio via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** o que não confirmar.

**Teste das três perguntas** antes de redigir cada tese:

1. Qual norma constitucional **específica** foi violada (artigo e inciso)?
2. O acórdão a violou **por si** — ou apenas aplicou mal uma lei que a concretiza?
3. Retirada a lei do caminho, a inconstitucionalidade **permanece de pé**?

| Tipicamente **direta** (RE) | Tipicamente **reflexa** (redirecione ao REsp) |
|---|---|
| Presunção de inocência e execução da pena (art. 5º, LVII) | Dosimetria pelos critérios dos arts. 59 e 68 do CP |
| Individualização da pena contra vedações legais abstratas (art. 5º, XLVI) | Nulidades por inobservância de rito do CPP (arts. 212, 226...) |
| Inviolabilidade do domicílio (art. 5º, XI) | Valoração da prova e enquadramento típico |
| Inadmissibilidade de provas ilícitas, quando a ilicitude é constitucional (art. 5º, LVI) | Ilicitude por descumprimento de procedimento legal (cadeia de custódia) |
| Soberania dos veredictos e plenitude de defesa (art. 5º, XXXVIII) | Interpretação de causas de aumento/minorantes de lei especial |
| Motivação das decisões contra acórdão genérico (art. 93, IX) | Requisitos legais de benefícios da LEP |

A mesma tese frequentemente tem **duas faces** — federal (REsp) e constitucional (RE). Prequestione **ambos os planos** (ver skill `embargos-prequestionamento`, que monta a matriz dispositivo → recurso) e distribua cada face no recurso próprio, sem espelhar textos.

## Temas de repercussão geral criminais — aproveitamento, sobrestamento e tese vinculante

Antes de redigir, **pesquise via `jurisprudencia-stj-stf` se a questão já corresponde a um Tema de RG** do STF (execução da pena e júri, busca domiciliar, prescrição, individualização da pena são blocos férteis — mas número, estágio e teor mudam: confirme tudo com o `verificador-citacoes` e marque **[NÃO VERIFICADO]** o que não confirmar; nunca cite número de tema de memória). O resultado da pesquisa define a estratégia:

| Situação do tema | Estratégia na peça |
|---|---|
| **RG reconhecida, mérito pendente** | Invocar o tema na preliminar (a relevância já está decidida) e pedir a vinculação/sobrestamento do feito (art. 1.035, § 5º, CPC) |
| **Tese firmada favorável** | Pedir a aplicação da tese **já na origem** — juízo de retratação do órgão julgador (art. 1.030, II, CPC); o RE pode nem precisar subir |
| **Tese firmada desfavorável** | *Distinguishing* explícito (moldura fática distinta, premissa diversa) ou pedido fundamentado de superação; sem isso, a origem nega seguimento (art. 1.030, I, "a") e o recurso cabível vira **agravo interno** — ver skill `agravo-em-resp-re` |
| **RG negada para a questão** | RE natimorto (art. 1.035, § 8º) — redirecione a estratégia (REsp, HC) |

- **Tese vinculante:** fixada a tese de mérito em RG, as instâncias de origem a aplicam obrigatoriamente (art. 1.030, I, "a", e II, do CPC); descumprimento abre a via da **reclamação constitucional** (ver skill `reclamacao-constitucional`), mas somente **após esgotadas as instâncias ordinárias** (art. 988, § 5º, II, CPC — confira a redação vigente via `lei-e-sumula`).
- **Sobrestamento e prescrição:** desde o Pacote Anticrime, a prescrição **não corre** na pendência de recursos aos Tribunais Superiores **quando inadmissíveis** (art. 116, III, do CP — confira a redação via `lei-e-sumula`); e a suspensão nacional do art. 1.035, § 5º, gera discussão própria sobre o curso da prescrição nos feitos criminais sobrestados — pesquise o entendimento atual via `jurisprudencia-stj-stf` antes de prometer "ganho de tempo" ao cliente.

## Interposição simultânea com o REsp — um só prazo, duas petições

- Acórdão criminal quase sempre mistura fundamentos federais e constitucionais: em regra o RE nasce **junto com o REsp**, no mesmo prazo de 15 dias corridos, em **petições autônomas**, ambas protocoladas perante a **presidência/vice-presidência do tribunal a quo**.
- Fundamento constitucional autônomo sem RE → REsp barrado (**Súmula 126/STJ**); fundamento infraconstitucional autônomo sem REsp → RE barrado (**Súmula 283/STF** + ofensa reflexa). **Mapeie os fundamentos do acórdão antes de escolher** — a análise conjunta está na skill `recurso-especial-criminal`.
- **Ordem de julgamento:** interpostos ambos, os autos vão primeiro ao **STJ**; julgado o REsp, seguem ao STF se o RE não estiver prejudicado (art. 1.031 CPC); o relator no STJ pode inverter se considerar o RE prejudicial (§ 2º).
- **Pontes de fungibilidade:** se o STJ entender que o REsp versa questão constitucional, abre **15 dias** para o recorrente demonstrar a RG e remete ao STF (art. 1.032); se o STF considerar a ofensa **reflexa**, remete ao STJ para julgamento como REsp (art. 1.033). As pontes salvam recursos mal endereçados — mas não substituem a escolha correta nem dispensam a preliminar de RG.
- **Não espelhe as razões:** cada recurso tem fundamentação vinculada própria; copiar o REsp trocando o cabeçalho atrai a Súmula 284/STF.

## Estrutura forense da peça — PETIÇÃO ÚNICA BIPARTIDA

Mesma arquitetura do REsp (art. 1.029 CPC): **(1) interposição** à presidência/vice do tribunal a quo + **(2) razões** ao STF, em folha própria. A mecânica completa do preâmbulo (qualificação em fase recursal, declaração de tempestividade em dias corridos, requerimentos de processamento e contrarrazões) está na skill `recurso-especial-criminal`; abaixo, o que é próprio do RE.

### PRIMEIRA PARTE — Interposição (à presidência do tribunal recorrido)

- **Endereçamento:** presidência ou vice-presidência do TJ/TRF, conforme o regimento interno; contra acórdão de Turma Recursal, ao **presidente da Turma Recursal**.
- Verbo **INTERPOR** + nome em caixa alta: `interpor RECURSO EXTRAORDINÁRIO, forte no art. 102, III, alínea a, e § 3º, da Constituição Federal (CF), e nos arts. 1.029 e seguintes do Código de Processo Civil (CPC), aplicáveis por força do art. 3º do Código de Processo Penal (CPP)`.
- Se simultâneo ao REsp, **registre a interposição conjunta** e a remessa na ordem do art. 1.031 do CPC.
- Requerimentos: contrarrazões em 15 dias (art. 1.030, *caput*), juízo positivo de admissibilidade e remessa (ao STJ primeiro, havendo REsp); havendo risco na demora, efeito suspensivo (art. 1.029, § 5º, CPC).

### SEGUNDA PARTE — Razões (ao STF, em nova folha)

Cabeçalho: `Razões de Recurso Extraordinário` — `Recorrente: [nome]` / `Recorrido: o Ministério Público` (ou conforme o polo). Endereçamento: `Excelso Supremo Tribunal Federal` — `Eminente Ministro(a) Relator(a)` / `Egrégia Turma`.

**I — Da síntese dos fatos e do processado:** 2-4 frases — imputação, sentença, acórdão, embargos de declaração e desfecho, REsp simultâneo (se houver).

**II — Da preliminar formal de repercussão geral** (art. 102, § 3º, CF; art. 1.035, § 2º, CPC): tópico destacado, **antes de qualquer outra matéria de direito** — questão constitucional enunciada + relevância + transcendência + RG presumida ou tema aproveitado (roteiro da seção própria, acima).

**III — Do cabimento e da admissibilidade:** esgotamento (Súmula 281/STF); tempestividade (15 dias corridos — art. 798 CPP); **prequestionamento** do dispositivo constitucional, com indicação de onde o acórdão o enfrentou (se veio de embargos, skill `embargos-prequestionamento`); **demonstração expressa da ofensa direta** (teste das três perguntas — antídoto contra a reflexa); questão de direito sobre a moldura fática do acórdão (antídoto contra a Súmula 279/STF).

**IV — Da ofensa à Constituição (alínea a):** para **cada dispositivo constitucional**: o que ele garante → como o acórdão o violou **frontalmente** → a interpretação conforme. Uma subseção por tese, sempre dialética com o fundamento específico do acórdão (BP `recurso-criminal`). Invocando as alíneas b/c/d, demonstre o ato de inconstitucionalidade ou a validação impugnada.

**V — Dos pedidos** (binômio **conhecimento + provimento**, precedido da RG):

```
Diante do exposto, requer:
a) o reconhecimento da repercussão geral da questão constitucional (art. 1.035, § 2º,
   do CPC) — ou, existindo tema já afetado, a vinculação do feito ao tema correspondente —,
   com a admissão na origem e o conhecimento do recurso;
b) no mérito, o provimento para [restabelecer a norma constitucional violada — ex.: afastar
   a execução da pena antes do trânsito em julgado, reconhecer a ilicitude da prova e
   absolver, assegurar regime compatível com a individualização] OU [cassar o acórdão,
   com devolução à origem, quando a tese for de nulidade];
c) subsidiariamente, [tese menor — ex.: regime menos gravoso, novo julgamento dos embargos];
d) estando a questão afetada a tema pendente, o sobrestamento do feito (art. 1.035, § 5º).
```

**Fechamento** padrão.

## Teses típicas da prática (RE criminal)

- **Presunção de inocência** (art. 5º, LVII): execução da pena antes do trânsito em julgado — o STF assentou a vedação nas **ADCs 43, 44 e 54** (precedente notório; confirme o estado atual via `jurisprudencia-stj-stf`); execução imediata da pena do júri × soberania dos veredictos (tema de RG — pesquise e marque [NÃO VERIFICADO]).
- **Individualização da pena** (art. 5º, XLVI): vedações legais **abstratas** a regime, substituição ou progressão, sem análise do caso concreto.
- **Inviolabilidade do domicílio** (art. 5º, XI): busca sem mandado e o standard das "fundadas razões" (tema de RG — pesquise via `jurisprudencia-stj-stf`).
- **Provas ilícitas** (art. 5º, LVI), quando a ilicitude decorre diretamente da violação de garantia constitucional.
- **Soberania dos veredictos e plenitude de defesa** no júri (art. 5º, XXXVIII).
- **Motivação das decisões** (art. 93, IX) contra acórdão genérico ou padronizado.
- **Direito ao silêncio e não autoincriminação** (art. 5º, LXIII).
- **Acusação (MP/assistente):** aplicação de tese de RG descumprida pela origem; mandados constitucionais de criminalização e vedação à proteção deficiente; marcos de prescrição com estatura constitucional.

## Erros comuns e pegadinhas

- **Omitir a preliminar formal de RG** → não conhecimento, vício tratado como insanável. Mencionar a RG "de passagem" no meio do mérito equivale a omiti-la: exige **tópico próprio e fundamentado**.
- **Fundamentar em ofensa reflexa** (devido processo genérico, legalidade — Súmula 636/STF) → inadmissão. Reformule para a norma constitucional específica e frontal; se não sobreviver ao teste das três perguntas, a tese é de REsp.
- **Rediscutir prova** → Súmula 279/STF. Reformule como qualificação constitucional dos fatos assentados no acórdão.
- **Pular os embargos de declaração** → Súmulas 282 e 356/STF (ver skill `embargos-prequestionamento`). Sobre o alcance do prequestionamento **ficto** (art. 1.025 CPC) no STF, pesquise o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Esquecer o REsp simultâneo** quando há fundamento infraconstitucional autônomo e suficiente (Súmulas 126/STJ e 283/STF).
- **Achar que Turma Recursal fecha a via excepcional:** fecha para o REsp (Súmula 203/STJ), **não** para o RE (Súmula 640/STF) — no JECRIM, o RE é a única via excepcional disponível.
- **RE contra decisão precária** (liminar/cautelar) → Súmula 735/STF.
- **Recorrer de decisão monocrática de relator sem esgotar o agravo interno/regimental** → sem o pronunciamento do colegiado não há "última instância" (Súmula 281/STF).
- **Contar o prazo em dias úteis** → intempestividade: 15 dias **corridos** (art. 798 CPP); dobra só para a Defensoria (detalhes na skill `recurso-especial-criminal`).
- **Endereçar direto ao STF** → a interposição vai à presidência/vice do tribunal a quo (art. 1.029, *caput*, CPC); só as razões falam ao Supremo.
- **Errar o recurso contra a inadmissão:** óbice comum → **ARE** (art. 1.042 CPC); RE contrário a tese de RG ou com RG negada → **agravo interno** na origem (art. 1.030, § 2º). A troca é erro grosseiro — divisor de águas na skill `agravo-em-resp-re`.
- **Presumir efeito suspensivo:** o RE não suspende a decisão (art. 637 CPP; art. 995 CPC) — mas a execução da pena antes do trânsito está vedada pelas ADCs 43/44/54 (notório; confirme o estado atual). Havendo risco, tutela do art. 1.029, § 5º, do CPC e **HC paralelo** para a liberdade.
- **Interpor RE apenas "para ganhar tempo":** na pendência de recurso inadmissível aos Tribunais Superiores **a prescrição não corre** (art. 116, III, CP — confira via `lei-e-sumula`) e autoriza baixa imediata dos autos — a jogada protelatória virou armadilha contra o próprio réu.
- **Espelhar as razões do REsp** trocando só o cabeçalho → fundamentação vinculada errada e Súmula 284/STF.

## Checklist final

- [ ] Decisão de única/última instância — inclusive Turma Recursal (S. 640/STF)? Vias ordinárias esgotadas (S. 281/STF)?
- [ ] Questão **constitucional** com ofensa **direta** demonstrada (aprovada no teste das três perguntas)?
- [ ] **Preliminar formal de RG** em tópico destacado: questão enunciada + relevância + transcendência (+ hipóteses do art. 1.035, § 3º, quando presentes)?
- [ ] Temas de RG pesquisados via `jurisprudencia-stj-stf` (aproveitamento, distinguishing ou redirecionamento) e verificados — nada de número de tema de memória?
- [ ] Prequestionamento do dispositivo constitucional demonstrado (ou preparado via skill `embargos-prequestionamento`)?
- [ ] Tese blindada contra a Súmula 279/STF (sem reexame de prova)?
- [ ] Fundamento infraconstitucional autônomo no acórdão → **REsp simultâneo** (S. 126/STJ; S. 283/STF)?
- [ ] 15 dias **corridos**; dobra da Defensoria; procuração nos autos (regime comum na skill `recurso-especial-criminal`)?
- [ ] Interposição à **presidência/vice da origem** + razões ao **STF**, em folhas separadas, com remessa na ordem do art. 1.031?
- [ ] Pedidos: reconhecimento da RG + conhecimento + provimento (reforma ou cassação) + subsidiárias + sobrestamento se houver tema pendente?
- [ ] Toda citação de precedente/tema **pesquisada e verificada**; pendências marcadas **[NÃO VERIFICADO]**?
- [ ] Necessita efeito suspensivo (art. 1.029, § 5º, CPC) ou **HC paralelo** para a liberdade?

## Apoie-se em

- **Skill `recurso-especial-criminal`** — par obrigatório desta peça: pressupostos comuns da instância excepcional (esgotamento, prazo, prequestionamento, procuração, jurisprudência defensiva) e a mecânica completa da petição bipartida; em regra, RE e REsp nascem juntos.
- **Best-practice `recurso-criminal`** — teoria geral recursal e dialeticidade fundamento a fundamento; esta skill a estende ao plano constitucional (a BP para nas Súmulas 282/356 do STF).
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos temas de RG criminais (número, estágio, tese) e dos precedentes do STF; nenhum tema ou julgado entra na peça sem passar por ele.
- **Agente `verificador-citacoes`** — Citation Gate obrigatório: o que não confirmar sai da peça ou recebe **[NÃO VERIFICADO]**.
- **Agente `lei-e-sumula`** — conferência da redação vigente de dispositivos sensíveis (art. 1.035, § 3º, CPC; art. 116, III, CP; art. 988, § 5º, CPC; normas do RISTF).
- **Skill `embargos-prequestionamento`** — etapa prévia quando o acórdão for omisso sobre a tese constitucional (Súmulas 282/356 STF) e matriz dispositivo → RE/REsp.
- **Skill `agravo-em-resp-re`** — etapa seguinte se a origem inadmitir o RE (ARE — art. 1.042 CPC), com o divisor de águas frente ao agravo interno.
- **Skill `reclamacao-constitucional`** — via para descumprimento de tese vinculante pela origem, após esgotadas as instâncias ordinárias (art. 988, § 5º, II, CPC).
- **Skill `redacao-persuasiva-criminal`** — padrão de redação da peça: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
