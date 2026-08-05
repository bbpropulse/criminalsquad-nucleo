---
name: assistente-execucao-civil-ex-delicto
description: >-
  Use ao efetivar no cível a reparação do dano decorrente do crime — executar a sentença penal
  condenatória transitada em julgado como título executivo judicial (art. 63 CPP; art. 515, VI,
  CPC), cumprir de imediato o valor mínimo fixado no art. 387, IV, CPP e liquidar o excedente,
  habilitar o herdeiro do ofendido, ou ajuizar a ação civil ex delicto autônoma (art. 64 CPP) contra
  o autor do fato e o responsável civil. Skill do… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-execucao-civil-ex-delicto"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-execucao-civil-ex-delicto", "assistente execucao", "civil delicto"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Execução Civil da Sentença Penal e Ação Civil Ex Delicto (CPP arts. 63-64; CPC arts. 515, VI, 509-512 e 523; CC art. 200)

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

Esta skill orienta a **efetivação no juízo cível da reparação do dano causado pelo crime**. Depois que a ação penal termina, a vítima (ofendido) tem dois caminhos para receber: **executar** a sentença penal condenatória transitada em julgado — que é **título executivo judicial** (art. 63 CPP; art. 515, VI, CPC) — ou, quando o título penal ainda não existe ou não basta, **ajuizar a ação civil ex delicto autônoma** (art. 64 CPP) contra o autor do fato e o responsável civil. É o passo que **transforma a condenação penal em dinheiro na mão da vítima**.

Esta é uma skill do **assistente de acusação / advocacia do ofendido (ou de seus herdeiros)** — atua-se pelo credor da reparação, não pela defesa do réu. Antes de sugeri-la, o roteador deve confirmar que o usuário representa a vítima, o ofendido habilitado ou o espólio/herdeiros; para a defesa, o interesse é inverso (impugnar valor, alegar prescrição, excluir o responsável civil).

> **Lição central:** o erro mais comum é a vítima sair da ação penal com um **título ilíquido** e parar aí. Se a sentença fixou o **valor mínimo do art. 387, IV, CPP**, esse valor é **líquido e certo** e vai **direto a cumprimento de sentença (art. 523 CPC)** — não precisa de liquidação. O que **excede** o mínimo (dano material comprovado, lucros cessantes, dano moral maior) é que se **liquida por arbitramento** (arts. 509-512 CPC) e depois se executa. Separe sempre o **líquido (executa já)** do **ilíquido (liquida antes)**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 63, 64, 65, 66 e 67 do CPP e do art. 387, IV, do CPP, bem como dos arts. 515, VI, 509-512 e 523 do CPC e do art. 200 do CC. Confira súmulas, temas repetitivos e eventual *overruling* pela skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nada de súmula ou precedente citado de memória.

## Base legal

- **Art. 63 do CPP** — transitada em julgado a sentença penal condenatória, poderão promover-lhe a execução, no cível, o ofendido, seu representante legal ou seus **herdeiros**. **Parágrafo único** (Lei 11.719/2008): transitada em julgado, a execução pode ser **desde logo** pelo **valor fixado nos termos do art. 387, IV**, sem prejuízo da **liquidação** para apuração do dano **efetivamente sofrido**.
- **Art. 64 do CPP** — a ação civil **ex delicto** (para reparação do dano) pode ser proposta **no juízo cível**, contra o autor do crime e, se for o caso, contra o **responsável civil**, **independentemente** da ação penal. **Parágrafo único:** intentada a ação penal, o **juiz da ação civil poderá suspender** o curso desta até o julgamento definitivo daquela (evita decisões contraditórias).
- **Art. 65 do CPP** — faz coisa julgada no cível a sentença penal que reconhecer **estado de necessidade, legítima defesa, estrito cumprimento de dever legal ou exercício regular de direito** (excludentes de ilicitude reconhecidas na esfera penal vinculam o cível).
- **Art. 66 do CPP** — a absolvição penal **não** obsta a ação civil quando **não** houver sido categoricamente reconhecida a **inexistência material do fato**. **Art. 67 do CPP** — não impedem a ação civil o despacho de arquivamento do inquérito, a decisão de extinção da punibilidade e a sentença absolutória por falta de prova.
- **Art. 91, I, do CP** — é **efeito automático** da condenação tornar **certa a obrigação de indenizar** o dano causado pelo crime.
- **Art. 387, IV, do CPP** — o juiz penal, ao condenar, **fixará valor mínimo** para reparação dos danos causados pela infração, considerando os prejuízos sofridos pelo ofendido.
- **Art. 515, VI, do CPC** — é **título executivo judicial** a **sentença penal condenatória transitada em julgado**.
- **Arts. 509 a 512 do CPC** — **liquidação** de sentença (por arbitramento ou pelo procedimento comum) quando o título é ilíquido.
- **Art. 523 do CPC** — **cumprimento de sentença** que reconhece obrigação de pagar quantia **certa** (multa de 10% + honorários de 10% se não pago em 15 dias).
- **Art. 200 do CC** — quando a pretensão civil se originar de fato que deva ser apurado no juízo criminal, **não corre a prescrição antes da respectiva sentença definitiva** (suspende o prazo prescricional da reparação enquanto pende o crime).

