---
name: defesa-evasao-divisas-dolar-cabo-marco-cambial
description: >-
  Use ao defender acusado dos crimes do art. 22 da Lei 7.492/86 (crimes contra o Sistema Financeiro
  Nacional) — operação de câmbio não autorizada com fim de evasão (caput); promover saída de
  moeda/divisa sem autorização (parágrafo único, 1ª parte); manter no exterior depósitos não
  declarados à repartição federal competente (parágrafo único, 2ª parte) —, incluindo o dólar-cabo,
  à luz do Marco Legal Cambial (Lei 14.286/2021)… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, penal-economico]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-evasao-divisas-dolar-cabo-marco-cambial"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-evasao-divisas-dolar-cabo-marco-cambial", "defesa evasao", "marco cambial"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa da Evasão de Divisas — art. 22 da Lei 7.492/86, dólar-cabo e o Marco Cambial

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

Esta skill orienta a **defesa técnica** nas imputações do **art. 22 da Lei 7.492/86** (Lei do Colarinho Branco / crimes contra o Sistema Financeiro Nacional), abrangendo o **dólar-cabo** e a releitura do tipo à luz do **Marco Legal Cambial (Lei 14.286/2021)**. É material do **polo da defesa**: as contra-teses da acusação aparecem apenas para antecipar o embate.

> **Lição central:** o art. 22 abriga **três figuras distintas**, com elementos e defesas próprias. O primeiro erro de quem defende é tratar "evasão de divisas" como um bloco único. **Identifique QUAL figura foi imputada ANTES de tudo** — (a) operação de câmbio não autorizada com fim de evasão; (b) promover saída de moeda/divisa sem autorização; (c) manter no exterior depósito não declarado. É essa classificação que define o elemento subjetivo exigido, o momento consumativo e a tese cabível. Imputação genérica que não individualiza a figura é **inépcia da denúncia**.

> **Cautela de vigência (obrigatória antes de citar):** o art. 22, parágrafo único, é **norma penal em branco** — seu complemento (o que se deve declarar, e a partir de qual valor) vem da **regulamentação cambial do Banco Central**, que mudou com a **Lei 14.286/2021** (vigência a partir de **30/12/2022**, vacatio de um ano) e seus atos infralegais. **Confira sempre**: (1) a regulamentação do BCB **vigente à data do fato** e a **atual** (ex.: Resolução BCB sobre declaração de capitais brasileiros no exterior — DCBE/CBE; número e patamar podem ter mudado); (2) revogações operadas pelo Marco Cambial; (3) súmulas, temas e overruling — tudo pela skill `jurisprudencia-stj-stf` antes de fundamentar. Não afirme patamar ou número de ato normativo de memória.

## As três figuras do art. 22 (decompor sempre)

| Figura | Núcleo típico | Elemento subjetivo | Consumação |
|--------|---------------|--------------------|------------|
| **Caput** | *efetuar operação de câmbio não autorizada* | dolo + **fim especial de promover evasão de divisas** ("com o fim de") | formal — dispensa a evasão efetiva |
| **§ único, 1ª parte** | *promover, sem autorização legal, a saída de moeda ou divisa para o exterior* | dolo de promover a saída sem autorização | com a saída/remessa |
| **§ único, 2ª parte** | *manter no exterior depósitos não declarados à repartição federal competente* | dolo de manter sem declarar | **permanente** (enquanto perdura a manutenção não declarada) — verificar |

- **Pena (todas):** reclusão de **2 a 6 anos, e multa**.
- **"Repartição federal competente"** = **Banco Central do Brasil** (declaração de capitais brasileiros no exterior).
- O **caput** exige **elemento subjetivo especial** — sem a *finalidade de evasão*, a figura do caput não se perfaz (pode remanescer, no máximo, ilícito administrativo cambial, não o crime).

## Bem jurídico e competência

- **Bem jurídico:** higidez e regularidade do **Sistema Financeiro Nacional**, a **política cambial** e o controle estatal sobre o fluxo de divisas e reservas — **não** a arrecadação tributária (distinção que importa para insignificância e para o concurso com crimes fiscais).
- **Competência:** **Justiça Federal** (CF, art. 109, VI; e **art. 26 da Lei 7.492** — ação penal pelo **Ministério Público Federal** perante a JF). Se a imputação não descrever crime contra o SFN, cabe suscitar **declínio/incompetência**.

