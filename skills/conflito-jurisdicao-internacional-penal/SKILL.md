---
name: conflito-jurisdicao-internacional-penal
description: >-
  Use para analisar competência penal transnacional e opor teses de (in)competência da jurisdição
  brasileira ou estrangeira — extraterritorialidade (art. 7º CP), ne bis in idem internacional e
  escolha do foro em crime plurilocal/transnacional (teoria da ubiquidade, art. 6º CP). Gatilhos:
  extraterritorialidade da lei penal, art. 7º CP, crime cometido no exterior, ne bis in idem
  internacional, dupla persecução em países… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, competencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-conflito-jurisdicao-internacional-penal"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["conflito-jurisdicao-internacional-penal", "conflito jurisdicao", "internacional penal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Conflito de Jurisdição Penal Internacional e Extraterritorialidade (arts. 5º a 8º do CP)

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

Esta skill orienta a **análise da competência penal transnacional** e a construção de teses de **(in)competência da jurisdição brasileira** — ou de reconhecimento da jurisdição estrangeira — quando o crime toca mais de um país. É a base conceitual que sustenta toda a cooperação jurídica internacional penal: define *onde* o fato pode ser julgado, *sob qual lei*, e *até que ponto* uma persecução no exterior impede ou desconta a persecução no Brasil.

> **Lição central:** competência internacional se resolve em **duas perguntas encadeadas**. Primeiro: **onde se considera praticado o crime?** (art. 6º CP — teoria da **ubiquidade**: lugar da ação/omissão *ou* do resultado). Segundo: **a lei brasileira alcança esse fato?** (art. 5º = territorialidade; art. 7º = extraterritorialidade). Só depois se discute *ne bis in idem* internacional e detração da pena cumprida fora. Pular a primeira pergunta e ir direto ao art. 7º é o erro mais comum.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 5º a 8º do CP** e o rol de tratados aplicáveis ao caso (extradição, transferência de pessoas condenadas, Convenção de Palermo, Convenção de Mérida, Estatuto de Roma/TPI). Confira também súmulas, temas e eventual *overruling* via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nenhum precedente entra na peça sem passar pelo gate `verificacao-citacoes`.

---

## Base legal

- **Art. 5º, CP** — **territorialidade** (temperada): aplica-se a lei brasileira ao crime cometido no território nacional, sem prejuízo de convenções/tratados. Inclui território por extensão (§§1º e 2º: embarcações e aeronaves públicas brasileiras onde estiverem; e as privadas em alto-mar/espaço aéreo correspondente).
- **Art. 6º, CP** — **lugar do crime (teoria da ubiquidade)**: considera-se praticado o crime no lugar da **ação/omissão**, no todo ou em parte, **bem como onde se produziu ou deveria produzir-se o resultado**. É a chave dos crimes **à distância** e **plurilocais**.
- **Art. 7º, CP** — **extraterritorialidade**:
  - **Inciso I (incondicionada)** — sujeitam-se à lei brasileira, ainda que absolvidos/condenados no estrangeiro: crimes contra a vida/liberdade do Presidente; contra patrimônio/fé pública da União, DF, Estados, Municípios, empresas públicas etc.; contra a administração pública por quem está a seu serviço; **genocídio** (agente brasileiro/domiciliado no Brasil).
  - **Inciso II (condicionada)** — crimes que, por tratado, o Brasil se obrigou a reprimir; praticados por brasileiro; praticados em aeronaves/embarcações brasileiras mercantes/privadas em território estrangeiro e ali não julgados.
  - **§2º (condições cumulativas do inciso II)** — (a) entrar o agente no território nacional; (b) ser o fato punível também no país em que praticado (**dupla incriminação**); (c) estar o crime entre os que a lei brasileira autoriza a extradição; (d) **não ter sido o agente absolvido** no estrangeiro ou não ter ali cumprido a pena; (e) não ter sido perdoado/estar extinta a punibilidade pela lei mais favorável.
  - **§3º (extraterritorialidade hipercondicionada)** — crime cometido por estrangeiro **contra brasileiro** fora do Brasil: além das condições do §2º, exige não pedido/negado de extradição e requisição do Ministro da Justiça.
- **Art. 8º, CP** — **detração internacional**: a pena cumprida no estrangeiro **atenua** a pena imposta no Brasil pelo mesmo crime, quando **diversas**, ou nela é **computada**, quando **idênticas**. É a tradução legal do princípio *ne bis in idem* no plano da pena.
- **Art. 88 e ss., CPP** — foro interno para crimes praticados fora do território nacional (competência da Justiça do **Distrito Federal** / capital do último domicílio, subsidiariamente Capital da República) — confira a regra aplicável ao caso.
- **CF, art. 5º, LII e §4º; art. 105, I, "i"** — vedações e competências de cooperação (extradição, homologação de sentença estrangeira, exequatur de cartas rogatórias).

