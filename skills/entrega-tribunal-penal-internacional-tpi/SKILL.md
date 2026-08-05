---
name: entrega-tribunal-penal-internacional-tpi
description: >-
  Use quando o cliente for objeto de pedido de ENTREGA (surrender) ao Tribunal Penal Internacional —
  instituto AUTÔNOMO, distinto de extradição — sob o Estatuto de Roma (Decreto 4.388/2002; CF art.
  5º, §4º): defesa, cooperação do Brasil, complementaridade, admissibilidade e a entrega de nacional
  x vedação de extradição de brasileiro. Gatilhos: entrega ao TPI, surrender, Tribunal Penal
  Internacional, Estatuto de Roma, entrega… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, tpi]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-entrega-tribunal-penal-internacional-tpi"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["entrega-tribunal-penal-internacional-tpi", "entrega tribunal", "penal internacional"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Entrega ao Tribunal Penal Internacional (Estatuto de Roma — Decreto 4.388/2002; CF, art. 5º, §4º)

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

Esta skill orienta a **defesa de pessoa objeto de pedido de ENTREGA (*surrender*) ao Tribunal Penal Internacional (TPI)** — a cooperação vertical pela qual o Brasil coloca um investigado/acusado à disposição de uma **corte internacional permanente**, e **não** de outro Estado. É instituto **autônomo**, disciplinado pelo **Estatuto de Roma** (internalizado pelo **Decreto 4.388/2002**), com fundamento constitucional na **submissão do Brasil à jurisdição do TPI** (**CF, art. 5º, §4º**, incluído pela EC 45/2004).

> **Lição central:** **entrega (*surrender*) NÃO é extradição.** Extradição é a remessa de pessoa a **outro Estado** soberano (relação horizontal); entrega é a colocação à disposição de um **tribunal internacional** de que o Brasil é parte (relação vertical). A distinção é **decisiva**: a vedação constitucional de extradição do brasileiro nato (**CF, art. 5º, LI**) foi concebida contra Estados estrangeiros e **não se transpõe automaticamente** à entrega ao TPI — que decorre de tratado a que o próprio Brasil aderiu. Errar essa qualificação (tratar como extradição, invocar reciprocidade, exigir dupla tipicidade estatal) é o erro que compromete toda a defesa.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **Estatuto de Roma** (Decreto 4.388/2002) e da **CF, art. 5º, §4º**; verifique se sobreveio **lei de cooperação/implementação** interna que discipline o rito da entrega (há projetos históricos — ex.: PL 4.038/2008 — que podem ter tramitado). Todo dispositivo do Estatuto (arts. 5º a 21, 58, 59, 89 a 91, 93, 98) deve ser conferido na fonte oficial antes de fundamentar a peça, e **qualquer precedente do STF** sobre entrega/TPI passa pelo gate `jurisprudencia-stj-stf`.

## Base legal

- **CF, art. 5º, §4º** — "O Brasil se submete à jurisdição de Tribunal Penal Internacional a cuja criação tenha manifestado adesão" (fundamento constitucional da entrega).
- **CF, art. 5º, LI** — vedação de extradição do brasileiro nato (e do naturalizado, salvo exceções). **A ler em contraste**: aplica-se à extradição (Estado→Estado), cuja natureza a entrega ao TPI **não** compartilha.
- **Decreto 4.388/2002** — promulga o **Estatuto de Roma do Tribunal Penal Internacional** no ordenamento brasileiro.
- **Estatuto de Roma (dispositivos-chave):**
  - **Art. 1º** — o TPI é **complementar** às jurisdições penais nacionais (princípio da complementaridade).
  - **Art. 5º** — crimes de competência: **genocídio, crimes contra a humanidade, crimes de guerra e crime de agressão**.
  - **Arts. 6º a 8º bis** — definições típicas de cada crime.
  - **Art. 17** — **admissibilidade**: o caso é **inadmissível** se já investigado/processado pelo Estado competente (salvo incapacidade ou falta de vontade genuína — *unwillingness/inability*), e a cláusula de **coisa julgada**.
  - **Art. 20** — ***ne bis in idem*** no plano internacional.
  - **Arts. 58 e 59** — mandado de detenção pela TPI e o **procedimento de detenção no Estado da custódia** (direitos da pessoa detida perante o juízo nacional).
  - **Art. 89** — pedido de **entrega (*surrender*)** e a obrigação de cooperação.
  - **Art. 90** — **concurso de pedidos** (entrega ao TPI x extradição a um Estado).
  - **Art. 91** — conteúdo e instrução do pedido de entrega.
  - **Art. 93** — outras formas de cooperação.
  - **Art. 98** — cooperação em matéria de imunidades/acordos internacionais.
