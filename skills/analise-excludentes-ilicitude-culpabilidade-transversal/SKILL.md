---
name: analise-excludentes-ilicitude-culpabilidade-transversal
description: >-
  Use para MAPEAR e ANALISAR excludentes de ilicitude e de culpabilidade em QUALQUER processo
  criminal (fora do plenário do júri) — crimes patrimoniais, de trânsito, funcionais, contra a
  honra, ambientais, drogas etc. Ferramenta analítica não-peça: rastreia legítima defesa, estado de
  necessidade, estrito cumprimento do dever legal, exercício regular de direito, coação moral
  irresistível, obediência hierárquica… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, excludentes, teoria-do-crime]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-excludentes-ilicitude-culpabilidade-transversal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-excludentes-ilicitude-culpabilidade-transversal", "analise excludentes", "culpabilidade transversal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise Transversal de Excludentes de Ilicitude e Culpabilidade (arts. 20-28 do CP)

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

Esta skill é uma **ferramenta analítica não-peça**: dado um caso concreto de qualquer natureza penal (fora do plenário do júri), ela orienta o mapeamento sistemático de **causas excludentes da ilicitude** (justificantes — arts. 23 a 25 do CP) e de **causas excludentes da culpabilidade** (dirimentes — arts. 21, 22 e 26 a 28 do CP), além do **erro de tipo** e das **descriminantes putativas** (art. 20 do CP). Serve para triagem defensiva, parecer, memoriais, resposta à acusação, pedido de absolvição sumária e sustentação de tese em alegações finais — em crimes patrimoniais, de trânsito, funcionais, contra a honra, ambientais, de drogas e quaisquer outros.

> **Lição central:** ilicitude e culpabilidade são **degraus distintos** do conceito analítico de crime (fato típico → ilícito → culpável). Excludente de **ilicitude** afirma que o fato **não é injusto** (a conduta era permitida) → efeito *erga omnes*, aproveita partícipes e afasta indenização (art. 65 do CPP; art. 188 do CC). Excludente de **culpabilidade** admite o fato injusto, mas afirma que **não se pode reprovar o agente** → efeito pessoal, não aproveita necessariamente os concorrentes. **Classifique o degrau ANTES de tudo** — é o erro mais comum trocar justificante por dirimente e vice-versa, com consequências práticas opostas.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 20 a 28 do CP na fonte oficial — a Parte Geral tem a redação da **Lei 7.209/1984**, mas leis especiais alteram o entorno (ex.: a **Lei 13.964/2019** incluiu o **parágrafo único do art. 25 do CP**, sobre legítima defesa do agente de segurança pública). Súmulas, teses e precedentes específicos passam **obrigatoriamente** pelo gate `verificacao-citacoes` e por `jurisprudencia-stj-stf` antes de qualquer uso. Na dúvida sobre um número de HC/REsp/tema/informativo, **omita** e ensine a tese com o dispositivo legal.

---

## Mapa geral — onde cada excludente age

| Degrau afastado | Causa | Base legal | Efeito |
|---|---|---|---|
| **Tipicidade** | Erro de tipo essencial | art. 20, *caput*, CP | Exclui dolo (e culpa, se invencível) |
| **Ilicitude** | Estado de necessidade | art. 24 CP | *Erga omnes*; afasta ilícito |
| **Ilicitude** | Legítima defesa | art. 25 CP | *Erga omnes*; afasta ilícito |
| **Ilicitude** | Estrito cumprimento do dever legal | art. 23, III, 1ª parte, CP | *Erga omnes* |
| **Ilicitude** | Exercício regular de direito | art. 23, III, 2ª parte, CP | *Erga omnes* |
| **Culpabilidade** | Inimputabilidade (doença mental; menoridade) | arts. 26, *caput*, e 27 CP | Absolvição imprópria (medida de segurança) / ECA |
| **Culpabilidade** | Erro de proibição inevitável | art. 21 CP | Exclui a reprovação (se evitável, reduz pena) |
| **Culpabilidade** | Coação moral irresistível | art. 22, 1ª parte, CP | Pessoal; pune-se o coator |
| **Culpabilidade** | Obediência hierárquica (ordem não manifestamente ilegal) | art. 22, 2ª parte, CP | Pessoal; pune-se quem deu a ordem |
| **Culpabilidade** | Inexigibilidade de conduta diversa (supralegal) | construção doutrinária/jurisprudencial | Pessoal |
| **Dolo/culpa (regra do erro)** | Descriminante putativa | art. 20, §1º, CP | Isenta (invencível) / responde por culpa (vencível, se houver tipo culposo) |

