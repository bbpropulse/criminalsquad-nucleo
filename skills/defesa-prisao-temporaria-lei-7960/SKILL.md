---
name: defesa-prisao-temporaria-lei-7960
description: >-
  Use ao impugnar a PRISÃO TEMPORÁRIA (Lei 7.960/1989) — atacar a ausência dos requisitos
  cumulativos do art. 1º (fundadas razões de autoria + imprescindibilidade para a investigação ou
  indeterminação do investigado), crime fora do rol do inc. III, falta de fundamentação concreta,
  excesso de prazo com soltura automática ao término, e conversão indevida em preventiva; via
  relaxamento, revogação e habeas corpus. Gatilhos: prisão… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, prisao-temporaria, cautelar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-prisao-temporaria-lei-7960", "defesa prisao", "temporaria 7960"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-prisao-temporaria-lei-7960"]
---

# Prisão temporária — Defesa (Lei 7.960/89)

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

Esta skill orienta a **defesa técnica** contra a **prisão temporária**, cautelar pessoal criada pela **Lei 7.960/1989** e utilizável **exclusivamente na fase de investigação** (inquérito policial), para assegurar a colheita de elementos ou a identificação/localização do investigado. Diferente da **preventiva** (CPP, arts. 311-316), que serve ao processo e tem prazo indeterminado, a temporária é **de prazo certo**, **antecipada** e **excepcional** — e é justamente nessa excepcionalidade e na taxatividade de seus requisitos que a defesa encontra as maiores alavancas.

> **Lição central:** a temporária só é legítima quando presentes, **de forma cumulativa e concretamente fundamentada**, o **fumus commissi delicti** (fundadas razões de autoria ou participação — inc. III) **somado** a pelo menos uma das **finalidades cautelares** (imprescindibilidade para a investigação — inc. I; ou investigado sem identidade/residência — inc. II) **e** o enquadramento do crime no **rol taxativo** do inc. III. Falhando **qualquer** desses três pilares, a prisão é **ilegal** e comporta **relaxamento/HC**. A gravidade abstrata do crime, o clamor público ou a mera conveniência da autoridade **não** substituem essa fundamentação.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 7.960/89 foi objeto de **ADIs no STF (ADI 4.109 e ADI 3.360 — [NÃO VERIFICADO])** que discutem a constitucionalidade e a **interpretação conforme** de seus requisitos (notadamente a **cumulatividade** entre o inc. III e os incs. I/II). Antes de afirmar como se lê o art. 1º ou qual o alcance do **rol de crimes** do inc. III, **confira tese + dispositivo + situação atual do julgamento** pela skill `jurisprudencia-stj-stf`. O **rol** também sofreu acréscimos por leis posteriores (crimes hediondos e equiparados — Lei 8.072/90) — verifique a **redação vigente** antes de sustentar que determinado crime está fora dele. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 1º da Lei 7.960/1989** — hipóteses de cabimento em três incisos:
  - **I** — quando **imprescindível para as investigações** do inquérito policial;
  - **II** — quando o **indiciado não tiver residência fixa** ou **não fornecer elementos para esclarecer sua identidade**;
  - **III** — quando houver **fundadas razões**, conforme prova admitida, de **autoria ou participação** do indiciado em um dos **crimes do rol** (homicídio doloso, sequestro/cárcere privado, roubo, extorsão, extorsão mediante sequestro, estupro, epidemia com morte, envenenamento de água potável, associação criminosa/quadrilha, genocídio, tráfico de drogas, crimes contra o sistema financeiro, entre outros — **conferir a redação vigente e os acréscimos** via `jurisprudencia-stj-stf`).
