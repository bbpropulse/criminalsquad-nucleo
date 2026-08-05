---
name: jm-defesa-insubmissao
description: >-
  Use ao defender CONVOCADO/conscrito acusado de INSUBMISSÃO — deixar de apresentar-se à
  incorporação no prazo (art. 183 CPM). A lição de ouro: o insubmisso ainda NÃO é militar (é civil
  convocado), o que muda tudo — procedimento próprio (arts. 463-465 CPPM), menagem no quartel,
  extinção da punibilidade pela apresentação/incorporação voluntária, isenção por incapacidade
  física (art. 464, §1º, CPPM) e teses de atipicidade… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, defesa, cpm]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-insubmissao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-insubmissao", "defesa insubmissao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Insubmissão (arts. 183-186 CPM; arts. 463-465 CPPM)

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

Esta skill orienta a **defesa técnica do CONVOCADO acusado de insubmissão** — o crime de **deixar de apresentar-se, no prazo marcado, ao lugar designado para a incorporação** (art. 183 do Código Penal Militar). O ponto que reorganiza toda a defesa é jurídico e simples: **o insubmisso ainda NÃO é militar**. É um **civil convocado**, e essa condição muda o tipo penal aplicável, o procedimento, as causas de extinção e a própria lógica da prisão processual.

> **Lição central:** o erro mais comum — de estagiário a promotor — é tratar insubmissão como se fosse deserção. **NÃO é.** Deserção (art. 187 CPM) pressupõe **militar já incorporado** que se ausenta; insubmissão (art. 183 CPM) é do **conscrito/convocado que sequer chegou a ingressar** na força. Antes de qualquer tese, **confirme a condição do réu na data do fato**: se ele ainda não havia sido incorporado, o crime é insubmissão — com procedimento (arts. 463-465 CPPM), menagem e extinção próprios. Errar isso contamina toda a defesa.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 183 a 186 do CPM** (Dec.-Lei 1.001/69) e dos **arts. 463 a 465 do CPPM** (Dec.-Lei 1.002/69), bem como da **Lei do Serviço Militar (Lei 4.375/64)** e seu regulamento. Confira também súmulas, teses e eventual *overruling* do **STM, STF e STJ** via a skill `jurisprudencia-stj-stf` (e o gate `verificacao-citacoes`) antes de fundamentar a peça. Nenhum precedente entra na peça sem verificação.

## A distinção que organiza tudo — insubmissão × deserção

| Critério | Insubmissão (art. 183 CPM) | Deserção (art. 187 CPM) |
|---|---|---|
| **Sujeito ativo** | **Civil convocado** (conscrito) — ainda **não** incorporado | **Militar** já incorporado |
| **Conduta** | Não se apresentar à **incorporação** no prazo | Ausentar-se do serviço/unidade por + de 8 dias |
| **Competência** | Justiça Militar (da União) | Justiça Militar |
| **Procedimento** | **Especial**: arts. 463-465 CPPM (auto de insubmissão) | Arts. 451-462 CPPM (termo de deserção) |
| **Prisão** | **Menagem** no quartel a partir da captação/apresentação; captura só após incorporação | Depende do trânsito e da situação |
| **Extinção típica** | **Apresentação voluntária ou captura + incorporação** (art. 464, §2º, CPPM) e **isenção por incapacidade** (art. 464, §1º) | Regras próprias da deserção |

➡️ **Consequência prática:** como o insubmisso ainda é civil, **a punibilidade se resolve, em regra, com a incorporação** — voluntária (apresentação espontânea) ou forçada (captura). O objetivo do sistema não é punir, é **incorporar**. Isso abre a principal via defensiva: **buscar a incorporação/apresentação para extinguir a punibilidade** antes da persecução avançar.

> **Skill irmã:** para o militar já incorporado que se ausenta, use `jm-defesa-desercao`. **Se o roteador chegou aqui e o réu já era militar incorporado, este NÃO é o material certo** — a matéria é deserção. Confirme a condição na primeira leitura dos autos.

## Base legal