> **Territorialidade temperada.** O art. 5º já ressalva "convenções, tratados e regras de direito internacional". Imunidades diplomáticas (Convenção de Viena de 1961) e jurisdicionais são **defesa de competência** legítima — não são "privilégio", são **limite de jurisdição** fixado por tratado.

---

## Roteiro de análise — a árvore da competência internacional

Trabalhe **sempre nesta ordem**. Cada nó é uma tese potencial (de defesa ou de arguição de incompetência).

```
1) LUGAR DO CRIME (art. 6º — ubiquidade)
   Onde ocorreu a conduta? Onde ocorreu (ou deveria ocorrer) o resultado?
   ├── Conduta OU resultado no Brasil → crime "praticado no Brasil"
   │       → TERRITORIALIDADE (art. 5º): lei brasileira aplica-se em regra.
   └── Conduta E resultado inteiramente no exterior
           → passar ao nó 2 (extraterritorialidade).

2) EXTRATERRITORIALIDADE (art. 7º)
   ├── Hipótese do inciso I? → INCONDICIONADA (aplica-se mesmo se já julgado fora)
   │       ⚠️ atenção ao art. 8º (detração) mesmo aqui.
   └── Hipótese do inciso II ou §3º? → CONDICIONADA / HIPERCONDICIONADA
           → verificar TODAS as condições do §2º (e §3º):
             entrada no território · dupla incriminação · extraditabilidade ·
             não absolvido/não cumpriu pena fora · punibilidade não extinta.
           Falha em UMA condição → NÃO incide a lei brasileira (tese de
           extinção/trancamento por falta de condição de procedibilidade).

3) NE BIS IN IDEM INTERNACIONAL
   Houve persecução (condenação/absolvição/pena cumprida) no exterior pelo
   MESMO fato?
   ├── Extraterritorialidade CONDICIONADA (art. 7º, II) → a persecução exaurida
   │   no exterior é CONDIÇÃO NEGATIVA (§2º, "d"/"e"): impede a ação no Brasil.
   └── Extraterritorialidade INCONDICIONADA (art. 7º, I) → a ação prossegue,
       MAS aplica-se a DETRAÇÃO do art. 8º (computar/atenuar a pena cumprida fora).

4) FORO INTERNO (se a lei brasileira incide)
   Qual juízo brasileiro é competente? (art. 88 CPP e regras conexas;
   Justiça Federal se houver interesse da União/tratado — CF art. 109, IV/V/V-A).
```

---

## As três teses centrais (e suas contra-teses)

### 1. Teoria da ubiquidade e o crime à distância (art. 6º)

- **Tese (fixar competência brasileira / afastá-la):** em crime plurilocal ou à distância, **basta** que a conduta *ou* o resultado tenha tocado o território nacional para que o crime se considere praticado no Brasil (art. 6º). Ex.: fraude/estelionato transnacional cujo prejuízo se produz em conta no Brasil; ameaça enviada do exterior recebida aqui.
- **Uso defensivo (afastar jurisdição brasileira):** demonstrar que **nem a conduta nem o resultado** se realizaram (ou deveriam realizar-se) no território nacional — apenas atos preparatórios ou meros efeitos reflexos, que **não** são "resultado" no sentido do art. 6º.
- **Contra-tese (acusação):** o resultado jurídico/consumação alcançou o Brasil; a parcela da conduta praticada aqui (ainda que fragmentária) atrai a jurisdição.
- **Cuidado — crimes digitais:** localização de servidor, IP, nuvem e sede da plataforma **não** definem sozinhos o lugar do crime; o que importa é onde se deu a conduta relevante e o resultado típico. **Confira a jurisprudência atual sobre lugar do crime em ambiente digital** via `jurisprudencia-stj-stf` [NÃO VERIFICADO].

### 2. Condições de procedibilidade da extraterritorialidade (art. 7º, II e §2º)

- **Tese defensiva (forte):** na extraterritorialidade **condicionada**, as condições do §2º são **cumulativas e de procedibilidade**. Ausente **qualquer uma** — falta de dupla incriminação, agente não ingressou no território nacional, crime não extraditável, agente já absolvido/cumpriu pena no exterior, punibilidade extinta pela lei mais favorável — a lei brasileira **não incide** e a ação penal é **inviável** (trancamento por falta de condição da ação / HC).
- **Ponto sensível — dupla incriminação:** o fato deve ser punível **também** no país onde praticado. Exigir prova concreta de que a conduta é típica lá (não bastam alegações genéricas do órgão acusador).
- **Contra-tese (acusação):** hipótese do **inciso I** (incondicionada), que dispensa as condições do §2º; ou preenchimento de todas as condições, documentado.
- **Distinção crucial:** só se aplica ao inciso **II** e ao **§3º**. O inciso **I** independe das condições (mas atenção ao art. 8º/detração).

