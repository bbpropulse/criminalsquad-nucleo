---
name: prova-emprestada-admissibilidade
description: >-
  Use ao requerer o empréstimo de prova de outro processo OU ao impugnar a prova emprestada trazida
  pela acusação — o instituto geral, para qualquer meio de prova (perícia, oitiva, documento, quebra
  de sigilo, interceptação). Analisa os três requisitos de admissibilidade (contraditório originário
  ou diferido; identidade/participação das partes na origem; licitude na origem que se transporta
  com a prova) e os limites do uso… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, processo-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-prova-emprestada-admissibilidade"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["prova-emprestada-admissibilidade", "prova emprestada", "emprestada admissibilidade"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Prova Emprestada — Admissão e Impugnação (CPP arts. 155 e 3º; CPC art. 372; CF art. 5º, LV)

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

Esta skill orienta a **análise da prova emprestada** nos dois sentidos: (1) **requerer** o empréstimo de uma prova produzida em outro processo para instruir o processo criminal em curso; e (2) **impugnar** a prova emprestada que a acusação trouxe de outro feito. É o **instituto geral** — vale para qualquer meio de prova (perícia, laudo, oitiva de testemunha, documento, quebra de sigilo bancário/fiscal, interceptação telefônica, depoimento de colaborador). Não se confunde com a discussão do vício **originário** de obtenção de uma interceptação (essa é a skill `impugnacao-interceptacao-sigilo`); aqui o foco é o **transporte** da prova de um processo a outro e as condições que o legitimam.

> **Lição central:** prova emprestada não é "prova pronta". Ela só ingressa validamente se passar por **três filtros cumulativos** — **contraditório** (na origem ou, na falta, diferido no destino), **identidade/participação da parte** contra quem se usa, e **licitude na origem**. Vício em qualquer filtro contamina o transporte. E, ainda admitida, a prova emprestada **não vincula a valoração**: entra como elemento a ser sopesado, nunca como verdade transposta.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 155 do CPP** (fundamento da prova no contraditório judicial) e do **art. 372 do CPC** (norma expressa sobre prova emprestada, aplicável por analogia via art. 3º do CPP). Toda súmula, tese, tema ou acórdão citado abaixo passa **obrigatoriamente** pelo gate da skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes do uso na peça — há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.

## Base legal

- **CPP, art. 155** — o juiz forma a convicção pela **prova produzida em contraditório judicial**, não podendo fundamentar a decisão **exclusivamente** nos elementos colhidos na investigação. É a âncora da exigência de contraditório sobre a prova emprestada.
- **CPP, art. 157** — inadmissibilidade das **provas ilícitas** e das **derivadas** (teoria dos frutos da árvore envenenada). Se a prova era ilícita na origem, o empréstimo não a purifica: a ilicitude viaja com ela.
- **CPP, art. 3º** — **aplicação analógica** e dos princípios gerais ao processo penal. É a ponte que autoriza importar o art. 372 do CPC.
- **CPC, art. 372** — norma **expressa** sobre prova emprestada: o juiz **poderá admitir** a prova produzida em outro processo, **atribuindo-lhe o valor que considerar adequado**, observado o **contraditório**. É a base normativa direta do instituto.
- **CF, art. 5º, LV** — **contraditório e ampla defesa** aos litigantes; é o filtro constitucional que legitima (ou barra) o transporte.
- **CF, art. 5º, LVI** — inadmissibilidade das provas obtidas por **meios ilícitos** (reforça o art. 157 do CPP na origem).
- Precedentes específicos (números de HC/REsp/RE, informativos, temas): **[NÃO VERIFICADO]** — conferir via `jurisprudencia-stj-stf` antes de citar.

## Os três requisitos cumulativos de admissibilidade

A prova emprestada só é admissível se **os três** estiverem presentes. Ausente um, a prova não ingressa validamente (ou ingressa nula/imprestável).

### 1) Contraditório — originário ou diferido