- **Art. 183 CPM** — tipo da **insubmissão**: "Deixar de apresentar-se o convocado à incorporação, dentro do prazo que lhe foi marcado, ou, apresentando-se, ausentar-se antes do ato oficial de incorporação". Pena: impedimento (conferir cominação vigente).
- **Art. 184 CPM** — **criação ou simulação de incapacidade** física para evitar a incorporação (tipo autônomo, distinto do 183).
- **Art. 185 CPM** — **substituição de convocado** por outrem na inspeção de saúde ou nos exames.
- **Art. 186 CPM** — **favorecimento a convocado** (facilitar a insubmissão de terceiro).
- **Arts. 463 a 465 CPPM** — **procedimento especial** da insubmissão: auto de insubmissão, menagem, isenção por incapacidade e efeitos da apresentação/incorporação.
- **Lei 4.375/64 (Lei do Serviço Militar)** e regulamento — regem convocação, seleção, incorporação, adiamento, dispensa e situações de arrimo/estudante.
- **CF, art. 5º, VIII** — escusa de consciência (objeção de consciência): ninguém será privado de direitos por motivo de crença/convicção, salvo se se recusar a cumprir **prestação alternativa** fixada em lei.
- **CF, art. 143** — obrigatoriedade do serviço militar e a **prestação alternativa** ao serviço militar obrigatório.

> A cominação de pena, prazos de apresentação e o rito administrativo mudam com regulamentos. **Sempre confira o texto vigente na fonte oficial** antes de afirmar pena, prazo ou consequência.

## Roteiro de análise da defesa (ordem prática)

Trabalhe **em cascata** — a primeira porta que se abrir encerra o caso a favor do assistido:

```
1) O réu já era MILITAR INCORPORADO na data do fato?
   ├── SIM → NÃO é insubmissão → é deserção → usar jm-defesa-desercao. PARE.
   └── NÃO (civil convocado) → segue insubmissão.

2) Há via de EXTINÇÃO DA PUNIBILIDADE disponível AGORA?
   ├── Apresentação voluntária / captura + incorporação (art. 464, §2º, CPPM)?
   ├── Isenção por INCAPACIDADE física reconhecida na inspeção (art. 464, §1º)?
   ├── Prescrição (conferir termos e marcos no CPM)?
   └── Se SIM → é a via mais rápida e segura. Buscar antes de discutir mérito.

3) O FATO é TÍPICO? (atipicidade)
   ├── O réu foi REGULARMENTE convocado e NOTIFICADO do prazo/local?
   ├── Houve JUSTA CAUSA / FORÇA MAIOR / caso fortuito que impediu a apresentação?
   ├── ERRO (de tipo/proibição) quanto ao dever ou ao prazo?
   └── ESTADO DE NECESSIDADE / coação?

4) Há NULIDADE no procedimento (arts. 463-465 CPPM)?
   ├── Auto de insubmissão irregular / ausência de notificação válida?
   ├── Cerceamento de defesa? Ampla defesa e contraditório observados?
   └── Competência e regularidade da instauração?

5) Cabíveis DISPENSA / ADIAMENTO administrativos (arrimo, estudante, saúde)?
   └── Regularização administrativa pode esvaziar a persecução.
```

## Teses defensivas típicas (com o contra-argumento da acusação)

### 1. Extinção pela incorporação — a via-mestra
- **Tese:** obtida a apresentação voluntária (ou a captura seguida de incorporação), **extingue-se a punibilidade** (art. 464, §2º, CPPM) — o sistema quer incorporar, não encarcerar. Requerer o reconhecimento da extinção e o trancamento da ação.
- **Contra-tese (acusação):** sustentar que a apresentação tardia não apaga a consumação já ocorrida — a defesa responde com a **finalidade do instituto** (incorporação) e o texto do CPPM.

### 2. Isenção por incapacidade física (art. 464, §1º, CPPM)
- **Tese:** se, na inspeção de saúde, o convocado é julgado **incapaz** para o serviço, **isenta-se da pena** — a insubmissão pressupõe aptidão ao serviço que a incapacidade afasta. Requerer inspeção/perícia médica.
- **Cuidado:** distinguir da **simulação/criação de incapacidade** (art. 184 CPM), que é crime. A tese defensiva é de **incapacidade real e preexistente**, não fabricada.

### 3. Atipicidade por falta de convocação/notificação regular
- **Tese:** o tipo exige convocado **regularmente notificado** do prazo e do local. Sem notificação válida (edital/comunicação pessoal conforme a lei), **não há dolo de não se apresentar** — falta elemento do tipo. Atacar a prova da ciência inequívoca do dever e do prazo.
- **Contra-tese:** presunção de ciência pela publicação/edital — a defesa exige **prova concreta** da notificação eficaz.

### 4. Justa causa, força maior e caso fortuito
- **Tese:** doença grave, acidente, prisão, catástrofe, impossibilidade material de deslocamento no prazo — **excludente de culpabilidade/ilicitude** ou afastamento do dolo. A ausência foi **involuntária**, não deliberada.
- **Prova:** atestados, boletins de ocorrência, comprovantes de internação, testemunhas.

### 5. Erro de tipo / erro de proibição
- **Tese:** erro sobre o **prazo/data/local** (erro de tipo, exclui dolo) ou desconhecimento inevitável do próprio dever de apresentação em situação peculiar (erro de proibição). Aferir a **inevitabilidade** do erro conforme o CPM.

