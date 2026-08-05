---
name: jm-defesa-abandono-posto-e-dormir-em-servico
description: >-
  Use ao defender crimes contra o dever e o serviço militar no CPM — ABANDONO DE POSTO (art. 195),
  descumprimento de missão (art. 196), EMBRIAGUEZ EM SERVIÇO (art. 202) e DORMIR EM SERVIÇO (art.
  203): teses de atipicidade (não estava em serviço/posto, rendição regular, ausência de dolo, mal
  súbito, força maior, caso fortuito), exame crítico do laudo de embriaguez e do nexo com o serviço,
  e os limites da insignificância na… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, cpm, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-abandono-posto-e-dormir-em-servico"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-abandono-posto-e-dormir-em-servico", "defesa abandono", "dormir servico"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em crimes contra o dever e o serviço militar (arts. 195, 196, 202 e 203 do CPM)

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

Esta skill orienta a **defesa técnica** nos crimes contra o serviço e o dever militar do **Código Penal Militar (Decreto-Lei 1.001/1969)**: **abandono de posto** (art. 195), **descumprimento de missão** (art. 196), **embriaguez em serviço** (art. 202) e **dormir em serviço** (art. 203). São infrações **propriamente militares**, ligadas à sentinela, à guarda, ao plantão e à missão — julgadas nas **auditorias da Justiça Militar** (estadual ou da União). O centro da defesa é quase sempre a **atipicidade**: faltou algum elemento do tipo (estar *em serviço* ou *em posto*, o dolo, a permanência) ou incidiu **excludente** (força maior, caso fortuito, mal súbito).

> **Lição central:** antes de qualquer tese, **reconstrua o elemento nuclear "em serviço / em posto"**. Estes tipos só se consumam quando o agente estava **efetivamente** de serviço, de sentinela, de plantão ou de guarda, num posto **regularmente escalado**. Se a escala, a rendição, o horário ou o local não fecham, o fato é **atípico** — ataque a moldura fática (escala, livro de parte, ordem de serviço) *antes* de discutir dolo ou pena.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 195, 196, 202 e 203 do CPM e da parte geral aplicável (arts. 9º — crime militar; 33 — dolo/culpa; 42 — exclusão de crime; 47 — circunstâncias que não excluem, mas atenuam) diretamente na fonte oficial. Confira também competência (a **EC 45/2004** e a **Lei 13.491/2017** ampliaram o conceito de crime militar) e **qualquer súmula, tese ou precedente** via a skill `jurisprudencia-stj-stf` (e, no âmbito castrense, jurisprudência do **STM**) antes de fundamentar a peça. Nada de número de acórdão citado de memória.

## Base legal

- **Art. 195, CPM** — *abandono de posto* e lugar de serviço: abandonar, sem ordem superior, o posto ou o lugar de serviço que lhe tenha sido designado, ou o serviço que lhe cumpria, antes de terminá-lo.
- **Art. 196, CPM** — *descumprimento de missão*: deixar de desempenhar, ou desempenhar negligentemente, a missão de que foi incumbido (com forma **majorada** quando de missão de guerra ou em presença do inimigo — confira o texto).
- **Art. 202, CPM** — *embriaguez em serviço*: embriagar-se o militar, quando em serviço, ou apresentar-se embriagado para prestá-lo.
- **Art. 203, CPM** — *dormir em serviço*: dormir o militar, quando em serviço, como oficial de quarto ou de ronda, ou em situação equivalente, ou não estando de serviço, como sentinela, vigia, ou plantão às máquinas, ao leme, na guarda de presos etc.
- **Parte geral do CPM** — art. 9º (definição de crime militar; ver Lei 13.491/2017), art. 33 (dolo e culpa), **art. 42 (exclusão de crime: estado de necessidade, legítima defesa, estrito cumprimento do dever, exercício regular de direito)** e art. 45 (coação irresistível/obediência hierárquica).
- **Processo:** **CPPM (Decreto-Lei 1.002/1969)** — rito, produção de prova, laudos.
- **Competência:** CF, art. 124 (Justiça Militar da União) e art. 125, §§4º-5º (Justiça Militar estadual — só militares dos Estados; civis nunca respondem na JME).

> **Sempre confirme o texto legal na fonte oficial** — as ementas acima são *guia de memória*, não transcrição literal. A redação e os preceitos secundários (pena) devem ser lidos no CPM vigente.

## Mapa dos tipos — o que a acusação precisa provar

