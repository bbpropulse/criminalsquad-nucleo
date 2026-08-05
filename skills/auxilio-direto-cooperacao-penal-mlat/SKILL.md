---
name: auxilio-direto-cooperacao-penal-mlat
description: >-
  Use quando prova ou providência no exterior (ou pedido estrangeiro) tramitar por AUXÍLIO DIRETO /
  MLAT, sem exequatur — via autoridade central (DRCI/MJ ou PGR) e juízo federal de 1º grau —
  incluindo a DEFESA contra prova assim obtida (competência da autoridade central, contraditório
  diferido, ilicitude por burla à reserva de jurisdição). Gatilhos: auxílio direto, cooperação
  jurídica internacional penal, MLAT, tratado de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, prova, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-auxilio-direto-cooperacao-penal-mlat"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["auxilio-direto-cooperacao-penal-mlat", "auxilio direto", "penal mlat"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Auxílio Direto e MLAT em Matéria Penal (cooperação jurídica internacional — sem exequatur)

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

Esta skill orienta a atuação — com **foco majoritário na DEFESA** — quando uma prova ou providência penal cruza fronteiras pelo canal do **auxílio direto** e dos **MLAT** (*Mutual Legal Assistance Treaties* — tratados de assistência jurídica mútua em matéria penal). É o canal **hoje predominante** da cooperação penal: quebra de sigilo bancário/telemático no exterior, oitiva de testemunha lá fora, bloqueio/repatriação de ativos, entrega de documentos, tudo tramitando pela **autoridade central** (no Brasil, em regra a **DRCI/MJ** — Departamento de Recuperação de Ativos e Cooperação Jurídica Internacional; e a **PGR** em hipóteses específicas de tratado), **sem** passar pelo exequatur do STJ.

> **Lição central:** o divisor de águas é o **canal**. Auxílio direto **NÃO passa por exequatur do STJ** (art. 105, I, "i", CF, que é da carta rogatória) e desagua no **juízo federal de 1º grau** (art. 109, X, CF); a **carta rogatória** passa por exequatur no STJ. Antes de qualquer tese, **identifique por qual canal a prova entrou** — e se o canal certo foi respeitado. Muita ilicitude nasce de usar o auxílio direto para **fazer no exterior o que, no Brasil, exigiria ordem judicial** (burla à reserva de jurisdição).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Lei 13.105/2015 (CPC), arts. 26 a 41** (cooperação internacional e auxílio direto — subsidiários ao processo penal por força do art. 3º do CPP); do **art. 7º, IX, e art. 3º da Res. 9/2005 do STJ** (competência do STJ para exequatur — verificar norma sucessora vigente); e do **tratado bilateral/multilateral concreto** aplicável ao país envolvido (cada MLAT tem regras próprias de forma, especialidade e recusa). Confira súmulas, temas e overruling via a skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nada de precedente citado de memória (Citation Gate).

## Distinção que orienta tudo — auxílio direto × carta rogatória

| Critério | **Auxílio direto** | **Carta rogatória** |
|---|---|---|
| Base | Art. 7º, LINDB; arts. 28-34 CPC; tratado/MLAT; reciprocidade | Art. 105, I, "i", CF; art. 40 CPC; Res. STJ |
| Passa por exequatur do STJ? | **NÃO** | **SIM** (juízo de delibação) |
| Onde é cumprido | **Juízo federal de 1º grau** (art. 109, X, CF) | Juízo federal, **após** exequatur do STJ |
| Objeto típico | Providências que **não** dependem de decisão jurisdicional estrangeira; ou pedido para que a **autoridade brasileira** profira a ordem interna | Cumprir **decisão** da autoridade estrangeira que precisa de eficácia no Brasil |
| Autoridade central (BR) | **DRCI/MJ** (regra); **PGR** em MLAT específicos (ex.: cooperação penal com os EUA) | Também tramita pela autoridade central, mas **com** delibação do STJ |
| Mérito | A autoridade central **não** julga o mérito; encaminha | STJ faz juízo de delibação (ordem pública, soberania, ausência de ofensa) |

> **Chave prática (STF/STJ):** quando a diligência **exige decisão de mérito** (ex.: emprestar eficácia a uma decisão estrangeira), o caminho é a **rogatória** com exequatur; quando a diligência pode ser realizada por **provocação da autoridade brasileira** que, ela mesma, profere a ordem necessária (ex.: o juiz federal brasileiro decreta a quebra de sigilo e pede o cumprimento lá fora), cabe **auxílio direto**. Usar o auxílio direto para **importar decisão estrangeira sem delibação** — ou para **saltar a ordem judicial brasileira** que seria exigível — é o vício central a atacar.

