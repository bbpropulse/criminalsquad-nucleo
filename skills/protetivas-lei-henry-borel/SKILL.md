---
name: protetivas-lei-henry-borel
description: >-
  Use ao pleitear OU impugnar medidas protetivas de urgência da Lei Henry Borel (Lei 14.344/2022) em
  favor de criança ou adolescente vítima ou testemunha de violência doméstica e familiar — rol de
  medidas, legitimidade, procedimento, articulação com o Conselho Tutelar e o depoimento especial, e
  o crime de descumprimento (confira a numeração exata dos artigos via lei-e-sumula antes de citar).
  Distingue-se do regime da Lei… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, protecao-crianca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-protetivas-lei-henry-borel"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["protetivas-lei-henry-borel", "protetivas henry", "henry borel"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Medidas Protetivas da Lei Henry Borel (Lei 14.344/2022)

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

Esta skill orienta o pleito e a impugnação das **medidas protetivas de urgência** em favor de **criança e adolescente vítima ou testemunha de violência doméstica e familiar** (Lei 14.344/2022): o rol de medidas, a legitimidade, o procedimento de urgência, a articulação com o **Conselho Tutelar** e com a **rede de proteção**, e o crime de descumprimento. **Atenção à numeração:** a Henry Borel espelha a arquitetura da Maria da Penha mas **não repete os mesmos números de artigo** — cada dispositivo citado na peça deve ser confirmado via `lei-e-sumula` (ver a Cautela de vigência). Ela orienta **os dois polos** — quem requer a proteção do menor e a defesa do investigado. Fixa a fronteira com as irmãs: a **peça da Lei Maria da Penha** (vítima **mulher**) vive em `medidas-protetivas-urgencia` — não a confunda com esta, cujo destinatário é o **menor** e cujo regime é próprio; a **oitiva protegida** da criança (depoimento especial e escuta especializada da Lei 13.431/2017) vive em `depoimento-especial-lei-13431`; e o **mérito** do crime sexual contra vulnerável, quando for o pano de fundo, vive em `defesa-crimes-sexuais`. Aqui está a **protetiva e seu procedimento** — não a prova do crime nem o rito da oitiva.

> **Lição central:** a Lei Henry Borel copiou a *arquitetura* da Lei Maria da Penha, mas mudou o *centro de gravidade*. O eixo não é a autonomia da vontade da vítima — é o **melhor interesse da criança** (ECA, art. 100, parágrafo único, IV) e a **proteção integral** (CF, art. 227). Consequência prática dupla: (1) a proteção pode ser **imposta e ampliada de ofício** e por iniciativa de terceiros (MP, Conselho Tutelar, qualquer pessoa), pois o menor não "abre mão" de proteção; (2) medidas atingem o **poder familiar e a guarda** — territórios que a Lei Maria da Penha não toca. Quem litiga aqui pensando com a cabeça da Maria da Penha erra o pedido e o polo.

## O instituto e a base legal

