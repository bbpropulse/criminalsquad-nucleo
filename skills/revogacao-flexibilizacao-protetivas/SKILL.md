---
name: revogacao-flexibilizacao-protetivas
description: >-
  Use ao defender o apontado agressor contra medidas protetivas de urgência da Lei Maria da Penha —
  pedido de revogação ou flexibilização (arts. 19 e 22 da Lei 11.340/2006), impugnação de protetiva
  genérica ou sem reavaliação, excesso de prazo, apelação da decisão e HC quando houver restrição à
  liberdade de locomoção. Gatilhos: revogação de medida protetiva, flexibilização de protetiva, MPU,
  Lei 11.340/2006, Lei Maria da… Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-revogacao-flexibilizacao-protetivas"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["revogacao-flexibilizacao-protetivas", "revogacao flexibilizacao", "flexibilizacao protetivas"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Revogação e Flexibilização de Medidas Protetivas (defesa do apontado agressor)

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

Esta skill orienta a **defesa de quem sofre medidas protetivas de urgência** (MPU) da Lei 11.340/2006: o pedido de **revogação** (ausência de requisitos ou cessação do risco), a **flexibilização** (adequação proporcional da medida) e as **vias de impugnação** (pedido ao juízo, apelação e habeas corpus). Não confundir com o ataque à **prisão** decretada por descumprimento — esse é objeto da skill `liberdade-provisoria-relaxamento`; nem com o **pedido** de protetivas pela vítima — polo coberto pela skill `medidas-protetivas-urgencia`.

> **Lição central:** medida protetiva **não tem prazo indeterminado de fato** — vigora **enquanto persistir o risco** e deve ser **reavaliada** periodicamente, revogando-se quando ele cessa, **ouvida a vítima** (tese VDO-D09 da best-practice `defesa-violencia-domestica`). A defesa que apenas "espera passar" erra: a protetiva sem reavaliação se eterniza por inércia, não por decisão.

> **Advertência que antecede qualquer estratégia:** enquanto a medida vigora, **descumpri-la é crime** (art. 24-A da Lei 11.340/2006) — e o **consentimento da vítima não afasta a tipicidade**. O caminho da defesa é **sempre judicial**: nunca orientar o cliente a procurar a vítima para "resolver", ainda que ela concorde.

## Instituto e base legal

As MPU (arts. 18 a 24 da Lei 11.340/2006) são **tutela inibitória autônoma**: protegem a ofendida independentemente do destino do inquérito ou da ação penal. A Lei 14.550/2023 reforçou essa autonomia no art. 19 — as medidas independem de tipificação penal e do ajuizamento de ação, e **vigoram enquanto persistir risco** à integridade da ofendida ou de seus dependentes (**conferir a redação vigente dos parágrafos do art. 19 via `lei-e-sumula`** — alteração relativamente recente).

Dessa arquitetura decorrem as duas alavancas da defesa:

| Alavanca | Fundamento | Consequência |
|---|---|---|
| **Requisitos de concessão** | Situação de violência doméstica do âmbito da Lei (art. 5º) — classicamente, **baseada no gênero**; sobre o impacto do art. 40-A nessa exigência, ver "Teses típicas" — + **risco atual** | Sem risco concreto e atual (ou sem incidência da Lei), a medida não se sustenta |
| **Cláusula rebus sic stantibus** | Art. 19 (revisão a qualquer tempo; vigência atrelada à persistência do risco) | Cessado ou reduzido o risco, cabe **revogação** ou **flexibilização** — sem preclusão material |

**Medidas típicas atacáveis (art. 22):** suspensão da posse ou restrição do porte de armas; afastamento do lar; proibição de aproximação com distância mínima; proibição de contato por qualquer meio; proibição de frequentar lugares; restrição/suspensão de visitas aos dependentes; prestação de alimentos provisionais; comparecimento a programas de reeducação; acompanhamento psicossocial. Cada uma tem grau distinto de restrição — e isso define a **via de impugnação** e o **argumento de proporcionalidade**.

## Cabimento — qual via para qual situação

