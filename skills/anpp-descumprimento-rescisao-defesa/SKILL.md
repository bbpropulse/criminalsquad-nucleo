---
name: anpp-descumprimento-rescisao-defesa
description: >-
  Use ao defender o investigado na fase de EXECUÇÃO do Acordo de Não Persecução Penal (ANPP) diante
  de alegado DESCUMPRIMENTO — para evitar/impugnar a RESCISÃO (art. 28-A, §10, CPP), sustentar
  descumprimento justificado, exigir contraditório prévio, invocar proporcionalidade e cumprimento
  substancial, ou requerer a EXTINÇÃO DA PUNIBILIDADE (§13). Gatilhos: descumprimento de ANPP,
  rescisão do acordo, prestação pecuniária não… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, anpp, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["anpp-descumprimento-rescisao-defesa", "anpp descumprimento", "rescisao defesa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-anpp-descumprimento-rescisao-defesa"]
---

# ANPP — descumprimento, rescisão e defesa

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

Esta skill orienta a **defesa técnica na fase de execução do Acordo de Não Persecução Penal (ANPP)** — o momento **posterior à homologação**, em que o investigado está cumprindo as condições e surge uma alegação de **descumprimento**. Aqui a peça já não é a negociação do acordo (isso é da skill `anpp`), mas a **defesa contra a rescisão** e a **busca da extinção da punibilidade**. É o terreno onde um acordo bem negociado pode ser perdido — ou salvo — por um único mês de prestação pecuniária em atraso.

> **Lição central:** rescisão de ANPP **não é automática nem discricionária pura**. O art. 28-A, §10, do CPP diz que o *descumprimento* autoriza o MP a comunicar o juízo para rescisão e posterior denúncia — mas antes de rescindir há **contraditório** (devido processo) e **proporcionalidade**: pergunte sempre (1) o descumprimento é **real e injustificado**, ou há impossibilidade superveniente/força maior?; (2) é **substancial** ou **mínimo/reparável** (uma parcela atrasada não é o mesmo que abandono do acordo)?; (3) o investigado foi **ouvido** antes? Rescindir sem esse filtro é nulo. O eixo da defesa é impedir que o *inadimplemento pontual* vire *processo penal com a confissão já nos autos*.

> **Cautela de vigência (obrigatória antes de citar):** o art. 28-A foi introduzido pela **Lei 13.964/2019** (Pacote Anticrime) e sua aplicação prática — sobretudo **a exigência de contraditório prévio à rescisão** e o **valor probatório da confissão após acordo rescindido** — depende de **precedentes específicos do STF/STJ** e de orientações do CNMP/2ª CCR que evoluem. **Nada de tese de memória:** confirme teor, número e vigência via `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`) antes de levar qualquer súmula/acórdão à peça. Na dúvida sobre um número de julgado, **omitir vence inventar**.

## Base legal

- **Art. 28-A, §10, CPP** — **descumprimento** de quaisquer das condições estipuladas: o Ministério Público **comunicará ao juízo**, para fins de **RESCISÃO** do acordo e **posterior oferecimento de denúncia**. É a norma-chave: a rescisão passa pelo **juízo** (não é ato unilateral consumado do MP) e desemboca na retomada da persecução. **A rescisão por descumprimento é exclusivamente deste parágrafo.**
- **Art. 28-A, §11, CPP** — o **descumprimento** do ANPP pelo investigado **também poderá ser utilizado pelo MP como justificativa para o eventual não oferecimento de suspensão condicional do processo** (sursis processual, art. 89 da Lei 9.099/95). É um **efeito colateral** do descumprimento, distinto da rescisão: mesmo retomada a persecução, o histórico de inadimplemento pode ser oposto pelo MP para negar o benefício da suspensão. Relevante ao dimensionar o custo de descumprir.
- **Art. 28-A, §12, CPP** — a **celebração e o cumprimento** do ANPP **não constarão de certidão de antecedentes criminais**, **salvo** para o fim de **impedir novo ANPP no prazo do §2º, III** (ou seja, registro reservado para aferir o interstício de 5 anos). Relevante para dimensionar o **efeito colateral** de aceitar/descumprir.
- **Art. 28-A, §13, CPP** — **cumprimento integral** do acordo: o juízo competente **decretará a EXTINÇÃO DA PUNIBILIDADE**. É o resultado que a defesa persegue; toda a estratégia de execução mira aqui.
- **Devido processo e ampla defesa (CF, art. 5º, LIV e LV)** — a rescisão é ato que **agrava** a situação do investigado (retoma a ação penal); atrai **contraditório prévio** e decisão **fundamentada** (CF, art. 93, IX). Este é o alicerce constitucional da tese de nulidade da rescisão sem oitiva.
- **Proporcionalidade** — princípio implícito que baliza a resposta ao inadimplemento: rescindir por **descumprimento mínimo**, quando cabível renegociar/prorrogar ou aproveitar o já cumprido, é **desproporcional**.

