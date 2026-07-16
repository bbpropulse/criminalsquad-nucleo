---
name: controle-externo-atividade-policial
description: >-
  Use ao elaborar RASCUNHO de representação ao Ministério Público (Corregedoria/GAECO/Promotoria de
  controle externo) provocando o controle externo da atividade policial (CF, art. 129, VII) diante
  de abuso ou omissão na investigação — inquérito paralisado, excesso de prazo reiterado,
  diligências abusivas, tratamento ilegal do investigado, recusa de acesso aos autos. Gatilhos:
  controle externo da atividade policial… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, inquerito, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-controle-externo-atividade-policial"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["controle-externo-atividade-policial", "controle externo", "atividade policial"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Controle Externo da Atividade Policial (CF, art. 129, VII; Resolução CNMP 20/2007)

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

Esta skill orienta a elaboração de **representação ao Ministério Público** para provocar o **controle externo da atividade policial** diante de **abuso ou omissão** na investigação criminal. É a via **institucional** pela qual se aciona o MP em seu papel de **fiscal da polícia** — não para pedir uma medida no mérito da investigação, mas para que o órgão de controle **fiscalize a própria atuação policial**: inquérito paralisado, excesso de prazo reiterado, diligência abusiva, tratamento ilegal do investigado, recusa de acesso aos autos.

> **Lição central:** identifique **contra o quê** você reage. Se o problema é a **conduta da polícia** (o *como* se investiga: omissão, abuso, ilegalidade procedimental), o instrumento é o controle externo (art. 129, VII). Se o problema é o **mérito investigativo** (falta uma diligência, uma prova, uma cautelar), o caminho é outro — pedido de diligências ao delegado, requerimento ao MP ou habeas corpus. **Errar o instrumento é o erro mais comum.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 129, VII, da CF, dos arts. 3º, 9º e 10 da LC 75/93, do art. 80 da Lei 8.625/93 e, sobretudo, da **Resolução CNMP nº 20/2007** (que disciplina o controle externo e sofreu alterações posteriores). Confira súmulas, temas e eventual *overruling* via a skill `jurisprudencia-stj-stf` antes de fundamentar. Regras locais de **prazo do inquérito** e de **rotina de fiscalização** variam por estado — cheque o Ato/Resolução do MP estadual respectivo.

## O que é (e o que não é)

O controle externo é a **fiscalização institucional** que o MP exerce sobre a atividade policial, com dupla natureza:

- **Controle externo difuso** — no caso concreto: acompanhar, requisitar, corrigir atos de investigação, apurar abuso/omissão.
- **Controle externo concentrado** — sistêmico: inspeções em delegacias, fiscalização de prazos, armamento, condições de custódia, autos de prisão em flagrante.

O particular (investigado, vítima, advogado) **não é titular** do controle externo — ele é **titular do MP** (art. 129, VII). Mas qualquer interessado **pode provocá-lo** por **representação**, levando ao conhecimento do órgão ministerial o abuso ou a omissão para que o MP atue. É esse gesto — **provocar a fiscalização** — que esta skill instrumentaliza.

## Base legal

- **CF, art. 129, VII** — função institucional do MP de **exercer o controle externo da atividade policial**, na forma da lei complementar.
- **CF, art. 129, I e VIII** — titularidade da ação penal pública e poder de **requisitar diligências investigatórias** e a instauração de inquérito.
- **LC 75/93 (MPU), arts. 3º, 9º e 10** — disciplina do controle externo no âmbito do MPU (aplicável por simetria e como norma geral): o MP fiscaliza a preservação dos direitos, a persecução penal e a legalidade dos atos policiais; tem acesso a documentos, autos e instalações; e pode representar/requisitar à autoridade competente.
- **Lei 8.625/93 (LONMP), art. 80** — aplicação subsidiária das normas da LC 75/93 aos Ministérios Públicos dos Estados; base do controle externo estadual.
- **Resolução CNMP nº 20/2007** — regulamenta o exercício do controle externo da atividade policial pelo MP: formas difusa e concentrada, comunicação de prisões, fiscalização de inquéritos e prazos, inspeções, representações.
- **CPP, art. 10** — **prazos do inquérito** (10 dias com indiciado preso; 30 dias com solto, prorrogáveis) — parâmetro objetivo para caracterizar a **paralisação/excesso de prazo**.
- **CPP, art. 5º, §§1º e 2º** — instauração do inquérito por requerimento; recurso ao chefe de polícia em caso de indeferimento.
- **Lei 12.830/2013, art. 2º, §2º** — o delegado deve requisitar/realizar as diligências necessárias; base para caracterizar a **omissão** quando há inércia injustificada.
- **Lei 13.869/2019 (Abuso de Autoridade)** — tipifica condutas abusivas na atividade policial; a representação por controle externo pode caminhar em paralelo à notícia-crime de abuso.
- **Lei 8.906/94 (EAOAB), art. 7º, XIV** — direito do advogado de **acesso aos autos** de investigação, ainda que sigilosos (com procuração no sigiloso); a **negativa** é hipótese clássica a provocar o controle externo.
- **CF, art. 5º, LXII a LXV** — direitos do preso; base para representar contra tratamento ilegal do custodiado.

