---
name: embargos-prequestionamento
description: >-
  Use ao elaborar, redigir, estruturar ou revisar EMBARGOS DE DECLARAÇÃO COM FINS DE
  PREQUESTIONAMENTO no processo penal — os EDs opostos contra acórdão como etapa obrigatória de
  preparação do Recurso Especial (REsp) e do Recurso Extraordinário (RE), provocando pronunciamento
  expresso do tribunal sobre cada dispositivo de lei federal ou da Constituição que será invocado
  nas instâncias superiores. Gatilhos: prequestionamento… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-embargos-prequestionamento"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["embargos-prequestionamento", "embargos prequestionamento"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Embargos de Declaração com Fins de Prequestionamento

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

Esta skill orienta a construção dos **Embargos de Declaração prequestionadores** — os EDs opostos contra **acórdão** com a finalidade específica de **abrir a via do Recurso Especial (STJ) e do Recurso Extraordinário (STF)**, provocando o pronunciamento expresso do tribunal sobre cada dispositivo de lei federal ou da Constituição que sustentará o recurso às Cortes Superiores.

> **Divisão de trabalho com a skill `embargos-de-declaracao`:** aquela skill cobre a função clássica de **integração** (ambiguidade, obscuridade, contradição, omissão) e toda a **estrutura básica da peça** (petição única, verbo OPOR, preâmbulo, endereçamento). **Não repita aquele conteúdo aqui** — consulte-a para a forma; esta skill trata do que ela não cobre: a **função prequestionadora** dos EDs e a técnica de preparar REsp/RE.

## O instituto e a base legal

**Prequestionamento** é a exigência de que a questão federal (REsp — art. 105, III, CF) ou constitucional (RE — art. 102, III, CF) tenha sido **efetivamente decidida no acórdão recorrido**. Sem pronunciamento do tribunal de origem sobre o dispositivo, o recurso às Cortes Superiores **não é conhecido**. Quando o acórdão silencia sobre tese oportunamente suscitada, o instrumento para provocar esse pronunciamento é o ED — daí a natureza de **etapa obrigatória** antes do REsp/RE sempre que houver omissão.

| Norma | Conteúdo | Papel no prequestionamento |
|---|---|---|
| **Art. 619 CPP** | EDs contra acórdão criminal — prazo de **2 dias** | Veículo processual dos EDs prequestionadores no penal |
| **Súmula 282 STF** | Inadmissível o RE quando a questão federal não foi **ventilada na decisão recorrida** | Regra-mãe: sem decisão sobre o tema, não há RE |
| **Súmula 356 STF** | O **ponto omisso** sobre o qual **não foram opostos EDs** não pode ser objeto de RE | Consequência de NÃO embargar: preclusão da via extraordinária |
| **Súmula 211 STJ** | Inadmissível o REsp quanto à questão que, **a despeito dos EDs**, não foi apreciada pelo tribunal *a quo* | Se o tribunal persiste omisso, o caminho é alegar violação da norma que rege os EDs (ver ficto, abaixo) |
| **Súmula 98 STJ** | EDs com **notório propósito de prequestionamento não têm caráter protelatório** | Escudo contra a multa por embargos protelatórios |
| **Súmula 320 STJ** | Questão ventilada **apenas no voto vencido** não atende ao prequestionamento | Voto vencido não basta — é preciso pronunciamento do órgão julgador |
| **Art. 1.025 CPC** | **Prequestionamento ficto**: consideram-se incluídos no acórdão os elementos suscitados nos EDs, ainda que inadmitidos ou rejeitados, caso o tribunal superior reconheça o vício | Aplicação **subsidiária ao processo penal** (art. 3º do CPP) — confirme o estágio atual da jurisprudência via agente `jurisprudencia-stj-stf` |

## Espécies de prequestionamento

| Espécie | O que é | Situação |
|---|---|---|
| **Explícito** | O acórdão menciona expressamente o dispositivo legal/constitucional | Ideal — sempre buscar |
| **Implícito** | O acórdão decide a tese jurídica, sem citar o número do artigo | Aceito em regra pelo STJ; para o RE, prefira sempre o explícito |
| **Ficto** | A tese foi suscitada nos EDs, o tribunal persistiu omisso e o tribunal superior a considera incluída no acórdão (art. 1.025 CPC) | Depende de o REsp/RE alegar **também** a violação da norma de integração (art. 619 CPP / art. 1.025 CPC) — ver "Erros comuns" |