- **Ideal (contraditório originário):** a prova foi produzida, **no processo de origem**, com a **participação da parte** contra quem agora se pretende usá-la. Ex.: a testemunha foi ouvida em processo do qual o réu deste feito também era parte, com defesa presente e possibilidade de reperguntas.
- **Contraditório diferido (postergado):** quando a parte **não participou** da produção na origem, admite-se o empréstimo **desde que se abra, no processo de destino, oportunidade real de contraditar** a prova transportada — impugná-la, requerer a repetição/renovação do ato (reinquirição da testemunha, nova perícia, esclarecimentos do perito), produzir contraprova. O contraditório "sobre a prova" no destino **substitui** o contraditório "na produção" que faltou na origem.
- **Limite do diferido:** ele não sana **tudo**. Prova cujo **ato não é repetível** e que foi produzida **sem** qualquer contraditório contra a parte tende a valer, no máximo, como elemento de convicção sujeito a corroboração — nunca como prova plena isolada. A defesa deve exigir a **renovação do ato** sempre que possível.

### 2) Identidade (ou participação) das partes

- O núcleo é a **parte contra quem** a prova será usada. A regra clássica pede **identidade de partes** entre origem e destino.
- **Flexibilização:** parte da jurisprudência admite o empréstimo mesmo **sem identidade total**, **desde que assegurado o contraditório** (diferido) no destino contra quem sofrerá os efeitos da prova. **[NÃO VERIFICADO]** — o exato alcance dessa flexibilização é objeto de precedentes específicos; conferir via `jurisprudencia-stj-stf`.
- **Tese defensiva:** se o réu **não era parte** na origem e **não se lhe abre** contraditório efetivo no destino, o empréstimo é **inadmissível** contra ele — falta legitimidade para lhe opor prova de que não pôde participar.

### 3) Licitude na origem

- A prova emprestada **carrega consigo o vício de origem**. Se foi obtida por meio **ilícito** no processo de origem (interceptação sem autorização judicial, quebra de sigilo sem fundamentação idônea, busca nula, prova derivada de ilícito), o transporte **não a convalida** — a ilicitude viaja junto (art. 157 do CPP; CF, art. 5º, LVI).
- **Auditar a cadeia da origem** é passo obrigatório: quem autorizou, com que fundamento, em que autos, com que cadeia de custódia. Uma interceptação **lícita** na origem pode ser emprestada; uma **ilícita**, não — e o rótulo "prova emprestada" às vezes serve para **camuflar** o vício originário (a "pegadinha" que a skill `impugnacao-interceptacao-sigilo` alerta a auditar).

## Casos especiais — prova de fora do processo criminal

O transporte para o juízo criminal de prova produzida em **outra sede** exige cautela redobrada, porque nem sempre houve contraditório em contraditório judicial pleno.

- **Prova de CPI (Comissão Parlamentar de Inquérito):** CPIs têm poderes de investigação próprios das autoridades judiciais (CF, art. 58, §3º), mas **não** exercem jurisdição. Depoimentos e documentos de CPI podem ser emprestados como **elemento informativo**, sujeitos a **contraditório no destino** e a **corroboração**; não substituem, isoladamente, a prova judicializada. Atos da CPI que exigiriam **reserva de jurisdição** (ex.: interceptação telefônica) e foram praticados **sem** ela são **ilícitos** e imprestáveis.
- **Prova de processo administrativo / PAD:** produzida sob contraditório administrativo, não sob contraditório **judicial** penal. Pode ser emprestada como **início de prova**, exigindo **judicialização** (contraditório diferido) e não bastando, sozinha, para condenação. Atenção à **independência das instâncias** e ao standard probatório penal, mais exigente.
- **Prova de ação cível:** o contraditório cível legitima o empréstimo, mas o **standard** do cível (preponderância) é inferior ao penal (para além da dúvida razoável). Perícia ou depoimento cível entra como elemento a **revalorar** sob a régua penal, com contraditório reaberto.
- **Depoimento/colaboração de outro processo:** a delação premiada tem regra própria — **não** condena por si só (art. 4º, §16, da Lei 12.850/2013, na redação vigente — **conferir vigência**). Emprestada, exige **corroboração** e **contraditório** do réu deste processo sobre o conteúdo transportado.

## Roteiro de análise (checklist decisório)

