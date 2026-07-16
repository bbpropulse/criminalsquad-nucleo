---
name: defesa-lesao-corporal
description: >-
  Use ao defender (ou, no polo acusatório, sustentar) lesão corporal em todas as figuras do art. 129
  do CP — leve, grave (§1º), gravíssima (§2º), seguida de morte (§3º), privilegiada (§4º), culposa
  (§6º), violência doméstica (§§9º-13) e majorantes. Teses: atipicidade, desclassificação entre
  figuras ou para vias de fato (LCP art. 21), legítima defesa, consentimento/lesão desportiva,
  ausência de nexo com o resultado agravador… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-lesao-corporal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-lesao-corporal", "defesa lesao", "lesao corporal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Lesão Corporal (CP, art. 129 e figuras)

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

Esta skill orienta a **atuação em crimes de lesão corporal (art. 129 do CP)** — o tipo-base dos crimes contra a integridade física e um dos mais frequentes na prática forense. O foco majoritário é a **defesa** por figura penal (teses de atipicidade, desclassificação, justificantes e ataque à prova da extensão da lesão), mas a skill também serve ao **polo acusatório** (ver nota abaixo).

> **⚠️ Nota de polo (o roteador deve conferir):** esta skill tem `polo_acusacao = true`. O núcleo é **defensivo**, mas parte do conteúdo (subsunção da figura correta, prova do resultado agravador, ação penal pública) serve ao **Ministério Público / assistente de acusação**. **Antes de gerar peça, o roteador confere o polo da instituição** em `_criminalsquad/_memory/company.md`: se for MP/assistente, inverta a lógica das teses (o que aqui é "tese defensiva" vira "ponto a refutar"); se for advocacia/Defensoria, mantenha o eixo defensivo. Ética por polo: OAB + Prov. 205/2021 (advocacia); CNMP (MP); LC 80/94 (Defensoria).

> **Lição central:** em lesão corporal, **quem define o crime é o laudo, não a narrativa**. A figura (leve/grave/gravíssima/seguida de morte) depende do **resultado** provado por perícia. A defesa ataca **primeiro a extensão** (desclassificar para figura menos grave ou para vias de fato) e o **nexo causal** com o resultado agravador — muitas vezes é mais eficaz do que negar toda a conduta.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 129 do CP — os §§ da **violência doméstica** foram inseridos/alterados por sucessivas leis (Lei 11.340/2006 — Maria da Penha; Lei 13.984/2020; entre outras) e há debate recente sobre lesão contra a mulher por razões da condição de sexo feminino. Confira também a **natureza da ação penal na lesão leve/culposa** (Lei 9.099/95, art. 88, e a distinção da lesão em violência doméstica) e toda súmula/tese via a skill `jurisprudencia-stj-stf` antes de fundamentar. **Nenhum número de acórdão, informativo ou tema entra na peça sem passar pelo gate de citações.**

---

## Base legal

- **Art. 129, *caput*, CP** — lesão corporal (figura leve/simples): "ofender a integridade corporal ou a saúde de outrem".
- **Art. 129, §1º, CP** — lesão **grave** (incapacidade > 30 dias; perigo de vida; debilidade permanente de membro/sentido/função; aceleração de parto).
- **Art. 129, §2º, CP** — lesão **gravíssima** (incapacidade permanente para o trabalho; enfermidade incurável; perda/inutilização de membro/sentido/função; deformidade permanente; aborto).
- **Art. 129, §3º, CP** — lesão corporal **seguida de morte** (resultado morte não querido; crime preterdoloso — ver distinção com homicídio).
- **Art. 129, §4º, CP** — **privilégio** (redução de pena): relevante valor social/moral ou domínio de violenta emoção logo após injusta provocação da vítima.
- **Art. 129, §5º, CP** — substituição da pena / perdão judicial na lesão leve recíproca ou de escassa importância.
- **Art. 129, §6º, CP** — lesão **culposa**.
- **Art. 129, §§7º e 8º, CP** — majorantes da lesão culposa (remissão ao art. 121, §§4º e 5º).
- **Art. 129, §§9º a 13, CP** — lesão em **contexto de violência doméstica e familiar** (§9º), causas de aumento (§§10-11), e a figura contra a mulher por razões da condição de sexo feminino (§13 — **conferir a redação e a vigência**).
- **Art. 21 da LCP (Dec.-lei 3.688/41)** — **vias de fato** (contravenção): agressão sem lesão à integridade/saúde — alvo típico da desclassificação.
- **Art. 88 da Lei 9.099/95** — lesão **leve** e lesão **culposa** são de **ação penal pública condicionada à representação** (fora do contexto de violência doméstica).

