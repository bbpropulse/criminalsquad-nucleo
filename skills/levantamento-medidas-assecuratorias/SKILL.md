---
name: levantamento-medidas-assecuratorias
description: >-
  Use ao defender o patrimônio constrito por medidas assecuratórias (CPP, arts. 125-144-A) —
  embargos ao sequestro, pedido de levantamento, desbloqueio de contas e ativos financeiros, redução
  da constrição por desproporcionalidade e proteção de bens de terceiros de boa-fé. Gatilhos:
  medidas assecuratórias, sequestro de bens, embargos ao sequestro, levantamento do sequestro,
  arresto, hipoteca legal, especialização de… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-levantamento-medidas-assecuratorias"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["levantamento-medidas-assecuratorias", "levantamento medidas", "medidas assecuratorias"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa Patrimonial contra Medidas Assecuratórias (CPP, arts. 125-144-A)

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

Esta skill orienta a **defesa do patrimônio formalmente constrito** no processo penal — sequestro, arresto, hipoteca legal, bloqueio de contas e ativos (Sisbajud/Renajud/CNIB) e alienação antecipada — pelos seus remédios próprios: **embargos** (CPP 129-130), **pedido de levantamento** (CPP 131), desbloqueio de valores e substituição por caução. As cautelares **pessoais** têm skill própria (`liberdade-provisoria-relaxamento`); a **coisa apreendida** para prova (CPP 118-124) se recupera por outra via (`restituicao-coisas-apreendidas`) — aqui se trata do bem atingido por **decisão constritiva de garantia**.

> **Lição central:** a defesa patrimonial começa pela **identificação do título constritivo**. Sequestro (CPP 125) atinge bens de suposta **origem ilícita** e exige *indícios veementes* da proveniência (CPP 126); hipoteca legal (CPP 134) e arresto (CPP 136-137) atingem patrimônio **lícito** para garantir a reparação do dano; a constrição **por equivalente** (CP 91, §§1º e 2º) alcança bens lícitos no valor do proveito não localizado. Cada título tem pressuposto e remédio próprios — a peça que ataca sequestro com argumento de arresto (ou vice-versa) volta indeferida por inadequação.

> **Não confundir os regimes:** bem **apreendido** em flagrante ou busca (CPP 118-124) se recupera por **restituição** — ver `restituicao-coisas-apreendidas`, que traz o tripé daquele instituto. Bem **sequestrado/arrestado/hipotecado/bloqueado** (CPP 125-144-A) se ataca pelas vias desta skill. Em **lavagem**, o regime é especial (Lei 9.613/98, art. 4º — liberação mediante comprovação da licitude da origem): ver a tese T8 da skill `defesa-lavagem-capitais`, que esta skill instrumentaliza com a moldura geral do CPP.

## O mapa da constrição — cada medida tem pressuposto e remédio próprios

| Medida | O que atinge | Pressuposto | Defesa primária |
|---|---|---|---|
| **Sequestro** (CPP 125-132) | Imóveis — e móveis, quando não couber busca e apreensão (CPP 132) — adquiridos com **proventos da infração**, ainda que transferidos a terceiro | **Indícios veementes** da proveniência ilícita (CPP 126); cabível em qualquer fase, até antes da denúncia (CPP 127) | Embargos (CPP 129-130) e levantamento (CPP 131) |
| **Hipoteca legal** (CPP 134-135) | Imóveis de origem **lícita** do acusado, até o valor estimado do dano | **Certeza da infração + indícios suficientes de autoria** (CPP 134); especialização com arbitramento do valor (CPP 135) | Impugnação da estimativa; **caução substitutiva** (CPP 135, §6º); cancelamento (CPP 141) |
| **Arresto** (CPP 136-137) | Imóveis (arresto prévio, revogado se em 15 dias não se promove o processo de inscrição da hipoteca — CPP 136) e móveis **suscetíveis de penhora** (CPP 137) | Os mesmos da hipoteca; móveis só na insuficiência de imóveis | Levantamento (CPP 141); impenhorabilidade (CPP 137, *caput*); recursos para manutenção da família (CPP 137, §2º) |
| **Bloqueio de ativos** (Sisbajud/Renajud/CNIB) | Dinheiro em conta, aplicações, veículos, indisponibilidade de imóveis | É **instrumento** de sequestro, arresto ou equivalente — herda os pressupostos do título que executa | Petição de desbloqueio: impenhorabilidade + proporcionalidade, rubrica a rubrica |
| **Constrição por equivalente** (CP 91, §§1º e 2º) | Bens **lícitos** em valor equivalente ao produto/proveito | Produto/proveito **não encontrado** ou **no exterior** (§1º) | Ataque aos pressupostos do §1º + excesso sobre o valor estimado |
| **Alienação antecipada** (CPP 144-A) | Bens constritos sob risco de deterioração/depreciação ou de difícil manutenção | Risco **concreto** e avaliação prévia | Impugnação dos pressupostos; depósito e administração (CPP 139); parâmetros do leilão via `lei-e-sumula` |

