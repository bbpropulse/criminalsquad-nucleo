---
name: crimes-ambientais-defesa
description: >-
  Use ao defender imputação por crime ambiental (Lei 9.605/98) — pessoa física ou jurídica — nos
  cinco grupos típicos (fauna, flora, poluição, ordenamento urbano/patrimônio cultural,
  administração ambiental), na responsabilidade penal da PESSOA JURÍDICA (art. 3º) e nos institutos
  despenalizadores PRÓPRIOS da lei (transação e suspensão condicionadas à prévia composição/laudo de
  reparação — arts. 27 e 28). Gatilhos: crime… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, ambiental]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-crimes-ambientais-defesa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["crimes-ambientais-defesa", "crimes ambientais", "ambientais defesa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em crimes ambientais (Lei 9.605/98)

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

Esta skill orienta a **defesa de quem responde por crime ambiental** — pessoa física ou jurídica — sob a Lei 9.605/98: monta o **banco de teses** por grupo típico, a **estrutura forense** para os veículos usuais (resposta à acusação, memoriais, HC de trancamento) e, sobretudo, o manejo dos **institutos despenalizadores próprios** da lei, que **não são** o ANPP, a transação e o sursis comuns. A moldura processual de cada veículo mora nas skills próprias (`habeas-corpus`, `memoriais`, resposta à acusação); a justiça negocial genérica vive em `anpp`, `suspensao-condicional-processo` e `composicao-civil-danos-jecrim` — aqui trata-se do **regime especial** dos arts. 27 e 28, que se sobrepõe àqueles. O produto é sempre rascunho técnico para revisão humana obrigatória.

> **Lição central:** no crime ambiental, **a reparação comanda a estratégia**. Os institutos despenalizadores da Lei 9.605 são **condicionados à prévia composição do dano** (art. 27) e a extinção da punibilidade no sursis ambiental depende de **laudo que constate a reparação** (art. 28). Antes de discutir tipicidade, mapeie o **estado do dano** e a **via administrativa** (auto de infração, TAC, licença): quem chega à mesa com o dano reparado ou em reparação negocia de outro lugar — e muitas vezes encerra a persecução sem pena.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 2º, 3º, 27, 28 e dos tipos imputados da Lei 9.605/98, o art. 225, §3º, da CF e a sobrevida de eventuais súmulas/temas pela skill `lei-e-sumula`; sobre a **responsabilidade penal da pessoa jurídica** e a **superação da tese da dupla imputação necessária**, pesquise o entendimento atual do STF/STJ via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** — não cite julgado de memória.

## O instituto e a base legal

| Dispositivo | O que garante / exige | Nota defensiva |
|---|---|---|
| **CF, art. 225, §3º** | Condutas lesivas ao meio ambiente sujeitam infratores — **pessoas físicas ou jurídicas** — a sanções penais e administrativas, independentemente da reparação civil | Fundamento constitucional da RPPJ; três esferas **independentes**, mas com pontes (composição, laudo) |
| **Lei 9.605, art. 2º** | Concurso de pessoas: dirigente, administrador, preposto ou mandatário que, **sabendo da conduta**, deixa de impedi-la quando podia responde na medida da culpabilidade | Ataca-se a **imputação objetiva por cargo**: gerente/diretor não responde por presunção — exige-se ciência e poder de evitar o resultado |
| **Lei 9.605, art. 3º** | Responsabilidade penal da **pessoa jurídica** quando a infração é cometida **por decisão de representante legal/contratual ou de órgão colegiado, no interesse ou benefício da entidade** | Dois requisitos cumulativos: (i) decisão do órgão dirigente e (ii) interesse/benefício da PJ — ausente qualquer um, a PJ não responde |
| **Lei 9.605, art. 3º, parágrafo único** | A responsabilidade da PJ **não exclui** a das pessoas físicas autoras, coautoras ou partícipes | Base para a superação da "dupla imputação necessária" — confira o estado atual via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]** |
| **Lei 9.605, arts. 6º–24** | Aplicação e espécies de pena (inclusive as próprias da PJ: multa, restritivas de direitos, prestação de serviços à comunidade; e a **liquidação forçada** — art. 24) | Dosimetria própria; para a PJ não há pena privativa de liberdade — atenção às restritivas dos arts. 21-23 |
| **Lei 9.605, art. 27** | Nos crimes de **menor potencial ofensivo**, a **transação penal** (art. 76 da Lei 9.099/95) só se admite havendo **prévia composição do dano ambiental** (art. 74 da Lei 9.099/95), **salvo comprovada impossibilidade** | É o filtro especial: sem compor o dano (ou provar a impossibilidade), não há transação ambiental |
| **Lei 9.605, art. 28** | Manda aplicar o **art. 89 da Lei 9.099/95** (suspensão condicional do processo) aos crimes ambientais **"de menor potencial ofensivo"**, com modificações: a **declaração de extinção da punibilidade** depende de **laudo que constate a reparação do dano** (inc. I) e o período de prova pode ser **prorrogado** enquanto a reparação não se completa (incs. II a V) | O laudo de reparação é o eixo — cumprir as condições não basta se o dano persiste. **Atenção:** o *caput* refere "menor potencial ofensivo", mas o pressuposto do art. 89 é a **pena mínima ≤ 1 ano** (nem todo crime de pena mínima baixa é de MPO); o alcance do art. 28 é controvertido — confira a redação e o entendimento atual via `lei-e-sumula`/`jurisprudencia-stj-stf` **[NÃO VERIFICADO]** |
| **Lei 9.605, art. 60** | Construir/reformar/instalar obra ou serviço potencialmente poluidor **sem licença/autorização** ou em desacordo | Tipo aberto que dialoga com o ato administrativo — a licitude da licença é elemento normativo |
| **Dec. 6.514/2008** | Regulamenta as **infrações administrativas** ambientais (auto de infração do IBAMA/órgão estadual) | Esfera administrativa: **não** vincula o juízo penal, mas o TAC e a quitação alimentam a defesa |

