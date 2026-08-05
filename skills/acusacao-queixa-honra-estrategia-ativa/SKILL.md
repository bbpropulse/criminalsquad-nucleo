---
name: acusacao-queixa-honra-estrategia-ativa
description: >-
  Use para analisar acusacao queixa honra estrategia ativa: POLO ATIVO (querelante/assistente). Use
  ao montar a ESTRATÉGIA acusatória da ação penal por crimes contra a honra — capitulação correta
  (calúnia/difamação/injúria, arts. 138-140 CP), prova do fato e do animus de ofender (dolo
  específico), blindagem contra atipicidade e imunidades (art. 142 CP), antecipação da exceção da
  verdade (art. 523 CPP), aumentos do… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra, acusacao, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acusacao-queixa-honra-estrategia-ativa"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acusacao-queixa-honra-estrategia-ativa", "acusacao queixa", "estrategia ativa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Estratégia Ativa da Queixa em Crimes contra a Honra (arts. 138 a 145 do CP)

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

> **POLO ATIVO — sensibilidade de polo.** Esta skill é do **polo acusatório**: serve ao **querelante** (ação penal privada) ou ao **assistente de acusação** (na injúria racial e demais hipóteses de ação pública). Antes de aplicá-la, o **roteador/chefe deve confirmar o polo** da instituição em `_criminalsquad/_memory/company.md`. Se a instituição atua majoritariamente em **defesa**, use as skills de defesa por tipo penal (`defesa-honra`) e trate esta apenas como espelho para antecipar as teses do adversário.

Esta skill orienta a **camada estratégica por trás da queixa-crime de honra** — não a redação da inicial (isso é a skill `queixa-crime`), mas a **teoria do caso acusatória**: como capitular corretamente o tipo, o que provar, como blindar a imputação contra as teses defensivas típicas (atipicidade, imunidade, ausência de dolo) e como maximizar o resultado (aumentos + reparação). O erro de estratégia aqui costuma ser fatal: a queixa mal capitulada ou mal instruída não sobrevive à resposta à acusação nem à exceção da verdade.

> **Lição central:** em crime contra a honra, **o dolo é tudo**. Os três tipos exigem o **animus de ofender** (dolo específico de macular a honra); sem ele, o fato é atípico. Antes de qualquer coisa, **classifique o tipo** (calúnia = imputa fato definido como crime; difamação = imputa fato desonroso; injúria = ofende dignidade/decoro sem fato) e **reúna a prova do dolo**. Capitulação errada e prova frágil do animus são os dois pontos onde a acusação privada mais morre.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 138 a 145 do CP** e do procedimento dos **arts. 519 a 523 do CPP**. A **injúria racial** migrou do art. 140, §3º, do CP para o **art. 2º-A da Lei 7.716/89** (com a **Lei 14.532/2023**), tornando-a crime de **ação penal pública** e **imprescritível/inafiançável** — não a trate mais como injúria qualificada do CP. Confirme súmulas, teses e qualquer precedente específico via a skill `jurisprudencia-stj-stf` antes de fundamentar.

## Os três tipos — classificar ANTES de capitular

| Tipo | Art. CP | Núcleo | Objeto |
|------|---------|--------|--------|
| **Calúnia** | 138 | Imputar **falsamente fato definido como CRIME** | Honra objetiva (reputação) |
| **Difamação** | 139 | Imputar **fato desonroso** (não precisa ser crime) | Honra objetiva (reputação) |
| **Injúria** | 140 | Ofender a **dignidade/decoro** — juízo de valor, **sem imputar fato** | Honra subjetiva (autoestima) |

Regra prática de triagem:
- Atribuiu **fato específico que é crime**? → **calúnia** (ex.: "Fulano desviou dinheiro da associação").
- Atribuiu **fato desonroso que não é crime**? → **difamação** (ex.: "Fulano trai a esposa").
- **Xingou / atribuiu qualidade negativa sem fato**? → **injúria** (ex.: "Fulano é um canalha, um imprestável").

> **Regra de ouro da capitulação:** injúria **não** imputa fato; calúnia e difamação **imputam fato**. A diferença calúnia × difamação é se o fato imputado **é ou não crime**. Errar aqui abre a porta para a atipicidade na resposta à acusação.

