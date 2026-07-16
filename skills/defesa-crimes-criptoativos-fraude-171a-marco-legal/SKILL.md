---
name: defesa-crimes-criptoativos-fraude-171a-marco-legal
description: >-
  Use ao DEFENDER pessoa física ou jurídica acusada de fraude ou crime financeiro com
  criptoativos/ativos virtuais — fraude com ativos virtuais (art. 171-A do CP), operação de
  exchange/VASP sem autorização (art. 16 da Lei 7.492), gestão fraudulenta, evasão de divisas e
  lavagem via cripto. Cobre a natureza jurídica do criptoativo, o Marco Legal (Lei 14.478/2022) e a
  competência (Justiça Federal x Estadual). Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, penal-economico, criptoativos, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-criptoativos-fraude-171a-marco-legal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-criptoativos-fraude-171a-marco-legal", "defesa crimes", "marco legal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes com Criptoativos — Fraude com Ativos Virtuais (art. 171-A) e Marco Legal (Lei 14.478/2022)

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

Esta skill orienta a **defesa técnica** em crimes que envolvem **ativos virtuais** — da nova **fraude com ativos virtuais (art. 171-A do CP)** à operação de **exchange/VASP sem autorização** (art. 16 da Lei 7.492/86), passando por gestão fraudulenta, evasão de divisas e lavagem praticadas com cripto. O terreno é novo, a regulação é móvel e a jurisprudência ainda se assenta — o que **amplia o espaço de tese defensiva**, desde que a base normativa seja checada com rigor.

> **Lição central:** antes de discutir a fraude em si, resolva **duas questões preliminares que decidem o caso** — (1) a **DATA DO FATO** (o art. 171-A e a equiparação da VASP a instituição financeira só valem a partir da vigência da Lei 14.478/2022; fato anterior **não se subsume** a elas — *novatio legis incriminadora* não retroage, CF art. 5º, XL) e (2) a **NATUREZA JURÍDICA** do ativo (utility token, security token/valor mobiliário, "moeda" ou ativo financeiro), que define **qual tipo penal** incide e **qual a competência**. Errar essas duas é perder a tese antes de começar.

> **Cautela de vigência (obrigatória antes de citar):** a **Lei 14.478/2022** (Marco Legal dos Ativos Virtuais) foi publicada em 21/12/2022 e entrou em vigor cerca de **180 dias depois (junho/2023)** — confirme a data exata e a **redação vigente** do art. 171-A do CP, do art. 1º, parágrafo único, e do art. 16 da Lei 7.492/86. A **regulamentação das VASPs pelo Banco Central** (Decreto 11.563/2023 + atos infralegais do BACEN) é **MÓVEL** e condiciona a tipicidade do "operar sem autorização" — **confirme o estágio atual do regime de autorização** antes de qualquer tese. Toda súmula, tese ou precedente passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (gate de `verificacao-citacoes`) antes de fundamentar a peça.

## Polo e conformidade

- **Polo:** esta skill é redigida no **polo defensivo** (defesa do acusado/investigado). A acusação (MP/MPF) e o assistente de acusação usam o **espelho** destas teses — o roteiro serve para **antecipar** os argumentos adversos, não para produzi-los.
- **Revisão humana obrigatória:** todo enquadramento aqui é **hipótese a confirmar**. A responsabilidade pela peça é sempre do **advogado** (CED, art. 2º). Este material é apoio à preparação, não substitui o juízo profissional nem a leitura dos autos concretos.
- **Citation Gate:** nenhuma lei, súmula ou acórdão citado de memória — tudo confere pela skill `jurisprudencia-stj-stf`. Em campo novo, **omitir vence inventar**.

## Natureza jurídica do criptoativo — a questão que decide tudo

O criptoativo **não tem natureza jurídica única**; classificá-lo corretamente define o tipo penal e a competência.

