---
name: homologacao-sentenca-penal-estrangeira-stj
description: >-
  Use para requerer ou contestar a homologação de sentença penal estrangeira no STJ — juízo de
  delibação (CF, art. 105, I, i; CP, art. 9º; CPP, arts. 787-790; RISTJ) para reparação civil,
  medida de segurança, efeitos reflexos e reincidência. Gatilhos: homologação de sentença penal
  estrangeira, HDE, delibação, efeitos civis de sentença estrangeira, reincidência por condenação no
  exterior, medida de…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, cooperacao-internacional]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-homologacao-sentenca-penal-estrangeira-stj"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["homologacao-sentenca-penal-estrangeira-stj", "homologacao sentenca", "penal estrangeira"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Homologação de Sentença Penal Estrangeira no STJ (CF, art. 105, I, i; CP, art. 9º; CPP, arts. 787-790)

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

Esta skill orienta a atuação em **ação de homologação de sentença penal estrangeira (HDE)** perante o **STJ** — a via pela qual uma decisão penal proferida por autoridade estrangeira passa a produzir **determinados efeitos no Brasil**. Não se trata de novo julgamento nem de revisão do mérito: é **juízo de delibação**, meramente **formal**, em que o STJ verifica se a sentença preenche os requisitos de homologabilidade, sem reexaminar a justiça da condenação estrangeira. Serve tanto ao **requerente** (quem pede a homologação) quanto à **defesa/parte requerida** (que contesta).

> **Lição central:** o juízo é de **delibação**, não de mérito. O STJ **não reexamina prova, tipicidade ou justiça** da decisão estrangeira — só confere requisitos formais e o filtro de **ordem pública**. A defesa que tenta rediscutir a culpa erra a porta; a defesa forte ataca **requisito formal ausente** (trânsito em julgado, citação regular, tradução/chancela, competência da autoridade) ou **ofensa à ordem pública, à soberania e aos bons costumes**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 9º do CP**, dos **arts. 787-790 do CPP** e, sobretudo, das **normas processuais da HDE no Regimento Interno do STJ (RISTJ, arts. 216-A e ss.)** — o rito da homologação migrou do STF para o STJ com a **EC 45/2004** e é hoje disciplinado no RISTJ, com influência do **CPC/2015 (arts. 960-965)**. Confira também súmulas, temas e eventual overruling via a skill `jurisprudencia-stj-stf` antes de fundamentar a peça. **Não cite número de acórdão de memória.**

## Para que serve — os efeitos homologáveis (art. 9º do CP)

A sentença penal estrangeira, **por si só, não executa pena privativa de liberdade no Brasil** (isso se dá por outra via — transferência de pessoa condenada, ver `cooperacao-transferencia-pessoas-condenadas-tratado`). A homologação do art. 9º do CP tem finalidade **restrita**:

- **Art. 9º, I, CP — obrigar à reparação do dano, restituições e outros efeitos civis** (executar, no cível brasileiro, o dever de indenizar decorrente da condenação estrangeira). **Depende de pedido da parte interessada** (art. 9º, parágrafo único, "a").
- **Art. 9º, II, CP — sujeitar o condenado a medida de segurança**. **Depende de tratado de extradição** com o país de origem da sentença ou, na falta, de **requisição do Ministro da Justiça** (art. 9º, parágrafo único, "b").

> **Efeitos que INDEPENDEM de homologação.** Alguns efeitos penais da sentença estrangeira operam **sem** homologação — em especial a **reincidência** (art. 63 c/c art. 7º do CP: a condenação anterior no estrangeiro gera reincidência independentemente de homologação; ver **Súmula 420/STF**, conferir vigência) e a **detração** de pena cumprida no exterior. Nesses casos, discute-se a condenação estrangeira **incidentalmente** no processo brasileiro, não por HDE. **Distinção crucial de defesa:** se a acusação quer usar a condenação estrangeira só para reincidência, **não precisa** de HDE — atacar a prova documental da condenação, não a ausência de homologação.

