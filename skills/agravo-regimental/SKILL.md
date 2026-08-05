---
name: agravo-regimental
description: >-
  Use ao elaborar, redigir, estruturar ou revisar AGRAVO REGIMENTAL (agravo interno) em matéria
  criminal — o recurso contra decisão monocrática de relator em 2º grau, no STJ e no STF. Gatilhos:
  agravo regimental, agravo interno, AgRg, AgInt, art. 39 da Lei 8.038/90, art. 1.021 do CPC (c/c
  art. 3º do CPP), regimento interno (RISTF/RISTJ)…. Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-agravo-regimental"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["agravo-regimental", "agravo regimental"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Agravo Regimental / Agravo Interno (AgRg / AgInt)

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

Esta skill orienta a construção da peça de **Agravo Regimental** (também chamado **agravo interno**) em matéria criminal — o recurso que ataca **decisão monocrática de relator** (ou do Presidente/Vice-Presidente do tribunal) e leva a questão ao **órgão colegiado**. É a peça mais frequente da prática em tribunais superiores: **toda decisão monocrática que nega seguimento a HC, RHC, REsp ou AREsp desafia AgRg** — e, com a ressalva de cabimento indicada adiante, também o indeferimento monocrático de liminar em HC. Complementa as skills **habeas-corpus** e **hc-tribunais-superiores** (ver adiante o caso do indeferimento monocrático de liminar).

## O instituto e a base legal

O agravo regimental é o instrumento que preserva o **princípio da colegialidade**: as decisões dos tribunais são, por natureza, colegiadas; a decisão unipessoal do relator só se legitima porque pode ser revista pelo colegiado mediante agravo.

| Fonte | O que diz |
|---|---|
| **Lei 8.038/90, art. 39** | Da decisão do relator (ou do Presidente) que causar gravame à parte, no STJ e no STF, cabe **agravo em 5 (cinco) dias** para o órgão especial, Seção ou Turma. **É a base do prazo criminal.** |
| **CPC, art. 1.021** (c/c **art. 3º do CPP**) | Disciplina o "agravo interno" contra decisão do relator: retratação ou submissão ao colegiado; dever de impugnação específica (§1º); vedação à reprodução dos fundamentos da monocrática pelo colegiado sem enfrentar o agravo (§3º). Aplicável **subsidiariamente** ao processo penal — **exceto quanto ao prazo** (ver adiante). |
| **CPC, art. 932** | Fixa os poderes do relator de decidir monocraticamente (não conhecer, negar ou dar provimento com base em súmula ou jurisprudência dominante). É a porta de entrada da monocrática — e, portanto, o alvo típico do agravo. |
| **Regimentos internos** | RISTF (agravo regimental em 5 dias contra decisão que cause prejuízo ao direito da parte), RISTJ e regimentos de TJs/TRFs disciplinam procedimento, pauta e julgamento. Confira o dispositivo regimental vigente do tribunal concreto via agente **lei-e-sumula** antes de citá-lo na peça. |
| **Súmula 568 do STJ** | "O relator, monocraticamente e no Superior Tribunal de Justiça, poderá dar ou negar provimento ao recurso quando houver entendimento dominante acerca do tema." — é o fundamento usual da monocrática; atacá-la passa por demonstrar que **não** há entendimento dominante ou que o caso é distinto. |

**Nomenclatura:** "agravo regimental" (tradição, base regimental) e "agravo interno" (CPC 1.021) designam, na prática criminal, o **mesmo recurso**. Nos tribunais superiores, em matéria penal, a autuação usual é **AgRg**.

## Cabimento — contra o que cabe (e contra o que NÃO cabe)

**Regra:** cabe AgRg contra **decisão unipessoal** (monocrática) de relator, Presidente ou Vice-Presidente de tribunal que **cause gravame** à parte.

Alvos típicos na prática criminal:

- Monocrática que **nega seguimento / não conhece** de REsp, AREsp, RHC ou HC.
- Monocrática que **nega ou dá provimento ao mérito** com base em jurisprudência dominante (CPC 932, IV e V; Súmula 568/STJ).
- **Indeferimento monocrático de liminar em HC** — no tribunal de origem, no STJ ou no STF. Aqui o AgRg dialoga com a Súmula 691/STF: em vez de impetrar novo HC contra a decisão liminar (barrado, em regra, pela súmula), a alternativa é **agravar para exaurir o colegiado** — mas o **cabimento do AgRg contra indeferimento de liminar em HC é oscilante** na jurisprudência (há corrente que tem a decisão por irrecorrível): **confirme o estado atual via agente `jurisprudencia-stj-stf`** antes de escolher a via. Ver skill **hc-tribunais-superiores** para a estratégia completa (HC per saltum, superação da 691, novo writ).
- Decisão do relator em **revisão criminal, reclamação e ações originárias** que cause gravame.
- Decisões monocráticas de **desembargador relator em 2º grau** (ex.: nega seguimento a apelação manifestamente inadmissível; indefere liminar em HC no TJ/TRF) — base no CPC 932 e 1.021 c/c art. 3º do CPP e no regimento interno local.

### Tabela de desvio — a decisão é atacável por OUTRO recurso?

| Decisão | Recurso correto | NÃO é AgRg porque... |
|---|---|---|
| Inadmissão de REsp/RE **pelo tribunal de origem** (Presidente/Vice) | **Agravo em REsp / em RE** (CPC, art. 1.042) — ver skill **agravo-em-resp-re** | sobe ao tribunal superior; cabe agravo **interno** na origem só nas hipóteses do art. 1.030, §2º, do CPC (negativa de seguimento com base em repetitivo/repercussão geral ou sobrestamento) — trocar um pelo outro é **erro grosseiro** |
| Decisão **colegiada** (acórdão) de Turma/Câmara | EDcl, REsp/RE, EREsp, ou HC conforme o caso | AgRg pressupõe decisão **unipessoal**; agravar de acórdão é erro grosseiro |
| Decisão do **juiz da execução penal** | **Agravo em execução** (art. 197 da LEP, rito do RESE) | não confundir os "agravos" — ver skill **agravo-em-execucao** |
| Decisão interlocutória de **juiz de 1º grau** | RESE (art. 581 do CPP), se cabível | AgRg é recurso interno **de tribunal** |

## Prazo — A ARMADILHA CENTRAL

- **Matéria criminal: 5 (cinco) dias**, com base no **art. 39 da Lei 8.038/90** e nos regimentos internos. **Súmula 699 do STF:** o prazo do agravo em processo penal é de 5 dias (Lei 8.038/90), não se aplicando as alterações do CPC. Entendimento pacificado no STJ e no STF **quanto ao agravo regimental/interno**: o CPC/2015 **não alterou** esse prazo de 5 dias. **Atenção:** quanto ao **agravo em REsp/RE do art. 1.042 do CPC**, a Súmula 699 foi **superada nesse ponto** — o prazo lá é de **15 dias corridos** (ver skill **agravo-em-resp-re**); confirme o precedente atual via agente `jurisprudencia-stj-stf`.
- **Contagem em dias CORRIDOS** — art. 798 do CPP (o cômputo em dias úteis do CPC não se aplica ao processo penal). Exclui-se o dia do começo e inclui-se o do vencimento (§1º); vencimento em domingo ou feriado **prorroga** para o dia útil imediato (§3º).
- **Matéria cível: 15 dias úteis** (CPC, art. 1.070, contados na forma do art. 219). **É a pegadinha clássica:** o advogado habituado ao cível perde o AgRg criminal por intempestividade. No criminal, são **5 dias corridos** — ponto.
- **Súmula 310 do STF:** intimação/publicação na sexta-feira → o prazo começa a correr na segunda-feira imediata (havendo expediente).
- **Defensoria Pública: prazo em dobro** (LC 80/94 — intimação pessoal e contagem dobrada), aplicável ao processo penal. O **Ministério Público não** goza de prazo em dobro no processo penal.

> Na tempestividade da peça, cite expressamente o **art. 39 da Lei 8.038/90** e o **art. 798 do CPP**, demonstrando a interposição em 5 dias corridos — antecipe a objeção em vez de deixar o tema para a impugnação da parte contrária.

## Requisito nuclear — DIALETICIDADE (Súmula 182/STJ)

**Súmula 182 do STJ:** *"É inviável o agravo do art. 545 do CPC que deixa de atacar especificamente os fundamentos da decisão agravada."* — editada sob o CPC/73, permanece o mantra de inadmissão de AgRg.

Consequências práticas:

1. **Impugne TODOS os fundamentos** da monocrática, um a um (CPC, art. 1.021, §1º). Fundamento não atacado subsiste e mantém a decisão por si só (lógica da **Súmula 283/STF**).
2. **Não reitere em bloco** as razões do recurso anterior (REsp/HC): a mera reprodução, sem dialogar com o que o relator **efetivamente decidiu**, atrai a Súmula 182. Copie-e-cole é a causa número 1 de não conhecimento.
3. Estruture cada tópico do agravo como um **par**: "o relator afirmou X → X está equivocado porque Y". Transcreva o trecho da monocrática atacado antes de rebatê-lo.
4. Fundamentação genérica ou deficiente atrai, por analogia, a **Súmula 284/STF**.

## Estrutura da peça — PETIÇÃO ÚNICA

Diferentemente do RESE (peça bipartida — ver skill **rese**), o AgRg é **petição única**, dirigida ao **próprio relator** da decisão agravada, com razões no corpo e pedido escalonado: **reconsideração → submissão ao colegiado → provimento**.

### Endereçamento

- **STJ:** `Excelentíssimo(a) Senhor(a) Ministro(a) Relator(a) do [HC/REsp/AREsp/RHC] n. [...] — [5ª/6ª] Turma do Superior Tribunal de Justiça` (matéria criminal no STJ concentra-se na **Terceira Seção** — 5ª e 6ª Turmas).
- **STF:** `Excelentíssimo(a) Senhor(a) Ministro(a) Relator(a) do [HC/RE/ARE] n. [...] — [1ª/2ª] Turma do Supremo Tribunal Federal`.
- **2º grau:** `Excelentíssimo(a) Senhor(a) Desembargador(a) Relator(a) do [recurso/HC] n. [...] — [N]ª Câmara Criminal do Tribunal de Justiça de [...]` (na Justiça Federal: Turma do TRF).

> **Dirige-se ao RELATOR** (que pode se retratar), **não** ao Presidente do tribunal nem diretamente ao colegiado. Endereçar errado é pegadinha recorrente.

### Preâmbulo

- Nome do agravante + `já qualificado nos autos em epígrafe` (fase recursal — não requalificar).
- `por intermédio do(a) advogado(a) que esta subscreve (procuração já nos autos)` — ou Defensoria Pública, com a prerrogativa do prazo em dobro consignada.
- **Tempestividade:** `no prazo de 5 (cinco) dias do art. 39 da Lei 8.038/90, contado na forma do art. 798 do Código de Processo Penal (CPP)`.
- Verbo **INTERPOR** + nome em caixa alta: `interpor AGRAVO REGIMENTAL`, forte no art. 39 da Lei 8.038/90 e no art. 1.021 do Código de Processo Civil, aplicável por força do art. 3º do CPP, contra a decisão monocrática de [data/evento], pelas razões a seguir.

### I — Da síntese da decisão agravada

2-4 frases: qual recurso/ação estava em julgamento, o que o relator decidiu monocraticamente e **com base em quais fundamentos** (liste-os — essa lista guiará a impugnação específica). Ex.: *"O relator negou seguimento ao habeas corpus por (i) suposta incidência da Súmula 691/STF e (ii) ausência de flagrante ilegalidade. Ambos os fundamentos serão impugnados especificamente."*

### II — Do cabimento e da tempestividade

Decisão unipessoal que causa gravame → AgRg (Lei 8.038/90, art. 39; CPC, arts. 932 e 1.021 c/c art. 3º do CPP; dispositivo do regimento interno do tribunal — confirme o artigo vigente via agente **lei-e-sumula**). Interposição nos 5 dias corridos.

### III — Das razões (impugnação específica, fundamento por fundamento)

Um subtópico por fundamento da monocrática (`III.1 — Da equivocada aplicação de...`; `III.2 — Da inexistência de...`). Em cada um: transcreva o trecho atacado → demonstre o desacerto → indique a consequência (retratação/provimento). Onde a tese exigir precedente atual do STJ/STF, **pesquise via agente jurisprudencia-stj-stf e verifique com verificador-citacoes; marque [NÃO VERIFICADO] o que não confirmar** — jamais cite julgado de memória.

### IV — Dos pedidos (escalonados)

