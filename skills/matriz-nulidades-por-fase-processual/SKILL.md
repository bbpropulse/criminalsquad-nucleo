---
name: matriz-nulidades-por-fase-processual
description: >-
  Use como GRADE DE RASTREIO fase a fase — questionário de varredura que, para cada etapa do
  processo (investigação, cautelares, recebimento, citação, instrução, debates, sentença, júri,
  recursos, execução), lista os pontos de controle onde nascem vícios, com pergunta-gatilho,
  dispositivo e classificação preliminar (absoluta/relativa). É a rede de pesca que gera a lista
  bruta que depois alimenta o mapa-nulidades-processuais… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, nulidades, processo-penal, checklist, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-matriz-nulidades-por-fase-processual"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["matriz-nulidades-por-fase-processual", "matriz nulidades", "fase processual"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Matriz de Nulidades e Ilegalidades por Fase Processual (arts. 563-573 CPP)

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

Esta skill é uma **grade de rastreio** — um questionário de varredura que percorre o processo **fase a fase** e, em cada etapa, dispara **perguntas-gatilho** para localizar vícios (nulidades e ilegalidades). Não é a peça, nem o diagnóstico final: é a **rede de pesca** que produz a **lista bruta** de suspeitas, a ser depois filtrada, classificada e roteada pela skill `mapa-nulidades-processuais` (o inventário organizado). Aqui se **detecta**; lá se **decide a estratégia**.

> **Lição central:** varra na ordem cronológica dos autos e, para cada ponto de controle, responda três coisas — (1) **o que a lei exige** (dispositivo), (2) **o que os autos mostram** (fato), (3) **classificação preliminar** (absoluta/relativa) + **houve prejuízo e protesto tempestivo?**. Nulidade sem **prejuízo demonstrado** (art. 563 CPP — *pas de nullité sans grief*) e sem **arguição no momento próprio** (art. 571) tende a **precluir**. Detectar cedo é o que salva a tese.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do CPP (arts. 563-573 e os dispositivos de cada fase citados abaixo) e o estado atual das súmulas e teses — em especial os efeitos do **Pacote Anticrime (Lei 13.964/2019)** sobre juiz das garantias (arts. 3º-B a 3º-F), cadeia de custódia (arts. 158-A a 158-F) e acordo de não persecução (art. 28-A). Todo precedente específico (número de HC/REsp/RE, informativo, tema) passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir para a peça. Na dúvida, **omitir o número vence inventar**.

---

## Base legal — o sistema de nulidades

- **Art. 563 CPP** — princípio do prejuízo (*pas de nullité sans grief*): nenhum ato será declarado nulo se não houver prejuízo à acusação ou à defesa.
- **Art. 564 CPP** — rol (exemplificativo) das causas de nulidade.
- **Art. 565 CPP** — ninguém pode arguir nulidade a que deu causa ou para que concorreu.
- **Art. 566 CPP** — não anula o ato o erro que não influiu na apuração da verdade ou na decisão.
- **Art. 567 CPP** — incompetência **relativa** anula só os atos decisórios (os instrutórios se aproveitam).
- **Art. 570 CPP** — falta/nulidade de citação, intimação ou notificação sanada pelo comparecimento do interessado.
- **Art. 571 CPP** — **momento próprio** para arguir cada nulidade (preclusão).
- **Art. 572 CPP** — nulidades **relativas** consideram-se sanadas se não arguidas em tempo, se o ato atingiu seu fim, ou se a parte aceitou os efeitos.
- **Art. 573 CPP** — o ato nulo contamina os atos que dele **dependam** ou sejam **consequência** (efeito em cascata).
- **CF, art. 5º, LVI** — provas obtidas por meios ilícitos são **inadmissíveis** (base da teoria dos frutos da árvore envenenada — art. 157 CPP e §§).

> **Absoluta x relativa (a distinção que organiza tudo).** Nulidade **absoluta** = prejuízo presumido, matéria de ordem pública, arguível a qualquer tempo, não preclui (ex.: violação de competência absoluta, ampla defesa, contraditório, devido processo). Nulidade **relativa** = exige **prova do prejuízo** e **arguição no momento próprio** (art. 571), sob pena de preclusão (art. 572). **Ilegalidade de prova** segue trilha própria (inadmissibilidade + desentranhamento — art. 157 CPP), independente da lógica de nulidade do ato. Esta grade dá a **classificação preliminar**; a **confirmação** (e se o vício concreto é hoje tido por absoluto ou relativo na jurisprudência) passa pelo gate de citações.

