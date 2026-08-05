---
name: imunidades-honra-142
description: >-
  Use ao arguir IMUNIDADES e causas específicas de exclusão do crime contra a honra (CP, art. 142) —
  ofensa irrogada em juízo na discussão da causa (I), crítica literária/artística/científica (II),
  conceito emitido por funcionário público em apreciação/dever de ofício (III), imunidade
  profissional do advogado (CF, art. 133; EAOAB, art. 7º, §2º; ADI 1.127), a NÃO abrangência da
  calúnia e a responsabilidade de quem dá… Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra, defesa, atipicidade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-imunidades-honra-142"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["imunidades-honra-142", "imunidades honra"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Imunidades e Exclusão do Crime contra a Honra (CP, art. 142)

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

Esta skill orienta a arguição das **causas específicas de exclusão do crime contra a honra** previstas no **art. 142 do Código Penal** — as chamadas **imunidades** (judiciária, da crítica e do funcionário público) — e da **imunidade profissional do advogado** (CF, art. 133; EAOAB, art. 7º, §2º). São hipóteses em que a ofensa, ainda que praticada, **não constitui injúria ou difamação**, por opção expressa do legislador. Aplica-se à defesa em ações penais e queixas-crime por calúnia, difamação e injúria (CP, arts. 138 a 140).

> **Lição central:** o art. 142 **não é atipicidade por ausência de dolo** — é **causa específica de exclusão do crime** (a doutrina majoritária a trata como *excludente de ilicitude*/escusa; há quem veja causa de exclusão da tipicidade). Isso muda a estratégia: aqui **não se discute o *animus*** (ele pode até existir), discute-se se a ofensa se deu **dentro do contexto imunizado** (em juízo, na crítica, no ofício). Não confunda com a defesa por atipicidade (*animus narrandi/jocandi*), que é tese autônoma e cumulável — ver `distinct_from` abaixo.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 142 e dos arts. 138–140 do CP** e do **art. 7º, §2º, do EAOAB (Lei 8.906/94)** na fonte oficial. A imunidade do advogado teve seu alcance **restringido pelo STF na ADI 1.127** (excluída a expressão "ou desacato"): confirme o teor atual do dispositivo e o estado da jurisprudência (STF/STJ) via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Não cite acórdão de memória.

## Distinção crucial (não confundir teses)

- **Esta skill (art. 142):** causa **específica de exclusão** — a ofensa ocorreu, mas o contexto (juízo, crítica, ofício) a torna impune.
- **`defesa-calunia` / `defesa-difamacao` / `defesa-injuria`:** **atipicidade** por ausência de dolo específico (*animus injuriandi vel diffamandi*), presença de *animus narrandi, criticandi, jocandi, corrigendi, defendendi* — a ofensa **não se configura** por falta de intenção de ofender.
- São **teses cumuláveis**: pode-se sustentar, em ordem, (1) atipicidade por falta de *animus* e, subsidiariamente, (2) imunidade do art. 142. Nunca as trate como sinônimas na peça.

## Base legal

- **CP, art. 142** — não constituem injúria ou difamação punível:
  - **I** — a ofensa irrogada **em juízo, na discussão da causa**, pela parte ou por seu procurador;
  - **II** — a **opinião desfavorável da crítica** literária, artística ou científica, salvo quando inequívoca a intenção de injuriar ou difamar;
  - **III** — o **conceito desfavorável emitido por funcionário público**, em apreciação ou informação que preste **no cumprimento de dever do ofício**.
  - **Parágrafo único** — nos casos dos incisos I e III, **responde pela injúria ou difamação quem dá publicidade** à ofensa (ex.: quem divulga fora dos autos).
- **CP, arts. 138–140** — calúnia, difamação, injúria (os tipos que o art. 142 pode excluir).
- **CF, art. 133** — o advogado é **indispensável à administração da justiça**, sendo **inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei**.
- **EAOAB (Lei 8.906/94), art. 7º, §2º** — imunidade profissional do advogado: não constitui **injúria e difamação** puníveis a manifestação de sua parte, no exercício da atividade, em juízo ou fora dele — **nos limites da lei** (a expressão "ou desacato" foi **excluída pelo STF na ADI 1.127**; conferir teor atual e alcance via `jurisprudencia-stj-stf`).
- **CPC, art. 78 / art. 466 (anterior CPC/73, art. 15)** e poderes de polícia da audiência — moldura de urbanidade que limita o excesso.

> **Regra de ouro do alcance:** o art. 142, I e a imunidade do advogado **não abrangem a calúnia** (imputação falsa de crime). Imunidade cobre **injúria e difamação**, não calúnia. Se a imputação for de fato criminoso falso, a imunidade **não socorre** — atacar por outra via (ausência de dolo, retratação, exceção da verdade).

## Roteiro de análise e defesa por hipótese de imunidade

### 1) Imunidade judiciária — ofensa irrogada em juízo (art. 142, I)

