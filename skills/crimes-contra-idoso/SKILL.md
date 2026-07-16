---
name: crimes-contra-idoso
description: >-
  Use ao atuar nos crimes próprios do Estatuto da Pessoa Idosa (Lei 10.741/2003, arts. 95 a 108,
  denominação atualizada pela Lei 14.423/2022): abandono, maus-tratos, apropriação de
  bens/proventos, negativa de acolhimento, retenção de cartão ou documento; a ação penal pública
  incondicionada (art. 95), o rito processual do art. 94 e a controvérsia sobre a aplicação da Lei
  9.099/95 aos crimes com pena não superior a 4 anos, a… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, idoso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-crimes-contra-idoso"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["crimes-contra-idoso", "crimes contra", "contra idoso"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Crimes contra a Pessoa Idosa (Lei 10.741/2003, arts. 95 a 108)

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

Esta skill orienta a atuação nos **crimes próprios do Estatuto da Pessoa Idosa** — a parte penal da Lei 10.741/2003 (arts. 95 a 108; a denominação "Estatuto da Pessoa Idosa" veio com a Lei 14.423/2022) —, do enquadramento típico às teses defensivas, ao rito do art. 94 e à eventual atuação do assistente em favor da vítima idosa. O que mora **aqui** são os tipos penais **específicos** do Estatuto e suas regras processuais próprias. O que **não** mora aqui: o crime **comum** praticado contra idoso (homicídio, lesão, estelionato, apropriação indébita do CP) resolve-se pelo tipo comum **com a agravante do art. 61, II, "h", do CP** — e a violência doméstica de **gênero** contra mulher idosa é da Lei 11.340/2006; a **assistência de acusação** da vítima idosa segue a mecânica processual detalhada na skill `assistente-acusacao`; e a via despenalizadora do JECRIM, quando aplicável, está nas skills `transacao-penal` e `composicao-civil-danos-jecrim`.

