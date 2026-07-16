---
name: responsabilidade-penal-pessoa-juridica-ambiental
description: >-
  Use ao elaborar a DEFESA da PESSOA JURÍDICA em crimes ambientais — Lei 9.605/1998, art. 3º e CF
  art. 225, §3º: ausência dos requisitos da imputação (decisão de representante +
  interesse/benefício da entidade), atipicidade/ausência de nexo, superação da dupla imputação,
  penas aplicáveis à PJ, programa de conformidade ambiental e interface administrativa/cível.
  Gatilhos: pessoa jurídica, crime ambiental, Lei 9.605, art. 3º… Não use para conclusão definitiva
  sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, ambiental, pessoa-juridica]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["responsabilidade-penal-pessoa-juridica-ambiental", "responsabilidade penal", "juridica ambiental"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-responsabilidade-penal-pessoa-juridica-ambiental"]
---

# Responsabilidade penal da pessoa jurídica (crimes ambientais) — Defesa

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

Esta skill orienta a **defesa técnica da pessoa jurídica (PJ)** acusada de crime ambiental. O ordenamento brasileiro é uma das poucas ordens jurídicas que admite **responsabilidade penal da pessoa jurídica** — e o faz **apenas** no campo ambiental, por autorização constitucional expressa. O eixo da defesa está em compreender que essa responsabilidade **não é objetiva nem automática**: ela depende de **requisitos específicos** do art. 3º da Lei 9.605/1998 que, ausentes, levam à atipicidade da imputação à empresa.

> **Lição central:** a PJ **não responde por ser a empresa onde o fato ocorreu** — responde apenas quando a infração é cometida **(1) por decisão de seu representante legal/contratual ou de órgão colegiado** e **(2) no interesse ou benefício da entidade** (art. 3º). São **dois requisitos cumulativos**. Antes de qualquer tese, pergunte: a denúncia **demonstra** a decisão do órgão dirigente e o proveito da empresa, ou apenas **presume** a responsabilidade a partir do dano ambiental? Imputação que não descreve concretamente esses dois elementos é **inepta** — e é nesse eixo que a defesa da PJ ganha ou perde.

> **Cautela de vigência (obrigatória antes de citar):** a **teoria da dupla imputação** — que exigia denunciar simultaneamente a PJ e a pessoa física — foi **superada pelo STF (RE 548.181)**, que passou a **dispensar** essa imputação conjunta obrigatória. Este é um ponto de **virada jurisprudencial** e deve ser **conferido no estado atual** via `jurisprudencia-stj-stf` antes de ir à peça, porque (1) o STJ teve por longo tempo entendimento **oposto** (exigindo a dupla imputação) e a convergência exige checagem; (2) a redação da Lei 9.605/1998 e do Decreto que a regulamenta pode ter sido alterada. **Nenhum precedente sobre PJ ambiental vai à peça sem passar pelo gate.** Na dúvida, **omitir vence inventar**.

## Base legal

- **CF, art. 225, §3º** — âncora constitucional: as condutas e atividades lesivas ao meio ambiente sujeitam **os infratores, pessoas físicas OU jurídicas**, a **sanções penais e administrativas**, independentemente da obrigação de reparar o dano. É a autorização constitucional que legitima a responsabilidade penal da PJ no campo ambiental.
- **Lei 9.605/1998, art. 3º, *caput*** — requisitos da imputação à PJ: infração cometida **por decisão de seu representante legal ou contratual, ou de seu órgão colegiado**, **no interesse ou benefício da sua entidade**. **Dois requisitos cumulativos** (autoria decisória qualificada + finalidade de proveito da empresa).
- **Lei 9.605/1998, art. 3º, parágrafo único** — a responsabilidade da PJ **não exclui** a das pessoas físicas autoras, coautoras ou partícipes (responsabilidades que **coexistem**, mas não se confundem).
- **Lei 9.605/1998, arts. 21-24** — **penas aplicáveis à PJ**: **multa** (art. 21, também art. 18); **restritivas de direitos** (art. 22 — suspensão parcial/total de atividades, interdição temporária de estabelecimento, proibição de contratar com o Poder Público e obter subsídios); **prestação de serviços à comunidade** (art. 23); e **liquidação forçada** da pessoa jurídica constituída ou usada **preponderantemente** para permitir/facilitar/ocultar crime ambiental (art. 24 — a pena mais grave, com perdimento do patrimônio ao Fundo Penitenciário Nacional).
- **STF, RE 548.181 (dupla imputação)** — passou a **dispensar** a imputação simultânea obrigatória da pessoa física para processar a PJ. **[NÃO VERIFICADO — conferir estado atual e a posição do STJ via `jurisprudencia-stj-stf`.]**

## Subsunção — roteiro dos requisitos (o que a defesa disseca)

Para responsabilizar penalmente a **pessoa jurídica** por crime ambiental, a acusação precisa demonstrar, **cumulativamente**:

1. **Um crime ambiental típico** (algum dos tipos da Lei 9.605/1998 — poluição, arts. 54 ss.; crimes contra a flora, arts. 38 ss.; contra a fauna, arts. 29 ss.; etc.), com todos os seus elementos (inclusive o **elemento subjetivo** — dolo ou culpa, conforme o tipo).
2. **Autoria decisória qualificada:** o fato decorre de **decisão de representante legal ou contratual, ou de órgão colegiado** da entidade. Não basta que **um empregado qualquer** tenha agido; a conduta deve remontar à **esfera de direção/deliberação** da empresa.
3. **Finalidade de proveito:** a infração foi praticada **no interesse ou benefício da entidade** — vantagem econômica, redução de custos, ganho operacional para a PJ. Ato praticado em **interesse exclusivamente pessoal** do agente, contra ou à margem do interesse da empresa, **não** subsume o art. 3º.
4. **Nexo entre a decisão do órgão dirigente e o resultado lesivo** — a imputação à PJ exige **vínculo** entre a deliberação/gestão e o dano; não se transfere à empresa o ato isolado, desviante e não referendado.

**Método:** teste cada requisito **em separado**. A ausência **de qualquer um** — em especial a **decisão do órgão dirigente** ou o **benefício da entidade** — leva à **atipicidade da imputação à PJ** (ainda que a pessoa física possa responder). A defesa da empresa ataca, em regra, os requisitos **(2)** e **(3)**.

### Árvore de subsunção do art. 3º (fluxograma de decisão)

Percorra os filtros **em ordem**; a parada em qualquer "não" já resolve a defesa da PJ:

```
[1] Há crime ambiental TÍPICO (Lei 9.605/1998) com elemento subjetivo (dolo/culpa)?
     │ não → SEM IMPUTAÇÃO (atipicidade do crime-base — nada a imputar à PJ)
     │ sim
     ▼
[2] O fato decorreu de DECISÃO de representante legal/contratual ou de órgão colegiado?
     │ não (ato isolado de preposto, sem ordem/referendo da direção) → ATIPICIDADE DA IMPUTAÇÃO À PJ
     │ sim                                                              (a pessoa física pode responder)
     ▼
[3] A conduta foi praticada NO INTERESSE OU BENEFÍCIO da entidade?
     │ não (interesse exclusivamente pessoal do agente / contra a empresa) → ATIPICIDADE DA IMPUTAÇÃO À PJ
     │ sim
     ▼
[4] Há NEXO entre a decisão/gestão e o resultado lesivo?
     │ não (causa independente, fato de terceiro, evento natural) → rompimento do nexo
     │ sim
     ▼
IMPUTAÇÃO À PJ EM TESE CABÍVEL → a defesa migra para atipicidade material,
dosimetria/proporcionalidade das penas, esferas administrativa/cível e prescrição.
```

### Mini-exemplos trabalhados (os dois eixos que a defesa disputa)

**Eixo A — "ato isolado de preposto" × "decisão do órgão dirigente" (requisito 2):**

- *Ato isolado (afasta o requisito 2):* motorista da transportadora, para encurtar a rota, despeja resíduos em área proibida, **contrariando** o procedimento interno de destinação e **sem** conhecimento ou ordem da direção. Há crime, mas a conduta **não remonta** à esfera de deliberação da empresa — é desvio individual do preposto. → a PJ **não** subsume o art. 3º; responde o motorista.
- *Decisão dirigente (preenche o requisito 2):* a diretoria, **em ata**, delibera suspender a estação de tratamento de efluentes por seis meses para cortar custos, **ciente** do lançamento irregular resultante. A conduta remonta ao órgão de deliberação. → requisito 2 preenchido.

**Eixo B — "interesse pessoal do agente" × "benefício da entidade" (requisito 3):**

- *Interesse pessoal (afasta o requisito 3):* gerente recebe propina para liberar descarte clandestino de um terceiro, em **proveito próprio** e **contra** o interesse/reputação da empresa. → não subsume o art. 3º (a PJ é vítima do desvio, não beneficiária).
- *Benefício da entidade (preenche o requisito 3):* a supressão do custo de destinação de resíduos **barateia a operação** e **aumenta a margem** da PJ. → proveito econômico direto da empresa; requisito 3 preenchido.

**Leitura defensiva:** a imputação à PJ só se sustenta quando **ambos** os eixos apontam para a empresa (decisão dirigente **e** benefício da entidade). Basta um deslocamento — a decisão foi do preposto, ou o proveito foi pessoal — para romper a subsunção do art. 3º.

## Dupla imputação — de obstáculo a trunfo da defesa

Durante anos prevaleceu a **teoria da dupla imputação**: a PJ só poderia ser denunciada **em conjunto** com a pessoa física responsável; imputar **apenas** a empresa levava à inépcia/rejeição. O **STF (RE 548.181)** **superou** essa exigência, admitindo o processo contra a PJ **independentemente** da imputação simultânea da pessoa física.

Para a defesa, isso é **de dois gumes** — e deve ser usado com precisão:

- **A favor:** se a acusação denunciou **apenas** a pessoa física, sem individualizar a PJ, ou vice-versa, **não se pode exigir** a dupla imputação como condição — logo, não há nulidade automática pela ausência de um dos polos (afasta uma contra-tese acusatória de que "faltou denunciar a empresa").
- **A ponderar:** a superação da dupla imputação **não dispensa** os **requisitos do art. 3º**. Dispensar a dupla imputação **não** significa dispensar a **prova** de que houve **decisão do órgão dirigente** e **benefício da entidade**. A defesa deve separar as duas coisas: *pode* processar só a PJ, mas *só* se os requisitos do art. 3º estiverem concretamente descritos e provados.

➡️ **Uso tático:** confira, via `jurisprudencia-stj-stf`, se o **STJ** já convergiu com o STF (houve período de divergência) e ajuste a tese — em foro onde ainda se exija a dupla imputação, a ausência da pessoa física pode ser **arguida** pela defesa da PJ.

## Catálogo de teses defensivas

1. **Ausência de decisão do órgão dirigente (art. 3º, requisito 2)** — o fato decorreu de ato **isolado de empregado/preposto**, sem deliberação, ordem ou referendo do representante legal/contratual ou de órgão colegiado. A imputação à PJ **não descreve** essa decisão → **atipicidade/inépcia**.
2. **Ausência de interesse ou benefício da entidade (art. 3º, requisito 3)** — a conduta se deu em **interesse exclusivamente pessoal** do agente (fraude interna, desvio, ato contra a política da empresa) ou **sem qualquer proveito** para a PJ → não subsume o art. 3º.
3. **Inépcia da denúncia por imputação genérica/objetiva** — a peça imputa o crime à empresa **pelo só fato do dano ambiental**, sem individualizar a decisão dirigente e o benefício (responsabilidade penal objetiva é **vedada**) → rejeição (art. 395, I, CPP) ou absolvição.
4. **Atipicidade material do crime-base** — ausência de dano ou risco relevante ao bem jurídico ambiental; conduta autorizada por licença válida; erro sobre elemento do tipo. Sem crime ambiental típico, **não há o que imputar** à PJ.
5. **Ausência de nexo causal** — o resultado lesivo decorreu de **causa independente** (fato de terceiro, evento natural, ato de subcontratada fora do controle da PJ) → rompimento do nexo.
6. **Ausência do elemento subjetivo** — no tipo culposo, inexistência de violação do dever objetivo de cuidado (a empresa adotou as cautelas exigíveis); no doloso, ausência de vontade/decisão dirigida ao resultado.
7. **Programa de conformidade ambiental** — sistema de gestão ambiental efetivo, auditorias, licenciamento em dia e resposta imediata ao incidente como prova de **ausência de decisão lesiva do órgão dirigente** e de **diligência** — atenuante e, conforme o caso, elemento de **exclusão** da imputação à PJ (**craft corporativo-penal — verificar o alcance concreto na fonte/jurisprudência atual**).
8. **Desproporção/inadequação da pena** — impugnar a aplicação de restritivas de direitos (art. 22) ou, sobretudo, da **liquidação forçada** (art. 24) fora da hipótese legal (empresa **preponderantemente** voltada ao crime) — a liquidação é medida extrema e excepcional.
9. **Bis in idem sancionatório** — cotejar a sanção penal com a **multa administrativa** (auto de infração) e a **reparação cível** já impostas, para calibrar proporcionalidade e evitar dupla punição pelo mesmo fato (matéria a **verificar** conforme a jurisprudência atual sobre independência das esferas).
10. **Prescrição** — apurar a pena em concreto aplicável à PJ (a **multa** tem regime próprio de prescrição) e os marcos interruptivos — crimes ambientais de pena baixa prescrevem em prazos curtos.

## Programa de conformidade ambiental — como cada elemento sustenta a defesa

O *compliance* ambiental não é adorno reputacional: bem documentado, ele é **prova direta** de que **não houve decisão lesiva do órgão dirigente** (afasta o requisito 2 do art. 3º) e de que a empresa observou o **dever objetivo de cuidado** (afasta o elemento subjetivo culposo). A lógica é: se a direção **estruturou, financiou e fiscalizou** um sistema para *evitar* o dano, o incidente que ainda assim ocorreu tende a ser **desvio de preposto** — ato à margem da deliberação empresarial —, não decisão dirigente no interesse da PJ. Concretize e junte aos autos:

- **Sistema de Gestão Ambiental (SGA / ISO 14001) certificado e operante** — política ambiental formal, objetivos, matriz de responsabilidades e registros de funcionamento. *Sustenta:* demonstra que a **política declarada da empresa** era de conformidade — o dano contraria a decisão dirigente, em vez de dela decorrer (ataca o requisito 2).
- **Licenciamento e condicionantes em dia** — licenças prévia/instalação/operação válidas e o **cumprimento das condicionantes** (monitoramentos, relatórios, planos exigidos pelo órgão ambiental). *Sustenta:* conduta autorizada e fiscalizada pelo poder público reforça a **atipicidade material** (item 4 do catálogo) e a ausência de dolo/culpa dirigidos ao resultado.
- **Auditorias e monitoramento periódico** — auditorias internas/externas, laudos, medições de efluentes/emissões, trilha de indicadores. *Sustenta:* prova de **diligência contínua** — a direção conhecia e controlava o risco, o que rompe a narrativa de "omissão consciente" (contra-tese da acusação) e milita como **atenuante**.
- **Resposta imediata ao incidente** — plano de contingência acionado, comunicação ao órgão ambiental, contenção e início da recuperação. *Sustenta:* comportamento pós-fato incompatível com **interesse/benefício da entidade** no dano (ataca o requisito 3) e pesa na dosimetria (arrependimento/reparação).
- **Due diligence de terceiros e cadeia de fornecedores** — homologação ambiental de transportadoras/destinadoras de resíduos, cláusulas contratuais, verificação de licenças dos parceiros. *Sustenta:* quando o dano vem de **subcontratada**, a diligência na escolha e fiscalização reforça o **rompimento do nexo** (item 5) entre a gestão da PJ e o resultado.
- **Treinamento, canal de denúncia e sanção interna** — capacitação documentada, *whistleblowing* e punição efetiva a quem descumpre. *Sustenta:* corrobora que o eventual ato lesivo foi **individual e reprovado** pela empresa, não referendado pela direção.

> **Alcance — conferir:** o efeito do programa de conformidade (excludente, atenuante ou mero indício) na responsabilidade penal da **PJ ambiental** é **casuístico e depende da jurisprudência atual** — invoque o compliance como prova de ausência de decisão lesiva e de diligência, mas **não** afirme efeito automático de exclusão sem checar a fonte. **[NÃO VERIFICADO — conferir alcance concreto.]**

## Contra-teses da acusação (antecipar)

- **Decisão dirigente comprovada** — atas, e-mails, ordens de serviço, política de metas que induziu a conduta lesiva, ou omissão consciente da direção sobre risco conhecido.
- **Benefício da entidade evidente** — redução de custo de tratamento/destinação de resíduos, ganho de produtividade, economia com licenciamento → proveito econômico direto da PJ.
- **Dispensa da dupla imputação (STF RE 548.181)** — a acusação sustenta poder processar só a PJ, sem a pessoa física.
- **Independência das esferas** — a sanção penal não é afastada pela multa administrativa nem pela reparação cível (matéria consolidada — **conferir**).
- **Responsabilidade por omissão** — dever de garante da direção (poluição por falha de manutenção/monitoramento cujo risco era conhecido e evitável).

A defesa **ataca cada uma na origem**: a decisão apontada é realmente do **órgão dirigente** ou de preposto? O "benefício" é da **empresa** ou pessoal do agente? A dispensa da dupla imputação **não supre** a falta de prova dos requisitos do art. 3º.

## Penas aplicáveis à PJ — o que está em jogo

| Pena | Base | Nota de defesa |
|---|---|---|
| **Multa** | arts. 18 e 21 | Regime próprio; discutir dosimetria e capacidade econômica |
| **Restritivas de direitos** | art. 22 (suspensão de atividades; interdição de estabelecimento; proibição de contratar/obter subsídios do Poder Público) | Impugnar proporcionalidade e o impacto sobre empregos/terceiros de boa-fé |
| **Prestação de serviços à comunidade** | art. 23 (custeio de programas/projetos ambientais, execução de obras de recuperação, manutenção de espaços públicos, contribuições a entidades ambientais) | Via de composição menos gravosa; propor como alternativa |
| **Liquidação forçada** | art. 24 (PJ constituída/usada **preponderantemente** para permitir, facilitar ou ocultar crime ambiental; perdimento do patrimônio) | Medida **extrema**; combater fora da hipótese estrita — exige preponderância criminosa |

## Prescrição — regime da multa e pena baixa (passo a passo)

A prescrição é **matéria de ordem pública**, reconhecível de ofício e a qualquer tempo — e é subaproveitada na defesa da PJ ambiental porque os tipos da Lei 9.605/1998 costumam ter **penas baixas** (muitos com detenção de **3 meses a 1 ano** ou **1 a 3 anos**), o que encurta os prazos do **CP art. 109**. À PJ não se aplica pena privativa de liberdade, mas a **pretensão punitiva** afere-se pela pena **cominada em abstrato ao tipo-base**, e a **multa** — pena principal da PJ — tem **regime próprio (CP art. 114)**. Roteiro de aferição:

1. **Identifique o tipo e a pena máxima cominada.** Localize o crime na Lei 9.605/1998 e a **pena privativa de liberdade máxima** do tipo (é ela que baliza a prescrição da pretensão punitiva, ainda que o réu seja a PJ). Ex.: tipo com máximo de 1 ano → prescrição em **4 anos** (CP art. 109, V); máximo de 3 anos → **8 anos** (art. 109, IV); máximo de até 1 ano ou multa → prazos ainda menores.
2. **Regime da multa (CP art. 114).** Quando a **multa** for a **única** pena cominada/aplicada à PJ, prescreve em **2 anos**; quando cominada/aplicada **cumulativamente** com outra, prescreve **no mesmo prazo** da pena a que se soma. Para a PJ, cuja pena típica é multa + restritivas, isso exige **verificar** como a jurisprudência ancora o prazo (pela pena do tipo-base) — **[NÃO VERIFICADO — conferir a aplicação do art. 114 à PJ].**
3. **Marcos interruptivos (CP art. 117).** Reinicie a contagem em cada marco aplicável: **recebimento da denúncia**, **sentença/acórdão condenatório recorrível** (e demais incisos pertinentes). Entre um marco e outro, o prazo do art. 109 corre integralmente — meça cada intervalo.
4. **Prescrição pela pena em concreto (CP art. 110), após a sentença.** Transitada em julgado para a acusação (ou improvido seu recurso), recalcule o prazo pela **pena efetivamente aplicada** — a **retroativa** (entre marcos anteriores) e a **intercorrente/superveniente** frequentemente fulminam condenações de pena baixa.
5. **Pretensão executória.** Se já houver condenação definitiva, afira separadamente a prescrição da **execução** da multa/restritivas pelos prazos correspondentes.
6. **Confronte com o processo administrativo.** A prescrição penal é **autônoma** da prescrição do auto de infração (esfera administrativa) — não confunda os prazos, mas registre ambos para a estratégia global.

> **Nota:** a mecânica prescricional específica das **penas restritivas de direitos aplicadas à PJ** (parâmetro de contagem, já que o CP ancora prazos na pena privativa de liberdade) é **doutrinária e casuística** — sustente a tese pelo tipo-base e pelo art. 114, e **confira** a orientação atual antes de afirmar prazo fechado. **[NÃO VERIFICADO.]**

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** a matéria de PJ em crime ambiental é **casuística e teve virada de entendimento** (dupla imputação). **Não cite acórdão de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça.

- **STF, RE 548.181** — **superação** da exigência da dupla imputação obrigatória (PJ pode ser processada sem a imputação simultânea da pessoa física) — **[NÃO VERIFICADO — conferir teor, alcance e estado atual].**
- **Convergência do STJ** — o STJ por longo tempo **exigia** a dupla imputação; verificar se e quando alinhou-se ao STF — **[NÃO VERIFICADO — conferir].**
- **Parâmetros de dosimetria e cabimento das penas dos arts. 21-24 à PJ** — casuísticos; qualquer tese específica **[NÃO VERIFICADO]**.
- **Independência das esferas penal/administrativa/cível em matéria ambiental** — **[NÃO VERIFICADO — conferir posição atual].**

Nenhum enunciado, tese ou acórdão sobre responsabilidade penal da PJ vai à peça sem passar pelo gate.

## Checklist e anti-padrões

- [ ] **Requisito 2 (decisão dirigente):** a denúncia descreve **concretamente** a decisão de representante legal/contratual ou de órgão colegiado, ou apenas presume?
- [ ] **Requisito 3 (benefício da entidade):** há prova de **proveito da empresa**, ou o ato foi de interesse **pessoal** do agente?
- [ ] **Crime-base típico:** há efetivamente um tipo da Lei 9.605/1998 preenchido (com o elemento subjetivo)?
- [ ] **Nexo causal** entre a gestão/decisão e o resultado lesivo verificado?
- [ ] **Imputação objetiva/genérica** afastada (não se responsabiliza a PJ pelo só fato do dano)?
- [ ] **Dupla imputação:** estado atual conferido via `jurisprudencia-stj-stf` — foro exige ou dispensa a pessoa física?
- [ ] **Programa de conformidade ambiental** documentado e invocado (diligência, licenciamento, resposta ao incidente)?
- [ ] **Penas (arts. 21-24):** proporcionalidade discutida; **liquidação forçada (art. 24)** só se houver **preponderância criminosa**?
- [ ] **Esferas administrativa/cível** cotejadas (auto de infração, TAC, reparação) para proporcionalidade e possível *bis in idem*?
- [ ] **Prescrição** verificada (pena baixa/multa — prazos curtos)?
- [ ] **Súmulas e precedentes conferidos** via `jurisprudencia-stj-stf` — nada de memória?

**Anti-padrões (evitar):**
- Tratar a PJ como responsável **objetiva** pelo dano ambiental — a Lei 9.605 exige **decisão dirigente + benefício da entidade**.
- Confundir **ato isolado de empregado** com **decisão do órgão dirigente**.
- Aceitar a imputação à empresa por **interesse pessoal** do agente como se fosse proveito da PJ.
- Invocar a dupla imputação **como se ainda fosse obrigatória** sem conferir a virada do STF — ou, ao contrário, ignorar que **algum foro** ainda a exija.
- Supor que a **dispensa** da dupla imputação **dispensa a prova** dos requisitos do art. 3º (não dispensa).
- Aceitar **liquidação forçada (art. 24)** sem exigir a demonstração de que a PJ era **preponderantemente** voltada ao crime.
- Ignorar o **programa de conformidade** como prova de ausência de decisão lesiva e de diligência.
- Citar acórdão "sobre PJ ambiental" **sem** passar pelo gate de jurisprudência.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar a **decisão do órgão dirigente**, o **benefício da entidade** e o **nexo** é da acusação; espelhar as teses acima como pontos a **provar**, e não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente (em especial o **RE 548.181** e a convergência do STJ) vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Interface interinstitucional:** parâmetros regulamentares e o valor probatório de auditorias/investigações internas evoluem — **conferir fonte oficial atual**.
- **Sigilo/LGPD:** dados da empresa, de sócios e de colaboradores não vão a repositório público.

## Lembretes finais

- **Dois requisitos cumulativos** (decisão dirigente + benefício da entidade) são o eixo — teste um por um; a falta de qualquer um leva à atipicidade da imputação à PJ.
- **Nada de responsabilidade objetiva:** a PJ não responde pelo só fato do dano — a acusação tem de **descrever e provar** o art. 3º.
- **Dupla imputação:** superada pelo STF (RE 548.181) — usar a favor, mas **sem** supor que dispensa a prova dos requisitos; conferir o **estado atual e o STJ**.
- **Penas dos arts. 21-24:** discutir proporcionalidade; **liquidação forçada** é excepcional (preponderância criminosa).
- **Coexistência de esferas:** cotejar penal, administrativa (auto/TAC) e cível para proporcionalidade e possível *bis in idem*.
- **Sem jurisprudência de memória** — a matéria teve virada; confira via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
