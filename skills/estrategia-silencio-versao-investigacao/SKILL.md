---
name: estrategia-silencio-versao-investigacao
description: >-
  Use ao DECIDIR, com o cliente, entre silêncio total, silêncio seletivo e apresentar versão ANTES
  do acesso pleno aos autos na fase policial (CF, art. 5º, LXIII; CPP, art. 186) — matriz de decisão
  própria da investigação: risco de engessar a defesa com versão prematura, valor probatório do que
  se diz na delegacia (art. 155 CPP) e o efeito de contradições futuras entre delegacia e juízo. NÃO
  é o interrogatório judicial (art… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-estrategia-silencio-versao-investigacao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["estrategia-silencio-versao-investigacao", "estrategia silencio", "versao investigacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Silêncio × Versão na Fase de Investigação (CF, art. 5º, LXIII; CPP, art. 186)

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

Esta skill é uma **matriz de decisão estratégica** para o momento em que o defensor precisa deliberar, **com o cliente**, entre **calar por completo**, **calar seletivamente** ou **apresentar uma versão** perante a autoridade policial — em regra **antes** de conhecer plenamente os autos e **antes** da denúncia. Não é uma peça: é o **roteiro de aconselhamento e registro da decisão informada** que antecede a oitiva do investigado no inquérito, o comparecimento espontâneo à delegacia ou o depoimento do conduzido em flagrante.

> **Lição central:** na investigação, decide-se **no escuro**. Diferente do interrogatório judicial (o último ato, com toda a prova já produzida — art. 400 CPP), aqui o cliente fala **sem saber o que a acusação tem**. Por isso a regra prática é **silêncio como padrão** e **versão como exceção fundamentada**: só se fala cedo quando há um ganho concreto (álibi documentável, prisão a evitar, oportunidade de acordo) que supere o risco de **fixar contradições** que serão exploradas na instrução.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 155 do CPP** (valor dos elementos informativos do inquérito) e do **art. 3º-C e seguintes do CPP** (juiz das garantias, Lei 13.964/2019, com efeitos modulados pelo STF na ADI 6.298 e conexas) antes de fundamentar qualquer argumento. Toda súmula, tese ou precedente passa **obrigatoriamente** pelo gate de `verificacao-citacoes` (ou pela skill `jurisprudencia-stj-stf`) — **omitir vence inventar**.

## O que muda em relação ao interrogatório judicial

| | **Investigação (esta skill)** | **Interrogatório judicial** (`preparacao-interrogatorio-cliente`) |
|---|---|---|
| **Momento** | Antes da denúncia; muitas vezes antes do acesso pleno aos autos | Último ato da instrução (art. 400 CPP) |
| **Estado da prova** | Desconhecido / incompleto | Toda a prova já produzida e conhecida |
| **Autoridade** | Delegado (peça de informação) | Juiz (ato judicial, sob contraditório) |
| **Valor probatório do dito** | Elemento informativo — não serve **sozinho** para condenar (art. 155 CPP) | Meio de prova e de defesa, sob o crivo do contraditório |
| **Risco central** | **Engessar** a defesa; criar contradição futura | Incoerência com a prova já vista |
| **Lógica** | Cautela; silêncio como padrão | Coerência com o conjunto probatório |

Confundir os dois cenários é o erro de raiz: **a estratégia da delegacia é inversa à do juízo.**

## Base legal

- **CF, art. 5º, LXIII** — o preso será informado de seus direitos, entre os quais o de **permanecer calado**. O direito ao silêncio alcança **todo aquele a quem se imputa a prática de infração**, preso ou solto, formalmente indiciado ou não.
- **CPP, art. 186 e parágrafo único** — o acusado será informado do direito de permanecer calado e de não responder; o **silêncio não importa confissão e não pode ser interpretado em prejuízo da defesa**.
- **CPP, art. 155** — o juiz **não pode fundar a condenação exclusivamente** nos elementos informativos colhidos na investigação (valor probatório reduzido do que se diz na delegacia — núcleo do argumento defensivo).
- **CPP, art. 6º, V** — na apuração da infração, a autoridade policial ouve o indiciado, observado o direito ao silêncio.
- **Princípio do *nemo tenetur se detegere*** — ninguém é obrigado a produzir prova contra si mesmo (matriz constitucional e convencional — CADH/Pacto de São José, art. 8.2.g).
- **CP, art. 341 — autoacusação falsa** e **CP, art. 339 — denunciação caluniosa**: limites do que a defesa pode fazer. **Silêncio e negativa de autoria são lícitos**; **confessar crime alheio** ou **imputar falsamente crime a terceiro** para desviar a investigação **não são** — são condutas típicas. O direito de defesa **não** abrange criar prova falsa.

## O direito ao silêncio na investigação — extensão e limites

- **A quem cabe:** ao investigado/indiciado (preso ou solto) e a quem, mesmo ouvido como "testemunha" ou "conduzido", esteja de fato na condição de suspeito. Testemunha em sentido próprio tem dever de dizer a verdade (art. 342 CP), mas **não é obrigada a se autoincriminar** — se a pergunta expõe a própria pessoa a imputação, incide o *nemo tenetur*.
- **Silêncio ≠ mentira.** O investigado pode **calar** e pode **negar** a autoria sem cometer crime. O que a lei veda é **autoacusação falsa** (art. 341 CP) e **imputar falsamente a terceiro** (art. 339 CP). Aconselhe o silêncio ou a negativa — **nunca** a construção de uma versão que incrimine inocente.
- **Qualificação é obrigatória.** O direito ao silêncio **não** alcança os dados de **qualificação** (nome, filiação etc.); atribuir-se **falsa identidade** perante a autoridade é crime (art. 307 CP). Oriente o cliente a **identificar-se corretamente** e só então exercer o silêncio sobre o mérito.
- **Silêncio não gera prisão nem agravamento.** Não pode ser usado como fundamento de prisão preventiva, de indiciamento ou de qualquer valoração desfavorável (art. 186, parágrafo único).

## As três posições possíveis

1. **Silêncio total.** Não responde a nada de mérito (após a qualificação). Padrão de segurança máxima quando os autos são desconhecidos, o flagrante é recente ou há risco de contradição. **Zero material** para a acusação explorar.
2. **Silêncio seletivo.** Responde ao que é **inequivocamente favorável e verificável** (ex.: apresentar comprovante de que estava em outra cidade) e cala sobre o resto. Exige **disciplina rígida**: o cliente precisa saber **exatamente** onde parar — o risco é a pergunta de acompanhamento que arranca o dado ruim.
3. **Versão completa.** Apresenta a narrativa dos fatos. Só se justifica quando **o ganho é concreto e imediato** (destravar liberdade, viabilizar acordo, cortar um flagrante manifestamente ilegal) **e** a versão é **verdadeira, coerente e documentável**, com baixo risco de ser contrariada por prova futura.

> **Regra do "silêncio seletivo é o mais perigoso".** Falar "só um pouco" costuma ser pior do que os extremos: abre a porta ao interrogatório de acompanhamento sem o escudo do silêncio total. Só recomende silêncio seletivo com um **roteiro fechado** e ensaiado.

## Metodologia de decisão (roteiro de aconselhamento)

**Passo 1 — Mapear o que se sabe.** O que consta dos autos hoje? Há acesso? (Súmula Vinculante 14/STF garante à defesa **acesso aos elementos já documentados** — peça vista antes de decidir falar). Sem acesso, presuma que **não se sabe** e incline-se ao silêncio.

**Passo 2 — Diagnóstico do risco de contradição.** Existe prova futura provável (câmeras, laudos, quebras de sigilo, delação) que possa colidir com uma versão precoce? Quanto maior a probabilidade, **mais forte o silêncio**.

**Passo 3 — Há um ganho concreto em falar agora?** Só pesa a favor da versão se houver: (a) **álibi documentável** que possa evitar/relaxar prisão; (b) **flagrante manifestamente ilegal** cuja demonstração imediata beneficie; (c) **oportunidade de acordo** (ANPP/colaboração — ver skills próprias) que dependa de manifestação; (d) risco real de a narrativa da vítima/coautor **cristalizar** sem contraponto. **Ausente ganho concreto, silêncio.**

**Passo 4 — Testar a versão (se cogitada).** A versão é **verdadeira**? É **coerente** internamente? É **documentável**? **Resiste** ao provável avanço da prova? **Não incrimina inocente** (art. 339/341 CP)? Falhou em qualquer item → **não apresentar**.

**Passo 5 — Consciência do art. 155.** Lembre o cliente: o que ele **calar** não pode condená-lo; o que ele **disser** vira elemento que, ainda que não condene sozinho, **serve de fio** para a acusação puxar outras provas e para confrontá-lo depois. Silêncio hoje **não impede** dar a versão no juízo, quando já se conhece toda a prova.

**Passo 6 — Decisão informada e registro.** A decisão é **do cliente**, esclarecido pelo defensor. Registre por escrito (ver adiante): opção escolhida, riscos explicados, documentos disponíveis, presença do advogado no ato.

**Passo 7 — Execução do ato.** Presença do advogado é **direito** (EAOAB, art. 7º) e **fator de validade**. Oriente sobre condução da oitiva, direito de conferenciar reservadamente com o cliente e de fazer consignar em ata qualquer irregularidade.

**Fluxo de decisão (árvore):**
```
1) Tenho acesso aos autos já documentados (SV 14)?
   ├── NÃO → presumir desconhecimento → SILÊNCIO (padrão)
   └── SIM → seguir.
2) Há ganho concreto em falar AGORA (álibi p/ liberdade, flagrante ilegal,
   ANPP, risco de versão adversa cristalizar)?
   ├── NÃO → SILÊNCIO TOTAL.
   └── SIM → a versão é verdadeira, coerente, documentável e resiste à
             prova futura, sem incriminar inocente?
             ├── NÃO → SILÊNCIO (ou seletivo só sobre o ponto verificável).
             └── SIM → VERSÃO (ou SELETIVO com roteiro fechado).
3) Registrar decisão informada + presença do advogado.
```

## Teses e argumentos (defesa)

- **Silêncio não valorável (art. 186, p.ú.; CF, art. 5º, LXIII).** Qualquer uso do silêncio como indício de culpa, fundamento de indiciamento ou de preventiva é ilegítimo — argumento pronto para HC/relaxamento.
- **Baixo valor probatório do inquérito (art. 155 CPP).** O que se diz na delegacia **não condena sozinho**; é peça informativa. Sustenta tanto o conselho de silêncio quanto a impugnação de decisão que se ancore só no IP.
- ***Nemo tenetur* alcança o suspeito ouvido como "testemunha".** Se, no curso da oitiva, as perguntas passam a expor o depoente a autoincriminação, incide o direito ao silêncio — pedir consignação e, se preciso, encerrar respostas de mérito.
- **Acesso prévio (SV 14/STF).** A defesa tem direito de acesso aos elementos **já documentados** antes de qualquer manifestação — decidir falar **sem** vista é decidir mal. Requerer vista é passo defensivo legítimo.
- **Direito à presença do advogado (EAOAB, art. 7º).** Oitiva do investigado sem oportunidade de assistência técnica é irregularidade a consignar.

**Contra-teses (acusação) — antecipar:**
- "O silêncio, somado a outros indícios, reforça a autoria." → **Rebater:** art. 186, p.ú., e CF veda valoração do silêncio; indício de autoria há de vir de prova autônoma.
- "A versão dada na delegacia é confissão." → **Rebater:** elemento informativo (art. 155); confissão extrajudicial não confirmada em juízo não sustenta condenação isolada; cabe retratação (art. 200 CPP).
- "Testemunha tem dever de verdade, então deve responder." → **Rebater:** o dever cede ao *nemo tenetur* quando a resposta autoincrimina; não há crime de falso testemunho em recusa a se autoincriminar.

## Erros comuns e anti-padrões

- **Deixar o cliente falar antes de você chegar.** O flagrado costuma "explicar" ao delegado sozinho. Oriente **desde o primeiro contato**: qualificar-se e **silenciar** até a presença do advogado.
- **Improvisar versão no calor do flagrante.** Versão precoce e não testada é a maior fábrica de contradições. Se não deu para testar (Passos 4), **silêncio**.
- **Confundir com o interrogatório judicial.** Aplicar aqui a lógica de "falar para dar coerência" é importar a estratégia errada — no juízo a prova já é conhecida; aqui, não.
- **Aconselhar mentira ou incriminação de terceiro.** Silêncio e negativa são lícitos; **construir álibi falso, confessar por outrem ou apontar inocente** são crimes (arts. 341, 339, 307 CP) e violam a ética (CED). O defensor **jamais** orienta prova falsa.
- **Ignorar a qualificação.** Silêncio de mérito, sim; recusar-se a se identificar ou dar identidade falsa, **não** (art. 307 CP).
- **Silêncio seletivo sem roteiro.** "Responde só isso" sem limite claro vira interrogatório completo pela porta dos fundos.
- **Não registrar a decisão informada.** Sem registro, a escolha (do cliente) fica sem lastro e o defensor fica exposto.

## Modelo — Termo de decisão informada (silêncio × versão)

> Documento **interno** de aconselhamento, para a pasta do cliente. Não é peça processual. Adapte; toda referência normativa passa por `verificacao-citacoes`.

```
TERMO DE ORIENTAÇÃO E DECISÃO INFORMADA — OITIVA NA FASE DE INVESTIGAÇÃO

Cliente/Investigado: [NOME]                     Data: [DATA]
Procedimento: [IP/BO/PIC nº ...] — [DELEGACIA/ÓRGÃO]
Ato: [oitiva do investigado / comparecimento espontâneo / interrogatório
      do conduzido em flagrante]

1. Fui esclarecido(a) por meu advogado(a) sobre:
   a) o direito de permanecer em silêncio (CF, art. 5º, LXIII; CPP, art. 186)
      e de que o silêncio NÃO importa confissão nem me prejudica;
   b) o valor probatório reduzido do que se diz nesta fase (CPP, art. 155);
   c) o risco de que uma versão apresentada agora, sem conhecimento pleno
      dos autos, possa gerar contradições exploráveis na fase judicial;
   d) que qualificar-me corretamente é obrigatório, mas posso silenciar
      sobre o mérito.

2. Estado dos autos nesta data: [ ] com acesso (SV 14/STF)  [ ] sem acesso.

3. Decisão informada do investigado (assinalar):
   [ ] SILÊNCIO TOTAL sobre o mérito (após qualificação).
   [ ] SILÊNCIO SELETIVO, respondendo apenas: [ponto(s) verificável(is)].
   [ ] APRESENTAÇÃO DE VERSÃO, por [motivo concreto: álibi documentado /
       flagrante ilegal / oportunidade de acordo / ...].

4. Documentos disponíveis nesta data: [listar].

5. Declaro que a decisão acima é minha, tomada de forma livre e esclarecida,
   com a assistência do meu advogado(a), presente ao ato.

______________________________        ______________________________
[NOME DO INVESTIGADO]                  [NOME DO ADVOGADO(A)] — OAB/[UF] [Nº]
```

**Campos a preencher:** [NOME], [DATA], [IP/BO/PIC], [DELEGACIA/ÓRGÃO], [ATO], estado dos autos, opção escolhida, motivo (se versão), documentos, [UF], [Nº] OAB.

## Checklist final (antes do ato)

- [ ] Cliente **qualificado corretamente** e orientado a silenciar só sobre o **mérito** (não sobre identidade — art. 307 CP)?
- [ ] Houve **vista dos autos já documentados** (SV 14) ou está claro que se decide **sem acesso**?
- [ ] Feito o **diagnóstico de contradição futura** (prova provável que colida com versão)?
- [ ] Identificado (ou afastado) um **ganho concreto** em falar agora?
- [ ] Se há versão: ela é **verdadeira, coerente, documentável** e **não incrimina inocente** (arts. 339/341 CP)?
- [ ] Cliente ciente de que o **silêncio não o prejudica** (art. 186, p.ú.) e de que **pode dar a versão depois**, no juízo?
- [ ] **Decisão do cliente** registrada em termo de decisão informada?
- [ ] **Presença do advogado** ao ato assegurada (EAOAB, art. 7º)?
- [ ] Citações/precedentes conferidos via `verificacao-citacoes` / `jurisprudencia-stj-stf`?

## Lembretes finais

- **Silêncio é o padrão na investigação; versão é exceção fundamentada.** Decide-se no escuro — na dúvida, **cale**.
- **A lógica é inversa à do juízo** (art. 400): lá a prova é conhecida; aqui, não. Não importe a estratégia do interrogatório judicial.
- **Silêncio e negativa são lícitos; mentira que incrimina inocente, não** (arts. 339, 341, 307 CP). O defensor nunca orienta prova falsa.
- **A decisão é do cliente**, esclarecido pelo defensor — e **registrada**.
- **O que se cala hoje não condena** (art. 186, p.ú.); o que se diz vira fio para a acusação (art. 155) e munição de confronto futuro.
- **Conferir vigência** do art. 155 e das regras do juiz das garantias, e as citações via `verificacao-citacoes`, antes de qualquer fundamentação.

## Nota de conformidade

Este material é **rascunho técnico de apoio à decisão estratégica**, sujeito a **revisão humana obrigatória**. A escolha entre silêncio e versão é do **cliente**, esclarecido pelo advogado, cuja responsabilidade profissional é intransferível (**EAOAB** e **Código de Ética e Disciplina da OAB**; **Provimento 205/2021** para a comunicação/publicidade). O defensor **não orienta** conduta típica (autoacusação falsa, denunciação caluniosa, falsa identidade). Nenhuma súmula, tese ou precedente citado de memória — tudo passa pelo gate de `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Sigilo e LGPD: o termo de decisão informada e os dados do assistido são **sigilosos** e não vão a repositório público.
