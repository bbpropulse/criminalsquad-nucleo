---
name: defesa-contrabando-descaminho
description: >-
  Use ao defender em descaminho (CP, art. 334) ou contrabando (CP, art. 334-A) — distinção entre
  iludir tributo de mercadoria PERMITIDA (descaminho) e importar/exportar mercadoria PROIBIDA
  (contrabando), aplicabilidade do princípio da insignificância ao descaminho e sua NÃO aplicação ao
  contrabando, patamar do insignificante (art. 20 da Lei 10.522/02), extinção da punibilidade pelo
  pagamento do tributo no descaminho… Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, aduaneiro, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-contrabando-descaminho"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-contrabando-descaminho", "defesa contrabando", "contrabando descaminho"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Contrabando e Descaminho (CP, arts. 334 e 334-A)

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

Esta skill orienta a **defesa técnica** nos crimes aduaneiros do Código Penal: **descaminho** (art. 334 — iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, saída ou consumo de mercadoria) e **contrabando** (art. 334-A — importar ou exportar mercadoria **proibida**). São competência, em regra, da **Justiça Federal** (CF, art. 109, IV) e concentram enorme volume nas varas federais de fronteira. O eixo de toda a defesa é uma distinção que muda tudo: **o objeto é mercadoria permitida (com tributo iludido) ou mercadoria proibida?**

> **Lição central:** classifique o objeto material ANTES de qualquer tese. **Mercadoria permitida cujo tributo se iludiu = descaminho** (art. 334) — abre a porta da **insignificância** e da **extinção pelo pagamento**. **Mercadoria proibida = contrabando** (art. 334-A) — em regra **NÃO** admite insignificância e **NÃO** se extingue pelo pagamento, porque o bem jurídico não é a arrecadação, mas o controle estatal sobre o que pode ou não entrar/sair do país. Errar essa classificação inverte toda a estratégia.

> **Cautela de vigência (obrigatória antes de citar):** o art. 334-A foi **inserido pela Lei 13.008/2014**, que desmembrou contrabando e descaminho (antes reunidos no antigo art. 334). Confirme a redação vigente dos arts. 334 e 334-A do CP e o **patamar da insignificância** (hoje ancorado no art. 20 da Lei 10.522/2002 — valor sujeito a alteração por lei e por atos infralegais). Todo precedente, súmula, tema ou informativo específico passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir para a peça. Na dúvida sobre um número de acórdão, **omitir vence inventar**.

## Base legal

- **CP, art. 334** — **descaminho**: iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria. Pena: reclusão, 1 a 4 anos.
- **CP, art. 334, §1º** — condutas equiparadas ao descaminho (mercadoria estrangeira desacompanhada de documentação legal, no exercício de atividade comercial/industrial; venda/exposição à venda de tal mercadoria etc.).
- **CP, art. 334-A** — **contrabando**: importar ou exportar mercadoria **proibida**. Pena: reclusão, 2 a 5 anos (mais grave que o descaminho).
- **CP, art. 334-A, §1º** — condutas equiparadas ao contrabando (inclusive descaminho qualificado por via clandestina, reintrodução de mercadoria isenta destinada à exportação etc. — conferir os incisos vigentes).
- **Lei 10.522/2002, art. 20** — patamar de arquivamento/execução fiscal usado como parâmetro do valor **insignificante** no descaminho (conferir valor vigente).
- **CF, art. 109, IV e X** — competência da Justiça Federal para crimes contra a ordem tributária federal / bens da União (aduaneiro).
- **Decreto-Lei 37/1966 e Regulamento Aduaneiro (Decreto 6.759/2009)** — pano de fundo administrativo (perdimento, tributos incidentes) que informa a materialidade.

## Passo 1 — classificar o objeto material (a decisão que define a defesa)

```
1) A mercadoria é PROIBIDA (absoluta ou relativamente) de importar/exportar?
   ├── SIM  → CONTRABANDO (art. 334-A)
   │          • em regra, SEM insignificância
   │          • pagamento NÃO extingue a punibilidade
   │          • bem jurídico: controle/saúde/segurança/moralidade administrativa
   └── NÃO  → mercadoria PERMITIDA, apenas com tributo iludido
              → DESCAMINHO (art. 334)
                 • ADMITE insignificância (art. 20, Lei 10.522/02)
                 • pagamento do tributo tende a extinguir/afetar a punibilidade
                 • bem jurídico preponderante: arrecadação (erário)
```

