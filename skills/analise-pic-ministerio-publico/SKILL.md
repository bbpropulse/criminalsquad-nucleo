---
name: analise-pic-ministerio-publico
description: >-
  Use ao analisar criticamente um Procedimento Investigatório Criminal (PIC) conduzido pelo próprio
  Ministério Público — controle da legitimidade da investigação direta do Parquet, requisitos da
  Resolução CNMP 181/2017, acesso aos autos e contraditório possível, prazos, e vícios específicos
  da investigação ministerial (distintos do IP policial). Gatilhos: análise do PIC, procedimento
  investigatório criminal do MP… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-pic-ministerio-publico"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-pic-ministerio-publico", "analise ministerio", "ministerio publico"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise do PIC — Procedimento Investigatório Criminal do MP (Res. CNMP 181/2017; RE 593.727/STF)

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

Esta skill orienta a **leitura crítica de um Procedimento Investigatório Criminal (PIC)** — a investigação conduzida **diretamente pelo Ministério Público**, sem inquérito policial. O objetivo é, na posição da **defesa**, controlar a **legitimidade** dessa investigação direta, verificar o cumprimento dos **requisitos da Resolução CNMP 181/2017**, aferir o **acesso possível aos autos** e mapear os **vícios próprios** do PIC — que **não coincidem** com os vícios do IP policial.

> **Lição central:** o PIC é regido por normativo administrativo (Res. CNMP 181/2017), não pelo CPP do inquérito. Por isso, **antes de atacar o mérito da investigação, ataque a moldura**: (1) o MP podia investigar diretamente aquele caso? (2) o PIC foi formalmente instaurado, com portaria fundamentada e prazo? (3) o defensor teve acesso aos elementos já documentados (SV 14)? A investigação direta é **legítima, mas balizada** — o vício mora nas balizas.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Resolução CNMP 181/2017** (foi alterada por resoluções posteriores do CNMP — ex.: quanto ao ANPP e a prazos) e o estado atual do **RE 593.727/STF (Tema 184 da repercussão geral)** e da **Súmula Vinculante 14**. Toda súmula, tese, tema ou acórdão específico passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) antes de ir para a peça. Na dúvida, **omitir vence inventar**.

## O que é o PIC e como se distingue do inquérito policial

O **PIC** é o procedimento pelo qual o próprio MP colhe elementos de informação para formar sua *opinio delicti* — quando decide investigar por conta própria em vez de requisitar inquérito à polícia. Não é peça obrigatória à ação penal (assim como o IP), e sua ausência de contraditório pleno é da natureza da fase investigativa. As diferenças que importam para a análise:

| Aspecto | Inquérito Policial (IP) | PIC (MP) |
|---|---|---|
| Presidência | Delegado de polícia | Membro do MP |
| Regência | CPP (arts. 4º e ss.) | **Resolução CNMP 181/2017** (norma administrativa) |
| Instauração | Portaria/APF/requisição | **Portaria fundamentada** do promotor (Res. 181, art. 4º e ss.) |
| Legitimidade | Constitucionalmente típica | **Direta, mas balizada** (RE 593.727) |
| Controle externo | MP controla a polícia | **Autocontrole** + revisão pelo Judiciário |

> **Por que a distinção é decisiva.** As skills de análise do **IP policial** (arquivamento, diagnóstico de vícios do inquérito, acesso genérico aos autos) partem do CPP e da lógica do delegado. O PIC tem **regramento próprio** e **legitimidade discutível caso a caso**, então os pontos de ataque são outros: legitimidade da investigação direta, formalidades da Res. 181 e o acesso do defensor.

## Base legal

- **CF, art. 129, I** — o MP é titular privativo da ação penal pública (fundamento remoto do poder de investigar para exercê-la).
- **CF, art. 129, VIII** — o MP pode **requisitar diligências investigatórias** e a instauração de inquérito (âncora do poder investigatório direto, na leitura do STF).
- **CF, art. 129, IX** — cláusula de encerramento das funções institucionais compatíveis com sua finalidade.
- **Resolução CNMP 181/2017** — disciplina o PIC no âmbito do MP: instauração, formalidades, prazos, diligências, publicidade, encerramento e arquivamento (**conferir redação vigente**, alterada por resoluções posteriores).
- **RE 593.727/STF (Tema 184)** — reconheceu, em repercussão geral, o **poder de investigação criminal do MP**, com **balizas** (fiscalização, formalização, sigilo, direitos do investigado). [NAO VERIFICADO — conferir a tese exata e as balizas fixadas via `jurisprudencia-stj-stf`.]
- **Súmula Vinculante 14/STF** — direito do **defensor** de acesso aos elementos de prova **já documentados** em procedimento investigatório (aplicável ao PIC).
- **CPP, arts. 4º e 5º (analogia)** e **LC 75/93 / Lei 8.625/93** (Leis Orgânicas do MP) — competências institucionais de apoio.

