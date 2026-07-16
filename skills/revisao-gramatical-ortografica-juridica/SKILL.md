---
name: revisao-gramatical-ortografica-juridica
description: >-
  Use na REVISÃO linguística final da peça criminal — ortografia, acentuação e hífen (Acordo
  Ortográfico de 1990), gramática normativa (concordância, regência, crase, colocação pronominal,
  pontuação), coesão e norma culta —, corrigindo a FORMA sem tocar na TESE, na estratégia nem nas
  citações. Gatilhos: revisão gramatical, revisão ortográfica, revisão linguística, revisão final,
  revisar a peça, passar o pente-fino, conferir o… Não use para decisão final, assinatura, protocolo
  ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, tecnica, redacao, revisao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-revisao-gramatical-ortografica-juridica"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["revisao-gramatical-ortografica-juridica", "revisao gramatical", "ortografica juridica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Revisão gramatical, ortográfica e linguística da peça

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

Esta skill orienta o **passe de revisão linguística** da peça criminal — a última leitura antes do protocolo, que corrige **ortografia, acentuação, hífen, gramática, pontuação, coesão e registro** para que a forma esteja à altura da tese. É controle de qualidade **transversal**: serve a qualquer peça (petição, recurso, contrarrazões, denúncia, memoriais, parecer) e a qualquer polo (defesa, acusação, assistência).

> **Lição central:** revise a **língua**, não toque na **tese**. O revisor conserta **erro de forma** (ortografia, gramática, pontuação) e **apenas sinaliza** — sem reescrever — tudo que for **conteúdo, estratégia, tese jurídica ou citação**. Erro se corrige; escolha do autor se respeita. Na dúvida entre "está errado" e "eu escreveria diferente", a segunda hipótese **não é correção**: é sugestão, e sugestão se marca, não se impõe.

> **Cautela de vigência (obrigatória antes de afirmar regra):** o **Acordo Ortográfico da Língua Portuguesa de 1990** (promulgado pelo Decreto 6.583/2008) é **obrigatório no Brasil desde 1º/01/2016** — textos anteriores seguiam a norma de 1943/1971. O **árbitro oficial da grafia é o VOLP** (Vocabulário Ortográfico da Língua Portuguesa, da ABL): em caso de dúvida sobre uma palavra, consulte o VOLP, **não invente regra**. Gramática normativa **não é lei**: há divergência entre gramáticos, e o revisor segue a **norma-padrão consagrada**, sem preciosismo. Sobre linguagem simples no Judiciário, confira orientações do CNJ **[NÃO VERIFICADO]** — são recomendação, não obrigação.

## Base normativa

- **Acordo Ortográfico da Língua Portuguesa (1990)** — Decreto 6.583/2008; vigência plena desde 01/01/2016. Rege ortografia, acentuação e hífen.
- **VOLP / ABL** — referência oficial da grafia das palavras (o "dicionário de grafia"). Tiebreaker de hífen, acento e forma.
- **Norma-padrão da língua** — gramática normativa consagrada (concordância, regência, crase, colocação, pontuação). Não é diploma legal.
- **Clareza como requisito processual** (aplicar a peça, não corrigir com estas normas, apenas ter em mente): a denúncia/queixa deve expor o fato "com todas as suas circunstâncias" (**art. 41 CPP**) e pode ser rejeitada se **manifestamente inepta** (**art. 395, I, CPP**; inépcia subsidiária no CPC). Obscuridade não é só deselegância — pode custar a admissibilidade. *(Referências processuais sob o Citation Gate — ver adiante.)*

## O princípio de ouro — a linha que não se cruza

O revisor trabalha em **duas colunas mentais**:

| CORRIGE (forma) | NÃO TOCA — só SINALIZA (conteúdo) |
|---|---|
| Ortografia, acento, hífen | A tese jurídica e a ordem dos argumentos |
| Concordância, regência, crase | A estratégia (o que alegar, o que omitir) |
| Colocação pronominal, pontuação | O teor de citação de lei, súmula, acórdão, depoimento |
| Coesão, conectivos, referência de pronomes | Nomes das partes, nº de processo, datas, valores |
| Redundância, juridiquês vazio, registro | Números de dispositivos e de precedentes |

