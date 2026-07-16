---
name: defesa-direcao-sem-habilitacao-309
description: >-
  Use para defender direção de veículo automotor sem habilitação, com CNH cassada ou de categoria
  diversa (art. 309 do CTB) — tese central da exigência de PERIGO CONCRETO de dano (sem risco
  efetivo à incolumidade, é mera infração administrativa: art. 162, I, do CTB, e Súmula 720 do STF),
  defesa contra o concurso com a embriaguez ao volante (art. 306) e distinção do falsear/omitir
  dados perante autoridade (art. 307). Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, transito, ctb]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-direcao-sem-habilitacao-309"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-direcao-sem-habilitacao-309", "defesa direcao", "direcao habilitacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa — Direção sem Habilitação com perigo de dano (art. 309 do CTB)

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

Esta skill orienta a **defesa técnica** na imputação do **art. 309 da Lei 9.503/97 (CTB)** — conduzir veículo automotor, em via pública, **sem a devida habilitação** (ou com Permissão/CNH **cassada** ou de **categoria diversa**), **gerando perigo de dano**. É um dos tipos de trânsito mais frequentes na primeira instância criminal e, ao mesmo tempo, um dos que mais rende **absolvição** quando a defesa domina o elemento normativo do tipo.

> **Lição central:** o art. 309 **não pune** o mero dirigir sem carteira. A elementar **"gerando perigo de dano"** é o coração do tipo: trata-se de **crime de perigo CONCRETO**, que exige demonstração de um **risco efetivo e individualizado** à incolumidade de pessoa determinada. **Ausente a prova do perigo concreto, a conduta é atípica no plano penal** e resta apenas a **infração administrativa** do art. 162, I, do CTB (Súmula 720 do STF). O primeiro movimento da defesa é sempre atacar essa elementar.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 309** e correlatos (arts. 162, 302, 303, 306, 307 e 291 a 301-A) do CTB — o Código foi alterado por diversas leis (entre elas as **Leis 12.760/2012, 13.281/2016, 13.546/2017 e 14.071/2020**, esta última que passou a exigir habilitação também para **ciclomotores**, com reflexo na tipicidade). Confira igualmente súmulas, temas repetitivos e eventual *overruling* via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nenhum precedente entra na peça sem passar pelo gate de `verificacao-citacoes`.

## Base legal

- **Art. 309 do CTB (Lei 9.503/97):** "Dirigir veículo automotor, em via pública, sem a devida Permissão para Dirigir ou Habilitação ou, ainda, se cassado o direito de dirigir, **gerando perigo de dano**: Penas — detenção, de seis meses a um ano, ou multa." (**pena máxima de 1 ano** — relevância para os institutos despenalizadores).
- **Art. 162, I, do CTB:** infração **administrativa** de dirigir sem habilitação (gravíssima, multa e apreensão) — é o "resto" quando **não há** perigo concreto.
- **Art. 291 do CTB:** aplica aos crimes de trânsito, no que couber, as normas gerais do CP e do CPP, **e a Lei 9.099/95** (Juizados Especiais Criminais) — porta de entrada da transação penal, suspensão condicional do processo e ANPP.
- **Súmula 720 do STF** (verificar teor atual): o art. 309 do CTB, que **reclama decorra do fato perigo de dano**, derrogou o art. 32 da LCP (contravenção de direção sem habilitação) **no que tange à direção sem habilitação em vias terrestres**.
- **Súmula 664 do STJ** (verificar teor e vigência via `jurisprudencia-stj-stf`): trata da relação **art. 306 x art. 309** — a defesa deve conferir o enunciado e o alcance antes de citar (ver seção de concurso).
- **Arts. 306 (embriaguez ao volante) e 307 (violar suspensão/proibição imposta / falsa identidade ao condutor)** do CTB — tipos vizinhos que a defesa precisa **distinguir** do 309.

## O elemento nuclear — perigo CONCRETO (a tese-mãe)

O art. 309 é **crime de perigo concreto**, não abstrato. Isso significa que **não basta** provar que o réu dirigia sem habilitação: a acusação precisa demonstrar, com prova idônea, que dessa direção **resultou um perigo efetivo a bem jurídico determinado** — uma pessoa concreta cuja incolumidade foi exposta a risco real.

