---
name: juri-pronuncia-defesa
description: >-
  Use ao elaborar, redigir, estruturar ou revisar as ALEGAÇÕES FINAIS DA DEFESA na 1ª fase do
  Tribunal do Júri (memoriais da fase de pronúncia) — peça que, encerrada a instrução preliminar,
  busca IMPRONÚNCIA, ABSOLVIÇÃO SUMÁRIA ou DESCLASSIFICAÇÃO, e sustenta teses contra a pronúncia.
  Gatilhos: júri 1ª fase, judicium accusationis, sumário da culpa, fase de pronúncia, alegações
  finais do júri, memoriais da pronúncia… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-pronuncia-defesa"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-pronuncia-defesa", "juri pronuncia", "pronuncia defesa"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Júri — Alegações Finais da Defesa (1ª Fase / Fase de Pronúncia)

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

Esta skill orienta a construção das **alegações finais da defesa na 1ª fase do Tribunal do Júri** — os *memoriais da fase de pronúncia*. É a última manifestação da defesa antes de o juiz decidir se o réu vai a plenário. O objetivo central é **evitar a pronúncia**: obter impronúncia, absolvição sumária ou desclassificação — e, no mínimo, decotar qualificadoras e impugnar excesso de linguagem.

> **Conhecimento do rito:** leia antes a best-practice `tribunal-do-juri.md` (procedimento bifásico, as quatro decisões e os recursos). Esta skill cuida da **redação** da peça da 1ª fase.

> **Lição central:** *"A 1ª fase é juízo de admissibilidade, não de mérito. O juiz não condena nem absolve no sentido pleno — apenas decide se há lastro mínimo para o Júri. A defesa, aqui, ataca esse lastro."*

## Quando esta peça é cabível

Encerrada a **instrução preliminar** (*judicium accusationis*, arts. 406 a 412 CPP), a lei prevê alegações finais **orais** — 20 min, prorrogáveis por 10 (art. 411, §4º CPP). Na prática, pela complexidade dos casos de Júri, é comum o juiz conceder **memoriais escritos**, aplicados por **analogia** (art. 3º CPP) aos arts. 403, §3º (sem diligência pendente) ou 404, parágrafo único (com diligência) do procedimento comum — prazo **sucessivo de 5 dias**, a defesa falando **depois** da acusação.

**Petição única (não bipartida):** diferentemente de RESE e apelação, estas alegações são apresentadas em **peça única**, dirigida ao **mesmo juízo** da instrução (juiz singular da vara do Júri) — não há divisão interposição/razões.

## As quatro saídas da 1ª fase (o que a defesa pode pedir)

| Decisão buscada | Quando cabe | Base legal | Natureza |
|---|---|---|---|
| **Impronúncia** | Não há prova da **materialidade** **ou** inexistem **indícios suficientes de autoria/participação** | **Art. 414 CPP** | Terminativa **sem** mérito (reabrível com prova nova até a prescrição) |
| **Absolvição sumária** | Provada a **inexistência do fato**; provado que o réu **não é autor/partícipe**; o fato **não é crime**; **ou** excludente de ilicitude/culpabilidade ou causa de isenção de pena | **Art. 415 CPP** | **Mérito** — coisa julgada material |
| **Desclassificação** | O crime é **diverso** dos dolosos contra a vida (ex.: lesão seguida de morte sem dolo de matar) | **Art. 419 CPP** | Desloca a competência ao **juízo singular** |
| **(Subsidiário) Pronúncia depurada** | Inevitável a pronúncia, mas há **excesso de linguagem** ou **qualificadoras** sem lastro | **Art. 413, §1º CPP** | Pedir decote de qualificadoras e linguagem comedida |

> **Ordem estratégica (princípio da eventualidade aplicado ao Júri):** pede-se primeiro a **absolvição sumária** (415 — mérito, a mais vantajosa); na eventualidade, a **impronúncia** (414); subsidiariamente, a **desclassificação** (419); e, por último, caso inevitável a pronúncia, o **decote de qualificadoras** e o afastamento do **excesso de linguagem**. Absolvição sumária vem antes da impronúncia porque é decisão de mérito (coisa julgada), enquanto a impronúncia é reabrível.

## Princípios orientadores da peça

1. **A 1ª fase é admissibilidade, não condenação.** O standard do art. 413 é **materialidade + indícios suficientes de autoria** — não a certeza da condenação. A defesa demonstra a **ausência** desse lastro.
2. **In dubio pro societate em xeque.** Não aceite passivamente o brocardo. Sustente que a pronúncia exige **prova da materialidade e indícios idôneos** (art. 413), e que a presunção de inocência (art. 5º, LVII, CF) afasta a pronúncia baseada em **mera dúvida**. Dúvida sobre a materialidade → impronúncia.
3. **Excesso de linguagem é nulidade.** A pronúncia é mero juízo de admissibilidade; manifestações categóricas sobre culpa/qualificadoras contaminam os jurados (art. 413, §1º CPP — linguagem comedida). Antecipe o argumento e peça contenção.
4. **Absolvição sumária só com prova robusta.** O art. 415 exige certeza (fato inexistente, autoria negada, atipicidade, excludente **provada**). Mera dúvida **não** absolve sumariamente — leva à impronúncia (414). Não troque as vias.