## Base legal

- **CF, art. 105, I, "i"** — competência do STJ para o **exequatur** das cartas rogatórias (é o que **distingue** a rogatória; o auxílio direto não passa por aqui).
- **CF, art. 109, X** — competência da **Justiça Federal de 1º grau** para executar carta rogatória (após exequatur) e as diligências de **auxílio direto**.
- **CPC, arts. 26 a 41** (aplicação subsidiária ao processo penal — CPP, art. 3º): **art. 26** (princípios da cooperação — devido processo, publicidade, autoridade central, reciprocidade, **espontaneidade de vedação a providência incompatível com a ordem pública**); **arts. 28-34** (auxílio direto: cabimento, autoridade central, atuação da AGU/MPF); **art. 40** (rogatória quando houver decisão a ser homologada/delibada).
- **CPP, art. 780 e ss.** — relações jurisdicionais com autoridade estrangeira (carta rogatória; base histórica).
- **CPP, art. 157** — **inadmissibilidade das provas ilícitas** e das **derivadas** (teoria dos frutos da árvore envenenada) — sede da tese defensiva quando o canal é irregular.
- **Tratados/MLAT** (verificar o aplicável ao país): Convenção de Palermo (crime organizado transnacional), Convenção de Mérida (corrupção), Convenção de Viena (tráfico), e **MLAT bilaterais** (ex.: acordo de assistência judiciária em matéria penal Brasil–EUA — verificar decreto promulgador vigente via `jurisprudencia-stj-stf`/fonte oficial).
- **Lei 13.445/2017 (Migração)** e legislação de **recuperação de ativos** — quando a cooperação envolve entrega/repatriação.

> **Nota de polo (para o roteador):** esta skill é predominantemente **defensiva**, mas o auxílio direto também é instrumento do **polo acusatório** (MP/assistente) para produzir prova no exterior. A spec traz `polo_acusacao: false` — **o roteador deve conferir o polo da instituição** (`_memory/company.md`): se acusatório, use as seções de *cabimento e requisitos* para instruir o pedido; se defensivo, priorize as seções de *impugnação e ilicitude*. As duas leituras convivem no mesmo arcabouço.

## Roteiro 1 — CABIMENTO E ESCOLHA DO CANAL (checagem inicial, qualquer polo)

Antes de instruir ou impugnar, responda:

1. **Qual a providência?** Mera diligência (oitiva, entrega de documento, quebra de sigilo a ser decretada aqui) → auxílio direto. Dar **eficácia a uma decisão estrangeira** → rogatória (exequatur).
2. **Há tratado/MLAT com o país?** Se sim, a **forma do tratado prevalece** (autoridade central, requisitos, hipóteses de recusa). Se não, opera-se por **reciprocidade** (promessa de reciprocidade documentada).
3. **A ordem exigível no Brasil já existe?** Se a diligência, feita aqui, dependeria de **ordem judicial** (quebra de sigilo, busca, interceptação), a ordem deve emanar do **juízo brasileiro competente** e ser **encaminhada** para cumprimento — não se pode terceirizar a decisão à autoridade estrangeira para depois "importar" o resultado sem controle.
4. **Autoridade central correta?** DRCI/MJ (regra) ou PGR (MLAT específico). Encaminhamento por canal errado é vício formal a alegar.
5. **Princípio da especialidade** respeitado? A prova/pessoa obtida para um fim (ou crime) não pode ser usada para outro sem novo consentimento do Estado requerido — quando o tratado o prevê.

## Roteiro 2 — DEFESA: impugnar prova obtida por auxílio direto/MLAT

A defesa não ataca "a cooperação" em abstrato — ataca **vícios concretos** do canal e da prova. Teses típicas:

### Tese A — Burla à reserva de jurisdição (a mais forte)
Usou-se o auxílio direto para obter, no exterior, prova que **no Brasil dependeria de ordem judicial** (quebra de sigilo bancário/telemático, interceptação, busca), **sem** que o juízo brasileiro competente tivesse proferido essa ordem. Resultado: **prova ilícita** (CF, art. 5º, XII, LVI; CPP, art. 157), porque se contornou a **reserva de jurisdição** e o **devido processo**. Pedir o desentranhamento e a contaminação das derivadas.

### Tese B — Vício de competência / canal errado
A providência exigia **eficácia de decisão estrangeira** e, portanto, **exequatur do STJ** (rogatória), mas foi processada como auxílio direto para **fugir da delibação**. Ou: encaminhamento por autoridade central incompetente. Alegar nulidade por **usurpação da competência do STJ** (art. 105, I, "i", CF).