**Pós-condenação:** o perdimento decretado leva à avaliação e leilão (CPP 133, com redação do Pacote Anticrime) e o bem constrito pode ser cedido ao uso de órgãos de segurança pública (CPP 133-A) — confira a redação atual de ambos via agente `lei-e-sumula` antes de transcrever. Hipoteca e arresto sobrevivem à condenação apenas como garantia da execução civil (CPP 143).

## As vias de defesa — quem, quando e com qual trava

| Via | Legitimado | Fundamento típico | Atenção |
|---|---|---|---|
| **Levantamento / revogação** (CPP 131) | Investigado, acusado ou interessado | (I) ação penal não intentada em **60 dias contados da conclusão da diligência**; (II) caução do terceiro adquirente; (III) extinção da punibilidade ou absolvição **transitada** (na hipoteca/arresto: CPP 141) | Decidido nos **próprios autos** da medida — sem a trava do parágrafo único do art. 130 |
| **Embargos de terceiro** (CPP 129) | Terceiro **senhor e possuidor** estranho aos fatos e à cadeia de transferência | Constrição alcançou bem que nunca integrou o patrimônio do investigado | Autuação em apartado; rito do CPC (arts. 674 e ss.), por aplicação subsidiária (CPP, art. 3º) |
| **Embargos do acusado** (CPP 130, I) | O próprio acusado | Bens **não** adquiridos com proventos da infração (cognição restrita à origem) | **Julgamento diferido**: parágrafo único veda decisão antes do trânsito da condenação — ver pegadinhas |
| **Embargos do adquirente** (CPP 130, II) | Terceiro que adquiriu **a título oneroso** | **Boa-fé** na aquisição | Mesma trava do parágrafo único |
| **Petição de desbloqueio** | Qualquer atingido (inclusive PJ e cotitular de conta) | Impenhorabilidade, verbas de subsistência, excesso de constrição | Instruir **rubrica a rubrica** com extratos — pedido genérico não desbloqueia nada |
| **Apelação** (CPP 593, II) | Sucumbente no incidente | Decisão que resolve embargos/levantamento tem força de definitiva | Não é RESE (rol taxativo do CPP 581); contra a **decretação** em si, a via é disputada — ver pegadinhas |

**Cumulação estratégica:** as vias não se excluem — o pedido de levantamento por falta de pressupostos corre nos autos da medida enquanto os embargos discutem a origem em apartado. A constrição é **cautelar** e vive sob cláusula *rebus sic stantibus*: desaparecido o pressuposto (perícia que nada rastreou, arquivamento parcial, absolvição no ponto), cabe pedido de revogação a qualquer tempo, sem preclusão.

## Teses típicas da prática

