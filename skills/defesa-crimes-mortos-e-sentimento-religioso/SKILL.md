---
name: defesa-crimes-mortos-e-sentimento-religioso
description: >-
  Use ao construir a DEFESA nos crimes contra o sentimento religioso e o respeito aos mortos — CP
  arts. 208 a 212: ultraje a culto e perturbação de cerimônia (208), perturbação de cerimônia
  funerária (209), violação de sepultura (210), destruição/subtração/ocultação de cadáver (211) e
  vilipêndio a cadáver (212). Eixos: atipicidade por ausência do elemento subjetivo de menoscabo,
  liberdade religiosa e de manifestação… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: ["law", "criminal", "defesa", "mortos-e-sentimento", "sentimento-religioso"]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-mortos-e-sentimento-religioso", "defesa crimes", "sentimento religioso"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-crimes-mortos-e-sentimento-religioso"]
---

# Crimes contra o respeito aos mortos e o sentimento religioso — Defesa (CP arts. 208-212)

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

Esta skill orienta a **defesa técnica** nos crimes do **Título V da Parte Especial do CP** — o Capítulo I (crimes contra o sentimento religioso, art. 208) e o Capítulo II (crimes contra o respeito aos mortos, arts. 209 a 212). São tipos de baixa incidência prática, redação antiga e forte carga moral. O **bem jurídico** protegido não é a fé de alguém nem o cadáver como coisa, mas o **sentimento coletivo de respeito** — à religião como fenômeno social e à memória e à dignidade dos mortos. Essa é a chave de todo o capítulo: pune-se a ofensa a um sentimento difuso, não um patrimônio.

> **Lição central:** aqui a defesa se ganha no **elemento subjetivo e no sentido da conduta**. Todos esses tipos exigem uma conduta que exprima **menoscabo, ultraje, escárnio ou desrespeito** ao sagrado ou ao morto — e isso não se presume do fato bruto. Antes de qualquer tese, pergunte: (1) a conduta traduz **vontade de ultrajar/vilipendiar**, ou tem **outra finalidade** (necessidade, ocultação de outro crime, disputa, curiosidade, manifestação religiosa/artística)? (2) O que a acusação chama de crime contra os mortos **não é, na verdade, furto, dano ou fraude** melhor capitulados? Separar **o fato** (o que se fez) do **sentido normativo** (menosprezo ao sentimento coletivo) é o eixo decisivo.

> **Cautela de vigência e prova (obrigatória antes de citar):** (1) a **jurisprudência sobre os arts. 208-212 é escassa e dispersa** — **não há súmula específica** e há pouquíssimos precedentes de tribunais superiores; **não cite acórdão de memória**, marque **[NÃO VERIFICADO]** e confira **tese + dispositivo** pela skill `jurisprudencia-stj-stf`. (2) Confira a **redação e as penas vigentes** dos arts. 208 a 212 (inclusive os parágrafos de aumento pela violência) antes de fixar competência, JECRIM ou benefícios. (3) Fatos anteriores a qualquer alteração legislativa seguem a **lei mais benéfica** (irretroatividade da lei penal gravosa — CF, art. 5º, XL). Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 208, CP** — três condutas contra o **sentimento religioso**: (a) **escarnecer** de alguém publicamente por motivo de crença ou função religiosa; (b) **impedir ou perturbar** cerimônia ou prática de culto religioso; (c) **vilipendiar** publicamente ato ou objeto de culto religioso. **Parágrafo único:** aumento se há **emprego de violência** (sem prejuízo da pena correspondente à violência). Pena **baixa** — verifique a redação vigente (detenção/multa) para efeito de **JECRIM/IMPO**.
- **Art. 209, CP** — **impedir ou perturbar enterro ou cerimônia funerária**. Parágrafo único: aumento se há **violência**. Pena **baixa** — verificar IMPO.
- **Art. 210, CP** — **violar ou profanar sepultura ou urna funerária**. Pena mais elevada (reclusão) — **verificar redação/pena vigentes**.
- **Art. 211, CP** — **destruir, subtrair ou ocultar cadáver ou parte dele**. Pena mais elevada (reclusão) — **verificar**.
- **Art. 212, CP** — **vilipendiar cadáver ou suas cinzas**. Pena na faixa mais alta do capítulo, porém em **detenção** (não reclusão) — **verificar redação/pena vigentes**.
- **Ação penal:** em regra **pública incondicionada** (não há previsão de condicionamento no capítulo) — confira no caso concreto.
- **Institutos correlatos:** CP art. 23 (**estado de necessidade**, exercício regular de direito, estrito cumprimento de dever legal); CF art. 5º, VI e IX (**liberdade de crença, culto e manifestação**); CPP arts. 158-A a 158-F (**cadeia de custódia** dos vestígios); CP art. 109 (**prescrição**); Lei 9.099/95, arts. 76, 89 e 28-A CPP (despenalizadores).

