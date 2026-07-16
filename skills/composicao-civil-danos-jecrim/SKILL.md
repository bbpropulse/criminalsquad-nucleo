---
name: composicao-civil-danos-jecrim
description: >-
  Use ao negociar, redigir e homologar a COMPOSIÇÃO CIVIL DOS DANOS na audiência preliminar do
  JECRIM (art. 74 da Lei 9.099/95): termo de acordo com cláusulas completas, sentença homologatória
  irrecorrível (título executivo no juízo cível) e o efeito-chave da renúncia ao direito de
  queixa/representação (parágrafo único — extinção da punibilidade, art. 107, V, do CP) nas ações
  privadas e públicas condicionadas. Gatilhos… Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-composicao-civil-danos-jecrim"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["composicao-civil-danos-jecrim", "composicao civil", "danos jecrim"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Composição Civil dos Danos no JECRIM (art. 74 da Lei 9.099/95)

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

Esta skill orienta a **negociação, a redação do termo e a homologação** da **composição civil dos danos** na audiência preliminar do Juizado Especial Criminal: acordo **cível** entre autor do fato e vítima que, homologado por **sentença irrecorrível**, vale como **título executivo no juízo cível** e — nas ações penais **privadas** e **públicas condicionadas à representação** — acarreta a **renúncia** ao direito de queixa ou representação, **extinguindo a punibilidade** (art. 107, V, do CP). É o primeiro ato despenalizador do rito e o de maior volume na porta de entrada do JECRIM.

> **Lição central:** a composição civil serve aos **dois lados da mesa**. Para a **defesa**, é a via mais limpa de encerramento — extingue a persecução **sem pena, sem registro e sem consumir o quinquênio da transação** (art. 76, §4º). Para a **vítima**, é reparação **imediata e executável**, sem os anos da ação civil *ex delicto*. Quem domina as cláusulas do termo controla o resultado da audiência preliminar.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 72 a 75 da Lei 9.099/95 e do art. 107, V, do CP pela skill `lei-e-sumula`; sobre o alcance da renúncia e o descumprimento do acordo, **pesquise precedente atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até conferência — não cite julgado de memória.

## Instituto e base legal

- **Art. 74, *caput*:** a composição dos danos civis será **reduzida a escrito** e, **homologada pelo Juiz mediante sentença irrecorrível**, terá **eficácia de título a ser executado no juízo civil competente**.
- **Art. 74, parágrafo único:** tratando-se de **ação penal de iniciativa privada** ou de **ação penal pública condicionada à representação**, o acordo homologado **acarreta a renúncia** ao direito de queixa ou representação.
- **Arts. 72 e 73:** a tentativa de conciliação ocorre na **audiência preliminar**, conduzida pelo juiz ou por **conciliador sob sua orientação**, com a presença do autor do fato, da vítima e, se possível, do responsável civil.
- **Art. 107, V, do CP:** a renúncia extingue a punibilidade.

A natureza é **híbrida**: o acordo é cível (repara o dano), mas o efeito da homologação, nas ações privadas e condicionadas, é **penal e definitivo** — por isso o termo exige técnica de contrato e consciência de processo penal ao mesmo tempo.

## Cabimento e efeitos por espécie de ação penal

O instituto cabe em qualquer infração de menor potencial ofensivo (art. 61), mas o **efeito penal** varia com a espécie de ação — este é o eixo de toda a estratégia:

| Espécie de ação penal | Composição homologada gera | Efeito penal |
|---|---|---|
| **Privada** (ex.: crimes contra a honra) | Título executivo **+ renúncia à queixa** | **Extinção da punibilidade** (art. 107, V, CP) |
| **Pública condicionada** | Título executivo **+ renúncia à representação** | **Extinção da punibilidade** (art. 107, V, CP) |
| **Pública incondicionada** | **Apenas** título executivo | Persecução **prossegue** — segue-se a proposta de transação (art. 76) |

> **Na ação pública incondicionada a composição não extingue nada**, mas continua valiosa para a defesa: a reparação do dano é **atenuante** (art. 65, III, "b", do CP), pode configurar **arrependimento posterior** (art. 16 do CP — crime sem violência ou grave ameaça à pessoa, reparação voluntária até o **recebimento da denúncia ou da queixa**, com redução de 1/3 a 2/3) e pesa a favor do cliente na negociação da transação e de eventual ANPP.

