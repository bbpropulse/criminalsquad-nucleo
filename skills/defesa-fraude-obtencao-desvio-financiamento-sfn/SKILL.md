---
name: defesa-fraude-obtencao-desvio-financiamento-sfn
description: >-
  Use ao construir a DEFESA nos crimes de obtenção fraudulenta de financiamento (art. 19 da Lei
  7.492/1986) e de desvio/aplicação em finalidade diversa (art. 20) — crimes contra o Sistema
  Financeiro Nacional: atipicidade por ausência de instituição financeira ou equiparada, ausência de
  fraude idônea ou de dolo, financiamento x mero empréstimo, aplicação regular x desvio, ausência de
  prejuízo, ne bis in idem com estelionato… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: ["law", "criminal", "defesa", "sistema-financeiro"]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-fraude-obtencao-desvio-financiamento-sfn", "defesa fraude", "desvio financiamento"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-fraude-obtencao-desvio-financiamento-sfn"]
---

# Fraude na obtenção e desvio de financiamento (SFN) — Defesa

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

Esta skill orienta a **defesa técnica** nos crimes contra o **Sistema Financeiro Nacional** ligados a financiamento: a **obtenção de financiamento mediante fraude** (**art. 19 da Lei 7.492/1986**) e a **aplicação de recursos de financiamento em finalidade diversa da prevista em lei ou contrato — o desvio** (**art. 20**). O bem jurídico é a **higidez do SFN** e a confiança na captação, intermediação e aplicação de recursos de terceiros. São crimes de **competência da Justiça Federal**, com forte interface com o **estelionato** (CP, art. 171) e com a **falsidade documental** (CP, arts. 297-299).

> **Lição central:** antes de qualquer tese de mérito, **teste dois pressupostos que sustentam todo o tipo**: (1) do outro lado da relação há uma **instituição financeira ou equiparada** na acepção do **art. 1º e parágrafo único** da Lei 7.492/86? e (2) a operação é **financiamento** — crédito **vinculado a uma finalidade** — ou **mero empréstimo/mútuo livre**? Se falta a instituição qualificada, ou se o negócio não é financiamento, **desaparece o crime especial**: sobra, no máximo, estelionato comum (CP, art. 171), com pena e competência diferentes. É nesse duplo filtro — **sujeito passivo qualificado** e **natureza da operação** — que a defesa ganha ou perde.

> **Cautela de vigência e verificação (obrigatória antes de citar):** (1) o **conceito de instituição financeira** (art. 1º) e a **abrangência do art. 19** têm **jurisprudência específica e oscilante** — o que é "equiparada", o que é "financiamento" e a linha entre 19 e o estelionato foram construídos caso a caso pelo STJ/STF; **não afirme nada de memória**. (2) A **competência** e as **súmulas de conflito** (Justiça Federal x Estadual; conexão; absorção de falso) **passam obrigatoriamente pela skill `jurisprudencia-stj-stf`**. (3) Para a **prescrição** e a **dosimetria**, confira a **redação vigente** dos dispositivos e a data dos fatos. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 19, Lei 7.492/1986** — **obter, mediante fraude, financiamento em instituição financeira**; pena de **reclusão, de 2 a 6 anos, e multa**; **parágrafo único** — a pena é **aumentada de 1/3** se o crime é cometido em detrimento de **instituição financeira oficial** ou por ela **credenciada** para o repasse de financiamento.
- **Art. 20, Lei 7.492/1986** — **aplicar, em finalidade diversa da prevista em lei ou contrato, recursos provenientes de financiamento** concedido por **instituição financeira oficial** ou por instituição **credenciada** para repassá-lo; pena de **reclusão, de 2 a 6 anos, e multa**. (Atenção: o art. 20 é **mais restrito** — só alcança recursos de instituição **oficial** ou **credenciada** para repasse.)
- **Art. 1º e parágrafo único, Lei 7.492/1986** — **conceito** de instituição financeira (PJ de direito público ou privado que tenha por atividade, principal ou acessória, a **captação, intermediação ou aplicação** de recursos de terceiros, ou a custódia/negociação de valores mobiliários) e **equiparações** (quem administre seguros, câmbio, consórcio, capitalização, poupança ou recursos de terceiros; a **pessoa natural** que exerça tais atividades, ainda que eventual).
- **Art. 26, Lei 7.492/1986** — **ação penal** promovida pelo **Ministério Público Federal**, perante a **Justiça Federal** (define a competência).
- **CP, art. 171** — **estelionato**: a figura comum que subsiste quando o crime especial **não** se configura (fraude sem instituição financeira/financiamento).
- **CP, arts. 297-299** — **falsidade documental** (documento público, particular e falsidade ideológica): meio frequente da fraude do art. 19 — daí a discussão de **absorção / concurso** e de *ne bis in idem*.

