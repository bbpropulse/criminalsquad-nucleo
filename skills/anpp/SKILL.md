---
name: anpp
description: >-
  Use ao provocar, negociar ou aderir ao Acordo de Não Persecução Penal (ANPP) — justiça penal
  negocial do art. 28-A do CPP (Lei 13.964/19), regulamentado pela Resolução CNMP 289/2024.
  Gatilhos: ANPP, acordo de não persecução penal, art. 28-A, justiça negocial, justiça penal
  consensual, confissão formal e circunstanciada, pena mínima…. Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, justica-negocial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-anpp"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["anpp"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Acordo de Não Persecução Penal (ANPP — art. 28-A do CPP)

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

Esta skill orienta a atuação da defesa no **Acordo de Não Persecução Penal**: o negócio jurídico pré-processual entre Ministério Público e investigado (assistido por defensor) que, cumpridas condições, **extingue a punibilidade sem denúncia, sem processo e sem reincidência/maus antecedentes**. Cobre o juízo de **cabimento**, os **requisitos negativos**, as **condições**, o **procedimento** (proposta, homologação e controle da recusa) e os **efeitos**, com modelo de manifestação para provocar ou aderir ao acordo.

> **Síntese operacional:** o ANPP é a porta de saída mais vantajosa para o investigado em crime **sem violência ou grave ameaça** e pena mínima **inferior a 4 anos**. Não é favor do MP nem ato discricionário absoluto: presentes os requisitos, há **direito subjetivo a que a proposta seja analisada e fundamentada**, e a recusa imotivada é controlável (art. 28-A, §14). Mas o acordo **exige confissão formal e circunstanciada** — e essa confissão tem riscos concretos (abaixo). A decisão de aceitar é **sempre do cliente**, após consentimento informado.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 28-A do CPP e da **Resolução CNMP 289/2024** (que alterou a Resolução 181/2017, incluindo os arts. 18-A a 18-G), além de súmulas, temas repetitivos e o estágio do julgamento no STF sobre os limites da confissão no ANPP. Toda citação passa pelo gate da best-practice `verificacao-citacoes` antes da entrega.

## Natureza e base legal

- **Natureza jurídica:** instrumento de **justiça penal negocial/consensual**, espécie de negócio jurídico processual de natureza pré-processual. Não é meio de obtenção de prova (distingue-se da colaboração premiada) nem confissão judicial para fins de condenação — é instrumento de **despenalização** e de política criminal.
- **Sede normativa:** **art. 28-A do CPP**, inserido pela **Lei 13.964/2019** (Pacote Anticrime); regulamentação infralegal na **Resolução CNMP 289/2024** (que adequou a Resolução 181/2017 ao Pacote Anticrime).
- **Aplicação no tempo:** o STF reconheceu a **retroatividade** do art. 28-A para alcançar fatos anteriores à Lei 13.964/19, desde que **não transitada em julgado** a condenação (norma de natureza híbrida, mais benéfica). Em processos em curso, a defesa pode **postular o ANPP retroativamente**.

## Cabimento — requisitos positivos (caput do art. 28-A)

O acordo é cabível quando, **não sendo caso de arquivamento**, presentes **cumulativamente**:

| Requisito | Conteúdo | Observação |
|-----------|----------|------------|
| **Confissão** | Confissão **formal e circunstanciada** da prática da infração | Pressuposto do acordo — ver §"Riscos da confissão" |
| **Ausência de violência/grave ameaça** | Infração praticada **sem violência ou grave ameaça à pessoa** | A violência contra a coisa não obsta |
| **Pena mínima** | Pena **mínima cominada inferior a 4 anos** | Aferida na **pena mínima em abstrato** |
| **Necessidade e suficiência** | O acordo deve ser **necessário e suficiente** para reprovação e prevenção do crime | Juízo do MP, fundamentado |

> **Cálculo da pena mínima (art. 28-A, §1º):** para aferir o piso inferior a 4 anos, **somam-se** as causas de **aumento** e diminuição **aplicáveis ao caso concreto**, computando-se as **diminuições na fração máxima** e os **aumentos na fração mínima** (critério mais favorável ao cabimento). Atenção a continuidade delitiva e concurso, que podem elevar ou reduzir o piso.

> **Tese de ampliação:** a pena **mínima** (não a máxima) é o critério legal. Crimes com pena máxima alta mas mínima inferior a 4 anos (ex.: vários patrimoniais e tributários) **comportam** ANPP. Tentativa, arrependimento posterior, privilégio e outras minorantes **rebaixam** o piso e podem **abrir** o cabimento — invocar o §1º.

