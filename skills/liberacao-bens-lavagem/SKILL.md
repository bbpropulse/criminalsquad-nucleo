---
name: liberacao-bens-lavagem
description: >-
  Use ao pedir a liberação ou restituição de bens, direitos ou valores constritos em investigação ou
  ação penal por lavagem de dinheiro (Lei 9.613/98, art. 4º e §§) — regime especial de medidas
  assecuratórias sobre produto/proveito, liberação mediante prova da origem lícita e da titularidade
  de boa-fé (§2º), impugnação da alienação antecipada própria (art. 4º-A) e administração dos bens.
  Gatilhos: liberação de bens na lavagem… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, economico, cautelar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-liberacao-bens-lavagem"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["liberacao-bens-lavagem", "liberacao bens", "bens lavagem"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Liberação de Bens Constritos por Lavagem (Lei 9.613/98, art. 4º)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta o **incidente patrimonial na lavagem de capitais** — o pedido de liberação, restituição ou desbloqueio de bens, direitos e valores constritos pelo **regime especial** do art. 4º da Lei 9.613/98, mediante prova da **origem lícita** e da **titularidade de boa-fé** (art. 4º, §2º). É a trilha **paralela ao mérito**: enquanto a defesa da imputação se faz alhures (ver `defesa-lavagem-capitais`, tese T8), aqui se disputa **só o patrimônio**, em apenso, com urgência e ônus próprios. O regime **geral** da constrição — sequestro, arresto, hipoteca e bloqueio do CPP (arts. 125-144-A) — mora em `levantamento-medidas-assecuratorias`, que esta skill invoca como moldura subsidiária; a **coisa apreendida** para prova (CPP 118-124) se recupera por outra via (`restituicao-coisas-apreendidas`).

> **Lição central:** na lavagem, a constrição é **larga e a liberação é do defensor**. O art. 4º, *caput*, autoriza medidas assecuratórias sobre bens que sejam **instrumento, produto ou proveito** dos crimes (a constrição por **equivalência** sobre patrimônio lícito depende dos pressupostos do CP, art. 91, §§1º e 2º), e o §2º condiciona a liberação à **comprovação da licitude da origem**. Na prática, o ônus se **inverte**: não basta apontar a fragilidade da acusação; é preciso **provar documentalmente** de onde veio cada bem. A peça vence com dossiê contábil-documental — IR, escrituras datadas, contratos, faturamento —, não com retórica sobre a inépcia da denúncia (essa mora no mérito).

## O instituto e a base legal

A Lei 9.613/98 tem sistema assecuratório **próprio**, mais amplo que o do CPP e com liberação condicionada à prova da licitude. A moldura processual geral (embargos, prazos, recursos) vem do CPP por aplicação subsidiária (art. 3º do CPP), mas os pressupostos e o ônus são os da lei especial:

> **Atenção à numeração (redação da Lei 12.683/2012):** o art. 4º foi reescrito e seus parágrafos não seguem a divisão intuitiva. **Confira a redação atual bem a bem via `lei-e-sumula` antes de citar** — a jurisprudência e a prática ainda misturam a numeração antiga. O quadro abaixo reflete a redação vigente; trate qualquer citação de parágrafo como **[A VERIFICAR]** no gate.

| Dispositivo (Lei 9.613/98) | O que garante / exige |
|---|---|
| **Art. 4º, *caput*** | Decretação de **medidas assecuratórias** sobre **bens, direitos ou valores** do investigado/acusado, ou em nome de interpostas pessoas, que sejam **instrumento, produto ou proveito** dos crimes da lei ou das infrações antecedentes — havendo **indícios suficientes** da infração penal |
| **Art. 4º, §1º** | **Alienação antecipada** para preservação do valor sempre que os bens estiverem sujeitos a **deterioração/depreciação** ou houver **dificuldade de manutenção** (a numeração é contraintuitiva — não é "equivalência") |
| **Art. 4º, §2º** | **Liberação total ou parcial** dos bens quando comprovada a **licitude de sua origem**, mantida a constrição sobre o **necessário e suficiente** à reparação do dano e ao pagamento de prestações pecuniárias, multas e custas — **é o coração da defesa patrimonial e a própria trava contra o excesso** |
| **Art. 4º, §3º** | O pedido de liberação **só é conhecido** com o **comparecimento pessoal** do acusado ou da interposta pessoa; o juiz pode determinar atos necessários à **conservação** dos bens (não é a nomeação do administrador) |
| **Art. 4º, §4º** | Autoriza medidas assecuratórias para **reparação do dano** (do antecedente ou da lavagem) e para pagamento de prestação pecuniária, multa e custas |
| **Art. 4º-A** | **Procedimento** da alienação antecipada: petição autônoma, autos em apartado, avaliação, leilão e depósito do produto em conta judicial |
| **Art. 4º-B** | Suspensão da **ordem de prisão** ou das medidas assecuratórias quando a execução imediata puder comprometer a investigação (a favor da acusação — atenção estratégica) |
| **Art. 5º** | Nomeação de **administrador** qualificado dos bens constritos, mediante termo de compromisso |
| **Art. 6º** | Remuneração e deveres do administrador (prestação de informações periódicas); conservação do patrimônio |
| **Art. 7º** | **Efeitos da condenação**: perda, em favor da União (ou do Estado, na competência estadual), dos bens relacionados aos crimes — ressalvado o direito do lesado e do **terceiro de boa-fé** |