## Anatomia dos tipos — roteiro de subsunção

### Art. 19 — obtenção fraudulenta de financiamento

Decomponha e teste **cada elemento em separado**:

1. **Núcleo "obter... financiamento"** — o crime pressupõe **financiamento**, isto é, crédito **vinculado a uma finalidade** (investimento, custeio, projeto). **Empréstimo/mútuo livre**, sem vinculação de destino, **não** é financiamento — ver a distinção adiante.
2. **"mediante fraude"** — exige **fraude idônea e determinante**, capaz de **iludir** a instituição e **causar** a concessão. Documento inócuo, informação irrelevante ou dado que a instituição já conhecia (ou deveria conhecer por dever de diligência) **não** é fraude típica.
3. **"em instituição financeira"** — **sujeito passivo qualificado**: precisa ser instituição financeira **ou equiparada** (art. 1º). É o filtro decisivo (seção própria).
4. **Elemento subjetivo — dolo** de obter o financiamento **mediante** a fraude. **Não há forma culposa**. Inadimplência posterior, dificuldade econômica superveniente ou frustração do negócio **não** provam dolo de fraude no momento da contratação.

**Consumação (ponto controvertido — CONFERIR):** discute-se se o art. 19 se consuma com a **efetiva obtenção/liberação** do financiamento (crime material) ou com a **prática da fraude apta** independentemente do prejuízo (crime formal). A tese defensiva de **crime material** — que exige a liberação dos recursos — abre espaço para **tentativa** e para negar consumação. **Não afirme a natureza do crime sem checar** via `jurisprudencia-stj-stf`.

### Art. 20 — desvio (aplicação em finalidade diversa)

1. **Recursos de financiamento** já **regularmente concedido** (aqui **não** há fraude na origem — a obtenção foi lícita).
2. **Origem qualificada** — os recursos devem provir de instituição **oficial** ou **credenciada para repasse**. Fora disso, **atipicidade** do art. 20.
3. **Aplicação em finalidade diversa** da prevista **em lei ou contrato** — é o **desvio**.
4. **Dolo** de dar destino diverso. **Atraso, uso parcialmente diverso por força maior ou reprogramação anuída** pela instituição afastam o dolo típico.

➡️ **Regra de ouro:** art. 19 pune a **fraude na entrada**; art. 20 pune o **desvio na aplicação** de crédito **licitamente** obtido. **Não** se acumulam automaticamente para os mesmos recursos — enfrente eventual **imputação cumulativa** como **bis in idem** ou **progressão criminosa** conforme o caso concreto.

## Filtro nº 1 — há instituição financeira ou equiparada? (atipicidade do sujeito passivo)

Este é o **coração da defesa** no art. 19. Sem instituição financeira **ou equiparada** (art. 1º e parágrafo único), **não há crime contra o SFN** — a fraude, se houver, é **estelionato comum** (CP, art. 171), julgado em regra pela **Justiça Estadual**.

- **O que atrai o tipo:** bancos, financeiras, cooperativas de crédito, administradoras de consórcio, seguradoras, entidades que **captem/administrem recursos de terceiros** — inclusive por **equiparação** (parágrafo único).
- **O que a defesa questiona:** operações com **entes que não captam/aplicam recursos de terceiros**; **fomento público não financeiro**; **fornecedor comercial** que "financia" a própria venda; particulares. Se o "financiador" **não** se enquadra no art. 1º, **cai** o art. 19.
- **Consequência prática:** a **desqualificação do sujeito passivo** desloca a competência para a **Justiça Estadual** e muda a pena/base típica — é tese de **atipicidade** do crime especial **e** de **incompetência** da Justiça Federal.