## Requisitos negativos — quando o ANPP NÃO é cabível (art. 28-A, §2º)

Não se admite o acordo nas hipóteses do **§2º** (rol taxativo de óbices):

| Inciso | Óbice | Tese/observação da defesa |
|--------|-------|---------------------------|
| **I** | Cabível **transação penal** (competência dos Juizados Especiais Criminais) | ANPP é subsidiário à transação nas infrações de menor potencial; se cabe transação, segue-se o rito da Lei 9.099/95 |
| **II** | Investigado **reincidente** ou com elementos de **conduta criminal habitual, reiterada ou profissional** | **Exceção legal:** se as infrações pretéritas forem **insignificantes**, o óbice não incide. Atacar o uso de inquéritos/ações **sem trânsito em julgado** como "habitualidade" (presunção de inocência) |
| **III** | Agente **beneficiado nos 5 anos anteriores** ao fato por **ANPP, transação penal ou suspensão condicional do processo** | Conferir as datas: o marco é o **fato**, não a denúncia. Benefício antigo (> 5 anos) não obsta |
| **IV** | Crime no âmbito de **violência doméstica/familiar** ou contra a **mulher por razões da condição de sexo feminino**, em favor do agressor | Vedação absoluta nesses contextos |

> **Reincidência e "habitualidade" — ponto de litígio:** o inciso II é o mais disputado. A defesa deve sustentar que **inquéritos e ações penais em curso, sem condenação definitiva, não caracterizam** conduta habitual/reiterada/profissional (Súmula 444/STJ, por analogia, e presunção de inocência). E que infrações **insignificantes** estão expressamente ressalvadas. A recusa fundada em "habitualidade" presumida é atacável.

> **Arquivamento prevalece:** o caput condiciona o ANPP a **"não sendo caso de arquivamento"**. Se há causa de arquivamento (atipicidade, ausência de justa causa, prescrição, excludente), a defesa deve **pleitear o arquivamento — mais favorável** — antes de discutir o acordo. Não se "negocia" o que deveria ser arquivado.

## Condições do acordo (art. 28-A, I a V)

Propostas e ajustadas de forma **cumulativa ou alternativa**, devendo ser **proporcionais e compatíveis** com a infração:

| Inciso | Condição | Nota de negociação |
|--------|----------|--------------------|
| **I** | **Reparar o dano** ou restituir a coisa à vítima, **salvo impossibilidade** de fazê-lo | Demonstrar impossibilidade econômica afasta/posterga a exigência |
| **II** | **Renunciar voluntariamente a bens e direitos** indicados pelo MP como instrumentos, produto ou proveito do crime | Discutir a extensão; renúncia deve recair sobre bens **vinculados** ao crime |
| **III** | **Prestar serviço à comunidade** ou a entidades públicas, por período correspondente à pena mínima reduzida de 1/3 a 2/3 | Negociar local, carga horária e compatibilidade com trabalho/estudo |
| **IV** | **Pagar prestação pecuniária** a entidade pública/de interesse social (a ser indicada), nos termos do art. 45 do CP | Negociar valor conforme capacidade econômica; cabe parcelamento |
| **V** | **Cumprir outra condição** indicada pelo MP, desde que **proporcional e compatível** com a infração imputada | Condição atípica deve guardar proporcionalidade — recusar exigência abusiva |

> **A defesa NEGOCIA as condições — não apenas homologa.** O papel do defensor não é aceitar a primeira proposta: é **discutir natureza, extensão e proporcionalidade** das condições, demonstrar capacidade econômica real do cliente (para prestação pecuniária e reparação), pleitear a fração menor de prestação de serviços e afastar condições do inciso V que sejam desproporcionais. Acordo desequilibrado é negociável ou recusável.

## Procedimento (proposta, homologação e controle)

```
1) MP analisa cabimento (caput + §1º) e ausência de óbices (§2º)
        │
        ├── NÃO cabível / causa de arquivamento → arquivamento (mais favorável) OU denúncia
        │
        └── Cabível → MP FORMULA A PROPOSTA por escrito
                 │
                 │  ATO PRIVATIVO DO MP, nas dependências do MP, com
                 │  o investigado SEMPRE assistido por defensor (§3º).
                 │
                 ▼
        Acordo firmado por escrito: membro do MP + investigado + defensor
                 │
                 ▼
        HOMOLOGAÇÃO JUDICIAL em audiência (§4º) — o juiz verifica
        VOLUNTARIEDADE (ouvindo o investigado na presença do defensor)
        e LEGALIDADE
                 │
                 ├── Considera INADEQUADAS/insuficientes/abusivas as condições (§5º)
                 │        → devolve ao MP para REFORMULAR a proposta (com defesa)
                 │
                 ├── RECUSA a homologação (§7º) → autos ao MP para
                 │        analisar a necessidade de complementação da investigação
                 │        ou o oferecimento da denúncia (§8º)
                 │
                 └── HOMOLOGA → execução do acordo; vítima é intimada (§9º)
                          │
                          ├── CUMPRIDO integralmente → extinção da punibilidade (§13)
                          │
                          └── DESCUMPRIDO → MP comunica ao juízo para RESCISÃO
                                   e fica autorizado o OFERECIMENTO DA DENÚNCIA (§10)
```

