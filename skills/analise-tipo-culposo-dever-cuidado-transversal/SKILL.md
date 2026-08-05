---
name: analise-tipo-culposo-dever-cuidado-transversal
description: >-
  Use para ANALISAR o crime CULPOSO em geral, FORA do trânsito — erro médico, acidente de trabalho,
  culpa profissional, incêndio/desabamento, acidentes domésticos e de consumo. Ferramenta analítica
  não-peça: rastreia o dever objetivo de cuidado, as três modalidades de culpa (imprudência,
  negligência, imperícia), a previsibilidade objetiva, o princípio da confiança, a concorrência de
  culpas, a culpa exclusiva da vítima e a… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, culpa, teoria-do-crime]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-tipo-culposo-dever-cuidado-transversal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-tipo-culposo-dever-cuidado-transversal", "analise tipo", "cuidado transversal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise Transversal do Crime Culposo — Dever de Cuidado e Previsibilidade (art. 18, II, do CP)

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

Esta skill é uma **ferramenta analítica não-peça**: dado um resultado lesivo **não intencional** (morte, lesão, dano, incêndio, desabamento) **fora do trânsito**, ela orienta o mapeamento sistemático dos elementos do **crime culposo** — o **dever objetivo de cuidado**, as **modalidades de culpa** (imprudência, negligência, imperícia), a **previsibilidade objetiva**, o **nexo causal**, o **resultado** e a fronteira com o **caso fortuito** e com o **dolo eventual**. Serve para triagem defensiva, parecer, memoriais, resposta à acusação, pedido de absolvição sumária/rejeição da denúncia e sustentação de tese em alegações finais — em **erro médico, acidente de trabalho, culpa profissional** (engenharia, arquitetura, farmácia, indústria), acidentes de consumo, domésticos e quaisquer outros. Para acidentes de **trânsito** (CTB — arts. 302 a 303), use a skill própria `defesa-culpa-nexo-acidente-transito`; para a fronteira dolo eventual no trânsito, `acusacao-dolo-eventual-transito`.

> **Lição central:** no crime culposo o desvalor está na **conduta** (violação do dever de cuidado), não no resultado querido — o resultado é **involuntário**. A defesa vence, na maioria dos casos, atacando **um dos três pilares**: (1) **inexistência de dever de cuidado violado** (a conduta foi diligente/dentro da *lex artis*); (2) **imprevisibilidade objetiva** do resultado (caso fortuito, não culpa); ou (3) **ausência de nexo** entre a conduta e o resultado (o resultado adviria de outra causa, ou da culpa exclusiva da vítima/terceiro). **Identifique qual pilar cede ANTES de redigir** — cada um leva a um pedido e a uma prova diferentes.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 18, II, e do art. 13 do CP** (Parte Geral — Lei 7.209/1984) e dos tipos culposos aplicáveis (**art. 121, §3º**; **art. 129, §6º**; **art. 250, §2º** — incêndio culposo; **art. 132** — perigo à vida/saúde de outrem; e os tipos culposos de leis especiais). No **acidente de trabalho**, confira as **Normas Regulamentadoras (NR) vigentes** e os arts. da **CLT** invocados — as NR são atualizadas com frequência e a norma revogada não fundamenta o dever de cuidado. Súmulas, teses e precedentes específicos passam **obrigatoriamente** pelo gate `verificacao-citacoes` e por `jurisprudencia-stj-stf` antes de qualquer uso. Na dúvida sobre um número de HC/REsp/tema/informativo, **omita** e ensine a tese com o dispositivo legal.

---

## Base legal

