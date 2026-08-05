---
name: defesa-trafico-pessoas
description: >-
  Use ao construir a DEFESA no crime de TRÁFICO DE PESSOAS — art. 149-A do CP (Lei 13.344/2016):
  atipicidade por ausência de finalidade específica (elemento essencial), ausência dos meios de
  execução (grave ameaça, violência, coação, fraude ou abuso), relevância do consentimento válido,
  distinção da facilitação de migração e do aliciamento lícito, concurso x tipo único, competência
  (Justiça Federal quando transnacional) e… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, trafico-pessoas]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-trafico-pessoas", "defesa trafico", "trafico pessoas"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-trafico-pessoas"]
---

# Tráfico de pessoas — Defesa (CP art. 149-A)

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

Esta skill orienta a **defesa técnica** no crime de **tráfico de pessoas**, tipificado no **art. 149-A do CP** pela **Lei 13.344/2016** (Lei de Enfrentamento ao Tráfico de Pessoas), no Título I da Parte Especial (crimes contra a pessoa), Capítulo dos crimes contra a liberdade individual. O bem jurídico central é a **dignidade e a liberdade da pessoa humana** — a sua condição de sujeito, não de objeto de mercancia. A mesma lei **revogou os antigos arts. 231 e 231-A do CP** (tráfico internacional e interno de pessoa para fim de exploração sexual), unificando o tratamento e ampliando as finalidades para além do sexual. O entregável são **blocos de tese** para a resposta à acusação (CPP, art. 396-A), a instrução e os memoriais — a espinha argumentativa que atravessa as fases, no **polo defensivo**.

> **Lição central:** o tráfico de pessoas é um **tipo de três camadas** — **conduta + meio de execução + finalidade especial**. Não basta transportar, alojar ou aliciar alguém (conduta): é preciso que a conduta se dê **mediante grave ameaça, violência, coação, fraude ou abuso** (meio) **e** com **uma das cinco finalidades taxativas** (remoção de órgãos, trabalho escravo, servidão, exploração sexual ou adoção ilegal). Faltando **qualquer** das três camadas, **não há tráfico de pessoas**. A defesa se ganha atacando o **elo mais fraco da cadeia** — quase sempre a **finalidade** (elemento subjetivo do injusto) ou o **meio** (a fraude/abuso que a acusação presume do resultado). Sem finalidade típica provada, há **atipicidade** — ou, no máximo, migração de mão de obra, aliciamento lícito ou outro tipo menos grave.

> **Cautela de vigência (obrigatória antes de citar):** crime relativamente **recente** (Lei 13.344/2016, **datada de 6/10/2016**, com **vigência apenas ~novembro/2016** — a lei previu **30 dias de vacatio legis** no seu **art. 16**; a data da lei **não** é a data da vigência). Marco temporal relevante = **data da VIGÊNCIA** (não a data/publicação da lei), porque é ela que rege a irretroatividade da lei penal mais gravosa (CF, art. 5º, XL). **[conferir/NÃO VERIFICADO]** a data exata da entrada em vigor. Jurisprudência ainda **em consolidação** e **sem súmula específica** conhecida sobre o 149-A. Confira: (1) a **redação vigente** do art. 149-A, das finalidades e das causas de aumento/diminuição, antes de afirmar pena ou majorante; (2) fatos **anteriores à vigência** (~novembro/2016 — **não** 6/10/2016) não se tipificam como 149-A — aplica-se a lei do tempo do fato (arts. 231/231-A revogados, ou o crime residual pertinente), sob **irretroatividade da lei penal mais gravosa** (CF, art. 5º, XL); faça o cotejo de penas; (3) **todo precedente e a leitura do Protocolo de Palermo passam pela skill `jurisprudencia-stj-stf`** antes de ir à peça. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 149-A, CP (Lei 13.344/2016)** — tipo; pena de **reclusão de 4 a 8 anos, e multa** *(conferir redação/pena vigente)*.
- **Art. 149-A, §1º, CP** — causas de **aumento** (majorantes objetivas — funcionário público a pretexto da função; vítima criança/adolescente/idoso/pessoa com deficiência; prevalência de relação de parentesco, doméstica, de coabitação, hospitalidade, dependência econômica, autoridade ou superioridade hierárquica; vítima retirada do território nacional) *(conferir os incisos e a fração de aumento vigentes)*.
- **Art. 149-A, §2º, CP** — causa de **diminuição** de pena se o agente for **primário** e **não integrar organização criminosa** *(conferir a fração — redução vigente)*.
- **Art. 149, CP** — redução a condição análoga à de escravo (figura de fronteira; interface e risco de *bis in idem* quando a finalidade típica é "trabalho escravo").
- **Arts. 231 e 231-A, CP — REVOGADOS** pela Lei 13.344/2016; relevantes apenas para fatos anteriores (direito intertemporal).
- **CF, art. 109 (competência da Justiça Federal)** — quando o tráfico é **transnacional** (Protocolo de Palermo/tratado internacional) *(conferir a hipótese de fixação da competência)*.
- **Protocolo de Palermo** (Protocolo Adicional à Convenção de Palermo relativo à prevenção, repressão e punição do tráfico de pessoas — **Decreto 5.017/2004** *[conferir número/data]*) — fonte de interpretação e vetor da competência federal *(conferir aplicação via gate)*.
- **Arts. 158-A a 158-F, CPP** — cadeia de custódia (prova digital, financeira e de deslocamento).
- **Art. 109 do CP** — prescrição.