**Pontos do procedimento (art. 28-A e Resolução CNMP 289/2024):**
- **Proposta é ato privativo do MP (§3º; Res. 289/2024).** A defesa **provoca, requer e negocia**, mas não impõe o acordo. O investigado deve estar **sempre assistido por defensor** em todas as fases.
- **Homologação afere voluntariedade e legalidade (§4º).** O juiz **ouve o investigado**, na presença do defensor, para confirmar que a confissão e a adesão foram **livres** — não é homologação automática.
- **Recusa do MP em propor → controle do art. 28-A, §14.** Se o MP **se recusa a oferecer** o acordo a quem preenche os requisitos, o investigado pode **requerer a remessa dos autos ao órgão superior** do Ministério Público (instância de revisão do art. 28 do CPP — ex.: Câmara de Coordenação e Revisão / Procurador-Geral), que decidirá sobre a propositura. **A recusa sempre deve ser fundamentada** (Res. CNMP 289/2024, art. 18-G).
- **Resolução CNMP 289/2024 — destaques:**
  - **Revogou o limite de valor do dano** patrimonial que a redação anterior fixava como teto para o ANPP — o critério passa a ser o do art. 28-A do CPP.
  - **Art. 18-F:** havendo **descumprimento**, a denúncia poderá usar como suporte probatório a **confissão formal e circunstanciada** prestada na celebração (ponto **controvertido** e impugnável — ver riscos abaixo).
  - **Art. 18-G:** a recusa de propor o ANPP **sempre será fundamentada** e constará dos autos ou da cota da denúncia.

## Efeitos do acordo

| Situação | Efeito | Base |
|----------|--------|------|
| **Cumprimento integral** | **Extinção da punibilidade** declarada pelo juízo | art. 28-A, §13 |
| **Não constar de certidão** | O ANPP cumprido **não consta** de certidão de antecedentes criminais (salvo para o fim do §2º, III — controle do quinquênio) | art. 28-A, §12 |
| **Não gera reincidência** | Por não haver condenação, **não induz reincidência** nem maus antecedentes | decorrência do art. 28-A |
| **Descumprimento** | **Rescisão** do acordo + autorização para **oferecimento da denúncia**; pode justificar a não propositura de eventual suspensão condicional do processo | art. 28-A, §10 e §11 |

> **Vantagem central a comunicar ao cliente:** o ANPP cumprido **extingue a punibilidade sem processo, sem condenação, sem reincidência e sem registro em antecedentes** (art. 28-A, §12 e §13). É, em regra, **muito mais favorável** do que enfrentar a ação penal — desde que o cabimento seja real e a confissão, conscientemente assumida.

## Riscos da confissão (ALERTA OBRIGATÓRIO ao cliente)

A confissão **formal e circunstanciada** é pressuposto do ANPP — e é o ponto que exige **consentimento informado** documentado. Antes de orientar a adesão, alertar o cliente sobre:

1. **Uso da confissão no descumprimento.** Pela Resolução CNMP 289/2024 (art. 18-F), se o acordo for descumprido, a confissão prestada na celebração **pode servir de suporte probatório** à denúncia. A defesa deve **registrar a impugnação** a esse uso (a confissão tem natureza negocial, não probatória; há discussão de constitucionalidade frente à presunção de inocência e à não autoincriminação — STF). Mas o risco **existe e deve ser informado**.
2. **Confissão como prova contra corréus.** O beneficiário pode ser chamado a **prestar declaração em juízo** sobre imputações a corréus (Res. 289/2024, art. 18-D). Avaliar impacto em coautoria.
3. **Renúncia ao contraditório pleno.** Ao aderir, o investigado **abre mão** de discutir autoria/materialidade naquele momento. Se houver **tese absolutória sólida** (atipicidade, negativa de autoria, excludente) ou **causa de arquivamento**, confessar pode ser **pior** do que litigar — pesar o custo-benefício (ver best-practice `justica-negocial`).
4. **Decisão é exclusivamente do cliente.** O defensor **expõe riscos e benefícios**; a escolha de confessar e aceitar é do investigado, por escrito, sem coação (Res. 289/2024; CED, art. 9º — dever de informação realista; nunca garantir resultado).