## Base legal

- **Arts. 138, 139 e 140 do CP** — calúnia, difamação e injúria.
- **Art. 141 do CP** — causas de **aumento** (contra Presidente/chefe de governo estrangeiro; funcionário público em razão da função; na presença de várias pessoas ou por meio que facilite a divulgação; contra idoso/pessoa com deficiência; **mediante paga**). **Confira a redação e os percentuais vigentes** (o inciso do meio que facilita a divulgação e a majorante para crime cometido em rede social/internet foram objeto de alteração legislativa — `jurisprudencia-stj-stf`).
- **Art. 142 do CP** — **imunidades** (exclusão do crime): ofensa em juízo na discussão da causa; crítica literária/artística/científica; conceito desfavorável de funcionário no cumprimento do dever de ofício. **Só alcançam injúria e difamação — não a calúnia.**
- **Art. 143 do CP** — **retratação** (extingue a punibilidade em calúnia e difamação; **não** em injúria).
- **Art. 145 do CP** — regra de **ação penal**: em geral **privada** (mediante queixa); **pública condicionada** quando contra funcionário público em razão da função ou nas hipóteses do parágrafo único.
- **Art. 2º-A da Lei 7.716/89** (red. Lei 14.532/2023) — **injúria racial**: ação penal **pública**, imprescritível e inafiançável (ver adiante — muda a estratégia e o polo).
- **Procedimento:** **arts. 519 a 523 do CPP** — rito especial dos crimes contra a honra de ação privada, com **audiência de reconciliação** (art. 520) e **exceção da verdade** (art. 523).
- **Reparação:** **art. 387, IV, do CPP** — valor mínimo de indenização por dano moral na sentença condenatória.
- **Prazo:** **art. 38 do CPP** — decadência de **6 meses** (ver skill `queixa-crime` para o marco).

## O que a acusação precisa PROVAR (a espinha da estratégia)

Montar a teoria do caso em torno de quatro eixos — provar todos, na inicial e na instrução:

1. **A conduta ofensiva (o fato)** — o que exatamente foi dito/escrito, palavra por palavra. Reproduzir o teor literal (print, áudio transcrito e periciável, testemunha presencial). Ofensa vaga ("ele me humilhou") não sustenta queixa.
2. **A autoria** — que **o querelado** foi o autor. Em ofensa on-line, antecipar a prova de autoria digital (ata notarial da página, dados de conexão, admissão) — é o ponto que a defesa mais ataca.
3. **O dolo de ofender (animus injuriandi/diffamandi/caluniandi)** — a **intenção de macular a honra**. Provar contexto, ausência de mera crítica/desabafo, reiteração, público-alvo. **Este é o eixo decisivo.**
4. **A elementar específica do tipo** — na **calúnia**, a **imputação de fato definido como crime** e a sua **falsidade** (o querelante sabe/pode demonstrar que o fato é falso); na **difamação**, a imputação de **fato** concreto e desonroso; na **injúria**, o **juízo de valor** aviltante à dignidade/decoro.

> **Blindagem antecipatória.** A boa estratégia acusatória **já responde, na inicial, às teses defensivas típicas**: (a) demarca o **dolo específico** para afastar "animus jocandi/criticandi/narrandi/consulendi/corrigendi/defendendi"; (b) demonstra que **não** incide imunidade do art. 142; (c) na calúnia, sustenta a **falsidade** do fato para retirar munição da exceção da verdade; (d) fixa a **autoria** de forma robusta. Antecipar é mais forte do que só reagir na fase de alegações.

## Teses acusatórias × contra-teses da defesa (e como neutralizar)