### 6. Estado de necessidade / coação moral irresistível
- **Tese:** o convocado deixou de se apresentar por necessidade inadiável de proteger bem jurídico próprio ou de terceiro (ex.: cuidar de familiar em risco iminente, arrimo de família em situação-limite), nos termos das excludentes do CPM.

### 7. Regularização administrativa (dispensa/adiamento)
- **Tese:** cabimento de **adiamento de incorporação** (estudante, arrimo de família, saúde) ou **dispensa** pela via administrativa (Lei do Serviço Militar). Regularizada a situação, esvazia-se o interesse persecutório. Atuar **em paralelo** na esfera administrativa.

### 8. Objeção de consciência (art. 5º, VIII, e art. 143, §1º, CF)
- **Tese:** por imperativo de consciência/crença, requerer **prestação alternativa** ao serviço militar obrigatório. A recusa a apresentar-se combinada com a **disposição de cumprir a prestação alternativa** afasta a nota de crime — o convocado não se furta ao dever, exerce direito constitucional. **Verificar o procedimento administrativo próprio** e a jurisprudência atual sobre os limites do instituto.

### 9. Nulidades do procedimento (arts. 463-465 CPPM)
- **Tese:** vícios no **auto de insubmissão**, na notificação, na instauração ou no contraditório geram nulidade. Fiscalizar rito, ampla defesa e regularidade dos atos.

### 10. Prescrição
- **Tese:** conferir os **marcos e prazos prescricionais no CPM** para a insubmissão (natureza do crime, termo inicial, causas interruptivas). Sendo caso, arguir a **prescrição da pretensão punitiva**. Confirmar os prazos vigentes antes de arguir.

## Menagem — a "prisão" própria do insubmisso

> No procedimento de insubmissão, a regra é a **menagem no quartel** (permanência no âmbito da unidade, sem recolhimento a cárcere comum), e **não** a prisão em estabelecimento penal. Como o insubmisso ainda é civil, a lógica é **retê-lo para incorporar**, não puni-lo antecipadamente. A defesa deve **zelar por essa distinção**: eventual recolhimento indevido a prisão comum, sem base legal, é constrangimento ilegal atacável por **habeas corpus**. **Confirme o regime e as condições da menagem na redação vigente do CPPM** e nos regulamentos da força.

## Súmulas, precedentes e teses — sob o Citation Gate

> **REGRA INEGOCIÁVEL:** dispositivos de lei (arts. 183-186 CPM; 463-465 CPPM; art. 5º, VIII, e art. 143 CF) podem ser citados com certeza. **Qualquer precedente específico** — número de HC/RE/REsp, Súmula do STM, informativo, tema repetitivo — só entra na peça **após verificação** via `jurisprudencia-stj-stf` e gate `verificacao-citacoes`. **Não invente número de acórdão nem Súmula.** Na dúvida, ensine a **tese** e cite o **dispositivo**; omitir vence inventar.

- **Distinção insubmissão × deserção** e **efeito extintivo da incorporação** — teses consolidadas na doutrina e na jurisprudência do STM; **conferir o precedente específico** antes de citar número. [NÃO VERIFICADO]
- **Objeção de consciência e prestação alternativa** (art. 143, §1º, CF) — há jurisprudência do STF sobre alcance e limites; **conferir o julgado exato** (não citar de memória). [NÃO VERIFICADO]
- **Constrangimento ilegal por recolhimento indevido** do insubmisso a prisão comum — cabimento de HC; **conferir precedente** antes de invocar número. [NÃO VERIFICADO]
- Eventual **Súmula do STM/STF** sobre insubmissão só entra **se e quando verificada** — não presuma existência. [NÃO VERIFICADO]

## Estrutura da peça (defesa/resposta / requerimento de extinção)

Conforme o momento processual (resposta no procedimento do art. 465 CPPM, requerimento de extinção, ou HC contra constrangimento):

```
1. ENDEREÇAMENTO — Auditoria da Justiça Militar competente (ou instância superior / STM em HC).
2. QUALIFICAÇÃO — do convocado, com destaque à condição de CIVIL na data do fato.
3. SÍNTESE PROCESSUAL — auto de insubmissão, notificação, situação atual (apresentado? capturado? incorporado?).
4. PRELIMINARES / EXTINÇÃO — se cabível, requerer DESDE LOGO a extinção da punibilidade pela
   incorporação (art. 464, §2º, CPPM) ou a isenção por incapacidade (art. 464, §1º).
5. MÉRITO — atipicidade (falta de convocação/notificação regular; ausência de dolo), justa
   causa/força maior, erro, estado de necessidade, objeção de consciência.
6. NULIDADES — vícios do procedimento (arts. 463-465 CPPM), cerceamento de defesa.
7. SUBSIDIARIAMENTE — regularização administrativa (adiamento/dispensa), menagem regular.
8. PROVA — inspeção de saúde, documentos da situação de arrimo/estudante, testemunhas.
9. PEDIDOS — extinção/absolvição/trancamento; subsidiariamente, incorporação regular; menagem
   nos termos legais; produção de prova; verificação médica.
10. FECHO — local, data, advogado, OAB.
```