**Requisitos cumulativos a demonstrar na peça:**
- (a) **ofensa proferida em juízo** — em petição, memoriais, sustentação oral, audiência, depoimento da parte/procurador;
- (b) **vínculo com a discussão da causa** — a ofensa deve guardar **pertinência com o objeto do processo** (nexo funcional); ofensa gratuita e desconexa não é imunizada;
- (c) **autoria pela parte ou seu procurador** (advogado, defensor, MP quando parte) — não alcança terceiros estranhos à lide;
- (d) **injúria ou difamação** (não calúnia — ver regra de ouro).

**Teses defensivas típicas:**
- A manifestação integra a **argumentação da causa** (contestação, réplica, alegações finais) e está **coberta pela imunidade** — sem crime.
- Ainda que enérgica ou veemente, a linguagem forense combativa **não configura crime** quando pertinente ao debate (o excesso verbal contido no calor da lide é tolerado nos limites do art. 142, I).
- **Parágrafo único (defesa do publicante):** o **cliente/parte** que apenas litiga **não responde** pela ofensa; responde **quem dá publicidade** fora dos autos — separar as figuras.

**Contra-teses (acusação/querelante) a antecipar:**
- **Ofensa desvinculada da causa** (ataque pessoal gratuito, sem pertinência ao mérito) → fora da imunidade.
- **Calúnia** (imputação de crime falso) → não coberta.
- **Publicidade externa** (divulgação da ofensa fora dos autos, à imprensa, redes) → parágrafo único, responde quem divulga.

### 2) Imunidade da crítica — literária, artística ou científica (art. 142, II)

**Teses defensivas típicas:**
- A manifestação é **crítica de obra/ideia/produto** (livro, filme, artigo, pesquisa, desempenho profissional) e não ataque pessoal — **opinião desfavorável é livre** (*animus criticandi*, liberdade de expressão, CF, art. 5º, IV e IX).
- A ressalva legal ("salvo quando inequívoca a intenção de injuriar ou difamar") **não incide**: a crítica dirige-se **à obra, não à pessoa**; o tom ácido não retira a imunidade se ausente o dolo inequívoco de ofender.
- Diálogo com a **liberdade de imprensa/expressão** e a jurisprudência constitucional sobre crítica pública — desenvolver com `jurisprudencia-stj-stf` (não citar precedente de memória).

**Contra-tese a antecipar:** demonstração de **intenção inequívoca** de injuriar/difamar (ataque *ad hominem*, xingamento pessoal desvinculado da obra) → afasta a imunidade.

### 3) Imunidade funcional — conceito de funcionário público no dever de ofício (art. 142, III)

**Requisitos:**
- (a) **funcionário público** (conceito do CP, art. 327) emitindo (b) **conceito desfavorável** em (c) **apreciação/informação prestada no cumprimento de dever do ofício** (relatório, parecer, avaliação funcional, informação em processo administrativo).

**Teses defensivas típicas:**
- O conceito foi emitido **no estrito cumprimento do dever funcional** (relatório, parecer, avaliação) — imunizado.
- **Parágrafo único:** responde **quem dá publicidade** ao conceito fora do canal funcional, não o servidor que o exarou no ofício.

**Contra-tese:** conceito emitido **fora** do dever de ofício, ou com **excesso doloso** e ânimo de ofender pessoalmente → fora da imunidade.

### 4) Imunidade profissional do advogado (CF, art. 133; EAOAB, art. 7º, §2º)

**Distinção relevante:** a imunidade do advogado é **mais ampla** que a do art. 142, I, do CP em um ponto (pode alcançar manifestação **em juízo ou fora dele**, no exercício da atividade), mas guarda o **mesmo limite**: **não abrange a calúnia** e submete-se aos **"limites da lei"** (ADI 1.127 excluiu o desacato).

**Teses defensivas típicas:**
- A manifestação integra o **exercício profissional** (defesa do cliente, sustentação, petição) e é **inviolável** (CF, art. 133; EAOAB, art. 7º, §2º) — não constitui injúria/difamação punível.
- A veemência na **defesa técnica do constituído** é **atividade-fim** protegida; a **plenitude de defesa** e o contraditório amparam a linguagem combativa nos limites da lei.
- **Não há desacato** por manifestação do advogado no exercício da profissão (ADI 1.127) — confirmar teor/alcance atual via `jurisprudencia-stj-stf`.

**Contra-teses a antecipar:**
- **Calúnia** ou ofensa **gratuita/desvinculada** do ato profissional → fora da imunidade.
- **Excesso** que ultrapassa os "limites da lei" (ataque pessoal ao magistrado/parte sem pertinência) → pode configurar crime e infração disciplinar.

## Teses e contra-teses (síntese estratégica)

| Tese da defesa | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Ofensa em juízo, pertinente à causa | art. 142, I | Ofensa gratuita, desvinculada do mérito |
| Só responde quem publica fora dos autos | art. 142, p.u. | Réu foi quem deu publicidade externa |
| Crítica à obra, não à pessoa | art. 142, II | Intenção inequívoca de injuriar (*ad hominem*) |
| Conceito no dever de ofício | art. 142, III | Excesso doloso / fora do ofício |
| Manifestação profissional inviolável | CF 133; EAOAB 7º §2º; ADI 1.127 | Calúnia ou excesso fora dos limites da lei |
| (Subsidiária) atipicidade por falta de *animus* | arts. 138–140 c/c dolo específico | Presença de dolo de ofender |

