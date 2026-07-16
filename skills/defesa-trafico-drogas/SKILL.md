---
name: defesa-trafico-drogas
description: >-
  Use ao defender tráfico e correlatos da Lei 11.343/2006 — desclassificação de tráfico (art. 33)
  para uso pessoal (art. 28), tráfico privilegiado (§4º) e sua não-hediondez, afastamento das
  majorantes (art. 40), associação (art. 35), nulidades do procedimento especial (arts. 50-59),
  exigência do laudo toxicológico definitivo e ilicitude do flagrante em domicílio. Gatilhos:
  tráfico de drogas, Lei 11.343, art. 33… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, leis-penais-especiais, drogas]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-trafico-drogas"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-trafico-drogas", "defesa trafico", "trafico drogas"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos Crimes da Lei de Drogas (Lei 11.343/2006)

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

Esta skill orienta a **estratégia defensiva** nos crimes da Lei 11.343/2006 — sobretudo o **tráfico (art. 33)**, o **tráfico privilegiado (§4º)**, a **associação (art. 35)**, as **majorantes (art. 40)** e o **porte para consumo (art. 28)**. É roteiro de **análise e teses por tipo penal**, não modelo único de peça: a redação da peça concreta (resposta à acusação, memoriais, HC, apelação) vem das skills-peça, aplicando a `redacao-persuasiva-criminal`.

> **Lição central:** quase todo caso de drogas se ganha em **três frentes**, nesta ordem de análise — (1) a **licitude da prova e da abordagem** (domicílio, busca pessoal, flagrante); (2) a **desclassificação 33→28** ou, se inviável, o **reconhecimento do privilégio (§4º) no patamar máximo (2/3)**; (3) a **dosimetria**, afastando a **dupla valoração da quantidade** (art. 42 × fração do §4º). Antes de qualquer tese de mérito, ataque a **prova**: derrubada a abordagem, cai o conjunto probatório inteiro.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da Lei 11.343/2006 e do CPP, e **passe TODA súmula, tema, informativo ou número de acórdão pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de fundamentar a peça**. Pontos sensíveis em movimento: (a) a natureza do porte para uso (art. 28) e eventual **parâmetro de gramatura/modulação** fixados pelo STF [NÃO VERIFICADO — conferir inteiro teor, tese e modulação]; (b) o cancelamento da **Súmula 512/STJ** (tráfico privilegiado não é hediondo); (c) a ordem do interrogatório (art. 57 da Lei × art. 400 CPP). Há **sanção real por jurisprudência inventada por IA** — na dúvida, ensine a tese e o dispositivo, e **omita o número** do julgado.

## Base legal

- **Art. 28** — porte de droga para **consumo pessoal**: despenalizado (advertência, prestação de serviços, medida educativa; **sem pena privativa de liberdade**). Critérios de aferição da destinação no **art. 28, §2º** (natureza e quantidade da substância, local e condições da ação, circunstâncias sociais e pessoais, conduta e antecedentes).
- **Art. 33, caput** — **tráfico**: 18 núcleos (crime de **ação múltipla** / tipo misto alternativo); pena 5–15 anos. Crime de **perigo abstrato**; permanente nas modalidades "ter em depósito"/"guardar".
- **Art. 33, §4º** — **tráfico privilegiado**: redução de **1/6 a 2/3**, com requisitos **cumulativos**: (i) primariedade; (ii) bons antecedentes; (iii) **não se dedicar** a atividades criminosas; (iv) **não integrar** organização criminosa.
- **Art. 34** — maquinário/petrechos (pode ser **absorvido** pelo tráfico por consunção quando crime-meio).
- **Art. 35** — **associação** para o tráfico: autônoma, exige **estabilidade e permanência** do vínculo (≠ concurso eventual de pessoas).
- **Art. 37** — informante/colaboração (o "fogueteiro").
- **Art. 40** — majorantes de **1/6 a 2/3** (I transnacionalidade; III proximidade de escola/transporte público; IV emprego de arma; V interestadualidade; VI envolvimento de menor).
- **Art. 42** — **pena-base**: **natureza e quantidade preponderam** sobre as circunstâncias do art. 59 CP — e **só podem ser valoradas uma vez**.
- **Arts. 50-59** — **procedimento especial** (rito próprio da Lei de Drogas): prazos, laudo toxicológico, ordem dos atos.
- **CPP:** art. 5º, XI, CF + jurisprudência da **busca domiciliar**; arts. 158-A a 158-F (**cadeia de custódia**); arts. 312/315/319 (**prisão cautelar** e alternativas); art. 386, VII (absolvição por insuficiência de prova).

