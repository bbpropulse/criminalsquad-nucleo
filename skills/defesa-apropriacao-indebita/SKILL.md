---
name: defesa-apropriacao-indebita
description: >-
  Use ao defender APROPRIAÇÃO INDÉBITA comum (CP, art. 168) e a de coisa achada (art. 169) — a
  elementar da posse ou detenção lícita anterior (que a distingue de furto e estelionato), a
  ausência do animus rem sibi habendi, a atipicidade por dúvida honesta sobre direito próprio
  (compensação, retenção) e os aumentos do §1º. Gatilhos: apropriação indébita, art. 168, posse ou
  detenção lícita anterior, animus rem sibi habendi… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, patrimonio, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-apropriacao-indebita"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-apropriacao-indebita", "defesa apropriacao", "apropriacao indebita"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Apropriação Indébita (CP, arts. 168 e 169)

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

Esta skill orienta a **estratégia defensiva** no crime de **apropriação indébita comum** (art. 168 do Código Penal) e na figura da **apropriação de coisa achada** (art. 169, parágrafo único, II). O núcleo do tipo é **apropriar-se de coisa alheia móvel de que o agente tem a posse ou a detenção** — vale dizer, o agente **já tinha** a coisa em suas mãos por um título **lícito e legítimo** (depósito, mandato, comodato, guarda, penhor) e, num segundo momento, **inverte o ânimo** e passa a agir como dono. É esse "recebi lícito, depois virei dono" que separa a apropriação indébita do furto e do estelionato — e é aí que mora quase toda a defesa.

> **Lição central:** apropriação indébita **não é inadimplemento**. Descumprir contrato, atrasar devolução, discutir valores ou reter coisa por suposto direito **não são**, por si sós, o crime — falta o **animus rem sibi habendi** (a vontade de assenhorear-se definitivamente como dono). A defesa vive de demonstrar que houve **mera pendência civil**, **dúvida honesta sobre direito próprio** ou **ausência do dolo de apropriação**, e não a inversão criminosa da posse.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 168 e 169 do CP e o rol de aumentos do §1º na fonte oficial; verifique se o caso admite **suspensão condicional do processo** (Lei 9.099/95, art. 89 — pena mínima de 1 ano no *caput*) e a incidência do **arrependimento posterior** (art. 16, CP). Confira toda súmula, tema ou acórdão via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nenhuma citação de memória.

## Base legal

- **Art. 168, *caput*, CP** — "Apropriar-se de coisa alheia móvel, de que tem a posse ou a detenção". Pena: reclusão de **1 a 4 anos**, e multa.
- **Art. 168, §1º, CP** — aumento de **1/3** quando o agente recebeu a coisa: (I) em depósito necessário; (II) na qualidade de tutor, curador, síndico, liquidatário, inventariante, testamenteiro ou depositário judicial; (III) em razão de ofício, emprego ou profissão.
- **Art. 169, CP** — apropriação de coisa havida por erro, caso fortuito ou força da natureza (*caput*); **parágrafo único, II — apropriação de coisa achada** (quem acha coisa perdida e não a restitui ao dono/legítimo possuidor ou à autoridade em 15 dias). Pena: detenção de 1 mês a 1 ano, ou multa.
- **Art. 155, CP (furto)** e **art. 171, CP (estelionato)** — os dois tipos com que a apropriação indébita mais se confunde; a distinção é o **momento e o modo de aquisição da posse** (ver quadro abaixo).
- **Art. 345, CP** — exercício arbitrário das próprias razões: quem, para satisfazer pretensão **legítima**, faz justiça pela própria mão. Tese subsidiária de **desclassificação** quando há direito de crédito ou de retenção invocado de boa-fé.
- **Art. 16, CP** — arrependimento posterior (reparação do dano até o recebimento da denúncia → redução de 1/3 a 2/3).
- **Art. 181–183, CP** — imunidades e escusas nos crimes patrimoniais (relações familiares) — verificar aplicabilidade.

## A elementar-chave: posse ou detenção LÍCITA anterior

