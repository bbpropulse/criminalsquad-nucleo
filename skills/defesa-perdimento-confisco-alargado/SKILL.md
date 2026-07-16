---
name: defesa-perdimento-confisco-alargado
description: >-
  Use ao DEFENDER contra perda de bens na esfera penal — perdimento clássico (efeito da condenação,
  art. 91 CP), confisco por equivalência (art. 91, §1º) e confisco alargado (art. 91-A CP, Pacote
  Anticrime), inclusive as medidas assecuratórias que os antecedem. Gatilhos: perdimento de bens,
  confisco alargado, art. 91-A CP, art. 91 CP, produto/proveito do crime, instrumento do crime
  (instrumenta sceleris), confisco…. Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, cautelares-reais]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-perdimento-confisco-alargado"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-perdimento-confisco-alargado", "defesa perdimento", "confisco alargado"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa contra Perdimento e Confisco Alargado (arts. 91 e 91-A do CP)

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

Esta skill orienta a **defesa do patrimônio** do réu/investigado na esfera penal — desde a **constrição cautelar** (sequestro, arresto, hipoteca legal) até o **perdimento decretado na sentença**. Reúne três institutos que a prática confunde e que exigem teses distintas: o **perdimento clássico** (art. 91), o **confisco por equivalência** (art. 91, §1º) e o **confisco alargado** (art. 91-A, novidade do Pacote Anticrime).

> **Lição central:** antes de qualquer tese, **classifique QUAL instituto está em jogo** — cada um tem requisitos e ônus próprios. O perdimento clássico exige **nexo** entre o bem e o crime; o confisco por equivalência exige que o produto **não seja encontrado**; o confisco alargado (91-A) dispensa nexo, mas exige **condenação por crime com pena máxima > 6 anos**, **requerimento expresso do MP na denúncia** e **apuração da diferença patrimonial**. Errar o instituto é atacar o requisito errado.

> **Cautela de vigência (obrigatória antes de citar):** o **art. 91-A foi inserido pela Lei 13.964/2019 (Pacote Anticrime), em vigor desde 23/01/2020** — confira a redação vigente e a data do fato (irretroatividade, adiante). O confisco alargado é instituto **recente e em construção jurisprudencial**: **não há súmula consolidada** e há debate sobre constitucionalidade. Confira toda tese, tema e precedente via a skill `jurisprudencia-stj-stf` antes de fundamentar. Prefira **tese + dispositivo** a número de acórdão.

## Os três institutos (não confundir)

| Instituto | Dispositivo | Requisito nuclear | Nexo bem↔crime? |
|-----------|-------------|-------------------|-----------------|
| Perdimento clássico | art. 91, II, "a" e "b" | instrumento ilícito, produto ou proveito do crime | **Exigido** |
| Confisco por equivalência | art. 91, §1º e §2º | produto/proveito **não encontrado** ou no exterior | Sobre valor equivalente |
| Confisco alargado | art. 91-A | pena máx. **> 6 anos** + incompatibilidade patrimonial | **Dispensado** |

## Base legal

- **Art. 91, II, CP** — perda em favor da União (ressalvado o lesado e o **terceiro de boa-fé**) dos **instrumentos** do crime (cujo fabrico, alienação, uso, porte ou detenção seja **ilícito**) e do **produto/proveito**.
- **Art. 91, §1º e §2º, CP** (Lei 12.694/2012) — **confisco por equivalência**: se o produto/proveito não for encontrado ou estiver no exterior, decreta-se a perda de **bens ou valores equivalentes**; pode ser decretado ao longo do processo (medida assecuratória).
- **Art. 91-A, caput e §§1º a 5º, CP** (Lei 13.964/2019) — **confisco alargado**: na condenação por crime com pena máxima **superior a 6 anos**, perda dos bens correspondentes à **diferença** entre o patrimônio e o rendimento lícito.
- **Art. 5º, XLV, CF** — pena não passa da pessoa do condenado; perdimento só se estende aos sucessores **até o limite do patrimônio transferido**.
- **Art. 5º, XLVI, "b", CF** — perda de bens é espécie de pena (individualização); **XLVI veda o confisco geral**.
- **Art. 5º, LIV, LV e LVII, CF** — devido processo, contraditório e **presunção de inocência** (base da tese sobre ônus da prova).
- **Art. 243, parágrafo único, CF** — confisco de todo bem de valor econômico apreendido no **tráfico** e na exploração de trabalho escravo (regime próprio).
- **Arts. 125 a 144-A do CPP** — medidas assecuratórias (**sequestro, hipoteca legal, arresto, alienação antecipada**) e restituição de coisas apreendidas (arts. 118-124).

