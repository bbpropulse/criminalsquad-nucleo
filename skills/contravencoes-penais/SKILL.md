---
name: contravencoes-penais
description: >-
  Use na defesa em CONTRAVENÇÕES PENAIS (Decreto-Lei 3.688/1941 — LCP): vias de fato (art. 21),
  perturbação do trabalho/sossego (art. 42), importunação, exercício ilegal de profissão, jogo do
  bicho e jogos de azar (arts. 50-58), porte de arma branca, omissão de cautela na guarda de animais
  (art. 31). Cobre o regime próprio da LCP — rito do JECRIM (Lei 9.099), inadmissibilidade de
  tentativa (art. 4º), extraterritorialidade… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, contravencao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-contravencoes-penais"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["contravencoes-penais", "contravencoes penais"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nas contravenções penais (LCP — Decreto-Lei 3.688/1941)

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

Esta skill orienta a **defesa nas contravenções penais**: as infrações da Lei das Contravenções Penais (Decreto-Lei 3.688/1941) — vias de fato (art. 21), perturbação do trabalho e do sossego (art. 42), exercício ilegal de profissão, jogo do bicho e jogos de azar (arts. 50-58), porte de arma branca, omissão de cautela na guarda de animais (art. 31), entre outras — atentando para as figuras já **revogadas** (ver adiante quanto à importunação). O foco é o **regime jurídico próprio** da contravenção — que não é um "crime menor", mas espécie autônoma de infração penal com regras distintas — e a **triagem despenalizadora** que quase sempre a resolve antes de qualquer instrução. O que é DESTA skill: as particularidades materiais da LCP (arts. 1º a 12), a controvérsia da descriminalização dos jogos e as teses de atipicidade. O que mora nas skills irmãs: o **rito** e os **acordos** vivem em `transacao-penal` (proposta do art. 76) e em `composicao-civil-danos-jecrim` (acordo cível do art. 74); o **cálculo e a arguição da prescrição** vivem em `extincao-punibilidade-prescricao`. Aqui não se duplica nenhum deles — apenas se aponta o gancho.

> **Lição central:** toda contravenção é **infração de menor potencial ofensivo** (pena máxima ≤ 2 anos, art. 61 da Lei 9.099/95). Isso significa que a defesa raramente disputa mérito: disputa **triagem**. Antes de discutir prova, verifique se cabe **composição civil** (art. 74), **transação penal** (art. 76) ou se a **prescrição** — que na LCP corre em prazos curtíssimos — já fulminou a pretensão. Boa parte das contravenções morre na prescrição enquanto o processo dorme.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 1º a 12 da LCP e dos tipos invocados (arts. 21, 31, 42, 50-58) pela skill `lei-e-sumula`; sobre a controvérsia da descriminalização dos jogos de azar e do jogo do bicho, e sobre a subsistência de cada figura, **pesquise o estado atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até conferência — não cite julgado de memória.

## O instituto e a base legal

A contravenção penal é a **infração penal de menor gravidade** — o Decreto-Lei 3.688/1941 define seu regime na Parte Geral (arts. 1º a 12) e cataloga as figuras na Parte Especial. As diferenças em relação ao crime não são de grau, mas de **regramento**:

| Dispositivo (LCP) | O que garante / exige |
|---|---|
| **Art. 1º** | Aplica-se à contravenção, subsidiariamente, a Parte Geral do CP — mas as regras especiais da LCP **prevalecem**. |
| **Art. 2º** | **Extraterritorialidade vedada:** só se pune a contravenção **praticada no território nacional**. Fato no exterior não é punível como contravenção. |
| **Art. 3º** | **Voluntariedade basta:** pune-se a contravenção **dolosa ou culposa** sem necessidade de o tipo distinguir — exige-se apenas a **voluntariedade** da conduta. Não há a exigência de previsão expressa da modalidade culposa (regra que, no crime, decorre do art. 18, par. único, do CP). |
| **Art. 4º** | **Tentativa não é punível.** Não existe contravenção tentada — ou consuma, ou o fato é penalmente indiferente. Tese de atipicidade sempre que a conduta ficou no plano do conato. |
| **Art. 5º** | Penas principais: **prisão simples** (regime aberto ou semiaberto, sem rigor penitenciário — art. 6º) e **multa**. |
| **Art. 6º** | A prisão simples cumpre-se **sem rigor penitenciário**, em regime **aberto ou semiaberto**; o contraventor fica **separado dos condenados por crime**. |
| **Art. 7º** | **Reincidência em contravenção** — regra própria de configuração da reincidência (confira redação atual via `lei-e-sumula`). |
| **Art. 8º** | **Erro de direito** — no caso de ignorância ou errada compreensão da lei, quando escusáveis, a pena pode deixar de ser aplicada (regra própria da LCP; confronte com o art. 21 do CP atual via `lei-e-sumula`). |
| **Arts. 9º a 12** | Regras próprias da Parte Geral (entre elas conversão da multa e reincidência) — confira o conteúdo exato de cada dispositivo via `lei-e-sumula` **[NÃO VERIFICADO]**; a **prescrição** da contravenção segue o Código Penal (ver seção própria). |

