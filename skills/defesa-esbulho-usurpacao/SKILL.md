---
name: defesa-esbulho-usurpacao
description: >-
  Use ao defender ESBULHO POSSESSÓRIO e USURPAÇÃO (art. 161 do CP): atipicidade por ausência de
  violência/grave ameaça/concurso (invasão pacífica e individual é ilícito civil, não crime), posse
  própria controvertida, alteração de limites e desvio de águas do §1º, I, ação penal PRIVADA (§3º)
  e a fronteira com movimentos sociais e conflitos fundiários. Cobre também a supressão/alteração de
  marca em animais (art. 162). Gatilhos… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, patrimonio, defesa, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-esbulho-usurpacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-esbulho-usurpacao", "defesa esbulho", "esbulho usurpacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa em Esbulho Possessório e Usurpação (art. 161 do CP)

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

Esta skill orienta a **defesa** nos crimes do **art. 161 do Código Penal** — a *usurpação* (alteração de limites, usurpação de águas) do §1º e o *esbulho possessório* do §1º, II — e no crime conexo do **art. 162** (supressão ou alteração de marca em animais). São crimes contra o patrimônio de baixa lesividade, com **penas brandas** e **elementares muito específicas**, o que abre amplo espaço para teses de **atipicidade** e, sobretudo, para a distinção entre **crime e mero ilícito civil**.

> **Lição central:** o esbulho possessório penal **não pune toda invasão** — pune apenas a invasão de imóvel alheio, para fim de esbulho, praticada **com violência a pessoa, grave ameaça OU concurso de mais de duas pessoas** (art. 161, §1º, II). **Faltando essa elementar qualificada, o fato é atípico penalmente** e a controvérsia se resolve na esfera cível (ação possessória — reintegração de posse). A primeira pergunta da defesa é sempre: *houve violência, grave ameaça ou concurso? Se não, não há crime.*

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** do art. 161 e do art. 162 do CP e a natureza da ação penal antes de fundamentar — o §3º condiciona a ação a *ser a propriedade particular e não haver violência* (ação penal **privada** nessa hipótese). Confira também súmulas, temas e eventual *overruling* pela skill `jurisprudencia-stj-stf` antes de peticionar. Não cite número de acórdão, informativo ou tema de memória.

## Base legal

- **Art. 161, *caput*, do CP** — *usurpação por alteração de limites*: suprimir ou deslocar tapume, marco ou qualquer sinal indicativo de linha divisória, para apropriar-se, no todo ou em parte, de coisa imóvel alheia. Pena: detenção, 1 a 6 meses, e multa.
- **Art. 161, §1º, I, do CP** — *usurpação de águas*: desviar ou represar, em proveito próprio ou de outrem, águas alheias.
- **Art. 161, §1º, II, do CP** — *esbulho possessório*: invadir, com violência a pessoa ou grave ameaça, **ou** mediante concurso de **mais de duas pessoas**, terreno ou edifício alheio, para o fim de esbulho possessório.
- **Art. 161, §2º, do CP** — **concurso material** obrigatório: se há emprego de violência, aplica-se também a pena a ela correspondente (a violência é punida à parte).
- **Art. 161, §3º, do CP** — **condição de procedibilidade**: se a propriedade é particular e não há violência, **somente se procede mediante queixa** (ação penal **privada**).
- **Art. 162 do CP** — *supressão ou alteração de marca em animais*: suprimir ou alterar marca ou sinal indicativo de propriedade em gado ou rebanho alheio (detenção, 6 meses a 3 anos, e multa).
- **Art. 155 do CC (posse)** e legislação processual civil (ações possessórias) — pano de fundo da distinção civil/penal.

## Estrutura das figuras — o que cada elementar exige

