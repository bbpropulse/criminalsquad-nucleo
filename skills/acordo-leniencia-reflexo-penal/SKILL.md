---
name: acordo-leniencia-reflexo-penal
description: >-
  Use ao avaliar, negociar ou coordenar um ACORDO DE LENIÊNCIA e seus REFLEXOS PENAIS — distinguir a
  leniência antitruste do CADE (Lei 12.529/2011, arts. 86-87, com efeito penal expresso) da
  leniência anticorrupção da CGU/AGU (Lei 12.846/2013, arts. 16-17, sem imunidade penal automática),
  e articulá-la com colaboração premiada (Lei 12.850) e ANPP (CPP 28-A) para blindar os executivos.
  Gatilhos: leniência, CADE, cartel, ordem… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, ordem-economica, leniencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acordo-leniencia-reflexo-penal", "acordo leniencia", "reflexo penal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-acordo-leniencia-reflexo-penal"]
---

# Acordo de leniência e seus reflexos penais

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

Esta skill trata da **interface entre a leniência (administrativa) e a esfera penal**. O erro estratégico mais caro nessa matéria nasce de uma confusão de regimes: tratar "leniência" como um instituto único, quando existem **dois acordos distintos**, com **efeitos penais radicalmente diferentes**. A leniência é celebrada por **pessoa jurídica** com uma autoridade administrativa — o **CADE** (concorrência) ou a **CGU/AGU** (anticorrupção) —, mas quem responde criminalmente são, em regra, **pessoas físicas** (os executivos). Coordenar essas duas dimensões — a empresa que fecha o acordo administrativo e os indivíduos que precisam de proteção penal — é o ofício central desta skill.

> **Lição central:** nem toda leniência gera imunidade penal, e essa diferença define toda a estratégia. A leniência do **CADE** (art. 87 da Lei 12.529/2011) tem **efeito penal expresso** — cumprido o acordo, **extingue-se a punibilidade / fica impedido o oferecimento da ação penal** para os crimes contra a ordem econômica (Lei 8.137), o cartel e correlatos ali listados. Já a leniência **anticorrupção** da Lei 12.846/2013 (CGU/AGU) é **administrativa** e **NÃO garante imunidade penal automática** aos executivos. Antes de aconselhar a empresa a assinar, pergunte: *este acordo, por si só, protege as pessoas físicas na esfera criminal?* Se a resposta for "não" (caso da 12.846), a proteção penal tem de ser **construída à parte**, no Ministério Público, via **colaboração premiada** ou **ANPP** — sequenciadas com a leniência administrativa. Assinar a leniência anticorrupção achando que "resolve o penal" é entregar a confissão da empresa e expor os executivos sem contrapartida penal.

> **Cautela de vigência (obrigatória antes de citar):** o **alcance penal do art. 87 da Lei 12.529/2011** e a **articulação institucional entre leniência e colaboração premiada** (quem participa do acordo, se o MP precisa aderir, qual a extensão da imunidade às pessoas físicas e a terceiros) são objeto de **precedentes e de acordos/orientações institucionais específicos** — e mudam. Confira a **redação vigente** dos arts. 16-17 da Lei 12.846/2013 e dos arts. 86-87 da Lei 12.529/2011, além do estado atual dos entendimentos, via `jurisprudencia-stj-stf` **e fonte oficial atual** (CADE, CGU/AGU, MPF). **Não afirme de memória** que a leniência "estende" imunidade a este ou àquele executivo. Na dúvida, **omitir vence inventar**.

## Base legal

