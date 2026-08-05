---
name: inquiricao-delator-colaborador-audiencia
description: >-
  Use ao preparar e conduzir a INQUIRIÇÃO do delator/colaborador premiado em audiência, na
  perspectiva da DEFESA DO DELATADO — direito de reperguntar ao colaborador, exigência de
  corroboração (art. 4º, §16, da Lei 12.850/2013), exploração do interesse do colaborador nos
  benefícios, contradições e evolução das versões, ordem das alegações finais e nulidades do acordo.
  Gatilhos: colaboração premiada, delação, delator… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, inquiricao, colaboracao, audiencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["inquiricao-delator-colaborador-audiencia", "inquiricao delator", "colaborador audiencia"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-inquiricao-delator-colaborador-audiencia"]
---

# Inquirição de delator/colaborador em audiência — defesa do delatado

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

Esta skill orienta a **técnica de inquirição do colaborador premiado** (delator) em audiência, sob a **ótica da defesa do delatado** — aquele acusado a partir das declarações de quem firmou **acordo de colaboração premiada** (Lei 12.850/2013, art. 4º). O entregável é o **roteiro tático** de reperguntas e os **blocos de tese** que atravessam a instrução, os debates e os memoriais — não uma peça única. O eixo é sempre o mesmo: a delação **não é prova plena**; é **meio de obtenção de prova** que só condena quando **corroborado** por elementos independentes.

> **Lição central:** a defesa do delatado se ganha em **dois movimentos combinados**. Primeiro, **contraditório real** — exigir e exercer o **direito de reperguntar** ao colaborador em juízo, sob o crivo da defesa (não aceitar a delação como peça pronta do inquérito/acordo). Segundo, **cobrar a corroboração** do **art. 4º, §16**: nenhuma condenação pode fundar-se **apenas** nas declarações do colaborador. Toda a inquirição serve a esses dois fins — extrair contradições que abalam a credibilidade e evidenciar a **ausência de lastro externo** que sustente a palavra do delator. Sem prova independente que confirme a delação **quanto ao delatado concreto**, a imputação não se sustenta.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 12.850/2013 sofreu **alterações posteriores** — notadamente a **Lei 13.964/2019 (Pacote Anticrime)**, que reformulou o **§16 do art. 4º**. **Confira a redação vigente** do art. 4º e de seus parágrafos (§§10-12 e §16, com seus incisos) e do **art. 7º, §§2º-3º** (sigilo e acesso) na fonte oficial antes de fundamentar; verifique também a **numeração dos incisos** do §16, que a menção aqui trata como hipótese a confirmar. O regime jurídico da colaboração é **fortemente construído por jurisprudência** do STF/STJ (momento e limites da inquirição, ordem das alegações finais do delatado, standard de corroboração). **Nenhum tema, HC ou acórdão vai à peça de memória** — tudo passa pela skill `jurisprudencia-stj-stf`. Fatos e acordos regem-se pela lei vigente à época; verifique também eventual **irretroatividade** de regra processual gravosa. Na dúvida, **omitir vence inventar**.

## Base legal

- **Lei 12.850/2013, art. 4º** — colaboração premiada: pressupostos, resultados exigidos e benefícios (perdão judicial, redução de pena, substituição, progressão diferenciada).
- **Art. 4º, §16 (Lei 12.850/2013)** — **regra de corroboração**: nenhuma **medida** será decretada/proferida com **fundamento apenas** nas declarações do colaborador. É a âncora normativa da defesa do delatado. **Após a Lei 13.964/2019 (Pacote Anticrime)**, o §16 passou a abranger não só a **sentença condenatória** (inc. III), mas também **medidas cautelares reais ou pessoais** (inc. I) e o **recebimento de denúncia ou queixa** (inc. II) — o que estende a exigência de corroboração a **mais fases** do processo, reforçando a tese em prisões cautelares, medidas assecuratórias e na própria admissibilidade da acusação. Confira a redação vigente e a numeração dos incisos na fonte oficial (a menção aos incisos é **[NÃO VERIFICADO]** quanto ao texto exato — conferir).
- **Art. 4º, §§10-12 (Lei 12.850/2013)** — **retratação** das partes do acordo (§10) e efeitos das provas autoincriminatórias produzidas pelo colaborador; **apreciação dos termos do acordo pelo juiz na sentença** (§11); **oitiva do colaborador em juízo** — o delatado tem direito a que o colaborador seja ouvido sob o contraditório (§12). Confira a numeração e a redação vigentes.
- **Art. 7º, §§2º-3º (Lei 12.850/2013)** — **regime de sigilo** da colaboração: o pedido/acordo tramita em **sigilo** e o **acesso** aos autos é **restrito** ao juiz, ao Ministério Público e ao delegado (§2º), cessando a **decretação de sigilo** das declarações do colaborador com o **recebimento da denúncia** (§3º). É aqui — e não nos §§10-12 do art. 4º — que se ancoram o sigilo e os limites de acesso; a defesa do delatado invoca esses dispositivos para exigir **acesso integral**, a partir do momento oportuno, ao conteúdo que embasa a imputação. Confira a redação vigente.
- **CF, art. 5º, LV** — **contraditório e ampla defesa**: fundamento constitucional do direito do delatado a participar da colheita da prova e a reperguntar ao colaborador.
- **CPP, art. 212** — regime das **perguntas diretas das partes** ao depoente (o juiz complementa); baliza a mecânica da inquirição em audiência.
- **Jurisprudência do STF** sobre **direito do delatado a alegações finais em momento posterior** ao do colaborador e sobre o **standard de corroboração** — **[NÃO VERIFICADO]**, conferir via `jurisprudencia-stj-stf`.

## Natureza da colaboração — o que a defesa do delatado disseca

A colaboração premiada é **negócio jurídico processual** que produz **declarações** do colaborador. Essas declarações **não equivalem a prova testemunhal comum** e **não bastam, por si**, para condenar. A defesa do delatado trabalha três planos, em separado:

1. **Plano do valor probatório** — a delação é **meio de obtenção de prova**, não prova autônoma de condenação. Seu destino natural é **apontar caminhos** que a investigação deve confirmar por **fontes independentes**.
2. **Plano da credibilidade da fonte** — o colaborador tem **interesse jurídico direto** no resultado (obter/manter benefícios). Esse interesse é **fator de desconto** na valoração: quem depõe para reduzir a própria pena não é fonte desinteressada.
3. **Plano do contraditório** — a declaração só pode pesar contra o delatado se este teve **oportunidade real de reperguntar** ao colaborador em juízo. Delação colhida sem esse crivo é **elemento de investigação**, não prova apta a condenar.

**Método:** teste cada plano isoladamente. A imputação cai se falhar **qualquer** deles — falta de corroboração (§16), fonte contaminada pelo interesse, ou ausência de contraditório sobre as declarações.

## A regra de ouro: §16 — corroboração

O **art. 4º, §16** é a espinha dorsal da defesa. Consequências que se exploram:

- **Vedação de condenação com base só na delação:** ausente elemento **externo e independente** que confirme a palavra do colaborador **em relação ao delatado**, impõe-se a **absolvição** por insuficiência probatória.
- **Corroboração deve ser específica, não genérica:** o lastro externo precisa confirmar a **participação do delatado concreto**, não apenas a existência do esquema/fato em tese. Prova que corrobora "o contexto", mas não o elo do assistido, **não satisfaz** o §16.
- **Corroboração cruzada entre delatores é frágil:** uma delação **não corrobora** outra de forma bastante quando ambos os colaboradores compartilham o **mesmo interesse** no acordo — exigir fonte **independente** das delações.
- **Ônus é da acusação:** cabe ao órgão acusador demonstrar o lastro. A defesa **cobra**, não supre.

## Roteiro tático de inquirição do colaborador (cross-examination)

Prepare a inquirição por **blocos**, do menos ao mais sensível, controlando o registro em ata:

1. **Interesse e benefícios (fixar o desconto de credibilidade):** natureza do acordo, benefícios pactuados, cláusulas de **rescisão** e o que o colaborador **perde** se sua versão for desacreditada. Objetivo: expor que o depoente tem **interesse direto** em sustentar a narrativa que agrada à acusação.
2. **Origem e evolução das versões:** o que disse na **primeira** oitiva x na denúncia x em juízo; **acréscimos** de fatos e de nomes ao longo do tempo. Documente **quando** cada detalhe sobre o delatado surgiu — versões que "crescem" com o processo indiciam construção.
3. **Fonte do conhecimento sobre o delatado:** o colaborador **viu, ouviu de terceiro, ou deduziu**? Separe **conhecimento direto** de **hearsay** e de **inferência**. Delação sobre o assistido baseada em "todos sabiam" é imprestável.
4. **Individualização da conduta:** datas, locais, valores, reuniões, documentos. Cobrar **precisão**; a vagueza sobre o delatado é munição para o §16 (não há o que corroborar objetivamente).
5. **Contradições internas e com a prova dos autos:** confrontar as declarações com laudos, quebras de sigilo, mensagens e com **outros depoimentos**. Cada divergência vai para a ata.
6. **Ausência de corroboração:** perguntar, ponto a ponto, **qual documento/prova independente** confirma a imputação ao assistido — expor que a acusação depende **exclusivamente** da palavra do colaborador.
7. **Registro:** exigir que **contradições e recusas** de resposta constem **em ata** (base para nulidade e para os memoriais). O que não é registrado se perde.

## Catálogo de teses defensivas do delatado

1. **Insuficiência por ausência de corroboração (§16)** — tese-mãe: condenação vedada com fundamento apenas na delação; falta lastro externo específico quanto ao delatado.
2. **Corroboração apenas genérica/contextual** — a prova confirma o esquema, não o elo do assistido → não satisfaz o §16.
3. **Corroboração cruzada imprestável** — delações mutuamente confirmadas por colaboradores com o **mesmo interesse**; ausência de fonte independente.
4. **Contaminação pela vantagem** — o interesse do colaborador nos benefícios reduz drasticamente o valor da declaração; valoração com **reserva**.
5. **Contradições e evolução das versões** — narrativa que muda e cresce ao longo do tempo mina a credibilidade.
6. **Violação do contraditório** — declarações usadas sem oportunidade real de reperguntar ao colaborador → **prova imprestável** contra o delatado.
7. **Nulidades do acordo** — vícios na homologação, na voluntariedade, na assistência técnica ou na legalidade dos benefícios repercutem sobre a valoração das declarações; delimitar o que é **cláusula do acordo** e o que é **prova**.
8. **Impugnar "prova emprestada" de delação** — declarações prestadas em outro feito, sem submissão ao contraditório **neste** processo e **contra este** delatado, não valem como prova plena.
9. **Ordem das alegações finais** — assegurar ao delatado prazo para se manifestar **após** o colaborador; inversão gera nulidade (conferir precedente via gate).
10. **Sigilo e limites do acordo** — assegurar acesso integral ao conteúdo das declarações e anexos que embasam a imputação (contraditório pleno pressupõe acesso).

## Contra-teses da acusação (antecipar)

- **Delação "rica em detalhes" e coerente** → a defesa responde: **detalhe não é corroboração**; coerência interna não supre a **fonte independente** exigida pelo §16.
- **Existência de outros elementos** (documentos, quebras) → verificar se confirmam **a conduta do delatado** ou apenas o **contexto geral**; cobrar a especificidade.
- **Voluntariedade e homologação do acordo** → homologação afere requisitos do negócio, **não** valida automaticamente o conteúdo incriminador contra terceiros.
- **Corroboração por outra delação** → exigir independência; delatores com o mesmo interesse não se confirmam de forma bastante.
- **Confissão do colaborador** → confissão **do colaborador** prova contra **ele**, não estabelece, por si, a autoria do delatado.

A defesa **ataca cada uma na origem**: qualidade e independência do lastro, especificidade quanto ao assistido, e submissão efetiva ao contraditório.

## Distinção de figuras próximas

| Figura | Traço distintivo | Consequência para a defesa do delatado |
|---|---|---|
| **Colaborador premiado (art. 4º)** | firmou **acordo**, tem **interesse** em benefícios | Valoração com reserva; **exige corroboração (§16)** e contraditório |
| **Testemunha comum** | dever de dizer a verdade; sem interesse no resultado | Regime probatório distinto; não se lhe aplica o §16 |
| **Corréu/interrogatório de acusado** | não presta compromisso; se defende | Declaração de corréu contra o delatado exige **igual cautela** e corroboração |
| **Informante/"colaborador" sem acordo homologado** | não há negócio jurídico formalizado | Valor ainda mais limitado; **não** é prova apta a condenar sozinha |

**Uso:** enquadrar corretamente o depoente evita que a acusação **empreste** à delação o peso de prova testemunhal isenta. O colaborador **não é testemunha imparcial**.

## Ordem das alegações finais e contraditório

- O delatado deve ter **oportunidade de reperguntar** ao colaborador **em juízo**; a delação colhida só na fase de acordo/investigação, sem esse crivo, é **elemento de obtenção de prova**, não prova de condenação.
- A defesa do delatado deve poder apresentar **alegações finais em momento posterior** ao do colaborador que o incriminou, para responder ao que foi dito — a **inversão** dessa ordem tende a gerar **nulidade** (conferir o precedente aplicável e seus limites via `jurisprudencia-stj-stf` — **[NÃO VERIFICADO]**).
- **Acesso integral** às declarações e anexos que fundamentam a imputação é pressuposto do contraditório; requerer o levantamento de sigilo na medida necessária à defesa.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** o regime da colaboração premiada é **densamente jurisprudencial** e **oscila**. **Não cite tema, HC, RE ou acórdão de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça.

Pontos que dependem de **precedente atual** (todos **[NÃO VERIFICADO]** — confirmar antes de afirmar):
- **Standard de corroboração** do §16 (especificidade e independência do lastro quanto ao delatado).
- **Vedação de corroboração recíproca** entre delações de interesse comum.
- **Direito do delatado a alegações finais posteriores** às do colaborador e efeito da inversão (nulidade absoluta/relativa; demonstração de prejuízo).
- **Momento e forma do direito de reperguntar** ao colaborador; consequências do cerceamento.

Enquanto não conferido, trate cada um como **hipótese a confirmar**, não como fato.

## Checklist e anti-padrões

- [ ] **Corroboração (§16):** há prova **independente** que confirme a conduta **do delatado concreto**, ou a imputação vive **só** da delação?
- [ ] A corroboração é **específica** quanto ao assistido, ou apenas **contextual/genérica**?
- [ ] O lastro é **independente** das delações, ou são delatores de **mesmo interesse** se confirmando?
- [ ] **Interesse do colaborador** nos benefícios mapeado e explorado na inquirição?
- [ ] **Evolução das versões** documentada (quando cada fato/nome sobre o delatado surgiu)?
- [ ] **Contradições e recusas** registradas **em ata**?
- [ ] **Contraditório:** houve oportunidade real de **reperguntar** ao colaborador em juízo?
- [ ] **Ordem das alegações finais** preservada (delatado se manifesta **após** o colaborador)?
- [ ] **Acesso integral** às declarações e anexos que embasam a imputação garantido?
- [ ] **Nulidades do acordo** (voluntariedade, homologação, legalidade dos benefícios) avaliadas?
- [ ] Todo **precedente/tema** passou por `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- Tratar a delação como **prova plena** e aceitar condenação fundada **só** nela (viola o §16).
- Confundir **detalhamento** ou **coerência interna** com **corroboração** por fonte independente.
- Aceitar **corroboração cruzada** entre colaboradores de interesse comum como lastro bastante.
- Deixar de exercer o **direito de reperguntar** ou de exigir o registro das contradições em ata.
- Ignorar a **ordem das alegações finais** e o momento posterior do delatado.
- Tratar o colaborador como **testemunha isenta**, sem descontar o interesse nos benefícios.
- Citar **tema/HC** sobre colaboração premiada **sem** passar pelo gate de jurisprudência.
- Sustentar tese sobre a **redação** do art. 4º sem conferir o texto vigente.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa do delatado** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de **corroborar** a delação por prova independente e específica é da acusação; espelhe as teses acima como pontos a **provar** (lastro externo, individualização, contraditório observado), e não a atacar.
- **Citation Gate:** nenhum tema, HC, súmula ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** conteúdo de acordo, declarações e dados do assistido/colaborador **não** vão a repositório público; observe o sigilo legal e o segredo de justiça quando decretado.

## Lembretes finais

- **Dois eixos:** **corroboração (§16)** + **contraditório** (direito de reperguntar). A imputação cai se faltar qualquer um.
- **Delação não é prova plena** — é meio de obtenção de prova; exige lastro **externo, independente e específico** quanto ao delatado.
- **Interesse do colaborador** é fator de desconto — quem depõe por benefício não é fonte isenta.
- **Contradições e evolução das versões** vão para a **ata**; o que não é registrado se perde.
- **Ordem das alegações finais** e acesso integral às declarações são pressupostos do contraditório.
- **Vigência + gate:** confira a redação atual do art. 4º e não cite precedente de memória — tudo por `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
