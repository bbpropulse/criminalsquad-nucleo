---
name: competencia-justica-eleitoral-conexao
description: >-
  Use ao definir ou impugnar a competência para crime eleitoral e crime comum conexo — competência
  constitucional da Justiça Eleitoral (CF, art. 121; Cód. Eleitoral), atração dos crimes conexos
  comuns (STF, INQ 4.435 AgR), declinatória de foro, conflito com a Justiça Comum estadual/Federal,
  deslocamento, cisão de processos e reflexos da decisão. Rascunho para revisão humana. Gatilhos:
  competência Justiça Eleitoral, conexão… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, competencia, eleitoral]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-competencia-justica-eleitoral-conexao"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["competencia-justica-eleitoral-conexao", "competencia justica", "eleitoral conexao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Competência da Justiça Eleitoral e Conexão com o Crime Comum (CF, art. 121; Cód. Eleitoral, arts. 35 e 78; STF, INQ 4.435)

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

Esta skill orienta a **definição e a impugnação da competência** quando há **crime eleitoral** e **crime comum conexo** no mesmo cenário fático. É uma **preliminar decisiva**: acertar (ou impugnar) a competência pode **anular** o processo, **deslocar** os autos e **cindir** a persecução. A regra-mestra fixada pelo STF é a **prevalência da Justiça Eleitoral** — que **atrai** o crime comum conexo — mas com exceções e cisões que precisam ser dominadas.

> **Lição central:** primeiro identifique se **existe crime eleitoral** e se ele é **conexo** ao comum. Se houver crime eleitoral conexo, a competência tende a ser **da Justiça Eleitoral** por atração (STF). O erro clássico é raciocinar "há crime federal/estadual, logo Justiça Comum" — quando a conexão eleitoral **desloca tudo** para a Justiça Eleitoral. O segundo erro é o oposto: invocar atração eleitoral **sem** um crime eleitoral típico e concreto (mera "conotação política" **não** basta).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **Código Eleitoral (Lei 4.737/65)** — em especial arts. **35, II** (competência do juiz eleitoral para crimes eleitorais e conexos), **78** e **364** — e da **Lei 4.410/64 / normas de resoluções do TSE**. O marco jurisprudencial da **prevalência/atração eleitoral** foi firmado pelo STF (Pleno) em **2019** (INQ 4.435 AgR — Rel. Min. Marco Aurélio) [NÃO VERIFICADO — conferir número, relator, data e teor exato]. Antes de fundamentar, passe **toda** súmula, tese, tema e acórdão pelo gate `jurisprudencia-stj-stf` (ou `verificacao-citacoes`). Há sanções reais por jurisprudência inventada.

---

## Base legal

- **CF, art. 121** — a Justiça Eleitoral tem competência definida em **lei complementar** (o Cód. Eleitoral foi recepcionado com esse status quanto à organização e competência).
- **CF, art. 109, IV** — competência da Justiça **Federal** para crimes em detrimento de bens/serviços/interesse da União — **ressalvada a competência da Justiça Eleitoral** (a própria CF ressalva a eleitoral).
- **Código Eleitoral (Lei 4.737/65), art. 35, II** — compete ao **juiz eleitoral** processar e julgar os **crimes eleitorais** e os **comuns que lhe forem conexos**.
- **Código Eleitoral, art. 78** — na apuração conjunta, prevalência/regras de reunião de processos por conexão (conferir redação e alcance).
- **Código Eleitoral, arts. 287 a 364** — tipos penais eleitorais e a **aplicação subsidiária do CPP** ao processo penal eleitoral (art. 364).
- **CPP, arts. 76 a 82** — conexão e continência, foro prevalente, **cisão obrigatória** e reunião de processos (aplicação subsidiária).
- **CPP, arts. 108 e 109** — o **conflito de competência** e o dever de o juiz declarar-se incompetente **de ofício** em razão da matéria.

