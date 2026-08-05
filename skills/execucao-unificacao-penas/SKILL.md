---
name: execucao-unificacao-penas
description: >-
  Use ao elaborar pedido de unificação/soma de penas na execução penal — reunião de condenações de
  processos distintos (art. 111 LEP), limite de cumprimento de 40 anos (art. 75 CP), base dos
  benefícios pela soma total (Súmula 715/STF), detração (art. 42 CP) e frações escalonadas por
  natureza. Gatilhos: unificação de penas, soma de penas, art. 111 LEP, art. 75 CP, limite de
  cumprimento, Súmula 715, concurso × unificação, nova… Não use para decisão final, assinatura,
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
  eval_case_ids: ["csq-v5-execucao-unificacao-penas"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-unificacao-penas", "execucao unificacao", "unificacao penas"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Unificação de Penas (soma na execução)

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

Esta skill orienta a construção do **pedido de unificação/soma de penas perante o juízo da execução**. Unificação é a operação pela qual o juízo da execução **soma** as penas privativas de liberdade de um mesmo condenado — de um ou vários processos — para definir o **regime de cumprimento** e os **marcos dos benefícios**, observado o **limite máximo** de tempo de prisão (art. 75 CP).

> **Lição central:** o teto do art. 75 (30/40 anos) é **apenas o tempo máximo de prisão efetiva**. Os **benefícios** (progressão, livramento, indulto, comutação) são calculados sobre a **SOMA TOTAL das penas aplicadas**, ainda que ultrapasse o teto (**Súmula 715/STF**). Confundir as duas bases é o erro mais comum e mais grave do tema.

> **Princípio reitor (limite da execução — art. 66, III, "a", LEP):** o juízo da execução **não revê** pena nem regime fixados no título; apenas **administra o cumprimento somado** — somar/unificar, analisar a natureza dos crimes (hediondo/comum) e a condição pessoal (primário/reincidente) para fins de benefícios.

## Dois planos — não confundir concurso com unificação

| Plano | Onde ocorre | Quem decide | Regramento |
|-------|-------------|-------------|------------|
| **Concurso de crimes** (material art. 69, formal art. 70, continuidade art. 71 CP) | Fase de **conhecimento** — uma única ação penal | Juízo da **condenação** (sentença) | CP, arts. 69-71 (cúmulo material / exasperação) |
| **Soma/unificação** (art. 111 LEP) | Fase de **execução** — penas de **sentenças/feitos distintos** | Juízo da **execução** | LEP, art. 111; CP, art. 75 |

No **concurso**, as penas já vêm somadas ou exasperadas dentro do mesmo título. Na **unificação do art. 111 LEP**, o juízo da execução **reúne guias de processos distintos** e soma as reprimendas para fixar regime e calcular benefícios — **sem revisão do mérito da condenação** (REsp 2.049.870-MG, Inf. 792, Tema 1208).

## Base legal

- **Art. 111, caput, LEP** — havendo condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime será feita pelo **resultado da soma ou unificação** das penas, observada a **detração** ou **remição**.
- **Art. 111, parágrafo único, LEP** — sobrevindo condenação no curso da execução, **soma-se a pena ao restante** da que está sendo cumprida.
- **Art. 66, III, "a", LEP** — compete ao juízo da execução **somar ou unificar** as penas (e reconhecer reincidência para fins de benefícios, ainda que não declarada na sentença — Tema 1208).
- **Art. 75, caput, CP** (red. Lei 13.964/19) — o tempo de cumprimento das penas privativas de liberdade **não pode ser superior a 40 anos** (redação anterior: **30 anos**).
  - **§1º** — soma superior ao teto → penas **unificadas** para atender ao limite.
  - **§2º** — **nova unificação por fato posterior**: sobrevindo condenação por fato cometido **depois** do início do cumprimento, refaz-se a conta **desprezando o tempo já cumprido** — o teto volta a correr sobre o **saldo**.
- **Art. 42, CP** — detração (prisão provisória/domiciliar conta no cômputo).
- **Súmula 715/STF** — *"A pena unificada para atender ao limite de trinta anos de cumprimento, determinado pelo art. 75 do Código Penal, não é considerada para a concessão de outros benefícios, como o livramento condicional ou regime mais favorável de execução."*

> ⚠️ **Irretroatividade (art. 5º, XL, CF):** o teto de **40 anos** é lei penal **mais gravosa** (Lei 13.964/19, vigência 23/01/2020). Só se aplica a **fatos praticados a partir de 23/01/2020**; para crimes anteriores, permanece o teto de **30 anos**. Verificar a **data do fato** de cada condenação somada — não a data da unificação.

> ⚠️ A Súmula 715 menciona "trinta anos" porque é anterior ao Pacote Anticrime; ao citar, leia "trinta" como o teto vigente de **40 anos** (a *ratio* — base = soma, não o teto — permanece). O STF reafirmou a validade da súmula após a Lei 13.964/19.

## O ponto-chave — base dos benefícios é a SOMA, não o teto (Súmula 715/STF)

Este é o núcleo operacional e a armadilha que mais prejudica o apenado.

- O teto do art. 75 (30/40 anos) é **apenas o tempo máximo de encarceramento**.
- Progressão, livramento, indulto e comutação incidem sobre a **soma total das penas aplicadas**, ainda que a soma ultrapasse o teto.

**Exemplo numérico.** Apenado com penas que somam **120 anos** (crimes pós-Anticrime, sem hediondez, primário):
- **Cumprimento efetivo:** limitado a **40 anos** (art. 75).
- **Progressão:** calculada sobre **120 anos** (16% = 19 anos e 2 meses para a 1ª progressão), e **não** sobre 40 anos (que daria ~6 anos e 5 meses).

> A recíproca também vale: a soma/unificação **não é base universal** de todo instituto. Para o **requisito objetivo do indulto**, considera-se a pena do **delito individualmente**, e não o somatório da execução (HC 853.365-SP, Inf. 790; AgRg no HC 824.625-SP, Inf. 781). Cada instituto tem sua própria base de cálculo.

## Frações escalonadas — crimes de naturezas distintas na soma

Quando a soma reúne crimes de **naturezas diferentes** (comuns e hediondos/equiparados), **não se aplica fração única** sobre o total. O cálculo é **escalonado por natureza** (AgRg no HC 904.095-SP, Inf. 834): calcula-se o percentual **sobre o quantum de cada bloco de mesma natureza** e **somam-se os lapsos** para obter o marco da progressão.

| Bloco de penas somadas | Fração da progressão (art. 112 LEP) |
|------------------------|-------------------------------------|
| Crimes **comuns sem violência** | 16% (primário) / 20% (reincidente) |
| Crimes **comuns com violência/grave ameaça** | 25% (primário) / 30% (reincidente) |
| Crimes **hediondos/equiparados** | 40% / 50% / 60% / 70% conforme o inciso |

> **Reincidência por natureza (pós-Anticrime):** a reincidência só atinge delitos da **mesma natureza** — distinguindo comuns (com/sem violência) de hediondos/equiparados (com/sem resultado morte). É **condição pessoal** que acompanha o apenado por toda a execução, mas eleva o patamar **apenas dentro de cada natureza** (HC 904.095-SP). A aritmética concreta de proporcionalização deve ser conferida na ficha de cálculo da vara.

## Cálculo (sempre conferir)

| Passo | Regra | Observação |
|-------|-------|------------|
| 1. **Mapear condenações + data de cada fato** | define o teto: 30 anos (fato < 23/01/2020) ou 40 anos (fato ≥ 23/01/2020) | irretroatividade (art. 5º, XL, CF) |
| 2. **Somar todas as penas** | reclusão + detenção **somam-se** (mesma espécie — art. 111) | AgRg no REsp 1.991.853-MG, Inf. 771 |
| 3. **Aplicar o teto (art. 75)** | soma > teto → cumprimento efetivo limitado ao teto | **guarde a soma — é a base dos benefícios** |
| 4. **Benefícios sobre a SOMA** (Súmula 715) | fração da progressão/livramento sobre a soma | escalonar por natureza se houver hediondo |
| 5. **Fato posterior?** | nova unificação (art. 75, §2º) | desprezando o tempo já cumprido |
| 6. **Detração** (art. 42) | somar prisão cautelar/domiciliar + remição (art. 126) | fixa o *dies a quo* dos benefícios |

**Exemplo trabalhado.** Réu primário, 3 roubos majorados (grave ameaça, NÃO hediondos): 15 + 16 + 14 = **soma 45 anos**; preso desde 01/03/2020.
- Cumprimento efetivo: limitado a **40 anos** (01/03/2020 + 40 = 01/03/2060).
- Progressão (art. 112, III — 25%): base = **45 anos** → 45 × 25% = **11 anos e 3 meses** → semiaberto em **01/06/2031**.
  - ❌ Erro comum: usar 40 anos → 25% = 10 anos → 01/03/2030 (antecipa indevidamente em 1 ano e 3 meses).
- Livramento (art. 83, I — mais de 1/3): 45 ÷ 3 = **15 anos** → a partir de **02/03/2035**.

> **Termo inicial da execução unificada:** a **data da primeira prisão** (ou da **última falta grave**, para fins de progressão), pois nesse dia começou o resgate das reprimendas somadas (HC 762.729-SP, Inf. 761). A **detração** soma todos os períodos de privação efetiva e antecipa o *dies a quo* dos benefícios.

## Controvérsias e casos-limite que o advogado precisa dominar

- **Restritiva superveniente com PPL em curso (vedada a unificação automática):** havendo PPL em curso e sobrevindo condenação cuja pena foi **substituída** por restritiva de direitos, é **vedada** a conversão/unificação automática (ofende a coisa julgada). Pleitear a **suspensão** da restritiva até compatibilização — **não** a conversão (REsp 1.918.287-MG, Inf. 736, **Tema Repetitivo 1106**; AgRg no HC 1.080.161-RS, Inf. 890). Ressalva: cumprimento **simultâneo** no regime aberto.
- **Pena já integralmente cumprida não retroage:** se a 1ª execução foi extinta **antes** da formação da culpa do 2º processo, **não houve unificação** (art. 111) e a pena resgatada **não orienta** os cálculos da nova execução (HC 762.729-SP, Inf. 761). Só há unificação quando a nova condenação sobrevém **no curso** do resgate.
- **Reincidência reconhecida só na execução:** o juízo da execução **pode** reconhecer reincidência não declarada na sentença, sem ofensa à coisa julgada (REsp 2.049.870-MG, Inf. 792, Tema 1208) — faca de dois gumes. Impugnar reconhecimento indevido (ex.: condenação fora do período depurador — art. 64, I, CP).
- **Processos separados não exigem reunião:** a separação de feitos é faculdade do juiz (art. 80 CPP); fixada a pena em cada ação, a soma/unificação ulterior compete ao juízo da execução (RHC 157.077-SP, Inf. 735). Não é preciso brigar pela reunião na fase de conhecimento.
- **Livramento condicional respeita o teto:** o período de prova do livramento (restante da pena) é **limitado ao teto do art. 75** — um dia em livramento equivale a um dia de pena (REsp 1.922.012-RS, Inf. 712).
- **Prescrição executória independe de unificação:** o tempo preso por outro motivo impede o curso da prescrição executória (art. 116, p.ú., CP), e isso **não depende** da unificação formal (AgRg no RHC 123.523-SP, Inf. 670).
- **Reclusão + detenção — tema sob afetação:** a soma cumulativa hoje é admitida (Inf. 771), mas a "possibilidade de unificação de reclusão e detenção" foi **afetada** ao rito dos repetitivos como **Tema 1332** (Inf. 848) — **tese de mérito ainda não fixada**. Conferir o andamento antes de invocar a orientação como definitiva.

## Estrutura da petição

Petição única dirigida ao **juízo da execução** (VEP/VEC). Pede-se a unificação e a **fixação dos marcos sobre a soma** (Súmula 715), com **novo cálculo de liquidação**.

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA] — [UF]

