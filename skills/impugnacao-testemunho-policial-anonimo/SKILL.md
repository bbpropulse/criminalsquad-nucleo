---
name: impugnacao-testemunho-policial-anonimo
description: >-
  Use ao dimensionar e impugnar prova de credibilidade reduzida ou controversa — testemunho policial
  isolado, denúncia anônima, informante não identificado, testemunha protegida/anônima: a exigência
  de corroboração do depoimento do agente, os limites da denúncia anônima como fundamento de
  diligência/condenação e o contraditório possível sobre a testemunha cuja identidade é preservada.
  Gatilhos: palavra de policial, testemunho… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, prova, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-impugnacao-testemunho-policial-anonimo"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["impugnacao-testemunho-policial-anonimo", "impugnacao testemunho", "policial anonimo"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Valoração da Palavra de Policiais, Informantes e Testemunho Anônimo (CPP arts. 202, 203, 206-208; Lei 9.807/99; CF art. 5º, LV)

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

Esta skill orienta a **análise e a impugnação do valor probatório** de fontes de credibilidade **reduzida ou controversa**: o **policial** que participou da diligência, a **denúncia anônima** (disque-denúncia, delação apócrifa), o **informante** não identificado e a **testemunha protegida/anônima** (Lei 9.807/99). O eixo é sempre o mesmo — **quanto essa fonte pode, sozinha, sustentar uma condenação**, e **que contraditório** o réu pôde exercer sobre ela.

> **Lição central:** o depoimento de policial **não é nulo nem impresta**, mas **não goza de presunção absoluta de veracidade** e, quando **isolado**, reclama **corroboração** por elemento externo produzido sob contraditório. O erro da defesa é atacar o policial *como* testemunha (pedir nulidade do depoimento); o certo é **dimensionar o peso** dele no conjunto e denunciar a **ausência de corroboração** e de **contraditório** — é problema de **standard probatório**, não de admissibilidade.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 202, 203 e 206-208 do CPP e da **Lei 9.807/99** (proteção a vítimas e testemunhas). O regime de **valoração** do depoimento policial e da denúncia anônima é **construção jurisprudencial** (STF/STJ) — sujeito a evolução e overruling. Antes de fundamentar, **passe toda súmula, tese, tema ou acórdão pelo gate `verificacao-citacoes` / skill `jurisprudencia-stj-stf`.** Melhor omitir precedente do que citar julgado inexistente.

## Base legal (âncoras)

- **CPP, art. 202** — **toda pessoa** pode ser testemunha (o policial inclusive; não há impedimento por ser agente).
- **CPP, art. 203** — a testemunha **presta compromisso** de dizer a verdade; sujeita-se às penas do **falso testemunho** (CP, art. 342).
- **CPP, arts. 206-208** — distinguem a **testemunha** (compromissada) do **informante** (art. 208: **não se defere compromisso** a doentes/deficientes mentais, a menores de 14 anos e às pessoas do art. 206 — ascendentes, descendentes, cônjuge, afins e irmãos). O **declarante não compromissado** vale como **mero informante** — prova de **valor reduzido**, que **não sustenta condenação isolada**.
- **Lei 9.807/99 (arts. 7º a 9º)** — programa de proteção a vítimas e testemunhas; **preservação da identidade, imagem e dados** da testemunha ameaçada (art. 7º, IV). É o fundamento legal do **sigilo de identidade** — mas o sigilo **não pode aniquilar o contraditório** (CF, art. 5º, LV).
- **CF, art. 5º, LV** — **contraditório e ampla defesa**: o réu tem direito de **conhecer a prova** que o incrimina e de **contraditá-la**. Prova que o réu **não pôde contraditar** tem valor **nulo ou mínimo**.
- **CF, art. 93, IX** — dever de **fundamentação**: a sentença tem de **explicitar** por que a palavra da fonte controversa foi (ou não) suficiente, e **qual** corroboração a amparou.

