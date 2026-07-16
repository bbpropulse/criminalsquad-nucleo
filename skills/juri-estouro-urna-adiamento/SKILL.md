---
name: juri-estouro-urna-adiamento
description: >-
  Use ao lidar com o ESTOURO DE URNA (jurados aptos insuficientes para completar o Conselho após as
  recusas) e com a SEPARAÇÃO de julgamentos de corréus imposta pelas recusas — requerimento de
  adiamento, sorteio de suplentes, ordem de julgamento dos réus e consignação em ata para preservar
  o prejuízo. Gatilhos: estouro de urna, urna estourou, jurados insuficientes, não completou o
  Conselho de Sentença, separação de… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, peca, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-estouro-urna-adiamento"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-estouro-urna-adiamento", "juri estouro", "urna adiamento"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Estouro de Urna, Separação de Julgamentos e Adiamento da Sessão (arts. 469-471 do CPP)

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

Esta skill orienta o que fazer quando, na **formação do Conselho de Sentença** (2ª fase do júri), as **recusas** — sobretudo as peremptórias — esgotam o corpo de jurados presentes e **não sobram 7 aptos** para compor o Conselho. É o chamado **estouro de urna**. Dele decorrem dois institutos de alta consequência estratégica: a **separação obrigatória dos julgamentos** dos corréus (art. 469, §1º) e o **adiamento** da sessão (art. 471).

> **Lição central:** estouro de urna é **problema de aritmética + estratégia**. Antes de qualquer requerimento, **conte**: quantos jurados presentes e aptos há, e quantas recusas cada polo ainda pode exercer. Feita a conta, a briga real é **quem é julgado primeiro** e **com qual corpo de jurados** — porque o réu cindido volta a plenário depois, com urna e Conselho possivelmente diferentes.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 447 a 452 (composição/alistamento), 463-472 (instalação, recusas e formação do Conselho) e, em especial, 469, 470 e 471 do CPP**, além do **art. 429, §§1º e 2º** (ordem de preferência dos processos na pauta). A sistemática atual do júri decorre da **Lei 11.689/2008** — citar o procedimento anterior a 2008 é erro grave. Toda súmula, tese ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) antes do uso.

---

## O que é o "estouro de urna" (definição operacional)

- Na sessão, dos jurados alistados são sorteados os que comporão o **Conselho de Sentança** (7 jurados — art. 447). Para **instalar** os trabalhos exige-se a presença mínima de **15 jurados** (art. 463, *caput*); não havendo esse número, sorteiam-se **suplentes** e adia-se para o dia útil imediato (art. 464).
- Durante o sorteio, **defesa e acusação recusam** jurados: cada parte pode recusar **peremptoriamente (imotivadamente) até 3** jurados (art. 468), além das **recusas motivadas** (por impedimento, suspeição ou incompatibilidade — arts. 448-449, 468) que **não têm limite numérico**.
- **Estouro de urna** é a situação em que, somadas as recusas e as exclusões, **não restam jurados suficientes** (7) na urna para completar o Conselho. A urna "estourou": acabaram os nomes antes de fechar o Conselho.

> **Consequência imediata.** Não completado o Conselho, o julgamento **não se realiza naquele momento**: ou se **separam** os julgamentos dos corréus (quando o estouro decorre de recusas em processo com pluralidade de réus — art. 469, §1º), ou se **adia** a sessão e sorteiam-se novos/suplentes (art. 471), conforme a causa do estouro.

---

## Base legal (âncoras)

