---
name: decisao-recorrer-vs-negociar
description: >-
  Use ao decidir o caminho estratégico diante de uma condenação, proposta ou impasse — a análise
  custo-benefício entre RECORRER, buscar ACORDO (ANPP/colaboração/plea), ACEITAR a pena ou EXECUTAR
  provisoriamente, ponderando risco de reformatio in pejus, prescrição pela pena em concreto,
  detração e efeitos colaterais da condenação. Gatilhos: recorrer ou não, vale a pena recorrer,
  aceitar acordo, negociar ou litigar… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, estrategia, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-decisao-recorrer-vs-negociar"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["decisao-recorrer-vs-negociar", "decisao recorrer", "recorrer negociar"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Decisão Estratégica: Recorrer × Negociar × Aceitar (CPP art. 617; CP arts. 110, 42, 91-92; CPP art. 28-A)

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

Esta skill orienta a **decisão estratégica anterior à execução de qualquer rota** — o momento em que a defesa, diante de uma condenação, de uma proposta do MP ou de um impasse, precisa **escolher entre caminhos incompatíveis**: **recorrer**, **buscar acordo** (ANPP, colaboração premiada, transação/plea), **aceitar a pena** ou **executar provisoriamente**. Não é a execução do recurso nem do acordo — é a **ponderação decisória transversal** que define qual porta abrir, e que hoje muitos escritórios tomam no *feeling*.

> **Lição central:** decisão estratégica não é palpite — é **comparação de cenários com números**. Antes de aconselhar, calcule para cada rota: (1) o **melhor e o pior resultado plausível**, (2) o **risco de reformatio in pejus**, (3) o efeito sobre a **prescrição pela pena em concreto**, (4) a **detração** e o tempo já cumprido, e (5) os **efeitos colaterais** (reincidência, maus antecedentes, perda de cargo, confisco). A recomendação nasce da **matriz**, não da intuição.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 28-A do CPP** (ANPP — Lei 13.964/2019 e alterações posteriores), dos **arts. 109-110 do CP** (prescrição e a vedação da prescrição retroativa antes do recebimento da denúncia — Lei 12.234/2010), do **art. 617 do CPP** (reformatio in pejus) e das leis de colaboração (Lei 12.850/2013). Toda súmula, tema ou precedente citado passa **obrigatoriamente** pelo gate da skill `jurisprudencia-stj-stf` antes de fundamentar qualquer aconselhamento. Na dúvida, **omitir vence inventar**.

Esta skill é da **defesa** (advocacia ou Defensoria). Ela decide o interesse do acusado/condenado; o **MP tem sua própria lógica de acordo/recurso**, que não é objeto aqui.

## Base legal (âncoras)

- **Art. 617 do CPP** — na apelação **exclusiva da defesa**, é **vedada a reformatio in pejus**: o tribunal não pode agravar a pena nem piorar a situação do réu. É a pedra angular da decisão de recorrer.
- **Art. 110 do CP** — **prescrição da pretensão executória** regula-se pela **pena aplicada** (em concreto). Com o trânsito para a acusação, a **prescrição retroativa** (art. 110, §1º) passa a ser calculada pela pena em concreto — vetor central do custo-benefício.
- **Art. 109 do CP** — prazos prescricionais por faixa de pena; base de todo o cálculo de prescrição.
- **Art. 42 do CP** — **detração**: desconta-se da pena o tempo de prisão cautelar/provisória e de internação. Define quanto o cliente **já cumpriu** e o que sobra a executar.
- **Arts. 91 e 92 do CP** — **efeitos da condenação** (confisco de instrumentos/produto do crime; perda de cargo; incapacidade para o poder familiar; inabilitação para dirigir). Efeitos colaterais que uma rota pode acionar e outra evitar.
- **Art. 28-A do CPP** — **ANPP** (acordo de não persecução penal): requisitos, confissão, condições e o efeito de **não gerar reincidência nem maus antecedentes** quando cumprido.
- **Lei 12.850/2013** — **colaboração premiada**: benefícios possíveis (redução, substituição, perdão) e o custo (confissão, delação, exposição).
- **Lei 9.099/95, arts. 76 e 89** — **transação penal** e **suspensão condicional do processo** (infrações de menor potencial ofensivo / pena mínima ≤ 1 ano), rotas negociais para os casos leves.