### Tese C — Violação do tratado / da especialidade
A prova foi usada para **crime ou finalidade diversa** daquela para a qual a cooperação foi deferida, contrariando cláusula de **especialidade** do MLAT; ou a forma exigida pelo tratado (autenticação, autoridade requerente, dupla incriminação quando exigida) não foi observada.

### Tese D — Contraditório e ampla defesa (contraditório diferido, não suprimido)
No auxílio direto o **contraditório costuma ser diferido** (a prova é produzida lá fora e depois submetida às partes). Isso é tolerado, **mas não pode ser suprimido**: a defesa deve ter acesso integral à **cadeia de custódia** da prova estrangeira, aos **documentos de encaminhamento** (pedido, resposta do Estado requerido, tradução juramentada) e à **oportunidade de impugnar**. Ausência de acesso = cerceamento de defesa (nulidade).

### Tese E — Cadeia de custódia e integridade da prova estrangeira
Prova vinda do exterior chega sem a cadeia de custódia doméstica; exigir a **documentação da coleta, transporte e preservação** no Estado requerido e a **tradução juramentada**. Lacuna relevante na cadeia compromete a fiabilidade (dialoga com a skill `cadeia-de-custodia`, se disponível). Atacar cópias sem certificação, mídias sem *hash*, ausência de laudo.

### Tese F — Ordem pública e devido processo (CPC, art. 26)
Providência incompatível com a ordem pública brasileira, com garantias constitucionais ou obtida por meio que, no Brasil, seria vedado (ex.: prova produzida sob tortura, ou por método proibido no país requerido/requerente). O art. 26 do CPC veda cooperar em providência incompatível com a ordem pública.

## Teses × contra-teses (mapa rápido)

| Tese defensiva | Contra-tese (acusação) |
|---|---|
| Burla à reserva de jurisdição (Tese A) | A ordem foi proferida pelo juízo brasileiro e apenas **cumprida** lá fora; auxílio direto é o canal correto |
| Canal errado — cabia rogatória/exequatur (Tese B) | Não havia decisão estrangeira a delibar; a diligência é mera coleta, própria do auxílio direto |
| Violação da especialidade (Tese C) | O tratado não previa especialidade para o caso, ou houve novo consentimento do Estado requerido |
| Contraditório suprimido (Tese D) | Contraditório **diferido** é válido; a prova foi juntada e franqueada às partes |
| Cadeia de custódia falha (Tese E) | Documentação do Estado requerido supre; meras irregularidades não geram ilicitude sem prejuízo |
| Ofensa à ordem pública (Tese F) | A prova respeitou o devido processo no Estado requerido; recusa cabe ao Estado, não à parte |

> **Régua de decisão:** ilicitude (CPP, art. 157) reclama **prova produzida com violação a norma constitucional/legal** — ataque o **vício da produção** (reserva de jurisdição, tratado, ordem pública), não a mera "estranheza" de ser prova estrangeira. Vício **formal** de encaminhamento tende a ser tratado como nulidade (com exigência de **prejuízo** — CPP, art. 563); vício **material** (burla à reserva de jurisdição) tende à **ilicitude**. Enquadre a tese no eixo mais forte disponível.

## Estrutura da peça de impugnação (petição/HC/memoriais)

1. **Síntese do canal** — descrever exatamente por onde a prova entrou (auxílio direto? rogatória? qual autoridade central? qual tratado?), com os documentos de encaminhamento.
2. **Premissa jurídica** — a distinção auxílio direto × rogatória e o regime de cada um (competência, exequatur, reserva de jurisdição).
3. **O vício concreto** — subsumir o caso a uma (ou mais) das Teses A–F, apontando o dispositivo violado.
4. **Consequência** — desentranhamento da prova ilícita e das **derivadas** (CPP, art. 157, §§; teoria dos frutos da árvore envenenada), ou nulidade a partir do ato viciado.
5. **Pedido** — declaração de ilicitude/nulidade; desentranhamento; e, se for o caso, **trancamento** (HC) ou absolvição por insuficiência do lastro remanescente.
6. **Prova do prejuízo** — demonstrar que a prova viciada foi **determinante** (afasta a preclusão e o *pas de nullité sans grief*).

> Para calcular/argumentar **eficácia deletéria** sobre o conjunto probatório, dialogue com as skills de análise de prova e de nulidades (ex.: `impugnacao-interceptacao-sigilo`, se disponível). Esta skill cuida do **canal internacional**; a contaminação interna segue as skills domésticas.

## Súmulas, precedentes e temas (sob o Citation Gate)