## Base legal

- **Art. 22, caput e parágrafo único, da Lei 7.492/86** — as três figuras.
- **Art. 26 da Lei 7.492/86** — ação penal (MPF / Justiça Federal).
- **Lei 14.286/2021 (Marco Legal do Câmbio)** — nova disciplina do mercado de câmbio, dos capitais brasileiros no exterior e dos capitais estrangeiros no país; regulamentação por atos do **CMN/BCB**.
- **CP, art. 2º** — lei penal no tempo: **abolitio criminis** (parágrafo único) e **retroatividade da lei mais benéfica** (irretroatividade da gravosa — CF, art. 5º, XL).
- **CP, art. 3º** — lei excepcional/temporária (invocado pela **acusação** contra a retroatividade do complemento — ver adiante).
- **CP, art. 109, III** — prescrição: pena máxima de 6 anos → **prescrição em 12 anos**.
- **CP, art. 21** — erro de proibição (relevante em norma penal em branco de conteúdo regulatório).

## O Marco Cambial e a retroatividade benéfica (o coração da defesa hoje)

A Lei 14.286/2021 **não revogou** o art. 22 — a evasão de divisas segue crime. O que mudou foi (i) o **complemento** da norma penal em branco (o **dever de declarar** e o **patamar** a partir do qual ele incide) e (ii) o **rol de operações permitidas**. Daí duas frentes de atipicidade **superveniente**:

1. **Depósito não declarado (§ único, 2ª parte):** se a regulamentação **elevou o piso** de obrigatoriedade da declaração ao BCB, condutas antes típicas (manter valores **abaixo do novo patamar** sem declarar) tornam-se **atípicas**. Aplica-se o **art. 2º do CP** (novatio legis in mellius / abolitio criminis parcial), **retroagindo** a fatos anteriores.
2. **Operação de câmbio / saída (caput e § único, 1ª parte):** operação antes "não autorizada" que o novo marco passou a **permitir** deixa de preencher a elementar da "não autorização" — atipicidade superveniente, a examinar caso a caso.

**Norma penal em branco — a controvérsia central:**
- **Tese defensiva:** a elevação do piso de declaração reflete **nova valoração jurídica permanente** (mudança estrutural da política cambial), e não circunstância meramente factual/temporária — logo o complemento mais benéfico **retroage** (art. 2º CP). Aplica-se por analogia o raciocínio das penais em branco cujo complemento exprime desvalor da conduta.
- **Contra-tese (acusação):** invoca o **art. 3º do CP** (ultratividade de norma temporária/excepcional) para sustentar que a alteração do complemento **não retroage**. Rebater: o Marco Cambial **não é temporário nem excepcional** — é regime permanente; não incide o art. 3º.

**Árvore de decisão (retroatividade):**
```
Figura imputada = manter depósito não declarado (§ único, 2ª parte)?
 ├── SIM → valor do ativo × patamar de declaração exigido hoje pelo BCB:
 │         ├── abaixo do patamar atual → ATIPICIDADE SUPERVENIENTE
 │         │    (art. 2º CP — retroage; pleitear absolvição/trancamento)
 │         └── igual/acima → retroatividade não resolve; atacar dolo, prova,
 │              prescrição, natureza permanente e concursos
 └── NÃO (caput ou § único, 1ª parte) → a operação passou a ser PERMITIDA
       pelo novo marco?
       ├── SIM → atacar a elementar "não autorizada"/"sem autorização"
       │         (atipicidade superveniente — art. 2º CP)
       └── NÃO → atacar dolo (fim de evasão), individualização e prova
```

## Dólar-cabo — o que é e como se defende

**Dólar-cabo** é a transferência internacional de valores **sem deslocamento físico da moeda**: o cliente entrega reais no Brasil e recebe (ou credita) o valor no exterior por **compensação entre contas** operada por intermediários ("doleiros"). Costuma ser imputado como **operação de câmbio não autorizada (caput)** e/ou **saída de divisa (§ único, 1ª parte)** — e frequentemente vem acompanhado de **lavagem** e **organização criminosa**.

