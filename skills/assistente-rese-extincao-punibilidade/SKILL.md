---
name: assistente-rese-extincao-punibilidade
description: >-
  Use ao interpor, pelo ASSISTENTE DE ACUSAÇÃO (advogado do ofendido/querelante habilitado), recurso
  em sentido estrito contra a decisão que declara extinta a punibilidade — tipicamente prescrição
  reconhecida com marcos interruptivos ignorados (art. 581, VIII, c/c art. 584, §1º, CPP). Gatilhos:
  RESE do assistente, recurso em sentido estrito contra extinção da punibilidade, prescrição
  indevida, marcos interruptivos do art. 117… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-rese-extincao-punibilidade"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-rese-extincao-punibilidade", "assistente rese", "extincao punibilidade"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# RESE do Assistente de Acusação contra Extinção da Punibilidade (art. 581, VIII, c/c art. 584, §1º, CPP)

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

Esta skill orienta a elaboração do **recurso em sentido estrito (RESE)** interposto pelo **assistente de acusação** — o advogado do **ofendido, seu representante legal ou sucessores** (art. 268 CPP), habilitado na ação penal pública — contra a **decisão que julga extinta a punibilidade** (art. 581, VIII, CPP). O caso típico é a **prescrição reconhecida de forma tecnicamente equivocada**: o juízo declara prescrito o crime **ignorando ou contando mal os marcos interruptivos** do art. 117 do CP, e o assistente recorre para **restabelecer a punibilidade** e permitir o prosseguimento (ou o retorno) da persecução.

> **Alerta de polo (o roteador deve conferir antes de sugerir):** esta é peça do **lado da vítima** — só serve a quem atua como **assistente de acusação / querelante**, jamais à defesa. Confirme no `company.md` (perfil da instituição e polo) e no caso concreto que o usuário representa o **ofendido**, não o réu. Para o polo defesa, a peça correta é a skill `rese` (defensiva); a análise pró-réu da prescrição está em `extincao-punibilidade-prescricao` — objetivo **oposto** ao desta skill.

> **Lição central:** o RESE do assistente vive ou morre da **contagem correta da prescrição**. **Antes de redigir uma linha de recurso, refaça a linha do tempo prescricional** — pena em concreto ou em abstrato aplicável, prazo do art. 109, **cada marco interruptivo do art. 117** (recebimento da denúncia, pronúncia, decisão confirmatória da pronúncia, sentença/acórdão condenatório recorrível) e as causas suspensivas. O erro do juízo quase sempre está em **desconsiderar um marco interruptivo** ou em aplicar prazo prescricional de pena que já não é a base correta.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 581, 584, 271 e 598 do CPP e dos arts. 107, IV, 109, 110 e **117 do CP** — a Lei 12.234/2010 **aboliu a prescrição retroativa entre a data do fato e o recebimento da denúncia** (novo art. 110, §1º, CP) e alterou prazos do art. 109; para fatos anteriores vale a **lei mais benéfica ao réu** (irretroatividade da lei penal gravosa — CF, art. 5º, XL), o que impacta a tese acusatória. Súmulas, temas e overruling **passam obrigatoriamente** pela skill `jurisprudencia-stj-stf` (equivalente ao gate `verificacao-citacoes`) antes de fundamentar a peça.

## Base legal

- **Art. 581, VIII, CPP** — cabe RESE da decisão que **decretar a prescrição ou julgar, por outro modo, extinta a punibilidade**.
- **Art. 584, §1º, CPP** — o RESE do inciso VIII **tem efeito suspensivo** e legitima expressamente o recurso; é a norma que abre a via ao assistente contra a extinção da punibilidade.
- **Art. 268 CPP** — quem pode ser assistente: o ofendido, seu representante legal ou, na sua falta, o cônjuge/companheiro, ascendente, descendente ou irmão (art. 31 CPP).
- **Art. 271 CPP** — poderes do assistente, entre eles **arrazoar os recursos interpostos pelo Ministério Público** e **recorrer supletivamente** nas hipóteses legais.
- **Art. 598 CPP** — **apelação supletiva** do assistente quando o MP **não recorre**: via distinta do RESE (não confundir — ver quadro adiante).
- **Arts. 586 a 592 CPP** — rito bipartido do RESE: interposição, razões, **juízo de retratação** e subida.
- **Art. 107, IV, CP** — a prescrição como causa de extinção da punibilidade.
- **Arts. 109 e 110 CP** — prazos prescricionais (pela pena em abstrato e pela pena em concreto).
- **Art. 117 CP** — **causas interruptivas** da prescrição (o coração da tese).
- **Súmula 210 STF** — legitimidade do assistente/ofendido para recorrer (conferir alcance atual via `jurisprudencia-stj-stf`).

