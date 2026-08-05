---
name: defesa-corrupcao-eleitoral-299
description: >-
  Use ao defender em corrupção eleitoral — dar, oferecer, prometer, solicitar ou receber dinheiro ou
  vantagem para obter ou dar voto/abstenção, ou para conseguir ou prometer abstenção (art. 299 do
  Código Eleitoral, Lei 4.737/65). Foco na ATIPICIDADE por ausência do fim específico de obter voto
  determinado, na prova robusta do dolo especial, na distinção de liberalidade/assistencialismo
  pré-registro e na delimitação frente à… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-corrupcao-eleitoral-299"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-corrupcao-eleitoral-299", "defesa corrupcao", "corrupcao eleitoral"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Corrupção Eleitoral (art. 299 do Código Eleitoral — Lei 4.737/65)

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

Esta skill orienta a **defesa criminal** na imputação de **corrupção eleitoral** (art. 299 do Código Eleitoral): o crime de **dar, oferecer, prometer, solicitar ou receber**, para si ou para outrem, **dinheiro, dádiva ou qualquer outra vantagem**, para **obter ou dar voto** e para **conseguir ou prometer abstenção**, ainda que a oferta não seja aceita. É crime **formal** (consuma-se com a conduta, independentemente do resultado voto) e de ação penal **pública incondicionada**, processado e julgado pela **Justiça Eleitoral**.

> **Lição central:** o coração da defesa é o **fim específico**. O art. 299 exige **elemento subjetivo especial do tipo** — a conduta tem de ser praticada *"para obter ou dar voto e para conseguir ou prometer abstenção"*. **Sem prova cabal desse propósito eleitoral vinculado a voto determinado, não há crime.** Doação, ajuda, emprego, favor ou assistencialismo **sem** essa finalidade demonstrada é **fato atípico** — não basta a mera entrega de vantagem em período eleitoral. Ataque primeiro o dolo especial; só depois a materialidade.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 299 do Código Eleitoral** e do **art. 41-A da Lei 9.504/97**, bem como resoluções do TSE aplicáveis ao pleito concreto. Toda súmula, tese, informativo ou acórdão (TSE/STF/STJ e TREs) passa **obrigatoriamente** pelo gate `verificacao-citacoes` e pela conferência via `jurisprudencia-stj-stf` antes de ir para a peça. Na dúvida sobre um número de acórdão ou tema, **omitir vence inventar** — há sanções reais por jurisprudência fabricada por IA.

## Base legal

- **Art. 299 do Código Eleitoral (Lei 4.737/65)** — tipo penal da corrupção eleitoral; pena de **reclusão de até 4 anos e pagamento de 5 a 15 dias-multa**. Confira o preceito secundário na redação vigente.
- **Art. 41-A da Lei 9.504/97** — **captação ilícita de sufrágio**: NÃO é crime, é **ilícito eleitoral cível** (sanciona com multa e **cassação do registro ou diploma**), apurado em AIJE/representação. Fronteira central desta skill (ver adiante).
- **Art. 350 do Código Eleitoral** — falsidade ideológica eleitoral (crime conexo comum em esquemas de "compra de voto" documentados).
- **Arts. 289 e seguintes do Código Eleitoral** — demais crimes eleitorais (para delimitação e concurso).
- **Art. 35, II, do Código Eleitoral e CF, art. 121** — competência criminal da **Justiça Eleitoral** (ver skill `competencia-justica-eleitoral-conexao`).
- **Parte Geral do CP (aplicação subsidiária — art. 287 CE)** — dolo (art. 18, I), tentativa (art. 14, II), concurso de pessoas (arts. 29-31), causas de diminuição, prescrição (arts. 109-110).

## Anatomia do tipo (art. 299) — o que a acusação precisa provar

Para condenar, a acusação tem de demonstrar, **cumulativamente**:

1. **Núcleo (verbo):** uma das condutas — dar, oferecer, prometer, solicitar ou receber. Alcança tanto o **corruptor ativo** (quem oferece/dá/promete) quanto o **corrompido passivo** (quem solicita/recebe) — ambos no mesmo tipo.
2. **Objeto:** dinheiro, dádiva ou **qualquer outra vantagem** (inclui vantagem não patrimonial: emprego, favor, promessa de cargo).
3. **Elemento subjetivo geral:** dolo (vontade livre e consciente da conduta).
4. **Elemento subjetivo ESPECIAL (o núcleo da defesa):** o **fim específico** de obter/dar voto ou de conseguir/prometer abstenção. A vantagem tem de estar **finalisticamente vinculada ao voto** — é o *do ut des* eleitoral.

