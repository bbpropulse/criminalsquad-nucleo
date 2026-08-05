---
name: mapa-nulidades-processuais
description: >-
  Use ao varrer o processo INTEIRO em busca de nulidades e vícios processuais e organizá-los em um
  mapa acionável — diagnóstico estratégico global (da investigação ao julgamento) que cataloga cada
  vício, classifica (absoluta × relativa), fixa o momento de arguição e o risco de preclusão, testa
  o prejuízo (pas de nullité sans grief) e decide para onde levar cada um. É o nível ACIMA das peças
  de nulidade: não redige a peça —… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia, inquerito, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-mapa-nulidades-processuais"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["mapa-nulidades-processuais", "mapa nulidades", "nulidades processuais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Mapa Global de Nulidades Processuais (CPP, arts. 563-573)

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

Esta skill orienta a **varredura estratégica de todo o iter processual** — do inquérito/investigação ao julgamento e à execução — para **catalogar cada vício, classificá-lo, dimensionar risco de preclusão e prejuízo, e decidir onde e quando levantá-lo**. É o **diagnóstico global**: fotografa o processo inteiro, monta o mapa de nulidades priorizado e só então aponta qual peça redigir para cada frente (excedção, habeas corpus, resposta à acusação, preliminares de alegações finais, RESE, apelação, revisão criminal).

Não é peça. É o **nível estratégico acima das peças**: outras skills atacam **uma** nulidade específica já como petição; esta produz o **inventário completo e a priorização** de **todas** as nulidades do caso, evitando arguições natimortas e — sobretudo — a **preclusão** por perder o momento oportuno.

> **Lição central:** a nulidade certa alegada na hora errada é uma nulidade perdida. O que decide o destino de cada vício não é só *existir* — é a tríade **classificação (absoluta × relativa) + momento/preclusão + prejuízo**. Antes de escolher a tese, monte o mapa: um vício por linha, com essas três colunas preenchidas. Nulidade relativa não arguida no momento próprio **preclui**; nulidade absoluta pode ir mais longe, mas ainda pode topar com o filtro do prejuízo.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 563 a 573 do CPP e do art. 5º, LVI, da CF, e o estado atual da jurisprudência sobre cada rótulo (o que o STF/STJ hoje tratam como absoluto, relativo ou mera irregularidade **muda**, e a tese do prejuízo tem sido estendida até a nulidades historicamente absolutas). Nenhuma súmula, tema ou acórdão entra na peça sem passar pela skill `jurisprudencia-stj-stf`. Na dúvida entre classificar como absoluta ou relativa, **confirme caso a caso** — errar o rótulo compromete todo o roadmap.

## Base legal (âncoras)

- **CPP, art. 563** — *pas de nullité sans grief*: nenhum ato será declarado nulo se da nulidade não resultar **prejuízo** para a acusação ou a defesa. É o filtro que atravessa toda a matéria.
- **CPP, art. 564** — rol (exemplificativo) das causas de nulidade (incompetência, suspeição, ilegitimidade, ausência de fórmulas/termos essenciais, falta de intervenção do MP, do defensor, do assistente etc.).
- **CPP, art. 565** — ninguém pode arguir nulidade a que **deu causa** ou para que concorreu (nemo auditur / vedação ao venire contra factum proprium).
- **CPP, art. 566** — não se declara nulidade de ato que **não influiu** na apuração da verdade substancial ou na decisão da causa (reforço do prejuízo).
- **CPP, art. 567** — a **incompetência relativa** anula só os atos decisórios; os instrutórios podem ser ratificados.
- **CPP, art. 570** — a falta/nulidade de **citação, intimação ou notificação** fica sanada se o interessado comparece antes de o ato se consumar (comparecimento espontâneo convalida).
- **CPP, art. 571** — **momentos** de arguição das nulidades (o "calendário" da preclusão — decorar a lógica: cada nulidade tem sua janela).
- **CPP, art. 572** — nulidades **relativas** consideram-se sanadas se não arguidas em tempo, se o ato atingiu o fim ou se a parte aceitou os efeitos.
- **CPP, art. 573** — os atos cuja nulidade não for sanada serão renovados/retificados; a nulidade de um ato **contamina** os que dele diretamente dependam (efeito em cascata).
- **CF, art. 5º, LVI** — são **inadmissíveis** as provas obtidas por **meios ilícitos** (regime próprio, mais forte que o das nulidades: desentranhamento).
- **CPP, art. 157** — prova ilícita e **derivada** (frutos da árvore envenenada), com as ressalvas da **fonte independente** e da **descoberta inevitável**.