**Limites materiais:** não se aplica a Lei 9.099/95 à **violência doméstica e familiar contra a mulher** — o art. 41 da Lei 11.340/2006 afasta a lei por inteiro, inclusive a composição (a Súmula 536/STJ explicita a vedação quanto à transação e ao sursis processual) — nem aos **crimes militares** (art. 90-A). Vítima **incapaz** compõe por representante legal; **pessoa jurídica** vítima, por quem seus atos constitutivos indicarem.

## Momento processual e condução da negociação

A composição é o **passo 3** da fase preliminar — o rito completo (TC → audiência preliminar → composição → representação → transação → denúncia oral) está mapeado na skill `transacao-penal` e **não é repetido aqui**. O que esta skill acrescenta é a **condução do ato**:

1. **Antes da audiência**, levante com o cliente: extensão real do dano (material e moral), capacidade de pagamento, interesse da vítima já sondado, espécie de ação penal do tipo imputado (define se há efeito extintivo).
2. **Na audiência**, a conciliação pode ser conduzida por **conciliador** (art. 73) — mas a **homologação é ato exclusivo do juiz**. Negocie valor, forma (à vista, parcelado, obrigação de fazer) e cláusulas acessórias.
3. **Obrigação de fazer é moeda legítima:** em crimes contra a honra, a **retratação pública** ou a remoção de publicação pode valer mais que dinheiro (ver BP `defesa-crimes-contra-honra`).
4. **Reduza tudo a escrito** no termo (modelo abaixo) e requeira a **homologação imediata** em audiência, com registro expresso do efeito do parágrafo único.
5. Frustrada a composição, **preserve o rito**: nos crimes condicionados, a vítima poderá representar (art. 75); a defesa passa a mirar a transação penal.

Para a mesa de negociação (âncoras, concessões, decisão informada do cliente), acione o agente `negociacao-penal` e a BP `justica-negocial` — que cobre ANPP, transação, sursis e colaboração; a composição do art. 74 é o degrau **anterior** a todos eles.

## Estrutura forense do termo de composição

O termo é **lavrado em audiência** (ou juntado como minuta pré-negociada) e deve conter cláusulas completas — termo lacônico gera execução litigiosa e discussão sobre o alcance da renúncia:

```
TERMO DE COMPOSIÇÃO CIVIL DOS DANOS (art. 74 da Lei 9.099/95)

Autos/Termo Circunstanciado nº [NÚMERO] — Juizado Especial Criminal de [COMARCA]/[UF]

1. DAS PARTES
   AUTOR(A) DO FATO: [nome, qualificação completa], assistido(a) por [advogado(a), OAB].
   VÍTIMA/OFENDIDO(A): [nome, qualificação completa], assistido(a) por [advogado(a), OAB,
   ou registro de que dispensou assistência].

2. DO OBJETO
   O presente acordo tem por objeto a composição integral dos danos civis decorrentes
   do fato descrito no TC nº [número], ocorrido em [data/local], SEM QUALQUER
   RECONHECIMENTO DE CULPA OU RESPONSABILIDADE PENAL pelo(a) autor(a) do fato.

3. DAS OBRIGAÇÕES
   3.1. O(a) autor(a) do fato pagará à vítima R$ [valor] ([extenso]), a título de danos
        [materiais e/ou morais], da seguinte forma: [à vista em audiência / parcelas de
        R$ X, vencendo a 1ª em DD/MM/AAAA, mediante depósito na conta {dados}].
   3.2. [Obrigação de fazer, se houver: retratação pública em {veículo/perfil}, remoção
        de publicação, devolução de bem — com prazo e forma de comprovação nos autos.]
   3.3. Em caso de inadimplemento, incidirão correção monetária [índice] e juros
        de mora, vencendo-se antecipadamente as parcelas vincendas.

4. DA QUITAÇÃO
   Cumprida integralmente a obrigação, a vítima dará plena, geral e irrevogável
   quitação quanto aos danos decorrentes do fato, para nada mais reclamar, na esfera
   cível, a qualquer título.

5. DA RENÚNCIA (ação privada ou pública condicionada)
   A vítima declara-se ciente de que a homologação deste acordo ACARRETA A RENÚNCIA
   ao direito de [queixa / representação], nos termos do art. 74, parágrafo único, da
   Lei 9.099/95, com a consequente EXTINÇÃO DA PUNIBILIDADE (art. 107, V, CP),
   efeito que NÃO SE DESFAZ pelo eventual inadimplemento — hipótese em que restará
   à vítima a execução deste título no juízo cível competente.

6. DA HOMOLOGAÇÃO
   As partes requerem a homologação por sentença irrecorrível (art. 74, caput),
   atribuindo-se ao presente a eficácia de título executivo judicial.

[LOCAL], [DATA].
Autor(a) do fato — Advogado(a) do autor(a) — Vítima — Advogado(a) da vítima
Ministério Público (ciência) — Juiz(a) de Direito (homologação)
```

