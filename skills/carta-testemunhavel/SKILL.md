---
name: carta-testemunhavel
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de CARTA TESTEMUNHÁVEL no processo
  penal brasileiro — recurso residual que destranca RESE ou agravo em execução denegados ou obstados
  na origem (CPP, arts. 639 a 646). Gatilhos: carta testemunhável, testemunhante, testemunhado,
  arts. 639 a 646 do CPP, art. 640 CPP, prazo de 48 horas, requerimento ao escrivão, secretário do….
  Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-carta-testemunhavel"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["carta-testemunhavel", "carta testemunhavel"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Carta Testemunhável

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

Esta skill orienta a construção da **Carta Testemunhável** (CPP, arts. 639 a 646) — o recurso **residual** que destranca o recurso **denegado ou obstado** na origem, tipicamente o **RESE** e o **agravo em execução**. Recorrência baixa na prática (autos eletrônicos raramente "seguram" recurso), mas o **prazo atípico de 48 horas dirigido ao escrivão** faz dela um clássico de OAB e concursos — e uma armadilha real quando aparece.

## Instituto e base legal

- **Previsão:** arts. **639 a 646 do CPP**, no título dos recursos. A doutrina majoritária a trata como **recurso** (residual/subsidiário); parte minoritária fala em sucedâneo recursal. Na peça, trate como recurso.
- **Função:** garantir que o juízo **ad quem** — e não o **a quo** — dê a última palavra sobre a admissibilidade do recurso denegado. O juiz de origem não pode, ao denegar, usurpar o juízo definitivo de admissibilidade do tribunal.
- **Nomenclatura própria:** quem requer a carta é o **testemunhante**; a parte contrária é o **testemunhado**. Use esses nomes nas razões.
- **Caráter residual:** só cabe quando **não houver recurso próprio** contra a denegação. É o critério que resolve todas as pegadinhas de cabimento (tabela abaixo).
- **Sem efeito suspensivo:** art. **646 CPP** — a carta não suspende o processo nem a decisão recorrida.
- **Polo:** embora o uso típico seja da defesa, **qualquer recorrente** com recurso denegado pode ser testemunhante — inclusive MP e assistente de acusação (nos recursos em que tenham legitimidade).

## Cabimento — art. 639 CPP

| Inciso | Hipótese | Exemplo prático |
|---|---|---|
| **I** | Decisão que **denega** o recurso | Juiz não recebe o RESE por entender incabível ou intempestivo |
| **II** | Decisão que, **embora admitindo** o recurso, **obsta sua expedição e seguimento** ao juízo ad quem | RESE recebido, mas o juízo/cartório não forma o traslado nem remete ao tribunal |

### Qual remédio contra qual denegação (não confunda)

| Recurso denegado na origem | Remédio correto | Fonte |
|---|---|---|
| **Apelação** denegada ou julgada deserta | **RESE** (art. 581, XV, CPP) | skill `rese` |
| **RESE** denegado ou obstado | **Carta testemunhável** | esta skill |
| **Agravo em execução** denegado ou obstado | **Carta testemunhável** (o agravo segue o rito do RESE) | esta skill + skill `agravo-em-execucao` |
| **REsp/RE** inadmitidos na origem | **Agravo em REsp/RE** (art. 1.042 CPC) | skill `agravo-em-resp-re` |
| **Ordem de HC** denegada por tribunal | **RHC/REsp/RE** — não é carta | — |

> **Regra de ouro:** a carta testemunhável é **subsidiária**. Antes de usá-la, verifique se a denegação tem remédio específico. O mapa completo de cabimento recursal está na best-practice `recurso-criminal`.

## Prazo e processamento

| Etapa | Prazo | Fundamento |
|---|---|---|
| Requerimento da carta **ao escrivão** (ou secretário do tribunal) | **48 horas** da intimação da decisão denegatória | art. 640 CPP |
| Recibo da petição pelo escrivão | imediato | art. 641 CPP |
| Entrega da carta (traslado conferido e concertado) | **5 dias** (recurso em sentido estrito) | art. 641 CPP |
| Razões do testemunhante (e, após, do testemunhado) | **2 dias** da extração do traslado | art. 643 c/c art. 588 CPP |

