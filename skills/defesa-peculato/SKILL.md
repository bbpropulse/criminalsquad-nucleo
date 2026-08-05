---
name: defesa-peculato
description: >-
  Use ao defender imputação de peculato em todas as modalidades — apropriação e desvio (peculato
  próprio, CP 312, caput), peculato-furto (§1º), peculato culposo (§2º/§3º) e peculato mediante erro
  de outrem (CP 313) — distinguindo do mero uso momentâneo, da irregularidade administrativa e do
  estelionato/apropriação indébita comuns. Gatilhos: peculato, CP 312, CP 313, desvio de verba
  pública, peculato-furto, peculato culposo… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-administracao, white-collar]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-peculato"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-peculato", "defesa peculato"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Peculato (CP arts. 312 e 313)

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

Esta skill orienta a **defesa técnica** na imputação de **peculato** — o crime do funcionário público que se apropria de, ou desvia, dinheiro, valor ou bem móvel de que tem a **posse em razão do cargo** (CP, art. 312). É o **segundo tipo mais recorrente** do Título XI (Crimes contra a Administração Pública) e reúne modalidades muito distintas entre si, cada uma com teses próprias. Toda entrega é **rascunho técnico sob revisão humana obrigatória**.

> **Lição central:** a defesa do peculato quase nunca começa negando o fato — começa **classificando corretamente a modalidade** e testando os **elementos do tipo**: (1) o cliente é **funcionário público** no sentido do art. 327? (2) tinha a **posse em razão do cargo** (peculato próprio) ou subtraiu valendo-se da facilidade do cargo (peculato-furto, §1º)? (3) há **dolo de apropriação definitiva** (*animus rem sibi habendi*) ou apenas uso momentâneo / irregularidade administrativa? Errar a modalidade é errar toda a tese.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 312, 313 e 327 do CP na fonte oficial antes de fundamentar. Toda súmula, tema repetitivo, informativo ou acórdão (STF/STJ) invocado passa **obrigatoriamente** pelo gate de `verificacao-citacoes` / `jurisprudencia-stj-stf`. Na dúvida sobre um número de HC/REsp/RE ou informativo, **ensine a tese e o dispositivo — não arrisque o número**.

---

## Base legal

- **Art. 312, caput, CP** — **peculato próprio**: apropriação (peculato-apropriação) ou desvio (peculato-desvio) de dinheiro, valor ou qualquer bem móvel, público ou particular, de que o funcionário tem a **posse em razão do cargo**, em proveito próprio ou alheio. Pena: reclusão, 2 a 12 anos, e multa.
- **Art. 312, §1º, CP** — **peculato-furto** (peculato impróprio): o funcionário **não tem a posse**, mas **subtrai** (ou concorre para que terceiro subtraia) valendo-se da **facilidade que o cargo proporciona**. Mesma pena do caput.
- **Art. 312, §2º, CP** — **peculato culposo**: concorre **culposamente** para o crime de outrem. Pena: detenção, 3 meses a 1 ano.
- **Art. 312, §3º, CP** — **a "válvula" do peculato culposo**: a **reparação do dano**, se **anterior à sentença irrecorrível**, **extingue a punibilidade**; se **posterior**, **reduz de metade** a pena imposta.
- **Art. 313, CP** — **peculato mediante erro de outrem** (peculato-estelionato): o funcionário se apropria de dinheiro/utilidade que recebeu por **erro de outrem** no exercício do cargo. Pena: reclusão, 1 a 4 anos, e multa.
- **Art. 327, CP** — **conceito de funcionário público** para fins penais (inclusive o §1º — funcionário por equiparação; e o §2º — causa de aumento para ocupante de cargo em comissão/função de direção).
- **Art. 92, I, CP** — efeito da condenação: perda do cargo/função (fundamentação específica exigida).

