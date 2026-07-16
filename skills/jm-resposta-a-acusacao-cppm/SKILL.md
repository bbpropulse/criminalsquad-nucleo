---
name: jm-resposta-a-acusacao-cppm
description: >-
  Use para a DEFESA PROCESSUAL no rito da Justiça Militar após o recebimento da denúncia do MPM —
  alegações preliminares, exceções (incompetência, litispendência, coisa julgada, suspeição,
  impedimento), preliminares de nulidade, inépcia da denúncia militar e requerimento de provas no
  procedimento ordinário do CPPM (arts. 384 e ss.), com julgamento pelo Conselho de Justiça
  (escabinato). Gatilhos: resposta à acusação militar… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, peca, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-resposta-a-acusacao-cppm"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-resposta-a-acusacao-cppm", "resposta acusacao", "acusacao cppm"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Resposta/Defesa Processual no Rito do CPPM (Decreto-Lei 1.002/1969, arts. 384 e ss.)

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

Esta skill orienta a **defesa processual do acusado na Justiça Militar** logo após o **recebimento da denúncia do Ministério Público Militar (MPM)** — o momento de deduzir **alegações preliminares, exceções, preliminares de nulidade e o requerimento de provas** no **procedimento ordinário do Código de Processo Penal Militar (CPPM)**, cujo julgamento cabe ao **Conselho de Justiça** (o **escabinato**: juiz togado + oficiais-juízes). É o análogo militar da "resposta à acusação" do CPP, mas com **rito, órgão julgador e exceções próprios** — não se confunde com as skills do juízo comum.

> **Lição central:** o rito do CPPM **não é o do CPP** — não copie a mecânica do art. 396/396-A do CPP nem a nomenclatura do processo comum. Aqui o julgador é o **Conselho de Justiça (escabinato)**, as **exceções têm procedimento e momento próprios** (CPPM, arts. 128 e ss.) e a **nulidade militar** segue os arts. 500 e ss. do CPPM. **Classifique antes de tudo:** (1) qual a **Justiça** (Militar da União — CF, art. 124; ou Militar Estadual — CF, art. 125, §4º); (2) qual o **Conselho** competente (Especial, para oficiais; Permanente, para praças); (3) qual o **rito** (ordinário dos arts. 384 e ss.; ou especial — deserção/insubmissão); e (4) qual a **matéria preliminar** cabível.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 384 e ss. (procedimento ordinário) e dos arts. 128 a 149 (exceções) do **CPPM (Decreto-Lei 1.002/1969)**, bem como do **CPM (Decreto-Lei 1.001/1969)** e das regras de competência da CF (arts. 124 e 125, §4º). Confira também as **Súmulas do STM/STF/STJ** e a jurisprudência atual sobre competência da Justiça Militar e nulidades pela skill `jurisprudencia-stj-stf` (e, para o STM, pela pesquisa jurisprudencial do acervo). A redação base desta skill é a dos Decretos-Lei de 1969, com alterações supervenientes; **não cite número de acórdão, informativo ou Súmula do STM de memória**.

## Foco e polo

Esta skill é de **DEFESA** (advocacia / Defensoria Pública da União ou estadual). O acusado pode ser assistido por advogado constituído, defensor público ou defensor dativo/ad hoc designado pela Auditoria. As contra-teses do **MPM** aparecem só para **antecipar** o embate — não a converta em peça acusatória.

## O que é o escabinato (por que muda a estratégia)

> **Conselho de Justiça (escabinato).** Diferente do juízo comum (juiz singular ou júri de leigos), a Justiça Militar julga por **colegiado misto**: um **juiz togado** (juiz federal da Justiça Militar / juiz de direito do juízo militar) e **oficiais-juízes** sorteados. Há dois conselhos:
> - **Conselho Especial de Justiça** — processa e julga **oficiais** (composto por oficiais de posto superior ou igual ao do acusado);
> - **Conselho Permanente de Justiça** — processa e julga **praças** (e civis, na Justiça Militar da União, quando cabível).
>
> **Implicação prática:** a matéria técnico-jurídica (competência, nulidade, tipicidade) é **conduzida pelo juiz togado**, mas o **mérito** é decidido também pelos **oficiais-juízes** — o que recomenda linguagem clara, subsunção explícita e atenção à hierarquia/disciplina como valores presentes na sala. **Confirme a composição e o momento de constituição do Conselho** conforme a redação vigente do CPPM.