- **Art. 18, II, CP** — define o crime culposo: o agente **deu causa ao resultado por imprudência, negligência ou imperícia**. As três modalidades são o núcleo da tipicidade culposa.
- **Art. 18, parágrafo único, CP** — **excepcionalidade da culpa**: ninguém pode ser punido por fato culposo **senão quando a lei expressamente o prevê**. Sem tipo culposo, a conduta é **atípica** (regra de ouro da defesa).
- **Art. 13, CP** — **nexo causal** (teoria da equivalência dos antecedentes / *conditio sine qua non*) e o **§1º** (causa superveniente relativamente independente que, por si só, produz o resultado — rompe a imputação).
- **Art. 121, §3º, CP** — **homicídio culposo** (e §4º, aumento pela inobservância de regra técnica de profissão/arte/ofício, ou por não prestar socorro).
- **Art. 129, §6º e §7º, CP** — **lesão corporal culposa** e a causa de aumento correlata.
- **Art. 132, CP** — **perigo para a vida ou saúde de outrem** (crime de perigo — relevante em acidentes de trabalho e exposição a risco).
- **Art. 250, §2º; art. 256, p.u.; art. 260, §2º, CP** — **incêndio, desabamento/desmoronamento e perigo de desastre ferroviário culposos** (exemplos de tipos culposos fora do trânsito).
- **Legislação de trabalho e técnica** — **CLT** (arts. 157 e 158 — deveres de segurança), **NR do Ministério do Trabalho** e normas técnicas (ABNT, conselhos profissionais) como fonte do **dever objetivo de cuidado** no acidente de trabalho e na culpa profissional.
- **Código de Defesa do Consumidor (Lei 8.078/90)** e regulamentos sanitários — deveres de cuidado em acidentes de consumo.

> **Atipicidade por ausência de previsão culposa** — sempre checar primeiro: muitos tipos **só existem na forma dolosa**. Se não há tipo culposo correspondente, o fato é **atípico** (art. 18, p.u.), independentemente de qualquer descuido. É a tese mais econômica e frequentemente decisiva.

---

## Os elementos do crime culposo (roteiro de análise)

O tipo culposo é **aberto** (a lei não descreve a conduta proibida; o juiz a integra pelo dever de cuidado do caso). Analise, na ordem:

1. **Conduta humana voluntária** — o agente quis a conduta (dirigir a máquina, operar, medicar), **mas não quis nem assumiu o resultado**.
2. **Violação do dever objetivo de cuidado** — o agente deixou de observar a cautela **exigível do homem médio (ou do profissional médio da área)** naquelas circunstâncias. É o coração do tipo culposo. A fonte do dever pode ser **norma escrita** (NR, regulamento, protocolo clínico, norma técnica) ou o **padrão de diligência** da atividade (*lex artis*).
3. **Resultado naturalístico involuntário** — nos crimes culposos de resultado (homicídio, lesão), **não há tentativa**: sem resultado, não há crime culposo.
4. **Nexo causal** (art. 13) — a conduta descuidada **causou** o resultado. Sem nexo, não há imputação, ainda que tenha havido descuido.
5. **Previsibilidade objetiva** — o resultado era **previsível** para o homem/profissional médio. O **imprevisível** é **caso fortuito**, e caso fortuito **exclui a culpa**.
6. **Tipicidade (previsão legal da forma culposa)** — art. 18, p.u.

> **Fórmula prática:** *dever de cuidado violado + resultado involuntário + nexo + previsibilidade objetiva + tipo culposo previsto = crime culposo.* Falhando **qualquer** elemento, o fato é atípico ou não imputável. A defesa procura o elo mais fraco.

---

## As três modalidades de culpa (art. 18, II)

| Modalidade | Definição | Núcleo | Exemplos (fora do trânsito) |
|---|---|---|---|
| **Imprudência** | Ação **positiva** afoita, precipitada, sem as cautelas devidas | Fazer o que não devia, ou do modo que não devia | Operar máquina sem travas; manusear substância inflamável perto de chama; medicar em dose excessiva |
| **Negligência** | **Omissão** do cuidado devido; desídia, descuido | Deixar de fazer o que a cautela exigia | Não sinalizar obra; não manter EPI; não acompanhar paciente no pós-operatório; não conferir prontuário |
| **Imperícia** | Falta de **aptidão técnica** para o ofício exercido | Erro por **inaptidão profissional** no exercício de arte/profissão | Cirurgião que erra técnica cirúrgica básica; engenheiro que calcula mal a estrutura |

