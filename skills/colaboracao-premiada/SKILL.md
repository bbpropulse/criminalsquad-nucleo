---
name: colaboracao-premiada
description: >-
  Use ao avaliar ou instruir colaboração premiada (delação) — negócio jurídico processual entre
  colaborador e MP/autoridade policial (Lei 12.850/2013, arts. 3º-A a 7º, com a redação do Pacote
  Anticrime). Gatilhos: colaboração premiada, delação, delação premiada, Lei 12.850, organização
  criminosa, art. 4º, acordo de colaboração, anexos da colaboração, perdão…. Não use para decisão
  final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, justica-negocial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-colaboracao-premiada"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["colaboracao-premiada", "colaboracao premiada"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Colaboração Premiada (Lei 12.850/2013, arts. 3º-A a 7º)

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

Esta skill orienta a **avaliação de cabimento e a instrução técnica** de uma colaboração premiada — o acordo pelo qual um investigado/acusado coopera **efetivamente** com a persecução penal e, em troca, recebe benefícios legais (perdão judicial, redução de pena, substituição, progressão diferenciada). É o instituto negocial **mais grave em consequências** do direito penal brasileiro: muda a vida do cliente, expõe-no a riscos reais e é **irretratável** depois de cumprido. Não se redige um acordo por impulso.

> **Síntese operacional:** a colaboração só vale se for **eficaz** — não basta confessar nem "querer colaborar". A lei exige **resultados concretos** (art. 4º, I-V). E só vale se for **voluntária e assistida por defensor** (art. 4º, §15). Faltando eficácia, não há benefício; faltando voluntariedade ou defesa técnica, o acordo é **nulo**. A decisão de colaborar é **sempre e exclusivamente do cliente**, com consentimento informado dos riscos.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 13.964/2019 (Pacote Anticrime) reescreveu o regime — incluiu o **art. 3º-A** (natureza de negócio jurídico processual), detalhou o procedimento (art. 4º, §§7º a 7º-B) e os direitos do colaborador (art. 5º). Confira a redação vigente da Lei 12.850/2013 e a jurisprudência do STF (HC 127.483; HC 142.205; Pet 7.074) e do STJ via a best-practice `verificacao-citacoes` e o subagente `jurisprudencia-stj-stf` antes de fundamentar.

## Natureza jurídica — negócio jurídico processual (art. 3º-A)

- **Meio de obtenção de prova** (não é meio de prova em si): o que vale como prova são os **elementos** que a colaboração permite obter (documentos, corroborações), não a palavra do colaborador isoladamente.
- **Negócio jurídico processual personalíssimo** (art. 3º-A, incluído pela Lei 13.964/2019): acordo bilateral entre o colaborador (assistido por defensor) e o MP ou o Delegado de Polícia, sujeito a **homologação judicial**. O juiz **não negocia** o conteúdo (art. 4º, §6º) — controla legalidade, regularidade, voluntariedade e adequação dos benefícios (art. 4º, §7º).
- **Regra de corroboração (art. 4º, §16):** nenhuma medida cautelar, recebimento de denúncia, sentença ou pronúncia pode fundar-se **exclusivamente** nas declarações do colaborador. Exige-se **lastro externo** (provas de corroboração). Essa é a principal blindagem do delatado — e tese central da defesa de quem é apontado por delator.

## Requisitos de eficácia — os resultados (art. 4º, I-V)

A colaboração só gera benefício se, dela, **resultar efetivamente** uma ou mais das hipóteses abaixo. É o coração do instituto: **eficácia objetiva**, aferida pelos resultados, não pela intenção.

| Inciso | Resultado exigido | O que demonstrar |
|--------|-------------------|------------------|
| **I** | **Identificação dos demais coautores e partícipes** e das infrações por eles praticadas | nomes, condutas, ligação com os fatos — não basta "todo mundo participou" |
| **II** | **Revelação da estrutura hierárquica e da divisão de tarefas** da organização criminosa | organograma, papéis, cadeia de comando |
| **III** | **Prevenção de infrações** decorrentes da atividade da organização | impedir crime futuro concreto, não risco genérico |
| **IV** | **Recuperação total ou parcial do produto/proveito** das infrações | localização e devolução de bens/valores |
| **V** | **Localização de eventual vítima com integridade física preservada** | sobretudo em extorsão mediante sequestro |

