---
name: defesa-descumprimento-protetiva-24a
description: >-
  Use ao defender o acusado do crime de descumprimento de medida protetiva de urgência da Lei Maria
  da Penha (Lei 11.340/2006, art. 24-A, incluído pela Lei 13.641/2018): teses de ausência de
  intimação pessoal válida, protetiva expirada/revogada, atipicidade por conduta que não viola o
  núcleo da ordem, dúvida sobre a autoria do contato, non bis in idem com o crime-fim; competência
  do JVDFM e vedação de fiança pela autoridade… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, violencia-domestica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-descumprimento-protetiva-24a"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-descumprimento-protetiva-24a", "defesa descumprimento", "descumprimento protetiva"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa no crime de descumprimento de protetiva (art. 24-A da Lei 11.340/2006)

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

Esta skill orienta a **defesa de quem é acusado do crime autônomo do art. 24-A** da Lei Maria da Penha — descumprir decisão que defere medidas protetivas de urgência. Aqui não se discute se a protetiva **deveria** vigorar (isso mora na skill `revogacao-flexibilizacao-protetivas`), nem se pede/defere a medida pela vítima (skill `medidas-protetivas-urgencia`): defende-se de uma **nova imputação penal**, com tipo, elementares e dolo próprios. Quando o descumprimento também gera **prisão preventiva** (art. 313, III, CPP), o ataque à prisão está em `liberdade-provisoria-relaxamento`; quando o mesmo fato configura outro crime (ameaça, lesão, violação de domicílio), a fronteira do concurso se resolve aqui, na frente do *non bis in idem*.

> **Lição central:** o art. 24-A é um **tipo de desobediência qualificada** que só se aperfeiçoa com **ciência inequívoca** da protetiva — e ciência inequívoca é fato **documentado**, não presumido. A defesa mais rentável quase nunca discute o mérito da agressão original: ela mira a **intimação pessoal válida**, a **vigência da ordem no dia do fato** e o **dolo específico de descumprir**. Sem qualquer desses três pilares, a conduta é atípica — e a atipicidade absolve, não apenas atenua.

> **Advertência de método:** defender do 24-A **nunca** é orientar o cliente a "acertar as contas" com a vítima. O consentimento dela **não descriminaliza** (fichas VDO-A10/A11 da BP `defesa-violencia-domestica`); a defesa opera **só nos autos**. E a acusação de 24-A convive com o risco de **preventiva** — cada palavra da peça é lida também sob essa ótica.

## O instituto e a base legal

O art. 24-A foi **inserido pela Lei 13.641/2018** para criminalizar, de forma autônoma, o descumprimento de protetivas — antes tratado como mera desobediência (art. 330 do CP), com a controvérsia de subsidiariedade que a jurisprudência resolvia contra a tipicidade. O tipo tem elementares e regras processuais próprias:

| Dispositivo | O que estabelece / o que a defesa extrai |
|---|---|
| **Art. 24-A, *caput*** | Descumprir decisão judicial que **defere** medidas protetivas de urgência (arts. 22, 23 e 24). Elementar central: existe **decisão** deferida e o agente a **descumpre** — sem decisão vigente e cientificada, não há crime |
| **Pena** (*caput*) | Detenção — **confira a redação e o quantum vigentes via `lei-e-sumula`** (houve alteração legislativa posterior; não afirme a pena de memória) |
| **Art. 24-A, §1º** | A configuração do crime **independe da competência civil ou criminal** do juiz que deferiu a medida — fecha a tese de "incompetência do juízo da protetiva" como excludente de tipicidade |
| **Art. 24-A, §2º** | **Vedação de arbitramento de fiança pela autoridade policial** — só o **juiz** concede fiança. Delegado que arbitra fiança pratica ato nulo; a soltura, se cabível, é judicial |
| **Art. 24-A, §3º** | O disposto **não exclui** a aplicação de outras sanções cabíveis — base textual para o debate de **concurso × bis in idem** com o crime-fim |
| **Art. 13 / art. 14** | Competência do **Juizado de Violência Doméstica e Familiar contra a Mulher (JVDFM)**; onde não houver, a vara criminal com essa competência (art. 33) |
| **Lei 9.099/95 — art. 41 da LMP** | **Não se aplica** o rito dos Juizados Especiais (Súmula 536/STJ) — logo, sem transação penal e sem suspensão condicional do processo pela via da 9.099. ANPP é debate à parte (ver `anpp`) |
| **CPP, art. 798, §1º** | Prazos penais são **corridos**: exclui-se o dia do começo, inclui-se o do vencimento — vale para resposta à acusação e recursos |

