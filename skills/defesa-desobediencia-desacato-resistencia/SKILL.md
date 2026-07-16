---
name: defesa-desobediencia-desacato-resistencia
description: >-
  Use na defesa de particular acusado de RESISTÊNCIA (art. 329 CP), DESOBEDIÊNCIA (art. 330 CP) ou
  DESACATO (art. 331 CP) — a contraparte particular dos crimes funcionais. Gatilhos: resistência,
  desobediência, desacato, oposição a ordem de funcionário, art. 329/330/331 CP, ordem legal/ilegal,
  sanção administrativa autônoma…. Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-administracao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-desobediencia-desacato-resistencia"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-desobediencia-desacato-resistencia", "defesa desobediencia", "desacato resistencia"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa de Resistência, Desobediência e Desacato (arts. 329 a 331 do CP)

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

Esta skill orienta a **defesa do particular** acusado dos três crimes de particular contra a Administração Pública em geral: **resistência** (art. 329), **desobediência** (art. 330) e **desacato** (art. 331). São os tipos que aparecem em quase toda prisão em flagrante por abordagem, blitz, desocupação ou fiscalização — frequentemente **empilhados** na denúncia (resistência + desacato + lesão contra a autoridade), e frequentemente atípicos ou absorvidos.

> **Lição central:** antes de discutir mérito, **decomponha a imputação** e ataque o **elemento normativo de cada tipo** — na resistência e na desobediência, a **legalidade da ordem/ato**; no desacato, o **dolo específico de menosprezar** e a atipicidade da mera exaltação. Ordem ilegal não gera dever de obediência; palavrão dito no calor da prisão, sem ânimo de humilhar, não é desacato. E cuide do **concurso aparente**: um único episódio não vira três crimes automaticamente.

> **Cautela de vigência (obrigatória antes de citar):** a tese de **atipicidade do desacato** por incompatibilidade com o art. 13 da Convenção Americana (CADH) teve **oscilação jurisprudencial** — houve decisão de turma do STJ acolhendo a atipicidade e posterior **superação** pela Terceira Seção do STJ e pelo STF (ADPF sobre o tema). **Confirme o estado atual da controvérsia e qualquer número de HC/REsp/ADPF/tema via a skill `jurisprudencia-stj-stf` antes de fundamentar** — aqui a tese é ensinada como argumento de convencionalidade, não como jurisprudência consolidada a favor. Confira também a redação vigente dos arts. 329 a 331 do CP e de eventuais leis especiais aplicáveis.

## Base legal

- **Art. 329, CP — Resistência:** opor-se à execução de ato legal, mediante **violência ou ameaça** a funcionário competente ou a quem lhe presta auxílio. §1º: forma qualificada se o ato não se executa por causa da resistência. §2º: as penas são cumuláveis com as da violência (lesão etc.).
- **Art. 330, CP — Desobediência:** **desobedecer** a ordem legal de funcionário público. Crime de menor gravidade (detenção de 15 dias a 6 meses e multa).
- **Art. 331, CP — Desacato:** **desacatar** funcionário público no exercício da função ou em razão dela.
- **Art. 13 da Convenção Americana de Direitos Humanos (Pacto de San José da Costa Rica — Dec. 678/92):** liberdade de pensamento e expressão — núcleo da tese de inconvencionalidade do desacato.
- **CF, art. 5º, IV e IX** — livre manifestação do pensamento e expressão; **art. 5º, LVII/LXI** — legalidade da prisão/abordagem.
- **Súmula Vinculante 11/STF** — algemas só com justificativa (relevante quando a "resistência" é resposta a abuso na abordagem).
- **Lei 13.869/2019 (Abuso de Autoridade)** e **excludentes do art. 23 CP** — quando a reação do cidadão responde a ato ilegal/abusivo do agente.

## Roteiro-mãe (aplicar aos três)

