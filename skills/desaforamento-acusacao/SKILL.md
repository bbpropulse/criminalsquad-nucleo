---
name: desaforamento-acusacao
description: >-
  Use ao requerer o DESAFORAMENTO do julgamento pelo júri para outra comarca — interesse da ordem
  pública, dúvida sobre a imparcialidade do júri, segurança pessoal do réu ou excesso de prazo para
  o julgamento (arts. 427-428 CPP) — tipicamente provocado pela ACUSAÇÃO (MP ou assistente); cobre
  também a impugnação/contrarrazões ao pedido e o reaforamento. Gatilhos: desaforamento, art. 427
  CPP, art. 428 CPP, reaforamento… Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, juri, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-desaforamento-acusacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["desaforamento-acusacao", "desaforamento acusacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Desaforamento no Júri (arts. 427 e 428 do CPP)

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

Esta skill orienta a elaboração do **requerimento de desaforamento** — o incidente que **desloca a competência** do julgamento pelo Tribunal do Júri de uma comarca para **outra da mesma região**, quando a comarca de origem não oferece condições para um julgamento sereno e imparcial. É medida **excepcional**, decidida pelo **Tribunal (TJ/TRF)**, e frequentemente **provocada pela acusação ou pelo assistente** quando o foro está contaminado por comoção social ou risco à imparcialidade do Conselho de Sentença.

> **⚖️ Skill do POLO ACUSATÓRIO.** Este material foi desenhado para quem atua na **acusação** — **Ministério Público** ou **assistente de acusação**. O desaforamento pode ser requerido por qualquer das partes (e pelo próprio juiz), mas o enquadramento, o tom e a estratégia aqui partem do interesse acusatório (garantir julgamento imparcial e a efetividade da ordem pública). **O roteador deve conferir o polo do usuário antes de sugerir esta skill:** se o usuário atua na **defesa**, use a abordagem defensiva (impugnação/contrarrazões, seção própria abaixo) — a defesa tem interesse legítimo em resistir ao deslocamento ou em requerê-lo em favor do réu.

> **Lição central:** desaforamento **não** é remédio para "clima ruim" genérico nem para pressão da mídia por si só. Exige **fato concreto e demonstrado** que se enquadre em uma das **quatro hipóteses** do art. 427 (ordem pública, imparcialidade, segurança do réu, excesso de prazo). Alegação vaga de comoção, sem prova de que ela **compromete a imparcialidade do júri local**, é indeferida. **Instrua o pedido com prova** (recortes, laudos de risco, certidões, dados do movimento forense).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 427 e 428 do CPP** (redação da **Lei 11.689/2008**, que reformou o júri) e a existência/teor de qualquer súmula, tema ou precedente antes de fundamentar. Toda súmula, tese ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`). Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência alucinada.

---

## O que é / quando cabe

O desaforamento pressupõe processo **já pronunciado** (encerrada a 1ª fase) — desloca-se o **plenário**, não a instrução. É incidente de **competência do Tribunal** (TJ ou TRF), processado **originariamente** perante ele, não perante o juiz de 1º grau. Cabe:

- **Antes** da realização do júri (regra do art. 427); e
- **Depois** do julgamento apenas na hipótese específica do art. 428 (excesso de prazo após o trânsito da pronúncia — ver adiante), ou para **reaforamento** se cessada a causa.

**Não confundir** com: (a) exceção de incompetência (que discute o juízo naturalmente competente, não o deslocamento por conveniência); (b) suspeição/impedimento do juiz (atinge a pessoa do magistrado, não o foro); (c) conflito de competência. O desaforamento **mantém a natureza do júri** — apenas o realiza em **outra comarca**.

## Base legal

- **Art. 427, CPP** — hipóteses e legitimados do desaforamento; competência do Tribunal; oitiva prévia; efeito sobre eventual pedido pendente.
- **Art. 427, §1º a §4º, CPP** — procedimento: distribuição imediata, relator, possibilidade de efeito suspensivo, preferência de julgamento.
- **Art. 428, CPP** — desaforamento por **excesso de prazo** (júri não realizado no prazo, sem culpa das partes/da defesa), contado do trânsito em julgado da pronúncia.
- **Art. 5º, XXXVIII e LIII, CF** — soberania dos veredictos e juiz natural (limites que o desaforamento tangencia: desloca-se a comarca, preserva-se o júri).
- **Reaforamento** — cessada a causa que motivou o deslocamento, admite-se o retorno à comarca de origem (construção jurisprudencial; confira o estágio atual via `jurisprudencia-stj-stf`).

## As quatro hipóteses do art. 427 (o coração do pedido)

O requerimento **tem de ancorar-se em pelo menos uma** destas causas — e prová-la:

| # | Hipótese (art. 427) | O que demonstrar | Enquadramento típico da ACUSAÇÃO |
|---|---|---|---|
| 1 | **Interesse da ordem pública** | Risco concreto de tumulto, quebra da paz social, inviabilidade de sessão serena na comarca | Réu com forte influência local, clima de retaliação, risco à realização da sessão |
| 2 | **Dúvida sobre a imparcialidade do júri** | Fato objetivo que faça duvidar da isenção do corpo de jurados local (não a mera repercussão) | Comarca pequena onde vítima/réu têm ascendência; comoção que atinge o universo de jurados |
| 3 | **Segurança pessoal do réu** | Risco real à integridade do acusado se julgado na comarca | Ameaças concretas, hostilidade pública ao réu |
| 4 | **Excesso de prazo (art. 428)** | Júri não realizado no prazo legal após o trânsito da pronúncia, sem culpa da defesa | Pauta congestionada, sucessivos adiamentos não imputáveis ao réu |

> **Ponto sensível — imparcialidade x publicidade.** Repercussão midiática, por si só, **não** basta: é preciso demonstrar que a comoção **contaminou o universo de onde sairão os jurados** a ponto de comprometer a imparcialidade. Em comarcas pequenas, o argumento é mais forte (pool reduzido de jurados exposto ao mesmo clima); em comarcas grandes, a acusação precisa de prova robusta. **Confirme o estado atual do entendimento (STJ/STF) via `jurisprudencia-stj-stf`.**

> **Legitimados (art. 427).** Podem requerer: o **Ministério Público**, o **assistente de acusação**, o **querelante**, o **acusado**; e o **juiz** pode **representar** ao Tribunal. Como acusação, o MP e o assistente têm legitimidade direta.

## Procedimento — o rito do incidente (art. 427, §§)

Decore a sequência, porque falha procedimental gera nulidade ou indeferimento:

```
1) Requerimento dirigido ao TRIBUNAL (TJ/TRF) — não ao juiz de 1º grau,
   instruído com PROVA da hipótese invocada.