## Roteiro de análise do PIC (passo a passo)

### Passo 1 — Legitimidade da investigação direta
Verifique se o caso comporta investigação **direta** pelo MP à luz do RE 593.727. Pontos:
- Há **fundamento** para o MP investigar por conta própria, e não apenas requisitar inquérito? (excepcionalidade/pertinência)
- A investigação respeita as **balizas** fixadas pelo STF (formalização, sigilo quando devido, direitos do investigado, controle jurisdicional)?
- Há **desvio de finalidade** — investigação como instrumento de pressão, sem justa causa investigativa?

### Passo 2 — Formalidades de instauração (Res. CNMP 181)
- Existe **portaria de instauração fundamentada**, com objeto e indiciados delimitados?
- O PIC está **autuado, numerado e registrado** conforme a Resolução?
- A instauração indica os **fatos e a capitulação** investigados (delimitação do objeto)?

### Passo 3 — Prazo e sua prorrogação
- O PIC observa o **prazo** da Res. 181 e as **prorrogações fundamentadas**? (Conferir prazo vigente — a redação foi alterada.)
- Há **excesso de prazo** sem fundamentação idônea, com investigado identificado — sobretudo se houver medida cautelar em curso?

### Passo 4 — Acesso aos autos e contraditório possível (SV 14)
- O **defensor** teve acesso aos elementos **já documentados**? A recusa de acesso ao que já está nos autos viola a **SV 14** — é o ponto de ataque mais recorrente.
- Diligências **em andamento** e ainda não documentadas podem ser mantidas sob sigilo (a SV 14 não alcança o que está em curso) — distinga o documentado do futuro.
- Houve oportunidade de o investigado **requerer diligências** e juntar elementos (Res. 181 prevê participação possível)?

### Passo 5 — Licitude das diligências e cadeia de custódia
- As diligências invasivas (quebra de sigilo, interceptação, busca) tiveram **autorização judicial** quando exigida? O MP **não tem** poder de determinar por si medidas sujeitas à reserva de jurisdição.
- A **cadeia de custódia** dos elementos coletados foi observada (arts. 158-A e ss. do CPP)? Vício aqui contamina a prova. Ver skill `cadeia-de-custodia`, se disponível.
- Oitivas colhidas no PIC respeitaram garantias (direito ao silêncio, presença de defensor quando cabível)?

### Passo 6 — Encerramento, promoção e arquivamento
- O encerramento (denúncia, arquivamento ou ANPP) está **fundamentado**?
- Em caso de **arquivamento**, observou-se o rito da Res. 181 e do **art. 28 do CPP** (redação da Lei 13.964/19 — homologação/revisão interna do MP)? Conferir vigência.
- Se houve **ANPP** derivada do PIC, ver skill própria de acordo de não persecução penal.

### Passo 7 — Impacto sobre a ação penal
- Vício **formal** do PIC (falta de portaria, de prazo) tende a ser **sanável** e, isoladamente, nem sempre nulifica a denúncia — o PIC é peça informativa.
- Vício de **legitimidade** (MP não podia investigar diretamente) ou **prova ilícita** (diligência sem reserva de jurisdição) pode **contaminar a ação penal** e ser levado à rejeição da denúncia (art. 395 CPP) ou ao trancamento por HC.

## Teses (defensivas) e contra-teses (acusação)

**Teses defensivas típicas ao analisar o PIC:**
1. **Ilegitimidade da investigação direta** no caso concreto — extrapolação das balizas do RE 593.727 (desvio de finalidade, ausência de excepcionalidade). Tese de peso quando o MP substitui integralmente a polícia sem justificativa.
2. **Violação da SV 14** — negativa de acesso do defensor aos elementos já documentados. Cabível **reclamação ao STF** por descumprimento de súmula vinculante (art. 103-A, §3º, CF) e/ou HC.
3. **Nulidade das diligências sob reserva de jurisdição** determinadas diretamente pelo MP sem autorização judicial (prova ilícita — CF, art. 5º, LVI).
4. **Ausência de portaria fundamentada / delimitação do objeto** (Res. 181) — investigação genérica e sem baliza (fishing expedition).
5. **Excesso de prazo** desarrazoado, sobretudo com investigado individualizado e medida cautelar em curso.
6. **Quebra da cadeia de custódia** dos elementos coletados no PIC (arts. 158-A e ss., CPP).

