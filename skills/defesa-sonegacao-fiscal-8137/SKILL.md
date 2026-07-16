---
name: defesa-sonegacao-fiscal-8137
description: >-
  Use ao defender crimes contra a ordem tributária da Lei 8.137/90 (arts. 1º e 2º) — teses de crime
  material x formal (SV 24/STF e a constituição definitiva do crédito), ausência de dolo de sonegar
  x mero inadimplemento, atipicidade/limites do ICMS próprio declarado e não pago (RHC 163.334/SC) e
  a fronteira com a apropriação indébita. Gatilhos: sonegação fiscal, Lei 8.137, art. 1º e 2º da Lei
  8.137, supressão/redução de… Não use para conclusão definitiva sem autos suficientes, fonte atual
  ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, penal-economico, crimes-tributarios, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-sonegacao-fiscal-8137"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-sonegacao-fiscal-8137", "defesa sonegacao", "fiscal 8137"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes contra a Ordem Tributária (Lei 8.137/90, arts. 1º-2º)

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

Esta skill orienta a **defesa** nos crimes contra a ordem tributária dos **arts. 1º e 2º da Lei 8.137/90** — o núcleo dos crimes fiscais praticados por particular. Cobre a estratégia desde a **fase administrativa** (antes da ação penal) até a resposta à acusação, memoriais e recursos, com foco no **elemento subjetivo (dolo de sonegar)**, na **condição da constituição definitiva do crédito** e nas **válvulas de extinção da punibilidade pelo pagamento**.

> **Lição central:** o erro mais comum da acusação — e o primeiro alvo da defesa — é **confundir inadimplemento com sonegação**. Não recolher tributo declarado não é, por si, crime; o tipo do art. 1º exige **fraude** (omissão, falsidade, simulação) para **suprimir ou reduzir** tributo. **Separe sempre três planos**: (a) houve **fraude** (conduta típica)? (b) houve **dolo específico de sonegar**? (c) o **crédito tributário está definitivamente constituído** (SV 24)? Se qualquer um falha, a imputação cai.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Lei 8.137/90** e das leis de extinção da punibilidade (**Lei 9.249/95, art. 34**; **Lei 10.684/03, art. 9º**; **Lei 11.941/09; Lei 12.382/11, art. 6º**, que disciplina o parcelamento). O tratamento da **extinção pelo pagamento** e da **suspensão pela adesão a parcelamento** mudou ao longo do tempo — aplique a lei mais benéfica ao fato (CF, art. 5º, XL). **Toda súmula, tese de repercussão geral, tema repetitivo ou acórdão (SV 24, RHC 163.334, informativos) passa OBRIGATORIAMENTE pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de ir para a peça.** Na dúvida sobre um número, **ensine a tese e cite o dispositivo** — não arrisque o acórdão.

## Base legal

- **Lei 8.137/90, art. 1º** — crime **material**: suprimir ou reduzir tributo mediante **conduta fraudulenta** (incisos I a V: omitir informação/prestar declaração falsa; fraudar fiscalização; falsificar/alterar nota ou documento; elaborar/fornecer documento falso; negar/deixar de fornecer nota quando obrigatório). Pena: reclusão, 2 a 5 anos, e multa.
- **Lei 8.137/90, art. 2º** — crimes **formais** (de mera conduta), pena de detenção, 6 meses a 2 anos, e multa. Destaque para o **art. 2º, II** — deixar de recolher, no prazo legal, valor de tributo **descontado ou cobrado de terceiro** que deveria recolher aos cofres públicos (é a figura em que se discute o ICMS próprio declarado e não pago).
- **Lei 8.137/90, art. 11** — concurso de agentes; **art. 12** — causas de aumento (grave dano à coletividade; funcionário público; declaração ao consumidor).
- **CP, art. 168-A** — apropriação indébita **previdenciária** (fronteira: contribuição do empregado retida e não repassada ao INSS) — objeto de skill própria; aqui só a distinção.
- **Extinção/suspensão da punibilidade:** **Lei 10.684/03, art. 9º** (o **pagamento integral a qualquer tempo** extingue a punibilidade; a **adesão a parcelamento suspende** a pretensão punitiva e o prazo prescricional); **Lei 9.249/95, art. 34** (pagamento antes do recebimento da denúncia); **Lei 12.382/11, art. 6º** (parcelamento e seus efeitos). Confira a lei vigente/mais benéfica via `jurisprudencia-stj-stf`.
- **CPP, art. 41 e art. 395** — a denúncia deve descrever a **individualização da conduta** de cada sócio/administrador (vedada a **responsabilidade penal objetiva** pela mera condição de sócio).