**Categorias de proibição (para enquadrar contrabando):**
- **Proibição absoluta:** o bem não pode entrar/sair de forma alguma (ex.: certos produtos vedados por lei).
- **Proibição relativa:** entrada/saída depende de autorização/registro de órgão competente (ex.: ANVISA, Exército, IBAMA); a importação **à margem** desse controle configura contrabando ainda que o produto, em tese, pudesse ser importado com licença.
- **Casos-farol notórios:** **cigarros de origem estrangeira** introduzidos irregularmente são tratados como **contrabando** (produto sujeito a controle sanitário/fiscal específico), não como mero descaminho — logo, **não** se lhes aplica a insignificância pela via tributária. Medicamentos sem registro ANVISA, agrotóxicos, armas/munições e produtos sob controle do Exército também tendem ao contrabando. **Confirme o enquadramento concreto** e a jurisprudência atual via `jurisprudencia-stj-stf`.

> Atenção à **subsunção correta pela acusação**: uma denúncia que rotula como "descaminho" o que é contrabando (ou vice-versa) pode ser atacada — a favor ou contra o réu conforme o caso. A defesa deve verificar se a capitulação escolhida é a mais benéfica cabível e requerer a **emendatio/desclassificação** quando a moldura fática comportar o tipo menos grave.

## Passo 2 — teses defensivas por tipo penal

### A) Descaminho (art. 334) — o arsenal mais rico

1. **Princípio da insignificância (atipicidade material).** No descaminho, quando o tributo iludido não supera o patamar do **art. 20 da Lei 10.522/2002**, a conduta é penalmente irrelevante (ausência de lesividade ao erário). **Tese central da defesa.**
   - Verificar o **valor vigente** do patamar (foi objeto de atualização por portarias/atos do Ministério da Fazenda — conferir antes de peticionar).
   - Discussão sobre **reiteração/habitualidade**: parte da jurisprudência afasta a insignificância quando há contumácia do agente; a defesa sustenta que a insignificância é aferida pelo **valor do tributo do fato**, não pela vida pregressa, e que a reiteração é questão de dosimetria, não de tipicidade. **Tese controvertida — confira o estado atual via `jurisprudencia-stj-stf`.**
2. **Extinção da punibilidade / repercussão do pagamento do tributo.** No descaminho — crime que tutela primordialmente a arrecadação — o **pagamento integral do tributo** iludido tende a repercutir na punibilidade, por analogia ao regime dos crimes tributários. Sustentar a extinção (ou, no mínimo, a suspensão pela adesão a parcelamento). **Tese a confirmar na jurisprudência vigente** — há divergência sobre a aplicação plena do regime dos arts. 34 da Lei 9.249/95 e 83 da Lei 9.430/96 ao descaminho; passe por `jurisprudencia-stj-stf`.
3. **Ausência de prova da origem estrangeira / do tributo devido.** A materialidade exige demonstrar que a mercadoria é **estrangeira** e que havia **tributo devido iludido**. Sem laudo/auto de infração/quantificação do tributo, falha a materialidade.
4. **Erro de tipo / ausência de dolo.** O consumidor final ou o portador que desconhece a origem irregular pode não ter o dolo de iludir tributo. Atenção às **equiparadas do §1º**, que exigem contexto de **atividade comercial ou industrial**.
5. **Bis in idem com a pena de perdimento.** O **perdimento** administrativo da mercadoria é sanção autônoma; discutir a proporcionalidade da dupla resposta e o reflexo na dosimetria.
6. **Bagatela imprópria / desnecessidade da pena** em casos de mínima reprovabilidade após a apreensão e o perdimento — tese subsidiária.

### B) Contrabando (art. 334-A) — defesa mais estreita, porém possível