**Norma-chave para o excesso:** é o próprio **§2º** que trava o excesso — manda manter a constrição apenas sobre o **necessário e suficiente** à reparação, multa e custas, liberando o restante quando comprovada a licitude. Some-se a proporcionalidade (CF, art. 5º, LIV) e a natureza cautelar da medida. A **constrição por equivalência** sobre patrimônio lícito, na lavagem, não tem parágrafo próprio no art. 4º vigente: apoia-se no **CP, art. 91, §§1º e 2º** (produto/proveito **não localizado** ou **no exterior**) — se a acusação bloqueia patrimônio lícito por comodidade, saltou os pressupostos do confisco por equivalente. **Confirme o enquadramento via `lei-e-sumula` e `jurisprudencia-stj-stf` [NÃO VERIFICADO]**.

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência primária | Aprofundar em |
|---|---|---|
| Conta bloqueada asfixia PJ operante (folha, tributos, capital de giro) | Liberação mensal + rubrica a rubrica; substituição por bem imobilizado | Este arquivo (asfixia da PJ) + `levantamento-medidas-assecuratorias` |
| Bem com origem lícita documentada (imóvel anterior aos fatos, IR compatível) | Liberação total/parcial pelo §2º com dossiê documental | Este arquivo (dossiê de licitude) |
| Constrição em bloco supera o proveito apontado na denúncia | Liberação parcial pelo §2º (só o "necessário e suficiente") + planilha do excesso | `levantamento-medidas-assecuratorias` (planilha do excesso) |
| Cônjuge/meeiro ou cotitular de conta atingido | Individualizar meação/fração; boa-fé e cadeia dominial | Este arquivo (terceiro de boa-fé) |
| Bloqueio por equivalência sobre patrimônio lícito | Atacar os pressupostos do confisco por equivalente (CP 91, §1º: produto não localizado / exterior) | Este arquivo + `levantamento-medidas-assecuratorias` (equivalente) |
| Decretada a alienação antecipada (art. 4º, §1º; 4º-A) | Impugnação imediata dos pressupostos + efeito suspensivo | Este arquivo (alienação antecipada) |
| Bem retido por **auto de apreensão** (flagrante/busca), não sequestrado | Via errada aqui — usar restituição | `restituicao-coisas-apreendidas` |
| Discussão sobre a **imputação** de lavagem (justa causa, atipicidade) | Não é esta skill — é o mérito | `defesa-lavagem-capitais` |

## As teses da liberação — provar a licitude, atacar o excesso

