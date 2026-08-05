---
name: acusacao-crimes-fe-publica-denuncia
description: >-
  Use para redigir ou estruturar acusacao crimes fe publica denuncia: [POLO ACUSATÓRIO —
  MP/assistente] Use ao estruturar a DENÚNCIA e a estratégia probatória do Ministério Público nos
  crimes contra a fé pública (CP, arts. 289 a 311): escolher a capitulação certa (falso material ×
  falso ideológico × uso de documento falso), individualizar a conduta, demonstrar a POTENCIALIDADE
  LESIVA (imitação idônea a enganar) e superar a… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, fe-publica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-crimes-fe-publica-denuncia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-crimes-fe-publica-denuncia", "acusacao crimes", "publica denuncia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Denúncia e Estratégia Acusatória nos Crimes contra a Fé Pública (CP, Título X — arts. 289 a 311)

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

> **⚖️ SKILL DO POLO ACUSATÓRIO.** Esta skill assume atuação como **Ministério Público** (Promotor/Procurador) ou **assistente de acusação**. **O roteador deve confirmar o polo da instituição** (`_criminalsquad/_memory/company.md`) antes de aplicá-la: em escritório de defesa, o uso é apenas **especular** (antecipar a tese acusatória para desmontá-la) — a peça a redigir será a **resposta à acusação** ou o **HC de trancamento**, não a denúncia. Para a defesa por tipo penal, use as skills de impugnação e estratégia defensiva.

Esta skill orienta a **estratégia acusatória específica do capítulo dos falsos**: a construção da denúncia (peça geral em `denuncia-mp`) *aplicada* aos crimes contra a fé pública. O método geral do art. 41 CPP não muda — o que muda é o **triângulo de decisão** próprio deste título: (1) **qual falso** (material, ideológico ou uso), (2) **potencialidade lesiva** demonstrada, e (3) **absorção ou concurso** com o crime-fim (estelionato, sonegação, etc.).

> **Lição central:** no capítulo dos falsos, a denúncia se ganha ou se perde na **capitulação e na potencialidade lesiva**. Errar o tipo (chamar de material o que é ideológico, ou vice-versa) é inépcia por incongruência; e narrar a falsificação sem descrever *por que aquele documento/moeda era idôneo a enganar* é convidar a atipicidade (falso grosseiro) e o trancamento. Descreva a **imitação da verdade** (*imitatio veri*) — não basta afirmar que é falso, é preciso mostrar que enganaria o homem médio.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 289 a 311 do CP e, sobretudo, o **estado atual da Súmula 17 do STJ** (absorção do falso pelo estelionato) e da **competência** (moeda falsa é federal; documento pode ser estadual ou federal conforme o órgão emissor/interesse da União — ponto que oscila) via os agentes `lei-e-sumula` (redação de lei/súmula) e `jurisprudencia-stj-stf` (precedentes atuais). Nenhum número de acórdão/tema entra na peça sem o gate `verificacao-citacoes`.

---

## Base legal — o mapa do Título X

O bem jurídico é a **fé pública**: a confiança coletiva na autenticidade de moedas, documentos, sinais e declarações. O título divide-se em quatro capítulos:

| Capítulo | Arts. | Núcleo |
|---|---|---|
| **I — Moeda** | 289–292 | Moeda falsa (289), crimes assimilados (290), petrechos (291), emissão irregular de título ao portador (292) |
| **II — Papéis públicos / assimilados** | 293–295 | Falsificação de papéis públicos (293), petrechos (294), agravação do funcionário (295) |
| **III — Selos e sinais** | 296–298 | Selo/sinal público (296), do funcionário (297 — falsificação de **documento público**), documento particular (298) |
| **IV — Documentos e outras falsidades** | 297–311 | Doc. público (297), doc. particular (298), **falsidade ideológica (299)**, falso reconhecimento de firma (300), certidão/atestado (301–302), **uso de documento falso (304)**, supressão de documento (305), fraudes em certame de interesse público (311-A) etc. |

