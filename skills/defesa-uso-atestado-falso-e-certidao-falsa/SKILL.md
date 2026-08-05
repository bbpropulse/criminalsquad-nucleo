---
name: defesa-uso-atestado-falso-e-certidao-falsa
description: >-
  Use ao defender falsidade de certidão ou atestado de FUNCIONÁRIO PÚBLICO (CP art. 301, caput e §1º
  — ex.: certidão de antecedentes ideologicamente falsa) e figuras correlatas de papéis públicos.
  Crime PRÓPRIO de funcionário; separa 301 (funcionário) de 299 (falsidade ideológica geral), de 297
  (falso material de documento público) e de 302 (atestado MÉDICO). Gatilhos: certidão falsa,
  atestado funcional falso, funcionário… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica, falsidade-documental]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-uso-atestado-falso-e-certidao-falsa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-uso-atestado-falso-e-certidao-falsa", "defesa atestado", "certidao falsa"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Falsidade de Certidão e de Atestado por Funcionário Público (CP, art. 301 e correlatos)

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

Esta skill orienta a **defesa** em imputações de **falsidade de certidão ou de atestado praticada por funcionário público** — o art. 301 do Código Penal — e nas figuras periféricas de falsidade de **papéis públicos** que costumam vir na mesma denúncia (arts. 297, 298, 299, 300 e 304). O foco é o **enquadramento correto do tipo** e as teses defensivas próprias: crime **próprio** (só o funcionário no exercício da função pratica o caput), **atipicidade por ausência de potencialidade lesiva**, e a distinção — quase sempre decisiva — entre **301, 299, 297 e 302**.

> **Lição central:** o erro que abre a defesa é **de enquadramento**. Antes de qualquer tese de mérito, pergunte: **quem** atestou/certificou (funcionário no exercício da função? particular? médico?) e **como** o falso se deu (o documento é materialmente autêntico mas o *conteúdo* é mentiroso → ideológico; ou o *papel* foi forjado/alterado → material?). A resposta define se o caso é 301, 299, 297 ou 302 — e disso dependem pena, sujeito ativo e as teses cabíveis. Tipo errado na denúncia é munição de defesa (atipicidade / emendatio / desclassificação).

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 296 a 305 do CP na fonte oficial antes de fundamentar — a numeração de parágrafos, os verbos-núcleo e a majorante de "intuito de lucro" precisam ser transcritos do texto atual, não de memória. Toda súmula, tema repetitivo, informativo ou acórdão (número de HC/REsp/RE) passa **obrigatoriamente** pelo gate da skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir para a peça. Na dúvida, **omitir o número e ensinar a tese vence inventar o acórdão**.

---

## Base legal (conferir redação vigente antes de citar)

- **CP, art. 301, *caput*** — **atestar ou certificar falsamente**, o funcionário público, no exercício da função, fato ou circunstância que habilite alguém a obter cargo público, isenção de ônus/serviço público, ou qualquer outra vantagem (falsidade **ideológica de certidão/atestado** por funcionário). Crime **próprio**.
- **CP, art. 301, §1º** — falsidade **material** de atestado ou certidão (o funcionário que **falsifica**, no todo ou em parte, atestado ou certidão, ou altera o teor de certidão/atestado verdadeiro, para prova de fato que habilite a obter os benefícios acima). [Confirmar a delimitação exata caput × §1º na redação vigente — **[NAO VERIFICADO]**]
- **CP, art. 301, §2º** — **majorante de intuito de lucro / se o crime é praticado com o fim de lucro**: aplica-se, além da pena privativa de liberdade, a **pena de multa** (conferir a fórmula literal — **[NAO VERIFICADO]**).
- **CP, art. 302** — **falsidade de atestado MÉDICO** (dar o **médico**, no exercício da profissão, atestado falso). Sujeito ativo é o **médico**, não o funcionário — **não confundir com 301** (ver `defesa-falsidade-atestado-medico`).
- **CP, art. 297** — **falsificação de documento público** (falso **material**: forjar/alterar o papel).
- **CP, art. 298** — falsificação de documento **particular**.
- **CP, art. 299** — **falsidade ideológica** (tipo **geral**: inserir declaração falsa em documento público ou particular; conteúdo mentiroso em documento autêntico). O 301 é **especial** em relação ao 299 pelo **sujeito** (funcionário) e pelo **objeto** (certidão/atestado com finalidade habilitante).
- **CP, art. 300** — falsidade de papéis que fazem prova a favor de terceiro (reconhecimento de firma/letra — figura correlata).
- **CP, art. 304** — **uso** de documento falso (quem **usa** a certidão/atestado falso do 301, sem ser o autor da falsificação, responde pelo 304, com a pena do crime de falsificação correspondente).
- **CP, art. 61 e 327** — conceito de **funcionário público** (art. 327): definição ampla; testar se o agente se enquadra é pré-condição do 301.