| Situação concreta | Via adequada | Endereçamento |
|---|---|---|
| Risco cessou (tempo decorrido sem incidentes, separação consolidada, mudança de cidade) | **Pedido de revogação** ao juízo | JVDFM / vara com competência de violência doméstica |
| Medida desproporcional (distância inviabiliza trabalho/residência; proibição total de contato impede tratar dos filhos) | **Pedido de flexibilização** ao juízo | Mesmo juízo |
| Protetiva **genérica**, sem fundamentação concreta do risco | Pedido de revogação **+ apelação** da decisão concessiva | Juízo / TJ |
| Protetiva vigente há longo período **sem qualquer reavaliação** | Pedido de reavaliação/revogação (excesso de prazo) | Mesmo juízo |
| Decisão que concede, nega revogação ou mantém a medida | **Apelação** (entendimento prevalente — pesquise o recurso cabível atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]) | TJ |
| Medida que **restringe a liberdade de locomoção** (aproximação, frequentar lugares, afastamento do lar) imposta ilegalmente | **Habeas corpus** (skill `habeas-corpus`) | TJ (ato de juiz) |
| Medida **sem** restrição de ir e vir (alimentos, suspensão de porte, restrição de visitas) | HC **não** é a via — usar pedido ao juízo + apelação | — |
| Prisão preventiva decretada por descumprimento (art. 313, III, CPP) | Skill `liberdade-provisoria-relaxamento` (ataca-se a prisão, não a medida) | — |

> **As vias podem ser cumuladas com inteligência:** o pedido de revogação ao juízo é sempre a **primeira porta** (rápido, sem preparo, sem preclusão); a apelação preserva a devolutividade ampla contra a decisão; o HC é reservado à restrição de locomoção com ilegalidade evidente. Pedir tudo ao mesmo tempo sem hierarquia enfraquece — escalone.

### Prazos e contagem

- **Pedido de revogação/flexibilização:** sem prazo — cabe **a qualquer tempo** enquanto a medida vigorar (*rebus sic stantibus*).
- **Apelação:** trabalhe com o prazo **mais curto** em cogitação — **5 dias** (art. 593 do CPP). Há controvérsia sobre a natureza da decisão (e, por consequência, sobre regime recursal e prazo); **nunca aposte no prazo maior** — confirme o entendimento atual do tribunal local via `jurisprudencia-stj-stf` [NÃO VERIFICADO].
- **Apelação criminal tem duas etapas:** petição de **interposição** (no prazo do recurso) e **razões** em 8 dias (art. 600 do CPP), que podem ser apresentadas na instância superior se requerido (art. 600, § 4º). Perder a interposição não se conserta com razões.
- **Embargos de declaração** contra a decisão: **2 dias** (art. 619 do CPP).
- **Contagem penal (art. 798 do CPP):** dias **corridos** — os prazos são contínuos e peremptórios; exclui-se o dia do começo e inclui-se o do vencimento (§ 1º); vencimento em domingo/feriado prorroga ao primeiro dia útil (§ 3º). Não aplique a contagem em dias úteis do CPC por hábito.
- **Defensoria Pública:** prazo **em dobro** e intimação pessoal (LC 80/94). Advogado constituído e MP **não** têm a dobra.
- **HC:** sem prazo, enquanto durar o constrangimento.

## Requisitos do pedido de revogação

O pedido próspero demonstra, **com prova documental**, três pontos:

1. **Ausência ou cessação do risco** — decurso de tempo relevante sem qualquer incidente, boletim ou representação nova; separação de fato/divórcio consolidado; residências e rotinas distintas; ausência de processos supervenientes. Junte certidões atualizadas.
2. **Quadro fático alterado** desde a concessão — a protetiva foi deferida em cognição sumária sobre um contexto que não existe mais; a cláusula *rebus sic stantibus* autoriza a revisão.
3. **Oitiva da vítima** — requeira expressamente que a ofendida seja **ouvida** (e o MP intimado) antes da decisão. A manifestação favorável da vítima **não vincula** o juízo nem revoga a medida por si, mas é o elemento de convicção mais forte sobre a cessação do risco — e pedir a oitiva demonstra boa-fé processual da defesa.

Para a **flexibilização**, o núcleo é a **proporcionalidade**: a medida deve proteger a vítima com o **menor sacrifício possível** de direitos do requerido. Propostas típicas: redução da distância mínima quando trabalho/residência a inviabiliza; autorização de **contato exclusivamente por terceiro, advogado ou aplicativo de coparentalidade** para assuntos dos filhos; visitas assistidas ou com intermediação; delimitação precisa dos lugares proibidos (em vez de cláusula aberta).

## Estrutura forense da petição

Petição dirigida ao **juízo que concedeu a medida** (JVDFM ou vara criminal com essa competência). Autue no expediente próprio das protetivas (elas correm em autos apartados do inquérito/ação).

