---
name: defesa-crimes-perigo-comum
description: >-
  Use ao defender em crimes de perigo comum / contra a incolumidade pública (CP, Título VIII, Cap.
  I) — incêndio (art. 250), explosão (251), uso de gás tóxico/asfixiante (252),
  fabrico/posse/transporte de explosivo ou gás (253), inundação (254), perigo de inundação (255),
  desabamento ou desmoronamento (256), subtração de material de salvamento (257), formas
  qualificadas pelo resultado (258) e difusão de doença ou praga (259)… Não use para conclusão
  definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, tipos-penais, perigo-comum, incolumidade-publica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-perigo-comum"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-perigo-comum", "defesa crimes", "perigo comum"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes de Perigo Comum (CP, arts. 250-259)

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

Esta skill orienta a **defesa técnica** nos crimes contra a incolumidade pública do Capítulo I do Título VIII do Código Penal — os **crimes de perigo comum**. O que os une é o bem jurídico: a **segurança coletiva** (vida, integridade e patrimônio de um número **indeterminado** de pessoas). A chave da defesa está em atacar exatamente esse ponto — se não havia perigo a uma coletividade indeterminada, ou o crime é outro (dano, lesão, homicídio), ou não há crime.

> **Lição central:** a maioria destes tipos (incêndio, explosão, inundação, desabamento) é de **perigo CONCRETO** — exige que a conduta tenha **efetivamente exposto a perigo** vida, integridade ou patrimônio **de outrem**, e esse perigo precisa estar **provado nos autos**. Perigo presumido, hipotético, dirigido só ao próprio agente ou a bem exclusivamente seu **não basta**. Antes de qualquer tese, faça a tríade: (1) houve perigo **concreto**? (2) o perigo era **comum** (coletividade indeterminada) ou **individual** (pessoa/coisa determinada)? (3) o elemento subjetivo é **dolo de perigo** ou **culpa**? As três respostas definem tipicidade, classificação e pena.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 250-259 do CP e as **penas** de cada tipo/parágrafo na fonte oficial antes de fundamentar — parágrafos e majorantes são frequentemente confundidos. Verifique também eventual concurso aparente com a **Lei 10.826/2003** (Estatuto do Desarmamento) quanto a artefatos explosivos [NÃO VERIFICADO — conferir norma aplicável]. Toda súmula, tese ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes do uso.

## Bem jurídico e a distinção que decide o caso

- **Incolumidade pública** = segurança de pessoas e bens em número **indeterminado**. É crime de perigo **comum** justamente porque o risco extravasa a esfera de vítimas certas.
- **Perigo concreto x abstrato.** Os núcleos "expondo a perigo a vida, a integridade física ou o patrimônio de outrem" (arts. 250, 251, 254, 255, 256) reclamam, pela doutrina majoritária, **perigo concreto** — a exposição a risco tem de ser **real e demonstrada**. Já o art. 253 (fabrico/posse/transporte de explosivo ou gás) é tratado como **perigo abstrato/presumido**. Essa etiqueta muda o ônus probatório e a estratégia.
- **Perigo comum x dano x crime contra a pessoa.** Fogo/explosão/alagamento voltado a **coisa ou pessoa determinada**, sem risco à coletividade, **não é** crime de perigo comum: pode ser **dano qualificado** (art. 163, § único, II) ou **crime contra a pessoa** (lesão/homicídio, tentado ou consumado). Identificar para onde apontava o perigo é o primeiro corte defensivo.

## Base legal — mapa dos tipos (conferir penas na redação vigente)