## Base legal

- **CF, art. 105, I, "i"** — competência **originária do STJ** para homologar sentenças estrangeiras e conceder exequatur a cartas rogatórias (redação da **EC 45/2004**).
- **CP, art. 9º** — efeitos homologáveis (reparação civil; medida de segurança) e condições (pedido da parte; tratado ou requisição do Ministro da Justiça).
- **CP, arts. 7º e 63** — extraterritorialidade e reincidência por condenação no estrangeiro (efeitos que **independem** de homologação).
- **CPP, arts. 787 a 790** — procedimento clássico da homologação e da execução dos efeitos civis; **conferir compatibilização com o RISTJ e o CPC/2015**.
- **RISTJ, arts. 216-A e seguintes** — rito atual da HDE (petição, citação, contestação, atuação do MPF, decisão monocrática do Presidente ou colegiada da Corte Especial).
- **CPC/2015, arts. 960-965** — normas gerais da homologação de decisão estrangeira, aplicáveis subsidiariamente.
- **Lei de Introdução (LINDB), art. 17** — limite da **ordem pública, soberania e bons costumes**.

> A base é multifonte e o rito é **regimental**. Antes de peticionar, confirme qual norma processual rege o caso concreto (RISTJ + CPC/2015) e cheque a redação por `jurisprudencia-stj-stf`.

## Requisitos de homologabilidade (o que o STJ verifica na delibação)

Espelham o **art. 963 do CPC/2015** e o **RISTJ**. A defesa fiscaliza cada um; a ausência de qualquer um obsta a homologação:

1. **Proferida por autoridade competente** (juízo estrangeiro com jurisdição sobre a causa).
2. **Citação regular** do réu, ainda que verificada a revelia — ou revelia legalmente decretada (garantia do contraditório e da ampla defesa no processo de origem).
3. **Trânsito em julgado** (eficácia definitiva) da sentença estrangeira — **é o requisito mais atacável**; sentença ainda recorrível não se homologa.
4. **Tradução por tradutor oficial ou juramentado** no Brasil.
5. **Chancela / autenticação diplomática ou consular**, ou apostila (**Convenção de Haia — Apostila**), dispensada a legalização quando aplicável o tratado.
6. **Ausência de ofensa à ordem pública, à soberania nacional e aos bons costumes** (LINDB, art. 17; CPC, art. 963, VI) — inclui a vedação a decisão que ofenda a **coisa julgada** brasileira.

> **Filtro penal específico.** Além dos requisitos gerais, na esfera penal checa-se: (a) **dupla tipicidade** relevante quando o efeito buscado é medida de segurança; (b) a **condição do art. 9º, parágrafo único** (pedido da parte para efeito civil; tratado de extradição ou requisição do Ministro da Justiça para medida de segurança); (c) a compatibilidade da **pena/medida** com a ordem pública brasileira (ex.: penas incompatíveis com a CF, art. 5º, XLVII — não homologáveis nessa parte).

## Rito da HDE no STJ (linha do tempo)

```
1) Petição inicial (requerente) → distribuída à Presidência do STJ
2) Citação do requerido para CONTESTAR (prazo do RISTJ)
   ├── Contestação limitada: autenticidade dos documentos,
   │   inteligência da decisão e requisitos de homologabilidade
   │   (NÃO se discute o mérito da condenação estrangeira)
   └── Revelia → curador especial pode ser nomeado
3) Vista ao Ministério Público Federal (custos legis / possível impugnação)
4) Julgamento:
   ├── Sem contestação/incontroverso → decisão MONOCRÁTICA do Presidente
   └── Havendo contestação → COMPETÊNCIA da CORTE ESPECIAL do STJ
5) Homologada → executa-se os efeitos civis na Justiça Federal de 1º grau
   (art. 965 CPC; CPP, art. 790) OU aplica-se a medida de segurança
```