Cite com certeza os **dispositivos** acima (CF, CPC, CPP, tratado). Para **qualquer** número de HC/REsp/RE, informativo, tema repetitivo ou precedente específico, **NÃO cite de memória** — marque `[NÃO VERIFICADO]` e confira via `jurisprudencia-stj-stf` na fonte oficial.

- Entendimento consolidado (a **confirmar** número e teor via gate): o STF/STJ reconhecem o **auxílio direto** como via legítima que **dispensa exequatur**, reservando o exequatur às hipóteses de **decisão estrangeira** a ser delibada — verificar precedentes-líderes atuais. `[NÃO VERIFICADO — conferir acórdão e informativo]`
- Teses sobre **ilicitude de prova por burla à reserva de jurisdição** em cooperação (quebra de sigilo obtida no exterior sem ordem do juízo brasileiro competente): existem precedentes em ambos os sentidos — **confirmar o estado da arte** antes de afirmar. `[NÃO VERIFICADO]`
- **Especialidade** e limites de uso da prova cooperada para outros crimes: depende do **tratado concreto** e da jurisprudência aplicável. `[NÃO VERIFICADO]`

> **Prefira ensinar a TESE e o dispositivo** (CF art. 105, I, "i"; art. 109, X; CPP art. 157; CPC arts. 26-40; cláusulas do MLAT) a arriscar um número de acórdão. Omitir vence inventar.

## Erros comuns (anti-padrões)

- **Confundir os canais:** tratar auxílio direto como se precisasse de exequatur do STJ, ou vice-versa. É o erro-raiz.
- **Atacar "a prova estrangeira" em bloco**, sem apontar o vício de produção — impugnação genérica não gera ilicitude.
- **Ignorar o tratado concreto:** cada MLAT tem forma, especialidade e hipóteses de recusa próprias; citar "o MLAT" em abstrato enfraquece.
- **Esquecer a reserva de jurisdição:** a tese mais forte (Tese A) passa despercebida quando não se pergunta "essa prova, no Brasil, exigiria ordem judicial?".
- **Não pedir a documentação de encaminhamento** (pedido, resposta do Estado requerido, tradução juramentada, cadeia de custódia) — sem ela não há como demonstrar o vício.
- **Confundir contraditório diferido com contraditório suprimido:** o diferimento é lícito; a supressão do acesso e da chance de impugnar é que vicia.
- **Citar precedente de memória** — sanção real por jurisprudência inventada. Tudo pelo gate.
- **Alegar nulidade formal sem demonstrar prejuízo** (CPP, art. 563) — separe o eixo *ilicitude* (material) do eixo *nulidade* (formal, exige prejuízo).

## Checklist (defesa)

- [ ] Identifiquei o **canal** exato (auxílio direto × rogatória) e a **autoridade central** (DRCI/MJ ou PGR)?
- [ ] Há **tratado/MLAT** com o país? Verifiquei sua forma, especialidade e hipóteses de recusa?
- [ ] A prova, se produzida no Brasil, **exigiria ordem judicial**? Essa ordem emanou do **juízo brasileiro competente** (Tese A)?
- [ ] O caso exigia **exequatur do STJ** (havia decisão estrangeira a delibar) e foi indevidamente tratado como auxílio direto (Tese B)?
- [ ] A **especialidade** foi respeitada — a prova não foi desviada para outro crime/finalidade (Tese C)?
- [ ] Tive **acesso integral** à documentação de encaminhamento, tradução juramentada e cadeia de custódia (Teses D e E)?
- [ ] Há ofensa à **ordem pública**/devido processo (CPC, art. 26) (Tese F)?
- [ ] Enquadrei corretamente no eixo **ilicitude** (material) ou **nulidade** (formal, com prejuízo)?
- [ ] Pedi o **desentranhamento** da prova e das **derivadas** (CPP, art. 157)?
- [ ] Todo precedente/súmula/tema passou pelo gate `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

Este material é **rascunho técnico** de apoio à preparação — **hipótese a confirmar**, não peça pronta. A **revisão humana** do profissional responsável é **obrigatória** antes de qualquer protocolo. Toda referência normativa e todo precedente passam pelo **Citation Gate** (`jurisprudencia-stj-stf`): nada de jurisprudência de memória (há sanções reais por citação inventada por IA). A responsabilidade pela tese e pela atuação é sempre do advogado (**EAOAB e Código de Ética; Provimento OAB 205/2021** para a comunicação/publicidade). Se a atuação for pelo **polo acusatório** (MP/assistente de acusação), observe a ética do **CNMP**; na **Defensoria**, a **LC 80/94**. **O roteador deve conferir o polo da instituição** em `_memory/company.md` antes de aplicar as seções de cabimento (acusação) ou de impugnação (defesa).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