## Hipóteses que autorizam a provocação (mapa de gatilhos)

| Situação | Núcleo do vício | Fundamento típico |
|---|---|---|
| Inquérito **paralisado** sem diligência útil por longo período | Omissão | CPP art. 10; Lei 12.830/13 art. 2º, §2º |
| **Excesso de prazo reiterado** e injustificado | Omissão/ineficiência | CPP art. 10; Res. CNMP 20/2007 |
| **Diligência abusiva** (busca sem mandado, algemação indevida, violência) | Abuso/ilegalidade | Lei 13.869/19; CF art. 5º |
| **Tratamento ilegal do investigado/custodiado** (incomunicabilidade, coação, exposição) | Abuso | CF art. 5º, LXII-LXV; Lei 13.869/19 |
| **Recusa de acesso aos autos** ao advogado | Ilegalidade | EAOAB art. 7º, XIV; SV 14/STF |
| **Não instauração** de inquérito diante de notícia-crime consistente | Omissão | CPP art. 5º; CF art. 129, VIII |
| **Descumprimento de requisição** do MP pela autoridade policial | Insubordinação institucional | CF art. 129, VIII; Res. CNMP 20/2007 |
| **Cadeia de custódia** violada / apreensões sem registro | Ilegalidade procedimental | CPP arts. 158-A a 158-F |

> **Súmula Vinculante 14/STF** (notória): assegura à **defesa** o acesso aos elementos de prova **já documentados** no procedimento investigatório. A negativa de acesso é fundamento robusto tanto para o controle externo quanto para reclamação/HC.

## Metodologia passo a passo

**Passo 1 — Qualificar o vício.** Classifique: é **omissão** (o que deveria ser feito não foi — inércia, excesso de prazo, não instauração) ou **abuso/ilegalidade** (o que foi feito violou a lei — diligência abusiva, coação, negativa de acesso)? A tese muda conforme a natureza.

**Passo 2 — Documentar objetivamente.** Reúna as datas: instauração do IP, últimos atos, prazo legal do art. 10 do CPP, protocolos de pedidos ignorados. **O controle externo se sustenta em fatos e datas, não em adjetivos.** Excesso de prazo se prova com a linha do tempo; abuso, com peça/laudo/registro.

**Passo 3 — Escolher o órgão certo.** Direcione ao **órgão do MP com atribuição de controle externo** — em regra a **Promotoria de Justiça** com atribuição sobre a comarca/delegacia, ou o **grupo/promotoria de controle externo** (nomenclatura varia: GAECO, Promotoria de Controle Externo, Corregedoria quando o foco é disciplinar interno da polícia). Na dúvida, protocole na Promotoria natural e peça a redistribuição.

**Passo 4 — Distinguir do disciplinar.** O controle externo (MP) **não se confunde** com o controle **interno** (Corregedoria da Polícia). Pode-se acionar **ambos**: o MP para fiscalizar/corrigir a investigação; a Corregedoria de Polícia para apurar a **responsabilidade funcional** do agente. Deixe claro na peça qual providência se pede a quem.

**Passo 5 — Formular pedidos concretos.** Não peça genericamente "controle". Peça atos: requisição de atos ao delegado, fixação/observância de prazo, correição, apuração de abuso, redistribuição de inquérito, comunicação à Corregedoria, avocação quando cabível.

**Passo 6 — Preservar as vias paralelas.** O controle externo **não substitui** o habeas corpus (quando há constrangimento à liberdade/investigação ilegal em curso), a reclamação (descumprimento de SV 14) nem a notícia-crime de abuso de autoridade. Avalie o **feixe** de instrumentos e use o mais eficaz para a urgência.

## Estrutura da representação

1. **Endereçamento** — ao órgão do MP com atribuição de controle externo (Promotoria de Justiça/Controle Externo da comarca).
2. **Qualificação** do representante (investigado/vítima/advogado) e menção à procuração, quando advogado.
3. **Dos fatos** — narrativa **cronológica** e objetiva: instauração, atos praticados, inércia/abuso, datas e protocolos.
4. **Do direito** — subsunção: art. 129, VII, CF + LC 75/93 + Res. CNMP 20/2007; dispositivo específico do vício (CPP art. 10 para prazo; EAOAB art. 7º/SV 14 para acesso; Lei 13.869/19 para abuso).
5. **Dos pedidos** — providências concretas de controle (ver modelo).
6. **Documentos** — cópia do IP/andamento, protocolos ignorados, procuração, provas do abuso.