**Os cinco grupos típicos** (Capítulo V da Lei 9.605) orientam a leitura da denúncia: **crimes contra a fauna** (arts. 29-37), **contra a flora** (arts. 38-53), **poluição e outros crimes** (arts. 54-61), **contra o ordenamento urbano e o patrimônio cultural** (arts. 62-65) e **contra a administração ambiental** (arts. 66-69-A). Cada grupo tem elementos normativos próprios (autorização, licença, unidade de conservação, espécie ameaçada) — identifique o grupo **antes** de escolher as teses.

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência imediata | Onde aprofundar |
|---|---|---|
| Crime ambiental de **menor potencial ofensivo** (pena máxima ≤ 2 anos — parte relevante dos tipos da Lei 9.605) | Sondar a **composição do dano** (art. 74 da Lei 9.099) como porta da **transação** (art. 27) | `composicao-civil-danos-jecrim` (rito do art. 74) + T7 abaixo |
| Denúncia recebida, pena mínima ≤ 1 ano | **Sursis ambiental** (art. 89) com plano de reparação; a extinção depende do **laudo** (art. 28) | `suspensao-condicional-processo` (moldura) + T8 abaixo |
| **Pessoa jurídica** no polo passivo | Testar os **dois requisitos do art. 3º** (decisão dirigente + interesse/benefício) e a persecução conjunta das PF | T2/T3 abaixo |
| **Dirigente/preposto** imputado por cargo | Atacar a responsabilidade objetiva: exigir **ciência + poder de evitar** (art. 2º) | T4 abaixo + agente `analise-denuncia` |
| Dano de **bagatela** (poucas árvores, poucos indivíduos da fauna) | Insignificância / atipicidade material | T5 abaixo **[NÃO VERIFICADO]** |
| Conduta **autorizada/licenciada** | Atipicidade por elemento normativo; erro sobre a licitude | T6 abaixo |
| Já há **TAC firmado** com o órgão ambiental | Juntar como composição/reparação e sustentar a interface com o penal | T7/T8 + seção de interface |

## Banco de teses

### T1 — Inépcia e falta de justa causa: denúncia genérica em crime ambiental
Denúncia que descreve o dano ambiental mas **não individualiza a conduta** de cada acusado — sobretudo em estruturas empresariais — é inepta (CPP, art. 41 c/c art. 395, I). A jurisprudência exige, ainda no crime societário, o **mínimo vínculo** entre o denunciado e o fato; imputação por mero cargo ou por integrar o quadro social não satisfaz a justa causa (CPP, art. 395, III). Veículo natural: HC de trancamento ou preliminar da resposta à acusação. Delegue o exame da peça ao agente `analise-denuncia`.

### T2 — Pessoa jurídica: ausência dos requisitos cumulativos do art. 3º
A PJ só responde quando a infração resulta de **decisão de seu representante legal/contratual ou de órgão colegiado** **e** no **interesse ou benefício da entidade** (art. 3º, *caput*). São requisitos **cumulativos**: conduta isolada de empregado à revelia da direção, ou ato que não beneficia a empresa (ex.: desvio pessoal do preposto), **não** imputa a PJ. Exija da acusação a demonstração de **cada** elemento — a denúncia que apenas descreve o dano e conclui pela responsabilidade da empresa é atípica quanto a ela.

