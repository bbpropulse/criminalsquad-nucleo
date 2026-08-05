---
name: execucao-defesa-regressao-regime
description: >-
  Use ao impugnar a regressão de regime (definitiva ou cautelar) na execução penal — hipóteses
  taxativas do art. 118 da LEP, exigência de oitiva prévia do apenado (art. 118, §2º), vedação da
  regressão per saltum, superveniência de condenação (art. 111) e ausência de fato definido como
  crime doloso ou de falta grave apurada em PAD. Gatilhos: regressão de regime, art. 118 LEP,
  regressão cautelar, oitiva prévia, regressão per… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-defesa-regressao-regime"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-defesa-regressao-regime", "execucao defesa", "regressao regime"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa contra Regressão de Regime (execução penal — art. 118 da LEP)

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

Esta skill orienta a **resistência do apenado à regressão de regime** perante o Juízo da Execução Penal — a peça e o roteiro de tese para **impugnar** o retorno a regime mais rigoroso (**aberto → semiaberto → fechado**). A regressão é o **movimento inverso** da progressão: nasce sempre de um **fato** (nova infração, falta grave, frustração de requisito) e só é legítima nas **hipóteses taxativas** do art. 118 da LEP, com **contraditório prévio**. Fora delas, é ilegal.

> **Lição central:** a regressão **não é automática nem presumida**. Antes de discutir mérito, verifique o **rito**: houve **oitiva prévia** do apenado (art. 118, §2º)? A hipótese está **entre as taxativas** do art. 118? Há **prova do fato** (PAD concluído / condenação transitada, conforme o caso)? Um "sim" a mais no rito costuma valer mais que dez teses de mérito — a **nulidade formal** anula a decisão inteira.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 118 e 111 da LEP e do art. 33, §2º, do CP — as **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução penal. Toda súmula, tema ou acórdão passa obrigatoriamente pelo Citation Gate. Na dúvida, **omitir vence inventar**.

> **Gate P0 do art. 112:** se a regressão repercutir em progressão, percentual, lapso ou nova data, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte as fontes oficiais no mesmo dia e registre regra intertemporal, alcance de decisões e revisor humano. Ausência de qualquer campo: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; não calcular nem redigir conclusão numérica.

## O que é a regressão e por que ela é excepcional

O regime prisional evolui pelo **sistema progressivo** (CF, art. 5º, XLVI; art. 33, §2º, CP): o apenado avança à medida que cumpre pena e demonstra mérito. A **regressão** é a exceção — o retrocesso a regime mais gravoso —, e por ser **restritiva de direito já incorporado ao patrimônio jurídico** do apenado, é de **interpretação estrita** e depende de **hipótese legal expressa** + **devido processo**. Impor regressão sem base legal ou sem contraditório viola o art. 5º, LIV e LV, da CF.

## Base legal

- **Art. 118 da LEP (Lei 7.210/84)** — hipóteses **taxativas** de regressão e a exigência de **oitiva prévia** (§2º).
- **Art. 118, I** — praticar **fato definido como crime doloso** OU **falta grave** (rol de faltas graves: arts. 50 a 52 da LEP).
- **Art. 118, II** — sofrer **condenação, por crime anterior, cuja pena somada** ao restante torne **incabível** o regime atual (requisito objetivo frustrado pela unificação — dialoga com o art. 111).
- **Art. 118, §1º** — regressão específica do **regime aberto** por frustração dos fins da execução (não pagar multa podendo, não trabalhar, descumprir condições) — **também exige oitiva** (§2º).
- **Art. 118, §2º** — **oitiva prévia do condenado** nas hipóteses do inciso I e do §1º (garantia do contraditório na execução).
- **Art. 111 da LEP** — **superveniência de nova condenação**: soma-se a pena ao restante para (re)definir o regime — regra da regressão do inciso II.
- **Art. 33, §2º, CP** — regimes (fechado, semiaberto, aberto) e a progressividade.
- **Arts. 50 a 52 da LEP** — **rol das faltas graves** (a falta grave só existe se prevista em lei — princípio da legalidade também na execução).
- **Art. 197 da LEP** — **agravo em execução** (recurso próprio contra a decisão que decreta a regressão; sem efeito suspensivo, em regra — daí a importância de pleitear a suspensão).

## As hipóteses taxativas — mapa do art. 118