- **Origem lícita comprovada (art. 4º, §2º).** É a tese-mãe. Para **cada bem**, monte a trilha documental: imóvel com escritura e matrícula **datadas antes dos fatos**; valores com faturamento, contabilidade e declarações de IR dos exercícios pertinentes; participações societárias com contrato social e integralização; salários e pró-labore com holerites e recibos. A liberação pode ser **total ou parcial** — não abandone o pedido só porque parte do patrimônio é discutível; libere o que é inequívoco.
- **Excesso de constrição (art. 4º, §2º, parte final).** A garantia tem teto: o próprio §2º manda manter a constrição só sobre o **necessário e suficiente** à reparação do dano e ao pagamento de prestações pecuniárias, multas e custas. Bloquear dez quando a denúncia estima um é confisco antecipado, contra a proporcionalidade (CF, art. 5º, LIV). Monte a **planilha do excesso** (total constrito × valor apontado) e peça a liberação do excedente — tese que costuma vencer mesmo quando a materialidade da lavagem se sustenta (mecânica detalhada em `levantamento-medidas-assecuratorias`).
- **Equivalência sem pressuposto (CP, art. 91, §§1º e 2º).** A constrição de bens **lícitos** por equivalência exige demonstração de que o produto **não foi encontrado** ou está **no exterior**. Na lavagem essa via não tem parágrafo próprio no art. 4º vigente — apoia-se no confisco por equivalente do CP; **confirme o enquadramento via `lei-e-sumula` [NÃO VERIFICADO]**. Decisão que mira o patrimônio lícito sem essa etapa inverte a ordem legal — enfrente o ponto e exija a individualização do que seria o produto original e por que não foi localizado.
- **Terceiro de boa-fé, meação e cotitularidade.** Cônjuge/meeiro, cotitular de conta conjunta, adquirente oneroso com título anterior aos fatos: individualize a **fração** e a **cadeia dominial**, e demonstre a **ausência de ciência** da origem ilícita. O art. 7º ressalva expressamente o terceiro de boa-fé no perdimento — a ressalva vale, com mais razão, na fase cautelar. Interposta pessoa alegada pela acusação exige prova do vínculo; a mera titularidade formal não basta para presumir laranja.
- **Subsistência e dignidade.** Verbas alimentares e de subsistência (analogia ao CPC, art. 833, IV e X) e recursos para a manutenção do investigado e da família merecem liberação, ainda que o mérito patrimonial se protraia. A extensão da impenhorabilidade **frente ao produto de crime** é disputada — **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** —, mas peça sempre, no mínimo, o piso de sobrevivência.
- **Honorários advocatícios de origem lícita.** O bloqueio integral que inviabiliza a contratação de defesa toca a ampla defesa (CF, art. 5º, LV; EAOAB, art. 133). Requeira a liberação de valor razoável e compatível para honorários, com contrato e demonstração de licitude — a interface com a tese de honorários maculados está em `defesa-lavagem-capitais` (T6). O ponto é sensível; **confirme o entendimento atual via `jurisprudencia-stj-stf` [NÃO VERIFICADO]**.
- **Asfixia da pessoa jurídica.** Bloqueio total de contas de empresa em operação atinge terceiros inocentes — empregados, fisco, credores. Documente folha de pagamento, tributos e fluxo de caixa e peça liberação mensal de valores ou substituição da constrição por bem imobilizado, sob o filtro da proporcionalidade e da menor onerosidade.
- **Administração no lugar do bloqueio estéril (arts. 5º e 6º; conservação pelo art. 4º, §3º).** Bens produtivos parados perdem valor. Ofereça a **nomeação do titular (ou administrador idôneo) como depositário/administrador** (art. 5º, mediante termo de compromisso; deveres e prestação de informações no art. 6º) — preserva o patrimônio e afasta o pretexto para a alienação antecipada. O art. 4º, §3º autoriza, ainda, atos de **conservação** dos bens.
- **Alienação antecipada sem risco concreto (art. 4º, §1º; procedimento no art. 4º-A).** O gatilho está no §1º (deterioração/depreciação ou dificuldade de manutenção) e o rito no 4º-A (petição autônoma, autos apartados, avaliação e leilão). Deterioração/depreciação se **demonstram** (laudo, fotos, natureza do bem), não se presumem. Exija avaliação prévia e contraditório; impugne **imediatamente** e peça efeito suspensivo — depois do leilão, a discussão vira disputa sobre **dinheiro depositado**. Alternativa menos gravosa: administração pelo titular (arts. 5º e 6º).

## Procedimento, ônus e prazos — as travas do incidente

