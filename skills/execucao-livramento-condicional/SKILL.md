---
name: execucao-livramento-condicional
description: >-
  Use ao elaborar pedido de livramento condicional na execução penal — antecipação da liberdade na
  fase final da pena, sob período de prova (CP, arts. 83-90; LEP, arts. 131-146). Gatilhos:
  livramento condicional, frações 1/3 / 1/2 / 2/3 (art. 83 I/II/V), período de prova, audiência
  admonitória, revogação do livramento, falta grave não…. Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-livramento-condicional"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-livramento-condicional", "execucao livramento", "livramento condicional"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Livramento Condicional (execução penal)

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

Esta skill orienta a elaboração do **pedido de livramento condicional**: a antecipação provisória da liberdade do condenado, na **fase final** do cumprimento da pena, mediante requisitos objetivos (lapso) e subjetivos (mérito), sob **condições** e por um **período de prova** ao cabo do qual, não revogado o benefício, declara-se **extinta a pena** (CP, art. 90).

> **Síntese operacional:** o livramento é **direito subjetivo** de quem preenche os requisitos — não é faculdade discricionária do juízo. Indeferimento exige **motivação concreta**; não bastam gravidade abstrata do delito ou mera presunção. **Não confundir com a progressão**, que muda o **regime** — o livramento antecipa a **liberdade** (ainda com vínculo executório); a diferença mais cobrada é que **falta grave NÃO interrompe o livramento (Súmula 441/STJ)**, mas interrompe a progressão (Súmula 534/STJ).

> **Cautela de vigência (obrigatória antes de citar):** confira os arts. 83-90 do CP e 131-146 da LEP. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução e podem repercutir na relação entre progressão e livramento. Confira todo precedente e dispositivo em fonte oficial.

