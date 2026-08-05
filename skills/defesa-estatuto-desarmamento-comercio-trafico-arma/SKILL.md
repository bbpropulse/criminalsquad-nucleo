---
name: defesa-estatuto-desarmamento-comercio-trafico-arma
description: >-
  Use ao defender acusado de COMÉRCIO ILEGAL de arma de fogo (art. 17) ou TRÁFICO internacional
  (art. 18) da Lei 10.826/2003 — os tipos mais graves do Estatuto, hediondos e sem alguns
  benefícios, distintos da posse/porte (arts. 12-16, skill `posse-porte-arma`). Gatilhos: comércio
  ilegal de arma, art. 17 Estatuto, tráfico internacional de arma de fogo, art. 18 Estatuto,
  importar/exportar arma, hediondez do…. Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, armas, crime-hediondo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-estatuto-desarmamento-comercio-trafico-arma"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-estatuto-desarmamento-comercio-trafico-arma", "defesa estatuto", "trafico arma"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Comércio Ilegal e Tráfico de Arma de Fogo (Lei 10.826/2003 — defesa nos arts. 17 e 18)

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

Esta skill orienta a **defesa nos tipos mais graves do Estatuto do Desarmamento** — o **comércio ilegal (art. 17)** e o **tráfico internacional (art. 18)** de arma de fogo, acessório ou munição. São crimes **hediondos** (Lei 8.072/90), com penas elevadas pelo Pacote Anticrime, o art. 18 de **competência da Justiça Federal**. A posse, o porte, o disparo e o uso restrito (arts. 12-16) ficam na skill `posse-porte-arma` — **aqui o objeto é a mercancia e a transnacionalidade**: quando a conduta realmente configura comércio/tráfico e quando é, na verdade, porte ou posse capitulado a mais.

> **Lição central:** o MP infla a capitulação porque comércio e tráfico são **hediondos** e mudam tudo (regime, progressão, ANPP, prisão). A defesa desses artigos quase sempre se ganha **derrubando a mercancia** ou a **transnacionalidade** — provando que houve, no máximo, porte/posse (arts. 14/16) e devolvendo o caso ao tipo comum. Antes de qualquer tese, responda: **há prova de atividade comercial/habitualidade (art. 17) ou de cruzamento de fronteira (art. 18)?** Sem isso, o tipo grave não fecha.

> **Cautela de vigência (obrigatória antes de citar):** as penas dos arts. 17 e 18 foram **majoradas pela Lei 13.964/2019 (Pacote Anticrime)** e as majorantes dos arts. 19 e 20 reescritas; a hediondez decorre do art. 1º, parágrafo único, da **Lei 8.072/90**. A classificação permitido/restrito/proibido é **norma penal em branco**, hoje regida pelo **Decreto 11.615/2023** (a confirmar). **Confira a redação vigente de cada dispositivo e o rol de hediondos via `lei-e-sumula`, e o estado das teses via `jurisprudencia-stj-stf`, antes de fundamentar.** Nenhum número de pena, decreto ou súmula entra na peça sem conferência.

## Base legal — o núcleo dos arts. 17 e 18

| Art. | Crime | Conduta nuclear | Elementar decisiva | Notas |
|---|---|---|---|---|
| **17** | Comércio ilegal de arma de fogo | Adquirir, alugar, receber, transportar, conduzir, ocultar, ter em depósito, desmontar, montar, remontar, adulterar, vender, expor à venda **no exercício de atividade comercial ou industrial** | **Mercancia / habitualidade** (fim comercial) | **Hediondo**; pena elevada pelo Anticrime — conferir via `lei-e-sumula`; §§ 1º e 2º com equiparações e formas |
| **18** | Tráfico internacional de arma de fogo | Importar, exportar, favorecer a entrada/saída do território nacional, a qualquer título, de arma, acessório ou munição, sem autorização da autoridade competente | **Transnacionalidade** (cruzar fronteira) | **Hediondo**; **competência da Justiça Federal** (CF, art. 109) |

