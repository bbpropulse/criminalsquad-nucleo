---
name: juri-desaforamento-acusacao
description: >-
  Use ao REQUERER desaforamento pelo polo acusatório (MP, assistente de acusação, querelante) OU ao
  IMPUGNAR/contrarrazoar pedido de desaforamento no Tribunal do Júri — arts. 427-428 CPP. Cobre
  cabimento, prova pré-constituída, contraditório do incidente e as teses de barramento (competência
  do foro do fato — art. 70 CPP; prejuízo à ampla defesa e ao réu). Gatilhos: desaforamento,
  reaforamento, deslocar julgamento do júri… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, juri, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-desaforamento-acusacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-desaforamento-acusacao", "juri desaforamento", "desaforamento acusacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Desaforamento no Tribunal do Júri — polo acusatório e contrarrazões (arts. 427-428 CPP)

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

Esta skill trata do **incidente de desaforamento** sob dois ângulos que se contrapõem: (a) o **requerimento** pelo **polo acusatório** (Ministério Público, assistente de acusação ou querelante) e (b) a **impugnação/contrarrazões** — a resposta que **barra** o deslocamento, tipicamente da **defesa**. É o **par contraditório** do incidente: uma peça pede tirar o júri da comarca do fato; a outra demonstra que **não há motivo legal** para isso.

> **⚠️ Skill de polo — leia primeiro.** A parte que ensina a **requerer** o desaforamento é do **POLO ACUSATÓRIO** (MP, assistente de acusação, querelante). **Só se aplica a quem atua na acusação.** O **roteador deve conferir o polo do usuário** (em `_criminalsquad/_memory/company.md`) **antes de sugerir esta skill para requerer** o incidente. A parte de **contrarrazões/impugnação** serve à **defesa** (e ao MP quando este atua como *custos legis* contrário ao pedido). Confirme sempre em nome de quem se peticiona.

> **Lição central:** desaforamento é **medida excepcional** e de **rol taxativo** (art. 427 CPP). Quem **requer** tem o **ônus da prova pré-constituída** dos motivos — não bastam alegações genéricas. Quem **impugna** ataca por dois flancos: (1) **ausência concreta** do motivo legal invocado e (2) **regra da competência do foro do fato** (art. 70 CPP) como garantia que só cede diante de prova robusta. O deslocamento **desloca também o juízo natural** — por isso o crivo é rigoroso.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 427 e 428 do CPP** (a sistemática atual do desaforamento vem da reforma do júri — **Lei 11.689/2008**) e o rol de legitimados. Súmulas, temas repetitivos e overruling **passam pela skill `jurisprudencia-stj-stf`** (ou pelo gate `verificacao-citacoes`) antes de fundamentar a peça. Na dúvida sobre um precedente, **omitir vence inventar**.

---

## O que é / quando cabe

**Desaforamento** é o deslocamento da competência para o julgamento em plenário do júri **para outra comarca** — em regra a **mais próxima** — quando presentes, na comarca de origem, um dos motivos **taxativos** do art. 427. A competência para julgar o incidente é do **Tribunal de Justiça** (ou TRF), por seu órgão competente, **nunca do próprio juiz-presidente**.

- **Cabe apenas na 2ª fase** (após a **pronúncia** — o júri já está aforado). Antes da pronúncia não há o que desaforar.
- É **incidente**, processado **em separado**, com **contraditório** (art. 427, §2º: ouve-se a parte contrária e o juiz-presidente).
- **Não** se confunde com exceção de incompetência nem com nulidade: pressupõe competência **regular** que se desloca por motivo superveniente/excepcional.

**Reaforamento:** cessado o motivo que gerou o desaforamento, admite-se o **retorno** à comarca de origem — mesma lógica invertida, mesmos requisitos de prova.

---

## Base legal (âncoras)

- **Art. 427 do CPP** — hipóteses **taxativas** de desaforamento: (i) **interesse da ordem pública**; (ii) **dúvida sobre a imparcialidade do júri**; (iii) **segurança pessoal do acusado**. Legitimados: **MP, assistente, querelante, acusado** e **representação do juiz** competente.
- **Art. 427, §1º** — pedido submetido ao **julgamento pelo tribunal** (TJ/TRF); pode-se determinar a **suspensão do julgamento** pelo júri.
- **Art. 427, §2º** — **contraditório**: ouvidos o **juiz-presidente** e a **parte contrária**; o relator pode requisitar informações.
- **Art. 427, §3º e §4º** — vedação enquanto pendente recurso da pronúncia; e **excesso de serviço/demora** (mais de 6 meses do trânsito em julgado da pronúncia sem julgamento) como hipótese autônoma do **art. 428**.
- **Art. 428 do CPP** — **desaforamento por comprovado excesso de serviço** (demora no julgamento); computo do prazo e exclusão de adiamentos a que houver dado causa a defesa.
- **Art. 70 do CPP** — **competência pelo lugar da infração** (foro do fato): a **regra** que o desaforamento excepciona; núcleo da tese de barramento.
- **Art. 5º, LIII e LV, da CF** — **juiz natural** e **contraditório/ampla defesa**: o deslocamento não pode servir de manobra para prejudicar a defesa.