## Metodologia — a varredura em 5 passos

O mapa de nulidades não se constrói de memória: percorre-se o processo **fase por fase**, na ordem do iter, registrando cada vício e submetendo-o à tríade.

**Passo 1 — Percorrer o iter (linha do tempo do vício).** Varra, em ordem cronológica:
1. **Investigação/inquérito e medidas cautelares** — busca e apreensão, interceptação telefônica/telemática, quebra de sigilo, prisão, colaboração/acordo, cadeia de custódia do vestígio.
2. **Ação penal / recebimento da denúncia** — competência, condições da ação, aptidão da inicial (inépcia), justa causa, litispendência/coisa julgada.
3. **Instrução** — citação/intimações, contraditório e ampla defesa, presença/defesa técnica efetiva, ordem de oitivas, interrogatório (por último — art. 400), incomunicabilidade indevida, cerceamento de prova/perguntas indeferidas.
4. **Debates/alegações finais e sentença** — congruência (correlação acusação-sentença), fundamentação (CF art. 93, IX), emendatio/mutatio (arts. 383-384), nulidade por decisão além/aquém do pedido.
5. **Júri (se for o caso)** — pronúncia (excesso de linguagem), quesitação (arts. 482-491), incomunicabilidade dos jurados, plenitude de defesa. *(Para quesitos, ver `juri-quesitacao`.)*
6. **Recursos e execução** — intimação da defesa para recorrer, contrarrazões, e vícios que só se revelam no título executivo.

**Passo 2 — Classificar cada vício (absoluta × relativa × mera irregularidade).** Ver critérios abaixo.

**Passo 3 — Fixar o momento de arguição e o risco de preclusão.** Cruzar o vício com o art. 571 (janelas). Marcar em vermelho tudo que estiver com a janela **fechando** — é o que exige peça imediata.

**Passo 4 — Testar o prejuízo (art. 563).** Para cada vício, escrever **em uma frase concreta** qual foi o prejuízo à defesa. Vício sem prejuízo demonstrável tende a naufragar (mesmo os "absolutos" hoje enfrentam esse filtro em parte da jurisprudência — conferir).

**Passo 5 — Decidir o destino (para onde levar cada um).** Ver a tabela de roteamento adiante.

## Passo 2 — Classificação: os três rótulos

| Rótulo | Natureza | Prejuízo | Momento / preclusão | Arguição de ofício? |
|---|---|---|---|---|
| **Absoluta** | viola garantia constitucional / interesse público indisponível (ex.: falta de defesa técnica, juiz absolutamente incompetente, ofensa ao contraditório) | prejuízo em regra **presumido** (mas ver cautela: parte da jurisprudência passou a exigir demonstração até em algumas hipóteses — conferir) | pode ser arguida a **qualquer tempo**; não preclui pela inércia | sim, o juiz pode/deve reconhecer |
| **Relativa** | viola norma de interesse preponderante das partes (ex.: incompetência relativa, ordem de perguntas, vícios de intimação sanáveis) | prejuízo deve ser **demonstrado** | **momento próprio** (art. 571); **preclui** se não arguida (art. 572) | não; depende de provocação |
| **Mera irregularidade** | descumprimento de formalidade sem aptidão para causar prejuízo | irrelevante | — | não gera nulidade |

> **Regra prática:** na dúvida sobre o rótulo, **argua no momento próprio como se fosse relativa** (registrando e protestando) **e** sustente o caráter absoluto em preliminar. Assim você não perde a janela da relativa nem abre mão da força da absoluta. Mais vale arguir cedo e a mais do que descobrir a preclusão depois.