A prisão simples é o elemento que melhor revela a natureza da contravenção: **não há regime fechado**, não há rigor penitenciário. Na prática, o que decide o caso não é a pena — é a **triagem despenalizadora** e a **prescrição**.

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência de defesa | Onde aprofundar |
|---|---|---|
| Cliente autuado em TC por contravenção | Verificar **prescrição** antes de tudo; sondar **composição** e **transação** | `extincao-punibilidade-prescricao`; `transacao-penal` |
| Vias de fato (art. 21) com vítima identificada | **Composição civil** (art. 74) — em ação **condicionada/privada** extingue a punibilidade | `composicao-civil-danos-jecrim` |
| Perturbação de sossego (art. 42) sem laudo/prova do incômodo coletivo | Tese de **atipicidade** (falta de perturbação a "sossego alheio" no sentido difuso) | seção "Teses" abaixo |
| Jogo do bicho / jogos de azar (arts. 50-58) | Tese de **descriminalização/abolitio** e de intervenção mínima — **pesquisar estado atual** | seção "Teses"; `jurisprudencia-stj-stf` |
| Conduta ficou no plano da tentativa | **Atipicidade** — não há contravenção tentada (art. 4º) | seção "Teses" |
| Fato praticado no exterior | **Atipicidade** — extraterritorialidade vedada (art. 2º) | seção "Teses" |
| Processo parado há meses/anos | Requerer **extinção pela prescrição** (prazos curtos da LCP) | `extincao-punibilidade-prescricao` |
| Contexto de violência doméstica | **NÃO** aplicar a Lei 9.099 (art. 41 da Lei 11.340/2006) — regime diverso | seção "Pegadinhas" |

## Triagem despenalizadora — a primeira decisão da defesa

Porque **toda contravenção é de menor potencial ofensivo**, a fase preliminar do JECRIM é o campo de batalha real. A ordem dos atos e as peças estão detalhadas nas skills irmãs — aqui só o gancho:

1. **Prescrição primeiro.** Antes de qualquer negociação, verifique se a pretensão já prescreveu. Na LCP os prazos são curtos e o processo costuma se arrastar — muitas contravenções chegam à audiência já prescritas. Cálculo e peça: `extincao-punibilidade-prescricao`.
2. **Composição civil dos danos (art. 74).** Quando há vítima determinada (vias de fato, perturbação com ofendido individualizado) e a ação é **privada** ou **pública condicionada**, o acordo homologado **extingue a punibilidade** (art. 74, par. único, c/c art. 107, V, do CP). Termo e efeitos: `composicao-civil-danos-jecrim`.
3. **Transação penal (art. 76).** Frustrada ou irrelevante a composição, o MP propõe pena restritiva/multa **sem denúncia e sem culpa**. Cabe transação **por definição** em contravenção (art. 61 abrange contravenções expressamente). Requisitos, impedimentos e Súmula Vinculante 35/STF: `transacao-penal`.
4. **Instrução só como última via.** Recusada a triagem ou inexistente o efeito extintivo, discute-se mérito — e aí entram as teses de atipicidade próprias da LCP (abaixo).

> A escolha entre composição e transação segue a lógica das skills irmãs: a **composição não consome o quinquênio** da transação (art. 76, §4º), então, para a defesa, ela vem **primeiro** quando o efeito extintivo existe.

## Teses típicas de atipicidade e mérito

**Regime da LCP (teses estruturais):**
- **Tentativa impunível (art. 4º):** conduta que não se consumou é penalmente indiferente. Ex.: agente flagrado antes de qualquer ato lesivo em vias de fato; jogo interrompido antes da exploração efetiva. Sustentar **atipicidade absoluta**.
- **Extraterritorialidade vedada (art. 2º):** fato ocorrido fora do território nacional não constitui contravenção — nem pela regra de extraterritorialidade do art. 7º do CP, que é do **crime**, não da contravenção.
- **Prisão simples sem rigor (arts. 5º e 6º):** afastar qualquer imposição de regime fechado, rigor penitenciário ou tratamento de condenado por crime; o contraventor cumpre separado (relevante em dosimetria e execução).

**Vias de fato (art. 21):**
- **Subsidiariedade / absorção:** as vias de fato só subsistem quando **não** houve lesão corporal (art. 129 do CP) nem outro crime que as absorva — se houve lesão, a contravenção é **consumida**; se não houve contato lesivo algum, pode não haver nem vias de fato.
- **Composição civil** resolve a maioria: em ação condicionada/privada, extingue a punibilidade (ver `composicao-civil-danos-jecrim`).