- **Não é moeda de curso legal / forçado.** Não é papel-moeda (afasta falsificação de moeda, art. 289 CP) nem tem curso legal no país. Por isso **fraude com cripto não é, por si só, crime federal** só porque "envolve dinheiro digital".
- **Ativo virtual (Lei 14.478/2022, art. 3º):** representação digital de valor negociável/transferível por meios eletrônicos, usada para pagamento ou investimento. A definição **EXCLUI** expressamente: moeda nacional e estrangeira; moeda eletrônica (Lei 12.865/2013); pontos/milhas de programas de fidelidade; e **ativos já regulados como valores mobiliários** (que continuam sob a Lei 6.385/76 e a CVM). Essa fronteira definicional é munição de defesa.
- **Pode ser valor mobiliário** quando o token configura **contrato de investimento coletivo** (Lei 6.385/76, art. 2º, IX — oferta pública com expectativa de lucro pelo esforço de terceiro). Aí muda o tipo (crimes contra o mercado de capitais) e a competência (federal). *Utility token* de uso funcional, em regra, **não** é valor mobiliário — distinção decisiva.

```
Árvore — natureza → tipo/competência (para a triagem defensiva)
1) O token é oferta de investimento coletivo (retorno pelo esforço alheio)?
   ├── SIM → possível VALOR MOBILIÁRIO → crimes contra o mercado de capitais /
   │         SFN → competência tende à Justiça FEDERAL. (Discutir o enquadramento.)
   └── NÃO → é meio de pagamento/uso funcional?
             ├── Fraude comum a vítimas → art. 171-A ou 171 CP → tende à Justiça ESTADUAL
             └── "Pirâmide"/captação popular → economia popular (Lei 1.521/51) → ESTADUAL
2) Há operação de câmbio/remessa disfarçada ao exterior via cripto?
   → discutir evasão de divisas (art. 22, Lei 7.492) → FEDERAL (tese controvertida)
3) Havia prestação organizada de serviços de ativos virtuais (VASP)?
   → discutir art. 16 da Lei 7.492 (operar sem autorização) → FEDERAL
```

## Base legal

- **CP, art. 171-A** (inserido pela Lei 14.478/2022) — **fraude com a utilização de ativos virtuais, valores mobiliários ou ativos financeiros**. Pena: **reclusão, de 4 a 8 anos, e multa** (confira a redação vigente).
- **CP, art. 171 e §§** — estelionato-base (reclusão, 1 a 5 anos) e a **fraude eletrônica** agravada pela **Lei 14.155/2021** (art. 171, §2º-A e §4º — conferir redação/parágrafos); §5º trata da **ação penal condicionada à representação** no estelionato comum.
- **Lei 14.478/2022 — Marco Legal dos Ativos Virtuais:** definições (arts. 1º a 3º), conceito de **VASP/prestadora** (art. 5º), princípios (art. 6º), exigência de **autorização** para operar e designação do **órgão regulador** (por decreto → **Decreto 11.563/2023**, que designou o **Banco Central** para as VASPs em geral; a **CVM** mantém competência sobre tokens que sejam valores mobiliários).
- **Lei 7.492/1986 (crimes contra o SFN):** **art. 1º, parágrafo único** — equipara a instituição financeira a pessoa jurídica que ofereça serviços com ativos virtuais (intermediação, negociação, custódia), por força da Lei 14.478/2022; **art. 4º** (gestão fraudulenta, reclusão 3 a 12 anos); **art. 16** (operar instituição financeira **sem autorização**, reclusão 1 a 4 anos); **art. 22** (evasão de divisas); **art. 26** (ação penal e **competência da Justiça Federal**).
- **Lei 6.385/1976** — valores mobiliários e **crimes contra o mercado de capitais** (arts. 27-C a 27-E — manipulação, uso indevido de informação, exercício irregular; conferir o tipo exato aplicável).
- **Lei 9.613/1998 (lavagem)** — art. 1º (ocultar/dissimular origem de bens de infração penal); cripto é vetor clássico de lavagem, comumente imputada **em concurso**. [NÃO VERIFICADO — conferir se há causa de aumento por uso de ativo virtual no §4º; **checar via `jurisprudencia-stj-stf`**.]
- **Lei 1.521/1951, art. 2º, IX** — "bola de neve"/pirâmide financeira (**crime contra a economia popular**, competência em regra estadual).
- **CF, art. 5º, XXXIX e XL** (legalidade e irretroatividade da lei penal gravosa); **art. 109, IV e VI** (competência da Justiça Federal).

