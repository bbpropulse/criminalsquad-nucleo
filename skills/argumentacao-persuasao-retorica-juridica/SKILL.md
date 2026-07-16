---
name: argumentacao-persuasao-retorica-juridica
description: >-
  Use ao estruturar a ARGUMENTAÇÃO e a PERSUASÃO de memoriais, razões recursais e sustentação oral
  criminal — construção da teoria do caso e do fio condutor, hierarquia de teses (principal +
  subsidiárias), a presunção de inocência e o ônus da prova como âncora persuasiva, antecipação e
  refutação das contra-teses, economia argumentativa e adequação ao auditório (juiz técnico x jurado
  leigo). Fundamentos: ethos/pathos/logos… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, argumentacao, persuasao, retorica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["argumentacao-persuasao-retorica-juridica", "argumentacao persuasao", "retorica juridica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-argumentacao-persuasao-retorica-juridica"]
---

# Argumentação, persuasão e retórica jurídica

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

Esta skill é **técnica (craft)**, não matéria penal específica. Ela organiza o *método* de argumentar e persuadir nas peças e falas criminais — **memoriais**, **razões recursais** e **sustentação oral** —, integrando retórica clássica, tópica e teoria da argumentação ao ônus probatório do processo penal. O entregável não é uma tese de mérito pronta, e sim a **arquitetura argumentativa** que dá ordem, força e credibilidade ao que a tese de mérito afirma. O conteúdo jurídico substantivo vem das skills de defesa/acusação; aqui se decide **como** apresentá-lo.

> **Lição central:** persuasão jurídica não é ornamento — é **ordem e ônus**. Quem convence não é quem tem mais argumentos, e sim quem coloca o **argumento mais forte primeiro**, ancora tudo na **prova dos autos** e transfere ao adversário o **ônus de refutar**. No processo penal, a âncora estrutural é a **presunção de inocência**: a defesa não precisa provar a inocência, precisa **abrir dúvida razoável**; a acusação é que carrega o ônus de afastá-la além de dúvida. Argumentar bem é fazer o julgador sentir esse ônus recair sobre o outro lado.

## Base legal e fundamentos

Não há "tipo penal" da argumentação; há uma base **normativa** que ancora a persuasão e uma base **teórica** que a estrutura.

- **Ancoragem normativa (o que dá força vinculante ao argumento):**
  - **CF, art. 5º, LVII** — presunção de inocência: a mais poderosa âncora persuasiva da defesa (o *non liquet* condena a acusação, não o réu).
  - **CF, art. 5º, LV** — contraditório e ampla defesa: legitima antecipar e refutar a tese contrária.
  - **CPP, art. 156** — o ônus da prova incumbe a quem alega; na acusação, provar o fato típico e a autoria.
  - **CPP, art. 386** — hipóteses de absolvição (em especial os incisos de **insuficiência de prova**, II, V e VII): o vocabulário da dúvida razoável.
  - **CPP, art. 155** — livre convencimento **motivado**: o juiz decide por razões, logo argumento é matéria-prima da decisão.
  - **CPP, art. 403, §3º, e art. 404, par. ún.** — memoriais escritos; **art. 476-481** — debates no júri (abertura, réplica e tréplica).
- **Fundamentos teóricos (o que estrutura o discurso):**
  - **Retórica clássica (Aristóteles):** **ethos** (credibilidade de quem fala), **pathos** (mobilização legítima do auditório) e **logos** (força lógica do argumento). No foro, o **logos** domina o juiz técnico; **ethos** e **pathos** pesam mais no júri.
  - **Tópica jurídica (Viehweg):** o raciocínio jurídico parte de *topoi* (pontos de vista consagrados — princípios, máximas, precedentes) e não de axiomas fechados; argumentar é escolher e ordenar bons *topoi*.
  - **Teoria da argumentação (Perelman; Alexy):** persuadir é obter a adesão de um **auditório**; há **ônus argumentativo** (quem se afasta do usual argumenta mais) e **regras do discurso racional** (coerência, universalizabilidade, sinceridade).
  - **Estrutura lógica:** o **silogismo** (premissa maior = norma; premissa menor = fato provado; conclusão = subsunção) e o **entimema** (silogismo com uma premissa implícita, aceita pelo auditório) são as formas concretas do argumento na peça.

## Método — as sete camadas da argumentação persuasiva

