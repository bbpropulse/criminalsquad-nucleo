---
name: defesa-concorrencia-desleal-segredo-empresa
description: >-
  Use ao construir a DEFESA nos crimes de concorrência desleal e violação de segredo de empresa —
  LPI (Lei 9.279/1996), art. 195, com foco nos incisos XI (divulgar/explorar informação confidencial
  acessada por relação contratual/empregatícia) e XII (segredo obtido por meio ilícito/fraude): ação
  penal PRIVADA e decadência (art. 199 LPI; art. 38 CPP), informação não protegida (pública/evidente
  ao técnico), ausência de meio… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, concorrencia-desleal, segredo-empresa, propriedade-industrial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-concorrencia-desleal-segredo-empresa", "defesa concorrencia", "segredo empresa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-concorrencia-desleal-segredo-empresa"]
---

# Concorrência desleal e violação de segredo de empresa — Defesa

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

Esta skill orienta a **defesa técnica** nos **crimes de concorrência desleal** da **Lei da Propriedade Industrial (Lei 9.279/1996 — LPI)**, com foco nas duas figuras de **violação de segredo de empresa**: o **art. 195, XI** (divulgar/explorar/utilizar, sem autorização, informação confidencial a que se teve acesso por **relação contratual ou empregatícia**) e o **art. 195, XII** (fazer o mesmo com informação obtida por **meios ilícitos ou fraude**). O bem jurídico é a **lealdade concorrencial** e o **patrimônio imaterial** da empresa. O entregável são **blocos de tese** para a **queixa-crime rejeitada, resposta à acusação e memoriais** — não uma peça única. O foco é o **polo defensivo**.

> **Lição central:** este é um crime de **ação penal privada** cujo campo de batalha tem **duas frentes que precedem o mérito**. Primeiro, a **porta processual**: houve **queixa** de quem tinha legitimidade, dentro do **prazo decadencial de 6 meses** (art. 38 CPP), com a **materialidade demonstrada** (nos crimes contra a propriedade imaterial a lei exige diligência pericial prévia — CONFERIR o rito no CPP)? Segundo, a **materialidade do segredo**: a informação era **realmente um segredo protegido** — confidencial, com valor econômico e sob medidas de proteção — ou era **de conhecimento público / evidente para um técnico no assunto** e, portanto, **excluída do tipo**? Falhando qualquer uma dessas frentes, não se chega ao mérito. **Segredo não é tudo o que a empresa gostaria de manter em sigilo; é o que a lei protege como tal.**

> **Cautela de vigência e Citation Gate (obrigatória antes de citar):** (1) confirme a **redação vigente** do art. 195, XI e XII, e da regra de ação penal do **art. 199 da LPI** antes de fundamentar — a natureza da ação (privada, salvo o art. 191) é elementar da defesa; (2) o **procedimento especial dos crimes contra a propriedade imaterial** no CPP (exige, como condição, **exame pericial prévio** — busca e apreensão + laudo) tem dispositivos e prazos próprios — **CONFERIR os artigos aplicáveis**, não citar número de memória; (3) toda **súmula, tese ou precedente** sobre segredo de empresa passa pela skill `jurisprudencia-stj-stf` e pela best-practice `verificacao-citacoes`. Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 195, XI, LPI (Lei 9.279/1996)** — divulgar, explorar ou utilizar-se, **sem autorização**, de **conhecimentos, informações ou dados confidenciais** utilizáveis na indústria, comércio ou prestação de serviços — **excluídos os de conhecimento público ou evidentes para um técnico no assunto** — a que se teve acesso **mediante relação contratual ou empregatícia, mesmo após o término do contrato** *(conferir redação exata e a cláusula de exclusão)*.
- **Art. 195, XII, LPI** — divulgar/explorar/utilizar, sem autorização, informação como a do inciso anterior **obtida por meios ilícitos ou a que se teve acesso mediante fraude** *(conferir)*.
- **Pena do art. 195** — pena baixa (patamar de **detenção de 3 meses a 1 ano, ou multa** — **CONFERIR** no texto vigente), o que atrai **JECRIM/menor potencial ofensivo** e **prescrição curta** (art. 109 do CP).
- **Art. 199, LPI** — nos crimes deste Título procede-se **mediante queixa** (ação penal **privada**), **salvo** quanto ao crime do **art. 191** (uso indevido de armas, brasões e insígnias públicas), de ação penal pública.
- **Art. 38, CPP** — **decadência**: queixa em **6 meses** contados do conhecimento da autoria.
- **CP, art. 154** — violação de segredo profissional (figura próxima; interface e possível concurso/escolha de tipo).
- **CLT / vínculo empregatício** — distinção entre **segredo do empregador** e o **conhecimento/experiência profissional** do próprio empregado; cláusulas de confidencialidade e não concorrência têm **natureza cível/trabalhista**.