**Distinção que decide o caso:**

| Situação | Enquadramento | Consequência |
|---|---|---|
| Dirigir sem CNH, **sem** manobra perigosa nem risco a alguém | Atípico no penal → **art. 162, I** (administrativo) | **Absolvição** / rejeição |
| Dirigir sem CNH **+ perigo concreto** provado (zigue-zague, quase colisão, atropelamento evitado, velocidade incompatível em local com pessoas) | **Art. 309** | Condenação possível |

**O que NÃO configura, por si só, o perigo concreto (teses de atipicidade):**
- Ser flagrado dirigindo sem habilitação em via deserta ou de baixo movimento, sem qualquer manobra de risco.
- A mera ausência de carteira, constatada em **blitz/fiscalização de rotina**, sem descrição de conduta perigosa.
- O boletim de ocorrência que apenas registra "conduzia sem CNH" sem narrar **fato concreto** de exposição a risco.
- Presumir o perigo a partir da inabilitação (isso seria transformar o tipo em perigo **abstrato** — vedado).

➡️ **Tese defensiva (a mais forte):** a denúncia/queixa e a prova **não descrevem nem comprovam** o perigo de dano concreto exigido pela elementar; logo, a conduta é **penalmente atípica**, remanescendo apenas a infração administrativa (art. 162, I, do CTB; Súmula 720 do STF). Pedido: **absolvição sumária / absolvição por atipicidade (art. 386, III, do CPP)** ou **rejeição da denúncia por falta de justa causa (art. 395, III, do CPP)** quando a inicial sequer descreve o perigo.

➡️ **Contra-tese (acusação):** o perigo concreto restou demonstrado pela dinâmica (ex.: manobras bruscas, condução em alta velocidade próximo a pedestres, colisão efetiva). A defesa responde exigindo **prova** desse risco individualizado — não presunção.

## Roteiro de análise e defesa (passo a passo)

1. **Isolar a elementar "perigo de dano".** Leia a denúncia procurando a **descrição fática** do risco concreto. Se ela só diz "dirigia sem habilitação", há **inépcia** / falta de justa causa: a inicial não descreve elementar do tipo.
2. **Confrontar a prova com a elementar.** Depoimentos dos agentes, BO, laudo, imagens: descrevem manobra perigosa, quase-acidente, pessoa exposta? **Se não**, sustentar atipicidade.
3. **Verificar a habilitação real.** CNH vencida **não** é o mesmo que **ausência** de habilitação (vencimento pode ser mera irregularidade administrativa, não a inabilitação do art. 309 — conferir na jurisprudência atual via `jurisprudencia-stj-stf`). Categoria diversa e cassação têm regimes próprios — checar o documento e a situação no RENACH/DETRAN.
4. **Testar o concurso com o art. 306 (embriaguez).** Se houver imputação conjunta, avaliar **consunção x concurso** (ver seção própria) — o 309 pode ser **absorvido** ou tratado como delito autônomo conforme a tese e o precedente aplicável.
5. **Distinguir do art. 307.** Confirmar que a conduta é dirigir sem habilitação (309) e **não** violar suspensão/proibição já imposta judicialmente ou fornecer dado falso (307) — a subsunção correta muda a pena e a estratégia.
6. **Rastrear despenalizadores (art. 291 + Lei 9.099/95).** Pena máxima de 1 ano ⇒ **infração de menor potencial ofensivo**: cabíveis **transação penal**, **suspensão condicional do processo** (se a pena mínima permitir e presentes os requisitos do art. 89 da Lei 9.099/95) e eventual **ANPP** (art. 28-A do CPP), a depender do caso e das condições pessoais.
7. **Dosimetria e substituição (se houver condenação).** Pena baixa, réu primário: pleitear **multa isolada** (o próprio tipo prevê pena alternativa "ou multa"), **substituição por restritiva de direitos** (art. 44 do CP) e **sursis** (art. 77 do CP). Descrever o método; para cálculo, apontar a `calculadora-dosimetria`.
8. **Prescrição.** Com pena máxima de 1 ano, o prazo prescricional é **curto** (conferir tabela do art. 109 do CP e marcos interruptivos) — sempre checar prescrição da pretensão punitiva, inclusive **retroativa/intercorrente** após eventual condenação. Descrever o método; para cálculo, apontar a `calculadora-prescricao`.