- **48 horas, não 5 dias.** O art. 640 fala em "48 horas seguintes ao despacho"; a leitura corrente conta o prazo **da intimação** da decisão denegatória. Há divergência doutrinária sobre a contagem exata (em horas corridas ou convertida em dias, art. 798 CPP) — por prudência, **protocole imediatamente** e registre o prazo com o agente `lembrete-prazo`. Defensoria Pública: **prazo em dobro** para todas as manifestações (LC 80/94, arts. 44, I, 89, I e 128, I); como a aplicação da dobra a prazo contado **em horas** não é pacífica, confirme via `lei-e-sumula`/`jurisprudencia-stj-stf` antes de contar com ela [NÃO VERIFICADO] — e, de novo, protocole cedo.
- **Dirigida ao ESCRIVÃO** do juízo (denegação em 1º grau) **ou ao secretário do tribunal** (denegação em tribunal) — **nunca ao juiz**. É a pegadinha número 1 do instituto.
- **Recibo (art. 641):** exija-o expressamente na petição — é a **prova da tempestividade** das 48 horas.
- **Recusa do escrivão (art. 642):** se o escrivão negar o recibo ou não entregar o instrumento, cabe **representação** ao juiz ou ao presidente do tribunal, que imporá a sanção (suspensão de 10 a 30 dias) e **mandará extrair a carta**.
- **Rito (arts. 643 e 645):** extraído e autuado o instrumento, segue-se **o processo do recurso denegado** — na prática, o rito do RESE, tanto na origem quanto na instância superior. O art. 643 remete **expressamente aos arts. 588 a 592, "no que for aplicável"** — o que inclui o **juízo de retratação** (art. 589 CPP), admitido pela doutrina majoritária também na carta: peça-o.
- **Julgamento (art. 644):** o tribunal, ao prover a carta, **manda processar o recurso** denegado — **ou**, se ela estiver **suficientemente instruída, julga desde logo o mérito** do próprio recurso. Esse dispositivo define a estratégia da peça: instrua a carta como se fosse o recurso inteiro.
- **Resquício histórico:** o art. 641 ainda menciona "60 dias, no caso de recurso extraordinário" — hoje REsp/RE inadmitidos têm agravo próprio (art. 1.042 CPC); trate a menção como histórica e, em caso de dúvida sobre o texto vigente, confira via `lei-e-sumula`.
- **Precedentes atuais** sobre contagem do prazo, fungibilidade ou cabimento residual: pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até a confirmação — nunca cite número de julgado de memória.

## Estrutura da peça — PEÇA BIPARTIDA

(1) **Requerimento de extração da carta**, dirigido ao **escrivão** (ou secretário do tribunal); (2) **razões**, endereçadas ao **tribunal** competente para julgar o recurso denegado. Uma folha para cada parte, como no RESE.

### PRIMEIRA PARTE — Requerimento ao escrivão

**Endereçamento:** `Ao(À) Senhor(a) Escrivão(ã) do Juízo da [N]ª Vara Criminal da Comarca de [...]` — ou `Ao(À) Senhor(a) Secretário(a) do Tribunal [...]`, se a denegação ocorreu em tribunal. **Não** é "Excelentíssimo Senhor Doutor Juiz".

**Preâmbulo:**
- Nome do cliente + `já qualificado nos autos da ação penal que lhe move o Ministério Público` (ou `nos autos da execução penal nº [...]`, se a carta destranca agravo em execução) — fase recursal, não requalificar.
- `por intermédio do(a) advogado(a) que ao final subscreve (procuração já nos autos)`
- `vem, respeitosamente, à presença de Vossa Senhoria,` (escrivão é tratado por **Vossa Senhoria**, não "Vossa Excelência")
- **Tempestividade:** `no prazo de 48 (quarenta e oito) horas, conforme art. 640 do Código de Processo Penal (CPP),`
- Verbo **REQUERER** (o art. 640 diz "será **requerida** ao escrivão") + nome em caixa alta: `requerer a extração de CARTA TESTEMUNHÁVEL`
- Fundamento: `forte no art. 639, [I ou II], do CPP`, contra a decisão que denegou o [RESE / agravo em execução] interposto no evento [...].

