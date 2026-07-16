---
name: linha-tempo-processual-autos
description: >-
  Use para reconstruir a cronologia do processo DIRETAMENTE dos autos — extrair e ordenar cada marco
  (fato, indiciamento, oferecimento e recebimento da denúncia, citação, resposta, AIJ, sentença,
  publicação, intimações, recursos, trânsito) numa linha do tempo auditável que alimenta os cálculos
  de prescrição, tempestividade e detração. NÃO calcula prescrição/prazo nem redige peça: estrutura
  os marcos. Gatilhos: linha do tempo… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, processo, cronologia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-linha-tempo-processual-autos"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["linha-tempo-processual-autos", "linha tempo", "processual autos"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Linha do Tempo Processual a partir dos Autos (CPP; CP arts. 111-117; Lei 11.419/06)

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

Esta skill orienta a **reconstrução retrospectiva e factual da cronologia do processo** — extrair de cada peça e movimentação dos autos as **datas-marco** juridicamente relevantes, ordená-las e produzir uma **linha do tempo auditável**. É a capacidade de base do escritório: **nenhum cálculo de prescrição, tempestividade ou detração é confiável sem uma timeline correta e rastreável**. Aqui não se calcula prazo nem se redige peça — extrai-se e organiza-se o insumo.

> **Lição central:** a data-marco só vale se estiver **ancorada** — cada entrada da timeline deve apontar a **peça, a folha/evento (fl./ev./ID) e a fonte da data**. Distinga sempre **data do ato**, **data de juntada/protocolo**, **data de publicação** e **data de ciência/intimação**: são datas diferentes que disparam contagens diferentes. Confundi-las é a origem mais comum de erro em prescrição e tempestividade.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 111 a 117 do CP (marcos interruptivos/suspensivos da prescrição) e das regras de contagem/publicação eletrônica da **Lei 11.419/2006** e do **CPC/2015** aplicado subsidiariamente ao processo penal. Regras de intimação eletrônica (DJEN/PJe/Eproc) e de dias úteis variam por tribunal e por época — **confirme a norma do tribunal e da data do ato**. Qualquer súmula, tema ou precedente sobre marco/termo passa por `jurisprudencia-stj-stf` e pelo gate `verificacao-citacoes`.

## O que esta skill faz (e o que NÃO faz)

- **FAZ:** lê os autos (idealmente após `ocr-autos-pdf`), identifica cada marco processual, extrai a data e a âncora (fl./ev./ID), classifica o tipo de data e monta a linha do tempo estruturada + relatório de lacunas.
- **NÃO FAZ:** não calcula prescrição (→ `calculadora-prescricao` / `extincao-punibilidade-prescricao`), não afere tempestividade (→ `calculadora-tempestividade`), não conta detração (→ `execucao-detracao-penal`), não redige peça. A timeline é o **insumo** dessas skills.
- **Distinção de vizinhas:** `roadmap-defensivo-por-fase` é o **calendário prospectivo/estratégico** (o que fazer adiante); esta é a **cronologia retrospectiva** (o que já ocorreu). `ocr-autos-pdf` **lê** o PDF; esta **estrutura** os marcos jurídicos a partir do texto lido.

## Base legal e normativa

- **CP, arts. 111 a 117** — termo inicial da prescrição (art. 111), causas **interruptivas** (art. 117: recebimento da denúncia/queixa; pronúncia; decisão confirmatória da pronúncia; publicação da sentença/acórdão condenatório recorrível; início/continuação do cumprimento; reincidência) e **suspensivas** (art. 116). São esses marcos que a timeline precisa capturar com precisão.
- **CPP, arts. 396 e 399** — **recebimento da denúncia** (marco interruptivo crítico) e o momento processual respectivo; distinção entre recebimento e eventual rejeição/absolvição sumária.
- **CPP, art. 798 e seguintes** — contagem de prazos no processo penal (termo inicial, exclusão do dia do começo, inclusão do dia do fim).
- **Lei 11.419/2006** — processo eletrônico: **publicação em Diário Eletrônico** (data de disponibilização × data de publicação × início do prazo), intimação eletrônica e certidões.
- **Súmula 710/STF** — no processo penal, contam-se os prazos da **data da intimação**, e não da juntada do mandado/carta (conferir vigência e alcance via `jurisprudencia-stj-stf`).

## Marcos processuais a capturar (checklist-mestre)

Percorra os autos em ordem e registre a data de cada marco existente. Nem todo processo terá todos.