## Panorama: três fontes, três regimes distintos

| Fonte | Admissível? | Vale sozinha? | Contraditório possível? | Regra-chave |
|---|---|---|---|---|
| **Policial** (compromissado) | Sim (art. 202) | **Em regra não, se isolado** — exige corroboração | Sim (é ouvido, identificado, reperguntável) | Sem presunção de veracidade; peso conforme corroboração |
| **Denúncia anônima** | Como **notitia criminis**, sim | **Nunca** fundamenta, por si só, prisão/busca/condenação | Não (fonte apócrifa) | Só deflagra **verificação preliminar**; não é meio de prova |
| **Testemunha protegida/anônima** (Lei 9.807/99) | Sim, com sigilo de **dados de qualificação** | Depende — quanto menor o contraditório, menor o peso | **Parcial** (identidade preservada, mas conteúdo reperguntável) | Sigilo de qualificação ≠ anonimato do depoimento; réu deve poder **contraditar o conteúdo** |

> **Não confundir.** (a) **Testemunha protegida** (Lei 9.807/99) tem **identidade real preservada**, mas **depõe** e é **reperguntada** — o conteúdo é contraditável. (b) **Testemunha anônima** *stricto sensu* (fonte cujo depoimento fundamenta a condenação **sem que a defesa saiba quem é nem possa reperguntar**) é **incompatível** com o art. 5º, LV. (c) **Informante do art. 208** é declarante **sem compromisso** — vale pouco, mas está identificado. (d) **Denúncia anônima** **não é testemunho** — é notícia apócrifa, não passa por contraditório e **não é meio de prova**.

---

## 1) A palavra do policial — o regime da corroboração

### 1.1 O que a jurisprudência assentou (a tese, sem número de acórdão)

- O policial **pode** ser testemunha (art. 202) e seu depoimento **não é imprestável** só porque ele participou da diligência ou tem interesse funcional no resultado.
- **Mas** seu depoimento **não tem presunção de veracidade** superior ao de qualquer testemunha; deve ser **valorado com reservas** quando é a **única** prova, sobretudo em crimes de **flagrante forjável** (tráfico, porte de arma, resistência, desacato).
- **Standard exigível:** condenação amparada **exclusivamente** na palavra dos agentes que realizaram a prisão, **sem nenhuma corroboração externa**, é **frágil** e tende à **absolvição por dúvida** (CPP, art. 386, VII — *in dubio pro reo*).

> **Regra prática de valoração:** *palavra de policial + corroboração idônea = base condenatória possível; palavra de policial isolada e não corroborada = insuficiente.*

### 1.2 O que conta como corroboração idônea

Corroboração é **elemento externo, independente da narrativa do agente**, produzido (ou reproduzível) **sob contraditório**:
- **prova pericial** (laudo de constatação/definitivo da droga, exame de eficiência da arma, balística);
- **prova material apreendida** com cadeia de custódia íntegra (ver skill `cadeia-de-custodia`);
- **imagem/áudio** (câmera corporal — *body cam*, CFTV, filmagem de terceiros);
- **testemunha civil** independente (não integrante da guarnição);
- **elementos de comunicação** (mensagens, geolocalização) obtidos licitamente;
- **confissão** válida e corroborada (não a confissão informal "de ouvir dizer" — ver 1.3).

**NÃO corroboram** (são a mesma fonte, só multiplicada):
- vários policiais **da mesma guarnição** repetindo a **mesma** versão (é **uma** fonte, não N);
- o **auto de prisão em flagrante** e o **boletim** assinados pelos próprios agentes;
- o **reconhecimento informal** feito só pelos policiais.

### 1.3 A "confissão informal" e o "ouvi dizer" (hearsay)

