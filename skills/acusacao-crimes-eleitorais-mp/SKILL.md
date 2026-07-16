---
name: acusacao-crimes-eleitorais-mp
description: >-
  Use para redigir ou estruturar acusacao crimes eleitorais mp: POLO ACUSATÓRIO. Use quando o
  Ministério Público Eleitoral oferece denúncia por crime eleitoral ou requer diligências no
  inquérito eleitoral — individualização do dolo específico eleitoral, competência da Justiça
  Eleitoral, standard probatório e rito dos arts. 355-364 do Código Eleitoral. Rascunho para revisão
  humana; regime ético CNMP. Gatilhos: denúncia crime… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, eleitoral, acusacao, ministerio-publico]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-crimes-eleitorais-mp"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-crimes-eleitorais-mp", "acusacao crimes", "crimes eleitorais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Acusação em Crimes Eleitorais — MP Eleitoral (arts. 355-364 do Código Eleitoral)

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

> ⚖️ **SKILL DO POLO ACUSATÓRIO.** Esta metodologia foi escrita para o **Ministério Público Eleitoral** (promotor/procurador eleitoral) ou para o **assistente de acusação** habilitado. **Antes de acioná-la, o roteador/chefe deve confirmar o polo do escritório** (`_criminalsquad/_memory/company.md`): se a instituição atua em **DEFESA**, esta skill é fonte de **contra-argumentação** — mapear como a acusação constrói a imputação para atacá-la —, não peça a ser redigida. A maioria das skills criminais é de defesa; esta é a exceção acusatória, do rito eleitoral.

Esta skill orienta a **estruturação da denúncia por crime eleitoral** e o **requerimento de diligências no inquérito policial eleitoral**, perante a **Justiça Eleitoral**. O crime eleitoral tutela a **higidez do processo democrático** (liberdade do voto, veracidade do alistamento e da apuração, lisura da propaganda). O eixo técnico é sempre o mesmo: **tipicidade rigorosa** (o CE tem tipos abertos e vagos que exigem recorte fino), **dolo específico eleitoral** (a finalidade de influir na eleição) e **competência da Justiça Eleitoral**.

> **Lição central:** o erro que mais derruba denúncia eleitoral é **imputação genérica sem individualização do dolo específico**. Não basta narrar o fato (entregar dinheiro, transportar eleitor, filmar dentro da seção); é preciso **descrever a finalidade eleitoral** (obter/dar voto, influir na vontade do eleitor) e **individualizar a conduta de cada denunciado** (autoria, nexo, vínculo com a campanha). Fato atípico eleitoral pode ser mero ilícito administrativo-eleitoral (multa) ou nada — e a denúncia genérica é inepta (art. 41 CPP, aplicável subsidiariamente).

> **Cautela de vigência (obrigatória antes de citar):** o **Código Eleitoral (Lei 4.737/65)** é de 1965 e sofreu inúmeras alterações; confira a **redação vigente** de cada tipo penal e do rito (arts. 355-364) na fonte oficial. Verifique também: **Lei 9.504/97** (Lei das Eleições — tem tipos penais próprios, ex.: art. 39, §5º; art. 40; art. 68, §2º), a **LC 64/90**, resoluções do **TSE** de cada pleito, e a incidência do **Pacote Anticrime** e do **CPP** subsidiário. **Toda súmula, tema ou precedente** (TSE/STF/STJ) passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de ir para a peça. Na dúvida, **ensinar a tese e o dispositivo vence arriscar um número de acórdão**.

---

## Base legal