## As três chaves da defesa (mapa mental)

Antes de escrever qualquer peça, responda:

```
1) CONSTITUIÇÃO DEFINITIVA DO CRÉDITO (SV 24)
   ├── Há lançamento definitivo (encerramento do processo administrativo-fiscal)?
   │     ├── NÃO → crime material NÃO se consumou → falta condição de
   │     │         procedibilidade/tipicidade → trancamento (HC) / rejeição /
   │     │         suspensão até o exaurimento administrativo.
   │     └── SIM → segue à chave 2.
2) TIPICIDADE — houve FRAUDE (art. 1º) ou apenas não pagamento?
   ├── Mero inadimplemento de tributo declarado → atipicidade quanto ao art. 1º.
   ├── Sem fraude, mas valor "cobrado de terceiro" não recolhido → discutir art. 2º, II
   │     (aqui entram o RHC 163.334 e a distinção contumácia/dolo de apropriação).
   └── Há omissão/falsidade/simulação documentada? → segue à chave 3.
3) DOLO ESPECÍFICO — houve intenção de SONEGAR (fraudar), e não erro/divergência?
   ├── Interpretação divergente do fisco, erro de proibição, dúvida de fato →
   │     afasta o dolo → absolvição (CPP, art. 386, III/VII).
   └── Prova do animus de fraudar? → mérito; então buscar as válvulas do pagamento.
```

## SV 24/STF — a condição objetiva (crime material do art. 1º, I-IV)

**Súmula Vinculante 24:** *"Não se tipifica crime material contra a ordem tributária, previsto no art. 1º, incisos I a IV, da Lei 8.137/90, antes do lançamento definitivo do tributo."*

- **Efeito prático:** enquanto pende **impugnação administrativa** (recurso ao CARF, à junta/conselho estadual etc.), o crime material **não se consumou**. Denúncia oferecida antes do lançamento definitivo é **prematura** → inépcia/rejeição ou **trancamento por HC**.
- **Reflexo na prescrição:** o **termo inicial** da prescrição é a **constituição definitiva do crédito** (não a data da conduta) — [NÃO VERIFICADO: conferir a tese/precedente de contagem via `jurisprudencia-stj-stf` antes de citar número].
- **Limites da SV 24:** ela alcança o **art. 1º, I a IV** (material). **Não** condiciona os crimes **formais** do art. 2º nem, em regra, o **art. 1º, V** — verificar o enquadramento antes de invocar.
- **Tese defensiva:** requerer o **sobrestamento da ação penal** (ou o trancamento) até o exaurimento da discussão administrativa que possa **desconstituir ou reduzir** o crédito, pois o resultado administrativo repercute diretamente na tipicidade/materialidade.

## RHC 163.334/SC — o ICMS próprio declarado e não recolhido (art. 2º, II)

Tema sensível e de leitura restritiva obrigatória.

- **O que o STF decidiu (RHC 163.334/SC, Tema 1.166 da repercussão geral):** *o contribuinte que, de forma **contumaz** e com **dolo de apropriação**, deixa de recolher o **ICMS cobrado do adquirente** (destacado na nota e declarado) pode responder pelo art. 2º, II, da Lei 8.137/90.* **Confirme a redação exata da tese, o número e o informativo via `jurisprudencia-stj-stf` antes de citar** — a leitura equivocada desse precedente é a maior fonte de erro na área.
- **Leitura DEFENSIVA (o precedente é de dupla via):** a criminalização é **excepcional** e exige **dois requisitos cumulativos** que a defesa deve cobrar:
  1. **Contumácia** — inadimplemento **reiterado e estruturado como modelo de negócio**, não o atraso eventual/pontual do contribuinte que passa por dificuldade de caixa;
  2. **Dolo de apropriação** — intenção de se **apropriar** do valor cobrado do consumidor, e não mero descumprimento de obrigação tributária.
