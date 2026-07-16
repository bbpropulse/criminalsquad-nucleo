---
name: tese-insignificancia-patrimonial
description: >-
  Use ao construir e sustentar a INSIGNIFICÂNCIA (bagatela própria → atipicidade material) e a
  BAGATELA IMPRÓPRIA (desnecessidade concreta da pena) nos crimes patrimoniais — os quatro vetores
  do STF, os filtros restritivos (reincidência, habitualidade, valor, violência/grave ameaça), a
  distinção insignificância × bagatela imprópria × pequeno valor (privilégio), e a aplicação tese a
  tese por tipo penal (furto, receptação… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, patrimonio, defesa, tese]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-tese-insignificancia-patrimonial"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["tese-insignificancia-patrimonial", "tese insignificancia", "insignificancia patrimonial"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Tese de Insignificância e Bagatela nos crimes patrimoniais (CP; princípio da insignificância — construção do STF/STJ)

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

Esta skill é **transversal**: orienta a construção e a sustentação da **insignificância penal (bagatela própria)** e da **bagatela imprópria** nos crimes patrimoniais — furto, receptação, dano, estelionato, apropriação indébita, descaminho e afins. A insignificância é a tese defensiva **mais recorrente** dos patrimoniais porque **não depende de prova nova**: opera sobre o fato já provado, negando-lhe **relevância penal**. Não é benevolência do juiz — é **causa supralegal de exclusão da tipicidade material** (a conduta é formalmente típica, mas materialmente irrelevante, porque o Direito Penal só tutela lesões **significativas** ao bem jurídico — *ultima ratio* e fragmentariedade).

> **Lição central:** **insignificância ≠ pequeno valor ≠ bagatela imprópria.** São três coisas distintas, com requisitos e efeitos diferentes: (a) **insignificância / bagatela própria** → valor **ínfimo** + os quatro vetores → **atipicidade material** → absolvição (art. 386, III, CPP); (b) **pequeno valor** (ex.: furto privilegiado, art. 155, §2º) → coisa de pequeno valor + primariedade → **redução de pena**, não atipicidade; (c) **bagatela imprópria** → o fato é típico e relevante, mas a pena, no caso concreto, é **desnecessária** (agente reparou o dano, colaborou, circunstâncias favoráveis) → dispensa/desnecessidade da pena. Errar o rótulo derruba a tese. **Classifique qual das três você está pedindo — e peça o efeito correto.**

> **Cautela de vigência (obrigatória antes de citar):** o princípio da insignificância é **construção jurisprudencial** (não tem artigo próprio no CP) — logo, o seu conteúdo **muda com os julgados**. A aplicação é **casuística** e há oscilação relevante do STF/STJ sobre reincidência, habitualidade, valor de corte e tipos excluídos. **Antes de sustentar qualquer patamar, súmula, tema ou tese de admissão/afastamento, confira a orientação atual via a skill `jurisprudencia-stj-stf`.** Confira também a redação vigente dos dispositivos dos tipos concretos (art. 155, 163, 168, 171, 180 do CP; art. 334 do CP) e o valor de corte fiscal usado no descaminho. Nenhuma citação de memória.

## Base "legal" — o princípio e suas âncoras

O princípio da insignificância **não está positivado** em um artigo; deriva de **princípios constitucionais e de política criminal**:

- **Fragmentariedade e subsidiariedade** do Direito Penal (*ultima ratio*): só se pune a lesão **relevante** ao bem jurídico.
- **Proporcionalidade** e **ofensividade/lesividade** (CF, art. 5º, *caput* e incisos correlatos): não há crime sem lesão significativa a bem jurídico alheio.
- **Tipicidade material** (teoria da tipicidade conglobante / material): a conduta formalmente típica que **não lesa de modo relevante** o bem jurídico é **materialmente atípica**.
- **Âncoras nos tipos concretos** (para a subsunção da peça): art. 155 (furto), art. 163 (dano), art. 168 (apropriação), art. 171 (estelionato), art. 180 (receptação), art. 334 (descaminho) do CP — **conferir redação vigente**.
- **Efeito processual da absolvição:** **art. 386, III, do CPP** (não constituir o fato infração penal) — é o pedido correto para a bagatela **própria**.

