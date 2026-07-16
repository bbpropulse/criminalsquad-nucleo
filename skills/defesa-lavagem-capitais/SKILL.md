---
name: defesa-lavagem-capitais
description: >-
  Use ao defender imputação de lavagem de dinheiro / lavagem de capitais (Lei 9.613/98, art. 1º) —
  autonomia x justa causa do antecedente, cegueira deliberada, autolavagem x exaurimento, ocultação
  x uso aberto do proveito, honorários maculados, RIF/COAF. Gatilhos: lavagem de dinheiro, lavagem
  de capitais, branqueamento, Lei 9.613, ocultação de bens, dissimulação, mascaramento, cegueira
  deliberada, willful…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-lavagem-capitais"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-lavagem-capitais", "defesa lavagem", "lavagem capitais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa na Imputação de Lavagem de Capitais (Lei 9.613/98)

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

Esta skill orienta a **defesa de quem é acusado de lavagem de dinheiro** (Lei 9.613/98, art. 1º): monta o **banco de teses** do instituto e a **estrutura forense** para os três veículos usuais — resposta à acusação, memoriais e habeas corpus de trancamento. O produto é sempre rascunho técnico para revisão humana.

> **Lição central:** lavagem **não é qualquer contato com dinheiro sujo**. O tipo exige (1) infração penal **antecedente** minimamente demonstrada, (2) **ato autônomo de ocultação/dissimulação** e (3) **dolo de mascarar** a origem ilícita. A defesa ataca cada um desses três pilares — a acusação que confunde lavagem com exaurimento, uso aberto ou mera negligência é a que se desmonta.

> **Interface com o antecedente fiscal:** quando a lavagem vem acoplada a crime tributário, aplique a best-practice `defesa-crimes-tributarios` (frente nº 4 e fichas TRI-006/TRI-007) — a extinção da punibilidade do antecedente **não** arrasta a lavagem (art. 2º, §1º, *in fine*). Esta skill cobre o instituto pleno; a BP cobre a interface fiscal.

## Instituto e base legal

| Dispositivo (Lei 9.613/98) | Conteúdo | Nota defensiva |
|---|---|---|
| **Art. 1º, *caput*** | Ocultar/dissimular natureza, origem, localização, disposição, movimentação ou propriedade de bens **provenientes, direta ou indiretamente, de infração penal** — pena de 3 a 10 anos e multa | Pós-Lei 12.683/2012 **não há rol taxativo**: qualquer infração penal (inclusive contravenção) serve de antecedente — mas ela precisa **existir e estar indiciada** |
| **Art. 1º, §1º** | Condutas equiparadas **"para ocultar ou dissimular"** (converter em ativos lícitos; adquirir, receber, guardar, movimentar; importar/exportar com valores falsos) | O elemento **"para ocultar"** é finalidade típica — sem dolo de mascaramento, não há subsunção |
| **Art. 1º, §2º, I** | Utilizar na atividade econômica ou financeira bens provenientes de infração penal | **Atenção:** a Lei 12.683/2012 **suprimiu** o "que sabe serem" da redação original — a acusação usa a supressão para sustentar dolo eventual. Sustente que a ciência da origem segue sendo elementar subjetiva e confira o estado da jurisprudência via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]** |
| **Art. 1º, §4º** | Aumento de 1/3 a 2/3 — forma **reiterada** ou por **organização criminosa** | Vigiar **bis in idem** quando também há denúncia pela Lei 12.850/2013 (ver skill `defesa-organizacao-criminosa`) |
| **Art. 1º, §5º** | Colaboração espontânea — redução de 1/3 a 2/3, regime **aberto ou semiaberto**, substituição por restritiva ou perdão judicial | Alternativa negocial própria da lei, cumulável com a estratégia de mérito — **não confundir** com a colaboração premiada da Lei 12.850/2013 (acordo formal homologado, regime e riscos próprios; ver skill `colaboracao-premiada`) |
| **Art. 2º, II e §1º** | **Autonomia** processual + denúncia instruída com **indícios suficientes** da infração antecedente | A autonomia **não dispensa** o lastro do antecedente — é aqui que mora a justa causa |
| **Art. 2º, III** | Competência da **Justiça Federal** (sistema financeiro, interesses da União, antecedente federal) | Erro de endereçamento anula — confira antes de protocolar |
| **Art. 2º, §2º** | **Afasta o art. 366 do CPP** — citado por edital que não comparece: o processo **segue** com defensor | Pegadinha clássica: não conte com a suspensão do processo |
| **Art. 4º e §§** | Medidas assecuratórias; liberação mediante **comprovação da licitude** da origem | Inversão prática do ônus no incidente patrimonial — prepare prova documental de origem lícita |

