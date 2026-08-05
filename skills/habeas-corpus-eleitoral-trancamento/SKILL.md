---
name: habeas-corpus-eleitoral-trancamento
description: >-
  Use ao impetrar HABEAS CORPUS ELEITORAL ou requerer TRANCAMENTO de inquérito/ação penal por crime
  eleitoral — falta de justa causa, atipicidade da conduta eleitoral, incompetência da Justiça
  Eleitoral ou constrangimento ilegal —, com endereçamento próprio (juiz eleitoral → TRE → TSE →
  STF) conforme a autoridade coatora, articulado com a atipicidade eleitoral (Código Eleitoral,
  arts. 289 a 354; Lei 9.504/97). Rascunho para… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, eleitoral, habeas-corpus]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-habeas-corpus-eleitoral-trancamento"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["habeas-corpus-eleitoral-trancamento", "habeas corpus", "eleitoral trancamento"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Habeas Corpus Eleitoral e Trancamento de Ação Penal Eleitoral (CE, arts. 289-354; CF, art. 5º, LXVIII; CPP, art. 648)

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

Esta skill orienta a impetração de **habeas corpus na Justiça Eleitoral** e o **trancamento de inquérito ou ação penal por crime eleitoral** — remédio contra a coação ilegal à liberdade de locomoção (CF, art. 5º, LXVIII) quando alguém sofre ou está ameaçado de sofrer constrangimento por imputação de crime eleitoral (Código Eleitoral, arts. 289 a 354, e tipos esparsos da Lei 9.504/97, LC 64/90 etc.). O HC é a **via natural do trancamento**: reconhecida a **atipicidade** da conduta eleitoral, a **falta de justa causa** ou a **incompetência da Justiça Eleitoral**, a ação penal não pode prosseguir.

> **Lição central:** antes de discutir o mérito, resolva **DUAS** questões que decidem a peça — (1) **QUAL é a autoridade coatora?** (juiz eleitoral, juiz auxiliar, TRE, TSE) — pois é ela que define o **endereçamento** na cadeia própria da Justiça Eleitoral (juiz eleitoral → TRE → TSE → STF); e (2) **a conduta é típica como crime ELEITORAL?** Muitas imputações são de fato **atípicas** (mero ilícito administrativo-eleitoral) ou de **competência comum** (não eleitoral). Errar a autoridade coatora leva ao **não conhecimento**; errar a natureza do crime desloca a competência.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **Código Eleitoral (Lei 4.737/65)** e das leis eleitorais esparsas (**Lei 9.504/97**, **LC 64/90**, **Lei 9.096/95**) — há reformas eleitorais frequentes (minirreformas) que criam, alteram e revogam tipos. Confira também competência, súmulas, temas e overruling via a skill `jurisprudencia-stj-stf` antes de fundamentar. Nada de jurisprudência de memória: **todo precedente específico passa pelo Citation Gate** (skill `verificacao-citacoes`).

## Natureza e cabimento

- **Fundamento constitucional:** CF, art. 5º, LXVIII — HC contra violência ou coação, atual ou iminente, à liberdade de locomoção por ilegalidade ou abuso de poder.
- **Hipóteses (CPP, art. 648, aplicável subsidiariamente — CE, art. 364):** falta de justa causa; quem está preso mais tempo que a lei permite; quem ordena a coação sem competência; extinta a punibilidade; manifestamente atípico o fato; nulidade do processo.
- **HC preventivo (salvo-conduto) x liberatório:** cabível **antes** da constrição (ameaça de prisão/indiciamento coator) ou **depois**. No trancamento, em regra é **preventivo/impugnativo** do inquérito ou da ação em curso.
- **Sumariedade:** o HC exige prova **pré-constituída** (documental) da ilegalidade; **não** comporta dilação probatória. Atipicidade e falta de justa causa devem saltar aos olhos "de plano".

## Base legal

