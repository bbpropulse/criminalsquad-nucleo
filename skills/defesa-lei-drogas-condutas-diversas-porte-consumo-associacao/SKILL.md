---
name: defesa-lei-drogas-condutas-diversas-porte-consumo-associacao
description: >-
  Use ao defender as condutas da Lei 11.343/2006 que NÃO são o tráfico-comércio do art. 33 caput —
  porte para consumo pessoal (art. 28), tráfico privilegiado/minorante (art. 33, §4º), associação
  para o tráfico (art. 35) e figuras menores (indução/instigação/auxílio ao uso §2º; uso
  compartilhado §3º; petrechos art. 34; financiamento art. 36; informante art. 37). Roteiro de
  análise e teses por tipo penal — complementa… Gatilhos… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, leis-penais-especiais, drogas]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-lei-drogas-condutas-diversas-porte-consumo-associacao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-lei-drogas-condutas-diversas-porte-consumo-associacao", "defesa drogas", "consumo associacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nas condutas da Lei de Drogas além do tráfico (arts. 28, 33 §4º, 35)

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

Esta skill é o **aprofundamento das condutas da Lei 11.343/2006 que não são o tráfico-comércio do art. 33 caput**: o **porte para consumo pessoal (art. 28)**, o **tráfico privilegiado / minorante (art. 33, §4º)**, a **associação para o tráfico (art. 35)** e as **figuras menores** (§§2º e 3º, arts. 34, 36 e 37). É roteiro de **análise e teses por tipo penal**, não modelo único de peça — a redação concreta (resposta à acusação, memoriais, apelação, HC) vem das skills-peça aplicando a `redacao-persuasiva-criminal`.

> **Quando usar esta skill × `defesa-trafico-drogas`:** use `defesa-trafico-drogas` para o **tráfico-comércio (art. 33 caput/§1º)**, o ataque à **prova/abordagem** (domicílio, busca, cadeia de custódia) e as **majorantes do art. 40**. Use **esta** para a **tipicidade e as teses próprias de cada figura periférica** — despenalização do art. 28, os quatro requisitos do §4º, o vínculo estável do art. 35 e as figuras dos §§2º-3º / arts. 34-37. As duas se complementam; cite ambas quando o caso reunir tráfico + associação, ou tráfico + tese de desclassificação para uso.

> **Lição central:** cada figura tem **elementar própria** que a defesa isola. No **art. 28**, a chave é a **destinação a consumo** (não há mercancia) — e o efeito é a **despenalização** (sem prisão, sem reincidência). No **§4º**, a chave são **quatro requisitos cumulativos**, atacados **um a um**, com a briga pelo **patamar máximo de 2/3**. No **art. 35**, a chave é a **estabilidade e permanência do vínculo** — sem ela, há no máximo concurso eventual no tráfico, não associação. Erro recorrente: tratar tudo como "tráfico" e perder a tese específica que muda a natureza (28), a pena (§4º) ou a própria imputação (35).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da Lei 11.343/2006 e **passe TODA súmula, tema, informativo ou número de acórdão pelo gate `jurisprudencia-stj-stf` antes de fundamentar a peça**. Pontos hoje em movimento, a conferir SEMPRE: (a) a **natureza jurídica do porte para uso (art. 28)** e o **parâmetro de gramatura** fixado pelo STF para a maconha, incluindo a **modulação de efeitos** e, sobretudo, **se emenda constitucional / "PEC das Drogas" alterou o quadro** [NÃO VERIFICADO — conferir Tema 506 / RE 635.659, a tese e o texto constitucional vigente na data]; (b) o **cancelamento da Súmula 512/STJ** (privilegiado não é hediondo); (c) a redação do art. 30 (prazo prescricional) e dos arts. 48-50 (rito). Há **sanção real por jurisprudência inventada por IA** — na dúvida, ensine a tese e o dispositivo e **omita o número**.

