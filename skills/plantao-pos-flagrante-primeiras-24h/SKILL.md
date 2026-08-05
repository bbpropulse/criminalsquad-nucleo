---
name: plantao-pos-flagrante-primeiras-24h
description: >-
  Use ao atuar no plantão criminal nas primeiras 24 horas entre a prisão em flagrante e a audiência
  de custódia (CPP, arts. 301 a 310): localizar a pessoa presa, comparecer à delegacia, obter cópia
  do APF e da nota de culpa, fiscalizar as comunicações obrigatórias (juiz, MP, família, Defensoria
  — art. 306), requerer FIANÇA AO DELEGADO quando a pena máxima não superar 4 anos (art. 322),
  provocar a liberação na origem ou o… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, plantao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-plantao-pos-flagrante-primeiras-24h"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["plantao-pos-flagrante-primeiras-24h", "plantao flagrante", "flagrante primeiras"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Plantão Pós-Flagrante — As Primeiras 24 Horas (CPP, arts. 301 a 310)

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

Esta skill orienta a **atuação material da defesa entre a voz de prisão e a audiência de custódia**: a janela de maior risco e de maior demanda do plantão criminal. Cobre a localização da pessoa presa, a atuação **na delegacia** (prerrogativas, entrevista reservada, interrogatório policial, cópia do APF e da nota de culpa), a fiscalização das **comunicações obrigatórias** do art. 306, o requerimento de **fiança ao delegado** (art. 322 — a peça desta skill), a provocação do **plantão judiciário** em ilegalidade patente e a mobilização da família para reunir, **em horas**, os documentos que decidem a custódia. O que acontece **na audiência** (roteiro oral, arguição de tortura perante o juiz, pedidos sucessivos) é da skill `audiencia-de-custodia`; a teoria dos remédios de soltura é da skill `liberdade-provisoria-relaxamento` — aqui o terreno é a **delegacia e o plantão**, antes de o juiz entrar em cena.

> **Síntese operacional:** o relógio é o adversário. Da prisão até a custódia correm no máximo 24 horas — e é nesse intervalo que a defesa (1) **acha** o cliente (a família raramente sabe onde ele está), (2) **chega** à delegacia e exerce as prerrogativas do art. 7º do Estatuto da OAB, (3) **lê o APF ainda quente** e fixa os vícios que virarão teses, (4) **tenta a soltura antes do juiz** — fiança do delegado (art. 322), não ratificação do flagrante (art. 304, § 1º) ou relaxamento no plantão — e (5) **municia a custódia** com o dossiê de condições pessoais. Quem chega à audiência sem ter feito nada disso chega desarmado; quem fez, muitas vezes nem precisa dela — o cliente já saiu pela fiança.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 304, 306, 310 e 322 a 350 do CPP (alterados pelas Leis 12.403/2011 e 13.964/2019) via agente `lei-e-sumula`, bem como os dispositivos da Lei 13.869/2019 (abuso de autoridade) que forem invocados. Precedente atual sobre flagrante, domicílio ou fiança: **pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar.** Toda peça escrita passa pelo gate da best-practice `verificacao-citacoes`.

## O instituto e a base legal

- **O que é:** o interregno entre a captura em flagrante (CPP, art. 302) e a apresentação ao juiz (art. 310) é regido por um feixe de garantias de eficácia imediata — não é "tempo morto" à espera da audiência, é fase com direitos exigíveis **agora**.
- **Formalidades do flagrante:** lavratura do APF e juízo da autoridade policial sobre a fundada suspeita (art. 304 e § 1º); comunicações obrigatórias e remessa do APF (art. 306); nota de culpa (art. 306, § 2º).
- **Garantias constitucionais:** comunicação imediata da prisão ao juiz e à família (CF, art. 5º, LXII); direito ao silêncio e à assistência da família e de advogado (LXIII); identificação dos responsáveis pela prisão e pelo interrogatório (LXIV); relaxamento da prisão ilegal (LXV); liberdade provisória, com ou sem fiança (LXVI).
- **Prerrogativas do defensor (Lei 8.906/94 — Estatuto da OAB, art. 7º):** comunicar-se **pessoal e reservadamente** com o preso, **mesmo sem procuração** e ainda que tido por incomunicável (inciso III); ingressar livremente em delegacias, **inclusive fora do expediente** (inciso VI); acesso aos autos de investigação (inciso XIV c/c **Súmula Vinculante 14** — ver skill `acesso-autos-investigacao`); assistir o cliente em interrogatórios e depoimentos na investigação, **sob pena de nulidade absoluta do ato** (inciso XXI, incluído pela Lei 13.245/2016).
- **Fiança policial:** o **delegado** pode conceder fiança quando a pena privativa de liberdade **máxima** cominada não supera **4 anos** (art. 322); nos demais casos, a fiança é requerida ao juiz, que decide em 48 horas (art. 322, parágrafo único).
- **Blindagem penal das garantias:** a Lei 13.869/2019 tipifica, entre outras, a falta de comunicação da prisão ao juiz no prazo legal e a negativa de acesso aos autos ao defensor — conferir o dispositivo exato via `lei-e-sumula` antes de invocá-lo por número.