- **Teses da defesa:**
  - **Ausência de contumácia:** débito isolado, esporádico, decorrente de crise financeira comprovada → **atipicidade** (falta o elemento da habitualidade delitiva exigido pelo precedente).
  - **Ausência de dolo de apropriação:** valores **integralmente declarados** ao fisco (transparência), com tentativa de parcelamento/negociação → não há apropriação, há dívida tributária.
  - **ICMS próprio ≠ ICMS-ST:** distinguir o **ICMS operação própria** do **ICMS-substituição tributária**; a moldura do precedente e a natureza do "valor cobrado de terceiro" mudam conforme a hipótese — não generalizar.
  - **Distinção do art. 1º:** aqui **não há fraude**; o valor foi **declarado**. Logo, jamais art. 1º (material fraudulento) — quando muito, o debate fica no art. 2º, II, sob os filtros acima.

## Ausência de dolo de sonegar × mero inadimplemento (o coração do mérito)

O tipo do art. 1º é **doloso** e exige **fraude**; não há forma culposa. A defesa constrói a **atipicidade subjetiva** demonstrando que faltou a intenção de enganar o fisco.

**Teses de afastamento do dolo:**
- **Interpretação divergente da legislação tributária:** o contribuinte adotou tese jurídica defensável sobre base de cálculo, alíquota, creditamento, isenção → **erro de proibição** (CP, art. 21) ou ausência de dolo. Dúvida razoável **não** é fraude.
- **Erro de fato / erro do contador:** falha escritural, lançamento equivocado por terceiro (contador, sistema), sem participação/ciência do administrador → rompe o nexo subjetivo.
- **Ausência de individualização:** denúncia que imputa o crime pela **mera condição de sócio**, sem descrever o **ato concreto** de gestão de cada acusado, é **inepta** (CPP, art. 41; vedação à responsabilidade penal objetiva) → rejeição/trancamento.
- **Transparência incompatível com fraude:** valores **declarados** ao fisco (GIA, DCTF, SPED) revelam a intenção oposta à de ocultar — quem declara não sonega mediante fraude.
- **Ausência de resultado (art. 1º):** sendo crime **material**, sem **efetiva supressão/redução** do tributo (ex.: crédito depois cancelado, ou tributo não devido) não há consumação.

**Contraponto a antecipar (acusação):** habitualidade, uso de "notas frias"/laranjas, escrituração paralela ("caixa 2"), documentos ideologicamente falsos, movimentação incompatível — indícios de dolo que a defesa deve neutralizar com prova documental e perícia contábil.

## Extinção e suspensão da punibilidade pelo pagamento (a válvula de escape)

Frequentemente a defesa mais eficaz é **econômica**, não processual.

- **Pagamento integral a qualquer tempo → extingue a punibilidade** (**Lei 10.684/03, art. 9º, §2º**). Predomina o entendimento de que o pagamento integral extingue a punibilidade **mesmo após o recebimento da denúncia ou a sentença** — [confirmar o alcance atual (inclusive após trânsito em julgado) via `jurisprudencia-stj-stf`; há oscilação e legislação superveniente].
- **Adesão a parcelamento → suspende** a pretensão punitiva e o **prazo prescricional** enquanto o parcelamento estiver sendo cumprido (**Lei 10.684/03, art. 9º; Lei 12.382/11, art. 6º**) — atenção ao **momento** da adesão exigido pela lei vigente à época do fato.
- **Estratégia:** quantificar o débito, avaliar viabilidade de pagamento/parcelamento e, se possível, **extinguir a punibilidade** antes de discutir mérito. Sempre articular com a skill de **extinção da punibilidade pelo pagamento tributário** e conferir a lei aplicável ao fato.
- **Princípio da insignificância (tributos federais):** para débitos de pequeno valor, discute-se a **atipicidade material** com base no patamar de ajuizamento de execução fiscal federal — [o valor-limite e a aplicabilidade variam; conferir o parâmetro vigente e a jurisprudência via `jurisprudencia-stj-stf`, sem fixar cifra de memória].