**Perturbação do trabalho ou do sossego (art. 42):**
- **Atipicidade por falta do elemento "alheio" e coletivo:** o tipo exige perturbação ao **trabalho ou sossego alheios** com ruído/algazarra/abuso de instrumento sonoro — a jurisprudência tende a exigir afetação de **coletividade indeterminada**, não de vizinho isolado (questão controvertida — pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**).
- **Ausência de prova técnica:** incômodo meramente subjetivo, sem constatação da intensidade/reiteração, não preenche o tipo. Requerer improcedência por insuficiência probatória.
- **Fronteira com o ilícito administrativo:** perturbação sonora pode ser mera infração ambiental/municipal — **intervenção mínima** afasta a resposta penal.

**Jogo do bicho e jogos de azar (arts. 50 a 58):**
- **Descriminalização / abolitio criminis:** há forte corrente sustentando a superação da criminalização dos jogos (mudança de costume social, contradição sistêmica com loterias estatais e apostas reguladas). **NÃO afirme de memória** o desfecho — o estado da questão é dinâmico: pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**; confira também a legislação de apostas superveniente via `lei-e-sumula`.
- **Intervenção mínima / insignificância:** exploração ínfima, sem estrutura organizada, como reforço subsidiário à tese principal.
- **Atipicidade do apostador:** o tipo mira o **explorador** do jogo; a posição do mero apostador comporta tese própria de atipicidade — confira a figura exata do art. 50 e §§ via `lei-e-sumula`.

**Exercício ilegal de profissão, porte de arma branca, omissão de cautela (art. 31):**
- Verificar, para cada figura, a **subsistência do tipo** e sua eventual **revogação** por lei posterior (ex.: a arma branca em relação ao Estatuto do Desarmamento; a figura da profissão em relação à legislação regulatória atual) — sempre via `lei-e-sumula`, marcando **[NÃO VERIFICADO]** o que não confirmar.
- Omissão de cautela na guarda de animais (art. 31): aferir a **voluntariedade** (art. 3º) e o nexo entre a omissão e o perigo concreto; ausência de perigo real é atipicidade.

> **Atenção — "importunação" não é mais contravenção:** a antiga contravenção de **importunação ofensiva ao pudor** (art. 61 da LCP) foi **revogada** e a conduta hoje corresponde ao **crime de importunação sexual** (art. 215-A do CP, inserido pela Lei 13.718/2018) — que **não** é de menor potencial ofensivo (pena de 1 a 5 anos) e **não** segue o rito do JECRIM. Confira a vigência via `lei-e-sumula` e **não** trate importunação como figura viva da LCP **[NÃO VERIFICADO]**.

## Prescrição na contravenção — o desfecho mais frequente

A **prescrição da contravenção segue o Código Penal** (arts. 109 a 119), por força da aplicação subsidiária da Parte Geral do CP (art. 1º da LCP) — a LCP **não** possui prazos prescricionais autônomos próprios. O que a torna frequente é a **pena baixa**: a prisão simples máxima costuma ficar bem abaixo de 2 anos, o que em regra leva ao **prazo mínimo do art. 109 do CP**. Confirme o piso vigente via `lei-e-sumula` — desde a Lei 12.234/2010, para fatos posteriores, **não há prescrição inferior a 3 anos** (art. 109, VI, do CP) **[NÃO VERIFICADO]**. Resultado prático: contravenção que fica anos parada tende a prescrever.

- O **cálculo aritmético** (base pela pena máxima ou concreta, enquadramento no art. 109, intervalos entre marcos) e a **redação da peça** são da skill `extincao-punibilidade-prescricao` — **não** se repetem aqui; delegue o cálculo e traga o resultado.
- **Prazo penal (art. 10 do CP):** o prazo prescricional **inclui o dia do começo** e não se prorroga por feriado/fim de semana — não confundir com a contagem de prazo **processual** (CPP 798, §1º, que **exclui** o dia do começo). Errar isso desloca a consumação em dias decisivos.
- **Marcos e reduções** relevantes: recebimento do TC/denúncia, sentença; e a redução do art. 115 do CP (metade do prazo para **menor de 21 na data do fato** ou **maior de 70 na data da sentença**) — testar sempre, pois em prazos já curtos a metade fulmina rapidamente.
- **Reincidência em contravenção:** o art. 7º da LCP traz regra própria de configuração da reincidência; confira redação vigente via `lei-e-sumula` antes de afirmar efeitos.

## Procedimento e prazos — pontos de preclusão e competência

