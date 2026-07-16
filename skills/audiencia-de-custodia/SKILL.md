---
name: audiencia-de-custodia
description: >-
  Use ao atuar na audiência de custódia — apresentação da pessoa presa ao juiz em até 24 horas (CPP,
  art. 310; Resolução CNJ 213/2015; CADH, art. 7.5; PIDCP, art. 9.3): checklist-relâmpago de
  legalidade do flagrante, entrevista prévia e reservada com o preso, arguição e registro de
  tortura/maus-tratos, manifestação ORAL com pedidos em ordem sucessiva (relaxamento → liberdade
  provisória → cautelares do art. 319 → prisão… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, audiencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-audiencia-de-custodia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["audiencia-de-custodia", "audiencia custodia"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Audiência de Custódia (CPP, art. 310; Res. CNJ 213/2015)

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

Esta skill orienta a **atuação e o roteiro da defesa na audiência de custódia**: o ato em que a pessoa presa é apresentada ao juiz **em até 24 horas** para controle da **legalidade** e da **necessidade** da prisão e para verificação de **tortura/maus-tratos**. Cobre o instituto, o checklist-relâmpago do flagrante, a entrevista prévia reservada, a arguição de tortura, a **manifestação oral em ordem sucessiva** e as providências pós-ata. Os **remédios escritos** (relaxamento, revogação, liberdade provisória) e sua teoria estão na skill `liberdade-provisoria-relaxamento` — aqui o foco é **como usá-los oralmente, em minutos, no ato**; o briefing logístico prévio (dados do ato, partes, e-mails, autos) é da skill `preparacao-audiencia`.

> **Síntese operacional:** a custódia é a **janela de ouro da defesa** — o primeiro (às vezes único) contato do preso com um juiz antes da denúncia, com o APF ainda quente e o vício do flagrante ainda visível. A audiência **não discute o mérito da imputação** (não é instrução): discute a **prisão**. O trabalho da defesa em 24h é (1) varrer a legalidade do flagrante, (2) colher na entrevista reservada o que sustenta a soltura, (3) arguir e **documentar** tortura/maus-tratos e (4) formular **oralmente, em ordem sucessiva**, todos os pedidos de soltura — fazendo **constar cada um em ata**, o que pré-constitui o habeas corpus se tudo for indeferido.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 310 do CPP (alterado pela Lei 13.964/2019) e da **Resolução CNJ 213/2015** e seus Protocolos I e II — a resolução sofreu alterações posteriores (inclusive sobre **videoconferência**, ponto controvertido). O alcance dos **§§ 3º e 4º do art. 310** (consequências da não realização da audiência) foi objeto de julgamento no STF nas ADIs do Pacote Anticrime: **pesquise o estágio atual via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**. Dispositivo da Res. 213 sobre o qual haja dúvida de numeração ou redação: confira via agente `lei-e-sumula` antes de afirmar.

## O instituto e a base legal

- **O que é:** apresentação **pessoal e sem demora** da pessoa presa a uma autoridade judicial, para triplo controle — **legalidade** da prisão, **necessidade** de sua manutenção e **integridade física/psíquica** do preso (prevenção de tortura).
- **Sede convencional:** **CADH (Pacto de São José), art. 7.5** e **PIDCP, art. 9.3** — tratados internalizados; a audiência é cumprimento de obrigação convencional, não favor processual.
- **Sede legal:** **CPP, art. 310** (redação da **Lei 13.964/2019**, que tornou a audiência obrigatória em até 24 horas — termo inicial da contagem a conferir via `lei-e-sumula`, como visto na tabela de prazo abaixo); formalidades do flagrante nos **arts. 301 a 306** e da liberdade nos **arts. 319, 321 a 350**.
- **Sede regulamentar:** **Resolução CNJ 213/2015** — disciplina o rito, a entrevista prévia reservada, o roteiro da oitiva pelo juiz e os encaminhamentos; **Protocolo I** (medidas cautelares alternativas) e **Protocolo II** (apuração de tortura e maus-tratos).
- **Marco jurisprudencial notório:** a **ADPF 347/STF** (estado de coisas inconstitucional do sistema prisional) determinou a realização de audiências de custódia em todo o país — precedente de conhecimento geral; para o estágio atual das medidas, pesquise via `jurisprudencia-stj-stf`.
- **Natureza:** ato **pré-processual de controle judicial da prisão**. Não é interrogatório, não colhe prova de mérito e não substitui a resposta à acusação.

## Cabimento e regras do ato

| Ponto | Regra | Observação prática |
|-------|-------|--------------------|
| **Prazo** | Até **24 horas** (CPP, art. 310) — o **termo inicial** da contagem (da realização da prisão × do recebimento do APF) deve ser conferido na redação vigente via agente `lei-e-sumula` antes de afirmar atraso; o APF, por sua vez, deve chegar ao juiz em até 24h da prisão (art. 306, § 1º) | Verifique os dois marcos ao aferir atraso; atraso injustificado é tese de ilegalidade |
| **Alcance** | Prisão em **flagrante**; a Res. CNJ 213/2015 estende a apresentação também aos presos por **mandado** (preventiva/temporária) | Confirmar a prática do tribunal local; em mandado, o objeto é a necessidade, não a legalidade do flagrante |
| **Presenças** | Juiz, MP e **defesa** (constituída ou Defensoria); **vedada a presença dos agentes responsáveis pela prisão ou investigação** durante o ato (Res. 213) | Se policiais da ocorrência permanecerem na sala, **impugnar e fazer constar em ata** |
| **Entrevista prévia** | Direito a **atendimento prévio e reservado** com defensor, antes da audiência (Res. 213) | Se negado ou feito sem privacidade, impugnar em ata — vício do ato |
| **Formato** | A regra é a apresentação **pessoal**; videoconferência é excepcional e controvertida | Havendo custódia por vídeo, registrar protesto e conferir a norma vigente via `lei-e-sumula` |
| **Objeto** | Prisão (legalidade + necessidade) e integridade do preso — **nunca o mérito da imputação** | Orientar o cliente: responde sobre a **prisão e o tratamento recebido**; sobre os fatos, silêncio (CF, art. 5º, LXIII) |

## Os três desfechos do art. 310

Recebido o APF, na audiência o juiz **deve, fundamentadamente**:

```
I  — RELAXAR a prisão ilegal (CF, art. 5º, LXV)
        → vício de origem ou formal do flagrante; alvará de soltura
II — CONVERTER o flagrante em PREVENTIVA (art. 312, presentes os
        requisitos do art. 313 e SE HOUVER REQUERIMENTO — a conversão
        de ofício é ilegal, pacificado pela 3ª Seção do STJ)
III— Conceder LIBERDADE PROVISÓRIA, com ou sem fiança,
        cumulada ou não com as cautelares do art. 319
```

> **A defesa trabalha para o desfecho I ou III — e contra o II.** A tabela completa "vício → remédio" (relaxamento × revogação × liberdade provisória × cautelares) está na skill `liberdade-provisoria-relaxamento`; não a repita: leve-a impressa/aberta para a audiência e use-a como mapa de pedidos.

## Checklist-relâmpago de legalidade do flagrante (antes da audiência)

Com o APF em mãos (peça cópia no cartório/plantão ou via processo eletrônico), varra em minutos:

**Materialidade do flagrante:**
- [ ] Havia **situação de flagrância** (art. 302 — cometendo, acabou de cometer, perseguido ou encontrado logo após)?
- [ ] Flagrante **preparado** (Súmula 145/STF — crime impossível), **forjado** ou **esperado**?
- [ ] Ingresso em **domicílio sem mandado**: havia "fundadas razões" prévias e justificadas, ou só denúncia anônima/"atitude suspeita"? (tese de repercussão geral do STF sobre inviolabilidade do domicílio — pesquise o precedente via `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`)
- [ ] Busca pessoal sem fundada suspeita? Reconhecimento fora do rito do **art. 226**?

**Formalidades (arts. 306 e 5º da CF):**
- [ ] Comunicação **imediata** da prisão ao juiz, ao MP e à **família/pessoa indicada** (CF, art. 5º, LXII)?
- [ ] **Nota de culpa** entregue em até 24h (art. 306, § 2º)?
- [ ] Informado o direito ao **silêncio** e à assistência de advogado (CF, art. 5º, LXIII)?
- [ ] APF remetido ao juiz em 24h (art. 306, § 1º) e audiência designada em 24h (art. 310)?
- [ ] Uso de **algemas** justificado por escrito (Súmula Vinculante 11)?

**Sinais de violência:**
- [ ] Lesões visíveis, relato de agressão, laudo do exame de corpo de delito de entrada — bater com a versão policial do APF?

> Cada item falho vira **preliminar oral de relaxamento**. A teoria de cada vício (e as teses de excesso de prazo, temporária vencida etc.) está na skill `liberdade-provisoria-relaxamento`.

## Entrevista prévia e reservada — o que colher em 10 minutos

Objetivo duplo: **orientar** o cliente e **municiar** a manifestação. Roteiro mínimo:

1. **Orientação primeiro:** explique o que é a audiência (discute a prisão, não o crime); direito ao silêncio quanto aos fatos; que ele **deve relatar ao juiz** agressões e condições da prisão; que não deve discutir com o promotor nem confessar.
2. **Tortura/maus-tratos:** como foi a abordagem? Houve agressão, ameaça, humilhação, algemas apertadas, privação (água, banheiro, remédio)? Onde, quando, por quem (fardas, viatura, características)? Há marcas **agora**? Testemunhas da abordagem?
3. **Condições pessoais para a soltura:** residência fixa (endereço completo), trabalho/ocupação lícita, **filhos menores de 12 anos** ou pessoa com deficiência sob seus cuidados, **gestação/puerpério**, doença grave, idade, primariedade.
4. **Contato de apoio:** telefone de familiar que possa trazer **comprovantes** (residência, trabalho, certidão de nascimento dos filhos) ainda antes do ato, se houver tempo.
5. **Saúde imediata:** medicação de uso contínuo, lesões que exijam atendimento — vira requerimento em ata.

## Arguição e registro de tortura/maus-tratos (Protocolo II da Res. 213)

O juiz tem o dever de **indagar ativamente** sobre o tratamento recebido (roteiro da oitiva na Res. 213); a defesa tem o dever de **não deixar passar**:

- **Argua expressamente**, mesmo que o cliente hesite por medo — pergunte na frente do juiz, com delicadeza ("como o senhor foi tratado da abordagem até aqui?").
- **Peça o registro literal em ata** do relato: o quê, quem, onde, quando, como.
- **Requeira em ata:** (a) **exame de corpo de delito** imediato ou complementar (com fotografias das lesões); (b) **preservação e requisição das imagens** de câmeras corporais, de viaturas e da delegacia/unidade **antes do descarte automático**; (c) remessa de cópias ao **MP** e à **Corregedoria de Polícia** para apuração; (d) atendimento médico, se necessário.
- **Efeitos defensivos:** tortura/maus-tratos contamina a legalidade da prisão e a credibilidade da versão policial — sustenta relaxamento e, adiante, a ilicitude de eventual confissão informal (ver best-practice de cadeia de custódia quando houver apreensões).
- **Vedação de presença dos policiais da ocorrência** na sala (Res. 213): fiscalize — a presença inibe o relato e vicia o ato.

## Estrutura forense — a manifestação ORAL em ordem sucessiva

A "peça" da custódia é falada, mas segue a mesma espinha da petição (ver best-practice `peticao-criminal`): **legitimação → preliminares de legalidade → fundamentos cautelares → pedidos sucessivos → requerimentos de ata**. Roteiro:

```
1. LEGITIMAÇÃO E COMPARECIMENTO
   "Dr(a). [NOME], OAB/[UF] [Nº], pela defesa de [PRESO], constituído(a)
   nesta data [procuração/nomeação apud acta]."

2. PRELIMINARES — LEGALIDADE DO FLAGRANTE (se houver vício)
   Enunciar cada vício concreto identificado no checklist (art. 302,
   art. 306, domicílio, art. 226...), pedindo o RELAXAMENTO (CF, art.
   5º, LXV) com expedição imediata de alvará de soltura.

3. TORTURA/MAUS-TRATOS (se houver relato ou sinais)
   Requerer o registro do relato, corpo de delito, preservação das
   imagens e remessa ao MP/Corregedoria (Protocolo II, Res. 213).

4. MÉRITO CAUTELAR — CONTRA A CONVERSÃO EM PREVENTIVA
   a) Sem requerimento do MP/autoridade → conversão de ofício é ilegal
      (arts. 3º-A, 282, § 2º e 311 do CPP — 3ª Seção do STJ);
   b) Ausência de periculum libertatis CONCRETO (art. 312, § 2º):
      gravidade abstrata do delito não basta;
   c) Incabimento pelo art. 313 (pena máxima ≤ 4 anos, primário);
   d) Condições pessoais favoráveis: residência, ocupação, família.

5. PEDIDOS — SEMPRE EM ORDEM SUCESSIVA (eventualidade)
   a) RELAXAMENTO da prisão ilegal (CF, art. 5º, LXV);
   b) subsidiariamente, LIBERDADE PROVISÓRIA sem fiança (arts. 310,
      III, e 321), ou com fiança compatível — requerendo, em caso de
      hipossuficiência, DISPENSA/REDUÇÃO/PARCELAMENTO (arts. 325,
      § 1º, e 350);
   c) subsidiariamente, CAUTELARES DIVERSAS do art. 319 (indicar
      QUAIS — comparecimento periódico, recolhimento noturno,
      monitoração...), suficientes no caso (art. 282, § 6º);
   d) subsidiariamente, PRISÃO DOMICILIAR (arts. 318 e 318-A —
      gestante, mãe de criança < 12 anos, responsável por PcD;
      HC coletivo 143.641/STF);
   e) em qualquer hipótese, expedição de ALVARÁ DE SOLTURA.

6. REQUERIMENTOS DE ATA (blindagem)
   Que constem em ata: cada pedido e seu fundamento; o relato de
   tortura; as impugnações (presença de policiais, falta de entrevista
   reservada, videoconferência); e os documentos exibidos.
```

**Regras de ouro da sustentação:**
- **Nunca discuta o mérito da imputação** ("ele não fez") — a audiência não é o foro; o juiz não decidirá autoria aqui e o cliente pode se comprometer. Discuta **a prisão**.
- **Peça na ordem, sem pular degrau:** o juiz que nega o relaxamento ainda pode conceder a liberdade provisória; quem só pede o máximo sai sem nada.
- **Tudo em ata:** pedido não registrado é pedido que não existiu — e a ata é a prova pré-constituída do HC.

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|------|--------------|----------|
| Deixar o cliente narrar os fatos ao juiz/MP | Declarações sobre o mérito podem ser exploradas depois | Orientar na entrevista prévia: fatos = silêncio; tratamento/prisão = falar |
| Pedir só o relaxamento (ou só a liberdade) | Indeferido o único pedido, o cliente fica preso | Ordem sucessiva completa: relaxar → liberdade → 319 → domiciliar |
| Não arguir tortura "para não comprar briga" | Prova da agressão se perde (imagens descartadas, lesões cicatrizam) | Arguir sempre que houver relato/sinal; requerer preservação de imagens NO ATO |
| Não fazer constar pedidos e protestos em ata | HC posterior fica sem prova pré-constituída | Ditado expresso para a ata, item por item |
| Confundir os remédios (relaxar × revogar × liberdade) | Pedido tecnicamente errado enfraquece a defesa | Ver o mapa vício → remédio em `liberdade-provisoria-relaxamento` |
| Achar que a custódia **preclui** teses futuras | Desistência indevida de teses | Não preclui: legalidade da prisão é matéria de ordem pública — pode ser rediscutida por petição ou HC a qualquer tempo |
| Aceitar videoconferência sem protesto | Convalidação tácita de formato excepcional | Protestar em ata e conferir a norma vigente via `lei-e-sumula` |
| Chegar sem comprovantes das condições pessoais | Alegação genérica não convence | Acionar familiar na entrevista prévia; exibir e listar em ata o que houver |
| Esquecer a domiciliar (318/318-A) para gestante/mãe/responsável | Perde pedido com forte lastro (HC coletivo 143.641/STF) | Perguntar SEMPRE sobre filhos < 12, gestação e dependentes na entrevista |
| Ignorar a fiança arbitrada inalcançável | Cliente solto "no papel", preso na prática | Requerer dispensa/redução/parcelamento (arts. 325, § 1º, e 350) na própria audiência |
| Achar que fim de semana/feriado suspende o ato | Perde a janela de ouro: a custódia ocorre em plantão judiciário, todos os dias | As 24h correm em dias corridos — compareça ao plantão; ausência da defesa constituída leva o ato à Defensoria |

## Providências pós-ata

**Se solto (relaxamento/liberdade/cautelares):**
- [ ] Acompanhar a **expedição e o cumprimento do alvará** de soltura no mesmo dia;
- [ ] Explicar ao cliente **cada condição imposta** (comparecimentos, restrições do art. 319) e o efeito do descumprimento;
- [ ] Anotar prazos de comparecimento na agenda do caso.

**Se convertida em preventiva:**
- [ ] Obter **cópia integral da ata** e da decisão;
- [ ] Avaliar de imediato a via de ataque: **petição de soltura ao juízo** conforme o mapa vício → remédio da skill `liberdade-provisoria-relaxamento` (conversão **de ofício** → **relaxamento**; fundamentação inidônea → **revogação**) e/ou **habeas corpus** ao tribunal (ver skill `habeas-corpus`);
- [ ] Anotar o **marco dos 90 dias** da revisão obrigatória (art. 316, parágrafo único) — o mero decurso do prazo **não gera soltura automática** na jurisprudência do STF: confira o entendimento atual via `jurisprudencia-stj-stf` antes de usar a tese;
- [ ] Providenciar **atendimento no estabelecimento prisional** e comunicação à família.

**Em qualquer desfecho, se houve relato de tortura:**
- [ ] Confirmar a realização do **corpo de delito** e juntar o laudo;
- [ ] Reiterar por petição a **preservação das imagens** (câmeras corporais/unidade) se não requisitadas;
- [ ] Acompanhar a apuração (MP/Corregedoria) — o resultado alimenta a tese de ilicitude no processo principal.

**Sempre:**
- [ ] Registrar o ocorrido no dossiê do caso (`acervo/casos/{processo}` — sigiloso);
- [ ] Rodar o gate de citações sobre qualquer peça escrita decorrente (`verificacao-citacoes`).

## Lembretes finais

- **24 horas, dois marcos:** APF ao juiz em 24h da prisão (art. 306, § 1º) + audiência em 24h (art. 310 — o termo inicial da contagem, da prisão ou do recebimento do APF, deve ser conferido via `lei-e-sumula`). Atraso injustificado é tese — mas confira o estágio do § 4º do art. 310 no STF antes de afirmar consequência automática.
- **A audiência discute a prisão, não o crime.** Cliente orientado = silêncio sobre os fatos, voz sobre o tratamento.
- **Conversão de ofício é ilegal** (exige requerimento — 3ª Seção do STJ): a primeira pergunta na audiência é "o MP requereu a preventiva?".
- **Ordem sucessiva sempre:** relaxar → liberdade provisória (fiança: dispensa por hipossuficiência) → cautelares do art. 319 → domiciliar (318/318-A).
- **Tortura se argui e se documenta no ato** — corpo de delito, imagens preservadas, remessa ao MP/Corregedoria (Protocolo II da Res. 213).
- **Ata é a peça da defesa:** cada pedido, protesto e documento deve constar — é a prova pré-constituída do HC.
- **Custódia não preclui nada:** teses de ilegalidade e soltura podem ser renovadas por petição (skill `liberdade-provisoria-relaxamento`) ou HC.
- **Precedentes atuais** (domicílio, videoconferência, § 4º do art. 310): pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar.
- **Conformidade transversal:** sigilo e consentimento informado (`etica-oab-sigilo`); toda entrega é rascunho para revisão humana.

## Apoie-se em

- **Skill `preparacao-audiencia`** — briefing logístico prévio do ato (dados da audiência, partes, e-mails, atos anteriores, teses do acervo); esta skill entra **depois** dele, no roteiro de atuação.
- **Skill `liberdade-provisoria-relaxamento`** — teoria dos quatro remédios de soltura, mapa vício → remédio e a petição escrita pós-custódia; esta skill aplica esses remédios **oralmente e em ordem sucessiva** no ato.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais (ingresso domiciliar, videoconferência na custódia, § 4º do art. 310, conversão de ofício).
- **Agente `verificador-citacoes`** — confirmação de toda citação antes da entrega; o que não confirmar sai marcado [NÃO VERIFICADO].
- **Agente `lei-e-sumula`** — conferência da redação vigente do art. 310, da Res. CNJ 213/2015 (e alterações sobre videoconferência) e de qualquer dispositivo em dúvida.
- **Best-practice `peticao-criminal`** — estrutura forense (endereçamento, qualificação, fundamentos, pedidos) espelhada no roteiro oral.
- **Best-practice `verificacao-citacoes`** — gate obrigatório de citações em qualquer peça escrita derivada da audiência.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