> **Onde se executa depois.** Homologada a sentença, a **execução dos efeitos civis** (reparação do dano) segue no **juízo federal de 1º grau** competente (art. 965, CPC; carta de sentença). A homologação **não é** a execução — é o título que a autoriza.

## Roteiro de atuação — REQUERENTE (quem pede a homologação)

Aplica-se ao **assistente de acusação / vítima** (para executar a reparação civil do art. 9º, I) ou ao **Estado requerente via tratado** (medida de segurança do art. 9º, II).

1. **Definir o efeito buscado** — reparação civil (art. 9º, I) ou medida de segurança (art. 9º, II)? Isso define a **condição de admissibilidade** (pedido da parte × tratado/requisição do MJ).
2. **Reunir e instruir**: cópia integral da sentença estrangeira com **certidão de trânsito em julgado**, **tradução juramentada**, **chancela/apostila**, prova da **citação regular** no processo de origem, e o tratado aplicável (se for o caso).
3. **Demonstrar cada requisito** do art. 963 do CPC / RISTJ, um a um, na inicial.
4. **Afastar preventivamente a ofensa à ordem pública** — mostrar compatibilidade da decisão com a CF e com a ordem pública brasileira.
5. **Delimitar o pedido**: homologação **para o efeito específico** (não pedir "homologação total" quando só se busca a reparação civil — o excesso convida à impugnação).

## Roteiro de defesa — REQUERIDO (quem contesta a homologação)

A contestação na HDE é **cognição limitada** (não se rediscute o mérito). As teses próprias:

1. **Ausência de trânsito em julgado** — sentença ainda recorrível ou sem certidão idônea de definitividade. Tese mais recorrente e frequentemente vencedora.
2. **Citação irregular / cerceamento de defesa no processo de origem** — réu não citado validamente, revelia sem as garantias mínimas do contraditório (afronta ao devido processo). É controle de **ordem pública processual**.
3. **Incompetência da autoridade estrangeira** — juízo sem jurisdição sobre a causa/pessoa.
4. **Vício documental** — falta de tradução juramentada, ausência de chancela/apostila, documento inautêntico ou incompleto (sentença sem fundamentação inteligível).
5. **Ofensa à ordem pública, soberania e bons costumes (LINDB, art. 17; CPC, art. 963, VI)** — inclui: pena/medida incompatível com a CF (ex.: caráter perpétuo, art. 5º, XLVII, "b"); dupla punição pelo mesmo fato já julgado no Brasil (**ofensa à coisa julgada nacional** — *ne bis in idem*); ausência de dupla tipicidade quando se busca medida de segurança.
6. **Falta da condição do art. 9º, parágrafo único** — para efeito civil, ausência de **pedido da parte interessada**; para medida de segurança, ausência de **tratado de extradição** ou de **requisição do Ministro da Justiça**.
7. **Prescrição** — do efeito civil (prescrição da pretensão executória civil) ou incompatibilidade temporal da medida.
8. **Homologação parcial** — quando só parte da sentença ofende a ordem pública, requerer que a homologação **exclua** a parcela viciada (delibação parcial), preservando o restante ou impugnando o todo, conforme a estratégia.

> **Erro comum da defesa:** gastar a contestação rediscutindo se o réu era culpado. **Não adianta** — o STJ não julga o crime. A energia vai para **requisito formal ausente** ou **ordem pública**.

## Teses e contra-teses (síntese)