- **Rito sumaríssimo do JECRIM** (Lei 9.099/95, arts. 77 e ss.): por ser MPO, a contravenção segue o Juizado — competência **absoluta** em razão da matéria. Feito que tramite fora do JECRIM sem justificativa (complexidade, conexão) comporta **arguição de incompetência**.
- **Termo circunstanciado** (art. 69) em vez de flagrante/IP: o autor que assume compromisso de comparecimento **não é preso**. Prisão em flagrante por contravenção, salvo recusa ao compromisso, é constrangimento ilegal — via de **habeas corpus** (skill própria de HC).
- **Decadência (ação condicionada/privada):** 6 meses (art. 38 do CPP), prazo de **direito material** (contagem do art. 10 do CP), que a negociação frustrada **não** suspende — administrar o tempo (ver `composicao-civil-danos-jecrim`).
- **Preclusão da transação/composição:** frustrada a fase preliminar, preserva-se o rito para instrução; não se percam os prazos de resposta e de alegações finais no sumaríssimo.
- **Violência doméstica:** contravenção em contexto de violência doméstica e familiar contra a mulher **afasta** a Lei 9.099 por inteiro (art. 41 da Lei 11.340/2006) — muda rito, competência (Juizado de Violência Doméstica) e impede transação/composição. Pegadinha grave.

## Antes de protocolar

- [ ] Figura **subsiste** na LCP (não foi revogada/absorvida por lei posterior) — conferido via `lei-e-sumula`?
- [ ] **Prescrição** verificada **primeiro** — cálculo delegado a `extincao-punibilidade-prescricao` (prazo penal do art. 10 do CP, redução do art. 115)?
- [ ] **Espécie de ação penal** identificada (privada / condicionada / incondicionada) — define se composição extingue a punibilidade?
- [ ] **Triagem despenalizadora** avaliada: composição (art. 74) e/ou transação (art. 76) — decisão informada do cliente colhida?
- [ ] Tese de **atipicidade** cabível testada (tentativa — art. 4º; extraterritorialidade — art. 2º; falta de elemento típico; insignificância/intervenção mínima)?
- [ ] Em jogos de azar/bicho: estado atual da **descriminalização** pesquisado via `jurisprudencia-stj-stf` e marcado **[NÃO VERIFICADO]**?
- [ ] **Competência** do JECRIM confirmada (matéria) e **não** é contexto de violência doméstica (art. 41 da Lei 11.340/2006)?
- [ ] Se houve prisão em flagrante por contravenção com compromisso possível — arguido o constrangimento (HC)?
- [ ] Nenhuma súmula/precedente citado de memória — tudo passou pelo **verificador-citacoes**?

## Lembretes finais

- **Contravenção não é crime menor — é regime distinto:** sem tentativa (art. 4º), sem extraterritorialidade (art. 2º), com voluntariedade em vez da distinção dolo/culpa (art. 3º) e prisão simples sem rigor (arts. 5º-6º). Cada uma dessas regras é uma tese.
- **A defesa vence na triagem, não na instrução:** prescrição → composição → transação, nessa ordem de verificação. Instrução é a última via.
- **Prescrição é o desfecho mais comum:** prazos curtos + processo lento = extinção. Verifique sempre, e conte o prazo pela regra **penal** (art. 10 do CP), não pela processual.
- **Jogos de azar/bicho:** tema em movimento — jamais afirme desfecho de memória; pesquise e marque **[NÃO VERIFICADO]**.
- **Violência doméstica afasta a Lei 9.099** — não tente composição/transação nesse contexto.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes do protocolo.

## Apoie-se em

- **`transacao-penal`** — proposta do art. 76, requisitos negativos (§2º), efeitos despenalizadores e Súmula Vinculante 35/STF; rito completo da fase preliminar. Esta skill não o duplica.
- **`composicao-civil-danos-jecrim`** — termo de acordo do art. 74, efeito extintivo da renúncia nas ações privadas/condicionadas (art. 107, V, do CP). Gancho para vias de fato e perturbação com vítima determinada.
- **`extincao-punibilidade-prescricao`** — cálculo e redação do pedido de prescrição (arts. 107 e 109-119 do CP); referência **obrigatória** — a contravenção prescreve rápido.
- **Agente `jurisprudencia-stj-stf`** — estado atual da descriminalização dos jogos, do alcance do art. 42 e da subsistência das figuras da LCP antes de citar qualquer julgado.
- **Agente `lei-e-sumula`** — conferência de vigência e redação dos arts. 1º-12 e dos tipos da LCP, e de sua eventual revogação por lei posterior.
- **Agente `verificador-citacoes`** — gate final obrigatório: nenhuma súmula/precedente entra na peça sem verificação; o que não confirmar recebe **[NÃO VERIFICADO]**.
- **BP `peticao-criminal`** — forma, endereçamento e técnica da petição/manifestação criminal.
- **BP `justica-negocial`** — panorama dos acordos penais (composição, transação, sursis, ANPP) em que a defesa da contravenção quase sempre desemboca.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