> **Eficácia é condição do benefício, não da validade do acordo.** Pode-se firmar e homologar o acordo antes da entrega dos resultados; mas o **benefício prometido só se concretiza** se a colaboração for efetiva (art. 4º, *caput* e §1º). Por isso o termo prevê **cláusulas de eficácia** e o MP afere o cumprimento ao final. Colaboração que não produz resultado não obriga o Estado ao prêmio.

## Benefícios possíveis (art. 4º, caput e §§2º, 4º, 5º)

A intensidade do benefício é proporcional à **relevância e à eficácia** da colaboração e ao momento em que ocorre. Não há "tabela fixa" — é negociado e fundamentado.

| Benefício | Base | Condições principais |
|-----------|------|----------------------|
| **Perdão judicial** (extingue a punibilidade) | art. 4º, *caput* e §2º | colaboração de máxima eficácia; pode ser requerido pelo MP a qualquer tempo (§2º) mesmo sem previsão inicial no termo |
| **Redução da pena em até 2/3** | art. 4º, *caput* | na sentença, conforme a eficácia |
| **Substituição por restritivas de direitos** | art. 4º, *caput* | quando a pena e os requisitos do CP 44 permitirem |
| **Redução até 1/2 ou progressão diferenciada** (colaboração POSTERIOR à sentença) | art. 4º, §5º | se a colaboração vem **depois** da sentença, o teto de redução cai para metade ou admite-se progressão de regime ainda que ausentes os requisitos objetivos |
| **Não oferecimento de denúncia** (espécie de imunidade) | art. 4º, §4º | só se o colaborador **não for o líder** da organização **e** for o **primeiro** a colaborar efetivamente |

> **Teto e proporcionalidade:** quanto mais cedo e mais eficaz a colaboração, maior o benefício possível. A redução de até 2/3 (art. 4º) não se confunde com a redução de 1/3 a 2/3 do art. 41 da Lei 11.343/06 (delação no tráfico), nem com a do art. 159, §4º, CP (sequestro), nem com a colaboração espontânea da Lei 9.613/98, art. 1º, §5º (lavagem — ver skill `defesa-lavagem-capitais`) — **conferir o regime aplicável ao crime concreto**.

## Requisitos de validade — voluntariedade e defesa técnica (art. 4º, §15)

Distintos da eficácia. Sem eles o acordo é **inválido**, independentemente do resultado:

1. **Voluntariedade** (art. 4º, *caput* e §7º, I): manifestação **livre**, sem coação, sem promessa indevida, sem indução. Voluntário ≠ espontâneo — pode ser provocado por proposta, mas a adesão tem de ser livre. Colaboração obtida sob pressão (ex.: para cessar prisão ilegal) é viciada.
2. **Assistência de defensor em todos os atos** (art. 4º, §15): o colaborador deve estar assistido por advogado **em todas as fases** da negociação e da formalização. A presença é **indispensável** — sua ausência **nula** o ato (entendimento STF).
3. **Capacidade e informação:** o colaborador deve compreender o alcance, os riscos e a renúncia ao silêncio quanto aos fatos da colaboração (art. 4º, §14 — renúncia ao direito ao silêncio e compromisso de dizer a verdade, sob assistência de defensor).

> **Controle judicial na homologação (art. 4º, §7º):** o juiz verifica **regularidade, legalidade, voluntariedade e adequação dos benefícios** — e pode **recusar** a homologação ou **adequar** o acordo se algum requisito não estiver presente (§8º). O juiz **não** participa da negociação (§6º) — sob pena de comprometer a imparcialidade.

## Procedimento (art. 4º, §§7º a 9º; art. 6º)