> Ao redigir, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra). Para a leitura dos autos militares em PDF, `ocr-autos-pdf`; para verificar cada citação, `verificacao-citacoes`.

## Erros comuns (anti-padrões a evitar)

- **Tratar como deserção.** O réu civil convocado é **insubmisso**, não desertor — procedimento, menagem e extinção são outros.
- **Ignorar a via da incorporação.** A apresentação/incorporação **extingue a punibilidade** (art. 464, §2º, CPPM) — deixar de buscá-la é perder a melhor porta de saída.
- **Não requerer a inspeção de saúde.** A **incapacidade real** isenta (art. 464, §1º) — deixar de pleiteá-la abandona uma tese de isenção legal.
- **Presumir notificação válida.** Sem prova concreta da ciência do prazo/local, o dolo não se sustenta — exija a prova.
- **Confundir incapacidade real com simulada.** A tese defensiva é de incapacidade **preexistente e verdadeira**; simular é o crime do art. 184 CPM.
- **Aceitar recolhimento a prisão comum** como se o insubmisso fosse militar preso — cabe HC por constrangimento ilegal.
- **Não atuar na esfera administrativa** (adiamento/dispensa/arrimo) em paralelo — regularizar administrativamente pode encerrar a persecução.
- **Citar Súmula/acórdão de memória.** Todo precedente passa pelo `verificacao-citacoes`. Inventar jurisprudência tem sanção real.

## Checklist final da defesa

- [ ] Confirmada a **condição de CIVIL convocado** na data do fato (não militar incorporado)?
- [ ] Verificado se há **incorporação/apresentação** que extingue a punibilidade (art. 464, §2º, CPPM)?
- [ ] Requerida **inspeção de saúde** e avaliada a **isenção por incapacidade** (art. 464, §1º)?
- [ ] Analisada a **regularidade da convocação e da notificação** do prazo/local (atipicidade por falta de dolo)?
- [ ] Levantadas **justa causa / força maior / erro / estado de necessidade**?
- [ ] Avaliada a **objeção de consciência** e a prestação alternativa (art. 5º, VIII; art. 143, §1º, CF)?
- [ ] Fiscalizadas **nulidades** do procedimento (arts. 463-465 CPPM)?
- [ ] Verificado o **regime de menagem** e afastado eventual recolhimento indevido (HC)?
- [ ] Atuação **administrativa paralela** (adiamento/dispensa/arrimo/estudante) considerada?
- [ ] Conferida a **prescrição** (marcos e prazos no CPM)?
- [ ] **Todas as citações** verificadas via `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] Peça submetida à **revisão humana** do advogado responsável antes de protocolar?

## Lembretes finais

- **Insubmisso = civil convocado.** Toda a defesa parte daí — não é deserção.
- **Incorporação extingue** (art. 464, §2º, CPPM) — busque essa porta primeiro.
- **Incapacidade real isenta** (art. 464, §1º); **incapacidade simulada é crime** (art. 184 CPM).
- **Menagem no quartel**, não prisão comum — vigie o regime; HC se violado.
- **Notificação regular é elemento do tipo** — sem ciência do prazo, sem dolo.
- **Objeção de consciência** existe (CF, art. 143, §1º) — avalie a prestação alternativa.
- **Confira vigência** dos arts. 183-186 CPM e 463-465 CPPM e toda jurisprudência via `jurisprudencia-stj-stf` antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação da defesa**, sujeito a **revisão humana obrigatória** do advogado responsável antes de qualquer protocolo (CED/EAOAB, art. 2º; Provimento OAB 205/2021). Skill do **polo de DEFESA** (o roteador deve conferir o polo da instituição no `company.md`). Nenhuma súmula, tese ou precedente foi afirmado com número de acórdão sem verificação — os pontos marcados **[NÃO VERIFICADO]** devem passar obrigatoriamente pelo gate `verificacao-citacoes` e pela skill `jurisprudencia-stj-stf` antes de uso. A responsabilidade técnica e ética pela peça é sempre do profissional que a subscreve.