---

## Como usar esta grade (protocolo de varredura)

1. **Ordene os autos cronologicamente** (o índice do processo eletrônico ajuda). Percorra fase por fase, na ordem das seções abaixo.
2. Em cada **ponto de controle**, faça a **pergunta-gatilho**. Se a resposta acender alerta, registre uma linha na sua lista bruta com: `fase | ponto | dispositivo | fato nos autos | classe preliminar (abs/rel) | houve protesto/preclusão?`.
3. Marque a **provável natureza** (absoluta/relativa/ilegalidade de prova) e o **efeito em cascata** (art. 573 — o que mais cai junto).
4. Ao fim da varredura, **entregue a lista bruta** à skill `mapa-nulidades-processuais`, que consolida, hierarquiza por força e define a estratégia (arguir agora, reservar para recurso, habeas corpus etc.).
5. **Nada de número de acórdão sem verificação** — nesta fase basta apontar a **tese** e o **dispositivo**; a jurisprudência entra depois, pelo gate.

> **Escopo do polo.** Esta skill é do **polo de defesa** (majoritariamente): a varredura procura vícios em favor do acusado. O rastreio serve à defesa técnica (advocacia/Defensoria). Se o operador for do **Ministério Público/assistente**, o roteador deve conferir o polo — a lógica de detecção é a mesma, mas o uso é distinto (o MP fiscaliza a legalidade, não "explora" nulidades pró-réu). **Confira o polo antes de aplicar.**

---

## FASE 1 — Investigação / Inquérito (fase pré-processual)

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Cadeia de custódia | O rastreamento do vestígio (coleta→armazenamento) está documentado e íntegro? Há quebra? | arts. 158-A a 158-F CPP | Ilegalidade de prova (contaminação) |
| Busca e apreensão | Havia mandado e fundamentação? Cumpriu os limites do mandado (endereço, objeto)? | art. 240 e ss. CPP; CF art. 5º, XI | Ilegalidade de prova |
| Interceptação telefônica | Houve autorização judicial fundamentada, prazo e indícios? Prova emprestada regular? | Lei 9.296/96; CF art. 5º, XII | Ilegalidade de prova |
| Prisão em flagrante | Auto formalizado, nota de culpa, comunicação em 24h, audiência de custódia realizada? | arts. 306, 310 CPP | Ilegalidade / relaxamento |
| Confissão / interrogatório na DP | Houve informação do direito ao silêncio e à assistência? Coação/tortura? | CF art. 5º, LXIII; art. 5º, LVI | Ilegalidade de prova |
| Reconhecimento de pessoas | Seguiu o rito do art. 226 CPP (procedimento formal, não apenas foto)? | art. 226 CPP | Ilegalidade / fragilidade probatória |
| Prova ilícita e derivada | Alguma prova nuclear deriva de fonte ilícita (frutos da árvore envenenada)? | art. 157, §§1º-3º CPP; CF art. 5º, LVI | Inadmissibilidade + desentranhamento |
| Juiz das garantias | Foi observada a repartição de competência da fase pré-processual (onde implementada)? | arts. 3º-B a 3º-F CPP | Conferir vigência/aplicação local |

> **Nota.** Vício de inquérito, em regra, **não contamina a ação penal** por si só (o IP é peça informativa), **salvo** quando a prova ilícita **migra** para os autos e fundamenta a condenação — aí o ataque é à **prova** (art. 157), não ao IP. Verifique se a prova viciada foi **efetivamente usada** na denúncia/sentença.

---

## FASE 2 — Medidas cautelares (prisão preventiva / cautelares diversas)

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Fundamentação da preventiva | A decisão indica **fato concreto** e contemporâneo (não fórmula genérica)? | arts. 312-313, 315 CPP | Ilegalidade (constrangimento) |
| Contemporaneidade / revisão 90 dias | A necessidade foi **revista periodicamente** (a cada 90 dias)? | art. 316, parágrafo único CPP | Ilegalidade (excesso) |
| Cabimento (rol do art. 313) | O crime admite preventiva (pena, reincidência, VD)? | art. 313 CPP | Ilegalidade |
| Preferência pelas cautelares diversas | Fundamentou por que as medidas do art. 319 são insuficientes? | arts. 282, §6º, 319 CPP | Ilegalidade |
| Excesso de prazo | Há excesso de prazo na formação da culpa imputável ao Estado? | Súmula 52/STJ (conferir); princípio da razoável duração | Ilegalidade (relaxamento) |

