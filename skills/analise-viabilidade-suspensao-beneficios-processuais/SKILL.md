---
name: analise-viabilidade-suspensao-beneficios-processuais
description: >-
  Use ANTES de negociar ou peticionar, para descobrir objetivamente QUAL benefício despenalizador o
  caso comporta — filtro que testa lado a lado transação penal (art. 76 da Lei 9.099/95), suspensão
  condicional do processo (art. 89 da Lei 9.099/95), ANPP (art. 28-A do CPP) e sursis da pena (art.
  77 do CP), apontando o que cabe, os impeditivos e a ordem de preferência. É a análise de
  elegibilidade, não a peça. Gatilhos: qual… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, justica-negocial, despenalizadores]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-viabilidade-suspensao-beneficios-processuais"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-viabilidade-suspensao-beneficios-processuais", "analise viabilidade", "beneficios processuais"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise de Cabimento de Benefícios Despenalizadores (transação, sursis processual, ANPP e sursis da pena)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill é um **filtro de elegibilidade**: dado um caso concreto, testa **em paralelo** os quatro institutos despenalizadores/desencarceradores mais comuns — **transação penal** (art. 76 da Lei 9.099/95), **suspensão condicional do processo / sursis processual** (art. 89 da Lei 9.099/95), **acordo de não persecução penal — ANPP** (art. 28-A do CPP) e **suspensão condicional da pena / sursis da pena** (art. 77 do CP) — e responde, objetivamente: **qual cabe, qual não cabe (e por quê), e em que ordem de preferência pleitear.** Não é a peça de nenhum deles; é o **passo anterior** que orienta a estratégia e a negociação.

> **Lição central:** cada instituto tem um **filtro-mestre diferente** — e confundi-los é o erro mais comum. Transação e sursis processual dependem da **pena MÍNIMA em abstrato** (≤ 2 anos e ≤ 1 ano, respectivamente); ANPP depende da **pena MÍNIMA em abstrato** (< 4 anos) **e** da ausência de violência/grave ameaça; sursis da pena depende da **pena CONCRETA aplicada** na sentença (≤ 2 anos). Um trabalha antes da denúncia, outro após o recebimento, outro na sentença. **Classifique o momento processual e o tipo de pena (mínima abstrata × concreta) ANTES de qualquer coisa.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 28-A do CPP** (introduzido pela Lei 13.964/2019 — Pacote Anticrime) e dos **arts. 76 e 89 da Lei 9.099/95**, além dos **arts. 77 a 82 do CP**. Requisitos, patamares de pena e vedações podem ter sido alterados por leis posteriores. Confira também súmulas, temas repetitivos/vinculantes e overruling via a skill `jurisprudencia-stj-stf` antes de afirmar cabimento. Toda tese, súmula ou precedente passa **obrigatoriamente** pelo gate `verificacao-citacoes`.

## O que esta skill NÃO faz (fronteiras)

- **Não redige a peça.** As petições/manifestações de cada instituto ficam nas skills próprias: `transacao-penal`, `suspensao-condicional-processo`, `anpp`, `sursis-da-pena`. Aqui só se decide **o que** pleitear.
- **Não pondera custo-benefício estratégico.** A decisão de negociar × recorrer × ir a julgamento, assumindo já saber o que cabe, é da skill `decisao-recorrer-vs-negociar`. Esta é o **degrau anterior e objetivo** (os requisitos legais que determinam **quais** despenalizadores estão sobre a mesa).
- **Não substitui a análise humana.** É rascunho técnico de triagem sob revisão obrigatória do advogado responsável.

## Base legal

