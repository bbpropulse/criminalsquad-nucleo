---
name: acusacao-recurso-especial-extraordinario-mp
description: >-
  Use ao elaborar, redigir ou revisar RECURSO ESPECIAL (STJ) ou EXTRAORDINÁRIO (STF) interposto pelo
  POLO ACUSATÓRIO — Ministério Público ou assistente de acusação — contra acórdão que absolveu,
  desclassificou, decotou qualificadora, reduziu pena contra legem ou reconheceu prescrição
  indevida. Foco na perspectiva da acusação: prequestionamento, dissídio jurisprudencial (cotejo
  analítico), violação de lei federal (REsp) e de… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-recurso-especial-extraordinario-mp"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-recurso-especial-extraordinario-mp", "acusacao recurso", "especial extraordinario"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Recurso Especial e Extraordinário pelo Polo Acusatório (REsp — art. 105, III, CF · RE — art. 102, III, CF)

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

> ⚖️ **SKILL DO POLO ACUSATÓRIO.** Esta skill serve **exclusivamente** a quem atua na acusação — **Ministério Público** (custos legis ou titular da ação penal pública) ou **assistente de acusação** (art. 268 do CPP, representando o ofendido). **Não se aplica à defesa** — para o recurso extraordinário defensivo, use as skills `recurso-especial-criminal` e `recurso-extraordinario-criminal`. O chefe-roteador **deve conferir o polo do usuário** (campo `company.md` → tipo/polo) **antes de sugerir esta skill**: se o escritório é de defesa criminal, esta skill não é a indicada.

Esta skill orienta a construção do **Recurso Especial (STJ)** e do **Recurso Extraordinário (STF)** interpostos **pela acusação** contra acórdão de segundo grau que, na ótica do MP ou do assistente, aplicou mal a lei — tipicamente **absolvição, desclassificação, decote de qualificadora, redução de pena contra legem ou reconhecimento indevido de prescrição/extinção da punibilidade**. O eixo é a **perspectiva acusatória**: o que muda quando é a acusação — e não a defesa — que bate à porta da instância extraordinária.

> **Lição central:** o recurso acusatório extraordinário é **estruturalmente mais difícil** que o defensivo, por três razões: (1) a **Súmula 7/STJ** e a **Súmula 279/STF** (vedação ao reexame de prova) são o principal cemitério do recurso da acusação, que quase sempre quer "reavaliar o conjunto probatório" para restabelecer a condenação; (2) contra decisão do **Tribunal do Júri** há o obstáculo adicional da **soberania dos veredictos** (CF, art. 5º, XXXVIII, "c"); (3) o recurso acusatório **não tem prazo em dobro** — o MP não goza da dobra no processo penal. Formule sempre a tese como **questão de direito** (qualificação jurídica dos fatos já assentados no acórdão), nunca como pedido de reexame de prova.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 102, III, e 105, III, da CF; do art. 26 e seguintes da **Lei 8.038/90** (arts. 26-29 **revogados** pelo CPC/2015 — não fundamente prazo neles); e dos arts. 1.029 a 1.041 do CPC (aplicáveis por analogia — art. 3º do CPP). O filtro da **relevância da questão federal no REsp** (EC 125/2022) e a **repercussão geral no RE** têm regulamentação em evolução — confira o estágio e toda súmula/tema/precedente via a skill `jurisprudencia-stj-stf` antes de fundamentar a peça.

## Base legal

