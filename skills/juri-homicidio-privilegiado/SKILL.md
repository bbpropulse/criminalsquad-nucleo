---
name: juri-homicidio-privilegiado
description: >-
  Use ao construir e quesitar a tese subsidiária de HOMICÍDIO PRIVILEGIADO no Tribunal do Júri —
  relevante valor moral ou social, ou domínio de violenta emoção logo em seguida a injusta
  provocação da vítima (art. 121, §1º, CP) — como causa de diminuição de pena (1/6 a 1/3), sua
  tradução em quesito de causa de diminuição (art. 483, IV, CPP) e a
  compatibilidade/incompatibilidade com qualificadoras. Gatilhos: homicídio… Não use para decisão
  final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, peca, tese]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-homicidio-privilegiado"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-homicidio-privilegiado", "juri homicidio", "homicidio privilegiado"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Homicídio Privilegiado no Júri (art. 121, §1º, CP)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **construção da tese de homicídio privilegiado** e a sua **tradução em quesito** perante o Conselho de Sentença. O privilégio do art. 121, §1º, do CP é uma **causa de diminuição de pena** (não uma qualificadora, não uma excludente): reconhecido pelos jurados, **reduz a pena de 1/6 a 1/3**. É a **tese subsidiária mais comum** em homicídios passionais e de contexto — opera quando a absolvição (negativa de autoria, legítima defesa, quesito genérico do §2º) é improvável, garantindo redução expressiva mesmo em caso de condenação.

> **Lição central:** o privilégio **não absolve, reduz**. Ele entra como **quesito de causa de diminuição (art. 483, IV, CPP)**, votado **depois** do quesito genérico de absolvição e **antes** das qualificadoras. Sustentar o privilégio em plenário e **não o quesitar** é nulidade por cerceamento da plenitude de defesa. A pergunta estratégica não é "absolve?", é "**se condenar, condena por quanto?**".

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 121, §1º e §2º do CP e dos arts. 483-484 do CPP na fonte oficial. A tese da (in)compatibilidade entre privilégio e qualificadoras (homicídio privilegiado-qualificado) tem entendimento consolidado no STF/STJ, mas **numeração de acórdão, súmula e tema deve passar pela skill `jurisprudencia-stj-stf`** antes de ir para a peça — jurisprudência inventada por IA gera sanção real. Na dúvida, ensine a tese e o dispositivo; omita o número.

## Base legal

- **Art. 121, §1º, CP** — a causa de diminuição: homicídio cometido "por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima" → pena reduzida **de um sexto a um terço**.
- **Art. 121, §2º, CP** — as qualificadoras (motivo torpe, fútil; meio cruel; recurso que dificultou a defesa da vítima — surpresa/emboscada/dissimulação etc.). O ponto sensível é a **convivência** entre o §1º e as qualificadoras do §2º.
- **Art. 483, IV, CPP** — o **quesito da causa de diminuição** alegada pela defesa, votado **após** o quesito genérico de absolvição (art. 483, III e §2º) e **antes** das qualificadoras (art. 483, V).
- **Art. 65, III, "a" e "c", CP** — atenuantes correlatas (motivo de relevante valor social/moral; violenta emoção provocada por ato injusto da vítima). **Não confundir** com o privilégio: a atenuante genérica do art. 65 é para o **juiz togado** e não tem o mesmo requisito temporal estrito; o privilégio do §1º é **causa de diminuição** decidida pelos **jurados**. Se os jurados negarem o privilégio, ainda cabe pedir a atenuante ao juiz-presidente na dosimetria.
- **Art. 28, I, CP** — a emoção e a paixão **não excluem** a imputabilidade. O privilégio é o "meio-termo" legal: a emoção não isenta de pena, mas, na forma qualificada do §1º, a reduz.

## As três hipóteses do §1º — requisitos de cada uma

O privilégio tem **três portas de entrada**. Basta **uma**. Identifique qual (ou quais) o caso concreto abre e construa a prova em torno dela.

### 1. Relevante valor social
O motivo do crime atende a um **interesse coletivo, da comunidade** (ex.: matar o traidor da pátria, o delator que expõe a comunidade). É a hipótese **mais rara**. O valor é aferido por **critério objetivo-social**, não pela ótica pessoal do agente.