- **STF — competência.** O processamento do pedido de cooperação/entrega gravita na esfera do **STF** (guardião da Constituição e órgão dos pedidos de cooperação de cúpula). **Confirme a competência e o rito concretos** — a entrega ao TPI **não** segue automaticamente o rito da extradição (arts. 81 e ss. da Lei de Migração / RISTF); a moldura processual específica deve ser verificada. Passe por `jurisprudencia-stj-stf`.

## O eixo da defesa: entrega ≠ extradição (não confundir os regimes)

| Aspecto | Extradição (Estado → Estado) | Entrega / *surrender* ao TPI |
|---|---|---|
| Destinatário | Outro **Estado** soberano | **Tribunal internacional** (corte de que o Brasil é parte) |
| Base | Tratado bilateral / reciprocidade / Lei de Migração | **Estatuto de Roma** (Decreto 4.388/2002) + CF, art. 5º, §4º |
| Brasileiro nato | **Vedada** (CF, art. 5º, LI) | Vedação **não se transpõe automaticamente** (natureza distinta) |
| Dupla tipicidade | Exigida (crime nos dois Estados) | Regida pelos **tipos do Estatuto** (arts. 6º–8º bis), não por tipicidade estatal |
| Filtro de mérito | Sistema belga/contenciosidade limitada | **Admissibilidade** e **complementaridade** (art. 17) |
| Pena de prisão perpétua | Ressalva/comutação usual na extradição | Prevista no Estatuto (art. 77) — **ponto sensível** frente à CF, art. 5º, XLVII, "b" |

> **Consequência prática para a defesa.** Não adianta migrar as teses clássicas de extradição sem adaptação. A defesa na entrega ao TPI se estrutura em três frentes próprias: (1) **admissibilidade/complementaridade** (art. 17); (2) **garantias da pessoa detida** no procedimento nacional (arts. 55, 59, 67); (3) **conformidade constitucional** de pontos sensíveis (pena perpétua; entrega de nacional), **sem** reciclar a vedação de extradição como se fosse trunfo automático.

## Roteiro de defesa (por frente)

### 1) Complementaridade e admissibilidade (art. 17 ER) — a tese-mãe

O TPI é **complementar**, não substitutivo (art. 1º). O caso é **inadmissível** perante a Corte quando:
- **está sendo ou já foi investigado/processado** pelo Estado que tem jurisdição, **salvo** se o Estado não tiver **vontade genuína** (*unwilling*) ou **capacidade** (*unable*) de conduzi-lo (art. 17, 1, "a" e "b");
- a pessoa **já foi julgada** pela conduta e o novo processo violaria o **ne bis in idem** (art. 17, 1, "c" + art. 20);
- o caso **não tem gravidade suficiente** para justificar a ação do TPI (art. 17, 1, "d").

➡️ **Tese defensiva (forte):** se o Brasil **exerceu ou pode exercer** sua jurisdição sobre a mesma conduta (investigação da PF/MPF, ação penal em curso ou julgada), o caso é **inadmissível** ante a Corte, e a entrega deve ser recusada/questionada — cabe **impugnar a admissibilidade** (art. 19) invocando a complementaridade. A defesa demonstra a atuação **genuína** do Estado brasileiro (que é *willing and able*).
➡️ **Contra-tese (acusação/TPI):** *unwillingness* — investigação estatal simulada, protelatória ou destinada a subtrair o acusado à responsabilidade (art. 17, 2); ou *inability* por colapso do sistema nacional (art. 17, 3). A defesa refuta com provas de investigação **real e independente**.

### 2) Ne bis in idem internacional (art. 20 ER)

Ninguém pode ser processado pelo TPI por conduta pela qual **já foi condenado ou absolvido** pela própria Corte ou por **outro tribunal**, salvo as exceções do art. 20, 3 (processo nacional que visava subtrair à responsabilidade ou que não foi conduzido de forma independente/imparcial).
➡️ **Tese:** havendo **coisa julgada** interna genuína sobre os mesmos fatos, opõe-se o *ne bis in idem* (art. 20) para obstar a entrega/admissibilidade.

### 3) Garantias da pessoa detida no procedimento nacional (arts. 55, 59, 67 ER)