- **CF, art. 105, III, "a", "b" e "c"** — cabimento do **REsp** (STJ): acórdão de TJ/TRF em única/última instância que **(a)** contrariar tratado ou lei federal, ou negar-lhes vigência; **(b)** julgar válido ato de governo local contestado em face de lei federal; **(c)** der à lei federal interpretação **divergente** da de outro tribunal.
- **CF, art. 105, §§ 2º e 3º (EC 125/2022)** — filtro da **relevância da questão federal**, **presumida nas ações penais** (art. 105, § 3º, I). Confira a regulamentação via `jurisprudencia-stj-stf`.
- **CF, art. 102, III, "a", "b", "c" e "d"** — cabimento do **RE** (STF): acórdão que **(a)** contrariar dispositivo da Constituição; **(b)** declarar inconstitucional tratado ou lei federal; **(c)** julgar válida lei/ato local contestado em face da Constituição; **(d)** julgar válida lei local contestada em face de lei federal.
- **CF, art. 102, § 3º** — **repercussão geral** como requisito de admissibilidade do RE (Lei 11.418/2006; arts. 1.035-1.036 do CPC).
- **CPC, arts. 1.029 a 1.041** — procedimento do REsp/RE, aplicável ao penal por analogia (art. 3º do CPP): forma da petição, admissibilidade na origem (art. 1.030), prequestionamento ficto (art. 1.025), efeito suspensivo (art. 1.029, § 5º), repetitivos/repercussão geral (arts. 1.036-1.041).
- **CPP, art. 798** — em matéria criminal os prazos correm em **dias corridos** (não incide o art. 219 do CPC).
- **CPP, art. 577, parágrafo único** — falta de interesse recursal: ninguém recorre contra decisão que não o prejudica. O MP e o assistente só recorrem do que lhes é desfavorável.
- **CPP, arts. 268 a 271** — **assistente de acusação**: legitimidade recursal supletiva (recorre quando o MP não recorre ou recorre parcialmente); prazo próprio do art. 598, parágrafo único, do CPP na apelação — na instância extraordinária, o prazo é o comum (15 dias corridos), contado da intimação.

## O que muda no recurso do polo acusatório

| Ponto | Defesa | Acusação (esta skill) |
|---|---|---|
| **Reexame de prova** | Também barrada, mas a defesa costuma ter tese de direito pronta | **Principal armadilha** — o MP quer restabelecer condenação e escorrega na S. 7/STJ e S. 279/STF |
| **Prazo em dobro** | Defensoria: **sim** (LC 80/94) | **MP: não** há dobra no penal; assistente: prazo comum |
| **Procuração** | Advogado precisa (S. 115/STJ) | **MP dispensa**; **assistente** atua por advogado com procuração nos autos |
| ***Reformatio in pejus*** | Protege o réu (art. 617 CPP) | **Só existe recurso da acusação** para agravar — sem recurso do MP/assistente, a pena não sobe |
| **Júri** | Ataca a condenação | **Soberania dos veredictos** (art. 5º, XXXVIII, "c") limita reforma de mérito da absolvição pelo Conselho |
| **Legitimidade** | Réu/defensor | MP (titular) **e** assistente (supletiva — arts. 271 e 598 CPP) |

## Cabimento e pressupostos (comuns, com o recorte acusatório)

| Pressuposto | Conteúdo | Armadilha acusatória |
|---|---|---|
| **Acórdão de TJ/TRF, única/última instância** | Vias ordinárias esgotadas | Turma Recursal de JECRIM **não é tribunal** — não cabe REsp (**Súmula 203/STJ**); o caminho é RE ou HC. Cabendo embargos infringentes na origem, o REsp/RE é prematuro |
| **Prequestionamento** | A tese federal/constitucional deve ter sido **efetivamente enfrentada** no acórdão | **Súmula 211/STJ** / **Súmula 282 e 356/STF**: sem embargos de declaração para prequestionar, o recurso não passa. Antes de recorrer, opor **embargos de declaração** (art. 619 CPP) para forçar o pronunciamento |
| **Questão de direito (não de prova)** | REsp/RE revaloriza a **qualificação jurídica** dos fatos já assentados | **Súmula 7/STJ** (REsp) e **Súmula 279/STF** (RE) — o maior filtro do recurso acusatório. "Absolveu contra a prova" = reexame = inadmissível. Reformule como erro de **subsunção** |
| **Prazo: 15 dias corridos** | Art. 1.003, § 5º, CPC c/c art. 798 CPP | **MP não tem prazo em dobro** no penal. Assistente: prazo comum, da sua intimação |
| **Regularidade formal / dialeticidade** | Petição com interposição + razões; dispositivo violado indicado; **todos** os fundamentos suficientes do acórdão atacados | **Súmula 284/STF** (fundamentação deficiente) e **Súmula 283/STF** (fundamento suficiente não impugnado derruba o recurso) |
| **Preparo** | Ação penal pública: **não há** | MP e assistente na ação pública não recolhem preparo |