### 2. Relevante valor moral
O motivo, embora individual, é **nobre e aprovado pela moral média** (ex.: a chamada eutanásia — matar por piedade quem sofre de doença incurável e dores atrozes; matar o estuprador do filho). Valor **ético-individual** elevado. A jurisprudência exige que o motivo seja **relevante** — a mera vingança ou o ciúme comum **não** o configuram.

### 3. Violenta emoção logo em seguida a injusta provocação da vítima
A hipótese **mais frequente** (homicídio passional/de contexto). Exige **três elementos cumulativos**:
1. **Violenta emoção** — não mera irritação; um **choque emocional intenso** que perturba o domínio de si (não a ponto de excluir a imputabilidade — aí seria art. 26; o privilégio pressupõe **domínio**, ainda que abalado).
2. **Injusta provocação da vítima** — a **própria vítima** provocou, e a provocação foi **injusta** (não precisa ser agressão atual, senão seria legítima defesa; basta o ato provocador injusto — ofensa grave, humilhação, flagrante de adultério na visão clássica).
3. **Reação "logo em seguida"** — **imediatidade**. O crime deve seguir a provocação **sem intervalo relevante** que permita o esfriamento do ânimo. Se houve tempo para deliberar/premeditar, cai o "domínio de violenta emoção" (pode restar, quando muito, a atenuante do art. 65, III, "c", que **não** exige o "logo em seguida").

> **Distinção crítica — privilégio × legítima defesa × atenuante.**
> - **Legítima defesa (excludente, absolve):** agressão **atual ou iminente** e reação **proporcional** → afasta o crime. Se há agressão em curso, a tese principal é a defesa; o privilégio é subsidiário.
> - **Privilégio (causa de diminuição, reduz):** já **não há** agressão atual (senão seria defesa) — há **provocação injusta** anterior + reação emocional imediata.
> - **Atenuante do art. 65, III (dosimetria, com o juiz):** violenta emoção provocada por ato injusto da vítima **sem** o requisito estrito do "logo em seguida" (**"sob a influência"**, não "sob o domínio"). Rede de segurança quando os jurados negam o §1º.

## O privilégio como quesito — art. 483, IV, CPP

A tese só vale se **virar pergunta ao Conselho**. A skill `juri-quesitacao` ensina a ordem; aqui está a **posição e a redação** do quesito do privilégio.

```
ORDEM DE VOTAÇÃO (art. 483 CPP):
1º  Materialidade                         (I)
2º  Autoria/participação                  (II)
3º  "O jurado absolve o acusado?"         (III + §2º)  ← genérico
4º  CAUSA DE DIMINUIÇÃO — o PRIVILÉGIO    (IV)         ← AQUI
5º  Qualificadora / causa de aumento      (V)
```

- O quesito do privilégio **só é votado se** superados materialidade e autoria (afunilamento do §1º) **e** respondido "NÃO" ao quesito genérico de absolvição (§2º) — ou seja, **decidida a condenação**, pergunta-se **por qual pena**.
- **Um quesito para cada hipótese sustentada.** Se a defesa alegou tanto relevante valor moral quanto violenta emoção, cada uma é, em regra, **quesito próprio** (proposições simples, art. 482, par. único — vedado o quesito complexo). Reunir as três hipóteses numa só pergunta é **quesito complexo**, impugnável.
- **Redação (ilustrativa — a redação real é do juiz-presidente, decorre da pronúncia e dos debates):**

```
QUESITO — CAUSA DE DIMINUIÇÃO (privilégio) — art. 483, IV

[Hipótese: violenta emoção após injusta provocação]
"O acusado cometeu o crime sob o domínio de violenta emoção, logo em
 seguida a injusta provocação da vítima [descrever a provocação]?"
   → SIM (mais de 3 votos) → incide a redução de 1/6 a 1/3.

[Hipótese: relevante valor moral]
"O acusado cometeu o crime impelido por motivo de relevante valor moral
 [descrever o motivo]?"
   → SIM → incide a redução.
```

