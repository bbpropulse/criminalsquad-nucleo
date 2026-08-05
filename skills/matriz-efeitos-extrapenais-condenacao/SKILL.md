---
name: matriz-efeitos-extrapenais-condenacao
description: >-
  Use para inventariar e antecipar TODOS os efeitos extrapenais e colaterais de eventual condenação
  — automáticos (art. 91 CP: confisco, reparação) e não automáticos/motivados (art. 92 CP: perda de
  cargo/mandato/função, poder familiar, inabilitação para dirigir) e reflexos (reincidência, maus
  antecedentes, inelegibilidade da Lei da Ficha Limpa, restrições profissionais e migratórias) —
  para calibrar estratégia, negociação… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia, aconselhamento]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-matriz-efeitos-extrapenais-condenacao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["matriz-efeitos-extrapenais-condenacao", "matriz efeitos", "extrapenais condenacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Matriz de Efeitos Extrapenais e Colaterais da Condenação (arts. 91 e 92 do CP)

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

Esta skill é uma **capacidade analítica transversal**: um roteiro para **inventariar e antecipar sistematicamente todos os efeitos que uma eventual condenação projeta ALÉM da pena** — efeitos **extrapenais automáticos** (art. 91 CP), **extrapenais não automáticos** (art. 92 CP, que exigem declaração motivada na sentença) e **reflexos** que a condenação dispara em outros ramos (reincidência, inelegibilidade, restrições administrativas, profissionais e migratórias). Não é uma peça: é o **mapa de consequências** que alimenta a estratégia, a decisão recorrer-vs-negociar e o aconselhamento honesto do cliente.

> **Lição central:** a pena é só a ponta do iceberg. O cliente pergunta "quanto tempo pego?"; o dano real, muitas vezes, é o **cargo perdido, a inelegibilidade de 8 anos, o carro/imóvel confiscado, o filho sob risco no poder familiar**. Separe rigorosamente **automático × motivado × reflexo** — porque o que é automático você não evita, mas o que exige **motivação específica** (art. 92) você **combate no caso concreto**, e o que é **reflexo** você **calibra escolhendo a rota** (tipo penal do acordo, regime, sursis, transação).

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente dos arts. 91, 91-A e 92 do CP** — o **art. 91-A** (perda alargada/confisco por diferença patrimonial em condenação por crime com pena máxima superior a 6 anos) foi **inserido pela Lei 13.964/2019 (Pacote Anticrime)**; a **inelegibilidade** é matéria da **LC 64/90 com a redação da LC 135/2010 (Lei da Ficha Limpa)**, sujeita a alterações. Confira também a **Lei 14.994/2024** e demais leis recentes que agravam efeitos em crimes específicos. Para **qualquer** súmula, tema ou acórdão, passe pela skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes` antes de fundamentar.

---

## Base legal (o mapa dos dispositivos)

- **Art. 91, CP** — efeitos **genéricos e automáticos**: (I) tornar certa a obrigação de **reparar o dano**; (II) o **confisco**, em favor da União, dos **instrumentos** do crime (cujo porte/fabrico/etc. seja ilícito) e do **produto/proveito** do crime. Automáticos: não precisam ser declarados na sentença.
- **Art. 91-A, CP** (Lei 13.964/2019) — **perda alargada**: em condenação por infração com pena máxima **superior a 6 anos**, pode-se decretar a perda de bens que correspondam à **diferença entre o patrimônio do condenado e o compatível com seu rendimento lícito**. **Deve ser requerida expressamente pelo MP na denúncia** e é **efeito NÃO automático** — abre-se contraditório sobre a origem lícita.
- **Art. 92, CP** — efeitos **específicos e NÃO automáticos** (exigem **declaração motivada** na sentença — parágrafo único): (I) **perda de cargo, função pública ou mandato eletivo** (nas hipóteses e patamares do inciso); (II) **incapacidade para o exercício do poder familiar, tutela ou curatela** (crime doloso, sujeito a reclusão, contra filho/tutelado/curatelado — hipótese ampliada por legislação superveniente, conferir vigência); (III) **inabilitação para dirigir veículo**, quando utilizado como **meio** para crime doloso.
- **Art. 92, parágrafo único, CP** — os efeitos do art. 92 **não são automáticos**: devem ser **motivadamente declarados** na sentença. **Este é o coração da defesa** nesta matéria.
- **Art. 63 e 64, CP** — **reincidência** e o **período depurador de 5 anos** (após o qual a condenação anterior não gera reincidência).
- **Art. 387, IV, CPP** — o juiz **fixa valor mínimo de reparação** na sentença (efeito civil), operacionalizando o art. 91, I.
- **LC 64/90, art. 1º, I, "e" (red. LC 135/2010 — Ficha Limpa)** — **inelegibilidade** para condenados por certos crimes, **desde a condenação por órgão colegiado até 8 anos após o cumprimento da pena** (conferir rol e redação vigentes).
- **Legislação extravagante que projeta efeitos próprios** — ex.: **Lei de Drogas** (art. 91-A e confisco específico), **crimes contra a Administração** (art. 92, I, e perda de função), **Estatuto do Desarmamento**, **Código de Trânsito** (suspensão/proibição de habilitação como pena e como efeito), **Lei 9.605/98** (ambiental). Conferir sempre a lei especial do tipo imputado.

---

## As três camadas — a distinção que organiza tudo

A régua desta skill é classificar **cada efeito** em uma de três camadas. É a classificação que define **se e como a defesa atua**.

### Camada 1 — Efeitos extrapenais AUTOMÁTICOS (art. 91)

Decorrem da condenação por **força de lei**, independem de declaração na sentença.

| Efeito | Dispositivo | O que a defesa pode fazer |
|---|---|---|
| Certeza da obrigação de reparar o dano | Art. 91, I + art. 387, IV, CPP | Discutir o **valor mínimo** fixado (deve ter pedido/contraditório e prova); atacar arbitramento sem base |
| Confisco dos **instrumentos** do crime | Art. 91, II, "a" | Sustentar que o bem **não é instrumento** ou tem porte lícito; proporcionalidade; bem de terceiro de boa-fé |
| Confisco do **produto/proveito** | Art. 91, II, "b" | Impugnar nexo entre bem e crime; origem lícita; alcance sobre bem de família/terceiro |
| Perda alargada (**se requerida**) | Art. 91-A (>6 anos, requerida pelo MP) | **Não é automática**: exigir requerimento na denúncia, contraditório e prova da incompatibilidade; demonstrar origem lícita |

> **Nota:** a **certeza da reparação** é automática (an debeatur), mas o **quantum** (art. 387, IV, CPP) precisa de **pedido e contraditório** — sem isso, ataca-se o valor. E o **art. 91-A**, embora esteja na moldura dos efeitos patrimoniais, **não é automático**: reclama requerimento e contraditório sobre a origem dos bens.

### Camada 2 — Efeitos extrapenais NÃO AUTOMÁTICOS / MOTIVADOS (art. 92)

**Só existem se a sentença os declarar com fundamentação específica** (art. 92, parágrafo único). Aqui a defesa ganha ou perde a batalha.

| Efeito | Dispositivo | Requisitos-chave (conferir redação vigente) | Frente de defesa |
|---|---|---|---|
| Perda de **cargo/função/mandato** | Art. 92, I | Crime funcional com pena ≥ 1 ano (abuso etc.) ou pena > 4 anos nos demais; **motivação expressa** | Ausência de motivação concreta; desproporcionalidade; não preenchido o patamar; separar da sanção administrativa (PAD é autônomo) |
| Incapacidade para **poder familiar/tutela/curatela** | Art. 92, II | Crime **doloso**, apenado com reclusão, contra filho/tutelado/curatelado (hipótese conferir vigência) | Falta de nexo com a proteção do menor; ausência de motivação; efeito não pode ser genérico |
| **Inabilitação para dirigir** | Art. 92, III | Veículo usado como **meio** para crime doloso | Veículo não foi meio do crime; não se confunde com suspensão-pena do CTB; exigir motivação |

> **Regra de ouro da defesa (art. 92, parágrafo único):** estes efeitos **NÃO decorrem automaticamente da condenação**. Se a sentença **não os declarou de forma expressa e motivada**, eles **não incidem**. E se os declarou **sem fundamentação concreta** (mera repetição da lei), há **nulidade parcial do capítulo** por falta de motivação (CF, art. 93, IX). **Sempre verifique se o efeito do art. 92 foi requerido, debatido e motivado** — é a brecha mais recorrente.

### Camada 3 — Efeitos REFLEXOS (a condenação como fato jurídico em outros ramos)

Não estão nos arts. 91-92, mas **a existência da condenação** os dispara em outras searas. São os que **mais surpreendem o cliente** e os que a **escolha da rota processual mais consegue evitar**.

| Reflexo | Onde incide | Como a rota escolhida altera o efeito |
|---|---|---|
| **Reincidência** (art. 63-64 CP) | Nova pena futura: agrava, veda benefícios, muda regime | Evitável por **transação penal / ANPP** (não gera reincidência); atenção ao **período depurador de 5 anos** (art. 64, I) |
| **Maus antecedentes** | Dosimetria futura (1ª fase) | Sursis/ANPP/transação evitam a **condenação**; SV 24 e Súm. 444 STJ limitam o uso [conferir via `jurisprudencia-stj-stf`] |
| **Inelegibilidade (Ficha Limpa)** | Direito eleitoral — LC 64/90, I, "e" | Depende do **tipo penal** e do **trânsito/colegiado**; ANPP e transação (não são condenação) **em regra** não geram inelegibilidade [conferir] |
| **Perda/suspensão de direitos políticos** | CF, art. 15, III | Enquanto durarem os efeitos da condenação criminal transitada em julgado |
| **Restrições profissionais** | Conselhos (OAB, CRM, CREA), servidor público, porte de arma | A condenação pode disparar processo ético/administrativo autônomo; certos crimes inviabilizam registro/porte |
| **Restrições migratórias** | Estrangeiro: expulsão/impedimento (Lei 13.445/2017 — Lei de Migração) | Condenação por crime doloso pode fundamentar expulsão; a rota (ANPP, absolvição imprópria) muda o quadro |
| **Registro/antecedentes e reincidência específica** | Vedação a benefícios em crimes seguintes | Impacta livramento, progressão, substituição futuros |
| **Efeitos patrimoniais indiretos** | Ação civil ex delicto (art. 63-64 CPP), seguros, contratos | A condenação torna certa a reparação e serve de título executivo |

> **Ponto cego mais comum:** o cliente e até o advogado focam só na pena e no regime, e **ignoram a inelegibilidade e a perda de cargo**, que muitas vezes são o dano **mais grave e mais duradouro** — 8 anos de inelegibilidade ou a perda de um cargo público de décadas podem pesar mais que a pena em si.

---

## Roteiro de análise — como montar a matriz (passo a passo)

Aplique a cada caso, na fase de **estratégia/aconselhamento** (não na peça):

1. **Identifique o tipo penal imputado e a moldura de pena.** Pena máxima > 6 anos? (aciona possível art. 91-A). Crime funcional, doloso contra dependente, com uso de veículo? (aciona art. 92, I/II/III).
2. **Camada 1 (automáticos):** liste reparação (art. 387, IV, CPP), instrumentos e produto/proveito a confiscar (art. 91). Verifique se há **perda alargada requerida** (art. 91-A).
3. **Camada 2 (motivados):** verifique se o MP **requereu** perda de cargo/poder familiar/inabilitação e se a sentença os **declarou e motivou**. Marque cada um como **incidente / não incidente / atacável por falta de motivação**.
4. **Camada 3 (reflexos):** mapeie reincidência futura, inelegibilidade (o tipo está no rol da Ficha Limpa?), direitos políticos, conselhos profissionais, situação migratória.
5. **Cruze com as ROTAS possíveis** (a matriz de decisão):
   - **Absolvição** → zera todas as camadas.
   - **ANPP / transação penal / suspensão condicional do processo** → **não são condenação**: em regra **não geram reincidência, maus antecedentes nem inelegibilidade** [conferir alcance]; evitam a Camada 3. **É o maior redutor de efeitos colaterais.**
   - **Condenação com sursis / PRD (penas restritivas de direitos)** → a condenação existe (reflexos incidem), mas atenua o cárcere.
   - **Condenação por tipo mais brando / desclassificação** → pode **sair do rol da Ficha Limpa** ou afastar patamar do art. 92, I.
   - **Condenação plena** → todas as camadas cabíveis incidem.
6. **Quantifique o impacto real** para o cliente: prazo de inelegibilidade, valor do confisco, cargo em risco, guarda dos filhos, visto/residência.
7. **Documente a matriz** como insumo para a skill `decisao-recorrer-vs-negociar` e para o aconselhamento formal (com a ressalva de revisão humana).

---

## Teses e contra-teses (por efeito)

**Art. 92 (perda de cargo, poder familiar, inabilitação) — o filão da defesa:**
- **Tese (defesa):** efeito **não automático**; sentença que não motiva concretamente **não pode** decretá-lo (art. 92, parágrafo único + CF, art. 93, IX). Mera transcrição da lei = falta de fundamentação = nulidade do capítulo.
- **Contra-tese (acusação):** a gravidade do crime funcional/contra o dependente justifica *per se*; motivação implícita bastaria.
- **Resposta:** exigir **motivação idônea e específica**, individualizada ao caso — a jurisprudência tende a repelir decreto genérico [confirmar precedentes atuais via `jurisprudencia-stj-stf`].

**Art. 91-A (perda alargada):**
- **Tese (defesa):** só cabe se **requerida na denúncia**, com **contraditório** sobre a incompatibilidade patrimonial; o ônus de indicar os bens e a diferença é da acusação; demonstrar **origem lícita** afasta a perda; proteger **terceiro de boa-fé** e **bem de família**.
- **Contra-tese:** presunção de incompatibilidade a partir da evolução patrimonial.

**Confisco (art. 91, II):**
- **Tese (defesa):** o bem **não é instrumento** (uso lícito), **não há nexo** com o produto/proveito, **proporcionalidade**, direito de **terceiro de boa-fé**; devolução de bem não vinculado.

**Reincidência / maus antecedentes (Camada 3):**
- **Tese (defesa):** **período depurador de 5 anos** (art. 64, I) afasta a reincidência; condenação sem trânsito não gera maus antecedentes; limites das Súmulas 444/STJ e SV 24 [conferir]; **ANPP/transação não condenam**, logo não geram reflexo.

**Inelegibilidade (Ficha Limpa):**
- **Tese (defesa):** o tipo **não integra o rol** da LC 64/90, I, "e"; ANPP/transação **não são condenação**; discutir o **termo inicial** e o alcance dos 8 anos [conferir redação e jurisprudência vigentes via `jurisprudencia-stj-stf`].

---

## Súmulas e precedentes (sob o Citation Gate — conferir antes de citar)

Cite **dispositivos de lei** com certeza (arts. 91, 91-A, 92 CP; art. 387, IV, CPP; LC 64/90; art. 63-64 CP). Para **qualquer** enunciado sumular ou acórdão, **marque e confira** via `jurisprudencia-stj-stf` / `verificacao-citacoes` — **não** invente número de HC/REsp/RE, informativo ou tema.

- **Súmula 18/STF** — a **pena administrativa não se confunde** com a criminal (a perda de cargo por PAD é autônoma em relação ao art. 92, I). [NÃO VERIFICADO — conferir enunciado e alcance]
- **Súmula 444/STJ** — vedado usar **inquéritos e ações penais em curso** para agravar a pena-base (limita "maus antecedentes"). [NÃO VERIFICADO — conferir]
- **Súmula Vinculante 24/STF** — tema correlato (tributário) sobre constituição do crime; citada aqui apenas como referência de contorno de antecedentes/persecução. [NÃO VERIFICADO — conferir pertinência]
- **Entendimento do STF/STJ** sobre a **necessidade de motivação específica** para os efeitos do art. 92 e sobre o **art. 91-A depender de requerimento e contraditório**: **teses corretas, mas os números de acórdão devem ser buscados** — [NÃO VERIFICADO] confira via `jurisprudencia-stj-stf` antes de citar precedente específico.

> **Regra:** prefira **ensinar a tese e o dispositivo** (que são sólidos) a arriscar um número de acórdão. Na dúvida, **omitir vence inventar**.

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar efeito do **art. 92 como automático** — ele **exige motivação** (o oposto do art. 91).
- Confundir **perda de cargo penal (art. 92, I)** com **demissão por PAD** — são **autônomas**; a absolvição penal por falta de provas não impede a administrativa, e vice-versa.
- Ignorar a **inelegibilidade** e a **situação migratória** no aconselhamento — costumam ser o dano maior.
- Aceitar **confisco genérico** de bem lícito ou de terceiro de boa-fé sem impugnar nexo/proporcionalidade.
- Deixar passar **art. 91-A sem requerimento/contraditório** como se fosse automático.
- Esquecer o **período depurador (art. 64, I)** ao dimensionar reincidência futura.
- Fechar **ANPP/acordo** sem mapear que ele **evita a Camada 3** — e, ao contrário, aceitar condenação quando um acordo eliminaria os reflexos.
- Fixar valor de **reparação (art. 387, IV, CPP) sem pedido e contraditório** — atacável.
- Citar **número de acórdão de memória** — passar tudo por `jurisprudencia-stj-stf`.

**Checklist da matriz:**
- [ ] Tipo penal e moldura identificados (pena máxima > 6 anos? crime funcional/contra dependente/com veículo?)?
- [ ] **Camada 1 (art. 91)** listada: reparação, instrumentos, produto/proveito, art. 91-A (se requerido)?
- [ ] **Camada 2 (art. 92)** verificada: cada efeito foi **requerido, debatido e MOTIVADO**? Marcado incidente/não incidente/atacável?
- [ ] **Camada 3 (reflexos)** mapeada: reincidência, maus antecedentes, inelegibilidade, direitos políticos, conselhos, migração?
- [ ] Cruzamento com **rotas** feito (absolvição / ANPP / transação / sursis / desclassificação / condenação plena)?
- [ ] **Período depurador (art. 64, I)** considerado na reincidência futura?
- [ ] Impacto **quantificado** para o cliente (prazo de inelegibilidade, valor de confisco, cargo, guarda, visto)?
- [ ] Efeitos do **art. 92 sem motivação** sinalizados como **atacáveis** (nulidade parcial)?
- [ ] Súmulas/precedentes conferidos via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar?
- [ ] Matriz entregue como **insumo** para `decisao-recorrer-vs-negociar` e para o aconselhamento?

---

## Lembretes finais

- **Automático (art. 91) × motivado (art. 92) × reflexo (Camada 3)** — a classificação é toda a análise.
- **Art. 92 não é automático:** sem **motivação específica**, não incide; motivação genérica = nulidade do capítulo.
- **ANPP/transação/sursis do processo não condenam** — são o maior **redutor de efeitos colaterais** (evitam a Camada 3).
- **Inelegibilidade e situação migratória** são frequentemente o **dano maior** — nunca deixá-las fora do aconselhamento.
- **Confisco e perda alargada (91/91-A)**: impugnar nexo, origem lícita, terceiro de boa-fé; 91-A exige requerimento e contraditório.
- **Conferir vigência** dos arts. 91, 91-A e 92 CP e da LC 64/90 (Ficha Limpa), além de leis especiais e da **Lei 14.994/2024**, antes de opinar.
- **Isto é análise de impacto, não a peça** — é o mapa que orienta a escolha da rota (`decisao-recorrer-vs-negociar`) e o aconselhamento.

## Nota de conformidade

Este material é **rascunho técnico para revisão humana obrigatória** — hipótese analítica a confirmar pelo advogado responsável, não parecer definitivo. **Polo:** esta skill é de **defesa/aconselhamento** (o roteador deve confirmar o polo no `company.md`); o mesmo mapa serve à acusação apenas para antever o que a defesa arguirá. **Citation Gate:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` (há sanções por jurisprudência inventada por IA). **Ética conforme o tipo de instituição:** OAB + Provimento 205/2021 (advocacia); CNMP (Ministério Público); LC 80/94 (Defensoria). O aconselhamento sobre efeitos colaterais deve ser **honesto e completo** com o cliente — omitir a inelegibilidade ou a perda de cargo é falha grave de dever de informação.