## Teses de defesa × contra-teses da acusação

| Tese da defesa | Fundamento | Contra-tese típica (acusação) |
|---|---|---|
| Crédito não constituído definitivamente | SV 24/STF | Lançamento já definitivo / crime formal do art. 2º não exige SV 24 |
| Mero inadimplemento, sem fraude → atipicidade (art. 1º) | Tipo exige conduta fraudulenta | Há "caixa 2"/nota fria → fraude configurada |
| Ausência de dolo (interpretação divergente/erro) | CP, arts. 18, 21; tipo doloso | Habitualidade e ocultação revelam dolo |
| ICMS próprio declarado: falta contumácia/dolo de apropriação | RHC 163.334 (leitura restritiva) | Inadimplemento reiterado = contumácia; valor cobrado do consumidor |
| Denúncia genérica contra sócio → inépcia | CPP, art. 41; vedação à resp. objetiva | Poder de gestão presume domínio do fato |
| Pagamento integral → extinção da punibilidade | Lei 10.684/03, art. 9º | Discutir momento/alcance conforme lei do fato |
| Insignificância (débito federal de pequeno valor) | Atipicidade material | Reiteração afasta a insignificância |
| Prescrição (termo inicial na constituição definitiva) | Contagem a partir do lançamento definitivo | Marco interruptivo pelo recebimento da denúncia |

## Súmulas e precedentes (todos sob o Citation Gate)

Cite dispositivos de lei com segurança; **para qualquer número de HC/RHC/REsp/RE, informativo ou tema, confirme via `jurisprudencia-stj-stf`.**

- **Súmula Vinculante 24/STF** — não há crime material do art. 1º, I-IV, antes do lançamento definitivo. (Notória; ainda assim confirme redação/alcance.)
- **RHC 163.334/SC — Tema 1.166/STF** — ICMS próprio declarado e não recolhido, com contumácia e dolo de apropriação, pode configurar o art. 2º, II. [confirmar tese exata e número via Citation Gate].
- **Súmula 436/STJ** — a entrega de declaração pelo contribuinte **constitui o crédito tributário** (dispensa outra providência do fisco) — relevante para o marco da constituição/prescrição. [conferir aplicabilidade ao caso penal via Citation Gate].
- Precedentes sobre **extinção da punibilidade pelo pagamento a qualquer tempo** e sobre **denúncia genérica em crimes societários**: **não citar número de memória** — recuperar via `jurisprudencia-stj-stf`.

> **Regra de ouro:** entre citar um acórdão incerto e ensinar a tese com o dispositivo, **escolha o dispositivo**. Jurisprudência inventada gera sanção real e destrói a credibilidade da peça.

## Estrutura da peça (resposta à acusação / HC de trancamento)

1. **Endereçamento e qualificação** — juízo criminal competente (Vara Federal se tributo federal; Estadual se ICMS/estadual) e do acusado.
2. **Síntese da imputação** — o que a denúncia narra e sob qual inciso.
3. **Preliminares:**
   - Ausência de **constituição definitiva do crédito** (SV 24) → suspensão/trancamento/rejeição;
   - **Inépcia da denúncia** por falta de individualização da conduta (CPP, arts. 41 e 395);
   - **Extinção da punibilidade** por pagamento (se já ocorrido) — prejudicial de mérito.
4. **Mérito:**
   - **Atipicidade objetiva** — inexistência de fraude / mero inadimplemento;
   - **Atipicidade subjetiva** — ausência de dolo de sonegar (interpretação divergente/erro);
   - **Filtro do RHC 163.334** — se art. 2º, II: ausência de contumácia e/ou de dolo de apropriação;
   - **Insignificância** (se débito federal de pequeno valor).
5. **Prova** — requerer **perícia contábil**, juntada do PAF (processo administrativo-fiscal), declarações entregues (SPED/DCTF/GIA), comprovantes de pagamento/parcelamento.
6. **Pedidos** — absolvição sumária (CPP, art. 397) / rejeição / trancamento / suspensão até o exaurimento administrativo; subsidiariamente, produção de provas.