**Pontos de técnica no termo:**
- **Cláusula de não reconhecimento de culpa** (item 2) protege o cliente em eventuais desdobramentos cíveis, administrativos ou disciplinares.
- **Cláusula 5 é a blindagem da defesa:** registrar que a renúncia opera **com a homologação** — e não com o pagamento — evita a tese de "renúncia condicionada ao adimplemento".
- **Quitação (item 4)** delimitada ao fato do TC: nem mais ampla (a vítima pode resistir), nem tão estreita que permita nova demanda pelo mesmo dano.
- **Execução:** o *caput* remete ao **juízo civil competente**; conforme o valor e a alçada, pode ser o próprio Juizado Especial Cível — confira a competência local via `lei-e-sumula` antes de indicar foro no termo.

## Teses típicas

**Da defesa (extinguir a persecução):**
- **Homologada a composição em ação privada/condicionada, a punibilidade está extinta** (art. 74, parágrafo único, c/c art. 107, V, CP) — requerer declaração expressa na sentença.
- **A renúncia é irretratável:** diversamente da transação penal (SV 35/STF — ver `transacao-penal`), o entendimento amplamente majoritário é que o **descumprimento do acordo não restaura** o direito de queixa/representação; a vítima executa o título no cível. Pesquise o estado atual da questão via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até conferir.
- **Extensão da renúncia aos coautores:** pela regra geral, a renúncia em relação a um dos autores a todos se estende (art. 49 do CPP); há controvérsia sobre sua aplicação à composição de apenas um dos autores no JECRIM — **tese a sustentar pela defesa do coautor não participante**, com pesquisa via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.
- **Na incondicionada:** reparação como atenuante (art. 65, III, "b", CP), arrependimento posterior (art. 16 CP) e reforço para transação/ANPP.

**Da vítima (reparação rápida):**
- Título executivo **judicial** imediato, sem ação de conhecimento nem espera pela sentença penal condenatória.
- Cláusulas de vencimento antecipado, correção e obrigação de fazer com prazo — o termo bem redigido dispensa nova discussão de mérito na execução.
- Se a proposta for indigna do dano, **recusar a composição preserva** a representação (art. 75) e a ação civil *ex delicto*.

## Erros comuns e pegadinhas

- **Confundir os efeitos da espécie de ação penal:** aceitar composição em ação **pública incondicionada** achando que extingue a punibilidade — não extingue; o feito segue para a transação. Identifique a espécie de ação **antes** da audiência (na dúvida sobre o tipo, confira via `lei-e-sumula`).
- **Prometer à vítima que o não pagamento "reabre o processo":** em regra **não reabre** — a renúncia se consuma com a homologação. Advogado da vítima que aceita parcelamento longo sem garantias troca a persecução penal por um título contra devedor insolvente.
- **Termo sem cláusula de renúncia expressa:** o efeito decorre da lei, mas a omissão alimenta litígio; registre-o sempre (cláusula 5).
- **Deixar a audiência sem homologação:** acordo assinado e não homologado **não é título executivo nem gera renúncia** — exija a sentença em audiência ou peticione pela homologação imediata.
- **Acordo extrajudicial não substitui o art. 74:** pela regra geral, o recebimento de indenização pela vítima **não implica renúncia** (art. 104, parágrafo único, do CPP) — o efeito extintivo é próprio da composição **homologada** no JECRIM. Se o cliente já pagou "por fora", leve o acordo à audiência preliminar para reduzir a termo e homologar.
- **Sentença irrecorrível:** não há apelação da homologação (art. 74, *caput*); vícios de consentimento se atacam por via autônoma no cível — apenas **embargos de declaração** para obscuridade/omissão/contradição (art. 83 da Lei 9.099/95, redação a confirmar via `lei-e-sumula`).
- **Decadência continua correndo:** a negociação frustrada **não suspende nem interrompe** o prazo decadencial de 6 meses da queixa/representação (art. 38 do CPP) — prazo de direito material, contado na forma do **art. 10 do CP** (inclui o dia do começo e **não se prorroga** para o dia útil seguinte). A vítima que "aguarda proposta" pode decair; a defesa, ciente disso, administra o tempo a seu favor dentro da ética.
- **Violência doméstica:** não tente composição do art. 74 em contexto da Lei Maria da Penha (art. 41 da Lei 11.340/2006 afasta a Lei 9.099 por inteiro) — o ato é nulo e expõe o advogado.
- **Vítima desassistida:** a ausência de advogado da vítima não impede a conciliação (art. 72), mas registre no termo a dispensa — previne alegação futura de vício de consentimento.
- **Confundir renúncia com retratação:** a renúncia do art. 74 é **anterior** ao exercício do direito e decorre do acordo; a retratação da representação já ofertada tem regime próprio — ver skill `retratacao-representacao`.

