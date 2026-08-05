---
name: agravo-em-resp-re
description: >-
  Use ao elaborar, redigir, estruturar ou revisar o AGRAVO EM RECURSO ESPECIAL (AREsp) e o AGRAVO EM
  RECURSO EXTRAORDINÁRIO (ARE) no processo penal brasileiro — recurso que ataca a decisão do
  presidente ou vice-presidente do tribunal de origem que INADMITE o REsp/RE (art. 1.042 do CPC c/c
  art. 3º do CPP). Gatilhos: agravo em recurso especial, agravo em recurso extraordinário, AREsp,
  ARE, agravo do art. 1.042, agravo de… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-agravo-em-resp-re"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["agravo-em-resp-re", "agravo resp"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Agravo em Recurso Especial e em Recurso Extraordinário (AREsp / ARE)

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

Esta skill orienta a construção do **Agravo em Recurso Especial (AREsp)** e do **Agravo em Recurso Extraordinário (ARE)** no processo penal — o recurso do **art. 1.042 do CPC**, aplicado ao processo penal por força do **art. 3º do CPP**, contra a decisão que **inadmite** o REsp/RE na origem. É o **desdobramento quase automático** do recurso excepcional: a maioria esmagadora dos REsp/RE criminais é barrada no juízo de admissibilidade do tribunal de origem, e é o agravo que leva a discussão ao STJ/STF. Serve à defesa e, com os mesmos fundamentos técnicos, ao MP e à Defensoria.

> Para a elaboração do **REsp em si** (hipóteses do art. 105, III, da CF, prequestionamento e Súmulas-óbice), **ver skill `recurso-especial-criminal`**; para o **RE** (art. 102, III, da CF, repercussão geral), aplica-se a mesma lógica bipartida, adaptados os fundamentos constitucionais. Esta skill NÃO repete aquele conteúdo; aqui o objeto é a peça que ataca a **decisão de inadmissão**.

## O instituto e a base legal

- **Art. 1.042, caput, CPC:** cabe agravo contra decisão do presidente ou do vice-presidente do tribunal recorrido que inadmitir recurso extraordinário ou recurso especial, **salvo** quando fundada na aplicação de entendimento firmado em **repercussão geral** ou em **recursos repetitivos**.
- **Art. 3º CPP:** admite a aplicação analógica/subsidiária — é a ponte que traz o agravo do CPC para o processo penal.
- **Art. 1.030 CPC:** desenha o juízo de admissibilidade bipartido na origem e define **qual recurso cabe contra cada tipo de decisão denegatória** (ver tabela abaixo).
- Nomenclatura: **AREsp** é a classe processual no STJ; **ARE**, no STF. A peça é uma só por recurso inadmitido.

## Cabimento — o divisor de águas com o agravo interno

**Antes de redigir, classifique o fundamento da inadmissão.** Errar aqui é o erro mais grave da peça:

| Fundamento da decisão do presidente/vice (art. 1.030 CPC) | Recurso cabível | Destino |
|---|---|---|
| Juízo de admissibilidade "comum" negativo (art. 1.030, V) — ex.: Súmula 7/STJ, falta de prequestionamento, fundamentação deficiente, intempestividade | **Agravo em REsp/RE** (art. 1.042, c/c art. 1.030, § 1º) | STJ / STF |
| REsp/RE contrário a entendimento firmado em **repetitivos** ou RE em tema **sem repercussão geral** / contrário a RG (art. 1.030, I) | **Agravo interno** (art. 1.030, § 2º, c/c art. 1.021 CPC) | Órgão colegiado do **próprio tribunal de origem** |
| Sobrestamento indevido do recurso (art. 1.030, III) | **Agravo interno** (art. 1.030, § 2º) | Tribunal de origem |

> **Decisão com dupla fundamentação (capítulos mistos):** se um capítulo foi barrado por óbice "comum" (S. 7) e outro por repetitivo, podem ser exigidos **os dois recursos simultaneamente** — o AREsp contra o capítulo do inciso V e o agravo interno contra o capítulo do inciso I. A jurisprudência trata a troca de um pelo outro como **erro grosseiro, sem fungibilidade** — para o estado atual desse entendimento, pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar.

