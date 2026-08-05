---
name: defesa-crimes-transito-residuais-ctb
description: >-
  Use ao construir a DEFESA nos crimes de trânsito do CTB além do homicídio (302) e da lesão (303)
  culposos: omissão de socorro (304), fuga do local (305), embriaguez ao volante (306), violação de
  suspensão do direito de dirigir (307), racha (308), dirigir sem habilitação com perigo (309),
  entregar veículo a não habilitado (310), velocidade incompatível (311) e fraude processual em
  acidente (312) — perigo concreto x abstrato… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, transito, ctb]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-transito-residuais-ctb", "defesa crimes", "transito residuais"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-crimes-transito-residuais-ctb"]
---

# Crimes de trânsito residuais (CTB) — Defesa

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

Esta skill orienta a **defesa técnica** nos **crimes de trânsito do CTB** que ficam **fora** do homicídio culposo (art. 302) e da lesão culposa na direção (art. 303) — o feixe "residual" dos **arts. 304 a 312 da Lei 9.503/1997**. São tipos heterogêneos (omissão, perigo, desobediência, fraude), com regimes de pena, competência e prova muito distintos. O entregável são **blocos de tese** para a resposta à acusação (CPP, art. 396-A), a instrução e os memoriais — e a triagem de **qual crime**, com **qual natureza de perigo**, se está enfrentando.

> **Lição central:** antes da tese, faça **duas perguntas de triagem**. (1) **É crime ou mera infração administrativa?** O CTB pune no âmbito administrativo condutas que **não** são crime; nem toda direção irregular é típica. (2) **O tipo exige perigo CONCRETO ou basta o perigo ABSTRATO?** Essa distinção decide a maioria dos casos residuais — em especial os arts. **306** (embriaguez) e **309** (sem habilitação). Errar a natureza do perigo é perder a defesa na largada.

> **Cautela de vigência (obrigatória antes de citar):** dois pontos têm **precedentes específicos** e **não** podem ser afirmados de memória. (1) A **constitucionalidade do art. 305** (afastar-se do local para fugir à responsabilidade) já foi objeto de discussão à luz da **não autoincriminação** — confira o estado atual via `jurisprudencia-stj-stf` antes de sustentar tese em qualquer sentido. (2) A **exigência (ou não) de perigo concreto** nos arts. **306 e 309** oscilou na jurisprudência e na própria redação do 306 após a **Lei 12.760/2012** e a **Lei 13.546/2017** — confira a redação vigente e o entendimento atual. Para **leis penais mais gravosas recentes** (p. ex. o endurecimento de penas), respeite a **irretroatividade** (CF, art. 5º, XL): fato anterior não recebe a lei nova mais severa. **Omitir vence inventar.**

## Base legal

- **Art. 304, CTB** — **omissão de socorro** pelo condutor envolvido em acidente à vítima; subsidiário quando não configura crime mais grave. Não confundir com o art. 135 do CP (omissão de socorro comum).
- **Art. 305, CTB** — **afastar-se o condutor do local do acidente** para fugir à responsabilidade penal ou civil. **Tema constitucional sensível (não autoincriminação) — CONFERIR** estado atual.
- **Art. 306, CTB** — **embriaguez ao volante**: conduzir com capacidade psicomotora alterada por álcool ou outra substância. Os **§§** definem a **prova** do estado (concentração por litro de sangue/ar alveolar, sinais que permitam aferir a alteração) e remetem à regulamentação do **CONTRAN**. Redação atual decorre das **Leis 12.760/2012** e **13.546/2017** — **CONFERIR redação vigente**.
- **Art. 307, CTB** — **violar a suspensão ou proibição** do direito de dirigir imposta; parágrafo único pune quem **permite/entrega** a direção ao suspenso.
- **Art. 308, CTB** — **participar de corrida, disputa ou competição** não autorizada ("racha"), gerando perigo; **§§** com formas qualificadas pelo resultado (lesão grave, morte).
- **Art. 309, CTB** — **dirigir sem habilitação** (ou com o direito cassado) **gerando perigo de dano**. O "gerando perigo de dano" é elementar — **CONFERIR** a exigência de perigo concreto.
- **Art. 310, CTB** — **entregar a direção** a pessoa não habilitada, em más condições ou impossibilitada de conduzir com segurança.
- **Art. 311, CTB** — **trafegar em velocidade incompatível** com a segurança nas proximidades de escolas, hospitais, estações, aglomerações etc., gerando perigo de dano.
- **Art. 312, CTB** — **inovar artificiosamente** o estado de lugar, coisa ou pessoa (fraude processual) em acidente automobilístico, para induzir a erro o juízo.
- **Referências transversais:** JECRIM e despenalizadores — **Lei 9.099/95** (arts. 76, 88, 89); **art. 291, CTB** (regras do rito e institutos nos crimes de trânsito de menor potencial); **art. 28-A do CPP** (ANPP); cadeia de custódia (**CPP, arts. 158-A a 158-F**); direito ao silêncio/não autoincriminação (**CF, art. 5º, LXIII**).

