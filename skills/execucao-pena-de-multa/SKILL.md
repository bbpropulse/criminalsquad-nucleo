---
name: execucao-pena-de-multa
description: >-
  Use ao atuar na execução e extinção da pena de multa criminal — natureza de dívida de valor,
  competência do Juízo da Execução após a ADI 3.150, cálculo e revisão do dia-multa por
  hipossuficiência, parcelamento, prescrição da multa e o impacto do (não) pagamento na extinção da
  punibilidade e nos benefícios da execução. Gatilhos: pena de multa, dia-multa, execução da multa
  penal, execução fiscal da multa, ADI 3.150… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-pena-de-multa"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-pena-de-multa", "execucao pena", "pena multa"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Execução e Extinção da Pena de Multa (arts. 49-52 e 51 do CP; arts. 164-170 da LEP)

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

Esta skill orienta a atuação na **fase de execução da pena de multa** criminal e na **extinção da punibilidade** a ela ligada: apuração e revisão do dia-multa, competência para executá-la, parcelamento, prescrição própria da multa e — o ponto mais sensível — se o **não pagamento** obsta a extinção da pena, a progressão e outros benefícios. É a multa como **sanção penal autônoma** (CF, art. 5º, XLVI, "c"), não como custa ou taxa.

> **Lição central:** o erro que mais custa ao cliente é tratar a multa como mero débito irrelevante ou, no oposto, aceitar que o inadimplemento **impeça automaticamente** a extinção da pena ou a progressão. Depois da **ADI 3.150 (STF)** a multa mudou de mãos (passou a ser executada, em regra, pela Fazenda/PGE), mas **continua sendo pena** — e há tese firme de que o inadimplente **hipossuficiente** não pode ser prejudicado nos benefícios da execução. **Classifique primeiro** o estágio (multa isolada, cumulada com pena privativa já extinta, ou pendente durante a execução) e a **capacidade econômica** do apenado antes de qualquer requerimento.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 51 do CP** (alterado pela **Lei 13.964/2019 — Pacote Anticrime**, que suprimiu a antiga conversão em prisão e definiu a multa como dívida de valor executável) e dos **arts. 49-52 do CP** e **164-170 da LEP**. Confira também a evolução da **ADI 3.150**, do **Tema 931 do STF** e das súmulas correlatas via a skill `jurisprudencia-stj-stf` antes de fundamentar. Súmula 693/STF trata de HC contra pena de multa — confirmar alcance e redação. A base desta skill é a redação pós-Lei 13.964/19.

## Base legal

- **Art. 49 do CP** — natureza e forma da multa: sistema de **dias-multa** (mínimo 10, máximo 360 dias-multa); valor do dia-multa entre **1/30 e 5×** o salário mínimo vigente ao tempo do fato (§1º); atualização monetária na execução (§2º).
- **Art. 50 do CP** — pagamento em até 10 dias após o trânsito; possibilidade de **parcelamento** a requerimento e conforme circunstâncias; desconto em vencimentos/salário nos casos do §1º.
- **Art. 51 do CP (red. Lei 13.964/19)** — transitada em julgado, a multa é considerada **dívida de valor**, aplicando-se as normas da legislação relativa à dívida ativa da Fazenda Pública, **inclusive quanto às causas interruptivas e suspensivas da prescrição**. Não há mais conversão da multa em prisão.
- **Art. 52 do CP** — sobrestamento da execução da multa se sobrevém ao condenado doença mental.
- **Arts. 164-170 da LEP (Lei 7.210/84)** — procedimento de cobrança da multa no juízo da execução (redação original, hoje relida à luz da ADI 3.150).
- **Art. 118, §1º, da LEP** — a regressão/óbices ligados a obrigações da execução; conferir se e como a multa se insere.
- **ADI 3.150/STF** — definiu a **legitimidade prioritária do Ministério Público** para a execução da multa perante a vara de execução penal e, subsidiariamente, a atuação da **Fazenda Pública** (execução fiscal). [NÃO VERIFICADO — conferir o exato dispositivo, a modulação e a redação da tese via `jurisprudencia-stj-stf`.]
- **Tema 931 do STF** — repercussão geral sobre multa e extinção da punibilidade/óbice a benefícios. [NÃO VERIFICADO — conferir número do tema, tese fixada e alcance via `jurisprudencia-stj-stf` antes de citar.]