- **Ausência de indícios veementes (CPP 126).** "Incompatibilidade patrimonial" genérica, RIF sem diligência ou ilação de que "tudo é produto do crime" não atingem o padrão legal — *indícios veementes* é régua mais alta que a da denúncia. Exija da decisão a indicação de **qual bem** proveio de **qual fato**; a constrição em bloco, sem individualização, é nula por fundamentação deficiente (CF, art. 93, IX; CPP, art. 315).
- **Excesso de constrição.** A garantia tem teto: nas medidas reparatórias, **dano estimado + despesas processuais + penas pecuniárias** (CPP 140); no sequestro/equivalente, o **valor do produto/proveito** apontado nos autos. Bloquear dez quando a denúncia estima um é confisco antecipado. Monte a **planilha do excesso** (total constrito × valor apontado nos autos) e peça a liberação do excedente — tese que costuma vencer mesmo quando o mérito da medida se sustenta.
- **Equivalente sem os pressupostos (CP 91, §1º).** A constrição de bens lícitos por equivalência exige demonstração de que o produto **não foi encontrado** ou está **no exterior** — decisão que salta essa etapa e mira o patrimônio lícito por comodidade inverte a ordem legal. Havendo pedido de **confisco alargado** (CP 91-A, crimes com pena máxima superior a 6 anos de reclusão), enfrente-o com prova da origem lícita do bem individualizado e confira o alcance atual do dispositivo via `lei-e-sumula`.
- **Impenhorabilidade e subsistência.** Salário e verbas alimentares (CPC, art. 833, IV) e poupança até 40 salários mínimos (CPC, art. 833, X) valem para as medidas **reparatórias** (hipoteca/arresto, que garantem execução civil — o art. 137 só permite arresto de móveis *suscetíveis de penhora*); a extensão ao sequestro de proventos é disputada, pois impenhorabilidade protege contra dívida, não contra confisco de produto de crime — **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**. Peça sempre, no mínimo, a liberação das verbas de sobrevivência — inclusive com apoio no CPP 137, §2º (rendas dos bens arrestados para manutenção do indiciado e família).
- **Asfixia da pessoa jurídica.** Bloqueio integral de contas de empresa operante compromete folha de pagamento, tributos e capital de giro — sanção a terceiros inocentes (empregados, fisco, credores). Documente a folha e o fluxo de caixa e peça liberação mensal de valores ou substituição da constrição por bem imobilizado.
- **Terceiro de boa-fé.** Cônjuge/meeiro, cotitular de conta conjunta, adquirente oneroso com escritura anterior aos fatos: individualize a fração e a cadeia dominial. A escolha da via importa — estranho à cadeia usa o CPP 129 (sem trava temporal); adquirente do investigado usa o CPP 130, II (com trava) — ver pegadinhas.
- **Excesso de prazo.** Sequestro sem denúncia em **60 dias da conclusão da diligência** se levanta por imposição legal (CPP 131, I); mesmo dentro da ação penal, constrição que se arrasta por anos sem avanço da persecução fere a duração razoável (CF, art. 5º, LXXVIII) — a proporcionalidade tem dimensão temporal.
- **Decretação de ofício na investigação.** O art. 127 ainda escreve "de ofício", mas o sistema acusatório do Pacote Anticrime (CPP, art. 3º-A) e a lógica do art. 282, §2º, sustentam a incompatibilidade da constrição sem requerimento na fase pré-processual. O entendimento é disputado: **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**.
- **Alienação antecipada sem risco concreto (CPP 144-A).** Deterioração se **demonstra** (laudo, fotos), não se presume; exija avaliação prévia, contraditório e o piso legal do preço de leilão (confira os parâmetros dos §§ via `lei-e-sumula`). Alternativa menos gravosa: nomeação do titular como depositário/administrador (CPP 139).
- **Extinção da punibilidade e absolvição.** Transitada em julgado a absolvição ou extinta a punibilidade, o levantamento é **imperativo** (CPP 131, III; 141) — mas em lavagem a extinção do antecedente **não** arrasta a constrição da lavagem (ver `defesa-lavagem-capitais`); e nos crimes tributários o pagamento que extingue a punibilidade esvazia a causa da garantia reparatória — interface na BP `defesa-crimes-tributarios`.