> **Onde definir o tipo eleitoral:** os crimes eleitorais estão no **Cód. Eleitoral (arts. 289 a 354)** e em **leis extravagantes** — ex.: **corrupção eleitoral (art. 299, CE)**, **"boca de urna"/propaganda irregular**, **falsidade eleitoral (arts. 348-354, CE)**, e o **"caixa dois" eleitoral** (discussão de tipicidade e enquadramento — em regra imputado como **falsidade ideológica eleitoral, art. 350, CE**, quando relativo a prestação de contas de campanha). **A tipicidade eleitoral concreta é o pressuposto da atração** — sem ela, não há competência eleitoral.

---

## O núcleo: prevalência e atração da Justiça Eleitoral

A tese consolidada é a da **vis attractiva** eleitoral: havendo **crime eleitoral** e, a ele **conexo**, um **crime comum** (estadual ou federal), a competência para julgar **ambos** é da **Justiça Eleitoral**, que atrai o crime comum conexo.

**Fundamentos:**
1. **Regra legal expressa** — art. 35, II, do Cód. Eleitoral atribui ao juiz eleitoral os crimes eleitorais **e os conexos**.
2. **Ressalva constitucional** — o art. 109, IV, da CF **excepciona** a competência federal quando presente a competência eleitoral.
3. **Especialidade** — a Justiça Eleitoral é **especializada**; a conexão com matéria de sua competência a torna prevalente sobre a Justiça Comum (estadual e Federal).

**Precedente-chave (conferir antes de citar):** STF, Pleno, **INQ 4.435 AgR** (caso que discutiu "caixa dois" conexo a corrupção/lavagem), firmando a competência da Justiça Eleitoral para o crime comum conexo ao eleitoral [NÃO VERIFICADO — confirmar número, órgão, relator, data, votação e a exata ratio; conferir se há tema de repercussão geral ou modulação — via `jurisprudencia-stj-stf`].

> **Regra prática de decisão:**
> 1. **Há crime eleitoral típico e concreto?** (não basta "conotação política" ou financiamento de campanha em abstrato).
> 2. **Há conexão** (art. 76, CPP) entre o eleitoral e o comum?
> 3. **Se SIM às duas** → competência da **Justiça Eleitoral** (atração do comum conexo).
> 4. **Se NÃO houver crime eleitoral** (ou não houver conexão) → cada crime segue seu foro próprio (Estadual/Federal); **não** há atração eleitoral.

---

## Roteiro de análise (defesa e impugnação da competência)

### Passo 1 — Qualificar o crime eleitoral
- Identifique o **tipo eleitoral concreto** (art. e diploma). Ex.: art. 299 (corrupção eleitoral), art. 350 (falsidade ideológica eleitoral — usual no "caixa dois").
- **Teste da tipicidade eleitoral:** o fato ofende bem jurídico eleitoral (lisura/legitimidade do pleito, verdade das contas)? Se a imputação eleitoral for **atípica/inconsistente**, cai a base da atração.

### Passo 2 — Verificar a conexão (art. 76, CPP)
- **Conexão intersubjetiva, objetiva ou instrumental/probatória** entre o eleitoral e o comum?
- Sem liame de conexão/continência, **não** se reúne — cada crime ao seu juízo natural.

### Passo 3 — Definir o foro prevalente
- Presentes crime eleitoral + conexão → **Justiça Eleitoral** atrai (art. 35, II, CE; STF).
- **Sem** crime eleitoral → Justiça **Comum** (Estadual, regra geral; **Federal** se incidir o art. 109 CF).

### Passo 4 — Avaliar cisão obrigatória (o que a Eleitoral NÃO julga)
Mesmo com atração, **cindem-se** e voltam ao juízo próprio as situações de **foro por prerrogativa** e certas competências indeclináveis:
- **Foro por prerrogativa de função** (competência originária de Tribunal) **não** é atraído para a 1ª instância eleitoral — desmembra-se.
- **Crimes dolosos contra a vida** (competência do **Tribunal do Júri**, CF, art. 5º, XXXVIII) — a doutrina majoritária sustenta que **não** são atraídos pela Justiça Eleitoral, por ser competência constitucional específica; **cisão** e remessa ao Júri. **[Ponto sensível — confirmar o entendimento atual do STF/STJ via `jurisprudencia-stj-stf`.]**
- **Competências constitucionais especializadas** concorrentes exigem análise de cisão caso a caso.