## Natureza jurídica e a virada da ADI 3.150

A pena de multa é **sanção penal** imposta na sentença (art. 5º, XLVI, "c", CF), distinta da reparação civil e das custas. Historicamente, o inadimplemento levava à **conversão em prisão** — regra **revogada** pela Lei 9.268/96, que a transformou em dívida de valor. A **Lei 13.964/19** reescreveu o art. 51 mantendo a natureza de dívida de valor e mandando aplicar as normas da dívida ativa, **inclusive** quanto à prescrição.

> **Ponto-chave (competência):** antes da ADI 3.150 discutia-se se a multa seria executada pela Fazenda (como dívida ativa) ou pelo juízo penal. O STF, na **ADI 3.150**, firmou a legitimidade **prioritária do Ministério Público** para a execução perante o **juízo da execução penal**, sem retirar da multa a natureza penal, e admitindo a atuação **subsidiária da Fazenda Pública** (execução fiscal) quando o MP se mantiver inerte. **Confirme a tese exata e a modulação via `jurisprudencia-stj-stf`** — a redação prática varia entre tribunais.

## Cálculo e revisão do dia-multa (art. 49 do CP)

A multa tem **dupla operação**:
1. **Quantidade de dias-multa** (10 a 360) — fixada com base na **culpabilidade** e nas circunstâncias do art. 59 do CP (fase da dosimetria, não da execução).
2. **Valor de cada dia-multa** (1/30 a 5× o salário mínimo) — fixado com atenção à **situação econômica do réu** (art. 60 do CP).

> **Tese de revisão por hipossuficiência.** O art. 60 do CP e o art. 49, §1º, impõem que o valor do dia-multa reflita a **capacidade econômica** do condenado. Fixado o valor em patamar incompatível com a pobreza comprovada do apenado, cabe pleitear a **redução ao piso (1/30 do salário mínimo)**, e, ainda assim, o parcelamento (art. 50) — sem que o inadimplemento involuntário gere qualquer óbice na execução. O art. 60, §1º, do CP autoriza a **elevação até o triplo** quando o máximo é ineficaz por insuficiência à situação econômica — o inverso (redução ao mínimo) é o vetor da defesa.

## Parcelamento e forma de pagamento (art. 50 do CP)

- Requerimento de **parcelamento** ao juízo (ou à autoridade executante), demonstrando a impossibilidade de pagamento integral em 10 dias.
- **Desconto em salário/vencimentos** possível nos limites do art. 50, §1º e §2º — sem privar o condenado e a família do necessário à subsistência.
- Sempre instruir com **prova de hipossuficiência** (declaração, CadÚnico, folha de rendimentos, gratuidade já deferida).

## Prescrição da pena de multa — o ponto técnico decisivo

A prescrição da multa **não segue** um regime único, e é aqui que se ganham (ou perdem) execuções:

- **Multa isoladamente cominada ou aplicada** → prescreve em **2 anos** (art. 114, I, do CP).
- **Multa cumulada com pena privativa de liberdade** → prescreve no **mesmo prazo** da pena privativa (art. 114, II, do CP) — segue o prazo da pena maior.
- **Após o art. 51 (red. Lei 13.964/19):** transitada em julgado, aplicam-se as **causas interruptivas e suspensivas da prescrição** da dívida ativa. Há **controvérsia** sobre se, na execução, a prescrição passa a reger-se pela LEF/CTN (quinquenal, com as interrupções da dívida ativa) ou se permanece a do art. 114 do CP. **Confirme a orientação atual do STJ/STF via `jurisprudencia-stj-stf`** — é tema em movimento e sensível à data do fato (lei mais benéfica, CF, art. 5º, XL).

> **Tese defensiva (forte):** decorrido o prazo do art. 114 do CP sem execução válida da multa, requerer a **declaração de prescrição da pretensão executória da multa** e, por consequência, a **extinção da punibilidade** quanto a ela — removendo eventual óbice a benefícios.

