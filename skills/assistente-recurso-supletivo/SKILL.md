---
name: assistente-recurso-supletivo
description: >-
  Use ao interpor a apelação ou o RESE SUPLETIVO do assistente de acusação / ofendido quando o
  Ministério Público silencia e deixa a sentença ou a decisão sem recurso (arts. 271, 584, §1º, e
  598 do CPP). Cobre a certidão de inércia do MP (decurso do prazo em branco), a dicotomia de prazo
  — 5 dias para o assistente já habilitado × 15 dias para o ofendido não habilitado (Súmula 448/STF)
  —, as preliminares de legitimidade e… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-recurso-supletivo"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-recurso-supletivo", "assistente recurso", "recurso supletivo"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Recurso Supletivo do Assistente de Acusação (arts. 271, 584, §1º, e 598 do CPP)

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

Esta skill orienta a **interposição do recurso supletivo (subsidiário) do assistente de acusação ou do ofendido** quando o **Ministério Público não recorre** da sentença — deixando a absolvição, a desclassificação, a impronúncia ou a pena tida por branda **sem impugnação**. O assistente, então, **recorre no lugar do Parquet inerte**, dentro dos estreitos limites que o CPP lhe reserva.

É a **peça do polo acusatório** que a skill genérica `assistente-acusacao` só aponta e manda montar: aqui está o **como fazer** — provar a inércia do MP, acertar o prazo, vencer as preliminares e delimitar o pedido.

> **Lição central:** o recurso do assistente é **supletivo e subsidiário** — só existe **enquanto e porque o MP silenciou**. Duas coisas derrubam o assistente na prática, antes mesmo do mérito: (1) **não comprovar a inércia do MP** (falta a certidão do decurso do prazo do Parquet em branco) e (2) **errar o prazo** (5 dias se já habilitado; 15 dias se ainda não habilitado — Súmula 448/STF). Acerte esses dois pontos **antes** de discutir o mérito.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 271, 584, §1º, 593, 598 e 798 do CPP e o teor das **Súmulas 448, 210 e 208 do STF** antes de fundamentar. Súmulas, temas repetitivos e eventual *overruling* passam pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) **antes** de irem para a peça. Nada de súmula ou acórdão citado de memória.

## Quem pode e o que é o recurso supletivo

- **Assistente de acusação (arts. 268-273 CPP):** o **ofendido**, seu representante legal ou, na falta, o cônjuge/ascendente/descendente/irmão (art. 31 CPP), que se **habilita** para atuar ao lado do MP **na ação penal pública**. Não confundir com o querelante da ação penal privada, que é o próprio titular.
- **Recurso supletivo (ou subsidiário):** o assistente **não** tem legitimidade recursal ampla e concorrente com a do MP. Sua legitimação é **subsidiária** — surge **quando o MP não recorre**. Se o MP recorreu, o interesse do assistente em geral se exaure (não há o que suprir).
- **Rol taxativo (interpretação clássica).** O CPP arrola as hipóteses de recurso do assistente de forma restrita: **apelação** (art. 598) e **RESE** contra a decisão que **julga extinta a punibilidade** (art. 271 c/c 584, §1º) e contra a **impronúncia** (esta última controvertida — ver adiante). Fora dessas hipóteses, discute-se a legitimidade caso a caso.

## Base legal (âncoras)

- **Art. 271 do CPP** — ao assistente é permitido, entre outros atos, **arrazoar os recursos interpostos pelo MP** e **interpor os recursos** dos arts. 584, §1º, e 598.
- **Art. 584, §1º, do CPP** — o **RESE** cabível ao assistente é o **contra a decisão que julga extinta a punibilidade** (e, no procedimento do júri, discute-se a impronúncia — conferir a técnica atual).
- **Art. 598 do CPP** — quando o MP **não interpuser apelação**, o **ofendido ou seu representante** (assistente habilitado ou não) **poderá apelar**, ainda que não se tenha habilitado; o **parágrafo único** fixa o prazo em **15 dias** correndo **do dia em que terminar o do MP**.
- **Art. 593 do CPP** — hipóteses de apelação (o assistente apela nos limites do art. 598, geralmente contra a sentença absolutória ou a sentença do júri, conforme o caso).
- **Art. 798 do CPP** — contagem dos prazos processuais (exclui o dia do começo, inclui o do vencimento; prorroga se cair em dia sem expediente).
- **Súmula 448/STF** — o prazo para o assistente **já habilitado** recorrer supletivamente é de **5 dias**; para o **não habilitado**, de **15 dias** (art. 598, parágrafo único). Ambos correm **após** o decurso do prazo do MP.
- **Súmula 210/STF** — o assistente **pode arrazoar o RESE ou apelar mesmo sem se ter habilitado** anteriormente (legitimidade do ofendido não habilitado).
- **Súmula 208/STF** — o assistente **não** pode recorrer, **extraordinariamente**, de decisão concessiva de HC (delimita o alcance da legitimidade recursal do assistente).
- **LC 80/94** — se houver Defensoria atuando no polo passivo, lembrar da **dobra de prazo** da Defensoria (afeta o cômputo do contraditório, não o prazo do assistente).