## Mapa dos tipos e conflito aparente de normas

| Imputação | Núcleo da conduta | Pena base | Competência típica | Foco da defesa |
|---|---|---|---|---|
| **Art. 171-A CP** | Organizar/gerir/ofertar/distribuir carteiras **ou** intermediar operações com ativos virtuais **com fraude** | 4–8 anos + multa | Estadual (salvo nexo federal) | Data do fato; verbos nucleares; distinguir do 171 |
| **Art. 171 CP** | Estelionato comum / fraude eletrônica | 1–5 anos (+ majorantes) | Estadual | Puxar para o tipo **mais brando**; representação (§5º) |
| **Lei 7.492, art. 16** | Operar "instituição financeira" (VASP) **sem autorização** | 1–4 anos + multa | Federal | Norma penal em branco; regime de autorização inexistente/em transição |
| **Lei 7.492, art. 4º** | Gestão **fraudulenta** de instituição financeira | 3–12 anos + multa | Federal | Afastar equiparação; ausência de "gestão"; ausência de fraude sistêmica |
| **Lei 7.492, art. 22** | Evasão de divisas via cripto | 2–6 anos + multa | Federal | Natureza não-cambial do cripto; atipicidade (tese controvertida) |
| **Lei 1.521/51, art. 2º, IX** | Pirâmide / captação popular | 6 meses–2 anos + multa | Estadual | Economia popular; competência estadual (Súm. 498/STF — conferir) |

> **Regra de ouro do conflito aparente:** ataque o **concurso (cúmulo) indevido**. Muitas denúncias empilham 171-A + Lei 7.492 + lavagem + economia popular sobre o **mesmo fato**. Invoque **especialidade** (o tipo especial afasta o geral) e **consunção** (o crime-meio é absorvido pelo crime-fim), evitando dupla punição pelo mesmo substrato fático (*ne bis in idem*).

## Roteiro de defesa (8 eixos)

1. **Vigência e enquadramento temporal.** Fixe a **data do fato**. Se anterior a junho/2023, o art. 171-A e a equiparação da VASP **não incidem** — no máximo subsiste o art. 171 (ou tipo pré-existente). *Novatio legis incriminadora* não retroage (CF art. 5º, XL; CP art. 1º).
2. **Natureza jurídica do ativo.** Classifique (utility x security token; meio de pagamento x investimento). Afaste a leitura que puxa o caso para o SFN/mercado de capitais quando o token **não** é valor mobiliário.
3. **Conflito aparente de normas.** Reduza a imputação a **um** tipo (especialidade/consunção). Impugne o concurso material artificial.
4. **Competência.** Se não há nexo federal (valor mobiliário, SFN, evasão, transnacionalidade com tratado, lesão a bem/serviço da União), sustente a **competência estadual** — a mera presença de cripto **não** desloca à Justiça Federal (ver adiante).
5. **Tipicidade objetiva e subjetiva.** No art. 171-A, exija a presença dos **verbos nucleares** (organizar/gerir/ofertar/distribuir carteiras **ou** intermediar) **somados** à fraude (induzir/manter em erro, artifício/ardil) e à finalidade de **vantagem ilícita em prejuízo alheio**. Falta de dolo, de fraude ou de prejuízo = atipicidade. Considere **erro de proibição** (CP art. 21) em operador pré-regulação.
6. **VASP sem autorização (art. 16, Lei 7.492).** É **norma penal em branco**: a "devida autorização" pressupõe um **regime de autorização em vigor**. Enquanto o BACEN não implementa o procedimento de autorização, discuta a **atipicidade** por ausência do complemento normativo. (Confirme o estágio atual — cautela de vigência.)
7. **Prova digital e cadeia de custódia.** Ataque a **atribuição da wallet** ao réu (frequentemente circunstancial), a integridade da coleta (art. 158-A a 158-F, CPP) e a licitude da obtenção de dados de exchanges/no exterior.
8. **Dosimetria, ação penal e confisco.** Discuta pena-base, majorantes, a natureza da **ação penal** (o 171-A, por ser artigo autônomo, tende à **ação pública incondicionada** — conferir) e o **perdimento/valuation** dos criptoativos apreendidos (volatilidade, terceiros de boa-fé).

