---
name: "Revisão Jurídica (peças e contratos)"
description: "Checklist e método de revisão de peças e contratos com veredito APPROVE/REJECT"
whenToUse: |
  Agentes revisores que avaliam a qualidade de peças processuais e contratos antes da entrega, emitindo veredito estruturado APPROVE/REJECT.
version: "1.0.0"
---

# Revisão Jurídica (peças e contratos) — Best Practices

A revisão é a última barreira antes da entrega. O revisor não cria a peça: ele a confronta com a lei, com os autos e com a tese, identifica defeitos e devolve ao redator com instruções acionáveis. Um veredito de revisão é estruturado — APPROVE ou REJECT — e qualquer defeito de severidade CRÍTICO bloqueia a entrega (`on_reject` retorna ao redator). O objetivo não é reescrever, é proteger o cliente contra nulidade, preclusão e erro técnico.

## Princípios Fundamentais

1. **Revisão é defesa contra nulidade e preclusão.** O propósito primário da revisão não é estilo: é evitar que a peça gere prejuízo irreversível. Nulidades processuais seguem a disciplina dos arts. 563 a 573 do CPP — não há nulidade sem prejuízo (*pas de nullité sans grief*, art. 563) e a parte não pode arguir nulidade a que deu causa nem aquela em cujo silêncio consentiu (art. 565). A preclusão temporal, por sua vez, fulmina direitos não exercidos no momento próprio (rol de testemunhas, preliminares, recursos). O revisor caça os dois riscos antes de qualquer outra coisa.

2. **Completude dos pedidos é inegociável.** O que não se pede, não se obtém. O revisor confere se o capítulo de pedidos fecha a peça com todos os requerimentos objetivos e numerados (recebimento/processamento, mérito, produção de provas, oitiva de testemunhas) e se os pedidos subsidiários foram deduzidos por eventualidade. Pedido genérico, incompleto ou ausente é defeito grave: o juízo não está obrigado a decidir o que não foi requerido.

3. **Consistência fática × jurídica é o teste de coerência interna.** A narrativa dos fatos e a tese jurídica precisam contar a mesma história. Sustentar negativa de autoria nos fatos e legítima defesa no mérito (que pressupõe a autoria), sem escalonamento por eventualidade, é contradição que mina a credibilidade. O revisor lê fatos e direito em conjunto e aponta toda incoerência entre a versão narrada e o pedido formulado.

4. **Correção das citações legais é verificação objetiva, não opinião.** Cada dispositivo citado deve existir, estar vigente e dizer o que a peça afirma que diz. Artigo trocado, inciso inexistente ou súmula mal atribuída transformam argumento sólido em alvo fácil. O revisor confere artigo a artigo: o número, o diploma (CP, CPP, CF, lei especial), o inciso e a pertinência ao que se sustenta. Citação errada é defeito de severidade alta, no mínimo.

5. **Clareza e técnica servem à persuasão.** Períodos longos, parágrafos sem numeração, linguagem hermética e adjetivação excessiva atrapalham o julgador. O revisor verifica se a peça tem estrutura (seções e subtópicos numerados), períodos curtos e tom técnico-formal e impessoal. Clareza não é cosmética: é técnica de convencimento. A régua completa de redação — teoria do caso, subsunção explícita, coesão, persuasão — está na best-practice `redacao-persuasiva-criminal` e é cobrada na dimensão (h).

6. **O revisor aponta e devolve — não reescreve.** O papel do revisor é diagnóstico, não cirúrgico. Ele identifica o defeito, indica a localização exata, explica o porquê e instrui a correção — mas a reescrita é do redator. Reescrever a peça apaga o aprendizado do redator, desloca a autoria e mistura responsabilidades. O revisor entrega um veredito com instruções; o `on_reject` devolve a peça a quem a redigiu.

7. **Avaliação contra a lei e os autos, nunca contra preferência pessoal.** O padrão de "correto" vem do CPP, do CP, da CF, das leis especiais e dos elementos dos autos — não do gosto do revisor por um estilo. Se o estilo é sóbrio e a tese está ancorada, não se rejeita por preferir prosa mais rebuscada. O veredito mede a peça contra critérios objetivos.

