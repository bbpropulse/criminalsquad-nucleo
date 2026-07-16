---
name: execucao-saida-temporaria
description: >-
  Use ao elaborar pedido de saída temporária na execução penal (regime semiaberto — arts. 122-125
  LEP) e ao distingui-la da permissão de saída (art. 120) e do trabalho externo (arts. 36-37).
  Atenção às restrições da Lei 14.843/2024 e à irretroatividade da lei mais gravosa. Gatilhos: saída
  temporária, visita à família, regime semiaberto, 1/6 da pena, calendário anual de saídas,
  permissão de saída, trabalho externo, Lei…. Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-execucao-saida-temporaria"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-saida-temporaria", "execucao saida", "saida temporaria"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Saída Temporária (e Trabalho Externo)

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

Esta skill orienta a construção do **pedido de saída temporária** — autorização para o condenado em **regime semiaberto** deixar o estabelecimento, **sem vigilância direta**, por prazo determinado, como instrumento ordinário de reinserção social (arts. 122-125 LEP). Cobre também as **distinções** com a permissão de saída (art. 120) e o trabalho externo (arts. 36-37), e a **tese mais quente do tema**: a irretroatividade das restrições trazidas pela **Lei 14.843/2024**.

> **Lição central:** a saída temporária pressupõe **regime semiaberto** — no fechado, o que cabe é permissão de saída (com escolta) ou trabalho externo. A concessão é **ato jurisdicional do juiz da execução** (Súmula 520/STJ), ouvidos o MP e a administração; a administração **opina, não defere**.

> **Princípio reitor (individualização e ressocialização — CF, art. 5º, XLVI; art. 1º LEP):** a saída temporária é etapa do regime progressivo. Diferentemente da permissão de saída, **não depende de evento urgente** — é instrumento de reaproximação gradual ao convívio familiar e social.

## Mapa — qual instituto cabe em cada situação

| Critério | Permissão de saída (art. 120) | Saída temporária (arts. 122-125) | Trabalho externo (arts. 36-37) |
|---|---|---|---|
| Regimes | fechado e semiaberto | **semiaberto** | fechado (obras/serviços públicos) e semiaberto |
| Vigilância | **com escolta** | **sem vigilância direta** (admite monitoração eletrônica) | sem escolta no semiaberto; no fechado com cautelas |
| Pressuposto | **evento urgente**: falecimento/doença grave de cônjuge, ascendente, descendente ou irmão; tratamento médico | reinserção (visita à família, curso, atividade ressocializadora) | atividade laboral |
| Quem concede | **diretor** do estabelecimento (ato administrativo) | **Juiz da execução** (ato jurisdicional — Súmula 520/STJ) | direção, conforme art. 37 |
| Lapso | não há (urgência) | **1/6** (primário) / **1/4** (reincidente) — art. 123, II | **1/6** da pena (art. 37) + aptidão, disciplina e responsabilidade |
| Duração | tempo necessário ao evento | até **7 dias**, renovável até **5x/ano** (art. 124) | jornada laboral |

> Não confundir: a saída temporária **deferida ou condicionada por ato da direção** do presídio é nula — só o **juiz** decide (Súmula 520/STJ). Ataque tanto autorizações administrativas quanto vedações administrativas não chanceladas judicialmente.

## Base legal e súmulas

**Legislação:**
- **Art. 122 LEP** — saída temporária ao condenado em regime semiaberto, **sem vigilância direta**, nas hipóteses: I — visita à família; II — frequência a curso supletivo profissionalizante, de 2º grau ou superior, na Comarca do Juízo; III — participação em atividades de retorno ao convívio social. **§1º** — a ausência de vigilância direta não impede o uso de **monitoração eletrônica** quando o juiz determinar. **§2º** — vedação (ver seção da Lei 14.843/2024).
- **Art. 123 LEP** — concessão por **ato motivado do juiz da execução**, ouvidos MP e administração, condicionada a: I — **comportamento adequado**; II — **1/6** da pena (primário) ou **1/4** (reincidente); III — **compatibilidade** do benefício com os objetivos da pena.
- **Art. 124 LEP** — prazo **não superior a 7 dias**, renovável por até **5 vezes** ao ano; para curso (art. 122, II), o prazo é o necessário às atividades; condições impostáveis: fornecer endereço, recolhimento noturno à residência, proibição de frequentar bares e casas noturnas. *(Periodicidade e demais condições: conferir a redação vigente após a Lei 14.843/2024 — ver abaixo.)*
- **Art. 125 LEP** — **revogação** se o condenado pratica crime doloso, é punido por falta grave, desatende às condições ou revela baixo aproveitamento do curso; recuperação do direito depende de absolvição, cancelamento da punição ou demonstração de merecimento.
- **Arts. 120-121 LEP** — permissão de saída (com escolta, ato administrativo do diretor).
- **Arts. 36-37 LEP** — trabalho externo (art. 37: autorização da direção, **1/6** da pena, aptidão/disciplina/responsabilidade).
- **CF, art. 5º, XL** (irretroatividade da lei penal mais gravosa) e **XLVI** (individualização); **CP, art. 2º**.

