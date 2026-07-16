---
name: calculadora-pena-multa
description: >-
  Use para estruturar e conferir o cálculo da PENA DE MULTA — o método dos dias-multa (art. 49 CP):
  número de dias-multa (10 a 360) fixado na 1ª etapa e valor unitário (1/30 a 5× salário mínimo)
  fixado na 2ª etapa segundo a capacidade econômica do réu (art. 60), mais a atualização monetária
  pelos índices oficiais e a simulação de parcelamento (art. 50). Produz memória de cálculo
  auditável e rascunho para conferência humana… Não use para escolha automática de lei, fração,
  marco ou consequência jurídica.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, calculo, pena-multa, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-calculation"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-calculadora-pena-multa"]
  risk_level: "r4"
  delivery_type: "audit-calculation"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["calculadora-pena-multa", "calculadora pena", "pena multa"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["regra, fonte oficial ou aplicabilidade não confirmada", "data ou valor material ausente/conflitante", "motor sem teste compatível ou memória reproduzível"]
  script:
    path: scripts/pena-multa.mjs
    runtime: node
    invoke: "node {skill_path}/scripts/pena-multa.mjs '{json}'"
---

# Calculadora da Pena de Multa (arts. 49 a 52, 58 e 60 do CP)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-calculation`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** modalidade do cálculo e pergunta exata.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** validar schema e recusar input incompleto ou conflitante; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; resultado e memória de cálculo reproduzível; regra_id, fontes, versão do motor e hash dos inputs; divergências, cenários e campo de revisão humana.
- **Gate:** pedido para declarar consequência jurídica automaticamente. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

## Motor determinístico

Execute `node {skill_path}/scripts/pena-multa.mjs '{json}'`. O chamador fornece a regra já verificada, faixas, fonte oficial e confirmação humana de aplicabilidade; o motor valida os inputs, calcula em centavos, registra a memória e distribui parcelas sem perder o resto. Ele nunca escolhe quantidade de dias, valor unitário, índice, data-base ou capacidade econômica.

No retorno do motor, `status: completed` significa **somente que a aritmética terminou**; `legalReadiness` permanece `human_review_required`. A skill só converte a entrega para `status: ready` depois da conferência profissional da regra, das âncoras e da memória. Registre sempre `inputHash`, `engine.version`, fontes e responsáveis.

Esta skill orienta a **estruturação e a conferência do cálculo da pena de multa** — a sanção pecuniária penal fixada pelo **sistema de dias-multa** do art. 49 do Código Penal. Ela **não substitui** a discricionariedade motivada do juiz (quantos dias-multa, qual o valor unitário): descreve o **método bifásico**, aplica os **limites legais** e monta a **memória de cálculo auditável**, distinguindo o que é conta mecânica do que é valoração judicial.

> **Lição central:** a multa tem **duas etapas independentes** e é erro grave misturá-las. **Primeiro** fixa-se o **número de dias-multa** (10 a 360), na esteira das circunstâncias do art. 59; **depois**, o **valor de cada dia-multa** (1/30 a 5× salário mínimo), olhando **exclusivamente a capacidade econômica do réu** (art. 60). Multiplicar quantidade × valor só vem no fim. Dosar o valor unitário pela gravidade do crime — e não pela renda — é vício recorrente que fundamenta recurso.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 49 a 52, 58 e 60 do CP**, da **Lei de Execução Penal (Lei 7.210/84)** quanto à cobrança, e a jurisprudência sobre (i) a **natureza da multa após a Lei 9.268/96** — que deixou de ser convertível em prisão — e (ii) a **legitimidade para executá-la** (MP × Fazenda Pública), tema com evolução no STF/STJ. Nenhuma súmula, tema ou acórdão entra na peça sem passar pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`. Na dúvida numérica de índice/salário mínimo, **omitir vence inventar**.

## Base legal

- **Art. 49 do CP** — sistema de dias-multa: **mínimo 10, máximo 360 dias-multa**; valor unitário de **1/30 até 5× o maior salário mínimo** vigente **ao tempo do fato**; **§2º**: o valor é **atualizado monetariamente** quando da execução.
- **Art. 58 do CP** — a multa cominada alternativa ou cumulativamente segue o critério do art. 49, §1º; parágrafo único trata da multa nos crimes contra o patrimônio de que resulta prejuízo.
- **Art. 60 do CP** — o juiz **atende principalmente à situação econômica do réu** (*caput*); **§1º**: pode **elevar a multa até o triplo** se ineficaz o valor máximo diante da capacidade do réu; **§2º**: aplicação de multa substitutiva (art. 44).
- **Art. 50 do CP** — pagamento: prazo de **10 dias** após o trânsito em julgado; possibilidade de **parcelamento** (mediante requerimento) e de **desconto em vencimentos** (art. 50, §1º e §2º).
- **Art. 51 do CP** (red. Lei 9.268/96 e alterações posteriores) — transitada em julgado, a multa é **dívida de valor**, aplicando-se as normas da legislação relativa à dívida ativa/execução; **a multa não se converte em prisão** por inadimplemento.
- **Art. 52 do CP** — suspensão da execução da multa se sobrevier ao condenado doença mental.
- **Art. 72 do CP** — no **concurso de crimes**, as multas são aplicadas **distinta e integralmente** (não incide a exasperação do art. 70 sobre a multa).

## Metodologia — o cálculo bifásico da multa

O número de dias-multa **não** decorre da mesma conta da pena privativa; é uma **dosimetria própria**, embora acompanhe a lógica trifásica em espírito. Fixe as duas grandezas separadamente e só então multiplique.

### Etapa 1 — Número de dias-multa (quantidade)

- **Faixa legal:** 10 a 360 dias-multa (art. 49, *caput*).
- **Critério:** as **circunstâncias judiciais do art. 59** e, quando cabível, a **proporcionalidade com a pena privativa** fixada — a doutrina e a prática recomendam que o número de dias-multa **acompanhe o mesmo percentual** de afastamento do mínimo aplicado à pena privativa (simetria/proporcionalidade). Ex.: se a pena-base ficou a meio caminho entre mínimo e máximo, os dias-multa tendem ao ponto médio da faixa.
- **O que é do juiz:** o valor concreto dentro da faixa (discricionariedade **motivada**). A skill apenas confere se está **dentro de 10–360** e se guarda **coerência** com a pena privativa.

### Etapa 2 — Valor do dia-multa (valor unitário)

- **Faixa legal:** de **1/30** até **5×** o **maior salário mínimo** vigente **ao tempo do fato** (art. 49, §1º).
- **Critério único:** a **capacidade econômica do réu** (art. 60, *caput*) — renda, patrimônio, encargos. **Não** a gravidade do crime (essa já pesou na Etapa 1). Fixar o valor unitário pela reprovabilidade do fato é *bis in idem* e vício de fundamentação.
- **Majoração excepcional (art. 60, §1º):** se, mesmo no teto (5×), a multa for **ineficaz** diante da capacidade do réu, pode ser **elevada até o triplo** — o que amplia o teto efetivo do valor unitário. Depende de **fundamentação expressa** sobre a robustez econômica.

### Etapa 3 — Multiplicação e memória de cálculo

```
valor da multa (ao tempo do fato) = (número de dias-multa) × (valor do dia-multa)
```

- O resultado é expresso **em salários mínimos ou em reais ao tempo do fato**; a conversão para reais usa o salário mínimo **da data do fato**, não o atual.
- **Registre a memória:** faixa legal → quantidade fixada e por quê → valor unitário fixado e por quê → produto → base de atualização. Auditável, passo a passo.

### Etapa 4 — Atualização monetária (art. 49, §2º)

- Da **data do fato** até a **data da execução/pagamento**, o valor é **corrigido monetariamente** pelos **índices oficiais** aplicáveis (o índice concreto varia conforme a legislação e a orientação do juízo da execução — **confirmar o índice adotado**, ex.: correção pela tabela do tribunal / índice de dívida ativa).
- **Atenção:** a base de correção é o **valor ao tempo do fato**, e não um recálculo pelo salário mínimo atual. Corrigir "trocando" o salário mínimo antigo pelo novo é **erro comum** (dupla valorização).

### Etapa 5 — Parcelamento e execução (arts. 50 e 51)

- **Prazo:** 10 dias do trânsito em julgado (art. 50).
- **Parcelamento:** cabível mediante requerimento fundamentado na situação econômica; a skill **simula** as parcelas (valor atualizado ÷ nº de parcelas) e a projeção mensal — **rascunho** para instruir o pedido.
- **Natureza (Lei 9.268/96):** transitada em julgado, a multa é **dívida de valor**; **não** há conversão em prisão. A execução segue rito próprio — **confirmar legitimidade e via** (evolução no STF: legitimidade prioritária do MP no juízo da execução penal, subsidiariamente a Fazenda) via `jurisprudencia-stj-stf` **[NÃO VERIFICADO — conferir o entendimento vigente antes de afirmar]**.

## Onde fica a conta determinística (integração)

> **Esta skill é metodologia (roteiro forense), não motor de cálculo.** A aritmética determinística de dosimetria — inclusive a **indicação dos dias-multa** — já vive na calculadora existente; a rotina específica de **valor unitário × atualização × parcelamento** da multa é **[calculadora a implementar com testes]**.

- **`calculadora-dosimetria`** — motor determinístico da dosimetria trifásica (CP 68). Recebe os quanta discricionários e devolve pena-base/provisória/definitiva e **pode indicar o número de dias-multa** correlato. **Use-a para obter a Etapa 1** (quantidade) com coerência frente à pena privativa.
- **`calculadora-tempestividade`** — para o **prazo do art. 50** (10 dias) e prazos recursais correlatos ao trânsito em julgado.
- **`calculadora-prescricao`** — a **prescrição da pretensão executória da multa** e a interação com a prescrição da pena privativa (a multa acompanha, em regra, a prescrição do crime — **conferir**).
- **Rotina de multa (a implementar):** um pequeno motor `dias-multa × valor-unitário → produto → correção monetária → parcelamento`, com **testes** cobrindo os limites (10/360; 1/30–5×; art. 60, §1º triplo) e o arredondamento. Enquanto não existir, a conta é feita à mão sob a memória de cálculo acima, com **conferência humana**.

## Teses e contra-teses (foco em defesa)

**Defesa (reduzir/afastar a multa):**

1. **Desproporção do valor unitário à capacidade econômica (art. 60):** réu hipossuficiente / assistido pela Defensoria → pleitear o **piso (1/30)** do salário mínimo. Fundamentar com a situação real (renda, dependentes, desemprego).
2. **Vício de fundamentação — dosou o valor unitário pela gravidade do crime:** requerer a **redução ao mínimo**, pois a gravidade só pode pesar na **quantidade** (Etapa 1), não no **valor** (Etapa 2). Dupla valoração = *bis in idem*.
3. **Falta de simetria com a pena privativa:** se a pena-base ficou no mínimo mas os dias-multa foram exasperados sem motivação própria, atacar por **ausência de proporcionalidade**.
4. **Substituição/dispensa e execução:** transitada em julgado, sustentar a **natureza de dívida de valor** (Lei 9.268/96) — **inadimplemento não impede** benefícios ligados à pena privativa (progressão/livramento) quando comprovada a **impossibilidade de pagar**; distinguir o condenado que **não pode** pagar do que **não quer** — **conferir o entendimento atual** via `jurisprudencia-stj-stf`.
5. **Concurso de crimes (art. 72):** conferir se as multas foram somadas **corretamente** (distinta e integralmente) e não exasperadas indevidamente.
6. **Atualização indevida:** impugnar correção que **recalcula pelo salário mínimo atual** em vez de corrigir o valor ao tempo do fato pelos índices oficiais (dupla valorização).

**Contra-teses (acusação/execução):**

- **Majoração até o triplo (art. 60, §1º):** para réu de **elevada capacidade econômica**, sustentar que o teto de 5× é ineficaz e requerer a elevação, com **prova da robustez patrimonial**.
- **Inadimplemento voluntário:** distinguir o condenado que **pode** pagar e não paga; a impossibilidade deve ser **comprovada**, não presumida.

## Súmulas e precedentes (sob o Citation Gate)

> Cite apenas o que confirmar. Os **dispositivos** (arts. 49, 50, 51, 60 do CP) são certos; os **enunciados e temas** abaixo exigem verificação.

- **Natureza da multa após a Lei 9.268/96:** o inadimplemento **não** gera conversão em prisão; a multa vira **dívida de valor** (texto do art. 51 do CP — dispositivo certo).
- **Legitimidade para a execução da multa** (MP no juízo da execução × Fazenda Pública): há **evolução jurisprudencial no STF/STJ** — **[NÃO VERIFICADO]**, conferir o precedente e a modulação vigentes via `jurisprudencia-stj-stf` antes de afirmar quem executa.
- **Efeito do não pagamento sobre progressão/extinção da punibilidade:** existe jurisprudência sobre **não obstar** benefícios quando comprovada a hipossuficiência — **[NÃO VERIFICADO]**, checar enunciado/tese e a exigência de prova da impossibilidade de pagar.
- **Prescrição da multa:** enunciado relacionando a prescrição da multa à do crime — **[NÃO VERIFICADO]**, conferir antes de citar número.

**Regra de ouro:** prefira **ensinar a tese e apontar o dispositivo** a arriscar um número de HC/REsp/RE, informativo ou tema. Todo número passa por `jurisprudencia-stj-stf`.

## Erros comuns (anti-padrões)

- **Misturar as duas etapas:** dosar o **valor do dia-multa** pela gravidade do crime (é da **quantidade**, não do valor).
- **Ignorar a capacidade econômica (art. 60):** fixar valor unitário genérico sem análise da renda/patrimônio do réu.
- **Salário mínimo errado:** usar o salário mínimo **atual** para calcular o valor ao tempo do fato — o §1º manda usar o **vigente ao tempo do fato**; a atualização vem **depois**, por índices.
- **Dupla valorização na atualização:** corrigir monetariamente **e** ainda "reconverter" pelo salário mínimo novo.
- **Estourar os limites:** número fora de 10–360 dias-multa, ou valor fora de 1/30–5× (salvo o triplo do art. 60, §1º, devidamente fundamentado).
- **Concurso:** exasperar a multa (aplicar art. 70 à multa) em vez de somá-la (art. 72).
- **Conversão em prisão:** tratar o inadimplemento como causa de prisão — **vedado** desde a Lei 9.268/96.
- **Citar precedente de memória** sobre legitimidade/execução/prescrição da multa sem passar pelo gate.

## Checklist de conferência

- [ ] **Etapa 1** — número de dias-multa dentro de **10–360** e **coerente** com o percentual da pena privativa?
- [ ] **Etapa 2** — valor unitário dentro de **1/30 a 5×** o salário mínimo, dosado **só** pela capacidade econômica (art. 60)?
- [ ] Eventual **triplo** (art. 60, §1º) tem **fundamentação** expressa da robustez patrimonial?
- [ ] **Salário mínimo** usado é o **da data do fato** (art. 49, §1º)?
- [ ] **Atualização** feita por **índices oficiais** sobre o valor ao tempo do fato — sem reconversão pelo salário atual?
- [ ] **Memória de cálculo** registrada, passo a passo, auditável?
- [ ] **Concurso de crimes** — multas somadas (art. 72), não exasperadas?
- [ ] **Parcelamento** (art. 50) simulado sobre o valor **atualizado**, se for o caso?
- [ ] **Natureza de dívida de valor** (Lei 9.268/96) observada — sem conversão em prisão?
- [ ] Toda **súmula/precedente/tema** conferido via `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] Resultado tratado como **rascunho para conferência humana**, não como "a multa correta"?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** A saída é hipótese de cálculo a confirmar; a fixação do número de dias-multa e do valor unitário é **discricionariedade motivada** do juiz (arts. 49, 59 e 60 do CP), e a conferência final é do **advogado** responsável (CED/EAOAB).
- **Ética por polo:** advocacia sob OAB + Provimento 205/2021; Ministério Público sob o CNMP; Defensoria sob a LC 80/94. O foco desta skill é **majoritariamente de defesa** (reduzir/afastar a multa e impugnar sua execução); há também uso de conferência para o polo acusatório (aferir a correção do cálculo). Esta skill **não** é exclusiva do polo acusatório — o roteador deve conferir o **polo** da instituição no `company.md` antes de aplicar as teses de majoração.
- **Citation Gate inegociável:** dispositivos de lei e a natureza da multa (Lei 9.268/96) são citáveis com certeza; **todo** número de acórdão, informativo ou tema é **[NÃO VERIFICADO]** até passar por `jurisprudencia-stj-stf`.

**Padrão de redação:** ao converter o cálculo em peça (impugnação da multa, pedido de redução/parcelamento, contrarrazões), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita e coesão que a revisão cobra.