**Indicação das peças para traslado (art. 640, parte final — ônus do testemunhante):** em parágrafo próprio, indique ao menos —
1. decisão originalmente atacada pelo recurso denegado;
2. certidão de intimação dessa decisão;
3. petição de interposição e razões do recurso denegado;
4. **decisão denegatória** e respectiva certidão de intimação;
5. procuração e demais peças úteis (denúncia, atos essenciais à compreensão).

**Requerimentos finais da primeira parte:**
- entrega do **recibo** da petição (art. 641);
- extração, conferência e **entrega da carta em 5 dias** (art. 641);
- processamento na forma do recurso denegado (art. 643), **com a retratação** do juízo quanto à denegação (art. 589 CPP) ou, mantida a decisão, remessa ao tribunal;
- juntada das razões anexas.

**Fechamento:** `Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### SEGUNDA PARTE — Razões (em nova folha)

Cabeçalho: `Razões de Carta Testemunhável`.
- `Testemunhante: [nome do cliente]`
- `Testemunhado: o Ministério Público` (ou o querelante, em ação privada)

Endereçamento ao tribunal **competente para o recurso denegado**: `Egrégio Tribunal de Justiça — Colenda Câmara Criminal` (estadual) ou `Egrégio Tribunal Regional Federal — Colenda Turma Criminal` (federal).

**I — Dos Fatos:** em 2-3 frases: a decisão originária, o recurso interposto (com data e prazo cumprido) e a denegação/obstáculo que motiva a carta.

**II — Do Direito:**
1. **Do Cabimento da carta** — decisão denegatória sem recurso próprio → art. 639, I (ou II), CPP; tempestividade das 48 horas (art. 640).
2. **Do desacerto da denegação** — o coração da peça: demonstre que o recurso denegado **era cabível e tempestivo** (teses abaixo). Arremate: o juízo a quo não pode subtrair do tribunal o juízo definitivo de admissibilidade.
3. **Do mérito do recurso denegado** — reproduza, em síntese fiel, as razões do RESE/agravo trancado (despronúncia, requisitos da progressão etc. — use a skill do recurso de origem). É isso que habilita o tribunal a **julgar desde logo** pelo art. 644.

**III — Dos Pedidos** (conhecimento + provimento, com o subsidiário do art. 644):
```
Diante do exposto, requer:
a) o conhecimento da presente carta testemunhável;
b) o seu provimento, para que se determine o processamento do [RESE / agravo em
   execução] indevidamente denegado, na forma do art. 644 do CPP;
c) subsidiariamente, estando a carta suficientemente instruída, o imediato
   julgamento do mérito do recurso denegado (art. 644, parte final, do CPP),
   para [ex.: despronunciar o réu / conceder a progressão de regime].
