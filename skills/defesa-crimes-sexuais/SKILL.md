---
name: defesa-crimes-sexuais
description: >-
  Use ao construir a defesa em crimes contra a dignidade sexual (CP, arts. 213 a 218-C): estupro,
  estupro de vulnerável, importunação sexual, assédio sexual, violação sexual mediante fraude e
  divulgação de cena íntima. Gatilhos: crimes sexuais, dignidade sexual, estupro, art. 213, estupro
  de vulnerável, art. 217-A, Súmula 593, presunção absoluta de vulnerabilidade…. Não use para
  decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-sexuais"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-sexuais", "defesa crimes", "crimes sexuais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa nos Crimes contra a Dignidade Sexual (CP, arts. 213 a 218-C)

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

Esta skill orienta a construção das **teses defensivas nos crimes contra a dignidade sexual** — o nicho em que a prova é, quase sempre, palavra contra palavra, colhida às ocultas e carregada de comoção. O entregável são **blocos de tese estruturados** para acoplar na **resposta à acusação** (CPP, art. 396-A), guiar a **instrução** e desembocar nos **memoriais** — não uma peça única, mas a espinha argumentativa que atravessa as três fases.

> **Lição central:** neste nicho a defesa não vence "desmentindo a vítima" — vence pelo **método**. Três movimentos: (1) medir a palavra da vítima pela régua da **coerência interna, coerência externa e corroboração** (CPP, art. 155), sem ataque pessoal; (2) saber **o que está bloqueado** — a Súmula 593/STJ fecha a porta do consentimento no art. 217-A, e insistir nela queima a credibilidade da peça inteira; (3) disputar a **classificação jurídica** (213/217-A × 215-A × 233): muitas vezes a maior redução real de pena está na **desclassificação**, não na absolvição.

