---
name: defesa-sequestro-carcere-privado
description: >-
  Use ao defender em SEQUESTRO ou CÁRCERE PRIVADO (CP, art. 148): atipicidade por ausência de
  privação relevante da liberdade, consentimento válido da vítima, desclassificação para
  constrangimento ilegal (art. 146), absorção pelo crime-fim (extorsão mediante sequestro do art.
  159, roubo do art. 157, estupro), qualificadoras do §1º e §2º e o alcance do dolo. Gatilhos:
  sequestro, cárcere privado, art. 148 CP, privação de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-a-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-sequestro-carcere-privado"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-sequestro-carcere-privado", "defesa sequestro", "carcere privado"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Sequestro e Cárcere Privado (CP, art. 148)

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

Esta skill orienta a **estratégia e a redação da defesa** (resposta à acusação, memoriais, alegações finais, razões de apelação) no crime de **sequestro e cárcere privado** — a conduta de **privar alguém de sua liberdade**, mediante sequestro ou cárcere privado (CP, art. 148). É crime **contra a liberdade individual** (Título I, Capítulo VI do CP), **fora da competência do júri**, permanente e de forma livre.

> **Lição central:** o campo de batalha do art. 148 é a **fronteira**. Antes de discutir prova, decida em que fronteira o caso está: (a) **atipicidade** — não houve privação *juridicamente relevante* da liberdade de locomoção; (b) **desclassificação** — houve constrangimento momentâneo, e o fato é **constrangimento ilegal (art. 146)**, não sequestro; ou (c) **absorção** — a privação foi **meio** de outro crime (extorsão mediante sequestro, roubo, estupro), que absorve o art. 148 (consunção). Errar a fronteira é perder a tese mais forte.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente do art. 148 do CP** e de suas qualificadoras (§1º e §2º) — o rol foi ampliado ao longo do tempo (a **Lei 11.106/2005** alterou incisos do §1º; leis posteriores acrescentaram hipóteses). Confira também a pena, a classificação como hediondo (o **sequestro/cárcere privado NÃO é, em regra, hediondo** — não confundir com a **extorsão mediante sequestro** do art. 159, essa sim hedionda) e qualquer súmula/tese via a skill `jurisprudencia-stj-stf` antes de fundamentar. Na dúvida sobre um precedente específico, **omitir vence inventar**.

---

## Base legal

- **Art. 148, *caput*, CP** — sequestrar ou cárcere privar alguém, privando-o de sua liberdade (pena de reclusão de 1 a 3 anos).
- **Art. 148, §1º, CP** — qualificadoras (forma qualificada): entre outras, vítima ascendente/descendente/cônjuge ou companheiro do agente ou maior de 60 anos; internação em casa de saúde/hospital sem indicação; privação por mais de **15 dias**; contra menor de 18 anos; para fins libidinosos (conferir o rol e os incisos na redação vigente).
- **Art. 148, §2º, CP** — qualificadora pelo resultado: se resultar **grave sofrimento físico ou moral**, em razão de maus-tratos ou da natureza da detenção (pena mais elevada).
- **Art. 146, CP** — **constrangimento ilegal** (a figura vizinha e o principal alvo da desclassificação).
- **Art. 159, CP** — **extorsão mediante sequestro** (crime-fim patrimonial; hediondo — Lei 8.072/90) — quando a privação visa **obter vantagem como condição ou preço do resgate**.
- **Arts. 13, 14, II, 15 e 29, CP** — nexo, tentativa, desistência voluntária/arrependimento eficaz e concurso de agentes.
- **Art. 61 e art. 71, CP** — agravantes e continuidade delitiva, quando houver pluralidade de vítimas/atos.

> **Distinção de escopo:** esta skill cuida do **art. 148**. A defesa em **constrangimento ilegal (art. 146)** tem skill própria (`defesa-constrangimento-ilegal`); aqui tratamos do 148 e, sobretudo, da **absorção** entre os dois e com os crimes patrimoniais/sexuais. Se o caso é **extorsão mediante sequestro (art. 159)**, a moldura muda (crime hediondo, delação, pena elevada) — trate na skill correspondente, se existir, e confira o enquadramento.

---

## A tríade da fronteira — o núcleo da defesa

Toda a estratégia gira em torno de posicionar o fato na fronteira certa. Trabalhe as três em ordem de força, começando pela mais benéfica ao réu.