- **Art. 469 do CPP** — pluralidade de réus: se os réus, por meio de seus defensores, **não convierem** sobre as recusas, **prevalece o critério legal**; e, **§1º**, se as recusas impedirem a formação do Conselho, os réus serão **julgados separadamente** (separação obrigatória de julgamentos).
- **Art. 469, §2º do CPP** — determina a **ordem** em que os réus separados serão julgados (preferência segundo o critério legal do §1º c/c art. 429).
- **Art. 470 do CPP** — desaforamento/impedimento por número de processos e jurados; leitura conjunta com a formação do Conselho.
- **Art. 471 do CPP** — **não obtido o número mínimo** para o Conselho por efeito das recusas, o julgamento será **adiado** para o **primeiro dia desimpedido**, com novo sorteio.
- **Art. 429, §§1º e 2º do CPP** — **ordem de preferência dos processos** na pauta (réu preso; precedência na pronúncia; antiguidade da distribuição) — subsidia a **ordem de julgamento** dos réus cindidos.
- **Arts. 447, 463, 464, 468 do CPP** — número do Conselho (7), quórum de instalação (15), sorteio de suplentes, recusas peremptórias (3 por parte).
- **Arts. 448-449 do CPP** — recusas **motivadas** (impedimento/suspeição/incompatibilidade), sem limite.

> **Nota de leitura.** A numeração e a redação exata dos §§ do art. 469 (convenção entre defensores, prevalência do critério legal, separação e ordem) **variam conforme a edição/consolidação** consultada — **confirme o texto vigente na fonte oficial** antes de transcrever dispositivo em petição ou requerimento em ata.

---

## A mecânica das recusas com pluralidade de réus (por que a urna estoura)

Com **um só réu**, cada parte tem 3 peremptórias; dificilmente estouram 15+ jurados. O problema aparece com **corréus**:

1. **Recusas somam-se, não se dividem — em regra.** Havendo mais de um réu, a lei disciplina como as recusas dos defensores operam: se **convergirem** (todos recusam o mesmo jurado), a recusa é única; se **divergirem**, cada defensor exerce as suas — e o **art. 469** determina que, **não havendo acordo**, prevalece o **critério legal**.
2. **Recusas cruzadas esgotam o corpo.** Dois ou três defensores recusando **jurados diferentes**, cada um deles com suas peremptórias, mais as recusas da acusação, **consomem rapidamente** a urna. Quando os nomes acabam antes de completar 7 aptos, **estourou**.
3. **A saída legal é a separação (art. 469, §1º).** Se as recusas dos corréus, **não conciliadas**, impedem formar o Conselho, os réus **serão julgados separadamente** — cinde-se o processo para o plenário. Assim, cada réu é julgado por um Conselho que **coube** na urna disponível.

> **Ponto estratégico central.** A **separação** e a **ordem de julgamento** (art. 469, §1º e §2º c/c art. 429) definem **quem enfrenta o júri primeiro** e **com qual Conselho**. Isso muda tudo: prova produzida no primeiro julgamento repercute no segundo; o Conselho do segundo já não é o mesmo; a estratégia de recusa de cada defesa muda conforme a ordem.

---

## Fluxo de decisão em plenário (quando a urna estoura)

```
1) O Conselho (7) foi completado com os jurados aptos presentes?
   ├── SIM → segue o julgamento normalmente (fora do escopo desta skill).
   └── NÃO (ESTOUROU) → identifique a CAUSA:

2) Causa = pluralidade de réus + recusas não conciliadas (art. 469)?
   ├── SIM → SEPARAÇÃO obrigatória dos julgamentos (art. 469, §1º):
   │         a) definir a ORDEM de julgamento dos réus (art. 469, §2º c/c art. 429);
   │         b) requerer/consignar a ordem que favorece o cliente e o fundamento;
   │         c) o(s) réu(s) não julgado(s) → nova sessão (adiamento parcial).
   └── NÃO → Causa = falta de número por recusas/ausências em processo de réu único
             ou por exaustão geral da urna:
             → ADIAMENTO da sessão (art. 471) para o 1º dia desimpedido, com
               novo sorteio / convocação de suplentes.

3) Em QUALQUER hipótese:
   → CONSIGNAR EM ATA: a contagem de jurados, as recusas de cada parte, a causa
     do estouro, o requerimento formulado, a decisão do juiz-presidente e o
     PROTESTO (se indeferido) — sob pena de preclusão e de perder o tema no recurso.
```