> **Regra prática de ordem de análise (afunilamento):** 1) o fato é **típico**? (checar erro de tipo, art. 20) → 2) é **ilícito**? (checar as justificantes do art. 23) → 3) o agente é **culpável**? (checar imputabilidade, potencial consciência da ilicitude e exigibilidade). Cada "não" encerra a análise em favor do réu, no degrau correspondente. Isso importa para escolher **a tese e o pedido** (absolvição própria vs. imprópria; art. 397, I ou II, do CPP).

---

## Base legal

- **Art. 23, CP** — rol das excludentes de ilicitude (necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito) e o **parágrafo único** (o agente responde pelo **excesso doloso ou culposo**).
- **Art. 24, CP** — estado de necessidade (requisitos, situação de perigo atual, inevitabilidade, inexigibilidade de sacrifício do bem).
- **Art. 25, CP** — legítima defesa; **parágrafo único** (Lei 13.964/19) — presunção legal para o **agente de segurança pública** que repele agressão em conflito armado ou risco iminente de vítima mantida refém.
- **Art. 20, CP** — erro de tipo (*caput*), **descriminantes putativas** (§1º) e erro determinado por terceiro (§2º).
- **Art. 21, CP** — erro de proibição (desconhecimento da lei é inescusável, mas o erro sobre a ilicitude do fato, se **inevitável**, isenta; se **evitável**, diminui a pena de 1/6 a 1/3).
- **Art. 22, CP** — coação moral irresistível e obediência hierárquica.
- **Arts. 26 a 28, CP** — inimputabilidade (doença mental — *caput* e semi-imputabilidade — parágrafo único), menoridade (art. 27), emoção/paixão e embriaguez (art. 28).
- **Art. 397, CPP** — absolvição sumária: **inciso I** (existência manifesta de causa **excludente da ilicitude**) e **inciso II** (existência manifesta de causa **excludente da culpabilidade**, salvo inimputabilidade).
- **Art. 386, CPP** — hipóteses de absolvição na sentença (VI — excludentes de ilicitude/culpabilidade ou fundada dúvida sobre elas).
- **Art. 65, CPP** — a sentença penal que reconhece a excludente **faz coisa julgada no cível** quanto à existência do fato justificado. **Art. 188, CC** — não constituem atos ilícitos os praticados em legítima defesa, estado de necessidade e exercício regular de direito.

---

## Roteiro analítico por excludente

### 1) Legítima defesa (art. 25 do CP)

Repulsa a **agressão injusta, atual ou iminente**, a direito próprio ou alheio, usando **moderadamente** os meios **necessários**. Requisitos cumulativos:

- **Agressão injusta** — conduta humana contrária ao direito (não cabe legítima defesa contra ataque de animal solto por si só — aí é estado de necessidade — nem contra ato lícito).
- **Atual ou iminente** — em curso ou prestes a ocorrer. Agressão **passada** (vingança) ou **futura remota** descaracteriza.
- **Direito próprio ou alheio** — qualquer bem jurídico (vida, integridade, patrimônio, honra, liberdade).
- **Meios necessários + moderação** — o menos lesivo disponível e o uso proporcional. O excesso (doloso ou culposo) é punível (art. 23, parágrafo único).

**Aplicação transversal (exemplos de tipo penal):** homicídio/lesão (reação física); crimes patrimoniais (defesa da posse — cuidado com a fronteira do desforço imediato do art. 1.210, §1º, CC); crimes contra a honra (a *exceptio veritatis* e a retorsão imediata — art. 140, §1º, CP — são figuras próprias, não legítima defesa técnica).