### 1) Atipicidade — não houve privação *relevante* da liberdade

O tipo exige **privação da liberdade de locomoção** com **relevância jurídica** (duração e efetividade que ultrapassem o insignificante). Teses:

- **Privação ínfima / bagatela:** contato momentâneo, restrição de segundos, sem efetiva supressão do poder de ir e vir. Discutir a **relevância penal** da conduta.
- **Ausência de efetiva privação:** a vítima podia sair, tinha meios de locomoção, não estava confinada — restrição meramente moral ou psicológica sem cerceamento físico da liberdade de ir e vir pode não configurar o *caput*.
- **Dolo ausente/erro:** o agente não tinha consciência e vontade de privar a liberdade (ex.: retenção crendo exercer direito, discussão doméstica sem ânimo de sequestrar) — falta o dolo do tipo.

### 2) Consentimento válido da vítima

A liberdade individual é bem **disponível** no sentido de que o **consentimento válido do ofendido** afasta a tipicidade da privação. Requisitos do consentimento eficaz:

- Titular **capaz** e **legitimado** a dispor do bem;
- Consentimento **livre, esclarecido e anterior/concomitante** à conduta;
- **Ausência de vício** (fraude, coação, erro).

➡️ **Tese:** se a vítima **consentiu** em permanecer no local (ex.: acompanhou voluntariamente, permaneceu por vontade própria, revogou tardiamente o consentimento), não há privação típica enquanto durou o consentimento válido. **Cuidado:** a **revogação** do consentimento, a partir do momento em que manifestada, pode reabrir a tipicidade — delimitar o marco temporal.

### 3) Desclassificação para constrangimento ilegal (art. 146)

Esta é a desclassificação **mais relevante** na prática. A diferença é de **grau e finalidade**:

| Critério | Sequestro/cárcere (art. 148) | Constrangimento ilegal (art. 146) |
|---|---|---|
| Bem tutelado | Liberdade de **locomoção** (ir e vir) | Liberdade de **autodeterminação** (fazer ou não fazer) |
| Núcleo | **Privar** a liberdade (estado permanente) | **Constranger** a fazer/não fazer o que a lei não obriga |
| Duração | Privação com **permanência** relevante | Em regra **momentânea**, instantânea |
| Finalidade | Privar a liberdade é **o fim** | A restrição é **meio** para obrigar a vítima a algo |

➡️ **Tese defensiva:** quando a restrição foi **breve, instrumental e destinada a compelir** a vítima a uma conduta pontual (entregar algo, assinar, deixar o local), sem intenção autônoma de mantê-la privada, o fato é **constrangimento ilegal (art. 146)** — pena sensivelmente menor — e não sequestro. Sustentar a ausência do *animus* de privação permanente da liberdade.

---

## Absorção pelo crime-fim (consunção) — a segunda grande frente

Quando a privação da liberdade é **meio necessário ou fase de execução** de outro crime, o art. 148 é **absorvido** pelo crime-fim (princípio da consunção). Mapear sempre o crime-fim:

- **Extorsão mediante sequestro (art. 159):** se a privação visa **resgate/vantagem**, o fato é o art. 159 (crime-fim patrimonial e hediondo), **não** o art. 148 em concurso. A defesa deve **impedir a dupla imputação** (159 + 148) — o sequestro é elementar do 159.
- **Roubo (art. 157):** a breve privação da vítima para consumar a subtração (mantê-la rendida durante o assalto) é, em regra, **absorvida** pelo roubo — não há concurso com o 148 quando a restrição não excede o necessário à subtração. **Discutir** a autonomia da privação: se, cessada a subtração, a vítima segue privada de forma autônoma e prolongada, aí pode surgir o 148.
- **Estupro (art. 213):** a manutenção da vítima no local pelo tempo necessário à prática do ato pode ser absorvida pelo crime sexual; privação autônoma e prolongada além disso pode configurar concurso — **delimitar**.
- **Tortura, homicídio, tráfico de pessoas:** verificar se a privação é elementar/meio do crime mais grave.

➡️ **Regra de ouro da consunção:** a privação **não pode exceder** o estritamente necessário à execução do crime-fim. Se excedeu (privação **autônoma**, com finalidade própria, após consumado o crime-fim), a acusação sustentará **concurso**; a defesa deve demonstrar que a restrição foi **meio** e **não excedeu** o necessário. É questão de **fato e de dolo** — narrar a linha do tempo com precisão.