## O ponto que mais derruba: PROVAR a inércia do MP

O recurso supletivo é **condicionado**: só nasce **depois** que o prazo do MP escoa **em branco**. Logo, a **peça precisa demonstrar** que:

1. A sentença/decisão foi **intimada ao MP**;
2. O **prazo do MP** (em regra 5 dias para RESE / 5 dias para apelação, contados na forma da intimação pessoal do Parquet) **transcorreu sem recurso**;
3. Existe **certidão cartorária de decurso de prazo** do MP (ou o assistente **requer** a expedição/juntada dessa certidão, se ainda não estiver nos autos).

➡️ **Regra de ouro:** **anexe (ou requeira desde logo) a certidão de decurso do prazo do MP.** Sem a prova da inércia, o recurso do assistente é **inadmitido por falta de pressuposto** — o juízo/tribunal não conhece. Se a certidão ainda não foi lavrada, o próprio corpo da interposição deve **requerer a certificação do decurso** e, subsidiariamente, demonstrar por outros meios (andamento processual, ausência de peça do MP) que o Parquet não recorreu.

## O ponto que mais derruba: ACERTAR o prazo (Súmula 448/STF)

A dicotomia é a armadilha mais comum:

| Situação do ofendido | Prazo do recurso supletivo | Fundamento | *Dies a quo* |
|---|---|---|---|
| **Assistente já habilitado** nos autos | **5 dias** | Súmula 448/STF | do fim do prazo do MP |
| **Ofendido NÃO habilitado** (ainda não é assistente) | **15 dias** | art. 598, par. único + Súmula 448/STF | do fim do prazo do MP |

- **O prazo do assistente NÃO corre em paralelo ao do MP** — corre **depois**. Só começa quando **encerra** o prazo do Ministério Público (art. 598, par. único: "a partir do dia em que terminar o do Ministério Público").
- **Súmula 210/STF:** o ofendido pode recorrer **mesmo sem habilitação prévia** — mas, aí, no prazo de **15 dias** (não habilitado), e sua habilitação se dá **no ato** da interposição.
- **Contagem (art. 798):** exclui-se o dia do começo, inclui-se o do vencimento; prorroga-se se recair em dia sem expediente forense. **Comprovar a data-limite do MP** é o que ancora o *dies a quo* do assistente.

> **Atenção — erro fatal:** protocolar em 5 dias quem tinha 15 é inofensivo (tempestivo com folga); protocolar em 15 dias quem só tinha 5 (assistente já habilitado) é **intempestivo** e derruba o recurso. Na dúvida sobre a habilitação, **trate como já habilitado e proteja o prazo de 5 dias**.

## Interesse recursal do assistente — mais amplo do que a mera indenização

Velha controvérsia: o assistente atua **só** pelo interesse patrimonial (reparação civil) ou também pela **justa aplicação da lei penal**?

- **Tese acusatória (dominante):** o interesse do assistente **não se limita** à futura indenização. Ele abrange a **correta e justa aplicação da lei penal** — busca da condenação, do reconhecimento de qualificadora, da pena adequada. O ofendido tem interesse legítimo no **desfecho penal**, não apenas no cível.
- **Consequência prática:** o assistente pode apelar **da absolvição** para buscar a condenação; pode recorrer para **agravar a pena** ou reconhecer **qualificadora/causa de aumento** indevidamente afastada; pode atacar a **desclassificação**. O interesse recursal se afere pela **sucumbência acusatória** deixada sem impugnação pelo MP.
- **Limite:** o assistente **não** amplia o objeto para além do que a acusação poderia postular; move-se **dentro** da pretensão punitiva. E, no **HC**, sua legitimação extraordinária é restrita (**Súmula 208/STF**).

## As hipóteses concretas — apelação × RESE

| Decisão a impugnar | Recurso do assistente | Base |
|---|---|---|
| **Sentença absolutória** (art. 386 CPP) | **Apelação** | art. 598 c/c 593, I |
| **Sentença do júri** (absolvição/desclassificação, nos limites do art. 593, III) | **Apelação** | art. 598 c/c 593, III |
| **Decisão que julga extinta a punibilidade** | **RESE** | art. 271 c/c 584, §1º |
| **Impronúncia** (rito do júri) | **RESE** (controvertido — hoje muitos entendem cabível apelação após a Lei 11.689/2008; **conferir a técnica atual**) | art. 271 / 584, §1º / 416 |
| **Concessão de HC** | **Sem legitimidade** para RE do assistente | Súmula 208/STF |