➡️ Vício de cautelar em regra ataca-se por **habeas corpus** (constrangimento ilegal), não por nulidade do processo — mas **registre na grade** porque orienta o remédio e pode indicar contaminação (ex.: confissão obtida em prisão ilegal).

---

## FASE 3 — Recebimento da denúncia / queixa e condições da ação

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Aptidão da denúncia (inépcia) | Descreve fato individualizado, com todos os elementos do tipo e o nexo do acusado? | art. 41 CPP; art. 395, I | Nulidade / rejeição |
| Denúncia genérica (crime societário) | Imputa conduta individualizada ou responsabiliza pelo mero cargo? | art. 41 CPP | Nulidade (ampla defesa) |
| Justa causa | Há lastro probatório mínimo (indícios de autoria e materialidade)? | art. 395, III CPP | Rejeição / trancamento |
| Condições da ação e pressupostos | Legitimidade, interesse, possibilidade jurídica; representação/requisição quando exigida? | arts. 24, 30, 395, II CPP | Nulidade / carência |
| ANPP não ofertado | Cabível o acordo de não persecução e não houve oferta/fundamentação da recusa? | art. 28-A CPP | Ilegalidade (remessa ao órgão revisor) |
| Fundamentação do recebimento | A decisão de recebimento enfrentou a resposta preliminar (art. 397)? | arts. 396, 396-A, 399 CPP | Relativa (conferir) |
| Prescrição / extinção da punibilidade | Já ocorreu prescrição (da pretensão punitiva) em abstrato? | arts. 107, 109 CP | Matéria de ordem pública (a qualquer tempo) |

> Se acender prescrição, acione a skill de prescrição / a `calculadora-prescricao` **[calculadora a implementar/confirmar com testes]** — extinção da punibilidade é conhecível de ofício e a qualquer tempo (não preclui).

---

## FASE 4 — Citação, intimações e constituição da relação processual

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Citação válida | O acusado foi citado (pessoal/por hora certa/edital) regularmente? | arts. 351-369 CPP | Nulidade (mas sanável — art. 570) |
| Réu preso citado pessoalmente | Réu preso foi requisitado e citado pessoalmente (não por edital)? | art. 360 CPP | Nulidade |
| Suspensão do art. 366 | Citado por edital que não compareceu nem constituiu advogado → suspendeu processo e prescrição? | art. 366 CPP | Ilegalidade se não observado |
| Intimações da defesa | Defensor foi regularmente intimado dos atos (audiências, sentença, pauta)? | arts. 370, 392, 420 CPP | Relativa (prejuízo) / absoluta se ampla defesa |
| Comparecimento sana? | Ainda que viciada a citação, houve comparecimento espontâneo do interessado? | art. 570 CPP | Sanatória — checar |

> **Regra de sanatória (art. 570).** Falta ou nulidade de citação/intimação fica **sanada** se o interessado comparece antes de o ato consumar-se — por isso, ao rastrear, verifique **se e quando** a defesa se manifestou (pode ter precluído).

---

## FASE 5 — Instrução (AIJ, provas, contraditório e ampla defesa)

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Ordem dos atos da AIJ | Seguiu a ordem legal (declarante→vítima→testemunhas→interrogatório por último)? | arts. 400, 411 CPP | Relativa (prejuízo) — conferir |
| Interrogatório como último ato | O interrogatório foi o **último** ato da instrução (garantia da autodefesa)? | art. 400 CPP | Nulidade (conferir alcance na jurisprudência) |
| Defesa técnica efetiva | A defesa foi **efetiva** (não meramente formal)? Réu ficou sem advogado em algum ato? | CF art. 5º, LV; Súmula 523/STF | Absoluta (ausência) / relativa (deficiência) |
| Contraditório sobre provas | Todas as provas foram submetidas ao contraditório (nada de prova secreta)? | CF art. 5º, LV; art. 155 CPP | Absoluta |
| Testemunhas de defesa indeferidas | Houve indeferimento imotivado de prova/testemunha relevante da defesa? | arts. 400, §1º, 402 CPP | Relativa (cerceamento) — protestar |
| Cerceamento de defesa | Negou-se diligência essencial, acesso a autos, tempo para defesa? | CF art. 5º, LV | Relativa/absoluta conforme o caso |
| Perícias e laudos | Laudo pericial existe, é assinado por perito habilitado e foi submetido ao contraditório? | arts. 158-184 CPP | Relativa / fragilidade |
| Cadeia de custódia (na instrução) | A prova material chegou ao juízo com custódia íntegra? | arts. 158-A a 158-F CPP | Ilegalidade de prova |
| Incompetência do juízo | O juízo é competente? Se absoluta, anula tudo; se relativa, só decisórios (art. 567). | arts. 69-91 CPP; art. 567 | Absoluta ou relativa |
| Impedimento/suspeição do juiz | Há causa de impedimento (art. 252) ou suspeição (art. 254)? | arts. 252, 254 CPP | Absoluta (impedimento) / relativa (suspeição) |