---

## Qualificadoras (§1º e §2º) — atacar uma a uma

Reconhecida a tipicidade do *caput*, a segunda linha de defesa é **afastar as qualificadoras**, que elevam muito a pena. Confira o rol vigente via `jurisprudencia-stj-stf` e ataque:

- **Duração superior a 15 dias:** contestar a **contagem** (marco inicial e final da privação); se ≤ 15 dias, cai a qualificadora.
- **Vítima menor de 18 anos / maior de 60 / parente / cônjuge/companheiro:** contestar a **prova da condição** e do **conhecimento** dela pelo agente (a qualificadora subjetiva exige que o agente saiba da condição).
- **Fim libidinoso:** exige **prova do especial fim** — sem ele, a qualificadora não incide; e, havendo crime sexual autônomo consumado, discutir absorção/concurso (evitar bis in idem).
- **Internação em casa de saúde/hospital sem indicação:** exigir prova da ausência de indicação médica.
- **§2º — grave sofrimento físico ou moral:** exige **resultado** comprovado (maus-tratos ou natureza da detenção); atacar a prova pericial/testemunhal do sofrimento qualificado, distinguindo-o do desconforto inerente a qualquer privação.

> Qualificadora não se presume: **cada uma reclama prova específica** do fato e, quando subjetiva, do **conhecimento** do agente. Na dúvida, milita o *in dubio pro reo*.

---

## Teses de execução e concurso

- **Crime permanente:** o sequestro se protrai no tempo enquanto dura a privação — relevante para **flagrante** (cabível a qualquer tempo durante a permanência), **prescrição** (o termo inicial é a **cessação** da permanência — art. 111, III, CP) e **lei penal no tempo** (aplica-se a lei vigente durante a permanência).
- **Tentativa (art. 14, II):** possível quando iniciada a execução da privação sem que se consume (a vítima é subtraída à privação por circunstâncias alheias).
- **Desistência voluntária / arrependimento eficaz (art. 15):** se o agente **liberta espontaneamente** a vítima antes de consumar a finalidade, discutir a incidência (responde só pelos atos já praticados).
- **Pluralidade de vítimas:** concurso formal ou material conforme o desígnio; **continuidade delitiva** (art. 71) se mesmas condições de tempo/lugar/modo.

---

## Contra-teses da acusação (antecipar para neutralizar)

| Tese acusatória | Resposta defensiva |
|---|---|
| A privação foi relevante e autônoma → art. 148 | Demonstrar brevidade/instrumentalidade → art. 146, ou absorção pelo crime-fim |
| Concurso 148 + crime-fim (roubo/estupro/159) | **Consunção:** a privação foi meio e não excedeu o necessário — bis in idem vedado |
| Consentimento inexistente ou viciado | Provar consentimento livre e o **marco** de eventual revogação |
| Qualificadora presente | Exigir prova específica do fato e do **conhecimento** da condição pelo agente |
| Dolo de privar presente | Sustentar ausência do *animus* / erro / exercício putativo de direito |

---

## Súmulas e precedentes (sob o Citation Gate)

> **CITATION GATE — inegociável.** Cite com segurança apenas **dispositivos de lei** e **súmulas notórias** cujo teor você tem certeza. Para **qualquer** precedente específico (número de HC/REsp/RE, informativo, tema repetitivo, tese) **confirme antes** via `jurisprudencia-stj-stf`. **Não invente número de acórdão.** Prefira ensinar a **tese** e o **dispositivo** a arriscar uma citação.

- **Súmula 711/STF** — a lei penal mais grave aplica-se ao **crime continuado** ou ao **crime permanente** se a sua vigência é anterior à **cessação** da continuidade ou da permanência. *(Notória; diretamente aplicável ao sequestro por ser crime permanente — confirmar teor/numeração via `jurisprudencia-stj-stf`.)*
- **Princípio da consunção** para absorção do art. 148 pelo crime-fim: é **doutrina e jurisprudência consolidadas**, mas **qualquer precedente numerado** (STJ/STF sobre roubo que absorve a privação, ou sobre concurso quando a privação excede o necessário) deve ser **verificado** antes de citar — `[NAO VERIFICADO]` até confirmação.
- Teses sobre **relevância da privação**, **consentimento** e **desclassificação para o art. 146**: sustentar pela **doutrina e pelo dispositivo**; se for citar acórdão específico, marque `[NAO VERIFICADO]` e confira na `jurisprudencia-stj-stf`.