**Distinções que a defesa deve dominar:**
- **Legítima defesa × estado de necessidade:** na primeira há **agressão humana injusta**; no segundo, **perigo** (de coisa, animal, natureza ou até de conduta humana lícita) e **conflito de bens**.
- **Legítima defesa real × putativa:** se a agressão só existe na **imaginação** do agente, é **descriminante putativa** (art. 20, §1º) — questão de erro, não de justificação.
- **Legítima defesa sucessiva:** repulsa ao **excesso** de quem inicialmente se defendia.

### 2) Estado de necessidade (art. 24 do CP)

Sacrifício de bem jurídico para salvar de **perigo atual**, que o agente **não provocou por sua vontade** nem podia de outro modo evitar, direito próprio ou alheio, **cujo sacrifício, nas circunstâncias, não era razoável exigir**. Requisitos:

- **Perigo atual** e **não provocado voluntariamente** pelo agente.
- **Inevitabilidade** do comportamento lesivo (não havia alternativa menos gravosa).
- **Inexigibilidade do sacrifício** do bem protegido (juízo de razoabilidade/proporcionalidade entre os bens).
- **Ausência de dever legal de enfrentar o perigo** (§1º — quem tinha o dever não pode alegar; ex.: bombeiro, salva-vidas).
- **Redução de pena (§2º):** se **era razoável exigir** o sacrifício, não há justificação plena, mas a pena pode ser reduzida de 1/6 a 2/3.

**Aplicação transversal:** furto famélico (subtração para saciar fome extrema — discute-se atipicidade material vs. estado de necessidade); trânsito (manobra de emergência que causa dano para evitar mal maior); crimes ambientais e funcionais em cenários de calamidade. **Teoria adotada no CP: unitária** (todo estado de necessidade é justificante; não se adota, no CP comum, a diferenciada que o trataria como dirimente em certos casos).

### 3) Estrito cumprimento do dever legal (art. 23, III, 1ª parte)

O agente atua no **exato limite de um dever imposto por lei** (ex.: oficial de justiça que cumpre mandado; policial que efetua prisão legal). Só justifica o que está **estritamente** dentro do dever — o **excesso** volta a ser ilícito (art. 23, parágrafo único). Fonte deve ser **dever legal** (lei, regulamento com base legal), não moral ou contratual.

### 4) Exercício regular de direito (art. 23, III, 2ª parte)

Conduta autorizada pelo ordenamento, exercida **regularmente** (sem abuso). Exemplos: intervenções médico-cirúrgicas consentidas; violência esportiva nos limites das regras; ofendículos (dispositivos de defesa da propriedade, desde que proporcionais e sinalizados); prisão em flagrante por particular (art. 301, CPP). O **abuso** (irregularidade) faz cessar a justificação.

### 5) Erro de proibição (art. 21 do CP) — degrau da culpabilidade

Recai sobre a **ilicitude do fato** (o agente sabe o que faz, mas supõe permitido). O **desconhecimento da lei é inescusável**, mas o erro sobre a **ilicitude**, se **inevitável**, isenta de pena (falta potencial consciência da ilicitude); se **evitável**, a pena é reduzida de 1/6 a 1/3. Distinguir do **erro de tipo** (art. 20 — recai sobre elemento do tipo; exclui dolo). Aplicação transversal frequente em crimes de perigo abstrato, tributários e ambientais, e em condutas culturalmente toleradas.

### 6) Coação moral irresistível (art. 22, 1ª parte) — culpabilidade

**Coação moral (*vis compulsiva*) irresistível** exclui a culpabilidade por **inexigibilidade de conduta diversa**; pune-se apenas o **coator** (autoria mediata). Distinguir: **coação física** (*vis absoluta*) exclui a **própria conduta/tipicidade** (não há ação voluntária). Coação **resistível** não isenta, mas é atenuante (art. 65, III, "c", CP).

### 7) Obediência hierárquica (art. 22, 2ª parte) — culpabilidade

Cumprimento de **ordem não manifestamente ilegal** de superior hierárquico (relação de **direito público**). Isenta o subordinado; pune-se quem deu a ordem. Se a ordem for **manifestamente ilegal**, ambos respondem. Fronteira sensível: aparência de legalidade e âmbito do dever de obediência.

