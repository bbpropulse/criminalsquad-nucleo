---
name: defesa-crimes-falsidade-eleitoral
description: >-
  Use ao defender réu por crimes de falsidade e fraude eleitoral (arts. 348-354 do Código Eleitoral,
  Lei 4.737/65): falsidade de documento público/particular eleitoral, uso de documento falso, fraude
  no alistamento, falsa identidade e crimes contra a fé pública eleitoral. Roteiro de defesa por
  tipo penal: atipicidade por especialidade frente aos arts. 297-299 do CP, ausência de dolo,
  ausência de potencialidade lesiva… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, defesa, falsidade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-falsidade-eleitoral"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-falsidade-eleitoral", "defesa crimes", "falsidade eleitoral"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes de Falsidade e Fraude Eleitoral (arts. 348-354 do Código Eleitoral)

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

Esta skill orienta a **defesa do réu** acusado dos crimes de falsidade e fraude eleitoral tipificados nos **arts. 348 a 354 do Código Eleitoral (Lei 4.737/65)** — a fé pública aplicada ao processo eleitoral (alistamento, título, documentos e registros da Justiça Eleitoral). São crimes eleitorais **próprios**, com regras que **prevalecem por especialidade** sobre a falsidade documental comum do Código Penal (arts. 297-299 CP).