- **Art. 297, CP** — falsificação de **documento público** (falso **material**): reclusão de 2 a 6 anos e multa; §2º equipara certos documentos (CTPS, título eleitoral, livros mercantis etc.); §§3º e 4º tratam do falso previdenciário.
- **Art. 298, CP** — falsificação de **documento particular** (falso material): reclusão de 1 a 5 anos e multa; parágrafo único equipara **cartão de crédito/débito** a documento particular.
- **Art. 299, CP** — **falsidade ideológica**: o documento é formalmente verdadeiro, mas o **conteúdo** é mentiroso (omitir declaração que devia constar, inserir declaração falsa ou diversa). Pena maior se documento público.
- **Art. 304, CP** — **uso de documento falso**: usa como próprio qualquer dos documentos falsificados/alterados dos arts. 297 a 302; pena do crime de falsificação correspondente.
- **Art. 289, CP** — **moeda falsa**: fabricar/alterar; introduzir/guardar/vender/receber com ciência (§1º); **crime de competência da Justiça Federal** (CF, art. 109, IV — interesse da União/BACEN).
- **Art. 311-A, CP** — fraudes em certames de interesse público (concursos, ENEM, vestibulares) — falsidade específica moderna.

---

## O TRIÂNGULO DA CAPITULAÇÃO — falso material × ideológico × uso (decidir ANTES de narrar)

A escolha do tipo **precede** a redação da denúncia e define competência, pena e rito. É o erro nº 1 do capítulo.

### 1) Falso MATERIAL (arts. 297/298) — a forma é adulterada

Atua-se **sobre a materialidade** do documento: cria-se um documento inteiro (contrafação) ou altera-se um verdadeiro (rasura, emenda, montagem). A mentira está no **suporte físico/gráfico**.
- *Exemplos:* carteira de habilitação clonada, contrato com assinatura falsificada, RG montado, alteração de valor em cheque.
- **Pergunta-chave da denúncia:** *o documento é falso na sua forma?* (perícia grafotécnica/documentoscópica é a prova-rainha).

### 2) Falso IDEOLÓGICO (art. 299) — a forma é verdadeira, o conteúdo mente

O documento é **autêntico na forma** (feito por quem podia fazê-lo, no suporte próprio), mas **o conteúdo declarado é falso**. A mentira está na **ideia/declaração**, não no papel.
- *Exemplos:* declaração falsa em escritura pública verdadeira, informação mentirosa lançada em formulário oficial, atestado com fato inverídico.
- **Pergunta-chave da denúncia:** *quem tinha o dever/poder de declarar inseriu conteúdo mentiroso?* (a autoria recai sobre o declarante).
- **Divisor prático:** se a assinatura/emissão é genuína e só o *teor* é mentiroso → **299**. Se o próprio suporte foi adulterado/contrafeito → **297/298**. Não se cumulam sobre o mesmo ato: ou a forma é falsa (material) ou só o conteúdo (ideológico).

### 3) USO de documento falso (art. 304) — apresentar como próprio

Quem **usa** (apresenta, exibe, faz valer) documento que sabe falso, sem ter participado da falsificação, responde por **uso** (art. 304), com a pena do crime de falsificação correspondente.
- **Falsificador que também usa:** corrente majoritária entende que o uso é **pós-fato impunível** (a falsificação absorve o uso pelo mesmo autor) — **[NÃO VERIFICADO]: confirmar o entendimento atual via `jurisprudencia-stj-stf`**. Se o autor **só usou** (não falsificou), a capitulação é o **304**.
- **Não confundir** com o art. 307 (falsa identidade — atribuir-se falsa identidade sem documento) nem com o art. 308 (uso de documento de identidade **alheio verdadeiro**).

> **Regra de ouro da capitulação:** capitule **pelo que a narrativa sustenta e a perícia comprova** (`denuncia-mp`). Capitulação inflada (chamar 298 de 297 para elevar a pena, ou somar falso + uso pelo mesmo autor sem base) é controlável judicialmente e mina a credibilidade da peça.

---

## POTENCIALIDADE LESIVA — o coração da tipicidade do falso

Falsidade **penalmente relevante** é a que tem **potencialidade de enganar** (*imitatio veri*): a imitação precisa ser idônea a iludir o homem médio. O **falso grosseiro** — perceptível de plano por qualquer pessoa — é **atípico** como crime contra a fé pública (podendo, no máximo, configurar estelionato se, ainda assim, enganou a vítima concreta em razão de circunstâncias particulares).