> **Sem o item 4, o fato é atípico.** É aqui que a defesa concentra fogo: a acusação frequentemente prova a entrega da vantagem (item 2) mas **não prova o vínculo finalístico com voto determinado** (item 4). Vínculo presumido, ilação ou "conclusão de que só podia ser para voto" **não** basta — exige prova concreta do ajuste voto-por-vantagem.

## Roteiro de análise e defesa — em camadas

### Camada 1 — Atipicidade por ausência do fim específico (tese-mãe)

A tese mais forte e mais recorrente. Trabalhe:

- **Liberalidade / relação preexistente:** a vantagem decorre de vínculo anterior (amizade, parentesco, relação de trabalho, prática habitual de doação/assistência do investigado **antes e fora** do período eleitoral). Demonstre a **rotina** — o padrão de generosidade que precede a campanha desqualifica o vínculo com voto.
- **Assistencialismo genérico, sem pedido de voto:** entrega de bens/serviços a comunidade **sem** condicionar a voto ou candidato determinado. Ausente o *do ut des*, é atípico penalmente (podendo, no máximo, atrair discussão no plano do 41-A — ver Camada 4).
- **Ausência de destinatário/voto determinado:** não identificado a quem se pediu voto, nem qual voto/abstenção se buscava, falta o objeto finalístico do tipo.
- **Promessa vaga / palanque:** promessas eleitorais genéricas de campanha (obras, benefícios coletivos futuros mediante eleição) **não** são o "dar/prometer vantagem por voto" do art. 299 — são retórica de campanha, não ajuste corruptor individualizado. Distinga o discurso político do ajuste concreto.

### Camada 2 — Fragilidade probatória do dolo especial

Ataque a **prova** do elemento subjetivo:

- **Prova exclusivamente testemunhal frágil / interessada:** depoimento único, de adversário político, de beneficiário arrependido ou de "laranja" — exige corroboração. Aponte contradições (use `analise-contradicoes-depoimentos` / skills de prova).
- **Prova emprestada / mídia sem cadeia de custódia:** áudios, vídeos e mensagens (WhatsApp) precisam de **cadeia de custódia** íntegra e perícia; questione autenticidade, contexto e edição (ver `cadeia-de-custodia` e skills de prova digital).
- **Presunção indevida de finalidade:** a acusação salta da vantagem para o voto sem elo. Sustente que **dúvida sobre o dolo especial** impõe absolvição (in dubio pro reo; presunção de inocência — CF, art. 5º, LVII).
- **Descontextualização temporal:** vantagem entregue fora de contexto de pedido de voto, ou anterior ao registro de candidatura, enfraquece o nexo finalístico.

### Camada 3 — Nulidades e vícios do processo eleitoral-criminal

- **Cadeia de custódia da prova digital** (arts. 158-A a 158-F CPP, aplicáveis subsidiariamente): quebra contamina a prova.
- **Competência:** confirmar que tramita na **Justiça Eleitoral**; conexão com crime comum atrai para a Eleitoral (ver `competencia-justica-eleitoral-conexao`). Processo em juízo incompetente é vício.
- **Justa causa / inépcia da denúncia:** denúncia que não descreve o **fim específico** e o **voto determinado** é inepta (art. 41 CPP) — não descreve o fato típico em todos os seus elementos.
- **Aditamento/emendatio/mutatio:** vigie eventual tentativa de requalificar 41-A (ilícito cível) como 299 (crime) sem base fática nova.

### Camada 4 — Delimitação frente ao art. 41-A (captação ilícita de sufrágio)

**Distinção decisiva** — não são a mesma coisa e o enquadramento errado favorece a defesa:

| Aspecto | Art. 299 CE (corrupção eleitoral) | Art. 41-A Lei 9.504/97 (captação ilícita) |
|---|---|---|
| Natureza | **Crime** (esfera penal) | **Ilícito eleitoral cível** (não é crime) |
| Sanção | Reclusão + multa (dias-multa) | Multa + **cassação de registro/diploma** |
| Quem pode figurar | Corruptor **e** corrompido (dá/oferece/promete/solicita/recebe) | Em regra o **candidato** que capta (ou com seu consentimento) |
| Elemento nuclear | Fim específico de obter/dar **voto** por vantagem | Captação de voto do **eleitor** mediante doação/oferta de vantagem, na vigência do registro |
| Apuração | Ação penal na Justiça Eleitoral | AIJE/representação (art. 41-A) |
| Momento | Pode alcançar condutas mesmo antes do registro (analisar o dolo) | Em regra **do registro até a eleição** |