> **Leitura conjunta:** o §10 (rescisão por descumprimento) e o §13 (extinção da punibilidade por cumprimento integral) são as **duas saídas** da execução; o §11 é um **efeito adicional** do descumprimento (justificativa do MP para negar sursis processual), não uma via de rescisão. Toda a defesa consiste em **empurrar o caso para o §13** e **barrar o §10** — seja negando o descumprimento, seja justificando-o, seja demonstrando que ele não é grave o bastante para romper o acordo.

## Ciclo de vida do ANPP homologado — onde a defesa atua

```
HOMOLOGAÇÃO (§4º-7º)
        │
   CUMPRIMENTO das condições (§1º, I-V)  ──────────────► §13  EXTINÇÃO DA PUNIBILIDADE  ✅
        │                                                    (meta da defesa)
        │  alegação de DESCUMPRIMENTO
        ▼
   [1] CONTRADITÓRIO PRÉVIO (defesa atua aqui)  ◄── nulidade se pulado
        │
        ├── descumprimento JUSTIFICADO / MÍNIMO / SANÁVEL ─► renegociar, prorrogar, purgar a mora
        │
        └── descumprimento INJUSTIFICADO e SUBSTANCIAL ──► §10 RESCISÃO ─► DENÚNCIA
                                                               (com a confissão já nos autos;
                                                                § 11: pode obstar futuro sursis)
```

A janela útil de defesa é o **passo [1]**: intimado o investigado (ou notificado o MP do inadimplemento), **antes** de o juízo rescindir. Perder essa janela é deixar a rescisão se consumar e ter de reverter em recurso/HC.

## Catálogo de teses defensivas (contra a rescisão)

1. **Descumprimento justificado — impossibilidade econômica superveniente.** A prestação pecuniária ou a reparação do dano tornou-se inviável por **fato posterior** (perda de emprego, doença, redução de renda comprovada). Não há descumprimento culpável quando falta capacidade; cabe **renegociação/prorrogação/parcelamento**, não rescisão. Documentar a alteração da capacidade econômica.
2. **Caso fortuito / força maior.** Evento imprevisível e inevitável impediu o cumprimento (internação, calamidade, obstáculo alheio à vontade). Afasta a mora culposa.
3. **Contraditório prévio à rescisão (nulidade).** A rescisão sem **oitiva do investigado** viola o devido processo (CF, art. 5º, LIV/LV). Requerer a **anulação** da decisão de rescisão proferida *inaudita altera parte* e a **abertura de prazo** para justificar.
4. **Proporcionalidade — descumprimento mínimo não rescinde.** Uma parcela atrasada, um pequeno atraso na entrega de comprovante ou o cumprimento de **90% das condições** não equivale a abandono do acordo. Sustentar a **preservação do acordo** com **purgação da mora** ou prorrogação de prazo.
5. **Aproveitamento das condições já cumpridas.** As condições integralmente adimplidas (serviço à comunidade prestado, dano reparado, bens renunciados) **não se apagam**; devem ser **computadas/creditadas** — inclusive para dosar eventual pena futura, se a persecução for retomada, e para afastar a alegação de descumprimento total.
6. **Cumprimento substancial → extinção (§13).** Quando o núcleo do acordo foi cumprido e resta parcela ínfima, requerer diretamente a **extinção da punibilidade**, ou a extinção após purgação do saldo — a finalidade do acordo (reprovação e prevenção suficientes) foi atingida.
7. **Valor da confissão após rescisão.** A **confissão** prestada como requisito do ANPP foi feita **no contexto e sob a premissa do acordo**. Rescindido este, discutir o **peso/valor probatório** dessa confissão na ação penal retomada — matéria sensível e casuística, a **conferir na jurisprudência atual** (**[NÃO VERIFICADO]** — `jurisprudencia-stj-stf`). Não presumir que a confissão vale como prova plena e autônoma.
8. **Ausência de intimação pessoal/regular para cumprir.** Se o investigado não foi **regularmente cientificado** do prazo, da forma de pagamento ou de eventual mudança de condição, não há mora — o descumprimento pressupõe ciência inequívoca do dever.
9. **Descumprimento imputado a crime superveniente — cabimento da rescisão a conferir.** Quando a rescisão se apoia não no inadimplemento das condições pactuadas, mas em **denúncia ou condenação por outro crime** na vigência do acordo, atenção: o **art. 28-A não arrola essa hipótese como causa autônoma de rescisão** (a rescisão por descumprimento é do §10, ligada às *condições estipuladas*). Se o MP invoca a superveniência de crime, exigir a **base legal específica** e conferir se a leitura jurisprudencial admite tal fundamento e se exige **trânsito em julgado** (presunção de inocência — CF, art. 5º, LVII) ou basta o mero recebimento da denúncia (**[NÃO VERIFICADO]** — `jurisprudencia-stj-stf`).
10. **Fundamentação deficiente da rescisão.** Decisão que rescinde sem enfrentar as justificativas apresentadas é **nula por falta de fundamentação** (CF, art. 93, IX).