## Os dois caminhos (decidir primeiro)

```
1) JÁ HÁ sentença penal condenatória transitada em julgado?
   ├── SIM → EXECUÇÃO/CUMPRIMENTO no cível (art. 63 CPP; art. 515, VI, CPC)
   │        ├── Sentença fixou valor do art. 387, IV? → esse valor é LÍQUIDO →
   │        │   cumprimento de sentença direto (art. 523 CPC).
   │        └── Quer o EXCEDENTE (dano efetivo maior)? → LIQUIDAÇÃO por
   │            arbitramento (arts. 509-512 CPC) e depois cumprimento.
   └── NÃO (crime ainda em curso, sem trânsito, ou opção de não esperar)
            → AÇÃO CIVIL EX DELICTO AUTÔNOMA (art. 64 CPP), no cível,
              contra autor + responsável civil, independente do penal.
              (O juiz cível PODE suspender até o penal — art. 64, § único.)
```

- **Vantagem de executar o título penal (art. 63):** já vem com a **certeza do dever de indenizar** (art. 91, I, CP) — o *an debeatur* está decidido; discute-se só o *quantum*. Rapidez sobre o valor mínimo.
- **Vantagem da ação autônoma (art. 64):** **não depende** do desfecho penal; permite incluir o **responsável civil** (empregador, pais, seguradora) que não foi réu no penal; corre desde já. Risco: possível suspensão e decisões contraditórias (por isso o art. 64, § único).

## Competência, legitimidade e partes

- **Juízo competente:** o **cível** (vara cível comum; se consumidor/relação específica, o juízo respectivo). A execução do título penal e a ação ex delicto correm **no cível**, não na vara criminal.
- **Legitimidade ativa (art. 63):** o **ofendido**, seu **representante legal** ou seus **herdeiros** (habilitação do espólio/herdeiros quando a vítima faleceu — juntar certidão de óbito e prova da qualidade de herdeiro/inventário). No caso de morte da vítima pelo crime, os herdeiros/dependentes pleiteiam dano moral próprio e material (pensão, despesas).
- **Legitimidade passiva:**
  - **Execução do título penal (art. 63):** em regra **só o condenado** figurou no penal — a execução do título alcança quem foi **parte** na sentença. Contra o **responsável civil não condenado penalmente**, o caminho é a **ação autônoma (art. 64)**.
  - **Ação ex delicto (art. 64):** o **autor do fato** e o **responsável civil** (art. 932 CC — empregador por ato do empregado, pais por filhos menores etc.) e eventual **litisconsórcio**.
- **Assistência judiciária / custas:** avaliar gratuidade (Lei 1.060/50 e arts. 98-102 CPC) para a vítima hipossuficiente.

## Prescrição — o ponto que mais mata o direito da vítima

- **Regra de ouro (art. 200 CC):** enquanto o fato depender de apuração no juízo criminal, a **prescrição da pretensão reparatória não corre** antes da **sentença penal definitiva**. Ou seja, o prazo trienal (art. 206, §3º, V, CC — reparação civil) **só começa a fluir com o trânsito em julgado penal**.
- **Consequência prática:** não deixe a pretensão prescrever assumindo que o prazo civil correu durante o processo criminal — em regra **não correu** (art. 200). Mas **confirme** o marco inicial no caso concreto e a jurisprudência atual sobre o alcance do art. 200 via `jurisprudencia-stj-stf`. [NÃO VERIFICADO — conferir teses do STJ sobre termo inicial da prescrição reparatória sob o art. 200 CC.]
- **Título judicial já formado:** para o **cumprimento** do título penal, atentar também ao prazo de prescrição da **pretensão executória** (prescrição intercorrente), contado do trânsito.

