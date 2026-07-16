---
name: defesa-roubo-majorado
description: >-
  Use ao defender ROUBO (CP, art. 157) e suas majorantes — impugnação da violência/grave ameaça,
  roubo próprio × impróprio (§1º), ataque individualizado às majorantes do §2º e §2º-A (arma de
  fogo, concurso de pessoas, restrição de liberdade), exigência de apreensão e perícia da arma,
  incidência de fração única (Súmula 443/STJ), consumação × tentativa e distinção roubo × extorsão ×
  furto. Gatilhos: roubo, art. 157, roubo… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, patrimonio, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-roubo-majorado"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-roubo-majorado", "defesa roubo", "roubo majorado"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa em Roubo e Majorantes (CP, art. 157 e §§)

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

Esta skill orienta a **estratégia e a redação da defesa** em imputações de **roubo** (CP, art. 157) e suas formas majoradas (§2º, §2º-A) e qualificadas pelo resultado (§3º — lesão grave e latrocínio). O roubo é crime **complexo** (subtração patrimonial + violência ou grave ameaça à pessoa) e **pluriofensivo** (patrimônio + integridade/liberdade), o que abre frentes de defesa que não existem no furto.

> **Lição central:** o roubo tem **duas espinhas dorsais** — a *conduta-base* (subtração mediante violência/grave ameaça) e as *majorantes* (que multiplicam a pena). A defesa boa **ataca as duas separadamente**: primeiro tenta desconstituir o próprio roubo (desclassificar para furto, negar autoria, sustentar tentativa); depois, subsidiariamente, **derruba cada majorante uma a uma** — porque cada majorante afastada reduz sensivelmente a pena, e há **teses técnicas específicas** para cada uma (perícia da arma, número mínimo de agentes, tempo de restrição). Nunca trate as majorantes em bloco.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente do art. 157 do CP** — a **Lei 13.654/2018** retirou o emprego de arma (genérica) do rol e criou o **§2º-A, I** (arma **de fogo**, +2/3) e o **§2º-B** (arma de fogo de uso restrito/proibido — pena dobrada); a **Lei 13.964/2019** (Pacote Anticrime) alterou frações e o regime do latrocínio. **A jurisprudência sobre "arma branca", "arma desmuniciada" e "fração de aumento" mudou com essas leis — não cite tese anterior a 2018 sem conferir.** Todo dispositivo, súmula, tema ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de ir para a peça.

## Base legal

- **Art. 157, *caput*, CP** — roubo próprio: subtrair coisa alheia móvel mediante **violência**, **grave ameaça** ou **redução da capacidade de resistência** da vítima. Pena: 4 a 10 anos + multa.
- **Art. 157, §1º, CP** — roubo **impróprio**: violência/grave ameaça empregada **logo depois** da subtração, para assegurar a detenção da coisa ou a impunidade.
- **Art. 157, §2º, CP** — **majorantes de 1/3 até 1/2**: II concurso de pessoas; III restrição da liberdade da vítima; IV subtração de veículo transportado para outro Estado/exterior; V dominação de estabelecimento; VI substância que reduza a resistência; VII (conferir redação vigente).
- **Art. 157, §2º-A, CP** — **majorante de 2/3**: I emprego de **arma de fogo**; II destruição/rompimento de obstáculo com explosivo.
- **Art. 157, §2º-B, CP** — arma de fogo de **uso restrito/proibido**: pena **em dobro**.
- **Art. 157, §3º, CP** — roubo qualificado pelo resultado: I **lesão corporal grave**; II **morte (latrocínio)** — pena 20 a 30 anos (crime **hediondo**, competência do **juiz singular**, não do júri — Súmula 603/STF).
- **Art. 14, II, CP** — tentativa (distinção consumação/tentativa).
- **Art. 68, parágrafo único, CP** — concurso de causas de aumento na 3ª fase da dosimetria.

## Roteiro de defesa — do mais amplo ao mais restrito

