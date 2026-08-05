---
name: requerimento-diligencias-acusacao
description: >-
  Use ao requerer diligências probatórias EM FAVOR DA ACUSAÇÃO — na fase do art. 402 do CPP
  (diligências após a instrução, em que o MP fala PRIMEIRO) e na requisição de diligências
  investigativas complementares à autoridade policial (CPP 13, II; 47; CF 129, VIII) para suprir
  lacuna do IP antes ou depois da denúncia. SKILL DO POLO ACUSATÓRIO (Ministério Público ou
  assistente de acusação): só se aplica a quem atua na acusação… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-requerimento-diligencias-acusacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["requerimento-diligencias-acusacao", "requerimento diligencias", "diligencias acusacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Requerimento de Diligências pela Acusação (art. 402 do CPP; poder requisitório — arts. 13, II, e 47 do CPP; CF, art. 129, VIII)

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

Esta skill orienta o polo acusatório a **requerer diligências probatórias**, em duas situações distintas que não se confundem:

1. **Endoprocessual (art. 402 do CPP):** encerrada a instrução em audiência, cada parte pode **requerer diligências cujas necessidades se originem de circunstâncias ou fatos apurados na instrução**. Aqui a **acusação fala PRIMEIRO** (é ela quem abre a ordem de manifestação), diferentemente das alegações finais, em que o réu fala por último.
2. **Requisitória sobre a investigação (arts. 13, II, e 47 do CPP; CF, art. 129, VIII):** fora da instrução, o Ministério Público **REQUISITA** (não "pede") diligências à autoridade policial para suprir lacunas do inquérito — poder próprio, de natureza ordinatória, exercido antes ou depois de oferecida a denúncia. No âmbito do Procedimento Investigatório Criminal (PIC), o próprio MP determina e realiza diligências (Res. CNMP 181/2017).

> **ALERTA DE POLO — leia antes de usar.** Esta skill é do **POLO ACUSATÓRIO** (MP ou assistente de acusação). O **roteador deve conferir o polo do usuário** (perfil em `_memory/company.md`) **antes** de sugeri-la. Para o mesmo art. 402 na ótica DEFENSIVA — impugnar a diligência requerida pelo MP, protestar contra indeferimento em favor do réu —, use `pedido-diligencias`. Para o requerimento da VÍTIMA dirigido à autoridade para abrir IP, use `requerimento-investigacao`. Não misture os polos.

> **Lição central:** distinga **REQUERER** de **REQUISITAR**. Na instrução (art. 402), o MP **requer ao juiz** — e a diligência só é cabível se sua necessidade **surgiu de fato apurado na própria instrução** (não serve para reabrir prova que a acusação deixou de produzir a tempo). Fora dela, o MP **requisita diretamente à polícia** (art. 13, II) — ordem, não pedido. Confundir os dois regimes é o erro mais comum.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 402, 13, 47 e 156 do CPP e da Res. CNMP 181/2017, bem como súmulas, temas e eventual *overruling*, via a skill `jurisprudencia-stj-stf` antes de fundamentar a peça. A sistemática do art. 402 decorre da **Lei 11.719/2008** (reforma do procedimento comum) — citar a fase de "requerimento de diligências" no molde anterior a 2008 é erro de vigência.

## Base legal

- **Art. 402 do CPP** — encerrada a instrução, **poderá cada parte requerer diligências** cuja necessidade se origine de circunstâncias ou fatos apurados na instrução; a acusação manifesta-se primeiro.
- **Art. 404 do CPP** — ordenada a diligência considerada imprescindível, a audiência é concluída sem alegações finais, que passam a memoriais após sua realização.
- **Art. 13, II, do CPP** — incumbe à autoridade policial **realizar as diligências requisitadas** pelo juiz ou pelo Ministério Público.
- **Art. 47 do CPP** — se o MP julgar necessários maiores esclarecimentos e documentos complementares ou novos elementos de convicção, deverá **requisitá-los** diretamente de quaisquer autoridades ou funcionários.
- **CF, art. 129, incisos VII e VIII** — o MP exerce o controle externo da atividade policial e **requisita diligências investigatórias e a instauração de inquérito policial**, indicados os fundamentos jurídicos.
- **Art. 156, do CPP** — ônus da prova e poderes instrutórios; base para requerer produção de prova pertinente e necessária.
- **Res. CNMP 181/2017** — disciplina o **Procedimento Investigatório Criminal (PIC)**, em que o próprio MP determina e realiza diligências.

## Regime 1 — Diligências na instrução (art. 402)

**Requisito nuclear (superveniência):** a diligência só cabe se a **necessidade se originou de circunstância ou fato apurado NA instrução**. Não é oportunidade para produzir prova que a acusação poderia e deveria ter requerido na denúncia (art. 41) ou até a audiência. O requerimento deve **demonstrar o nexo** entre o que emergiu na instrução e a diligência pedida.

**Momento e ordem:** ao final da audiência de instrução e julgamento, **antes** da fase de alegações finais orais/memoriais. A **acusação se manifesta primeiro**; depois a defesa. Requerida e deferida diligência **imprescindível**, aplica-se o art. 404 (memoriais escritos após a realização).

**Exemplos de diligência cabível (originada na instrução):**
- Testemunha revelou, em juízo, a existência de **documento** ou **objeto** antes desconhecido → requerer sua requisição/juntada.
- Depoimento apontou **testemunha referida** (art. 209, §1º, CPP) até então ignorada → requerer sua oitiva.
- Laudo pericial impugnado em audiência revelou ponto obscuro → requerer **esclarecimento do perito** ou **nova/complementar perícia** (arts. 159, §5º, e 181, CPP).
- Contradição surgida no interrogatório sugere necessidade de **acareação** (art. 229, CPP) ou de **exame** específico.

**Requisitos de admissibilidade a demonstrar no requerimento:**
- **Pertinência** — a diligência se relaciona com o objeto do processo.
- **Necessidade/imprescindibilidade** — sem ela, ponto relevante fica sem elucidação.
- **Superveniência** — a necessidade **nasceu na instrução** (é o filtro do art. 402).
- **Não protelatória** — não se presta a tumultuar ou a suprir desídia probatória.

## Regime 2 — Requisição de diligências à polícia / a autoridades (arts. 13, II; 47; CF 129, VIII)

Aqui o MP **não pede ao juiz**: **requisita** diretamente. É poder-dever de natureza ordinatória, exercido para **suprir lacuna do inquérito** — antes do oferecimento da denúncia (aperfeiçoar a *opinio delicti*) ou mesmo depois (esclarecer ponto que a instrução exigirá).

**O que pode ser requisitado (rol exemplificativo):**
- **À autoridade policial (art. 13, II):** oitiva de testemunha faltante, reconhecimento pessoal formal (art. 226, CPP), reprodução simulada, busca e apreensão a ser representada, juntada de laudo/perícia pendente, quebra de sigilo a ser representada ao juízo, complementação de relatório.
- **A autoridades e funcionários em geral (art. 47):** documentos, informações e certidões (registros, prontuários — observados os regimes de sigilo e a reserva de jurisdição), dados cadastrais, extratos, cópias de procedimentos administrativos.

**Limites do poder requisitório (o MP requisita, mas não tudo):**
- **Reserva de jurisdição** — medidas que dependem de ordem judicial (interceptação telefônica — Lei 9.296/96; busca domiciliar — CF, art. 5º, XI; quebra de sigilo bancário/fiscal) **não** se requisitam à polícia: **representa-se ao juízo**.
- **Sigilo profissional e direitos fundamentais** — a requisição não afasta garantias; dados sensíveis exigem fundamentação e, quando o caso, autorização judicial.
- **Dever de fundamentação** — a requisição indica os **fundamentos jurídicos** (CF, art. 129, VIII, parte final) e o objeto preciso.

## Estrutura da peça — Regime 1 (requerimento ao juízo, art. 402)

```
EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA [Nª] VARA CRIMINAL DA
COMARCA DE [COMARCA] / [Nª VARA] DA SEÇÃO/SUBSEÇÃO JUDICIÁRIA DE [LOCAL]

Autos nº [Nº DO PROCESSO]

O MINISTÉRIO PÚBLICO [DO ESTADO DE / FEDERAL], por seu(sua) Promotor(a)/Procurador(a)
que esta subscreve, nos autos da ação penal em epígrafe movida em face de [RÉU], vem,
com fundamento no art. 402 do Código de Processo Penal, requerer a realização das
DILIGÊNCIAS abaixo, cuja necessidade se originou de fatos apurados na instrução,
pelas razões a seguir.

I — DA ORIGEM DA NECESSIDADE NA INSTRUÇÃO
Durante a audiência de instrução, [descrever o fato/circunstância superveniente — ex.:
a testemunha (NOME) revelou a existência de (documento/objeto/testemunha referida) até
então desconhecido nos autos], do que resulta a necessidade da diligência ora requerida
(art. 402, in fine — necessidade originada na instrução).

II — DAS DILIGÊNCIAS REQUERIDAS
a) [ex.: a oitiva da testemunha referida (NOME), nos termos do art. 209, §1º, do CPP];
b) [ex.: a requisição/juntada do documento (…) mencionado em audiência];
c) [ex.: o esclarecimento do perito quanto a (…) — art. 159, §5º, do CPP].

III — DA PERTINÊNCIA E NECESSIDADE
As diligências são pertinentes ao objeto da ação penal e imprescindíveis à elucidação de
[PONTO], não se prestando a fim protelatório, razão pela qual, sendo consideradas
imprescindíveis, incide o art. 404 do CPP (memoriais após a realização).

IV — DO PEDIDO
Requer o deferimento das diligências elencadas no item II e, uma vez realizadas, a abertura
de vista para alegações finais por memoriais (art. 404, parágrafo único, do CPP).

[LOCAL], [DATA].
[NOME], [Promotor(a)/Procurador(a) de Justiça/da República] — [MATRÍCULA/CARGO]
```

## Estrutura da peça — Regime 2 (requisição à autoridade policial)

```
REQUISIÇÃO DE DILIGÊNCIAS
[Ofício nº __/__ — Promotoria de Justiça de __ / __ Ofício]

Ao(À) Sr(a). Delegado(a) de Polícia [TITULAR DA DELEGACIA / UNIDADE]
Ref.: Inquérito Policial nº [Nº] / Autos nº [Nº] / PIC nº [Nº]

O MINISTÉRIO PÚBLICO, no exercício do controle externo da atividade policial e do poder
requisitório (CF, art. 129, VII e VIII; arts. 13, II, e 47 do CPP), REQUISITA a Vossa
Senhoria a realização das seguintes diligências, indicados os fundamentos jurídicos:

1. [ex.: oitiva da testemunha (NOME/QUALIFICAÇÃO), a respeito de (…)];
2. [ex.: reconhecimento pessoal formal (art. 226 do CPP) do investigado por (…)];
3. [ex.: juntada do laudo pericial de (…), ora pendente];
4. [ex.: requisição, junto a (ÓRGÃO), das informações/documentos (…) — art. 47 do CPP].

Fundamento: as diligências destinam-se a [suprir lacuna do IP / aperfeiçoar a formação da
opinio delicti / esclarecer (…)]. Fixa-se o prazo de [PRAZO] para cumprimento e
comunicação a esta Promotoria.

[Observação: medidas sujeitas a reserva de jurisdição (interceptação, busca domiciliar,
quebra de sigilo) NÃO são objeto desta requisição — serão, se o caso, representadas ao juízo.]

[LOCAL], [DATA].
[NOME] — [Cargo] — [Matrícula]
```

## Teses e contra-teses (acusação × defesa)

**Teses da acusação (a favor da diligência):**
- **Superveniência demonstrada (art. 402):** a necessidade nasceu na instrução; não é reabertura de prova preclusa.
- **Busca da verdade real e poderes instrutórios (art. 156):** a diligência serve à correta elucidação dos fatos, interesse público indisponível.
- **Imprescindibilidade → art. 404:** sendo imprescindível, a conclusão da audiência sem alegações orais e a conversão em memoriais é consequência legal, não favor.
- **Poder requisitório autônomo (Regime 2):** a requisição à polícia é ato próprio do MP (arts. 13, II; 47; CF 129, VIII), independente de deferimento judicial, salvo reserva de jurisdição.

**Contra-teses previsíveis da defesa (antecipar e rebater):**
- **"Diligência preclusa / desídia probatória":** rebater demonstrando o **nexo de superveniência** (o fato surgiu na instrução, não antes).
- **"Caráter protelatório / prova impertinente":** rebater com **pertinência ao objeto** e **necessidade concreta** para ponto ainda obscuro.
- **"Reabertura da instrução viola a paridade de armas":** o art. 402 é **bilateral** (também a defesa requer); e a acusação apenas exerce faculdade legal, sem quebra de isonomia.
- **"Requisição extrapola o poder do MP":** conferir a **reserva de jurisdição** — se a medida exigir ordem judicial, corrigir a via (representar ao juízo), não insistir na requisição.

## Erros comuns / anti-padrões (evitar)

- **Usar o art. 402 para produzir prova que já deveria constar da denúncia** — sem superveniência, a diligência é indeferida.
- **Confundir "requerer" (ao juiz, art. 402) com "requisitar" (à polícia, art. 13, II)** — regimes e destinatários distintos.
- **Requisitar à polícia medida sob reserva de jurisdição** (interceptação, busca domiciliar, quebra de sigilo) — deve-se **representar ao juízo**.
- **Requisição genérica, sem objeto preciso nem fundamento jurídico** — viola o dever de fundamentação (CF, art. 129, VIII).
- **Ignorar o art. 404** ao pleitear diligência imprescindível — pedir, no mesmo ato, a conversão em memoriais.
- **Citar a sistemática pré-2008 do procedimento comum** — a fase do art. 402 é da Lei 11.719/2008.
- **Requisitar dados sensíveis sem observar sigilo/LGPD** e sem fundamentar a necessidade e a proporcionalidade.

## Checklist final

- [ ] Identificado o **regime** correto: endoprocessual (art. 402) **ou** requisitório (arts. 13, II / 47 / CF 129, VIII)?
- [ ] No art. 402: a **necessidade nasceu na instrução** (superveniência) e está **demonstrada** no requerimento?
- [ ] **Pertinência, necessidade e não-protelação** justificadas?
- [ ] Se imprescindível, pedido de **conversão em memoriais** (art. 404)?
- [ ] Na requisição: **objeto preciso** e **fundamentos jurídicos** indicados (CF, art. 129, VIII)?
- [ ] Nenhuma medida sob **reserva de jurisdição** foi indevidamente requisitada à polícia?
- [ ] Prazo de cumprimento fixado e via de comunicação indicada (Regime 2)?
- [ ] **Ordem de manifestação** correta: na instrução, a **acusação fala primeiro**?
- [ ] Dispositivos e eventual jurisprudência **conferidos via `jurisprudencia-stj-stf`** antes de citar?
- [ ] **Polo do usuário conferido** (acusação) — esta skill não serve à defesa?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à elaboração; a responsabilidade pelo ato e por sua fundamentação é sempre do membro do Ministério Público (ou do advogado assistente de acusação).
- **Ética por polo — Ministério Público (CNMP).** Atuação regida pela LC 75/93 / Lei 8.625/93 e pelos atos do **CNMP**; o MP requisita com **fundamentação**, no interesse público e com **objetividade** (deve requerer também o que favorece o acusado, se o caso — atuação como fiscal da ordem jurídica). Se a atuação for de **assistente de acusação** (advogado do ofendido, arts. 268-273 do CPP), incidem o **EAOAB** e o **Provimento 205/2021** da OAB.
- **Citation Gate.** Nenhuma súmula, tema ou precedente é citado de memória: qualquer número específico de HC/REsp/RE, informativo ou tema é **[NÃO VERIFICADO]** até conferência na skill `jurisprudencia-stj-stf`. Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão — melhor faltar precedente do que citar julgado inexistente.
- **Sigilo e LGPD.** Requisições que envolvam dados pessoais/sensíveis observam a finalidade, a necessidade e o sigilo; dados de investigados/vítimas não vão a repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua que a revisão cobra).