## Roteiro — Execução/Cumprimento do título penal (art. 63 CPP)

1. **Confirmar o trânsito em julgado** da sentença penal condenatória (certidão de trânsito). Sem trânsito, não há título executivo (art. 515, VI, CPC).
2. **Extrair certidão da sentença/acórdão** com o dispositivo e, sobretudo, o **valor do art. 387, IV** (se fixado).
3. **Classificar o crédito:**
   - **Líquido** (valor do art. 387, IV) → **cumprimento de sentença** (art. 523 CPC): petição de cumprimento, planilha atualizada (correção + juros), intimação para pagar em 15 dias sob pena de multa de 10% e honorários de 10%.
   - **Ilíquido / excedente** (dano material comprovado, lucros cessantes, dano moral maior) → **liquidação por arbitramento** (arts. 509-510 CPC) — perícia/documentos para apurar o dano efetivo — e, fixado o *quantum*, **cumprimento**.
4. **Atualizar o valor:** correção monetária e juros de mora. Fato ilícito → juros de mora **desde o evento danoso (Súmula 54/STJ)**; correção conforme a natureza (dano moral: Súmula 362/STJ — corrige da data do arbitramento). **Conferir vigência/índices via `jurisprudencia-stj-stf`.**
5. **Habilitar herdeiros**, se a vítima faleceu: certidão de óbito, prova da condição de herdeiro (formal de partilha, escritura de inventário, ou habilitação incidental).
6. **Instruir** com a certidão de trânsito, a íntegra da sentença/acórdão, a planilha de cálculo e a procuração.

## Roteiro — Ação civil ex delicto autônoma (art. 64 CPP)

1. **Verificar cabimento:** crime ainda sem trânsito, ou opção por não aguardar, ou necessidade de acionar o **responsável civil** não réu no penal.
2. **Qualificar autor do fato e responsável civil** (art. 932 CC) — apontar o vínculo (empregador/empregado, pais/filho menor, etc.).
3. **Causa de pedir:** o fato criminoso e o dano (material, moral, estético; pensão em caso de morte/incapacidade — arts. 948-950 CC).
4. **Prova emprestada:** requerer a **juntada de cópia do inquérito/ação penal** (depoimentos, laudos, cadeia de custódia) como prova documental/emprestada.
5. **Antecipar a defesa do réu:** o réu invocará excludentes; lembrar que **legítima defesa/estado de necessidade reconhecidos no penal fazem coisa julgada no cível (art. 65 CPP)** — mas absolvição por falta de prova **não** obsta (arts. 66 e 67 CPP).
6. **Pedido de suspensão:** avaliar se convém requerer, ou resistir, à suspensão do art. 64, § único (ponderar risco de contradição × celeridade).

## Teses (do assistente de acusação / ofendido) e contra-teses (defesa)

- **Tese (ofendido) — certeza do dever de indenizar:** a condenação penal torna **certa a obrigação de indenizar** (art. 91, I, CP); no cível discute-se **apenas o valor**, não o *se* deve. **Contra-tese (defesa):** o valor do art. 387, IV, é **mínimo** e não impede rediscussão do *quantum* excedente; impugnar excesso e ausência de prova do dano material.
- **Tese (ofendido) — liquidação do excedente:** o parágrafo único do art. 63 autoriza executar o mínimo **sem prejuízo** da liquidação do dano **efetivamente sofrido** — cabe buscar o valor real, superior ao piso. **Contra-tese:** exigir prova cabal do dano efetivo e do nexo; atacar planilha/perícia.
- **Tese (ofendido) — art. 200 CC:** a prescrição reparatória **não correu** durante o crime; o prazo só flui do trânsito penal. **Contra-tese (defesa):** discutir o termo inicial e a incidência do art. 200 conforme a jurisprudência (verificar caso a caso).
- **Tese (defesa, a antecipar) — art. 65 CPP:** excludente de ilicitude reconhecida no penal **vincula** o cível e afasta a indenização. **Réplica (ofendido):** absolvição por **insuficiência de prova** (art. 386, VII, CPP) **não** faz coisa julgada no cível (arts. 66 e 67 CPP) — só a categórica **inexistência do fato** ou **negativa de autoria** obsta.
- **Tese (ofendido) — responsável civil:** incluir o responsável civil (art. 932 CC) via ação autônoma (art. 64), já que a execução do título penal (art. 63) em regra só alcança o condenado. **Contra-tese:** negar o vínculo de responsabilidade e a solidariedade.