> **Peculato é crime funcional próprio.** Sem a qualidade de **funcionário público** (art. 327) não há peculato. Essa condição é **elementar** e, por força do art. 30 do CP, **comunica-se ao particular** partícipe que a conhecia — ponto sensível quando há corréu extraneus.

---

## Mapa das modalidades (classificar ANTES de tudo)

| Modalidade | Dispositivo | Núcleo | Chave da defesa |
|---|---|---|---|
| Peculato-apropriação | 312, caput (1ª parte) | tinha a **posse**; passa a agir como dono | há *animus rem sibi habendi* ou uso momentâneo? |
| Peculato-desvio | 312, caput (2ª parte) | dá ao bem destino diverso, em proveito próprio/alheio | o desvio foi **em proveito** de alguém ou reorganização administrativa? |
| Peculato-furto | 312, §1º | **não** tinha a posse; **subtrai** com facilidade do cargo | a facilidade do cargo foi determinante? senão é furto comum |
| Peculato culposo | 312, §2º | concorre por **culpa** para crime alheio | cabe a **válvula do §3º** (reparação) |
| Peculato mediante erro | 313 | apropria-se do que recebeu por **erro de outrem** | houve erro espontâneo de terceiro ou indução (então é estelionato)? |

> **Distinção-chave 1 — próprio × furto.** No peculato **próprio** (caput) o funcionário **já tem a posse** do bem em razão do cargo. No peculato-**furto** (§1º) ele **não tem a posse** e **subtrai** aproveitando a facilidade do cargo. Se não houve nem posse anterior nem uso da facilidade funcional, **não é peculato — é furto/apropriação comum** (competência e pena distintas).

> **Distinção-chave 2 — apropriação × desvio × uso momentâneo.** A **apropriação** exige o ânimo de assenhoreamento definitivo (*animus rem sibi habendi*). O mero **uso momentâneo** de bem **infungível**, com devolução, é atípico como peculato próprio (peculato de uso — ver adiante). Já o desvio de **dinheiro** (fungível), ainda que com intenção de repor, tende a configurar peculato-desvio — cuidado com essa fronteira.

---

## Roteiro de análise e defesa por elemento do tipo

### 1) O cliente é funcionário público (art. 327)?
- Testar o **enquadramento**: cargo, emprego ou função pública, ainda que transitória e sem remuneração; e o **funcionário por equiparação** (§1º — quem exerce atividade em entidade paraestatal, empresa prestadora de serviço público etc.).
- **Tese:** se o agente **não** se enquadra no art. 327 no momento do fato, **não há peculato** (crime funcional próprio) — desclassificação para apropriação indébita (art. 168), furto (art. 155) ou estelionato (art. 171), com pena e regime muito mais brandos.

### 2) O bem estava sob posse **em razão do cargo**?
- A posse deve derivar **do cargo**, não de relação privada. Bem que chegou às mãos do agente por circunstância estranha à função **não** gera peculato próprio.
- **Tese (afasta o caput, pode levar ao §1º ou ao art. 168):** ausência de posse funcional → discutir se houve subtração com facilidade do cargo (§1º) ou mera apropriação indébita comum.

### 3) Há **dolo** de apropriação/desvio (elemento subjetivo)?
- Peculato **doloso** exige **vontade livre e consciente** de apropriar-se/desviar, com o *animus rem sibi habendi* (na apropriação) ou o proveito próprio/alheio (no desvio).
- **Teses de atipicidade subjetiva:**
  - **Erro de tipo** (art. 20): o agente supunha autorização, regularidade orçamentária ou destinação legítima — exclui o dolo.
  - **Ausência de proveito e de assenhoreamento:** mera **irregularidade administrativa** (falha de prestação de contas, atraso, erro contábil) **não é peculato** — é ilícito administrativo, resolvível na esfera de contas (TCU/TCE), não na penal. Insistir na **subsidiariedade do Direito Penal** e na exigência de **dolo específico de apropriação**.
  - **Uso momentâneo (peculato de uso):** utilização passageira de bem **infungível** com devolução, sem ânimo de dono → atipicidade da conduta como peculato próprio. **[NÃO VERIFICADO — a jurisprudência distingue o peculato de uso de bem infungível (tendência à atipicidade) do desvio de valores/serviços; conferir o entendimento atual do STJ/STF via `jurisprudencia-stj-stf`.]**