**Fases criminológicas** (colocação → dissimulação → integração) ajudam a narrativa, mas **não integram o tipo**: a consumação se dá com o ato de ocultar/dissimular. Não deixe a acusação transformar o modelo teórico em prova.

## O que a acusação precisa provar (e onde a defesa ataca)

| Pilar da imputação | Exigência mínima | Tese defensiva correspondente |
|---|---|---|
| **Infração antecedente** | Indícios suficientes de **existência** (materialidade) da infração produtora dos bens (art. 2º, §1º) | Inépcia / falta de justa causa; absolvição no antecedente por **inexistência do fato** ou **negativa de autoria** esvazia a lavagem |
| **Proveniência** | Bens **provenientes, direta ou indiretamente**, da infração — nexo entre o ativo e o crime | Origem lícita demonstrada; **mistura patrimonial** sem rastreamento individualizado; ausência de perícia contábil |
| **Ato de ocultação** | Conduta **autônoma** de mascaramento (interposta pessoa, estrutura societária, fracionamento) | **Uso aberto** do proveito ≠ ocultação; autolavagem exige mais que fruição (ver abaixo) |
| **Dolo** | Ciência da origem ilícita + vontade de ocultar; **não há lavagem culposa** | Ausência de dolo; limites estritos da cegueira deliberada; conduta neutra profissional |

## Banco de teses

### T1 — Falta de justa causa: a denúncia não indicia o antecedente
A autonomia do art. 2º, II, é **processual**, não probatória: a denúncia deve vir instruída com **indícios suficientes da existência da infração antecedente** (art. 2º, §1º). Denúncia que apenas rotula patrimônio de "incompatível" sem apontar **qual** infração produziu os bens é inepta (CPP, art. 41 c/c art. 395, I) e carece de justa causa (CPP, art. 395, III). Veículo natural: **HC de trancamento** ou preliminar da resposta à acusação. Delegue o exame da peça acusatória ao agente `analise-denuncia`.

### T2 — Atipicidade: uso aberto do proveito não é ocultação
Quem deposita o produto do crime **em conta própria**, compra bens **em nome próprio** e os usa **às claras** não pratica ato de mascaramento — falta o núcleo "ocultar/dissimular". A jurisprudência distingue **desfrute visível** de **ocultação**; pesquise o entendimento atual via agente `jurisprudencia-stj-stf` e marque o precedente como **[NÃO VERIFICADO]** até o gate de citações.

### T3 — Autolavagem exige ato autônomo; exaurimento não é lavagem
O Brasil **não adotou** a reserva de autolavagem: o autor do crime antecedente **pode** responder por lavagem. Mas a punição dupla só se sustenta quando há **ato novo e autônomo de mascaramento** (interposição de laranjas, estruturas societárias, conversão dissimulada) — **gastar, guardar ou movimentar** o próprio proveito é **exaurimento impunível** do antecedente, sob pena de bis in idem. É a tese central quando réu do antecedente e da lavagem são a mesma pessoa. Confirme os contornos atuais via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.