## Prazo e processamento

- **Prazo: 15 dias** (art. 1.003, § 5º, CPC), tanto para interpor quanto para responder.
- **Em matéria penal, a contagem é em dias CORRIDOS** — art. 798 CPP (prazos contínuos e peremptórios), e não em dias úteis como no processo civil. STJ e STF consolidaram o prazo de 15 dias corridos para o agravo criminal após o CPC/2015, superando o prazo de 5 dias da **Súmula 699/STF** (editada sob a Lei 8.038/90). Para o precedente atual que fixa essa contagem, pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`.
- **Dobra de prazo:** a **Defensoria Pública** tem intimação pessoal e prazo **em dobro** também no processo penal (LC 80/94, arts. 44, I, 89, I, e 128, I). O **MP não** tem prazo em dobro no processo penal (o art. 180 do CPC não se aplica ao penal).
- **Nos próprios autos:** o agravo do art. 1.042 não é mais "agravo de instrumento" — **não há traslado de peças nem formação de instrumento**; sobe nos autos do próprio processo.
- **Sem preparo:** independe do pagamento de custas e despesas postais (art. 1.042, § 2º).
- **Contrarrazões:** o agravado é intimado de imediato para responder em 15 dias (art. 1.042, § 3º).
- **Retratação e remessa:** não havendo retratação do presidente/vice, o agravo é **remetido ao tribunal superior** (art. 1.042, § 4º). A origem **não faz juízo de admissibilidade do agravo** — não pode "inadmitir o agravo"; a remessa é devida.
- **Interposição conjunta de REsp + RE inadmitidos:** deve-se interpor **um agravo para cada recurso** (art. 1.042, § 6º — confira a redação vigente dos §§ 6º a 8º via agente `lei-e-sumula` antes de citar na peça). A remessa segue primeiro ao STJ.
- **Julgamento conjunto:** o agravo pode ser julgado junto com o REsp/RE, assegurada sustentação oral nesse caso (art. 1.042, § 5º) — em regra, no julgamento isolado do agravo **não há** sustentação oral.

## O coração da técnica — impugnar TODOS os fundamentos denegatórios

Esta é a razão de existir da peça e a causa nº 1 de não conhecimento:

- **Art. 932, III, CPC:** o relator não conhecerá de recurso que **não tenha impugnado especificamente** os fundamentos da decisão recorrida.
- **Súmula 182/STJ:** é inviável o agravo que **deixa de atacar especificamente os fundamentos da decisão agravada** (editada sob o CPC/73, aplicada aos agravos atuais).
- **Súmula 287/STF:** nega-se provimento ao agravo quando a deficiência na sua fundamentação não permitir a exata compreensão da controvérsia.
- **Súmula 123/STJ:** a decisão que admite ou não o REsp deve ser fundamentada — se a inadmissão for genérica ou não enfrentar um dos recursos/capítulos, isso também é matéria do agravo.

**Método (dialeticidade fundamento a fundamento — ver best-practice `recurso-criminal`):** liste cada fundamento da decisão denegatória e abra **um capítulo do agravo para cada um**, demonstrando por que o óbice não se aplica. Mapa dos ataques típicos:

| Óbice invocado na inadmissão | Linha de ataque no agravo |
|---|---|
| **Súmula 7/STJ** (reexame de prova) | Demonstrar que a tese é de **revaloração jurídica de fatos incontroversos** (qualificação jurídica, critérios de dosimetria, legalidade da prova), não de reexame do acervo probatório |
| Falta de **prequestionamento** (Súmulas 282 e 356/STF; 211/STJ) | Apontar onde o acórdão decidiu a matéria; se opostos embargos, invocar o **prequestionamento ficto do art. 1.025 CPC** c/c alegação de violação ao art. 619 CPP |
| **Súmula 83/STJ** (acórdão conforme jurisprudência do STJ) | Fazer o *distinguishing* do caso ou demonstrar a superação/inaplicabilidade do entendimento invocado — com precedentes pesquisados via `jurisprudencia-stj-stf` |
| **Súmula 284/STF** (fundamentação deficiente do recurso) | Demonstrar que o REsp/RE indicou com clareza o dispositivo violado e o nexo com o acórdão |
| Ausência de **cotejo analítico** na divergência (art. 1.029, § 1º, CPC) | Demonstrar que o cotejo foi feito (similitude fática + soluções distintas), transcrevendo os trechos confrontados |
| **Intempestividade** do REsp/RE | Comprovar a tempestividade — feriado local deve estar comprovado nos autos (art. 1.003, § 6º, CPC) |

> **Não basta "reiterar as razões do REsp".** O agravo que apenas reproduz o recurso inadmitido, sem dialogar com a decisão denegatória, cai na Súmula 182/STJ. Reitera-se o REsp **ao final**, depois de desmontado cada óbice.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Petição de interposição**, dirigida ao **presidente ou vice-presidente do tribunal de origem** (quem proferiu a decisão de inadmissão); (2) **razões**, endereçadas ao **tribunal superior** (STJ ou STF). Uma folha para a interposição; folha seguinte para as razões — mesma lógica bipartida do RESE (ver skill `rese` para o paralelo).

### PRIMEIRA PARTE — Interposição

**Endereçamento:** `Excelentíssimo(a) Senhor(a) Desembargador(a) Presidente (ou Vice-Presidente) do Tribunal de Justiça do Estado de [...]` — ou do `Tribunal Regional Federal da [N]ª Região`. **Nunca** ao órgão que julgou a apelação, **nem** diretamente ao STJ/STF.

**Preâmbulo:**
- Nome do agravante + `já qualificado nos autos do Recurso Especial (ou Extraordinário) em epígrafe` (fase recursal — não requalificar).
- `por intermédio do(a) advogado(a) que ao final subscreve (procuração já nos autos)`
- `vem, respeitosamente, à presença de Vossa Excelência,`
- **Tempestividade:** `no prazo legal de 15 (quinze) dias, conforme art. 1.003, § 5º, do Código de Processo Civil (CPC), contados de forma contínua na forma do art. 798 do Código de Processo Penal (CPP),`
- Verbo **INTERPOR** + nome em caixa alta: `interpor AGRAVO EM RECURSO ESPECIAL (AREsp)` (ou `AGRAVO EM RECURSO EXTRAORDINÁRIO (ARE)`)
- Fundamento (**"forte no"** para não repetir "com fundamento"): `forte no art. 1.042 do CPC, aplicável por força do art. 3º do CPP,`
- `em face da r. decisão de inadmissão do recurso [especial/extraordinário] proferida por essa Presidência.`

**Requerimento de processamento:** `Requer o recebimento do agravo nos próprios autos, independentemente de preparo (art. 1.042, § 2º, do CPC), com a intimação do agravado para resposta (art. 1.042, § 3º) e, não havendo retratação, a remessa ao [Superior Tribunal de Justiça / Supremo Tribunal Federal] (art. 1.042, § 4º).`

**Fechamento:** `Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### SEGUNDA PARTE — Razões (em nova folha)

