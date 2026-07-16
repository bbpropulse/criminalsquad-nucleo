---
name: prisao-preventiva-extradicao-defesa
description: >-
  Use para impugnar ou flexibilizar a prisão do extraditando durante a extradição passiva no STF —
  Prisão Preventiva para Extradição (PPE), pedido de revogação/liberdade, prisão domiciliar ou
  cautelares diversas em substituição, excesso de prazo e detração. Gatilhos: prisão preventiva para
  extradição, PPE, revogação de PPE, prisão domiciliar na extradição, cautelares diversas na
  extradição, excesso de prazo na…. Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, extradicao, prisao-cautelar, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-prisao-preventiva-extradicao-defesa"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["prisao-preventiva-extradicao-defesa", "prisao preventiva", "extradicao defesa"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa na Prisão Preventiva para Extradição — PPE (Lei 13.445/2017, art. 84)

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

Esta skill orienta a **defesa técnica na custódia do extraditando** durante a **extradição passiva** perante o **Supremo Tribunal Federal** (competência originária — CF, art. 102, I, "g"). A **Prisão Preventiva para Extradição (PPE)** tem **regime próprio e mais rígido** que a prisão cautelar do processo penal interno: seu fim não é a instrução de um processo brasileiro, mas **garantir a eventual entrega** do extraditando ao Estado requerente. O foco é **defensivo** — revogar, substituir por cautelares/domiciliar ou combater o excesso de prazo.

> **Lição central:** a PPE **não se confunde** com a preventiva do art. 312 do CPP. Não peça liberdade "porque não há garantia da ordem pública ou instrução criminal" — esses fundamentos são do processo interno. Na PPE, a defesa ataca a **excepcionalidade** da custódia (a regra é a liberdade com cautelares — art. 84, §§1º e 2º), o **excesso de prazo**, a **ausência ou irregularidade do pedido formal** de extradição, e pleiteia a **detração** do tempo preso.

> **Cautela de vigência (obrigatória antes de citar):** a matéria é regida pela **Lei de Migração (Lei 13.445/2017)** e pelo **Decreto 9.199/2017** (regulamento), que **revogaram o antigo Estatuto do Estrangeiro (Lei 6.815/80)**. Citar a Lei 6.815/80 como vigente é **erro grave de vigência**. Confira também o **Regimento Interno do STF (RISTF, arts. 207 a 214)**, eventuais **tratados bilaterais/multilaterais** aplicáveis ao caso e a jurisprudência atual do STF via `jurisprudencia-stj-stf` antes de fundamentar. Confirme se há tratado específico com o Estado requerente — ele **prevalece** sobre a regra geral da lei.

## Natureza e desenho do instituto

A extradição passiva é o pedido de um **Estado estrangeiro** para que o Brasil **entregue** pessoa aqui localizada, a fim de processá-la ou executar pena. O rito no STF tem, em regra:

1. **Prisão** do extraditando (PPE) — pressuposto de admissibilidade do pedido (o STF, em regra, não conhece a extradição sem a custódia ou medida equivalente).
2. **Defesa** do extraditando, limitada ao **contencioso da legalidade** (sistema da *contenciosidade limitada*): identidade, defeito formal dos documentos, prescrição — **não** se rediscute o mérito da acusação estrangeira.
3. **Julgamento** pela Turma/Plenário do STF (defere ou indefere).
4. **Entrega** ao Estado requerente (ato do Executivo, se deferida), ou soltura (se indeferida).

A **PPE é o ponto onde a defesa mais atua na fase inicial** — porque a liberdade do extraditando enquanto tramita o pedido é o resultado prático mais imediato que se pode buscar.

## Base legal (conferir vigência via `jurisprudencia-stj-stf`)