> **Cautela de vigência:** a pena do *caput* e o entorno legislativo da LMP foram alterados por leis posteriores (inclusive no pacote de 2024 sobre violência doméstica). **Confira a redação vigente do art. 24-A e de seus parágrafos via agente `lei-e-sumula` antes de citar** — e nunca afirme quantum de pena de memória.

## Mapa — do fato imputado à providência defensiva

| O que consta da denúncia | Ponto de ataque | Onde aprofundar |
|---|---|---|
| Protetiva deferida, mas **sem prova de intimação pessoal** do acusado nos autos | Atipicidade por **ausência de ciência inequívoca** — elementar não provada | Frente 1 (abaixo) |
| Contato/aproximação ocorrido **após o prazo** fixado na decisão, ou após revogação | Atipicidade — **inexistência de ordem vigente** no dia do fato | Frente 2 |
| Conduta que **não viola o núcleo** da ordem (ex.: cruzamento fortuito; contato imposto pela vítima; mensagem sobre os filhos por canal tolerado) | Atipicidade por ausência de **dolo de descumprir** / conduta fora do comando | Frente 3 |
| Contato atribuído ao acusado **sem prova segura de autoria** (mensagem de terceiro, número não vinculado) | **Dúvida sobre a autoria** — *in dubio pro reo* | Frente 4 |
| Mesmo fato imputado como 24-A **e** como ameaça/lesão/violação de domicílio | **Non bis in idem** ou disputa da tese de concurso | Frente 5 |
| Fiança arbitrada pelo **delegado** | Nulidade do ato (art. 24-A, §2º) — pleito de correção ao juízo | Frente 6 |
| Descumprimento gerou **prisão preventiva** (art. 313, III) | Ataque à **prisão** (não ao tipo) | skill `liberdade-provisoria-relaxamento` |

O entregável típico é a **resposta à acusação** (CPP, art. 396-A) com absolvição sumária (art. 397) quando o vício for de plano; não sendo, os mesmos blocos guiam a instrução e desembocam nos **memoriais** (art. 403, §3º).

## Frente 1 — ciência inequívoca: a elementar que mais absolve

O 24-A pune quem descumpre ordem de que **sabia**. A ciência inequívoca exige, em regra, **intimação pessoal** do acusado quanto ao teor e à vigência da protetiva — audiência de justificação, mandado cumprido, termo assinado. Sem esse lastro nos autos, falta elementar do tipo.

