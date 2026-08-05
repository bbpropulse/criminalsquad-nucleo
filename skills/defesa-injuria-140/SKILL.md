---
name: defesa-injuria-140
description: >-
  Use ao defender querelado/réu acusado de INJÚRIA comum (CP art. 140, caput; injúria real §2º) —
  ofensa à honra SUBJETIVA (dignidade/decoro) por qualidade negativa ou juízo de valor. Teses
  próprias e exclusivas: perdão judicial do §1º (provocação reprovável da vítima / retorsão
  imediata), inexistência de exceção da verdade, atipicidade por animus jocandi/criticandi/narrandi,
  retratação e ação penal privada. NÃO cobre… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, honra, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-injuria-140"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-injuria-140", "defesa injuria"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa em Injúria comum (CP, art. 140, caput e §2º)

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

Esta skill orienta a **defesa do querelado/réu** acusado de **injúria comum** — o crime de ofender a **dignidade** ou o **decoro** de alguém (CP, art. 140). A injúria protege a **honra subjetiva** (o sentimento próprio da pessoa sobre a sua dignidade), diferente da calúnia e da difamação, que tutelam a **honra objetiva** (a reputação perante terceiros). Essa distinção comanda toda a defesa: na injúria **não há imputação de fato**, mas atribuição de **qualidade negativa** ou emissão de **juízo de valor** depreciativo.