## A linha do tempo das 24 horas — marcos legais fixos

| Marco | Prazo | Base | O que a defesa cobra |
|-------|-------|------|----------------------|
| Comunicação da prisão ao **juiz**, ao **MP** e à **família/pessoa indicada** | **Imediata** | art. 306, caput; CF, art. 5º, LXII | Horário da comunicação registrado no APF; omissão = vício |
| Remessa do **APF ao juiz** | Até **24h** da prisão | art. 306, § 1º | Protocolo de remessa; atraso injustificado é tese de relaxamento |
| Cópia integral do APF à **Defensoria Pública** (se o autuado não indicar advogado) | Até **24h** | art. 306, § 1º | Constituída a defesa, exigir a própria cópia (art. 7º, XIV, EAOAB) |
| Entrega da **nota de culpa** (motivo da prisão, condutor, testemunhas) | Até **24h** | art. 306, § 2º | Recibo assinado pelo preso; falta = vício formal |
| **Audiência de custódia** | Até **24h** | art. 310 | Termo inicial da contagem: conferir a redação vigente via `lei-e-sumula` |

> **Cada linha dessa tabela é um item de fiscalização.** O APF documenta (ou deveria documentar) todos esses marcos com horário. Leia-o com o relógio na mão: as inconsistências de horário entre voz de prisão, condução, lavratura e comunicações são a matéria-prima das preliminares que a skill `audiencia-de-custodia` transformará em pedido de relaxamento.

## Primeira hora — localizar o preso e chegar

A família liga sem saber onde a pessoa está. Roteiro de localização:

1. **Colher da família:** nome completo, data de nascimento, CPF se houver; local, horário e circunstâncias aproximadas da prisão; unidade policial mencionada por terceiros.
2. **Mapear a unidade:** delegacia da circunscrição do fato → central de flagrantes/plantão da comarca (onde houver) → delegacias especializadas (mulher, drogas, plantão da capital). Ligar antes de se deslocar.
3. **Consultar sistemas:** processo eletrônico do tribunal (distribuição de plantão), consultas públicas do **BNMP/CNJ** e a comunicação recebida pela Defensoria. Se nada consta, a prisão pode ainda não ter sido comunicada — anote o horário da diligência: a omissão prolongada é vício do art. 306.
4. **Triagem paralela:** enquanto se desloca, dispare a triagem de conflito de interesses e a abertura do dossiê do caso (agentes `triagem-novo-caso` e `onboarding-cliente`) — o plantão não dispensa a checagem de conflito de interesses (vedação de patrocínio de interesses opostos — CED/OAB; dispositivo exato via `lei-e-sumula`) nem o registro sigiloso em `acervo/casos/`.
5. **Menor de 18 anos:** não há prisão em flagrante, há **apreensão** pelo rito próprio do ECA (Lei 8.069/90) — o fluxo desta skill não se aplica; a apresentação é ao MP e a unidade é a delegacia especializada da infância.

## Na delegacia — prerrogativas em ação

**Sequência de atuação ao chegar:**