## Competência — Federal x Estadual

> **Tese-chave (defesa):** a **simples utilização de criptoativos não atrai, por si só, a competência da Justiça Federal**. Exige-se demonstração concreta de lesão a **bens, serviços ou interesses da União**, ou de que os ativos configurem **valores mobiliários** / operação contra o **SFN**. [NÃO VERIFICADO quanto ao precedente específico — **confira os Conflitos de Competência aplicáveis via `jurisprudencia-stj-stf`**; prefira sustentar a **tese + dispositivo** (CF art. 109; art. 26 da Lei 7.492) a arriscar número de acórdão.]

```
1) Há valor mobiliário / lesão ao mercado de capitais ou ao SFN?  → FEDERAL
2) Há VASP equiparada a instituição financeira (fato após a Lei 14.478)? → FEDERAL
3) Há evasão de divisas / transnacionalidade prevista em tratado? → FEDERAL
4) Nada disso — fraude a vítimas / pirâmide de economia popular? → ESTADUAL
```

Definida a **estadual**, some-se, quando cabível, a **Súmula 498/STF** (crimes contra a economia popular → Justiça dos Estados). Todo enquadramento de competência dialoga com a skill `triagem-competencia-foro-criminal`.

## Teses e contra-teses

| Tese defensiva | Fundamento | Contra-tese (acusação) a antecipar |
|---|---|---|
| Fato **anterior** à Lei 14.478 → sem 171-A | CF art. 5º, XL; CP art. 1º | Conduta permanente/continuada que avança para depois da vigência |
| Token **não** é valor mobiliário → competência estadual, sem SFN | Lei 6.385, art. 2º; Lei 14.478, art. 3º (exclusões) | Oferta com promessa de lucro = contrato de investimento coletivo |
| **Atipicidade** do art. 16 (autorização inexistente/em transição) | Norma penal em branco não complementada | Dever de autorização já vigente na data do fato |
| Ausência de **fraude/dolo** → não há 171-A; no máximo ilícito civil | CP art. 171-A (elementos) | Artifício demonstrado por *modus operandi* e captação em massa |
| **Consunção/especialidade** → afastar cúmulo de tipos | Conflito aparente de normas | Bens jurídicos distintos → concurso material |
| **Wallet não atribuída** ao réu com segurança | *In dubio pro reo*; prova circunstancial | Perícia de blockchain + KYC da exchange |
| **Nulidade** por quebra da cadeia de custódia digital | CPP, art. 158-A a 158-F | Higidez da coleta e do *hash*; cooperação internacional regular |

## Prova digital e cadeia de custódia

O elo mais frágil da acusação costuma ser **provar que a wallet/chave é do réu** e que a coleta é hígida. Fiscalize:

- **Atribuição:** ligar um endereço de blockchain a uma pessoa é, muitas vezes, **inferência** (KYC de exchange, IP, correlação temporal). Explore a **dúvida razoável**.
- **Cadeia de custódia (CPP, art. 158-A a 158-F):** documentação da coleta, *hash* de integridade, preservação de mídias e do estado das carteiras no momento da apreensão. Quebra → discutir **ilicitude/nulidade** (skills `impugnacao-cadeia-custodia`, `analise-quebra-cadeia-custodia-vestigios`).
- **Obtenção de dados no exterior / de exchanges:** legalidade do meio (ordem judicial, cooperação internacional, *data request*). Prova ilícita e derivada → skill `impugnacao-prova-ilicita-derivada`.
- Aprofunde com a skill `preservacao-prova-digital-defesa`.

## Súmulas e precedentes sob Citation Gate

**Não cite de memória.** Confirme tudo via `jurisprudencia-stj-stf` (gate de `verificacao-citacoes`) e **prefira sustentar tese + dispositivo** a arriscar número de acórdão.