| Figura | Dispositivo | Conduta nuclear | Elemento subjetivo especial | Pena |
|--------|-------------|------------------|------------------------------|------|
| Alteração de limites | 161, *caput* | Suprimir/deslocar tapume, marco, sinal divisório | Fim de **apropriação** de imóvel alheio | 1–6 meses + multa |
| Usurpação de águas | 161, §1º, I | Desviar ou represar águas alheias | **Proveito** próprio ou de outrem | 1–6 meses + multa |
| Esbulho possessório | 161, §1º, II | **Invadir** terreno/edifício alheio | Fim de **esbulho possessório** | 1–6 meses + multa |
| Supressão de marca | 162 | Suprimir/alterar marca em gado/rebanho alheio | Dolo | 6 meses–3 anos + multa |

**Duas exigências cumulativas do esbulho possessório (§1º, II):**
1. **Meio qualificado** — a invasão deve dar-se **com violência a pessoa**, **com grave ameaça**, **OU** mediante **concurso de mais de duas pessoas** (isto é, no mínimo **quatro** invasores). Não basta a mera invasão pacífica e individual.
2. **Fim especial** — a invasão deve ter por finalidade o **esbulho possessório** (tomar a posse para si), e não outro propósito (ex.: passagem, protesto momentâneo, mera turbação sem ânimo de posse).

## Roteiro de defesa por figura penal

### 1. Esbulho possessório (§1º, II) — a tese-mãe: invasão pacífica é ilícito civil

- **Ausência do meio qualificado (atipicidade):** se não houve violência a pessoa, grave ameaça, nem concurso de **mais de duas** pessoas, **o fato é atípico**. A invasão pacífica e individual (ou por até três pessoas sem violência) **não é crime** — resolve-se por **ação de reintegração de posse** no cível. Esta é a tese mais frequente e mais forte em conflitos fundiários.
- **Contagem do concurso:** "mais de duas pessoas" exige **quatro ou mais** agentes (mais de duas = a partir de três participando + o autor; confira a interpretação numérica adotada). Se a denúncia imputa concurso, **discutir o número efetivo** de invasores e a **prova** de que todos aderiram à invasão.
- **Violência contra a coisa ≠ violência contra a pessoa:** arrombar cadeado, derrubar cerca ou porteira é **violência contra a coisa**, que **não** preenche a elementar "violência a pessoa" do §1º, II (podendo, no máximo, configurar o *caput* — alteração de limites — ou dano, conforme o caso). Distinguir com rigor.
- **Ausência de *animus* de esbulho:** ocupação para protesto, passagem, uso momentâneo ou permanência sem intenção de tomar a posse definitiva pode afastar o **fim especial** de esbulho.
- **Posse própria / posse controvertida (excludente do tipo — imóvel "alheio"):** se o acusado tem **posse ou pretensão possessória legítima** (posseiro, herdeiro, condômino, comodatário que se recusa a devolver), o imóvel **não é "alheio"** no sentido do tipo, ou há **erro de tipo/erro de proibição** quanto à titularidade. A controvérsia dominial afasta o dolo de esbulhar coisa alheia.

### 2. Alteração de limites (art. 161, *caput*)

- Exige **supressão ou deslocamento** de marco/tapume/sinal divisório **com fim de apropriação**. Mera discordância sobre a linha divisória, sem deslocamento material do sinal e sem *animus* de apropriar-se, é **atípica** (questão de demarcação = cível).
- **Prova pericial** da existência e do deslocamento do sinal divisório é essencial; sem laudo que ateste o deslocamento, a materialidade é frágil.

### 3. Usurpação de águas (art. 161, §1º, I)

