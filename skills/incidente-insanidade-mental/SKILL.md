---
name: incidente-insanidade-mental
description: >-
  Use ao suscitar dúvida sobre a higidez mental do acusado — requerimento de instauração do
  incidente de insanidade mental (CPP, arts. 149 a 154), nomeação de curador, suspensão do processo,
  quesitos ao perito psiquiatra, inimputabilidade e semi-imputabilidade (art. 26, caput e parágrafo
  único, CP), absolvição imprópria com medida de segurança e insanidade superveniente (CPP 152 e
  154; LEP 183). Gatilhos: incidente de… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-incidente-insanidade-mental"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["incidente-insanidade-mental", "incidente insanidade", "insanidade mental"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Incidente de Insanidade Mental (CPP, arts. 149 a 154)

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

Esta skill orienta a **instauração e a condução do incidente de insanidade mental** na persecução penal: o requerimento fundado em dúvida razoável sobre a higidez mental do acusado, a nomeação de curador, a suspensão do processo, os **quesitos ao perito psiquiatra**, a leitura do laudo (inimputabilidade × semi-imputabilidade) e o manejo dos desfechos — absolvição imprópria com medida de segurança, redução de pena do semi-imputável e insanidade **superveniente** ao fato (CPP 152) ou à condenação (CPP 154). Cobre a **fase de conhecimento**; a execução da medida de segurança (desinternação, cessação de periculosidade, limite temporal, vaga em HCTP) está na skill `medida-seguranca-desinternacao` — fundamente o incidente aqui, execute a MS lá.

> **Lição central:** inimputabilidade **não se sustenta sem laudo** — a prova é técnica, não testemunhal; sem o incidente, a tese morre por falta de lastro. Mas a ordem estratégica é inegociável: **a absolvição própria vem antes da imprópria.** Sustente primeiro as teses de mérito (negativa de autoria, legítima defesa, insuficiência probatória), que soltam o cliente sem sanção; a inimputabilidade, que desagua em medida de segurança, entra **subsidiária**.

> **Cautela de vigência:** confira a redação vigente dos arts. 149 a 154 do CPP, do art. 26 do CP e do art. 183 da LEP via agente `lei-e-sumula`. Precedente atual (contornos da "dúvida razoável", vedação de condução coercitiva ao exame, duração da suspensão do art. 152) **somente** após pesquisa via `jurisprudencia-stj-stf`; o que não se confirmar, marque **[NÃO VERIFICADO]**.

## O instituto e a base legal

O Brasil adota o **critério biopsicológico** da imputabilidade (art. 26, CP): não basta o diagnóstico (causa biológica) — é preciso que, **ao tempo da ação ou omissão** (teoria da atividade, art. 4º, CP), a condição tenha retirado ou reduzido a capacidade de **entender** o caráter ilícito do fato ou de **determinar-se** conforme esse entendimento (consequência psicológica). O incidente dos arts. 149 a 154 do CPP é o instrumento processual que produz essa prova: **exame médico-legal**, em auto **apartado** (art. 153), com **curador** nomeado e processo **suspenso** (art. 149, §2º).

Três marcos temporais mudam tudo:

- **Doença ao tempo do fato** → questão de mérito (art. 26, CP): inimputabilidade ou semi-imputabilidade;
- **Doença superveniente ao fato** → questão processual (art. 152, CPP): o processo fica suspenso até o restabelecimento;
- **Doença superveniente à condenação** → questão de execução (art. 154 c/c art. 682, CPP; art. 183, LEP): transferência para HCTP ou conversão da pena em medida de segurança.

Fora do incidente: o **menor de 18 anos** é inimputável por presunção absoluta (art. 27, CP — via ECA, não via laudo); **emoção e paixão** não excluem a imputabilidade (art. 28, I) e a **embriaguez voluntária ou culposa** tampouco (art. 28, II — *actio libera in causa*); apenas a embriaguez **fortuita completa** isenta (art. 28, §1º). Para o usuário **dependente químico**, o caminho paralelo é o exame de dependência toxicológica (Lei 11.343/2006, arts. 45 a 47), com isenção ou redução de pena próprias — mesmo raciocínio probatório, sede legal diversa.

## Doença mental × perturbação — a distinção que define o desfecho