Recebido o **mandado de detenção** (art. 58) e efetivada a custódia, o **juízo nacional** (no Brasil, a esfera do STF) verifica:
- se o mandado se aplica à pessoa, se a detenção observou o devido processo e se os **direitos** foram respeitados (art. 59, 2);
- o direito a requerer **liberdade provisória** enquanto pendente a entrega (art. 59, 3–4), decidido pela autoridade nacional consideradas a gravidade e as circunstâncias;
- os **direitos da pessoa** durante o inquérito (art. 55): não autoincriminação, assistência de defensor, intérprete, não ser submetida a coação/tortura;
- as **garantias do acusado** (art. 67): informação da acusação, tempo e meios de defesa, contraditório.
➡️ **Frente defensiva:** fiscalizar rigorosamente a **regularidade formal** do mandado e do pedido (arts. 58, 91), a **identidade** da pessoa, e pleitear **liberdade provisória** (art. 59, 3) — a custódia não é automática nem indefinida.

### 4) Conformidade constitucional dos pontos sensíveis

- **Pena de prisão perpétua (art. 77 ER) x CF, art. 5º, XLVII, "b".** A Constituição veda a prisão perpétua; o Estatuto a admite. A tese constitucional discute a compatibilidade — **sem** transformá-la em óbice absoluto à entrega (o §4º do art. 5º sinaliza a adesão do Brasil ao regime do Estatuto). **Confirmar** o estado da discussão doutrinária/jurisprudencial via `jurisprudencia-stj-stf`.
- **Entrega de brasileiro nato.** Sustentar que a entrega **não é** a extradição vedada pelo art. 5º, LI, mas **cumprir** o dever de cooperação assumido pela via do §4º **não é, por si, tese de defesa** — a defesa aqui atua no **plano da admissibilidade** (complementaridade) e das **garantias**, não na negativa pura da entrega por nacionalidade.
- **Imunidades e acordos (art. 98).** Quando houver imunidade de terceiro Estado ou acordo internacional, o art. 98 disciplina a cooperação — ponto técnico a examinar caso a caso.

### 5) Concurso de pedidos (art. 90 ER)

Havendo, ao mesmo tempo, **pedido de entrega ao TPI** e **pedido de extradição de um Estado** pela mesma pessoa, o art. 90 estabelece a **ordem de prioridade** (em regra, prevalência do TPI quando a admissibilidade já foi decidida). **Confirmar** a regra aplicável ao caso concreto no texto do art. 90.

## Teses e contra-teses (defesa x acusação/TPI)

- **Defesa — inadmissibilidade por complementaridade (art. 17):** o Estado brasileiro investiga/julga genuinamente ⇒ caso inadmissível; impugnar a admissibilidade (art. 19). **Contra-tese:** *unwilling/unable* (art. 17, 2–3).
- **Defesa — ne bis in idem (art. 20):** coisa julgada interna sobre os mesmos fatos. **Contra-tese:** processo nacional simulado/parcial (art. 20, 3).
- **Defesa — irregularidade formal do pedido/mandado (arts. 58, 91):** ausência de requisitos, erro de identidade, instrução deficiente ⇒ obstar a entrega até saneamento. **Contra-tese:** suficiência dos elementos e possibilidade de complementação.
- **Defesa — liberdade provisória (art. 59, 3–4):** custódia não automática; cabível soltura enquanto pende a entrega. **Contra-tese:** gravidade dos crimes do art. 5º e risco de fuga.
- **Defesa — incompatibilidade constitucional pontual (pena perpétua):** discussão de conformidade. **Contra-tese:** primazia do regime do Estatuto pela adesão do art. 5º, §4º.
- **Erro a evitar (defesa):** invocar a vedação de extradição do nacional (art. 5º, LI) **como óbice automático** — a natureza da entrega afasta essa transposição direta; usar a energia argumentativa na **admissibilidade** e nas **garantias**.

## Precedentes e doutrina (sob o Citation Gate)

> **Regra inegociável:** **não invente jurisprudência.** Cite dispositivos do Estatuto de Roma e da CF com certeza; **qualquer** precedente específico (número de PPE/Ext/HC/ADI no STF, informativo, tema) só entra **após verificação** via `jurisprudencia-stj-stf`. Prefira **ensinar a tese e o dispositivo** a arriscar um número de acórdão.