| Base | Hipótese | O que a acusação/Juízo precisa provar | Onde a defesa ataca |
|------|----------|----------------------------------------|---------------------|
| **I, 1ª parte** | Praticar **fato definido como crime doloso** | Existência do fato doloso (não exige trânsito em julgado, mas exige **base concreta** e contraditório) | Ausência de dolo; fato não configura crime; falta de prova; falta de oitiva prévia |
| **I, 2ª parte** | Praticar **falta grave** | Falta **do rol dos arts. 50-52** apurada em **PAD** com ampla defesa | Falta atípica (fora do rol); PAD nulo/ausente; falta de oitiva; prescrição da falta |
| **II** | **Condenação por crime anterior** cuja soma torne incabível o regime | Trânsito em julgado + **unificação/soma** (art. 111) que estoure o percentual do regime | Erro no cálculo; regime ainda comportado; ausência de trânsito |
| **§1º** | **Regime aberto**: frustrar os fins da execução / não pagar multa **podendo** / descumprir condições | Descumprimento **injustificado** e voluntário | Impossibilidade econômica (multa); justa causa; ausência de oitiva (§2º) |

> **Rol fechado.** A regressão **só** cabe nessas hipóteses. Motivos genéricos ("frustração dos fins da execução", "gravidade", "clamor") **fora** das hipóteses do art. 118 **não autorizam** regressão. Se a decisão invoca fundamento que não se encaixa em I, II ou §1º, ataque a **atipicidade da hipótese**.

## Requisito de rito — oitiva prévia (art. 118, §2º)

A **oitiva prévia** do apenado é **exigência legal expressa** nas hipóteses do **inciso I** e do **§1º** (fato definido como crime doloso, falta grave e frustração dos fins da execução no regime aberto). É a face do **contraditório na execução penal**.

- **Regra:** não se decreta regressão nessas hipóteses **sem antes ouvir** o condenado, assegurando-lhe defesa técnica.
- **Ausência de oitiva → nulidade** da decisão de regressão (violação do art. 5º, LV, CF e do art. 118, §2º, LEP).
- **Momento:** a oitiva é **prévia** à decisão. Ouvir **depois** de já regredido não sana o vício (o contraditório é para influir na decisão, não para chancelá-la).
- **Distinção importante:** a hipótese do **inciso II** (nova condenação/soma de penas — art. 111) é matéria **objetiva de cálculo**; parte da jurisprudência dispensa oitiva prévia formal nessa hipótese específica, por não haver juízo de conduta a contraditar. **Confirme o entendimento atual** via `jurisprudencia-stj-stf` — é ponto de divergência e de vigência.

## Regressão cautelar — os limites

A prática admite **regressão cautelar** (provisória) quando há **fuga** ou **fato grave** que exija resposta imediata, antes da conclusão do PAD ou do trânsito da nova condenação. Mas ela é **excepcional** e sujeita a limites:

1. **Base concreta e fundamentada** — não basta a notícia; é preciso indício idôneo (ex.: auto de fuga, flagrante).
2. **Provisoriedade** — a cautelar **não substitui** o procedimento definitivo; instaura-se o **PAD** (falta grave) ou aguarda-se a condenação (crime doloso), com **oitiva** para a decisão **definitiva**.
3. **Não pode eternizar-se** — regressão cautelar mantida **indefinidamente** sem conclusão do apuratório vira punição sem processo. A defesa cobra a **conclusão do PAD** e o **retorno ao regime** se não confirmada a falta.
4. **Contraditório diferido, não suprimido** — mesmo na cautelar por fuga, o apenado deve ser ouvido **para a decisão definitiva**.

> **Tese defensiva:** a regressão cautelar é medida de urgência, não título definitivo. Decretada, **exige** a instauração e a conclusão do PAD (ou a superveniência de condenação) **com oitiva**; ausente esse desdobramento, a manutenção do regime mais gravoso é **ilegal** — cabendo agravo (art. 197) e, se necessário, HC.

## Regressão per saltum — vedação

Assim como a progressão **não** salta etapas (Súmula 491/STJ veda progredir do fechado direto ao aberto), a **regressão** também deve, em regra, **respeitar a escala** (aberto → semiaberto → fechado), salvo hipótese legal que justifique o salto. Impor a volta **direta ao fechado** de quem estava no **aberto**, sem fundamentação que ampare o pulo, é atacável.

> **Cautela:** a doutrina e a jurisprudência divergem sobre a **regressão per saltum** — parte admite o salto direto ao fechado diante de falta grave grave (ex.: fuga com violência), parte exige a passagem pelo intermediário. **Confirme o entendimento atual e majoritário** via `jurisprudencia-stj-stf` antes de sustentar a tese em concreto. Não afirme a vedação como absoluta sem checar.

## Teses defensivas (e as contra-teses da acusação)