## Anatomia do tipo — roteiro de subsunção (as três camadas)

Teste **cada camada em separado**. A ausência de **qualquer uma** conduz à atipicidade ou à desclassificação.

1. **Conduta (verbos-núcleo, tipo misto alternativo):** **agenciar, aliciar, recrutar, transportar, transferir, comprar, alojar ou acolher** pessoa. Praticar mais de um verbo **contra a mesma vítima, no mesmo contexto**, configura **crime único** (não concurso) — relevante para a dosimetria.
2. **Meio de execução (elemento normativo):** a conduta deve ser praticada **mediante grave ameaça, violência, coação, fraude ou abuso**. **Sem o meio, não há tráfico** — recrutar ou transportar alguém **de forma livre e consentida**, ainda que para trabalho precário, **não** preenche o tipo (poderá configurar ilícito diverso, administrativo ou nenhum crime).
3. **Finalidade especial (elemento subjetivo do injusto — dolo específico):** a conduta deve visar **uma das cinco finalidades taxativas**:
   - (I) **remoção de órgãos, tecidos ou partes do corpo**;
   - (II) submetê-la a **trabalho em condições análogas à de escravo**;
   - (III) submetê-la a **qualquer tipo de servidão**;
   - (IV) **adoção ilegal**;
   - (V) **exploração sexual**.
4. **Consumação:** o crime é **formal** quanto à finalidade — **consuma-se com a conduta praticada mediante o meio e com o fim especial**, **independentemente** de a exploração efetivamente ocorrer. Isso tem duas faces: a acusação não precisa provar a exploração consumada, mas **precisa provar a finalidade** já presente no agir — e é aí que a defesa ataca.

**Método:** o tipo é uma corrente de três elos. Identifique o **elo mais frágil** no caso concreto e concentre o fogo. Na prática, a acusação costuma **presumir a finalidade a partir do resultado** (a pessoa acabou explorada) e **presumir o meio a partir da vulnerabilidade** (a pessoa era pobre/migrante) — duas inferências que a defesa deve **desmontar**, exigindo prova do **dolo de finalidade contemporâneo à conduta** e do **meio idôneo** (fraude/abuso concretos, não a mera situação social da vítima).

## Catálogo de teses defensivas