> **Ordem sugerida na peça:** (1) preliminares processuais da queixa (tempestividade — decadência do art. 38 CPP; legitimidade; requisitos do art. 41 CPP); (2) atipicidade por ausência de *animus* (se cabível); (3) **imunidade do art. 142 / EAOAB** como causa de exclusão; (4) subsidiárias (retratação — art. 143 CP; exceção da verdade na difamação/calúnia; perdão judicial na injúria — art. 140, §1º).

## Dispositivos e súmulas sob o Citation Gate

**Dispositivos de lei (citar com segurança, conferida a vigência):**
- **CP, art. 142, I, II, III e parágrafo único** — as três imunidades e a regra do publicante.
- **CP, arts. 138, 139, 140** — calúnia, difamação, injúria.
- **CP, art. 143** — retratação (causa de extinção da punibilidade na calúnia e difamação).
- **CP, art. 327** — conceito de funcionário público (para o inciso III).
- **CF, art. 133** — inviolabilidade do advogado nos limites da lei.
- **EAOAB (Lei 8.906/94), art. 7º, §2º** — imunidade profissional.
- **CPP, arts. 38 (decadência), 41, 44** — requisitos e prazo da queixa-crime.

**Precedentes/temas (NÃO citar de memória — passar por `jurisprudencia-stj-stf`):**
- **ADI 1.127/STF** — declarou a inconstitucionalidade parcial da imunidade quanto ao **"desacato"** no art. 7º, §2º, do EAOAB, mantendo a inviolabilidade para injúria e difamação nos limites da lei. **[Conferir teor e ementa vigente antes de citar]**
- Jurisprudência do **STF/STJ** sobre: alcance da imunidade judiciária (pertinência com a causa); crítica x ataque pessoal; não abrangência da calúnia; limites da inviolabilidade do advogado. **[NÃO VERIFICADO — qualquer número de HC/REsp/RE, informativo ou tema deve ser confirmado via `jurisprudencia-stj-stf`; prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.]**

## Erros comuns / checklist

**Anti-padrões (evitar):**
- Invocar o art. 142 para **calúnia** — a imunidade **não abrange** imputação falsa de crime.
- Tratar a imunidade como **ausência de *animus*** — são teses distintas (imunidade = exclusão específica; atipicidade = falta de dolo). Não fundir.
- Alegar imunidade judiciária para ofensa **desvinculada da causa** ou proferida **fora do processo** (aí cabe, no advogado, a imunidade da EAOAB — nunca a do art. 142, I).
- Esquecer o **parágrafo único**: quem **dá publicidade** externa à ofensa responde, ainda que a origem fosse imunizada.
- Sustentar imunidade do advogado sem observar os **"limites da lei"** e o recorte da **ADI 1.127** (não há guarida para desacato nem para excesso desvinculado do ato profissional).
- Citar **ADI 1.127** ou qualquer precedente **sem passar pelo Citation Gate**.
- Ignorar as **preliminares** da queixa (decadência do art. 38 CPP; inépcia do art. 41 CPP) — muitas vezes resolvem antes do mérito.

**Checklist da peça:**
- [ ] Classificado o tipo imputado (calúnia? difamação? injúria?) — a imunidade **não cobre calúnia**?
- [ ] Identificada a **hipótese** de imunidade (I judiciária, II crítica, III funcional, ou EAOAB) e demonstrados **todos os requisitos**?
- [ ] Verificado o **nexo com a causa** (inciso I) ou com **obra/ofício** (II/III)?
- [ ] Analisado o **parágrafo único** (quem deu publicidade)?
- [ ] Tese de **atipicidade por falta de *animus*** avaliada como cumulável/subsidiária?
- [ ] Preliminares da queixa conferidas (decadência art. 38 CPP; art. 41 CPP; legitimidade)?
- [ ] Subsidiárias mapeadas (retratação art. 143; exceção da verdade; perdão judicial art. 140, §1º)?
- [ ] Redação vigente do art. 142 CP e do art. 7º, §2º, EAOAB conferida na fonte oficial?
- [ ] Todo precedente (inclusive ADI 1.127) passado por `jurisprudencia-stj-stf`?
- [ ] Revisão humana do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa técnica; não substitui o juízo profissional nem a análise do caso concreto. A responsabilidade pela peça é sempre do **advogado** (CED/OAB; Provimento 205/2021).
- **Polo:** skill majoritariamente **defensiva** (defesa em ação penal/queixa por crime contra a honra). O roteador deve conferir o **polo** da instituição em `_criminalsquad/_memory/company.md`; se atuar como **querelante/assistente de acusação**, o mesmo art. 142 é usado como **contra-tese** (afastar a imunidade: demonstrar calúnia, ofensa desvinculada da causa, publicidade externa ou intenção inequívoca de injuriar).
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
