---
name: execucao-incidente-cumprimento-pena-estrangeiro-transferencia
description: >-
  Use na dimensão INTERNACIONAL da execução penal — transferência de pessoa condenada para cumprir
  pena no país de origem (TIPC/tratados), execução no Brasil de sentença penal estrangeira
  (homologação no STJ), expulsão do estrangeiro que cumpre pena e a interface com
  progressão/livramento, e cooperação jurídica internacional (auxílio direto x carta rogatória).
  Gatilhos: transferência de preso estrangeiro, transferência de… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal, cooperacao-internacional]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-incidente-cumprimento-pena-estrangeiro-transferencia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-incidente-cumprimento-pena-estrangeiro-transferencia", "execucao incidente", "estrangeiro transferencia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Execução Penal e o Estrangeiro — Transferência Internacional, Sentença Estrangeira e Expulsão

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

Esta skill orienta a **dimensão internacional da execução penal**: (1) a **transferência de pessoas condenadas** (TIPC) para cumprir pena no país de que são nacionais; (2) a **execução no Brasil de sentença penal estrangeira** (via homologação no STJ); (3) a **expulsão do estrangeiro** que cumpre pena e sua interface com os benefícios da execução; e (4) a **cooperação jurídica internacional** que instrumentaliza tudo isso. É tema de nicho, porém de alto valor — e **não se confunde** com a remoção entre unidades prisionais internas (essa é a skill `transferencia-direitos-preso`).

> **Lição central:** o primeiro erro é confundir institutos. **Transferência de execução ≠ extradição ≠ expulsão ≠ deportação.** A transferência é benefício humanitário/ressocializador (cumprir a pena perto da família e da própria língua); a expulsão é medida administrativa que retira o estrangeiro do território após a pena; a extradição entrega alguém a outro Estado para ser processado ou cumprir pena lá. **Identifique o instituto certo ANTES de peticionar** — cada um tem base legal, autoridade competente, rito e efeitos distintos.

> **Cautela de vigência (obrigatória antes de citar):** confira a **Lei de Migração**, o **Decreto 9.199/2017** e o tratado aplicável. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução penal. Todo tratado, súmula, tema ou acórdão passa pelo Citation Gate. Na dúvida, **omitir vence inventar**.

> **Gate P0 do art. 112:** se a execução transferida exigir percentual, lapso ou data de progressão, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte fontes oficiais no mesmo dia e registre direito intertemporal, decisões aplicáveis e revisor humano. Incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; não calcular benefício.

## Os quatro cenários (mapa de decisão)

```
1) Condenado ESTRANGEIRO no Brasil quer cumprir pena no país de origem?
   → TRANSFERÊNCIA DE PESSOA CONDENADA (TIPC). Precisa de: tratado, dupla
     incriminação (fato punível nos dois países), consentimento do condenado,
     sentença transitada em julgado, saldo de pena mínimo. Autoridade central:
     Ministério da Justiça (DRCI). Via administrativa + judicial.

2) Condenado BRASILEIRO preso no exterior quer cumprir pena no Brasil?
   → Mesma TIPC, sentido inverso. Brasil recebe a execução; adapta a pena ao
     ordenamento interno (não reexamina o mérito).

3) Sentença penal ESTRANGEIRA precisa produzir efeitos no Brasil (ex.: para
   reincidência, reparação civil, ou executar a própria pena aqui)?
   → HOMOLOGAÇÃO DE SENTENÇA ESTRANGEIRA no STJ (CF, art. 105, I, "i";
     art. 9º CP; arts. 787-790 CPP) — juízo de delibação, não de mérito.

4) Estrangeiro condenado deve deixar o país após a pena?
   → EXPULSÃO (Lei 13.445/2017, arts. 54-60) — medida administrativa do
     Ministério da Justiça, com interface na execução (art. 95 LEP).
```

## Base legal