## As rotas em disputa (o que se está escolhendo)

| Rota | Quando cabe | Ganho típico | Custo/risco típico |
|------|-------------|--------------|--------------------|
| **Recorrer** | Há tese com chance real (nulidade, absolvição, redução) | Absolvição, anulação, redução de pena/regime | Tempo, prolongamento; **reformatio só se houver recurso da acusação**; custo emocional/financeiro |
| **Aceitar (não recorrer)** | Pena já favorável; recurso pioraria o tempo total; prescrição próxima | Trânsito rápido, início da prescrição executória, previsibilidade | Perde a chance de reverter; consolida efeitos da condenação |
| **Negociar (ANPP/transação/sursis processual)** | Antes da denúncia ou nas fases iniciais; requisitos legais presentes | Extinção sem condenação; **sem reincidência/maus antecedentes**; sem risco de pena maior | Exige confissão (ANPP); condições a cumprir; não cabe se já há condenação transitada |
| **Colaborar (delação)** | Prova robusta contra o cliente; ele tem informação de valor | Redução drástica, substituição, até perdão judicial | Confissão ampla; exposição; risco à integridade; irreversível |
| **Executar provisoriamente / remição** | Condenação mantida; cliente já preso; foco em benefícios | Antecipa progressão/livramento; encerra a incerteza | Renuncia à discussão de mérito; consolida a condenação |

> **Regra de incompatibilidade.** Estas rotas **competem entre si**. ANPP e transação **não coexistem** com condenação já proferida; colaboração pressupõe confissão que **enfraquece** a tese de absolvição do recurso; aceitar a pena **inicia** a prescrição executória que recorrer **suspende**. Escolher uma **fecha** as outras — por isso a decisão exige o método abaixo, e não pode ser desfeita a qualquer tempo.

## Metodologia — matriz de decisão em 8 passos

### Passo 1 — Fixar a fase processual (o que ainda está aberto)
A fase **determina o cardápio de rotas**:
- **Pré-denúncia / inquérito:** ANPP (art. 28-A), transação (art. 76 Lei 9.099), arquivamento. Recurso não é o tema — negociação é.
- **Ação penal em curso (antes da sentença):** suspensão condicional do processo (art. 89), colaboração, defesa técnica plena.
- **Após sentença condenatória:** recorrer × aceitar × (colaborar, se ainda útil). ANPP já **não cabe** após o recebimento/condenação, salvo hipóteses de retroatividade discutidas — **confirmar no gate**.
- **Após trânsito em julgado:** execução penal, revisão criminal, benefícios (progressão, livramento) — não mais recurso ordinário.

### Passo 2 — Mapear as teses recursais e estimar a chance real
Liste cada tese (nulidade, absolvição por atipicidade/falta de prova, desclassificação, redução de pena, correção de regime) e atribua a cada uma uma **probabilidade honesta** (alta/média/baixa) e o **resultado se vencer** (absolvição total? só redução de 1/6?). Uma tese de nulidade com chance baixa e ganho apenas de anular para refazer (podendo o réu ser condenado de novo) vale menos que uma redução modesta porém provável. **Cruze probabilidade × magnitude do ganho.**

### Passo 3 — Testar o risco de reformatio in pejus (art. 617 CPP)
Este é o **guardião da decisão de recorrer**:
- **Só a defesa recorreu** → **NÃO há reformatio in pejus** (art. 617): o tribunal **não pode piorar** a pena nem o regime. Recorrer é, neste ponto, **assimétrico a favor do réu** — só pode melhorar ou manter. O custo é o tempo, não a pena.
- **A acusação também recorreu (ou houve recurso do MP/assistente)** → **HÁ risco de agravamento**: aí recorrer pode piorar. A ponderação muda radicalmente.
- **Reformatio in pejus indireta:** anulada a sentença por recurso exclusivo da defesa, a nova decisão **não pode** impor pena superior à anulada (**Súmula 160/STF** trata de nulidade não arguida em prejuízo da acusação — confirmar alcance no gate). Ou seja: mesmo anulando e refazendo, o teto é a pena anterior. Isso **reforça** a segurança de recorrer quando só a defesa recorre.