```
1. NEGOCIAÇÃO (sigilosa)
   colaborador + defensor  ⇄  MP (ou Delegado, com manifestação do MP — art. 4º, §2º e §6º)
   define benefícios, resultados esperados e obrigações.

2. TERMO ESCRITO (art. 6º — requisitos formais)
   relato da colaboração + resultados; benefícios; assinaturas (colaborador,
   defensor, MP/Delegado); especificação das medidas de proteção, se houver.

3. ANEXOS
   cada fato/linha de colaboração em anexo próprio, com elementos de corroboração.

4. REMESSA AO JUIZ (art. 4º, §7º)  — prazo de 48h para distribuição (na prática)
   sigilo (art. 7º): autuação apartada e sigilosa até o recebimento da denúncia.

5. HOMOLOGAÇÃO (art. 4º, §7º e §7º-A)
   juiz analisa regularidade/legalidade/voluntariedade; pode ouvir o colaborador
   sigilosamente (§7º); homologa, recusa (§8º) ou devolve para adequação.

6. EXECUÇÃO E AFERIÇÃO DA EFICÁCIA
   colaborador cumpre; ao final, o MP afere os resultados (art. 4º, I-V) e o
   benefício é concedido na sentença (ou antes, perdão/§2º; não-denúncia/§4º).
```

> **Sigilo (art. 7º):** o pedido e o acordo são **sigilosos**; o acesso aos autos é restrito ao juiz, ao MP e ao delegado, como forma de garantir a proteção do colaborador e a eficácia das diligências. O sigilo **cessa** com o recebimento da denúncia (art. 7º, §3º). O delatado tem direito de acesso aos elementos que o incriminam **após** formalizada a delação (Súmula Vinculante 14, no que couber; HC 127.483/STF).

## Direitos do colaborador (art. 5º)

```
I    usufruir das medidas de proteção previstas na legislação específica;
II   ter nome, qualificação, imagem e demais informações pessoais preservados;
III  ser conduzido, em juízo, separadamente dos demais coautores e partícipes;
IV   participar das audiências sem contato visual com os outros acusados;
V    não ter sua identidade revelada pelos meios de comunicação, nem ser
     fotografado/filmado sem sua prévia autorização por escrito;
VI   cumprir pena/prisão cautelar em estabelecimento diverso dos demais
     corréus ou condenados.
```

> Os direitos de proteção são **operacionais** e devem ser **pleiteados expressamente** no termo e perante o juízo. A retratação da proposta (art. 4º, §10) pelas partes faz com que as provas autoincriminatórias **não possam ser usadas exclusivamente** contra o colaborador. As declarações não podem fundamentar condenação de terceiros isoladamente (art. 4º, §16 — corroboração).

## Cabimento — não se restringe à organização criminosa

Embora a sede seja a Lei 12.850/2013 (organização criminosa), o **STJ admite a colaboração premiada como instituto de aplicação ampla** em crimes praticados em **concurso de agentes**, ainda que não haja organização criminosa formalmente caracterizada. A colaboração é técnica de obtenção de prova compatível com o sistema, e o art. 3º-A consolidou sua natureza geral.

> **Tese de cabimento:** havendo **pluralidade de agentes** e possibilidade de o colaborador entregar resultados úteis (coautores, produto, prevenção), a colaboração é cabível mesmo fora do tipo do art. 2º da Lei 12.850 — **conferir o entendimento atual via `jurisprudencia-stj-stf`** antes de afirmar, pois há nuances por crime e por tribunal.

> **Distinção de outros institutos negociais** (não confundir): a colaboração **não** é ANPP (art. 28-A, CPP), nem transação penal (Lei 9.099/95), nem suspensão condicional do processo. Aqueles dispensam ou suspendem a ação por crimes de menor/médio potencial **sem exigir delação de terceiros**; a colaboração exige **eficácia probatória contra a organização/coautores** e vem acompanhada de **confissão**. Para escolher qual cabe, ver o subagente `negociacao-penal`.

## Modelo — estrutura do termo de acordo e dos anexos

> Modelo **estrutural** (esqueleto), não peça pronta. Os termos de colaboração são negociados caso a caso com o MP; o conteúdo concreto depende dos fatos e dos resultados a entregar. Preencher os campos `[ ]` e **submeter à revisão humana** e ao gate `verificacao-citacoes`.

