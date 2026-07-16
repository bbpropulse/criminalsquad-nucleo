---
name: defesa-crimes-organizacao-trabalho-197-207
description: >-
  Use ao defender imputações dos crimes contra a organização do trabalho (arts. 197 a 207 do CP —
  Título IV da Parte Especial): atentado à liberdade de trabalho/contrato/associação, paralisação
  com violência, invasão e sabotagem, frustração de direito trabalhista, truck system, retenção de
  documentos, exercício contra decisão administrativa e aliciamento de trabalhadores. O eixo forense
  é definir a COMPETÊNCIA (Justiça… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, organizacao-do-trabalho]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-organizacao-trabalho-197-207"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-organizacao-trabalho-197-207", "defesa crimes", "organizacao trabalho"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa dos Crimes contra a Organização do Trabalho (arts. 197–207, CP)

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

Esta skill orienta a **defesa criminal** nas imputações do **Título IV da Parte Especial do Código Penal** — os crimes contra a organização do trabalho (arts. 197 a 207). São tipos de **baixa incidência**, penas curtas e forte tensão com direitos constitucionais (liberdade de trabalho, livre associação e **direito de greve**). Isso abre três frentes defensivas potentes: **competência**, **atipicidade** e **despenalização**.

> **Lição central:** neste título, **competência vem antes do mérito**. O art. 109, VI, da CF **não** federaliza todo o Título IV — só vai à **Justiça Federal** o crime que ofende a **organização geral do trabalho** ou **direitos coletivos** dos trabalhadores; a lesão a **trabalhador individualmente considerado** é da **Justiça Estadual**. Errar o juízo gera **incompetência absoluta** (nulidade). Defina isso na resposta à acusação, antes de discutir tipicidade.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 197–207 e das majorantes (introduzidas pela **Lei 9.777/1998**). A **maioria** é infração de **menor potencial ofensivo** (Lei 9.099/95) e **prescreve rápido**. Verifique a **recepção constitucional** dos tipos de greve (art. 9º, CF). Todo precedente, súmula ou tese passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes` — na dúvida, **omitir vence inventar**.

## Bem jurídico e panorama

O bem jurídico tutelado é a **organização do trabalho** como valor social (CF, art. 1º, IV; art. 170, VIII) — a liberdade de trabalhar, de contratar, de associar-se e o regular funcionamento das relações laborais. Note a **dupla dimensão**: quando o tipo protege a **coletividade/instituição** (interesse difuso), tende à Justiça Federal; quando protege o **trabalhador concreto**, tende à Estadual. Essa dualidade é a chave de leitura de todo o título.

## Base legal

- **Arts. 197 a 207 do CP** — os tipos penais do Título IV.
- **CF, art. 109, VI** — competência da Justiça Federal para "os crimes contra a organização do trabalho".
- **CF, art. 9º** — direito de greve; **Lei 7.783/1989** (Lei de Greve) — baliza o exercício regular.
- **CF, art. 8º** — liberdade sindical e de associação profissional.
- **Lei 9.099/1995** — Juizado Especial Criminal, transação penal (art. 76) e suspensão condicional do processo (art. 89).
- **CPP, art. 28-A** — Acordo de Não Persecução Penal (ANPP).

## A questão central — competência (Justiça Federal × Estadual)

A orientação consolidada de **STF e STJ** (conferir precedentes atuais via `jurisprudencia-stj-stf`) distingue:

| Ofende... | Competência | Exemplos típicos |
|---|---|---|
| A **organização geral** do trabalho / **direitos coletivos** | **Justiça Federal** (CF, 109, VI) | greve/paralisação com repercussão coletiva; ataque à liberdade sindical de uma categoria |
| **Trabalhador(es) individualmente** considerado(s) | **Justiça Estadual** | frustração de verba trabalhista de empregado certo (art. 203); constrangimento a um trabalhador (art. 197) |

- **Tese defensiva de competência:** se a denúncia descreve lesão a **trabalhador determinado**, sem repercussão sobre a organização geral do trabalho, argua a **incompetência da Justiça Federal** (ou o oposto, conforme o caso) — é **matéria de ordem pública**, arguível a qualquer tempo, e a decisão do juízo incompetente é **nula**.
- **[NÃO VERIFICADO]** teor e vigência da **Súmula 115 do extinto TFR** (organização geral × direitos coletivos) — conferir antes de citar; prefira ancorar no **dispositivo constitucional (art. 109, VI)** e na tese, não no número.
- **Cuidado:** o **art. 149 (redução a condição análoga à de escravo)** **não** está neste título, mas o **STF (Pleno)** firmou que **atrai a competência federal** por ofender a organização do trabalho — ver a fronteira ao final e a skill `defesa-reducao-condicao-analoga-escravo`.

## Mapa dos tipos (arts. 197–207) — conferir penas na redação vigente

| Art. | Conduta (núcleo) | Elementar decisiva | Pena (base) |
|---|---|---|---|
| 197 | Constranger a trabalhar/não trabalhar; abrir/fechar estabelecimento; aderir a paralisação | **violência ou grave ameaça** | detenção 1 mês–1 ano + multa, **além da pena da violência** |
| 198 | Constranger a celebrar contrato / boicotagem violenta | **violência ou grave ameaça** | detenção 1 mês–1 ano + multa, além da violência |
| 199 | Constranger a participar/deixar de participar de sindicato ou associação | **violência ou grave ameaça** | detenção 1 mês–1 ano + multa, além da violência |
| 200 | Participar de paralisação praticando **violência** a pessoa ou coisa | violência; abandono **coletivo** (≥ 3 empregados, p.ú.) | detenção 1 mês–1 ano + multa, além da violência |
| 201 | Paralisação que **interrompe** obra pública ou serviço de interesse coletivo | resultado (interrupção) | detenção 6 meses–2 anos + multa |
| 202 | Invadir/ocupar estabelecimento; **sabotagem** (danificar) | **fim** de impedir/embaraçar o trabalho | reclusão 1–3 anos + multa |
| 203 | Frustrar, por **fraude ou violência**, direito trabalhista; **truck system**; **retenção de documentos** (§1º) | fraude/violência; dolo específico | detenção 1–2 anos + multa, além da violência (majorante §2º) |
| 204 | Frustrar, por fraude/violência, lei de **nacionalização** do trabalho | fraude/violência | detenção 1 mês–1 ano + multa, além da violência |
| 205 | Exercer atividade de que está **impedido por decisão administrativa** | impedimento administrativo vigente | detenção 3 meses–2 anos, **ou** multa |
| 206 | Aliciar trabalhadores, por **fraude**, para **emigração** (exterior) | fraude + fim de levar ao exterior | detenção 1–3 anos + multa |
| 207 | Aliciar trabalhadores para **outra localidade** no território nacional | fim de deslocamento; §1º exige fraude/cobrança/não retorno | detenção 1–3 anos + multa (majorante §2º) |

## Roteiro de defesa por grupo

### Grupo 1 — Liberdade de trabalho, contrato e associação (197–199)
- **Elementar-chave:** o núcleo é **constranger** *mediante violência ou grave ameaça*. **Sem violência/grave ameaça, o fato é atípico** neste título (pode, no máximo, configurar outro delito ou mero ilícito civil/trabalhista).
- **Dolo específico:** exija a demonstração da **finalidade** descrita no tipo (impor/impedir o trabalho, o contrato ou a filiação sindical). Pressão econômica, negociação dura ou advertência **não** equivalem a grave ameaça.
- **Concurso:** a cláusula "**além da pena correspondente à violência**" indica **concurso material** — ataque a prova da própria violência (lesão/vias de fato) de forma autônoma.

### Grupo 2 — Paralisação e greve (200–201) — tensão constitucional
- **Direito de greve é garantia constitucional (art. 9º, CF).** A **mera adesão** a greve/paralisação é **exercício regular de direito — atípica**. O art. 200 só incide com **violência a pessoa ou coisa**; o art. 201, com a **efetiva interrupção** de obra pública/serviço de interesse coletivo.
- **Teses:** (a) atipicidade por **exercício regular do direito de greve** (art. 9º CF + Lei 7.783/89); (b) no art. 200, ausência de violência ou do **caráter coletivo** (parágrafo único exige **concurso de ao menos 3 empregados**); (c) no art. 201, ausência de nexo entre a paralisação e a interrupção do serviço.
- **[NÃO VERIFICADO]** grau de recepção/leitura constitucional atual dos arts. 200–201 — conferir via `jurisprudencia-stj-stf`.

### Grupo 3 — Invasão e sabotagem (202)
- Único tipo do título com **reclusão** (1–3 anos) — **não** é menor potencial ofensivo, mas comporta **suspensão condicional do processo** (pena mínima = 1 ano) e **ANPP**.
- **Elementar:** o **fim especial** de *impedir ou embaraçar o curso normal do trabalho* (ou, na sabotagem, o *fim de danificar*). **Ocupação pacífica** em contexto de reivindicação, sem esse dolo específico, milita pela atipicidade — atacar a prova da **finalidade**.
- **Absorção/concurso:** avaliar dano (art. 163) como possível *post factum* ou concurso, conforme o caso.

### Grupo 4 — Fraude a direitos trabalhistas (203–204)
- **Art. 203 exige fraude OU violência.** O **mero inadimplemento** de verbas trabalhistas é **ilícito trabalhal, não penal** — separe o descumprimento contratual (competência da Justiça do Trabalho) do **ardil fraudulento** exigido pelo tipo. Sem fraude/violência → **atipicidade**.
- **§1º:** o **truck system** (obrigar a consumir em estabelecimento do empregador para gerar dívida) e a **retenção de documentos** para impedir o desligamento aparecem em contextos de trabalho degradante — verifique a **coexistência com o art. 149** (bis in idem × concurso) e a competência.
- **Majorante (§2º):** aumento de 1/6 a 1/3 se a vítima é menor de 18, idosa, gestante, indígena ou com deficiência — conferir a incidência concreta.
- **Art. 204** (nacionalização do trabalho): baixa incidência; exigir fraude/violência e a norma de nacionalização efetivamente frustrada.

### Grupo 5 — Exercício contra decisão administrativa (205)
- **Elementar:** existência de **decisão administrativa vigente, definitiva e regularmente comunicada** que impeça a atividade. **Teses:** decisão inexistente, não notificada, suspensa por recurso, ou já exaurida; ausência de dolo (desconhecimento legítimo do impedimento).
- Distinguir do **exercício ilegal de profissão** (art. 47 da LCP) — a moldura muda.

### Grupo 6 — Aliciamento (206–207)
- **Art. 206** (emigração/exterior) exige **fraude**; **art. 207 caput** (deslocamento interno) pune o **aliciamento** com fim de levar o trabalhador a outra localidade — o **§1º** exige **fraude, cobrança do trabalhador ou não assegurar o retorno**.
- **Teses:** (a) **livre adesão** do trabalhador, com transparência e condições regulares → atipicidade; (b) ausência do **fim específico** de deslocamento; (c) no §1º, prova de que houve **retorno assegurado** e ausência de cobrança/fraude.
- Contexto frequente: recrutamento rural ("**gato**"); avaliar concurso com art. 149 e a competência.

## Teses defensivas transversais

1. **Incompetência do juízo** (Federal × Estadual) — arguir na resposta à acusação; nulidade absoluta se equivocada.
2. **Atipicidade por ausência de elementar** — falta de violência/grave ameaça (197–200), de fraude (203, 206, 207 §1º) ou do **dolo específico**.
3. **Exercício regular de direito** (greve, art. 9º CF; livre associação, art. 8º) — exclui a ilicitude/tipicidade.
4. **Princípio da intervenção mínima / subsidiariedade** — o Direito Penal não é o foro de conflitos meramente trabalhistas ou sindicais; muitos fatos se resolvem na Justiça do Trabalho.
5. **Prescrição** — penas curtas prescrevem rápido; ver seção própria e a `calculadora-prescricao`.
6. **Nulidade da prova** — autos de infração do trabalho e relatórios administrativos **não** têm, por si, força de prova penal; exigir contraditório e standard penal.

## Contra-teses da acusação — antecipar

- **Repercussão coletiva** para firmar a competência federal (organização geral do trabalho).
- **Violência/fraude comprovadas** por prova testemunhal e documental (autos de fiscalização, perícias).
- **Dolo específico** inferido do contexto (retenção de documentos, servidão por dívida, coação sistemática).
- **Concurso com o art. 149** em cenários de trabalho degradante — a defesa deve delimitar o objeto e evitar dupla punição pelo mesmo fato (`verificacao-citacoes` para o tratamento atual).

## Despenalização e prescrição

- **Menor potencial ofensivo (Lei 9.099/95):** arts. 197, 198, 199, 200, 201, 203, 204 e 205 têm **pena máxima ≤ 2 anos** → **JECrim**, cabendo **transação penal** (skill `transacao-penal`) e **composição civil**.
- **Suspensão condicional do processo (art. 89):** cabível onde a **pena mínima ≤ 1 ano** — inclui **arts. 202, 206 e 207** (skill `suspensao-condicional-processo`).
- **ANPP (art. 28-A, CPP):** cabível quando a **pena mínima < 4 anos** e ausente violência/grave ameaça na conduta concreta — potencialmente **todos** os tipos do título (skill `anpp`). Atenção: nos tipos que exigem violência como elementar, a via do ANPP pode ser questionada — argumentar caso a caso.
- **Prescrição:** a maioria (máx. 1–2 anos) prescreve em **4 anos** (CP, art. 109, V); os de máx. 3 anos (202, 206, 207) em **8 anos** (art. 109, IV). Investigações trabalhistas costumam ser lentas — **sempre calcule a prescrição da pretensão punitiva** (inclusive **virtual/em perspectiva**) na `calculadora-prescricao`. **Não** reproduza cálculos de memória: aponte para a calculadora.

## Fronteira com o art. 149 (trabalho escravo)

O **art. 149** (redução a condição análoga à de escravo) e o **art. 149-A** (tráfico de pessoas) estão no **Título I** (crimes contra a pessoa), **não** neste título — mas o STF os trata como **crimes contra a organização do trabalho** para fins de **competência federal**. Quando a imputação mistura **art. 149** e **arts. 203/207**, delimite o objeto, cheque **bis in idem** e a competência, e use a skill **`defesa-reducao-condicao-analoga-escravo`** em conjunto.

## Súmulas e precedentes (sob Citation Gate — conferir via `jurisprudencia-stj-stf`)

- **CF, art. 109, VI** (dispositivo) — âncora firme da competência federal.
- **[NÃO VERIFICADO]** Súmula 115 do extinto TFR (organização geral × direitos coletivos) — conferir teor/vigência.
- **[NÃO VERIFICADO]** precedentes do STF/STJ que fixam competência **estadual** para lesão a trabalhador individual (numerosos conflitos de competência no STJ) — buscar o julgado atual antes de citar.
- **[NÃO VERIFICADO]** STF (Pleno) firmando competência federal para o **art. 149** — prefira a **tese** ao número do acórdão.

> **Regra de ouro:** nenhum número de acórdão ou súmula entra na peça sem passar pelo gate. Prefira **tese + dispositivo legal** a citar julgado incerto.

## Erros comuns / checklist

- [ ] **Competência** definida (Federal × Estadual) segundo lesão coletiva × individual — **antes** do mérito?
- [ ] Verificado se a conduta traz a **elementar** exigida (violência/grave ameaça em 197–200; fraude em 203/206/207 §1º)?
- [ ] Afastada a criminalização do **exercício regular do direito de greve** (art. 9º CF) quando cabível?
- [ ] Separado o **ilícito trabalhista** (Justiça do Trabalho) do **tipo penal** — sobretudo no art. 203?
- [ ] Explorado o **dolo específico** de cada tipo (fim de impedir/embaraçar; fim de deslocamento; etc.)?
- [ ] Testados os **benefícios**: transação (`transacao-penal`), suspensão (`suspensao-condicional-processo`), **ANPP** (`anpp`)?
- [ ] **Prescrição** calculada na `calculadora-prescricao` (inclusive virtual), dada a lentidão das apurações?
- [ ] Autos de infração/relatórios de fiscalização tratados como **indício**, não prova penal plena?
- [ ] Fronteira com o **art. 149** avaliada (bis in idem / concurso) via `defesa-reducao-condicao-analoga-escravo`?
- [ ] Todas as súmulas/precedentes conferidos por `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Discutir mérito sem antes fixar a **competência** — arrisca nulidade e retrabalho.
- Tratar **inadimplemento** de verba trabalhista como art. 203 sem **fraude/violência**.
- Criminalizar **greve pacífica** (adesão sem violência é atípica).
- Reproduzir **cálculo de prescrição** de memória — sempre a `calculadora-prescricao`.
- Citar **Súmula 115 do TFR** ou acórdão de competência sem conferir teor e vigência.
- Ignorar os **despenalizadores** por assumir, sem checar a pena, que "não cabe".

## Conformidade

- **Revisão humana obrigatória.** Este material é **rascunho técnico** de apoio à tese — a estratégia, a peça e as impugnações são de responsabilidade do **advogado** (CED/EAOAB, art. 2º). Não substitui a leitura dos autos concretos.
- **Ética por polo:** esta skill é orientada à **defesa**. Em atuação pela **acusação** (MP), observe os deveres de objetividade e o CNMP; as contra-teses aqui servem para **antecipar** o argumento adverso, não para instruir a acusação.
- **Citation Gate:** nenhuma súmula, tese ou precedente citado de memória — tudo por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
