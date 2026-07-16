---
name: acompanhamento-oitiva-testemunhas-inquerito
description: >-
  Use ao ACOMPANHAR a oitiva de testemunhas, vítima ou corréus DURANTE o inquérito policial —
  atuação da defesa em ato SEM contraditório pleno (EAOAB, art. 7º, XXI; CPP, art. 6º). Orienta
  requerer ciência prévia e presença, apresentar quesitos/perguntas por intermédio da autoridade,
  pedir consignação de contradições no termo, mapear o depoimento policial para impeachment futuro
  (CPP, art. 155) e documentar cerceamento… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, inquerito, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acompanhamento-oitiva-testemunhas-inquerito"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acompanhamento-oitiva-testemunhas-inquerito", "acompanhamento oitiva", "testemunhas inquerito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Acompanhamento de Oitiva de Testemunhas na Fase Policial (CPP, art. 6º; EAOAB, art. 7º, XXI)

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

Esta skill orienta a **atuação da defesa que acompanha a oitiva de testemunhas, da vítima ou de corréus durante o inquérito policial**. Diferente da audiência de instrução em juízo, aqui **não há contraditório pleno**: quem preside e dirige o ato é a **autoridade policial** (CPP, art. 6º), as perguntas passam **por intermédio dela** e o depoimento colhido é, em regra, **elemento informativo** — não prova apta, por si só, a condenar (CPP, art. 155). O papel do advogado é participar dentro dos limites legais, **preservar o material para uso futuro** e **documentar** eventual cerceamento.

> **Lição central:** na delegacia você **não** interroga diretamente a testemunha como faz no art. 212 do CPP em juízo. O que a defesa faz de mais valioso aqui não é "ganhar" o depoimento — é **fixar o depoimento por escrito** (com contradições e lacunas consignadas no termo) para **contraditá-lo depois**, quando a testemunha for ouvida em juízo sob o crivo do art. 212. O IP colhe insumo; o impeachment se decide na AIJ.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 7º, XXI, do EAOAB** (introduzido pela **Lei 13.245/2016**) e dos **arts. 6º, 14 e 155 do CPP**, além do alcance atual do direito de presença do advogado no IP. Súmulas, temas e overruling — inclusive sobre o valor do reconhecimento e do depoimento policial — devem passar pela skill `jurisprudencia-stj-stf` antes de fundamentar qualquer requerimento ou peça.

## O que muda em relação à oitiva em juízo

| Aspecto | Oitiva no INQUÉRITO (esta skill) | Oitiva em JUÍZO (skill `audiencia-inquiricao-testemunhas`) |
|---|---|---|
| Quem preside | Autoridade policial (CPP, art. 6º) | Juiz |
| Quem pergunta | Partes **por intermédio** da autoridade | Partes **diretamente** (CPP, art. 212 — *cross-examination*) |
| Contraditório | Diferido / não pleno | Pleno e imediato |
| Compromisso/contradita | Não há o rito dos arts. 203/214 na forma judicial | Contradita **antes** do compromisso (arts. 214, 203) |
| Valor probatório | Elemento informativo (CPP, art. 155) | Prova produzida sob contraditório |
| Papel da defesa | Presença, quesitos, **consignação**, documentação | Inquirição direta e confronto |

➡️ **Consequência prática:** tudo que você não conseguir extrair na delegacia, você **reserva** para a AIJ. Mas tudo que a testemunha **disser na delegacia** e depois **mudar** em juízo vira munição de impeachment — por isso a consignação fiel do termo é o produto mais importante do ato.

## Base legal