- **Confira o que os autos realmente provam:** existe mandado de intimação **cumprido**? Termo assinado? Certidão do oficial de que **o próprio acusado** foi cientificado (não a mãe, o vizinho, o WhatsApp de terceiro)?
- **Intimação ficta não basta para a ciência do crime:** presunção de conhecimento por edital, por publicação ou por intimação da defesa técnica não equivale à **ciência pessoal inequívoca** exigida para o dolo do 24-A — pesquise o entendimento atual do STJ sobre a exigência de intimação pessoal via agente `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**.
- **Ciência do teor exato:** o acusado sabia **quais** medidas e **com que parâmetros** (metragem, canais vedados)? Ordem genérica ou intimação que não reproduz o comando enfraquece a imputação de descumprimento **doloso** daquele parâmetro específico.
- **Data da ciência × data do fato:** o contato imputado é **anterior** à intimação? Então, no momento do ato, não havia ciência — atipicidade.

## Frente 2 — vigência da ordem no dia do fato

Descumprir exige **ordem em vigor**. A protetiva pode ter **expirado** (se a decisão fixou prazo), sido **revogada** ou **flexibilizada** — e o fato imputado pode cair fora dessa janela.

- **Levante o histórico do expediente apartado da MPU:** houve decisão de revogação, flexibilização ou reavaliação **antes** do fato? Contato ocorrido após revogação é atípico.
- **Prazo fixado e vencido:** se a decisão original marcou vigência determinada e não houve prorrogação até o fato, não há ordem a descumprir. Cuidado: em regra a protetiva **vigora enquanto persistir o risco** (art. 19) — a expiração depende do que a decisão concreta fixou; confira nos autos, não presuma.
- **Flexibilização que autorizava o contato:** se o juízo já permitira contato para tratar dos filhos (por advogado, terceiro ou app de coparentalidade — ver `revogacao-flexibilizacao-protetivas`), o contato dentro desse permissivo é **exercício regular** de faculdade autorizada, não descumprimento.

## Frente 3 — atipicidade material: conduta que não viola o núcleo da ordem, e o dolo de descumprir

Nem todo contato viola a protetiva. O 24-A é crime **doloso** — exige a vontade livre e consciente de **descumprir** a ordem. Faltando o dolo específico, a conduta é atípica.

- **Cruzamento fortuito / involuntário:** encontro casual em espaço público, sem busca deliberada da vítima, não realiza o descumprimento doloso da distância mínima. Documente a fortuidade (rota habitual, compromisso preexistente no local).
- **Contato provocado ou imposto pela vítima:** se foi **a ofendida** quem procurou o acusado, a resposta pontual pode romper o dolo de descumprir — **com extrema cautela**: o consentimento **não** descriminaliza (VDO-A10/A11), mas a **iniciativa** e a **passividade** do acusado são fatos relevantes para o elemento subjetivo. Pesquise o tratamento atual dessa hipótese via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** — jamais oriente o cliente a buscar a vítima para "produzir" essa tese.
- **Conduta fora do comando concreto:** o descumprimento imputado corresponde a **qual** medida deferida? Se a protetiva vedava aproximação física e o fato é uma mensagem, ou vedava contato e o fato é presença em local não listado, discuta a **subsunção** — não se descumpre ordem que não existia naquele parâmetro.
- **Ausência de lesividade / princípio da intervenção mínima:** contato absolutamente inócuo e episódico pode não realizar a ofensa que o tipo protege — tese subsidiária, a usar com parcimônia e ancorada em precedente confirmado via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.

## Frente 4 — dúvida sobre a autoria do contato

Quando a imputação se apoia em **mensagens, ligações ou aproximação atribuídas** ao acusado, a autoria precisa de prova segura.

- **Vinculação do número/conta:** o número emissor está **comprovadamente** vinculado ao acusado? Print sem perícia, sem cadeia de custódia do aparelho e sem confronto com a linha titularizada gera dúvida (ver `impugnacao-cadeia-custodia` quando o contato for prova digital).
- **Interposta pessoa não comprovada:** imputar contato "por interposta pessoa" exige provar que o terceiro **agiu a mando** do acusado — mera coincidência de conteúdo não fecha a autoria.
- ***In dubio pro reo*:** dúvida razoável sobre **quem** praticou o contato impede a condenação (CPP, art. 386). Combine com a Frente 1 quando também faltar ciência.

## Frente 5 — non bis in idem e concurso com o crime-fim

O §3º ressalva a aplicação de outras sanções, mas isso **não autoriza dupla punição pelo mesmo fato**.

- **Consunção com o crime-fim:** quando a aproximação vedada é **o próprio meio** de praticar ameaça, lesão ou injúria já denunciadas, discuta se o 24-A não é **absorvido** — ou se, ao contrário, protege bem jurídico diverso (a administração da justiça / a autoridade da ordem judicial) e subsiste em concurso. **A jurisprudência oscila** — pesquise o entendimento atual (STJ) sobre concurso × consunção entre 24-A e o crime-fim via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**; a BP registra que **não há consunção** entre 24-A e violação de domicílio (VDO-A12), o que **limita** essa tese em certas hipóteses.
- **Violação de domicílio (art. 150 CP):** por força de VDO-A12, entrar na residência protegida tende a somar-se ao 24-A, não a ser por ele absorvido — não aposte na consunção aqui sem confirmação.
- **Bis in idem na dosimetria:** ainda que o concurso subsista, vigie a valoração dupla das **mesmas circunstâncias** na pena-base de cada crime.

## Frente 6 — a fiança do §2º e a competência

- **Fiança só pelo juiz (§2º):** se o **delegado** arbitrou fiança no auto de prisão em flagrante por 24-A, o ato é **nulo** — pleiteie ao juízo a correção; conforme o caso, isso abre discussão sobre a **legalidade da custódia** e o cabimento de liberdade **judicial** (relaxamento/liberdade provisória em `liberdade-provisoria-relaxamento`).
- **Competência do JVDFM (arts. 13/14):** a ação corre no juizado de violência doméstica; o §1º já neutraliza a tese de que a incompetência do juiz que deferiu a protetiva afastaria o crime — não perca tempo com ela.
- **Sem 9.099 (art. 41 LMP; Súmula 536/STJ):** não conte com transação penal ou suspensão condicional do processo pela via dos Juizados Especiais; a estratégia de saída negociada, se houver, passa pela avaliação de ANPP (skill `anpp`), cujo cabimento em contexto de violência doméstica é **restrito** — confira via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.

## Estrutura forense da resposta à acusação

```
AO JUÍZO DO [N]º JUIZADO DE VIOLÊNCIA DOMÉSTICA E FAMILIAR CONTRA A MULHER
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DA AÇÃO PENAL]

