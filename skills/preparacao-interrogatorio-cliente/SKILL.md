---
name: preparacao-interrogatorio-cliente
description: >-
  Use ao preparar o CLIENTE (réu/investigado) para o interrogatório judicial (arts. 185 a 196 do
  CPP) e ao orientar eticamente testemunhas de defesa sobre a dinâmica do ato — decisão informada
  entre silêncio total, silêncio seletivo e falar (CF, art. 5º, LXIII; CPP, art. 186), simulação das
  perguntas prováveis da acusação, videoconferência (art. 185, §2º), entrevista prévia reservada
  (art. 185, §5º), postura e vestimenta… Não use para compartilhamento de dados, promessa de
  resultado ou decisão jurídica sem autorização.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, audiencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-preparacao-interrogatorio-cliente"]
  risk_level: "r3"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  positive_triggers: ["preparacao-interrogatorio-cliente", "preparacao interrogatorio", "interrogatorio cliente"]
  negative_triggers: ["compartilhamento de dados, promessa de resultado ou decisão jurídica sem autorização"]
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
---

# Preparação do Cliente para o Interrogatório (arts. 185–196 do CPP)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `client-operations`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** identidade/representação e canal autorizado.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** verificar autorização, conflito, urgência e minimização de dados; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; resumo operacional sem promessa de resultado; urgências, pendências, responsável e prazo; checkpoint de autorização/revisão.
- **Gate:** comunicação externa sem aprovação. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **sessão de preparação do cliente** para o interrogatório judicial e a **orientação ética de testemunhas de defesa**: a decisão informada entre **silêncio total, silêncio seletivo e falar**, a explicação da dinâmica do ato (quem pergunta, em que ordem, o que vem antes), a **simulação das perguntas prováveis da acusação**, as regras da **videoconferência** e a **postura no dia**. Complementa — sem duplicar — a skill `preparacao-audiencia` (briefing logístico e roteiro de perguntas **do advogado**) e a skill `audiencia-inquiricao-testemunhas` (técnica **do advogado** ao vivo na prova oral): aqui quem se prepara é **quem vai ser perguntado**. Entregáveis: **roteiro da sessão de preparação + checklist do dia**.