Trabalhe as teses **em cascata**, da mais absolutória à meramente redutora:

### 1. Negativa de autoria / fragilidade probatória
- **Reconhecimento pessoal viciado.** Sindicar o cumprimento do **art. 226 do CPP** (procedimento do reconhecimento). O STJ, no **HC 598.886/SC** [NÃO VERIFICADO — conferir em `jurisprudencia-stj-stf`], passou a exigir observância do rito do art. 226 como **garantia**, não mera recomendação; reconhecimento fotográfico isolado, sem confirmação em juízo sob contraditório, é prova frágil. Atacar reconhecimento por álbum de fotos, reconhecimento "sugestionado" e reconhecimento que destoa da descrição inicial.
- **Palavra da vítima × dúvida razoável.** Em roubo a palavra da vítima tem peso, mas **não é absoluta**: confrontar contradições entre o depoimento na fase policial e em juízo, ausência de outros elementos, impossibilidade material de o réu ser o autor (álibi, geolocalização).

### 2. Desclassificação para FURTO (art. 155) — afastar violência/grave ameaça
Esta é a tese-mestra do tipo. **Sem violência ou grave ameaça à pessoa, não há roubo** — o fato migra para furto (pena muito menor, admite privilégio e figura tentada mais branda).
- **Ameaça não foi grave/idônea.** A grave ameaça deve ser **séria e capaz de intimidar**; ameaça vaga, gesto ambíguo ou "mau-olhado" não a configuram.
- **Subtração já consumada sem violência subsequente.** Se a violência/ameaça **não teve nexo** com a subtração (violência por outro motivo, briga superveniente), não há roubo impróprio (§1º).
- **"Trombada" / esbulho sem contato intimidatório** → furto, não roubo.

### 3. Roubo PRÓPRIO × IMPRÓPRIO (§1º) — a ordem dos fatos importa
- **Roubo próprio:** violência/ameaça é **meio** para subtrair (vem **antes ou durante**).
- **Roubo impróprio (§1º):** a violência/ameaça vem **logo após** a subtração já realizada, para **garantir a posse ou a impunidade**.
- **Tese defensiva:** se a violência foi **posterior e desvinculada** do intuito de assegurar a coisa/impunidade (ex.: reação a uma abordagem, sem dolo de garantir o produto), afasta-se o §1º e pode-se sustentar **furto + crime autônomo** (lesão/ameaça), com pena somada frequentemente menor que o roubo impróprio.

### 4. Tentativa × consumação (art. 14, II)
- **Marco da consumação — teoria da *amotio/apprehensio*:** o STF/STJ adotam a consumação com a **inversão da posse**, ainda que por breve tempo e **sem posse mansa e pacífica** (Súmula 582/STJ [conferir em `jurisprudencia-stj-stf`]). Ou seja, dispensa-se que o bem saia da esfera de vigilância da vítima.
- **Tese defensiva (tentativa):** sustentar tentativa quando **não houve inversão da posse** — o agente foi detido em flagrante **antes** de retirar o bem da vítima, ou sequer chegou a apreender a coisa. Mesmo sob a Súmula 582, se **não houve apreensão/posse**, a conduta é **tentada** (redução de 1/3 a 2/3, art. 14, II, § único).

## Ataque individualizado às MAJORANTES

Cada majorante é uma batalha própria. Regras transversais primeiro:

> **Súmula 443/STJ (fração única) — decorar.** O aumento na 3ª fase pela **pluralidade de majorantes** do roubo **exige fundamentação concreta**: não basta o número de causas de aumento para elevar acima do mínimo (1/3). Se o juiz aplicou 3/8 ou 1/2 **só porque havia duas majorantes**, a defesa pede a **redução ao mínimo de 1/3** (Súmula 443/STJ). Sempre confira o texto e a vigência em `jurisprudencia-stj-stf`.

