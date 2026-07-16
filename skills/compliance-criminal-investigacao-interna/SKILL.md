---
name: compliance-criminal-investigacao-interna
description: >-
  Use ao estruturar COMPLIANCE CRIMINAL e conduzir INVESTIGAÇÃO INTERNA corporativa — apuração de
  ilícito empresarial com prova aproveitável, cadeia de custódia de vestígios digitais, respeito à
  LGPD e aos direitos do investigado, e a decisão de risco/benefício sobre autodenúncia, leniência
  (Lei 12.846) e colaboração (Lei 12.850). Gatilhos: compliance criminal, investigação interna,
  programa de integridade, leniência… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, compliance, corporativo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["compliance-criminal-investigacao-interna", "compliance criminal", "investigacao interna"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-compliance-criminal-investigacao-interna"]
---

# Compliance criminal e investigação interna corporativa

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

Esta skill é o **craft corporativo-penal**: dado um indício de ilícito dentro de uma empresa (fraude, corrupção, cartel, desvio, sonegação, lavagem), ela orienta **como apurar internamente com legalidade**, **como preservar prova aproveitável** e **como decidir** sobre reportar-se a autoridades — leniência, colaboração ou autodenúncia. Não redige o acordo nem substitui a defesa técnica individual; **arquiteta a apuração e a decisão** que ficam antes das peças. É camada de governança e estratégia, não de peça processual.

> **Lição central:** a investigação interna vale pelo **modo como colhe a prova**, não pelo que descobre. Uma apuração conduzida com coação, sem respeito à LGPD ou sem cadeia de custódia produz um resultado **impróprio** — que não protege a empresa (pode virar prova contra ela e contra pessoas), não gera atenuante e ainda expõe o investigador a responsabilidade. Antes de qualquer providência, pergunte: **esta prova será aproveitável e defensável se um dia entrar num processo?** Legalidade da colheita e cadeia de custódia dos vestígios são o eixo — o resto é consequência.

> **Cautela de vigência (obrigatória antes de citar):** os **parâmetros do programa de integridade estão no Decreto 11.129/2022** (que revogou o Decreto 8.420/2015 — não cite o revogado) e podem ser reeditados; o **valor probatório e os limites da investigação interna** evoluem em atos da CGU/AGU/MPF e na jurisprudência. Confira: (1) a redação vigente do Decreto 11.129/2022 e dos atos da CGU sobre integridade e leniência; (2) que a **leniência da Lei 12.846 é administrativa** e **não garante imunidade penal automática** aos indivíduos — verificar o arranjo institucional atual entre CGU/AGU e MP; (3) todo precedente passa por `jurisprudencia-stj-stf` antes de ir à peça. Na dúvida, **omitir vence inventar**.

## Base legal

- **Lei 12.846/2013 (Lei Anticorrupção), art. 7º, VIII** — a **existência e a aplicação de programa de integridade** figuram entre os fatores considerados na dosimetria da sanção administrativa (atenuante). É o gancho normativo do compliance como mitigador.
- **Decreto 11.129/2022** — regulamenta a Lei 12.846 e fixa os **parâmetros de avaliação do programa de integridade** (comprometimento da alta direção — *tone at the top*; código de conduta; treinamento; canal de denúncias; análise de risco; due diligence de terceiros; monitoramento; investigação interna e medidas corretivas). É a régua pela qual a autoridade mede se o programa é **real ou de fachada** (*paper compliance*).
- **Lei 12.846/2013, arts. 16-17** — **acordo de leniência administrativo** (celebrado no âmbito da CGU/AGU): requisitos de ser a **primeira** a se manifestar sobre o ato, **cessar** o envolvimento, **cooperar** e **identificar** os demais envolvidos. Reduz sanção administrativa — **mas é da pessoa jurídica e da esfera administrativa** (interface penal separada — ver seção de leniência).
- **Lei 12.850/2013 (organização criminosa e colaboração premiada)** — via **penal** de cooperação dos **indivíduos** com o MP; quando a apuração interna revela crime associativo, é por aqui (ou pelo ANPP — CPP art. 28-A) que se obtém benefício penal. Ver `colaboracao-premiada-negociacao-beneficios` e `acordo-leniencia-reflexo-penal`.
- **Crimes empresariais correlatos** — contra a **ordem econômica** (Lei 8.137/1990; Lei 12.529/2011, cartel), **tributários** (Lei 8.137), contra o **Sistema Financeiro** (Lei 7.492/1986) e **lavagem** (Lei 9.613/1998). A tipificação define **qual** via de reporte gera efeito penal.
- **Lei 13.709/2018 (LGPD)** — a investigação interna **trata dados pessoais** (mensagens, e-mails, logs, RH). Exige **base legal** (legítimo interesse / cumprimento de obrigação / exercício regular de direito), **necessidade e proporcionalidade**, e limita o acesso — colheita fora disso é **ilícita** e contamina a prova.
- **CF, art. 5º, LXIII, X, XII e III** — **não autoincriminação**, **intimidade**, **sigilo de comunicações** e **vedação a tratamento degradante**. O empregado investigado **não é obrigado a produzir prova contra si**; entrevista não é interrogatório coercitivo.
- **CPP, arts. 158-A a 158-F** — **cadeia de custódia** dos vestígios (rastreabilidade da coleta ao descarte). Aplica-se por analogia à prova digital colhida internamente que se pretenda aproveitar no processo penal.

## Anatomia da investigação interna — a arquitetura que a torna aproveitável

Uma investigação interna defensável tem **cinco pilares**; a falha de qualquer um compromete o resultado:

1. **Legalidade da colheita** — base legal LGPD definida *antes* de acessar dados; escopo delimitado (o que, de quem, por quê); sem invasão de dispositivo pessoal sem previsão contratual/consentimento; sem coação nas entrevistas.
2. **Independência e ausência de conflito** — quem apura não pode ser investigado nem subordinado direto do suspeito; conflito de interesses (art. 17 EAOAB para o advogado) afasta a credibilidade e a prova.
3. **Cadeia de custódia** — cada vestígio (e-mail, log, arquivo, dispositivo) coletado, lacrado, *hasheado*, registrado e armazenado com rastreabilidade íntegra (CPP 158-A ss., por analogia).
4. **Contraditório interno e direitos do investigado** — ciência da apuração quando possível, direito ao silêncio, dignidade, não autoincriminação; entrevista documentada, sem promessa nem ameaça.
5. **Sigilo e finalidade** — resultado circulando apenas no *need-to-know*; dados não vão a repositório público; o produto serve à decisão da empresa, não à exposição de pessoas.

**Método:** desenhe a investigação **começando pela pergunta probatória** — "se isto virar processo, esta colheita se sustenta?". Se a resposta for não, refaça o desenho antes de coletar.

## Roteiro tático — fases da investigação interna (acionável)

**Fase 0 — Gatilho e triagem (horas iniciais).** Recebido o alerta (canal de denúncia, auditoria, mídia, notificação de autoridade): registrar o gatilho, avaliar **credibilidade e gravidade**, e decidir **quem conduz** (jurídico interno, compliance, escritório externo). Regra de ouro: quanto maior o risco penal e o envolvimento da alta direção, mais se justifica **assessoria externa e independente** — inclusive para blindar o produto sob **prerrogativa/sigilo advogado-cliente**.

**Fase 1 — Escopo e plano.** Delimitar por escrito: fato apurado, período, pessoas, sistemas e a **base legal LGPD** de cada acesso. Definir hipóteses (fato x prova x inferência x tese) e o que confirmaria/afastaria cada uma. Congelar a **preservação** (legal hold): suspender rotinas de descarte de e-mails, logs e backups relevantes.

**Fase 2 — Coleta e cadeia de custódia.** Coletar do menos ao mais intrusivo. Vestígios digitais: **imagem forense** com *hash*, lacre lógico, registro de quem coletou/quando/como (158-A ss.). Documentos e sistemas: preservar originais. Nunca "olhar rápido" antes de preservar — manuseio sem registro **quebra a cadeia**.

**Fase 3 — Entrevistas de apuração.** Não são interrogatório. Regras: informar o propósito e a natureza corporativa; **advertência de Upjohn** (o advogado representa a **empresa**, não o entrevistado — o sigilo é da empresa e pode ser renunciado por ela) [conferir adequação ao caso brasileiro]; respeitar o **silêncio** e a **não autoincriminação**; nada de coação, cárcere de fato, retenção de documentos pessoais ou promessa de impunidade. Documentar em memorando factual, sem juízo conclusivo precoce.

**Fase 4 — Análise e qualificação jurídica.** Separar rigorosamente **fato / prova / inferência / tese**. Tipificar a conduta (qual crime empresarial?) para saber **qual via de reporte** gera efeito penal. Medir a **exposição** (empresa e indivíduos, esferas administrativa/cível/penal) e a robustez probatória.

**Fase 5 — Decisão de reporte e medidas.** Com o quadro fechado, decidir: **remediar internamente**, **autodenunciar**, buscar **leniência** (empresa) e/ou **colaboração/ANPP** (indivíduos), e aplicar **medidas corretivas** (rescisões, controles novos). Documentar a decisão e o racional. Ver seção de risco/benefício.

## Decisão de autodenúncia e leniência — risco × benefício (o cálculo mais sensível)

Aqui a lógica é **negocial**: pesar o que se ganha reportando contra o que se perde. Mapa de decisão:

- **BATNA da empresa** — o que acontece se **não** reportar? Probabilidade de descoberta autônoma pela autoridade, dano reputacional, sanção cheia sem atenuante, perda da janela de "**primeira a se manifestar**" (art. 16 da Lei 12.846) que outra empresa/indivíduo pode ocupar antes.
- **A moeda** — o que a empresa/o indivíduo tem a **entregar** que a autoridade ainda não tem? Leniência e colaboração só valem por **novidade e efetividade**; delatar o já sabido não gera prêmio. O valor **cai com o tempo**.
- **O buraco entre as esferas** — ponto crítico: a **leniência da Lei 12.846 é administrativa (CGU/AGU) e NÃO imuniza penalmente** os indivíduos de forma automática. Para blindar executivos no crime, é preciso **coordenar** com o **MP** (colaboração premiada — Lei 12.850 — ou ANPP — CPP 28-A) e, quando o crime for contra a ordem econômica, avaliar a **leniência do CADE (Lei 12.529, art. 87)**, que tem efeito penal expresso para os crimes ali listados. Ver `acordo-leniencia-reflexo-penal`.
- **Sequenciamento** — negociar as esferas em **paralelo e coordenado** para evitar que a confissão numa esfera vaze e prejudique noutra; buscar coextensão dos benefícios; obter **garantias de uso restrito** do que se revela.
- **Conflito empresa × indivíduo** — o interesse da PJ (leniência, seguir operando) **pode colidir** com o do executivo (não confessar, não ser delatado pela própria empresa). Cada indivíduo com **exposição penal precisa de defesa própria e independente** — a investigação interna **não** é a defesa dele.
- **Timing e voluntariedade** — reportar **antes** de a autoridade agir maximiza o benefício e a demonstração de boa-fé; reportar **depois** de deflagrada a operação vale muito menos.

> **A armadilha central:** confundir "a empresa fez leniência" com "os executivos estão protegidos". Não estão — a leniência anticorrupção é administrativa. Sem colaboração/ANPP coordenados no MP (ou leniência do CADE, quando cabível), a autodenúncia corporativa pode **entregar** pessoas físicas ao processo penal com a prova produzida internamente. Nunca recomende autodenúncia sem mapear o **efeito penal sobre cada indivíduo**.

## Programa de integridade como atenuante e prova defensiva

O programa de integridade tem **duplo uso** e ambos dependem de o programa ser **efetivo, não de fachada** (Decreto 11.129/2022):

1. **Atenuante administrativo** (Lei 12.846, art. 7º, VIII) — programa robusto reduz a sanção da PJ.
2. **Prova defensiva no penal** — programa efetivo, com investigação interna que **detectou e reagiu** ao ilícito, sustenta a tese de **ausência de dolo/culpa da alta direção**: o crime foi desvio individual **contra** os controles da empresa, não decisão do órgão dirigente. Serve para afastar a imputação à cúpula e, na PJ (quando imputável — ex.: crime ambiental, ver `responsabilidade-penal-pessoa-juridica-ambiental`), para discutir requisitos e dosimetria.

**Para valer, o programa precisa demonstrar** (colher e organizar como prova): *tone at the top* documentado; canal de denúncia funcional e sem retaliação; análise de risco real; treinamentos com registro; due diligence de terceiros; **e a própria investigação interna e as medidas corretivas aplicadas**. Um programa que nunca detectou nada e nunca puniu ninguém é lido como *paper compliance* — não atenua.

## Cadeia de custódia e prova aproveitável (o diferencial técnico)

- **Vestígio digital** — imagem forense com *hash* (MD5/SHA), lacre lógico, documentação de coleta (quem, quando, ferramenta, local), armazenamento íntegro e rastreável (CPP 158-A a 158-F, por analogia). Prova extraída "no susto", sem registro, **é impugnável**.
- **Base LGPD** — cada acesso a dado pessoal precisa de base legal e proporcionalidade; acesso a **dispositivo/conta pessoal** do empregado sem previsão contratual clara ou consentimento tende a ser **ilícito** (art. 5º, X e XII, CF). Distinga **ferramenta corporativa** (política de uso pode autorizar monitoramento) de **esfera pessoal**.
- **Prova ilícita** — colheita com coação, invasão indevida ou quebra de sigilo sem base contamina o material (art. 157 CPP) e pode responsabilizar a empresa e o investigador. **Uma prova ilícita não protege — expõe.**
- **Objetivo** — que o material, se um dia entrar em juízo (pela própria empresa, em leniência/colaboração, ou requisitado pela autoridade), seja **defensável quanto à origem e à integridade**.

## Armadilhas e práticas a evitar

- **Coação na entrevista** — reter documento pessoal, impedir saída, ameaçar demissão para arrancar "confissão". Vicia a prova e gera responsabilidade (constrangimento ilegal, dano moral).
- **Ignorar a LGPD** — varredura ampla de e-mails/mensagens pessoais sem base legal e proporcionalidade → prova ilícita.
- **Quebrar a cadeia de custódia** — manusear vestígio antes de preservar/registrar.
- **Confundir esferas** — tratar leniência administrativa como imunidade penal dos indivíduos.
- **Investigador em conflito** — quem apura ligado ao suspeito ou ao fato; contamina a credibilidade.
- ***Paper compliance*** — invocar programa de integridade que nunca operou; a autoridade mede efetividade (Decreto 11.129).
- **Investigar sem defesa individual** — usar a apuração interna como se fosse a defesa do executivo exposto (são interesses distintos).
- **Autodenunciar sem mapear efeito penal** — reportar pela PJ e entregar pessoas físicas ao processo.
- **Conclusão precoce** — memorando de entrevista com juízo de culpa antes da análise.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** os **parâmetros do Decreto 11.129/2022** e o **valor probatório de investigações internas / advertência de Upjohn no Brasil / limites do monitoramento corporativo** são temas **em evolução** e **casuísticos**. **Não cite precedente de memória.** Marque **[NÃO VERIFICADO]**, confira o **teor e a vigência** via `jurisprudencia-stj-stf` e confirme os parâmetros regulamentares em **fonte oficial atual** (CGU/AGU) antes de levar à peça ou ao parecer.

- Precedentes do STJ/STF sobre **prova ilícita corporativa**, **monitoramento de e-mail funcional** e **cadeia de custódia digital** → **[NÃO VERIFICADO]** — buscar tese + dispositivo atual.
- Entendimento sobre **efeito penal da leniência da Lei 12.846** e sua **coordenação com o MP** / posição sobre imunidade dos indivíduos → **[NÃO VERIFICADO]** — conferir arranjo institucional e jurisprudência vigentes.
- **Decreto 11.129/2022** (não o revogado Decreto 8.420/2015) e atos da **CGU** sobre integridade e leniência → confirmar redação/edição atual em fonte oficial.

> Na peça, prefira **ensinar a tese e ancorar no dispositivo** (Lei 12.846, art. 7º, VIII e arts. 16-17; Decreto 11.129/2022; CPP 158-A ss.; LGPD; CF art. 5º) a arriscar número de acórdão. Todo precedente entra só depois do gate.

## Checklist e anti-padrões

- [ ] **Gatilho e triagem** registrados; decisão sobre **assessoria externa/independente** e prerrogativa?
- [ ] **Escopo por escrito** com **base legal LGPD** de cada acesso e **legal hold** ativado?
- [ ] **Coleta** com **cadeia de custódia** (hash, lacre, registro — 158-A ss.) e sem invadir esfera pessoal indevida?
- [ ] **Entrevistas** sem coação, com **silêncio** e **não autoincriminação** respeitados e documentados?
- [ ] Separação rigorosa **fato / prova / inferência / tese**?
- [ ] **Tipificação** do crime empresarial feita para escolher a via de reporte com **efeito penal**?
- [ ] **Efeito penal sobre cada indivíduo** mapeado antes de qualquer autodenúncia?
- [ ] **Leniência (CGU) coordenada** com **MP (colaboração/ANPP)** e/ou **CADE (art. 87)** — sem tratar leniência administrativa como imunidade penal?
- [ ] **Defesa própria e independente** para cada executivo exposto (conflito PJ × pessoa física)?
- [ ] **Programa de integridade** documentado como **efetivo** (não *paper compliance*)?
- [ ] **Sigilo/LGPD**: produto no *need-to-know*, nada em repositório público?
- [ ] **Súmulas/precedentes e parâmetros regulamentares conferidos** via `jurisprudencia-stj-stf` e fonte oficial atual?

**Anti-padrões (evitar):** arrancar confissão sob coação; varrer dados pessoais sem base LGPD; quebrar cadeia de custódia; vender leniência administrativa como imunidade penal; usar a apuração interna como defesa do indivíduo; invocar programa de fachada; autodenunciar sem calcular a exposição das pessoas físicas; citar precedente ou parâmetro do Decreto revogado de memória.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico ao **craft corporativo-penal**; **não substitui a defesa técnica individual** de cada pessoa exposta nem o parecer do(a) advogado(a) responsável (CED/EAOAB).
- **Polo (transversal — conferir sempre):** a spec indica **polo transversal**. Confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Do lado da **empresa/defesa**, o objetivo é apurar com legalidade, mitigar e proteger; do lado do **Ministério Público / assistente de acusação**, a lógica **se inverte** — a investigação interna é **objeto de escrutínio** (voluntariedade, licitude da colheita, ausência de coação) e o programa de integridade é **testado quanto à efetividade**, não presumido. Ajuste a atuação ao polo.
- **Citation Gate:** nenhuma súmula, tese, precedente ou parâmetro regulamentar vai à peça sem passar por `jurisprudencia-stj-stf` e por fonte oficial atual (CGU/AGU) e pela best-practice `verificacao-citacoes`. Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados de empregados, terceiros e da empresa nunca em repositório público; investigação interna trata dados pessoais sob base legal e proporcionalidade.

## Lembretes finais

- **A prova vale pelo modo de colher** — legalidade e cadeia de custódia são o eixo; prova ilícita expõe, não protege.
- **Desenhe a partir da pergunta probatória** — "isto se sustenta num processo?" antes de coletar.
- **Leniência ≠ imunidade penal dos indivíduos** — coordene CGU + MP (colaboração/ANPP) + CADE quando cabível.
- **Empresa e executivo têm interesses distintos** — defesa própria e independente para cada pessoa exposta.
- **Programa de integridade só atenua se for efetivo** — documente detecção, reação e medidas corretivas (Decreto 11.129/2022).
- **Vigência:** confirme o Decreto 11.129/2022 (não o revogado) e o arranjo leniência-penal atual; **sem jurisprudência de memória** — tudo pelo gate.

**Padrão de redação:** ao converter a apuração em parecer/peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