- **Lei 12.529/2011 (Defesa da Concorrência), arts. 86-87** — **acordo de leniência antitruste**, celebrado no **CADE** (Superintendência-Geral). O **art. 86** fixa os requisitos do programa de leniência concorrencial; o **art. 87** é a âncora penal desta skill: cumprido o acordo, opera a **extinção da punibilidade / o impedimento ao oferecimento da ação penal** quanto aos **crimes contra a ordem econômica (Lei 8.137/1990)**, ao **cartel** e correlatos ali indicados. É a **única** leniência com efeito penal **expresso em lei**.
- **Lei 12.846/2013 (Anticorrupção), arts. 16-17** — **acordo de leniência anticorrupção**, celebrado no âmbito da **CGU** (com participação da **AGU**). Requisitos nucleares: ser a empresa a **primeira a se manifestar** sobre o interesse em cooperar, **cessação** do envolvimento na infração, **cooperação plena** com a apuração e **identificação** dos demais envolvidos e obtenção célere de informações/documentos. Efeitos são **administrativos** (redução de multa, isenção de certas sanções) — **não** há imunidade penal automática às pessoas físicas.
- **Lei 8.137/1990** — define os **crimes contra a ordem econômica e tributária** que são o objeto do efeito penal do art. 87 da Lei 12.529 (cartel etc.).
- **Lei 12.850/2013 (colaboração premiada)** — o instrumento **penal** próprio para negociar, no **Ministério Público**, os benefícios das **pessoas físicas** (perdão judicial, redução de pena, não oferecimento de denúncia). É a ponte quando a leniência administrativa **não** basta para blindar o indivíduo.
- **CPP, art. 28-A (ANPP)** — via alternativa/complementar de resolução penal para os executivos, quando cabível (crime sem violência/grave ameaça, pena mínima < 4 anos, confissão), a ser articulada com a leniência.

## Passo 0 — Triagem de legitimidade, polo e conflito de interesses

Antes de comparar regimes, resolva três perguntas que definem **por quem** e **em favor de quem** se negocia:

1. **De quem é a defesa?** A leniência é da **pessoa jurídica**; o risco penal é das **pessoas físicas**. Deixe explícito, desde o início, se o mandato é da **empresa**, de **um executivo específico**, ou de vários. Não há defesa "genérica do grupo" — os interesses divergem no ponto exato em que a empresa precisa **entregar** os indivíduos para obter a leniência.
2. **Conflito de interesses (art. 17 EAOAB).** Um mesmo advogado defendendo a empresa **e** os executivos "entregues" é temerário: a empresa quer o acordo (que expõe o indivíduo); o indivíduo quer proteção penal (que a empresa pode não priorizar). **Cada polo com defesa própria e independente** — sobretudo quando a cooperação envolve delatar dirigentes.
3. **Quem é o titular do acordo em cada esfera.** A leniência administrativa é ato da **autoridade** (CADE/CGU-AGU); a via penal dos indivíduos é ato do **Ministério Público**. A defesa **provoca, negocia condições e recomenda** — não substitui o titular. Confira o **polo da instituição** (defesa × MP) em `_criminalsquad/_memory/company.md` antes de calibrar a estratégia.

## Anatomia dos dois regimes — o que gera efeito penal e o que não gera

O primeiro passo é **classificar corretamente** com qual leniência se está lidando, porque isso determina se há (ou não) blindagem penal embutida.

| | **Leniência CADE** (Lei 12.529, arts. 86-87) | **Leniência CGU/AGU** (Lei 12.846, arts. 16-17) |
|---|---|---|
| **Autoridade** | CADE (Superintendência-Geral) | CGU + AGU |
| **Objeto** | Infrações à ordem econômica / **cartel** | Atos lesivos à Administração (**corrupção**, fraude a licitação etc.) |
| **Quem assina** | Pessoa jurídica **e**/ou pessoas físicas envolvidas no cartel | **Pessoa jurídica** |
| **Efeito PENAL** | **Expresso (art. 87):** cumprido o acordo, **extingue/impede** a ação penal pelos crimes da Lei 8.137 e cartel | **Nenhum automático** — é sanção administrativa; o penal corre à parte |
| **Blindagem dos executivos** | Alcança quem **figura no acordo** e cumpre (conferir extensão) | Depende de **colaboração/ANPP** negociados **no MP** |

**Requisitos comuns a ambas** (o "preço de entrada"): (1) **ser o primeiro** — a leniência premia a **corrida** (o segundo, em regra, não tem o mesmo prêmio, quando muito uma leniência "plus" residual); (2) **cessação** imediata da conduta; (3) **cooperação efetiva e contínua** com a autoridade; (4) **identificação** dos demais coautores e **corroboração** documental (a "moeda" — sem prova nova e útil, não há acordo).

