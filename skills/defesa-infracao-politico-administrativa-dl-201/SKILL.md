---
name: defesa-infracao-politico-administrativa-dl-201
description: >-
  Use ao defender prefeito (ou ex-prefeito) em INFRAÇÃO POLÍTICO-ADMINISTRATIVA do art. 4º do
  Decreto-Lei 201/1967 — processo de CASSAÇÃO DO MANDATO julgado pela Câmara Municipal, de natureza
  política e não penal: correta qualificação (infração política x crime de responsabilidade do art.
  1º), devido processo legislativo (contraditório, quórum, motivação), atipicidade da conduta,
  controle judicial do ato de cassação… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, responsabilidade-prefeito, dl-201]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-infracao-politico-administrativa-dl-201", "defesa infracao", "politico administrativa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-infracao-politico-administrativa-dl-201"]
---

# Infrações político-administrativas de prefeito (DL 201/67, art. 4º) — Defesa

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

Esta skill orienta a **defesa** do prefeito (ou ex-prefeito) processado por **infração político-administrativa** do **art. 4º do Decreto-Lei 201/1967**. O processo corre **na Câmara Municipal**, tem por sanção a **cassação do mandato** (perda do cargo eletivo) e **natureza política** — não é ação penal e não gera pena privativa de liberdade. O bem jurídico tutelado é a **probidade e a regularidade no exercício do mandato executivo municipal**, aferida pelo Legislativo local no exercício de sua função fiscalizadora.

> **Lição central:** a **primeira batalha é de qualificação**. O DL 201/67 abriga **dois universos distintos** que a acusação frequentemente embaralha: os **crimes de responsabilidade** do **art. 1º** (natureza penal, ação penal pública, julgamento pelo **Poder Judiciário** — historicamente com foro por prerrogativa) e as **infrações político-administrativas** do **art. 4º** (natureza política, julgamento pela **Câmara Municipal**, sanção de **cassação**). Antes de qualquer tese de mérito, pergunte: **o que está imputado é infração do art. 4º ou crime do art. 1º?** A resposta define o **órgão competente**, o **rito**, a **sanção** e todo o arsenal defensivo. Confundir os dois é o erro que a defesa explora — e não pode cometer.

> **Cautela de vigência (obrigatória antes de citar):** a **competência e o foro** aplicáveis ao DL 201/67 sofreram **alterações jurisprudenciais relevantes** ao longo do tempo (inclusive sobre a subsistência do foro por prerrogativa após o fim do mandato). **Não afirme competência, foro ou rito de memória.** Confira a **jurisprudência atual do STF e do STJ** pela skill `jurisprudencia-stj-stf` antes de sustentar qualquer proposição sobre órgão julgador, foro ou recorribilidade. Súmula, tese de repercussão geral ou precedente sobre o tema → **[NÃO VERIFICADO]** até passar pelo gate. Na dúvida, **omitir vence inventar**.

## Base legal

- **DL 201/1967, art. 1º** — **crimes de responsabilidade** dos prefeitos, **sujeitos ao julgamento do Poder Judiciário, independentemente do pronunciamento da Câmara**. São de **natureza penal** (rol de condutas: apropriação/desvio de rendas, aplicação indevida de verbas, contratação sem licitação nas hipóteses legais, etc.). **Não é o objeto desta skill**, mas é a fronteira que a defesa precisa marcar.
- **DL 201/1967, art. 4º** — **infrações político-administrativas** dos prefeitos, **sujeitas ao julgamento pela Câmara dos Vereadores e sancionadas com a cassação do mandato**. Rol legal de infrações (ex.: impedir o funcionamento da Câmara; deixar de fornecer certidões; desatender convocações/pedidos de informação; retardar/deixar de publicar leis e atos; descumprir orçamento; ausência do Município sem autorização; proceder de modo incompatível com a dignidade e o decoro do cargo, entre outras do próprio artigo).
- **DL 201/1967, art. 5º** — **rito do processo na Câmara** (recebimento da denúncia, comissão processante, prazos, defesa, instrução e votação por **quórum qualificado**). É a espinha do **devido processo legislativo** que a defesa fiscaliza passo a passo.
- **Interface — Lei 8.429/1992 (Improbidade Administrativa)** — sanções cíveis por ato de improbidade (esfera **autônoma**); serve à tese de **independência das instâncias** e ao afastamento do *bis in idem* sancionatório.
- **Interface — Lei 1.079/1950** — crimes de responsabilidade de outras autoridades (Presidente, Ministros, Governadores); **referência sistemática** e analógica sobre o modelo de julgamento político, sem aplicação direta ao prefeito (que tem regência própria no DL 201/67).
- **CF/1988** — devido processo legal, contraditório e ampla defesa (**art. 5º, LIV e LV**); inafastabilidade do controle jurisdicional (**art. 5º, XXXV**), fundamento do **controle judicial** do ato de cassação.