> **Rol taxativo — decorar as 3 hipóteses do art. 427 + a do art. 428:**
> 1. **Ordem pública** (comoção social, risco à realização do julgamento);
> 2. **Dúvida sobre a imparcialidade do júri** (não do juiz — do *corpo de jurados*);
> 3. **Segurança pessoal do acusado**;
> 4. **Excesso de serviço / demora** (art. 428 — mais de 6 meses do trânsito da pronúncia).

---

## PARTE A — Requerimento pela ACUSAÇÃO (MP / assistente / querelante)

> **Aplica-se somente a quem atua no polo acusatório.** Se o usuário for defesa, pule para a **Parte B**.

### Passo a passo do requerente

1. **Verificar a fase e a legitimidade.** Só após a **pronúncia** (art. 427 pressupõe processo já aforado). O **assistente de acusação** precisa estar **habilitado** (skill `assistente-acusacao`); o **querelante** atua na ação penal privada.
2. **Enquadrar em UMA das hipóteses taxativas** (não invente motivo fora do rol). Nomear o inciso e descrever o fato concreto que o preenche.
3. **Produzir PROVA PRÉ-CONSTITUÍDA.** O ônus é do requerente. Alegação genérica de "clima na cidade" **não basta** — anexar matérias de imprensa, boletins de ocorrência, representações, atas, ofícios, laudos, indicadores objetivos.
4. **Endereçar ao Tribunal competente** (TJ/TRF) — **não** ao juiz-presidente. Requerer, se for o caso, a **suspensão do julgamento** (art. 427, §1º).
5. **Antecipar o contraditório** (art. 427, §2º): a parte contrária e o juiz-presidente **serão ouvidos**; construir a peça já respondendo às objeções previsíveis (juiz natural, prejuízo à defesa).
6. **Indicar a comarca de destino** coerente com o critério de **proximidade** e com a **cessação do motivo** (não adianta deslocar para comarca contaminada pelo mesmo fator).

### Conteúdo das 3 hipóteses (como o requerente demonstra)

| Hipótese (art. 427/428) | O que provar (ônus do requerente) | Prova pré-constituída típica |
|---|---|---|
| **Ordem pública** (I) | Comoção/tensão social concreta que ameace a **realização** e a **higidez** do julgamento | Clipping de imprensa, atos públicos, ofícios de segurança, registros de ameaça coletiva |
| **Dúvida sobre a imparcialidade do júri** (II) | Fundada dúvida sobre o **corpo de jurados** da comarca (não sobre o juiz) — envolvimento local, pressão sobre a lista | Elementos objetivos de contaminação da lista/comunidade; representações; notícias |
| **Segurança pessoal do acusado** (III) | Risco real à **integridade do próprio réu** na comarca | Ofícios prisionais, ameaças documentadas, contexto de facção/retaliação |
| **Excesso de serviço / demora** (art. 428) | **> 6 meses** do **trânsito em julgado da pronúncia** sem julgamento, **excluídos** adiamentos causados pela defesa | Certidão cartorária de andamento, pauta, cômputo do prazo |

> **Cuidado ético do requerente (art. 427, II).** A "dúvida sobre a imparcialidade do júri" refere-se ao **corpo de jurados** e a fatores **objetivos e lícitos** de contaminação da comunidade — jamais a especulação sobre pessoas identificadas do Conselho, nem a qualquer conduta que **influencie ou pressione** jurados. Perfilamento de jurados individuais para fundamentar o pedido é impróprio; o argumento é sobre o **ambiente** da comarca, com prova documental.

### Legitimidade por perfil (conferir polo)

- **Ministério Público:** legitimado direto (art. 427). Atua como parte e como *custos legis* — pode **requerer** ou **opinar contra**.
- **Assistente de acusação:** legitimado, **desde que habilitado** (art. 271 c/c art. 427); atua ao lado do MP. Ver skill `assistente-acusacao`.
- **Querelante** (ação penal privada — hipótese rara em crime doloso contra a vida, mas possível em conexão): legitimado como titular da ação.

---

## PARTE B — Impugnação / Contrarrazões (defesa e MP contrário)