> **A armadilha estrutural:** a leniência do **art. 87 (CADE)** já embute o efeito penal — mas **só para os crimes ali listados** (ordem econômica/cartel) e **só para quem figura no acordo**. Ela **não** cobre, por si, corrupção, lavagem, organização criminosa ou crimes que extrapolem o rol. Já a **12.846 (CGU)** não cobre penal nenhum. Em ambos os casos, **fatos que escapem do escopo penal do acordo administrativo exigem instrumento penal próprio** (colaboração ou ANPP no MP). Mapear **o escopo penal exato** antes de assinar é o coração da defesa.

## Roteiro tático de negociação (coordenação de esferas)

A leniência raramente é uma negociação só; é uma **negociação em duas (ou três) mesas simultâneas** — CADE **e/ou** CGU/AGU **e** Ministério Público — que precisam ser **sincronizadas**. Sequenciar mal é o que expõe o cliente.

### 1. Mapeie o BATNA e o ZOPA de cada esfera

- **BATNA (melhor alternativa a não acordar):** o que acontece com a empresa e com os executivos **sem** a leniência? Se a autoridade **já tem** a prova (a conduta será autuada de todo modo), o BATNA é fraco e o acordo vale muito — mas o **prêmio já caiu**, porque a "primazia" (ser o primeiro) e a efetividade se esvaziam quando a informação já é conhecida. Se a autoridade **não tem** a prova, o BATNA é forte: pode-se litigar ou negociar de posição elevada.
- **ZOPA (zona de acordo possível):** para a **empresa**, a moeda é redução de multa e sobrevivência regulatória; para os **executivos**, a moeda é a **liberdade** — e aqui a ZOPA administrativa (CGU) pode ser **irrelevante** se não houver contrapartida penal no MP. **Não confunda o interesse da empresa com o interesse dos indivíduos**: eles podem divergir (ver conflito de interesses adiante).

### 2. Decida a ordem das mesas (sequenciamento)

- **Regra geral:** **antes de expor a empresa** numa leniência que **não** carrega efeito penal (12.846), **assegure a via penal dos executivos** — provoque/negocie **colaboração premiada** ou **ANPP** com o **MP competente** de forma **coordenada** com a autoridade administrativa. O ideal é um **acordo global** (ou acordos "espelhados") em que a empresa fecha com a CGU/CADE e os indivíduos fecham com o MP, na **mesma janela**, para que ninguém confesse "no vazio".
- **Leniência CADE (art. 87):** aqui o penal **já vem no pacote** para os crimes listados — mas verifique **quem** o acordo alcança e se **outros crimes** (lavagem, corrupção, organização) ficaram **de fora**; esses exigem o MP à parte.
- **Cuidado com a assimetria temporal:** a autoridade administrativa pode querer a confissão **já**; o MP pode demorar. **Não deixe a confissão administrativa correr na frente** da proteção penal sem uma cláusula ou compromisso que preserve os indivíduos.

### 3. Negocie a "moeda" com parcimônia — entregue prova, não exposição gratuita

- Dimensione **o que o cliente tem a oferecer** (anexos, documentos, e-mails, planilhas — a **corroboração**) contra **o benefício buscado**. Entregue o **necessário e suficiente** para caracterizar a efetividade; **não** despeje tudo de uma vez sem contrapartida firmada.
- **Timing é prêmio:** ser o **primeiro** vale mais; quanto mais cedo, maior o desconto e a chance de não-denúncia. Esperar "para ver" costuma custar a primazia e o benefício.

### 4. Blinde os executivos e controle o risco de vazamento entre esferas

- **Risco de vazamento:** informação prestada à CGU/CADE pode **migrar** para o juízo criminal e ser usada contra os indivíduos. Negocie **cláusulas de confidencialidade, uso restrito e não-compartilhamento** e verifique o regime de **sigilo** de cada acordo — e o que a autoridade pode ou não repassar ao MP/Judiciário.
- **Proteção individual:** cada executivo com risco penal relevante deve ter a proteção **formalizada no MP** (colaboração/ANPP), não presumida da leniência da empresa.

## Armadilhas e cláusulas a evitar