### 3. Ne bis in idem internacional e detração (arts. 7º, §2º, "d"/"e", e 8º)

- **Tese defensiva:** ninguém deve sofrer **dupla persecução/dupla punição** pelo mesmo fato em jurisdições diversas. Na extraterritorialidade condicionada, a absolvição, o cumprimento de pena ou a extinção da punibilidade no exterior **obstam** a persecução no Brasil (§2º, "d" e "e"). Na incondicionada, se a ação prossegue, **impõe-se** a detração do art. 8º: pena idêntica → **computa-se** integralmente; pena diversa → **atenua-se**.
- **Fundamento supralegal:** o *ne bis in idem* é reconhecido em tratados de direitos humanos (ex.: Pacto de São José da Costa Rica; Pacto Internacional sobre Direitos Civis e Políticos). Sustentar sua incidência como norma de bloqueio e de individualização da pena. **Confira o dispositivo convencional exato** antes de citar número de artigo [NÃO VERIFICADO].
- **Contra-tese (acusação):** *ne bis in idem* internacional **não é absoluto** no direito brasileiro fora das hipóteses legais — o art. 7º, I, autoriza expressamente novo julgamento "ainda que absolvido ou condenado no estrangeiro". A resposta defensiva a isso é **reconduzir a discussão ao art. 8º** (detração obrigatória), não à extinção.
- **Litispendência internacional:** processo **em curso** no exterior, por si só, em regra **não** gera litispendência que tranque o feito brasileiro (litispendência é instituto de direito interno). O bloqueio vem do **exaurimento** (absolvição/pena cumprida), não da mera pendência. Trabalhar a suspensão/coordenação por via de cooperação, não por litispendência automática.

---

## Institutos de cooperação que se apoiam nesta base

Esta skill é **conceitual**; a execução prática migra para as skills próprias (confirme a existência e o nome exato no `skills/_index.yaml`):

- **Extradição** — as teses de dupla incriminação, extraditabilidade e *ne bis in idem* aqui sistematizadas são **óbices pontuais** manejados na `defesa-extradicao`.
- **Homologação de sentença penal estrangeira** — efeitos civis/executórios da sentença estrangeira (competência do STJ; ver `jurisprudencia-stj-stf` para requisitos).
- **Transferência de pessoas condenadas / execução no país de origem** — cumprimento da pena no Estado de nacionalidade.
- **Carta rogatória e auxílio direto (MLAT / Convenções de Palermo e Mérida)** — obtenção de prova no exterior; a **cadeia de custódia transnacional** e a legalidade da prova produzida fora do Brasil são pontos de defesa (ver skill de cadeia de custódia/provas).
- **Tribunal Penal Internacional (Estatuto de Roma, CF art. 5º, §4º)** — complementaridade: o TPI só atua quando o Estado é incapaz/omisso. Relevante em genocídio, crimes contra a humanidade e de guerra.

---

## Nulidades e vícios próprios do plano transnacional

- **Prova produzida no exterior sem o instrumento de cooperação adequado** (rogatória/auxílio direto): ilicitude por violação ao devido processo de cooperação — atacar a cadeia de custódia transnacional.
- **Ausência de exequatur** (STJ) para diligência que dele dependia.
- **Incompetência** por falha na fixação do foro interno (art. 88 CPP) ou por indevida atração à Justiça Federal/Estadual (CF art. 109).
- **Persecução em desafio ao art. 7º, §2º** (falta de condição de procedibilidade) — nulidade/carência da ação.
- **Dupla punição sem detração** (art. 8º) — vício de individualização da pena, corrigível em sede recursal.
- **Violação de imunidade** (diplomática/consular) — incompetência absoluta da jurisdição brasileira.

---

## Sob o Citation Gate — o que citar com certeza e o que verificar

**Dispositivos legais (citar com segurança, conferida a redação vigente):**
- Arts. **5º, 6º, 7º (I, II, §§1º a 3º) e 8º do CP**; arts. **88 e ss. do CPP**; **CF, art. 5º, LII e §4º; art. 105, I, "i"; art. 109, IV/V/V-A**.

**Tratados/convenções (citar o instrumento pelo nome; conferir o artigo exato antes de numerá-lo):**
- Convenção de Viena sobre Relações Diplomáticas (1961); Convenção das Nações Unidas contra o Crime Organizado Transnacional (**Palermo**); Convenção contra a Corrupção (**Mérida**); Estatuto de Roma do TPI; Pacto de São José da Costa Rica; PIDCP. **Todo número de artigo convencional → [NÃO VERIFICADO] até conferência em `jurisprudencia-stj-stf`/fonte oficial.**