> **Cautela:** a Lei 11.689/2008 alterou o rito do júri e o recurso contra a **impronúncia** (art. 416 CPP passou a prever **apelação**). A referência histórica do art. 584, §1º, à impronúncia deve ser lida à luz do texto **vigente**. **Confirme, para o caso concreto, se a decisão desafia RESE ou apelação** antes de escolher a via — recurso errado pode não ser recebido (e nem sempre se aplica a fungibilidade). Passe pelo gate `verificacao-citacoes`.

## Estrutura da peça de interposição

O recurso supletivo tem **duas etapas** (como todo RESE/apelação): a **petição de interposição** (dirigida ao juízo *a quo*, no prazo) e, depois, as **razões** (apresentadas no prazo próprio após o recebimento). A interposição é o ato que **fixa a tempestividade** — priorize-a.

1. **Endereçamento** ao juízo que proferiu a decisão (*a quo*).
2. **Qualificação** do ofendido/assistente e menção ao processo.
3. **Habilitação** (se ainda não habilitado): requerer, no mesmo ato, a habilitação como assistente (Súmula 210/STF).
4. **Demonstração da inércia do MP:** apontar o decurso do prazo do Parquet em branco e **requerer/juntar a certidão** de decurso (pressuposto do recurso supletivo).
5. **Tempestividade:** indicar o *dies a quo* (fim do prazo do MP) e o prazo aplicável (5 ou 15 dias — Súmula 448/STF), demonstrando o protocolo dentro dele.
6. **Legitimidade e interesse:** sustentar a legitimação subsidiária (arts. 271, 598) e o interesse na **justa aplicação da lei penal**.
7. **Indicação do recurso e da decisão impugnada** (apelação/RESE contra a sentença/decisão X).
8. **Pedido de recebimento** (e processamento) — lembrando que **não há efeito suspensivo** próprio (ver adiante); as **razões** virão no prazo do art. 600 (apelação) ou 588 (RESE).

## Ausência de efeito suspensivo — o que muda

- O recurso do assistente, em regra, **não tem efeito suspensivo** capaz de obstar a soltura decorrente da absolvição. Se a sentença **absolveu** e determinou a **soltura**, o recurso supletivo **não a suspende** automaticamente — o réu é solto.
- **Consequência estratégica:** se o objetivo é impedir a liberação ou reverter medida, o assistente deve avaliar **medida autônoma** (ex.: pedido de efeito suspensivo ao tribunal, quando cabível) — mas **não conte** com a suspensão automática. A regra é o **duplo efeito apenas devolutivo** para o assistente na maioria das hipóteses.
- **Diferença do MP:** algumas impugnações do MP têm regime próprio; o assistente **não herda** prerrogativas que a lei reserva ao Parquet. **Confirmar, no caso, o regime de efeitos do recurso escolhido.**

## Teses acusatórias (a favor do conhecimento) e contra-teses (defesa/apelado)

**Teses do assistente (para o recurso ser conhecido e provido):**
1. **Legitimidade subsidiária configurada:** o MP silenciou; a certidão de decurso comprova a inércia (arts. 271, 598 CPP).
2. **Tempestividade:** protocolo dentro do prazo correto (5 ou 15 dias, Súmula 448/STF), contado do fim do prazo do MP (art. 598, par. único; art. 798).
3. **Interesse amplo:** o interesse do assistente abrange a **justa aplicação da lei penal**, não só a reparação civil — daí a legitimidade para buscar condenação/agravamento.
4. **Habilitação no ato** (se não habilitado): Súmula 210/STF permite recorrer sem habilitação prévia, no prazo de 15 dias.
5. **Mérito:** reforma da absolvição/desclassificação/pena, nos limites da sucumbência acusatória deixada em aberto.

**Contra-teses típicas do apelado/defesa (a antecipar):**
1. **Ilegitimidade:** MP recorreu (não há o que suprir) ou a hipótese está fora do rol dos arts. 271/584, §1º/598.
2. **Intempestividade:** aplicar 15 dias a quem só tinha 5 (assistente já habilitado) — ou contar o prazo em paralelo ao do MP.
3. **Falta do pressuposto:** ausência de certidão de decurso do prazo do MP.
4. **Ausência de interesse:** sustentar que o interesse do assistente seria só indenizatório (tese hoje minoritária, mas ainda invocada).
5. ***Reformatio* e limites:** o assistente não pode inovar além da pretensão acusatória.

