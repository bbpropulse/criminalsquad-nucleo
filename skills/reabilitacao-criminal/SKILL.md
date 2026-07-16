---
name: reabilitacao-criminal
description: >-
  Use ao elaborar pedido de REABILITAÇÃO CRIMINAL (arts. 93 a 95 do CP; arts. 743 a 750 do CPP):
  sigilo dos registros da condenação e recuperação dos efeitos secundários específicos do art. 92 do
  CP. Gatilhos: reabilitação criminal, reabilitação penal, art. 93 CP, art. 94 CP, art. 95 CP, CPP
  743, CPP 748, limpar antecedentes, limpar a ficha, sigilo de…. Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-reabilitacao-criminal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["reabilitacao-criminal", "reabilitacao criminal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Reabilitação Criminal (CP 93-95 — sigilo e efeitos da condenação)

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

Esta skill orienta a construção do **pedido de reabilitação criminal** (arts. 93 a 95 do CP; arts. 743 a 750 do CPP): a via judicial para assegurar o **sigilo dos registros** da condenação e — sua utilidade mais real hoje — **recuperar os efeitos secundários específicos** do art. 92 do CP. Nenhum outro artefato do sistema cobre o instituto: aqui está a triagem estratégica (quando o pedido vale o protocolo), os requisitos e a estrutura forense.

> **Lição central:** a reabilitação **não apaga a condenação** — ela dá sigilo e devolve capacidades específicas que a sentença retirou. Quem promete "ficha limpa" promete o que o instituto não entrega; e quem pede reabilitação **só** para o sigilo costuma pedir o que o **art. 202 da LEP já deu automaticamente** com a extinção da pena. Antes de redigir, faça a triagem: **qual efeito concreto o cliente recupera com a sentença de reabilitação?**

> **Divisão de trabalho:** o marco da **extinção da pena** e o cálculo do **biênio** do art. 94 são do agente **dosimetria-pena** — consulte-o antes de afirmar que o prazo correu. Se a extinção ainda precisa ser **declarada** (prescrição da pretensão executória, indulto), o passo anterior é a skill `extincao-punibilidade-prescricao` ou `execucao-indulto-comutacao`; esta skill cuida do que vem **depois** da extinção.

## O instituto e a base legal

A reabilitação alcança **quaisquer penas aplicadas em sentença definitiva**, assegurando ao condenado o sigilo dos registros sobre o processo e a condenação (CP 93, *caput*). Pelo parágrafo único, pode também atingir os **efeitos específicos da condenação** do art. 92 — **vedada a reintegração na situação anterior** nas hipóteses dos incisos I e II. O procedimento está nos arts. 743 a 750 do CPP, com uma ressalva de leitura: os **prazos de 4/8 anos do CPP 743 foram derrogados** pela reforma de 1984 — vale o **biênio do CP 94** (na dúvida sobre a leitura combinada dos dispositivos antigos do CPP, confira via **lei-e-sumula**).

**O que a reabilitação faz — e o que não faz:**

| A reabilitação FAZ | A reabilitação NÃO FAZ |
|---|---|
| Assegura sigilo: a condenação não é mencionada na folha de antecedentes nem em certidões do juízo, **salvo requisição de juiz criminal** (CPP 748) | **Não rescinde** a condenação — o título permanece válido |
| Recupera efeitos específicos do art. 92 (com as vedações da tabela adiante) | **Não afasta a reincidência** — isso é obra do **período depurador de 5 anos** do CP 64, I (instituto diverso, prazo diverso) |
| Declara judicialmente a regeneração — reforço documental para editais, concursos e vida civil | Não devolve o **mesmo cargo** perdido nem o poder familiar **quanto à mesma vítima** (CP 93, parágrafo único) |
| Comunica-se aos institutos de identificação (CPP 747) | Não alcança os efeitos **genéricos e automáticos** do art. 91 (obrigação de indenizar, confisco) |

## Triagem estratégica — quando o pedido vale o protocolo

O **art. 202 da LEP** já garante, **automaticamente e sem requisitos**, que cumprida ou extinta a pena não constem da folha corrida, atestados ou certidões qualquer notícia da condenação — salvo para instruir novo processo penal ou casos expressos em lei. Ou seja: para o sigilo puro, a lei de execução resolve **no dia da extinção**, sem esperar 2 anos nem provar bom comportamento. A honestidade com o cliente exige dizer isso.

A reabilitação continua valendo o protocolo em três cenários:

| Cenário | Por que a reabilitação é o instrumento |
|---|---|
| Há efeito do **art. 92** declarado na sentença a recuperar | A LEP 202 **não toca** nos efeitos específicos — só a reabilitação devolve a habilitação para dirigir, a capacidade para nova investidura pública ou o exercício do poder familiar |
| O sigilo da LEP 202 **falhou na prática** — apontamentos que insistem em aparecer em certidões | A sentença de reabilitação (CPP 746-748) e as comunicações do CPP 747 dão título judicial específico para exigir a baixa; instrua com as certidões que **demonstrem a falha** |
| Valor declaratório — concursos, conselhos profissionais, editais que pedem "idoneidade" | Sentença que atesta judicialmente a regeneração é prova qualificada que a mera ausência de anotação não oferece |

> Se nenhum cenário se aplica, oriente o cliente a **não protocolar**: pedido de reabilitação inútil expõe a folha do assistido a um novo incidente com oitiva do MP e reexame obrigatório pelo tribunal.

## Requisitos do art. 94

| Requisito | Conteúdo | Prova nos autos |
|---|---|---|
| **Biênio** | 2 anos do dia em que **extinta, de qualquer modo, a pena** ou terminada sua execução — **computa-se o período de prova** do sursis e do livramento condicional, se não revogados | Certidão da extinção (sentença do art. 66, II, da LEP ou do juízo do feito); cálculo do marco pelo agente **dosimetria-pena** |
| **Domicílio no País** | Durante todo o biênio | Comprovantes de residência do período |
| **Bom comportamento público e privado** | Demonstração **efetiva e constante** (CP 94, II) — o CPP 744 sugere atestados de autoridade policial, de empregadores e outros documentos de regeneração | Certidões negativas (distribuidores criminais das comarcas de residência), atestados de trabalho, comprovantes de ocupação lícita |
| **Reparação do dano** | Ressarcimento; **ou** impossibilidade **absoluta** de fazê-lo até o dia do pedido; **ou** renúncia da vítima; **ou** novação da dívida (CP 94, III) | Recibo/quitação, documento da renúncia ou novação; para a impossibilidade: prova robusta de hipossuficiência |

- **Contagem do biênio:** prazo de **direito material** (está no CP) — conta-se pela regra do **CP 10**: inclui-se o dia do começo, sem a contagem processual do CPP 798.
- **Cômputo do período de prova:** quem cumpriu sursis ou livramento condicional sem revogação pode ter o biênio **já vencido** na data da extinção — teste sempre antes de mandar o cliente esperar 2 anos.
- **Dispensa da reparação** quando prescrita a pretensão indenizatória civil ou quando a vítima não é localizada: há construção jurisprudencial — pesquise via **jurisprudencia-stj-stf**, verifique com **verificador-citacoes** e marque [NÃO VERIFICADO] o que não confirmar.
- **Multa pendente:** se a pena de multa não foi paga nem declarada extinta, a pena não está "extinta de qualquer modo" e o biênio não correu. Sobre a extinção da punibilidade com multa pendente do condenado hipossuficiente, a jurisprudência oscilou — confirme o estado atual via **jurisprudencia-stj-stf** antes de fundamentar.

## Efeitos do art. 92 — o que volta e o que não volta

Os efeitos do art. 92 **não são automáticos**: devem ter sido **motivadamente declarados na sentença** (parágrafo único). Primeiro passo do caso concreto: **reler a sentença condenatória** — se o efeito não foi declarado, não há o que reabilitar nesse ponto.

| Efeito declarado (CP 92) | A reabilitação devolve? |
|---|---|
| I — perda de cargo, função pública ou mandato eletivo | Remove a incapacidade para **nova** investidura; **não reintegra** no cargo perdido (CP 93, parágrafo único) |
| II — incapacidade para poder familiar, tutela ou curatela | Recupera o exercício, **vedada a reintegração** quanto à mesma vítima do crime |
| III — inabilitação para dirigir veículo (usado como meio de crime doloso) | Recupera **integralmente** — a hipótese de maior utilidade prática (motoristas profissionais) |

## Competência, procedimento e recursos

| Ponto | Regra |
|---|---|
| **Competência** | **Juízo da condenação** (CPP 743) — não a Vara de Execuções. Múltiplas condenações em juízos diversos: requerimento a **cada juízo prolator**, instruído com certidões de **todas** as condenações |
| **Instrução** | CPP 744: certidões de não estar respondendo a processo nas comarcas de residência, atestados de comportamento e residência, prova da reparação (ou de sua impossibilidade) |
| **Diligências e MP** | O juiz pode ordenar diligências, cercadas do sigilo possível, e **ouve o Ministério Público** antes da decisão (CPP 745) |
| **Concessão** | Sujeita a **recurso de ofício** (CPP 746) — a reabilitação só se estabiliza com a confirmação pelo tribunal; redija a peça pensando também no relator |
| **Indeferimento** | Cabe **apelação** (CPP 593, II — decisão com força de definitiva) no prazo de **5 dias** (CPP 593, *caput*), contagem **processual** (CPP 798, § 1º: exclui-se o dia do começo); Defensoria Pública tem **prazo em dobro** (LC 80/94, arts. 44, I, 89, I e 128, I) |
| **Renovação** | CP 94, parágrafo único: **a qualquer tempo**, desde que o pedido venha com **novos elementos** comprobatórios. O CPP 749 fala em 2 anos, salvo insuficiência documental — prevalece a regra posterior e mais benéfica do CP; registre a divergência se o juízo resistir |
| **Comunicações** | Concedida e confirmada, comunica-se ao Instituto de Identificação e congêneres (CPP 747); a folha e as certidões silenciam, salvo requisição de juiz criminal (CPP 748) |
| **Revogação** | CP 95 (c/c CPP 750): de ofício ou a requerimento do MP, se o reabilitado for condenado, **como reincidente**, por decisão **definitiva**, a pena **que não seja de multa** — três filtros cumulativos; revogada, os registros voltam a constar |

## Estrutura da petição

Peça **documental**: o coração é o quadro de requisitos do art. 94, cada um amarrado a um documento. Retórica não supre certidão.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL DA
COMARCA DE [COMARCA] — [UF] (juízo da condenação — art. 743 do CPP)

Autos nº [Nº DO PROCESSO DE ORIGEM]

[NOME], já qualificado(a) nos autos em epígrafe, por seu(sua) advogado(a)
(procuração anexa), vem, respeitosamente, requerer sua REABILITAÇÃO
CRIMINAL, nos termos dos arts. 93 a 95 do Código Penal e 743 e seguintes
do Código de Processo Penal, pelas razões que seguem:

I — DA CONDENAÇÃO E DA EXTINÇÃO DA PENA (linha do tempo documentada)
Tabela: condenação (pena, data do trânsito) — cumprimento/extinção
(data, forma: cumprimento integral / prescrição da pretensão executória /
indulto) — certidão/ID nos autos — termo final do biênio do art. 94.

II — DO PREENCHIMENTO DOS REQUISITOS (art. 94 do CP)
   1. Do biênio [marco da extinção + cômputo do período de prova de
      sursis/livramento, se houver — cálculo demonstrado];
   2. Do domicílio no País [comprovantes do período];
   3. Do bom comportamento público e privado [certidões negativas das
      comarcas de residência, atestados, ocupação lícita];
   4. Da reparação do dano [quitação / renúncia da vítima / novação /
      impossibilidade absoluta documentada].

III — DOS EFEITOS PRETENDIDOS
   1. Do sigilo dos registros (art. 93 do CP; art. 748 do CPP);
   2. [Se declarado na sentença] Da recuperação do efeito específico do
      art. 92, [inciso], observadas as vedações do art. 93, parágrafo
      único [ex.: capacidade para NOVA investidura; habilitação para
      dirigir].

IV — DOS PEDIDOS
Ante o exposto, requer-se:
   a) a DECLARAÇÃO DA REABILITAÇÃO do(a) requerente (art. 93 do CP);
   b) o SIGILO dos registros da condenação, com as comunicações do
      art. 747 do CPP [Instituto de Identificação, distribuidor];
   c) [se cabível] a RECUPERAÇÃO do efeito do art. 92, [inciso],
      [ex.: levantamento da inabilitação para dirigir, com ofício ao
      órgão de trânsito];
   d) a oitiva do Ministério Público (art. 745 do CPP) e, após, a
      remessa de ofício ao Tribunal, na forma do art. 746 do CPP.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; certidão da condenação e do trânsito em julgado; **certidão da extinção da pena** (indispensável — é o marco do biênio); certidões dos distribuidores criminais de todas as comarcas de residência no biênio; comprovantes de residência do período; atestados de trabalho/ocupação; prova da reparação (ou da impossibilidade/renúncia/novação); certidões de **todas** as demais condenações, se houver.