## Roteiro tático — o que fazer ao surgir a alegação de descumprimento

1. **Reconstituir a linha do tempo do cumprimento.** Levantar, condição por condição (§1º, I-V): o que era devido, prazos, o que foi efetivamente feito, comprovantes. Separe **fato** (o que ocorreu) de **prova** (o que se documenta) de **tese** (como se qualifica juridicamente).
2. **Classificar o descumprimento.** É **total ou parcial**? **Definitivo ou temporário/sanável**? **Culposo ou justificado**? Essa classificação define qual tese (do catálogo acima) governa.
3. **Reunir a prova da justificativa.** Documentos da alteração de capacidade econômica, atestados, registros do fato imprevisível — a **impossibilidade superveniente** precisa ser demonstrada, não afirmada.
4. **Requerer o contraditório e a solução preservadora do acordo.** Na petição ao juízo (ou na resposta à comunicação do MP): (a) impugnar a rescisão automática; (b) demonstrar justificativa/proporcionalidade; (c) **pedir renegociação, prorrogação de prazo ou parcelamento** da parcela em aberto; (d) subsidiariamente, **purgar a mora** e requerer a continuidade e, ao final, a **extinção (§13)**.
5. **Sequenciar os pedidos do mais forte ao subsidiário.** Ex.: (i) inexistência de descumprimento; (ii) descumprimento justificado — sem rescisão; (iii) descumprimento mínimo — proporcionalidade, prorrogação; (iv) purgação da mora e extinção; (v) se rescindir, nulidade por ausência de contraditório; (vi) preservar a discussão sobre o valor da confissão.
6. **Timing.** Agir **antes** de a rescisão ser homologada. Se já rescindido sem oitiva, atacar por **recurso cabível** ou **habeas corpus** (constrangimento pela retomada indevida da persecução) — conferir a via adequada ao caso concreto.
7. **Proteger o cliente do pior cenário.** Se a rescisão for inevitável, o foco migra para **minimizar o dano**: creditar as condições cumpridas, limitar o uso da confissão, antecipar o risco de o descumprimento ser oposto pelo MP para **negar futuro sursis processual (§11)** e preparar a **defesa na ação penal retomada** (encaminhar à skill de defesa por nicho).

## Contra-teses da acusação / MP (antecipar)

- **Descumprimento inequívoco e reiterado** (várias parcelas não pagas, serviço não iniciado sem justificativa) → rescisão como consequência do §10.
- **Ausência de comprovação da impossibilidade** — mera alegação de dificuldade financeira, sem prova da alteração de capacidade.
- **Ciência do dever** — investigado devidamente intimado das condições e dos prazos na própria homologação.
- **Confissão como prova válida** — o MP sustentará que a confissão do §caput integra os autos e pode ser valorada na ação penal retomada (ponto a **enfrentar**, não a conceder — conferir posição atual).
- **Descumprimento oposto para negar sursis (§11)** — o MP pode invocar o inadimplemento como justificativa para o **não oferecimento da suspensão condicional do processo** na persecução retomada; antecipar e disputar a proporcionalidade dessa recusa.
- **Rescisão por crime superveniente** — o MP pode sustentar que a prática de outro crime na vigência frustra a finalidade do acordo; exigir dele a **base legal específica**, já que o §10 fala em descumprimento das *condições estipuladas* e o art. 28-A não tipifica o crime superveniente como causa autônoma de rescisão.

A defesa **ataca cada uma na origem**: exige do MP a demonstração de que o descumprimento é **injustificado e grave**, que houve **ciência regular**, e que a rescisão observou **contraditório** e **proporcionalidade** — nada disso se presume.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** dispositivos de lei (art. 28-A e §§ do CPP) podem ser citados livremente. **Nenhuma súmula, tema ou acórdão** sobre execução/rescisão de ANPP vai à peça sem passar por `jurisprudencia-stj-stf`. O art. 28-A é de **2020** e a jurisprudência sobre sua fase de execução ainda **está em consolidação** — há alto risco de citar julgado inexistente ou superado.