- **CF, art. 5º, LXVIII** — garantia do habeas corpus.
- **CPP, arts. 647 a 667** — rito do HC (aplicação subsidiária por força do **art. 364 do Código Eleitoral**, que manda aplicar o CPP ao processo penal eleitoral).
- **Código Eleitoral (Lei 4.737/65), arts. 289 a 354** — parte criminal (tipos eleitorais) e **art. 355 e ss.** (processo penal eleitoral).
- **Código Eleitoral, arts. 22, 29 e 35** — competência do **TSE**, dos **TREs** e dos **juízes eleitorais** (base para definir autoridade coatora e endereçamento).
- **Leis esparsas com tipos eleitorais:** **Lei 9.504/97** (ex.: arts. 39, §5º; 40; 68; 72 — crimes de propaganda, urna, sistema eletrônico), **LC 64/90**, **Lei 9.096/95** (partidos).
- **Súmula 704/STF** (conexão/continência e competência por prerrogativa) e regras de **conexão eleitoral-comum** — ver skill `competencia-justica-eleitoral-conexao`.

## Endereçamento — a cadeia da Justiça Eleitoral (decidir ANTES de redigir)

A competência para o HC segue a **hierarquia** e a **autoridade coatora**:

| Autoridade coatora | HC endereçado a | Base |
|---|---|---|
| **Delegado / autoridade policial** em inquérito eleitoral, ou **Juiz Eleitoral** (1º grau) | **TRE** do Estado | CE, art. 29, I, "e" (competência dos TREs p/ HC) |
| **TRE** (ato de Tribunal Regional) ou **Juiz-membro/relator do TRE** | **TSE** | CE, art. 22, I, "e" (competência do TSE p/ HC) |
| **TSE** (ato do próprio Tribunal Superior) | **STF** | CF, art. 102, I, "i" |
| **Autoridade com foro por prerrogativa** (ex.: parlamentar federal) | conforme a prerrogativa (STF/STJ/TRE) | CF, art. 102/105; Súm. 704/STF |

> **Regra de ouro:** o HC vai ao tribunal **imediatamente superior** à autoridade coatora. Se o ato coator é do **juiz eleitoral**, o competente é o **TRE**; se é do **TRE**, o **TSE**; se é do **TSE**, o **STF**. **Confirme a distribuição de competência interna** (Regimento do TRE/TSE) e a autoridade coatora concreta antes de endereçar. **[NÃO VERIFICADO — confira o dispositivo e a redação vigente do CE via `jurisprudencia-stj-stf`.]**

## Roteiro de análise por tese (defesa)

Trancar exige demonstrar, de plano, **um** dos fundamentos abaixo. Ataque na ordem lógica (competência antes do mérito).

### 1) Incompetência da Justiça Eleitoral (questão preliminar)

- A conduta imputada é **crime eleitoral** (previsto no CE ou em lei eleitoral) **ou** crime **comum** que só tangencia a eleição? Se **não** for eleitoral, a Justiça Eleitoral é **incompetente**.
- **Conexão eleitoral-comum:** havendo conexão entre crime eleitoral e crime comum, discute-se a **atração** (competência da Justiça Eleitoral para julgar ambos) — matéria sensível e com oscilação jurisprudencial. Ver skill `competencia-justica-eleitoral-conexao`. **[NÃO VERIFICADO — o entendimento sobre atração/desmembramento oscila; confirme via `jurisprudencia-stj-stf`.]**
- **Tese:** ausente tipo eleitoral, o inquérito/ação tramita perante juízo incompetente — constrangimento ilegal (CPP, art. 648, III).

### 2) Atipicidade da conduta eleitoral (mérito — trancamento por atipicidade)

- **Subsunção estrita:** o tipo eleitoral é **fechado**; exige a conduta **exatamente** descrita (ex.: corrupção eleitoral do **art. 299 do CE** exige o especial fim de **obter voto** — "para obter ou dar voto"). Faltando a elementar (finalidade eleitoral, momento, sujeito), a conduta é **atípica**.
- **Ilícito administrativo x crime:** muitas irregularidades de **propaganda** (Lei 9.504/97) geram **multa/representação**, não crime. Confundir o **ilícito eleitoral cível-administrativo** com o **crime** é erro comum da acusação. Ver skills `defesa-propaganda-eleitoral-irregular` e `defesa-corrupcao-eleitoral-299`.
- **Princípio da insignificância / ausência de lesividade** ao bem jurídico tutelado (lisura do pleito, liberdade do voto) — aferir caso a caso.
- **Tese:** fato manifestamente atípico como crime eleitoral → trancamento (CPP, art. 648, I e VI).

### 3) Falta de justa causa (mérito — trancamento por ausência de lastro)