## Prova ilícita — regime próprio (não confundir com nulidade)

A prova ilícita (CF art. 5º, LVI; CPP art. 157) tem regime **distinto e mais robusto** que o das nulidades processuais: não se trata de anular um ato do processo, mas de **desentranhar** a prova e tudo o que dela derivou.

- **Ilicitude originária** → desentranhamento da prova (art. 157, caput).
- **Prova derivada** (frutos da árvore envenenada) → também contaminada (art. 157, §1º), **salvo**:
  - **Fonte independente** — a prova teria sido obtida por via autônoma e lícita.
  - **Descoberta inevitável** — a prova seria alcançada de qualquer modo pelos meios regulares.
- **Alvos frequentes de ilicitude:** interceptação sem autorização/fora dos limites; busca e apreensão sem mandado ou com desvio de finalidade; confissão sem advertência/direito ao silêncio (art. 5º, LXIII); quebra de sigilo sem ordem judicial; acesso a dados de celular sem autorização; **quebra da cadeia de custódia** (arts. 158-A a 158-F) — que pode migrar de nulidade para questão de (i)licitude/valoração da prova conforme o caso.

> No mapa, mantenha uma **coluna separada** para prova ilícita: o destino não é "anular o ato", é **requerer o desentranhamento** e apontar a **contaminação em cascata** dos atos derivados (art. 157, §1º + art. 573, §1º). *(Para a peça específica, ver `impugnacao-interceptacao-sigilo` e `impugnacao-cadeia-custodia`.)*

## Passo 3 — O calendário da preclusão (art. 571, lógica)

O art. 571 fixa **quando** cada nulidade deve ser arguida. A ideia-chave: a nulidade **relativa** ocorrida numa fase deve ser alegada **na primeira oportunidade** de falar nos autos após o vício — perder essa janela = preclusão (art. 572).

- Nulidades da **instrução criminal** dos processos de competência do juiz singular → em regra nas **alegações finais** (ou na primeira oportunidade seguinte ao vício).
- Nulidades ocorridas **após a pronúncia** (júri) → **logo depois de anunciado o julgamento em plenário** e apregoadas as partes.
- Nulidades da fase de **preparação/plenário do júri** → nos momentos próprios da sessão, **consignadas em ata** (sob pena de preclusão — casa com `juri-quesitacao`).
- Vícios de **citação/intimação** → convalidam pelo comparecimento (art. 570); argua antes que o ato se consume.

> **Diretriz de ouro:** **argua e consigne sempre**. Protesto em ata / preliminar registrada mantém a matéria viva para o recurso (apelação, RESE, HC). O silêncio no momento próprio é o maior aliado da acusação contra a nulidade relativa.

## Passo 5 — Roteamento: para onde levar cada vício

| Momento processual atual | Veículo indicado | Skill de peça |
|---|---|---|
| Antes/no início — incompetência, suspeição, litispendência, coisa julgada | **Exceção** | `excecoes-processuais` |
| Denúncia inepta / falta de justa causa | Preliminar na **resposta à acusação** (CPP art. 396-A) ou **HC** trancativo | `inepcia-denuncia-generica` |
| Prova ilícita (interceptação/sigilo) | Requerimento de **desentranhamento** / incidente / HC | `impugnacao-interceptacao-sigilo` |
| Quebra da cadeia de custódia | Impugnação da prova / preliminar / HC | `impugnacao-cadeia-custodia` |
| Constrangimento ilegal atual e evidente | **Habeas corpus** | *(skill de HC)* |
| Vícios da instrução (cerceamento, ordem de atos) | **Preliminares nas alegações finais** (memoriais) | *(alegações finais)* |
| Sentença nula (incongruência, falta de fundamentação) | **Apelação** (preliminar de nulidade) | *(apelação criminal)* |
| Decisões interlocutórias com previsão de RESE (ex.: pronúncia) | **RESE** | *(RESE)* |
| Vício já transitado, mas insanável | **Revisão criminal** | *(revisão criminal)* |