> **Bem jurídico:** a **fé pública** (CP, Título X) — a confiança social nos documentos e certidões emanados do poder público. É o eixo do exame de **potencialidade lesiva**: sem aptidão para enganar e sem lesão possível à fé pública, o fato é **atípico**.

---

## Roteiro de análise da defesa (passo a passo)

### Passo 1 — Identificar o sujeito ativo (crime próprio)
O **caput** do 301 exige **funcionário público** (art. 327 CP) **no exercício da função**. Se quem atestou **não é funcionário**, ou não atuava **na função**, o caput **não se aplica** — e a imputação migra para 299 (particular que insere declaração falsa) ou 297/298 (falso material), com consequências distintas.
- **Tese:** ausência da qualidade de funcionário → **atipicidade quanto ao 301** (cabe, no máximo, 299).
- **Coautoria/partícipe particular:** o particular que concorre pode responder pelo 301 por **comunicabilidade da elementar** (art. 30 CP: circunstâncias de caráter pessoal comunicam-se quando **elementares** do tipo e conhecidas pelo partícipe) — atacar o **conhecimento** e o **liame subjetivo**.

### Passo 2 — Classificar a espécie de falso: ideológico × material
- **Ideológico** (301 *caput* / 299): o documento é **autêntico na forma**, mas o **conteúdo** é falso (o funcionário certifica fato que sabe inverídico).
- **Material** (301 §1º / 297): o **papel** é forjado, adulterado, ou tem o teor alterado.
- **Por que importa:** muda o tipo, a pena e as teses. Denúncia que descreve falso **ideológico** mas capitula falso **material** (ou vice-versa) abre **emendatio/desclassificação** e, às vezes, **atipicidade** (o fato descrito não é o crime capitulado).

### Passo 3 — Testar a finalidade habilitante (elementar do tipo)
O 301 exige que a certidão/atestado se destine a **habilitar alguém a obter cargo público, isenção de ônus ou serviço de caráter público, ou qualquer outra vantagem**. **Sem essa finalidade específica**, falta elementar → **atipicidade quanto ao 301** (podendo restar 299).
- **Tese:** o documento não se prestava a habilitar/obter vantagem no sentido do tipo → não é 301.

### Passo 4 — Exame de potencialidade lesiva (aptidão para enganar)
Falso **grosseiro**, incapaz de iludir o homem médio ou a repartição, é **crime impossível** (art. 17 CP) por **absoluta impropriedade do objeto/ineficácia do meio** → **atipicidade**. Também se afasta o crime quando **inexiste lesão possível à fé pública** (falso inócuo).
- **Tese:** ausência de **potencialidade lesiva** / falso grosseiro → atipicidade material.