**Súmulas e temas (existentes — conferir vigência antes de citar):**
- **Súmula 40/STJ** — para a saída temporária e o trabalho externo, **considera-se o tempo cumprido no regime fechado** (o lapso de 1/6 não recomeça do zero ao progredir para o semiaberto).
- **Súmula 520/STJ** — a saída temporária é **ato jurisdicional insuscetível de delegação** à autoridade administrativa do estabelecimento.
- **Súmula 471/STJ** — invocada no precedente sobre irretroatividade (HC 932.864-SC).
- **Tema 917/STJ** — possibilidade de remição em trabalho extramuros.

## Requisito objetivo e cálculo (art. 123, II)

```
fração exigida = 1/6 (primário)   |   1/4 (reincidente)
considera-se o tempo cumprido no regime fechado (Súmula 40/STJ)
implemento do lapso = dies a quo + fração aplicada sobre a pena
```

**Exemplo (caso didático — pena de 6 anos, furto qualificado, primário, preso desde 10/01/2023):**
1. Fração = 1/6 de 6 anos = **1 ano**.
2. Dies a quo = 10/01/2023 (computado o tempo no fechado — Súm. 40).
3. Implemento = 10/01/2023 + 1 ano = **10/01/2024**.
4. Preenchidos semiaberto + comportamento adequado + 1/6 + compatibilidade, o apenado faz jus à saída temporária a partir de **10/01/2024**.

**Prazo e renovações (art. 124):** cada saída até **7 dias**, renovável por até **5 vezes** no ano (visita à família); para estudo, o prazo necessário às atividades. *(Confirmar periodicidade mínima entre saídas na redação vigente após a Lei 14.843/2024.)*

## Requisito subjetivo — aferição sem corte temporal

O juízo pode considerar **toda a execução** para aferir o mérito, não apenas o último período de boa conduta (HC 795.970-SC, Inf. 767/STJ).

> **Espada de dois gumes:** a tese autoriza o juiz a recuar a faltas antigas, mas **também serve à defesa** — se a execução, vista no conjunto, é predominantemente positiva, a defesa exige que o juízo pondere o todo, e não um deslize isolado. Sempre **contextualizar** faltas pretéritas com a evolução posterior do comportamento.

## ATENÇÃO À LEI 14.843/2024 — restrição e irretroatividade (tese nuclear)

A **Lei 14.843/2024** alterou o **art. 122 da LEP**, recrudescendo a saída temporária. Conforme o acervo (HC 932.864-SC), o **§2º do art. 122** passou a **restringir o gozo das saídas temporárias aos condenados por crimes hediondos ou cometidos com violência ou grave ameaça à pessoa** — vedação **mais ampla** que a anterior (que mirava o hediondo **com resultado morte**).

> ⚠️ **A confirmar na lei publicada:** a Lei 14.843/2024 é também apontada como tendo restringido a hipótese de **saída temporária para visita à família** em certas situações e ampliado a **monitoração eletrônica** como condição. O acervo só dá literalidade quanto ao **§2º do art. 122**. **Conferir a redação oficial vigente** antes de peticionar.

**Tese central — irretroatividade da lei mais gravosa (HC 932.864-SC, 6ª T., Inf. 827/STJ):**
- O §2º do art. 122 LEP, com a redação da Lei 14.843/2024, **não retroage** a fatos anteriores à sua vigência, em respeito à **irretroatividade da lei penal mais gravosa**.
- A lei **recrudesce a execução**; aplicá-la a fatos pretéritos é **novatio legis in pejus**, vedada pela **CF, art. 5º, XL** e pelo **CP, art. 2º** (acervo invoca a Súmula 471/STJ).
- **Marco temporal:** a data do **fato/crime** — não a data do requerimento nem do início da execução.