> **Por que "atipicidade" e não "excludente de ilicitude":** a insignificância exclui a **tipicidade material**, não a antijuridicidade. Isso importa: a absolvição é por **atipicidade** (art. 386, III, CPP), e não por causa de justificação (art. 386, VI). Pedir o inciso errado enfraquece a peça.

## Os QUATRO VETORES do STF (o coração da tese — decorar)

A jurisprudência do STF condiciona a insignificância à presença **cumulativa** de quatro vetores (mnemônico **MARI**):

| Vetor | Sigla | O que significa | O que a defesa demonstra |
|---|---|---|---|
| **M**ínima ofensividade da conduta | M | A ação, no concreto, quase não ofende o bem jurídico | Valor ínfimo, sem violência, sem dano colateral |
| **A**usência de periculosidade social da ação | A | A conduta não gera risco relevante à sociedade | Ato isolado, sem exposição de terceiros a perigo |
| **R**eduzido grau de reprovabilidade do comportamento | R | O comportamento merece baixíssima censura | Circunstâncias pessoais e do fato favoráveis |
| **I**nexpressividade da lesão jurídica provocada | I | O prejuízo é economicamente desprezível | Valor recuperado/ínfimo; bem restituído; vítima sem prejuízo real |

> **Como usar na peça:** enfrente os quatro **um a um**, com fatos concretos do caso, não com fórmula genérica. O juiz que nega a insignificância costuma dizer que "faltou o vetor X" (em regra, o **reduzido grau de reprovabilidade**, atacado pela reincidência/habitualidade). Antecipe cada vetor com prova (auto de avaliação da coisa, nota fiscal, restituição, folha de antecedentes).

> **Vetores × valor:** o valor ínfimo **sozinho não basta** — os quatro vetores são cumulativos. Mas o valor é o **carro-chefe** da *inexpressividade da lesão* (vetor I) e da *mínima ofensividade* (vetor M). **Não há um valor de corte legal fixo** para os patrimoniais comuns; a jurisprudência costuma orbitar frações do salário mínimo, mas **é casuística** — **confirme o parâmetro atual via `jurisprudencia-stj-stf`** e ancore no caso concreto, não em um número "de cor".

## Os FILTROS RESTRITIVOS (o que a acusação usa para afastar — e como neutralizar)

A insignificância **não é automática**. A acusação e a jurisprudência usam filtros para negá-la. A defesa deve antecipar e neutralizar cada um:

1. **Reincidência / maus antecedentes / habitualidade.** É o filtro mais forte. A tese acusatória: o agente reincidente ou habitual revela **maior reprovabilidade** (vetor R), afastando a bagatela.
   - **Neutralização (defesa):** (a) a insignificância é **atipicidade material** — logo **objetiva**, aferida no **fato**, não na pessoa; condição pessoal não "cria" lesão relevante onde ela não existe; (b) distinguir **reincidência** (condenação transitada) de **maus antecedentes** e de mera **resposta a inquéritos/ações em curso** (que não valem como reincidência — presunção de inocência); (c) sustentar que a reincidência, quando muito, **desloca** para a dosimetria/privilégio, mas não converte fato ínfimo em fato típico. **A oscilação jurisprudencial aqui é enorme — confira a posição atual via gate.**
   - **Regra prática:** se a reincidência for barreira intransponível no foro, **migre para a bagatela imprópria** ou para o **privilégio (§2º, no furto)** — não perca o cliente por insistir só na própria.

2. **Valor da coisa (corte).** Coisa de valor próximo/superior ao salário mínimo tende a afastar a *inexpressividade da lesão*.
   - **Neutralização:** discutir o **valor real** (auto de avaliação, depreciação, valor de uso × de mercado); relacioná-lo à **capacidade econômica da vítima** (para grandes redes, o valor é ainda mais irrelevante — mas cuidado: parte da jurisprudência **rejeita** a "importância econômica da vítima" como critério; confira).

