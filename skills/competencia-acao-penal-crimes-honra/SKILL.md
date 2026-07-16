---
name: competencia-acao-penal-crimes-honra
description: >-
  Use ANTES de ajuizar/denunciar em crimes contra a honra — decida a ESPÉCIE de ação penal (privada
  é a regra; pública condicionada à representação/requisição nas exceções) e a COMPETÊNCIA/juízo
  (JECRIM até 2 anos; foro pela internet; foro por prerrogativa; conexão). Gatilhos: ação penal
  privada x pública em honra, art. 145 CP, Súmula 714 STF (legitimidade concorrente do funcionário
  público ofendido), requisição do…. Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra, competencia, acao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-competencia-acao-penal-crimes-honra"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["competencia-acao-penal-crimes-honra", "competencia acao", "crimes honra"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Competência e Espécie de Ação Penal nos Crimes contra a Honra (arts. 138-145 CP; art. 145 CP)

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

Esta skill orienta a **decisão de entrada** em crimes contra a honra (**calúnia — art. 138; difamação — art. 139; injúria — art. 140, todos do CP**): **qual a espécie de ação penal** (privada, pública condicionada ou pública mediante requisição) e **qual o juízo competente** (JECRIM, vara comum, foro pela internet, foro por prerrogativa, conexão). É a escolha que condiciona **toda a estratégia** — errar aqui gera ilegitimidade de parte, decadência e nulidade.

> **Lição central:** em honra, a **regra é a ação penal PRIVADA** (queixa-crime do ofendido — art. 145, *caput*, CP). As exceções (pública condicionada ou por requisição) são **taxativas** e vêm no **parágrafo único do art. 145** combinado com o **art. 141 CP**. Antes de qualquer peça, faça três perguntas em ordem: (1) **quem é o ofendido** e **em que qualidade** foi ofendido? (2) **qual a modalidade** (calúnia/difamação/injúria) e **incide alguma majorante do art. 141**? (3) **qual a pena máxima** — cabe JECRIM? Só então se define a peça (queixa x representação) e o juízo.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 138-145 CP e do art. 145, parágrafo único (a **Lei 12.033/2009** tornou a **injúria preconceituosa do art. 140, § 3º** de ação **pública condicionada à representação**). Confira também que a **Lei 14.532/2023** reposicionou a **injúria racial** — hoje há forte controvérsia sobre se a ofensa por raça/cor/etnia/religião/origem migrou para o **crime de racismo (Lei 7.716/89)**, de **ação pública incondicionada e imprescritível**, e não mais para o art. 140, § 3º. Este é ponto **sensível e em evolução**: confirme o enquadramento e a espécie de ação vigentes na fonte oficial e via `jurisprudencia-stj-stf`/`verificacao-citacoes` antes de fundamentar. Confira igualmente prazos e súmulas antes de peticionar.

## Base legal

- **Arts. 138, 139 e 140 do CP** — calúnia, difamação e injúria (os três tipos).
- **Art. 141 do CP** — causas de aumento (contra Presidente da República, chefe de governo estrangeiro; contra funcionário público em razão das funções; na presença de várias pessoas ou por meio que facilite a divulgação; mediante paga; contra maior de 60 anos ou deficiente — conferir incisos e redação vigente).
- **Art. 145 do CP** — **espécie da ação penal em honra** (regra da ação privada + exceções no parágrafo único).
- **Art. 145, parágrafo único, CP + art. 141, I e § único** — hipóteses de **ação pública condicionada à representação** e de **requisição do Ministro da Justiça**.
- **Art. 140, § 3º, CP + art. 145, parágrafo único** (redação da **Lei 12.033/2009**) — **injúria preconceituosa** → **pública condicionada à representação** (observada a controvérsia sobre a Lei 14.532/2023 — ver cautela de vigência).
- **Arts. 38 e 29-31 do CPP** — decadência do direito de queixa/representação (**6 meses**) e legitimidade; **art. 100, § 2º-3º, e art. 103 do CP** — regra da decadência.
- **Arts. 519-523 do CPP** — **procedimento especial dos crimes contra a honra** (rito da queixa, com **audiência de reconciliação** — art. 520).
- **Lei 9.099/95, arts. 60-61 e 88** — **JECRIM** (infrações de menor potencial ofensivo, pena máxima **até 2 anos**) e a representação como condição em certos crimes.
- **CP, art. 4º (lugar do crime — teoria da atividade)** x **CPP, art. 70 (competência pelo lugar da consumação/resultado)** — a tensão que rege a **competência territorial**, sobretudo nos crimes **pela internet**.