- **Art. 76 da Lei 9.099/95** — transação penal (juizado especial criminal).
- **Art. 89 da Lei 9.099/95** — suspensão condicional do processo (sursis processual).
- **Art. 61 da Lei 9.099/95** — conceito de **infração de menor potencial ofensivo** (IMPO): contravenções e crimes com pena máxima **não superior a 2 anos**, cumulada ou não com multa.
- **Art. 28-A do CPP** — acordo de não persecução penal (ANPP), red. da Lei 13.964/2019.
- **Arts. 77 a 82 do CP** — suspensão condicional da pena (sursis da pena).
- **Art. 89, §1º, da Lei 9.099/95** e **art. 28-A, §§ do CPP** — condições e causas de revogação.

## Quadro-mestre — o filtro de cada instituto

| Instituto | Filtro de pena | Marco processual | Confissão exigida? | Violência/grave ameaça |
|---|---|---|---|---|
| **Transação penal** (art. 76) | Pena **máxima ≤ 2 anos** (IMPO, art. 61) | **Antes** da denúncia, na audiência preliminar do JECrim | Não | Admissível (IMPO pode ter grave ameaça, ex.: ameaça — art. 147 CP) |
| **Suspensão condicional do processo** (art. 89) | Pena **mínima ≤ 1 ano** (em abstrato) | **Após** o recebimento da denúncia (proposta com a denúncia) | Não | Admissível (o filtro é só a pena mínima) |
| **ANPP** (art. 28-A) | Pena **mínima < 4 anos** (em abstrato) | **Antes** da denúncia (fase investigatória / oferecimento) | **Sim** — confissão formal e circunstanciada | **Vedado** se houve violência ou grave ameaça |
| **Sursis da pena** (art. 77) | Pena **concreta ≤ 2 anos** (aplicada na sentença) | **Na sentença** condenatória | Não | Admissível (opera na dosimetria já fechada) |

> **Atenção ao tipo de pena.** Transação usa a pena **máxima**; sursis processual e ANPP usam a pena **mínima**; sursis da pena usa a pena **concreta** aplicada. Trocar "máxima" por "mínima" (ou "abstrata" por "concreta") é o erro que mais invalida a análise.

## Requisitos objetivos e subjetivos — por instituto

### 1) Transação penal (art. 76 da Lei 9.099/95)
- **Objetivo:** infração de **menor potencial ofensivo** (pena máxima ≤ 2 anos — art. 61).
- **Impeditivos (art. 76, §2º):** já ter sido condenado, por sentença definitiva, a pena privativa de liberdade por outro crime; ter sido **beneficiado** por transação nos **5 anos anteriores**; antecedentes/conduta social/personalidade e motivos e circunstâncias que não recomendem o benefício.
- **Natureza:** aceitação de pena restritiva de direitos ou multa **sem** assunção de culpa e **sem** reincidência/maus antecedentes (não gera reincidência; consta apenas para impedir novo benefício no quinquênio).

### 2) Suspensão condicional do processo — sursis processual (art. 89 da Lei 9.099/95)
- **Objetivo:** crime com pena **mínima cominada ≤ 1 ano** (não se restringe ao JECrim — aplica-se a qualquer crime que respeite o patamar).
- **Subjetivo:** réu **não estar sendo processado** ou **não ter sido condenado** por outro crime; presentes os demais requisitos do art. 77 do CP (que autorizariam o sursis da pena).
- **Efeito:** suspensão do processo por **2 a 4 anos**, mediante condições (art. 89, §1º); cumprido o período de prova sem revogação, **extingue-se a punibilidade** (§5º).
- **Súmula 723/STF** — inaplicável a sursis processual quando, no concurso de crimes, a **pena mínima somada** ultrapassa 1 ano. **[conferir vigência/redação via `jurisprudencia-stj-stf`]**
- **Súmula 337/STJ** — cabível a suspensão do processo na **desclassificação** e na **procedência parcial** da pretensão punitiva. **[conferir via `jurisprudencia-stj-stf`]**
- **Súmula 243/STJ** — inadmissível a suspensão do processo por crime continuado/concurso quando a soma das penas mínimas ultrapassa 1 ano. **[conferir via `jurisprudencia-stj-stf`]**