---

## Roteiro por figura penal — subsunção e teses

### 1. Lesão leve/simples (art. 129, *caput*)
- **Elemento-chave:** qualquer ofensa à integridade corporal/saúde que **não** se enquadre nos §§1º-3º. Equimoses, escoriações, cortes que curam em ≤ 30 dias.
- **Teses defensivas típicas:**
  - **Desclassificação para vias de fato (LCP, art. 21):** se não houve efetivo dano à integridade/saúde (empurrão, tapa sem sequela, puxão) — a agressão existiu, mas **sem lesão**. Ataque o laudo que não demonstra lesão real.
  - **Atipicidade por ausência de lesão comprovada:** sem laudo de exame de corpo de delito (direto ou indireto — art. 158 e 167 CPP), a materialidade da lesão fica frágil.
  - **Consentimento do ofendido:** em lesões leves e disponíveis, o consentimento válido pode excluir a tipicidade/ilicitude (bem jurídico disponível dentro de limites).
  - **Lesão desportiva:** dentro das regras do esporte, incide o risco permitido / consentimento — atipicidade.
- **Ação penal:** **condicionada à representação** (Lei 9.099/95, art. 88) — **verifique a tempestividade e a existência da representação**; sua ausência/decadência (6 meses, art. 38 CPP) extingue a punibilidade. **[Exceção: violência doméstica — ver item 5.]**

### 2. Lesão grave (art. 129, §1º)
- **Subsunção pelo laudo:** o §1º exige **um dos resultados** taxativos:
  - **I** — incapacidade para ocupações habituais por **> 30 dias** (aferida por **exame complementar** — art. 168, §2º, CPP; sua ausência é ponto de ataque).
  - **II** — **perigo de vida** (prognóstico concreto, não abstrato; exige laudo técnico afirmando o risco real à vida).
  - **III** — **debilidade permanente** de membro, sentido ou função (redução — não perda — funcional duradoura).
  - **IV** — **aceleração de parto**.
- **Teses defensivas:**
  - **Desclassificação para leve:** atacar a prova do resultado grave. Ex.: laudo que não realizou o **exame complementar** dos 30 dias (art. 168, §2º, CPP) não sustenta o inciso I; "perigo de vida" afirmado genericamente sem base técnica não sustenta o inciso II.
  - **Ausência de nexo** entre a conduta e o resultado grave (causa superveniente, tratamento inadequado, comorbidade).
  - **Preterdolo / ausência de dolo quanto ao resultado grave:** o resultado grave, se não abrangido pelo dolo, é imputado a **título de culpa** — o que afeta a subsunção e a pena.

### 3. Lesão gravíssima (art. 129, §2º)
- **Resultados taxativos:** incapacidade **permanente** para o trabalho (I); enfermidade **incurável** (II); **perda ou inutilização** de membro, sentido ou função (III — note: **perda**, não mera debilidade); **deformidade permanente** (IV); **aborto** (V).
- **Teses defensivas:**
  - **Deformidade permanente (IV):** exige dano estético **duradouro, visível e capaz de causar impressão vexatória**. Cicatriz pequena, encoberta ou corrigível por cirurgia simples pode **não** configurar — desclassificar para grave ou leve. **Ponto sensível e casuístico: confira o estado atual da jurisprudência via `jurisprudencia-stj-stf`.**
  - **Perda × debilidade (III × §1º, III):** se houve **redução** funcional e não **perda/inutilização**, a figura correta é a **grave** (§1º, III), não a gravíssima — desclassificação.
  - **Aborto (V):** exige prova do estado de gravidez e do nexo; sem isso, não incide.
  - **"Incurável" (II):** exige prognóstico técnico de incurabilidade **à luz da medicina atual** — tratamento disponível afasta.

