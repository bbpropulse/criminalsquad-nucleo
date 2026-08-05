---
name: acusacao-crimes-administracao-publica
description: >-
  Use para redigir ou estruturar acusacao crimes administracao publica: [POLO ACUSATÓRIO —
  MP/assistente] Use ao estruturar denúncia ou memoriais acusatórios em crimes contra a
  Administração Pública (Título XI do CP) — individualização da conduta funcional, demonstração do
  ato de ofício e do nexo vantagem↔função, standard probatório (prova indiciária e corroboração de
  colaboração premiada), enfrentamento de teses de atipicidade… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, administracao-publica, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-crimes-administracao-publica"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-crimes-administracao-publica", "acusacao crimes", "administracao publica"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Acusação em Crimes contra a Administração Pública (Título XI do CP — arts. 312 a 337-A)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

> ⚠️ **POLO ACUSATÓRIO.** Esta skill serve ao **Ministério Público** (denúncia e memoriais) e ao **assistente de acusação** habilitado. **Antes de usá-la, o roteador deve conferir o polo da instituição** em `_criminalsquad/_memory/company.md`: se o perfil for de **defesa**, use-a apenas em modo *espelho* — para **antecipar a tese acusatória e desmontá-la** (a leitura defensiva por tipo penal está mais abaixo). A ética varia por polo: MP (CNMP), assistente de acusação (advogado sob OAB + CED). Toda entrega é **rascunho técnico sob revisão humana obrigatória**.

Esta skill entrega o **conteúdo material** dos crimes funcionais do **Título XI, Capítulo I** do Código Penal — o que a denúncia genérica (`denuncia-mp`) e os memoriais genéricos (`alegacoes-finais-acusacao`) não trazem. Foco no que decide esses casos: **individualizar a conduta do funcionário público**, provar o **ato de ofício** e o **nexo entre a vantagem e a função**, sustentar a acusação sobre **prova indiciária** e **colaboração corroborada**, enfrentar as **teses de atipicidade** e pedir os **efeitos próprios da condenação** (perda do cargo).

> **Lição central:** nesses crimes, a peça vive ou morre no **nexo funcional**. Não basta narrar que houve dinheiro, favor ou desvio — é preciso amarrar a vantagem (ou a conduta) ao **exercício concreto da função pública** e descrever **qual ato** foi (ou seria) praticado, retardado ou omitido. Denúncia que descreve o pagamento mas não descreve o ato de ofício nem o poder funcional do agente é o convite mais comum ao trancamento e à absolvição por atipicidade.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 312 a 337-A do CP e do conceito de funcionário público (**art. 327 e §§**) — houve alterações relevantes ao longo do tempo (ex.: penas do peculato, corrupção e concussão majoradas pela **Lei 10.763/2003**; a **causa de aumento do art. 327, §2º**). Confira também **súmulas, temas repetitivos e overruling** via o agente `jurisprudencia-stj-stf` e a redação legal via `lei-e-sumula` **antes** de fundamentar. Nenhum precedente entra na peça sem passar pelo **gate de `verificacao-citacoes`**.

---

## Base legal — mapa do Capítulo I do Título XI

