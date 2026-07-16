---
name: execucao-insalubridade-superlotacao
description: >-
  Use ao suscitar as consequências jurídicas das condições degradantes do cárcere — superlotação,
  insalubridade e violação da integridade do preso —, pleiteando abatimento/compensação de pena por
  dias em condição degradante (RE 580.252, Tema 365, e leitura da dignidade da pena), providências
  da VEP, transferência, ou reparação, à luz da ADPF 347 (estado de coisas inconstitucional) e da SV
  56. Gatilhos: superlotação… Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-insalubridade-superlotacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-insalubridade-superlotacao", "execucao insalubridade", "insalubridade superlotacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Insalubridade, Superlotação e Reparação no Cárcere (RE 580.252 · ADPF 347 · SV 56 · art. 5º, XLIX, CF)

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

Esta skill orienta a construção da **tese autônoma das condições degradantes de encarceramento** como incidente/pretensão própria na execução penal: quando a superlotação, a insalubridade e a violação da integridade física e moral do preso deixam de ser mera reclamação administrativa e passam a gerar **consequências jurídicas concretas** — **reparação** (RE 580.252), **compensação/abatimento na execução** (leitura da dignidade da pena), **providências obrigatórias da VEP** (arts. 66 e 88 da LEP) e o enfrentamento do **estado de coisas inconstitucional** (ADPF 347). É corolário da garantia de que "é assegurado aos presos o respeito à integridade física e moral" (**CF, art. 5º, XLIX**).

> **Lição central:** condição degradante **não é retórica — é fato jurídico com efeito**. O erro mais comum é limitar-se a "denunciar" a superlotação sem **pedir uma consequência concreta e cabível**. A defesa deve escolher o eixo do pedido (reparação; providência da VEP; transferência/relaxamento do excesso; e, quando sustentável, compensação na execução) e **prová-lo** — o dano não se presume só pela retórica; comprova-se com inspeção, laudo, taxa de ocupação e mutirão. Enquadre sempre no piso mínimo: dignidade da pessoa humana (CF, art. 1º, III) + integridade do preso (CF, art. 5º, XLIX) + vedação a pena/trato desumano ou degradante (CF, art. 5º, XLVII e III).

> **Cautela de vigência (obrigatória antes de citar):** confira a **tese firmada no RE 580.252 (Tema 365)** e o **atual estágio da ADPF 347** (houve decisões e aditamentos ao longo do tempo — inclusive fixação de parâmetros e monitoramento; o "estado de coisas inconstitucional" foi reconhecido e a fase de cumprimento/planos evoluiu). Confira também a **redação vigente dos arts. 40, 85 e 88 da LEP** e o **teor exato da Súmula Vinculante 56**. Toda súmula, tese, tema e acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) antes de ir para a peça. Na dúvida sobre um número, **ensine a tese e cite o dispositivo — não arrisque o acórdão**.

---

## Base legal (âncoras)

- **CF, art. 1º, III** — dignidade da pessoa humana (fundamento da República).
- **CF, art. 5º, III** — ninguém será submetido a tratamento desumano ou degradante.
- **CF, art. 5º, XLVII, "e"** — vedação de penas cruéis.
- **CF, art. 5º, XLIX** — respeito à **integridade física e moral** do preso (núcleo da tese).
- **RE 580.252 / Tema 365 (STF)** — responsabilidade do Estado pelo cárcere em condições degradantes; **reparação** ao preso submetido a superlotação/insalubridade [conferir a tese e os parâmetros de fixação via `jurisprudencia-stj-stf`].
- **ADPF 347 (STF)** — reconhecimento do **estado de coisas inconstitucional** do sistema penitenciário; providências estruturais [conferir estágio atual].
- **Súmula Vinculante 56/STF** — a falta de estabelecimento penal adequado **não autoriza** manter o condenado em regime mais gravoso; observância dos parâmetros do RE 641.320 [conferir teor via `jurisprudencia-stj-stf`].
- **LEP, art. 40** — impõe a **todas as autoridades** o respeito à integridade física e moral dos condenados e presos provisórios.
- **LEP, art. 41** — rol de direitos do preso (assistência material, saúde, higiene, proporcionalidade na restrição etc.).
- **LEP, art. 85** — o estabelecimento deve ter lotação **compatível com sua estrutura e finalidade** (base normativa da superlotação como ilegalidade).
- **LEP, art. 88** — cela **individual** com requisitos mínimos de salubridade (área mínima, aeração, insolação, condicionamento térmico) — parâmetro objetivo de habitabilidade.
- **LEP, arts. 66 e 88, e Lei de Inspeção** — atribuições da VEP: inspecionar o estabelecimento, **interditar** total ou parcialmente o que estiver em condições inadequadas, requisitar providências.
- **Regras de Mandela (ONU)** e demais normas internacionais de tratamento de presos — parâmetro interpretativo do "degradante" [citar como padrão internacional; conferir a norma específica antes de numerar dispositivos].

