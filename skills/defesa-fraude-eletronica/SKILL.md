---
name: defesa-fraude-eletronica
description: >-
  Use ao defender acusado de crime patrimonial digital da Lei 14.155/2021 — estelionato eletrônico
  (CP 171, §2º-A/§2º-B), furto mediante fraude eletrônica (CP 155, §4º-B/§4º-C) e invasão de
  dispositivo informático (CP 154-A/154-B). Gatilhos: fraude eletrônica, golpe do PIX, golpe da
  falsa central, phishing, engenharia social, mula de conta, laranja, estelionato digital, fraude
  bancária…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-fraude-eletronica"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-fraude-eletronica", "defesa fraude", "fraude eletronica"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa nos Crimes de Fraude Eletrônica (Lei 14.155/2021)

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

Esta skill orienta a **defesa nos crimes patrimoniais digitais** criados/agravados pela Lei 14.155/2021 — a matéria mais recorrente da prática criminal atual (golpes de PIX, falsa central bancária, phishing, malware). Entrega **teses** e a **estrutura forense** para resposta à acusação, memoriais e habeas corpus. A **prova** digital não é daqui: auditar e impugnar a prova do Estado é da best-practice `cadeia-custodia-prova-digital`; produzir e preservar prova **pela** defesa (preservação de registros, contraprova) é da skill `preservacao-prova-digital-defesa` — esta skill cuida do **crime** (tipicidade, competência, procedibilidade, autoria e pena).

> **Lição central:** nesses crimes, o caso se decide na **classificação do fato**. Furto (§4º-B) × estelionato (§2º-A) × invasão (154-A) muda **tudo**: ação penal (representação ou não), competência (domicílio da vítima ou não), benefícios (ANPP/sursis processual) e pena. Antes de qualquer tese, responda: **quem praticou o ato de disposição patrimonial — a vítima ou o agente?**

> **Marco temporal (irretroatividade):** a Lei 14.155/2021 entrou em vigor em **maio de 2021** e é *novatio legis in pejus*. Fatos anteriores **não** recebem as penas de 4-8 anos nem as majorantes — permanecem no tipo da época (171 *caput*/§2º ou 155 §4º, II). Confira a data exata de vigência e a redação aplicável via agente `lei-e-sumula`.

## Os três tipos — mapa comparativo

| Tipo | Conduta nuclear | Pena | Ação penal |
|---|---|---|---|
| **Estelionato eletrônico** — CP 171, §2º-A | A fraude usa **informações fornecidas pela vítima ou por terceiro** induzido a erro por redes sociais, contato telefônico ou e-mail fraudulento — e a vítima **ela própria dispõe** do patrimônio (faz o PIX, paga o boleto falso) | Reclusão 4-8 anos + multa | **Condicionada à representação** (§5º), salvo Administração Pública, criança/adolescente, deficiente mental, maior de 70 anos ou incapaz |
| **Furto mediante fraude eletrônica** — CP 155, §4º-B | O **agente subtrai** por dispositivo eletrônico/informático (com ou sem violação de mecanismo de segurança ou programa malicioso) — a fraude burla a vigilância; a vítima **não** dispõe | Reclusão 4-8 anos + multa | **Incondicionada** |
| **Invasão de dispositivo informático** — CP 154-A | Invadir dispositivo de **uso alheio** com o **fim específico** de obter/adulterar/destruir dados sem autorização, ou instalar vulnerabilidades para vantagem ilícita | Reclusão 1-4 anos + multa (2-5 se obtém comunicações privadas/segredos — §3º) | **Condicionada à representação** (art. 154-B), salvo contra Administração Pública ou concessionárias |

**Majorantes correlatas:** servidor mantido fora do território nacional (171, §2º-B; 155, §4º-C, I — aumento de 1/3 a 2/3); vítima idosa ou vulnerável (171, §4º; 155, §4º-C, II — aumento de 1/3 ao dobro); prejuízo econômico na invasão (154-A, §2º — 1/3 a 2/3). As majorantes do 171 e do 155 são condicionadas à **"relevância do resultado gravoso"** (cláusula que **não** existe no 154-A, §2º) — ponto de ataque da dosimetria (abaixo).

## A distinção que decide o caso: quem dispõe do patrimônio