### Passo 5 — Dolo e ausência de erro
O 301 é **doloso**; exige **consciência da falsidade**. **Erro sobre a veracidade** do fato certificado (o funcionário reproduziu dado que constava do sistema, cria verdadeiro) exclui o dolo → **atipicidade subjetiva** (art. 20 CP). Não há forma culposa.
- **Tese:** o agente atestou com base em informação que reputava verdadeira → **erro de tipo**, exclui dolo.

### Passo 6 — Concurso, absorção e *bis in idem*
- **Falso × uso:** quem **falsifica e usa** o próprio documento — verificar se o **uso é mero exaurimento** (post factum impunível) absorvido pela falsidade, conforme a orientação dominante. **[Confira a tese aplicável via `jurisprudencia-stj-stf`]**
- **Falso × crime-fim (estelionato/peculato):** o falso pode ser **absorvido** pelo crime-fim quando **se esgota** na prática deste, sem outra potencialidade lesiva (princípio da consunção — a lógica da **Súmula 17/STJ**, que trata do falso absorvido pelo estelionato). **Adaptar e conferir a súmula/precedente aplicável ao 301 via gate.**
- **Uma conduta, tipos sobrepostos (301 e 299):** aplicar o **princípio da especialidade** — o 301 afasta o 299 (não há concurso, sob pena de *bis in idem*).

### Passo 7 — Prescrição e dosimetria
- **Prescrição:** calcular pela pena **em abstrato** (art. 109 CP) e depois pela **pena aplicada** (arts. 109 c/c 110). Documentos antigos e processos longos → **prescrição da pretensão punitiva** é tese de primeira linha. Use a skill/rotina de **cálculo de prescrição** (`calculadora-prescricao` — [conferir existência/parametrizar]) para o marco e as causas interruptivas (art. 117 CP).
- **Dosimetria:** se houver condenação, atacar a **majorante do §2º (intuito de lucro)** quando não comprovado o **fim específico de lucro**; e aferir a pena-base sem valorar como negativa a própria elementar (vedação ao *bis in idem* na 1ª fase). Método detalhado: `calculadora-dosimetria`.

---

## Distinção decisiva — 301 × 299 × 297 × 302 (quadro-guia)

| Tipo | Sujeito ativo | Espécie de falso | Objeto / núcleo |
|------|---------------|------------------|-----------------|
| **301 caput** | **funcionário público** (no exercício) | **ideológico** | atesta/certifica falsamente fato que **habilita** a cargo/isenção/vantagem |
| **301 §1º** | funcionário público | **material** | falsifica/altera o **atestado ou a certidão** |
| **299** | **qualquer pessoa** (tipo geral) | ideológico | insere declaração falsa em documento (público ou particular) |
| **297** | qualquer pessoa | **material** | forja/altera **documento público** |
| **302** | **médico** (no exercício da profissão) | ideológico | dá **atestado médico** falso |

> **Regra de ouro:** **funcionário + certidão/atestado com fim habilitante + conteúdo mentiroso = 301** (especial). Retire qualquer elemento (não é funcionário; não há fim habilitante; o papel foi forjado; é médico) e o tipo **muda** — e com ele, a defesa.

> **`distinct_from` (da spec):** esta skill é do **FUNCIONÁRIO (301)**. A skill `defesa-falsidade-atestado-medico` trata do **MÉDICO (302)**. A skill `defesa-falsidade-ideologica` trata do **tipo geral (299)** — o 301 é **especial** por sujeito e objeto. Roteie corretamente.

---

## Teses defensivas típicas (por camada)