## Roteiro de subsunção — triagem por tipo

O feixe residual não tem "um" elemento comum; a defesa **classifica primeiro** e então testa os elementos do tipo concreto. Mapa de trabalho:

| Tipo | Núcleo | Natureza do perigo | Terreno principal da defesa |
|---|---|---|---|
| **304** omissão de socorro | não prestar socorro possível | dano já ocorrido | possibilidade e desnecessidade do socorro; dolo |
| **305** fuga do local | afastar-se p/ fugir à responsabilidade | — (crime de intenção) | não autoincriminação; ausência de finalidade de fuga **[CONFERIR]** |
| **306** embriaguez | conduzir com capacidade alterada | **abstrato/de perigo — CONFERIR** | prova do estado; recusa; margem do exame |
| **307** violar suspensão | dirigir contra ordem de suspensão | desobediência | ciência inequívoca da suspensão; dolo |
| **308** racha | competir sem autorização gerando perigo | **concreto** (gera perigo) | prova da competição e do perigo real |
| **309** sem habilitação | dirigir sem CNH **gerando perigo** | **concreto — CONFERIR** | ausência de perigo concreto → atipicidade |
| **310** entregar a não habilitado | entregar direção a inapto | **abstrato — CONFERIR** | ciência da inaptidão; dolo/culpa |
| **311** velocidade incompatível | velocidade perigosa em local sensível | **concreto** (gera perigo) | ausência de perigo concreto; local não qualificado |
| **312** fraude em acidente | inovar cena p/ enganar o juízo | — | dolo específico de induzir a erro; materialidade da inovação |

**Método:** identifique o tipo imputado, extraia seus elementos, e ataque (a) a **natureza do perigo** exigido, (b) o **dolo/finalidade específica** quando o tipo os reclama, e (c) a **prova** (do estado etílico, da competição, do perigo, da ciência da suspensão).

## Perigo concreto x perigo abstrato — a tese-mãe dos residuais

Vários tipos residuais trazem a cláusula **"gerando perigo de dano"** (arts. 308, 309, 311). Onde ela existe, o crime é **de perigo concreto**: a acusação precisa **demonstrar** que a conduta expôs bem jurídico a risco real, individualizado, não bastando a mera irregularidade. É o eixo defensivo por excelência.

- **Art. 309 (sem habilitação):** dirigir sem CNH, **por si só**, é **infração administrativa** — o crime só nasce se houver **perigo de dano concreto**. Denúncia que descreve apenas "conduzia sem habilitação", sem apontar manobra perigosa, quase colisão, direção em local/horário de risco etc., é **inepta**; cabível rejeição, absolvição sumária (CPP, art. 397) ou trancamento por HC por atipicidade. **A exigência de perigo concreto no 309 tem precedente — CONFERIR** via `jurisprudencia-stj-stf`.
- **Art. 306 (embriaguez):** aqui a leitura predominante é de **crime de perigo abstrato** — o legislador presume o risco a partir do estado etílico comprovado. Por isso, **no 306 a defesa migra para a prova do estado** (concentração/sinais) e para a **não autoincriminação**, e não para a ausência de perigo concreto. **CONFERIR** a natureza atual e a redação pós-Leis 12.760/2012 e 13.546/2017.
- **Arts. 308 e 311:** exigem perigo concreto explícito — cobrar da acusação a **prova do risco real** (competição efetiva; velocidade incompatível **em local qualificado** de aglomeração).