- **CF, art. 5º, LI e LII** — brasileiro nato não se extradita; não se extradita por crime político/de opinião. (Baliza os limites da cooperação.)
- **CF, art. 105, I, "i"** — competência do **STJ** para **homologar sentença estrangeira** e conceder **exequatur** a cartas rogatórias.
- **Art. 9º do CP** — a sentença estrangeira pode ser **homologada** no Brasil para obrigar à **reparação do dano** e a outros efeitos civis, e para sujeitar a **medida de segurança**; a homologação para reparação depende de **pedido da parte interessada**, e para medida de segurança, de **tratado ou requisição do Ministro da Justiça**.
- **Art. 8º do CP** — pena cumprida no estrangeiro **atenua** a pena imposta no Brasil pelo mesmo crime, ou nela é **computada**, quando idênticas (regra de detração internacional — ver skill `execucao-detracao-penal`).
- **CPP, arts. 787 a 790** — rito da homologação de sentença estrangeira e da execução dos seus efeitos.
- **Lei 13.445/2017 (Lei de Migração)** — **arts. 54 a 60** (expulsão: hipóteses, impedimentos, prazo); **arts. 81 a 99** (extradição, para distinguir); **art. 100 e ss.** (transferência de execução da pena e transferência de pessoa condenada). Regulamento: **Decreto 9.199/2017**.
- **LEP, art. 95** — quando o estrangeiro estiver sujeito a expulsão, esta não se efetiva sem a conclusão do processo/cumprimento da pena, salvo determinação em contrário (interface execução × expulsão).
- **Tratados de transferência de pessoas condenadas** — bilaterais (ex.: com diversos países) e multilaterais (ex.: convenções regionais/temáticas). **A existência e os termos do tratado aplicável a cada par de países devem ser confirmados** via `jurisprudencia-stj-stf` / fontes oficiais do MJ (DRCI).
- **Cooperação jurídica internacional** — **auxílio direto** e **carta rogatória** como veículos; **DRCI/MJ** como autoridade central em regra.

> **Convencionalidade.** O Pacto de San José da Costa Rica (art. 5º, dignidade e finalidade ressocializadora da pena) e as Regras de Mandela (alocação próxima ao meio de reinserção) reforçam o fundamento humanitário da transferência — úteis como pano de fundo argumentativo.

## Cenário 1-2 — Transferência de Pessoas Condenadas (TIPC)

A TIPC permite que o condenado cumpra o restante da pena no país de sua nacionalidade, aproximando-o da família, da língua e do meio social — finalidade **ressocializadora e humanitária**. É via de **mão dupla**: o Brasil pode **transferir** o estrangeiro preso aqui e **receber** o brasileiro preso lá.

### Requisitos típicos (conferir no tratado concreto)

1. **Existência de tratado** (bilateral/multilateral) entre os dois Estados — ou base em reciprocidade, quando admitida.
2. **Dupla incriminação** — o fato deve ser crime **nos dois** ordenamentos.
3. **Sentença transitada em julgado** (em regra) — não cabe transferência de preso provisório.
4. **Consentimento do condenado** (ou de seu representante legal) — a transferência **depende da vontade** do apenado; é benefício, não imposição.
5. **Saldo mínimo de pena** a cumprir (muitos tratados exigem, ex.: mais de determinado período restante).
6. **Concordância dos dois Estados** (de execução e de condenação) — decisão discricionária soberana de cada um.
7. **Ausência de óbices** (ex.: pena/medida incompatível com o ordenamento do Estado receptor).

### Efeito no Estado receptor — continuação x conversão

Recebida a execução, o Estado que passa a executar **não reexamina o mérito** da condenação (respeito à coisa julgada estrangeira). Adapta a pena ao seu ordenamento por um de dois modelos, conforme o tratado:
- **Continuação da execução:** mantém a natureza e a duração da pena tal como imposta (com eventual redução ao teto legal interno, se exceder).
- **Conversão da sanção:** converte a pena estrangeira numa pena interna equivalente, sem agravá-la.

Em qualquer modelo, **a pena não pode ser agravada** e os **benefícios da execução (progressão, livramento, remição)** passam a reger-se pela **lei do Estado que executa** — no Brasil, a LEP.

### Fluxo (Brasil transfere estrangeiro daqui) — simplificado

```
1) Requerimento (do condenado, de seu representante, ou de ofício) →
   Autoridade Central (DRCI/MJ).
2) Instrução: cópia da sentença/trânsito, cálculo de pena, consentimento
   expresso e informado do condenado, situação migratória.
3) Análise dos dois Estados (condenação e execução) + tratado aplicável.
4) Decisão administrativa (concordância) e, na sequência, providências
   judiciais na execução (comunicação ao juízo da VEP, guia, entrega).
5) Traslado sob custódia; a execução prossegue no país de destino.
```

