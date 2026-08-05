---
name: defesa-crimes-contra-liberdade
description: >-
  Use ao defender crimes contra a inviolabilidade de DOMICÍLIO, CORRESPONDÊNCIA e SEGREDO (CP, arts.
  150 a 154-A) — violação de domicílio (150), violação/sonegação de correspondência (151, hoje
  regida pela Lei 6.538/78), divulgação de segredo (153), violação de segredo profissional (154) e
  invasão de dispositivo informático (154-A). Fecha o capítulo dos crimes contra a liberdade
  individual. Roteiro de teses: exceções… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-pessoa, liberdade-individual]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-contra-liberdade"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-contra-liberdade", "defesa crimes", "contra liberdade"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes contra a Inviolabilidade de Domicílio, Correspondência e Segredo (CP, arts. 150 a 154-A)

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

Esta skill orienta a **defesa técnica** nos crimes que fecham o Capítulo VI (Crimes contra a Liberdade Individual) do Título I da Parte Especial do CP: **violação de domicílio** (art. 150), **crimes contra a inviolabilidade de correspondência** (art. 151, hoje em grande parte regidos pela **Lei 6.538/78**), **divulgação de segredo** (art. 153), **violação de segredo profissional** (art. 154) e **invasão de dispositivo informático** (art. 154-A, incluído pela Lei 12.737/2012). Complementa as skills `defesa-ameaca` (art. 147) e `defesa-constrangimento-ilegal` (art. 146), cobrindo o restante do capítulo.

> **Lição central:** identifique **qual núcleo** está em jogo antes de traçar a tese. São crimes **distintos** com pontos de ataque próprios. No **domicílio**, a defesa vive das **exceções constitucionais** do art. 5º, XI, da CF e do **conceito de "casa"** (art. 150, §§4º-5º). Nos crimes de **correspondência**, a primeira pergunta é **qual norma vige** (CP art. 151 x Lei 6.538/78). Nos crimes de **segredo**, o eixo é a **justa causa** para a revelação e o **dolo** de divulgar. Em quase todos, a tese defensiva mais valiosa não é só absolver o réu do art. 150 — é **usar a violação domiciliar para contaminar a prova** de outro processo (ilicitude probatória).

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** de cada dispositivo — o art. 151 do CP foi **parcialmente revogado/derrogado** pela **Lei 6.538/78** (serviços postais) quanto à correspondência escrita; o art. 154-A foi **incluído pela Lei 12.737/2012 e alterado pela Lei 14.155/2021** (que agravou penas e ampliou o tipo). Verifique também qualquer súmula, tema de repercussão geral ou acórdão pela skill `jurisprudencia-stj-stf` **antes** de fundamentar. Nada de jurisprudência citada de memória — há sanções reais por precedente inventado por IA.

## Base legal