> **A lógica é invertida:** o impugnante **não** precisa provar um fato positivo — precisa **desconstituir** o motivo alegado e **reafirmar a regra da competência do foro do fato** (art. 70). O ônus da causa excepcional é de **quem requer**; a impugnação explora a **insuficiência** dessa prova.

### Eixos de barramento (teses de defesa/contrário)

1. **Regra do juiz natural e do foro do fato (art. 70 CPP + art. 5º, LIII, CF).** O julgamento no **lugar da infração** é a regra e uma **garantia**. O desaforamento é **exceção taxativa** que só cede diante de **prova robusta e atual** — não de conjectura. Deslocar sem base é **violar o juiz natural**.
2. **Ausência concreta do motivo invocado.** Atacar ponto a ponto: a comoção alegada é **passada/dissipada**? A "dúvida" recai sobre **jurados individuais** (impróprio) e não sobre o corpo/ambiente? A insegurança do réu é **genérica** e não documentada? A prova é **pré-constituída** ou mera narrativa?
3. **Taxatividade do rol (art. 427).** Se o motivo real **não se enquadra** em nenhum inciso, o pedido é **incabível** — não se cria hipótese nova por analogia.
4. **Prejuízo à ampla defesa e ao réu (art. 5º, LV, CF).** Demonstrar o **ônus concreto** do deslocamento para o acusado e sua defesa: distância que **inviabiliza** o comparecimento de testemunhas e do próprio réu, encarecimento e enfraquecimento da defesa técnica, quebra da relação com a comunidade e com o defensor local. O desaforamento **não pode ser usado para asfixiar a defesa**.
5. **Momento e pendência (art. 427, §3º).** Impugnar pedido feito **na pendência de recurso contra a pronúncia** ou **antes** da fase adequada. Se apoiado no art. 428 (demora), verificar se os **adiamentos** decorreram **da própria defesa** (excluídos do cômputo) ou de **desídia estatal** (que **não** legitima punir o réu com deslocamento).
6. **Idoneidade da comarca de destino.** Contestar destino que **não elimina** o motivo (ex.: comarca vizinha igualmente contaminada) ou que **agrava** o prejuízo ao réu, ferindo o critério de **proximidade**.
7. **Contraditório efetivo (art. 427, §2º).** Exigir que a decisão só se dê **após** a manifestação da parte contrária e do juiz-presidente; nulidade do incidente decidido **sem** o contraditório.

### Contra-teses previsíveis (e como respondê-las)

- **Requerente diz "clamor público".** → Responder: clamor **abstrato/midiático** não é ordem pública; exigir prova de risco **concreto e atual** à realização do julgamento. Notoriedade do caso, por si só, não desafora.
- **Requerente diz "júri contaminado".** → Responder: a dúvida deve ser sobre o **corpo de jurados** por fatores objetivos; a seleção do plenário (sorteio, recusas do art. 468/469) e o compromisso de imparcialidade já **filtram** parcialidade individual — não se presume contaminação da comarca inteira.
- **Requerente diz "risco ao réu".** → Se o risco é **ao próprio acusado**, a defesa é a **titular natural** dessa avaliação (a hipótese existe **em favor** do réu); a acusação invocá-la **contra** a vontade do réu exige prova de risco **real e insuperável** localmente.

---

## Estrutura da peça (requerimento e contrarrazões)

**Requerimento de desaforamento (acusação) — endereçado ao TJ/TRF:**
```
EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE [UF]
(Colenda Câmara / Seção Criminal)

Requerimento de DESAFORAMENTO — art. 427 do CPP
Autos de origem nº [Nº] — Comarca de [ORIGEM] — réu pronunciado por [CRIME]

I — SÍNTESE E TEMPESTIVIDADE  (fase pós-pronúncia; legitimidade do requerente)
II — DA HIPÓTESE LEGAL         (nomear o inciso do art. 427 / ou art. 428)
III — DA PROVA PRÉ-CONSTITUÍDA (documentos que demonstram o motivo — indispensável)
IV — DA COMARCA DE DESTINO     (proximidade; cessação do motivo)
V — DO CONTRADITÓRIO           (ciência à parte contrária e ao juiz — art. 427, §2º)
VI — DOS PEDIDOS               (suspensão do julgamento §1º; desaforamento; destino)
```

