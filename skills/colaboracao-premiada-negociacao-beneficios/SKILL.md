---
name: colaboracao-premiada-negociacao-beneficios
description: >-
  Use ao NEGOCIAR os benefícios de uma colaboração premiada (Lei 12.850/2013, art. 4º) — dimensionar
  a "moeda" do colaborador contra o prêmio buscado, escolher o benefício ótimo (perdão judicial,
  redução até 2/3, substituição por restritivas, não oferecimento de denúncia ou colaboração
  pós-sentença), proteger o cliente de cláusulas leoninas e garantir homologação. Gatilhos:
  colaboração premiada, delação, benefícios da delação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, colaboracao, negociacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["colaboracao-premiada-negociacao-beneficios", "colaboracao premiada", "negociacao beneficios"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-colaboracao-premiada-negociacao-beneficios"]
---

# Colaboração premiada — negociação dos benefícios

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

Esta skill é o **ofício da negociação dos benefícios** na colaboração premiada da **Lei 12.850/2013 (art. 4º)**: dado um cliente que tem informação a entregar, ela orienta **quanto essa informação vale**, **qual benefício buscar**, **o que conceder e em que ordem**, e **como blindar o acordo** contra cláusulas abusivas e contra a não-homologação. Não redige a peça do acordo nem a estratégia de plea comparativa (isso é de `colaboracao-premiada` e `estrategia-plea-negociacao-integrada-anpp-colaboracao`); ela cuida da **mesa de negociação** — o dimensionamento da "moeda", a escolha do prêmio e a proteção do colaborador.

> **Lição central:** o benefício não é dado, é **precificado pela efetividade**. O prêmio da colaboração é diretamente proporcional ao **resultado** que ela produz (art. 4º, I-V) e à **novidade** da informação — o que a acusação ainda não tem vale muito; o que ela já obteve por outros meios vale quase nada. Antes de prometer qualquer coisa ao cliente, faça o inventário frio da **moeda** (anexos, provas de corroboração, o que só ele pode entregar) e case-a com o **benefício ótimo** e com o **timing**. Colaborar tarde, ou com informação já conhecida, é expor o cliente sem prêmio correspondente — o pior negócio possível.

> **Cautela de vigência (obrigatória antes de citar):** a colaboração premiada foi profundamente alterada pela **Lei 13.964/2019 (Pacote Anticrime)**, que inseriu os arts. 3º-A a 3º-C e reescreveu vários parágrafos do art. 4º (natureza de negócio jurídico processual, momento, retratação, sigilo). Confira a **redação vigente** de cada dispositivo antes de fundamentar. Precedentes estruturais do STF — sobre direitos do colaborador e do delatado, homologação e limites do juiz (ex.: HC 127.483) — e a **Orientação Conjunta nº 1/MPF** evoluem: **todo precedente e enunciado passa pela skill `jurisprudencia-stj-stf`** antes de ir à peça. Na dúvida sobre um número de julgado, **omitir vence inventar**.

## Posição desta skill — a mesa, não a peça

- Esta skill **negocia os benefícios**. A **redação** do termo e dos anexos fica com `colaboracao-premiada`; a **decisão comparativa** entre colaboração, ANPP, transação e confissão fica com `estrategia-plea-negociacao-integrada-anpp-colaboracao`.
- Perspectiva **da defesa** (a spec indica **polo defensivo**). O acordo é do **Ministério Público** (ou da autoridade policial, na fase de investigação, com manifestação do MP); a defesa **provoca, dimensiona a moeda, negocia condições e recomenda** — mas **quem decide colaborar é sempre o cliente**, informado (autonomia do assistido; CED/EAOAB).
- **Colaboração é personalíssima e irreversível na prática.** O cliente entende que, uma vez entregues os fatos, não há como "des-colaborar"? Sem essa compreensão real, não há decisão válida.

## Base legal (âncoras)

- **Lei 12.850/2013, art. 4º, caput** — os **benefícios** que o juiz pode conceder ao colaborador: **perdão judicial**, **redução em até 2/3 da pena privativa de liberdade** ou **substituição por pena restritiva de direitos**. São o "cardápio" a negociar.
- **Art. 4º, incisos I a V** — os **resultados** que a colaboração deve produzir (basta um, conforme a efetividade): (I) identificação dos demais coautores e partícipes e das infrações por eles praticadas; (II) revelação da **estrutura hierárquica e da divisão de tarefas** da organização; (III) **prevenção** de infrações decorrentes da atividade da organização; (IV) **recuperação total ou parcial do produto ou proveito** das infrações; (V) **localização de eventual vítima com integridade física preservada**. É a "régua" que precifica o prêmio.
- **Art. 4º, §2º** — **perdão judicial a qualquer tempo**: considerada a relevância da colaboração, o **MP** (e o **delegado**, nos autos do inquérito, com manifestação do MP) pode **requerer ou representar ao juiz pela concessão de perdão judicial** ao colaborador, **ainda que esse benefício não tenha sido previsto na proposta inicial**. É via autônoma de perdão — **não se confunde** com a imunidade (não denúncia) do §4º.
- **Art. 4º, §4º, I-II** — **não oferecimento de denúncia** (imunidade): nas mesmas hipóteses do caput, o **MP poderá deixar de oferecer denúncia** se o colaborador **(I) não for o líder** da organização criminosa **e (II) for o primeiro** a prestar efetiva colaboração. É o benefício máximo, condicionado a essas **duas qualidades cumulativas** + efetividade.
- **Art. 4º, §5º** — **colaboração posterior à sentença**: reduz a pena **até a metade** ou admite **progressão de regime ainda que ausentes os requisitos objetivos**. Amplia a janela: colaborar continua valendo mesmo depois de condenado.
- **Art. 4º, §16** — **regra de corroboração: nenhuma condenação pode ser proferida com fundamento apenas nas declarações do colaborador.** A delação, isolada, não condena — precisa de elementos externos que a confirmem. É a principal proteção do delatado e o principal limite da "moeda".
- **Art. 4º, §§6º a 8º** — **procedimento**: negociação entre delegado/MP e defesa (§6º); **homologação judicial** com verificação de **regularidade, legalidade e voluntariedade** (§7º); poder do juiz de recusar, adequar ou devolver (§8º).
- **Interface institucional:** a **Orientação Conjunta nº 1/MPF** e a jurisprudência estrutural do **STF** (ex.: **HC 127.483**, sobre a natureza do acordo e os direitos do delatado) — **sempre sob o Citation Gate**.

## Anatomia do acordo — o que se negocia (e os requisitos)

Um acordo de colaboração premiada tem quatro dimensões, e cada uma é objeto de barganha:

1. **A moeda (o que o colaborador entrega):** os **fatos** e as **provas de corroboração** — os "anexos" (documentos, mensagens, planilhas, contas, indicação de testemunhas), casados a um ou mais dos **resultados do art. 4º, I-V**. Sem entrega apta a produzir resultado, **não há prêmio** — a efetividade é a condição do benefício.
2. **O prêmio (o que o colaborador recebe):** um item do cardápio do caput (perdão, redução até 2/3, substituição) — ou o **perdão judicial do §2º** (requerível a qualquer tempo) — **ou** a imunidade do **§4º, I-II** (não denúncia) **ou**, se já sentenciado, os benefícios do §5º (redução até 1/2, progressão sem requisito objetivo).
3. **As obrigações e cláusulas:** dizer a verdade e não omitir, entregar todos os anexos, comparecer, não praticar novos crimes, muitas vezes renunciar/repatriar bens. **Aqui moram as cláusulas leoninas** — atenção redobrada (seção própria).
4. **As garantias:** sigilo (art. 7º e §§), homologação como condição de eficácia, e a **segurança jurídica** de que o prêmio pactuado será honrado se a colaboração for efetiva.

**Requisitos de validade que a defesa deve assegurar:**
- **Voluntariedade** (§7º) — sem coação, com defesa técnica presente e atuante. Vício aqui contamina o negócio jurídico processual.
- **Efetividade** — a colaboração deve **produzir** ao menos um resultado do art. 4º; promessa vaga não sustenta prêmio.
- **Homologação judicial** — o acordo só ganha eficácia após o juiz verificar regularidade, legalidade e voluntariedade (§7º). Negociar como se o juiz fosse mero carimbo é erro grave.

## Roteiro tático de negociação

### Passo 0 — Triagem de conflito e legitimidade

Antes de sentar à mesa: em **coautoria**, um mesmo advogado negociando por dois corréus cujas versões colidem — sobretudo quando **um delata o outro** — é conflito de interesses (art. 17 EAOAB). **Cada colaborador precisa de defesa própria e independente.** Confirme também que a colaboração é a via certa (via `estrategia-plea-negociacao-integrada-anpp-colaboracao`) antes de gastar a moeda aqui.

### Passo 1 — Inventário frio da moeda (dimensionar a efetividade)

Antes de qualquer conversa com a acusação, mapeie **o que o cliente tem** e **quanto disso é novo**:
- **Que resultado do art. 4º cada informação produz?** Identifica coautores (I)? Revela a estrutura (II)? Previne crimes em curso (III)? Recupera produto/proveito (IV)? Localiza vítima (V)? Quanto mais resultados e mais graves, maior o prêmio negociável.
- **A informação é nova ou a acusação já a tem?** O valor da colaboração **cai com o tempo** — a "efetividade" (e o prêmio) despenca quando a investigação já obteve aquilo por outros meios. Este é o cálculo decisivo.
- **Há corroboração?** Por força do §16, delação **sem** prova externa não condena ninguém — logo, vale pouco como moeda. O colaborador que entrega **anexos que corroboram** vale muito mais que o que só "conta a história".
- **A posição relativa entre corréus:** quem detém a informação-chave negocia melhor; quem só confirma o já sabido, pior.

### Passo 2 — BATNA e ZOPA (a matemática da mesa)

- **BATNA da defesa** (melhor alternativa ao acordo): o cenário do cliente **sem** colaborar — força da prova contra ele, pena projetada, chance de absolvição, cabimento de ANPP ou de confissão atenuante. Se a BATNA é boa (prova fraca, boa chance de absolvição), colaborar pode ser mau negócio.
- **BATNA da acusação:** o que o MP consegue **sem** este colaborador. Se a acusação depende da informação dele para desmontar a organização, o poder de barganha da defesa sobe; se ela já tem tudo, o prêmio encolhe.
- **ZOPA (zona de acordo possível):** existe faixa de sobreposição entre o **mínimo** que a defesa aceita (ex.: substituição por restritivas) e o **máximo** que o MP concede (ex.: não denúncia)? Definir a ZOPA **antes** evita ancorar em prêmio impossível ou aceitar prêmio aquém do devido.

### Passo 3 — Escolher o benefício ótimo (casar moeda, posição e timing)

| Benefício | Quando é o alvo realista | Condição-chave |
|---|---|---|
| **Não oferecimento de denúncia** (§4º, I-II) — imunidade | Colaborador **não é líder** **e é o primeiro** a colaborar efetivamente | As duas qualidades cumulativas; efetividade alta |
| **Perdão judicial** (caput) | Colaboração de altíssima efetividade; réu de menor culpabilidade | Resultado(s) relevante(s) + valoração judicial favorável |
| **Redução de até 2/3 da PPL** (caput) | Caso típico: efetividade boa, mas há participação relevante do cliente | Percentual conforme a efetividade; negociar a faixa |
| **Substituição por restritivas de direitos** (caput) | Quando a redução não basta para evitar o cárcere | Compatibilidade com a pena resultante |
| **Colaboração pós-sentença** (§5º) — redução até 1/2 ou progressão sem requisito objetivo | Cliente **já condenado** que ainda tem o que entregar | A janela permanece aberta na execução |

> **Regra do prêmio ótimo:** mire o **teto realista** que a moeda e a posição sustentam, mas **ancore acima** (ver Passo 4). A imunidade do **§4º, I-II** (não denúncia) é o topo, porém só se o cliente **não for líder e for o primeiro** — se qualquer dessas condições falhar, o alvo desce para perdão/redução. Não prometa ao cliente imunidade quando ele é o líder ou chegou depois de outro colaborador.

### Passo 4 — Sequenciamento, o que conceder e o que reter (o timing importa)

- **Ancore alto, conceda em degraus.** Abra pedindo o benefício superior sustentável (ex.: não denúncia) e recue em passos — perdão → redução de 2/3 → 1/2 — trocando cada recuo por contrapartida (mais um anexo, mais um resultado), nunca de graça.
- **Não entregue a moeda antes do prêmio.** O erro clássico é "provar boa-fé" revelando os fatos centrais **antes** de haver acordo homologado ou, ao menos, termos claros. Trabalhe com **entrega faseada** e proteção do sigilo (art. 7º): apresenta-se o **potencial** da colaboração (o que se pode entregar) sem esvaziá-la de antemão.
- **Chegue primeiro.** O §4º, II premia **o primeiro** a colaborar; em investigação com vários possíveis colaboradores, **timing é tudo** — quem chega antes leva o melhor prêmio e trava a moeda dos demais.
- **Colaborar cedo vale mais.** Informação que a acusação ainda não tem tem prêmio alto; a mesma informação, depois que a investigação avança, perde efetividade e prêmio.
- **Calibre as condições à realidade do cliente** — repatriação de bens, prestação pecuniária e obrigações contínuas precisam ser **cumpríveis**; obrigação impossível de honrar vira munição para rescisão futura.

### Passo 5 — Blindar a homologação e a segurança jurídica

- Redigir termos **claros e mensuráveis** sobre o prêmio pactuado e sobre o que caracteriza cumprimento, reduzindo a discricionariedade na hora de honrar.
- Antecipar o crivo do §7º (regularidade, legalidade, voluntariedade) — documentar a **presença e atuação da defesa** e a **voluntariedade**, para que a homologação não naufrague.
- Ter presente que o §16 (necessidade de corroboração) protege o **delatado**, mas também **valoriza** o colaborador que entrega prova externa — usar isso na precificação.

## Armadilhas e cláusulas a evitar

- **Cláusula de renúncia ampla e antecipada de direitos** (ao silêncio, a recorrer, a impugnar) — o colaborador não pode ser reduzido a objeto do acordo; renúncias devem ser específicas, informadas e proporcionais.
- **Prêmio vago ou "a critério do MP"** — benefício sem parâmetro objetivo é promessa vazia; exigir a definição do prêmio (item do cardápio + faixa de redução) e das condições de cumprimento.
- **Obrigações impossíveis ou desproporcionais** — repatriação de valores que o cliente não detém, prazos irreais: viram causa de rescisão. Calibrar ao que é factível.
- **Entrega integral da moeda antes de acordo/homologação** — esvazia o poder de barganha e expõe o cliente sem prêmio garantido.
- **Ignorar o efeito sobre terceiros e a própria segurança** — colaboração expõe o cliente e a família; dimensionar risco e medidas de proteção **antes** de assinar.
- **Confundir efetividade com volume** — muitos anexos irrelevantes não valem um único que produza resultado do art. 4º; o MP precifica **resultado**, não quantidade.
- **Tratar a homologação como carimbo** — o juiz pode recusar/adequar (§7º/§8º); negociar sem prever esse crivo é temerário.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** **dispositivos da Lei 12.850/2013 podem ser citados livremente.** Qualquer **súmula, tema, enunciado ou acórdão** é indicado como **ponto a conferir** — confirme número, teor e vigência via `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`) **antes** de levar à peça. Melhor faltar precedente do que citar julgado inexistente.