- **Citações e transcrições são intocáveis** — não se "corrige" o texto de uma lei, de uma súmula, de um depoimento ou de um documento citado. Se o original tem erro, **mantém-se fiel** (marcando `[sic]` quando útil); jamais se conserta a fonte.
- Se, ao revisar, o revisor **suspeitar** de erro de conteúdo (súmula com número estranho, artigo que parece trocado, data incoerente, valor divergente), **sinaliza para o autor** e roteia a conferência — **não inventa** o número/dado "certo".
- Toda alteração de forma que **possa** deslocar sentido jurídico (trocar "denúncia" por "acusação", "dolo" por "culpa", "prescrição" por "decadência") **para** e vira **pergunta ao autor**. Sinônimo aparente pode ser erro técnico.

## Metodologia — os passes (uma passada por camada)

Revisar tudo de uma vez é como caçar sete erros olhando o quadro inteiro: escapam. Faça **passadas sucessivas**, cada uma com um foco:

1. **Passe 1 — Ortografia e acentuação.** Grafia, acentos, trema, maiúsculas. Rode o corretor, mas **não confie cegamente** (ele não pega "a/à", "mau/mal", "senão/se não", homônimos).
2. **Passe 2 — Gramática.** Concordância, regência, **crase**, colocação pronominal, tempos/modos verbais, paralelismo.
3. **Passe 3 — Pontuação.** Vírgula (jamais entre sujeito e verbo), ponto e vírgula nas enumerações de pedidos, uso de travessão/parênteses.
4. **Passe 4 — Coesão e coerência.** Conectivos com valor lógico correto, pronomes com referente claro, progressão sem repetição, sem salto de raciocínio.
5. **Passe 5 — Registro e concisão.** Juridiquês vazio, arcaísmos, redundâncias, estrangeirismos/latinismos em itálico; norma culta sem preciosismo.
6. **Passe 6 — Consistência formal.** Nomes das partes, nº dos autos, datas e valores **conferidos por igualdade** (sem alterar o dado — só apontar divergência); grafia uniforme de termos ao longo da peça.

> **Dica de ofício:** leia o **pedido** (a parte dispositiva) em separado e em voz alta — é onde erro custa caro e onde a pressa concentra deslizes. Reler de trás para frente ajuda a isolar a palavra do sentido e a ver o que o olho "completa".

## Roteiro por domínio de erro

### Ortografia e acentuação (Acordo de 1990)

- **Sem trema:** consequência, frequente, linguiça, cinquenta, tranquilo, arguição.
- **Sem acento em paroxítonas com ditongo aberto "ei/oi":** ideia, assembleia, heroico, jiboia, plateia, paranoico. *(Oxítonas mantêm: herói, réus, papéis, dói.)*
- **Sem circunflexo no hiato "oo" e em "-eem":** voo, enjoo, perdoo; creem, deem, leem, veem.
- **Acento diferencial ABOLIDO:** para (verbo, igual à preposição), pelo, polo, pera. **MANTIDO:** pôde × pode, pôr × por, têm/vêm × tem/vem (plural × singular).
- **Homônimos que o corretor não pega:** a/à/há, mau/mal, acerca de/há cerca de, senão/se não, afim/a fim de, tampouco/tão pouco, ao encontro de/de encontro a, ratificar/retificar, descriminar/discriminar, iminente/eminente, infração/infringir.

### Hífen pós-Acordo (na dúvida, VOLP)