1. **Atipicidade por ausência de elementar do 301** — não é funcionário público / não atuou no exercício da função / o documento não tinha finalidade habilitante. Consequência: desclassificação para 299 (mais brando em pena?) ou **absolvição** se nada resta.
2. **Atipicidade por falta de potencialidade lesiva** — falso grosseiro ou inócuo; crime impossível (art. 17 CP); ausência de lesão possível à fé pública.
3. **Erro de tipo (exclusão do dolo)** — o funcionário certificou dado que reputava verdadeiro (constava do sistema/base oficial). Não há modalidade culposa → absolvição.
4. **Consunção / absorção** — o falso se exaure no crime-fim (estelionato, peculato) e é por ele absorvido; ou o **uso** é post factum impunível da própria falsificação. **(Conferir súmula/precedente via gate.)**
5. **Especialidade (afastar *bis in idem*)** — condenar por 301 **e** 299 pela mesma conduta é *bis in idem*; prevalece o especial.
6. ***Emendatio/mutatio libelli*** — descompasso entre o fato narrado (ideológico) e a capitulação (material), ou vice-versa; provocar a correção com impacto na pena/tese.
7. **Insignificância / mínima ofensividade** — em falso de bagatela sem lesão efetiva à fé pública, sustentar a atipicidade material (tese **subsidiária** e de aceitação restrita em crimes contra a fé pública — usar com cautela).
8. **Prescrição** — da pretensão punitiva (abstrata ou retroativa), sobretudo em fatos antigos.
9. **Nulidades processuais próprias** — falta de **exame pericial documental** (materialidade do falso material depende, em regra, de perícia — art. 158 CPP); cadeia de custódia do documento questionado; ausência de laudo grafotécnico onde imprescindível.

---

## Contra-teses da acusação (o que a defesa deve antecipar)

- **Comunicabilidade da elementar (art. 30 CP):** o particular partícipe responde pelo 301 se conhecia a condição de funcionário do coautor. → Defesa: atacar **ciência** e **liame subjetivo**.
- **Autonomia do falso quando remanesce potencialidade lesiva:** se o documento falso pode ser usado **em outros contextos**, não há consunção pelo crime-fim. → Defesa: demonstrar que o documento **se esgotou** no crime-fim.
- **Dolo presumido pela função:** acusação sustenta que o funcionário **não podia ignorar** a falsidade. → Defesa: provar a **fonte da informação** e a plausibilidade do erro (documentos do sistema, rotina administrativa).
- **Materialidade do falso ideológico independe de perícia:** no ideológico, o "falso" está no **conteúdo**, aferível por prova documental/testemunhal, não por grafotécnica. → Defesa: reservar a exigência de perícia para o falso **material** (§1º/297).

---

## Súmulas e precedentes (sob o Citation Gate — NÃO citar de memória)

Cite com segurança apenas **dispositivos de lei** e **súmulas notórias** após conferência; **todo número de acórdão/informativo/tema** deve passar pela skill `jurisprudencia-stj-stf` antes de ir à peça.

- **Súmula 17/STJ** (falso absorvido pelo estelionato quando nele se exaure): **notória**, mas **confirme a redação e a aplicabilidade** ao caso concreto de 301 antes de transpor — a súmula fala de estelionato; a transposição ao 301 é **argumento por analogia de consunção**, não aplicação direta. **[Conferir via gate]**
- **Falso × uso pelo próprio agente (post factum impunível):** há orientação consolidada; **o enunciado e o número do precedente devem ser verificados** — **[NAO VERIFICADO]**.
- **Competência (Justiça Federal × Estadual):** quando a certidão/atestado falso lesa **interesse/serviço da União** (ex.: documento de órgão federal), pode firmar competência **federal** — **conferir Súmula/tema aplicável e o caso concreto via gate** — **[NAO VERIFICADO]**.
- **Exigência de exame pericial no falso material (art. 158 CPP):** dispositivo legal citável; a **jurisprudência sobre suprimento da perícia** deve ser verificada caso a caso — **[NAO VERIFICADO]**.

> **Diretriz anti-alucinação:** prefira **ensinar a tese e ancorar no dispositivo** (arts. 301, 299, 297, 30, 17, 20, 109-110, 327 do CP; art. 158 CPP) a arriscar um número de HC/REsp. Número de acórdão só entra na peça **depois** de confirmado na fonte.

---

## Erros comuns / checklist da defesa

