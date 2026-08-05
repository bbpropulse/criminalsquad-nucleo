---
name: diagnostico-vicios-nulidades-inquerito
description: >-
  Use para varrer o inquérito policial (IP) inteiro em busca de vícios, irregularidades e
  ilegalidades da fase investigativa, classificando cada achado como mera irregularidade, vício
  sanável ou nulidade/ilicitude contaminante e mapeando o efeito de cada um (o que é atacável e por
  qual via). É o crivo defensivo TRANSVERSAL que precede as impugnações específicas. Gatilhos:
  vícios do inquérito, nulidades da investigação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-diagnostico-vicios-nulidades-inquerito"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["diagnostico-vicios-nulidades-inquerito", "diagnostico vicios", "nulidades inquerito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Diagnóstico de Vícios e Nulidades da Investigação (CPP arts. 157, 226, 240-250, 306; CF art. 5º, XI e LVI; Lei 9.296/96)

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

Esta skill orienta a **leitura crítica do inquérito policial** para localizar, isolar e classificar todos os vícios da fase investigativa. Não redige uma peça única: ela produz um **mapa diagnóstico** — a varredura transversal que aponta *o que* atacar, *como classificar* (mera irregularidade × vício sanável × nulidade/ilicitude contaminante) e *por qual via* (quando cabe simples desentranhamento, quando cabe HC/trancamento, quando é matéria de defesa preliminar ou de mérito). É o passo anterior às impugnações especializadas de cada prova.

> **Lição central:** nem todo defeito do IP anula o processo. O erro do iniciante é tratar toda irregularidade como nulidade — e o erro oposto, mais grave, é ignorar uma **ilicitude probatória** achando que "é só do inquérito". Classifique cada achado por **natureza** (irregularidade / vício sanável / ilicitude ou nulidade) e por **efeito** (desentranha? contamina o que derivou? afeta a ação penal?). O IP é peça informativa; seus vícios, em regra, **não contaminam a ação penal** — mas a **prova ilícita** colhida nele contamina (art. 157 CPP; art. 5º, LVI, CF), e vícios que atinjam **garantia constitucional** (defesa, liberdade, domicílio, sigilo) transcendem o inquérito.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 157, 158-A a 158-F (cadeia de custódia), 226 e 306 do CPP — muitos foram alterados/incluídos pela **Lei 13.964/2019 (Pacote Anticrime)**. Confira também o estágio atual do entendimento do STF/STJ sobre reconhecimento pessoal (leitura do art. 226 como exigência, não mera recomendação) e sobre a natureza da prova ilícita, via a skill `jurisprudencia-stj-stf`, **antes** de fundamentar qualquer peça. Súmula, tema e número de acórdão só entram na peça depois de conferidos.

## Natureza do inquérito e a régua da contaminação

O IP é **procedimento administrativo, inquisitivo e informativo**, destinado a apurar a autoria e a materialidade e a subsidiar a *opinio delicti* (arts. 4º e 12 do CPP). Duas consequências práticas orientam todo o diagnóstico:

1. **Vício meramente formal do IP não anula a ação penal.** Irregularidades procedimentais (ordem de diligências, formalidade de portaria, prazo) são, em regra, **sanáveis ou irrelevantes** para a validade do processo — o que vale é a prova produzida sob o contraditório judicial. A jurisprudência é firme em que **nulidades do inquérito não contaminam a ação penal** quando dele independem os elementos que a sustentam.
2. **Prova ILÍCITA colhida no IP contamina.** Se a origem do elemento probatório viola direito fundamental (domicílio, sigilo, integridade, defesa), incide o art. 157 do CPP: a prova é **inadmissível**, deve ser **desentranhada**, e, pela **teoria dos frutos da árvore envenenada** (art. 157, §1º), contamina as provas **derivadas** — salvo **fonte independente** ou **descoberta inevitável** (exceções do próprio §§1º e 2º). Aqui o vício **transcende** o inquérito e projeta-se sobre a ação penal.

➡️ Regra de ouro do diagnóstico: para cada achado, pergunte **"isto é forma ou é garantia?"**. Forma → provavelmente irregularidade/sanável. Garantia constitucional violada → provavelmente ilicitude/nulidade com efeito contaminante.

## Base legal (âncoras)

