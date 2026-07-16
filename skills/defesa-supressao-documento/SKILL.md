---
name: defesa-supressao-documento
description: >-
  Use ao defender acusado de SUPRIMIR, DESTRUIR ou OCULTAR documento público ou particular
  VERDADEIRO de que não podia dispor (art. 305 do CP): atipicidade por documento de que se podia
  dispor, ausência do fim de benefício próprio/alheio ou de prejuízo, prova da preexistência e do
  teor do documento, distinção da fraude processual (art. 347) e do falso (297/298/299). Gatilhos:
  supressão de documento, destruição de documento… Não use para conclusão definitiva sem autos
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
  eval_case_ids: ["csq-v5-defesa-supressao-documento"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-supressao-documento", "defesa supressao", "supressao documento"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Supressão de Documento (art. 305 do CP)

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

Esta skill orienta a **defesa** do acusado de **supressão de documento** — o crime do art. 305 do Código Penal, que pune quem **destrói, suprime ou oculta**, em benefício próprio ou de outrem, ou em prejuízo alheio, **documento público ou particular verdadeiro** de que não podia dispor. É crime contra a **fé pública** (Título X do CP), mas de estrutura muito distinta das falsidades: aqui **não se cria nem se altera** documento — **elimina-se ou esconde** um documento que já existia e era autêntico.

> **Lição central:** o núcleo da defesa quase sempre está em **quatro filtros**, nessa ordem — (1) **o documento era verdadeiro e preexistente?** (a acusação tem de provar que existiu e qual era o teor); (2) **o acusado podia ou não dispor dele?** (se podia, o fato é **atípico**); (3) **houve o fim especial** de benefício próprio/alheio ou de prejuízo? (é **dolo específico**; sem ele, atipicidade); e (4) **a conduta é mesmo supressão** ou se confunde com **fraude processual (347)**, **falso** (297/298/299) ou **exercício arbitrário/subtração de coisa própria**? Errar a subsunção é o vício mais comum da denúncia.

> **Cautela de vigência (obrigatória antes de citar):** confirme a **redação vigente do art. 305 do CP** e das figuras vizinhas (arts. 297, 298, 299, 302, 337-A, 347 do CP) na fonte oficial antes de fundamentar. Súmulas, teses de repercussão geral, temas repetitivos e qualquer precedente do STF/STJ **devem passar pela skill `jurisprudencia-stj-stf`** (gate de verificação de citações) antes de ir para a peça. Na dúvida entre citar um número de acórdão e ensinar a tese, **ensine a tese e cite o dispositivo** — omitir vence inventar.

## Base legal

- **Art. 305 do CP** — *"Destruir, suprimir ou ocultar, em benefício próprio ou de outrem, ou em prejuízo alheio, documento público ou particular verdadeiro, de que não podia dispor: Pena — reclusão, de 2 (dois) a 6 (seis) anos, e multa, se o documento é público; e reclusão, de 1 (um) a 5 (cinco) anos, e multa, se o documento é particular."*
- **Art. 297 do CP** — falsificação de documento público (conduta oposta: **criar/alterar**).
- **Art. 298 do CP** — falsificação de documento particular.
- **Art. 299 do CP** — falsidade ideológica (inserir declaração falsa em documento verdadeiro).
- **Art. 347 do CP** — **fraude processual** (inovar artificiosamente o estado de lugar, coisa ou pessoa **para induzir a erro o juiz ou o perito** em processo). Delimitação essencial: se a supressão/ocultação visa a **enganar autoridade em processo**, discute-se a incidência do 347, não do 305.
- **Art. 20 do CP** — erro de tipo (excludente do dolo, inclusive do fim especial).
- **Art. 155 do CPP** — livre convicção motivada e vedação de condenação lastreada só em elementos do inquérito.
- **Súmula Vinculante 14/STF** — acesso da defesa aos elementos de prova já documentados (essencial para aferir a **preexistência e o teor** do documento supostamente suprimido).

## Elementos do tipo — o mapa da atipicidade

A denúncia por art. 305 só se sustenta se **todos** estes elementos estiverem presentes e provados. Cada um é uma frente de defesa:

| Elemento | Exigência | Tese de defesa quando falha |
|---|---|---|
| **Objeto: documento verdadeiro** | O documento suprimido tem de ser **autêntico** (verdadeiro). Documento **falso** não é objeto do 305 | Se o documento era falso, atipicidade quanto ao 305 (podendo haver outro crime) |
| **Preexistência e teor** | O documento **existia** e tinha **conteúdo com relevância jurídica/probatória** | Falta de prova de que existiu / de qual era o teor → **absolvição por dúvida** (art. 386, VII, CPP) |
| **Conduta: destruir, suprimir ou ocultar** | Ato material de eliminação (destruir), de fazer desaparecer (suprimir) ou de esconder (ocultar) | Mero **extravio culposo**, perda ou dano acidental → atipicidade (não há dolo) |
| **"De que não podia dispor"** | O agente **não** podia dispor do documento | Se **podia dispor** (é seu, ou tinha poder de disposição) → **fato atípico** |
| **Fim especial (elemento subjetivo)** | Agir **em benefício próprio/alheio ou em prejuízo alheio** | Ausência do especial fim de agir → **atipicidade por falta de dolo específico** |
| **Dolo** | Vontade livre e consciente de suprimir documento alheio indisponível | Erro de tipo (art. 20) sobre a disponibilidade ou a titularidade → exclui o dolo |

## Roteiro de análise e defesa (as teses típicas)

### 1. Atipicidade por "documento de que se PODIA dispor" (a tese-mãe)

O art. 305 exige que o documento seja **"de que não podia dispor"**. Este é o coração do tipo e a defesa mais forte.

- Quem **rasga um contrato do qual é o único titular e credor**, um recibo próprio, ou um documento particular de sua exclusiva disponibilidade, em regra **não comete** o crime, porque **podia dispor** do documento.
- A indisponibilidade decorre de o documento pertencer a **outrem**, ser de **interesse de terceiro**, ou ter **destinação probatória/registral** que retira do agente o poder de eliminá-lo (ex.: documento já juntado a processo, registro público, documento em copropriedade ou que faz prova a favor de terceiro).
- **Tese:** demonstrar que, no caso concreto, o acusado detinha **poder de disposição** sobre o documento (titularidade exclusiva, ausência de interesse de terceiro tutelável) → **fato atípico**, independentemente da conduta material.
- **Contra-tese (acusação):** sustentar que o documento, ainda que em posse do agente, **fazia prova a favor de terceiro** ou tinha **relevância pública/processual**, tornando-o indisponível.

### 2. Atipicidade por ausência do fim especial (dolo específico)

O tipo reclama que a conduta se dê **"em benefício próprio ou de outrem, ou em prejuízo alheio"**. É **elemento subjetivo especial** (dolo específico).

- Sem prova de que o agente **quis** beneficiar-se/beneficiar terceiro ou prejudicar alguém, **falta o especial fim de agir** e o fato é atípico — não bastando o dolo genérico de destruir.
- Destruição por **descuido, limpeza de arquivos, descarte de rotina, ou por engano** não realiza o tipo.
- **Tese:** a acusação não demonstrou a finalidade específica; a conduta, quando muito, é **culposa** (e o 305 **não** admite modalidade culposa).

### 3. Falta de prova da preexistência e do teor do documento

Não se pune a supressão de documento cuja **existência e conteúdo** a acusação não consegue provar.

- Se o documento "sumiu", a acusação precisa demonstrar, por outros meios (cópias, testemunhas, registros, perícia), **que ele existia** e **qual era seu teor** relevante.
- **Tese:** ausente prova segura da preexistência e do teor, impõe-se a **absolvição por insuficiência de provas** (art. 386, VII, do CPP); dúvida razoável milita em favor do réu (*in dubio pro reo*).
- Use a **SV 14/STF** para garantir acesso aos elementos que sustentam (ou não) a existência do documento.

### 4. Erro de subsunção — 305 x fraude processual (347) x falso

Muitas denúncias erram o enquadramento. A defesa deve **expor a incompatibilidade típica**:

- **305 x 347 (fraude processual):** se a conduta de ocultar/suprimir visa a **induzir juiz ou perito a erro em processo**, o tipo discutido é a **fraude processual (art. 347)** — de pena menor —, e não o 305. **Tese subsidiária:** desclassificação para o 347 (com reflexos em pena e prescrição).
- **305 x falsidades (297/298/299):** falso é **criar/alterar** documento; supressão é **eliminar/ocultar** documento **verdadeiro**. São condutas **opostas**. Se o que houve foi criação/alteração, **não** é 305; se o documento era **falso**, também **não** é 305 (o objeto tem de ser verdadeiro).
- **305 x subtração de coisa própria / exercício arbitrário:** retomar/eliminar documento próprio pode configurar, no máximo, outra figura (ou nenhuma), não o 305.
- **Tese:** **atipicidade** (se nenhum tipo se ajusta) ou **desclassificação** para a figura correta, sempre a mais benéfica.

### 5. Consunção e concurso aparente

- Quando a supressão é **meio necessário** para outro crime-fim já imputado (ex.: apropriação, estelionato), avaliar **princípio da consunção** para evitar dupla punição pelo mesmo substrato fático — **conferir a jurisprudência aplicável via `jurisprudencia-stj-stf`** antes de afirmar.
- Atenção ao **bis in idem**: mesma conduta não pode ser punida como supressão **e** como o crime-fim quando uma absorve a outra.

### 6. Dosimetria e prescrição (quando a condenação é o cenário)

- **Distinção público x particular:** documento **público** → reclusão de **2 a 6 anos**; **particular** → reclusão de **1 a 5 anos**. Discutir a **natureza do documento** pode reduzir a pena-base de partida e a prescrição.
- Para o cálculo concreto da pena, descreva o método e **use a skill `calculadora-dosimetria`**; para os prazos prescricionais, **use `calculadora-prescricao`**. Não calcule pena/prescrição "de cabeça" na peça.
- **Prescrição:** documento particular (máximo de 5 anos) tem prazo prescricional distinto do público — sempre verificar a possível **prescrição da pretensão punitiva** (em abstrato e, após sentença, retroativa/intercorrente) na `calculadora-prescricao`.

## Teses e contra-teses (síntese)

| Tese da defesa | Fundamento | Contra-tese usual da acusação |
|---|---|---|
| Podia dispor do documento → atípico | Elementar "de que não podia dispor" (art. 305) | Documento fazia prova a terceiro / tinha relevância pública |
| Ausência do fim especial | Dolo específico (benefício/prejuízo) | Circunstâncias indicariam a finalidade |
| Sem prova da preexistência/teor | *In dubio pro reo* (art. 386, VII, CPP) | Prova indireta/testemunhal da existência |
| Documento era falso → não é objeto do 305 | Tipo exige documento **verdadeiro** | Reenquadrar em falsidade (297/298/299) |
| Conduta é fraude processual | Especialidade do art. 347 | Manter no 305 (pena maior) |
| Consunção pelo crime-fim | Concurso aparente de normas | Autonomia das condutas / bem jurídico diverso |
| Conduta culposa/acidental | 305 não pune culpa | Dolo demonstrado pelo contexto |

## Súmulas e precedentes (sob o Citation Gate)

Cite com certeza apenas dispositivos de lei e enunciados notórios. Para **qualquer** número de HC/REsp/RE, informativo ou tema, marque **[NÃO VERIFICADO]** e confira na skill `jurisprudencia-stj-stf`.

- **Súmula Vinculante 14/STF** (notória) — direito da defesa de acessar os elementos de prova já documentados; base para exigir a demonstração da **existência e do teor** do documento supostamente suprimido.
- **Orientação consolidada** (dispositivo, não acórdão): o art. 305 exige documento **verdadeiro** e **indisponível** ao agente, além do **fim especial** — conferir a leitura vigente na doutrina e na jurisprudência via `jurisprudencia-stj-stf`. **[NÃO VERIFICADO quanto a números de acórdão específicos]**
- **Distinção 305/347** — a incidência de fraude processual quando a ocultação visa a enganar juiz/perito em processo é tese doutrinária e jurisprudencial recorrente; **confirmar precedentes específicos** antes de citar número. **[NÃO VERIFICADO]**
- Tese de **consunção** e **bis in idem** em supressão como meio de crime-fim: **[NÃO VERIFICADO]** — verificar o entendimento atual do STJ/STF via `jurisprudencia-stj-stf`.

> Regra de ouro: prefira sustentar a **tese** ancorada no **dispositivo** (art. 305 e suas elementares) a arriscar um número de acórdão. Todo precedente citado na peça passa pelo gate de verificação.

## Estrutura da resposta/defesa (esqueleto da peça)

Ao redigir a resposta à acusação (art. 396-A do CPP), alegações finais ou razões de apelação, organize:

1. **Síntese da imputação** — o que a denúncia diz que foi destruído/suprimido/ocultado.
2. **Preliminares** — inépcia da denúncia (se não descreve o documento, seu teor, a indisponibilidade e o fim especial); acesso à prova (SV 14).
3. **Mérito — filtros de tipicidade**, nesta ordem:
   - a) documento era **verdadeiro** e **preexistente**? (prova do teor);
   - b) o acusado **podia dispor**? (atipicidade);
   - c) houve **fim especial** de benefício/prejuízo? (dolo específico);
   - d) a conduta é **mesmo** supressão ou é **347/falso/outra**? (subsunção).
