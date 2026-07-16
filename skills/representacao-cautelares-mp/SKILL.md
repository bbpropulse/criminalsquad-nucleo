---
name: representacao-cautelares-mp
description: >-
  Use ao elaborar, pelo polo acusatório, o requerimento de prisão preventiva (CPP 311-313), a
  representação por prisão temporária (Lei 7.960/89) ou o requerimento de medidas cautelares
  diversas (CPP 282, §2º, e 319) — inclusive conversão do flagrante em preventiva na audiência de
  custódia (CPP 310, II) e preventiva por descumprimento de cautelar (CPP 282, §4º; 312, §1º).
  Gatilhos: requerimento de prisão preventiva… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-representacao-cautelares-mp"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["representacao-cautelares-mp", "representacao cautelares"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Representação e Requerimento de Cautelares (polo acusatório)

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

Esta skill orienta a construção das **peças do polo acusatório que provocam a decretação de medidas cautelares pessoais**: o **requerimento de prisão preventiva** (MP, querelante ou assistente), a **representação da autoridade policial** (preventiva ou temporária), o **requerimento de cautelares diversas do art. 319** e a **conversão do flagrante** na audiência de custódia. Toda entrega é rascunho técnico para revisão humana.

> **Lição central pós-Anticrime (Lei 13.964/2019):** o juiz **não decreta cautelar de ofício** em nenhuma fase (arts. 3º-A, 282, §2º, e 311, CPP) — nem mesmo a substituição por descumprimento dispensa provocação (art. 282, §4º). **Se a acusação não pede, a prisão não existe.** A peça do polo acusatório deixou de ser formalidade: é ela que abre — e delimita — a jurisdição cautelar.

> **Regra de ouro da redação:** escreva o requerimento como se fosse a **minuta da decisão**. O art. 315 do CPP exige do juiz motivação concreta; decisão que apenas "adota os fundamentos do requerimento" genérico cai em habeas corpus. Entregue ao juízo *fumus* e *periculum* **concretos, datados e documentados** — prontos para sobreviver ao HC.

## Não confunda os homônimos

| Instituto | O que é | Skill própria |
|---|---|---|
| **Representação do ofendido** (art. 5º, §4º, CPP) | Condição de procedibilidade da ação penal pública condicionada — peça da **vítima** | `oferecimento-de-representacao` (pasta `representacao`) |
| **Representação da autoridade policial / requerimento do MP por cautelar** (arts. 282, §2º, e 311, CPP) | Provocação da **prisão ou cautelar diversa** — peça do **polo acusatório** | **esta skill** |
| Pedido de soltura (relaxamento, revogação, liberdade provisória, 319 defensivo) | O **espelho defensivo** desta peça | `liberdade-provisoria-relaxamento` |

## Instituto e base legal

- **Art. 282, CPP** — regime geral das cautelares: binômio **necessidade** (inciso I) + **adequação** (inciso II); cumulabilidade (§1º); **legitimados e vedação de ofício** (§2º); **contraditório prévio**, salvo urgência ou perigo de ineficácia (§3º); descumprimento → substituição, cumulação ou, em último caso, preventiva — sempre mediante requerimento (§4º); **preventiva como ultima ratio** (§6º).
- **Art. 283, §1º, CPP** — não cabe cautelar pessoal em infração sem pena privativa de liberdade cominada (isolada, cumulativa ou alternativamente).
- **Arts. 311-313, CPP** — preventiva: legitimados e momento (311); pressupostos e fundamentos (312, com §1º — descumprimento — e §2º — perigo concreto e **contemporâneo**); condições de admissibilidade (313, com a vedação de antecipação de pena do §2º).
- **Art. 315, CPP** — dever de fundamentação concreta da decisão (o roteiro do que o requerimento precisa entregar).
- **Lei 7.960/89** — prisão **temporária**: hipóteses do art. 1º, prazo do art. 2º (5+5 dias; **30+30** em hediondos e equiparados — art. 2º, §4º, da Lei 8.072/90). Exclusiva da **fase de investigação**.
- **Arts. 319 e 320, CPP** — rol das cautelares diversas e retenção de passaporte.
- **Lei 11.340/2006, art. 20** — preventiva do agressor em violência doméstica (leitura conforme o pós-Anticrime: sempre mediante provocação).