## Teses típicas de defesa (arsenal)

- **Atipicidade por ausência de perigo concreto** (tese-mãe): sem risco efetivo e individualizado, é fato administrativo (art. 162, I; Súmula 720 do STF). → art. 386, III, do CPP.
- **Inépcia da denúncia / falta de justa causa**: a inicial não descreve o perigo de dano (elementar do tipo). → arts. 395, I e III, e 41 do CPP.
- **Insuficiência probatória do perigo**: mesmo alegado, o risco não foi provado (in dubio pro reo). → art. 386, VII, do CPP.
- **CNH vencida ≠ inabilitação**: vencimento é irregularidade administrativa, não ausência de habilitação para fins do 309 (conferir jurisprudência atual).
- **Erro de subsunção**: fato que seria 307 (violar proibição/omitir dado) ou 162 (administrativo) foi capitulado como 309.
- **Consunção do 309 pelo delito-fim** quando aplicável (ver concurso com 306 / com lesão/homicídio culposo).
- **Nulidades da prova**: abordagem/blitz sem descrição idônea, cadeia de custódia da prova documental (RENACH, BO), ausência de contraditório sobre a situação da CNH — atacar via `impugnacao-prova-embriaguez` no que tange ao 306 associado e via análise de provas.
- **Despenalizadores não ofertados**: nulidade/prejuízo se o MP deixou de propor transação/ANPP cabível sem fundamentação.

## Concurso com o art. 306 (embriaguez) — a armadilha da consunção

Quando o réu é flagrado dirigindo **embriagado** (art. 306) **e** **sem habilitação** (art. 309), surge a questão: os crimes se somam (**concurso**) ou o 306 **absorve** o 309 (**consunção**)?

- **Súmula 664 do STJ** (conferir teor e vigência via `jurisprudencia-stj-stf` **antes de citar**): orienta o tratamento da relação entre esses tipos. A defesa **não deve arriscar** o enunciado de memória — confirmar o texto exato e o alcance, pois há oscilação histórica de entendimento entre consunção e concurso.
- **Tese defensiva (quando favorável):** sustentar a **consunção** — o desvalor da direção sem habilitação estaria absorvido pela conduta mais grave de dirigir embriagado (mesmo contexto fático, mesma exposição a perigo), evitando o *bis in idem* de dupla punição pela mesma dinâmica de risco.
- **Contra-tese (acusação):** os bens jurídicos e as condutas são **distintos** (a inabilitação não se confunde com a embriaguez), justificando o **concurso** — linha que a jurisprudência dominante tende a adotar (**confirmar o precedente e o teor da Súmula 664 do STJ antes de afirmar**).
- **Estratégia:** se a jurisprudência atual afastar a consunção, a defesa migra para **atacar a prova de cada tipo isoladamente** — a prova da embriaguez (etilômetro/exame, cadeia de custódia → `impugnacao-prova-embriaguez`) **e** a prova do perigo concreto do 309.

> ⚠️ Sob o **Citation Gate**: **não** afirme, de memória, se a Súmula 664 consagra concurso ou consunção. Ensine a **tese** e o **dispositivo**, e remeta a conferência do enunciado e dos julgados a `jurisprudencia-stj-stf`.

## Distinção dos tipos vizinhos (não confundir)

| Tipo | Conduta nuclear | Diferença-chave |
|---|---|---|
| **Art. 309** | Dirigir **sem habilitação/cassada/categoria diversa**, **gerando perigo de dano** | Exige **perigo concreto**; pune a **inabilitação** ao volante |
| **Art. 162, I** | Dirigir sem habilitação | **Infração administrativa** — sem crime quando falta o perigo concreto |
| **Art. 306** | Dirigir com **capacidade psicomotora alterada** por álcool/substância | Crime de perigo **abstrato**; foca na **embriaguez**, não na CNH |
| **Art. 307** | **Violar** suspensão/proibição de dirigir imposta; ou **fornecer dado falso** ao ser identificado | Pressupõe **penalidade/medida já imposta**; não é a mera falta de CNH |
| **Arts. 302/303** | Homicídio/lesão culposos na direção | Há **resultado** (morte/lesão); a direção sem CNH pode ser **causa de aumento** |