1. **Identifique-se e peça acesso imediato ao cliente.** A entrevista é **pessoal e reservada**, sem procuração e sem policiais ouvindo (EAOAB, art. 7º, III). Negativa ou "entrevista" no balcão: exigir por escrito, invocar a prerrogativa e registrar (nome do agente, horário) — a recusa alimenta representação e tese de nulidade.
2. **Oriente o cliente antes de qualquer ato:** direito ao **silêncio** sobre os fatos (CF, art. 5º, LXIII) — responder apenas à qualificação; **não assinar** nada sem ler e sem o defensor ao lado; relatar ao defensor (e depois ao juiz da custódia) qualquer agressão ou ameaça; não conversar sobre os fatos com policiais, corréus ou "na cela".
3. **Acompanhe o interrogatório policial, se houver.** O defensor assiste o cliente no ato, sob pena de **nulidade absoluta** do interrogatório (EAOAB, art. 7º, XXI). Se o ato já ocorreu sem defensor e sem renúncia informada, registre — a tese se articula na custódia e na resposta à acusação.
4. **Obtenha cópia do APF e da nota de culpa** (art. 7º, XIV, EAOAB c/c Súmula Vinculante 14 — elementos já documentados). Negativa de acesso: aplicar o protocolo da skill `acesso-autos-investigacao` (requerimento escrito, reclamação ao juiz, Reclamação ao STF por descumprimento da SV 14); a recusa pode configurar o crime da Lei 13.869/2019.
5. **Registre o estado físico do cliente.** Lesões visíveis, relato de agressão, medicação de uso contínuo interrompida: requerer por escrito o **exame de corpo de delito** e o atendimento médico, com fotografia das lesões se possível. A arguição formal de tortura perante o juiz — com preservação de imagens e Protocolo II da Res. CNJ 213 — é conduzida na skill `audiencia-de-custodia`; aqui o trabalho é **não deixar a prova nascer morta**.
6. **Sustente perante o delegado o que ele pode decidir:** a autoridade policial só manda recolher à prisão se das respostas resultar **fundada suspeita** (art. 304, § 1º) — em atipicidade manifesta ou ausência de situação de flagrância (art. 302), requeira a **não ratificação** com liberação na origem; e, cabendo, a **fiança do art. 322** (seção própria abaixo).

## Fiança perante o delegado (art. 322) — a soltura antes do juiz

| Ponto | Regra | Base |
|-------|-------|------|
| **Cabimento** | Pena privativa de liberdade **máxima** cominada **não superior a 4 anos** | art. 322, caput |
| **Fora da alçada policial** | Pena máxima superior a 4 anos → fiança **requerida ao juiz**, decisão em 48h | art. 322, parágrafo único |
| **Valor** | Pena máxima ≤ 4 anos: **1 a 100 salários mínimos**; critérios: condição econômica, circunstâncias, periculosidade | arts. 325, I, e 326 |
| **Modulação** | Conforme a situação econômica: **redução até 2/3**, dispensa (pelo juiz — art. 350) ou aumento | art. 325, § 1º |
| **Inafiançabilidade constitucional** | Racismo; tortura, tráfico, terrorismo e hediondos; ação de grupos armados | CF, art. 5º, XLII a XLIV; art. 323 |
| **Inafiançabilidade circunstancial** | Quebra de fiança anterior no mesmo processo; prisão civil/militar; **presentes os motivos da preventiva** | art. 324 |
| **Recusa ou demora do delegado** | O preso, **ou alguém por ele**, presta a fiança por **simples petição ao juiz**, que decide em 48h | art. 335 |

**Teses de manejo:**