- **Objeto material amplo:** os tipos alcançam **arma de fogo, acessório e munição** — e a arma pode ser de **uso permitido, restrito ou proibido**. A classificação não é elementar do 17/18 (diferente do art. 16), mas repercute em majorante e dosimetria.
- **Parágrafo único / §§:** o art. 17 tem formas equiparadas e o Anticrime introduziu **causa de aumento quando a arma for de uso proibido/restrito** e outras hipóteses — **confira a redação atual via `lei-e-sumula`** (não transcreva de memória; o texto mudou em 2019).
- **Norma penal em branco:** o que é "sem autorização" depende do regime administrativo (SINARM/SIGMA, Comando do Exército, Polícia Federal na importação). O marco atual é o **Decreto 11.615/2023** — a confirmar ponto a ponto.

## Metodologia de enquadramento — quatro perguntas antes de redigir

Responda **na ordem**; cada resposta abre ou fecha a hediondez.

| # | Pergunta | O que define | Onde buscar nos autos |
|---|---|---|---|
| 1 | **Há prova de MERCANCIA (art. 17)?** | Comércio exige **atividade comercial/industrial ou habitualidade** — vender, expor à venda, ter em depósito com fim de venda. Um exemplar apreendido, sem indícios de negócio, é porte/posse, **não** comércio | Estoque, balança, embalagens, anúncios, mensagens de negociação, contabilidade, testemunhas de compradores, reiteração |
| 2 | **Há prova de TRANSNACIONALIDADE (art. 18)?** | Tráfico exige **cruzamento efetivo de fronteira** ou favorecimento de entrada/saída. Arma estrangeira apreendida no interior, sem prova do ingresso pelo agente, tende a ser porte/posse (ou receptação) | Local da apreensão vs. fronteira, rota, apreensão na alfândega, origem da arma, laudo, interceptações, colaboração |
| 3 | **Qual a classificação da arma?** | Permitido × restrito × **proibido** — repercute em **majorante** e na dosimetria (e no debate sobre concurso com o art. 16, §2º) | Laudo pericial; decreto vigente (`lei-e-sumula`) |
| 4 | **Quantidade, dolo e autoria?** | Volume e contexto sustentam (ou não) o fim comercial; residência/veículo compartilhado exige **individualização** de quem detinha o poder de disposição | Auto de apreensão, depoimentos, titularidade, interceptações, quebra de sigilo |

> **Regra de ouro da capitulação:** comércio e tráfego são os tipos que o MP mais **presume** a partir de indícios frágeis (quantidade, arma estrangeira). O primeiro parágrafo do mérito confronta a **narrativa fática da denúncia** com a **elementar que falta** — mercancia (17) ou transnacionalidade (18). Faltando a elementar, o pedido é **desclassificação** para o tipo comum (14/16), com **queda da hediondez**.

## Estrutura forense — onde apresentar as teses

As teses se encaixam nos mesmos veículos da defesa criminal; a moldura completa de cada peça está na skill própria (`resposta-acusacao`, `memoriais`, `habeas-corpus`). Aqui, **o que muda** nos arts. 17 e 18:

**1. Resposta à acusação / defesa preliminar** — arguir desde já a **inépcia** (denúncia que afirma "comércio" ou "tráfico" sem descrever a mercancia/transnacionalidade é genérica — combine com `inepcia-denuncia-generica`), a **desclassificação** e, se cabível, a **absolvição sumária** por atipicidade (CPP 397, III). Requerer o **laudo pericial** e a produção que comprove (ou não) a atividade comercial e a origem transnacional.

**2. Memoriais / alegações finais** — o veículo principal da **desclassificação** (17→14/16; 18→14/16 ou receptação) por fragilidade da prova do fim comercial ou do ingresso pela fronteira. Cumular em ordem sucessiva: absolvição → desclassificação → afastamento de majorantes → dosimetria mínima (agente `dosimetria-pena`).

