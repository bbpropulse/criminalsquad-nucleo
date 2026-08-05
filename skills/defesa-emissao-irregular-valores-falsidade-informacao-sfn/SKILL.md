---
name: defesa-emissao-irregular-valores-falsidade-informacao-sfn
description: >-
  Use ao defender acusados pelos crimes de informação e emissão da Lei 7.492/86 (crimes contra o
  Sistema Financeiro Nacional — 'lei do colarinho branco'): indução/manutenção em erro e
  sonegação/falsidade de informação a sócio, investidor ou repartição pública (art. 6º); emissão,
  oferta ou negociação irregular de títulos ou valores mobiliários — falsos, sem registro, sem
  lastro ou sem autorização (art. 7º); fraude à… Gatilhos… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, penal-economico, leis-especiais, sfn]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-emissao-irregular-valores-falsidade-informacao-sfn"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-emissao-irregular-valores-falsidade-informacao-sfn", "defesa emissao", "falsidade informacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa dos crimes de informação e emissão da Lei 7.492/86 (SFN)

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

Esta skill orienta a **defesa técnica** nos crimes contra o Sistema Financeiro Nacional ligados a **informação e emissão** — arts. **6º, 7º, 9º, 10 e 11 da Lei 7.492/86** ("lei do colarinho branco"). São tipos de **direito penal econômico**, de bem jurídico **supraindividual** (a higidez e a credibilidade do SFN), em geral processados pelo **MPF perante a Justiça Federal** (art. 26). Entrega é **rascunho para revisão humana**.

> **Lição central:** antes de discutir dolo, prova ou dosimetria, **teste dois pressupostos que fulminam a tipicidade**: (1) **há instituição financeira ou equiparada (art. 1º e parágrafo único)?** — sem SFN em jogo, o tipo da 7.492 não incide; e (2) **a conduta do seu cliente está individualizada?** — o art. 25 define quem responde (controlador e administradores), mas **não autoriza responsabilidade penal objetiva** pela mera posição no organograma. A maioria das absolvições nasce de um desses dois pontos, não da tese de mérito.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 7.492/86 é de 1986 e sofreu poucas alterações — **confira a redação vigente** de cada artigo e das penas. Pontos sensíveis: o **conceito de "valor mobiliário"** (Lei 6.385/76, art. 2º, ampliado pela Lei 10.303/2001 — contratos de investimento coletivo) governa o art. 7º; o **sigilo bancário/fiscal** segue a **LC 105/2001**; a **colaboração premiada** tem regra própria no art. 25, §2º, além do regime geral (Lei 12.850/2013). Toda súmula, tese e acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes do uso. **Na dúvida sobre precedente específico, omita ou marque [NÃO VERIFICADO].**

## O que a Lei 7.492 protege — e a fronteira com outras leis

- **Bem jurídico:** a **regularidade e a confiança no SFN** (interesse difuso), não o patrimônio individual isolado. Isso explica por que os tribunais **resistem à insignificância** nesses crimes (ver contra-tese adiante).
- **Fronteira (conflito aparente de normas):** distinga a 7.492 de (i) **estelionato** (art. 171 CP), (ii) **falsidade documental** (arts. 297-299 CP), (iii) **sonegação fiscal** (Lei 8.137/90 — ver skill `defesa-crimes-tributarios-ordem-economica-relacoes-consumo`), (iv) **caixa 2 eleitoral** (art. 350 do Código Eleitoral) e (v) **lavagem** (Lei 9.613/98). Predomina a **especialidade**; havendo progressão criminosa ou meio/fim, avaliar **consunção** para afastar **bis in idem**.

## Base legal

- **Art. 1º da Lei 7.492/86** — conceito de **instituição financeira**; **parágrafo único** equipara a pessoa jurídica que capte/aplique recursos de terceiros e a **pessoa natural** que exerça as atividades "ainda que de forma eventual".
- **Arts. 6º, 7º, 9º, 10 e 11** — os tipos objeto desta skill (detalhados abaixo).
- **Art. 25** — responsáveis penais: **controlador e administradores** (diretores e gerentes); §1º equipara interventor, liquidante e síndico; **§2º — colaboração premiada** (redução de 1 a 2/3).
- **Art. 26** — ação penal pública **incondicionada**, promovida pelo **MPF** perante a **Justiça Federal**; parágrafo único admite **assistência da CVM/BACEN**.
- **Lei 6.385/76, art. 2º** — define **valor mobiliário** (baliza do art. 7º).
- **LC 105/2001** — sigilo bancário; **CP, arts. 16 (arrependimento posterior) e 59-68 (dosimetria)**.