## A grande distinção — RESE (art. 581, VIII) × apelação supletiva (art. 598)

Confundir as vias é o erro que mais mata o recurso do assistente. Fixe:

| Aspecto | **RESE — art. 581, VIII** | **Apelação supletiva — art. 598** |
|---|---|---|
| Ataca | **decisão interlocutória** que decreta a prescrição / extingue a punibilidade | **sentença** absolutória ou condenatória, quando o MP não apela |
| Momento | extinção declarada **antes** da sentença de mérito (ou como decisão autônoma) | após a **sentença**, no silêncio recursal do MP |
| Prazo | **5 dias** para interpor; **2 dias** para razões (art. 586/588) | **15 dias**, contados do fim do prazo do MP (art. 598, p. único) |
| Efeito | **suspensivo** (art. 584, §1º) | regra da apelação |
| Retratação | **há** juízo de retratação (art. 589) | **não há** |

> **Regra prática:** se a extinção da punibilidade veio como **decisão autônoma / interlocutória** (o juízo reconheceu a prescrição e extinguiu o feito), a via é o **RESE do art. 581, VIII**. Se a prescrição foi reconhecida **na própria sentença** e há absolvição imprópria de mérito, discuta a via cabível (RESE vs. apelação) e, na dúvida, invoque o **princípio da fungibilidade** (art. 579 CPP), interpondo dentro do **menor prazo** e sem má-fé.

## Metodologia — passo a passo do RESE do assistente

1. **Confirmar a legitimidade e a habilitação.** O assistente já está **habilitado** nos autos (art. 268 e 269 CPP)? Se ainda não, o pedido de habilitação pode e deve acompanhar/preceder o recurso. Sem habilitação deferida, há risco de não conhecimento — sustente que a habilitação pode ser deferida até o trânsito em julgado (conferir alcance na jurisprudência atual via `jurisprudencia-stj-stf`).
2. **Verificar o interesse recursal.** O assistente recorre no **interesse na correta aplicação da lei penal e na reparação civil** (efeito civil da condenação — art. 91, I, CP; art. 63 CPP). A extinção indevida da punibilidade **frustra o título executivo penal** e o interesse do ofendido — este é o núcleo do interesse a demonstrar.
3. **Aferir a tempestividade.** RESE: **5 dias** da intimação da decisão (art. 586). Contar em dias e conferir a data de intimação do assistente (e não só a do MP).
4. **Refazer integralmente a contagem da prescrição** (ver bloco próprio abaixo) — é aqui que se ganha o recurso.
5. **Redigir a peça bipartida:** (i) **petição de interposição** dirigida ao **juízo *a quo*** (que pode se retratar — art. 589) e (ii) **razões** dirigidas ao **Tribunal**.
6. **Requerer expressamente o efeito suspensivo** (art. 584, §1º) e, ao final, o **restabelecimento da punibilidade** e o prosseguimento do feito.
7. **Passar tudo pelo Citation Gate** (`jurisprudencia-stj-stf`) e submeter à **revisão humana** do advogado responsável.

## O núcleo técnico — recontagem da prescrição e os marcos do art. 117 CP

O ataque do assistente é quase sempre **aritmético e de direito intertemporal**. Roteiro:

**a) Qual prescrição foi declarada?**
- **Prescrição da pretensão punitiva pela pena em abstrato** (art. 109 c/c 111 CP) — antes do trânsito, pelo **máximo** da pena cominada.
- **Prescrição pela pena em concreto** (retroativa ou intercorrente — art. 110, §1º) — após sentença condenatória, pela pena **aplicada**.
- Identifique qual delas o juízo usou e **se a base de cálculo do prazo está correta** (pena, causas de aumento/diminuição que alteram o máximo, concurso — as penas **não** se somam para fins de prescrição: art. 119 CP, cada crime tem sua prescrição isolada).