| Situação do crime | Regime jurídico da saída temporária |
|---|---|
| Fato **anterior** à Lei 14.843/2024 | Lei **antiga** (mais benéfica) — as vedações novas **não incidem** (HC 932.864-SC) |
| Fato **posterior** à Lei 14.843/2024 | Lei **nova** — art. 122, §2º (vedação a hediondos / violência ou grave ameaça) |

> **Tese defensiva nuclear:** para condenado por **crime praticado antes da vigência da Lei 14.843/2024** *(conferir a data exata)*, as novas vedações do art. 122, §2º, **não se aplicam** — a saída temporária rege-se pela lei anterior. Provar a **data do fato** é o ponto de virada.

## Trabalho externo — teses úteis (arts. 36-37)

- **Celular no trabalho externo sem vedação judicial não é falta grave** (AgRg no HC 866.758-SP, Inf. 817/STJ): não há previsão legal de incomunicabilidade durante o trabalho externo; só há falta por desobediência (art. 50, VI) se houver **ordem judicial expressa**. Tese forte contra regressão/falta fundada apenas nisso.
- **Remição em trabalho externo autônomo** (Inf. 836/STJ; **Tema 917**): comprovada a atividade laboral autônoma, é ilegítimo afastar a remição por ausência de supervisão/jornada documentada — exigência **flexibilizada** para o trabalhador sem patrão. Útil para profissionais liberais.
- **Recrudescimento exige PAD** (HC 575.495-MG, Inf. 673/STJ): suspensão/revogação de trabalho externo ou de saída temporária **não pode ser automática** — exige procedimento disciplinar com contraditório e ampla defesa.

## Legitimidade ampliada — Defensoria como custos vulnerabilis

A Defensoria Pública pode atuar como **custos vulnerabilis** na execução penal, **mesmo havendo advogado constituído** (REsp 2.211.681-MA, Inf. 857/STJ — caso de origem era pedido de saída temporária). Útil para **dupla camada de defesa** e para destravar pedidos quando há omissão da defesa técnica.

## Estrutura da petição

Peça dirigida ao **Juízo da Vara de Execuções Penais**, pedindo a autorização e, subsidiariamente, a inclusão em calendário anual (sob decisão jurisdicional — Súm. 520).

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]

Autos de Execução Penal nº [Nº DA EXECUÇÃO]

[NOME DO APENADO], já qualificado nos autos da execução em epígrafe, por seu
advogado que esta subscreve, vem requerer AUTORIZAÇÃO DE SAÍDA TEMPORÁRIA, com
fundamento nos arts. 122 a 124 da Lei de Execução Penal, pelas razões a seguir.

I — DOS FATOS
O apenado cumpre pena de [PENA TOTAL] pela prática do crime de [CRIME],
encontrando-se no regime SEMIABERTO, com comportamento carcerário adequado
(atestado anexo), preso desde [DATA DA PRISÃO]. Pretende a saída temporária
para [FINALIDADE — ex.: visita à família].

II — DO DIREITO

a) Do regime e da finalidade
A saída temporária é cabível ao condenado em regime semiaberto (art. 122 da LEP),
para visita à família, estudo ou atividades de reinserção social.

b) Do requisito objetivo
Nos termos do art. 123, II, da LEP, o apenado primário faz jus ao benefício após
o cumprimento de 1/6 da pena, computado o tempo no regime fechado (Súmula 40 do
STJ). Sobre a pena de [PENA TOTAL], 1/6 corresponde a [LAPSO], cumprido em
[DATA DO LAPSO], conforme cálculo anexo. [Reincidente: a fração é de 1/4.]

c) Dos requisitos subjetivos
O comportamento adequado está comprovado pelo atestado de conduta, e o benefício
é compatível com os objetivos da pena (art. 123, I e III), devendo o mérito ser
aferido à luz de todo o histórico da execução (HC 795.970-SC).

d) Da inexistência de vedação
O crime de [CRIME] não atrai a vedação do art. 122, §2º, da LEP. [Se o crime for
hediondo/violento, mas o FATO for anterior à Lei 14.843/2024: a vedação mais
ampla introduzida por essa lei não retroage — novatio legis in pejus vedada pela
CF, art. 5º, XL, e pelo CP, art. 2º (HC 932.864-SC; Súmula 471/STJ).]