| Art. | Crime | Modalidade dolosa | Modalidade culposa | Natureza |
|------|-------|-------------------|--------------------|----------|
| 250 | Incêndio | reclusão 3-6 anos + multa (§1º: causas de aumento — casa habitada, edifício público, embarcação, lavoura/mata, seguro etc.) | §2º: detenção 6m-2a | perigo concreto |
| 251 | Explosão | reclusão 3-6 anos + multa (dinamite/análogos); §1º: reclusão 1-4a (outras substâncias) | §3º: detenção 6m-2a | perigo concreto |
| 252 | Uso de gás tóxico ou asfixiante | reclusão 1-4 anos | § único: detenção 3m-1a | perigo concreto |
| 253 | Fabrico/fornecimento/aquisição/posse/transporte de explosivo ou gás | detenção 6m-2a + multa | — | perigo abstrato |
| 254 | Inundação | reclusão 3-6 anos + multa | (no caput) detenção 6m-2a | perigo concreto |
| 255 | Perigo de inundação | reclusão 1-3 anos + multa | — | perigo concreto |
| 256 | Desabamento ou desmoronamento | reclusão 1-4 anos + multa | § único: detenção 6m-1a | perigo concreto |
| 257 | Subtração/ocultação/inutilização de material de salvamento | reclusão 2-5 anos + multa | — | — |
| 258 | **Formas qualificadas pelo resultado** (regra de aumento — ver abaixo) | — | — | preterdolo |
| 259 | Difusão de doença ou praga (plantas/animais úteis) | reclusão 2-5 anos + multa | § único: detenção 1-6m ou multa | — |

**Art. 258 (formas qualificadas pelo resultado) — leitura obrigatória:**
- Crime **doloso** de perigo comum + **lesão grave** (culposa) → pena **+ 1/2**; + **morte** (culposa) → pena **em dobro**.
- Crime **culposo** de perigo comum + **lesão** → pena **+ 1/2**; + **morte** → pena do **homicídio culposo aumentada de 1/3**.
- É **preterdolo**: o resultado agravador tem de ser ao menos **culposo e previsível**. Se houver **dolo** (direto ou eventual) quanto à morte/lesão, o caso migra para **homicídio/lesão dolosos** — não se aplica o 258 (evitar dupla punição).

## Metodologia — roteiro de defesa em 7 passos

1. **Classificar antes de tudo** (tríade da Lição central): perigo concreto? comum ou individual? dolo ou culpa? Só então escolha o inciso/artigo e as teses.
2. **Testar a materialidade pela perícia.** Incêndio, explosão e desabamento deixam vestígios → **exame de corpo de delito indispensável** (art. 158 CPP); a confissão **não supre** a perícia. Sem laudo idôneo da origem, da extensão e do **perigo concreto**, a materialidade cai.
3. **Verificar o perigo concreto no laudo e na prova oral.** Havia terceiros/bens de terceiros expostos a risco real? Fogo de pequena monta, controlado, sem aptidão de propagação, tende à **atipicidade** ou à desclassificação para dano.
4. **Aferir para onde apontava a conduta** — coletividade indeterminada (perigo comum) ou alvo determinado (dano/crime contra a pessoa). Definir a **desclassificação** cabível.
5. **Depurar o elemento subjetivo** — provar que houve dolo **de expor a perigo** é ônus da acusação; frequentemente o quadro é de **culpa** (pena muito menor) ou de **caso fortuito** (atipicidade).
6. **Filtrar majorantes e o art. 258** — as causas de aumento e as qualificadoras pelo resultado exigem enquadramento estrito e nexo (culposo) com o resultado; barrar analogia *in malam partem* e responsabilidade objetiva.
7. **Revisar concurso/consunção** — crime único (bem jurídico coletivo) vs. multiplicação por vítima; absorção do perigo pelo crime-fim; *bis in idem* entre 258 e homicídio.

## Teses defensivas por tipo penal (e as contra-teses da acusação)