| Dispositivo | O que garante / exige |
|---|---|
| **Art. 1º e 2º** | Cria mecanismos para coibir violência doméstica/familiar contra **criança e adolescente**; define violência (física, psicológica, sexual, institucional, patrimonial) — o enquadramento que atrai o regime |
| **Art. 6º** | Rol das formas de violência (espelha o art. 7º da Maria da Penha, adaptado ao menor) — protetiva **não exige lesão física** |
| **Concessão pelo juiz** (art. a confirmar — a skill trabalha com "art. 20") | Medidas protetivas concedidas pelo juiz, a requerimento do MP, do Conselho Tutelar, do ofendido (por representante) **ou de ofício** — decisão **liminar** possível. Se a liminar dispensa oitiva prévia das partes e a manifestação prévia do MP (como na Maria da Penha) é ponto a **confirmar** — dada a atuação reforçada do MP na tutela do menor, não afirme de memória: cheque via `lei-e-sumula`/`jurisprudencia-stj-stf` |
| **Obrigam o agressor** (art. a confirmar) | Afastamento do lar, proibição de aproximação e contato, suspensão de visitas, suspensão de armas, prestação de alimentos provisionais |
| **Em favor da criança/adolescente** (art. a confirmar) | Encaminhamento à rede, afastamento **do lar** com preservação de direitos, guarda provisória, suspensão do poder familiar quando necessário — território próprio da lei |
| **Comunicação e apreensão** (art. a confirmar) | Medidas de urgência do juízo: comunicação ao MP, à autoridade policial e ao Conselho Tutelar; apreensão de arma; intimação do ofendido dos atos processuais e da soltura do agressor |
| **Prazo / cumulação / substituição** (art. a confirmar) | Cumulação, substituição e ampliação a qualquer tempo; eventual prazo para o juiz apreciar (a Maria da Penha fixa **48 horas** no art. 18 — confirmar se a Lei 14.344 replica esse prazo e em qual artigo antes de invocá-lo) |
| **Patrimoniais** (art. a confirmar) | Restituição de bens, proibição de disposição de bens comuns, caução por perdas e danos |
| **Crime de descumprimento** (art. a confirmar — a skill trabalha com "art. 25", mas o tipo pode estar em artigo diverso) | Figura autônoma de descumprimento das medidas protetivas desta lei, própria do microssistema — **confira o artigo e a pena vigentes via `lei-e-sumula` antes de imputar** |
| **ECA (Lei 8.069/1990)** | Norma-mãe da proteção integral — guarda (arts. 33 ss.), poder familiar (arts. 21/22, 155 ss.), competência (art. 148), atribuições do Conselho Tutelar (art. 136) |

> **Cautela de vigência (obrigatória — a numeração-base está em risco):** a Lei 14.344/2022 organizou as medidas protetivas de urgência ao longo de um bloco de artigos (concessão pelo juiz; medidas que **obrigam o agressor**; medidas **em favor da criança/adolescente**; medidas de urgência de comunicação/apreensão; prazo, cumulação e substituição; prisão preventiva; e o **crime de descumprimento**), mas **a correspondência exata artigo↔conteúdo usada nesta skill é uma HIPÓTESE DE TRABALHO, não uma afirmação verificada** — a Lei Henry Borel espelha a arquitetura da Maria da Penha sem repetir a mesma numeração, e leis posteriores ainda podem ter deslocado incisos e penas. **Antes de citar QUALQUER número de artigo desta lei na peça, confirme o dispositivo exato e o inciso pela redação vigente via agente `lei-e-sumula`; marque [NÃO VERIFICADO] toda referência numérica que não confirmar.** Não transporte para a peça os números indicados nas tabelas abaixo sem essa conferência — errar o dispositivo aqui descredibiliza a peça inteira. Sobre a **competência** (Vara da Infância × Vara de Violência Doméstica × Vara Criminal), a **natureza recursal** do (in)deferimento e a aplicação **subsidiária** de outras normas (a própria lei manda aplicar subsidiariamente o CPC, o ECA, o CP e o CPP — confirmar o dispositivo): a jurisprudência de STJ e STF está se formando — **pesquise via `jurisprudencia-stj-stf`, verifique com `verificador-citacoes` e marque [NÃO VERIFICADO] o que não confirmar.**

## Henry Borel NÃO é Maria da Penha — a distinção que define o polo e o pedido

Confundir os regimes é o erro que mais mutila a peça. A tabela abaixo é a linha divisória:

| | Lei Maria da Penha (11.340/06) | Lei Henry Borel (14.344/22) |
|---|---|---|
| **Destinatário** | Mulher, em contexto de gênero | **Criança/adolescente** (qualquer sexo) |
| **Eixo axiológico** | Autonomia e proteção da mulher | **Melhor interesse e proteção integral** do menor |
| **Iniciativa** | Ofendida, MP, autoridade policial | MP, **Conselho Tutelar**, representante do menor, **e de ofício** |
| **"Vontade da vítima"** | Central (retratação da representação, oitiva prévia à revogação) | Secundária — o menor **não renuncia** à proteção; decide-se pelo seu interesse |
| **Guarda / poder familiar** | Fora do foco (protetiva não decide guarda) | **No coração das medidas** (guarda provisória, suspensão do poder familiar) |
| **Crime de descumprimento** | Art. 24-A da Lei 11.340 | Tipo **próprio** da Lei 14.344 — figura autônoma (confirme o artigo e a pena via `lei-e-sumula`) |
| **Rede acionada** | Patrulha Maria da Penha, CRAS/CREAS | **Conselho Tutelar**, CREAS, rede do ECA |
| **Oitiva da vítima** | Depoimento comum (com proteção da Lei 14.245/21) | **Depoimento especial / escuta especializada** obrigatórios (Lei 13.431/17) |

> **Consequência de peça:** ao **requerer**, invoque os dispositivos das medidas protetivas da **Lei 14.344** (o bloco de artigos das protetivas de urgência — cujos números exatos você confirma via `lei-e-sumula`), **não** os arts. 22 a 24 da Maria da Penha, e articule a proteção **com o ECA** (guarda, poder familiar). Ao **defender**, ataque exatamente a transposição automática: nem toda violência intrafamiliar contra criança comporta as medidas mais gravosas (afastamento do lar, suspensão do poder familiar) — estas exigem **fundamentação reforçada** e **proporcionalidade**, sob pena de romperem, sem contraditório, o vínculo familiar do investigado.

## Mapa — situação concreta → providência → onde aprofundar

| Situação | Providência desta skill | Onde aprofundar |
|---|---|---|
| Criança sob risco atual no próprio lar | Requerimento de afastamento do agressor ou afastamento protetivo do menor com guarda provisória a familiar seguro (dispositivos das medidas que obrigam o agressor e das medidas em favor do menor) | ECA (guarda) + `lei-e-sumula` para redação e número vigentes |
| Conselho Tutelar já atuou / aplicou medida do art. 101 ECA | Levar a notícia ao juízo e requerer protetiva judicial; **a medida do Conselho não substitui a judicial** | Seção "Conselho Tutelar" abaixo |
| A criança precisa ser ouvida | **Não** colher relato informal — requerer **depoimento especial** sob rito próprio | `depoimento-especial-lei-13431` |
| Pano de fundo é abuso sexual | Protetiva aqui; teses de mérito e standard probatório na skill do crime | `defesa-crimes-sexuais` |
| Vítima é **mulher adulta** (mãe também agredida) | Protetiva **dela** é da Maria da Penha; podem coexistir dois pedidos, em regimes distintos | `medidas-protetivas-urgencia` |
| Investigado quer revogar/flexibilizar a protetiva | Contraponto defensivo (proporcionalidade, oitiva, prova do risco) | `revogacao-flexibilizacao-protetivas` (espelho defensivo) |
| Descumprimento pelo agressor | Notícia do **crime de descumprimento** próprio da lei (art. a confirmar via `lei-e-sumula`) + preventiva | Seção "Descumprimento" abaixo |

## O Conselho Tutelar e a rede — articulação obrigatória

A Lei Henry Borel integra a proteção **judicial** à proteção **administrativa** do ECA. Pontos que a peça (de qualquer polo) deve dominar:

- **Legitimidade do Conselho Tutelar:** a Lei 14.344 dá ao Conselho legitimidade para **requerer** medidas protetivas ao juízo — legitimidade que a Maria da Penha não conhece. Quem representa o menor deve verificar se o Conselho já foi acionado e **anexar** os relatórios.
- **Medidas do art. 101 do ECA × protetivas judiciais:** o Conselho aplica medidas de proteção administrativas (acolhimento, inclusão em programa), **mas não** determina afastamento cautelar do agressor nem guarda litigiosa — isso é **reserva de jurisdição**. Requerer ao Conselho o que só o juiz pode dar é erro de endereçamento; e, pela defesa, medida administrativa usada como se judicial fosse é vício arguível.
- **Comunicação recíproca:** a decisão judicial comunica-se ao MP, à autoridade policial e ao Conselho Tutelar. Requeira expressamente as comunicações — a proteção do menor depende da rede, não só do papel.
- **Notificação compulsória:** a suspeita de maus-tratos contra criança é de **comunicação obrigatória** (ECA, art. 13; art. 245). Isso alimenta a materialidade do risco — e, pela defesa, cobra-se que a notícia seja **fato**, não boato de rede.

