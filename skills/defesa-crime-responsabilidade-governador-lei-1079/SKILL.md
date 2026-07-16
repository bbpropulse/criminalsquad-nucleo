---
name: defesa-crime-responsabilidade-governador-lei-1079
description: >-
  Use ao defender Governador de Estado, Secretário de Estado ou agente político estadual em processo
  por CRIME DE RESPONSABILIDADE (infração político-administrativa) sob a Lei 1.079/50 — juízo de
  admissibilidade na Assembleia Legislativa e julgamento pelo Tribunal Especial de jurisdição mista.
  Gatilhos: crime de responsabilidade, Lei 1.079/50, impeachment de governador, Tribunal Especial,
  jurisdição mista (5 deputados + 5… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, responsabilidade-agentes-politicos, lei-1079]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crime-responsabilidade-governador-lei-1079"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crime-responsabilidade-governador-lei-1079", "defesa crime", "governador 1079"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crime de Responsabilidade de Governador (Lei 1.079/50)

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

Esta skill orienta a **defesa técnica** do **Governador de Estado**, do **Secretário de Estado** e demais agentes políticos estaduais processados por **crime de responsabilidade** sob a **Lei 1.079/50** (arts. 74 a 79) — o rito bifásico que combina **juízo de admissibilidade** na **Assembleia Legislativa** e **julgamento** por um **Tribunal Especial de jurisdição mista**.

> **Lição central:** *crime de responsabilidade não é crime penal.* É **infração político-administrativa**, cuja única sanção é a **perda do cargo com inabilitação** (art. 78) — jamais pena privativa de liberdade. Antes de qualquer tese, **classifique a imputação**: é crime de responsabilidade (Lei 1.079 → Tribunal Especial) ou crime comum (CP/leis penais → **STJ**, CF art. 105, I, "a")? São esferas **autônomas e paralelas** (art. 78, *in fine*: "sem prejuízo da ação da justiça comum"). Errar essa classificação contamina foro, rito e sanção.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 1.079/50 foi alterada pela **Lei 10.028/2000** (crimes de responsabilidade fiscal, ligados à LC 101/2000) e é fortemente moldada pela **jurisprudência do STF** (competência da União — SV 46; dispensa de autorização prévia da Assembleia para o crime comum). Confirme a redação vigente dos arts. 4º-12 e 74-79, a **SV 46** e os precedentes via a skill `jurisprudencia-stj-stf`. **Confira também a Constituição do respectivo Estado** — o art. 78 remete a ela a forma do processo; cada Estado pode ter rito próprio (respeitados os limites da SV 46).

## Natureza jurídica — a chave de tudo

- **Infração político-administrativa**, não crime em sentido estrito. O rótulo "crime de responsabilidade" é histórico e enganoso.
- **Sanção típica e teto (art. 78):** *perda do cargo* + *inabilitação para função pública por até 5 anos*. Não há prisão, multa penal ou reprimenda criminal.
- **Duas sanções autônomas:** perda do cargo e inabilitação são cumulativas e, segundo a leitura consolidada no impeachment presidencial, **independentes** — daí o debate sobre a continuidade do processo mesmo após o fim do mandato (ver teses).
- **Paralelismo com a esfera penal:** os mesmos fatos podem gerar, em paralelo, ação penal por **crime comum** (peculato, corrupção etc.) perante o **STJ**, e ação de **improbidade** (Lei 8.429/92) na esfera cível. Independência de instâncias — o *bis in idem* só se coloca quanto à **mesma** natureza de sanção.

## Base legal