- **Art. 157 do CPP** — inadmissibilidade e desentranhamento da **prova ilícita**; **§1º** (prova derivada / frutos da árvore envenenada, com as exceções de fonte independente e descoberta inevitável); **§3º** (inutilização da prova declarada ilícita).
- **Art. 226 do CPP** — procedimento do **reconhecimento de pessoas** (colocação ao lado de semelhantes, reconhecimento sem influência, termo). Leitura contemporânea: **requisito**, não simples recomendação.
- **Arts. 240 a 250 do CPP** — **busca e apreensão** (domiciliar e pessoal), requisitos e limites do mandado.
- **Art. 306 do CPP** — comunicação da prisão, **nota de culpa** e entrega ao preso; envio do auto de prisão em flagrante e da nota em 24h.
- **CF, art. 5º, XI** — **inviolabilidade do domicílio** (entrada só com consentimento, flagrante, desastre/socorro ou, de dia, por ordem judicial).
- **CF, art. 5º, LVI** — **inadmissibilidade das provas obtidas por meios ilícitos**.
- **CF, art. 5º, LXII a LXIV** — comunicação da prisão, assistência da família e de advogado, identificação dos responsáveis, direito ao silêncio.
- **Lei 9.296/96** — **interceptação telefônica** (só por ordem judicial, para investigação criminal/instrução, com requisitos e prazo).
- **Arts. 158-A a 158-F do CPP** (Lei 13.964/19) — **cadeia de custódia** da prova (para o exame de quebra, acionar a skill de impugnação de cadeia de custódia).

## Roteiro de varredura — o checklist de irregularidades do IP

Percorra o IP inteiro (portaria, autos de prisão, oitivas, laudos, mandados, autuações, apensos) e, para cada item abaixo, registre **presença/ausência do vício**, o **dispositivo violado** e a **classificação de efeito**.

### 1. Prisão em flagrante e nota de culpa (art. 306; CF art. 5º, LXII-LXIV)
- Comunicação **imediata** ao juiz, ao MP e à família/pessoa indicada? Falta ou atraso relevante?
- **Nota de culpa** entregue ao preso em **24h**, com o motivo da prisão e os responsáveis (art. 306, §2º)?
- Direito ao **silêncio** e à **assistência de advogado** informados? Ausência da advertência do silêncio pode viciar o interrogatório/oitiva.
- Auto de prisão em flagrante lavrado com as formalidades (condução, testemunhas, assinatura)?

### 2. Interrogatório / oitiva do investigado (CF art. 5º, LXIII; CPP arts. 6º, V, e 185 ss. por analogia)
- Foi advertido do **direito ao silêncio** e de que não é obrigado a produzir prova contra si (nemo tenetur)?
- Oitiva com **coação, promessa, ameaça** ou em situação de vulnerabilidade (privação de sono, sem intérprete, sem curador ao menor/incapaz)?
- Investigado quis advogado e foi **negado/impedido**? (violação de garantia — vício grave)
- "Conversa informal", depoimento colhido sem termo, confissão extrajudicial obtida à margem das formalidades?

### 3. Reconhecimento de pessoas e de coisas (art. 226)
- Seguiu-se o **procedimento do art. 226**: descrição prévia da pessoa; colocação **ao lado de outras semelhantes**; reconhecimento **sem sugestão/indução**; **termo** subscrito?
- Houve **reconhecimento por fotografia isolada** (uma única foto/"álbum" dirigido), reconhecimento **induzido** pela autoridade, ou vítima que já "sabia" quem apontar por influência externa?
- O reconhecimento é a **única** base da imputação ou há prova independente? (define o impacto)

### 4. Busca e apreensão (CF art. 5º, XI; CPP arts. 240-250)
- **Busca domiciliar:** havia **mandado** judicial específico (endereço, alvo, finalidade)? Se sem mandado, houve **flagrante** válido, **consentimento** livre e comprovado do morador, ou **socorro/desastre**?
- **Entrada noturna** em domicílio sem consentimento e sem as hipóteses do inciso XI?
- **"Fundadas razões"** para ingresso em flagrante permanente foram **prévias e demonstradas**, ou construídas *a posteriori* para justificar a entrada?
- **Busca pessoal:** havia **fundada suspeita** concreta e individualizada, ou revista genérica/discriminatória sem lastro?
- Mandado **genérico/coletivo** (endereços indeterminados, "de arrasto") ou cumprido **além dos limites** do que autorizava?

