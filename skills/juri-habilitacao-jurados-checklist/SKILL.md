---
name: juri-habilitacao-jurados-checklist
description: >-
  Use ao fiscalizar, no início da sessão do Tribunal do Júri (2ª fase / plenário), a regularidade do
  alistamento e da HABILITAÇÃO dos jurados sorteados — número mínimo instalado, requisitos de
  idoneidade do art. 436, isenções e dispensas dos arts. 437-438, jurado profissional/recorrente, e
  formulação do requerimento fundamentado quando o corpo não estiver regularmente formado. Gatilhos:
  habilitação dos jurados, idoneidade do… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, analise, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-habilitacao-jurados-checklist"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-habilitacao-jurados-checklist", "juri habilitacao", "jurados checklist"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Fiscalização da Habilitação e Idoneidade dos Jurados (CPP, arts. 425-426, 436-438, 447, 451, 463-464)

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

Esta skill entrega um **checklist operacional** para fiscalizar, **antes de instalada a sessão** e no correr dos sorteios, se o **corpo de jurados** foi regularmente alistado e habilitado — e como **requerer e consignar** a irregularidade quando não foi. É a skill de **execução da fiscalização**: verifica número mínimo instalado, idoneidade individual dos sorteados, isenções/dispensas legais, o problema do **jurado profissional/recorrente** e o **adiamento por falta de quórum** (art. 464).

> **Lição central:** vício na composição do corpo de jurados (número insuficiente para instalar, jurado inabilitado que integra o Conselho, sorteio irregular) pode gerar **nulidade**, mas em regra **só aproveita quem argui e consigna na sessão**. A régua de ouro é operacional: **conferir na hora, requerer na hora, exigir a consignação em ata na hora** — a omissão tempestiva costuma **precluir** (art. 571, VIII, e art. 563 CPP — *pas de nullité sans grief*). Fiscalização silenciosa não gera nulidade; fiscalização registrada gera munição de recurso.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 425-426, 432-435, 436-438, 447, 451 e 462-466 do CPP na fonte oficial antes de peticionar ou requerer em audiência — a sistemática atual do júri foi reescrita pela **Lei 11.689/2008**, e citar o rito **anterior** a ela é erro grave de vigência. Toda súmula, tema ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) antes do uso. Na dúvida, **omitir vence inventar**.

## Do que trata (e do que NÃO trata)

- **Trata:** a **legalidade da formação do corpo de jurados** — se há número mínimo para instalar, se os sorteados preenchem os requisitos de idoneidade e não incidem em isenção/impedimento legal, se o sorteio foi válido. É fiscalização **prévia e coletiva** da regularidade do rito.
- **NÃO trata:** a **contradita** (art. 449) e a **recusa peremptória/imotivada** (art. 468) — que são ataques a **jurado individual** já sorteado para o Conselho, no momento da chamada. Essas ferramentas convivem com esta fiscalização, mas são atos distintos. Também não se confunde com `juri-quesitacao` (formulação dos quesitos após os debates) nem com `juri-mapa-completo` (índice/linha do tempo do rito).
- **Polo:** serve **defesa e acusação** — a regularidade da formação do Conselho interessa a ambos os polos e ao próprio juízo. O roteador não precisa restringir por polo, mas deve lembrar que a **contradita** e a **recusa** têm dinâmicas próprias por polo (ver adiante).

## Base legal

