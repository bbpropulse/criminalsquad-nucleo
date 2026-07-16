---
name: estrategia-plea-negociacao-integrada-anpp-colaboracao
description: >-
  Use para DECIDIR, na fase pré-processual ou processual, qual instrumento negocial penal escolher —
  ANPP, transação penal, suspensão condicional do processo (sursis processual), colaboração premiada
  ou confissão simples — comparando cabimento, custo/benefício, timing e riscos. É a camada de
  decisão que fica ACIMA das peças (não redige o acordo; escolhe o caminho). Gatilhos: negociar ou
  litigar, vale a pena o acordo, ANPP x… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, acordo, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-estrategia-plea-negociacao-integrada-anpp-colaboracao"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["estrategia-plea-negociacao-integrada-anpp-colaboracao", "estrategia plea", "anpp colaboracao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Estratégia Integrada de Negociação Penal (art. 28-A CPP; Lei 9.099/95; Lei 12.850/13)

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

Esta skill é a **camada de decisão estratégica** sobre a justiça penal negocial: dado um caso concreto, ela orienta **qual instrumento escolher** — **ANPP** (acordo de não persecução penal), **transação penal**, **suspensão condicional do processo** (*sursis processual*), **colaboração premiada** ou **confissão simples** — e **quando** negociar, comparando cabimento, benefício, custo e risco de cada via. Ela **não redige** o acordo (isso é das skills de peça específicas); ela decide o **caminho** e prepara a conversa com o cliente e com a acusação.

> **Lição central:** o erro caro não é redigir mal o acordo — é escolher o instrumento errado ou negociar na hora errada. **Antes de qualquer coisa, cheque o cabimento de cada via pela pena mínima e pela natureza do crime**, porque é isso que abre ou fecha cada porta: transação (pena máxima ≤ 2 anos — infração de menor potencial ofensivo), *sursis* processual (pena mínima ≤ 1 ano), ANPP (pena mínima < 4 anos, sem violência/grave ameaça), colaboração (crimes graves/organização, onde o cliente tem informação a entregar). Instrumento certo, no momento certo, vence redação bonita da peça errada.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 28-A do CPP** (introduzido pela Lei 13.964/2019 — Pacote Anticrime), dos **arts. 76 e 89 da Lei 9.099/95** e da **Lei 12.850/2013** (colaboração premiada, alterada pela Lei 13.964/19). Requisitos, percentuais e vedações mudam; súmulas, temas de repercussão geral e overruling passam **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes de fundamentar. Na dúvida sobre um número de julgado, **omita antes de inventar**.

## Posição desta skill — só a DECISÃO, não a peça

- Esta skill **compara e decide**. A **execução** fica com: `anpp` (redige/discute o acordo de não persecução), `colaboracao-premiada` (redige/negocia a delação), e as skills de defesa por nicho.
- **Distinção da `decisao-recorrer-vs-negociar`:** aquela decide entre **recorrer/litigar** e **negociar** de forma genérica. Esta desce um nível: **assumido que negociar é opção, qual dos instrumentos negociais** entre si? É o comparativo interno da via consensual.
- Perspectiva **da defesa** (advocacia/Defensoria). O acordo é do MP; a defesa avalia, aconselha o cliente e negocia condições — mas **quem decide aceitar é sempre o cliente**, informado (autonomia do assistido; CED).

## Base legal (âncoras)

- **Art. 28-A do CPP** — ANPP: requisitos, condições, vedações, homologação e efeitos (confissão formal + pena mínima < 4 anos + crime sem violência ou grave ameaça).
- **Art. 76 da Lei 9.099/95** — transação penal (infração de menor potencial ofensivo: pena máxima ≤ 2 anos; aplicação imediata de pena restritiva/multa, sem admissão de culpa e sem reincidência gerada).
- **Art. 89 da Lei 9.099/95** — suspensão condicional do processo (*sursis* processual): crimes com **pena mínima ≤ 1 ano**; suspensão por 2 a 4 anos mediante condições; extinção da punibilidade ao fim do período de prova.
- **Lei 12.850/2013, arts. 3º-A a 7º** — colaboração premiada (redução de pena, perdão judicial, substituição por restritiva de direitos, não oferecimento de denúncia); negócio jurídico processual personalíssimo.
- **CP, art. 65, III, "d"** — confissão espontânea como atenuante genérica (a via mais simples, sem acordo, quando a prova já é robusta).
- **CF, art. 5º, LXIII, LV e LVII** — direito ao silêncio, contraditório/ampla defesa e presunção de inocência (limites e cautelas de toda negociação).