## Roteiro de defesa (ordem de trabalho)

1. **Pressuposto 1 — há SFN?** Enquadrar (ou afastar) o ente no art. 1º e parágrafo único. Sem instituição financeira/equiparada, atacar **atipicidade**.
2. **Pressuposto 2 — quem responde?** Confrontar a imputação com o art. 25 e exigir **individualização da conduta** (art. 41 CPP); mapear cargos, delegações e domínio real do fato.
3. **Classificar o tipo** exato (6º/7º/9º/10/11) e checar **concurso aparente** entre eles e com CP/8.137/CE (especialidade/consunção — barra o bis in idem).
4. **Elemento subjetivo** — testar dolo, erro de tipo e boa-fé (não há forma culposa).
5. **Prova** — impugnar quebra de sigilo (LC 105) e cadeia de custódia dos documentos contábeis.
6. **Prescrição e dosimetria** — aferir com `calculadora-prescricao` e a skill de dosimetria (permanência no art. 11).
7. **Estratégia** — avaliar colaboração premiada própria (art. 25, §2º) e eventual reparação (art. 16 CP como atenuante).

## Metodologia por tipo penal

Para cada tipo: **núcleo → sujeito → consumação → teses de defesa → distinção**.

### Art. 6º — indução/manutenção em erro; sonegação ou falsidade de informação
- **Núcleo:** induzir ou manter em erro **sócio, investidor ou repartição pública competente** (ex.: BACEN, CVM), quanto a operação ou situação financeira, **sonegando** informação ou **prestando-a falsamente**. Pena de referência: reclusão, **2 a 6 anos**, e multa (conferir).
- **Consumação:** crime **formal** — consuma com a indução/manutenção em erro, **independente de prejuízo**.
- **Defesa:** a informação era **verdadeira e completa**; **não houve erro** relevante; o destinatário **não é** sócio/investidor/repartição competente; a "operação ou situação financeira" **não se enquadra**; **ausência de dolo** (boa-fé, informação de terceiro).
- **Distinção:** ≠ estelineato (art. 171 CP — especialidade); ≠ art. 9º (que exige **inserção em documento/registro**).

### Art. 7º — emissão, oferta ou negociação irregular de títulos ou valores mobiliários
- **Núcleo:** emitir, oferecer ou negociar títulos/valores mobiliários **(I)** falsos/falsificados; **(II)** sem registro prévio, em condições divergentes do registro ou irregularmente registrados; **(III)** **sem lastro ou garantia** suficientes; **(IV)** **sem autorização** da autoridade competente. Pena de referência: reclusão, **2 a 8 anos**, e multa (conferir).
- **Defesa:** o instrumento **não é "título" nem "valor mobiliário"** na acepção da Lei 6.385/76 (ex.: mero mútuo civil, contrato paritário, duplicata comercial fora do mercado de capitais); **havia** registro/lastro/autorização; **ausência de dolo**; conduta **atípica** por não haver oferta ao mercado/captação pública.
- **Distinção:** ≠ art. 6º (informação) e ≠ ilícitos meramente **administrativos** da CVM (nem toda irregularidade regulatória é crime).

### Art. 9º — fraude à fiscalização ou ao investidor
- **Núcleo:** **inserir ou fazer inserir** — em documento comprobatório de investimento, em título ou em **qualquer registro contábil** — declaração **falsa ou diversa** da que dele devia constar. Pena de referência: reclusão, **1 a 5 anos**, e multa (conferir).
- **Defesa:** o documento **não é** comprobatório de investimento/título/registro contábil; a declaração **não é falsa** (interpretação contábil defensável, divergência técnica de critério); **ausência do especial fim de fraudar** a fiscalização/investidor.
- **Distinção:** ≠ falsidade documental (arts. 297-299 CP — especialidade); ≠ art. 10 (que exige **demonstrativo contábil** de IF) e ≠ art. 11 (contabilidade **paralela**).

### Art. 10 — demonstrativos contábeis falsos (balanço falso)
- **Núcleo:** inserir **elemento falso** ou **omitir elemento exigido** pela legislação em **demonstrativos contábeis** de **instituição financeira, seguradora ou integrante do sistema de distribuição** de valores mobiliários. Pena de referência: reclusão, **1 a 5 anos**, e multa (conferir).
- **Sujeito:** **crime próprio** — o responsável pela contabilidade/administrador (art. 25). Terceiro só responde como partícipe com **liame concreto**.
- **Defesa:** o ente **não integra** o rol (não é IF/seguradora/distribuidora → atipicidade na 7.492); o elemento **não era "exigido pela legislação"**; **divergência de critério contábil** ≠ falsidade; **delegação** de funções e **ausência de domínio** do fato.
- **Distinção:** ≠ art. 9º (documento de investimento/título) e ≠ art. 11 (recursos fora da contabilidade).

