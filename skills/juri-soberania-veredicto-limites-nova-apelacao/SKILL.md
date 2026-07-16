---
name: juri-soberania-veredicto-limites-nova-apelacao
description: >-
  Use para ANALISAR os limites recursais e constitucionais APÓS o veredicto do Tribunal do Júri — a
  estratégia (não a peça) diante da soberania dos veredictos (CF, art. 5º, XXXVIII, 'c'), da vedação
  à segunda apelação pela alínea 'd' (art. 593, §3º, CPP) e do debate vivo no STF sobre a ABSOLVIÇÃO
  POR CLEMÊNCIA (quesito genérico do art. 483, III e §2º, CPP) frente ao recurso da acusação.
  Gatilhos: soberania dos veredictos… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, analise, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-soberania-veredicto-limites-nova-apelacao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-soberania-veredicto-limites-nova-apelacao", "juri soberania", "nova apelacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Soberania dos Veredictos e Limites de Nova Apelação (art. 593, §3º, CPP; art. 5º, XXXVIII, "c", CF)

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

Esta skill orienta a **análise estratégica** do que pode — e do que **não** pode — acontecer **depois** que o Conselho de Sentença decide. Não é a peça: é o **mapa dos limites**. Responde às três perguntas que definem o pós-plenário: (1) **cabe** nova apelação por decisão contrária à prova?; (2) até onde a **soberania dos veredictos** blinda o que os jurados decidiram?; e (3) a **absolvição por clemência** (quesito genérico do art. 483, III e §2º, CPP) pode ser **cassada** a pedido da acusação — o debate constitucional **vivo no STF**.

É a skill que o roteador aciona quando o veredicto **já saiu** e a dúvida deixou de ser "como recorrer" e passou a ser **"quanto do veredicto ainda está em disputa"**. Serve à defesa (para **resistir** ao recurso da acusação e opor a **definitividade** da absolvição) e à acusação (para **medir** as chances reais de reverter), sempre conferido o polo.

> **Lição central:** o veredicto do júri **não** é uma sentença comum sujeita a reexame amplo. Três travas o protegem: (a) a **soberania dos veredictos** (o tribunal togado **não** substitui o juízo dos jurados — no máximo **anula** e devolve a **outro** júri); (b) a **regra do recurso único** da alínea "d" (cassado **um** veredicto por contrariedade à prova, **não** cabe segunda apelação pelo **mesmo** fundamento — art. 593, §3º, parte final); e (c) o filtro do **"manifestamente"** (só o veredicto **escandalosamente** divorciado dos autos é cassável). Errar esses limites leva a recorrer do irrecorrível — ou a **desistir** de resistir a um recurso natimorto.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 593, III, "d", e §3º, do CPP**, do **art. 483, III e §2º, do CPP** e do **art. 5º, XXXVIII, "c", da CF** na fonte oficial. A sistemática do júri foi reescrita pela **Lei 11.689/2008** (que criou o **quesito genérico de absolvição** e reordenou a votação). O tema da **absolvição por clemência × recurso da acusação** está **em evolução no STF** e a orientação pode virar — **qualquer** súmula, tema de repercussão geral, informativo ou acórdão (número de HC/REsp/RE) passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes de ir para o parecer/peça. Na dúvida, **ensine a tese e cite o dispositivo** — omitir vence inventar.

## Base legal

- **Art. 5º, XXXVIII, "c", CF** — **soberania dos veredictos**. É o limite constitucional-mor: o togado não pode reformar o mérito da decisão dos jurados; pode, no máximo, **anular e devolver** a outro Conselho.
- **Art. 5º, XXXVIII, "a" e "b", CF** — **plenitude de defesa** e **sigilo das votações** (fundamentos que sustentam a íntima convicção e a absolvição imotivada).
- **Art. 483, III e §2º, CPP** — **quesito genérico de absolvição** ("O jurado absolve o acusado?"): obrigatório após materialidade e autoria, permite absolver por **qualquer** fundamento, inclusive **clemência/íntima convicção**, **sem** declaração de motivo (ver skill `juri-quesitacao`).
- **Art. 593, III, "d", CPP** — apelação por decisão **manifestamente contrária à prova dos autos** (o fundamento próprio para atacar o **mérito** do veredicto).
- **Art. 593, §3º, CPP** — provida a "d", o efeito é **novo júri** (não a reforma direta); **e**, na parte final, a **vedação à segunda apelação pelo mesmo fundamento** (recurso único).
- **Art. 593, III, "a", "b", "c", CPP** — as **outras** alíneas (nulidade; sentença do juiz-presidente contrária à lei/veredicto; erro de pena) — fundamentos **distintos**, que **não** esbarram na vedação da "d".
- **Art. 621 e ss., CPP** — **revisão criminal** (rescisória *pro reo*): via excepcional que **não** se confunde com apelação e que **não** existe *pro societate* (não há revisão contra a absolvição).

