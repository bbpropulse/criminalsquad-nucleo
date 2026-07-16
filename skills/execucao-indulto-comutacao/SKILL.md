---
name: execucao-indulto-comutacao
description: >-
  Use ao elaborar pedido de indulto, comutação ou anistia na execução penal — decreto presidencial
  natalino anual (CF 84, XII), requisitos objetivo/subjetivo, vedações (CF 5º XLIII; Lei 8.072/90),
  cômputo de prisão provisória (Tema 1277), falta grave e Súmulas 535/441 STJ, efeitos (Súmula
  631/STJ). Gatilhos: indulto, comutação, anistia, graça, indulto natalino, decreto de indulto,
  extinção da pena, art. 107 II CP, requisito… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-indulto-comutacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-indulto-comutacao", "execucao indulto", "indulto comutacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Indulto / Comutação / Anistia (clemência soberana)

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

Esta skill orienta a construção do **pedido de indulto e comutação na execução penal** (e o registro conceitual da **anistia**). Na prática da execução, lida-se quase sempre com **indulto e comutação** — concedidos por **decreto presidencial natalino anual**. Indulto extingue a **pena** (não o crime); comutação é o **indulto parcial** (redução); anistia é **lei** do Congresso que apaga o **crime**.

> **Lição central — anti-invenção do decreto:** o decreto de indulto é **ANUAL**. Cada ano = **novo decreto** = **novas frações, artigos e data de corte**. NUNCA presuma a fração de um ano para outro. **Conferir sempre o texto oficial do decreto vigente** (Planalto) antes de peticionar; onde a numeração interna não estiver confirmada, marcar `[conferir decreto vigente]`.

> **Tese-mãe da defesa (regra de ouro):** o juízo da execução **não pode criar requisito** nem **ampliar vedação** não escrita no decreto — a interpretação extensiva das restrições invade a competência exclusiva do Presidente (art. 84, XII, CF). Preenchidos os requisitos, o benefício deve ser concedido por **sentença declaratória** (AgRg no HC 824.625-SP, Inf. 781; AgRg no HC 935.027-SP, Inf. 833). O STF, na **ADI 7390/DF** (Inf. 1166), assentou que o indulto é ato privativo e discricionário do Presidente, mas **admite controle jurisdicional** das balizas constitucionais.

## Tabela comparativa — anistia × indulto × comutação

| Critério | ANISTIA | INDULTO (pleno) | COMUTAÇÃO (indulto parcial) |
|----------|---------|-----------------|------------------------------|
| **Veículo** | Lei | Decreto presidencial | Decreto presidencial |
| **Autoridade** | Congresso Nacional | Presidente da República | Presidente da República |
| **Base constitucional** | CF, art. 48, VIII | CF, art. 84, XII | CF, art. 84, XII |
| **Objeto** | O fato/crime (em regra, crimes políticos) | A pena (extinção total) | A pena (redução parcial) |
| **Efeito penal** | Apaga o crime e seus efeitos penais | Extingue a **pena** (não o crime) | **Reduz** a pena remanescente |
| **Extinção da punibilidade** | CP, art. 107, II | CP, art. 107, II | CP, art. 107, II (parcial) |
| **Alcance** | Geral (impessoal) | Coletivo (natalino) ou individual (**graça**) | Coletivo |
| **Efeitos secundários** | Apagados (regra) | **Subsistem** (Súm. 631/STJ) | Subsistem |

> **Terminologia:** a **graça** é o indulto **individual**. Na execução, o decreto natalino é **indulto coletivo**; a **comutação** é o indulto parcial concedido pelo mesmo decreto a quem não atinge a fração do indulto pleno.

## Base legal