### Legitimidade e interesse do assistente de acusação

- O **assistente** recorre de forma **supletiva**: quando o MP **não** recorre, ou recorre **parcialmente** (Súmula 210/STF admite a legitimidade do assistente; confira via `jurisprudencia-stj-stf`).
- **Interesse recursal do assistente:** a jurisprudência historicamente restringiu o interesse do assistente ao **quantum da pena / condenação** (viabilizar a reparação civil), mas há evolução ampliando-o à própria condenação. **[NÃO VERIFICADO]** o exato alcance atual — confira os precedentes vigentes do STJ/STF via `jurisprudencia-stj-stf` antes de afirmar na peça.
- Prazo do assistente: se **habilitado**, conta-se da sua intimação; se **não habilitado**, da intimação do MP (regra do art. 598, parágrafo único, do CPP na apelação, aplicada por analogia à instância extraordinária — confira).

## REsp × RE — mapear os fundamentos do acórdão ANTES de escolher

O erro capital do recorrente é escolher o recurso errado. **Leia o acórdão e classifique cada fundamento**:

```
Fundamento do acórdão que se quer atacar:
 ├── Viola LEI FEDERAL (CP, CPP, LEP, lei especial)? ......... → REsp (STJ), alínea "a"
 ├── Diverge de interpretação de OUTRO tribunal? ............. → REsp (STJ), alínea "c" (cotejo analítico)
 ├── Viola a CONSTITUIÇÃO diretamente (não reflexa)? ......... → RE (STF), alínea "a" + repercussão geral
 └── Há fundamento CONSTITUCIONAL e INFRACONSTITUCIONAL,
     cada um suficiente por si? ............................... → RE E REsp SIMULTÂNEOS (Súmula 126/STJ)
```

- **Ofensa reflexa** à Constituição (a norma constitucional só seria violada por via da lei) **não** rende RE (**Súmula 636/STF**) — no crime, a maioria das teses acusatórias é infraconstitucional (REsp), não RE.
- **Súmula 126/STJ:** se o acórdão tem fundamento constitucional autônomo e suficiente, é **obrigatório** interpor RE junto com o REsp, sob pena de inadmissão do REsp.

## Teses típicas do polo acusatório (formuladas como questão de direito)

- **Restabelecer a condenação** absolvida em 2º grau: sustentar que o acórdão, **partindo dos mesmos fatos assentados**, aplicou **critério jurídico errado** (ex.: exigiu prova além do padrão legal; aplicou indevidamente o *in dubio pro reo* a fato incontroverso; reconheceu excludente sem suporte típico) — **subsunção**, não reexame. Cuidado: se a absolvição for por **insuficiência de prova**, a via extraordinária é praticamente vedada (S. 7/S. 279).
- **Afastar desclassificação** indevida (ex.: de homicídio doloso para culposo; de roubo para furto) sustentando **erro na qualificação jurídica** dos fatos descritos no acórdão — dolo eventual, animus, elementar do tipo.
- **Restabelecer qualificadora / causa de aumento** decotada: violação do dispositivo que a prevê, a partir da moldura fática do próprio acórdão.
- **Corrigir dosimetria a favor da acusação:** fração de aumento não aplicada; circunstância judicial desconsiderada; reincidência afastada contra legem; regime fixado abaixo do legal. Dosimetria é **matéria de direito** — terreno fértil no REsp, desde que sem revolver prova.
- **Afastar prescrição / extinção da punibilidade** reconhecida com marco errado: erro de contagem, marco interruptivo ignorado (art. 117 do CP), termo inicial equivocado — tese puramente de direito, das mais férteis para a acusação.
- **Nulidade da absolvição por error in procedendo:** cerceamento da acusação, indeferimento de prova essencial, quesitação viciada no júri em prejuízo da acusação — pede-se **cassação/anulação** e devolução, não a condenação direta.

## Dissídio jurisprudencial (REsp, alínea "c") — requisitos próprios

Muito útil à acusação quando o TJ diverge de outro tribunal sobre a mesma tese de direito (ex.: alcance de qualificadora, marco prescricional).