- Exige **desvio ou represamento** de **águas alheias** com **proveito**. Discutir a **titularidade da água** (curso d'água público x privado; direito de uso; outorga administrativa), pois se a água não é "alheia" no sentido do tipo, o fato é atípico.
- Conflitos de uso de recursos hídricos frequentemente têm natureza **administrativa/cível** (regulação de outorga), não penal.

### 4. Supressão/alteração de marca em animais (art. 162)

- Exige **supressão ou alteração** de marca/sinal em gado ou rebanho **alheio**. Discutir a **titularidade** do rebanho e a **finalidade** (renovação legítima de marca no próprio gado é atípica).
- Distinguir de **furto de semovente** (art. 155) e de **abigeato** (furto de semovente domesticável de produção — art. 155, §6º): se há subtração do animal, o enquadramento muda; a supressão de marca pressupõe animal que permanece, mas com identificação suprimida/alterada.

## Teses e contra-teses

| Tese da defesa | Fundamento | Contra-tese da acusação |
|----------------|------------|--------------------------|
| Invasão pacífica e individual = ilícito civil (atipicidade) | Falta a elementar do §1º, II (violência/ameaça/concurso) | Sustentar presença de grave ameaça implícita ou concurso ≥ 4 |
| Concurso não atingiu "mais de duas pessoas" | Contagem numérica da elementar | Demonstrar adesão de quatro ou mais invasores |
| Violência foi contra a coisa, não contra pessoa | Elementar exige violência **a pessoa** | Requalificar como dano ou apontar violência a pessoa |
| Posse/pretensão possessória legítima — imóvel não é "alheio" | Ausência de dolo de esbulhar coisa alheia; erro de tipo | Provar propriedade/posse anterior consolidada da vítima |
| Ação penal privada — falta de queixa/decadência (§3º) | Propriedade particular + sem violência = queixa | Sustentar violência (torna a ação pública) ou propriedade pública |
| Ausência de *animus* de esbulho (protesto/passagem) | Falta o fim especial de esbulho possessório | Demonstrar permanência e ânimo de tomada de posse |
| Insignificância / mínima lesividade | Baixíssima ofensa ao bem jurídico | Afastar bagatela pela reiteração ou pelo conflito social |

**Nulidades e questões processuais próprias:**
- **Natureza da ação penal (§3º):** se a propriedade é **particular** e **não houve violência**, a ação é **privada** — exige **queixa-crime** do ofendido, sujeita a **decadência (6 meses)** e a **renúncia/perdão**. Denúncia do MP nessa hipótese é **inadequação da via** (ilegitimidade ativa). Havendo violência, ou sendo a propriedade **pública**, a ação passa a **pública**. Verificar sempre a titularidade do bem e a existência de violência para definir quem pode agir.
- **Concurso material com a violência (§2º):** se a acusação soma esbulho + lesão corporal, atacar a **prova da violência** derruba tanto a qualificadora do meio quanto o crime autônomo.
- **Conexão com movimentos sociais/conflitos fundiários:** a jurisprudência costuma exigir **prova individualizada** da conduta de cada acusado; imputação genérica a ocupantes de movimento coletivo, sem individualização, é frágil. **Confira o tratamento atual via `jurisprudencia-stj-stf`.**

## Distinção com figuras próximas (não confundir)

- **Dano (art. 163):** pune a **destruição/deterioração** da coisa; o esbulho pune a **turbação/esbulho da posse** de imóvel — **bem jurídico e elementares distintos** (a mera destruição de cerca sem tomada de posse tende a dano, não a esbulho). *Ver skill `defesa-dano`.*
- **Furto (art. 155):** subtração de coisa **móvel** alheia; o art. 161 protege a **posse de imóvel** (e, no 162, a identificação do semovente). Se há subtração de animal, é furto/abigeato, não art. 162.
- **Esbulho x turbação (cível):** no cível, esbulho = perda total da posse (reintegração); turbação = perturbação parcial (manutenção de posse). No penal, o §1º, II usa "esbulho possessório" como fim especial — a linha civil ajuda a aferir o *animus*.

## Súmulas e precedentes (sob o Citation Gate)

> **Não invente jurisprudência.** Cite dispositivos de lei com certeza; para **qualquer** precedente específico (número de HC/REsp/RE, informativo, tema repetitivo), confirme antes pela skill `jurisprudencia-stj-stf`. Prefira ensinar a **tese** e o **dispositivo** a arriscar um número de acórdão.

- **Princípio da insignificância / bagatela:** aplicável em tese aos crimes patrimoniais de baixíssima lesividade — os **vetores do STF** (mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade, inexpressividade da lesão) são o roteiro. **Confirme a existência de precedente específico aplicando a insignificância ao art. 161 antes de citar — [NÃO VERIFICADO].**
- **Tratamento penal de ocupações de movimentos sociais e exigência de individualização de conduta:** há entendimento consolidando a necessidade de prova individualizada, mas **qualquer número de HC/REsp específico é [NÃO VERIFICADO]** — conferir via `jurisprudencia-stj-stf`.
- **Distinção crime x ilícito civil na invasão pacífica:** é entendimento doutrinário e jurisprudencial corrente que a invasão sem a elementar qualificada é atípica penalmente; **o dispositivo (art. 161, §1º, II) é a âncora segura** — o número de precedente, se usado, passa pelo gate.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar **toda invasão** como crime de esbulho, ignorando que a figura exige **violência, grave ameaça ou concurso de mais de duas pessoas**.
- Confundir **violência contra a coisa** (arrombar cerca) com **violência a pessoa** (a elementar do §1º, II).
- Deixar de verificar a **natureza da ação penal (§3º)** — aceitar denúncia do MP onde o caso é de **queixa privada** (propriedade particular + sem violência), perdendo a tese de decadência/ilegitimidade.
- Ignorar a **posse/pretensão possessória** do acusado, que descaracteriza o "imóvel alheio" e o dolo de esbulhar coisa de outrem.
- Não individualizar condutas em ocupações coletivas, aceitando imputação genérica.
- Aceitar **alteração de limites** sem laudo pericial do deslocamento do marco divisório.
- Citar número de acórdão/informativo **de memória**, sem passar pelo Citation Gate.

**Checklist da defesa:**
- [ ] Qual figura foi imputada — *caput* (limites), §1º, I (águas), §1º, II (esbulho) ou art. 162 (marca)?
- [ ] No esbulho (§1º, II): houve **violência a pessoa**, **grave ameaça** ou **concurso de mais de duas pessoas** (≥ 4)? Se **não**, sustentar **atipicidade** (ilícito civil).
- [ ] A "violência" alegada foi contra a **pessoa** ou apenas contra a **coisa**?
- [ ] O acusado tem **posse ou pretensão possessória** — o imóvel é mesmo **"alheio"**?
- [ ] Há **fim especial** de esbulho (tomar a posse), ou o ato foi protesto/passagem/turbação sem *animus*?
- [ ] **Natureza da ação (§3º):** propriedade **particular** + **sem violência** → ação **privada** (exige queixa; verificar **decadência** de 6 meses)?
- [ ] Se há violência: atacar sua **prova** (derruba a qualificadora do meio e o **concurso material** do §2º)?
- [ ] Em ocupação coletiva: a conduta de cada acusado foi **individualizada**?
- [ ] Alteração de limites/águas: há **laudo pericial** do deslocamento/desvio e prova da **titularidade** alheia?
- [ ] **Insignificância** aplicável à baixa lesividade do caso?
- [ ] Todas as súmulas/precedentes **conferidos via `jurisprudencia-stj-stf`** antes de citar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da tese e da peça; a responsabilidade pela estratégia, pela subsunção e pelas afirmações jurídicas é sempre do **advogado** signatário (CED/OAB; Provimento 205/2021 quanto à comunicação). Nada aqui substitui a leitura integral dos autos concretos.
- **Polo:** skill de **defesa** (patrocínio do acusado/querelado). Se a atuação for do **polo acusatório** (MP ou querelante/assistente de acusação), o roteador deve confirmar o polo — a lógica de teses inverte-se (ônus de provar a elementar qualificada, a violência e o *animus* de esbulho recai sobre a acusação).
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória — tudo passa pela skill `jurisprudencia-stj-stf`/`verificacao-citacoes`. Dispositivos de lei conferidos na redação vigente. Na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência alucinada por IA).

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, memoriais ou queixa-crime em sentido inverso), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão.