1. **Atipicidade por ausência da finalidade específica (tese-mãe).** Sem a prova de que a conduta visava **uma das cinco finalidades taxativas** já no momento do agir, **não há tráfico de pessoas**. Resultado precário superveniente **não retroage** para criar o dolo de finalidade. Absolvição (CPP, art. 386, III).
2. **Atipicidade por ausência do meio de execução.** Não demonstrados **grave ameaça, violência, coação, fraude ou abuso**, a conduta — mesmo de recrutamento/transporte/acolhimento — é **atípica** como tráfico. Migração ou trabalho consentidos, ainda que informais, não bastam.
3. **Consentimento válido e sua relevância.** Quando a pessoa **maior e capaz** anui de forma **livre e informada**, sem que o consentimento tenha sido **viciado** por fraude/coação/abuso, esse consentimento **descaracteriza o meio** e pode levar à atipicidade. *(Atenção: o consentimento é irrelevante/inoperante quando obtido por qualquer dos meios do tipo, ou quando a vítima é vulnerável — sustentar a validade exige demonstrar liberdade e informação reais; conferir a leitura do Protocolo de Palermo e da jurisprudência via gate.)*
4. **Distinção de facilitação de migração e aliciamento lícito.** Intermediar deslocamento, oferecer emprego no exterior ou agenciar mão de obra **não é**, por si, tráfico de pessoas — falta o meio e/ou a finalidade típica. Separar **auxílio à migração** (lícito ou, quando irregular, ilícito diverso) de **tráfico de pessoas**.
5. **Desclassificação para figura menos grave ou de fronteira.** Conforme o núcleo do fato: **redução a condição análoga à de escravo (149)**, **aliciamento de trabalhadores (arts. 206-207)**, crimes migratórios, ou ilícitos contra a liberdade sexual — evitando a subsunção mais gravosa ao 149-A.
6. **Crime único x concurso.** Vários verbos contra a **mesma vítima e contexto** = **crime único** (tipo misto alternativo). Impugnar a **multiplicação artificial** de imputações; discutir continuidade delitiva (art. 71) quando houver pluralidade real de vítimas/fatos.
7. **Afastamento das causas de aumento (§1º).** Negar a incidência de majorante mal fundamentada (relação de autoridade/parentesco não comprovada; condição da vítima não demonstrada; ausência de retirada do território nacional).
8. **Incidência da causa de diminuição (§2º).** Réu **primário** e que **não integra organização criminosa** → **redução de pena** *(fração a conferir)*; sustentar sua aplicação e afastar a alegação de vínculo com organização.
9. **Incompetência do juízo.** Sem **transnacionalidade** demonstrada (ou tratado/tema que a exija), a competência pode ser da **Justiça Estadual**, não da Federal — arguir e, se acolhida, discutir aproveitamento/anulação de atos.
10. **Fragilidade probatória.** Exigir prova da **conduta, do meio e da finalidade**; questionar autenticidade e **cadeia de custódia** de mensagens, contratos, registros de deslocamento e movimentações financeiras (arts. 158-A ss.); depoimento de vítima/testemunha sem corroboração.
11. **Extinção da punibilidade.** **Prescrição** (art. 109 CP) e demais causas — sempre verificar, sobretudo em investigações longas.
12. **Dosimetria.** Pena-base no mínimo bem fundamentada; afastar aumentos indevidos; aplicar a minorante do §2º; regime e substituição conforme o quantum final. O cálculo vai para a skill `calculadora-dosimetria`.

## Contra-teses da acusação (antecipar)

- **Finalidade inferida do resultado:** "a vítima foi explorada, logo o agente tinha essa finalidade". **Rebate:** a finalidade é **elemento subjetivo contemporâneo à conduta** — resultado posterior não a prova; exigir dolo demonstrado no momento do agir.
- **Meio presumido da vulnerabilidade:** "a vítima era pobre/migrante, logo houve abuso". **Rebate:** vulnerabilidade social **não é**, por si, o "abuso" do tipo; o abuso há de ser **concreto e instrumental** ao domínio da vítima.
- **Consentimento desconsiderado por completo:** "consentimento é sempre irrelevante". **Rebate:** o consentimento é inoperante **quando viciado pelos meios do tipo ou quando a vítima é vulnerável** — fora dessas hipóteses, a anuência livre e informada é relevante; distinguir o caso concreto.
- **Transnacionalidade automática:** "envolveu estrangeiro, logo é federal". **Rebate:** a competência federal exige **transnacionalidade efetiva** conforme o critério vigente — conferir.
- **Multiplicação de imputações** pelos vários verbos: **rebater** com o tipo misto alternativo (crime único).

A defesa deve **atacar cada inferência na origem**: separar prova de **conduta**, de **meio** e de **finalidade**, e recusar que uma seja deduzida da outra ou do simples contexto social da vítima.

## Distinção de figuras próximas