Eixos de defesa no dólar-cabo:
- **Individualização da figura:** exigir que a denúncia diga se imputa o caput, o parágrafo único, ou ambos — e por quê. Vedado **bis in idem** ao punir a **mesma operação** como caput **e** parágrafo único.
- **Autoria e domínio do fato:** distinguir o **operador profissional** (doleiro) do **cliente eventual**. Para o cliente, discutir dolo, participação de menor importância (CP, art. 29, §1º) e ausência de habitualidade.
- **Dolo específico (quando imputado o caput):** exigir prova do **fim de evasão**; a mera remessa por via alternativa, sem essa finalidade demonstrada, não perfaz o caput.
- **Continuidade delitiva vs. crime único:** múltiplas operações homogêneas → **crime continuado** (CP, art. 71), afastando o concurso material mais gravoso.

## Roteiro de defesa (passo a passo)

1. **Classificar a figura** imputada (caput / § único-1ª / § único-2ª) — e cobrar individualização na denúncia.
2. **Checar os elementos** da figura: operação de câmbio? não autorização? saída efetiva? manutenção? **fim de evasão** (só no caput)?
3. **Datar a conduta** e confrontar com o **Marco Cambial** (retroatividade — art. 2º CP): houve mudança de patamar/permissão que torne o fato atípico?
4. **Natureza e prescrição:** se § único-2ª parte for tratado como **permanente**, discutir o **termo consumativo** e o *dies a quo* da prescrição; nas demais, aferir a prescrição (12 anos) e eventuais marcos interruptivos.
5. **Concursos e consunção:** evasão × **lavagem** (Lei 9.613/98) × **sonegação fiscal** × **organização criminosa** — atacar **bis in idem** e sustentar consunção/absorção quando cabível.
6. **Prova:** conferir **quebra de sigilo bancário/fiscal** (reserva de jurisdição), **cadeia de custódia** de dados e a **cooperação jurídica internacional** (validade de provas vindas do exterior).
7. **Elemento subjetivo / erro:** em conduta de conteúdo regulatório complexo, discutir **erro de proibição** (art. 21 CP), sobretudo para pessoa física leiga.

## Teses defensivas × contra-teses (síntese)

- **Tese:** atipicidade superveniente pela elevação do patamar de declaração (art. 2º CP) → depósito abaixo do novo piso deixou de ser crime.
  **Contra-tese:** complemento seria norma temporária (art. 3º CP), sem retroação. *Rebater:* marco permanente, não temporário.
- **Tese:** ausência do **fim de evasão** afasta o **caput**.
  **Contra-tese:** finalidade presumida da própria operação clandestina. *Rebater:* dolo não se presume; ônus da acusação.
- **Tese:** **bis in idem** ao imputar a mesma operação como caput e como parágrafo único.
  **Contra-tese:** condutas autônomas. *Rebater:* identidade fática impõe uma só capitulação.
- **Tese:** **consunção** — evasão como meio/exaurimento de outro crime (ou vice-versa), evitando dupla punição.
  **Contra-tese (majoritária):** **autonomia** entre evasão e lavagem. *Rebater:* no caso concreto, ausência de desígnios autônomos.
- **Tese:** **inépcia** por não individualizar a figura, o valor e a operação.
  **Contra-tese:** narrativa suficiente. *Rebater:* denúncia genérica em crime econômico cerceia a defesa.
- **Tese:** **insignificância** para valor ínfimo.
  **Contra-tese:** bem jurídico é a política cambial (não a arrecadação), o que a afasta. *Usar com cautela — divergente.*
- **Tese:** **incompetência** se a imputação não descreve crime contra o SFN (declínio da JF).
- **Tese:** **nulidade da prova** (sigilo sem autorização judicial; cadeia de custódia; cooperação internacional viciada).

## Concursos, consunção e prescrição

- **Evasão × lavagem (Lei 9.613/98):** a jurisprudência tende à **autonomia** (não há consunção automática); a defesa sustenta consunção/absorção **apenas** quando a evasão for meio necessário e sem desígnio autônomo. **Precedente específico incerto → [NÃO VERIFICADO]; conferir via `jurisprudencia-stj-stf`.**
- **Evasão × sonegação fiscal:** **bens jurídicos distintos** (política cambial × arrecadação) → em regra, concurso, não absorção. Atacar apenas eventual **bis in idem** fático.
- **Continuidade (art. 71 CP):** operações homogêneas e sucessivas → crime continuado, não concurso material.
- **Prescrição:** pena máxima de 6 anos → **PPP em 12 anos** (art. 109, III, CP). Na figura de **manutenção de depósito** (permanente), o prazo só corre da **cessação** da permanência — ponto sensível: **verificar** o enquadramento como permanente e o marco de cessação. **[NÃO VERIFICADO] quanto a precedente específico — conferir.**