> **Cuidado com o aumento de pena:** nos crimes culposos de trânsito (arts. 302/303), a falta de habilitação figura como **causa de aumento** (conferir os §§ vigentes) — nesse cenário, o 309 tende a ser **absorvido** pelo delito culposo (consunção), e a defesa deve **evitar a dupla valoração** (impedir que a inabilitação seja usada para tipificar o 309 **e** ainda majorar o culposo — *bis in idem*).

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 720 do STF** — art. 309 do CTB derrogou o art. 32 da LCP quanto à direção sem habilitação em vias terrestres, **exigindo o perigo de dano** (conferir teor atual via `jurisprudencia-stj-stf`).
- **Súmula 664 do STJ** — relação art. 306 x art. 309 (concurso/consunção) — **[verificar teor e vigência]** antes de qualquer afirmação; conferir via `jurisprudencia-stj-stf`.
- **Súmula 575 do STJ** — constatação da embriaguez do art. 306 por outros meios de prova quando não realizado etilômetro (relevante se houver 306 associado) — **[verificar]**.
- Entendimento consolidado de que o art. 309 é **crime de perigo concreto** e de que a **ausência de descrição/prova do perigo** conduz à **atipicidade** — **[NÃO VERIFICADO quanto a números específicos de HC/REsp/Tema]**: **não cite número de acórdão, informativo ou tema repetitivo de memória**; confirme cada precedente em `jurisprudencia-stj-stf` e submeta ao gate `verificacao-citacoes`.

> **Regra de ouro do Citation Gate:** dispositivos de lei (arts. 309, 162, 291, 306, 307 do CTB; arts. 41, 386, 395 do CPP; arts. 44, 77, 109 do CP) e as **súmulas notórias** podem ser citados com o cuidado de conferir o **teor vigente**. Para **qualquer** número de HC/REsp/RE, informativo ou tema, marque **[NÃO VERIFICADO]** e confira. **Prefira ensinar a tese e o dispositivo a arriscar um acórdão.**

## Estrutura da peça de defesa (resposta à acusação / alegações finais)

Adapte conforme a fase (art. 396-A do CPP na resposta; art. 403/500 nas alegações finais). Esqueleto:

```
I — SÍNTESE DA IMPUTAÇÃO
   Capitulação (art. 309 do CTB) e o que a denúncia efetivamente descreve.

II — DA ATIPICIDADE POR AUSÊNCIA DE PERIGO CONCRETO (tese-mãe)
   - O art. 309 é crime de PERIGO CONCRETO (elementar "gerando perigo de dano").
   - A denúncia/prova NÃO descreve nem comprova risco efetivo e individualizado.
   - Sem perigo concreto: fato penalmente atípico → resta o art. 162, I (administrativo);
     Súmula 720 do STF.
   → Pedido: absolvição (art. 386, III, do CPP) OU rejeição por falta de justa causa
     (art. 395, III, do CPP).

III — SUBSIDIARIAMENTE, DA INSUFICIÊNCIA PROBATÓRIA
   - Ainda que se admita a alegação de perigo, ela não foi PROVADA (in dubio pro reo).
   → art. 386, VII, do CPP.

IV — DA CORRETA SUBSUNÇÃO / CONCURSO (se aplicável)
   - CNH vencida ≠ inabilitação; distinção do 307; consunção pelo 306 ou pelo culposo,
     conforme a tese e a jurisprudência conferida.

V — DOS DESPENALIZADORES (art. 291 do CTB + Lei 9.099/95)
   - Menor potencial ofensivo: transação penal / suspensão condicional do processo /
     ANPP (art. 28-A do CPP), se cabíveis e não ofertados.

VI — SUBSIDIARIAMENTE, DA DOSIMETRIA
   - Pena mínima; multa isolada (o tipo admite "ou multa"); substituição (art. 44 do CP);
     sursis (art. 77 do CP). Vedar dupla valoração da inabilitação.

VII — DA PRESCRIÇÃO (se cabível)
   - Pena máxima de 1 ano ⇒ prazo curto (art. 109 do CP); checar PPP retroativa/intercorrente.

VIII — DOS PEDIDOS
```