## Anatomia dos tipos (incisos XI e XII) — roteiro de subsunção

Teste cada elemento em separado; a ausência de **qualquer um** leva à **atipicidade**.

1. **Objeto: informação confidencial protegida** ("segredo de empresa"). Não basta ser interna: precisa ser **(a) confidencial** — não de conhecimento público nem óbvia para um técnico; **(b) dotada de valor econômico/concorrencial**; e **(c) objeto de medidas razoáveis de proteção** pelo titular. É o **coração do tipo** e o principal ponto de ataque.
2. **Conduta:** **divulgar, explorar ou utilizar-se** — sem autorização. Mera **posse** ou **conhecimento** da informação, sem divulgação/exploração, não completa o núcleo.
3. **Modo de acesso (o que separa XI de XII):**
   - **XI** — acesso **lícito na origem**, por **relação contratual ou empregatícia** (o ex-empregado, o prestador, o sócio) — a ilicitude está no **uso não autorizado** posterior.
   - **XII** — acesso **ilícito na origem**, por **meios ilícitos ou fraude** (invasão, subtração, espionagem, aliciamento fraudulento).
4. **Elemento subjetivo: dolo** de concorrência desleal — vontade de **divulgar/explorar** ciente da confidencialidade e da falta de autorização, no contexto **concorrencial**. **Não há forma culposa.** Uso de bagagem técnica própria, sem consciência de violar segredo alheio, não tipifica.

**Método:** a defesa ataca, em regra, **(1)** — a informação não era segredo protegido — e **(4)** — ausência de dolo/finalidade concorrencial —, além do **modo de acesso** (não houve meio ilícito no XII; havia autorização/licitude no XI).

## Ação penal privada, queixa e decadência (a porta de entrada)

- **Ação penal privada (art. 199 LPI):** só se procede **mediante queixa** do ofendido (titular do segredo) — não cabe denúncia do MP. **Ilegitimidade** de quem oferece a queixa é preliminar terminativa.
- **Decadência (art. 38 CPP):** **6 meses** do conhecimento da autoria → **extinção da punibilidade**. Verificar a **data em que o querelante soube quem** teria violado o segredo (não a data do fato).
- **Requisitos da queixa:** narrativa idônea da conduta, individualização, **procuração com poderes especiais** e **materialidade** demonstrada. Queixa inepta → **rejeição** (o rigor formal da ação privada é maior).
- **Perícia prévia como condição:** nos crimes contra a propriedade imaterial que **deixam vestígio**, o CPP condiciona a queixa à prévia **diligência de busca/apreensão e laudo pericial** que comprove a materialidade — **CONFERIR os dispositivos e prazos aplicáveis** antes de invocar. Ausência dessa prova → carência de condição de procedibilidade.
- **Institutos:** pena baixa → **menor potencial ofensivo** (JECRIM); **composição civil** e eventual **transação penal** (aplicável também à ação privada, conforme jurisprudência — **CONFERIR**); **perdão** e **perempção** (art. 60 CPP) próprios da ação privada; **decadência** e **prescrição** (art. 109 CP) sempre na primeira linha.

## Catálogo de teses defensivas