> **Regra de ouro:** oponha os EDs pedindo pronunciamento **explícito e individualizado** sobre cada dispositivo. O ficto é rede de segurança, não estratégia principal.

## Cabimento e requisitos

| Requisito | Conteúdo |
|---|---|
| **Decisão embargada** | **Acórdão** (TJ, TRF) — é dele que subirão REsp/RE. Atenção: de acórdão de **Turma Recursal** dos Juizados **não cabe REsp** (Súmula 203 do STJ), apenas RE — e lá o prazo dos EDs é de **5 dias** (art. 83, §1º, da Lei 9.099/95) |
| **Vício alegado** | **Omissão** (art. 619 CPP): o acórdão não se pronunciou sobre dispositivo/tese **oportunamente suscitada** (na apelação, nas contrarrazões, na sustentação oral registrada) |
| **Prazo** | **2 dias** (art. 619 CPP) — não confundir com os 5 dias do CPC (ver pegadinhas) |
| **Finalidade declarada** | Integração + **prequestionamento expresso** — declare o propósito e invoque a Súmula 98 do STJ |
| **Preparação** | Cada dispositivo que fundamentará o REsp/RE deve constar dos EDs com pedido de pronunciamento específico |

**Legitimidade:** defesa, Ministério Público e assistente de acusação (nos limites de sua legitimidade recursal). A técnica é a mesma para qualquer polo.

## Estrutura forense da peça

A **forma** (petição única, preâmbulo, verbo OPOR, fechamento) segue integralmente a skill `embargos-de-declaracao`. Abaixo, apenas as **adaptações prequestionadoras**:

```
1. Endereçamento (ao Desembargador/Ministro RELATOR do acórdão embargado)
2. Preâmbulo (verbo OPOR + forte no art. 619 do CPP, c/c art. 1.025 do CPC,
   aplicável subsidiariamente por força do art. 3º do CPP)
3. I — Dos Fatos (síntese: tese suscitada → acórdão omisso → necessidade de integração)
4. II — Da omissão e do prequestionamento (um tópico por dispositivo omitido)
5. III — Do caráter não protelatório (Súmula 98 do STJ)
6. IV — Dos Pedidos (conhecimento + provimento + pronunciamento EXPRESSO sobre cada dispositivo)
7. Fechamento
```

### 1. Endereçamento

Ao **Relator** do acórdão embargado: `Ao Excelentíssimo Senhor Doutor Desembargador Relator da [N]ª Câmara Criminal do Egrégio Tribunal de Justiça do Estado de [...]`. Na Justiça Federal, **Turma** do **TRF**; no STJ/STF (embargando acórdão de lá), **Ministro Relator**. Detalhes na skill `embargos-de-declaracao`.

### 2. Preâmbulo

Siga o modelo da skill `embargos-de-declaracao`, com o fundamento ampliado: `...vem, respeitosamente, no prazo legal de 2 (dois) dias, OPOR EMBARGOS DE DECLARAÇÃO, forte no art. 619 do Código de Processo Penal, c/c o art. 1.025 do Código de Processo Civil, aplicável subsidiariamente por força do art. 3º do CPP, com a finalidade de integração do v. acórdão e de prequestionamento, pelas razões a seguir expostas.`

### 3. II — Da omissão e do prequestionamento (coração da peça)

**Um tópico por dispositivo.** Para cada artigo que sustentará o REsp/RE, o tópico deve demonstrar três elos:

1. **Onde a tese foi suscitada** — indique a peça e a folha exata (`conforme razões de apelação, fls. [...], item [...]`);
2. **A omissão do acórdão** — demonstre que o julgado não enfrentou o dispositivo nem a tese nele fundada;
3. **O pronunciamento que se requer** — formule a pergunta que o tribunal deve responder expressamente.

Exemplo de tópico:

> **Da omissão quanto ao art. 59 do Código Penal** — `Nas razões de apelação (fls. [...]), a defesa sustentou a ilegalidade da exasperação da pena-base fundada em elementos inerentes ao tipo, com expressa invocação do art. 59 do Código Penal. O v. acórdão, contudo, manteve a pena-base sem enfrentar o argumento nem se pronunciar sobre o dispositivo. Requer-se, assim, pronunciamento expresso desta E. Câmara acerca da compatibilidade da fundamentação adotada com o art. 59 do CP, inclusive para fins de prequestionamento.`