- **Impugnação e ata.** No momento do **art. 484** (leitura do questionário, antes da votação), a defesa **exige** que a tese sustentada em plenário esteja quesitada; a **omissão** deve ser **requerida e consignada em ata** — sem o registro, preclui e enfraquece a apelação por nulidade (art. 593, III, "a"). Ver `juri-quesitacao`.

## A grande controvérsia — privilégio + qualificadora (homicídio privilegiado-qualificado)

Pode o homicídio ser, ao mesmo tempo, **privilegiado e qualificado**? A resposta depende da **natureza da qualificadora**.

- **Regra consolidada (compatível):** o privilégio (§1º, sempre **subjetivo** — motivo/estado anímico) **convive** com qualificadoras de natureza **OBJETIVA** (ligadas ao **meio** ou ao **modo** de execução — meio cruel, veneno, fogo; recurso que dificultou a defesa da vítima: surpresa, emboscada, dissimulação). É o **homicídio privilegiado-qualificado**, admitido pela jurisprudência dominante. Consequência prática: **não é hediondo** (a orientação majoritária afasta a hediondez do privilegiado-qualificado).
- **Incompatível:** o privilégio (subjetivo) **NÃO convive** com qualificadoras de natureza **SUBJETIVA** (ligadas ao **motivo**: torpe, fútil). Seria contradição lógica — o mesmo fato não pode ser, a um só tempo, de motivo **nobre** (privilégio) e de motivo **torpe/fútil** (qualificadora). Escolha uma linha: ou o motivo é relevante (privilégio), ou é torpe/fútil (qualificadora) — não ambos.

```
Qualificadora do §2º é...
   ├── OBJETIVA (meio/modo: cruel, veneno, fogo, surpresa, emboscada)
   │      → COMPATÍVEL com o privilégio → privilegiado-qualificado (não hediondo)
   └── SUBJETIVA (motivo: torpe, fútil)
          → INCOMPATÍVEL com o privilégio (contradição de motivo)
```

> **Sequência de quesitos daí decorrente.** Reconhecido o privilégio no quesito do art. 483, IV, os jurados **ainda votam** as qualificadoras (art. 483, V). Se a qualificadora sobrevivente for **objetiva**, forma-se o privilegiado-qualificado. Se for **subjetiva** e o privilégio foi reconhecido, há **incompatibilidade** a ser sanada — atenção à possível **contradição nas respostas (art. 490 CPP)**, que o juiz-presidente deve resolver reexplicando e submetendo novamente à votação. A defesa **aponta a contradição na hora** e consigna.

## Teses e contra-teses

**Teses (defesa):**
1. **Enquadrar o caso na hipótese certa** do §1º — não pedir "privilégio" genérico; **nomear** a porta (violenta emoção + injusta provocação / relevante valor moral / social) e provar seus elementos.
2. **Imediatidade** ("logo em seguida") — construir a **linha do tempo** demonstrando reação **sem esfriamento**; afastar premeditação.
3. **Injustiça da provocação** partindo **da vítima** — provar o ato provocador (testemunhas, mensagens, contexto de humilhação/traição/ofensa grave).
4. **Privilegiado-qualificado quando houver qualificadora objetiva** — sustentar a **compatibilidade** e, com ela, o **afastamento da hediondez** (reflexo direto na execução: percentuais de progressão, livramento).
5. **Incompatibilidade com qualificadora subjetiva** — se a acusação imputa motivo torpe/fútil, sustentar que **exclui** logicamente a torpeza/futilidade (motivo nobre).
6. **Rede de segurança** — negado o §1º pelos jurados, requerer ao **juiz-presidente**, na dosimetria, a **atenuante do art. 65, III, "a"/"c"** (não exige o "logo em seguida").
7. **Máximo da redução** — reconhecido o privilégio, pleitear a fração de **1/3** (topo), argumentando a intensidade do estado anímico/relevância do valor.