## Súmulas e dispositivos de apoio (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 54/STJ** — juros de mora, em responsabilidade **extracontratual**, correm **desde o evento danoso**.
- **Súmula 362/STJ** — correção monetária do **dano moral** incide desde a data do **arbitramento**.
- **Súmula 246/STF** — a exigibilidade da reparação não fica condicionada; **confirmar teor e vigência antes de citar.** [NÃO VERIFICADO]
- **Art. 91, I, CP; arts. 927, 932, 942, 948-950 CC** — responsabilidade civil por ato ilícito, responsáveis, solidariedade e indenização por morte/lesão.
- Para **qualquer** número de HC/REsp/RE, tema repetitivo ou informativo, **marque como pendente e confirme** via `jurisprudencia-stj-stf`. Melhor faltar precedente do que citar julgado inexistente.

## Modelo — Cumprimento de sentença penal no cível (valor do art. 387, IV)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ___ VARA CÍVEL DA COMARCA DE
[COMARCA]


[NOME DO OFENDIDO/HERDEIRO], já qualificado, por seu advogado (procuração
anexa), vem, com fundamento no art. 63 do CPP e no art. 515, VI, c/c o art. 523
do CPC, requerer o

CUMPRIMENTO DE SENTENÇA PENAL CONDENATÓRIA

em face de [NOME DO EXECUTADO/CONDENADO], qualificado, pelas razões a seguir.


I — DO TÍTULO EXECUTIVO JUDICIAL

Por sentença transitada em julgado nos autos da Ação Penal nº [Nº], da ___ Vara
Criminal, o executado foi condenado pela prática do crime de [CRIME], tendo o
Juízo penal fixado o valor mínimo de reparação de R$ [VALOR] (art. 387, IV, do
CPP). A sentença penal condenatória transitada em julgado é título executivo
judicial (art. 515, VI, do CPC), tornando certa a obrigação de indenizar (art.
91, I, do CP). Certidão de trânsito e íntegra da sentença anexas.


II — DO VALOR LÍQUIDO E DA ATUALIZAÇÃO

O valor fixado (art. 387, IV) é líquido e certo, atualizado conforme planilha
anexa — juros de mora desde o evento danoso (Súmula 54/STJ) e correção
monetária —, perfazendo R$ [VALOR ATUALIZADO].

[Se houver excedente: sem prejuízo deste cumprimento, o exequente promoverá/
promove a LIQUIDAÇÃO por arbitramento (arts. 509-512 do CPC) do dano
efetivamente sofrido que exceder o mínimo, nos termos do art. 63, parágrafo
único, do CPP.]

[Se herdeiro: o exequente é herdeiro do ofendido falecido, conforme certidão de
óbito e [formal de partilha/escritura de inventário] anexos (art. 63 do CPP).]


III — DO PEDIDO

Requer:
a) a intimação do executado para pagar R$ [VALOR ATUALIZADO] em 15 dias, sob
   pena de multa de 10% e honorários de 10% (art. 523, §1º, do CPC);
b) não havendo pagamento, o prosseguimento com penhora e avaliação (art. 523,
   §3º, do CPC);
c) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [NOME DO OFENDIDO/HERDEIRO], [NOME DO EXECUTADO], [Nº] da ação penal, [CRIME], [VALOR], [VALOR ATUALIZADO], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Modelo — Petição inicial da ação civil ex delicto autônoma (art. 64 CPP)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ___ VARA CÍVEL DA COMARCA DE
[COMARCA]


[NOME DO OFENDIDO/ESPÓLIO], qualificado, por seu advogado (procuração anexa),
vem propor

AÇÃO DE REPARAÇÃO DE DANOS (CIVIL EX DELICTO — art. 64 do CPP)

em face de [AUTOR DO FATO] e de [RESPONSÁVEL CIVIL — art. 932 do CC],
qualificados, pelos fundamentos a seguir.


I — DOS FATOS

Em [DATA], o primeiro réu praticou contra o autor [DESCRIÇÃO DO FATO
CRIMINOSO], apurado no Inquérito/Ação Penal nº [Nº] (cópias anexas, como prova
documental/emprestada). O segundo réu responde civilmente por ser [VÍNCULO —
ex.: empregador do primeiro, art. 932, III, do CC].