### Incêndio (art. 250)
- **Atipicidade por ausência de perigo comum concreto** — o fogo não expôs a risco vida/integridade/patrimônio de terceiros indeterminados; risco restrito ao próprio agente ou a bem exclusivamente próprio. Exigir que o **perigo concreto** esteja demonstrado no laudo.
- **Desclassificação para dano qualificado (art. 163, § único, II)** — fogo dirigido a coisa **determinada**, sem aptidão de propagação e sem perigo à coletividade: é **dano por substância inflamável**, não incêndio. Pena sensivelmente menor.
- **Desclassificação para incêndio culposo (§2º)** — afastar o dolo de perigo; imprudência/negligência (fogueira, curto-circuito, queima de lixo) que escapou ao controle.
- **Afastar majorantes do §1º** — casa habitada, edifício público, embarcação, lavoura/mata, intuito de seguro etc. exigem subsunção estrita; sem prova, incide só o *caput*.
- **Desistência voluntária / arrependimento eficaz (art. 15 CP)** — agente que apaga o próprio fogo antes de instalado o perigo comum responde só pelos atos já praticados (eventual dano), não pelo incêndio consumado; discutir também a **tentativa** quando o perigo concreto não chegou a ocorrer.
- **Contra-tese (acusação):** o perigo concreto se infere do contexto e da prova oral, dispensando quantificação; o dolo eventual de perigo basta.

### Explosão e explosivos (arts. 251 e 253)
- **Enquadramento no §1º do art. 251** (substância que **não** é dinamite nem de efeitos análogos) → pena menor que a do *caput*; disputar a natureza do artefato no laudo.
- **Perigo concreto no 251; atipicidade da posse (253) sem lastro** — no 253, discutir a real destinação e a idoneidade do material; ausência de potencial lesivo pode esvaziar a tipicidade.
- **Concurso aparente com a Lei 10.826/2003 (artefato explosivo)** — havendo dupla incidência, sustentar aplicação de **uma só** norma (especialidade/consunção), vedado *bis in idem* [NÃO VERIFICADO — conferir a norma prevalente via `jurisprudencia-stj-stf`].
- **Contra-tese:** o art. 253 é de perigo **abstrato**, bastando a conduta (fabricar/possuir/transportar), independentemente de perigo demonstrado.

### Inundação, perigo de inundação e desabamento (arts. 254-256)
- **Perigo concreto e nexo causal** — o alagamento/desmoronamento tem de ter **efetivamente** ameaçado terceiros; exigir laudo que ligue a conduta ao resultado e ao risco.
- **Desclassificação para a modalidade culposa** (art. 254, parte final; art. 256, § único) — obra malfeita, omissão de cautela, sem dolo de expor a perigo.
- **Atipicidade por ausência de exposição a terceiros** — dano circunscrito ao próprio imóvel/obra do agente, sem risco a vizinhos ou à via pública.
- **Contra-tese:** a potencialidade lesiva da água/estrutura já revela o perigo comum; a previsibilidade sustenta ao menos a forma culposa.

### Formas qualificadas pelo resultado (art. 258)
- **Preterdolo, não responsabilidade objetiva** — o resultado agravador (lesão grave/morte) só qualifica se decorreu de **culpa** e era **previsível**; resultado imprevisível não incide.
- **Migração para crime doloso contra a pessoa** — se havia **dolo** (direto/eventual) de matar ou lesionar por meio do fogo/explosão, o caso é **homicídio/lesão** (eventualmente com a qualificadora do meio de perigo comum), e **não** perigo comum + 258 — impedir a **dupla valoração**.
- **Contra-tese:** o resultado morte/lesão, ainda que não desejado, agrava por força de lei (preterdolo), bastando a culpa.

## A prova pericial é o campo de batalha (arts. 158 e 158-A a 158-F do CPP)

- **Exame de corpo de delito indispensável** onde há vestígios (incêndio, explosão, desabamento) — a **materialidade** depende do laudo; a confissão isolada **não** supre (art. 158 CPP).
- **Fiscalizar a cadeia de custódia** (arts. 158-A a 158-F) — coleta, acondicionamento e rastreabilidade dos vestígios do local; rupturas comprometem a prova (ver skill de **cadeia de custódia**).
- **Atacar o laudo genérico** — deve apurar **origem/causa** do fogo, **extensão**, **aptidão de propagação** e, sobretudo, o **perigo concreto** a terceiros. Laudo que apenas descreve o dano, sem demonstrar o risco coletivo, é imprestável para condenar por perigo comum.
- **Requerer perícia complementar / assistente técnico e quesitos** quando o laudo oficial for lacônico (arts. 159, §§, e 176 do CPP).