**Monte antes a matriz de prequestionamento** (uso interno, orienta a redação e depois o REsp/RE):

| Tese do futuro REsp/RE | Dispositivo | Onde foi suscitada | O que o acórdão omitiu |
|---|---|---|---|
| Ex.: pena-base sem fundamentação idônea | Art. 59 CP | Apelação, fls. X, item Y | Não enfrentou o argumento |
| Ex.: nulidade da prova | Art. 157 CPP / art. 5º, LVI, CF | Apelação, fls. Z | Silêncio total |

> **Dica de triagem:** matéria **federal** (CP, CPP, LEP, leis penais) → prequestiona para o **REsp**; matéria **constitucional** → para o **RE**. A mesma tese pode exigir os dois planos — prequestione ambos os dispositivos, cada um em seu tópico.

### 4. III — Do caráter não protelatório

Tópico curto e obrigatório: declare o notório propósito de prequestionamento e invoque a **Súmula 98 do STJ** para afastar multa e a pecha de protelação.

### 5. IV — Dos Pedidos

`Diante do exposto, requer sejam conhecidos e providos os presentes Embargos de Declaração, para que, sanadas as omissões apontadas, este E. Tribunal se pronuncie expressamente sobre [art. X], [art. Y] e [art. Z], inclusive para fins de prequestionamento, nos termos do art. 619 do CPP e do art. 1.025 do CPC; e, ainda que rejeitados os embargos, que se considerem prequestionadas as matérias suscitadas, na forma do art. 1.025 do CPC.`

Sempre **conhecimento + provimento**; o pedido subsidiário do art. 1.025 blinda a via ficta.

## Teses típicas da prática

- **Dosimetria:** pena-base exasperada sem fundamentação idônea (art. 59 CP); agravantes/atenuantes ignoradas (arts. 61-66 CP); fração de causas de aumento/diminuição não motivada (ex.: art. 33, §4º, da Lei 11.343/2006).
- **Regime e substituição:** regime mais gravoso sem motivação (art. 33, §§ 2º e 3º, CP); silêncio sobre substituição por restritivas (art. 44 CP); detração não apreciada (art. 387, §2º, CPP).
- **Prova e nulidades:** ilicitude da prova não enfrentada (art. 157 CPP; art. 5º, LVI, CF); nulidades suscitadas e não decididas (art. 564 CPP); cadeia de custódia (arts. 158-A a 158-F do CPP).
- **Mérito absolutório:** tese de insuficiência probatória não enfrentada (art. 386 CPP); princípio da presunção de inocência (art. 5º, LVII, CF) para o plano constitucional.
- **Fundamentação das decisões:** o próprio dever de motivar (art. 93, IX, CF) como tese constitucional quando o acórdão é genérico.
- **Para o MP/assistente:** omissão sobre valoração de circunstância judicial desfavorável, sobre causa de aumento reconhecida na sentença e suprimida sem enfrentamento, ou sobre tese acusatória articulada nas contrarrazões.

Onde a tese exigir precedente atual das Cortes Superiores (ex.: entendimento vigente sobre aplicação do art. 1.025 do CPC ao processo penal, ou sobre prequestionamento implícito no STF pós-CPC/2015): **pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**. Não cite número de HC/REsp/AgRg de memória.

## Erros comuns e pegadinhas

