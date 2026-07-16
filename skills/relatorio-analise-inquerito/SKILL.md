---
name: relatorio-analise-inquerito
description: >-
  Use para produzir RASCUNHO de relatório técnico-defensivo de análise do inquérito policial — o
  parecer interno (memorando de caso) que consolida a força probatória de cada elemento colhido, os
  pontos fortes e fracos da tese acusatória em formação, a matriz de provas contra e a favor, o
  risco de indiciamento/denúncia e a recomendação estratégica (arquivamento, ANPP, silêncio,
  produção de contraprova, resposta ao MP). Base… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-relatorio-analise-inquerito"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["relatorio-analise-inquerito", "relatorio analise", "analise inquerito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Relatório de Análise do Inquérito Policial (CPP arts. 4º, 12 e 28-A)

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

Esta skill orienta a produção do **relatório técnico-defensivo de análise do inquérito policial** — a peça **diagnóstica e interna** (memorando de caso, dirigida ao cliente e ao escritório, **não** ao juízo) que traduz a leitura crítica dos autos da investigação em uma **recomendação estratégica documentada**. É o produto que responde, com método, à pergunta que o cliente sempre faz: *"o que eles têm contra mim, e o que fazemos agora?"*.

Não confundir com o **relatório da autoridade policial** (art. 10, §1º, e art. 12 do CPP), que é peça do delegado. Aqui é a **contraleitura da defesa** sobre esse acervo — feita com base no direito de vista dos autos já documentados (EAOAB, art. 7º, XIV; **Súmula Vinculante 14/STF**).