II — DO DIREITO

A ação civil ex delicto pode ser proposta no cível, contra o autor do crime e o
responsável civil, independentemente da ação penal (art. 64 do CPP). O ato
ilícito gera o dever de reparar (arts. 186 e 927 do CC), com responsabilidade
[solidária, art. 942 do CC].

[Se necessário: a absolvição/inexistência de trânsito penal não obsta esta ação
(arts. 66 e 67 do CPP); apenas a excludente de ilicitude reconhecida no penal
faria coisa julgada aqui (art. 65 do CPP), o que não é o caso.]

[Prescrição: não fluiu o prazo enquanto pendente a apuração criminal (art. 200
do CC).]


III — DOS DANOS

a) Dano material: [discriminar — despesas, lucros cessantes] — R$ [VALOR].
b) Dano moral: R$ [VALOR].
[c) Pensão/dano por morte ou incapacidade — arts. 948-950 do CC, se cabível.]


IV — DO PEDIDO

Requer a citação dos réus; a condenação solidária ao pagamento de R$ [TOTAL],
com juros desde o evento danoso (Súmula 54/STJ) e correção monetária; a
produção de provas; e [gratuidade, se hipossuficiente].

Dá-se à causa o valor de R$ [VALOR DA CAUSA].

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

## Documentos a anexar

1. Procuração (e substabelecimentos, se houver).
2. **Certidão de trânsito em julgado** da sentença penal (indispensável na execução do art. 63).
3. Íntegra da sentença/acórdão penal (com o dispositivo e o valor do art. 387, IV).
4. Planilha de cálculo atualizada (correção + juros).
5. Documentos do dano (notas, laudos, comprovantes de despesa, relatórios médicos).
6. Certidão de óbito e prova da qualidade de herdeiro (se habilitação de herdeiros).
7. Cópia do inquérito/ação penal (prova emprestada, na ação ex delicto).
8. Comprovantes para gratuidade, se for o caso.

## Checklist final e anti-padrões

- [ ] Definiu o **caminho certo** — executar o título penal (art. 63) **ou** ação autônoma (art. 64)?
- [ ] Confirmou o **trânsito em julgado** e juntou a **certidão** (sem ela não há título — art. 515, VI, CPC)?
- [ ] Separou **líquido** (art. 387, IV → cumprimento direto, art. 523) do **ilíquido** (excedente → liquidação, arts. 509-512)?
- [ ] Atualizou o valor — **juros desde o evento** (Súm. 54) e correção adequada (dano moral: Súm. 362)?
- [ ] Verificou a **prescrição** à luz do **art. 200 CC** (não presumir que o prazo civil correu durante o crime)?
- [ ] Incluiu o **responsável civil** pela via correta (art. 64 + art. 932 CC), não tentando alcançá-lo na mera execução do título penal?
- [ ] Habilitou **herdeiros** com certidão de óbito e prova da condição, quando a vítima faleceu?
- [ ] Passou **toda** súmula/precedente pelo gate `jurisprudencia-stj-stf` antes de citar?

**Anti-padrões (evitar):**
- Sair da ação penal com título **ilíquido** e não promover a liquidação/execução — a vítima fica sem receber.
- Tratar o valor do art. 387, IV, como **teto** — é **piso**; o excedente se liquida (art. 63, § único).
- Executar o título penal **contra o responsável civil** que não foi réu no penal — contra ele vai a ação autônoma (art. 64).
- Presumir que a **prescrição** correu durante o processo criminal, ignorando o art. 200 do CC.
- Confundir **execução no juízo criminal** — a execução da reparação é **no cível**.
- Citar número de acórdão/tema **de memória** — sempre pelo gate de verificação.

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese a confirmar, jamais peça pronta para protocolo. A responsabilidade pela peça e pela estratégia é sempre do **advogado** (Estatuto da OAB e CED; Provimento 205/2021 na advocacia; CNMP no Ministério Público; LC 80/94 na Defensoria). **Verificação de citações inegociável:** nenhuma súmula, tese ou precedente entra na peça sem passar pela skill `jurisprudencia-stj-stf` / `verificacao-citacoes` — há sanções reais por jurisprudência inventada. Sigilo e LGPD: dados da vítima/assistido nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