**Contra-teses (posição da acusação — para antecipar):**
- O poder investigatório direto do MP é **constitucional** e foi **chancelado em repercussão geral** (RE 593.727); a investigação direta prescinde de prévio inquérito.
- Vícios do PIC são, em regra, de **peça informativa** — não contaminam a ação penal se a denúncia se apoia em **elementos autônomos e lícitos**.
- O sigilo de diligências **em curso** é legítimo e **não afronta a SV 14**, que só alcança o já documentado.

➡️ **Diretriz de análise:** separe o que é **vício de legitimidade/prova ilícita** (potencialmente contaminante, leva a HC/rejeição) do que é **irregularidade formal sanável** (raramente nulifica sozinha). É essa triagem que define a estratégia.

## Súmulas e precedentes relevantes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula Vinculante 14/STF** — acesso do defensor aos elementos **já documentados** em procedimento investigatório. **Aplica-se ao PIC.** (Súmula notória; ainda assim, confira o enunciado literal antes de citar.)
- **RE 593.727/STF (Tema 184)** — poder de investigação criminal do MP e suas balizas. [NAO VERIFICADO — confirmar a tese fixada, o placar e as balizas via `jurisprudencia-stj-stf` antes de usar.]
- **ADI 2.943 / debates sobre a Res. CNMP 181** — discussões de constitucionalidade/limites da normatização do PIC. [NAO VERIFICADO — conferir existência, número e teor via `jurisprudencia-stj-stf`; não citar de memória.]
- Precedentes de **STJ/STF sobre excesso de prazo, SV 14 no PIC e prova ilícita por diligência sem reserva de jurisdição** existem, mas **não cite número de HC/REsp/RE, informativo ou tema sem verificação**. Prefira sustentar a **tese** e o **dispositivo** (CF, art. 129; Res. 181; SV 14; art. 5º, LVI, CF) a arriscar um acórdão. **Melhor faltar precedente do que citar julgado inexistente.**

## Erros comuns / anti-padrões (evitar)

- Tratar o PIC como se fosse **IP policial** e aplicar a lógica do CPP do inquérito — o regramento é a **Res. CNMP 181**.
- **Negar em bloco** a legitimidade da investigação direta do MP — ela é **constitucional** (RE 593.727); ataque as **balizas** no caso concreto, não o poder em abstrato.
- Invocar a **SV 14** para exigir acesso a diligências **em curso** ainda não documentadas — a súmula só alcança o **já documentado**.
- Confundir **vício formal sanável** (peça informativa) com **nulidade da ação penal** — superdimensionar irregularidade menor enfraquece a peça.
- Deixar de checar **reserva de jurisdição**: medidas invasivas determinadas pelo MP sem juiz são o ponto de ilicitude mais forte — não passar batido.
- Citar **número de precedente, tema ou informativo** de memória, sem passar pela skill `jurisprudencia-stj-stf`.
- Ignorar a **cadeia de custódia** dos elementos coletados no PIC.

## Checklist final de análise

- [ ] Confirmada a **redação vigente** da Res. CNMP 181/2017 e o estado atual do **RE 593.727** e da **SV 14**?
- [ ] **Legitimidade** da investigação direta aferida à luz das balizas do RE 593.727 (há desvio de finalidade?)?
- [ ] **Portaria de instauração fundamentada** e objeto delimitado (Res. 181)?
- [ ] **Prazo** e prorrogações fundamentadas — há excesso de prazo?
- [ ] **Acesso do defensor** aos elementos já documentados (SV 14) — houve recusa atacável por reclamação/HC?
- [ ] Diligências sob **reserva de jurisdição** tiveram **autorização judicial**?
- [ ] **Cadeia de custódia** (arts. 158-A e ss., CPP) observada?
- [ ] **Encerramento/arquivamento** conforme Res. 181 e art. 28 CPP (Lei 13.964/19)?
- [ ] Triagem feita entre **vício contaminante** (legitimidade/prova ilícita → HC/rejeição) e **irregularidade sanável**?
- [ ] Toda súmula/tese/precedente **verificado** via `jurisprudencia-stj-stf` antes de citar?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta análise é hipótese de trabalho, não parecer definitivo — a leitura do PIC concreto e a decisão estratégica são sempre do **advogado responsável**.
- **Citation Gate inegociável:** nenhuma súmula, tese, tema ou acórdão vai à peça sem passar pela skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA.
- **Ética conforme o polo:** na **advocacia**, OAB + Provimento 205/2021 (CED e sigilo do cliente); no **Ministério Público**, CNMP; na **Defensoria**, LC 80/94. Esta skill é de **controle da investigação** — serve tipicamente à **defesa** do investigado; o roteador deve conferir o polo do usuário antes de sugeri-la.
- **Sigilo e LGPD:** dados do investigado nunca em repositório público; o material do caso é sigiloso.

**Padrão de redação:** ao converter a análise em peça (resposta, HC, reclamação por SV 14, rejeição da denúncia), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
