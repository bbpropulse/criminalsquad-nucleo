---
name: tecnica-oratoria-forense-audiencia
description: >-
  Use ao preparar SUSTENTAÇÃO ORAL criminal — debates da instrução (CPP art. 403), memoriais orais,
  sustentação em tribunal e plenário do júri (arts. 476-481): estrutura da fala
  (abertura-desenvolvimento-fecho), controle de tempo e priorização, dicção/ritmo/pausa, uso do
  silêncio e da ênfase, réplica e tréplica reativas, adequação ao auditório (juiz técnico x jurado
  leigo), gestão do nervosismo e prerrogativas (Lei 8.906/94)… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, oratoria, audiencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["tecnica-oratoria-forense-audiencia", "tecnica oratoria", "forense audiencia"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-tecnica-oratoria-forense-audiencia"]
---

# Técnica de oratória forense em audiência e tribunal

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

Esta skill é um **craft** — técnica de fala aplicada ao foro criminal. Não decide o mérito nem substitui a tese: **organiza a entrega** da tese já construída (em `argumentacao-persuasao-retorica-juridica` e nos memoriais) para os três palcos da voz do advogado criminal — os **debates da instrução** (CPP, art. 403), a **sustentação oral** perante tribunal e o **plenário do júri** (CPP, arts. 476-481). O polo aqui é **transversal**: a técnica serve à defesa e à acusação; muda a direção, não o método.

> **Lição central:** oratória forense **não é eloquência, é seleção**. Ninguém decide por causa da frase bonita; decide-se pela **prova dos autos organizada em uma tese clara e memorável**. Antes de qualquer floreio, pergunte três coisas: (1) **quanto tempo eu tenho e o que corto** — priorize um a três pontos decisivos e descarte o resto; (2) **quem é o auditório** — juiz togado (lógica, subsunção, autos) ou jurado leigo (narrativa, imagem, senso comum); (3) **o que quero que fique** quando eu me calar — a frase-âncora que o julgador leva para a decisão. Fala boa é a que **cabe no tempo, mira o auditório certo e deixa um resíduo**.

> **Cautela (craft, não mérito):** esta é uma skill de **técnica** — **não gera citação de mérito** e **não afirma tese jurídica**. Qualquer **exemplo jurisprudencial** usado para ilustrar (ex.: leitura de precedente da tribuna, tese de nulidade) passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes de ir à sustentação — nada de acórdão "de cabeça" na tribuna. Da mesma forma, **prazos e limites de tempo** (art. 403 e art. 477) já sofreram alterações legislativas: **confira a redação vigente** antes de dimensionar a fala. Regra de ouro da tribuna: **omitir vence inventar** — não se lê o que não está nos autos nem se cita o que não foi conferido.

## Base legal (moldura da fala oral)

- **CPP, art. 403** — encerrada a instrução e não havendo diligências, as partes oferecem **alegações finais orais** (debates), **por 20 minutos cada**, prorrogáveis por mais 10, e o juiz sentencia a seguir; o **§3º** faculta a conversão em **memoriais escritos** quando a complexidade recomendar. É o palco ordinário da sustentação de 1º grau. *(Confira redação e prazos vigentes.)*
- **CPP, arts. 476-481 (plenário do júri)** — sequência e disciplina dos **debates** perante o Conselho de Sentença:
  - **art. 476-477** — ordem da palavra (acusação, depois defesa) e **tempo**: em regra **1h30 para cada parte** e **1h para réplica e tréplica**; havendo **mais de um acusado**, o tempo é acrescido *(conferir o cômputo vigente)*.
  - **art. 478** — **vedações na tribuna**: as partes **não podem** usar como argumento de autoridade a **decisão de pronúncia** (e decisões posteriores que julgaram admissível a acusação), o **silêncio do acusado** ou a ausência de interrogatório em seu prejuízo.
  - **art. 479** — **não se lê nem se exibe** documento ou objeto que **não tenha sido juntado aos autos com antecedência mínima de 3 dias úteis**, com ciência à outra parte. Vale para mídia e "provas de surpresa".
  - **arts. 480-481** — **apartes**, pedidos de esclarecimento pelos jurados e providências quando surge questão que reclame explicação.
- **Lei 8.906/94 (Estatuto da Advocacia e da OAB), art. 7º** — **prerrogativas** que garantem a fala: usar da palavra, **sustentar oralmente**, comunicar-se com o cliente, não ser interrompido ou desrespeitado no exercício da profissão. A prerrogativa é **escudo da tribuna** — invocá-la com serenidade, não como bravata. *(Artigo alterado várias vezes; conferir a redação atual.)*
- **Interface** — a tese vem de `argumentacao-persuasao-retorica-juridica` e dos **memoriais**; o **cálculo** e a **prova** vêm das skills próprias. Esta skill cuida só da **entrega**.

## Método — a arquitetura de toda fala forense

Toda sustentação, do debate de 20 minutos à tréplica do júri, tem a mesma espinha: **abertura → desenvolvimento → fecho**. O erro comum é dedicar 80% do tempo ao desenvolvimento e improvisar os dois extremos, que são justamente os que o julgador mais retém (efeitos de **primazia** e **recência**).

1. **Abertura (10-15% do tempo) — fisgar e enquadrar.** Uma frase que anuncia a **tese em uma linha** e o **pedido**. Não comece por "Excelências, o processo em tela versa sobre…"; comece pelo eixo: *"A acusação pede condenação por um fato que a prova dos autos não sustenta — e é isso que passo a demonstrar em três pontos."* Enquadrar cedo diz ao julgador **o que ouvir**.
2. **Desenvolvimento (65-75%) — poucos pontos, cada um ancorado.** Escolha **um a três** argumentos decisivos. Para cada um: **afirmação → prova dos autos (fls./mídia/depoimento) → inferência → conclusão parcial**. Separe sempre **fato, prova, inferência e tese** — a tribuna que mistura os quatro soa como opinião, não como demonstração. Numere em voz alta ("primeiro… segundo… terceiro…"): a **enumeração** organiza a escuta e cria sensação de completude.
3. **Fecho (15-20%) — o resíduo.** Retome a tese em nova roupagem, formule o **pedido de forma explícita** (absolvição, desclassificação, dúvida razoável) e **encerre em alta**, não com "era o que tinha a dizer". A última frase é a que entra na sala de deliberação — construa-a antes de subir à tribuna.

> **Regra da priorização:** o tempo é **inimigo e aliado**. Antes de falar, escreva os pontos e **corte impiedosamente** até caber com folga. Fala que estoura o tempo é interrompida no clímax; fala que sobra tempo dilui o impacto. **Menos pontos, melhor sustentados, vencem mais.**

## Roteiro tático por fase

1. **Debates da instrução (CPP, art. 403) — 20 minutos.** Palco técnico, auditório **togado**. Vá direto à **subsunção** e à **prova produzida na audiência que acabou de ocorrer** (a memória do juiz está fresca — explore-a). Abra pela tese, ataque **um** eixo probatório central, conclua com o pedido. **Avalie a conversão em memoriais (§3º)** quando o caso for complexo, houver muitos réus, prova extensa ou você precisar de tempo para a subsunção fina — a palavra falada improvisada raramente supera o memorial escrito e revisado nesses casos. **Decisão estratégica, não default.**
2. **Memoriais orais / sustentação em tribunal (2º grau).** Auditório togado e, muitas vezes, **colegiado**. Tempo curto e cronometrado. Fale para o **relator e o revisor**, mas persuada **todos**. Não releia o recurso — **destaque os dois ou três pontos** em que o acórdão recorrido ou a sentença erraram, com **remissão precisa a fls.**. Prepare-se para **apartes e perguntas** dos julgadores: a resposta calma a uma pergunta vale mais que dez minutos de fala corrida.
3. **Plenário do júri (arts. 476-481) — a arena da narrativa.** Auditório **leigo e emocional**. Aqui a **história** organiza a prova: personagens, cronologia, imagem concreta. **Emoção legítima, sim; apelo ao ilícito, nunca** — respeite as **vedações do art. 478** (não usar a pronúncia como selo de culpa, nem o silêncio do réu contra ele) e a **regra do art. 479** (nada de documento/mídia não juntado com 3 dias úteis de antecedência). Prepare a **réplica** como bloco reativo (ver adiante). No júri, **repetição é técnica**: a tese-âncora volta três vezes, com palavras diferentes.

## Preparação pré-audiência — a fala boa nasce antes da sala

A improvisação de alto nível é **preparação disfarçada**. O que parece espontaneidade na tribuna é, quase sempre, ensaio.

- **Roteiro em tópicos, nunca texto corrido.** Escreva a fala em **bullets** com as palavras-gatilho de cada ponto; ler texto corrido mata o contato visual e engessa o ritmo. Exceção: **a primeira e a última frase**, que valem decorar ao pé da letra.
- **Mapa dos autos à mão.** Antes de subir, tenha a **remissão precisa** dos pontos que vai invocar — folha, minuto da mídia, nome da testemunha. Procurar fls. na tribuna quebra o fluxo e a autoridade.
- **Ensaio em voz alta e cronometrado.** Fale o roteiro em voz alta, com **cronômetro**, ao menos duas vezes. É no ensaio que se descobre o que estoura o tempo e onde a frase trava. Ensaiar mentalmente **não** substitui ensaiar com a voz.
- **Antecipe a fala do adversário.** Liste os **dois ou três argumentos mais fortes** que a parte contrária usará e prepare a resposta — no júri isso alimenta a réplica; na instrução, antecipa a contra-tese na própria sustentação.
- **Cheque o palco.** Saiba quanto tempo terá, quem julga (togado, colegiado, Conselho), se haverá mídia a exibir (e se cumpre o prazo do art. 479) e onde ficará de pé. Surpresa logística vira nervosismo.

## Adequação ao auditório (a mesma tese, duas línguas)

| Dimensão | Juiz togado (instrução, tribunal) | Jurado leigo (plenário) |
|---|---|---|
| **Lógica dominante** | subsunção, técnica, prova nos autos | narrativa, senso comum, imagem |
| **Estrutura** | tese → fundamento legal → prova → pedido | história → conflito → virada → pedido |
| **Linguagem** | técnica precisa, remissão a fls. e dispositivos | concreta, cotidiana, sem juridiquês |
| **Prova** | citada por folha e detalhada | mostrada, encenada, tornada visível |
| **Emoção** | contida, a serviço da lógica | central, mas **jamais** apelo ao ilícito |
| **Risco típico** | prolixidade e leitura de peça | superficialidade e demagogia |

➡️ **Erro clássico:** falar para o jurado como se fala para o juiz (frio, técnico, ilegível) — ou falar para o juiz como se fala ao jurado (emotivo, sem subsunção). **Diagnostique o auditório antes de escolher a língua.**

## Entrega — voz, ritmo, corpo e silêncio

A mesma frase persuade ou naufraga conforme a **entrega**. Trabalhe deliberadamente:

- **Dicção e volume** — articule; projete sem gritar. A tribuna trêmula ou sussurrada perde o Conselho e cansa o juiz.
- **Ritmo e pausa** — varie a velocidade. **Acelere** no que é secundário; **desacelere** no ponto decisivo. A **pausa antes** da frase-chave cria expectativa; a **pausa depois** deixa o argumento assentar.
- **Silêncio como ênfase** — dois segundos de silêncio após uma pergunta retórica pesam mais que qualquer adjetivo. Domine o desconforto do silêncio; ele é seu.
- **Ênfase seletiva** — se tudo é grave e sublinhado, nada é. **Marque no roteiro** as três frases que merecem peso e entregue as demais em tom neutro.
- **Linguagem corporal** — postura firme, contato visual (com o **juiz** na instrução; com **os jurados, um a um**, no plenário), gesto que acompanha a palavra sem agitação. Mãos visíveis e calmas transmitem convicção.
- **Gestão do nervosismo** — respiração diafragmática antes de subir; **as primeiras frases decoradas** (o pânico ataca no início); água à mão; anotações em **tópicos**, nunca texto corrido para ler. Nervosismo controlado vira energia; nervosismo negado vira gagueira.

## Réplica e tréplica no júri — o bloco reativo

A réplica não se escreve antes; ela **responde**. Prepare-a como **método**, não como texto:

1. **Anote enquanto o adversário fala** — capture as **duas ou três afirmações mais fortes** dele e os **pontos onde ele exagerou ou saiu da prova**.
2. **Ataque a espinha, não as unhas** — refute o **argumento central** da acusação/defesa contrária; ignorar o ponto forte para rebater detalhes soa como fuga.
3. **Devolva à prova dos autos** — a cada afirmação do adversário, oponha **o que os autos efetivamente dizem** (fls./depoimento). "Foi dito que X; os autos, porém, mostram Y."
4. **Reancore a tese** — a tréplica encerra o ciclo: retome a **frase-âncora** e o **pedido**, agora fortalecidos por terem sobrevivido ao debate.
5. **Respeite tempo e vedações** — o cronômetro corre (art. 477); as vedações do art. 478 valem também na réplica/tréplica. **Não invente prova nova** que a parte contrária não poderá contraditar.

## Vedações, prerrogativas e ética da tribuna

- **Vedações do art. 478 (júri)** — não transformar a **pronúncia** em atestado de culpa nem usar o **silêncio** do réu contra ele. Violação gera nulidade e é **antitécnica**, não "esperteza".
- **Regra do art. 479** — nada de documento, vídeo ou objeto **não juntado com 3 dias úteis** de antecedência. Prova de surpresa na tribuna é **impugnável** — e a impugnação da parte contrária destrói o efeito que você buscava.
- **Prerrogativas (Lei 8.906/94, art. 7º)** — o direito de sustentar oralmente e de não ser interrompido é **escudo**; invoque-o com **firmeza serena** e registro em ata quando cerceado. Bravata desgasta; o registro protege a nulidade.
- **Limite ético do apelo emocional** — comover é legítimo; **mentir, distorcer a prova, ofender gratuitamente a vítima ou o adversário, não**. A revisão profissional cobra **lastro fático** em cada afirmação da tribuna.

## Exemplos jurisprudenciais (sob Citation Gate)

> **Esta é uma skill de técnica: não cita mérito.** Quando a sustentação **precisar** invocar precedente (tese de nulidade por violação do art. 478, cabimento de determinada preliminar, alcance de uma vedação), o exemplo **passa antes** pela skill `jurisprudencia-stj-stf` — **tese + dispositivo conferidos**, marcados como **[NÃO VERIFICADO]** até a checagem. **Ler acórdão de memória na tribuna é o erro que mais compromete a credibilidade** e pode gerar sanção. Regra: **verifique fora da tribuna, cite dentro com segurança.**

## Checklist e anti-padrões

- [ ] **Tempo** dimensionado e a fala **cortada** para caber com folga (art. 403: 20+10; júri: art. 477)?
- [ ] **Auditório** diagnosticado (togado x jurado) e a "língua" escolhida coerente?
- [ ] **Um a três pontos** decisivos, cada um ancorado em **prova dos autos** (fls./mídia/depoimento)?
- [ ] **Abertura** com tese em uma linha e **fecho** com pedido explícito e frase-âncora?
- [ ] No júri, **vedações do art. 478** respeitadas e nenhuma prova nova sem os **3 dias úteis** do art. 479?
- [ ] **Réplica/tréplica** preparada como método reativo (anotar → refutar a espinha → devolver aos autos → reancorar)?
- [ ] **Entrega** ensaiada (pausa, ênfase, contato visual) e **primeiras frases decoradas**?
- [ ] Considerou **converter debates em memoriais** (art. 403, §3º) se a complexidade recomendar?
- [ ] Todo **precedente** de ilustração passou por `jurisprudencia-stj-stf` — **nada de memória na tribuna**?

**Anti-padrões (evitar):**
- **Ler a peça** em voz alta em vez de sustentar — a tribuna é síntese, não leitura.
- **Falar tudo**: sem priorizar, o ponto decisivo se afoga no acessório.
- **Estourar o tempo** e ser cortado no clímax; ou **sobrar tempo** e diluir o impacto.
- **Uma só língua para dois auditórios** — juridiquês para o jurado, ou demagogia para o juiz togado.
- **Apelo ao ilícito no júri** — usar a pronúncia como selo de culpa, o silêncio contra o réu, ou surpresa documental (arts. 478-479).
- **Improvisar réplica** sem anotar o que o adversário disse — reage-se ao detalhe e perde-se a espinha.
- **Citar acórdão de memória** na tribuna — o tiro sai pela culatra e mancha a credibilidade.
- **Negar o nervosismo** em vez de prepará-lo — decore o início, respire, use tópicos.

## Nota de conformidade

- **Rascunho metodológico para revisão humana obrigatória.** Esta skill organiza a **entrega** da fala; **não define a tese** nem substitui o preparo do(a) advogado(a) responsável (CED/EAOAB). A sustentação final é ato privativo e pessoal do profissional.
- **Polo transversal:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. A técnica serve a **defesa e acusação** — atuando pela **acusação/Ministério Público**, a mesma arquitetura vale, mas o **ônus probatório é seu**: cada afirmação da tribuna deve estar coberta pela prova dos autos, sob pena de a defesa desmontá-la na réplica.
- **Citation Gate:** nenhum precedente ou súmula vai à tribuna sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há **sanção real** por jurisprudência inventada.
- **Ética e prerrogativas:** apelo emocional é legítimo, distorção da prova e ofensa gratuita não; invoque as prerrogativas (Lei 8.906/94) com serenidade e registro em ata quando cerceado.
- **Sigilo/LGPD:** dados do assistido e da vítima não vão a repositório público; observe o **segredo de justiça** quando incidir.

## Lembretes finais

- **Seleção, não eloquência** — poucos pontos, cada um ancorado na prova dos autos.
- **Abertura fisga, fecho fica** — construa a primeira e a última frase antes de subir à tribuna.
- **Cronômetro é estratégia** — corte para caber; no júri, art. 477; na instrução, art. 403 (20+10) ou memoriais (§3º).
- **Diagnostique o auditório** — togado pede subsunção; jurado pede narrativa.
- **Réplica é método reativo** — anote, refute a espinha, devolva aos autos, reancore.
- **Vedações do júri** (arts. 478-479) e **prerrogativas** (Lei 8.906/94) são técnica, não formalidade.
- **Fora da tribuna se verifica, dentro se cita com segurança** — precedente só depois de `jurisprudencia-stj-stf`.

**Integração:** a **tese** e a estrutura persuasiva vêm de `argumentacao-persuasao-retorica-juridica`; o **texto escrito** (memoriais, razões) de `redacao-persuasiva-criminal`; a **verificação** de `jurisprudencia-stj-stf`. Esta skill entrega a **voz** — as demais entregam o **conteúdo**.