| | Inimputável (art. 26, *caput*) | Semi-imputável (art. 26, parágrafo único) |
|---|---|---|
| **Causa biológica** | doença mental; desenvolvimento mental incompleto ou retardado | perturbação de saúde mental; desenvolvimento mental incompleto ou retardado |
| **Grau psicológico** | **inteiramente** incapaz de entender ou de se determinar | **não inteiramente** capaz (capacidade reduzida) |
| **Natureza** | isenção de pena | causa de diminuição (3ª fase da dosimetria) |
| **Desfecho na sentença** | **absolvição imprópria** (art. 386, VI, c/c parágrafo único, III, CPP) + medida de segurança (arts. 96-97, CP) | condenação com pena **reduzida de 1/3 a 2/3** OU substituição por medida de segurança (art. 98, CP) |
| **Sistema** | MS por prazo indeterminado com teto jurisprudencial (ver skill `medida-seguranca-desinternacao`) | **vicariante**: ou pena reduzida, ou MS — **nunca as duas** |

> A fração de redução do semi-imputável (1/3 a 2/3) gradua-se pelo **grau de redução da capacidade** apurado no laudo — não pela gravidade do fato. Calcule e fundamente com o agente `dosimetria-pena`, que também projeta o impacto da substituição do art. 98.

## Cabimento e legitimados (art. 149)

| Quem provoca | Como | Quando |
|---|---|---|
| Juiz | de ofício | a qualquer tempo |
| Ministério Público | requerimento | inquérito ou ação penal |
| **Defensor** | requerimento | inquérito ou ação penal — é a via desta skill |
| Curador, ascendente, descendente, irmão ou cônjuge | requerimento | a qualquer tempo |
| Autoridade policial | **representação** ao juiz (art. 149, §1º) | fase de inquérito |

- O rol não menciona o companheiro(a): sustente a legitimação por **interpretação extensiva *in bonam partem*** — e, na dúvida, formule pelo defensor.
- A instauração **não é automática**: exige **dúvida razoável**, e o juiz pode indeferir fundamentadamente. Por isso a peça vive ou morre nos **elementos concretos**: diagnóstico prévio com CID, internações psiquiátricas, acompanhamento em CAPS, receitas de medicação controlada, prontuários, benefício previdenciário por incapacidade, interdição civil, relatos de surto contemporâneo ao fato, comportamento incompatível em audiência. Pesquise o contorno atual da "dúvida razoável" via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] o que não confirmar.
- **Momento:** do inquérito à execução (art. 154). Não há preclusão propriamente dita, mas a demora corrói a prova da **contemporaneidade** ao fato — suscite cedo.

## Rito do incidente (arts. 149 a 153)

1. **Instauração** por decisão judicial (de ofício ou provocada), com processamento em **auto apartado** — só se apensa ao principal **após o laudo** (art. 153);
2. **Nomeação de curador** ao acusado e **suspensão do processo** se já iniciada a ação penal, ressalvadas as **diligências urgentes** que possam ser prejudicadas pelo adiamento (art. 149, §2º);
3. **Exame médico-legal psiquiátrico:** se o acusado está **preso**, é internado para o exame em estabelecimento adequado; se está **solto**, só é internado **se os peritos o requererem** (art. 150, *caput*) — réu solto não vira réu internado por comodidade da perícia;
4. **Prazo do exame: 45 dias**, prorrogável apenas se os peritos demonstrarem necessidade (art. 150, §1º); os autos podem ser entregues aos peritos se não houver prejuízo à marcha do processo (art. 150, §2º);
5. **Quesitos e assistente técnico:** as partes podem formular quesitos e indicar assistente técnico (art. 159, §§3º e 5º, CPP) — a defesa **sempre** deve exercer ambos (modelo abaixo);
6. **Laudo e valoração:** o juiz **não fica adstrito ao laudo** (art. 182, CPP) — pode aceitá-lo ou rejeitá-lo, no todo ou em parte, mas **fundamentadamente**; laudo desfavorável se ataca com assistente técnico, quesitos suplementares, esclarecimentos e contraprova;
7. **Se concluída a inimputabilidade ao tempo do fato**, o processo **prossegue** com a presença do curador (art. 151) — não se arquiva: a inimputabilidade só se resolve na sentença, e o réu mantém o direito de disputar a absolvição própria.

> **Nemo tenetur se detegere:** o acusado **não é obrigado a se submeter ao exame** nem pode ser conduzido coercitivamente para a perícia — a recusa não autoriza presunção em seu desfavor. Pesquise o precedente do STF sobre o tema via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] o que não confirmar.

## Insanidade superveniente — o processo para, a prescrição não