### Majorante do §2º-A, I — ARMA DE FOGO (+2/3): a frente mais rica
- **Exige APREENSÃO e PERÍCIA?** A regra jurisprudencial consolidada admite que a majorante **pode ser reconhecida por prova testemunhal** (palavra da vítima) **quando a arma não é apreendida/periciada** — mas essa prova deve ser **firme e coerente**. A defesa ataca quando **o único elemento é um relato vago**, sem descrição da arma, sem apreensão e sem perícia.
- **Arma DESMUNICIADA / inapta.** Tese defensiva clássica: arma **comprovadamente desmuniciada** ou **inapta a disparar** (defeito, simulacro) **não tem potencial lesivo** e, para parte da jurisprudência, **não incide a majorante** (afasta o §2º-A, remanescendo, quando muito, a grave ameaça do *caput*). **Ponto oscilante** — há corrente que mantém a majorante pelo poder de intimidação. **Confira a posição atual e o overruling em `jurisprudencia-stj-stf`** antes de sustentar; a inversão do ônus (a acusação prova a potencialidade) é o eixo da tese.
- **Simulacro / arma de brinquedo.** Não é arma de fogo → **afasta o §2º-A**. A **Súmula 174/STJ** (que admitia o aumento pelo simulacro) foi **CANCELADA** — hoje o simulacro **não majora** (serve apenas à grave ameaça do *caput*). Registrar o cancelamento é decisivo; conferir em `jurisprudencia-stj-stf`.
- **Arma BRANCA (faca) pós-Lei 13.654/2018.** A Lei 13.654/2018 **retirou** a arma branca do rol de majorantes; depois a **Lei 13.964/2019** reintroduziu o emprego de **arma branca** como majorante do §2º (conferir inciso e redação vigente). **Para fatos praticados na "janela" entre as leis (abr/2018 a dez/2019), há tese de *abolitio* parcial / lei mais benéfica** — arma branca **não majorava** naquele período (retroatividade da lei mais benéfica, CF, art. 5º, XL). **Verificar a data do fato e a redação então vigente** — é a tese de vigência mais lucrativa do tipo.

### Majorante do §2º, II — CONCURSO DE PESSOAS
- **Exige, ao menos, DUAS pessoas** aderindo à empreitada (coautoria ou participação). A defesa ataca: (a) **prova do concurso** — não basta a suspeita de comparsa não identificado sem lastro; (b) **participação de agente inimputável/menor** ainda conta para o concurso, mas verificar o caso; (c) **desistência/adesão posterior** que não configure liame subjetivo.

### Majorante do §2º, III — RESTRIÇÃO DA LIBERDADE DA VÍTIMA
- Exige restrição **juridicamente relevante** da liberdade, por **tempo significativo** e **além do necessário** à subtração. **Tese defensiva:** breve contenção **ínsita ao próprio roubo** (segundos para tomar o bem) **não caracteriza** a majorante — sob pena de *bis in idem*. Confrontar o **tempo** e a **finalidade autônoma** da restrição.

### §2º-B — arma de fogo de USO RESTRITO/PROIBIDO (pena em dobro)
- Exige **prova pericial da classificação** da arma (restrita/proibida). Sem laudo que ateste o calibre/classe, **não se dobra a pena** — remanesce, no máximo, o §2º-A. Exigir o laudo é a tese central.

## Distinções que decidem a capitulação (e a pena)

| Confronto | Critério decisivo | Efeito da tese |
|---|---|---|
| **Roubo × Furto** (155) | Há violência/grave ameaça **à pessoa**? | Sem ela → furto (pena menor, admite privilégio) |
| **Roubo × Extorsão** (158) | A vítima **pode ou não** deixar de colaborar? No roubo o agente **toma**; na extorsão a **colaboração da vítima é imprescindível** | Reclassificar conforme a imprescindibilidade da conduta da vítima |
| **Roubo próprio × impróprio** (§1º) | A violência veio **antes/durante** (próprio) ou **logo após** a subtração (impróprio)? | Desvinculada a violência → furto + crime autônomo |
| **Roubo majorado × Latrocínio** (§3º, II) | Houve **morte** com nexo com a subtração? | Latrocínio é hediondo, 20–30 anos, **juiz singular** (Súm. 603/STF), não júri |
| **Latrocínio consumado × tentado** | Consuma-se com a **morte**, ainda que a subtração não se complete (e vice-versa — conferir a Súmula 610/STF em `jurisprudencia-stj-stf`) | Define a pena de partida e a competência |