- **Golpe da falsa central / falso boleto / falso parente / engenharia social** → a vítima, enganada, **transfere voluntariamente** → **estelionato §2º-A**. Consequências defensivas: exige **representação** (possível decadência) e atrai a competência do **domicílio da vítima** (CPP 70, §4º).
- **Malware / acesso não autorizado à conta / clonagem** → o agente **subtrai sem ato de disposição** da vítima → **furto §4º-B**. Consequência: ação incondicionada, e a regra do CPP 70, §4º é de aplicação **controvertida** (literalidade fala só do art. 171).
- **Invasão sem subtração consumada** → **154-A autônomo**; quando a invasão é **meio** para o furto/estelionato, argua **consunção** (*ante factum* impunível) — não se pune invasão + furto em concurso pelo mesmo contexto fático.

**Vias de desclassificação (tese estratégica):**

| De | Para | O que a defesa ganha |
|---|---|---|
| Furto §4º-B | Estelionato §2º-A | Representação (§5º) — verificar **decadência** (CPP 38: 6 meses do conhecimento da autoria); competência do domicílio da vítima |
| Estelionato §2º-A | 171 *caput* | Quando o meio **não** é o do tipo — a fraude **não** se valeu de informações fornecidas pela vítima/terceiro induzido a erro por rede social, telefone ou e-mail fraudulento — pena cai para 1-5 anos: abre **ANPP** (CPP 28-A, mínima < 4) e **sursis processual** (Lei 9.099, art. 89) |
| Furto §4º-B / Estelionato §2º-A | 154-A | Sem subtração/vantagem consumada — pena 1-4 anos, representação, ANPP e sursis cabíveis |
| Consumado | **Tentativa** (CP 14, II) | Transferência bloqueada pelo banco/MED antes da disponibilidade → redução de 1/3 a 2/3 |

> Ao pedir desclassificação para tipo com mínima < 4 anos, **requeira expressamente** a baixa/remessa ao MP para proposta de **ANPP** (CPP 28-A) ou de suspensão condicional do processo — o benefício não vem de ofício. **Atenção:** o ANPP exige **confissão formal e circunstanciada** (CPP 28-A, *caput*) — pondere com o cliente antes de abrir essa via.

## Tese de incompetência territorial (CPP 70, §4º)

A Lei 14.155/2021 inseriu o §4º no art. 70 do CPP: nos crimes do **art. 171**, quando praticados mediante **depósito**, **cheque sem fundos/pagamento frustrado** ou **transferência de valores**, a competência é do **local do domicílio da vítima**; havendo **pluralidade de vítimas**, firma-se pela **prevenção**.

- **Natureza relativa** → argui-se por **exceção de incompetência** (CPP 95, II; 108), processada **em apartado** (CPP 396-A, §1º), **no prazo da resposta à acusação** — sob pena de **preclusão** e prorrogação da competência. Nulidade por inobservância da prevenção também é relativa (Súmula 706 STF).
- **Efeito do acolhimento:** remessa ao juízo competente; anulam-se em regra os atos decisórios (CPP 567), com possibilidade de ratificação dos instrutórios — pondere se a exceção **convém** taticamente antes de opô-la.
- **Alcance no furto §4º-B:** a literalidade do §4º refere-se ao **art. 171**; a extensão ao furto mediante fraude eletrônica e a definição do foro nessa hipótese (domicílio da vítima × local da conta lesada) têm oscilado — **pesquise o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até a conferência.
- **Justiça Federal só com interesse federal direto** (CF 109, IV — ex.: fraude contra a União ou empresa pública federal como vítima). Golpe pela internet **não** federaliza por si. Súmulas antigas de estelionato por cheque (48 e 244 do STJ) **não** regem a fraude eletrônica — o §4º é regra especial posterior; confira a vigência e o alcance de cada verbete via `lei-e-sumula`.

## Representação e decadência (CP 171, §5º; CP 154-B)