| Tipo | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Redução a condição análoga à de escravo (149)** | **submissão efetiva** a trabalho forçado/jornada exaustiva/servidão por dívida/condições degradantes — resultado consumado | Se houve exploração laboral **sem** o *iter* de tráfico (aliciar/transportar mediante meio + fim), capitular como 149, não 149-A; evitar *bis in idem* punindo o mesmo fato duas vezes |
| **Aliciamento de trabalhadores (arts. 206-207)** | recrutar/aliciar mão de obra (para o exterior ou de uma localidade a outra) **sem** os meios e finalidades do 149-A | Desclassificar quando o núcleo é recrutamento laboral sem coação/fraude/abuso e sem finalidade de exploração típica |
| **Crimes migratórios / facilitação de migração** | auxiliar entrada/saída/permanência irregular | Migração consentida ≠ tráfico; falta meio e/ou finalidade |
| **Crimes contra a liberdade sexual (213, 218-B etc.)** | ato/exploração sexual como núcleo, sem o *iter* de tráfico | Se o fato é o ato sexual e não o "traficar com fim de exploração sexual", capitular no tipo sexual próprio |
| **Arts. 231/231-A (revogados)** | tráfico para exploração sexual, na lei antiga | **Só** para fatos **anteriores à vigência da Lei 13.344/2016** (~novembro/2016, após a vacatio do art. 16 — **não** a data da lei, 6/10/2016) — cotejo intertemporal de penas (irretroatividade da lei mais grave) |

## Competência: quando é Justiça Federal

- A competência da **Justiça Federal** liga-se, em regra, à **transnacionalidade** do tráfico (execução que ultrapassa fronteiras, à luz do **Protocolo de Palermo** e do art. 109 da CF). Tráfico **interno**, sem elemento internacional, tende à **Justiça Estadual**.
- **Tese defensiva:** afastar a transnacionalidade não comprovada para deslocar (ou arguir a incompetência da) competência; discutir a validade dos atos praticados por juízo incompetente.
- **[NÃO VERIFICADO]** — o critério exato de fixação (mera potencialidade x efetiva internacionalidade) e os temas de repercussão/precedentes **devem ser conferidos** via `jurisprudencia-stj-stf` antes de afirmar competência.

## Prova: conduta, meio e finalidade

- **Individualizar** a prova de cada camada: documentos de recrutamento/contrato, registros de deslocamento (passagens, migração), comunicações (mensagens, redes), movimentações financeiras. Nenhum desses elementos, isolado, prova a **finalidade** — exigir o nexo.
- **Prova digital e financeira:** questionar **autenticidade, integridade e cadeia de custódia** (arts. 158-A a 158-F do CPP); impugnar quebra de sigilo sem autorização judicial (CF, art. 5º, XII; art. 157 CPP).
- **Palavra da vítima:** exigir **corroboração**; atentar para pressões, interesses e eventual induzimento no relato, sem revitimização.
- Ver skills de análise probatória e cadeia de custódia do acervo, e `leitura-interpretacao-laudo-pericial-defesa`, para o detalhamento técnico.

## Direito intertemporal (fatos anteriores à vigência da Lei 13.344/2016)

- O art. 149-A foi **introduzido pela Lei 13.344/2016** (que **revogou os arts. 231 e 231-A**), mas **só entrou em vigor após a vacatio legis** de 30 dias prevista no **art. 16 da própria lei** — ou seja, **~novembro/2016**, e **não** na data da lei (6/10/2016). O marco da irretroatividade é a **data da vigência** *[conferir/NÃO VERIFICADO a data exata]*. Para **fatos anteriores à vigência**, aplica-se a **lei do tempo do fato**; a nova capitulação **não retroage** se for **mais gravosa** (CF, art. 5º, XL).
- Onde a lei nova for **mais benéfica** (por unificação de penas ou minorante), pode **retroagir in mellius** — faça o **cotejo concreto de penas** antes de definir a capitulação.
- **Confira sempre a data do fato** e **a data exata da vigência** (não a data da lei), além da redação vigente à época. Passe pela skill `jurisprudencia-stj-stf`.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** por ser tipo relativamente recente (2016), a jurisprudência do STJ/STF sobre o **149-A está em consolidação e não há súmula específica conhecida**. **Não cite acórdão sobre tráfico de pessoas de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo** via `jurisprudencia-stj-stf` antes de levar à peça.