Cabeçalho: `Razões de Agravo em Recurso Especial` (ou `em Recurso Extraordinário`).
- `Agravante: [nome do cliente]`
- `Agravado: o Ministério Público` (na ação privada, o querelante; se o agravo for do MP, inverte-se)

Endereçamento ao tribunal superior:
- **AREsp:** `Colendo Superior Tribunal de Justiça — Eminente Ministro(a) Relator(a)`
- **ARE:** `Excelso Supremo Tribunal Federal — Eminente Ministro(a) Relator(a)`

**I — Dos Fatos e do processamento:** 2-3 frases — condenação, acórdão da apelação, interposição do REsp/RE, decisão de inadmissão (identificar **cada fundamento** denegatório). Ex.: *"Interposto recurso especial pela alínea 'a', a douta Vice-Presidência inadmitiu-o sob dois fundamentos: incidência da Súmula 7/STJ e ausência de prequestionamento. Nenhum dos óbices subsiste, como se demonstra."*

**II — Do Direito:**
1. **Do cabimento e da tempestividade** — decisão de inadmissão fundada no art. 1.030, V, CPC → agravo do art. 1.042 (§ 1º do art. 1.030); prazo de 15 dias corridos (art. 798 CPP).
2. **Da impugnação específica de cada fundamento da decisão agravada** — um subitem por óbice, na ordem em que aparecem na decisão (usar o mapa de ataques acima). Este é o núcleo da peça.
3. **Da reiteração das razões do recurso especial/extraordinário** — reproduzir em síntese as teses do REsp/RE (ver skill `recurso-especial-criminal`), requerendo o julgamento imediato do mérito recursal quando a matéria estiver madura (art. 1.042, § 5º, CPC).

