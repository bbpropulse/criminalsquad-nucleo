---
name: recurso-especial-criminal
description: >-
  Use ao elaborar, redigir, estruturar ou revisar RECURSO ESPECIAL em matéria criminal dirigido ao
  STJ — recurso de fundamentação vinculada contra acórdão de única ou última instância de TJ/TRF que
  contrariar ou negar vigência a lei federal (alínea a) ou divergir de outro tribunal (alínea c).
  Gatilhos: recurso especial, REsp, REsp criminal, razões de recurso especial, art. 105, III, CF,
  alínea a, alínea c, arts. 1.029 a 1.041… Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-recurso-especial-criminal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["recurso-especial-criminal", "recurso especial", "especial criminal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Recurso Especial Criminal (REsp — STJ)

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

Esta skill orienta a construção do **Recurso Especial em matéria criminal**, dirigido ao **Superior Tribunal de Justiça**. É a primeira skill de **instância extraordinária** do acervo: enquanto a best-practice `recurso-criminal` cobre a teoria geral recursal e para na revisão criminal, aqui se detalham os **pressupostos específicos** (esgotamento, prequestionamento, dissídio) e os **filtros da jurisprudência defensiva** que derrubam a maioria dos REsp criminais antes do mérito. Serve à defesa (foco principal), mas a estrutura vale para MP, Defensoria e assistente de acusação.

## O instituto e a base legal

| Fonte | O que traz |
|---|---|
| **CF, art. 105, III, a/b/c** | Cabimento: causas decididas em única/última instância por **TJ ou TRF**, quando o acórdão **(a)** contrariar tratado ou lei federal, ou negar-lhes vigência; **(b)** julgar válido ato de governo local contestado em face de lei federal (raro no crime); **(c)** der a lei federal interpretação **divergente** da de outro tribunal |
| **CF, art. 105, §§ 2º e 3º (EC 125/2022)** | Filtro da **relevância da questão federal** — mas a relevância é **presumida nas ações penais** (art. 105, § 3º, I). Confira o estágio de regulamentação do filtro via agente `lei-e-sumula` antes de discorrer sobre ele na peça |
| **CPC, arts. 1.029 a 1.041** | Procedimento (aplicável ao processo penal por **analogia — art. 3º CPP**): forma da petição, admissibilidade na origem (art. 1.030), prequestionamento ficto (art. 1.025), efeito suspensivo (art. 1.029, § 5º), recursos repetitivos (arts. 1.036-1.041) |
| **Lei 8.038/90** | Regência histórica do REsp/RE; os arts. 26 a 29 foram **revogados pelo CPC/2015** (art. 1.072, IV) — não fundamente prazo neles |
| **CPP, art. 798** | Em matéria criminal os prazos correm em **dias corridos** (não se aplica o art. 219 do CPC) |

**Natureza:** recurso **excepcional**, de **fundamentação vinculada** (só as hipóteses do art. 105, III) e **sem devolutividade fática** — o STJ revaloriza a *qualificação jurídica* dos fatos já delineados no acórdão, nunca reexamina prova.

## Cabimento e pressupostos

| Pressuposto | Conteúdo | Armadilha correspondente |
|---|---|---|
| **Acórdão de TJ/TRF em única/última instância** | Esgotamento das vias ordinárias (Súmula 281/STF, por analogia) | Cabendo ainda embargos infringentes/declaratórios na origem, o REsp é prematuro. **Turma Recursal de JECRIM não é tribunal**: não cabe REsp (**Súmula 203/STJ**) — o caminho é RE ou HC |
| **Causa decidida (prequestionamento)** | A tese federal deve ter sido **efetivamente enfrentada** no acórdão | **Súmula 211/STJ**: questão não apreciada apesar dos embargos = inadmissível. Antes de recorrer, ver skill **`embargos-prequestionamento`** (inclusive prequestionamento ficto, art. 1.025 CPC) |
| **Questão de direito federal infraconstitucional** | CPP, CP, LEP, leis penais especiais, tratados | Matéria constitucional é do **RE**; violação de **súmula** não é violação de lei federal (**Súmula 518/STJ**); direito local não serve (Súmula 280/STF, por analogia) |
| **Prazo: 15 dias** | Art. 1.003, § 5º, CPC c/c art. 3º CPP | Em processo **criminal**, contam-se **dias corridos** (art. 798 CPP) — orientação consolidada no STJ; confirme o precedente atual via agente `jurisprudencia-stj-stf`. **Defensoria Pública: prazo em dobro** (LC 80/94), inclusive no penal; o **MP não tem dobra** no processo penal (entendimento consolidado). Feriado local: comprove **no ato da interposição** (art. 1.003, § 6º, CPC) |
| **Regularidade formal** | Petição única com interposição + razões, dispositivo violado indicado, fundamentos atacados | **Súmula 284/STF**: fundamentação deficiente = não conhecimento; **Súmula 283/STF**: fundamento suficiente não impugnado derruba o recurso (dialeticidade — ver BP `recurso-criminal`) |
| **Preparo** | Ação penal pública: **não há preparo**. Ação penal privada: custas conforme lei estadual | Deserção só é risco real na ação privada |

### Dissídio jurisprudencial (alínea c) — requisitos próprios

1. **Acórdãos de tribunais diversos** (STJ × TJ, TJ × TJ, TRF × TJ...). Divergência **interna** do mesmo tribunal não serve (Súmula 13/STJ).
2. **Prova da divergência**: certidão, cópia ou citação de repositório oficial/credenciado, ou reprodução com indicação da fonte (art. 1.029, § 1º, CPC).
3. **Cotejo analítico**: transcrever os trechos que configuram o dissídio e demonstrar a **similitude fática** entre os casos e a **solução jurídica distinta**. Transcrever ementas soltas **não basta** — é causa clássica de inadmissão.
4. Paradigma **superado** pela jurisprudência atual do STJ atrai a **Súmula 83/STJ** (aplicável às alíneas a **e** c).

> **Para localizar paradigmas reais:** pesquise via agente `jurisprudencia-stj-stf` (com a BP `pesquisa-jurisprudencial`) e submeta tudo ao `verificador-citacoes`; marque **[NÃO VERIFICADO]** o que não confirmar. **Nunca** preencha o cotejo com número de julgado de memória.

### Interposição simultânea com RE

Se o acórdão tem **fundamento constitucional E infraconstitucional, cada um suficiente por si**, é obrigatório interpor **RE e REsp simultâneos** — sob pena de inadmissão do REsp (**Súmula 126/STJ**). Espelho no STF: RE sem REsp esbarra na violação **reflexa**. Mapeie os fundamentos do acórdão ANTES de escolher o(s) recurso(s).

## Estrutura forense da peça — PETIÇÃO ÚNICA BIPARTIDA

Diferente do RESE, **não há juízo de retratação** e as **razões acompanham a interposição** desde logo (art. 1.029 CPC): (1) **petição de interposição** dirigida à **Presidência (ou Vice-Presidência) do tribunal a quo**; (2) **razões** endereçadas ao **STJ**, em folha própria.

### PRIMEIRA PARTE — Interposição (à presidência do tribunal recorrido)

**Endereçamento:** `Excelentíssimo(a) Senhor(a) Desembargador(a) Presidente (ou Vice-Presidente, conforme o regimento interno) do Tribunal de Justiça do Estado de [...]` — ou `do Tribunal Regional Federal da [N]ª Região`. **Consulte o regimento**: em muitos tribunais a competência para a admissibilidade é do Vice-Presidente.

**Preâmbulo:**
- Nome do recorrente + `já qualificado nos autos da apelação criminal nº [...]` (fase recursal — não requalificar).
- `por intermédio do(a) advogado(a) que esta subscreve (procuração no evento [...])` — Defensoria e MP dispensam procuração.
- **Tempestividade:** `no prazo de 15 (quinze) dias, contados em dias corridos na forma do art. 798 do Código de Processo Penal (CPP), c/c o art. 1.003, § 5º, do Código de Processo Civil (CPC), aplicável por força do art. 3º do CPP`.
- Verbo **INTERPOR** + nome em caixa alta: `interpor RECURSO ESPECIAL`, `forte no art. 105, III, alínea(s) [a e/ou c], da Constituição Federal (CF), e nos arts. 1.029 e seguintes do CPC`.
- Indicação de que as **razões anexas** integram a petição.

**Requerimentos da interposição:** intimação do recorrido para **contrarrazões em 15 dias** (art. 1.030, *caput*, CPC); juízo positivo de admissibilidade; **remessa dos autos ao STJ**. Se houver risco na demora (ex.: execução da pena, efeitos do acórdão), requerer/anunciar o pedido de **efeito suspensivo** (art. 1.029, § 5º, CPC — dirigido ao tribunal de origem entre a interposição e a admissão; ao STJ, após a admissão ou em caso de distribuição).

**Fechamento:** `Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### SEGUNDA PARTE — Razões (ao STJ, em nova folha)

Cabeçalho: `Razões de Recurso Especial`.
- `Recorrente: [nome]` / `Recorrido: o Ministério Público` (ou Querelante/réu, conforme o polo).
- Endereçamento: `Colendo Superior Tribunal de Justiça` — `Eminente Ministro(a) Relator(a)` / `Egrégia Turma Criminal` (matéria penal no STJ: **5ª e 6ª Turmas**, que compõem a **3ª Seção**).

**I — Da síntese dos fatos e do processado:** 2-4 frases — imputação, sentença, acórdão recorrido e o que decidiu, embargos de declaração (se opostos) e seu desfecho.

**II — Do cabimento e da admissibilidade** (seção decisiva no REsp — enfrentar filtro por filtro):
1. **Esgotamento**: acórdão de última instância do TJ/TRF; nenhum recurso ordinário pendente.
2. **Tempestividade** (15 dias corridos — art. 798 CPP).
3. **Prequestionamento**: indicar **onde** (página/trecho do acórdão) cada dispositivo federal foi enfrentado; se veio dos embargos, mencioná-los; se ficto, invocar o art. 1.025 do CPC com a alegação de violação à norma de integração — no processo penal, o **art. 619 do CPP** (correspondente ao art. 1.022 do CPC no regime subsidiário) — ver skill `embargos-prequestionamento`.
4. **Questão exclusivamente de direito**: demonstrar, com os fatos **tal como postos no acórdão**, que não se pede reexame de prova — antídoto expresso contra a Súmula 7/STJ.
5. **Relevância presumida** (ação penal — art. 105, § 3º, I, CF), se o filtro já estiver regulamentado (confira via `lei-e-sumula`).

**III — Da violação à lei federal (alínea a):** para **cada dispositivo** (ex.: art. 155, § 4º, do CP; art. 212 do CPP; art. 33, § 4º, da Lei 11.343/06): o que ele determina → como o acórdão o contrariou ou negou-lhe vigência → qual a interpretação correta. Uma subseção por tese, sempre atacando o fundamento específico do acórdão (dialeticidade — BP `recurso-criminal`).

**IV — Do dissídio jurisprudencial (alínea c, se invocada):** paradigma identificado com fonte oficial + **cotejo analítico** (trechos lado a lado, similitude fática, soluções opostas). Precedentes: apenas os retornados pelo `jurisprudencia-stj-stf` e confirmados pelo `verificador-citacoes`.

**V — Dos pedidos** (binômio **conhecimento + provimento**):
```
Diante do exposto, requer:
a) a admissão do recurso na origem e, no STJ, o seu conhecimento;
b) no mérito, o provimento do recurso para [reformar o acórdão, aplicando corretamente
   o art. ... — ex.: reconhecer o privilégio, redimensionar a pena, aplicar a minorante,
   absolver por atipicidade] OU [cassar/anular o acórdão, com devolução ao tribunal
   de origem — quando a tese for de error in procedendo];