- **Prazo do CPC em vez do CPP:** os EDs criminais têm prazo de **2 dias** (art. 619 CPP), não os 5 dias do art. 1.023 do CPC — e a contagem é em **dias corridos** (art. 798 CPP), não em dias úteis. Aplicar o CPC aqui é intempestividade fatal. Defensoria Pública tem prazo em **dobro** (arts. 44, I, 89, I, e 128, I, da LC 80/94); o MP **não** tem dobra no processo penal. Confirme a contagem no caso concreto via agente `lei-e-sumula`.
- **Perder o prazo do REsp/RE na fila dos EDs:** EDs tempestivos **interrompem** o prazo dos demais recursos para ambas as partes (art. 1.026, caput, do CPC, subsidiário). EDs **intempestivos não interrompem** — o prazo do REsp/RE segue correndo e a via superior morre por intempestividade.
- **Não opor os EDs = preclusão:** sem embargos contra a omissão, a matéria não prequestionada **não sobe** (Súmulas 282 e 356 do STF; Súmula 211 do STJ). É o erro que mata REsp/RE antes de nascerem.
- **Embargar e esquecer o elo no REsp:** se o tribunal rejeita os EDs e persiste omisso, o REsp deve alegar **também** a violação da norma de integração (art. 619 CPP / art. 1.025 CPC) — sem esse capítulo, o STJ tende a aplicar a Súmula 211 e não conhecer. Ver skill `recurso-especial-criminal`.
- **Tese nova nos EDs:** só se prequestiona o que foi **oportunamente suscitado** (exceção: matéria de ordem pública — mesmo assim, trate com cautela e verifique o entendimento atual via `jurisprudencia-stj-stf`). EDs não servem para inovar em tese defensiva.
- **Pedir reforma disfarçada:** EDs prequestionadores apontam **omissão**; pedir a modificação do julgado sem vício caracteriza pretensão infringente indevida e atrai a pecha de protelatório. Os efeitos infringentes só decorrem, excepcionalmente, do saneamento do vício.
- **Genérico demais:** "prequestionam-se todos os dispositivos citados" **não funciona**. Sem tópico individualizado (dispositivo + onde foi suscitado + o que se omitiu), o pronunciamento não vem e o prequestionamento não se aperfeiçoa.
- **Voto vencido como prequestionamento:** não basta (Súmula 320 STJ) — se a tese só aparece no voto vencido, embargue para que o **órgão julgador** se pronuncie.
- **Verbo errado:** embargos se **opõem** (nunca "interpor") — regra da skill `embargos-de-declaracao`.
- **Endereçamento errado:** ao **Relator** do acórdão, não ao juízo de 1º grau nem à Presidência do tribunal.
- **Esquecer a Súmula 98 do STJ:** sem declarar o propósito prequestionador, a parte fica exposta à qualificação de protelação (e, no cível-subsidiário, à multa do art. 1.026, §2º, CPC).

## Checklist final

- [ ] Acórdão (não sentença) como decisão embargada, endereçado ao **Relator**?
- [ ] Prazo de **2 dias** (art. 619 CPP), em dias corridos, observado — sem contaminação pelo CPC? (Turma Recursal: 5 dias, art. 83 da Lei 9.099/95; Defensoria: dobro)
- [ ] Forma da peça conforme a skill `embargos-de-declaracao` (petição única, verbo OPOR, "forte no")?
- [ ] **Um tópico por dispositivo**, com os três elos: suscitação (fls.) → omissão → pronunciamento requerido?
- [ ] Matriz tese → dispositivo → REsp ou RE montada e coerente com o futuro recurso?
- [ ] Tópico da **Súmula 98 do STJ** (não protelatórios) incluído?
- [ ] Pedido de pronunciamento **expresso** + pedido subsidiário do **art. 1.025 do CPC** (ficto)?
- [ ] Nenhuma tese nova; tudo já suscitado nas razões anteriores?
- [ ] Precedentes atuais pesquisados via `jurisprudencia-stj-stf` e checados por `verificador-citacoes` (sem citação de memória)?

## Apoie-se em

- **Skill `embargos-de-declaracao`** — referência obrigatória: estrutura da peça (petição única, preâmbulo, verbo OPOR, endereçamento, fechamento) e os vícios de integração. Esta skill só adiciona a camada prequestionadora.
- **Best-practice `recurso-criminal`** — regras gerais dos recursos criminais (tempestividade, dialeticidade, cadeia recursal) que envelopam esta peça.
- **Agente `lei-e-sumula`** — para conferir texto vigente de dispositivos e súmulas antes de citar (especialmente normas recentes ou de aplicação subsidiária).
- **Agente `verificador-citacoes`** — gate obrigatório: toda súmula/precedente citado passa por verificação; o que não confirmar recebe [NÃO VERIFICADO].
- **Skill `recurso-especial-criminal`** (desta onda) — destino natural desta peça: os EDs prequestionadores preparam o terreno e a matriz de dispositivos que aquele recurso consumirá; nela também se trata da alegação de violação do art. 619 CPP/art. 1.025 CPC quando o tribunal persiste omisso.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