- A representação é **condição de procedibilidade** (condição da ação). Denúncia recebida sem ela (fora das exceções do §5º) → rejeição por falta de condição para o exercício da ação penal (CPP 395, II) ou, decorrido o prazo, **extinção da punibilidade pela decadência** (CP 107, IV; CPP 38 — 6 meses contados do conhecimento da autoria). O prazo decadencial é **material**: conta-se pelo CP 10 (inclui o dia do começo), é improrrogável e **não se dobra** para a Defensoria.
- **Retratação da representação** cabe **até o oferecimento da denúncia** (CPP 25) — a composição com a vítima (ressarcimento) pode fechar a via antes da ação; ver skill `retratacao-representacao`.
- **Retroatividade do §5º** (incluído pelo Pacote Anticrime) a fatos anteriores e a processos em curso: houve divergência sobre o marco (denúncia oferecida × recebida × trânsito) — **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**.
- **Pegadinha contra a defesa:** a jurisprudência dispensa formalidade da representação — boletim de ocorrência ou manifestação inequívoca da vítima pode valer. Antes de apostar na tese, verifique nos autos **se há** manifestação de vontade da vítima e **quando** ela soube da autoria (o termo inicial da decadência costuma ser o ponto fraco da acusação).
- **No furto §4º-B não há representação** — a tese só nasce **depois** da desclassificação para o 171. Estruture nessa ordem.

## Autoria na cadeia do golpe — mula × organizador

Os golpes operam em cadeia: engenheiro social → operador → **mulas de conta** (contas de passagem) → sacador. A denúncia costuma imputar coautoria a todos. A defesa da mula desmonta o vínculo subjetivo:

- **Ausência de dolo** — quem cedeu conta/chave PIX enganado (falsa promessa de emprego, "renda extra") não adere à fraude; sem consciência e vontade, não há concurso (CP 29). Cegueira deliberada exige **indiferença consciente** demonstrada, não presunção.
- **Participação de menor importância** (CP 29, §1º) — contribuição periférica e fungível na cadeia: redução de 1/6 a 1/3.
- **Cooperação dolosamente distinta** (CP 29, §2º) — quis participar de fato menos grave (ex.: acreditava em movimentação irregular, não em golpe contra terceiros): responde pelo que quis.
- **Auxílio posterior sem ajuste prévio não é participação** — o concurso (CP 29) exige contribuição **até a consumação** ou promessa **anterior** de auxílio; quem só recebe/repassa valores depois, sem ajuste prévio, desloca-se, se tanto, para **receptação** (CP 180) ou **favorecimento real** (CP 349) — penas muito menores, com reflexo em ANPP/sursis.
- **Afastar a associação criminosa (CP 288)** — exige **estabilidade e permanência**; a mula ocasional recrutada para um golpe não integra associação. Domínio do fato **não se presume** da posição na cadeia.

O agente `analise-denuncia` mapeia o que a inicial efetivamente descreve contra cada acusado — denúncia que não individualiza a conduta da mula é **inepta** (CPP 41; rejeição ou HC por falta de justa causa).

## Dosimetria — ataque às majorantes

| Alvo | Dispositivo | Ataque defensivo |
|---|---|---|
| Servidor fora do território nacional | 171, §2º-B; 155, §4º-C, I | Exige **prova técnica** da localização (laudo/relatório de infraestrutura) — o simples uso de internet ou de aplicativo estrangeiro **não** a presume |
| Vítima idosa/vulnerável | 171, §4º; 155, §4º-C, II | O **dolo deve abranger** o conhecimento da condição da vítima (golpe massificado e indiscriminado não a revela); idade comprovada por documento |
| "Relevância do resultado gravoso" | Cláusula comum às majorantes | É **critério legal de modulação da fração**: resultado modesto ou ressarcido → fração mínima ou afastamento; fração acima do mínimo **exige fundamentação concreta** (CP 68) |
| Bis in idem | CP 59 × majorantes | O prejuízo da vítima não pode valorar **ao mesmo tempo** as consequências do crime (1ª fase) e o "resultado gravoso" da majorante (3ª fase) |
| Privilégio | 155, §2º; 171, §1º | Primário + pequeno valor: no furto qualificado a Súmula 511 STJ admite privilégio com qualificadora **objetiva** — a extensão ao §4º-B é defensável; **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** |
| Reparação do dano | CP 16 | **Arrependimento posterior** — crime sem violência ou grave ameaça: reparação/restituição **voluntária até o recebimento da denúncia** → redução de 1/3 a 2/3; depois disso, atenuante (CP 65, III, *b*). O ressarcimento também esvazia a "relevância do resultado gravoso" da majorante |
| Golpes seriados | CP 71 | Sustente **continuidade delitiva** (mesmas condições de tempo, lugar e maneira de execução) contra o concurso material — diferença de anos na pena final |