➡️ **Tese central (309/308/311):** ausência de **perigo concreto** demonstrado → **atipicidade penal**, remanescendo, quando muito, a **infração administrativa**.

## Embriaguez ao volante (306) — prova do estado e não autoincriminação

O 306 concentra o maior volume de casos. Duas frentes:

1. **Prova do estado etílico.** A caracterização depende de **concentração** de álcool (por litro de sangue ou de ar alveolar) **ou** de **sinais** que permitam aferir a alteração da capacidade psicomotora, na forma da **regulamentação do CONTRAN** e dos **§§ do art. 306**. A defesa examina: (a) **fonte da prova** — etilômetro (bafômetro) calibrado e dentro da validade do INMETRO? exame de sangue com cadeia de custódia? teste clínico com sinais objetivamente descritos? (b) **margem de erro** e regularidade do aparelho; (c) **suficiência dos "sinais"** — não bastam adjetivos genéricos ("hálito etílico", "olhos vermelhos") sem lastro objetivo, quando ausente aferição quantitativa. **Conferir a redação vigente e os parâmetros do CONTRAN.**
2. **Não autoincriminação (CF, art. 5º, LXIII).** Ninguém é obrigado a produzir prova contra si — **a recusa** em soprar o etilômetro ou fornecer sangue **não pode, por si, configurar o crime** nem ser lida como confissão. A recusa pode gerar **sanção administrativa** própria (autuação), mas o **crime** do 306 exige a **comprovação** do estado por meios idôneos. Distinga o plano **penal** do **administrativo**.

➡️ **Teses (306):** ausência de prova idônea do estado (aparelho irregular/sinais insuficientes); recusa legítima e vedação de presumir a embriaguez dela; direito intertemporal se o fato é anterior à redação/parâmetro mais gravoso.

## Fuga do local (305) e a questão constitucional

O art. 305 pune afastar-se do local do acidente **para fugir à responsabilidade penal ou civil**. O ponto sensível é a tensão com a **não autoincriminação**: obrigar o condutor a permanecer para se sujeitar à responsabilização penal pode colidir com o direito de não produzir prova contra si.

- **A constitucionalidade do 305 foi debatida — o estado atual DEVE ser conferido** via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**. Não sustente "é inconstitucional" nem "é plenamente constitucional" sem checar o precedente vigente.
- **Elemento finalístico:** o tipo exige o **fim de fugir à responsabilidade**. Afastar-se por **outra razão** (buscar socorro, risco à própria integridade — linchamento, via perigosa, prestar socorro em unidade de saúde) **afasta** a finalidade típica. Trabalhe a **motivação real** do afastamento.

## Catálogo de teses defensivas

1. **Atipicidade por ausência de perigo concreto** (309, 308, 311) — a conduta não expôs bem jurídico a risco real e individualizado; remanesce, no máximo, infração administrativa.
2. **Crime x infração administrativa** — a conduta imputada é punível apenas na esfera do CTB administrativo (dirigir sem CNH sem perigo; recusa ao teste), não no penal.
3. **Insuficiência da prova do estado etílico (306)** — etilômetro sem aferição INMETRO válida; ausência de exame quantitativo; "sinais" genéricos sem descrição objetiva.
4. **Não autoincriminação** — a **recusa** ao etilômetro/sangue não configura o crime nem gera presunção de embriaguez (306); no 305, o afastamento sem fim de fuga.
5. **Ausência de finalidade específica** — no 305 (fugir à responsabilidade) e no 312 (induzir o juízo a erro), sem o especial fim de agir não há crime.
6. **Ausência de dolo / desnecessidade** — no 304, socorro impossível, já prestado por terceiros, ou vítima sem lesão; no 307, ausência de **ciência inequívoca** da suspensão; no 310, ausência de conhecimento da inaptidão do condutor.
7. **Fragilidade da autoria em contexto dinâmico** — competição/racha (308) sem prova da participação efetiva; quem conduzia o veículo.
8. **Subsidiariedade e absorção** — o 304 é subsidiário; verificar se o fato já está absorvido por crime mais grave (evitar dupla imputação).
9. **Institutos despenalizadores** — JECRIM/transação, suspensão condicional do processo, ANPP conforme a pena do tipo concreto (ver seção própria).
10. **Extinção da punibilidade** — **prescrição** (vários residuais têm pena baixa e prescrevem rápido); decadência quando a ação depender de representação.
11. **Direito intertemporal** — fato anterior à lei mais gravosa não recebe a pena/parâmetro novo (irretroatividade da lei penal gravosa, CF, art. 5º, XL).
12. **Dosimetria** — pena-base no mínimo, afastamento de aumentos mal fundamentados, substituição por restritivas (art. 44 CP) e regime aberto quando cabível; a **suspensão/proibição de dirigir** como pena deve ser proporcional e motivada.