> **Imperícia × erro profissional × negligência.** Nem todo mau resultado profissional é imperícia. **Imperícia** pressupõe **inaptidão técnica** de quem exerce a profissão. O **erro profissional escusável** (a chamada "álea" da atividade — divergência de escolas, limite do estado da arte, evolução imprevisível do quadro) **não é crime**: é risco inerente e permitido. Já a **negligência** (não acompanhar, não pedir exame básico, não seguir protocolo) é conduta reprovável, não erro de técnica. **A defesa deve requalificar o suposto "erro" para o campo do risco permitido / erro escusável sempre que o resultado decorra da álea, não de descuido.**

> **Culpa própria × culpa imprópria.** A **culpa imprópria** (por descriminante putativa vencível — art. 20, §1º) é, na origem, um **erro** que a lei manda punir a título de culpa; embora exista dolo na conduta, responde-se por culpa. É figura distinta da culpa própria (esta, do art. 18, II) e conecta-se com a skill `analise-excludentes-ilicitude-culpabilidade-transversal`.

---

## Espécies quanto à representação — e a fronteira com o dolo eventual

| Espécie | O agente **prevê** o resultado? | Atitude interna |
|---|---|---|
| **Culpa inconsciente** | **Não** prevê (embora previsível) | Não representou o resultado |
| **Culpa consciente** | **Prevê**, mas **confia sinceramente** que não ocorrerá / que o evitará | **Não aceita** o resultado (repudia-o) |
| **Dolo eventual** (art. 18, I, 2ª parte) | Prevê e **assume o risco** de produzi-lo | **Indiferença/aceitação** ("que aconteça o que acontecer") |

> **A fronteira culpa consciente × dolo eventual é a batalha central.** A distinção está na **atitude perante o resultado previsto**: na culpa consciente o agente **confia** que o evitará (repele o resultado); no dolo eventual ele é **indiferente** e **anui** ao risco. **Tese defensiva típica:** desclassificar o dolo eventual para culpa consciente (pena muito menor), demonstrando que o agente adotou cautelas, tinha expectativa sincera de êxito e não foi indiferente ao bem jurídico. No trânsito, esse embate tem skill própria (`acusacao-dolo-eventual-transito`); aqui, aplica-se a erro médico, indústria, construção e culpa profissional em geral.

---

## Fatores de exclusão ou atenuação da culpa

### 1) Princípio da confiança
Quem se comporta conforme o dever **pode confiar** que os demais participantes de uma atividade compartilhada também o farão. É central em **atividades de equipe** (cirurgia — o cirurgião confia no anestesista e no instrumentador; a linha de produção — cada operador confia na etapa anterior; a obra — o engenheiro confia no laudo do especialista). **Tese defensiva:** o agente confiou legitimamente na conduta correta de terceiro (colega, fornecedor, órgão fiscalizador) e não podia prever a falha alheia. **Limite:** a confiança **cessa** quando há sinal concreto de que o outro **não** cumprirá o dever, ou quando pesa sobre o agente um **dever de vigilância/supervisão** (posição de garante — art. 13, §2º).

### 2) Risco permitido e âmbito de proteção da norma
Atividades socialmente úteis embutem risco tolerado (cirurgia, indústria, esporte). Se a conduta se manteve **dentro do risco permitido**, não há criação de risco **juridicamente relevante** — falta o desvalor da conduta. Complementarmente, o resultado só se imputa se estiver **dentro do âmbito de proteção** da norma de cuidado violada (imputação objetiva — **tese doutrinária de aceitação variável; sustentar com cautela e sob o gate**).

### 3) Concorrência de culpas
No Direito Penal **não há compensação de culpas** como no cível: se dois agentes concorrem culposamente para o resultado, **cada um responde por sua culpa** — a culpa da vítima ou de terceiro **não apaga** a do réu. Contudo, a **concorrência** pode **atenuar** (dosimetria — art. 59) e, sobretudo, serve para demonstrar que a **causa determinante** foi a conduta alheia. Não confundir com **culpa exclusiva**, abaixo.