## Natureza jurídica e roteiro de qualificação (a defesa disseca)

O art. 4º do DL 201/67 institui um **julgamento político** de índole **sancionatório-administrativa**, cuja pena é a **perda do mandato**. Isso tem consequências que a defesa explora:

1. **Órgão julgador:** a **Câmara Municipal** (não o Judiciário). O prefeito é julgado por seus pares políticos locais — o que abre espaço para vícios de **imparcialidade, motivação política e desvio de finalidade**.
2. **Sanção:** exclusivamente **cassação do mandato** (perda do cargo). **Não há** pena criminal, nem os efeitos secundários de uma condenação penal.
3. **Pressuposto do objeto:** a infração do art. 4º **pressupõe mandato em curso**. Cessado o mandato (fim do período, renúncia, cassação já operada), o processo de cassação, em regra, **perde o objeto** — tese central de **perda de objeto/prejudicialidade**.
4. **Independência das instâncias:** o mesmo fato pode repercutir na esfera **penal** (art. 1º do DL 201, ou crimes comuns), **cível** (improbidade — Lei 8.429/92) e **política** (art. 4º). São **autônomas**; a absolvição penal por insuficiência de provas **não vincula** automaticamente a esfera política, e vice-versa — mas a **absolvição penal por negativa de autoria ou de materialidade** repercute e deve ser invocada.

**Método:** teste, em separado, **(a) a qualificação** (é art. 4º mesmo, ou art. 1º disfarçado?), **(b) o processo** (o rito do art. 5º foi observado?), **(c) a tipicidade político-administrativa** (a conduta descrita se enquadra em alguma infração do rol do art. 4º?) e **(d) a proporcionalidade** (a cassação é medida adequada e necessária ao caso?). A ausência de qualquer um desses pilares sustenta a defesa.

## Devido processo legislativo — a fiscalização do rito (art. 5º)

O processo de cassação é **político**, mas **não é arbitrário**: submete-se ao **devido processo legal** (CF, art. 5º, LIV e LV). A defesa audita cada etapa do rito da Câmara:

- **Recebimento e admissibilidade da denúncia** — legitimidade do denunciante, aptidão da peça acusatória (descrição individualizada de fato subsumível a infração do art. 4º), decisão de recebimento motivada.
- **Formação da comissão processante** — regularidade da composição e do sorteio/eleição dos membros; **impedimento e suspeição** de vereadores comprometidos (ex.: adversários políticos diretos, autores da denúncia, interesse pessoal no resultado).
- **Contraditório e ampla defesa** — intimação válida, prazo adequado de defesa, **direito à produção de provas**, acesso integral aos autos, defesa técnica.
- **Instrução** — realização das provas requeridas ou **motivação idônea** do indeferimento; vedação a cerceamento de defesa.
- **Quórum e votação** — observância do **quórum qualificado** exigido pelo DL 201/67 e pelo regimento; votação **nominal e motivada**.
- **Motivação da decisão** — o ato de cassação deve indicar **fatos e fundamentos**; cassação **sem motivação** ou por **motivação genérica/política** é nula.

➡️ **Tese processual central:** **qualquer** vício substancial do rito do art. 5º (cerceamento de defesa, quórum inválido, comissão suspeita, ausência de motivação) gera **nulidade** do processo de cassação, sanável por **mandado de segurança** ou **ação anulatória** perante o Judiciário.

## Catálogo de teses defensivas