1. **A informação não era segredo protegido** (atipicidade nuclear) — era **de conhecimento público** ou **evidente para um técnico no assunto** (cláusula de exclusão do inciso XI); estava em catálogos, patentes publicadas, literatura técnica, engenharia reversa lícita ou domínio comum do setor.
2. **Ausência de medidas de proteção pelo titular** — quem não trata a informação como confidencial (sem NDA, sem controle de acesso, sem classificação) **não tem segredo protegido** para ser violado; a autoproteção é ônus do titular.
3. **Ausência de meio ilícito / de fraude (XII)** — o acesso se deu por via lícita ou pública; sem invasão, subtração ou ardil, não há a elementar do inciso XII.
4. **Licitude do acesso e do uso (XI)** — havia **autorização** (contratual, tácita, por praxe) ou o uso estava **fora do escopo** da confidencialidade pactuada.
5. **Conhecimento e experiência próprios do trabalhador (interface CLT)** — o ex-empregado pode **usar a própria bagagem técnica, habilidades e know-how** acumulados; isso **não é** segredo do empregador. Distinguir **skill pessoal** de **informação confidencial apropriada**.
6. **Ausência de dolo e de finalidade concorrencial** — uso sem consciência da confidencialidade, sem intuito de competir deslealmente; erro sobre a natureza reservada do dado (erro de tipo).
7. **Ausência de dano / de potencialidade lesiva** — informação sem valor econômico atual, obsoleta, ou que não gerou nem podia gerar vantagem concorrencial.
8. **A questão é cível, não penal** — **mero descumprimento de cláusula** de confidencialidade/não concorrência resolve-se por **perdas e danos** e tutela específica na esfera cível; a via penal (subsidiária e de *ultima ratio*) não pode ser instrumento de pressão contratual.
9. **Preliminares processuais** — **ilegitimidade** do querelante; **decadência** (art. 38 CPP); **inépcia** da queixa; **falta de perícia/materialidade** (condição de procedibilidade); **perempção** (art. 60 CPP).
10. **Extinção da punibilidade** — **decadência** e **prescrição** (pena baixa; prazos curtos — art. 109 CP); **composição/perdão** na ação privada.
11. **Vedação ao *bis in idem*** — mesmos fatos capitulados simultaneamente no art. 195 (LPI) e no art. 154 (CP) devem ser enfrentados como **conflito aparente de normas** (especialidade da LPI).
12. **Dosimetria** — pena-base no mínimo; primariedade; **substituição por restritivas** e regime aberto (crime de pena baixa, **sem violência**); adequação da multa. O cálculo vai para a skill `calculadora-dosimetria`.

## Contra-teses da acusação (antecipar)

- **Segredo comprovado** — informação com **valor econômico**, restrita, protegida por NDA e controle de acesso; não pública nem óbvia.
- **Acesso privilegiado + uso desleal (XI)** — ex-empregado/prestador que **levou consigo** documentos, listas de clientes, fórmulas, código-fonte ou base de dados e os **explorou** em concorrente.
- **Meio ilícito (XII)** — prova de invasão, cópia clandestina, aliciamento fraudulento, exfiltração de arquivos.
- **Dolo e finalidade concorrencial** — coincidência temporal entre a saída e a captura de clientes/mercado; vantagem competitiva mensurável.
- **Dano concreto** — perda de clientes, queda de faturamento, desvio de oportunidade demonstrados.

A defesa **ataca cada uma na origem**: qualidade da prova de que a informação era **secreta e protegida**; **licitude** do acesso e do uso; **ausência de dolo** concorrencial; e a **fronteira com o ilícito meramente cível**.

## Distinção de figuras próximas

| Figura | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Art. 195, XI, LPI** | acesso **lícito** (relação contratual/empregatícia); ilicitude no **uso** | Se havia autorização, ou a info era pública/evidente → **atípico** |
| **Art. 195, XII, LPI** | acesso por **meio ilícito ou fraude** | Sem meio ilícito comprovado → **não é XII** (e talvez não seja XI) |
| **Violação de segredo profissional (CP, art. 154)** | revelar segredo conhecido **por profissão/ofício**, sem justa causa | Conflito aparente → **especialidade** da LPI; afastar duplicidade |
| **Descumprimento de NDA / não concorrência (cível)** | inadimplemento contratual | **Não é crime** — remeter à esfera cível (perdas e danos) |
| **Furto/apropriação de coisa (CP)** | subtração de **coisa** móvel | Segredo é bem **imaterial** — não confundir a apropriação de informação com furto |
| ***Know-how* e experiência do trabalhador** | habilidade e conhecimento **próprios** | Bagagem pessoal **não** é segredo do empregador — atipicidade |

## Prova da confidencialidade e do dano

- **Ônus do querelante:** por ser ação privada, cabe à acusação demonstrar que a informação **era segredo protegido** (confidencial, valiosa, com medidas de proteção) e que houve **divulgação/exploração** sem autorização. A defesa **exige** essa demonstração, não a presume.
- **Perícia é decisiva:** o laudo deve comprovar **o quê** era secreto, **que não** era público/evidente e **qual** o nexo com a conduta. Impugnar **metodologia**, **cadeia de custódia** de vestígios digitais (integridade de arquivos, metadados, espelhamento) e conclusões **categóricas** sem base. Ver `leitura-interpretacao-laudo-pericial-defesa` e as skills de análise de provas do acervo.
- **Prova digital:** questionar **autenticidade e integridade** de e-mails, logs, dumps e prints; acesso a dispositivos/contas sem autorização judicial pode configurar **prova ilícita** (art. 157 CPP).
- **Dano:** separar **alegação** de **prova** de prejuízo; correlação temporal não é causalidade. Sem lesão nem potencialidade lesiva concreta, a tese acusatória enfraquece.