- **Arts. 289 a 354 do Código Eleitoral (Lei 4.737/65)** — os **tipos penais eleitorais** (parte especial). Ex.: **art. 299** (corrupção eleitoral — "dar, oferecer, prometer, solicitar ou receber" bem/vantagem para obter/dar voto); **art. 289** (inscrição fraudulenta de eleitor); **art. 350** (falsidade ideológica eleitoral); **art. 348** (falsidade documental eleitoral).
- **Arts. 355 a 364 do Código Eleitoral** — o **rito processual penal eleitoral** (denúncia, prazo, procedimento). **Art. 357** — recebido o inquérito/peças, o **MP** oferece **denúncia em 10 dias** (ou requer diligências/arquivamento). **Art. 359** — rito. **Art. 355** — conexão/continência.
- **Lei 9.504/97 (Lei das Eleições)** — tipos penais próprios de propaganda e do dia da eleição (ex.: **art. 39, §5º** — boca de urna, comício, uso de alto-falante no dia; **art. 40** — propaganda com símbolos oficiais; **art. 68, §2º**; **art. 91-A**).
- **Art. 41 e art. 395 do CPP** (subsidiários — art. 364 CE) — requisitos da denúncia e rejeição; **individualização da conduta** e **justa causa**.
- **CF, art. 121** e **arts. 78, IV, e 35 do CE / LC 64/90** — competência da **Justiça Eleitoral** para o crime eleitoral (e conexos, por atração — ver adiante).
- **Prazo prescricional:** regras do **CP (arts. 109 e ss.)**, aplicáveis subsidiariamente — a pena em abstrato do tipo eleitoral define a prescrição (usar a skill `calculadora-prescricao` para o cômputo).

---

## Estrutura da denúncia eleitoral (roteiro de redação — MP)

A denúncia eleitoral segue o CPP (art. 41), com a **camada eleitoral** exigindo dois cuidados extras: **dolo específico** e **competência**. Sequência:

1. **Endereçamento** — Juízo Eleitoral competente (zona/circunscrição) — ver seção de competência.
2. **Qualificação dos denunciados** — completa e individualizada; se vários, **separar as condutas de cada um**.
3. **Exposição do fato criminoso** (narrativa) — com todas as **circunstâncias de tempo, lugar e modo**, e — o ponto sensível — a **finalidade eleitoral** (o "para quê" da conduta). Vincular o fato ao **pleito, ao candidato/partido beneficiado** e à **cadeia causal** que liga o denunciado ao resultado eleitoral pretendido.
4. **Classificação jurídica** — o(s) tipo(s) do CE / Lei 9.504/97, com o **dispositivo exato** e, se for o caso, concurso/continuidade.
5. **Justa causa e prova da materialidade** — apontar o **lastro probatório** do inquérito (o standard eleitoral, ver adiante).
6. **Rol de testemunhas** e **requerimentos** (diligências, quebras já deferidas, provas a produzir).
7. **Pedido** — recebimento da denúncia, citação, instrução e condenação nas penas do(s) artigo(s).

> **Individualização (regra de ouro do MP eleitoral):** denúncia por crime societário/coletivo eleitoral (ex.: esquema de compra de votos com vários agentes) exige **descrever o vínculo e a conduta de cada denunciado** — não vale imputação por "cargo" ou "presença". A denúncia genérica é **inepta** e pode ser rejeitada (art. 395, I, CPP). Ao mesmo tempo, admite-se, em crime coletivo, **narrativa que descreva o liame** ainda que não detalhe minúcia impossível de cada gesto — o equilíbrio é fino e passa por `verificacao-citacoes`.

---

## Roteiro por tipo penal eleitoral (elementos que a denúncia PRECISA provar)

Para cada tipo, o MP deve fechar: **conduta nuclear + dolo específico eleitoral + resultado/competência**. A defesa ataca exatamente esses elementos — por isso o polo acusatório precisa blindá-los.

