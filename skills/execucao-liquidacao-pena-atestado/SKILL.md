---
name: execucao-liquidacao-pena-atestado
description: >-
  Use ao conferir/impugnar o CÁLCULO de liquidação de pena e o atestado de pena a cumprir emitido
  pela VEP — data-base de cada benefício, frações do art. 112, cômputo de detração e remição, e
  projeção de progressão, livramento, saída temporária e término da pena (arts. 41-VII, 66-III/V e
  105-106 LEP; art. 42 CP; conferência do PEC/SEEU). Gatilhos: liquidação de pena, cálculo de pena,
  atestado de pena a cumprir, PEC, SEEU… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, analise, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-liquidacao-pena-atestado"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-liquidacao-pena-atestado", "execucao liquidacao", "pena atestado"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Liquidação de Pena e Impugnação do Atestado (arts. 41-VII, 66 e 105-106 da LEP)

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

Esta skill orienta a **conferência e a impugnação do cálculo de liquidação de pena** e do **atestado de pena a cumprir** emitido pelo Juízo da Execução — o documento que organiza **toda** a execução: dele saem as **datas-projetadas** de progressão, livramento condicional, saída temporária, comutação/indulto e término da pena. Um erro aqui (fração trocada, detração não computada, remição não abatida) **contamina em cascata** todos os benefícios e prolonga indevidamente o cumprimento.

> **Lição central:** o cálculo não é uma peça de fé — **refaça-o do zero** a partir dos títulos (guia de recolhimento + sentença/acórdão). O erro mais comum e mais lesivo é a **data-base**: cada benefício pode ter uma data-base diferente, e falta grave altera umas (progressão) mas **não** outras (livramento, indulto). Confira benefício por benefício, não o pacote.

> **Cautela de vigência (obrigatória antes de citar):** a base histórica desta skill não escolhe a regra atual. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução; confira texto e autoridades em fontes oficiais.