## Base legal

- **CF, art. 124** — competência da **Justiça Militar da União** (crimes militares definidos em lei).
- **CF, art. 125, §4º** — competência da **Justiça Militar Estadual** (militares dos Estados; e o júri para crimes dolosos contra a vida de civil — Lei 13.491/2017 e a redação vigente; **conferir**).
- **CPPM, arts. 384 e ss.** — **procedimento ordinário** perante o Conselho de Justiça (recebimento da denúncia, citação, qualificação e interrogatório, inquirição de testemunhas, diligências, alegações). **Confira a redação e a exata sequência dos atos** — o CPPM tem topografia própria.
- **CPPM, arts. 77 a 79** — **requisitos da denúncia** militar (a base para arguir **inépcia**).
- **CPPM, arts. 128 a 149** — **exceções**: incompetência, impedimento, suspeição, litispendência, ilegitimidade de parte e coisa julgada — cada uma com procedimento e momento próprios. **Conferir o dispositivo exato de cada exceção.**
- **CPPM, arts. 500 a 512 (nulidades)** — o regime de **nulidades** do processo penal militar (com a lógica do prejuízo — *pas de nullité sans grief*). **Conferir a numeração vigente.**
- **CPM (Decreto-Lei 1.001/1969)** — para aferir se o fato é **crime militar** (definição do art. 9º do CPM — ponto central da competência).

> **Ponto nevrálgico — art. 9º do CPM.** A competência da Justiça Militar depende de o fato **ser crime militar** na definição do **art. 9º do CPM** (em tempo de paz). Toda a defesa processual gira em torno disso: **se o fato não é crime militar, a competência não é da Justiça Militar** (excepciona-se a hipótese de dolo contra a vida de civil, deslocada ao júri — Lei 13.491/2017; **conferir a redação vigente e o alcance atual**).

## Estrutura da peça de resposta/defesa (roteiro)

> Peça sob o rito do CPPM, apresentada após o recebimento da denúncia. **Adaptar à fase e à praxe da Auditoria** — a topografia dos atos do CPPM difere do CPP.

1. **Endereçamento** ao Juízo/Auditoria competente (Auditoria Militar da União; ou Auditoria de Justiça Militar Estadual) e ao **Conselho de Justiça** respectivo (Especial/Permanente).
2. **Qualificação** do acusado com **situação funcional** (posto/graduação; unidade; estável/não) — dado que define o Conselho competente.
3. **Síntese da imputação** (o crime militar imputado; art. do CPM; data/local).
4. **Das exceções** (se cabíveis) — **em petição própria/apartada**, conforme o CPPM (arts. 128 e ss.): incompetência, litispendência, coisa julgada, suspeição/impedimento, ilegitimidade.
5. **Das preliminares** — **inépcia da denúncia** (CPPM, arts. 77-79), **nulidades** do IPM/rito (CPPM, arts. 500 e ss.), ausência de justa causa.
6. **Do mérito defensivo** (quando já cabível deduzir) — atipicidade, excludentes, negativa de autoria — com **subsunção explícita** ao CPM.
7. **Das provas** — rol de testemunhas, requerimento de perícias/diligências, documentos.
8. **Dos pedidos** — acolhimento da exceção/preliminar (declinação, extinção, nulidade, rejeição/absolvição sumária conforme o cabível no CPPM); subsidiariamente, produção de provas.
9. **Fecho** — local, data, advogado/defensor, OAB/identificação funcional.

> **Não reproduzir modelo pronto de sentença ou de quesito.** A peça segue o caso concreto e a fase. Aplique a skill `redacao-persuasiva-criminal` para teoria do caso, narrativa e persuasão.

## As exceções do CPPM — matéria, efeito e momento (arts. 128 a 149)