1. **Acórdãos de tribunais diversos** (STJ × TJ, TJ × TJ, TRF × TJ). Divergência **interna** do mesmo tribunal não serve (**Súmula 13/STJ**).
2. **Prova da divergência**: certidão, cópia ou citação de repositório oficial/credenciado (art. 1.029, § 1º, CPC).
3. **Cotejo analítico**: transcrever os trechos que configuram o dissídio, demonstrar a **similitude fática** e a **solução jurídica distinta**. Ementa colada sem cotejo = inadmissão certa.
4. Paradigma **superado** pela jurisprudência atual do STJ atrai a **Súmula 83/STJ** (aplicável às alíneas "a" e "c").

> **Localização de paradigmas:** pesquise via `jurisprudencia-stj-stf` e submeta tudo ao Citation Gate. **Nunca** preencha o cotejo com número de julgado de memória.

## Repercussão geral (RE — art. 102, § 3º, CF)

- É **preliminar formal e obrigatória** no RE: em capítulo próprio, demonstrar a relevância **econômica, política, social ou jurídica** e a **transcendência** da questão constitucional (que ultrapassa o interesse das partes). A ausência dessa preliminar é causa de inadmissão.
- Verificar se a tese constitucional já tem **tema de repercussão geral** julgado ou pendente — se pendente, o RE pode ficar **sobrestado**; se já julgado em sentido contrário, o RE tende à inadmissão. Confira os temas via `jurisprudencia-stj-stf`.

## Obstáculo específico: recurso acusatório contra decisão do Tribunal do Júri

Quando o acórdão recorrido confirma **absolvição pelo Conselho de Sentença**, incide a **soberania dos veredictos** (CF, art. 5º, XXXVIII, "c"):

- O quesito genérico de absolvição (art. 483, § 2º, CPP) permite ao jurado absolver por **clemência / íntima convicção**, sem declarar motivo. A instância extraordinária **não substitui** o veredicto por convicção própria.
- A via acusatória contra o júri, em regra, é a **apelação por decisão manifestamente contrária à prova dos autos** (art. 593, III, "d", CPP), que só autoriza **um novo júri** — não a condenação direta. Levar isso a REsp/RE esbarra na soberania e no reexame de prova.
- **Espaço legítimo do recurso extraordinário acusatório no júri:** vícios **de direito** — nulidade da sessão, quesitação viciada em prejuízo da acusação, error in procedendo — e **não** o mérito da absolvição pelos jurados. Formule a tese como **nulidade/anulação**, jamais como pedido de o tribunal superior condenar em lugar do júri. **Confirme o alcance atual** dessa jurisprudência via `jurisprudencia-stj-stf`.

## Estrutura forense da peça — petição bipartida (REsp e RE têm a mesma arquitetura)

Não há juízo de retratação; as **razões acompanham a interposição** desde logo (art. 1.029 CPC).

### Primeira parte — Interposição (à presidência/vice-presidência do tribunal a quo)

- **Endereçamento:** `Excelentíssimo(a) Senhor(a) Desembargador(a) Presidente (ou Vice-Presidente) do Tribunal de Justiça do Estado de [...]` (ou TRF da [N]ª Região). **Consulte o regimento** — a admissibilidade costuma ser do Vice-Presidente.
- **Recorrente:** `o Ministério Público do Estado de [...]` (ou `[NOME], assistente de acusação habilitado nos autos, por seu advogado — procuração no evento [...]`).
- **Tempestividade:** `no prazo de 15 (quinze) dias, contados em dias corridos na forma do art. 798 do CPP, c/c o art. 1.003, § 5º, do CPC, aplicável por força do art. 3º do CPP`. (MP: sem dobra.)
- **Verbo:** `interpor RECURSO ESPECIAL` (art. 105, III, "a" e/ou "c", CF) **e/ou** `RECURSO EXTRAORDINÁRIO` (art. 102, III, "a", CF), com as razões anexas que integram a petição.
- **Requerimentos:** intimação do recorrido (a defesa) para **contrarrazões em 15 dias** (art. 1.030 CPC); juízo positivo de admissibilidade; remessa dos autos ao STJ/STF.

### Segunda parte — Razões (ao STJ ou ao STF, em folha própria)