- **Trilha paralela em apenso.** O incidente patrimonial corre **em apartado**, autuado junto à investigação ou ação penal, e não espera o mérito. Não deixe a peça de defesa da imputação engolir o pedido de liberação — são trilhas distintas, com pedidos, prova e recurso próprios.
- **Ônus invertido na prática (art. 4º, §2º).** Diferentemente do CPP, aqui a **defesa** carrega o ônus de comprovar a licitude — a liberação é benefício condicionado à prova. Instrua **antes** de protocolar: dossiê documental fechado, bem a bem, com planilha de correspondência (documento → bem → valor).
- **Rubrica a rubrica no desbloqueio.** Juiz não garimpa extrato. Sem identificação individualizada (salário X na data Y, aplicação Z, poupança W) e a planilha do excesso, o pedido volta indeferido "por falta de prova". Instrua com extratos completos e legendados.
- **Baixas nos sistemas.** Liberação deferida sem ofício de baixa ao Sisbajud/Renajud/CNIB e ao registro de imóveis é vitória no papel — requeira as baixas **expressamente** e acompanhe o cumprimento.
- **Competência.** Antecedente federal, sistema financeiro ou interesse da União puxam a **Justiça Federal** (Lei 9.613/98, art. 2º, III); confira o endereçamento antes de protocolar — incidente no juízo errado é tempo perdido.
- **Recurso do incidente.** A decisão que resolve o pedido de liberação tem força de definitiva — o recurso clássico é a **apelação** (CPP 593, II), não RESE (o rol do CPP 581 é taxativo), no prazo de **5 dias** (CPP 593, *caput*), contado na forma do **CPP 798, §1º** (exclui o dia do começo, inclui o do vencimento), **em dobro para a Defensoria Pública** (LC 80/94). Contra a **decretação** da constrição, a via é disputada (MS, HC quando houver reflexo na liberdade não se sustenta para patrimônio) — **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**.
- **Cláusula rebus sic stantibus.** A constrição é cautelar: desaparecido o pressuposto (perícia que nada rastreou, arquivamento parcial, absolvição no ponto), cabe pedido de revogação **a qualquer tempo**, sem preclusão.

## Estrutura da petição

Enderece ao **juízo que decretou a medida** (na investigação, o juiz das garantias, onde implantado; na lavagem federal, a vara federal competente). O incidente autua-se **em apenso**.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) FEDERAL DA [N]ª VARA CRIMINAL
DA SEÇÃO/SUBSEÇÃO JUDICIÁRIA DE [LOCAL] — [UF]
[ou Vara Criminal estadual, conforme a competência — art. 2º, III, da Lei 9.613/98]

Autos nº [PROCESSO / APENSO DA MEDIDA ASSECURATÓRIA]
(Pedido de liberação de bens — art. 4º, §2º, da Lei 9.613/98 — em apenso)

[NOME / RAZÃO SOCIAL], [qualificação completa] — investigado(a)/acusado(a)
OU terceiro(a) de boa-fé ESTRANHO(A) aos fatos —, por seu(sua)
advogado(a) (procuração anexa), vem requerer a

   LIBERAÇÃO [TOTAL / PARCIAL] DE BENS CONSTRITOS
   (art. 4º, §2º, da Lei 9.613/98)

pelas razões que passa a expor:

I — DA CONSTRIÇÃO ATACADA
   Decisão de fls. [...], data e fundamento (art. 4º, caput; se por
   equivalente, CP 91, §1º);
   INVENTÁRIO dos bens atingidos: imóveis (matrícula/CNIB), veículos
   (placa/RENAVAM — Renajud), ativos financeiros (banco, conta, valor e
   data do bloqueio Sisbajud), participações societárias. Valor TOTAL
   constrito × produto/proveito estimado nos autos (PLANILHA DO EXCESSO).

II — DA LICITUDE DA ORIGEM (art. 4º, §2º) — bem a bem
   Tabela de correspondência DOCUMENTO → BEM → VALOR:
   - Imóvel [matrícula]: escritura de [data anterior aos fatos]; IR de [ano];
   - Valores [conta]: faturamento/contabilidade/IR; natureza da atividade;
   - Participações: contrato social, integralização;
   - Salários/pró-labore: holerites, recibos.