- **CF, art. 5º, LI e LII** — brasileiro nato nunca é extraditado; naturalizado só em hipóteses restritas; não se extradita por crime político/de opinião.
- **CF, art. 102, I, "g"** — competência **originária do STF** para processar e julgar a extradição.
- **Lei 13.445/2017 (Lei de Migração), arts. 81 a 99** — regime da extradição.
  - **Art. 84** — a **prisão para fins de extradição** (PPE): decretada pelo STF, com possibilidade de **cautelares** e **domiciliar**.
  - **Art. 84, §1º** — **prazo** para apresentação do pedido formal de extradição após a prisão (sob pena de soltura) — **confirmar o prazo vigente no texto atual da lei/decreto e no tratado**.
  - **Art. 84, §§2º e 4º** — possibilidade de **prisão domiciliar** e de **outras medidas cautelares** em substituição à prisão, quando compatíveis com a garantia da entrega.
  - **Art. 86** — aplicação **subsidiária** do CPP à PPE (integra as lacunas — daí a analogia possível com o art. 319 do CPP).
- **Decreto 9.199/2017** — regulamento da Lei de Migração (procedimento e prazos operacionais).
- **RISTF, arts. 207 a 214** — rito da extradição no STF.
- **CPP, art. 319** — rol das medidas cautelares diversas da prisão (aplicável subsidiariamente).
- **CP, art. 42** — **detração**: o tempo de PPE deve ser **computado** na pena a executar no Estado requerente (a defesa registra e pleiteia o cômputo).

> **Prazos são sensíveis e variam por tratado.** NÃO afirme um número de dias de cor. O prazo para o pedido formal após a prisão, e o prazo para a retirada do extraditando após deferimento, dependem do **texto vigente da Lei de Migração/Decreto** e, sobretudo, do **tratado aplicável**. Verifique sempre a fonte primária e o tratado antes de peticionar. `[Confirmar prazo específico no texto vigente e no tratado.]`

## O que muda em relação à preventiva interna (art. 312 CPP)

| Aspecto | Preventiva interna (CPP 312) | PPE (Lei 13.445, art. 84) |
|---|---|---|
| **Finalidade** | Garantir ordem pública/econômica, instrução, aplicação da lei penal (processo BR) | Garantir a **entrega** do extraditando ao Estado requerente |
| **Competência** | Juízo do processo / plantão | **STF** (originária) |
| **Fundamento típico** | *Periculum libertatis* interno | Risco de **fuga** que frustre a entrega; instrução do pedido |
| **Regra × exceção** | Custódia excepcional (regra é liberdade) | Idem — art. 84 admite cautelares e domiciliar; **prisão não é automática** |
| **Detração** | Na pena brasileira | Na pena do **Estado requerente** (art. 42 CP; registrar) |
| **Discussão do mérito** | Pode discutir a imputação | **Contenciosidade limitada** — não se rediscute a acusação estrangeira |

➡️ **Erro comum fatal:** transportar a fundamentação do art. 312 do CPP para a PPE. O eixo é outro — **excepcionalidade, prazo e garantia da entrega**.

## Roteiro de defesa — teses típicas na PPE

### 1. Substituição por cautelares diversas ou domiciliar (art. 84, §§2º e 4º)
A tese defensiva **mais promissora** na fase de custódia. A PPE **não é obrigatória nem automática**: o STF pode substituí-la por **prisão domiciliar** ou **medidas cautelares** (art. 319 CPP, por subsidiariedade — art. 86) quando compatíveis com a garantia de entrega.
- **Argumentos de baixo risco de fuga:** residência fixa no Brasil, vínculos familiares e laborais, entrega espontânea de passaporte, ausência de meios/histórico de fuga, colaboração com o processo, condição de saúde.
- **Medidas propostas:** recolhimento domiciliar noturno, monitoração eletrônica (tornozeleira), retenção de passaporte, comparecimento periódico, proibição de deixar a comarca/país.
- **Situações que reforçam a domiciliar:** idade avançada, doença grave, gestante/mãe de criança pequena, pessoa com deficiência (analogia ao art. 318 do CPP).