4. **Teses subsidiárias** — desclassificação (347), consunção, natureza particular do documento (pena menor).
5. **Dosimetria e prescrição** (se cabível) — remeter a `calculadora-dosimetria` e `calculadora-prescricao`.
6. **Pedido** — absolvição (art. 386, III/VII, do CPP), subsidiariamente desclassificação e, por último, dosimetria mínima.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.

## Erros comuns / checklist

- [ ] Confirmei que o documento era **verdadeiro** (o 305 **não** alcança documento falso)?
- [ ] A acusação **provou a preexistência e o teor** do documento? (Sem isso → *in dubio pro reo*.)
- [ ] Verifiquei se o acusado **podia dispor** do documento (titularidade/interesse de terceiro)? (Se podia → **atípico**.)
- [ ] Há prova do **fim especial** (benefício próprio/alheio ou prejuízo)? (Sem ele → atipicidade.)
- [ ] A conduta é **destruir/suprimir/ocultar** dolosa, e não perda/extravio **culposo** ou acidental?
- [ ] Testei a **subsunção**: não é caso de **fraude processual (347)**, **falso (297/298/299)** ou outra figura?
- [ ] Avaliei **consunção**/*bis in idem* se a supressão foi meio de outro crime imputado?
- [ ] Classifiquei o documento como **público ou particular** (impacta pena e prescrição)?
- [ ] Remeti pena a `calculadora-dosimetria` e prazos a `calculadora-prescricao` (sem cálculo "de cabeça")?
- [ ] **Todas** as súmulas/precedentes passaram pela skill `jurisprudencia-stj-stf` antes de entrar na peça?
- [ ] Apliquei a `redacao-persuasiva-criminal` e submeti à **revisão humana**?

**Anti-padrões (evitar):**
- Aceitar a imputação sem testar a elementar **"de que não podia dispor"** — é onde mora a atipicidade.
- Tratar destruição **culposa/acidental** como crime (o 305 exige dolo e fim especial).
- Confundir **supressão** (eliminar verdadeiro) com **falso** (criar/alterar) — são condutas opostas.
- Deixar passar denúncia que **não descreve o teor** do documento nem prova sua existência.
- Citar número de HC/REsp de memória — sempre pelo gate `jurisprudencia-stj-stf`.
- Calcular pena/prescrição na peça sem as calculadoras dedicadas.

## Lembretes finais

- **Quatro filtros, nessa ordem:** verdadeiro+preexistente → podia dispor? → fim especial? → é mesmo 305 (ou 347/falso)?
- **"De que não podia dispor"** é a tese-mãe: se o acusado podia dispor, o fato é **atípico**.
- **Dolo específico** (benefício/prejuízo) é indispensável; **não há forma culposa**.
- **305 ≠ falso** (297/298/299): supressão elimina documento **verdadeiro**; falso **cria/altera**.
- **305 x 347:** ocultar para enganar juiz/perito em processo tende à **fraude processual** — desclassificação subsidiária.
- **Público x particular** muda a pena e a prescrição — sempre classificar.
- **Cautela de vigência** e **Citation Gate** antes de qualquer citação, via `jurisprudencia-stj-stf`.

## Nota de conformidade

Esta skill produz **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, nunca peça final pronta a protocolar. A responsabilidade pela tese, pela citação e pela subsunção é sempre do **advogado** responsável (Estatuto da OAB e Código de Ética; Provimento 205/2021 quanto à publicidade). Nenhuma súmula, tese ou acórdão vai para a peça sem passar pelo **gate de verificação de citações** (`jurisprudencia-stj-stf`) — há sanções reais por jurisprudência inventada por IA. Esta é uma skill do **polo de DEFESA** (o roteador deve conferir o polo da instituição em `company.md`); havendo atuação pelo polo acusatório (MP/assistente), adapte a lógica e observe a ética própria (CNMP).