**Contrarrazões / impugnação (defesa ou MP contrário):**
```
EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE [UF]

Contrarrazões ao pedido de DESAFORAMENTO — art. 427, §2º, do CPP
Autos de origem nº [Nº] — Comarca de [ORIGEM]

I — DA REGRA DO JUÍZ NATURAL E DO FORO DO FATO (art. 70 CPP; art. 5º, LIII, CF)
II — DA TAXATIVIDADE DO ROL E DA AUSÊNCIA DO MOTIVO (art. 427 — ponto a ponto)
III — DA INSUFICIÊNCIA DA PROVA PRÉ-CONSTITUÍDA DO REQUERENTE
IV — DO PREJUÍZO À AMPLA DEFESA E AO RÉU (art. 5º, LV, CF)
V — DO MOMENTO/PENDÊNCIA E DO CÔMPUTO (art. 427, §3º; art. 428 — adiamentos da defesa)
VI — DOS PEDIDOS (indeferimento; manutenção do júri na comarca de origem)
```

> A redação persuasiva final (teoria do caso, narrativa, subsunção) segue a skill `redacao-persuasiva-criminal`. Endereçamento e órgão fracionário competente **variam por tribunal** — conferir o regimento interno do TJ/TRF de atuação.

---

## Erros comuns / anti-padrões

- **Requerer ao juiz-presidente** em vez do **Tribunal** (o incidente é de competência do TJ/TRF).
- **Pedir antes da pronúncia** ou **na pendência de recurso** contra ela (art. 427, §3º).
- **Alegação genérica** sem **prova pré-constituída** — "clamor social", "todo mundo comenta" — sem documento. É a falha que mais derruba o pedido.
- **Confundir "imparcialidade do júri" com suspeição do juiz** — o inciso II é sobre o **corpo de jurados/ambiente**, não sobre o magistrado (suspeição do juiz é exceção própria, art. 254).
- **Escolher comarca de destino contaminada** pelo mesmo fator (não cessa o motivo) ou **distante demais** (agrava o prejuízo ao réu).
- **Ignorar o contraditório** (art. 427, §2º) — decidir sem ouvir a parte contrária e o juiz-presidente é vício do incidente.
- **Usar o art. 428 (demora) contra o réu** quando os adiamentos foram causados pela **defesa** (excluídos) — ou punir o acusado por **desídia estatal**.
- **(Impugnação) esquecer o eixo do art. 70** — reduzir a defesa a negar fatos, sem reafirmar a **regra do foro do fato** como garantia.
- **Perfilar jurados individuais** para sustentar a "dúvida de imparcialidade" — impróprio e eticamente vedado; o argumento é sobre o **ambiente** da comarca, com prova objetiva e lícita.

## Checklist final

**Se você REQUER (acusação):**
- [ ] Está **após a pronúncia** e **sem recurso pendente** contra ela (art. 427, §3º)?
- [ ] **Legitimidade** conferida (MP; assistente **habilitado**; querelante)?
- [ ] Motivo enquadrado em **inciso taxativo** (art. 427) ou no **art. 428** (demora > 6 meses)?
- [ ] **Prova pré-constituída** anexada (não alegação genérica)?
- [ ] Endereçado ao **TJ/TRF** e requerida (se cabível) a **suspensão** (art. 427, §1º)?
- [ ] Comarca de destino **próxima** e **livre do motivo**?

**Se você IMPUGNA (defesa / MP contrário):**
- [ ] **Foro do fato (art. 70)** e **juiz natural** (art. 5º, LIII) reafirmados como regra?
- [ ] Atacada a **ausência concreta** do motivo e a **insuficiência da prova** do requerente?
- [ ] Demonstrado o **prejuízo à ampla defesa/ao réu** (art. 5º, LV) com o deslocamento?
- [ ] Verificado **momento/pendência** e o **cômputo** dos adiamentos (art. 427, §3º; art. 428)?
- [ ] Contestado o **destino** proposto (proximidade; cessação do motivo)?
- [ ] Exigido o **contraditório efetivo** (art. 427, §2º)?

**Sempre:**
- [ ] Citações (súmulas, temas, acórdãos) conferidas via `jurisprudencia-stj-stf` / gate `verificacao-citacoes`?
- [ ] **Polo do usuário** confirmado (não sugerir o requerimento a quem é defesa)?
- [ ] Revisão humana do advogado/promotor responsável?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta skill é apoio à preparação do incidente — não substitui o juízo do profissional nem a leitura dos autos concretos e do regimento do tribunal.
- **Ética por polo:** advocacia — **OAB (CED)** e **Provimento 205/2021** (comunicação); Ministério Público — **CNMP**; Defensoria — **LC 80/94**. O roteador confere o **polo** em `_criminalsquad/_memory/company.md` antes de indicar a peça de **requerimento** (exclusiva do polo acusatório).
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese de memória — tudo passa por `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Prefira ensinar a **tese e o dispositivo** a arriscar número de acórdão.
- **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