### 4. Lesão corporal seguida de morte (art. 129, §3º) — PRETERDOLO
- **Estrutura:** **dolo na lesão + culpa no resultado morte** (não quis nem assumiu o risco de matar). É crime **preterdoloso**.
- **A distinção decisiva (homicídio × lesão seguida de morte):** o divisor é o **elemento subjetivo** — havia ***animus necandi*** (dolo de matar, direto ou eventual) ou apenas dolo de lesionar? Se o agente **assumiu o risco** de matar, é **homicídio** (doloso — competência do **júri**); se não, é lesão seguida de morte (§3º — **juiz singular**).
  - **Tese defensiva (afastar o dolo eventual de homicídio):** meio empregado, região atingida, intensidade, contexto e ausência de reiteração indicam dolo **apenas** de lesionar → §3º, e **não** homicídio. **Consequência processual relevante:** desloca a competência do **júri** para o **juiz singular** (e afasta o rito e os riscos do plenário). Ver skill `juri-desclassificacao` / `selecao-tese-por-tipo-penal`.
- **Nexo com o resultado morte:** atacar causa superveniente relativamente independente (art. 13, §1º, CP), erro médico, etc.

### 5. Lesão em violência doméstica e familiar (art. 129, §9º e §§10-13) — REGIME PRÓPRIO
- **§9º:** lesão praticada contra ascendente, descendente, irmão, cônjuge/companheiro, ou com quem conviva/tenha convivido, ou prevalecendo-se de relação doméstica/coabitação/hospitalidade — **pena própria** (mais severa que a leve comum).
- **Ação penal — ponto crítico (não confundir):** a lesão praticada **contra a mulher em contexto de violência doméstica (Lei Maria da Penha)** é de **ação penal pública INCONDICIONADA** — **não** se aplica a representação do art. 88 da Lei 9.099/95, nem os institutos despenalizadores do JECrim (a Lei 9.099/95 **não** se aplica — Lei 11.340/2006, art. 41). Isso é **súmula consolidada** — confira o enunciado e o número exato via `jurisprudencia-stj-stf` antes de citar (há Súmula do STJ e decisão do STF na ADI 4.424 nesse sentido) **[NÃO VERIFICADO o número — conferir]**.
- **Teses defensivas (com cautela ética):**
  - **Ausência do contexto de gênero/violência doméstica:** discutir se o fato se deu **em razão** da relação doméstica/afeto/coabitação ou por motivo alheio — a subsunção ao §9º (e à Lei Maria da Penha) exige o vínculo qualificador. **Cuidado:** não banalizar nem revitimizar; sustentar tecnicamente, não moralmente.
  - **Desclassificação para vias de fato** quando não houver lesão comprovada.
  - **Legítima defesa** (frequente em contextos de agressão mútua/recíproca — exige prova).
  - **Fragilidade probatória:** palavra da vítima é prova relevante em violência doméstica, mas **não** dispensa corroboração para o resultado (laudo, testemunhas, exame).

### 6. Lesão culposa (art. 129, §6º)
- **Elemento:** violação de dever de cuidado (imprudência/negligência/imperícia), sem dolo. Comum em acidentes.
- **Teses defensivas:**
  - **Ausência de culpa / caso fortuito / culpa exclusiva da vítima** (rompe o nexo).
  - **Perdão judicial** (art. 129, §5º c/c art. 121, §5º, por remissão) quando as consequências atingem gravemente o próprio agente.
  - **Ação penal condicionada à representação** (Lei 9.099/95, art. 88) — conferir representação e decadência.
  - **[Trânsito:** se a lesão culposa decorre de veículo automotor, a figura pode ser a do **art. 303 do CTB**, não a do art. 129, §6º — ver skill `defesa-crimes-transito`.]

