---
name: execucao-remicao
description: >-
  Use ao elaborar pedido de remição de pena na execução penal (trabalho, estudo, leitura — arts.
  126-130 LEP) e ao enfrentar os efeitos da falta grave (art. 127 LEP; SV 9/STF; Súmulas
  533/534/535/441 STJ). Gatilhos: remição, dias remidos, trabalho do preso, estudo/EaD/ENEM/ENCCEJA,
  leitura, falta grave, revogação de dias remidos, PAD, regressão por falta grave. Não use para
  decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  engines: ["remission"]
  risk_level: "r4"
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-remicao"]
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-remicao", "execucao remicao"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Remição de Pena e Efeitos da Falta Grave

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

Esta skill orienta dois movimentos que costumam andar juntos na execução penal: **pleitear/preservar a remição** (abatimento de dias da pena pelo trabalho, estudo ou leitura — arts. 126-130 LEP) e **limitar os efeitos da falta grave**, sobretudo a **revogação de até 1/3 dos dias remidos** (art. 127 LEP; SV 9/STF).

> **Motor auditável:** depois de o profissional confirmar a regra de conversão e sua aplicabilidade, use `scripts/legal-calculators/remission-engine.mjs`. O motor não conhece modalidade legal por memória: recebe conversões, fontes, atestação humana e registros ancorados; bloqueia ausência ou conflito e produz memória JSON.

> **Lição central:** a remição é **direito subjetivo** do apenado (preenchidos os requisitos) e, ao mesmo tempo, **instrumento de ressocialização**. A falta grave **não apaga** o que já foi remido — autoriza revogar **no máximo 1/3**, de forma **facultativa, fundamentada e proporcional** (art. 57 LEP). O erro mais comum da defesa é tratar a perda como automática e total.

> **Mapa de efeitos da falta grave (o coração do tema):** a falta grave atinge **progressão, remição e regressão**, mas **NÃO** atinge **livramento condicional, comutação e indulto**. Quem domina esse quadro evita que o juízo estenda indevidamente os efeitos.

## Mapa dos efeitos da falta grave — o que atinge e o que NÃO atinge

| Instituto | A falta grave afeta? | Como | Fundamento |
|---|---|---|---|
| **Progressão de regime** | **SIM** | interrompe o prazo e fixa **nova data-base** sobre o saldo | Súmula 534/STJ |
| **Remição** | **SIM** | autoriza revogar **até 1/3** dos dias remidos | art. 127 LEP; SV 9/STF |
| **Regressão de regime** | **SIM** | é causa de regressão (definitiva e cautelar) | art. 118, I, LEP |
| **Livramento condicional** | **NÃO** interrompe o prazo | mas falta grave nos últimos 12 meses **impede** (CP, art. 83, III, *b*) e o histórico pesa no requisito subjetivo | Súmula 441/STJ |
| **Comutação / Indulto** | **NÃO** interrompe o lapso | mas falta no período de 12 meses do decreto **pode obstar**, conforme o decreto | Súmula 535/STJ |

> Distinção mais cobrada: **falta grave NÃO interrompe livramento (Súm. 441) nem comutação/indulto (Súm. 535)** — diferentemente da progressão (Súm. 534) e da remição (art. 127). Use essa tese sempre que o juízo tentar irradiar a falta para todos os benefícios.

## Base legal e súmulas

**Legislação:**
- **Art. 126 LEP** — institui a remição por trabalho e por estudo; **§1º** fixa as proporções; **§5º** o acréscimo de 1/3 por conclusão de curso; **§4º** a remição ficta do acidentado; **§6º** estende a remição pelo estudo ao aberto e ao livramento.
- **Arts. 127-130 LEP** — art. 127 (revogação de até 1/3 por falta grave); art. 129 (registro/atestado dos dias remidos pela autoridade).
- **Art. 50 LEP** — rol **taxativo** das faltas graves (fuga, posse de celular, instrumento perfurante, descumprimento de condições do aberto, desobediência etc.); **art. 52** (crime doloso também é falta grave); **art. 57** (critérios de dosimetria disciplinar: natureza, motivos, circunstâncias e consequências da falta, e a pessoa do faltoso).
- **Art. 118, I, LEP** — a falta grave autoriza a **regressão de regime**.
- **Leis** 12.433/2011 (deu a atual redação do art. 127, com o teto de 1/3) e 13.964/2019 (novos requisitos do livramento — CP, art. 83, III).

