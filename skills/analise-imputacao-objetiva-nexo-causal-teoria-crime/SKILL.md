---
name: analise-imputacao-objetiva-nexo-causal-teoria-crime
description: >-
  Use para estruturar teses de TIPICIDADE OBJETIVA e culpabilidade em qualquer tipo penal — nexo
  causal (art. 13 CP), imputação objetiva, causa superveniente relativamente independente (art. 13,
  §1º), erro de tipo e erro de proibição (arts. 20-21 CP) e crime impossível (art. 17 CP).
  Ferramenta analítica transversal (NÃO é peça): alimenta alegações finais, resposta à acusação,
  habeas corpus, apelação e memoriais. Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, teoria-do-delito, tipicidade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-imputacao-objetiva-nexo-causal-teoria-crime"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-imputacao-objetiva-nexo-causal-teoria-crime", "analise imputacao", "teoria crime"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise de Tipicidade Objetiva — Nexo Causal, Imputação Objetiva e Erro (arts. 13, 17, 20 e 21 do CP)

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

Esta skill é uma **ferramenta analítica transversal** (não gera peça) para **construir e testar teses de tipicidade objetiva e de culpabilidade** aplicáveis a **qualquer tipo penal**. Ela estrutura os quatro eixos da dogmática que quebram a imputação **antes** de chegar ao dolo/culpa e à pena: (1) **nexo de causalidade** (art. 13, *caput* e §1º, CP), (2) **imputação objetiva** (filtro normativo do resultado), (3) **erro** — de tipo e de proibição (arts. 20-21) — e (4) **crime impossível** (art. 17). O produto é a **matéria-prima jurídica** que depois vira fundamento em resposta à acusação, alegações finais, memoriais, HC ou apelação.

> **Lição central:** antes de discutir dolo, culpa ou dosimetria, **teste o fato objetivo**: existe conduta que causou o resultado (*conditio*)? O resultado é **imputável** a essa conduta (criação e realização de risco proibido, dentro do âmbito da norma)? O agente conhecia os **elementos do tipo** e a **ilicitude**? O meio e o objeto eram **idôneos**? Muita defesa perde a tese mais forte — a **atipicidade objetiva** — por pular direto para o subjetivo. Causalidade e imputação são degraus anteriores; se um deles cai, o crime não se forma e a pena sequer se discute.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 13, 14, 15, 17, 20, 21, 22 e 23 do CP** na fonte oficial antes de fundamentar. A Parte Geral vem da **Reforma de 1984 (Lei 7.209/84)**, que consagrou o **erro de tipo/erro de proibição** (superando a antiga dicotomia *erro de fato / erro de direito*) — citar a terminologia anterior a 1984 é **erro grave de vigência**. A **imputação objetiva** é construção **doutrinária/jurisprudencial** (Roxin, Jakobs), **sem** artigo próprio no CP: sustente-a como interpretação do art. 13, jamais como texto de lei. Toda súmula, tese ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes` antes do uso.

## Base legal

- **Art. 13, *caput*, CP** — o resultado só é imputável a quem lhe deu causa; **causa é a ação/omissão sem a qual o resultado não teria ocorrido** (teoria da equivalência dos antecedentes / *conditio sine qua non*).
- **Art. 13, §1º, CP** — a **superveniência de causa relativamente independente** que, **por si só**, produziu o resultado, **exclui a imputação** do resultado; os fatos anteriores imputam-se, porém, a quem os praticou (responde por tentativa).
- **Art. 13, §2º, CP** — **relevância da omissão** (dever de agir do garantidor): a, b, c — quem tinha o **dever legal**, assumiu a responsabilidade de impedir o resultado, ou criou o risco.
- **Art. 14, II + art. 15, CP** — **tentativa** (não consumação por circunstância alheia à vontade) e **desistência voluntária/arrependimento eficaz** (respondem-se só os atos já praticados) — desfecho frequente quando o nexo é quebrado.
- **Art. 17, CP** — **crime impossível**: por **ineficácia absoluta do meio** ou **absoluta impropriedade do objeto**, não se pune a tentativa (atipicidade).
- **Art. 20, *caput*, CP** — **erro de tipo**: o erro sobre elemento constitutivo do tipo **exclui o dolo**; permite punição por culpa se prevista e se o erro for evitável.
- **Art. 20, §1º, CP** — **descriminante putativa** (erro sobre situação de fato que, se existisse, tornaria a ação legítima) — isenta de pena; se evitável, responde por culpa.
- **Art. 20, §2º, CP** — o erro provocado por terceiro responsabiliza o **provocador**.
- **Art. 20, §3º, CP** — **erro sobre a pessoa** (*error in persona*): não isenta; consideram-se as condições da vítima **visada**.
- **Art. 21, CP** — **erro de proibição**: o desconhecimento da lei é inescusável, mas o **erro sobre a ilicitude do fato**, se **inevitável**, **isenta de pena**; se evitável, **reduz** de 1/6 a 1/3 (afeta a **culpabilidade**, não o dolo).
- **Art. 22, CP** — coação irresistível e obediência hierárquica (culpabilidade — correlato de análise).

## O funil da análise (ordem dogmática)

Analise **nesta ordem** e pare no primeiro degrau que quebra:

```
1) CONDUTA houve? (ação/omissão voluntária; não caso fortuito puro, força maior, ato reflexo)
2) NEXO CAUSAL (art. 13):  a conduta é conditio sine qua non do resultado?
     └─ eliminação hipotética: suprimida a conduta, o resultado desaparece?
        └─ NÃO desaparece → sem nexo → atipicidade (ou tentativa)
        └─ concausa superveniente que "por si só" produziu o resultado (§1º)?
             └─ SIM → exclui imputação do resultado → TENTATIVA (arts. 14, II)