2) OITIVA PRÉVIA obrigatória:
   - do juiz-presidente (informações sobre a comarca/clima), quando o pedido
     não parte dele; e
   - da parte contrária, sob CONTRADITÓRIO (Súmula 712/STF).
3) Distribuição imediata no Tribunal; relator designado.
4) Possível EFEITO SUSPENSIVO ao julgamento pelo júri, a critério do relator
   (art. 427, §2º), até a decisão do incidente.
5) Julgamento com PREFERÊNCIA (art. 427, §4º).
6) Deferido → o julgamento é deslocado para OUTRA COMARCA da mesma região
   (a mais próxima onde não persistam os motivos).
```

> **Contraditório é indispensável — Súmula 712/STF.** É **nula** a decisão que determina o desaforamento **sem** a prévia audiência da parte contrária. Como acusação, ao **requerer**, antecipe que a defesa será ouvida; ao **impugnar** pedido da defesa, **exija** a observância do contraditório se ele foi suprimido. **Confirme o teor e a vigência da Súmula 712 via `jurisprudencia-stj-stf`.**

> **Pedido pendente e júri designado (art. 427, §3º).** Havendo julgamento **já designado**, o relator pode conceder **efeito suspensivo**; e há regra de precedência entre pedidos. Confira o texto vigente do §3º antes de afirmar prazos/ordem.

## Estrutura da peça (requerimento de desaforamento — acusação)

1. **Endereçamento ao Tribunal** (Presidente do TJ/TRF ou Câmara/Turma Criminal, conforme o regimento).
2. **Qualificação** do requerente (MP/assistente) e das partes; **número dos autos** e da **pronúncia** (comprovar que já houve pronúncia).
3. **Síntese processual** — pronúncia transitada/estável, sessão designada (ou não), comarca de origem.
4. **A hipótese do art. 427 invocada** — nomear expressamente (ordem pública / imparcialidade / segurança do réu / excesso de prazo) e **subsumir os fatos** a ela.
5. **Prova concreta** — remeter aos documentos anexos (recortes de imprensa, mídias, certidões, laudos de risco, dados do movimento forense, declarações).
6. **Comarca de destino sugerida** — indicar comarca próxima da mesma região onde **não** persistam os motivos (facilita o deferimento).
7. **Pedido de efeito suspensivo** (art. 427, §2º), se há sessão designada.
8. **Requerimento da oitiva** do juiz-presidente e da **parte contrária** (contraditório — Súmula 712/STF), demonstrando lisura procedimental.
9. **Pedido final** — deferimento do desaforamento para a comarca indicada (ou outra que o Tribunal entenda).

## Teses da acusação (e as contra-teses da defesa)

**Teses de quem REQUER (acusação):**
1. **Ordem pública comprometida** — a permanência do júri na comarca gera risco concreto de tumulto/insegurança à sessão (fato + prova).
2. **Imparcialidade em dúvida** — comarca pequena + comoção difusa → o pool de jurados está contaminado; não é "mídia por si", é impacto no universo de jurados (prova do alcance local).
3. **Segurança do réu** (interesse convergente) — ainda que a acusação requeira, pode invocar risco à integridade do acusado como fundamento autônomo do art. 427.
4. **Excesso de prazo (art. 428)** — júri não realizado no prazo legal após o trânsito da pronúncia, sem culpa da defesa; deslocamento como remédio à demora.
5. **Comarca de destino idônea** — indicar foro próximo e neutro reforça a razoabilidade e afasta a alegação de prejuízo ao réu.

**Contra-teses que a defesa oporá (antecipe-as):**
1. **Excepcionalidade** — desaforamento é medida extrema; a regra é o juiz natural da comarca do fato; ônus argumentativo é de quem pede.
2. **Repercussão ≠ parcialidade** — mera comoção midiática não prova contaminação do júri; falta demonstração do impacto no universo de jurados.
3. **Prejuízo ao réu / acesso à defesa** — deslocamento dificulta a produção de prova, o comparecimento de testemunhas e o exercício da ampla defesa.
4. **Violação do contraditório** (Súmula 712/STF) — se a acusação/juízo suprimiu a oitiva prévia, a decisão é nula.
5. **Ausência de prova concreta** — pedido instruído apenas com ilações é indeferido.

> **Postura ética da acusação.** O MP atua como **fiscal da ordem jurídica** e da imparcialidade — não como parte interessada em "escolher o foro mais favorável". O fundamento do pedido deve ser **a lisura do julgamento**, não a conveniência tática. Pedido de desaforamento como manobra é abuso e enfraquece a acusação.

## Impugnação / contrarrazões (quando a acusação RESISTE ao pedido da defesa)

Se **a defesa** requer o desaforamento e a acusação quer **mantê-lo na comarca**:

- **Exigir prova concreta** — cobrar da defesa a demonstração efetiva da hipótese do art. 427 (não bastam alegações genéricas de "clima" ou de risco).
- **Sustentar o juiz natural** — a competência da comarca do fato é a regra; o deslocamento é excepcional e depende de fato demonstrado.
- **Neutralizar a alegação de imparcialidade** — demonstrar que a comarca comporta formação de Conselho isento (pool de jurados amplo, ausência de comoção que atinja o universo de jurados).
- **Apontar viabilidade de medidas menos gravosas** — reforço de segurança na sessão, providências do juízo, em vez do deslocamento.
- **Zelar pelo contraditório** — pedir vista e manifestação; se a defesa buscou decisão sem oitiva, invocar a Súmula 712/STF.

## Súmulas e precedentes relevantes (sob o Citation Gate)

- **Súmula 712/STF** — é **nula** a decisão que determina o desaforamento **sem audiência da parte contrária** (contraditório obrigatório). *(Confirme teor e vigência via `jurisprudencia-stj-stf`.)*
- **Excepcionalidade e ônus da prova concreta** — orientação consolidada de que o desaforamento exige **fato demonstrado**, não bastando repercussão genérica. **[NÃO VERIFICADO]** o número de acórdão específico; **não cite número de HC/REsp/Tema sem conferir** — pesquise o precedente atual (STJ/STF) via `jurisprudencia-stj-stf` antes de fundamentar.
- **Reaforamento após cessada a causa** — admitido pela jurisprudência; **[NÃO VERIFICADO]** quanto a acórdão específico — confira antes de citar.

> **Diretriz anti-alucinação.** Cite **livremente os dispositivos** (arts. 427 e 428 do CPP; art. 5º, XXXVIII e LIII, CF) e a **Súmula 712/STF** (conferida). Para **qualquer** número de HC/REsp/RE, informativo ou tema, **marque como pendente e conferível via `jurisprudencia-stj-stf`** — melhor ensinar a tese e o dispositivo do que arriscar um acórdão inexistente.

## Erros comuns (checklist final)

- [ ] Processo **já pronunciado**? (Desaforamento pressupõe encerrada a 1ª fase — não se desafora antes da pronúncia.)
- [ ] Pedido dirigido ao **Tribunal (TJ/TRF)**, e **não** ao juiz de 1º grau?
- [ ] **Hipótese do art. 427** nomeada expressamente e **subsumida** aos fatos (ordem pública / imparcialidade / segurança do réu / excesso de prazo)?
- [ ] **Prova concreta** anexada — não alegação genérica de "comoção" ou "mídia"?
- [ ] Demonstrado o **impacto no universo de jurados** (não só a repercussão pública)?
- [ ] **Contraditório** assegurado — oitiva da parte contrária e do **juiz-presidente** (Súmula 712/STF)?
- [ ] **Comarca de destino** próxima e neutra **indicada**?
- [ ] Pedido de **efeito suspensivo** (art. 427, §2º) formulado, se há sessão designada?
- [ ] Se for **excesso de prazo**: a demora **não** é imputável à defesa (art. 428)?
- [ ] Redação vigente dos **arts. 427-428** e as **súmulas/precedentes** conferidos via `jurisprudencia-stj-stf` **antes** de peticionar?

**Anti-padrões (evitar):**
- Requerer desaforamento apenas com base em **repercussão midiática**, sem prova de contaminação do júri.
- Dirigir o pedido ao juiz de 1º grau (competência é do Tribunal).
- Suprimir o **contraditório** — decisão sem oitiva da parte contrária é **nula** (Súm. 712/STF).
- Pedir o deslocamento **antes da pronúncia** ou confundir com exceção de incompetência/suspeição.
- Usar o instituto como **manobra tática** de escolha de foro — abuso incompatível com a função do MP.
- Deixar de **indicar a comarca de destino**, dificultando o deferimento.
- Citar número de HC/REsp/Tema **de memória** — passar tudo por `jurisprudencia-stj-stf`.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da peça, não substitui o juízo do membro/assistente responsável nem a leitura do caso concreto e do regimento interno do Tribunal.
- **Ética por polo (acusação):** a atuação do Ministério Público observa o **CNMP** e a Constituição (art. 127 — fiscal da ordem jurídica); o assistente de acusação, advogado, observa o **Estatuto da OAB e o Provimento 205/2021 (CFOAB)**. O desaforamento deve fundar-se na **lisura e imparcialidade do julgamento**, jamais na conveniência tática de foro.
- **Verificação de citações:** nenhuma súmula, tese ou precedente citado de memória — tudo passa pela skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes` antes do protocolo.
- **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