> O mapa **não redige** nenhuma dessas peças — ele diz **qual** redigir, **com que fundamento** e **até quando**. É o roteiro que as skills de peça executam.

## Teses e contra-teses (o jogo do prejuízo e do rótulo)

**Teses defensivas (a favor da nulidade):**
- **Nulidade absoluta → prejuízo presumido.** Sustentar que o vício atinge garantia constitucional (contraditório, ampla defesa, defesa técnica, juiz natural), dispensando prova concreta de prejuízo — o prejuízo é *in re ipsa*.
- **Contaminação em cascata (art. 573, §1º + art. 157, §1º).** Anulado/desentranhado o ato-fonte, arrastar os atos derivados. Mapear a **cadeia de dependência** é o que dá alcance à tese.
- **Não deu causa (art. 565).** Blindar-se: a nulidade que aproveita à defesa não foi provocada por ela.
- **Impossibilidade de convalidação.** Afastar art. 570/572: não houve comparecimento sanador, o ato não atingiu seu fim, a parte não aceitou os efeitos.

**Contra-teses (acusação / Ministério Público — antecipe-as):**
- ***Pas de nullité sans grief* (art. 563).** Não houve prejuízo concreto → nulidade não se declara. É o argumento-rei da acusação; por isso o **Passo 4** (escrever o prejuízo em uma frase) é decisivo.
- **Preclusão (art. 572).** Vício relativo não arguido no momento próprio está sanado.
- **Ato atingiu seu fim / instrumentalidade das formas (art. 566).** Mesmo com o defeito, a verdade e a decisão não foram afetadas.
- **Fonte independente / descoberta inevitável (art. 157, §§1º-2º).** A prova (ou o resultado) seria obtido por via lícita autônoma — quebra o nexo de contaminação.
- **Nulidade a que a parte deu causa (art. 565).**

> A defesa vence quando **fixa o rótulo correto**, **preserva o momento** (arguição + protesto) e **materializa o prejuízo concreto**. Perde quando alega "nulidade" genérica, tarde e sem demonstrar o grief.

## Súmulas e diretrizes notórias (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 523/STF** — no processo penal, a **falta de defesa** constitui nulidade **absoluta**, mas a sua **deficiência** só anula se houver **prova de prejuízo**. (Excelente síntese do jogo rótulo × prejuízo.)
- **Súmula 706/STF** — é **relativa** a nulidade decorrente da inobservância da competência penal por prevenção.
- **Súmula 712/STF** — é nula a decisão que determina o desaforamento sem audiência da defesa (júri).
- **Súmula 160/STF** — o tribunal não pode reconhecer, em prejuízo do réu, nulidade **não arguida** no recurso da acusação (limite ao reconhecimento de ofício em desfavor da defesa).
- **Súmula 155/STF** — é **relativa** a nulidade do processo criminal por falta de intimação da expedição de precatória para inquirição de testemunha.
- Princípio da **instrumentalidade das formas** e *pas de nullité sans grief* como eixo interpretativo consolidado (jurisprudência do STF/STJ). Diretriz doutrinária, não número de acórdão.

> **[NÃO VERIFICADO]** Qualquer HC/REsp/RE específico, informativo ou tema repetitivo sobre (i) extensão do prejuízo a nulidades absolutas, (ii) cadeia de custódia como nulidade × ilicitude, (iii) interrogatório por último (art. 400) como nulidade relativa dependente de prejuízo, ou (iv) marco da preclusão em cada fase **deve ser conferido** na skill `jurisprudencia-stj-stf` antes de citar. Ensine a **tese e o dispositivo**; **não arrisque o número do julgado**. Melhor faltar precedente do que citar acórdão inexistente.

## Erros comuns / anti-padrões (evitar)