| Tipo | Elemento nuclear | Dolo/culpa | Verbo | Ponto fraco típico da acusação |
|------|------------------|-----------|-------|-------------------------------|
| **195 — abandono de posto** | estar designado a **posto/lugar de serviço** | doloso (abandono voluntário) | *abandonar* sem ordem, antes de terminar | provar que o local era "posto" e que houve **abandono** (não mera ausência momentânea ou rendição) |
| **196 — descumprimento de missão** | ter recebido **missão** determinada | doloso ou **negligente** | *deixar de desempenhar / desempenhar negligentemente* | provar a **existência e o conteúdo** da missão e o resultado da omissão |
| **202 — embriaguez em serviço** | estar **em serviço** (ou apresentar-se para ele) | doloso | *embriagar-se / apresentar-se embriagado* | provar a **embriaguez** por laudo idôneo e o **nexo com o serviço** |
| **203 — dormir em serviço** | exercer função de **vigilância** (sentinela, vigia, plantão, ronda) | doloso | *dormir* enquanto de serviço | provar o **sono efetivo** (não cansaço, distração ou olhos fechados momentâneos) e a função de vigilância |

## Roteiro de defesa por tipo penal

### 1) Abandono de posto (art. 195)

Teses típicas:
- **Atipicidade por ausência de "posto/lugar de serviço":** o local não era posto regularmente designado, ou o militar já **não estava mais escalado** (fim do turno, rendição já ocorrida). Prova: **escala de serviço, livro de parte, ordem de serviço, rendição registrada.**
- **Rendição regular / ordem superior:** houve **ordem** (ainda que verbal) ou **rendição** por outro militar — afasta o "sem ordem superior" do tipo. Buscar testemunhas e o livro da guarda.
- **Ausência de dolo:** o afastamento foi **momentâneo e necessário** (atender ocorrência próxima, socorrer alguém, necessidade fisiológica inadiável) — não há vontade de *abandonar*, mas de cumprir dever ou atender urgência. Distinguir **ausência breve** de **abandono**.
- **Excludentes do art. 42:** **estado de necessidade** (deslocou-se para evitar mal maior), **estrito cumprimento de dever legal**, **exercício regular de direito**.
- **Força maior / caso fortuito:** foi retirado do posto por evento externo (mal súbito, colapso, coação) — atipicidade por ausência de conduta voluntária.
- **Coação irresistível / obediência hierárquica (art. 45):** cumpriu ordem de superior (não manifestamente ilegal) ou agiu sob coação.

### 2) Descumprimento de missão (art. 196)

Teses típicas:
- **Inexistência/indeterminação da missão:** a acusação não demonstra **qual** missão, seu **conteúdo** e seu **destinatário** — ordem vaga ou não comprovada é atipicidade.
- **Impossibilidade material:** a missão era **inexequível** por causa alheia (falta de meios, condições do terreno/tempo, ordem contraditória) — não há negligência culpável.
- **Cumprimento (ainda que imperfeito) sem negligência:** desempenho **razoável** dentro do possível; falha pontual não é "negligência" penalmente relevante.
- **Erro sobre a ordem / ordem ambígua:** interpretou de boa-fé ordem mal transmitida (relevância do **erro de tipo/erro sobre elemento** — confira o tratamento no CPM).
- **Majorante (guerra / presença do inimigo):** se imputada, exigir prova rigorosa do contexto; na dúvida, afastar a forma qualificada e discutir apenas a figura simples.

### 3) Embriaguez em serviço (art. 202)

Teses típicas (a defesa **ataca o laudo e o nexo**):
- **Ausência de laudo idôneo / prova frágil da embriaguez:** impugnar exame que não observou a **cadeia de custódia** (art. 158-A e ss. do CPP, por aplicação subsidiária; ver skill `cadeia-de-custodia`), coleta irregular, ausência de **teste confirmatório**, ou laudo baseado apenas em **impressão testemunhal** ("hálito etílico") sem dosagem. Sinais clínicos isolados não provam embriaguez penal.
- **Ausência de nexo com o serviço:** não estava **em serviço** nem **se apresentando** para ele; ou a ingestão ocorreu **fora** do turno e do posto. Reconstruir a escala e o horário.
- **Embriaguez não voluntária / patológica / por caso fortuito:** medicação prescrita, condição de saúde, embriaguez involuntária — afasta o dolo (ver art. 49 do CPM sobre embriaguez, confira a redação).
- **Grau insuficiente:** o tipo exige **estado de embriaguez**, não mera ingestão; teor irrisório não configura.
- **Nulidade da prova pericial:** perito não compromissado, exame sem contraditório, recusa indevida (o direito de não produzir prova contra si — nemo tenetur — merece exame quanto à recusa ao teste).

### 4) Dormir em serviço (art. 203)