### 3) ANPP — acordo de não persecução penal (art. 28-A do CPP)
- **Objetivo:** crime **sem violência ou grave ameaça**, com pena **mínima cominada inferior a 4 anos**; considera-se, para o patamar, as causas de aumento e diminuição aplicáveis (art. 28-A, §1º).
- **Requisito próprio:** **confissão formal e circunstanciada** da prática da infração.
- **Necessidade e suficiência:** o acordo deve ser **necessário e suficiente** para reprovação e prevenção do crime.
- **Vedações (art. 28-A, §2º):** cabível transação penal (IMPO); réu **reincidente** ou com conduta criminal habitual/reiterada/profissional (salvo infrações insignificantes); ter sido beneficiado por ANPP, transação ou sursis processual nos **5 anos anteriores**; crimes praticados no âmbito de **violência doméstica/familiar** ou contra a mulher **por razões da condição de sexo feminino**.
- **Condições (art. 28-A, incisos):** reparar o dano/restituir a coisa; renunciar a bens/direitos; prestar serviço à comunidade; pagar prestação pecuniária; outra condição proporcional.
- **Momento:** fase pré-processual, **antes** do oferecimento da denúncia; homologação judicial (art. 28-A, §§4º-5º).

### 4) Sursis da pena — suspensão condicional da pena (arts. 77-82 do CP)
- **Objetivo:** pena privativa de liberdade **concreta ≤ 2 anos** (ou ≤ 4 anos no **sursis etário/humanitário** — maior de 70 anos ou razões de saúde, art. 77, §2º).
- **Requisitos (art. 77):** réu **não reincidente em crime doloso** (a condenação anterior a pena de multa não impede — art. 77, §1º); culpabilidade, antecedentes, conduta social, personalidade, motivos e circunstâncias autorizem; **não ser indicada ou cabível** a substituição por restritiva de direitos (art. 44) — a substituição tem **preferência** sobre o sursis.
- **Espécies:** simples, especial (art. 78, §2º), etário e humanitário.

## Ordem de preferência e roteiro de decisão

O objetivo é encontrar **a rota mais benéfica que o caso comporta**, na sequência lógica do processo:

```
[Fase pré-processual — antes da denúncia]

1) É infração de menor potencial ofensivo (pena máx. ≤ 2 anos)?
   └── SIM → TRANSAÇÃO PENAL (art. 76) é a via preferencial no JECrim.
             (E, por ser cabível transação, o ANPP fica VEDADO — art. 28-A, §2º, I.)

2) NÃO sendo IMPO — o crime é SEM violência/grave ameaça e a pena MÍNIMA < 4 anos?
   ├── SIM → avalie ANPP (art. 28-A):
   │         - confissão viável? reincidência/habitualidade? benefício nos últimos 5 anos?
   │         - violência doméstica/de gênero? (VEDA o ANPP)
   │         └── requisitos ok → propor/pleitear ANPP.
   └── NÃO → segue para as vias processuais/sentenciais abaixo.

[Já oferecida/recebida a denúncia]

3) A pena MÍNIMA do crime é ≤ 1 ano e o réu não está sendo processado/condenado?
   └── SIM → SUSPENSÃO CONDICIONAL DO PROCESSO (art. 89).
             (Atenção às Súmulas 243/STJ, 337/STJ e 723/STF em concurso.)

[Na sentença condenatória]

4) Condenação inevitável? A pena CONCRETA ficou ≤ 2 anos (ou ≤ 4 no etário/humanitário)?
   ├── Cabível substituição por restritiva de direitos (art. 44)? → PREFERÊNCIA à substituição.
   └── Não cabível a substituição, réu não reincidente em crime doloso, requisitos do art. 77 → SURSIS DA PENA.
```

> **Regra de exclusão importante (ANPP × transação):** o ANPP é **subsidiário** — se o caso comporta **transação penal** (IMPO), o ANPP fica **vedado** (art. 28-A, §2º, I). Não os ofereça como alternativas concorrentes; a transação prevalece.