**Teses de rito (atacam a validade da decisão):**
1. **Ausência de oitiva prévia (art. 118, §2º)** → nulidade da regressão (inciso I e §1º). *Contra-tese:* houve oitiva/defesa; ou hipótese do inciso II (cálculo) dispensa.
2. **PAD ausente, nulo ou sem ampla defesa** → a falta grave não pode embasar regressão sem procedimento válido. *Contra-tese:* PAD regular; ou regressão cautelar legítima pendente de conclusão.
3. **Falta grave atípica** — conduta **fora** do rol dos arts. 50-52 da LEP não é falta grave (legalidade). *Contra-tese:* enquadramento no rol.
4. **Prescrição da falta grave** — decurso do prazo para apuração/aplicação (analogia ao menor prazo prescricional do CP — **conferir critério atual** via `jurisprudencia-stj-stf`). *Contra-tese:* prazo não escoado.

**Teses de mérito (atacam o fato/o enquadramento):**
5. **Ausência de fato definido como crime doloso** — o fato não é crime, não é doloso, ou não há prova mínima. *Contra-tese:* materialidade e dolo demonstrados.
6. **Hipótese não taxativa** — o fundamento invocado não está no art. 118 (motivação genérica). *Contra-tese:* subsunção a I, II ou §1º.
7. **Erro no cálculo (inciso II)** — a soma de penas **não** estoura o regime atual; regime ainda comportado. *Contra-tese:* unificação correta (art. 111).
8. **Impossibilidade de pagamento da multa (§1º)** — não pagar por **incapacidade econômica** não é frustração voluntária; regressão por dívida é vedada. *Contra-tese:* podia pagar e não pagou (frustração dolosa).
9. **Justa causa para o descumprimento (§1º)** — o descumprimento das condições do aberto teve causa legítima (doença, desemprego involuntário). *Contra-tese:* descumprimento injustificado e reiterado.
10. **Per saltum sem amparo** — salto de regime sem fundamentação legal. *Contra-tese:* gravidade da falta justifica o salto (checar jurisprudência).

## Roteiro de análise (defesa) — passo a passo

1. **Identifique a hipótese invocada** na decisão de regressão — é I (crime doloso/falta grave), II (nova condenação) ou §1º (aberto)? Se **nenhuma**, ataque a **atipicidade da hipótese**.
2. **Cheque o rito:** houve **oitiva prévia** (§2º)? Houve **PAD** com ampla defesa (se falta grave)? Sem eles → **nulidade**.
3. **Cheque a prova do fato:** há base concreta do crime doloso, ou está apenas noticiado? A falta está **no rol** (arts. 50-52)? A condenação **transitou** (inciso II)?
4. **Cheque o cálculo (inciso II):** a soma de penas realmente estoura o percentual do regime, ou o regime ainda é comportado? Confira a liquidação.
5. **Cheque a cautelar:** se foi **cautelar**, o PAD foi instaurado e concluído? Está se eternizando sem conclusão? → cobre conclusão / retorno ao regime.
6. **Cheque o salto:** houve **per saltum** direto ao fechado sem fundamentação? → impugne (checar jurisprudência).
7. **Cheque prescrição e justa causa** (falta grave; multa; condições do aberto).
8. **Defina a via:** agravo em execução (art. 197) contra a decisão; pedido de **suspensão** dos efeitos; HC se houver ilegalidade/constrangimento manifesto.
9. **Passe tudo pelo Citation Gate** (`jurisprudencia-stj-stf`) e submeta à **revisão humana**.

## Súmulas e precedentes relevantes (conferir vigência via `jurisprudencia-stj-stf`)

**Súmulas notórias (dispositivos e enunciados de que se tem certeza — ainda assim confira o texto e a vigência):**
- **Súmula Vinculante 9/STF** — a falta grave **não** apaga automaticamente os efeitos benéficos de forma irrestrita; disciplina a perda de remição/comutação (**conferir alcance atual** antes de citar em concreto).
- **Súmula 526/STJ** — o reconhecimento de falta grave decorrente do **cometimento de novo crime doloso** no curso da execução **independe do trânsito em julgado** do processo penal relativo ao novo crime. *(Impacto direto: para falta grave por novo crime, o Juízo não precisa esperar a condenação definitiva — mas ainda deve apurar em PAD com contraditório. Confirme redação/vigência.)*
- **Súmula 534/STJ** — a **falta grave interrompe** o prazo para **progressão** (nova data-base sobre o saldo). *(Relevante porque a regressão por falta grave costuma vir acompanhada da interrupção do lapso — mas são efeitos distintos; não confunda.)*
- **Súmula 535/STJ** — a falta grave **não interrompe** o prazo para **comutação/indulto**.
- **Súmula 441/STJ** — a falta grave **não interrompe** o prazo para **livramento condicional**.