## Súmulas e precedentes (sob Citation Gate)

Não há súmula que resolva diretamente o art. 22. Prefira **tese + dispositivo** a número de acórdão. Pontos a **confirmar** antes de citar (via `jurisprudencia-stj-stf`):

- **Competência da Justiça Federal** para os crimes contra o SFN (CF, art. 109, VI; art. 26 da Lei 7.492) — base **legal**, segura.
- **Enquadramento do dólar-cabo** no art. 22 (caput e/ou parágrafo único) — orientação consolidada, mas **cite tese, não acórdão de memória → [NÃO VERIFICADO]**.
- **Autonomia entre evasão de divisas e lavagem** — **[NÃO VERIFICADO]**; conferir estado atual.
- **Natureza permanente da manutenção de depósito não declarado** e efeito na prescrição — **[NÃO VERIFICADO]**; controvertido.
- **Retroatividade do complemento** após o Marco Cambial (art. 2º × art. 3º CP) — matéria **em construção** na jurisprudência (2023 em diante); **não afirme desfecho pacífico → [NÃO VERIFICADO]**.
- **Insignificância** na evasão — **divergente**; não invoque como assentada.

Regra de ouro: **omitir vence inventar.** Nenhuma súmula, tese ou acórdão entra na peça sem passar pelo gate `jurisprudencia-stj-stf`.

## Checklist e anti-padrões

- [ ] **Figura do art. 22 identificada** (caput / § único-1ª / § único-2ª) e individualizada na denúncia?
- [ ] **Fim de evasão** exigido e aferido (quando imputado o caput)?
- [ ] **Data do fato** confrontada com o **Marco Cambial** (Lei 14.286/21) e a regulamentação do BCB **vigente à época e atual**?
- [ ] Patamar de declaração e número do ato do BCB **conferidos na fonte** (não de memória)?
- [ ] **Retroatividade benéfica** (art. 2º CP) avaliada, com rebate ao art. 3º CP?
- [ ] **Bis in idem** entre caput e parágrafo único descartado?
- [ ] **Concursos** (lavagem, sonegação, organização criminosa) analisados; consunção/continuidade sustentadas quando cabíveis?
- [ ] **Prescrição** (12 anos) e **natureza permanente** verificadas, com *dies a quo* correto?
- [ ] **Prova** examinada: sigilo com autorização judicial, cadeia de custódia, cooperação internacional válida?
- [ ] **Competência** da Justiça Federal confirmada (ou declínio suscitado)?
- [ ] Toda citação passou pelo gate `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Tratar as três figuras do art. 22 como uma só e não individualizar a imputação.
- Presumir o **fim de evasão** do caput sem prova do elemento subjetivo especial.
- Afirmar o **patamar de declaração** (ex.: US$ 100 mil / US$ 1 milhão) ou o **número do ato do BCB** de memória — é infralegal e muda; sempre conferir.
- Dar por **pacífica** a retroatividade do complemento após o Marco Cambial (matéria ainda controvertida).
- Aceitar dupla punição da **mesma operação** como caput e parágrafo único (bis in idem).
- Invocar **insignificância** como tese assentada — é divergente e o bem jurídico é a política cambial.
- Citar acórdão da "Lava Jato câmbio" por número, de memória, sem passar pelo gate.

## Nota de conformidade e lembretes finais

- **Polo:** este material é de **defesa**. As contra-teses servem para antecipar a acusação, não para orientar o polo acusatório.
- **Revisão humana obrigatória:** todo rascunho é **hipótese a confirmar**; a responsabilidade pela peça e pelas teses é sempre do **advogado** (EAOAB; CED). Não substitui o exame do caso concreto e dos autos.
- **Citation Gate:** nenhuma súmula/precedente/tese de memória — tudo pela skill `jurisprudencia-stj-stf`; na dúvida sobre número de acórdão, use **tese + dispositivo** e marque **[NÃO VERIFICADO]**.
- **Vigência viva:** o eixo desta defesa é temporal — a força das teses depende da **redação/regulamentação cambial vigente** à data do fato **e** hoje. Reconfira o Marco Cambial e os atos do BCB a cada uso.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
