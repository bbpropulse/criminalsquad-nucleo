---
name: defesa-exercicio-ilegal-medicina-charlatanismo-curandeirismo
description: >-
  Use ao defender acusado de exercício ilegal da medicina, arte dentária ou farmacêutica (CP 282),
  charlatanismo (CP 283) ou curandeirismo (CP 284) — a metodologia forense para DELIMITAR qual dos
  três tipos (ou a contravenção do art. 47 da LCP) incide, atacar a habitualidade nos crimes
  habituais e explorar a despenalização (menor potencial ofensivo). Gatilhos: exercício ilegal da
  medicina, art. 282 CP, dentista prático… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, saude-publica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-exercicio-ilegal-medicina-charlatanismo-curandeirismo"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-exercicio-ilegal-medicina-charlatanismo-curandeirismo", "defesa exercicio", "charlatanismo curandeirismo"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa — Exercício Ilegal da Medicina (282), Charlatanismo (283) e Curandeirismo (284)

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

Esta skill orienta a **defesa** de acusado por um dos três crimes contra a saúde pública dos **arts. 282 a 284 do CP** — figuras vizinhas, de fronteiras móveis, frequentemente confundidas na denúncia. O bem jurídico é a **saúde pública** (a incolumidade coletiva, não a de vítima determinada); são crimes de **perigo abstrato/presumido** e de **menor potencial ofensivo** (pena máxima de 1 ou 2 anos). Para o capítulo inteiro (arts. 267-285) e o carro-chefe do art. 273, use a skill irmã `defesa-crimes-saude-publica`; **esta** aprofunda a tríade 282-284.

> **Lição central:** o erro que decide o caso é **não delimitar qual dos três tipos** incide. Antes de qualquer mérito, responda: (1) o agente tinha **habilitação** (registro no conselho) ou era **leigo**? (2) a conduta era **exercer** uma prática ou apenas **anunciar** cura? (3) houve **habitualidade**? A resposta reclassifica — e muitas vezes **desclassifica** (para a contravenção do art. 47 da LCP, quando a profissão está **fora** do rol médico/dentista/farmacêutico) ou **atipifica** (ato único nos crimes habituais). Habilitação parcial ou profissão específica -> 282; leigo com meios empíricos -> 284; propaganda de cura secreta/infalível -> 283.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 282-284 do CP e do **art. 47 da LCP** (Decreto-Lei 3.688/41 — exercício ilegal de profissão), atento ao debate sobre o impacto da **Lei 13.874/2019** (Liberdade Econômica) na exigência de atos públicos de liberação para atividades de baixo risco. Verifique a **taxatividade** do rol do art. 282, o estado da tensão entre **curandeirismo e liberdade religiosa/cultural** (CF, art. 5º, VI; arts. 215-216) e as **Práticas Integrativas e Complementares (PICS/SUS)**. Súmulas, temas, informativos e overruling passam **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de fundamentar a peça. Na dúvida sobre um número de acórdão, **ensine a tese e cite o dispositivo — não arrisque o número**.

## Base legal

- **CP, art. 282** — exercício ilegal da medicina, arte dentária ou farmacêutica: *"Exercer, ainda que a título gratuito, a profissão de médico, dentista ou farmacêutico, sem autorização legal ou excedendo-lhe os limites"*. Pena: **detenção, 6 meses a 2 anos**; parágrafo único: com fim de lucro, também **multa**.
- **CP, art. 283** — charlatanismo: *"Inculcar ou anunciar cura por meio secreto ou infalível"*. Pena: **detenção, 3 meses a 1 ano, e multa**.
- **CP, art. 284** — curandeirismo: *"Exercer o curandeirismo: I - prescrevendo, ministrando ou aplicando, habitualmente, qualquer substância; II - usando gestos, palavras ou qualquer outro meio; III - fazendo diagnósticos"*. Pena: **detenção, 6 meses a 2 anos**; parágrafo único: mediante remuneração, também **multa**.
- **CP, art. 285** — causa de aumento por resultado (remissão aos arts. 258 e 259).
- **LCP (DL 3.688/41), art. 47** — exercício ilegal de profissão ou atividade (**contravenção**): o "porto seguro" da desclassificação quando a profissão **não** é médico/dentista/farmacêutico.
- **CP, arts. 44 (LCP) / 76 e 89 da Lei 9.099/95 / 28-A do CPP** — moldura despenalizadora (menor potencial ofensivo, transação, sursis processual, ANPP).
- **CF, art. 5º, VI (liberdade de crença), XL (irretroatividade gravosa), XLVI (individualização); arts. 215-216 (patrimônio cultural)** — âncoras constitucionais das teses de atipicidade material.

## Natureza comum dos três crimes