## Anatomia dos tipos — roteiro de subsunção

Teste **cada elemento em separado**; a ausência de qualquer um leva à atipicidade ou à desclassificação.

**Art. 208 — sentimento religioso (três figuras autônomas):**
1. **Escárnio por crença/função** — exige **publicidade** e o **dolo de escarnecer** (zombar) *por causa* da religião. Crítica, sátira ou debate — ainda que ácidos — **sob a liberdade de expressão** não é escárnio típico.
2. **Impedir/perturbar culto** — a perturbação deve ser **idônea a atrapalhar efetivamente** a cerimônia; incômodo trivial ou exercício de outro direito (ruído lícito, manifestação em local próprio) não basta.
3. **Vilipêndio a ato/objeto de culto** — **publicidade** + **ato de aviltamento** dirigido ao objeto **enquanto sagrado**. Dano a um bem que **por acaso** é religioso, sem finalidade de aviltar o culto, é **dano** (art. 163), não vilipêndio.

**Art. 209 — cerimônia funerária:** verbos **impedir** ou **perturbar** enterro/cerimônia fúnebre. Exige **conduta apta** a obstar/tumultuar o ato; a **finalidade** de desrespeito compõe o sentido do tipo.

**Art. 210 — violação de sepultura:** **violar** (devassar, abrir) ou **profanar** (aviltar) sepultura ou urna. O núcleo é o **acesso/aviltamento indevido** à morada dos mortos; se a entrada tem finalidade de **subtrair** algo, atenção ao concurso e à distinção com o furto.

**Art. 211 — destruir/subtrair/ocultar cadáver:** objeto material é o **cadáver** (ou parte). **Subtrair cadáver** não é furto (cadáver não é "coisa" patrimonial no sentido do 155). **Ocultar** exige **conduta apta a esconder** o corpo de quem de direito — e, com frequência, aparece **em concurso** ou como **desdobramento** de um homicídio (a ocultação como crime autônomo x mero exaurimento).

**Art. 212 — vilipêndio a cadáver/cinzas:** exige **ato de aviltamento** (menoscabo, ultraje) dirigido ao corpo/cinzas. É o **elemento subjetivo de menosprezo** que separa o vilipêndio de manuseios legítimos (funerário, pericial, religioso, científico) ou de mera indignidade sem dolo de aviltar.

> **Regra de leitura:** em todos eles não há forma **culposa** — só se pune a **dolo**. Conduta negligente, acidental ou fortuita (esbarrão que derruba a urna, atraso involuntário do cortejo, manuseio técnico do corpo) **é atípica** como crime deste capítulo.

## Competência, despenalizadores e prescrição

Estes tipos convivem em **duas faixas de pena**, e a defesa deve mapear a faixa correta **conferindo a redação vigente** de cada artigo:

- **Faixa baixa (arts. 208 e 209)** — pena reduzida (detenção/multa na redação clássica). Se o máximo em abstrato não exceder **2 anos**, são **infrações de menor potencial ofensivo** → **JECRIM**, com **transação penal** (art. 76 da Lei 9.099/95) e **composição**; e a **prescrição corre em prazo curto** (art. 109 CP), de modo que a **extinção da punibilidade** costuma ser a primeira frente. **Atenção:** o **aumento pela violência** (parágrafo único) pode elevar a pena e **retirar o caráter de IMPO** — cheque no caso.
- **Faixa mais elevada (arts. 210, 211 e 212)** — pena **mais alta**, com máximo em abstrato **acima de 2 anos**, de modo que **nenhum deles é IMPO**. Atenção à **espécie de pena**, que difere dentro da faixa: os arts. 210 e 211 são apenados com **reclusão**, ao passo que o art. 212 (vilipêndio a cadáver) é **detenção** — confira a redação vigente. Em todos, sendo a **pena mínima igual a 1 ano** (na redação clássica), cabem em tese **suspensão condicional do processo** (art. 89 da Lei 9.099/95, mínimo ≤ 1 ano) e **ANPP** (art. 28-A CPP, mínimo inferior a 4 anos, crime **sem violência ou grave ameaça**) — pleiteie-os de forma **principal e subsidiária**.
- **Competência:** em regra **Justiça Estadual comum** (ou JECRIM na faixa baixa). Só se cogita de competência federal se houver **elemento federal específico** no caso concreto (a definir, com checagem) — não presuma.
- **Prescrição:** verifique sempre a **PPP pela pena em abstrato** e, sobrevindo condenação, a **retroativa/intercorrente** — decisiva nos arts. 208/209 pela pena baixa.