> **Síntese operacional:** a decisão silêncio × falar é das mais importantes do processo — e costuma ser tomada no corredor do fórum, cinco minutos antes do ato. Não deveria. O interrogatório é o **último ato da instrução** (art. 400): o cliente falará (ou calará) **depois** de toda a prova oral, e a estratégia deve ser construída **em sessão reservada, dias antes**, e **reavaliada** na entrevista prévia do dia (art. 185, §5º). O silêncio é direito sem custo jurídico (art. 186, parágrafo único). Preparar não é ensaiar mentira: **treina-se a forma, nunca se dita o conteúdo** — para o cliente e, com rigor redobrado, para as testemunhas (CP 342 e 343 são a fronteira penal).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 185 a 196, 217, 400, 474 e 478 do CPP (redações centrais das Leis 10.792/2003, 11.719/2008 e 11.900/2009; art. 185, §10, incluído pela Lei 13.257/2016) e a regulamentação do CNJ para audiências por videoconferência (Resolução CNJ 354/2020). Dispositivo incerto → conferir via `lei-e-sumula`. Sobre **silêncio seletivo**, **interrogatório ao final em ritos especiais** e **reperguntas entre corréus**, a jurisprudência evolui: **pesquise via agente `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] o que não confirmar**. Toda citação passa pelo gate da best-practice `verificacao-citacoes` antes da entrega.

## O instituto e a base legal

O interrogatório é ato **personalíssimo** de natureza mista — **meio de defesa** (autodefesa: direito de audiência e de presença) e fonte de prova. Mapa normativo da preparação:

| Dispositivo | Conteúdo | Uso na preparação |
|-------------|----------|-------------------|
| **CF, art. 5º, LXIII** | Direito de permanecer calado | Fundamento do silêncio total e seletivo |
| **CPP, art. 185, caput e §1º** | Interrogatório sempre com **defensor**; réu preso em sala própria do estabelecimento | Ausência de defensor = nulidade absoluta |
| **Art. 185, §2º a §4º** | **Videoconferência excepcional**, por decisão **fundamentada**, em hipóteses taxativas; **intimação com 10 dias**; acompanhamento dos demais atos | Bloco específico abaixo |
| **Art. 185, §5º** | **Entrevista prévia e reservada** com o defensor, em **qualquer** modalidade (canal telefônico reservado no ato virtual) | Requerer SEMPRE; negativa → protesto |
| **Art. 185, §10** | Informação sobre **filhos/dependentes** da pessoa presa | Insumo para prisão domiciliar/cautelares |
| **Art. 186 e p. único** | Advertência do direito ao silêncio; **silêncio não importa confissão nem prejuízo** | Núcleo da decisão estratégica |
| **Art. 187** | Duas partes: **pessoa do acusado** (vida pregressa) e **fatos** | Ambas se treinam — a primeira alimenta a dosimetria |
| **Art. 188** | Esgotadas as perguntas do juiz, as partes complementam **por intermédio do juiz** (sistema presidencialista) | Ordem prática: juiz → MP → **defesa por último** |
| **Arts. 189 e 190** | Negativa: indicar provas; confissão: motivos e coautores | Consequências de cada rota |
| **Art. 191** | **Corréus interrogados separadamente** | Preparar para versões paralelas |
| **Art. 196** | **Novo interrogatório** a qualquer tempo, de ofício ou a pedido | Silêncio hoje não fecha a porta de falar depois |
| **Art. 400** | Interrogatório é o **último ato** da AIJ | O cliente decide vendo a prova já produzida |
| **Art. 478, II** | No júri, é vedado às partes referir-se ao **silêncio em prejuízo** do acusado | Reforço da ausência de custo jurídico |
| **CP, arts. 339, 341, 342, 343, 344** | Denunciação caluniosa; autoacusação falsa; falso testemunho; corrupção de testemunha; coação | Limites penais da preparação |

## Cabimento — quando esta skill entra em cena

| Situação | Atuação | Momento ideal |
|----------|---------|---------------|
| AIJ do rito ordinário/sumário se aproximando | Sessão completa (roteiro abaixo) | Dias antes do ato — nunca no corredor |
| Interrogatório em **plenário do júri** | Sessão adaptada: ali as partes perguntam **diretamente** ao acusado (art. 474, §1º) e os jurados por intermédio do juiz presidente (§2º) — sabatina mais dura que a do rito comum; ver `juri-plenario-debates` | Antes da sessão plenária |
| **Videoconferência** decretada (art. 185, §2º) | Bloco específico + eventual impugnação da decisão | Nos 10 dias da intimação (§3º) |
| **Novo interrogatório** (art. 196) | Reavaliar a estratégia — o silêncio anterior não vincula | Antes do novo ato |
| Oitiva na **fase policial** (investigado) | Mesmos direitos constitucionais (CF, 5º, LXIII); foco no silêncio até conhecer os autos | Antes de qualquer depoimento |
| Testemunhas de defesa arroladas | Orientação **informativa** (limite ético abaixo) | Individualmente, antes da audiência |

## A decisão central — silêncio total, silêncio seletivo ou falar

A escolha é **do cliente**, após consentimento informado (dever de informação realista, sem promessa de resultado — `etica-oab-sigilo`). O defensor apresenta os cenários **deste caso**:

| Estratégia | Quando tende a ser indicada | Riscos a gerenciar |
|------------|-----------------------------|--------------------|
| **Silêncio total** | Prova acusatória frágil (não ajudar a completá-la); versão insustentável; risco alto de contradição com a fase policial; cliente que não controla impulsos sob pressão | Custo jurídico é vedado (art. 186, p.u.), mas a impressão pessoal existe — gerenciar postura; abre-se mão de humanizar e da atenuante da confissão |
| **Silêncio seletivo** | Existe bloco seguro (álibi documentado, ponto favorável) e bloco perigoso; responder só à defesa ou só a temas definidos | Exige treino fino — alternância hesitante parece cálculo; estado atual da jurisprudência: pesquisar via `jurisprudencia-stj-stf` [NÃO VERIFICADO] |
| **Falar — negativa** (art. 189) | Versão coerente, estável e minimamente verificável, com provas a indicar | Cada resposta abre flanco à repergunta; mentira periférica descoberta derruba o conjunto |
| **Falar — confissão** (art. 190) | Prova robusta; estratégia de pena: confissão que fundamenta a condenação gera a atenuante (**Súmula 545/STJ**); coerência com tese de desclassificação/minorante | Detalhamento pode agravar (motivos, coautoria); valoração da confissão **parcial/qualificada** é disputada — pesquisar [NÃO VERIFICADO] |

**Limites que o cliente precisa ouvir (mentira não é estratégia):** o réu não presta compromisso e não comete falso testemunho, mas a autodefesa **não cobre**: atribuir-se **falsa identidade** na qualificação (conduta típica ainda que em alegada autodefesa — **Súmula 522/STJ**); **assumir crime de terceiro** ("segurar para o laranja") — autoacusação falsa é crime (CP, art. 341); **imputar falsamente** o fato a quem sabe inocente (risco de denunciação caluniosa — CP, art. 339). Silêncio é sempre mais seguro que uma mentira ruim.

**A decisão da sessão é provisória.** Como o interrogatório encerra a instrução (art. 400), a estratégia definida dias antes é **hipótese**: reavalie com o cliente na **entrevista prévia e reservada do dia** (art. 185, §5º), à luz do que a prova oral efetivamente rendeu.

## Dinâmica do ato — o que explicar ao cliente

1. **Você fala por último** (art. 400): antes vêm ofendido, testemunhas e peritos. O STF consolidou o interrogatório como ato final mesmo em ritos especiais (drogas etc.) — pesquise o estado atual via `jurisprudencia-stj-stf` [NÃO VERIFICADO]. Antecipação do interrogatório → a defesa protesta em ata.
2. **O ato tem duas partes** (art. 187): primeiro a **pessoa** (residência, profissão, vida pregressa) — respostas descuidadas aqui viram material de dosimetria (antecedentes, conduta social); depois os **fatos**, com roteiro legal previsível (§2º: se a acusação é verdadeira, onde estava, se conhece vítima/testemunhas, se conhece objetos apreendidos, o que alega em defesa).
3. **Quem pergunta e em que ordem:** o **juiz** conduz e as partes complementam **por seu intermédio** (art. 188 — sistema presidencialista, diferente da prova testemunhal do art. 212, em que as partes perguntam direto — ver `audiencia-inquiricao-testemunhas`): acusação primeiro, **defesa por último** — última palavra serve para reabilitar pontos. **Exceção: no plenário do júri as partes perguntam diretamente ao acusado** (art. 474, §1º) — prepare o cliente para sabatina sem filtro.
4. **A advertência do silêncio é obrigatória** (art. 186) e o direito pode ser exercido **pergunta a pergunta** — inclusive só para as perguntas da acusação.
5. **Corréus são ouvidos separadamente** (art. 191); sobre reperguntas da defesa de um corréu ao outro, a jurisprudência evolui — pesquisar [NÃO VERIFICADO].
6. **Falar depois ainda é possível** (art. 196): novo interrogatório a qualquer tempo, fundamentadamente — o silêncio de hoje não é definitivo.
7. **Se preso:** prestar a informação sobre filhos e dependentes (art. 185, §10) — alimenta pedidos de domiciliar e cautelares.

## Interrogatório por videoconferência (art. 185, §2º)

- **Presencial é a regra** (sala do estabelecimento — §1º — ou fórum); a videoconferência é **excepcional**, exige **decisão fundamentada** e só cabe nas hipóteses **taxativas** dos incisos I a IV (risco de fuga/segurança pública; enfermidade ou dificuldade relevante de comparecimento; impedir influência sobre testemunha/vítima quando o art. 217 não bastar; gravíssima questão de ordem pública).
- **Intimação com 10 dias de antecedência** (§3º) — contagem do art. 798 do CPP (prazos **contínuos e peremptórios**; exclui-se o dia do começo, inclui-se o do vencimento); prazo de **manifestação** da Defensoria conta **em dobro** (LC 80/94, arts. 44, I, 89, I, e 128, I).
- **Garantias do ato virtual:** acompanhar os demais atos da audiência (§4º); **entrevista prévia e reservada** com canais telefônicos reservados entre defensor no presídio, advogado na sala e o preso (§5º); fiscalização da sala (§6º).
- **Preparação específica:** testar equipamento e enquadramento; saber **quem estará na sala** do presídio; combinar com o cliente o **pedido de pausa** para conferenciar reservadamente com a defesa antes de responder tema sensível.
- **Tese pronta:** videoconferência sem fundamentação concreta ou fora das hipóteses legais → **nulidade** — protestar no ato e demonstrar o prejuízo (art. 563).

## Simulação das perguntas prováveis — o coração da sessão

- **A fonte é a imputação:** acione o agente `analise-denuncia` para decompor a denúncia em elementos (autoria, materialidade, dolo, qualificadoras, majorantes) — **cada elemento vira pergunta provável** do juiz e do MP.
- **O roteiro legal é previsível:** treine cada inciso do art. 187, §2º, mais os confrontos que a acusação fará com o **interrogatório policial**, laudos e depoimentos colhidos — mapeie as contradições **antes** que o MP o faça.
- **Método:** o advogado faz o papel da acusação, das perguntas mais duras às mais simples. Treinam-se quatro comportamentos: (a) **resposta curta** — pare quando terminar, não preencha o silêncio; (b) **"não sei / não me recordo" honesto** — nunca inventar para agradar; (c) **exercer o silêncio combinado sem hesitação visível**; (d) **não discutir nem ironizar** com quem pergunta.
- **Treina-se forma e verdade — jamais conteúdo ditado:** nada de "texto decorado" nem roteiro de respostas escrito pelo advogado. Resposta robotizada desmonta na segunda repergunta e contamina a credibilidade do resto.

## Postura e vestimenta

- Roupa **sóbria e discreta**; réu preso: requerer com antecedência a apresentação em **trajes civis** e a **retirada das algemas** durante o ato — uso de algemas é excepcional e exige justificativa por escrito (**Súmula Vinculante 11/STF**), com impacto especialmente grave diante dos jurados.
- Tratamento: "Excelência" ao juiz; responder **olhando para quem perguntou** — olhar para o advogado antes de cada resposta sinaliza coaching e desidrata a credibilidade.
- Mãos visíveis, sem braços cruzados; não interromper; **pedir para repetir** o que não entendeu; pausas são permitidas.
- No ato virtual: ambiente neutro e silencioso, câmera à altura dos olhos, **sem terceiros nem anotações** fora do combinado.
- No dia: sem conversas de corredor sobre o caso, celular desligado, nenhum comentário com escolta ou servidores.

## Orientação de testemunhas — informar o ato, jamais moldar o conteúdo

A fronteira é penal e ética: **induzir** testemunha é participação em **falso testemunho** (CP, art. 342); **dar, oferecer ou prometer vantagem** para afirmar falso, negar ou calar a verdade é **corrupção de testemunha** (CP, art. 343); **pressionar ou ameaçar** é coação no curso do processo (CP, art. 344); tudo isso é também infração ética (concurso a ato contrário à lei — EAOAB, art. 34, XVII).

| PODE (informar sobre o ATO) | NÃO PODE (moldar o CONTEÚDO) |
|-----------------------------|------------------------------|
| Explicar a dinâmica: compromisso (CPP, art. 203), perguntas diretas das partes (art. 212), possibilidade de **contradita** (art. 214) | Sugerir, ditar ou "corrigir" a versão; ensaiar respostas substantivas; entregar roteiro de respostas |
| Informar direitos: recusa de parentes (art. 206), escusa por sigilo profissional (art. 207), dispensa de compromisso (art. 208) | Mostrar o depoimento de outra testemunha para "alinhar" versões |
| Orientar: **diga sempre a verdade**; "não sei/não me recordo" é resposta legítima; responda **com calma e verdade** sobre vínculos na contradita — negar vínculo real expõe a testemunha à apuração de falso (CPP, art. 211) | Pedir que omita, negue ou "suavize" a verdade |
| Recomendar que reveja **registros próprios** (agenda, fotos, mensagens) para situar datas | Prometer ou dar qualquer vantagem ligada ao teor do depoimento |
| Orientar postura, vestimenta e logística (horário, local, documento) | Pressionar, constranger ou insinuar consequências |
| Custear deslocamento **razoável, documentado e incondicionado** | Condicionar qualquer ajuda ao conteúdo do relato |

**Prepare cada testemunha separadamente** — encontro coletivo cria aparência de alinhamento e municia a contradita e o impeachment adversários. Registre em nota interna o caráter **informativo** da orientação (proteção do próprio advogado). E lembre a distinção ao cliente: **ele não é testemunha** — não presta compromisso e não comete falso testemunho; a testemunha, sim.

## Estrutura forense — roteiro da sessão de preparação (entregável 1)

```
SESSÃO DE PREPARAÇÃO PARA INTERROGATÓRIO — [CLIENTE] — Autos nº [PROCESSO]
Sessão: [DATA/LOCAL — reservado] · Audiência: [DATA/HORA/VARA] · Modalidade: [presencial/vídeo]