### 1) Corrupção eleitoral — art. 299 CE
- **Núcleo:** dar, oferecer, prometer, solicitar ou receber, **para si ou para outrem**, dinheiro, dádiva ou qualquer outra vantagem, **para obter ou dar voto** e para conseguir/prometer abstenção.
- **Dolo específico (imprescindível):** o **fim de obter/dar voto** ("finalidade de captação de sufrágio"). Sem essa finalidade, o fato é **atípico** como corrupção eleitoral (pode ser ilícito de outra natureza, ou nada).
- **Consumação:** o crime é **formal** — consuma-se com a oferta/promessa/solicitação, **independentemente** de o voto ser efetivamente dado.
- **Cuidado do MP:** distinguir de **captação ilícita de sufrágio (art. 41-A da Lei 9.504/97)**, que é **ilícito eleitoral cível** (ação de investigação judicial eleitoral / representação, sanção de multa e cassação), **não crime**. O mesmo fato pode gerar as duas esferas — mas a **denúncia criminal** só cabe pelo art. 299 CE, com o dolo específico penal.

### 2) Boca de urna e propaganda no dia da eleição — art. 39, §5º, Lei 9.504/97
- **Núcleo:** no **dia da eleição**, uso de alto-falante/amplificador, comício/carreata, **arregimentação de eleitor/propaganda de boca de urna**, publicação de novos conteúdos etc. (conferir os incisos vigentes).
- **Dolo:** vontade de fazer propaganda/arregimentar no dia vedado.
- **Cuidado do MP:** delimitar **tempo (o dia da eleição)** e **conduta típica** exata do inciso; manifestação individual e silenciosa de preferência **não** é boca de urna. Prova: flagrante, mídia, testemunho.

### 3) Falsidade eleitoral — arts. 348, 350 CE
- **Núcleo:** falsificar/alterar documento eleitoral (art. 348 — material) ou **inserir declaração falsa** em documento para fins eleitorais (art. 350 — ideológica).
- **Dolo específico:** **fim eleitoral** (prejudicar/alterar a verdade sobre fato juridicamente relevante para a eleição).
- **Cuidado do MP:** distinguir da falsidade **comum** (arts. 297-299 CP) — o **fim eleitoral** desloca a competência para a Justiça Eleitoral e a tipicidade para o CE.

### 4) Inscrição/alistamento fraudulento — art. 289 CE (e correlatos)
- **Núcleo:** inscrever-se fraudulentamente eleitor (ou inscrever terceiro), duplicidade, "curral eleitoral" por transferência fraudulenta de domicílio.
- **Dolo específico:** viciar o alistamento/votação.
- **Cuidado do MP:** provar a **fraude** e o **domicílio eleitoral** real; cruzar dados do TRE.

### 5) Coação/impedimento ao voto e desordem — arts. 297, 300-302 CE (conferir)
- **Núcleo:** usar violência/grave ameaça para coagir o voto; impedir/embaraçar o exercício do sufrágio; transporte/aliciamento de eleitores.
- **Dolo específico:** influir sobre a **liberdade do voto**.

> **Método comum a todos:** classifique o **verbo nuclear**, prove o **dolo específico eleitoral**, feche a **materialidade** e **fixe a competência**. Para pena, multa e prescrição, **descreva o método e aponte** a `calculadora-dosimetria` e a `calculadora-prescricao` — **não** calcule aqui.

---

## Competência da Justiça Eleitoral (blindagem da denúncia)

Ponto que anula denúncia se errado. Fixe-o na peça:

- **Regra:** compete à **Justiça Eleitoral** processar e julgar os **crimes eleitorais** (CE + Lei 9.504/97) e os **crimes comuns que lhes forem conexos** (força atrativa da Justiça Eleitoral).
- **Conexão (art. 35, II, CE / art. 78, IV, CPP):** havendo **crime comum conexo** ao eleitoral (ex.: corrupção eleitoral + lavagem, ou + crime contra a administração pública), há **atração** para a Justiça Eleitoral. **[NÃO VERIFICADO]** — o alcance dessa atração (especialmente sobre crimes comuns e o papel do STF) foi objeto de julgamento de repercussão no STF; **confira o precedente e sua modulação atual via `jurisprudencia-stj-stf` antes de afirmar competência**, pois a orientação evoluiu.
- **Foro por prerrogativa:** denunciado com foro (prefeito → TJ/TRE conforme o crime; parlamentar → STF/TRE) desloca a competência — verificar o cargo à data do fato e do oferecimento.
- **Circunscrição/zona:** fixar a zona eleitoral do lugar da consumação (regra do art. 70 CPP, subsidiário).