- **Pena máxima ≤ 4 anos + afiançável = requerer JÁ, por escrito.** O requerimento escrito (modelo abaixo) marca o horário, obriga decisão e pré-constitui prova da recusa. Fiança concedida = cliente solto **horas antes** da custódia.
- **Valor inalcançável é recusa disfarçada.** Demonstre a condição econômica (art. 326) e peça a **redução de até 2/3** (art. 325, § 1º) no próprio requerimento. Arbitrada mesmo assim em valor impossível: leve ao juiz do plantão ou à custódia o pedido de redução/dispensa por hipossuficiência (arts. 325, § 1º, e 350) — o mapa completo está em `liberdade-provisoria-relaxamento`.
- **Recusa ou silêncio → art. 335 imediatamente.** A petição ao juiz é simples e cabe no plantão judiciário; instrua com o requerimento recusado/não respondido e o horário do protocolo.
- **"Inafiançável" não significa "insolúvel".** A inafiançabilidade veda a fiança, não a **liberdade provisória sem fiança** nem o relaxamento — a discussão desloca-se para a audiência de custódia (skills `audiencia-de-custodia` e `liberdade-provisoria-relaxamento`).
- **Quem pode pagar:** a fiança pode ser prestada por terceiro (a família, tipicamente — art. 329 e seguintes: conferir a forma de recolhimento local via cartório/plantão). Oriente a família sobre valores e meios de pagamento **antes** do arbitramento, para não perder horas.
- **Fiança prestada não encerra o controle judicial.** O APF segue ao juiz (art. 306, § 1º) e a fiança pode ser cassada se incabível ou se inovada a classificação para delito inafiançável (arts. 338 e 339) — informe o cliente e a família sem transformar a soltura em promessa definitiva.

## Estrutura forense — requerimento de fiança ao delegado