---

## Separação de julgamentos (art. 469, §1º) — o que decidir e requerer

Quando o estouro impõe a cisão, três decisões concentram a estratégia:

### 1. A ordem de julgamento dos réus (art. 469, §2º c/c art. 429)
- A ordem **não é livre**: obedece a **critério legal**. O art. 429 (aplicado por remissão) dá a preferência da pauta — em geral: **réu preso** tem precedência; entre presos, o de **pronúncia mais antiga**; depois, a **antiguidade da distribuição**.
- **Requeira e fundamente** a ordem que favorece seu cliente, **ancorado no critério legal** — não em conveniência. Se a lei impõe determinada ordem, o pedido é de **observância**, não de escolha discricionária.

### 2. Quem vai primeiro — cálculo estratégico (defesa)
- **Ir primeiro** pode interessar quando a prova ainda é frágil e o primeiro julgamento "testa" a acusação, ou quando o cliente quer encerrar a angústia; **ir depois** pode interessar para **observar** a atuação da acusação e o comportamento do Conselho no primeiro júri.
- Atenção: **o que se decide no primeiro julgamento** (condenação/absolvição de corréu, teses acolhidas) **pode influenciar** o ambiente do segundo — inclusive quanto a testemunhos e narrativa. Pondere o **risco de contaminação** da tese.

### 3. Preservar o prejuízo para eventual nulidade
- A separação e a ordem são **matéria de nulidade relativa**, em regra: reclamam **impugnação no momento próprio** e **demonstração de prejuízo** (art. 563 — *pas de nullité sans grief*). Sem consignação em ata e sem protesto, **preclui**.

> **Requerimento-tipo (a consignar em ata).** "Requer a parte que, ante o estouro da urna decorrente das recusas não conciliadas dos corréus (art. 469, *caput*), seja procedida à **separação dos julgamentos** (art. 469, §1º), observando-se a **ordem legal** do art. 469, §2º, c/c art. 429 do CPP, pela qual deve ser julgado primeiramente [RÉU], por [FUNDAMENTO LEGAL — ex.: encontrar-se preso / pronúncia mais antiga]. Requer, ainda, a **consignação em ata** deste requerimento e da respectiva decisão."

---

## Adiamento da sessão (art. 471) — quando e como

- Quando o estouro **não** decorre de recusas em pluralidade de réus (ex.: réu único, ausências, exaustão da urna por recusas motivadas), a via é o **adiamento** para o **primeiro dia desimpedido**, com **novo sorteio** e convocação de suplentes.
- O adiamento **não é penalidade** — é consequência processual da impossibilidade de compor o Conselho. Requeira-o **expressamente** e peça a **consignação** da causa (para que a ata registre que o júri não se realizou por **estouro**, não por desídia da parte).
- **Cuidado com o desaforamento (art. 470).** O comprovado **excesso de serviço** — ou a impossibilidade reiterada de formar o Conselho — pode levar ao **desaforamento** para outra comarca. Se o adiamento sucessivo caminhar para desaforamento, isso é **outra skill/tema** (`juri-desaforamento`, se existir) — **avalie o impacto** antes de simplesmente pedir novo adiamento.

---

## Teses e contra-teses

### Da defesa (e de qualquer parte prejudicada pela condução)
- **Observância estrita do critério legal de ordem** (art. 469, §2º c/c art. 429): impugnar ordem de julgamento fixada **fora** da preferência legal.
- **Nulidade por Conselho mal formado:** se o Conselho for completado **ignorando** recusa legítima, ou se a separação **deixar de ser feita** quando devida, há vício — **consignar e protestar**.
- **Prejuízo concreto:** demonstrar que a ordem/adiamento adotados **efetivamente prejudicaram** a defesa (ex.: réu julgado depois de corréu condenado, em clima desfavorável) — sem prejuízo demonstrado, o vício relativo não anula (art. 563).