## Inadimplemento da multa × extinção da punibilidade e benefícios

Este é o núcleo da skill. Três cenários:

1. **Pena privativa cumprida/extinta + multa pendente.** O STF firmou que, **em regra**, a pena de multa **é autônoma** e o seu não pagamento **impede a extinção da punibilidade** — mas com a **ressalva** do apenado **comprovadamente hipossuficiente**, para quem o inadimplemento **não obsta** a extinção. **Tese:** demonstrada a impossibilidade de pagar, extingue-se a punibilidade ainda com multa em aberto. [Alcance e redação da tese: conferir Tema 931 / ADI 3.150 via `jurisprudencia-stj-stf` — NÃO VERIFICADO.]
2. **Multa pendente durante a execução (progressão, livramento, indulto).** A multa **não pode**, por si só, obstar a **progressão de regime** ou o **livramento** do apenado **hipossuficiente** (é vedada a prisão por dívida — CF, art. 5º, LXVII). **Tese:** exigir prova da capacidade de pagar antes de negar o benefício; inadimplemento involuntário não é fundamento idôneo. Ver também `execucao-progressao-regime` e `execucao-livramento-condicional`, que tocam a multa como possível óbice.
3. **Pagamento da multa como causa extintiva.** O **pagamento integral** (ou o parcelamento cumprido) extingue a punibilidade quanto à multa; requerer a **certidão de extinção** e a baixa da inscrição em dívida ativa.

## Teses (defesa) e contra-teses

➡️ **Tese 1 — Hipossuficiência afasta o óbice.** O inadimplemento **involuntário** da multa, por apenado comprovadamente pobre, **não impede** a extinção da punibilidade nem a progressão/livramento (vedação constitucional à prisão por dívida; art. 51 do CP não ressuscitou a conversão em prisão). **Contra-tese (acusação):** a multa é pena autônoma e seu não pagamento, quando há capacidade econômica, obsta a extinção — cabe ao apenado provar a hipossuficiência.

➡️ **Tese 2 — Prescrição da multa.** Decorrido o prazo do art. 114 do CP (2 anos na multa isolada; prazo da pena privativa na cumulada) sem execução válida, declara-se a **prescrição da pretensão executória** da multa. **Contra-tese:** após a Lei 13.964/19, a prescrição segue a dívida ativa (interrupções/suspensões próprias), afastando a fluência do prazo penal — **campo controvertido, conferir jurisprudência atual.**

➡️ **Tese 3 — Revisão do dia-multa.** Valor fixado acima da capacidade econômica → **redução ao piso** (1/30 do salário mínimo, art. 49, §1º) e **parcelamento** (art. 50). **Contra-tese:** a revisão do valor é matéria da sentença (coisa julgada); na execução só se admite a atualização monetária e o parcelamento.

➡️ **Tese 4 — Ilegitimidade/competência.** Discutir quem executa (MP no juízo da execução × Fazenda na execução fiscal) conforme a **ADI 3.150** — arguir a ilegitimidade do exequente ou o **bis in idem** de cobranças paralelas. **Contra-tese:** legitimidade prioritária do MP e subsidiária da Fazenda, ambas admitidas.

## Estrutura da petição (extinção/prescrição/revisão da multa)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento nos arts. 49 a 51 do Código Penal
e nos arts. 164 a 170 da Lei de Execução Penal, requerer

[A EXTINÇÃO DA PUNIBILIDADE / A DECLARAÇÃO DE PRESCRIÇÃO DA PENA DE MULTA /
 A REVISÃO E O PARCELAMENTO DO DIA-MULTA]

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O apenado foi condenado à pena de [PENA PRIVATIVA], já [CUMPRIDA/EXTINTA em DATA],
e à pena de multa de [Nº] dias-multa, no valor unitário de [FRAÇÃO DO SALÁRIO
MÍNIMO], perfazendo [VALOR ATUAL], ainda pendente de pagamento.

O apenado é pessoa comprovadamente hipossuficiente, conforme [gratuidade
deferida / CadÚnico / declaração de pobreza / folha de rendimentos] em anexo,
não dispondo de meios para o pagamento integral.