Rode o agente `dosimetria-pena` sobre a sentença/denúncia para o cálculo comparativo das frações e do impacto de cada tese.

## Prova digital — onde esta skill para

Prints de conversa, extração de aparelho, logs bancários, rastreamento de IP e quebra telemática sustentam quase toda acusação de fraude eletrônica. A **auditoria e impugnação** dessa prova (hash, gap de custódia, dados brutos, espelhamento, ônus do Estado — CPP 158-A a 158-F) seguem a best-practice `cadeia-custodia-prova-digital`; os **pedidos de preservação e contraprova** (requerimentos ao provedor/banco, Marco Civil) são da skill `preservacao-prova-digital-defesa`. Aqui, o produto dessas frentes entra como **preliminar de ilicitude/fragilidade probatória** na peça — sinalize sempre "indícios de quebra a arguir", nunca "prova ilícita" como afirmação.

## Escolha do veículo processual

| Momento / objetivo | Veículo | Skill de apoio |
|---|---|---|
| Após citação — preliminares, exceção de incompetência, absolvição sumária | **Resposta à acusação** (CPP 396-A) + exceção **em apartado** | `excecoes-processuais` |
| Falta de representação/decadência, inépcia, atipicidade manifesta, trancamento | **Habeas corpus** | `habeas-corpus` |
| Fim da instrução — mérito, desclassificação, dosimetria | **Memoriais** (CPP 403, §3º) | `memoriais` |

## Estrutura forense (resposta à acusação / memoriais)

```
I — PRELIMINARES
   1. Exceção de incompetência territorial (CPP 70, §4º) — EM APARTADO,
      no prazo da resposta (CPP 396-A, §1º; 95, II; 108).
   2. Falta de representação / decadência (CP 171, §5º; CPP 38) —
      rejeição (CPP 395, II) ou extinção da punibilidade (CP 107, IV).
   3. Inépcia da denúncia (CPP 41) — conduta da "mula" não individualizada.
   4. Ilicitude/fragilidade da prova digital — indícios de quebra da cadeia
      de custódia (CPP 158-A a 158-F; BP cadeia-custodia-prova-digital).

II — MÉRITO (ordem da eventualidade)
   1. Atipicidade / ausência de dolo (cessão de conta de boa-fé; CP 29).
   2. Desclassificação: §4º-B → §2º-A (representação + foro) / §2º-A → 171
      caput (meio diverso do tipo) / crime-meio 154-A absorvido (consunção).
   3. Tentativa (CP 14, II) — valores bloqueados/devolvidos antes da
      disponibilidade.
   4. Participação de menor importância / cooperação dolosamente distinta
      (CP 29, §§1º e 2º); afastamento do CP 288 (sem estabilidade).

III — SUBSIDIÁRIO — DOSIMETRIA
   Afastar majorantes (servidor no exterior sem prova; idoso sem dolo
   abrangente); fração mínima pela "relevância do resultado gravoso";
   bis in idem; privilégio (155, §2º / 171, §1º); arrependimento
   posterior (CP 16); continuidade delitiva.

IV — PEDIDOS, em ordem sucessiva + requerimento expresso de remessa ao MP
   para ANPP (CPP 28-A) ou sursis processual (Lei 9.099, art. 89) em caso
   de desclassificação.
```

## Erros comuns e pegadinhas