## Passo 0 — Triagem de conflito e legitimidade

Antes de comparar instrumentos:
1. **Conflito de interesses** (art. 17 EAOAB): em coautoria, um mesmo advogado negociando por dois corréus cujas versões colidem é temerário — especialmente em **colaboração**, onde um delata o outro. Cada colaborador deve ter defesa própria e independente.
2. **Polo e legitimidade:** esta skill é da **defesa**. A proposta de ANPP/transação/*sursis*/colaboração é ato do **Ministério Público** (na ação pública). A defesa **provoca, negocia condições e recomenda**, mas não substitui o titular da ação.
3. **Capacidade de decisão do cliente:** o cliente entende que confissão/colaboração são **irreversíveis** na prática? Sem compreensão real, não há decisão válida.

## Metodologia — 6 passos de decisão

### Passo 1 — Mapear o cabimento (o filtro que abre/fecha portas)

Cheque, para o crime imputado, o que a **pena** e a **natureza** permitem. Este é o filtro decisivo — a maioria das dúvidas se resolve aqui.

| Instrumento | Filtro de cabimento (regra geral) | Fase | Admite culpa? |
|---|---|---|---|
| **Transação penal** (art. 76) | Infração de menor potencial ofensivo — **pena máxima ≤ 2 anos** ou multa | Pré-processual (JECrim) | **Não** (não é confissão; não gera reincidência/maus antecedentes) |
| **Suspensão condicional do processo** (art. 89) | **Pena mínima ≤ 1 ano** | Após denúncia recebida, antes da instrução | **Não** admite culpa |
| **ANPP** (art. 28-A) | **Pena mínima < 4 anos**, crime **sem violência ou grave ameaça**, não sendo caso de arquivamento; investigado **confessa formal e circunstanciadamente** | Pré-processual (antes da denúncia) | **Sim** — exige confissão formal |
| **Colaboração premiada** (Lei 12.850) | Crimes graves / organização criminosa; o colaborador **tem informação útil** a entregar (identificar coautores, recuperar produto, prevenir crimes) | Qualquer fase (inclusive execução) | **Sim** — confissão + entrega de elementos |
| **Confissão simples** (CP, art. 65, III, "d") | Sempre disponível; útil quando a prova já é robusta e não há via negocial melhor | Qualquer fase | **Sim** — atenuante |

> **Regra de bolso do cabimento:** ordene mentalmente pela **pena mínima** — ≤ 1 ano abre *sursis*; < 4 anos (sem violência) abre ANPP; pena máxima ≤ 2 anos abre transação (JECrim). Se nada disso couber e o crime for grave com coautoria/organização, a via passa a ser **colaboração**. Se nem isso, resta a **confissão simples** como atenuante — ou o litígio puro.

### Passo 2 — Verificar as vedações (o que fecha a porta mesmo com pena compatível)

- **ANPP (art. 28-A, §2º):** vedado quando (i) cabível transação penal (a via mais branda prefere); (ii) réu **reincidente** ou com conduta criminal habitual/reiterada (salvo infrações insignificantes); (iii) ANPP, transação ou *sursis* concedidos nos **últimos 5 anos**; (iv) crime praticado no âmbito de **violência doméstica/familiar** ou contra a mulher por razões da condição de sexo feminino. **Crime com violência ou grave ameaça está de fora** por definição.
- **Transação / *sursis*:** aferir reincidência, antecedentes e requisitos subjetivos do art. 76, §2º, e do art. 89 (não estar sendo processado/condenado por outro crime; culpabilidade, antecedentes, conduta social favoráveis).
- **Colaboração:** exige **efetividade** e **voluntariedade**; sem informação nova e útil, não há benefício — delatar só o que já se sabe não gera prêmio.