## Catálogo de teses defensivas

1. **Atipicidade por ausência do elemento subjetivo (menoscabo/vilipêndio)** — a conduta não exprimiu **vontade de ultrajar** o sagrado ou o morto; teve finalidade neutra ou lícita. É a **tese-mãe** de todo o capítulo.
2. **Liberdade de crença, culto e expressão (CF, art. 5º, VI e IX)** — crítica religiosa, sátira, arte, discurso ou manifestação de outra fé não são escárnio/vilipêndio; a fronteira é o **discurso de ódio real**, não a divergência.
3. **Desclassificação para crime patrimonial ou de dano** — o que se imputa como crime contra os mortos é, na verdade, **furto (155)**, **dano (163)**, **estelionato (171)** ou **fraude processual (347)** melhor capitulados (ver tabela).
4. **Estado de necessidade / exercício regular de direito (art. 23 CP)** — exumação ou remoção por razão sanitária, obra pública, resgate, necessidade médica ou determinação administrativa lícita afasta a ilicitude.
5. **Ausência de publicidade** (arts. 208, "escárnio" e "vilipêndio a objeto de culto") — o tipo exige **caráter público**; ato reservado não preenche a elementar.
6. **Ausência de perturbação idônea** (arts. 208 e 209) — o incômodo alegado foi trivial, não impediu nem perturbou efetivamente a cerimônia.
7. **Consentimento/legitimidade** — manuseio de cadáver por quem tem **atribuição legal** (agente funerário, perito, familiar, religioso oficiante) ou com autorização não configura vilipêndio.
8. **Fragilidade probatória** — prova indireta de autoria; ausência de exame pericial que ligue a conduta ao dano; **cadeia de custódia** (arts. 158-A a 158-F CPP) dos vestígios (fotos, corpo, sepultura) quebrada.
9. **Distinção entre crime autônomo e exaurimento** (art. 211) — quando a ocultação de cadáver integra o *iter* do homicídio já imputado, discutir **concurso, absorção e dupla punição** (vedação ao *bis in idem*).
10. **Extinção da punibilidade — prescrição** — nos arts. 208 e 209 (pena baixa) os prazos são **curtos**; verificar sempre prescrição da pretensão punitiva, inclusive **retroativa/intercorrente**.
11. **Dosimetria e regime** — pena-base no mínimo; afastar o **aumento pela violência** (parágrafo único dos arts. 208/209) quando a violência não se comprova ou já é punida em separado; regime aberto e **substituição por restritivas** (art. 44 CP) nos crimes sem violência/grave ameaça.

## Contra-teses da acusação (antecipar)

- **Elemento subjetivo evidenciado** pelo contexto (postagem/vídeo com legenda ofensiva, ato performático dirigido ao sagrado, gestos de deboche sobre o corpo/túmulo).
- **Publicidade demonstrada** por gravação, transmissão em rede social ou prática em local aberto.
- **Ocultação de cadáver autônoma** (art. 211) mesmo após o homicídio, como conduta com desígnio próprio de frustrar a investigação → **concurso material**.
- **Violência associada** para incidir o aumento (parágrafo único dos arts. 208/209).
- **Perturbação idônea** comprovada por testemunhas do culto/velório.

A defesa deve **atacar cada uma na origem:** o sentido real da conduta (finalidade lícita/neutra), a ausência de publicidade ou de perturbação idônea, a inexistência de dolo de aviltar, a melhor capitulação patrimonial e a quebra da prova (autoria, perícia, custódia).

## Distinção de figuras próximas

| Tipo | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Furto (155)** | subtração de **coisa alheia móvel** com fim de apropriação | Bens **de dentro** da sepultura/urna (joias, metais) → é **furto**, não violação de sepultura em si; discutir capitulação e concurso |
| **Dano (163)** | destruir/deteriorar **coisa alheia**, sem carga de aviltamento ao sagrado | Bem religioso danificado **sem dolo de vilipendiar o culto** → **dano**, não art. 208 |
| **Injúria / crimes contra a honra (138-140)** | ofensa à **pessoa determinada** | Ofensa dirigida a **um fiel**, não ao culto como sentimento coletivo → honra, não 208 |
| **Fraude processual (347)** | inovar o estado de lugar/coisa/pessoa para induzir o juiz/perito em erro | Mexer no cadáver/cena **para enganar a investigação** → 347 (ou concurso), não vilipêndio |
| **Homicídio + ocultação (121 + 211)** | a ocultação como **crime autônomo** x mero **exaurimento** | Se a ocultação integra o *iter* já punido, discutir **absorção**/ *bis in idem* |
| **Intolerância religiosa (Lei 7.716/89)** | **discriminação/preconceito** de religião (racismo religioso) | Cuidado: ofensa preconceituosa pode ser **outro tipo mais grave** — analisar recorte e evitar dupla imputação |

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** os arts. 208-212 têm **jurisprudência escassa** e **nenhuma súmula específica** nos tribunais superiores. **Não cite acórdão de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo** pela skill `jurisprudencia-stj-stf` antes de levar à peça.