## Trava 1 — A soberania dos veredictos como limite (não como blindagem absoluta)

A soberania **não** é imunidade total: ela define **quem** dá a palavra final sobre o mérito (os jurados), **não** que o veredicto seja inatacável.

- O tribunal *ad quem* **pode**: **anular** o julgamento (por nulidade — alínea "a") e **cassar** o veredicto contrário à prova (alínea "d") — sempre **devolvendo** a decisão a **novo júri**.
- O tribunal *ad quem* **não pode**: **absolver**, **condenar**, **desclassificar** ou **redimensionar** a tese vencida com base na prova. Fazê-lo usurpa a competência constitucional do Conselho.
- **Corolário estratégico:** contra o veredicto de mérito, o pedido correto é sempre **anulação/cassação + novo júri** — nunca a reforma direta. Pedir "absolvição" (ou "condenação") ao tribunal pela via da prova é tecnicamente incompatível com a soberania e sinaliza recurso natimorto.

## Trava 2 — A regra do recurso único (art. 593, §3º, parte final)

- Cassado o **primeiro** veredicto por ser **contrário à prova** (alínea "d"), **não cabe** nova apelação pela **mesma** alínea "d" contra o **segundo** veredicto do novo júri. Depois de dois júris, a palavra dos jurados **sobre a prova** torna-se, por essa via, definitiva.
- **A vedação é do FUNDAMENTO, não do recurso em si.** Vícios **novos e distintos** surgidos **no segundo julgamento** desafiam recurso **próprio**, porque o fundamento é **outro**:
  - **nulidade** ocorrida no novo plenário → alínea **"a"**;
  - **erro/injustiça na pena** da nova sentença → alínea **"c"**;
  - sentença do juiz-presidente contrária à lei/veredicto → alínea **"b"**.
- **Erro comum a evitar:** achar que "novo júri" reabre tudo. Reabre o **julgamento**, não a via da "d" contra o mesmo mérito. Confirme o **alcance atual** dessa distinção na `jurisprudencia-stj-stf` — é ponto sensível e de leitura jurisprudencial. [NÃO VERIFICADO quanto a qualquer número de acórdão/tema.]

## Trava 3 — O filtro "manifestamente" (a "d" não é reexame)

O padrão da alínea "d" **não** é "havia prova melhor" nem "eu decidiria diferente". É **"nenhum jurado razoável decidiria assim diante desta prova"**.

- **NÃO cassa:** veredicto que adotou **uma das versões** possíveis diante de prova **dividida**. Divergência não é dissonância manifesta; havendo **duas** teses com respaldo, a escolha é soberana.
- **CASSA (para novo júri):** veredicto **arbitrário/escandaloso** — decidiu contra prova **una e coesa**, **sem qualquer** elemento nos autos que o sustente. É o veredicto **divorciado dos autos**.
- **Ônus argumentativo:** demonstrar o **vazio de lastro** da tese vencedora, prova por prova — não a superioridade da tese vencida. (Para a **redação** desse recurso, use `juri-apelacao-contraria-prova-593d`; esta skill mede se ele **cabe**.)

## O núcleo vivo — absolvição por clemência × recurso da acusação

Este é o ponto que justifica a existência autônoma desta skill: **pode a acusação apelar (art. 593, III, "d") contra uma absolvição fundada no quesito genérico do §2º, sob o argumento de que foi contrária à prova?** O tema está **em disputa constitucional no STF** e **não** há, aqui, resposta a ser afirmada de memória.

**O que está em jogo (a tensão de princípios):**
- De um lado, a **soberania dos veredictos** e a **plenitude de defesa** (CF, art. 5º, XXXVIII, "a" e "c"): o quesito genérico do art. 483, §2º, foi **desenhado** para permitir a absolvição por **qualquer** fundamento — inclusive **clemência/íntima convicção** —, **sem** declaração de motivo. Se o jurado pode absolver **imotivadamente**, sustenta-se que **não há** "prova" contra a qual medir a decisão: a absolvição por clemência seria, por natureza, **imune** ao controle da alínea "d".
- De outro, a leitura de que a absolvição, mesmo pelo §2º, **não** pode ser **arbitrária** a ponto de contrariar prova **una e coesa** de autoria e materialidade — e que a acusação teria **direito ao recurso** (paridade de armas / vedação à proteção deficiente), submetendo o réu a **novo júri**.