---

## O que caracteriza a "condição degradante" (elementos da tese)

A degradação é **fática e multifatorial**. A peça deve descrever e provar, na medida do caso, ao menos um núcleo relevante:

1. **Superlotação** — ocupação acima da capacidade projetada. Referência objetiva: taxa de ocupação (nº de presos ÷ nº de vagas) e o descumprimento dos arts. 85 e 88 da LEP (cela individual/área mínima). Superlotação grave e crônica é o indicador mais forte.
2. **Insalubridade** — ausência de aeração, insolação, condicionamento térmico; umidade, mofo, esgoto exposto; falta de água potável, de higiene, de banho de sol; infestações; alimentação imprópria.
3. **Assistência à saúde deficiente** — sem atendimento médico/odontológico, sem medicação contínua, sem controle de doenças transmissíveis (tuberculose, sarna, dermatoses), agravado pela aglomeração.
4. **Violência e ausência de segurança** — exposição a violência sistêmica, ausência de separação por classificação/periculosidade, tortura ou tratamento cruel.
5. **Violação de direitos da LEP (art. 41)** — supressão de assistência material, de visita, de trabalho, de banho de sol, de contato com o exterior.

> **Regra de ouro probatória:** o degradante não se afirma, **demonstra-se**. Junte inspeção da VEP/CNJ, laudos de vigilância sanitária, dados do estabelecimento (capacidade × população), relatórios de mutirão carcerário, prontuários, fotos oficiais e representações do Ministério Público/Defensoria/DPU. Sem lastro, a pretensão reparatória e a compensatória fragilizam-se.

---

## Os eixos de pedido — escolha a consequência cabível

A condição degradante pode desaguar em pretensões distintas. **Não confundir os eixos** — cada um tem via, competência e fundamento próprios.

### Eixo 1 — Reparação (RE 580.252 / Tema 365)

- **O que é:** responsabilidade civil do Estado por manter o preso em cárcere superlotado/insalubre, com **reparação** pelo dano à integridade e à dignidade.
- **Fundamento:** RE 580.252 (Tema 365) + art. 37, §6º, CF + art. 5º, XLIX, CF [conferir a **forma de reparação e os parâmetros** fixados no julgado — houve discussão sobre indenização pecuniária e sobre modalidade compensatória; confirmar via `jurisprudencia-stj-stf`].
- **Via/competência:** em regra, ação/demanda em face do ente estatal responsável; atenção à **competência** (Justiça comum estadual/Fazenda Pública) e ao rito. **Não confundir** com pedido no juízo da execução: o RE 580.252 discute **responsabilidade civil**, e sua materialização na execução (como abatimento) é tese distinta e mais controvertida (ver Eixo 2).

### Eixo 2 — Compensação/abatimento na execução (tese da dignidade da pena)

- **O que é:** pleitear que os **dias cumpridos em condição degradante** repercutam na execução — por **remição/compensação** ou abatimento —, como reparação *in natura* proporcional ao tempo indevidamente sofrido.
- **Fundamento:** dignidade da pena; proporcionalidade; leitura conjugada do RE 580.252 (que admitiu discutir modalidade compensatória) com os arts. 40 e 41 da LEP.
- **Cautela (honestidade técnica):** é **tese em construção/controvertida** — não a apresente como direito líquido e certo pacificado. Sustente-a como interpretação constitucional possível e **verifique o estado atual** da jurisprudência (STF/STJ e enunciados de execução) via `jurisprudencia-stj-stf` **antes** de peticionar. Prefira ancorar no dispositivo e na tese a arriscar um número de acórdão específico.

### Eixo 3 — Providências da VEP e enfrentamento estrutural (ADPF 347)

- **O que é:** provocar o juízo da execução a **inspecionar, interditar (total/parcial) e requisitar providências** (arts. 66 e 88 da LEP), e invocar a ADPF 347 / estado de coisas inconstitucional como moldura do dever estatal de agir.
- **Fundamento:** LEP, arts. 66 e 88; ADPF 347 (STF); mutirão carcerário/inspeções do CNJ.
- **Efeito prático:** transferência do preso para local salubre; redução de lotação; melhoria das condições; e, se for o caso, **interdição** do estabelecimento.