### Passo 3 — Precificar o custo/benefício de cada via cabível

Para cada instrumento que passou nos passos 1–2, compare o **ganho** contra o **custo real**:

| Via | Benefício típico | Custo / renúncia | Efeito em reincidência/antecedentes |
|---|---|---|---|
| **Transação** | Encerra sem processo; pena restritiva/multa branda | Aceitar imposição imediata; abrir mão do JECrim | **Não** gera reincidência nem maus antecedentes; não consta como condenação |
| ***Sursis* processual** | Suspende o processo; **extingue a punibilidade** ao fim do período de prova (2–4 anos) | Cumprir condições por anos; risco de revogação | **Não** há condenação se cumprido |
| **ANPP** | Evita a denúncia e o processo; cumprido, **extingue a punibilidade** e **não gera reincidência nem maus antecedentes** (art. 28-A, §12–13) | **Confissão formal** nos autos; cumprir condições (reparar dano, prestar serviço, pagar prestação pecuniária etc.); descumprimento → denúncia com a confissão já nos autos | **Não** gera reincidência (cumprido) |
| **Colaboração** | Perdão judicial, redução até 2/3, substituição por restritiva, ou não denúncia | **Expor-se e a terceiros**; risco à segurança; irreversibilidade; dependência da homologação e da efetividade | Depende do prêmio pactuado |
| **Confissão simples** | Atenuante (art. 65, III, "d") — reduz a pena, mas há **condenação** | Admite culpa **sem** contrapartida negocial estruturada | **Gera** condenação (com atenuante) |

> **O custo mais subestimado é a confissão da ANPP.** Se o cliente **descumpre** as condições, o acordo é rescindido, a denúncia é oferecida — e a **confissão já está nos autos**. Só recomende ANPP a quem tem **capacidade real de cumprir** as condições até o fim. Um acordo descumprido é o pior dos mundos: confessou e será processado.

### Passo 4 — Timing (o mesmo caso vale mais barato mais cedo)

- **ANPP:** por definição **antes da denúncia** (fase de investigação/oferecimento). Oferecida a denúncia sem ANPP quando cabível, a defesa pode **provocar** o acordo — há entendimento de que o cabimento da ANPP deve ser aferido, inclusive em ações já em curso à época da entrada em vigor da Lei 13.964/19 [NÃO VERIFICADO — conferir o marco temporal e a posição atual do STF/STJ via `jurisprudencia-stj-stf`].
- ***Sursis*:** proposto **na denúncia** ou logo após seu recebimento; agir cedo evita instrução desnecessária.
- **Colaboração:** o **valor cai com o tempo** — informação que a acusação ainda não tem vale muito; depois que a investigação já a obteve por outros meios, a "efetividade" (e o prêmio) despenca. **Primeiro a colaborar tende a levar o melhor acordo.**
- **Regra geral:** negociar cedo, quando a acusação ainda tem incerteza probatória e o cliente ainda tem algo a oferecer. Esperar "para ver a prova" pode custar o benefício.

### Passo 5 — Ler a força probatória (negociar de que posição?)

- **Prova fraca da acusação** → a defesa negocia de posição forte (ou pode preferir **litigar** — ver `decisao-recorrer-vs-negociar`). Aqui a via consensual só interessa se o benefício for muito superior ao risco de absolvição.
- **Prova robusta** → o cálculo vira: minimizar dano. ANPP (evita condenação e reincidência) costuma superar a confissão simples (que condena). Onde ANPP não cabe e a prova é forte, a **colaboração** (se há o que entregar) ou a **confissão atenuante** entram em cena.
- **Coautoria** → mapear quem tem o quê. Em colaboração, a **posição relativa** entre corréus define o valor: quem detém a informação-chave negocia melhor; quem só confirma o já sabido, pior.

### Passo 6 — Decidir, documentar o aconselhamento e obter consentimento informado