## Estrutura da petição

Enderece ao **juízo que decretou a medida** (na investigação, o juiz das garantias, onde implantado). Embargos autuam-se **em apartado**; levantamento e desbloqueio correm nos autos da própria medida.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA/SEÇÃO JUDICIÁRIA DE [COMARCA] — [UF]

Autos nº [PROCESSO / APENSO DA MEDIDA ASSECURATÓRIA]
(Embargos — CPP 129 ou 130 — em APARTADO; levantamento/desbloqueio
nos próprios autos da medida)

[NOME / RAZÃO SOCIAL], [qualificação completa] — réu OU terceiro
ESTRANHO aos fatos —, por seu(sua) advogado(a) (procuração anexa),
vem requerer

   [LEVANTAMENTO DE SEQUESTRO (art. 131 do CPP) / DESBLOQUEIO DE
   ATIVOS / EMBARGOS (arts. 129-130 do CPP) / SUBSTITUIÇÃO POR CAUÇÃO
   (arts. 131, II, e 135, §6º, do CPP)]

pelas razões que passa a expor:

I — DA CONSTRIÇÃO ATACADA
   Decisão de fls. [...], data e fundamento invocado; INVENTÁRIO dos
   bens atingidos: imóveis (matrícula/CNIB), veículos (placa/RENAVAM
   — Renajud), ativos financeiros (banco, conta, valor e data do
   bloqueio Sisbajud). Valor TOTAL constrito × proveito/dano estimado
   nos autos (planilha do excesso).

II — DO CABIMENTO DA VIA ELEITA
   [hipótese legal do art. 131; desaparecimento superveniente dos
   pressupostos (rebus sic stantibus); legitimidade nos embargos —
   129 (estranho) × 130, I (acusado) × 130, II (adquirente oneroso)]

III — DO DIREITO
   1. Da ausência (ou queda) dos pressupostos da medida
      [sem indícios veementes da proveniência — CPP 126; equivalente
      sem os requisitos do art. 91, §1º, do CP; hipoteca/arresto sem
      estimativa idônea do dano — CPP 135]
   2. Da origem lícita documentada dos bens
      [IR, escrituras e datas de aquisição anteriores aos fatos,
      contratos, faturamento — prova pré-constituída]
   3. Do excesso de constrição e da desproporcionalidade
      [constrito R$ X para garantir R$ Y; limite do CPP 140; menor
      onerosidade]
   4. Da impenhorabilidade e das verbas de subsistência
      [CPC 833, IV e X; folha de pagamento; CPP 137, §2º]
   5. [Se terceiro] Da boa-fé e da titularidade
      [cadeia dominial; aquisição onerosa anterior; fração do cônjuge
      ou cotitular]

IV — DOS PEDIDOS (sucessivos)
   a) o LEVANTAMENTO INTEGRAL da constrição, com ofícios de baixa
      (Sisbajud/Renajud/CNIB e registro de imóveis — CPP 128);
   b) subsidiariamente, o levantamento PARCIAL, limitado o gravame ao
      valor do proveito/dano estimado, liberando-se o excedente;
   c) subsidiariamente, a SUBSTITUIÇÃO por caução idônea (CPP 131,
      II; 135, §6º) ou por bem determinado menos gravoso;
   d) em qualquer caso, a liberação imediata das verbas impenhoráveis
      e de subsistência [folha de pagamento, se PJ];
   e) a suspensão da ALIENAÇÃO ANTECIPADA até o julgamento, com
      nomeação do requerente como depositário/administrador (CPP 139).

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cópia da decisão constritiva e dos extratos de bloqueio (localize-os com a skill `ocr-autos-pdf` e o agente `resumo-processo` — a data e o teor exatos definem via e prazos); matrículas e escrituras com data de aquisição; declarações de IR dos últimos exercícios; extratos bancários identificando rubrica a rubrica as verbas impenhoráveis; se PJ, contrato social, folha de pagamento e balancetes; se terceiro, prova da cadeia dominial e da ausência de vínculo com os fatos.