> **Lição central:** antes de qualquer tese, **classifique a conduta**. Houve imputação de **fato determinado** (crime → calúnia; fato desonroso → difamação) ou mera atribuição de **qualidade negativa / xingamento** (→ injúria)? Errar aqui derruba a defesa inteira. E lembre-se de duas assimetrias que só existem na injúria: **não cabe exceção da verdade** e há **perdão judicial próprio (§1º)** para provocação e retorsão.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 140 do CP e a moldura da **injúria racial** — a **Lei 14.532/2023** deslocou a injúria racial para o rol do **racismo (Lei 7.716/89)**, tornando-a **imprescritível e inafiançável** e alterando a competência e a natureza da ação. Se o caso envolver raça, cor, etnia, religião, origem, condição de pessoa idosa ou com deficiência, **esta skill não se aplica** — use `defesa-injuria-racial-racismo`. Confira também súmulas, temas e overruling pela skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes` antes de fundamentar.

## Distinção crucial — qual crime contra a honra?

| Crime | Bem jurídico | Conduta | Objeto |
|-------|-------------|---------|--------|
| **Calúnia** (CP 138) | Honra objetiva | Imputar **falsamente** **fato definido como crime** | Fato criminoso determinado |
| **Difamação** (CP 139) | Honra objetiva | Imputar **fato ofensivo à reputação** (não criminoso) | Fato desonroso determinado |
| **Injúria** (CP 140) | Honra **subjetiva** | Atribuir **qualidade negativa** / emitir **juízo de valor** depreciativo | **Nenhum fato** — opinião/ofensa genérica |

➡️ **Regra de ouro defensiva:** havendo **fato determinado**, não é injúria (pode ser calúnia ou difamação, com defesa própria — ver `defesa-calunia-difamacao`). A injúria é a ofensa **sem imputação de fato** ("burro", "corrupto" solto, "incompetente"). Enquadramento errado pela acusação → tese de **atipicidade / desclassificação**.

## Base legal

- **Art. 140, caput, CP** — injúria simples: ofender a dignidade ou o decoro.
- **Art. 140, §1º, CP** — **perdão judicial** (o juiz *pode* deixar de aplicar a pena) quando: (I) o ofendido, de forma **reprovável, provocou diretamente** a injúria; ou (II) no caso de **retorsão imediata**, que consista em outra injúria.
- **Art. 140, §2º, CP** — **injúria real**: injúria consistente em **violência ou vias de fato** que, por sua natureza ou pelo meio empregado, se considerem **aviltantes** (pena própria + a da violência).
- **Art. 140, §3º, CP** — injúria por elementos de raça, cor, etnia, religião, origem, condição de idoso/deficiente — **fora do escopo desta skill** (racismo, Lei 7.716/89, red. Lei 14.532/2023).
- **Art. 141, CP** — causas de **aumento** (contra Presidente da República/chefe de governo estrangeiro; funcionário público em razão da função; presença de várias pessoas ou meio que facilite a divulgação; contra idoso/deficiente; mediante paga — conferir redação vigente).
- **Art. 143, CP** — **retratação** (ver ressalva abaixo).
- **Art. 145, CP** — regra de **ação penal**: em geral **privada** (queixa-crime); exceções ali previstas.
- **Processo:** infração de **menor potencial ofensivo** → **Lei 9.099/95** (JECrim): cabíveis **composição civil**, **transação penal** e, na injúria real leve, eventual **suspensão condicional do processo** (art. 89) conforme a pena mínima — conferir no caso.

## As três assimetrias que definem a defesa na injúria

1. **NÃO cabe exceção da verdade.** Diferente da calúnia (onde a exceção da verdade é ampla) e da difamação (onde é restrita a funcionário público quanto ao exercício da função), na **injúria a verdade é irrelevante** — provar que o ofendido "é mesmo" aquilo não exclui o crime, porque não se imputa fato, e sim se emite juízo de valor. Isso **fecha** uma via à acusação e deve ser lembrado se o querelante tentar produzir prova da "veracidade" da ofensa.
2. **Perdão judicial próprio (§1º).** Só a injúria tem a válvula do §1º — **provocação reprovável** do ofendido e **retorsão imediata**. É tese defensiva de primeira linha (ver adiante).
3. **Honra subjetiva → a percepção do ofendido importa, mas não decide sozinha.** A tipicidade exige ofensa objetivamente idônea a atingir dignidade/decoro; **mero dissabor, crítica dura ou grosseria** podem ser atípicos. Abre-se espaço para **atipicidade material** e para o afastamento do **dolo específico** (animus injuriandi).

## Roteiro de defesa — teses por eixo

### 1. Atipicidade / ausência de animus injuriandi (dolo específico)
A injúria exige **dolo de ofender** (*animus injuriandi vel diffamandi*). Afasta-se a tipicidade quando a intenção era outra:
- **animus jocandi** — intenção de brincar/gracejar, sem propósito ofensivo;
- **animus criticandi** — crítica (política, artística, profissional, jornalística) no exercício da liberdade de expressão;
- **animus narrandi** — mero relato/narração de fato (ex.: em depoimento, notícia-crime, petição);
- **animus corrigendi / consulendi** — intenção de corrigir/advertir (contexto educativo, hierárquico) ou de aconselhar;
- **animus defendendi** — expressões proferidas **na defesa em juízo** (ligada à **imunidade judiciária**, ver eixo 4).
➡️ Provado que faltou o propósito de ofender, **a conduta é atípica**. Contexto, tom, relação entre as partes e circunstâncias são a prova.

### 2. Perdão judicial do §1º — provocação reprovável e retorsão imediata
- **Inciso I — provocação reprovável do ofendido:** o próprio ofendido, de modo **reprovável**, provocou **diretamente** a injúria. Não precisa ser outra injúria; basta a provocação censurável que deflagrou a reação.
- **Inciso II — retorsão imediata:** a vítima injuriou **primeiro** e o réu **revidou de imediato** com outra injúria. Exige **imediatidade** (reação no calor do momento) e que **ambas** as condutas sejam injúrias.
➡️ Efeito: o juiz **pode deixar de aplicar a pena** (faculdade judicial, mas dever de fundamentar a recusa). **Peça sempre subsidiariamente** o §1º quando houver bate-boca recíproco ou provocação prévia — é a tese mais característica e eficaz da injúria.

### 3. Atipicidade material / crítica e liberdade de expressão
- **Mero dissabor, grosseria, desabafo ou crítica ácida** podem não atingir o mínimo de ofensa à dignidade/decoro exigido pelo tipo.
- **Liberdade de expressão / crítica de agentes públicos e figuras públicas:** ponderação constitucional (CF, art. 5º, IV e IX). Crítica a conduta pública, ainda que veemente, tende à atipicidade quando não descamba para ataque gratuito à pessoa.
- **Contexto de embate acalorado, redes sociais, discussão de trânsito:** avaliar se houve ofensa idônea ou apenas exaltação momentânea.
- ➡️ Precedentes específicos do STF/STJ sobre liberdade de expressão × honra: **[NÃO VERIFICADO]** — confirmar número, tese e vigência via `jurisprudencia-stj-stf` antes de citar.

### 4. Imunidade judiciária (defesa em juízo / atuação do advogado)
- **CP, art. 142, I** — não constitui injúria a ofensa irrogada **em juízo, na discussão da causa**, pela parte ou seu procurador.
- **EAOAB (Lei 8.906/94), art. 7º, §2º** — **imunidade profissional do advogado** por manifestações no exercício da atividade (**injúria e difamação**; a imunidade **não abrange calúnia**), nos limites da causa e sem excesso. Confira a redação e o alcance atual (houve debate sobre o desacato/limites) via `jurisprudencia-stj-stf`.
- ➡️ Se a ofensa foi dita **na peça, no debate ou na tribuna**, dentro da discussão da causa e sem abuso, invocar a imunidade → **atipicidade**.

### 5. Retratação (art. 143) — ressalva importante
- O art. 143 admite **retratação** que extingue a punibilidade **na calúnia e na difamação** — **não na injúria** pela literalidade do dispositivo. Ou seja: **não confie na retratação como causa extintiva na injúria comum**; use-a, quando muito, como **atenuante** (arrependimento) ou como base para **composição civil / conciliação** no JECrim.
- ➡️ Anti-armadilha: **não peticione "extinção pela retratação" na injúria simples** — é erro recorrente. Confirme a redação vigente do art. 143 antes de qualquer pedido.

### 6. Injúria real (§2º) — teses específicas
Quando a acusação é de **injúria real** (violência ou vias de fato aviltantes):
- **Verificar o caráter aviltante:** a violência/via de fato tem de ter **finalidade de ultrajar** (ex.: tapa no rosto, cusparada, rasgar a roupa). Faltando o intuito aviltante, pode não haver injúria real.
- **Concurso:** a pena da injúria real **soma-se** à da violência (lesão corporal, se houver). Se a violência produziu apenas **vias de fato** (contravenção) ou **lesão leve**, discutir o enquadramento e a proporcionalidade.
- **Desclassificação:** avaliar se o caso é de **lesão corporal simples** sem o elemento aviltante (afastando o §2º) — pode ser mais benéfico conforme a pena.
- **Consentimento / contexto:** situações de brincadeira consentida, esporte, etc., podem afastar a tipicidade.

### 7. Questões processuais da ação penal privada (queixa)
A injúria comum é, em regra, de **ação penal privada** (CP, art. 145) — atacar a **admissibilidade da queixa**:
- **Decadência (CPP, art. 38):** direito de queixa decai em **6 meses** contados do conhecimento da autoria. **Conte o prazo** — decadência = extinção da punibilidade (tese preliminar de peso).
- **Requisitos da queixa (CPP, art. 41 c/c 44):** procuração com **poderes especiais** e **menção ao fato criminoso**; ausência → inépcia/irregularidade.
- **Legitimidade e renúncia/perdão:** verificar legitimidade do querelante; **renúncia tácita** e **perdão** (bilateral) extinguem a punibilidade (CP, arts. 104-107).
- **Perempção (CPP, art. 60):** inércia do querelante ao longo do processo extingue a punibilidade — monitorar.
- **Princípio da indivisibilidade (CPP, art. 48):** a queixa deve abranger **todos** os autores; renúncia a um se estende aos demais.

## Teses × contra-teses (defesa × acusação)

| Tese defensiva | Fundamento | Contra-tese (querelante/MP) |
|----------------|------------|------------------------------|
| Atipicidade — não é injúria, é fato determinado | Distinção honra subjetiva × objetiva | Reenquadrar como calúnia/difamação (defesa própria) |
| Ausência de animus injuriandi (jocandi/criticandi/narrandi) | Dolo específico de ofender | Contexto revela intenção ofensiva real |
| Perdão judicial §1º, I (provocação reprovável) | CP 140 §1º I | Provocação inexistente ou não reprovável |
| Perdão judicial §1º, II (retorsão imediata) | CP 140 §1º II | Falta imediatidade; 2ª ofensa não é injúria |
| Atipicidade material (mero dissabor/crítica) | Liberdade de expressão (CF 5º IV/IX) | Ofensa idônea; ataque pessoal gratuito |
| Imunidade judiciária | CP 142, I; EAOAB 7º §2º | Excesso; fora da discussão da causa; foi calúnia |
| Decadência do direito de queixa | CPP 38 (6 meses) | Termo inicial diverso; ciência da autoria posterior |
| Inépcia da queixa | CPP 41/44 | Peça atende aos requisitos |
| Injúria real: falta caráter aviltante | CP 140 §2º | Meio empregado é objetivamente ultrajante |

> **Sequência lógica na peça:** (1) preliminares processuais (decadência, inépcia, ilegitimidade); (2) atipicidade (não é injúria / falta animus / atipicidade material / imunidade); (3) subsidiariamente, **perdão judicial §1º**; (4) na injúria real, desclassificação/afastamento do §2º; (5) benefícios do JECrim (composição/transação/sursis processual).

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos com certeza:** CP arts. 138-140, 141, 142, 143, 145; CPP arts. 38, 41, 44, 48, 60; Lei 9.099/95 (arts. 74, 76, 89); EAOAB art. 7º, §2º; CF art. 5º, IV, IX e X.
- **Injúria racial / racismo:** Lei 7.716/89 e Lei 14.532/2023 — confirmar redação e efeitos (imprescritibilidade, inafiançabilidade, ação penal). **Fora do escopo** desta skill.
- **Súmulas específicas de crimes contra a honra / injúria:** **[NÃO VERIFICADO]** — não citar número de súmula de memória; conferir existência e teor via `jurisprudencia-stj-stf`.
- **Precedentes (HC/REsp/RE, informativos, temas) sobre animus injuriandi, imunidade do advogado, liberdade de expressão × honra, retorsão:** **[NÃO VERIFICADO]** — **não inventar número de acórdão**. Ensine a **tese** e o **dispositivo**; se precisar de precedente, obtenha-o verificado via `jurisprudencia-stj-stf`.

> **Citation Gate (inegociável):** dispositivos de lei e súmulas notórias podem ser citados com certeza. **Qualquer** precedente específico (número de HC/REsp/RE, informativo, tema repetitivo) sem certeza absoluta entra como **[NÃO VERIFICADO]** e só vai à peça depois de conferido. Há sanções reais por jurisprudência inventada por IA — **omitir vence inventar**.

## Erros comuns / checklist da defesa

- [ ] **Classifiquei corretamente** o crime (injúria × calúnia × difamação)? Há **fato determinado** (então não é injúria)?
- [ ] Confirmei que **não** é injúria **racial/discriminatória** (§3º / Lei 14.532/2023)? Se for, **redirecionar** para `defesa-injuria-racial-racismo`.
- [ ] Levantei **atipicidade** e a **falta de animus injuriandi** (jocandi/criticandi/narrandi/defendendi) com prova de contexto?
- [ ] Avaliei **perdão judicial do §1º** (provocação reprovável / retorsão imediata) e **pedi subsidiariamente**?
- [ ] Não pedi **"exceção da verdade"** na injúria (não cabe) nem **"extinção pela retratação"** na injúria comum (art. 143 não a prevê)?
- [ ] Na **injúria real (§2º)**, discuti o **caráter aviltante** e a eventual **desclassificação**?
- [ ] Verifiquei **decadência (6 meses, CPP 38)** e os **requisitos da queixa (CPP 41/44)**?
- [ ] Considerei **composição civil, transação penal e sursis processual** (Lei 9.099/95)?
- [ ] Se ofensa dita **em juízo/na peça**, invoquei a **imunidade judiciária** (CP 142, I; EAOAB 7º §2º)?
- [ ] Passei **toda** súmula/precedente pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Tratar como injúria uma imputação de **fato determinado** (é calúnia/difamação — outra defesa).
- Pedir **exceção da verdade** — inexistente na injúria.
- Invocar **retratação (art. 143) como extintiva** na injúria comum — o dispositivo alcança calúnia e difamação.
- Confundir injúria comum com **injúria racial** (regime, prescrição, ação e competência são diferentes após a Lei 14.532/2023).
- Esquecer a **decadência** de 6 meses da ação penal privada.
- Citar **número de acórdão/súmula de memória** — Citation Gate.

## Metodologia da resposta à acusação / queixa

Como a injúria comum é de ação privada, a peça de defesa costuma ser a **resposta à acusação (CPP, art. 396-A)** após o recebimento da queixa (ou a **rejeição da queixa**, CPP art. 395). Estrutura sugerida:
1. **Endereçamento e qualificação** (Juízo criminal / JECrim competente; querelante × querelado).
2. **Preliminares** — decadência (CPP 38), inépcia/irregularidade da queixa (CPP 41/44), ilegitimidade, indivisibilidade (CPP 48); requerer **rejeição** (CPP 395) ou **absolvição sumária** (CPP 397).
3. **Mérito** — atipicidade (não é injúria / falta animus / atipicidade material / imunidade); prova do contexto.
4. **Subsidiariamente** — perdão judicial §1º; na injúria real, afastamento/desclassificação do §2º.
5. **Requerimentos** — rejeição da queixa / absolvição sumária; subsidiariamente, produção de prova (testemunhas do contexto), designação de audiência; se cabível, **composição/transação** (Lei 9.099/95).
6. **Rol de testemunhas** e documentos (prints com contexto completo, não recortado; boletim; mensagens que demonstrem provocação/retorsão).

> **Redação da peça:** aplique também `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra). Para calúnia/difamação, use `defesa-calunia-difamacao`; para a modalidade discriminatória, `defesa-injuria-racial-racismo`.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pelas teses e pela estratégia é sempre do **advogado** (CED/OAB; **Provimento 205/2021** quanto à publicidade). Nada aqui substitui a leitura integral dos autos e o juízo profissional.
- **Polo:** skill de **DEFESA** (querelado/réu). Se o pedido vier do **polo acusatório** (querelante/assistente de acusação na injúria — a ação é em regra privada), o **roteador deve conferir o polo** e acionar a skill/estratégia adequada; as teses aqui são de resistência à acusação.
- **Citation Gate:** toda súmula/precedente/tese passa por `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de ir à peça — sem exceção.
- **Vigência:** confirme a redação atual do CP (arts. 140-145) e da legislação de injúria racial (Lei 14.532/2023) antes de citar.