| Grafia correta | Regra |
|---|---|
| contrarrazões, contrassenso | prefixo + r/s → **dobra** o r/s, sem hífen |
| corréu, coautor | "co" aglutina (co + réu → dobra o r) |
| semiaberto, semiliberdade | semi + vogal diferente → junto |
| autoincriminação, autodefesa | auto + ... → junto |
| extrajudicial, extraprocessual | extra + ... → junto |
| reincidência, reincidente | re + ... → junto |
| infraconstitucional, infralegal | infra + ... → junto |
| pré-processual, pós-processual | prefixo tônico acentuado (pré, pós, pró) → **hífen** |
| anti-inflamatório, micro-ondas | prefixo + **mesma** vogal → hífen |
| sub-região, sub-humano | sub + r/h → hífen |

### Regência verbal (clássicos jurídicos)

| Termo | Regência correta | Erro comum |
|---|---|---|
| implicar (= acarretar) | direto — "implica **nulidade**" | "implica **em** nulidade" |
| obedecer / desobedecer | "obedecer **ao** prazo" | "obedecer **o** prazo" |
| visar (= objetivar) | "visar **à** reforma" | "visar **a** reforma" (sem crase) |
| assistir (= caber direito) | "assiste **ao** réu" | "assiste **o** réu" |
| proceder (= realizar) | "proceder **à** oitiva" | "proceder **a** oitiva" |
| preferir | "preferir X **a** Y" | "preferir X **do que** Y" |
| responder (por crime) | "responder **pelo** crime" | "responder **o** crime" |
| aludir / referir-se / reportar-se | "aludir **ao** fato" | "aludir **o** fato" |

### Crase (o erro-bandeira das petições)

- **NÃO há crase antes de pronome de tratamento:** escreve-se "requer **a** Vossa Excelência", "dirijo-me **a** Vossa Senhoria". A forma "**à** Vossa Excelência" é **erro** e aparece em toda petição malrevisada.
- **Locuções que exigem crase:** à luz de, à vista de, à revelia, à medida que, à exceção de, à míngua de, à guisa de, à disposição, à unanimidade.
- **NÃO há crase** antes de verbo, de palavra masculina (a prazo, a juros), de pronomes em geral, nem em "a partir de", "a fim de".
- **Locução preferível:** "**em face de**" (em face da sentença) — evite o galicismo "face à"; prefira também "diante de".

### Concordância

- **"Fazer" e "haver" impessoais** (tempo/existência) ficam no **singular**: "**faz** cinco anos" (não "fazem"); "**houve** irregularidades", "**havia** muitos réus" (não "houveram"/"haviam").
- **"Existir" concorda:** "existiram provas" (verbo pessoal).
- **Voz passiva sintética concorda:** "vende**m**-se imóveis", "julgara**m**-se procedentes os pedidos".
- **Adjetivos concordam:** documentos **anexos**, segue **inclusa** a procuração, provas **bastantes** (adjetivo) × "**bastante** claras" (advérbio, invariável); "meia hora", "meio-dia e **meia**".

### Colocação pronominal

- **Não iniciar período com pronome átono:** "Parece-me" (não "Me parece"); "Trata-se de" (não "Se trata de").
- **Próclise obrigatória com palavra atrativa** (negação, advérbio, pronome relativo/indefinido, conjunção subordinativa): "**não se** admite", "que **se** refere", "onde **se** decide", "jamais **se** provou".
- **Mesóclise** no futuro sem atrativo: "far-se-á", "conceder-se-lhe-á".

### Pontuação

- **Nunca** vírgula separando **sujeito e verbo**, nem verbo e complemento essencial ("O réu[,] requer" → erro).
- Vírgula isola aposto e oração adjetiva **explicativa**; **não** isola a **restritiva**.
- Nas **enumerações de pedidos**, padronize **ponto e vírgula**: "requer: a) ...; b) ...; c) ...".

### Coesão, conectivos e registro