II — DO DIREITO

a) [Da prescrição da pena de multa — art. 114 do CP]
Tratando-se de multa [isoladamente cominada / cumulada com pena privativa], o
prazo prescricional é de [2 anos (art. 114, I) / o mesmo da pena privativa
(art. 114, II)]. Decorrido tal prazo desde [MARCO] sem execução válida, impõe-se
a declaração da prescrição da pretensão executória.

b) [Da hipossuficiência e da vedação à prisão por dívida]
O não pagamento decorre de comprovada impossibilidade econômica, e não de recusa.
O art. 51 do CP, na redação da Lei 13.964/19, não restabeleceu a conversão da
multa em prisão, sendo vedada a prisão por dívida (CF, art. 5º, LXVII). Logo, o
inadimplemento involuntário não pode obstar a extinção da punibilidade nem os
benefícios da execução.
[Conferir a tese aplicável — Tema 931 / ADI 3.150 — via jurisprudencia-stj-stf.]

c) [Da revisão do dia-multa e do parcelamento — arts. 49, §1º, 50 e 60 do CP]
O valor unitário fixado é incompatível com a situação econômica do apenado,
cabendo a sua redução ao piso legal (1/30 do salário mínimo) e, subsidiariamente,
o parcelamento em [Nº] parcelas.


III — DO PEDIDO

Diante do exposto, requer:

a) [a declaração da PRESCRIÇÃO da pretensão executória da pena de multa e a
   consequente EXTINÇÃO DA PUNIBILIDADE (art. 114 do CP), com baixa da inscrição
   em dívida ativa;]
b) [subsidiariamente, o reconhecimento de que a hipossuficiência afasta o óbice
   à extinção da punibilidade e aos benefícios da execução;]
c) [subsidiariamente, a REVISÃO do valor do dia-multa ao piso legal e o
   PARCELAMENTO do débito;]