> **Vias autônomas:** as esferas penal (299) e cível-eleitoral (41-A) são **independentes** — o mesmo fato pode, em tese, repercutir em ambas, sem que uma condene automaticamente na outra. **Tese defensiva:** a existência de representação por 41-A (ou até de cassação) **não** implica, por si, condenação criminal por 299 — a esfera penal exige o rigor probatório do dolo especial e prova além de dúvida razoável. E, ao contrário, absolvição criminal por atipicidade não impede, nem é impedida, pela discussão cível própria do 41-A. **Confirme na jurisprudência atual (TSE/STF)** o alcance da independência das instâncias no caso concreto via `jurisprudencia-stj-stf`.

## Teses típicas de defesa (checklist de sustentação)

1. **Atipicidade — ausência do fim específico de obter voto determinado** (tese-mãe; art. 299 exige elemento subjetivo especial).
2. **Liberalidade / assistencialismo habitual e preexistente** — a vantagem tem causa diversa do voto.
3. **Insuficiência de prova do dolo especial** — presunção de finalidade não condena; in dubio pro reo.
4. **Prova ilícita/imprestável** — quebra de cadeia de custódia, mídia sem perícia, prova emprestada descontextualizada.
5. **Erro de enquadramento** — fato, se algo for, é matéria de 41-A (cível), não crime do 299.
6. **Inépcia/ausência de justa causa** — denúncia não descreve o vínculo voto-vantagem.
7. **Incompetência** — juízo diverso da Justiça Eleitoral / conexão mal resolvida.
8. **Atipicidade da promessa genérica de campanha** — retórica de palanque não é ajuste corruptor individual.
9. **Ausência de nexo com voto determinado** — falta destinatário/eleitor/candidato certo.
10. **Prescrição** — pena máxima até 4 anos (reclusão); calcular pelo art. 109 CP considerando as causas interruptivas (apontar à `calculadora-prescricao` para o cômputo — método determinístico).

## Contra-teses da acusação (antecipe e neutralize)

- **"O contexto revela o propósito de voto"** → exija prova concreta do ajuste, não ilação; contexto não supre elemento subjetivo especial.
- **"A vantagem foi entregue em plena campanha"** → coincidência temporal não é vínculo finalístico; oponha a habitualidade/relação preexistente.
- **"Há confissão de beneficiário/testemunha"** → questione corroboração, interesse, contradição, cadeia de custódia da mídia que a "documenta".
- **"O crime é formal, basta oferecer"** → sim, é formal, MAS o **oferecer** já tem de ser **para obter voto** — o formalismo do tipo **não dispensa** o fim específico; apenas dispensa o resultado (voto efetivamente obtido).
- **"41-A já cassou, logo houve corrupção"** → independência das instâncias; o standard penal é mais rigoroso.

## Dosimetria e prescrição (método — sem cálculo aqui)

- **Pena** (art. 299): reclusão de até 4 anos + 5 a 15 dias-multa (conferir preceito vigente). Na dosimetria, aplique o método trifásico e atenuantes/agravantes — remeta à `calculadora-dosimetria` para o cômputo determinístico e à `redacao-persuasiva-criminal` para a fundamentação.
- **Prescrição:** com máximo de 4 anos, o prazo da PPP em abstrato tende a **8 anos** (art. 109, IV, CP) — **[conferir enquadramento e marcos interruptivos no caso concreto]**. Rode o cálculo pela `calculadora-prescricao` (recebimento da denúncia, sentença condenatória etc.). Não presuma o resultado: valide datas e marcos.
- **Substituição/ANPP:** avalie cabimento de suspensão condicional do processo (art. 89 da Lei 9.099/95, se a pena mínima permitir) e de ANPP (art. 28-A CPP) — ver `anpp` e skills de justiça negocial; confira a compatibilidade com o rito eleitoral.

## Súmulas, precedentes e teses (todos sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e teses doutrinárias consolidadas podem ser afirmados com a devida conferência de vigência; **qualquer número específico de acórdão, informativo, tema ou súmula do TSE/STF/STJ/TRE deve ser confirmado** via `jurisprudencia-stj-stf` e passar por `verificacao-citacoes`. Prefira **ensinar a tese e apontar o dispositivo** a arriscar um número.