```

**Fechamento** padrão.

## Teses típicas do desacerto da denegação

- **Tempestividade do recurso denegado:** erro na contagem (art. 798 CPP — exclui o dia do começo, inclui o do vencimento), intimação inválida ou inexistente, termo inicial equivocado, prazo em dobro da Defensoria (LC 80/94, arts. 44, I, 89, I e 128, I).
- **Cabimento por interpretação extensiva do art. 581** (art. 3º CPP): decisão conceitualmente próxima à hipótese legal, com sucumbência equivalente — desenvolva com a skill `rese`.
- **Fungibilidade (art. 579 CPP):** recurso trocado sem má-fé e dentro do prazo do recurso correto não podia ser denegado.
- **Juízo de admissibilidade usurpado:** a origem examinou o **mérito** do recurso para denegá-lo (ex.: "as razões não convencem") — matéria exclusiva do ad quem.
- **Garantia do duplo grau:** art. 8.2.h da Convenção Americana de Direitos Humanos (Pacto de São José) como reforço argumentativo, sem substituir a tese processual.

## Erros comuns e pegadinhas

- **Endereçar ao juiz.** O requerimento vai **ao escrivão** (ou secretário do tribunal) — art. 640. Errar o destinatário é errar a peça.
- **Tratar o prazo como 5 dias.** São **48 horas** — o prazo mais curto do sistema recursal penal. Não confunda com os 5 dias do RESE/agravo, nem com os 5 dias que o **escrivão** tem para entregar a carta.
- **Escolher o remédio errado:** apelação denegada → RESE (art. 581, XV); HC denegado em 1º grau → RESE (art. 581, X); REsp/RE inadmitidos → agravo do art. 1.042 CPC. Carta testemunhável só no vazio recursal (RESE e agravo em execução denegados).
- **Omitir a indicação das peças para traslado** — ônus do testemunhante (art. 640, parte final); carta mal instruída perde o benefício do julgamento imediato (art. 644) e pode nem ser conhecida.
- **Não pedir o recibo** do art. 641 — sem ele, a prova da tempestividade das 48 horas fica fragilizada.
- **Pedir efeito suspensivo:** a carta **não tem** (art. 646). Havendo risco concreto à liberdade enquanto ela tramita, a via paralela é o **habeas corpus** (skill `habeas-corpus`).
- **Esquecer o pedido subsidiário do art. 644** e/ou não reproduzir o mérito do recurso denegado nas razões — desperdiça a chance de o tribunal decidir desde logo.
- **Preclusão consumativa:** perdidas as 48 horas, a denegação se estabiliza; restará discutir a matéria, quando possível, por HC ou nas vias extraordinárias — cenário muito pior.
- **Não pedir a retratação** (art. 589 c/c art. 643): como a carta segue o rito do recurso denegado, o pedido de retratação da denegação é de praxe.

## Checklist final

- [ ] Denegação **sem recurso próprio** (RESE ou agravo em execução denegados/obstados)?
- [ ] Peça **bipartida** (requerimento ao **escrivão** + razões ao **tribunal**, folhas separadas)?
- [ ] Tempestividade: **48 horas** (art. 640) da intimação da denegação — e recibo requerido (art. 641)?
- [ ] Verbo **REQUERER** a extração; nome em caixa alta; `forte no art. 639, [I/II], do CPP`?
- [ ] **Peças para traslado indicadas** (decisão atacada, intimações, interposição/razões do recurso denegado, decisão denegatória, procuração)?
- [ ] Pedido de **retratação** (art. 589 c/c art. 643)?
- [ ] Razões: **Testemunhante/Testemunhado**; endereçamento ao tribunal do recurso denegado?
- [ ] Direito com **cabimento da carta + desacerto da denegação + mérito do recurso denegado**?
- [ ] Pedidos: conhecimento + provimento (processamento) + **subsidiário do art. 644** (julgamento imediato)?
- [ ] Nenhum pedido de efeito suspensivo (art. 646)?

## Apoie-se em

- **skill `rese`** — o recurso denegado mais comum na origem: cabimento (art. 581), interpretação extensiva e o mérito a reproduzir nas razões da carta.
- **skill `agravo-em-execucao`** — o outro recurso destrancável pela carta; segue o rito do RESE (Súmula 700 STF para o prazo do agravo).
- **best-practice `recurso-criminal`** — mapa geral de cabimento recursal que esta skill complementa com o remédio contra a denegação.
- **agente `lembrete-prazo`** — registre as 48 horas no ato da intimação da denegação; é o prazo mais traiçoeiro do CPP.
- **agente `verificador-citacoes`** — **obrigatório antes de finalizar**: todo dispositivo, súmula e precedente citado na peça passa pelo Citation Gate; nada de julgado de memória.
- **skill `redacao-persuasiva-criminal`** — **sempre**: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