### 4) Culpa exclusiva da vítima (ou de terceiro)
Se o resultado decorreu **exclusivamente** da conduta da vítima (ou de terceiro), **rompe-se o nexo** com a conduta do réu → **atipicidade** (não há crime). É tese poderosa: o réu agiu diligentemente, e foi a vítima (ou o terceiro) quem, sozinha, causou o desfecho (p. ex., paciente que oculta doença/uso de medicação; trabalhador que remove proteção da máquina contra ordem expressa; consumidor que usa o produto de modo vedado e sinalizado). **Distinguir de concorrência**: aqui a culpa do réu é **zero**.

### 5) Caso fortuito e força maior — imprevisibilidade
O **imprevisível** e o **inevitável** excluem a culpa: não há dever de evitar o que não se podia prever. **Tese defensiva:** o resultado adveio de evento fortuito (reação alérgica idiossincrática não detectável, falha oculta de material certificado, intercorrência imprevisível), e não da violação de qualquer dever. **É o oposto da previsibilidade objetiva** — sem previsibilidade, não há culpa.

### 6) Causa superveniente relativamente independente (art. 13, §1º)
Quando uma **causa posterior**, relativamente independente, **por si só** produz o resultado, ela **rompe** a imputação quanto ao resultado final (o agente responde só pelos atos praticados). Clássico em erro médico: infecção hospitalar autônoma, erro grosseiro de outra equipe no atendimento subsequente. **Analisar sempre a cadeia causal** para localizar rupturas.

---

## Roteiro por cenário (aplicação transversal)

### A) Erro médico (e da equipe de saúde)
- **Fonte do dever:** *lex artis*, protocolos clínicos, resoluções do conselho, consentimento informado. A obrigação, em regra, é **de meio**, não de resultado (salvo exceções como certas cirurgias estéticas — **[NÃO VERIFICADO]** o estado atual da distinção na jurisprudência penal; conferir em `jurisprudencia-stj-stf`).
- **Teses defensivas:** (i) **erro escusável / álea da medicina** (evolução imprevisível, limite do estado da arte) → não é imperícia; (ii) **princípio da confiança** na equipe; (iii) **culpa exclusiva/concorrente da vítima** (omissão de dados, não adesão ao tratamento); (iv) **ausência de nexo** ou **causa superveniente** (infecção autônoma, doença de base); (v) **ausência de dever violado** (conduta conforme protocolo).
- **Cuidado com a autoria coletiva:** individualizar a conduta de **cada** profissional (o médico, o enfermeiro, o hospital como garante). **Denúncia genérica** que não descreve a conduta culposa individual é **inepta** (violação do art. 41 do CPP).

### B) Acidente de trabalho
- **Fonte do dever:** **CLT (arts. 157/158)**, **NR vigentes**, PPRA/PGR, ordens de serviço, treinamento (posição de garante do empregador/preposto — art. 13, §2º, "b"). Confira **qual NR** e **qual versão** — norma revogada não fundamenta a acusação.
- **Teses defensivas:** (i) **cumprimento do dever** (EPI fornecido, treinamento comprovado, sinalização) → dever de cuidado observado; (ii) **culpa exclusiva do trabalhador** (remoção de proteção contra ordem, uso indevido) → rompe o nexo; (iii) **princípio da confiança** (o empregador confiou no técnico de segurança/CIPA); (iv) **imprevisibilidade** (falha oculta de equipamento certificado); (v) **ausência de individualização** — apontar quem, na cadeia hierárquica, tinha o dever concreto e a possibilidade de agir.
- **Perigo (art. 132):** exposição a risco pode configurar crime de **perigo** independentemente de resultado — checar se a imputação é de dano (lesão/morte culposa) ou de perigo.