| Tese (defesa/requerido) | Contra-tese (requerente) | Dispositivo-âncora |
|---|---|---|
| Sentença sem trânsito em julgado | Certidão idônea comprova a definitividade | CPC, art. 963, III; RISTJ |
| Citação irregular / revelia sem garantias | Citação regular conforme lei de origem; contraditório observado | CPC, art. 963, II |
| Ofensa à ordem pública (pena perpétua) | Homologação parcial, para o efeito civil compatível | LINDB, art. 17; CF, art. 5º, XLVII |
| *Ne bis in idem* — fato já julgado no Brasil | Fatos/efeitos distintos; coisa julgada não atingida | CPC, art. 963, VI; CF, art. 5º, XXXVI |
| Falta de pedido da parte (efeito civil) | Requerente é o legitimado (vítima/assistente) | CP, art. 9º, § único, "a" |
| Falta de tratado/requisição do MJ (medida de segurança) | Tratado de extradição vigente / requisição juntada | CP, art. 9º, § único, "b" |
| Reincidência exige homologação | Reincidência por condenação estrangeira **independe** de homologação | CP, arts. 7º e 63; Súm. 420/STF [conferir] |

## Estrutura da peça

**Se REQUERENTE (petição inicial de HDE):**
1. Endereçamento ao **Presidente do STJ** (art. 105, I, "i", CF; RISTJ, art. 216-A).
2. Qualificação das partes e do tratado/legitimação.
3. Dos fatos — a condenação estrangeira e o efeito buscado (art. 9º, I ou II, CP).
4. Do direito — demonstração, **requisito a requisito**, do art. 963 do CPC / RISTJ.
5. Da inexistência de ofensa à ordem pública.
6. Dos pedidos — citação do requerido, homologação **para o efeito específico**, e (após) expedição de carta de sentença para execução (art. 965, CPC).
7. Documentos: sentença + certidão de trânsito + tradução juramentada + chancela/apostila + prova de citação + tratado (se houver).

**Se DEFESA (contestação à HDE):**
1. Tempestividade (prazo do RISTJ) e endereçamento ao **Relator/Presidente**.
2. Preliminares de homologabilidade — atacar o **requisito formal ausente** (trânsito, citação, competência, documentos).
3. Mérito da delibação — **ordem pública** (LINDB, art. 17): pena incompatível com a CF, *ne bis in idem*, ausência de condição do art. 9º, § único.
4. Subsidiariamente — **homologação parcial** (excluir a parcela viciada).
5. Pedidos — não homologação, ou homologação parcial; requerer vista ao MPF.

## Cálculo de prazos e valores

Esta skill é **metodológica** e não faz cálculo determinístico. Quando o caso exigir:
- **Prazos processuais** (contestação, recursos internos do STJ) → conferir na **redação vigente do RISTJ** e apoiar a contagem na `calculadora-tempestividade`.
- **Prescrição** do efeito civil ou da pretensão → apontar o método e usar a `calculadora-prescricao` (conferir aplicabilidade ao efeito civil homologado).
- **Quantum reparatório** a executar → segue o valor **fixado na sentença estrangeira** (delibação não recalcula), com eventual conversão/atualização na execução; a fixação de indenização em condenação **brasileira** é matéria de `assistente-reparacao-quantum-387`, não desta skill.

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 420/STF** — "Não se homologa sentença proferida no estrangeiro sem prova do trânsito em julgado." **[CONFERIR redação e vigência via `jurisprudencia-stj-stf`.]**
- **Súmula 381/STF** — sobre não conhecimento de sentença estrangeira sem tradução/legalização. **[NÃO VERIFICADO — conferir número e teor.]**
- Jurisprudência da **Corte Especial do STJ** sobre limites da delibação, ordem pública e homologação parcial: **[NÃO VERIFICADO]** — não citar número de HDE/SEC/AgInt de memória; localizar e conferir via `jurisprudencia-stj-stf` antes de usar.
- Tese de que a **reincidência por condenação estrangeira independe de homologação** (CP, arts. 7º e 63): **ensine a tese e o dispositivo**; para número de precedente, `jurisprudencia-stj-stf`.