> **Papel da defesa.** Instruir o requerimento com **consentimento livre e informado**, **cálculo de pena atualizado**, **prova da nacionalidade** e demonstração do preenchimento dos requisitos do tratado; acompanhar a tramitação administrativa (MJ/DRCI) **e** a judicial (VEP); zelar para que os **benefícios já adquiridos** no Brasil sejam computados/comunicados; e verificar se a transferência é, no caso concreto, mais favorável que permanecer (nem sempre é — comparar regimes de execução).

## Cenário 3 — Homologação de sentença penal estrangeira (STJ)

Para que uma sentença penal estrangeira produza efeitos no Brasil, exige-se, em regra, **homologação pelo STJ** (CF, art. 105, I, "i"), em **juízo de delibação** — verifica-se o cumprimento de requisitos formais e a compatibilidade com a ordem pública, **sem reexame do mérito**.

### Para que serve a homologação

- **Reparação do dano e efeitos civis** (art. 9º, I, CP) — depende de **pedido da parte interessada**.
- **Sujeição a medida de segurança** (art. 9º, II, CP) — depende de **tratado de extradição** com o país de origem da sentença **ou**, na falta, de **requisição do Ministro da Justiça**.
- **Efeitos penais reflexos** (ex.: caracterização de **reincidência** — a condenação no estrangeiro por fato também punível no Brasil pode gerar reincidência, art. 63 CP, e há discussão sobre a necessidade ou não de homologação para esse efeito específico — **confira o entendimento atual** via `jurisprudencia-stj-stf`).

### Requisitos da delibação (conferir no rito atual)

1. Sentença **transitada em julgado** e emanada de autoridade competente.
2. **Citação regular** da parte (ou revelia legalmente verificada).
3. Autenticidade e **tradução** por tradutor oficial/juramentado; chancela consular quando exigível.
4. **Compatibilidade com a ordem pública, a soberania e os bons costumes** (limite material da delibação).

> **O que a homologação NÃO faz.** Não converte, por si, o Brasil em executor da pena **privativa de liberdade** estrangeira — a execução da pena corporal aqui, quando cabível, passa pela **transferência de execução** (Lei de Migração/tratado), não pela mera homologação civil do art. 9º CP. Não confundir os dois trilhos.

## Cenário 4 — Expulsão do estrangeiro que cumpre pena

A **expulsão** (Lei 13.445/2017, arts. 54 e ss.) é **medida administrativa** do Ministério da Justiça que retira do território e impede o reingresso do estrangeiro, cabível após **condenação com sentença transitada em julgado** por determinados crimes. **Não é pena** nem efeito automático da condenação — é ato administrativo autônomo, sujeito a **contraditório** e a **impedimentos legais**.

### Impedimentos à expulsão (art. 55 — conferir redação vigente)

Não se expulsa quando, entre outras hipóteses:
- a medida **configurar extradição** inadmitida pela lei brasileira;
- o expulsando tiver **filho brasileiro** sob sua guarda/dependência econômica ou socioafetiva, ou **cônjuge/companheiro** brasileiro (situação de dependência/convivência), nas condições da lei;
- tiver ingressado no Brasil até certa idade e residir no país há tempo relevante (conferir os marcos etários/temporais na redação vigente).

> **Teses de defesa contra a expulsão:** demonstrar **impedimento legal** (filho/cônjuge brasileiro dependente, radicação antiga, base socioafetiva — Súmula 1/STF, notória, veda a expulsão de estrangeiro casado com brasileira ou com filho brasileiro dependente, nos termos que a jurisprudência atualizou — **confira o alcance atual** via `jurisprudencia-stj-stf`); atacar o **devido processo** do inquérito de expulsão; invocar a **unidade familiar** (CF, art. 226) e a dignidade.

### Interface com a execução (art. 95 LEP)