### Art. 11 — recursos à margem da contabilidade ("caixa 2")
- **Núcleo:** **manter ou movimentar** recurso ou valor **paralelamente** à contabilidade exigida pela legislação. Pena de referência: reclusão, **1 a 5 anos**, e multa (conferir).
- **Consumação:** verbo "manter" indica **crime permanente** — releva para **flagrante** e para o **termo inicial da prescrição** (cessação da permanência).
- **Defesa (tese central):** os recursos **estavam contabilizados** (não há contabilidade "paralela"); o ente **não está sujeito à contabilidade do SFN** — o "caixa 2" de empresa **não financeira** pode **não configurar o art. 11 da 7.492** por ausência de lesão ao bem jurídico (SFN), migrando eventualmente para falsidade ideológica (art. 299 CP), sonegação (Lei 8.137) ou caixa 2 eleitoral (art. 350 CE) — **discussão de atipicidade específica** a confirmar via `jurisprudencia-stj-stf`. Também: **ausência de dolo**; valores lançados em sistema auxiliar não é "paralelismo" doloso.
- **Distinção crucial:** **caixa 2 do art. 11 (SFN)** × **caixa 2 eleitoral (art. 350 CE)** × **sonegação fiscal (Lei 8.137)** × **falsidade ideológica (art. 299 CP)** — o **bem jurídico** define qual norma incide e barra o **bis in idem**.

## Teses defensivas transversais (com contra-teses)

1. **Atipicidade por ausência de instituição financeira/equiparação (art. 1º).** Se o ente não capta/aplica/administra recursos ou valores de terceiros (nem se equipara no parágrafo único), **falta pressuposto do tipo**. Tese forte e sub-explorada.
   ➡️ *Contra-tese (acusação):* equiparação ampla do parágrafo único, inclusive à pessoa natural que atua "de forma eventual".

2. **Inépcia da denúncia / denúncia genérica em crime societário (art. 41 CPP).** Exigir a **descrição individualizada** do vínculo entre o acusado e o fato — vedada a imputação por mero cargo (responsabilidade objetiva). Mesmo nos crimes societários, a denúncia deve estabelecer **nexo mínimo** entre a conduta e o resultado.
   ➡️ *Contra-tese:* nos crimes societários admite-se descrição **mais aberta** da autoria, desde que viabilize a defesa — **[NÃO VERIFICADO]**, conferir o estado atual em `jurisprudencia-stj-stf`.

3. **Ausência de dolo / erro de tipo.** Boa-fé, confiança em parecer técnico/contábil, informação prestada por terceiro, delegação efetiva de funções. Não há modalidade **culposa** nesses tipos.

4. **Conflito aparente de normas — especialidade e consunção (afastar bis in idem).** Uma **única fraude documental** não pode gerar condenação cumulativa por 7.492 **e** CP/8.137 quando meio e fim se absorvem. Mapear a **relação entre os próprios arts. 6º-11** para evitar dupla punição do mesmo fato.

5. **Insignificância — contra-tese forte (usar com cautela).** Por ser bem jurídico **supraindividual**, os tribunais **em regra rejeitam** a bagatela no SFN. Só sustentar em cenário verdadeiramente excepcional; **[NÃO VERIFICADO]** — conferir a orientação vigente antes de arriscar a tese.

6. **Prescrição.** Verificar penas em concreto/abstrato e marcos interruptivos; no art. 11 (permanente), a prescrição só corre da **cessação**. **Não calcule à mão** — use `calculadora-prescricao` (e, para a dosimetria, a skill de dosimetria).

7. **Nulidades probatórias.** **Quebra de sigilo bancário/fiscal** sem ordem judicial idônea (LC 105/2001) e **cadeia de custódia** dos documentos contábeis apreendidos — ver `impugnacao-cadeia-custodia` / `analise-quebra-cadeia-custodia-vestigios`. Prova ilícita contamina o que dela derivar.

8. **Colaboração premiada própria (art. 25, §2º).** Coautor/partícipe que, por **confissão espontânea**, revelar **toda a trama** à autoridade tem a pena **reduzida de 1 a 2/3** — decisão estratégica a discutir com o cliente (não é obrigação de acusar).

## Súmulas e precedentes (sob Citation Gate)

> **Regra:** aqui vão **teses + dispositivos**, não números de acórdão de memória. **Todo precedente/súmula é conferido em `jurisprudencia-stj-stf` antes de ir para a peça.**