| Tipo | Art. CP | Núcleo / elementar decisiva |
|---|---|---|
| **Peculato** (próprio, apropriação/desvio) | 312, *caput* | Funcionário que **se apropria** de dinheiro/valor/bem, público ou particular, de que tem a **posse em razão do cargo**, ou o **desvia** em proveito próprio ou alheio |
| **Peculato-furto** (impróprio) | 312, §1º | Não tem a posse, mas **subtrai** ou concorre para a subtração **valendo-se da facilidade** que o cargo proporciona |
| **Peculato culposo** | 312, §2º e §3º | Concorre **culposamente** para o crime de outrem; **reparação até a sentença irrecorrível extingue** a punibilidade; após, **reduz de metade** a pena |
| **Peculato mediante erro de outrem** | 313 | Apropria-se de valor recebido por **erro de outrem** no exercício do cargo |
| **Concussão** | 316, *caput* | **Exigir**, para si ou para outrem, direta ou indiretamente, vantagem indevida **em razão da função** (mesmo fora dela ou antes de assumi-la) |
| **Excesso de exação** | 316, §1º | Exigir tributo/contribuição **indevido** ou por **meio vexatório** |
| **Corrupção passiva** | 317, *caput* | **Solicitar, receber ou aceitar promessa** de vantagem indevida, em razão da função, ainda que fora dela ou antes de assumi-la |
| **Corrupção passiva — causa de aumento** | 317, §1º | Se, em consequência, o funcionário **retarda, omite ou pratica ato com infração de dever** → aumento |
| **Corrupção passiva privilegiada** | 317, §2º | Cede a **pedido de terceiro** (sem receber vantagem) → figura atenuada |
| **Prevaricação** | 319 | Retardar/deixar de praticar, indevidamente, ou praticar ato contra disposição legal, **para satisfazer interesse ou sentimento pessoal** |
| **Condescendência criminosa** | 320 | Deixar de responsabilizar subordinado por indulgência |
| **Advocacia administrativa** | 321 | **Patrocinar interesse privado** perante a Administração, valendo-se da qualidade de funcionário |
| **Corrupção ativa** | 333 | (Particular) **Oferecer ou prometer** vantagem indevida a funcionário para determiná-lo a praticar/omitir/retardar ato de ofício — o outro lado do binômio |
| **Funcionário público (conceito)** | 327 e §§ | Quem exerce cargo/emprego/função pública, ainda que transitoriamente e sem remuneração (**equiparação** no §1º; **aumento** no §2º p/ dirigentes) |

> **Binômio corrupção passiva ↔ ativa.** A corrupção passiva (317) do funcionário e a ativa (333) do particular **não são necessariamente bilaterais**: cada uma se consuma por conta própria (a passiva com o *solicitar*; a ativa com o *oferecer/prometer*). A denúncia deve dizer **quem** ocupa **cada** polo e **individualizar as duas condutas** — não presumir uma a partir da outra.

> **Concussão × corrupção passiva × extorsão.** A linha é o **verbo e o meio**: *exigir* com o peso da função (sem grave ameaça de mal injusto alheio à função) → **concussão** (316); *solicitar/receber/aceitar* → **corrupção passiva** (317); *exigir mediante violência/grave ameaça* de mal injusto → tende à **extorsão** (158). Capitular errado o verbo é a falha material mais comum — classifique pela conduta descrita, não pelo nome do caso.

---

## Os quatro eixos da peça acusatória funcional

Toda denúncia/memorial do Título XI se sustenta em quatro provas encadeadas. Faltando qualquer uma, a peça fica vulnerável.

**1) Condição de funcionário público (CP 327).** Elementar do tipo. Descreva o vínculo (cargo, emprego, função, mandato) e, se for o caso, a **equiparação** (§1º — quem exerce função em entidade paraestatal, empresa prestadora de serviço contratada/conveniada) ou a **causa de aumento** do §2º (dirigente de autarquia, empresa pública, sociedade de economia mista, fundação). A perda da condição **antes** ou **depois** do fato altera a tipicidade — fixe o marco temporal.

**2) Nexo com a função (“em razão da função/cargo”).** É o coração dos crimes funcionais. A vantagem, a exigência ou a conduta tem de estar **ligada ao exercício do poder funcional** — não a uma relação privada paralela. Descreva **qual competência** o agente detinha e **como** ela foi mercadejada, desviada ou violada.

**3) O ato de ofício (quando o tipo exige).** Na corrupção e na concussão, o ato de ofício **não precisa ser efetivamente praticado** (a corrupção passiva consuma-se com o *solicitar/receber/aceitar*), mas **precisa ser identificável e inserido nas atribuições** do agente. Na causa de aumento do 317, §1º, descreva o ato **efetivamente** retardado, omitido ou praticado com infração de dever. **Individualize o ato** — “atos genéricos do cargo” esvaziam a imputação.