**Precedentes específicos (HC, RE, REsp, Ext, temas, informativos):**
- **NÃO** cite de memória. Qualquer acórdão sobre lugar do crime digital, alcance do *ne bis in idem* internacional, condições do art. 7º, §2º, ou homologação de sentença estrangeira entra na peça **somente** após verificação. Marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`. **Prefira ensinar a tese e ancorá-la no dispositivo a arriscar um número de acórdão.**

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Ir direto ao art. 7º sem antes fixar o **lugar do crime** (art. 6º) — muitas vezes o fato já é territorial e a discussão de extraterritorialidade é desnecessária.
- Confundir extraterritorialidade **incondicionada** (I) com **condicionada** (II): aplicar as condições do §2º ao inciso I, ou dispensá-las no inciso II.
- Tratar *ne bis in idem* internacional como **extinção automática** no caso do art. 7º, I — ali a via correta é a **detração** (art. 8º).
- Alegar **litispendência internacional** por processo meramente em curso no exterior (o bloqueio depende de exaurimento).
- Definir lugar do crime digital só pela **localização de servidor/IP** — ignorando conduta e resultado típicos.
- Esquecer a **dupla incriminação** (§2º, "b") como exigência concreta e probatória.
- Deixar de pedir a **detração** (art. 8º) quando houve pena cumprida no exterior — perda de individualização em favor do réu.
- Ignorar **imunidades** (Viena/1961) como limite de jurisdição.

**Checklist:**
- [ ] Lugar do crime fixado pela **ubiquidade** (conduta e/ou resultado — art. 6º) **antes** de qualquer discussão de extraterritorialidade?
- [ ] Enquadramento correto: territorialidade (art. 5º) × extraterritorialidade **incondicionada** (7º, I) × **condicionada** (7º, II/§3º)?
- [ ] Se condicionada: **todas** as condições do §2º (e §3º) checadas uma a uma — em especial **dupla incriminação** e **entrada no território**?
- [ ] Houve persecução exaurida no exterior? Consequência correta escolhida: **bloqueio** (7º, II) × **detração** (art. 8º, no 7º, I)?
- [ ] Foro interno correto (art. 88 CPP) e competência Federal/Estadual (CF art. 109) verificados?
- [ ] Prova vinda do exterior obtida por **instrumento de cooperação** adequado (rogatória/auxílio direto/exequatur)? Cadeia de custódia transnacional íntegra?
- [ ] Tratado aplicável identificado **pelo nome**; números de artigos convencionais e **todos** os precedentes marcados **[NÃO VERIFICADO]** e conferidos via `jurisprudencia-stj-stf`?
- [ ] Redação vigente dos arts. 5º a 8º do CP conferida?

---

## Lembretes finais

- **Duas perguntas, nesta ordem:** onde se praticou o crime (art. 6º — ubiquidade) → a lei brasileira incide (arts. 5º e 7º)?
- **Incondicionada (I) vs. condicionada (II):** as condições do §2º só valem para o inciso II e o §3º; o inciso I dispensa-as, mas **não** dispensa a detração (art. 8º).
- **Ne bis in idem internacional:** bloqueia na condicionada; **desconta** (não extingue) na incondicionada.
- **Litispendência internacional** não decorre de processo meramente pendente — exige exaurimento.
- **Prova do exterior** exige instrumento de cooperação — sem ele, ataca-se a licitude.
- **Citation Gate:** dispositivo de lei sim; número de acórdão/artigo de tratado só depois de verificado.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio metodológico à análise de competência internacional penal; **não** substitui o juízo do profissional responsável nem a leitura dos autos e dos tratados aplicáveis ao caso concreto.
- **Skill de polo predominantemente DEFENSIVO** (arguição de incompetência da jurisdição brasileira, *ne bis in idem*, detração, ilicitude de prova transnacional). As mesmas categorias servem à acusação (MP/assistente) para **fixar** a competência brasileira — **o roteador deve conferir o polo** (`company.md`) antes de orientar a redação.
- **Ética por polo:** advocacia (OAB/EAOAB + Provimento 205/2021); Ministério Público (CNMP); Defensoria (LC 80/94). Conflito de interesses (art. 17 EAOAB) checado na triagem.
- **Citações:** nenhuma súmula, tese ou precedente citado de memória — tudo passa pelo gate `verificacao-citacoes` e pela conferência em `jurisprudencia-stj-stf`.

**Padrão de redação:** ao converter a análise em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