### Contraponto (a antecipar)
- A ordem de julgamento e o adiamento são, em larga medida, **atos de condução** do juiz-presidente amparados em **critério legal** e na **preclusão** — daí a importância de **impugnar no momento exato** (na sessão, em ata), e não só em razões de apelação.
- Nulidade de formação do Conselho tende a ser tratada como **relativa**: sem **grief** e sem **protesto tempestivo**, não vinga. **Confirme, no caso concreto e na jurisprudência atual, se o vício é absoluto ou relativo** — via `jurisprudencia-stj-stf`.

---

## Súmulas e precedentes (sob o Citation Gate)

> **Regra do gate:** cite livremente os **dispositivos do CPP** (arts. 447, 463-464, 468, 469-471, 429, 563). Para **qualquer** número de HC/REsp/RE, informativo ou tema, marque **[NÃO VERIFICADO]** e **confirme antes** via `jurisprudencia-stj-stf`. Melhor faltar precedente do que citar julgado inexistente.

- **Súmula 156/STF** — "É absoluta a nulidade do julgamento, pelo júri, por falta de quesito obrigatório." (súmula notória sobre nulidade no júri — **relacionada, não idêntica**, ao tema da formação do Conselho; conferir aplicabilidade). **[CONFERIR PERTINÊNCIA]**
- **Súmula 206/STF** — "É nulo o julgamento ulterior pelo júri com a participação de jurado que funcionou em julgamento anterior do mesmo processo." (relevante para a **cisão/ordem**: no segundo julgamento do réu cindido, jurado que atuou no primeiro **não pode** repetir). **[CONFERIR REDAÇÃO E VIGÊNCIA via `jurisprudencia-stj-stf`]**
- **Orientação sobre separação e ordem (art. 469, §§1º-2º):** a jurisprudência do STJ/STF acerca da **obrigatoriedade** da separação por recusas e da **ordem legal** de julgamento **deve ser conferida caso a caso** — **[NÃO VERIFICADO — confirmar teses e números via `jurisprudencia-stj-stf`]**.
- **Nulidade relativa × preclusão (art. 563 c/c 571):** o tratamento de vícios de formação do Conselho como **relativos** (exigindo protesto tempestivo) é **posição corrente**, mas **o enquadramento concreto varia** — **[CONFERIR na jurisprudência atual]**.

---

## Limites éticos (formação do Conselho e conduta com jurados)

Esta skill trata de **institutos processuais** (estouro, separação, adiamento), **não** de perfilamento de jurados. Ainda assim, porque toca a escolha de quem julga, valem os limites:

- **Perfilamento/seleção de jurados** admite **apenas dados públicos e lícitos** (o que consta dos autos, do alistamento oficial e de fontes públicas legítimas). É **vedado** coletar dados por meios ilícitos ou invasivos.
- **É terminantemente vedado abordar, contatar, pressionar, aliciar ou influenciar jurado** — antes, durante ou depois da sessão. Qualquer aproximação que comprometa a **imparcialidade** do Conselho de Sentença ou o **sigilo** das votações é ilícita e pode configurar **crime** e **infração ética**.
- A **recusa peremptória** é **imotivada** e legítima — mas **não pode** ter finalidade **discriminatória ilícita** (recusar jurado por raça, gênero, religião etc. como critério é abuso, ainda que a peremptória dispense motivação declarada).
- **Nada nesta skill autoriza** táticas que atinjam a **incomunicabilidade** dos jurados (art. 466, §1º) ou o **sigilo do voto** (sala secreta, art. 485-487). A soberania dos veredictos pressupõe um Conselho **livre e imparcial**.
- **Revisão humana obrigatória** e responsabilidade do **advogado** pela conduta em plenário (CED da OAB, art. 2º; Provimento 205/2021 quanto a publicidade e conduta digital).

---

## Erros comuns / anti-padrões (evitar)