```
TERMO DE ACORDO DE COLABORAÇÃO PREMIADA
(Lei nº 12.850/2013, arts. 3º-A, 4º e 6º)

PARTES:
  COLABORADOR(A): [NOME, QUALIFICAÇÃO COMPLETA], assistido(a) por seu(sua)
  defensor(a) [NOME, OAB/UF nº], e o MINISTÉRIO PÚBLICO [do Estado de / Federal],
  pelo(a) [PROMOTOR(A)/PROCURADOR(A)] [NOME].
  [Se na fase policial: com a participação da Autoridade Policial [NOME] e
   manifestação do MP — art. 4º, §2º e §6º.]

CLÁUSULA 1ª — OBJETO E VOLUNTARIEDADE (art. 4º, caput e §15)
  O(A) colaborador(a), de forma livre, consciente e VOLUNTÁRIA, assistido(a)
  por defensor(a) em todos os atos, compromete-se a colaborar efetivamente com a
  investigação e o processo criminal, renunciando, quanto aos fatos objeto deste
  acordo, ao direito ao silêncio e firmando o compromisso legal de dizer a verdade
  (art. 4º, §14).

CLÁUSULA 2ª — DOS RESULTADOS DA COLABORAÇÃO (art. 4º, I a V)
  A colaboração destina-se a produzir um ou mais dos seguintes resultados,
  detalhados nos ANEXOS:
  ( ) I  — identificação de coautores/partícipes e das infrações [ANEXO __];
  ( ) II — revelação da estrutura e divisão de tarefas da organização [ANEXO __];
  ( ) III— prevenção de infração penal: [DESCREVER] [ANEXO __];
  ( ) IV — recuperação de produto/proveito: [BENS/VALORES] [ANEXO __];
  ( ) V  — localização de vítima com integridade preservada [ANEXO __].

CLÁUSULA 3ª — DOS BENEFÍCIOS (art. 4º, caput, §§2º, 4º e 5º)
  Verificada a EFICÁCIA da colaboração, o MP promoverá/postulará:
  [ ] perdão judicial (art. 4º, §2º); [ ] redução da pena em até 2/3;
  [ ] substituição por restritivas (CP 44); [ ] não oferecimento de denúncia
  (art. 4º, §4º — colaborador não líder e primeiro a colaborar);
  [ ] (colaboração pós-sentença) redução até 1/2 ou progressão (art. 4º, §5º).
  Parâmetro: a extensão do benefício é proporcional à relevância e à eficácia.

CLÁUSULA 4ª — OBRIGAÇÕES DO COLABORADOR
  Dizer a verdade; comparecer aos atos; entregar documentos/elementos de
  corroboração; não praticar nova infração; [demais obrigações negociadas].

CLÁUSULA 5ª — MEDIDAS DE PROTEÇÃO E DIREITOS (art. 5º)
  Asseguram-se: preservação de identidade/imagem (II, V); condução e oitiva
  separadas (III, IV); estabelecimento diverso (VI); [inclusão em programa de
  proteção, se o caso — I].

CLÁUSULA 6ª — EFICÁCIA, RESCISÃO E RETRATAÇÃO (art. 4º, §§10, 17 e 18)
  O descumprimento ou a prestação de informação falsa autoriza a rescisão e a
  perda dos benefícios. Em caso de retratação (§10), as provas autoincriminatórias
  não serão usadas exclusivamente contra o(a) colaborador(a). As declarações não
  fundamentam condenação de terceiros sem corroboração (art. 4º, §16).

CLÁUSULA 7ª — SIGILO (art. 7º)
  O presente acordo e seus anexos tramitam sob sigilo, em autos apartados, até o
  recebimento da denúncia.

CLÁUSULA 8ª — HOMOLOGAÇÃO (art. 4º, §7º)
  As partes submetem este acordo à homologação judicial, para controle de
  regularidade, legalidade e voluntariedade.

[LOCAL], [DATA].
  ____________________________   ____________________________
  Colaborador(a)                 Defensor(a) — OAB/[UF] nº
  ____________________________
  Ministério Público [/ Autoridade Policial]

------------------------------------------------------------------
ANEXO Nº __ — [FATO/LINHA DE COLABORAÇÃO]
  1. Narrativa do fato (quem, quando, onde, como).
  2. Pessoas envolvidas e respectivas condutas.
  3. ELEMENTOS DE CORROBORAÇÃO (art. 4º, §16): documentos, registros,
     localização de bens, indicação de testemunhas/provas que confirmem o relato.
  4. Resultado pretendido (art. 4º, inciso __).
```