## Checklist antes de assinar e homologar

- [ ] Infração é de **menor potencial ofensivo** (art. 61) e **não** é violência doméstica (art. 41 da Lei 11.340/2006) nem crime militar (art. 90-A)?
- [ ] **Espécie de ação penal identificada** (privada / condicionada / incondicionada) e efeito extintivo confirmado?
- [ ] Cliente (autor do fato) tomou **decisão informada** — valor, parcelas, consequência da renúncia da vítima?
- [ ] Vítima ciente de que a renúncia é **irretratável** e de que o inadimplemento se resolve por **execução cível**?
- [ ] Termo contém: partes qualificadas, objeto sem confissão de culpa, obrigações líquidas com prazo, quitação delimitada, **cláusula de renúncia expressa**, foro de execução?
- [ ] **Homologação por sentença** obtida em audiência (ou requerida de imediato)?
- [ ] Requerida a **declaração de extinção da punibilidade** (art. 107, V, CP) na própria sentença, nas ações privadas/condicionadas?
- [ ] Prazo decadencial (art. 38 do CPP) mapeado no cenário de acordo frustrado?
- [ ] Citações de lei conferidas via `lei-e-sumula` e precedentes via `jurisprudencia-stj-stf` (pendências marcadas **[NÃO VERIFICADO]**)?

## Lembretes finais

- **Composição ≠ transação:** a composição é acordo **cível** com efeito penal reflexo (renúncia); a transação é acordo **penal** que aplica pena imediata. A composição **não consome o quinquênio** do art. 76, §4º — por isso, para a defesa, ela vem **sempre primeiro**.
- **O efeito extintivo só existe nas ações privadas e condicionadas** (art. 74, parágrafo único); na incondicionada, a composição é reparação com dividendos dosimétricos e negociais.
- **Homologação é o marco:** sem sentença, não há título nem renúncia; com sentença, a renúncia **não se desfaz** pelo inadimplemento (posição majoritária — pesquisar e marcar [NÃO VERIFICADO]).
- **Termo é contrato:** cláusulas líquidas, quitação delimitada, renúncia expressa, não reconhecimento de culpa.
- **Sentença irrecorrível** — o controle posterior é excepcional; capriche no ato, não conte com recurso.

## Apoie-se em

- **`transacao-penal`** — rito completo da fase preliminar (arts. 69 a 77) e quadro comparativo composição × transação × sursis processual; esta skill não o duplica.
- **`queixa-crime`** — a peça cuja propositura a renúncia do art. 74 extingue; consulte para identificar ação privada e prazo decadencial.
- **`retratacao-representacao`** — regime da retratação da representação já ofertada, instituto vizinho que não se confunde com a renúncia do art. 74.
- **Agente `negociacao-penal`** — condução da mesa: âncoras de valor, concessões, decisão informada do cliente.
- **BP `justica-negocial`** — panorama dos acordos penais (ANPP, transação, sursis, colaboração); a composição do art. 74 é o degrau anterior a todos.
- **BP `defesa-crimes-contra-honra`** — nicho de maior incidência da composição em ação privada; teses e obrigações de fazer (retratação pública).
- **`verificacao-citacoes`** — gate obrigatório: nenhuma súmula ou precedente citado de memória; conferir vigência dos arts. 72–75 da Lei 9.099/95.
- **`redacao-persuasiva-criminal`** — **sempre**: teoria do caso, narrativa, subsunção explícita e coesão — a régua de obra-prima que a revisão cobra, inclusive no termo de acordo.