### Eixo 4 — Falta de vaga e regime mais gravoso (SV 56)

- **O que é:** quando a superlotação **impede a progressão de fato** ou serve de pretexto para manter o preso em regime mais rigoroso, invocar a **SV 56/STF** (falta de estabelecimento adequado não autoriza regime mais gravoso).
- **Fundamento:** SV 56/STF (com os parâmetros do RE 641.320) — prisão domiciliar/monitoração eletrônica como alternativa, vedada a manutenção em regime mais severo por falta de vaga.
- **Distinção:** este eixo é **cita en passant** na skill `execucao-progressao-regime` como óbice à regressão/manutenção gravosa; aqui ele é apenas **um** dos desdobramentos da tese maior das condições degradantes.

---

## Teses defensivas e contra-teses (acusação/Fazenda)

**Teses da defesa:**

1. **Superlotação crônica + insalubridade documentada = dano à integridade (art. 5º, XLIX, CF)** — o Estado responde (RE 580.252) e deve reparar/compensar; o dano decorre da própria situação degradante comprovada, não exigindo prova de lesão individualizada adicional além do fato do encarceramento indigno.
2. **Estado de coisas inconstitucional (ADPF 347)** — o reconhecimento de falência estrutural reforça o dever de agir e afasta a alegação de "reserva do possível" como escudo absoluto contra providências mínimas de dignidade.
3. **Compensação proporcional na execução** — os dias em condição degradante devem repercutir *in natura* (abatimento/remição-compensação), como reparação mais efetiva e imediata que a pecuniária (tese em construção — conferir).
4. **Interdição/transferência (arts. 66 e 88 LEP)** — pedido de providência concreta e imediata da VEP; a inércia configura omissão.
5. **SV 56** — vedação de regime mais gravoso por falta de vaga; domiciliar/monitoração.
6. **Parâmetro internacional (Regras de Mandela)** — reforço interpretativo do "degradante".

**Contra-teses (a antecipar e refutar):**

- **"Reserva do possível" / limitação orçamentária** — refutar: dignidade humana é mínimo existencial indisponível; o STF (ADPF 347/RE 580.252) já superou o argumento como bloqueio absoluto ao dever de reparar/prover.
- **"Ausência de dano específico comprovado"** — refutar com o lastro probatório (inspeções, laudos, taxa de ocupação) e com a natureza *in re ipsa* do sofrimento decorrente do cárcere degradante comprovado [confirmar a extensão desse entendimento via `jurisprudencia-stj-stf`].
- **"Via inadequada" (ação civil × incidente de execução)** — endereçar a competência correta de cada eixo (reparação civil × providência na VEP), evitando que o mérito seja fulminado por questão processual.
- **"Compensação na execução não tem previsão legal expressa"** — reconhecer a controvérsia e sustentar a interpretação constitucional (dignidade da pena, proporcionalidade), sem afirmar pacificação inexistente.

---

## Metodologia passo a passo (roteiro da tese)

1. **Diagnosticar a condição** — identificar qual(is) núcleo(s) degradante(s) incide(m): superlotação (taxa de ocupação), insalubridade, saúde, violência, violação do art. 41 da LEP.
2. **Reunir prova** — inspeções (VEP/CNJ), laudos sanitários, dados oficiais de capacidade × população, relatórios de mutirão, prontuários, fotos, representações do MP/Defensoria/DPU. **Sem prova, sem tese forte.**
3. **Escolher o eixo do pedido** — reparação (Eixo 1), compensação na execução (Eixo 2), providência/interdição da VEP (Eixo 3), SV 56 (Eixo 4) — ou cumular os cabíveis, respeitando a via/competência de cada um.
4. **Enquadrar constitucionalmente** — art. 1º, III + art. 5º, III, XLVII e XLIX, CF; arts. 40, 41, 85 e 88 da LEP; RE 580.252; ADPF 347; SV 56; Regras de Mandela.
5. **Antecipar as contra-teses** — reserva do possível, ausência de dano, via inadequada, falta de previsão legal (Eixo 2).
6. **Formular pedido concreto e mensurável** — não peça só "melhoria": peça transferência, interdição parcial, providência com prazo, reparação/compensação quantificada ou parâmetro de fixação.
7. **Passar pelo Citation Gate** — toda tese/tema/súmula/acórdão conferido via `jurisprudencia-stj-stf` antes de protocolar.
8. **Revisão humana** — o(a) advogado(a)/defensor(a) responsável valida o cabimento, a via e o lastro probatório.