Teses típicas:
- **Atipicidade por não haver "sono efetivo":** cansaço, cochilo momentâneo, olhos fechados por instantes ou desatenção **não** são "dormir em serviço" — exige-se **sono real e demonstrado**. Impugnar prova que confunde fadiga com sono.
- **Ausência da função de vigilância exigida:** o militar **não** exercia a função qualificada pelo tipo (sentinela, vigia, plantão às máquinas/leme, guarda de presos, oficial de quarto/ronda). Se estava em função diversa, o fato pode ser atípico neste artigo.
- **Excludentes fisiológicas / força maior:** privação de sono por **escala abusiva**, sucessão de plantões sem descanso, condição médica (apneia, medicação) — o sono foi **involuntário**, afastando a conduta dolosa; discutir também **exigibilidade de conduta diversa**.
- **Ausência de dolo:** dormir pressupõe estado involuntário; a censura recai sobre **assumir o serviço já exausto**, o que remete às condições impostas pela administração (defesa de contexto).

## Insignificância na Justiça Militar — uso RESTRITO

> **Distinção decisiva (do `distinct_from` da spec):** a insignificância **não** opera na JM como opera nos crimes patrimoniais do CP comum. O bem jurídico aqui é a **regularidade do serviço, a hierarquia e a disciplina** — não um valor econômico. Por isso, a jurisprudência castrense **restringe fortemente** o princípio nos crimes propriamente militares.

- Nos crimes contra o **dever/serviço** (195, 196, 202, 203), a insignificância é **excepcional**: a lesão à disciplina e à confiança no serviço não se mede por valor.
- Onde a insignificância **tem mais espaço** na JM é em **crimes patrimoniais de bagatela** (pequeno furto, dano ínfimo) — e ainda assim sob crivo rigoroso.
- **Estratégia realista:** em vez de apostar só na insignificância, priorize **atipicidade material** (faltou elemento do tipo), **excludentes (art. 42)** e **dúvida probatória (in dubio pro reo)**. Reserve a insignificância como argumento **subsidiário**, sempre reconhecendo sua aplicação restrita no âmbito militar.
- **[NÃO VERIFICADO]** Qualquer precedente do STM/STF/STJ sobre (in)aplicabilidade da insignificância a crime propriamente militar deve ser conferido via `jurisprudencia-stj-stf` — **não** cite número de HC/RE/informativo sem verificação. Ensine a **tese** (bem jurídico = disciplina/hierarquia; aplicação restrita), não um acórdão de memória.

## Teses e contra-teses (quadro)

| Tese da defesa | Como sustentar | Contra-tese (acusação) |
|----------------|----------------|------------------------|
| **Não estava "em serviço/posto"** | escala, rendição, horário, livro de parte | serviço se prova pela escala e pela praxe do quartel |
| **Ausência breve ≠ abandono (195)** | afastamento momentâneo e necessário; sem dolo de abandonar | o tipo pune sair "antes de terminar", ainda que por pouco |
| **Rendição/ordem superior (195)** | testemunhas, livro da guarda | rendição não registrada não afasta o dever |
| **Missão inexistente/indeterminada (196)** | ordem vaga, sem conteúdo comprovado | ordem verbal também obriga |
| **Laudo frágil / sem nexo (202)** | quebra de cadeia de custódia, sem dosagem, fora do turno | sinais clínicos + testemunhas bastam |
| **Sono não comprovado (203)** | fadiga ≠ sono; prova insuficiente | flagrante da guarda comprova o sono |
| **Excludente do art. 42 / força maior** | estado de necessidade, caso fortuito, mal súbito | ônus da prova da excludente é da defesa |
| **Insignificância (subsidiária)** | lesão ínfima à disciplina | bem jurídico é disciplina/hierarquia — aplicação restrita |

## Estrutura da peça de defesa (resposta à acusação / alegações — CPPM)

1. **Endereçamento** ao Juízo da Auditoria Militar competente (Justiça Militar da União ou estadual), com o número dos autos.
2. **Síntese da imputação** — identificar o artigo (195/196/202/203) e a **conduta exata** narrada.
3. **Questões preliminares** — competência (art. 124/125 CF; Lei 13.491/2017), nulidades (cadeia de custódia do laudo no 202; inépcia da denúncia no 196), inépcia por não descrição do elemento "em serviço/posto".
4. **Mérito — atipicidade primeiro:** reconstruir o elemento nuclear ausente (não estava em serviço/posto; não houve sono efetivo; sem laudo idôneo; missão indeterminada).
5. **Excludentes (art. 42) e dolo:** força maior, caso fortuito, mal súbito, estado de necessidade, obediência hierárquica (art. 45); ausência de dolo.
6. **Insignificância (subsidiária)** — com a ressalva da aplicação restrita na JM.
7. **In dubio pro reo** — se a prova não fecha o elemento nuclear, absolvição.
8. **Pedidos** — absolvição (atipicidade/excludente/dúvida); subsidiariamente, desclassificação para figura culposa/atenuada ou reconhecimento de atenuantes (art. 72, CPM).
9. **Requerimentos de prova** — oitiva do superior que deu a ordem, juntada da escala e do livro de parte, perícia complementar/contraprova no laudo de embriaguez.