O que caracteriza a apropriação indébita — e a distingue de todos os outros crimes patrimoniais — é que a coisa **chega às mãos do agente de forma lícita e desvigiada**. Não há subtração (furto), não há fraude na obtenção (estelionato), não há violência (roubo). O agente **recebe legitimamente** e só depois **inverte a posse**, deixando de possuir *em nome de outrem* para possuir *como se dono fosse*.

| Elemento | Como se manifesta | O que a defesa investiga |
|---|---|---|
| **Posse/detenção lícita anterior** | Título legítimo: depósito, mandato, comodato, guarda, penhor, ofício | Se **não havia** posse lícita anterior, **não é** 168 — reclassifica p/ furto (155) ou estelionato (171) |
| **Inversão do ânimo** (*rem sibi habendi*) | Ato inequívoco de dono: vender, consumir, negar-se a devolver, dar destino incompatível | Houve ato de disposição ou só **mora/retenção**? Mora não é inversão |
| **Coisa alheia móvel** | Bem de terceiro; corpóreo e deslocável | A coisa era mesmo alheia? Havia **condomínio, sociedade, direito de crédito** que a tornasse comum? |
| **Dolo de apropriação** | Vontade consciente de assenhorear-se definitivamente | Havia **dúvida honesta** sobre o direito? **Intenção de devolver**? Só **negligência**? |

> **Ponto de virada:** a "inversão da posse" não é um estado psicológico presumido — precisa de **ato externo inequívoco** demonstrando o *animus* de dono. Enquanto o agente admite dever, discute, promete devolver ou apenas **atrasa**, a inversão **não se consumou**. A defesa explora esse limiar.

## Distinção dos crimes vizinhos (o coração da tese)

A imputação de apropriação indébita frequentemente **erra o tipo**. Cabe à defesa expor a distinção e pleitear a **atipicidade** ou a **desclassificação**:

- **Apropriação indébita (168) × Furto (155):** no furto, a posse é **subtraída** (o agente **nunca teve** a posse lícita — tomou às escondidas ou tinha mera *vigilância*/detenção subordinada). No 168, a posse **foi entregue** licitamente. **Teste:** *quem tinha a posse desvigiada da coisa no momento anterior ao ato?* Empregado que subtrai do caixa que apenas manuseia sob vigilância = **furto**; depositário que vende o bem confiado = **apropriação**.
- **Apropriação indébita (168) × Estelionato (171):** no estelionato, o dolo é **anterior ou concomitante** à obtenção — a fraude vicia a entrega **desde a origem** (o agente já recebeu querendo não devolver, mediante ardil). No 168, o recebimento é **de boa-fé** e o dolo (o *animus rem sibi habendi*) **surge depois** (*dolo subsequente*). **Teste:** *o agente já queria ficar com a coisa quando a recebeu?* Se sim, e usou ardil = **estelionato**; se o propósito de apoderar-se **nasceu depois** = **apropriação**.
- **Apropriação indébita (168) × Exercício arbitrário das próprias razões (345):** se o agente retém a coisa para **satisfazer pretensão que supõe legítima** (crédito, direito de retenção do art. 1.219 do CC, compensação), falta o *animus* de dono alheio — pode configurar, no máximo, o art. 345 (ação penal privada, pena menor), ou ser **fato atípico** se o direito for real e a conduta, mera autotutela civil.

## Teses defensivas típicas (por ordem de força)