BLOCO 1 — LEITURA DO CASO COM O CLIENTE
  1.1 A imputação em linguagem simples: o que a denúncia afirma, elemento por
      elemento (insumo: agente analise-denuncia)
  1.2 A prova produzida até aqui: o que ficou forte e fraco na instrução
  1.3 O que o cliente declarou na FASE POLICIAL — ler junto, marcar cada risco
      de contradição (bloco obrigatório)

BLOCO 2 — DIREITOS E DINÂMICA DO ATO
  2.1 Direito ao silêncio (CF, 5º, LXIII; CPP, 186): total e seletivo; sem
      prejuízo jurídico; exercível pergunta a pergunta
  2.2 Ordem do ato: último ato da AIJ (art. 400); juiz → MP → defesa (art. 188);
      duas partes do art. 187 (pessoa + fatos)
  2.3 Entrevista prévia e reservada no dia (art. 185, §5º) — será requerida SEMPRE
  2.4 [Se vídeo] hipóteses do §2º, garantias dos §§4º-6º e código de pausa reservada

BLOCO 3 — DECISÃO ESTRATÉGICA
  3.1 Cenários NESTE caso: silêncio total × seletivo × falar (negativa/confissão),
      com custos e benefícios de cada rota
  3.2 Limites expressos: sem falsa identidade (Súmula 522/STJ), sem assumir crime
      de terceiro (CP 341), sem imputação falsa a inocente (CP 339)
  3.3 Decisão PROVISÓRIA do cliente (registrar) + gatilhos de reavaliação após a
      prova oral do dia
  3.4 [Se confissão] alcance (integral × parcial) e atenuante (Súmula 545/STJ)