- **Arts. 425-426, CPP** — **alistamento anual** e **lista geral** de jurados: o juiz-presidente organiza anualmente a lista (art. 426), com o número de alistados que a comarca comporta (art. 425); revisão e publicação da lista (art. 426, §§).
- **Art. 432, CPP** — organização da **lista de jurados** e requisição às fontes (autoridades, associações, sindicatos etc.).
- **Arts. 433-435, CPP** — **sorteio dos jurados** que servirão na sessão periódica; sorteio público (art. 433), convocação (art. 434).
- **Art. 436, CPP** — **quem pode ser jurado**: cidadão maior de 18 anos, de **notória idoneidade**; **§1º** veda exclusão por cor, etnia, raça, credo, sexo, profissão, classe social/econômica, origem ou grau de instrução; **§2º** — recusa injustificada ao serviço enseja multa.
- **Art. 437, CPP** — **isenções** do serviço do júri (rol legal: certas autoridades, membros de forças, etc.).
- **Art. 438, CPP** — a **recusa fundada em convicção religiosa/filosófica/política** implica **serviço alternativo**; a **recusa injustificada** acarreta perda ou suspensão de direitos.
- **Arts. 439-440, CPP** — efeitos do exercício do júri (presunção de idoneidade moral; preferência legal).
- **Arts. 447 e 451, CPP** — **Conselho de Sentença composto por 7 jurados** sorteados dentre os presentes (art. 447); jurados excluídos por impedimento/suspeição/incompatibilidade não são computados para o número mínimo (art. 451).
- **Arts. 462-466, CPP** — instalação dos trabalhos: **art. 463** — presentes **pelo menos 15 jurados**, o juiz declara instalada a sessão; **art. 464** — **não havendo o número mínimo, adia-se** para o primeiro dia desimpedido, com novo sorteio de suplentes (art. 464 c/c art. 465-466).
- **Arts. 448-449, CPP** — **impedimentos, suspeições e incompatibilidades** dos jurados (art. 448) e **contradita** no momento da chamada (art. 449).

## Fluxo da formação do corpo de jurados (para saber ONDE fiscalizar)

```
ALISTAMENTO ANUAL (arts. 425-426)        → lista geral publicada
        ↓
SORTEIO PARA A SESSÃO PERIÓDICA (arts. 433-435) → 25 jurados sorteados (art. 433)
        ↓
CONVOCAÇÃO e comparecimento
        ↓
INSTALAÇÃO DA SESSÃO (art. 463)          → exige ≥ 15 jurados presentes
        ↓  (se < 15 → ADIAMENTO, art. 464)
SORTEIO DO CONSELHO (art. 447)           → 7 jurados dentre os presentes
        ↓  (a cada nome: CONTRADITA art. 449 / RECUSA art. 468)
CONSELHO DE SENTENÇA formado (art. 447)  → compromisso (art. 472)
```

**Pontos de fiscalização (numerados p/ o checklist):** (1) regularidade da **lista/alistamento**; (2) **sorteio dos 25** (art. 433); (3) **quórum de 15** para instalar (art. 463); (4) **idoneidade e requisitos** de cada sorteado (art. 436); (5) **isenções/impedimentos** (arts. 437, 448); (6) **jurado profissional/recorrente**; (7) **sorteio válido do Conselho** (art. 447).

## Checklist de fiscalização (execução na sessão)

### A) Antes de instalada a sessão — número e lista
- [ ] **Quórum de instalação (art. 463):** há **pelo menos 15 jurados presentes**? Sem esse número, a sessão **não pode ser instalada** — requerer o **adiamento** (art. 464), com novo sorteio de suplentes.
- [ ] **Cômputo correto:** jurados **excluídos por impedimento/suspeição/incompatibilidade não entram na conta** do número mínimo (art. 451) — conferir se o juízo os subtraiu antes de declarar o quórum.
- [ ] **Sorteio dos jurados da sessão (art. 433):** o sorteio dos 25 foi **público** e regular? A lista de presentes confere com os sorteados/convocados?
- [ ] **Alistamento/lista geral (arts. 425-426):** há indício de que a lista está **desatualizada, viciada ou não publicada** na forma da lei? (fiscalização mais rara, mas relevante quando o vício é estrutural).