> **Regra de ouro:** exceção **não é preliminar dentro da resposta** — no CPPM tem **procedimento próprio** (em regra, autuada em apartado, com contraditório e decisão específica). **Confira o rito e o momento de cada exceção na redação vigente** e **consigne** a arguição para preservar a matéria.

### 1. Exceção de incompetência (a mais estratégica)
- **Tese:** o fato **não é crime militar** (art. 9º do CPM não incide) → competência é da **Justiça Comum** (ou do **júri**, se dolo contra a vida de civil). Também cabe quando errada a **Justiça** (União × Estadual) ou o **Conselho** (Especial × Permanente).
- **Efeito:** acolhida, **declina-se** a competência e remetem-se os autos ao juízo próprio (aproveitando-se atos, na forma da lei).
- **Contra-tese (MPM):** o fato subsume-se ao art. 9º do CPM (lugar sujeito à administração militar, agente militar em serviço, etc.). → **Rebater** demonstrando a ausência dos vetores do art. 9º (condição do agente, nexo com a função, local, tempo).

### 2. Exceção de litispendência
- **Tese:** já **corre outro processo** pelo mesmo fato contra o mesmo acusado → dupla persecução vedada; extinção de um dos feitos.
- **Contra-tese (MPM):** fatos ou sujeitos distintos. → **Rebater** com a **identidade tríplice** (mesmo fato, mesmo acusado, mesma imputação).

### 3. Exceção de coisa julgada
- **Tese:** o fato **já foi definitivamente julgado** (absolvição/condenação transitada) → *ne bis in idem*; extinção.
- **Contra-tese (MPM):** o julgado anterior é de objeto diverso. → **Rebater** com a certidão de trânsito e a identidade do fato.

### 4. Exceção de suspeição / impedimento
- **Tese:** o **juiz togado** ou **oficial-juiz** incide em causa de suspeição/impedimento (interesse, inimizade, subordinação direta ao acusado, participação anterior no feito) → afastamento.
- **Peculiaridade militar:** a **relação hierárquica** entre oficial-juiz e acusado pode fundamentar suspeição/impedimento — **atenção à composição do Conselho**.
- **Contra-tese (MPM):** mera hierarquia não gera suspeição automática. → **Rebater** com a causa concreta (subordinação direta, envolvimento no fato, inimizade).

### 5. Exceção de ilegitimidade de parte
- **Tese:** ilegitimidade **ativa** (denúncia por quem não detém a atribuição) ou **passiva** (acusado que não é o sujeito ativo próprio do crime militar) → extinção/retificação.
- **Contra-tese (MPM):** legitimidade regular. → **Rebater** conforme a titularidade da ação e a condição de militar exigida pelo tipo.

## Inépcia da denúncia militar (CPPM, arts. 77-79)

> **A denúncia deve** descrever o fato criminoso com todas as circunstâncias, qualificar o acusado, classificar o crime e conter o rol de testemunhas — **requisitos dos arts. 77-79 do CPPM** (conferir a redação exata).

- **Tese de inépcia:** denúncia que **não individualiza a conduta** (imputação genérica em concurso de agentes), **não descreve o nexo com a função/serviço militar** (essencial ao art. 9º do CPM), ou **não classifica corretamente** o crime militar → **inépcia**, com rejeição/oportunidade de emenda.
- **Denúncia genérica em concurso de agentes:** exige-se mínima individualização (o que cada militar fez) — a imputação por mera hierarquia/posição é insuficiente. **[NÃO VERIFICADO]** os precedentes do STF/STJ/STM sobre denúncia genérica devem ser **conferidos** via `jurisprudencia-stj-stf` — **não cite número de HC/HC coletivo de memória**.
- **Falta de justa causa:** ausência de lastro probatório mínimo (o IPM não sustenta a imputação) → rejeição por falta de justa causa. Ver `jm-defesa-no-ipm` para atacar a base investigativa.

## Nulidades próprias do processo penal militar (CPPM, arts. 500 e ss.)