**3. Habeas corpus** — para **trancamento** por atipicidade manifesta (nenhum indício de mercancia/transnacionalidade), para atacar prisão fundada em **capitulação inflada** (hediondez indevida) e para questionar **competência** (federal × estadual no art. 18). Combine com `liberdade-provisoria-relaxamento` quando houver custódia — a hediondez pesa na cautelar, e derrubá-la é meio caminho para a soltura.

```
BLOCO-PADRÃO DA TESE DE COMÉRCIO/TRÁFICO (adaptar ao veículo):

I — DA ELEMENTAR AUSENTE (o coração da defesa)
   [Art. 17: não há prova de atividade comercial/habitualidade — um exemplar,
    sem estoque/anúncio/reiteração, é porte/posse, não comércio];
   [Art. 18: não há prova de cruzamento de fronteira pelo agente — arma
    estrangeira no interior não presume tráfico internacional].

II — DA DESCLASSIFICAÇÃO E QUEDA DA HEDIONDEZ
   Reclassificação [17→14/16] ou [18→14/16 ou receptação — CP 180];
   reflexos: afastamento da hediondez, mudança de regime/progressão,
   reabertura de ANPP/negocial, revisão da prisão cautelar.

III — DA COMPETÊNCIA (art. 18)
   Ausente a transnacionalidade, cessa a competência da Justiça Federal
   (CF, art. 109) — remessa à Justiça Estadual; discutir também eventual
   nulidade dos atos praticados por juízo incompetente.

IV — DAS MAJORANTES (arts. 19-20) E DA DOSIMETRIA
   Afastar aumento por arma de uso proibido/restrito não comprovado;
   confrontar quantidade e circunstâncias; pleitear o mínimo.

V — DA PROVA
   Ilicitude de interceptações/quebras sem autorização idônea; laudo
   pericial; cadeia de custódia (skill `cadeia-de-custodia`).
```

## Banco de teses defensivas

