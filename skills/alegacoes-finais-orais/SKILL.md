---
name: alegacoes-finais-orais
description: >-
  Use ao preparar, roteirizar ou conduzir os DEBATES ORAIS de alegações finais da defesa na
  audiência de instrução e julgamento — a regra legal do art. 403, caput, do CPP (20 minutos
  prorrogáveis por mais 10), no rito sumário (art. 534 do CPP) e no JECRIM (art. 81 da Lei 9.099/95,
  sempre oral). Gatilhos: alegações finais orais, debates orais, sustentação oral na AIJ, encerrada
  a instrução, art. 403 caput, 20 mais 10 minutos… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, audiencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-alegacoes-finais-orais"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["alegacoes-finais-orais", "alegacoes finais", "finais orais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Alegações Finais Orais (Debates na AIJ)

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

Esta skill orienta a atuação da defesa nos **debates orais de alegações finais** — a sustentação feita na própria audiência, encerrada a instrução, no rito ordinário (art. 403, *caput*, CPP), no rito sumário (art. 534, CPP) e no JECRIM (art. 81 da Lei 9.099/95). Cobre a **estrutura da sustentação**, a **gestão do tempo**, a **ordem da palavra**, o **pedido de conversão em memoriais** e o **registro das teses em ata**. O conteúdo jurídico das teses (eventualidade, art. 386, subsidiárias) é o da skill `memoriais` — aqui está a **forma oral** desse mesmo arsenal.

> **Síntese operacional:** o debate oral é a **regra legal**; o memorial escrito é a **exceção** que a prática generalizou. Isso significa que a defesa pode ser chamada a sustentar **na hora**, sem direito a prazo — quem entra na AIJ sem roteiro de alegações finais entra desprotegido. A vantagem tática do oral: a prova acabou de ser produzida, o juiz **acabou de ouvir** as contradições, e a sentença vem em seguida — a defesa fala por último e planta a dúvida a minutos da decisão.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 403, 404, 405 e 534 do CPP e do art. 81 da Lei 9.099/95 via agente `lei-e-sumula`. Entendimentos jurisprudenciais indicados abaixo como "a confirmar" (ordem delator/delatado, conversão no rito sumário) exigem pesquisa via agente `jurisprudencia-stj-stf`, com marcação **[NÃO VERIFICADO]** até a conferência. Toda citação passa pelo gate da best-practice `verificacao-citacoes`.

## O debate oral é a regra; o memorial, a exceção

- **Art. 403, *caput*, CPP (rito ordinário):** não havendo (ou sendo indeferido) requerimento de diligências, as alegações finais são **orais**, por **20 minutos** para cada parte, **prorrogáveis por mais 10**, proferindo o juiz, **a seguir, a sentença**. A audiência é una e concentrada (art. 400): instrução, debates e sentença no mesmo ato.
- **Art. 403, §1º:** havendo **mais de um acusado**, o tempo de defesa é **individual** para cada um.
- **Art. 403, §2º:** ao **assistente do Ministério Público**, após a fala do MP, são concedidos **10 minutos** — e o tempo da defesa **prorroga-se por igual período**, automaticamente.
- **Art. 403, §3º:** a substituição por **memoriais escritos** é **faculdade do juiz**, condicionada à **complexidade do caso ou ao número de acusados** — não é direito da parte (ver seção própria).
- **Art. 534, CPP (rito sumário):** mesma fórmula — alegações **orais**, 20 + 10, tempo individual por acusado (§1º) e assistente com 10 minutos prorrogando a defesa (§2º). **Não há** parágrafo equivalente ao 403, §3º: a conversão em memoriais no sumário carece de previsão expressa.
- **Art. 81 da Lei 9.099/95 (JECRIM):** ouvidas vítima e testemunhas e interrogado o acusado, passa-se **imediatamente aos debates orais e à prolação da sentença**. A oralidade é critério estruturante do rito (art. 62); o CPP aplica-se subsidiariamente (art. 92) — inclusive, por analogia, o tempo de 20 + 10.

A skill `memoriais` registra que, na prática, "a exceção virou regra" — os juízos convertem rotineiramente em memoriais. Esta skill existe para o cenário inverso, que é o **legal**: o juiz aplica o *caput* e manda debater.

## Cabimento e tempos por rito