- Cabeçalho: `Razões de Recurso Especial` (ou Extraordinário). `Recorrente: Ministério Público / Assistente de Acusação` · `Recorrido: [réu]`.
- Endereçamento: `Colendo Superior Tribunal de Justiça` (matéria penal → **5ª e 6ª Turmas / 3ª Seção**) ou `Excelso Supremo Tribunal Federal`.

**I — Síntese dos fatos e do processado:** imputação, sentença, acórdão recorrido e o que decidiu (a absolvição/desclassificação/decote/prescrição que se ataca), embargos de declaração e desfecho.

**II — Do cabimento e da admissibilidade** (enfrentar filtro por filtro):
1. **Esgotamento** — acórdão de última instância do TJ/TRF; nada mais cabível na origem.
2. **Tempestividade** — 15 dias corridos (art. 798 CPP); sem dobra para o MP.
3. **Prequestionamento** — indicar **onde** (página/trecho) cada dispositivo foi enfrentado; se veio dos embargos, mencioná-los; se ficto, art. 1.025 CPP c/c art. 619 CPP.
4. **Questão exclusivamente de direito** — demonstrar, com os fatos **tal como postos no acórdão**, que **não** se pede reexame de prova (antídoto expresso contra S. 7/STJ e S. 279/STF). **Esta é a seção decisiva do recurso acusatório.**
5. **Relevância presumida** (REsp, ação penal — art. 105, § 3º, I, CF) **ou repercussão geral** (RE, capítulo próprio).

**III — Da violação à lei federal (REsp, alínea "a") / à Constituição (RE, alínea "a"):** para **cada dispositivo** — o que ele determina → como o acórdão o contrariou → qual a interpretação correta. Uma subseção por tese, sempre atacando o fundamento específico do acórdão.

**IV — Do dissídio jurisprudencial (REsp, alínea "c", se invocada):** paradigma com fonte oficial + **cotejo analítico** completo.

**V — Dos pedidos** (binômio **conhecimento + provimento**):
```
Diante do exposto, requer:
a) a admissão do recurso na origem e, no Tribunal Superior, o seu conhecimento;
b) no mérito, o provimento para [restabelecer a condenação/qualificadora, corrigir a
   dosimetria, afastar a desclassificação, afastar a prescrição reconhecida], por
   correta aplicação do art. [...] — a partir da moldura fática já assentada no acórdão;
   OU [cassar/anular o acórdão e devolver os autos ao tribunal de origem — quando a
   tese for de error in procedendo, sem pedir a condenação direta pelo tribunal superior].
```

**Fechamento:** `Termos em que pede deferimento. Local e data.` (MP: assinatura do Promotor/Procurador; assistente: advogado + OAB.)

## Erros comuns e pegadinhas (foco acusatório)

- **Pedir reexame de prova** disfarçado de tese de direito — o recurso que quer "reavaliar o conjunto probatório" para condenar morre na **S. 7/STJ** e **S. 279/STF**. Só sobrevive o erro de **qualificação jurídica**.
- **Recorrer da absolvição por insuficiência de prova** — praticamente inviável na via extraordinária; a via própria era a apelação (art. 593, III, "b" ou "d", CPP) no segundo grau.
- **Pular os embargos de declaração** — sem prequestionamento, incide a S. 211/STJ (ou S. 282/356/STF). Ordem: acórdão omisso → embargos → REsp/RE.
- **Esquecer o RE simultâneo** quando há fundamento constitucional autônomo (**S. 126/STJ**).
- **Confundir REsp e RE** — matéria infraconstitucional é STJ; violação **reflexa** à Constituição não rende RE (**S. 636/STF**).
- **Endereçamento errado** — a interposição vai à **presidência/vice do tribunal a quo** (art. 1.029 CPC), nunca direto ao STJ/STF; só as **razões** falam ao tribunal superior.
- **Contar prazo em dias úteis** — no crime é **corrido** (art. 798 CPP). **MP não tem dobra.**
- **Pretender condenação direta contra veredicto do júri** — esbarra na **soberania dos veredictos**; o máximo é anular e devolver a novo júri (e ainda assim por vício de direito).
- **Assistente sem procuração / sem interesse recursal** — confira a habilitação e o alcance atual do interesse do assistente na instância extraordinária (**[NÃO VERIFICADO]** — via `jurisprudencia-stj-stf`).
- **Ementa colada sem cotejo analítico** na alínea "c" — inadmissão certa.
- **Não impugnar todos os fundamentos suficientes** do acórdão (**S. 283/S. 284/STF**).
- **Recurso errado contra a inadmissão na origem** — inadmissão comum → **agravo em REsp/RE** (art. 1.042 CPC, skill `agravo-em-resp-re`); inadmissão fundada em precedente qualificado → **agravo interno** (art. 1.030, § 2º, CPC). Trocar um pelo outro é fatal.