## Rol de medidas — escolha cirúrgica

> Os agrupamentos abaixo (medidas que obrigam o agressor / em favor do menor / patrimoniais) reproduzem a **arquitetura** da lei; **os números de artigo você confirma via `lei-e-sumula` antes de citá-los na peça** (ver a Cautela de vigência acima).

### Que obrigam o agressor

- **Afastamento do lar** ou local de convivência com a criança — indique endereço; peça acompanhamento para retirada de pertences.
- **Proibição de aproximação** da criança, de familiares protetores e testemunhas — fixe **limite em metros** e nomeie os protegidos.
- **Proibição de contato por qualquer meio** — explicite telefone, mensagens, redes, escola, e **interposta pessoa**.
- **Proibição de frequentar** lugares (residência, escola, creche, casa de familiares).
- **Suspensão de visitas** aos dependentes — justifique o risco; regime de visitas assistidas quando o vínculo dever ser preservado com segurança.
- **Suspensão da posse/porte de armas** — cumule com **apreensão imediata**; comunicação à corporação se o agressor for agente de segurança.
- **Alimentos provisionais** — quando o afastamento retira a fonte de sustento do menor.

### Em favor da criança/adolescente — o território próprio da lei

- **Encaminhamento** à rede de proteção (CREAS, saúde, programa oficial).
- **Afastamento protetivo do menor** do lar, **sem prejuízo** de direitos (guarda, alimentos), quando o afastamento do agressor não bastar.
- **Guarda provisória** a familiar ou responsável seguro (integrar com ECA, arts. 33 ss.) — mais protetiva que retirar a criança para acolhimento institucional.
- **Suspensão do poder familiar** quando necessário — medida **gravíssima**, de proporcionalidade estrita; a defesa a combate como ruptura sem contraditório do vínculo constitucional.

### Patrimoniais

- Restituição de bens; proibição de disposição de bens comuns; caução por perdas e danos.

## Estrutura forense do requerimento (polo protetivo)