> A abrangência do conceito (o que é "equiparada", até onde vai a captação de recursos de terceiros) tem **precedentes específicos** — marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`.

## Filtro nº 2 — financiamento ou mero empréstimo?

- **Financiamento:** crédito **com destinação vinculada** (linha de custeio/investimento, projeto aprovado, contrato com finalidade específica). Só ele preenche o art. 19 (e, quanto à aplicação, o art. 20).
- **Empréstimo/mútuo livre:** entrega de recursos **sem vinculação de finalidade**. Fraude para obter **empréstimo comum** tende a **não** ser art. 19 — reconduz-se a **estelionato** (CP, art. 171), com a competência e a pena próprias.
- **Uso pela defesa:** demonstrar, pelo **contrato e pela natureza da operação**, que não houve **financiamento** no sentido técnico — logo, **atipicidade** do crime especial.

## Catálogo de teses defensivas

1. **Atipicidade por ausência de instituição financeira/equiparada** (art. 1º) — o "financiador" não capta/aplica recursos de terceiros → **não é crime contra o SFN**; no máximo, estelionato estadual.
2. **Atipicidade por não ser financiamento** — operação é **mútuo/empréstimo livre**, sem finalidade vinculada → fora do art. 19/20.
3. **Ausência de fraude idônea** — o meio não era apto a iludir; a instituição tinha (ou devia ter, por sua diligência) acesso à informação verdadeira; dado inócuo ou irrelevante para a concessão.
4. **Ausência de dolo** — a fraude não foi **determinante** da concessão; a inadimplência decorreu de **evento superveniente** (crise, quebra de safra, força maior), não de intenção fraudulenta na origem.
5. **Aplicação regular x desvio (art. 20)** — os recursos foram aplicados na finalidade contratada, ou o desvio foi **anuído/reprogramado** pela instituição, ou decorreu de força maior sem dolo.
6. **Origem não qualificada no art. 20** — recursos que **não** provêm de instituição **oficial** nem **credenciada para repasse** → atipicidade do desvio.
7. **Ausência de prejuízo / consumação não demonstrada** — se sustentada a natureza **material** do art. 19, a não liberação dos recursos impede a consumação (tentativa, no máximo) — **CONFERIR** natureza do crime.
8. ***Ne bis in idem* e absorção com o estelionato** — os **mesmos fatos** não podem ser punidos por **art. 19 e CP art. 171** cumulativamente; ou é crime especial (SFN), ou é o comum. Enfrentar dupla imputação e princípio da especialidade.
9. **Falsidade documental — absorção (consunção)** — quando o **falso** (CP, arts. 297-299) foi **meio** e se **exauriu** na fraude do art. 19, sustentar **absorção**; do contrário, negar concurso material indevido. Verificar enunciados de absorção via `jurisprudencia-stj-stf`.
10. **Incompetência da Justiça Federal** (art. 26) — se afastado o crime contra o SFN, o feito deve ir à **Justiça Estadual**; suscitar **incompetência** e o destino da prova.
11. **Extinção da punibilidade — prescrição** — pena de 2 a 6 anos; verificar prescrição pela **pena in abstracto** e, após eventual condenação, **retroativa/intercorrente**.
12. **Dosimetria** — afastar o **aumento de 1/3** do parágrafo único do art. 19 quando não demonstrado o detrimento de **instituição oficial**/credenciada; pena-base no mínimo; regime e substituição conforme o quantum (rode em `calculadora-dosimetria`).

## Contra-teses da acusação (antecipar)

- **Instituição enquadrada** — a captação/administração de recursos de terceiros (inclusive por **equiparação**, parágrafo único) atrai o art. 1º.
- **Financiamento com finalidade vinculada** comprovada pelo **contrato** e pela linha de crédito → afasta a tese de "mero empréstimo".
- **Fraude determinante** — documentos/declarações falsas foram a **causa** da concessão; a diligência da instituição não afasta a fraude do agente.
- **Dolo na origem** — o esquema (documentos forjados, garantias inexistentes, laranjas) demonstra intenção fraudulenta **anterior** à inadimplência.
- **Concurso com o falso** — falsidade autônoma, não exaurida na fraude, justificaria concurso (art. 297-299 + art. 19).
- **Competência federal firme** (art. 26) — sendo instituição financeira, a JF é competente por força de lei.

A defesa **ataca cada uma na origem**: qualifica juridicamente o **sujeito passivo** e a **operação**; questiona a **idoneidade e a causalidade** da fraude; demonstra **evento superveniente** que rompe o dolo; e enfrenta a **dupla punição** (SFN x estelionato x falso).

## Distinção de figuras próximas

| Tipo | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Estelionato (CP 171)** | fraude para vantagem ilícita **sem** instituição financeira/financiamento | Se não há instituição do art. 1º **ou** não é financiamento → **reconduzir** ao 171 (competência estadual, outra pena) |
| **Obtenção fraudulenta — art. 19 (SFN)** | fraude **na entrada** do financiamento em instituição financeira | Confirmar os **dois filtros**; negar fraude idônea/dolo |
| **Desvio — art. 20 (SFN)** | crédito **licitamente** obtido, **aplicado** em finalidade diversa | Sem origem **oficial/credenciada** ou sem dolo de desviar → atípico |
| **Falsidade documental (CP 297-299)** | falso como **meio** da fraude | Sustentar **absorção/consunção** quando exaurido no art. 19; afastar concurso material |

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** o **conceito de instituição financeira** (art. 1º), a **abrangência do art. 19**, a linha com o **estelionato**, a **absorção do falso** e a **competência** (Justiça Federal x Estadual; súmulas de **conflito**) têm precedentes **específicos e oscilantes**. **Não cite acórdão, tese ou súmula de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça.

Pontos a **verificar** (não afirmar sem checar):
- **Natureza do art. 19** — crime **formal** ou **material** (exige liberação dos recursos?) — impacta consumação, tentativa e prescrição. **[NÃO VERIFICADO]**
- **Absorção da falsidade** pelo crime do art. 19 (consunção quando o falso se exaure no fim) — enunciado e alcance. **[NÃO VERIFICADO]**
- **Súmulas de conflito de competência (STJ)** — Justiça Federal x Estadual, conexão e reunião de processos. **[NÃO VERIFICADO]**
- **Conceito de "instituição financeira por equiparação"** e limites do art. 1º, parágrafo único. **[NÃO VERIFICADO]**

## Checklist e anti-padrões

- [ ] **Filtro 1:** o "financiador" é **instituição financeira ou equiparada** (art. 1º e parágrafo único)? Se não → atipicidade do crime especial.
- [ ] **Filtro 2:** a operação é **financiamento** (finalidade vinculada) ou **empréstimo/mútuo livre**?
- [ ] **Fraude:** o meio era **idôneo e determinante** da concessão, ou dado inócuo/já conhecido?
- [ ] **Dolo:** houve intenção fraudulenta **na origem**, ou **inadimplência por evento superveniente**?
- [ ] **Art. 20:** os recursos provêm de instituição **oficial/credenciada** e houve **desvio doloso** da finalidade?
- [ ] **Consumação:** natureza do art. 19 (formal/material) **conferida** — cabe tentativa/ausência de prejuízo?
- [ ] ***Ne bis in idem*:** dupla imputação (art. 19 **e** CP 171) enfrentada pela **especialidade**?
- [ ] **Falso:** hipótese de **absorção/consunção** (arts. 297-299) avaliada?
- [ ] **Competência:** afastado o SFN, suscitada a **incompetência da Justiça Federal** (art. 26)?
- [ ] **Aumento (§ único do art. 19):** detrimento de instituição **oficial/credenciada** realmente demonstrado?
- [ ] **Prescrição** verificada (pena 2-6 anos; retroativa/intercorrente após condenação)?
- [ ] **Súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` — nada de memória?

