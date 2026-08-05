---
name: eca-defesa-ato-infracional
description: >-
  Use ao defender adolescente na apuração de ato infracional (ECA, Lei 8.069/90, arts. 171-190) —
  oitiva informal, remissão (pré-processual e judicial), defesa prévia, audiência de apresentação,
  memoriais do rito infracional, liberação da internação provisória e HC em favor de adolescente.
  Gatilhos: ato infracional, ECA, adolescente apreendido, menor apreendido, medida socioeducativa,
  MSE, internação, internação provisória… Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-eca-defesa-ato-infracional"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["eca-defesa-ato-infracional", "defesa infracional"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# ECA — Defesa na Apuração de Ato Infracional

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

Esta skill orienta a **defesa técnica do adolescente** na apuração de ato infracional (ECA, arts. 171-190), da apreensão em flagrante à sentença. O rito infracional **não é o rito do CPP**: tem fases, prazos, vocabulário e remédios próprios — e as skills processuais "de adulto" do sistema não o cobrem. Entregáveis típicos: pedido de liberação/revogação da internação provisória, pedido de remissão, defesa prévia, memoriais e **habeas corpus** em favor do adolescente.

> **Lição central:** no rito infracional, a liberdade do adolescente se ganha em **três frentes cumuláveis**: (1) o **prazo** — internação provisória de no máximo **45 dias improrrogáveis** (arts. 108 e 183); (2) a **taxatividade do art. 122** — sem violência ou grave ameaça, sem reiteração grave e sem descumprimento reiterado de medida anterior, **não há internação**; (3) a **remissão** — saída consensual disponível em qualquer fase antes da sentença (arts. 126-128 e 188).

> **Princípios reitores:** condição peculiar de **pessoa em desenvolvimento** (art. 6º), proteção integral (art. 1º), e a tríade da privação de liberdade — **brevidade, excepcionalidade e respeito à condição peculiar** (CF, art. 227, §3º, V; ECA, art. 121). "Em nenhuma hipótese será aplicada a internação, havendo outra medida adequada" (art. 122, §2º).

## Instituto e base legal

- **Ato infracional** é a conduta descrita como crime ou contravenção penal (art. 103) praticada por **inimputável menor de 18 anos** (CF, art. 228; CP, art. 27). Adolescente (12-18) responde por **medida socioeducativa** (art. 112); criança (< 12) recebe apenas **medidas de proteção** (arts. 101 e 105).
- **Medidas socioeducativas (art. 112):** advertência; obrigação de reparar o dano; prestação de serviços à comunidade (máx. 6 meses); liberdade assistida (mín. 6 meses); semiliberdade; internação; e medidas protetivas do art. 101, I a VI. **Advertência** exige prova da materialidade e **indícios** de autoria; qualquer outra medida exige **prova** de autoria e materialidade (art. 114).
- **Garantias processuais expressas:** devido processo legal (art. 110) e o rol do art. 111 — conhecimento pleno da atribuição do ato, igualdade na relação processual, **defesa técnica por advogado** (irrenunciável — art. 207), assistência judiciária gratuita, direito de ser ouvido e de solicitar a presença dos pais.
- **Execução das medidas:** Lei 12.594/2012 (SINASE) — fase posterior à sentença, fora do escopo desta skill (reavaliação máxima a cada 6 meses, teto de 3 anos e liberação compulsória aos 21 — art. 121, §§ 2º a 5º — entram aqui apenas como argumento de proporcionalidade).
- **Sigilo:** o procedimento corre em segredo de justiça; é vedada a divulgação de atos que identifiquem o adolescente (arts. 143 e 247). Use **iniciais** nas peças e cuide da tramitação sigilosa.

## Mapa do rito (arts. 171-190) — cada fase é uma oportunidade defensiva