### 4) Qual o objeto material?
- Dinheiro, valor ou **qualquer bem móvel**, **público ou particular** (o particular sob custódia da Administração também é objeto). Discutir a **natureza fungível/infungível** (importa para o peculato de uso) e a **efetiva individualização** do bem desviado.

### 5) Consumação e tentativa
- Peculato-apropriação consuma-se com a **inversão do ânimo da posse** (o agente passa a dispor como dono). Peculato-desvio, com o **desvio efetivo**. Peculato-furto, com a **subtração** (retirada da esfera de vigilância).
- **Tese:** discutir **tentativa** quando a apropriação/desvio não se aperfeiçoou; e a **atipicidade** quando não houve efetiva inversão da posse (mero atraso, guarda, contabilização pendente).

---

## Teses defensivas específicas por modalidade

### Peculato próprio (caput)
1. **Ausência de posse em razão do cargo** → não é o caput; discutir §1º ou art. 168.
2. **Irregularidade administrativa, não peculato** → falha de gestão/prestação de contas sem dolo de apropriação; matéria de controle externo, não penal.
3. **Erro de tipo** (art. 20) → suposição de regularidade/autorização afasta o dolo.
4. **Ausência de proveito próprio ou alheio no desvio** → o "desvio" foi remanejamento administrativo dentro da destinação pública, sem enriquecimento nem prejuízo — atipicidade.

### Peculato-furto (§1º)
1. **A facilidade do cargo não foi determinante** → se a subtração poderia ocorrer por qualquer pessoa, é **furto comum** (art. 155), não peculato-furto.
2. **Ausência de subtração** → o bem já estava na posse legítima → discutir o caput ou apropriação.

### Peculato culposo (§2º) — a modalidade da "válvula"
1. **Atipicidade por ausência de culpa** → o resultado não decorreu de negligência/imprudência/imperícia atribuível ao cliente; o crime doloso de terceiro rompeu o nexo.
2. **A VÁLVULA do §3º — reparação do dano (tese central e única do peculato):**
   - **Reparação ANTERIOR à sentença irrecorrível → EXTINÇÃO DA PUNIBILIDADE** (art. 312, §3º, 1ª parte). É causa **extintiva**, não mera atenuante. Peça de **quitação/comprovante de ressarcimento integral** anexada e requerimento de extinção.
   - **Reparação POSTERIOR → redução da pena pela METADE** (§3º, 2ª parte).
   - **Exigir a integralidade e a tempestividade** do ressarcimento (valor + correção); documentar a data para provar a anterioridade à sentença transitada.

> **Distinção crítica (não confundir regimes de reparação):** a extinção do §3º **só vale para o peculato CULPOSO**. No peculato **DOLOSO** (caput, §1º, art. 313), a reparação do dano **não extingue** a punibilidade — funciona, conforme o momento, como **arrependimento posterior** (art. 16, CP: reparação até o recebimento da denúncia → redução de 1/3 a 2/3) ou como **atenuante** (art. 65, III, "b"). E **não confundir** com a válvula do **pagamento tributário** (Lei 10.684/03 e correlatas), que segue **regime próprio** dos crimes tributários — ver a skill `extincao-punibilidade-pagamento-tributario`; **são institutos distintos**.

### Peculato mediante erro de outrem (art. 313)
1. **Não houve erro espontâneo de terceiro** → se o agente **induziu** o erro, migra-se ao **estelionato** (art. 171) ou a outra figura; discutir a exata subsunção.
2. **Ausência de apropriação** → recebimento com posterior devolução/regularização, sem ânimo de dono.

