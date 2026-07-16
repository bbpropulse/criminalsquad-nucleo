---
name: tese-arrependimento-reparacao-patrimonial
description: >-
  Use ao articular as VÁLVULAS REPARATÓRIAS dos crimes patrimoniais sem violência: arrependimento
  posterior (CP 16 — causa de diminuição de 1/3 a 2/3), arrependimento eficaz e desistência
  voluntária (CP 15 — a 'ponte de ouro'), reparação como atenuante (CP 65, III, b) e como requisito
  de ANPP/sursis/transação, e a restituição no estelionato (Súmula 554/STF). Ensina a GRADUAR a
  fração do art. 16 conforme presteza e completude… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, tese, patrimonial, parte-geral]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-tese-arrependimento-reparacao-patrimonial"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["tese-arrependimento-reparacao-patrimonial", "tese arrependimento", "reparacao patrimonial"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Válvulas reparatórias nos crimes patrimoniais (CP, arts. 15 e 16; CP 65, III, "b"; Súmula 554/STF)

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

Esta skill orienta a **articulação das teses reparatórias** nos crimes patrimoniais **sem violência ou grave ameaça** — o furto, o estelionato, a apropriação indébita, a receptação, o dano, o estelionato eletrônico e afins. São institutos distintos que compartilham a mesma lógica de política criminal: **premiar quem repara o dano ou abandona o crime**. Dominá-los é converter a reparação — muitas vezes já feita pelo cliente por conta própria — em **redução de pena, atenuação, ou até em porta de saída negocial ou extintiva**.

> **Lição central:** não confunda os institutos — cada um tem **marco temporal** e **efeito** próprios. **Desistência voluntária e arrependimento eficaz (CP 15)** operam *antes da consumação* e excluem a tentativa (o agente responde só pelos atos já praticados). **Arrependimento posterior (CP 16)** opera *depois de consumado o crime, mas antes do recebimento da denúncia*, e é **causa de diminuição de pena de 1/3 a 2/3**. **Reparação após o recebimento** é apenas **atenuante genérica (CP 65, III, "b")**. Classifique o **momento** da reparação **antes** de escolher a tese — é o momento que define o instituto e o efeito.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 15 e 16 do CP e do art. 65, III, "b". Confira também o alcance atual da **Súmula 554/STF** (restituição no estelionato por cheque sem fundo) e qualquer tese repetitiva/repercussão geral sobre arrependimento posterior **antes** de fundamentar — passe pelo gate `verificacao-citacoes` e, para súmulas/temas/acórdãos, confira em `jurisprudencia-stj-stf`. Nunca cite número de HC/REsp de memória.

---

## Base legal

- **Art. 15, CP — Desistência voluntária e arrependimento eficaz.** "O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados." Exclui a **tentativa** (a "ponte de ouro" de Von Liszt).
- **Art. 16, CP — Arrependimento posterior.** "Nos crimes cometidos **sem violência ou grave ameaça à pessoa**, reparado o dano ou restituída a coisa, **até o recebimento da denúncia ou queixa**, por ato **voluntário** do agente, a pena será reduzida de **um a dois terços**." Causa **obrigatória** de diminuição (direito subjetivo, presentes os requisitos).
- **Art. 65, III, "b", CP — Atenuante genérica.** Ter o agente "procurado, por sua espontânea vontade e com eficiência, logo após o crime, evitar-lhe ou minorar-lhe as consequências, ou ter, antes do julgamento, reparado o dano." Aplica-se quando a reparação é **posterior ao recebimento** (e afasta o art. 16), incidindo na **2ª fase** da dosimetria.
- **Súmula 554/STF** — no crime de **estelionato por emissão de cheque sem fundos (CP 171, §2º, VI)**, o **pagamento do cheque antes do recebimento da denúncia obsta a ação penal** (extingue/impede a persecução). Cautela: a súmula é **específica** dessa figura — não se generaliza para todo estelionato.
- **Art. 34 da Lei 9.099/95** e correlatos — a reparação alimenta a **composição civil**, a **transação penal** e a **suspensão condicional do processo** nos crimes de menor/médio potencial ofensivo.
- **Art. 28-A do CPP (ANPP)** — a **reparação do dano** é condição do acordo de não persecução penal (salvo impossibilidade), reforçando o valor prático de ressarcir cedo.