III — DO PEDIDO
Requer:
a) a concessão da SAÍDA TEMPORÁRIA, pelo prazo de até 7 dias, renovável nos
   termos do art. 124 da LEP (até 5 vezes no ano, para visita à família);
b) subsidiariamente, a inclusão do apenado em calendário anual de saídas
   temporárias, observada a decisão jurisdicional (Súmula 520 do STJ);
c) a oitiva do Ministério Público e da administração penitenciária.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA TOTAL], [CRIME], [DATA DA PRISÃO], [FINALIDADE], [LAPSO], [DATA DO LAPSO], [LOCAL], [DATA], [ADVOGADO], [UF], [NÚMERO].

## Documentos a anexar

1. Procuração.
2. Atestado de comportamento carcerário adequado (emitido pela direção).
3. Cálculo de liquidação de pena (demonstra o 1/6, computado o regime fechado — Súm. 40).
4. Comprovante de endereço da família (para visita) ou matrícula escolar (para estudo).
5. Guia de recolhimento.
6. (Se a tese da Lei 14.843/2024 for invocada) prova da **data do fato** — denúncia, sentença, certidão — para demonstrar a anterioridade à lei mais gravosa.

## Checklist e anti-padrões (verificar antes de protocolar)

**Requisitos:**
- [ ] Apenado em **regime semiaberto**? (no fechado → permissão de saída ou trabalho externo)
- [ ] **1/6** (primário) / **1/4** (reincidente) cumprido, **computado o regime fechado** (Súm. 40)?
- [ ] **Comportamento adequado** atestado e **compatibilidade** com os fins da pena (art. 123, I e III)?
- [ ] Requisito subjetivo sustentado à luz de **toda a execução**, contextualizando faltas antigas (HC 795.970-SC)?

**Vedações e lei no tempo:**
- [ ] O crime atrai a vedação do **art. 122, §2º**? Se hediondo/violento, **o fato é anterior à Lei 14.843/2024**? Em caso afirmativo, invocar **irretroatividade** (HC 932.864-SC; CF 5º, XL; CP 2º; Súm. 471).
- [ ] **Conferir a redação vigente** do art. 122/124 após a Lei 14.843/2024 (visita à família, periodicidade, monitoração).

**Jurisdicionalidade e via:**
- [ ] Pedido endereçado ao **juiz da execução**, exigindo decisão **motivada** (Súm. 520)?
- [ ] Atacou eventual **ato administrativo** que defira/indefira/condicione a saída (delegação vedada)?
- [ ] Cabível pedir **calendário anual** de saídas, sob chancela jurisdicional?
- [ ] Útil acionar a **Defensoria como custos vulnerabilis** (REsp 2.211.681-MA)?

**Anti-padrões:**
- Requerer saída temporária para quem está no **regime fechado** — não cabe; é permissão de saída (art. 120) ou trabalho externo (arts. 36-37).
- Esquecer a **Súmula 40** e recomeçar a contagem do 1/6 a partir da progressão.
- Aceitar **vedação ou condicionamento administrativo** sem decisão judicial (viola a Súm. 520).
- Aplicar a vedação da **Lei 14.843/2024 a fato anterior** à sua vigência (novatio legis in pejus).
- Aceitar **revogação automática** de benefício sem PAD com contraditório (HC 575.495-MG).
- Confundir saída temporária (jurisdicional, sem escolta, semiaberto) com **permissão de saída** (administrativa, com escolta, por urgência).
- Citar julgado/súmula sem **conferir vigência** e adaptação ao caso concreto.

## Lembretes finais

- **Saída temporária = regime semiaberto + 1/6 (ou 1/4) + comportamento + compatibilidade**, computado o fechado (Súm. 40).
- **Decisão é do juiz** (Súm. 520) — administração só opina; cabe **calendário anual** sob chancela jurisdicional.
- **Lei 14.843/2024 não retroage** a fatos anteriores (HC 932.864-SC) — provar a **data do fato** é decisivo.
- **Não confundir** com permissão de saída (com escolta, qualquer regime, evento urgente) nem com trabalho externo.
- **Recrudescimento de benefício exige PAD** com contraditório — nunca automático.
- **Conferir vigência** da legislação recente (Lei 14.843/2024) e das súmulas/temas antes de citar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