Trabalhe em camadas, da fundação ao acabamento. Pular etapa produz peça dispersa.

1. **Teoria do caso (a fundação).** Uma frase única que explica *tudo* — o que aconteceu, por que o cliente não deve ser condenado (ou, na acusação, deve) e qual emoção/valor sustenta essa leitura. Toda prova e todo argumento ou **confirmam** a teoria do caso ou são cortados. Sem teoria do caso não há fio condutor, só lista de tópicos.
2. **Inventário de teses.** Levante *todas* as teses juridicamente possíveis (preliminares, prejudiciais, mérito, subsidiárias, dosimetria). Ainda não ordene — apenas colete, com a skill de defesa/acusação da matéria.
3. **Hierarquização (a decisão mais importante).** Ordene da **mais forte à subsidiária**. A tese principal abre; as subsidiárias entram sob a fórmula **"ainda que se supere o anterior…"**, sem jamais enfraquecer a principal (ver seção própria).
4. **Ancoragem probatória.** Para cada tese, aponte **onde nos autos** ela se sustenta (fls./ID, depoimento, laudo). Argumento sem página é opinião; a força vem da **prova**, não do adjetivo.
5. **Antecipação e refutação.** Liste as contra-teses do adversário e **derrube-as antes** que ele as levante — mas só as fortes (refutar tese fraca a fortalece por contraste).
6. **Economia.** Corte o que não serve à teoria do caso. **Menos teses bem provadas** vencem muitas teses diluídas; cada argumento fraco contamina a credibilidade dos fortes.
7. **Adequação ao auditório.** Calibre linguagem, dose de *pathos* e profundidade técnica ao destinatário: **juiz/desembargador** (logos, técnica, concisão) x **jurado leigo** (narrativa, valores, clareza).

## Roteiro tático — como ordenar e escrever

1. **Abra pela força, não pela cronologia.** O leitor decide a atenção nos primeiros parágrafos. Comece pela **tese mais forte** e pelo **enquadramento** (a moldura pela qual quer que os fatos sejam lidos), não por "trata-se de ação penal…".
2. **Enquadre antes de narrar (*framing*).** Quem define a moldura vence a discussão. "Insistência amorosa desajeitada" e "perseguição obsessiva" descrevem os mesmos fatos e pedem penas opostas — escolha e sustente a moldura favorável, ancorada na prova.
3. **Separe rigorosamente fato, prova, inferência e tese.** É o antídoto contra a falácia e a arma para desmontar a peça contrária:
   - **Fato:** o que se alega ter ocorrido.
   - **Prova:** o elemento dos autos que o demonstra (e sua qualidade).
   - **Inferência:** o salto lógico entre a prova e a conclusão (onde mora a fragilidade alheia).
   - **Tese:** a consequência jurídica pretendida.
   Ataque a peça adversária mostrando **inferência sem prova** ou **tese sem fato**.
4. **Construa o argumento como silogismo, entregue como entimema.** Verifique internamente as três premissas (norma, fato provado, subsunção). No texto, deixe implícita a premissa que o auditório já aceita — dizer o óbvio cansa; o entimema faz o leitor **completar** a conclusão e, com isso, senti-la como sua.
5. **Transfira o ônus.** Formule para que refutar seja tarefa do outro: "**Não há nos autos** um único elemento que…"; "**Competia à acusação demonstrar** X — e não o fez". A presunção de inocência transforma **silêncio probatório em vitória** da defesa.
6. **Use concessão estratégica.** Conceder o incontroverso compra credibilidade (**ethos**) e isola o ponto que importa: "Não se nega o desentendimento; **nega-se** que tenha havido a grave ameaça que o tipo exige". Negar tudo, inclusive o óbvio, destrói a confiança.
7. **Feche com o pedido, alto e claro.** Todo memorial/razão termina no **dispositivo pedido** (absolvição — indicar o inciso do art. 386 CPP; desclassificação; nulidade; redução de pena), sem timidez. Argumento que não desemboca em pedido explícito se perde.
8. **Regra dos três (com parcimônia).** Grupos de três (três razões, três provas) são memoráveis e ritmados — mas o uso mecânico soa artificial; empregue quando os três itens forem genuinamente fortes.

## Hierarquia de teses — a espinha do memorial

A ordem certa protege a tese principal e cria uma rede de segurança. Estrutura recomendada:

```
PRELIMINARES / PREJUDICIAIS  → nulidade, incompetência, prescrição, condição de procedibilidade
   (resolvem sem entrar no mérito — vêm primeiro por lógica processual)

MÉRITO — TESE PRINCIPAL  → a mais forte: atipicidade / negativa de autoria / excludente
   "Absolve-se porque o fato é atípico (ou o réu não é o autor)."

MÉRITO — TESES SUBSIDIÁRIAS  → "ainda que superada a principal…"
   → desclassificação para tipo menos grave
   → causa de exclusão de culpabilidade / erro
   → in dubio pro reo (insuficiência de prova — art. 386, VII, CPP)

DOSIMETRIA (eventual condenação)  → "acaso condenado, ainda assim…"
   → pena-base no mínimo, afastar majorantes, regime, substituição
```

Regras de ouro da hierarquização:
- **Nunca** deixe a subsidiária minar a principal. A transição é "**ainda que** este juízo supere a atipicidade, o que se admite apenas para argumentar…". Sem essa fórmula, pedir subsidiariamente a desclassificação soa como confissão de que a atipicidade é fraca.
- **Preliminar forte primeiro; preliminar fraca, com cautela.** Excesso de preliminares frágeis desgasta a leitura antes do mérito.
- **A dosimetria vem por último e em tom condicional** — jamais como se a condenação fosse aceita.

## Adequação ao auditório — juiz técnico x jurado leigo

| Dimensão | Juiz / desembargador (técnico) | Jurado (leigo, plenário) |
|---|---|---|
| Registro dominante | **logos** (lógica, subsunção, precedente) | **narrativa + pathos + ethos**, sobre base lógica |
| Linguagem | técnica, precisa, econômica | concreta, cotidiana, imagens claras |
| Prova | citada por fls./ID, com detalhe | contada como história verificável |
| Extensão | densa, mas sem excesso | poucos pontos, muito repetidos |
| Emoção | contida, ancorada em direito | legítima, jamais apelo ao ilícito ou à revitimização |
| Fecho | pedido técnico (inciso do art. 386) | pergunta moral + pedido claro de absolvição |

No **júri**, a **narrativa** organiza os fatos e a emoção deve nascer da **prova**, não substituí-la; réplica e tréplica (CPP, arts. 476-481) exigem argumentação **reativa** — responder o ponto do adversário, não repetir o discurso pronto. A técnica de oratória (respiração, pausa, ritmo, corpo) está na skill `tecnica-oratoria-forense-audiencia`; aqui cuidamos do **conteúdo argumentativo** que aquela fala transporta.

## Falácias e vícios argumentativos a evitar (e a explorar no adversário)

Reconhecê-los serve para **não cometê-los** e para **desmontar** a peça contrária:

- **Petição de princípio** — usar como prova aquilo que se quer provar ("é culpado porque cometeu o crime"). Aponte a circularidade.
- **Non sequitur / inferência sem lastro** — a conclusão não decorre da prova invocada. É o alvo predileto: separe prova de inferência e mostre o salto.
- ***Ad hominem*** — atacar a pessoa em vez do argumento. Estéril e, no foro, antiético; se o adversário o faz, exponha a manobra.
- **Falso dilema** — reduzir a "condenar ou soltar um culpado", ocultando a dúvida razoável e o *in dubio pro reo*.
- **Apelo à emoção desancorada** — comoção sem prova; no júri, é frágil e reversível pela parte contrária.
- **Espantalho (*straw man*)** — refutar versão caricata da tese alheia. Refute a tese **na sua melhor formulação** (princípio da caridade), que a derrota fica sólida.
- **Excesso de teses (dispersão)** — o vício mais comum; dilui as boas teses. Economia argumentativa é virtude persuasiva, não preguiça.

## Checklist e anti-padrões