### 8) Inexigibilidade de conduta diversa (dirimente supralegal) — culpabilidade

Cláusula de fechamento: mesmo fora das hipóteses legais (arts. 22, 24, §2º), reconhece-se que, em **circunstâncias extremas**, não era exigível conduta conforme ao direito. **Tese de aplicação restrita e controvertida** — sustentar com fatos robustos e sob o gate de citações; a aceitação varia na jurisprudência. **[NÃO VERIFICADO]** o exato estado atual da admissão pelos tribunais superiores — conferir via `jurisprudencia-stj-stf`.

### 9) Descriminantes putativas (art. 20, §1º do CP)

O agente **imagina** situação que, se real, tornaria a conduta lícita (ex.: supõe agressão iminente inexistente e reage). Regramento (teoria limitada da culpabilidade, adotada pelo CP):
- **Erro invencível** (qualquer pessoa erraria) → isenta de pena.
- **Erro vencível** (evitável com cautela devida) → responde por **crime culposo**, se previsto em lei.

Distinguir da **descriminante putativa por erro de proibição** (o agente conhece a situação, mas erra sobre os **limites/existência jurídica** da justificante) — aí incide o art. 21.

### 10) Inimputabilidade e semi-imputabilidade (arts. 26 a 28) — culpabilidade

- **Art. 26, *caput*:** doença mental/desenvolvimento incompleto que retira, ao tempo do fato, a capacidade de entender o caráter ilícito **ou** de determinar-se → **isento de pena**; absolvição **imprópria** com **medida de segurança**.
- **Art. 26, parágrafo único (semi-imputável):** capacidade **reduzida** → pena reduzida de 1/3 a 2/3 (ou substituição por medida de segurança).
- **Art. 27:** menores de 18 anos → inimputáveis penalmente (regidos pelo ECA).
- **Art. 28:** **emoção/paixão não excluem** a imputabilidade; **embriaguez voluntária/culposa** também **não** (teoria da *actio libera in causa*); só isenta a embriaguez **completa, proveniente de caso fortuito ou força maior** (§1º).

> **Atenção ao pedido:** inimputabilidade (art. 26, *caput*) **não** gera absolvição sumária pelo art. 397, II, do CPP (a ressalva é expressa) — o rito segue para permitir a imposição de medida de segurança. As demais dirimentes autorizam absolvição sumária.

---

## Teses e contra-teses (transversal)

| Tese defensiva | Fundamento | Contra-tese típica (acusação) |
|---|---|---|
| Legítima defesa | art. 25 — agressão injusta atual/iminente + meios necessários e moderados | Agressão cessada (vingança) ou excesso (art. 23, p.u.); desproporção dos meios |
| Estado de necessidade | art. 24 — perigo atual não provocado + inevitabilidade + inexigibilidade | Perigo provocado pelo agente; havia alternativa; dever legal de enfrentar (§1º) |
| Estrito cumprimento do dever | art. 23, III | Excesso além do dever; ausência de previsão legal do dever |
| Exercício regular de direito | art. 23, III | Abuso/irregularidade no exercício; desproporção do ofendículo |
| Erro de proibição inevitável | art. 21 | Ilicitude era conhecível; desconhecimento da lei (inescusável) |
| Descriminante putativa invencível | art. 20, §1º | Erro evitável → responde por culpa; ausência de base fática para o erro |
| Coação moral irresistível | art. 22, 1ª parte | Coação era resistível (atenuante, não isenção) |
| Obediência hierárquica | art. 22, 2ª parte | Ordem manifestamente ilegal; ausência de relação hierárquica de direito público |
| Inexigibilidade supralegal | construção pretoriana | Ausência de circunstância extrema; tese não acolhida no caso |
| Semi-imputabilidade | art. 26, p.u. | Laudo não conclui pela redução da capacidade |

**Excesso (art. 23, parágrafo único) — sempre checar:** ainda que a justificante exista, o **excesso doloso ou culposo** responsabiliza o agente pelo resultado excedente. Modalidades doutrinárias a distinguir na análise: excesso **intensivo/extensivo**, **doloso/culposo** e o **exculpante** (por medo/perturbação — hipótese de inexigibilidade, controvertida). Ao sustentar a excludente, **antecipe** o debate sobre excesso.