- **Vícios do IPM (inquérito policial militar):** cerceamento, cadeia de custódia, ausência de defensor em atos essenciais — a irregularidade do **IPM** em regra é **mera peça informativa** (não contamina a ação, salvo prova ilícita que a instrua). Ver `jm-defesa-no-ipm` e `cadeia-de-custodia`.
- **Vícios de citação/constituição do Conselho:** citação irregular; Conselho constituído/sorteado em desacordo com o CPPM; oficial-juiz impedido → nulidade.
- **Cerceamento de defesa:** indeferimento imotivado de prova essencial; ausência de intimação para atos → nulidade.
- **Prova ilícita:** interceptação sem ordem, busca sem mandado, confissão sob coação → **inadmissibilidade** e desentranhamento.
- **Regime do prejuízo:** o CPPM também adota o *pas de nullité sans grief* — **demonstre o prejuízo concreto** e **consigne** a arguição no momento próprio, sob pena de preclusão.

## Teses e contra-teses (síntese)

| Eixo | Tese defensiva | Contra-tese (MPM) | Como rebater |
|---|---|---|---|
| Competência | Fato não é crime militar (art. 9º CPM não incide) → Justiça Comum/júri | Subsume-se ao art. 9º | Afastar os vetores do art. 9º (agente, função, local, tempo) |
| Inépcia | Denúncia genérica / sem individualização / classificação errada | Descrição suficiente | Apontar a falta de conduta individualizada e de nexo funcional |
| Justa causa | IPM não sustenta a imputação | Lastro suficiente | Demonstrar a insuficiência probatória do IPM |
| Litispendência / coisa julgada | Dupla persecução / fato já julgado | Objeto diverso | Provar a identidade tríplice / trânsito em julgado |
| Suspeição/impedimento | Oficial-juiz com subordinação/interesse | Hierarquia não gera suspeição automática | Provar a causa concreta |
| Nulidade | Vício de citação/Conselho/prova ilícita | Mera irregularidade sem prejuízo | Demonstrar prejuízo concreto e consignar |

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos de lei (citar com segurança, conferida a redação):** CPPM arts. 77-79, 128-149, 384 e ss., 500 e ss.; CPM art. 9º; CF arts. 124 e 125, §4º; Lei 13.491/2017 (ampliação do conceito de crime militar / dolo contra a vida de civil — **conferir alcance vigente**).
- **Súmulas do STM / STF / STJ sobre competência da Justiça Militar, crime militar e nulidades:** **[NÃO VERIFICADO]** — **não cite número** sem conferir. Passe por `jurisprudencia-stj-stf` e pela pesquisa do acervo (STM). Prefira **ensinar a tese** (não incidência do art. 9º do CPM; inépcia por ausência de individualização; nulidade por vício de constituição do Conselho) a arriscar um número de Súmula ou HC.
- **Precedentes sobre denúncia genérica em concurso de agentes e sobre foro/competência:** **[NÃO VERIFICADO]** — conferir número, órgão e vigência antes de citar.

> **Regra de ouro do Citation Gate:** dispositivo de lei e princípio, sim; **número de acórdão/Súmula/informativo, só depois de verificado**. Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência fabricada por IA.

## Roteiro de análise (passo a passo)

1. **Aferir a competência:** o fato é **crime militar** (art. 9º do CPM)? Qual **Justiça** (União × Estadual)? → base da exceção de incompetência.
2. **Identificar o Conselho** competente (Especial p/ oficial; Permanente p/ praça) e conferir sua **constituição/sorteio** — vício aqui é nulidade.
3. **Examinar a denúncia** à luz dos arts. 77-79 do CPPM: individualização, nexo funcional, classificação → inépcia?
4. **Checar litispendência / coisa julgada** (identidade tríplice; certidões).
5. **Rastrear suspeição/impedimento** de juiz togado e oficiais-juízes (subordinação, interesse).
6. **Auditar o IPM e a prova** (cadeia de custódia, ilicitudes) — ver `jm-defesa-no-ipm` e `cadeia-de-custodia`.
7. **Escalonar os pedidos:** declinação/extinção (competência, litispendência, coisa julgada) › nulidade › rejeição por inépcia/falta de justa causa › mérito (atipicidade/absolvição) › produção de provas.
8. **Passar tudo pelo Citation Gate** (`jurisprudencia-stj-stf` + acervo STM) antes de citar Súmula/precedente.