**Legitimados (art. 311):** Ministério Público (**requerimento** — em cota na denúncia, na audiência de custódia ou em peça autônoma), **querelante ou assistente** (requerimento) e autoridade policial (**representação**, com manifestação subsequente do MP). Na fase de investigação, endereça-se ao **juiz das garantias, onde implantado** (arts. 3º-B e seguintes — confira a implantação no tribunal local e a redação vigente via `lei-e-sumula`); no processo, ao juízo da causa.

## Qual medida requerer — mapa de cabimento

| Situação concreta | Medida | Base legal |
|---|---|---|
| Investigação de crime do **rol taxativo** da Lei 7.960 + prisão **imprescindível** a diligências determinadas | **Temporária** | Lei 7.960, art. 1º, I e III |
| Crime **doloso com pena máxima > 4 anos** + risco concreto (ordem pública, instrução ou lei penal) | **Preventiva** | CPP 312 + 313, I |
| **Reincidente em crime doloso** (salvo art. 64, I, CP), qualquer pena | **Preventiva** | CPP 313, II |
| **Violência doméstica** — garantir execução das medidas protetivas | **Preventiva** | CPP 313, III; Lei 11.340, art. 20 |
| **Dúvida sobre identidade civil** sem elementos para esclarecê-la | **Preventiva** (até a identificação) | CPP 313, §1º |
| **Descumprimento** de cautelar diversa ou protetiva já imposta | Substituição / cumulação / **preventiva** | CPP 282, §4º; 312, §1º |
| Flagrante + requisitos da preventiva na **audiência de custódia** | **Conversão** (a requerimento) | CPP 310, II |
| Risco tópico que medida menos gravosa neutraliza | **Cautelar diversa específica** | CPP 319; 282, §6º |
| Risco de fuga ao exterior | Proibição de ausentar-se + **passaporte** | CPP 319, IV; 320 |
| Crime sem PPL cominada (ex.: só multa) | **Nenhuma cautelar pessoal** | CPP 283, §1º |

**Filtros de admissibilidade da temporária (aplicar antes de representar):**
- Só **durante o inquérito** — jamais após o recebimento da denúncia.
- Só para crimes do **rol taxativo** do art. 1º, III (e legislação que o ampliou — confira a lista vigente via `lei-e-sumula`).
- O STF, em controle concentrado, fixou que a decretação exige a **cumulação do inciso III (fundadas razões de autoria) com o inciso I (imprescindibilidade para as investigações)**, não bastando o inciso II isolado, e que o juiz **pode** (não deve) decretar — pesquise os contornos atuais via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] até conferir.
- Indique **quais diligências** dependem da custódia (acareação, reconhecimento, busca, quebra de sigilo) — "imprescindibilidade" genérica não sobrevive.

## Estrutura forense do requerimento

```
AO JUÍZO DA [N]ª VARA CRIMINAL [ou: DO JUIZADO DE VIOLÊNCIA DOMÉSTICA /
DO JUIZ DAS GARANTIAS] DA COMARCA DE [COMARCA] — [UF]

Autos nº [IP / APF / AÇÃO PENAL]

O MINISTÉRIO PÚBLICO DO ESTADO DE [UF], pelo(a) Promotor(a) de Justiça que
esta subscreve [ou: o(a) ASSISTENTE DE ACUSAÇÃO / QUERELANTE, por seu(sua)
advogado(a)], vem, com fundamento nos arts. 282, §2º, 311, 312 e 313, [inciso],
do CPP [ou: art. 1º, I e III, da Lei 7.960/89], REQUERER A DECRETAÇÃO DA
PRISÃO PREVENTIVA [ou: representar pela PRISÃO TEMPORÁRIA / requerer MEDIDAS
CAUTELARES DIVERSAS] de [INVESTIGADO/RÉU, qualificação], pelos fundamentos:

I — DA SÍNTESE DOS FATOS
Imputação, fase da persecução, e os FATOS NOVOS OU CONTEMPORÂNEOS que
motivam o pedido agora (datar cada um; indicar fls./ID dos autos).

II — DO FUMUS COMMISSI DELICTI
Materialidade (laudos, apreensões, documentos) + indícios suficientes de
autoria (depoimentos, mensagens, imagens) — sempre com remissão à prova.

III — DO PERICULUM LIBERTATIS (art. 312, §2º — perigo concreto e atual)
Desenvolver APENAS a(s) hipótese(s) que os autos sustentam:
   a) garantia da ordem pública [reiteração demonstrada; gravidade CONCRETA
      do modus operandi — nunca a gravidade abstrata do tipo];
   b) conveniência da instrução [intimidação de vítima/testemunhas,
      destruição de prova — documentadas];
   c) aplicação da lei penal [atos concretos preparatórios de fuga];
   d) (se for o caso) descumprimento de cautelar anterior (312, §1º).

IV — DA ADMISSIBILIDADE (art. 313)
Enquadrar no inciso I, II ou III (ou §1º) e afastar o §2º: a medida não é
antecipação de pena — é tutela do processo.

V — DA INSUFICIÊNCIA DAS CAUTELARES DIVERSAS (art. 282, §6º)
Percorrer as medidas do art. 319 plausíveis e demonstrar, uma a uma, por que
NÃO neutralizam o risco identificado (o espelho do que a defesa pedirá).

VI — DA PROPORCIONALIDADE
Necessidade + adequação (art. 282, I e II) e homogeneidade: a prisão cautelar
não pode ser mais gravosa que a pena provável.

VII — DOS PEDIDOS
   a) a decretação da PRISÃO PREVENTIVA [ou temporária, com prazo], com
      expedição de mandado [e inclusão em banco de mandados / difusão];
   b) SUBSIDIARIAMENTE, a imposição das cautelares do art. 319 [especificar
      quais e por quê], cumuladas entre si;
   c) a dispensa do contraditório prévio, ante a urgência e o perigo de
      ineficácia da medida (art. 282, §3º) — JUSTIFICAR expressamente;
   d) (temporária) a apresentação do preso e a soltura automática ao fim do
      prazo, salvo decretação de preventiva.

[LOCAL], [DATA].
[PROMOTOR(A) DE JUSTIÇA / ADVOGADO(A) — OAB/UF nº]
```