## Contra-teses da acusação (antecipar)

- **Perigo concreto demonstrado** — manobra perigosa, direção em local de aglomeração, quase colisão testemunhada, alta velocidade em zona escolar.
- **Estado etílico comprovado** por etilômetro válido, exame de sangue ou conjunto robusto de sinais objetivos somados a testemunho técnico.
- **Finalidade de fuga** (305) inferida do contexto — abandono do veículo, ausência de socorro, ocultação de identidade.
- **Ciência da suspensão** (307) por intimação pessoal comprovada.
- **Dolo de fraude** (312) evidenciado pela alteração deliberada da cena.

A defesa **ataca cada uma na origem**: a qualidade da prova do perigo, a regularidade e a suficiência do exame etílico, a motivação real do afastamento, a prova da intimação e a materialidade da inovação da cena.

## Distinção de figuras próximas

| Situação | Enquadramento | Uso pela defesa |
|---|---|---|
| **Sem CNH, sem perigo real** | infração administrativa (CTB) | afastar o crime do 309 (falta o perigo de dano) |
| **Recusa ao bafômetro** | sanção administrativa própria | afastar leitura como crime/confissão (306) |
| **Omissão de socorro no trânsito (304)** x **omissão comum (CP 135)** | 304 é do condutor envolvido no acidente | fixar o dispositivo correto; subsidiariedade |
| **Racha (308)** x **homicídio/lesão** com resultado | se há resultado grave, formas qualificadas/tipos diversos | evitar dupla imputação; discutir dolo eventual x culpa |
| **Fraude em acidente (312)** x **fraude processual (CP 347)** | 312 é específico do acidente automobilístico | especialidade; um só fato |
| **Embriaguez (306)** x **homicídio/lesão na direção** | se houve resultado, o 306 pode ser absorvido/concorrer | discutir concurso e bis in idem |

## Institutos despenalizadores e competência

- **Menor potencial ofensivo e JECRIM:** vários residuais têm pena que os coloca sob o rito da **Lei 9.099/95** e o **art. 291 do CTB** — avaliar **transação penal**, **composição** e **suspensão condicional do processo** conforme a pena máxima/mínima do **tipo concreto**. **Atenção:** o **art. 291, §1º, CTB** afasta alguns benefícios em hipóteses específicas (p. ex. embriaguez, racha, velocidade muito acima do limite) — **CONFERIR** as hipóteses e a redação vigente antes de afirmar cabimento.
- **ANPP (art. 28-A, CPP):** cabível quando a **pena mínima for inferior a 4 anos** e ausentes as vedações — dimensionar por tipo.
- **Suspensão/proibição de dirigir:** quando aplicada como **pena**, exige **fundamentação concreta e proporcionalidade**; impugnar imposição automática.
- **Competência:** em regra **estadual comum/JECRIM**; verificar excepcional interesse federal. **Não** presumir; conferir o caso.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** nenhum precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Nos crimes de trânsito residuais há **dois núcleos** de forte oscilação — trate ambos como **[NÃO VERIFICADO]** até checar:

- **Constitucionalidade do art. 305** (afastar-se do local) à luz da não autoincriminação — **[NÃO VERIFICADO]**: confira o **estado atual** (houve decisão de tribunal superior) antes de qualquer afirmação.
- **Exigência de perigo concreto no art. 309** e **natureza (abstrato) do art. 306** após as Leis 12.760/2012 e 13.546/2017 — **[NÃO VERIFICADO]**: confira **tese + dispositivo** e a **redação vigente**.
- Enunciados sobre **prova da embriaguez**, valor da **recusa** ao etilômetro, parâmetros do **CONTRAN** e cabimento de benefícios do **art. 291 CTB** — **[NÃO VERIFICADO]**: não citar número de acórdão nem súmula de memória.

**Direito intertemporal:** para fatos anteriores a alterações mais gravosas (redação do 306; endurecimento de penas), aplicar a **lei mais benéfica** ao tempo do fato (irretroatividade da lei penal gravosa — CF, art. 5º, XL). Cotejar penas concretamente.

## Checklist e anti-padrões

- [ ] **Qual tipo** dos arts. 304-312 foi imputado, e seus **elementos** estão todos descritos?
- [ ] **Crime ou infração administrativa** — a conduta é penalmente típica ou só sancionável no CTB administrativo?
- [ ] **Perigo concreto** (309/308/311) foi **demonstrado**, ou a denúncia apenas afirma a irregularidade?
- [ ] **Prova do estado etílico** (306): etilômetro válido (INMETRO), exame de sangue com cadeia de custódia, ou sinais objetivos suficientes?
- [ ] **Recusa** ao teste: tratada como sanção administrativa e **não** como crime/confissão?
- [ ] **Finalidade específica** presente onde o tipo exige (305 fugir à responsabilidade; 312 induzir a erro)?
- [ ] **Ciência inequívoca** da suspensão (307) / da inaptidão (310) comprovada?
- [ ] **Despenalizadores** avaliados (JECRIM, transação, sursis, ANPP) — e as vedações do **art. 291 CTB** conferidas?
- [ ] **Prescrição** verificada (penas baixas prescrevem rápido)?
- [ ] **Redação vigente** e **data do fato** conferidas (Leis 12.760/2012 e 13.546/2017; irretroatividade)?
- [ ] **Tudo verificado** via `jurisprudencia-stj-stf` — nada citado de memória, sobretudo 305 e 306/309?

**Anti-padrões (evitar):**
- Tratar **dirigir sem CNH** (309) como crime **sem** enfrentar a exigência de **perigo concreto**.
- Aceitar a **recusa** ao bafômetro como prova da embriaguez (306) ou como confissão.
- Sustentar tese sobre a **constitucionalidade do 305** de memória, em qualquer sentido.
- Confundir **crime** de trânsito com **infração administrativa** do CTB.
- Aplicar a **redação/pena mais gravosa** a fato **anterior** à lei (viola a irretroatividade).
- Ignorar as **vedações do art. 291 CTB** ao pleitear benefícios (racha, embriaguez, alta velocidade).
- Aceitar "sinais de embriaguez" **genéricos** sem descrição objetiva e sem aferição, quando ausente exame quantitativo.
- Citar precedente sobre perigo concreto/prova etílica **sem** passar pelo gate.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar o **perigo concreto**, o **estado etílico** e a **finalidade específica** é da acusação; espelhar as teses acima como pontos a **provar**, não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA — atenção redobrada ao **305** e ao **306/309**.
- **Sigilo/LGPD:** dados do assistido e da vítima não vão a repositório público.

## Lembretes finais

- **Triagem primeiro:** é **crime ou infração administrativa**? O tipo exige **perigo concreto** ou **abstrato**?
- **309/308/311** vivem do **perigo concreto** — sem ele, atipicidade penal.
- **306** migra para a **prova do estado** e a **não autoincriminação** — não para a ausência de perigo concreto.
- **305** tem **questão constitucional aberta** e exige **finalidade de fuga** — conferir precedente e explorar a motivação real.
- **Vigência e data do fato** mandam: Leis 12.760/2012 e 13.546/2017; **não retroagir** lei mais grave.
- **Sem jurisprudência de memória** — confira via `jurisprudencia-stj-stf`, sobretudo nos pontos marcados **[NÃO VERIFICADO]**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