**Contra-teses (acusação) a antecipar:**
- **Mera irritação/ciúme comum** não é "violenta emoção" nem "relevante valor moral" — o ciúme, em regra, **não** privilegia (pode até ser lido como torpeza).
- **Intervalo temporal** — houve tempo para deliberar; não foi "logo em seguida"; premeditação afasta o domínio da emoção.
- **Provocação inexistente ou não injusta** — a vítima não provocou, ou o "provocado" foi o agressor.
- **Motivo torpe/fútil** — sustentar a qualificadora subjetiva, logicamente **incompatível** com o privilégio (a defesa rebate escolhendo a leitura do motivo nobre).

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos de lei** (art. 121, §1º e §2º, CP; arts. 483-484, 490, 593 CPP; art. 65, III, CP) podem ser citados livremente na redação vigente conferida.
- **Compatibilidade privilégio + qualificadora objetiva** e **afastamento da hediondez do privilegiado-qualificado** são entendimentos **consolidados** na jurisprudência do STF e do STJ — **mas cite a tese, não o número de cor**. Para **qualquer** HC/REsp/RE, informativo ou tema específico, marque **[NÃO VERIFICADO]** e confira na skill `jurisprudencia-stj-stf` antes de levar à peça. **Melhor faltar o precedente do que citar julgado inexistente.**
- Súmulas específicas sobre o tema, se invocadas, passam **obrigatoriamente** pela verificação — não afirme número/enunciado de memória.

## Erros comuns / checklist final

**Anti-padrões (evitar):**
- Tratar o privilégio como se **absolvesse** — ele **reduz** (1/6 a 1/3); a absolvição corre pelo quesito genérico do §2º.
- **Não quesitar** a tese sustentada em plenário (nulidade — art. 483, IV; consignar no art. 484).
- Confundir **privilégio** (jurados, "logo em seguida", domínio da emoção) com a **atenuante do art. 65, III** (juiz, "sob a influência", sem imediatidade estrita).
- Alegar privilégio por **ciúme/vingança comum** — em regra não configura relevante valor moral e pode reforçar a **torpeza**.
- Sustentar privilégio **e** qualificadora de **motivo** (torpe/fútil) na mesma linha — **incompatíveis** (contradição — art. 490).
- Esquecer que o privilegiado-qualificado (com qualificadora **objetiva**) tende a **afastar a hediondez** — reflexo relevante na execução.
- Citar número de acórdão/súmula **de memória**, sem passar por `jurisprudencia-stj-stf`.

**Checklist:**
- [ ] Identifiquei **qual hipótese** do §1º o caso abre (valor social / valor moral / violenta emoção)?
- [ ] Na violenta emoção: provei os **três elementos** (emoção intensa + injusta provocação **da vítima** + "logo em seguida")?
- [ ] A tese está **quesitada** como causa de diminuição (art. 483, IV), na **posição correta** (após o §2º, antes das qualificadoras)?
- [ ] **Um quesito por hipótese** (sem quesito complexo)?
- [ ] Analisei a **compatibilidade** com cada qualificadora imputada (objetiva = convive; subjetiva = incompatível)?
- [ ] Sustentei o **afastamento da hediondez** no privilegiado-qualificado, se cabível?
- [ ] Preparei a **rede de segurança** (atenuante do art. 65, III, ao juiz-presidente) para o caso de os jurados negarem o §1º?
- [ ] **Impugnação/consignação em ata** (art. 484) garantida, para preservar a apelação (art. 593, III, "a")?
- [ ] Toda súmula/precedente **verificado** via `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes do plenário?

## Nota de conformidade

Este material é **rascunho técnico de apoio, sob revisão humana obrigatória** — não substitui o juízo do advogado responsável nem a leitura do questionário concreto em plenário. A tese e a sua sustentação são atos privativos do advogado (**EAOAB e Código de Ética e Disciplina da OAB; Provimento 205/2021**, quando houver divulgação). **Citation Gate inegociável:** dispositivos de lei podem ser citados na redação vigente conferida; **todo** precedente, súmula, informativo ou tema específico passa pela skill `jurisprudencia-stj-stf` antes de ir à peça — na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao converter a tese em memoriais, quesitos ou razões de apelação, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão. Para a mecânica da quesitação, combine com `juri-quesitacao`; para a sustentação em plenário e as demais teses, com `juri-plenario-debates`.