1. **Ausência de posse/detenção lícita anterior → atipicidade do 168 (reclassificação):** demonstrar que o agente nunca teve a posse legítima e desvigiada — logo o fato é furto ou estelionato (com reflexos em competência, prescrição, ANPP, *sursis* processual) ou é atípico como 168. Peça o **trancamento** ou a **absolvição/desclassificação**.
2. **Ausência do *animus rem sibi habendi* (dolo de apropriação):** o agente **pretendia devolver**, **admitia a dívida**, **discutia o valor** ou apenas **atrasou** — não há ato inequívoco de disposição como dono. **Mero inadimplemento contratual não é crime.** Tese central e mais usada.
3. **Dúvida honesta sobre direito próprio / retenção / compensação:** o agente reteve a coisa por acreditar, de boa-fé, ter direito (crédito não pago, benfeitorias, compensação). Afasta o dolo — atipicidade, ou no máximo desclassificação para o art. 345.
4. **Coisa não integralmente alheia (condomínio, sociedade, valores comuns):** em sociedades de fato, condomínio, casais em partilha, o bem/valor **não é "coisa alheia"** pura — a controvérsia é sobre **quota/partilha**, matéria **civil**, não penal.
5. **Fungibilidade do dinheiro:** tratando-se de dinheiro (bem **fungível**) recebido para dar destino (ex.: valores em conta, adiantamentos), a obrigação pode ser de **dar coisa fungível** (restituir o equivalente), não de **guardar coisa certa** — o que desloca a discussão para a esfera civil (dívida), salvo destinação específica e vinculada comprovada. **Tese sensível — conferir a jurisprudência atual caso a caso.**
6. **Insignificância (bagatela):** em coisa de valor ínfimo e sem lesão relevante, invocar o princípio da insignificância (vetores: mínima ofensividade, ausência de periculosidade, reduzido grau de reprovabilidade, inexpressividade da lesão). **Conferir a admissão do STF/STJ para o 168 no caso concreto** — não é automática.
7. **Prescrição:** pena máxima de 4 anos (*caput*) → prescrição em **8 anos** (art. 109, IV, CP); com o §1º, recalcular. Conferir marco consumativo (data da **inversão da posse**, e não do recebimento) para a prescrição da pretensão punitiva.
8. **Atipicidade da coisa achada (169, p.u., II):** o agente **não sabia** que a coisa era perdida, **não conhecia o dono**, **não decorreu o prazo** de 15 dias, ou **restituiu** — afasta o tipo. Aqui a **negligência** não basta: exige-se o **dolo** de apropriar-se.

## Contra-teses da acusação (antecipe-as)

- **"Recusou-se a devolver após interpelação formal"** → a defesa responde que a recusa pode ser mero exercício de retenção/compensação, ou pendência sobre o *quantum*, sem *animus* de dono; e que a **inversão exige ato inequívoco**, não simples silêncio ou mora.
- **"Deu destino incompatível (vendeu/consumiu)"** → aqui a acusação tem o argumento mais forte; a defesa foca na **licitude da posse anterior** (para reclassificar), na **boa-fé/direito de crédito** (art. 345) ou na **reparação** (art. 16 / atenuante).
- **"Recebeu em razão de ofício/profissão (§1º, III)"** → contestar o **enquadramento** do aumento (o vínculo profissional deve ser a **causa** do recebimento) e sustentar que o §1º não supre a falta da elementar do *caput*.
- **"Dolo desde o início"** → se a acusação sustenta dolo originário, ela está descrevendo **estelionato**, não apropriação — use isso: ou é 171 (e então cabe discutir a fraude), ou o dolo é subsequente e depende de ato inequívoco de inversão.

## Causas de diminuição, benefícios e institutos despenalizadores

- **Arrependimento posterior (art. 16, CP):** reparação do dano ou restituição da coisa, por ato voluntário, **até o recebimento da denúncia** → redução de **1/3 a 2/3**. Institucionalmente importante: nos crimes patrimoniais sem violência, é via frequente de mitigação.
- **Suspensão condicional do processo (art. 89, Lei 9.099/95):** pena mínima do *caput* = 1 ano → **cabível o *sursis* processual** (se preenchidos os demais requisitos), mesmo com o aumento do §1º a depender do cálculo. Verificar.
- **ANPP (art. 28-A, CPP):** crime sem violência/grave ameaça, pena mínima inferior a 4 anos → **acordo de não persecução penal** é possível, mediante confissão e reparação — avaliar conveniência com o assistido.
- **Atenuantes:** confissão espontânea (art. 65, III, "d"), reparação do dano fora do prazo do art. 16, primariedade e bons antecedentes na dosimetria (ver skill `calculadora-dosimetria`).