> **Lição central:** o relatório não é resumo dos autos — é **avaliação de força probatória e de risco**. Para cada elemento colhido, pergunte três coisas: (1) *o que ele prova?* (materialidade, autoria, dolo, ou nada); (2) *quão forte é?* (indício isolado, prova robusta, prova ilícita/nula); (3) *é atacável?* (cadeia de custódia, ilicitude, contradição, lacuna). O produto final é uma **matriz** e uma **recomendação**, não uma narrativa.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 28-A do CPP** (ANPP, incluído pela Lei 13.964/2019 — Pacote Anticrime) e do **art. 28** (arquivamento, cuja redação e sistemática foram alteradas pela mesma lei — a eficácia de parte dos dispositivos ficou suspensa por decisões do STF nas ADIs 6.298 e conexas; **confirme o estado atual**). Toda súmula, tema ou precedente citado passa **obrigatoriamente** pelo gate da skill `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de uso. Na dúvida, **omitir vence inventar**.

## Natureza e finalidade

O inquérito é **procedimento administrativo, inquisitivo e informativo** (CPP, art. 4º) — sua finalidade é apurar a infração e a autoria para **formar a opinio delicti** do titular da ação penal. Os elementos nele colhidos são, em regra, **de valor probatório reduzido** (não submetidos ao contraditório): não bastam, sozinhos, para condenar (CPP, art. 155 — a sentença não pode fundar-se **exclusivamente** nos elementos informativos do inquérito). Isso é a espinha dorsal da análise: **quase tudo no IP é indício a ser confirmado em juízo**, e a defesa mede exatamente essa distância.

- **Elemento informativo (IP)** — colhido sem contraditório; base da denúncia, não da condenação.
- **Prova cautelar, não repetível ou antecipada** (exceção do art. 155) — vale mesmo sem contraditório posterior (ex.: perícia irrepetível). **Atenção especial**: estes são os elementos do IP que **não** se diluem em juízo — são os mais perigosos para a defesa e merecem análise redobrada (cadeia de custódia, requisitos de validade).

## Base legal

- **CPP, art. 4º** — finalidade do IP (apuração da infração e da autoria); caráter informativo.
- **CPP, art. 12** — o IP acompanha a denúncia/queixa quando serve de base.
- **CPP, art. 155** — o juiz não pode condenar com base **exclusiva** nos elementos informativos do inquérito (contraditório diferido; exceção das provas cautelares/irrepetíveis/antecipadas).
- **CPP, art. 28 e 28-A** — arquivamento e **acordo de não persecução penal (ANPP)** (redação da Lei 13.964/19).
- **CPP, art. 395 e 396** — condições da ação e rejeição/recebimento da denúncia (parâmetro do "risco de denúncia").
- **EAOAB (Lei 8.906/94), art. 7º, XIV** + **Súmula Vinculante 14/STF** — direito de vista/acesso aos elementos **já documentados** no inquérito (pressuposto material da análise).
- **CF, art. 5º, LV, LVI, LXIII** — contraditório diferido, inadmissibilidade das provas ilícitas, direito ao silêncio (matriz das teses de exclusão).

## Metodologia — roteiro de análise (passo a passo)

### 1. Delimitar o objeto e o estágio
- Qual o **fato investigado** e a **capitulação provável** (tipo penal, forma, causas de aumento)? A capitulação define o percurso (competência, pena, cabimento de ANPP, prescrição).
- Em que **fase** está o IP: em curso, relatado (art. 10, §1º), indiciamento formalizado, ou já com vista ao MP? O estágio calibra a urgência e a rota.
- **Prazos:** IP com indiciado preso vs. solto (art. 10 — atenção às alterações e à contagem); risco de **prescrição** (checar via skill `prescricao`).

### 2. Inventariar o acervo (o que existe nos autos)
Liste **cada** elemento com sua origem e o que pretende provar:
- Boletim/registro de ocorrência e portaria/requisição de instauração.
- Depoimentos (vítima, testemunhas, condutor do flagrante) — **quem disse o quê**.
- Interrogatório/declarações do investigado (e se houve advogado, direito ao silêncio, CF art. 5º, LXIII).
- Autos de prisão em flagrante, busca e apreensão, reconhecimento (art. 226 CPP — formalidades).
- Laudos periciais (materialidade, nexo, corpo de delito — art. 158), exames, laudo de local.
- Interceptações, quebras de sigilo, extração de dados, provas digitais (mandado, autorização judicial).
- Documentos, imagens/vídeos, dados de geolocalização, relatórios de análise.

### 3. Avaliar a **força probatória** de cada elemento (o núcleo)
Para cada item, pontue em três eixos:
- **O que prova?** — materialidade / autoria / dolo (elemento subjetivo) / circunstâncias / nada de útil.
- **Quão robusto?** — (a) prova cautelar/irrepetível (peso alto, sobrevive em juízo); (b) indício que precisa de confirmação em juízo (peso médio); (c) frágil, contraditório ou isolado (peso baixo); (d) **ilícito/nulo** (peso zero — e munição para exclusão).
- **É atacável?** — cadeia de custódia (arts. 158-A a 158-F CPP), ilicitude (CF art. 5º, LVI), nulidade formal (ex.: reconhecimento fora do art. 226), contradição com outro elemento, ausência de mandado.

### 4. Montar a **matriz de provas** (contra × a favor)
Uma tabela é o coração do relatório. Modelo:

| # | Elemento | O que prova | Força (0–3) | Vetor | Vulnerabilidade / ataque |
|---|----------|-------------|-------------|-------|--------------------------|
| 1 | Laudo pericial (arma) | materialidade | 3 (cautelar) | contra | conferir cadeia de custódia (158-A) |
| 2 | Reconhecimento fotográfico | autoria | 1 | contra | fora do rito do art. 226 → frágil (ver STJ infra) |
| 3 | Depoimento de testemunha | autoria | 2 | contra | contradiz laudo de local; ouvir de novo em juízo |
| 4 | Álibi documentado | afasta autoria | 2 | a favor | juntar comprovantes; requerer diligência |
| 5 | Interceptação | dolo/autoria | 0/3 | contra | verificar autorização judicial; sem ela → ilícita |

> **Força (0–3):** 0 = nula/ilícita; 1 = indício frágil; 2 = indício relevante a confirmar; 3 = prova cautelar/robusta que tende a sobreviver em juízo.

### 5. Diagnosticar a **tese acusatória em formação**
- O acervo, **hoje**, fecha **materialidade + autoria + dolo**? Onde estão as **lacunas**?
- A denúncia, se oferecida, teria **justa causa** (lastro probatório mínimo — pressuposto do art. 395, III)? Ou é caso de **rejeição** por falta de justa causa?
- Identificar o **elo mais fraco** da acusação (o ponto onde a defesa concentra fogo) e o **elo mais forte** (o que a defesa precisa neutralizar ou conviver).

### 6. Calcular o **risco de indiciamento/denúncia** (matriz de risco)
Traduzir o diagnóstico num veredito de probabilidade, sempre como **hipótese técnica**:

| Nível | Cenário | Sinais típicos |
|-------|---------|----------------|
| **BAIXO** | denúncia improvável | acervo só indiciário, lacuna em autoria ou dolo, provas atacáveis, indício de atipicidade/excludente |
| **MÉDIO** | denúncia possível | materialidade sólida, autoria em disputa, teses de exclusão viáveis mas não certas |
| **ALTO** | denúncia provável | materialidade + autoria + dolo amparados por prova cautelar/robusta e de baixa vulnerabilidade |

Explicitar **o que muda o nível** (ex.: "se a interceptação cair por ausência de autorização, o risco passa de ALTO a MÉDIO").

### 7. Formular a **recomendação estratégica**
Escolher a rota (ou combinação), justificando à luz da matriz e do risco:
- **Aguardar / silêncio ativo** — quando intervir só alerta a acusação; preservar o direito ao silêncio (CF art. 5º, LXIII) e não produzir prova contra o cliente.
- **Requerer diligências / produzir contraprova** — quando há elemento a favor documentável (álibi, perícia, testemunha) que enfraquece a autoria antes da denúncia.
- **Pleitear arquivamento** — quando falta justa causa, há atipicidade, excludente ou prova só ilícita (razões ao MP; CPP art. 28).
- **Buscar ANPP** — quando presentes os requisitos do art. 28-A (confissão formal e circunstanciada; pena mínima inferior a 4 anos; sem violência ou grave ameaça; não reincidente; não cabível transação penal). **Avaliar custo-benefício**: o ANPP exige confissão — pesar contra a chance real de absolvição/arquivamento.
- **Colaboração premiada** — em crimes de organização/multiautoria, quando a posição do cliente e a existência de terceiros a delatar recomendam (skill própria de justiça negocial, se houver).
- **Resposta / manifestação ao delegado ou ao MP** — memorial defensivo apontando lacunas e requerendo providências.

## Teses e ataques recorrentes (defensivos)

- **Valor reduzido do IP (art. 155):** nenhuma condenação se sustenta **só** no inquérito. Antecipar isso já na análise e sinalizar que cada elemento precisará ser **repetido sob contraditório** em juízo — o que abre espaço de retratação de testemunhas, contradições, esvaziamento.
- **Prova ilícita (CF, art. 5º, LVI):** ausência de mandado, autorização judicial de interceptação/quebra de sigilo, busca ilegal → **inadmissibilidade** e **contaminação por derivação** (*fruits of the poisonous tree*, art. 157, §1º, CPP).
- **Cadeia de custódia (CPP, arts. 158-A a 158-F):** vestígio sem rastreabilidade documentada compromete a confiabilidade da prova pericial/material — tese de **quebra de custódia** (aferir consequência — nulidade vs. valoração — na jurisprudência atual, sob o gate).
- **Reconhecimento pessoal viciado (art. 226):** reconhecimento fora das formalidades legais tem sua força questionada. **[NÃO VERIFICADO]** o STJ evoluiu para tratar o descumprimento do rito do art. 226 como vício relevante — **confirmar o precedente e seu alcance atual via `jurisprudencia-stj-stf`** antes de citar número de acórdão ou tema.
- **Atipicidade / excludente** aparente no próprio acervo (legítima defesa documentada, ausência de dolo, insignificância) → sustentar **arquivamento**.
- **Ausência de justa causa** para futura denúncia (art. 395, III) → lastro probatório insuficiente sobre autoria/dolo.

### Contra-teses (a antecipar — o que o MP dirá)
- Elemento de inquérito **corroborado** por outros indícios pode, no conjunto, dar justa causa à denúncia (que exige apenas lastro mínimo, não prova plena).
- **Prova cautelar/irrepetível** (art. 155, parte final) sobrevive sem contraditório — não se dilui em juízo.
- Vícios do IP são, em geral, **meras irregularidades** que não contaminam a ação penal (o IP é peça informativa e dispensável) — salvo quando atingem **prova** que embasa a denúncia. **A defesa distingue:** vício de procedimento (irrelevante) × ilicitude de prova (contamina).

## Súmulas e precedentes relevantes (sob o Citation Gate)

Cite livremente os **dispositivos de lei** (CPP, CP, CF) acima. Para **súmulas e precedentes**, use apenas os que tiver certeza e **confirme número/alcance via `jurisprudencia-stj-stf`**:

- **Súmula Vinculante 14/STF** — direito do defensor de **acesso aos elementos já documentados** no inquérito que digam respeito ao exercício da defesa. (Pressuposto material da própria análise — sem acesso, não há relatório.)
- **Súmula 524/STF** — arquivado o IP por falta de provas, só cabe nova ação com **prova nova** (relevante para avaliar o efeito do arquivamento pleiteado). **[CONFERIR redação e vigência]**.
- **Evolução do STJ sobre o art. 226 (reconhecimento)** — **[NÃO VERIFICADO]** há orientação recente endurecendo as formalidades do reconhecimento; **confirmar precedente, número e alcance** antes de citar.
- **Tese sobre cadeia de custódia (arts. 158-A a 158-F)** — a consequência da quebra (nulidade × redução de valor probatório) tem oscilado; **verificar o estado atual** no STJ/STF via a skill de jurisprudência.

> **Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.** Melhor faltar precedente do que citar julgado inexistente — há sanções reais por jurisprudência inventada por IA.

## Estrutura sugerida do relatório (documento interno)

```
RELATÓRIO DE ANÁLISE DO INQUÉRITO POLICIAL — [Nº DO IP / DELEGACIA]
Cliente: [NOME]  ·  Fato: [SÍNTESE]  ·  Capitulação provável: [ART.]
Data: [DATA]  ·  Advogado responsável: [NOME] — OAB/[UF] [Nº]