- **Preclusão da incompetência** — territorial é relativa: não oposta a exceção **no prazo da resposta à acusação**, prorroga-se a competência. E argui-se **em apartado**, não como tópico da resposta.
- **Pedir decadência em furto** — o §4º-B é **incondicionado**; a tese da representação só existe após desclassificar para o 171. Inverter a ordem derruba a peça.
- **Misturar contagem de prazos** — o prazo da resposta/exceção é **processual** (CPP 798, §1º: exclui o dia do começo, inclui o do vencimento) e **dobra para a Defensoria** (LC 80/94, arts. 44, I, 89, I e 128, I); a **decadência** é **material** (CP 10: inclui o dia do começo), improrrogável e **sem dobra**.
- **Ignorar o marco temporal** — fato anterior à vigência da Lei 14.155/2021 capitulado no §2º-A/§4º-B é **erro de capitulação com pena ilegal** (irretroatividade): tese autônoma e forte.
- **Aceitar a majorante do servidor estrangeiro sem laudo** — mera menção a "aplicativo internacional" não prova infraestrutura fora do país.
- **Esquecer o requerimento de ANPP/sursis** ao pedir desclassificação — o ganho prático da tese se perde sem o pedido expresso de remessa ao MP.
- **Confundir os planos** — tipicidade/autoria (esta skill) × prova digital (BP `cadeia-custodia-prova-digital` + `preservacao-prova-digital-defesa`): a mesma falha (ex.: print sem hash) alimenta os dois, mas em capítulos distintos da peça.
- **Endereçamento do HC** — contra ato do juiz de 1º grau, ao Tribunal (TJ/TRF); contra acórdão de Tribunal, ao STJ. Trancamento por falta de representação/inépcia é via clássica; ver `hc-tribunais-superiores` para instâncias extraordinárias.
- **Citar competência do furto eletrônico "de memória"** — o cenário pós-14.155 oscilou; sem conferência via `jurisprudencia-stj-stf`, a afirmação vai marcada **[NÃO VERIFICADO]** e não entra em peça final.

## Checklist antes de protocolar

- [ ] **Data do fato** anterior à vigência da Lei 14.155/2021? → capitulação e pena da lei antiga.
- [ ] **Quem dispôs do patrimônio** identificado (vítima → 171; agente → 155)? Desclassificação avaliada?
- [ ] **Representação** nos autos? Termo inicial da **decadência** (CPP 38) calculado? **Retratação** (CPP 25) ou **reparação do dano** (CP 16) viáveis?
- [ ] **Exceção de incompetência** (CPP 70, §4º) oposta em apartado, no prazo? Conveniência tática ponderada (CPP 567)?
- [ ] Conduta de cada acusado **individualizada** na denúncia (CPP 41)? Teses de mula estruturadas (CP 29, §§1º/2º; receptação/favorecimento)?
- [ ] **Majorantes** atacadas: prova do servidor no exterior; dolo quanto ao idoso/vulnerável; modulação pela relevância do resultado; bis in idem?
- [ ] **Consunção** do 154-A pelo crime-fim verificada? **Tentativa** (bloqueio/MED) verificada?
- [ ] Prova digital auditada pela BP `cadeia-custodia-prova-digital`; preservação requerida via `preservacao-prova-digital-defesa`?
- [ ] Pedido expresso de **ANPP/sursis** em caso de desclassificação?
- [ ] Toda jurisprudência passou pelo `verificador-citacoes`? Dispositivos recentes conferidos via `lei-e-sumula`?

## Apoie-se em

- **`redacao-persuasiva-criminal`** — padrão de obra-prima para a redação final: teoria do caso, narrativa, subsunção explícita. **Sempre.**
- **`excecoes-processuais`** — forma e processamento da exceção de incompetência (CPP 95-112); esta skill dá o fundamento (CPP 70, §4º), aquela dá o rito.
- **`memoriais`** — estrutura das alegações finais; as teses daqui entram no capítulo de mérito e dosimetria.
- **`habeas-corpus`** — trancamento por falta de representação, inépcia ou atipicidade manifesta.
- **`retratacao-representacao`** — via consensual: retratação da vítima até o oferecimento da denúncia (CPP 25).
- **`preservacao-prova-digital-defesa`** (desta onda) — pedidos de preservação de registros e contraprova técnica; complementa esta skill no eixo probatório.
- **BP `cadeia-custodia-prova-digital`** — auditoria e impugnação da prova digital (CPP 158-A a 158-F); nunca duplicar aqui o que é dela.
- **Agentes:** `analise-denuncia` (individualização das condutas na cadeia do golpe), `dosimetria-pena` (cálculo comparativo das majorantes e frações), `verificador-citacoes` (gate obrigatório de toda jurisprudência), `jurisprudencia-stj-stf` (precedentes atuais — competência do furto eletrônico, retroatividade do §5º, privilégio no §4º-B) e `lei-e-sumula` (vigência e redação de dispositivos e súmulas).