- **Súmula 73 STJ** — a falsificação **grosseira** de moeda **não** configura moeda falsa (competência federal), podendo caracterizar **estelionato** (competência estadual). **[conferir vigência/redação via `lei-e-sumula`]**
- **O que a denúncia deve descrever:** *por que* aquela moeda/documento era idôneo a enganar — semelhança com o verdadeiro, elementos de segurança imitados, contexto de circulação. **A perícia que atesta a aptidão a enganar é prova essencial**; sem laudo que reconheça a idoneidade da imitação, a acusação por falso fica exposta à atipicidade.
- **Ônus argumentativo do MP:** não basta juntar o laudo — a peça deve **narrar** a potencialidade lesiva, amarrando-a ao elemento probatório (laudo documentoscópico/de moeda), sob pena de a defesa sustentar falso grosseiro e crime impossível (CP, art. 17).

> **Roteiro probatório mínimo (montar antes de denunciar):** (1) laudo pericial atestando a falsidade **e** a potencialidade de engano; (2) apreensão/cadeia de custódia do documento/moeda íntegra (`impugnacao-cadeia-custodia` invertida — blindar a coleta); (3) demonstração do dolo (ciência da falsidade — no §1º do 289 e no 304 o **saber-falso** é elementar); (4) individualização de quem falsificou × quem usou.

---

## ABSORÇÃO × CONCURSO — a Súmula 17 STJ e como superá-la

A questão mais recorrente do capítulo: quando o falso é **meio** para outro crime (estelionato, sonegação, descaminho), ele é **absorvido** pelo crime-fim ou há **concurso**?

- **Súmula 17 STJ:** *"Quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido."* **[conferir redação/vigência via `lei-e-sumula`]** — princípio da **consunção** (*antefato impunível*).
- **A chave é a EXPRESSÃO "sem mais potencialidade lesiva":** a absorção só ocorre quando o documento falso **se esgota** no golpe único e não tem vida autônoma. Se o falso **conserva potencialidade** de enganar terceiros para além do estelionato praticado, **não** há absorção → **concurso de crimes**.

### Estratégia acusatória para AFASTAR a absorção (sustentar o concurso)

Para o MP que quer punir o falso **e** o crime-fim, a tese é demonstrar a **potencialidade lesiva autônoma/residual** do documento:

1. **Falso reutilizável / de vida própria:** documento de identidade, CNH, diploma, passaporte falso — servem a **múltiplos** usos futuros, não se exaurem num só golpe → concurso, não absorção.
2. **Falso que atinge fé pública além da vítima do estelionato:** documento público falso ofende a confiança coletiva mesmo quando o golpe patrimonial falha ou se completa.
3. **Crimes com bens jurídicos diversos:** falso (fé pública) e estelionato (patrimônio) tutelam bens distintos; a consunção exige que o falso seja **puramente instrumental e descartável**.
4. **Falso × crime-fim de pena MENOR:** se o falso (ex.: 297, pena 2–6 anos) é mais grave que o crime-fim, a lógica da consunção (o menor absorvido pelo maior) **inverte** — sustente que o crime-fim não pode absorver o falso mais grave. **[confirmar a modulação atual via `jurisprudencia-stj-stf`]**

> **Contra-tese defensiva (antecipar e enfrentar):** a defesa sustentará que o falso *se exauriu* no estelionato (Súmula 17), pedindo a **absorção** e a consequente **redução da pena** e/ou **deslocamento de competência**. A denúncia acusatória deve **preventivamente narrar a potencialidade residual** — descrever o documento como reutilizável ou de ofensa coletiva — para blindar o concurso desde a exordial.

### Sonegação / crimes tributários e o falso

Quando a falsidade documental é **meio** para a sonegação (Lei 8.137/90), aplica-se lógica semelhante de consunção — o falso-meio pode ser absorvido pelo crime tributário. **Confira via `jurisprudencia-stj-stf`** a modulação atual (inclusive a interação com a **Súmula Vinculante 24 STF**, que exige lançamento definitivo para o crime tributário material — ver `denuncia-mp`).

---

## COMPETÊNCIA — o segundo divisor prático

Endereçamento errado = incompetência e anulação do recebimento. No capítulo dos falsos, a régua:

| Objeto do falso | Justiça | Fundamento |
|---|---|---|
| **Moeda falsa** (papel-moeda nacional/estrangeiro) | **FEDERAL** | CF, art. 109, IV (interesse da União/BACEN) — **Súmula 73 STJ** desloca para a estadual o falso grosseiro (estelionato) |
| **Documento público FEDERAL** (passaporte, CTPS, doc. do INSS, diploma de universidade federal, título eleitoral) | **FEDERAL** | interesse/serviço da União ou entidade federal (CF, art. 109, IV) |
| **Documento público ESTADUAL/MUNICIPAL** (RG estadual, certidão de cartório estadual) | **ESTADUAL** | ausência de interesse direto da União |
| **Documento particular** | em regra **ESTADUAL** | salvo lesão a interesse/serviço/bem federal |
| **Falso usado para lesar a União** (INSS, tributo federal, autarquia federal) | **FEDERAL** | Súmula 62 STJ (competência pelo prejuízo) **[conferir via `lei-e-sumula`]** |

> **Cautela:** a competência para uso de documento falso segue, em regra, o **lugar do uso** e a **natureza do documento/interesse lesado** — ponto que oscila (uso de doc. federal falso perante particular; uso perante órgão federal). **Confirme o critério atual via `jurisprudencia-stj-stf` antes de endereçar.**

---

## Individualização da conduta — falsificador × usuário × beneficiário

No capítulo dos falsos, a individualização (art. 41 CPP; `denuncia-mp`) exige distinguir papéis:

- **Quem falsificou** (297/298/299) — descrever o ato de adulteração/contrafação/declaração falsa, a época e o dolo.
- **Quem usou** (304) — descrever a apresentação como própria e a **ciência da falsidade** (saber-falso é elementar).
- **Quem se beneficiou / mandou fabricar** — analisar autoria/participação (CP, art. 29); em falso ideológico, a autoria é do **declarante** (quem tinha o dever/poder de declarar), não necessariamente de quem materialmente lavrou o documento.

**Standard mínimo por denunciado:** ato concreto + época + modo de concorrer + **dolo (ciência da falsidade / intenção de enganar)** + a prova que lastreia. Denúncia que só afirma "falsificou documento" sem descrever *o quê, como e a potencialidade* é genérica e inepta (`inepcia-denuncia-generica`, lida como pauta invertida de qualidade).

---

## Teses típicas da ACUSAÇÃO (e as contra-teses defensivas a antecipar)

| # | Tese acusatória | Contra-tese defensiva (antecipar) |
|---|---|---|
| 1 | **Potencialidade lesiva demonstrada** — laudo + narrativa da *imitatio veri* | **Falso grosseiro** (atípico) / **crime impossível** (CP 17) |
| 2 | **Concurso** falso + crime-fim — potencialidade residual/autônoma | **Absorção** pela Súmula 17 STJ (falso exaurido no estelionato) |
| 3 | **Capitulação correta** (material 297/298 × ideológico 299 × uso 304) decorrente da perícia | **Emendatio/atipicidade** por erro de subsunção (chamar de material o ideológico) |
| 4 | **Dolo de enganar** provado (ciência da falsidade — saber-falso) | Ausência de dolo / desconhecimento da falsidade |
| 5 | **Competência federal** (moeda; documento/interesse da União) | Incompetência absoluta / deslocamento à estadual |
| 6 | **Falso reutilizável** (identidade, diploma) não se exaure num golpe | Documento descartável, esgotado no estelionato único |
| 7 | **Fé pública ofendida** além da vítima patrimonial | Bem jurídico único, lesão só ao patrimônio |

---

## Súmulas e precedentes sob o Citation Gate

**Dispositivos e súmulas de citação segura (confirmar redação vigente via `lei-e-sumula`):**
- **CP, arts. 289–311** — tipos do Título X (moeda, papéis, selos, documentos, falsidades).
- **CF, art. 109, IV** — competência da Justiça Federal (moeda; interesse da União).
- **CP, art. 17** — crime impossível (ineficácia absoluta do meio — base do falso grosseiro atípico).
- **Súmula 17 STJ** — o falso absorvido pelo estelionato quando exaurido, sem mais potencialidade lesiva.
- **Súmula 73 STJ** — falsificação grosseira de moeda → estelionato (competência estadual).
- **Súmula 62 STJ** — competência pelo prejuízo (falso lesivo a interesse federal). **[conferir texto exato]**
- **Súmula Vinculante 24 STF** — crime tributário material exige lançamento definitivo (interação falso-meio × sonegação).