- [ ] **Sujeito ativo conferido?** É **funcionário público** (art. 327) **no exercício da função**? Se não, o caput do 301 **cai** (migra p/ 299).
- [ ] **Espécie de falso classificada?** Ideológico (caput/299) × material (§1º/297) — bate com a **capitulação** da denúncia?
- [ ] **Finalidade habilitante** (cargo/isenção/vantagem) presente? Sem ela, **atipicidade quanto ao 301**.
- [ ] **Potencialidade lesiva** examinada? Falso grosseiro/inócuo → crime impossível (art. 17).
- [ ] **Dolo e erro de tipo** (art. 20) — há prova de consciência da falsidade? Fonte da informação foi checada?
- [ ] **Consunção/absorção** (falso × crime-fim; uso × falsificação) avaliada — súmula/precedente **conferidos no gate**?
- [ ] **Especialidade** — evitou-se dupla imputação 301 **e** 299 (*bis in idem*)?
- [ ] **Emendatio/mutatio** — o fato narrado corresponde ao tipo capitulado?
- [ ] **Perícia documental** (art. 158 CPP) exigida onde o falso é **material**?
- [ ] **Prescrição** calculada (abstrata e retroativa) — `calculadora-prescricao`?
- [ ] **Dosimetria** — majorante do §2º (lucro) impugnada se não comprovado o fim; sem *bis in idem* na 1ª fase?
- [ ] **Todas as citações** passaram por `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Aceitar a capitulação em **301** sem checar a **qualidade de funcionário** e a **finalidade habilitante** (elementares).
- Confundir **301 (funcionário)** com **302 (médico)** ou tratar como **299** o que é especial (301) — e vice-versa.
- Tratar falso **ideológico** como se exigisse **grafotécnica** (a perícia é do falso **material**).
- Deixar de sustentar **consunção** quando o falso se exaure no crime-fim.
- Citar **Súmula 17/STJ** como se aplicasse **diretamente** ao 301 (é estelionato; ao 301 vale como analogia de consunção — conferir).
- Esquecer a **prescrição** em fatos antigos — muitas vezes a tese mais forte e mais barata.
- Inserir número de acórdão/informativo **não verificado** na peça.

---

## Encadeamento com outras skills

- **`defesa-falsidade-atestado-medico`** — quando o sujeito é **médico** (302), não funcionário.
- **`defesa-falsidade-ideologica`** — quando o tipo correto é o **geral (299)**.
- **`jurisprudencia-stj-stf`** / **`verificacao-citacoes`** — **gate obrigatório** de toda súmula/precedente.
- **`calculadora-prescricao`** e **`calculadora-dosimetria`** — cálculos determinísticos (marco prescricional; pena) — [conferir existência/parametrizar; se ausente: **calculadora a implementar com testes**].
- **`redacao-persuasiva-criminal`** — ao redigir a peça (resposta à acusação, alegações finais, apelação): teoria do caso, narrativa, subsunção explícita, coesão e persuasão.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é **apoio à preparação técnica**, não substitui o juízo do(a) advogado(a) responsável nem a leitura integral dos autos. Toda tese, enquadramento e citação é **hipótese a confirmar** antes de protocolar.
- **Citation Gate inegociável:** nenhuma súmula, tema, informativo ou acórdão vai à peça sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Há **sanções reais** por jurisprudência inventada por IA.
- **Ética por polo:** skill majoritariamente de **DEFESA** (EAOAB + Provimento 205/2021 da OAB). Se o operador for do **Ministério Público** (CNMP) ou **Defensoria** (LC 80/94), adaptar deveres e vedações. O **chefe-roteador deve conferir o polo** da instituição (`_memory/company.md`) antes de aplicar — a mesma matéria muda de mão conforme se acusa ou se defende.
- **Sigilo e LGPD:** dados do assistido nunca em repositório público; documentos do caso ficam em área sigilosa (`acervo/casos/`, gitignored).