**Como usar isto na prática (sem arriscar número de julgado):**
- **Se você atua na DEFESA (réu absolvido no §2º):** a tese-mãe é a **definitividade** — a absolvição por clemência é **expressão máxima da soberania** e da íntima convicção; **não** há lastro probatório a ser confrontado, logo a alínea "d" **não** se presta a cassá-la; provido eventual recurso, haveria **violação** à soberania e à plenitude de defesa. **Oponha** essa tese em **contrarrazões** (skill `contrarrazoes-apelacao`) e, se cassado o veredicto, avalie **HC/RE** conforme o estágio.
- **Se você atua na ACUSAÇÃO (MP ou assistente, contra a absolvição):** meça com honestidade o **risco de improvimento** — o argumento da soberania é forte e a orientação pode ser **contrária** ao recurso; se optar por recorrer, sustente a **contrariedade manifesta** à prova **una e coesa** de autoria/materialidade e o **direito ao recurso**, pedindo **novo júri** (nunca condenação direta). Confira **polo** e viabilidade antes de peticionar.
- **Regra de ouro para ambos:** o **estado atual** dessa controvérsia (o que o STF decidiu ou está decidindo, com **repercussão geral** e **tema**) é **decisivo** e **muda** a resposta. **Antes de afirmar qualquer coisa**, passe pela `jurisprudencia-stj-stf`. [NÃO VERIFICADO: o número do RE/tema de repercussão geral sobre absolvição por clemência e o resultado atual do julgamento — conferir obrigatoriamente.]

> **Por que a clemência é diferente da "d" comum.** Na "d" clássica, ataca-se um veredicto **condenatório** ou uma **qualificadora** sem lastro — há um fato provado (ou não) a confrontar. Na **absolvição por clemência**, o jurado pode ter reconhecido autoria e materialidade e, ainda assim, **absolvido** por convicção íntima. O choque é: **existe** "prova contrária" a uma decisão que a lei autoriza a ser **imotivada**? É essa a pergunta que o STF enfrenta — e a razão de esta análise ser tratada **à parte** da peça da alínea "d".

## Roteiro de análise (pós-veredicto)

```
1) QUEM decidiu o quê?
   ├── Absolvição por materialidade/autoria negada (art. 483, §1º)? → soberania plena.
   ├── Absolvição pelo QUESITO GENÉRICO (§2º / clemência)?          → núcleo vivo (ver acima).
   └── Condenação / qualificadora reconhecida?                      → avaliar "d" (defesa).

2) QUAL é o alvo do recurso?
   ├── Mérito do veredicto (prova)      → alínea "d" → efeito: NOVO JÚRI (não reforma).
   ├── Nulidade pós-pronúncia           → alínea "a" (ex.: quesitação — ver juri-quesitacao).
   ├── Sentença do juiz-presidente      → alínea "b" (contrária à lei/veredicto).
   └── Pena/medida de segurança         → alínea "c" (erro/injustiça na aplicação).

3) HÁ trava de recurso único?
   ├── Já houve cassação anterior pela "d" sobre o MESMO mérito? → 2ª apelação pela "d" VEDADA (§3º).
   └── Vício NOVO do 2º julgamento (a/b/c)?                       → recurso próprio, fundamento distinto.

4) O padrão "manifestamente" está presente?
   ├── Prova dividida / uma versão possível?  → NÃO cassa (soberania).
   └── Prova una e coesa ignorada / vazio de lastro? → cassa p/ novo júri.

5) POLO e conformidade
   └── Conferir company.md (tipo + polo); teses se INVERTEM defesa × acusação.
       Passar toda citação pela jurisprudencia-stj-stf. Revisão humana obrigatória.
```

## Teses (defesa) e contra-teses (acusação)