> **Regra prática:** antes de oferecer, o MP eleitoral checa (i) se o fato é **crime eleitoral** (tipicidade), (ii) se há **conexão** que atraia crimes comuns, (iii) **foro** dos denunciados. Erro aqui = incompetência = anulação.

---

## Standard probatório e justa causa (o que sustenta a denúncia)

- **Justa causa (art. 395, III, CPP):** lastro probatório mínimo de **materialidade + indícios de autoria** e do **dolo específico**. Em crime eleitoral, a **finalidade eleitoral** precisa aflorar do inquérito (não pode ser presumida na denúncia).
- **Fontes típicas:** representação/notícia-crime, inquérito policial eleitoral (Polícia Federal/PJE), prova emprestada de representação cível-eleitoral (AIJE), mídias (áudio/vídeo), quebras deferidas, perícia, testemunhos.
- **Cadeia de custódia (arts. 158-A a 158-F CPP):** se a prova nuclear é digital (vídeo de boca de urna, áudio de oferta de vantagem, print), **documentar a cadeia** — a defesa atacará a integridade. Ver skill `cadeia-de-custodia`.
- **Diligências no inquérito (art. 357, §§):** se faltar elemento, o MP **requer diligências** (não oferece denúncia frágil) — oitivas, perícia em mídia, dados do TRE, quebra de sigilo (com reserva de jurisdição).

---

## Teses da acusação × contra-teses da defesa (mapa de combate)

| Tese da ACUSAÇÃO (MP) | Contra-tese típica da DEFESA | Como o MP blinda |
|---|---|---|
| Dolo específico presente (finalidade de captar voto) | "Ausência de finalidade eleitoral; era favor/relação pessoal" | Narrar contexto de campanha, proximidade do pleito, contrapartida-voto explícita na prova |
| Fato é crime (art. 299 CE) | "É ilícito cível (art. 41-A Lei 9.504/97), não crime" | Demonstrar os elementos penais do 299; independência das esferas |
| Competência da Justiça Eleitoral (conexão) | "Crime comum; competência da Justiça comum/Federal" | Fundamentar a conexão e a atração **[conferir precedente STF via `jurisprudencia-stj-stf`]** |
| Autoria individualizada | "Denúncia genérica/inépcia (art. 41 CPP)" | Descrever a conduta e o liame de **cada** denunciado |
| Prova hígida (mídia/quebra) | "Prova ilícita / cadeia de custódia rompida" | Documentar autorização judicial e a cadeia (arts. 158-A ss. CPP) |
| Justa causa presente | "Atipicidade / bagatela eleitoral" | Materialidade + dolo específico bem provados; afastar insignificância no bem jurídico coletivo |

> A defesa também levantará **prescrição** (penas eleitorais costumam ser baixas → prescrição rápida) e **anistia/abolitio** por mudança legislativa. O MP deve **conferir a prescrição antes de denunciar** (`calculadora-prescricao`) — denunciar fato prescrito é desperdício e enseja rejeição.

---

## Súmulas / precedentes (sob o Citation Gate — NÃO citar de memória)

Cite com certeza **dispositivos de lei** (CE, Lei 9.504/97, CPP). Para **qualquer súmula, tema ou acórdão**, confirme número e vigência via `jurisprudencia-stj-stf` / `verificacao-citacoes`:

- **Competência da Justiça Eleitoral sobre crimes comuns conexos ao eleitoral** — há precedente de repercussão no **STF** fixando/atenuando a força atrativa. **[NÃO VERIFICADO — conferir número, tese e modulação]**.
- **Súmulas do TSE** sobre crimes eleitorais, propaganda e alistamento — **[NÃO VERIFICADO — conferir enunciado e vigência]**.
- **Independência das esferas** (crime do art. 299 CE × captação ilícita do art. 41-A Lei 9.504/97) — tese consolidada, mas **confirme o precedente** antes de citar número.
- **Necessidade de dolo específico no art. 299** — entendimento reiterado; **ensine a tese e o dispositivo**, cite acórdão só após verificação.