- **Leitura do Protocolo de Palermo** sobre relevância do consentimento e sobre transnacionalidade → **[NÃO VERIFICADO]** — confirmar o teor e a aplicação pelo tribunal antes de fundamentar.
- **Critério de competência federal** (transnacionalidade) → **[NÃO VERIFICADO]** — buscar precedente/tema atual.
- **Relação 149-A x 149** (concurso ou consunção) → **[NÃO VERIFICADO]** — conferir antes de afirmar *bis in idem*.

## Checklist e anti-padrões

- [ ] **Finalidade:** a denúncia prova a **finalidade específica** (uma das cinco) **contemporânea à conduta**, ou a **infere do resultado**?
- [ ] **Meio:** há **grave ameaça, violência, coação, fraude ou abuso** concretos, ou apenas a **vulnerabilidade social** da vítima?
- [ ] **Consentimento:** houve anuência **livre e informada** de pessoa capaz e não vulnerável, **não viciada** pelos meios do tipo?
- [ ] **Conduta:** vários verbos contra a mesma vítima/contexto foram tratados como **crime único** (tipo misto alternativo)?
- [ ] **Distinção:** o fato é melhor capitulado como **149**, aliciamento (206/207), crime migratório ou crime sexual próprio?
- [ ] **Competência:** a **transnacionalidade** está demonstrada para justificar a **Justiça Federal**?
- [ ] **Recorte temporal:** algum fato é **anterior à vigência da Lei 13.344/2016** (~novembro/2016, após a vacatio do art. 16 — não confundir com a data da lei, 6/10/2016; direito intertemporal; arts. 231/231-A)?
- [ ] **§1º e §2º:** majorantes bem fundamentadas? Cabe a **minorante** (primário e sem organização criminosa)?
- [ ] **Prova:** conduta, meio e finalidade **individualizados**, com autenticidade e **cadeia de custódia** íntegras?
- [ ] **Prescrição** e demais causas de extinção verificadas?
- [ ] **Súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- Aceitar a imputação **sem exigir prova da finalidade específica** — é o coração do tipo e o principal ponto de ataque.
- **Deduzir o meio da pobreza/vulnerabilidade** da vítima, ou a **finalidade do resultado** — recusar as duas inferências.
- Tratar **migração ou trabalho consentidos** como tráfico sem o meio típico.
- Descartar **por completo** a relevância do consentimento (ele opera nos limites do Protocolo de Palermo — analisar o caso).
- **Multiplicar imputações** pelos vários verbos (é crime único).
- Afirmar **competência federal** sem transnacionalidade comprovada.
- Aplicar o **149-A a fatos anteriores à sua vigência** (~novembro/2016, após a vacatio do art. 16 — **não** a data da lei, 6/10/2016), violando a irretroatividade da lei mais grave.
- Punir **duas vezes** o mesmo fato (149-A e 149) sem enfrentar o *bis in idem*.
- Citar precedente sobre 149-A ou o Protocolo de Palermo **sem** passar pelo gate de jurisprudência.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar **conduta, meio e finalidade** é da acusação; espelhar as teses acima como pontos a **provar**, e não a atacar. Tema sensível (dignidade humana): conduza sem revitimização.
- **Citation Gate:** nenhuma súmula, tese ou precedente — nem a leitura do Protocolo de Palermo — vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados de vítima e do assistido não vão a repositório público; observe eventual segredo de justiça.

## Lembretes finais

- **Três camadas:** conduta **+** meio **+** finalidade — falta uma, não há tráfico. Ataque o elo mais fraco.
- **Finalidade é dolo específico** contemporâneo à conduta — não se infere do resultado.
- **Meio ≠ vulnerabilidade** — o abuso/fraude há de ser concreto e instrumental.
- **Consentimento** livre e informado de pessoa capaz e não vulnerável **importa** (nos limites do Protocolo de Palermo).
- **Crime único** no tipo misto alternativo; **competência federal** só com transnacionalidade.
- **Vigência:** conferir a redação atual (pena, §1º, §2º) e não retroagir a lei mais grave (fatos anteriores à **vigência ~novembro/2016** — 30 dias de vacatio, art. 16 da Lei 13.344/2016; **não** a data da lei, 6/10/2016).
- **Sem jurisprudência de memória** — tipo recente; confira via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
