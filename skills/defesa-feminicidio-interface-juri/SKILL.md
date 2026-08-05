---
name: defesa-feminicidio-interface-juri
description: >-
  Use ao DEFENDER acusado de feminicídio após a Lei 14.994/2024, que transformou o feminicídio em
  TIPO PENAL AUTÔNOMO (CP, art. 121-A), fora das qualificadoras do art. 121. Cobre o mérito do 121-A
  — a elementar 'razões da condição do sexo feminino' (menosprezo/discriminação de gênero ou
  violência doméstica e familiar), o dolo, as causas de aumento, a hediondez — e faz a fronteira com
  o rito do Júri (handoff para as skills… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, feminicidio, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-feminicidio-interface-juri"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-feminicidio-interface-juri", "defesa feminicidio", "interface juri"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Feminicídio — CP, art. 121-A (Lei 14.994/2024) e a interface com o Júri

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

Esta skill orienta a **defesa técnica** de acusado de **feminicídio** após a **Lei 14.994/2024**, que deixou de tratar o feminicídio como **qualificadora** do homicídio (antigo art. 121, §2º, VI, CP) e o converteu em **tipo penal autônomo** — o **art. 121-A do CP** —, com pena própria, causas de aumento próprias e hediondez qualificada. O foco é o **mérito** (a existência e o alcance da elementar de gênero, o dolo, os aumentos e o direito intertemporal) e o **handoff** com as skills `juri-*`, que cuidam do rito, da pronúncia, do plenário e da quesitação.

> **Lição central:** o coração da defesa está na **elementar** "por razões da condição do sexo feminino". Feminicídio **não é** matar uma mulher; é matá-la **por menosprezo ou discriminação à condição de mulher** ou **no contexto de violência doméstica e familiar**. Ausente esse elemento subjetivo/contextual, o fato **não** é feminicídio — desclassifica-se para **homicídio** (simples ou qualificado por outra circunstância). A primeira pergunta da defesa é sempre: *o motivo do crime foi a condição feminina da vítima, ou foi outro (patrimonial, passional sem menosprezo de gênero, rixa, disputa etc.)?*

> **Cautela de vigência (obrigatória antes de citar):** o art. 121-A é **norma recentíssima (Lei 14.994/2024)**. Confirme, na fonte oficial, (i) a **redação vigente** do art. 121-A e de seus parágrafos (elementares, pena e causas de aumento), (ii) a alteração correlata na **Lei 8.072/90** (hediondez) e no **art. 1º da Lei 11.340/2006** e **art. 2º, IV, do CPP**, e (iii) o **direito intertemporal** (data do fato × lei mais benéfica/gravosa). Para **qualquer** súmula, tese ou acórdão (número de HC/REsp/RE, informativo, tema), passe **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de usar. Na dúvida sobre um número, **omitir vence inventar**.

---

## Base legal

- **CP, art. 121-A** (Lei 14.994/2024) — **tipo autônomo** de feminicídio: matar mulher **por razões da condição do sexo feminino**.
- **Elementar de gênero** — a lei define "razões da condição do sexo feminino" como o crime praticado **(I) por menosprezo ou discriminação à condição de mulher** ou **(II) em contexto de violência doméstica e familiar** (na linha do que já constava do antigo §2º-A do art. 121). **Confirme a redação e a numeração dos incisos na fonte oficial.**
- **Causas de aumento próprias** do art. 121-A (ex.: crime durante gestação/nos meses seguintes ao parto; contra menor de 14 ou maior de 60; na presença física ou virtual de descendente/ascendente da vítima; com descumprimento de medida protetiva). **A lista e os patamares mudaram com a Lei 14.994/2024 — confira o texto vigente.**
- **Competência do Júri** — CF, art. 5º, XXXVIII, "d"; **CPP, arts. 406 a 497** — feminicídio é **crime doloso contra a vida**, de competência do **Tribunal do Júri**. A autonomia típica **não** retira a competência do Júri.
- **Hediondez** — Lei 8.072/90 (feminicídio é crime hediondo; a Lei 14.994/2024 recrudesceu o regime). **Confirmar o dispositivo e os efeitos (progressão, livramento) na redação vigente.**
- **Violência de gênero / contexto** — Lei 11.340/2006 (Maria da Penha), quando o feminicídio ocorre em âmbito doméstico/familiar ou de relação íntima de afeto.
- **Elementos do crime doloso** — CP, arts. 13, 18, I (dolo), 20 (erro de tipo), 23-25 (excludentes de ilicitude), 26 (inimputabilidade), 14, II (tentativa).

> **Por que a autonomia importa para a defesa.** Sendo o feminicídio agora **tipo autônomo** (e não qualificadora), a **elementar de gênero** integra o **tipo**: sem ela, **não há o crime do art. 121-A**, e o fato migra para o art. 121. Isso muda a **técnica de desclassificação** no Júri (é afastamento de **elementar do tipo**, não de mera qualificadora) e reforça a exigência de que a **denúncia descreva concretamente** as razões de gênero — a acusação genérica é atacável por **inépcia** (CPP, art. 41).

---

## Roteiro de análise e defesa (por eixo)

### 1) Atacar a elementar de gênero (o núcleo)
A tese defensiva mais forte costuma ser **negar a elementar** "razões da condição do sexo feminino":
- **Móvel diverso:** o crime teve causa **patrimonial, disputa, vingança pessoal, rixa, motivo torpe/fútil comum** — sem menosprezo/discriminação **de gênero**. Matar a esposa por herança, por exemplo, pode ser homicídio (eventualmente qualificado por motivo torpe), **não necessariamente** feminicídio, se ausente o componente de gênero. **Cuidado:** no contexto doméstico/familiar a jurisprudência tende a reconhecer o feminicídio com facilidade — a defesa precisa demonstrar concretamente a **quebra do nexo de gênero**.
- **Contexto doméstico não é automático:** o simples fato de haver relação conjugal/afetiva **não** transforma todo homicídio em feminicídio; é preciso o **vínculo do crime com a condição de mulher**. Sustentar que o motivo real é estranho à discriminação de gênero.
- **Descrição genérica na denúncia:** se a inicial apenas rotula "feminicídio" sem **narrar** os fatos que caracterizam o menosprezo/discriminação ou o contexto de violência doméstica, cabe arguir **inépcia** (CPP, art. 41) ou, ao menos, negar a elementar em plenário.

### 2) Negar o dolo de matar (animus necandi) → desclassificação
Se a defesa nega a **intenção de matar** (e não a de gênero), a via é a **desclassificação** para:
- **Lesão corporal seguida de morte** (CP, art. 129, §3º) — dolo de lesão + resultado morte culposo;
- **Homicídio culposo** (CP, art. 121, §3º) — ausência de dolo;
- No contexto doméstico, **lesão corporal** qualificada (art. 129, §§) pode ser a moldura correta.
> **Efeito processual:** reconhecida a **desclassificação própria** (afastamento do dolo contra a vida), a competência passa ao **juiz-presidente** (CPP, art. 492, §1º) — ver skills `juri-*`. O crime **deixa o Júri**.

### 3) Excludentes de ilicitude e culpabilidade
- **Legítima defesa** (CP, art. 25) — sobretudo em cenários de agressão mútua; atenção às **agressões recíprocas** e à proporcionalidade.
- **Estado de necessidade**, **exercício regular de direito** (raros, mas mapear).
- **Inimputabilidade / semi-imputabilidade** (CP, arts. 26 e 28, §2º) — perícia; a semi-imputabilidade reduz a pena e pode afastar/atenuar a censura.
- **Erro** (CP, arts. 20 e 21) — erro sobre elementar (inclusive sobre o contexto) pode excluir dolo.

### 4) Tentativa e concurso
- **Tentativa** (CP, art. 14, II) — nos casos de feminicídio tentado, discutir o **iter criminis**, o **dolo** e a **desistência voluntária/arrependimento eficaz** (CP, art. 15), que desclassifica para os atos já praticados.
- Concurso com outros crimes (lesões, ameaça, descumprimento de protetiva) — verificar **consunção** e **concurso** correto para evitar dupla punição.

### 5) Causas de aumento — impugnar cada uma
As majorantes do art. 121-A (gestação/pós-parto; vítima menor de 14 ou maior de 60; presença de descendente/ascendente; descumprimento de medida protetiva; etc.) devem ser **individualmente contestadas**: exigir **prova concreta** de cada circunstância e afastar a **incidência automática**. No Júri, cada aumento é **quesito autônomo** (ver `juri-quesitacao`).

### 6) Dosimetria (fase de condenação)
Se sobrevier condenação, atuar na **dosimetria**: circunstâncias judiciais (CP, art. 59), atenuantes (confissão, art. 65, III, "d"; menoridade relativa; etc.), afastamento de aumentos indevidos e regime. **Método e cálculo:** ver a skill `calculadora-dosimetria`; a fixação numérica é **rascunho a conferir**, nunca automática.

---

## A transição normativa (direito penal intertemporal) — ponto sensível

A Lei 14.994/2024 é, em vários aspectos, **mais gravosa** (autonomia típica com pena própria, aumentos, endurecimento da hediondez). Logo:

- **Fatos anteriores à vigência** da Lei 14.994/2024 → em regra, aplica-se a **lei anterior** (feminicídio como **qualificadora** do art. 121, §2º, VI), por **irretroatividade da lei penal mais gravosa** (CF, art. 5º, XL; CP, art. 2º). A defesa deve **cravar a data do fato** e recusar a aplicação retroativa do art. 121-A quando prejudicial.
- **Ponto por ponto:** a comparação é **por instituto**, não em bloco. Se algum efeito da lei nova for **mais benéfico** ao réu, ele retroage (**lex mitior**); os efeitos **mais gravosos** não. **Confirme cada consequência (pena, aumentos, hediondez, progressão) na redação vigente e passe a jurisprudência pelo gate.**
- **Prescrição, pena e regime** mudam conforme a lei aplicável ao fato — recalcular com a **lei correta**. Para prescrição, ver `calculadora-prescricao`; para percentuais de execução, `execucao-progressao-regime`.

> **Tese defensiva típica (intertemporal):** para crime cometido antes da Lei 14.994/2024, requerer a **capitulação pela lei anterior** (art. 121, §2º, VI) e o afastamento dos aumentos e do regime mais severo introduzidos pela lei nova, sob pena de retroatividade *in malam partem* (CF, art. 5º, XL).

---

## Interface com o Júri (handoff) — o que esta skill NÃO cobre

Feminicídio é **crime doloso contra a vida**: segue o **rito bifásico** do Júri. Esta skill fornece o **mérito do 121-A**; a **mecânica processual** está nas skills dedicadas:

| Fase / ato | Skill a acionar |
|---|---|
| 1ª fase — resposta à acusação, instrução, alegações finais, **pronúncia / impronúncia / desclassificação / absolvição sumária** | `juri-primeira-fase` / `juri-pronuncia` (conferir nomes no `skills/_index.yaml`) |
| Recurso contra a pronúncia (RESE) e limites da fundamentação (excesso de linguagem) | skill de recursos do Júri (conferir índice) |
| 2ª fase — **debates em plenário** | `juri-plenario-debates` |
| **Quesitação** (formulação, ordem, impugnação dos quesitos) | `juri-quesitacao` |

> **Ponte técnica — como a elementar de gênero vira estratégia no Júri:**
> - Na **1ª fase**, a ausência de razões de gênero embasa pedido de **desclassificação** do 121-A para o art. 121 (afastamento de **elementar do tipo**) — o que, sendo o remanescente ainda doloso contra a vida, **mantém** a competência do Júri, mas **muda a imputação**; se a defesa nega o **dolo de matar**, o pedido é de **desclassificação para fora do Júri** (competência do juiz-presidente, CPP, art. 492, §1º).
> - Na **quesitação** (2ª fase), a negativa da elementar de gênero e a negativa das causas de aumento se convertem em **quesitos autônomos** — planejar isso **desde os debates** (ver `juri-quesitacao` para a ordem do art. 483 do CPP e a técnica de impugnação em ata).
> - O **quesito genérico de absolvição** ("O jurado absolve o acusado?", art. 483, §2º, CPP) permanece disponível qualquer que seja a tese — inclusive clemência.

---

## Teses e contra-teses (resumo operacional)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| **Não há elementar de gênero** — móvel diverso (patrimonial, disputa etc.) | Elementar do art. 121-A; desclassificação para art. 121 | Contexto doméstico/relação íntima presume razões de gênero; menosprezo demonstrado pelas circunstâncias |
| **Ausência de dolo de matar** → art. 129, §3º ou 121, §3º | CP, arts. 18 e 121, §3º; desclassificação própria (fora do Júri) | Dolo eventual; meio empregado e região atingida revelam animus necandi |
| **Legítima defesa / agressão recíproca** | CP, art. 25 | Excesso; ausência de agressão atual/iminente; desproporção |
| **Denúncia inepta** (não narra as razões de gênero) | CPP, art. 41 | Descrição suficiente; elementar deduzível dos fatos narrados |
| **Aumentos não comprovados** (afastar majorantes) | Art. 121-A, §§ (aumentos); exigência de prova | Circunstâncias documentadas nos autos |
| **Fato anterior à Lei 14.994/2024** → lei anterior | CF, art. 5º, XL; CP, art. 2º (irretroatividade gravosa) | Aplicação da lei nova; efeitos processuais imediatos |
| **Semi-imputabilidade / erro** | CP, arts. 26, par. único; 20-21 | Laudo pericial afasta; imputabilidade preservada |

> **Regra de ouro:** a defesa deve escolher a **tese principal** (negar gênero **ou** negar dolo **ou** excludente) e **hierarquizar** as subsidiárias — evitar teses mutuamente contraditórias em plenário, que corroem a credibilidade perante o Conselho de Sentença.

---

## Súmulas / precedentes sob o Citation Gate

Por ser matéria **novíssima**, a jurisprudência específica sobre o **art. 121-A** ainda está em formação. **Não invente números.** Diretrizes:

- **Dispositivos de lei** (CP, art. 121-A; art. 2º; CF, art. 5º, XL e XXXVIII; CPP, arts. 41, 413-415, 483, 492) podem ser citados com certeza, **na redação vigente conferida na fonte oficial**.
- **Qualquer** precedente específico (HC/REsp/RE, informativo, tema de repetitivo/repercussão geral) sobre feminicídio, elementar de gênero, desclassificação, excesso de linguagem na pronúncia, ou intertemporalidade da Lei 14.994/2024 deve ser marcado **[NÃO VERIFICADO]** e conferido via `jurisprudencia-stj-stf` **antes** de ir para a peça. **[NÃO VERIFICADO]**
- Enunciados clássicos de Júri (ex.: sobre pronúncia como juízo de admissibilidade e o *in dubio pro societate*; sobre excesso de linguagem gerar nulidade) devem passar pelo gate — a redação e o próprio status desses entendimentos variam. **[NÃO VERIFICADO]**

> **Prefira ensinar a TESE e o DISPOSITIVO a arriscar um número de acórdão.** Onde couber precedente, escreva "conferir precedente atual do STJ/STF via `jurisprudencia-stj-stf`" e deixe o espaço para a inserção após verificação.

---

## Erros comuns / checklist (defesa)

- [ ] **Data do fato** identificada e **lei aplicável** definida (Lei 14.994/2024 × lei anterior)?
- [ ] A **elementar de gênero** foi analisada e, se for o caso, **negada com base concreta** (móvel diverso)?
- [ ] A denúncia **narra** as razões de gênero, ou é atacável por **inépcia** (CPP, art. 41)?
- [ ] Definida a **tese principal** (negar gênero × negar dolo × excludente) e as **subsidiárias hierarquizadas**, sem contradição?
- [ ] Distinguido o efeito de cada desclassificação: **121-A → 121** (permanece no Júri) × **negar dolo** (sai do Júri, art. 492, §1º)?
- [ ] Cada **causa de aumento** contestada individualmente (prova concreta exigida)?
- [ ] **Excludentes** (legítima defesa) e **imputabilidade** (arts. 26 e 28) avaliadas e periciadas quando cabível?
- [ ] **Tentativa / desistência voluntária** (arts. 14, II, e 15) examinadas nos casos de crime não consumado?
- [ ] **Hediondez e regime** conferidos na **redação vigente** (Lei 8.072/90 pós-14.994/2024)?
- [ ] Toda **súmula/precedente** passou pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` (nenhum número de memória)?
- [ ] O **handoff** para as skills `juri-*` (pronúncia, plenário, quesitação) foi acionado para a mecânica processual?
- [ ] **Dosimetria** tratada como rascunho (`calculadora-dosimetria`) e **revisão humana** agendada antes de protocolar?

**Anti-padrões (evitar):**
- Tratar todo homicídio de mulher em relação afetiva como feminicídio "automático" — **a elementar de gênero precisa ser demonstrada**, e é ali que mora a defesa.
- Confundir **desclassificação de gênero** (121-A → 121, permanece no Júri) com **desclassificação por ausência de dolo** (sai do Júri) — os efeitos processuais são distintos.
- Aplicar o art. 121-A a **fato anterior** à Lei 14.994/2024 em prejuízo do réu (retroatividade *in malam partem* — vedada).
- Sustentar teses **contraditórias** em plenário (negar autoria e, ao mesmo tempo, alegar legítima defesa) sem hierarquização clara.
- Citar **número de acórdão** sobre o 121-A sem verificação — matéria nova, alto risco de invenção.
- Deixar as **majorantes** passarem sem impugnação individual.

## Lembretes finais

- **A elementar de gênero é o campo de batalha** — negar "razões da condição do sexo feminino" desclassifica o 121-A para o art. 121.
- **Autonomia típica muda a técnica:** afastar **elementar do tipo**, não mera qualificadora; exigir descrição concreta na denúncia.
- **Feminicídio continua no Júri** — esta skill dá o **mérito**; a mecânica processual é das skills `juri-*` (pronúncia, plenário, quesitação).
- **Direito intertemporal primeiro:** crave a **data do fato** e recuse a lei nova quando gravosa (CF, art. 5º, XL).
- **Citation Gate inegociável:** matéria novíssima; **nenhum número de acórdão sem verificação** via `jurisprudencia-stj-stf`.
- **Revisão humana obrigatória** — todo este material é **rascunho técnico** para conferência do(a) advogado(a) responsável.

## Nota de conformidade

Rascunho técnico sob **revisão humana obrigatória** (não substitui o juízo do(a) profissional). Skill de **defesa** (polo defensivo): a atuação e a responsabilidade são do **advogado(a)** — Estatuto da OAB e Código de Ética; comunicação pública sobre o caso observa o **Provimento 205/2021** da OAB. Atuando a Defensoria Pública, aplica-se também a **LC 80/94**. Toda citação de lei/súmula/precedente passa pelo gate `verificacao-citacoes`; a redação persuasiva da peça segue a skill `redacao-persuasiva-criminal`. Este material **não** é do polo acusatório — se o pedido for de acusação (MP/assistente), o roteador deve confirmar o polo e acionar a skill correspondente.