## Roteiro de defesa por frente

### Frente 1 — Licitude da prova e da abordagem (ataque-se PRIMEIRO)

A porta de entrada mais forte. Se a prova nasce ilícita, contamina tudo por derivação (fruits of the poisonous tree — art. 157, §1º, CPP).

- **Entrada em domicílio sem mandado:** exige **fundadas razões**, prévias e **justificadas a posteriori**, indicando flagrante (o tráfico é permanente nas modalidades depósito/guarda). Atacar: denúncia anônima **isolada**, consentimento **viciado** do morador, "atitude suspeita" genérica, ausência de flagrante real, justificativa construída depois do fato. O standard de "fundadas razões" e a distribuição do ônus foram tratados pelo STF em repercussão geral [NÃO VERIFICADO — conferir tema/RE e a redação da tese via `jurisprudencia-stj-stf`].
- **Busca pessoal:** sem **justa causa** concreta (fundada suspeita objetiva, não intuição), é ilegal.
- **Depoimento de policiais:** é prova **idônea** (jurisprudência pacífica), mas a defesa **exige corroboração**, expõe contradições entre os agentes e a fragilidade de um flagrante sustentado só na palavra da guarnição.
- **Cadeia de custódia** da droga e dos **celulares** apreendidos (arts. 158-A a 158-F CPP): quebra na coleta/lacre/rastreabilidade → confiabilidade comprometida. Ver `impugnacao-cadeia-custodia` e `cadeia-custodia-prova-digital`.
- **Laudo toxicológico definitivo:** indispensável à **materialidade**. A juntada tardia, porém, **não é** nulidade absoluta sem demonstração de **prejuízo** concreto — dose a tese conforme o caso.

### Frente 2a — Desclassificação de tráfico (33) para porte para consumo (28)

A tese que **muda a natureza do processo** (despenalização). Muitas vezes é mais forte que a absolvição por negativa de autoria.

- **Indicadores de consumo:** pequena quantidade; **ausência de petrechos** de mercancia (balança de precisão, embalagens fracionadas, anotações de venda, grande soma em dinheiro trocado); ausência de **investigação prévia** apontando comércio; contexto pessoal de usuário.
- **Ônus da destinação é da acusação.** A distinção uso × tráfico funda-se na **finalidade**; na dúvida sobre a destinação, **in dubio pro reo** (art. 386, VII, CPP; art. 28, §2º).
- Efeito: afasta pena privativa e **todas** as majorantes do art. 40; possibilita extinção conforme o regime do art. 28.

### Frente 2b — Tráfico privilegiado (§4º) no patamar máximo (2/3)

Quando a desclassificação não é viável. Enfrentar cada requisito **um a um**:

- **Quantidade/natureza/acondicionamento, isoladamente, NÃO afastam o privilégio nem modulam a fração abaixo de 2/3** — exigem elemento concreto de dedicação.
- **Inquéritos e ações penais em curso, sem trânsito em julgado, NÃO caracterizam dedicação** a atividades criminosas (presunção de não culpabilidade — art. 5º, LVII, CF; lógica da Súmula 444/STJ projetada sobre o §4º). Há tese repetitiva do STJ nesse sentido [NÃO VERIFICADO — conferir número do Tema via `jurisprudencia-stj-stf`].
- **Rótulos genéricos** ("pequeno traficante", "funcionava como olheiro") **não substituem prova** de habitualidade.
- **Modulação da fração** exige **fundamentação concreta**; reduzir abaixo de 2/3 sem motivo idôneo é ilegal.
- **NÃO é hediondo** (STF; **Súmula 512/STJ cancelada**) — jamais tratar o privilégio como crime hediondo.

### Frente 3 — Dosimetria (vedação do bis in idem)

- A **mesma quantidade** **não pode** exasperar a pena-base (art. 42) **e** ao mesmo tempo reduzir a fração do §4º: é **dupla valoração vedada**.
- **Quantidade não expressiva** não justifica exasperação da base (a apreensão é **inerente ao tipo**).
- Afastar majorantes do art. 40 mal fundamentadas; buscar regime menos gravoso e substituição, conferindo a vedação legal (art. 44 da Lei) contra a lei mais benéfica e a jurisprudência atual.

### Frente 4 — Liberdade (cautelar)

- Tráfico **sem violência**, quantidade não expressiva, réu primário → **cautelares do art. 319 CPP** em vez da preventiva.
- A prisão exige **periculum libertatis concreto** — não **gravidade abstrata**, "fórmula genérica" de ordem pública, elementares do próprio tipo ou **presunção de reiteração** (art. 312 c/c art. 315, §§1º e 2º, CPP).
- **Prisão domiciliar** à gestante/mãe de criança em crime sem violência (art. 318 CPP), mesmo com apreensão expressiva — na esteira do HC coletivo do STF [NÃO VERIFICADO — conferir número e alcance via `jurisprudencia-stj-stf`].
- **Incompatibilidade** entre regime inicial **aberto** fixado na sentença e manutenção da **preventiva** → direito de **apelar em liberdade** (art. 387, §1º, CPP).

## Teses defensivas × contra-teses da acusação

| Tese defensiva | Contra-tese acusatória a antecipar |
|---|---|
| Desclassificação 33→28 (pequena quantidade, sem petrechos) | Perigo abstrato; fracionamento + balança + denúncia de comércio sustentam o tráfico; consumação independe de tradição ao destinatário |
| Privilégio no máximo (2/3); quantidade isolada não modula | Quantidade **vultosa + logística** (concurso, mula, batedores, ORCRIM) indica dedicação e afasta o §4º [Tema — NÃO VERIFICADO] |
| IPs/ações em curso não afastam o privilégio | **Condenação transitada em julgado** = maus antecedentes que afastam o §4º |
| Nulidade da busca domiciliar sem fundadas razões | Fundadas razões justificadas a posteriori + flagrante de crime permanente validam o ingresso [Tema — NÃO VERIFICADO] |
| Bis in idem: quantidade valorada na base e na fração | Natureza e quantidade preponderam (art. 42) e podem modular a fração **quando não há dupla valoração** |
| Porte de arma como crime-meio (afasta concurso material) | Autonomia ofensiva do porte sustenta o concurso material (art. 40, IV) |
| Absolvição da visitante flagrada em presídio sem prova de destinação | Entrada de droga em presídio não é crime impossível; preso que solicita a entrega é coautor |

> **Banco de teses do acervo:** antes da web, consulte **`acervo/teses-modelos/crime-drogas.md`** (fichas DRG-001 a DRG-054+, cada uma com precedente de origem, pedido-modelo e contraponto) e a best-practice `defesa-lei-drogas`. **Toda ficha citada em peça passa pelo gate `verificacao-citacoes`.**

## Súmulas e precedentes (sob Citation Gate)

Cite com certeza apenas o que segue; **todo o resto — número de HC/REsp/RE, informativo, tema — confira via `jurisprudencia-stj-stf` antes de usar**:

- **Súmula 512/STJ — CANCELADA.** Não invocá-la como vigente; o tráfico privilegiado **não é hediondo** (posição do STF). Citá-la como válida é erro grave de vigência.
- **Súmula 444/STJ** — vedado usar inquéritos/ações penais em curso para agravar a pena-base (lógica projetada sobre o requisito "dedicação" do §4º).
- **Súmula 587/STJ** — a **interestadualidade** (art. 40, V) dispensa a efetiva transposição de divisa estadual (majorante objetiva — **atenção: opera contra a defesa**; conhecê-la para não errar a estratégia).
- **Insignificância NÃO se aplica** ao tráfico nem ao porte (perigo abstrato) — súmula/precedente a confirmar [NÃO VERIFICADO].
- **Tráfico privilegiado (§4º) não é hediondo** — decisão do STF e cancelamento da Súm. 512/STJ [confirmar o precedente-líder via `jurisprudencia-stj-stf`].
- **Busca domiciliar / fundadas razões** e **prisão domiciliar de mãe/gestante** — teses de repercussão geral e HC coletivo existem, mas **os números estão marcados [NÃO VERIFICADO]** acima: não os cite de memória.

Regra de ouro do gate: **prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.** Omitir vence inventar.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar o **tráfico privilegiado como hediondo** (Súm. 512/STJ está **cancelada**).
- Aceitar a **fração mínima** do §4º sem brigar pelo **patamar de 2/3**.
- Deixar a **quantidade valer duas vezes** (base do art. 42 + redução da fração) — bis in idem.
- Pedir **absolvição genérica** ignorando a **desclassificação 33→28** (às vezes a tese mais forte).
- Aceitar **preventiva por gravidade abstrata**, elementares do tipo ou presunção de reiteração.
- **Não questionar** a entrada no domicílio — sem fundadas razões justificadas, a prova é ilícita.
- Citar **quantidade/precedente "de memória"** — nada vai à peça sem acervo + `verificacao-citacoes`.

**Checklist antes de protocolar:**
- [ ] **Licitude da abordagem/prova** atacada (domicílio, busca pessoal, flagrante, cadeia de custódia)?
- [ ] **Desclassificação 33→28** avaliada **antes** de partir para o privilégio?
- [ ] Requisitos do **§4º** enfrentados um a um (primariedade, antecedentes, não-dedicação, não-organização)?
- [ ] **Bis in idem** da quantidade afastado (art. 42 × fração do §4º)?
- [ ] **Laudo toxicológico definitivo** presente e conferido (materialidade)?
- [ ] Pleito de **liberdade** fundado em ausência de *periculum* concreto (não gravidade abstrata)?
- [ ] **Súmula 512/STJ NÃO** invocada como vigente; privilégio **não** tratado como hediondo?
- [ ] Ordem do **interrogatório** (art. 57 da Lei × art. 400 CPP) conferida no estado atual antes de arguir nulidade?
- [ ] Todas as **citações verificadas** (`jurisprudencia-stj-stf` / `verificacao-citacoes`) — inclusive os pontos marcados [NÃO VERIFICADO]?
- [ ] Peça marcada para **revisão humana** do advogado responsável antes do protocolo?

## Nota de conformidade

Rascunho técnico **sob revisão humana obrigatória** — este material é apoio à preparação, não substitui o juízo profissional nem a leitura do caso concreto. A responsabilidade pela peça e pelas teses é sempre do **advogado** (Estatuto da OAB e Código de Ética; Provimento 205/2021 na comunicação profissional). Esta skill é de **polo defensivo**; se o pedido for do polo acusatório (MP/assistente de acusação), o roteador deve **conferir o polo** e redirecionar para a skill correspondente. **Nenhuma súmula, tese ou acórdão vai à peça de memória** — tudo passa pelo Citation Gate (`verificacao-citacoes` / `jurisprudencia-stj-stf`), sob risco de sanção por jurisprudência inventada.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