- **Lei 1.079/50, arts. 74 a 79** — crimes de responsabilidade de **Governadores e Secretários de Estado** (denúncia, admissibilidade, julgamento, sanção).
- **Art. 74** — são crimes de responsabilidade do Governador/Secretário os **atos definidos como crimes nesta lei** (remissão aos **arts. 4º a 12**: contra a existência da União, o livre exercício dos Poderes, os direitos políticos, a segurança interna, a **probidade na administração**, a **lei orçamentária**, a **guarda e o legal emprego dos dinheiros públicos** e o cumprimento de decisões judiciárias).
- **Art. 75** — legitimidade: **qualquer cidadão** pode denunciar o Governador perante a Assembleia Legislativa.
- **Art. 77** — decretada a **procedência da acusação** por **maioria absoluta** da Assembleia, o Governador é **imediatamente suspenso** de suas funções.
- **Art. 78** — julgamento **na forma da Constituição do Estado**; condenação **somente** à perda do cargo com inabilitação **até 5 anos**; **sem prejuízo da ação da justiça comum**. §2º: condenação **só por 2/3** dos membros do tribunal de julgamento. §3º: se a CE for omissa, **Tribunal Especial** de **5 deputados + 5 desembargadores**, presidido pelo **Presidente do TJ** (voto de qualidade no empate).
- **Art. 79** — aplicação **subsidiária** dos regimentos internos da Assembleia e do TJ e do **CPP**.
- **CF, art. 105, I, "a"** — o **crime comum** do Governador é julgado pelo **STJ** (não confundir com o crime de responsabilidade).

## Competência — quem julga o quê

| Imputação | Natureza | Órgão julgador | Sanção |
|---|---|---|---|
| **Crime de responsabilidade** (Lei 1.079) | Político-administrativa | **Tribunal Especial** misto (ou o previsto na CE) | Perda do cargo + inabilitação (até 5 anos) |
| **Crime comum** (CP / leis penais) | Penal | **STJ** (CF 105, I, "a") | Pena penal (prisão, multa) |
| **Improbidade** (Lei 8.429/92) | Cível | Justiça comum estadual | Sanções da LIA |

➡️ **Regra de ouro da defesa:** identificar a natureza correta é a primeira linha. Imputação penal disfarçada de "crime de responsabilidade" (ou vice-versa) enseja **incompetência** e **nulidade**.

## Rito bifásico — as duas fases e onde a defesa atua

**Fase 1 — Juízo de admissibilidade (Assembleia Legislativa):**
1. **Denúncia** por cidadão no gozo dos direitos políticos (art. 75).
2. **Recebimento e deliberação** — a Assembleia decide se a denúncia é objeto de deliberação.
3. **Comissão especial/processante** — instrução preliminar, com **direito à defesa prévia**.
4. **Decisão de procedência da acusação** por **maioria absoluta** → **suspensão** do Governador (art. 77).

**Fase 2 — Julgamento (Tribunal Especial / conforme a CE):**
5. Formado o Tribunal Especial (5 deputados + 5 desembargadores, presidência do Presidente do TJ — art. 78, §3º), instaura-se o julgamento.
6. Ampla defesa, produção de provas, sustentação.
7. **Condenação só por 2/3** dos membros (art. 78, §2º); do contrário, **absolvição** e retorno ao cargo.

**Frentes de fiscalização da defesa em cada fase:** legitimidade do denunciante; tipicidade estrita da conduta; quóruns (maioria absoluta na admissibilidade; 2/3 na condenação); composição e imparcialidade do Tribunal Especial; contraditório e prazos de defesa; motivação das decisões; observância do rito da CE + subsidiariedade do CPP (art. 79).

## Teses defensivas centrais