- **Súmula 498/STF** — crimes contra a economia popular → Justiça dos Estados. [conferir vigência/redação]
- **STJ (Terceira Seção) — Conflitos de Competência sobre cripto:** a tese de que o uso de criptoativo **não desloca automaticamente** à Justiça Federal aparece em diversos CCs. [NÃO VERIFICADO o número — **buscar o precedente atual via `jurisprudencia-stj-stf`**.]
- **STJ/STF — evasão de divisas com cripto (art. 22, Lei 7.492):** enquadramento **controvertido**; há decisões em ambos os sentidos. [NÃO VERIFICADO — conferir o estado da arte antes de sustentar.]
- **CVM — natureza de token como valor mobiliário:** orientações administrativas (ex.: pareceres/notas de orientação) balizam o *security token*. [conferir a manifestação vigente da CVM.]

## Erros comuns / anti-padrões (evitar)

- **Aplicar o art. 171-A a fato anterior** à vigência da Lei 14.478/2022 (retroatividade vedada).
- **Aceitar competência federal** só porque "há cripto", sem exigir o nexo federal concreto.
- **Confundir utility token com valor mobiliário** — e, com isso, migrar o caso para o SFN sem base.
- **Tolerar o cúmulo** 171-A + Lei 7.492 + lavagem + economia popular sobre o mesmo fato, sem discutir especialidade/consunção.
- **Tratar a "devida autorização" do art. 16 como automática**, ignorando que é norma penal em branco dependente da regulação do BACEN.
- **Não impugnar a atribuição da wallet** nem a cadeia de custódia digital.
- **Citar CC/HC/tese de cripto por número** sem passar pelo Citation Gate (área de jurisprudência instável).

## Checklist da defesa

- [ ] **Data do fato** fixada e confrontada com a vigência da Lei 14.478/2022 (junho/2023)?
- [ ] **Natureza jurídica** do ativo classificada (utility x security; meio de pagamento x investimento)?
- [ ] **Competência** (federal x estadual) argumentada com nexo concreto — e não pela mera presença de cripto?
- [ ] **Conflito aparente de normas** enfrentado (especialidade/consunção; afastar cúmulo)?
- [ ] No **art. 171-A**, presença dos **verbos nucleares + fraude + prejuízo** verificada (ou atipicidade sustentada)?
- [ ] **Art. 16 (Lei 7.492)** examinado como **norma penal em branco** (regime de autorização do BACEN em vigor na data do fato)?
- [ ] **Erro de proibição** (CP art. 21) avaliado para operador pré-regulação?
- [ ] **Wallet** efetivamente atribuída ao réu — e **cadeia de custódia** digital íntegra?
- [ ] **Ação penal** (condicionada x incondicionada) e **confisco/valuation** dos ativos analisados?
- [ ] **Súmulas, CCs e teses conferidos** via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável realizada antes de protocolar?

## Lembretes finais

- **Duas preliminares primeiro:** *data do fato* e *natureza do ativo* — elas definem tipo e competência.
- **Cripto ≠ competência federal automática:** exija o nexo federal concreto.
- **Art. 171-A não retroage:** fato anterior a junho/2023 não se subsome a ele.
- **Art. 16 (VASP sem autorização) é norma penal em branco:** sem regime de autorização operante, discuta atipicidade — e **confirme o estágio atual da regulação do BACEN**.
- **Afaste o cúmulo de tipos** por especialidade/consunção (*ne bis in idem*).
- **A prova digital é o ponto fraco:** ataque atribuição da wallet e cadeia de custódia.
- **Jurisprudência de cripto é instável:** tudo pelo gate `jurisprudencia-stj-stf`; **omitir vence inventar**.

**Skills irmãs:** `defesa-estelionato-171` (distinção 171 x 171-A), `defesa-lavagem-capitais` e `liberacao-bens-lavagem` (concurso com lavagem/apreensão), `triagem-competencia-foro-criminal` (federal x estadual), `preservacao-prova-digital-defesa` / `impugnacao-cadeia-custodia` (prova digital), `calculadora-dosimetria` (pena), `jurisprudencia-stj-stf` e `verificacao-citacoes` (Citation Gate).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