## Natureza jurídica e o eixo da defesa

O perdimento é **efeito da condenação** (art. 91), mas o confisco alargado tem **carga sancionatória** — o que a defesa explora para atrair garantias penais (legalidade, irretroatividade, presunção de inocência). A raiz do 91-A está em convenções internacionais (Palermo/Mérida) sobre "riqueza inexplicada", mas **importadas ao Brasil sob o crivo constitucional** — é aí que mora a defesa.

## Metodologia — roteiro por instituto

### A) Perdimento clássico (art. 91, II)
1. **Instrumento (alínea "a"):** só se perde o instrumento cujo **fabrico, alienação, uso, porte ou detenção seja ILÍCITO em si** (arma sem registro, droga). Instrumento **lícito** (veículo, celular comum, dinheiro) **não** se perde pela regra geral — atacar o perdimento de bem lícito fora das hipóteses do §5º do 91-A. *(Perda de veículo usado no tráfico é controvérsia — conferir via `jurisprudencia-stj-stf`.)*
2. **Produto/proveito (alínea "b"):** exigir **demonstração do nexo** entre o bem concreto e o crime. Sem prova do nexo, não há perdimento.
3. **Ressalva legal:** direito do **lesado** e do **terceiro de boa-fé** é ressalvado no próprio caput — invocar sempre.

### B) Confisco por equivalência (art. 91, §1º)
- Só cabe quando o produto/proveito **não for encontrado ou estiver no exterior**. Se o bem original **existe e pode ser perdido**, não se justifica alcançar patrimônio lícito por equivalência. Atacar o excesso e exigir a demonstração da impossibilidade.

### C) Confisco alargado (art. 91-A) — o campo mais fértil de teses
Checar, em ordem, os requisitos cumulativos:
1. **Condenação** transitada/definida por crime cuja **pena máxima cominada > 6 anos** de reclusão (requisito objetivo — se não superar, **não cabe**).
2. **Requerimento expresso do MP na denúncia** (§3º), com **indicação da diferença** apurada e **dos bens** — sob pena de **preclusão** (adiante).
3. **Apuração da diferença** (§4º): patrimônio total − patrimônio compatível com renda lícita = valor confiscável. Contestar metodologia, pedir **perícia contábil**.
4. **Marco temporal** (§1º, I e II): entram bens na data da infração ou recebidos depois, e os transferidos a terceiro **a título gratuito ou por contraprestação irrisória a partir do início da atividade criminal** — **exigir a fixação desse marco**; bens anteriores estão fora.

### D) Instrumentos de organização criminosa / milícia (art. 91-A, §5º)
- Amplia a perda a instrumentos **ainda que lícitos**, mas **exige** comprovação do vínculo com **organização criminosa ou milícia** (Lei 12.850/2013) e da efetiva utilização. Não é automático — atacar a ausência de prova do vínculo e a **proporcionalidade**.

## As grandes teses defensivas

1. **Irretroatividade do 91-A (tese mais forte).** Norma que amplia os efeitos da condenação (perda patrimonial) é **penal material mais gravosa** → **não retroage** (art. 5º, XL, CF; art. 2º, CP). Só alcança fatos **posteriores a 23/01/2020**. *(Contra-tese acusatória: natureza processual/mista — sustentar a natureza penal material.)*
2. **Preclusão pela falta de requerimento tempestivo (§3º).** Se o MP **não requereu o confisco alargado expressamente no oferecimento da denúncia**, com diferença e bens indicados, **não pode fazê-lo depois** (alegações finais/sentença) nem o juiz de ofício. Nulidade por surpresa e violação ao contraditório.
3. **Ônus da prova — não há inversão contra o réu.** A **presunção de inocência** (art. 5º, LVII) impede transferir ao acusado o ônus de provar a licitude de todo o patrimônio. Cabe à **acusação demonstrar a incompatibilidade** (o descompasso patrimônio×renda) e o marco da atividade criminosa; o §2º assegura ao condenado **oportunidade de contraprova**, não inverte o *onus probandi* do fato constitutivo. *(Doutrina diverge quanto a "standard de prova"; apresentar como tese central e antecipar a divergência.)*
4. **Contraditório patrimonial específico.** A defesa deve ter oportunidade real de se manifestar sobre a alegada incompatibilidade **ao longo da instrução**, não só na sentença — sob pena de nulidade.
5. **Fundamentação e especificação (§4º / art. 93, IX, CF).** Sentença que decreta confisco **genérico**, sem apurar o valor da diferença nem especificar os bens, é **ilegal por falta de fundamentação**.
6. **Proporcionalidade e vedação ao confisco geral (art. 5º, XLVI).** O confisco limita-se à **diferença apurada**; **patrimônio de origem lícita comprovada** não pode ser alcançado. Vedado o confisco geral/de todo o patrimônio.
7. **Terceiros de boa-fé e meação.** O terceiro que adquiriu **onerosamente e por preço real** está protegido (o §1º, II só alcança transferência **gratuita ou irrisória**). A **meação** do cônjuge/companheiro sobre bens comuns não se confisca, salvo prova de que também é fruto do crime. Via processual: **embargos de terceiro**.
8. **Limite aos sucessores (art. 5º, XLV, CF).** Contra herdeiros/espólio, o perdimento vai **até o limite do patrimônio transferido** — nunca além.