**Documentos/instrução a reunir:** procuração com poderes específicos; comprovação da assistência do defensor em cada ato; elementos de corroboração de cada anexo; eventual pedido de medidas de proteção; comprovação do momento da colaboração (antes/depois da denúncia/sentença, p/ definir o teto do benefício).

## Checklist de conveniência (decisão do cliente — consentimento informado)

A pergunta não é apenas "cabe?", mas "**convém ao cliente?**". Esta análise é insumo para a **decisão informada do cliente**, nunca uma recomendação de delatar.

**Cabimento e eficácia:**
- [ ] O cliente tem **resultados reais** a entregar (art. 4º, I-V) — coautores, estrutura, produto, prevenção, vítima? Sem resultado, **não há benefício**.
- [ ] Há **elementos de corroboração** (art. 4º, §16) para cada linha de colaboração? Delação sem lastro não sustenta benefício nem condena terceiros.
- [ ] O crime/contexto admite colaboração (organização **ou** concurso de agentes — conferir `jurisprudencia-stj-stf`)?

**Custo-benefício para o cliente (trade-offs — explicitar TODOS):**
- [ ] **Confissão é irreversível na prática:** o cliente assume os fatos e renuncia ao silêncio sobre eles (art. 4º, §14). Se o acordo ruir por ineficácia, a posição defensiva já foi comprometida.
- [ ] **Risco à integridade** do cliente e da família (retaliação) — medidas de proteção (art. 5º) mitigam, não eliminam.
- [ ] **Exposição e estigma** mesmo com benefício; relações pessoais/profissionais afetadas.
- [ ] **Benefício é incerto até a aferição da eficácia** — o prêmio depende do resultado, não da adesão.
- [ ] Existe **alternativa menos gravosa** (ANPP, absolvição por fragilidade da prova, prescrição, nulidade)? Comparar com o subagente `negociacao-penal` e a análise de `analise-denuncia` **antes** de cogitar delatar.
- [ ] O **momento** é o mais vantajoso? Colaboração mais cedo → benefício maior (e a vaga de "primeiro a colaborar", art. 4º, §4º, pode ser ocupada por corréu).

**Validade (sob pena de nulidade):**
- [ ] **Voluntariedade** real — sem coação, sem prisão como instrumento de pressão?
- [ ] **Defensor presente em todos os atos** (art. 4º, §15)?
- [ ] Cliente **compreendeu** alcance, riscos e renúncias (consentimento informado documentado)?

## Lembretes finais

- **Eficácia × validade são planos distintos:** resultado concreto (art. 4º, I-V) gera o **benefício**; voluntariedade + defensor (art. 4º, §15) garantem a **validade**. Faltando o primeiro, não há prêmio; faltando o segundo, o acordo é nulo.
- **A decisão de colaborar é SEMPRE do cliente**, com consentimento informado dos riscos. O papel técnico é expor cabimento, benefícios e trade-offs — **nunca pressionar a delatar**.
- **Confissão e delação têm consequências graves e de difícil reversão** — esgotar antes as alternativas (fragilidade da prova, ANPP, nulidade, prescrição) com `negociacao-penal` e `analise-denuncia`.
- **Corroboração é obrigatória (art. 4º, §16):** nada se decide só pela palavra do colaborador — e essa é a principal defesa de quem é delatado.
- **Juiz não negocia (art. 4º, §6º)** — apenas homologa, controlando legalidade, voluntariedade e adequação dos benefícios (§7º/§8º).
- **Cabimento amplo (concurso de agentes), não só organização criminosa** — mas confirmar o entendimento atual antes de afirmar.
- **Conferir vigência** da Lei 12.850/2013 (redação do Pacote Anticrime) e validar toda jurisprudência (HC 127.483, HC 142.205, Pet 7.074 STF e STJ) via `verificacao-citacoes` + `jurisprudencia-stj-stf` antes de qualquer peça.
- **Revisão humana obrigatória:** nenhum termo, anexo ou parecer de colaboração sai sem o(a) advogado(a) responsável conferir fatos, riscos e citações.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