> **Diretriz anti-alucinação:** prefira afirmar **"o art. 299 do CE exige finalidade de obter/dar voto (dolo específico)"** (dispositivo, seguro) a arriscar **"HC nº X, Inf. Y do TSE"** sem certeza. Número errado de acórdão em peça do MP é falha grave e há **responsabilização** por citação inventada por IA.

---

## Erros comuns / checklist do MP eleitoral

- [ ] **Tipicidade eleitoral** confirmada — o fato é crime do CE/Lei 9.504, e não mero ilícito administrativo-eleitoral (multa) ou cível (AIJE)?
- [ ] **Dolo específico eleitoral** descrito na narrativa (finalidade de obter/dar voto / influir no pleito) — e não só o fato "neutro"?
- [ ] **Conduta de cada denunciado individualizada** (sem imputação genérica por cargo/presença)?
- [ ] **Competência** da Justiça Eleitoral fixada; **conexão** e **foro** checados **[precedente de conexão conferido via `jurisprudencia-stj-stf`]**?
- [ ] **Materialidade e justa causa** ancoradas em prova do inquérito (art. 395 CPP)?
- [ ] **Cadeia de custódia** da prova digital documentada (arts. 158-A ss. CPP)?
- [ ] **Prescrição** conferida **antes** de denunciar (penas eleitorais baixas → risco alto) — via `calculadora-prescricao`?
- [ ] **Prazo do art. 357** (10 dias) observado; ou **diligências** requeridas se a prova está incompleta?
- [ ] **Classificação jurídica** com dispositivo exato e concurso/continuidade, se houver?
- [ ] **Rol de testemunhas** e **requerimentos de prova** presentes?
- [ ] **Súmulas/precedentes** conferidos via `jurisprudencia-stj-stf` antes de citar?

**Anti-padrões (evitar):**
- Narrar o fato **sem** a finalidade eleitoral (denúncia atípica ou frágil).
- **Imputação genérica** em esquema coletivo (inépcia — art. 41 CPP).
- Confundir **crime (art. 299 CE)** com **ilícito cível (art. 41-A Lei 9.504/97)** ou com **infração administrativa** (só multa).
- Afirmar competência da Justiça Eleitoral sobre conexos **sem conferir o precedente atual** do STF.
- Oferecer denúncia com fato **prescrito** ou com prova de **cadeia de custódia** rompida.
- Citar **súmula/acórdão de memória** — passar tudo pelo gate.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Esta metodologia é apoio à elaboração; a denúncia, os requerimentos e a decisão de oferecer/arquivar são **atos privativos do membro do Ministério Público**, sob sua responsabilidade e independência funcional.
- **Regime ético do polo acusatório:** atuação regida pela **Constituição, LC 75/93 / Lei 8.625/93 e resoluções do CNMP** — **não** pelo Estatuto da OAB (esta é skill de MP/assistente de acusação, não de advocacia). O **assistente de acusação** (advogado habilitado) observa, além disso, o **CED/OAB**.
- **Independência das esferas e proporcionalidade:** o MP eleitoral persegue a lisura do pleito com **legalidade** e **objetividade** — denunciar só com **justa causa**, requerendo diligências ou **arquivamento** quando o lastro não a suporta.
- **Citation Gate + verificação:** nenhuma súmula/tema/precedente entra na peça sem passar por `verificacao-citacoes` / `jurisprudencia-stj-stf`; cálculos de pena/prescrição pelas calculadoras dedicadas.

**Padrão de redação:** ao redigir a denúncia, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso (aqui, a **tese acusatória**), narrativa dos fatos com individualização, subsunção explícita ao tipo eleitoral e coesão. Confirme o **polo do escritório** antes de produzir qualquer peça a partir desta skill.