## Teses × contra-teses (síntese)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|----------------|-----------|------------------------|
| 91-A não retroage a fatos anteriores a 2020 | penal material mais gravosa (art. 5º, XL, CF) | natureza processual → aplicação imediata |
| Preclusão sem requerimento na denúncia | §3º + contraditório | requerimento pode ser posterior |
| Sem inversão do ônus | presunção de inocência (LVII) | §2º impõe ao réu provar licitude |
| Só a diferença apurada é confiscável | proporcionalidade (XLVI) | patrimônio incompatível global |
| Instrumento lícito não se perde | art. 91, II, "a" | §5º (org. crim./milícia) abarca |

## Exemplo prático (didático — confisco alargado)

> Ilustração da **metodologia de apuração** e dos pontos de ataque. Números fictícios; adaptar sempre ao caso concreto.

Réu condenado por crime com pena máxima de 8 anos (requisito objetivo do 91-A **satisfeito**). O MP aponta patrimônio total de **R$ 3.000.000** e renda lícita compatível de **R$ 1.200.000** no período → **diferença apurada = R$ 1.800.000** (teto do confiscável).

Pontos de ataque da defesa, em ordem:
1. **Data do fato anterior a 23/01/2020?** Se sim, **91-A não incide** (irretroatividade) — encerra a discussão.
2. **Houve requerimento na denúncia (§3º)?** Sem ele, **preclusão**.
3. **Marco da atividade criminosa:** imóvel adquirido **antes** do início da atividade (com renda comprovada) sai da conta — reduz a base.
4. **Origem lícita demonstrada:** herança, financiamento, rendimentos declarados no IR → abatem a diferença.
5. **Meação:** se R$ 800.000 correspondem à meação do cônjuge de boa-fé, esse valor **não** se confisca.
6. **Perícia contábil:** impugnar o método de apuração (fluxo de caixa × sinais exteriores) e o *quantum*.

Resultado da defesa: reduzir a "diferença" ao que a acusação **efetivamente comprovar** como incompatível — nunca o patrimônio global.

## Regimes especiais (não aplicar o 91-A por analogia)

- **Tráfico (art. 243, parágrafo único, CF; Lei 11.343/06):** confisco de bens com **regime constitucional próprio** — não se rege pelos requisitos do 91-A. Verificar o rito específico.
- **Lavagem de dinheiro (Lei 9.613/98, art. 7º):** perda de bens como efeito da condenação, com **medidas assecuratórias próprias** (art. 4º) — distinguir do perdimento comum.
- **Improbidade / esfera cível e administrativa:** o perdimento penal **não se confunde** com a perda em ação de improbidade; atenção ao **bis in idem** e à independência das instâncias.

## O braço cautelar — atacando as medidas assecuratórias

O perdimento costuma ser precedido de **constrição de bens** (domínio "Cautelares Reais"). Impugnar já nessa fase:
- **Sequestro (arts. 125-133 CPP):** exige **indícios veementes da proveniência ilícita** do bem. Sem esse *fumus*, cabe **defesa/embargos** (art. 130) e **levantamento** (art. 131). Bem de origem lícita não se sequestra.
- **Arresto e hipoteca legal (arts. 134-137 CPP):** recaem sobre bens **lícitos** para garantir reparação — não se confundem com sequestro; atacar excesso e requisitos.
- **Alienação antecipada (art. 144-A):** só quando houver risco de deterioração/depreciação — impugnar quando ausente.
- **Impenhorabilidade:** **bem de família** (Lei 8.009/90) e verbas essenciais — sopesar caso a caso.
- **Restituição de coisas apreendidas (arts. 118-124 CPP):** pleitear a devolução do que não interessa ao processo e não é produto/instrumento ilícito.

## Súmulas e precedentes (sob Citation Gate)