- **CPP, art. 6º** — atos da autoridade policial na apuração da infração (ouvir ofendido e testemunhas; presidir o ato).
- **EAOAB (Lei 8.906/94), art. 7º, XXI (red. Lei 13.245/2016)** — direito do advogado de **assistir** a seus clientes investigados durante a apuração de infrações, **sob pena de nulidade**, podendo **apresentar razões e quesitos**.
- **CPP, art. 155** — o juiz não pode fundamentar a condenação **exclusivamente** em elementos colhidos na investigação, não submetidos ao contraditório (salvo provas cautelares, não repetíveis e antecipadas).
- **CPP, art. 14** — o ofendido ou o indiciado podem **requerer diligência**, realizada ou não a juízo da autoridade.
- **CPP, arts. 202-211** — regime das testemunhas; aplicação **subsidiária** e adaptada à fase policial (o rito é o do IP, não o judicial).
- **CF, art. 5º, LV e LXIII** — ampla defesa; direito ao silêncio e a não se autoincriminar (relevante quando o "ouvido" é o próprio investigado/corréu).

## Antes do ato — preparação e acesso

1. **Requerer ciência prévia dos atos designados.** Peça, por petição nos autos do IP, a **intimação da defesa** sobre a data das oitivas, invocando o **art. 7º, XXI, do EAOAB**. A ausência de ciência, quando o cliente é investigado, é fundamento de nulidade a ser documentado.
2. **Garantir acesso aos autos já documentados.** Vista dos elementos **já documentados** no IP é direito do advogado (Súmula Vinculante 14/STF — *conferir vigência via* `jurisprudencia-stj-stf`). Sigilo não alcança o que já está formalizado.
3. **Definir o objeto do acompanhamento.** Você acompanha porque (a) é a defesa do investigado e a testemunha o incrimina; (b) representa a vítima/assistente; ou (c) quer preservar versão favorável antes que se perca. O objetivo muda a técnica.
4. **Preparar os quesitos por escrito.** Formule perguntas **claras, fechadas e encadeadas**, para serem **apresentadas à autoridade** (art. 7º, XXI). Antecipe que a autoridade pode **indeferir** perguntas — por isso leve-as por escrito, para pedir que o **indeferimento seja consignado**.
5. **Mapear o que a testemunha pode saber.** Alinhe as perguntas à **teoria do caso**: fixar tempo, lugar, distância, iluminação, ângulo de visão, tempo de observação, relação com as partes — os fatores clássicos que fragilizam reconhecimentos e percepções.

## Durante o ato — o que a defesa PODE fazer

- **Estar presente** e registrar a presença no termo (nome, OAB, na qualidade de defensor de quem).
- **Apresentar quesitos/perguntas por intermédio da autoridade** (art. 7º, XXI). Não é inquirição direta: você **sugere** a pergunta; a autoridade a formula (ou não).
- **Requerer a consignação, no termo, de contradições, omissões e hesitações** da testemunha — este é o ponto nevrálgico (ver seção seguinte).
- **Pedir esclarecimento** quando a pergunta da autoridade for sugestiva/indutora, e requerer que a **objeção conste do termo**.
- **Requerer diligências** correlatas (art. 14) — juntada de documento, acareação, nova oitiva.
- **Zelar pelos direitos do ouvido**, sobretudo se for o **próprio investigado ou corréu**: direito ao silêncio e a não se autoincriminar (CF, art. 5º, LXIII), presença do advogado, ausência de coação. Aqui a técnica se aproxima da skill de interrogatório na investigação.

### O que a defesa NÃO faz (e por que)
- **Não inquire diretamente** a testemunha (isso é do juízo, art. 212). Insistir em conduzir o ato pode ser indeferido licitamente.
- **Não "contradita" nos moldes do art. 214** com o rito judicial — mas **pode e deve registrar**, no termo, o vínculo da testemunha com as partes (amizade íntima, inimizade, interesse), para explorar em juízo.
- **Não transforma o ato em julgamento antecipado.** O objetivo é insumo e preservação, não veredicto.

## A técnica central — CONSIGNAÇÃO no termo

A consignação é o coração desta atuação. O que **não** está no termo, para efeitos futuros, **não aconteceu**.