## Dosimetria — onde a defesa recupera pena (aponta para calculadora)

Este é o momento aritmético. **A skill descreve o método; o cálculo determinístico é feito por `calculadora-dosimetria`** (fração de aumento, concurso de causas, pena final). Diretrizes que a defesa alimenta:

1. **1ª fase (art. 59):** atacar circunstâncias judiciais desfavoráveis sem lastro concreto; roubo "comum" não justifica exasperação da base.
2. **2ª fase:** agravantes/atenuantes; **confissão** (Súmula 545/STJ [conferir]) reduz mesmo se qualificada/retratada, quando usada na fundamentação.
3. **3ª fase — o coração do roubo:** aplicar as majorantes **pela fração mínima (1/3)** salvo fundamentação concreta (**Súmula 443/STJ**); afastar majorantes não provadas (perícia da arma, número de agentes); no §2º-A usar **2/3** apenas se a arma de fogo estiver provada.
4. **Regime e substituição:** com a pena reduzida pelo afastamento de majorantes, reabrir a discussão de **regime inicial** e, se cabível, do art. 44 (embora o roubo, por violência/grave ameaça, em regra **não** admita substituição — CP, art. 44, I).

> Para o cálculo numérico exato (frações, arredondamento, concurso material/formal), acione **`calculadora-dosimetria`**. Para prazo prescricional pela pena em concreto, **`calculadora-prescricao`**. Para tempestividade recursal, **`calculadora-tempestividade`**. Esta skill **não** executa cálculo — descreve o método e entrega as teses que alimentam a calculadora.

## Teses e contra-teses (resumo tático)

| Tese da DEFESA | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Desclassificar para furto | Ausência de violência/grave ameaça idônea | Palavra da vítima descrevendo a intimidação |
| Tentativa, não consumação | Sem inversão da posse; detido antes da apreensão | Súmula 582/STJ — basta breve posse [conferir] |
| Afastar §2º-A (arma desmuniciada/inapta) | Ausência de potencial lesivo; ônus da acusação | Poder de intimidação subsiste (corrente oscilante) |
| Afastar §2º-A (simulacro) | Súmula 174/STJ **cancelada** — simulacro não majora | Grave ameaça do *caput* subsiste (mas sem +2/3) |
| Arma branca na janela 2018–2019 | *Abolitio*/lei mais benéfica (CF, art. 5º, XL) | Lei 13.964/19 reintroduziu (verificar data do fato) |
| Fração mínima (1/3) na 3ª fase | Súmula 443/STJ — nº de majorantes não basta | Circunstâncias concretas justificam elevação |
| Afastar restrição de liberdade (§2º, III) | Contenção ínsita ao roubo; *bis in idem* | Restrição por tempo relevante e finalidade autônoma |
| Reclassificar para extorsão | Colaboração da vítima era imprescindível | No caso o agente tomou o bem (roubo) |

## Súmulas e precedentes sob o Citation Gate

**Cite com certeza apenas dispositivos de lei e súmulas notórias; qualquer número de HC/REsp/RE, tema ou informativo abaixo marcado [NÃO VERIFICADO] deve ser conferido em `jurisprudencia-stj-stf` antes de ir à peça. Na dúvida, ensine a tese e o dispositivo — não arrisque o número.**