1. **Decomponha a denúncia:** identifique cada crime imputado e o **mesmo substrato fático**. Muitas vezes há um só episódio (a prisão) transformado em três tipos.
2. **Legalidade do ato/ordem:** resistência e desobediência **só existem contra ato/ordem LEGAL**. Ato ilegal, abusivo ou de autoridade incompetente → **atipicidade**. Ataque a legalidade formal (competência, forma) e material (finalidade, proporcionalidade).
3. **Dolo específico:** no desacato, exige-se **vontade de menosprezar/humilhar** a função. Palavra dita em revolta, medo, dor ou embriaguez, sem esse ânimo, é **atípica**.
4. **Concurso aparente / absorção:** verifique se um tipo absorve o outro (consunção) ou se é o mesmo fato punido em duplicidade (*ne bis in idem*).
5. **Excludentes:** legítima defesa contra abuso, estado de necessidade, inexigibilidade de conduta diversa (art. 23 CP; reação a abuso de autoridade — Lei 13.869/19).
6. **Prova:** a acusação frequentemente se apoia **só na palavra dos agentes**. Explore contradições, ausência de testemunhas civis, câmeras corporais, laudo de embriaguez.

---

## 1) RESISTÊNCIA (art. 329)

**Elementos:** oposição **ativa** + **violência ou ameaça** (grave) à pessoa + contra ato **legal** de funcionário competente + dolo.

**Teses de defesa:**
- **Resistência passiva não é crime.** Agarrar-se a um poste, deixar o corpo mole, esperneio sem agressão, fuga — **não** configuram resistência (falta violência/ameaça à pessoa). É atipicidade.
- **Ato ilegal → atipicidade.** Se a abordagem/prisão era ilegal (sem fundada suspeita, sem mandado quando exigido, com abuso), não há dever de submissão; a reação pode ser **legítima defesa** (art. 25 CP).
- **Violência dirigida à coisa, não à pessoa** → não é o núcleo do 329 (avaliar dano, não resistência).
- **Ausência de dolo de opor-se ao ato:** movimento reflexo, desequilíbrio, tentativa de proteção do próprio corpo contra excesso.
- **§2º (cumulação com a violência):** a lesão corporal contra o agente é **crime autônomo** cumulado — mas se **não houve lesão** (ou foi ínfima), a imputação de lesão deve cair, restando discutir só o 329.
- **Bagatela / exaltação:** oposição mínima, sem risco real, pode reclamar atipicidade material (avaliar caso a caso; conferir posição atual sobre insignificância em crimes contra a Administração via `jurisprudencia-stj-stf`).

**Contra-tese (acusação):** houve violência/ameaça idônea a impedir o ato; o ato era legal e o agente competente; o dolo de resistir está na conduta de enfrentar fisicamente a prisão.

---

## 2) DESOBEDIÊNCIA (art. 330)

**Elementos:** descumprir **ordem** (não mero pedido) + **legal** + emanada de funcionário **competente** + dirigida **diretamente** ao destinatário + dolo.

**Teses de defesa:**
- **A grande tese — sanção administrativa autônoma afasta o crime.** Se a norma que impõe a ordem já comina **sanção específica** (multa, apreensão, condução) **sem ressalvar** a punição penal cumulativa, **não há desobediência** (princípio da subsidiariedade / *ultima ratio*). Ex. clássico: recusa em soprar o etilômetro/entregar documento no trânsito — há sanção administrativa própria no CTB. **Tese central desta skill** — mas **confirme a orientação atual do STJ/STF sobre a exigência (ou não) de ressalva expressa** via `jurisprudencia-stj-stf`.
- **Ordem ilegal ou de autoridade incompetente → atipicidade.** Ninguém deve obedecer a ordem manifestamente ilegal.
- **Ordem não recebida pessoal e diretamente:** ordem genérica, por terceiro, ou não cientificada ao destinatário → sem dolo de desobedecer.
- **Direito de não produzir prova contra si (nemo tenetur):** recusa a condutas autoincriminatórias (bafômetro, reconstituição, fornecer material) **não** é desobediência.
- **Impossibilidade material de cumprir** a ordem → afasta o dolo.
- **Mero descumprimento cível/administrativo** (ex.: descumprir decisão judicial com meios coercitivos próprios) tende a não configurar o crime — avaliar.

**Contra-tese (acusação):** a ordem era legal, direta e específica; não havia sanção administrativa que excluísse a penal; o agente tinha dever de obedecer e o descumprimento foi voluntário.