- **Contradições internas:** peça para consignar quando a testemunha se contradiz dentro do próprio depoimento ("primeiro disse X, agora diz Y").
- **Divergência com outros elementos:** registre o descompasso entre o dito e o que já consta dos autos (boletim, laudo, outra oitiva).
- **Fonte do conhecimento:** faça consignar se o relato é **de ouvir dizer** (hearsay) — testemunha indireta, que não presenciou.
- **Condições de percepção:** consigne distância, iluminação, duração da observação, uso de álcool/drogas, estado emocional — tudo que relativize a percepção.
- **Indução da autoridade:** se a pergunta foi **sugestiva** ou o reconhecimento foi feito sem o rito do art. 226 do CPP, requeira que a **irregularidade e a objeção da defesa** constem do termo.
- **Indeferimento de perguntas:** se a autoridade **recusar** um quesito da defesa, peça que **a pergunta recusada e o indeferimento** sejam transcritos — isso preserva a alegação de cerceamento.
- **Recuse assinar sem ressalva:** se algo relevante foi omitido do termo, faça constar a **ressalva** antes de assinar (ou registre a recusa fundamentada).

> **Regra de ouro:** requerimento + resposta da autoridade **sempre no termo**. Sem registro, não há como demonstrar o cerceamento nem alimentar o impeachment. O termo é a sua ata.

## Depois do ato — do IP para o processo

1. **Arquivar o termo e anotar os pontos de impeachment.** Monte uma **tabela de divergências** (o que a testemunha disse na delegacia × o que se espera/consta) para usar no confronto do art. 212 em juízo.
2. **Bloquear o uso condenatório isolado (art. 155).** Se o depoimento policial não for repetido em juízo, sustente que **não serve, sozinho, para condenar** — só provas cautelares, não repetíveis e antecipadas escapam da regra.
3. **Requerer a repetição em juízo** das oitivas relevantes, para submetê-las ao contraditório (e ao seu confronto).
4. **Explorar o reconhecimento viciado.** Se houve reconhecimento na delegacia **sem** o procedimento do **art. 226 do CPP**, prepare a tese de fragilidade/nulidade do reconhecimento (tema sensível na jurisprudência recente — *conferir via* `jurisprudencia-stj-stf`).
5. **Levar o cerceamento documentado para a via própria** (alegações, resposta à acusação, HC), se a negativa de presença/quesitos violou o art. 7º, XXI, do EAOAB.

## Teses e contra-teses

**Teses da defesa (do investigado)**
- **Nulidade por cerceamento (art. 7º, XXI, EAOAB):** negada a ciência/presença/apresentação de quesitos ao defensor do investigado, o ato é nulo — desde que **documentado** e demonstrado o **prejuízo** (CPP, art. 563 — *pas de nullité sans grief*).
- **Impeachment na AIJ:** a divergência entre o depoimento policial e o judicial abala a credibilidade da testemunha (a ser explorado no art. 212).
- **Vedação da condenação isolada (art. 155):** elemento do IP não repetido em juízo não sustenta condenação sozinho.
- **Reconhecimento fora do art. 226:** reconhecimento na fase policial sem o rito legal é frágil e pode contaminar a prova (linha jurisprudencial em evolução — verificar).

**Contra-teses (acusação) a antecipar**
- O IP prescinde de contraditório pleno; a nulidade do art. 7º, XXI, exige **prejuízo concreto**, não presumido.
- O depoimento policial **ratificado** em juízo, ou **corroborado** por outras provas, é validamente valorável.
- Meras irregularidades no termo, sem prejuízo, não anulam o ato (art. 563).

## Súmulas e dispositivos relevantes (conferir vigência via `jurisprudencia-stj-stf`)

