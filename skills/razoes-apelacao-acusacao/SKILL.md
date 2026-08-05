---
name: razoes-apelacao-acusacao
description: >-
  Use ao interpor e arrazoar APELAÇÃO pela ACUSAÇÃO (Ministério Público ou assistente de acusação)
  contra sentença absolutória, contra pena ou regime insuficientes, ou contra qualificadora/causa de
  aumento afastada — pedido de reforma para condenar, majorar a pena, agravar o regime ou
  restabelecer capitulação (CPP, arts. 593, I e III, e 598). Gatilhos: apelação do MP, apelação da
  acusação, recurso contra absolvição, majoração… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-razoes-apelacao-acusacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["razoes-apelacao-acusacao", "razoes apelacao", "apelacao acusacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Razões de Apelação da Acusação (CPP, arts. 593, I e III, e 598)

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

Esta skill orienta a elaboração das **razões de apelação interpostas pela acusação** — o Ministério Público ou o assistente de acusação — que buscam a **reforma da sentença para pior ao réu**: condenar quem foi absolvido, majorar a pena aquém do devido, agravar o regime fixado, restabelecer qualificadora ou causa de aumento afastada, ou corrigir a capitulação. É a peça recursal do **recorrente-acusação**, logicamente inversa à da apelação defensiva.

> **⚠️ Skill do POLO ACUSATÓRIO.** Esta skill **só se aplica a quem atua na acusação** — Ministério Público ou assistente de acusação (art. 268 CPP). O chefe-roteador **deve conferir o polo do usuário** (campo `polo` em `company.md`) **antes de sugeri-la**: se o escritório é de defesa, a peça cabível é a `apelacao` (defensiva) ou as `contrarrazoes-apelacao` (respondendo ao recurso do MP), **não** esta. Advogado de defesa jamais recorre para agravar a situação do próprio cliente.

> **Lição central:** a acusação recorre para **piorar** a situação do réu — e o tribunal, no seu recurso, **pode** fazê-lo, porque a vedação da *reformatio in pejus* (art. 617 CPP) protege **apenas o réu**, não a acusação. Mas o efeito devolutivo é **limitado pelas razões**: o que não se pediu expressamente não sobe. **Delimite com precisão o que se ataca** — absolvição, dosimetria, regime, qualificadora — e formule pedido certo, sob pena de o tribunal nada poder reformar por falta de devolução.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 593, 598, 600, 609 e 617 do CPP e o teor atual da Súmula 713/STF. Confira também súmulas, temas repetitivos e eventual *overruling* via a skill `jurisprudencia-stj-stf` antes de fundamentar a peça — **jurisprudência inventada por IA gera sanção real**. A base normativa desta skill é o CPP vigente.

## Quando cabe a apelação da acusação

A apelação é o recurso contra a **sentença** (definitiva ou com força de definitiva). Pela acusação, os cenários típicos são:

1. **Sentença absolutória** (art. 386 CPP) → o MP recorre para **condenar**. Fundamento: art. 593, I (procedimento comum) ou III, "a"/"d" (júri).
2. **Sentença condenatória com pena aquém do devido** → recorre para **majorar** (erro de dosimetria, art. 59 e 68 CP; circunstância judicial, agravante, causa de aumento indevidamente desprezada).
3. **Regime inicial brando demais** → recorre para **agravar o regime** (art. 33, §2º e §3º, CP), quando a fixação contraria a pena e as circunstâncias.
4. **Qualificadora, causa de aumento ou majorante afastada** → recorre para **restabelecê-la**.
5. **Desclassificação indevida** → recorre para restaurar a capitulação da denúncia.
6. **Absolvição sumária ou impronúncia** (esta última desafia RESE ou apelação conforme o caso — confira o rito) → ver skill própria; aqui tratamos da apelação da **sentença**.

> **No júri (art. 593, III):** as hipóteses são **taxativas** — nulidade posterior à pronúncia ("a"); sentença do juiz-presidente contrária à lei ou à decisão dos jurados ("b"); erro/injustiça na aplicação da pena ou medida de segurança ("c"); **decisão dos jurados manifestamente contrária à prova dos autos** ("d"). Pela alínea "d", provido o recurso, o tribunal **não absolve nem condena** — determina **novo júri** (art. 593, §3º), e **só uma vez** por esse fundamento. Ver a skill `juri-plenario-debates` e `juri-quesitacao` para o contexto de plenário.

## Base legal

- **Art. 593, I, CPP** — cabimento da apelação contra sentença **definitiva de condenação ou absolvição** proferida por juiz singular.
- **Art. 593, III, CPP** — apelação contra as **decisões do Tribunal do Júri** (alíneas "a" a "d"), com devolutividade **restrita** ao fundamento invocado.
- **Art. 593, §3º e §4º, CPP** — no júri, provimento pela alínea "d" → **novo julgamento** (uma só vez); vedação da apelação quando cabível outro recurso.
- **Art. 598, CPP** — legitimidade do **ofendido/assistente de acusação** para apelar, ainda que não se tenha habilitado, **nos casos em que o MP não recorrer**; prazo do **art. 598, parágrafo único: 15 dias** contados do encerramento do prazo do MP (prazo **supletivo**).
- **Art. 600, CPP** — apresentação das **razões** (prazo, forma; §4º permite arrazoar direto no tribunal).
- **Art. 617, CPP** — o tribunal não poderá agravar a pena quando **somente o réu** houver apelado (*reformatio in pejus*) — **a contrario sensu**, havendo recurso da **acusação**, a reforma para pior é possível nos limites do que se devolveu.
- **Súmula 713/STF** — o efeito devolutivo da apelação **contra decisões do júri** é **adstrito aos fundamentos da sua interposição** (delimite a alínea e o ponto).
- **Prazo de interposição:** **5 dias** (art. 593, *caput*) — a interposição precede as razões; ver "Prazos" abaixo.

## Efeito devolutivo *pro societate* e seus limites

A apelação da acusação devolve ao tribunal a matéria **impugnada**. Três balizas governam o que pode ser reformado:

1. **Tantum devolutum quantum appellatum.** O tribunal só conhece do que foi **impugnado**. Apelação genérica ("reforma da sentença") é frágil: **especifique** o capítulo atacado (mérito, dosimetria, regime, qualificadora). No júri, a **Súmula 713/STF** torna isso ainda mais rígido — a devolução adstringe-se à **alínea** e ao **fundamento** invocados.
2. **Reformatio in pejus não protege a acusação (art. 617).** Recorrendo o MP/assistente para piorar, o tribunal **pode** agravar a pena, o regime, restabelecer qualificadora. A vedação do art. 617 só barra o agravamento quando **somente o réu** recorreu. Cuidado: em recurso **exclusivo da defesa**, é vedado piorar — logo, a acusação que quer o agravamento **precisa recorrer**; não basta contra-arrazoar.
3. **Matéria de ordem pública e nulidades absolutas** podem ser conhecidas de ofício, mas **não para prejudicar o réu** além do devolvido — o norte protetivo permanece. Não confie em cognição de ofício para suprir pedido que a acusação deixou de formular.

> **Erro fatal comum:** o MP concorda com a absolvição em 1º grau (não recorre) e depois, nas contrarrazões ao recurso da defesa, tenta agravar. **Não sobe.** Sem recurso próprio da acusação, o tribunal está preso à vedação da *reformatio in pejus*. **Se quer piorar, apele — tempestivamente.**

## Prazos — interposição e razões (decorar)

| Ato | Prazo | Base | Observação |
|---|---|---|---|
| **Interposição** (MP) | **5 dias** | art. 593, *caput* | por petição ou termo nos autos |
| **Razões** (MP) | **8 dias** (crime) / 3 dias (contravenção) | art. 600 | após intimação; §4º: pode arrazoar no tribunal |
| **Apelação do assistente** habilitado | **5 dias** | art. 593 c/c 598 | conta da intimação do assistente |
| **Apelação supletiva do ofendido/assistente NÃO habilitado** | **15 dias** | **art. 598, p.u.** | conta do **fim do prazo do MP** — só se o MP **não** recorrer |
| **Razões do assistente** | 8 dias (crime) | art. 600 | segue a regra geral |

> **A apelação supletiva do assistente (art. 598, p.u.) — ponto que quase nenhuma peça trata.** O ofendido, seu representante legal ou herdeiro (art. 31 CPP) pode apelar **mesmo sem ter se habilitado** como assistente, **desde que o MP não tenha apelado**, no prazo de **15 dias** contados do **término do prazo recursal do MP**. É recurso **subsidiário**: pressupõe a inércia ministerial. Se o MP apelou, some a legitimação supletiva (o assistente já habilitado pode aderir/recorrer no seu próprio prazo). **Confira sempre se o MP recorreu antes de manejar a supletiva** — e a contagem do *dies a quo* (fim do prazo do MP, não da intimação do ofendido).

## Estrutura da peça (razões de apelação)

As **razões** são endereçadas ao **tribunal** (câmara/turma criminal), embora protocoladas no juízo *a quo*. Estrutura persuasiva:

1. **Endereçamento** — ao Tribunal (Egrégio Tribunal de Justiça / TRF), pelas razões que seguem; a petição de **interposição** vai ao juízo de 1º grau.
2. **Síntese do julgado e da irresignação** — o que a sentença decidiu e por que se recorre (delimitar o capítulo atacado).
3. **Tempestividade e cabimento** — 5 dias (interposição); enquadramento no art. 593, I ou III; legitimidade (MP art. 257; assistente art. 598).
4. **Das razões de reforma** (mérito recursal) — divididas por tópico atacado:
   - **a) Do mérito condenatório** (se absolvição): reexame da prova, demonstração de que os elementos dos arts. 155/158/159 CPP autorizam a condenação; afastamento do *in dubio pro reo* por prova robusta.
   - **b) Da dosimetria** (art. 59 e 68 CP): circunstância judicial desfavorável desprezada; agravante não valorada; causa de aumento afastada sem fundamento; fração indevida.
   - **c) Do regime** (art. 33 CP): incompatibilidade do regime fixado com a pena e as circunstâncias.
   - **d) Da qualificadora / causa de aumento**: prova de sua incidência, indevidamente afastada.