---

## Roteiro de análise — QUAL válvula em QUAL momento

O eixo é o **momento da reparação** em relação a dois marcos: a **consumação** e o **recebimento da denúncia/queixa**.

```
LINHA DO TEMPO DA REPARAÇÃO

  execução  ─────► CONSUMAÇÃO ─────► RECEBIMENTO da denúncia ─────► julgamento
     │                  │                      │                        │
     │                  │                      │                        │
 (A) antes de           (B) depois de          (C) depois do            (D) reparação
 consumar: o agente     consumar, mas          recebimento:             tardia, até o
 desiste ou impede      antes do recebimento:  ATENUANTE                julgamento:
 o resultado           ARREPENDIMENTO          (CP 65, III, b)          ATENUANTE
 → CP 15               POSTERIOR (CP 16)        — 2ª fase               (CP 65, III, b)
 (exclui a tentativa)  — redução 1/3 a 2/3
```

**Passo a passo:**

1. **O crime se consumou?**
   - **Não** (o agente parou antes, ou impediu o resultado) → **art. 15** (desistência voluntária / arrependimento eficaz). Responde só pelos atos já praticados; **não há tentativa**.
   - **Sim** → vá ao passo 2.
2. **Houve violência ou grave ameaça à pessoa?**
   - **Sim** (roubo, extorsão, latrocínio…) → **art. 16 NÃO se aplica**. Resta a **atenuante** (CP 65, III, "b") e, no júri/instrução, a reparação como circunstância favorável. (Ressalva doutrinária: violência **culposa** ou contra a **coisa** não afasta o art. 16 — só a violência **dolosa contra a pessoa**.)
   - **Não** (furto, estelionato, apropriação, receptação, dano…) → vá ao passo 3.
3. **A reparação/restituição ocorreu ATÉ o recebimento da denúncia/queixa?**
   - **Sim**, por ato **voluntário** → **art. 16** — **redução de 1/3 a 2/3** (3ª fase da dosimetria).
   - **Não** (reparou depois do recebimento, mas antes do julgamento) → **atenuante** (CP 65, III, "b") — 2ª fase.
4. **É estelionato por cheque sem fundo (CP 171, §2º, VI)?** Se o cheque foi **pago antes do recebimento** → **Súmula 554/STF** (obsta a persecução) — tese mais forte que a mera redução.
5. **Cabe saída negocial/extintiva?** Reparação cedo abre/fortalece **ANPP** (CPP 28-A), **transação** e **sursis processual** (Lei 9.099/95) e **composição civil** no JECRIM. Avalie ANTES de aceitar apenas a redução de pena.

---

## Arrependimento posterior (CP 16) — os requisitos, um a um

Cinco requisitos **cumulativos**. A defesa demonstra cada um; a acusação ataca o elo mais fraco.

1. **Crime sem violência ou grave ameaça à pessoa.** Requisito de **admissibilidade**. Furto, estelionato, apropriação indébita, receptação, dano, peculato (controvérsia doutrinária), crimes tributários — cabem. Roubo e extorsão — **não**.
2. **Reparação do dano OU restituição da coisa.** Deve ser **integral** para a fração máxima; reparação **parcial** admite o benefício em **grau menor** (ver graduação). A restituição pode ser **direta** (devolver a coisa) ou por **equivalente** (depósito/pagamento).
3. **Voluntariedade.** Basta ser **voluntário** — não precisa ser **espontâneo**. Vale ainda que **sugerido por terceiro** (advogado, familiar) ou motivado por conselho, desde que **sem coação**. Distinção fina em relação à atenuante (que exige "espontânea vontade").
4. **Marco temporal: até o RECEBIMENTO da denúncia ou queixa.** Não é o **oferecimento**, é o **recebimento**. Reparação **depois** → cai na atenuante.
5. **Ato do próprio agente (ou a seu mando).** Reparação feita por terceiro **por conta própria**, alheia à vontade do réu, gera controvérsia; o seguro/indenização de terceiro que ressarce a vítima também é discutido — sustentar a comunicabilidade quando favorável.