## Teses típicas da prática

- **Recuperação da habilitação para dirigir (CP 92, III)** — motorista profissional inabilitado na sentença: a reabilitação devolve integralmente; articular com ofício ao órgão de trânsito nos pedidos.
- **Biênio já vencido pelo cômputo do período de prova** — sursis ou livramento cumprido sem revogação: o prazo do art. 94 corre **durante** o período de prova; muitos clientes já preenchem o requisito no dia da extinção.
- **Extinção pela prescrição da pretensão executória abre o biênio** — a PPE extingue a pena mas preserva os efeitos secundários (ver skill `extincao-punibilidade-prescricao`); a reabilitação é o **passo seguinte** para o sigilo qualificado e os efeitos do art. 92.
- **Capacidade para nova investidura pública (CP 92, I)** — servidor que perdeu o cargo: a reabilitação remove a incapacidade para **novo** concurso, ainda que não reintegre no cargo antigo — diferença que decide a orientação ao cliente.
- **Impossibilidade absoluta de ressarcir** — hipossuficiência robustamente documentada (não mera alegação); alternativas: renúncia da vítima ou novação; para a dispensa por prescrição civil, pesquise via **jurisprudencia-stj-stf** e marque [NÃO VERIFICADO].
- **Falha prática do sigilo da LEP 202** — condenação extinta que segue aparecendo em certidões: instruir o pedido com as certidões "sujas" como prova do interesse de agir.
- **Renovação com novos elementos** — indeferimento anterior não precluiu nada: CP 94, parágrafo único, admite novo pedido **a qualquer tempo** com prova nova.

