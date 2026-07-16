---
name: triagem-competencia-foro-criminal
description: >-
  Use para DETERMINAR o juízo/foro competente em matéria criminal e detectar incompetência arguível
  — árvore que cruza natureza do crime, lugar da consumação, prerrogativa de função,
  conexão/continência e competências especializadas (Federal, Militar, Eleitoral, JECrim, Violência
  Doméstica, Júri) para fundamentar exceção de incompetência ou conflito. Análise de roteamento, não
  a peça. Gatilhos: qual juízo é competente… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, competencia, processual-penal, triagem]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-triagem-competencia-foro-criminal"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["triagem-competencia-foro-criminal", "triagem competencia", "foro criminal"]
  negative_triggers: ["compartilhamento de dados, promessa de resultado ou decisão jurídica sem autorização"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Triagem de Competência e Foro em Matéria Criminal (arts. 69-91 CPP; art. 109 CF)

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

Esta skill é uma **capacidade analítica transversal (não-peça)**: ela **determina qual é o juízo/foro competente** para uma imputação criminal e **detecta a incompetência arguível**, produzindo o **fundamento** que depois alimentará a peça (`excecoes-processuais`) ou o incidente (conflito de competência). Aqui não se redige a exceção — aqui se **roteia** o caso pelos vetores de competência e se aponta o vício.

> **Lição central:** competência criminal não é uma pergunta só — é uma **cascata de filtros**. Antes de qualquer coisa, resolva a **JUSTIÇA competente** (Federal? Militar? Eleitoral? Comum estadual?), depois o **FORO territorial** (comarca/seção), depois o **JUÍZO especializado** (Júri, JECrim, Violência Doméstica, Vara de Tóxicos), e só então module por **prerrogativa de função** e **conexão/continência**. Pular etapa é o erro clássico: quem começa pelo lugar do crime esquecendo que o feito é da Justiça Federal argui a exceção no juízo errado.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 69 a 91 do CPP e do art. 109 da CF, além das súmulas invocadas — a jurisprudência de prerrogativa de foro sofreu **restrição relevante** (tese da AP 937/STF, limitando o foro a crimes cometidos no cargo e em razão dele) e há oscilação sobre competência da Justiça Federal em crimes cibernéticos e ambientais. Toda súmula, tema ou acórdão citado abaixo passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de fundamentar. Na dúvida sobre um número, **omitir vence inventar**.

---

## Base legal

- **Art. 109 da CF** — hipóteses de competência da **Justiça Federal** (crimes contra bens/serviços/interesses da União, autarquias e empresas públicas federais; crimes previstos em tratado; etc.).
- **Art. 124 da CF + CPM/CPPM** — **Justiça Militar** (crimes militares definidos em lei).
- **Arts. 118-121 da CF + Código Eleitoral** — **Justiça Eleitoral** (crimes eleitorais e conexos).
- **CPP, arts. 69 a 91** — critérios de fixação e modificação da competência:
  - **Art. 69** — os sete critérios (lugar da infração; domicílio do réu; natureza; distribuição; conexão/continência; prevenção; prerrogativa de função).
  - **Art. 70** — **competência territorial pelo lugar da consumação** (teoria do resultado); tentativa: lugar do último ato de execução.
  - **Art. 71-73** — domicílio/residência do réu (subsidiário); ação penal privada exclusiva (opção do querelante).
  - **Arts. 76-82** — **conexão e continência** (reunião de processos, foro prevalente, separação obrigatória/facultativa).
  - **Arts. 83-84** — **prevenção** e **prerrogativa de função**.
- **CF, art. 5º, XXXVIII, "d"** — competência do **Tribunal do Júri** para crimes dolosos contra a vida.
- **Lei 9.099/95** — **JECrim** (infrações de menor potencial ofensivo; pena máxima ≤ 2 anos).
- **Lei 11.340/06 (Maria da Penha)** — competência dos **Juizados de Violência Doméstica e Familiar contra a Mulher** (e afastamento da Lei 9.099 — art. 41).

---

## O método: quatro filtros em cascata

Rode **sempre nesta ordem**. Cada filtro pressupõe o anterior resolvido.

```
FILTRO 1 — QUAL JUSTIÇA?      (Federal | Militar | Eleitoral | Comum estadual)
FILTRO 2 — QUAL FORO?         (comarca/seção — regra do lugar do resultado, art. 70)
FILTRO 3 — QUAL JUÍZO?        (Júri | JECrim | Violência Doméstica | Tóxicos | vara comum)
FILTRO 4 — MODULADORES        (prerrogativa de função; conexão/continência; prevenção)
```

### Filtro 1 — Qual Justiça? (a especializada exclui a comum)

Regra de ouro: **a competência especializada (ratione materiae) prevalece** e é, em regra, **absoluta** (não preclui, pode ser reconhecida de ofício, a qualquer tempo — art. 109 CPP a contrario e art. 564, I).

```
1) Crime MILITAR (definido no CPM)?
   └── SIM → Justiça Militar (da União ou Estadual). Ver handoff:
             jm-classificacao-competencia-crime-militar.
   └── NÃO ↓
2) Crime ELEITORAL (ou comum CONEXO a eleitoral)?
   └── SIM → Justiça Eleitoral (atrai o conexo comum — ponto sensível,
             ver contra-tese abaixo). Ver handoff:
             competencia-justica-eleitoral-conexao.
   └── NÃO ↓
3) Ofende bem, serviço ou interesse da UNIÃO / autarquia / empresa
   pública federal? Crime previsto em TRATADO com repercussão
   transnacional? (art. 109, IV, V, V-A, VI CF)
   └── SIM → Justiça FEDERAL.
   └── NÃO ↓
4) Nenhuma das anteriores → Justiça COMUM ESTADUAL (regra residual).
```

Marcadores práticos do Filtro 1:
- **Federal x Estadual** depende do **bem jurídico lesado**, não do órgão que investigou. Contrabando/descaminho, moeda falsa, crimes contra o sistema financeiro nacional, tráfico **internacional**, crimes com transnacionalidade prevista em tratado → tendem à Federal.
- **Súmulas de fronteira Federal/Estadual** (conferir vigência via `jurisprudencia-stj-stf`): **Súmula 122/STJ** (conexão de crime federal com estadual → competência da **Justiça Federal**) [conferir]; **Súmula 104/STJ**, **Súmula 107/STJ**, **Súmula 140/STJ** (crime praticado contra indígena/comunidade) — [NÃO VERIFICADO: conferir número e teor exatos]. Prefira ancorar na **regra do art. 109 CF** e só depois citar a súmula conferida.
- **Estelionato / crimes contra a União** exigem lesão a bem federal *concreta*; benefício previdenciário (INSS) fraudado → Federal.

### Filtro 2 — Qual foro territorial? (art. 70 — teoria do resultado)

```
Regra: competente o foro do LUGAR onde o crime se CONSUMOU (art. 70).
  ├── Tentativa → lugar do ÚLTIMO ATO de execução (art. 70, caput, 2ª parte).
  ├── Lugar incerto/limítrofe → PREVENÇÃO (art. 70, §3º; art. 83).
  ├── Lugar desconhecido → domicílio/residência do réu (art. 72).
  └── Ação penal privada exclusiva → querelante PODE optar pelo domicílio
      do réu ainda que conhecido o lugar do crime (art. 73).
```

Pontos que mais geram exceção de incompetência territorial:
- **Estelionato (art. 171 CP):** ponto vivo. Tradicionalmente, consuma-se no lugar da **obtenção da vantagem**; a orientação mais recente firmou o **domicílio da vítima** como foro nos estelionatos praticados **mediante depósito/transferência** — **[NÃO VERIFICADO: conferir a tese/precedente atual no `jurisprudencia-stj-stf`]**. Ensine a **tese** (proteção da vítima; local do prejuízo) sem arriscar o número.
- **Crimes à distância / plurilocais / cibernéticos:** local da consumação x local da conduta. Fundamente pela **teoria do resultado** (regra do art. 70) e sinalize a controvérsia.
- **Incompetência territorial é RELATIVA:** precisa ser **arguida no momento próprio** (resposta à acusação / exceção — art. 108 CPP), sob pena de **prorrogação** da competência. Não confundir com a *ratione materiae* (absoluta).

### Filtro 3 — Qual juízo especializado dentro da Justiça já fixada?

```
1) Crime DOLOSO contra a vida (consumado/tentado — homicídio,
   infanticídio, aborto, induzimento a suicídio)?
   └── SIM → TRIBUNAL DO JÚRI (CF, art. 5º, XXXVIII). Competência
             constitucional; atrai conexos (Súmula 45/... [conferir]).
   └── NÃO ↓
2) Contexto de VIOLÊNCIA DOMÉSTICA E FAMILIAR contra a mulher
   (Lei 11.340/06)?
   └── SIM → Juizado/Vara de Violência Doméstica; afasta a Lei 9.099
             (art. 41 — Súmula 536/STJ e SV [conferir] afastam
             transação/suspensão nesse âmbito). [conferir vigência]
   └── NÃO ↓
3) Infração de MENOR potencial ofensivo (pena máx. ≤ 2 anos,
   isolada ou cumulada; contravenções)?
   └── SIM → JECrim (Lei 9.099). Atenção: conexão com crime comum
             pode deslocar para a vara comum (art. 60, p.ú.). [conferir]
   └── NÃO ↓
4) Crime de DROGAS, ORG. CRIMINOSA, etc. em comarca com vara
   especializada?
   └── SIM → vara especializada (competência de organização
             judiciária — em regra RELATIVA, salvo previsão específica).
   └── NÃO → VARA CRIMINAL COMUM.
```

### Filtro 4 — Moduladores: prerrogativa de função e conexão/continência

**Prerrogativa de função (foro por prerrogativa — art. 84 CPP; CF):**
- Autoridades com foro (STF, STJ, TRF/TJ conforme o cargo) são julgadas no tribunal, **não** no 1º grau.
- **Restrição da AP 937/STF (2018):** o foro só alcança crimes **cometidos no exercício do cargo e em razão dele**, e após a instrução deslocada [conferir teor e marco temporal via `jurisprudencia-stj-stf`]. Cessado o cargo, em regra cessa o foro.
- **Súmula 704/STF** (conferir): não viola garantias a atração, por continência/conexão, do corréu sem foro ao tribunal competente para o detentor de foro — [conferir número/teor].
- **Súmula 451/STF** e **Súmula 702/STF** [NÃO VERIFICADO — conferir] costumam aparecer em prerrogativa; ancorar na CF e na AP 937.

**Conexão e continência (arts. 76-82 CPP) — reunião e prevalência de foro:**
```
Há conexão (art. 76) ou continência (art. 77)?
  └── SIM → REUNIÃO dos processos no foro PREVALENTE (art. 78):
        - JÚRI atrai o conexo comum (art. 78, I).
        - Jurisdições de categorias diversas → prevalece a de MAIOR
          graduação (art. 78, III).
        - Concurso entre comum e especial → prevalece a ESPECIAL
          (a especial não se prorroga; ver separação).
        - No mesmo grau → lugar da infração mais grave; se iguais,
          maior número de infrações; senão, PREVENÇÃO (art. 78, II).
  └── SEPARAÇÃO OBRIGATÓRIA (art. 79): concurso entre jurisdição
      comum e MILITAR; comum e da infância; ou superveniência de
      doença mental; corréu foragido; etc.
```
- **Súmula 122/STJ** (conferir): conexão de crime federal e estadual → **Justiça Federal** julga ambos.
- **Súmula 38/STJ** e **Súmula 151/STJ** (conferir) — competência em conexão/continência e importação — [conferir teor exato antes de citar].
- A competência da Justiça **especializada** (Militar, Eleitoral) **não se prorroga** por conexão para absorver o que lhe é estranho: separam-se os processos (art. 79, I) — salvo a atração eleitoral do conexo comum, que é a exceção controvertida (ver contra-tese).

---

## Teses e contra-teses (para a exceção ou o conflito)

| Vetor | Tese (defesa / suscitante) | Contra-tese (acusação / juízo) |
|---|---|---|
| **Justiça Federal x Estadual** | Ausência de lesão *concreta* a bem/serviço da União → competência **estadual** residual; Federal é excepcional (art. 109 CF, taxativo) | Há interesse federal direto/indireto suficiente; tratado com transnacionalidade atrai a Federal |
| **Territorial (art. 70)** | Crime se consumou em outra comarca (teoria do resultado) → incompetência **relativa**, arguível na resposta | Prorrogação: não arguida no momento próprio → competência prorrogada (art. 108) |
| **Estelionato — foro** | Foro do **domicílio da vítima**/local do prejuízo [conferir tese atual] | Foro do local da obtenção da vantagem/consumação clássica |
| **Prerrogativa de função** | Foro **não** alcança o fato (não cometido no cargo/em razão dele — AP 937) ou cessou com o cargo → baixa ao 1º grau | Fato ligado ao cargo; prorrogação da instrução já iniciada no tribunal |
| **Conexão especial x comum** | **Separação obrigatória** (art. 79) — a especial não absorve o comum | Reunião no foro prevalente (art. 78); economia processual |
| **Júri** | Desclassificação afasta o Júri; ou conexão não atrai por separação legal | Júri atrai o conexo (art. 78, I) enquanto subsistir o doloso contra a vida |

---

## Súmulas e precedentes — SOB O CITATION GATE

> **Regra inegociável:** os itens abaixo são **âncoras de estudo**, não citações prontas. Cada número/teor deve ser **conferido em fonte oficial** via `jurisprudencia-stj-stf` / `verificacao-citacoes` **antes** de ir para a peça. Onde há incerteza, está marcado **[NAO VERIFICADO]**. Prefira sempre citar o **dispositivo de lei** (art. 70, art. 78, art. 109 CF) e reservar a súmula para quando confirmada.

- **Súmula 122/STJ** — conexão de crime federal com estadual → competência da **Justiça Federal**. [conferir teor]
- **Súmula 704/STF** — atração por conexão/continência do corréu sem foro ao tribunal do detentor de prerrogativa. **[NAO VERIFICADO — conferir número/teor]**
- **AP 937 QO/STF** — restrição do foro por prerrogativa a crimes no cargo e em razão dele. [conferir marco e alcance]
- **Súmula 38/STJ; Súmula 151/STJ** — competência em conexão/importação. **[NAO VERIFICADO — conferir]**
- **Súmula 536/STJ** — não se aplicam institutos despenalizadores da Lei 9.099 aos crimes de violência doméstica (Lei 11.340). [conferir]
- **Súmula 45/... (Júri atrai conexo)** — **[NAO VERIFICADO — localizar e conferir]**.
- Tese sobre **foro do estelionato mediante depósito/transferência** (domicílio da vítima) — **[NAO VERIFICADO — conferir precedente/tese atual do STJ]**.

> **Diretriz anti-alucinação:** ensine a **tese e o artigo**; só acrescente número de HC/REsp/CC/Súmula depois de confirmado. Um fundamento sólido no dispositivo de lei vale mais que um acórdão inventado (há sanções reais por jurisprudência fabricada por IA).

---

## Produto desta triagem (o que entregar ao próximo passo)

Ao final, entregue um **relatório de roteamento** com:
1. **Justiça competente** + fundamento (art. 109 CF / CPM / Código Eleitoral / residual).
2. **Foro territorial** + fundamento (art. 70 e regra aplicável) e o **lugar da consumação** identificado.
3. **Juízo especializado** (Júri / JECrim / Violência Doméstica / vara comum) + base.
4. **Moduladores**: prerrogativa de função? conexão/continência? prevenção? → efeito no foro.
5. **Vício detectado**: há incompetência? **Absoluta** (ratione materiae — arguível a qualquer tempo, de ofício, nulidade do art. 564, I) ou **relativa** (territorial — arguir na resposta sob pena de prorrogação)?
6. **Encaminhamento**: → `excecoes-processuais` (redige a exceção de incompetência) **ou** conflito de competência (positivo/negativo, art. 113-117 CPP) **ou** nada a arguir (competência correta).

---

## Erros comuns / checklist de triagem

- [ ] Resolveu a **Justiça** (Filtro 1) **antes** do foro territorial? (erro clássico: discutir comarca quando o feito é da Federal/Militar/Eleitoral).
- [ ] Identificou o **lugar da consumação** (art. 70 — teoria do resultado), e não o da conduta?
- [ ] Distinguiu incompetência **absoluta** (ratione materiae/hierarquia — não preclui) de **relativa** (territorial — preclui se não arguida)?
- [ ] Verificou **prerrogativa de função** e a **restrição da AP 937** (fato no cargo e em razão dele)?
- [ ] Checou **conexão/continência** e o **foro prevalente** (art. 78) — inclusive **separação obrigatória** (art. 79)?
- [ ] Conferiu se a competência especializada (Militar/Eleitoral) **absorve** ou **separa** o conexo comum?
- [ ] Testou **Júri** (doloso contra a vida) e **Violência Doméstica** (Lei 11.340 afasta a 9.099)?
- [ ] Todas as **súmulas/precedentes** conferidas via `jurisprudencia-stj-stf` — nada citado de memória?
- [ ] Definiu o **encaminhamento** (exceção, conflito ou nada) e o **momento processual** de arguir?

**Anti-padrões (evitar):**
- Fixar o foro pelo lugar da conduta ignorando o **resultado** (art. 70).
- Tratar incompetência territorial como se fosse absoluta (ou vice-versa) — erra o regime de preclusão.
- Aplicar foro por prerrogativa a fato **estranho ao cargo** (ignorando a AP 937).
- Reunir por conexão processos que a lei manda **separar** (art. 79).
- Presumir Justiça Federal só porque a PF investigou — o critério é o **bem jurídico** (art. 109 CF).
- Citar Súmula 122, 704, 38/151 etc. **sem conferir número e teor** no gate.

---

## Handoffs (aprofundamento por ramo)

- **`competencia-justica-eleitoral-conexao`** — aprofunda o Filtro 1 quando há crime eleitoral e a atração (controvertida) do conexo comum.
- **`jm-classificacao-competencia-crime-militar`** — classifica o crime militar e a competência da Justiça Militar (União/Estadual).
- **`excecoes-processuais`** — **redige** a exceção de incompetência depois que esta skill **identifica** o vício.
- **`mapa-nulidades-processuais`** — lista a incompetência entre as nulidades; esta skill fornece o **método de fixação** que aquele mapa não traz.
- **`jurisprudencia-stj-stf` / `verificacao-citacoes`** — gate obrigatório de toda súmula/precedente antes de fundamentar.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este roteamento é **hipótese de trabalho**, não decisão: a fixação definitiva da competência e a redação da peça exigem a conferência do caso concreto (autos, pronúncia/denúncia, provas) pelo profissional responsável.
- **Citation Gate:** nenhuma súmula, tema ou acórdão vai à peça sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Itens marcados **[NAO VERIFICADO]** exigem confirmação prévia. Na dúvida, ancore no **dispositivo de lei**.
- **Ética por polo:** a responsabilidade pela arguição é sempre do profissional — **advocacia** (EAOAB + Provimento 205/2021 CFOAB), **Ministério Público** (regras CNMP) ou **Defensoria** (LC 80/94). Esta skill é de uso **transversal** e serve tanto à **defesa** (exceção de incompetência, foco majoritário) quanto ao **suscitante de conflito**; o **roteador deve conferir o polo** da instituição (`company.md`) antes de orientar a atuação. Foro por prerrogativa e competência absoluta podem, também, ser reconhecidos de ofício.
