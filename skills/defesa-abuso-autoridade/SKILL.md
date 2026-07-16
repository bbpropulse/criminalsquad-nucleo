---
name: defesa-abuso-autoridade
description: >-
  Use ao DEFENDER agente público (policial, delegado, agente penitenciário, promotor, juiz,
  servidor) acusado de abuso de autoridade (Lei 13.869/2019) — tese-mestra de atipicidade por
  ausência do dolo específico e da finalidade espúria (art. 1º, §1º), exclusão da mera divergência
  interpretativa (art. 1º, §2º), análise dos tipos específicos (arts. 9º a 38) e dos efeitos da
  condenação (art. 4º). Gatilhos: abuso de autoridade… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, leis-especiais, abuso-autoridade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-abuso-autoridade"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-abuso-autoridade", "defesa abuso", "abuso autoridade"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa do Agente Público — Abuso de Autoridade (Lei 13.869/2019)

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

Esta skill orienta a **defesa do agente público acusado de abuso de autoridade** sob a **Lei 13.869/2019** (Nova Lei de Abuso de Autoridade — NLAA), que revogou a antiga Lei 4.898/65. A defesa aqui é **do polo do acusado** (o agente público): policial civil/militar, delegado, agente penitenciário, membro do MP, magistrado, servidor com poder de autoridade. O objetivo é reconhecer a **atipicidade** da conduta, afastar o dolo específico e a finalidade espúria e blindar o agente contra a criminalização do exercício regular da função.

> **Lição central:** o abuso de autoridade é crime de **dolo específico qualificado**. Não basta o agente ter praticado o ato (elemento objetivo); a lei exige que ele tenha agido com **finalidade específica de prejudicar outrem, beneficiar a si ou a terceiro, ou por mero capricho ou satisfação pessoal** (art. 1º, §1º). **Sem essa finalidade espúria comprovada, o fato é atípico** — e essa é a maior fonte de absolvição da matéria. A defesa ataca primeiro o elemento subjetivo especial; só depois discute os tipos específicos.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da Lei 13.869/2019 — houve **vetos presidenciais** (alguns depois derrubados pelo Congresso) e a lei já foi objeto de **ADIs no STF** (questionamento sobre os §§1º e 2º do art. 1º e sobre tipos específicos). Antes de fundamentar, confira o texto atual dos dispositivos e o estado das ADIs, súmulas, temas e eventual *overruling* via a skill `jurisprudencia-stj-stf`. NÃO cite números de HC/REsp/RE, informativos ou temas de memória — passe tudo pelo gate `verificacao-citacoes`.

## Base legal

- **Lei 13.869/2019** — Nova Lei de Abuso de Autoridade (revogou a Lei 4.898/65).
- **Art. 1º, caput** — define o crime como praticado por **agente público** no exercício de suas funções ou a pretexto de exercê-las.
- **Art. 1º, §1º (elemento subjetivo especial — CHAVE DA DEFESA)** — as condutas só constituem crime quando praticadas com a **finalidade específica** de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou, ainda, por **mero capricho ou satisfação pessoal**.
- **Art. 1º, §2º (excludente de tipicidade — CHAVE DA DEFESA)** — a **divergência na interpretação de lei ou na avaliação de fatos e provas NÃO configura abuso de autoridade**.
- **Art. 2º** — sujeito ativo: **agente público**, servidor ou não (conceito amplo — arts. 2º, parágrafo único).
- **Art. 3º** — ação penal **pública incondicionada**; admite ação penal privada subsidiária (art. 3º, §§1º e 2º).
- **Art. 4º** — **efeitos da condenação** (tornar certa a obrigação de indenizar; inabilitação para função pública; perda do cargo — não automáticos, exigem motivação, cf. art. 92 CP e §5º do art. 4º).
- **Art. 5º** — **penas restritivas de direitos** (a maioria dos tipos comporta substituição — penas baixas).
- **Arts. 9º a 38** — **tipos específicos** (rol taxativo; abuso de autoridade é crime de **tipicidade fechada**, sem tipo genérico).
- **Aplicação subsidiária do CP e do CPP** e da Lei 9.099/95 (muitos tipos são de **menor potencial ofensivo** — competência do JECrim, cabimento de transação/suspensão).

## A tese-mestra da defesa — o elemento subjetivo especial (art. 1º, §§1º e 2º)

O legislador, ao editar a NLAA, deliberadamente **restringiu** a criminalização para não punir o exercício regular da função. Daí dois filtros de tipicidade que devem abrir toda defesa:

**1) Dolo específico / finalidade espúria (§1º).** A conduta objetivamente descrita nos arts. 9º a 38 só é típica se acompanhada de **um** destes fins:
- prejudicar outrem;
- beneficiar a si mesmo ou a terceiro;
- mero capricho ou satisfação pessoal.

➡️ **Tese defensiva (forte):** o agente atuou no **estrito cumprimento do dever legal** (art. 23, III, CP) ou no **exercício regular da função**, sem qualquer das finalidades do §1º. Erro de avaliação, excesso culposo, precipitação ou equívoco técnico **não bastam** — o tipo é **exclusivamente doloso** e exige o **fim especial**. Ausente a prova do dolo específico (que cabe à acusação), impõe-se a **absolvição por atipicidade** (art. 386, III, CPP) ou a **rejeição/absolvição sumária** (arts. 395, 397 e 415 CPP).

**2) Divergência interpretativa não é crime (§2º).** Se o agente decidiu/agiu com base em **interpretação plausível** da lei ou em **valoração razoável** dos fatos e provas, ainda que depois reformada ou tida por equivocada, **não há crime**. Isso protege especialmente **magistrados, membros do MP e delegados** por decisões e requerimentos jurídicos.

➡️ **Tese defensiva (forte):** o ato impugnado decorre de **interpretação juridicamente sustentável** (divergência doutrinária/jurisprudencial existente à época; fundamentação idônea), atraindo o **§2º** como **excludente de tipicidade**. O crime não pune o erro de interpretação, mas o desvio de finalidade.

> **Ordem lógica da defesa:** (1) atacar o **dolo específico** (§1º) e a **divergência interpretativa** (§2º) — filtros gerais de tipicidade; (2) só então discutir a **subsunção ao tipo específico** (arts. 9º–38); (3) causas de justificação (art. 23 CP); (4) nulidades e prova; (5) subsidiariamente, dosimetria, prescrição e substituição por PRD.

## Roteiro de análise por grupos de tipos (arts. 9º a 38)

O rol é **taxativo**. Antes de qualquer tese, **enquadre a imputação no tipo específico** e verifique se todos os elementos objetivos estão presentes — muitos exigem verbos e circunstâncias precisas. Grupos frequentes na prática:

**Privação de liberdade / prisão (arts. 9º, 10, 12, 13).**
- Art. 9º — decretar medida privativa de liberdade **em manifesta desconformidade** com hipóteses legais; ou deixar de relaxar prisão manifestamente ilegal; ou não substituir prisão preventiva por medida cautelar quando manifestamente cabível.
- **Tese:** o requisito **"manifesta"** é elemento normativo do tipo — se havia **fundamentação plausível** ou **dúvida razoável** sobre o cabimento, incide o **§2º** (divergência). Não há crime na prisão depois reformada, se decretada com fundamentação idônea.

**Constrangimento do preso / interrogatório (arts. 13, 15).**
- **Tese:** distinguir a **condução regular** do procedimento (algemas justificadas — SV 11/STF; incomunicabilidade vedada) do **excesso doloso**. Falta o §1º quando o agente cumpre protocolo de segurança sem intenção de humilhar.

**Violação de domicílio / busca (art. 22).**
- Art. 22 — invadir imóvel alheio ou nele permanecer **sem determinação judicial** ou **fora das condições legais**.
- **Tese:** afastar o dolo específico quando havia **flagrante** (art. 5º, XI, CF permite ingresso), **fundadas razões** de crime permanente em curso (Tema 280/STF — RE 603.616 [NÃO VERIFICADO — conferir número e alcance via `jurisprudencia-stj-stf`]) ou **consentimento** válido do morador. A ilegalidade da prova (se houver) é questão de **nulidade**, não necessariamente de **crime** de abuso.

**Acesso a informações / sigilo (arts. 25, 28, 32).**
- **Tese:** requisição/consulta feita **no exercício da função** e com **fundamento legal** afasta o §1º; divergência sobre a via adequada atrai o §2º.

**Excesso na execução / vexame (arts. 13, 15, 18, 33).**
- **Tese:** separar **excesso culposo/despreparo** (atípico — não há modalidade culposa) do **dolo de humilhar**. Exposição a vexame exige **intenção** de expor.

> Para **cada** imputação: (a) identifique o **verbo-núcleo** e os **elementos normativos** ("manifesta", "sem justa causa", "fora das hipóteses legais"); (b) mostre que **falta um elemento objetivo** OU que **falta o §1º** OU que **incide o §2º**; (c) subsidiariamente, invoque a **causa de justificação** (art. 23 CP).

## Teses defensivas e contra-teses (acusação)