> **Sursis da pena × substituição (art. 44):** a substituição da pena por restritivas de direitos tem **preferência legal** sobre o sursis. Só se pleiteia sursis da pena quando a substituição **não** for cabível ou recomendável.

## Teses e contra-teses (elegibilidade)

- **Cômputo do patamar de pena (ANPP):** a defesa sustenta que causas de **diminuição** máximas e de **aumento** mínimas devem ser consideradas para trazer a pena mínima para **abaixo de 4 anos** (art. 28-A, §1º). A acusação tende ao cálculo mais gravoso. **Tese defensiva:** aplicar o critério mais favorável ao cabimento.
- **ANPP é direito subjetivo ou poder-dever do MP?** Há controvérsia sobre a recusa imotivada do MP em oferecer o acordo. **Tese defensiva:** requerer a remessa ao órgão de revisão (art. 28 do CPP) quando a recusa for injustificada; sustentar controle judicial da recusa arbitrária. **[jurisprudência sobre a natureza do ANPP e o controle da recusa — NÃO VERIFICADO; conferir posição atual de STJ/STF via `jurisprudencia-stj-stf`]**
- **Retroatividade do ANPP a fatos anteriores à Lei 13.964/2019:** por ter conteúdo mais benéfico, discute-se a retroação a processos em curso. **Tese defensiva:** norma híbrida/mais benéfica retroage (CF, art. 5º, XL). **[marco temporal e limites — NÃO VERIFICADO; conferir Temas e precedentes atuais via `jurisprudencia-stj-stf`]**
- **Sursis processual na desclassificação/procedência parcial:** invocar a **Súmula 337/STJ** para reabrir a proposta quando a nova capitulação passa a comportar o benefício. **[conferir via `jurisprudencia-stj-stf`]**
- **Concurso de crimes e o teto de pena mínima:** contra-tese acusatória soma as penas mínimas (Súmulas 243/STJ e 723/STF) para afastar o sursis processual; a defesa examina se o **concurso formal** ou a **continuidade** permitem cômputo mais favorável. **[conferir via `jurisprudencia-stj-stf`]**
- **Violência/grave ameaça e ANPP:** a defesa discute se a **violência imprópria** ou a ameaça **presumida/indireta** afasta o acordo; contra-tese acusatória interpreta a vedação amplamente. Ponto sensível — **conferir precedente atual**.

## Súmulas e precedentes de referência (sob o Citation Gate)

Cite **apenas** após conferência via `jurisprudencia-stj-stf` e `verificacao-citacoes`:
- **Súmula 723/STF** — sursis processual e concurso de crimes (pena mínima somada > 1 ano). **[conferir]**
- **Súmula 337/STJ** — sursis processual na desclassificação e procedência parcial. **[conferir]**
- **Súmula 243/STJ** — inadmissibilidade em concurso/continuidade quando a soma das mínimas > 1 ano. **[conferir]**
- **Súmula 696/STF** — em recusa do MP à proposta de sursis processual, aplica-se por analogia o art. 28 do CPP (remessa ao PGJ). **[conferir]**
- **Precedentes sobre natureza jurídica do ANPP, controle da recusa e retroatividade** — **NÃO VERIFICADO**; localizar HC/REsp/RE e Temas atuais via `jurisprudencia-stj-stf` antes de citar número.

> **Regra de ouro do Gate:** prefira ensinar a **tese** e citar o **dispositivo de lei** (arts. 76, 89, 28-A, 77) — que são certos — a arriscar número de acórdão, informativo ou tema. Na dúvida sobre um precedente específico, **omita o número** e sinalize a conferência.

## Erros comuns / anti-padrões