5. **Do pedido** — provimento para **condenar** / **majorar a pena para X** / **fixar regime mais gravoso** / **restabelecer a qualificadora**; no júri (alínea "d"), **novo julgamento** (art. 593, §3º).
6. **Fecho** — data, assinatura, cargo/OAB.

> **Delimitação = poder de reforma.** Cada tópico do pedido é uma "porta" que a acusação abre para o tribunal reformar. O que não for pedido, **não pode** ser reformado em prejuízo do réu. Peça expresso: pena-alvo, regime-alvo, qualificadora a restabelecer.

## Teses da acusação (recorrente) e contra-teses da defesa (recorrida)

| Tese da ACUSAÇÃO (pedir reforma para pior) | Contra-tese da DEFESA (manter a sentença) |
|---|---|
| Prova robusta autoriza condenação; *in dubio pro reo* não se aplica diante de conjunto coeso | Absolvição por insuficiência de prova (art. 386, VII); dúvida razoável favorece o réu |
| Dosimetria subvalorou circunstâncias judiciais / agravantes (art. 59, 61 CP) | Pena adequada e fundamentada; vedado bis in idem; discricionariedade motivada do juiz |
| Regime abrandado incompatível com a pena/circunstâncias (art. 33, §3º) | Regime fixado conforme Súmulas 440/STJ e 718-719/STF; fundamentação idônea |
| Qualificadora/majorante provada foi afastada sem base | Ausência de prova da qualificadora; **in dubio pro reo** também alcança circunstâncias |
| Desclassificação indevida; restabelecer a capitulação da denúncia | Correta emendatio/mutatio; fato provado corresponde à capitulação da sentença |
| Júri: decisão manifestamente contrária à prova (art. 593, III, "d") → novo júri | Soberania dos veredictos; decisão amparada em **uma** das versões dos autos (não cabe "d") |