## Erros comuns e pegadinhas

- **Prometer que a reabilitação apaga a reincidência** — não apaga. A reincidência caduca pelo **período depurador de 5 anos** (CP 64, I), que corre independentemente de reabilitação. Confundir os dois institutos gera expectativa falsa e orientação errada.
- **Protocolar só para o sigilo que a LEP 202 já deu** — antes de redigir, **puxe as certidões reais** do cliente; se já estão limpas, não há interesse útil.
- **Endereçar à Vara de Execuções** — a competência é do **juízo da condenação** (CPP 743). Depois de extinta a pena, a execução acabou; o incidente volta ao juízo de origem.
- **Aplicar os prazos de 4/8 anos do CPP 743** — derrogados pela reforma de 1984; o prazo é o **biênio do CP 94**.
- **Esquecer o cômputo do período de prova** — sursis e livramento não revogados contam para o biênio; ignorá-lo faz o cliente esperar anos desnecessários.
- **Pedir a reintegração no cargo perdido ou o poder familiar quanto à mesma vítima** — vedação expressa do CP 93, parágrafo único; pedido juridicamente impossível nesses termos.
- **Tentar recuperar efeito do art. 92 que a sentença não declarou** — os efeitos específicos não são automáticos (CP 92, parágrafo único); sem declaração motivada, não há o que reabilitar — releia a sentença antes.
- **Reparação mal instruída** — a impossibilidade tem de ser **absoluta** e provada; alegação genérica de pobreza sem lastro documental é a causa mais comum de indeferimento.
- **Ignorar a multa pendente** — pena de multa não extinta trava o marco do biênio; verifique a situação da multa no cálculo com o **dosimetria-pena** e o estado da jurisprudência sobre hipossuficiência via **jurisprudencia-stj-stf**.
- **Esquecer o recurso de ofício** — a concessão sobe **obrigatoriamente** ao tribunal (CPP 746); peça mal fundamentada cai no reexame. Escreva já para o relator.
- **Certidões vencidas ou de comarcas faltantes** — o CPP 744, I, exige certidões de **todas** as comarcas de residência no período; a boa notícia: indeferimento por insuficiência documental permite renovar de imediato (CPP 749, parte final).
- **Citar precedente de memória** — números de julgado específicos **nunca** de memória: pesquise via agente **jurisprudencia-stj-stf**, verifique com **verificador-citacoes** e marque [NÃO VERIFICADO] o que não confirmar. Dispositivo antigo do CPP em leitura combinada com o CP: confira via **lei-e-sumula**.