### T4 — Dolo: os limites estritos da cegueira deliberada
Não existe lavagem **culposa**. A teoria da cegueira deliberada (willful blindness) só substitui o dolo quando a acusação prova, cumulativamente: (i) representação da **alta probabilidade** da origem ilícita; (ii) **criação deliberada de barreiras** ao conhecimento; (iii) indiferença ao resultado — jamais mera negligência, ingenuidade ou dever de diligência descumprido. A defesa exige a demonstração de cada requisito e denuncia o uso da doutrina como **atalho probatório**. Cuidado: a Lei 12.683/2012 suprimiu o "que sabe serem" do §2º, I — o cabimento do dolo eventual na lavagem é disputado; confira o estado atual via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**.

### T5 — Proveniência: nexo entre o bem e a infração
"Provenientes, direta ou indiretamente" exige **rastreamento**: quando patrimônio lícito e ilícito se misturam, cabe à acusação individualizar o que provém do crime. Ausência de perícia contábil/financeira, ou laudo que apenas constata "movimentação atípica", não prova proveniência. RIF do COAF é **peça de inteligência**, não prova: verifique a licitude do compartilhamento (parâmetros do Tema 990/STF — confirmar alcance via `jurisprudencia-stj-stf`) e se houve **investigação de fato** ou mera transcrição do relatório.

### T6 — Honorários advocatícios não são lavagem
O recebimento de **honorários de boa-fé**, por serviço advocatício real e com valores compatíveis, é **conduta neutra/profissional** — criminalizá-lo inviabiliza a defesa (CF, art. 5º, LV; art. 133). O risco surge com honorários **simulados** (serviço inexistente, valor desproporcional, função de guarda de valores). Delimite fatos e junte contrato, timesheet e compatibilidade de mercado. Jurisprudência de suporte: pesquisar e marcar **[NÃO VERIFICADO]**.

### T7 — Dosimetria e efeitos patrimoniais
Com o agente `dosimetria-pena`: (i) o §4º exige **prova** da reiteração ou do vínculo com organização criminosa — e não pode ser somado ao mesmo fato que já qualifica a Lei 12.850 (bis in idem; ver `defesa-organizacao-criminosa`); (ii) valor lavado e sofisticação não podem ser valorados **duas vezes** (pena-base e causa de aumento); (iii) no confisco, delimite o perdimento ao **produto rastreado** — não ao patrimônio global; (iv) explore o §5º (colaboração) quando a estratégia for negocial.

### T8 — Patrimônio constrito: liberação de bens (art. 4º)
Incidente autônomo e urgente: pedido de liberação **total ou parcial** com prova documental da **origem lícita** (art. 4º, §2º) e da necessidade (subsistência, folha salarial, honorários). Ataque também a **alienação antecipada** sem os pressupostos legais. Não deixe a peça de mérito engolir o incidente patrimonial — são trilhas paralelas.

## Estrutura forense — um núcleo, três veículos

O **núcleo argumentativo** abaixo se encaixa nos três veículos. A moldura processual de cada um está na skill própria: `habeas-corpus` (trancamento), `memoriais` (fase do art. 403/404 do CPP) e resposta à acusação (CPP, arts. 396/396-A).

```
NÚCLEO ARGUMENTATIVO — LAVAGEM (adaptar ao veículo)

I — SÍNTESE DA IMPUTAÇÃO
   Qual antecedente a denúncia aponta? Quais atos são descritos como
   "ocultação"? Qual o lastro (RIF, quebras, perícia)? Mapear ANTES de teses.

II — PRELIMINARES / TRANCAMENTO
   1. Inépcia — denúncia não descreve o ato de mascaramento nem indicia
      o antecedente (art. 41 CPP; art. 2º, §1º, Lei 9.613/98)  [T1]
   2. Falta de justa causa — lastro exclusivo em RIF sem diligência  [T5]
   3. Incompetência — art. 2º, III (federal x estadual); conexão

III — MÉRITO (ordem da eventualidade)
   1. Atipicidade objetiva — uso aberto; ausência de ato autônomo  [T2/T3]
   2. Atipicidade subjetiva — ausência de dolo; limites da cegueira
      deliberada; conduta neutra (honorários)                      [T4/T6]
   3. Proveniência não rastreada — mistura patrimonial, perícia    [T5]
   4. Subsidiárias — afastar §4º; dosimetria; perdimento restrito  [T7]

IV — PEDIDOS (sucessivos)
   Trancamento/absolvição sumária (CPP 397, III) → absolvição
   (CPP 386, III ou VII) → desclassificação/afastamento do §4º →
   dosimetria mínima e perdimento limitado ao produto rastreado.
   Em apartado: liberação de bens (art. 4º, §2º)                   [T8]
```