### Passo 5 — Escolher o instrumento processual (ver quadro adiante)

---

## Teses e contra-teses

**Tese (deslocamento PARA a Justiça Eleitoral):**
- Há crime eleitoral típico e conexo ao comum → competência da Justiça Eleitoral (art. 35, II, CE; ressalva do art. 109, IV, CF; STF INQ 4.435). Pleitear **declínio** e remessa dos autos.
- **Quando favorece a defesa:** eleitoral pode acarretar **prescrição** mais curta em alguns tipos, **penas menores**, foro potencialmente mais garantista, e a **anulação** de atos praticados por juízo incompetente (prova produzida perante juízo absolutamente incompetente é atacável).

**Contra-tese (manter na Justiça Comum/Federal — afastar a atração):**
- **Inexistência de crime eleitoral típico** — a imputação eleitoral é atípica/artificial; "conotação política" ou uso de recursos de campanha **não** cria crime eleitoral. Sem tipo eleitoral, **não há atração**.
- **Ausência de conexão** real (art. 76, CPP) entre os fatos.
- **Autonomia** dos crimes comuns (ex.: lavagem, organização criminosa com objeto não eleitoral) que não dependem do eleitoral.

**Tese de nulidade (competência absoluta):**
- Competência **em razão da matéria** é **absoluta**; atos decisórios de juízo incompetente são **nulos** (art. 567, CPP — aproveitam-se os não decisórios). Prova/decisão perante juízo absolutamente incompetente → **nulidade**, arguível a qualquer tempo e cognoscível de ofício (art. 109, CPP).

**Contra-tese processual (acusação/juízo):**
- Preclusão/convalidação de atos **não decisórios**; aproveitamento de provas irrepetíveis; **translatio iudicii** (remessa sem perda dos atos válidos).

---

## Instrumentos processuais — qual usar

| Situação | Instrumento | Base |
|---|---|---|
| Réu quer que o **próprio juízo** reconheça a incompetência | **Exceção de incompetência** (declinatória) | CPP, arts. 95, II, e 108 |
| Dois juízos se dizem (in)competentes | **Conflito de competência** | CPP, arts. 113-117; CF, arts. 102/105 (tribunal competente) |
| Incompetência **absoluta** (matéria) já reconhecível | Alegação em **preliminar** (resposta/HC), de ofício | CPP, arts. 109 e 567 |
| Anular processo por juízo incompetente | **Habeas corpus** / preliminar de **apelação** (art. 593, III) | CPP; CF, art. 5º, LXVIII |

> **Cuidado técnico:** a **exceção de incompetência** (declinatória) é o veículo típico de 1º grau; o **conflito de competência** pressupõe dois juízos em divergência e é julgado pelo **tribunal** competente (TSE/STJ/STF conforme os juízos envolvidos — **confirmar o tribunal competente para o conflito concreto**). Não confunda os dois.

---

## Súmulas e precedentes (sob o Citation Gate)

> **NÃO cite de memória.** Os itens abaixo são **pistas de pesquisa** — confirme número, teor e vigência via `jurisprudencia-stj-stf` antes de usar na peça.

- **STF, INQ 4.435 AgR/DF** — prevalência/atração da Justiça Eleitoral sobre o crime comum conexo ao eleitoral (marco do tema, 2019). [NÃO VERIFICADO — confirmar dados e ratio; verificar se houve modulação.]
- **Súmula 122/STJ** — competência da **Justiça Federal** quando há conexão entre crime federal e estadual (a Federal atrai a Estadual). **Usar por analogia lógica de atração**, mas atenção: a **ressalva eleitoral** do art. 109, IV, CF pode **excepcionar** a lógica federal. [Confirmar teor e aplicabilidade.]
- **Súmula Vinculante / Súmula do STF sobre competência eleitoral** — [NÃO VERIFICADO — verificar existência e teor antes de citar; não afirmar sem conferência.]
- **STJ/STF — cisão de crime doloso contra a vida** conexo a crime eleitoral (competência do Júri não atraída). [NÃO VERIFICADO — ponto controvertido; conferir o entendimento atual.]