**Súmulas e teses (existentes — conferir vigência antes de citar):**
- **SV 9/STF** — o art. 127 da LEP foi recepcionado pela Constituição; a perda de até 1/3 dos dias remidos é legítima e não se sujeita ao limite do *caput* do art. 58.
- **Súmula 534/STJ** — falta grave **interrompe** o prazo da progressão, que se reinicia da data da infração.
- **Súmula 535/STJ** — falta grave **NÃO** interrompe o prazo para comutação ou indulto.
- **Súmula 441/STJ** — falta grave **NÃO** interrompe o prazo do livramento condicional.
- **Súmula 533/STJ** — para reconhecer falta disciplinar, é **imprescindível o PAD** instaurado pelo diretor, com defesa por advogado constituído ou defensor público.
- **Súmula 562/STJ** — admite-se remição pelo estudo realizado fora do estabelecimento (ensino a distância, conforme regulamentação).

> ⚠️ **Não confundir:** a **SV 5/STF** ("a falta de defesa técnica no PAD não ofende a Constituição") é da seara administrativa comum. Na **execução penal** prevalece a **Súmula 533/STJ**, que **exige** defesa técnica no PAD da falta grave. São planos distintos.

## Remição — modalidades e proporções (art. 126, §1º)

| Modalidade | Proporção | Base legal |
|---|---|---|
| **Trabalho** | 1 dia de pena a cada **3 dias** trabalhados (jornada de 6 a 8h) | art. 126, §1º, II |
| **Estudo** | 1 dia de pena a cada **12 horas** de frequência escolar, divididas em **no mínimo 3 dias** | art. 126, §1º, I |
| **Leitura** | remição reconhecida pela jurisprudência (Tema 1278/STJ), validada por comissão do juízo | art. 126 LEP + Recomendação CNJ |
| **Conclusão de curso** | acréscimo de **1/3** sobre os dias remidos pelo estudo | art. 126, §5º |
| **Cumulação** | trabalho + estudo **somam-se**, se compatíveis os horários | art. 126, §3º |

**Teses jurisprudenciais úteis (extraídas do acervo — conferir overruling/afetação antes de usar):**
- **Horas excedentes de estudo computam** — o tempo que supera o teto de 12h/3 dias não se perde; conta para remir (HC 461.047-SP, Inf. 677/STJ). Mesma lógica das horas extras de trabalho além da 8ª hora.
- **Prova testemunhal é idônea** para comprovar trabalho interno, sobretudo havendo **falha estatal** no registro (HC 1.048.611-RS, Inf. 883/STJ). Não se indefere remição por ausência de registro formal quando a falha é do Estado.
- **EaD regular** exige **integração ao Projeto Político-Pedagógico (PPP)** da unidade + credenciamento da instituição no MEC/SISTEC (Tema 1236/STJ — REsp 2.085.556-MG; REsp 2.105.666-MG, Inf. 802). Instruir o pedido com esses elementos.
- **ENEM/ENCCEJA (esforço autodidata)** — cabe remição mesmo com diploma prévio de mesmo grau, **excluído o acréscimo de 1/3** se a etapa já fora concluída (AgRg no HC 768.530-SP, Inf. 767; REsp 2.156.059-MS, Inf. 833). Vedado o **bis in idem** por repetição do **mesmo** exame (AgRg no HC 1.045.443-SP, Inf. 884); ENEM e ENCCEJA têm naturezas distintas (remições autônomas possíveis).
- **Base de cálculo ENCCEJA** — 1.600h já equivalem aos 50% legais → **133 dias** (todas as áreas) ou **26 dias por área** (HC 602.425-SC, Inf. 689; RE 979962/RS, Inf. 1011, interpretação *in bonam partem*).
- **Leitura** (Tema 1278/STJ — REsp 2.121.878-SP, Inf. 859) — válida desde que aferida pela **Comissão de Validação** do juízo (Resolução 391/2021/CNJ); atestado por profissional **contratado pelo apenado** é inválido.
- **Remição ficta — exceção:** só (i) acidentado (art. 126, §4º); (ii) quem **já** trabalhava/estudava e foi impedido pela pandemia (Tema 1120 — REsp 1.953.607-SC); (iii) doença grave incapacitante de quem já trabalhava (AgRg no HC 1.001.270-BA, Inf. 869). **Não** alcança trabalho eventual nem omissão estatal genérica (HC 684.875-DF, Inf. 768).
- **Amamentação/cuidados maternos** reconhecidos como trabalho para remição, com perspectiva de gênero (HC 920.980-SP, Inf. 859/STJ).

## Falta grave — atipicidade, PAD e casos-limite

**Rol taxativo (art. 50):** conduta fora do rol **não** é falta grave (AgRg no HC 537.982-DF, Inf. 670/STJ). Aplicações:
- **Celular em trabalho externo sem vedação judicial expressa** não configura falta grave (AgRg no HC 866.758-SP, Inf. 817/STJ) — atipicidade formal.
- **Recusa ao trabalho** tem classificação **controvertida** (grave × média) — cabe sustentar a desclassificação (AgRg no PExt no HC 773.507-SC, Inf. 769/STJ).
- **Posse de droga para uso pessoal no presídio** — o STJ entende que **configura** falta grave, apesar do Tema 506/STF (descriminalização); contra-tese de atipicidade hoje é minoritária (AgRg no REsp 2.234.146-MG, Inf. 885/STJ).