**b) Mapear os marcos INTERRUPTIVOS (art. 117 CP) — reinício da contagem "do zero":**

```
Interrompem a prescrição (art. 117 CP), zerando e reiniciando o prazo:
  I   — recebimento da denúncia ou da queixa
  II  — pronúncia
  III — decisão confirmatória da pronúncia
  IV  — publicação da sentença ou acórdão condenatório recorríveis
  V   — início ou continuação do cumprimento da pena
  VI  — reincidência
```

> **A tese-mãe do assistente:** o juízo **ignorou um marco interruptivo** — em regra o **recebimento da denúncia (I)** ou a **sentença/acórdão condenatório recorrível (IV)** — e por isso "somou" um período que na verdade **fora reiniciado**. Reconstruída a linha do tempo com o marco reinserido, **não há prescrição**. Demonstre com datas e o prazo do art. 109 aplicável a cada intervalo.

**c) Efeito da interrupção (art. 117, §1º):** interrompida a prescrição, **todo o prazo recomeça a correr do dia da interrupção**; a interrupção, salvo os incisos V e VI, **produz efeito quanto a todos os autores** e, nos crimes conexos objeto do mesmo processo, **estende-se aos demais** (art. 117, §1º — conferir redação).

**d) Causas SUSPENSIVAS (não zeram, apenas congelam):** art. 116 CP (questão prejudicial, cumprimento de pena no exterior, etc.) e **art. 366 CPP** (réu citado por edital que não comparece — suspende processo **e** prescrição). Verifique se houve suspensão que o juízo deixou de computar a favor da punibilidade.

**e) Direito intertemporal (cautela obrigatória):** a **Lei 12.234/2010** vedou a prescrição retroativa **anterior ao recebimento da denúncia** para fatos a partir de sua vigência. Para **fatos anteriores**, aplica-se a lei **mais benéfica ao réu** (CF, art. 5º, XL). Confira a **data do fato** antes de sustentar (ou refutar) a retroativa — sob pena de a tese acusatória esbarrar na irretroatividade.

## Teses do assistente (e as contra-teses da defesa)

**Teses do assistente (pró-punibilidade):**
- **Marco interruptivo ignorado:** reinserido o recebimento da denúncia / a sentença condenatória recorrível (art. 117, I e IV), o prazo do art. 109 **não se esgotou** — não há prescrição.
- **Base de cálculo errada:** o prazo foi calculado sobre pena/patamar incorreto (causa de aumento que eleva o máximo abstrato desconsiderada; concurso tratado por soma, quando a prescrição é **isolada** — art. 119 CP).
- **Suspensão não computada:** houve causa suspensiva (art. 116 CP / art. 366 CPP) que **estendeu** o prazo e o juízo não considerou.
- **Efeito civil:** a extinção indevida **subtrai do ofendido** o título executivo (art. 91, I, CP; art. 63 CPP) — interesse concreto que legitima e reforça o recurso.

**Contra-teses típicas da defesa (antecipe e neutralize):**
- **Falta de legitimidade/interesse do assistente** → responda com art. 271 e Súmula 210 STF e com o interesse na reparação civil.
- **Prescrição em perspectiva / virtual** (pela pena que se estimaria) → **rejeitada** pela jurisprudência dominante como categoria sem previsão legal (sustentar a inadmissibilidade da prescrição antecipada — conferir precedente atual via `jurisprudencia-stj-stf`; **não** citar número de acórdão sem verificação).
- **Retroativa pela pena em concreto** já operada → cheque a **data do fato** frente à Lei 12.234/2010 e a **data de publicação da sentença** (marco do inciso IV).

## Súmulas e precedentes (sob Citation Gate — conferir antes de citar)