> **Lição central:** o Estatuto criou tipos com **penas baixas** mas os cercou de **regras processuais severas** — a defesa vence menos "no mérito da tipicidade" e mais **na porta de entrada procedimental**. Três eixos: (1) **existe crime específico ou é crime comum + agravante?** — o concurso aparente e o princípio da especialidade decidem a pena real; (2) **qual rito?** — o art. 94 manda aplicar o procedimento da Lei 9.099/95 aos crimes do Estatuto com pena **não superior a 4 anos**, mas o STF já se pronunciou sobre o **alcance** dessa remissão (confira a interpretação vigente antes de afirmar que ela traz transação e composição); (3) **a vulnerabilidade da vítima** é elemento que a acusação usará em toda dosimetria — antecipe-a.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 10.741/2003 foi alterada em camadas (Lei 14.423/2022 renomeou "idoso" → "pessoa idosa" em todo o texto; outras leis ajustaram penas e tipos). **Confira a redação vigente de cada artigo do Estatuto e do CP via agente `lei-e-sumula`.** O alcance do art. 94 e a incidência da agravante do art. 61, II, "h", em concurso são objeto de precedente — **pesquise via agente `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** o que não confirmar. Nunca cite número de acórdão de memória.

## O instituto e a base legal

O núcleo da tutela penal está entre os **arts. 95 e 108**. O art. 95 fixa a diretriz de política criminal; os demais descrevem condutas.

| Dispositivo | O que garante / exige |
|---|---|
| **Art. 95** | Os crimes definidos no Estatuto são de **ação penal pública incondicionada** — não dependem de representação; o MP age de ofício |
| **Art. 94** | Aos crimes do Estatuto com **pena máxima não superior a 4 anos** aplica-se o **procedimento** da Lei 9.099/95 (rito sumaríssimo) — cláusula cujo **alcance** foi objeto do STF (ver adiante: procedimento ≠ despenalização automática) |
| **Art. 96** | Discriminar pessoa idosa (caput); no §1º, impedir/dificultar acesso a operações bancárias, transporte, meios de comunicação por motivo de idade — confira caput e parágrafos via `lei-e-sumula` |
| **Art. 97** | Deixar de prestar assistência à pessoa idosa em situação de perigo (omissão de socorro qualificada pela condição da vítima) |
| **Art. 98** | **Abandonar** pessoa idosa em hospitais, casas de saúde, entidades de acolhimento, ou não prover suas necessidades básicas |
| **Art. 99** | **Expor a perigo** a integridade e saúde da pessoa idosa, submetendo-a a condições desumanas/degradantes, privando de alimentos/cuidados, sujeitando a trabalho excessivo (qualificado se resulta lesão grave ou morte) |
| **Art. 100** | Condutas de agente público/particular: negar acolhimento/permanência sem justa causa, deixar de cumprir ordem judicial etc. |
| **Art. 101** | Deixar de cumprir mandado judicial expedido nas ações do Estatuto |
| **Art. 102** | **Apropriar-se** de ou desviar bens, proventos, pensão ou rendimentos da pessoa idosa, dando-lhes aplicação diversa da finalidade |
| **Art. 103** | Negar o acolhimento ou a permanência da pessoa idosa em entidade por recusa a outorgar procuração ao estabelecimento |
| **Art. 104** | **Reter o cartão** magnético de conta bancária, documento, outro objeto ou proventos da pessoa idosa, para garantir recebimento/ressarcimento de dívida |
| **Art. 105** | Exibir/veicular informação/imagem depreciativa ou injuriosa da pessoa idosa |
| **Art. 106** | Induzir pessoa idosa sem discernimento a outorgar procuração para administração de bens ou deles dispor livremente |
| **Art. 107** | Coagir a pessoa idosa a doar, contratar, testar ou outorgar procuração |
| **Art. 108** | Lavrar ato notarial que envolva pessoa idosa sem discernimento, sem representação legal |
| **CP, art. 61, II, "h"** | **Agravante genérica** de crime cometido contra maior de 60 anos — incide no crime **comum**, não no crime já específico do Estatuto (senão, bis in idem) |

**Idade de referência:** pessoa idosa é a de **60 anos ou mais** (art. 1º da Lei 10.741/2003). Atenção: a agravante do art. 61, II, "h", do CP fala em **"maior de 60 anos"** — a fronteira exata (60 completos × mais de 60) e o momento do fato conferem-se via `lei-e-sumula`.

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência da defesa | Onde aprofundar |
|---|---|---|
| Denúncia enquadra conduta patrimonial contra idoso no **art. 102 do Estatuto** | Testar se é **apropriação específica** ou apropriação indébita comum (CP, art. 168) + agravante — especialidade define pena e rito | `analise-denuncia`; `lei-e-sumula` |
| Familiar acusado de **abandono** (art. 98) por não prover cuidados | Aferir **dever jurídico** de cuidado, possibilidade material e dolo — abandono exige mais que dificuldade financeira | Frentes 2 e 3 abaixo |
| Crime do Estatuto com pena **≤ 4 anos** | Verificar o **rito** (art. 94) e o alcance real da remissão à Lei 9.099 antes de acenar com transação | Seção "O rito do art. 94" |
| MP pediu **agravante do art. 61, II, "h"** em crime já tipificado no Estatuto | Impugnar **bis in idem**: a condição de idoso já é elementar do tipo específico | Frente 4 (dosimetria) |
| Vítima idosa quer participar da ação penal pública | Habilitá-la como **assistente** — mecânica processual própria | skill `assistente-acusacao` |
| Contexto é **violência de gênero** contra mulher idosa | Não é este eixo — Lei Maria da Penha afasta a Lei 9.099 | skill de violência doméstica; `lei-e-sumula` |
| Cliente preso cautelarmente por crime contra idoso | Cautelares/soltura seguem a régua própria | skill `liberdade-provisoria-relaxamento` |

## Frente 1 — especialidade: crime do Estatuto ou crime comum + agravante?

Esta é a **primeira e mais rentável** discussão. Muitas denúncias enquadram no Estatuto condutas que são, tecnicamente, crimes comuns; ou o inverso. O **princípio da especialidade** (o tipo especial afasta o geral) governa:

- **Apropriação de proventos (art. 102)** × **apropriação indébita (CP, art. 168)** × **estelionato (CP, art. 171, com a causa de aumento do §4º quando a vítima é idosa)**: são fronteiras finas. O art. 102 exige a **destinação diversa da finalidade**; o art. 168 exige a **inversão do animus** sobre coisa de que já se tinha a posse; o art. 171 exige **fraude/indução em erro**. Enquadramento errado muda pena, rito e prescrição.
- **Regra de ouro contra o bis in idem:** se a conduta se subsome a um **tipo específico do Estatuto** (que já tem a condição de idoso como elementar), **não** cabe a agravante do art. 61, II, "h" — a mesma circunstância não pode tipificar e agravar. A agravante só entra no crime **comum** contra idoso.
- **Concurso aparente × concurso real:** uma única conduta que fere Estatuto e CP resolve-se por especialidade/consunção; condutas autônomas podem gerar concurso — o desenho correto é tese de dosimetria.

## Frente 2 — tipicidade dos crimes omissivos (arts. 97, 98, 99)

Abandono, exposição a perigo e omissão de assistência são os tipos de maior incidência e de defesa mais técnica, porque são **crimes omissivos** que exigem **dever jurídico** e **possibilidade de agir**:

- **Dever jurídico de cuidado:** quem responde por abandono (art. 98) é quem tinha o **dever legal** de prover (parentesco com obrigação alimentar, guarda, contrato de acolhimento). Terceiro sem dever não comete o tipo. Mapeie a fonte do dever.
- **Possibilidade material:** não há abandono onde faltou **capacidade real** de prover — dificuldade financeira extrema, doença do próprio cuidador, ausência de rede de apoio. Distinga **não querer** (dolo) de **não poder** (atipicidade por ausência de conduta exigível).
- **Dolo, não mera negligência:** os tipos dolosos do Estatuto exigem **vontade** de abandonar/expor. Descuido, sobrecarga do cuidador familiar ou falha pontual não preenchem o dolo — podem, no máximo, configurar ilícito civil ou infração administrativa, não crime.
- **Estado de necessidade / inexigibilidade de conduta diversa (CP, arts. 24 e 22):** o cuidador exausto, sem suporte estatal, que interna o idoso por não ter meios de cuidar — a linha entre abandono criminoso e ato de necessidade é matéria de prova e de tese.
- **Resultado agravador (art. 99, forma qualificada):** se a acusação imputa lesão grave ou morte como resultado da exposição, exija o **nexo causal** demonstrado e a **previsibilidade** — sem isso, responde-se apenas pela conduta-base.

## Frente 3 — consentimento, autonomia e discernimento (arts. 106, 107, 108)

Os tipos que tutelam a **vontade** da pessoa idosa (indução a outorgar procuração, coação a doar/testar, ato notarial sem representação) giram em torno do **discernimento**:

- A pessoa idosa **capaz** tem autonomia plena — doar, contratar e testar são direitos seus. O crime dos arts. 106 a 108 pressupõe **ausência de discernimento** (senilidade avançada, quadro demencial documentado) ou **coação**. Idade avançada, por si, **não** presume incapacidade.
- **Prova do discernimento** é o campo de batalha: laudo geriátrico/psiquiátrico, interdição civil, contexto negocial. Requeira perícia; a defesa tem direito de testar a alegação de que o idoso "não discernia".
- Distinga **influência legítima** (aconselhamento familiar) de **indução criminosa** (aproveitamento de estado de vulnerabilidade). A fronteira é o **aproveitamento indevido** da falta de discernimento.

## Frente 4 — dosimetria e a interface com a agravante do art. 61, II, "h"

- **Vedação ao bis in idem (o erro mais comum da acusação):** nos crimes **específicos** do Estatuto, a condição de idoso **é elementar** — não pode reaparecer como agravante genérica (CP, art. 61, II, "h") nem como circunstância judicial desfavorável (CP, art. 59). Decote obrigatório.
- **A agravante só incide no crime comum:** homicídio, lesão, estelionato, ameaça contra idoso → tipo comum + art. 61, II, "h". Aqui a agravante é **legítima** e majora na segunda fase.
- **Causas de aumento próprias do CP:** o estelionato tem aumento quando a vítima é idosa (CP, art. 171, §4º — confira redação e percentual via `lei-e-sumula`); o abandono material e a omissão de socorro do CP têm agravamento pela idade. Verifique dupla valoração.
- **Simule os cenários** (com/sem agravante, especialidade × concurso) no agente `dosimetria-pena` **antes** de ordenar os pedidos — muitas vezes o ganho está em derrubar a agravante, não a condenação.

## O rito do art. 94 — procedimento sim, despenalização a conferir

O **art. 94** determina que aos crimes do Estatuto com pena máxima **não superior a 4 anos** se aplique o **procedimento** previsto na Lei 9.099/95. A leitura literal sugeriria transação penal e composição para crimes bem acima do "menor potencial ofensivo" (pena até 2 anos). O ponto foi levado ao **STF**:

- **Confira a interpretação fixada pelo STF antes de afirmar o alcance** (pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**). A tese que prevaleceu distingue **procedimento** (rito mais célere, aplicável) dos **institutos despenalizadores** (transação, composição, sursis processual) — a extensão destes últimos aos crimes do art. 94 é o cerne da controvérsia. **Não prometa transação ao cliente** sem essa checagem.
- **Consequência prática:** ainda que os benefícios despenalizadores não se estendam, o rito sumaríssimo traz vantagens (celeridade, oralidade, concentração). E, quando o instituto for cabível, as skills `transacao-penal` e `composicao-civil-danos-jecrim` cobrem a mecânica — esta skill não a duplica.
- **Ação penal incondicionada (art. 95):** não há representação nem decadência a explorar; o MP age de ofício. Isso fecha a porta de teses de condição de procedibilidade que existiriam em outros nichos.

## Prazos e procedimento

- **Rito:** conforme o art. 94, sumaríssimo da Lei 9.099/95 para pena ≤ 4 anos; acima disso, o rito comum (ordinário ou sumário do CPP conforme a pena). **Defina a pena máxima em abstrato antes de escolher o rito.**
- **Resposta à acusação / defesa preliminar:** o prazo e sua natureza dependem do rito adotado — no rito comum, resposta escrita (CPP, art. 396-A) em **10 dias** da citação; a **janela probatória (rol de testemunhas, perícias, assistente técnico) fecha aqui**. Contagem processual pelo **CPP, art. 798, §1º** (exclui o dia do começo, inclui o do vencimento); **em dobro para a Defensoria** (LC 80/94).
- **Prescrição:** as penas baixas do Estatuto reduzem os prazos prescricionais (CP, art. 109) — calcule a **prescrição da pretensão punitiva** (inclusive retroativa/superveniente pela pena em concreto) desde a triagem; é frequentemente a tese mais eficiente. Aprofunde na skill `extincao-punibilidade-prescricao` e confira marcos interruptivos (CP, art. 117) via `lei-e-sumula`.

## Atuação em favor da vítima idosa (assistência de acusação)

Quando o cliente é a **vítima idosa** ou sua família, a via é a **habilitação como assistente de acusação** na ação penal pública (arts. 268 a 273 do CPP) — a legitimação, os poderes, o recurso supletivo e a ponte para a reparação civil (art. 387, IV, CPP) estão **integralmente na skill `assistente-acusacao`**, que não se repete aqui. O que esta skill acrescenta é o **substrato material**: quais tipos do Estatuto sustentam a imputação, a prova do discernimento/vulnerabilidade e o pedido de valor mínimo de indenização robustecido pela condição da vítima. Idoso sem capacidade de estar em juízo atua por **representante legal** (curador, se interditado).

## Teses típicas do nicho

**Da defesa:**
- **Atipicidade por ausência de dever jurídico** nos crimes omissivos (art. 98) — quem não tinha o dever de prover não abandona.
- **Ausência de dolo / não poder ≠ não querer** — dificuldade material afasta o abandono doloso; sobra, no máximo, ilícito extrapenal.
- **Erro de enquadramento (especialidade)** — reclassificar do tipo específico do Estatuto para o comum (ou vice-versa) quando muda pena/rito/prescrição.
- **Bis in idem na agravante do art. 61, II, "h"** — condição de idoso já elementar do tipo específico → decote.
- **Autonomia da pessoa idosa capaz** (arts. 106-108) — sem prova de ausência de discernimento ou coação, o negócio jurídico é lícito.
- **Prescrição** — pelas penas baixas, calcular PPP pela pena em abstrato e em concreto (CP, art. 109).
- **Inépcia / falta de justa causa** — denúncia genérica que não descreve o dever violado nem a conduta individualizada (`analise-denuncia`).

**Da vítima (assistência):**
- **Vulnerabilidade agravante** da conduta — substrato para valor mínimo de indenização robusto (art. 387, IV, CPP).
- **Prova do discernimento comprometido** para sustentar os tipos dos arts. 106 a 108.

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|---|---|---|
| Aplicar a **agravante do art. 61, II, "h"** em crime já específico do Estatuto | Bis in idem; pena inflada | Agravante só no crime **comum**; nos específicos a idade é elementar |
| Prometer **transação penal** por leitura literal do art. 94 | Frustração do cliente; o STF distinguiu procedimento de despenalização | Conferir o alcance via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]** antes de acenar |
| Tratar **idade avançada** como presunção de incapacidade (arts. 106-108) | Criminaliza negócio lícito de idoso capaz | Exigir prova concreta da ausência de discernimento (laudo, interdição) |
| Confundir **dificuldade material** com dolo de abandono | Condena cuidador que não pôde prover | Distinguir não-poder (atipicidade) de não-querer (dolo) |
| Esquecer a **especialidade** e aceitar o enquadramento da denúncia | Pena/rito/prescrição errados | Testar art. 102 × 168 × 171; abandono do Estatuto × do CP |
| Buscar **representação/decadência** | Tese morta — ação é incondicionada (art. 95) | Redirecionar para atipicidade, especialidade, prescrição |
| Ignorar a **prescrição** pelas penas baixas | Deixa na mesa a tese mais eficiente | Calcular PPP em abstrato e concreto desde a triagem |
| Confundir com **violência doméstica de gênero** contra mulher idosa | Rito e vedações errados (Maria da Penha afasta a 9.099) | Separar os eixos; Lei 11.340 tem regime próprio |
| Não arrolar testemunhas/perícia na **resposta à acusação** | Preclusão da janela probatória | Requerimentos probatórios prontos antes da resposta |
| Citar julgado sobre o alcance do art. 94 **de memória** | Precedente inexato/inexistente — sanção real | Todo número via `jurisprudencia-stj-stf` + gate `verificador-citacoes` |

## Antes de protocolar

- [ ] Conduta **corretamente enquadrada** — tipo específico do Estatuto × crime comum + agravante (especialidade testada)?
- [ ] Nenhum **bis in idem**: idade como elementar não reaparece como agravante (art. 61, II, "h") ou circunstância judicial?
- [ ] Nos crimes omissivos (arts. 97-99): **dever jurídico** e **possibilidade material** aferidos; dolo × dificuldade material distinguidos?
- [ ] Nos crimes de vontade (arts. 106-108): prova (ou ausência de prova) do **discernimento comprometido** enfrentada?
- [ ] **Rito** definido pela pena máxima em abstrato (art. 94 × rito comum) e alcance da Lei 9.099 conferido via `jurisprudencia-stj-stf`?
- [ ] **Prescrição** (abstrata e concreta) calculada — penas baixas favorecem a tese?
- [ ] Ação penal **incondicionada** (art. 95) considerada — sem apostar em representação/decadência?
- [ ] Rol de testemunhas, perícia geriátrica e assistente técnico completos na **resposta à acusação** (janela que precluirá)?
- [ ] Se atua pela vítima: habilitação como **assistente** (skill `assistente-acusacao`) e pedido de valor mínimo (art. 387, IV) formulados?
- [ ] Cenários de dosimetria simulados (`dosimetria-pena`) e pedidos em **ordem sucessiva** (atipicidade → desclassificação → dosimetria → prescrição)?
- [ ] Toda citação de dispositivo conferida via `lei-e-sumula` e precedente via `jurisprudencia-stj-stf`, com o não confirmado marcado **[NÃO VERIFICADO]** e aprovado no gate `verificador-citacoes`?

## Lembretes finais

- **Especialidade primeiro:** o maior ganho costuma estar no **enquadramento** (tipo do Estatuto × crime comum), que decide pena, rito e prescrição.
- **A idade não conta duas vezes:** elementar do tipo específico não pode ser agravante — decote o bis in idem.
- **Art. 94 é procedimento, não cheque em branco de despenalização** — confira o alcance no STF antes de prometer transação.
- **Omissão exige dever e possibilidade:** distinga o cuidador que não pôde do agente que não quis.
- **Autonomia do idoso capaz é a regra;** o crime dos arts. 106-108 pressupõe falta de discernimento ou coação, provadas.
- **Prescrição pelas penas baixas** é frequentemente a via mais curta — calcule desde a triagem.
- **Conformidade transversal:** toda entrega é **rascunho técnico para revisão humana obrigatória**; nenhum julgado citado de memória; LGPD sobre dados de saúde da pessoa idosa.

## Apoie-se em

- **Agente `analise-denuncia`** — dissecação da imputação: descrição do dever violado, individualização da conduta e enquadramento típico (base das teses de inépcia, especialidade e falta de justa causa).
- **Agente `dosimetria-pena`** — simulação de cenários (especialidade × concurso, com/sem agravante do art. 61, II, "h") para ordenar os pedidos pelo ganho real.
- **Skill `assistente-acusacao`** — quando se atua pela vítima idosa na ação penal pública: habilitação, poderes, recurso supletivo e valor mínimo de indenização; esta skill fornece o substrato material dos tipos do Estatuto.
- **Skills `transacao-penal` e `composicao-civil-danos-jecrim`** — a mecânica dos institutos despenalizadores da Lei 9.099, **se e quando** o alcance do art. 94 os admitir; não duplicadas aqui.
- **Skill `liberdade-provisoria-relaxamento`** — quando o cliente está preso cautelarmente por crime contra idoso.
- **Skill `memoriais`** — desenvolvimento pleno das teses na fase final da instrução.
- **Agentes `jurisprudencia-stj-stf` e `lei-e-sumula`** — precedente atual (sobretudo o alcance do art. 94) e redação vigente do Estatuto (renumerado/renomeado pela Lei 14.423/2022) e do CP.
- **Agente `verificador-citacoes` / Best-practice `verificacao-citacoes`** — gate obrigatório: nenhuma súmula ou precedente entra na peça sem verificação; o que não confirmar permanece **[NÃO VERIFICADO]**.
- **Best-practice `peticao-criminal`** — padrão estrutural da petição (endereçamento, preâmbulo, fundamentação, pedidos sucessivos).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