> **Cautela de vigência (obrigatória antes de citar):** o Título VI do CP foi reescrito em camadas — Lei 12.015/2009 (217-A, 234-B), Lei 13.718/2018 (215-A, 218-C, art. 225 incondicionado) e Lei 14.245/2021 (CPP, arts. 400-A e 474-A — proteção da vítima em audiência). **Confira a redação vigente de cada dispositivo via agente `lei-e-sumula`.** Precedente atual (erro de tipo etário, desclassificação 217-A→215-A, vulnerabilidade temporária, retratação): **pesquise via agente `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] o que não confirmar** — os números de julgado das fichas SEX-xx do acervo também passam pelo gate `verificacao-citacoes` antes de entrar em peça.

## O mapa do Título VI — tipos, transversais e efeitos práticos

| Dispositivo | Crime / regra | Nota defensiva |
|---|---|---|
| **Art. 213** | Estupro (violência ou grave ameaça); qualificadoras nos §§1º-2º | Sem violência/grave ameaça, a subsunção correta pode ser o 215-A |
| **Art. 215** | Violação sexual mediante fraude | Fraude ≠ violência: disputa fina de tipicidade |
| **Art. 215-A** | Importunação sexual (Lei 13.718/2018) — **subsidiário expresso** | Alvo natural da desclassificação; **não é hediondo** |
| **Art. 216-A** | Assédio sexual | Exige relação de superioridade hierárquica/ascendência |
| **Art. 217-A** | Estupro de vulnerável (menor de 14; sem discernimento; sem capacidade de resistência) | Presunção **absoluta** quanto ao consentimento (Súmula 593/STJ) |
| **Arts. 218 a 218-C** | Corrupção de menores, satisfação de lascívia, favorecimento, divulgação de cena íntima | Verificar elementares específicas e dolo |
| **Art. 225** | Ação penal **pública incondicionada** (pós-Lei 13.718/2018) | Fato **anterior** a 2018 com vítima **maior e não vulnerável**: checar representação tempestiva → tese de **decadência** (entre 2009 e 2018 a ação já era incondicionada para menor de 18/vulnerável — confira o regime da época via `lei-e-sumula`) |
| **Art. 226** | Causas de aumento (concurso de agentes, autoridade parental, padrasto etc.) | Vetor de dosimetria — cuidado com bis in idem |
| **Art. 234-B** | **Segredo de justiça** nos processos do Título VI (incluído pela Lei 12.015/2009) | Protege a vítima **e** o acusado da exposição; requerer quando descumprido |
| **Lei 8.072/90** | Estupro, estupro de vulnerável e favorecimento do art. 218-B são **hediondos** (rol atual via `lei-e-sumula`) | A desclassificação para o 215-A muda regime, progressão e livramento |

## As sete frentes defensivas do nicho

| Frente | Pergunta-chave | Onde se decide |
|---|---|---|
| 1. Standard da palavra da vítima | O relato é coerente e corroborado? | Instrução + memoriais |
| 2. Limites da Súmula 593 | O que ainda é disputável no 217-A? | Resposta à acusação + memoriais |
| 3. Desclassificação 213/217-A ↔ 215-A | Houve violência, grave ameaça ou vulnerabilidade? | Memoriais + apelação |
| 4. Materialidade sem laudo | Laudo negativo + relato frágil = dúvida razoável? | Instrução + memoriais |
| 5. Retratação da vítima | A retratação é espontânea e corroborada? | Instrução + memoriais |
| 6. Continuidade e dosimetria | Concurso material ou art. 71? Vetoriais idôneas? | Memoriais + recurso |
| 7. Segredo de justiça e forma de defender | O processo tramita como manda o art. 234-B? | Todo o feito |

## Frente 1 — a palavra da vítima tem peso especial, e por isso se mede com régua

A jurisprudência confere ao depoimento da vítima **especial valor probante** nos crimes sexuais (contratese SEX-A01 do acervo). A defesa que ignora isso perde; a defesa que o enfrenta pelo método ganha terreno:

- **Coerência interna:** o relato se sustenta em si? Mapeie **todas as versões** (boletim de ocorrência, oitiva policial, escuta especializada, depoimento especial, juízo) e confronte-as — o roteiro de divergências sai do agente `analise-contradicoes`.
- **Coerência externa:** o relato bate com a prova objetiva (laudos, mensagens, geolocalização, testemunhas de contexto)?
- **Contradição substancial × periférica:** divergência sobre data ou roupa é periférica e não derruba o relato; divergência sobre **a própria dinâmica do ato, a autoria ou a existência do fato** é substancial — é nela que a tese se apoia.
- **Regra de corroboração (CPP, art. 155):** condenação não pode se amparar **exclusivamente** em elementos informativos do inquérito não confirmados em contraditório judicial. Palavra da vítima colhida só na fase policial, sem repetição em juízo (ou sem produção antecipada válida — ver skill `depoimento-especial-lei-13431`), não basta.
- **Tom:** impugna-se a **prova**, jamais a pessoa. Ataque pessoal à vítima viola o dever da Lei 14.245/2021 (CPP, arts. 400-A e 474-A — confira a redação via `lei-e-sumula`), gera incidente em audiência e destrói a credibilidade da defesa perante o juízo.

## Frente 2 — Súmula 593/STJ: o que está fechado e o que permanece aberto

**Súmula 593/STJ:** o crime do art. 217-A se configura com conjunção carnal ou ato libidinoso com menor de 14 anos, **sendo irrelevantes o consentimento da vítima, sua experiência sexual anterior ou o relacionamento amoroso com o agente**.

| Bloqueado (não gaste a peça) | Aberto (é aqui que se disputa) |
|---|---|
| Consentimento do menor de 14 | **Erro de tipo etário** (CP, art. 20): o agente, por erro plausível, supunha a vítima maior de 14 — exige lastro concreto (aparência, contexto de conhecimento, redes sociais, dizeres da própria vítima); jurisprudência restritiva — pesquise via `jurisprudencia-stj-stf` |
| Experiência sexual anterior da vítima | **Prova da elementar etária:** a idade deve ser demonstrada por certidão ou meios idôneos; dúvida sobre a idade é dúvida sobre elementar → in dubio pro reo |
| Namoro/relacionamento com o agente | **Existência do fato e autoria** — a presunção é de violência, não de ocorrência |
| "Evolução dos costumes" | **Dolo/elemento subjetivo** (finalidade lasciva) e a exata **extensão fática** imputada |
| Comportamento prévio como redutor de pena-base | **Vulnerabilidade temporária** (embriaguez, sono — "não pode oferecer resistência"): a extensão do conceito é disputada — pesquise via `jurisprudencia-stj-stf` |

## Frente 3 — desclassificação estupro ↔ importunação sexual (art. 215-A)

O art. 215-A é **subsidiário expresso** ("se o ato não constitui crime mais grave"). O critério de fronteira:

| Elemento presente | Tipo correto |
|---|---|
| Violência ou grave ameaça | Art. 213 (estupro) |
| Vítima vulnerável (menor de 14, sem discernimento/resistência) | Art. 217-A — a jurisprudência **resiste** à desclassificação para o 215-A quando há vulnerabilidade; confirme o estado atual via `jurisprudencia-stj-stf` |
| Ato libidinoso sem consentimento, **sem** violência/grave ameaça, vítima capaz | **Art. 215-A** (ficha SEX-D03 do acervo) |
| Conduta não dirigida a vítima determinada | Art. 233 (ato obsceno — crime contra o pudor público, não contra a dignidade sexual; pena muito menor) |

**Por que a desclassificação vale a briga:** pena de 1 a 5 anos (contra 6 a 10 do estupro), **afastamento da hediondez** (regime, progressão, livramento, saída temporária), possível reflexo em prescrição e benefícios. A viabilidade de ANPP no 215-A é controvertida (CPP, art. 28-A, §2º, IV, veda o acordo em violência doméstica/familiar ou contra a mulher **por razões da condição de sexo feminino**) — confira via `lei-e-sumula` e `jurisprudencia-stj-stf` antes de acenar com o acordo. Contratese esperada: o MP invocará que o 215-A cede ao crime mais grave e que ato dirigido a vulnerável afasta tanto o 215-A quanto o 233 (SEX-A04).

## Frente 4 — materialidade sem laudo: o laudo negativo não absolve sozinho, mas soma

A acusação sustentará que atos libidinosos diversos **não deixam vestígios** e que a materialidade se prova por outros meios (SEX-A03; CPP, art. 167). A resposta defensiva é de **conjugação**, não de negação isolada:

- **Laudo negativo + relato com contradições substanciais + ausência de corroboração independente = dúvida razoável** → absolvição pelo art. 386, VII, do CPP (ficha SEX-D04).
- Quando a imputação descreve ato que **deixa vestígios** (conjunção carnal recente, lesões), o exame de corpo de delito é exigível (CPP, art. 158); sua falta injustificada é tese autônoma.
- Requeira **assistente técnico** e formule quesitos sobre laudo psicossocial e escuta especializada — o relatório psicológico corrobora ou não corrobora, e a defesa tem o direito de testá-lo.

## Frente 5 — retratação da vítima: espontânea e corroborada, ou não é nada

A retratação em juízo é frequente no abuso intrafamiliar — e a acusação tem contratese pronta: **"síndrome do segredo" / retratação viciada por pressão familiar** (SEX-A29). Para a retratação sustentar absolvição:

1. Demonstre a **espontaneidade** (ausência de contato coator, iniciativa da própria vítima, contexto da mudança).
2. **Corrobore com elementos independentes** (mensagens da época, testemunhas do contexto, incompatibilidades objetivas do primeiro relato).
3. Lembre a régua do art. 155 do CPP: o relato **judicial**, sob contraditório, prevalece sobre o extrajudicial não confirmado — a inversão desse peso é que precisa ser justificada pela acusação.
4. Nunca oriente, sugira ou intermedeie retratação — além de ilícito, converte a tese em prova de coação.

## Frente 6 — continuidade delitiva e dosimetria: onde a pena realmente se decide

- **Continuidade, não concurso material (SEX-D01/SEX-D02):** série de atos em condições semelhantes de tempo, lugar e execução atrai o art. 71 do CP, com enorme diferença de pena frente ao cúmulo material. Atenção: contra **vítimas distintas**, em crime com violência/grave ameaça, incide o **parágrafo único** do art. 71 (aumento até o **triplo**); e a continuidade entre **tipos diferentes** (213 × 217-A) depende da leitura de "crimes da mesma espécie" — pesquise o estado atual via `jurisprudencia-stj-stf`.
- **Fração da continuidade:** o aumento gradua pelo **número de infrações**; a acusação pedirá 2/3 mesmo sem quantificação exata (SEX-A09) — exija prova do número de eventos e sustente a fração mínima na dúvida.
- **Decote de vetoriais (SEX-D05):** "motivos" e "consequências" valorados por fórmula genérica ou coincidentes com elementares do tipo violam o non bis in idem — pena-base ao mínimo.
- **Causas de aumento do art. 226:** conferir dupla valoração (padrasto como agravante **e** aumento = bis in idem).
- **Indenização mínima (art. 387, IV, CPP):** exige **pedido expresso** na denúncia e contraditório; sem isso, o capítulo cai. O Tema 983/STJ (dano moral em violência doméstica contra a mulher) dispensa instrução específica — confirme seu alcance no caso concreto via `jurisprudencia-stj-stf`.
- Modele os cenários (com e sem desclassificação, com art. 71) via agente `dosimetria-pena` **antes** de escolher a ordem das teses.

## Frente 7 — segredo de justiça e a forma de defender (CP, art. 234-B)

Os processos do Título VI **correm em segredo de justiça** (CP, art. 234-B — redação via `lei-e-sumula`). Uso defensivo:

- **Requeira a decretação** quando o feito tramitar aberto — o segredo protege a vítima e também o acusado (presunção de inocência, exposição midiática, repercussão profissional).
- Segredo **não restringe a defesa**: o acesso integral aos autos pelo advogado constituído permanece garantido (Súmula Vinculante 14 quanto aos elementos já documentados).
- Em audiência, o regime da Lei 14.245/2021 e o depoimento especial impõem **método de inquirição próprio** — a execução ao vivo (contradita, protestos, consignação em ata) é da skill `audiencia-inquiricao-testemunhas`; a colheita do relato de criança/adolescente e suas nulidades específicas são da skill `depoimento-especial-lei-13431`. Esta skill fornece **o que perguntar e por quê** (as teses); aquelas, **como agir no ato**.

## Estrutura forense — o bloco de teses que atravessa as três fases

O entregável é um **conjunto de capítulos de tese** numerados, cada um autossuficiente, prontos para acoplar na peça da fase. Formato de cada capítulo:

```
TESE [N] — [NOME AFIRMATIVO DA TESE]            (ficha SEX-[xx] do acervo)