- **CF, art. 84, XII** — competência do Presidente para conceder indulto e comutar penas (decreto).
- **CF, art. 48, VIII** — competência do Congresso para conceder anistia (lei).
- **CF, art. 5º, XLIII** — insuscetíveis de **graça e anistia**: tortura, tráfico, terrorismo e hediondos.
- **Lei 8.072/90, art. 2º, I** — estende a vedação ao **indulto** (a CF, na literalidade, só veda graça e anistia).
- **CP, art. 107, II** — anistia, graça e indulto são causas de **extinção da punibilidade**.
- **CP, art. 42** — detração; base do cômputo da prisão provisória no requisito do decreto (Tema 1277).
- **LEP, arts. 187-193** — procedimento; arts. 50 e 126 — falta grave e remição.
- **Súmula 631/STJ** — *"O indulto extingue os efeitos primários da condenação (pretensão executória), mas não atinge os efeitos secundários, penais ou extrapenais."*
- **Súmula 535/STJ** — *"A prática de falta grave não interrompe o prazo para fim de comutação de pena ou indulto."*
- **Súmula 441/STJ** — *"A falta grave não interrompe o prazo para obtenção de livramento condicional."* (contexto correlato da execução).

> **Súmula 535/STJ (ponto de impacto):** a falta grave **não interrompe** o prazo para indulto/comutação — distinta da progressão, em que a falta grave reinicia a contagem. Atenção: isso convive com o **requisito subjetivo** próprio do decreto (ausência de falta grave nos **12 meses** anteriores à data de corte), que é uma **carência**, não interrupção de prazo. São coisas diferentes — não confundir.

## Decreto vigente — conferir o do ano

> Marco temporal de cada decreto: **25/12 do ano** (data de corte). Os **números de artigo internos** do decreto devem ser conferidos no texto oficial antes de peticionar — `[conferir decreto vigente]`.

**Decreto vigente (ciclo natalino 2025): Decreto nº 12.790, de 22/12/2025** ("Concede indulto natalino e comutação de pena") — confirmado em fonte oficial (Planalto). Decreto imediatamente anterior: **Decreto nº 12.338, de 23/12/2024**.

**Requisito objetivo (fração de pena cumprida até a data de corte) — referência do D 12.790/2025 — crimes SEM violência/grave ameaça:**

| Pena total | Primário | Reincidente |
|------------|----------|-------------|
| até 8 anos | **1/5** | 1/3 |
| até 12 anos | 1/3 | 1/2 |

- **Crimes COM violência/grave ameaça (pena até 4 anos):** 1/3 (primário) / 1/2 (reincidente).
- **Cumprimento integral (independe da pena total):** 15 anos ininterruptos (primário) / 20 anos (reincidente).
- **Comutação:** redução de parte da pena a quem cumpriu fração **menor** que a do indulto pleno — frações próprias no decreto `[conferir decreto vigente]`.
- **Cômputo do tempo:** soma-se prisão cautelar, domiciliar, prisão especial e recolhimento noturno (com/sem tornozeleira) + remição (art. 126 LEP).
- **Requisito subjetivo:** inexistência de **falta grave** reconhecida nos **12 meses** anteriores a 25/12.
- **Principais vedações do D 12.790/2025:** hediondos e equiparados, tortura, terrorismo, tráfico, crimes contra o Estado Democrático de Direito (inclui atos de 08/01/2023), violência contra a mulher, crimes sexuais, crimes ambientais e crimes contra a administração pública em certas hipóteses `[conferir decreto vigente]`.

> ⚠️ **Cada ano, novo decreto.** O acervo registra decretos sucessivos com numeração distinta — D 9.246/2017, D 11.302/2022, D 11.846/2023, D 12.338/2024 e **D 12.790/2025 (vigente)**. Reconfirme o número, o artigo e a fração no decreto que cobre a **data-base** do seu caso.

## Requisitos — como demonstrar

1. **Inexistência de vedação** — classificar o crime: vedado constitucionalmente (art. 5º, XLIII / Lei 8.072) ou pelo decreto? Conferir exclusões específicas (ex.: estelionato contra idoso).
2. **Requisito objetivo (fração)** — apurado **por crime individual**, **não pela soma/unificação** da execução (HC 853.365-SP, Inf. 790; AgRg no HC 824.625-SP, Inf. 781; ADI 7390/DF, Inf. 1166). Computar prisão provisória + remição até a data de corte.
3. **Requisito subjetivo** — ausência de falta grave (rol **taxativo** do art. 50, LEP) nos 12 meses anteriores à data de corte. O critério é a **data da prática** da falta (com PAD instaurado), não a da homologação (Tema 1195 — REsp 2.011.706-MG, Inf. 875).

