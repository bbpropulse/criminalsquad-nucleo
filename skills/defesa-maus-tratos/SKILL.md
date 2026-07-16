---
name: defesa-maus-tratos
description: >-
  Use ao defender acusado de MAUS-TRATOS (CP, art. 136) — atipicidade por ausência da relação de
  guarda/vigilância/autoridade, ausência do elemento normativo do fim (educação, ensino, tratamento,
  custódia), ausência do dolo de expor a perigo, e a fronteira com lesão corporal (art. 129) e
  tortura (Lei 9.455/97) para desclassificar conforme o dolo. Gatilhos: maus-tratos, art. 136 CP,
  relação de guarda e vigilância, fim de… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-maus-tratos"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-maus-tratos", "defesa maus", "maus tratos"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Maus-Tratos (CP, art. 136)

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

Esta skill orienta a **defesa técnica** do acusado de **maus-tratos** (CP, art. 136): o crime de quem, tendo alguém **sob sua autoridade, guarda ou vigilância** para fim de **educação, ensino, tratamento ou custódia**, **expõe a perigo a vida ou a saúde** dessa pessoa, seja privando-a de alimentação ou cuidados indispensáveis, seja sujeitando-a a trabalho excessivo ou inadequado, seja abusando de meios de correção ou disciplina. É crime **de perigo** (não de dano) e **próprio** (só pode ser cometido por quem detém aquela relação de autoridade).

> **Lição central:** o núcleo da defesa está em **três filtros de tipicidade que precedem qualquer mérito** — (1) existe, de fato, a **relação de guarda/vigilância/autoridade** com o **fim específico** exigido pela lei? (2) houve **exposição a perigo** da vida ou saúde, ou apenas dano já consumado / conduta atípica? (3) o **dolo** era de expor a perigo com abuso do poder-dever de correção — ou era dolo de **lesionar** (art. 129) ou de **infligir sofrimento** por sadismo/castigo desmedido (tortura, Lei 9.455/97)? A classificação correta do dolo é o que separa absolvição, maus-tratos, lesão e tortura.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 136 do CP** e de seus parágrafos, bem como da **Lei 9.455/97** (tortura), do **ECA** (Lei 8.069/90) e da **Lei Henry Borel (Lei 14.344/2022)**, que ampliou a proteção de crianças e adolescentes e pode incidir sobre a dosimetria e o procedimento. Súmulas, temas e overruling (STJ/STF) sobre a fronteira maus-tratos × tortura × lesão devem ser conferidos via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nenhum precedente entra na peça sem passar pelo gate de `verificacao-citacoes`.

---

## Base legal

- **Art. 136, *caput*, CP** — tipo básico: expor a perigo a vida ou a saúde de pessoa sob autoridade, guarda ou vigilância, para fim de educação, ensino, tratamento ou custódia, por privação, trabalho excessivo/inadequado ou abuso de meios de correção/disciplina. Pena de detenção.
- **Art. 136, §1º, CP** — figura **qualificada pelo resultado lesão grave** (crime preterdoloso: dolo de perigo + culpa quanto ao resultado agravador).
- **Art. 136, §2º, CP** — figura **qualificada pelo resultado morte**.
- **Art. 136, §3º, CP** — **causa de aumento** quando o crime é praticado contra **menor de 14 anos**.
- **Art. 129, CP** — **lesão corporal** (fronteira: crime de dano, dolo de ofender a integridade).
- **Lei 9.455/97, art. 1º, II** — **tortura-castigo**: submeter pessoa sob guarda/poder/autoridade, com emprego de violência ou grave ameaça, a intenso sofrimento físico ou mental, **como forma de aplicar castigo pessoal ou medida de caráter preventivo** (fronteira gravosa).
- **ECA (Lei 8.069/90), arts. 5º, 13, 18-A, 18-B, 232** — direitos da criança/adolescente, vedação de castigo físico e tratamento cruel/degradante, e tipo próprio de submissão de criança sob autoridade a vexame/constrangimento.
- **Lei 14.344/2022 (Lei Henry Borel)** — proteção reforçada de crianças e adolescentes vítimas de violência doméstica e familiar; conferir incidência sobre medidas protetivas, procedimento e eventual majoração.

---

## Anatomia do tipo (art. 136) — os elementos que a defesa ataca

O tipo do art. 136 é **composto de elementos cumulativos**. A ausência de **qualquer um** deles conduz à **atipicidade** (ou à desclassificação). Trabalhe-os em ordem:

1. **Sujeito ativo próprio** — só comete quem tem a pessoa **sob autoridade, guarda ou vigilância** (pai, mãe, tutor, professor, empregador com dever de custódia, enfermeiro, diretor de estabelecimento etc.). Terceiro sem essa relação não pratica maus-tratos — pode responder por outro crime, mas não por este.
2. **Fim específico (elemento normativo)** — a relação deve existir **para fim de educação, ensino, tratamento ou custódia**. É o **elemento normativo do tipo**: sem essa finalidade legítima subjacente, o abuso não é "maus-tratos" no sentido do art. 136 (pode ser lesão, tortura, ou fato atípico).
3. **Conduta típica (uma das três modalidades)** — (a) **privação** de alimentação ou de cuidados indispensáveis; (b) sujeição a **trabalho excessivo ou inadequado**; (c) **abuso de meios de correção ou disciplina**.
4. **Resultado de perigo** — a conduta deve **expor a perigo a vida ou a saúde** da vítima. É crime de **perigo concreto** (a corrente majoritária exige demonstração do perigo real; confirmar a orientação adotada no tribunal). Sem perigo à vida/saúde, não há o tipo.
5. **Elemento subjetivo (dolo de perigo)** — vontade de expor a perigo no exercício abusivo do poder-dever, **sem** o *animus* de ferir (que levaria ao art. 129) e **sem** a intenção de infligir intenso sofrimento como castigo (que levaria à tortura). A finalidade **corretiva/educativa desvirtuada** é o traço típico do art. 136.

> **Chave de leitura defensiva:** maus-tratos é o **abuso do poder de corrigir**, não a vontade de destruir. Quanto mais o quadro probatório apontar sadismo, sofrimento intenso e violência gratuita, mais ele **sai** do art. 136 — mas nesse ponto o risco migra para a **tortura** (mais grave), o que exige estratégia dupla: negar o dolo de tortura **e**, subsidiariamente, sustentar o enquadramento mais brando.

---

## Roteiro de teses defensivas (por eixo de ataque)

### Eixo 1 — Atipicidade por ausência da relação de guarda/vigilância/autoridade
- Demonstrar que o acusado **não detinha** a pessoa sob sua autoridade, guarda ou vigilância no momento do fato, ou que a relação **não tinha o fim** legalmente exigido (educação/ensino/tratamento/custódia).
- Efeito: **atipicidade** quanto ao art. 136. Eventual conduta remanescente será analisada por outro tipo (ex.: art. 129), com pena e regime distintos.

### Eixo 2 — Ausência do elemento normativo do fim (correção legítima desvirtuada)
- O art. 136 pune o **excesso/abuso** no exercício de um poder que, em si, é legítimo. Se **não havia** um contexto de educação/correção — mas pura agressão —, o fato **não é maus-tratos**; e se **havia correção proporcional e comedida**, não há crime algum.
- Discutir os limites do (extinto) "poder de castigo": a **Lei 13.010/2014 (Lei Menino Bernardo)** vedou o castigo físico como método de correção. Isso **não converte automaticamente** todo excesso em maus-tratos: é preciso o **perigo à vida/saúde** e o **dolo** correspondentes.

### Eixo 3 — Ausência do resultado de perigo (crime de perigo concreto)
- Sustentar que a conduta, embora reprovável, **não expôs a perigo concreto** a vida ou a saúde da vítima (ex.: episódio isolado, sem dano, sem risco demonstrado). Falta o **resultado típico**.
- Atacar laudos que **presumem** o perigo sem demonstrá-lo (perigo abstrato onde a doutrina majoritária exige concreto — **confirmar a corrente adotada** no tribunal via `jurisprudencia-stj-stf`).

### Eixo 4 — Ausência de dolo / erro
- **Ausência do dolo de perigo:** negligência sem consciência do risco pode configurar, no máximo, ilícito culposo de outro tipo — mas o art. 136 exige **dolo** (de perigo). Não há maus-tratos culposos.
- **Erro de tipo / erro de proibição:** discutir a representação do agente sobre o caráter e os limites da correção (raro, mas cabível em contextos culturais/assistenciais específicos).

### Eixo 5 — Desclassificação para lesão corporal (art. 129)
- Quando **houve dano efetivo** e o **dolo era de ferir** (não de "corrigir com perigo"), o enquadramento correto é **lesão corporal** (art. 129), não maus-tratos. A depender das lesões, a lesão pode ser **mais branda** (lesão leve, ação penal condicionada em regra geral) ou não — **avaliar caso a caso** qual capitulação é mais favorável ao réu.
- **Cuidado:** desclassificar de maus-tratos (perigo) para lesão (dano) pode **piorar** a situação se a lesão for grave/gravíssima. Rodar a `calculadora-dosimetria` para comparar penas antes de escolher a tese.