- **CF, art. 5º, XI** — "a **casa é asilo inviolável** do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de **flagrante delito ou desastre**, ou para **prestar socorro**, ou, **durante o dia, por determinação judicial**". É o núcleo constitucional que rege toda a matéria de domicílio.
- **CF, art. 5º, XII** — inviolabilidade do **sigilo da correspondência e das comunicações** (dado, telefônico), salvo ordem judicial nas hipóteses e na forma da lei (interceptação — Lei 9.296/96).
- **Art. 150, CP** — **violação de domicílio**: entrar ou permanecer, clandestina ou astuciosamente, ou contra a vontade expressa ou tácita de quem de direito, em casa alheia ou em suas dependências. **§1º** (formas qualificadas: noite, lugar ermo, com violência/arma, mais de uma pessoa). **§2º** (aumento se funcionário público fora dos casos legais/com abuso). **§3º** (exclusões: entrar em casa alheia quando algum crime está sendo praticado; ou desastre/socorro — hipóteses que **não constituem crime**). **§4º e §5º** — **conceito de "casa"** e do que **não** se compreende nela.
- **Art. 151, CP + Lei 6.538/78 (arts. 40 e ss.)** — **violação de correspondência** e crimes correlatos (sonegação/subtração de correspondência, violação de comunicação telegráfica/radioelétrica). A **correspondência escrita fechada** migrou para a Lei 6.538/78; confirmar a subsunção correta.
- **Art. 152, CP** — **correspondência comercial** (abuso na condição de sócio/empregado de estabelecimento comercial/industrial).
- **Art. 153, CP** — **divulgação de segredo**: divulgar, sem justa causa, conteúdo de documento particular ou correspondência confidencial, de que é destinatário ou detentor, cuja divulgação possa produzir dano a outrem. **§1º-A** (divulgação de informações sigilosas/reservadas de sistemas da Administração Pública).
- **Art. 154, CP** — **violação do segredo profissional**: revelar, sem justa causa, segredo de que tem ciência **em razão de função, ministério, ofício ou profissão**, cuja revelação possa produzir dano a outrem.
- **Art. 154-A, CP** — **invasão de dispositivo informático** (Lei 12.737/2012; alterado pela Lei 14.155/2021): invadir dispositivo informático **de uso alheio**, conectado ou não à rede, com o fim de obter, adulterar ou destruir dados, ou instalar vulnerabilidades para obter vantagem ilícita. Formas qualificadas (§§3º-5º).
- **Art. 154-B, CP** — **ação penal** do 154-A: em regra **pública condicionada à representação**, salvo contra Administração/entes públicos (incondicionada).
- **Art. 5º, LVI, da CF + art. 157 do CPP** — **inadmissibilidade das provas obtidas por meios ilícitos** — a ponte entre a violação de domicílio e a nulidade da prova produzida no outro processo.

## Como classificar antes de defender

Faça três perguntas antes de escrever uma linha:

1. **Qual bem jurídico foi atingido?** Domicílio (150) · Correspondência (151-152 / Lei 6.538/78) · Segredo/dados (153, 154, 154-A). Cada núcleo tem tese própria.
2. **O réu era particular ou agente público?** Se **agente público** (policial que entra sem mandado, servidor que devassa correspondência), pode haver **abuso de autoridade** (Lei 13.869/2019, arts. 22 e 24) concorrendo ou **absorvendo** — e a defesa do particular muda de eixo (nesses casos a skill costuma ser usada **em favor da vítima da violação**, para arguir ilicitude da prova; confira o polo com o roteador).
3. **A conduta é fim em si ou meio de outro crime?** Violação de domicílio como **meio** de furto/roubo é **absorvida** pelo crime patrimonial (consunção). Não há concurso autônomo quando o ingresso é etapa necessária do crime-fim.

## Núcleo 1 — Violação de domicílio (art. 150) e as exceções constitucionais

Este é o núcleo de **maior utilidade prática** — não pela persecução do art. 150 em si (rara), mas porque a **entrada ilegal em domicílio contamina a prova** obtida (drogas, armas), abrindo a tese de **prova ilícita** em processos de tráfico, porte etc.

### O que a defesa ataca no tipo do art. 150

- **Conceito de "casa" (art. 150, §4º):** compreende qualquer compartimento habitado, aposento ocupado de habitação coletiva e compartimento não aberto ao público onde alguém exerce profissão/atividade. **Amplo** — inclui quarto de hotel/motel ocupado, escritório fechado, trailer/barco habitado. O **§5º** exclui hospedaria/taberna aberta ao público e a casa habitada só na parte aberta.
- **"Contra a vontade" de quem de direito:** exige dissenso do morador. **Consentimento válido** afasta a tipicidade — mas o consentimento tem de ser **livre, expresso ou inequívoco**, e prestado por **quem de direito**. Consentimento obtido por coação, engano ou de quem não podia consentir **não vale**.
- **Dolo:** o tipo é doloso; ingresso por erro (achar que a casa era a própria), tolerância presumida (entrar em quintal aberto para chamar o morador) podem afastar o dolo de violar.
- **Exclusões do §3º:** não constitui crime a entrada quando **algum crime está sendo ali praticado ou na iminência de o ser**, ou para **desastre/socorro**. Espelham as ressalvas do art. 5º, XI, da CF.

### As exceções constitucionais à inviolabilidade (art. 5º, XI, CF) — o coração da tese de prova ilícita

O ingresso domiciliar sem consentimento só é lícito em quatro situações:

```
1) FLAGRANTE DELITO  ......... a qualquer hora (dia ou noite)
2) DESASTRE .................. a qualquer hora
3) PRESTAR SOCORRO ........... a qualquer hora
4) DETERMINAÇÃO JUDICIAL ..... SOMENTE DURANTE O DIA
```

- **Flagrante em crime permanente** (tráfico, posse de arma, cárcere privado) autoriza o ingresso a qualquer hora — **mas** a jurisprudência exige **justa causa prévia**: fundadas razões (*probable cause*) que **antecedam** a entrada, não podendo a busca ser justificada *a posteriori* pelo que se encontrou.
- **Tese defensiva central [conferir número/ementa em `jurisprudencia-stj-stf`]:** o **STF, em repercussão geral (Tema 280 — RE 603.616) [NÃO VERIFICADO — confirmar número e tese exata]**, fixou que a entrada forçada em domicílio sem mandado só é lícita quando amparada em **fundadas razões, justificadas *a posteriori*, que indiquem estar ocorrendo crime no interior**; a **ausência dessas razões torna ilícita a prova** e responsabiliza o agente. O **STJ [NÃO VERIFICADO — HC de referência a confirmar]** vem exigindo **demonstração concreta e prévia** da justa causa, reputando **insuficientes** a mera denúncia anônima, a atitude "suspeita", a fuga ao ver a polícia ou o "faro" isolado.
- **Consentimento do morador para a busca:** o **STJ [NÃO VERIFICADO — HC/tese a confirmar via `jurisprudencia-stj-stf`]** passou a exigir **prova do consentimento válido e voluntário**, preferencialmente **documentado (gravação audiovisual)**, com **ônus do Estado** — consentimento presumido ou obtido em contexto coativo não legitima o ingresso.

➡️ **Roteiro da tese de prova ilícita (o uso mais forte desta skill):**
1. A entrada foi **sem mandado**? Se com mandado, era **diurno** e válido?
2. Havia **fundadas razões PRÉVIAS** e concretas (não a descoberta posterior)?
3. Se invocado **consentimento**, ele foi **livre, inequívoco e comprovado**?
4. Ausente qualquer requisito → **prova ilícita (CF, art. 5º, LVI; CPP, art. 157)** → **desentranhamento** e, pela **teoria dos frutos da árvore envenenada (art. 157, §1º, CPP)**, contaminação das provas derivadas → pedido de **absolvição por insuficiência probatória**.

## Núcleo 2 — Crimes contra a inviolabilidade de correspondência (art. 151 e Lei 6.538/78)

- **Atenção à norma vigente:** para **correspondência postal escrita**, a matéria migrou para a **Lei 6.538/78 (arts. 40 e ss.)**; o art. 151 do CP subsiste para as demais hipóteses (comunicação telegráfica/radioelétrica, telefônica na redação original — hoje lida à luz da Lei 9.296/96). **Confirmar a subsunção** correta antes de tudo, sob pena de tipificação equivocada.
- **Correspondência comercial (art. 152):** exige a **condição de sócio ou empregado** de estabelecimento comercial/industrial e o **abuso** dessa condição — ação penal **pública condicionada à representação** (art. 152, parágrafo único). Ataque a **ausência do vínculo** ou do **abuso**.
- **Teses defensivas típicas:** ausência do **dolo específico**; **correspondência já aberta/não fechada** (não há "violação" de invólucro inviolado); **destinatário ou detentor legítimo** que acessa a própria correspondência; **consentimento**; e, sempre, a **subsidiariedade** frente a crimes-fim.
- **Limite constitucional (empregador, pais, cônjuge):** o acesso a e-mail corporativo, mensagens de filho menor ou do cônjuge é terreno sensível — a inviolabilidade do art. 5º, XII, da CF e a jurisprudência trabalhista/penal divergem conforme o suporte (conta corporativa x pessoal). **Não afirmar tese peremptória sem conferir o precedente concreto** via `jurisprudencia-stj-stf`.

## Núcleo 3 — Crimes de segredo (arts. 153 e 154) e invasão informática (154-A)

### Divulgação de segredo (153) e segredo profissional (154)