Pontos que **dependem de precedente específico** — trate como **[NÃO VERIFICADO]** até conferir:

- **Necessidade de contraditório prévio à rescisão** do ANPP — existência, teor e alcance do entendimento (STF/STJ) — **[NÃO VERIFICADO]**.
- **Valor probatório da confissão** prestada para o ANPP **após a rescisão** do acordo na ação penal retomada — **[NÃO VERIFICADO]**.
- **Rescisão fundada em crime superveniente** (fora das condições do §10): cabimento e exigência ou não de **trânsito em julgado** — **[NÃO VERIFICADO]**.
- **Proporcionalidade / possibilidade de renegociação** em descumprimento parcial — orientações do **CNMP/2ª CCR** e precedentes — **[NÃO VERIFICADO]** (conferir também em **fonte oficial atual**).

> Prefira, na peça, **ensinar a tese e ancorar no dispositivo** (art. 28-A, §§10-13, CPP; CF, art. 5º, LIV/LV/LVII) a arriscar um número de acórdão. Todo precedente entra **só depois do gate**.

## Checklist e anti-padrões

- [ ] Linha do tempo do cumprimento **reconstituída** condição a condição, com comprovantes?
- [ ] Descumprimento **classificado** (total/parcial · definitivo/sanável · culposo/justificado)?
- [ ] Há **impossibilidade superveniente / força maior** documentada?
- [ ] **Contraditório prévio** à rescisão foi assegurado — ou é caso de nulidade?
- [ ] **Proporcionalidade** invocada (descumprimento mínimo x renegociar/prorrogar/purgar a mora)?
- [ ] Condições **já cumpridas** levantadas para aproveitamento/crédito?
- [ ] Cabível pedido direto de **extinção (§13)** por cumprimento substancial + purgação do saldo?
- [ ] Estratégia sobre o **valor da confissão** pós-rescisão preparada?
- [ ] Risco de o descumprimento ser oposto pelo MP para **negar sursis processual (§11)** mapeado?
- [ ] Pedidos **sequenciados** do principal ao subsidiário?
- [ ] Súmulas/precedentes **conferidos** via `jurisprudencia-stj-stf` — nada de memória?

**Anti-padrões (evitar):**
- Tratar a rescisão como **automática** — ela passa pelo juízo (§10) e exige contraditório e proporcionalidade.
- Aceitar rescisão por **descumprimento mínimo** sem sustentar renegociação/prorrogação/purgação da mora.
- Alegar impossibilidade econômica **sem prova** da alteração de capacidade.
- **Conceder** que a confissão do ANPP vale como prova plena após a rescisão, sem enfrentar o ponto.
- Deixar de **computar as condições já cumpridas**.
- Perder a **janela do contraditório** e só reagir depois da rescisão consumada.
- Citar acórdão "sobre rescisão de ANPP" **sem** passar pelo gate de jurisprudência.
- **Confundir os parágrafos:** a rescisão por descumprimento é do **§10**; a extinção da punibilidade por cumprimento integral é do **§13**; o **§11** trata do descumprimento como justificativa para negar sursis processual. Trocar §11↔§13 na peça é erro material grave.
- Aceitar sem questionar a **rescisão por crime superveniente** como se fosse causa expressa do art. 28-A — exigir do MP a base legal e conferir a leitura jurisprudencial.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB). A decisão sobre como reagir ao descumprimento é do cliente, informado.
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **Ministério Público / assistente de acusação**, a lógica se **inverte** — cabe ao MP demonstrar o **descumprimento injustificado e grave**, assegurar o **contraditório** e fundamentar a **proporcionalidade** da rescisão; as teses acima viram, então, os pontos a **provar e a observar** (rege o CNMP).
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e por `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido e do acordo (incluindo a confissão) não vão a repositório público.

## Lembretes finais

- **Rescisão não é automática** — passa pelo juízo (§10), exige **contraditório** e **proporcionalidade**.
- **Meta é o §13** (extinção da punibilidade por cumprimento integral) — toda a defesa empurra o caso para lá.
- **Não confunda os parágrafos:** §10 = rescisão por descumprimento; §11 = descumprimento como justificativa do MP para negar sursis processual; §13 = extinção da punibilidade por cumprimento integral.
- **Descumprimento justificado ou mínimo** não rompe o acordo: renegociar, prorrogar, purgar a mora.
- **Aproveite o já cumprido** — as condições adimplidas não se apagam.
- **Confissão pós-rescisão** é ponto sensível — discutir seu valor, não conceder.
- **Sem jurisprudência de memória** — execução do ANPP ainda em consolidação; confira via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a manifestação/petição, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