- **Conectivo com o valor certo:** *outrossim* (= além disso), *destarte/dessarte* (= assim), *porquanto* (= porque), *consoante* (= conforme). Cuidado: *conquanto* é **concessivo** (= embora), **não** causal — trocar por "porque" é erro frequente.
- **"Onde" só para lugar físico** → em contexto abstrato, use "em que": "a situação **em que**" (não "a situação onde").
- **Referência clara:** todo "este/esse/o qual/tal" precisa de referente inequívoco; pronome solto é fonte de ambiguidade.
- **Latinismos e estrangeirismos em itálico**, com grafia conferida: *data venia*, *in dubio pro reo*, *habeas corpus*, *mutatis mutandis*, *sub judice*, *bis in idem*, *reformatio in pejus*, juízo *a quo*/*ad quem*. *(A grafia aportuguesada de alguns — ex.: "hábeas-corpus" — varia; confira no VOLP.)*
- **Poda de juridiquês e redundância:** "há anos" (não "há anos atrás"), "a meu ver" (evite "data maxima venia" em cascata), corte "venho por meio desta", "mui digno", "elo de ligação", "acabamento final". Formalidade é clareza, não empolação.

## Zona cinzenta — norma × preferência de estilo

Nem tudo que o revisor mudaria é **erro**. Distinguir as duas coisas é o que separa revisão de intromissão:

- **Crase facultativa** antes de nome próprio feminino e de possessivo ("refiro-me a/à Maria", "a/à sua tese"): não corrija como se fosse erro.
- **Colocação pronominal** admite variação regional culta; em peça, prefira a norma-padrão, mas não trate estilo do autor como falta.
- **Abertura reverencial** ("Excelentíssimo Senhor Doutor Juiz" × "Senhor Juiz"): a tendência de **linguagem simples** é estilística — sugira, não imponha.
- **Maiúsculas de reverência** (Juízo, Vara, Vossa Excelência): tradição forense aceita; padronize o uso ao longo da peça em vez de caçá-las.

> **Regra de decisão:** se viola a **norma-padrão** → é **erro**, corrige. Se é **escolha dentro do que a norma admite** → é **preferência**, no máximo **sugere** (marcada como sugestão) e **deixa a palavra final com o autor**. O revisor não reescreve a voz de quem assina.

## Citações, súmulas e precedentes — sob o Citation Gate

Esta skill é linguística: sua "autoridade" é o **VOLP e a norma-padrão**, não a jurisprudência. Ainda assim, a peça revisada **cita** direito — e aqui o revisor tem deveres:

- **Não "corrigir" súmula, tese ou acórdão de memória.** Se o número de uma súmula, de um artigo ou de um precedente parece equivocado, **sinalize** e roteie a conferência à skill `verificacao-citacoes` (Citation Gate) e, para jurisprudência, à `jurisprudencia-stj-stf`. **Precedente específico incerto ⇒ marque `[NÃO VERIFICADO]`** e prefira **tese + dispositivo** a número de acórdão.
- **Transcrição é fiel:** o revisor não melhora a redação de uma lei ou de um depoimento citado. Mantém `[sic]` quando o original tem erro.
- **Não inventar regra gramatical** para justificar uma "correção": se não há norma clara, é sugestão, não conserto.

## Erros comuns e anti-padrões

**Erros frequentes (corrigir):**
- "à Vossa Excelência" (não há crase antes de pronome de tratamento).
- "implica em", "obedecer o prazo", "visar a reforma" (regência/crase).
- "fazem cinco anos", "houveram falhas", "existe provas" (concordância).
- "Me parece", "Se trata de", "não pode-se" (colocação).
- Vírgula entre sujeito e verbo.
- "contra-razões", "semi-aberto", "co-réu" (hífen desatualizado, pré-2016).
- "à medida em que", "onde" para tempo/situação abstrata.

**Anti-padrões do revisor (evitar):**
- **Reescrever a tese** ou reordenar argumentos a pretexto de "melhorar o texto" — isso é `redacao-persuasiva-criminal`, não revisão gramatical.
- **Corrigir citação/transcrição** (lei, súmula, depoimento) — é intocável.
- **Trocar termo técnico por sinônimo** que desloca sentido (denúncia/acusação, dolo/culpa, prescrição/decadência, absolvição/impronúncia).
- **Confiar no corretor automático** para homônimos e crase.
- **Inventar o número "certo"** de uma súmula/artigo suspeito em vez de sinalizar.
- **Impor preferência de estilo** como se fosse erro de norma.
- **Alterar nomes, datas, nº de processo ou valores** — só apontar divergência ao autor.

## Checklist de revisão

- [ ] Rodei **passadas separadas** (ortografia → gramática → pontuação → coesão → registro → consistência)?
- [ ] Ortografia/acentuação conforme o **Acordo de 1990** (sem trema; "ideia", "voo", "creem"; sem acento diferencial abolido)?
- [ ] **Hífen** conferido nos termos jurídicos (contrarrazões, corréu, semiaberto, autoincriminação) — VOLP na dúvida?
- [ ] **Regência e crase** clássicas checadas ("a Vossa Excelência" **sem** crase; "implica nulidade"; "assiste ao réu")?
- [ ] **Concordância** de "fazer"/"haver" impessoais e da voz passiva sintética?
- [ ] **Colocação pronominal** (sem próclise em início de período; próclise com palavra atrativa)?
- [ ] **Pontuação** — nenhuma vírgula entre sujeito e verbo; ponto e vírgula nos pedidos?
- [ ] **Coesão** — conectivos com valor correto ("conquanto" ≠ "porque"); pronomes com referente claro?
- [ ] Latinismos/estrangeirismos em **itálico** e com grafia conferida?
- [ ] **Nada da tese, da estratégia ou das citações** foi alterado — só a forma?
- [ ] Suspeitas de erro de **conteúdo** (súmula/artigo/data/valor) **sinalizadas** ao autor, sem inventar o "certo"?
- [ ] Citações/precedentes duvidosos roteados a `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] **Consistência formal** — nomes, nº dos autos, datas e valores conferidos por igualdade?

## Nota de conformidade

- **Rascunho para revisão humana.** Este passe é apoio; a **revisão final e a responsabilidade** pela peça são sempre do **advogado/profissional que assina** (CED, art. 2º). A skill não valida conteúdo jurídico — valida forma.
- **Skill transversal e neutra de polo.** Serve a **defesa, acusação e assistência**; a técnica linguística é a mesma. A ética de conteúdo, contudo, segue o **polo e o tipo de instituição** (OAB/Provimento 205/2021; CNMP; LC 80/94) — a revisão de forma **não** relativiza deveres de conteúdo (lealdade, vedação a citação inventada, sigilo/LGPD).
- **Citation Gate mantido:** o revisor **não confere legitimidade** a citação alguma; toda súmula/precedente/tese continua sujeita a `verificacao-citacoes` antes do protocolo. Na dúvida, **omitir vence inventar**.
- **Não confundir com `revisao-criminal`** (ação autônoma de impugnação da coisa julgada) — aqui se trata do **passe linguístico** da peça, não de um remédio processual.

## Lembretes finais

- **Corrija a língua; não toque na tese.** Erro de forma se conserta; escolha do autor se respeita.
- **Passadas separadas** pegam o que a leitura única deixa passar; leia o **pedido** em voz alta.
- **"a Vossa Excelência" sem crase**, "implica nulidade", "faz cinco anos", "houve falhas" — os campeões de reincidência.
- **Hífen pós-2016:** contrarrazões, corréu, semiaberto, autoincriminação; **VOLP** é o árbitro.
- **Citação é intocável;** suspeita de conteúdo se **sinaliza**, não se conserta de memória.
- **Preferência de estilo ≠ erro de norma** — a última palavra sobre estilo é de quem assina.

**Divisão de trabalho:** a **persuasão, a teoria do caso, a subsunção e a coesão argumentativa** são da skill `redacao-persuasiva-criminal` (que eleva o conteúdo). Esta skill entra **depois**, no acabamento: pente-fino de **ortografia, gramática e norma culta**, sem mexer no que já foi decidido pelo autor.