| # | Tese da defesa | Fundamento | Contra-tese (acusação) |
|---|----------------|-----------|------------------------|
| 1 | **Atipicidade por ausência de dolo específico** | Art. 1º, §1º — não provada a finalidade espúria | Prova de contexto revela o desvio de finalidade (perseguição pessoal, vingança) |
| 2 | **Divergência interpretativa não é crime** | Art. 1º, §2º — interpretação/valoração plausível | Não havia dúvida razoável; interpretação era manifestamente contra legem |
| 3 | **Estrito cumprimento do dever legal / exercício regular** | Art. 23, III, CP | O agente extrapolou o dever; houve excesso doloso (art. 23, § único) |
| 4 | **Falta elemento objetivo do tipo específico** | Arts. 9º–38 (tipicidade fechada) | Todos os elementos do tipo estão presentes na denúncia |
| 5 | **Ausência de modalidade culposa** | Tipos são exclusivamente dolosos | O dolo (ao menos eventual quanto ao resultado) está demonstrado |
| 6 | **Nulidade / cerceamento na apuração** | CPP; devido processo | Prova lícita e regularmente produzida |
| 7 | **Prescrição** (penas baixas → prescrição rápida) | Art. 109 CP; art. 5º da Lei | Marco interruptivo válido; prazo não escoado |
| 8 | **Substituição por PRD / suspensão / transação** | Art. 5º da Lei; Lei 9.099/95 | Circunstâncias desfavorecem a substituição |

## Nulidades e teses processuais próprias

- **Rejeição da denúncia (art. 395 CPP):** inépcia por **não descrever o dolo específico** (a denúncia que apenas narra o ato objetivo, sem imputar a finalidade do §1º, é **inepta** — falta de justa causa). Este é um dos pontos mais fortes na **resposta à acusação**.
- **Absolvição sumária (art. 397 CPP / art. 415 CPP no júri):** quando **manifesta** a atipicidade (falta o §1º ou incide o §2º) desde o início.
- **Competência:** verificar **foro por prerrogativa de função** (magistrados, membros do MP, autoridades com foro) e, nos crimes militares, a **Justiça Militar** (abuso praticado por militar em serviço pode atrair competência específica — confira o enquadramento).
- **Ação penal:** pública incondicionada (art. 3º); atenção ao cabimento de **ação penal privada subsidiária** se o MP se omitir.
- **Prova do dolo:** o ônus é da **acusação**; a defesa explora a **presunção de legalidade** dos atos administrativos e a ausência de elementos que revelem a finalidade espúria.

## Súmulas e precedentes (todos sob o Citation Gate)

> **Regra inegociável:** os itens abaixo são **pistas de pesquisa**, não citações prontas. Confirme número, teor e vigência via `jurisprudencia-stj-stf` / `verificacao-citacoes` **antes** de peticionar. Prefira ensinar a **tese e o dispositivo** a arriscar um número de acórdão.