## Cálculo do requisito objetivo

```
1) O crime está VEDADO? (hediondo, tortura, terrorismo, tráfico, viol. contra a
   mulher, sexual, ambiental, contra o Estado Democrático, etc.)
   ├── SIM → INELEGÍVEL
   └── NÃO ↓
2) Crime com violência/grave ameaça?
   ├── NÃO → pena ≤ 8a: 1/5 (primário) | 1/3 (reincidente)
   │         pena ≤ 12a: 1/3 (primário) | 1/2 (reincidente)
   └── SIM → pena ≤ 4a: 1/3 (primário) | 1/2 (reincidente)
   (OU cumprimento integral: 15 anos primário / 20 reincidente)
3) Tempo cumprido até a DATA DE CORTE ≥ fração? (somar cautelar/domiciliar + remição)
   ├── SIM → INDULTO (extinção da pena)
   └── NÃO → verificar COMUTAÇÃO (fração menor → redução)
4) Sem falta grave nos 12 meses anteriores à data de corte (pela data da PRÁTICA)?
   ├── SIM → defere
   └── NÃO → obstado o benefício
```

**Exemplo trabalhado (referência D 12.790/2025, corte 25/12/2025).** Réu primário, pena de **5 anos** por estelionato (art. 171 — sem violência, não hediondo); preso desde 10/01/2022.
- Faixa: pena ≤ 8 anos, sem violência, primário → **1/5**.
- Fração exigida = 1/5 de 5 anos = **1 ano**.
- Tempo cumprido (10/01/2022 → 25/12/2025) ≈ **3 anos, 11 meses e 15 dias** ≥ 1 ano → **requisito objetivo preenchido com folga**.
- Sem falta grave de 25/12/2024 a 25/12/2025 → requisito subjetivo preenchido.
- Estelionato não consta das vedações → **faz jus ao INDULTO** (extinção total — art. 107, II, CP), conferida exclusão específica.

## Controvérsias e casos-limite que o advogado precisa dominar

- **Teto de pena do decreto → por crime individual:** a soma/unificação **não é óbice** ao indulto; o teto de pena incide por crime (HC 853.365-SP, Inf. 790; AgRg no HC 824.625-SP, Inf. 781; ADI 7390/DF, Inf. 1166). **Tese forte.**
- **Crime impeditivo remanescente de unificação (VIRADA desfavorável):** se há um crime **vedado** e outro não, em ações diversas, o entendimento **atual** exige cumprir o impeditivo — o crime impeditivo vale **tanto no concurso quanto na unificação** (AgRg no HC 890.929-SE, Inf. 812, 3ª Seção; AgRg no HC 835.685-SC, Inf. 811). **Não invoque o Inf. 806** (tese antiga favorável — **superada**).
- **Prisão provisória anterior ao decreto (a favor — repetitivo):** computa-se o período de prisão provisória na fração de pena, conforme o art. 42 CP, *in bonam partem* (**Tema 1277** — REsp 2.069.773-MG, Inf. 840). Vincula a origem.
- **Falta grave (Súmula 535 + Tema 1195):** a falta grave **não interrompe** o prazo de indulto/comutação (Súm. 535/STJ); para o requisito subjetivo dos 12 meses, importa a **data da prática** (não a da homologação) — Tema 1195 (REsp 2.011.706-MG, Inf. 875). Verificar a data do **fato** da falta.
- **Faltas não graves / condições do livramento não obstam:** só a falta grave do art. 50 LEP (rol taxativo) obsta; descumprimento de condições do livramento, faltas médias/leves ou exigências criadas pelo juízo **não** impedem o indulto (AgRg no HC 537.982-DF, Inf. 670).
- **Crime patrimonial + Defensoria (a favor):** se o apenado por crime patrimonial (sem violência) é assistido pela **Defensoria Pública**, presume-se a **hipossuficiência** → reparação do dano **dispensada**; cabe ao MP provar o contrário (AgRg no HC 1.044.589-SP, Inf. 872; Tema 931). Sem assistência, o decreto pode exigir reparação ou comprovação da impossibilidade (AgRg no HC 935.027-SP, Inf. 833).
- **Tráfico privilegiado é indultável (a favor — STF):** o tráfico privilegiado (§ 4º do art. 33 da Lei 11.343/06) **não é hediondo** → pode ser contemplado por indulto (**Tema 1400/STF** — RE 1542482/SP, Inf. 1180). Conferir se o decreto do ano não veda especificamente o privilegiado `[conferir decreto vigente]`.
- **Facção/organização criminosa (desfavorável):** a vedação incide independentemente do rótulo; "organização ≠ facção" **não** afasta a vedação, e a participação pode ser reconhecida no próprio julgamento do pedido (AgRg no RHC 185.970-PR, Inf. 811).
- **Fato posterior ao decreto:** o indulto **só alcança condenados até a publicação** do decreto; não vale para fatos futuros, sob pena de *abolitio criminis* por decreto (HC 877.860-SP, Inf. 823).
- **Anistia legal setorial:** anistia não é só a do Congresso para crimes políticos — há **anistias legais setoriais** (lei especial) que esvaziam a justa causa (ex.: residência permanente a estrangeiro equivale a anistia, Lei 9.474/97 — AREsp 2.346.755-SP, Inf. 795).