> **Natureza objetiva e comunicação no concurso.** Predomina que o arrependimento posterior é **circunstância objetiva** e, **reparado o dano por um dos coautores, o benefício se comunica** aos demais (CP 30, a contrario, para elementares; aqui, por ser dado objetivo do fato). **Tese defensiva** útil quando um coautor repara e beneficia todos. **Confirme o entendimento atual** em `jurisprudencia-stj-stf`.

---

## GRADUAÇÃO da fração (1/3 a 2/3) — o coração desta skill

O art. 16 **não** diz que a redução é sempre 2/3. A fração é **graduável** e a defesa deve **pleitear a máxima (2/3)** com fundamento. Os dois vetores dominantes na doutrina e na prática:

| Vetor | Máxima redução (2/3) | Mínima redução (1/3) |
|-------|----------------------|----------------------|
| **Presteza (celeridade)** | Reparou **logo após** o crime, com rapidez | Reparou **às vésperas** do recebimento, no limite do prazo |
| **Completude** | Reparação **integral** do prejuízo | Reparação **parcial** / apenas do essencial |

**Regra prática de argumentação:**
- **Quanto mais cedo e mais completa** a reparação → **mais perto de 2/3**.
- **Quanto mais tardia e mais parcial** → **mais perto de 1/3**.
- A defesa **sustenta a presteza** ("reparou em X dias, antes mesmo do IP concluído") e a **integralidade** ("ressarciu 100% do prejuízo, corrigido") para ancorar a **fração máxima**.
- Cuidado: fração **menor não significa** que o benefício deixa de incidir — reparação parcial **ainda gera** arrependimento posterior, em grau menor (tese defensiva contra o "tudo ou nada" da acusação).

> **Método de cálculo (3ª fase da dosimetria).** O art. 16 é **causa de diminuição** e incide na **3ª fase** (após pena-base e agravantes/atenuantes), sobre a **pena provisória**. Não é cálculo autônomo desta skill: para a operação numérica completa (pena-base → atenuantes → causas de diminuição, ordem e limites), use a **`calculadora-dosimetria`** [conferir a existência/nome no acervo; se ausente: calculadora a implementar com testes]. Aqui se define **a fração**; lá se aplica **sobre a pena**.

---

## Desistência voluntária e arrependimento eficaz (CP 15) — a "ponte de ouro"

Institutos da **tentativa abandonada** — operam **antes da consumação**:

- **Desistência voluntária:** o agente, podendo prosseguir, **para** por vontade própria ("posso, mas não quero" — fórmula de Frank). Ex.: já rendida a vítima do furto, o agente decide não levar a coisa.
- **Arrependimento eficaz:** já **esgotados** os atos executórios, o agente **age para impedir o resultado**, e o resultado **não** se produz. Ex.: envenena a vítima e, arrependido, ministra o antídoto que a salva.

**Efeito (CP 15):** o agente **responde apenas pelos atos já praticados**, **não pela tentativa** do crime pretendido. É **causa de exclusão da tipicidade** da tentativa (não mera redução). Se os atos já praticados configuram outro crime autônomo, por este responde.

**Requisitos:** (i) **voluntariedade** (não precisa espontaneidade; basta não ser por causa externa que impeça); (ii) **eficácia** — no arrependimento eficaz, o resultado **efetivamente não ocorre** (se ocorrer apesar do esforço, resta só a atenuante). A **involuntariedade** (parou porque chegou a polícia, porque a caixa-forte não abriu) descaracteriza — aí é **tentativa** comum.

> **Distinção-chave para a peça:** CP 15 é **antes** da consumação e **exclui a tentativa**; CP 16 é **depois** da consumação e **reduz** a pena. Errar o instituto é erro grosseiro que a acusação explora.

---

## Reparação como ATENUANTE e como chave de saídas (quando o art. 16 não cabe)

Quando **falha o marco do art. 16** (reparou após o recebimento) ou **há violência/grave ameaça**, a reparação ainda rende:

- **Atenuante genérica (CP 65, III, "b"):** reparação do dano **antes do julgamento**. Incide na **2ª fase**. Exige **espontaneidade** e **eficiência**. **Não pode** levar a pena **abaixo do mínimo legal** (**Súmula 231/STJ** — conferir vigência).
- **ANPP (CPP 28-A):** reparação do dano à vítima é **condição** do acordo (salvo impossibilidade). Reparar cedo **viabiliza** a proposta.
- **Transação penal e sursis processual (Lei 9.099/95):** a reparação compõe as condições e demonstra a postura do réu.
- **Composição civil dos danos (JECRIM):** nos crimes de ação penal privada ou pública condicionada, o acordo homologado **acarreta renúncia à representação/queixa** — extinção da punibilidade. (Distinto desta skill; ver `composicao-civil-danos-jecrim`.)
- **Súmula 554/STF (estelionato por cheque sem fundo):** o pagamento antes do recebimento **obsta a persecução** — efeito extintivo, mais amplo que a redução. **Não** se estende ao estelionato em geral nem ao cheque falso/fraude diversa.

---

## Teses e contra-teses

| Tese (defesa) | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Incide o art. 16 (redução 1/3 a 2/3) | Crime sem violência + reparação voluntária até o recebimento | Reparação **após** o recebimento → só atenuante (CP 65, III, "b") |
| Fração **máxima (2/3)** | Reparação **integral** e **célere** (presteza) | Reparação **parcial/tardia** → fração mínima (1/3) |
| Reparação **parcial** ainda gera o benefício | Art. 16 não exige integralidade para incidir; a completude gradua a fração | Sem reparação **integral**, não há direito ao benefício (tese restritiva) |
| Voluntariedade basta (sugestão de advogado/família vale) | Art. 16 exige **voluntário**, não **espontâneo** | Faltou espontaneidade/iniciativa própria (confunde com a atenuante) |
| Benefício se **comunica** ao coautor | Natureza **objetiva**; reparado o dano, o fato se altera para todos | Circunstância **pessoal**, incomunicável |
| Restituição por **equivalente** (depósito) vale | "Reparado o dano OU restituída a coisa" — o CP admite as duas vias | Só a devolução **in natura** restitui a coisa |
| Súmula 554/STF obsta a ação (cheque s/ fundo) | Pagamento antes do recebimento no CP 171, §2º, VI | Súmula **não** alcança estelionato-fraude nem cheque falso |
| CP 15 exclui a tentativa (ponte de ouro) | Desistência/arrependimento antes da consumação | Interrupção **involuntária** (chegada da polícia etc.) → é tentativa |

---

## Súmulas e dispositivos sob o Citation Gate

**Cite com certeza (dispositivos de lei e súmula notória):**
- **CP, art. 15** (desistência voluntária e arrependimento eficaz).
- **CP, art. 16** (arrependimento posterior — redução de 1/3 a 2/3).
- **CP, art. 65, III, "b"** (atenuante da reparação/minoração das consequências).
- **CP, art. 14, II** e **parágrafo único** (tentativa — para contrastar com a exclusão do art. 15).
- **CPP, art. 28-A** (ANPP — reparação como condição).
- **Súmula 554/STF** (estelionato por cheque sem fundo — pagamento antes do recebimento).
- **Súmula 231/STJ** (atenuante não reduz aquém do mínimo legal) — **conferir vigência**, é debatida.

**NÃO cite de memória — passe por `jurisprudencia-stj-stf` antes de usar:** qualquer **número de HC/REsp/RE, informativo, tema repetitivo ou repercussão geral** sobre (i) natureza objetiva e comunicabilidade do art. 16 no concurso; (ii) art. 16 aplicado a crimes tributários/peculato; (iii) parâmetros jurisprudenciais de graduação da fração; (iv) alcance atual da Súmula 554. **[NÃO VERIFICADO]** enquanto não confirmado. Ensine a **tese e o dispositivo**; **não arrisque o número do acórdão**.

---

## Erros comuns / checklist

