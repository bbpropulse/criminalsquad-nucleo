---
name: assistente-habilitacao-juri
description: >-
  Use ao habilitar o assistente de acusação para o PLENÁRIO do Tribunal do Júri (prazo do art. 430
  CPP — requerimento até 5 dias antes da sessão), organizar sua atuação nas duas fases do rito,
  requerer desaforamento (art. 427 CPP) e posicionar a acusação privada no plenário — ordem da
  palavra e divisão de tempo com o MP (arts. 476, §1º, e 477 CPP). Gatilhos: habilitação do
  assistente no júri, prazo do art. 430, assistente de… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, juri, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-habilitacao-juri"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-habilitacao-juri", "assistente habilitacao", "habilitacao juri"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Habilitação e Atuação do Assistente de Acusação no Tribunal do Júri (CPP, arts. 268-273, 427, 430, 476-477)

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

Esta skill orienta a **habilitação tempestiva do assistente de acusação para o plenário do júri** e a **organização de sua atuação nas duas fases** do procedimento bifásico — o *judicium accusationis* (instrução preliminar até a pronúncia) e o *judicium causae* (preparação e plenário). Cobre ainda o **desaforamento requerido pela vítima/assistente** (art. 427) e o **posicionamento da acusação privada em plenário** ao lado do Ministério Público (ordem da palavra e divisão de tempo — arts. 476, §1º, e 477).

> **Assistente é do POLO ACUSATÓRIO.** Esta skill serve a quem atua **ao lado da acusação** — o ofendido, seu representante legal ou os sucessores (art. 268 CPP) habilitados na ação penal pública. O roteador deve conferir o **polo do usuário** antes de sugeri-la: para a **defesa** no plenário, use `juri-plenario-debates` e `juri-quesitacao`.

> **Lição central:** o **prazo do art. 430 é a armadilha nº 1**. O requerimento de habilitação para o plenário deve ser deferido **até 5 dias antes da data da sessão de julgamento**; perdido esse marco, o assistente **não é admitido a atuar naquela sessão** (embora possa aguardar a seguinte). Habilite-se **cedo**, de preferência ainda na 1ª fase — a habilitação, uma vez deferida, projeta-se para todo o processo.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 268-273, 427-428, 430 e 476-477 do CPP na fonte oficial antes de peticionar — a sistemática do júri foi reescrita pela **Lei 11.689/2008** e citar o rito **anterior** a ela é erro grave. Toda súmula, tema ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) antes do uso. Na dúvida, **omitir vence inventar**.

## Base legal

- **Arts. 268 a 273 do CPP** — do assistente: quem pode ser (art. 268), quem NÃO pode (art. 270), admissão a qualquer tempo enquanto não transitada em julgado e recebimento no estado em que o processo se encontra (art. 269), oitiva do MP antes da admissão (art. 272) e **irrecorribilidade da decisão** que admite ou não o assistente (art. 273).
- **Art. 271 do CPP** — os **poderes** do assistente: propor meios de prova, requerer perguntas às testemunhas, aditar o libelo (revogado na parte do libelo) e os articulados, participar do debate oral e arrazoar os recursos.
- **Art. 430 do CPP** — habilitação para o **plenário**: o assistente só é admitido se **requerido até 5 dias antes** da data da sessão de julgamento.
- **Arts. 427 e 428 do CPP** — **desaforamento** e reaforamento; o assistente tem **legitimidade** para requerê-lo.
- **Arts. 476, §1º, e 477 do CPP** — **ordem da palavra** em plenário (o assistente fala **após** o MP) e a **divisão do tempo** da acusação (1h30, ou 2h30 se mais de um réu; 1h de réplica).
- **Art. 598 do CPP** — legitimidade **recursal supletiva** do assistente (apelação quando o MP não recorre), com prazo próprio.

## As duas fases — onde e quando o assistente entra

O júri é procedimento **bifásico**. A habilitação e a atuação do assistente têm marcos distintos em cada fase:

```
1ª FASE — judicium accusationis (instrução preliminar → pronúncia)
  • Habilitação possível a QUALQUER tempo (art. 269), recebendo o processo
    no estado em que se encontra.
  • Poderes do art. 271: propor prova, inquirir testemunhas, arrazoar.
  • Alegações finais (memoriais) ao lado do MP.
  • Legitimidade para recorrer da IMPRONÚNCIA / ABSOLVIÇÃO SUMÁRIA
    (RESE do art. 581, IV) e supletivamente (art. 598) — conferir prazos.

2ª FASE — judicium causae (preparação do plenário → sessão)
  • Prazo-CHAVE do art. 430: requerer/estar habilitado ATÉ 5 DIAS antes
    da sessão, sob pena de não atuar naquela sessão.
  • Em plenário: fala APÓS o MP (art. 476, §1º); tempo dividido (art. 477).
  • Legitimidade para o DESAFORAMENTO (art. 427).
  • Apelação da decisão do júri (art. 593, III) — supletiva (art. 598).
```

> **Regra de ouro:** habilitar-se **na 1ª fase** resolve, de antemão, o prazo do art. 430 — a admissão já deferida acompanha o processo. Só se corre risco de perder o plenário quando a vítima só procura o advogado às vésperas da sessão.

## Quem pode (e quem não pode) ser assistente

- **Pode (art. 268):** o **ofendido** ou seu representante legal e, na falta, o **cônjuge, ascendente, descendente ou irmão** (a ordem do art. 31). No homicídio consumado, os **sucessores** habilitam-se em nome da vítima falecida.
- **Não pode (art. 270):** o **corréu** no mesmo processo.
- **Procedimento de admissão:** requerimento com **procuração** (poderes específicos) → **oitiva do MP** (art. 272) → decisão do juiz. A decisão que **admite ou rejeita é irrecorrível** (art. 273) — mas cabe **mandado de segurança** ou **correição** conforme o caso (tese; conferir cabimento atual via `jurisprudencia-stj-stf`).

## Desaforamento requerido pelo assistente (arts. 427-428)

O **desaforamento** desloca o julgamento para outra comarca. A **vítima/assistente tem legitimidade autônoma** para requerê-lo (o rol do art. 427 inclui o querelante e o assistente, ao lado do MP, do acusado e por representação do juiz).

**Hipóteses (art. 427, caput):**
1. **Interesse da ordem pública**;
2. **Dúvida sobre a imparcialidade do júri**;
3. **Segurança pessoal do acusado**.

**Hipótese autônoma (art. 428):** **excesso de serviço** — se o julgamento não puder realizar-se no prazo de **6 meses** contado do trânsito em julgado da pronúncia, comprovado o excesso e ouvido o juiz.

**Requisitos e cautelas:**
- Competência para julgar o pedido: **TJ/TRF** (2º grau), ouvido o **PGJ** e o juiz-presidente.
- **Fato superveniente:** a dúvida sobre a imparcialidade deve apoiar-se em **elementos concretos** (clamor público comprovado, ameaças, cobertura local massiva), não em mera alegação.
- **Reaforamento:** cessada a causa, pode-se pleitear o retorno à comarca de origem.
- **Súmula 712/STF** [conferir vigência/redação via `jurisprudencia-stj-stf`]: é **nulo o julgamento do desaforamento sem prévia intimação da defesa** — observe o contraditório mesmo quando o pedido parte da acusação.

## Ordem da palavra e divisão de tempo em plenário (arts. 476-477)

O assistente **fala ao lado do MP, mas depois dele**, e **partilha o tempo** da acusação — não o soma.

- **Ordem (art. 476):** encerrada a instrução em plenário, a palavra é dada primeiro à **acusação** — o **MP** e, **após**, o **assistente** (art. 476, §1º) — e depois à **defesa**. Havendo mais de um acusador, ajusta-se a ordem/tempo entre eles.
- **Tempo (art. 477):** a acusação dispõe de **1h30** (ou **2h30** se houver **mais de um réu**), e **1h de réplica** (dobrada para 2h se pluralidade de réus). Esse tempo é **da acusação como um todo** — MP e assistente **dividem** o mesmo montante; devem **combinar previamente** a repartição, sob a coordenação do juiz-presidente.
- **Réplica/tréplica:** a **réplica é faculdade da acusação**; usada por MP e/ou assistente, **abre à defesa a tréplica** (mesmo tempo). Estratégia: só replicar se necessário — a tréplica é a **última palavra** e vai aos jurados por fim.

> **Coordenação com o MP é dever prático.** O assistente **não tem tempo próprio somado**; atua **dentro** do tempo da acusação. Alinhe **antes da sessão** com o Promotor: quem sustenta o quê, quantos minutos cada um, se haverá réplica e quem a fará. Falha de coordenação enfraquece a acusação e pode gerar atrito registrado em ata.