- **Não contar a urna antes de requerer:** pedir separação ou adiamento sem demonstrar a aritmética (jurados presentes × recusas × aptos) enfraquece o requerimento.
- **Aceitar ordem de julgamento fora do critério legal** (art. 469, §2º c/c 429) sem impugnar.
- **Confundir separação (art. 469) com adiamento (art. 471):** a **causa** define a via — pluralidade de réus + recusas → separação; falta de número em geral → adiamento.
- **Não consignar em ata** a contagem, as recusas, a causa do estouro, o requerimento e a decisão — **preclui** e some no recurso.
- **Deixar de protestar** contra o indeferimento (perde a matéria para a apelação por nulidade, art. 593, III, "a").
- **Ignorar o risco de contaminação** entre o 1º e o 2º julgamento do réu cindido (inclusive jurado que atuou no 1º — cf. Súmula 206/STF, a conferir).
- **Citar dispositivo pela redação anterior a 2008** (Lei 11.689/2008 reescreveu a formação do Conselho).
- **Citar precedente de memória** — todo número passa por `jurisprudencia-stj-stf`.

## Checklist final (na sessão)

- [ ] **Contagem** feita e anotada: jurados presentes/aptos × recusas de cada parte × faltantes para 7?
- [ ] **Causa do estouro** identificada (pluralidade de réus + recusas → separação; falta de número geral → adiamento)?
- [ ] **Requerimento correto** formulado (separação art. 469, §1º **ou** adiamento art. 471)?
- [ ] **Ordem de julgamento** dos réus fundamentada no **critério legal** (art. 469, §2º c/c 429)?
- [ ] **Estratégia da ordem** avaliada (ir primeiro × ir depois; risco de contaminação da tese)?
- [ ] **Consignação em ata** do requerimento **e** da decisão do juiz-presidente?
- [ ] **Protesto** registrado em caso de indeferimento (para apelação — art. 593, III, "a")?
- [ ] Súmula 206/STF (jurado repetido no 2º julgamento) monitorada, se houver réu cindido? **[conferir]**
- [ ] **Citações verificadas** via `jurisprudencia-stj-stf` e **revisão humana** do advogado responsável?
- [ ] **Limites éticos** com jurados observados (dados públicos; sem contato/pressão; recusa sem fim discriminatório)?

---

## Lembretes finais

- **Estouro de urna = urna esgotada antes de fechar 7 aptos.** Primeiro a **aritmética**, depois a estratégia.
- **Pluralidade de réus + recusas não conciliadas → SEPARAÇÃO** (art. 469, §1º); a **ordem** segue o **critério legal** (§2º c/c 429).
- **Falta de número em geral → ADIAMENTO** (art. 471) para o 1º dia desimpedido, com novo sorteio/suplentes.
- **Quem vai primeiro e com qual Conselho** é a decisão de maior consequência — pondere a **contaminação** entre julgamentos.
- **Ata é munição:** consigne contagem, recusas, causa, requerimento, decisão e **protesto** — sem isso, **preclui**.
- **Vigência (Lei 11.689/2008)** e **precedentes** conferidos via `jurisprudencia-stj-stf` **antes** de citar.
- **Ética com jurados:** só dados públicos; **nunca** abordar/pressionar/influenciar; recusa imotivada, mas **sem fim discriminatório**.

## Nota de conformidade

Rascunho técnico sob **revisão humana obrigatória** — não substitui o juízo do advogado responsável nem a leitura do caso concreto em plenário. Toda referência normativa e todo precedente passam pelo **Citation Gate** (`jurisprudencia-stj-stf` / `verificacao-citacoes`) antes do uso. Conduta ética conforme o polo: **advocacia** (Código de Ética da OAB + Provimento 205/2021); **Ministério Público** (CNMP); **Defensoria** (LC 80/94). Ao redigir requerimento ou razões, aplique também a skill `redacao-persuasiva-criminal`.