> **Registre o protesto.** Vício de instrução relativo (indeferimento de prova, ordem de atos) **preclui** se não houver **protesto consignado em ata/termo** no momento próprio (art. 571). Ao rastrear, anote **se a defesa protestou** — sem protesto, a nulidade relativa provavelmente já sanou (art. 572).

---

## FASE 6 — Debates / Alegações finais

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Alegações finais da defesa | A defesa apresentou alegações finais? Ausência = nulidade absoluta. | art. 403 CPP; Súmula 523/STF | Absoluta (ausência de defesa) |
| Prazo e forma | Prazos respeitados (orais/memoriais) e defesa teve oportunidade real? | arts. 403, 404 CPP | Relativa |
| Mutatio / emendatio libelli | Houve fato novo na instrução exigindo aditamento (art. 384) e observou-se o rito? | arts. 383, 384 CPP | Nulidade (surpresa/ampla defesa) |
| Manifestação sobre documentos juntados | A parte foi ouvida sobre documento novo juntado ao fim? | art. 479 CPP (júri); contraditório | Relativa |

> **Ausência de alegações finais da defesa** é o clássico caso de **nulidade absoluta** por violação da ampla defesa (defesa apenas formal ≈ ausência de defesa — Súmula 523/STF, conferir). Ponto de controle de alto valor: sempre checar se as finais da defesa constam dos autos.

---

## FASE 7 — Sentença

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Fundamentação | A sentença é fundamentada (não apenas remete à denúncia)? | CF art. 93, IX; art. 381 CPP | Absoluta (falta de motivação) |
| Correlação (congruência) | Condenou dentro dos limites da imputação (não por fato não descrito)? | arts. 383, 384 CPP | Nulidade |
| Dosimetria | As fases da dosimetria foram fundamentadas (circunstâncias válidas, não *bis in idem*)? | arts. 59, 68 CP | Ilegalidade (correção pela via recursal/HC) |
| Emendatio sem contraditório? | Redefiniu a capitulação sem observar o necessário (emendatio é lícita; mutatio exige aditamento)? | arts. 383, 384 CPP | Conferir |
| Detração na sentença | Considerou a detração (art. 387, §2º) para fixar regime? | art. 387, §2º CPP | Ilegalidade (correção) |
| Provas ilícitas na fundamentação | A condenação se apoia em prova ilícita/derivada? | art. 157 CPP; CF art. 5º, LVI | Absoluta / desentranhamento |

> Para revisar **dosimetria**, descreva o método e acione a skill de dosimetria / a `calculadora-dosimetria` — o cálculo de pena é determinístico e deve ser conferido lá, não estimado aqui.

---

## FASE 8 — Tribunal do Júri (procedimento especial)

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Pronúncia — excesso de linguagem | A pronúncia extrapolou o juízo de admissibilidade (eloquência acusatória)? | art. 413 CPP; Súmula 191/STJ (conferir) | Nulidade (influência sobre jurados) |
| Congruência pronúncia↔quesitos | Os quesitos correspondem ao pronunciado (nada além)? | arts. 476, 482 CPP | Nulidade (incongruência) |
| Desaforamento | Havia causa (parcialidade, ordem pública, segurança) e observou-se o rito? | arts. 427-428 CPP | Conferir |
| Quesitação (ordem e formulação) | Ordem do art. 483 respeitada, quesito genérico de absolvição presente, sem quesito complexo? | arts. 482-491 CPP | Nulidade (ver skill própria) |
| Decisão manifestamente contrária à prova | O veredicto é manifestamente contrário à prova dos autos? | art. 593, III, "d" CPP | Apelação (não nulidade) |
| Incomunicabilidade dos jurados | A incomunicabilidade foi assegurada? | art. 466, §1º CPP | Nulidade |

> **Guardrail do júri.** A quesitação e as nulidades próprias do plenário têm skill dedicada (`juri-quesitacao`) — esta grade apenas **sinaliza** o ponto de controle. Para formular/impugnar quesitos, use a skill específica. **Toda impugnação em plenário deve ser consignada em ata** (sob pena de preclusão — art. 571).