## Súmulas e precedentes (sob o Citation Gate — conferir SEMPRE)

> **Citation Gate — inegociável.** Cite **dispositivos do CPM/CPPM/CF** com certeza; para **qualquer** súmula, tese ou acórdão (STM, STF, STJ) **não** transcreva número de memória. Marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` (e jurisprudência do **STM** para matéria propriamente castrense).

- **Súmula Vinculante 6/STF** — [NÃO VERIFICADO quanto ao teor exato] sobre remuneração/soldo de militar; citar só se pertinente e verificado (em regra **não** se aplica a estes tipos — evite).
- **Competência (Lei 13.491/2017 e EC 45/2004):** a ampliação do conceito de crime militar é **dispositivo de lei** — pode ser citada; confira a redação e o alcance para o caso concreto.
- **Insignificância em crime propriamente militar:** existe farta jurisprudência **restritiva** — ensine a tese (disciplina/hierarquia), **[NÃO VERIFICADO]** para números; conferir no STM/STF via gate.
- **Cadeia de custódia (laudo de embriaguez):** arts. 158-A e ss. do CPP por aplicação subsidiária ao CPPM — **dispositivo de lei**, citável; ver skill `cadeia-de-custodia`.

**Regra prática:** prefira **fundamentar na letra do tipo e na excludente do art. 42** — é o que sustenta a atipicidade — a arriscar um número de acórdão. A tese vale mais que a citação.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Discutir **pena/dolo** antes de fixar se o militar estava **em serviço/posto** — o elemento nuclear vem primeiro.
- Tratar **ausência momentânea** como abandono (195), ou **cansaço/cochilo** como "dormir em serviço" (203).
- Aceitar **laudo de embriaguez** (202) sem checar cadeia de custódia, dosagem e nexo com o turno.
- Apostar **só** na insignificância — na JM ela é restrita; use atipicidade + art. 42 + dúvida.
- Confundir competência: **civil não responde na Justiça Militar estadual**; conferir a via correta (JMU × JME).
- Citar súmula/acórdão do STM/STF **de memória** — passa pelo gate `jurisprudencia-stj-stf`.
- Ignorar a **escala, o livro de parte e a ordem de serviço** — são a prova documental que faz (ou desfaz) o tipo.

**Checklist da defesa:**
- [ ] Elemento nuclear reconstruído (estava **em serviço / em posto / de vigilância** de fato?)?
- [ ] Escala, livro de parte, ordem de serviço e registro de rendição juntados/requeridos?
- [ ] **195:** houve abandono ou mera ausência breve? havia ordem/rendição?
- [ ] **196:** a missão existe, está determinada e era exequível?
- [ ] **202:** laudo idôneo, com dosagem, cadeia de custódia e nexo com o serviço?
- [ ] **203:** há prova de **sono efetivo** e da função de vigilância exigida?
- [ ] Excludentes do **art. 42** e força maior/caso fortuito/mal súbito examinadas?
- [ ] Dolo específico de cada tipo enfrentado (ausência de dolo → atipicidade)?
- [ ] Competência conferida (CF 124/125; Lei 13.491/2017)?
- [ ] Insignificância só como **subsidiária**, com a ressalva da aplicação restrita?
- [ ] Toda súmula/precedente conferido via `jurisprudencia-stj-stf` / STM antes de citar?
- [ ] Redação vigente dos arts. 195/196/202/203 do CPM conferida na fonte oficial?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado/defensor** responsável.
- **Polo:** esta skill é de **DEFESA** (`polo_acusacao: false`). Cabe ao roteador confirmar o polo do escritório no `company.md`; havendo atuação acusatória (MP militar/assistente), esta skill **não** é a adequada.
- **Ética por polo:** advocacia — Estatuto da OAB e **Provimento 205/2021**; Ministério Público — CNMP; Defensoria — LC 80/94.
- **Citação:** nenhuma súmula/tese/acórdão de memória — tudo pelo gate `jurisprudencia-stj-stf` (e jurisprudência do **STM** para matéria castrense). Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