| Fase | Base legal | O que a defesa faz |
|---|---|---|
| Apreensão em flagrante | arts. 106-107, 171-172 | Fiscalizar legalidade: só flagrante ou ordem escrita e fundamentada; comunicação **imediata** ao juiz e à família (art. 107) |
| Liberação aos pais | art. 174 | Regra: liberação mediante compromisso de apresentação ao MP; exceção (gravidade/repercussão social) exige justificativa concreta |
| Oitiva informal no MP | art. 179 | Acompanhar; **não é interrogatório nem prova** — declarações ali colhidas não sustentam sozinhas a medida |
| Destino dado pelo MP | art. 180 | Arquivar, conceder **remissão** ou **representar** — pleitear arquivamento/remissão antes da representação |
| Representação | art. 182 | Atacar inépcia; lembrar que ela independe de prova pré-constituída (art. 182, §2º), mas a **sentença** não dispensa prova (art. 114) |
| Audiência de apresentação | art. 184 | Primeira oitiva judicial do adolescente e dos pais; o juiz decide **desde logo** sobre internação provisória (art. 108) — pedir liberação |
| **Defesa prévia** | art. 186, §3º | **3 dias** contados da audiência de apresentação: teses + rol de testemunhas |
| Audiência em continuação | art. 186, §4º | Instrução, debates (ou memoriais) e sentença |
| Sentença | arts. 189-190 | Hipóteses de improcedência (equivalem à absolvição); intimação pessoal do adolescente quando internado |

> A remissão **judicial** pode ser concedida em **qualquer fase** antes da sentença (art. 188) — reitere o pedido a cada oportunidade em que o cenário melhorar.

## Internação provisória — 45 dias improrrogáveis (arts. 108 e 183)

A internação antes da sentença tem **dupla trava legal**:

1. **Art. 108:** prazo máximo de **45 dias**, decisão **fundamentada** em indícios suficientes de autoria e materialidade e na **necessidade imperiosa** da medida (parágrafo único). Fundamentação genérica ou gravidade abstrata do ato **não** basta.
2. **Art. 183:** o procedimento com adolescente internado deve ser **concluído** no prazo **máximo e improrrogável** de 45 dias.

**Trava de local (art. 185):** a internação **não pode ser cumprida em estabelecimento prisional**; inexistindo entidade adequada na comarca, transferência imediata para a mais próxima e, se impossível, permanência em repartição policial (seção isolada de adultos) por **no máximo 5 dias** — excedido, é constrangimento ilegal autônomo.