> **Quando NÃO aderir (ou aderir com cautela):** prova frágil da acusação que recomende a absolvição; causa de arquivamento presente; ilegalidade na prova (cadeia de custódia — ver skill própria) que possa derrubar a imputação; cliente que nega os fatos com lastro. Nesses casos, o ANPP pode **trocar uma provável absolvição por uma confissão e condições** — alertar e deixar a decisão ao cliente.

## Modelo de manifestação (provocar / aderir ao ANPP)

Manifestação **dirigida ao Ministério Público** (a proposta é ato privativo do MP — §3º), com pedido subsidiário de remessa ao órgão superior (§14) em caso de recusa. Adaptar conforme a fase (investigação ou já oferecida a denúncia, hipótese em que se requer ao juízo a abertura de vista ao MP).

```
EXCELENTÍSSIMO(A) SENHOR(A) PROMOTOR(A)/PROCURADOR(A) DE JUSTIÇA
[ou, se já ajuizada a ação: EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO
DA [N]ª VARA CRIMINAL DA COMARCA DE [COMARCA] — UF, para abertura de vista ao MP]

Autos nº [Nº DO INQUÉRITO/PIC/PROCESSO]

[NOME DO INVESTIGADO], já qualificado(a) nos autos em epígrafe, por intermédio
do(a) advogado(a) que ao final subscreve (procuração anexa), vem, com fundamento
no art. 28-A do Código de Processo Penal e na Resolução CNMP nº 289/2024,
respeitosamente, REQUERER A PROPOSITURA DE ACORDO DE NÃO PERSECUÇÃO PENAL,
pelas razões a seguir.

I — DOS FATOS E DO CABIMENTO
O(A) requerente é investigado(a) pela suposta prática do crime de [CRIME],
infração cometida [SEM violência ou grave ameaça à pessoa], cuja pena mínima
cominada é de [PENA MÍNIMA], INFERIOR a 4 (quatro) anos [demonstrar o cálculo do
§1º quando houver causas de aumento/diminuição: aplicando-se as diminuições na
fração máxima e os aumentos na fração mínima, o piso resulta em [VALOR]].
Não é caso de arquivamento [ou, se for: requer-se, primeiramente, o ARQUIVAMENTO
por [CAUSA], mais favorável; subsidiariamente, o ANPP].

II — DO PREENCHIMENTO DOS REQUISITOS (art. 28-A, caput)
a) O(A) requerente está disposto(a) a confessar formal e circunstanciadamente a
   prática da infração, na forma e nos limites do art. 28-A;
b) a infração foi praticada sem violência ou grave ameaça à pessoa;
c) a pena mínima é inferior a 4 anos;
d) o acordo é necessário e suficiente à reprovação e prevenção do crime.

III — DA AUSÊNCIA DE ÓBICES (art. 28-A, §2º)
Não incide nenhuma das vedações do §2º: [I] não é caso de transação penal;
[II] o(a) requerente NÃO é reincidente e não há conduta criminal habitual,
reiterada ou profissional [inquéritos/ações sem trânsito em julgado não
caracterizam habitualidade — presunção de inocência; eventuais infrações
pretéritas são insignificantes]; [III] não foi beneficiado(a), nos 5 anos
anteriores ao fato, por ANPP, transação penal ou suspensão condicional do
processo; [IV] o fato não envolve violência doméstica/familiar ou contra a
mulher por razões da condição de sexo feminino.

IV — DAS CONDIÇÕES PROPOSTAS (art. 28-A, I a V)
O(A) requerente propõe o cumprimento das seguintes condições, proporcionais e
compatíveis com a infração e com sua capacidade econômica: [selecionar/ajustar]
[ ] reparação do dano / restituição da coisa (I) [ou impossibilidade de fazê-lo];
[ ] renúncia a [BENS/DIREITOS vinculados ao crime] (II);
[ ] prestação de serviço à comunidade por [PERÍODO — pena mínima reduzida de 1/3
    a 2/3], em [ENTIDADE], com [CARGA HORÁRIA] compatível com trabalho/estudo (III);
[ ] prestação pecuniária de [VALOR/PARCELAMENTO], conforme capacidade econômica,
    a [ENTIDADE] (IV);
[ ] outra condição proporcional: [DESCREVER] (V).

V — DOS PEDIDOS
Requer-se:
a) a FORMULAÇÃO DE PROPOSTA DE ANPP nos termos acima, designando-se data para a
   formalização do acordo, com a presença do(a) advogado(a);
b) subsidiariamente, NÃO sendo oferecida a proposta a quem preenche os requisitos,
   a REMESSA DOS AUTOS AO ÓRGÃO SUPERIOR do Ministério Público (art. 28-A, §14,
   c/c art. 28 do CPP), para revisão da recusa, que deverá ser fundamentada
   (Res. CNMP 289/2024, art. 18-G).

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [Nº DO INQUÉRITO/PIC/PROCESSO], [NOME DO INVESTIGADO], [CRIME], [PENA MÍNIMA], [VALOR do cálculo §1º], [BENS/DIREITOS], [PERÍODO], [ENTIDADE], [CARGA HORÁRIA], [VALOR/PARCELAMENTO], [COMARCA], [LOCAL], [DATA], [ADVOGADO(A)], [UF], [NÚMERO] OAB.

**Documentos a anexar:** procuração; documentos pessoais; comprovantes da condição econômica (para dimensionar prestação pecuniária e reparação); certidão de antecedentes (demonstra primariedade e ausência de benefício no quinquênio); documentos que demonstrem a ausência de violência/grave ameaça e o enquadramento da pena mínima.

## Checklist de elegibilidade (verificar antes de provocar o acordo)

**Requisitos positivos (caput + §1º):**
- [ ] Infração **sem violência ou grave ameaça à pessoa**?
- [ ] **Pena mínima inferior a 4 anos** (calculada com as causas de aumento na fração mínima e diminuição na máxima — §1º)?
- [ ] **Não** é caso de **arquivamento** (se for, pleitear o arquivamento primeiro)?
- [ ] Cliente **ciente e disposto** a confessar formal e circunstanciadamente, com **consentimento informado** documentado?
- [ ] O acordo é **necessário e suficiente** à reprovação/prevenção (argumentar)?

**Requisitos negativos (§2º):**
- [ ] **Não** é cabível **transação penal** (Juizados) — inciso I?
- [ ] Cliente **não** é reincidente e **não** há conduta habitual/reiterada/profissional (inquéritos/ações sem trânsito **não** contam; insignificantes ressalvados) — inciso II?
- [ ] **Não** houve ANPP/transação/suspensão **nos 5 anos** anteriores ao **fato** — inciso III?
- [ ] **Não** é crime de **violência doméstica/contra a mulher** — inciso IV?

**Condições, riscos e procedimento:**
- [ ] Condições (I a V) **proporcionais** e compatíveis com a **capacidade econômica** do cliente?
- [ ] **Riscos da confissão** explicados (uso no descumprimento — art. 18-F; declaração contra corréus — art. 18-D)?
- [ ] **Tese absolutória/arquivamento** descartada como melhor caminho (custo-benefício — ver `justica-negocial`)?
- [ ] Pedido subsidiário de **remessa ao órgão superior** (§14) incluído para o caso de recusa imotivada?
- [ ] Citações (art. 28-A, Res. 289/2024, súmulas) conferidas via `verificacao-citacoes`?

## Lembretes finais

- **Pena MÍNIMA inferior a 4 anos + sem violência/grave ameaça + confissão** = portas do ANPP. A pena máxima alta **não** afasta o cabimento.
- **§1º favorece o cabimento:** aumentos na fração mínima, diminuições na máxima — usar para rebaixar o piso.
- **Arquivamento prevalece** sobre o acordo — não negocie o que deve ser arquivado.
- **Confissão tem risco** (art. 18-F da Res. 289/2024) — **alertar o cliente** e registrar impugnação ao uso probatório; a decisão de aceitar é **exclusivamente do cliente**.
- **A defesa negocia condições**, não apenas homologa — proporcionalidade e capacidade econômica são os eixos.
- **Recusa imotivada do MP → §14** (remessa ao órgão superior); a recusa **sempre** é fundamentada (Res. 289/2024, art. 18-G).
- **Cumprido → extinção da punibilidade** (§13), sem reincidência e sem antecedentes (§12).
- **Conferir vigência** do art. 28-A e da Resolução CNMP 289/2024, e o estágio do STF sobre a confissão, antes de peticionar — gate `verificacao-citacoes`.
- **Conformidade transversal:** aplicar `etica-oab-sigilo` (sigilo, sem promessa de resultado, consentimento informado) em toda a atuação.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