BLOCO 4 — SIMULAÇÃO
  4.1 Advogado no papel da acusação: roteiro do art. 187, §2º + perguntas duras
      extraídas da denúncia e das contradições mapeadas no Bloco 1
  4.2 Treino de forma: resposta curta; "não sei/não me recordo" honesto; silêncio
      combinado sem hesitação; sem discutir com o perguntador
  4.3 Feedback e segunda rodada — corrige-se a FORMA; o conteúdo é do cliente

BLOCO 5 — FECHAMENTO
  5.1 Postura, vestimenta e logística (checklist do dia abaixo)
  5.2 O que NÃO fazer no fórum: conversas de corredor, celular, comentários com
      escolta/servidores, anotações-roteiro
  5.3 Dúvidas finais e canal de contato até a audiência
```

## Checklist do dia (entregável 2)

- [ ] **Entrevista prévia e reservada requerida** antes do ato (art. 185, §5º) — negada, **protesto consignado em ata**?
- [ ] Decisão silêncio × falar **reavaliada após a prova oral** e confirmada na entrevista reservada?
- [ ] Cliente relembrado: silêncio sem prejuízo; pode calar pergunta a pergunta; olhar para quem pergunta; resposta curta?
- [ ] Ordem do art. 400 fiscalizada — interrogatório **por último** (antecipação → protesto em ata)?
- [ ] Advertência do art. 186 efetivamente feita pelo juiz (ausência → protesto)?
- [ ] [Vídeo] Decisão fundamentada nas hipóteses do §2º? Antecedência de **10 dias** da intimação respeitada (contagem do art. 798; eventual **manifestação** da Defensoria em dobro — LC 80/94)? Canal reservado com o preso funcionando?
- [ ] [Preso] Informação sobre filhos/dependentes prestada e consignada (art. 185, §10)?
- [ ] Pergunta capciosa/vexatória → objeção; pergunta da defesa indeferida → **transcrição literal em ata** (técnica na `audiencia-inquiricao-testemunhas`)?
- [ ] Testemunhas de defesa orientadas **individualmente** (só dinâmica e verdade) e sem contato entre si antes do ato?
- [ ] Silêncio exercido **consignado como exercício de direito**; ata lida antes de assinar?

## Teses típicas

- **Videoconferência imotivada** ou fora das hipóteses taxativas do §2º → nulidade do interrogatório (protesto no ato + prejuízo — art. 563).
- **Negativa da entrevista prévia e reservada** (art. 185, §5º) → cerceamento de defesa; nulidade do ato.
- **Interrogatório antes do fim da instrução** (violação do art. 400, inclusive em ritos especiais) → nulidade — estado da jurisprudência via `jurisprudencia-stj-stf` [NÃO VERIFICADO].
- **Ausência da advertência do silêncio** (art. 186) → nulidade e ilicitude do que foi declarado.
- **Silêncio valorado em prejuízo** na sentença (art. 186, p.u.) ou referido em plenário (art. 478, II) → impugnação em apelação/nulidade do júri.
- **Interrogatório sem defensor** (art. 185, caput) → nulidade absoluta.
- **Confissão usada na condenação sem a atenuante** → Súmula 545/STJ (dosimetria).

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|------|--------------|----------|
| Decidir silêncio × falar no corredor, minutos antes | A decisão mais importante do processo sai sem análise | Sessão dias antes + reavaliação na entrevista reservada do dia |
| Ensaiar texto decorado com o cliente | Resposta robotizada desmonta na 2ª repergunta; risco ético | Treinar forma e verdade; simulação com perguntas imprevistas |
| Não reler o interrogatório policial na sessão | Contradição fatal explorada na repergunta do MP | Bloco 1.3 do roteiro é obrigatório |
| Deixar o cliente "explicar demais" | Material novo para a acusação explorar | Resposta curta; silêncio após responder |
| Tratar a 1ª parte do art. 187 como formalidade | Vida pregressa mal respondida vira dosimetria desfavorável | Treinar também o bloco "pessoa do acusado" |
| Cliente assume crime de terceiro ("laranja") | Autoacusação falsa — crime autônomo (CP, art. 341) | Alerta expresso no Bloco 3.2 |
| Identidade falsa "em autodefesa" | Conduta típica — Súmula 522/STJ | Qualificação verdadeira, sempre |
| Orientar testemunha no conteúdo, "só um detalhe" | CP 342/343; EAOAB, art. 34, XVII; contradita fatal | Tabela PODE/NÃO PODE; preparação individual |
| Preparar para o júri como se fosse a AIJ comum | No plenário a sabatina das partes é **direta** (art. 474, §1º), sem o filtro do juiz do art. 188 — cliente treinado no ritmo errado desmorona | Simulação no formato do rito em que o cliente será ouvido |
| Não protestar contra videoconferência imotivada no ato | Nulidade relativa preclui sem protesto + prejuízo (arts. 563 e 571) | Protesto consignado na própria audiência |
| Contar os 10 dias do §3º (e demais prazos) em dias úteis | Prazos do CPP são **contínuos** (art. 798) — perda de prazo | Exclui o dia do começo, inclui o do vencimento; **dobro** para a manifestação da Defensoria (LC 80/94) |
| Sair da audiência sem conferir a ata | Protesto não consignado não existe para o tribunal | Ler antes de assinar; ditar complemento (ver `audiencia-inquiricao-testemunhas`) |

## Lembretes finais

- **Silêncio é direito sem custo jurídico** (art. 186, p.u.; art. 478, II) — e a decisão é **do cliente**, informada, provisória na sessão e confirmada na entrevista reservada do dia.
- **O interrogatório é o último ato** (art. 400): prepare a decisão para ser reavaliada depois da prova oral.
- **Treine forma, nunca dite conteúdo** — para o cliente e, com rigor redobrado, para testemunhas (CP 342, 343 e 344).
- **Mentira não é estratégia:** Súmula 522/STJ (falsa identidade) e CP 341 (assumir crime de terceiro) são fronteiras que o cliente precisa ouvir com todas as letras.
- **Videoconferência é exceção fundamentada** (art. 185, §2º): 10 dias de antecedência, garantias dos §§4º a 6º, protesto no ato se violadas.
- **O que não está na ata não aconteceu:** negativa de entrevista reservada, antecipação do interrogatório, silêncio como direito — tudo consignado.
- **Conformidade transversal:** o relato do cliente na sessão é coberto pelo sigilo inviolável; toda entrega é rascunho para revisão humana (`etica-oab-sigilo`); citações pelo gate `verificacao-citacoes`.

## Apoie-se em

- **Skill `preparacao-audiencia`** — briefing logístico do ato e roteiro de perguntas do advogado: aquela prepara **quem pergunta**, esta prepara **quem responde**.
- **Skill `audiencia-inquiricao-testemunhas`** — execução ao vivo da prova oral (art. 212, contradita, protestos e consignação em ata): é lá que a orientação dada à testemunha encontra a técnica do advogado.
- **Agente `analise-denuncia`** — decompõe a imputação em elementos e alimenta a previsão das perguntas prováveis da acusação (Blocos 1 e 4 da sessão).
- **Agente `verificador-citacoes`** / **best-practice `verificacao-citacoes`** — gate obrigatório: precedentes sobre silêncio seletivo, art. 400 em ritos especiais e reperguntas de corréu saem verificados ou marcados **[NÃO VERIFICADO]**.
- **Best-practice `etica-oab-sigilo`** — sigilo do relato do cliente, dever de informação sem promessa de resultado e a régua ética da orientação de testemunhas.

**Padrão de redação:** ao redigir o roteiro, o checklist e qualquer peça decorrente (protestos, impugnação da videoconferência), aplique também a skill `redacao-persuasiva-criminal` — subtítulos afirmativos, blocos completos, zero enchimento (a régua de obra-prima que a revisão cobra).