**Procedimento (Súmula 533/STJ):** sem **PAD** com contraditório e **defesa técnica**, a falta grave não pode ser reconhecida — e sem falta válida não há base para revogar dias remidos.

**Independência das instâncias mitigada:** se o **único fato** que motivou a falta resultou em **absolvição criminal** (inclusive por ausência de provas), não se sustenta a mesma falta no PAD (HC 601.533-SP, Inf. 712/STJ).

**Regressão cautelar (Tema 1347/STJ — REsp 2.166.900-SP):** admite-se regressão provisória pelo poder geral de cautela, com **fundamentação idônea**, até a apuração definitiva; ainda assim, exigir PAD imediato e contraditório.

## Cálculo (sempre conferir e anexar demonstrativo)

```
remição por trabalho = dias trabalhados ÷ 3
remição por estudo   = horas de estudo ÷ 12
remição por leitura  = conforme parâmetros da comissão/Recomendação CNJ
remição total        = soma das modalidades  (+ 1/3 sobre o estudo, se concluiu curso — §5º)
```

**Efeito da falta grave sobre os dias remidos (art. 127; SV 9):**
```
revogação possível = ATÉ 1/3 dos dias remidos até a data da falta   (facultativa)
dias preservados   = total remido − fração revogada (mínimo 2/3)
contagem da remição = recomeça da data da infração disciplinar
```

**Exemplo (caso didático — apenado com 270 dias trabalhados e 240h de estudo):**
1. Trabalho: 270 ÷ 3 = **90 dias** remidos.
2. Estudo: 240 ÷ 12 = **20 dias** remidos.
3. **Total = 110 dias** remidos antes da falta.
4. Revogação máxima: 1/3 de 110 = 36,67 → o juiz pode revogar **até 36 dias**.
5. Cenário máximo (revoga 1/3): 110 − 36 = **74 dias** consolidados. Cenário mínimo (proporcionalidade): mais de 74 dias preservados.

> A revogação é **até** 1/3 — não é automática nem total. Os dias preservados continuam abatendo a pena e antecipando progressão/livramento. Sustentar sempre a **fração mínima** com base no art. 57 LEP.

## Estrutura da petição

Peça dirigida ao **Juízo da Vara de Execuções Penais**. Pode ter dupla finalidade: **reconhecer a remição** e, havendo falta grave, **limitar a revogação**.

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]

Autos de Execução Penal nº [Nº DA EXECUÇÃO]

[NOME DO APENADO], já qualificado nos autos da execução em epígrafe, por seu
advogado que esta subscreve, vem requerer o RECONHECIMENTO DA REMIÇÃO e, no
tocante à falta grave, a LIMITAÇÃO DA REVOGAÇÃO DOS DIAS REMIDOS, com fundamento
nos arts. 126 e 127 da LEP, pelas razões a seguir.

I — DOS FATOS
O apenado, no curso da execução, trabalhou [Nº DE DIAS] dias e frequentou
[Nº DE HORAS] horas de atividade escolar [e/ou realizou leitura validada],
fazendo jus à remição correspondente. Sobreveio o reconhecimento de falta grave
consistente em [DESCRIÇÃO], apurada em procedimento administrativo disciplinar.

II — DO DIREITO

a) Do reconhecimento da remição (art. 126 da LEP)
Pela proporção legal — 1 dia de pena a cada 3 dias de trabalho e 1 dia a cada 12
horas de estudo — o apenado faz jus a [TOTAL DE DIAS REMIDOS] dias de remição,
conforme o demonstrativo anexo. [Se concluiu curso: acréscimo de 1/3 sobre o
estudo — art. 126, §5º.]

b) Da limitação da revogação (art. 127 da LEP; Súmula Vinculante 9)
A falta grave autoriza a revogação de ATÉ 1/3 dos dias remidos — limite máximo,
não obrigatório. Diante das circunstâncias [INDICAR: primariedade na execução,
bom histórico anterior, natureza e consequências da falta — art. 57 LEP],
requer-se que eventual revogação observe a proporcionalidade, preservando-se a
maior parte dos dias remidos. [Se for o caso: ausência de PAD válido com defesa
técnica (Súmula 533/STJ) impede o próprio reconhecimento da falta.]