- Usar a pena **máxima** onde o filtro é a **mínima** (ANPP e sursis processual usam a mínima; transação usa a máxima).
- Confundir **pena abstrata** (transação/sursis processual/ANPP) com **pena concreta** (sursis da pena — só na sentença).
- Oferecer **ANPP e transação como alternativas** quando o caso é IMPO — a transação **veda** o ANPP (art. 28-A, §2º, I).
- Esquecer que o ANPP exige **confissão formal e circunstanciada** — sem ela, não há acordo.
- Ignorar a vedação de **violência doméstica/de gênero** ao ANPP (art. 28-A, §2º, IV).
- Não checar o **quinquênio** de benefícios anteriores (transação/sursis processual/ANPP nos 5 anos — impeditivo cruzado).
- Somar penas em concurso sem verificar o impacto no teto de pena mínima do sursis processual (Súmulas 243/STJ, 723/STF).
- Pleitear **sursis da pena** sem antes descartar a **substituição por restritivas** (art. 44), que tem preferência.
- Analisar um só instituto e parar — a skill existe justamente para testar **os quatro em paralelo** e achar a rota mais benéfica.
- Citar número de HC/REsp/RE/Súmula de memória — **passa pelo Gate**.

## Checklist de elegibilidade (rodar em todo caso)

- [ ] **Momento processual** identificado (pré-denúncia / pós-recebimento / sentença)?
- [ ] **Tipo de pena** correto por instituto (máxima × mínima × concreta)?
- [ ] **IMPO?** (pena máx. ≤ 2 anos → transação preferencial e ANPP vedado)
- [ ] **Pena mínima ≤ 1 ano?** (sursis processual — art. 89)
- [ ] **Pena mínima < 4 anos e SEM violência/grave ameaça?** (ANPP — art. 28-A)
- [ ] **Confissão** viável e formalizável (requisito do ANPP)?
- [ ] **Impeditivos** checados: reincidência/habitualidade, benefício nos últimos 5 anos, violência doméstica/de gênero?
- [ ] **Concurso de crimes** avaliado quanto ao teto de pena mínima (Súmulas 243/723)?
- [ ] **Na sentença:** pena concreta ≤ 2 anos, não reincidente doloso, substituição do art. 44 descartada → sursis da pena?
- [ ] **Ordem de preferência** definida e justificada (rota mais benéfica)?
- [ ] **Súmulas/precedentes** conferidos via `jurisprudencia-stj-stf` e `verificacao-citacoes`?
- [ ] **Encaminhamento** à skill de peça correta (`transacao-penal` / `suspensao-condicional-processo` / `anpp` / `sursis-da-pena`)?

## Lembretes finais

- **Filtro-mestre primeiro:** momento processual + tipo de pena (máxima/mínima/concreta) definem o instituto.
- **Teste os quatro em paralelo** — o valor desta skill é comparar, não analisar um só.
- **Transação veda ANPP** (subsidiariedade do art. 28-A); **substituição do art. 44 tem preferência** sobre o sursis da pena.
- **Quinquênio e reincidência** são impeditivos cruzados — cheque o histórico.
- **Esta é a análise, não a peça** — ao definir o instituto, encaminhe para a skill própria.
- **Custo-benefício** (negociar × recorrer) é da skill `decisao-recorrer-vs-negociar`, não daqui.
- **Conferir vigência** dos arts. 76/89 da Lei 9.099/95, 28-A do CPP e 77-82 do CP, e das súmulas, via `jurisprudencia-stj-stf` antes de concluir.

## Nota de conformidade

Rascunho técnico de triagem sob **revisão humana obrigatória** — a decisão sobre cabimento e estratégia é sempre do advogado responsável (CED/EAOAB; Provimento 205/2021 da OAB para comunicação/publicidade). Nenhuma súmula, tese ou precedente é citado de memória: tudo passa pelo gate `verificacao-citacoes`. Para o polo acusatório (MP/assistente de acusação), a análise de proposta/recusa dos acordos observa a disciplina do CNMP; para a Defensoria, a LC 80/94. **Esta skill é neutra quanto ao instituto, mas o foco de atuação é majoritariamente de DEFESA** — o roteador deve confirmar o polo da instituição em `_criminalsquad/_memory/company.md`.