**Consequência:** ultrapassado o prazo — ou decretada a internação sem a fundamentação do art. 108 —, há **constrangimento ilegal**, atacável por pedido de liberação ao próprio juízo e, na inércia ou urgência, por **habeas corpus** (ficha **ECA-03** do acervo). A jurisprudência do STJ trata o prazo como improrrogável mesmo em feitos complexos — a contratese da prorrogação excepcional está marcada `[a confirmar]` no acervo; **pesquise via agente `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** antes de rebatê-la ou invocá-la.

## Remissão — a saída consensual do rito (arts. 126-128 e 188)

| Espécie | Quem concede | Momento | Efeito |
|---|---|---|---|
| **Pré-processual (ministerial)** | MP, com **homologação judicial** (art. 181) | Antes de iniciado o procedimento judicial (art. 126, *caput*) | **Exclusão** do processo |
| **Judicial** | Autoridade judiciária, ouvido o MP | Depois de iniciado e **antes da sentença** (art. 126, p.ú.; art. 188) | **Suspensão ou extinção** do processo |

**Regras de ouro (art. 127):**
- A remissão **não implica reconhecimento de responsabilidade** nem prevalece para antecedentes.
- Pode ser cumulada com medida socioeducativa, **exceto semiliberdade e internação**.
- A medida aplicada por remissão pode ser **revista judicialmente a qualquer tempo** (art. 128).

**Garantias que a defesa fiscaliza:**
- **Súmula 108/STJ:** a aplicação de medida socioeducativa ao adolescente é da **competência exclusiva do juiz** — remissão ministerial cumulada com medida sem homologação judicial é nula.
- **Remissão homologada sem defensor:** há precedente do STJ reconhecendo violação ao contraditório e à ampla defesa quando a remissão ministerial é homologada após oitiva informal **sem assistência de defensor** (ficha **ECA-09** do acervo) — **pesquise o estado atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** antes de citar.
- Remissão **não é confissão premiada**: recuse cláusulas que condicionem a remissão à admissão dos fatos.

## Taxatividade do art. 122 — quando a internação (não) cabe

O rol do art. 122 é **taxativo**. A internação definitiva só é possível em três hipóteses:

| Inciso | Hipótese | Limite |
|---|---|---|
| I | Ato praticado com **violência ou grave ameaça à pessoa** | — |
| II | **Reiteração** no cometimento de outras infrações **graves** | — |
| III | **Descumprimento reiterado e injustificável** de medida anteriormente imposta | **Internação-sanção: máx. 3 meses** (art. 122, §1º) |

**Teses estruturais:**
- **Súmula 492/STJ:** o ato infracional análogo ao **tráfico de drogas**, por si só, **não conduz** obrigatoriamente à internação. Tráfico não envolve violência nem grave ameaça — fora do inciso I (ficha **ECA-05**). O mesmo raciocínio vale para furto, receptação e outros atos sem violência.
- **Art. 122, §2º:** havendo outra medida adequada, a internação é **vedada** — exija da sentença a demonstração concreta de que nenhuma medida em meio aberto basta.
- **"Reiteração" (inciso II):** o número mínimo de atos anteriores exigido oscilou na jurisprudência — **confirme o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**.
- **Internação-sanção (inciso III):** exige oitiva prévia do adolescente (**Súmula 265/STJ**) e não pode ultrapassar 3 meses; descumprimento **justificado** (ex.: falta de vaga, doença) não autoriza a regressão.
- Na sentença, cobre também a **gravidade concreta**: gravidade abstrata do tipo não fundamenta internação (raciocínio espelhado nas fichas **ECA-01** e **ECA-05**).

## Prescrição das medidas socioeducativas (Súmula 338/STJ)

**Súmula 338/STJ:** a **prescrição penal é aplicável nas medidas socioeducativas** — tanto à pretensão socioeducativa (antes da sentença) quanto à executória. Como a MSE não tem "pena cominada", o cálculo é construção jurisprudencial: toma-se por parâmetro a pena máxima em abstrato do tipo correspondente, com a **redução de metade do art. 115 do CP** (agente menor de 21), e, para medidas aplicadas sem termo, o teto de 3 anos da internação. **Esse método de cálculo deve ser confirmado via `jurisprudencia-stj-stf` e marcado [NÃO VERIFICADO]** até a conferência — mas a aplicabilidade da prescrição em si é sumulada e segura. Levante a prescrição em **preliminar** de qualquer peça do rito.

## Estrutura forense das peças

### Endereçamento — sempre a Vara da Infância e da Juventude

Competência da **Justiça da Infância e da Juventude** (arts. 146-148): Vara da Infância e da Juventude da comarca (ou vara criminal com essa competência cumulada, nas comarcas menores). **Nunca** endereçar à vara criminal comum como se fosse processo de adulto.

### Peça 1 — Defesa prévia (art. 186, §3º)

```
AO JUÍZO DA VARA DA INFÂNCIA E DA JUVENTUDE DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº] — Representação por ato infracional
[INICIAIS DO ADOLESCENTE], já qualificado(a), por seu(sua) defensor(a),
vem apresentar DEFESA PRÉVIA (art. 186, §3º, do ECA), expondo:

I — PRELIMINARES [nulidades da apreensão/oitiva informal; inépcia da
    representação; prescrição — Súmula 338/STJ; pedido de remissão judicial
    (art. 188), suspendendo ou extinguindo o processo]
II — DO MÉRITO [negativa de autoria/participação; atipicidade; fragilidade
    probatória — a representação dispensa prova pré-constituída, a sentença não]
