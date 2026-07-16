---
name: checklist-cabimento-recursal
description: >-
  Use para identificar QUAL recurso ou meio de impugnação cabe contra uma decisão criminal — árvore
  que parte da natureza do ato (sentença, interlocutória, pronúncia/impronúncia, decisão do júri,
  acórdão, decisão monocrática do relator) e roteia para o recurso correto (apelação, RESE, agravo
  em execução, embargos de declaração, embargos infringentes, REsp/RE, agravo em REsp/RE, agravo
  interno, HC/MS), com o pressuposto, o… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, recursos, processual-penal, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-checklist-cabimento-recursal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["checklist-cabimento-recursal", "checklist cabimento", "cabimento recursal"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Checklist de Cabimento Recursal (arts. 574 a 667 do CPP; Lei 8.038/90; arts. 994 e 1.029 do CPC subsidiário)

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

Esta skill responde a **uma única pergunta**: *dada esta decisão criminal, qual recurso (ou meio de impugnação) cabe?* Ela **não** decide se **vale a pena** recorrer (isso é `decisao-recorrer-vs-negociar`), **não** conta o prazo (isso é `calculadora-tempestividade`) e **não** redige a peça (cada recurso tem sua própria skill). É a **árvore de triagem** que antecede tudo o mais: da **natureza do ato decisório** ao **recurso correto**, com pressuposto, prazo nominal e órgão de destino.

> **Lição central:** o recurso não se escolhe pelo *nome* que o juiz deu à decisão, mas pela **natureza do ato** e pelo **conteúdo do gravame**. Antes de qualquer coisa, **classifique o ato**: é sentença (definitiva ou com força de definitiva), decisão interlocutória, pronúncia/impronúncia, decisão do júri, acórdão ou decisão monocrática de relator? A classificação define o recurso — o rótulo do juízo não vincula (princípio da fungibilidade, art. 579 CPP).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 581, 593, 609, 619 e 621 do CPP e da Lei 8.038/90 — há reformas pontuais e projetos em tramitação, e o **novo CPP** é discutido periodicamente. Confira **prazos** e **taxatividade do rol do art. 581** (que sofre releitura jurisprudencial), bem como súmulas, temas repetitivos e overruling via a skill `jurisprudencia-stj-stf` (ou o gate `verificacao-citacoes`) **antes** de firmar o cabimento. Na dúvida entre dois recursos, invoque a **fungibilidade** (art. 579) em vez de arriscar a inadmissão.

## Base legal (mapa dos recursos)

- **Art. 574, CPP** — regra geral: os recursos são **voluntários** (salvo o reexame necessário nas hipóteses do art. 574, I e II).
- **Art. 579, CPP** — **fungibilidade**: salvo má-fé, o recurso interposto por um por outro é conhecido, desde que **tempestivo** e sem **erro grosseiro**.
- **Art. 581, CPP** — **recurso em sentido estrito (RESE)**: rol taxativo de decisões interlocutórias e afins recorríveis por RESE (prazo de **5 dias** para interpor; art. 586).
- **Art. 593, CPP** — **apelação**: sentenças definitivas de condenação/absolvição, decisões definitivas ou com força de definitiva não recorríveis por RESE, e as **decisões do Tribunal do Júri** (art. 593, III, "a" a "d") (prazo de **5 dias** para interpor; art. 593).
- **Art. 600, CPP** — razões da apelação (**8 dias**; **3 dias** nas contravenções).
- **Art. 609, parágrafo único, CPP** — **embargos infringentes e de nulidade** (só em favor do réu, contra acórdão **não unânime** desfavorável em 2º grau; prazo de **10 dias**).
- **Art. 619, CPP** — **embargos de declaração** contra acórdão (omissão, ambiguidade, obscuridade, contradição; prazo de **2 dias**). No 1º grau, os declaratórios da sentença vêm do **art. 382 CPP** (embargos/erro material) e/ou art. 619 por aplicação analógica — confira a via no tribunal de atuação.
- **Art. 621, CPP** — **revisão criminal** (ação autônoma de impugnação **pro reo**, sem prazo, após o trânsito em julgado).
- **Art. 647 e ss., CPP** — **habeas corpus** (ação autônoma; coação ou ameaça à liberdade de locomoção).
- **CF, art. 105, III / art. 102, III** + **Lei 8.038/90** e **art. 1.029 CPC (subsidiário)** — **Recurso Especial (STJ)** e **Recurso Extraordinário (STF)** (prazo de **15 dias**, dias úteis por remissão ao CPC nos recursos excepcionais — **conferir a contagem aplicável**).
- **Agravos:** **agravo em execução** (art. 197 LEP, rito do RESE); **agravo em REsp/RE** (art. 1.042 CPC / Súm. 727 STF-histórica; contra a inadmissão na origem); **agravo regimental/interno** (contra decisão monocrática do relator — art. 1.021 CPC + regimentos).

## Princípios que governam a escolha (decorar)

1. **Taxatividade.** Só há recurso onde a lei prevê. O rol do RESE (art. 581) é, em regra, **taxativo** — o que não está lá, se for interlocutória sem previsão, tende a comportar impugnação por outra via (apelação da sentença futura, HC, MS, correição parcial).
2. **Unirrecorribilidade (singularidade).** Contra **cada** decisão cabe, em regra, **um único** recurso. Não se somam recursos contra o mesmo ato (ressalvado o cabimento simultâneo de REsp **e** RE contra o mesmo acórdão, por fundamentos distintos).
3. **Fungibilidade (art. 579).** Erro **escusável** na escolha do recurso não impede o conhecimento, se **tempestivo** e sem **má-fé/erro grosseiro**. É a rede de segurança quando há dúvida objetiva (ex.: apelação × RESE contra decisão de natureza controvertida).
4. **Variabilidade / complementaridade — cautela.** A interposição de um recurso, em regra, **consuma** o direito de recorrer (preclusão consumativa); não se "troca" o recurso já interposto. Por isso a triagem **correta na origem** é decisiva.
5. **Gravame (interesse recursal).** Só recorre quem **sucumbe**. Sem prejuízo concreto, falta interesse.

## A ÁRVORE — natureza do ato → recurso

> Ponto de partida: **o que é** a decisão? Percorra de cima para baixo; a primeira correspondência costuma resolver.

```
1) É SENTENÇA de mérito (condena ou absolve) no 1º grau?
   └── SIM → APELAÇÃO (art. 593, I, CPP) — prazo 5 dias (razões em 8; 3 nas contravenções)
            [exceção: júri → ver item 4]

2) É PRONÚNCIA (art. 413 CPP)?
   └── SIM → RESE (art. 581, IV, CPP) — prazo 5 dias

   É IMPRONÚNCIA (art. 414) ou ABSOLVIÇÃO SUMÁRIA (art. 415)?
   └── SIM → APELAÇÃO (art. 416 CPP, red. Lei 11.689/08) — prazo 5 dias
            [ATENÇÃO à mudança: antes da Lei 11.689/08 era RESE; hoje é APELAÇÃO]

   É DESCLASSIFICAÇÃO na 1ª fase (art. 419)?
   └── SIM → RESE (art. 581, II, CPP) — prazo 5 dias

3) É decisão INTERLOCUTÓRIA no 1º grau (não é sentença de mérito)?
   ├── Está no ROL do art. 581 (RESE)? (ex.: rejeição da denúncia — inc. I;
   │   competência/exceções — inc. II/III; prescrição/extinção da punibilidade — inc. VIII;
   │   concessão/denegação de HC — inc. X; relaxamento/revogação de prisão — conferir inciso;
   │   etc.)
   │   └── SIM → RESE (art. 581, [INCISO], CPP) — prazo 5 dias
   └── NÃO está no rol?
        ├── Causa gravame irreparável à LIBERDADE/direito líquido e certo?
        │   → HABEAS CORPUS (art. 647) ou MANDADO DE SEGURANÇA — ação autônoma
        ├── Erro de procedimento que inverte a ordem/tumultua o processo?
        │   → CORREIÇÃO PARCIAL (reclamação correicional — previsão em lei de organização
        │     judiciária/regimento; conferir na Corte de atuação)
        └── Do contrário → aguardar a sentença e impugnar na APELAÇÃO
              (a interlocutória sem recurso próprio devolve-se com a apelação)

4) É decisão do TRIBUNAL DO JÚRI (sentença do juiz-presidente após o veredicto)?
   └── SIM → APELAÇÃO (art. 593, III, CPP), com fundamento VINCULADO:
            "a" nulidade posterior à pronúncia;
            "b" sentença do juiz-presidente contrária à lei/decisão dos jurados;
            "c" erro/injustiça na aplicação da pena/medida de segurança;
            "d" DECISÃO DOS JURADOS MANIFESTAMENTE CONTRÁRIA À PROVA DOS AUTOS.
            [Na alínea "d", o provimento gera NOVO júri, uma única vez — art. 593, §3º.]
            [O fundamento deve ser DECLINADO na interposição — devolutividade restrita.]

5) É EXECUÇÃO PENAL (decisão do juízo da execução — progressão, livramento, falta grave etc.)?
   └── SIM → AGRAVO EM EXECUÇÃO (art. 197 LEP) — rito e prazo do RESE (5 dias)
            [Súmula 700/STF: prazo do agravo em execução é de 5 dias — CONFERIR vigência]

6) É ACÓRDÃO de tribunal (2º grau)?
   ├── Há OMISSÃO/CONTRADIÇÃO/OBSCURIDADE/AMBIGUIDADE?
   │   → EMBARGOS DE DECLARAÇÃO (art. 619 CPP) — 2 dias
   ├── Acórdão NÃO UNÂNIME e DESFAVORÁVEL ao réu (em apelação/RESE)?
   │   → EMBARGOS INFRINGENTES E/OU DE NULIDADE (art. 609, § único) — 10 dias
   │     [SÓ pro reo; só na parte não unânime que lhe é desfavorável]
   ├── Contrariou lei federal / divergência jurisprudencial?
   │   → RECURSO ESPECIAL ao STJ (CF, art. 105, III) — 15 dias — prequestionamento + Súm. 7/STJ
   ├── Questão CONSTITUCIONAL (com repercussão geral)?
   │   → RECURSO EXTRAORDINÁRIO ao STF (CF, art. 102, III) — 15 dias — prequestionamento + RG
   └── [REsp e RE podem coexistir contra o MESMO acórdão, por fundamentos distintos —
        exceção à unirrecorribilidade]

7) É DECISÃO MONOCRÁTICA do relator (nega seguimento, indefere liminar, decide o mérito sozinho)?
   └── SIM → AGRAVO INTERNO / REGIMENTAL (art. 1.021 CPC + regimento) — prazo regimental (em regra 15/5 dias, CONFERIR)
            [Se a monocrática INADMITE REsp/RE na origem → AGRAVO em REsp/RE (art. 1.042 CPC)]

8) Já houve TRÂNSITO EM JULGADO e a condenação é injusta/ilegal (pro reo)?
   └── SIM → REVISÃO CRIMINAL (art. 621 CPP) — ação autônoma, SEM prazo
            [ou HABEAS CORPUS, se o vício atinge a liberdade e dispensa dilação probatória]
```

## Tabela de bolso — ato × recurso × prazo × destino

| Ato decisório (natureza) | Recurso cabível | Base legal | Prazo (interposição) | Destino |
|---|---|---|---|---|
| Sentença condenatória/absolutória (comum) | Apelação | art. 593, I | 5 dias (razões 8/3) | Tribunal (TJ/TRF) |
| Rejeição da denúncia/queixa | RESE | art. 581, I | 5 dias | Tribunal |
| Recebimento da denúncia | *Sem recurso próprio* → HC/MS ou defesa no mérito | — | — | — |
| Pronúncia | RESE | art. 581, IV | 5 dias | Tribunal |
| Impronúncia / Absolvição sumária (júri) | Apelação | art. 416 | 5 dias | Tribunal |
| Desclassificação (1ª fase do júri) | RESE | art. 581, II | 5 dias | Tribunal |
| Decisão que extingue a punibilidade / prescrição | RESE | art. 581, VIII | 5 dias | Tribunal |
| Decisão do júri (mérito, após veredicto) | Apelação **vinculada** | art. 593, III, "a"–"d" | 5 dias | Tribunal |
| Execução penal (progressão, falta grave, livramento etc.) | Agravo em execução | art. 197 LEP | 5 dias (rito RESE) | Tribunal |
| Acórdão com omissão/contradição | Embargos de declaração | art. 619 | 2 dias | Próprio órgão |
| Acórdão não unânime desfavorável (pro reo) | Embargos infringentes/nulidade | art. 609, § único | 10 dias | Tribunal (composição ampliada) |
| Acórdão que contraria lei federal | Recurso Especial | CF 105, III | 15 dias | STJ |
| Acórdão com questão constitucional | Recurso Extraordinário | CF 102, III | 15 dias | STF |
| Inadmissão de REsp/RE na origem | Agravo em REsp/RE | art. 1.042 CPC | 15 dias | STJ/STF |
| Decisão monocrática do relator | Agravo interno/regimental | art. 1.021 CPC + regimento | conferir (regimental) | Órgão colegiado |
| Coação ilegal à liberdade (qualquer fase) | Habeas corpus | art. 647 | sem prazo | Juízo/Tribunal competente |
| Trânsito em julgado + injustiça (pro reo) | Revisão criminal | art. 621 | sem prazo | Tribunal |

> **`[calculadora a implementar com testes]`** — a **contagem** exata do prazo (termo inicial pela intimação, dias corridos × úteis, feriados, prazo em dobro da Defensoria/MP) **não** se faz aqui: delegue à skill `calculadora-tempestividade`. Esta skill entrega apenas o **prazo nominal** de cada recurso como referência; a tempestividade concreta é responsabilidade da calculadora.

## Pontos sensíveis (onde mais se erra)

### Impronúncia e absolvição sumária → APELAÇÃO, não RESE
A **Lei 11.689/2008** reescreveu o júri. Antes, impronúncia e absolvição sumária desafiavam **RESE**; **hoje é APELAÇÃO** (art. 416 CPP). Citar RESE contra impronúncia é **erro grave de vigência** — e pode custar a admissão. **Pronúncia**, ao contrário, **continua** sendo RESE (art. 581, IV).

### Decisão do júri → apelação de fundamento VINCULADO
Ao contrário da apelação comum (ampla devolução), a apelação contra o júri (art. 593, III) tem **devolutividade restrita** à alínea invocada — **declare a alínea** na interposição. Na alínea **"d"** (decisão manifestamente contrária à prova), o provimento anula o julgamento e determina **novo júri**, **uma única vez** por esse fundamento (art. 593, §3º) — o tribunal **não** substitui a decisão soberana dos jurados, apenas manda a novo julgamento.

### Rol do art. 581 é taxativo — mas releia a jurisprudência
Fora das hipóteses do art. 581, a interlocutória em regra **não** tem recurso imediato; impugna-se com a **apelação da sentença** ou por **HC/MS/correição parcial** quando houver gravame atual. **Confirme** eventuais leituras ampliativas/restritivas na jurisprudência via `jurisprudencia-stj-stf`.

### Fungibilidade não conserta erro grosseiro
A fungibilidade (art. 579) socorre a **dúvida objetiva** (dois recursos plausíveis, prazos iguais/compatíveis, boa-fé). **Não** socorre erro grosseiro (ex.: apelar de pronúncia, que é claramente RESE) nem recurso **intempestivo**. Regra prática: se optar pela fungibilidade, **respeite o menor prazo** dos recursos em disputa.

### HC substitutivo de recurso — cautela
O **habeas corpus** é ação autônoma e cabe contra coação ilegal à liberdade, mas o STF/STJ **restringiram** o uso do HC como **substitutivo** do recurso próprio (quando havia recurso cabível e não utilizado). Isso **não impede** a concessão de ofício se houver ilegalidade flagrante. **Confirme** o estado atual dessa orientação (é oscilante) via `jurisprudencia-stj-stf` antes de escolher HC no lugar do recurso ordinário.

### Embargos infringentes só PRO REO e só na parte não unânime
Art. 609, § único: cabem **exclusivamente em favor do réu**, contra acórdão **não unânime** desfavorável, e **apenas** quanto à matéria em que houve divergência. Não há embargos infringentes em favor da acusação nem sobre o capítulo unânime.

## Teses e contra-teses de cabimento (admissibilidade)

| Situação | Tese (para conhecer o recurso) | Contra-tese (para não conhecer) |
|---|---|---|
| Recurso "errado" mas tempestivo e de boa-fé | **Fungibilidade** (art. 579): dúvida objetiva, sem erro grosseiro → conhecer | Erro **grosseiro** / recurso claramente incabível → não conhecer |
| Interlocutória fora do art. 581 com gravame atual | **HC/MS/correição** cabíveis; ou devolução na apelação | Ausência de recurso próprio ≠ atalho via HC substitutivo |
| Acórdão não unânime desfavorável ao réu | **Embargos infringentes** (art. 609) antes do REsp/RE (esgotamento) | Capítulo **unânime** → embargos incabíveis; segue REsp/RE |
| REsp sem prequestionamento | Opor **embargos de declaração** para prequestionar (Súm. 356/STF; Súm. 211/STJ) | Falta de prequestionamento → REsp não conhecido |
| REsp que reexamina prova | Distinguir **valoração jurídica** de **reexame** fático | **Súmula 7/STJ**: reexame de prova → não conhecer |
| HC como substitutivo de recurso próprio | Ilegalidade **flagrante** → conhecer ou conceder de ofício | Orientação restritiva ao HC substitutivo → não conhecer |

## Súmulas e enunciados úteis (conferir vigência via `jurisprudencia-stj-stf`)

> **Citation Gate — inegociável.** Os enunciados abaixo são *notórios* e servem de bússola, mas **qualquer** número de súmula, tema repetitivo ou precedente específico **deve ser conferido** na fonte antes de constar da peça. Prefira ensinar a **regra de cabimento** e o **dispositivo** a arriscar um número.

- **Súmula 7/STJ** — não cabe REsp para simples reexame de prova. [conferir]
- **Súmula 83/STJ** — não se conhece REsp pela divergência quando a orientação do Tribunal se firmou no mesmo sentido do acórdão recorrido. [conferir]
- **Súmula 211/STJ** — inadmissível REsp sobre questão não prequestionada (mesmo com embargos declaratórios não supridos). [conferir]
- **Súmula 356/STF** — o ponto omisso da decisão, sobre o qual não foram opostos embargos, não pode ser objeto de recurso extraordinário (prequestionamento). [conferir]
- **Súmula 279/STF** — não cabe RE para simples reexame de prova. [conferir]
- **Súmula 700/STF** — é de cinco dias o prazo para interposição de agravo em execução penal. [conferir — número/redação]
- **Súmula 705/STF** — a renúncia do réu ao direito de apelação, manifestada sem a assistência do defensor, não impede o conhecimento da apelação por este interposta. [conferir]
- **Súmula 713/STF** — o efeito devolutivo da apelação contra decisões do júri é adstrito aos fundamentos da sua interposição. [conferir]
- **[NÃO VERIFICADO]** qualquer HC/REsp/RE, informativo ou tema de repetitivo citado por número: submeter a `jurisprudencia-stj-stf` antes de usar.

## Roteiro de triagem (passo a passo)

1. **Identifique o ato** — copie o dispositivo da decisão e classifique sua **natureza** (sentença de mérito? interlocutória? pronúncia/impronúncia? júri? acórdão? monocrática? execução?). Ignore o *nomen iuris* dado pelo juízo.
2. **Localize o gravame** — quem sucumbiu e em quê? Sem interesse recursal, não há recurso.
3. **Rode a árvore** — do topo para baixo; a primeira correspondência resolve na maioria dos casos.
4. **Cheque taxatividade** — se for interlocutória, confirme se está no **rol do art. 581**; se não, mapeie HC/MS/correição/devolução na apelação.
5. **Cheque unirrecorribilidade** — um recurso por ato (salvo REsp+RE contra o mesmo acórdão).
6. **Havendo dúvida objetiva** — registre a **fungibilidade** (art. 579) como fundamento e respeite o **menor prazo**.
7. **Só então** delegue **tempestividade** a `calculadora-tempestividade` e a **redação** à skill do recurso escolhido (apelação, RESE, embargos, REsp/RE, agravo, HC, revisão criminal).
8. **Passe pelo Citation Gate** — toda súmula/precedente citado no juízo de admissibilidade é conferido em `jurisprudencia-stj-stf`/`verificacao-citacoes`.

## Erros comuns / checklist

- [ ] A **natureza do ato** foi classificada (e não o rótulo dado pelo juízo)?
- [ ] Impronúncia/absolvição sumária → **apelação** (art. 416), e não RESE (erro de vigência clássico)?
- [ ] Pronúncia → **RESE** (art. 581, IV), e não apelação?
- [ ] Decisão do júri → **apelação vinculada** (art. 593, III), com a **alínea declarada** na interposição?
- [ ] Interlocutória **fora** do art. 581 → mapeou HC/MS/correição/devolução na apelação (em vez de inventar recurso)?
- [ ] **Execução penal** → **agravo em execução** (art. 197 LEP), e não apelação/RESE avulso?
- [ ] Acórdão não unânime desfavorável → **embargos infringentes** (só pro reo, só parte não unânime) **antes** de REsp/RE?
- [ ] Falta prequestionamento → **embargos de declaração** antes do REsp/RE (Súm. 211/STJ; 356/STF)?
- [ ] Verificou **unirrecorribilidade** (um recurso por ato; exceção REsp+RE)?
- [ ] Em dúvida objetiva, invocou **fungibilidade** e respeitou o **menor prazo**?
- [ ] **Não** usou HC como substitutivo sem checar a orientação atual (restritiva)?
- [ ] Delegou **tempestividade** a `calculadora-tempestividade` (esta skill não conta prazo)?
- [ ] Súmulas/precedentes conferidos via `jurisprudencia-stj-stf` antes de citar?

**Anti-padrões (evitar):**
- Escolher o recurso pelo **nome** que o juiz deu à decisão, ignorando sua natureza.
- Apelar de **pronúncia** (é RESE) ou recorrer em sentido estrito de **impronúncia** (é apelação).
- Tratar a apelação do **júri** como devolução ampla (é **vinculada** à alínea invocada).
- Inventar recurso para interlocutória fora do art. 581 em vez de usar **HC/MS/correição/devolução**.
- Ir a **REsp/RE** sem prequestionar (declaratórios) ou pedindo **reexame de prova** (Súm. 7/279).
- Interpor **dois** recursos contra o mesmo ato por insegurança (quebra a unirrecorribilidade; e o primeiro **consuma** o direito).
- Confiar na **fungibilidade** para consertar **erro grosseiro** ou recurso **intempestivo**.
- Contar prazo **aqui** — a tempestividade é da `calculadora-tempestividade`.

## Lembretes finais

- **Natureza do ato manda; o rótulo não.** Classifique primeiro; roteie depois.
- **Árvore antes de nome de recurso.** Percorra o fluxo do topo; a primeira correspondência costuma resolver.
- **Pronúncia = RESE; impronúncia/absolvição sumária = apelação (art. 416).** Memorize o par.
- **Júri = apelação vinculada (art. 593, III), alínea declarada.** Devolutividade restrita.
- **Execução = agravo em execução (art. 197 LEP).** Não é apelação.
- **Fungibilidade** só para **dúvida objetiva**; respeite o **menor prazo**; não salva erro grosseiro nem intempestivo.
- **Uma decisão, um recurso** (exceção: REsp + RE).
- **Cabimento aqui; tempestividade em `calculadora-tempestividade`; redação na skill do recurso.**

## Conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à **triagem de cabimento**; a decisão de interpor e a responsabilidade pela peça são sempre do **advogado** (EAOAB; CED, art. 2º; Provimento OAB 205/2021). A escolha do recurso deve ser confirmada à vista dos autos concretos.
- **Polo majoritário: DEFESA.** A árvore prioriza o interesse do réu (fungibilidade *in bonam partem*, embargos infringentes pro reo, HC/revisão criminal). Se a atuação for do **polo acusatório** (MP/assistente de acusação), o **roteador deve conferir o polo** em `company.md`: a acusação **não** dispõe de embargos infringentes, revisão criminal ou HC em favor próprio, e submete-se à ética do **CNMP** (ou LC 80/94 na Defensoria) — ajuste o cabimento ao polo antes de aplicar.
- **Citation Gate.** Nenhuma súmula, tema ou precedente entra na peça sem conferência em `jurisprudencia-stj-stf` / `verificacao-citacoes`. Na dúvida, **omitir vence inventar**.
- **Vigência.** Confirme a redação atual dos arts. 574–667 do CPP, da Lei 8.038/90 e das súmulas antes de firmar o cabimento — reformas e overruling alteram o mapa.

**Padrão de redação:** escolhido o recurso, ao redigir a peça aplique a skill do recurso específico e a `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
