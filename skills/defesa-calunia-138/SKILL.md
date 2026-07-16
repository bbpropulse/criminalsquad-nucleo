---
name: defesa-calunia-138
description: >-
  Use ao defender querelado/réu acusado de CALÚNIA (CP art. 138) — imputação FALSA de fato definido
  como crime, ofensa à honra objetiva. Gatilhos: defesa de calúnia, art. 138 CP, imputação falsa de
  crime, honra objetiva, animus caluniandi, atipicidade por ausência de dolo específico, calúnia….
  Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra, defesa, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-calunia-138"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-calunia-138", "defesa calunia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa em Calúnia (CP, art. 138)

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

Esta skill orienta a **defesa técnica do querelado (ou réu)** acusado de **calúnia** — a imputação **falsa** a alguém de **fato definido como crime** (CP, art. 138). É o mais grave dos crimes contra a honra: ofende a **honra objetiva** (a reputação, o que os outros pensam da vítima) e exige um **fato criminoso determinado e falso**. Ação penal, em regra, **privada** (queixa-crime) — o que abre flancos de defesa próprios (decadência, retratação, perempção, ausência de justa causa).

> **Lição central:** calúnia não é "xingar de bandido". Exige **três elementos cumulativos**: (1) imputação de **fato determinado** — não juízo de valor genérico; (2) que esse fato seja **definido como crime** — não mera contravenção ou ilícito civil; e (3) que a imputação seja **falsa**, com o querelado **sabendo ou devendo saber** da falsidade (dolo). Ataque a **ausência de qualquer um dos três** — falta um, não há calúnia.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 138 a 145 do CP e dos arts. 38, 44, 519-523 do CPP antes de fundamentar. Confira também a **Lei 14.132/2021** (perseguição/*stalking*) e a discussão sobre a **descriminalização parcial da injúria/desacato** e sobre crimes contra a honra em **meio virtual** — o cenário legislativo e jurisprudencial se move. Toda súmula, tema ou acórdão passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de ir para a peça. Na dúvida, **omitir vence inventar**.

---

## Base legal

- **Art. 138, CP** — Calúnia: imputar **falsamente** a alguém **fato definido como crime**. Pena: detenção, 6 meses a 2 anos, e multa.
- **Art. 138, §1º** — **Propalação/divulgação**: pune quem, sabendo falsa a imputação, a **propala ou divulga** (equipara à calúnia, punição na mesma medida).
- **Art. 138, §2º** — **Calúnia contra os mortos**: é punível (única figura contra a honra que protege expressamente o morto — a difamação e a injúria, não).
- **Art. 138, §3º** — **Exceção da verdade**: admitida, **salvo** as exceções ali previstas (crime de ação privada sem trânsito em julgado; ofendido absolvido por sentença irrecorrível; crime contra o Presidente da República ou chefe de governo estrangeiro).
- **Art. 141, CP** — **Causas de aumento** (contra o Presidente; funcionário público em razão da função; na presença de várias pessoas ou por meio que facilite a divulgação; mediante paga/promessa; **e o aumento em dobro se cometido em rede social — §2º, red. Lei 13.964/2019** — conferir vigência).
- **Art. 142, CP** — **Imunidades / exclusão do crime**: não constituem injúria ou difamação (**note: calúnia não está no rol**) a ofensa (I) em discussão da causa pela parte/procurador; (II) a opinião desfavorável da crítica; (III) o conceito do funcionário no cumprimento do dever.
- **Art. 143, CP** — **Retratação**: querelado que **se retrata cabalmente** antes da sentença fica **isento de pena** (na calúnia e difamação; não na injúria).
- **Art. 145, CP** — regra da **ação penal privada** (queixa), com exceções (ação pública condicionada quando contra funcionário público em razão da função — Súmula 714/STF permite a escolha do ofendido).
- **CPP:** **art. 38** (decadência: **6 meses**); **art. 44** (procuração com poderes especiais e narrativa do fato); **arts. 519 a 523** (procedimento dos crimes contra a honra — audiência de reconciliação, art. 520).
- **CF, art. 5º, IV e IX** (liberdade de expressão) × **V e X** (honra, imagem, direito de resposta) — a **ponderação** é o campo de batalha; **art. 53 CF** (imunidade parlamentar material) e **art. 133 CF / art. 7º, §2º, EAOAB** (imunidade do advogado).

---

## Estrutura da defesa — do juízo de admissibilidade ao mérito

A calúnia costuma vir por **queixa-crime** (ação privada). A defesa trabalha em **camadas**, da mais barata (extinção sem exame de mérito) à mais profunda (atipicidade / absolvição):

1. **Admissibilidade da queixa (rejeição liminar — art. 395 CPP).** Antes do mérito, checar:
   - **Decadência** (art. 38 CPP): a queixa foi oferecida **dentro de 6 meses** do conhecimento da autoria? Passou → extinção da punibilidade (art. 107, IV, CP).
   - **Legitimidade e representação** (art. 44 CPP): procuração com **poderes especiais** e **menção ao fato**? Defeito insanável → inépcia.
   - **Inépcia da inicial** (art. 41 CPP): a queixa **individualiza o fato criminoso** imputado como calunioso, com data, forma e conteúdo? Imputação genérica não permite defesa → inépcia.
   - **Ausência de justa causa** (art. 395, III): não há lastro mínimo de autoria/materialidade.
2. **Reconciliação (art. 520 CPP).** No procedimento dos crimes contra a honra, o juiz designa **audiência de reconciliação** antes de receber a queixa — oportunidade de **composição** e extinção.
3. **Atipicidade (mérito — o coração da defesa).** Atacar cada elemento do art. 138 (ver abaixo).
4. **Causas de exclusão / extinção específicas:** retratação (art. 143), imunidades (arts. 142, 53 CF, 133 CF), exceção da verdade (art. 138, §3º), perdão/renúncia, perempção (art. 60 CPP), morte do querelante sem sucessor habilitado.

---

## Roteiro de teses defensivas por elemento do tipo

### 1. Não há **fato determinado** — é juízo de valor genérico → atipicidade / desclassificação para injúria
Calúnia exige a imputação de um **fato concreto, determinado, com circunstâncias**. "Fulano é um ladrão", dito de forma genérica e ofensiva, sem apontar **qual furto/roubo**, quando e como, tende a ser **injúria** (art. 140 — ofensa à dignidade/decoro), **não** calúnia.
- **Tese:** ausência de fato determinado definido como crime → não há calúnia; no máximo injúria (crime menos grave, com consequências processuais distintas).

### 2. O fato imputado **não é crime** → atipicidade (ou desclassificação para difamação)
A calúnia protege contra a falsa imputação de **fato definido como crime**. Se o fato imputado é **contravenção penal**, **ilícito civil**, **infração administrativa** ou **fato apenas desonroso mas atípico**, **não é calúnia**.
- Imputar falsamente **contravenção** ou **fato desonroso não criminoso** → em regra **difamação** (art. 139), não calúnia.
- **Tese:** o fato atribuído não corresponde a nenhum tipo penal → afasta-se o art. 138; reclassificar (se o caso) para difamação, com todas as consequências (pena menor, prescrição mais curta).

### 3. O fato imputado é **verdadeiro** → excludente da tipicidade + exceção da verdade (art. 138, §3º)
A calúnia pressupõe imputação **falsa**. Se o fato é **verdadeiro**, o tipo não se aperfeiçoa. A **exceção da verdade** (art. 138, §3º) é o incidente pelo qual o querelado prova a veracidade — e a prova da verdade **exclui o crime**.
- Atenção às **três vedações** do §3º: (I) crime de ação privada sem condenação transitada em julgado; (II) ofendido absolvido por sentença irrecorrível; (III) ofensa ao Presidente ou chefe de governo estrangeiro.
- **Tese:** demonstrada a veracidade do fato (art. 138, §3º), não há calúnia — a exceção da verdade é procedente e absolve.

### 4. Ausência de **dolo** (o *animus caluniandi*) → atipicidade subjetiva
Calúnia é crime **doloso**: o agente deve **saber que imputa fato falso** (dolo direto) **ou** assumir o risco (dolo eventual, na dicção "sabendo ou devendo saber"). **Não há calúnia culposa.** E a doutrina/jurisprudência exigem o **especial fim de ofender** — o *animus caluniandi* — que **não se confunde** com outras intenções:
- ***animus narrandi*** — quem **narra** um fato (ex.: relata a terceiro o que ouviu, faz um boletim de ocorrência, dá uma notícia) sem intenção de caluniar;
- ***animus criticandi*** — **crítica** (jornalística, artística, política, técnica);
- ***animus defendendi*** — quem se **defende** (na petição, no debate da causa);
- ***animus jocandi*** — a **pilhéria**, a brincadeira;
- ***animus consulendi*** — a informação prestada **no interesse** de quem a recebe (ex.: alerta a um empregador).
- **Tese central de atipicidade:** presente o *animus narrandi/criticandi/defendendi/jocandi/consulendi*, **falta o dolo específico de caluniar** → conduta atípica. É a tese defensiva mais usada e mais forte quando o contexto é de notícia, crítica ou defesa.

### 5. **Retratação cabal** antes da sentença (art. 143, CP) → isenção de pena
Na calúnia, a **retratação cabal** e tempestiva (antes da sentença de 1º grau) **isenta de pena**. Deve ser **completa, incondicional e inequívoca** — desdizer-se do que afirmou.
- Cabível também nos casos de **ofensa por meio de comunicação** — na calúnia/difamação praticada pela imprensa/rede, a retratação deve ter a **mesma forma e alcance** da ofensa (parágrafo único do art. 143, red. Lei 13.188/2015 — conferir vigência).
- **Tese:** havendo retratação cabal antes da sentença, requer-se a **extinção da punibilidade / isenção de pena** (art. 143).

### 6. Imunidades → exclusão de ilicitude/punibilidade
- **Imunidade judiciária (art. 142, I, CP):** ofensa irrogada **na discussão da causa**, pela parte ou procurador. **CUIDADO:** o art. 142 fala em **injúria e difamação** — a **calúnia NÃO está listada**. Logo, calúnia irrogada em juízo **não é acobertada** pelo art. 142; a via é o **art. 133 CF / art. 7º, §2º, EAOAB** (imunidade do advogado), que **também não alcança a calúnia** segundo entendimento consolidado. **Não prometa imunidade para calúnia com base no art. 142** — é erro clássico.
- **Imunidade parlamentar material (art. 53, CF):** opiniões, palavras e votos do parlamentar **no exercício do mandato** — alcança inclusive a calúnia, quando **conexa ao exercício**. Confira o nexo com a função.
- **Crítica e conceito funcional (art. 142, II e III):** opinião desfavorável da crítica e conceito emitido no cumprimento do dever — de novo, valem para injúria/difamação, e não afastam por si a calúnia; use-os para reforçar a **ausência de dolo** (*animus criticandi*), não como excludente autônoma da calúnia.

### 7. Calúnia contra os mortos (art. 138, §2º) — quem tem legitimidade?
É punível caluniar o morto. A **legitimidade para a queixa** é do **cônjuge, ascendente, descendente ou irmão** (art. 100, §4º, CP c/c art. 31 CPP — conferir). Na defesa, checar se **quem ofereceu a queixa** integra esse rol e a **ordem de sucessão** — parte ilegítima → extinção.

---

## Distinções que decidem a defesa

| Crime | Bem jurídico | Núcleo | Exemplo | Consequência defensiva |
|---|---|---|---|---|
| **Calúnia** (138) | Honra **objetiva** | Fato **determinado** definido como **crime**, **falso** | "Ele desviou R$ X da empresa em tal data" (falso) | Atacar fato/crime/falsidade/dolo |
| **Difamação** (139) | Honra **objetiva** | Fato **desonroso** (não precisa ser crime, nem falso) | "Ele foi despedido por preguiça" | Reclassificar p/ 139 (pena menor); verdade **não** exclui (salvo funcionário) |
| **Injúria** (140) | Honra **subjetiva** | **Juízo de valor** ofensivo (não é fato) | "Você é um imbecil" | Reclassificar p/ 140; sem *fato*, não há calúnia |
| **Denunciação caluniosa** (339) | Administração da Justiça | **Dar causa** a investigação/processo contra inocente que se sabe | Registrar B.O. falso para instaurar inquérito | Crime **mais grave** e de **ação pública** — cuidar para não migrar para cá |

> **Chave de distinção calúnia × denunciação caluniosa (art. 339).** Na **calúnia**, imputa-se falsamente crime **a terceiros/ao ofendido** (ofende a honra). Na **denunciação caluniosa**, o agente **provoca a máquina estatal** (investigação, inquérito, processo, ação de improbidade) contra quem sabe inocente — ofende a **administração da Justiça**, é **ação pública** e tem pena **muito maior** (2 a 8 anos + multa). Se a acusação tenta enquadrar como 339 mas **não houve instauração de procedimento oficial**, a defesa sustenta que **não passou de calúnia** (art. 138) — desclassificação **in bonam partem**.

---

## Teses e contra-teses (mapa do confronto)

| Tese da DEFESA | Fundamento | Contra-tese (querelante/MP) |
|---|---|---|
| Fato genérico → é injúria, não calúnia | Ausência de fato determinado (138) | O contexto individualiza o fato criminoso imputado |
| Fato imputado não é crime → difamação | 138 exige fato **definido como crime** | O fato descrito subsome-se a tipo penal |
| Fato é verdadeiro → exceção da verdade | Art. 138, §3º | Incide vedação do §3º (I, II ou III) |
| Ausência de dolo — *animus narrandi/criticandi* | Atipicidade subjetiva | Havia especial fim de ofender (contexto, reiteração, adjetivação) |
| Retratação cabal antes da sentença | Art. 143 | Retratação incompleta/condicional/intempestiva |
| Imunidade parlamentar/advocatícia | Art. 53 CF / 133 CF | Ofensa alheia ao exercício da função; e calúnia não é coberta pelo 142 |
| Decadência (>6 meses) | Art. 38 CPP | Termo inicial é o conhecimento **da autoria**, não do fato |
| Inépcia / falta de justa causa | Arts. 41 e 395 CPP | Queixa descreve o fato e aponta autoria suficiente |

---

## Súmulas e precedentes (sob o Citation Gate — conferir antes de citar)

**Notórios (citar com segurança o dispositivo e a súmula):**
- **Súmula 714/STF** — nos crimes contra a honra de **funcionário público** em razão da função, há **legitimidade concorrente** do ofendido (queixa) e do MP (ação pública condicionada à representação). Relevante para discutir **quem** é parte legítima.
- **CF, art. 5º, IV, IX, V e X** — a colisão liberdade de expressão × honra é a moldura de qualquer defesa por *animus criticandi/narrandi*.

**Verificar OBRIGATORIAMENTE via `jurisprudencia-stj-stf` (não citar número de memória):**
- Precedentes do **STF/STJ** sobre **exigência do dolo específico** (*animus caluniandi*) e sobre a **atipicidade quando presente *animus narrandi/criticandi*** — a tese é sólida, mas **o número do acórdão/tema deve ser conferido**. [NÃO VERIFICADO — confirmar julgado específico]
- Entendimento sobre **crimes contra a honra em redes sociais** — competência, consumação e o **aumento do art. 141, §2º** (Lei 13.964/19). [NÃO VERIFICADO — conferir vigência e leading case]
- Discussão sobre **imunidade do advogado (art. 133 CF) NÃO alcançar a calúnia** — tese majoritária, mas confirmar o precedente atual antes de afirmar em juízo. [NÃO VERIFICADO]
- **ADPF/ADI** sobre crimes contra a honra e liberdade de expressão (imprensa, humor) — checar estado atual. [NÃO VERIFICADO]

> **Regra de ouro do Citation Gate:** ensine a **tese e o dispositivo** (art. 138, §§, art. 143, art. 38 CPP) com segurança; **jamais** invente número de HC/REsp/RE, informativo ou tema. Todo precedente específico entra **apenas** após confirmação em `jurisprudencia-stj-stf`. Prefira omitir a arriscar.

---

## Estrutura sugerida da peça (resposta à acusação / defesa preliminar)

> Modelo de **argumentação** (não de cálculo). Adapte ao rito: na ação privada por crime contra a honra, atenção ao procedimento dos **arts. 519-523 CPP** e à **audiência de reconciliação (art. 520)**. Ao redigir, aplique a skill `redacao-persuasiva-criminal`.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [VARA] CRIMINAL DA COMARCA DE
[COMARCA]

Processo nº [Nº]

[NOME DO QUERELADO], já qualificado, por seu advogado (procuração anexa), nos
autos da queixa-crime que lhe move [QUERELANTE], vem apresentar

RESPOSTA À ACUSAÇÃO (art. 396-A do CPP)
[ou DEFESA PRELIMINAR / RESPOSTA no rito dos arts. 519 e ss. do CPP]

pelas razões de fato e de direito a seguir.

I — SÍNTESE DA IMPUTAÇÃO
[Resumir o que a queixa atribui ao querelado como calunioso.]

II — QUESTÕES PRELIMINARES (admissibilidade)
a) Decadência (art. 38 CPP) — [se a queixa foi oferecida após 6 meses do
   conhecimento da AUTORIA, requerer a extinção da punibilidade, art. 107, IV, CP].
b) Inépcia da inicial (art. 41 CPP) — [a queixa não individualiza o fato
   criminoso imputado como calunioso: sem data, forma e conteúdo determinados,
   impossível o exercício da defesa].
c) Falta de justa causa (art. 395, III, CPP) — [ausência de lastro].
d) Defeito de representação (art. 44 CPP) — [procuração sem poderes especiais
   ou sem menção ao fato].

III — DO MÉRITO — ATIPICIDADE
a) Ausência de fato determinado definido como crime (art. 138) — [demonstrar
   que houve juízo de valor genérico (injúria) ou fato não criminoso
   (difamação), não calúnia].
b) Veracidade do fato / exceção da verdade (art. 138, §3º) — [se aplicável, e
   fora das vedações do §3º].
c) Ausência de dolo — animus caluniandi — [contextualizar: o querelado
   apenas narrou/criticou/defendeu-se (animus narrandi/criticandi/defendendi);
   falta o especial fim de ofender → atipicidade subjetiva].

IV — CAUSAS DE EXCLUSÃO/EXTINÇÃO (se cabíveis)
[Retratação cabal antes da sentença (art. 143); imunidade parlamentar (art. 53
CF) ou advocatícia (art. 133 CF); perdão/renúncia; perempção (art. 60 CPP).]

V — DESCLASSIFICAÇÃO SUBSIDIÁRIA
[Não afastada a tipicidade, requer-se, subsidiariamente, a desclassificação
para difamação (art. 139) ou injúria (art. 140), com as consequências de pena
e prescrição.]

VI — DOS PEDIDOS
a) a rejeição da queixa (art. 395 CPP) OU a absolvição sumária (art. 397 CPP)
   por atipicidade;
b) subsidiariamente, a desclassificação para o art. 139 ou 140 do CP;
c) o reconhecimento da retratação/imunidade/decadência, conforme o caso;
d) a produção das provas arroladas (rol de testemunhas anexo).

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO] — OAB/[UF] nº [Nº]
```

**Campos a preencher:** [VARA], [COMARCA], [Nº], [NOME DO QUERELADO], [QUERELANTE], [LOCAL], [DATA], [ADVOGADO], [UF].

---

## Erros comuns / checklist da defesa

- [ ] Confirmou a **classificação correta** — é mesmo **calúnia** (fato determinado + crime + falso) e não injúria/difamação/denunciação caluniosa?
- [ ] Verificou a **decadência** (6 meses do conhecimento da **autoria**, não do fato — art. 38 CPP)?
- [ ] Conferiu **procuração com poderes especiais** e **narrativa do fato** na queixa (art. 44)?
- [ ] A queixa **individualiza o fato criminoso** imputado (evita inépcia, art. 41)?
- [ ] Mapeou a tese de **atipicidade subjetiva** (*animus narrandi/criticandi/defendendi*) — a mais forte quando há contexto de notícia/crítica/defesa?
- [ ] Avaliou a **exceção da verdade** (art. 138, §3º) **e** suas **três vedações** antes de opô-la?
- [ ] Considerou **retratação cabal** antes da sentença (art. 143) como saída de menor risco?
- [ ] **NÃO** invocou o art. 142 como imunidade para **calúnia** (o rol não a inclui)?
- [ ] Checou **legitimidade** na calúnia contra os mortos (§2º — cônjuge/ascendente/descendente/irmão)?
- [ ] Preparou **desclassificação subsidiária** (139/140) e o impacto na **prescrição**?
- [ ] Passou **toda** súmula/precedente/tese pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Tratar qualquer ofensa como calúnia — sem **fato determinado + crime + falsidade**, não é calúnia.
- Prometer **imunidade do art. 142** para calúnia (ela cobre injúria/difamação, não calúnia).
- Opor **exceção da verdade** ignorando as **vedações do §3º** (pode piorar a situação do cliente).
- Confundir **calúnia** (honra) com **denunciação caluniosa** (administração da Justiça, art. 339, ação pública, pena maior) — ou deixar a acusação migrar sem resistência.
- Perder o prazo **decadencial** como munição, ou não checar **perempção** (art. 60 CPP) na ação privada.
- Citar **número de acórdão de memória** — erro que gera sanção (jurisprudência inventada por IA).

---

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio à elaboração da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado responsável** (EAOAB; CED).
- **Polo:** esta skill é de **DEFESA** (querelado/réu). Se o caso for de **polo acusatório** (queixa do querelante ou atuação do MP em ação pública condicionada — Súmula 714/STF), o **roteador deve conferir o polo** e acionar a skill correlata de acusação; aqui o foco é defender.
- **Ética por polo:** advocacia sob **OAB + Provimento 205/2021** (na eventual publicidade/atuação em redes); **CNMP** para o Ministério Público; **LC 80/94** para a Defensoria. Conflito de interesses (art. 17 EAOAB) checado na triagem.
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de ir à peça.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