```
AO JUÍZO DE DIREITO DA [VARA COM COMPETÊNCIA — verificar: Vara da Infância e
Juventude / Vara de Violência Doméstica / Vara Criminal] DA COMARCA DE [COMARCA] — [UF]

[Medida Protetiva de Urgência — Lei 14.344/2022 — tramitação PRIORITÁRIA,
 SIGILOSA e em SEGREDO DE JUSTIÇA (ECA, art. 143; criança envolvida)]

[REQUERENTE: Ministério Público / Conselho Tutelar de [MUNICÍPIO] / [NOME],
representante legal de [INICIAIS DA CRIANÇA/ADOLESCENTE] — nunca o nome completo],
com fundamento nos dispositivos das medidas protetivas de urgência da Lei
14.344/2022 [CONFIRMAR os arts. exatos via lei-e-sumula antes de protocolar]
e na proteção integral (CF, art. 227; ECA, art. 100), vem requerer MEDIDAS
PROTETIVAS DE URGÊNCIA
em favor de [INICIAIS], criança/adolescente de [IDADE], em desfavor de

[NOME DO AGRESSOR], [qualificação, vínculo com a criança e endereço para intimação],

pelas razões seguintes:

I — DOS FATOS E DO RISCO À CRIANÇA
Vínculo doméstico/familiar (art. 2º); forma de violência (art. 6º:
física/psicológica/sexual/institucional/patrimonial); o episódio ou a
ESCALADA que revela risco atual; provas (relatório do Conselho Tutelar,
notificação compulsória, laudos, prints, testemunhas). NÃO transcrever
relato colhido informalmente da criança — a oitiva é por depoimento
especial (Lei 13.431/2017).

II — DO DIREITO
1. Da incidência da Lei 14.344/2022 (violência doméstica/familiar contra
   criança/adolescente — dispositivos de definição; confirmar nºs).
2. Do melhor interesse e da proteção integral (CF, art. 227; ECA, art. 100).
3. Do risco concreto e da adequação de CADA medida (subsunção medida a medida).
[Ao passar para a peça, substitua cada [art. ___] pelos dispositivos VIGENTES
 confirmados via lei-e-sumula — a numeração abaixo é lacuna a preencher.]

III — DOS PEDIDOS
a) LIMINARMENTE, se cabível sem oitiva das partes [confirmar se a lei dispensa
   a manifestação prévia do MP], no prazo legal [confirmar se há prazo de 48
   HORAS e em qual art.], o deferimento de: [rol individualizado — afastamento
   do agressor do lar [art. ___]; proibição de aproximação a menos de ___ metros
   da criança, da escola [X] e dos protetores [Y] [art. ___]; proibição de
   contato por qualquer meio, inclusive por interposta pessoa; suspensão de
   visitas [art. ___]; guarda provisória a [FAMILIAR SEGURO] [art. ___ c/c ECA];
   suspensão da posse de armas, com apreensão imediata; ...];
b) a INTIMAÇÃO PESSOAL do requerido, com advertência de que o descumprimento
   configura o crime de descumprimento próprio da Lei 14.344/2022 [confirmar o
   art. e a pena] e autoriza preventiva — ciência inequívoca documentada nos autos;
c) as COMUNICAÇÕES ao MP, à autoridade policial e ao CONSELHO TUTELAR
   [art. ___, §§], com inclusão da criança nos programas de proteção;
d) que a oitiva da criança, se necessária, ocorra por DEPOIMENTO ESPECIAL
   (Lei 13.431/2017), vedada a colheita informal;
e) a VIGÊNCIA das medidas enquanto persistir o risco, com reavaliação
   periódica pelo interesse do menor;
f) SEGREDO DE JUSTIÇA e proteção dos dados de localização da criança.

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [REQUERENTE / ADVOGADO(A) — OAB/[UF] nº [NÚMERO]]
```

**Documentos:** relatório e requisições do Conselho Tutelar; notificação compulsória; documentos da criança (**iniciais** nas peças — ECA, art. 143 + LGPD); laudos/prontuários; prints autenticáveis; comprovantes do vínculo familiar; certidões de protetivas anteriores.

## Teses típicas por polo

**Polo protetivo (quem requer a proteção do menor):**
- **Legitimidade ampla e atuação de ofício:** o juízo pode e deve conceder e ampliar medidas independentemente da vontade do menor ou dos pais — a proteção integral autoriza.
- **Guarda provisória como medida protetiva:** confiar a criança a familiar seguro é menos traumático que acolhimento institucional — peça-a nominalmente, com o parâmetro do ECA.
- **Descumprimento → dupla resposta:** notícia do **crime de descumprimento** próprio da lei + requerimento de **preventiva** para garantir a execução das protetivas.
- **Oitiva sempre por depoimento especial:** blinde a prova futura — relato informal contamina e revitimiza (ver `depoimento-especial-lei-13431`).

**Defesa do investigado:**
- **Proporcionalidade das medidas gravíssimas:** afastamento do lar e, sobretudo, **suspensão do poder familiar** exigem fundamentação reforçada e concreta — não bastam boletim genérico ou relato de rede sem depoimento especial válido.
- **Contraditório diferido, não suprimido:** a medida liminar é possível, mas a defesa deve ser ouvida e a manutenção reavaliada — cobre a designação de audiência e a reavaliação do risco.
- **Não confundir violência com conflito de guarda:** disputa de guarda instrumentalizada como falsa notícia de violência — apontar a ausência de risco real ao menor. **Pesquise o entendimento atual sobre alienação parental × violência via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].**
- **Materialidade do risco:** exigir que o "risco" se ancore em fato documentado (relatório técnico, laudo), não em "ouvir dizer" — o mesmo rigor que a skill `depoimento-especial-lei-13431` cobra da prova infantil.