## Passo 1 — Definir a ESPÉCIE de ação penal (art. 145 CP)

Percorra as hipóteses **nesta ordem** (a primeira que se aplicar define a espécie):

| Situação do ofendido / do crime | Espécie de ação | Peça / condição |
|---|---|---|
| **Regra geral** (particular ofendido, sem majorante especial) | **PRIVADA** | **Queixa-crime** do ofendido/representante (art. 145, *caput*) |
| **Injúria real** com lesão corporal (art. 140, § 2º) | **Pública** quanto à lesão | Segue a ação da lesão resultante (conferir redação do art. 145) |
| **Injúria preconceituosa** (art. 140, § 3º) | **Pública CONDICIONADA à representação** (Lei 12.033/2009) | Representação do ofendido → denúncia do MP (observar controvérsia da Lei 14.532/2023) |
| **Crime contra funcionário público** em razão das funções (art. 141, na modalidade funcional) | **Pública CONDICIONADA à representação** — **OU** queixa do próprio funcionário (**legitimidade concorrente**, Súmula 714/STF) | Representação ao MP **ou** queixa do ofendido |
| **Crime contra o Presidente da República ou chefe de governo estrangeiro** (art. 141, I) | **Pública mediante REQUISIÇÃO do Ministro da Justiça** (art. 145, parágrafo único) | Requisição → denúncia do MP |
| **Ofensa por raça/cor/etnia/religião/origem** (após Lei 14.532/2023) | **Controvertida** — pode configurar **racismo** (Lei 7.716/89), **pública INCONDICIONADA** e **imprescritível** | **Confirmar enquadramento e espécie vigentes** antes de agir (`jurisprudencia-stj-stf`) |

> **Súmula 714/STF (notória — legitimidade concorrente):** "É concorrente a legitimidade do ofendido, mediante queixa, e do Ministério Público, condicionada à representação do ofendido, para a ação penal por crime contra a honra de servidor público em razão do exercício de suas funções." Ou seja, quando a ofensa atinge o **funcionário público em razão das funções**, o ofendido **pode optar**: **queixa-crime** (ação privada) **ou** **representação** ao MP (ação pública condicionada) — as duas vias são legítimas, mas **não cumulativas** (a escolha de uma implica a renúncia à outra; atenção à **preclusão**).

> **Requisição do Ministro da Justiça** (art. 145, parágrafo único, c/c art. 141, I): é **condição de procedibilidade** — sem ela o MP não pode denunciar por ofensa ao Presidente da República ou a chefe de governo estrangeiro. Não confundir **requisição** (ato político-administrativo, condição da ação pública) com **representação** (manifestação de vontade do ofendido).

## Passo 2 — Verificar o PRAZO (decadência)

- **Ação privada (queixa):** o direito decai em **6 meses** contados do dia em que o ofendido **soube quem é o autor** do crime (art. 38 CPP; art. 103 CP). Prazo **decadencial** — não se interrompe nem se suspende; perdê-lo **extingue a punibilidade** (art. 107, IV, CP).
- **Ação pública condicionada (representação):** a **representação** também se sujeita ao prazo **decadencial de 6 meses** (art. 38 CPP).
- **Contagem:** decadência é prazo de **direito material** — conta-se **incluindo o dia do começo** (art. 10 CP), diferentemente dos prazos processuais. **Confirme a data-base (ciência da autoria) no caso concreto**; para o cômputo, ver a skill de tempestividade/calculadora quando aplicável.