---

## FASE 9 — Recursos e coisa julgada

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Tempestividade | O recurso foi interposto no prazo? | prazos do CPP; `calculadora-tempestividade` | Preliminar de admissibilidade |
| Intimação da sentença/acórdão | Réu e defensor foram intimados corretamente (marco do prazo)? | arts. 392, 370 CPP | Nulidade / reabre prazo |
| *Reformatio in pejus* | O tribunal agravou a situação do réu em recurso exclusivo da defesa? | art. 617 CPP | Ilegalidade (vedada) |
| Supressão de instância | O tribunal decidiu matéria não apreciada em 1º grau? | devido processo | Nulidade |
| Deficiência de defesa recursal | Houve razões de recurso genéricas/ausentes (defesa inefetiva na fase)? | CF art. 5º, LV | Relativa/absoluta |
| Nulidade absoluta em HC | Persiste vício absoluto conhecível a qualquer tempo (mesmo após trânsito, via revisão criminal)? | art. 621 CPP | Absoluta (revisão criminal) |

> **Tempestividade** é determinística: descreva o marco (data da intimação, forma) e confirme na `calculadora-tempestividade` **[conferir/implementar com testes]** — não estime prazo "de cabeça".

---

## FASE 10 — Execução penal

| Ponto de controle | Pergunta-gatilho | Dispositivo | Classe preliminar |
|---|---|---|---|
| Guia de recolhimento | A execução foi instaurada com guia regular e cálculo de liquidação correto? | arts. 105-107 LEP | Ilegalidade (correção) |
| Falta grave — PAD e defesa | Reconheceu-se falta grave sem PAD e sem defesa técnica? | art. 59 LEP; Súmula 533/STJ (conferir) | Nulidade (contraditório) |
| Regressão sem oitiva | Houve regressão de regime sem oitiva prévia do apenado? | art. 118, §2º LEP | Nulidade |
| Benefícios negados sem fundamento | Indeferimento de benefício (progressão, livramento) sem fundamentação idônea? | art. 112 LEP; CF art. 93, IX | Ilegalidade |
| Exame criminológico imotivado | Exigiu exame criminológico sem decisão fundamentada? | SV 26/STF; Súmula 439/STJ (conferir) | Ilegalidade |

> Vícios de execução atacam-se por **agravo em execução** (art. 197 LEP) ou **HC**; para o mérito dos benefícios use as skills de execução (`execucao-progressao-regime`, livramento etc.).

---

## Teses e contra-teses (a lógica do "prejuízo" e da "preclusão")

- **Tese (defesa) — nulidade absoluta:** prejuízo é **presumido**, matéria de ordem pública, arguível **a qualquer tempo**, imune à preclusão. Aplica-se a violações de competência absoluta, imparcialidade (impedimento), contraditório, ampla defesa e fundamentação.
- **Contra-tese (acusação):** mesmo em nulidade dita absoluta, a jurisprudência por vezes **exige demonstração de prejuízo concreto** (relativização do *pas de nullité sans grief* — art. 563). **Antecipe** e demonstre o prejuízo efetivo sempre que possível, ainda que sustente ser absoluta.
- **Tese (defesa) — prova ilícita:** inadmissibilidade (CF art. 5º, LVI) + **desentranhamento** (art. 157) + **contaminação dos derivados** (frutos da árvore envenenada, art. 157, §1º).
- **Contra-tese (acusação):** **fonte independente** e **descoberta inevitável** (art. 157, §§1º-2º) purgam a ilicitude; sustentar que a prova teria sido obtida de outro modo.
- **Armadilha da preclusão (art. 571-572):** nulidade **relativa** não arguida no momento próprio **sana**. Por isso a grade cobra sempre: *houve protesto/registro em ata?* Sem isso, reposicione a tese (buscar enquadrar como absoluta, ou levar por HC/revisão se o vício comportar).
- **Quem deu causa não alega (art. 565):** cheque se o suposto vício foi provocado ou aceito pela própria defesa — nesse caso não se aproveita.

---

## Súmulas e dispositivos de apoio (todos sob o Citation Gate)

Cite com segurança os **dispositivos de lei** (CPP arts. 563-573, 157, 41, 395, 400, 403, 413, 483; CF art. 5º, LV, LVI, LXIII; art. 93, IX; LEP). Para **súmulas e precedentes**, confirme número e teor via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de usar — abaixo, apenas ponteiros de **tese** a verificar:

- **Súmula 523/STF** — no processo penal, a **falta** de defesa constitui nulidade absoluta, mas a sua **deficiência** só anula se houver prova de prejuízo. [conferir teor/vigência]
- **Súmula 533/STJ** — reconhecimento de falta grave depende de **PAD** com ampla defesa. [conferir]
- **Súmula 439/STJ + SV 26/STF** — exame criminológico exige **decisão fundamentada**. [conferir]
- **Súmula 191/STJ** — pronúncia e (a discussão sobre) competência do júri. [NAO VERIFICADO — confirmar número/teor pelo gate]
- **Súmula 52/STJ** — encerrada a instrução, fica superada a alegação de excesso de prazo da prisão. [NAO VERIFICADO — confirmar pelo gate]
- Teoria dos **frutos da árvore envenenada**, **fonte independente** e **descoberta inevitável** — art. 157, §§1º-2º CPP (dispositivo seguro; precedentes específicos pelo gate).

> Qualquer **número de HC/REsp/RE, informativo ou tema repetitivo** citado nesta análise deve ir marcado **[NAO VERIFICADO]** até passar pelo gate. Prefira **ensinar a tese e o dispositivo** a arriscar um acórdão.

---

## Erros comuns / checklist do rastreador

- [ ] Varreu **todas as fases** em ordem cronológica (não pulou investigação nem execução)?
- [ ] Para cada suspeita, registrou **dispositivo + fato nos autos + classe preliminar (abs/rel) + protesto/preclusão**?
- [ ] Classificou **prova ilícita** na trilha própria (art. 157 — desentranhamento), separada da lógica de nulidade de ato?
- [ ] Verificou, em cada vício **relativo**, se **houve protesto/registro em ata** no momento próprio (art. 571) — ou se **precluiu** (art. 572)?
- [ ] Demonstrou (ou anotou como demonstrar) o **prejuízo concreto** (art. 563), mesmo nas absolutas?
- [ ] Mapeou o **efeito em cascata** (art. 573) — o que mais cai junto com o ato nulo?
- [ ] Checou **quem deu causa** ao vício (art. 565) antes de alegar?
- [ ] Conferiu **prescrição/extinção da punibilidade** (ordem pública, a qualquer tempo)?
- [ ] Encaminhou a **lista bruta** ao `mapa-nulidades-processuais` para consolidação e estratégia (não parou na detecção)?
- [ ] **Nenhum número de acórdão/súmula** foi para a peça sem passar por `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Confundir esta **grade de rastreio** com o **diagnóstico final** — aqui só se detecta; a estratégia é do `mapa-nulidades-processuais`.
- Alegar nulidade relativa **sem protesto tempestivo** (já precluiu — art. 572).
- Afirmar nulidade **sem apontar o prejuízo** (art. 563 derruba a tese).
- Tratar **prova ilícita** como nulidade de ato (é inadmissibilidade + desentranhamento, art. 157).
- Anular o processo inteiro por vício de **inquérito** que não migrou para a condenação (IP é peça informativa).
- Inventar número de HC/REsp/súmula "de memória" — sanção real por jurisprudência fabricada por IA.
- Ignorar o **efeito em cascata** (art. 573) e pedir só a nulidade do ato isolado, perdendo os atos dependentes.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Esta grade é ferramenta de **apoio à triagem** de vícios — não substitui a leitura integral dos autos nem o juízo do(a) advogado(a)/defensor(a) responsável. Toda conclusão é **hipótese a confirmar**.
- **Citation Gate inegociável.** Dispositivos de lei e súmulas notórias podem ser citados com certeza; **todo precedente específico** (número, informativo, tema) passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes da peça. Na dúvida, **omitir vence inventar**.
- **Polo e ética.** Skill orientada à **defesa** (advocacia/Defensoria — EAOAB e CED; LC 80/94). Se operada pelo **Ministério Público/assistente de acusação**, o roteador deve **confirmar o polo** e observar a ética própria (CNMP): o MP fiscaliza a legalidade, não "explora" nulidades pró-réu. Provimento 205/2021 da OAB aplica-se à comunicação/atuação da advocacia.
- **Roteamento.** Saída natural desta skill = **lista bruta** → `mapa-nulidades-processuais` (consolidação/estratégia). Cálculos determinísticos (prescrição, tempestividade, dosimetria) vão para as calculadoras próprias, não são estimados aqui.

**Padrão de redação:** ao converter os achados em peça (preliminares de nulidade, HC, resposta à acusação, apelação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).