1. **Erro de qualificação (art. 4º x art. 1º)** — a imputação descreve, na verdade, **crime de responsabilidade do art. 1º** (competência do **Judiciário**), e não infração político-administrativa; a Câmara é **incompetente** para julgar como cassação o que é matéria penal. Inversamente, se a acusação penal descreve conduta que é **mera infração do art. 4º**, falta **justa causa** para a ação penal.
2. **Atipicidade político-administrativa** — a conduta imputada **não se enquadra** em nenhuma das infrações do **rol do art. 4º**; o rol é **taxativo** e não comporta ampliação por analogia para cassar o mandato.
3. **Nulidade por vício do devido processo legislativo (art. 5º)** — cerceamento de defesa, prazo insuficiente, indeferimento imotivado de provas, ausência de intimação válida.
4. **Nulidade por quórum ou votação irregular** — descumprimento do **quórum qualificado**; votação não nominal; ausência de motivação individual dos votos quando exigida.
5. **Impedimento/suspeição de vereadores** — participação, na comissão ou na votação, de vereadores **parciais** (denunciantes, adversários diretos, com interesse pessoal); contaminação da imparcialidade do órgão julgador.
6. **Ausência de motivação idônea do ato de cassação** — cassação fundada em **motivação política**, genérica ou dissociada dos fatos provados → nulidade e **controle judicial**.
7. **Perda de objeto / prejudicialidade** — **fim do mandato**, renúncia ou encerramento do período legislativo antes do julgamento esvaziam a finalidade da cassação.
8. **Desproporcionalidade da sanção** — a cassação é a **sanção política máxima**; conduta de menor gravidade não a comporta (adequação e necessidade — CF, princípio da proporcionalidade). Explorar a **gradação** e a inexistência de dano relevante.
9. **Independência das instâncias a favor da defesa** — invocar **absolvição penal por negativa de autoria/materialidade** ou decisão de improbidade favorável já transitada, para desconstituir o suporte fático da cassação.
10. **Desvio de finalidade / perseguição política** — o processo foi instrumentalizado como **retaliação** de maioria adversária; demonstrar o contexto político e a ausência de lastro fático.
11. **Controle judicial do mérito quando há vício** — embora o mérito político seja, em regra, do Legislativo, o Judiciário controla **legalidade, formalidades, motivação e ocorrência dos fatos** — daí o cabimento de **MS** e **ação anulatória**.
12. **Fragilidade probatória** — a infração precisa estar **provada nos autos do processo da Câmara**; presunções, prova emprestada sem contraditório e ilações não sustentam a cassação.

## Contra-teses da acusação (antecipar)

- **A conduta se enquadra no rol do art. 4º** — a acusação sustentará a subsunção direta a uma das infrações (ex.: proceder incompatível com o decoro; descumprimento de dever legal específico).
- **O rito foi regular** — atas, intimações e prazos formalmente observados; a defesa deve demonstrar o **vício substancial**, não meramente formal irrelevante.
- **Soberania e mérito político da Câmara** — a acusação invocará que o **juízo de conveniência política** é insindicável pelo Judiciário. **Rebate:** o controle judicial alcança **legalidade, devido processo, motivação e existência dos fatos** — não o mérito discricionário puro, mas todo o resto.
- **Independência das instâncias contra a defesa** — a acusação dirá que eventual absolvição penal ou cível **não vincula** o julgamento político. **Rebate:** correto em regra, **salvo** absolvição penal por **negativa de autoria/materialidade** (que repercute) e desde que preservados contraditório e prova.
- **Gravidade da conduta justifica a cassação** — a acusação enfatizará o dano ao Município. **Rebate:** exigir **prova concreta** do dano e testar a **proporcionalidade** da sanção máxima.

A defesa deve **atacar cada uma na origem**: qualificação correta, vício substancial (não formal irrelevante), amplitude real do controle judicial e prova efetiva do fato e do dano.

## Distinção de figuras próximas

| Instituto | Natureza | Órgão julgador | Sanção típica | Uso pela defesa |
|---|---|---|---|---|
| **Infração político-administrativa (DL 201, art. 4º)** | política | **Câmara Municipal** | **cassação do mandato** | objeto desta skill: fiscalizar rito, tipicidade e proporcionalidade |
| **Crime de responsabilidade (DL 201, art. 1º)** | penal | **Poder Judiciário** | pena criminal + efeitos | se a imputação é penal, a Câmara é **incompetente** para cassar por esse fundamento |
| **Improbidade administrativa (Lei 8.429/92)** | cível-sancionatória | **Judiciário (vara cível/Fazenda)** | perda da função, ressarcimento, suspensão de direitos políticos, multa | **independência**; afastar *bis in idem* e transporte automático de provas |
| **Crime comum** | penal | **Judiciário** | pena criminal | não confundir com infração política; foro e rito próprios |
| **Perda de mandato por decisão da Justiça Eleitoral** | eleitoral | **Justiça Eleitoral** | cassação/inelegibilidade | via e fundamentos distintos do art. 4º |