### C) Culpa profissional (engenharia, arquitetura, indústria, farmácia)
- **Fonte do dever:** normas técnicas (ABNT), regulamentos do conselho, projeto aprovado, laudos. **Imperícia** exige demonstrar **inaptidão técnica**; a mera divergência de método **não** é crime.
- **Incêndio/desabamento culposos** (arts. 250, §2º; 256, p.u.): checar a **conduta técnica concreta** e o **âmbito de proteção** da norma violada.
- **Aumento pela inobservância de regra técnica** (art. 121, §4º / art. 129, §7º): **não confundir** com a **imperícia** que já constitui a culpa — há vedação ao **bis in idem** (a mesma inobservância não pode fundar a culpa **e** o aumento). Tese defensiva relevante.

---

## Teses e contra-teses (transversal)

| Tese defensiva | Fundamento | Contra-tese típica (acusação) |
|---|---|---|
| Atipicidade — inexiste tipo culposo | art. 18, p.u. | Existe previsão culposa no tipo invocado |
| Dever de cuidado observado (*lex artis*/NR cumprida) | art. 18, II, a contrario | Norma técnica/protocolo foi violado; conduta abaixo do padrão |
| Imprevisibilidade — caso fortuito | ausência de previsibilidade objetiva | Resultado era previsível ao profissional médio |
| Erro escusável / álea da atividade (não é imperícia) | risco permitido; obrigação de meio | Houve inaptidão técnica ou descuido, não álea |
| Ausência de nexo causal | art. 13 | A conduta foi *conditio sine qua non* do resultado |
| Causa superveniente relativamente independente | art. 13, §1º | Causa não é independente; integra a cadeia |
| Culpa exclusiva da vítima/terceiro | rompe o nexo → atipicidade | Houve concorrência, não exclusividade; réu também violou dever |
| Princípio da confiança | expectativa legítima de conduta alheia correta | Havia sinal concreto de falha ou dever de vigilância/garante |
| Desclassificação de dolo eventual para culpa consciente | art. 18, I × II | Agente foi indiferente e assumiu o risco (dolo eventual) |
| Vedação a *bis in idem* (imperícia = aumento do §4º/§7º) | art. 121, §4º / 129, §7º | O aumento decorre de regra técnica distinta da que fundou a culpa |
| Inépcia por denúncia genérica (culpa não individualizada) | art. 41 CPP | A conduta culposa individual está descrita |

> **Regra de ouro do nexo:** no Direito Penal **não se compensam culpas**. Por isso, sempre que possível, migre da tese de "concorrência" (que apenas atenua) para "**culpa exclusiva da vítima/terceiro**" ou "**ausência de nexo/causa superveniente**" (que **excluem** o crime). A escolha da tese define o **pedido** (absolvição/atipicidade × mera atenuação).

---

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos e regras notórias** (art. 18, II e p.u.; art. 13 e §1º; arts. 121, §3º/§4º; 129, §6º/§7º; 132) podem ser citados com segurança, conferida a **redação vigente**.
- **Temas de jurisprudência oscilante** — obrigação de meio × resultado na cirurgia estética; alcance do princípio da confiança; adoção da imputação objetiva; vedação ao *bis in idem* entre imperícia e o aumento por regra técnica; individualização da culpa em autoria coletiva; inépcia da denúncia culposa genérica. Qualquer **número de HC/REsp/RE, tema repetitivo, súmula ou informativo** deve ser tratado como **[NÃO VERIFICADO]** até conferência em `jurisprudencia-stj-stf`.
- **Súmula 18/STF** (perdão judicial no homicídio culposo) e a **extinção da punibilidade pelo perdão judicial** (art. 121, §5º; art. 129, §8º; **Súmula 18/STJ** sobre a natureza da sentença de perdão) — **[NÃO VERIFICADO]** o enunciado/numeração exatos; **confirmar antes de citar**. **Não invente número de súmula ou de acórdão.**
- Regra de ouro: **ensine a tese e o dispositivo; só cite o julgado depois de verificado.** Omitir vence inventar.

---

## Erros comuns e checklist analítico