## Procedimento (LEP, arts. 187-193)

| Etapa | Dispositivo | Conteúdo |
|-------|-------------|----------|
| Iniciativa | art. 188 | Apenado, MP, Conselho Penitenciário ou autoridade administrativa |
| Instrução | art. 189 | Petição + guia de recolhimento + atestado de conduta |
| Parecer | arts. 189-190 | Parecer do **Conselho Penitenciário** |
| Encaminhamento | art. 190 | Ao Ministério da Justiça (graça/indulto individual) |
| Declaração | arts. 192-193 | **Juízo da execução** declara extinta a pena (indulto pleno) ou ajusta a comutação |

> No **indulto coletivo** (decreto natalino), o juízo da execução reconhece **de ofício ou a requerimento** quem preenche os requisitos — decisão **declaratória** (AgRg no HC 824.625-SP, Inf. 781). Para o coletivo, dispensa-se o procedimento próprio da graça individual; basta o reconhecimento incidental no juízo da execução.

## Efeitos — Súmula 631/STJ

| Atingido pelo indulto | NÃO atingido |
|-----------------------|--------------|
| Pretensão **executória** (a pena) | **Reincidência** (efeito secundário penal) |
| Cumprimento da pena privativa de liberdade | **Maus antecedentes** |
| — | **Obrigação de reparar o dano** (efeito extrapenal) e demais efeitos (art. 91/92 CP) |

> **Anistia ≠ indulto neste ponto:** a anistia apaga o crime e, em regra, os efeitos penais (inclusive reincidência); o indulto **não** apaga a reincidência (Súm. 631/STJ). Na **comutação** (parcial), o juízo **ajusta o cálculo de liquidação**, reduzindo a pena a executar — o que pode antecipar progressão e livramento.

## Estrutura da petição

Petição única dirigida ao **juízo da execução** (VEP/VEC).

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA] — [UF]

Autos de Execução Penal nº [Nº DA EXECUÇÃO]