III — DA MEDIDA (subsidiário) [impossibilidade de internação — taxatividade do
    art. 122 e Súmula 492/STJ; suficiência de medida em meio aberto — art. 122, §2º]
IV — DOS PEDIDOS [improcedência (art. 189); subsidiariamente remissão;
    subsidiariamente medida em meio aberto; liberação da internação provisória]
+ ROL DE TESTEMUNHAS (obrigatório nesta peça — precluí depois)
```

### Peça 2 — Pedido de liberação/revogação da internação provisória

Petição ao próprio juízo: ausência de fundamentação concreta (art. 108, p.ú.) e/ou **excesso do prazo de 45 dias** (arts. 108 e 183) → liberação imediata, com aplicação, no máximo, de medida protetiva. Estruture como o pedido de soltura da skill `liberdade-provisoria-relaxamento`, adaptando vocabulário e base legal ao ECA.

### Peça 3 — Memoriais / alegações finais do rito infracional

Siga a skill `memoriais` para arquitetura e técnica; aqui, as adaptações: pedido principal é **improcedência da representação** (art. 189, I a IV — inexistência do fato, falta de prova do fato, atipicidade infracional, falta de prova de autoria); subsidiários em cascata — remissão judicial → medida em meio aberto → afastamento da internação (art. 122). **Súmula 342/STJ:** é **nula** a desistência de outras provas em face da confissão do adolescente — confissão isolada não sustenta a procedência.

### Peça 4 — Habeas corpus em favor do adolescente

A **estrutura da peça** (três sujeitos, verbo impetrar, endereçamento por autoridade coatora) está na skill `habeas-corpus` — não a duplique. Adaptações do rito infracional:
- **Paciente:** o adolescente (identificado por iniciais, com qualificação nos autos sigilosos); **impetrado:** o Juiz da Vara da Infância (HC ao **TJ** — verifique no regimento interno local se a competência é de câmara criminal ou de câmara especializada da infância) ou o representante do MP (também ao TJ).
- **Hipóteses típicas:** internação provisória além de 45 dias (ECA-03); internação decretada fora do rol do art. 122; internação sem fundamentação concreta; excesso de prazo na conclusão do procedimento (art. 183).
- **Pedido:** concessão da ordem para **liberação imediata** do adolescente, expedindo-se **alvará de desinternação** (não "alvará de soltura de réu" — cuide do vocabulário).

## Teses defensivas típicas (fichas do acervo)

O acervo `acervo/teses-modelos/crime-eca.md` traz **15 fichas ECA-xx** com fundamento, contratese e fonte. Para esta skill, as centrais:
- **ECA-03** — internação provisória > 45 dias = constrangimento ilegal (art. 108).
- **ECA-05** — ato análogo a tráfico não autoriza internação (art. 122, I; Súmula 492/STJ).
- **ECA-09** — nulidade da remissão homologada sem defensor (arts. 126, 180 e 111; CF, art. 5º, LV).
- **ECA-01/ECA-02, ECA-04, ECA-06, ECA-07** — extinção, unificação e fato consumado: teses da **execução** da MSE, úteis como argumento de proporcionalidade já na sentença.
- As fichas de crimes de **adultos** contra crianças/adolescentes (**ECA-08** — defensiva — e as acusatórias **ECA-10 a ECA-15**: corrupção de menores, incluída a Súmula 500/STJ, competência do art. 241-A e pornografia infantil) ficam **fora** desta skill: são processo penal comum.

## Erros comuns e pegadinhas

- **Vocabulário trai o despreparo:** não existe "réu", "denúncia", "pena", "crime" nem "condenação" — existem **adolescente representado, representação, medida socioeducativa, ato infracional e procedência da representação**. Errar o vocabulário mina a credibilidade da peça.
- **Prazo da defesa prévia: 3 dias** da audiência de apresentação (art. 186, §3º) — e o **rol de testemunhas vai nela**, sob pena de preclusão.
- **Recursos seguem o CPC, não o CPP** (art. 198): prazo único de **10 dias** para MP e defesa, salvo embargos de declaração (art. 198, II), e **independem de preparo** (art. 198, I) — não use os prazos nem o rito da apelação criminal comum; confirme a redação vigente do art. 198 via agente `lei-e-sumula` antes de protocolar.
- **Contagem do prazo recursal:** dias **úteis** (CPC, art. 219) × dias **corridos** (especialidade + prioridade absoluta) é divergência real — **confirme o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**; na dúvida, protocole pelo cômputo **mais curto** (dias corridos). **Defensoria Pública tem prazo em dobro** (LC 80/94, arts. 44, I, 89, I e 128, I) e intimação pessoal; advogado constituído, não.
- **Superveniência da maioridade não encerra nada** — **Súmula 605/STJ:** os 18 anos não interferem na apuração nem na medida em curso (liberação compulsória só aos 21 — art. 121, §5º). Não desperdice a peça com esse pedido.
- **Oitiva informal não é prova** (art. 179) — impugne sentenças que a usem como lastro probatório; e a confissão não dispensa instrução (Súmula 342/STJ).
- **Representação sem prova pré-constituída é válida** (art. 182, §2º) — não gaste a preliminar atacando isso; ataque a **falta de prova na sentença** (art. 114).
- **Endereçamento:** Vara da Infância e da Juventude — e HC ao TJ conforme o regimento local (câmara criminal × câmara da infância varia por tribunal).
- **Sigilo (arts. 143 e 247):** iniciais sempre; anexos e publicações sem identificação do adolescente.
- **Criança (< 12 anos) não recebe MSE** — apenas medidas protetivas (art. 105): se a "apuração" mira criança, a via é o Conselho Tutelar/medidas do art. 101, não o rito dos arts. 171-190.

## Checklist antes de protocolar

- [ ] Vocabulário do rito infracional em toda a peça (representação/medida/adolescente)?
- [ ] Endereçamento à Vara da Infância e da Juventude (ou TJ, no HC)?
- [ ] Internação provisória: fundamentação concreta (art. 108, p.ú.) e prazo de 45 dias conferidos (arts. 108 e 183)?
- [ ] Remissão pedida (e repetida) em todas as janelas — arts. 126, 181 e 188?
- [ ] Internação atacada pela taxatividade do art. 122 + Súmula 492/STJ + §2º (medida adequada diversa)?
- [ ] Prescrição verificada (Súmula 338/STJ) e levantada em preliminar?
- [ ] Rol de testemunhas dentro da defesa prévia (art. 186, §3º — 3 dias)?
- [ ] Precedentes marcados [NÃO VERIFICADO] até conferência via `jurisprudencia-stj-stf`; dispositivos recentes conferidos via `lei-e-sumula`?
- [ ] Sigilo preservado (iniciais, arts. 143 e 247)?

## Apoie-se em

- **`acervo/teses-modelos/crime-eca.md`** — as 14 fichas ECA-xx (tese, fundamento, contratese, fonte); cite a ficha, confirme o precedente antes de transcrever número.
- **Skill `habeas-corpus`** — estrutura completa da peça de HC (três sujeitos, endereçamento, verbo impetrar); esta skill acrescenta apenas as adaptações do rito infracional.
- **Skill `memoriais`** — arquitetura das alegações finais; aqui, os pedidos do art. 189 e a cascata subsidiária infracional.
- **Skill `redacao-persuasiva-criminal`** — **sempre**: teoria do caso, narrativa, subsunção explícita e coesão (a régua de obra-prima que a revisão cobra).
- **Agente `triagem-novo-caso`** — na entrada do caso: idade na data do fato (marco da inimputabilidade), flagrante ou ordem, prazo da internação já corrido.
- **Agente `verificador-citacoes`** (best-practice `verificacao-citacoes`) — Citation Gate: nenhuma súmula, precedente ou dispositivo citado de memória; tudo conferido antes de sair do rascunho.