---

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos e regras notórias** (arts. 20-28 e 386/397 do CPP) podem ser citados com segurança, conferida a **redação vigente**.
- **Estado de necessidade e furto famélico; legítima defesa da honra; alcance do art. 25, parágrafo único (agente de segurança); admissão da inexigibilidade supralegal; critérios de excesso** — são temas de **jurisprudência oscilante**. Qualquer **número de HC/REsp/RE, tema repetitivo ou informativo** deve ser tratado como **[NÃO VERIFICADO]** até conferência em `jurisprudencia-stj-stf`.
- **Nota histórica relevante (verificar antes de citar):** o STF, em julgamento de ADPF, teria afastado a chamada "legítima defesa da honra" como tese em crimes contra a mulher — **[NÃO VERIFICADO]** o número/ementa exatos; confirmar via `jurisprudencia-stj-stf` antes de usar. **Não invente número de acórdão.**
- Regra de ouro: **ensine a tese e o dispositivo; só cite o julgado depois de verificado.** Omitir vence inventar.

---

## Erros comuns e checklist analítico

**Erros comuns (evitar):**
- **Confundir o degrau** — tratar legítima defesa (ilicitude) como se fosse dirimente, ou inimputabilidade (culpabilidade) como excludente de ilicitude; o efeito processual e civil muda.
- **Ignorar o excesso** (art. 23, parágrafo único) ao sustentar justificante plena.
- **Trocar erro de tipo por erro de proibição** (art. 20 × art. 21) — regimes e efeitos distintos.
- **Confundir legítima defesa real com putativa** (justificação × erro do art. 20, §1º).
- **Pedir absolvição sumária por inimputabilidade** (art. 397, II) — a lei a **ressalva** expressamente.
- **Alegar estado de necessidade** quando o agente tinha **dever legal** de enfrentar o perigo (art. 24, §1º).
- **Citar julgado de memória** sobre temas oscilantes (furto famélico, legítima defesa da honra) sem passar pelo gate.

**Checklist:**
- [ ] Identifiquei o **degrau** afastado (tipicidade / ilicitude / culpabilidade)?
- [ ] Testei **todas** as justificantes do art. 23 e as dirimentes dos arts. 21, 22 e 26-28?
- [ ] Verifiquei **requisitos cumulativos** da excludente aplicável (ex.: agressão injusta + atual/iminente + meios necessários + moderação)?
- [ ] Analisei **excesso** (doloso/culposo — art. 23, p.u.)?
- [ ] Distingui **real × putativa** e **erro de tipo × erro de proibição**?
- [ ] Escolhi o **pedido correto** (absolvição própria art. 386, VI; sumária art. 397, I ou II; imprópria com medida de segurança)?
- [ ] Considerei o **efeito civil** (arts. 65 CPP e 188 CC) e o alcance para **partícipes** (erga omnes × pessoal)?
- [ ] Passei **toda** súmula/precedente/tese por `verificacao-citacoes` e `jurisprudencia-stj-stf`?
- [ ] Confirmei a **redação vigente** dos arts. 20-28 CP (inclusive art. 25, p.u. — Lei 13.964/19)?

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta é uma ferramenta de **triagem e análise**, não uma peça pronta; a subsunção depende dos fatos concretos e da prova dos autos, e a decisão final é sempre do **advogado responsável**.
- **Foco majoritário em DEFESA** — mapeia teses defensivas por tipo penal. Se o operador atuar no **polo acusatório** (MP/assistente), a mesma grade serve para **refutar** a excludente (contra-teses acima); o **roteador deve conferir o polo** da instituição em `_criminalsquad/_memory/company.md` antes de orientar a redação.
- **Ética por polo:** advocacia — EAOAB + Provimento 205/2021; Ministério Público — CNMP; Defensoria — LC 80/94.
- **Citation Gate inegociável:** nenhum precedente citado de memória; tudo passa por `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). **Omitir vence inventar.**
- **Padrão de redação:** ao converter a análise em peça (resposta à acusação, memoriais, alegações finais), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão.