**Na resposta à acusação:** priorize II + arrolamento de testemunhas e requerimento de perícia contábil — é o único momento (preclusão, ver abaixo). **Nos memoriais:** desloque o peso para III, cotejando a instrução (o que a perícia rastreou? a cegueira deliberada foi provada ou presumida?). **No HC:** apenas matéria de direito e prova pré-constituída — T1, T2 (quando manifesta) e ilicitude do lastro.

## Erros comuns e pegadinhas

- **Confundir autonomia com dispensa de prova.** O art. 2º, II, permite processar a lavagem sem condenação no antecedente — mas o §1º **exige indícios suficientes** dele. São planos distintos: não conceda o primeiro achando que perdeu o segundo.
- **Pedir a extinção da lavagem porque o antecedente foi "resolvido".** Pagamento do tributo, prescrição ou anistia do antecedente **não** extinguem a lavagem (art. 2º, §1º, *in fine*; ficha TRI-007 da BP `defesa-crimes-tributarios`). A tese correta é atacar a **existência** do antecedente, não sua punibilidade.
- **Preclusão na resposta à acusação.** Testemunhas não arroladas e perícia não requerida na fase do art. 396-A dificilmente voltam. Em lavagem, a **perícia contábil de rastreamento** é frequentemente a prova decisiva da defesa — requeira já.
- **Contar com o art. 366 do CPP.** Não se aplica (art. 2º, §2º): o corréu citado por edital que não comparece é processado com defensor dativo. Ajuste a estratégia de revelia.
- **Errar o endereçamento.** Antecedente federal, sistema financeiro ou interesse da União puxam a competência federal (art. 2º, III); a conexão com o antecedente costuma reunir os feitos. Peça no juízo errado = tempo perdido e tese queimada.
- **Ignorar o incidente patrimonial.** A constrição do art. 4º asfixia o cliente antes da sentença; a liberação exige **prova de origem lícita** — monte o dossiê documental desde o primeiro dia.
- **Tratar o RIF como se fosse laudo.** Relatório de inteligência não substitui investigação nem perícia; mas a tese de ilicitude tem parâmetros próprios (Tema 990/STF) — **confirme o alcance atual** antes de sustentar nulidade.
- **Aceitar a cegueira deliberada "de cor".** Nem a acusação pode invocá-la sem provar os requisitos, nem a defesa deve citá-la por precedente decorado — os contornos variam; sempre `jurisprudencia-stj-stf` + gate de citações.
- **Esquecer o bis in idem do §4º.** Organização criminosa como causa de aumento **e** como crime autônomo pelo mesmo vínculo é dupla punição — cruze com a skill `defesa-organizacao-criminosa`.
- **Apostar cegamente na prescrição.** Há entendimento de que a modalidade **"ocultar"** configura crime **permanente** — a consumação se protrai enquanto mantida a ocultação e a prescrição só corre da cessação (CP, art. 111, III). Antes de sustentar prescrição, confirme a natureza da conduta imputada e o entendimento atual via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.

## Checklist (verificar antes de protocolar)

**Justa causa e endereçamento:**
- [ ] A denúncia aponta **qual** infração antecedente e com **quais indícios** (art. 2º, §1º)?
- [ ] O ato de **ocultação** está descrito como conduta autônoma, ou é só o gasto do proveito?
- [ ] Competência conferida (art. 2º, III — federal × estadual; conexão)?