- **Tese consolidada (segura, é conteúdo do tipo):** o art. 299 exige **elemento subjetivo especial** — o fim de obter/dar voto; a ausência de prova cabal desse propósito conduz à **atipicidade**. Doação/assistência sem finalidade eleitoral demonstrada não configura o crime.
- **Independência das instâncias penal e cível-eleitoral** (299 vs 41-A): é orientação clássica, mas o **alcance concreto** (efeito de cassação sobre o crime e vice-versa) deve ser confirmado no julgado aplicável — **[NÃO VERIFICADO: localizar precedente TSE/STF específico via `jurisprudencia-stj-stf`]**.
- **Standard probatório penal reforçado** para o dolo especial no 299: **[NÃO VERIFICADO: confirmar acórdãos do TSE/STF que exijam prova robusta do fim de voto — não citar número de memória]**.
- **Natureza cível-administrativa do 41-A** (não é crime; sanção de cassação): afirmação segura de direito material; ainda assim, para citar precedente de aplicação, **conferir via gate**.

## Erros comuns / anti-padrões (evitar)

- **Tratar a mera entrega de vantagem como crime consumado**, sem enfrentar o fim específico de voto — o formalismo do tipo não dispensa o elemento subjetivo especial.
- **Confundir 299 (crime) com 41-A (ilícito cível)** — aceitar que a cassação por 41-A "prova" a corrupção penal.
- **Deixar de atacar a prova do dolo** e discutir só a materialidade da doação (que muitas vezes é incontroversa).
- **Ignorar a cadeia de custódia** de áudios/vídeos/mensagens que sustentam a "compra de voto".
- **Aceitar denúncia inepta** que não descreve o voto determinado e o vínculo finalístico.
- **Presumir a competência** sem checar a Justiça Eleitoral e a conexão.
- **Citar número de acórdão/informativo/tema de memória** — passa pelo gate ou não vai para a peça.
- **Esquecer prescrição e vias despenalizadoras** (ANPP/suspensão) quando cabíveis.

## Checklist de defesa (art. 299)

- [ ] A denúncia descreve o **fim específico de obter/dar voto determinado**? Se não, arguir **inépcia/atipicidade**.
- [ ] Há **prova concreta** do vínculo vantagem-voto (não mera ilação)? Ataque o **dolo especial**.
- [ ] A vantagem tem **causa diversa** (liberalidade, relação preexistente, assistência habitual)? Documente o padrão.
- [ ] As mídias (áudio/vídeo/mensagens) têm **cadeia de custódia** e perícia íntegras?
- [ ] O fato, se algo for, é **41-A (cível)** e não crime? Sustente o erro de enquadramento.
- [ ] Competência confirmada na **Justiça Eleitoral** e conexão bem resolvida?
- [ ] Testemunhas — há **interesse/contradição** a explorar (adversário, beneficiário, colaborador)?
- [ ] **Prescrição** calculada (via `calculadora-prescricao`) e marcos verificados?
- [ ] **ANPP / suspensão condicional** avaliadas quando compatíveis?
- [ ] Toda **súmula/precedente/tema** conferido via `jurisprudencia-stj-stf` e `verificacao-citacoes`?
- [ ] **Revisão humana** do(a) advogado(a) responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa (hipótese a confirmar), **não** substitui o juízo profissional, a análise dos autos concretos nem a leitura da prova.
- **Ética por polo (DEFESA):** a responsabilidade pela tese e pela peça é do **advogado** (EAOAB e Código de Ética; Provimento 205/2021 quanto à publicidade). Esta skill é do **polo de defesa** — para a perspectiva acusatória, ver `acusacao-crimes-eleitorais-mp` (MP/assistente). **O roteador deve conferir o polo da instituição** (`_criminalsquad/_memory/company.md`) antes de usar: se a instituição for Ministério Público/assistente de acusação, esta skill de defesa **não** é a apropriada.
- **Citation Gate:** nenhuma jurisprudência de memória — tudo por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Sanções reais existem por citação fabricada por IA.
- **Sigilo e LGPD:** dados do assistido nunca em repositório público.

## Lembretes finais

- **Fim específico primeiro:** sem prova do propósito de obter voto determinado, o art. 299 é **atípico** — é a tese-mãe.
- **Formal ≠ sem dolo especial:** o crime consuma-se com a oferta, mas a oferta já tem de ser **por voto**.
- **299 é crime; 41-A é ilícito cível** — não confunda e explore o erro de enquadramento.
- **Independência das instâncias** — cassação por 41-A não condena no penal; standard penal é mais rigoroso.
- **Ataque a prova do dolo** (cadeia de custódia, testemunho interessado) tanto quanto a materialidade.
- **Conferir vigência** do art. 299 CE, do 41-A e das resoluções do TSE; **todo precedente** pelo gate antes de citar.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, memoriais, apelação eleitoral), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita do elemento subjetivo especial, coesão e persuasão (a régua de obra-prima que a revisão cobra).