8. **Severidade honesta e veredito sem hedge.** Cada problema recebe uma severidade real (CRÍTICO, ALTO ou MÉDIO) e o veredito final é uma palavra clara: APPROVE ou REJECT. Não se infla nota para evitar conflito nem se rebaixa defeito grave a "sugestão". Qualquer item CRÍTICO força REJECT, independentemente da qualidade do resto.

## Dimensões da Revisão

A revisão percorre oito dimensões, na ordem em que os defeitos mais letais aparecem primeiro. Cada dimensão tem seu checklist; um defeito grave em qualquer uma pode bastar para o REJECT.

### (a) Cabimento, competência e tempestividade

- [ ] A peça é a correta para o momento processual (ex.: resposta à acusação após o recebimento da denúncia — arts. 396 e 396-A do CPP; defesa preliminar antes do recebimento — art. 514 do CPP, art. 55 da Lei 11.343/2006)?
- [ ] No caso de recurso, o recurso é cabível contra aquela decisão (apelação, RESE, embargos, agravo)?
- [ ] O juízo/tribunal destinatário é o competente (competência fixada pelos arts. 69 a 83 do CPP; júri para crimes dolosos contra a vida — CF, art. 5º, XXXVIII)?
- [ ] A tempestividade está conferida e declarada, com o **fundamento do prazo** correto? Prazo perdido é preclusão temporal e trânsito em julgado — defeito CRÍTICO.

### (b) Estrutura formal

- [ ] Endereçamento correto à autoridade, com vara e comarca (ou tribunal e órgão) exatos?
- [ ] Qualificação completa das partes (ou remissão expressa à qualificação dos autos)? Na inicial acusatória, requisito do art. 41 do CPP.
- [ ] Capacidade postulatória demonstrada (procuração/mandato, salvo nomeação)?
- [ ] Seções e subtópicos numerados (Dos Fatos, Do Direito, Das Provas, Dos Pedidos)?
- [ ] Capítulo de pedidos presente, com requerimentos objetivos e numerados?
- [ ] Fechamento completo: "pede deferimento", local, data, assinatura e número de inscrição na OAB?

### (c) Preliminares e teses de mérito

- [ ] Todas as preliminares cabíveis foram levantadas (inépcia — art. 41 c/c art. 395, I; falta de pressuposto/condição — art. 395, II; falta de justa causa — art. 395, III; incompetência, litispendência, coisa julgada)?
- [ ] As hipóteses de absolvição sumária foram analisadas quando aplicáveis (excludente de ilicitude — art. 23 do CP; excludente de culpabilidade — arts. 26 a 28 do CP; atipicidade; extinção da punibilidade — art. 107 do CP), conforme o art. 397 do CPP?
- [ ] A tese central de mérito está definida e amarrada aos fatos narrados?
- [ ] As teses foram **escalonadas por eventualidade** (principal e, em seguida, subsidiárias com "subsidiariamente"/"sucessivamente")? Tese omitida hoje pode precluir amanhã.

### (d) Provas

- [ ] O rol de testemunhas está presente e dentro do limite do rito (até 8 no ordinário — art. 401 do CPP; até 5 no sumário — art. 532 do CPP; até 5 na defesa prévia da Lei de Drogas)? Omitir o rol no momento próprio gera **preclusão** — defeito CRÍTICO.
- [ ] As testemunhas estão qualificadas e distinguidas (compromissadas, referidas — art. 209, § 1º, do CPP; informantes — art. 206 do CPP)?
- [ ] As perícias requeridas vêm acompanhadas de **quesitos**? Perícia sem quesitos perde força e pode ser indeferida.
- [ ] As demais diligências foram requeridas no momento próprio (acareação, reconhecimento — art. 226 do CPP)?
- [ ] Os documentos mencionados foram efetivamente juntados (na resposta à acusação, art. 396-A do CPP)?