Pontos que **dependem de checagem** antes de afirmar:
- Se a **ocultação de cadáver (211)** posterior ao homicídio configura **crime autônomo em concurso** ou é absorvida como exaurimento — **[NÃO VERIFICADO]**, há divergência.
- Fronteira entre **escárnio religioso (208)** e **liberdade de expressão/sátira**, e entre ofensa ao culto e **intolerância religiosa** (Lei 7.716/89) — **[NÃO VERIFICADO]**.
- Penas e eventual incidência de **JECRIM/IMPO** conforme a **redação vigente** de cada artigo — **conferir**.

Qualquer enunciado sobre esses tipos → **[NÃO VERIFICADO]** — buscar precedente atual e a redação legal em vigor antes de afirmar.

## Checklist e anti-padrões

- [ ] **Sentido da conduta:** há **dolo de ultrajar/vilipendiar** o sagrado ou o morto, ou finalidade lícita/neutra?
- [ ] **Publicidade** (208 escárnio/vilipêndio a objeto) e **perturbação idônea** (208/209) comprovadas?
- [ ] **Melhor capitulação:** o fato é, na verdade, **furto, dano, injúria ou fraude processual**?
- [ ] **Excludentes (art. 23):** estado de necessidade, exercício regular de direito, dever legal (exumação/remoção lícita)?
- [ ] **Ocultação de cadáver (211):** crime autônomo ou **exaurimento** do homicídio? *Bis in idem* afastado?
- [ ] **Prova:** autoria demonstrada? Há **exame pericial** ligando conduta e resultado? **Cadeia de custódia** íntegra (arts. 158-A ss.)?
- [ ] **Aumento pela violência** (parágrafo único de 208/209) — comprovado ou punido em duplicidade?
- [ ] **Despenalizadores:** JECRIM/transação (208/209, se IMPO); **sursis processual** e **ANPP** nos demais?
- [ ] **Prescrição** verificada (penas baixas nos arts. 208/209 → prazos curtos)?
- [ ] **Redação/pena vigentes** conferidas e **jurisprudência** passada pelo gate `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Presumir o **menoscabo** do fato bruto — o elemento subjetivo é elementar e **não se presume**.
- Tratar **furto** de bens da sepultura como se fosse apenas violação de sepultura (perde-se a melhor capitulação/absorção).
- Confundir **crítica/sátira religiosa** protegida com escárnio típico, ignorando a liberdade de expressão.
- Aceitar **ocultação de cadáver** como crime autônomo sem discutir absorção/*bis in idem* com o homicídio.
- Ignorar **estado de necessidade** em remoções sanitárias, obras ou resgates.
- Aceitar prova de dano à sepultura/cadáver **sem perícia e sem cadeia de custódia**.
- Citar "precedente sobre vilipêndio" **de memória** — a jurisprudência é escassa e instável.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar o **dolo de ultrajar/vilipendiar**, a publicidade, a perturbação idônea e a autoria é da acusação; espelhe as teses acima como **pontos a provar**, não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sensibilidade e sigilo/LGPD:** tema de forte carga emocional (luto, fé) — trate a família e a vítima com respeito; o ataque é à **qualificação jurídica** e à **prova**, não à dor alheia. Dados do assistido e imagens do corpo/cena não vão a repositório público.

## Lembretes finais

- **O eixo é o sentido da conduta** — sem **dolo de menoscabo/vilipêndio**, não há crime; teste elemento por elemento.
- **O bem jurídico é o sentimento coletivo**, não patrimônio nem o cadáver como coisa — daí a distinção de furto/dano.
- **Publicidade e perturbação idônea** são elementares de 208/209 — cobre prova de ambas.
- **Ocultação de cadáver (211):** discuta sempre **autonomia x exaurimento** frente ao homicídio.
- **Penas baixas (208/209)** destravam JECRIM/despenalizadores e **prescrição rápida** — verifique.
- **Sem jurisprudência de memória** — capítulo de precedentes escassos; confira via `jurisprudencia-stj-stf` e cheque a redação vigente.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