Autos de Execução Penal nº [Nº DA EXECUÇÃO]

[NOME DO APENADO], já qualificado nos autos da execução em epígrafe, por seu
advogado que esta subscreve (procuração anexa), vem requerer a UNIFICAÇÃO DE
SUAS PENAS, com fundamento nos arts. 111 e 66, III, "a", da Lei de Execução
Penal e no art. 75 do Código Penal, pelas razões a seguir.

I — DOS FATOS
O apenado ostenta as seguintes condenações definitivas:
   a) [PROCESSO 1] — [CRIME] — pena de [PENA 1] — fato em [DATA DO FATO 1];
   b) [PROCESSO 2] — [CRIME] — pena de [PENA 2] — fato em [DATA DO FATO 2];
   c) [PROCESSO 3] — [CRIME] — pena de [PENA 3] — fato em [DATA DO FATO 3].
A soma das penas totaliza [SOMA TOTAL]. Encontra-se preso, por força de
detração (art. 42 do CP), desde [DATA DA PRISÃO].

II — DO DIREITO

   a) Da soma e do limite de cumprimento
   Nos termos do art. 111 da LEP, havendo condenação por mais de um crime em
   processos distintos, o regime e os marcos da execução são definidos pela
   SOMA das penas. O art. 75 do CP limita o tempo de cumprimento a [40 anos /
   30 anos, conforme a data dos fatos — irretroatividade da lei mais gravosa].

   b) Da base de cálculo dos benefícios (Súmula 715/STF)
   O limite do art. 75 refere-se apenas ao tempo máximo de prisão efetiva. Os
   benefícios — progressão de regime e livramento condicional — devem ser
   calculados sobre a SOMA das penas ([SOMA TOTAL]), e não sobre o limite,
   conforme a Súmula 715 do STF. Atingido o requisito objetivo da progressão em
   [DATA DA PROGRESSÃO] (com base na soma) e observada a detração desde
   [DATA DA PRISÃO], impõem-se os marcos corretos.

   c) (Se houver naturezas distintas) Das frações escalonadas
   Reunindo a soma crimes de naturezas diferentes (comuns × hediondos), é vedada
   a fração única do patamar mais gravoso sobre o total; impõe-se cálculo
   ESCALONADO por natureza (art. 112 da LEP), repercutindo a reincidência apenas
   dentro de cada natureza.

   d) (Se aplicável) Da nova unificação por fato posterior (art. 75, §2º)
   [sobrevindo condenação por fato posterior ao início do cumprimento, nova
   unificação, desprezando o tempo já cumprido].