1. **Atipicidade político-administrativa (tipicidade estrita).** O fato tem de subsumir-se **exatamente** a um dos tipos dos arts. 4º-12. Muitos são cláusulas abertas — exigir **descrição precisa** da conduta e recusar imputação genérica. Ato de gestão, opção política legítima ou mera irregularidade administrativa **não** é crime de responsabilidade.
2. **Reserva de lei federal (SV 46 / ex-Súmula 722).** Só a **União** define crimes de responsabilidade e o respectivo processo. Ataca-se qualquer imputação, tipo ou procedimento fundado em **norma estadual** (Constituição Estadual, lei ou regimento da Assembleia) que **inove** sobre a Lei 1.079/50.
3. **Teto da sanção (art. 78).** A inabilitação é de **até 5 anos** pelo texto da lei federal — norma estadual **não** pode ampliá-la (SV 46). [Há debate sobre simetria com o teto de 8 anos do impeachment presidencial (CF, art. 52, § único) — sustentar a leitura *in bonam partem* do art. 78 e conferir a jurisprudência via `jurisprudencia-stj-stf`.]
4. **Devido processo e contraditório.** Nulidade por **cerceamento de defesa** (ausência de defesa prévia, prazos exíguos, indeferimento imotivado de provas), **quórum** incorreto, ou **parcialidade** de integrantes do Tribunal Especial.
5. **Prazo do afastamento.** Suspenso o Governador (art. 77), a defesa sustenta **limite temporal** ao afastamento, por simetria com o **prazo de 180 dias** do art. 86, §2º, da CF (impeachment presidencial): ultrapassado o prazo sem julgamento, **retorno ao cargo**. [Confirmar a aplicação da simetria via `jurisprudencia-stj-stf`.]
6. **Separação das esferas (independência de instâncias).** A solução em uma esfera não vincula automaticamente a outra — mas a **negativa de autoria ou de materialidade** na esfera penal (STJ) repercute. Explorar prejudicialidade e coerência probatória.
7. **Incompetência / desvio de natureza.** Se a imputação é, na essência, **crime comum**, o foro é o **STJ**, não o Tribunal Especial — arguir incompetência absoluta e nulidade.

### Contra-teses (antecipar a acusação)
- **Autonomia das sanções:** a acusação sustentará que perda do cargo e inabilitação são autônomas, permitindo prosseguir para a **inabilitação** mesmo após o fim do mandato ou renúncia (leitura firmada no impeachment presidencial). Preparar resposta sobre **perda de objeto** e proporcionalidade.
- **Independência de instâncias:** a acusação a invocará para afastar a prejudicialidade do processo penal — rebater com identidade fática e risco de decisões contraditórias.
- **Cláusulas abertas dos arts. 9º-11:** a acusação lerá amplamente "probidade" e "dinheiros públicos" — opor **tipicidade estrita** e ausência de dolo.

## Súmulas e precedentes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula Vinculante 46/STF** (absorve a antiga **Súmula 722/STF**) — "A definição dos crimes de responsabilidade e o estabelecimento das respectivas normas de processo e julgamento são da competência legislativa **privativa da União**." Base da tese de reserva de lei federal.
- **STF — dispensa de autorização prévia da Assembleia** para processar Governador por **crime comum** perante o STJ: o STF assentou ser **inconstitucional** condicionar a persecução penal à licença legislativa (Estados não podem criar prerrogativa não prevista na CF). **[NÃO VERIFICADO]** — conferir os acórdãos específicos (referidos como ADIs julgadas em 2017) via `jurisprudencia-stj-stf` antes de citar número.
- **STF — autonomia das sanções (perda do cargo × inabilitação)** e continuidade do processo após a saída do cargo: tese construída no **impeachment presidencial (caso Collor)**. **[NÃO VERIFICADO]** — confirmar a aplicabilidade a Governador e o precedente via `jurisprudencia-stj-stf`.

> **Regra do Citation Gate:** nenhuma súmula, tese ou acórdão entra na peça sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Prefira **tese + dispositivo** (arts. da Lei 1.079 e da CF) a número de acórdão. **Na dúvida, omitir vence inventar.**

## Não confundir (erros de enquadramento)

- **Governador ≠ Prefeito.** Prefeito responde pelos **crimes de responsabilidade** (na verdade **crimes funcionais**, com pena de prisão — art. 1º) e pelas **infrações político-administrativas** (art. 4º) do **Decreto-Lei 201/1967** — regime, órgão julgador e sanções **diferentes** da Lei 1.079/50. Não misturar.
- **Crime de responsabilidade ≠ crime comum funcional.** Peculato, corrupção, prevaricação (CP) são crimes **penais** → STJ, com pena penal.
- **Crime de responsabilidade ≠ improbidade administrativa.** A LIA (Lei 8.429/92, com a Lei 14.230/2021) é esfera **cível**, com sanções próprias.
- **Lei 1.079 cobre mais que Governador** — Presidente, Ministros de Estado, do STF, PGR, AGU: a metodologia se estende, mas **foro e rito mudam** (Senado etc.). Aqui o foco é o **agente estadual** (arts. 74-79).