## Poderes e atos do assistente (art. 271)

| Ato | Fundamento | Observação |
|---|---|---|
| Propor meios de prova | art. 271 | Sujeito à admissão do juiz, ouvido o MP |
| Requerer perguntas às testemunhas | art. 271 | Após as partes principais |
| Participar do debate oral | arts. 271, 476, §1º | Em plenário, após o MP, no tempo da acusação |
| Arrazoar recursos | arts. 271, 598 | Inclui recurso supletivo |
| Requerer desaforamento | art. 427 | Legitimidade autônoma |
| Apelar (supletivo) | art. 598 | Quando o MP não recorre; prazo próprio |

## Legitimidade recursal do assistente

- **Recurso supletivo (art. 598):** quando o **MP não recorre**, o assistente pode **apelar** da decisão — inclusive da **absolvição pelo júri** — em prazo próprio (na prática, contado da ciência; conferir a contagem atual — **súmula sobre prazo do assistente não intimado** [NÃO VERIFICADO] via `jurisprudencia-stj-stf`).
- **1ª fase:** legitimidade para **RESE** (art. 581, IV) contra a **impronúncia** e a **absolvição sumária**, quando o MP se conforma.
- **Cautela:** o interesse recursal do assistente costuma ser lido de forma **restrita** pela jurisprudência (foco na busca da condenação/aplicação da lei penal, não em mero interesse indenizatório). Fundamente o **interesse jurídico** concreto. [NÃO VERIFICADO — conferir os limites atuais no STJ/STF via `jurisprudencia-stj-stf`.]

## Modelo de petição — habilitação para o plenário (art. 430)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ PRESIDENTE DO TRIBUNAL DO JÚRI DA COMARCA DE
[COMARCA]


Autos nº [Nº DO PROCESSO]
Sessão de julgamento designada para: [DATA DA SESSÃO]


[NOME DO OFENDIDO/SUCESSOR], já qualificado(a), na condição de [ofendido /
representante legal / sucessor (art. 268 c/c art. 31 do CPP)] da vítima
[NOME DA VÍTIMA], por seu advogado que esta subscreve (procuração anexa, com
poderes específicos), vem, respeitosamente, à presença de Vossa Excelência,
com fundamento nos arts. 268 a 271 e, especialmente, no art. 430 do Código de
Processo Penal, requerer sua

HABILITAÇÃO COMO ASSISTENTE DE ACUSAÇÃO

para atuar na sessão plenária de julgamento, pelas razões a seguir.


I — DA LEGITIMIDADE E DA TEMPESTIVIDADE

O(A) requerente é [ofendido / sucessor da vítima falecida], legitimado(a) pelo
art. 268 (c/c art. 31) do CPP a intervir como assistente do Ministério Público.

O presente requerimento é TEMPESTIVO: formulado com [Nº] dias de antecedência
da sessão designada para [DATA DA SESSÃO], observado o prazo do art. 430 do CPP
(até 5 dias antes do julgamento).


II — DO PEDIDO

Requer, ouvido o Ministério Público (art. 272 do CPP):

a) o DEFERIMENTO da habilitação do(a) requerente como ASSISTENTE DE ACUSAÇÃO,
   recebendo o processo no estado em que se encontra (art. 269 do CPP);
b) a intimação para os atos da sessão plenária, com registro em ata da ordem da
   palavra (art. 476, §1º) e da divisão do tempo da acusação com o Ministério
   Público (art. 477 do CPP), a ser previamente ajustada;