## Súmulas e dispositivos aplicáveis (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 448/STF** — prazo do assistente: **5 dias** (habilitado) / **15 dias** (não habilitado), após o do MP.
- **Súmula 210/STF** — o assistente pode arrazoar/apelar **mesmo sem habilitação** prévia.
- **Súmula 208/STF** — o assistente **não tem legitimidade** para RE contra decisão **concessiva de HC**.
- **Arts. 271, 584, §1º, 593, 598 e 798 do CPP** — legitimação, hipóteses, prazos e contagem.
- **[NAO VERIFICADO]** Qualquer **número de HC/REsp/RE, informativo ou tema repetitivo** do STJ/STF sobre o alcance do interesse recursal do assistente, sobre o cabimento de RESE × apelação contra impronúncia após a Lei 11.689/2008, ou sobre efeito suspensivo do recurso do assistente **deve ser conferido** via `jurisprudencia-stj-stf` **antes** de citar. Prefira sustentar a **tese e o dispositivo** a arriscar um número de acórdão.

## Erros comuns / checklist final

- [ ] **Inércia do MP comprovada?** Certidão de decurso do prazo do MP **juntada ou requerida** no corpo da interposição?
- [ ] **Prazo correto?** 5 dias (assistente já habilitado) × 15 dias (não habilitado) — Súmula 448/STF — contado **após** o prazo do MP (art. 598, par. único)?
- [ ] ***Dies a quo* ancorado** na data-limite do MP, com contagem do art. 798 (exclui o começo, inclui o vencimento, prorroga em dia sem expediente)?
- [ ] **Legitimidade subsidiária** demonstrada (MP não recorreu; hipótese dentro dos arts. 271/584, §1º/598)?
- [ ] **Recurso certo** escolhido (apelação × RESE), à luz do texto **vigente** (atenção à impronúncia pós-Lei 11.689/2008)?
- [ ] **Interesse recursal** sustentado como **justa aplicação da lei penal**, não só reparação civil?
- [ ] **Habilitação no ato** requerida, se o ofendido ainda não era assistente (Súmula 210/STF)?
- [ ] **Efeito suspensivo:** ciente de que, em regra, **não há** — avaliada medida autônoma se o objetivo for obstar a soltura?
- [ ] **Não excedeu os limites** da pretensão acusatória (sem inovar além do que o MP poderia postular)?
- [ ] **Súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar — e itens `[NAO VERIFICADO]` resolvidos?

**Anti-padrões (evitar):**
- Recorrer **sem** a certidão de decurso do prazo do MP (recurso inadmitido por falta de pressuposto).
- Contar o prazo do assistente **em paralelo** ao do MP, e não **depois** dele.
- Aplicar **15 dias** ao assistente **já habilitado** (só tinha 5 — Súmula 448/STF).
- Recorrer quando o **MP já recorreu** (falta interesse; nada a suprir).
- Escolher **RESE** onde cabe **apelação** (ou vice-versa) sem conferir o texto vigente — recurso não recebido.
- Reduzir o interesse do assistente à **indenização** e desistir do mérito penal.
- **Contar** com efeito suspensivo automático para impedir a soltura decorrente da absolvição.
- Citar **número de acórdão/informativo** de memória — passar pelo gate antes.

## Lembretes finais

- **Supletivo = subsidiário:** o recurso do assistente **só nasce da inércia do MP** — comprove-a com **certidão de decurso**.
- **Prazo é tudo:** **5 dias** (habilitado) × **15 dias** (não habilitado), Súmula 448/STF, contados **após** o do MP (art. 598, par. único; art. 798).
- **Interesse amplo:** o assistente busca a **justa aplicação da lei penal**, não só a reparação civil.
- **Habilitação no ato** é possível (Súmula 210/STF); no **HC**, a legitimação é restrita (Súmula 208/STF).
- **Sem efeito suspensivo** em regra — não confie na suspensão automática da soltura.
- **Recurso certo** (apelação × RESE), sempre à luz do **texto vigente** — conferir via `jurisprudencia-stj-stf`.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese a confirmar, jamais peça pronta para protocolo. Nenhuma súmula, precedente ou tese vai à peça sem passar pela verificação (`jurisprudencia-stj-stf` / `verificacao-citacoes`): há sanções reais por jurisprudência inventada por IA. A atuação como assistente de acusação observa a ética do polo do usuário — **advocacia:** OAB + Código de Ética e Provimento 205/2021 (o advogado do ofendido responde pela peça e pela sua adequação); **Ministério Público:** normas do CNMP; **Defensoria** (quando atua como assistente da vítima hipossuficiente): LC 80/94. Conflito de interesses (art. 17 do EAOAB) deve ser checado na triagem. A responsabilidade final é sempre do profissional que subscreve.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