d) a concessão da gratuidade e a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA PRIVATIVA], [Nº] dias-multa, [FRAÇÃO DO SALÁRIO MÍNIMO], [VALOR ATUAL], [MARCO] prescricional, [Nº] parcelas, [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. Cálculo de liquidação da multa atualizado (dias-multa × valor unitário × correção).
3. Prova de hipossuficiência (gratuidade deferida, CadÚnico, declaração de pobreza, folha de rendimentos).
4. Certidão de trânsito em julgado e da situação da pena privativa (cumprida/extinta).
5. Certidão da inscrição em dívida ativa / andamento da execução da multa (para aferir prescrição e legitimidade).

## Roteiro de análise (defesa)

1. **Classificar o estágio da multa** — isolada; cumulada com pena privativa ainda em curso; cumulada com pena privativa já extinta. Isso define a prescrição (art. 114) e o cenário de óbice.
2. **Aferir a prescrição** — 2 anos (multa isolada, art. 114, I) ou prazo da pena privativa (cumulada, art. 114, II); depois, checar o regime pós-art. 51/dívida ativa e a lei mais benéfica pela data do fato.
3. **Provar a hipossuficiência** — é o eixo de quase todas as teses (afasta óbice, embasa revisão e parcelamento).
4. **Revisar o dia-multa** — pleitear redução ao piso (1/30) e parcelamento se o valor for incompatível.
5. **Verificar a competência/legitimidade do exequente** — MP no juízo da execução × Fazenda na execução fiscal (ADI 3.150); coibir cobrança dupla.
6. **Pedir a extinção/baixa** quando pago, parcelado-cumprido ou prescrito, com certidão e baixa na dívida ativa.
7. **Conferir vigência** de art. 51 do CP, Tema 931, ADI 3.150 e súmulas via `jurisprudencia-stj-stf` antes de peticionar.

## Súmulas e precedentes (conferir vigência via `jurisprudencia-stj-stf`)

- **Art. 114 do CP** — prazos da prescrição da multa (2 anos na isolada; prazo da pena privativa na cumulada). **Dispositivo de lei — citar livremente.**
- **CF, art. 5º, LXVII** — vedação à prisão por dívida (base da tese anti-óbice). **Dispositivo — citar livremente.**
- **ADI 3.150/STF** — legitimidade prioritária do MP (juízo da execução) e subsidiária da Fazenda (execução fiscal) para executar a multa. **[NÃO VERIFICADO — conferir tese exata, modulação e data via `jurisprudencia-stj-stf` antes de citar.]**
- **Tema 931 do STF (repercussão geral)** — multa, extinção da punibilidade e óbice a benefícios; ressalva do hipossuficiente. **[NÃO VERIFICADO — conferir número do tema e redação da tese antes de citar.]**
- **Súmula 693/STF** — cabimento de HC em face de pena de multa. **[NÃO VERIFICADO — conferir redação e alcance antes de citar.]**
- Eventuais julgados do STJ sobre prescrição da multa pós-Lei 13.964/19 e sobre óbice à progressão pela multa: **não citar de memória** — passar pelo gate `jurisprudencia-stj-stf`.

> **Citation Gate.** Cite livremente os **dispositivos de lei** (CP, LEP, CF). Para **qualquer** número de ADI, tema de repercussão geral, súmula, HC, REsp ou informativo, o item acima está marcado **[NÃO VERIFICADO]** e deve ser confirmado via `jurisprudencia-stj-stf`. Melhor faltar o precedente do que citar julgado inexistente — ensine a **tese e o dispositivo**, não o número do acórdão de que não se tem certeza absoluta.

## Erros comuns / checklist final

- [ ] Estágio da multa **classificado** (isolada × cumulada; pena privativa em curso × extinta)?
- [ ] Prazo prescricional correto — **art. 114, I (2 anos)** ou **II (prazo da pena privativa)** — e regime pós-art. 51 conferido?
- [ ] **Data do fato** verificada para aplicar a **lei mais benéfica** (art. 5º, XL, CF) ao regime prescricional?
- [ ] **Hipossuficiência comprovada** por documento (não basta alegar)?
- [ ] Não se está aceitando que o inadimplemento **involuntário** obste extinção/progressão/livramento?
- [ ] Não se está pleiteando **conversão da multa em prisão** (revogada) nem admitindo prisão por dívida (art. 5º, LXVII)?
- [ ] Revisão do dia-multa pedida ao **piso (1/30)** e **parcelamento** quando cabível?
- [ ] Legitimidade do exequente conferida (**MP × Fazenda**, ADI 3.150) e **cobrança dupla** afastada?
- [ ] Pedido de **certidão de extinção** e **baixa na dívida ativa** formulado quando pago/prescrito?
- [ ] Todos os **precedentes [NÃO VERIFICADO]** passaram por `jurisprudencia-stj-stf` antes de irem à peça?

**Anti-padrões (evitar):**
- Tratar a multa como custa/taxa irrelevante — é **pena** (art. 5º, XLVI, "c", CF).
- Aceitar que o não pagamento **automaticamente** impeça a extinção da punibilidade sem aferir a **capacidade econômica**.
- Cogitar conversão da multa em prisão (revogada desde 1996; não retornou com a Lei 13.964/19).
- Confundir a prescrição da multa (art. 114) com a da pena privativa sem checar o cenário (isolada × cumulada).
- Citar número de ADI, tema ou súmula de memória — tudo pelo gate `jurisprudencia-stj-stf`.
- Deixar de comprovar documentalmente a hipossuficiência (o eixo probatório de quase toda tese aqui).

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da peça e da tese; a decisão e a assinatura são sempre do **advogado responsável** (CED/OAB, art. 2º; EAOAB).
- **Verificação de citações inegociável.** Nenhuma súmula, ADI, tema de repercussão geral ou acórdão vai à peça sem passar pela skill `jurisprudencia-stj-stf` — há sanções reais por jurisprudência inventada por IA.
- **Ética por polo.** Advocacia: OAB + Provimento 205/2021. Ministério Público: CNMP. Defensoria: LC 80/94. Esta skill é escrita da perspectiva da **defesa/apenado**; adapte o enquadramento ético ao polo do usuário.
- **Sigilo e LGPD.** Dados do apenado e da execução nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