> **Citation Gate (inegociável):** dispositivos de lei e súmulas notórias podem ser citados com o cuidado de **conferir a redação vigente**. Para **qualquer** número de acórdão (HDE, SEC, AgInt, HC, REsp, RE), informativo ou tema repetitivo, marque **[NAO VERIFICADO]** e confirme via `jurisprudencia-stj-stf`. **Prefira ensinar a tese e o dispositivo a arriscar um número.** Súmula ou precedente inventado gera sanção real.

## Distinções que evitam erro (não confundir)

- **HDE (art. 9º, CP) × transferência de pessoa condenada** — a homologação **não executa pena privativa de liberdade** no Brasil; a execução de pena estrangeira segue a via da `cooperacao-transferencia-pessoas-condenadas-tratado` (tratado/MLAT), não a HDE.
- **HDE × carta rogatória (exequatur)** — a rogatória é **ato instrutório** (citação, oitiva, diligência) e recebe **exequatur**, não reconhecimento de decisão final; ver `carta-rogatoria-penal-exequatur-stj`.
- **HDE × auxílio direto** — o auxílio direto (`auxilio-direto-cooperacao-penal-mlat`) é cooperação sem juízo de delibação; não homologa decisão.
- **HDE × reparação em condenação brasileira** — o *quantum* do art. 387, IV, CPP (condenação **nacional**) é de `assistente-reparacao-quantum-387`; aqui o valor **vem** da sentença estrangeira.

## Checklist e anti-padrões

- [ ] Efeito buscado corretamente identificado (art. 9º, I — civil; art. 9º, II — medida de segurança)?
- [ ] Condição de admissibilidade presente (pedido da parte × tratado/requisição do MJ)?
- [ ] **Trânsito em julgado** comprovado por certidão idônea? (requisito mais atacado)
- [ ] **Tradução juramentada** e **chancela/apostila** (Haia) juntadas?
- [ ] **Citação regular** no processo de origem demonstrada?
- [ ] Filtro de **ordem pública** (LINDB, art. 17): pena compatível com a CF? sem *ne bis in idem*? sem ofensa à coisa julgada nacional?
- [ ] Endereçamento ao **STJ** (não ao STF — mudança da EC 45/2004) e rito conforme **RISTJ** conferido?
- [ ] **Não** se está rediscutindo o mérito da condenação estrangeira (isso não cabe na delibação)?
- [ ] **Não** se está exigindo homologação para efeito que **independe** dela (reincidência/detração)?
- [ ] Súmulas, temas e acórdãos conferidos via `jurisprudencia-stj-stf` antes de citar (números marcados como [NAO VERIFICADO] até confirmar)?

**Anti-padrões (evitar):**
- Endereçar a HDE ao **STF** (competência migrou para o STJ com a EC 45/2004).
- Rediscutir a culpa/mérito na contestação — a delibação **não** reexamina o julgamento estrangeiro.
- Pedir HDE para **executar pena privativa de liberdade** no Brasil (via errada — é transferência de condenado).
- Exigir homologação para gerar **reincidência** (esta independe de homologação — CP, arts. 7º e 63).
- Homologar decisão com **pena perpétua/incompatível com a CF** sem requerer a **delibação parcial** que exclua a parte viciada.
- Citar **número de acórdão** de HDE/SEC de memória — sempre passar por `jurisprudencia-stj-stf`.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação e **não substitui** o juízo do(a) advogado(a)/procurador(a) responsável, nem a leitura integral dos documentos do processo de origem.
- **Ética por polo.** Advocacia: **EAOAB + CED + Provimento 205/2021 (OAB)**. Ministério Público (quando a HDE for de iniciativa/atuação ministerial, inclusive o MPF como *custos legis*): **CNMP**. Defensoria: **LC 80/94**. Nesta matéria a atuação é **majoritariamente de defesa** (contestação à HDE) ou de **assistente/vítima** (execução do efeito civil) — **o roteador deve conferir o polo** no `company.md` antes de designar a peça.
- **Citation Gate.** Nenhuma súmula, tese ou precedente citado de memória: tudo passa por `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