**Anti-padrões (evitar):**
- Aceitar a capitulação no **art. 19** **sem** testar se do outro lado há **instituição financeira** e se a operação é **financiamento**.
- Confundir **inadimplência** (evento superveniente) com **dolo de fraude** na contratação.
- Somar **art. 19 + estelionato (171)** para os **mesmos fatos** sem enfrentar a **especialidade** e o *bis in idem*.
- Aceitar **concurso material** com o **falso** sem discutir a **absorção**.
- Aplicar o **art. 20** a recursos que **não** provêm de instituição **oficial/credenciada**.
- Manter o feito na **Justiça Federal** quando afastado o crime contra o SFN.
- Citar precedente sobre "instituição financeira", competência ou absorção **de memória**.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público Federal**, a lógica probatória se **inverte** — o ônus de demonstrar a **instituição financeira**, a **natureza de financiamento**, a **fraude idônea/determinante** e o **dolo** é da acusação; espelhar as teses acima como pontos a **provar**, e não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido, das operações e da instituição não vão a repositório público.

## Lembretes finais

- **Dois filtros primeiro:** **instituição financeira/equiparada** (art. 1º) **e** **financiamento** (finalidade vinculada). Falhando um, cai o crime especial — sobra estelionato estadual.
- **Art. 19 = fraude na entrada; art. 20 = desvio na aplicação** de crédito lícito — não se acumulam automaticamente.
- **Inadimplência não é fraude** — separe fato (não pagou), prova (documentos), inferência (havia dolo?) e tese.
- **Absorção do falso** e ***ne bis in idem*** com o estelionato são frentes obrigatórias de análise.
- **Competência (art. 26):** afastado o SFN, o destino é a **Justiça Estadual** — suscite a incompetência.
- **Sem jurisprudência de memória** — conceito de instituição financeira, natureza do art. 19 e súmulas de conflito passam por `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra). O cálculo de pena/regime vai para `calculadora-dosimetria`.