CONFIDENCIAL — documento interno de trabalho. Não é peça processual.
Sujeito a revisão do advogado responsável antes de qualquer decisão.

1. SÍNTESE EXECUTIVA (½ página)
   - O que se investiga, estágio, e o VEREDITO: risco [BAIXO/MÉDIO/ALTO] +
     recomendação em uma linha.

2. DELIMITAÇÃO DO OBJETO
   - Fato, capitulação provável, fase do IP, prazos e prescrição.

3. INVENTÁRIO DO ACERVO
   - Lista de cada elemento colhido e sua origem.

4. MATRIZ DE FORÇA PROBATÓRIA (a tabela — contra × a favor)
   - Elemento | prova | força (0–3) | vetor | vulnerabilidade.

5. DIAGNÓSTICO DA ACUSAÇÃO EM FORMAÇÃO
   - Materialidade / autoria / dolo: o que fecha e o que falta (lacunas).
   - Elo mais fraco e elo mais forte.

6. PONTOS FORTES E FRACOS DA DEFESA
   - Teses viáveis (ilicitude, custódia, art. 226, atipicidade...).
   - Riscos e provas cautelares que não se diluem.

7. MATRIZ DE RISCO
   - Nível + os gatilhos que o alteram.

8. RECOMENDAÇÃO ESTRATÉGICA
   - Rota escolhida (silêncio / diligência / arquivamento / ANPP /
     colaboração / resposta ao MP), com justificativa e próximos passos
     datados.