- **STF — entrega x extradição.** A distinção entre *surrender* (ao TPI) e extradição (a Estado), bem como o alcance da CF, art. 5º, §4º, é objeto de análise doutrinária e eventual manifestação do STF. **[NÃO VERIFICADO]** — não afirmar número de precedente sem conferir em `jurisprudencia-stj-stf`.
- **STF — pena de prisão perpétua na cooperação.** Há jurisprudência consolidada exigindo **comutação da prisão perpétua na extradição**; sua **transposição (ou não) à entrega ao TPI** é discussão específica. **[NÃO VERIFICADO]** — conferir antes de citar; não presumir que a regra da extradição se aplica idêntica à entrega.
- **Doutrina de cooperação penal internacional e de direito internacional penal** sustenta a autonomia da entrega e o princípio da complementaridade — citar autor/obra apenas com referência **conferida** (via `acervo/doutrina/` ou fonte oficial).

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar a entrega ao TPI como **extradição** e reciclar suas teses (reciprocidade, dupla tipicidade estatal, vedação do nacional) sem adaptação.
- Invocar o art. 5º, LI, como **óbice automático** à entrega do brasileiro nato (a natureza distinta afasta a transposição direta).
- **Ignorar a complementaridade (art. 17)** — que é a tese-mãe — e discutir só a nacionalidade.
- Presumir **custódia automática e indefinida**, sem pleitear liberdade provisória (art. 59, 3–4).
- Afirmar precedente do STF **de memória** (número de PPE/Ext/HC/ADI) sem passar pelo gate.
- Presumir que a regra da **comutação de pena perpétua** da extradição se aplica idêntica à entrega — é discussão própria.
- Aceitar mandado/pedido com **instrução deficiente** (arts. 58, 91) sem exigir saneamento.

**Checklist da defesa:**
- [ ] Qualificado corretamente o instituto como **entrega/*surrender*** (Estatuto de Roma), e **não** extradição?
- [ ] Verificada a **admissibilidade/complementaridade** (art. 17) — o Brasil investiga/julga genuinamente os mesmos fatos? Cabe impugnar (art. 19)?
- [ ] Examinado o **ne bis in idem** (art. 20) — há coisa julgada interna genuína?
- [ ] Conferida a **regularidade formal** do mandado (art. 58) e do pedido de entrega (arts. 89, 91) e a **identidade** da pessoa?
- [ ] Pleiteada **liberdade provisória** durante a tramitação (art. 59, 3–4)?
- [ ] Asseguradas as **garantias** da pessoa detida/acusada (arts. 55, 59, 67)?
- [ ] Examinado eventual **concurso de pedidos** (art. 90) e imunidades/acordos (art. 98)?
- [ ] Enfrentada a **conformidade constitucional** de pontos sensíveis (pena perpétua — art. 77 ER x CF, art. 5º, XLVII, "b") **sem** tratá-los como óbice absoluto?
- [ ] **Competência e rito** confirmados (esfera do STF; rito próprio, não o automático da extradição)?
- [ ] Redação vigente do Estatuto (Decreto 4.388/2002), CF, art. 5º, §4º, e eventual lei de implementação **conferidas na fonte oficial**?
- [ ] Todo precedente/tese passou pelo gate `jurisprudencia-stj-stf` antes de ser citado?

## Lembretes finais

- **Entrega não é extradição** — regime, base e lógica próprios (Estatuto de Roma + CF, art. 5º, §4º).
- **Complementaridade (art. 17) é a tese-mãe**: mostre que o Estado brasileiro atua de forma genuína.
- **Garantias da pessoa detida** (arts. 55, 59, 67) e **liberdade provisória** (art. 59, 3) são frentes concretas — custódia não é automática.
- **Nacionalidade (art. 5º, LI)** não é trunfo automático; a energia vai para admissibilidade e garantias.
- **Pena perpétua** é discussão constitucional específica, não óbice presumido.
- **Conferir vigência** do Estatuto e checar **todo** precedente via `jurisprudencia-stj-stf` — na dúvida, **omitir vence inventar**.

## Nota de conformidade

Este material é **rascunho técnico de apoio**, sujeito a **revisão humana obrigatória** — hipótese a confirmar, não peça pronta para protocolo. A responsabilidade pela atuação é sempre do **advogado** (EAOAB; Código de Ética e Disciplina da OAB; Provimento 205/2021 na comunicação/publicidade). **Skill de polo de DEFESA** (patrono da pessoa objeto do pedido de entrega): o roteador deve conferir o **polo** e a natureza da atuação antes de aplicá-la; para atuação do polo acusatório/postulante, adaptar a moldura. Nenhuma súmula, tese ou precedente é citado de memória — tudo passa pelo gate `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