- A expulsão, em regra, **não se efetiva antes** do cumprimento da pena (ou do processo), salvo determinação em contrário — o estrangeiro **cumpre a pena aqui** e só então é expulso.
- O **decreto de expulsão pendente** costuma ser invocado pela acusação/administração como **óbice a benefícios** (saída temporária, regime aberto, livramento) sob o argumento de risco de fuga. **Contra-tese defensiva:** a expulsão é medida **futura e condicionada**; a existência de decreto expulsório **não impede, por si só**, a progressão de regime nem o livramento condicional — o mérito da execução se afere pelos requisitos objetivos e subjetivos da LEP, não pela situação migratória (**tese consolidada em jurisprudência — confira o estado atual** via `jurisprudencia-stj-stf`).
- **Livramento condicional do estrangeiro com expulsão decretada:** discute-se sua compatibilidade; a orientação mais garantista admite o livramento, pois negar benefícios só pela nacionalidade viola a **isonomia** (CF, art. 5º, *caput*). **Verificar o entendimento vigente.**

## Distinções que não podem faltar (quadro)

| Instituto | Natureza | Autoridade | Sentido | Efeito central |
|---|---|---|---|---|
| **Transferência de pessoa condenada (TIPC)** | Cooperação humanitária | MJ/DRCI + VEP; tratado | Bidirecional | Cumprir a pena no país de origem |
| **Homologação de sentença estrangeira** | Jurisdicional (delibação) | **STJ** | Sentença estrangeira → efeitos no Brasil | Reparação civil, medida de segurança, efeitos reflexos |
| **Extradição** | Cooperação penal | STF (passiva) / MJ | Entregar pessoa a outro Estado | Processar/executar pena **lá** |
| **Expulsão** | Administrativa | MJ | Retirar estrangeiro do Brasil | Sair do território após a pena |
| **Deportação** | Administrativa | PF/MJ | Retirar por irregularidade migratória | Saída por situação migratória irregular |
| **Entrega (TPI)** | Direito internacional | STF/TPI | Entregar ao Tribunal Penal Internacional | Distinta de extradição (não é entre Estados) |

## Teses (defensivas e contra-teses)

- ➡️ **(Defesa) Direito à transferência como corolário da ressocialização.** Preenchidos os requisitos do tratado e havendo consentimento, a transferência realiza a finalidade da pena (CF; Pacto de San José) — pleitear a instrução e o encaminhamento pelo MJ/DRCI, com acompanhamento na VEP.
- ➡️ **(Defesa) Decreto de expulsão não obsta benefícios.** A situação migratória não integra os requisitos do art. 112 da LEP nem do livramento; negar progressão/saída/livramento só pela nacionalidade ou pela expulsão pendente viola a **isonomia** (confirmar jurisprudência).
- ➡️ **(Defesa) Impedimento legal à expulsão.** Filho/cônjuge brasileiro dependente, radicação antiga ou base socioafetiva impedem a expulsão (Lei 13.445/2017, art. 55; Súmula 1/STF, conferir alcance atual).
- ➡️ **(Defesa) Detração internacional.** Pena cumprida no estrangeiro pelo mesmo fato **atenua ou é computada** (art. 8º CP) — invocar na liquidação (ver `execucao-detracao-penal`).
- ➡️ **(Defesa) Delibação não reexamina mérito.** Na homologação, impugnar apenas os requisitos formais e a ofensa à ordem pública — não se rediscute o mérito da condenação estrangeira, mas também **não se importam efeitos incompatíveis** com a ordem pública brasileira.
- ⚔️ **(Contra-tese / acusação ou administração):** decreto de expulsão como fator de risco de fuga a justificar cautela na concessão de saídas; exigência de homologação prévia para reconhecer reincidência por condenação estrangeira. **Rebater com a jurisprudência atual e a isonomia.**

## Cooperação jurídica internacional — o veículo

- **Autoridade Central:** em regra o **DRCI/MJ** (Departamento de Recuperação de Ativos e Cooperação Jurídica Internacional) — canaliza pedidos ativos e passivos.
- **Auxílio direto:** cooperação sem juízo de delibação prévio, para atos que não demandem exequatur (ex.: obtenção de documentos, instrução, providências).
- **Carta rogatória:** para atos que dependem de **exequatur do STJ** (CF, art. 105, I, "i").
- **Escolha do veículo** depende do tratado aplicável e da natureza do ato — confirmar caso a caso.

## Erros comuns / anti-padrões