### B) Idoneidade e requisitos de cada jurado (art. 436)
- [ ] **Requisitos legais:** cidadão **maior de 18 anos**, no gozo dos direitos, de **notória idoneidade** (art. 436, *caput*)?
- [ ] **Vedação de discriminação (art. 436, §1º):** nenhum jurado foi **excluído** por cor, etnia, raça, credo, sexo, profissão, classe social/econômica, origem ou grau de instrução — e a **defesa/acusação também não pode** pretender exclusão por esses critérios (ver *Limites éticos*).
- [ ] **Impedimento/suspeição/incompatibilidade (art. 448):** algum sorteado tem **vínculo** com as partes, com o fato ou entre si (parentesco, art. 448, II) que o impeça? Sendo detectado, é objeto de **contradita** (art. 449) na chamada.
- [ ] **Menoridade/incapacidade:** conferir se não há jurado que perdeu os requisitos após o alistamento.

### C) Isenções e dispensas (arts. 437-438)
- [ ] **Isenções do art. 437:** algum presente que deveria estar **isento** (rol legal) foi indevidamente mantido? A isenção é **direito do isento**, não vício automático, mas convém consignar se relevante à composição.
- [ ] **Recusa por convicção (art. 438):** a recusa fundada em convicção religiosa/filosófica/política enseja **serviço alternativo** — não é fraude ao serviço; observar o correto encaminhamento pelo juízo.
- [ ] **Dispensa fundamentada:** dispensas concedidas pelo juiz-presidente estão **fundamentadas** e não comprometem o número mínimo?

### D) Jurado profissional / recorrente
- [ ] **"Jurado profissional":** há jurados que **servem repetidamente** em sucessivas sessões da mesma vara, com potencial comprometimento da **imparcialidade** e da representatividade do corpo? Observar o **sorteio aleatório** e a **rotatividade** (a lógica dos arts. 426-433 é a renovação e a impessoalidade). Detectado o padrão, **consignar** a fiscalização em ata — é ponto sensível de **[NÃO VERIFICADO]** na jurisprudência: confira o entendimento atual do STJ/STF sobre "jurado profissional" e imparcialidade via `jurisprudencia-stj-stf` antes de sustentar nulidade.

### E) Sorteio e formação do Conselho (art. 447)
- [ ] **Sorteio dos 7 (art. 447):** o Conselho foi sorteado **dentre os presentes** de forma pública e regular?
- [ ] **Contradita/recusa a cada nome:** cada jurado chamado foi **oferecido às partes** para contradita (art. 449) e recusa (art. 468) **antes** de compor o Conselho?
- [ ] **Compromisso (art. 472):** os jurados prestaram o compromisso legal?

## Tese defensiva e contra-tese (composição do corpo de jurados)

➡️ **Tese (nulidade por vício na formação):** a sessão instalada **sem o número mínimo** (art. 463), o **Conselho integrado por jurado inabilitado/impedido** (arts. 436/448) ou o **sorteio irregular** (arts. 433/447) maculam a formação do juiz natural do júri e podem gerar **nulidade** — desde que **arguida e consignada** no momento próprio (arts. 571, VIII, e 449) e demonstrado o **prejuízo** (art. 563).

➡️ **Contra-tese / limite (preclusão e falta de prejuízo):** a parte que **não arguiu tempestivamente** e não consignou a irregularidade, **precluiu** — e, ainda que consigne, boa parte dos vícios de composição é tratada como **nulidade relativa**, exigindo **demonstração concreta de prejuízo** (*pas de nullité sans grief*, art. 563). Por isso a fiscalização é inútil sem o **registro em ata** e, quando possível, sem a **indicação do prejuízo** concreto (ex.: jurado impedido que efetivamente compôs o Conselho e votou).

➡️ **Ponto de divergência (confirmar):** se o vício concreto (ex.: número mínimo, jurado profissional, sorteio) é tido por **absoluto** ou **relativo** varia conforme o caso e a jurisprudência atual — **[NÃO VERIFICADO]**: passe pelo gate `jurisprudencia-stj-stf` antes de afirmar a natureza do vício.

## Como requerer e consignar (técnica)

> **O momento é a sessão.** A irregularidade da composição do corpo de jurados deve ser **arguida oralmente e por escrito** no momento em que é percebida — **antes da instalação** (quórum), na **chamada** (contradita/recusa por nome) ou logo ao **sorteio do Conselho**. O registro é pressuposto do recurso.