**4) O elemento subjetivo específico (quando o tipo exige).** Na **prevaricação (319)**, o dolo é qualificado pelo **fim de satisfazer interesse ou sentimento pessoal** — sem essa elementar descrita e lastreada, o fato é mera irregularidade funcional/administrativa, atípica na esfera penal. Na advocacia administrativa (321), o dolo é patrocinar interesse **privado**. Descreva o especial fim de agir; não o presuma.

---

## Standard probatório — prova indiciária e colaboração corroborada

Crimes funcionais raramente têm prova direta do acerto (o pagamento e a promessa são clandestinos). A acusação legítima se constrói sobre **prova indiciária robusta** e **corroboração**.

- **Prova indiciária é prova.** Indícios múltiplos, graves, precisos e convergentes autorizam a condenação — desde que **encadeados** (o dinheiro que entra, a movimentação atípica, o ato administrativo anômalo, a proximidade temporal, a ausência de causa lícita para a vantagem). Descreva a **cadeia**, não indícios soltos.
- **Colaboração premiada exige corroboração (Lei 12.850/2013, art. 4º, §16).** Nenhuma sentença condenatória se funda **exclusivamente** nas declarações do colaborador. Na peça, **cada afirmação do colaborador vem amarrada a um elemento externo** (documento, quebra de sigilo, perícia, outro depoimento, registro de reunião). O ponto que a defesa atacará é justamente a corroboração — antecipe-a elemento a elemento. **A redação atual do §16 e os limites fixados pelo STF/STJ (valor do depoimento de coautor, corroboração cruzada entre colaboradores) vão pesquisados via `jurisprudencia-stj-stf` e marcados [NÃO VERIFICADO] até validação.**
- **Prova emprestada e compartilhamento** (de inquéritos, PICs, acordos de leniência): descreva a **origem lícita** e a **cadeia de custódia** — a defesa fará dela a primeira preliminar. Apoie-se na skill `cadeia-custodia-prova` quando houver interceptação, quebra ou apreensão digital.
- **Lançamento e materialidade patrimonial:** quando o desvio (peculato) envolver tributo/valor mensurável, ampare a materialidade em **perícia contábil/financeira**; não afirme cifra sem laudo.

---

## Efeitos da condenação — pedir desde a peça (CP 91 e 92)

O que distingue a acusação técnica nesses crimes é **pedir os efeitos próprios da condenação** — que **não são automáticos** e, no caso do art. 92, exigem **declaração motivada na sentença**.

| Efeito | Base | Requisito / cuidado |
|---|---|---|
| **Perda do cargo, função ou mandato** | CP, art. 92, I | **Não é automática** — depende de **declaração motivada**. Alíneas: **“a”** pena ≥ **1 ano** em crime praticado com **abuso de poder ou violação de dever** para com a Administração; **“b”** pena > **4 anos** nos demais crimes. Peça **expressamente** e indique a alínea |
| **Incapacidade para outro cargo (efeitos do 92)** | CP, art. 92 (contexto) | Verificar o alcance na **redação vigente** via `lei-e-sumula` antes de formular |
| **Perda em favor da União — perdimento** | CP, art. 91, II | **Produto e proveito** do crime (a vantagem indevida, os bens adquiridos com ela); requerer o **perdimento** e, se preciso, o **confisco por equivalência** (91, §1º e §2º — conferir vigência) |
| **Obrigação de reparar o dano** | CP, art. 91, I + CPP 387, IV | **Valor mínimo** de reparação (387, IV) com **pedido expresso** e valor indicado quando mensurável — a sentença não fixa de ofício |
| **Medidas assecuratórias** | CPP 125-144 | Sequestro (125), hipoteca legal (134), arresto (136) para **garantir** reparação e perdimento — requerer, quando cabível, **já na denúncia** |

