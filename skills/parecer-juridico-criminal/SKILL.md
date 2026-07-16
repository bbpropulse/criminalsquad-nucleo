---
name: parecer-juridico-criminal
description: >-
  Use ao elaborar parecer ou responder consulta jurídico-criminal como entregável formal — opinião
  técnica sobre viabilidade de tese, defesa ou recurso, análise de risco penal, segunda opinião,
  parecer pro veritate para instruir autos e parecer do MP como custos legis em HC e recursos.
  Gatilhos: parecer, parecer jurídico, parecer criminal, consulta jurídica, opinião legal, legal
  opinion, quesitos, resposta aos quesitos… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, escritorio]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-parecer-juridico-criminal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["parecer-juridico-criminal", "parecer juridico", "juridico criminal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Parecer Jurídico-Criminal (consulta, viabilidade e custos legis)

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

Esta skill orienta a elaboração do **parecer jurídico-criminal como entregável**: a opinião técnica escrita que responde a uma consulta — do cliente, do próprio escritório ou do juízo — sobre questão penal ou processual penal. Cobre a **estrutura forense** do parecer (ementa, consulta, relatório, fundamentação, conclusão com resposta objetiva aos quesitos), a **graduação de certeza** (o que é pacífico, o que é divergente, o que é aposta), o **juízo de viabilidade** de tese ou recurso e a variante do **parecer do Ministério Público como custos legis** em habeas corpus e recursos.

> **Síntese operacional:** o parecer é a única peça criminal cujo "pedido" é uma **resposta** — e ele vale exatamente o que valer sua honestidade técnica. Parecer que só confirma o que o consulente quer ouvir é inútil e perigoso; parecer que gradua a certeza (pacífico ≠ majoritário ≠ divergente), enfrenta o cenário adverso e responde cada quesito com **SIM / NÃO / EM PARTE + porquê** é instrumento de decisão. Regra de ouro: quem lê a conclusão sem ler o resto deve sair sabendo **o que fazer** — e ciente de que opinião técnica **não é promessa de resultado** (CED, art. 9º).

> **Cautela de citações (obrigatória antes de entregar):** o parecer é a peça em que o erro de citação custa mais caro — ele existe para ser conferido. Nenhuma súmula, tese ou precedente entra de memória: estado atual da jurisprudência via agente `jurisprudencia-stj-stf` (marcando **[NÃO VERIFICADO]** o que não foi conferido na fonte), vigência de dispositivo via agente `lei-e-sumula`, e gate final da best-practice `verificacao-citacoes` antes da entrega.

## Natureza e base legal

- **Natureza jurídica:** manifestação **opinativa** — não decide, não vincula, não constitui direito. É ato de consultoria e assessoria jurídica, atividade privativa da advocacia (art. 1º, II, da Lei 8.906/94 — EAOAB), coberto pela **inviolabilidade do advogado por seus atos e manifestações no exercício da profissão** (art. 133 da CF; art. 2º, §3º, do EAOAB).
- **Responsabilidade do parecerista:** por ser opinião, o parecer não gera responsabilidade pelo insucesso da tese; a responsabilização exige **dolo ou erro grosseiro/culpa grave** — tese consolidada na jurisprudência sobre pareceristas (pesquise o precedente atual via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até conferir). Alterações recentes no EAOAB reforçaram a proteção da manifestação técnico-jurídica do advogado consultor (Lei 14.365/2022 — **confirmar o dispositivo exato via `lei-e-sumula`** antes de citar).
- **Parecer do MP como custos legis:** nos tribunais, o Ministério Público oficia como **fiscal da ordem jurídica** (art. 127 da CF; art. 257 do CPP) em habeas corpus, recursos e revisões — e seu parecer pode ser **favorável ao réu**: o custos legis opina pela correta aplicação da lei, não pela acusação. Prazos e forma de vista vêm dos regimentos internos (conferir o regimento do tribunal do caso concreto via `lei-e-sumula`).
- **O que o parecer NÃO é:** não é petição (em regra não se protocola — o destinatário é o consulente); não é promessa de êxito (dever de informar o cliente sobre riscos, sem assegurar resultado — CED, art. 9º; conferir a literalidade do dispositivo via `lei-e-sumula` antes de citar); não substitui a peça processual que dele decorrer.

## Cabimento — quando o parecer é o entregável certo

| Situação | Tipo de parecer | Observação |
|----------|-----------------|------------|
| Cliente consulta antes de decidir (aceitar ANPP? recorrer? delatar?) | **Consultivo de parte** | Entregável central: cenários comparados + recomendação com grau de certeza |
| Escritório decide internamente se interpõe recurso | **Interno de viabilidade (go/no-go)** | Prognóstico honesto: admissibilidade + mérito + custo/risco; entregue **antes** do prazo recursal |
| Cliente quer confirmar/desafiar a estratégia do advogado atual | **Segunda opinião** | Cortesia profissional (não desmerecer o colega); foco no mérito técnico |
| Parte quer reforçar tese nos autos com autoridade doutrinária | **Pro veritate (parecer de jurista)** | Juntado aos autos como documento; declarar quem contratou — transparência é o ethos |
| Empresa avalia risco penal de operação, M&A ou programa de integridade | **Due diligence / risco penal** | Mapa de exposições típicas + recomendações; linguagem para leitor não penalista |
| MP oficia em HC, RESE, apelação, revisão criminal | **Custos legis** | Estrutura idêntica; a "consulta" é a vista regimental; conclusão = opinar pela concessão/denegação ou provimento/desprovimento |

> **Arquivamento da dúvida antes do parecer:** se a consulta esconde uma providência urgente (prazo correndo, prisão em curso, prescrição iminente), a resposta correta **não é o parecer** — é a peça. Parecer é entregável de decisão, não de emergência. Sinalize a urgência primeiro; opine depois.

## Estrutura forense do parecer (as cinco partes)

O parecer tem anatomia própria — mais próxima de um acórdão do que de uma petição:

**1. EMENTA.** Três a oito linhas em maiúsculas/verbetação, do geral ao específico: ramo do direito → instituto → questão → resposta-síntese. Quem lê só a ementa sabe o tema e a direção da resposta. É a última coisa a escrever e a primeira a aparecer.

**2. CONSULTA (com os quesitos).** Quem consulta, em que qualidade, e **o que exatamente pergunta** — quesitos numerados (Q1, Q2…), reformulados pelo parecerista se vieram vagos ("quais as chances?" vira "Q1 — Há tese de nulidade apta a devolver o mérito em apelação? Q2 — Qual o prognóstico da dosimetria?"). Quesito bem formulado é meio parecer.

**3. RELATÓRIO.** Síntese objetiva e neutra dos fatos e do processo: imputação, fase, decisões já proferidas, provas centrais, prazos em curso — com âncoras (fls./ID, datas). **Sem opinião**: o relatório é o terreno comum que consulente e parecerista aceitam como premissa. Documentos examinados listados ao final (o parecer vale para o que foi examinado — cláusula de escopo).

**4. FUNDAMENTAÇÃO.** Um capítulo por quesito, na ordem dos quesitos. Dentro de cada capítulo: norma aplicável → estado da jurisprudência **com graduação de certeza** (seção abaixo) → subsunção ao caso concreto → **cenário adverso enfrentado** (o melhor argumento contrário e por que não prevalece — ou por que prevalece, se a resposta for desfavorável). Parecer que ignora o argumento contrário não é opinião: é torcida.

**5. CONCLUSÃO — resposta objetiva aos quesitos.** O coração do entregável: cada quesito respondido em bloco próprio, abrindo com **SIM / NÃO / EM PARTE / DEPENDE (de quê)** + síntese do porquê em duas ou três linhas + grau de certeza declarado. Fecha com: recomendação prática (o que fazer e até quando), ressalvas de escopo, cláusula de que a opinião não constitui promessa de resultado, local, data e assinatura com OAB.

```
PARECER JURÍDICO-CRIMINAL Nº [NN/AAAA]

EMENTA: DIREITO PROCESSUAL PENAL. [INSTITUTO]. [QUESTÃO CENTRAL].
[RESPOSTA-SÍNTESE — ex.: VIABILIDADE DA TESE DE NULIDADE. RECURSO
RECOMENDADO. QUESITOS RESPONDIDOS.]

I — DA CONSULTA
[CONSULENTE], por [QUALIDADE — cliente/advogado/empresa], consulta este
parecerista sobre [OBJETO], formulando os seguintes quesitos:
Q1 — [PERGUNTA REFORMULADA COM PRECISÃO]
Q2 — [PERGUNTA]
[Q3 — ...]

II — DO RELATÓRIO
[Síntese neutra: imputação (art. [X] do [DIPLOMA]), fase processual,
decisões relevantes com datas e fls./ID, provas centrais, prazos em curso.]
Documentos examinados: [LISTA]. Este parecer tem por premissa exclusivamente
os documentos acima e as informações prestadas pelo consulente.

III — DA FUNDAMENTAÇÃO
III.1 — Quanto ao Q1: [SUBTÍTULO AFIRMATIVO COM A RESPOSTA]
   [Norma → jurisprudência com grau de certeza → subsunção → cenário adverso]
III.2 — Quanto ao Q2: [SUBTÍTULO AFIRMATIVO]
   [...]

IV — DA CONCLUSÃO (RESPOSTA AOS QUESITOS)
Q1 — [SIM / NÃO / EM PARTE / DEPENDE]. [Síntese do porquê em 2-3 linhas.]
     Grau de certeza: [pacífico / majoritário / divergente / inexplorado].
Q2 — [RESPOSTA]. [...]

RECOMENDAÇÃO: [providência concreta + prazo-limite, se houver].
É o parecer, salvo melhor juízo. A presente opinião é técnica e não
constitui garantia de resultado (CED, art. 9º).
[LOCAL], [DATA].
[PARECERISTA] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [NN/AAAA], [CONSULENTE], [QUALIDADE], [OBJETO], quesitos, [DIPLOMA], fls./ID, [LISTA de documentos], respostas, graus de certeza, [LOCAL], [DATA], [PARECERISTA], OAB.

## Graduação de certeza — o que separa parecer de palpite

Toda afirmação jurídica relevante do parecer carrega etiqueta de confiabilidade. A escala:

| Grau | Significado | Linguagem calibrada |
|------|-------------|---------------------|
| **Pacífico** | Texto expresso de lei ou súmula consolidada; sem dissenso real | "é pacífico que…", "por expressa disposição do art. …" |
| **Majoritário** | Orientação dominante nos tribunais superiores, com vozes contrárias | "prevalece o entendimento de que…, embora haja divergência" |
| **Divergente** | Turmas/tribunais dividem-se; resultado depende do relator/órgão | "a questão é controvertida: há decisões nos dois sentidos" |
| **Minoritário** | Tese defensável, mas contra a corrente atual | "tese possível, hoje minoritária — aposta de longo prazo" |
| **Inexplorado** | Questão nova, sem enfrentamento consolidado | "não identificada orientação firmada; cenário de incerteza" |

- **A etiqueta vem da pesquisa, não da intuição.** O estado da jurisprudência é aferido via `jurisprudencia-stj-stf` (método da best-practice `pesquisa-jurisprudencial`: teses firmadas, repetitivos, repercussão geral); doutrina de apoio via agente `doutrina`; vigência e literalidade de dispositivo via `lei-e-sumula`. O que não foi conferido na fonte sai marcado **[NÃO VERIFICADO]** — e o parecer não é entregue com essa marca.
- **Percentuais são armadilha.** "70% de chance" sugere precisão que não existe e vira promessa implícita. Use a escala qualitativa + os fatores que podem mover o resultado (órgão julgador, evolução do tema, fato novo).
- **Divergência é informação, não fraqueza.** Dizer "controvertido" com o mapa das posições vale mais ao consulente do que um "sim" inflado que o processo desmente depois.

## Juízo de viabilidade de tese ou recurso — o método

Quando o quesito é "vale a pena recorrer/arguir?", a fundamentação percorre três filtros, nesta ordem:

1. **Admissibilidade (o filtro que mata primeiro).** Cabimento da via, prazo (termo inicial e final **calculados e datados** no parecer, pela **contagem penal** do art. 798 do CPP — prazos contínuos e peremptórios, sem suspensão por férias, excluído o dia do começo (§1º) e prorrogado o termo final que cair em dia sem expediente; prazo **em dobro** quando a parte for assistida pela Defensoria Pública — LC 80/94; termo inicial conferido no caso concreto via `lei-e-sumula`), legitimidade/interesse, preparo quando houver, preclusão consumada ou iminente. Tese brilhante em via inadmissível é resposta **NÃO** — e o parecer diz isso na primeira linha do capítulo.
2. **Mérito (a força da tese).** Norma + estado da jurisprudência graduado + subsunção: quais fatos DESTE caso preenchem a tese, com fls./ID. Inclui o inventário do que a acusação/o acórdão dirá em contrário e a réplica disponível.
3. **Prognóstico e custo-benefício.** O que se ganha se der certo (liberdade? redução de pena? nulidade que devolve o mérito?), o que se arrisca (reformatio in pejus em recurso exclusivo da defesa **não** — regra do art. 617 do CPP; mas atenção a custos, demora, exposição, perda de benefícios negociais), e as alternativas (via negocial — cf. skill `anpp` quando couber; execução; revisão futura). Recomendação final = tese × chance × custo, em linguagem de decisão.

## Parecer do MP como custos legis (HC e recursos)

A mesma anatomia serve ao membro do Ministério Público oficiando como fiscal da ordem jurídica:

- **A "consulta" é a vista regimental**: o quesito implícito é "a ordem deve ser concedida?" / "o recurso deve ser provido?". Explicite-o como Q1 e responda com a mesma objetividade.
- **Independência funcional em ato:** o custos legis **não defende a acusação** — opina pela correta aplicação da lei (art. 127 da CF). Parecer pela **concessão** do HC diante de ilegalidade flagrante é atuação típica, não anomalia; fundamente-a com o mesmo rigor.
- **Estrutura:** ementa → relatório (síntese do writ/recurso e da decisão impugnada) → fundamentação por questão (conhecimento primeiro, mérito depois) → conclusão: "opina-se pelo [não] conhecimento e, no mérito, pela [concessão/denegação da ordem | provimento/desprovimento do recurso]".
- **Prazo de vista:** regimental — conferir o regimento interno do tribunal via `lei-e-sumula`; não presumir prazo uniforme.

## Erros comuns e pegadinhas

- **Consulta não suspende prazo.** O erro mais caro do parecer de viabilidade recursal: opinar com calma enquanto o prazo do recurso corre. O parecer nasce com **data-limite interna** anterior ao termo final — e, na dúvida sobre o tempo, protocola-se o recurso e aprofunda-se depois (a via se preserva; a opinião se refina).
- **Responder o que não foi perguntado — ou deixar quesito sem resposta.** A conclusão espelha os quesitos um a um; nada além (opinião extra é responsabilidade extra), nada aquém (quesito ignorado é parecer devolvido).
- **"Chances reais de êxito" e outros acenos de resultado.** Vedado assegurar resultado (CED, art. 9º; best-practice `etica-oab-sigilo`). A linguagem é a da escala de certeza — nunca a da promessa. Isso protege o cliente (decisão informada) e o parecerista (responsabilidade só por dolo/erro grosseiro).
- **Parecer-torcida.** Suprimir o cenário adverso para agradar o consulente inverte a função do entregável e cobra o preço em juízo. O melhor argumento contrário aparece **e é enfrentado** — ou a resposta muda.
- **Citação de memória.** O parecer existe para ser conferido pelo destinatário; uma súmula errada destrói o ethos do documento inteiro. Gate `verificacao-citacoes` sem exceção; precedente atual só via `jurisprudencia-stj-stf`, senão **[NÃO VERIFICADO]**.
- **Sigilo e circulação.** O parecer de parte contém estratégia e, às vezes, admissões do cliente. Circulação controlada (LGPD + sigilo profissional — `etica-oab-sigilo`); **juntar aos autos é decisão estratégica**: o que entra no processo fica visível à acusação (salvo segredo de justiça) e não sai mais.
- **Endereçamento trocado.** Parecer de parte **não se protocola** como petição — o destinatário é o consulente. Quando for aos autos (pro veritate), entra como **documento anexo** a uma petição de juntada, e o parecerista declara a origem da contratação. Já o parecer custos legis segue o fluxo regimental de vista.
- **Relatório contaminado de opinião.** Adjetivo no relatório ("a decisão, absurda, …") entrega parcialidade antes da fundamentação e desarma o parecer. Neutralidade ali; a força fica para a fundamentação.
- **Escopo sem cláusula.** Sem a lista de documentos examinados e a ressalva de premissas, o parecer responde por fatos que nunca viu. A cláusula de escopo é blindagem básica.

## Checklist antes de entregar

- [ ] Quesitos **reformulados com precisão** e numerados (Q1, Q2…)?
- [ ] Há **urgência oculta** (prazo, prisão, prescrição) que exige peça antes de opinião?
- [ ] Relatório **neutro**, com fls./ID e lista de documentos examinados (cláusula de escopo)?
- [ ] Cada capítulo da fundamentação: norma → jurisprudência **graduada** → subsunção → **cenário adverso enfrentado**?
- [ ] Estado da jurisprudência conferido via `jurisprudencia-stj-stf` + método `pesquisa-jurisprudencial`; nada de memória; pendências marcadas **[NÃO VERIFICADO]** e resolvidas?
- [ ] Dispositivos com vigência conferida via `lei-e-sumula` (inclusive alterações recentes do EAOAB e regimento do tribunal, quando citados)?
- [ ] Conclusão responde **cada quesito** com SIM/NÃO/EM PARTE/DEPENDE + grau de certeza declarado?
- [ ] Recomendação prática com **data-limite** quando houver prazo em curso?
- [ ] Zero promessa de resultado; ressalva expressa (CED, art. 9º)?
- [ ] Circulação definida (quem recebe; juntar ou não aos autos) conforme `etica-oab-sigilo`?
- [ ] Gate final `verificacao-citacoes` executado (agente `verificador-citacoes`)?

## Apoie-se em

- **Agente `doutrina`** — posições doutrinárias que sustentam a fundamentação e o parecer pro veritate.
- **Agente `lei-e-sumula`** — vigência e literalidade de dispositivos (EAOAB e alterações recentes, CPP, regimentos internos) antes de citar.
- **Agente `jurisprudencia-stj-stf`** — estado atual da jurisprudência para a graduação de certeza; tudo que não vier daí sai como **[NÃO VERIFICADO]**.
- **Agente `verificador-citacoes`** — gate final de conferência de todas as citações do parecer.
- **Best-practice `pesquisa-jurisprudencial`** — método de pesquisa (teses firmadas, repetitivos, repercussão geral) que alimenta a escala pacífico/divergente.
- **Best-practice `verificacao-citacoes`** — disciplina de citação: nada de memória, marcação e resolução de pendências.
- **Best-practice `etica-oab-sigilo`** — sem promessa de resultado, sigilo profissional, LGPD e circulação controlada do parecer.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima aplicado ao parecer: subtítulos afirmativos que respondem sozinhos, tópico frasal + desenvolvimento, subsunção explícita (Regra do Porquê), clareza que dispensa releitura. **Sempre.**
- **Skill `anpp`** — quando o quesito envolver comparar litígio × via negocial, o custo-benefício do acordo vem de lá.