### 2. Excesso de prazo da custódia
Se o pedido formal de extradição **não foi apresentado** no prazo legal/convencional após a prisão, ou se a tramitação se arrasta sem culpa da defesa, cabe pleitear a **soltura** (mantendo, se o caso, cautelares).
- Verifique o **prazo do tratado** e o **prazo da Lei de Migração/Decreto** — o **mais específico prevalece**.
- Distinga: excesso na apresentação do **pedido formal** (após prisão preventiva/cautelar de extradição) × demora na **tramitação** do processo já instaurado. `[Confirmar prazos vigentes e do tratado.]`

### 3. Ausência de pressupostos formais / documentação deficiente
A defesa fiscaliza a **regularidade do pedido** (contenciosidade limitada — arts. 89 e ss. da Lei 13.445): identidade do extraditando, existência de **título** (sentença/mandado no Estado requerente), **dupla tipicidade** (o fato é crime nos dois países), e ausência de causas impeditivas.
- Documentação incompleta ou não traduzida oficialmente compromete a admissibilidade e pode levar à soltura enquanto não sanada.

### 4. Prescrição (pela lei brasileira ou pela do Estado requerente)
A extradição **não é concedida** quando a pretensão punitiva/executória está **prescrita** — pela lei brasileira **ou** pela do Estado requerente (verificar o texto vigente da Lei 13.445, art. 82). Prescrição reconhecida → **inviabiliza a extradição** e esvazia a PPE. Para o cálculo, apoie-se em `calculadora-prescricao` e na skill `prescricao`.

### 5. Vedações constitucionais e legais à extradição (esvaziam a custódia)
Presente causa que **impede** a extradição, a PPE perde sentido:
- **Brasileiro nato** — jamais extraditado (CF, art. 5º, LI). **Naturalizado** só por crime comum anterior à naturalização ou tráfico ilícito de entorpecentes (verificar).
- **Crime político ou de opinião** (CF, art. 5º, LII) — a caracterização (e a distinção crime político × crime comum conexo) é do STF.
- **Ausência de dupla tipicidade**; **crime não punível com prisão** no Estado requerente; **jurisdição brasileira** exclusiva sobre o fato; extraditando **respondendo a processo** ou **cumprindo pena** no Brasil pelo mesmo fato (verificar hipóteses do art. 82 da Lei 13.445).
- **Refúgio/asilo** deferido — pode obstar a extradição (verificar a interação com a Lei 9.474/97).

### 6. Detração e compromissos do Estado requerente
Ainda que a extradição venha a ser deferida, a defesa registra:
- **Detração** (art. 42 CP): o tempo de PPE deve ser abatido da pena no Estado requerente.
- **Compromissos** que o Estado requerente deve assumir para a entrega (comutação de pena de morte/perpétua em pena temporária admitida no Brasil; detração; não reextradição a terceiro Estado sem anuência; princípio da especialidade). A falta desses compromissos é fundamento de resistência.

## Teses × contra-teses

| Tese da defesa | Contra-tese (acusação / Estado requerente / PGR) |
|---|---|
| Cautelares/domiciliar bastam para garantir a entrega (art. 84, §§2º/4º) | Risco concreto de fuga; gravidade e alcance internacional justificam a custódia |
| Excesso de prazo → soltura | Prazo do tratado observado; demora imputável à defesa ou à cooperação |
| Documentação deficiente → soltura | Diligências em curso; pedido complementável; regularidade formal presente |
| Prescrição (BR ou Estado requerente) inviabiliza a extradição | Causa interruptiva/suspensiva afasta a prescrição; prazo pela lei estrangeira ainda em curso |
| Crime político / vedação constitucional | Crime comum (ou conexo predominante); não incide a vedação |
| Detração e compromissos obrigatórios | Compromissos serão exigidos no ato de entrega (Executivo), não obstam o deferimento |

## Estrutura da peça — pedido de revogação/substituição da PPE (ao STF)