---

## 3) DESACATO (art. 331) — inclui a tese CIDH

**Elementos:** ofender/humilhar (palavra ou ato) + funcionário **no exercício** da função ou **em razão dela** + **presença** do funcionário + **dolo específico de menosprezar/desprestigiar** a função pública.

**Teses de defesa:**
- **Ausência de dolo específico (a tese mais forte no dia a dia).** Palavrão, grito ou desabafo proferido sob **exaltação de ânimo, revolta, medo, dor, embriaguez** — sem vontade de humilhar a função — é **atípico**. A jurisprudência costuma exigir o *animus* de desprestigiar; a mera grosseria ou reação emocional não basta.
- **Embriaguez que retira a consciência da ofensa** → afasta o dolo específico (não confundir com embriaguez voluntária que, em regra, não exclui a imputabilidade — a tese aqui é sobre o **elemento subjetivo especial**, não sobre a imputabilidade).
- **Ausência de presença/ nexo funcional:** ofensa feita fora da presença do agente, ou não relacionada à função, migra para **injúria** (art. 140) — outro crime, de ação penal e consequências diversas.
- **Atipicidade por convencionalidade (tese CIDH):** a criminalização do desacato conflita com o **art. 13 da CADH** e com a jurisprudência da **Corte/Comissão Interamericana**, que veem *leis de desacato* como instrumento de silenciamento do cidadão frente ao poder — restringindo desproporcionalmente a liberdade de expressão. Sustentar o **controle de convencionalidade** (afastamento do tipo por incompatibilidade com tratado de direitos humanos com status supralegal). **[NÃO VERIFICADO — estado atual]:** houve decisão de turma do STJ acolhendo a atipicidade e **posterior superação** pela Terceira Seção e pelo STF; **confirme o cenário atual e qualquer número de precedente/ADPF/tema via `jurisprudencia-stj-stf` antes de citar.** Ainda assim, a tese preserva valor como **argumento de proporcionalidade e liberdade de expressão** e para modulação da resposta penal.
- **Direito de crítica e liberdade de expressão (CF, art. 5º, IV e IX):** crítica dura, mas dirigida ao **ato** e não à pessoa, insere-se no exercício regular de direito.
- **Bagatela imprópria / desproporção:** episódio isolado, sem repercussão, réu primário → sustentar mínima ou nula ofensividade e desproporção da resposta penal.

**Contra-tese (acusação):** o STF/STJ (atualmente) reconhecem a **constitucionalidade e convencionalidade** do desacato; houve dolo de menosprezar demonstrado pelo contexto; a proteção do tipo é a **função pública**, não a honra do agente, o que legitima a criminalização.

---

## Concurso aparente e absorção (ponto que mais rende à defesa)

- **Resistência absorve o desacato?** Quando as ofensas integram a própria oposição violenta, discute-se **consunção** (o desacato como fase da resistência). **Divergente** — sustentar a absorção *in dubio pro reo*, mas conferir a orientação atual via `jurisprudencia-stj-stf`.
- **Ne bis in idem:** um único xingamento não pode gerar desacato **e** injúria; um único episódio de oposição não é resistência **e** desobediência.
- **Desobediência × resistência:** havendo **violência/ameaça**, é resistência (a desobediência é a oposição **sem** violência) — não os dois.
- **Cumulação legítima:** a lesão corporal contra o agente (art. 129) é autônoma e cumula com a resistência (art. 329, §2º) — aqui a defesa ataca a **existência/gravidade** da lesão, não a cumulação em tese.

## Competência e rito (impacto prático na defesa)

- **Desobediência** (pena máxima 6 meses) e **desacato** e **resistência simples** podem atrair o **JECrim** (Lei 9.099/95) e seus institutos despenalizadores — **transação penal**, **suspensão condicional do processo**, **ANPP** (art. 28-A CPP) conforme o caso. Avaliar **sempre** o cabimento desses institutos como estratégia (ver skills `anpp-acordo` / justiça negocial e a de composição, se existirem).
- Se há concurso com crime mais grave (lesão qualificada, ato contra autoridade específica), reavaliar competência e rito.

## Prova e narrativa (o campo de batalha real)