| Tese da DEFESA | Fundamento | Neutralização pela ACUSAÇÃO |
|---|---|---|
| **Atipicidade por ausência de dolo** ("animus jocandi/criticandi/narrandi") | O fato foi brincadeira, crítica, narração ou desabafo — sem intenção de ofender | Demonstrar contexto, reiteração, alcance e público; palavras que só se explicam pela intenção de macular; ausência de crítica de boa-fé |
| **Imunidade do art. 142** (juízo; crítica; conceito no dever de ofício) | Exclusão do crime | Lembrar que a imunidade **não alcança calúnia**; que a ofensa **excedeu** a discussão da causa/o âmbito da crítica; que houve **excesso doloso** (a jurisprudência exige nexo com a causa/o dever) |
| **Exceção da verdade** (art. 523 CPP) | Prova de que o fato imputado é verdadeiro → afasta calúnia/difamação | Sustentar que **não cabe** exceção da verdade nas hipóteses vedadas (na calúnia contra o Presidente, chefe de governo estrangeiro; contra funcionário — quando já houver decisão; e a **injúria não admite** exceção da verdade); e, no mérito, provar a **falsidade** |
| **Retratação (art. 143 CP)** | Extingue a punibilidade em calúnia/difamação antes da sentença | Fiscalizar se a retratação é **cabal e tempestiva** (antes da sentença), e lembrar que **não alcança a injúria** |
| **Absorção / princípio da consunção** | A ofensa seria meio de outro crime | Demonstrar autonomia da conduta ofensiva |
| **Perdão / decadência / renúncia tácita** | Extinção da punibilidade da ação privada | Cuidar do **prazo decadencial de 6 meses** (art. 38 CPP) e da **indivisibilidade** (não escolher entre coautores) — ver adiante |

### O art. 142 sob a ótica da acusação (imunidade a vencer)

O art. 142 é a defesa mais comum. A acusação a neutraliza por dois caminhos:
1. **Não incide na calúnia** — a imunidade cobre **injúria e difamação**, jamais a imputação de crime.
2. **Excesso doloso** — mesmo nas hipóteses cobertas (juízo, crítica, dever de ofício), a proteção **cessa quando a ofensa extrapola** o âmbito legítimo (não guarda pertinência com a causa/a crítica/o dever). Demonstrar o excesso é a chave.

## A exceção da verdade — antecipar antes que a defesa a use (art. 523 CPP)

A **exceção da verdade** permite ao querelado provar que o fato imputado é **verdadeiro**, afastando calúnia/difamação. É a arma defensiva central em honra objetiva. Estratégia acusatória:

- **Injúria não admite exceção da verdade** (é juízo de valor, não fato) — salvo a *exceptio veritatis* limitada em hipóteses legais; **confirmar a hipótese concreta**.
- **Calúnia:** a exceção é **vedada** em hipóteses do art. 138, §3º, do CP (ex.: quando o ofendido foi absolvido por sentença irrecorrível; contra o Presidente/chefe de governo estrangeiro). Sustentar a vedação quando incidir.
- **Estratégia:** **na inicial já demonstrar a falsidade** do fato imputado, esvaziando a exceção antes de ela ser oposta. Reunir prova documental da inverdade.

> **Cautela.** As regras de cabimento/vedação da exceção da verdade e o momento processual (arts. 138, §3º, e 139, parágrafo único, do CP; art. 523 do CPP) devem ser **conferidas na redação vigente** antes de peticionar.

## Injúria racial — mudou o polo e a natureza (Lei 14.532/2023)

Ponto que redefine a estratégia: a **injúria racial** (ofensa referente a raça, cor, etnia, religião ou origem) **deixou de ser injúria qualificada do art. 140, §3º, do CP** e passou ao **art. 2º-A da Lei 7.716/89**:

- **Ação penal pública** (não é mais queixa privada) → o titular é o **MP**; o ofendido atua como **assistente de acusação** (skill `assistente-acusacao`).
- **Imprescritível e inafiançável** (equiparação constitucional ao racismo — CF, art. 5º, XLII).
- **Pena mais grave** que a injúria comum.

➡️ **Consequência prática:** se a ofensa tem conteúdo **racial/discriminatório**, **não** ajuizar queixa privada de injúria — encaminhar ao MP e habilitar-se como assistente. Ajuizar queixa privada onde a ação é pública é erro de legitimidade. **Confirme o enquadramento** (racismo × injúria racial × injúria comum) via `jurisprudencia-stj-stf`.

## Aumentos do art. 141 — maximizar a resposta penal