- **Elemento normativo decisivo — "sem justa causa":** a tese defensiva mais forte é demonstrar a **justa causa** para a revelação/divulgação. São **justas causas** reconhecidas: **dever legal de comunicar** (ex.: notificação compulsória), **estado de necessidade**, **defesa de direito próprio ou de terceiro**, **ordem judicial**, **consentimento do titular do segredo**. Presente justa causa, **não há crime**.
- **Dano potencial:** o tipo exige que a revelação **possa produzir dano a outrem** — ausente a potencialidade lesiva, atipicidade.
- **154 — vínculo qualificado:** só comete quem tem ciência do segredo **em razão de função, ministério, ofício ou profissão** (médico, advogado, psicólogo, contador, sacerdote). Sem esse vínculo, **não é o 154** (pode ser o 153 ou fato atípico). O **sigilo profissional do advogado** (EAOAB, art. 7º, XIX; CED, art. 35 e ss.) tem contornos próprios — a revelação em **legítima defesa da própria honra/em processo** costuma constituir justa causa.
- **Ação penal:** em regra **pública condicionada à representação** (art. 145 c/c a sistemática do capítulo — **confirmar** o dispositivo de ação penal aplicável a cada tipo, pois há divergência doutrinária).

### Invasão de dispositivo informático (154-A — Lei 12.737/2012, alt. Lei 14.155/2021)

- **Núcleo do tipo:** **invadir** dispositivo informático de uso alheio, **com o fim** de obter/adulterar/destruir dados **ou** instalar vulnerabilidades. É **crime de intenção** — exige o **dolo específico** (o fim ilícito).
- **Teses defensivas típicas:**
  - **Ausência do dolo específico** (acesso sem finalidade de obter/adulterar/destruir).
  - **Autorização/consentimento** do titular do dispositivo (acesso **autorizado** é atípico — o tipo pune o acesso **não autorizado**).
  - **Dispositivo próprio ou de uso comum** (não "alheio").
  - **Ausência de vulneração de mecanismo de segurança** — discutir se o tipo, na redação vigente, ainda exige violação de barreira de segurança (a **Lei 14.155/2021** alterou a redação; **conferir o texto atual** antes de sustentar).
  - **Subsidiariedade**: se a invasão é meio para estelionato/furto mediante fraude eletrônica, discutir absorção ou concurso.
- **Ação penal (art. 154-B):** em regra **pública condicionada à representação** — verificar **decadência** e legitimidade (skill `decadencia-honra-controle-prazo` traz o método de controle do prazo decadencial, aplicável por analogia).

## Teses e contra-teses (visão de conjunto)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Prova ilícita por ingresso domiciliar sem justa causa prévia | CF 5º, XI e LVI; CPP 157; Tema 280/STF [conferir] | Flagrante de crime permanente + fundadas razões concretas |
| Consentimento válido do morador afasta o 150 | Atipicidade (dissenso é elementar) | Consentimento viciado/de quem não podia consentir |
| Conceito de "casa" não alcança o local (aberto ao público) | Art. 150, §5º | Compartimento não aberto ao público (§4º) |
| Absorção do 150 pelo crime-fim (furto/roubo) | Consunção | Autonomia de bens jurídicos, se houver excesso |
| "Justa causa" para a revelação do segredo | Elemento normativo do 153/154 | Ausência de justa causa e dano potencial |
| Ausência de dolo específico na invasão (154-A) | Crime de intenção | Finalidade ilícita demonstrada por indícios |
| Acesso autorizado / dispositivo não alheio | Atipicidade do 154-A | Autorização inexistente ou extrapolada |
| Decadência (ação condicionada à representação) | Prazo do art. 38 CPP | Representação tempestiva / crime de ação incondicionada |

## Súmulas e precedentes (todos sob o Citation Gate)

> **Regra de ouro:** os itens abaixo são **pistas de pesquisa**, não citações prontas. **Todo número de tema/HC/RE e toda ementa passam por `jurisprudencia-stj-stf` antes de irem à peça.** Prefira ensinar a **tese** e citar o **dispositivo de lei** (esses sim, seguros) a arriscar um número de acórdão.