### 5. Interceptação telefônica, telemática e quebra de sigilo (Lei 9.296/96; CF art. 5º, XII)
- Havia **ordem judicial prévia** e **fundamentada** para interceptação/quebra de sigilo telefônico, bancário, fiscal ou de dados?
- **Prazo** e **prorrogações** observados e fundamentados? Interceptação usada para crime diverso sem os requisitos (serendipidade dentro dos limites)?
- Acesso a **dados de celular/aplicativos** sem autorização judicial? Espelhamento de conversas (ex.: mensageria) sem ordem?
- (Para a impugnação técnica detalhada, acionar a skill específica de interceptação/sigilo.)

### 6. Perícias, laudos e cadeia de custódia (CPP arts. 158-A a 158-F, 6º, VII)
- **Cadeia de custódia** documentada (coleta, acondicionamento, lacre, rastreabilidade)? Rupturas? (aprofundar na skill de cadeia de custódia)
- Exame de corpo de delito nos crimes que deixam vestígio (art. 158) — ausência sem justificativa?
- Laudo assinado por perito, com metodologia; ou "laudo" genérico/ausente?

### 7. Indiciamento, justa causa e prazo do IP (arts. 5º, 10, 46 e correlatos)
- **Indiciamento** lastreado em elementos mínimos de autoria e materialidade, ou ato arbitrário/sem justa causa (indiciamento como constrangimento)?
- **Justa causa** para a investigação e para eventual denúncia — há lastro probatório mínimo, ou investigação genérica/fishing?
- **Prazo do IP** excedido (réu preso × solto): o excesso, por si, é **irregularidade** (não anula a ação), mas com réu **preso** pode configurar **constrangimento ilegal** sanável por relaxamento/HC.
- Investigação conduzida por **autoridade incompetente** ou por órgão sem atribuição?

### 8. Formalidades gerais e regularidade documental
- Portaria/instauração regular; autos numerados; apensos identificados; ausência de folhas/peças.
- Traduções, intérprete (art. 193) e curador quando exigíveis.
- Vícios meramente formais (numeração, ordem de diligências): tende a **mera irregularidade**.

## A classificação — as três categorias e seus efeitos

Para **cada achado** do checklist, enquadre em uma categoria e registre o efeito. Esta é a entrega central da skill.

| Categoria | O que é | Efeito típico | Via de ataque |
|---|---|---|---|
| **Mera irregularidade** | Defeito formal que **não atinge garantia** nem a fiabilidade do elemento (ex.: ordem de diligências, numeração, prazo do IP com réu solto) | **Nenhum** sobre a ação penal; convalida-se | Em regra, nada a fazer; registrar para contexto/credibilidade |
| **Vício sanável** | Defeito que **pode ser corrigido/renovado** ou que gera constrangimento pontual (ex.: excesso de prazo com réu preso; falta de nota de culpa) | Relaxamento/saneamento; **não** contamina prova lícita | Relaxamento de prisão, HC pontual, requerimento de sanação |
| **Nulidade / ilicitude contaminante** | Violação de **garantia constitucional/legal na produção da prova** (busca sem mandado, oitiva sob coação, reconhecimento induzido fora do art. 226, interceptação sem ordem) | **Inadmissibilidade** + **desentranhamento** (art. 157) + **contaminação do derivado** (§1º) | Desentranhamento, HC/trancamento se remove a justa causa, tese de nulidade em resposta/mérito |

> **Efeito sobre a AÇÃO PENAL vs. sobre a PROVA.** Distinga sempre: (a) vício que atinge **uma prova específica** → desentranhamento daquela prova (e do que dela derivou); (b) vício que **remove a justa causa** de toda a ação (a acusação se sustentava **exclusivamente** na prova ilícita) → cabimento de **trancamento** por HC; (c) vício meramente do procedimento informativo → **não** anula a ação penal, que subsiste pela prova judicial independente.

> **Frutos da árvore envenenada e as duas exceções (art. 157, §§1º-2º).** Ao apontar contaminação, **antecipe a contra-tese acusatória**: o MP invocará **fonte independente** (o elemento seria obtido por via autônoma já existente) ou **descoberta inevitável** (seria descoberto no curso normal). A tese defensiva precisa **fechar essas portas** — demonstrar que a única fonte real era a prova ilícita e que não havia linha investigativa independente já deflagrada.