**Erros comuns (evitar):**
- **Presumir crime a partir do mau resultado** — responsabilidade penal objetiva é vedada; sem violação de dever + previsibilidade, não há culpa.
- **Confundir erro escusável (álea) com imperícia** — nem todo dano profissional é crime; o risco inerente e o limite do estado da arte não são puníveis.
- **Aplicar "compensação de culpas"** do cível ao penal — no penal, a culpa da vítima não apaga a do réu (só a **exclusiva** rompe o nexo).
- **Ignorar a excepcionalidade da culpa** (art. 18, p.u.) — deixar de checar se existe tipo culposo.
- **Não individualizar a conduta** em autoria coletiva (equipe médica, cadeia hierárquica na obra/indústria) — aceitar denúncia genérica.
- **Confundir culpa consciente com dolo eventual** — a chave é a **atitude perante o resultado** (repúdio × indiferença).
- **Fundar a culpa e o aumento (§4º/§7º) na mesma inobservância técnica** — *bis in idem*.
- **Citar NR/norma técnica revogada** ou súmula de memória, sem passar pelo gate.

**Checklist:**
- [ ] Existe **tipo culposo** previsto para o fato (art. 18, p.u.)? (Se não, **atipicidade**.)
- [ ] Identifiquei a **modalidade** de culpa imputada (imprudência / negligência / imperícia) e a **fonte concreta** do dever de cuidado (NR? protocolo? *lex artis*?)?
- [ ] O dever foi **efetivamente violado**, ou a conduta ficou no **risco permitido / erro escusável**?
- [ ] O resultado era **objetivamente previsível**, ou foi **caso fortuito**?
- [ ] Há **nexo causal** (art. 13)? Existe **causa superveniente** (§1º) ou **culpa exclusiva** da vítima/terceiro que **rompa** o nexo?
- [ ] Se há concorrência de culpas, migrei — quando possível — para tese que **exclui** o crime, não apenas atenua?
- [ ] Apliquei o **princípio da confiança** e verifiquei se havia **dever de vigilância/posição de garante** (art. 13, §2º)?
- [ ] A imputação é de **dano** (homicídio/lesão culposa) ou de **perigo** (art. 132)?
- [ ] A **conduta culposa individual** de cada acusado está descrita (inépcia — art. 41 CPP)?
- [ ] Cabe **perdão judicial** (art. 121, §5º / 129, §8º)? Verifiquei os requisitos e a súmula pertinente **no gate**?
- [ ] Passei **toda** súmula/precedente/tese por `verificacao-citacoes` e `jurisprudencia-stj-stf`, e confirmei a **vigência** das NR/normas técnicas?

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta é uma ferramenta de **triagem e análise**, não uma peça pronta; a subsunção depende dos fatos concretos, da prova pericial dos autos (laudos, prontuários, NR, laudos de engenharia) e do juízo do **advogado responsável**.
- **Foco majoritário em DEFESA** — mapeia teses defensivas por tipo penal culposo. Se o operador atuar no **polo acusatório** (MP/assistente de acusação), a mesma grade serve para **sustentar** a imputação (afastar as excludentes; demonstrar dever violado, previsibilidade e nexo — colunas de contra-tese acima); o **roteador deve conferir o polo** da instituição em `_criminalsquad/_memory/company.md` antes de orientar a redação.
- **Ética por polo:** advocacia — EAOAB + Provimento 205/2021; Ministério Público — CNMP; Defensoria — LC 80/94.
- **Escopo:** esta skill trata da culpa **fora do trânsito**. Para acidentes de trânsito, use `defesa-culpa-nexo-acidente-transito`; para a fronteira dolo eventual no trânsito, `acusacao-dolo-eventual-transito`; para excludentes de ilicitude/culpabilidade e culpa imprópria, `analise-excludentes-ilicitude-culpabilidade-transversal`.
- **Citation Gate inegociável:** nenhum precedente, súmula ou NR citado de memória; tudo passa por `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). **Omitir vence inventar.**
- **Padrão de redação:** ao converter a análise em peça (resposta à acusação, rejeição da denúncia, memoriais, alegações finais), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão.