> **Regra de ouro do art. 92:** o pedido de **perda do cargo** tem de ser **formulado e fundamentado** — e a sentença tem de **declará-lo motivadamente**. Perda decretada como efeito automático, sem motivação, é anulável. A acusação bem-feita **entrega ao juízo a fundamentação pronta** (abuso de poder/violação de dever + pena aplicada + alínea). Distinga da **perda administrativa** por processo disciplinar (esferas independentes).

---

## Teses da acusação × contra-teses da defesa (por eixo)

Domine o argumento defensivo para blindar a peça — este quadro é útil **nos dois polos**.

- **Nexo funcional negado (“foi relação privada, não ato de ofício”).**
  - *Acusação:* descrever a **competência concreta** do agente e o **ato inserido em suas atribuições**; a vantagem sem causa lícita, contemporânea ao ato administrativo, lastreia o nexo.
  - *Defesa:* a vantagem não se liga a nenhum ato do cargo; ausência de ato de ofício identificável → **atipicidade**.

- **Atipicidade por ausência de ato de ofício determinado (corrupção).**
  - *Acusação:* na corrupção passiva basta o **ato identificável e nas atribuições**; a consumação independe da prática efetiva. Individualize o ato pretendido.
  - *Defesa:* “ato genérico do cargo” não configura corrupção; sem ato determinado, o fato é atípico (tese clássica de defesa — sustente-a como filtro de qualidade da peça acusatória).

- **Prevaricação sem o fim pessoal.**
  - *Acusação:* descrever e lastrear o **“interesse ou sentimento pessoal”** (elementar subjetiva do 319).
  - *Defesa:* falta a elementar subjetiva → fato é **irregularidade administrativa**, atípico penalmente.

- **Insignificância no peculato.**
  - *Acusação:* nos crimes contra a Administração, a **moralidade administrativa** é o bem jurídico; a jurisprudência é **restritiva** quanto ao princípio da insignificância no peculato (o valor material não é a única medida da lesão). **Confira a orientação atual (Súmula/tema) via `jurisprudencia-stj-stf`** — há oscilação e distinções (peculato x descaminho).
  - *Defesa:* valor ínfimo → atipicidade material.

- **Colaboração isolada.**
  - *Acusação:* nenhuma imputação repousa **só** no colaborador; cada ponto tem **corroboração externa** (art. 4º, §16, Lei 12.850/13).
  - *Defesa:* condenação fundada exclusivamente em delação → nulidade/absolvição.

- **Reparação no peculato culposo.**
  - *Acusação:* a reparação **só extingue** a punibilidade no **peculato culposo** (312, §3º) e **até a sentença irrecorrível**; no doloso, é atenuante/arrependimento, não extinção.
  - *Defesa:* reparação integral → extinção (só vale no §2º culposo — não estenda ao doloso).

---

## Súmulas e balizas (todas sob o Citation Gate — conferir via `jurisprudencia-stj-stf`)

Cite **apenas** com verificação; abaixo, as balizas notórias e onde a defesa mais litiga. **Números de HC/REsp/RE, informativos e temas específicos vão marcados [NÃO VERIFICADO] até o gate aprovar.**

- **Competência e prerrogativa de foro:** havendo autoridade com **foro por prerrogativa de função**, a denúncia é oferecida no **tribunal competente** — endereçamento errado gera nulidade. Os **limites atuais do foro** (restrição a crimes no cargo e em razão dele) foram fixados pelo STF em julgamento de questão de ordem — **confirmar o alcance vigente via `jurisprudencia-stj-stf` [NÃO VERIFICADO]**.
- **Insignificância nos crimes funcionais:** orientação **restritiva** predominante — **conferir súmula/tema atual [NÃO VERIFICADO]**; não afirme aplicação automática nem vedação absoluta sem checar.
- **Corroboração da colaboração premiada:** vedação à condenação fundada **exclusivamente** na delação (art. 4º, §16, Lei 12.850/13) — dispositivo **legal** citável com certeza; **os precedentes que o interpretam vão pelo gate [NÃO VERIFICADO]**.
- **Concurso com organização criminosa / lavagem:** desvios funcionais estruturados frequentemente concorrem com **lavagem (Lei 9.613/98)** e **organização criminosa (Lei 12.850/13)** — capitule o concurso **quando os fatos o sustentarem**, não por inflar a peça.
- **Prescrição:** calcule pela **pena máxima em abstrato** (majorada pela Lei 10.763/2003 em vários tipos) — o **oferecimento não interrompe**; só o **recebimento** (CP 117, I). Denúncia parada é punibilidade evaporando.