### Eixo 6 — Desclassificação (defensiva) da tortura para maus-tratos
- Quando a acusação é de **tortura-castigo** (Lei 9.455/97, art. 1º, II) — crime muito mais grave (reclusão, hediondo por equiparação, regime mais severo) —, a defesa sustenta que **faltou o "intenso sofrimento"** e/ou o **especial fim de castigar/prevenir** por meio de violência/grave ameaça, remanescendo, quando muito, o **abuso do poder corretivo do art. 136** (mais brando).
- **Tese-chave:** a diferença entre tortura-castigo e maus-tratos está na **intensidade do sofrimento** e na **finalidade** — o art. 136 pune o **abuso do poder de corrigir** que expõe a perigo; a tortura pune a **imposição deliberada de sofrimento intenso** como castigo. Explorar a ausência de gravidade/sistematicidade para puxar o enquadramento para baixo.
- **Contra-tese (acusação):** habitualidade, meios cruéis, sofrimento prolongado e finalidade punitiva sádica sustentam a tortura. A defesa deve neutralizar cada indicador.

### Eixo 7 — Ataque às qualificadoras pelo resultado (§§1º e 2º)
- As figuras dos §§1º (lesão grave) e 2º (morte) são **preterdolosas**: exigem **dolo de perigo no antecedente + culpa no resultado agravador**. Se o resultado **não decorreu** da conduta (rompimento do nexo causal) ou se o resultado foi **doloso** (aí seria outro crime, ex.: homicídio/lesão dolosa), a qualificadora do art. 136 **não se aplica** como tal.
- Atacar o **nexo de imputação objetiva** do resultado agravador; exigir prova pericial do liame causal.

### Eixo 8 — Prova frágil / cadeia de custódia
- Maus-tratos frequentemente se apoiam em **palavra da vítima (criança), laudos e prova indireta**. A defesa fiscaliza: (i) a **higidez do laudo** e a demonstração do perigo; (ii) a **cadeia de custódia** de exames e imagens (skill `cadeia-custodia`); (iii) a **prova da autoria** e do dolo; (iv) contradições e o contexto (rodar `analise-prova-*` e `leitura-autos-imagens` quando houver material fotográfico/médico nos autos).

---

## Quadro-síntese: as três fronteiras (memorizar)

| Critério | Maus-tratos (art. 136) | Lesão corporal (art. 129) | Tortura-castigo (Lei 9.455/97, I, II) |
|---|---|---|---|
| **Natureza** | Perigo (à vida/saúde) | Dano (à integridade) | Dano + sofrimento intenso |
| **Dolo** | De expor a perigo, no abuso do poder de corrigir | De ofender a integridade | De impor intenso sofrimento como castigo |
| **Relação de autoridade** | Exigida (crime próprio) | Não exigida | Exigida (guarda/poder/autoridade) |
| **Fim/motivação** | Educação/ensino/tratamento/custódia desvirtuados | Irrelevante | Aplicar castigo / medida preventiva |
| **Gravidade da pena** | Menor (detenção) | Média (varia com a lesão) | Maior (reclusão; equiparado a hediondo) |

> **Uso estratégico:** a defesa escolhe **para qual lado da tabela puxar** conforme o que é mais favorável — em regra, **para a esquerda** (maus-tratos é mais brando que tortura; e, frente a uma imputação de tortura, defender maus-tratos é *downgrade*). Diante de imputação de **lesão grave/gravíssima**, porém, maus-tratos pode ser melhor **ou** pior conforme o §1º — **sempre comparar penas na `calculadora-dosimetria`.**

---

## Dosimetria e prescrição (método — apontar para calculadoras)

Não calcule pena "de cabeça" nem cite prazo de prescrição de memória. O método:

1. **Capitulação-alvo definida** (art. 136 *caput*, §1º, §2º, §3º; ou o tipo da desclassificação), rode a **`calculadora-dosimetria`** para as três fases (art. 68 CP) — atenção às **atenuantes** (ex.: relação familiar, primariedade) e à **causa de aumento do §3º** (vítima menor de 14 anos) e a eventuais majorantes do ECA / Lei 14.344/2022.
2. **Comparação de teses:** para decidir entre maus-tratos e a desclassificação (lesão/tortura), simule a pena de **cada** capitulação e escolha a **mais favorável ao réu** — a tese jurídica deve servir ao resultado prático.
3. **Prescrição:** definida a pena-base/pena máxima em abstrato da capitulação, rode a **`calculadora-prescricao`** (PPP e PPE, marcos interruptivos do art. 117 CP, redução do art. 115 para menor de 21/maior de 70). A pena de detenção do *caput* prescreve em prazo bem menor que a reclusão da tortura — **verificar sempre a prescrição antes de qualquer outra tese**, pois pode extinguir a punibilidade.
4. **Suspensão condicional do processo (art. 89, Lei 9.099/95)** e **ANPP (art. 28-A, CPP):** verificar cabimento conforme a pena mínima da capitulação (o *caput* do art. 136 comporta análise; as qualificadas e a tortura, não). Consultar as skills `anpp-*` / `sursis-processual` quando disponíveis.

---

## Súmulas, precedentes e teses (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer** número de HC/REsp/RE, informativo ou tema de repercussão geral entra na peça **somente** após conferência via `jurisprudencia-stj-stf` e `verificacao-citacoes`. Na dúvida, **ensine a tese e cite o dispositivo** — não arrisque o número do acórdão.

- **Fronteira maus-tratos × tortura-castigo:** existe jurisprudência consolidada do STJ/STF distinguindo os tipos pela **intensidade do sofrimento** e pela **finalidade** — mas os **números específicos** de julgados devem ser buscados e conferidos. `[NÃO VERIFICADO]` — confirmar precedente atual via `jurisprudencia-stj-stf` antes de citar.
- **Exigência de perigo concreto (art. 136):** a doutrina majoritária classifica o crime como de **perigo concreto** (exige demonstração do risco real). Há posições que admitem perigo abstrato em certas modalidades. `[NÃO VERIFICADO]` — confirmar a corrente adotada no tribunal de atuação.
- **Competência e Lei Maria da Penha / Lei Henry Borel:** quando a vítima é mulher em contexto doméstico, ou criança/adolescente, atentar para competência de vara especializada e medidas protetivas. `[NÃO VERIFICADO]` — conferir aplicabilidade concreta.
- **Súmulas notórias correlatas** (ex.: sobre desclassificação e emendatio/mutatio libelli — arts. 383 e 384 do CPP): citar o **dispositivo** com segurança; qualquer súmula específica sobre o tema passa pelo gate.

**Diretriz anti-alucinação:** se você não tem certeza absoluta do número/teor de um precedente, **não o invente** — descreva a tese, ancore no dispositivo legal e sinalize `[NÃO VERIFICADO] — conferir via jurisprudencia-stj-stf`.

---

## Estrutura da peça de defesa (resposta à acusação / alegações finais / apelação)

Adaptar à fase processual. Esqueleto argumentativo (a redação persuasiva final é da skill `redacao-persuasiva-criminal`):

1. **Síntese da imputação e da teoria do caso da defesa** — em uma linha, o que se sustenta (atipicidade? desclassificação? insuficiência de prova?).
2. **Prescrição** (se cabível) — arguir de imediato; extingue a punibilidade.
3. **Preliminares/nulidades próprias** — cadeia de custódia dos laudos, provas ilícitas, inépcia da denúncia (ausência de descrição da relação de guarda ou do perigo).
4. **Mérito — filtros de tipicidade na ordem:** (a) relação de guarda/fim; (b) conduta típica; (c) perigo concreto; (d) dolo.
5. **Teses subsidiárias de desclassificação** (para lesão ou, contra imputação de tortura, para maus-tratos) — **cumulação eventual** (pede-se A; não acolhido, B).
6. **Ataque às qualificadoras** (§§1º e 2º) e à causa de aumento (§3º), se imputadas.
7. **Dosimetria** — se houver condenação, pleitear pena mínima, atenuantes, regime e substituição (arts. 44 e 77 CP).
8. **Pedidos** — absolvição (art. 386, CPP, apontando o inciso), subsidiariamente desclassificação, subsidiariamente pena mínima/benefícios.

> **Nota sobre desclassificação (arts. 383/384 CPP):** a *emendatio libelli* (art. 383) permite ao juiz atribuir definição jurídica diversa sem alterar os fatos; a *mutatio libelli* (art. 384) exige aditamento quando surge elemento novo. A defesa deve **prever** para qual tipo o juízo pode desclassificar e **preparar** a dosimetria comparativa.

