---
name: jm-defesa-insubordinacao-recusa-obediencia
description: >-
  Use ao defender militar acusado de INSUBORDINAÇÃO no CPM — recusa de obediência (art. 163),
  oposição a ordem de sentinela (art. 164), reunião ilícita (art. 165) e publicação/crítica indevida
  (art. 166): teses de que a ordem era MANIFESTAMENTE ILEGAL (não há dever de obedecer a ordem
  criminosa), inexistência de ordem regular ou de competência de quem a emitiu, ausência de dolo e
  distinção entre discordância legítima e… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-insubordinacao-recusa-obediencia"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-insubordinacao-recusa-obediencia", "defesa insubordinacao", "recusa obediencia"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em crimes de insubordinação (arts. 163 a 166 do CPM — Decreto-Lei 1.001/1969)

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

Esta skill orienta a **defesa técnica de militar acusado de insubordinação** — o capítulo do Código Penal Militar (arts. 163 a 166) que pune, do ponto de vista do subordinado, a quebra do dever de obediência à hierarquia. É o espelho dos crimes de **violência contra superior** e **desrespeito** (praticados de baixo para cima) e do reverso dos crimes de **abuso de autoridade** e **violência contra inferior** (praticados de cima para baixo). O núcleo defensivo gira em torno de uma pergunta: **havia dever de obedecer àquela ordem, naquele contexto, emanada daquela autoridade?**

> **Lição central:** o dever de obediência do militar **não é absoluto**. A ordem que se recusa a cumprir precisa ser, cumulativamente, **regular em forma**, **emanada de autoridade competente** e **relativa a serviço/função militar** — e **não pode ser manifestamente ilegal ou criminosa**. Recusar-se a cumprir ordem **manifestamente ilegal não é insubordinação: é dever**. Antes de qualquer tese, reconstrua a ordem concreta — quem deu, em que forma, sobre o quê — porque é aí que a tipicidade se sustenta ou desaba.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente dos arts. 163 a 166 do CPM (Decreto-Lei 1.001/1969)** e a **competência da Justiça Militar** — a **EC 45/2004** e a **Lei 13.491/2017** ampliaram a competência da JM (a Lei 13.491/2017 alterou o art. 9º do CPM, trazendo para o rol de crimes militares os previstos na legislação penal comum quando praticados nas hipóteses do art. 9º). Confira também o **Estatuto dos Militares (Lei 6.880/1980)** para a definição de hierarquia e disciplina, os regulamentos disciplinares aplicáveis e qualquer súmula, tese ou repercussão geral via a skill `jurisprudencia-stj-stf`. Toda referência normativa passa pelo gate de `verificacao-citacoes` antes de ir para a peça.

---

## Base legal

- **Art. 163 do CPM** — **recusa de obediência**: recusar obedecer a ordem do superior sobre assunto ou matéria de serviço, ou relativa a dever imposto em lei, regulamento ou instrução.
- **Art. 164 do CPM** — **oposição a ordem de sentinela**: opor-se às ordens da sentinela (figura autônoma, ligada à segurança do serviço de guarda).
- **Art. 165 do CPM** — **reunião ilícita**: concorrer para reunião de militares, ou promovê-la, sem autorização, contra ordem expressa, ou em desacordo com prescrições legais/regulamentares.
- **Art. 166 do CPM** — **publicação ou crítica indevida**: publicar o militar, sem autorização, ato ou documento oficial, ou criticar publicamente ato de superior ou resolução do Governo, em termos que a lei descreve (tipo que exige leitura cuidadosa à luz da liberdade de expressão).
- **Contexto sistemático:** hierarquia e disciplina são a base institucional das Forças Armadas e Militares Estaduais (**CF, art. 142; art. 42; Lei 6.880/1980, arts. 14 e ss.**). O dever de obediência e seus limites decorrem desse sistema — mas **subordinam-se à Constituição e à lei**.
- **Distinção crucial (ver adiante):** a **obediência hierárquica** aqui é **elemento do tipo do CPM** (integra o dever cuja quebra se pune), **não** a dirimente do **art. 22 do Código Penal comum**. No CPM, a excludente correlata é a do **art. 38, `b`, do CPM** (estrito cumprimento de ordem não manifestamente ilegal / coação). **Confirme os incisos e a redação vigente antes de citar.**