- **Ausência de mercancia (art. 17 → 14/16).** O comércio ilegal exige **atividade comercial/industrial ou habitualidade** com fim de venda. Apreensão de **uma ou poucas armas**, sem estoque, anúncios, balança, embalagens de revenda, contabilidade ou reiteração de vendas, **não** configura comércio — amolda-se a porte (14) ou posse/uso restrito (16). É a tese mais forte e mais frequente; o MP tende a presumir mercancia pela quantidade. Estado da jurisprudência sobre "quantas armas presumem comércio" via `jurisprudencia-stj-stf` — marque [NÃO VERIFICADO].
- **Ausência de transnacionalidade (art. 18 → 14/16 ou receptação).** O tráfico internacional exige **cruzamento efetivo de fronteira** ou favorecimento comprovado da entrada/saída **pelo próprio agente**. Arma de **origem estrangeira** apreendida no interior do país, sem prova de que o acusado a importou, tende a configurar **porte/posse** (14/16) ou, conforme o caso, **receptação (CP 180)** — não tráfico. A origem estrangeira da arma é indício de fabricação no exterior, **não** de importação pelo réu. Pesquise o estado da tese via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Contrabando (CP 334-A) × tráfico de arma (art. 18) — especialidade.** A entrada de arma sem autorização é regida pelo **art. 18 da Lei 10.826** (norma especial), que **afasta** o contrabando genérico do art. 334-A do CP quando o objeto é arma/acessório/munição. Discutir o tipo aplicável tem reflexo em pena e competência — confira a redação vigente e a jurisprudência via `lei-e-sumula` e `jurisprudencia-stj-stf`.
- **Hediondez contida — não estender ao que a lei não previu.** Comércio (17) e tráfico (18) são hediondos por força do art. 1º, parágrafo único, da Lei 8.072/90 (a confirmar). **Não aceite** que a etiqueta "hediondo" contamine desclassificações para o art. 14 (porte simples, **não** hediondo) ou art. 16 caput (uso restrito — **não** hediondo; só o §2º, proibido, é). A queda de um degrau na capitulação derruba a hediondez inteira. Confira o rol via `lei-e-sumula`.
- **Concurso × crime único × absorção.** Apreensão de várias armas/munições **no mesmo contexto e com o mesmo fim comercial** tende a **crime único** (não concurso material). O porte de exemplar do mesmo acervo pode ser **absorvido** pelo comércio (consunção). Já a arma **a serviço do tráfico de drogas** pode virar **majorante da Lei 11.343 (art. 40, IV)** em vez de crime autônomo — calcule o que for melhor ao réu (agente `dosimetria-pena`). Teses sensíveis a fato concreto: pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Majorante de arma proibida/restrita não comprovada (arts. 19-20).** O Anticrime introduziu **causas de aumento** (inclusive por uso proibido/restrito e por agente de segurança pública) — **conferir a redação vigente via `lei-e-sumula`**. Sem **laudo** que ateste a classificação restrita/proibida, a majorante não incide; a dúvida favorece a ausência do aumento. Ataque a incidência automática.
- **Autoria e domínio do fato.** Comércio e tráfego são frequentemente imputados a **vários integrantes** de um esquema — a responsabilidade é subjetiva e exige prova do **poder de disposição** e do **liame associativo** de cada um. Denúncia que imputa o 17/18 a todos os presentes pela mera apreensão coletiva é genérica (combine com `inepcia-denuncia-generica`). O campo probatório é a individualização (interceptações, contabilidade, testemunho de comprador). Estado da arte via `jurisprudencia-stj-stf`; marque [NÃO VERIFICADO].
- **Prova ilícita — interceptações, quebras e cadeia de custódia.** Comércio e tráfego costumam nascer de **interceptação telefônica/telemática** e **quebra de sigilo**; autorização genérica, prorrogações sem fundamentação idônea ou desvio de finalidade contaminam a prova. Some a **quebra da cadeia de custódia** da arma/munição apreendida (CPP 158-A a 158-F — skill `cadeia-de-custodia`). Prova ilícita pode derrubar a materialidade inteira. Estado da arte via `jurisprudencia-stj-stf`.
- **Arma inapta / objeto material.** Se o **laudo de eficácia** atesta inaptidão absoluta ao disparo, discute-se **crime impossível** quanto ao exemplar; a tese é mais frágil no comércio (o bem jurídico e a mercancia persistem), mas soma na dosimetria. Munição/acessório têm regime próprio — não confunda com a arma. (Fundamentos de eficácia e crime impossível detalhados na skill `posse-porte-arma`.)
- **Erro de tipo / erro de proibição.** Os crimes do Estatuto **não têm modalidade culposa**; erro sobre elementar (ex.: quem transporta acreditando ser objeto lícito, ou desconhece a origem estrangeira) exclui o dolo. Tese casuística e probatória — não confunda erro de tipo (CP 20, atipicidade) com erro de proibição (CP 21, isenção/redução).
- **Justiça negocial — o teto do ANPP.** Comércio e tráfego têm **pena mínima em regra ≥ 4 anos** (conferir via `lei-e-sumula`) e são **hediondos** — o que **inviabiliza o ANPP** (CPP 28-A veda para pena mínima ≥ 4 anos). É outro **dividendo prático da desclassificação**: reconduzido o fato ao art. 14/16 caput, reabre-se a janela do ANPP (e, no 14, do próprio acordo). Primeiro o enquadramento, depois a negociação — jamais confessar comércio/tráfico desclassificável.

## Súmulas e precedentes — sob o Citation Gate

> **Regra inegociável:** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer** número de HC/REsp/RE, informativo ou tema **sem certeza absoluta** entra como **[NÃO VERIFICADO]** e é conferido via `jurisprudencia-stj-stf` antes de ir à peça. Prefira ensinar a **tese e o dispositivo** a arriscar um acórdão.