> **Consequência prática:** recurso **exclusivo da defesa** raramente "piora" a pena (art. 617). O erro comum é o cliente temer piorar recorrendo quando **não há recurso da acusação** — nesse cenário, o downside é tempo/custo, não pena maior. Deixe isso explícito no aconselhamento.

### Passo 4 — Calcular a prescrição pela pena em concreto (arts. 109-110 CP)
Com a **pena já fixada** na sentença, recalcule a prescrição pela **pena aplicada** (art. 110), não pela pena máxima abstrata:
- **Prescrição da pretensão punitiva retroativa (art. 110, §1º):** transitada em julgado para a acusação (ou improvido seu recurso), a prescrição regula-se pela pena em concreto e pode retroagir até o **recebimento da denúncia** (a Lei 12.234/2010 **vedou** a retroatividade a período anterior ao recebimento). **Verificar as datas-marco** (fato, recebimento, sentença) e o prazo do art. 109 correspondente à pena.
- **Uma pena baixa pode estar prescrita ou prestes a prescrever** — nesse caso, **recorrer para ganhar tempo** (prolongando o feito até a prescrição) ou **arguir a prescrição** pode ser a melhor rota, tornando o mérito irrelevante.
- **Inversamente:** se aceitar e transitar em julgado inicia a **prescrição executória** (art. 110, *caput*) pela pena aplicada, o cálculo de quando essa pretensão executória prescreve entra na conta.

> **Este é o cálculo mais subestimado.** Muitas condenações de pena curta prescrevem enquanto o escritório discute o mérito. **Sempre rode a prescrição pela pena em concreto antes de decidir a rota.**

### Passo 5 — Contabilizar a detração e o tempo já cumprido (art. 42 CP)
Some o tempo de **prisão cautelar/provisória e internação** já cumprido (art. 42). Isso responde perguntas decisivas:
- Quanto **falta** cumprir da pena aplicada?
- O tempo detraído já habilita **progressão de regime ou livramento** logo no início da execução? (ver skills `execucao-progressao-regime` e `livramento-condicional`)
- Se o que resta é pouco, **recorrer para reduzir a pena** pode não mudar o tempo real de cárcere — talvez a rota seja **executar e buscar benefícios**, não recorrer.

### Passo 6 — Inventariar os efeitos colaterais da condenação (arts. 91-92 CP)
Uma condenação carrega efeitos que **transcendem a pena privativa de liberdade** e que uma rota pode acionar e outra evitar:
- **Reincidência e maus antecedentes** — condenação transitada gera reincidência (agravante, óbice a benefícios futuros). **ANPP e transação cumpridos NÃO geram** reincidência/maus antecedentes (art. 28-A, §12; art. 76, §4º Lei 9.099) — vantagem decisiva da rota negocial.
- **Confisco** (art. 91) — perda de instrumentos e produto do crime.
- **Perda de cargo público, mandato ou função** (art. 92, I) — devastador para servidor/agente público; pode pesar mais que a pena.
- **Incapacidade para o poder familiar; inabilitação para dirigir** (art. 92, II e III).
- **Efeitos extrapenais reflexos** — inelegibilidade (Lei da Ficha Limpa), restrições profissionais, imigração.

> **Pergunte sempre:** para este cliente, qual dói mais — o tempo de pena ou o efeito colateral? Um servidor pode preferir uma pena um pouco maior sem perda do cargo a uma menor com a perda. A rota que **evita a condenação** (ANPP) pode valer mais que a que reduz a pena (recurso).

### Passo 7 — Ler o cliente (o fator humano e ético)
A decisão é **do cliente**, informada pela defesa (autonomia do assistido; CED, art. 2º). Levante:
- **Aversão ao risco:** prefere previsibilidade (acordo/aceitar) ou aposta na reversão (recorrer)?
- **Capacidade de cumprir condições** (ANPP/sursis): prestação de serviços, comparecimento, reparação do dano.
- **Custo emocional e financeiro** de prolongar o processo.
- **Inocência sustentada:** cliente que se diz inocente pode recusar acordo com confissão por convicção — a defesa **não impõe** confissão.
- **Consentimento informado:** documentar por escrito os cenários apresentados e a escolha do cliente.