---

## Causas de diminuição, benefícios e efeitos da condenação (defesa)

- **Arrependimento posterior (art. 16, CP)** — no peculato **doloso**, reparação do dano **por ato voluntário até o recebimento da denúncia** → redução de **1/3 a 2/3**. Documentar data e integralidade.
- **Confissão espontânea (art. 65, III, "d")** — atenuante; ponderar estrategicamente conforme a tese.
- **Circunstâncias judiciais (art. 59)** — atacar a valoração negativa de culpabilidade/consequências quando não demonstradas; discutir o **valor do prejuízo** na dosimetria (ver `calculadora-dosimetria`).
- **Perda do cargo (art. 92, I, CP)** — **não é automática**: exige **fundamentação específica** na sentença. **Tese:** ausência de motivação idônea → afastamento do efeito. **[NÃO VERIFICADO — conferir o entendimento atual sobre a necessidade de motivação e a proporcionalidade do art. 92, I, via `jurisprudencia-stj-stf`.]**
- **Princípio da insignificância** — **excepcionalíssimo** em crimes contra a Administração Pública, pois o bem jurídico tutelado é também a **moralidade administrativa**; há forte resistência jurisprudencial. **Não sustentar como tese principal**; se invocar, fazê-lo de forma subsidiária e **conferir o estado atual da controvérsia** via `jurisprudencia-stj-stf`. **[NÃO VERIFICADO — a admissibilidade da insignificância no peculato é controvertida e restritiva; verificar antes de citar.]**
- **Dosimetria e prescrição** — para o cálculo de pena, aplicar o método da `calculadora-dosimetria`; para prazos prescricionais (inclusive a prescrição retroativa/intercorrente), a `calculadora-prescricao`. Aqui descrevemos o **método**; o cálculo determinístico é da calculadora respectiva.

---

## Nulidades e teses processuais próprias

- **Cadeia de custódia da prova financeira/documental** — auditorias, planilhas, extratos e perícias contábeis: atacar quebra de custódia, ausência de perícia oficial, laudo unilateral. Ver skills `cadeia-custodia` e `analise-provas`.
- **Prova emprestada de processo administrativo / TCU-TCE** — discutir contraditório e a autonomia das esferas; a condenação penal **não** se satisfaz com a mera irregularidade de contas.
- **Competência** — sendo o acusado detentor de **foro por prerrogativa de função**, verificar a competência (STF/STJ/TJ) e eventual nulidade por juízo incompetente. **[NÃO VERIFICADO — as balizas do foro por prerrogativa mudaram; conferir a orientação vigente via `jurisprudencia-stj-stf`.]**
- **Denúncia genérica** — em delitos societários/coletivos, exigir a **individualização da conduta**; peça de rejeição/absolvição sumária por inépcia (art. 41 c/c art. 395, CPP). Ver `defesa-preliminar` / `resposta-a-acusacao`.
- **Perícia contábil imprescindível** — quando a materialidade depende de exame técnico do desfalque, sustentar a **nulidade por ausência de perícia** ou requerer contraperícia.

---

## Teses × contra-teses (mapa de embate)

| Tese defensiva | Contra-tese (acusação) | Como sustentar |
|---|---|---|
| Mera irregularidade administrativa, sem dolo | Houve apropriação/desvio consciente | Provar ausência de proveito e de assenhoreamento; subsidiariedade penal |
| Não é funcionário público (art. 327) | Enquadramento por equiparação (§1º) | Testar literalmente a moldura do 327; desclassificar p/ 168/155/171 |
| Uso momentâneo de bem infungível (peculato de uso) | Desvio de valor/serviço, fungível | Individualizar o bem; provar devolução e ausência de ânimo de dono |
| Reparação integral anterior à sentença (culposo) | Reparação parcial/intempestiva ou dolo | Comprovante datado de quitação integral; §3º, 1ª parte |
| Facilidade do cargo não determinou a subtração | Peculato-furto (§1º) | Se qualquer pessoa poderia subtrair → furto comum (155) |
| Perda do cargo sem fundamentação | Efeito da condenação (art. 92, I) | Exigir motivação específica e proporcional |