### 7. Privilégio (art. 129, §4º)
- **Causa de diminuição:** relevante valor social/moral **ou** domínio de violenta emoção logo após injusta provocação da vítima. Aplicável a qualquer figura dolosa de lesão.
- **Tese:** sempre pleitear em **caráter subsidiário** (após as teses de absolvição/desclassificação), pois reduz a pena mesmo na condenação.

---

## Teses transversais (valem para várias figuras)

| Tese | Fundamento | Efeito |
|---|---|---|
| **Atipicidade por ausência de lesão** | Falta de exame de corpo de delito (arts. 158, 167 CPP) | Absolvição / desclassificação p/ vias de fato |
| **Desclassificação para vias de fato** | LCP, art. 21 (agressão sem lesão) | Reduz para contravenção |
| **Desclassificação entre §§** | Laudo não prova o resultado mais grave | Figura menos severa |
| **Legítima defesa** | Art. 23, II + 25 CP | Exclui ilicitude → absolvição |
| **Consentimento / lesão desportiva** | Bem disponível / risco permitido | Atipicidade (lesões leves) |
| **Ausência de nexo com resultado agravador** | Art. 13, §1º CP (causa superveniente) | Afasta §§1º-3º |
| **Preterdolo (afastar dolo)** | Resultado grave/morte a título de culpa | Muda a figura / afasta homicídio |
| **Privilégio** | Art. 129, §4º | Reduz a pena (subsidiário) |
| **Decadência / falta de representação** | Lei 9.099/95, art. 88 + art. 38 CPP | Extingue a punibilidade (lesão leve/culposa fora de VD) |

---

## Contra-teses (o que a acusação sustentará / a defesa deve antecipar)

- **Laudo direto suficiente:** materialidade provada por exame de corpo de delito; a defesa deve atacar a **metodologia** (ex.: ausência de exame complementar dos 30 dias — art. 168, §2º, CPP), não apenas negar.
- **Dolo de dano à integridade:** para afastar as vias de fato, a acusação sustenta que houve efetivo dano à saúde/integridade — a defesa contrapõe a **prova da sequela**.
- **Contexto de violência doméstica presente:** ação incondicionada, sem despenalização; a defesa não deve apostar em decadência/representação onde ela **não se aplica** (erro grave).
- **Dolo eventual de homicídio:** na lesão seguida de morte, a acusação tentará puxar para o júri (homicídio) — a defesa fixa o **preterdolo** para manter no juiz singular.

---

## Sumários, dispositivos e precedentes (sob o Citation Gate)

**Dispositivos com certeza (citáveis):**
- **CP:** art. 129 e todos os §§; art. 13, §1º (nexo/causa superveniente); art. 23, II, e 25 (legítima defesa); art. 21 (erro de proibição, se pertinente).
- **CPP:** arts. 158, 167 (exame de corpo de delito, direto e indireto), 168, §2º (exame complementar dos 30 dias), 38 (decadência).
- **LCP (Dec.-lei 3.688/41):** art. 21 (vias de fato).
- **Lei 9.099/95:** art. 88 (representação na lesão leve/culposa); art. 41 da Lei 11.340/2006 (afastamento do JECrim em violência doméstica).

