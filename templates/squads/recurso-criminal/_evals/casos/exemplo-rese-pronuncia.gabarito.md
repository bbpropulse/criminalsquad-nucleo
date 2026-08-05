# Gabarito — Caso-ouro (FICTÍCIO) — RESE contra pronúncia

> **Arquivo do JUIZ.** Não deve ser carregado por nenhum step do pipeline nem
> lido por quem executa o squad. O enunciado está em `exemplo-rese-pronuncia.md`.

## Teses candidatas / Pontos de decisão

**Cabimento e prazo (Step 02) — o que precisa acertar:**
- Pronúncia → **Recurso em Sentido Estrito** (CPP, art. 581, IV). **Não** é caso de apelação (a apelação, na 1ª fase do júri, serve à impronúncia e à absolvição sumária — CPP, art. 416).
- **Não** é caso de embargos de declaração: não há vício de integração. Contra decisão de **1º grau**, os embargos de declaração têm sede no **art. 382 do CPP** (prazo de 2 dias, para obscuridade, ambiguidade, contradição ou omissão) — o art. 619 do CPP trata dos embargos contra **acórdão**, e não se aplica aqui. Excesso de linguagem é nulidade, não vício de integração.
- Prazo: **5 dias** (CPP, art. 586, *caput*). Prazo **contínuo** (CPP, art. 798, *caput*), com exclusão do dia do começo e inclusão do dia do vencimento (CPP, art. 798, § 1º) — coincidente, aqui, com o início no primeiro dia útil seguinte à publicação (Lei 11.419/2006, art. 4º, § 4º).
  - Termo inicial (publicação): **16/07/2026** (quinta-feira) → 1º dia do prazo: 17/07 (sex); 2º: 18/07 (sáb); 3º: 19/07 (dom); 4º: 20/07 (seg); 5º: **21/07/2026 (terça-feira, dia útil)**.
  - **Data-limite: 21/07/2026** — sem prorrogação a computar (o vencimento não cai em sábado, domingo ou feriado).
- Razões em 2 dias (CPP, art. 588), na prática ofertadas com a interposição.
- Peça **bipartida**: interposição ao juízo *a quo* + razões ao tribunal.
- **Efeito regressivo**: a interposição deve requerer expressamente a **retratação** (CPP, art. 589) e, subsidiariamente, a remessa ao tribunal.
- Sobe **nos próprios autos** (CPP, art. 583, II, que remete ao art. 581, IV — réu único, portanto sem o traslado do parágrafo único) e suspende **apenas o julgamento** em plenário (CPP, art. 584, § 2º).

**Teses para as razões, escalonadas pela eventualidade (Steps 04–05):**
1. **Principal — nulidade da pronúncia por excesso de linguagem:** a fundamentação deve limitar-se à indicação da materialidade do fato e dos indícios suficientes de autoria ou participação (CPP, art. 413, *caput* e § 1º); o trecho transcrito emite juízo de certeza sobre autoria, dolo e mérito da excludente, contaminando a imparcialidade dos jurados. *(Há controvérsia nos tribunais sobre a consequência — anulação da decisão × mero desentranhamento/envelopamento; a pesquisa do Step 04 deve mapear e verificar.)*
2. **Subsidiária — absolvição sumária por legítima defesa:** CPP, art. 415, IV, c/c CP, art. 25 (repulsa a injusta agressão atual, com uso moderado dos meios necessários), amparada nas duas testemunhas presenciais e no laudo de lesões do réu.
3. **Subsidiária — desclassificação** para lesão corporal seguida de morte (CP, art. 129, § 3º) por ausência de *animus necandi*, com remessa ao juízo competente (CPP, art. 419): golpe único, sem reiteração.
4. **Subsidiária — decote das qualificadoras** dos incisos II e IV do § 2º do art. 121 do CP, por serem manifestamente improcedentes à luz da prova da 1ª fase — a especificação das qualificadoras na pronúncia decorre do art. 413, § 1º, do CPP, e o decote é a via para excluir as que não encontram lastro: a discussão sobre dívida afasta a futilidade, e o confronto frontal descrito por ambas as testemunhas é incompatível com surpresa ou recurso que dificulte a defesa.

**Armadilhas propositais (não devem aparecer no output):**
- Pedir retratação em peça de apelação, ou omitir o pedido de retratação no RESE.
- Suscitar teses de **pena** (dosimetria, regime, substituição) — impróprias no recurso da 1ª fase do júri.
- Sustentar **impronúncia** (CPP, art. 414): a autoria é incontroversa, logo a tese é tecnicamente incoerente com os autos.
- Invocar o art. 619 do CPP (embargos contra acórdão) para uma decisão de 1º grau.
- Citar súmula/precedente de memória, sem verificação.

## O que um bom output deve conter (referência para o juiz)

Um `output/cabimento.md` que classifique a peça como **Recurso em Sentido Estrito (CPP, art. 581, IV)**, bipartida e com efeito regressivo, e que registre a tempestividade com termo inicial (16/07/2026), prazo legal (5 dias — CPP, art. 586) e data-limite explícita (**21/07/2026**); e um `output/recurso.md` com **interposição** ao juízo *a quo* (afirmando a tempestividade e pedindo a retratação do art. 589) **e razões** ao tribunal, atacando especificamente os fundamentos da pronúncia (dialeticidade), com as teses escalonadas acima, cada uma sustentada por fundamento vindo da pesquisa do Step 04 — **sem nenhuma citação marcada `[NÃO VERIFICADO]` ou `[DIVERGENTE]`** —, aprovado na revisão jurídica isolada com veredito **APPROVE**, conforme os `success_criteria` do `squad.yaml`.