c) a juntada da procuração e dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DO PROCESSO], [DATA DA SESSÃO], [NOME DO OFENDIDO/SUCESSOR], [NOME DA VÍTIMA], [Nº] de dias de antecedência, [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. **Procuração** com poderes específicos para atuar como assistente de acusação.
2. **Documento de identidade** e comprovação da **condição de ofendido/sucessor** (ex.: certidão de óbito da vítima + prova do vínculo — casamento, filiação).
3. Eventual **rol de testemunhas** ou requerimento de prova, se ainda cabível na fase.
4. Petição de eventual **desaforamento** em apartado, se for o caso.

## Roteiro de atuação (assistente de acusação)

1. **Habilitar cedo** — de preferência na 1ª fase; se só na 2ª, **respeitar o art. 430** (até 5 dias antes da sessão). Conferir a **data designada** e contar o prazo com margem.
2. **Comprovar a legitimidade** (art. 268) e anexar **procuração com poderes específicos**.
3. **Coordenar com o MP** a estratégia acusatória: teses, repartição do **tempo** (art. 477), quem sustenta o quê, réplica.
4. **Avaliar o desaforamento** (arts. 427-428) se houver risco à imparcialidade, à ordem pública, à segurança do réu ou excesso de serviço (6 meses) — com **elementos concretos** e observando o contraditório (Súmula 712/STF).
5. **Em plenário:** falar **após o MP** (art. 476, §1º), dentro do tempo combinado; usar a **réplica** só se necessário (ela abre a tréplica à defesa).
6. **Fiscalizar a quesitação** ao lado do MP — congruência com a pronúncia e correção da ordem (art. 483) — sob a ótica acusatória (ver `juri-quesitacao` para a mecânica dos quesitos).
7. **Preservar o recurso:** se o resultado desfavorecer a acusação e o **MP não recorrer**, avaliar a **apelação supletiva** (art. 598) no prazo próprio.

## Erros comuns / anti-padrões

- **Perder o prazo do art. 430** (requerer a menos de 5 dias da sessão) — o assistente fica de fora daquela sessão.
- **Procuração sem poderes específicos** ou sem comprovação da condição de sucessor — indeferimento da habilitação.
- **Somar tempo** ao do MP — o assistente **divide** o tempo da acusação (art. 477), não o acresce; falta de acordo prévio gera atrito e prejuízo.
- **Falar antes do MP** — a ordem é MP e **depois** o assistente (art. 476, §1º).
- **Requerer desaforamento sem contraditório** — nulidade (Súmula 712/STF); e sem **elementos concretos** de parcialidade.
- **Confundir as fases** — pleitear em plenário ato próprio da 1ª fase (ou vice-versa).
- **Citar o rito anterior à Lei 11.689/2008** (ex.: libelo, protesto por novo júri) — institutos **revogados**.
- **Citar precedente de memória** — todo número de HC/REsp/RE, tema ou súmula passa por `jurisprudencia-stj-stf`. Melhor faltar precedente do que citar julgado inexistente.

## Checklist final

- [ ] **Legitimidade** do requerente comprovada (art. 268 c/c art. 31) — ofendido/representante/sucessor?
- [ ] **Procuração** com poderes específicos anexada?
- [ ] **Prazo do art. 430** observado (habilitação **até 5 dias antes** da sessão) — data conferida?
- [ ] **Oitiva do MP** (art. 272) prevista no pedido?
- [ ] **Coordenação com o MP** ajustada (tempo do art. 477, ordem do art. 476, §1º, réplica)?
- [ ] **Desaforamento** avaliado (arts. 427-428) com elementos concretos e **contraditório** (Súmula 712/STF)?
- [ ] **Recurso supletivo** (art. 598) mapeado, com o prazo próprio, para o caso de o MP não recorrer?
- [ ] **Vigência** dos arts. 268-273, 427-428, 430, 476-477 conferida (Lei 11.689/2008) e **citações verificadas** via `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável realizada antes de protocolar?

## Lembretes finais

- **Prazo do art. 430 é fatal para a sessão** — habilite-se cedo, idealmente na 1ª fase.
- **Assistente é acusação** — atua **após** o MP (art. 476, §1º) e **divide** seu tempo (art. 477); coordenação prévia é dever prático.
- **Desaforamento** (arts. 427-428): legitimidade autônoma da vítima, mas **contraditório obrigatório** (Súmula 712/STF).
- **Recurso supletivo** (art. 598) só quando o MP não recorre — vigie o prazo.
- **Rito atual = Lei 11.689/2008** — nada de libelo, protesto por novo júri ou quesitação pré-2008.
- **Citações e súmulas** conferidas via `jurisprudencia-stj-stf` antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — apoio à preparação, não substitui o juízo do advogado responsável nem a leitura do processo concreto. A atuação como assistente de acusação observa a **ética da advocacia** (Estatuto da OAB, Código de Ética e Disciplina e o **Provimento 205/2021** do CFOAB sobre publicidade/atuação), o **sigilo** e a **LGPD** quanto aos dados da vítima e das partes. Toda referência normativa, súmula ou precedente passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso — há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