## O crime de descumprimento e a preventiva

> **Antes de imputar:** a Lei 14.344 tipifica um crime **próprio** de descumprimento das suas medidas protetivas, mas **o artigo exato e a pena devem ser confirmados via `lei-e-sumula`** — não cite o número de memória (a skill não o fixa justamente por isso).

- **Ciência inequívoca é pressuposto:** sem intimação pessoal documentada com advertência expressa, a imputação do descumprimento nasce frágil — a defesa atacará exatamente aí (paralelo ao art. 24-A da Maria da Penha).
- **Preventiva para execução das protetivas:** o descumprimento autoriza prisão preventiva para garantir a efetividade da medida — funde a proteção do menor com a coerção do CPP (verificar o dispositivo aplicável via `lei-e-sumula`).
- **Pela defesa:** conferir se houve intimação válida, se a conduta imputada corresponde à medida concretamente deferida e se a preventiva observa a proporcionalidade — descumprimento presumido não basta.

## Erros comuns e pegadinhas

- **Aplicar o regime da Maria da Penha ao menor** (invocar os arts. 22-24 da Lei 11.340 em vez dos dispositivos próprios da Lei 14.344): erro de fundamento que descredibiliza a peça inteira. E, do mesmo modo, **transportar de memória a numeração da Henry Borel** — os dois diplomas têm arquitetura parecida, mas **numeração distinta**: confirme cada artigo da Lei 14.344 via `lei-e-sumula`.
- **Colher relato informal da criança e transcrevê-lo na peça:** contamina a prova e revitimiza — a oitiva é por depoimento especial (`depoimento-especial-lei-13431`).
- **Errar a competência:** Vara da Infância, Vara de Violência Doméstica e Vara Criminal disputam o tema conforme a organização local — **não afirme de memória**; confira via `jurisprudencia-stj-stf` [NÃO VERIFICADO] e a lei de organização judiciária local.
- **Tratar medida do Conselho Tutelar como se judicial fosse:** afastamento cautelar do agressor e guarda litigiosa são **reserva de jurisdição** — o Conselho requer, o juiz decide.
- **Pedido genérico** ("requer as protetivas cabíveis"): sem rol individualizado, metragem, nomes e a guarda nominada, a decisão sai inexequível.
- **Suspender poder familiar como pedido de rotina:** medida gravíssima; sem proporcionalidade explícita, é alvo fácil da defesa e da instância superior.
- **Esquecer a ciência inequívoca do agressor:** sem ela, a futura imputação do crime de descumprimento fica sem lastro.
- **Expor o nome/endereço da criança nos autos:** segredo de justiça (ECA, art. 143) e LGPD — use **iniciais** e requeira sigilo de localização.
- **Recurso contra o (in)deferimento:** a via (agravo, apelação, RESE) é controvertida pela natureza híbrida da medida — **não afirme de memória**; pesquise via `jurisprudencia-stj-stf` e considere HC/MS ou reiteração com fatos novos.
- **Prazos penais correlatos:** quando incidir contagem de prazo penal (ex.: reação ao descumprimento), lembre que o CPP, art. 798, §1º, **exclui o dia do começo** — explicite quando relevante.

## Antes de protocolar