## Súmulas e precedentes (sob Citation Gate)

- **Não há**, no repertório desta skill, súmula vinculante específica sobre os arts. 250-259 — **não invente** enunciado. Precedente concreto sobre perigo concreto, desclassificação incêndio↔dano ou alcance do art. 258 deve ser **localizado e conferido** via `jurisprudencia-stj-stf` antes de citar.
- **Prefira tese + dispositivo a número de acórdão.** Ex.: "os crimes dos arts. 250/254 são de perigo concreto, exigindo demonstração do risco (doutrina majoritária)" é sustentável sem citar julgado; atribuir a decisão a órgão/número **sem conferência** é vedado.
- Qualquer afirmação de que "o STJ/STF entende X" fica **[NÃO VERIFICADO]** até passar pelo gate.

## Erros comuns e checklist

- [ ] Classificou a **tríade** (perigo concreto? comum ou individual? dolo ou culpa?) **antes** de escolher o tipo?
- [ ] Conferiu **perigo concreto demonstrado** no laudo (arts. 250, 251, 254, 255, 256)?
- [ ] Testou **desclassificação** para dano qualificado (163, § único, II) ou para a **modalidade culposa**?
- [ ] Exigiu **exame de corpo de delito** idôneo e checou a **cadeia de custódia** (arts. 158 e 158-A a 158-F CPP)?
- [ ] Barrou majorantes do art. 250, §1º sem subsunção estrita?
- [ ] Tratou o art. 258 como **preterdolo** (culpa + previsibilidade), afastando responsabilidade objetiva?
- [ ] Impediu **bis in idem** entre 258 e homicídio/lesão dolosos?
- [ ] Evitou multiplicar o crime por número de vítimas (bem jurídico **coletivo** → crime único)?
- [ ] Passou toda súmula/tese/acórdão pela skill `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aceitar **perigo presumido** onde o tipo exige perigo **concreto**.
- Confundir **incêndio** (perigo comum) com **dano** por fogo (alvo determinado) — e vice-versa.
- Tratar a modalidade **culposa** como se fosse a dolosa (pena até 3x maior).
- Aplicar o art. 258 por **responsabilidade objetiva**, sem culpa/previsibilidade quanto ao resultado.
- Cumular perigo comum qualificado pela morte **e** homicídio doloso (dupla punição pelo mesmo resultado).
- Sustentar condenação com base só em confissão, sem **perícia** dos vestígios.
- Contar tantos crimes quantas forem as vítimas, ignorando que o bem jurídico é a incolumidade **pública**.

## Conformidade e ética

- **Polo defensivo.** Esta skill assume atuação **pela defesa** (a spec registra `polo_acusacao: false`); as teses são de defesa técnica. Havendo atuação acusatória, os deveres e a régua ética são outros — não reaproveitar as teses defensivas.
- **Revisão humana obrigatória.** Todo produto é **rascunho / hipótese a confirmar**; a peça só vai a protocolo após revisão do advogado responsável (CED, art. 2º).
- **Citation Gate.** Nenhuma súmula/precedente/tese de memória — tudo pela skill `jurisprudencia-stj-stf` (há sanção real por jurisprudência inventada por IA).
- **Sigilo/LGPD.** Dados do assistido e do caso nunca em repositório público.

## Lembretes finais

- **Perigo concreto, comum e demonstrado** — é o coração da defesa nos arts. 250, 251, 254, 255 e 256.
- **Classificação primeiro, tese depois** — a tríade (concreto? comum? doloso?) precede a escolha do artigo.
- **Perícia é materialidade** — sem laudo idôneo dos vestígios, não há condenação (art. 158 CPP); a confissão não supre.
- **Desclassificar** para dano qualificado ou para a forma **culposa** costuma valer mais que discutir só a pena.
- **Art. 258 = preterdolo** — culpa e previsibilidade; se o resultado é doloso, é homicídio/lesão, não 258.
- **Conferir vigência** dos arts. 250-259 e **verificar** toda citação via `jurisprudencia-stj-stf` antes de peticionar.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais ou recurso), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