## Estrutura da peça (petição única)

```
1. Endereçamento (ao juízo singular da vara do Júri)
2. (Opcional) Ementa estilo acórdão — antecipa as teses
3. Preâmbulo (qualificação + tempestividade + fundamento por analogia)
4. I — Da Síntese Processual / Dos Fatos
5. II — Do Direito
   2.1. Das Preliminares (nulidades, prova ilícita, excesso de linguagem futuro)
   2.2. Da Absolvição Sumária (art. 415) — tese de mérito principal
   2.3. Da Impronúncia (art. 414) — ausência de materialidade/indícios
   2.4. Da Desclassificação (art. 419) — crime diverso (subsidiária)
   2.5. Do Decote de Qualificadoras / Excesso de Linguagem (subsidiária)
6. III — Dos Pedidos (escalonados pela eventualidade)
7. Fechamento (local, data, advogado, OAB)
```

### Endereçamento

- **Moderna:** `Ao Juízo da [N]ª Vara do Tribunal do Júri da Comarca de [Cidade] — [UF]`
- **Tradicional:** `Excelentíssimo(a) Senhor(a) Juiz(a) de Direito da [N]ª Vara do Tribunal do Júri da Comarca de [Cidade] — [UF]`

> Dirige-se ao **juiz singular** da 1ª fase — **não** ao tribunal e **não** ao "Conselho de Sentença" (que só existe na 2ª fase).

### Preâmbulo (modelo)

```
[NOME DO RÉU], já qualificado(a) nos autos da ação penal em epígrafe,
vem, respeitosamente, por intermédio do(a) advogado(a) que ao final
subscreve (procuração anexa), apresentar, tempestivamente, no prazo
legal de 5 (cinco) dias, suas ALEGAÇÕES FINAIS, com fulcro no art. 411,
§4º, do Código de Processo Penal (CPP) — e, na forma escrita, por
analogia (art. 3º do CPP) ao art. 403, §3º [ou art. 404, parágrafo
único, se houver diligência pendente] —, pelas razões de fato e de
direito a seguir expostas.
```

### Modelo das teses (corpo do "Do Direito")

```
II — DO DIREITO

2.1. DAS PRELIMINARES
   [Se houver: nulidade por prova ilícita (art. 5º, LVI, CF + art. 157
   CPP); cerceamento de defesa; quebra da cadeia de custódia (arts.
   158-A a 158-F CPP). Requerer, desde já, que eventual pronúncia
   observe LINGUAGEM COMEDIDA (art. 413, §1º CPP), sem excesso de
   linguagem que contamine os jurados.]

2.2. DA ABSOLVIÇÃO SUMÁRIA (art. 415 do CPP)
   [Tese de mérito — pedida primeiro por ser a mais vantajosa.
   Demonstrar, com prova robusta, uma das hipóteses:
   - inexistência do fato (I);
   - o réu não é autor/partícipe (II);
   - o fato não constitui infração penal (III);
   - causa de exclusão do crime ou de isenção de pena (IV) — ex.:
     LEGÍTIMA DEFESA (art. 25 CP), demonstrada nos autos.
   Atenção: o art. 415, p.ú., ressalva a inimputabilidade (art. 26,
   caput, CP) como única tese — nesse caso, absolvição IMPRÓPRIA
   com medida de segurança, salvo se houver outra tese absolutória.]

2.3. DA IMPRONÚNCIA (art. 414 do CPP)
   [Na eventualidade de não se absolver sumariamente. Demonstrar a
   AUSÊNCIA de materialidade OU de indícios suficientes de autoria/
   participação. Sustentar que a pronúncia (art. 413) exige PROVA da
   materialidade e indícios IDÔNEOS — não a mera dúvida. Enfrentar
   criticamente o brocardo in dubio pro societate à luz da presunção
   de inocência (art. 5º, LVII, CF): dúvida sobre materialidade/
   autoria resolve-se em favor do réu → impronúncia.]

2.4. DA DESCLASSIFICAÇÃO (art. 419 do CPP)
   [Subsidiária. Sustentar que o fato configura crime DIVERSO dos
   dolosos contra a vida (ex.: ausência de animus necandi — lesão
   corporal seguida de morte, art. 129, §3º CP; ou outro crime fora
   da competência do Júri), remetendo-se os autos ao juízo singular
   competente.]

2.5. DO DECOTE DE QUALIFICADORAS / EXCESSO DE LINGUAGEM
   [Última subsidiária. Caso inevitável a pronúncia, requerer:
   (a) o afastamento das qualificadoras manifestamente improcedentes
   ou sem qualquer lastro probatório (a qualificadora só vai a plenário
   se houver indício mínimo); (b) que a decisão de pronúncia se limite
   a juízo de admissibilidade, em LINGUAGEM COMEDIDA (art. 413, §1º
   CPP), sob pena de nulidade por excesso de linguagem.]
```