- **Confundir os institutos** (transferência × extradição × expulsão × deportação × entrega) — o erro mais grave; cada um tem autoridade e rito próprios.
- **Peticionar transferência de preso provisório** — em regra exige-se **trânsito em julgado**.
- **Esquecer o consentimento do condenado** — a TIPC **depende da vontade** do apenado.
- **Ignorar a existência (ou não) de tratado** aplicável ao par de países — sem base convencional, muda a via.
- **Tratar a expulsão como automática** ou como pena — é ato administrativo autônomo, com impedimentos e contraditório.
- **Aceitar que o decreto de expulsão barre progressão/livramento** — em regra **não barra** (isonomia).
- **Confundir homologação de efeitos civis (art. 9º CP) com execução da pena corporal** estrangeira no Brasil — trilhos distintos.
- **Endereçar a homologação ao juízo errado** — é competência **originária do STJ**, não do juízo da execução.
- **Deixar de computar a detração internacional** (art. 8º CP) na liquidação.
- **Citar tratado, súmula ou acórdão de memória** — sempre pelo gate `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Instituto correto **identificado** (transferência / homologação / expulsão / extradição / deportação / entrega)?
- [ ] **Tratado aplicável** ao par de países localizado e conferido (ou definida a via alternativa)?
- [ ] Na TIPC: **trânsito em julgado**, **consentimento** do condenado, **dupla incriminação**, **saldo mínimo** e **concordância dos dois Estados** verificados?
- [ ] **Autoridade competente** correta (MJ/DRCI na transferência; **STJ** na homologação; MJ na expulsão)?
- [ ] Na homologação: requisitos de **delibação** (trânsito, citação, tradução, ordem pública) atendidos?
- [ ] **Impedimentos à expulsão** (art. 55) verificados — filho/cônjuge brasileiro, radicação?
- [ ] **Benefícios da execução** (progressão, livramento, saída) assegurados apesar de expulsão pendente?
- [ ] **Detração internacional** (art. 8º CP) computada na liquidação?
- [ ] Redação vigente da **Lei 13.445/2017**, do **Decreto 9.199/2017** e das Leis **14.843/2024, 15.358/2026 e 15.402/2026** conferida?
- [ ] Todo tratado/súmula/tese/acórdão passou pelo gate `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação, não substitui o juízo profissional nem a leitura do caso concreto, do tratado aplicável e da situação migratória do assistido. A responsabilidade pela peça e pela estratégia é sempre do **advogado** (CED, art. 2º; Provimento 205/2021 quanto à comunicação/publicidade). No Ministério Público, observar o **CNMP**; na Defensoria, a **LC 80/94**.
- **Verificação de citações:** nenhuma súmula, tema, tese, tratado ou acórdão citado de memória — tudo passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Prefira ensinar a tese e o dispositivo a arriscar um número de julgado.
- **Sigilo e LGPD:** dados do assistido, situação migratória e documentos consulares nunca em repositório público (`acervo/casos/` é gitignored).

## Lembretes finais

- **Identifique o instituto primeiro** — transferência ≠ extradição ≠ expulsão ≠ deportação ≠ entrega.
- **TIPC** = benefício humanitário, bidirecional, **depende de tratado e de consentimento**; a execução no destino **não reexamina o mérito** e **não agrava** a pena.
- **Homologação de sentença estrangeira** = competência **do STJ** (CF, art. 105, I, "i"; art. 9º CP), em **delibação**, sem reexame de mérito.
- **Expulsão** = ato administrativo do MJ, com **impedimentos** (art. 55) e **interface** com a execução (art. 95 LEP); **não é pena** e **não barra, por si, benefícios**.
- **Detração internacional** (art. 8º CP) — computar a pena cumprida no exterior.
- **Cooperação** via **DRCI/MJ**, por **auxílio direto** ou **carta rogatória** (exequatur do STJ).
- **Conferir vigência** da Lei de Migração, do Decreto 9.199/2017, das Leis 14.843/2024, 15.358/2026 e 15.402/2026 e de todo precedente antes de peticionar.

**Padrão de redação:** ao redigir a peça (requerimento de transferência, pedido de homologação, defesa em inquérito de expulsão, impugnação de óbice a benefício), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