## Erros comuns / checklist da defesa

- [ ] **Constituição definitiva do crédito** conferida (SV 24) — a ação penal não é prematura?
- [ ] Enquadramento correto: **art. 1º (material, com fraude)** × **art. 2º (formal)** — a SV 24 só alcança o material (I-IV)?
- [ ] Se **ICMS declarado e não pago**: testados os **dois** requisitos do RHC 163.334 (**contumácia** e **dolo de apropriação**)? Distinguido ICMS próprio × ICMS-ST?
- [ ] **Fraude** efetivamente descrita, ou a denúncia confunde **inadimplemento** com sonegação?
- [ ] **Dolo específico** de sonegar demonstrado, ou há **interpretação divergente/erro** que o afasta?
- [ ] Denúncia **individualiza a conduta** de cada sócio/administrador (CPP, art. 41) — sem responsabilidade objetiva?
- [ ] Explorada a **extinção pela via do pagamento** (Lei 10.684/03) e a **suspensão por parcelamento** (lei vigente ao fato)?
- [ ] **Prescrição** analisada com o termo inicial correto (constituição definitiva do crédito)?
- [ ] **Insignificância** avaliada nos débitos federais de pequeno valor (parâmetro vigente conferido)?
- [ ] Requerida **perícia contábil** e juntado o **PAF** integral?
- [ ] **Toda** súmula/tese/acórdão passou pelo **Citation Gate** (`jurisprudencia-stj-stf`)?

**Anti-padrões (evitar):**
- Tratar **todo** não pagamento de ICMS como crime — o RHC 163.334 é **exceção** com dois filtros, não regra.
- Invocar SV 24 para crime **formal** do art. 2º (ela não condiciona esses tipos).
- Aceitar denúncia genérica contra sócio sem exigir a **individualização** da conduta.
- Discutir mérito **antes** de esgotar a chance de **extinção pelo pagamento**.
- Confundir o crime tributário (Lei 8.137) com a **apropriação indébita previdenciária** (CP, art. 168-A) — tipos, bens jurídicos e defesas distintos.
- Citar RHC 163.334, SV 24 ou qualquer informativo **de memória**, sem passar pelo Citation Gate.

## Skills relacionadas

- `extincao-punibilidade-pagamento-tributario` — a válvula do pagamento/parcelamento em detalhe.
- `apropriacao-indebita-previdenciaria` — CP, art. 168-A (fronteira: contribuição do empregado retida).
- `calculadora-prescricao` — para o cômputo do prazo a partir da constituição definitiva do crédito **[calculadora determinística; usar a existente, não calcular à mão na peça]**.
- `jurisprudencia-stj-stf` — **Citation Gate** obrigatório para toda súmula/tese/acórdão.
- `redacao-persuasiva-criminal` — padrão de redação (teoria do caso, subsunção, coesão) exigido na revisão.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação técnica; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado** subscritor (EAOAB; CED). Nada aqui substitui a análise do **PAF concreto**, dos autos e da lei vigente à data do fato.
- **Polo:** skill de **DEFESA** (particular/contribuinte). O `polo_acusacao` da matéria é **false** — o **roteador deve conferir o polo** do escritório em `company.md` antes de aplicá-la; para atuação do **MP/assistente de acusação**, use a skill acusatória correspondente, sob a ética do CNMP.
- **Ética por polo:** advocacia — OAB + **Provimento 205/2021** na comunicação/publicidade; Ministério Público — CNMP; Defensoria — LC 80/94. Conflito de interesses (art. 17, EAOAB) checado na triagem.
- **Citation Gate inegociável:** dispositivos de lei e súmulas notórias (SV 24) podem ser citados com certeza; **qualquer** número de acórdão, informativo ou tema (RHC 163.334, Tema 1.166 etc.) só entra na peça após conferência em `jurisprudencia-stj-stf`. Na dúvida, **ensine a tese e cite o dispositivo** — omitir vence inventar.