> **Atenção:** a **taxatividade** do rol do art. 4º é aliada da defesa — não se cassa mandato por conduta **não prevista** como infração político-administrativa, ainda que reprovável em outra esfera.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** o tema **competência/foro do DL 201/67** teve **evolução jurisprudencial** no STF e no STJ (inclusive sobre o alcance do foro por prerrogativa e sua subsistência após o mandato, e sobre os limites do controle judicial do processo de cassação). **Não cite acórdão, tese de repercussão geral ou súmula de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça.

Pontos que **exigem conferência** antes de afirmar (todos **[NÃO VERIFICADO]**):
- **Competência para julgar o crime do art. 1º** e a **subsistência (ou não) do foro por prerrogativa** após o término do mandato do prefeito.
- **Extensão do controle judicial** sobre o processo de cassação (legalidade/formalidades x mérito político).
- **Cabimento e via** de impugnação (mandado de segurança, ação anulatória, HC quando houver reflexo penal).
- **Repercussão** da absolvição penal (por negativa de autoria/materialidade) sobre a esfera política.

Enunciado específico sobre qualquer desses pontos → **[NÃO VERIFICADO]** — buscar precedente **atual** antes de afirmar. **Omitir vence inventar.**

## Checklist e anti-padrões

- [ ] **Qualificação:** a imputação é **art. 4º** (infração política) ou **art. 1º** (crime de responsabilidade)? A Câmara é competente para o que se pede?
- [ ] **Tipicidade:** a conduta se enquadra em **infração do rol** do art. 4º? O rol é taxativo — há previsão expressa?
- [ ] **Rito (art. 5º):** recebimento motivado, comissão regular, contraditório, prazo de defesa, produção de provas e **quórum qualificado** observados?
- [ ] **Imparcialidade:** há **vereadores impedidos/suspeitos** na comissão ou na votação?
- [ ] **Motivação:** o ato de cassação indica **fatos e fundamentos**, ou é genérico/político?
- [ ] **Objeto:** o **mandato ainda está em curso**? Houve fim do período/renúncia (perda de objeto)?
- [ ] **Proporcionalidade:** a cassação (sanção máxima) é adequada e necessária à gravidade concreta?
- [ ] **Independência das instâncias:** há decisão penal/cível favorável a invocar (negativa de autoria/materialidade)?
- [ ] **Via de controle judicial:** MS ou ação anulatória cabível diante do vício apontado (conferir via/competência no gate)?
- [ ] **Citações conferidas** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- **Confundir** infração político-administrativa (art. 4º) com crime de responsabilidade (art. 1º) — órgão, rito e sanção são distintos.
- Ampliar por **analogia** o rol do art. 4º para cassar por conduta não prevista.
- Tratar o processo político como **imune** ao controle judicial — legalidade, devido processo e motivação são sindicáveis.
- Aceitar **cassação sem motivação** ou por maioria política sem lastro fático.
- Ignorar **impedimento/suspeição** de vereadores adversários.
- Afirmar **competência, foro ou recorribilidade** sem passar pelo gate de jurisprudência (o tema mudou).
- Deixar de arguir **perda de objeto** quando o mandato já se encerrou.
- Importar automaticamente prova e conclusão de **outra instância** sem contraditório no processo da Câmara.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público / denunciante na Câmara**, a lógica se **inverte** — o ônus de demonstrar a **tipicidade político-administrativa**, a **prova do fato** e a **regularidade do rito** é de quem acusa; espelhar as teses acima como pontos a **sustentar e provar**, e não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). O tema **competência/foro do DL 201** é sensível a mudanças — há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido e de terceiros não vão a repositório público.

## Lembretes finais

- **Qualificação primeiro:** art. 4º (Câmara, cassação, política) x art. 1º (Judiciário, penal) — não confunda os universos.
- **Rito é lei:** o devido processo legislativo (art. 5º — contraditório, quórum, motivação) é sindicável pelo Judiciário; vício substancial gera nulidade.
- **Rol taxativo:** não se cassa mandato por conduta fora do art. 4º.
- **Proporcionalidade:** a cassação é a sanção máxima — exija adequação e necessidade.
- **Perda de objeto:** fim do mandato esvazia o processo de cassação.
- **Independência das instâncias** joga nos dois sentidos — use a absolvição penal por negativa de autoria/materialidade.
- **Competência e foro mudaram** — confira tudo via `jurisprudencia-stj-stf`; nada de memória.

**Padrão de redação:** ao redigir a peça (defesa na Câmara, memoriais, mandado de segurança ou ação anulatória), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