## Checklist final

- [ ] **Polo conferido** — o usuário atua na acusação (MP/assistente)? (Se defesa, esta skill não é a indicada.)
- [ ] Acórdão de **TJ/TRF** em única/última instância (não Turma Recursal — S. 203)?
- [ ] Vias ordinárias **esgotadas**?
- [ ] **Prequestionamento** demonstrado dispositivo por dispositivo (embargos opostos, se necessário)?
- [ ] Tese formulada como **questão de direito / subsunção** — blindada contra S. 7/STJ e S. 279/STF?
- [ ] Recurso **correto** escolhido: infraconstitucional → REsp; constitucional direto → RE; ambos suficientes → **simultâneos** (S. 126)?
- [ ] **Repercussão geral** em capítulo próprio (se RE)?
- [ ] **Dissídio** (alínea "c") com **cotejo analítico** completo, se invocado?
- [ ] Contra o **júri**: pedido limitado a **anulação/nulidade de direito** (respeitada a soberania dos veredictos), não condenação direta?
- [ ] **15 dias corridos** (art. 798 CPP) — **sem dobra** para o MP; assistente com prazo/intimação corretos?
- [ ] **Assistente**: habilitação, procuração nos autos e interesse recursal conferidos (**[NÃO VERIFICADO]** via `jurisprudencia-stj-stf`)?
- [ ] Todos os fundamentos suficientes do acórdão **impugnados** (S. 283/284)?
- [ ] Pedido com **conhecimento + provimento** (restabelecer/corrigir OU cassar e devolver)?
- [ ] Precedentes, súmulas e temas **pesquisados e verificados** via `jurisprudencia-stj-stf` (nunca de memória); pendências marcadas **[NÃO VERIFICADO]**?

## Apoie-se em

- **Skill `recurso-especial-criminal`** e **`recurso-extraordinario-criminal`** — a arquitetura processual detalhada do REsp/RE (pressupostos, admissibilidade, procedimento); esta skill recorta a **ótica acusatória** por cima delas.
- **Skill `assistente-acusacao`** — legitimidade, habilitação e limites de atuação do assistente antes de recorrer.
- **Skill `agravo-em-resp-re`** — etapa seguinte se a presidência do tribunal a quo inadmitir o recurso (art. 1.042 CPC).
- **Skill `jurisprudencia-stj-stf`** — Citation Gate obrigatório: nenhum precedente, súmula ou tema citado sem confirmação; conferência do estágio da relevância (EC 125/2022) e da repercussão geral.
- **Skill `alegacoes-finais-acusacao`** / **`razoes-apelacao-acusacao`** — coerência da tese acusatória construída nas fases anteriores, retomada na instância extraordinária.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Toda peça produzida é hipótese a confirmar; a revisão final pelo membro do Ministério Público ou pelo advogado do assistente é obrigatória antes de protocolar.
- **Ética por polo.** No **Ministério Público**, observância do regime do **CNMP** e da LC 75/93 / Lei 8.625/93 (Lei Orgânica) — atuação com objetividade, buscando a correta aplicação da lei, não a condenação a qualquer custo (o MP é também custos legis e pode, inclusive, opinar pela absolvição). No **assistente de acusação**, o advogado observa o **Estatuto da OAB** e o **Provimento 205/2021** do CFOAB; a atuação é vinculada ao interesse legítimo do ofendido (reparação e correta aplicação da pena), sem excessos.
- **Verificação de citações inegociável.** Nenhuma súmula, tema, informativo ou número de acórdão entra na peça sem passar pela skill `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência inventada por IA. O que não se confirmar recebe **[NÃO VERIFICADO]** ou sai da peça.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