- **STF, HC 127.483** — leading case sobre a **natureza do acordo de colaboração** (negócio jurídico processual) e os **direitos do delatado** e do colaborador — **[NÃO VERIFICADO]**, conferir teor, alcance e evolução posterior antes de invocar.
- **Orientação Conjunta nº 1/MPF** — parâmetros institucionais de negociação e de benefícios — **[NÃO VERIFICADO]**, confirmar existência, número, versão vigente e conteúdo em fonte oficial atual.
- Entendimentos sobre **limites dos benefícios**, **momento** da colaboração, **retratação**, **sigilo** e **eficácia da homologação** foram remodelados pela **Lei 13.964/2019** e são objeto de precedentes específicos — **[NÃO VERIFICADO]**, tudo pelo gate.

> Na peça, **ensine a tese e ancore no dispositivo** (art. 4º, caput e §§2º, 4º, 5º, 16 da Lei 12.850) em vez de arriscar um número de acórdão. Todo precedente entra só depois do gate.

## Checklist e anti-padrões

- [ ] **Moeda inventariada:** qual(is) resultado(s) do art. 4º, I-V a colaboração produz, e a informação é **nova**?
- [ ] **Corroboração** disponível (anexos que confirmam), à luz do §16?
- [ ] **Posição do cliente:** é **líder**? É o **primeiro** a colaborar? (define o cabimento do §4º, I-II)
- [ ] **Benefício ótimo** escolhido casando moeda, posição e timing (não denúncia / perdão / redução / substituição / §5º)?
- [ ] **BATNA e ZOPA** definidas antes da mesa (com e sem acordo, para defesa e acusação)?
- [ ] **Sequenciamento** planejado — ancoragem, concessões em degrau, entrega faseada sem esvaziar a moeda?
- [ ] **Condições cumpríveis** e calibradas à realidade do cliente?
- [ ] **Cláusulas leoninas** afastadas (renúncias amplas, prêmio vago, obrigações impossíveis)?
- [ ] **Voluntariedade e defesa técnica** documentadas para a homologação (§7º)?
- [ ] **Conflito de interesses** afastado (defesa própria por corréu em delação)?
- [ ] **Consentimento informado** do cliente sobre a **irreversibilidade** da colaboração, documentado?
- [ ] **Toda súmula/precedente conferido** via `jurisprudencia-stj-stf` — nada de memória?