### T3 — Superação da dupla imputação necessária: leitura em favor da defesa
Historicamente exigiu-se a imputação **simultânea** de PJ e pessoa física (teoria da dupla imputação). Esse entendimento foi **revisto** — passou-se a admitir a persecução da PJ **independentemente** da identificação/responsabilização da pessoa física. **Cuidado com a faca de dois gumes:** essa superação **amplia** a responsabilização da PJ; para a defesa, o ganho está em (i) impedir que a acusação use a PJ como atalho para condenar dirigentes sem prova individualizada (art. 3º, parágrafo único, **não** cria responsabilidade objetiva da PF) e (ii) explorar, quando favorável, o processamento separado. Pesquise o estado atual do tema no STF/STJ via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** — a matéria é sensível e muda.

### T4 — Pessoa física: nada de responsabilidade objetiva por cargo (art. 2º)
O art. 2º responsabiliza o dirigente/administrador/preposto que, **sabendo da conduta criminosa de outrem, deixar de impedir-la quando podia agir para evitá-la** — é crime **omissivo impróprio** com posição de garante, não responsabilidade automática pela função. A defesa do gestor exige que a acusação prove: (i) **ciência** concreta da conduta; (ii) **poder real de evitar** o resultado; (iii) **omissão dolosa**. Organograma, delegação formal de atribuições e sistema de *compliance* ambiental afastam o domínio do fato. Não há, na Lei 9.605, tipo culposo genérico para o dirigente por mera falha de vigilância.

### T5 — Atipicidade material: insignificância no dano ambiental
Lesões ínfimas (número reduzido de espécimes, pequena área, ausência de dano efetivo ao bem jurídico coletivo) podem configurar **crime de bagatela**, com atipicidade material. O tema é **controvertido** — parte da jurisprudência resiste à insignificância em bem jurídico difuso e indisponível, sobretudo em unidade de conservação ou espécie ameaçada. Sustente com laudo do dano efetivo e mensuração técnica; pesquise o entendimento atual (fauna, flora, poluição têm tratamentos distintos) via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**. Não decore precedente.

### T6 — Elemento normativo: conduta autorizada/licenciada não é típica
Vários tipos (arts. 29, 39, 44, 46, 50-A, 54, §1º, 60) contêm o elemento **"sem licença/autorização/permissão"** ou "em desacordo com a obtida". Presente a **autorização válida** do órgão competente, falta elementar e a conduta é **atípica**. Quando a licença é irregular por vício da Administração (e não do administrado), discuta **erro sobre elemento do tipo** (CP, art. 20) ou **erro de proibição** (CP, art. 21) conforme o caso. Junte a licença, o protocolo e a comprovação de conformidade — a prova documental é decisiva.

### T7 — Transação ambiental: a chave é a prévia composição do dano (art. 27)
Nos crimes ambientais de menor potencial ofensivo, a transação penal do art. 76 da Lei 9.099/95 **só é admitida** se houver **prévia composição do dano ambiental** (art. 74 da Lei 9.099), **salvo comprovada impossibilidade** de fazê-la. A estratégia da defesa: (i) **chegar à audiência com o dano reparado ou com plano de reparação firmado** (ou com o TAC, ver interface); (ii) subsidiariamente, **demonstrar a impossibilidade** (dano irreversível, área de terceiro, ausência de meios) para destravar a transação sem composição; (iii) negociar as condições da transação já com o crédito da reparação. A moldura do art. 74 está em `composicao-civil-danos-jecrim` — não a duplique aqui.