---

## Estrutura da denúncia funcional (o que muda em relação à `denuncia-mp` genérica)

Use a estrutura-base da skill `denuncia-mp` (endereçamento, qualificação, rol de testemunhas, filtros do art. 28/28-A). Aqui, o que é **próprio** do Título XI:

```
I — DOS FATOS  (um bloco por denunciado)
   • Condição de funcionário público (CP 327): cargo/função + fonte da prova;
     equiparação (§1º) ou aumento (§2º) quando cabível.
   • Competência funcional concreta do agente (o poder que detinha).
   • Conduta típica descrita pelo VERBO do tipo (apropriar/desviar/exigir/
     solicitar/receber/aceitar/patrocinar/retardar-omitir).
   • Nexo com a função: por que a vantagem/conduta liga-se ao exercício do cargo.
   • O ATO DE OFÍCIO identificável (corrupção/concussão) ou efetivamente
     retardado/omitido/praticado (317, §1º) — individualizado.
   • Elemento subjetivo especial quando o tipo exige (fim pessoal — 319;
     patrocínio de interesse privado — 321).
   • A PROVA que lastreia cada elo (laudo, quebra de sigilo, colaboração
     CORROBORADA, documento) — justa causa demonstrada elemento a elemento.

II — DA CAPITULAÇÃO  (por réu)
   • Tipo do Título XI + causa de aumento (327, §2º) quando dirigente.
   • Concurso com lavagem/organização criminosa SOMENTE se os fatos sustentam.
   • Binômio passiva (317)/ativa (333) individualizado em cada polo.

III — DOS EFEITOS DA CONDENAÇÃO  (o diferencial da peça)
   • Pedido EXPRESSO da PERDA DO CARGO (CP 92, I, com a alínea e a
     fundamentação de abuso de poder/violação de dever) — não é automática.
   • Perdimento do produto/proveito (CP 91, II) e confisco por equivalência.
   • Valor mínimo de reparação (CPP 387, IV), com valor quando mensurável.
   • Medidas assecuratórias (sequestro/hipoteca/arresto) para garanti-los.

IV — DOS REQUERIMENTOS CAUTELARES  (quando necessários)
   • Preventiva/cautelares com fundamentação CONCRETA e CONTEMPORÂNEA
     (o juiz não decreta de ofício — CPP 311); afastamento da função pública
     como cautelar (CPP 319, VI) quando o risco à instrução/reiteração o exigir.

V — DOS PEDIDOS
   • Recebimento, citação, condenação nas penas dos tipos capitulados e
     DECLARAÇÃO MOTIVADA dos efeitos do art. 92.
```

**Nos memoriais (alegações finais da acusação):** retome a estrutura de `alegacoes-finais-acusacao` e **feche os quatro eixos com a prova produzida na instrução** — condição funcional provada, nexo demonstrado, ato de ofício identificado, dolo específico comprovado. Amarre **cada ponto da colaboração à sua corroboração**. Requeira, ao final, a condenação **e a declaração fundamentada da perda do cargo** (CP 92, I).

---

## Erros comuns / checklist antes de protocolar