---

## Erros comuns e checklist da defesa

**Anti-padrões (evitar):**
- Tratar maus-tratos como sinônimo de "qualquer agressão a criança" — sem a **relação de guarda + fim** e sem o **perigo**, o tipo **não** se configura.
- Confundir **perigo** (art. 136) com **dano** (art. 129) — são naturezas distintas; o dolo mira coisas diferentes.
- Pedir desclassificação de maus-tratos para lesão **grave/gravíssima** sem comparar penas — pode **piorar** a situação do réu.
- Deixar de arguir **prescrição** logo de início (a detenção do *caput* prescreve rápido).
- Aceitar a imputação de **tortura** sem disputar a **intensidade do sofrimento** e a **finalidade** — a diferença de pena é enorme.
- Citar precedente "de cabeça" sobre a fronteira maus-tratos × tortura — **sempre** passar pelo gate.
- Ignorar as **qualificadoras preterdolosas** (§§1º e 2º): não impugnar o **nexo causal** do resultado agravador.
- Esquecer da **causa de aumento do §3º** (vítima menor de 14) e das majorações do ECA/Lei 14.344/2022 na dosimetria.

**Checklist:**
- [ ] Existe, no caso, a **relação de guarda/vigilância/autoridade** com o **fim** legal (educação/ensino/tratamento/custódia)?
- [ ] A conduta se enquadra em uma das **três modalidades** (privação; trabalho excessivo/inadequado; abuso de correção)?
- [ ] Há prova do **perigo concreto** à vida ou à saúde (ou o laudo apenas presume)?
- [ ] O **dolo** provado é de **perigo** (136), de **ferir** (129) ou de **infligir sofrimento como castigo** (tortura)? Qual capitulação é mais favorável?
- [ ] **Prescrição** verificada na `calculadora-prescricao` (PPP/PPE, art. 117, redução do art. 115)?
- [ ] Penas das capitulações **comparadas** na `calculadora-dosimetria` antes de escolher a tese?
- [ ] **Qualificadoras (§§1º/2º)** e **aumento (§3º)** impugnados quanto ao nexo/incidência?
- [ ] Cabimento de **ANPP / suspensão condicional do processo** avaliado para a capitulação-alvo?
- [ ] **Cadeia de custódia** dos laudos e imagens conferida (`cadeia-custodia`)?
- [ ] Toda súmula/precedente/tese **conferida** via `jurisprudencia-stj-stf` e `verificacao-citacoes`?
- [ ] Peça submetida à **revisão humana** do advogado responsável antes de protocolar?

---

## Skills relacionadas

- **`defesa-lesao-corporal`** — para o eixo de desclassificação ao art. 129 (dano).
- **`defesa-crime-tortura`** — a fronteira gravosa; usar em conjunto quando a imputação for de tortura-castigo.
- **`defesa-crimes-perigo-pessoa`** — arts. 130-135 (grupo de crimes de perigo à pessoa), lógica de perigo próxima.
- **`calculadora-dosimetria`** e **`calculadora-prescricao`** — cálculos determinísticos (não fazer "de cabeça").
- **`jurisprudencia-stj-stf`** e **`verificacao-citacoes`** — Citation Gate obrigatório.
- **`redacao-persuasiva-criminal`** — teoria do caso, narrativa, subsunção e persuasão (a régua de obra-prima que a revisão cobra).
- **`cadeia-custodia`**, **`analise-prova-*`**, **`leitura-autos-imagens`** — quando houver laudos, exames e material fotográfico.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado** (CED, art. 2º; EAOAB). Nada se protocola sem revisão final humana.
- **Polo:** esta skill é do **polo de DEFESA** (advocacia/Defensoria). Se o caso concreto for de atuação **acusatória** (MP/assistente de acusação), o roteador deve **conferir o polo** no `company.md` e acionar a skill correspondente de acusação — os pedidos e o ônus argumentativo se invertem.
- **Ética por polo:** advocacia (OAB + Provimento 205/2021 para publicidade); Ministério Público (CNMP); Defensoria (LC 80/94). Conflito de interesses (art. 17, EAOAB) checado na triagem.
- **Citation Gate:** nenhuma jurisprudência de memória. Súmulas notórias e dispositivos de lei com certeza; qualquer precedente específico só após `jurisprudencia-stj-stf` + `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA.
- **Sigilo e LGPD:** dados do assistido/vítima nunca em repositório público; casos concretos em diretório sigiloso.