### Passo 8 — Montar a matriz e recomendar
Consolide numa tabela comparativa por rota, com colunas: **melhor caso / pior caso / risco de reformatio / efeito na prescrição / tempo real após detração / efeitos colaterais / reversibilidade**. A recomendação sai do cruzamento — e vem sempre como **hipótese fundamentada para a decisão do cliente**, não como ordem.

```
MATRIZ DE DECISÃO — [Cliente] | Caso [nº]
                       │ RECORRER │ ACEITAR │ ANPP/NEGOCIAR │ COLABORAR
Melhor caso            │  absolv. │  —       │ extinção       │ perdão/red.
Pior caso              │  mantém  │  pena    │ condições      │ exposição
Reformatio? (art.617)  │  não*    │  n/a     │ n/a            │ n/a
Efeito na prescrição   │  suspende│  inicia  │ extingue       │ varia
Tempo real (detração)  │  X anos  │  X anos  │  0             │ reduzido
Efeitos colaterais     │  mantém  │  aciona  │ EVITA          │ mantém
Reversível?            │  sim     │  não     │ não            │ não
                       (*se só a defesa recorreu)
→ RECOMENDAÇÃO: [rota], porque [cruzamento decisivo].
```

## Cenários-tipo (heurísticas para o aconselhamento)

- **Pena baixa, prescrição próxima:** rode a prescrição pela pena em concreto (art. 110). Se está por prescrever, **arguir prescrição / recorrer para alcançá-la** costuma vencer o mérito.
- **Recurso exclusivo da defesa, tese com chance:** o art. 617 blinda contra piora — o downside é só tempo. **Tende a valer recorrer**, salvo prescrição executória iminente que o trânsito acionaria a favor.
- **Servidor público condenado com risco de perda do cargo (art. 92):** priorizar rota que **evite a condenação** (ANPP, se ainda cabível) ou ataque o efeito específico no recurso.
- **Prova esmagadora, cliente com informação de valor:** a **colaboração** pode superar tanto recurso quanto acordo simples — mas é irreversível e expõe; avaliar segurança.
- **Réu primário, infração de menor potencial, antes da denúncia:** **transação/ANPP/sursis processual** quase sempre vencem — extinguem sem reincidência (arts. 76/89 Lei 9.099; art. 28-A CPP).
- **Muito tempo já detraído:** talvez o jogo não seja a pena, e sim **progressão/livramento** já na execução — recorrer pode ser irrelevante para o tempo real.

## Teses e contra-teses (para calibrar a decisão)

**A favor de recorrer (defesa):**
- Recurso exclusivo da defesa **não agrava** (art. 617) — assimetria a favor.
- Reformatio indireta vedada: mesmo anulando, o teto é a pena anterior (Súmula 160/STF — confirmar alcance no gate).
- Prolongamento pode **maturar a prescrição** pela pena em concreto.

**A favor de aceitar/negociar (defesa):**
- Trânsito rápido **inicia a prescrição executória** e dá previsibilidade.
- ANPP/transação **evitam reincidência e maus antecedentes** (vantagem que nenhum recurso replica).
- Evita o custo emocional/financeiro de anos de litígio.

**Contra-argumentos a antecipar (da acusação / do juízo):**
- MP pode recorrer para **agravar** — o que **liga** o risco de reformatio e muda toda a conta.
- ANPP pode ser **recusada** pelo MP; suas condições podem ser onerosas.
- Colaboração exige **confissão ampla** e pode ser **rescindida** por descumprimento.

## Súmulas e precedentes RELEVANTES (sob o Citation Gate)