## Erros comuns e pegadinhas

- **Errar o instituto vizinho:** bem retido por **auto de apreensão** (flagrante/busca) se recupera por restituição (CPP 118-124 — skill `restituicao-coisas-apreendidas`), não por embargos; bem **sequestrado** não se recupera por pedido de restituição. Leia a decisão que constritou **antes** de escolher o remédio.
- **HC para atacar constrição patrimonial:** inadequação clássica — não há risco à liberdade de locomoção; o writ patrimonial do terceiro é o **mandado de segurança** ou os embargos. Não queime a tese na via errada.
- **A trava do parágrafo único do art. 130:** os embargos do acusado e do adquirente podem ficar **sem julgamento até o trânsito da condenação**. Estratégia: quando o fundamento for **falta de pressupostos** (e não a origem do bem), prefira o **pedido de levantamento/revogação** nos próprios autos — sem trava; reserve os embargos para a disputa probatória da origem. A mitigação jurisprudencial da trava para teses manifestas existe, mas **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**.
- **Trocar as legitimidades dos embargos:** o estranho à cadeia de transferência usa o CPP 129 (rito do CPC, sem a trava); o adquirente oneroso do investigado usa o CPP 130, II (com a trava); o donatário (título gratuito) não tem a via do 130, II — reste-lhe o 129 se nunca houve domínio do investigado, ou a via cível. Errar o enquadramento é extinção sem mérito.
- **Brandir a Lei 8.009/90 às cegas:** o art. 3º, VI, excepciona o bem de família justamente na hipótese penal — bem **adquirido com produto de crime** ou execução de **sentença penal condenatória** a ressarcimento/perdimento. A tese só funciona somada à demonstração de origem lícita e à natureza reparatória (não confiscatória) da medida.
- **Pedido genérico de desbloqueio total:** juiz não garimpa extrato. Sem a identificação **rubrica a rubrica** (salário X na data Y, poupança Z) e a planilha do excesso, o pedido volta indeferido "por falta de prova".
- **Ignorar o termo inicial dos 60 dias:** o prazo do CPP 131, I, conta da **conclusão da diligência**, não da decretação — calcule certo antes de alegar; e a jurisprudência tempera a taxatividade quando a denúncia sobrevém — pesquise o estado atual via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.
- **Recurso errado (e prazo curto):** contra a decisão que **resolve** o incidente, **apelação** (CPP 593, II) — não RESE (CPP 581 é taxativo) — no prazo de **5 dias** (CPP 593, *caput*), contado na forma do CPP 798, §1º (exclui o dia do começo, inclui o do vencimento; intimação em sexta corre rápido), **em dobro para a Defensoria Pública** (LC 80/94). Contra a **decretação** em si, a via recursal é disputada (MS, correição, aguardar o incidente): verifique a prática do tribunal local e **pesquise via `jurisprudencia-stj-stf` [NÃO VERIFICADO]**.
- **Aplicar o rito geral a regime especial:** lavagem tem incidente próprio com ônus invertido na prática (Lei 9.613/98, art. 4º, §2º — ver `defesa-lavagem-capitais`); drogas têm regime dos arts. 60-63 da Lei 11.343/2006 (alterados pela Lei 13.840/2019 — confira a redação via `lei-e-sumula`). Petição pelo rito genérico do CPP nesses regimes tende ao indeferimento por inadequação.
- **Dormir sobre a alienação antecipada:** decretado o 144-A, o bem vai a leilão e a discussão vira disputa sobre **dinheiro depositado**. Impugne os pressupostos **imediatamente** e peça efeito suspensivo — depois do martelo, só resta o valor. E o terceiro tem termo final: os embargos de terceiro do rito do CPC observam o limite temporal do art. 675 do CPC (após a alienação, até 5 dias da adjudicação/arrematação, antes da assinatura da carta).
- **Esquecer as baixas nos sistemas:** levantamento deferido sem ofício ao Sisbajud/Renajud/CNIB e ao registro de imóveis (CPP 128) é vitória no papel — requeira as baixas expressamente e acompanhe o cumprimento.