- **Bem jurídico:** saúde pública (coletividade). Sujeito passivo é o **Estado/sociedade**, não um paciente individual.
- **Perigo abstrato/presumido:** o tipo não exige dano concreto à saúde de ninguém — o que abre flanco para a tese de **ausência de lesividade** (perigo concreto inexistente).
- **Crimes habituais (282 e 284):** o núcleo "**exercer**" (e o "habitualmente" do art. 284, I) exige **reiteração**. Um ato isolado é **atípico**; e o flagrante em crime habitual é problemático (um único ato não revela habitualidade).
- **Charlatanismo (283) é crime formal/de mera conduta:** consuma-se com o **inculcar ou anunciar**, independentemente de alguém ser efetivamente enganado ou lesado.
- **Menor potencial ofensivo:** os três têm pena máxima **≤ 2 anos** -> competência do **JECRIM** e via despenalizadora (ver seção própria).

## Os três tipos lado a lado (o coração da delimitação)

| | Art. 282 (exercício ilegal) | Art. 283 (charlatanismo) | Art. 284 (curandeirismo) |
|---|---|---|---|
| **Conduta** | *Exercer* a profissão | *Inculcar/anunciar* cura | *Exercer* o curandeirismo |
| **Objeto** | Profissão de **médico, dentista ou farmacêutico** (rol) | Anúncio de **cura por meio secreto ou infalível** | Substâncias, gestos/palavras, diagnósticos (meios empíricos) |
| **Sujeito ativo** | Não habilitado **ou** habilitado que excede limites | **Qualquer pessoa** (inclusive médico) | **Leigo**, sem qualquer habilitação |
| **Habitualidade** | Sim (crime habitual) | Não (formal — basta anunciar) | Sim (crime habitual) |
| **Elemento subjetivo** | Dolo de exercer sem autorização | Dolo + **má-fé** (ciência da falsidade do meio) | Dolo; **pode haver boa-fé** do agente |
| **Pena** | Det. 6m-2a (+ multa se lucro) | Det. 3m-1a **e** multa | Det. 6m-2a (+ multa se remuneração) |

## Delimitação: qual é o tipo? (fronteiras que a defesa explora)

- **282 x 284 — habilitado x leigo.** O critério é a **existência de conhecimento técnico/habilitação**. Quem tem registro (ou formação parcial: estudante, técnico, protético, diploma estrangeiro não revalidado) e atua como profissional, ou **excede os limites** da própria habilitação, responde pelo **282**. O **leigo total**, que "cura" por garrafadas, chás, passes e diagnósticos empíricos, é **curandeiro (284)**. Enquadramento errado abre a **nulidade/emendatio** e muda a estratégia.
- **282 x contravenção do art. 47 da LCP — o rol é fechado.** O art. 282 alcança **só** médico, dentista e farmacêutico. Exercício ilegal de **outras** profissões da saúde (enfermeiro, fisioterapeuta, psicólogo, biomédico, veterinário, técnico) **não é crime do 282** — quando muito, **contravenção** do art. 47 (ver `contravencoes-penais`). **Tese de desclassificação de altíssimo rendimento** (reduz drasticamente a resposta penal e reforça a prescrição).
- **283 x 284 — anunciar x exercer.** O charlatão **apregoa** cura por meio secreto/infalível (o núcleo é a **propaganda**, e ele em regra tem pretensão científica e age de **má-fé**); o curandeiro **efetivamente exerce** por substâncias/gestos/diagnósticos. Podem **concorrer** (quem anuncia E exerce), mas a defesa deve exigir a correta imputação de cada núcleo.
- **283 x estelionato (art. 171).** Se, além do anúncio, houve **fraude** para obter **vantagem ilícita** com **prejuízo determinado** de vítima, discute-se o **estelionato** (crime patrimonial, mais grave) — atenção ao **concurso aparente/consunção**: a defesa afasta a dupla punição pelo mesmo fato.
- **Concurso com outros crimes.** Falsificação/uso de diploma -> arts. 297/304 (documento); uso de nome/título alheio -> art. 307; resultado lesão/morte por imperícia -> arts. 129/121 (em regra culposos). A defesa busca **crime único ou consunção** e afasta concursos artificiais.

## Roteiro de defesa por tipo penal

**Art. 282 (exercício ilegal):**
1. **A profissão é do rol** (médico/dentista/farmacêutico)? Se não -> **desclassificar para o art. 47 da LCP** (contravenção).
2. **Havia habilitação?** Se o agente é habilitado, a acusação precisa provar que **excedeu os limites** — e não mero ato dentro da própria competência legal (conferir atos privativos na regulação do conselho).
3. **Há habitualidade?** Ato único/esporádico -> **atipicidade** (crime habitual). Fiscalizar se a prova revela reiteração ou um flagrante de ato isolado.
4. **Fim de lucro** (parágrafo único) foi provado? Sem ele, afasta-se a multa e enfraquece a narrativa acusatória.