- **CF, art. 109** — fixa a **competência da Justiça Federal** para o tráfico internacional (art. 18): ausente a transnacionalidade, a competência é **estadual**. Dispositivo constitucional — citável com certeza.
- **Lei 8.072/90, art. 1º, parágrafo único** — inclui comércio (17) e tráfico (18) de arma **no rol dos hediondos** (a confirmar a redação vigente via `lei-e-sumula`).
- **Enunciado de súmula sobre abolitio criminis temporária [NÃO VERIFICADO]** — há entendimento sumular do STJ sobre o período de vacatio/abolitio temporária dos prazos de regularização de posse (arts. 30-32 do Estatuto), historicamente relevante para **posse**, que em regra **não** alcança comércio/tráfico. **Não afirme número, teor nem a data-limite de memória — nem confunda a abolitio temporária com o tipo distinto de arma de numeração suprimida (art. 16, § único, IV):** confira o número e o exato alcance do enunciado via `jurisprudencia-stj-stf` e a linha do tempo dos prazos via `lei-e-sumula` antes de invocar. Sempre mapeie a **data do fato**.
- **ADI 3112/STF** — o STF, em controle concentrado, declarou inconstitucionais dispositivos do Estatuto do Desarmamento — **julgado notório** de existência certa. **Quais dispositivos foram atingidos (p. ex. inafiançabilidade e vedação de liberdade provisória originais) fica [NÃO VERIFICADO]:** confira o teor exato do decidido via `jurisprudencia-stj-stf` antes de invocar contra a hediondez/cautelar dos arts. 17-18.
- **Teses vivas a pesquisar (sempre [NÃO VERIFICADO] até conferir):** quantidade mínima que caracteriza comércio; suficiência da origem estrangeira para o art. 18; especialidade do art. 18 frente ao contrabando (CP 334-A); crime único na pluralidade de armas com fim comercial; alcance das majorantes dos arts. 19-20 pós-Anticrime; retroatividade de reclassificação de calibre. **Nenhuma delas entra na peça sem conferência via `jurisprudencia-stj-stf`.**

## Erros comuns e pegadinhas

- **Aceitar "comércio" sem prova de mercancia.** Quantidade, por si só, não é atividade comercial. Sem estoque, anúncio, contabilidade ou reiteração, o fato é porte/posse — exija a desclassificação e a queda da hediondez.
- **Confundir arma estrangeira com tráfico.** Origem estrangeira prova fabricação no exterior, **não** importação pelo réu. Sem prova do cruzamento de fronteira **pelo agente**, o art. 18 não fecha — é porte/posse ou receptação.
- **Deixar passar a competência.** Sem transnacionalidade, o art. 18 é **incompetência da Justiça Federal** — arguir a remessa e a eventual nulidade dos atos do juízo incompetente.
- **Aceitar a hediondez por arrasto.** Desclassificado o fato para o art. 14 (ou 16 caput), **cai a hediondez** — não conceda regime/progressão de hediondo ao tipo comum.
- **Confessar para ANPP antes de atacar a capitulação.** ANPP exige **confissão formal e circunstanciada** (CPP 28-A); confessar comércio/tráfego (hediondo, mínima alta) trava a desclassificação e, ainda assim, **não** viabiliza o acordo (vedado a hediondo/pena ≥ 4 anos). Primeiro o enquadramento.
- **Ignorar a cadeia de custódia e a prova ilícita.** Nesses crimes a prova costuma vir de interceptação/quebra e de apreensão de grande volume — vícios de autorização e de custódia (CPP 158-A ss.) derrubam a materialidade. Argua no primeiro veículo.
- **Aferir a lei/decreto pela data errada.** Pena, majorantes e classificação de calibre se aferem pela **data do fato** (teoria da atividade — CP, art. 4º); em crime permanente, pela cessação da permanência. Reconstitua a linha do tempo antes de invocar lei mais benéfica.
- **Citar decreto revogado ou pena de memória.** O regime de armas é o terreno mais móvel do direito penal; o Anticrime mudou penas e majorantes. **Nada de decreto/pena/súmula sem conferência via `lei-e-sumula`.**
- **Tratar tudo como concurso material.** Várias armas com o mesmo fim comercial e no mesmo contexto tendem a **crime único** — não aceite a soma automática de penas.