- **Aconselhamento por escrito** (ao cliente): as opções cabíveis, o benefício, o custo/renúncia (inclusive a irreversibilidade da confissão) e a recomendação fundamentada. A **decisão é do cliente**.
- **Registrar** que o cliente foi informado dos riscos — proteção do cliente e do advogado.
- **Encaminhar à execução:** definido o instrumento, chamar a skill de peça correspondente (`anpp`, `colaboracao-premiada`) para negociar/redigir; para *sursis*/transação, a atuação em audiência/JECrim.

## Árvore de decisão (rápida)

```
1) Crime com VIOLÊNCIA ou GRAVE AMEAÇA?
   ├── SIM → ANPP vedado. Vias: colaboração (se há o que entregar) ou confissão
   │         atenuante; do contrário, litígio. (Se hediondo/júri, ver skills próprias.)
   └── NÃO → segue.
2) Pena MÁXIMA ≤ 2 anos (menor potencial ofensivo)?
   ├── SIM → TRANSAÇÃO PENAL (art. 76) — prefere às demais; sem culpa, sem reincidência.
   └── NÃO → segue.
3) Pena MÍNIMA ≤ 1 ano?
   ├── SIM → SUSPENSÃO CONDICIONAL DO PROCESSO (art. 89) — sem admissão de culpa.
   │         (Se também < 4 anos e cabível ANPP, comparar: sursis não exige confissão.)
   └── NÃO → segue.
4) Pena MÍNIMA < 4 anos e sem violência/grave ameaça, e NÃO incidem vedações do §2º?
   ├── SIM → ANPP (art. 28-A) — exige confissão; avaliar capacidade de cumprir.
   └── NÃO → segue.
5) Crime grave/organização e o cliente TEM informação útil e nova a entregar?
   ├── SIM → COLABORAÇÃO PREMIADA (Lei 12.850) — cedo vale mais; defesa própria.
   └── NÃO → CONFISSÃO SIMPLES (atenuante) se a prova é robusta; senão, LITIGAR.
6) Em qualquer via: checar vedações (Passo 2), timing (Passo 4) e consentimento (Passo 6).
```

> **Preferência entre instrumentos:** quando mais de um couber, a **regra da via menos onerosa** costuma prevalecer — transação (não admite culpa) antes de *sursis*; *sursis* (não exige confissão) merece comparação séria com ANPP (que exige). Só recomende a via que **admite culpa** quando ela entregar benefício claramente superior à via que não admite.

## Teses e contra-teses (defesa × acusação)

**Teses da defesa (para abrir/ampliar a via negocial):**
1. **Cabimento da ANPP mesmo em ação já ajuizada** — a defesa provoca a aferição do art. 28-A quando não oferecido no momento próprio [conferir marco e posição atual via `jurisprudencia-stj-stf`].
2. **Vedação restritiva** — as vedações do art. 28-A, §2º, são **taxativas**; não cabe ampliar por analogia para negar o acordo.
3. **Reincidência não automática** — "conduta criminal reiterada" exige demonstração concreta de habitualidade, não meros inquéritos/ações em curso (presunção de inocência — CF, art. 5º, LVII).
4. **Confissão da ANPP com uso restrito** — a confissão prestada para a ANPP é qualificada pelo contexto do acordo; discutir seu peso/valor caso o acordo não se concretize (matéria sensível — verificar posição atual).
5. **Voluntariedade e assistência** — todo acordo (sobretudo colaboração) exige defesa técnica presente e voluntariedade real; vício aqui contamina o negócio jurídico processual.

**Contra-teses da acusação (a antecipar):**
- Presença de vedação do §2º (reincidência/habitualidade, violência doméstica, benefício nos últimos 5 anos).
- Insuficiência/ineficácia da colaboração (informação já conhecida → sem prêmio).
- Descumprimento anterior de condições como fator de recusa.
- Interesse público na persecução plena quando a prova é robusta e o crime é grave.

## Súmulas e enunciados relevantes (sob o Citation Gate)

> **Citation Gate:** dispositivos de lei podem ser citados livremente. Qualquer **súmula, enunciado, tema ou acórdão** abaixo é indicado como **ponto a conferir** — confirme número, teor e vigência via `jurisprudencia-stj-stf` **antes** de usar na peça ou na tese. Melhor faltar precedente do que citar julgado inexistente.

