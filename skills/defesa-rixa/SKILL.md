---
name: defesa-rixa
description: >-
  Use ao defender acusado de RIXA (CP, art. 137) — o crime coletivo de tumulto/luta entre três ou
  mais pessoas. Gatilhos: rixa, art. 137, participação em rixa, mera presença na rixa, separar os
  contendores, quem apartou a briga, rixa qualificada pelo resultado…. Não use para conclusão
  definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-rixa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-rixa", "defesa rixa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Rixa (CP, art. 137)

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

Esta skill orienta a **defesa técnica** do acusado de **rixa** — o crime de **participar de rixa** (súbita luta ou tumulto **entre três ou mais pessoas**, com troca recíproca de agressões corporais). É crime **de concurso necessário** e **plurissubjetivo**: todos os rixosos respondem pela **participação** no tumulto, **independentemente** de se identificar quem desferiu qual golpe. Daí sua lógica peculiar — e as teses defensivas próprias.

> **Lição central:** a defesa da rixa se ganha **na conduta do cliente dentro do tumulto**, não na dosimetria. Antes de tudo, pergunte: **ele participou ativamente da luta, ou apenas esteve presente / tentou separar / defendeu-se?** Mera presença, intervenção pacificadora e legítima defesa **não** configuram participação punível. A segunda chave é o **parágrafo único**: se houve morte ou lesão grave, a pena de todos os rixosos aumenta — mas isso não transfere automaticamente a autoria do resultado a quem só participou da rixa.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do **art. 137 do CP** e das majorantes/qualificadoras invocadas na fonte oficial, bem como a **classificação do resultado** (lesão grave/gravíssima do art. 129, §§1º–2º; morte). Antes de citar **qualquer** súmula, tema ou acórdão (HC/REsp/RE, informativo), passe pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`. Doutrina e jurisprudência divergem em pontos centrais desta skill (natureza da rixa qualificada, absorção pelo resultado) — **omitir vence inventar**.

## Base legal

- **Art. 137, *caput*, CP** — "Participar de rixa, salvo para separar os contendores": **detenção de 15 dias a 2 meses, ou multa**. Infração de **menor potencial ofensivo** (pena máxima ≤ 2 anos) → competência do **JECRIM** (Lei 9.099/95), cabendo **transação penal** e, se for o caso, **ANPP**/suspensão condicional do processo.
- **Art. 137, parágrafo único, CP** — se da rixa **resulta lesão corporal de natureza grave ou morte**, aplica-se a pena de **detenção de 6 meses a 2 anos** a **todos os participantes**, **pelo só fato da participação** (rixa qualificada pelo resultado).
- **Cláusula legal de exclusão** — a própria lei ressalva quem participa "**para separar os contendores**": o pacificador **não** comete rixa.
- **Art. 129, CP** (lesão corporal) e **art. 121, CP** (homicídio) — dispositivos de **cotejo**: quando se prova a **autoria certa** de uma lesão/morte, discute-se a relação (concurso, absorção) entre a rixa e o crime de resultado praticado por autor conhecido.
- **Art. 25, CP** (legítima defesa) e **art. 23, CP** (excludentes) — teses de exclusão da ilicitude da conduta do cliente dentro do tumulto.
- **Lei 9.099/95** — rito sumaríssimo, transação penal, suspensão condicional do processo.

## Anatomia do tipo — o que a acusação precisa provar

Para condenar por rixa, a acusação deve demonstrar, quanto ao **cliente**:

1. **Existência da rixa** — luta/tumulto **súbito e recíproco** entre **três ou mais** pessoas (se forem apenas dois, é lesão/vias de fato individuais, **não** rixa).
2. **Participação ativa** do cliente **nas agressões recíprocas** — trocar golpes, aderir ao entrevero. **Dolo de participar** do tumulto (dolo genérico de rixa).
3. **Contemporaneidade** — a conduta se deu **durante** a rixa, no calor do tumulto.
4. **Ausência das ressalvas** — que **não** atuava para separar, **nem** em legítima defesa, **nem** era mero espectador.

➡️ **A defesa ataca qualquer um desses elementos.** Faltando prova de participação ativa (ponto 2) ou presente uma ressalva (ponto 4), **impõe-se a absolvição** (art. 386, especialmente incisos por atipicidade/excludente/insuficiência de prova — conferir a redação e o inciso adequado no CPP).

## Roteiro de teses defensivas por hipótese fática

### Hipótese 1 — Mera presença / espectador (atipicidade)

O cliente **estava no local** mas **não aderiu** às agressões — assistia, filmava, passava, gritava. **Estar presente não é participar.** A rixa exige **conduta ativa** de troca de golpes; presença passiva é **atípica**.

- **Tese:** ausência de participação ativa → **fato atípico** → absolvição.
- **Prova:** vídeos/testemunhos que situem o cliente **fora** do núcleo de agressões; ausência de lesões nele e de imputação de golpes por ele desferidos.
- **Cuidado:** a acusação costuma presumir participação de todos os presentes — **exija a individualização da conduta** de cada acusado (não há responsabilidade penal objetiva por estar no lugar).

### Hipótese 2 — Separar os contendores (exclusão legal expressa)

O cliente entrou no tumulto **para apartar** a briga. A **própria lei** (art. 137, *caput*, parte final) exclui a tipicidade de quem participa "**para separar os contendores**".

- **Tese:** conduta **pacificadora** → **excludente legal expressa** de tipicidade.
- **Prova:** testemunhos/vídeo mostrando gesto de separação; ausência de golpes ofensivos partindo do cliente; eventual lesão sofrida **ao apartar** reforça a tese.
- **Cuidado:** se, **ao separar**, o cliente **passou a agredir** por vingança/adesão, a ressalva pode cair — delimitar bem o **momento** e a **finalidade** da entrada no tumulto.

### Hipótese 3 — Legítima defesa (exclusão da ilicitude)

O cliente **reagiu a uma agressão injusta, atual ou iminente**, contra si ou terceiro, com **meios necessários e moderados** (art. 25, CP). A reação **defensiva** afasta a **adesão voluntária** ao tumulto — não há dolo de rixar, mas de **repelir agressão**.

- **Tese:** **legítima defesa** → exclusão da ilicitude (art. 23, II, e art. 25, CP) → absolvição.
- **Prova:** demonstrar quem iniciou a agressão contra o cliente, a **necessidade** e a **moderação** da reação.
- **Cuidado:** aferir **excesso** (art. 23, parágrafo único) e a **atualidade** da agressão; reação **posterior** ao fim da agressão vira revide (e pode configurar participação).

### Hipótese 4 — Autoria certa do resultado descaracteriza a rixa para aquele autor

Quando se **prova quem** desferiu a lesão grave ou o golpe letal, discute-se a **relação entre a rixa e o crime de resultado** praticado por **autor conhecido**. Duas ordens de tese, conforme o cliente:

- **(a) Se o cliente é o autor certo do resultado** — sustenta-se, em favor dele, que responde pelo **crime de resultado** (lesão grave / homicídio), podendo a rixa ser **absorvida** (princípio da consunção) OU responder-se em concurso — **ponto controvertido na doutrina/jurisprudência**. A escolha da tese depende do que é **mais benéfico** e do quadro probatório; **confirmar o entendimento atual** via `jurisprudencia-stj-stf` antes de fixar a estratégia.
- **(b) Se o cliente NÃO é o autor certo do resultado** — a **prova da autoria alheia** do resultado **não** transfere ao cliente a responsabilidade pela morte/lesão grave. O cliente responde, **no máximo**, pela **participação na rixa** (com a majorante do parágrafo único, que incide pelo **só fato objetivo do resultado** ter ocorrido, sem exigir que cada rixoso o tenha causado). **Tese defensiva:** afastar qualquer imputação do **resultado em si** ao cliente; manter a discussão no plano estrito da participação.

> **Ponto sensível (parágrafo único).** A rixa qualificada pelo resultado responsabiliza **todos** os participantes pela **majoração da pena da rixa** — não os torna coautores do homicídio/lesão. **Não confunda** "sofrer a majorante do art. 137, parágrafo único" com "responder por homicídio". Se a denúncia imputar ao cliente o **próprio resultado** sem prova de que ele o causou, ataque a **capitulação** e a **individualização**.

### Hipótese 5 — Não havia rixa (apenas dois contendores / briga individual)

Se o entrevero envolvia **apenas duas pessoas**, **não há rixa** (o tipo exige **três ou mais**). O fato migra para **lesão corporal** (art. 129) ou **vias de fato** (art. 21 da LCP) individuais — outra capitulação, outra defesa.

- **Tese:** **atipicidade da rixa** por ausência do número mínimo de contendores; requalificação (que pode, inclusive, ser **mais** ou **menos** favorável — avaliar).
- **Prova:** demonstrar o número real de agressores recíprocos; separar meros presentes de contendores.

### Hipótese 6 — Dúvida sobre a participação (in dubio pro reo)

Tumulto é ambiente **caótico**: prova frequentemente **frágil, contraditória, baseada em impressões**. Se a acusação **não individualiza** com segurança a conduta ativa do cliente, aplica-se o **in dubio pro reo** → absolvição por **insuficiência de provas**.

- **Tese:** prova insuficiente da participação ativa → absolvição.
- **Prova/estratégia:** explorar contradições entre testemunhos, ausência de laudo que atribua golpes ao cliente, generalidade da imputação ("todos brigavam").

## Teses e contra-teses (defesa × acusação)

| Tese defensiva | Base | Contra-tese (acusação) |
|---|---|---|
| Mera presença → atipicidade | Exige conduta ativa; sem responsabilidade objetiva | "Todos os presentes aderiram ao tumulto"; presunção de participação |
| Separar contendores → exclusão legal | Art. 137, *caput*, parte final | Alegar que, ao entrar, o cliente **agrediu**, não apartou |
| Legítima defesa → exclui ilicitude | Arts. 23 e 25, CP | Excesso; reação posterior à agressão (revide); adesão ao tumulto |
| Resultado por autor certo alheio não recai sobre o cliente | Parágrafo único majora a rixa, não cria coautoria no homicídio | Sustentar coautoria/domínio do fato no resultado |
| Absorção da rixa pelo crime de resultado (cliente autor) | Consunção | Concurso de crimes; autonomia dos bens jurídicos |
| Apenas dois contendores → não é rixa | Tipo exige 3+ | Havia terceiros que também trocaram golpes |
| Prova insuficiente → in dubio pro reo | Art. 386 CPP | Conjunto probatório coeso; prova testemunhal |

## Dispositivos e súmulas — sob o Citation Gate

- **Dispositivos de lei (citar com segurança, conferida a vigência):** art. 137, *caput* e parágrafo único, CP; arts. 23 e 25 (excludentes); arts. 129 e 121 (crimes de resultado, para cotejo); art. 386 do CPP (fundamentos da absolvição — conferir o inciso adequado à tese); Lei 9.099/95 (JECRIM, transação, suspensão condicional).
- **Precedentes específicos (números de HC/REsp/RE, informativos, temas):** **[NÃO VERIFICADO]** — esta skill **não** fixa número de acórdão. Os pontos controvertidos — (i) natureza da rixa qualificada pelo resultado e alcance do parágrafo único; (ii) absorção da rixa pelo homicídio/lesão grave quando há autoria certa; (iii) exigência de individualização da conduta de cada rixoso — devem ser fundamentados com o **entendimento atual** conferido via `jurisprudencia-stj-stf`. **Prefira ensinar a tese e ancorá-la no dispositivo** a arriscar um número de precedente.
- **Doutrina:** os manuais de Direito Penal (Parte Especial) tratam a rixa como crime plurissubjetivo de condutas contrapostas, a cláusula de exclusão do pacificador e a controvérsia sobre a qualificadora pelo resultado — **cite a tese doutrinária, não invente autor/página**.

## Estratégia processual e benefícios

- **Rito e competência:** rixa simples (*caput*) é **IMPO** → **JECRIM**. Avalie **transação penal** (art. 76 da Lei 9.099/95) já na fase preliminar — muitas vezes a **melhor saída** para o cliente sem antecedentes, se a tese de absolvição não for robusta. Rixa qualificada (parágrafo único, pena máx. 2 anos) ainda comporta **suspensão condicional do processo** (art. 89) e, conforme o caso, **ANPP** (art. 28-A do CPP) — conferir requisitos vigentes.
- **Prescrição:** dado o teto baixo de pena, a **prescrição** (pela pena máxima em abstrato ou, após sentença, pela pena concreta) é **frequentemente decisiva** — cheque prazos com a skill/calculadora de **prescrição** (`calculadora-prescricao` ou o método da skill de prescrição). Rixa simples prescreve em **prazo curto**: **calcule sempre**.
- **Individualização da defesa em processos com vários acusados:** cada rixoso tem posição própria — **não** aceite defesa genérica coletiva; personalize a tese (presença × separação × legítima defesa × participação) conforme a conduta **de cada** cliente.
- **Prova:** priorize **vídeos** (câmeras, celulares), **laudos** de lesões (a quem se atribuem?) e o **cotejo dos depoimentos** para individualizar — ou desindividualizar — a conduta do cliente.

## Erros comuns e checklist da defesa

**Checklist (antes de definir a tese e peticionar):**

- [ ] Havia **três ou mais** contendores recíprocos? (Se não, **não é rixa** — requalificar.)
- [ ] A conduta do cliente foi **ativa** (trocou golpes) ou apenas **presença/separação/defesa**?
- [ ] Incide alguma **ressalva legal** (separar contendores) ou **excludente** (legítima defesa, art. 25)?
- [ ] Houve **lesão grave ou morte** (parágrafo único)? Em caso positivo, a majorante recai sobre a **rixa**, sem tornar o cliente autor do resultado.
- [ ] Há **autoria certa** do resultado? É o cliente ou terceiro? Definir concurso/absorção **in bonam partem**.
- [ ] A denúncia **individualizou** a conduta do cliente ou imputou genericamente "todos brigavam"?
- [ ] A **prova** sustenta participação ativa com segurança, ou cabe **in dubio pro reo**?
- [ ] Competência do **JECRIM**? Cabe **transação / suspensão condicional / ANPP**? Foi ofertada?
- [ ] **Prescrição** calculada (teto baixo — pode extinguir a punibilidade)?
- [ ] Toda súmula/precedente conferido via `jurisprudencia-stj-stf` **antes** de citar?

**Anti-padrões (evitar):**

- Aceitar a **presunção** de que todo presente na cena participou da rixa (não há responsabilidade objetiva — exija individualização).
- Confundir a **majorante do parágrafo único** (que agrava a rixa de todos) com **coautoria no homicídio/lesão** — são coisas distintas.
- Deixar de invocar a **cláusula de exclusão do pacificador** quando o cliente entrou para **separar**.
- Tratar como rixa um entrevero de **apenas duas pessoas** (é lesão/vias de fato individuais).
- Esquecer a **transação penal** e, sobretudo, a **prescrição** — no rito de menor potencial ofensivo, prazos curtos extinguem punibilidade com frequência.
- **Inventar número de acórdão** para a controvérsia da qualificadora/absorção — ancore na **tese** e no **dispositivo**; verifique o precedente antes.
- Redigir defesa **coletiva genérica** quando há vários réus com condutas distintas.

## Lembretes finais

- **A chave é a conduta do cliente no tumulto:** presença ≠ participação; separar e defender-se **excluem** o crime.
- **Parágrafo único** majora a **rixa**, não cria coautoria no resultado — não deixe a acusação "promover" o cliente a homicida.
- **Autoria certa** do resultado muda o jogo: para o autor, discute-se consunção/concurso; para os demais, a discussão fica **no plano da participação**.
- **Menor potencial ofensivo:** pense **cedo** em transação, suspensão condicional e **prescrição** — muitas vezes resolvem antes da tese de mérito.
- **Individualize** sempre a defesa de cada acusado.
- **Confira vigência** (art. 137 e correlatos) e passe **toda** súmula/precedente pelo gate `jurisprudencia-stj-stf` antes de peticionar.

## Nota de conformidade

Material de **apoio técnico** — **rascunho sob revisão humana obrigatória**. Este documento **não** substitui o exame do caso concreto, dos autos e da prova pelo(a) advogado(a) responsável, a quem cabe a decisão final sobre a estratégia (CED/EAOAB; Provimento 205/2021 da OAB para comunicação/publicidade). Nenhuma súmula, tese ou precedente deve ser citado de memória: **tudo** passa pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` (há sanções por jurisprudência inventada por IA). Esta é uma skill do **polo de DEFESA**; se o caso for de atuação acusatória (MP/assistente de acusação), o roteador deve conferir o polo e selecionar a skill adequada.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