**Tipicidade e dolo:**
- [ ] Uso **aberto** do proveito (conta própria, nome próprio) → T2 articulada?
- [ ] Réu é também autor do antecedente? → T3 (autolavagem × exaurimento) articulada?
- [ ] Cegueira deliberada imputada? → exigidos os requisitos cumulativos (T4)?
- [ ] Honorários na mira? → contrato, serviço real e compatibilidade documentados (T6)?

**Prova e patrimônio:**
- [ ] Perícia contábil de rastreamento **requerida na resposta à acusação** (preclusão)?
- [ ] RIF/COAF: houve investigação própria ou mera transcrição? Alcance do Tema 990 conferido?
- [ ] Incidente de **liberação de bens** (art. 4º, §2º) instruído com prova de origem lícita?

**Fechamento:**
- [ ] §4º sem bis in idem com a Lei 12.850? Dosimetria e perdimento revisados (T7)?
- [ ] Pedidos em **ordem sucessiva** (eventualidade)?
- [ ] Todo precedente citado passou pelo agente `verificador-citacoes` (nada de memória)?

## Lembretes finais

- **Três pilares, três ataques:** antecedente indiciado → justa causa; ato autônomo de mascaramento → tipicidade objetiva; dolo de ocultar → tipicidade subjetiva. A peça forte enfrenta os três na ordem da eventualidade.
- **Exaurimento não é lavagem** — a autolavagem exige ato novo de mascaramento; uso aberto do proveito é atípico.
- **Cegueira deliberada não é negligência** — exija os requisitos cumulativos; não há lavagem culposa.
- **Autonomia ≠ presunção**: o antecedente não precisa de condenação, mas precisa de indícios (art. 2º, §1º).
- **Extinção da punibilidade do antecedente não salva o cliente da lavagem** — ataque a existência, não a punibilidade (interface: BP `defesa-crimes-tributarios`).
- **Três armadilhas processuais que custam o caso:** perícia contábil não requerida na resposta à acusação (preclusão), contar com o art. 366 do CPP (afastado pelo art. 2º, §2º) e deixar o incidente patrimonial do art. 4º esperando o mérito.
- Precedentes de cegueira deliberada, autolavagem, honorários e dolo eventual **mudam**: sempre `jurisprudencia-stj-stf` + `verificador-citacoes` antes de citar; tudo marcado **[NÃO VERIFICADO]** até a conferência.

## Apoie-se em

- **BP `defesa-crimes-tributarios`** — interface com o antecedente fiscal: autonomia da lavagem (TRI-006) e subsistência após extinção da punibilidade do antecedente (TRI-007).
- **Agente `analise-denuncia`** — dissecar a peça acusatória: antecedente indiciado? ato de ocultação descrito? (alimenta T1).
- **Agente `jurisprudencia-stj-stf`** — precedentes atuais de cegueira deliberada, autolavagem/exaurimento, uso aberto, honorários e Tema 990; tudo entra como [NÃO VERIFICADO] até o gate.
- **Agente `dosimetria-pena`** — pena-base, §4º sem bis in idem, perdimento limitado ao produto rastreado (T7).
- **Agente `verificador-citacoes`** — gate obrigatório de toda súmula/precedente antes do protocolo.
- **Skill `colaboracao-premiada`** — quando a estratégia negocial extrapolar a colaboração espontânea do art. 1º, §5º: o acordo formal da Lei 12.850/2013 (arts. 3º-A a 7º) tem requisitos de eficácia, validade e riscos próprios — institutos distintos, não confunda.
- **Skill `memoriais`** — moldura processual das alegações finais que recebe o núcleo argumentativo desta skill.
- **Skill `habeas-corpus`** — moldura do trancamento por falta de justa causa (T1/T5) e atipicidade manifesta (T2).
- **Skill `redacao-persuasiva-criminal`** — **sempre**: teoria do caso, narrativa, subsunção explícita e a régua de obra-prima que a revisão cobra.
- **Skill `defesa-organizacao-criminosa`** (desta onda) — quando a lavagem vem acoplada à Lei 12.850/2013: vínculo associativo, bis in idem com o §4º e estratégia conjunta.