- **Presumir imunidade penal na leniência anticorrupção (12.846).** É o erro-mãe: a empresa assina, coopera, entrega os executivos — e estes **continuam expostos** criminalmente porque ninguém negociou o penal no MP. **Nunca** trate a leniência da CGU como se fosse o art. 87 do CADE.
- **Extrapolar o escopo penal do art. 87.** O efeito penal do CADE alcança os **crimes listados** (Lei 8.137/cartel) e **quem figura no acordo** — não é imunidade universal. Corrupção, lavagem, organização criminosa que **excedam** o rol **não** estão cobertas.
- **Confessar na esfera administrativa antes de assegurar o penal.** Confissão da empresa vira prova; sem a via penal dos indivíduos fechada em paralelo, expõe-se o executivo "no vazio".
- **Cláusula que obrigue cooperação sem limite de uso** — cooperação irrestrita sem salvaguarda de **não-compartilhamento**/uso restrito abre a porta ao vazamento entre esferas.
- **Um só advogado para a empresa e para os executivos** quando os interesses divergem (a empresa quer o acordo; o executivo pode ser o "entregue"). **Conflito de interesses** (art. 17 EAOAB) — cada polo com defesa própria e independente.
- **Perder a primazia** por negociar devagar — outro coautor pode chegar primeiro à autoridade e esvaziar o prêmio do cliente.
- **Cláusulas leoninas/desproporcionais** — multa ou compromissos que a empresa não tem capacidade real de cumprir; descumprimento pode **rescindir** o acordo e reabrir tudo, com a confissão já entregue.

## Árvore de decisão (rápida)

```
1) O acordo administrativo é do CADE (concorrência/cartel) ou da CGU/AGU (anticorrupção)?
   ├── CADE (Lei 12.529, art. 87) → há efeito PENAL EXPRESSO, mas limitado.
   │      → Mapear: (a) o rol de crimes cobertos (Lei 8.137/cartel) e (b) QUEM figura no acordo.
   │      → Crimes/pessoas FORA do rol? → precisam do MP à parte (colaboração/ANPP).
   └── CGU/AGU (Lei 12.846, arts. 16-17) → efeito só ADMINISTRATIVO.
          → NENHUMA imunidade penal automática → a proteção dos executivos é 100% no MP.
2) Há pessoas físicas com risco penal relevante?
   ├── SIM → assegurar a via penal (colaboração 12.850 ou ANPP 28-A) ANTES/junto da
   │         confissão administrativa → buscar acordo GLOBAL ou espelhado, mesma janela.
   └── NÃO → seguir só na esfera administrativa (raro em investigação penal já instaurada).
3) O cliente é o PRIMEIRO a se manifestar (primazia)?
   ├── SIM → prêmio máximo; agir rápido para não perder a primazia.
   └── NÃO → prêmio reduzido (leniência "plus"/residual, quando existir) → reavaliar o BATNA.
4) Em toda via: checar escopo, sequenciamento, vazamento entre esferas, capacidade de
   cumprir e conflito de interesses (Passo 0). Precedentes só depois do gate.
```

> **Preferência estratégica:** quando houver risco penal individual, a leniência **CGU** só é segura **acompanhada** de instrumento penal no MP; a leniência **CADE** já resolve os crimes do rol, mas **nunca** presuma que resolve o que está **fora** dele. O acordo **global** (empresa + indivíduos, administrativa + penal) é o desenho que melhor blinda todos — persiga-o sempre que houver exposição penal relevante.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** dispositivos de lei (arts. 86-87 da Lei 12.529; arts. 16-17 da Lei 12.846; Lei 8.137; Lei 12.850; CPP 28-A) podem ser citados. **Nenhum precedente, tese ou entendimento** sobre o **alcance do art. 87**, sobre a **extensão da imunidade às pessoas físicas** ou sobre a **articulação leniência–colaboração** vai à peça de memória. Marque **[NÃO VERIFICADO]** e confira **tese + fonte** via `jurisprudencia-stj-stf` **e em fonte oficial atual** (CADE, CGU/AGU, MPF) antes de afirmar.

- **Alcance penal do art. 87 da Lei 12.529** — extensão do efeito extintivo/impeditivo da ação penal, crimes cobertos e quem é alcançado → **[NÃO VERIFICADO]** — conferir precedente e regulamentação atuais.
- **Articulação institucional leniência × colaboração premiada** — participação do MP no acordo de leniência, acordos globais e a **eficácia penal** da leniência administrativa (12.846) → matéria de **acordos e orientações institucionais específicos** e de precedentes; **[NÃO VERIFICADO]** — confirmar estado atual em fonte oficial.
- **Compartilhamento de prova entre esferas** (administrativa → penal) e limites de uso do material da leniência → casuístico; **[NÃO VERIFICADO]** — conferir antes de sustentar.