- **Interpretação dominante (interpretação conforme — CONFERIR):** os requisitos são **cumulativos** — exige-se o inc. III (crime do rol + fundadas razões) **somado** ao inc. I **ou** ao inc. II. Não basta o crime estar no rol; é preciso a **necessidade cautelar** concreta.
- **Art. 2º da Lei 7.960/1989** — **prazo de 5 dias, prorrogável por igual período** (5 + 5) em caso de extrema e comprovada necessidade; decretação **por ordem judicial fundamentada**, mediante representação da autoridade policial ou requerimento do MP (**a temporária não pode ser decretada de ofício**); soltura ao término, **independentemente de novo alvará**, salvo decretação de preventiva.
- **Art. 2º, §4º, da Lei 8.072/1990 (Crimes Hediondos)** — nos **crimes hediondos e equiparados**, o prazo da temporária é de **30 dias, prorrogável por igual período** (30 + 30) em caso de extrema e comprovada necessidade.
- **CPP, arts. 311-316** — **prisão preventiva** (interface): a temporária **só serve à investigação**; oferecida a denúncia, ou para tutelar o processo, o instrumento é a **preventiva**, com requisitos próprios (não se "renova" temporária).
- **CPP, art. 5º, LXV e LXVI, CF** — **relaxamento** da prisão ilegal e **liberdade provisória**; **habeas corpus** (CF, art. 5º, LXVIII; CPP, arts. 647 e ss.).
- **Direitos da pessoa presa** — CF, art. 5º (LXII, LXIII, LXIV): comunicação da prisão ao juiz e à família, assistência de advogado, identificação dos responsáveis, silêncio; **audiência de custódia** (CPP, art. 310, e Res. CNJ) para controle imediato da legalidade.

## Anatomia da medida — roteiro de subsunção (o que a defesa disseca)

Teste a decretação **pilar por pilar**. A ausência de **qualquer** um contamina a prisão:

1. **Fase correta?** Só cabe **na investigação** (inquérito). **Não** existe temporária no curso da ação penal — se já há denúncia recebida, a temporária é **inadequada** (o instrumento seria a preventiva).
2. **Legitimidade e forma?** Exige **representação da autoridade policial** ou **requerimento do MP** e **decisão judicial fundamentada** — **vedada a decretação de ofício** pelo juiz.
3. **Crime no rol (inc. III)?** O tipo imputado consta do **rol taxativo**? Se **não**, atipicidade da via cautelar → **ilegalidade**. (Conferir rol vigente.)
4. **Fundadas razões de autoria/participação (inc. III)?** Há lastro probatório mínimo apontando o investigado, ou apenas conjectura/denúncia anônima não corroborada?
5. **Finalidade cautelar (inc. I ou II)?** A prisão é **imprescindível** para uma diligência concreta (identificada e datada), **ou** o investigado é **indeterminado/sem residência**? Necessidade **abstrata** não serve.
6. **Cumulatividade e proporcionalidade?** Presentes o inc. III **e** o inc. I/II, **de forma cumulativa**, com **fundamentação concreta** (não gravidade em tese, clamor ou conveniência)? Cabível **medida menos gravosa**?
7. **Prazo?** Correto o prazo aplicável (5+5 comum; 30+30 hediondo)? A **prorrogação** foi **fundamentada** em extrema e comprovada necessidade? Houve **soltura automática** ao término?

**Método:** a defesa ataca preferencialmente (3) o **enquadramento no rol**, (5) a **finalidade cautelar não demonstrada**, (6) a **falta de cumulatividade/fundamentação** e (7) o **excesso de prazo** — cada um, isoladamente, basta para a ilegalidade.

## Catálogo de teses defensivas

