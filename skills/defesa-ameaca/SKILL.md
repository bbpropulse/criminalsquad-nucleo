---
name: defesa-ameaca
description: >-
  Use ao defender AMEAÇA (CP, art. 147) — atipicidade por ausência de seriedade/idoneidade do mal,
  mal não injusto ou não grave, ameaça proferida em ira/embriaguez completa sem dolo, ausência de
  temor real da vítima, decadência da representação e desclassificação de figuras conexas. Gatilhos:
  ameaça, art. 147, mal injusto e grave, seriedade da ameaça, idoneidade do mal, ameaça em momento
  de ira, ameaça de brincadeira… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-a-pessoa, violencia-domestica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-ameaca"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-ameaca", "defesa ameaca"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Ameaça (CP, art. 147)

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

Esta skill orienta a **defesa técnica na imputação de ameaça** (Código Penal, art. 147): o crime de *"ameaçar alguém, por palavra, escrito ou gesto, ou qualquer outro meio simbólico, de causar-lhe mal injusto e grave"*. É delito de **altíssima frequência**, sobretudo em contexto de **violência doméstica e familiar** (Lei 11.340/06), onde costuma vir cumulado com lesão corporal, vias de fato ou descumprimento de medida protetiva. O núcleo da defesa está em **decompor os elementos do tipo** e testar, um a um, se a conduta imputada realmente os preenche.

> **Lição central:** ameaça não é qualquer palavra dura. O tipo exige mal **injusto E grave**, prometido de forma **séria e idônea** a incutir temor real. A defesa vence quando demonstra que **falta um desses elementos** — mal justo, mal fútil/impossível, promessa proferida em ira/embriaguez sem seriedade, ou ausência de temor. Antes da tese de mérito, verifique sempre a **representação e a decadência** (a ação é pública condicionada): sem representação tempestiva, o processo sequer deveria existir.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do art. 147 do CP e o regime da ação penal — a **Lei 14.994/2024** alterou dispositivos de crimes contra a pessoa e o feminicídio, e há debate sobre a natureza da ação penal na ameaça em contexto de violência doméstica após a ADI 4.424 e o Tema 1.145/STF. Confira súmulas, teses e overruling via a skill `jurisprudencia-stj-stf` antes de fundamentar qualquer peça. Nada de citar de memória (Citation Gate).

## Base legal