---

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos legais** citados acima (CP arts. 312, 313, 327, 92, I; 16; 20; 30; 65) são **notórios** — cite com segurança, sempre conferindo a **redação vigente** na fonte oficial.
- **Súmula 599/STJ** — costuma ser invocada para afastar a insignificância nos crimes contra a Administração Pública. **[NÃO VERIFICADO — confirmar número, teor e alcance atual via `jurisprudencia-stj-stf` antes de citar; há discussão sobre exceções.]**
- **Qualquer HC/REsp/RE, tema repetitivo ou informativo** sobre peculato de uso, insignificância, perda do cargo, reparação e foro **NÃO deve ser citado de memória**. **Ensine a tese e o dispositivo**; o número específico só entra **após** verificação em `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência inventada por IA).

---

## Erros comuns e checklist da defesa

**Anti-padrões (evitar):**
- Tratar toda **irregularidade administrativa** como peculato — ignorar a exigência de **dolo de apropriação** e a subsidiariedade penal.
- Confundir **peculato próprio** (posse) com **peculato-furto** (subtração + facilidade do cargo) — a moldura muda a tese inteira.
- Aplicar a **extinção do §3º** (que é do peculato **culposo**) ao peculato **doloso** — no doloso vale, no máximo, o art. 16 ou atenuante.
- Confundir a válvula da **reparação do peculato culposo** com a do **pagamento tributário** (Lei 10.684/03) — regimes distintos.
- Sustentar **insignificância** como tese principal em crime contra a Administração — alta chance de rejeição.
- Aceitar **perda do cargo** sem exigir fundamentação específica (art. 92, I).
- Citar súmula/acórdão **de memória**, sem passar pelo gate de `jurisprudencia-stj-stf`.

**Checklist:**
- [ ] Modalidade corretamente classificada (apropriação/desvio/§1º/§2º/art. 313)?
- [ ] Condição de **funcionário público** (art. 327) testada — cabível desclassificar para 168/155/171?
- [ ] **Posse em razão do cargo** presente (caput) ou subtração com facilidade do cargo (§1º)?
- [ ] **Dolo de apropriação** (*animus rem sibi habendi*) demonstrado — ou é irregularidade administrativa / erro de tipo?
- [ ] Se **culposo**: **reparação integral e datada** anexada, requerendo **extinção da punibilidade** (§3º, 1ª parte) ou redução (2ª parte)?
- [ ] Se **doloso**: reparação enquadrada como **arrependimento posterior** (art. 16) ou atenuante?
- [ ] Objeto material individualizado; discutida a fungibilidade (peculato de uso)?
- [ ] Nulidades verificadas: cadeia de custódia, perícia contábil, competência/foro, inépcia da denúncia?
- [ ] Dosimetria pela `calculadora-dosimetria` e prescrição pela `calculadora-prescricao`?
- [ ] **Todas** as súmulas/precedentes passaram por `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] Peça revisada por advogado(a) responsável antes de protocolar?

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a peça final é sempre "hipótese a confirmar" e depende da leitura integral dos autos e do juízo do(a) advogado(a) responsável (CED/OAB, art. 2º; Provimento 205/2021).
- **Skill de DEFESA.** O foco é a defesa do acusado de peculato. Havendo atuação pelo **polo acusatório** (MP/assistente de acusação), o **roteador deve confirmar o polo** e acionar as skills próprias da acusação — as teses aqui são construídas em favor do réu.
- **Citation Gate inegociável.** Nenhuma súmula, tema, informativo ou acórdão é citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Dispositivos de lei e súmulas notórias, com a redação vigente conferida.
- **Sigilo e LGPD.** Dados do assistido e documentos financeiros nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