> Prefira **ensinar a tese e o dispositivo** (art. 35, II, CE; art. 109, IV, CF; arts. 76-82 CPP) a arriscar um número de acórdão. Se precisar do precedente, **verifique** primeiro.

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Raciocinar "há crime federal → Justiça Federal" **ignorando** a ressalva eleitoral (art. 109, IV, CF) e a atração (art. 35, II, CE).
- Invocar competência eleitoral **sem** um crime eleitoral típico e concreto (mera "conotação política" ou uso de verba de campanha em abstrato **não** basta).
- Esquecer a **cisão obrigatória** do foro por prerrogativa e do crime doloso contra a vida (Júri).
- Confundir **exceção de incompetência** (1º grau) com **conflito de competência** (tribunal).
- Tratar a incompetência de matéria como **relativa** (ela é **absoluta** — nulidade, cognoscível de ofício, arguível a qualquer tempo).
- Não requerer o **aproveitamento** ou a **anulação** correta dos atos (art. 567, CPP — só os **decisórios** se anulam).

**Checklist:**
- [ ] Identifiquei o **crime eleitoral típico** (art./diploma) — e ele é **concreto**, não abstrato?
- [ ] Há **conexão/continência** (art. 76-77, CPP) entre o eleitoral e o comum?
- [ ] Apliquei a regra de **atração eleitoral** (art. 35, II, CE) e a **ressalva** do art. 109, IV, CF?
- [ ] Avaliei **cisão obrigatória** (foro por prerrogativa; crime doloso contra a vida → Júri)?
- [ ] Escolhi o **instrumento** correto (declinatória × conflito × HC × preliminar)?
- [ ] Sustentei a **natureza absoluta** da competência (matéria) e a consequência (nulidade dos atos decisórios — art. 567, CPP)?
- [ ] Verifiquei **cada** súmula/precedente/tema via `jurisprudencia-stj-stf`?
- [ ] Confirmei a **redação vigente** do Cód. Eleitoral (arts. 35, 78, 364) e do CPP (76-82, 108-109, 567)?
- [ ] Avaliei o **impacto material** (prescrição, pena, aproveitamento de prova) da mudança de foro para a estratégia de defesa?

---

## Lembretes finais

- **Crime eleitoral típico + conexão = Justiça Eleitoral atrai** (art. 35, II, CE; ressalva do art. 109, IV, CF; STF INQ 4.435 — conferir).
- **Sem crime eleitoral concreto, não há atração** — a "conotação política" não cria competência eleitoral.
- **Cisão obrigatória:** foro por prerrogativa e crime doloso contra a vida (Júri) **não** são atraídos — confirmar entendimento atual.
- **Competência de matéria é absoluta** → atos decisórios de juízo incompetente são **nulos** (art. 567, CPP); cognoscível de ofício (art. 109, CPP).
- **Instrumento:** declinatória (1º grau) × conflito de competência (tribunal) × HC/preliminar — não confundir.
- **Impacto na defesa:** o deslocamento pode alterar **prescrição, pena e validade da prova** — avalie se, no caso concreto, deslocar **favorece** o assistido.

## Nota de conformidade

Rascunho técnico **sob revisão humana obrigatória** — nenhuma peça de competência é protocolada sem conferência do advogado responsável. **Citation Gate inegociável:** toda súmula, tese, tema e acórdão passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar; na dúvida, **omitir vence inventar**. Esta skill é de **atuação majoritariamente defensiva** (definir/impugnar competência a favor do assistido); se empregada pelo **polo acusatório** (MP/assistente de acusação), o chefe-roteador deve **conferir o polo** no `company.md` e ajustar o pedido (a competência é matéria de ordem pública, invocável por qualquer parte e de ofício). Ética conforme o tipo de instituição: **OAB + Provimento 205/2021** (advocacia); **CNMP** (Ministério Público); **LC 80/94** (Defensoria).

**Padrão de redação:** ao redigir a peça (exceção, conflito, HC ou preliminar), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