3. **Violência ou grave ameaça à pessoa.** **Barreira quase absoluta:** onde há violência/grave ameaça (roubo, art. 157), a jurisprudência **majoritariamente NÃO admite** insignificância — o bem jurídico tutelado transcende o patrimônio (integridade, liberdade). **Não sustente insignificância em roubo** como tese principal — é anti-padrão clássico. (Ver seção "aplicação por tipo".)

4. **Rompimento de obstáculo, concurso de pessoas, repouso noturno (qualificadoras/majorantes).** A presença de qualificadora costuma ser usada para elevar a *reprovabilidade* e afastar a bagatela.
   - **Neutralização:** sustentar que a qualificadora **objetiva** não descaracteriza a insignificância material da lesão patrimonial (ponto controvertido — **confira**); alternativamente, atacar a **própria qualificadora** (ver `defesa-furto`) para, afastada, reabrir a insignificância.

5. **Habitualidade / reiteração no mesmo período.** Diversos furtos em sequência, ainda que ínfimos isoladamente, podem ser somados para afastar a bagatela (a "insignificância não protege o criminoso contumaz").
   - **Neutralização:** discutir se há **efetiva habitualidade** provada ou mera coincidência; isolar o fato concreto.

## As TRÊS teses distintas (não confundir — quadro-mestre)

| Instituto | Requisito nuclear | Natureza | Efeito | Pedido |
|---|---|---|---|---|
| **Insignificância (bagatela PRÓPRIA)** | Valor **ínfimo** + 4 vetores (MARI) | Exclui a **tipicidade material** | **Absolvição** | Art. 386, **III**, CPP |
| **Bagatela IMPRÓPRIA** | Fato típico e relevante, mas **pena desnecessária** no concreto (reparação, colaboração, circunstâncias favoráveis) | Dispensa/desnecessidade da **pena** (não da tipicidade) | Dispensa de pena / absolvição imprópria | Fundamentar na desnecessidade concreta da pena; **[base dogmática debatida — conferir aceitação atual via `jurisprudencia-stj-stf`]** |
| **Pequeno valor (privilégio)** | Ex.: furto — primariedade + coisa de **pequeno valor** (art. 155, §2º) | Causa de **diminuição** | **Redução** de pena / detenção / só multa | Art. 155, §2º, CP (e análogos) |

> **Insignificância × bagatela imprópria — a diferença que decide o pedido:**
> - **Própria:** o fato **não chega a ser crime** (materialmente atípico). Discute-se **antes** da pena. Pede-se **absolvição por atipicidade**.
> - **Imprópria:** o fato **é crime** (típico, ilícito, culpável), mas a **pena é desnecessária** no caso — o agente reparou o dano, é primário, colaborou, e a reprimenda não cumpriria função. Discute-se a **necessidade concreta da pena**. É tese mais **frágil e controvertida** (parte da doutrina/jurisprudência rejeita a bagatela imprópria como categoria autônoma — **conferir sempre**). Use-a como **subsidiária** quando a própria esbarrar na reincidência/valor.

> **Pequeno valor (privilégio) — a saída quando a bagatela não vinga:** se o valor **não é ínfimo** mas é **pequeno** e o réu é **primário**, o caminho é o **privilégio** (no furto, art. 155, §2º — redução de 1/3 a 2/3, ou detenção, ou só multa), **não** a insignificância. É a rede de segurança mais esquecida. (Ver `defesa-furto`.)

## Aplicação TESE A TESE por tipo penal

> Em todos, o padrão é o mesmo: **valor ínfimo + 4 vetores + neutralização dos filtros**. O que muda é o **bem jurídico**, os **filtros dominantes** e a **admissão jurisprudencial**. Confira cada admissão via `jurisprudencia-stj-stf`.