[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, com
fundamento no art. 107, II, do Código Penal e no Decreto Presidencial de Indulto
vigente ([DECRETO Nº E DATA — ex.: Decreto nº 12.790/2025]), requerer a

DECLARAÇÃO DE INDULTO e a EXTINÇÃO DA PENA
[ou, não atingida a fração do indulto: a COMUTAÇÃO da pena]

pelas razões a seguir.

I — DOS FATOS
O apenado cumpre pena de [PENA TOTAL] pela prática do crime de [CRIME], estando
preso desde [DATA DA PRISÃO]. Trata-se de réu [primário/reincidente], com
comportamento carcerário satisfatório, sem registro de falta grave no período de
referência do decreto.

II — DO DIREITO

   a) Da inexistência de vedação
   O crime de [CRIME] não se inclui entre as hipóteses vedadas pelo decreto
   (crimes hediondos e equiparados, tortura, terrorismo, tráfico, violência
   contra a mulher, entre outros), sendo o apenado elegível ao benefício.

   b) Do requisito objetivo
   Nos termos do decreto vigente, o condenado [primário/reincidente] por crime
   [sem/com] violência ou grave ameaça, com pena de [PENA TOTAL], faz jus ao
   indulto após o cumprimento de [FRAÇÃO DO DECRETO] da pena. Considerado o tempo
   cumprido até [DATA DE CORTE DO DECRETO], computada a detração e a remição
   (art. 126 da LEP), o requisito está [PREENCHIDO], conforme o cálculo de
   liquidação anexo. O requisito afere-se pela pena do delito INDIVIDUALMENTE,
   não pelo somatório da execução (HC 853.365-SP/STJ).

   c) Do requisito subjetivo
   O apenado não sofreu sanção por falta grave nos doze meses anteriores à data
   de corte, conforme atestado de conduta carcerária (doc. anexo).

III — DO PEDIDO
Requer:
   a) a oitiva do Conselho Penitenciário, na forma dos arts. 187 a 193 da LEP;
   b) a DECLARAÇÃO DO INDULTO e a consequente EXTINÇÃO DA PENA (art. 107, II, do
      CP) [ou, subsidiariamente, a COMUTAÇÃO da pena, com novo cálculo];
   c) a expedição do alvará de soltura.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cálculo de liquidação de pena (demonstra o cumprimento da fração); atestado de conduta carcerária (sem falta grave no período); folha de antecedentes (primariedade/reincidência); guia de recolhimento.

## Checklist de teses (verificar antes de protocolar)

- [ ] **Decreto vigente do ano** localizado (cobre a **data de corte** do caso) e frações/artigos conferidos no texto oficial?
- [ ] Crime **não vedado** (CF 5º, XLIII; Lei 8.072; vedações do decreto + exclusões específicas)?
- [ ] Requisito objetivo apurado **por crime individual**, não pela soma (HC 853.365-SP)?
- [ ] **Prisão provisória anterior** computada na fração (Tema 1277)?
- [ ] Requisito subjetivo: sem falta grave nos 12 meses, pela **data da prática** (Tema 1195)?
- [ ] Crime patrimonial + **Defensoria** → reparação do dano dispensada (Inf. 872; Tema 931)?
- [ ] **Tráfico privilegiado** → invocar a indultabilidade (Tema 1400/STF), conferida a vedação do ano?
- [ ] Pedido formulado como **declaração** (decisão declaratória — vedada interpretação extensiva)?
- [ ] Não atingida a fração do indulto → pleitear **comutação** (fração menor)?

## Anti-padrões (NÃO fazer)

- **Inventar fração, artigo ou data de corte do decreto** — conferir SEMPRE o texto oficial vigente; cada ano muda.
- **Reaproveitar o decreto do ano anterior** sem reconfirmar o do ciclo correspondente à data-base.
- **Aferir o requisito pela soma/unificação** quando é por **crime individual** (HC 853.365-SP).
- **Invocar o Inf. 806** (crime impeditivo) — superado pela virada dos Inf. 811/812 (STF/STJ exigem cumprir o impeditivo).
- **Tratar falta média/leve ou descumprimento de livramento como óbice** — só a falta grave do art. 50 LEP obsta (Inf. 670).
- **Confundir interrupção com carência:** a falta grave **não interrompe** o prazo do indulto (Súm. 535); o requisito dos 12 meses é carência, não interrupção.
- **Sustentar "organização ≠ facção"** para escapar da vedação — irrelevante (Inf. 811).
- **Esperar que o indulto apague reincidência/antecedentes/reparação** — subsistem (Súm. 631/STJ).
- **Citar jurisprudência sem conferir vigência** — checar overruling e nova afetação antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