**Teses da DEFESA — pró-definitividade da absolvição / contra a cassação:**
1. **Soberania como definitividade** — a absolvição por clemência (§2º) é o ápice da soberania e da íntima convicção; cassá-la a pedido da acusação **viola** o art. 5º, XXXVIII, "c", CF.
2. **Imotivação legítima** — o §2º autoriza absolver **sem** declarar motivo; não há "prova contrária" a confrontar, logo a alínea "d" é **inidônea** para desconstituir o veredicto absolutório.
3. **Plenitude de defesa** — cassar a clemência esvazia a garantia da alínea "a" do art. 5º, XXXVIII, CF, e a função histórica do júri como filtro de humanidade.
4. **Recurso único / fundamento único** — se a acusação já teve seu júri e sua apelação, a definitividade se impõe; novo júri seria *bis in idem* material contra o absolvido.

**Contra-teses da ACUSAÇÃO — pró-recurso / cassação (medir o risco):**
1. **Contrariedade manifesta ainda cabe** — mesmo no §2º, absolvição contra prova **una e coesa** de autoria/materialidade seria **arbitrária**, atacável pela "d", com efeito de **novo júri**.
2. **Direito ao recurso / paridade de armas** — vedar por completo o recurso da acusação configuraria **proteção deficiente** e desequilíbrio processual.
3. **Soberania preservada no efeito** — o pedido é **novo júri** (outro Conselho decide), **não** condenação pelo tribunal; logo, não haveria violação à soberania.

> **Nota de polo (obrigatória).** Esta análise serve **aos dois lados**, com teses **invertidas**. O roteador deve **conferir o polo do usuário e do escritório** (`company.md`) **antes** de fixar a linha argumentativa. Para a defesa, o produto típico é **contrarrazões** (`contrarrazoes-apelacao`) e a oposição à cassação; para a acusação (MP/assistente), é a **medição de viabilidade** do recurso — lembrando que a orientação pode ser **desfavorável** ao recurso e isso precisa ser dito ao cliente.

## Interação com outras vias

- **Revisão criminal (art. 621 e ss.)** — é rescisória **pro reo** e **não** existe contra a absolvição; não é caminho para a acusação reverter o veredicto absolutório. Não confundir com apelação.
- **Habeas corpus / RE** — quando o veredicto absolutório é **cassado** e o réu volta a júri, a defesa avalia **HC** (constrangimento à liberdade) e/ou **RE** (violação à soberania/plenitude), conforme o estágio — via a skill `jurisprudencia-stj-stf` para o cabimento atual. [NÃO VERIFICADO quanto a precedentes numerados.]
- **Quesitação (arts. 482-491)** — se o problema é **como** o quesito genérico foi formulado/omitido, o vício é de **nulidade (alínea "a")**, não de "d" — ver `juri-quesitacao`.
- **Peça da alínea "d"** — para **redigir** a apelação/contrarrazões sobre contrariedade à prova, use `juri-apelacao-contraria-prova-593d` e `contrarrazoes-apelacao`. Esta skill decide **se** e **até onde** aquilo cabe.

## Precedentes e enunciados — sob o Citation Gate

**Dispositivos (citáveis livremente):** art. 5º, XXXVIII, "a", "b" e "c", CF; art. 483, III e §2º, CPP; art. 593, III, "d", e §3º, CPP; arts. 482-491 CPP (quesitação); art. 621 e ss. CPP (revisão criminal).

**Teses jurisprudenciais (ensinar a tese; conferir número/vigência na `jurisprudencia-stj-stf` antes de citar acórdão):**
- A cassação pela "d" **só** cabe diante de veredicto **manifestamente** dissonante — não de prova dividida —, sendo a soberania o limite; provida, o efeito é **novo júri**, nunca reforma direta. [NÃO VERIFICADO quanto a qualquer número de HC/REsp/RE, informativo ou tema.]
- A vedação ao **segundo recurso** pela "d" (§3º) e seu alcance frente a vícios **novos** do segundo julgamento. [NÃO VERIFICADO — verificar leitura atual.]
- O **cabimento (ou não) da apelação da acusação contra a absolvição por clemência** do §2º e a **definitividade** desse veredicto absolutório — **debate constitucional em curso no STF, com repercussão geral**. [NÃO VERIFICADO: número do RE / tema / resultado atual — **conferir obrigatoriamente** antes de afirmar; a resposta é decisiva e pode ter virado.]

> **Regra do Citation Gate:** nenhum número de acórdão, tema, informativo ou súmula entra no parecer/peça **sem** passar pela skill `jurisprudencia-stj-stf`. Prefira **sempre** fundamentar no **dispositivo** e no **standard** ("manifestamente"; "soberania"; "íntima convicção") a arriscar um julgado. **Melhor faltar precedente do que citar julgado inexistente** — há sanções reais por jurisprudência inventada por IA. O tema da clemência é **especialmente** perigoso: está em movimento e um número desatualizado inverte a conclusão.