## Checklist e anti-padrões

- [ ] A imputação é **crime de responsabilidade** (Lei 1.079 → Tribunal Especial) e **não** crime comum (STJ) nem improbidade (cível)?
- [ ] O **denunciante** é cidadão no gozo dos direitos políticos (art. 75)?
- [ ] A conduta subsume-se a **tipo específico** dos arts. 4º-12 (tipicidade estrita, não cláusula genérica)?
- [ ] A imputação/rito está fundada **só** na Lei 1.079 e na CE compatível — nada de inovação estadual (**SV 46**)?
- [ ] **Quórum de maioria absoluta** na admissibilidade e **2/3** para condenar (art. 78, §2º) foram/serão observados?
- [ ] **Composição do Tribunal Especial** (5+5, presidência do Presidente do TJ) e **imparcialidade** conferidas (art. 78, §3º)?
- [ ] **Defesa prévia**, prazos e produção de provas assegurados (art. 79 + CPP subsidiário)?
- [ ] **Prazo do afastamento** monitorado (tese dos 180 dias por simetria)?
- [ ] Sanção limitada ao **teto do art. 78** (perda do cargo + inabilitação até 5 anos)?
- [ ] Todas as citações passaram por `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Tratar crime de responsabilidade como crime penal (pedir pena, prescrição penal, dosimetria) — a sanção é **política**.
- Aceitar tipo ou rito criado por **norma estadual** que inove sobre a Lei 1.079 (SV 46).
- Confundir o foro: levar crime comum ao Tribunal Especial ou crime de responsabilidade ao STJ.
- Aplicar o **DL 201/67** (prefeito) ao Governador.
- Deixar de exigir **quórum qualificado** (maioria absoluta / 2/3) e a **motivação** das decisões.
- Renunciar à tese de **limite temporal do afastamento**.
- Citar acórdão/ADI de memória sem passar pelo Citation Gate.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio metodológico; a estratégia, as impugnações e as citações são de responsabilidade do **advogado** subscritor (CED/EAOAB).
- **Ética conforme o polo.** No polo de **defesa** do agente político, atuar pela absolvição/nulidade dentro dos limites do processo. No **polo acusatório institucional** (MP/procuradoria/denunciante), observar objetividade e o dever de imputação precisa — sem excessos político-partidários.
- **Citation Gate inegociável:** toda súmula, tese ou precedente passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso. Há sanções reais por jurisprudência inventada.
- **Sem cálculo penal aqui:** não há dosimetria/lapso a computar (a sanção é política). Se houver **crime comum** paralelo no STJ, a prescrição e os prazos seguem a lei penal — use a skill/calculadora penal própria.

## Lembretes finais

- **Classifique a natureza primeiro** — responsabilidade (Lei 1.079/Tribunal Especial), comum (STJ) ou improbidade (cível).
- **Sanção é política:** perda do cargo + inabilitação até 5 anos (art. 78) — nunca prisão.
- **Reserva de lei federal (SV 46):** Estado não cria tipo nem rito.
- **Rito bifásico:** admissibilidade (maioria absoluta → suspensão) + julgamento (2/3 para condenar).
- **Tribunal Especial:** 5 deputados + 5 desembargadores, presidência do Presidente do TJ (art. 78, §3º).
- **Afastamento tem limite** (tese dos 180 dias por simetria — confirmar).
- **Governador ≠ Prefeito** (DL 201/67) — não confundir regimes.
- **Citation Gate sempre** — tese + dispositivo vencem número de acórdão.

**Padrão de redação:** ao redigir a peça (defesa prévia, alegações, resposta à acusação, memoriais), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