**III — Dos Pedidos** (binômio **conhecimento + provimento**, adaptado ao destrancamento):
```
Diante do exposto, requer:
a) o conhecimento do agravo, porque tempestivo e porque impugna especificamente
   todos os fundamentos da decisão agravada (art. 932, III, do CPC);
b) o seu provimento, para afastar os óbices indicados e determinar o processamento
   (a "subida") do recurso especial/extraordinário;
c) sucessivamente, o conhecimento do agravo para, desde logo, julgar-se o próprio
   recurso especial/extraordinário, dando-se-lhe provimento para [tese principal
   do REsp/RE — ex.: redimensionar a pena; absolver; reconhecer a nulidade].
```

**Fechamento** padrão.

## Teses típicas da prática (defesa)

- **Dosimetria é matéria de direito:** a discussão sobre a **legalidade dos critérios** das três fases (art. 68 CP), fundamentação inidônea de vetoriais do art. 59 CP, fração de aumento/diminuição, regime inicial e substituição **não** esbarra na Súmula 7/STJ — é revaloração jurídica.
- **Prequestionamento ficto:** embargos de declaração opostos + alegação de violação ao **art. 619 CPP** no REsp → art. 1.025 CPC destrava o óbice do prequestionamento.
- **Qualificação jurídica dos fatos:** desclassificação, afastamento de qualificadora/majorante com base nos fatos **tal como postos no acórdão** — não é reexame de prova.
- **Nulidades processuais** (cadeia de custódia, reconhecimento do art. 226 CPP, quebra do sistema acusatório): a aferição da **legalidade** da prova é questão de direito.
- Para cada tese, **precedente atual é obrigatório na peça real:** pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar.

## Erros comuns e pegadinhas

- **Deixar um fundamento sem ataque** → não conhecimento (Súmula 182/STJ; art. 932, III, CPC). Se a decisão tem 3 óbices e o agravo ataca 2, morre inteiro.
- **Interpor AREsp quando cabia agravo interno** (óbice de repetitivo/repercussão geral — art. 1.030, I e § 2º) → **erro grosseiro, sem fungibilidade**, e o prazo do recurso correto terá escoado.
- **Contar o prazo em dias úteis** → intempestividade: em matéria penal são **15 dias corridos** (art. 798 CPP).
- **Endereçar ao STJ/STF ou à Câmara/Turma que julgou a apelação** → a petição vai ao **presidente/vice da origem**; só as razões falam com o tribunal superior.
- **"Reiterar integralmente o REsp" como única fundamentação** → viola a dialeticidade; primeiro se desmontam os óbices, depois se reitera.
- **Esquecer a comprovação de feriado local** que afetou a tempestividade do REsp — deve estar nos autos (art. 1.003, § 6º, CPC).
- **Confundir com o agravo regimental no tribunal superior:** contra decisão monocrática do relator **no STJ/STF em matéria criminal**, o agravo (interno/regimental) tem prazo de **5 dias** — art. 39 da Lei 8.038/90 —, não 15. São momentos e recursos distintos (ver skill `agravo-regimental`).
- **Advogado sem procuração nos autos** → na instância especial o recurso é tido por **inexistente** (Súmula 115/STJ). Confira via `jurisprudencia-stj-stf` o estado atual da possibilidade de saneamento (art. 76, § 2º, CPC) — e não conte com ela: junte a procuração antes de protocolar.
- **Interposição conjunta:** REsp e RE inadmitidos exigem **dois agravos autônomos** (um por recurso) — um só agravo "duplo" não conhece dos dois.
- **Admissão parcial:** se o REsp/RE subiu quanto a um capítulo e foi barrado quanto a outro, o capítulo inadmitido **exige agravo** — sobre o alcance atual da Súmula 528/STF nesse ponto, confira via agente `jurisprudencia-stj-stf` antes de deixar de recorrer.
- **Pedir sustentação oral no agravo isolado** — em regra não há; só no julgamento conjunto com o recurso (art. 1.042, § 5º).

