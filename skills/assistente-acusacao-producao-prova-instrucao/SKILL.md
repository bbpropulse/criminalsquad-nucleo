---
name: assistente-acusacao-producao-prova-instrucao
description: >-
  Use ao atuar como ASSISTENTE DE ACUSAÇÃO (advogado do ofendido/querelante habilitado, art. 268
  CPP) na fase de INSTRUÇÃO — arrolar testemunhas, requerer perícias e diligências, juntar
  documentos e sustentar o interesse da vítima na produção da prova, complementando as reperguntas.
  Gatilhos: assistente de acusação, assistente do MP, advogado da vítima/ofendido, produção de prova
  pela acusação, rol de testemunhas do… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-acusacao-producao-prova-instrucao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-acusacao-producao-prova-instrucao", "assistente acusacao", "prova instrucao"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Assistente de Acusação — Estratégia Probatória e Rol na Instrução (arts. 268-273 e 155-250 do CPP)

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

Esta skill orienta a **atuação probatória própria do assistente de acusação** na fase de instrução criminal: o **arrolamento de testemunhas**, o **requerimento de perícias, exames e diligências**, a **juntada de documentos** e a **sustentação do interesse do ofendido** na produção da prova, complementando as **reperguntas** (art. 212 CPP). O assistente é o **advogado do ofendido** (ou de seus sucessores, art. 268 CPP) habilitado a intervir ao lado do Ministério Público — é auxiliar da acusação, não seu substituto.

> ⚠️ **SKILL DO POLO ACUSATÓRIO.** Este material serve **exclusivamente** a quem atua na **acusação** — assistente de acusação (advogado do ofendido/querelante) ou, por analogia de técnica probatória, ao próprio Ministério Público. **Não se aplica à defesa.** O roteador/orquestrador deve **conferir o polo do usuário** (`company.md`) **antes de sugerir esta skill**: se a instituição atua na defesa, esta skill NÃO deve ser oferecida.

> **Lição central:** o assistente **não requer prova como parte plena** — ele **postula de forma subsidiária e limitada** ao interesse do ofendido (art. 271 CPP), sempre **ouvido o MP** (art. 272 CPP) e sob decisão do juiz. O erro mais comum é agir como se fosse titular da ação: **o assistente propõe meios de prova, requer diligências e reperguntas — não conduz o inquérito nem substitui a atuação do Parquet**. Postule tempestivamente, fundamente o interesse da vítima e registre tudo para preservar o recurso.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 268 a 273 e 155 a 250 do CPP — a Lei 13.964/2019 (Pacote Anticrime) alterou a produção da prova (cadeia de custódia, arts. 158-A a 158-F) e o juiz das garantias. Confira também súmulas, temas e overruling via a skill `jurisprudencia-stj-stf` antes de fundamentar qualquer peça. Nenhum precedente vai à peça sem passar pelo gate `verificacao-citacoes`.

## Base legal

- **Arts. 268 a 273 do CPP** — o assistente de acusação: quem pode ser (art. 268), momento (art. 269), poderes (art. 271), oitiva do MP (art. 272), recurso da decisão sobre admissão (art. 273).
- **Art. 271 do CPP** — o **catálogo de poderes** do assistente: propor meios de prova, requerer perguntas às testemunhas, aditar o libelo (revogado) e os articulados, participar do debate oral e arrazoar os recursos.
- **Art. 212 do CPP** — inquirição direta das testemunhas pelas partes (as **reperguntas**); o assistente pergunta **após** o MP.
- **Art. 156 do CPP** — o ônus da prova cabe a quem alega; poder instrutório supletivo do juiz.
- **Art. 155 do CPP** — livre convicção motivada; prova produzida em contraditório judicial; vedação de decisão exclusivamente com base em elementos do inquérito.
- **Arts. 158 a 184 do CPP** — prova pericial (exame de corpo de delito, art. 158; obrigatoriedade nas infrações que deixam vestígios, art. 158; quesitos das partes, art. 159, §3º).
- **Arts. 158-A a 158-F do CPP** (Lei 13.964/19) — **cadeia de custódia** da prova material.
- **Arts. 202 a 225 do CPP** — prova testemunhal (rol, número, substituição, contradita).
- **Arts. 231 a 238 do CPP** — prova documental (juntada a qualquer tempo, salvo restrições do júri).
- **Art. 479 do CPP** — no júri, documento novo só se juntado com **antecedência mínima de 3 dias úteis** e ciência da outra parte.
- **Art. 201 do CPP** — direitos do ofendido (comunicação dos atos, espaço reservado, intimação de decisões).