Na estratégia acusatória, **sempre verificar e postular os aumentos** aplicáveis (art. 141 do CP):

- Contra **funcionário público**, em razão das funções (isso também muda a ação para **pública condicionada** — art. 145, parágrafo único).
- Na **presença de várias pessoas** ou por **meio que facilite a divulgação** da ofensa (relevante em ofensa on-line — verificar a majorante específica para redes/internet na redação vigente).
- Contra **idoso ou pessoa com deficiência**.
- **Mediante paga ou promessa de recompensa** (duplica a pena).

> Postular o aumento **desde a capitulação da inicial** — não deixar para as alegações. A majorante integra a imputação.

## Indivisibilidade e legitimidade — não perder a ação (art. 48 CPP)

Na **ação penal privada**, dois vícios matam a queixa:

- **Indivisibilidade (art. 48 CPP):** havendo **vários ofensores**, a queixa deve abranger **todos**. Escolher apenas um (renunciar tácito ao outro) gera **renúncia extensiva a todos** e **extingue a punibilidade** de todos. **Identificar todos os coautores/partícipes antes de ajuizar.**
- **Decadência (art. 38 CPP):** **6 meses** contados do conhecimento da autoria. Perdido o prazo, extingue-se a punibilidade. Monitorar o marco (ver `queixa-crime`).
- **Procuração com poderes especiais (art. 44 CPP):** a queixa exige procuração com poderes especiais e menção ao fato criminoso. Vício aqui é causa de rejeição.

## Reparação por dano moral (art. 387, IV, CPP)

A condenação em honra rende **valor mínimo de indenização** por dano moral fixado na sentença. Estratégia:

- **Requerer expressamente** a fixação do valor mínimo **na inicial** e reiterar nas alegações.
- **Instruir com prova do dano** (repercussão, alcance da ofensa, dor moral) para embasar o *quantum* — ver skill `assistente-reparacao-quantum-387`.
- O valor mínimo penal **não impede** a ação cível autônoma pelo excedente.

## Sequência estratégica (roteiro acusatório)

```
1) CLASSIFICAR o tipo (calúnia = fato-crime / difamação = fato desonroso / injúria = juízo de valor).
2) TRIAR o conteúdo: há elemento RACIAL/discriminatório?
     ├── SIM → é AÇÃO PÚBLICA (art. 2º-A Lei 7.716/89) → encaminhar ao MP + assistência. NÃO ajuizar queixa privada.
     └── NÃO → segue ação privada (ou pública condicionada, se contra funcionário público — art. 145 pú.).
3) LEGITIMIDADE/PRAZO: decadência 6 meses (art. 38); indivisibilidade — TODOS os ofensores (art. 48);
   procuração com poderes especiais (art. 44).
4) PROVA: fato literal + autoria (inclusive digital) + DOLO de ofender + elementar do tipo.
5) BLINDAGEM antecipatória na inicial: afastar animus atípico; demonstrar não incidência do art. 142;
   na calúnia, sustentar a FALSIDADE (esvazia a exceção da verdade).
6) MAXIMIZAR: aumentos do art. 141 desde a capitulação; reparação do art. 387, IV, CPP.
7) RITO: arts. 519-523 CPP — preparar-se para a audiência de reconciliação (art. 520) e para a
   exceção da verdade (art. 523).
8) REDIGIR a inicial com a skill `queixa-crime`; conferir TODA citação em `jurisprudencia-stj-stf`.
```

## Súmulas e precedentes (sob o Citation Gate)

Dispositivos de lei citados acima são de uso seguro na redação vigente conferida. Para **qualquer precedente específico** (número de HC/REsp/RE, informativo, tema repetitivo), **não** cite de memória:

- **Tese (segura):** a imunidade do art. 142 do CP **não alcança a calúnia** e **cessa diante do excesso doloso** — é entendimento consolidado; **o acórdão específico deve ser conferido** antes de citar. `[NÃO VERIFICADO]` — validar via `jurisprudencia-stj-stf`.
- **Tese (segura):** crime contra a honra exige **dolo específico de ofender**; ausente o animus, o fato é atípico — doutrina e jurisprudência pacíficas; **número de julgado a confirmar**. `[NÃO VERIFICADO]`.
- **Injúria racial** como imprescritível/inafiançável decorre da **CF, art. 5º, XLII**, e da **Lei 14.532/2023** — a moldura legal é citável; eventual precedente do STF/STJ que a interprete deve ser **verificado**. `[NÃO VERIFICADO]`.
- Qualquer **súmula** que se pretenda invocar (competência, foro, ofensa por internet, conexão) → passar **obrigatoriamente** por `jurisprudencia-stj-stf`. **Na dúvida, ensinar a tese e o dispositivo vence arriscar um número de acórdão.**

## Checklist e anti-padrões

- [ ] Tipo corretamente **classificado** (calúnia × difamação × injúria) — a elementar bate com o fato?
- [ ] Conteúdo **racial/discriminatório** triado? Se sim, é **ação pública** (art. 2º-A da Lei 7.716/89) — não ajuizar queixa privada.
- [ ] **Prazo decadencial** de 6 meses (art. 38 CPP) dentro do limite?
- [ ] **Indivisibilidade** respeitada — **todos** os ofensores na queixa (art. 48 CPP)?
- [ ] **Procuração com poderes especiais** e menção ao fato (art. 44 CPP)?
- [ ] Prova do **dolo de ofender** reunida (contexto, reiteração, alcance)?
- [ ] Prova da **autoria** (inclusive digital: ata notarial, prints periciáveis) preparada?
- [ ] Na calúnia, prova da **falsidade** do fato (esvazia a exceção da verdade)?
- [ ] **Aumentos do art. 141** postulados desde a capitulação?
- [ ] **Reparação do art. 387, IV, CPP** requerida e instruída?
- [ ] **Não incidência do art. 142** já demonstrada na inicial (imunidade)?
- [ ] Redação da inicial pela skill `queixa-crime`; toda citação conferida em `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- **Capitular injúria como calúnia** (ou vice-versa) — injúria não imputa fato; a diferença calúnia × difamação é o fato ser ou não crime.
- Ajuizar **queixa privada** onde a ofensa é **racial** (ação pública — art. 2º-A da Lei 7.716/89) — erro de legitimidade.
- Ofender **um só** de vários coautores — viola a **indivisibilidade** (art. 48 CPP) e extingue a ação contra todos.
- Deixar o **prazo de 6 meses** correr (decadência — art. 38 CPP).
- Descrever a ofensa de forma **vaga** ("ele me humilhou") sem reproduzir o teor literal.
- **Ignorar o dolo** — não demarcar o animus de ofender e cair em atipicidade.
- Esquecer os **aumentos do art. 141** e a **reparação do art. 387, IV**.
- Subestimar a **exceção da verdade** e a **imunidade do art. 142** — não blindar a inicial contra elas.
- **Citar precedente de memória** — todo número de julgado/súmula passa por `jurisprudencia-stj-stf`.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à **estratégia acusatória**; a decisão de ajuizar, a capitulação e a instrução são sempre do **advogado responsável** (CED/EAOAB). A queixa mal capitulada ou fora do prazo é irreversível.
- **Ética por polo.** Atuação do **querelante** (advocacia privada — OAB + **Provimento 205/2021** para eventual comunicação/publicidade) ou do **assistente de acusação** (na ação pública). Se a instituição for **Ministério Público**, observar o **CNMP**; se **Defensoria**, a **LC 80/94**. O **roteador deve confirmar o polo** em `company.md` antes de aplicar esta skill.
- **Foco do CriminalSquad é majoritariamente a DEFESA.** Esta skill é do **polo ativo/acusatório** — use-a apenas quando a instituição efetivamente atua como querelante/assistente; do contrário, ela serve como espelho para antecipar as teses do adversário na defesa por honra (`defesa-honra`).
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo por `jurisprudencia-stj-stf`. Confira sempre a **redação vigente** dos arts. 138-145 do CP, 519-523 do CPP e da Lei 7.716/89.

**Padrão de redação:** ao converter esta estratégia na peça, aplique a skill `queixa-crime` (estrutura da inicial) e a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