- **Súmula 210 STF** — legitimidade do assistente/ofendido para **recorrer** (e habilitar-se). Notória, mas **confirme o enunciado e o alcance atual** via `jurisprudencia-stj-stf`.
- **Prescrição virtual / em perspectiva não é admitida** — orientação consolidada de STJ e STF (há enunciado sumular do STJ nesse sentido). **Confirmar o número e o teor** via `jurisprudencia-stj-stf` antes de citar — não arriscar número de súmula de memória.
- **Habilitação do assistente até o trânsito em julgado** e **prazo recursal do assistente não habilitado** — há entendimento sedimentado, mas **[NÃO VERIFICADO]** quanto a número de HC/REsp/tema específico: **conferir obrigatoriamente** em `jurisprudencia-stj-stf`.
- Qualquer **HC, REsp, RE, informativo ou tema** sobre contagem de prescrição, marcos interruptivos ou legitimidade do assistente é **[NÃO VERIFICADO]** até passar pelo gate. **Ensine a tese e cite o dispositivo (arts. 117, 109, 110 CP; 581, VIII, 584, §1º CPP); só acrescente número de julgado depois de confirmado.** Melhor faltar precedente do que citar acórdão inexistente.

## Estrutura da peça (interposição + razões)

```
[PETIÇÃO DE INTERPOSIÇÃO — dirigida ao JUÍZO A QUO]

EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [VARA] CRIMINAL DA COMARCA DE
[COMARCA]

Autos nº [Nº DO PROCESSO]

[NOME DO OFENDIDO/ASSISTENTE], já habilitado como ASSISTENTE DE ACUSAÇÃO nos
autos em epígrafe, por seu advogado que esta subscreve (procuração anexa), vem,
tempestivamente, com fundamento no art. 581, VIII, c/c o art. 584, §1º, e o art.
271, todos do CPP, interpor

RECURSO EM SENTIDO ESTRITO

contra a r. decisão de fls./ev. [...], que julgou EXTINTA A PUNIBILIDADE de
[NOME DO ACUSADO] pela prescrição, requerendo o recebimento do recurso em seu
EFEITO SUSPENSIVO (art. 584, §1º, CPP), o processamento na forma dos arts. 587 a
589 do CPP e, após eventual juízo de retratação, a remessa das razões anexas ao
Egrégio Tribunal de Justiça.

Termos em que, pede deferimento.
[LOCAL], [DATA]. [ADVOGADO] — OAB/[UF] [Nº]

---------------------------------------------------------------------------

[RAZÕES DO RECURSO — dirigidas ao TRIBUNAL]

RAZÕES DO RECURSO EM SENTIDO ESTRITO

Recorrente: [ASSISTENTE DE ACUSAÇÃO]
Recorrido:  [ACUSADO]
Origem:     [VARA/COMARCA] — Autos nº [...]

EGRÉGIO TRIBUNAL, COLENDA CÂMARA, ÍNCLITOS JULGADORES,

I — DA ADMISSIBILIDADE E DA LEGITIMIDADE DO ASSISTENTE
Demonstrar: habilitação (arts. 268/269 CPP), tempestividade (5 dias — art. 586),
legitimidade e interesse recursal (art. 271 CPP; Súmula 210 STF; interesse na
reparação civil — art. 91, I, CP e art. 63 CPP).

II — DA SÍNTESE FÁTICO-PROCESSUAL
Narrar a imputação, a marcha processual e a decisão recorrida que declarou a
prescrição — com as DATAS que interessam à contagem.

III — DO MÉRITO: DA INEXISTÊNCIA DE PRESCRIÇÃO
a) A linha do tempo prescricional correta (datas e prazo do art. 109 aplicável).
b) O(s) MARCO(S) INTERRUPTIVO(S) do art. 117 CP DESCONSIDERADO(S) pela decisão
   (recebimento da denúncia — I; sentença/acórdão condenatório recorrível — IV;
   pronúncia — II/III, se júri) — reinserido(s), o prazo NÃO se esgotou.
c) Reconstrução da contagem (com o quadro/tabela de intervalos) demonstrando que
   NÃO há prescrição.
d) [Se aplicável] Base de cálculo/patamar correto; prescrição ISOLADA no concurso
   (art. 119 CP); causa SUSPENSIVA não computada (art. 116 CP / art. 366 CPP);
   direito intertemporal (Lei 12.234/2010 — conferir data do fato).

IV — DO INTERESSE DO OFENDIDO
A extinção indevida subtrai do assistente o título executivo penal (reparação
civil). Interesse concreto e legítimo na manutenção da punibilidade.

V — DO PEDIDO
Requer o CONHECIMENTO e o PROVIMENTO do recurso para REFORMAR a decisão, AFASTAR
a prescrição, RESTABELECER a punibilidade e determinar o PROSSEGUIMENTO do feito.

[LOCAL], [DATA]. [ADVOGADO] — OAB/[UF] [Nº]
```