> ⚠️ Erro fatal recorrente: ajuizar **queixa** de crime que era de **ação pública condicionada** (ou vice-versa) e deixar **decair** o prazo da via correta. Definir a espécie **certa** no Passo 1 é o que protege o prazo.

## Passo 3 — Definir a COMPETÊNCIA / juízo

### 3.1. JECRIM ou vara comum? (pena máxima)

- **Calúnia** (art. 138): pena de detenção de 6 meses a 2 anos, e multa → **cabe JECRIM** (máx. 2 anos).
- **Difamação** (art. 139): detenção de 3 meses a 1 ano, e multa → **JECRIM**.
- **Injúria** (art. 140): detenção de 1 a 6 meses, ou multa → **JECRIM**.
- **Com majorantes do art. 141** (aumento de 1/3, ou em dobro se mediante paga): recalcular a **pena máxima em abstrato** com o acréscimo — se ultrapassar **2 anos**, **desloca-se para a vara comum** (deixa de ser infração de menor potencial ofensivo). **Confirme os patamares e a redação vigente** antes de fixar a competência.
- **Injúria racial / racismo:** se enquadrada na **Lei 7.716/89**, **não** é de menor potencial ofensivo → **vara criminal comum**, ação pública incondicionada.

### 3.2. Competência territorial (foro)

- **Regra geral (CPP, art. 70):** competente o foro do **lugar da consumação**. Nos crimes contra a honra, a consumação em regra se dá **onde a ofensa chega ao conhecimento de terceiros** (difamação/calúnia) ou **do próprio ofendido** (injúria).
- **Honra pela internet (redes sociais, e-mail, mensagens):** ponto **controvertido**. Discute-se entre o foro do **local de onde partiu a publicação** (teoria da atividade) e o do **local do resultado** (onde o conteúdo foi acessado/o ofendido tomou ciência). **Não afirme um foro como pacífico** — a orientação varia e evolui; **confirme o entendimento atual** (STJ/CC) via `jurisprudencia-stj-stf` e, na queixa/denúncia, **fundamente a escolha** do foro e esteja pronto para o conflito de competência.
- **Domicílio do ofendido (ação privada) — CPP, art. 73:** na **ação exclusivamente privada**, o querelante **pode preferir** o foro de **domicílio ou residência do réu**, ainda que conhecido o lugar da infração (opção legal do querelante — conferir alcance).

### 3.3. Foro por prerrogativa de função e conexão

- Se **querelante ou querelado** detém **foro por prerrogativa** (autoridade com prerrogativa constitucional), a competência **desloca-se** para o tribunal respectivo. **Confirme se a prerrogativa alcança o fato** (relação com o exercício do cargo — orientação restritiva a partir de precedentes do STF sobre o tema; **verifique o estado atual** via `jurisprudencia-stj-stf`).
- **Conexão/continência (CPP, arts. 76-82):** se a ofensa à honra conecta-se a crime de ação pública de competência diversa (ex.: junto a ameaça, no bojo de violência doméstica), avaliar reunião de processos e o **foro prevalente** — e o impacto na **espécie de ação** de cada crime.

## Teses e contra-teses (foco: quem responde à honra — DEFESA do querelado)

Esta skill é majoritariamente de **defesa técnica do querelado/denunciado**. Teses preliminares e de mérito típicas:

1. **Ilegitimidade ativa / erro de espécie de ação** — queixa em crime de ação pública (ou representação onde cabia queixa privada): arguir **rejeição da queixa** (art. 395 CPP) por **ilegitimidade de parte**.
2. **Decadência** — mais de 6 meses da ciência da autoria (art. 38 CPP; art. 103 CP): **extinção da punibilidade** (art. 107, IV, CP).
3. **Renúncia / perdão / perempção** (ações privadas) — renúncia tácita (ex.: convite/relacionamento posterior), perempção por inércia do querelante (art. 60 CPP), perdão aceito (arts. 105-106 CP). **Vigiar a perempção** — muito comum na prática da queixa.
4. **Incompetência do juízo** — foro errado (territorial/internet) ou JECRIM x vara comum: exceção de incompetência (arts. 108 e 95, II, CPP).
5. **Falta de justa causa / atipicidade** — ofensa genérica, crítica, *animus criticandi/narrandi/jocandi/defendendi* (ausência de dolo específico de ofender); imunidade judiciária (art. 142 CP) para ofensa em juízo/discussão da causa; imunidade parlamentar (CF, art. 53) quando cabível.
6. **Exceção da verdade** (calúnia — art. 138, § 3º; difamação de funcionário público — art. 139, parágrafo único): quando admitida, prova da verdade do fato imputado afasta o crime — atenção às **vedações** e ao **procedimento** (arts. 523 CPP).
7. **Ausência de representação/requisição** (nas públicas condicionadas / por requisição) — condição de procedibilidade não satisfeita → **rejeição**.

> **Contra-teses (polo ativo — querelante/assistente/MP):** legitimidade concorrente (Súmula 714) preserva a via escolhida; a ciência **inequívoca** da autoria (marco da decadência) exige **prova da data**, não presunção; nos crimes pela internet, sustentar o foro do **resultado** (local de acesso/ciência) quando favorável à vítima; afastar *animus* jocandi/criticandi demonstrando o **dolo de ofender** no contexto.

## Rito e peça (após decidida a espécie)

- **Ação privada → queixa-crime:** segue o **procedimento dos arts. 519-523 CPP**, com **audiência de reconciliação (art. 520)** antes do recebimento — o juiz ouve as partes buscando conciliação; havendo, extingue-se a punibilidade pela **renúncia**. **A redação da peça propriamente dita é objeto da skill `queixa-crime`** (esta skill decide *se* e *onde* se ajuíza; aquela redige a peça).
- **Ação pública condicionada → representação:** peça-manifestação do ofendido dirigida à autoridade (delegado/MP), dentro dos 6 meses; a denúncia é do MP.
- **JECRIM:** observar a fase preliminar (composição civil, transação penal — Lei 9.099/95) quando a infração for de menor potencial ofensivo.

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 714/STF** (notória) — **legitimidade concorrente** do ofendido (queixa) e do MP (mediante representação) em crime contra a honra de **servidor público em razão das funções**. *Citável com segurança; confirmar redação.*
- **Súmula 594/STF** [NÃO VERIFICADO — confirmar número/teor e vigência] — sobre os prazos/legitimados na ação privada em honra: **não citar sem verificação** via `jurisprudencia-stj-stf`.
- **Conflitos de competência do STJ sobre honra pela internet** (foro do local de publicação x do resultado) — **[NÃO VERIFICADO]**: não indicar número de CC/tema sem conferência; **prefira ensinar a tese** (art. 70 CPP + teoria da atividade x resultado) a arriscar um acórdão.
- **Precedentes STF sobre alcance da injúria racial após a Lei 14.532/2023** e sobre **imprescritibilidade/racismo** — **[NÃO VERIFICADO]**: matéria em evolução; confirmar o estado atual antes de afirmar migração para a Lei 7.716/89.
- Regra de ouro: **cite o dispositivo de lei e a súmula notória com certeza; para qualquer número de HC/REsp/RE, informativo ou tema, marque [NÃO VERIFICADO] e confira** via `jurisprudencia-stj-stf` / `verificacao-citacoes`. Omitir vence inventar.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Ajuizar **queixa** onde a ação era **pública condicionada** (funcionário público que optou pela via do MP, ou injúria preconceituosa) — e vice-versa.
- Ignorar a **legitimidade concorrente** (Súmula 714) e tratar como exclusiva uma das vias.
- Confundir **representação** (vontade do ofendido) com **requisição do Ministro da Justiça** (condição da ação por ofensa ao Presidente/chefe de governo estrangeiro).
- Deixar **decair** o prazo de 6 meses por indefinição da espécie de ação.
- Afirmar um **foro pela internet** como pacífico — a competência territorial é controvertida; fundamentar e conferir.
- Enquadrar automaticamente ofensa racial no **art. 140, § 3º**, ignorando a controvérsia pós-Lei 14.532/2023 (possível **racismo**, ação pública incondicionada e imprescritível).
- Esquecer a **audiência de reconciliação (art. 520 CPP)** no rito da queixa.
- Não recalcular a **pena máxima com a majorante do art. 141** ao definir JECRIM x vara comum.