> **Cautela no júri (alínea "d").** "Manifestamente contrária à prova" é padrão **rigoroso**: se a decisão dos jurados encontra apoio em **qualquer** versão verossímil dos autos, o recurso **não** vinga — a soberania dos veredictos (CF, art. 5º, XXXVIII, "c") prevalece. A acusação deve demonstrar **dissociação total** entre o veredicto e a prova, não mera preferência por outra leitura. E lembre: provido, é **novo júri**, **uma única vez** por esse fundamento.

## Súmulas e dispositivos aplicáveis (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 713/STF** — efeito devolutivo da apelação contra o júri **adstrito aos fundamentos** da interposição (delimite a alínea).
- **Art. 617 CPP** — *reformatio in pejus* veda agravar quando **só o réu** apelou; **a contrario**, o recurso da acusação autoriza a reforma para pior nos limites do devolvido.
- **Súmula 160/STF** — nulidade **não arguida** pela acusação na apelação **não pode** ser reconhecida pelo tribunal **em desfavor do réu** (reforço da delimitação — a acusação precisa suscitar).
- **Art. 59 e 68 CP** — parâmetros da dosimetria (base para o pedido de majoração).
- **Art. 33, §2º e §3º, CP** — regimes e critérios (base para o pedido de agravamento de regime).
- **Súmulas 440/STJ, 718 e 719/STF** — vedam regime **mais gravoso** sem motivação idônea; a acusação, ao pedir agravamento, deve **fornecer** essa motivação concreta (a virada do argumento). [NÃO VERIFICADO — confirmar número e teor via `jurisprudencia-stj-stf`.]
- Qualquer **precedente específico** (número de HC, REsp, RE, informativo, tema repetitivo) sobre extensão do efeito devolutivo *pro societate*, dosimetria ou alínea "d" do art. 593 → **[NÃO VERIFICADO]**: passar obrigatoriamente pela skill `jurisprudencia-stj-stf` antes de citar. **Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.**