**Instruir o pedido com:** cópia das peças que provam cada fato afirmado (BOs de reiteração, certidões de antecedentes e de outras ações/IPs, mensagens de ameaça a testemunhas, auto de descumprimento de protetiva, comprovantes de venda de bens/passagens), termo de representação da autoridade policial (quando houver) e, na custódia, o APF.

## Teses típicas do polo acusatório

- **Contemporaneidade como alicerce (art. 312, §2º):** todo fundamento deve apontar **fato datado e atual**. Fato velho não sustenta prisão nova — se o risco é antigo, explique o que o **reativou** agora.
- **Gravidade concreta, nunca abstrata:** descreva o *modus operandi* (emprego de arma, mediante paga, contra vítima vulnerável, posição de comando na organização) — a tipificação em si não fundamenta (art. 312, §2º, e jurisprudência consolidada; 313, §2º veda a prisão como antecipação de pena).
- **Reiteração delitiva demonstrada:** certidões de antecedentes, ações penais e inquéritos em curso podem evidenciar o risco de reiteração para fins **cautelares** (juízo distinto do de maus antecedentes na dosimetria) — confirme o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Conveniência da instrução com prova nos autos:** registro de ameaça a testemunha, tentativa de aliciamento, apagamento de dados — junte o documento; a afirmação sem lastro cai.
- **Risco de fuga por atos concretos:** foragido, venda patrimonial atípica, passagens adquiridas, ausência real de vínculos (não o clichê "sem residência fixa").
- **Descumprimento de cautelar anterior (282, §4º; 312, §1º):** a via mais sólida pós-Anticrime — o próprio comportamento do agente prova a insuficiência da medida menos gravosa.
- **Violência doméstica (313, III):** o risco à execução das protetivas autoriza a preventiva **independentemente da pena** do crime — instrua com o auto de descumprimento e a palavra da vítima.
- **Antecipe a defesa:** o requerimento forte refuta, antes, as teses do espelho defensivo (gravidade abstrata, falta de contemporaneidade, suficiência do 319, condições pessoais favoráveis) — leia a skill `liberdade-provisoria-relaxamento` e responda a cada ataque previsível.

## Erros comuns e pegadinhas