- **Alegar "nulidade" genérica** sem dizer qual ato, qual dispositivo e qual prejuízo — não sensibiliza e convida ao *pas de nullité*.
- **Perder o momento** de uma nulidade relativa (não arguir na primeira oportunidade → preclusão do art. 572).
- **Confundir prova ilícita com nulidade** — o pedido correto para a ilícita é **desentranhamento** (art. 157), não "anulação do ato".
- **Esquecer a cascata** — anular/desentranhar a fonte sem pedir a contaminação dos atos derivados (art. 573, §1º; art. 157, §1º), deixando prova derivada de pé.
- **Deixar de escrever o prejuízo concreto** de cada vício — a coluna do prejuízo é o que separa a tese viável da natimorta.
- **Arguir nulidade a que a própria defesa deu causa** (art. 565) — argumento que se vira contra o autor.
- **Rotular como absoluta o que a jurisprudência atual trata como relativa** (ex.: certos vícios de intimação, ordem de perguntas) e vice-versa — errar o rótulo derruba a estratégia.
- **Não consignar em ata / não protestar** — sem registro, não há munição para o recurso.
- **Citar julgado de memória** — viola o Citation Gate (há sanções reais por jurisprudência inventada por IA).

## Checklist final do mapa

- [ ] Percorri **todas** as fases (investigação → cautelares → recebimento → instrução → sentença → júri → recursos/execução)?
- [ ] Cada vício está em **uma linha** com as colunas: ato viciado · dispositivo · **classificação** · **momento/preclusão** · **prejuízo concreto** · **destino/peça**?
- [ ] Marquei em vermelho as nulidades **relativas com janela fechando** (risco iminente de preclusão)?
- [ ] Para a **prova ilícita**, o pedido é **desentranhamento** (art. 157) e mapeei a **cascata** de atos derivados?
- [ ] Antecipei as **contra-teses** da acusação (prejuízo, preclusão, instrumentalidade, fonte independente) para cada vício?
- [ ] Defini **para onde levar cada vício** (exceção, resposta, HC, alegações finais, RESE, apelação, revisão) e **até quando**?
- [ ] Verifiquei o rótulo (absoluta × relativa) **caso a caso** na jurisprudência atual via `jurisprudencia-stj-stf`?
- [ ] Toda súmula/precedente/tese passou pelo **Citation Gate** (`verificacao-citacoes`)?
- [ ] O mapa **não redige** peça — ele **prioriza e roteia**; a peça sai da skill correspondente?

## Lembretes finais

- **Tríade sempre:** classificação + momento/preclusão + prejuízo. Um vício sem as três colunas preenchidas é um vício incompleto no mapa.
- **Argue e consigne** — o silêncio no momento próprio sana a nulidade relativa; o protesto em ata a mantém viva.
- **Prova ilícita ≠ nulidade** — regime próprio, pedido de desentranhamento e contaminação derivada.
- **Prejuízo em uma frase** por vício — é o antídoto contra o *pas de nullité sans grief*.
- **O mapa é o mapa, não a viagem** — ele aponta o destino e a peça; a redação vem de `excecoes-processuais`, `inepcia-denuncia-generica`, `impugnacao-interceptacao-sigilo`, `impugnacao-cadeia-custodia`, HC, alegações finais, apelação ou revisão criminal.
- **Vigência e Citation Gate** antes de qualquer citação (`jurisprudencia-stj-stf` / `verificacao-citacoes`).

## Nota de conformidade

Este material é **rascunho técnico** e apoio à estratégia — **não substitui** o juízo do profissional nem a leitura integral dos autos. A **revisão humana é obrigatória** antes de qualquer arguição ou protocolo. A responsabilidade pela escolha e pela tempestividade das nulidades é sempre do **advogado** (Estatuto da OAB e Código de Ética; Provimento 205/2021 na advocacia — no Ministério Público, observância das normas do CNMP; na Defensoria, da LC 80/94). Nenhuma súmula, tese ou acórdão vai à peça sem passar pelo **Citation Gate** (`verificacao-citacoes`) e pela conferência de vigência (`jurisprudencia-stj-stf`) — há sanções reais por jurisprudência inventada por IA.