## Checklist final

- [ ] Fundamento da inadmissão classificado (art. 1.030, V → **AREsp/ARE**; incisos I/III → **agravo interno**)?
- [ ] Capítulos mistos identificados (dois recursos simultâneos, se preciso)?
- [ ] Tempestividade: **15 dias corridos** (art. 1.003, § 5º, CPC c/c art. 798 CPP)? Em dobro se Defensoria (LC 80/94)?
- [ ] Procuração do subscritor nos autos (Súmula 115/STJ)?
- [ ] Peça **bipartida** (interposição ao presidente/vice da origem + razões ao STJ/STF)?
- [ ] Verbo **INTERPOR**; nome em caixa alta; **"forte no"** art. 1.042 CPC c/c art. 3º CPP?
- [ ] **TODOS** os fundamentos denegatórios listados e atacados um a um (Súmula 182/STJ)?
- [ ] Cada óbice enfrentado com a linha de ataque correta (S. 7 → revaloração; prequestionamento → 1.025 CPC/619 CPP; S. 83 → distinguishing)?
- [ ] Razões do REsp/RE reiteradas **após** a impugnação dos óbices (ver skill `recurso-especial-criminal`)?
- [ ] Pedido de conhecimento + provimento para **subida** e, sucessivamente, julgamento imediato do mérito?
- [ ] Precedentes pesquisados via `jurisprudencia-stj-stf` e validados por `verificador-citacoes` (nada citado de memória)?
- [ ] Um agravo **por recurso** inadmitido, na interposição conjunta?

## Lembretes finais

- **Ataca a decisão de inadmissão, não o acórdão** — o mérito do REsp/RE entra por reiteração, depois dos óbices.
- **Impugnação específica de todos os fundamentos** é a alma da peça — um óbice esquecido mata o agravo inteiro.
- **15 dias corridos** no penal (art. 798 CPP); Súmula 699/STF superada quanto aos 5 dias.
- **Nos próprios autos, sem preparo, sem juízo de admissibilidade do agravo na origem.**
- **AREsp/ARE ≠ agravo interno** (art. 1.030, § 2º) **≠ agravo regimental no STJ/STF** (5 dias, art. 39 da Lei 8.038/90).
- Toda peça é **rascunho para revisão humana** antes do protocolo.

## Apoie-se em

- **Best-practice `recurso-criminal`** — técnica recursal geral e **dialeticidade fundamento a fundamento**, que aqui é elevada a requisito de conhecimento.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes atuais (contagem do prazo em dias corridos, erro grosseiro AREsp × agravo interno, revaloração × Súmula 7, distinguishing para a Súmula 83).
- **Agente `verificador-citacoes`** — validação obrigatória de toda súmula/precedente antes do protocolo; marque [NÃO VERIFICADO] o que não confirmar.
- **Skill `recurso-especial-criminal`** (par desta onda) — o REsp/RE cuja inadmissão este agravo combate: hipóteses constitucionais, prequestionamento e Súmulas-óbice estão lá; a reiteração das razões no item II.3 remete àquele conteúdo.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