> **Cálculo de pena e prazos:** a dosimetria (base, atenuantes/agravantes, §1º) e a **prescrição** (marco na inversão da posse; pena de 4 anos → 8 anos, art. 109, IV) são determinísticas — descreva o método na peça e use as skills `calculadora-dosimetria` e `calculadora-prescricao` para os números, conferindo os prazos com `calculadora-tempestividade`.

## Roteiro de análise da defesa (passo a passo)

1. **Identificar o título da posse.** Como a coisa chegou ao agente? Depósito, mandato, comodato, guarda, vínculo profissional? A posse era **lícita e desvigiada**? → Se **não**, ataque o tipo (não é 168).
2. **Testar a distinção com furto e estelionato.** Aplicar os dois testes ("quem tinha a posse antes?" e "o agente já queria ficar com a coisa ao recebê-la?"). → Reclassificação, se for o caso.
3. **Buscar o ato inequívoco de inversão.** Há prova de **disposição como dono** (venda, consumo, destino incompatível) ou apenas **mora/retenção/discussão de valor**? → Sem inversão, atipicidade.
4. **Verificar dúvida honesta sobre direito próprio.** Havia crédito, compensação, direito de retenção, condomínio, sociedade? → Atipicidade ou desclassificação para o art. 345.
5. **Examinar a natureza da coisa.** É **fungível** (dinheiro) com obrigação de restituir equivalente, ou coisa **certa** com destinação vinculada? → Deslocamento para a esfera civil, se cabível.
6. **Avaliar insignificância e reparação.** Valor ínfimo? Houve devolução/reparação (art. 16)? → Mitigação ou atipicidade material.
7. **Conferir prescrição e institutos despenalizadores.** Prazo prescricional (marco na inversão); *sursis* processual; ANPP; imunidades dos arts. 181–183. → Extinção ou saída negociada.
8. **Se coisa achada (169):** o agente **sabia** que era perdida? **Conhecia** o dono? Decorreu o **prazo de 15 dias**? **Restituiu**? → Atipicidade se qualquer elementar faltar.

## Estrutura sugerida da peça (resposta à acusação / alegações finais / memoriais)

1. **Síntese da imputação** — o que a denúncia diz e sob qual tipo (confira se o MP acertou o enquadramento).
2. **Tese principal** — em regra: **atipicidade por ausência do *animus rem sibi habendi*** (mero inadimplemento) **ou** reclassificação por **falta de posse lícita anterior**.
3. **Teses subsidiárias, em cascata** — dúvida honesta sobre direito (art. 345); coisa não integralmente alheia; fungibilidade; insignificância.
4. **Prova** — contratos, mensagens, recibos, interpelações, extratos que demonstrem boa-fé, intenção de devolver, discussão de valores ou reparação. **A prova do *ânimo* é o campo de batalha.**
5. **Institutos despenalizadores** — arrependimento posterior (art. 16), *sursis* processual, ANPP, prescrição.
6. **Pedido** — absolvição (art. 386, III ou VII, CPP) por atipicidade; subsidiariamente, desclassificação; subsidiariamente, mínimo legal + redução do art. 16.

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** os **dispositivos legais** acima (arts. 168, 169, 155, 171, 345, 16 do CP; art. 89 da Lei 9.099/95; art. 28-A do CPP) são citáveis com certeza. **Qualquer súmula, tema, informativo ou número de acórdão (HC/REsp/RE) DEVE ser conferido** via `jurisprudencia-stj-stf` antes de ir para a peça. Prefira **ensinar a tese e ancorá-la no dispositivo** a arriscar um número.