**Fase pré-processual / investigação**
- [ ] **Data do fato** (consumação; nos permanentes/continuados, o termo do art. 111, III).
- [ ] Instauração do inquérito / registro da ocorrência.
- [ ] Prisão em flagrante / comunicação (relevante para detração — art. 42 CP).
- [ ] Indiciamento.
- [ ] Relatório final do IP.

**Deflagração da ação penal**
- [ ] **Oferecimento** da denúncia/queixa (data do protocolo do MP/querelante).
- [ ] **Recebimento** da denúncia/queixa (art. 396 CPP) — **interrompe a prescrição (art. 117, I)**. Marco crítico; distinga do mero despacho de recebimento do aditamento.
- [ ] Eventual **rejeição** e seu recurso, ou aditamento e novo recebimento.

**Instrução**
- [ ] **Citação** do réu (data de ciência efetiva; distinga citação por mandado, por edital, por hora certa).
- [ ] **Resposta à acusação** (art. 396-A) — data do protocolo.
- [ ] Decisão de recebimento/absolvição sumária (art. 397).
- [ ] Designação e realização da **AIJ (audiência de instrução e julgamento)**.
- [ ] Alegações finais (memoriais ou orais) — cada uma com sua data.

**Decisão e recursos**
- [ ] **Sentença** — data da prolação **e** data da **publicação** (a publicação da condenatória recorrível interrompe a prescrição — art. 117, IV).
- [ ] **Intimação** das partes da sentença (dispara o prazo recursal).
- [ ] Interposição de **recurso** (apelação, RESE etc.) e razões — datas de protocolo.
- [ ] Acórdão — prolação, publicação, intimação.
- [ ] Recursos excepcionais (REsp/RE), embargos, agravos — respectivas datas.
- [ ] **Trânsito em julgado** (para a acusação e para a defesa, quando distintos — impacta prescrição da pretensão executória).

**Marcos do júri (se aplicável)**
- [ ] **Pronúncia** e **decisão confirmatória da pronúncia** — ambas interrompem a prescrição (art. 117, II e III).
- [ ] Sessão de julgamento em plenário; sentença do juiz-presidente.

**Execução (se aplicável)**
- [ ] Guia de recolhimento; início de cumprimento (art. 117, V); datas de detração (períodos de prisão cautelar).

## Método de extração — passo a passo (roteiro forense)

1. **Prepare a fonte.** Se os autos são PDF, rode `ocr-autos-pdf` para texto pesquisável. Trabalhe sobre a **numeração oficial** (fl./ev./ID do PJe/Eproc/físico).
2. **Varra em ordem cronológica de juntada**, peça por peça. Para cada uma, pergunte: *é um marco da checklist-mestre?* Se sim, extraia a data.
3. **Classifique o tipo de data** de cada entrada — é o passo que evita 90% dos erros:
   - **Data do ato** (quando o ato foi praticado/decidido).
   - **Data de protocolo/juntada** (quando entrou nos autos).
   - **Data de disponibilização** no Diário Eletrônico (Lei 11.419/06).
   - **Data de publicação** (em regra, 1º dia útil após a disponibilização — confirmar regra do tribunal).
   - **Data de ciência/intimação** efetiva (pessoal, eletrônica, por edital).
   - **Início do prazo** (em regra, 1º dia útil após a publicação/intimação — CPP art. 798 e Súm. 710/STF).
4. **Ancore cada entrada:** registre peça + fl./ev./ID + citação textual curta da fonte da data (ex.: "certidão de publicação, ev. 42"). Sem âncora, a data é **hipótese não confirmada**, não marco.
5. **Marque divergências e lacunas:** datas ilegíveis, ausentes, contraditórias entre peças, ou dependentes de certidão não juntada. Vão ao **relatório de lacunas** (ver adiante), não à timeline como se fossem certas.
6. **Resolva conflitos por hierarquia de fonte:** certidão oficial > carimbo de protocolo > menção em despacho > menção em petição de parte. Havendo conflito irredutível, registre **ambas** as datas com a fonte de cada uma e sinalize para revisão humana.
7. **Ordene** cronologicamente e **destaque os marcos interruptivos da prescrição** (art. 117) — são o que a `calculadora-prescricao` vai consumir.
8. **Entregue** a timeline estruturada + o relatório de lacunas + a lista de datas que precisam de conferência.

## Formato de saída — a linha do tempo estruturada

Entregue uma tabela auditável (uma linha por marco), do mais antigo ao mais recente:

| # | Data | Tipo de data | Marco processual | Base legal / efeito | Âncora (peça · fl./ev./ID) | Confiança |
|---|------|--------------|------------------|---------------------|----------------------------|-----------|
| 1 | [dd/mm/aaaa] | ato | Fato (consumação) | art. 111, I, CP — termo inicial da PPP | [BO/denúncia · fl. __] | alta |
| 2 | [dd/mm/aaaa] | ato | Prisão em flagrante | detração (art. 42 CP) → `execucao-detracao-penal` | [APF · ev. __] | alta |
| 3 | [dd/mm/aaaa] | protocolo | Oferecimento da denúncia | — | [denúncia · ev. __] | alta |
| 4 | [dd/mm/aaaa] | ato | **Recebimento da denúncia** | **interrompe PPP — art. 117, I** | [decisão · ev. __] | alta |
| 5 | [dd/mm/aaaa] | ciência | Citação do réu | início do prazo da resposta | [certidão/mandado · ev. __] | média |
| 6 | [dd/mm/aaaa] | protocolo | Resposta à acusação (art. 396-A) | tempestividade → `calculadora-tempestividade` | [petição · ev. __] | alta |
| 7 | [dd/mm/aaaa] | ato + publicação | **Sentença condenatória recorrível** | **interrompe PPP — art. 117, IV** | [sentença · ev. __] | alta |
| … | | | | | | |

Convenções:
- **Tipo de data:** ato / protocolo / disponibilização / publicação / ciência / início-de-prazo.
- **Confiança:** *alta* (âncora oficial inequívoca) · *média* (âncora indireta) · *baixa/pendente* (lacuna — vai ao relatório).
- **Sempre em negrito** os marcos interruptivos/suspensivos da prescrição (art. 116/117 CP): são o núcleo do que a calculadora usará.

Além da tabela legível, **emita o artefato canônico de marcos** — `marcos.yaml` no contrato
compartilhado ([references/marcos-schema.md](references/marcos-schema.md): `data`, `tipo_data`,
`marco`, `efeito` (termo_inicial/interrompe/suspende), `dispositivo`, `ancora`, `confianca`).
Persista em `acervo/casos/{numero-processo}/marcos.yaml` (sigiloso). É a **fonte única** que
`calculadora-prescricao`, `calculadora-tempestividade`, `execucao-detracao-penal` e
`calculadora-dosimetria` consomem — a data é extraída e ancorada **uma vez** e nunca redigitada.
É também o conjunto que o `dossie-caso` cita em `dossie.yaml → linha_tempo`; mantenha-os consistentes.

## Relatório de lacunas e divergências (entrega obrigatória)

Além da timeline, entregue uma seção curta com:
- **Datas ausentes** de marcos esperados (ex.: falta a certidão de publicação da sentença).
- **Datas ilegíveis / conflitantes** (com as duas versões e suas fontes).
- **Marcos cuja data depende de peça não juntada** (ex.: AR de citação, certidão de intimação eletrônica).
- **Perguntas de conferência** para o(a) advogado(a) e para o cartório/PJe.

Regra: **é melhor sinalizar a lacuna do que preencher a timeline com data presumida.** Data presumida vira erro de prescrição.

## Armadilhas de datas (contra-teses e cuidados)

- **Recebimento × oferecimento da denúncia:** só o **recebimento** interrompe a prescrição (art. 117, I). Não confunda a data em que o MP ofereceu com a data em que o juiz recebeu.
- **Publicação × intimação × início do prazo:** no eletrônico, disponibilização, publicação e início do prazo são **três datas em dias distintos**. Errar a base zera o cálculo de tempestividade.
- **Juntada × intimação:** no processo penal, o prazo corre em regra da **intimação** (Súm. 710/STF), não da juntada do mandado — confira alcance atual via `jurisprudencia-stj-stf`.
- **Trânsito para acusação × para defesa:** podem ocorrer em datas diferentes; o trânsito para a acusação fixa o marco da prescrição da pretensão **executória** e limita a pena para fins de prescrição retroativa.
- **Pronúncia e confirmação (júri):** ambas interrompem a prescrição (art. 117, II e III) e frequentemente passam despercebidas na varredura.
- **Acórdão que confirma/reforma condenação:** verifique se, no caso, houve novo marco interruptivo — ponto controvertido; confirme a orientação atual em `jurisprudencia-stj-stf`.
- **Crimes permanentes/continuados:** o termo inicial (art. 111, III) não é a data do "primeiro fato" — cuidado ao fixar o marco zero.
- **Menores de 21 na data do fato:** impacta contagem de prazos prescricionais (art. 115 CP) — registre a **data de nascimento** e a **idade na data do fato** como dados de apoio da timeline.