> Peça-tipo: **petição incidental** nos autos da Extradição (Ext nº ...) dirigida ao **Ministro Relator** no STF. Adapte ao caso e ao RISTF.

1. **Endereçamento** — "Excelentíssimo Senhor Ministro Relator da Extradição nº [Nº] — Supremo Tribunal Federal".
2. **Qualificação** do extraditando e referência ao pedido de extradição e ao Estado requerente.
3. **Síntese processual** — data da prisão (PPE), situação do pedido formal, prazos aplicáveis (lei + tratado).
4. **Fundamentos** (escolher os cabíveis):
   - excepcionalidade da custódia e cabimento de cautelares/domiciliar (art. 84, §§2º/4º; art. 319 CPP por subsidiariedade — art. 86);
   - baixo risco de fuga (vínculos, entrega de passaporte, saúde);
   - excesso de prazo (com o cálculo e a base normativa/tratado);
   - defeito formal do pedido / prescrição / vedação constitucional, se presentes.
5. **Pedido** — revogação da PPE ou sua **substituição** por domiciliar + cautelares específicas; subsidiariamente, o que couber; **registro da detração** (art. 42 CP).
6. **Requerimentos finais** — juntada de documentos, deferimento.

> Para a redação persuasiva (teoria do caso, narrativa, subsunção explícita), aplique também `redacao-persuasiva-criminal`.

## Súmulas e precedentes sob o Citation Gate

**Regra inegociável:** nenhuma súmula, tema ou acórdão citado de memória. Ensine a **tese** e o **dispositivo**; para qualquer número específico, marque **[NÃO VERIFICADO]** e confira em `jurisprudencia-stj-stf`.

- **Súmula 421/STF** — "Não impede a extradição a circunstância de ser o extraditando casado com brasileira ou ter filho brasileiro." **[CONFERIR redação e vigência via `jurisprudencia-stj-stf`.]**
- **Contenciosidade limitada** — a defesa na extradição restringe-se a identidade, defeito de forma dos documentos e ilegalidade da extradição; **não** se discute o mérito da acusação. É **entendimento clássico do STF**, mas confirme o enquadramento atual e eventuais acórdãos específicos **[NÃO VERIFICADO — conferir]**.
- **Prisão domiciliar / cautelares em substituição à PPE** — há precedentes do STF admitindo, em situações concretas (saúde, ausência de risco de fuga), a domiciliar ou cautelares no lugar da custódia. **NÃO cite número de Ext/HC/PPE de cor** — localize o precedente atual via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.
- **Detração na extradição (art. 42 CP)** — tese consolidada de que o tempo de PPE é computável; confirme o precedente exato antes de citar **[NÃO VERIFICADO]**.

> Prefira sempre **ensinar a tese e apontar o dispositivo** a arriscar um número de acórdão. Na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência inventada por IA).

## Cálculos apoiados por calculadora (não calcular aqui)

- **Prescrição** (pela lei brasileira; e conferência da lei estrangeira, quando informada) → use `calculadora-prescricao` e a skill `prescricao`. Descreva o **método** (identificar pena máxima em abstrato/concreta, marcos interruptivos/suspensivos, prescrição da pretensão punitiva × executória) e delegue o cálculo à calculadora.
- **Tempo de custódia / excesso de prazo** → contagem de dias desde a prisão até o marco legal/convencional; se houver calculadora de prazos, use `calculadora-tempestividade`; caso contrário, **[calculadora a implementar com testes]**. Sempre confira o **prazo do tratado**.
- **Detração** (art. 42 CP) → registre o total de dias de PPE para cômputo na pena do Estado requerente.

Esta skill é **metodológica**: NÃO embute cálculo jurídico determinístico. O raciocínio de contagem/prescrição é sempre delegado à calculadora correspondente e conferido por humano.

## Erros comuns (anti-padrões)