1. **Requerimento oral fundamentado** ao juiz-presidente, indicando o dispositivo violado (art. 463 / 436 / 448 / 447) e o **pedido** (adiamento por falta de quórum; exclusão do jurado inabilitado; renovação do sorteio).
2. **Exigir a consignação em ATA** do requerimento **e** da decisão do juiz-presidente (deferimento/indeferimento). Sem ata, não há como demonstrar a tempestividade no recurso.
3. **Indeferido** o requerimento, **protesto** consignado em ata, mantendo a matéria viva para a **apelação por nulidade (art. 593, III, "a")**.
4. **Apontar o prejuízo** sempre que possível (jurado impedido que votou; composição sem quórum) — é o que converte a fiscalização em nulidade útil (art. 563).

### Esqueleto do requerimento (consignação em ata)

```
REQUERIMENTO DE IRREGULARIDADE NA FORMAÇÃO DO CORPO DE JURADOS
(a ser ditado para a ata da sessão — art. 495 CPP)

Excelência, a defesa/acusação, antes de instalada a sessão / ao ser
sorteado o Conselho, REQUER a consignação em ata do seguinte:

1. [DESCREVER O VÍCIO — ex.: "Encontram-se presentes apenas [Nº] jurados,
   número inferior ao mínimo de 15 exigido pelo art. 463 do CPP, razão pela
   qual a sessão não pode ser instalada."]
   OU
   ["O jurado [NOME/Nº], sorteado para o Conselho, incide em [impedimento/
   suspeição do art. 448, inc. __] / não preenche o requisito de [___] do
   art. 436, conforme [fundamento]."]

2. Com fundamento no art. [463 / 436 / 448 / 447] do CPP, REQUER:
   a) [o ADIAMENTO da sessão (art. 464), com novo sorteio de suplentes]; OU
   b) [a EXCLUSÃO do jurado inabilitado e a renovação do sorteio (art. 449)];
   e, desde já,
   c) a CONSIGNAÇÃO EM ATA deste requerimento e da respectiva decisão de
      Vossa Excelência, para os fins do art. 593, III, "a", do CPP.

3. Indeferido, desde logo PROTESTA pela nulidade, ressalvando a matéria para
   eventual recurso.
```

**Campos a preencher:** [Nº de jurados presentes], [NOME/Nº do jurado], [inciso do art. 448], [requisito do art. 436], [fundamento fático], [dispositivo], [pedido].

## Limites éticos (fiscalização e seleção de jurados)

A fiscalização da habilitação e o perfilamento de jurados são atividades **lícitas de preparação**, mas têm fronteiras rígidas:

- **Somente dados públicos e lícitos.** Eventual pesquisa sobre o perfil dos jurados sorteados usa **apenas informações públicas obtidas por meios lícitos** (a própria lista/alistamento, dados abertos). É **vedado** obter dados por meio ilícito, invadir privacidade ou tratar dados sensíveis em desacordo com a **LGPD**.
- **Proibido abordar, contatar, pressionar ou influenciar jurado.** Qualquer aproximação, contato direto ou indireto, oferta, ameaça, promessa ou tentativa de influenciar jurado **antes, durante ou depois** da sessão é **ilícita** e pode configurar crime e infração ética grave. A fiscalização se faz **perante o juízo, na sessão** — nunca junto ao jurado.
- **Preservar a imparcialidade e o sigilo.** Nada que comprometa a **imparcialidade do Conselho de Sentença**, a **incomunicabilidade dos jurados** (art. 466, §1º) ou o **sigilo do voto** (sala secreta, art. 485). Fiscaliza-se a **legalidade da formação**, não o **conteúdo da deliberação**.
- **Recusa peremptória sem fim discriminatório.** A **recusa imotivada** (art. 468) é legítima e **não exige motivo**, mas **não pode ser instrumento de exclusão discriminatória** vedada pelo art. 436, §1º (cor, etnia, raça, credo, sexo, classe, origem, grau de instrução). Usar a peremptória para depurar o Conselho por critério discriminatório é desvio de finalidade.
- **A vedação do art. 436, §1º vale para os dois lados.** Nem o juízo, nem a acusação, nem a defesa podem **excluir** jurado com base nos critérios proibidos — fiscalizar a formação **não** autoriza engenharia discriminatória do corpo de jurados.

