---
name: defesa-falsidade-ideologica
description: >-
  Use ao defender FALSIDADE IDEOLÓGICA (CP, art. 299) — inserir ou fazer inserir declaração
  falsa/diversa da que deveria constar em documento (público ou particular) verdadeiro, com o fim de
  prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante.
  Gatilhos: falsidade ideológica, falso ideológico, declaração falsa em documento verdadeiro,
  documento formalmente verdadeiro conteúdo falso… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica, crimes-documentais]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-falsidade-ideologica"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-falsidade-ideologica", "defesa falsidade", "falsidade ideologica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Falsidade Ideológica (CP, art. 299)

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

Esta skill orienta a **estratégia e a redação da defesa** (resposta à acusação, memoriais, alegações finais, recurso) na imputação de **falsidade ideológica** — o crime de inserir, ou fazer inserir, em documento **formalmente verdadeiro**, uma **declaração falsa** ou diversa da que deveria constar. O núcleo é atacar a **tipicidade**: aqui o documento é autêntico na forma; o que se diz falso é o **conteúdo** da declaração. Grande parte das defesas vitoriosas mora na **ausência do fim específico** e na **irrelevância jurídica ou na não verificabilidade** da declaração.

> **Lição central:** falsidade ideológica é crime de **falso no conteúdo de documento verdadeiro** — não confunda com o **falso material** (arts. 297/298), em que se adultera ou se cria o documento em si. Antes de qualquer tese, **classifique a natureza do falso**: se a peça de acusação descreve adulteração/contrafação do suporte, a capitulação correta não é o art. 299. E, sempre, verifique o **fim específico** (prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante): sem ele, o fato é **atípico**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 299 do CP** e dos tipos vizinhos (arts. 297, 298, 301, 304 do CP; e as figuras especiais — falsidade previdenciária do art. 297, §§3º e 4º; falso na Lei 8.137/90; falsidade eleitoral do art. 350 do Código Eleitoral). Antes de fundamentar com **qualquer súmula, tema repetitivo ou acórdão (número de HC/REsp/RE, informativo)**, passe pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`. Prefira **ensinar a tese e o dispositivo** a arriscar um número de julgado.

## Base legal

- **Art. 299, *caput*, do CP** — omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir ou fazer inserir declaração falsa ou diversa da que devia ser escrita, **com o fim de** prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante.
- **Art. 299, parágrafo único, do CP** — causa de **aumento** se o agente é funcionário público e comete o crime prevalecendo-se do cargo, ou se a falsificação é de assentamento de registro civil.
- **Penas** (conferir na redação vigente): documento **público** — reclusão; documento **particular** — reclusão em patamar menor. A distinção público/particular altera a pena-base e a prescrição.
- **Tipos a distinguir (elemento decisivo da tese):**
  - **Art. 297** (falsificação de documento **público**) e **art. 298** (documento **particular**) — falso **material** (adulteração/contrafação do suporte).
  - **Art. 301** — certidão ou atestado ideologicamente falso emitido por funcionário; **art. 302** — falsidade em atestado médico.
  - **Art. 304** — **uso** de documento falso (remete às penas dos arts. 297 a 302).
  - **Figuras especiais** que afastam o art. 299 pelo princípio da especialidade (ver adiante).

## Anatomia do tipo — os elementos que a defesa ataca

O art. 299 exige, cumulativamente:

1. **Conduta**: *omitir* declaração que devia constar; ou *inserir/fazer inserir* declaração falsa ou diversa.
2. **Objeto**: **documento** (público ou particular) — suporte com relevância jurídica e autor identificável.
3. **Falsidade do conteúdo** em documento **formalmente verdadeiro** (a forma é autêntica; mente-se no que se declara).
4. **Fim específico (dolo específico / elemento subjetivo especial)**: **prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante**.
5. **Potencialidade lesiva**: aptidão da declaração para enganar e produzir efeito jurídico (afasta o **falso inócuo/grosseiro/irrelevante**).

Falhando **qualquer** desses elementos, a tese é de **atipicidade**. É nessa decomposição que a defesa deve trabalhar, item por item, contra a denúncia.

## Roteiro de análise e teses típicas de defesa

### 1. Distinção falso material × falso ideológico (tese de erro de capitulação / atipicidade)
- Se a acusação, ao descrever os fatos, aponta **adulteração do suporte** (rasura, montagem, assinatura contrafeita, documento inteiramente forjado), o caso é de **falso material** (arts. 297/298), **não** de art. 299. E vice-versa.
- Consequência prática: **emendatio/mutatio**, absolvição por atipicidade da capitulação escolhida, ou nulidade por descompasso entre fato narrado e tipo imputado. O réu se defende **dos fatos**, mas a errônea subsunção pode ser explorada para demonstrar que o elemento nuclear do art. 299 (documento formalmente verdadeiro) **não** está presente.
- **Contra-tese (acusação):** documento pode ter falso **material e ideológico** concomitantes; a rasura formal não exclui a falsidade do conteúdo.

### 2. Ausência do fim específico (a tese mais forte)
- O art. 299 **não** se contenta com o dolo genérico: exige o **fim de prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante**. Declaração falsa feita **sem** esse propósito (p. ex., por vaidade, erro, desorganização, para fim inócuo) é **atípica**.
- Ataque probatório: a acusação **precisa demonstrar** o elemento subjetivo especial; a mera divergência entre o declarado e a realidade **não** o presume. Explore a ausência de prova do intuito lesivo.

### 3. Fato juridicamente irrelevante / declaração inócua
- Só é típica a falsidade sobre **fato juridicamente relevante**. Declaração que não altera nenhuma relação jurídica, não prejudica direito de terceiro nem cria obrigação é **penalmente irrelevante** (**falso inócuo**).
- Igualmente atípico o **falso grosseiro** (incapaz de iludir) — embora aqui o vício costume ser de potencialidade lesiva, não de relevância.

### 4. Declaração não sujeita a verificação / veracidade não garantida pelo declarante
- Quando a declaração **não está sujeita a registro/verificação obrigatória** e sua veracidade **não é imposta ao declarante** pelo ordenamento, discute-se a atipicidade: o documento não se destina a **provar** aquele fato como verdade oponível.
- Tese clássica: **autodeclarações** e declarações cuja falsidade é **verificável e desmentível** pela própria vítima/administração (a chamada falsidade que "se resolve por outros meios") tendem a não configurar o art. 299, por ausência de potencialidade de dano relevante. **Confira a orientação atual dos tribunais** via `jurisprudencia-stj-stf` antes de afirmar — o tema comporta divergência.

### 5. Autofalsidade e autodefesa (falsa identidade × art. 299)
- **Atribuir a si próprio** identidade/dados falsos perante autoridade, para ocultar antecedentes ou frustrar ação policial, costuma ser tratado como **falsa identidade (art. 307 do CP)** ou fato ligado à **autodefesa**, e **não** como falsidade ideológica documental — a depender do suporte e da conduta concreta.
- Se a mentira se deu em **interrogatório/qualificação** e não em documento que o agente **produziu ou fez inserir**, a subsunção ao art. 299 é discutível. Tese: **atipicidade** por ausência de documento apto, ou desclassificação para figura menos grave. **Verifique a jurisprudência atual** sobre os limites da autodefesa e da autofalsidade.

### 6. Consunção, especialidade e concurso com o uso (art. 304)
- **Especialidade:** existindo tipo **especial** que descreva a mesma falsidade (p. ex., falsidade **eleitoral** — art. 350 do Código Eleitoral; falso na **Lei 8.137/90**; falsidade **previdenciária** — art. 297, §§3º/4º), afasta-se o art. 299 pela especialidade. Tese defensiva quando a pena especial for **menor** ou quando a especial **não** se configurar (atipicidade por não preenchimento do tipo especial e do geral).
- **Consunção (falso × uso):** quando o **falso ideológico é meio** para um crime-fim (estelionato, sonegação, etc.) e nele se **exaure**, discute-se a **absorção** do falso pelo crime-fim, evitando bis in idem. A orientação varia conforme o falso tenha **potencialidade lesiva autônoma** ou se esgote no crime-fim. **Confirme a diretriz aplicável** (há súmula sobre falso × estelionato) via `jurisprudencia-stj-stf`.
- **Falso e uso pelo mesmo agente:** quando quem **falsifica** também **usa**, prevalece, em regra, o entendimento de que o **uso** é post factum não punível autônomo (não há concurso material entre falsidade e uso pelo mesmo autor). **Verifique** a orientação vigente.

### 7. Prescrição e dosimetria
- Distinga a pena do **documento público** (maior) da do **particular** (menor) — impacta o **prazo prescricional** (art. 109 do CP). Confira a **data de consumação** (na inserção; no uso é a partir do uso) e eventuais marcos interruptivos.
- O cálculo determinístico de pena/prescrição **não** se faz aqui: descreva o método e aponte para `calculadora-dosimetria` e `calculadora-prescricao`. Para tempestividade recursal, `calculadora-tempestividade`.

## Teses e contra-teses (quadro-resumo)

| Tese de defesa | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Atipicidade — é falso **material**, não ideológico | Núcleo do art. 299 exige documento formalmente verdadeiro | Falso material e ideológico podem coexistir |
| Ausência do **fim específico** | Elemento subjetivo especial do tipo | Fim inferível das circunstâncias/finalidade lesiva demonstrada |
| Fato **juridicamente irrelevante** / falso inócuo | Só é típico o falso sobre fato relevante | Declaração apta a produzir efeito jurídico |
| Declaração **não sujeita a verificação** | Ausência de potencialidade lesiva | Documento com fé pública/registro oponível a terceiros |
| **Autofalsidade/autodefesa** → art. 307 ou atipicidade | Limites da autodefesa; falsa identidade | Documento efetivamente produzido pelo agente |
| **Consunção** pelo crime-fim | Falso como meio que se exaure | Falso com potencialidade lesiva autônoma |
| **Especialidade** afasta o art. 299 | Tipo especial prevalece | Tipo especial não configurado; volta ao geral |

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 546/STJ [NÃO VERIFICADO]** — tema da **competência** quando o documento falso é usado perante órgão federal x estadual (falso ideológico e o interesse da União). Confirme número, redação e vigência via `jurisprudencia-stj-stf` **antes de citar**.
- **Súmula 17/STJ [NÃO VERIFICADO]** — orientação sobre **absorção do falso pelo estelionato** quando o falso se exaure no estelionato ("...se o crime de falso, nas suas relações de meio e fim, é absorvido pelo estelionato..."). **Não** cite o número/redação sem conferência: a lógica da tese (consunção do falso pelo crime-fim) é o que importa e é ensinável mesmo sem o enunciado.
- **Distinção 297/299 e falsa identidade (art. 307):** há jurisprudência consolidada de STF/STJ, mas **qualquer HC/REsp/RE específico** (número, informativo, tema) deve passar pelo gate. Prefira sustentar o **dispositivo e a tese dogmática** a arriscar um acórdão.

> Regra do gate: **dispositivo de lei e enunciado notório com certeza; todo precedente específico com dúvida → marcar [NÃO VERIFICADO] e conferir em `jurisprudencia-stj-stf`.** Na dúvida, **omitir vence inventar** — há sanção real por jurisprudência inventada por IA.

## Estrutura sugerida da peça de defesa

1. **Síntese da imputação** — o que a denúncia diz que é falso e com que fim.
2. **Enquadramento dogmático** — decompor os 5 elementos do art. 299 e apontar **qual falta**.
3. **Tese principal de atipicidade** — normalmente ausência de fim específico **ou** falso material (erro de capitulação) **ou** irrelevância jurídica.
4. **Teses subsidiárias** — não verificabilidade; autofalsidade/autodefesa; consunção; especialidade; desclassificação.
5. **Prova** — demonstrar que a acusação não provou o elemento subjetivo especial nem a potencialidade lesiva; requerer perícia documentoscópica quando a natureza do falso (material x ideológico) for controversa.
6. **Dosimetria/prescrição subsidiárias** — documento particular x público; consunção; marcos prescricionais (apontar `calculadora-dosimetria`/`calculadora-prescricao`).
7. **Pedidos** — absolvição por atipicidade (art. 386, III, do CPP); subsidiariamente desclassificação/absorção; subsidiariamente dosimetria mínima e reconhecimento da prescrição.

## Erros comuns / checklist da defesa

- [ ] Classifiquei corretamente a natureza do falso (**material** arts. 297/298 × **ideológico** art. 299)? A denúncia descreve adulteração do suporte ou falsidade só do conteúdo?
- [ ] A acusação provou o **fim específico** (prejudicar direito / criar obrigação / alterar verdade sobre fato **juridicamente relevante**)? Sem ele → atipicidade.
- [ ] A declaração recai sobre **fato juridicamente relevante** e tem **potencialidade lesiva** (não é falso inócuo/grosseiro)?
- [ ] A declaração estava **sujeita a verificação/registro** oponível, ou é autodeclaração desmentível? (Tese de não verificabilidade — conferir jurisprudência.)
- [ ] O caso é de **autofalsidade/autodefesa** (art. 307) e não de art. 299?
- [ ] Cabe **consunção** pelo crime-fim (estelionato/sonegação) ou há **potencialidade lesiva autônoma** do falso?
- [ ] Há **tipo especial** (eleitoral, previdenciário, tributário) que afasta o art. 299 por **especialidade**?
- [ ] Documento é **público ou particular** — impacto na **pena** e na **prescrição** conferido (via calculadoras)?
- [ ] Requeri **perícia documentoscópica** quando a distinção material×ideológico for decisiva?
- [ ] **Toda** súmula/precedente passou por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de entrar na peça?

**Anti-padrões (evitar):**
- Aceitar a capitulação do art. 299 quando os fatos descrevem adulteração do **suporte** (falso material) — ou o inverso.
- Tratar dolo genérico como suficiente, ignorando o **fim específico** que o tipo exige.
- Sustentar consunção sem verificar se o falso tem **potencialidade lesiva autônoma** (nem toda falsidade é absorvida).
- Confundir **autofalsidade/falsa identidade** (art. 307) com falsidade ideológica documental.
- Citar Súmula 17 ou 546 do STJ (ou qualquer HC/REsp) **de memória**, sem conferência — risco de número/redação errados.
- Ignorar a diferença de **pena e prescrição** entre documento público e particular.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a subsunção, a estratégia e a peça final são responsabilidade do **advogado** (EAOAB; CED; Provimento 205/2021), que deve ler os autos concretos e a prova.
- **Foco de defesa.** A skill é do **polo defensivo** (réu/investigado). Havendo atuação pelo polo acusatório (MP/assistente de acusação), o **chefe-roteador** deve conferir o polo declarado em `company.md` e selecionar a skill adequada — as teses aqui devem ser lidas então como o cenário a **rebater**.
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória; tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Dispositivos de lei e enunciados notórios: só com certeza da redação vigente.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita (elemento a elemento do art. 299), coesão e persuasão (a régua de obra-prima que a revisão cobra).