## Base legal — mapa das figuras típicas

- **Art. 28** — **porte para consumo pessoal** (adquirir, guardar, ter em depósito, transportar ou trazer consigo, para uso próprio). Penas do rol do caput: **advertência (I), prestação de serviços à comunidade (II), medida educativa (III)** — **sem pena privativa de liberdade**. §1º equipara o **autocultivo** para consumo. **§2º** fixa os critérios de aferição da destinação.
- **Art. 33, §2º** — **induzir, instigar ou auxiliar** alguém ao uso indevido (figura autônoma, pena menor que o caput).
- **Art. 33, §3º** — **uso compartilhado / cessão eventual**: oferecer droga, eventualmente e sem objetivo de lucro, a pessoa do relacionamento, para juntos consumirem (requisitos cumulativos — figura privilegiadíssima).
- **Art. 33, §4º** — **tráfico privilegiado**: causa de **diminuição de 1/6 a 2/3** sobre o tráfico do caput/§1º, com requisitos **cumulativos** (primariedade; bons antecedentes; não se dedicar a atividades criminosas; não integrar organização criminosa). **Não é figura autônoma** — é minorante.
- **Art. 34** — **maquinário / petrechos** para o tráfico (pode ser **absorvido** por consunção quando crime-meio do art. 33).
- **Art. 35** — **associação** de duas ou mais pessoas para o fim de praticar, reiteradamente ou não, os crimes dos arts. 33 caput/§1º e 34. Exige **estabilidade e permanência** do vínculo. Parágrafo único: associação para o financiamento (art. 36).
- **Art. 36** — **financiar ou custear** o tráfico (pena elevada; figura autônoma).
- **Art. 37** — **informante / colaborador** ("fogueteiro", "olheiro") — colaborar, como informante, com grupo/associação/organização.
- **Art. 30** — **prescrição em 2 anos** para a imposição/execução das penas do art. 28.
- **Arts. 48-50** — rito: o art. 28 segue a **Lei 9.099/95 (JECRIM)**; vedada a **prisão em flagrante** do usuário (encaminhamento/compromisso — art. 48, §2º).
- **Art. 40** — majorantes de 1/6 a 2/3 (aplicáveis também à associação do art. 35, conforme o caso).

## 1. Art. 28 — porte para consumo pessoal

### Natureza jurídica (impacta tudo)
- **Posição histórica do STF (QO no RE 430.105):** houve **despenalização**, não descriminalização — o art. 28 continuaria sendo **crime**, apenas sem pena de prisão.
- **Movimento recente do STF (Tema 506 / RE 635.659):** para a **maconha**, caminhou-se para tratar o porte de consumo próprio como **ilícito de natureza não penal**, com **parâmetro de gramatura** (referência de **40 g de cannabis ou 6 plantas fêmeas**) como **presunção relativa** de uso pessoal. **[NÃO VERIFICADO — conferir a tese exata, a modulação de efeitos, a abrangência (só cannabis?) e, decisivo, se emenda constitucional posterior alterou o quadro — gate `jurisprudencia-stj-stf`.]**
- Consequência prática, seja qual for a corrente: **não cabe prisão**, o processo corre no **JECRIM** e a condenação **não gera reincidência**.

### Critérios de distinção uso × tráfico — art. 28, §2º
A destinação (consumo × mercancia) afere-se por: **(i) natureza e quantidade** da substância; **(ii) local e condições** da ação; **(iii) circunstâncias sociais e pessoais**; **(iv) conduta e antecedentes** do agente. **O ônus da destinação de tráfico é da acusação**; na dúvida sobre a finalidade, **in dubio pro reo** (art. 386, VII, CPP).
- **Indicadores de consumo:** pequena quantidade; **ausência de petrechos de mercancia** (balança de precisão, embalagens fracionadas, caderno de contas, dinheiro trocado); ausência de investigação prévia de comércio; contexto pessoal de usuário.