1. **A mercadoria NÃO era proibida → desclassificação para descaminho.** Se o objeto era, na verdade, **permitido** (sujeito apenas a tributo), a capitulação correta é o art. 334, com todo o arsenal do descaminho (insignificância, pagamento). **Primeira linha de ataque.**
2. **Insignificância excepcional.** Embora a regra seja a **não aplicação** da insignificância ao contrabando (o bem jurídico não é a arrecadação), há discussão pontual sobre bagatela em contrabando de **ínfima expressão** e sem lesão ao bem jurídico específico tutelado. **Tese minoritária e casuística — sustentar com cautela e conferir a jurisprudência atual via `jurisprudencia-stj-stf`.** Não prometer resultado.
3. **Atipicidade por ausência de proibição vigente / autorização existente.** Demonstrar que havia **licença/registro** do órgão de controle, ou que a proibição invocada não estava vigente ao tempo do fato.
4. **Ausência de dolo quanto à natureza proibida** do bem (erro sobre elemento normativo do tipo).
5. **Quantidade e destinação (uso próprio × mercancia).** Discutir se a quantidade/contexto revela consumo pessoal, afastando a habitualidade comercial e reduzindo a reprovabilidade.

### C) Teses processuais e de dosimetria comuns a ambos

- **Nulidades da fiscalização/apreensão** — cadeia de custódia da mercadoria apreendida, regularidade da abordagem, competência da autoridade (ver skill `cadeia-de-custodia` e `nulidades-processuais`, se disponíveis).
- **Competência** — em regra Justiça Federal; discutir eventual deslocamento ou incompetência.
- **Dosimetria** — atacar valoração negativa de circunstâncias já elementares; buscar o mínimo legal; **substituição por restritivas** (art. 44, CP) e **suspensão condicional** quando cabíveis; **ANPP** (art. 28-A, CPP) no descaminho, se preenchidos os requisitos (ver skill de ANPP, se houver).
- **Prescrição** — descrever o método (marco inicial, causas interruptivas) e, para o cálculo determinístico, apontar a **calculadora-prescricao** [calculadora existente] em vez de calcular à mão.

## Teses × contra-teses (mapa rápido)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Insignificância no descaminho | Tributo ≤ patamar do art. 20, Lei 10.522/02; atipicidade material | Reiteração/contumácia afasta a bagatela; habitualidade delitiva |
| Pagamento extingue punibilidade (descaminho) | Bem jurídico = arrecadação; analogia aos crimes tributários | Descaminho tem tipicidade própria; regime dos crimes tributários não se transporta integralmente |
| Cigarro/produto controlado = contrabando, sem insignificância | Bem jurídico ≠ arrecadação (controle sanitário/fiscal) | (Aqui a acusação concorda; a defesa tenta desclassificar p/ descaminho quando o produto era permitido) |
| Desclassificação de contrabando → descaminho | Mercadoria era permitida, só com tributo iludido | Natureza proibida do bem; sujeição a controle específico |
| Ausência de materialidade | Falta laudo/origem estrangeira/quantificação do tributo | Auto de infração e apreensão suprem a materialidade |

## Súmulas e precedentes (sob o Citation Gate)

**Dispositivos e patamares (citar com segurança, conferida a redação vigente):**
- **CP, arts. 334 e 334-A** (redações da Lei 13.008/2014).
- **Lei 10.522/2002, art. 20** — parâmetro da insignificância no descaminho (conferir **valor vigente**, atualizado por atos do Ministério da Fazenda).

**Orientações jurisprudenciais consolidadas (ENSINAR A TESE; confirmar número/atualidade via `jurisprudencia-stj-stf`):**
- STF e STJ, de forma reiterada, **admitem a insignificância no descaminho** dentro do patamar legal e **a afastam no contrabando** (bem jurídico distinto). **[NÃO VERIFICADO — confirmar os precedentes e o patamar atual antes de citar número/tema/informativo]**.
- STJ trata **cigarros de origem estrangeira** introduzidos irregularmente como **contrabando**, afastando a insignificância pela via tributária. **[NÃO VERIFICADO — confirmar acórdão/tema representativo antes de citar]**.
- Discussão sobre **reiteração** como fator que afasta a insignificância no descaminho — há oscilação e Tema repetitivo pertinente. **[NÃO VERIFICADO — buscar o Tema/EDcl aplicável via `jurisprudencia-stj-stf`]**.
- Repercussão do **pagamento do tributo** na punibilidade do descaminho. **[NÃO VERIFICADO — conferir a corrente vigente]**.

> **Regra do Citation Gate:** não escreva número de HC/REsp/RE, informativo ou tema sem confirmação. Prefira redigir "conforme entendimento consolidado do STJ/STF sobre a insignificância no descaminho (a conferir e citar via `jurisprudencia-stj-stf`)" a arriscar um acórdão inexistente. Jurisprudência inventada por IA gera sanção real.

## Estrutura da peça (resposta à acusação / memoriais / apelação)