### (e) Fundamentação

- [ ] Cada tese está ancorada em dispositivo expresso (CP, CPP, CF, lei especial), com artigo, inciso e parágrafo corretos?
- [ ] Os dispositivos citados existem, estão vigentes e dizem o que a peça afirma?
- [ ] A jurisprudência invocada é pertinente, atual e — sobretudo — **real**? Atribuir entendimento a tribunal sem respaldo é defeito CRÍTICO.
- [ ] As súmulas citadas correspondem ao número e ao teor corretos e se aplicam ao caso?

### (f) Riscos de nulidade e preclusão

- [ ] Há algum ato ou omissão que possa gerar nulidade (arts. 563 a 573 do CPP)? Há demonstração de prejuízo, quando exigida (art. 563)?
- [ ] A peça argui nulidade a que a própria parte deu causa ou em cujo silêncio consentiu (vedação do art. 565 do CPP)?
- [ ] Algum direito está prestes a precluir por não ter sido exercido nesta peça (rol, preliminares, pedidos, prazo recursal)?
- [ ] A nulidade arguida é relativa (depende de arguição oportuna e prejuízo) ou absoluta? O tratamento está correto?

### (g) Conformidade ética

- [ ] A peça preserva o sigilo profissional (EAOAB, art. 7º, II e XIX, e art. 34, VII; CED, arts. 35 a 38) e não expõe dados de terceiros indevidamente?
- [ ] Não há promessa, garantia ou sugestão de resultado/êxito (vedação do CED, art. 40; Provimento 205/2021 do CFOAB)?
- [ ] A linguagem mantém sobriedade e respeito ao juízo e à parte adversa, sem ofensa pessoal?
- [ ] Não há sinal de conflito de interesses (EAOAB, art. 17; CED, arts. 19 a 21) na atuação refletida pela peça?

### (h) Qualidade da redação (coesão, subsunção e persuasão)

A régua é a best-practice `redacao-persuasiva-criminal` — critérios **objetivos e verificáveis**, não gosto pessoal. Peça formalmente correta mas retoricamente rasa **não é obra pronta**:

- [ ] A **teoria do caso** é identificável em 1 frase, e a tese principal aparece na primeira página?
- [ ] "Dos Fatos" narra a versão da parte com âncoras concretas (datas, fls./ID) — ou copia a denúncia / argumenta juridicamente no lugar errado?
- [ ] **Sem norma órfã:** todo dispositivo citado é aplicado ao fato concreto em até 2 frases?
- [ ] **Sem fato órfão:** todo fato narrado é usado por alguma tese (e todo fato usado foi narrado)?
- [ ] Cada seção tem o bloco completo (afirmação → premissa → aplicação → consequência) e há transição entre as seções?
- [ ] A eventualidade está formulada **sem autofagia** (subsidiária não confessa contra a principal)?
- [ ] A principal objeção da acusação foi **antecipada e refutada**?
- [ ] Precedentes **narrados com similitude fática** (não ementas em cascata — máx. 2-3 por tese)?
- [ ] Subtítulos afirmam a tese; períodos curtos; voz ativa; sem juridiquês de enchimento; adjetivos com lastro?

**Calibração de severidade nesta dimensão:** norma órfã em tese central, autofagia de teses, objeção principal ignorada e fatos-cópia-da-denúncia são **ALTO** e cada um bloqueia a entrega até correção. Defeitos pontuais de estilo são **MÉDIO**. O padrão do produto é obra-prima, não mínimo defensável.

## Veredito Estruturado

O revisor entrega o resultado em bloco estruturado, no padrão APPROVE/REJECT do framework. **Regra de bloqueio: qualquer item de severidade CRÍTICO ou ALTO força REJECT, independentemente da pontuação.** APPROVE exige zero CRÍTICO, zero ALTO, Citation Gate limpo e todos os hard gates aplicáveis aprovados. Itens MÉDIO podem acompanhar o APPROVE apenas quando não alterarem tese, prova, cálculo, prazo, pedido, compreensão material ou segurança da entrega; caso contrário, devem ser elevados e corrigidos.