**Doença superveniente ao fato (art. 152):** o processo **continua suspenso até o restabelecimento** do acusado (crise de instância). Pontos de defesa:

- A **internação provisória** do art. 152, §1º **não é automática**: após a Lei 10.216/2001 e a Lei 12.403/2011, internação cautelar de inimputável/semi-imputável é a medida do **art. 319, VII, do CPP** — exige **crime praticado com violência ou grave ameaça**, conclusão pericial pela inimputabilidade ou semi-imputabilidade, **risco de reiteração** e fundamentação cautelar (art. 282), com a internação como *ultima ratio* (Lei 10.216/2001, art. 4º). Requisitos e subsidiariedade das cautelares: skill `liberdade-provisoria-relaxamento`.
- **A prescrição continua correndo:** diferentemente do art. 366 do CPP, **não há previsão legal de suspensão do prazo prescricional** durante a suspensão do art. 152 — entendimento consolidado que, não raro, resolve o caso pela extinção da punibilidade (art. 107, IV, CP). Monitore o cálculo com o agente `dosimetria-pena` e confirme a tese atual via `jurisprudencia-stj-stf`.
- Retomado o processo, a defesa pode **reinquirir as testemunhas** ouvidas sem a presença do acusado (art. 152, §2º) — requerimento expresso, sob pena de convalidação.

**Doença superveniente à condenação (art. 154 c/c art. 682, CPP; art. 183, LEP):** o juízo da **execução** transfere o apenado a HCTP ou converte a pena em medida de segurança — e a jurisprudência limita a duração da MS substitutiva ao **tempo restante da pena**. O pedido corre na execução e o recurso contra a decisão do juízo da execução é o **agravo em execução** (LEP, art. 197 — prazo de **5 dias**, Súmula 700/STF; skill `agravo-em-execucao`); o pós-conversão (desinternação, cessação, limite temporal) está na skill `medida-seguranca-desinternacao` — não duplique.

## Quesitos ao perito psiquiatra (modelo da defesa)

Formule por escrito, no próprio requerimento ou em petição autônoma antes do exame:

1. O periciando é portador de **doença mental**, de **desenvolvimento mental incompleto ou retardado**, ou de **perturbação da saúde mental**? Qual o diagnóstico (CID) e desde quando os sinais clínicos se manifestam?
2. **Ao tempo da ação ou omissão** ([DATA DO FATO]), em razão dessa condição, era o periciando **inteiramente incapaz de entender o caráter ilícito** do fato?
3. Ao tempo da ação ou omissão, era **inteiramente incapaz de determinar-se** de acordo com esse entendimento?
4. Caso não inteiramente incapaz: a capacidade de entendimento ou de autodeterminação estava **reduzida**? Em que grau (leve, moderado, acentuado)?
5. A condição diagnosticada é **anterior ou contemporânea** ao fato, ou **superveniente** a ele?
6. O periciando reúne, **atualmente**, condições de compreender os atos do processo e de participar da própria defesa? *(quesito-chave para o art. 152)*
7. Há indicação terapêutica? O tratamento adequado é **ambulatorial** ou de **internação**, considerada a internação como último recurso (Lei 10.216/2001, art. 4º)?

> Os quesitos 2 e 3 espelham o art. 26, *caput*; o 4 abre a porta do parágrafo único; o 5 separa mérito (art. 26) de suspensão (art. 152); o 6 e o 7 municiam a discussão cautelar e a fase de execução.

## Estrutura forense do requerimento

Peça **simples** (não bipartida), dirigida ao **juízo onde tramita o feito** (na execução, ao juízo da execução). Endereçamento → autos → qualificação → fatos (a dúvida razoável) → direito → pedidos → quesitos.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO/INQUÉRITO]

[NOME], já qualificado(a) nos autos em epígrafe, por seu(sua)
[advogado(a)/defensor(a) público(a)] que esta subscreve [(procuração anexa)],
vem, respeitosamente, à presença de Vossa Excelência, com fundamento no
art. 149 do Código de Processo Penal, requerer a instauração de

              INCIDENTE DE INSANIDADE MENTAL

pelas razões de fato e de direito a seguir expostas.

I — DOS FATOS (da dúvida razoável sobre a integridade mental)
[Elementos CONCRETOS e DATADOS: diagnóstico prévio (CID), internações
psiquiátricas, acompanhamento em CAPS, receitas de medicação controlada,
prontuários, benefício por incapacidade, interdição civil, descrição de surto
contemporâneo ao fato, comportamento incompatível nos autos/em audiência.
Demonstrar que a dúvida alcança O TEMPO DO FATO — ou, se posterior,
enquadrar como doença superveniente (art. 152).]