## Checklist antes de protocolar

- [ ] Triagem feita — há efeito concreto a recuperar (art. 92) ou falha real de sigilo? Certidões atuais do cliente conferidas?
- [ ] Extinção da pena **certificada** nos autos (inclusive a multa)? Marco e biênio calculados com o **dosimetria-pena**?
- [ ] Período de prova de sursis/livramento computado no biênio?
- [ ] Sentença relida — quais efeitos do art. 92 foram **motivadamente declarados**?
- [ ] Requisitos do art. 94 amarrados um a um a documentos (domicílio, comportamento, reparação)?
- [ ] Certidões dos distribuidores de **todas** as comarcas de residência no biênio?
- [ ] Reparação: quitação, renúncia, novação ou impossibilidade **absoluta** documentada?
- [ ] Endereçamento ao **juízo da condenação** (um pedido por juízo prolator, com certidões de todas as condenações)?
- [ ] Pedidos completos (reabilitação + sigilo/comunicações + efeito específico + ofícios aos órgãos)?
- [ ] Cliente orientado sobre o que a reabilitação **não** faz (reincidência, art. 91, reintegração vedada) e sobre a revogação do CP 95?
- [ ] Nenhuma súmula/precedente citado de memória — tudo passou pelo **verificador-citacoes**?