**Checklist de decisão de entrada:**
- [ ] Identificado **quem** é o ofendido e **em que qualidade** (particular? funcionário público em razão das funções? Presidente/chefe estrangeiro?)?
- [ ] Definida a **modalidade** (calúnia/difamação/injúria) e verificadas as **majorantes do art. 141**?
- [ ] Definida a **espécie de ação** (privada / pública condicionada / por requisição) pela ordem do art. 145?
- [ ] Verificada a **Súmula 714/STF** quando o ofendido é funcionário público (via concorrente)?
- [ ] Ofensa racial checada quanto à **controvérsia pós-Lei 14.532/2023** (injúria preconceituosa x racismo)?
- [ ] **Prazo de 6 meses** (decadência — art. 38 CPP) apurado a partir da **ciência da autoria**?
- [ ] Competência: **JECRIM x vara comum** (pena máxima, incluída majorante) e **foro territorial** (art. 70/73 CPP; internet) definidos e fundamentados?
- [ ] **Foro por prerrogativa** e **conexão** verificados?
- [ ] Decidida a **peça** (queixa → skill `queixa-crime`; ou representação) e o **rito** (arts. 519-523 CPP; JECRIM)?
- [ ] Toda súmula/precedente específico passou por `jurisprudencia-stj-stf` / `verificacao-citacoes`?

## Skills relacionadas

- `queixa-crime` — **redige a peça** da ação privada (esta skill decide *se/qual/onde*; aquela redige).
- `defesa-crimes-contra-honra` (nicho de honra) — teses de mérito da defesa por tipo penal.
- `excecoes-processuais` — incidentes gerais (incompetência, ilegitimidade, litispendência).
- `jurisprudencia-stj-stf` / `verificacao-citacoes` — **gate obrigatório** para qualquer precedente/súmula específico.
- `calculadora-tempestividade` — auxílio no cômputo do prazo decadencial [confirmar aplicabilidade a prazo de direito material].

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta skill apoia a **decisão de entrada** (espécie de ação + competência); a definição final e a peça são de responsabilidade do **advogado** (ou do órgão legitimado).
- **Ética por polo:** advocacia — **OAB/EAOAB + Provimento 205/2021** (verificar **conflito de interesses**, art. 17 EAOAB, antes de aceitar o caso, sobretudo em honra entre partes conhecidas); Ministério Público — **CNMP** e legislação orgânica; Defensoria — **LC 80/94**. **Confira o polo do usuário** no perfil da instituição (`company.md`) — esta skill serve tanto à **defesa do querelado** (foco majoritário) quanto ao **polo ativo** (querelante/assistente/MP na via pública condicionada); o roteador deve confirmar o polo antes de orientar a peça.
- **Citation Gate:** nenhuma súmula, tema ou acórdão citado de memória; dispositivos de lei e súmulas notórias, com certeza; o resto, **[NÃO VERIFICADO]** até conferência.
- **Padrão de redação:** ao redigir a peça correspondente, aplique também `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita e coesão (a régua de obra-prima que a revisão cobra).