- **Confissão informal** (o réu teria "confessado na rua" ao policial, sem registro, sem defesa técnica) **não vale como confissão** e não corrobora nada — é **relato do próprio agente** sobre o que teria ouvido.
- **Testemunho indireto/por ouvir dizer** (o policial narra o que um informante/anônimo lhe disse) **não transfere** credibilidade à origem oculta; o **peso é o da fonte primária** — que aqui é anônima e não contraditável. **Impugnar como hearsay.**

### 1.4 Roteiro de análise — depoimento policial

1. **A condenação se apoia SÓ em policiais?** Mapear cada elemento do conjunto e separar o que vem **exclusivamente** dos agentes.
2. **Há corroboração externa** (perícia, material, imagem, testemunha civil)? Se **não**, sustentar insuficiência (art. 386, VII).
3. **A corroboração é independente** ou é a mesma fonte multiplicada (guarnição repetindo)? Se dependente, **não corrobora**.
4. **Contradições internas** entre os agentes ou com o auto/laudo? (cruzar com a skill `matriz-contradicoes-prova-oral`).
5. **Cadeia de custódia** da prova material apreendida está íntegra? Quebra → prova imprestável (skill `cadeia-de-custodia`).
6. **Houve "confissão informal" / reconhecimento informal**? Impugnar o valor.
7. **Há câmera corporal** cuja imagem foi **omitida**? A ausência injustificada de *body cam* que deveria existir **milita a favor da dúvida** — requerer/protestar a juntada.

---

## 2) Denúncia anônima — o que pode e o que não pode fundamentar

> **Premissa:** a **notícia anônima** (disque-denúncia, carta/e-mail apócrifos) **é lícita como notitia criminis**, mas **não é meio de prova** e **não fundamenta**, por si só, medidas invasivas nem condenação. Vedação ao anonimato (CF, art. 5º, IV) e ausência de contraditório sobre a fonte.

**Escada de licitude (o que a denúncia anônima autoriza):**

```
Denúncia anônima recebida
        │
        ▼
1) VERIFICAÇÃO PRELIMINAR (investigação preliminar, diligências discretas)
   — a autoridade deve APURAR a verossimilhança ANTES de agir.
        │
        ▼
2) Se a verificação produz ELEMENTOS PRÓPRIOS e idôneos
   → esses elementos (não a denúncia) fundamentam a medida.
        │
        ▼
3) Medida invasiva (busca, interceptação, prisão) fundamentada
   nos elementos colhidos — NUNCA na denúncia anônima pura.
```

- **Vedado:** deflagrar **busca domiciliar**, **interceptação** ou **prisão** com **base única** na denúncia anônima, **sem verificação prévia**. Fazê-lo é **ilicitude** que contamina a prova derivada (**teoria dos frutos da árvore envenenada** — CPP, art. 157, §1º).
- **Busca pessoal / abordagem** exige **fundada suspeita** concreta (CPP, art. 244); a denúncia anônima **isolada não é fundada suspeita** — precisa de dado objetivo somado à verificação.
- **Ingresso em domicílio** por suspeita de flagrante permanente (tráfico) exige **justa causa prévia e demonstrável** — a denúncia anônima **não supre** a exigência de fundadas razões *ex ante* (cruzar com a skill `defesa-drogas` e com o regime das buscas domiciliares).

> **Tese defensiva central:** *ação policial deflagrada exclusivamente por denúncia anônima, sem verificação preliminar idônea, gera ilicitude da prova (art. 157) e, por consequência, das provas dela derivadas.*

---

## 3) Testemunha protegida / anônima — o limite do contraditório