## Erros comuns / checklist final

- [ ] **Polo conferido?** O escritório atua na **acusação** (MP/assistente)? Se é defesa, esta skill **não** se aplica.
- [ ] **Recurso próprio interposto** (não apenas contrarrazões)? Sem apelação da acusação, o tribunal **não** pode agravar (art. 617).
- [ ] **Tempestividade:** interposição em **5 dias**; razões em **8 dias** (crime)? Assistente supletivo em **15 dias** do fim do prazo do MP (art. 598, p.u.), **só se o MP não recorreu**?
- [ ] **Capítulo atacado delimitado** (absolvição / dosimetria / regime / qualificadora)? Pedido **certo e específico** (pena-alvo, regime-alvo)?
- [ ] **No júri:** enquadrou a **alínea** correta do art. 593, III? Se "d", pediu **novo júri** (não condenação direta) e demonstrou decisão **manifestamente** contrária à prova?
- [ ] **Súmula 713/STF** observada (devolução adstrita ao fundamento) na apelação contra o júri?
- [ ] **Motivação concreta** para o agravamento de regime (não bastam alegações genéricas — Súmulas 440/718/719)?
- [ ] **Citações verificadas** via `jurisprudencia-stj-stf`? Nenhum acórdão citado de memória?
- [ ] **Revisão humana** do promotor/procurador ou do advogado do assistente antes do protocolo?

**Anti-padrões (evitar):**
- Deixar de recorrer e tentar agravar a pena nas **contrarrazões** — não sobe (art. 617).
- Apelação **genérica** sem delimitar o capítulo — o tribunal nada reforma por falta de devolução.
- No júri, pedir **condenação direta** pela alínea "d" (o correto é **novo júri**, art. 593, §3º) ou insistir em "d" quando há versão nos autos que ampara o veredicto (fere a soberania).
- Confundir o prazo supletivo do assistente (**15 dias**, art. 598 p.u.) com o prazo comum, ou manejá-lo **apesar** de o MP ter recorrido.
- Pedir agravamento de regime **sem** motivação concreta (esbarra nas Súmulas 440/718/719).
- Citar precedente de dosimetria ou de efeito devolutivo **sem** passar pelo Citation Gate.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Esta peça é **hipótese de trabalho** — a revisão final e a responsabilidade pelo protocolo são do **membro do Ministério Público** (quando o polo é o MP) ou do **advogado do assistente de acusação**. O material não substitui o juízo técnico.
- **Ética por polo.** Atuando o **Ministério Público**, regem os deveres do **CNMP** e da LC 75/93 / Lei 8.625/93 (atuação com independência e busca da correta aplicação da lei — inclusive recorrendo **a favor** do réu quando for o caso, art. 385 CPP e a posição institucional de custos legis). Atuando o **assistente de acusação por advogado**, regem o **Estatuto da OAB, o CED e o Provimento 205/2021** (publicidade e captação).
- **Citation Gate.** Nenhuma súmula, tese ou precedente entra na peça sem verificação via `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** — melhor faltar precedente do que citar julgado inexistente.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