**Precedentes/súmulas a CONFERIR antes de citar (NÃO usar de memória):**
- Súmula do STJ sobre **ação penal incondicionada** na lesão dolosa contra a mulher em violência doméstica, e o julgamento do **STF na ADI 4.424** no mesmo sentido — **[NÃO VERIFICADO o número/enunciado — conferir via `jurisprudencia-stj-stf`]**.
- Entendimentos sobre **caracterização de deformidade permanente** (§2º, IV) e sobre **perigo de vida** (§1º, II) — casuísticos; **[NÃO VERIFICADO — conferir]**.
- Qualquer **tema repetitivo, informativo ou número de HC/REsp/RE** → **passa obrigatoriamente pela skill `jurisprudencia-stj-stf` / `verificacao-citacoes`.** Na dúvida, **ensine a tese e o dispositivo; omita o número.**

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Aceitar a **capitulação da denúncia** sem conferir o **laudo** — a figura correta nasce da perícia, não da narrativa.
- Não exigir o **exame complementar dos 30 dias** (art. 168, §2º, CPP) quando a acusação alega incapacidade > 30 dias (inciso I do §1º).
- Confundir **perda** (gravíssima, §2º, III) com **debilidade** (grave, §1º, III) — são figuras distintas.
- Apostar em **decadência/representação** na lesão contra a mulher em violência doméstica — a ação é **incondicionada** (erro grave).
- Deixar de sustentar o **privilégio (§4º)** em caráter subsidiário quando cabível.
- Na lesão seguida de morte, não fixar o **preterdolo** e deixar o caso escorregar para **homicídio (júri)**.
- Citar número de acórdão/súmula **de memória** — sujeito a sanção por jurisprudência inventada.

**Checklist da peça:**
- [ ] **Laudo de corpo de delito** lido e confrontado com a **capitulação**? (A figura decorre do laudo.)
- [ ] **Figura correta** identificada (leve / grave / gravíssima / seguida de morte / VD / culposa)?
- [ ] **Exame complementar dos 30 dias** exigido/atacado quando o §1º, I, está em jogo?
- [ ] **Nexo causal** com o resultado agravador verificado (art. 13, §1º CP)?
- [ ] **Ação penal** correta (condicionada × incondicionada — atenção à violência doméstica)?
- [ ] **Representação e decadência** conferidas (lesão leve/culposa fora de VD)?
- [ ] **Teses em ordem lógica:** atipicidade/absolvição → desclassificação → (subsidiário) privilégio/pena?
- [ ] **Preterdolo** fixado na lesão seguida de morte (afastar dolo de homicídio)?
- [ ] **Polo conferido** (defesa × acusação) e ética correspondente aplicada?
- [ ] **Citações verificadas** via `jurisprudencia-stj-stf` / `verificacao-citacoes` — nada de memória?
- [ ] **Revisão humana** do advogado/defensor/promotor responsável?

---

## Skills relacionadas

- `selecao-tese-por-tipo-penal` — método geral de escolha da tese (esta skill é o caso concreto da lesão).
- `defesa-descumprimento-protetiva-24a` — crime autônomo de descumprir medida protetiva (não é lesão).
- `defesa-crimes-sexuais` — arts. 213-218-C (não abrange lesão comum).
- `defesa-crimes-transito` — lesão culposa por veículo (art. 303 CTB) em vez do art. 129, §6º.
- `juri-desclassificacao` — quando a acusação for homicídio e a tese for lesão seguida de morte.
- `jurisprudencia-stj-stf` / `verificacao-citacoes` — **gate obrigatório** de toda citação.

---

## Nota de conformidade

Este material é **rascunho técnico de apoio, sob revisão humana obrigatória** — hipótese de trabalho a confirmar, jamais peça pronta para protocolo. A **classificação da figura, a estratégia de teses e toda citação** dependem do laudo concreto, dos autos e da conferência jurisprudencial atualizada. **Verifique a vigência** do art. 129 e da natureza da ação penal antes de peticionar. **Ética por polo:** advocacia (OAB + Provimento 205/2021), Ministério Público (CNMP), Defensoria (LC 80/94); o roteador confere o **polo da instituição** em `company.md` antes de definir o eixo (defensivo × acusatório). A responsabilidade final é sempre do profissional habilitado.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