- **Art. 617 do CPP** (lei) — vedação da reformatio in pejus no recurso exclusivo da defesa. **Citável** como dispositivo.
- **Súmula 160/STF** — nulidade não arguida no recurso da acusação não pode ser reconhecida em desfavor do réu; base da vedação à **reformatio in pejus indireta**. Confirmar a redação e o alcance atual via `jurisprudencia-stj-stf`.
- **Súmula 611/STF** — competência do juízo da execução para aplicar lei mais benéfica após o trânsito (relevante para decidir entre recorrer e executar buscando benefício). Confirmar via gate.
- **Prescrição retroativa e o recebimento da denúncia** — a **Lei 12.234/2010** alterou o art. 110, §1º, do CP vedando a retroatividade a período anterior ao recebimento; aplicar conforme a **data do fato** (irretroatividade da lei penal gravosa, CF art. 5º, XL). **Confirmar as datas-marco no caso concreto.**
- **Qualquer HC/REsp/RE, informativo ou tema específico** invocado para sustentar a chance de uma tese recursal, o alcance da reformatio indireta, a cabência de ANPP após denúncia, ou o marco da prescrição: **[NÃO VERIFICADO]** até passar pelo gate `jurisprudencia-stj-stf`. **Ensine a tese e o dispositivo; não arrisque o número do acórdão.**

## Erros comuns (anti-padrões)

- **Decidir no *feeling*** sem rodar a matriz (prescrição, reformatio, detração, efeitos colaterais).
- **Temer piorar recorrendo quando só a defesa recorreu** — o art. 617 impede a piora; o custo é tempo, não pena.
- **Calcular prescrição pela pena máxima abstrata** em vez da **pena em concreto** (art. 110) já fixada na sentença.
- **Ignorar a detração** (art. 42) e recomendar recurso que não muda o tempo real de cárcere.
- **Esquecer os efeitos colaterais** (art. 92 — perda de cargo, inabilitação) que podem pesar mais que a pena.
- **Não valorar a vantagem da ANPP/transação** de não gerar reincidência/maus antecedentes.
- **Sugerir ANPP após condenação transitada** sem confirmar a (in)cabência atual no gate.
- **Tratar as rotas como reversíveis** — colaborar/aceitar/negociar costumam ser irreversíveis; recorrer, uma vez precluso o prazo, também.
- **Decidir pelo cliente** — a escolha é dele, informada; documentar o consentimento.
- **Citar precedente de memória** para justificar a chance de uma tese — passar tudo pelo Citation Gate.

## Checklist final (antes de aconselhar)

- [ ] Fase processual fixada e **cardápio de rotas** cabíveis identificado?
- [ ] Cada tese recursal com **probabilidade honesta × magnitude do ganho**?
- [ ] **Reformatio in pejus** testada: há recurso da acusação, ou só da defesa (art. 617)?
- [ ] **Prescrição pela pena em concreto** (art. 110) recalculada, com datas-marco (fato/recebimento/sentença)?
- [ ] **Detração** (art. 42) somada — quanto falta cumprir? habilita benefício imediato?
- [ ] **Efeitos colaterais** (arts. 91-92) inventariados — algum pesa mais que a pena para este cliente?
- [ ] **Vantagem negocial** (sem reincidência/maus antecedentes — art. 28-A/arts. 76/89) considerada?
- [ ] **Matriz comparativa** montada (melhor/pior caso, prescrição, tempo real, reversibilidade)?
- [ ] **Cliente ouvido** (aversão ao risco, inocência sustentada, capacidade de cumprir condições) e **consentimento informado documentado**?
- [ ] **Súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` antes de citar?
- [ ] Recomendação entregue como **hipótese fundamentada**, sujeita à **revisão humana** e à decisão do cliente?

## Nota de conformidade

Este material é **rascunho técnico de apoio à decisão estratégica**, sujeito a **revisão humana obrigatória** — não substitui o juízo do advogado responsável nem a decisão informada do cliente (autonomia do assistido). A escolha da rota é **do cliente**, cabendo à defesa apresentar cenários com clareza e documentar o consentimento. Nenhuma súmula, tema ou precedente é citado de memória: tudo passa pelo gate `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Conformidade ética conforme o polo: **OAB + Provimento 205/2021** (advocacia), **LC 80/94** (Defensoria Pública); sigilo e LGPD preservados quanto aos dados do assistido.

Esta skill **decide** entre rotas; a execução da rota escolhida cabe às skills próprias — `apelacao`, `rese`, `recurso-especial-criminal` (recurso); `anpp`, `colaboracao-premiada`, `transacao-penal` (acordo); `execucao-progressao-regime`, `livramento-condicional`, `remicao-falta-grave`, `prescricao` (execução). O `parecer-juridico-criminal` opina sobre **uma** tese; aqui compara-se **rotas incompatíveis**.