- **Não há súmula consolidada específica sobre o art. 91-A** — desconfie de qualquer enunciado "pronto". [NÃO VERIFICADO] para qualquer súmula/tema atribuído ao confisco alargado; conferir via `jurisprudencia-stj-stf`.
- **Constitucionalidade do confisco alargado** (ônus da prova, irretroatividade): há **discussão em curso** — não citar número de ADI/RE de memória. [NÃO VERIFICADO] → confira o estado atual antes de afirmar.
- **Perda de instrumento lícito** (ex.: veículo no transporte de droga): jurisprudência **oscilante** — [NÃO VERIFICADO], conferir tese e distinção aplicável ao caso.
- **Confisco por equivalência e lavagem** (art. 91, §1º; Lei 9.613/98, art. 7º): conferir os precedentes correntes antes de invocar.
- Regra de ouro: **tese + dispositivo legal** sempre vencem número de acórdão citado de memória. Na dúvida, **omitir vence inventar** (há sanção real por jurisprudência inventada por IA).

## Roteiro de manifestação (esqueleto de defesa)

Quando o pedido de perdimento/confisco surgir (denúncia, alegações finais ou sentença), estruturar a resposta assim:
1. **Identificar o instituto** invocado (91 clássico? §1º equivalência? 91-A alargado? §5º?).
2. **Testar o requisito objetivo** (nexo; produto não encontrado; pena máx. > 6 anos).
3. **Verificar a tempestividade** do pedido do MP (§3º — preclusão).
4. **Discutir o ônus** e a ausência de inversão (presunção de inocência).
5. **Delimitar o marco temporal** e **excluir o patrimônio lícito** e anterior à atividade criminosa.
6. **Ressalvar terceiro de boa-fé e meação** (embargos, se for o caso).
7. **Requerer perícia contábil** sobre a diferença e impugnar a metodologia de apuração.
8. **Subsidiariamente**, sustentar a **proporcionalidade** e a limitação à diferença efetivamente comprovada.

## Erros comuns / checklist

- [ ] Identificou **qual dos três institutos** está em jogo antes de escolher a tese?
- [ ] Conferiu a **data do fato** × vigência do 91-A (23/01/2020) para a tese de irretroatividade?
- [ ] Verificou se a **pena máxima do crime supera 6 anos** (requisito do 91-A)?
- [ ] Checou se o **MP requereu o confisco alargado na denúncia** (§3º — preclusão)?
- [ ] Exigiu **apuração da diferença** e **especificação dos bens** (§4º)?
- [ ] Delimitou o **marco da atividade criminosa** e excluiu bens anteriores/lícitos?
- [ ] Invocou **terceiro de boa-fé / meação** e avaliou **embargos de terceiro**?
- [ ] Atacou a **medida assecuratória** (falta de fumus, excesso, impenhorabilidade)?
- [ ] Sustentou que **não há inversão do ônus** contra o réu (presunção de inocência)?
- [ ] Passou **todas as citações** pelo gate `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Tratar perdimento clássico e confisco alargado como se tivessem os mesmos requisitos.
- Aceitar confisco alargado sem requerimento tempestivo do MP (§3º).
- Deixar passar a **irretroatividade** em fatos anteriores a 2020.
- Aceitar a **inversão total do ônus** da prova contra o acusado.
- Permitir perdimento de **instrumento lícito** fora das hipóteses do §5º.
- Esquecer o **terceiro de boa-fé** e a **meação** do cônjuge.
- Confiscar patrimônio **acima da diferença** apurada (confisco geral vedado).
- Citar súmula/tema "sobre o 91-A" sem conferência (não há enunciado consolidado).

## Nota de conformidade e lembretes finais

- **Classifique o instituto primeiro** — perdimento clássico, equivalência ou alargado; cada um tem requisito e ônus próprios.
- **Irretroatividade e preclusão (§3º)** são as duas teses processuais mais fortes contra o 91-A.
- **Presunção de inocência** barra a inversão do ônus; a acusação prova a incompatibilidade.
- **Terceiro de boa-fé, meação e limite ao patrimônio transferido** (art. 5º, XLV) protegem quem não é o condenado.
- **Ataque cautelar cedo** — sequestro/arresto sem *fumus* devem ser levantados (arts. 125-131 CPP).
- **Citation Gate obrigatório:** tema recente, sem súmula consolidada — confira tudo via `jurisprudencia-stj-stf`; **prefira tese+dispositivo a número de acórdão**; na dúvida, omita.
- **Revisão humana obrigatória.** Este material é apoio à preparação — a responsabilidade pela peça e pelas teses é sempre do **advogado** (CED, art. 2º). Rascunho técnico, hipótese a confirmar antes de protocolar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