## Súmulas e dispositivos de apoio (sob o Citation Gate)

Cite com segurança os **dispositivos de lei** (CP arts. 111-117; CPP arts. 396, 396-A, 397, 399, 798; Lei 11.419/06). Para **súmulas e precedentes**, confirme antes de usar:

- **Súmula 710/STF** — prazo conta-se da intimação, não da juntada (processo penal). [Conferir redação e alcance atual — `jurisprudencia-stj-stf`.]
- Orientação sobre **acórdão confirmatório da condenação como marco interruptivo** (art. 117, IV): há tese e há divergência. **[NÃO VERIFICADO]** — não cite número de HC/REsp/RE, informativo ou tema de memória; confirme em `jurisprudencia-stj-stf` e passe pelo gate `verificacao-citacoes`.
- Qualquer entendimento sobre **data de disponibilização × publicação** para início de prazo no tribunal específico: **[NÃO VERIFICADO]** — depende de regimento/ato normativo local; confira na fonte oficial.

Diretriz anti-alucinação: **na dúvida sobre um número de acórdão/informativo/tema, ensine a tese e o dispositivo — não arrisque o número.** Omitir vence inventar.

## Erros comuns / checklist final

- [ ] Cada entrada tem **âncora** (peça + fl./ev./ID + fonte da data)?
- [ ] O **tipo de data** foi classificado (ato/protocolo/publicação/intimação/início-de-prazo)?
- [ ] **Recebimento** da denúncia identificado como tal (não confundido com oferecimento)?
- [ ] Marcos **interruptivos/suspensivos** da prescrição (art. 116/117) destacados para a `calculadora-prescricao`?
- [ ] **Publicação × intimação × início do prazo** distinguidas para a `calculadora-tempestividade`?
- [ ] Períodos de **prisão cautelar** listados para a `execucao-detracao-penal`?
- [ ] **Relatório de lacunas** entregue (datas ausentes/ilegíveis/conflitantes/pendentes de certidão)?
- [ ] Datas **presumidas** marcadas como *baixa confiança* — nunca lançadas como certas?
- [ ] Regras de contagem e publicação **conferidas na vigência** (Lei 11.419/06 + ato do tribunal na data do ato)?
- [ ] Súmulas/precedentes passaram por `jurisprudencia-stj-stf` e `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Lançar a data do **oferecimento** como se interrompesse a prescrição (só o recebimento interrompe — art. 117, I).
- Usar a **data de disponibilização** no Diário como início do prazo (em regra é a publicação, no dia útil seguinte).
- Contar o prazo penal da **juntada** do mandado, ignorando a intimação (Súm. 710/STF).
- Preencher marco ausente com **data presumida** em vez de sinalizar a lacuna.
- Entregar timeline **sem âncoras** (fl./ev./ID) — inauditável e inútil para a calculadora.
- Fixar o marco zero de crime **permanente/continuado** na data do primeiro ato (ver art. 111, III).
- Confundir **trânsito para a acusação** com **trânsito para a defesa**.

## Encadeamento com outras skills

1. **`ocr-autos-pdf`** → torna os autos pesquisáveis (fonte desta skill).
2. **Esta skill** → produz a **linha do tempo auditável** + relatório de lacunas.
3. **`calculadora-prescricao`** e **`extincao-punibilidade-prescricao`** → consomem os marcos do art. 116/117.
4. **`calculadora-tempestividade`** → consome as datas de publicação/intimação/protocolo.
5. **`execucao-detracao-penal`** → consome os períodos de prisão cautelar.
6. **`roadmap-defensivo-por-fase`** → usa a timeline como base do calendário prospectivo.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** A timeline é **hipótese a confirmar**: cada data-marco deve ser conferida pelo(a) advogado(a) contra os autos originais antes de embasar prescrição, tempestividade, detração ou qualquer peça. Erro de data aqui propaga-se a todos os cálculos.
- **Citation Gate:** nenhuma súmula/tese/precedente de memória — tudo por `jurisprudencia-stj-stf` + `verificacao-citacoes`. Prefira o dispositivo de lei ao número de acórdão incerto.
- **Ética por polo:** a responsabilidade pela conferência é do profissional — advocacia (OAB/EAOAB + Provimento 205/2021), Ministério Público (CNMP), Defensoria (LC 80/94). Esta skill é analítica e transversal; o polo de atuação é definido pelo `company.md` e conferido pelo roteador.
- **Sigilo/LGPD:** dados do assistido tratados sob sigilo; nada de conteúdo sensível em repositório público.