- **Justa causa** = lastro probatório mínimo (materialidade + indícios de autoria) + tipicidade + punibilidade. Denúncia/inquérito **sem base indiciária** ou fundada em **mera conjectura** é constrangimento ilegal.
- **Inépcia da denúncia** (CPP, art. 41): imputação genérica, sem descrever a conduta individualizada e o **especial fim de agir eleitoral**, impede a defesa e autoriza o trancamento.
- **Denúncia genérica em concurso** (candidatos, cabos eleitorais, comitê): exige-se descrição do **liame** de cada agente com o fato — vedada a responsabilidade objetiva pela condição de candidato/dirigente.
- **Tese:** ausência de justa causa/inépcia → trancamento (CPP, art. 648, I).

### 4) Extinção da punibilidade (questão de ordem pública)

- **Prescrição** eleitoral (regras do CP, art. 109 e ss., aplicáveis; observar penas dos tipos eleitorais, muitas baixas → prescrição rápida). Calcular pelo **método** da skill `calculadora-prescricao` (não estime de cabeça).
- **Anistia/abolitio criminis** por revogação de tipo eleitoral (frequente em minirreformas) — conferir vigência.
- **Tese:** punível extinta → trancamento (CPP, art. 648, VII).

### 5) Nulidades e ilegalidades da prisão/medida (HC liberatório)

- Prisão em flagrante por crime eleitoral **fora das hipóteses do art. 236 do CE** (imunidade do eleitor nos dias próximos ao pleito — salvo flagrante, crime inafiançável ou sentença por crime inafiançável). Ver o dispositivo vigente.
- Coação por autoridade **incompetente**; excesso de prazo; ilegalidade de medida cautelar.

## Teses e contra-teses

| Tese defensiva | Fundamento | Contra-tese (acusação/MPE) |
|---|---|---|
| **Atipicidade** — falta a elementar eleitoral (fim de obter voto, momento, sujeito) | CE, art. 299 e tipos correlatos; CPP, art. 648, I/VI | O especial fim de agir está descrito na denúncia; questão de prova, não de HC |
| **Ilícito administrativo, não crime** | Lei 9.504/97 (representação/multa) | A conduta preencheu também o tipo penal eleitoral |
| **Falta de justa causa / inépcia** | CPP, arts. 41 e 648, I | Há lastro indiciário mínimo; denúncia apta |
| **Incompetência da Justiça Eleitoral** | CE, arts. 22/29/35; CPP, art. 648, III | Crime eleitoral (ou conexo) atrai a competência eleitoral |
| **Prescrição / abolitio** | CP, art. 107 e ss.; revogação do tipo | Marco interruptivo recente; tipo vigente |
| **Prisão ilegal (imunidade do eleitor)** | CE, art. 236 | Flagrante de crime inafiançável / exceção legal |

> **Regra do HC:** trancamento é **medida excepcional**, só cabível quando a atipicidade, a falta de justa causa ou a incompetência forem **manifestas** e demonstráveis **de plano**, sem revolver prova. Reservar as teses que exigem instrução para a **resposta à acusação** (skill `resposta-a-acusacao`) e alegações finais.

## Estrutura da petição de HC (impetração)