- **Furto (art. 155) — terreno clássico da insignificância.** É onde a tese mais é admitida. Filtros dominantes: reincidência/habitualidade e valor. **Cuidado com o "furto qualificado":** a presença de qualificadora (rompimento, concurso) é usada para afastar — mas há espaço para sustentar a insignificância mesmo assim, ou atacar antes a qualificadora (ver `defesa-furto`). **Não confundir insignificância (atipicidade) com privilégio (§2º, redução).**

- **Roubo (art. 157) — NÃO cabe (regra).** Com violência/grave ameaça, a jurisprudência **majoritariamente rejeita** a insignificância, pois o bem jurídico protegido vai além do patrimônio. **Anti-padrão sustentar bagatela em roubo.** No máximo, discutir desclassificação para furto (afastando a violência) e, aí sim, a insignificância — mas isso é tese de reclassificação, não de bagatela.

- **Receptação (art. 180).** Cabível em tese quando a coisa receptada é de valor ínfimo e presentes os vetores; filtro comum: habitualidade/comércio. Discutir o **valor da coisa** e a **ausência de reprovabilidade elevada**. (Ver `defesa-receptacao`.)

- **Dano (art. 163).** Insignificância aplicável ao dano de valor desprezível; atenção ao **dano qualificado** (contra o patrimônio público, com violência, por meio perigoso) — onde a admissão é mais restrita. (Ver `defesa-dano`.)

- **Estelionato (art. 171) e apropriação indébita (art. 168).** Admissão **mais restritiva** — parte da jurisprudência resiste à bagatela nesses tipos (o desvalor da fraude/quebra de confiança pesa no vetor da reprovabilidade). Sustentável quando o **prejuízo é ínfimo** e ausente sofisticação/habitualidade — mas **confira a posição atual**, é ponto sensível.

- **Descaminho (art. 334, CP).** Caso **peculiar**: aqui existe um **valor de corte objetivo** ligado ao **limite para execução fiscal / não ajuizamento** (parâmetro fiscal). Abaixo desse teto, a jurisprudência tende a reconhecer a insignificância. **O valor de corte é normativo e muda por ato infralegal** — **confirme o patamar vigente e a orientação atual (STF/STJ) via `jurisprudencia-stj-stf` antes de citar qualquer número.** Filtro: **reiteração** (múltiplos descaminhos somados afastam a bagatela).

- **Crimes com violência, contra a Administração (peculato, corrupção), tráfico, e certos ambientais/estatutários:** admissão **excepcional ou vedada** — não é o campo desta skill (patrimoniais). Não presuma cabimento; **confira**.

## Estrutura da tese na peça (resposta à acusação / alegações finais / HC / apelação)

1. **Síntese do fato provado.** Reconheça o fato (não se discute prova aqui — se a prova é frágil, a tese é outra: `standard-probatorio-in-dubio-pro-reo`). A insignificância **admite o fato** e nega-lhe relevância penal.
2. **Enquadramento dogmático.** Insignificância = **causa supralegal de exclusão da tipicidade material** (fragmentariedade, *ultima ratio*, ofensividade). Deixe claro que se pede **atipicidade** (art. 386, III, CPP), não excludente de ilicitude.
3. **Os quatro vetores (MARI), um a um, com fatos.** Mínima ofensividade; ausência de periculosidade social; reduzido grau de reprovabilidade; inexpressividade da lesão — cada qual ancorado em prova concreta (valor, restituição, primariedade, ausência de violência).
4. **Neutralização preventiva dos filtros.** Enfrente a reincidência/habitualidade (objetividade da atipicidade; distinção reincidência × antecedentes × inquéritos), o valor, e a eventual qualificadora — **antes** de o MP levantá-los.
5. **Teses subsidiárias, em cascata.** (a) **Bagatela imprópria** (pena desnecessária, se reparado o dano/colaboração) — **[conferir aceitação atual]**; (b) **privilégio / pequeno valor** (redução — no furto, §2º); (c) **dosimetria** no mínimo + atenuantes (confissão, art. 65, III; arrependimento posterior, art. 16). Não aposte tudo na própria.
6. **Pedido.** Principal: **absolvição por atipicidade material (art. 386, III, CPP)**. Subsidiários: dispensa da pena (bagatela imprópria); reconhecimento do privilégio; pena mínima. **Prova/documentos:** auto de avaliação da coisa, comprovante de restituição/reparação, folha de antecedentes (primariedade), notas fiscais.