## Modelo de representação

```
EXCELENTÍSSIMO(A) SENHOR(A) PROMOTOR(A) DE JUSTIÇA COM ATRIBUIÇÃO DE CONTROLE
EXTERNO DA ATIVIDADE POLICIAL DA COMARCA DE [COMARCA]


Ref.: Inquérito Policial nº [Nº DO IP] — [DELEGACIA]


[NOME DO REPRESENTANTE], [qualificação], por seu advogado que esta subscreve
(procuração anexa), vem, com fundamento no art. 129, VII, da Constituição
Federal, nos arts. 3º, 9º e 10 da LC 75/93 (c/c art. 80 da Lei 8.625/93) e na
Resolução CNMP nº 20/2007, apresentar

REPRESENTAÇÃO PARA EXERCÍCIO DO CONTROLE EXTERNO DA ATIVIDADE POLICIAL

em face de [OMISSÃO/ABUSO] verificado no inquérito em epígrafe, pelas razões de
fato e de direito a seguir expostas.


I — DOS FATOS

O inquérito policial nº [Nº] foi instaurado em [DATA] para apurar [OBJETO].
Desde [DATA DO ÚLTIMO ATO ÚTIL], contudo, [descrever objetivamente:
    — o feito encontra-se PARALISADO, sem diligência útil, há [PERÍODO],
      extrapolado o prazo do art. 10 do CPP; OU
    — a autoridade policial praticou [DILIGÊNCIA ABUSIVA — descrever]; OU
    — foi negado ao subscritor o acesso aos autos, em afronta ao art. 7º, XIV,
      do EAOAB e à Súmula Vinculante 14/STF; OU
    — o investigado sofreu [TRATAMENTO ILEGAL — descrever]].

Os pedidos/protocolos de [Nº/DATA] restaram sem resposta (docs. anexos).


II — DO DIREITO

Compete ao Ministério Público exercer o controle externo da atividade policial
(art. 129, VII, da CF; arts. 3º, 9º e 10 da LC 75/93; Resolução CNMP nº 20/2007),
fiscalizando a legalidade e a eficiência da persecução penal conduzida pela
polícia.

[Excesso de prazo/paralisação:] O art. 10 do CPP fixa prazos para a conclusão do
inquérito; sua reiterada inobservância, sem justificativa, caracteriza omissão a
ser corrigida pelo controle externo, sem prejuízo da requisição de atos (art.
129, VIII, da CF).

[Negativa de acesso:] O acesso aos elementos já documentados é direito da defesa
(art. 7º, XIV, do EAOAB; Súmula Vinculante 14/STF); a recusa é ilegalidade sujeita
ao controle externo, sem prejuízo de reclamação constitucional.

[Abuso/tratamento ilegal:] A conduta descrita viola [dispositivo] e, em tese,
configura abuso de autoridade (Lei 13.869/2019), cabendo ao MP a fiscalização e,
se for o caso, a adoção das providências penais e a comunicação à Corregedoria
de Polícia para apuração funcional.


III — DOS PEDIDOS

Requer-se ao Ministério Público, no exercício do controle externo:

a) a REQUISIÇÃO à autoridade policial para que [conclua o inquérito / realize as
   diligências pendentes / cesse a conduta abusiva / franqueie o acesso aos
   autos], no prazo que fixar;
b) a FISCALIZAÇÃO do cumprimento dos prazos do art. 10 do CPP no feito;
c) subsidiariamente, a REDISTRIBUIÇÃO/CORREIÇÃO do inquérito, se persistir a
   inércia;
d) a COMUNICAÇÃO à Corregedoria de Polícia para apuração da responsabilidade
   funcional [quando houver abuso];
e) a apuração de eventual crime de ABUSO DE AUTORIDADE (Lei 13.869/2019)
   [quando cabível];
f) a ciência ao representante das providências adotadas.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DO IP], [DELEGACIA], [NOME DO REPRESENTANTE], [OBJETO], [DATAS], [PERÍODO], [DILIGÊNCIA ABUSIVA/TRATAMENTO ILEGAL], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração (com poderes para o sigiloso, se o IP for sigiloso).
2. Cópia do inquérito / extrato de andamento (comprova a paralisação/atos).
3. Protocolos dos pedidos ignorados (comprova a inércia).
4. Prova do abuso, quando for o caso (laudo, boletim, registro, imagens).
5. Comprovante da negativa de acesso, quando for o caso.

## Teses e contra-teses

**Teses do representante:**

1. **Omissão qualificada** — a inércia não é mero atraso, mas descumprimento reiterado do art. 10 do CPP e do dever de investigar (Lei 12.830/13, art. 2º, §2º), a exigir correção institucional.
2. **Ilegalidade do ato** — a diligência abusiva/negativa de acesso viola dispositivo expresso (SV 14; EAOAB art. 7º, XIV; CF art. 5º), e a legalidade da atividade policial é objeto próprio do controle externo.
3. **Feixe de instrumentos** — o controle externo convive com HC (se há constrangimento em curso), reclamação (descumprimento de SV 14) e notícia-crime de abuso; pedir a via mais rápida para a urgência.
4. **Dever de resposta** — provocado, o MP deve deliberar e dar ciência; o silêncio do próprio MP pode ser levado à Procuradoria-Geral/Corregedoria do MP.

**Contra-teses (a antecipar):**

1. **"Não titularidade do particular"** — responder: o particular não titulariza o controle externo, mas **pode provocá-lo**; a peça é representação, não exercício direto da função.
2. **"Prazo do inquérito é impróprio / mera irregularidade"** — responder: a **reiteração** e a ausência de justificativa transformam atraso em omissão fiscalizável; o parâmetro objetivo do art. 10 baliza a razoabilidade.
3. **"Sigilo autoriza a negativa de acesso"** — responder: o sigilo não alcança os atos **já documentados** (SV 14), nem afasta o advogado com procuração no feito sigiloso.
4. **"Via inadequada — deveria ser HC"** — responder: o controle externo não exclui o HC; são vias **cumulativas**, com finalidades distintas (uma corrige a investigação; o outro tutela a liberdade).

## Erros comuns (anti-padrões)

- **Confundir com o pedido de diligências** — o pedido de diligências vai ao **delegado** (mérito da investigação); o controle externo vai ao **MP** e mira o **como** se investiga. Ver `pedido-diligencias`.
- **Confundir com a representação por cautelares** — aquela pede ao MP uma **medida no mérito**; esta o aciona como **fiscal da polícia**. Ver `representacao-cautelares-mp`.
- **Confundir MP com Corregedoria de Polícia** — o controle externo é do **MP**; a Corregedoria apura a falta **funcional** interna. Pode-se acionar ambos, mas com pedidos distintos.
- **Peça adjetivada e sem datas** — "abuso escandaloso" não prova nada; **linha do tempo** e protocolos, sim.
- **Pedidos genéricos** — pedir "controle" sem especificar **atos** (requisição, prazo, correição, comunicação) esvazia a representação.
- **Ignorar as vias urgentes** — quando há constrangimento à liberdade em curso, o controle externo **não** substitui o **habeas corpus**.
- **Citar precedente de memória** — todo número de HC/REsp/RE, informativo ou tema deve passar por `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Vício qualificado como **omissão** ou **abuso/ilegalidade**?
- [ ] Linha do tempo com datas e protocolos montada (art. 10 do CPP como parâmetro)?
- [ ] Endereçado ao **órgão do MP com atribuição de controle externo** correto?
- [ ] Distinção **controle externo (MP) × disciplinar (Corregedoria de Polícia)** explicitada?
- [ ] Pedidos **concretos** (requisição, prazo, correição, comunicação, apuração)?
- [ ] Vias paralelas avaliadas (HC / reclamação SV 14 / notícia-crime de abuso)?
- [ ] Documentos anexados (IP, protocolos, procuração, prova do abuso)?
- [ ] Fundamentos conferidos na **redação vigente** (CF 129, VII; LC 75/93; Res. CNMP 20/2007; Ato do MP estadual)?
- [ ] Súmulas/precedentes verificados via `jurisprudencia-stj-stf`?
- [ ] Revisão humana do advogado responsável realizada?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação; a responsabilidade pela peça, pela estratégia e pelo protocolo é sempre do **advogado** (EAOAB; CED).
- **Citation Gate.** Nenhuma súmula, tese ou acórdão citado de memória: cite livremente **dispositivos de lei** (CF, CPP, LC 75/93, Lei 8.625/93, Lei 12.830/13, Lei 13.869/19, EAOAB) e a **SV 14/STF** de que se tem certeza; qualquer **precedente específico** (número de HC/REsp/RE, informativo, tema) deve ser conferido via `jurisprudencia-stj-stf` — melhor faltar precedente do que citar julgado inexistente.
- **Ética por polo.** Esta skill é da **advocacia** (defesa/assistência): OAB + Provimento 205/2021. Atuando o usuário em **outro polo**, ajustar o regime ético (CNMP no MP; LC 80/94 na Defensoria).
- **Sigilo e LGPD.** Dados de assistido/investigado não vão a repositório público; observe o sigilo do inquérito.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