## Lembretes finais

- **Sigilo puro a LEP 202 já dá; efeito do art. 92 só a reabilitação devolve** — a triagem estratégica é o primeiro serviço prestado ao cliente.
- **Reabilitação não é período depurador** — sigilo em 2 anos (CP 94) e caducidade da reincidência em 5 (CP 64, I) são trilhos paralelos; explique os dois.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes do protocolo.

## Apoie-se em

- **Agente `dosimetria-pena`** — referência **obrigatória**: fixa o marco da extinção da pena e calcula o biênio do art. 94 (com o cômputo do período de prova) que esta skill transforma em peça.
- **Skill `extincao-punibilidade-prescricao`** — complementar: obtém a declaração de extinção (em especial a PPE) que **abre** o biênio; esta skill cuida do passo seguinte. Não duplique o cálculo prescricional — ele mora lá.
- **Skills `execucao-*`** (`execucao-progressao-regime`, `execucao-livramento-condicional`, `execucao-remicao`, `execucao-saida-temporaria`, `execucao-indulto-comutacao`, `execucao-unificacao-penas`) — fonte das certidões, atestados de comportamento carcerário e da certidão de extinção nos autos da execução que instruem o pedido.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais (dispensa da reparação, multa pendente do hipossuficiente, alcance do sigilo) antes de citar qualquer julgado.
- **Agente `lei-e-sumula`** — conferência da leitura combinada dos dispositivos antigos do CPP (743-750) com o CP reformado, e de qualquer dispositivo incerto.
- **Agente `verificador-citacoes`** — gate final: nenhuma citação entra na peça sem verificação; o que não confirmar recebe [NÃO VERIFICADO].
- **Best-practice `peticao-criminal`** — forma, endereçamento e técnica de petição criminal.
- **Best-practice `verificacao-citacoes`** — disciplina de citação (sanção real por jurisprudência inventada).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