## Erros comuns / anti-padrões (evitar)

- **Afirmar de memória** se cabe (ou não) apelação da acusação contra a absolvição por clemência — a resposta depende do **estado atual** do STF; **sempre** conferir na `jurisprudencia-stj-stf`.
- Tratar a soberania como **blindagem absoluta** (ignorar que nulidade "a" e cassação "d" existem) — ou, no oposto, como **irrelevante** (achar que o tribunal reexamina prova livremente).
- Pedir ao tribunal **absolvição/condenação direta** pela via da prova — o efeito da "d" é **novo júri**; qualquer outra coisa fere a soberania.
- Ignorar a **regra do recurso único** e apelar de novo pela "d" contra o **segundo** veredicto sobre o **mesmo** mérito (§3º).
- **Não distinguir** vício **novo** do segundo julgamento (a/b/c — recorrível) da via **vedada** (segunda "d" sobre o mesmo mérito).
- Confundir a **absolvição pelo §1º** (materialidade/autoria negadas) com a **absolvição pelo §2º** (clemência) — só a segunda deflagra o núcleo vivo.
- Tentar reverter absolvição por **revisão criminal** (não existe *pro societate*).
- Fixar a linha argumentativa **sem conferir o polo** (defesa × acusação) — as teses se **invertem**.

## Checklist final (antes do parecer/decisão de recorrer)

- [ ] O veredicto é **absolutório pelo §1º** (autoria/materialidade) ou **pelo §2º** (clemência)? (Muda toda a análise.)
- [ ] O alvo do recurso é **mérito ("d")**, **nulidade ("a")**, **lei ("b")** ou **pena ("c")** — e o **efeito** de cada um está claro?
- [ ] Já houve cassação anterior pela "d" sobre o **mesmo mérito**? Se sim, a **vedação do recurso único** (§3º) foi checada?
- [ ] Há vício **novo** do segundo julgamento que sustente recurso **por fundamento distinto**?
- [ ] O padrão **"manifestamente contrária à prova"** está mesmo presente (prova **una e coesa**), ou é caso de **prova dividida** (não cassa)?
- [ ] No tema da **clemência**, a orientação **atual** do STF (RE/tema/repercussão geral) foi conferida na `jurisprudencia-stj-stf`? Nada afirmado de memória?
- [ ] **Polo** do usuário e do escritório conferidos (`company.md`) e teses ajustadas (defesa × acusação)?
- [ ] **Vigência** dos arts. 483, §2º; 593, III, "d" e §3º, CPP; e 5º, XXXVIII, CF conferida na fonte oficial?
- [ ] **Revisão humana** do profissional responsável realizada antes de peticionar/opinar?

## Nota de conformidade

Este material é **rascunho técnico** de apoio à **análise estratégica** pós-veredicto e **não substitui** o juízo do profissional. A **revisão humana** do responsável é **obrigatória** antes de qualquer protocolo ou parecer (é hipótese a confirmar, não decisão pronta).

- **Verificação de citações:** nenhuma súmula, tese, tema, informativo ou acórdão citado de memória — tudo passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). O tema da **absolvição por clemência × recurso da acusação** está **em evolução no STF** e exige conferência atual antes de qualquer afirmação.
- **Ética por polo:** advocacia — **OAB** (Estatuto e Código de Ética e Disciplina) e **Provimento 205/2021**; Ministério Público — **CNMP**; Defensoria — **LC 80/94**. Confira o **polo** do usuário e do escritório (`company.md`) antes de fixar a linha argumentativa, pois as teses sobre soberania/limites de recurso **se invertem** entre defesa (definitividade da absolvição) e acusação (viabilidade da cassação).

**Lembretes finais:**
- **Três travas:** soberania (não reforma direta) · recurso único da "d" (§3º) · filtro "manifestamente".
- **§1º ≠ §2º:** só a absolvição por **clemência** (§2º) abre o núcleo vivo.
- **Vedação do §3º é do FUNDAMENTO**, não do recurso — vício novo (a/b/c) ainda desafia recurso próprio.
- **Efeito da "d" é sempre NOVO JÚRI** — nunca absolver/condenar pelo tribunal.
- **Clemência × acusação** = **conferir o STF agora** — a resposta pode ter virado.

**Padrão de redação:** ao converter esta análise em peça (contrarrazões, HC, RE ou apelação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