## Teses e contra-teses (antecipe o MP)

| Contra-tese da acusação | Resposta da defesa |
|---|---|
| "O réu é **reincidente** — não cabe insignificância" | A insignificância é **atipicidade material** (objetiva, aferida no fato); reincidência não torna típico o fato ínfimo. Distinguir reincidência × antecedentes × inquéritos em curso. Subsidiar com bagatela imprópria/privilégio. **[oscilação forte — conferir]** |
| "O **valor não é ínfimo**" | Discutir o valor **real** (depreciação, avaliação), a inexpressividade concreta da lesão e a restituição. Se não vingar → **privilégio** (pequeno valor). |
| "Houve **qualificadora** (rompimento/concurso)" | A qualificadora **objetiva** não recria lesão relevante onde não há; alternativamente, **atacar a qualificadora** (ausência de laudo — `defesa-furto`) e reabrir a bagatela. |
| "Há **habitualidade / reiteração**" | Contestar a prova da habitualidade; isolar o fato concreto; sustentar que inquéritos/ações sem trânsito não caracterizam contumácia. |
| "A **vítima** teve prejuízo relevante" | Aferir a inexpressividade **objetiva** da lesão; discutir o critério da capacidade econômica da vítima (**controvertido — parte da jurisprudência o rejeita; conferir**). |
| "Em **estelionato/apropriação** não cabe bagatela" | Sustentar o prejuízo ínfimo e a ausência de sofisticação/habitualidade — reconhecendo a **maior restrição** jurisprudencial nesses tipos. **[conferir posição atual]** |

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** os **dispositivos legais** citáveis com certeza (conferida a redação vigente) são os tipos concretos (arts. 155, 163, 168, 171, 180, 334 do CP) e o **art. 386, III, do CPP** (pedido de absolvição por atipicidade). **O princípio da insignificância em si é jurisprudencial** — seu conteúdo, os patamares e a admissão por tipo **DEVEM ser conferidos** via `jurisprudencia-stj-stf`. Prefira **ensinar a tese e ancorá-la no dispositivo do tipo + no art. 386, III, CPP** a arriscar um número de acórdão.

Teses cuja **existência** é notória, mas cujo **enunciado, número, informativo, tema e alcance atual** exigem verificação:

- **Os quatro vetores da insignificância** (mínima ofensividade; ausência de periculosidade social; reduzido grau de reprovabilidade; inexpressividade da lesão) — formulação **consagrada pelo STF**, mas o **leading case** e sua reafirmação atual **[NÃO VERIFICADO — conferir o precedente e sua vigência via `jurisprudencia-stj-stf`.]**
- **Reincidência/habitualidade afasta (ou não) a insignificância** — há **forte oscilação** STF × STJ e ao longo do tempo. **[NÃO VERIFICADO — conferir a orientação atual e eventual repercussão geral/tema antes de sustentar qualquer lado.]**
- **Valor de corte / parâmetro** para os patrimoniais comuns (frações do salário mínimo) — é **casuístico**, sem número legal fixo. **[NÃO VERIFICADO — não citar um valor "de cor"; conferir o parâmetro atual.]**
- **Descaminho — valor de corte fiscal** (limite de não ajuizamento da execução fiscal) — patamar **normativo e mutável**. **[NÃO VERIFICADO — conferir o valor vigente e a Súmula/Tema aplicável via gate.]**
- **Insignificância em roubo — inadmissibilidade** (violência/grave ameaça) — orientação **majoritária**, mas confirme o enunciado e exceções. **[NÃO VERIFICADO — conferir.]**
- **Bagatela imprópria** — categoria **doutrinária controvertida**; a aceitação jurisprudencial é **limitada e disputada**. **[NÃO VERIFICADO — conferir aceitação atual antes de sustentar como tese principal.]**