| Rito | Base legal | Tempo | Conversão em memoriais |
|------|-----------|-------|------------------------|
| **Ordinário** | art. 403, *caput*, CPP | 20 + 10 por parte; individual por réu (§1º); assistente 10 e defesa +10 (§2º) | Faculdade do juiz (art. 403, §3º) — complexidade ou nº de acusados |
| **Sumário** | art. 534, CPP | 20 + 10; §§1º e 2º idênticos ao ordinário | **Sem previsão expressa** — admissão por analogia é construção prática, a confirmar via `jurisprudencia-stj-stf` [NÃO VERIFICADO] |
| **JECRIM** | art. 81 da Lei 9.099/95 | Lei não fixa tempo; aplica-se 20 + 10 por analogia (art. 92 c/c art. 403 CPP) | Excepcionalíssima — a oralidade é a essência do rito (art. 62); não contar com ela |
| **Júri — 1ª fase** | art. 411, §4º, CPP | 20 + 10 | Sem previsão expressa — admissão por analogia ao 403, §3º (art. 3º CPP) é praxe, a confirmar via `jurisprudencia-stj-stf` [NÃO VERIFICADO]; pedidos específicos (impronúncia, absolvição sumária, desclassificação) na skill `memoriais` |

> **Fronteira desta skill:** o **plenário do júri** tem regime próprio de debates (arts. 476 a 479 CPP — hora e meia, réplica e tréplica, vedações de leitura) e é coberto pela skill `juri-plenario-debates`. Aqui se trata do debate **perante juiz togado**, que decide por fundamentação vinculada à prova — o registro em ata importa mais do que o apelo retórico.

## A ordem da palavra é garantia — e a defesa fala por último

1. **Acusação** (MP; querelante, na ação privada) abre os debates.
2. **Assistente de acusação**, se habilitado, fala depois do MP (10 minutos) — e a defesa ganha +10 automáticos.
3. **Defesa(s)** fala(m) **sempre por último** — decorrência do contraditório e da ampla defesa (art. 5º, LV, CF). Inversão da ordem, ou nova fala da acusação **depois** da defesa sem devolução da palavra, é nulidade a arguir **na hora**, com registro em ata.
4. **Não existe réplica/tréplica na AIJ** — a estrutura réplica/tréplica é exclusiva do plenário do júri (art. 476, §§3º e 4º, CPP). Se o juiz conceder fala suplementar à acusação (ex.: para responder preliminar nova), **exija a última palavra da defesa**.
5. **Corréus com posições colidentes:** a praxe segue a ordem da denúncia. Havendo **colaborador premiado** que incrimina corréu, o entendimento firmado no STF é que o **delatado fala depois do delator** — a defesa do delatado deve requerer expressamente falar por último; pesquise o precedente específico via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] até conferir.

> **Se o MP pedir a absolvição, a defesa debate do mesmo jeito.** O art. 385 do CPP autoriza o juiz a **condenar mesmo com pedido absolutório do MP** na ação pública. Manifestação do tipo "nada a acrescentar ao pedido ministerial" é deficiência de defesa. Sustente as teses integralmente e dite-as para a ata.

## Estrutura forense da sustentação — roteiro dos 20 minutos

O roteiro é levado por escrito (tópicos, não texto corrido) e construído **antes** da audiência com a skill `preparacao-audiencia`, atualizado ao vivo com o que a instrução produziu:

```
ROTEIRO DE ALEGAÇÕES FINAIS ORAIS — [PROCESSO] — [RÉU]           tempo-alvo

0. VOCATIVO E ABERTURA                                              (1 min)
   "Excelência, [Doutor(a) Promotor(a)], a defesa demonstrará que..."
   → teoria do caso em UMA frase (a mesma da resposta à acusação).

1. PRELIMINARES / NULIDADES (se houver)                             (2-3 min)
   → prova ilícita (art. 5º, LVI, CF; art. 157 CPP); cerceamento
     ocorrido NESTA audiência (indeferimento de perguntas, oitiva
     irregular) — arguir aqui é o que evita a preclusão (art. 571, VIII, CPP).

2. MÉRITO — A PROVA QUE ACABOU DE SER PRODUZIDA                     (8-10 min)
   → confrontar depoimento a depoimento: "a testemunha X afirmou há
     minutos que..., mas em sede policial constava que..." (matriz do
     agente analise-contradicoes, preparada antes e conferida ao vivo);
   → amarrar cada conclusão a um inciso do art. 386 do CPP (tabela de
     correspondência na skill memoriais — não improvisar o inciso);
   → fechar com o in dubio pro reo: a dúvida foi plantada AGORA, diante
     do juiz que sentenciará em seguida.

3. TESES SUBSIDIÁRIAS (eventualidade)                               (3-4 min)
   → pena-base no mínimo (art. 59 CP); atenuantes (art. 65); minorantes;
     regime mais brando (art. 33); substituição por restritivas (art. 44);
     sursis (art. 77); afastamento de qualificadora/majorante;
     afastamento da indenização (art. 387, IV, CPP) sem contraditório
     sobre o valor. Cálculos com o agente dosimetria-pena.

4. PEDIDOS DITADOS PARA A ATA                                       (2 min)
   → enunciar pausadamente, em itens, olhando para o(a) escrevente
     (modelo na seção "Registro em ata").

5. FECHO                                                            (30 s)
   → retomar a teoria do caso em uma frase e encerrar. Sem peroração
     alongada: perante juiz togado, o que decide é a prova + o registro.
```