### T8 — Sursis ambiental: a extinção depende do laudo de reparação (art. 28)
O art. 28 manda aplicar o art. 89 da Lei 9.099 (suspensão condicional do processo) ao crime ambiental com um regime **próprio**: a **declaração de extinção da punibilidade** depende de **laudo de constatação da reparação do dano** ambiental (inc. I). Enquanto o dano não se repara integralmente, o período de prova é **prorrogado** (incs. II a V, dentro do máximo legal) e as condições podem ser mantidas. Consequência prática: o plano de reparação deve ser **exequível e mensurável**, e a defesa deve **provocar o laudo** ao fim do período — cumprir as condições formais do art. 89 **não basta** se faltar a reparação constatada. Observe que o pressuposto do art. 89 é a **pena mínima ≤ 1 ano** (não o conceito de MPO); o alcance do art. 28 e os pressupostos do sursis ambiental são controvertidos — confira via `lei-e-sumula`/`jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**. A moldura geral do sursis está em `suspensao-condicional-processo`; aqui vale a sobreposição do art. 28.

### T9 — Dosimetria e penas próprias (com `dosimetria-pena`)
(i) Para a **PJ** não há pena privativa de liberdade — atenção às **restritivas de direitos** (arts. 21-23), à **multa** e, no extremo, à **liquidação forçada** (art. 24, reservada a PJ constituída ou usada para facilitar/ocultar crime ambiental); (ii) circunstâncias do art. 6º (gravidade, motivos, situação econômica do infrator para a multa) e as **atenuantes específicas** do art. 14 (arrependimento, reparação, colaboração) e **agravantes** do art. 15 devem ser individualizadas; (iii) a **reparação do dano** é atenuante e, no regime ambiental, também condição de extinção — não deixe de valorá-la; (iv) evite bis in idem entre a circunstância que já compõe o tipo e a que agrava a pena.

## Interface com a esfera administrativa e o TAC

As três esferas — **penal, administrativa e civil** — são **independentes** (CF, art. 225, §3º), mas se comunicam pela reparação:

- **Auto de infração (IBAMA/órgão estadual, Dec. 6.514/2008)** não vincula o juízo penal, mas seus laudos e a eventual **absolvição administrativa por inexistência do fato/negativa de autoria** repercutem (aplicação analógica da lógica do art. 66 do CPP — confira via `lei-e-sumula`).
- **TAC — Termo de Ajustamento de Conduta** (firmado com o órgão ambiental ou o MP, art. 5º, §6º, da Lei 7.347/85): é o principal veículo de **composição/reparação do dano** e pode **instruir a transação (art. 27)** e alimentar o **laudo do sursis (art. 28)**. Junte o TAC, os comprovantes de cumprimento e o cronograma de recuperação (PRAD, quando houver).
- **Cuidado:** o cumprimento do TAC **não extingue automaticamente** a punibilidade penal — ele reabastece os institutos despenalizadores (arts. 27 e 28), mas a extinção segue o rito penal. Não prometa ao cliente que "assinar o TAC encerra o crime".

## Erros comuns e pegadinhas

- **Ignorar a reparação e ir direto ao mérito.** No crime ambiental, a composição/reparação é a via mais limpa e frequentemente encerra a persecução (arts. 27 e 28). Mapear o estado do dano **antes** de qualquer tese é regra de ouro.
- **Tratar a transação ambiental como a comum.** Sem **prévia composição do dano** (ou prova da impossibilidade), o art. 27 **veda** a transação — não se chega à audiência de mãos vazias.
- **Achar que cumprir o sursis basta.** O art. 28 condiciona a extinção ao **laudo de reparação** — cumprir as condições formais do art. 89 sem reparar o dano **não** extingue a punibilidade; o período de prova é prorrogado.
- **Aceitar a imputação da PJ sem checar os dois requisitos do art. 3º.** Decisão do órgão dirigente **e** interesse/benefício da entidade são cumulativos — falta de um afasta a responsabilidade da PJ.
- **Deixar passar a responsabilidade objetiva do dirigente.** O art. 2º exige ciência e poder de evitar; imputação por cargo é atacável. Delegação formal e *compliance* ambiental são prova defensiva.
- **Confundir superação da dupla imputação com responsabilidade objetiva da PF.** A PJ responder sozinha **não** dispensa a prova individualizada contra a pessoa física — o parágrafo único do art. 3º não cria automatismo.
- **Decorar precedente de insignificância ambiental.** O tema oscila conforme o bem (fauna/flora/poluição), a área e a unidade de conservação — sempre `jurisprudencia-stj-stf` + gate de citações; nunca de memória.
- **Ignorar o elemento normativo "sem licença".** Muitos tipos exigem a ausência de autorização — a licença válida torna a conduta atípica; a prova documental vence.
- **Somar as três esferas como se uma extinguisse a outra.** Independência é a regra; o TAC administrativo alimenta os institutos penais, mas não extingue por si o crime.
- **Prazos penais.** Manifestações e recursos na ação penal ambiental contam-se pelo **CPP, art. 798, §1º** (exclui-se o dia do começo, inclui-se o do vencimento); já a **decadência** da queixa/representação, quando cabível, é prazo material do **CP, art. 10**. Não confunda os regimes.

## Antes de protocolar

**Enquadramento e justa causa:**
- [ ] Identificado o **grupo típico** (fauna/flora/poluição/ordenamento-patrimônio/administração) e o(s) tipo(s) exato(s)?
- [ ] A denúncia **individualiza a conduta** de cada acusado, ou imputa por cargo/posição social (T1/T4)?
- [ ] Há **elemento normativo** ("sem licença/autorização") a explorar como atipicidade (T6)?

**Pessoa jurídica e dirigentes:**
- [ ] PJ imputada? → **dois requisitos do art. 3º** (decisão dirigente + interesse/benefício) testados (T2)?
- [ ] Dirigente/preposto imputado? → exigidos **ciência + poder de evitar** (art. 2º, T4)?
- [ ] Estado atual da **dupla imputação** conferido via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]** (T3)?

**Reparação e despenalizadores (o eixo):**
- [ ] **Estado do dano** mapeado (reparado / em reparação / irreversível / de terceiro)?
- [ ] Menor potencial ofensivo? → **composição do dano** articulada como porta da **transação** (art. 27, T7)?
- [ ] Sursis em vista? → **plano de reparação exequível** e **laudo** provocado ao fim do período (art. 28, T8)?
- [ ] Existe **TAC** a juntar como composição/reparação (interface administrativa)?
- [ ] Impossibilidade de compor, quando for o caso, **documentada** para destravar a transação?

**Fechamento:**
- [ ] Dosimetria revista: penas próprias da PJ (arts. 21-24), atenuantes do art. 14, sem bis in idem (T9)?
- [ ] Pedidos em **ordem sucessiva** (eventualidade)?
- [ ] Todo dispositivo conferido via `lei-e-sumula` e todo precedente pelo agente `verificador-citacoes` (nada de memória)?

## Lembretes finais

- **A reparação comanda:** os despenalizadores da Lei 9.605 são condicionados à composição/laudo do dano (arts. 27 e 28) — mapear o dano antes das teses é o primeiro ato.
- **Transação ambiental exige prévia composição (art. 27)** — ou prova da impossibilidade; sem isso, não há transação.
- **Sursis ambiental exige laudo de reparação (art. 28)** — cumprir condições formais não extingue a punibilidade se o dano persiste.
- **PJ: dois requisitos cumulativos (art. 3º)** — decisão dirigente + interesse/benefício; a superação da dupla imputação **amplia** a responsabilização, não cria automatismo contra a pessoa física.
- **Dirigente não responde por cargo (art. 2º)** — exija ciência e poder de evitar; *compliance* e delegação são prova defensiva.
- **Três esferas independentes** — o TAC alimenta os institutos penais, mas não extingue por si o crime.
- **Insignificância e superação da dupla imputação mudam** — sempre `jurisprudencia-stj-stf` + `verificador-citacoes` antes de citar; tudo **[NÃO VERIFICADO]** até a conferência.
- Toda entrega é **rascunho técnico para revisão humana obrigatória**.

## Apoie-se em

- **BP `peticao-criminal`** — arquitetura da peça criminal (preliminares, mérito na ordem da eventualidade, pedidos sucessivos) que recebe o banco de teses desta skill.
- **BP `justica-negocial`** — panorama dos acordos penais; a especialidade ambiental dos arts. 27 e 28 se **sobrepõe** a esse panorama (composição prévia e laudo de reparação como condições).
- **Agente `analise-denuncia`** — dissecar a peça acusatória: conduta individualizada? requisitos do art. 3º descritos? elemento normativo presente? (alimenta T1, T2, T4, T6).
- **Agente `lei-e-sumula`** — conferir a redação vigente dos arts. 2º, 3º, 27, 28 e dos tipos imputados da Lei 9.605, do art. 225, §3º, da CF e do Dec. 6.514/2008.
- **Agente `jurisprudencia-stj-stf`** — entendimento atual sobre RPPJ, superação da dupla imputação, insignificância ambiental e alcance do art. 28; tudo entra como **[NÃO VERIFICADO]** até o gate.
- **Agente `dosimetria-pena`** — penas próprias da PJ (arts. 21-24), atenuantes/agravantes específicas (arts. 14-15), sem bis in idem (T9).
- **Agente `verificador-citacoes`** — **gate obrigatório** de toda súmula/precedente antes do protocolo (há sanção real por jurisprudência inventada por IA).
- **Skill `composicao-civil-danos-jecrim`** — moldura do art. 74 da Lei 9.099, que instrumentaliza a composição prévia exigida pela transação ambiental (art. 27).
- **Skill `suspensao-condicional-processo`** — moldura geral do sursis processual (art. 89) sobre a qual incide o regime especial do art. 28.
- **Skill `anpp`** — quando o ANPP for cabível (crime sem violência/grave ameaça, pena mínima < 4 anos): institutos distintos dos arts. 27/28 — avalie a via mais vantajosa, sem confundir.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