**Para QUALQUER precedente específico (nº de HC/REsp/CC, informativo, tema repetitivo)** sobre: absorção/consunção do falso, potencialidade lesiva residual, competência no uso de documento falso, pós-fato impunível do falsificador que usa, ou modulação da Súmula 17 → **marque [NÃO VERIFICADO] e confira via `jurisprudencia-stj-stf`**. **Não cite número de acórdão de memória.** Prefira ensinar a **tese** (potencialidade residual afasta a consunção) e o **dispositivo/súmula notória** a arriscar um número — súmula/precedente inventado gera sanção real.

---

## Estrutura da denúncia (aplicada aos falsos)

Segue a estrutura forense geral de `denuncia-mp`, com os **acréscimos próprios** do capítulo:

```
AO JUÍZO DA [Vara Criminal / VARA FEDERAL] DA [SEÇÃO/COMARCA] — [UF]
[moeda falsa → Justiça FEDERAL; conferir competência do documento]

Autos nº [IP / APF / PIC nº ...]

O MINISTÉRIO PÚBLICO [FEDERAL / DO ESTADO DE UF], por seu(sua) [Procurador(a)
da República / Promotor(a) de Justiça] (CF 129, I; CPP 24 e 41), vem OFERECER
DENÚNCIA em face de [NOME e qualificação — CPP 41 e 259]:

I — DOS FATOS
Narrar: (a) o documento/moeda e sua FALSIDADE (material — adulteração da forma;
ou ideológica — conteúdo mentiroso em forma verdadeira); (b) a POTENCIALIDADE
LESIVA — por que era idôneo a enganar o homem médio (imitatio veri), amarrada
ao LAUDO PERICIAL (fls./ID); (c) a conduta de CADA denunciado (falsificou / usou
/ mandou fabricar), com a ciência da falsidade (dolo); (d) [se houver crime-fim]
a POTENCIALIDADE RESIDUAL/AUTÔNOMA do falso — documento reutilizável ou ofensa
à fé pública além da vítima — para sustentar o CONCURSO e afastar a Súmula 17.

II — DA JUSTA CAUSA E DO DIREITO
Amarrar materialidade (laudo documentoscópico/de moeda) e indícios de autoria;
enfrentar desde logo: falso grosseiro (atipicidade), absorção (Súmula 17) e
competência.

III — DA CAPITULAÇÃO
Réu 1: art. [297 / 298 / 299 / 304 / 289], c/c art. [69/70 CP se concurso com o
crime-fim] — capitulação POR RÉU e por conduta (falsificador × usuário).

IV — DA NÃO PROPOSITURA DE ANPP [quando a pena mínima permitir a dúvida]
Falsos sem violência/grave ameaça com pena mínima < 4 anos podem admitir ANPP —
proponha ou fundamente o óbice na peça (CPP 28-A; ver `anpp` e `denuncia-mp`).

V — DOS REQUERIMENTOS
a) recebimento e citação; b) [cautelares, se necessárias — fundamentação
concreta e contemporânea]; c) valor mínimo de reparação (CPP 387, IV) quando
houver dano patrimonial no crime-fim.

[LOCAL], [DATA]. [PROCURADOR(A)/PROMOTOR(A)]
ROL DE TESTEMUNHAS (na peça, sob preclusão — incluir o PERITO se necessário)
```

**Campos a preencher:** [VARA/SEÇÃO], [UF], [Nº AUTOS], [NOME e qualificação], [documento/moeda], [tipo de falso], [artigos], [laudo/fls.], [LOCAL], [DATA], [membro do MP].

**Documentos essenciais a instruir:** laudo pericial (documentoscópico/grafotécnico/de moeda) atestando falsidade **e potencialidade de engano**; auto de apreensão + cadeia de custódia do objeto; elementos do dolo (ciência da falsidade).

---

## Erros comuns / checklist antes de protocolar