III — DO DIREITO
   1. Da comprovação da origem lícita e da liberação do §2º
   2. Do excesso de constrição (§2º, parte final: só o "necessário e
      suficiente") e da proporcionalidade
      [constrito R$ X para garantir R$ Y; limite ao produto/proveito]
   3. Da equivalência sem pressuposto (CP 91, §1º), se for o caso
      [produto não localizado/exterior não demonstrado]
   4. [Se terceiro] Da boa-fé, da meação e da titularidade
      [cadeia dominial; fração do cônjuge/cotitular; art. 7º]
   5. Das verbas de subsistência e dos honorários de defesa
      [piso de sobrevivência; honorários lícitos — ampla defesa]

IV — DOS PEDIDOS (sucessivos)
   a) a LIBERAÇÃO INTEGRAL dos bens de origem lícita comprovada, com
      ofícios de baixa (Sisbajud/Renajud/CNIB e registro de imóveis);
   b) subsidiariamente, a LIBERAÇÃO PARCIAL, limitando-se a constrição
      ao valor do produto/proveito estimado, liberado o excedente
      (art. 4º, §2º, parte final);
   c) subsidiariamente, a nomeação do(a) requerente como ADMINISTRADOR(A)
      dos bens (arts. 5º e 6º), com prestação de contas;
   d) em qualquer caso, a liberação das verbas de subsistência e de
      valor razoável para honorários advocatícios;
   e) a SUSPENSÃO da alienação antecipada (art. 4º, §1º; 4º-A) até o
      julgamento.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cópia da decisão constritiva e dos extratos de bloqueio (localize-os com a skill `ocr-autos-pdf` e o agente `resumo-processo` — data e teor exatos definem via, ônus e prazos); matrículas e escrituras com data de aquisição; declarações de IR dos exercícios pertinentes; extratos bancários legendados rubrica a rubrica; contrato social, integralizações, balancetes e folha de pagamento se PJ; holerites e recibos de pró-labore; se terceiro, prova da cadeia dominial, da meação e da ausência de vínculo com os fatos; **planilha de correspondência documento → bem → valor**.

## Erros comuns e pegadinhas

- **Confundir o incidente com o mérito.** Atacar a inépcia da denúncia ou a atipicidade da lavagem **no pedido de liberação** é errar o foro do argumento — isso é `defesa-lavagem-capitais`. Aqui se prova **origem lícita**; lá se discute a **imputação**. Misturar dilui as duas peças.
- **Esperar o CPP resolver o ônus.** No regime geral (CPP), a acusação prova o vínculo do bem com o crime; na lavagem, o §2º condiciona a liberação à **prova da defesa**. Quem entra sem dossiê contábil-documental sai indeferido.
- **Ignorar a liberação parcial.** Abandonar o pedido porque parte do patrimônio é discutível deixa na mesa o que era inequivocamente lícito. Peça sempre a liberação **parcial** do que se comprova, bem a bem.
- **Errar o instituto vizinho.** Bem retido por **auto de apreensão** (flagrante/busca) se recupera por restituição (`restituicao-coisas-apreendidas`), não por este incidente; bem sob o regime **geral** do CPP tem os remédios de `levantamento-medidas-assecuratorias`. Leia a decisão que constritou **antes** de escolher a via.
- **Brandir impenhorabilidade às cegas.** A proteção do CPC 833 e da Lei 8.009/90 mira dívida, não confisco de produto de crime — a tese só funciona somada à **prova de origem lícita** e à natureza reparatória (não confiscatória) da constrição sobre aquele bem. **Pesquise o alcance atual via `jurisprudencia-stj-stf` [NÃO VERIFICADO]**.
- **Pedido genérico de desbloqueio total.** Sem individualização rubrica a rubrica e planilha do excesso, o pedido volta "por falta de prova". Desbloqueio se ganha no extrato, não na retórica.
- **Dormir sobre a alienação antecipada (art. 4º, §1º; rito no 4º-A).** Decretada, o bem vai a leilão e a discussão vira disputa sobre dinheiro depositado. Impugne os pressupostos **imediatamente** e peça efeito suspensivo — e ofereça a administração pelo titular (arts. 5º e 6º) como alternativa.
- **Esquecer as baixas nos sistemas.** Liberação deferida sem ofício ao Sisbajud/Renajud/CNIB e ao registro é vitória no papel — requeira expressamente e acompanhe.
- **Errar o endereçamento.** Antecedente federal/sistema financeiro/interesse da União puxam a Justiça Federal (art. 2º, III) — incidente no juízo errado queima tempo. Confira a competência antes.
- **Recurso errado (e prazo curto).** Contra a decisão que **resolve** o incidente, **apelação** (CPP 593, II), não RESE, em **5 dias** (CPP 593, contados pelo CPP 798, §1º), em dobro para a Defensoria. Contra a **decretação**, a via é disputada — **pesquise via `jurisprudencia-stj-stf` [NÃO VERIFICADO]**.
- **Presumir laranja pela titularidade formal.** A acusação alega interposta pessoa; a defesa do terceiro exige prova do vínculo e da ciência — a mera titularidade em nome de parente não é, por si, prova de ocultação. Individualize a meação e a cadeia dominial.

## Antes de protocolar