## Teses defensivas e contra-teses (por vício)

- **Reconhecimento fora do art. 226** → *Tese:* o procedimento do art. 226 é **exigência**, não recomendação; reconhecimento induzido/por foto isolada é **imprestável**, sobretudo como base única da condenação; contamina reconhecimentos posteriores "confirmatórios". *Contra-tese (acusação):* o art. 226 seria mera recomendação e haveria outros elementos — a defesa rebate mostrando que a prova restante deriva do próprio reconhecimento viciado. **Confira o estado atual do entendimento do STJ/STF via `jurisprudencia-stj-stf`.** [NÃO VERIFICADO — não citar número de HC/tema sem conferência]
- **Busca domiciliar sem mandado/consentimento** → *Tese:* violação do art. 5º, XI, CF; "fundadas razões" para flagrante permanente devem ser **prévias e demonstráveis**, não construídas depois; prova apreendida é ilícita (art. 157) e contamina o derivado. *Contra-tese:* consentimento do morador / flagrante — a defesa ataca a **voluntariedade** do consentimento e a **anterioridade** das fundadas razões.
- **Busca pessoal sem fundada suspeita** → *Tese:* revista sem suspeita **concreta e individualizada** é arbitrária; achado é ilícito. *Contra-tese:* "atitude suspeita"/nervosismo — a defesa mostra a insuficiência de fundamento genérico.
- **Oitiva sem advertência do silêncio / sob coação** → *Tese:* violação do nemo tenetur (art. 5º, LXIII); confissão/depoimento é ilícito e não pode lastrear a imputação. *Contra-tese:* confissão espontânea — atacar a espontaneidade e a ausência de formalidades.
- **Interceptação/quebra de sigilo sem ordem ou sem fundamentação** → *Tese:* nulidade por ausência de reserva de jurisdição (Lei 9.296/96; art. 5º, XII); prova e derivadas inadmissíveis. *Contra-tese:* autorização posterior/urgência — atacar a inexistência de ordem prévia idônea.
- **Excesso de prazo do IP com réu preso** → *Tese:* constrangimento ilegal; **relaxamento**. *Nota:* com réu solto, é **irregularidade** que não anula a ação.
- **Falta de nota de culpa (art. 306)** → *Tese:* ilegalidade da custódia; relaxamento/saneamento — mas, em regra, vício **sanável** que não contamina a prova lícita já produzida.

## Da varredura à peça — como usar o diagnóstico

O diagnóstico não é um fim; ele **direciona** a impugnação certa. Fluxo:

```
1) Varra o IP com o checklist (itens 1–8) → liste todos os achados.
2) Classifique CADA achado (irregularidade / sanável / ilícito-contaminante) e o efeito.
3) Para cada ilicitude probatória, escolha a via:
   ├── prova isolada e não essencial → desentranhamento (art. 157)
   ├── prova ÚNICA que sustenta a acusação → trancamento por HC (falta de justa causa)
   ├── prisão viciada (nota de culpa / excesso de prazo com preso) → relaxamento / HC
   └── vício que só repercute no mérito → tese em resposta à acusação / memoriais
4) Encaminhe cada frente à skill especializada:
   ├── reconhecimento/busca/oitiva  → tese de prova ilícita + HC/desentranhamento
   ├── interceptação e sigilo        → skill de impugnação de interceptação/sigilo
   └── cadeia de custódia            → skill de impugnação de cadeia de custódia
5) Passe TODA citação (súmula/tema/acórdão) pela skill `jurisprudencia-stj-stf`.
```

> Esta skill é **transversal**: cada tipo de prova (cadeia de custódia, interceptação, embriaguez, infiltração) tem sua impugnação específica. Aqui você faz o **mapa** e decide **qual** delas acionar — não substitua a impugnação técnica de cada prova.

## Modelo de entrega — matriz de diagnóstico (uso interno da defesa)