3) IMPUTAÇÃO OBJETIVA (filtro normativo do art. 13):
     a) a conduta criou risco PROIBIDO e juridicamente relevante?  (risco permitido → atípico)
     b) esse risco se REALIZOU no resultado?  (curso causal atípico/acaso → não imputa)
     c) o resultado está no ÂMBITO DE PROTEÇÃO da norma?  (fora → não imputa)
     d) houve autocolocação/heterocolocação consentida em risco pela vítima?
4) TIPICIDADE SUBJETIVA:  DOLO?  (erro de tipo, art. 20 → exclui dolo)  CULPA prevista?
5) ILICITUDE:  há causa de justificação (art. 23)?  descriminante putativa (art. 20, §1º)?
6) CULPABILIDADE:  imputável?  potencial consciência da ilicitude (erro de proibição, art. 21)?  exigibilidade?
7) CRIME IMPOSSÍVEL (art. 17):  meio/ objeto absolutamente inidôneos? → atipicidade da tentativa
```

Cada degrau derrubado é uma tese autônoma. **Documente a eliminação hipotética por escrito** — é o que torna a tese verificável pelo juízo.

---

## Eixo 1 — Nexo causal e concausas (art. 13)

**Regra:** o CP adota a **teoria da equivalência dos antecedentes** (*conditio sine qua non*), corrigida pelo **§1º** (causa superveniente relativamente independente) e, na doutrina moderna, **pela imputação objetiva** (Eixo 2), que evita o regresso ao infinito.

**Método da eliminação hipotética (Thyrén):** suprima mentalmente a conduta do agente. Se o resultado **ainda assim ocorreria** no tempo e no modo em que ocorreu, a conduta **não** é causa.

**Concausas — tipologia (a distinção decide a tese):**

| Tipo de concausa | Efeito no nexo | Consequência |
|---|---|---|
| **Absolutamente independente** (preexistente, concomitante ou superveniente) | Rompe o nexo — resultado tem causa própria alheia à conduta | Agente responde só pelos **atos praticados** (tentativa) |
| **Relativamente independente PREEXISTENTE** (ex.: hemofilia da vítima) | **Não** rompe (soma-se à conduta) | Responde pelo **resultado** (a vulnerabilidade não exclui a imputação) |
| **Relativamente independente CONCOMITANTE** | **Não** rompe (em regra) | Responde pelo **resultado** |
| **Relativamente independente SUPERVENIENTE que POR SI SÓ produziu o resultado** (art. 13, §1º) | **Rompe** a imputação do resultado | Responde só pelos **atos anteriores** → **TENTATIVA** |

> **A linha divisória (art. 13, §1º):** a superveniente que **"por si só"** causa o resultado é a que **inaugura curso causal novo e autônomo**, não mero desdobramento do risco criado. **Exemplo clássico de doutrina:** vítima ferida a facada é levada de ambulância e morre em **acidente da ambulância / incêndio no hospital** → morte por causa **nova e autônoma** → agente responde por **tentativa de homicídio** (não pelo homicídio consumado). **Contraexemplo:** vítima ferida morre de **infecção/broncopneumonia decorrente do próprio ferimento** → desdobramento **normal e previsível** do risco criado → **não** rompe → responde pelo **resultado**. A prova pericial (laudo, nexo tanatológico) é decisiva aqui.

**Tese defensiva (Eixo 1):** demonstrar, com laudo, que o resultado adveio de **causa superveniente que por si só o produziu** (§1º) → **desclassificar para tentativa** (redução de 1/3 a 2/3, art. 14, parágrafo único). Ou, no caso de omissão, que **inexistia dever de garantidor** (art. 13, §2º) → atipicidade da omissão imprópria.

---

## Eixo 2 — Imputação objetiva (filtro normativo)

A imputação objetiva **não substitui** a causalidade natural — **acrescenta** um filtro: só se imputa o resultado quando a conduta **criou um risco juridicamente proibido** que **se realizou no resultado**, dentro do **âmbito de proteção da norma**. É **construção doutrinária** (Roxin/Jakobs) sem artigo próprio — sustente-a como **interpretação teleológica do art. 13**.

**Os quatro critérios (cada um é uma tese de atipicidade objetiva):**

1. **Risco permitido / diminuição do risco.** Quem age dentro do **risco socialmente tolerado** (dirigir na velocidade, operar máquina regulamentada, praticar esporte com regras) **não** cria risco proibido — resultado **não imputável**. Quem **reduz** um risco já existente (empurra a vítima para tirá-la da trajetória e ela quebra o braço) tampouco realiza tipo.
2. **Realização do risco no resultado.** O risco criado deve ser o **mesmo** que se concretizou. Se o resultado vem de **curso causal atípico / acaso** (a vítima levemente ferida morre por causa estranha ao ferimento), o risco **não se realizou** → não imputa. Interface direta com o art. 13, §1º.
3. **Âmbito de proteção da norma.** A norma violada deve **destinar-se a evitar aquele tipo de resultado**. Resultados **fora** do fim de proteção (ex.: dano a bem que a norma não visava tutelar; resultados por concausa de terceiro fora do escopo) **não** se imputam.
4. **Autocolocação / heterocolocação consentida em risco.** Quando a **própria vítima** se coloca conscientemente em risco (autocolocação — ex.: consumo por vontade própria) ou consente na exposição, a imputação ao terceiro pode **ceder**, conforme a autonomia da vítima e o domínio do fato. Tese sensível — **aferir domínio, informação e voluntariedade**.

> **Advertência de aceitação:** a imputação objetiva é **amplamente debatida** e **nem sempre acolhida** expressamente pelos tribunais, que muitas vezes resolvem os mesmos casos pela via do **art. 13, §1º** ou da **ausência de dolo/culpa**. **Estratégia recomendada:** ancore a tese **primeiro** no **texto legal** (art. 13, §1º; ausência de nexo; risco permitido lido como atipicidade) e use a imputação objetiva como **reforço dogmático**, não como fundamento único. Verifique o estado atual do entendimento via `jurisprudencia-stj-stf`.

---

## Eixo 3 — Erro de tipo e erro de proibição (arts. 20-21)

A distinção é **decisiva** porque incide em **planos diferentes** do crime e produz **efeitos diferentes**:

| | **Erro de tipo (art. 20)** | **Erro de proibição (art. 21)** |
|---|---|---|
| **Sobre o quê** | Elemento **constitutivo do tipo** (fato, circunstância) | **Ilicitude** do fato (o agente sabe o que faz, mas o crê permitido) |
| **Plano afetado** | **Tipicidade** (exclui o **dolo**) | **Culpabilidade** (exclui/reduz a **reprovabilidade**) |
| **Se INEVITÁVEL** | Exclui dolo **e culpa** → **atipicidade** | **Isenta de pena** |
| **Se EVITÁVEL** | Exclui dolo; pune por **culpa** se houver tipo culposo | Mantém o crime; **reduz** a pena de **1/6 a 1/3** |
| **Exemplo** | Levar consigo, por engano, mala alheia crendo ser a sua | Estrangeiro que planta espécie lícita no país de origem, ilícita aqui |

**Descriminante putativa (art. 20, §1º):** o agente supõe **situação de fato** que, se real, tornaria a conduta legítima (crê, erroneamente, estar sob agressão iminente e reage). **Trata-se como erro de tipo permissivo** (teoria limitada da culpabilidade, adotada majoritariamente): se **inevitável**, isenta; se **evitável**, responde por **culpa** (se prevista). **Distinga** do erro de proibição **indireto** (o agente conhece a situação, mas erra sobre os **limites** de uma justificante) — aqui a solução é a do art. 21.

**Erro sobre a pessoa (art. 20, §3º):** *error in persona* **não** isenta; consideram-se as qualidades da vítima **pretendida**. Não confundir com ***aberratio ictus*** (art. 73 — erro na execução, acerta pessoa diversa) nem com ***aberratio criminis*** (art. 74).

**Teses (Eixo 3):**
- **Erro de tipo inevitável** → **absolvição por atipicidade** (não havia dolo e não há tipo culposo, ou o erro era inevitável).
- **Erro de tipo evitável** em crime **sem** modalidade culposa → **atipicidade** (não há como punir a culpa inexistente no tipo).
- **Descriminante putativa** (art. 20, §1º) → isenção ou culpa, conforme evitabilidade.
- **Erro de proibição inevitável** (art. 21) → isenção de pena; **evitável** → **redução obrigatória de 1/6 a 1/3** (pleitear o patamar máximo).
- A **evitabilidade** afere-se pela **possibilidade concreta** de o agente, nas circunstâncias, alcançar a consciência da ilicitude (esforço exigível, acesso à informação, contexto cultural) — construa o fato para demonstrar a **inevitabilidade**.

---

## Eixo 4 — Crime impossível (art. 17)

Não se pune a tentativa quando, por **ineficácia absoluta do meio** ou **absoluta impropriedade do objeto**, era **impossível** consumar o crime. O CP adota a **teoria objetiva temperada**: a impossibilidade deve ser **absoluta** (não meramente relativa).

| | **Absoluta (art. 17 — atipicidade)** | **Relativa (tentativa punível)** |
|---|---|---|
| **Meio** | Arma **totalmente** inapta (de brinquedo; descarregada por vício irreparável); "veneno" inócuo | Arma que **falha** no disparo; dose insuficiente mas idônea |
| **Objeto** | Objeto **inexistente** (atirar em quem já estava morto; "abortar" mulher não grávida) | Objeto **momentaneamente** ausente (bolso vazio naquele instante) |

> **Súmula 145/STF** (flagrante preparado / crime impossível): quando a autoridade/agente provocador **prepara** o flagrante e **torna impossível** a consumação, há crime impossível — não há punição. **[Confirmar redação e alcance atual via `jurisprudencia-stj-stf`.]** Distinga do **flagrante esperado** (mera vigilância, sem provocação — este é **válido**).

> **Furto em estabelecimento com vigilância/sistema antifurto:** há **forte controvérsia** sobre se a monitoração eletrônica torna a subtração crime impossível por ineficácia do meio/impropriedade do objeto. **Há entendimento sumulado em sentido restritivo à tese defensiva.** **Não afirme o teor da súmula de memória — confira o número, a redação e a aplicação atual via `jurisprudencia-stj-stf` antes de citar.** Ensine a **tese** (monitoração integral impede a consumação → crime impossível) e a **contra-tese** (vigilância falível não gera impossibilidade absoluta), deixando o número para a verificação.

**Tese (Eixo 4):** demonstrar a **absoluta** inidoneidade (perícia no instrumento; prova da inexistência do objeto) → **atipicidade da tentativa** (absolvição, art. 386, III, CPP).

---

## Teses e contra-teses (mapa rápido)

| Tese (defesa) | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Ausência de nexo / concausa superveniente autônoma → **tentativa** | Art. 13, §1º; eliminação hipotética; laudo | Concausa foi **desdobramento previsível** do risco (não "por si só") |
| Risco permitido → **atipicidade objetiva** | Imputação objetiva; art. 13 (teleológico) | Conduta excedeu o risco tolerado; imputação objetiva não acolhida |
| Autocolocação da vítima em risco | Imputação objetiva; autonomia da vítima | Havia domínio do fato / dever de cuidado do agente |
| Erro de tipo inevitável → **atipicidade** | Art. 20, *caput* | Erro **evitável** + existência de tipo culposo |
| Descriminante putativa → isenção/culpa | Art. 20, §1º (teoria limitada) | Erro evitável; ausência de situação fática plausível |
| Erro de proibição inevitável → isenção | Art. 21 | Ilicitude era **acessível** (erro evitável → só reduz) |
| Crime impossível → **atipicidade** | Art. 17 (teoria objetiva temperada) | Inidoneidade apenas **relativa** → tentativa punível |

---

## Súmulas e precedentes (sob o Citation Gate)

**Cite apenas após conferir via `jurisprudencia-stj-stf` — não reproduza número/teor de memória:**

- **Súmula 145/STF** — flagrante **preparado** (provocado) e crime impossível. *[Confirmar redação e alcance.]*
- **Súmula sobre furto em estabelecimento com sistema de vigilância/antifurto** — orientação **restritiva** à tese de crime impossível. *[NÃO VERIFICADO — confirmar número, redação e aplicação atual antes de citar.]*
- Precedentes de STJ/STF sobre **concausa superveniente** (art. 13, §1º) e desclassificação para tentativa; sobre **erro de proibição** em crimes ambientais/tributários; sobre **imputação objetiva** e autocolocação em risco. *[NÃO VERIFICADO — todos os números de HC/REsp/RE, temas e informativos devem ser levantados e conferidos via `jurisprudencia-stj-stf`.]*

> **Regra de ouro:** prefira ancorar a tese no **dispositivo legal** (arts. 13, 17, 20, 21) e na **dogmática** (eliminação hipotética, teoria objetiva temperada). Só invoque acórdão/súmula **específico** depois de verificado. Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência inventada por IA.

---

## Erros comuns / checklist de análise

- [ ] **Fez a eliminação hipotética por escrito** antes de afirmar (ou negar) o nexo?
- [ ] **Classificou a concausa** (absoluta × relativa; preexistente/concomitante/superveniente) — e só invocou o §1º quando a superveniente produziu o resultado **"por si só"**?
- [ ] **Não confundiu** ausência de nexo (atipicidade/tentativa) com ausência de dolo (erro de tipo)? São degraus **distintos** do funil.
- [ ] **Ancorou a imputação objetiva no art. 13** (interpretação), sem tratá-la como texto de lei, e **reforçou** com fundamento legal aceito?
- [ ] **Distinguiu erro de tipo (exclui dolo) de erro de proibição (afeta culpabilidade)** — e a **descriminante putativa** (art. 20, §1º) do erro de proibição indireto (art. 21)?
- [ ] Em **erro de tipo evitável**, checou se **existe modalidade culposa** do tipo (se não existir, é atipicidade)?
- [ ] Em **erro de proibição evitável**, pleiteou a **redução de 1/6 a 1/3** (art. 21) — no **patamar máximo**?
- [ ] Em **crime impossível**, a inidoneidade do meio/objeto é **absoluta** (perícia) e não meramente relativa (art. 17)?
- [ ] **Não citou terminologia pré-1984** (erro de fato/erro de direito) nem afirmou súmula/acórdão de memória?
- [ ] **Passou toda citação pelo gate** `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Pular direto para dolo/culpa sem testar **conduta → nexo → imputação** (perde-se a tese mais forte, a atipicidade objetiva).
- Invocar o art. 13, §1º para **qualquer** concausa, sem verificar se a superveniente produziu o resultado **"por si só"**.
- Tratar **imputação objetiva** como se fosse artigo do CP, ou como fundamento **único** perante juízo que não a acolhe.
- Confundir **erro de tipo** com **erro de proibição** (efeitos e planos diferentes) e **descriminante putativa** (art. 20, §1º) com justificação real (art. 23).
- Afirmar **crime impossível** com base em inidoneidade **relativa** (arma que só falhou; objeto momentaneamente ausente).
- Citar súmula de **furto vigiado** ou **flagrante preparado** com número/teor **de memória**.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é **apoio à construção da tese** — hipótese dogmática a confirmar —, não substitui o juízo do profissional nem a análise do caso concreto, dos laudos e dos autos. A responsabilidade pela peça e pela sustentação é sempre do **advogado(a)** (CED/OAB, art. 2º; Provimento 205/2021). Havendo atuação de **Ministério Público** ou **Defensoria**, observar CNMP e LC 80/94.
- **Polo:** esta é ferramenta **transversal e majoritariamente defensiva** (foco em quebrar a imputação por tipo penal). O `polo_acusacao` da spec é **false** — o **chefe-roteador deve conferir o polo da instituição** (em `_criminalsquad/_memory/company.md`) e, se a atuação for acusatória, adaptar o uso (aqui as mesmas categorias servem para **demonstrar** o nexo e a imputação, e para **antecipar** as teses defensivas acima).
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer** número específico de HC/REsp/RE, tema ou informativo sem certeza absoluta vai marcado **[NÃO VERIFICADO]** e conferido antes do uso.
- **Encadeamento:** ao converter a análise em peça, aplique a skill de peça pertinente (ex.: `resposta-a-acusacao`, alegações finais, HC, apelação) e a `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita e persuasão. Para escolher o tipo penal e a tese-mãe, dialogue com `selecao-tese-por-tipo-penal` e `matriz-teses`.