- **Fundamentar a soltura no art. 312 do CPP** (ordem pública, instrução) — irrelevante na PPE; o eixo é a **garantia da entrega**.
- **Citar a Lei 6.815/80** (Estatuto do Estrangeiro) como vigente — foi **revogada** pela Lei 13.445/2017.
- **Afirmar prazos de cor** — sempre conferir Lei/Decreto **e** tratado; o tratado prevalece.
- **Discutir o mérito da acusação estrangeira** — vedado pela contenciosidade limitada.
- **Endereçar a peça ao juízo interno** — a competência é **originária do STF** (petição ao Ministro Relator).
- **Ignorar a detração** (art. 42 CP) e os **compromissos** exigíveis do Estado requerente (comutação de pena de morte/perpétua, especialidade, não reextradição).
- **Tratar a prisão como automática** — art. 84 admite cautelares e domiciliar; a custódia é **excepcional**.
- **Confundir asilo/refúgio** com a extradição sem verificar a interação normativa (Lei 9.474/97).

## Checklist de defesa (PPE)

- [ ] Base normativa correta — **Lei 13.445/2017** e **Decreto 9.199/2017** (NÃO a Lei 6.815/80)?
- [ ] **Tratado aplicável** identificado e lido (prevalece sobre a regra geral)?
- [ ] Peça endereçada ao **Ministro Relator no STF** (competência originária)?
- [ ] Tese de **substituição por domiciliar/cautelares** (art. 84, §§2º/4º; art. 319 CPP) articulada com fatos de **baixo risco de fuga**?
- [ ] **Excesso de prazo** verificado contra o prazo **do tratado** e da lei/decreto?
- [ ] **Regularidade formal** do pedido conferida (identidade, título, dupla tipicidade, tradução)?
- [ ] **Prescrição** avaliada (BR e Estado requerente) com apoio de `calculadora-prescricao` / `prescricao`?
- [ ] **Vedações** verificadas (nacionalidade, crime político/opinião, jurisdição BR, processo/pena no BR)?
- [ ] **Detração** (art. 42 CP) registrada; **compromissos** do Estado requerente exigidos?
- [ ] Nenhum fundamento do **art. 312 CPP** transplantado indevidamente?
- [ ] Súmulas/precedentes **conferidos** via `jurisprudencia-stj-stf` — nada citado de cor?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa do extraditando, não substitui o juízo do profissional nem a leitura dos autos concretos da Extradição no STF.
- **Ética por polo.** Skill majoritariamente **defensiva** (advocacia — EAOAB e **Provimento 205/2021 da OAB**; se atuação da Defensoria, LC 80/94). Havendo atuação do **Ministério Público** (PGR, que oficia na extradição), observar o **CNMP**. O **roteador deve conferir o polo** do usuário antes de aplicar o tom acusatório — o padrão desta skill é a **defesa do extraditando**.
- **Citation Gate.** Toda súmula, tema ou acórdão passa **obrigatoriamente** por `jurisprudencia-stj-stf`/`verificacao-citacoes` antes do uso. Dispositivos de lei e súmulas notórias podem ser citados com certeza; qualquer precedente específico sem certeza absoluta vai marcado **[NÃO VERIFICADO]**.
- **Sigilo e LGPD.** Dados do extraditando/assistido nunca em repositório público.

## Lembretes finais

- **PPE ≠ preventiva do art. 312** — o eixo é **garantir a entrega**, não a ordem pública.
- **Custódia é excepcional** — art. 84 admite **domiciliar e cautelares**; explore-as sempre.
- **Competência é do STF** — petição ao **Ministro Relator** da Extradição.
- **Base é a Lei 13.445/2017** (não a Lei 6.815/80); confira o **tratado**, que prevalece.
- **Contenciosidade limitada** — não se rediscute o mérito da acusação estrangeira.
- **Prazos e prescrição** → calculadora + `jurisprudencia-stj-stf`; nunca de cor.
- **Detração e compromissos** do Estado requerente — sempre registrar/exigir.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