- **Súmula Vinculante 11/STF** — uso de **algemas** só é lícito em caso de resistência, fundado receio de fuga ou perigo; excepcionalidade **por escrito**. (Relevante para imputações de abuso na abordagem/prisão — confirmar teor.)
- **Estrito cumprimento do dever legal (art. 23, III, CP)** — causa de justificação central; excesso doloso pune-se (art. 23, § único).
- **ADIs sobre a Lei 13.869/2019** — houve questionamento da constitucionalidade dos §§1º e 2º do art. 1º e de tipos específicos. **Estado atual e teses fixadas: [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`].**
- **Ingresso em domicílio / flagrante de crime permanente** — orientação do STF em repercussão geral sobre "fundadas razões". **Número do tema/RE: [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`].**
- **Distinção entre erro/excesso culposo e dolo específico** — jurisprudência do STJ afastando a tipicidade quando ausente a finalidade do §1º. **Precedentes específicos: [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`].**

## Estrutura da peça (resposta à acusação / memoriais / defesa prévia)

Esta skill é de **metodologia forense** — não gera cálculo determinístico. Se houver necessidade de dosimetria (penas dos arts. 9º–38) ou de prazo prescricional, descreva o método e aponte para a **`calculadora-dosimetria`** e a **`calculadora-prescricao`** (penas baixas ⇒ prescrição rápida ⇒ tese frequente). Sugestão de estrutura:

1. **Endereçamento e qualificação** — juízo competente (atenção a foro por prerrogativa); qualificação do agente e da função exercida.
2. **Síntese processual** — o que se imputa; qual(is) tipo(s) dos arts. 9º–38.
3. **Preliminar de rejeição/inépcia (art. 395 CPP)** — a denúncia não descreve o **dolo específico** (§1º); falta justa causa.
4. **Mérito — atipicidade:**
   - **4.1** Ausência de dolo específico / finalidade espúria (§1º) — o agente atuou no exercício regular do dever;
   - **4.2** Divergência interpretativa / valoração razoável (§2º) — não configura abuso;
   - **4.3** Estrito cumprimento do dever legal (art. 23, III, CP);
   - **4.4** Falta de elemento objetivo do tipo específico imputado.
5. **Prova** — impugnação de ilicitudes; presunção de legalidade do ato; ônus da acusação quanto ao dolo.
6. **Subsidiariamente** — prescrição; dosimetria (proporcionalidade); substituição por PRD (art. 5º) / suspensão condicional / transação (Lei 9.099/95).
7. **Pedidos** — rejeição da denúncia; absolvição sumária; ou, ao final, absolvição (art. 386, III/VII, CPP); subsidiários acima.

> **Modelo de peça:** esta skill fornece o roteiro de teses. Para a redação estruturada da resposta à acusação, combine com a skill de peça de defesa correspondente e com `redacao-persuasiva-criminal`. Não reproduza modelo pronto sem adaptar ao tipo específico imputado e ao caso concreto.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Discutir o mérito do tipo específico **antes** de atacar o §1º/§2º — inverte a lógica e enfraquece a defesa.
- Tratar **erro/excesso culposo** como se fosse crime — os tipos são **exclusivamente dolosos**; não há modalidade culposa.
- Aceitar denúncia que só narra o **ato objetivo** sem imputar a **finalidade espúria** — isso é **inépcia** (arguir art. 395 CPP).
- Confundir **ilicitude da prova** (nulidade processual) com **crime de abuso** (nem toda prova ilícita gera crime do agente).
- Citar número de HC/REsp/RE, informativo ou tema **de memória** — passe pelo Citation Gate.
- Ignorar **foro por prerrogativa de função** e a possível competência da **Justiça Militar**.
- Esquecer que as **penas são baixas** — prescrição rápida, JECrim, PRD e despenalização são frentes reais e muitas vezes decisivas.

**Checklist de defesa:**
- [ ] O agente enquadra-se no conceito de **agente público** (arts. 1º e 2º) e agiu **no exercício/pretexto da função**?
- [ ] A denúncia **descreve o dolo específico** do §1º? (Se não → inépcia, art. 395 CPP.)
- [ ] Há prova concreta da **finalidade espúria** (prejudicar/beneficiar/capricho) — ou apenas do ato objetivo?
- [ ] O ato decorre de **interpretação/valoração plausível** → incide o **§2º** (divergência não é crime)?
- [ ] Cabível o **estrito cumprimento do dever legal** (art. 23, III, CP)?
- [ ] O **tipo específico** imputado tem **todos** os elementos objetivos presentes (verbo-núcleo, elementos normativos)?
- [ ] Verificada a **competência** (foro por prerrogativa; Justiça Militar)?
- [ ] Avaliadas **prescrição** (penas baixas) e **despenalização** (PRD art. 5º; transação/suspensão da Lei 9.099/95)?
- [ ] Todas as **súmulas/precedentes** conferidos via `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Distinções importantes (não confundir skills/polos)

- **`defesa-conducao-coercitiva`** invoca a Lei 13.869 **CONTRA** a autoridade (polo oposto — quem sofreu a medida). **Aqui é o inverso:** defende-se o **agente acusado**. Se o pedido for atacar uma autoridade por abuso, esta **não** é a skill.
- **`defesa-crime-tortura`** (Lei 9.455/97) é o tipo **mais grave** e autônomo — não confundir excesso/abuso com tortura (dolo e resultado distintos).
- **Roteador:** confirme o **polo** do cliente antes de aplicar esta skill — ela pressupõe defesa do **agente público acusado**.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Todo o conteúdo é hipótese de trabalho; a peça só é protocolada após revisão do advogado responsável (CED/EAOAB; Provimento 205/2021 da OAB).
- **Citation Gate inegociável:** nenhuma súmula, precedente, tese ou tema citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Na dúvida, **omitir vence inventar**.
- **Ética por polo:** esta skill é de **DEFESA** do agente público. Se a atuação for do **Ministério Público** (acusação/assistência) ou da **Defensoria**, observe o regramento próprio (CNMP; LC 80/94) e o conflito de interesses (art. 17 EAOAB).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita (com ênfase no elemento subjetivo especial), coesão e persuasão (a régua de obra-prima que a revisão cobra).