- [ ] **Tipo certo?** Falso **material** (297/298 — forma adulterada) × **ideológico** (299 — conteúdo mentiroso em forma verdadeira) × **uso** (304) corretamente distinguidos e capitulados por conduta?
- [ ] **Potencialidade lesiva narrada** (não só afirmada) e amarrada ao **laudo pericial** — blindada contra a tese de falso grosseiro / crime impossível (CP 17)?
- [ ] **Absorção enfrentada:** havendo crime-fim, a peça narra a **potencialidade residual/autônoma** do falso para sustentar o **concurso** e afastar a **Súmula 17 STJ**?
- [ ] **Competência conferida:** moeda → **Federal** (CF 109); documento → Federal ou Estadual conforme órgão emissor/interesse lesado (via `jurisprudencia-stj-stf`)?
- [ ] **Dolo (saber-falso) descrito** — ciência da falsidade no uso (304) e no §1º do 289?
- [ ] **Individualização por papel** — falsificador × usuário × beneficiário, cada um com ato, época, modo e prova?
- [ ] **Falsificador que também usou** — capitulado corretamente (uso como pós-fato impunível? **[verificar via `jurisprudencia-stj-stf`]**) sem somar 297 + 304 do mesmo autor sem base?
- [ ] **ANPP analisado** quando a pena mínima permite (falsos sem violência)?
- [ ] **Súmulas/precedentes** conferidos via `lei-e-sumula` (redação) e `jurisprudencia-stj-stf` (números), validados pelo gate `verificacao-citacoes` — **nada de memória**?

**Anti-padrões (evitar):**
- Confundir falso **material** com **ideológico** (é o erro que mais anula denúncia do capítulo).
- Afirmar a falsidade sem narrar a **potencialidade lesiva** — abre a porta do falso grosseiro / atipicidade.
- Aceitar automaticamente a **absorção** (Súmula 17) sem investigar a **potencialidade residual** — perde-se o concurso e diminui a pena.
- Somar **falso + uso** pelo **mesmo autor** sem base (o uso pelo falsificador tende a ser pós-fato impunível — verificar).
- Endereçar à Justiça errada (moeda é **sempre federal**; documento oscila) — anula o recebimento.
- Citar **número** de HC/REsp/CC ou informativo **de memória** — passe tudo pelo Citation Gate.

---

## Apoie-se em

- **Skill `denuncia-mp`** — método geral da peça acusatória (art. 41, justa causa, individualização, aditamento, ANPP): esta skill é a **especialização** dele para os falsos.
- **Skill `inepcia-denuncia-generica`** — a leitura defensiva da denúncia; use como **pauta invertida** para blindar a capitulação e a potencialidade lesiva.
- **Skill `anpp`** — dever de análise prévia do acordo nos falsos sem violência.
- **Skill `assistente-acusacao`** — se a atuação for como assistente (particular lesado no crime-fim), a articulação com o MP e os limites da assistência.
- **Agente `lei-e-sumula`** — redação vigente dos arts. 289–311 CP e das Súmulas 17, 62, 73 STJ e SV 24 STF.
- **Agente `jurisprudencia-stj-stf`** — precedentes atuais (consunção do falso, potencialidade residual, competência no uso, pós-fato impunível) — sempre [NÃO VERIFICADO] até validação.
- **Agente/gate `verificacao-citacoes`** — nenhuma súmula, tema ou julgado entra na peça sem verificação (há sanção real por jurisprudência inventada por IA).
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima: teoria do caso, narrativa dos fatos, subsunção explícita e persuasão na redação final (aplicar SEMPRE).

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta peça é hipótese a confirmar; a revisão final pelo membro do MP / advogado responsável precede o protocolo.
- **Ética por polo — polo acusatório:** atuação do **Ministério Público** rege-se pelas normas do **CNMP** (não pela OAB); como **assistente de acusação**, o advogado do ofendido observa o **EAOAB + Provimento 205/2021**. O roteador deve confirmar o polo em `company.md` antes de aplicar a skill; em instituição de **defesa**, esta skill serve apenas para **antecipar a tese acusatória** e construir a resposta/HC de trancamento.
- **Objetividade acusatória:** o MP acusa por dever de legalidade e imparcialidade objetiva — capitulação e potencialidade lesiva decorrem da **prova**, não da estratégia de elevar pena. Denunciar sem justa causa (falso grosseiro atípico; ausência de laudo idôneo) é constrangimento ilegal.
- **Citation Gate inegociável:** todo dispositivo, súmula, tese ou acórdão passa por `lei-e-sumula` / `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso. Na dúvida, **omitir vence inventar**.