> **Atenção à distinção dos efeitos da falta grave** (a defesa usa isso a favor): a falta grave pode **fundamentar regressão** e **interromper a progressão** (Súm. 534), mas **não** atinge livramento (Súm. 441) nem comutação/indulto (Súm. 535). Se a decisão de regressão pretender estender efeitos além do cabível, impugne.

> **Precedentes específicos (números de HC/REsp/RE, temas, informativos):** qualquer acórdão concreto sobre (a) **necessidade de oitiva prévia** e nulidade por sua ausência, (b) **regressão cautelar** e seus limites, (c) **regressão per saltum**, (d) **prescrição da falta grave**, ou (e) dispensa de oitiva no inciso II é **[NAO VERIFICADO]** aqui e **deve ser conferido** via a skill `jurisprudencia-stj-stf` antes de ir para a peça. **Não cite número de julgado de memória.** Prefira sustentar a **tese** e o **dispositivo legal** (art. 118, §2º; art. 5º, LV, CF; arts. 50-52 LEP) a arriscar um acórdão inexistente.

## Modelo de peça — agravo / impugnação à regressão

> A via mais comum é o **agravo em execução (art. 197 LEP)** contra a decisão que decretou a regressão; havendo ilegalidade manifesta, também cabe **HC**. Antes da decisão (quando há intimação para manifestação), a mesma matéria vira **manifestação/defesa prévia** invocando o §2º. Adaptar o cabeçalho à via escolhida.

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, inconformado com a r. decisão que decretou a
REGRESSÃO ao regime [SEMIABERTO/FECHADO], interpor

AGRAVO EM EXECUÇÃO (art. 197 da LEP)

requerendo, desde logo, a SUSPENSÃO dos efeitos da regressão, pelas razões de
fato e de direito a seguir expostas.


I — DOS FATOS

O apenado cumpria pena de [PENA TOTAL] em regime [REGIME ANTERIOR], quando foi
decretada a regressão ao regime [REGIME IMPOSTO], sob o fundamento de
[HIPÓTESE INVOCADA — ex.: prática de falta grave / novo crime doloso / soma de
penas / descumprimento das condições do aberto].


II — DO DIREITO

a) Da taxatividade das hipóteses (art. 118 da LEP)
A regressão de regime só é admissível nas hipóteses TAXATIVAS do art. 118 da
LEP, de interpretação estrita por restringir direito já incorporado. No caso,
[demonstrar que o fundamento invocado NÃO se enquadra em I, II ou §1º / ou que,
embora invocado o inciso [X], seus requisitos não estão presentes].

b) Da nulidade por ausência de oitiva prévia (art. 118, §2º)
[SE for hipótese do inciso I ou do §1º:] A decisão foi proferida SEM a oitiva
prévia do apenado, exigida pelo art. 118, §2º, da LEP, em nítida violação ao
contraditório e à ampla defesa (art. 5º, LV, da CF). A ausência dessa formalidade
essencial IMPÕE A NULIDADE da regressão.

c) [Da falta grave — ausência/nulidade do PAD:]
A falta grave que embasa a regressão [não foi apurada em PAD / o PAD é nulo por
[cerceamento de defesa] / a conduta não integra o rol dos arts. 50 a 52 da LEP,
sendo atípica]. Sem procedimento válido, a falta grave não pode fundamentar a
regressão.

d) [Da regressão cautelar sem conclusão:]
A regressão foi decretada em caráter CAUTELAR e, decorrido [período], não houve
conclusão do PAD nem superveniência de condenação, perpetuando-se punição sem o
devido processo — o que impõe o retorno ao regime anterior.

e) [Do inciso II — erro de cálculo:]
A soma da pena superveniente ao restante NÃO torna incabível o regime atual,
conforme o cálculo de liquidação anexo, sendo indevida a regressão.

f) [Da multa/condições no regime aberto — §1º:]
O descumprimento decorreu de [incapacidade econômica de pagar a multa / justa
causa (doença/desemprego involuntário)], não configurando frustração VOLUNTÁRIA
dos fins da execução, vedada a regressão por mera dívida.


III — DO PEDIDO

Diante do exposto, requer:

a) a SUSPENSÃO imediata dos efeitos da regressão, mantendo-se o regime
   [REGIME ANTERIOR] até o julgamento;