[NOME], já qualificado(a), por seu(sua) advogado(a) (procuração anexa),
tendo sido citado(a) da denúncia que lhe imputa o crime do art. 24-A da
Lei 11.340/2006, vem apresentar

   RESPOSTA À ACUSAÇÃO (art. 396-A do CPP),
   requerendo a ABSOLVIÇÃO SUMÁRIA (art. 397 do CPP),

pelas razões seguintes:

I — SÍNTESE DA IMPUTAÇÃO
Qual protetiva, quais medidas, qual conduta descrita como descumprimento e
em que data. Fixar o comando concreto que se diz violado.

II — DA ATIPICIDADE
   1. Ausência de ciência inequívoca — não há, nos autos, intimação PESSOAL
      do acusado quanto ao teor e à vigência da medida (Frente 1). Elementar
      do tipo não comprovada.
   2. (Se for o caso) Inexistência de ordem vigente no dia do fato —
      protetiva expirada/revogada/flexibilizada (Frente 2).
   3. (Se for o caso) Ausência de dolo de descumprir — cruzamento fortuito /
      contato fora do comando concreto / conduta inócua (Frente 3).

III — (Subsidiário) DA DÚVIDA SOBRE A AUTORIA
   Contato atribuído sem prova segura de vinculação ao acusado — in dubio
   pro reo (Frente 4).

IV — (Se houver cumulação) DO NON BIS IN IDEM / CONCURSO
   Relação entre o 24-A e o crime-fim denunciado (Frente 5) — pesquisar
   entendimento atual e marcar [NÃO VERIFICADO].

V — (Se houve flagrante com fiança do delegado) DA NULIDADE DO §2º
   Fiança arbitrada por autoridade policial em crime cuja lei a veda.

VI — DOS PEDIDOS
   a) o recebimento da resposta e a ABSOLVIÇÃO SUMÁRIA (art. 397, III, do CPP)
      pela atipicidade;
   b) subsidiariamente, não sendo o caso de absolvição sumária, a produção
      das provas arroladas e a oitiva das testemunhas (rol anexo);
   c) [se cabível] a correção da fiança nula e a apreciação da liberdade.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos e diligências:** cópia integral do **expediente apartado da MPU** (para verificar intimação, prazo, revogação e flexibilização); certidão do oficial de justiça sobre a intimação pessoal; extrato/decisão que fixou os parâmetros da medida; prova da fortuidade do encontro ou da iniciativa da vítima, quando for a tese; rol de testemunhas.

## Antes de protocolar