> **Separe sempre fato, prova, inferência e tese.** "A empresa perdeu clientes" (fato) ≠ "o réu usou o segredo" (inferência) ≠ "houve violação do art. 195, XI" (tese). A defesa expõe cada salto lógico não comprovado.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** **não cite acórdão, súmula ou tese sobre segredo de empresa de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo** via `jurisprudencia-stj-stf` antes de levar à peça. Há sanção real por jurisprudência inventada por IA.

Pontos que **exigem verificação** antes de afirmar:
- **Conceito e alcance de "segredo de empresa"** e da cláusula de exclusão (conhecimento público / evidente ao técnico) na jurisprudência do STJ — **[NÃO VERIFICADO]**.
- **Natureza e legitimidade da queixa**, contagem da **decadência** e exigência de **perícia prévia** como condição nos crimes contra a propriedade imaterial — **[NÃO VERIFICADO]**; confira o rito no CPP.
- **Fronteira entre ilícito penal e ilícito cível** (mero descumprimento de NDA) e uso do *know-how* próprio do trabalhador — **[NÃO VERIFICADO]**.
- **Concurso aparente** entre o art. 195 (LPI) e o art. 154 (CP) — **[NÃO VERIFICADO]**.

## Checklist e anti-padrões

- [ ] **Ação privada:** a **queixa** foi oferecida por **quem tem legitimidade** (titular do segredo), com procuração com poderes especiais?
- [ ] **Decadência:** respeitado o prazo de **6 meses** do conhecimento da autoria (art. 38 CPP)?
- [ ] **Materialidade/perícia:** há **exame pericial prévio** comprovando o segredo, como o rito exige (CONFERIR)?
- [ ] **Segredo real:** a informação era **confidencial, valiosa e protegida** — ou **pública/evidente ao técnico** (atipicidade)?
- [ ] **Medidas de proteção:** o titular tratava o dado como segredo (NDA, controle de acesso), ou negligenciou a autoproteção?
- [ ] **Modo de acesso:** houve **meio ilícito/fraude** (XII) ou o acesso era **lícito/autorizado** (XI)?
- [ ] ***Know-how* próprio:** distinguiu a **experiência do trabalhador** da informação apropriada?
- [ ] **Dolo e finalidade concorrencial** presentes, ou é uso sem consciência/erro de tipo?
- [ ] **Dano** provado, ou apenas alegado?
- [ ] **Esfera correta:** o caso é **penal** ou mero **descumprimento contratual cível**?
- [ ] ***Bis in idem*** com o art. 154 (CP) enfrentado como conflito aparente?
- [ ] **Prescrição** verificada (pena baixa — art. 109 CP)?
- [ ] **Toda citação** passou pelo gate `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Tratar **tudo o que a empresa considera sigiloso** como segredo protegido — a lei **exclui** o público e o evidente ao técnico.
- Ignorar que a ação é **privada** e partir do modelo de denúncia do MP (decadência, legitimidade e perempção mudam tudo).
- Esquecer a **perícia prévia** como condição de procedibilidade nos crimes de propriedade imaterial.
- Confundir **experiência/know-how** do trabalhador com segredo do empregador.
- Criminalizar **descumprimento de NDA** que é matéria **cível**.
- Presumir **dolo concorrencial** e **dano** sem prova.
- Aceitar **prova digital** sem autenticidade e cadeia de custódia.
- Citar precedente sobre "segredo de empresa" **sem** passar pelo gate.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **querelante/assistente de acusação**, a lógica probatória se **inverte** — passa a ser **ônus da acusação** demonstrar a existência do segredo protegido, o meio (lícito no XI / ilícito no XII), o dolo concorrencial e o dano; as teses acima viram **pontos a provar**, e há ainda o dever de instruir a queixa com **perícia prévia** e observar a **decadência**.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`).
- **Sigilo/LGPD:** dados do assistido, do querelante e o **próprio conteúdo do alegado segredo** não vão a repositório público; peças em juízo podem exigir **segredo de justiça**.

## Lembretes finais

- **Duas portas antes do mérito:** legitimidade + decadência da **queixa** (art. 38 CPP; art. 199 LPI) e **materialidade pericial** do segredo.
- **Segredo é o que a lei protege** — não o que a empresa gostaria de manter sigiloso; **público/evidente ao técnico está excluído**.
- **XI x XII:** acesso **lícito** com uso desautorizado (XI) versus acesso por **meio ilícito/fraude** (XII) — a elementar do meio decide.
- ***Know-how* do trabalhador** não é segredo do empregador — atipicidade recorrente no cenário do ex-empregado.
- **Penal x cível:** descumprimento de NDA é, em regra, **cível** — não deixe a via penal virar cobrança contratual.
- **Sem jurisprudência de memória** — confira tudo via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