### Efeitos processuais a explorar (favoráveis)
- **Prescrição em 2 anos** (art. 30) — prazo curtíssimo; **sempre calcular** a prescrição da pretensão punitiva/executória. Ver `calculadora-prescricao`.
- **Não gera reincidência** nem maus antecedentes idôneos — a condenação por art. 28 **não pode** ser usada para afastar o privilégio do §4º nem para agravar pena de outro processo. **[confirmar o precedente do STJ via gate.]**
- **JECRIM:** cabíveis **transação penal** e demais institutos despenalizadores (arts. 48, §§1º e 5º); **vedada a prisão em flagrante** do usuário (art. 48, §2º).
- **Autocultivo (§1º):** cultivo de pequena quantidade **para consumo próprio** atrai o art. 28, não o art. 33, §1º — tese de desclassificação quando a acusação capitula cultivo como tráfico.

## 2. Art. 33, §4º — tráfico privilegiado (minorante)

**É causa de diminuição, não crime autônomo.** Enfrentar os **quatro requisitos cumulativos, um a um**, e brigar pelo **patamar máximo (2/3)**.

1. **Primariedade** — não confundir com bons antecedentes; ausência de condenação definitiva anterior com trânsito.
2. **Bons antecedentes** — **inquéritos e ações penais em curso, sem trânsito em julgado, NÃO servem** para negar o requisito (**Súmula 444/STJ**; presunção de não culpabilidade, art. 5º, LVII, CF). Aplicar por analogia o **período depurador** (art. 64, I, CP).
3. **Não se dedicar a atividades criminosas** — o requisito **mais atacado**: **quantidade/natureza/acondicionamento isolados NÃO provam dedicação**; **rótulos genéricos** ("pequeno traficante", "olheiro") **não substituem prova** de habitualidade.
4. **Não integrar organização criminosa** — mera coautoria eventual **não** é integrar ORCRIM; exige-se estrutura e vínculo (ver `defesa-organizacao-criminosa`).

- **Quantum (1/6 a 2/3):** a **redução máxima** é a regra quando presentes os requisitos; **modular abaixo de 2/3 exige fundamentação concreta**. **Vedado o bis in idem**: a **mesma quantidade** não pode exasperar a pena-base (art. 42) **e** reduzir a fração do §4º. Para o cálculo, use `calculadora-dosimetria`.
- **NÃO é hediondo:** o tráfico privilegiado **não é** crime hediondo/equiparado (posição do STF; **Súmula 512/STJ CANCELADA**). Isso reflete em **progressão, livramento, indulto e prisão** — jamais tratar o privilégio como hediondo.
- **Retroatividade / combinação de leis:** aplicação do §4º a fatos anteriores segue a **lei mais benéfica no conjunto**, **vedada a combinação de leis** (**Súmula 501/STJ** — conferir).

## 3. Art. 35 — associação para o tráfico

**Elementar decisiva: estabilidade e permanência do vínculo associativo.** Sem ela, há no máximo **concurso eventual de pessoas** no tráfico (art. 33 c/c art. 29 CP), não associação.

- **Requisitos:** **duas ou mais pessoas**; **vínculo estável e permanente** (animus associativo duradouro); **finalidade** de praticar, reiteradamente ou não, os crimes dos arts. 33 caput/§1º e 34. Exige **dolo específico de se associar** de forma perene.
- **Autonomia (dupla face):** a associação **subsiste** ainda que não haja condenação por um tráfico específico, **desde que provado o vínculo**; e a condenação por tráfico **não impõe** automaticamente a do art. 35 — é preciso **prova autônoma** da societas.
- **Não é hedionda:** a associação para o tráfico **não integra o rol** de hediondos/equiparados — reflete em **progressão comum, livramento e prisão**. **[confirmar posição STF/STJ via gate.]**
- **Privilégio (§4º) NÃO se aplica ao art. 35:** a minorante alcança o art. 33 caput/§1º — não a associação. Não pleitear §4º sobre a pena do art. 35.
- **Majorante do art. 40** e **causa de aumento por envolvimento de menor** podem incidir — conferir a capitulação.