- [ ] Há nos autos **intimação pessoal** documentada do acusado quanto à protetiva (mandado cumprido, termo, certidão)? Se não, a atipicidade da Frente 1 está pronta.
- [ ] A **data da ciência** é anterior à **data do fato** imputado?
- [ ] A protetiva estava **vigente** no dia do fato (não expirada, revogada ou flexibilizada de modo a autorizar o contato)?
- [ ] O fato imputado corresponde a **medida efetivamente deferida** e ao seu **parâmetro concreto**?
- [ ] Há elementos de **dolo de descumprir** — ou o caso é cruzamento fortuito / iniciativa da vítima / conduta inócua?
- [ ] A **autoria** do contato está provada com segurança (vinculação de número/conta, cadeia de custódia)?
- [ ] Há **cumulação** com crime-fim que exija tese de non bis in idem / concurso — e ela foi confirmada via `jurisprudencia-stj-stf`?
- [ ] Fiança foi arbitrada pelo **delegado** (nulidade do §2º)?
- [ ] Nenhuma orientação ao cliente de procurar a vítima; consentimento **não** foi usado como excludente de tipicidade?
- [ ] Redação vigente do art. 24-A conferida via `lei-e-sumula`; nada **[NÃO VERIFICADO]** remanescente na peça?

## Lembretes finais

- **Três pilares, três atipicidades:** ciência inequívoca, ordem vigente e dolo de descumprir — a queda de qualquer um absolve, não apenas reduz.
- **A batalha é probatória e formal, não moral:** ataca-se a **prova da intimação e da autoria**, jamais a vítima; ataque pessoal destrói a defesa e pode gerar incidente.
- **Consentimento não descriminaliza** (VDO-A10/A11) — a iniciativa da vítima é fato para o **dolo**, não escudo automático; e nunca se produz essa tese induzindo contato.
- **Fiança é do juiz (§2º)** e a **9.099 não se aplica** (art. 41 LMP; Súmula 536/STJ) — calibre as expectativas de saída negociada.
- **Non bis in idem tem limite:** VDO-A12 afasta a consunção com violação de domicílio — não prometa absorção sem checar o precedente.
- Toda peça gerada é **rascunho técnico para revisão humana obrigatória** antes de qualquer protocolo.

## Apoie-se em

- **BP `defesa-violencia-domestica`** — camada de teses do nicho (art. 24-A, ciência inequívoca, consentimento que não descriminaliza, non bis in idem com violação de domicílio): fichas **VDO-A10/A11/A12** e o banco VDO no acervo; consulte **antes** da web.
- **BP `peticao-criminal`** — estrutura, endereçamento e técnica da peça criminal (resposta à acusação, absolvição sumária): a forma que esta skill preenche com as teses do 24-A.
- **`medidas-protetivas-urgencia`** — o polo da vítima: como a protetiva foi pedida e deferida, e como a **ciência inequívoca** deveria ter sido documentada (é exatamente aí que a defesa ataca).
- **`revogacao-flexibilizacao-protetivas`** — a discussão sobre a **vigência/validade** da protetiva em si; se a medida já fora revogada ou flexibilizada, a atipicidade da Frente 2 nasce dali.
- **`liberdade-provisoria-relaxamento`** — quando o descumprimento gerou **preventiva** (art. 313, III, CPP) ou flagrante com fiança nula: lá se ataca a prisão, aqui o tipo.
- **`anpp`** — avaliação de ANPP (cabimento restrito em violência doméstica) quando a via for de solução negociada.
- **Agente `jurisprudencia-stj-stf`** — precedentes atuais (exigência de intimação pessoal, concurso × consunção com o crime-fim, iniciativa da vítima e dolo); tudo entra como **[NÃO VERIFICADO]** até confirmação.
- **Agente `lei-e-sumula`** — redação e **quantum** vigentes do art. 24-A e parágrafos (alterados por lei posterior); nunca afirmar pena de memória.
- **Agente `mapa-nulidades`** — para mapear vícios formais (intimação, fiança do §2º, competência) que sustentam a preliminar e a absolvição sumária.
- **Agente `verificador-citacoes` (gate `verificacao-citacoes`)** — obrigatório: nenhuma súmula, tese ou precedente entra na peça sem verificação; nada marcado **[NÃO VERIFICADO]** vai ao protocolo.

**Padrão de redação:** aplique **sempre** a skill `redacao-persuasiva-criminal` ao redigir a resposta à acusação, os memoriais ou o recurso — teoria do caso, narrativa dos fatos, subsunção explícita medida a medida, coesão e persuasão.