## Quem pode ser assistente e quando se habilita

- **Legitimados (art. 268 c/c art. 31 CPP):** o **ofendido**, seu **representante legal** ou, na ausência/morte, o **cônjuge, ascendente, descendente ou irmão** (CADI). Nas ações penais públicas.
- **Momento (art. 269 CPP):** pode intervir **enquanto não transitar em julgado a sentença** — recebe a causa **no estado em que se acha** (não se refazem atos já praticados). Logo, **quanto antes se habilitar, mais prova poderá influenciar**.
- **Procedimento:** petição de habilitação com procuração e prova da legitimidade (parentesco/qualidade de ofendido), **ouvido o MP** (art. 272). Da decisão que **admite ou não** o assistente **não cabe recurso** (art. 273) — mas a doutrina/jurisprudência admitem **mandado de segurança** e **correição** contra a inadmissão indevida (conferir via `jurisprudencia-stj-stf`).
- **O que o assistente NÃO pode:** substituir o MP, requerer arquivamento, dispor da ação penal pública, atuar contra o interesse do ofendido, ou produzir prova estranha ao objeto do processo.

## O catálogo de poderes probatórios (art. 271 CPP)

O art. 271 lista o que o assistente pode fazer. Em matéria de prova, três frentes:

1. **Propor meios de prova** — arrolar testemunhas, requerer perícias/exames, indicar diligências, juntar documentos. Tudo **subsidiário** e **sujeito à oitiva do MP** (art. 272) e à decisão do juiz.
2. **Requerer perguntas às testemunhas** — as **reperguntas** (art. 212), formuladas **após** o Ministério Público. (A técnica de reperguntas em si é objeto de skill própria — ver `distinct_from`.)
3. **Participar dos debates e recorrer** — sustentação oral e razões recursais, inclusive supletivas (o assistente recorre quando o MP não recorre — Súmula 210/STF).

> **Regra de ouro do timing.** Como o assistente recebe o processo **no estado em que está** (art. 269), a prova só se produz se o **requerimento for tempestivo**. Habilitado antes da instrução, arrole no momento processual da acusação; habilitado depois, requeira as diligências ainda cabíveis e **fundamente o interesse do ofendido** para justificar a produção.

## Metodologia — passo a passo da atuação probatória

### 1. Habilitar e mapear o estágio do processo
Peticione a habilitação (arts. 268-269) com procuração e prova da legitimidade. Verifique **em que fase está a instrução**: se antes do rol da acusação, há espaço amplo; se já iniciada a AIJ, foque em diligências e reperguntas.

### 2. Definir a teoria do caso da vítima e o que provar
Liste os **fatos que interessam ao ofendido**: materialidade, autoria, qualificadoras, causas de aumento, extensão do dano (relevante para o **valor mínimo de reparação**, art. 387, IV, CPP). Cada meio de prova deve servir a um desses pontos.

### 3. Arrolar testemunhas (arts. 271, 401-405 CPP)
- Requeira a oitiva das testemunhas de interesse do ofendido, **respeitando o número legal** do procedimento (em regra **até 8** por fato no ordinário, art. 401; **5** no sumário; **8** na 1ª fase do júri, art. 406, §§2º-3º — conferir por procedimento).
- **Fundamente a pertinência** de cada testemunha e o ponto que ela esclarece.
- Atenção à **oitiva conjunta com o rol do MP**: o assistente **complementa**, não duplica — evite testemunhas redundantes que o juiz pode indeferir.