> **Nota de competência (verificar sempre):** estes são **crimes militares próprios** — só o **militar** os pratica, e só perante a **Justiça Militar** (da União ou Estadual, conforme a força). A **primeira triagem defensiva** é confirmar (i) se o acusado era **militar da ativa** e (ii) se o fato se enquadra no **art. 9º do CPM**. Se o fato for **estritamente disciplinar** (transgressão), e **não** crime, a via é administrativa — e a persecução penal é indevida. Passe a competência por `jurisprudencia-stj-stf`.

---

## Roteiro de análise — reconstruir a ordem e a recusa (art. 163, o núcleo)

O art. 163 é o coração do capítulo. Antes de escolher tese, **decomponha a imputação** em seus elementos e teste cada um. A falha de qualquer elemento **atipifica** a conduta.

**Árvore de decomposição do art. 163 (recusa de obediência):**

```
1) Existiu ORDEM (comando concreto, individualizado, dirigido ao acusado)?
   ├── NÃO  → não há recusa de ordem (mera exortação, sugestão, ordem genérica
   │          ao coletivo, ou ordem inexistente) → ATÍPICO
   └── SIM  → segue

2) Quem emitiu era SUPERIOR / autoridade COMPETENTE sobre aquela matéria?
   ├── NÃO  → falta a relação hierárquica funcional exigida → tese de atipicidade
   └── SIM  → segue

3) A ordem versava sobre SERVIÇO/FUNÇÃO militar ou dever de lei/regulamento?
   ├── NÃO  → ordem sobre assunto particular/estranho ao serviço → ATÍPICO
   └── SIM  → segue

4) A ordem era LEGAL (não manifestamente ilegal nem criminosa)?
   ├── NÃO (manifestamente ilegal/criminosa) → NÃO HÁ DEVER DE OBEDECER
   │        → recusa é lícita → ATÍPICO / exercício de dever (ver art. 38, b, CPM)
   └── SIM  → segue

5) Houve RECUSA efetiva (ato deliberado de não cumprir) ou apenas
   descumprimento por impossibilidade, erro, demora justificada?
   ├── impossibilidade / erro / demora justificada → afasta o DOLO → ATÍPICO
   └── recusa deliberada e consciente → típica (atacar por outras vias)
```

**Chave prática:** a acusação tende a tratar como "recusa de obediência" episódios que são, na verdade, (a) **discordância verbalizada, mas com cumprimento**; (b) **pedido de esclarecimento/registro por escrito** da ordem; (c) **descumprimento por impossibilidade material**; ou (d) **reação a ordem manifestamente ilegal**. Nenhuma dessas hipóteses é insubordinação. **Separe o fato jurídico do incômodo hierárquico.**

---

## Teses típicas de defesa (por dispositivo)

### A) Ordem manifestamente ilegal — a tese-mãe (art. 163)

O militar **não deve obediência a ordem manifestamente ilegal ou criminosa** — obedecê-la o tornaria **partícipe do crime** do superior. A Constituição e o próprio CPM não transformam o subordinado em executor cego.

- **Fundamento:** a legalidade estrita (CF, art. 5º, II; art. 37) e o próprio sistema do CPM, que só pune a recusa quando a ordem é **legítima**. Ordem para praticar tortura, falsear documento, agredir preso, adulterar ocorrência, dar sumiço em prova — todas **ilegais e não vinculantes**.
- **Tese:** recusar cumprir ordem manifestamente ilegal é **exercício de dever**, atípico. Correlato do **art. 38, `b`, do CPM** (não há culpa quem cumpre — e, por simetria, não há crime em quem se recusa a cumprir — ordem manifestamente ilegal). **Confirmar redação/incisos.**
- **Ponto sensível:** a ilegalidade deve ser **manifesta** (perceptível a um militar médio no contexto). Ordem de legalidade **duvidosa mas não manifesta** exige do subordinado, em regra, o cumprimento com **representação/ressalva** — daí a importância de reconstruir o quão evidente era a ilegalidade no momento.

### B) Inexistência de ordem regular ou de competência (arts. 163 e 164)