```
EXCELENTÍSSIMO(A) SENHOR(A) DESEMBARGADOR(A) PRESIDENTE DO EGRÉGIO TRIBUNAL
REGIONAL ELEITORAL DO ESTADO DE [UF]
[ou: MINISTRO PRESIDENTE DO TRIBUNAL SUPERIOR ELEITORAL — conforme a autoridade coatora]


[NOME DO IMPETRANTE — advogado(a)], inscrito(a) na OAB/[UF] nº [Nº], com
escritório em [ENDEREÇO], vem, com fundamento no art. 5º, LXVIII, da
Constituição Federal, e nos arts. 647 e 648 do Código de Processo Penal
(aplicáveis por força do art. 364 do Código Eleitoral), impetrar

HABEAS CORPUS [PREVENTIVO/LIBERATÓRIO] COM PEDIDO DE LIMINAR

em favor de [NOME DO PACIENTE], [qualificação], apontando como autoridade
coatora [O JUÍZO ELEITORAL DA [Nª] ZONA / O RELATOR DO PROCESSO Nº ... / etc.],
pelas razões de fato e de direito a seguir expostas.


I — DA AUTORIDADE COATORA E DA COMPETÊNCIA
[Identificar o ato coator concreto e demonstrar por que o HC se dirige a este
Tribunal — a autoridade coatora está imediatamente subordinada a ele
(CE, arts. 22/29). Anexar o ato coator.]


II — DOS FATOS
[Narrar objetivamente a imputação de crime eleitoral, o número do
inquérito/ação, o teor da denúncia e o constrangimento ilegal sofrido ou
iminente. Instruir com prova pré-constituída — o HC não admite dilação.]


III — DO DIREITO — DO CONSTRANGIMENTO ILEGAL
[Desenvolver a(s) tese(s), na ordem: (a) incompetência da Justiça Eleitoral,
se for o caso; (b) atipicidade da conduta eleitoral — falta de elementar do
tipo (ex.: fim de obter voto, art. 299 CE); (c) falta de justa causa/inépcia
(CPP, art. 41); (d) extinção da punibilidade (prescrição/abolitio); (e)
ilegalidade da prisão (imunidade do eleitor — art. 236 CE), se houver.]

[Toda súmula/precedente citado aqui deve passar pelo Citation Gate
(skill verificacao-citacoes). Prefira o dispositivo à jurisprudência incerta.]


IV — DA LIMINAR
[Fumus boni iuris (a ilegalidade demonstrada de plano) + periculum in mora
(risco à liberdade / persistência do ato coator). Requerer a suspensão do
inquérito/ação penal ou do ato coator até o julgamento do writ.]


V — DOS PEDIDOS
Requer:
a) o CONHECIMENTO do habeas corpus e a concessão da LIMINAR para suspender
   [o inquérito/a ação penal/o ato coator];
b) a REQUISIÇÃO de informações à autoridade coatora (CPP, art. 662);
c) a oitiva da Procuradoria Regional/Geral Eleitoral;
d) no mérito, a CONCESSÃO DA ORDEM para TRANCAR [o inquérito nº .../ a ação
   penal nº ...], por [atipicidade/falta de justa causa/incompetência/extinção
   da punibilidade], cessando o constrangimento ilegal.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO(A)]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [UF], [Nº OAB], [ENDEREÇO], [NOME DO PACIENTE], [autoridade coatora concreta], [nº do inquérito/ação], [teses aplicáveis], [LOCAL], [DATA].

## Documentos a instruir (prova pré-constituída)

1. Procuração com poderes especiais (ou impetração pelo próprio advogado — HC dispensa capacidade postulatória, mas anexe identificação).
2. **Cópia do ato coator** (decisão que recebeu a denúncia, portaria de inquérito, decreto de prisão) — indispensável.
3. Cópia da **denúncia/representação** e da **portaria do inquérito**.
4. Documentos que demonstrem a atipicidade/falta de justa causa **de plano** (ex.: prova de que a conduta é mero ilícito administrativo).
5. Certidões de tramitação/andamento que comprovem o constrangimento iminente ou atual.

## Súmulas e precedentes (sob o Citation Gate)

> **NÃO cite de memória.** Os itens abaixo são pontos de pesquisa; **confirme número, teor e vigência** via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de usar.

- **Súmula 704/STF** — não viola garantias a atração, por continência/conexão, ao foro por prerrogativa (relevante na conexão eleitoral-comum). *Notória, mas confira o teor exato.*
- **Súmula 693/STF** — não cabe HC contra decisão condenatória a pena de multa (relevante porque muitos ilícitos eleitorais são punidos com multa). **[Conferir aplicabilidade ao caso.]**
- **Súmula 695/STF** — não cabe HC quando já extinta a pena privativa de liberdade. **[Conferir.]**
- Entendimento do **TSE/STF sobre trancamento de ação penal eleitoral** por atipicidade e sobre a **competência para HC eleitoral**. **[NÃO VERIFICADO — pesquisar HC/RHC específicos via `jurisprudencia-stj-stf`; não inventar número de acórdão, informativo ou tema.]**
- **Corrupção eleitoral (art. 299 CE)** — exigência do especial fim de "obter ou dar voto"; jurisprudência sobre a distinção entre crime e captação ilícita de sufrágio (art. 41-A da Lei 9.504/97, de natureza cível-eleitoral). **[Conferir teor e distinção via `jurisprudencia-stj-stf`.]**

## Erros comuns / checklist

- [ ] **Autoridade coatora corretamente identificada** e HC endereçado ao tribunal **imediatamente superior** (juiz eleitoral → TRE → TSE → STF)?
- [ ] Ato coator **concreto anexado** (não basta narrar — o HC exige prova pré-constituída)?
- [ ] Verificado se a conduta é **crime eleitoral** (tipo no CE/lei eleitoral) e não **ilícito administrativo** (multa/representação) nem **crime comum** (competência diversa)?
- [ ] Elementar do tipo eleitoral (ex.: **fim de obter voto** no art. 299 CE) ausente → atipicidade demonstrada **de plano**?
- [ ] Prescrição conferida pelo **método** (penas eleitorais baixas prescrevem rápido) — usar `calculadora-prescricao`, não estimar?
- [ ] Vigência dos tipos conferida (minirreformas revogam/alteram tipos — possível **abolitio criminis**)?
- [ ] Teses que exigem **instrução probatória** foram reservadas para a resposta à acusação (não cabem em HC)?
- [ ] **Liminar** bem fundamentada (fumus + periculum) com pedido claro de suspensão?
- [ ] Toda súmula/precedente passou pelo **Citation Gate** (`verificacao-citacoes`) — nada de número de acórdão/informativo/tema de memória?

**Anti-padrões (evitar):**
- Endereçar o HC ao juízo errado (não conhecimento) por não identificar a autoridade coatora.
- Tentar trancar por tese que **depende de prova** (o HC não admite dilação — vai a resposta à acusação/instrução).
- Tratar irregularidade de **propaganda** (multa) como crime, ou o inverso.
- Afirmar atipicidade sem apontar **qual elementar** do tipo eleitoral falta.
- Inventar número de HC/RHC/REsp, informativo ou tema do TSE/STF — **prefira ensinar a tese e citar o dispositivo**.

## Skills relacionadas

- `habeas-corpus` e `hc-tribunais-superiores` — HC na Justiça Comum/Federal e nos Tribunais Superiores (endereçamento diverso).
- `trancamento-inquerito-hc` — trancamento na Justiça Comum (mesma lógica, foro comum).
- `competencia-justica-eleitoral-conexao` — competência e conexão eleitoral-comum (preliminar do HC).
- `defesa-corrupcao-eleitoral-299`, `defesa-propaganda-eleitoral-irregular`, `defesa-crimes-falsidade-eleitoral` — atipicidade por tipo penal eleitoral.
- `calculadora-prescricao` — cálculo determinístico da prescrição eleitoral [conferir se a calculadora contempla os tipos eleitorais; caso não, marcar "calculadora a implementar com testes"].
- `jurisprudencia-stj-stf` / `verificacao-citacoes` — Citation Gate obrigatório.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da peça; a responsabilidade pela impetração, pelo endereçamento e pelas teses é sempre do **advogado(a)** (CED, art. 2º; EAOAB). A revisão final antes do protocolo é indispensável.
- **Ética por polo — foco em DEFESA.** Esta skill é do **polo defensivo** (paciente/impetrante). Advocacia sob OAB + **Provimento 205/2021**; Ministério Público Eleitoral sob **CNMP**; Defensoria sob **LC 80/94**. O roteador deve conferir o **polo** da instituição (`_criminalsquad/_memory/company.md`) antes de aplicar.
- **Citation Gate inegociável.** Nenhuma súmula, tese ou precedente citado de memória — tudo passa por `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Na dúvida, **omitir vence inventar**.
- **Vigência eleitoral.** Confira sempre a redação vigente do Código Eleitoral e das leis esparsas — reformas eleitorais são frequentes.

## Lembretes finais

- **Autoridade coatora primeiro, mérito depois** — ela define o endereçamento na cadeia eleitoral (juiz → TRE → TSE → STF).
- **Crime eleitoral x ilícito administrativo x crime comum** — classifique antes de escolher a tese e o juízo.
- **Atipicidade = apontar a elementar que falta** (ex.: fim de obter voto no art. 299 CE).
- **HC exige prova pré-constituída** — sem dilação; teses probatórias vão à resposta à acusação.
- **Prescrição eleitoral prescreve rápido** — calcule pelo método, não de cabeça.
- **Todo precedente passa pelo Citation Gate** — dispositivo com certeza; acórdão só verificado.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