I — PREMISSA FÁTICA
   [O que os autos mostram, com folha/ID: versões da vítima e datas de cada
   uma, laudos, mensagens, testemunhas. Sem adjetivos — só fatos referenciados.]

II — PREMISSA JURÍDICA
   [Dispositivos e súmulas consolidadas; precedente atual só depois de
   pesquisado via jurisprudencia-stj-stf e aprovado no gate verificacao-citacoes;
   o que não confirmar entra como [NÃO VERIFICADO] ou sai.]

III — SUBSUNÇÃO
   [Por que ESTA prova, medida por AQUELA régua, produz o resultado defendido —
   o parágrafo que nenhum juiz possa pular.]

IV — PEDIDO CORRESPONDENTE
   [Absolvição (art. 386 e inciso exato) / desclassificação / decote de
   vetorial / fração mínima do art. 71 — um pedido por tese, em ordem
   sucessiva de eventualidade.]
```

**Distribuição por fase:**

| Fase | O que entra | Instrumento |
|---|---|---|
| **Resposta à acusação** (CPP, art. 396-A) — **10 dias** da citação (art. 396; contagem processual do art. 798, §1º; **em dobro para a Defensoria** — LC 80/94) | Preliminares (decadência em fato pré-2018, inépcia, ausência de justa causa), absolvição sumária (art. 397) quando cabível, **rol de testemunhas + assistente técnico + quesitos** — a janela probatória fecha aqui | Peça de resposta |
| **Instrução** | Roteiro de inquirição derivado das teses (contradições substanciais a expor, corroborações a testar) | Skills `audiencia-inquiricao-testemunhas` e `depoimento-especial-lei-13431` |
| **Memoriais** | Desenvolvimento pleno: preliminares → absolutórias (fato/autoria/prova) → desclassificatórias → subsidiárias de dosimetria | Skill `memoriais` |

## Teses típicas do nicho (com T-ID do acervo)

- **Insuficiência probatória / in dubio pro reo** — laudo negativo + relato frágil sem corroboração (SEX-D04; CPP, arts. 155 e 386, VII).
- **Erro de tipo etário** no 217-A (CP, art. 20) — com lastro concreto; precedente atual via `jurisprudencia-stj-stf`.
- **Desclassificação para importunação sexual** (SEX-D03) — ausentes violência, grave ameaça e vulnerabilidade.
- **Flagrante preparado = crime impossível** (SEX-D07; Súmula 145/STF; CP, art. 17) — operações de "isca" que tornam a consumação impossível.
- **Retratação espontânea corroborada** — enfrentando a contratese da síndrome do segredo (espelho de SEX-A29).
- **Continuidade delitiva em vez de concurso material** (SEX-D01/SEX-D02; CP, art. 71) + fração mínima na dúvida sobre o número de eventos.
- **Decote de vetoriais genéricas/elementares** na pena-base (SEX-D05; CP, art. 59).
- **Preventiva por gravidade abstrata em importunação sexual** → cautelares do art. 319 (SEX-D06) — o pedido de soltura segue a skill `liberdade-provisoria-relaxamento`.
- **Decadência** por ausência de representação tempestiva em fato integralmente anterior à Lei 13.718/2018 e vítima maior/não vulnerável — regime de ação penal da época (`lei-e-sumula`).
- **Afastamento da indenização mínima** sem pedido expresso e contraditório (CPP, art. 387, IV; alcance do Tema 983/STJ conferido via `jurisprudencia-stj-stf`).

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|---|---|---|
| Sustentar **consentimento** no 217-A | Tese morta (Súmula 593/STJ) que contamina as vivas | Redirecionar para erro de tipo etário, prova da idade ou existência do fato |
| Atacar a **pessoa** da vítima (vida pregressa, "comportamento") | Violação da Lei 14.245/2021, incidente em audiência, antipatia do juízo | Impugnar coerência e corroboração do **relato**, nunca a pessoa |
| Não arrolar testemunhas/assistente técnico na **resposta à acusação** | Preclusão da janela probatória (CPP, art. 396-A) | Bloco de teses pronto **antes** da resposta; rol e quesitos derivados dele |
| Guardar a contradição para os memoriais sem explorá-la em audiência | A vítima/testemunha nunca é confrontada; tribunal lê versão "explicada" | Impeachment ao vivo + consignação (skill `audiencia-inquiricao-testemunhas`) |
| Ignorar o **depoimento especial** e inquirir criança diretamente | Nulidade contra a defesa e revitimização | Protocolo da Lei 13.431/2017 — skill `depoimento-especial-lei-13431` |
| Tratar laudo negativo como absolvição automática | Contratese SEX-A03 derruba (atos sem vestígios) | Conjugar laudo + contradições substanciais + falta de corroboração |
| Aceitar "2/3 de aumento" na continuidade sem prova do número de eventos | Pena inflada sem impugnação | Exigir quantificação; fração mínima na dúvida (espelho de SEX-A09) |
| Esquecer que a desclassificação muda **hediondez e regime** | Deixa na mesa o maior ganho prático do caso | Simular cenários no agente `dosimetria-pena` antes de ordenar os pedidos |
| Citar julgado das fichas SEX-xx **sem verificar** | Precedente desatualizado ou inexistente na peça — sanção real | Todo número passa por `jurisprudencia-stj-stf` + gate `verificacao-citacoes` |
| Intermediar contato com a vítima para "resolver" | Prova de coação; agrava a situação do cliente e expõe o advogado | Nunca; retratação só vale espontânea e corroborada |
| Contar a **decadência** como prazo processual | Representação "tempestiva" que na verdade decaiu (ou tese de decadência furada) | Decadência é prazo **material**: conta pelo art. 10 do CP (inclui o dia do começo, sem prorrogação); prazos processuais seguem o CPP, art. 798, §1º |

## Checklist antes de protocolar

- [ ] Todas as **versões da vítima** mapeadas e confrontadas (agente `analise-contradicoes`)?
- [ ] Contradições classificadas em **substanciais × periféricas** — a peça se apoia só nas substanciais?
- [ ] Nenhuma tese esbarra na **Súmula 593** (consentimento/experiência/namoro no 217-A)?
- [ ] **Desclassificação para o 215-A** avaliada (violência? grave ameaça? vulnerabilidade?) e seus efeitos em pena/hediondez simulados (`dosimetria-pena`)?
- [ ] Elementar **etária** provada por meio idôneo? Erro de tipo com lastro concreto?
- [ ] Laudo, escuta especializada e relatório psicossocial testados (assistente técnico/quesitos)?
- [ ] Retratação (se houver) espontânea e **corroborada** por elementos independentes?
- [ ] Continuidade delitiva × concurso material equacionada (art. 71; fichas SEX-D01/D02)?
- [ ] Rol de testemunhas e requerimentos probatórios completos na **resposta à acusação** (janela que precluirá)?
- [ ] Segredo de justiça (CP, art. 234-B) requerido/observado; linguagem da peça compatível com a Lei 14.245/2021?
- [ ] Pedidos em **ordem sucessiva** (absolutórios → desclassificatórios → subsidiários de pena)?
- [ ] Toda citação de precedente pesquisada via `jurisprudencia-stj-stf` e aprovada no gate `verificacao-citacoes` (o resto marcado [NÃO VERIFICADO] ou removido)?

## Lembretes finais

- **Método, não confronto:** coerência interna + coerência externa + corroboração (CPP, art. 155) é a régua que o juízo aceita ouvir da defesa.
- **Súmula 593 é muro:** consentimento no 217-A não se discute — erro de tipo etário, prova da idade e existência do fato, sim.
- **A desclassificação para o 215-A costuma ser o maior ganho real** — pena, hediondez, regime; calcule antes de prometer absolvição.
- **A janela probatória fecha na resposta à acusação** — rol, assistente técnico e quesitos nascem do bloco de teses, não depois dele.
- **Retratação só sustenta se espontânea e corroborada;** a contratese da síndrome do segredo estará esperando.
- **Dosimetria é a segunda batalha:** art. 71, fração mínima, decote de vetoriais e art. 226 sem bis in idem.
- **Conformidade transversal:** toda entrega é rascunho para revisão humana; segredo de justiça e LGPD sobre dados da vítima; nenhum julgado citado de memória.

## Apoie-se em

- **`acervo/teses-modelos/crime-sexuais.md`** — banco do eixo SEX (41 teses): fichas defensivas SEX-D01 a SEX-D07 e as contrateses acusatórias (SEX-A01 a A38) que a peça precisa antecipar; os números de precedente das fichas **sempre** passam pelo gate antes de entrar em peça.
- **Agente `analise-contradicoes`** — mapa de divergências entre as versões da vítima e a prova dos autos; insumo das Frentes 1, 4 e 5.
- **Agente `dosimetria-pena`** — simulação de cenários (desclassificação, art. 71, decote de vetoriais) para ordenar os pedidos pelo ganho real.
- **Skill `memoriais`** — desenvolvimento pleno do bloco de teses na fase final da instrução.
- **Skill `audiencia-inquiricao-testemunhas`** — complementar: a execução ao vivo da prova oral (contradita, protestos, consignação); esta skill entrega as teses, aquela o método do ato.
- **Skill `depoimento-especial-lei-13431`** *(desta onda)* — colheita do relato de criança/adolescente (Lei 13.431/2017), produção antecipada e nulidades específicas do protocolo.
- **Skill `liberdade-provisoria-relaxamento`** — quando o cliente está preso cautelarmente (ficha SEX-D06: gravidade abstrata não sustenta preventiva no 215-A).
- **Agentes `jurisprudencia-stj-stf` e `lei-e-sumula`** — precedente atual e redação vigente dos dispositivos reescritos pelas Leis 13.718/2018 e 14.245/2021.
- **Agente `verificador-citacoes` / Best-practice `verificacao-citacoes`** — gate obrigatório: o que não confirmar sai marcado **[NÃO VERIFICADO]**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