Prefira, na peça, **ancorar no dispositivo e ensinar a tese** a arriscar um número de julgado. Todo precedente entra **só depois do gate**.

## Checklist e anti-padrões

- [ ] **Regime identificado:** é leniência **CADE** (art. 87 — efeito penal expresso) ou **CGU/AGU** (12.846 — sem imunidade penal automática)?
- [ ] **Escopo penal mapeado:** quais crimes estão cobertos pelo acordo administrativo e quais **ficam de fora** (lavagem, corrupção, organização) exigindo o MP à parte?
- [ ] **Quem é alcançado:** o acordo protege **quais pessoas físicas**? Cada executivo com risco tem proteção **formalizada no MP**?
- [ ] **Sequenciamento definido:** a via penal dos indivíduos está assegurada **antes/junto** da confissão administrativa (acordo global ou espelhado)?
- [ ] **Primazia e timing:** o cliente é (ou pode ser) o **primeiro**? Há risco de outro coautor chegar antes?
- [ ] **Moeda dimensionada:** a corroboração entregue é **suficiente** sem exposição gratuita?
- [ ] **Vazamento controlado:** há cláusula de **confidencialidade / uso restrito / não-compartilhamento** entre esferas?
- [ ] **Conflito de interesses** afastado (empresa × executivos com defesas próprias)?
- [ ] **Capacidade de cumprir** o acordo (multa/compromissos) verificada — para não rescindir com a confissão já entregue?
- [ ] **Vigência e precedentes** conferidos via `jurisprudencia-stj-stf` e fonte oficial atual — nada de memória?

**Anti-padrões (evitar):**
- Tratar "leniência" como instituto único e presumir imunidade penal na **12.846**.
- Assinar a leniência administrativa **antes** de fechar a proteção penal dos executivos.
- Alargar o efeito do **art. 87** para além dos crimes e das pessoas cobertas.
- Aceitar cooperação **sem** salvaguarda de uso restrito (porta do vazamento).
- Um só advogado para empresa e indivíduos com interesses colidentes.
- Negociar devagar e **perder a primazia**.
- Citar precedente sobre alcance do art. 87 ou sobre acordo global **sem** passar pelo gate.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB) nem a decisão do cliente, que é sempre **do cliente**, informado.
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **Ministério Público / assistente de acusação**, a lógica se **inverte** — a leniência/colaboração é ato **do MP**, que a **oferece e fiscaliza**; as teses acima viram pontos a **avaliar, condicionar e controlar** (efetividade, corroboração, cumprimento), e não a obter. Em coautoria, **conflito de interesses** (art. 17 EAOAB) entre empresa e executivos exige defesas independentes.
- **Citation Gate:** nenhuma súmula, tese ou precedente — nem o alcance do art. 87 — vai à peça sem passar por `jurisprudencia-stj-stf` e por fonte oficial atual (há sanção real por jurisprudência inventada por IA).
- **Sigilo/LGPD:** dados da empresa, dos executivos e o conteúdo do acordo não vão a repositório público; o **sigilo do acordo** é, ele próprio, matéria de negociação e de proteção contra vazamento entre esferas.

## Lembretes finais

- **Dois regimes, dois efeitos:** CADE (art. 87) tem imunidade penal **expressa** e limitada ao rol; CGU/12.846 **não** tem imunidade penal automática.
- **A empresa assina; os executivos respondem** — a proteção penal individual se constrói **no MP** (colaboração/ANPP), não se presume da leniência.
- **Sincronize as mesas:** não deixe a confissão administrativa correr na frente da proteção penal.
- **Primazia + timing** valem prêmio; corroboração é a moeda — entregue o suficiente, não o gratuito.
- **Controle o vazamento** entre esferas por cláusula de uso restrito e sigilo.
- **Vigência primeiro:** o alcance do art. 87 e a articulação leniência–colaboração mudam — confira em fonte oficial atual e via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir o acordo ou a peça de coordenação, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