**Art. 283 (charlatanismo):**
1. **O meio era "secreto" ou "infalível"?** Sem esse elemento, a conduta é **atípica** (mera oferta de tratamento alternativo, sem promessa de infalibilidade ou ocultação de fórmula, não é charlatanismo).
2. **Havia má-fé?** O tipo exige **consciência da falsidade** do meio — a **boa-fé** (crença sincera na eficácia) afasta o dolo típico.
3. **Não confundir com opinião/publicidade lícita:** liberdade de expressão e oferta de terapias reconhecidas não são anúncio de "cura infalível".

**Art. 284 (curandeirismo):**
1. **O agente é leigo** e usou meios empíricos? Se tinha habilitação, o tipo é **outro** (282) — reclassificar.
2. **Habitualidade** (o "exercer"/"habitualmente"): ato único -> **atipicidade**.
3. **Liberdade religiosa/cultural:** prática de fé (benzeção, reza, passe) de **boa-fé**, sem substituir tratamento e sem dano -> tese de **atipicidade material** (ver adiante).
4. **Boa-fé/ausência de perigo concreto:** o curandeiro pode crer na própria prática; questionar o perigo efetivo à saúde.

## Teses defensivas transversais (com a contra-tese acusatória)

- **Atipicidade por falta de habitualidade** (282 e 284). *Contra-tese (acusação):* o conjunto probatório — propaganda, agenda de "consultas", pluralidade de "pacientes" — revela reiteração; e a habitualidade se prova por indícios convergentes.
- **Desclassificação para a contravenção do art. 47 da LCP** (profissão fora do rol do 282). *Contra-tese:* a atividade concreta configurava **ato privativo** de médico/dentista/farmacêutico, ainda que o agente se dissesse "terapeuta".
- **Atipicidade material — liberdade religiosa e cultural** (CF, art. 5º, VI; arts. 215-216): benzedeiras, rezadeiras, práticas de matriz africana e afins, exercidas de boa-fé, sem finalidade de substituir a medicina e sem dano, mereceriam **tutela constitucional**, discutindo-se a **(in)constitucionalidade progressiva** do curandeirismo. *Contra-tese:* a proteção cessa quando a prática **induz abandono de tratamento** eficaz e gera **perigo concreto** à saúde.
- **Práticas Integrativas e Complementares (PICS/SUS)** e terapias reconhecidas: quando a prática é institucionalmente admitida (acupuntura, fitoterapia etc.) e/ou o agente é habilitado, discute-se a **atipicidade**. *Contra-tese:* o reconhecimento da terapia não dispensa a **habilitação** de quem a executa.
- **Ausência de dolo / boa-fé** (rende sobretudo no 283, que exige má-fé). *Contra-tese:* anunciar cura "**infalível**" ou por "**meio secreto**" já exterioriza a má-fé típica.
- **Ausência de perigo / insignificância:** crimes de perigo abstrato — atacar a lesividade concreta e a proporcionalidade. *Contra-tese:* o perigo é **presumido** pelo tipo; o dano concreto é irrelevante para a consumação.
- **Erro de tipo / erro de proibição:** o agente supunha estar **autorizado** (ex.: diploma estrangeiro que cria habilitado; prática cultural tida por lícita no meio social). *Contra-tese:* a ilicitude era conhecível; o erro é evitável (afasta só a forma dolosa, art. 21).
- **Prescrição:** penas baixas (máx. 1 ou 2 anos) geram **prazos prescricionais curtos** — em processos morosos, a **prescrição da pretensão punitiva** (inclusive **retroativa/intercorrente**) frequentemente fulmina a ação. **Não calcule aqui**: rode o cálculo determinístico (art. 109, V/VI; marcos do art. 117; art. 115) na skill `calculadora-prescricao`.

## Despenalização e via processual (a defesa mais prática)

Os três crimes são de **menor potencial ofensivo** (pena máxima ≤ 2 anos) — competência do **JECRIM** (Lei 9.099/95, art. 61) e **rito sumaríssimo**. Estão em regra disponíveis:

- **Composição civil dos danos** e **transação penal** (art. 76) — a transação **não gera reincidência nem maus antecedentes** e evita a instrução.
- **Suspensão condicional do processo** (art. 89) — cabível: as três figuras têm **pena mínima ≤ 1 ano** (3 ou 6 meses).
- **ANPP** (art. 28-A do CPP) — cabível: **pena mínima < 4 anos**, crimes **sem violência ou grave ameaça**.
- **Ponderação estratégica:** medir a via despenalizadora (rápida, sem condenação) **contra** a tese de **atipicidade/absolvição** ou de **prescrição** — quando a atipicidade é robusta, aceitar transação pode ser abrir mão de absolvição. Decisão informada, com o cliente, caso a caso.
- **Flagrante em crime habitual:** nos arts. 282 e 284, atacar a prisão/auto de flagrante lavrado sobre **ato isolado** (a habitualidade não se demonstra num único ato).
- **Competência:** em regra **Justiça Estadual** (crime contra a saúde pública); a federal só desloca havendo **interesse específico da União** — conferir caso a caso.

## Súmulas e jurisprudência (sob Citation Gate)

Não há, na tríade 282-284, súmula de tribunal superior que se possa afirmar de memória com segurança. **Não invente número nem enunciado.** Leve ao gate `jurisprudencia-stj-stf` / `verificacao-citacoes` os **temas** abaixo e prefira **tese + dispositivo** a número de acórdão:

- Habitualidade e **(im)possibilidade de flagrante** em crime habitual (282/284). [NÃO VERIFICADO — conferir]
- **Taxatividade** do rol do art. 282 e **desclassificação** para o art. 47 da LCP. [NÃO VERIFICADO — conferir]
- **Curandeirismo x liberdade religiosa/cultural** — atipicidade material e (in)constitucionalidade progressiva. [NÃO VERIFICADO — conferir]
- **Charlatanismo x estelionato** — concurso aparente/consunção. [NÃO VERIFICADO — conferir]
- Impacto da **Lei 13.874/2019** sobre o art. 47 da LCP e atividades de baixo risco. [NÃO VERIFICADO — conferir]

## Erros comuns e anti-padrões (evitar)

- Tratar **282, 283 e 284 como sinônimos** — cada um tem núcleo, sujeito e elementos próprios.
- **Aceitar o 282** quando a profissão está **fora do rol** (era contravenção do art. 47 da LCP).
- **Não atacar a habitualidade** nos crimes habituais (ato único = atipicidade).
- **Confundir charlatanismo** (anunciar, má-fé, crime formal) com **curandeirismo** (exercer, meios empíricos, habitual).
- Ignorar a **má-fé** como elementar do 283 (a boa-fé afasta o dolo).
- **Esquecer a despenalização** (JECRIM, transação, sursis processual, ANPP) e a **prescrição** (penas baixas prescrevem rápido).
- Admitir **concursos artificiais** (com estelionato/falsidade) sem examinar consunção.
- **Inventar súmula/precedente** — passar tudo pelo Citation Gate.

## Checklist da defesa

- [ ] Qual **tipo penal exato** (282, 283, 284) — ou **contravenção** do art. 47 da LCP — a conduta configura?
- [ ] A profissão está **dentro do rol** do 282 (médico/dentista/farmacêutico)? Se não -> desclassificar.
- [ ] O agente era **habilitado** (e a acusação prova que excedeu limites) ou **leigo**?
- [ ] Nos crimes habituais (282/284), há **prova de habitualidade** — ou foi ato isolado (atípico)?
- [ ] No charlatanismo, houve **meio secreto/infalível** e **má-fé** — ou boa-fé/oferta lícita?
- [ ] Cabe tese de **atipicidade material** (liberdade religiosa/cultural; PICS)?
- [ ] **Perigo concreto** à saúde foi demonstrado, ou é mera presunção do tipo?
- [ ] **Prescrição** verificada na `calculadora-prescricao` (penas baixas)?
- [ ] Institutos **despenalizadores** avaliados (transação/sursis/ANPP) e ponderados contra a absolvição?
- [ ] **Concursos** com estelionato/falsidade examinados (consunção/crime único)?
- [ ] **Citações** conferidas no gate `jurisprudencia-stj-stf` / `verificacao-citacoes`?

## Nota de conformidade

- **Polo:** esta skill é de **DEFESA**. Em atuação **acusatória** (Ministério Público), o raciocínio se inverte — o ônus de demonstrar habitualidade, elementar do tipo e perigo recai sobre a acusação.
- **Revisão humana obrigatória:** este material é apoio à preparação; toda tese, enquadramento e peça são **hipóteses a confirmar** pelo advogado responsável (CED/EAOAB). A responsabilidade é sempre profissional.
- **Citation Gate:** nenhuma súmula, tese ou acórdão citado de memória — tudo pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA. **Omitir vence inventar.**
- **Skills correlatas:** capítulo inteiro dos crimes contra a saúde pública em `defesa-crimes-saude-publica`; desclassificação para contravenção em `contravencoes-penais`; cálculo em `calculadora-prescricao`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