- A **Lei 9.807/99** autoriza **preservar identidade, imagem e dados** da testemunha **ameaçada** (art. 7º, IV). É legítimo **sigilar a qualificação** (nome, endereço) para protegê-la.
- **Limite constitucional:** o sigilo pode recair sobre **quem é** a testemunha, **não** sobre **o que ela diz**. A defesa tem de poder **conhecer o teor** do depoimento e **reperguntar** (ainda que por meios que protejam a identidade — sala reservada, distorção de voz/imagem). Depoimento **sigiloso quanto ao conteúdo**, que a defesa **não pôde contraditar**, tem valor **nulo**.
- **Standard de peso (parâmetro do TEDH, adotado como diretriz doutrinária):** condenação **não pode assentar-se de forma exclusiva ou decisiva** em testemunho anônimo que a defesa não pôde contraditar. Quanto **menor** o contraditório exercido, **menor** o peso admissível — e **nunca** o único.

> **Tese defensiva:** *testemunho de fonte protegida cuja identidade foi sigilada é admissível, mas (i) o conteúdo deve ser acessível e reperguntável pela defesa e (ii) não pode ser o fundamento exclusivo ou decisivo da condenação; sendo-o, viola o art. 5º, LV.*

---

## Teses defensivas × contra-teses (acusação)

| Tese defensiva | Contra-tese (acusação) |
|---|---|
| Palavra de policial **isolada e não corroborada** é insuficiente → absolvição por dúvida (art. 386, VII) | Depoimento harmônico e coerente dos agentes, sob compromisso, basta; presunção de legalidade do ato administrativo |
| Vários policiais da mesma guarnição = **uma** fonte, não corroboração | Pluralidade de depoimentos convergentes reforça a certeza |
| Ação deflagrada só por **denúncia anônima** sem verificação → prova ilícita (art. 157) e frutos derivados | Houve verificação/diligências prévias que legitimaram a medida (ônus de demonstrar é da acusação) |
| "Confissão informal" e reconhecimento informal **não valem** e não corroboram | O relato do agente sobre a confissão espontânea é elemento válido de convicção |
| Testemunho **por ouvir dizer** tem o peso da fonte oculta (anônima) — não da boca que repete | Testemunho indireto é meio idôneo, valorável no conjunto |
| Testemunho **anônimo/decisivo e não contraditado** viola o art. 5º, LV | O sigilo é legal (Lei 9.807/99) e a defesa teve acesso ao teor |
| Ausência de **body cam** que deveria existir milita pró-dúvida | A prova testemunhal é autônoma; não há dever legal absoluto de gravação |

---

## Súmulas, dispositivos e precedentes (sob o Citation Gate)

**Dispositivos seguros (citar livremente):** CPP arts. **157** (prova ilícita e derivada), **158-159** (perícia), **202-203**, **206-208**, **212** (reperguntas), **244** (busca pessoal — fundada suspeita), **386, VII** (absolvição por insuficiência); CP art. **342** (falso testemunho); CF art. **5º, IV, LV, LVI** e art. **93, IX**; Lei **9.807/99**, arts. **7º-9º**.

- **Súmula 70/TJRJ** [NÃO VERIFICADO] — insuficiência da palavra isolada dos policiais para condenar em certos delitos; **verificar existência, número e alcance** (é súmula de tribunal estadual, aplicação restrita) via `jurisprudencia-stj-stf`.
- **Jurisprudência do STF/STJ sobre denúncia anônima** (necessidade de **verificação preliminar** antes de medidas invasivas) — tese consolidada, **mas confirme o precedente-líder e a redação atual** antes de citar número de HC/RHC/Inq. [NÃO VERIFICADO]
- **Jurisprudência sobre valoração/corroboração do depoimento policial** — orientação de que o depoimento é **válido** e valorável, sem presunção absoluta. **Não cite número de acórdão sem conferir** via `jurisprudencia-stj-stf`. [NÃO VERIFICADO]
- **Precedentes sobre ingresso domiciliar e "fundadas razões"** (tráfico) e sobre **reconhecimento de pessoas (art. 226 CPP)** — pertinentes por analogia ao reconhecimento informal; **verificar tema/número atual** antes de usar. [NÃO VERIFICADO]
- **Parâmetro TEDH** (testemunho anônimo não pode ser prova **exclusiva ou decisiva**) — usar como **diretriz doutrinária/argumentativa**, sinalizando a fonte; **não** apresentar como precedente vinculante brasileiro.