```
ILUSTRÍSSIMO(A) SENHOR(A) DELEGADO(A) DE POLÍCIA DA [UNIDADE — Nº DP/COMARCA]

Auto de Prisão em Flagrante nº [Nº/ANO] (ou: flagrante em lavratura nesta data)

[NOME DO PRESO], [nacionalidade], [estado civil], [profissão], RG [Nº],
CPF [Nº], residente em [ENDEREÇO COMPLETO], preso(a) em flagrante nesta
unidade em [DATA/HORA], por intermédio de seu(sua) advogado(a) (art. 7º,
III e XXI, da Lei 8.906/94), vem requerer ARBITRAMENTO DE FIANÇA, nos
termos do art. 322 do CPP, pelo que segue.

I — DO CABIMENTO (art. 322 do CPP)
A conduta imputada — [CRIME, art. X] — tem pena privativa de liberdade
máxima de [PENA MÁXIMA], NÃO superior a 4 (quatro) anos, autorizando a
concessão de fiança por esta Autoridade Policial. Não incide nenhuma
hipótese de inafiançabilidade (arts. 323 e 324 do CPP): o crime não figura
no rol constitucional, não há quebra de fiança anterior no mesmo processo
nem motivos concretos de prisão preventiva (art. 312).

II — DO VALOR (arts. 325, I, e 326 do CPP)
Atendidos os critérios do art. 326 — natureza da infração, condições
pessoais e vida pregressa —, requer-se o arbitramento no MÍNIMO legal,
com REDUÇÃO DE ATÉ 2/3 (art. 325, § 1º, II), ante a condição econômica
do(a) requerente: [OCUPAÇÃO/RENDA — comprovantes anexos].

III — DAS CONDIÇÕES PESSOAIS
O(A) requerente é primário(a), possui residência fixa ([COMPROVANTE]),
ocupação lícita ([COMPROVANTE]) e [FILHOS MENORES / DEPENDENTES / SAÚDE],
tudo documentado nos anexos.

IV — DOS PEDIDOS
a) o ARBITRAMENTO DE FIANÇA no mínimo legal, com redução de até 2/3
   (art. 325, § 1º, II, do CPP);
b) a expedição imediata da guia de recolhimento e, prestada a fiança,
   a colocação do(a) requerente EM LIBERDADE (CF, art. 5º, LXVI; CPP, art. 322);
c) a juntada deste requerimento e dos anexos ao APF, com certidão do
   horário de protocolo e da decisão.

Nestes termos, pede deferimento.
[LOCAL], [DATA E HORA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [UNIDADE], [Nº/ANO do APF], qualificação completa, [CRIME/art.], [PENA MÁXIMA], [OCUPAÇÃO/RENDA], comprovantes, [LOCAL], [DATA E HORA], dados do(a) advogado(a). **Protocole com horário** — a certidão do item "c" é a prova que instrui o art. 335 se houver recusa ou silêncio.

## Ilegalidade patente — o plantão judiciário antes da custódia

Vício grosseiro no flagrante (atipicidade manifesta, ausência de situação do art. 302, flagrante preparado — Súmula 145/STF, violação de domicílio sem fundadas razões prévias) **não precisa esperar a audiência**:

- **Relaxamento é ato do juiz** (CF, art. 5º, LXV) — petição escrita ao **juízo plantonista**, com cópia do APF e prova do vício; a estrutura da peça está em `liberdade-provisoria-relaxamento`.
- **Habeas corpus de plantão** cabe quando há ilegalidade flagrante e urgência que não tolera nem o rito da petição (incomunicabilidade de fato, prisão sem APF, recusa de informações sobre o paradeiro) — estrutura, liminar e endereçamento na skill `habeas-corpus` e com o agente `habeas-corpus`.
- **Critério de escolha:** se a custódia ocorrerá em poucas horas e o vício depende de valoração, concentre a artilharia na audiência (foro natural, com o roteiro de `audiencia-de-custodia`); se o vício é teratológico ou a audiência não foi designada no prazo, provoque o plantão **agora**.

## Mobilizar a família — o dossiê que decide a custódia em horas

Enquanto o defensor atua na delegacia, a família reúne (lista para enviar por mensagem, com foto legível):

- [ ] **Residência fixa:** conta de luz/água/telefone recente no endereço, ou declaração do titular com documento;
- [ ] **Trabalho/ocupação lícita:** carteira de trabalho, contracheque, declaração do empregador com CNPJ, MEI/comprovante de atividade autônoma;
- [ ] **Filhos e dependentes:** certidão de nascimento de filhos **menores de 12 anos**, laudo/comprovante de dependente com deficiência (abre a via da domiciliar — arts. 318 e 318-A, trabalhada na custódia);
- [ ] **Saúde:** receitas de medicação contínua, laudos de doença grave, cartão de gestante;
- [ ] **Identificação e primariedade:** RG/CPF e, se possível emitir a tempo, certidão de antecedentes;
- [ ] **Dinheiro da fiança:** valor de referência e meio de pagamento aceito na unidade/cartório, combinados **antes** do arbitramento.

> **Regra prática:** documento que não chegou antes da audiência é tese que virou promessa. O kit acima serve três vezes — fiança no delegado (condição econômica), custódia (condições pessoais) e eventual pedido escrito posterior. Colha tudo **uma vez**, registre no dossiê do caso (`onboarding-cliente`) e leve impresso/no processo eletrônico.

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|------|--------------|----------|
| Esperar a audiência de custódia para "começar a trabalhar" | Perde fiança policial, liberação na origem e a prova fresca dos vícios | O plantão começa na delegacia, não no fórum |
| Não requerer fiança ao delegado quando a pena máxima ≤ 4 anos | Cliente passa a noite preso à toa | Requerimento escrito imediato (art. 322), com pedido de redução (art. 325, § 1º) |
| Requerer fiança ao delegado em crime com pena máxima > 4 anos | Endereçamento errado; delegado não pode conceder | Alçada do juiz (art. 322, parágrafo único) — pedido na custódia ou por petição |
| Calcular a "pena máxima" só pelo tipo básico, ignorando majorantes e concurso de crimes | Teto de 4 anos estourado sem perceber; pedido fora da alçada e indeferido | Compute o máximo com as causas de aumento (no maior fator) e a soma das penas no concurso; na dúvida, confira via `lei-e-sumula` |
| Aceitar recusa verbal da fiança e ir embora | Sem prova da recusa, o art. 335 fica sem instrução | Tudo por escrito e protocolado com horário; recusa/silêncio → petição ao juiz (art. 335) |
| Entrevistar o cliente no balcão, com policiais ouvindo | Cliente não relata agressão nem entrega a versão real | Exigir sala reservada (EAOAB, art. 7º, III) e registrar negativa |
| Deixar o cliente ser interrogado sem defensor "para agilizar" | Autoincriminação; ato viciado que poderia ser nulo | Presença no ato (art. 7º, XXI) ou orientação de silêncio até a custódia |
| Sair da delegacia sem cópia do APF e da nota de culpa | Custódia às cegas; vícios de horário passam despercebidos | Art. 7º, XIV + SV 14; negativa → protocolo da skill `acesso-autos-investigacao` |
| Discutir o mérito com o delegado ou deixar o cliente "explicar tudo" | Versões precipitadas engessam a defesa futura | Perante a autoridade policial: silêncio sobre fatos; teses jurídicas apenas (atipicidade, fiança) |
| Não anotar horários (prisão, chegada, comunicações, protocolo) | Teses de atraso (art. 306; art. 310) ficam sem base fática | Diário de bordo do plantão: cada ato com dia/hora, no dossiê do caso |
| Tratar adolescente pelo rito do CPP | Atuação inócua — o regime é outro | ECA: apreensão, delegacia especializada, apresentação ao MP |
| Prometer soltura à família | Violação ética (expectativa de resultado) e desgaste | Informar cenários e probabilidades, nunca garantir — BP `etica-oab-sigilo` |
| Divulgar o caso ou atender imprensa no calor do plantão | Quebra de sigilo e dano à estratégia | Sigilo profissional integral; comunicação só com autorização informada do cliente |

## Lembretes finais

- **O plantão tem três vitórias possíveis antes do juiz:** não ratificação do flagrante (art. 304, § 1º), fiança do delegado (art. 322) e relaxamento/HC no plantão judiciário. Tente na ordem — cada uma poupa horas de prisão.
- **Prerrogativas não se pedem, exercem-se:** entrevista reservada sem procuração (art. 7º, III), ingresso na unidade a qualquer hora (VI), autos (XIV + SV 14), presença no interrogatório sob pena de nulidade (XXI).
- **Tudo por escrito, tudo com horário.** Requerimento sem protocolo é conversa; protocolo com horário é prova — da recusa (art. 335), do atraso (art. 306) e da diligência da defesa.
- **Fiança recusada não é fim de linha:** art. 335 (juiz decide em 48h) e, na sequência natural, a própria audiência de custódia.
- **Cliente orientado antes de qualquer ato:** silêncio sobre os fatos, voz sobre o tratamento recebido, assinatura nenhuma sem leitura.
- **O dossiê de horas vale por três atos** — fiança, custódia e petição posterior. Mobilize a família no primeiro telefonema.
- **Sinais de violência:** corpo de delito e atendimento médico requeridos **na delegacia**; a arguição formal e a preservação de imagens seguem o roteiro da skill `audiencia-de-custodia`.
- **Conformidade transversal:** sigilo, conflito de interesses e consentimento informado (`etica-oab-sigilo`); toda entrega é rascunho para revisão humana.

## Apoie-se em

- **Skill `audiencia-de-custodia`** — o ato seguinte a esta skill: roteiro oral em ordem sucessiva, arguição de tortura perante o juiz e providências pós-ata; esta skill prepara o terreno e entrega o dossiê que aquela usa.
- **Skill `liberdade-provisoria-relaxamento`** — teoria dos remédios de soltura e as petições escritas (relaxamento no plantão, redução/dispensa de fiança, mapa vício → remédio).
- **Skill `habeas-corpus`** — HC de plantão para ilegalidade teratológica, incomunicabilidade de fato ou custódia não designada; liminar e endereçamento.
- **Skill `acesso-autos-investigacao`** — protocolo completo contra negativa de acesso ao APF (art. 7º, XIV, EAOAB; Súmula Vinculante 14; Reclamação).
- **Agente `triagem-novo-caso`** — triagem de conflito de interesses (vedação de patrocínio de interesses opostos — CED/OAB) e abertura formal do caso, disparada em paralelo ao deslocamento.
- **Agente `onboarding-cliente`** — cadastro do cliente, contrato/procuração e organização do dossiê sigiloso em `acervo/casos/`.
- **Agente `habeas-corpus`** — redação urgente do HC quando a via se impõe ainda no plantão.
- **Agentes `lei-e-sumula`, `jurisprudencia-stj-stf` e `verificador-citacoes`** — vigência dos dispositivos, pesquisa de precedente atual e gate de verificação de toda citação antes de entrar na peça ([NÃO VERIFICADO] no que não confirmar).
- **Best-practice `etica-oab-sigilo`** — sigilo, vedação de promessa de resultado e consentimento informado em toda a atuação de urgência.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