> **Gate P0 do art. 112:** a fração própria do art. 83 deve ser verificada normalmente; porém qualquer afirmação sobre progressão, vedação extraída do art. 112 ou comparação de datas exige `acervo/legislacao/matriz-temporal-art-112-lep.md`, fontes oficiais consultadas no mesmo dia, regra intertemporal e revisor humano. Se incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`** quanto à progressão; não usar número histórico como regra atual.

## Natureza e base legal

- **Natureza jurídica:** última etapa do **sistema progressivo** e instituto autônomo de execução; coexiste com a progressão. Fundamento constitucional: individualização da pena (CF, art. 5º, XLVI) e finalidade ressocializadora (LEP, art. 1º).
- **Dupla sede normativa:** regramento **material no Código Penal — art. 83 (requisitos) e arts. 84-90 (condições, revogação, suspensão, prorrogação e extinção)** — e **processual na LEP — arts. 131-146** (procedimento, audiência admonitória, oitiva do MP e do Conselho Penitenciário, fiscalização). Essa dualidade é tese central em casos-limite (ver §"Hediondo com resultado morte").
- **Art. 42, CP / art. 387, §2º, CPP** — detração (compõe o *dies a quo* do lapso).

## Requisito objetivo — lapso temporal (art. 83, I, II e V)

| Inciso | Fração | Situação |
|--------|--------|----------|
| I | **mais de 1/3** | pena ≥ 2 anos; **não reincidente em crime doloso** e com **bons antecedentes** |
| II | **mais de 1/2** | **reincidente em crime doloso** |
| V | **mais de 2/3** | **crime hediondo/equiparado, tortura, tráfico ou terrorismo**, se **não reincidente específico** nessas infrações |

**Vedações ao livramento:**
- **Reincidente específico** em hediondo/equiparado, tortura, tráfico e terrorismo (art. 83, V, parte final).
- **Hipóteses relacionadas a resultado morte** — verificar separadamente a versão temporal do art. 112 e a redação vigente do art. 83. Não transportar vedação entre institutos sem fonte oficial e análise individualizada.

**Requisito objetivo adicional pós-Anticrime (art. 83, III, "b"):** **ausência de falta grave nos 12 meses** anteriores à concessão.
> **REsp 1.970.217-MG (STJ, Inf. 776 — Tema 1161):** a alínea "b" é **requisito OBJETIVO** (não subjetivo) e **não limita** a análise do mérito, que abrange **todo o histórico prisional** (alínea "a"). São requisitos **cumulativos** e de planos distintos.

**Base de cálculo:** a fração incide sobre o total da pena privativa de liberdade; em concurso/unificação, soma-se as penas (teto de cumprimento — art. 75, CP). Fixar corretamente a **data-base** (ver abaixo).

## Requisito subjetivo — mérito (art. 83, III "a" e parágrafo único)

Cumulativos, aferidos por **elementos concretos** da execução:
1. **Bom comportamento durante a execução** (III, "a") — sobre **todo o histórico** (Tema 1161), não só o último ano.
2. **Bom desempenho no trabalho** e **aptidão para prover à própria subsistência** mediante trabalho honesto (III).
3. **Reparação do dano**, salvo efetiva impossibilidade (IV).
4. **Crime doloso com violência ou grave ameaça (parágrafo único):** exige-se a constatação de **condições pessoais que façam presumir que o liberado não voltará a delinquir** (requisito subjetivo agravado, só para crimes violentos).

**Julgados sobre o mérito (conferir vigência):**
- **HC 734.064-SP (Inf. 735):** histórico prisional conturbado + crime violento afasta a constatação do requisito subjetivo; a reabilitação da falta **não apaga automaticamente** o histórico para fins de mérito.
- **AgRg no HC 776.645-SP (Inf. 756):** a ausência de falta grave nos 12 meses **não basta** para satisfazer o requisito subjetivo (alínea "a").

➡️ **Leitura defensiva:** o indeferimento por mérito **exige fundamentação concreta**. Atacar: (i) motivação genérica; (ii) uso da gravidade abstrata; (iii) negativa fundada só em falta **remota e já reabilitada**, sem nexo com risco atual de reiteração.

> ⚠️ **Exame criminológico:** aplica-se por analogia o entendimento da progressão — não é obrigatório de forma genérica, só por **decisão fundamentada** (SV 26/STF; Súmula 439/STJ, no que couber). Exigência imotivada é constrangimento ilegal.

## Data-base e detração

> **AgRg no HC 1.026.000-BA (STJ, Inf. 872):** a data-base é a da **última prisão efetiva**. Três hipóteses: (a) preso preventivamente e mantido até o trânsito → data-base = início da preventiva; (b) preso, **solto** em liberdade provisória e **depois** preso para cumprir pena → data-base = **prisão definitiva**, sem prejuízo da **detração** do tempo de preventiva; (c) nunca preso cautelarmente → data-base = prisão após o trânsito. O tempo de provisória interrompido por soltura serve **apenas para detração**.

➡️ **Tese:** preventiva **ininterrupta** até a pena → data-base no início da preventiva (mais favorável). Houve soltura intermediária → pleitear **detração** (art. 387, §2º, CPP; art. 42, CP) para antecipar o lapso.

## Vedações e controvérsias (teses)

### Reincidente específico em hediondo (art. 83, V)
A vedação atinge **apenas o reincidente específico**. O **reincidente genérico** e o **primário** fazem jus ao livramento após **2/3**.
➡️ **Tese:** quando a reincidência não for em crime da mesma natureza hedionda/equiparada, **não há vedação** — aplica-se 2/3, exigindo-se identidade de natureza para caracterizar "reincidente específico".

### Hediondo com resultado morte e versões anteriores

Precedentes formados sob a redação da Lei 13.964/2019 podem ser relevantes para
fatos antigos, inclusive quanto à separação entre progressão e livramento. Eles
estão **`HISTORICOS — NÃO APLICAR AUTOMATICAMENTE`**: confirmar Tema 1196 e os
processos citados em fonte oficial, executar a matriz temporal e demonstrar a
compatibilidade da tese com a sucessão das Leis 15.358/2026 e 15.402/2026 antes
de mencionar qualquer valor.

### Tráfico privilegiado — não é hediondo
- **AgRg no HC 748.033-SC (Inf. 754):** o Pacote Anticrime apenas afastou a hediondez do **tráfico privilegiado** (art. 33, §4º, Lei 11.343/06); o tráfico **comum** permanece equiparado (CF, art. 5º, XLIII) → 2/3.
- **STF — ADI 4763/MT (Inf. 1193, Súmula Vinculante aprovada):** o tráfico privilegiado **não** configura crime hediondo, afastando os parâmetros rigorosos de progressão e livramento.
➡️ **Tese (vinculante):** reconhecido o privilégio, pleitear livramento com fração de **crime comum** (1/3 se não reincidente; 1/2 se reincidente), afastando os 2/3 e a vedação ao reincidente específico (ADI 4763/MT; AgRg no HC 748.033-SC).

## Período de prova, condições e revogação

### Período de prova (limitado ao art. 75, CP)
Corresponde ao **tempo restante** da pena. Ao final, sem revogação, a pena é declarada **extinta** (art. 90, CP).
> **REsp 1.922.012-RS (Inf. 712):** aplica-se ao livramento o teto do art. 75, CP — **um dia em livramento = um dia de pena**; o término deve coincidir com o alcance do limite legal.
➡️ **Tese:** em penas altas, redimensionar o período de prova ao **teto do art. 75** (40 anos na redação atual; conferir o teto vigente à época do fato — 30 anos antes da Lei 13.964/19).

### Condições (CP, art. 85; LEP, arts. 132-133)
- **Obrigatórias (art. 132, §1º):** obter ocupação lícita em prazo razoável (se apto); comunicar periodicamente a ocupação ao juízo; não mudar de comarca sem autorização.
- **Facultativas (art. 132, §2º):** não mudar de residência sem comunicação; recolher-se em hora fixada; não frequentar determinados lugares.
➡️ **Limite:** as condições devem ser **previstas em lei e fixadas na decisão concessiva**. Condição inventada à margem do regime legal é atacável (analogia com a vedação a condições criadas na execução).

### Revogação obrigatória (art. 86)
Nova **condenação a pena privativa de liberdade, irrecorrível**:
- **I** — por crime cometido **durante** a vigência → **não** se computa o tempo em livramento e **não** se concede novo livramento na mesma pena (art. 88).
- **II** — por crime **anterior** à concessão → o tempo em livramento **é computado** como pena cumprida e admite-se novo livramento (art. 141, LEP).

### Revogação facultativa (art. 87)
O juiz **pode** revogar se o liberado descumpre obrigação imposta, **ou** é irrecorrivelmente condenado, por crime ou contravenção, a pena **não** privativa de liberdade. Alternativa (LEP, art. 140, par. único): **advertir** ou **agravar as condições**.
> **AgRg no HC 537.982-DF (Inf. 670):** o descumprimento de condição do livramento **não** consta do rol taxativo de faltas graves (art. 50, LEP), logo não pode obstar indulto/comutação por suposto déficit de mérito.
➡️ **Tese (dupla):** descumprir condição autoriza, no máximo, revogação **facultativa** (art. 87) ou advertência/agravamento (art. 140, par. único) — **não** é revogação obrigatória nem falta grave; e, por não ser falta grave, **não** contamina outros benefícios.

### Suspensão e prorrogação
- **Suspensão (LEP, art. 145):** nova infração no curso do livramento → o juiz pode **suspender** o benefício (aguarda o desfecho).
- **Prorrogação (CP, art. 89):** processo por crime cometido na vigência → o livramento **não** se extingue automaticamente; só após decisão definitiva absolutória/extintiva declara-se a extinção (art. 90).

## Distinção crítica: livramento × progressão

| Aspecto | Progressão | Livramento |
|--------|------------|------------|
| O que altera | o **regime** (art. 112, LEP; regra depende da matriz temporal) | antecipa a **liberdade** (arts. 83-90, CP; fração própria a verificar) |
| **Falta grave** | **interrompe** e fixa nova data-base (Súm. 534) | **NÃO interrompe** (Súm. 441) |
| Vedação por reincidência | não veda (altera percentual) | **veda** reincidente específico em hediondo (art. 83, V) |

> **Súmula 441/STJ:** a falta grave **não interrompe** o prazo do livramento — o lapso continua correndo sobre a base original.
> **Atenção:** a falta grave não recalcula o **objetivo** (Súm. 441), mas o art. 83, III, "b" impõe, **adicionalmente**, ausência de falta grave nos 12 meses (requisito objetivo autônomo — Tema 1161). São planos distintos: interrupção do prazo (vedada) × condição de elegibilidade temporal (exigida). No **subjetivo**, falta grave pode repercutir, desde que valorada concreta e fundamentadamente.

## Cálculo do lapso

Convenção: frações sobre a pena; conferir a liquidação para precisão de dias (mês=30/ano=365 e detração exata).

```
lapso            = pena × fração (I = 1/3 | II = 1/2 | V = 2/3)   (exige cumprimento de MAIS de X)
período de prova = pena − tempo cumprido até o livramento
```

**Fluxo de decisão:**
```
1) Réu reincidente?
   ├── NÃO → bons antecedentes? → art. 83, I → mais de 1/3
   ├── SIM (reincidente doloso) → art. 83, II → mais de 1/2
   └── Hediondo/equiparado/tortura/tráfico/terrorismo? → art. 83, V → mais de 2/3
        ├── reincidente específico → VEDADO
        └── hediondo com resultado morte → VEDADO (resta a progressão)
   [tráfico privilegiado → fração de crime comum: 1/3 ou 1/2 — ADI 4763/MT]