### 4. Requerer perícias, exames e diligências (arts. 158-184 CPP)
- **Exame de corpo de delito** é obrigatório nas infrações que deixam vestígios (art. 158); requeira sua realização/complementação se ausente ou deficiente.
- **Formule quesitos** às partes admitidos pelo art. 159, §3º (perguntas ao perito) — direito do assistente de esclarecer pontos do laudo no interesse da vítima.
- Requeira **diligências** (reconstituição, reconhecimento, quebra de sigilo quando cabível ao MP) **sempre por intermédio e com anuência do MP** — o assistente **não tem** legitimidade autônoma para medidas cautelares invasivas de titularidade privativa do Parquet.
- Zele pela **cadeia de custódia** (arts. 158-A a 158-F): aponte, em favor da acusação, a **regularidade** do rastreamento da prova material; antecipe a impugnação da defesa.

### 5. Juntar documentos (arts. 231-238 CPP)
- Documentos podem ser juntados **a qualquer tempo** (art. 231), salvo fase específica.
- **No júri, atenção ao art. 479:** documento ou objeto só é lido/exibido em plenário se juntado com **antecedência mínima de 3 dias úteis** e com **ciência da parte contrária**. Juntada intempestiva em plenário gera nulidade — **planeje a juntada antes**.

### 6. Requerer reperguntas na AIJ (art. 212 CPP)
- Na audiência, após as perguntas do MP, o assistente formula suas **reperguntas** às testemunhas — **diretamente** (sistema do art. 212), no que interessa à vítima e sem repetir o já perguntado. (Detalhe técnico das reperguntas: skill própria.)

### 7. Requerer o valor mínimo de reparação (art. 387, IV, CPP)
- Produza prova do **dano** (documentos, perícia contábil, notas, laudos) para instruir o pedido de **fixação do valor mínimo de indenização** na sentença condenatória — interesse patrimonial legítimo do ofendido.

## Interesse do ofendido × subsidiariedade — a linha que não se cruza

| O assistente PODE | O assistente NÃO pode |
|---|---|
| Propor meios de prova (art. 271, I) | Requerer arquivamento ou dispor da ação pública |
| Arrolar testemunhas de interesse da vítima | Substituir o MP na titularidade da ação |
| Requerer perícias, exames e diligências | Requerer, autonomamente, cautelares privativas do MP (ex.: certas quebras de sigilo) |
| Formular quesitos ao perito (art. 159, §3º) | Produzir prova estranha ao objeto do processo |
| Repergunta às testemunhas após o MP (art. 212) | Perguntar antes do MP ou conduzir a inquirição |
| Juntar documentos (art. 231) | Juntar documento no júri fora do prazo do art. 479 |
| Recorrer supletivamente (Súmula 210/STF) | Recorrer quando o MP já recorreu no mesmo sentido (sem interesse) |

> **Toda postulação do assistente passa pela oitiva do MP (art. 272) e pela decisão do juiz.** O assistente **requer**; quem **defere** é o juiz, ouvido o Parquet. Registre o requerimento e a decisão para preservar eventual recurso.

## Teses da acusação (e as contra-teses da defesa a antecipar)

**Teses do assistente (acusação):**
- **Ampla admissibilidade da prova de interesse da vítima:** o art. 271 assegura ao assistente propor meios de prova; o indeferimento imotivado cerceia a acusação.
- **Regularidade da cadeia de custódia:** a prova material foi rastreada conforme arts. 158-A a 158-F — afastar a alegação defensiva de quebra.
- **Complementaridade, não redundância:** as testemunhas/diligências do assistente esclarecem pontos **não cobertos** pelo rol do MP — daí a pertinência.
- **Prova do dano para o art. 387, IV:** documentos e laudos que embasam o valor mínimo de reparação são pertinentes e devem ser admitidos.

**Contra-teses da defesa (antecipar e neutralizar):**
- *"O assistente extrapola a subsidiariedade"* → demonstrar que cada requerimento se ancara no **interesse do ofendido** e foi submetido ao MP (art. 272).
- *"Prova redundante/protelatória"* → justificar a **pertinência específica** de cada meio (que ponto novo esclarece).
- *"Quebra da cadeia de custódia"* → apontar o **rastreamento documentado** (lacres, registros, arts. 158-B/158-D) e a ausência de prejuízo concreto.
- *"Documento juntado fora do prazo do júri (art. 479)"* → só se sustenta se a juntada foi mesmo intempestiva; **antecipe a juntada** para não dar munição.