➡️ **Regra prática:** dispositivo de lei + súmula notória = pode citar com conferência de vigência. Precedente com número = passa pelo gate **sempre**.

---

## Estrutura da peça de defesa (resposta / memoriais / apelação)

1. **Síntese da imputação e teoria do caso** — em uma frase, onde está a fronteira que você vai sustentar (atipicidade / desclassificação / absorção).
2. **Dos fatos — linha do tempo da privação** — narrar com precisão **início, duração, efetividade e cessação** da restrição, e a **finalidade** (é o que decide a fronteira).
3. **Preliminares**, se houver (nulidades: cadeia de custódia da prova, prova da permanência, competência).
4. **Do mérito — teses em cascata:**
   - a) **atipicidade** (privação irrelevante / consentimento / ausência de dolo);
   - b) **subsidiariamente, desclassificação** para constrangimento ilegal (art. 146);
   - c) **subsidiariamente, absorção** pelo crime-fim (consunção — vedação ao bis in idem);
   - d) **subsidiariamente, afastamento das qualificadoras** (uma a uma);
   - e) **subsidiariamente, dosimetria** e continuidade/desistência.
5. **Do pedido** — absolvição (art. 386, CPP, inciso adequado) ou desclassificação/afastamento de qualificadora; subsidiariamente, dosimetria mínima.
6. **Provas requeridas** — perícias, testemunhas, marco temporal da privação.

> **Pedidos em cascata (subsidiariedade):** ofereça sempre a tese máxima (atipicidade/absolvição) e, em degraus, as subsidiárias (desclassificação → absorção → qualificadora → dosimetria). Nunca deixe o juízo sem uma saída intermediária favorável.

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Discutir prova antes de decidir a **fronteira** (atipicidade / 146 / absorção) — a tese vem primeiro.
- Aceitar **concurso** do art. 148 com o crime-fim sem levantar a **consunção** (bis in idem).
- Confundir **art. 148** com **extorsão mediante sequestro (art. 159)** — regimes e penas muito diferentes (o 159 é hediondo).
- Tratar o sequestro como crime instantâneo — é **permanente** (impacta flagrante, prescrição e lei no tempo).
- Deixar de atacar as **qualificadoras uma a uma**, exigindo prova do fato **e** do conhecimento da condição pelo agente.
- Ignorar o marco da **revogação** do consentimento (reabre a tipicidade a partir dali).
- Citar **precedente numerado** de memória, sem passar pelo Citation Gate.

**Checklist:**
- [ ] Fronteira definida (atipicidade / desclassificação art. 146 / absorção pelo crime-fim)?
- [ ] Linha do tempo da privação (início, duração, efetividade, cessação, finalidade) narrada?
- [ ] Consunção levantada quando há crime-fim (roubo/estupro/159), com vedação ao bis in idem?
- [ ] Consentimento e seu **marco de revogação** examinados?
- [ ] Cada **qualificadora** do §1º/§2º atacada com exigência de prova específica e do conhecimento da condição?
- [ ] Natureza **permanente** considerada (flagrante, prescrição — art. 111, III, CP; lei no tempo — Súm. 711/STF)?
- [ ] Redação vigente do art. 148 e suas qualificadoras conferida?
- [ ] Todo precedente numerado passou pelo gate `jurisprudencia-stj-stf` (e `verificacao-citacoes`)?
- [ ] Pedidos em **cascata** (absolvição → desclassificação → absorção → qualificadora → dosimetria)?

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pela estratégia e por toda citação é do **advogado** responsável (CED/OAB, dever de diligência) — nada aqui substitui o juízo profissional e a leitura dos autos concretos.
- **Polo:** esta skill é do **polo de DEFESA** (advocacia criminal / Defensoria). O **roteador deve conferir o polo** da instituição (`_criminalsquad/_memory/company.md`) antes de acionar — se o pedido for do **polo acusatório** (MP/assistente de acusação), a moldura das teses inverte-se e deve-se usar a skill de acusação correspondente.
- **Ética por polo:** OAB + Provimento 205/2021 (advocacia); LC 80/94 (Defensoria); CNMP (se, por exceção, uso acusatório).
- **Citation Gate:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de ir para a peça. Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