b) o PROVIMENTO do agravo para CASSAR a decisão de regressão, seja por
   [nulidade (ausência de oitiva/PAD)], seja por [não configuração da hipótese
   do art. 118];
c) subsidiariamente, [a substituição do salto por regressão ao regime
   imediatamente anterior / a conclusão do PAD com oitiva antes de qualquer
   decisão definitiva];
d) a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA TOTAL], [REGIME ANTERIOR], [REGIME IMPOSTO], [HIPÓTESE INVOCADA], [INCISO], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. Cópia da **decisão de regressão** impugnada.
3. Cópia do **PAD** (para atacar sua ausência/nulidade, quando falta grave).
4. **Cálculo de liquidação de pena** atualizado (essencial na hipótese do inciso II).
5. Comprovantes da **justa causa / incapacidade econômica** (hipótese do §1º).
6. Termo/ata que demonstre **se houve ou não oitiva prévia** (§2º).

## Erros comuns e anti-padrões (evitar)

- **Discutir só o mérito e esquecer o rito** — a ausência de **oitiva prévia** (§2º) e o **PAD nulo/ausente** costumam ser o caminho mais curto para anular a regressão. Cheque o rito **primeiro**.
- **Aceitar hipótese fora do rol** — regressão por fundamento genérico ("gravidade", "frustração") **não** listado no art. 118. Exija a subsunção a I, II ou §1º.
- **Confundir os efeitos da falta grave** — a falta grave embasa regressão e interrompe a **progressão** (Súm. 534), mas **não** atinge livramento (Súm. 441) nem indulto/comutação (Súm. 535). Não deixe a decisão estender efeitos indevidos.
- **Tratar a regressão cautelar como definitiva** — cobrar a instauração/conclusão do PAD e a oitiva; a cautelar não pode eternizar-se.
- **Deixar de impugnar o per saltum** — salto direto ao fechado sem fundamentação (checar jurisprudência atual).
- **Aceitar regressão por não pagamento de multa sem verificar capacidade econômica** — é vedada a regressão por mera dívida sem frustração voluntária.
- **Errar a via recursal** — contra a decisão de regressão o recurso é o **agravo em execução (art. 197)**; pleitear a **suspensão** dos efeitos (o agravo, em regra, não a tem automaticamente).
- **Citar número de acórdão de memória** — todo precedente passa pelo Citation Gate (`jurisprudencia-stj-stf`); **omitir vence inventar**.

## Checklist final (defesa)

- [ ] A **hipótese** da decisão está entre as taxativas do art. 118 (I, II ou §1º)?
- [ ] Houve **oitiva prévia** do apenado (art. 118, §2º) nas hipóteses do inciso I e do §1º?
- [ ] Se falta grave: há **PAD** válido, com ampla defesa, e a conduta está **no rol** (arts. 50-52)?
- [ ] Se novo crime doloso: há **base concreta** e o enquadramento observa a distinção da Súm. 526/STJ?
- [ ] Se inciso II: o **cálculo** (art. 111) realmente estoura o regime, ou ele ainda é comportado?
- [ ] Se §1º: o descumprimento/não pagamento foi **voluntário**, ou houve **justa causa / incapacidade econômica**?
- [ ] A regressão foi **cautelar**? O PAD foi instaurado e **concluído**? Está se eternizando?
- [ ] Houve **per saltum** sem fundamentação (checar jurisprudência)?
- [ ] Verifiquei **prescrição** da falta grave (critério atual)?
- [ ] Escolhi a **via** correta (agravo do art. 197) e pedi a **suspensão** dos efeitos?
- [ ] Todas as súmulas/precedentes conferidos e a **redação vigente** dos arts. 118/111 checada (Leis 14.843/2024, 15.358/2026 e 15.402/2026)?
- [ ] **Revisão humana** do advogado responsável realizada antes de protocolar?

## Nota de conformidade

Este material é **rascunho técnico de apoio**, sujeito a **revisão humana obrigatória** — nenhuma peça é protocolada sem a conferência final do(a) advogado(a) responsável (CED/OAB, art. 2º; Provimento 205/2021 do CFOAB para publicidade e uso de IA; na Defensoria, LC 80/94; no MP, disciplina do CNMP, quando aplicável ao polo). **Citação de jurisprudência:** nenhuma súmula, tema, informativo ou acórdão vai para a peça sem passar pela skill `jurisprudencia-stj-stf` / best-practice `verificacao-citacoes` — há sanções reais por jurisprudência inventada por IA. **Vigência:** confira sempre a redação atual do art. 118 e do art. 111 da LEP antes de fundamentar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