- **Tese "mero inadimplemento não configura apropriação indébita"** — orientação consolidada na doutrina e na jurisprudência; **ancorar no art. 168 (falta do *animus*)** e confirmar o precedente aplicável. [NÃO VERIFICADO — conferir acórdão específico do STJ/TJ via `jurisprudencia-stj-stf`]
- **Distinção entre dolo originário (estelionato) e dolo subsequente (apropriação)** — pacífica na doutrina; localizar o julgado do caso concreto. [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`]
- **Insignificância no art. 168** — admissibilidade **não é automática**; depende do valor e das circunstâncias. [NÃO VERIFICADO — conferir a posição atual do STF/STJ para o tipo]
- **Marco consumativo (data da inversão da posse) para prescrição** — [NÃO VERIFICADO — conferir precedente]

Não invente número de HC, REsp, RE, Súmula, Tema ou Informativo. Na dúvida, **omitir vence inventar**.

## Erros comuns e checklist (defesa)

**Anti-padrões (evitar):**
- Aceitar a capitulação da denúncia sem testar **furto × estelionato × apropriação** — o tipo errado abre a defesa.
- Tratar **inadimplemento contratual** como se fosse crime — é o erro que a acusação quer que a defesa não perceba.
- Presumir a **inversão da posse** sem exigir **ato inequívoco de disposição como dono**.
- Ignorar a **dúvida honesta sobre direito próprio** (retenção, compensação) que desloca para o art. 345 ou torna o fato atípico.
- Confundir o crime comum (168) com a **apropriação indébita previdenciária (168-A)** — teoria oposta (omissivo próprio, SV 24, extinção pelo pagamento); **este material não trata do 168-A**.
- Esquecer o **arrependimento posterior (art. 16)**, o **sursis processual** e a **ANPP** — saídas frequentes e vantajosas.
- Citar súmula/acórdão **de memória**, sem o gate de `jurisprudencia-stj-stf`.

**Checklist:**
- [ ] Título da posse identificado e testada a **licitude/desvigilância** da posse anterior?
- [ ] Aplicados os testes de distinção com **furto (155)** e **estelionato (171)**?
- [ ] Há prova de **ato inequívoco de inversão** (dono), ou apenas mora/retenção/discussão de valor?
- [ ] Examinada a **dúvida honesta sobre direito próprio** (art. 345 como desclassificação)?
- [ ] Verificada a **natureza da coisa** (fungível × certa) e a existência de **condomínio/sociedade**?
- [ ] Avaliadas **insignificância** e **reparação (art. 16)**?
- [ ] Conferidos **prescrição** (marco na inversão), **sursis processual**, **ANPP** e **imunidades (181–183)**?
- [ ] Se coisa achada (169): ciência de que era perdida, conhecimento do dono, prazo de 15 dias, restituição?
- [ ] Dosimetria e prazos calculados com `calculadora-dosimetria` / `calculadora-prescricao` / `calculadora-tempestividade`?
- [ ] Toda súmula/precedente conferido via `jurisprudencia-stj-stf`?

## Lembretes finais

- **Posse lícita anterior é a elementar-mãe** — sem ela, não é 168 (é furto, estelionato ou fato atípico).
- **Inversão exige ato inequívoco de dono** — mora, retenção e discussão de valor **não** são inversão.
- **Inadimplemento não é crime** — é a espinha dorsal da defesa.
- **Dolo subsequente** (168) × **dolo originário** (171) — se a acusação afirma dolo desde o início, ela descreveu estelionato.
- **Dúvida honesta sobre direito** → art. 345 ou atipicidade.
- **Não confundir com o 168-A previdenciário** — teoria e regime jurídico opostos.
- **Conferir vigência** dos arts. 168/169 e a jurisprudência via `jurisprudencia-stj-stf` **antes** de peticionar.

## Nota de conformidade

Este material é **rascunho técnico de apoio**, sujeito a **revisão humana obrigatória** — a responsabilidade pela peça, pela estratégia e pelas citações é sempre do(a) **advogado(a)** (EAOAB e CED; Provimento 205/2021 da OAB para a comunicação e o marketing jurídico). **Foco em DEFESA por tipo penal.** Nenhuma súmula, tese ou acórdão vai para a peça sem passar pelo gate de `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA — na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