c) Da inextensão dos efeitos (Súmulas 441 e 535 do STJ)
A falta grave NÃO interrompe o prazo para o livramento condicional (Súmula
441/STJ) nem para a comutação e o indulto (Súmula 535/STJ), efeitos que devem
ser preservados, ao contrário do que ocorre com a progressão (Súmula 534/STJ).

III — DO PEDIDO
Requer:
a) o RECONHECIMENTO de [TOTAL DE DIAS REMIDOS] dias de remição (art. 126 da LEP);
b) caso mantida a revogação por falta grave, que seja LIMITADA proporcionalmente,
   nos termos do art. 127 da LEP e da Súmula Vinculante 9;
c) a preservação dos lapsos de livramento, comutação e indulto (Súmulas 441 e
   535 do STJ);
d) a atualização do cálculo de liquidação de pena.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [Nº DE DIAS] trabalhados, [Nº DE HORAS] de estudo, [DESCRIÇÃO] da falta, [TOTAL DE DIAS REMIDOS], circunstâncias (art. 57), [LOCAL], [DATA], [ADVOGADO], [UF], [NÚMERO].

## Documentos a anexar

1. Procuração.
2. Demonstrativo de dias trabalhados (atestado da unidade prisional — art. 129 LEP).
3. Declaração/frequência escolar (horas de estudo) ou certificado de curso/exame (ENEM/ENCCEJA), com credenciamento e integração ao PPP no caso de EaD.
4. Comprovante de validação da leitura pela comissão do juízo, se for o caso.
5. Cópia do PAD que reconheceu a falta grave (para aferir a regularidade — Súmula 533/STJ).
6. Cálculo de liquidação de pena atualizado.

## Checklist e anti-padrões (verificar antes de protocolar)

**Remição (pleitear/preservar):**
- [ ] Classificou corretamente a modalidade e a proporção (trabalho 1:3; estudo 12h:1; leitura; +1/3 por curso — §5º)?
- [ ] Há **horas excedentes de estudo** a computar (HC 461.047-SP)?
- [ ] Havendo falha estatal de registro, invocou **prova testemunhal** (HC 1.048.611-RS)?
- [ ] EaD instruído com **PPP + credenciamento MEC/SISTEC** (Tema 1236)?
- [ ] ENEM/ENCCEJA: afastou o 1/3 se já concluíra a etapa e evitou **bis in idem** (mesmo exame)?
- [ ] Leitura validada pela **comissão do juízo** (Tema 1278), não por profissional contratado?
- [ ] Remição ficta cabível (acidente, pandemia para quem já atuava, doença grave incapacitante)?

**Falta grave (afastar/minimizar):**
- [ ] A conduta está no **rol taxativo** do art. 50? (atipicidade — celular extramuros sem vedação, etc.)
- [ ] Houve **PAD com defesa técnica** (Súmula 533)? Sem ele, não há falta válida.
- [ ] Cabível **independência mitigada** (absolvição criminal do mesmo fato — HC 601.533-SP)?
- [ ] Recusa ao trabalho: sustentar **desclassificação** de grave para média?
- [ ] Pediu revogação **abaixo de 1/3**, fundamentada na proporcionalidade (art. 57; SV 9)?
- [ ] Regressão cautelar: exigiu **fundamentação idônea** e PAD imediato (Tema 1347)?

**Anti-padrões:**
- Tratar a perda de dias remidos como **automática e total** — é facultativa e limitada a 1/3.
- Aceitar que a falta grave "zera" tudo — os dias remidos antes da falta (2/3 + a fração não revogada) **consolidam-se**.
- Deixar a falta grave **contaminar livramento, comutação e indulto** — ela não interrompe esses prazos (Súm. 441 e 535).
- Esquecer o **acréscimo de 1/3** por conclusão de curso (art. 126, §5º).
- Confundir **SV 5** (PAD administrativo comum) com a **Súmula 533** (PAD da execução exige defesa técnica).
- Citar julgado/súmula sem **conferir vigência** (overruling, nova afetação) e sem adaptar ao caso concreto.

## Lembretes finais

- **Dois movimentos:** reconhecer/preservar a remição (arts. 126-130) e limitar a revogação por falta grave (art. 127; SV 9).
- **Revogação é até 1/3, facultativa e proporcional** (art. 57) — nunca automática nem total.
- **Mapa dos efeitos:** falta grave atinge progressão, remição e regressão; **não** atinge livramento, comutação e indulto.
- **Sem PAD com defesa técnica (Súm. 533), não há falta grave** — ataque a base antes de discutir efeitos.
- **Anexar sempre o demonstrativo de cálculo** e os atestados de trabalho/estudo/leitura.
- **Conferir vigência** de súmulas, temas e julgados antes de citar — a jurisprudência sobre remição (EaD, ENEM, leitura, remição ficta) é movimentada.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