- **Não houve ordem, mas exortação/sugestão/desabafo:** falta o comando individualizado e vinculante. Prova testemunhal e o teor exato das palavras são decisivos.
- **Autoridade incompetente para aquela matéria:** superior hierárquico em posto, mas **sem atribuição funcional** sobre o serviço concreto, ou fora da cadeia de comando do acusado.
- **Ordem sobre assunto particular / estranho ao serviço:** o art. 163 exige matéria **de serviço** ou **dever de lei/regulamento**. Ordem para favor pessoal, tarefa privada do superior, ou assunto alheio à função → atípica.
- **Art. 164 (sentinela):** verificar se quem deu a ordem estava **efetivamente em serviço de sentinela** e se a oposição se deu **naquele contexto de guarda** — fora disso, não incide o tipo específico.

### C) Ausência de dolo / erro / impossibilidade (todos os tipos)

- **Descumprimento por impossibilidade material** (ordem inexequível, falta de meios, ordem contraditória com outra anterior): não há recusa dolosa.
- **Erro sobre a existência/alcance da ordem** (art. 36 do CPM — erro; confirmar): o militar não compreendeu tratar-se de ordem, ou entendeu-a diversamente.
- **Demora justificada** confundida com recusa: cumprimento tardio por causa legítima não é oposição.
- **Estado de necessidade / coação** (arts. 39 e 40 do CPM — confirmar): circunstâncias que retiram a exigibilidade de conduta diversa.

### D) Reunião ilícita (art. 165)

- **Ausência dos elementos:** o tipo exige reunião **sem autorização**, **contra ordem expressa** ou **em desacordo com prescrição legal/regulamentar**. Encontro casual, formação de serviço, atividade autorizada ou associativa lícita **não** é reunião ilícita.
- **Liberdade de reunião e associação:** ler o tipo à luz dos limites constitucionais (CF, art. 5º, XVI e XVII), sem transformar convívio ou pauta legítima em crime. **Tese:** o tipo pune a **quebra concreta de ordem/regra**, não a mera aglomeração.

### E) Publicação ou crítica indevida (art. 166)

- **Interpretação conforme a liberdade de expressão (CF, art. 5º, IV e IX):** o tipo **não criminaliza a crítica legítima, técnica ou institucional** — pune a publicação/crítica nos estritos termos e limites que a lei descreve.
- **Teses:** ausência de dolo específico; crítica dirigida a **ato**, não a pessoa, em termos respeitosos; documento **não sigiloso**; manifestação em canal/contexto que afasta a tipicidade. **Ponderar** hierarquia/disciplina × liberdade de expressão do militar, tema de intenso debate — passar por `jurisprudencia-stj-stf`.

---

## Contra-teses da acusação (antecipar e neutralizar)

| Contra-tese acusatória | Resposta defensiva |
|---|---|
| "Ordem é ordem; disciplina exige cumprimento incondicional" | O dever de obediência é **legal, não absoluto**: cessa diante de ordem **manifestamente ilegal/criminosa** (CF, art. 5º, II; sistema do CPM). Obedecer tornaria o acusado **partícipe**. |
| "A ilegalidade não era tão evidente" | Reconstruir o **contexto concreto**: para um militar médio naquela situação, a ilegalidade era perceptível? Se **manifesta**, não há dever; se **duvidosa**, cabia cumprir com ressalva — e é isso que o acusado fez (se for o caso). |
| "Houve recusa formal" | Distinguir **recusa** de **discordância com cumprimento**, **pedido de ordem por escrito**, **impossibilidade** ou **demora justificada** — nenhuma delas é o núcleo típico. |
| "É crime militar, competência da JM" | Confirmar enquadramento no **art. 9º do CPM**; se o fato é **transgressão disciplinar** (não crime), a via é **administrativa** e a ação penal é indevida (atipicidade penal). |
| "O superior tinha patente maior" | Patente ≠ competência funcional sobre a **matéria** e sobre **aquele** subordinado. Verificar a **cadeia de comando** e a **atribuição** concreta. |
| "Crítica pública fere a disciplina" (art. 166) | Interpretação conforme a **liberdade de expressão**; crítica legítima a **ato** (não a pessoa), sem sigilo violado, não realiza o tipo. |

---

## A distinção que define esta skill — obediência hierárquica no CPM × art. 22 do CP

Este é o ponto que separa a análise castrense da penal comum e **não pode ser confundido**:

- **No Código Penal comum**, a **obediência hierárquica** é **dirimente da culpabilidade** (**art. 22 do CP**): quem cumpre ordem **não manifestamente ilegal** de superior não responde (responde o superior); se **manifestamente ilegal**, ambos respondem.
- **No Código Penal Militar**, a obediência é, antes disso, **elemento do próprio tipo de insubordinação** (o art. 163 pune a **quebra do dever** de obedecer). A excludente correlata do executor está no **art. 38, `b`, do CPM** (cumprimento de ordem não manifestamente ilegal). **Confirmar redação e alíneas vigentes.**

**Consequência prática para a defesa do acusado de insubordinação (que é quem se RECUSOU):** o eixo não é "eu obedeci a uma ordem ilegal, logo estou coberto" (isso é defesa de quem **cumpriu**). É o **inverso**: "**a ordem era manifestamente ilegal, portanto eu não tinha o dever de obedecer, e a recusa é atípica/exercício de dever**". Trocar um raciocínio pelo outro é erro grave — cada um serve a um polo diferente do episódio (quem cumpriu × quem recusou).

---

## Nulidades e questões processuais próprias da Justiça Militar

- **Competência (art. 9º do CPM; Lei 13.491/2017):** o fato é crime militar? Alcança a JM da União ou Estadual? Erro de competência é nulidade.
- **Transgressão disciplinar × crime:** se o fato é **mera transgressão** (Regulamento Disciplinar), **não** há crime — a persecução penal é atípica; a via correta é o processo administrativo disciplinar, com suas garantias próprias.
- **Ne bis in idem administrativo/penal:** a punição disciplinar não impede a penal (instâncias independentes), mas os **fatos e a prova** devem ser cotejados; contradição entre o apurado no PAD e na ação penal é munição defensiva.
- **Cerceamento de defesa no rito castrense:** verificar cumprimento do rito do **CPPM (Decreto-Lei 1.002/1969)** — citação, interrogatório, oitiva de testemunhas, produção de prova, prazos. Passar o rito e prazos por `jurisprudencia-stj-stf` e conferir a redação vigente.
- **Prova da ordem e do contexto:** insubordinação vive de **teor exato de palavras** e **cadeia de comando**. Exigir prova robusta (testemunhas, gravações, documentos, escala de serviço) — a dúvida milita em favor do acusado (in dubio pro reo).

---

## Súmulas, precedentes e teses (sob o Citation Gate)

> **Regra inegociável:** **não se cita jurisprudência de memória.** Dispositivos de lei e enunciados **notórios** podem ser afirmados com certeza (sempre conferindo a **vigência**); **qualquer** precedente específico — número de HC, RE, RHC, informativo, tese, repercussão geral — que não se tenha com **certeza absoluta** vai marcado como **[NÃO VERIFICADO]** e é conferido via `jurisprudencia-stj-stf` antes de entrar na peça. **Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.**

- **Dever de obediência não é absoluto; ordem manifestamente ilegal não vincula** — decorre da **CF, art. 5º, II**, e do sistema do CPM. Tese segura no plano do dispositivo; para **acórdão específico** do STF/STM/STJ que a aplique, marcar **[NÃO VERIFICADO]** e conferir.
- **Competência da Justiça Militar após a Lei 13.491/2017** — houve intensa construção jurisprudencial sobre o novo alcance do art. 9º do CPM. **Qualquer** tese/tema específico a respeito: **[NÃO VERIFICADO]** → `jurisprudencia-stj-stf`.
- **Distinção crime militar × transgressão disciplinar** — há orientação consolidada de que a mera transgressão não configura crime; o enquadramento concreto, porém, exige precedente atual conferido. Enunciado específico: **[NÃO VERIFICADO]**.
- **Liberdade de expressão do militar × art. 166** — tema sensível e em evolução. **Não** afirmar tese jurisprudencial sem conferência; marcar **[NÃO VERIFICADO]**.

**Como usar:** na peça, ancore primeiro no **dispositivo legal** (art. 163 a 166 do CPM; CF, art. 5º, II; art. 142/42) e na **doutrina**; só então acrescente precedente **já verificado**. Onde faltar verificação, escreva a tese sem número e sinalize a conferência pendente.

