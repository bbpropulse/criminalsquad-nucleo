---
name: selecao-tese-por-tipo-penal
description: >-
  Use ao mapear o repertório de teses defensivas tipicamente cabíveis para um tipo penal específico
  — o método de derivar defesas a partir das elementares e do bem jurídico de CADA crime
  (atipicidade formal e material, insignificância, ausência de dolo específico, causas de exclusão),
  gerando o insumo-base que alimenta a matriz do caso concreto. Gatilhos: teses para furto, defesas
  para tráfico, o que alegar em estelionato… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, teses, parte-especial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-selecao-tese-por-tipo-penal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["selecao-tese-por-tipo-penal", "selecao tese", "tipo penal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Seleção de Tese por Tipo Penal (CP, Parte Especial + arts. 13-21 da Parte Geral)

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

Esta skill orienta a **derivação sistemática do repertório de teses defensivas a partir das elementares de um tipo penal específico**. É trabalho **estratégico** (não é uma peça): você recebe um crime — furto, tráfico, estelionato, receptação, lesão, o que for — e produz o **mapa de defesas típicas** daquele delito, ancorado no que a lei exige para o tipo se configurar. Esse mapa é o insumo que depois alimenta a `matriz-teses-defensivas` (que ordena e escolhe as teses para UM caso concreto).

> **Lição central:** a defesa nasce das **elementares**. Antes de pensar em prova, decomponha o tipo em seus elementos (núcleo/verbo, objeto, sujeitos, elemento subjetivo, resultado) — **cada elementar ausente, duvidosa ou mal descrita é uma tese**. Não existe "defesa genérica": existe a defesa que ataca o elemento que faltou no caso concreto. Quem parte da narrativa da acusação em vez de partir do tipo esquece defesas clássicas.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do tipo penal e das causas de aumento/diminuição na fonte oficial — a Parte Especial é constantemente alterada (ex.: estelionato passou a exigir representação, art. 171, §5º, CP; furto e receptação ganharam figuras qualificadas). Antes de afirmar qualquer súmula, tema ou acórdão, confira vigência e overruling via a skill `jurisprudencia-stj-stf` (ou o gate `verificacao-citacoes`). **Prefira ensinar a tese e o dispositivo a arriscar um número de julgado.**

## Base legal (âncoras do método)

- **CP, Parte Especial** — as **elementares de cada tipo** (o texto do artigo é o ponto de partida de toda tese).
- **CP, art. 13** — relação de causalidade (nexo): sem nexo, atipicidade.
- **CP, art. 18** — dolo e culpa; **parágrafo único**: sem previsão expressa, não há crime culposo. Tipos que exigem **dolo específico** (fim especial de agir) abrem tese de ausência do elemento subjetivo especial.
- **CP, arts. 20 e 21** — **erro de tipo** (exclui o dolo; se escusável, exclui também a culpa) e **erro de proibição** (exclui/atenua a culpabilidade).
- **CP, art. 23** — causas de exclusão da ilicitude (legítima defesa, estado de necessidade, estrito cumprimento de dever legal, exercício regular de direito).
- **CP, arts. 26-28** — inimputabilidade e culpabilidade (doença mental, embriaguez, coação, obediência hierárquica).
- **Princípio da insignificância** (atipicidade **material**) e **adequação social** — construções doutrinárias/jurisprudenciais, não dispositivos; ancoram a bagatela.

## O método — decompor o tipo em 6 eixos e extrair a tese de cada um

Para **qualquer** tipo penal, percorra os seis eixos abaixo. Em cada um, pergunte "o que a lei exige aqui, e isso está presente/provado no caso?". Onde a resposta falha, nasce a tese.

### Eixo 1 — Núcleo do tipo (verbo/conduta)
A conduta descrita realmente se subsome ao verbo do tipo? **Tese: atipicidade formal** (o fato não corresponde ao verbo nuclear). Ex.: "subtrair" (furto) pressupõe inversão da posse sem consentimento — se houve entrega voluntária, não há subtração; pode migrar para apropriação ou estelionato.

### Eixo 2 — Objeto material e bem jurídico
Existe o objeto que o tipo protege? A lesão ao bem jurídico é real e relevante? **Teses: insignificância** (atipicidade material — lesão ínfima ao bem jurídico, ex.: patrimônio de valor irrisório) e **adequação social** (conduta tolerada pelo corpo social). A bagatela exige, tradicionalmente: mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão jurídica.

### Eixo 3 — Sujeitos (ativo e passivo)
O agente reúne a qualidade que o tipo exige? Em **crime próprio/de mão própria**, quem não tem a qualidade especial não pode ser autor. **Teses: atipicidade por ausência de qualidade de sujeito ativo**; erro quanto à pessoa/objeto; nos crimes contra a Administração, ausência da condição de funcionário público (art. 327).

### Eixo 4 — Elemento subjetivo (dolo, culpa e dolo específico)
- **Dolo:** o agente quis o resultado ou assumiu o risco? Faltando, **atipicidade por ausência de dolo**.
- **Dolo específico (fim especial de agir):** vários tipos exigem finalidade especial — furto exige o **fim de assenhoramento definitivo** (ânimo de dono); os crimes de apropriação exigem o **fim de apropriar-se**; extorsão exige o **intuito de obter vantagem indevida**. Ausente o fim especial, **atipicidade** (ex.: subtração para uso momentâneo — o "furto de uso" é atípico no CP).
- **Culpa:** só há crime culposo se **expressamente previsto** (art. 18, par. único). Se o tipo só admite dolo e a conduta foi culposa, **atipicidade**.
- **Erro de tipo (art. 20):** falsa percepção sobre elementar exclui o dolo.

### Eixo 5 — Nexo causal e resultado (art. 13)
Nos crimes materiais, o resultado se produziu e decorre da conduta? **Teses: ausência de nexo** (atipicidade), **ausência de resultado naturalístico** (nos materiais), **tentativa** (art. 14, II) quando o resultado não se consumou por circunstâncias alheias à vontade — reduz a pena de 1/3 a 2/3. Atenção ao **consumação x tentativa**: em furto e roubo, discute-se o momento consumativo (teoria da *amotio*/posse tranquila) — ponto de tese quando a res foi recuperada de imediato.

### Eixo 6 — Ilicitude e culpabilidade (arts. 21-28)
Ainda que típico, o fato pode não ser ilícito ou não ser culpável. **Teses: excludentes de ilicitude** (art. 23 — legítima defesa, estado de necessidade, estrito cumprimento de dever legal, exercício regular de direito); **erro de proibição** (art. 21); **inexigibilidade de conduta diversa**; **coação moral irresistível/obediência hierárquica** (art. 22); **inimputabilidade** (arts. 26-28).

> **Regra de ouro do afunilamento:** analise **tipicidade → ilicitude → culpabilidade** nessa ordem. Uma tese de atipicidade (que nega o crime) é preferível a uma de exclusão de culpabilidade (que reconhece o injusto e só afasta a reprovação). Ataque primeiro o degrau mais baixo.

## Repertório por famílias de tipos (exemplos ilustrativos — sempre adaptar)

O quadro abaixo mostra como o método aterrissa em **teses típicas recorrentes** por família de crime. É didático e não exaustivo — a tese real depende das elementares do artigo concreto e do caso.

| Família / tipo | Elementar atacável | Teses defensivas recorrentes |
|---|---|---|
| **Furto (art. 155)** | "subtrair… coisa alheia móvel" + fim de assenhoramento | insignificância; furto de uso (atípico, falta dolo específico); ausência de subtração (entrega voluntária → migra p/ 171); tentativa (res recuperada); afastar qualificadoras |
| **Roubo (art. 157)** | subtração + violência/grave ameaça | negar a grave ameaça (→ furto); afastar majorantes (concurso de pessoas, arma — exigir apreensão/perícia da arma); tentativa; unidade de desígnios no concurso |
| **Estelionato (art. 171)** | "obter vantagem ilícita, induzindo em erro mediante ardil" | ausência de fraude/ardil (mero inadimplemento civil é atípico); ausência de prejuízo; **representação** (art. 171, §5º — condição de procedibilidade); dolo preexistente |
| **Receptação (art. 180)** | conhecimento da origem criminosa | ausência de dolo/culpa quanto à origem; receptação culposa (§3º) vs dolosa; insignificância |
| **Tráfico (art. 33, Lei 11.343/06)** | mercancia + destinação a terceiros | desclassificação para uso (art. 28) pela quantidade/contexto; tráfico privilegiado (§4º — primário, bons antecedentes, não integra org.); ausência de destinação comercial; nulidade da prova (cadeia de custódia, busca pessoal — ver skills próprias) |
| **Lesão corporal (art. 129)** | ofensa à integridade + dolo | legítima defesa; consentimento em contexto lícito; lesão leve x grave (afastar o resultado agravador); ausência de dolo (culpa → §6º) |
| **Porte/posse de arma (Lei 10.826/03)** | porte/posse + potencialidade lesiva | arma desmuniciada/ineficaz (perícia — atipicidade material por ausência de lesividade); abolitio/anistias; posse x porte; ver skill `posse-porte-arma` |

> **Nichos fechados x este método.** Crimes com skill própria — **defesa-crimes-sexuais**, **posse-porte-arma**, **defesa-fraude-eletronica**, defesas de drogas/violência doméstica/trânsito/tributários/honra — devem ser tratados **primeiro** pela skill de nicho, que traz o repertório aprofundado. Esta skill cobre a **metodologia geral** e os tipos **sem nicho próprio** (furto, receptação, apropriação indébita, dano, ameaça etc.), além de servir como checklist de partida para qualquer delito.

## Teses transversais (cabem em quase todo tipo)

1. **Atipicidade formal** — o fato não se ajusta ao verbo nuclear.
2. **Atipicidade material / insignificância** — lesão ínfima ao bem jurídico.
3. **Ausência de dolo (e de dolo específico)** — falta o elemento subjetivo exigido.
4. **Erro de tipo (art. 20)** — falsa percepção sobre elementar.
5. **Tentativa (art. 14, II)** — não consumação por circunstância alheia → redução de pena.
6. **Excludentes de ilicitude (art. 23)** e **de culpabilidade (arts. 21-28)**.
7. **Afastamento de qualificadoras/majorantes** — cada uma é elementar autônoma: se não descrita/provada, cai (repercute diretamente na dosimetria — ver `dosimetria-da-pena`).
8. **Nulidades probatórias** — a tese processual (prova ilícita, cadeia de custódia, busca ilegal) coexiste com a de mérito e muitas vezes a antecede na estratégia.

## Contra-teses previsíveis da acusação (antecipar)

- **Insignificância:** o MP costuma opor **reincidência/habitualidade** e **valor não irrisório** para afastar a bagatela — antecipe reunindo o contexto (primariedade, valor real do bem, restituição).
- **Furto de uso:** a acusação sustenta o **assenhoramento definitivo** pela apreensão da coisa consigo — a defesa deve demonstrar a **intenção de restituição** e o uso momentâneo.
- **Estelionato x inadimplemento:** o MP tenta ver **dolo preexistente**; a defesa mostra que a fraude foi **posterior** ou inexistente (mero descumprimento contratual → esfera cível).
- **Desclassificação do tráfico para uso:** a acusação invoca quantidade, forma de acondicionamento, balança e valores — a defesa contextualiza consumo próprio e ataca a presunção.

> Explicite sempre a contra-tese e sua resposta: uma tese que ignora a objeção previsível chega frágil ao juízo.

## Súmulas e enunciados de apoio (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 511/STJ** — furto qualificado-privilegiado é possível (qualificadora objetiva + pequeno valor + primariedade) → repercute na pena.
- **Insignificância** — o STF fixou os quatro vetores (mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade, inexpressividade da lesão). Os **acórdãos e temas específicos** que aplicam ou afastam a bagatela em cada crime devem ser conferidos no gate. [NÃO VERIFICADO — confirmar números de HC/tema pertinentes via `jurisprudencia-stj-stf`.]
- **Furto de uso** — atipicidade pela ausência do *animus rem sibi habendi* é entendimento consolidado; **os precedentes concretos** (número de HC/REsp) devem ser buscados no gate. [NÃO VERIFICADO]
- **Estelionato — representação (art. 171, §5º)** — introduzida pela Lei 13.964/19; a **modulação sobre processos em curso** foi objeto de julgados dos Tribunais Superiores. Conferir a orientação atual e sua aplicação temporal via `jurisprudencia-stj-stf`. [NÃO VERIFICADO]

> **Regra do Citation Gate:** o método e o dispositivo você cita com segurança; **o número do acórdão/tema, nunca de memória**. Qualquer precedente específico só entra na peça depois de conferido — melhor faltar julgado do que citar julgado inexistente.

## Roteiro de análise (passo a passo)

1. **Colar o tipo penal** (redação vigente conferida) e **decompor as elementares** — verbo, objeto, sujeitos, elemento subjetivo, resultado.
2. **Rodar os 6 eixos** — em cada um, marcar a elementar ausente/duvidosa/mal descrita e nomear a tese correspondente.
3. **Listar as teses transversais** aplicáveis (insignificância, dolo, tentativa, excludentes).
4. **Separar qualificadoras/majorantes** — cada uma é uma micro-tese autônoma (atacar isoladamente).
5. **Antecipar as contra-teses** da acusação para cada tese forte.
6. **Ordenar por preferência** — atipicidade > exclusão de ilicitude > exclusão de culpabilidade > minorantes/desclassificação; a tese processual (nulidade) corre em paralelo.
7. **Entregar o mapa** como insumo para `matriz-teses-defensivas` (que decide, para o caso concreto, o que vai e em que ordem) e para `dosimetria-da-pena` (qualificadoras/minorantes).
8. **Passar tudo pelo Citation Gate** e sinalizar revisão humana obrigatória.

## Erros comuns / checklist final

- [ ] Partiu **do tipo penal** (elementares) e não da narrativa da acusação?
- [ ] Rodou os **6 eixos** (núcleo, objeto/bem jurídico, sujeitos, elemento subjetivo, nexo/resultado, ilicitude/culpabilidade)?
- [ ] Verificou se o tipo exige **dolo específico** (fim especial de agir) e se ele está ausente?
- [ ] Checou se o crime admite **modalidade culposa** (art. 18, par. único) — se não, a conduta culposa é atípica?
- [ ] Avaliou **insignificância** (quatro vetores) e **adequação social**?
- [ ] Tratou **cada qualificadora/majorante** como micro-tese autônoma?
- [ ] Ordenou as teses pelo **afunilamento** (atipicidade primeiro)?
- [ ] Antecipou as **contra-teses** previsíveis da acusação?
- [ ] Encaminhou o crime a uma **skill de nicho**, se houver, antes de usar o método geral?
- [ ] Confirmou a **redação vigente** do tipo e passou todo precedente pelo **Citation Gate** (`jurisprudencia-stj-stf` / `verificacao-citacoes`)?

**Anti-padrões (evitar):**
- Aceitar a subsunção da acusação sem decompor o tipo (esquece atipicidade formal).
- Esquecer o **dolo específico** e propor apenas "ausência de dolo" genérica.
- Tratar qualificadora como acessório e não atacá-la isoladamente.
- Invocar insignificância sem enfrentar reincidência/valor (contra-tese óbvia).
- Confundir este **repertório genérico** com a matriz do **caso concreto** — esta skill alimenta aquela, não a substitui.
- Citar número de HC/REsp/tema de memória para ancorar a bagatela ou o furto de uso.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a ser confirmada pelo(a) advogado(a) responsável, nunca peça final. A responsabilidade pela seleção e sustentação das teses é sempre do profissional (**CED/OAB e Provimento 205/2021** na advocacia; **CNMP** no Ministério Público; **LC 80/94** na Defensoria Pública). Nenhuma súmula, tese ou acórdão citado de memória: tudo passa pelo **Citation Gate** (`verificacao-citacoes` / `jurisprudencia-stj-stf`) antes do uso. Confira sempre a **redação vigente** do tipo penal e a **aplicação temporal** de alterações legislativas.

**Encadeamento:** o mapa gerado aqui alimenta a `matriz-teses-defensivas` (ordenação para o caso concreto), a `dosimetria-da-pena` (qualificadoras/minorantes) e, na redação da peça, a `redacao-persuasiva-criminal` (teoria do caso, subsunção explícita e persuasão).