```
Diante do exposto, requer:
a) o conhecimento do presente agravo regimental;
b) o juízo de retratação por Vossa Excelência (art. 1.021, § 2º, do CPC,
   c/c art. 3º do CPP), reconsiderando-se a decisão agravada;
c) subsidiariamente, a submissão do recurso ao órgão colegiado competente,
   para que se lhe dê provimento, reformando-se a decisão monocrática a fim
   de [conceder a ordem / conhecer e prover o recurso / deferir a liminar];
d) [se for o caso] a concessão de habeas corpus DE OFÍCIO (art. 654, § 2º,
   do CPP), ante a flagrante ilegalidade demonstrada.
```

**Fechamento:** `Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

## Teses típicas da prática

- **Violação da colegialidade:** a matéria **não** comportava decisão monocrática — não há súmula nem jurisprudência **dominante** sobre o tema (afasta CPC 932 e Súmula 568/STJ); a divergência entre as Turmas ou a tese inédita exigem o colegiado.
- **Distinguishing:** o precedente/tese invocado na monocrática não se aplica — demonstre a distinção fática ou jurídica ponto a ponto (pesquise o teor atual via agente jurisprudencia-stj-stf).
- **Revaloração jurídica × reexame de prova:** quando a monocrática invoca a **Súmula 7/STJ**, sustente que não se pede reexame fático, e sim **revaloração jurídica de fatos incontroversos** delineados no acórdão (qualificação jurídica, dosimetria com fatos assentados, ilicitude de prova documentada).
- **Erro de premissa fática:** a monocrática partiu de fato que não consta dos autos (ex.: afirmou trânsito em julgado inexistente, ignorou peça juntada) — fundamento forte para retratação.
- **Flagrante ilegalidade + HC de ofício:** mesmo com óbice de conhecimento, a ilegalidade patente autoriza a concessão de ofício (art. 654, §2º, do CPP) — sempre incluir como pedido subsidiário em matéria de liberdade.
- **Exaurimento de instância:** o AgRg é passo necessário para esgotar a jurisdição do tribunal antes do RE/AREsp (lógica da **Súmula 281/STF**) e para viabilizar HC ao tribunal superior sem o óbice do não exaurimento — articulação detalhada na skill **hc-tribunais-superiores**.

## Erros comuns e pegadinhas

- **Prazo cível no processo penal:** protocolar no 10º dia útil confiando no CPC 1.021 = intempestividade. **5 dias corridos** (Lei 8.038/90, art. 39; CPP, art. 798).
- **Pedido de reconsideração "puro":** petição avulsa pedindo só reconsideração **não é recurso, não interrompe nem suspende o prazo** do AgRg. Se quiser a reconsideração, formule-a **dentro** do agravo (pedido "b" acima), nunca em substituição a ele.
- **Falta de dialeticidade:** reiterar as razões do REsp/HC sem atacar o que o relator escreveu → Súmula 182/STJ → agravo não conhecido. Cada fundamento da monocrática deve ter um contraponto expresso.
- **Fundamento autônomo não impugnado:** basta um fundamento suficiente intocado para manter a decisão (lógica da Súmula 283/STF).
- **Endereçamento errado:** dirigir ao Presidente do tribunal ou "à Turma" diretamente; ou usar AgRg contra decisão de inadmissão de REsp na **origem** (cabe agravo do art. 1.042 do CPC); ou contra **acórdão** (não cabe).
- **Confusão entre agravos:** agravo **regimental** (monocrática de relator) ≠ agravo **em execução** (art. 197 da LEP) ≠ agravo **em REsp/RE** (art. 1.042 do CPC). Três recursos, três cabimentos.
- **Preparo:** em ação penal pública não há preparo; em **ação penal privada**, a falta de pagamento das custas pode acarretar **deserção** (CPP, art. 806, §2º) — confira a tabela de custas do tribunal.
- **Multa do art. 1.021, §4º, do CPC:** agravo manifestamente inadmissível ou improcedente em votação unânime pode gerar multa; a transposição ao processo penal é controvertida — se o colegiado a aplicou ou a parte contrária a pediu, pesquise o estado atual da jurisprudência via agente jurisprudencia-stj-stf e verifique com verificador-citacoes.
- **Sustentação oral:** em regra não há sustentação oral em AgRg, mas o Estatuto da OAB passou a assegurá-la em hipóteses de agravo contra monocrática que extingue ou julga o mérito de ação/recurso (alteração do art. 7º do EAOAB pela Lei 14.365/2022) — confira o dispositivo vigente e a regulamentação regimental via agente **lei-e-sumula** antes de requerê-la.
- **Efeito suspensivo:** o AgRg **não** tem efeito suspensivo automático; em matéria de liberdade, formule pedido expresso (liminar/tutela de urgência) ou combine com a estratégia de HC — ver skills **habeas-corpus** e **hc-tribunais-superiores**.
- **Fungibilidade com embargos de declaração:** contra monocrática com omissão/contradição cabem EDcl; os tribunais por vezes recebem EDcl como AgRg (e vice-versa) pela fungibilidade — mas não conte com ela: escolha o recurso correto e o prazo mais curto.

## Checklist final

- [ ] A decisão atacada é **unipessoal** (monocrática) e causa gravame? (Se acórdão → outro recurso)
- [ ] Não é caso de agravo do art. 1.042 do CPC (inadmissão de REsp/RE na origem) nem de agravo em execução (art. 197 da LEP)?
- [ ] Tempestividade com **art. 39 da Lei 8.038/90** + **art. 798 do CPP** (5 dias **corridos**; dobro se Defensoria)?
- [ ] Endereçado ao **relator** da decisão agravada (não ao Presidente, não à Turma)?
- [ ] Verbo **INTERPOR**; nome em caixa alta; fundamento legal completo (Lei 8.038 + CPC 1.021 c/c art. 3º CPP + regimento)?
- [ ] Síntese da decisão agravada **listando todos os fundamentos** da monocrática?
- [ ] **Dialeticidade:** cada fundamento impugnado especificamente, com transcrição do trecho atacado (Súmula 182/STJ)?
- [ ] Nenhum fundamento autônomo ficou sem impugnação (Súmula 283/STF)?
- [ ] Precedentes atuais pesquisados via jurisprudencia-stj-stf e checados pelo verificador-citacoes (nada citado de memória)?
- [ ] Pedidos **escalonados**: conhecimento → retratação → submissão ao colegiado → provimento (+ HC de ofício, se matéria de liberdade)?
- [ ] Pedido de efeito suspensivo/liminar, se houver urgência?

## Lembretes finais

- **Toda monocrática que nega HC/REsp/AREsp/RHC ou indefere liminar desafia AgRg** — é a peça mais frequente dos tribunais superiores.
- **Prazo: 5 dias CORRIDOS no criminal** (Lei 8.038/90, art. 39 + CPP, art. 798) — nunca os 15 úteis do cível.
- **Peça única ao relator** — reconsideração ou colegiado (contraste com o RESE, bipartido).
- **Dialeticidade é tudo:** Súmula 182/STJ derruba o agravo que não ataca especificamente cada fundamento.
- **Pedido de reconsideração isolado não suspende prazo** — a reconsideração vai dentro do agravo.
- **Em matéria de liberdade:** sempre pedir **HC de ofício** (art. 654, §2º, CPP) e avaliar a via paralela do writ — ver **habeas-corpus** e **hc-tribunais-superiores**.
- Jurisprudência específica: **pesquise via agente jurisprudencia-stj-stf e verifique com verificador-citacoes; marque [NÃO VERIFICADO] o que não confirmar.**

## Apoie-se em

- **Best-practice:** `recurso-criminal` — princípios recursais gerais (tempestividade, dialeticidade, interesse recursal, vedação à reformatio in pejus) que esta skill pressupõe.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedentes atuais do STJ/STF para o distinguishing, a demonstração de divergência entre Turmas e o estado da jurisprudência sobre a multa do art. 1.021, §4º.
- **Agente `lei-e-sumula`** — conferência do dispositivo regimental vigente (RISTF/RISTJ/regimentos locais) e do texto atual do art. 7º do EAOAB (sustentação oral).
- **Agente `verificador-citacoes`** — gate obrigatório: nenhum julgado entra na peça sem verificação; o que não confirmar sai ou vai marcado [NÃO VERIFICADO].
- **Skill `hc-tribunais-superiores`** (desta onda) — estratégia completa do AgRg contra indeferimento monocrático de liminar em HC: Súmula 691/STF, exaurimento do colegiado e novo writ ao tribunal superior.
- **Skill `habeas-corpus`** — a peça de HC em si; esta skill cobre o agravo quando o writ (ou sua liminar) é barrado monocraticamente.
- **Skills `agravo-em-resp-re` e `agravo-em-execucao`** — os outros dois "agravos" criminais; consulte-as ao decidir o cabimento (tabela de desvio acima).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