**Regras de ouro do roteiro:**
- **Uma tese principal, poucas subsidiárias.** Vinte minutos não comportam dez teses; hierarquize (a régua da `redacao-persuasiva-criminal` vale para a fala: blocos completos, zero enchimento).
- **Falar da prova desta audiência, não da peça acusatória.** A força do debate oral é a atualidade: cite o que a testemunha **disse hoje**, com o nome e o trecho.
- **Nunca ler texto corrido.** Tópicos guiam; leitura integral mata a atenção do juiz e desperdiça a única vantagem do oral.

## Gestão do tempo

| Situação | Tempo da defesa | Providência |
|----------|-----------------|-------------|
| Padrão | 20 min | Roteiro dimensionado para 15 — folga é segurança |
| Prorrogação | +10 min | **Requerer ANTES de esgotar** os 20 — pedido tardio pode ser indeferido |
| Assistente habilitado falou | +10 min automáticos (§2º) | Cobrar expressamente a prorrogação legal se o juiz não a anunciar |
| Mais de um réu (defensores distintos) | 20 min **por réu** (§1º) | Combinar previamente a divisão de teses entre defesas para não repetir |
| Mesmo defensor para 2+ réus | 20 min por réu, somáveis | Sustentar individualizando: prova e dosimetria de cada um |

Distribua o conteúdo na proporção do roteiro acima e **guarde sempre os 2 minutos finais para ditar os pedidos** — sustentação brilhante sem pedido registrado é sustentação que não existe para o processo.

## As teses são as dos memoriais — a força aqui é a prova fresca

Não duplique estudo: o arsenal é **idêntico** ao da skill `memoriais` (Bloco I — defesa), regido pelo **princípio da eventualidade** — absolvição em primeiro plano (art. 386, CPP, inciso a inciso), subsidiárias de pena em seguida (o "telefone" 59-65-77, mais 44). O que muda no oral:

- **Seleção agressiva:** no escrito cabem todas as teses; no oral, as 2-3 mais fortes desenvolvidas + as demais **enunciadas e ditadas para a ata** (ficam preservadas para a apelação sem consumir tempo).
- **Contradição mostrada, não narrada:** o agente `analise-contradicoes` monta antes a matriz depoimento × depoimento; na audiência, atualize-a com a prova recém-colhida e **aponte o minuto**: o juiz acabou de ouvir — faça-o reouvir.
- **Dosimetria falada em números:** o agente `dosimetria-pena` prepara o cenário condenatório (pena provável, regime, substituição); nos debates, a subsidiária ganha concretude ("ainda que condenado, a pena não passa de X, em regime aberto, substituída").
- **Sentença na sequência (art. 403, *caput*):** o juiz decide minutos depois. A última imagem que ele leva para a sentença é a que a defesa construir — encerre na tese principal.

## Conversão em memoriais — pedido fundamentado, nunca pressuposto