> **Lição central:** o primeiro movimento da defesa é **enquadrar o tipo certo** — falsidade *eleitoral* (CE) ou falsidade *comum* (CP)? A conduta só é crime eleitoral quando o documento/registro tem **finalidade eleitoral** (alistamento, votação, propaganda, prestação de contas, registro de candidatura). Definido isso, ataque em cascata: **especialidade → dolo → potencialidade lesiva → prejuízo/relevância eleitoral → consunção**. Errar o enquadramento contamina competência, prescrição e pena.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 348-354 do Código Eleitoral** e das minirreformas eleitorais (Lei 9.504/97 e alterações; resoluções do TSE por ciclo eleitoral) antes de fundamentar. Súmulas, teses e precedentes do **TSE, STF e STJ** só entram na peça após passarem pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`. Não cite número de acórdão de memória.

## Base legal

- **Arts. 348-354 do Código Eleitoral (Lei 4.737/65)** — os tipos de falsidade e fraude eleitoral (ver quadro abaixo).
- **Art. 287 do Código Eleitoral** — aplicação **subsidiária** das normas gerais do Código Penal aos crimes eleitorais (integra o que o CE não regula: dolo, erro, tentativa, concurso, prescrição).
- **Arts. 297-299 do CP** — falsidade documental **comum**; afastados por **especialidade** (art. 12 CP) quando presente a finalidade eleitoral.
- **Art. 121, IV, da CF + art. 35, II, do CE** — **competência da Justiça Eleitoral** para processar e julgar os crimes eleitorais e os que lhes forem conexos.
- **Art. 359 do CE** — a **ação penal é pública**, promovida pelo Ministério Público Eleitoral.
- **Art. 20 CP (subsidiário)** — erro de tipo; ausência de dolo afasta a tipicidade dolosa (não há forma culposa nesses tipos).

## Mapa dos tipos — o que se imputa (arts. 348-354 CE)

> Confirme a redação exata de cada artigo antes de citar; o quadro é guia de trabalho, não substitui a leitura da lei.

| Art. | Núcleo da conduta | Paralelo no CP | Observação de defesa |
|------|-------------------|----------------|----------------------|
| **348** | Falsificar (formação/alteração) **documento público** para fins eleitorais | art. 297 CP | Exigir **finalidade eleitoral** e **potencialidade lesiva** |
| **349** | Falsificar **documento particular** para fins eleitorais | art. 298 CP | Documento particular pede prova de dano potencial mais estrita |
| **350** | **Falsidade ideológica** eleitoral (declaração falsa em documento verdadeiro) | art. 299 CP | Tese central: dado **juridicamente irrelevante** ou **inábil a enganar** = atipicidade |
| **351** | Equiparação — reconhecer firma/atestar fato falso em razão de função eleitoral | — | Verificar a **qualidade especial** do agente |
| **352** | **Uso** do documento falso (dos arts. 348-350) para fins eleitorais | art. 304 CP | **Consunção**: quem falsifica e usa responde por um só (ver adiante) |
| **353** | Uso, perante a Justiça Eleitoral, de documento **material ou ideologicamente falso** | art. 304 CP | Atacar autoria do uso e o dolo de usar sabendo ser falso |
| **354** | Obter, para si ou outrem, **documento eleitoral** mediante falsidade | — | Verificar se houve **efetiva obtenção** e o nexo com a falsidade |

> **Fraude no alistamento.** A obtenção fraudulenta de **inscrição eleitoral** (alistamento) — declarar domicílio inexistente, usar documento falso para se alistar, dupla inscrição dolosa — costuma capitular-se nos arts. 350, 353 ou 354 do CE (e, conforme o caso, no art. 289, inscrição fraudulenta de eleitor). **Confirme a capitulação concreta da denúncia** — parte relevante da defesa nasce de **erro de tipificação** da acusação.

## Roteiro de defesa — a cascata de teses

Analise **nesta ordem**; cada degrau que a defesa vence pode encerrar a imputação.

### 1) Competência e enquadramento — é crime eleitoral mesmo?

- **Finalidade eleitoral é elementar.** Sem destinação ao processo eleitoral (alistamento, voto, candidatura, propaganda, contas), **não há crime eleitoral** — quando muito, falsidade comum (CP), com deslocamento à Justiça Comum.
- **Tese de defesa (dupla via):** (a) se falta a finalidade eleitoral, **incompetência da Justiça Eleitoral** e eventual atipicidade eleitoral; (b) se o fato é atípico também no CP, **absolvição** por atipicidade.
- **Cuidado com a conexão.** Havendo crime comum conexo, a competência pode ser **una, da Justiça Eleitoral** (art. 35, II, CE; art. 121, IV, CF) — o que às vezes **favorece** e às vezes **prejudica** a defesa (regime prescricional, foro). Avalie estrategicamente.

### 2) Especialidade — CE afasta CP (art. 12 CP)

- Presente a finalidade eleitoral, os arts. 348-354 CE **prevalecem** sobre os arts. 297-299 CP por **especialidade**. **Denúncia que capitula no CP** conduta de índole eleitoral padece de **erro de tipificação** — arguir na resposta à acusação (art. 396-A CPP) e/ou como preliminar.
- Efeito prático: muda a **pena**, a **prescrição** e a **competência**. Nunca aceitar dupla imputação (CE + CP) pelo mesmo fato — é **bis in idem**.

### 3) Dolo — não há forma culposa

- Os tipos dos arts. 348-354 são **dolosos**. Exige-se **consciência da falsidade** e **vontade** de produzir/usar o documento com fim eleitoral.
- **Teses:** **erro de tipo** (art. 20 CP subsidiário) — o agente ignorava a falsidade (ex.: usou documento que reputava verdadeiro); **ausência de dolo específico** de fraudar o processo eleitoral; boa-fé no preenchimento de formulário/declaração.
- **Falsidade ideológica (art. 350):** distinga **erro/imprecisão** de **mentira dolosa**. Dado prestado por equívoco, ou cuja veracidade o declarante não tinha como aferir, **não** configura o dolo do art. 350.

### 4) Potencialidade lesiva — falsidade grosseira é atipicidade

- A falsidade **penalmente relevante** exige **idoneidade para enganar** (potencialidade lesiva). **Falsificação grosseira**, perceptível a olho nu, é **atípica** como falsidade — figura penalista clássica que se aplica também no âmbito eleitoral.
- **Tese:** documento/assinatura grotescamente falso, incapaz de iludir o homem médio ou o servidor eleitoral, **não** ofende a fé pública → atipicidade material. Requerer **perícia** para demonstrar a grosseria.
- **Súmula 73 do STJ (verificar redação e transponibilidade):** a falsificação grosseira de moeda pode caracterizar estelionato — o **raciocínio** (grosseria afasta o crime de fé pública) é análogo; a súmula é do CP, **não** se transporta automaticamente ao CE. Use o **princípio**, não a súmula, salvo confirmação via `jurisprudencia-stj-stf`.

### 5) Relevância eleitoral / lesividade — o dado importa para a eleição?

- A falsidade ideológica eleitoral pune declaração **juridicamente relevante**. **Dado inócuo**, que não altera nem tem aptidão para alterar o resultado do alistamento, do registro ou da votação, atrai a **atipicidade** por ausência de lesividade (princípio da ofensividade).
- **Exemplos de argumento:** informação acessória sem repercussão no direito de votar/ser votado; erro que a própria Justiça Eleitoral poderia corrigir de ofício; ausência de qualquer prejuízo ao pleito (**nemo damnum** — sem dano nem risco relevante, não há crime de fé pública material).
- Cuidar: nesses tipos, **o dano efetivo não é elementar** — basta a potencialidade. A defesa sustenta a **ausência até da potencialidade** (documento/dado incapaz de produzir qualquer efeito eleitoral).

### 6) Consunção — falsificar e usar é crime único

- Quem **falsifica e depois usa** o mesmo documento com a mesma finalidade responde por **um só crime** (a falsidade absorve o uso, ou o uso é post factum impunível) — princípio da consunção. **Denúncia que soma falsificação (art. 348/350) + uso (art. 352/353)** contra o mesmo agente, pelo mesmo documento, deve ser reduzida a **um crime**.
- Verifique também a consunção entre **fraude no alistamento** e o **uso posterior** do título fraudulento, quando integram o mesmo desígnio.

### 7) Prescrição e dosimetria

- **Prescrição:** calcule pela pena em abstrato/concreto e pela data do fato, aplicando as regras gerais do CP por força do **art. 287 CE**. Para o cálculo determinístico, use a skill **`calculadora-prescricao`** (informe pena, marcos interruptivos e causas de aumento/diminuição). Não estime prazo de cabeça.
- **Dosimetria:** para a fixação trifásica da pena (art. 68 CP, aplicável por subsidiariedade), use a skill **`calculadora-dosimetria`**. Sustente circunstâncias favoráveis (primariedade, bons antecedentes) e a **menor reprovabilidade** da falsidade sem dano efetivo.
- **Suspensão condicional do processo (art. 89 da Lei 9.099/95):** muitos tipos dos arts. 348-354 têm pena mínima igual ou inferior a 1 ano — **verifique o cabimento do sursis processual** e da transação, se for o caso. É frequentemente a melhor saída para o assistido.

## Teses × Contra-teses (o que a acusação dirá)

| Tese da defesa | Contra-tese (MP Eleitoral) | Como sustentar |
|----------------|----------------------------|----------------|
| Falta finalidade eleitoral → não é crime eleitoral | O documento circulou no processo eleitoral | Demonstrar o **destino real** do documento; separar uso administrativo de uso eleitoral |
| Especialidade: CE afasta CP | Concurso formal / crimes autônomos | Art. 12 CP + identidade de fato; vedar **bis in idem** |
| Ausência de dolo / erro de tipo | Dolo presumido pela posse do documento falso | Contexto fático, boa-fé, ausência de proveito; art. 20 CP |
| Falsificação grosseira → atipicidade | Idoneidade aferida pela perícia oficial | Requerer/contrapor **perícia**; olho médio do servidor eleitoral |
| Dado eleitoralmente irrelevante | Basta a potencialidade lesiva | Mostrar que **nem potencialidade** havia; princípio da ofensividade |
| Consunção (falsificar + usar = 1 crime) | Condutas autônomas puníveis em concurso | Mesmo documento, mesmo desígnio, mesma finalidade |
| Nulidade da prova (cadeia de custódia) | Prova hígida | Ver skill de **cadeia de custódia**; arts. 158-A a 158-F CPP |

## Nulidades e questões processuais próprias

- **Erro de capitulação na denúncia** (CP em vez de CE, ou tipo errado dentro do CE): arguir na **resposta à acusação (art. 396-A CPP)**; lembrar que o réu se defende dos **fatos**, mas a capitulação errada pode gerar **incompetência** e prejudicar a defesa (emendatio/mutatio — arts. 383/384 CPP).
- **Competência:** exceção de incompetência quando ausente a finalidade eleitoral (deslocar à Justiça Comum) — ou, ao contrário, sustentar a competência eleitoral por conexão quando favorável.
- **Prova pericial:** falsidade documental **reclama perícia** (art. 158 CPP) — a ausência de exame de corpo de delito direto/indireto sobre o documento é munição defensiva.
- **Cadeia de custódia** do documento apreendido: conferir a rastreabilidade (arts. 158-A a 158-F CPP) — quebra vicia a prova (usar a skill de cadeia de custódia).

## Súmulas e precedentes (todos sob o gate `verificacao-citacoes`)

> **Não cite número de HC/REsp/RE/Ac. do TSE de memória.** Ensine a **tese** e o **dispositivo**; para qualquer precedente específico, marque **[NÃO VERIFICADO]** e confirme via `jurisprudencia-stj-stf`.

- **Falsificação grosseira → atipicidade** — princípio consolidado da doutrina e jurisprudência penal; a **Súmula 73/STJ** trata do análogo (moeda/estelionato) e **não** se transporta ao CE sem confirmação. Sustente o **princípio**. [Precedente eleitoral específico: NÃO VERIFICADO — conferir]
- **Consunção falsidade/uso** — Súmula 17/STJ (o falso absorvido pelo estelionato quando se exaure nele) ilustra o **raciocínio de absorção**; é do CP e exige adaptação. Confirmar aplicabilidade eleitoral. [NÃO VERIFICADO]
- **Especialidade CE × CP** e **competência da Justiça Eleitoral por conexão** — teses correntes; localizar o precedente **atual** do STF/TSE via `jurisprudencia-stj-stf` antes de citar número. [NÃO VERIFICADO]
- **Prescrição em crimes eleitorais** — aplicação das regras gerais do CP por força do art. 287 CE; confirmar entendimento vigente. [NÃO VERIFICADO]

## Erros comuns / checklist da defesa

- [ ] Confirmei a **capitulação** da denúncia (CE × CP; artigo certo dentro do CE)?
- [ ] Testei a **finalidade eleitoral** — é elementar; sem ela, não há crime eleitoral?
- [ ] Arguí a **especialidade** (art. 12 CP) contra eventual imputação pelo CP?
- [ ] Verifiquei o **dolo** (não há culposo) — cabe **erro de tipo** (art. 20 CP)?
- [ ] Avaliei **falsificação grosseira** → requerer **perícia** e sustentar atipicidade?
- [ ] Testei a **relevância/lesividade eleitoral** do dado (potencialidade lesiva)?
- [ ] Apliquei **consunção** quando há falsificação + uso do mesmo documento?
- [ ] Verifiquei **competência** e eventual **conexão** (a favor ou contra)?
- [ ] Conferi a **cadeia de custódia** e a **perícia** do documento (art. 158 CPP)?
- [ ] Calculei **prescrição** (`calculadora-prescricao`) e **pena** (`calculadora-dosimetria`)?
- [ ] Verifiquei **sursis processual / transação** (arts. 89 e 76 da Lei 9.099/95)?
- [ ] Passei **toda** súmula/precedente/tese pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aceitar a capitulação pelo CP sem testar a **especialidade eleitoral** (muda pena, prescrição e foro).
- Tratar a falsidade ideológica (art. 350) como crime de **mera declaração inexata**, ignorando a exigência de **relevância** e **dolo**.
- Esquecer a **potencialidade lesiva** — falsificação grosseira é atípica.
- Deixar passar **falsificação + uso** cumulados contra o mesmo réu (consunção).
- Renunciar à **perícia** do documento e à conferência da **cadeia de custódia**.
- Citar número de acórdão do TSE/STF/STJ **de memória** — sempre pelo gate.
- Ignorar o **sursis processual**, que pode ser a melhor solução para o assistido.

## Nota de conformidade

Rascunho técnico para **revisão humana obrigatória** — nenhuma peça é protocolada sem conferência do(a) advogado(a) responsável (CED/OAB; Provimento 205/2021). A responsabilidade pela tese, pela capitulação e pelas citações é sempre do profissional. **Citation Gate inegociável:** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer** precedente específico (número de HC/REsp/RE/Ac., informativo, tema) sem certeza absoluta vai marcado **[NÃO VERIFICADO]** e é conferido via `jurisprudencia-stj-stf` antes do uso — há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