```
DIAGNÓSTICO DE VÍCIOS DO IP nº [Nº] — Investigado: [NOME]

| # | Achado (fl./ev.)           | Dispositivo violado        | Classificação            | Efeito / Via de ataque                         |
|---|----------------------------|----------------------------|--------------------------|------------------------------------------------|
| 1 | Busca domiciliar s/ mandado (fl. __) | CF 5º XI; CPP 240-245 | Ilícita — contaminante   | Desentranhar + contamina apreensão derivada    |
| 2 | Reconhecimento por foto isolada (fl. __) | CPP 226              | Ilícito — nulo           | Imprestável; base única? → tese central        |
| 3 | Nota de culpa não entregue (fl. __)     | CPP 306, §2º         | Sanável                  | Relaxamento; não contamina prova lícita        |
| 4 | Prazo do IP excedido (réu solto)        | CPP 10               | Mera irregularidade      | Sem efeito sobre a ação penal                  |
| 5 | Oitiva sem advertência do silêncio (fl. __) | CF 5º LXIII        | Ilícita                  | Confissão inadmissível; atacar derivadas       |

SÍNTESE: a acusação se sustenta [exclusivamente / também] na(s) prova(s) ilícita(s) __.
→ Via principal: [trancamento por HC / desentranhamento / relaxamento / tese de mérito].
→ Provas derivadas a contaminar: __ (art. 157, §1º).
→ Contra-teses a fechar: fonte independente / descoberta inevitável (art. 157, §§1º-2º).
```

**Campos a preencher:** [Nº do IP], [NOME], folhas/eventos de cada achado, dispositivos, e a síntese da via principal.

## Erros comuns e anti-padrões

- Tratar **toda irregularidade** como nulidade — e desperdiçar credibilidade com pedidos inviáveis (o excesso de prazo com réu solto **não** anula a ação).
- **Não distinguir** vício da prova (desentranha aquela prova) de vício que **remove a justa causa** (permite trancar a ação toda).
- Alegar contaminação sem **fechar** as exceções do art. 157 (fonte independente / descoberta inevitável) — a acusação as invocará.
- Confundir **nulidade do IP** com nulidade do processo: a jurisprudência afirma que vícios do inquérito, em regra, **não contaminam** a ação penal quando os elementos que a sustentam dele independem.
- Impugnar reconhecimento/busca "no atacado" sem apontar **o dispositivo** violado e **qual prova** deriva do vício.
- Citar **número de HC/REsp/tema** de memória para reforçar a tese. **Todo precedente passa pela skill `jurisprudencia-stj-stf`.** Melhor sustentar a **tese e o dispositivo** do que arriscar um acórdão inexistente.
- Fazer o diagnóstico e **não escolher a via** (HC × desentranhamento × mérito) — o mapa existe para decidir a rota.

## Checklist final do diagnóstico

- [ ] IP percorrido por inteiro (prisão, oitivas, reconhecimento, busca, perícias, sigilo, indiciamento, formalidades)?
- [ ] Cada achado com **dispositivo violado** identificado?
- [ ] Cada achado **classificado** (irregularidade / sanável / ilícito-contaminante) e com **efeito** anotado?
- [ ] Distinguido o que atinge **uma prova** do que atinge **a justa causa** da ação?
- [ ] Mapeadas as **provas derivadas** de cada ilicitude (art. 157, §1º)?
- [ ] Antecipadas as **contra-teses** de fonte independente / descoberta inevitável?
- [ ] Definida a **via de ataque** de cada frente (HC/trancamento, desentranhamento, relaxamento, mérito)?
- [ ] Encaminhadas as frentes às skills especializadas (interceptação, cadeia de custódia)?
- [ ] **Vigência** dos arts. 157, 158-A ss., 226 e 306 conferida (Pacote Anticrime) e **precedentes verificados** via `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes de peticionar?

## Nota de conformidade

Esta skill produz **rascunho técnico de análise** — hipótese de trabalho a ser confirmada. A responsabilidade pela estratégia e pelas impugnações é sempre do **advogado** (EAOAB e Código de Ética e Disciplina da OAB; Provimento 205/2021 na advocacia; observadas as regras próprias do CNMP no Ministério Público e da LC 80/94 na Defensoria, conforme o polo de atuação). **Nenhuma súmula, tese ou acórdão** é citado de memória: todo precedente passa **obrigatoriamente** pela verificação de citações via a skill `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Na dúvida, **omitir vence inventar**: prefira sustentar o **dispositivo legal** e a **tese** a arriscar um número de julgado.