II — DO DIREITO
a) Da dúvida sobre a integridade mental — art. 149 do CPP: presente a dúvida
   razoável, impõe-se o exame médico-legal; o indeferimento imotivado cerceia
   a defesa e contamina a sentença.
b) Da suspensão do processo e da nomeação de curador — art. 149, §2º, do CPP,
   ressalvadas apenas as diligências urgentes.
c) Do processamento em auto apartado — art. 153 do CPP.
d) [Réu solto] Da realização do exame SEM internação — art. 150, caput
   (internação só a requerimento dos peritos).
   [Réu preso] Do prazo de 45 dias do exame — art. 150, §1º — sob pena de
   constrangimento ilegal pela demora.
e) Dos quesitos e do assistente técnico — art. 159, §§3º e 5º, do CPP.

III — DOS PEDIDOS
Ante o exposto, requer-se:
a) a INSTAURAÇÃO do incidente de insanidade mental (art. 149 do CPP), em
   auto apartado (art. 153);
b) a NOMEAÇÃO DE CURADOR ao acusado (art. 149, §2º);
c) a SUSPENSÃO do processo, ressalvadas as diligências urgentes (art. 149, §2º);
d) a designação de perito médico psiquiatra, observado o prazo do art. 150,
   §1º, com o acolhimento dos QUESITOS abaixo e a indicação do assistente
   técnico [NOME/CRM] (art. 159, §§3º e 5º);
e) [réu solto] a realização do exame em liberdade; [réu preso] a realização
   em estabelecimento adequado, sem que o exame se transmude em custódia;
f) a juntada dos documentos clínicos anexos.

