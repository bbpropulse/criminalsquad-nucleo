---
name: impugnacao-difusao-vermelha-interpol
description: >-
  Use para atacar difusão vermelha (red notice) ou azul da Interpol — pedido de exclusão/revisão na
  Comissão de Controle dos Arquivos (CCF/CCR, em Lyon), impacto no Brasil e prevenção da prisão para
  extradição. Base no Estatuto da Interpol (arts. 2º e 3º: neutralidade e vedação de perseguição
  política/militar/racial/religiosa), no RPD (Regras de Processamento de Dados), na condição de
  refugiado e no ne bis in idem. Gatilhos… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, interpol, extradicao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-impugnacao-difusao-vermelha-interpol"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["impugnacao-difusao-vermelha-interpol", "impugnacao difusao", "vermelha interpol"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Impugnação de Difusão Vermelha / Red Notice da Interpol (Estatuto da Interpol, arts. 2º e 3º; RPD; CCF)

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

Esta skill orienta a **impugnação de uma difusão vermelha (red notice) ou azul da Interpol** perante a **Comissão de Controle dos Arquivos da Interpol (CCF — Commission for the Control of Interpol's Files; também CCR, em francês)**, com sede na **Secretaria-Geral em Lyon, França**. O objetivo é a **exclusão (deletion) ou correção/bloqueio (correction)** dos dados do requerente nos arquivos da Interpol, atacando a base do alerta **antes** que ele se converta em prisão para fins de extradição em qualquer país — inclusive no Brasil.

> **Lição central:** a red notice **não é um mandado de prisão internacional** — é um **pedido de cooperação** da Interpol para que os países-membros **localizem e detenham provisoriamente** a pessoa com vista à extradição. O ataque decisivo é **supranacional e preventivo**: age-se **na CCF, em Lyon, contra o alerta em si**, de preferência **antes de qualquer prisão**, e não apenas reativamente perante o STF quando o pedido de extradição já chegou. Errar o foro (impugnar só no STF e esquecer a CCF) é o erro estratégico mais grave.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do **Estatuto da Interpol** (em especial os **arts. 2º e 3º**) e das **Rules on the Processing of Data — RPD (Regras de Processamento de Dados)**, que disciplinam critérios de admissibilidade, difusões e o procedimento perante a CCF. Confirme também o **Statute of the Commission for the Control of Interpol's Files** e as diretrizes de admissibilidade da própria CCF, pois o **rito, os prazos e o formulário mudam com frequência**. Qualquer precedente da CCF, do STF ou de cortes estrangeiras deve passar pelo gate `jurisprudencia-stj-stf`. Na dúvida sobre a versão do RPD ou do Estatuto, **confira na fonte oficial (interpol.int) antes de fundamentar**.

---

## O que é e como funciona — a arquitetura do alerta

- **Red notice (difusão/notificação vermelha):** pedido, feito por um país-membro via **Escritório Central Nacional (NCB)** e publicado pela Secretaria-Geral, para **localizar e deter provisoriamente** a pessoa procurada, com vista à **extradição**. Pressupõe, em regra, **mandado de prisão válido** no país requerente.
- **Diffusion (difusão):** alerta enviado **diretamente** por um NCB a outros países, **sem** o crivo prévio completo da Secretaria-Geral — via mais informal, porém frequentemente **menos filtrada** e, por isso, terreno fértil para abusos. Também impugnável na CCF.
- **Blue notice (difusão azul):** para **localizar/identificar** ou obter informações sobre a pessoa (não é pedido de prisão), mas gera efeitos gravosos (bloqueio de vistos, retenção em fronteiras) e **também** é impugnável.
- **NCB (National Central Bureau):** o ponto de contato nacional da Interpol. No Brasil, funciona no âmbito da **Polícia Federal**.
- **CCF/CCR:** órgão **independente** de controle de dados da Interpol; recebe e decide os **requests for access** (acesso) e **requests for correction/deletion** (correção/exclusão) contra difusões e notificações.

> **A red notice não vincula o Brasil a prender.** Ela é comunicada e **serve de base** a um pedido de prisão cautelar para extradição, mas cada Estado decide conforme seu direito interno e seus tratados. No Brasil, a prisão para extradição é excepcional e submetida ao **STF** (ver skill `defesa-extradicao-passiva-stf`).

## Base normativa (a linha de frente)

- **Estatuto da Interpol, art. 2º** — a Organização atua no **espírito da Declaração Universal dos Direitos Humanos**; toda cooperação deve respeitar direitos fundamentais.
- **Estatuto da Interpol, art. 3º** — **vedação absoluta** a qualquer intervenção ou atividade de **caráter político, militar, religioso ou racial** (a "cláusula de neutralidade" — o coração da maioria das impugnações).
- **RPD — Rules on the Processing of Data (Regras de Processamento de Dados)** — requisitos de **qualidade, exatidão e admissibilidade** dos dados; hipóteses de **bloqueio e exclusão**; e o **procedimento** de acesso/correção. Confirmar a versão vigente e os artigos aplicáveis via fonte oficial.
- **Statute of the CCF** — competência, independência e rito da Comissão (câmara de reclamações — *Requests Chamber*).
- **Direito interno brasileiro (efeitos no Brasil):** **CF, art. 5º, LII** (não extradição por crime político) e **LI** (não extradição de brasileiro nato); **Lei 13.445/2017 (Lei de Migração), arts. 81 a 99** (extradição) e disposições sobre **refúgio** e não devolução; **Lei 9.474/1997** (refúgio e *non-refoulement*).
- **Ne bis in idem** e **coisa julgada/prescrição** no Estado requerido como fundamentos de inadmissibilidade do dado.

## Fundamentos de impugnação (o núcleo das teses)

A CCF avalia se os dados **cumprem** as RPD e o Estatuto. As teses defensivas mais fortes:

1. **Violação do art. 3º (neutralidade) — perseguição política/militar/religiosa/racial.** Demonstrar que a persecução tem **motivação política** (opositor, jornalista, ativista, dissidente) ou disfarça-se de crime comum ("*predominance test*": examina-se o **elemento preponderante** do caso). É a tese mais recorrente e a que mais gera exclusões.
2. **Condição de refugiado/asilado.** Refugiado reconhecido **pelo país que o persegue não pode** ser objeto de red notice movida por esse mesmo Estado — contradiz o reconhecimento internacional de perseguição e o *non-refoulement*. Anexar a decisão de refúgio.
3. **Violação de direitos humanos e do devido processo** no país requerente — ausência de julgamento justo, tortura, revelia sem defesa, tribunais de exceção (art. 2º do Estatuto + DUDH).
4. **Ne bis in idem** — pessoa já **absolvida, condenada e cumprida, anistiada** ou com **extinção da punibilidade** pelos mesmos fatos.
5. **Prescrição** — persecução ou pena prescrita segundo a lei do requerente e/ou do requerido.
6. **Falta de qualidade/exatidão do dado (RPD)** — inexistência de mandado válido, dados desatualizados, imputação vaga, ausência de fatos concretos, ou **falta de interesse real de extradição** (o país nem pediria a extradição efetiva).
7. **Desproporcionalidade** — infração de menor gravidade ou natureza puramente privada/comercial que não justifica alerta mundial.
8. **Duplo grau de motivação abusiva** — uso da Interpol como instrumento de **pressão, coação patrimonial ou disputa comercial/familiar** travestida de crime.

> **Difusão azul e outras.** Embora não peçam prisão, azuis abusivas também violam o art. 3º e as RPD e podem ser excluídas com os mesmos fundamentos, adaptado o pedido (correção/exclusão do dado, não "levantamento de prisão").

## Procedimento perante a CCF (roteiro prático)

> Confirme cada etapa, prazo e formulário na página oficial da CCF antes de protocolar — o rito é revisado periodicamente.

1. **Request for access (pedido de acesso).** Primeiro passo típico: requerer à CCF **confirmação** de que há (ou não) dados sobre o requerente nos arquivos da Interpol e **quais** são. Fundamenta o pedido posterior e documenta a existência do alerta.
2. **Request for correction/deletion (pedido de correção/exclusão).** O pedido de mérito: expor os fundamentos (art. 3º, refúgio, ne bis in idem etc.) e requerer a **exclusão** (ou bloqueio/correção) dos dados. Instruir com **provas robustas** (decisão de refúgio, provas de motivação política, absolvição/prescrição, laudos, cobertura de imprensa, relatórios de ONGs).
3. **Admissibilidade.** A CCF filtra requerimentos manifestamente infundados ou fora do escopo. Endereçar desde já os critérios de admissibilidade das RPD/estatuto da CCF.
4. **Instrução e contraditório interno.** A CCF consulta o **NCB/país-fonte**; o processo é **escrito**, sigiloso e sem audiência típica. A qualidade do dossiê inicial é decisiva.
5. **Decisão da CCF (Requests Chamber).** Pode determinar **exclusão**, **correção**, **bloqueio** (o dado permanece mas fica indisponível aos países) ou **manutenção**. A decisão é, em regra, **vinculante** para a Secretaria-Geral.
6. **Medidas provisórias/urgência.** Havendo risco iminente de prisão (viagem marcada, fronteira), sinalizar **urgência** e requerer providências cautelares.
7. **Reexame/novos elementos.** Indeferido, cabe **novo pedido** com fatos ou provas supervenientes (não há "recurso" clássico; o caminho é a reapreciação com elemento novo).

## Frente paralela no Brasil (efeitos internos)

A impugnação na CCF **não substitui** a defesa doméstica; são frentes **complementares**:

- **Prisão para extradição:** se o pedido de prisão cautelar chegar ao Brasil, a competência é do **STF** (Lei de Migração, arts. 81-99). Atuar na **PPE (prisão preventiva para extradição)** e no processo de extradição — ver skill `defesa-extradicao-passiva-stf`.
- **Brasileiro nato** não é extraditado (**CF, art. 5º, LI**); brasileiro naturalizado, apenas nas hipóteses do inciso. **Crime político** não enseja extradição (**CF, art. 5º, LII**).
- **Refúgio no Brasil:** pedido/reconhecimento de refúgio (Lei 9.474/1997) **suspende** a extradição enquanto pendente e pode obstá-la; alegar *non-refoulement*.
- **Comunicação ao NCB-Brasil (Polícia Federal):** informar a impugnação na CCF e a existência de decisão de refúgio/absolvição, pedindo que o dado **não seja executado** internamente.
- **Prevenção:** obtida a exclusão na CCF, requerer a **baixa dos registros** e certidão negativa para desbloquear vistos, viagens e contas.

## Teses e contra-teses

| Tese defensiva (impugnante) | Contra-tese (país-fonte / acusação) |
|---|---|
| Perseguição política — art. 3º (predominância do elemento político) | Crime comum autônomo; motivação política é secundária/inexistente |
| Refugiado reconhecido — contradiz a red notice do próprio perseguidor | Refúgio concedido por terceiro Estado, não vincula; fatos são criminais comuns |
| Ne bis in idem / prescrição / anistia | Fatos ou tipos distintos; ausência de trânsito em julgado equivalente |
| Dado sem qualidade/exatidão (RPD) — sem mandado válido, imputação vaga | Mandado válido e interesse concreto de extradição demonstrados |
| Desproporcionalidade — infração de bagatela ou disputa privada | Gravidade suficiente e interesse legítimo de persecução |
| Violação de devido processo/DH no requerente (art. 2º) | Sistema judicial oferece garantias; alegação genérica |

## Estrutura sugerida do requerimento à CCF (esqueleto)

> O requerimento é dirigido à CCF, **por escrito**, em regra em **inglês ou francês** (conferir idiomas aceitos no formulário oficial vigente). Adaptar ao formulário/portal atual da CCF.

```
TO: Commission for the Control of INTERPOL's Files (CCF) — General Secretariat, Lyon

RE: Request for [ACCESS] and/or [CORRECTION/DELETION] of data — [NOME COMPLETO],
    [nacionalidade], [data de nascimento]

1. IDENTIFICATION OF THE APPLICANT / POWER OF ATTORNEY
   [Qualificação completa; procuração/representação; documento de identidade.]

2. THE CONTESTED DATA
   [Red notice / diffusion / blue notice; país-fonte (NCB); referência/nº se conhecido;
    fatos imputados; como o alerta afeta o requerente (prisão, fronteiras, vistos).]

3. GROUNDS FOR DELETION / CORRECTION
   a) Article 3 — political/military/religious/racial character (predominance test)
   b) Refugee status [anexar decisão]
   c) Ne bis in idem / statute of limitations / amnesty
   d) Data quality and accuracy (RPD) — no valid warrant / vague charges
   e) Human-rights and due-process violations (Article 2 + UDHR)
   f) Proportionality / abuse of INTERPOL's channels

4. EVIDENCE (anexos)
   [Decisão de refúgio; provas da motivação política; absolvição/prescrição; laudos;
    matérias de imprensa; relatórios de ONGs/organismos internacionais; pareceres.]

5. REQUEST / URGENCY
   [Requerer exclusão (ou bloqueio/correção) dos dados; sinalizar urgência se houver
    risco iminente de detenção — viagem/fronteira.]

[Local, data. Assinatura do representante / advogado.]
```

**Campos a preencher:** [NOME COMPLETO], [nacionalidade], [data de nascimento], [tipo de alerta], [país-fonte/NCB], [referência], [fatos imputados], [fundamentos aplicáveis], [anexos], [urgência], [local], [data], [representante].

## Documentos a reunir

1. Procuração/representação e documento de identidade do requerente.
2. Cópia/prints do alerta ou evidência de seus efeitos (recusa de visto, detenção em fronteira, notificação bancária).
3. **Decisão de refúgio/asilo**, se houver (peça-chave).
4. Provas da **motivação política** (contexto do país, perfil de opositor/jornalista/ativista, cobertura de imprensa, relatórios de direitos humanos).
5. Documentos de **absolvição, prescrição, anistia ou ne bis in idem**.
6. Pareceres jurídicos e traduções juramentadas (idioma do procedimento).

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar a red notice como "mandado de prisão internacional" e ignorar que o ataque decisivo é **na CCF**.
- Impugnar **só no STF** (reativo) e esquecer a **exclusão preventiva na CCF** — perde-se a chance de evitar a prisão.
- Protocolar pedido de mérito **sem** o *request for access* prévio e **sem** dossiê probatório robusto (a CCF é documental).
- Alegar art. 3º de forma **genérica**, sem demonstrar a **predominância** do elemento político (predominance test).
- Ignorar a **condição de refugiado** já reconhecida — é um dos argumentos mais fortes e frequentemente subutilizado.
- Não sinalizar **urgência** havendo risco iminente de detenção (viagem/fronteira).
- Citar versão **desatualizada** do RPD/Estatuto ou inventar número de decisão da CCF.
- Redigir em idioma não aceito pelo formulário vigente da CCF.

**Checklist:**
- [ ] Confirmada a **versão vigente** do Estatuto (arts. 2º/3º) e das **RPD** na fonte oficial?
- [ ] Feito o **request for access** para confirmar/identificar o dado antes do pedido de mérito?
- [ ] O **art. 3º** foi sustentado com **predominance test** e provas concretas de motivação política?
- [ ] Anexada a **decisão de refúgio** (se houver) e invocado o *non-refoulement*?
- [ ] Verificados **ne bis in idem**, **prescrição** e **qualidade do dado (RPD)**?
- [ ] Sinalizada **urgência** se há risco iminente de prisão?
- [ ] **Frente paralela no Brasil** ativada (STF/PPE e NCB-PF), se o alerta já produz efeitos aqui? (ver `defesa-extradicao-passiva-stf`)
- [ ] Requerimento no **idioma correto**, com procuração e anexos completos?
- [ ] Toda referência a decisões (CCF/STF/cortes estrangeiras) passou pelo gate `jurisprudencia-stj-stf`?
- [ ] Rascunho submetido a **revisão humana** do advogado responsável?

## Skills relacionadas

- `defesa-extradicao-passiva-stf` — defesa no STF quando a red notice já gerou pedido de prisão/extradição no Brasil (frente doméstica complementar).
- `auxilio-direto-cooperacao-penal-mlat`, `conflito-jurisdicao-internacional-penal`, `cooperacao-transferencia-pessoas-condenadas-tratado` — demais frentes de cooperação jurídica internacional penal.
- `jurisprudencia-stj-stf` — gate de verificação de qualquer precedente, tese ou súmula antes de citar.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à estratégia e à redação; a responsabilidade pela atuação, pela escolha do foro (CCF e/ou STF) e pelas alegações é sempre do **advogado** (EAOAB e Código de Ética; **Provimento 205/2021** da OAB para atuação e comunicação). Confirme cada peça com o profissional responsável antes de protocolar.
- **Citation Gate (inegociável):** nenhuma decisão da **CCF**, do **STF** ou de cortes estrangeiras é citada de memória — tudo passa pelo gate `jurisprudencia-stj-stf`. Prefira **ensinar a tese e o dispositivo** (Estatuto, RPD, Lei de Migração, Lei 9.474/1997) a arriscar número de acórdão/decisão. Na dúvida, **omitir vence inventar**.
- **Sigilo e LGPD:** dados do requerente e do caso são sigilosos; não expor em repositório público.

**Padrão de redação:** ao redigir o requerimento e a defesa doméstica, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