1. **Endereçamento e qualificação** — Juízo Federal competente; autos.
2. **Síntese da imputação** — o que a denúncia capitula (334 ou 334-A) e sobre qual objeto material.
3. **Preliminares** — competência, nulidades da apreensão/fiscalização, inépcia, cadeia de custódia.
4. **Mérito — classificação do objeto** — sustentar, quando cabível, a **desclassificação** de contrabando para descaminho (ou a atipicidade).
5. **Teses de atipicidade** — insignificância (descaminho), ausência de materialidade/dolo, autorização existente (contrabando).
6. **Extinção da punibilidade** — pagamento/parcelamento do tributo (descaminho); prescrição (via **calculadora-prescricao**).
7. **Subsidiariamente — dosimetria** — mínimo legal, substituição (art. 44, CP), sursis, ANPP.
8. **Pedidos** — absolvição (art. 386, CPP), desclassificação, extinção da punibilidade ou, subsidiariamente, pena mínima e benefícios.

> **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua que a revisão cobra).

## Erros comuns / checklist da defesa

- [ ] **Objeto material classificado** (mercadoria permitida = descaminho × proibida = contrabando) **antes** de escolher a tese?
- [ ] Confirmado o **patamar vigente** da insignificância (art. 20, Lei 10.522/02) e sua atualização por atos infralegais?
- [ ] Insignificância pleiteada **só no descaminho** (e, no contrabando, apenas como tese excepcional e cautelosa)?
- [ ] Verificada a possibilidade de **desclassificação** de contrabando → descaminho quando o produto era permitido?
- [ ] Analisado o **pagamento/parcelamento** do tributo e seu reflexo na punibilidade (descaminho)?
- [ ] **Materialidade** checada (origem estrangeira, tributo devido quantificado, laudo/auto de infração)?
- [ ] **Cadeia de custódia** e regularidade da apreensão/fiscalização examinadas?
- [ ] **Cigarro/produto sob controle** tratado como contrabando (não insistir em insignificância tributária)?
- [ ] **Prescrição** calculada pela **calculadora-prescricao** (não à mão)?
- [ ] **ANPP / substituição / sursis** avaliados subsidiariamente?
- [ ] Todo **precedente/súmula/tema** passou por `jurisprudencia-stj-stf` (Citation Gate) antes de ir à peça?

**Anti-padrões (evitar):**
- Pedir insignificância em **contrabando** de cigarro/produto controlado como se fosse descaminho — regra é a não aplicação.
- Tratar contrabando e descaminho como sinônimos (foram **desmembrados** pela Lei 13.008/2014).
- Aferir a insignificância pela vida pregressa em vez do **valor do tributo do fato** (a reiteração é questão à parte, controvertida).
- Afirmar que o pagamento do tributo extingue a punibilidade **também no contrabando** (não extingue — bem jurídico diverso).
- Citar número de acórdão/informativo de memória, sem passar pelo Citation Gate.
- Calcular prescrição manualmente em vez de usar a **calculadora-prescricao**.

## Lembretes finais

- **Classificação do objeto primeiro, tese depois** — é o que mais se erra na prática.
- **Descaminho** = tributo de mercadoria **permitida** → insignificância + pagamento.
- **Contrabando** = mercadoria **proibida** → regra sem insignificância, sem extinção pelo pagamento.
- **Cigarro estrangeiro irregular = contrabando** (não force a via tributária).
- **Conferir vigência** dos arts. 334/334-A e do **patamar do art. 20 da Lei 10.522/02** antes de peticionar.
- **Cálculos deterministas** (prescrição/pena) → **calculadora-prescricao** / **calculadora-dosimetria** [calculadoras existentes], nunca à mão.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado** (Estatuto da OAB; Código de Ética; Provimento 205/2021). Não substitui a leitura integral dos autos nem o juízo profissional.
- **Polo:** skill de **DEFESA** (assistido/réu). O **roteador deve conferir o polo** da instituição em `company.md` — se a atuação for do **polo acusatório** (MP/assistente de acusação), adaptar as teses (o núcleo classificatório serve aos dois polos, mas a orientação argumentativa aqui é defensiva). Ética por polo: OAB/Prov. 205/2021 (advocacia); CNMP (MP); LC 80/94 (Defensoria).
- **Citation Gate:** nenhuma súmula, tema, informativo ou acórdão citado sem confirmação por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA.
