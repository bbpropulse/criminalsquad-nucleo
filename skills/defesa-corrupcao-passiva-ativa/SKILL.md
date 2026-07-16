---
name: defesa-corrupcao-passiva-ativa
description: >-
  Use ao defender imputação de corrupção passiva (CP 317) ou ativa (CP 333) — banco de teses do
  binômio: ausência de ato de ofício determinado, atipicidade da mera 'compra de facilidade',
  distinção entre vantagem indevida e presente/cortesia, bilateralidade x independência dos tipos,
  corrupção passiva x concussão, causa de aumento do §1º e forma privilegiada do §2º, e a estrutura
  forense (resposta à acusação, memoriais, HC… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, tipo-penal, crimes-administracao-publica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-corrupcao-passiva-ativa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-corrupcao-passiva-ativa", "defesa corrupcao", "passiva ativa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Corrupção Passiva e Ativa (CP arts. 317 e 333)

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

Esta skill é um **banco de teses defensivas por tipo penal** para as imputações de **corrupção passiva** (art. 317 do CP — polo do funcionário público) e **corrupção ativa** (art. 333 do CP — polo do particular). Cobre a estrutura dos tipos, as teses de atipicidade e diminuição, as distinções com figuras próximas (concussão, tráfico de influência, advocacia administrativa) e a estrutura forense da defesa (resposta à acusação, memoriais, HC de trancamento).

> **Lição central:** o coração da defesa está no **elemento normativo do tipo — a vantagem indevida "em razão da função" e o vínculo com um ato de ofício determinado**. Antes de discutir prova, teste a **subsunção**: há ato de ofício **individualizado** que a vantagem visa comprar/retribuir? Se a denúncia descreve apenas "boa relação", "facilidade genérica" ou "agrado", falta elementar — e a via é **atipicidade / rejeição / trancamento**, não mérito.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. **317, 333, 327 e 337-B a 337-D** do CP e a existência de causas de aumento/formas privilegiadas. A **Lei 10.763/2003** elevou as penas da corrupção — o *caput* dos arts. 317 e 333, que era de **1 a 8 anos** na redação anterior, passou a **reclusão de 2 a 12 anos** (patamar vigente) — e a **Lei 11.466/2007** e diplomas posteriores tocaram tipos correlatos; a **corrupção ativa em transação comercial internacional** (art. 337-B) tem regramento próprio. Confira também súmulas, temas repetitivos e eventual *overruling* pela skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Toda referência normativa e todo precedente passam pelo gate `verificacao-citacoes`.

---

## Base legal

- **Art. 317 do CP — Corrupção passiva:** "**Solicitar** ou **receber**, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou **aceitar promessa** de tal vantagem." Pena de reclusão de 2 a 12 anos e multa (redação da Lei 10.763/2003).
- **Art. 317, §1º (aumento de 1/3):** se, em consequência da vantagem ou promessa, o funcionário **retarda ou deixa de praticar** ato de ofício, ou o **pratica infringindo dever funcional**.
- **Art. 317, §2º (forma privilegiada — corrupção "imprópria"):** se o funcionário pratica, deixa de praticar ou retarda ato de ofício **cedendo a pedido ou influência de outrem**, **sem** vantagem/promessa → pena de detenção, mais branda; **não** exige vantagem indevida.
- **Art. 333 do CP — Corrupção ativa:** "**Oferecer** ou **prometer** vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício." Pena de reclusão de 2 a 12 anos e multa. **Parágrafo único:** aumento de 1/3 se, em razão da vantagem/promessa, o funcionário retarda/omite ato de ofício ou o pratica infringindo dever.
- **Art. 327 do CP — conceito de funcionário público** (e **equiparação**, §1º): elementar do art. 317; a defesa deve verificar se o acusado **é** ou **se equipara** a funcionário público para fins penais.
- **Arts. 337-B a 337-D do CP — corrupção ativa/passiva em transação comercial internacional** (funcionário público estrangeiro): tipos autônomos — não confundir com 317/333.
- **Lei 12.850/2013 (organização criminosa)** e delação premiada: frequente pano de fundo probatório e de causas de diminuição por colaboração.

---

## Anatomia dos tipos — mapa de elementares (a defesa ataca cada uma)

| Elementar | Corrupção passiva (317) | Corrupção ativa (333) |
|---|---|---|
| **Sujeito ativo** | funcionário público (art. 327) — crime próprio | particular (qualquer pessoa) |
| **Núcleos** | solicitar / receber / aceitar promessa | oferecer / prometer |
| **Objeto** | vantagem **indevida** (não precisa ser econômica em toda leitura — verificar tese adotada) | vantagem **indevida** oferecida/prometida |
| **Nexo funcional** | "**em razão** da função", ainda que fora dela ou antes de assumir | dirigida a **funcionário público** |
| **Finalidade / ato de ofício** | discutida (ver tese central abaixo) | **para determinar** ato de ofício (elemento subjetivo do injusto) |
| **Consumação** | com a solicitação/recebimento/aceite da promessa (formal, exige-se conduta) | com a oferta/promessa (formal); não exige aceitação |
| **Momento** | admite antes de assumir a função | oferta/promessa a quem já é ou será funcionário |

> **A grande assimetria (decorar):** no art. **333 (ativa)**, a lei **exige expressamente** que a oferta/promessa seja "**para determiná-lo a praticar, omitir ou retardar ato de ofício**" — o **ato de ofício determinado é elementar**. No art. **317 (passiva)**, o texto **não repete** essa cláusula finalística no *caput* (ela aparece como **causa de aumento** no §1º). Daí a controvérsia doutrinária e jurisprudencial sobre a necessidade (ou não) de **ato de ofício determinado** na corrupção passiva — ponto nevrálgico da defesa. **Confirme o estado atual da jurisprudência do STF/STJ sobre a exigência de ato de ofício determinado na corrupção passiva pela skill `jurisprudencia-stj-stf` antes de sustentar a tese.**

---

## Tese central da defesa — ausência de ato de ofício determinado

O argumento mais potente contra denúncias de corrupção, sobretudo em contextos de "caixa de propina genérica", é a **falta de vínculo entre a vantagem e um ato de ofício individualizado**.

- **Na corrupção ativa (333):** o ato de ofício determinado é **elementar** — a oferta deve visar ato **específico e determinável** de competência do funcionário. Vantagem oferecida para "manter boas relações", "ter as portas abertas" ou "agilizar o que vier" **não preenche** o tipo (mero *ato indeterminado / compra de facilidade genérica*). **Tese:** atipicidade por ausência de ato de ofício determinado.
- **Na corrupção passiva (317):** sustentar que, ainda que o *caput* não repita a cláusula finalística, a **interpretação sistemática e a exigência de lesividade** (princípio da ofensividade) reclamam vínculo com um ato de ofício **determinado ou ao menos determinável**, inserido nas **atribuições** do funcionário. Sem ato de ofício vinculável à função, o que há é, no máximo, ilícito administrativo/ético — **não** corrupção. **[Confirmar a posição atual do STF/STJ pela `jurisprudencia-stj-stf`: há oscilação relevante.]**
- **Ato fora da competência do funcionário:** se o ato pretendido **não está nas atribuições** do agente, discute-se **atipicidade** (não é "ato de ofício") ou reclassificação para **tráfico de influência** (art. 332) — figura mais branda. Testar sempre a **competência funcional concreta**.

> **Régua prática:** leia a denúncia procurando a frase que descreve **qual ato** a vantagem comprava. Se ela não existe, ou é substituída por generalidades, a peça está **inepta** quanto à elementar (art. 41 CPP) — pedir **rejeição/emenda** (art. 395, I, CPP) ou **trancamento** por falta de justa causa.

---

## Banco de teses defensivas (corrupção passiva — art. 317)

1. **Atipicidade por ausência de ato de ofício determinado / determinável** — ver tese central acima. **[Confirmar posição atual STF/STJ.]**
2. **Vantagem "devida" ou lícita** — remuneração, honorário, gratificação legalmente prevista, ou valor cuja causa é **estranha à função** (dívida pessoal, negócio privado legítimo). A elementar é vantagem **indevida** *em razão da função*.
3. **Presente/cortesia de bagatela x vantagem indevida** — brindes protocolares, cortesias de módico valor e adequados socialmente podem configurar **atipicidade material** (princípio da adequação social / insignificância, com cautela) ou, no máximo, ilícito administrativo (Lei 8.429/92, improbidade), **não** crime. Distinguir *presente* de *propina*: o critério é o **nexo com ato de ofício** e a **capacidade de corromper a imparcialidade**.
4. **Ausência do nexo "em razão da função"** — a vantagem foi recebida por razão **pessoal/particular**, sem relação com as atribuições do cargo.
5. **Ausência de conduta típica (solicitar/receber/aceitar promessa)** — provas indicam mera **conversa**, cogitação, ou ato preparatório impunível; não houve solicitação nem aceite efetivo de promessa.
6. **Erro de tipo / ausência de dolo** — o funcionário desconhecia a natureza indevida (ex.: pagamento que reputava lícito) → exclui o dolo.
7. **Reclassificação para forma privilegiada (§2º)** — se houve ato praticado por **cedência a pedido/influência** de terceiro **sem vantagem**, a figura é a do §2º (detenção), muito mais branda — jamais o *caput*.
8. **Distinção corrupção passiva x concussão (art. 316)** — se houve **exigência com constrangimento** (o funcionário impõe), o tipo é **concussão**, não corrupção passiva (que pressupõe solicitar/receber/aceitar sem constrangimento). A reclassificação muda a pena e a estratégia. (A defesa do particular "corruptor", nesse caso, sustenta que ele foi **vítima** de concussão, não corruptor ativo.)
9. **Distinção corrupção passiva x advocacia administrativa (art. 321)** — patrocínio de interesse privado perante a Administração, valendo-se da qualidade de funcionário, é tipo autônomo e mais brando.
10. **Concurso aparente / bis in idem** — mesma vantagem imputada como corrupção **e** outro crime (lavagem, peculato, organização criminosa) exige análise de concurso; afastar dupla punição pelo mesmo fato.
11. **Nulidades probatórias** — cadeia de custódia da prova (delação, quebra de sigilo, interceptação): atacar ilicitude por skill `cadeia-custodia-prova` e `nulidades-processuais`; delação sem **corroboração** não sustenta condenação (regra da corroboração — **[confirmar base legal/jurisprudencial atual]**).
12. **Prescrição** — verificar prescrição em concreto (calcular pela skill `calculadora-prescricao`).

## Banco de teses defensivas (corrupção ativa — art. 333)

1. **Atipicidade por ausência de ato de ofício determinado** — elementar expressa no 333; "compra de facilidade genérica" não é típica. **Esta é a tese mais forte na ativa.**
2. **Vantagem não indevida / exercício regular de direito** — pagamento de taxa/tarifa devida; postulação legítima; não há oferta de propina, mas exercício de direito.
3. **Ausência dos núcleos (oferecer/prometer)** — não houve oferta/promessa efetiva; houve **cogitação**, mera menção, ou ato preparatório impunível.
4. **Corrupção ativa x concussão (particular como vítima)** — se o funcionário **exigiu** (concussão, art. 316) e o particular apenas **cedeu à exigência** para evitar mal maior, o particular **não** responde por corrupção ativa (é vítima da concussão). Tese clássica e potente.
5. **Corrupção ativa x tráfico de influência (art. 332)** — se a oferta é a um **intermediário** que se diz influente (e não ao funcionário para ato de ofício próprio), a figura pode ser outra.
6. **Ausência de dolo específico (elemento subjetivo do injusto)** — a finalidade de "determinar ato de ofício" é elemento subjetivo; sem prova dessa finalidade, atipicidade.
7. **Independência dos tipos (bilateralidade x unilateralidade)** — corrupção ativa e passiva são **tipos autônomos**; a **absolvição do funcionário (passiva) não impede** a condenação do particular (ativa) e vice-versa, mas a **ausência de qualquer ato de ofício visado** pode contaminar ambas por atipicidade objetiva. Usar a autonomia a favor: a existência de "propina" atribuída ao funcionário não prova, por si, a oferta pelo particular.
8. **Exceção legal — corrupção ativa perante ato de ofício "regular" já devido** — verificar tese de que oferecer para obter o que já se tinha direito (sem infração de dever) descaracteriza a indevida vantagem. **[Confirmar tratamento doutrinário/jurisprudencial.]**
9. **Nulidades e prova** — idem passiva: delação sem corroboração, cadeia de custódia, ilicitude probatória.
10. **Prescrição** — calcular (skill `calculadora-prescricao`).

---

## Distinções que decidem a classificação (tabela-guia)

| Confronto | Critério distintivo | Consequência para a defesa |
|---|---|---|
| **Corrupção passiva (317) x Concussão (316)** | 317: funcionário **solicita/recebe/aceita** (sem constrangimento). 316: funcionário **exige** (com constrangimento/temor). | Reclassificar; e para o particular, sustentar que foi **vítima** de concussão (atipicidade da ativa). |
| **Corrupção passiva (317) x Corrupção privilegiada (§2º)** | *Caput*: há vantagem/promessa. §2º: **sem** vantagem, por cedência a pedido/influência. | §2º = detenção (muito mais branda). |
| **Corrupção passiva (317) x Advocacia administrativa (321)** | 321: patrocinar interesse privado valendo-se da qualidade de funcionário, sem vantagem-propina vinculada a ato. | Tipo autônomo mais brando. |
| **Corrupção ativa (333) x Tráfico de influência (332)** | 333: oferta ao **funcionário** para ato de ofício. 332: solicitar/obter vantagem a pretexto de **influir** em funcionário. | Reclassificação para figura distinta. |
| **Corrupção x Improbidade / ilícito ético** | Falta de nexo com ato de ofício e/ou de dolo penal → esfera administrativa (Lei 8.429/92), não penal. | Atipicidade penal (independência de instâncias). |

---

## Causa de aumento (§1º / parágrafo único) e forma privilegiada (§2º)

- **§1º (passiva) / parágrafo único (ativa) — aumento de 1/3:** exige que, **em consequência** da vantagem/promessa, o ato de ofício tenha sido **retardado/omitido** ou **praticado com infração de dever**. **Tese defensiva:** afastar o aumento demonstrando que **não houve** ato retardado/omitido/irregular *em consequência* da vantagem — o aumento não é automático; reclama nexo causal concreto entre a vantagem e a irregularidade do ato.
- **§2º (passiva) — privilégio:** requalificar para a forma privilegiada quando a conduta foi ceder a pedido/influência **sem** vantagem — pena de **detenção**. É a diferença entre anos de reclusão e figura branda.

---

## Estrutura forense da defesa — do recebimento à sentença

1. **Antes/no recebimento — resposta à acusação (art. 396-A CPP) e questão da inépcia:** atacar a **descrição da elementar "ato de ofício"** e do nexo funcional. Denúncia genérica quanto a **qual ato** a vantagem comprava é **inepta** (art. 41 CPP) → pedir **rejeição** (art. 395, I) ou **absolvição sumária** (art. 397) por atipicidade manifesta. Ver skills `resposta-acusacao` e `analise-denuncia`.
2. **HC de trancamento** — quando a atipicidade ou a ausência de justa causa é **flagrante e demonstrável de plano** (sem revolvimento fático-probatório): impetrar HC para trancar a ação penal. Ver skill `habeas-corpus-trancamento`. **Cautela:** o trancamento é medida excepcional; reservar para atipicidade clara ou falta de justa causa evidente.
3. **Instrução** — fixar a **teoria do caso** (skill `redacao-persuasiva-criminal`): (a) não há ato de ofício determinado; (b) a vantagem era devida/lícita/de bagatela; (c) faltou dolo; (d) prova ilícita/sem corroboração. Explorar contradições da delação e a **regra da corroboração**.
4. **Memoriais (alegações finais, art. 403 CPP)** — subsunção explícita: elementar por elementar, demonstrar a **ausência de ao menos uma**. Sustentar, em ordem, atipicidade → reclassificação (§2º / concussão / tráfico de influência) → afastamento do aumento → dosimetria favorável.
5. **Dosimetria (se condenação inevitável)** — atacar valoração negativa de circunstâncias do art. 59; afastar o aumento do §1º; buscar a forma privilegiada; considerar delação/colaboração (Lei 12.850/2013) como causa de diminuição; calcular pena e prescrição pelas skills `calculadora-dosimetria` e `calculadora-prescricao`.

---

## Teses x contra-teses (antecipar a acusação)

| Tese da DEFESA | Contra-tese provável da ACUSAÇÃO | Réplica da defesa |
|---|---|---|
| Falta ato de ofício determinado (317) | O *caput* do 317 não exige ato determinado — basta a mercancia da função | Interpretação conforme a ofensividade exige vínculo determinável; sem ele, é ilícito ético, não penal **[confirmar STF/STJ]** |
| Vantagem era presente/cortesia | Valor e contexto revelam propina disfarçada | Ausência de nexo com ato de ofício e de aptidão para corromper a imparcialidade |
| Particular foi vítima de concussão | Houve pactuação livre, logo corrupção ativa | Prova de **exigência** e temor afasta a bilateralidade; concussão exclui a ativa |
| Delação sem corroboração | Delação premiada é meio de prova idôneo | Condenação não se sustenta só na delação; exige-se corroboração por prova independente **[confirmar base atual]** |
| Ato estava fora da competência | Basta a expectativa de influência | Ato fora das atribuições não é "ato de ofício" → atipicidade ou tráfico de influência (332) |

---

## Súmulas, temas e precedentes — sob o Citation Gate

**NÃO cite nenhum número de HC, REsp, RE, informativo ou tema de memória.** Ensine a **tese** e o **dispositivo**; para qualquer precedente específico, marque `[NÃO VERIFICADO]` e confirme pela skill `jurisprudencia-stj-stf` / `verificacao-citacoes`.

- **Exigência (ou não) de ato de ofício determinado na corrupção passiva (317):** há debate relevante no STF e no STJ, com oscilação. **NÃO afirmar um resultado sem conferir o julgado atual.** `[NÃO VERIFICADO — conferir posição vigente STF/STJ]`
- **Regra da corroboração da delação premiada** (condenação não pode se fundar exclusivamente na palavra do colaborador): princípio consolidado, **mas confirmar a base normativa/jurisprudencial atualizada** (Lei 12.850/2013 e precedentes). `[NÃO VERIFICADO — conferir]`
- **Competência (foro por prerrogativa)** e limitação a fatos ligados ao cargo/função: matéria com evolução no STF. `[NÃO VERIFICADO — conferir]`
- **Insignificância/adequação social em corrupção:** tratamento restritivo e casuístico — **não** afirmar cabimento genérico. `[NÃO VERIFICADO — conferir]`

> Dispositivos de **lei** citados nesta skill (arts. 317, 333, 327, 316, 321, 332, 337-B/C/D CP; arts. 41, 395, 396-A, 397, 403 CPP; Lei 10.763/2003; Lei 12.850/2013) devem ter a **redação vigente** conferida antes do uso, mas são citáveis com segurança quanto à existência. **Súmulas e acórdãos, não** — sempre pelo gate.

---

## Erros comuns / checklist da defesa

- [ ] Identifiquei **qual ato de ofício determinado** a denúncia atribui à vantagem? (Se não há, ataco a **inépcia/atipicidade**.)
- [ ] Confirmei que o acusado **é ou se equipara** a funcionário público (art. 327) — na passiva?
- [ ] Testei a **classificação correta**: é corrupção, **concussão** (316), **advocacia administrativa** (321) ou **tráfico de influência** (332)?
- [ ] Verifiquei se cabe a **forma privilegiada do §2º** (passiva, sem vantagem) — detenção?
- [ ] O **aumento do §1º/parágrafo único** tem nexo causal concreto com ato irregular, ou é aplicação automática indevida?
- [ ] A vantagem é **efetivamente indevida** e **em razão da função**, ou é lícita/particular/de bagatela?
- [ ] Há **dolo** provado (e, na ativa, a **finalidade específica** de determinar ato de ofício)?
- [ ] A **delação/prova** tem **corroboração** independente? A **cadeia de custódia** está íntegra?
- [ ] Analisei **concurso aparente / bis in idem** com lavagem, peculato, organização criminosa?
- [ ] Calculei **prescrição** (skill `calculadora-prescricao`) e, se preciso, **dosimetria** (skill `calculadora-dosimetria`)?
- [ ] **Toda** súmula/precedente/tese passou por `verificacao-citacoes` / `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Partir para o mérito probatório sem antes testar a **subsunção** (a elementar "ato de ofício" costuma ser o ponto fraco da denúncia).
- Tratar corrupção passiva e ativa como **um só fato bilateral** — são **tipos autônomos**; a autonomia é arma defensiva.
- Confundir **concussão** (exigência) com **corrupção** (solicitação/aceite) — o particular constrangido é **vítima**, não corruptor.
- Aplicar o **aumento do §1º** como se fosse automático — ele exige ato irregular **em consequência** da vantagem.
- Impetrar **HC de trancamento** quando a atipicidade depende de revolver prova (será denegado) — reservar para atipicidade/injustiça flagrante.
- Citar número de acórdão ou informativo **de memória** — sanção real por jurisprudência inventada.

---

## Cálculos que esta skill NÃO faz (aponta para as calculadoras)

Esta skill é **metodologia/roteiro forense** (`type: prompt`) — não calcula pena, multa nem prazo. Para os cálculos determinísticos:

- **Dosimetria** (pena-base do art. 59, agravantes/atenuantes, §1º de aumento, forma privilegiada): usar a skill **`calculadora-dosimetria`**.
- **Prescrição** (em abstrato e em concreto, com marcos interruptivos): usar a skill **`calculadora-prescricao`**.
- **Tempestividade** de recursos e prazos processuais: usar a skill **`calculadora-tempestividade`**.

Descreva aqui o **método** e delegue o número à calculadora — nunca improvise cálculo penal no corpo da peça.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa (banco de teses), **não** substitui o juízo do advogado responsável nem a análise do caso concreto e dos autos. A responsabilidade pela peça e pela estratégia é sempre do profissional (CED/OAB).
- **Ética profissional:** advocacia sob o **Estatuto da OAB (Lei 8.906/94), Código de Ética e Disciplina e Provimento 205/2021** (publicidade). Se a atuação for do **polo acusatório** (MP/assistente de acusação), aplica-se o regramento do **CNMP**; se **Defensoria**, a **LC 80/94**. **Esta skill é primariamente de DEFESA por tipo penal** — o roteador deve conferir o **polo** da instituição (`company.md`) antes de usar; havendo assistência de acusação, adaptar as teses para o ângulo acusatório com a skill correspondente.
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa por `verificacao-citacoes` e `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça (resposta à acusação, memoriais, HC), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita elementar por elementar, coesão e persuasão (a régua de obra-prima que a revisão cobra).