- **Art. 147, *caput*, CP** — tipo penal: ameaçar alguém, por palavra, escrito, gesto ou meio simbólico, de causar-lhe **mal injusto e grave**. Pena: detenção de 1 a 6 meses, ou multa.
- **Art. 147, parágrafo único, CP** — **ação penal pública condicionada à representação** do ofendido. É o alicerce da preliminar de decadência.
- **Art. 103, CP + art. 38, CPP** — **prazo decadencial de 6 meses** para a representação, contado do conhecimento da autoria.
- **Art. 129, §9º e §13, CP** — lesão corporal em violência doméstica (figura conexa comum; atenção às regras de ação penal próprias).
- **Lei 11.340/2006 (Maria da Penha)** — arts. 5º e 7º (formas de violência) e regime das medidas protetivas; a ameaça é a violência psicológica típica.
- **Art. 41 da Lei 11.340/06** — afasta a Lei 9.099/95 (JECrim) nos crimes praticados com violência doméstica contra a mulher; fora desse contexto, a ameaça é **infração de menor potencial ofensivo** (rito da Lei 9.099/95, cabível transação/ANPP conforme o caso).
- **Art. 147-A, CP (perseguição/*stalking*)** e **art. 147-B (violência psicológica contra a mulher)** — figuras próximas para **desclassificação/distinção** (Lei 14.132/21 e Lei 14.188/21).
- **Art. 65, III, "c", e art. 28 do CP** — atenuantes/emoção e a discussão da embriaguez.

## Anatomia do tipo — os elementos que a defesa ataca

A ameaça é crime **formal** (consuma-se com a promessa idônea de mal, independentemente de o mal se realizar) e **de dano potencial** à liberdade psíquica. Decomponha:

| Elemento | O que exige | Ataque da defesa |
|---|---|---|
| **Mal injusto** | O mal prometido deve ser contrário ao direito | Se o mal é **justo** (ex.: "vou te processar", "vou à polícia", "vou te acionar na Justiça"), **não há crime** — exercício regular de direito |
| **Mal grave** | Sério, apto a intimidar pessoa comum | Mal **fútil, insignificante ou irrealizável** (ex.: "rezo uma praga", "peço a Deus que te castigue") não configura |
| **Seriedade/idoneidade** | Promessa levada a sério, com aparência de que será cumprida | Palavras proferidas em **ira, cólera, calor de discussão, embriaguez completa**, ou em **tom de brincadeira/desabafo**, sem *animus* de intimidar, afastam o dolo |
| **Determinação do mal** | O mal deve ser determinado ou determinável | Ameaça **vaga, genérica, sem objeto** enfraquece a tipicidade |
| **Direcionamento** | A ameaça deve dirigir-se a pessoa certa e chegar ao seu conhecimento | Frase dita a terceiros, sem endereçamento nem ciência do ofendido, é atípica |
| **Mal futuro** | O mal prometido é **futuro** (se iminente e atual, pode ser tentativa de outro crime) | Mal **atual/iminente** pode desclassificar para tentativa de lesão, vias de fato etc. |
| **Dolo** | Vontade livre e consciente de intimidar | Ausência de intenção de intimidar (mero desabafo, exaltação) exclui o dolo — não há forma culposa |

> **Elemento subjetivo.** A doutrina majoritária dispensa fim específico de intimidar além do dolo de ameaçar; mas a **prática de ira/exaltação** é a via defensiva mais usada para negar a seriedade e, com ela, o próprio dolo. Sustente que a expressão foi **momento de descontrole emocional**, não promessa séria de mal futuro.

## Roteiro de análise e defesa (ordem recomendada)

1. **Preliminar — representação e decadência.** A ação é pública **condicionada** (art. 147, par. único). Verifique: houve representação válida? Foi tempestiva (6 meses do conhecimento da autoria — art. 103 CP)? A representação pode ser **retratada** até o oferecimento da denúncia (art. 25 CPP; em violência doméstica, art. 16 da Lei 11.340/06 — retratação só em audiência, perante o juiz e ouvido o MP). **Ausência ou intempestividade = extinção da punibilidade.**
2. **Atipicidade objetiva.** O mal prometido é **injusto e grave**? Ataque cada adjetivo: mal justo (exercício de direito), mal fútil, mal impossível, ameaça vaga/genérica.
3. **Atipicidade subjetiva.** As palavras foram ditas com **seriedade** ou em **ira/embriaguez completa/brincadeira/desabafo**? Sem seriedade não há dolo de ameaçar.
4. **Prova do temor real.** A vítima efetivamente se sentiu intimidada, ou registrou a ocorrência por outro motivo (retaliação, disputa de guarda, separação litigiosa)? Explore **contradições e contexto**.
5. **Desclassificação.** A conduta é melhor tipificada como **perseguição** (147-A), **violência psicológica** (147-B), **injúria** (art. 140 — ofensa à honra, não promessa de mal), **constrangimento ilegal** (art. 146), ou é **fato atípico** (mero bate-boca)?
6. **Absorção/conflito aparente.** A ameaça foi **meio** para outro crime (ex.: constrangimento ilegal, roubo, extorsão)? Nesses casos costuma ser **absorvida** (princípio da consunção) — não há concurso.
7. **Dosimetria e substitutivos.** Não afastada a tipicidade, pleiteie o mínimo, multa isolada, e — fora da violência doméstica — **transação penal / ANPP / suspensão condicional do processo** conforme cabimento (ver skills próprias). Em violência doméstica, atenção às vedações do art. 41 da Lei 11.340/06.

## Teses típicas de defesa (e suas contra-teses)

### 1. Mal justo — exercício regular de direito
- **Tese:** "vou te processar", "vou te levar à Justiça", "vou registrar boletim de ocorrência" **não é crime**, porque o mal prometido é **lícito** (exercício regular de direito — art. 23, III, CP). Falta a elementar **"injusto"**.
- **Contra-tese (acusação):** o direito foi invocado como **pretexto** para intimidar, ou o modo/contexto revela intenção de coação; ou o "direito" anunciado é abusivo/inexistente.

### 2. Mal não grave — insignificante ou irrealizável
- **Tese:** promessa de mal **fútil, vago ou impossível** ("mando uma praga", "peço a Deus que te puna", "vou te azarar") não intimida pessoa de discernimento comum. Falta a elementar **"grave"**.
- **Contra-tese:** no contexto concreto (histórico de agressões, porte de arma, proximidade), a mesma frase ganha gravidade e idoneidade intimidatória.

### 3. Ausência de seriedade — ira, exaltação, embriaguez, brincadeira
- **Tese (a mais comum):** palavras proferidas no **calor de discussão**, sob **violenta emoção**, em **embriaguez completa** ou em **tom de brincadeira/desabafo** não traduzem promessa séria de mal futuro — falta o **dolo de intimidar**. A jurisprudência tradicionalmente reconhece que a ameaça exige ânimo calmo e refletido, não a exaltação momentânea. [NAO VERIFICADO — a orientação sobre "ameaça em estado de ira" é doutrinária e há divergência jurisprudencial recente; conferir via `jurisprudencia-stj-stf` antes de citar precedente específico].
- **Contra-tese:** a exaltação **não exclui o dolo** de ameaçar; a emoção não é excludente (art. 28, I, CP). Em violência doméstica, o padrão de controle e o histórico dão seriedade à frase mesmo dita em discussão. **Esta é hoje a orientação prevalente em muitos tribunais** — não trate a "ira" como tese automática de absolvição.

### 4. Ausência de temor real / prova frágil
- **Tese:** sendo crime que tutela a liberdade psíquica, a **ausência de temor concreto** e a **fragilidade probatória** (palavra isolada da suposta vítima, contexto de litígio familiar, retaliação por separação ou disputa de guarda) impõem a absolvição por dúvida (*in dubio pro reo*, art. 386, VII, CPP).
- **Contra-tese (em violência doméstica):** a palavra da vítima tem **especial relevo** nos crimes praticados às ocultas do ambiente doméstico, sobretudo quando coerente e amparada por indícios. [NAO VERIFICADO — a valoração reforçada da palavra da vítima em violência doméstica tem base jurisprudencial consolidada; confirmar o precedente aplicável via `jurisprudencia-stj-stf`].

### 5. Decadência / falta de representação (preliminar)
- **Tese:** ação pública **condicionada**; sem representação válida e tempestiva (6 meses — art. 103 CP), **extingue-se a punibilidade** (art. 107, IV, CP). A representação pode ainda ser **retratada** (art. 25 CPP; art. 16 da Lei 11.340/06, em audiência específica).
- **Contra-tese:** o registro de ocorrência e a manifestação de vontade de ver o autor processado suprem a formalidade da representação; a decadência não corre enquanto ignorada a autoria.

### 6. Desclassificação para figura conexa
- **Tese:** o fato é **injúria** (art. 140 — xingamento/ofensa à honra, não promessa de mal futuro), **perseguição** (art. 147-A, se reiteração que restringe liberdade), **violência psicológica** (art. 147-B) ou **fato atípico** (mero bate-boca). A tipificação correta muda a ação penal, a pena e o rito.
- **Contra-tese:** os tipos não se excluem necessariamente; havendo promessa autônoma de mal injusto e grave, subsiste a ameaça (eventual concurso, salvo consunção).

### 7. Consunção — ameaça como meio de outro crime
- **Tese:** se a ameaça foi **elemento ou meio** de crime mais grave (constrangimento ilegal, roubo, extorsão, estupro), fica **absorvida** por ele (princípio da consunção) — vedada a dupla punição.
- **Contra-tese:** a ameaça teve **autonomia** e desígnio próprio, distinta do crime-fim, autorizando concurso.

## Súmulas, precedentes e temas (sob o Citation Gate)

> **Regra do gate:** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer número de HC/REsp/RE, informativo ou tema de repercussão geral** deve ser conferido em `jurisprudencia-stj-stf` antes de ir para a peça. Ensine a tese e cite o **dispositivo**; não arrisque o acórdão.

- **Natureza da ação penal na violência doméstica.** Há tese firmada de que a ação penal na **lesão corporal leve** em violência doméstica é **pública incondicionada** (ADI 4.424/STF). **Cuidado:** isso **não** significa, automaticamente, que a **ameaça** deixe de ser condicionada à representação — o art. 147, par. único, CP permanece. [NAO VERIFICADO — confirmar o estado atual da jurisprudência sobre representação na *ameaça* em contexto doméstico, inclusive Tema 1.145/STF, via `jurisprudencia-stj-stf`]. **Na dúvida, a defesa suscita a exigência de representação; a acusação sustenta o afastamento.**
- **Retratação da representação.** Só até o recebimento da denúncia (art. 25 CPP); em violência doméstica, **apenas em audiência** designada para tal, ouvido o MP (art. 16, Lei 11.340/06). Verifique o rito concreto.
- **Palavra da vítima em violência doméstica.** Valoração reforçada quando coerente e amparada — [NAO VERIFICADO — localizar o precedente aplicável no `jurisprudencia-stj-stf`].
- **Ameaça condicionada ("se você fizer X, eu faço Y").** Há divergência doutrinária sobre a tipicidade da ameaça condicional — sustente atipicidade quando a condição descaracteriza a promessa séria de mal futuro. Não invente número de julgado; trabalhe a **tese e o dispositivo**.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Ir direto ao mérito **sem** testar representação e decadência (a preliminar pode encerrar o caso).
- Tratar **qualquer** palavra dura como ameaça — sem verificar se o mal é **injusto E grave**.
- Confundir **injúria** (ofensa à honra) com **ameaça** (promessa de mal futuro) — são tipos distintos, com ação penal e consequências diferentes.
- Usar a tese da "ira/exaltação" como fórmula automática — **hoje há forte corrente que rejeita** a exaltação como excludente do dolo; module conforme a jurisprudência atual e o caso concreto.
- Esquecer que **emoção não exclui imputabilidade nem dolo** (art. 28, I, CP) — a tese da ira ataca a **seriedade da promessa**, não a culpabilidade.
- Aceitar concurso quando cabe **consunção** (ameaça como meio de crime-fim).
- Em violência doméstica, ignorar o **art. 41 da Lei 11.340/06** (afasta a Lei 9.099/95) e propor transação/ANPP indevidamente.
- Citar precedente de memória — **todo número passa pelo `jurisprudencia-stj-stf`**.

**Checklist de defesa:**
- [ ] Ação penal e **representação**: existe? é **tempestiva** (6 meses — art. 103 CP)? cabe **retratação** (art. 25 CPP / art. 16 Lei 11.340/06)?
- [ ] O mal prometido é **injusto**? (Se justo — exercício de direito — atípico.)
- [ ] O mal é **grave**? (Se fútil/impossível/vago — atípico.)
- [ ] A promessa foi **séria e idônea**, ou proferida em **ira/embriaguez/brincadeira**?
- [ ] Há **dolo** de intimidar, ou mero desabafo/exaltação?
- [ ] A ameaça é de **mal futuro** e **direcionada** a pessoa certa que dela tomou ciência?
- [ ] Há **temor real** provado, ou a prova é frágil/contexto de litígio familiar?
- [ ] Cabe **desclassificação** (injúria 140, perseguição 147-A, viol. psicológica 147-B, constrangimento 146) ou **atipicidade**?
- [ ] Cabe **consunção** (ameaça como meio de outro crime)?
- [ ] Contexto de **violência doméstica**? Então art. 41 Lei 11.340/06 (sem JECrim) e regras próprias de retratação.
- [ ] Todas as **súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota sobre o polo acusatório (MP / assistente de acusação)

Esta skill tem **também** um eixo de acusação. Se o perfil da instituição (`company.md`) indicar **Ministério Público ou assistente de acusação**, o roteador deve confirmar o **polo** e inverter a lógica: sustentar a **presença** dos elementos do tipo (mal injusto e grave, seriedade da promessa no contexto, dolo de intimidar), a **desnecessidade de ânimo calmo** (a exaltação não afasta o dolo), a **valoração reforçada da palavra da vítima** em violência doméstica, e — quando pertinente — a **incondicionalidade da ação** nas hipóteses aplicáveis. As contra-teses listadas acima são o roteiro acusatório. **O foco majoritário desta skill, porém, é a DEFESA por tipo penal.**

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à elaboração de tese e peça; não substitui o juízo do advogado responsável nem a análise dos autos concretos. A responsabilidade final é sempre do profissional (CED/OAB, art. 2º).
- **Ética por polo:** advocacia (Estatuto da OAB e Provimento 205/2021 — publicidade e captação); Ministério Público (regime do CNMP); Defensoria (LC 80/94). Verifique conflito de interesses (art. 17 do EAOAB) na triagem.
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa pela skill `jurisprudencia-stj-stf`. Na dúvida entre citar e omitir, **omitir vence inventar** (há sanções reais por jurisprudência inventada por IA).
- **Sigilo e LGPD:** dados do assistido/cliente nunca em repositório público.

## Lembretes finais

- **Preliminar primeiro:** representação e decadência (ação pública **condicionada**, art. 147, par. único) podem encerrar o caso antes do mérito.
- **Mal injusto E grave** — decompor cada adjetivo; falta de um = atipicidade.
- **Seriedade da promessa** é o coração da tese subjetiva (ira/embriaguez/brincadeira) — mas **module**: a exaltação, hoje, nem sempre exclui o dolo.
- **Injúria ≠ ameaça** — honra x promessa de mal futuro; não confundir.
- **Violência doméstica** muda tudo: art. 41 Lei 11.340/06 (sem JECrim), retratação só em audiência (art. 16), palavra da vítima com peso reforçado.
- **Consunção** quando a ameaça é meio de crime-fim.
- **Todo precedente** passa por `jurisprudencia-stj-stf`; e **revisão humana** sempre.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, memoriais), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