> **Regra de ouro do Citation Gate:** prefira **ensinar a tese e ancorar no dispositivo de lei** a arriscar um número de acórdão. **Todo** precedente específico (número de HC/REsp/RE, informativo, tema repetitivo, súmula estadual) marcado como **[NÃO VERIFICADO]** deve passar por `jurisprudencia-stj-stf` antes de ir para a peça. **Omitir vence inventar.**

---

## Erros comuns (anti-padrões a evitar)

- **Pedir a nulidade do depoimento policial** por ser policial — não é nulo (art. 202); ataque o **peso** e a **falta de corroboração**, não a admissibilidade.
- **Tratar guarnição inteira como várias fontes** — depoimentos da mesma equipe são **uma** fonte; não se corroboram entre si.
- **Aceitar "confissão informal"** e reconhecimento informal como elementos válidos — impugnar sempre.
- **Deixar passar a ausência de verificação preliminar** quando a ação nasceu de denúncia anônima — é a porta da tese de ilicitude (art. 157).
- **Confundir sigilo de identidade (lícito) com anonimato do depoimento (ilícito)** — o teor tem de ser contraditável.
- **Ignorar a cadeia de custódia** da prova material que "corrobora" — corroboração com custódia quebrada não corrobora (skill `cadeia-de-custodia`).
- **Não requerer/protestar a juntada de body cam / CFTV** existente e omitida.
- **Citar súmula estadual ou acórdão de memória** sem passar pelo gate — risco de sanção por citação inventada.

## Checklist final (defesa)

- [ ] O conjunto foi **decomposto** e o que vem **só dos policiais** está isolado do resto?
- [ ] Há **corroboração externa e independente** (perícia, material com custódia, imagem, testemunha civil)? Em falta → art. 386, VII.
- [ ] A "corroboração" **não** é a mesma fonte multiplicada (guarnição)?
- [ ] **Contradições internas** cotejadas (skill `matriz-contradicoes-prova-oral`)?
- [ ] A ação nasceu de **denúncia anônima**? Houve **verificação preliminar** idônea? Em falta → ilicitude (art. 157, §§) e frutos derivados.
- [ ] Busca/abordagem teve **fundada suspeita** concreta (art. 244) — não a denúncia isolada?
- [ ] Testemunha protegida: a defesa **conheceu o teor** e pôde **reperguntar**? O depoimento é **exclusivo/decisivo**?
- [ ] "**Confissão informal**", **hearsay** e **reconhecimento informal** identificados e impugnados?
- [ ] **Body cam/CFTV** existente foi juntada? Ausência injustificada protestada?
- [ ] **Cadeia de custódia** do material apreendido íntegra (skill `cadeia-de-custodia`)?
- [ ] **Todas** as súmulas/teses/precedentes passaram por `jurisprudencia-stj-stf` / gate `verificacao-citacoes`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material apoia a **análise e a impugnação** do valor probatório; não substitui o juízo profissional nem a leitura dos autos concretos. A responsabilidade pela tese e pela peça é sempre do **advogado** (Estatuto da OAB e Código de Ética; **Provimento 205/2021** na atuação publicitária).
- **Citation Gate inegociável:** nenhuma súmula, tese, tema ou acórdão citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Há **sanções reais** por jurisprudência inventada por IA. Na dúvida entre **omitir** e **arriscar um número**, **omita**.
- **Cautela de vigência:** confira a redação atual dos arts. 202, 203, 206-208, 157 e 244 do CPP e da Lei 9.807/99, bem como a **orientação jurisprudencial vigente** sobre corroboração e denúncia anônima, que é dinâmica.

**Padrão de redação:** ao converter a análise em peça (alegações finais, apelação, RESE, HC, resposta à acusação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
