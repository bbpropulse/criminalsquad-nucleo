---
name: defesa-crimes-contra-familia
description: >-
  Use ao construir a DEFESA nos crimes contra a família (CP, Título VII, arts. 235-249): bigamia;
  crimes contra o estado de filiação (registro de nascimento inexistente, parto suposto/adoção à
  brasileira, sonegação de estado); crimes contra a assistência familiar (abandono material,
  intelectual e moral, entrega de filho a pessoa inidônea); e crimes contra o poder
  familiar/tutela/curatela (induzimento a fuga e subtração de… Não use para compartilhamento de
  dados, promessa de resultado ou decisão jurídica sem autorização.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, contra-familia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  positive_triggers: ["defesa-crimes-contra-familia", "defesa crimes", "contra familia"]
  negative_triggers: ["compartilhamento de dados, promessa de resultado ou decisão jurídica sem autorização"]
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
  eval_case_ids: ["csq-v5-defesa-crimes-contra-familia"]
---

# Crimes contra a família — Defesa (CP arts. 235-249)

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

Esta skill orienta a **defesa técnica** nos **crimes contra a família**, reunidos no **Título VII da Parte Especial do CP (arts. 235 a 249)**, distribuídos em quatro capítulos: crimes contra o casamento, contra o estado de filiação, contra a assistência familiar e contra o poder familiar, tutela ou curatela. O bem jurídico protegido é a **organização e a estabilidade da família** — casamento, filiação, deveres de assistência e o exercício regular do poder familiar. O entregável são **blocos de tese por figura** para a resposta à acusação (CPP, art. 396-A), a instrução e os memoriais. O foco é o **polo defensivo**.

> **Lição central:** aqui não existe "uma" tese — existe **uma tese por figura**. O Título VII é um mosaico de tipos com estruturas, penas e elementos distintos, e a maioria vive na **fronteira com o Direito de Família**. Antes de qualquer coisa, faça duas perguntas: **(1) qual é exatamente a figura imputada** (a denúncia às vezes erra o dispositivo) e **(2) o fato é ilícito penal ou mero conflito familiar/cível** que o Direito Penal, por sua **fragmentariedade e subsidiariedade**, não deve alcançar? Inadimplemento de pensão, disputa de guarda e desavença conjugal **não são, por si sós, crime**. É nessa dobra — tipicidade estrita e distinção do cível/ECA — que a defesa se ganha.

> **Cautela de vigência (obrigatória antes de citar):** (1) o **adultério (antigo art. 240)** foi **revogado pela Lei 11.106/2005** — *abolitio criminis*; nunca capitular conduta como adultério, e para fatos antigos alegar a descriminalização. (2) Várias figuras têm **interface com o ECA (Lei 8.069/1990)** e com a **Lei de Alienação Parental (Lei 12.318/2010)** — cuja natureza é **cível**, não penal: confira a especialidade e não confunda planos. (3) **Toda súmula, tese ou precedente passa pela skill `jurisprudencia-stj-stf` antes de ir à peça** — inclusive a jurisprudência de abandono material. Na dúvida sobre redação, pena ou natureza da ação penal de uma figura específica, **conferir vence afirmar de memória**.

## Base legal

**Capítulo I — Dos crimes contra o casamento**
- **Art. 235, CP — Bigamia** — contrair alguém, sendo casado, novo casamento (reclusão, 2 a 6 anos). **§1º** pune o não casado que se casa com pessoa casada conhecendo a circunstância (pena menor). **§2º** — anulado o primeiro casamento (por qualquer motivo) ou o segundo (por motivo diverso da bigamia), o crime é **inexistente**.

**Capítulo II — Dos crimes contra o estado de filiação**
- **Art. 241, CP — Registro de nascimento inexistente** — promover no registro civil a inscrição de nascimento inexistente (reclusão, 2 a 6 anos).
- **Art. 242, CP — Parto suposto; supressão ou alteração de direito inerente ao estado civil de recém-nascido** — inclui a chamada **"adoção à brasileira"** (registrar como seu o filho de outrem). **Parágrafo único** prevê forma privilegiada por **motivo de reconhecida nobreza**, com possibilidade de **perdão judicial**.
- **Art. 243, CP — Sonegação de estado de filiação** — deixar em asilo/entidade filho próprio ou alheio, ocultando-lhe a filiação, ou atribuindo-lhe outra.

**Capítulo III — Dos crimes contra a assistência familiar**
- **Art. 244, CP — Abandono material** — deixar, **sem justa causa**, de prover a subsistência do cônjuge, de filho menor/inapto ou de ascendente inválido/idoso; deixar de socorrer descendente/ascendente gravemente enfermo; **faltar ao pagamento de pensão alimentícia judicialmente fixada** (detenção, 1 a 4 anos, e multa).
- **Art. 245, CP — Entrega de filho menor a pessoa inidônea** — com formas majoradas (intuito de lucro; envio ao exterior).
- **Art. 246, CP — Abandono intelectual** — deixar, **sem justa causa**, de prover à instrução primária de filho em idade escolar.
- **Art. 247, CP — Abandono moral** — permitir que menor sob poder/guarda frequente ambiente ou conviva com pessoa que possa pervertê-lo, mendigue etc.

**Capítulo IV — Dos crimes contra o poder familiar, tutela ou curatela**
- **Art. 248, CP — Induzimento a fuga, entrega arbitrária ou sonegação de incapazes** — induzir menor/interdito a fugir, confiá-lo a outrem sem ordem, ou deixar de entregá-lo a quem de direito.
- **Art. 249, CP — Subtração de incapazes** — subtrair menor de 18 ou interdito ao poder de quem o tem sob guarda por lei ou ordem judicial (**"se o fato não constitui elemento de outro crime"** — subsidiariedade). **§1º** alcança também o pai/tutor/curador **destituído ou temporariamente privado** do poder/tutela/curatela. **§2º** — **perdão judicial** se o incapaz é restituído **sem ter sofrido maus-tratos ou privação**.

**Diplomas de interface (conferir especialidade):** ECA (Lei 8.069/1990 — crimes e infrações administrativas próprios, entrega irregular, colocação em família substituta); Lei de Alienação Parental (Lei 12.318/2010 — **medidas cíveis**, não tipo penal); CPC art. 528 (prisão **civil** por alimentos — não é o crime do art. 244); CP art. 297, §1º (falsidade documental — fronteira do art. 242); CP art. 148 (sequestro/cárcere — fronteira do art. 249).

## Anatomia por figura — o que a defesa disseca

Teste **elemento a elemento** a figura efetivamente imputada:

- **Bigamia (235):** pressupõe **casamento anterior válido e subsistente** e novo casamento **também formalmente válido**. Elementos de ataque: (a) **inexistência/nulidade do primeiro casamento** — o §2º torna o crime **inexistente** se anulado o primeiro por qualquer motivo; (b) o segundo "casamento" não passou de **união estável/mancebia** (sem ato civil, **atípico**); (c) **dolo** — desconhecimento do vínculo anterior subsistente (erro de tipo). Há **prejudicialidade heterogênea** (CPP, art. 92): questão sobre o estado civil pendente no cível **suspende** a ação penal e a prescrição.
- **Registro de nascimento inexistente (241) e parto suposto/adoção à brasileira (242):** exigem **dolo** de alterar o estado civil. No 242, a **forma privilegiada** (motivo de reconhecida nobreza) e o **perdão judicial** do parágrafo único são cruciais na "adoção à brasileira" movida por afeto. Não confundir com a **falsidade ideológica** (297, §1º / 299): o 242 é **especial** — evitar dupla imputação (*bis in idem*).
- **Abandono material (244):** os elementos-chave são **"sem justa causa"** e a **possibilidade econômica** de prover. Não é crime de mera inadimplência: **impossibilidade material** (desemprego involuntário, doença incapacitante, comprovada insuficiência de recursos) é **justa causa** que exclui a tipicidade. Exige **dolo** — recusa deliberada de quem **pode** e **não quer** prover. Distinga da **prisão civil por alimentos** (CPC, art. 528), que é execução, não pena.
- **Abandono intelectual (246) e moral (247):** exigem **"sem justa causa"** (246) e a **efetiva permissão/omissão** dolosa. Realidade social (escola inacessível, trabalho infantil por necessidade extrema) e ausência de dolo esvaziam o tipo. São de **ínfima pena** — no radar de IMPO/JECRIM e de prescrição curtíssima.
- **Subtração de incapazes (248-249):** exigem a **retirada do incapaz do poder de quem detém a guarda por lei ou ordem judicial**. O ponto nevrálgico é o **§1º**: o pai/tutor só comete o crime se **destituído ou temporariamente privado** do poder familiar. **Genitor no exercício regular do poder familiar que retém ou leva o próprio filho, em contexto de disputa de guarda, em regra não pratica o art. 249** (falta o elemento normativo). O **§2º** garante **perdão judicial** se o incapaz é restituído sem maus-tratos.

**Método:** identifique a figura, isole cada elemento (inclusive os **normativos** — "sem justa causa", "por lei ou ordem judicial", "destituído/privado do poder") e teste a **ausência de dolo** e a **existência de justa causa**. A falta de **um** elemento leva à atipicidade ou à desclassificação.

## Catálogo de teses defensivas

1. **Atipicidade por ausência de elemento da figura** — testar o tipo exato: no 235, casamento anterior inválido/inexistente ou segunda relação sem ato civil; no 244, ausência de "sem justa causa"; no 249, guarda não fixada por lei/ordem judicial ou genitor no exercício regular do poder familiar.
2. **Justa causa / impossibilidade econômica (art. 244 e 246)** — desemprego involuntário, doença, insuficiência comprovada de recursos: exclui a tipicidade do abandono. **Fato, prova e inferência separados**: juntar prova documental da incapacidade de prover.
3. **Ausência de dolo** — o Título VII **não tem forma culposa**. Erro de tipo (desconhecer o vínculo anterior na bigamia; ignorar a fixação judicial da pensão), conflito familiar sem intenção de lesar o estado civil ou o poder de guarda.
4. **Fato é conflito cível/de família, não crime** — subsidiariedade e fragmentariedade do Direito Penal: inadimplemento de alimentos resolve-se pela **execução/prisão civil** (CPC, art. 528); disputa de guarda e alienação parental têm **remédios cíveis** (Lei 12.318/2010); desavença conjugal não é bigamia.
5. **Perdão judicial e formas privilegiadas** — art. 242, parágrafo único (motivo de reconhecida nobreza na "adoção à brasileira"); art. 249, §2º (restituição do incapaz sem maus-tratos). Pleitear extinção da punibilidade.
6. **Especialidade / vedação ao *bis in idem*** — o 242 é especial frente à falsidade (297, §1º/299); o 249 é subsidiário ("se o fato não constitui elemento de outro crime") frente ao sequestro (148) ou tráfico/subtração internacional; crimes do **ECA** podem ser **especiais** frente ao CP (ex.: entrega irregular).
7. **Prejudicial heterogênea (bigamia)** — CPP, art. 92: pendendo no cível questão sobre a validade do primeiro casamento, **suspender** o processo penal e o curso da prescrição.
8. **Institutos despenalizadores** — nas figuras de menor potencial ofensivo (abandono intelectual e moral, e demais com pena máxima até 2 anos): **transação penal** e composição (Lei 9.099/95); **suspensão condicional do processo** (art. 89) e **ANPP** (art. 28-A, CPP) quando presentes os requisitos.
9. **Extinção da punibilidade pela prescrição** — várias figuras têm **pena baixíssima** (246 e 247, dias/meses; 248 e 249, meses), com **prazos prescricionais curtos** (art. 109 CP). Sempre checar prescrição da pretensão punitiva, retroativa e intercorrente.
10. **Atipicidade temporal (adultério)** — fatos capitulados como adultério (antigo art. 240): *abolitio criminis* pela Lei 11.106/2005 (irretroatividade da lei penal mais grave; retroatividade da mais benéfica — CF, art. 5º, XL).
11. **Dosimetria e substituição** — penas majoritariamente detentivas e baixas: regime **aberto**, **substituição por restritivas de direitos** (art. 44 CP, crimes sem violência/grave ameaça), afastamento de majorantes mal fundamentadas.

## Contra-teses da acusação (antecipar)

- **Abandono material — dolo por capacidade de prover:** demonstração de que o réu tinha renda/patrimônio e deixou de pagar deliberadamente (extratos, contratos, padrão de vida). **Rebate:** separar renda de **liquidez efetiva**; provar despesas essenciais concorrentes, doença, dependentes, e ausência de recusa voluntária.
- **Subtração de incapaz — descumprimento de decisão de guarda:** existência de ordem judicial fixando a guarda com o outro genitor, subtraída pelo réu. **Rebate:** verificar se o réu estava **destituído/privado** do poder familiar (§1º); se apenas exercia direito de convivência ou agiu por **estado de necessidade** (risco à criança); pleitear o **perdão judicial** do §2º.
- **Adoção à brasileira — dolo de alterar o estado civil:** registro consciente de filho alheio como próprio. **Rebate:** **forma privilegiada** e **perdão judicial** (242, parágrafo único) por motivo de nobreza/afeto; ausência de prejuízo; posse do estado de filho.
- **Bigamia — segundo casamento formal:** certidões de dois casamentos. **Rebate:** invalidade/inexistência do primeiro (§2º); prejudicial heterogênea (art. 92 CPP); ausência de dolo.

A defesa **ataca cada uma na origem**: qualidade da prova do dolo e da capacidade econômica; a exata situação jurídica do poder familiar/guarda; e a delimitação entre ilícito penal e conflito familiar.

## Distinção de figuras próximas

| Situação | Figura correta | Uso pela defesa |
|---|---|---|
| Inadimplemento de pensão | **Execução / prisão civil** (CPC, art. 528) — não crime, salvo dolo do art. 244 | Afastar a criminalização de mera dívida; exigir "sem justa causa" e dolo |
| Registrar filho alheio como próprio | **Art. 242** (especial) | Afastar falsidade ideológica (297, §1º/299) — *bis in idem*; pleitear privilégio/perdão |
| Genitor retém/leva o próprio filho em disputa de guarda | **Atípico** no 249 se no exercício do poder familiar | §1º só alcança destituído/privado; buscar atipicidade |
| Retirada do incapaz com privação de liberdade | **Sequestro (148)** absorve, ou concurso | 249 é subsidiário — evitar dupla imputação |
| Entrega irregular de criança para adoção | Verificar **ECA (arts. 238-239)** x CP 245 | Princípio da especialidade; conferir tipo aplicável |
| Alienação parental | **Medidas cíveis** (Lei 12.318/2010) | Não é crime autônomo; afastar criminalização; falsa imputação de abuso pode ser outro tipo |
| Adultério | **Revogado** (Lei 11.106/2005) | *Abolitio criminis* para fatos antigos |

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** **não cite súmula, tese ou acórdão de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** pela skill `jurisprudencia-stj-stf` antes de levar à peça. A jurisprudência do Título VII é dispersa e casuística.

- **Abandono material (244)** — há orientação relevante do STJ/tribunais sobre **dolo, "justa causa" e capacidade econômica**, sobre a natureza da obrigação (pensão **judicialmente fixada**) e sobre a distinção da execução civil de alimentos → **[NÃO VERIFICADO]**, confirmar tese e alcance antes de afirmar.
- **Subtração de incapazes (249)** e sua interface com **disputa de guarda e subtração internacional** (Convenção da Haia de 1980) → **[NÃO VERIFICADO]**, verificar posição atual.
- **"Adoção à brasileira" (242)** — aplicação da **forma privilegiada e do perdão judicial** do parágrafo único → **[NÃO VERIFICADO]**, conferir.
- **Interface com o ECA e com a Lei de Alienação Parental (12.318/2010)** — especialidade e limites da tutela penal → **[NÃO VERIFICADO]**, conferir antes de definir a capitulação.

Qualquer enunciado específico sobre bigamia, prejudicial heterogênea, prescrição por figura ou natureza da ação penal → **[NÃO VERIFICADO]** — buscar o precedente atual antes de afirmar.

## Checklist e anti-padrões

- [ ] **Figura exata** identificada e conferida contra a descrição fática (a denúncia capitulou o dispositivo certo)?
- [ ] O fato é **ilícito penal** ou **conflito cível/de família** (inadimplemento, guarda, alienação parental)?
- [ ] **Dolo** presente? Há **erro de tipo**? (o Título VII não tem forma culposa)
- [ ] No **244/246**, testada a **"justa causa"** e a **impossibilidade econômica** com prova documental?
- [ ] No **249**, o réu estava **destituído/privado** do poder familiar (§1º) ou no **exercício regular**? Cabe **perdão judicial** (§2º)?
- [ ] No **235**, verificada a **validade do primeiro casamento** (§2º) e a **prejudicial heterogênea** (art. 92 CPP)?
- [ ] No **242**, avaliada a **forma privilegiada/perdão judicial** e afastado o *bis in idem* com falsidade?
- [ ] **Especialidade** com o **ECA** conferida quando houver figura correlata?
- [ ] **Prescrição** verificada (penas baixas, prazos curtos) e **abolitio** do adultério para fatos antigos?
- [ ] **Despenalizadores** avaliados (transação, sursis processual, ANPP) nas figuras de menor potencial?
- [ ] **Súmulas e precedentes conferidos** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- Tratar **inadimplemento de pensão** como abandono material sem testar "sem justa causa", dolo e capacidade econômica.
- Aceitar a imputação do **art. 249** contra genitor que exerce **regularmente** o poder familiar em disputa de guarda.
- Ignorar o **perdão judicial** (242, parágrafo único; 249, §2º) e as **formas privilegiadas**.
- Punir **duas vezes** o mesmo fato (art. 242 e falsidade ideológica) sem enfrentar o *bis in idem*.
- Deixar de suscitar a **prejudicial heterogênea** na bigamia (art. 92 CPP).
- Confundir **alienação parental** (medida cível) com crime.
- Esquecer **prescrição** em figuras de pena mínima e os **despenalizadores** cabíveis.
- Capitular conduta como **adultério** (revogado) ou aplicar lei mais grave a fato anterior.
- Citar precedente sobre qualquer figura **sem** passar pelo gate de jurisprudência.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB). Toda tese é **hipótese a confirmar**.
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistência de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar dolo, ausência de justa causa e a exata situação do poder familiar é da acusação; espelhar as teses acima como pontos a **provar**, não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD e proteção de crianças e adolescentes:** processos de família tramitam com **cautela redobrada**; dados de vítimas, incapazes e do assistido **não** vão a repositório público, e o interesse superior da criança orienta a estratégia.

## Lembretes finais

- **Uma tese por figura** — identifique o tipo exato e disseque elemento a elemento; a falta de um leva à atipicidade ou desclassificação.
- **Penal x cível/família** — inadimplemento, guarda e alienação parental têm remédios próprios; o Direito Penal é **subsidiário**.
- **"Sem justa causa" e dolo** são o eixo dos abandonos (244/246); **impossibilidade econômica** é justa causa.
- **Poder familiar** define a subtração de incapaz (249): genitor regular não comete; destituído/privado (§1º) comete; **perdão judicial** se restitui (§2º).
- **Perdão judicial e privilégio** (242 e 249) e **prejudicial heterogênea** na bigamia (art. 92 CPP) são alavancas concretas.
- **Prescrição e despenalizadores** — penas baixas; sempre checar. **Adultério foi revogado.**
- **Sem jurisprudência de memória** — interface com ECA e Lei 12.318/2010; confira tudo via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