- [ ] Há uma **teoria do caso** em uma frase, e tudo na peça a confirma?
- [ ] As teses estão **hierarquizadas** (principal → subsidiárias → dosimetria) com a fórmula "ainda que…"?
- [ ] O **argumento mais forte** abre a peça (não a cronologia processual)?
- [ ] Cada tese tem **âncora probatória** indicada (fls./ID/laudo/depoimento)?
- [ ] **Fato, prova, inferência e tese** estão separados — e a peça adversária foi atacada pela inferência frágil?
- [ ] O **ônus** foi transferido ("não há nos autos…"; "competia à acusação…")?
- [ ] As **contra-teses fortes** foram antecipadas e refutadas (na melhor formulação delas)?
- [ ] Houve **concessão estratégica** do incontroverso para ganhar credibilidade?
- [ ] A **linguagem e a dose de emoção** estão calibradas ao auditório (juiz x jurado)?
- [ ] A peça **termina em pedido explícito** (inciso do art. 386 CPP / desclassificação / nulidade / redução)?
- [ ] Todo **exemplo jurisprudencial** citado passou pelo Citation Gate (`jurisprudencia-stj-stf`)?

**Anti-padrões (evitar):**
- Começar pela cronologia e enterrar a tese forte no meio da peça.
- Empilhar **muitas teses fracas** — cada uma contamina a credibilidade das fortes.
- Deixar a **subsidiária minar a principal** (pedir desclassificação sem o "ainda que…").
- Argumentar por **adjetivos** ("é absurdo", "é teratológico") em vez de **prova** e **subsunção**.
- Apelar à **emoção desancorada** da prova, sobretudo no júri (reversível pela parte contrária).
- Confundir **fato com inferência** — e não perceber que a peça adversária faz o mesmo.
- Refutar o **espantalho** (versão caricata) da tese contrária, deixando de pé a versão real.
- Fechar sem **pedido claro**, ou pedir com timidez o que se argumentou com força.
- Inverter o **ônus da prova** contra o réu ("a defesa não provou a inocência") — no polo defensivo isso é autossabotagem; a presunção de inocência é a âncora.

## Nota de conformidade

- **Polo (transversal — confirme antes):** esta skill serve a **defesa e acusação**. Verifique o **polo da instituição** em `_criminalsquad/_memory/company.md`. No **polo defensivo**, a âncora é a **presunção de inocência** e o objetivo é **abrir dúvida razoável** (basta o *non liquet*). No **polo acusatório (MP/assistente)**, a lógica se **inverte**: o ônus de provar o fato típico e a autoria **além de dúvida razoável** é seu — a argumentação deve *fechar* a dúvida, não explorá-la, e o dever é de **objetividade** (o MP também requer a absolvição quando a prova não sustenta a condenação — CPP, art. 385).
- **Revisão humana obrigatória:** este material é apoio metodológico; a peça e a sustentação finais são do(a) advogado(a)/membro responsável (CED/EAOAB; CNMP no MP).
- **Citation Gate:** esta é skill de **técnica** — **não gera citação jurisprudencial**. Qualquer súmula, tese ou precedente usado como **exemplo** deve passar por `jurisprudencia-stj-stf` (e por `verificacao-citacoes`) antes de ir à peça. Há sanção real por jurisprudência inventada por IA. Marque como **[NÃO VERIFICADO]** todo precedente ainda não conferido.
- **Ética e limites da persuasão:** persuadir não é enganar. É vedado deduzir pretensão contra fato incontroverso (má-fé), sustentar prova que se sabe falsa ou apelar ao ilícito no júri. A força vem da prova e da ordem, não da distorção.
- **Sigilo/LGPD:** dados do assistido e da vítima não vão a repositório público; observe segredo de justiça quando incidente.

## Lembretes finais

- **Ordem vence volume:** argumento mais forte primeiro, prova antes do adjetivo, pedido no fim.
- **Teoria do caso** é o fio condutor — uma frase que tudo confirma ou nada é.
- **Hierarquize** com "ainda que…"; a subsidiária jamais mina a principal.
- **Transfira o ônus:** no polo defensivo, silêncio probatório é vitória; a presunção de inocência é a âncora.
- **Separe fato, prova, inferência e tese** — é escudo e é bisturi contra a peça contrária.
- **Adeque ao auditório:** logos para o juiz; narrativa, valores e clareza para o júri — emoção sempre ancorada na prova.
- **Não prometa resultado.** Argumentação maximiza a chance de adesão; a decisão é do julgador.

**Integração:** para o acabamento de texto (teoria do caso, narrativa, subsunção explícita, coesão), aplique `redacao-persuasiva-criminal`; para a **entrega falada** (voz, ritmo, corpo, réplica), `tecnica-oratoria-forense-audiencia`; para conferir qualquer precedente-exemplo, `jurisprudencia-stj-stf`.