---

## Erros comuns (anti-padrões) e checklist

**Anti-padrões (evitar):**

- **Invocar o art. 22 do CP** (obediência hierárquica como dirimente) na defesa de quem **se recusou** — é o raciocínio do polo oposto (quem cumpriu). Aqui a chave é **"não havia dever de obedecer"**.
- **Tratar transgressão disciplinar como crime** (ou aceitar que a acusação o faça) — sempre testar se o fato é penalmente típico ou mero ilícito administrativo.
- **Aceitar a premissa da obediência absoluta** — o dever cessa diante da ilegalidade manifesta.
- **Não reconstruir a ordem concreta** — quem deu, em que forma, sobre o quê, quão manifesta era a eventual ilegalidade. Sem isso, a defesa fica genérica.
- **Confundir discordância/pedido de ordem escrita/impossibilidade com recusa dolosa.**
- **Citar precedente de número** sem passar pelo gate — risco de sanção por jurisprudência inventada.
- **Ignorar a competência (art. 9º CPM; Lei 13.491/2017)** e o rito próprio do **CPPM**.
- **Ler o art. 166 sem o filtro da liberdade de expressão** — criminalizar crítica legítima.

**Checklist antes de fechar a peça:**

- [ ] Confirmado que o acusado é **militar** e o fato se enquadra no **art. 9º do CPM** (competência da JM)?
- [ ] Testado se o fato é **crime** ou **mera transgressão disciplinar** (atipicidade penal)?
- [ ] **Ordem reconstruída** — quem deu, forma, matéria (serviço?), competência de quem emitiu?
- [ ] Avaliado se a ordem era **manifestamente ilegal/criminosa** (tese-mãe de atipicidade)?
- [ ] Distinguido **recusa dolosa** de discordância / pedido de ordem escrita / impossibilidade / erro / demora justificada?
- [ ] Correta a moldura: **elemento típico do CPM + art. 38, `b`, CPM**, e **não** art. 22 do CP?
- [ ] Redações vigentes conferidas — **arts. 163 a 166 e 38 do CPM**, **art. 9º**, **CPPM**, **Lei 6.880/1980**?
- [ ] Impacto da **Lei 13.491/2017 / EC 45/2004** na competência verificado?
- [ ] Todo precedente **verificado** via `jurisprudencia-stj-stf` (ou marcado **[NÃO VERIFICADO]**)?
- [ ] Art. 166: leitura **conforme a liberdade de expressão** (CF, art. 5º, IV e IX)?
- [ ] **Revisão humana** do advogado responsável agendada antes de protocolar?

---

## Lembretes finais

- **Reconstrua a ordem primeiro; escolha a tese depois** — a tipicidade da insubordinação vive dos elementos concretos do comando.
- **Ordem manifestamente ilegal não vincula** — recusá-la é dever, não crime (tese-mãe).
- **CPM ≠ CP:** aqui a obediência é **elemento típico**; a excludente do executor é o **art. 38, `b`, do CPM**, não o **art. 22 do CP**. E a defesa é de quem **recusou**, não de quem cumpriu.
- **Crime × transgressão:** testar sempre se há **tipicidade penal** ou mero ilícito disciplinar.
- **Competência e rito próprios:** art. 9º do CPM (com a Lei 13.491/2017) e o **CPPM** — conferir vigência.
- **Citation Gate absoluto:** dispositivo e tese, sim; número de acórdão, só verificado. **Omitir vence inventar.**

---

## Nota de conformidade

Este material é **rascunho técnico de apoio à defesa**, sob **revisão humana obrigatória** — a responsabilidade pela tese e pela peça é sempre do **advogado/defensor** responsável (**Estatuto da OAB e CED; Provimento 205/2021** para advocacia; **LC 80/1994** para a Defensoria). Esta skill atua no **polo de DEFESA** do militar acusado de insubordinação; se o caso for de **acusação** (MP Militar / assistente), o roteador deve conferir o polo e acionar a skill adequada. **Nenhuma súmula, tese ou precedente** entra na peça sem passar pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` — há sanções reais por jurisprudência inventada por IA. Confirme sempre a **redação vigente** dos dispositivos do **CPM (DL 1.001/1969)** e do **CPPM (DL 1.002/1969)** antes de citar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