## Erros comuns e anti-padrões (evitar)

- **Aplicar o rito do CPP** (arts. 396/396-A) ao processo militar — o CPPM tem topografia e órgão julgador próprios.
- Deduzir **exceção como mera preliminar** dentro da resposta, quando o CPPM exige **procedimento próprio** (perda de eficácia/risco de preclusão).
- Ignorar o **art. 9º do CPM** — sem ele não se afere se o fato é crime militar e, logo, a competência.
- Confundir **Conselho Especial (oficial)** com **Permanente (praça)** — vício de constituição é nulidade.
- Tratar o **IPM** como se contaminasse a ação por mera irregularidade — em regra é peça informativa (salvo prova ilícita).
- Arguir **suspeição** de oficial-juiz por **mera hierarquia**, sem causa concreta.
- **Não consignar** a arguição de nulidade/exceção no momento próprio (preclusão; o CPPM também exige prejuízo).
- Citar **Súmula do STM ou HC do STF/STJ de memória** — sempre passar pelo Citation Gate.

## Checklist de defesa

- [ ] **Competência** aferida pelo **art. 9º do CPM** (o fato é crime militar? qual Justiça?)?
- [ ] **Conselho** competente identificado (Especial/Permanente) e **constituição/sorteio** conferidos?
- [ ] **Denúncia** examinada à luz dos arts. 77-79 do CPPM (individualização, nexo funcional, classificação) — cabe **inépcia**?
- [ ] **Exceções** cabíveis deduzidas em **procedimento próprio** (arts. 128-149) e **consignadas**?
- [ ] **Litispendência / coisa julgada** checadas (identidade tríplice; certidões)?
- [ ] **Suspeição/impedimento** de juiz togado/oficiais-juízes rastreados por **causa concreta**?
- [ ] **IPM e prova** auditados (cadeia de custódia; ilicitudes) — `jm-defesa-no-ipm`, `cadeia-de-custodia`?
- [ ] **Pedidos escalonados** (declinação/extinção › nulidade › inépcia/justa causa › mérito › provas)?
- [ ] **Rol de testemunhas e diligências** requeridos no momento próprio?
- [ ] Súmulas/precedentes (STM/STF/STJ) **verificados** via `jurisprudencia-stj-stf` + acervo antes de citar?
- [ ] **Revisão humana** do advogado/defensor responsável realizada?

## Skills relacionadas

- `jm-classificacao-competencia-crime-militar` e `jm-crime-militar-competencia-jme-vs-comum-cf125` — para fundamentar a **exceção de incompetência** (art. 9º do CPM; JME × comum).
- `jm-defesa-no-ipm` — para atacar a base investigativa (inquérito policial militar).
- `jm-defesa-desercao` / `jm-defesa-insubmissao` — **ritos especiais** (não o ordinário desta skill).
- `excecoes-processuais` e `resposta-preliminar` — **do CPP/juízo comum** (distintos: aqui o rito é do CPPM e o julgador é o escabinato).
- `cadeia-de-custodia`, `jurisprudencia-stj-stf`, `redacao-persuasiva-criminal`.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa, não substitui o juízo do profissional nem a leitura dos autos concretos.
- **Ética por polo:** atuação de **advocacia** sob o Estatuto da OAB e o **Provimento 205/2021** (uso de IA na advocacia); **Defensoria Pública da União/estadual** sob a **LC 80/94**. Vedada a citação de jurisprudência não verificada.
- **Citation Gate inegociável:** dispositivos de lei e Súmulas notórias com certeza; **qualquer** precedente específico (HC/REsp/RE, informativo, Súmula do STM) marcado como **[NÃO VERIFICADO]** e conferido via `jurisprudencia-stj-stf` e pesquisa do acervo (STM) antes do uso.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