- **Tema 280/STF (RE 603.616) [NÃO VERIFICADO]** — ingresso domiciliar sem mandado exige fundadas razões *justificadas a posteriori* de crime em curso; ausência → ilicitude da prova. **Conferir número e tese exata.**
- **STJ — exigência de justa causa prévia e concreta [NÃO VERIFICADO]** — denúncia anônima isolada, atitude suspeita ou fuga não bastam. **Buscar o(s) HC de referência.**
- **STJ — ônus e prova do consentimento do morador para busca domiciliar [NÃO VERIFICADO]** — tendência de exigir registro audiovisual; ônus do Estado. **Confirmar o precedente.**
- **Súmula 145/STF** (flagrante preparado) — **[verificar aplicabilidade]** eventual pertinência quando a "entrada" decorre de indução policial.
- Dispositivos **seguros** (podem ser citados com certeza): **CF art. 5º, XI, XII, LVI**; **CPP arts. 157 e 158**; **CP arts. 150 a 154-B**; **Lei 6.538/78**; **Lei 12.737/2012**; **Lei 14.155/2021**; **Lei 9.296/96**.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar os cinco tipos como um só — cada núcleo (domicílio/correspondência/segredo/informático) tem tese própria.
- Tipificar violação de correspondência escrita pelo art. 151 do CP **ignorando a Lei 6.538/78**.
- Citar o Tema 280/STF (ou qualquer HC do STJ) **de memória**, com número, sem passar pelo gate.
- Aceitar a justificativa da busca **construída depois** do que se achou (a justa causa tem de ser **prévia**).
- Presumir consentimento do morador sem **prova** de que foi livre e inequívoco.
- Esquecer de puxar a **prova ilícita** para o processo-fim (o valor maior do art. 150 defensivo está na **contaminação probatória**).
- Sustentar tese sobre 154-A com base na redação **antiga** — a Lei 14.155/2021 mudou o tipo e as penas.
- Ignorar a **ação penal condicionada** e a **decadência** (153, 154, 152, 154-A).

**Checklist antes de protocolar:**
- [ ] Núcleo típico corretamente identificado (150 / 151-152 / 153 / 154 / 154-A)?
- [ ] Redação **vigente** de cada dispositivo conferida (esp. 151 x Lei 6.538/78; 154-A pós Lei 14.155/2021)?
- [ ] Conceito de "casa" (§§4º-5º) e o consentimento do morador analisados?
- [ ] Exceções constitucionais (art. 5º, XI) testadas uma a uma (flagrante/desastre/socorro/ordem diurna)?
- [ ] **Justa causa prévia** e concreta do ingresso examinada — e não a *ex post*?
- [ ] Tese de **prova ilícita** (CPP 157 + frutos da árvore envenenada) deduzida no processo-fim, se cabível?
- [ ] "Sem justa causa" e "dano potencial" testados nos crimes de segredo (153/154)?
- [ ] Dolo específico e autorização examinados no 154-A?
- [ ] Ação penal e **decadência** (representação) verificadas?
- [ ] **Toda** súmula/tema/HC conferido em `jurisprudencia-stj-stf` — nada citado de memória?
- [ ] **Revisão humana** do advogado responsável antes do protocolo?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade técnica pela peça e pelas teses é sempre do **advogado** (EAOAB; CED, art. 2º). Não substitui o exame do caso concreto nem a leitura integral dos autos.
- **Citation Gate inegociável:** nenhuma súmula, tema, HC/RE, informativo ou tese vai à peça sem verificação por `jurisprudencia-stj-stf`. **Omitir vence inventar.** Dispositivos de lei e súmulas notórias podem ser citados com certeza; qualquer número de acórdão sem certeza absoluta fica marcado `[NÃO VERIFICADO]` até conferência.
- **Ética por polo:** o foco desta skill é a **defesa**. Quando a violação foi **cometida por agente público** (busca ilegal, devassa de correspondência), a skill costuma servir à **vítima da violação** para arguir ilicitude da prova — confirme o **polo e o interesse** com o roteador. Advocacia sob OAB + Provimento 205/2021; se a atuação for do MP/assistente, aplicam-se CNMP e a lógica acusatória (não é o caso padrão aqui).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra). Para a tese de prova ilícita, articule com as skills de **análise de provas / cadeia de custódia** e `liberdade-provisoria-relaxamento`.