```
1) IDENTIFICAR a prova e a origem
   - Qual meio de prova? (perícia, oitiva, documento, quebra, interceptação, colaboração)
   - De qual processo/sede vem? (criminal, cível, administrativo, CPI)  ← define o rigor

2) FILTRO 1 — CONTRADITÓRIO
   - A parte participou da produção na origem?  → SIM: originário, ok
                                                 → NÃO: exigir contraditório DIFERIDO no destino
   - O ato é repetível?  → SIM: pedir renovação (reinquirição/nova perícia)
                         → NÃO: só vale com corroboração; nunca isolado

3) FILTRO 2 — IDENTIDADE/PARTICIPAÇÃO
   - O réu era parte na origem?  → SIM: ok
                                 → NÃO: só admissível se houver contraditório efetivo no destino
                                        contra ele; senão, INADMISSÍVEL contra o réu

4) FILTRO 3 — LICITUDE NA ORIGEM
   - Auditar a cadeia: autorização, fundamentação, competência, custódia
   - Ilícita na origem?  → contaminação (art. 157 CPP); o empréstimo NÃO convalida

5) VALORAÇÃO (mesmo se admitida)
   - Entra como elemento a sopesar, valor "adequado" (art. 372 CPC), nunca verdade transposta
   - Se de CPI/PAD/cível: exigir corroboração e judicialização; standard penal
```

## Teses defensivas (impugnação da prova emprestada da acusação)

1. **Ausência de contraditório e de identidade de partes** — o réu não foi parte na origem e não se lhe abriu contraditório efetivo no destino: prova **inadmissível** contra ele (CF, art. 5º, LV; CPP, art. 155).
2. **Contraditório diferido não oferecido** — a acusação transportou a prova mas o juízo **não abriu** oportunidade real de impugnar/repetir: nulidade por cerceamento de defesa; requerer a **renovação do ato** (reinquirição, nova perícia).
3. **Ilicitude na origem que se transporta** — auditar a cadeia; se a prova era ilícita na origem, o empréstimo não a purifica (art. 157 do CPP; CF, art. 5º, LVI). Requerer o **desentranhamento**.
4. **Uso exclusivo de elemento não judicializado** — condenar (ou fundamentar) **exclusivamente** com prova emprestada de CPI/PAD/cível **não** submetida a contraditório judicial viola o art. 155 do CPP.
5. **Ato irrepetível sem contraditório** — prova cujo ato não pode ser repetido e produzida sem contraditório contra o réu: valor probatório **reduzido**, exige corroboração; não sustenta condenação isolada.
6. **Colaboração/delação sem corroboração** — delação de outro processo emprestada não condena por si só (regra da Lei 12.850/2013 — conferir vigência); exigir elementos de corroboração e contraditório.
7. **Standard probatório inadequado** — prova de sede cível/administrativa revalorada sob standard inferior; no penal, exige-se além da dúvida razoável.

## Contra-teses (o que a acusação sustenta — e como responder)

- **"O art. 372 do CPC autoriza o empréstimo e houve contraditório diferido."** → Responder: o diferido só vale se **efetivo e real**; se o ato era repetível, exigia-se renovação, não mera juntada. Verificar se a oportunidade foi **concreta**.
- **"A identidade de partes é dispensável desde que assegurado o contraditório."** → Responder: mesmo na tese flexibilizadora, o contraditório **no destino contra o réu** é pressuposto — e aqui não houve; sem ele, não há como opor a prova. **[NÃO VERIFICADO]** — cotejar a jurisprudência atual via `jurisprudencia-stj-stf`.
- **"A prova é lícita na origem, logo é emprestável."** → Responder: licitude é **necessária, não suficiente** — faltam contraditório e/ou identidade; e reauditar a origem (o rótulo "lícita" às vezes esconde vício).
- **"É apenas mais um elemento no conjunto."** → Aproveitar a favor: se é "apenas mais um", **não pode ser o fundamento exclusivo** (art. 155) — cobrar a prova judicializada autônoma.

## Como pleitear o empréstimo (quando a prova favorece a DEFESA)

Se a prova de outro processo **beneficia** o réu (ex.: perícia que exclui autoria, depoimento favorável já colhido), a defesa pode **requerer o empréstimo**:

1. **Identificar** a prova e o processo de origem (número, vara, partes).
2. **Requerer** a juntada por certidão/cópia autenticada, com fundamento no **art. 372 do CPC c/c art. 3º do CPP**.
3. **Demonstrar** que houve (ou que se garantirá) **contraditório** — no mínimo, o diferido, dando à acusação oportunidade de se manifestar.
4. **Justificar a pertinência e a necessidade** (economia processual: evitar repetir prova já produzida sob contraditório).
5. **Requerer, subsidiariamente,** a **renovação do ato** neste juízo se a acusação impugnar a validade do empréstimo (garante o contraditório pleno).