## Erros comuns / anti-padrões

- **Fiscalizar em silêncio.** Perceber o vício e não requerer/consignar na hora → **preclusão** (arts. 571, VIII, e 563). Fiscalização sem ata é fiscalização perdida.
- **Confundir fiscalização com contradita.** Contradita (art. 449) e recusa (art. 468) são atos **por jurado individual** na chamada; a fiscalização da **formação** é prévia e coletiva. Usar a ferramenta errada no momento errado perde o direito.
- **Não subtrair os excluídos do número mínimo.** Computar para o quórum de 15 (art. 463) jurados impedidos/suspeitos, contra o art. 451.
- **Alegar nulidade sem prejuízo.** Sustentar nulidade meramente formal sem apontar o **prejuízo concreto** (art. 563) → tende a ser rejeitada.
- **Tratar isenção do art. 437 como vício automático.** Isenção é **direito do isento**; sua presença não invalida a sessão por si só.
- **Usar a peremptória para discriminar** (violação do art. 436, §1º) — ilícito e eticamente vedado.
- **Citar rito anterior a 2008.** Fundamentar em redação revogada pela Lei 11.689/2008 é erro grave de vigência.
- **Afirmar tese sobre "jurado profissional" com número de acórdão de memória** → **[NÃO VERIFICADO]**: passe por `jurisprudencia-stj-stf`.

## Checklist final (antes de encerrar a fiscalização)

- [ ] Quórum de **15** conferido (art. 463) e **excluídos subtraídos** (art. 451)?
- [ ] Cada sorteado checado quanto a **requisitos** (art. 436) e **impedimentos** (art. 448)?
- [ ] **Isenções/dispensas** (arts. 437-438) observadas sem comprometer o número mínimo?
- [ ] Padrão de **jurado profissional/recorrente** observado e, se relevante, **consignado**?
- [ ] **Sorteio do Conselho** (art. 447) público e regular; contradita/recusa oferecidas por nome?
- [ ] Todo vício **requerido oralmente + por escrito** e **consignado em ATA** com a decisão do juiz-presidente?
- [ ] **Protesto** registrado em caso de indeferimento (para o art. 593, III, "a")?
- [ ] **Prejuízo** concreto apontado quando possível (art. 563)?
- [ ] Toda súmula/tese/acórdão **conferido** via `jurisprudencia-stj-stf` (ou gate `verificacao-citacoes`) antes de citar?
- [ ] **Revisão humana** do advogado/membro responsável realizada?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à **preparação e fiscalização** da sessão do júri; não substitui o juízo profissional nem a leitura da lista e da ata concretas. A responsabilidade pela arguição e pela atuação em plenário é sempre do **profissional responsável**.
- **Citation Gate (inegociável):** dispositivos de lei (CPP) podem ser citados; **nenhuma súmula, tema, informativo ou número de acórdão** entra sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Pontos marcados **[NÃO VERIFICADO]** (natureza absoluta/relativa do vício; entendimento sobre "jurado profissional") **exigem** conferência. Melhor **faltar** precedente do que citar julgado inexistente.
- **Ética por polo:** advocacia — **OAB (EAOAB/CED) + Provimento 205/2021** (publicidade/atuação digital); Ministério Público — **CNMP**; Defensoria — **LC 80/94**. Conflito de interesses (art. 17 EAOAB) checado na triagem.
- **Limites éticos da seleção de jurados:** ver seção *Limites éticos* — somente dados públicos lícitos; **vedado** abordar/influenciar jurado; preservar imparcialidade, incomunicabilidade e sigilo; recusa peremptória **sem** fim discriminatório.

**Padrão de redação:** ao converter a fiscalização em petição ou razões de nulidade, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