- [ ] Vínculo doméstico/familiar e forma de violência (dispositivos de definição da Lei 14.344 — nºs confirmados) descritos com fatos, não rótulos?
- [ ] **Risco atual** ao menor materializado (relatório do Conselho, notificação compulsória, laudos, testemunhas)?
- [ ] Fundamento correto invocado — dispositivos da **Lei 14.344** (números confirmados via `lei-e-sumula`), não a Maria da Penha?
- [ ] Rol de medidas **individualizado** (metros, meios, lugares, pessoas, guarda nominada)?
- [ ] Medidas gravíssimas (afastamento do lar, suspensão do poder familiar) com **proporcionalidade** demonstrada?
- [ ] Oitiva da criança encaminhada para **depoimento especial** (Lei 13.431/2017), sem relato informal na peça?
- [ ] Pedido **liminar** e eventual prazo legal para apreciação invocados (dispositivo e prazo — inclusive se são 48h — confirmados via `lei-e-sumula`)?
- [ ] Intimação pessoal do agressor com advertência do **crime de descumprimento** (art. confirmado) requerida?
- [ ] Comunicações ao MP, à polícia e ao **Conselho Tutelar** requeridas?
- [ ] **Segredo de justiça** e iniciais da criança em toda a peça (ECA, art. 143; LGPD)?
- [ ] Redação vigente conferida via `lei-e-sumula`; precedentes via `jurisprudencia-stj-stf` (nada [NÃO VERIFICADO] remanescente)?

## Lembretes finais

- **O eixo é o menor, não a vontade:** a proteção impõe-se pelo melhor interesse — de ofício, se preciso; e não se revoga por "arrependimento" da vítima infantil.
- **Henry Borel ≠ Maria da Penha:** fundamento próprio da Lei 14.344 (numeração distinta da Maria da Penha — confirme cada artigo via `lei-e-sumula`), guarda e poder familiar no centro, Conselho Tutelar na porta de entrada.
- **Reserva de jurisdição:** o Conselho Tutelar requer e protege administrativamente; afastamento cautelar e guarda litigiosa são do juiz.
- **A oitiva é sempre especial:** relato informal da criança contamina a prova e revitimiza — encaminhe ao rito da Lei 13.431/2017.
- **Medida gravíssima pede proporcionalidade:** suspensão do poder familiar sem fundamentação reforçada é ruptura sem contraditório — e alvo da defesa.
- **Descumprimento tem resposta dupla:** crime de descumprimento próprio da lei (art. confirmado) + preventiva, com ciência inequívoca documentada.
- **Toda entrega é rascunho técnico para revisão humana obrigatória** — e toda citação passa pelo gate.

## Apoie-se em

- **BP `defesa-violencia-domestica`** — camada de teses do nicho de violência doméstica (incidência, descumprimento, preventiva, prova) aproveitável, com as adaptações do regime do menor.
- **BP `peticao-criminal`** — estrutura, endereçamento e técnica de requerimento/petição criminal que esta peça segue.
- **Skill `medidas-protetivas-urgencia`** — a peça-irmã da **Lei Maria da Penha** (vítima mulher): distinção obrigatória e base para os pedidos que coexistem quando a mãe também é agredida.
- **Skill `depoimento-especial-lei-13431`** — onde mora a **oitiva protegida** da criança; esta skill remete a ela e não colhe relato informal.
- **Skill `defesa-crimes-sexuais`** — teses de mérito e standard probatório quando o pano de fundo é abuso sexual contra vulnerável.
- **Skill `revogacao-flexibilizacao-protetivas`** — o espelho defensivo: antecipar os argumentos de revogação e blindar a manutenção.
- **Agente `lei-e-sumula`** — **numeração e redação vigentes** dos dispositivos das medidas protetivas da Lei 14.344 (concessão, medidas que obrigam o agressor, medidas em favor do menor, comunicação/apreensão, prazo/cumulação, preventiva e crime de descumprimento) e dos dispositivos do ECA correlatos; consulta **obrigatória** antes de fixar qualquer artigo na peça.
- **Agente `jurisprudencia-stj-stf`** — competência, natureza recursal, aplicação subsidiária e alienação parental × violência; tudo entra como **[NÃO VERIFICADO]** até confirmação.
- **Agente `verificador-citacoes` (gate `verificacao-citacoes`)** — nenhuma súmula, tese ou dispositivo recente vai à peça sem passar pelo gate.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