2) Crime com violência/grave ameaça? → exigir art. 83, parágrafo único
3) Dano reparado (ou impossível)? art. 83, IV
4) Conceder → período de prova = pena restante (limitado ao art. 75)
```

**Exemplo numérico (didático, apenas do art. 83):** pena de 6 anos, estelionato, primário, bons antecedentes, dano reparado, preso desde 01/02/2023. Regra candidata → art. 83, I → **mais de 1/3**, após confirmação da redação vigente. Lapso = 6 × 1/3 = 2 anos; como a lei exige **mais de** 1/3, o marco seria posterior ao dia exato de cumprimento. Não comparar com data de progressão sem executar o Gate P0 do art. 112.

## Modelo de petição

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, com
fundamento no art. 83, [INCISO], do Código Penal e nos arts. 131 e seguintes da
Lei de Execução Penal, requerer

LIVRAMENTO CONDICIONAL

pelas razões a seguir.


I — DOS FATOS

O apenado cumpre pena de [PENA TOTAL] de reclusão pela prática do crime de
[CRIME], estando preso, por força de detração (art. 42 do CP), desde
[DATA DA PRISÃO]. É [PRIMÁRIO/REINCIDENTE], possui [BONS ANTECEDENTES] e
apresenta comportamento satisfatório durante a execução (atestado anexo).


II — DO DIREITO

a) Do requisito objetivo
Nos termos do art. 83, [INCISO], do CP, o condenado [não reincidente em crime
doloso e de bons antecedentes / reincidente em crime doloso / condenado por
crime hediondo ou equiparado, não reincidente específico] faz jus ao livramento
após o cumprimento de MAIS DE [1/3 | 1/2 | 2/3] da pena. Sobre a pena de
[PENA TOTAL], a fração corresponde a [LAPSO], implementado em [DATA DO LAPSO],
conforme cálculo de liquidação em anexo.

Cumpre-se, ainda, o requisito do art. 83, III, "b" (ausência de falta grave nos
últimos 12 meses), conforme atestado. [Se houver falta grave no histórico além
de 12 meses: sustentar a Súmula 441/STJ — a falta grave NÃO interrompe o lapso
do livramento — e a inexistência de óbice ao mérito por falta remota/reabilitada.]

b) Dos requisitos subjetivos
O apenado comprova comportamento satisfatório ao longo de todo o histórico
prisional (art. 83, III, "a"; REsp 1.970.217-MG, Tema 1161) e aptidão para
prover à própria subsistência, bem como a reparação do dano [ou a impossibilidade
de fazê-lo] (art. 83, IV), conforme documentos anexos.

c) [Conforme o caso]
[Crime SEM violência/grave ameaça: tratando-se de crime praticado sem violência
ou grave ameaça à pessoa, é inaplicável a exigência do art. 83, parágrafo único.]
[Crime COM violência/grave ameaça: demonstram-se as condições pessoais que fazem
presumir que o liberado não voltará a delinquir (art. 83, parágrafo único).]
[Tráfico privilegiado: reconhecido o art. 33, §4º, aplica-se a fração de crime
comum, afastados os 2/3 e a vedação ao reincidente específico — ADI 4763/MT.]


III — DO PEDIDO

Diante do exposto, requer:

a) a concessão do LIVRAMENTO CONDICIONAL, por preenchidos os requisitos do
   art. 83, [INCISO], III e IV, do CP;
b) a designação de audiência admonitória e a fixação das condições do período de
   prova (art. 132 da LEP), limitado o período de prova ao teto do art. 75 do CP
   (REsp 1.922.012-RS);
c) a oitiva do Ministério Público e do Conselho Penitenciário, na forma da lei.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA TOTAL], [CRIME], [DATA DA PRISÃO], [INCISO], [LAPSO], [DATA DO LAPSO], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. Cálculo de liquidação de pena atualizado (demonstra o cumprimento de mais de 1/3, 1/2 ou 2/3).
3. Atestado de comportamento satisfatório.
4. Folha de antecedentes (comprova primariedade/reincidência e antecedentes).
5. Comprovante de reparação do dano OU declaração de impossibilidade (art. 83, IV).
6. Proposta de ocupação lícita (reforça a aptidão para subsistência).

## Roteiro de tese (defesa)

1. **Classificar crime e condição** → fração (1/3, 1/2, 2/3) ou vedação.
2. **Fixar a data-base** na última prisão efetiva (AgRg no HC 1.026.000-BA) e pleitear detração (art. 387, §2º, CPP).
3. Invocar a **Súmula 441/STJ** contra interrupção do prazo por falta grave e distinguir o objetivo dos 12 meses (III "b") do mérito (III "a") — Tema 1161.
4. **Atacar indeferimento por mérito** sem motivação concreta (HC 734.064-SP; AgRg no HC 776.645-SP).
5. **Tráfico privilegiado e fatos antigos com resultado morte** → confirmar a classificação e o Tema 1196 em fonte oficial; qualquer comparação com progressão depende da matriz temporal, sem reproduzir valor histórico automaticamente.
6. **Descumprimento de condição** → revogação facultativa/advertência, nunca falta grave (AgRg no HC 537.982-DF). **Período de prova** limitado ao teto do art. 75 (REsp 1.922.012-RS). Fim do período sem revogação → extinção da pena (art. 90).

## Checklist e anti-padrões

- [ ] Crime e condição classificados (com/sem violência; hediondo; resultado morte; tráfico privilegiado; primário/reincidente genérico ou específico)?
- [ ] Fração do art. 83 conferida na redação vigente e, se houver interação com o art. 112, matriz temporal das Leis 14.843/2024, 15.358/2026 e 15.402/2026 preenchida?
- [ ] Data-base = última prisão efetiva (AgRg no HC 1.026.000-BA)? Detração pleiteada?
- [ ] Requisito objetivo dos 12 meses (art. 83, III, "b") atendido?
- [ ] Mérito demonstrado sobre **todo o histórico** (Tema 1161), não só o último ano?
- [ ] Reparação do dano comprovada ou impossibilidade declarada (art. 83, IV)?
- [ ] Crime com violência → condições pessoais do parágrafo único instruídas?
- [ ] Período de prova limitado ao teto do art. 75 (REsp 1.922.012-RS)?
- [ ] Súmulas e temas (441, 1161, 1196, ADI 4763/MT) conferidos via `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aplicar Súmula 534 (interrupção por falta grave) ao livramento — lá vale a **441** (não interrompe); ou confundir o requisito objetivo dos 12 meses (III "b") com o mérito (III "a").
- Tratar **descumprimento de condição** como falta grave (não está no art. 50, LEP).
- Aceitar indeferimento por mérito baseado só em gravidade abstrata, falta remota/reabilitada, ou exame criminológico genérico sem decisão fundamentada (SV 26/Súm. 439).
- Aplicar classificação ou vedação ao **tráfico privilegiado**, ou resolver caso antigo com resultado morte, sem confirmar a autoridade oficial e a regra temporal individualizada.

## Lembretes finais

- **Livramento é direito subjetivo** — indeferimento exige motivação concreta; e **falta grave NÃO interrompe o livramento** (Súm. 441), a distinção mais útil frente à progressão (Súm. 534).
- **Data-base, tráfico privilegiado e casos antigos com resultado morte** exigem confirmação das autoridades citadas e aderência ao caso; não converter resumo histórico em conclusão.
- **Conferir vigência** das Leis 14.843/2024, 15.358/2026 e 15.402/2026 e das súmulas/temas em fontes oficiais antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