- **CPP, art. 155** — vedação de condenação fundada **exclusivamente** em elementos do inquérito.
- **CPP, art. 226** — procedimento legal do **reconhecimento de pessoas** (parâmetro para atacar reconhecimentos viciados na delegacia).
- **Súmula Vinculante 14/STF** — direito de acesso do defensor aos elementos **já documentados** no IP. [Verificar redação e alcance via `jurisprudencia-stj-stf`.]
- **Jurisprudência sobre o valor do reconhecimento e do depoimento de policiais** — há evolução recente relevante no STJ/STF. **Não cite número de HC/REsp/tema de memória.** [NÃO VERIFICADO] — confirme obrigatoriamente via `jurisprudencia-stj-stf` antes de usar qualquer precedente específico.

> **Citation Gate:** dispositivos de lei (CPP, EAOAB, CF) podem ser citados diretamente. **Qualquer precedente específico** (número de acórdão, informativo, tema repetitivo) só entra na peça **depois** de conferido em `jurisprudencia-stj-stf`. Melhor faltar precedente do que citar julgado inexistente.

## Erros comuns (anti-padrões)

- **Tratar o ato como AIJ:** tentar inquirir diretamente a testemunha e "ganhar" o depoimento na delegacia — não é o rito (art. 212 é do juízo).
- **Não consignar nada:** sair da oitiva sem contradições/objeções no termo — perde-se o único produto que importava.
- **Deixar o indeferimento de perguntas "no ar":** não exigir que a pergunta recusada e a negativa constem do termo — inviabiliza a tese de cerceamento.
- **Confiar no depoimento policial como se fosse prova:** ignorar o art. 155 e não requerer a repetição em juízo.
- **Aceitar reconhecimento informal:** não impugnar reconhecimento feito sem o art. 226 do CPP.
- **Assinar o termo sem ler/sem ressalva:** validar registro incompleto ou distorcido.
- **Citar precedente de memória:** arriscar número de acórdão sem passar pelo gate — risco ético e de credibilidade.

## Checklist final

- [ ] **Ciência prévia** dos atos designados requerida (art. 7º, XXI, EAOAB) e documentada?
- [ ] **Acesso aos autos já documentados** obtido (SV 14/STF — conferir)?
- [ ] **Quesitos por escrito** preparados e apresentados por intermédio da autoridade?
- [ ] **Presença da defesa** registrada no termo (nome, OAB, qualidade)?
- [ ] **Contradições, omissões e condições de percepção** consignadas no termo?
- [ ] **Perguntas indeferidas** e a negativa da autoridade transcritas no termo?
- [ ] **Vínculo da testemunha** com as partes (amizade/inimizade/interesse) registrado?
- [ ] **Reconhecimento** aferido quanto ao **art. 226 do CPP** (e impugnado se irregular)?
- [ ] **Termo lido antes de assinar**, com **ressalva** quando incompleto?
- [ ] **Tabela de impeachment** montada para a futura oitiva em juízo (art. 212)?
- [ ] **Requerida a repetição em juízo** das oitivas relevantes (art. 155)?
- [ ] **Cerceamento** (se houve) documentado para a via própria (resposta à acusação/HC)?
- [ ] **Precedentes** conferidos via `jurisprudencia-stj-stf` antes de citar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação do acompanhamento e à documentação do ato; **não substitui** o juízo do profissional presente à oitiva nem a leitura do termo concreto. A responsabilidade pela atuação é sempre do advogado (CED/OAB, art. 2º).
- **Ética conforme o polo:** advocacia — EAOAB + **Provimento 205/2021** da OAB; Ministério Público — CNMP; Defensoria — LC 80/94. Esta skill é escrita da perspectiva da **defesa** que acompanha a oitiva; o(a) profissional deve adaptar ao seu polo e às suas prerrogativas.
- **Verificação de citações:** nenhuma súmula, tese ou precedente citado de memória — tudo passa pela skill `jurisprudencia-stj-stf` antes do uso (há sanções reais por jurisprudência inventada por IA).
- **Padrão de redação:** ao converter o material em peça (petição de ciência, requerimento de diligência, arguição de nulidade, resposta à acusação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão.