- **Fundamento:** art. 403, §3º, CPP — o juiz **pode** conceder memoriais, "considerada a complexidade do caso ou o número de acusados". É **discricionariedade regrada**, não direito subjetivo da parte; o indeferimento, em regra, não gera nulidade, porque o oral é a regra legal.
- **Quando pedir:** pluralidade de réus, prova técnica/pericial densa, documentos juntados na própria audiência, instrução longa com múltiplas oitivas, interceptações ou dados volumosos a cotejar. Pedido oral, ao fim da instrução, **com justificativa concreta** — "requer memoriais" seco convida ao indeferimento.
- **Se deferido:** prazo de **5 dias sucessivos** (MP primeiro, defesa depois); para a **Defensoria Pública**, o prazo conta **em dobro** e a intimação é **pessoal** (LC 80/94, arts. 44, I, 89, I e 128, I) — a skill `memoriais` assume a partir daí.
- **Se indeferido:** sustente com o roteiro (que já estava pronto) e, se relevante, registre o protesto em ata. Não peça suspensão "para se preparar": preparar-se antes era o dever.
- **Rito sumário:** sem previsão legal de conversão; a admissão por analogia existe na prática, mas **não conte com ela** — confirme o entendimento do tribunal local via `jurisprudencia-stj-stf` [NÃO VERIFICADO].
- **JECRIM:** a conversão contraria a espinha do rito (oralidade, informalidade, celeridade — art. 62); só ocorre por liberalidade e consenso.
- **Estratégia — o oral pode ser MELHOR:** com prova acusatória que desmoronou em audiência, a defesa **quer** a sentença imediata, com as contradições vivas na memória do juiz. Converter em memoriais dá à acusação tempo de reorganizar a narrativa. A escolha é tática, caso a caso — não reflexo.

## Registro em ata — a sustentação precisa deixar rastro

O debate oral só protege o réu se **constar do processo**. Base: art. 405 do CPP — termo da audiência (caput) e registro por **gravação audiovisual** (§1º), hipótese em que **não há transcrição obrigatória** (§2º). No JECRIM, pior: o termo contém apenas **breve resumo** (art. 81, §2º, da Lei 9.099/95). Consequências práticas:

1. **Dite os pedidos e as teses nucleares para o termo**, pausadamente, ao final da sustentação. Modelo de ditado:

```
"Requer a defesa que conste do termo: sustentadas as seguintes teses:
(i) preliminar de [NULIDADE/ILICITUDE], com fundamento no art. [X];
(ii) no mérito, a ABSOLVIÇÃO com fundamento no art. 386, [INCISO], do CPP,
destacadas as contradições entre os depoimentos de [TESTEMUNHA A] e
[TESTEMUNHA B] colhidos nesta data;
(iii) subsidiariamente, pela eventualidade: pena-base no mínimo legal
(art. 59 CP), reconhecimento da atenuante de [X] (art. 65 CP), regime
inicial [ABERTO/SEMIABERTO], substituição por restritivas de direitos
(art. 44 CP), sursis (art. 77 CP) e afastamento da indenização do
art. 387, IV, do CPP, por ausência de contraditório sobre o valor.
Requer, por fim, a referência à gravação audiovisual (art. 405, §1º, CPP)."
```

2. **Audiência gravada:** anote a **minutagem** da própria sustentação e dos trechos-chave dos depoimentos; na apelação, indique tempo e mídia — é o que permite ao tribunal conferir que a tese foi suscitada.
3. **Síntese escrita de teses (espelho):** praxe tolerada — protocolar, na sequência da audiência, petição breve listando as teses sustentadas oralmente. Não substitui o debate; **documenta-o**.
4. **Para que serve o rastro:** sentença que ignora tese sustentada é atacável por ausência de fundamentação (art. 93, IX, CF; art. 564, V, CPP, incluído pela Lei 13.964/2019) — mas só se a defesa **provar** que a tese foi posta. Sem ata, sem minutagem e sem espelho, a tese "não existiu".

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|------|--------------|----------|
| Ir à AIJ contando com memoriais | Debate na hora, sem preparo — deficiência de defesa | Roteiro pronto SEMPRE (`preparacao-audiencia`); memoriais é bônus, não plano |
| "Nada a acrescentar" / reiterar genericamente a resposta à acusação | Deficiência de defesa — pela Súmula 523 do STF, a **falta** de defesa é nulidade absoluta, mas a **deficiência** só anula com prova de prejuízo | Sustentar teses concretas e ditá-las para a ata |
| Juiz sentenciar sem abrir os debates à defesa (ou sem alegações finais) | Supressão de ato essencial — nulidade por violação à ampla defesa (art. 5º, LV, CF; Súmula 523 STF) | Protestar na hora, exigir a palavra, registrar em ata; arguir em preliminar de apelação ou HC |
| Silenciar quando o MP pede absolvição | Juiz pode condenar mesmo assim (art. 385 CPP) | Debater e registrar integralmente |
| Pedir prorrogação depois de estourado o tempo | Indeferimento | Requerer os +10 **antes** de esgotar os 20 |
| Não cobrar a prorrogação automática quando o assistente falou | Defesa espremida em 20 min contra 30 da acusação | Invocar o art. 403, §2º (ou 534, §2º) expressamente |
| Aceitar fala da acusação após a defesa | Quebra da ordem — defesa fala por último (art. 5º, LV, CF) | Requerer devolução da palavra e registrar em ata |
| Improvisar "réplica/tréplica" na AIJ | Instituto inexistente fora do plenário do júri | Estrutura correta: acusação → assistente → defesa, uma vez cada |
| Delatado falando antes do colaborador | Prejuízo à defesa do delatado | Requerer a palavra por último; precedente via `jurisprudencia-stj-stf` [NÃO VERIFICADO] |
| Deixar nulidade da audiência para a apelação | Preclusão — nulidades ocorridas em audiência arguem-se **logo depois de ocorrerem** (art. 571, VIII, CPP) | Arguir na hora + reiterar nas alegações + ata |
| Esquecer que a sentença sai em audiência | Intimação em audiência dispara ali o prazo de **apelação: 5 dias** (art. 593 CPP), contagem contínua do art. 798 CPP (exclui o dia do começo e inclui o do vencimento — §1º; **não** se aplica a contagem em dias úteis do CPC); Defensoria conta **em dobro** (LC 80/94, arts. 44, I, 89, I e 128, I) | Sair da AIJ com a decisão anotada e o prazo calendarizado |
| Ler texto corrido por 20 minutos | Perde o juiz e a vantagem da prova fresca | Tópicos + citação nominal dos depoimentos do dia |