- A condenação costuma apoiar-se **exclusivamente na palavra dos policiais/agentes**. Explore: ausência de testemunhas civis; imagens de câmera corporal (requerer a preservação e a juntada); boletim/ocorrência com narrativa padronizada; laudo de embriaguez que ajuda a afastar o dolo específico do desacato.
- **Contextualize o episódio:** abordagem tensa, uso de força, algemas sem justificativa (SV 11) — o comportamento do cidadão é **reação**, não crime autônomo.
- **Teoria do caso única:** cidadão comum, assustado/revoltado com abordagem, sem intenção de menosprezar a função nem de opor-se a ato legal.

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula Vinculante 11/STF** (algemas) — notória; útil quando a "resistência" responde a constrangimento indevido. Citar com segurança.
- **Art. 13 CADH / Pacto de San José (Dec. 678/92)** — dispositivo de tratado; citar com segurança como base da tese de convencionalidade.
- **Qualquer número de HC/REsp/ADPF/Informativo/Tema** sobre atipicidade do desacato, sanção administrativa autônoma na desobediência, dolo específico ou absorção → **[NÃO VERIFICADO]**: **não cite de memória**; confirme antes via `jurisprudencia-stj-stf`. Prefira ensinar a **tese e o dispositivo** a arriscar o número do acórdão.

## Checklist de defesa

- [ ] **Decompôs** a denúncia e identificou concurso aparente / *bis in idem*?
- [ ] **Legalidade do ato/ordem** atacada (competência, forma, finalidade) na resistência e na desobediência?
- [ ] **Resistência passiva** ou **violência à coisa** → atipicidade sustentada?
- [ ] **Sanção administrativa autônoma** invocada na desobediência (ex.: trânsito), com conferência da orientação atual?
- [ ] ***Nemo tenetur*** levantado se a "ordem" era autoincriminatória?
- [ ] **Dolo específico de menosprezar** afastado no desacato (exaltação, medo, embriaguez, revolta)?
- [ ] **Tese CIDH / convencionalidade** apresentada como argumento de proporcionalidade — com o gate de verificação sobre o estado atual?
- [ ] **Ofensa fora da presença/função** → reclassificação para injúria (art. 140)?
- [ ] **Excludentes** (legítima defesa contra abuso, art. 23 CP; Lei 13.869/19) avaliadas?
- [ ] **Institutos despenalizadores** (transação, sursis processual, ANPP) requeridos quando cabíveis?
- [ ] **Prova** dos agentes confrontada (câmera corporal, testemunhas civis, laudo de embriaguez)?
- [ ] **Citações verificadas** (`jurisprudencia-stj-stf`) e **revisão humana** do advogado responsável?

## Anti-padrões (evitar)

- Aceitar a denúncia "empilhada" sem atacar o concurso aparente e o *bis in idem*.
- Tratar **resistência passiva** ou fuga como crime.
- Ignorar a **legalidade do ato** — é o coração da atipicidade em resistência e desobediência.
- Sustentar desacato sem discutir o **dolo específico** (é a tese que mais absolve na prática).
- **Citar a atipicidade do desacato como jurisprudência pacífica** — ela foi superada; use como tese de convencionalidade, sempre com o gate.
- Esquecer os **institutos do JECrim/ANPP** em crimes de baixa pena.
- Confundir **embriaguez** (que em regra não exclui imputabilidade) com o afastamento do **dolo específico** do desacato — argumentar no plano correto.

## Nota de conformidade

Rascunho técnico sob **revisão humana obrigatória** — nenhuma tese aqui substitui o exame do caso concreto e da prova. **Citation Gate inegociável:** todo dispositivo, súmula, tese e, sobretudo, **qualquer número de precedente** passa por `jurisprudencia-stj-stf` antes de ir à peça; na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência inventada por IA). Skill de **polo de defesa** (particular acusado) — o roteador deve **conferir o polo** da instituição (`_memory/company.md`): a ética varia conforme advocacia (OAB + Provimento 205/2021), Ministério Público (CNMP) ou Defensoria (LC 80/94). A responsabilidade final pela peça e pela estratégia é sempre do profissional (CED, art. 2º).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