- **Súmula 443/STJ** — o aumento da 3ª fase pela pluralidade de majorantes do roubo **exige fundamentação concreta** (não basta o número).
- **Súmula 174/STJ** — **CANCELADA**: arma de brinquedo/simulacro **não** majora (registrar o cancelamento).
- **Súmula 582/STJ** [conferir] — consumação do roubo com a inversão da posse, dispensada a posse mansa e pacífica (teoria da *amotio*).
- **Súmula 603/STF** — competência do **juiz singular** (não do júri) para o **latrocínio**.
- **Súmula 610/STF** [conferir] — latrocínio consumado quando há morte, ainda que não consumada a subtração.
- **Súmula 545/STJ** [conferir] — atenuante da confissão espontânea quando usada na fundamentação da condenação.
- **HC 598.886/SC (STJ)** [NÃO VERIFICADO] — observância do art. 226 do CPP no reconhecimento pessoal como garantia.
- Teses sobre **arma desmuniciada/inapta**, **arma branca pós-2018** e **fração única** têm forte oscilação — **sempre** passar por `jurisprudencia-stj-stf` para overruling/estado atual.

## Erros comuns / checklist da defesa

- [ ] **Data do fato** identificada e cruzada com a **redação do art. 157 vigente à época** (Lei 13.654/2018; Lei 13.964/2019)? (Define arma branca, arma de fogo e frações.)
- [ ] Teses trabalhadas **em cascata** — negativa de autoria → desclassificação (furto) → tentativa → afastamento de cada majorante?
- [ ] **Reconhecimento pessoal** conferido à luz do art. 226 do CPP (rito, não mera sugestão)?
- [ ] Cada **majorante atacada individualmente** (não em bloco)?
- [ ] **Arma de fogo:** exigida apreensão/perícia ou impugnada a prova exclusivamente testemunhal vaga? Arma **desmuniciada/inapta/simulacro** levantada?
- [ ] **Súmula 174/STJ cancelada** citada para afastar majorante por simulacro?
- [ ] **Súmula 443/STJ** invocada para fixar o aumento no **mínimo (1/3)** quando faltar fundamentação concreta?
- [ ] **Consumação × tentativa** analisada (houve inversão da posse? Súmula 582/STJ)?
- [ ] **Restrição de liberdade (§2º, III)** — afastada se ínsita ao roubo (evitar *bis in idem*)?
- [ ] **Latrocínio:** competência do **juiz singular** (Súm. 603/STF) e não do júri respeitada?
- [ ] Dosimetria delegada à **`calculadora-dosimetria`** e prescrição à **`calculadora-prescricao`**?
- [ ] **Todas** as súmulas/precedentes passaram por `jurisprudencia-stj-stf` (Citation Gate)?

**Anti-padrões (evitar):**
- Tratar as majorantes "em bloco" em vez de derrubar cada uma com sua tese própria.
- Citar a **Súmula 174/STJ como vigente** (está **cancelada**).
- Sustentar tese de arma branca sem **verificar a data do fato** e a lei vigente à época (janela 2018–2019).
- Aceitar aumento de 3/8 ou 1/2 na 3ª fase sem exigir fundamentação (Súmula 443/STJ).
- Confundir roubo impróprio (§1º) com roubo próprio, perdendo a tese de furto + crime autônomo.
- Levar latrocínio ao júri (é do juiz singular — Súm. 603/STF).
- Calcular pena "no olho" em vez de acionar a `calculadora-dosimetria`.
- Citar qualquer HC/REsp de memória sem passar pelo Citation Gate.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a peça final, as teses e a estratégia são de responsabilidade e assinatura do **advogado** (Estatuto da OAB e Código de Ética e Disciplina; publicidade sob o Provimento 205/2021 quando aplicável). Defensoria Pública observa a LC 80/94; atuação do MP/assistente de acusação observa o CNMP.
- **Polo:** esta skill é de **DEFESA** (réu/investigado). O roteador deve confirmar o polo do escritório em `company.md`; para a acusação (MP/assistente), inverter o ônus é justamente o alvo destas teses.
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão vai à peça sem passar por `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA — **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, apelação, razões), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