### Modelo dos pedidos (escalonados)

```
III — DOS PEDIDOS

Ante o exposto, requer-se:

a) o recebimento das presentes Alegações Finais;
b) o acolhimento da(s) preliminar(es) suscitada(s) [se houver];
c) NO MÉRITO, a ABSOLVIÇÃO SUMÁRIA do(a) acusado(a), com fundamento
   no art. 415, [inciso], do CPP [ex.: IV, por legítima defesa,
   art. 25 do CP];
d) SUBSIDIARIAMENTE, caso não acolhida a tese anterior, a IMPRONÚNCIA
   do(a) acusado(a), nos termos do art. 414 do CPP, por ausência de
   [materialidade / indícios suficientes de autoria];
e) SUBSIDIARIAMENTE, caso superadas as teses acima, a DESCLASSIFICAÇÃO
   da imputação para [crime diverso], com remessa dos autos ao juízo
   singular competente (art. 419 do CPP);
f) SUBSIDIARIAMENTE, sendo inevitável a pronúncia, o DECOTE da(s)
   qualificadora(s) [...] e que a decisão observe LINGUAGEM COMEDIDA
   (art. 413, §1º, do CPP), sem excesso de linguagem.

Termos em que,
Pede deferimento.

[Local], [data].
_______________________________________
[NOME DO(A) ADVOGADO(A)] — OAB/[UF] nº [número]
```

## Se vier a pronúncia: o recurso é RESE (não apelação)

Proferida a **pronúncia** contra o réu, o recurso é o **Recurso em Sentido Estrito — RESE** (art. 581, **IV**, CPP), com **efeito regressivo** (juízo de retratação, art. 589 CPP — a interposição pede a retratação e, subsidiariamente, a remessa ao tribunal). Use a skill `rese`.

Já contra **impronúncia** ou **absolvição sumária** (decisões favoráveis ao réu, mas que a acusação pode atacar), o recurso é **apelação** (art. 416 CPP) — ver skill `apelacao`. **Macete:** **P**ronúncia → **R**ESE; **I**mpronúncia / **A**bsolvição sumária → **A**pelação.

## ⚠️ Cautelas obrigatórias (gates do CriminalSquad)

- **Verificação de citações (anti-alucinação):** toda lei, súmula ou jurisprudência citada deve passar pelo protocolo da best-practice `verificacao-citacoes` **antes da entrega**. Nada citado de memória; na dúvida, **omitir vence inventar**.
- **Revisão humana:** a peça é um rascunho assistido. A responsabilidade final é do(a) advogado(a) (CED, art. 2º). Submeter à revisão humana antes do protocolo.
- **Adaptar ao caso concreto:** as teses devem decorrer dos **fatos e provas dos autos**, nunca repetidas como fórmula vazia.

## Checklist final

- [ ] **Peça única** (sem divisão interposição/razões)?
- [ ] Endereçada ao **juiz singular** da vara do Júri (não ao tribunal/Conselho de Sentença)?
- [ ] **Tempestividade** declarada (5 dias) e fundamento por **analogia** (art. 3º CPP + 403, §3º ou 404, p.ú.)?
- [ ] **CPP** escrito por extenso na primeira menção?
- [ ] Teses **escalonadas** pela eventualidade: absolvição sumária (415) → impronúncia (414) → desclassificação (419) → decote/linguagem comedida?
- [ ] **Absolvição sumária × impronúncia** corretamente distinguidas (mérito robusto × ausência de lastro / dúvida)?
- [ ] Tese de **impronúncia** enfrenta criticamente o *in dubio pro societate* (presunção de inocência, art. 413)?
- [ ] Pedido de **linguagem comedida** / impugnação ao **excesso de linguagem** (art. 413, §1º CPP)?
- [ ] **Decote de qualificadoras** sem lastro requerido subsidiariamente?
- [ ] Memoriais da **acusação já lidos** (defesa fala depois, em prazo sucessivo)?
- [ ] Citações **verificadas** (`verificacao-citacoes`) e peça marcada para **revisão humana**?

## Lembretes finais

- **1ª fase = admissibilidade**, não mérito pleno. A defesa ataca o **lastro** da acusação.
- **Quatro saídas:** absolvição sumária (415) · impronúncia (414) · desclassificação (419) · pronúncia depurada (413, §1º).
- **Ordem:** absolvição sumária primeiro (mérito) → impronúncia → desclassificação → decote/linguagem.
- **Impronúncia ≠ absolvição sumária:** terminativa **sem** mérito (reabrível) × **mérito** com coisa julgada.
- **In dubio pro societate** é relativizado — exija prova da materialidade e indícios idôneos (art. 413).
- **Excesso de linguagem** na pronúncia = nulidade (contamina jurados). Peça linguagem comedida (413, §1º).
- **Se vier pronúncia → RESE** (581, IV) com retratação (589). **Impronúncia/absolvição sumária → apelação** (416).
- **Petição única**, dirigida ao **juiz singular**. **Sem rol de testemunhas** (a instrução já se encerrou).
- **Sempre:** verificar citações e submeter a **revisão humana**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