1. **Ausência de crime do rol (inc. III)** — imputação por tipo **fora** da lista taxativa → cabimento vedado; **relaxamento** por ilegalidade. (Conferir rol vigente via gate.)
2. **Falta de fundadas razões de autoria/participação** — decretação lastreada em **denúncia anônima isolada**, ilação ou "necessidade da investigação" genérica, sem indícios concretos que apontem o investigado.
3. **Ausência de finalidade cautelar concreta (incs. I/II)** — a decisão não indica **qual diligência** a prisão viabiliza nem por que é **imprescindível**; investigado **com residência fixa e identidade certa** afasta o inc. II.
4. **Falta de cumulatividade** — presença de um só requisito (só o crime do rol, ou só "conveniência"); a leitura conforme exige **inc. III + inc. I ou II** (CONFERIR interpretação atual).
5. **Fundamentação abstrata/inidônea** — gravidade em tese do delito, **clamor social**, repercussão na mídia ou "credibilidade das instituições" **não** fundamentam cautelar (dever de fundamentação — CF, art. 93, IX).
6. **Decretação de ofício / sem representação ou requerimento** — vício de iniciativa; nulidade.
7. **Inadequação da fase** — temporária pedida/decretada **após** a denúncia ou para tutelar o processo (função de preventiva) — desvio de finalidade.
8. **Excesso de prazo** — ultrapassado o prazo legal (5+5 ou 30+30) **sem** soltura, a prisão vira **constrangimento ilegal** sanável por **relaxamento imediato/HC**; a soltura ao término é **automática**, independe de alvará.
9. **Prorrogação imotivada** — a prorrogação exige **extrema e comprovada necessidade** especificamente fundamentada; renovação "automática" é ilegal.
10. **Conversão indevida em preventiva** — ao fim da temporária, converter em preventiva **sem** os requisitos autônomos dos arts. 312-313 do CPP e **sem** contraditório é ilegal; impugnar a "preventiva de arrasto".
11. **Proporcionalidade e cautelares diversas** — cabimento de **medidas alternativas** (CPP, art. 319) menos gravosas; a prisão é *ultima ratio*.
12. **Violação de direitos da pessoa presa** — ausência de comunicação ao juiz/família, de assistência de advogado, de nota de culpa ou de **audiência de custódia** → ilegalidade/relaxamento.
13. **Ilicitude probatória derivada** — provas obtidas **durante** prisão ilegal podem ser contaminadas (CPP, art. 157; teoria dos frutos da árvore envenenada) — impugnar seu aproveitamento.

## Contra-teses da acusação (antecipar)

- **Imprescindibilidade demonstrada** — a prisão viabiliza diligências específicas (busca, oitivas, quebra de resistência à identificação) que se frustrariam com o investigado solto.
- **Fundadas razões presentes** — indícios de autoria corroborados (interceptações, reconhecimento, apreensões) e crime **inequivocamente** no rol.
- **Investigado sem residência/identidade** — hipótese do inc. II autônoma para viabilizar a persecução.
- **Gravidade concreta** (não abstrata) — modus operandi, organização, risco às investigações.
- **Prazo hediondo** — nos crimes do art. 2º, §4º da Lei 8.072/90, os 30+30 dias legitimam prazo mais longo.

**Rebate:** exigir da decisão a **indicação concreta e datada** da diligência imprescindível; distinguir **gravidade concreta** (que precisa de base fática) de **gravidade abstrata** (inidônea); demonstrar **residência e identidade certas** para derrubar o inc. II; e cobrar a **cumulatividade** dos requisitos, não a mera presença isolada de um deles.

## Distinção de figuras próximas

| Cautelar | Fase / função | Prazo | Uso pela defesa |
|---|---|---|---|
| **Prisão temporária (Lei 7.960/89)** | **Investigação**; viabiliza o inquérito ou a identificação | **Certo** (5+5; 30+30 hediondo) | Atacar rol, finalidade, cumulatividade e **excesso de prazo** (soltura automática) |
| **Prisão preventiva (CPP 311-316)** | Investigação **ou** processo; tutela ordem pública/econômica, instrução, aplicação da lei penal | **Indeterminado** (revisão periódica) | Impugnar **conversão indevida** ao fim da temporária, sem requisitos autônomos |
| **Prisão em flagrante (CPP 301-310)** | Momento do delito; controle na custódia | Até a **audiência de custódia** | Relaxamento se ilegal; não se "soma" à temporária |
| **Medidas cautelares diversas (CPP 319)** | Alternativas à prisão | Enquanto necessárias | Sustentar como **substitutivo proporcional** (*ultima ratio* da prisão) |

## Jurisprudência, súmulas e ADIs (sob Citation Gate)

> **Regra:** **não cite acórdão, tese, tema ou súmula de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça. Há sanção real por jurisprudência inventada por IA.