> **Gate P0 do art. 112:** a liquidação pode auditar inputs, mas não pode fixar percentual, lapso ou data de progressão antes de ler `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsultar fontes oficiais no mesmo dia e registrar regra intertemporal, decisões aplicáveis e revisor humano. Se faltar qualquer campo: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**. Não reutilize tabela histórica nem execute cálculo conclusivo.

## Natureza — o que é o atestado e a liquidação

- **Liquidação (conta de liquidação):** o cálculo aritmético que, sobre a pena imposta no título, aplica detração e remição e **projeta** as datas de cada benefício. É atualizada a cada evento (nova condenação, unificação, remição, falta grave, detração superveniente).
- **Atestado de pena a cumprir (art. 41, VII, LEP):** **direito do apenado** de receber, **anualmente**, atestado com o **saldo** de pena. É o documento que materializa a liquidação e permite ao preso e à defesa conferir a evolução. Sua **falta ou desatualização** é, por si, ilegalidade sanável.
- **SEEU/PEC:** hoje o cálculo é gerado no **Sistema Eletrônico de Execução Unificada (SEEU)** (Res. CNJ 280/2019 e sucessoras); a conferência é feita sobre o "mapa"/relatório do sistema. O SEEU **automatiza**, mas **erra** — parametrização de fração, data-base e remição são fontes frequentes de equívoco.

## Base legal

- **Art. 41, VII, LEP** — direito do preso ao **atestado anual** de pena a cumprir.
- **Art. 66, III e V, LEP** — competência do Juízo da Execução para **decidir sobre soma/unificação, progressão, livramento, detração e remição**, e para **zelar pela correta aplicação** da pena.
- **Arts. 105 e 106, LEP** — expedição da **guia de recolhimento** (título executivo da execução); o cálculo parte da guia.
- **Art. 42, CP + art. 387, §2º, CPP** — **detração** (desconto do tempo de prisão provisória, internação ou prisão administrativa); pode ser reconhecida na sentença, antecipando o marco.
- **Arts. 126 a 130, LEP** — **remição** (por trabalho e por estudo) e sua repercussão no cálculo.
- **Arts. 112, 83 CP, 122-125 LEP** — parâmetros dos benefícios cujas datas o cálculo projeta (progressão, livramento, saída temporária).
- **Súmula 611/STF** — competência do Juízo da Execução para aplicar **lei nova mais benigna** (repercute na retificação do cálculo).

## As datas-base — o coração da liquidação (conferir uma a uma)

Cada benefício tem seu **marco inicial** próprio. Confundir as datas-base é o erro estruturante do cálculo.

| Benefício | Data-base (marco inicial) | Falta grave interrompe? |
|---|---|---|
| **Progressão de regime** | prisão cautelar (detração, art. 42 CP); recomeça na **data da falta grave** sobre o **saldo** | **SIM** — Súmula 534/STJ |
| **Livramento condicional** | data da prisão | **NÃO** — Súmula 441/STJ |
| **Comutação / Indulto** | conforme o decreto (requisito na data-base do decreto) | **NÃO** — Súmula 535/STJ |
| **Saída temporária** | cumprimento do lapso do art. 122 LEP a partir do início do regime semiaberto | conforme regime/comportamento (ver skill própria) |
| **Término da pena** | prisão cautelar, abatidos detração e remição | não se aplica |

> **Regra de ouro (distinguishing):** falta grave **recalcula** a progressão (nova data-base sobre o saldo — Súm. 534), mas **não mexe** em livramento (Súm. 441) nem em comutação/indulto (Súm. 535). Cálculo que aplica a mesma nova data-base a todos os benefícios está **errado** — é a impugnação mais comum e mais eficaz.

## Detração (art. 42 CP) — descontar o tempo já preso

- Desconta-se da pena o tempo de **prisão provisória** (flagrante, temporária, preventiva), **prisão administrativa** e **internação**.
- Também computa a **prisão provisória em outro processo**, desde que o fato seja **anterior** à segregação (para evitar "conta-corrente" de crimes futuros) — tese sensível, conferir jurisprudência atual via `jurisprudencia-stj-stf`.
- **Antecipa o *dies a quo*** de todos os benefícios cujo marco é a prisão. Detração não lançada é **tempo de liberdade perdido** — verificar sempre a folha de prisões e o histórico de custódia.
- Confira se a **sentença** já reconheceu a detração (art. 387, §2º, CPP): se sim, o marco pode ser anterior ao trânsito.

## Remição (arts. 126-130 LEP) — abater dias pelo trabalho/estudo

- **Trabalho:** 1 dia de pena a cada **3 dias** trabalhados.
- **Estudo:** 1 dia de pena a cada **12 horas** de frequência escolar, divididas em ≥ 3 dias (art. 126, §1º, I).
- **Cumulação:** trabalho **e** estudo podem ser remidos **cumulativamente**, se as horas forem compatíveis (art. 126, §3º).
- **Leitura / atividades:** admite-se remição pela leitura (Recomendação CNJ; conferir regramento local) — conferir se foi lançada.
- **Efeito no cálculo:** os dias remidos **abatem o saldo** e **antecipam TODAS as datas projetadas** — se a remição não foi lançada, todas as projeções estão atrasadas.
- **Falta grave e remição:** a falta grave permite **revogar até 1/3** dos dias remidos (art. 127 LEP; **Súmula Vinculante 9/STF**), a partir do **saldo** existente na data da infração — nunca a totalidade, nunca dias futuros. Revogação superior a 1/3 ou sobre remição futura é **ilegal**.

## Metodologia de conferência (passo a passo)

Reproduza o cálculo **do zero** e compare com o do SEEU/VEP. Convenção: ano = 365 dias; mês = 30 dias; *dies a quo* incluso.

```
1) REUNIR OS TÍTULOS
   guia(s) de recolhimento + sentença/acórdão + certidão de trânsito.
   Conferir se a pena lançada bate com o dispositivo condenatório.