- **Competência federal** — decorre do **texto do art. 26 da Lei 7.492** (MPF/Justiça Federal), não de súmula. Se a imputação não toca o SFN, **arguir incompetência**/declínio.
- **Denúncia em crimes societários** — orientação de que o cargo não basta, mas admite-se descrição mais aberta: **[NÃO VERIFICADO]**, confirmar teor e alcance atuais.
- **Insignificância no SFN** — tendência de **rejeição**: **[NÃO VERIFICADO]**, confirmar antes de usar como tese ou de temê-la como contra-tese.
- **Súmula Vinculante 24/STF** (crimes materiais contra a ordem tributária dependem do lançamento definitivo) — **não se estende automaticamente** à Lei 7.492; só cogitar quando o fato **também** for tributário. Conferir aplicação concreta no gate.
- **Conceito de valor mobiliário** (art. 7º) — apoiar na **Lei 6.385/76, art. 2º**; qualquer precedente sobre contrato de investimento coletivo passa pelo gate.

## Erros comuns e checklist

- [ ] Confirmei que **há instituição financeira ou equiparada** (art. 1º e parágrafo único)? Se não, **atipicidade** na 7.492.
- [ ] A **conduta do cliente está individualizada** (art. 25) — e não imputada pelo mero cargo (responsabilidade objetiva vedada)?
- [ ] **Classifiquei o tipo correto** (6º informação × 7º emissão × 9º fraude à fiscalização × 10 balanço × 11 caixa 2) e afastei **bis in idem** entre eles e com CP/8.137/CE?
- [ ] Testei **ausência de dolo / erro de tipo** (não há forma culposa)?
- [ ] No **art. 7º**, verifiquei se o instrumento é mesmo **valor mobiliário** (Lei 6.385/76, art. 2º)?
- [ ] No **art. 11**, avaliei a **atipicidade** por ausência de contabilidade do SFN e a **permanência** (marco da prescrição)?
- [ ] **Competência federal** (art. 26) conferida — cabe declínio/incompetência?
- [ ] **Prescrição** aferida com `calculadora-prescricao` (não à mão)?
- [ ] **Prova**: sigilo (LC 105) e **cadeia de custódia** dos documentos impugnados?
- [ ] Avaliei a **colaboração do art. 25, §2º** com o cliente (custo/benefício)?
- [ ] **Toda** súmula/precedente passou por `jurisprudencia-stj-stf`? **Revisão humana** feita?

**Anti-padrões (evitar):**
- Partir para o mérito sem testar **instituição financeira** (art. 1º) e **individualização** (art. 25) — as duas maiores portas de absolvição.
- Aceitar a soma de tipos da 7.492 (e com CP/8.137) sobre **um só fato** sem discutir especialidade/consunção.
- Tratar **caixa 2 de empresa não financeira** como art. 11 sem discutir o **bem jurídico** e a norma realmente incidente.
- Apostar em **insignificância** no SFN como se fosse tese fácil.
- Confundir irregularidade **administrativa** (CVM/BACEN) com **crime**.
- Citar acórdão "de cabeça" — **sanção real** por jurisprudência inventada por IA.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade técnica e o juízo final são sempre do **advogado** (CED/EAOAB).
- **Polo:** **defesa** — a estratégia é articulada em favor do acusado; a mesma matéria, no **polo acusatório**, exige recorte ético próprio (MPF).
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf`; prefira **tese + dispositivo** a número de acórdão; incertos ⇒ **[NÃO VERIFICADO]**.
- **Sigilo/LGPD:** dados do assistido e dos autos não vão para repositório público.

## Lembretes finais

- **Dois pressupostos primeiro:** instituição financeira/equiparada (art. 1º) e conduta individualizada (art. 25) — antes de qualquer tese de mérito.
- **Bem jurídico é supraindividual** (higidez do SFN): explica a **resistência à insignificância** e orienta o afastamento do bis in idem.
- **Classifique o tipo certo** (6º/7º/9º/10/11) e cheque o **concurso aparente** com CP, Lei 8.137 e Código Eleitoral.
- **Caixa 2 (art. 11)** é **crime permanente** e sua incidência depende de contabilidade do **SFN** — sem isso, discutir a norma realmente aplicável.
- **Colaboração premiada própria** no art. 25, §2º (redução de 1 a 2/3) é opção estratégica, não obrigação.
- **Cálculos** (prescrição/dosimetria) na **calculadora**, não à mão; **citações** sempre pelo gate `jurisprudencia-stj-stf`; **revisão humana** obrigatória.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