- **ADI 4.109 e ADI 3.360 / STF** — questionam a Lei 7.960/89 e orientam a **interpretação conforme** (cumulatividade e concretude dos requisitos). **[NÃO VERIFICADO]** — confirmar números, relatoria e **resultado atual** do julgamento antes de citar.
- **Rol do art. 1º, III** — a **lista exata** e seus acréscimos (crimes hediondos e equiparados) devem ser conferidos na **redação vigente**; não afirmar que um crime está "fora do rol" sem checar. **[NÃO VERIFICADO]**.
- **Excesso de prazo, prorrogação e soltura automática** — há orientação consolidada sobre **relaxamento** por excesso, mas a **redação de eventual súmula/tese** e sua aplicação ao caso passam pelo gate. **[NÃO VERIFICADO]**.
- **Fundamentação inidônea (gravidade abstrata/clamor)** — a vedação a fundamentar cautelar apenas na gravidade em tese é reiterada, porém **confirme o precedente** aplicável antes de citar número. **[NÃO VERIFICADO]**.

## Checklist e anti-padrões

- [ ] A prisão foi decretada **na fase de investigação** (não após a denúncia)?
- [ ] Houve **representação da autoridade policial** ou **requerimento do MP** e **decisão fundamentada** (não de ofício)?
- [ ] O crime imputado **consta do rol** do inc. III (redação vigente conferida)?
- [ ] Há **fundadas razões** de autoria/participação (indícios concretos, não denúncia anônima isolada)?
- [ ] A decisão indica a **finalidade cautelar concreta** (imprescindibilidade — inc. I; ou indeterminação — inc. II)?
- [ ] Os requisitos foram tratados de forma **cumulativa** (inc. III **+** inc. I/II), com **fundamentação concreta**?
- [ ] O **prazo** aplicado é o correto (5+5 comum; 30+30 hediondo) e a **prorrogação** foi motivada por extrema e comprovada necessidade?
- [ ] Houve (ou deve haver) **soltura automática** ao término, independentemente de alvará?
- [ ] A eventual **conversão em preventiva** tem requisitos **autônomos** (CPP 312-313) e contraditório?
- [ ] **Direitos da pessoa presa** e **audiência de custódia** foram observados?
- [ ] Toda súmula/ADI/precedente passou por `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aceitar a temporária apenas porque **o crime está no rol**, sem exigir a **finalidade cautelar** e a **cumulatividade**.
- Tratar **gravidade abstrata, clamor público ou repercussão** como fundamentação válida.
- Não impugnar o **excesso de prazo** — a soltura ao término é **automática**, independe de novo pedido de alvará.
- Confundir prazos: **5+5** é o comum; **30+30** é **só** para hediondos/equiparados (Lei 8.072/90, art. 2º, §4º).
- Deixar passar a **conversão em preventiva** sem requisitos próprios (a temporária **não** se "prorroga" como preventiva).
- Aplicar a temporária **fora da fase de investigação** ou por **decretação de ofício** sem impugnar o vício.
- Citar **ADI, tema ou súmula** sobre a Lei 7.960 **de memória** — passe pelo gate.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica se **inverte** — cabe demonstrar, com fundamentação concreta, a presença **cumulativa** dos requisitos e da finalidade cautelar; espelhar as teses acima como pontos a **provar**, não a atacar.
- **Citation Gate:** nenhuma súmula, ADI, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do investigado/assistido não vão a repositório público.

## Lembretes finais

- **Três pilares cumulativos:** crime do **rol** (inc. III) + **fundadas razões** de autoria + **finalidade cautelar** concreta (inc. I ou II). Falta de um → **ilegalidade**.
- **Só na investigação** e **nunca de ofício** — exige representação/requerimento e decisão fundamentada.
- **Prazo certo:** 5+5 (comum) e 30+30 (hediondo); **soltura automática** ao término.
- **Gravidade abstrata e clamor não fundamentam** — cobre concretude (CF, art. 93, IX).
- **Vigência:** confira o **rol vigente** e o **estado das ADIs 4.109/3.360** antes de afirmar cabimento.
- **Sem jurisprudência de memória** — tudo passa por `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça (relaxamento, revogação, habeas corpus), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