- **Induzir decretação de ofício** ("o juízo poderá, se entender cabível...") — pós-Anticrime, decisão sem requerimento expresso é ilegal e será relaxada; formule **pedido certo e determinado**.
- **Não levar o requerimento à audiência de custódia:** sem requerimento do MP (ou prévia representação da autoridade policial) na audiência, o juiz **não pode converter** o flagrante em preventiva — o APF, por si, não é pedido (entendimento pacificado na 3ª Seção do STJ; confirme o precedente via `jurisprudencia-stj-stf` antes de citá-lo). Leve a manifestação pronta ou o preso será solto.
- **Temporária fora de hora ou de rol:** após recebida a denúncia, ou por crime fora do rol taxativo, o pedido é natimorto — migre para a preventiva (se couber no 313) ou para o 319.
- **Deixar vencer a temporária:** findo o prazo sem prorrogação ou sem pedido de preventiva, a soltura é **automática** — agende o termo final no dia da decretação e peça a prorrogação (extrema e comprovada necessidade) **antes** do vencimento. O prazo corre da **efetivação da prisão** e conta-se pela regra material (inclui o dia da captura — art. 10 do CP), não pela processual do art. 798, §1º, do CPP.
- **Ignorar o filtro do art. 313:** requerer preventiva em crime com pena máxima ≤ 4 anos, sem reincidência nem violência doméstica, é pedir o indeferimento — peça cautelares do 319. Lembre: o inciso I exige crime **doloso** (culposo não cabe por essa via).
- **Pular o teste do art. 282, §6º:** requerimento que não explica por que as cautelares diversas são insuficientes gera decisão vulnerável ao HC — faça o cotejo medida a medida.
- **Esquecer a justificativa do §3º:** a regra é o **contraditório prévio**; a dispensa exige urgência ou perigo de ineficácia **declinados na peça**, não presumidos.
- **Fundamentação de empréstimo:** pedir que o juiz "acolha os fundamentos da representação policial" sem análise própria produz decisão *per relationem* frágil — desenvolva os fundamentos no corpo do requerimento.
- **Desproporção (homogeneidade):** requerer prisão quando a pena provável é restritiva de direitos ou regime aberto contraria o 282, II, e o 313, §2º.
- **Endereçamento errado:** na investigação, juiz das garantias onde implantado (ou plantão, na urgência); no processo, o juízo da causa; em violência doméstica, o juizado especializado.
- **Indeferimento não preclui, mas não se repete no vazio:** a matéria é *rebus sic stantibus* — novo pedido exige **fatos novos**. Contra o indeferimento da preventiva cabe **RESE** (art. 581, V, CPP — prazo de 5 dias, contagem processual do art. 798, §1º: exclui o dia do começo; skill `rese`); quanto à temporária, a via recursal é controvertida — pesquise via `jurisprudencia-stj-stf` antes de recorrer.
- **Homônimo traiçoeiro:** "representação" da vítima (art. 5º, §4º, CPP) é condição de procedibilidade, não pedido de prisão — peça errada reprova em prova e constrange na prática.

## Checklist antes de protocolar

- [ ] Legitimidade e fase corretas (MP/assistente/querelante requer; delegado representa; temporária só no IP)?
- [ ] Pedido **expresso e determinado** (nada de sugerir decretação de ofício)?
- [ ] *Fumus*: materialidade + indícios com **remissão a fls./ID**?
- [ ] *Periculum* **concreto, datado e contemporâneo** (312, §2º) — sem gravidade abstrata?
- [ ] Admissibilidade do art. 313 enquadrada (ou rol + imprescindibilidade, na temporária)?
- [ ] Insuficiência das cautelares do 319 demonstrada medida a medida (282, §6º)?
- [ ] Proporcionalidade e homogeneidade enfrentadas?
- [ ] Contraditório prévio dispensado **com justificativa** (282, §3º)?
- [ ] Pedido subsidiário de cautelares diversas formulado (não sair de mãos vazias)?
- [ ] Documentos que provam **cada fato afirmado** anexados?
- [ ] Prazos anotados (temporária: termo final; preventiva: revisão nonagesimal do art. 316, p.ú., para acompanhar)?
- [ ] Citações de precedente passaram pelo `verificador-citacoes` (nada citado de memória)?

## Apoie-se em

- **Skill `liberdade-provisoria-relaxamento`** — o espelho defensivo desta peça: os requisitos dos arts. 312/319 vistos do outro polo, o mapa de vícios que a defesa explorará e as teses que seu requerimento deve refutar por antecipação. Leia antes de redigir; não duplique — responda.
- **Best-practice `peticao-criminal`** — a estrutura-mestra da petição criminal (endereçamento, fatos, direito, pedidos) que esta peça especializa.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes atuais (contornos da temporária no controle concentrado, conversão de ofício, reiteração por ações em curso); todo precedente entra como [NÃO VERIFICADO] até conferência.
- **Agente `verificador-citacoes`** — Citation Gate obrigatório: nenhuma súmula, tema ou julgado citado de memória.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima (SEMPRE): teoria do caso acusatória, narrativa dos fatos, subsunção explícita e persuasão — a régua que a revisão cobra.