### Distinções que a defesa deve marcar
| Figura | Nº de pessoas | Núcleo | Fonte |
|---|---|---|---|
| **Associação p/ o tráfico (art. 35)** | 2+ | vínculo estável p/ crimes de drogas (33/34) | Lei 11.343/06 |
| **Associação criminosa (art. 288 CP)** | 3+ | vínculo estável p/ fim genérico de crimes | Código Penal |
| **Organização criminosa (Lei 12.850)** | 4+ | estrutura ordenada, divisão de tarefas, infrações c/ pena máx. > 4 anos | Lei 12.850/13 |

## 4. Figuras menores (mapear para evitar excesso de imputação)

- **Art. 33, §2º (indução/instigação/auxílio ao uso):** pena bem menor que o caput; atacar a capitulação como tráfico quando a conduta é de mero estímulo ao uso alheio.
- **Art. 33, §3º (uso compartilhado):** requisitos **cumulativos** — oferta **eventual**, **sem objetivo de lucro**, a **pessoa do relacionamento**, para **juntos consumirem**. Presentes todos, afasta o tráfico (figura privilegiadíssima).
- **Art. 34 (petrechos):** quando **crime-meio** do tráfico, é **absorvido** por consunção — afastar o **concurso material** indevido.
- **Art. 36 (financiamento) / art. 37 (informante):** figuras autônomas; exigem prova do **ato de custear** ou da **colaboração como informante** — combater a imputação por mera presença ou vínculo genérico.

## Teses defensivas × contra-teses da acusação

| Tese defensiva | Contra-tese acusatória a antecipar |
|---|---|
| Desclassificação 33 → 28 (destinação a consumo; sem petrechos) | Perigo abstrato; fracionamento + balança + investigação de comércio sustentam o tráfico |
| Art. 28 como ilícito não penal / parâmetro de gramatura (maconha) | Quantidade acima do parâmetro; contexto de mercancia afasta a presunção [Tema — NÃO VERIFICADO] |
| §4º no patamar máximo (2/3); quantidade isolada não modula | Quantidade vultosa + logística indicam dedicação e afastam o §4º [Tema — NÃO VERIFICADO] |
| IPs/ações em curso não afastam antecedentes/§4º (Súm. 444) | Condenação transitada em julgado = maus antecedentes que afastam o §4º |
| Privilégio **não é hediondo** (Súm. 512 cancelada) | — (invocar Súm. 512 como vigente é **erro de vigência**) |
| Associação: ausência de estabilidade/permanência → concurso eventual, não art. 35 | Reiteração e divisão de tarefas provam o vínculo estável |
| Bis in idem: mesma prova para tráfico em concurso e para o art. 35 | Societas é autônoma; o vínculo tem prova própria |
| Uso compartilhado (§3º) / petrechos absorvidos (art. 34) | Oferta não eventual / com lucro; autonomia ofensiva do art. 34 |

> **Banco de teses do acervo:** antes da web, consulte **`acervo/teses-modelos/crime-drogas.md`** (fichas com precedente de origem, pedido-modelo e contraponto). **Toda ficha citada em peça passa pelo gate de verificação de citações.**

## Súmulas e precedentes (sob Citation Gate)

Cite com certeza apenas o essencial; **todo número de HC/REsp/RE, informativo ou tema confira via `jurisprudencia-stj-stf` antes de usar**:

- **Súmula 512/STJ — CANCELADA.** Não invocá-la como vigente; o tráfico privilegiado **não é hediondo**. Citá-la como válida é erro grave de vigência.
- **Súmula 444/STJ** — vedado usar inquéritos/ações penais em curso para agravar a pena-base (lógica projetada sobre "bons antecedentes" e "dedicação" do §4º).
- **Súmula 501/STJ** — retroatividade da Lei 11.343 apenas quando o resultado integral for mais favorável; **vedada a combinação de leis** [conferir].
- **Súmula 231/STJ** — atenuante não reduz a pena aquém do mínimo legal (relevante na dosimetria) [conferir].
- **Tema 506 / RE 635.659 (STF)** — natureza do porte de maconha para consumo e parâmetro de gramatura **[NÃO VERIFICADO — conferir tese, modulação, abrangência e eventual alteração constitucional posterior]**.
- **Art. 28 não gera reincidência** — orientação do STJ [confirmar precedente-líder via gate].
- **Associação para o tráfico não é hedionda** — posição STF/STJ [confirmar via gate].

Regra de ouro do gate: **prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.** Omitir vence inventar.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar o **porte (art. 28) como tráfico** e perder a despenalização — analisar SEMPRE a desclassificação 33→28 antes.
- Esquecer a **prescrição de 2 anos** (art. 30) do art. 28 e a **transação** no JECRIM.
- Usar condenação por **art. 28 como reincidência/mau antecedente** contra o réu (não induz).
- Tratar o **privilegiado como hediondo** (Súmula 512 **cancelada**).
- Aceitar a **fração mínima** do §4º sem brigar pelo **patamar de 2/3**; deixar a **quantidade valer duas vezes** (art. 42 × §4º).
- Pleitear **§4º sobre a pena do art. 35** (a minorante não alcança a associação).
- Aceitar condenação por **associação (art. 35)** sem prova de **estabilidade/permanência** — quando há, no máximo, concurso eventual.
- Aceitar **concurso material** do art. 34 quando é **crime-meio** absorvido.
- Citar **quantidade/precedente "de memória"** — nada vai à peça sem acervo + verificação de citações.

**Checklist antes de protocolar:**
- [ ] **Desclassificação 33→28** avaliada (destinação a consumo; §2º; ônus da acusação)?
- [ ] **Natureza jurídica do art. 28** e **parâmetro de gramatura** conferidos **na vigência atual** (Tema 506 + eventual EC)?
- [ ] **Prescrição (art. 30)** e institutos do **JECRIM** verificados no caso de porte?
- [ ] **§4º:** quatro requisitos enfrentados **um a um** e briga pelo **patamar de 2/3**?
- [ ] **Bis in idem** da quantidade afastado (art. 42 × fração do §4º)?
- [ ] **Privilégio não tratado como hediondo**; **Súmula 512 NÃO** invocada como vigente?
- [ ] **Art. 35:** exigida prova de **estabilidade e permanência**; distinção de 288/ORCRIM feita?
- [ ] **Figuras menores** (§2º, §3º, art. 34) avaliadas para reduzir/afastar a imputação?
- [ ] Todas as **citações verificadas** (`jurisprudencia-stj-stf`) — inclusive os pontos [NÃO VERIFICADO]?
- [ ] Peça marcada para **revisão humana** do advogado responsável antes do protocolo?

## Nota de conformidade

Rascunho técnico **sob revisão humana obrigatória** — este material é apoio à preparação, não substitui o juízo profissional nem a leitura do caso concreto. A responsabilidade pela peça e pelas teses é sempre do **advogado** (Estatuto da OAB e Código de Ética; Provimento 205/2021 na comunicação profissional). Esta skill é de **polo defensivo**; se o pedido for do **polo acusatório** (MP/assistente de acusação), o roteador deve **conferir o polo** e redirecionar para a skill correspondente. **Nenhuma súmula, tese ou acórdão vai à peça de memória** — tudo passa pelo Citation Gate (`jurisprudencia-stj-stf`), sob risco de sanção por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra). Para o tráfico-comércio (art. 33 caput), a prova/abordagem e as majorantes do art. 40, combine com `defesa-trafico-drogas`.