**Anti-padrões (evitar):**
- **Prometer ao cliente imunidade (§4º, I-II) quando ele é líder ou não é o primeiro** a colaborar.
- **Entregar os fatos centrais antes de acordo/homologação** — moeda gasta sem prêmio.
- **Colaborar tarde**, depois que a acusação já obteve a informação — efetividade e prêmio esvaziados.
- **Aceitar prêmio vago ("a critério do MP")** ou obrigações impossíveis de cumprir.
- **Um só advogado para corréus com versões colidentes** em delação (art. 17 EAOAB).
- **Confundir volume de anexos com efetividade** — o prêmio segue o **resultado** (art. 4º, I-V), não a quantidade.
- **Tratar a homologação como carimbo** — o juiz verifica regularidade, legalidade e voluntariedade (§7º/§8º).
- **Citar HC/Orientação de memória** — tudo pelo gate.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio metodológico à **negociação dos benefícios** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável, e a decisão de colaborar é **do cliente**, informado (CED/EAOAB; autonomia do assistido).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **Ministério Público / acusação**, a lógica se **inverte** — a colaboração é **ato do MP**, que oferece e precifica o benefício conforme a efetividade (art. 4º, I-V) e a Orientação institucional (CNMP/Orientação Conjunta MPF); espelhar as teses acima como **critérios de oferecimento e controle**, não de barganha da defesa.
- **Citation Gate:** nenhuma súmula, tese, Orientação ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** a colaboração é **sigilosa** (art. 7º); dados do colaborador, dos delatados e dos anexos **nunca** vão a repositório público (`acervo/casos/` é gitignored).

## Lembretes finais

- **A moeda precede o prêmio:** inventarie o que o cliente entrega (resultados do art. 4º, I-V) e quão **nova** é a informação **antes** de prometer benefício.
- **Efetividade + corroboração** definem o valor — delação isolada não condena (§16) e, por isso, vale pouco como moeda.
- **Posição e timing:** o §4º, I-II (não denúncia) exige **não ser líder e ser o primeiro**; colaborar **cedo** vale mais.
- **Sequencie a entrega** — ancore alto, conceda em degraus, não esvazie a moeda antes do acordo homologado.
- **Blinde a homologação** (§7º) e afaste **cláusulas leoninas**; condições precisam ser **cumpríveis**.
- **Irreversibilidade:** o cliente decide, informado, ciente de que não há "des-colaborar".
- **Sem jurisprudência de memória** — HC 127.483, Orientação MPF e limites dos benefícios pelo gate `jurisprudencia-stj-stf`.

**Padrão de redação:** definido o benefício e as condições, ao redigir o termo e os anexos aplique também `colaboracao-premiada` (peça) e `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