- **Súmula 337/STJ** — cabimento de *sursis* processual mesmo em caso de desclassificação/procedência parcial que reduza a pena ao patamar do art. 89 [conferir teor e vigência].
- **Súmula 723/STF** — não se admite *sursis* processual em crime continuado se a soma da pena mínima da infração mais grave com o aumento superar 1 ano [conferir teor e vigência].
- **Súmula 243/STJ** — inadmissibilidade do *sursis* processual quando, no concurso, a pena mínima ultrapassar 1 ano [conferir teor e vigência].
- **Enunciados do CNPG/FONAJE e orientações do CNMP sobre ANPP** — parâmetros de oferecimento e condições [NÃO VERIFICADO — confirmar existência, número e teor via `jurisprudencia-stj-stf`].
- **Repercussão geral / posição do STF sobre natureza e cabimento da ANPP e sobre retroatividade da Lei 13.964/19** — [NÃO VERIFICADO — conferir tema e status atual].

> Prefira, na peça, **ensinar a tese e ancorar no dispositivo** (art. 28-A CPP; arts. 76 e 89 da Lei 9.099/95; Lei 12.850/13) a arriscar um número de acórdão. Todo precedente entra só depois do gate.

## Erros comuns (anti-padrões)

- **Escolher a via que admite culpa sem checar se cabe outra que não admite** (recomendar ANPP onde caberia *sursis* — este não exige confissão).
- **Recomendar ANPP a quem não tem capacidade de cumprir** as condições — descumprimento gera denúncia **com a confissão já nos autos**.
- **Negociar colaboração tarde**, depois que a acusação já obteve a informação — prêmio esvaziado por falta de efetividade.
- **Um só advogado para corréus com versões colidentes** (conflito de interesses — art. 17 EAOAB), sobretudo em delação.
- **Confundir transação (sem culpa, sem reincidência) com ANPP (confissão)** — são naturezas distintas; a transação é mais branda e prefere.
- **Tratar as vedações do §2º como exemplificativas** e negar/aceitar acordo por analogia.
- **Decidir pelo cliente** — a escolha de confessar/colaborar é do assistido, informado; ao advogado cabe aconselhar, não impor.
- **Citar súmula/precedente de memória** — tudo pelo gate `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Crime classificado: há violência/grave ameaça? Pena **mínima** e **máxima** apuradas?
- [ ] Cabimento mapeado para **cada** via (transação, *sursis*, ANPP, colaboração, confissão)?
- [ ] Vedações verificadas (art. 28-A, §2º; requisitos dos arts. 76 e 89)?
- [ ] Custo/benefício precificado, com destaque para a **irreversibilidade da confissão** (ANPP/colaboração)?
- [ ] **Timing** avaliado (ANPP antes da denúncia; colaboração cedo vale mais)?
- [ ] Força probatória lida — negocia-se de posição forte ou de dano-mínimo?
- [ ] **Conflito de interesses** afastado (defesa própria por corréu em colaboração)?
- [ ] **Consentimento informado** do cliente documentado (opções, custo, recomendação)?
- [ ] Instrumento definido → encaminhado à skill de peça (`anpp`, `colaboracao-premiada`) ou à atuação (*sursis*/transação)?
- [ ] Toda súmula/precedente conferido via `jurisprudencia-stj-stf` antes de citar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à **decisão estratégica**; a escolha do instrumento, o aconselhamento e a atuação são de responsabilidade do **advogado/defensor**, e a decisão de aceitar qualquer acordo é **do cliente**, informado.
- **Ética por polo:** advocacia — OAB/EAOAB e Provimento 205/2021; Defensoria — LC 80/94; (esta skill é de **defesa** — a proposta consensual, na ação pública, é ato do MP, regido pelo CNMP).
- **Citation Gate:** nenhuma súmula, tema ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).
- **Sigilo e LGPD:** dados do assistido nunca em repositório público.

**Padrão de redação:** definida a via, ao redigir o acordo aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