9. RESSALVAS E PENDÊNCIAS
   - O que ainda não se tem acesso; citações a verificar; revisão humana.
```

**Campos a preencher:** [Nº DO IP], [DELEGACIA], [NOME], [SÍNTESE], [CAPITULAÇÃO], [DATA], [ADVOGADO], [UF], [Nº OAB].

## Erros comuns (anti-padrões)

- **Resumir os autos** em vez de **avaliar força e risco** — o relatório vira ata, não diagnóstico.
- Tratar elemento de inquérito como **prova plena**, esquecendo o art. 155 (quase tudo precisa ser repetido em juízo).
- **Ignorar as provas cautelares/irrepetíveis** — justamente as que sobrevivem sem contraditório e mais pesam contra o cliente.
- Confundir **irregularidade do IP** (irrelevante) com **ilicitude da prova** (contamina a ação) — a distinção é o cerne da análise.
- Recomendar **ANPP** sem pesar que ele exige **confissão** e pode ser pior que apostar em arquivamento/absolvição.
- **Produzir contraprova cedo demais**, revelando a estratégia e municiando a acusação, quando o silêncio serviria melhor.
- Citar **súmula/precedente de memória** (art. 226, cadeia de custódia, Súmula 524) sem passar pelo **gate de verificação**.
- Não **datar** as recomendações nem sinalizar prazos/prescrição — o relatório precisa acionar providências.
- Esquecer que o documento é **interno e sigiloso** (LGPD; dados de assistido não vão a repositório público — `acervo/casos/` é gitignored).

## Checklist final

- [ ] Objeto, capitulação e **fase do IP** delimitados; prazos e **prescrição** conferidos (skill `prescricao`)?
- [ ] **Cada elemento** do acervo inventariado com origem e o que prova?
- [ ] **Matriz de força probatória** montada (força 0–3, vetor contra/a favor, vulnerabilidade)?
- [ ] Provas **cautelares/irrepetíveis** (art. 155) sinalizadas à parte — as que não se diluem?
- [ ] Teses de **ilicitude** (CF art. 5º, LVI), **cadeia de custódia** (158-A ss.) e **reconhecimento** (art. 226) avaliadas?
- [ ] Diagnóstico explícito de **materialidade × autoria × dolo** e das **lacunas**?
- [ ] **Nível de risco** de denúncia definido, com os **gatilhos** que o alteram?
- [ ] **Recomendação** clara e datada (silêncio / diligência / arquivamento / ANPP / colaboração / resposta)?
- [ ] Requisitos de **ANPP** (art. 28-A) checados na redação vigente, com custo-benefício da confissão?
- [ ] **Súmulas/precedentes** verificados via `jurisprudencia-stj-stf` — nada citado de memória?
- [ ] Documento marcado como **interno/confidencial** e sujeito a **revisão humana** do advogado responsável?

## Nota de conformidade

Este material é **rascunho técnico de apoio** e produz um **documento interno de trabalho** (memorando de caso) — **não** é peça processual e **não** substitui o juízo profissional. A responsabilidade pela análise, pela estratégia e por qualquer decisão dela decorrente é sempre do **advogado responsável** (EAOAB e Código de Ética e Disciplina da OAB; Provimento 205/2021 na advocacia). A elaboração exige o **acesso lícito aos autos** (EAOAB art. 7º, XIV; SV 14/STF). Todo dispositivo é citável, mas **toda súmula, tese ou acórdão** passa **obrigatoriamente** pelo gate de `verificacao-citacoes` / `jurisprudencia-stj-stf` antes do uso — há sanções reais por jurisprudência inventada. Dados do cliente/assistido são **sigilosos** (LGPD) e nunca vão a repositório público. **Revisão humana obrigatória** antes de qualquer providência.

**Padrão de redação:** para a manifestação externa que decorra deste relatório (resposta ao MP, razões de arquivamento, requerimento de diligências), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão.