---

## Estrutura da peça (petição/incidente na VEP)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO/PRESO], já qualificado nos autos da execução penal em epígrafe,
por seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento no art. 5º, III, XLVII e XLIX, da
Constituição Federal, nos arts. 40, 41, 66, 85 e 88 da Lei de Execução Penal, no
RE 580.252 (Tema 365) e na ADPF 347, todos do Supremo Tribunal Federal, expor e
requerer o que segue.


I — DOS FATOS (a condição degradante concreta)

O apenado/preso encontra-se recolhido no [ESTABELECIMENTO], que opera em regime
de superlotação — [Nº DE PRESOS] custodiados para uma capacidade de apenas
[Nº DE VAGAS] (taxa de ocupação de [%]) —, em celas [descrição: sem aeração/
insolação/condicionamento térmico; com umidade, mofo, esgoto exposto; sem
banho de sol; sem assistência à saúde adequada], conforme [inspeção da VEP/CNJ,
laudo sanitário, relatório de mutirão, fotos oficiais — docs. anexos].

Tais condições violam frontalmente a integridade física e moral asseguradas ao
preso (art. 5º, XLIX, CF) e os padrões mínimos de salubridade e lotação dos
arts. 85 e 88 da LEP.


II — DO DIREITO

a) Da vedação constitucional ao trato degradante e do dever estatal
[Art. 1º, III; art. 5º, III, XLVII, "e", e XLIX, CF; arts. 40 e 41 da LEP.]

b) Da superlotação e insalubridade como ilegalidade (arts. 85 e 88 da LEP)
[Demonstrar o descumprimento objetivo da capacidade e dos requisitos de cela.]

c) Da responsabilidade estatal e da reparação/compensação (RE 580.252 — Tema 365)
[Sustentar o eixo escolhido: reparação e/ou compensação in natura na execução —
reconhecendo, quanto a esta, a controvérsia e a interpretação constitucional
proposta. Conferir tese e parâmetros via jurisprudência atual.]

d) Do estado de coisas inconstitucional (ADPF 347) e do dever de prover
[Afastar a reserva do possível como escudo absoluto; invocar providências
estruturais e o dever mínimo de dignidade.]

e) [Se for o caso] Da falta de vaga e da vedação de regime mais gravoso (SV 56)
[Domiciliar/monitoração — vedada a manutenção em regime mais severo.]


III — DO PEDIDO

Diante do exposto, requer:

a) a INSPEÇÃO do estabelecimento e, verificadas as condições degradantes, a sua
   INTERDIÇÃO total ou parcial e a requisição de providências, no prazo de
   [PRAZO], com base nos arts. 66 e 88 da LEP;
b) a TRANSFERÊNCIA do apenado/preso para estabelecimento salubre e com lotação
   compatível (arts. 85 e 88 da LEP);
c) [Eixo escolhido] a REPARAÇÃO / a COMPENSAÇÃO na execução pelos dias cumpridos
   em condição degradante (RE 580.252 — Tema 365), na forma e nos parâmetros
   [a fixar / requeridos];
d) [Se cabível] a aplicação da SV 56 (prisão domiciliar / monitoração), vedada a
   manutenção em regime mais gravoso por falta de vaga;
e) a intimação do Ministério Público e da Defensoria/DPU e a juntada dos
   documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO/PRESO], [ESTABELECIMENTO], [Nº DE PRESOS], [Nº DE VAGAS], [%] taxa de ocupação, [descrição da insalubridade], [PRAZO], [eixo/forma da reparação-compensação], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. Dados oficiais do estabelecimento: **capacidade projetada × população carcerária** (taxa de ocupação).
3. Inspeção da VEP e/ou do CNJ; relatório de mutirão carcerário.
4. Laudo(s) de vigilância sanitária / condições de salubridade.
5. Prontuário e documentos de saúde (se houver agravamento por doença/aglomeração).
6. Fotos oficiais, representações do MP/Defensoria/DPU, notícias/atas de visita.
7. Cálculo de liquidação de pena (se houver pedido de compensação/abatimento na execução).

---

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** cite livremente os **dispositivos de lei** (CF, LEP). Para **qualquer** tema, tese, súmula ou número de acórdão, confirme via `jurisprudencia-stj-stf` antes de usar. Melhor faltar precedente do que citar julgado inexistente.