```
AO JUÍZO DO [N]º JUIZADO DE VIOLÊNCIA DOMÉSTICA E FAMILIAR CONTRA A MULHER
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO EXPEDIENTE DE MEDIDAS PROTETIVAS]

[NOME], já qualificado(a) nos autos em epígrafe, por seu(sua) advogado(a)
(procuração anexa), vem, respeitosamente, requerer a

   REVOGAÇÃO DAS MEDIDAS PROTETIVAS DE URGÊNCIA
   (art. 19 da Lei 11.340/2006), ou, subsidiariamente, sua FLEXIBILIZAÇÃO,

pelas razões que seguem:

I — DOS FATOS
Data da concessão, medidas impostas e contexto original. Em seguida, o
QUADRO ATUAL: tempo decorrido SEM qualquer incidente, separação consolidada,
residências distintas, ausência de novas ocorrências (certidões anexas).
Registrar que o requerido CUMPRIU integralmente as medidas até aqui.

II — DO DIREITO
   1. Da natureza rebus sic stantibus — as MPU vigoram enquanto persistir
      o risco (art. 19 da Lei 11.340/2006, com a redação da Lei 14.550/2023 —
      conferir dispositivo vigente) e comportam revisão a qualquer tempo.
   2. Da cessação do risco — subsunção do quadro atual: nenhum elemento
      concreto e ATUAL justifica a manutenção (tese VDO-D09).
   3. (Se for o caso) Da ausência de fundamentação concreta na origem —
      protetiva genérica, deferida sem indicação do risco específico.
   4. (Subsidiário) Da desproporcionalidade — flexibilização: [proposta
      concreta: redução de distância / contato via terceiro para os filhos /
      visitas assistidas], que preserva a proteção com menor gravame.

III — DOS PEDIDOS
   a) a intimação do Ministério Público e a OITIVA DA OFENDIDA;
   b) a REVOGAÇÃO das medidas protetivas, ante a cessação do risco;
   c) subsidiariamente, a FLEXIBILIZAÇÃO nos termos propostos no item II.4;
   d) protestando pela designação de audiência de justificação, se necessário.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cópia da decisão concessiva; certidões criminais atualizadas (nada consta superveniente); comprovantes de residência e trabalho (distintos dos da vítima); sentença/averbação de divórcio ou dissolução; comprovantes de cumprimento (se houver monitoração); tudo que documente a mudança do quadro.

## Teses típicas da defesa

- **Cessação do risco pelo decurso do tempo sem incidentes** — a medida cumpriu sua função; mantê-la sem risco atual converte tutela inibitória em pena sem processo (VDO-D09).
- **Protetiva sem reavaliação = constrangimento por inércia** — a vigência é condicionada ao risco; a ausência de qualquer revisão periódica, com a medida se arrastando por anos, configura excesso de prazo impugnável.
- **Fundamentação genérica** — deferimento padronizado, sem indicação do risco concreto e específico daquele caso, viola o dever de motivação (art. 93, IX, CF). Ataque na apelação e no pedido de revogação.
- **Ausência de incidência da Lei** — classicamente, a proteção pressupõe violência **baseada no gênero** (art. 5º); conflito patrimonial ou desavença sem esse marcador não a atrai (VDO-D03 da BP). Use com parcimônia e em dose dupla de cautela: (a) após a Lei 14.550/2023, a concessão independe de tipificação penal — a tese ataca a **incidência da Lei**, não a falta de crime; (b) o **art. 40-A** (mesma lei) manda aplicá-la "independentemente da causa ou da motivação dos atos", e o alcance dessa cláusula frente à exigência clássica de motivação de gênero é ponto em construção (a skill `medidas-protetivas-urgencia` traz o mesmo alerta) — **pesquise o entendimento atual via `jurisprudencia-stj-stf` e confira a redação via `lei-e-sumula`, marcando [NÃO VERIFICADO]** até confirmar.
- **Desproporcionalidade da medida concreta** — distância mínima que engloba o local de trabalho ou a única via de acesso do requerido; proibição total de contato que inviabiliza o exercício da parentalidade; afastamento de lar que é também sede da atividade profissional. A resposta é a **flexibilização calibrada**, não a revogação total.
- **Restrição à locomoção sem base legal idônea** — para o HC: medida de aproximação/frequência imposta sem qualquer fundamentação, ou mantida após pedido de revogação ignorado por tempo irrazoável. Pesquise o entendimento atual sobre cabimento de HC contra protetivas via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].

## Erros comuns e pegadinhas

- **Orientar qualquer aproximação "consentida".** É o erro que destrói a defesa: gera o crime do art. 24-A, e o consentimento da vítima **não** afasta a tipicidade nem pode ser presumido. Todo contato pendente de autorização judicial.
- **Alegar "prazo vencido" como revogação automática.** Não existe prazo legal fixo de vigência: a medida dura **enquanto persistir o risco**. O argumento correto é a **cessação do risco + ausência de reavaliação**, não um vencimento aritmético.
- **Usar a retratação da vítima como fundamento único.** A retratação (art. 16) tem regime próprio e restrito à ação condicionada; para a revogação, a palavra da vítima é elemento de convicção — peça a **oitiva**, não presuma o efeito.
- **Escolher a via errada.** HC contra medida **sem** restrição de locomoção (alimentos provisionais, suspensão de porte) tende ao não conhecimento; apelação com prazo perdido não se conserta com novo pedido "recursal" disfarçado. A boa notícia: o **pedido de revogação ao juízo não preclui** (rebus sic stantibus) — pode ser renovado com fatos novos.
- **Contar o prazo recursal pelo CPC por hábito.** Diante da controvérsia sobre a natureza da decisão, o prazo seguro é o penal: **5 dias corridos** (arts. 593 e 798 do CPP). Apostar em 15 dias úteis é fabricar a própria preclusão.
- **Supor que o arquivamento do inquérito ou a absolvição derruba a protetiva "por tabela".** Após a Lei 14.550/2023 a medida é **autônoma** (art. 19): é preciso **pedir** a revogação demonstrando a cessação do risco — nada cai automaticamente.
- **Protocolar o pedido com descumprimento recente nos autos.** Qualquer incidente registrado (contato, aproximação, novo BO) esvazia a alegação de cessação do risco e vira fundamento de manutenção — avalie o histórico antes de pedir.
- **Endereçamento equivocado.** O pedido vai ao **juízo da protetiva** (JVDFM), nos **autos apartados** da MPU — não à vara de família, não nos autos do inquérito. Apelação e HC vão ao **TJ**.
- **Ignorar o MP e a vítima.** Pedido decidido sem oitiva tende a ser revertido ou gerar nulidade; requerer a participação de ambos fortalece a decisão que revoga.
- **Reeditar o pedido sem fato novo.** A ausência de preclusão não autoriza repetição idêntica semana após semana — cada renovação exige **alteração concreta do quadro**, sob pena de desgastar a credibilidade da defesa.
- **Esquecer o efeito colateral da negativa.** Pedido mal instruído pode gerar decisão reforçando o risco — munição para eventual preventiva do art. 313, III, CPP. Só protocole com lastro documental real.

## Apoie-se em

- **BP `defesa-violencia-domestica`** — conhecimento do nicho (incidência da Lei, art. 24-A, preventiva do art. 313, III) e a tese **VDO-D09** (protetivas devem ser reavaliadas e revogadas cessado o risco, ouvida a vítima); banco de fichas VDO-D no acervo.
- **`medidas-protetivas-urgencia`** (skill desta onda) — o polo da **vítima**: pedido e deferimento das MPU; leia-a para antecipar os argumentos que a defesa precisará superar.
- **`liberdade-provisoria-relaxamento`** — quando o descumprimento gerou **prisão preventiva** (art. 313, III, CPP): lá se ataca a prisão; aqui, a medida.
- **`habeas-corpus`** — estrutura do writ quando a protetiva restringe a liberdade de locomoção.
- **`apelacao`** — estrutura do recurso contra a decisão que concede ou mantém a protetiva (confirmado o cabimento no caso concreto).
- **`retratacao-representacao`** — quando a estratégia passa pela retratação da vítima (art. 16): regime próprio e distinto — não confundir com a revogação da protetiva.
- **Agente `verificador-citacoes` (gate `verificacao-citacoes`)** — obrigatório: nenhuma súmula ou precedente entra na peça sem verificação; teses marcadas [NÃO VERIFICADO] não vão ao protocolo. Redação de lei alterada (art. 19 pós-Lei 14.550/2023) confere-se via agente `lei-e-sumula`.
- **`redacao-persuasiva-criminal`** — padrão de obra-prima da redação (teoria do caso, narrativa, subsunção explícita): aplique **sempre** ao redigir a petição, o recurso ou o writ.

**Lembrete final:** toda peça gerada é **rascunho técnico para revisão humana obrigatória** antes de qualquer protocolo.