## Estrutura da petição de impugnação (esqueleto)

```
I — SÍNTESE
   Identificar a prova emprestada juntada pela acusação (meio, origem, folhas/eventos).

II — DA INADMISSIBILIDADE / NULIDADE
   a) Do contraditório ausente e não diferido (CF art. 5º LV; CPP art. 155)
   b) Da falta de identidade/participação do réu na origem
   c) Da ilicitude na origem que se transporta (CPP art. 157; CF art. 5º LVI)
   d) Do uso vedado como fundamento exclusivo (CPP art. 155)
   [Se de CPI/PAD/cível: da necessidade de judicialização e corroboração]

III — DO PEDIDO
   a) o desentranhamento / a declaração de inadmissibilidade da prova emprestada; OU
   b) subsidiariamente, a RENOVAÇÃO do ato neste juízo (reinquirição/nova perícia),
      abrindo-se contraditório efetivo;
   c) que a prova não seja valorada como fundamento exclusivo (art. 155 CPP).
```

## Sinais de alerta (red flags ao ler os autos)

- Prova "juntada" de outro processo **sem** decisão que autorize o empréstimo e **sem** vista à defesa → contraditório sonegado.
- Rótulo "prova emprestada" aposto a **interceptação/quebra** de origem duvidosa → auditar a licitude originária (ver `impugnacao-interceptacao-sigilo`).
- Depoimento de testemunha de outro feito usado **sem** oferecer reinquirição → ato repetível não renovado.
- Documento de **CPI/PAD/cível** citado na sentença como **prova plena** → falta judicialização/corroboração; viola art. 155.
- Delação de outro processo transportada **sem** corroboração → não condena por si só.

## Erros comuns / anti-padrões

- Tratar prova emprestada como **prova pronta e valorável de imediato** — ela precisa passar pelos três filtros.
- Aceitar o **contraditório diferido meramente formal** (juntada + "diga a defesa") quando o ato era **repetível** e cabia renovação.
- Esquecer de **auditar a licitude na origem** — a ilicitude viaja com a prova (art. 157).
- Confundir esta análise com a impugnação do **vício de obtenção** da interceptação — aqui o foco é o **transporte**; o vício originário é a skill `impugnacao-interceptacao-sigilo`.
- Deixar a prova emprestada virar **fundamento exclusivo** da decisão (art. 155 do CPP veda).
- Emprestar prova de **CPI/PAD/cível** como se tivesse o mesmo peso da prova judicializada penal.
- Citar **número** de HC/REsp/RE de memória — passar tudo por `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Identifiquei o **meio de prova** e a **sede de origem** (criminal/cível/administrativo/CPI)?
- [ ] **Contraditório** presente na origem OU diferido efetivo no destino?
- [ ] O **ato é repetível**? Se sim, exigi/ofereci a **renovação**?
- [ ] **Identidade/participação** do réu assegurada — ou contraditório real contra ele no destino?
- [ ] **Licitude na origem** auditada (autorização, fundamentação, competência, custódia)?
- [ ] A prova está sendo usada como **fundamento exclusivo**? (Se sim, invocar art. 155.)
- [ ] Prova de **CPI/PAD/cível**: exigi **judicialização** e **corroboração** sob standard penal?
- [ ] **Delação** emprestada: exigi **corroboração** (Lei 12.850/2013 — vigência conferida)?
- [ ] Todas as **súmulas/precedentes** conferidos via `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a ser confirmada pelo profissional, não peça pronta para protocolo. A responsabilidade pela tese, pela citação e pela atuação é sempre do **advogado** (Estatuto da OAB e Código de Ética; Provimento 205/2021 na advocacia — para atuação do Ministério Público, observar o CNMP; na Defensoria, a LC 80/94). **Nenhuma** súmula, tese, tema ou acórdão pode ser citado de memória: tudo passa pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`. Confira a **vigência** dos dispositivos (CPP arts. 155, 157, 3º; CPC art. 372; Lei 12.850/2013) antes de fundamentar.

**Padrão de redação:** ao converter esta análise em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