Não invente número de HC, REsp, RE, AgRg, Súmula, Tema ou Informativo. Na dúvida, **omitir vence inventar**.

## Erros comuns e checklist (defesa)

**Anti-padrões (evitar):**
- **Confundir os três institutos** — pedir "insignificância" quando o caso é de **privilégio** (pequeno valor → redução) ou de **bagatela imprópria** (pena desnecessária). Rótulo errado → pedido errado → indeferimento.
- **Pedir absolvição por excludente de ilicitude** (art. 386, VI) em vez de **atipicidade** (art. 386, III) — a insignificância exclui a **tipicidade material**.
- **Sustentar insignificância em roubo** (ou em qualquer tipo com violência/grave ameaça) como tese principal — regra é a inadmissibilidade.
- **Ignorar os filtros** e não neutralizar a reincidência/habitualidade **antes** de o MP levantá-la.
- **Citar um valor de corte "de cor"** (patrimoniais comuns) ou o teto do descaminho sem conferir — ambos são casuísticos/mutáveis.
- **Enfrentar os quatro vetores com fórmula genérica**, sem ancorar cada um em fato/prova do caso.
- **Não ter plano B** — apostar só na própria e perder o cliente na reincidência, em vez de migrar para bagatela imprópria / privilégio / pena mínima.
- **Citar precedente/súmula de memória**, sem o gate de `jurisprudencia-stj-stf`.

**Checklist:**
- [ ] Definido **qual instituto** se pede — insignificância (própria), bagatela imprópria ou pequeno valor (privilégio) — com o **efeito e o pedido corretos**?
- [ ] Os **quatro vetores (MARI)** enfrentados **um a um**, com fatos/prova do caso?
- [ ] **Valor ínfimo** demonstrado (auto de avaliação, notas, restituição) — sem citar corte "de cor"?
- [ ] **Filtros** neutralizados preventivamente — reincidência/habitualidade (distinguida de antecedentes/inquéritos), valor, qualificadora, violência?
- [ ] Pedido de **absolvição por atipicidade material** ancorado no **art. 386, III, CPP**?
- [ ] **Teses subsidiárias** em cascata (bagatela imprópria; privilégio/§2º; pena mínima + atenuantes)?
- [ ] Verificada a **admissão da insignificância no tipo concreto** (mais restrita em estelionato/apropriação; peculiar no descaminho; vedada no roubo)?
- [ ] **Dosimetria** e prescrição, se subsidiárias, calculadas com `calculadora-dosimetria` / `calculadora-prescricao` (método na peça; não inventar cálculo)?
- [ ] Toda **súmula/precedente/tema/valor de corte** conferido via `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do(a) advogado(a) responsável?

## Lembretes finais

- **Três institutos, três pedidos:** insignificância (**atipicidade** → art. 386, III) ≠ pequeno valor (**redução** → privilégio) ≠ bagatela imprópria (**pena desnecessária**). Não confundir.
- **Quatro vetores (MARI), cumulativos**, cada um ancorado em fato — o valor ínfimo sozinho não basta.
- **Reincidência/habitualidade** é o filtro mais forte e o mais **oscilante** — neutralize e tenha plano B; **confira a posição atual**.
- **Roubo (violência/grave ameaça) → não cabe** insignificância (regra). Estelionato/apropriação → admissão **restrita**. Descaminho → **valor de corte fiscal** (mutável).
- **A insignificância é jurisprudencial** — patamares, súmulas e admissão **mudam**; nada vai para a peça sem `jurisprudencia-stj-stf`.

## Nota de conformidade

Este material é **rascunho técnico de apoio**, sujeito a **revisão humana obrigatória** — a responsabilidade pela peça, pela estratégia e pelas citações é sempre do(a) **advogado(a)** (EAOAB e CED; Provimento 205/2021 da OAB para a comunicação e o marketing jurídico). **Foco em DEFESA** — esta é uma tese de defesa nos crimes patrimoniais (não do polo acusatório). Nenhuma súmula, tese, tema ou valor de corte vai para a peça sem passar pelo gate de `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA — na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