Severidades:

- **CRÍTICO** — risco de nulidade, preclusão, não conhecimento, perda de direito ou erro que invalida a peça. Bloqueia (REJECT).
- **ALTO** — defeito técnico relevante (citação legal errada, tese cabível não levantada, pedido incompleto) que enfraquece a peça. Bloqueia (REJECT) até correção.
- **MÉDIO** — falha de clareza, estrutura ou estilo que prejudica a leitura, mas não compromete a validade.

### Formato — REJECT

```
==============================
 VEREDITO DE REVISÃO: REJECT
==============================

Peça: [tipo da peça/contrato]
Processo/Caso: [número ou referência]
Revisor: [agente revisor]
Data: [AAAA-MM-DD]

------------------------------
 PONTOS VERIFICADOS
------------------------------
[x] Cabimento / competência / tempestividade
[x] Estrutura formal (endereçamento, qualificação, pedidos)
[x] Preliminares e teses de mérito (eventualidade)
[x] Provas (rol de testemunhas, perícia com quesitos)
[x] Fundamentação (dispositivos, jurisprudência)
[x] Riscos de nulidade / preclusão
[x] Conformidade ética (sigilo, sem promessa de resultado)
[x] Qualidade da redação (teoria do caso, subsunção, coesão, persuasão)

------------------------------
 PROBLEMAS ENCONTRADOS
------------------------------

[CRÍTICO] Rol de testemunhas ausente na resposta à acusação.
  Localização: capítulo "Das Provas" (ausente).
  Por quê: a omissão do rol no momento próprio acarreta preclusão do
  direito à prova testemunhal (art. 401 do CPP). Risco irreversível.

[ALTO] Citação legal incorreta na fundamentação da preliminar.
  Localização: item 2.1.2.
  Por quê: a inépcia da inicial está fundada apenas no art. 41 do CPP;
  falta o art. 395, I, do CPP, que é a hipótese de rejeição da denúncia.

[MÉDIO] Período excessivamente longo na narrativa dos fatos.
  Localização: item I, parágrafo 2.
  Por quê: parágrafo único com 9 linhas dificulta a apreensão da versão.

------------------------------
 INSTRUÇÕES DE CORREÇÃO (para o redator)
------------------------------
1. Incluir capítulo "Das Provas" com rol de testemunhas (até 8 — art. 401
   do CPP), qualificando cada uma e distinguindo compromissadas, referidas
   e informantes.
2. Corrigir o fundamento da inépcia em 2.1.2 para "art. 41 c/c art. 395, I,
   do CPP".
3. Dividir o parágrafo 2 do item I em períodos curtos, em ordem cronológica.

VEREDITO: REJECT — 1 item CRÍTICO (preclusão de prova) bloqueia a entrega.
Devolver ao redator (on_reject) para correção e nova revisão.
```

### Formato — APPROVE

```
==============================
 VEREDITO DE REVISÃO: APPROVE
==============================

Peça: [tipo da peça/contrato]
Processo/Caso: [número ou referência]
Revisor: [agente revisor]
Data: [AAAA-MM-DD]

------------------------------
 PONTOS VERIFICADOS
------------------------------
[x] Cabimento / competência / tempestividade — OK
[x] Estrutura formal — OK
[x] Preliminares e teses de mérito — OK, escalonadas por eventualidade
[x] Provas — rol completo (art. 401 do CPP) e perícia com quesitos
[x] Fundamentação — dispositivos conferidos, jurisprudência pertinente
[x] Riscos de nulidade / preclusão — nenhum risco identificado
[x] Conformidade ética — sigilo preservado, sem promessa de resultado
[x] Qualidade da redação — teoria do caso clara, subsunção explícita, sem órfãos

------------------------------
 PROBLEMAS ENCONTRADOS
------------------------------
Nenhum item CRÍTICO ou ALTO.

[MÉDIO] (não bloqueante) Repetição do termo "evidente" em 2.3.
  Sugestão: variar o vocabulário para fluidez.

VEREDITO: APPROVE — peça apta à entrega. Sugestão MÉDIA opcional registrada.
```