## Súmulas e dispositivos relevantes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 210/STF** — o assistente do MP pode **recorrer**, inclusive extraordinariamente, no processo penal, nos casos dos arts. 584, §1º, e 598 do CPP (legitimidade recursal **supletiva** do assistente). *(Notória; ainda assim, confirmar redação e alcance antes de citar.)*
- **Súmula 448/STF** — o prazo para o assistente, **não habilitado**, apelar supletivamente conta-se do término do prazo do MP. *(Confirmar via gate.)*
- **Art. 598 e art. 584, §1º, CPP** — hipóteses de recurso do assistente (base das súmulas acima).
- **Art. 271, art. 272, art. 273 CPP** — poderes, oitiva do MP e irrecorribilidade da decisão sobre admissão.
- Para **qualquer precedente específico** (número de HC/REsp/RE, informativo, tema repetitivo) sobre **poderes probatórios do assistente**, **admissibilidade de prova requerida pelo assistente**, **legitimidade para diligências** ou **cadeia de custódia** → marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` **antes** de levar à peça. **Melhor faltar precedente do que citar julgado inexistente.**

## Modelo de petição — requerimento de provas pelo assistente

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [Nª] VARA CRIMINAL DA COMARCA
DE [COMARCA]


Autos nº [Nº DO PROCESSO]


[NOME DO OFENDIDO/SUCESSOR], já habilitado como ASSISTENTE DE ACUSAÇÃO nos autos
em epígrafe, por seu advogado que esta subscreve (procuração anexa), vem,
respeitosamente, à presença de Vossa Excelência, com fundamento nos arts. 268 e
271 do Código de Processo Penal, REQUERER A PRODUÇÃO DE PROVAS de interesse do
ofendido, pelas razões a seguir.


I — DO INTERESSE DO OFENDIDO E DA SUBSIDIARIEDADE

O assistente atua ao lado do Ministério Público, no legítimo interesse da vítima
(art. 268 do CPP), sendo-lhe assegurado propor meios de prova (art. 271, I). Os
requerimentos abaixo são deduzidos de forma subsidiária, para esclarecer pontos
[relevantes à materialidade/autoria/qualificadora/extensão do dano] ainda não
integralmente cobertos, submetendo-se à oitiva do Ministério Público (art. 272)
e à apreciação de Vossa Excelência.


II — DA PROVA TESTEMUNHAL (art. 271, I, c/c art. [401/406] do CPP)

Requer a oitiva das seguintes testemunhas, cuja pertinência se justifica por
[o que cada uma esclarece], observado o número legal do procedimento:
1. [NOME], [qualificação/endereço] — esclarecerá [ponto];
2. [NOME], [qualificação/endereço] — esclarecerá [ponto].


III — DA PROVA PERICIAL E DILIGÊNCIAS (arts. 158-184 do CPP)

Requer [a realização/complementação do exame de corpo de delito / perícia em
(objeto) / diligência de (reconstituição/reconhecimento)], por [fundamento].
Requer, ainda, a formulação dos seguintes quesitos ao perito (art. 159, §3º):
a) [quesito]; b) [quesito].


IV — DA PROVA DOCUMENTAL (arts. 231-238 do CPP)

Junta os documentos anexos ([descrever]), que comprovam [materialidade/dano],
pertinentes inclusive à fixação do valor mínimo de reparação (art. 387, IV, CPP).
[No júri: requerer a juntada com observância do prazo do art. 479 — antecedência
mínima de 3 dias úteis e ciência da parte contrária.]


V — DOS PEDIDOS

Requer:
a) a admissão e produção das provas acima, ouvido o Ministério Público (art. 272);
b) a intimação das testemunhas arroladas;
c) a realização/complementação da perícia com os quesitos formulados;
d) a juntada dos documentos anexos;
e) a preservação da regularidade da cadeia de custódia da prova material
   (arts. 158-A a 158-F do CPP).

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DO PROCESSO], [NOME DO OFENDIDO/SUCESSOR], número da vara, testemunhas e pontos, objeto de perícia, quesitos, documentos, [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração com poderes específicos.
2. Prova da legitimidade (qualidade de ofendido / parentesco CADI — art. 268 c/c art. 31 CPP).
3. Documentos que comprovem os fatos e o **dano** (para o art. 387, IV, CPP).
4. Eventuais laudos, notas e registros que instruam a perícia requerida.
5. Rol de testemunhas com qualificação e endereço para intimação.

## Roteiro de tese (assistente / acusação)

1. **Habilitar cedo** (arts. 268-269) — quanto antes, mais prova se pode influenciar (recebe-se o processo no estado em que está).
2. **Fundamentar o interesse do ofendido** em cada requerimento (subsidiariedade do art. 271; oitiva do MP no art. 272).
3. **Arrolar com pertinência** — complementar o rol do MP, sem redundância; respeitar o número legal do procedimento.
4. **Perícia e quesitos** — requerer/complementar exame de corpo de delito e **formular quesitos** (art. 159, §3º).
5. **Juntar documentos** com atenção ao **art. 479** no júri (3 dias úteis).
6. **Blindar a cadeia de custódia** (arts. 158-A a 158-F) — antecipar a impugnação defensiva.
7. **Produzir prova do dano** para o valor mínimo de reparação (art. 387, IV).
8. **Registrar requerimento e decisão** — preservar o recurso supletivo (Súmulas 210 e 448/STF; arts. 584, §1º, e 598).

## Erros comuns e checklist final

**Anti-padrões (evitar):**
- Agir como titular da ação penal — o assistente **postula subsidiariamente**, não substitui o MP.
- Deixar de **fundamentar o interesse do ofendido** e a pertinência de cada meio de prova (convite ao indeferimento).
- Arrolar testemunhas **redundantes** com o rol do MP, sem apontar o ponto novo.
- Requerer, **autonomamente**, medidas cautelares invasivas privativas do MP.
- Esquecer de submeter o requerimento à **oitiva do MP** (art. 272).
- Juntar documento no **júri fora do prazo do art. 479** (3 dias úteis) — nulidade.
- Não **registrar** requerimento e decisão — perde-se a base do recurso supletivo.
- Citar precedente de memória sobre poderes do assistente — **sempre** pelo gate `verificacao-citacoes`.

**Checklist:**
- [ ] Habilitação regular (procuração + prova da legitimidade, arts. 268-269)?
- [ ] Cada meio de prova ancorado no **interesse do ofendido** e na **pertinência** específica?
- [ ] Rol dentro do **número legal** do procedimento e **complementar** ao do MP?
- [ ] Perícia/exame requeridos e **quesitos** formulados (art. 159, §3º)?
- [ ] Documentos juntados com atenção ao **art. 479** (se júri)?
- [ ] **Cadeia de custódia** (arts. 158-A a 158-F) considerada?
- [ ] Requerimento submetido à **oitiva do MP** (art. 272)?
- [ ] Prova do **dano** para o art. 387, IV, CPP?
- [ ] Requerimento e decisão **consignados** (para recurso supletivo — Súmulas 210/448 STF)?
- [ ] Súmulas e julgados conferidos via `jurisprudencia-stj-stf` / gate `verificacao-citacoes`?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação; a responsabilidade pela peça e pelos requerimentos é sempre do **advogado** (CED, art. 2º). Não substitui o juízo profissional nem a leitura do caso concreto.
- **Ética por polo — advocacia:** a atuação do assistente rege-se pelo **Estatuto da OAB, pelo Código de Ética e Disciplina** e pelo **Provimento 205/2021** (publicidade). Verifique **conflito de interesses** (art. 17 EAOAB) na triagem. *(Se a instituição for Ministério Público, aplicam-se as normas do CNMP; se Defensoria, a LC 80/94 — mas esta skill pressupõe atuação como assistente/advogado do ofendido.)*
- **Polo acusatório:** confirmado que a instituição atua na **acusação** antes de usar esta skill. Em caso de dúvida, checar `company.md`.
- **Citações:** nenhuma súmula, tese ou acórdão vai à peça sem passar por `verificacao-citacoes`; na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