## Checklist do dia da audiência

**Antes (véspera):**
- [ ] Briefing completo gerado pela `preparacao-audiencia` (partes, teses do acervo, roteiro de perguntas)?
- [ ] Matriz de contradições preparada (`analise-contradicoes`) com o que já consta dos autos?
- [ ] Cenário de dosimetria calculado (`dosimetria-pena`) para as subsidiárias?
- [ ] Roteiro de sustentação dimensionado para 15 minutos, com bloco de pedidos pronto para ditado?
- [ ] Decidido (taticamente) se a defesa **quer** memoriais ou prefere a sentença imediata?

**Durante:**
- [ ] Contradições da prova oral do dia anotadas com nome e minutagem?
- [ ] Nulidades da própria audiência arguidas na hora (art. 571 CPP)?
- [ ] Prorrogações requeridas a tempo (+10 do caput; +10 do §2º se houve assistente)?
- [ ] Defesa falou por último (e por último entre corréus, se delatada)?

**Ao final:**
- [ ] Pedidos e teses ditados para o termo (modelo acima)?
- [ ] Minutagem da gravação anotada (art. 405, §1º) e espelho de teses protocolado, se conveniente?
- [ ] Sentença proferida em audiência → prazo de apelação anotado?
- [ ] Citações conferidas via `verificacao-citacoes` (e `lei-e-sumula` para os dispositivos)?

## Apoie-se em

- **Skill `memoriais`** — complementar obrigatória: o conteúdo das teses é o mesmo (eventualidade, tabela do art. 386, subsidiárias 59/65/77/44, blocos por parte e violência doméstica); esta skill cobre a **forma oral** e o que só existe nela (tempo, ordem, ata, conversão). Se o juiz converter em memoriais, migre para lá.
- **Skill `preparacao-audiencia`** — gera o briefing pré-AIJ (dados do ato, teses do acervo, roteiro de perguntas) sobre o qual o roteiro de sustentação é montado.
- **Agente `analise-contradicoes`** — matriz de contradições da prova oral, o coração do bloco de mérito dos debates.
- **Agente `dosimetria-pena`** — cálculo do cenário condenatório para as teses subsidiárias faladas em números.
- **Skill `juri-plenario-debates`** — fronteira: debates em **plenário do júri** (réplica/tréplica, art. 477, plenitude de defesa) têm regime próprio e ficam lá.
- **Skill `sustentacao-oral-tribunais`** — fronteira: sustentação oral em **julgamento de recurso ou HC no tribunal** é outro instituto (regimentos, inscrição, tempo próprio); aqui é o debate de 1º grau na AIJ.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima, SEMPRE: teoria do caso em uma frase, hierarquia de teses, blocos completos e zero enchimento valem para a fala tanto quanto para a peça.
- **Agente `verificador-citacoes`** — gate obrigatório (best-practice `verificacao-citacoes`): nenhum dispositivo, súmula ou precedente vai para o roteiro ou para o espelho de teses sem passar por ele.
- **Agentes `jurisprudencia-stj-stf` e `lei-e-sumula`** — verificação de precedentes marcados [NÃO VERIFICADO] e da vigência dos dispositivos antes de citar em audiência ou em peça posterior.