**Checklist da tese:**
- [ ] O **momento** da reparação foi mapeado na linha do tempo (antes/depois da consumação; antes/depois do recebimento)?
- [ ] O crime é **sem violência ou grave ameaça** (pré-requisito do art. 16)?
- [ ] A reparação foi **até o recebimento** da denúncia/queixa (não do oferecimento)?
- [ ] A **voluntariedade** está demonstrada (não exige espontaneidade)?
- [ ] Pleiteou-se a **fração máxima (2/3)** com fundamento em **presteza + completude**?
- [ ] Documentou-se a reparação (recibo, depósito, termo de restituição, comprovante corrigido)?
- [ ] Verificou-se se cabe **saída melhor** (Súmula 554; ANPP; sursis; composição civil) **antes** de aceitar só a redução?
- [ ] A **3ª fase** da dosimetria foi acionada corretamente (via `calculadora-dosimetria`)?
- [ ] Súmulas/precedentes conferidos em `jurisprudencia-stj-stf` e citações no gate `verificacao-citacoes`?

**Anti-padrões (evitar):**
- **Confundir CP 15 com CP 16** — um exclui a tentativa (antes de consumar); o outro reduz a pena (depois de consumar). Erro grosseiro.
- Contar o marco pelo **oferecimento** da denúncia em vez do **recebimento**.
- Tratar o art. 16 como redução **fixa de 2/3** — a fração é **graduável**; sem argumentar presteza/completude, o juízo tende ao piso (1/3).
- Aceitar o "tudo ou nada": afirmar que reparação **parcial** não gera benefício (gera, em grau menor).
- Exigir **espontaneidade** no art. 16 (só a **atenuante** a exige; o art. 16 contenta-se com voluntariedade).
- Invocar o art. 16 em **roubo/extorsão** (há violência/grave ameaça — não cabe; resta a atenuante).
- **Generalizar a Súmula 554** a todo estelionato (é específica do cheque sem fundo, CP 171, §2º, VI).
- Aplicar a **atenuante** (CP 65, III, "b") **abaixo do mínimo** legal (Súmula 231/STJ).
- Esquecer de **documentar** a reparação — sem prova (recibo/depósito/termo), a tese não se sustenta.
- Deixar de avaliar **ANPP/Súmula 554/composição** — pode haver saída **mais vantajosa** que a mera redução.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é **apoio à formulação da tese** e à dosimetria; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado(a)** (CED/OAB, art. 2º). Nada aqui substitui a análise do caso concreto, dos autos e da prova da reparação.
- **Polo:** skill de **DEFESA**. A reparação favorece o réu (redução/atenuação/saída negocial). Se o roteador identificar atuação do **polo acusatório**, esta skill **não é a adequada** — para fixação de quantum reparatório **contra** o réu, ver `assistente-reparacao-quantum-387` (art. 387, IV, CPP).
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `verificacao-citacoes`; números de acórdão/informativo/tema conferidos em `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** (há sanções por jurisprudência inventada por IA).
- **Distinção de escopo:** `composicao-civil-danos-jecrim` trata do **acordo homologado** no JECRIM (renúncia à representação); esta skill trata das **válvulas de redução/atenuação** (arts. 15, 16 e 65, III, "b") e do efeito extintivo da Súmula 554.

## Lembretes finais

- **Momento primeiro, instituto depois** — a linha do tempo (consumação e recebimento) define qual válvula usar.
- **CP 15 = antes de consumar = exclui a tentativa**; **CP 16 = depois de consumar, antes do recebimento = reduz 1/3 a 2/3**; **CP 65, III, "b" = depois do recebimento = atenua**.
- **Sem violência/grave ameaça** é pré-requisito do art. 16.
- **Fração graduável:** pleiteie **2/3** com **presteza + completude**; reparação parcial **ainda** vale (grau menor).
- **Voluntário ≠ espontâneo:** o art. 16 exige só o primeiro.
- **Documente a reparação** e cheque saídas melhores (**Súmula 554**, **ANPP**, **sursis**, **composição**) antes de aceitar só a redução.
- **Conferir vigência** dos arts. 15, 16 e 65, III, "b", e o alcance da Súmula 554 via `jurisprudencia-stj-stf` antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