- [ ] Constrição identificada como **regime especial da lavagem** (art. 4º) — e não apreensão (CPP 118) nem regime geral (CPP 125-144-A)?
- [ ] Decisão constritiva localizada por fls. e classificada (caput: instrumento/produto/proveito × equivalente por valor — CP 91, §1º)?
- [ ] Competência conferida (art. 2º, III — federal × estadual; conexão com o antecedente)?
- [ ] **Dossiê de licitude fechado, bem a bem**, com planilha de correspondência documento → bem → valor?
- [ ] **Planilha do excesso** montada (total constrito × produto/proveito estimado)?
- [ ] Equivalência (CP 91, §1º) atacada quando o alvo é patrimônio lícito (produto não localizado/exterior)?
- [ ] Terceiro/meação/cotitularidade individualizados (fração, cadeia dominial, boa-fé — art. 7º)?
- [ ] Desbloqueio instruído **rubrica a rubrica** com extratos legendados?
- [ ] Verbas de subsistência e honorários lícitos pedidos expressamente?
- [ ] Pedidos **sucessivos** (integral → parcial → administração → subsistência → suspensão do 4º-A)?
- [ ] Ofícios de baixa (Sisbajud/Renajud/CNIB/registro) requeridos expressamente?
- [ ] Precedentes citados **verificados** (nada de memória — Citation Gate)?

## Lembretes finais

- **Prova primeiro, tese depois:** na lavagem, a liberação do §2º depende do **dossiê de origem lícita** — retórica sobre a denúncia é para o mérito, não para o incidente.
- **Liberação parcial sempre:** libere o que é inequívoco e ataque o excedente — tudo pelo §2º, que só admite manter o "necessário e suficiente"; não jogue fora o certo por causa do duvidoso.
- **Excesso de constrição é a tese que mais liberta patrimônio** — planilha sempre, comparando constrito × proveito estimado.
- **Terceiro de boa-fé e meação** têm ressalva no art. 7º — individualize fração e cadeia dominial; titularidade formal não presume laranja.
- **Administração vence bloqueio estéril** (arts. 5º e 6º; conservação pelo art. 4º, §3º) — ofereça o titular como depositário e afaste o pretexto da alienação antecipada (art. 4º, §1º; 4º-A).
- **Alienação antecipada é corrida contra o leilão** — impugnação imediata e efeito suspensivo.
- **Recurso do incidente: apelação (CPP 593, II)** — não RESE; incidente corre em apenso, paralelo ao mérito.
- Toda a entrega é **rascunho técnico para revisão humana obrigatória**; precedentes só entram verificados.

## Apoie-se em

- **Agente `resumo-processo`** — localizar a decisão constritiva, os apensos das medidas, os extratos de bloqueio e o valor do produto/proveito estimado nos autos (alimenta a planilha do excesso e a tabela de licitude); combine com a skill `ocr-autos-pdf` nos autos digitalizados.
- **Agente `jurisprudencia-stj-stf`** — precedentes atuais dos pontos disputados: alcance da inversão do ônus no §2º, impenhorabilidade frente ao produto de crime, honorários de origem lícita, recurso contra a decretação e contornos da equivalência do §1º — tudo entra como [NÃO VERIFICADO] até o gate.
- **Agente `lei-e-sumula`** — conferir a **redação atual** dos arts. 4º, 4º-A, 4º-B, 5º, 6º e 7º da Lei 9.613/98 antes de transcrever (dispositivos alterados por leis posteriores).
- **Best-practice `peticao-criminal`** — estrutura, tom e técnica das peças.
- **Best-practice `defesa-crimes-tributarios`** — quando a lavagem vem acoplada a antecedente fiscal: efeito da extinção da punibilidade do antecedente sobre a causa da garantia e interface com o processo administrativo.
- **Agente `verificador-citacoes`** (best-practice `verificacao-citacoes`) — Citation Gate obrigatório: nenhum julgado citado de memória; o que não for confirmado sai da peça ou recebe [NÃO VERIFICADO].
- **Skill `levantamento-medidas-assecuratorias`** — o regime **geral** do CPP (arts. 125-144-A): planilha do excesso, embargos, desbloqueio rubrica a rubrica e recursos — moldura subsidiária que esta skill especializa para a lavagem.
- **Skill `defesa-lavagem-capitais`** — o **mérito** da imputação (justa causa, atipicidade, dolo, cegueira deliberada) e a tese T8 (liberação de bens) que este incidente instrumentaliza como trilha paralela.
- **Skill `restituicao-coisas-apreendidas`** — o instituto vizinho da coisa apreendida para prova (CPP 118-124), quando o bem não foi sequestrado, mas apreendido.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — **sempre**: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