## Checklist antes de protocolar

- [ ] **Elementar conferida:** há prova de **mercancia** (art. 17) ou de **transnacionalidade** (art. 18)? Faltando, pedido de **desclassificação** formulado?
- [ ] **Capitulação** confrontada com a narrativa fática da denúncia (mercancia/transnacionalidade descritas ou apenas presumidas)?
- [ ] **Hediondez** discutida — e afastada na hipótese de desclassificação para 14/16 caput?
- [ ] **Competência** (art. 18) verificada — federal só com transnacionalidade (CF, art. 109)?
- [ ] **Laudo pericial** nos autos (classificação, eficácia, origem) — requerido se ausente?
- [ ] **Majorantes (arts. 19-20)** conferidas na **redação vigente** (`lei-e-sumula`) e atacadas se não comprovadas?
- [ ] **Concurso × crime único × absorção** avaliados (mesmo contexto e fim)?
- [ ] **Prova ilícita** (interceptação/quebra) e **cadeia de custódia** (CPP 158-A ss.) arguidas no primeiro veículo?
- [ ] **Autoria individualizada** (poder de disposição/liame associativo) — atacada a denúncia genérica?
- [ ] **ANPP/negocial** avaliado **após** a desclassificação, nunca com confissão do tipo grave?
- [ ] **Penas, decretos e súmulas** conferidos via `lei-e-sumula`; **precedentes** via `jurisprudencia-stj-stf` (Citation Gate) — nada de memória; o não confirmado saiu ou está **[NÃO VERIFICADO]**?
- [ ] **Revisão humana** do advogado responsável realizada antes de protocolar?

## Apoie-se em

- **Skill `posse-porte-arma`** — os arts. 12-16 (posse, porte, disparo, uso restrito/proibido), o destino natural das desclassificações e o detalhamento de laudo de eficácia, crime impossível e abolitio temporária.
- **Skill `inepcia-denuncia-generica`** — ataque à denúncia que presume mercancia/transnacionalidade e não individualiza a autoria.
- **Skill `cadeia-de-custodia`** — vícios na apreensão e no trâmite da arma/munição (CPP 158-A a 158-F), decisivos no grande volume.
- **Skill `liberdade-provisoria-relaxamento`** — soltura, com a hediondez (e sua derrubada) no centro da cautelar.
- **Skills `resposta-acusacao`, `memoriais`, `habeas-corpus`** — as molduras completas dos três veículos onde estas teses vivem.
- **Agente `lei-e-sumula`** — redação vigente dos arts. 17-20 pós-Anticrime, do rol de hediondos (Lei 8.072/90) e do Decreto 11.615/2023.
- **Agente `jurisprudencia-stj-stf`** — estado atual das teses vivas: quantidade × comércio, origem estrangeira × tráfico, especialidade frente ao contrabando, crime único, competência.
- **Agente `dosimetria-pena`** — reflexos da desclassificação, das majorantes (arts. 19-20) e do concurso na pena, no regime e na negociação.
- **Skill `redacao-persuasiva-criminal`** — padrão de redação de toda peça: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).

## Nota de conformidade

Todo o produto desta skill é **rascunho técnico sob revisão humana obrigatória** — hipótese a confirmar antes de protocolar. A responsabilidade pela peça e pelas teses é sempre do **advogado** (CED/EAOAB; Provimento 205/2021 quanto à publicidade). **Nenhuma súmula, tese ou acórdão é citado de memória:** dispositivos e súmulas notórias com certeza; qualquer precedente específico passa pelo Citation Gate (`jurisprudencia-stj-stf`) e o não confirmado sai da peça ou fica **[NÃO VERIFICADO]**. Dados do assistido observam sigilo e LGPD (nunca em repositório público).