- [ ] **Condição de funcionário público (CP 327)** descrita e provada — com equiparação (§1º) ou aumento (§2º) quando cabível?
- [ ] **Nexo com a função** explicitado (não relação privada paralela)?
- [ ] **Ato de ofício individualizado** — identificável e nas atribuições (corrupção/concussão), ou efetivamente retardado/omitido (317, §1º)? (“Atos genéricos do cargo” não bastam.)
- [ ] **Verbo típico correto** — não confundir *exigir* (concussão, 316) com *solicitar/receber/aceitar* (corrupção passiva, 317) nem com extorsão (158)?
- [ ] **Elemento subjetivo especial** descrito onde o tipo exige (fim pessoal — 319; patrocínio privado — 321)?
- [ ] **Colaboração corroborada** — cada ponto amarrado a elemento externo (art. 4º, §16, Lei 12.850/13)? Nenhuma imputação repousa só na delação?
- [ ] **Prova indiciária encadeada** (grave, precisa, convergente), com origem lícita e cadeia de custódia?
- [ ] **Pedido EXPRESSO da perda do cargo** (CP 92, I), com alínea e fundamentação de abuso/violação de dever — ciente de que **não é automática**?
- [ ] **Perdimento (CP 91, II)**, **valor mínimo (387, IV)** e **medidas assecuratórias** requeridos?
- [ ] **Prescrição** calculada pela pena máxima em abstrato (majorações da Lei 10.763/2003) — recebimento a tempo (CP 117, I)?
- [ ] **Filtros prévios** (arquivamento art. 28; ANPP art. 28-A — cabível na corrupção/peculato quando pena mínima < 4 anos e sem violência) analisados e motivados?
- [ ] **Endereçamento/competência** conferidos (foro por prerrogativa; Justiça Federal quando bem/serviço/interesse da União — CF 109)?
- [ ] **Súmulas, temas e precedentes** pesquisados via `jurisprudencia-stj-stf`, redação legal via `lei-e-sumula`, tudo validado no **gate `verificacao-citacoes`** — nada de memória?

**Anti-padrões (evitar):**
- Narrar o pagamento/desvio **sem** descrever o ato de ofício e o poder funcional (atipicidade à espreita).
- Presumir a corrupção passiva a partir da ativa (ou vice-versa) sem individualizar **cada** conduta.
- Tratar a **perda do cargo** como efeito automático — sem pedido expresso e sem fundamentação da alínea do art. 92.
- Condenar/denunciar apoiado **exclusivamente** em colaboração premiada, sem corroboração externa.
- Capitular **prevaricação** sem descrever o **fim pessoal** — vira irregularidade administrativa atípica.
- Confundir *exigir* (concussão) com *solicitar/receber* (corrupção) — erro material de capitulação.
- Inflar a capitulação (lavagem/organização criminosa) sem fatos que a sustentem.
- Estender ao peculato **doloso** a extinção pela reparação, que só vale no **culposo** (312, §3º).
- Afirmar aplicação/vedação automática da **insignificância** sem checar a orientação atual.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Peça/parecer é hipótese a confirmar; a revisão final do membro/advogado responsável é indispensável antes de protocolar.
- **Polo acusatório — confira o perfil.** Uso alinhado ao **company.md**: MP (denúncia/memoriais, ética CNMP) e assistente de acusação habilitado (advogado sob OAB + CED). Perfil de defesa → usar em modo espelho para **antecipar e desmontar** a tese acusatória.
- **Citation Gate inegociável:** nenhuma súmula, tema, informativo ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf` + `lei-e-sumula` e é validado no gate `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Na dúvida, **omitir vence inventar**.
- **Sigilo e LGPD:** dados de investigados/colaboradores nunca em repositório público.

**Skills e agentes de apoio:** `denuncia-mp` (estrutura-base da inicial acusatória) · `alegacoes-finais-acusacao` e `memoriais` (fechamento acusatório) · `assistente-acusacao` (atuação do assistente habilitado) · `anpp` (dever de análise prévia) · `cadeia-custodia-prova` (prova digital/interceptação) · `jurisprudencia-stj-stf` e `lei-e-sumula` (pesquisa e vigência) · `verificacao-citacoes` (gate obrigatório) · `redacao-persuasiva-criminal` (padrão de obra-prima — aplicar SEMPRE na redação final).