2) UNIFICAR/SOMAR (se houver mais de uma condenação)
   soma das penas (Súmula 715/STF); conferir concurso material/formal/continuidade.
   → usar a skill execucao-unificacao-penas.

3) CLASSIFICAR o crime (com/sem violência; hediondo; resultado morte) e a
   CONDIÇÃO do réu (primário/reincidente; específico?) → define a fração do art. 112.
   → usar a skill execucao-progressao-regime.

4) FIXAR AS DATAS-BASE de cada benefício (tabela acima) — uma a uma.

5) APLICAR DETRAÇÃO (art. 42 CP) — abater todo tempo de custódia cabível.

6) APLICAR REMIÇÃO (arts. 126-130) — abater dias de trabalho/estudo lançados;
   conferir se há remição pendente de homologação.

7) PROJETAR as datas: progressão, livramento, saída temporária, comutação/indulto,
   término da pena. Cada uma sobre sua respectiva data-base e base de cálculo.

8) COMPARAR com o atestado/SEEU e ISOLAR a divergência (qual variável está errada).
```

**Fórmulas de projeção:**

```
lapso do benefício = base de cálculo × fração/percentual do benefício
data projetada     = data-base do benefício + lapso
saldo de pena      = pena total − (tempo cumprido + detração + remição)
término da pena    = data-base do término + saldo restante
```

- **Base de cálculo:** total da pena (ou **saldo remanescente**, após falta grave, para a progressão).
- **Arredondamento:** fração de dia em favor do apenado na contagem do lapso.

## Erros típicos de cálculo (checklist de impugnação)

Cada item abaixo é uma **tese de retificação**. Isole a variável e demonstre o impacto na data.

1. **Data-base única para todos os benefícios** — aplicou a data da falta grave também ao livramento/indulto (viola Súm. 441 e 535). *Impugnação mais frequente.*
2. **Fração/percentual errado no art. 112** — classificou o crime pela pena abstrata ou reutilizou regra histórica. Eventual tratamento do reincidente não específico é questão temporal e jurisprudencial: marcar `INDETERMINADO` até confirmação oficial e revisão humana.
3. **Detração não lançada** — tempo de prisão provisória (mesmo em outro processo, fato anterior) não descontado.
4. **Remição não abatida ou subcomputada** — dias de trabalho/estudo homologados não refletidos; leitura não lançada.
5. **Revogação indevida de remição** — retirou mais de 1/3 dos dias, ou atingiu remição futura (viola art. 127 + SV 9/STF).
6. **Falta grave prescrita/inexistente** interrompendo a progressão — sem PAD válido ou fora do prazo prescricional da infração administrativa.
7. **Soma/unificação incorreta** — dupla contagem, pena de processo extinto ainda somada, ou não aplicação de lei mais benéfica (Súm. 611/STF).
8. **Regime inicial mais gravoso do que o título** — cálculo projeta progressão a partir de regime que a sentença não fixou.
9. **Não abatimento de pena já cumprida/declarada extinta** — condenação prescrita ou pena satisfeita ainda no saldo.
10. **Atestado anual não expedido/desatualizado** (art. 41, VII) — pleitear a expedição, base para a conferência.

## Súmulas e enunciados aplicáveis (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 534/STJ** — falta grave **interrompe** o prazo da **progressão**; nova data-base = data da falta; recálculo sobre o **saldo**.
- **Súmula 535/STJ** — falta grave **não interrompe** o prazo para **comutação/indulto**.
- **Súmula 441/STJ** — falta grave **não interrompe** o prazo do **livramento condicional**.
- **Súmula Vinculante 9/STF** — a perda de dias remidos por falta grave (art. 127 LEP) é **constitucional**, limitada a **1/3**.
- **Súmula 715/STF** — em concurso/unificação, a base para os benefícios é a **soma** das penas.
- **Súmula 611/STF** — compete ao **Juízo da Execução** aplicar a **lei nova mais benigna** (repercute na retificação do cálculo).
- **Súmula 439/STJ + Súmula Vinculante 26/STF** — exame criminológico só por **decisão fundamentada** (afeta o requisito subjetivo projetado, não a data objetiva).
- **[NÃO VERIFICADO]** — para qualquer **tese específica** sobre detração de prisão em processo diverso, remição por leitura, ou parametrização do SEEU (números de HC/REsp/Tema/Informativo), **não cite de memória**: confirme via `jurisprudencia-stj-stf`. Melhor sustentar a **tese e o dispositivo** do que arriscar um acórdão.

## Como impugnar — via processual

O cálculo/atestado se impugna por **petição de retificação da conta de liquidação** dirigida ao **Juízo da Execução**, requerendo o **recálculo** e a **atualização do atestado**. Indeferido, cabe **agravo em execução (art. 197 LEP)**. Em caso de **flagrante ilegalidade** que prolongue indevidamente a prisão (ex.: benefício já implementado e não reconhecido), cabe **habeas corpus**.

## Modelo de petição (retificação do cálculo / impugnação do atestado)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO — SEEU]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento nos arts. 41, VII, e 66, III e V,
da Lei de Execução Penal, requerer a

RETIFICAÇÃO DO CÁLCULO DE LIQUIDAÇÃO DE PENA
(e a atualização do atestado de pena a cumprir)

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O apenado cumpre pena de [PENA TOTAL] de reclusão, em regime [REGIME], estando
preso, por força de detração (art. 42 do CP), desde [DATA DA PRISÃO].

O cálculo de liquidação lançado no SEEU (ev. [...]) apresenta [ERRO CONCRETO —
ex.: aplicação da data-base da falta grave também ao livramento condicional],
o que prolonga indevidamente a projeção dos benefícios do apenado.


II — DO DIREITO

a) Do erro no cálculo
[Descrever a variável errada e o parâmetro correto — ex.:]
A falta grave de [DATA] interrompeu, corretamente, o prazo da PROGRESSÃO,
gerando nova data-base sobre o saldo (Súmula 534/STJ). Contudo, o cálculo
estendeu essa mesma data-base ao LIVRAMENTO CONDICIONAL, em afronta à Súmula
441/STJ, e à COMUTAÇÃO/INDULTO, em afronta à Súmula 535/STJ — que vedam a
interrupção desses prazos pela falta grave.

[Se detração não lançada:]
Não foi computado o período de prisão provisória de [PERÍODO], em violação ao
art. 42 do CP, o que antecipa o dies a quo de todos os benefícios.

[Se remição não abatida:]
Os [Nº] dias remidos por [trabalho/estudo], homologados no ev. [...], não foram
abatidos do saldo (arts. 126-130 da LEP), atrasando indevidamente as projeções.

[Se revogação indevida de remição:]
A revogação de dias remidos superou o limite de 1/3 do art. 127 da LEP (Súmula
Vinculante 9/STF), atingindo, ainda, remição futura — o que é vedado.

b) Do recálculo correto (memória de cálculo em anexo)
Refeita a conta a partir dos títulos (guia de recolhimento, sentença e certidão
de trânsito), com as datas-base corretas de cada benefício, detração e remição,
obtêm-se as seguintes projeções:
- Progressão ao regime [...]: [DATA CORRETA];
- Livramento condicional: [DATA CORRETA];
- Saída temporária: [DATA CORRETA];
- Término da pena: [DATA CORRETA].
(conforme planilha de liquidação anexa)

c) Do atestado anual (art. 41, VII, da LEP)
[Se não expedido/desatualizado:] Requer-se, ainda, a expedição de atestado
atualizado de pena a cumprir, direito assegurado ao apenado.


III — DO PEDIDO

Diante do exposto, requer:

a) a RETIFICAÇÃO do cálculo de liquidação de pena, com o recálculo das datas
   projetadas conforme a memória de cálculo anexa;
b) a atualização/expedição do ATESTADO de pena a cumprir (art. 41, VII, da LEP);
c) subsidiariamente, o reconhecimento imediato do(s) benefício(s) cuja data
   projetada já foi implementada.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO — SEEU], [NOME DO APENADO], [PENA TOTAL], [REGIME], [DATA DA PRISÃO], [ERRO CONCRETO], [DATA da falta], [PERÍODO da detração], [Nº de dias remidos], [DATAS CORRETAS], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. **Guia(s) de recolhimento** e sentença/acórdão + certidão de trânsito (títulos).
3. **Cálculo de liquidação atual do SEEU** (o que se impugna).
4. **Memória de cálculo / planilha** refeita pela defesa (o que se propõe).
5. **Folha de prisões / histórico de custódia** (comprova a detração).
6. **Atestados de trabalho/estudo e homologações de remição** (comprovam o abatimento).
7. Folha de antecedentes (comprova a condição do réu / a primariedade).

## Roteiro de tese (defesa)

1. **Refazer o cálculo do zero** a partir dos títulos — nunca confiar no atestado.
2. **Conferir data-base benefício por benefício** — separar o que a falta grave altera (progressão — Súm. 534) do que **não** altera (livramento — Súm. 441; indulto/comutação — Súm. 535).
3. **Verificar a detração** (art. 42 CP) — inclusive prisão provisória em outro processo por fato anterior.
4. **Conferir a remição** (arts. 126-130) — trabalho, estudo, leitura, cumulação; e a **revogação** limitada a 1/3 (art. 127 + SV 9).
5. **Checar a regra do art. 112** pela matriz temporal e nas redações vigentes das Leis 14.843/2024, 15.358/2026 e 15.402/2026; sem aprovação humana, não calcular.
6. **Conferir soma/unificação** (Súm. 715) e a aplicação de **lei mais benéfica** (Súm. 611).
7. **Isolar a variável errada** e demonstrar o **impacto em dias/datas** — o juízo decide sobre número, não sobre retórica.
8. **Exigir o atestado anual** (art. 41, VII) se ausente/desatualizado.

## Anti-padrões (evitar)

- Confiar no atestado/SEEU sem refazer a conta.
- Aplicar a **mesma data-base** (da falta grave) a todos os benefícios — o erro que mais prejudica o apenado.
- Esquecer a **detração** de prisão provisória (própria ou de outro processo, fato anterior).
- Não abater **remição** homologada, ou aceitar revogação de remição **acima de 1/3** / sobre dias futuros.
- Classificar o crime pela **pena abstrata** e fixar a fração errada do art. 112.
- Impugnar "o cálculo" em bloco, sem **isolar a variável** e sem **memória de cálculo** anexa.
- Manter no saldo pena **prescrita**, **extinta** ou já cumprida.
- Citar precedente de memória — passar pelo gate `verificacao-citacoes`.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material apoia a conferência e a redação; a responsabilidade pela peça e pelos cálculos é sempre do **advogado** (CED, art. 2º).
- **Ética por polo:** advocacia — OAB + Provimento 205/2021; Ministério Público — CNMP; Defensoria — LC 80/94.
- **Citações verificadas:** nenhuma súmula, tese, número de acórdão ou informativo entra na peça sem passar pelo gate `verificacao-citacoes`/`jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.
- **Sigilo/LGPD:** dados do assistido e autos não vão a repositório público.

## Lembretes finais

- **Refaça o cálculo do zero** — o atestado e o SEEU erram.
- **Data-base é benefício por benefício** — falta grave altera a progressão (Súm. 534), não o livramento (Súm. 441) nem o indulto/comutação (Súm. 535).
- **Detração e remição antecipam TODAS as projeções** — verifique se foram lançadas.
- **Revogação de remição ≤ 1/3** (art. 127 + SV 9/STF), nunca sobre dias futuros.
- **Isole a variável errada** e junte **memória de cálculo** — o juízo retifica número, não discurso.
- **Confira vigência** das Leis 14.843/2024, 15.358/2026 e 15.402/2026 e das autoridades oficiais antes de peticionar.
- **Impugna-se por petição de retificação → agravo em execução (art. 197)**; HC só para ilegalidade flagrante que prolongue a prisão.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