- **RE 580.252 / Tema 365 (STF)** — responsabilidade do Estado e reparação por cárcere em condição degradante; discussão sobre a **modalidade** (pecuniária/compensatória) [conferir tese e parâmetros — **[NÃO VERIFICADO]** quanto à extensão da compensação *in natura*: confirmar].
- **ADPF 347 (STF)** — estado de coisas inconstitucional do sistema penitenciário; providências estruturais e monitoramento [conferir estágio atual e decisões supervenientes — **[NÃO VERIFICADO]** quanto ao estado processual e aos parâmetros fixados].
- **Súmula Vinculante 56/STF** — falta de estabelecimento adequado não autoriza regime mais gravoso; parâmetros do RE 641.320 [conferir teor exato].
- **RE 641.320 (STF)** — parâmetros para cumprimento de pena diante da falta de vaga (fundamento da SV 56) [conferir — **[NÃO VERIFICADO]** número/tese: confirmar via `jurisprudencia-stj-stf`].
- **Regras Mínimas da ONU (Regras de Mandela)** — padrão internacional de tratamento de presos [citar como parâmetro; confirmar dispositivo antes de numerar].

Qualquer outro julgado de STJ/STF sobre reparação por cárcere degradante, compensação na execução ou interdição de estabelecimento **deve ser conferido individualmente** — não cite de memória.

---

## Erros comuns / anti-padrões (evitar)

- **Denunciar sem pedir consequência** — descrever a superlotação e não formular pedido concreto (reparação, compensação, interdição, transferência, SV 56).
- **Confundir os eixos** — misturar responsabilidade civil (RE 580.252, via própria/competência da Fazenda) com incidente na VEP, ou tratar a compensação na execução como direito pacificado quando é tese controvertida.
- **Afirmar sem prova** — sustentar o degradante sem inspeção, laudo ou taxa de ocupação; o dano não se presume só da retórica.
- **Citar acórdão de memória** — arriscar número de RE/HC/REsp/tema sem passar pelo `jurisprudencia-stj-stf`. Na dúvida, **ensinar a tese e citar o dispositivo**.
- **Ignorar a via/competência** — deixar o mérito ser fulminado por endereçamento errado (juízo/rito).
- **Esquecer a SV 56** quando a superlotação vira pretexto para regime mais gravoso.
- **Overselling da compensação** — apresentar o abatimento na execução como consolidado; reconhecer a controvérsia preserva a credibilidade e evita sanção por citação indevida.

## Checklist final

- [ ] Núcleo(s) degradante(s) identificado(s) (superlotação/insalubridade/saúde/violência/art. 41 LEP)?
- [ ] Prova reunida (inspeção VEP/CNJ, laudo sanitário, capacidade × população, mutirão, fotos)?
- [ ] Eixo do pedido escolhido e endereçado à via/competência correta (reparação × VEP × SV 56)?
- [ ] Enquadramento constitucional (art. 1º, III; art. 5º, III, XLVII, XLIX, CF) e LEP (arts. 40, 41, 85, 88) explícito?
- [ ] RE 580.252 (Tema 365) e ADPF 347 conferidos via `jurisprudencia-stj-stf` (tese/estágio/parâmetros)?
- [ ] Compensação na execução apresentada como **tese em construção** (sem afirmar pacificação)?
- [ ] Contra-teses antecipadas (reserva do possível; ausência de dano; via inadequada; falta de previsão)?
- [ ] Pedido concreto e mensurável (prazo, interdição, transferência, valor/parâmetro)?
- [ ] Todas as citações passaram pelo Citation Gate e o material foi submetido à **revisão humana**?

---

## Nota de conformidade

Este material é **rascunho técnico de apoio** — não substitui o juízo do profissional responsável nem a leitura do caso concreto e das condições reais do estabelecimento. **Revisão humana é obrigatória** antes de protocolar. Nenhuma súmula, tese, tema ou acórdão vai à peça sem passar pelo gate de verificação (`jurisprudencia-stj-stf` / `verificacao-citacoes`) — há sanções reais por jurisprudência inventada por IA. A atuação observa a ética por polo: **advocacia** (Estatuto da OAB + Código de Ética e Disciplina + Provimento 205/2021 na comunicação); **Defensoria Pública** (LC 80/94), a mais vocacionada à tutela coletiva e individual do preso; **Ministério Público** (CNMP), inclusive na fiscalização da execução. Sigilo e LGPD: dados do assistido nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