## Checklist antes de protocolar

- [ ] Título constritivo identificado (sequestro × arresto × hipoteca × equivalente × apreensão) — decisão localizada por fls.?
- [ ] Regime especial afastado ou incorporado (lavagem — art. 4º; drogas — arts. 60-63)?
- [ ] Via correta para o legitimado (131 × 129 × 130, I × 130, II × desbloqueio) e trava do parágrafo único considerada?
- [ ] Inventário completo dos bens constritos com matrícula/placa/conta e **planilha do excesso** (constrito × estimado)?
- [ ] Origem lícita documentada (IR, escrituras com data, contratos, faturamento)?
- [ ] Impenhorabilidades demonstradas **rubrica a rubrica** com extratos?
- [ ] Pressupostos atacados ponto a ponto (indícios veementes — 126; certeza + autoria — 134; equivalente — CP 91, §1º)?
- [ ] Pedidos **sucessivos** (integral → parcial → caução → verbas de subsistência → suspensão do 144-A)?
- [ ] Ofícios de baixa (Sisbajud/Renajud/CNIB/registro) requeridos expressamente?
- [ ] Prazo do CPP 131, I, calculado da conclusão da diligência?
- [ ] Precedentes citados **verificados** (nada de memória — Citation Gate)?

## Lembretes finais

- **Título primeiro, tese depois:** sequestro = origem ilícita; hipoteca/arresto = garantia reparatória sobre bens lícitos; equivalente = CP 91, §§1º e 2º. O remédio segue o título.
- **Levantamento não tem a trava dos embargos** — quando o fundamento é falta de pressupostos, é a via mais rápida; embargos ficam para a disputa da origem.
- **Excesso de constrição é a tese que mais liberta patrimônio** — planilha sempre.
- **Terceiro de boa-fé:** CPP 129 para o estranho, 130, II, para o adquirente oneroso — legitimidade errada mata a via.
- **Desbloqueio se ganha no extrato**, rubrica a rubrica, não na retórica.
- **Alienação antecipada é corrida contra o leilão** — impugnação imediata.
- **Recurso do incidente: apelação (CPP 593, II)** — não RESE; HC não é via patrimonial.
- Toda a entrega é **rascunho para revisão humana**; precedentes só entram verificados.

## Apoie-se em

- **Agente `resumo-processo`** — localizar a decisão constritiva, os apensos das medidas, os extratos de bloqueio e o valor do proveito/dano estimado nos autos (alimenta a planilha do excesso); combine com a skill `ocr-autos-pdf` nos autos digitalizados.
- **Agente `jurisprudencia-stj-stf`** — precedentes atuais dos pontos disputados: mitigação do parágrafo único do art. 130, impenhorabilidade frente ao sequestro, decretação de ofício pós-Pacote Anticrime, recurso contra a decretação e temperamento do prazo do art. 131, I — tudo entra como [NÃO VERIFICADO] até o gate.
- **Best-practice `peticao-criminal`** — estrutura, tom e técnica das peças.
- **Best-practice `defesa-crimes-tributarios`** — casos patrimoniais típicos do nicho fiscal: constrição para garantia do crédito, efeito do pagamento sobre a causa da medida e interface com o processo administrativo.
- **Agente `verificador-citacoes`** (best-practice `verificacao-citacoes`) — Citation Gate obrigatório: nenhum julgado citado de memória; o que não for confirmado sai da peça ou recebe [NÃO VERIFICADO].
- **Skill `restituicao-coisas-apreendidas`** — o instituto vizinho (CPP 118-124): coisa apreendida para prova, tripé da restituição e a triagem que decide qual das duas skills aplicar.
- **Skill `defesa-lavagem-capitais`** — regime especial do art. 4º da Lei 9.613/98 (liberação mediante prova de licitude, alienação antecipada própria) e o incidente patrimonial como trilha paralela ao mérito.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — **sempre**: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