c) subsidiariamente, [tese menor — ex.: regime menos gravoso, substituição da pena].
```

> Diferente do RESE, **aqui cabem teses subsidiárias de pena e regime** — dosimetria é terreno fértil no REsp criminal (matéria de direito), desde que sem revolver prova.

**Fechamento** padrão.

## Teses típicas da prática (REsp criminal da defesa)

- **Dosimetria**: valoração indevida de vetoriais do art. 59 do CP; *bis in idem*; fração de aumento/diminuição sem fundamentação; regime mais gravoso sem motivação (Súmulas 440/STJ, 718 e 719/STF).
- **Tráfico privilegiado** (art. 33, § 4º, da Lei 11.343/06) negado com fundamento inidôneo.
- **Nulidades**: inobservância do art. 212 do CPP; reconhecimento em desacordo com o art. 226 do CPP; quebra de cadeia de custódia (arts. 158-A a 158-F do CPP); busca domiciliar sem fundadas razões.
- **Qualificação jurídica dos fatos**: desclassificação, atipicidade (insignificância), consunção — sempre a partir da moldura fática do acórdão.
- **Execução/pena**: detração, *sursis*, substituição (art. 44 do CP) negados contra legem.
- **Acusação (MP/assistente)**: restabelecimento de qualificadora decotada, correção de fração de minorante, tese de direito sobre marco prescricional.

## Erros comuns e pegadinhas

- **Rediscutir prova**: a peça que pede "reavaliação do conjunto probatório" morre na **Súmula 7/STJ**. Reformule como *qualificação jurídica* dos fatos assentados.
- **Pular os embargos de declaração**: sem prequestionamento, incide a **Súmula 211/STJ**. Ordem correta: acórdão omisso → `embargos-prequestionamento` → REsp.
- **Esquecer o RE simultâneo** quando há fundamento constitucional autônomo e suficiente (**Súmula 126/STJ**).
- **Endereçamento errado**: a interposição vai à **presidência/vice-presidência do tribunal a quo** (art. 1.029, *caput*, CPC), nunca diretamente ao STJ; as **razões** é que falam ao STJ.
- **Contar prazo em dias úteis**: em matéria criminal o prazo é **corrido** (art. 798 CPP) — recurso "no prazo do CPC" pode ser intempestivo.
- **Advogado sem procuração nos autos**: na instância especial o recurso é tido por **inexistente** (**Súmula 115/STJ**) — confira a cadeia de procuração/substabelecimento ANTES de protocolar.
- **REsp interposto antes do julgamento de embargos de declaração da parte contrária**: dispensa ratificação se os embargos forem rejeitados ou não alterarem a conclusão (art. 1.024, § 5º, CPC); se o julgado for **modificado**, complemente/ratifique no novo prazo.
- **Recurso adesivo** (art. 997 CPC): **inaplicável ao processo penal** (entendimento consolidado do STJ) — perdido o prazo próprio, não há "carona" no recurso da outra parte.
- **REsp contra decisão de Turma Recursal** (Súmula 203/STJ) ou **contra acórdão ainda embargável** (falta de esgotamento).
- **Alegar violação de súmula ou de dispositivo constitucional** pela alínea a (Súmula 518/STJ; matéria constitucional é do RE).
- **Ementa colada sem cotejo analítico** na alínea c — inadmissão certa.
- **Não impugnar todos os fundamentos suficientes** do acórdão (Súmula 283/STF) — genérico demais atrai também a Súmula 284/STF.
- **Recurso errado contra a inadmissão na origem**: inadmissão comum → **agravo em recurso especial** (art. 1.042 CPC — ver skill `agravo-em-resp-re`); inadmissão fundada em precedente qualificado/repetitivo → **agravo interno** na origem (art. 1.030, § 2º, CPC). Trocar um pelo outro é fatal.
- **Efeito suspensivo presumido**: o REsp **não suspende** o acórdão (art. 995 CPC; art. 637 CPP, por paralelismo). Sobre execução da pena antes do trânsito em julgado, o STF assentou a vedação no julgamento das **ADCs 43, 44 e 54** (precedente notório) — mas confirme o estado atual da questão via agente `jurisprudencia-stj-stf` antes de afirmar na peça. Havendo risco, peça a tutela do art. 1.029, § 5º, do CPC — e avalie **HC** como via paralela para a liberdade.

## Checklist final

- [ ] Acórdão de **TJ/TRF** em única/última instância (não Turma Recursal — S. 203)?
- [ ] Vias ordinárias **esgotadas** (nada mais cabível na origem)?
- [ ] **Prequestionamento** demonstrado dispositivo por dispositivo (ou ficto — art. 1.025 CPC)? Se não: skill `embargos-prequestionamento` primeiro.
- [ ] Tese formulada como **questão de direito** (blindada contra S. 7)?
- [ ] Alínea(s) indicada(s) — **a** (violação) e/ou **c** (dissídio com cotejo analítico completo)?
- [ ] Fundamento constitucional autônomo no acórdão → **RE simultâneo** (S. 126)?
- [ ] **15 dias corridos** (art. 798 CPP c/c art. 1.003, § 5º, CPC) — em dobro se Defensoria; feriado local comprovado na interposição?
- [ ] **Procuração/substabelecimento nos autos** (S. 115/STJ — recurso inexistente sem ela)?
- [ ] Interposição à **presidência/vice do tribunal a quo** + razões ao **STJ**, em folhas separadas?
- [ ] Todos os fundamentos suficientes do acórdão **impugnados** (S. 283/284)?
- [ ] Pedido com **conhecimento + provimento** (reforma ou cassação) e subsidiárias de pena/regime?
- [ ] Precedentes citados **pesquisados e verificados** (nunca de memória); pendências marcadas **[NÃO VERIFICADO]**?
- [ ] Necessita **efeito suspensivo** (art. 1.029, § 5º, CPC) ou HC paralelo para a liberdade?

## Apoie-se em

- **Best-practice `recurso-criminal`** — teoria geral dos recursos, dialeticidade e panorama até a revisão criminal; esta skill a estende para a instância extraordinária.
- **Best-practice `pesquisa-jurisprudencial`** — estratégia de busca (acervo local antes da web) para paradigmas do dissídio e precedentes de mérito.
- **Best-practice `verificacao-citacoes`** — Citation Gate obrigatório: nenhum julgado citado sem confirmação.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes do STJ/STF e paradigmas da alínea c.
- **Agente `lei-e-sumula`** — conferência de dispositivos legais e súmulas (inclusive o estágio da regulamentação da relevância — EC 125/2022).
- **Agente `verificador-citacoes`** — validação final de toda citação; o que não confirmar sai da peça ou recebe **[NÃO VERIFICADO]**.
- **Squad `recurso-criminal`** — pipeline completo (análise do acórdão → pesquisa → redação → revisão → Citation Gate) quando o caso merecer o fluxo orquestrado.
- **Skill `embargos-prequestionamento`** — etapa prévia quando o acórdão for omisso sobre a tese federal (S. 211 / art. 1.025 CPC).
- **Skill `agravo-em-resp-re`** — etapa seguinte se a presidência do tribunal a quo inadmitir o REsp (art. 1.042 CPC).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