IV — DOS QUESITOS
[Inserir os 7 quesitos do modelo desta skill, adaptados ao caso.]

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)/DEFENSOR(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração (ou indicação da atuação da Defensoria — LC 80/94); prontuários e laudos médicos; receitas e cartões de controle de medicação; declaração de CAPS/UBS; certidão de interdição (se houver); declarações de familiares sobre o histórico clínico.

## Teses típicas da defesa

- **Indeferimento imotivado do incidente = cerceamento de defesa:** havendo elementos concretos de dúvida, a recusa do exame contamina a instrução e a sentença — argua nulidade e leve a questão em preliminar de apelação ou por habeas corpus (skill `habeas-corpus`).
- **Absolvição própria antes da imprópria:** peça a absolvição de mérito em primeiro lugar; a inimputabilidade como tese subsidiária. No júri, a absolvição sumária do inimputável (art. 415, IV, CPP) **não** se aplica quando houver outra tese defensiva (art. 415, parágrafo único) — use isso para preservar o plenário quando a tese principal for absolutória própria.
- **Semi-imputabilidade na dosimetria:** redução na fração máxima (2/3) quando o laudo indicar comprometimento acentuado; vedação absoluta de cumular pena e medida de segurança (sistema vicariante, art. 98).
- **Laudo desfavorável não encerra o jogo:** art. 182 — esclarecimentos do perito, quesitos suplementares, parecer do assistente técnico e contraprova documental.
- **Internação provisória não é efeito automático do laudo:** exige os requisitos cautelares do art. 319, VII, e a *ultima ratio* da Lei 10.216/2001.
- **Prescrição na suspensão do art. 152:** o tempo joga a favor da defesa — calcule e requeira a extinção quando alcançado o prazo.
- **Exame que se eterniza com réu preso:** excesso sobre os 45 dias (art. 150, §1º) sem justificativa pericial = constrangimento ilegal.

## Erros comuns e pegadinhas

- [ ] **Requerer sem lastro:** pedido genérico ("o réu parece perturbado") é indeferido — a dúvida razoável se documenta, não se afirma.
- [ ] **Confundir os marcos temporais:** doença **ao tempo do fato** → art. 26 (mérito); **depois do fato** → art. 152 (suspensão); **depois da condenação** → art. 154/LEP 183 (execução). Cada um tem remédio e endereço próprios.
- [ ] **Achar que a suspensão do art. 149, §2º suspende a prescrição:** não suspende (sem previsão legal — contraste com o art. 366). Isso é oportunidade da defesa, não risco.
- [ ] **Pedir absolvição sumária (art. 397, II, CPP) com base na inimputabilidade:** o dispositivo a ressalva expressamente ("salvo inimputabilidade") — a tese não encerra o processo na resposta à acusação, pois a absolvição imprópria impõe MS e o réu tem direito à instrução para disputar a absolvição própria.
- [ ] **Recorrer errado do indeferimento:** a decisão que nega a instauração **não está no rol taxativo do art. 581 do CPP** (sem RESE) — as vias são o habeas corpus e a preliminar de apelação por cerceamento de defesa.
- [ ] **Esquecer quesitos e assistente técnico:** perder o art. 159, §§3º e 5º é entregar a perícia sem contraditório técnico.
- [ ] **Deixar o réu solto ser internado "para o exame":** art. 150, *caput* — internação de réu solto só a requerimento dos peritos; e nunca como prisão disfarçada.
- [ ] **Ausência de curador após a instauração:** vício que se argue demonstrando prejuízo (*pas de nullité sans grief*) — registre a irregularidade de imediato.
- [ ] **Aceitar condenação de quem o laudo aponta inimputável sem fundamentação específica:** o art. 182 permite ao juiz divergir do laudo, mas exige motivação concreta — ataque a sentença que ignora a perícia sem enfrentá-la.
- [ ] **Cumular pena reduzida + medida de segurança ao semi-imputável:** o sistema do duplo binário foi abolido em 1984 — é ou uma, ou outra (art. 98).
- [ ] **Citar precedente de memória:** contornos da dúvida razoável, condução coercitiva e duração da suspensão **somente** após pesquisa via `jurisprudencia-stj-stf` + verificação pelo agente `verificador-citacoes`; o que não se confirmar, marque [NÃO VERIFICADO] e não protocole assim.
- [ ] **Defensoria Pública:** prazo em dobro e intimação pessoal (LC 80/94) — o termo inicial corre da entrega dos autos; não estenda a dobra ao advogado constituído.

## Lembretes finais

- **Sem laudo não há tese:** inimputabilidade se prova por perícia — instaure o incidente antes de sustentar o art. 26.
- **Absolvição própria primeiro; imprópria subsidiária** — medida de segurança também é sanção.
- **Três marcos temporais, três remédios:** fato (art. 26) × processo (art. 152) × execução (art. 154/LEP 183).
- **Quesitos e assistente técnico sempre** (art. 159, §§3º e 5º) — o contraditório da perícia se exerce antes do laudo.
- **Réu não é conduzido à força ao exame** (nemo tenetur) e réu solto não é internado por conveniência pericial.
- **A prescrição corre durante a suspensão** — mantenha o cálculo vivo.
- **Imposta a MS, muda a skill:** desinternação, cessação e limite temporal na `medida-seguranca-desinternacao`.
- **Conferir dispositivos e precedentes** via `lei-e-sumula`, `jurisprudencia-stj-stf` e `verificador-citacoes` antes de protocolar. Toda peça é rascunho para revisão humana.

## Apoie-se em

- **Agente `dosimetria-pena`** — fração de redução do semi-imputável (1/3 a 2/3), projeção da substituição do art. 98 e máximo abstrato da pena (marco do limite temporal da MS e da prescrição).
- **Agente `jurisprudencia-stj-stf`** — contornos atuais da dúvida razoável, nemo tenetur no exame, duração da suspensão do art. 152 e teses supervenientes.
- **Agente `lei-e-sumula`** — conferência da redação vigente do CPP (149-154, 159, 182, 319, VII), do CP (26-28, 96-98) e da LEP (183).
- **Best-practice `peticao-criminal`** — estrutura, tom e formatação da petição.
- **Agente `verificador-citacoes`** — Citation Gate: nenhum precedente entra na peça sem verificação; o não confirmado recebe [NÃO VERIFICADO].
- **Skill `medida-seguranca-desinternacao`** — a fase seguinte: execução da medida de segurança, desinternação, cessação de periculosidade, limite temporal (Súmula 527/STJ) e vaga em HCTP.
- **Skill `habeas-corpus`** — via contra o indeferimento do incidente, o excesso de prazo do exame com réu preso e a internação provisória ilegal.
- **Skill `liberdade-provisoria-relaxamento`** — requisitos cautelares e subsidiariedade das medidas do art. 319 (inclusive a internação provisória do inciso VII).
- **Skill `agravo-em-execucao`** — recurso contra as decisões do juízo da execução na hipótese do art. 154/LEP 183 (prazo de 5 dias, peça bipartida).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
