---
name: acao-penal-rito-crimes-propriedade-imaterial
description: >-
  Use ao analisar o RITO e a NATUREZA DA AÇÃO PENAL nos crimes contra a propriedade imaterial —
  direito autoral (art. 184 CP) e propriedade industrial (Lei 9.279/96) — sob o procedimento
  especial dos arts. 524 a 530-I do CPP. Gatilhos: crimes contra a propriedade imaterial, violação
  de direito autoral (art. 184 CP), pirataria, CD/DVD/software pirata, exame pericial prévio (art.
  525…. Não use para conclusão definitiva sem autos suficientes, fonte atual ou revisão
  profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, propriedade-imaterial, procedimento-especial, acao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acao-penal-rito-crimes-propriedade-imaterial"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acao-penal-rito-crimes-propriedade-imaterial", "acao penal", "propriedade imaterial"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Rito e ação penal dos crimes contra a propriedade imaterial (arts. 524-530-I CPP)

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

Esta skill orienta a análise do **procedimento especial** e da **natureza da ação penal** nos crimes contra a propriedade imaterial — os crimes contra o **direito autoral** (art. 184 do CP) e contra a **propriedade industrial** (Lei 9.279/96 — marcas, patentes, desenhos industriais, concorrência desleal). O rito está nos **arts. 524 a 530-I do CPP** e tem uma peculiaridade que decide o caso logo na porta de entrada: **dois procedimentos distintos** — um para os crimes de **ação privada** (arts. 524-530) e outro para os de **ação pública** (arts. 530-A a 530-I).

> **Lição central:** antes de qualquer coisa, **defina a natureza da ação** pelo **art. 186 do CP** — é ela que diz se o caso entra pela porta da **queixa** (art. 184, *caput*: ação privada) ou da **denúncia** (art. 184, §§ 1º e 2º: pública incondicionada; § 3º: pública condicionada). Errar a porta contamina tudo: legitimidade, prazo decadencial e o próprio rito. E, nos crimes que **deixam vestígio**, a peça acusatória **não é recebida sem o exame pericial prévio** (art. 525) — é a primeira tese que a defesa procura.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 184 e 186 do CP** e dos **arts. 524-530-I do CPP** — o regime atual decorre da **Lei 10.695/2003**, que reescreveu o art. 184, deu nova redação ao art. 186 e acrescentou os arts. 530-A a 530-I. Confira também os **arts. 199-210 da Lei 9.279/96 (LPI)** e as súmulas/temas via a skill `jurisprudencia-stj-stf` antes de fundamentar. **Não cite a sistemática anterior a 2003.**

## Nota de polo (advocacia privada)

Esta matéria envolve, com frequência, o **ofendido titular de direito** oferecendo **queixa-crime** (ação privada). Isso é **advocacia privada do querelante** — não o polo de acusação pública (MP). A skill serve, portanto, a dois usos legítimos da advocacia: a **defesa técnica do acusado** (foco preponderante) e a **representação do ofendido/titular** que precisa que a queixa seja regularmente recebida. Não use este material para atuação como órgão de acusação pública.

## A dupla porta — mapa da ação penal (art. 186 do CP)

| Dispositivo do CP | Conduta (síntese) | Ação penal | Rito |
|---|---|---|---|
| art. 184, *caput* | violar direito de autor e conexos | **privada** (queixa) — art. 186, I | arts. 524-530 |
| art. 184, § 1º | reprodução total/parcial **com intuito de lucro** | **pública incondicionada** — art. 186, II | arts. 530-B a 530-I |
| art. 184, § 2º | distribuir, vender, **expor à venda**, alugar, ter em depósito cópia pirata, com intuito de lucro | **pública incondicionada** — art. 186, II | arts. 530-B a 530-I |
| art. 184, § 3º | oferecer ao público por cabo/fibra/satélite etc., com intuito de lucro | **pública condicionada à representação** — art. 186, IV | arts. 530-B a 530-I |
| crime em desfavor de entidade de direito público | (autarquia, EP, SEM, fundação pública) | **pública incondicionada** — art. 186, III | arts. 530-B a 530-I |

- **Excludente do art. 184, § 4º:** não há crime nos §§ 1º a 3º quando se tratar de **exceção ou limitação da LDA (Lei 9.610/98)** ou de **cópia em um só exemplar, para uso privado do copista, sem intuito de lucro** direto ou indireto. Tese de atipicidade de primeira ordem.
- **Propriedade industrial (LPI):** em regra a ação é **privada** (queixa), salvo hipótese de ação pública. **Confira nos arts. 199 e 200 da Lei 9.279/96** a espécie de ação e a remissão ao rito do CPP [conferir vigência].

## Base legal

- **Art. 184 do CP** — violação de direito autoral (*caput* + §§ 1º a 4º).
- **Art. 186 do CP** — define a espécie de ação penal (a "chave" do caso).
- **Arts. 524 a 530 do CPP** — procedimento nos crimes de **ação privada**.
- **Arts. 530-A a 530-I do CPP** (Lei 10.695/2003) — procedimento nos crimes de **ação pública**.
- **Lei 9.610/98 (LDA)** — lei civil que define a violação de direito autoral (referência do art. 184, § 4º).
- **Lei 9.279/96 (LPI), arts. 183-195** — crimes contra a propriedade industrial; **arts. 199-200** — espécie de ação e remissão ao rito do CPP.
- **Art. 158 do CPP** — corpo de delito indispensável nos crimes que deixam vestígio (fundamento do art. 525); a confissão **não** supre a perícia.
- **Art. 395 do CPP** — rejeição da peça acusatória (falta de pressuposto, condição da ação ou justa causa).

## Roteiro A — crime de AÇÃO PRIVADA (art. 184, *caput*; LPI): arts. 524-530

1. **Aplicação do procedimento comum (art. 524)** — observa-se o rito comum, com as modificações dos artigos seguintes.
2. **Exame pericial prévio (art. 525)** — nos crimes que **deixam vestígio**, a queixa (ou denúncia) **não será recebida** se não estiver instruída com o **exame pericial** dos objetos que constituam o corpo de delito. É **condição específica de procedibilidade**: sem laudo → **rejeição** (art. 395 CPP).
3. **Prova do direito de ação (art. 526)** — sem a **prova do direito à ação** (titularidade do direito autoral/industrial), não se recebe a queixa nem se ordena diligência preliminar requerida pelo ofendido.
4. **Busca e apreensão por dois peritos (art. 527)** — a diligência é realizada por **dois peritos** nomeados pelo juiz, que verificam a existência de fundamento para a apreensão; o **laudo é apresentado em 3 dias** após a diligência. O requerente pode **impugnar** laudo contrário à apreensão (parágrafo único).
5. **Homologação do laudo (art. 528)** — encerradas as diligências, os autos vão ao juiz para **homologação do laudo**.
6. **Decadência especial de 30 dias (art. 529)** — na ação **privada**, **não se admite queixa fundada em apreensão e perícia se decorridos 30 dias da homologação do laudo**. Prazo decadencial específico — distinto e mais curto que o prazo geral de 6 meses.

## Roteiro B — crime de AÇÃO PÚBLICA (art. 184, §§ 1º-3º): arts. 530-A a 530-I

1. **Delimitação (arts. 530-A e 530-I)** — os arts. 524-530 valem para os crimes de **queixa**; para os de **ação pública** (incondicionada ou condicionada) aplicam-se os **arts. 530-B a 530-H**.
2. **Apreensão pela autoridade policial (art. 530-B)** — apreensão dos bens ilicitamente produzidos/reproduzidos em sua totalidade, com os **equipamentos, suportes e materiais** destinados **precipuamente** à prática do ilícito.
3. **Termo de apreensão (art. 530-C)** — lavrado com **duas ou mais testemunhas**, descrevendo todos os bens e as informações sobre sua origem.
4. **Perícia oficial (art. 530-D)** — perícia por **perito oficial** (ou, na falta, pessoa tecnicamente habilitada) sobre todos os bens apreendidos; o laudo **integra o IP ou o processo**.
5. **Depósito (art. 530-E)** — os titulares de direito de autor e conexos são os **fiéis depositários** dos bens apreendidos.
6. **Destruição antecipada (art. 530-F)** — a requerimento da vítima, quando não houver impugnação quanto à ilicitude, **ressalvada a preservação do corpo de delito**.
7. **Sentença condenatória (art. 530-G)** — destruição dos bens ilicitamente reproduzidos e **perdimento** dos equipamentos, ressalvado o direito do prejudicado de boa-fé.
8. **Assistente de acusação (art. 530-H)** — **associações de titulares** de direito de autor e conexos podem funcionar, em nome próprio, como **assistentes de acusação** nos crimes do art. 184.

## O labirinto dos prazos (decadência)

- **Regra geral:** **6 meses** contados do conhecimento da autoria (art. 38 CPP; art. 103 CP) — vale para ação privada e para a pública **condicionada** (§ 3º).
- **Regra especial (art. 529):** quando a queixa se **funda em apreensão e perícia**, **30 dias da homologação do laudo**.
- **Controvérsia (não a apresente como pacífica):** discute-se a relação entre os dois prazos. Corrente majoritária entende que o prazo de 30 dias é **específico** para a queixa fundada em apreensão/perícia e corre **dentro** do limite geral de 6 meses; há quem sustente autonomia. **Confira a posição atual do STJ** via `jurisprudencia-stj-stf`.
- **Ação pública incondicionada (§§ 1º e 2º):** **não há decadência** para o MP — só **prescrição**.

## Competência (checagem rápida)

- **Justiça Estadual**, em regra. **Justiça Federal** quando o crime ofende bens, serviços ou interesses da União/entidade federal (art. 109, IV, CF) — ex.: violação em detrimento de entidade de direito público federal. Confirme conforme o caso concreto e a jurisprudência atual.

## Teses e contra-teses

**Teses defensivas (acusado):**
- **Ausência de exame pericial prévio (art. 525)** → rejeição da peça / falta de justa causa; o corpo de delito não se supre por confissão (art. 158 CPP).
- **Decadência** → 30 dias do art. 529 (ação privada fundada em apreensão/perícia) ou 6 meses do art. 38 CPP.
- **Ilegitimidade ativa (art. 526)** → querelante não comprova a titularidade do direito.
- **Atipicidade pelo art. 184, § 4º** → cópia única para uso privado, sem intuito de lucro, ou exceção/limitação da LDA.
- **Ausência de intuito de lucro** → elemento normativo dos §§ 1º e 2º; sem ele, a conduta não se amolda ao tipo qualificado.
- **Nulidade da perícia** → laudo deficiente, por amostragem inidônea, ou sem os requisitos dos arts. 527/530-D.
- **Erro na natureza da ação** → queixa onde cabia denúncia (ou vice-versa) → ilegitimidade/inadequação do rito.

**Contra-teses (titular/querelante ou MP):**
- **Súmula 502/STJ** afasta a "adequação social" na venda de CD/DVD pirata.
- **Súmula 574/STJ** — perícia **por amostragem** basta para a materialidade; dispensável identificar todos os titulares.
- Nos **§§ 1º e 2º**, ação **pública incondicionada** — dispensa representação; o MP é o titular e conduz sem a iniciativa do ofendido.

## Súmulas aplicáveis (conferir vigência via `jurisprudencia-stj-stf`)

Cite **tese + dispositivo**; confirme número e redação no gate — não reproduza de memória.

- **Súmula 502/STJ** — é **típica**, quanto ao art. 184, § 2º, do CP, a conduta de **expor à venda CDs e DVDs "piratas"**; afasta a tese de adequação social/insignificância. [conferir número e redação]
- **Súmula 574/STJ** — a **perícia por amostragem** do produto apreendido é **suficiente** para comprovar a materialidade do art. 184, sendo **dispensável** a identificação dos titulares dos direitos violados ou de quem os represente. [conferir número e redação]
- Precedente específico sobre a **interação dos prazos** do art. 529 (30 dias) e do art. 38 CPP (6 meses): **[NÃO VERIFICADO]** — confirmar tese e órgão julgador via `jurisprudencia-stj-stf` antes de citar.

## Erros comuns (anti-padrões)

- **Errar a porta da ação:** oferecer **queixa** no que é ação **pública** (§§ 1º e 2º) — ou exigir representação onde a ação é **incondicionada**.
- **Ignorar o exame pericial prévio (art. 525)** em crime que deixa vestígio — a peça sequer deveria ser recebida.
- **Confundir os prazos:** aplicar 6 meses onde incide o **prazo especial de 30 dias** (art. 529), ou tratar a controvérsia como pacífica.
- **Aceitar perícia deficiente** sem impugnar (arts. 527/530-D).
- **Invocar insignificância/adequação social** na pirataria de CD/DVD — a Súmula 502/STJ afasta.
- **Aplicar o rito da ação privada** (524-530) em crime de **ação pública** (que segue 530-B a 530-I), e vice-versa.
- **Esquecer a excludente do art. 184, § 4º** (cópia única, uso privado, sem lucro).
- **Citar a sistemática anterior à Lei 10.695/2003** (erro grave de vigência).

## Checklist

- [ ] **Natureza da ação** definida pelo art. 186 CP (queixa × denúncia; condicionada × incondicionada)?
- [ ] Rito correto conforme a porta — **A (524-530)** para queixa, **B (530-A a 530-I)** para ação pública?
- [ ] **Exame pericial prévio (art. 525)** presente/ausente — e a consequência (recebimento × rejeição) avaliada?
- [ ] **Prova do direito de ação (art. 526)** verificada, se ação privada?
- [ ] **Prazo decadencial** correto — 30 dias (art. 529) e/ou 6 meses (art. 38 CPP) — e a controvérsia registrada como tal?
- [ ] **Intuito de lucro** examinado nos §§ 1º e 2º; **excludente do § 4º** cogitada?
- [ ] **Perícia** (arts. 527/530-D) idônea, ou há fundamento para nulidade?
- [ ] **Competência** (Estadual × Federal) checada?
- [ ] **Súmulas 502 e 574/STJ** e qualquer precedente conferidos via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável realizada?

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio à análise e à redação — não substitui o juízo do advogado nem a leitura dos autos concretos.
- **Citation Gate:** nenhuma súmula, tese ou precedente citado de memória. Toda referência jurisprudencial passa por `jurisprudencia-stj-stf`; na dúvida sobre número/redação, **omitir vence inventar** e usar [NÃO VERIFICADO].
- **Ética por polo:** atuação na advocacia privada (defesa do acusado ou representação do ofendido titular), sob o Estatuto da OAB e o Código de Ética. Não empregar como órgão de acusação pública.

**Padrão de redação:** ao redigir a peça (queixa-crime, resposta à acusação, pedido de rejeição), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