**Campos a preencher:** [VARA], [COMARCA], [Nº DO PROCESSO], [NOME DO OFENDIDO/ASSISTENTE], [NOME DO ACUSADO], datas dos marcos interruptivos, prazo do art. 109 aplicável, [LOCAL], [DATA], [ADVOGADO], [UF], [Nº] OAB.

## Documentos a anexar

1. Procuração e comprovação da condição de ofendido / da habilitação como assistente (arts. 268/269 CPP).
2. Cópia da **decisão recorrida** que declarou a prescrição.
3. **Certidões e termos** que fixam as datas dos marcos: recebimento da denúncia, pronúncia/confirmação, publicação da sentença/acórdão (art. 117 CP).
4. **Quadro-resumo da contagem prescricional** (linha do tempo com intervalos e prazos) — a peça de convicção do recurso.
5. Comprovante de **intimação** do assistente (para a tempestividade).

## Erros comuns / checklist final

- [ ] **Polo confirmado** — o usuário representa o **ofendido/assistente**, não o réu? (Se for defesa, esta skill é a errada.)
- [ ] **Via correta** — extinção por decisão interlocutória → **RESE (art. 581, VIII)**; na sentença → discutir apelação/fungibilidade (art. 579)?
- [ ] **Legitimidade e habilitação** do assistente demonstradas (arts. 268/271; Súmula 210 STF)?
- [ ] **Interesse recursal** ancorado também no efeito **civil** (art. 91, I, CP; art. 63 CPP)?
- [ ] **Tempestividade** contada da intimação **do assistente** (5 dias — art. 586)?
- [ ] **Linha do tempo prescricional refeita** do zero, com todas as datas?
- [ ] **Marco interruptivo do art. 117 ignorado** identificado e reinserido (o âmago da tese)?
- [ ] **Base de cálculo** do prazo (art. 109) correta; prescrição **isolada** no concurso (art. 119)?
- [ ] **Direito intertemporal** conferido (Lei 12.234/2010 × data do fato) antes de sustentar a retroativa?
- [ ] **Efeito suspensivo** requerido expressamente (art. 584, §1º)?
- [ ] **Pedido** de restabelecimento da punibilidade e prosseguimento do feito, claro e específico?
- [ ] **Citações verificadas** em `jurisprudencia-stj-stf` e **[NÃO VERIFICADO]** substituído por precedente conferido (ou omitido)?

**Anti-padrões (evitar):**
- Interpor **apelação** (art. 598) quando cabia **RESE** (art. 581, VIII) — e vice-versa.
- **Somar penas** no concurso para o prazo prescricional (a prescrição é isolada — art. 119 CP).
- Sustentar **prescrição virtual/em perspectiva** às avessas ou ignorar que a defesa a invocará (é rejeitada — mas cite o enunciado só após verificação).
- Alegar a **retroativa** sem checar a **data do fato** frente à Lei 12.234/2010.
- Contar a tempestividade pela intimação **do MP** em vez da **do assistente**.
- **Citar número de HC/REsp/tema/informativo de memória** — passe tudo por `jurisprudencia-stj-stf`; na dúvida, ensine a tese e cite o **dispositivo**.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. A responsabilidade pela interposição, pelas teses e pela contagem prescricional é sempre do **advogado** (CED/OAB, art. 2º; **Provimento 205/2021** quanto à divulgação/atuação). **Nenhuma súmula, precedente ou tese** é citada de memória: tudo passa pelo **Citation Gate** (`jurisprudencia-stj-stf` / `verificacao-citacoes`) — há sanções reais por jurisprudência inventada por IA. **Sigilo e LGPD:** dados do ofendido, do acusado e dos autos não vão para repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