> Ao redigir, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).

## Cálculos — método e calculadoras

Esta skill **não calcula**: descreve o método e aponta as ferramentas determinísticas.
- **Dosimetria** (pena-base, atenuantes, causas, multa isolada, substituição): método das 3 fases do art. 68 do CP → usar `calculadora-dosimetria`.
- **Prescrição** (PPP em abstrato, retroativa e intercorrente; pena de 1 ano ⇒ prazo do art. 109 do CP): usar `calculadora-prescricao`.
- **Tempestividade** de recurso/resposta: usar `calculadora-tempestividade`.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar o art. 309 como crime de perigo **abstrato** e aceitar condenação pela mera ausência de CNH.
- Não atacar a **elementar do perigo concreto** logo na resposta à acusação (perder a tese-mãe).
- Confundir **CNH vencida** com **ausência de habilitação** (regimes diferentes).
- Capitular como 309 o que é 307 (violação de proibição já imposta) ou o que é só 162 (administrativo).
- Afirmar, de memória, que a Súmula 664 do STJ consagra concurso **ou** consunção — **conferir**.
- Aceitar dupla valoração da inabilitação (tipificar o 309 **e** majorar o culposo dos arts. 302/303).
- Ignorar os **despenalizadores** (transação, sursis processual, ANPP) num crime de menor potencial ofensivo.
- Esquecer a **prescrição** curta (pena máxima de 1 ano).
- Citar número de HC/REsp/Tema sem passar por `jurisprudencia-stj-stf` e `verificacao-citacoes`.

**Checklist:**
- [ ] A denúncia **descreve** o perigo de dano concreto (elementar do tipo)? Se não → inépcia/falta de justa causa.
- [ ] A **prova** demonstra risco efetivo e individualizado? Se não → atipicidade (Súmula 720 do STF) ou in dubio pro reo.
- [ ] Situação real da CNH conferida (vencida? cassada? categoria diversa? RENACH/DETRAN)?
- [ ] Há imputação conjunta do **306**? Avaliada consunção x concurso (Súmula 664 do STJ, teor conferido)?
- [ ] Descartada confusão com o **307** e com os culposos (302/303) — sem dupla valoração?
- [ ] **Despenalizadores** (transação/sursis processual/ANPP) avaliados e, se cabíveis, reivindicados?
- [ ] **Dosimetria** e **prescrição** conferidas via `calculadora-dosimetria` / `calculadora-prescricao`?
- [ ] Todo dispositivo com **teor vigente** conferido e todo precedente por `jurisprudencia-stj-stf` + `verificacao-citacoes`?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa, não substitui o juízo do advogado responsável nem a análise do caso concreto e das provas dos autos (CED da OAB, art. 2º; Provimento 205/2021 do CFOAB quanto à comunicação/publicidade).
- **Polo:** esta skill é de **DEFESA** (patrono do réu). Não se destina ao polo acusatório; se o roteador identificar atuação do MP/assistente de acusação, redirecionar para a skill acusatória correspondente e conferir o **polo** em `_memory/company.md`.
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente entra na peça sem conferência de teor e vigência (`jurisprudencia-stj-stf`) e passagem pelo gate `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.

## Lembretes finais

- **Perigo concreto é a tese-mãe** — atacá-la primeiro, sempre.
- **Sem perigo provado → art. 162, I (administrativo)**, não crime (Súmula 720 do STF).
- **CNH vencida ≠ inabilitação** para fins do 309.
- **Súmula 664 (306 x 309):** conferir teor antes de escolher consunção **ou** concurso.
- **Menor potencial ofensivo** → despenalizadores da Lei 9.099/95 e ANPP.
- **Pena de 1 ano** → multa isolada, substituição, sursis e **prescrição curta**.
- **Conferir vigência** dos dispositivos do CTB e as súmulas via `jurisprudencia-stj-stf` antes de peticionar.
