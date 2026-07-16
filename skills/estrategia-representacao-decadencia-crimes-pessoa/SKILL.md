---
name: estrategia-representacao-decadencia-crimes-pessoa
description: >-
  Use para decidir a NATUREZA da ação penal (pública incondicionada, pública condicionada à
  representação ou privada) e o PRAZO DECADENCIAL nos crimes contra a pessoa fora do júri, e para
  montar teses de extinção da punibilidade por decadência ou por falta/retratação da representação.
  Cobre lesão leve e lesão culposa (art. 88 da Lei 9.099/95), ameaça (art. 147, p.u., CP), perigo de
  contágio, calúnia/injúria/difamação (ação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, crimes-contra-pessoa, acao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-estrategia-representacao-decadencia-crimes-pessoa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["estrategia-representacao-decadencia-crimes-pessoa", "estrategia representacao", "crimes pessoa"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Estratégia de Representação, Decadência e Ação Penal nos Crimes contra a Pessoa (arts. 100-107 CP; arts. 24-38 e 100-106 CPP; Lei 9.099/95)

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

Esta skill é a **análise transversal** que decide, **antes de qualquer peça**, uma pergunta que determina o rumo do caso: **de quem é a titularidade da ação penal** naquele crime contra a pessoa e **qual o prazo para agir**. Da resposta nascem teses extintivas decisivas — **decadência** (perda do direito de representar/queixar pelo decurso do prazo) e **falta ou retratação da representação** (condição de procedibilidade não satisfeita ou desfeita).

> **Lição central:** decadência **não é** prescrição. **Prescrição** é a perda do direito de o *Estado* punir pelo decurso do tempo (skills `extincao-punibilidade-prescricao` / `calculadora-prescricao`). **Decadência** é a perda do direito da *vítima* (ou de quem a represente) de oferecer **representação** ou **queixa**, em regra em **6 meses** contados da ciência da autoria (art. 103 CP; art. 38 CPP). Ambas extinguem a punibilidade (art. 107, IV, CP), mas por causas e marcos distintos. **Classifique a natureza da ação primeiro** — é ela que diz se o prazo decadencial sequer existe.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 100 a 107 do CP, dos arts. 24 a 38 e 100 a 106 do CPP, e do art. 88 da Lei 9.099/95. Alterações legislativas e viradas jurisprudenciais mudam a natureza da ação em tipos específicos (o exemplo histórico é a **ação penal na lesão corporal do art. 129, §9º, CP** em contexto de violência doméstica — hoje **pública incondicionada**, Súmula 542/STJ; e a **estupro**, tornado de ação pública incondicionada pela Lei 12.015/2009 e depois pela Lei 13.718/2018). **Antes de afirmar a natureza da ação de qualquer tipo penal, confirme o texto atual na fonte oficial e passe súmulas/precedentes pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`.**

---

## ⚖️ Nota de polo (o roteador deve conferir)

Esta é uma skill **transversal, de uso por ambos os polos** — a mesma análise que arma a **defesa** para pedir a extinção por decadência serve à **acusação (MP e assistente de acusação)** para verificar a tempestividade e a validade da representação/queixa antes de agir. Na spec, `polo_acusacao = true`.

- **Defesa (foco majoritário desta skill):** buscar a extinção da punibilidade — apontar decadência consumada, ausência de representação válida, ou provocar/reconhecer a retratação.
- **Acusação (MP / assistente):** aferir se a condição de procedibilidade está presente e tempestiva **antes** de denunciar ou de aditar; um vício aqui é nulidade que a defesa explorará. Ética do MP: art. 127 CF e regramento do CNMP.

**O chefe-roteador deve confirmar o polo da instituição (em `_memory/company.md`) e ajustar o objetivo da análise.** O restante desta skill privilegia o roteiro **defensivo por tipo penal**, sem prejuízo do uso acusatório da mesma grade.

---

## Base legal

- **Art. 100 CP** — regra geral: a ação penal é **pública**, salvo quando a lei a declara **privativa do ofendido**; a pública é **incondicionada**, salvo quando a lei a condiciona a **representação** ou a **requisição do Ministro da Justiça**.
- **Art. 103 CP + art. 38 CPP** — **prazo decadencial de 6 meses** para a representação e para a queixa, contados do **dia em que a vítima soube quem é o autor** do crime (na ação privada subsidiária, do fim do prazo do MP).
- **Art. 107, IV, CP** — **decadência**, **renúncia** e **perempção** como causas de **extinção da punibilidade**.
- **Arts. 24 a 38 CPP** — ação penal pública, representação, requisição, retratação e prazos.
- **Arts. 100 a 106 CPP** — ação penal privada, queixa, renúncia, perdão e perempção.
- **Art. 102 CP** — a **representação é irretratável depois de oferecida a denúncia**.
- **Art. 88 da Lei 9.099/95** — **lesão corporal leve** e **lesão corporal culposa** dependem de **representação** (transformou em condicionada o que o CP tratava como incondicionada).
- **Art. 147, parágrafo único, CP** — **ameaça**: ação pública **condicionada à representação**.
- **Art. 145 CP** — crimes contra a honra (calúnia, difamação, injúria): em regra **ação privada** (com exceções: injúria racial, funcionário público *propter officium* → condicionada, e casos de ação pública).
- **Súmula 542/STJ** — a ação penal na **lesão corporal em violência doméstica** contra a mulher é **pública incondicionada** (afasta a representação e o art. 88 da Lei 9.099 nesse contexto).

---

## 🧭 Passo 1 — Classificar a NATUREZA da ação (a decisão que comanda tudo)

Antes de falar em prazo, decida em qual das três categorias o crime se enquadra. **A natureza é definida por lei**; na omissão, a ação é **pública incondicionada** (regra do art. 100 CP).

| Natureza | Quem age | Peça inicial | Prazo | Condição |
|---|---|---|---|---|
| **Pública incondicionada** | MP, de ofício | Denúncia | Não há decadência da vítima (só prescrição) | Nenhuma |
| **Pública condicionada à representação** | MP, após representação | Denúncia (após representação) | **6 meses** para representar (art. 38 CPP) | Representação (ou requisição do Min. Justiça) |
| **Privada** | Ofendido/representante | Queixa-crime | **6 meses** para a queixa (art. 38 CPP) | Queixa; sujeita a renúncia/perdão/perempção |

**Grade prática por tipo penal (conferir vigência de cada um):**

- **Lesão corporal leve (art. 129, *caput*)** e **lesão culposa (art. 129, §6º)** → **condicionada à representação** (art. 88, Lei 9.099/95). **Exceção:** contexto de **violência doméstica contra a mulher** → **pública incondicionada** (Súmula 542/STJ; ADI 4.424/DF do STF [NÃO VERIFICADO — conferir número e ementa via `jurisprudencia-stj-stf`]).
- **Lesão grave/gravíssima (art. 129, §§1º e 2º)** e **seguida de morte (§3º)** → **pública incondicionada**.
- **Ameaça (art. 147)** → **condicionada à representação** (parágrafo único).
- **Perigo de contágio venéreo (art. 130)** → **condicionada à representação** (§2º) [conferir redação].
- **Homicídio, infanticídio, aborto** → **pública incondicionada** (mas homicídio/tentativa vão ao **júri** — fora do escopo desta skill; ver `juri-*`).
- **Calúnia, difamação, injúria (arts. 138-140)** → em regra **ação privada** (art. 145). **Exceções:** injúria racial/preconceito e ofensa a funcionário público *propter officium* → **condicionada**; contra Presidente da República ou chefe de governo estrangeiro → **condicionada à requisição**.
- **Constrangimento ilegal (art. 146)** → **pública incondicionada** (conferir).

> **Regra de ouro:** na dúvida sobre a natureza, **presume-se pública incondicionada** (art. 100 CP). A tese de decadência/representação só se abre onde a lei **expressamente** condiciona a ação ou a torna privada.

---

## ⏳ Passo 2 — Contar o PRAZO DECADENCIAL (6 meses, art. 103 CP / art. 38 CPP)

O prazo decadencial é de **6 meses** e conta-se do **dia em que a vítima (ou seu representante legal) soube quem é o autor do crime** — **não** da data do fato, salvo quando autoria e fato se revelam no mesmo momento.

**Natureza e contagem do prazo (ponto sensível):**
- A decadência é prazo de **direito material** → conta-se pela regra do **art. 10 do CP**: **inclui o dia do começo** (*dies a quo*) e é **improrrogável** (não se suspende nem se interrompe; não se prorroga para o dia útil seguinte). Isso a distingue dos prazos **processuais** do CPP.
- **Termo inicial:** conhecimento da **autoria** (art. 38 CPP), não a mera notícia do crime. Se a autoria só é descoberta meses depois, o prazo corre da descoberta.
- **Vítima menor / representante:** havendo representante legal, discute-se a titularidade e a contagem (o antigo sistema de "dupla titularidade" foi afetado pelo Código Civil de 2002 e pelo fim da menoridade de 18-21 na seara penal). **Confirmar o entendimento atual** antes de sustentar prazo autônomo do ofendido que completou a maioridade.
- **Ação privada subsidiária da pública (art. 100, §3º, CP; art. 29 CPP):** o prazo de 6 meses para a queixa subsidiária corre do **fim do prazo do MP** para denunciar.

> **[calculadora a implementar com testes]** — a contagem determinística "termo inicial + 6 meses (art. 10 CP)" pode ser padronizada numa `calculadora-decadencia` (análoga a `calculadora-tempestividade`), tratando *dies a quo* incluso, meses corridos e improrrogabilidade. **Enquanto não existir, calcule manualmente pelo método acima e sempre confira o marco fático (data da ciência da autoria) nos autos.** Não gere aqui código de cálculo jurídico.

---

## 🔁 Passo 3 — Aferir a REPRESENTAÇÃO e a possibilidade de RETRATAÇÃO

Nos crimes de ação pública **condicionada**, a representação é **condição de procedibilidade**: sem ela, o MP não pode denunciar e o processo não avança.

- **Forma:** a representação **não exige forma sacramental** — basta a manifestação inequívoca de vontade de ver o autor processado (boletim de ocorrência, termo, declaração). O excesso de formalismo é rechaçado pela jurisprudência [conferir via `jurisprudencia-stj-stf`].
- **Retratação da representação (art. 25 CPP):** a representação é **retratável até o oferecimento da denúncia**. Oferecida a denúncia, torna-se **irretratável** (art. 102 CP). **Marco decisivo:** oferecimento (não recebimento) da denúncia.
- **Violência doméstica (Lei 11.340/06, art. 16):** a renúncia/retratação à representação, quando o crime é condicionado, só é admitida **perante o juiz, em audiência especialmente designada, antes do recebimento da denúncia**, ouvido o MP. **Cuidado:** isso vale para os crimes que **ainda** dependem de representação nesse contexto (ex.: **ameaça**) — **não** para a **lesão corporal**, que é **incondicionada** (Súmula 542/STJ). Não confundir os dois planos.
- **Handoff:** para **redigir** a peça de retratação, use a skill `retratacao-representacao`. Esta skill é a **análise que decide se a retratação cabe** e com que efeito; aquela é a peça.

---

## 🎯 Teses típicas (DEFESA) e as contra-teses (ACUSAÇÃO)

> **Tese defensiva 1 — Decadência consumada (extinção da punibilidade).**
> Crime condicionado ou privado + decurso de mais de 6 meses da ciência da autoria sem representação/queixa → **extinção da punibilidade** (art. 107, IV, CP). Pedir o **reconhecimento da decadência** e o arquivamento/rejeição.
> **Contra-tese (acusação):** discutir o **termo inicial** — a autoria só foi conhecida em data posterior; ou o ato praticado no prazo já configura representação válida (informalidade).

> **Tese defensiva 2 — Ausência de representação válida (falta de condição de procedibilidade).**
> Crime condicionado sem manifestação inequívoca da vítima de querer processar → **carência de condição de procedibilidade**; a denúncia deve ser rejeitada (art. 395, II, CPP) ou o processo extinto.
> **Contra-tese:** o BO/termo/declaração já traduz vontade inequívoca; forma não é da essência.

> **Tese defensiva 3 — Retratação tempestiva da representação.**
> Vítima se retratou **antes do oferecimento da denúncia** (art. 25 CPP) → falta a condição; extinção. Em violência doméstica condicionada, aferir o rito do art. 16 da Lei 11.340/06 (audiência, MP).
> **Contra-tese:** retratação após o oferecimento é ineficaz (art. 102 CP); ou o crime é incondicionado (Súmula 542) e a "retratação" é irrelevante.

> **Tese defensiva 4 — Ação privada: renúncia, perempção ou perdão.**
> Na ação privada, atacar por **renúncia** ao direito de queixa, **perdão** aceito, ou **perempção** (art. 60 CPP — inércia do querelante, ex.: não comparecimento, não promoção do andamento por 30 dias) → extinção da punibilidade (art. 107, IV e V, CP).
> **Contra-tese:** ausência dos requisitos da perempção; a diligência do querelante afasta a inércia.

> **Tese defensiva 5 — Requalificação da natureza da ação.**
> Sustentar que o tipo é **condicionado/privado** (não incondicionado), reabrindo a via da decadência/representação — ou o inverso na ótica acusatória.
> **Contra-tese (acusação):** o tipo é **incondicionado** por lei ou por virada jurisprudencial (ex.: Súmula 542; Lei 13.718/18 na dignidade sexual).

---

## 📌 Súmulas e dispositivos-âncora (sob o Citation Gate)

Cite com segurança **dispositivos de lei** e a **súmula notória** abaixo; para **qualquer número de HC/REsp/RE, informativo ou tema**, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` / `verificacao-citacoes`.

- **Súmula 542/STJ** — "A ação penal relativa ao crime de lesão corporal resultante de violência doméstica contra a mulher é **pública incondicionada**." (notória; ainda assim conferir vigência).
- **Súmula 594/STJ [NÃO VERIFICADO]** — sobre a natureza da ação nos crimes contra a dignidade sexual/vulnerável — **conferir número, teor e vigência** antes de citar.
- **ADI 4.424/DF (STF) [NÃO VERIFICADO]** — fundamento constitucional da incondicionalidade na lesão em violência doméstica — **conferir**.
- **Dispositivos seguros:** art. 100, 102, 103, 107 (IV e V) CP; arts. 24, 25, 29, 38, 60 CPP; art. 88 Lei 9.099/95; art. 147, p.u., CP; art. 145 CP; art. 16 Lei 11.340/06.

> **Regra do gate:** prefira **ensinar a tese e citar o dispositivo** a arriscar um número de acórdão. Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência inventada por IA.

---

## 🧩 Roteiro de análise (ordem de raciocínio)

```
1) Identificar o TIPO PENAL imputado (subsunção precisa).
2) Definir a NATUREZA da ação (incondicionada / condicionada / privada)
   — por LEI; na omissão, incondicionada (art. 100 CP).
   → Verificar EXCEÇÕES de contexto (violência doméstica → Súmula 542;
     dignidade sexual → Lei 13.718/18).
3) Se INCONDICIONADA → não há decadência/representação; migrar para
   PRESCRIÇÃO (extincao-punibilidade-prescricao / calculadora-prescricao).
4) Se CONDICIONADA ou PRIVADA:
   a) Fixar o TERMO INICIAL = ciência da AUTORIA (art. 38 CPP).
   b) Contar 6 meses pela regra material (art. 10 CP — dia inicial incluso,
      improrrogável). → decadência? [calculadora-decadencia a implementar]
   c) Houve representação/queixa VÁLIDA e TEMPESTIVA? (forma informal basta)
   d) Houve RETRATAÇÃO antes do oferecimento da denúncia? (art. 25 CPP;
      art. 16 Lei 11.340/06 se condicionado em viol. doméstica)
   e) Na privada: renúncia, perdão, perempção (art. 60 CPP)?
5) Concluir: cabe EXTINÇÃO da punibilidade (art. 107, IV/V, CP)?
   → DEFESA pede; ACUSAÇÃO afere antes de denunciar.
6) HANDOFF: retratação → skill `retratacao-representacao` (peça);
   prescrição → `extincao-punibilidade-prescricao`.
7) GATE de citações + revisão humana obrigatória.
```

---

## ✅ Checklist e anti-padrões

**Checklist:**
- [ ] **Tipo penal** subsumido corretamente antes de tudo?
- [ ] **Natureza da ação** definida por lei (não por intuição), com exceções de contexto conferidas?
- [ ] **Súmula 542/STJ** aplicada corretamente (lesão em viol. doméstica = **incondicionada**; ameaça = **condicionada**)?
- [ ] **Termo inicial** da decadência = ciência da **autoria** (art. 38 CPP), não a data do fato?
- [ ] Prazo de 6 meses contado pela regra **material** (art. 10 CP — dia inicial incluso, improrrogável)?
- [ ] **Representação** existe e é **inequívoca** (forma informal aceita)? Tempestiva?
- [ ] **Retratação** anterior ao **oferecimento** da denúncia (art. 25 / art. 102 CP)? Rito do art. 16 da Lei 11.340/06 observado, se cabível?
- [ ] Ação privada: **renúncia / perdão / perempção** (art. 60 CPP) verificados?
- [ ] Distinguiu **decadência** (direito da vítima) de **prescrição** (direito do Estado)?
- [ ] **Polo** conferido (`company.md`) — objetivo defensivo × acusatório ajustado?
- [ ] Súmulas/precedentes passados pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- **Confundir decadência com prescrição** — marcos, natureza e fundamentos são distintos.
- Contar o prazo da **data do fato** quando a **autoria** só foi conhecida depois.
- Aplicar prazo **processual** (prorrogável) à decadência, que é **material** e **improrrogável**.
- Exigir **forma sacramental** da representação — a manifestação inequívoca basta.
- Tratar **lesão em violência doméstica** como condicionada (é **incondicionada** — Súmula 542) **ou**, ao contrário, tratar **ameaça** em viol. doméstica como incondicionada (é **condicionada**).
- Admitir **retratação após o oferecimento** da denúncia (é irretratável — art. 102 CP).
- Presumir ação **privada** onde a lei não a torna privada — a regra é a pública incondicionada (art. 100 CP).
- Citar número de acórdão/informativo **de memória** — passe pelo gate.

---

## Lembretes finais

- **Natureza da ação primeiro; prazo depois.** É a classificação que abre (ou fecha) a porta da decadência.
- **6 meses da ciência da AUTORIA** (art. 38 CPP), prazo **material** e **improrrogável** (art. 10 CP).
- **Decadência ≠ prescrição** — não misturar (handoff para `extincao-punibilidade-prescricao` / `calculadora-prescricao`).
- **Súmula 542/STJ:** lesão em viol. doméstica é **incondicionada**; **ameaça** segue **condicionada** (art. 147, p.u.).
- **Retratação:** até o **oferecimento** da denúncia (art. 25 CPP; art. 102 CP); rito do art. 16 da Lei 11.340/06 quando condicionado.
- **Handoff de peça:** decidir se cabe é aqui; **redigir a retratação** é na `retratacao-representacao`.
- **Polo:** skill de uso por **ambos os polos** — o roteador confere o polo em `company.md` e ajusta o objetivo (defesa pede extinção; MP/assistente aferem a condição antes de agir).

## Nota de conformidade

Rascunho técnico sob **revisão humana obrigatória** — nenhuma conclusão sobre natureza da ação, tempestividade ou decadência deve ser peticionada sem conferência do advogado/membro responsável nos autos concretos. **Citation Gate inegociável:** dispositivos de lei e a Súmula 542/STJ podem ser citados com certeza; **qualquer** número de HC/REsp/RE, informativo ou tema marcado **[NÃO VERIFICADO]** deve ser conferido via `jurisprudencia-stj-stf` antes do uso. **Ética por polo:** advocacia — Estatuto da OAB, CED e Provimento 205/2021; Ministério Público — art. 127 CF e regramento do CNMP; Defensoria — LC 80/94. A responsabilidade final pela tese e pela peça é sempre do profissional habilitado.

**Padrão de redação:** ao converter a análise em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
