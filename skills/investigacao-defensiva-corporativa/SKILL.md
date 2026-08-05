---
name: investigacao-defensiva-corporativa
description: >-
  Use ao conduzir investigação defensiva no ambiente corporativo (internal investigation) — apuração
  interna presidida por advogado numa empresa diante de suspeita de crime ou irregularidade
  (Provimento 188/2018 do CFOAB aplicado à pessoa jurídica): delimitação de escopo, coleta lícita de
  provas (documentos, e-mails corporativos, entrevistas de colaboradores com advertência de
  direitos), preservação de cadeia de custódia e… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, corporativo, consultivo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-investigacao-defensiva-corporativa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["investigacao-defensiva-corporativa", "investigacao defensiva", "defensiva corporativa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Investigação Defensiva Corporativa (internal investigation)

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

Esta skill orienta a **investigação interna conduzida por advogado numa empresa** — a apuração privada, disciplinada pelo **Provimento 188/2018 do CFOAB** e projetada sobre a dimensão **organizacional** do risco penal: uma denúncia no canal de ética, uma suspeita de desvio, uma requisição de autoridade ou o prenúncio de uma operação exigem que a companhia **apure primeiro, por conta própria e sob sigilo**, antes de decidir o que fará com o que descobrir. A fronteira com as skills irmãs é rígida: a investigação defensiva **individual** — a defesa da pessoa física dentro de um IP já instaurado — mora em `defesa-no-inquerito`; a **coleta e preservação técnica** da evidência digital (ata notarial, hash, ordem judicial a provedor) mora em `preservacao-prova-digital-defesa`, invocada aqui como método; a **defesa contra a imputação** de organização criminosa, quando o caso já virou acusação, mora em `defesa-organizacao-criminosa`; e o **relatório/parecer como entregável formal**, com sua anatomia (ementa, quesitos, graduação de certeza), mora em `parecer-juridico-criminal`. Aqui o objeto é anterior e mais amplo: **como a empresa apura**, o que ela pode e não pode fazer ao apurar, e como converte o achado em decisão estratégica.

> **Lição central:** a investigação interna não é um favor ao Estado — é o instrumento pelo qual a empresa **retoma o controle da narrativa e do tempo** antes que a autoridade os controle por ela. Quem apura primeiro descobre a extensão real do problema, isola o que é conduta individual do que é falha sistêmica, mede a exposição penal da pessoa jurídica e **escolhe** entre remediar em silêncio, cooperar de forma negociada (leniência/colaboração) ou resistir — decisão que só existe enquanto o material está sob o **privilégio cliente-advogado**. Investigação mal desenhada faz o oposto: produz, dentro de casa, a prova que o acusador usará contra a empresa e contra seus dirigentes, sem que jamais tenha havido escolha.

## O instituto e a base legal

A internal investigation não tem estatuto próprio no direito brasileiro; ela se constrói pela **combinação** de bases — a autonomia investigativa do advogado, os poderes diretivos do empregador, o marco anticorrupção e a proteção de dados. O eixo é a natureza **advocatícia** da apuração: quando presidida por advogado, para orientar a decisão jurídica do cliente, ela é **investigação defensiva** e atrai o sigilo profissional.

| Dispositivo | O que garante / o que exige |
|---|---|
| **Provimento 188/2018 (CFOAB)** | Disciplina a **investigação defensiva** do advogado em qualquer fase e independentemente de processo; é o guarda-chuva da apuração interna quando conduzida sob direção jurídica (confira o texto vigente via agente `lei-e-sumula` antes de transcrever artigos) |
| **CF, art. 133 + EAOAB, art. 7º, II e §§** | **Inviolabilidade** do advogado e do escritório; sigilo profissional sobre o que apura — base do *work product* e do privilégio cliente-advogado no Brasil |
| **EAOAB, art. 7º, XIX** | Direito de **recusar-se a depor** sobre fato sujeito a sigilo profissional — a blindagem do investigador-advogado quanto ao conteúdo da apuração |
| **Lei 12.846/2013 (Anticorrupção), arts. 7º, VIII, e 16** | Programa de integridade e **acordo de leniência** da pessoa jurídica; a investigação interna é o que **alimenta** a decisão de cooperar e a própria proposta de leniência |
| **Decreto 11.129/2022** | Regulamenta a Lei Anticorrupção e os parâmetros do programa de integridade (canais de denúncia, apuração, remediação) — confira a redação vigente via `lei-e-sumula` |
| **LGPD (Lei 13.709/2018), arts. 7º e 10** | Base legal do tratamento de dados na apuração (**legítimo interesse** / cumprimento de obrigação / exercício regular de direito); minimização e finalidade delimitam a coleta lícita |
| **CLT, art. 2º (poder diretivo)** | Fundamento do acesso a **ativos corporativos** (e-mail funcional, máquinas, sistemas) — mas o poder é **regrado**, não absoluto (ver seção de coleta) |
| **CPP, art. 158-A a 158-F (por analogia)** | Padrão de **cadeia de custódia** que a prova interna deve espelhar para sobreviver a impugnação futura |

## Mapa — a providência certa em cada gatilho

| Situação concreta | Providência | Onde aprofundar |
|---|---|---|
| Denúncia no **canal de ética** com indício de crime | Triagem de credibilidade + decisão sobre abrir investigação formal sob direção jurídica | Seção "Planejamento e escopo" |
| Suspeita de **desvio/fraude** apontada pela diretoria | Escopo delimitado por escrito; *legal hold* imediato de documentos e e-mails | Seções "Planejamento" e "Coleta lícita" |
| **Requisição** de autoridade / notícia de operação iminente | Apuração interna acelerada para medir exposição **antes** de qualquer contato com o órgão | Seção "Decisão estratégica" |
| Necessidade de **entrevistar colaboradores** | Roteiro com advertência de direitos (quem o advogado representa) e registro | Seção "Entrevistas" |
| Evidência **digital volátil** (e-mails, logs, mensagens) a congelar | Coleta com hash, ata notarial, cadeia de custódia própria | skill `preservacao-prova-digital-defesa` (método) |
| Achado configura **crime da empresa** (corrupção, fraude, lavagem) | Avaliar leniência/colaboração × remediação silenciosa × resistência | Seção "Decisão estratégica" |
| Achado expõe **dirigente/colaborador** individualmente | Separar o polo: a pessoa física precisa de **defesa própria** (conflito) | skill `defesa-no-inquerito`; BP `etica-oab-sigilo` |
| Caso já **virou acusação** de orcrim/associação | Migrar para a defesa da imputação | skill `defesa-organizacao-criminosa` |
| Entregar o **produto formal** (relatório/parecer) ao cliente | Anatomia do parecer, quesitos, graduação de certeza | skill `parecer-juridico-criminal` |

## Planejamento e delimitação do escopo — a decisão que define tudo

A investigação começa **antes** da primeira coleta, com três definições escritas que blindam ou condenam o trabalho:

- **Quem é o cliente.** A investigação é da **pessoa jurídica** — não de um diretor, não do denunciante. Fixe isso por escrito no ato de constituição (mandato da empresa, via seu órgão competente, sem que o investigado esteja no comando do escopo). É o que preserva o privilégio e o que define, mais tarde, o conflito de interesses quando um indivíduo precisar de defesa própria.
- **Qual o escopo.** Delimite o **fato**, o **período** e as **pessoas** sob apuração num documento de abertura (*scoping memo*). Escopo aberto ("investigar tudo") é convite ao vazamento de finalidade sob a LGPD e à devassa desproporcional — a coleta lícita depende de finalidade delimitada. Escopo pode ampliar-se por decisão documentada, nunca por deriva silenciosa.
- **Por que sob direção jurídica.** Deixe expresso, desde a abertura, que a apuração é conduzida **para subsidiar aconselhamento jurídico** ao cliente — é o que ancora o *work product*. Investigação tocada só por auditoria/compliance, sem direção advocatícia, produz material fora do privilégio, potencialmente descobrível.

> **Independência do investigador:** o advogado que conduz a apuração não pode ser o mesmo que assessora ordinariamente os investigados nos fatos apurados — a captura da investigação por quem tem interesse no resultado a esvazia. Estruture a apuração com independência funcional (comitê, reporte a órgão isento) e documente a governança.

## Coleta lícita de provas — poder diretivo é regrado, não devassa

A empresa tem acesso a seus ativos, mas o acesso é **regrado**: excesso contamina o elemento (CPP, art. 157, por analogia à prova viciada) e expõe a empresa e o advogado a responsabilização civil e criminal (violação de sigilo, LGPD, interceptação indevida).

**O que a apuração tipicamente colhe — cada item com base e limite:**
- **Documentos e registros corporativos** (contratos, notas, planilhas, atas): acesso amplo, são ativos da empresa — organize *legal hold* (ordem interna de preservação) imediato para impedir descarte, que depois vira obstrução;
- **E-mail corporativo e sistemas funcionais**: a tese predominante admite o acesso pelo poder diretivo **quando** a política interna avisar previamente que a conta é corporativa e monitorável (expectativa de privacidade reduzida por regra clara e conhecida) — mas o alcance desse acesso e sua validade como prova (esfera trabalhista e penal) são **controvertidos**: **confira o estado atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** antes de tratar como certo. Sem política prévia comunicada, o acesso irrestrito é temerário — pese caso a caso e prefira o consentimento ou a delimitação por finalidade;
- **Dispositivos e mensagens pessoais**: **zona vedada por padrão**. WhatsApp pessoal, e-mail particular e aparelho próprio do colaborador têm proteção constitucional (sigilo das comunicações, CF, art. 5º, XII) — sem consentimento válido ou ordem judicial, não se acessa. Espelhamento de conta é método desqualificado (ver `preservacao-prova-digital-defesa`);
- **Dados sujeitos à LGPD**: aplique **minimização** e **finalidade** — colha só o pertinente ao escopo, registre a base legal (legítimo interesse / exercício regular de direito), controle o acesso e a retenção;
- **Prova digital**: cadeia de custódia própria desde a coleta (hash, espelhamento forense por perito, ata notarial) — o roteiro completo está em `preservacao-prova-digital-defesa`. Elemento mal coletado morre na primeira impugnação, e a impugnação virá.

> **Cadeia de custódia da apuração interna:** a prova produzida internamente será atacada com a mesma régua dos arts. 158-A a 158-F do CPP se um dia for oferecida em juízo ou numa leniência. Documente **quem** coletou, **quando**, **de onde**, **com qual método** e **onde armazenou** cada elemento, desde o primeiro dia — a "fixação" e o "recebimento" da prova defensiva (art. 158-B, por analogia). O que se colhe sem rastro é inútil quando mais importa.

## Entrevistas de colaboradores — a advertência de direitos que blinda o trabalho

A entrevista interna é o ato mais delicado da apuração — e o que mais frequentemente a destrói. O colaborador não é réu, mas também não é indefeso, e o advogado da empresa **não é o advogado dele**.

- **Advertência de vínculo (o "Upjohn warning", importado do direito norte-americano e adotado aqui como boa prática — não como regime legal expresso):** no início da entrevista, deixe claro e registrado que **o advogado representa a empresa, não o entrevistado**; que o conteúdo é sigiloso e pertence à empresa, que pode dispor dele (inclusive renunciando ao sigilo para cooperar com autoridades); e que, portanto, o privilégio é da companhia. Omitir isso compromete a lealdade e a validade ética do ato, quebra a confiança e tende a tornar a prova imprestável — podendo configurar captação indevida de confissão. (O grau exato dessa consequência não decorre de dispositivo específico; é construção ética e doutrinária — sustente como tese, não como letra de lei.)
- **Voluntariedade:** a entrevista de apuração interna não é interrogatório coercitivo. Ameaça de demissão como instrumento de extração de confissão contamina o depoimento e expõe a empresa a responsabilização trabalhista e penal. O colaborador pode calar e pode ser assistido por advogado próprio — o que, em casos sensíveis, o investigador deve **recomendar** que ele busque.
- **Sem promessa que não se pode cumprir:** nada de garantir "isso fica entre nós" ou "não terá consequências". A empresa poderá usar o apurado; prometer o contrário é falso e antiético.
- **Registro documentado:** identificação, data, local, advertência dada, e **quem** conduziu — memorando de entrevista lavrado pelo advogado (não gravação clandestina). O memorando é *work product*; a gravação, se houver, exige consentimento e some do privilégio se manuseada sem cuidado.
- **Conflito de interesses ao vivo:** se durante a entrevista o colaborador passa de testemunha a suspeito, **pare** — a partir daí o advogado da empresa tem interesse contraposto ao dele. Documentar a virada e orientá-lo a constituir defesa própria (`defesa-no-inquerito`) é dever ético (BP `etica-oab-sigilo`).

## O produto — relatório de investigação e parecer

A apuração desemboca em dois entregáveis distintos, e confundi-los custa caro:

- **Relatório de investigação:** narra o que se apurou — fatos, provas coletadas, metodologia, cronologia — de forma neutra e ancorada. É o registro do que a empresa **sabe**. Cuidado: um relatório escrito sem estratégia vira o roteiro pronto da acusação se cair fora do privilégio. Decida **antes** de escrever se o relatório será **oral** (menos descobrível, mais frágil como registro) ou **escrito** (registro sólido, exposição maior) — decisão que pertence à direção jurídica, não ao redator.
- **Parecer/recomendação:** a camada opinativa — o que os fatos significam juridicamente, qual a exposição penal da empresa e dos indivíduos, e **o que fazer**. Sua anatomia (ementa, quesitos, graduação de certeza pacífico/majoritário/divergente, cenário adverso enfrentado) é a da skill `parecer-juridico-criminal` — **use-a** para estruturar este produto; não duplique aqui aquela disciplina.

> **Privilégio é frágil e renunciável.** O *work product* protege o material **enquanto** a empresa o mantém sob sigilo. Compartilhar o relatório com um terceiro (auditor externo sem NDA, sócio, adquirente em M&A) pode ser lido como **renúncia** ao privilégio, tornando o documento descobrível. Circulação controlada, marcação de sigilo e trilha de acesso são parte do produto — matéria da BP `etica-oab-sigilo` e da LGPD.

## Interface com o compliance e o programa de integridade

A investigação interna é o **motor** do programa de integridade, não um apêndice dele. A conexão é bidirecional:

- O **canal de denúncias** e a apuração das denúncias são requisitos de um programa efetivo (Lei 12.846/2013, art. 7º, VIII; Decreto 11.129/2022) — a existência de investigação séria e a **remediação** do que se apura são fatores de dosimetria da sanção administrativa e argumentos numa eventual leniência.
- Mas a investigação **defensiva** (sob direção jurídica, coberta pelo privilégio) e a **apuração de compliance** (função de controle interno, sem privilégio) são planos distintos. Misturá-los contamina o privilégio: o que passa pela mão do compliance sem direção advocatícia pode ser descobrível. Desenhe o fluxo sabendo qual chapéu está em uso em cada etapa.
- A remediação (afastamento de envolvidos, correção de controles, ressarcimento) demonstra que o programa **funciona** — e é frequentemente mais valiosa para a defesa institucional do que qualquer tese, porque converte a falha em prova de integridade.

## Decisão estratégica — autodenúncia, colaboração ou remediação silenciosa

O achado da investigação abre uma bifurcação que **só existe enquanto o material está sob privilégio**. É a decisão mais importante da apuração — e é do cliente, informada pelo advogado:

- **Leniência / colaboração (cooperar de forma negociada):** quando o risco de descoberta é alto e a cooperação rende redução de sanção e previsibilidade. Exige entregar o apurado — logo, **renunciar** ao privilégio de forma controlada e negociada. O regime do acordo de leniência anticorrupção está na Lei 12.846/2013, arts. 16-17; a colaboração premiada da pessoa jurídica e seus agentes atravessa a Lei 12.850/2013 — **confira as condições e o estado da negociação institucional via `lei-e-sumula` e `jurisprudencia-stj-stf`**, marcando [NÃO VERIFICADO] o que não confirmar.
- **Remediação silenciosa:** corrigir controles, afastar envolvidos, ressarcir — sem provocar a autoridade — quando a exposição é gerenciável e a cooperação não traz vantagem proporcional. Legítima, mas exige avaliar o dever de comunicar (setores regulados têm obrigações próprias).
- **Resistência:** preparar a defesa institucional para o cenário adversarial, preservando o privilégio ao máximo.

> **Sequência inegociável:** apure **antes** de decidir; decida **antes** de comunicar qualquer coisa a qualquer autoridade. Cada contato com o órgão, cada documento entregue, é irreversível — e feito sem o mapa completo da exposição, é aposta cega. A pressa de "colaborar para parecer bem" já afundou empresas que cooperaram entregando o que nem elas entendiam.

## Erros comuns e pegadinhas

- **Deixar a apuração sem direção jurídica.** Investigação tocada só por auditoria/compliance produz material **fora** do privilégio — descobrível pela acusação. Se há risco penal, a direção é advocatícia desde a abertura.
- **Não fixar quem é o cliente.** Sem o mandato da pessoa jurídica documentado, o privilégio fica ambíguo e o conflito de interesses (empresa × dirigente) contamina tudo. É a primeira folha do caso.
- **Escopo aberto.** "Investigar tudo" viola a finalidade da LGPD, autoriza devassa desproporcional e enfraquece o privilégio. Delimite fato, período e pessoas por escrito.
- **Acessar dispositivo/conta pessoal do colaborador.** WhatsApp pessoal e e-mail particular têm sigilo constitucional — sem consentimento válido ou ordem judicial, o acesso é crime e queima a prova. Poder diretivo alcança o **corporativo**, não o pessoal.
- **Entrevistar sem a advertência de vínculo.** Omitir que o advogado representa a **empresa**, não o entrevistado, gera prova imprestável, captação indevida de confissão e nulidade ética. A advertência abre toda entrevista.
- **Coagir o colaborador com ameaça de demissão.** Confissão extraída sob coação contamina o depoimento e expõe a empresa no cível e no penal. A entrevista é voluntária.
- **Escrever o relatório sem decidir seu destino.** Relatório escrito que cai fora do privilégio é o roteiro da acusação. Oral × escrito é decisão estratégica **prévia**, da direção jurídica.
- **Compartilhar o relatório e renunciar ao privilégio sem querer.** Entregar a auditor, sócio ou adquirente sem salvaguarda pode ser lido como renúncia, tornando o documento descobrível. Circulação controlada sempre.
- **Coletar sem cadeia de custódia.** Prova interna sem hash, ata e registro de método morre na impugnação — e a impugnação virá se a prova for a juízo ou à leniência. Espelhe os arts. 158-A a 158-F desde o primeiro dia.
- **Confundir apuração interna com investigação estatal.** A empresa não instaura IP nem substitui a autoridade; produz elementos que **subsidiam** sua decisão. Não confunda também os polos: defesa do **indivíduo** dentro de IP é `defesa-no-inquerito`; imputação já formalizada de orcrim é `defesa-organizacao-criminosa`.
- **Cooperar antes de apurar.** Comunicar a autoridade sem o mapa completo da exposição é aposta cega e irreversível. Apurar → decidir → comunicar, nessa ordem.
- **Citar julgado ou condição de leniência de memória.** O regime da leniência e da colaboração institucional evolui; precedente e literalidade só entram **depois** de pesquisados via `lei-e-sumula`/`jurisprudencia-stj-stf` e validados pelo `verificador-citacoes` — até lá, [NÃO VERIFICADO].

## Antes de protocolar (ou de entregar o produto)

**Planejamento e governança:**
- [ ] Mandato da **pessoa jurídica** documentado e cliente inequivocamente fixado?
- [ ] *Scoping memo* com fato, período e pessoas delimitados por escrito?
- [ ] Direção **jurídica** da apuração declarada desde a abertura (âncora do privilégio)?
- [ ] Independência do investigador em relação aos investigados assegurada e documentada?

**Coleta:**
- [ ] *Legal hold* emitido para impedir descarte de documentos e e-mails?
- [ ] Acesso a e-mail/sistemas ancorado em **política prévia comunicada**; dispositivos pessoais **fora** sem consentimento/ordem?
- [ ] LGPD aplicada (base legal registrada, minimização, finalidade, controle de acesso e retenção)?
- [ ] Cadeia de custódia própria (hash, ata notarial, termo de método) espelhando os arts. 158-A a 158-F?

**Entrevistas:**
- [ ] Advertência de vínculo ("represento a empresa, não você") dada e registrada em cada entrevista?
- [ ] Voluntariedade preservada (sem coação; direito ao silêncio e a advogado próprio respeitados)?
- [ ] Conflito de interesses monitorado (colaborador que vira suspeito → defesa própria)?

**Produto e decisão:**
- [ ] Destino do relatório (oral × escrito) decidido pela direção jurídica **antes** da redação?
- [ ] Parecer estruturado pela skill `parecer-juridico-criminal` (quesitos, graduação de certeza, cenário adverso)?
- [ ] Bifurcação estratégica (leniência × colaboração × remediação) avaliada **antes** de qualquer contato com autoridade?
- [ ] Privilégio preservado: circulação controlada, marcação de sigilo, trilha de acesso?
- [ ] Citações aprovadas no gate do `verificador-citacoes`; pendências marcadas [NÃO VERIFICADO] e resolvidas?

## Lembretes finais

- **Apure primeiro, decida depois, comunique por último** — a ordem inversa entrega o controle à autoridade e transforma a apuração na prova da própria empresa.
- **O privilégio é o ativo mais valioso e o mais frágil** da investigação: nasce da direção jurídica e da mantença do sigilo, e morre com o primeiro compartilhamento descuidado.
- **Poder diretivo é regrado:** o corporativo é acessável com política prévia; o pessoal é constitucionalmente protegido — a linha entre os dois separa a prova válida da prova-crime.
- **O advogado da empresa nunca é o advogado do colaborador** — a advertência de vínculo é ética, não formalidade.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes de qualquer uso, comunicação a autoridade ou decisão de cooperação.

## Apoie-se em

- **Agentes:** `lei-e-sumula` (redação vigente do Provimento 188/2018, da Lei 12.846/2013, do Decreto 11.129/2022, da LGPD e do EAOAB antes de transcrever), `jurisprudencia-stj-stf` (estado atual sobre leniência, colaboração institucional, validade de prova coletada por particular e acesso a e-mail corporativo — marque [NÃO VERIFICADO] o que não confirmar), `doutrina` (posições sobre *work product*, internal investigation e privilégio no Brasil), e sempre `verificador-citacoes` (gate final — nenhuma lei, súmula ou precedente citado de memória; há sanção real por jurisprudência inventada por IA).
- **Best-practices:** `etica-oab-sigilo` (sigilo profissional, conflito de interesses, LGPD, circulação controlada do produto, dever de orientar o colaborador a buscar defesa própria), `peticao-criminal` (forma e estilo das peças que decorrerem da apuração).
- **Skills relacionadas:** `defesa-no-inquerito` (irmã — a investigação defensiva **individual** da pessoa física no IP; para quando um dirigente/colaborador precisar de defesa própria), `preservacao-prova-digital-defesa` (irmã — o **método** de coleta e preservação da evidência digital: ata notarial, hash, ordem judicial a provedor, cadeia de custódia), `defesa-organizacao-criminosa` (irmã — a defesa **contra a imputação** quando a apuração vira acusação de orcrim/associação), `parecer-juridico-criminal` (irmã — a **anatomia do entregável** relatório/parecer: ementa, quesitos, graduação de certeza).

**Padrão de redação:** ao redigir o relatório, o parecer ou qualquer peça que decorra da apuração, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