## Quality Criteria

Antes de emitir o veredito, o revisor confere a própria revisão:

- [ ] Todas as oito dimensões foram percorridas e marcadas em "Pontos verificados" — nenhuma foi pulada (inclusive a qualidade da redação, com a régua da `redacao-persuasiva-criminal`).
- [ ] Cabimento, competência e tempestividade foram conferidos antes de qualquer análise de mérito.
- [ ] Cada problema apontado tem **severidade** explícita (CRÍTICO/ALTO/MÉDIO), localização exata e justificativa de pelo menos uma frase.
- [ ] Cada dispositivo legal citado na peça foi verificado (número, diploma, inciso, vigência e pertinência).
- [ ] Riscos de preclusão (rol, preliminares, pedidos, prazo) e de nulidade (arts. 563 a 573 do CPP) foram explicitamente checados.
- [ ] A conformidade ética foi verificada (sigilo; ausência de promessa de resultado — CED, art. 40 e Provimento 205/2021).
- [ ] O veredito é coerente com os achados: havendo qualquer item CRÍTICO **ou ALTO**, o veredito é REJECT; APPROVE exige zero CRÍTICO, zero ALTO e todos os hard gates aplicáveis aprovados.
- [ ] Cada problema vem com **instrução de correção acionável** para o redator — o que mudar, onde e como —, sem que o revisor reescreva a peça.
- [ ] O veredito final é uma palavra clara (APPROVE ou REJECT), sem hedge, e o REJECT indica devolução ao redator (on_reject).

## Anti-Patterns

- **Aprovar peça com preclusão iminente.** Dar APPROVE a uma resposta à acusação sem rol de testemunhas, ou a um recurso fora do prazo, entrega ao cliente um prejuízo irreversível (art. 401 do CPP; preclusão temporal). Risco de preclusão é sempre CRÍTICO e bloqueia.
- **Deixar passar citação legal errada.** Aprovar a peça sem conferir os dispositivos — artigo trocado, inciso inexistente, súmula mal atribuída — entrega ao juízo um alvo fácil e destrói a credibilidade de uma tese que poderia ser sólida.
- **Revisar só a forma e não o mérito.** Conferir endereçamento, fonte e numeração, mas não verificar se todas as preliminares cabíveis foram levantadas (arts. 395 e 397 do CPP) ou se a tese está ancorada, é meia revisão. A forma impecável não salva o mérito ausente.
- **Reescrever em vez de devolver.** O revisor que reescreve trechos da peça assume autoria que não é sua, apaga o aprendizado do redator e mistura responsabilidades. O papel é apontar e devolver (on_reject), com instrução clara — não corrigir no lugar do redator.
- **Veredito vago, sem instrução acionável.** "A fundamentação está fraca" ou "rever as provas" não é veredito de revisão. Sem localização, severidade e instrução do que mudar, o redator não sabe agir e a revisão não cumpre função.
- **Inflar o veredito para evitar conflito.** Rebaixar um defeito grave a "sugestão" ou aprovar peça medíocre para não atritar com o redator manda erro técnico para a entrega e corrói a confiança no processo de revisão. Severidade honesta sempre.
- **Inventar jurisprudência ao revisar.** Ao apontar fundamentação, o revisor jamais deve sugerir precedente que não verificou. Atribuir entendimento a tribunal sem respaldo real é tão grave quanto deixar passar o erro — e pode configurar litigância de má-fé.
- **Arguir como nulidade absoluta o que é defeito sanável.** Tratar toda irregularidade como nulidade insanável ignora a disciplina dos arts. 563 a 573 do CPP — sem prejuízo não há nulidade (art. 563), e a parte não argui aquilo a que deu causa (art. 565). O revisor calibra a severidade ao tipo de vício.