III — DO PEDIDO
Requer:
   a) a UNIFICAÇÃO das penas das condenações acima, com elaboração de NOVO
      CÁLCULO de liquidação;
   b) que os marcos dos benefícios (progressão e livramento) sejam fixados sobre
      a SOMA das penas, nos termos da Súmula 715/STF [com cálculo escalonado por
      natureza, se for o caso];
   c) a observância do limite de cumprimento de [40/30] anos (art. 75 do CP)
      apenas para o tempo máximo de prisão efetiva.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cópia das sentenças/guias de recolhimento de cada condenação; cálculo de liquidação de pena atualizado (com a soma); folha de antecedentes (primariedade/reincidência); comprovante da detração (data da prisão).

## Checklist de teses (verificar antes de protocolar)

- [ ] **Todas** as condenações mapeadas, com a **data de cada fato** (define o teto: 30 ou 40 anos)?
- [ ] Soma corretamente computada (reclusão + detenção somam-se — art. 111)?
- [ ] **Base dos benefícios = SOMA**, não o teto do art. 75 (Súmula 715) — sustentada **expressamente**?
- [ ] Havendo natureza distinta na soma, pedido de **cálculo escalonado** (vedada fração única gravosa)?
- [ ] Reincidência aplicada **só dentro da mesma natureza** e dentro do período depurador (art. 64, I)?
- [ ] **Detração** (art. 42) e remição (art. 126) computadas no *dies a quo*?
- [ ] Fato posterior ao início do cumprimento → **nova unificação** (art. 75, §2º)?
- [ ] Restritiva superveniente com PPL em curso → pedir **suspensão** (não conversão — Tema 1106)?
- [ ] Termo inicial = **data da primeira prisão** (ou última falta grave para progressão)?

## Anti-padrões (NÃO fazer)

- **Calcular benefícios sobre o teto de 40/30 anos** em vez da soma — viola a Súmula 715 e prejudica o apenado.
- **Aplicar fração única** do patamar mais gravoso quando há crimes de naturezas distintas na soma.
- **Aceitar conversão automática** de restritiva superveniente com PPL em curso — pedir suspensão (Tema 1106).
- **Presumir o teto de 40 anos** para fatos anteriores a 23/01/2020 — para estes, o teto é 30 (irretroatividade).
- **Pedir ao juízo da execução que revise pena/regime do título** — sua função é somar/administrar, não rever o mérito.
- **Invocar o Tema 1332 como definitivo** — está apenas afetado, sem tese de mérito fixada (conferir andamento).
- **Citar jurisprudência sem conferir vigência** — checar overruling e novas afetações antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
