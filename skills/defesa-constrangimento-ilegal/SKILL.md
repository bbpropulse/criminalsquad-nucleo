---
name: defesa-constrangimento-ilegal
description: >-
  Use ao defender CONSTRANGIMENTO ILEGAL (CP, art. 146) — o crime subsidiário por excelência.
  Roteiro de teses: subsidiariedade (absorção pelo crime-fim: roubo, extorsão, estupro, sequestro),
  exclusões do §3º (intervenção médica em iminente perigo de vida; coação para impedir suicídio),
  exercício regular de direito, ausência de violência ou grave ameaça atual, ausência do dolo
  específico e a distinção do 147 (ameaça) e do… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-constrangimento-ilegal"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-constrangimento-ilegal", "defesa constrangimento", "constrangimento ilegal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Constrangimento Ilegal (CP, art. 146)

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

Esta skill orienta a **defesa técnica na imputação de constrangimento ilegal** — constranger alguém, mediante **violência ou grave ameaça**, ou depois de lhe reduzir a capacidade de resistência, a **não fazer o que a lei permite** ou **a fazer o que ela não manda** (CP, art. 146). É um **crime subsidiário por excelência**: quando o constrangimento é apenas o **meio** de um crime mais grave, ele é **absorvido** (roubo, extorsão, estupro, sequestro). A defesa vive dessa lógica — e das **exclusões próprias do §3º**.

> **Lição central:** antes de discutir o mérito, pergunte **"constrangimento para quê?"**. Se a violência ou a ameaça foi o **caminho** de outro crime (subtração, vantagem econômica, conjunção carnal, privação de liberdade), o art. 146 **não subsiste autonomamente** — é absorvido pelo crime-fim (princípio da consunção). A tese mais forte quase nunca é negar o fato: é **realocar** a conduta no tipo correto ou reconhecer a **absorção**.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente do art. 146 do CP** e das penas (detenção de 3 meses a 1 ano, ou multa; §1º sobre concurso de agentes/emprego de armas; §2º sobre cumulação com a violência; §3º sobre as exclusões). Verifique também qualquer súmula, tema ou acórdão pela skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nada de jurisprudência citada de memória.

## Base legal

- **Art. 146, *caput*, do CP** — o tipo: constranger, mediante violência ou grave ameaça, ou reduzindo a capacidade de resistência, a não fazer o que a lei permite ou a fazer o que ela não manda.
- **Art. 146, §1º, do CP** — aumento de pena (**concurso de mais de três pessoas** ou **emprego de armas**) e cumulação das penas.
- **Art. 146, §2º, do CP** — as penas do artigo aplicam-se **sem prejuízo** das correspondentes à **violência** (lesão corporal, se houver).
- **Art. 146, §3º, do CP** — **exclusões típicas** (não constituem crime): I) a **intervenção médica ou cirúrgica sem consentimento**, quando justificada por **iminente perigo de vida**; II) a **coação exercida para impedir suicídio**.
- **Art. 13 e art. 18, I, do CP** — nexo e **dolo** (o tipo é doloso; inexiste modalidade culposa).
- **Art. 23, III, do CP** — **exercício regular de direito** e estrito cumprimento de dever legal (excludentes de ilicitude).
- **Fronteiras típicas:** **art. 147** (ameaça — mal **futuro**), **art. 148** (sequestro/cárcere privado — privação da liberdade de locomoção), **art. 157** (roubo), **art. 158** (extorsão), **art. 213** (estupro). Confirmar sempre a subsunção correta.

## Anatomia do tipo — os pontos de ataque

O art. 146 tem elementos que a defesa deve testar **um a um**; a falta de qualquer um afasta a tipicidade:

1. **Conduta de constranger** — obrigar a vítima a um comportamento (ação ou omissão) contra a sua vontade.
2. **Meio executório** — **violência** (física), **grave ameaça** (mal iminente e sério) **ou** redução da capacidade de resistência (ex.: substância). Ameaça de mal **futuro e distante**, ou promessa de exercício regular de direito, **não** serve.
3. **Objeto** — compelir a **não fazer o que a lei permite** ou a **fazer o que ela não manda**. Exigir conduta a que a vítima **já estava obrigada** por lei descaracteriza o núcleo.
4. **Dolo** — vontade livre e consciente de constranger; **inexiste forma culposa**. Estados passionais, brincadeira, advertência legítima podem afastar o elemento subjetivo.
5. **Resultado** — em regra o tipo se **consuma** quando a vítima faz/deixa de fazer o que lhe foi imposto; **admite tentativa** (constrangimento que não dobra a vontade da vítima).

## Roteiro de análise e defesa (ordem de prioridade)

Trabalhe as teses **da mais forte para a subsidiária**, sem abandonar o pedido eventual:

### 1) Subsidiariedade / absorção pelo crime-fim (a tese-mãe)

O constrangimento ilegal é **expressa ou tacitamente subsidiário**. Quando a violência/ameaça é **elemento constitutivo** ou **meio** de crime mais grave, a consunção afasta o 146:

- **Roubo (art. 157)** — a grave ameaça para subtrair coisa alheia **é** o roubo; não há 146 autônomo.
- **Extorsão (art. 158)** — constranger a fazer/tolerar/deixar de fazer algo para obter **vantagem econômica indevida** é extorsão; o 146 é absorvido.
- **Estupro (art. 213)** — a violência/grave ameaça para a conjunção carnal ou ato libidinoso é o próprio estupro.
- **Sequestro/cárcere privado (art. 148)** — se o resultado é a **privação da liberdade de locomoção**, a moldura é o 148 (ver `defesa-sequestro-carcere-privado`).

➡️ **Tese defensiva (forte):** reconhecer os fatos e sustentar que a capitulação correta é **um único crime** (o crime-fim) — evitando o **bis in idem** de punir meio e fim. Alternativamente, se a acusação insiste no 146 isolado quando havia crime-fim consumado, pedir a **desclassificação** para o tipo adequado ou o reconhecimento da **consunção**.

### 2) Exclusões típicas do §3º

O §3º torna **atípicas** duas condutas:

- **Intervenção médica/cirúrgica sem consentimento, justificada por iminente perigo de vida (I).** Médico que opera o paciente inconsciente ou que recusa tratamento, diante de risco atual de morte, **não** comete constrangimento ilegal. Tese técnica: presença do **iminente perigo de vida** e da **finalidade terapêutica** — não é violência ilícita, é conduta descriminada pela lei.
- **Coação para impedir suicídio (II).** Quem usa força/ameaça para deter alguém que tenta se matar **não** pratica o crime. Tese: a coação teve **fim de proteção da vida**, dentro do tipo permissivo do §3º, II.

➡️ **Cuidado:** a exclusão é **típica** (o fato não é crime), diferente da excludente de ilicitude — a redação e o alcance devem ser conferidos na letra vigente do §3º.

### 3) Exercício regular de direito / estrito cumprimento de dever legal (art. 23, III)

Cobrança de dívida por meios legítimos, retenção autorizada por lei, ordem de autoridade no exercício de função, poder de correição parental razoável — condutas amparadas por **direito** ou **dever legal** afastam a ilicitude. A ameaça de exercer um **direito** (ex.: "vou processá-lo", "vou registrar boletim de ocorrência") **não** é grave ameaça típica, pois anuncia mal juridicamente **lícito**.

### 4) Ausência de violência ou de grave ameaça atual (atipicidade do meio)

Sem o meio executório qualificado, **não há** art. 146. Ataque a **gravidade** e a **atualidade** da ameaça:

- Mal **futuro, remoto ou condicionado a evento incerto** → aproxima-se do **art. 147** (ameaça), não do constrangimento — e pode ser **atípico** se o mal for lícito.
- Ameaça vaga, jocosa, hiperbólica, proferida em discussão acalorada → pode faltar a **seriedade** exigida.
- Mero **aborrecimento**, importunação ou insistência verbal, sem violência nem ameaça grave → **atipicidade**.

### 5) Ausência do dolo / erro (atipicidade subjetiva)

O tipo é **exclusivamente doloso**. Sustente: ausência de vontade de constranger; **erro de tipo** (art. 20 — o agente supunha agir dentro de um direito ou não percebia coagir); **erro de proibição** (art. 21), conforme o caso. Estado de ânimo passional, sem consciência da coação, milita contra o dolo.

### 6) Insignificância / lesividade (excepcional)

Em constrangimentos de **ínfima ofensividade** (conduta que não chega a dobrar a vontade da vítima nem a expõe a risco relevante), pondere o **princípio da insignificância** e a **ofensividade** como reforço — tese acessória, a ser calibrada ao caso concreto e à jurisprudência atual (conferir via `jurisprudencia-stj-stf`).

## Teses e contra-teses (defesa × acusação)

| Tese da defesa | Fundamento | Contra-tese usual da acusação |
|---|---|---|
| **Absorção pelo crime-fim** (consunção) | 146 é subsidiário; punir meio e fim é *bis in idem* | O crime-fim não se consumou / o constrangimento teve autonomia e finalidade própria |
| **Exclusão do §3º** (intervenção médica / impedir suicídio) | Atipicidade expressa (art. 146, §3º) | Faltava o iminente perigo de vida / havia recusa válida e consciente |
| **Exercício regular de direito** | Art. 23, III; ameaça de mal lícito não é típica | O meio empregado excedeu o direito (violência desnecessária) |
| **Ausência de grave ameaça atual** | Mal futuro/remoto → 147, não 146; ou atipicidade | A ameaça era séria e idônea a coagir |
| **Ausência de dolo / erro de tipo** | Tipo só doloso (art. 18, I) | O dolo se extrai das circunstâncias objetivas |
| **Desclassificação para 147 ou atipicidade** | Distinção do mal futuro (147) e do meio | Contexto revela coação atual sobre a liberdade de agir |

## Distinções que decidem o caso

- **146 (constrangimento) × 147 (ameaça):** no 146 a violência/ameaça é **meio atual** para dobrar a vontade da vítima **agora** (fazer/não fazer algo); no 147 a promessa de **mal futuro** é um fim em si, sem exigir uma conduta imediata. Confundir os dois é erro clássico da denúncia — explore-o.
- **146 × 148 (sequestro/cárcere privado):** se a conduta resulta em **privação da liberdade de locomoção** (manter alguém preso/retido), a moldura correta é o **148**, não o 146. Ver `defesa-sequestro-carcere-privado` (fronteira inversa).
- **146 × 157/158 (roubo/extorsão):** havendo **finalidade patrimonial** (subtração ou vantagem econômica indevida), a capitulação é **patrimonial** — o 146 é absorvido.
- **146 × 213 (estupro):** violência/grave ameaça para ato sexual **é** estupro; não coexiste com 146 autônomo.

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e princípios (consunção, subsidiariedade, *bis in idem*) podem ser afirmados com segurança. **Qualquer** número de HC/REsp/RE, informativo, tema repetitivo ou enunciado de súmula específico sobre o art. 146 **NÃO** deve ser citado de memória — marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`. Prefira **ensinar a tese e o dispositivo** a arriscar um acórdão.

- **Princípio da consunção / crime-meio absorvido pelo crime-fim** — base doutrinária sólida; a aplicação concreta ao 146 deve ser ancorada em precedente **[verificar via `jurisprudencia-stj-stf`]**.
- **Súmula 17/STJ** (falsidade absorvida quando exaure sua potencialidade lesiva no crime-fim) — é **analogia argumentativa** da lógica de absorção; **confirmar aplicabilidade e redação [NÃO VERIFICADO]** antes de invocar.
- **Enunciados sobre insignificância** aplicados ao 146 — existência e alcance **[NÃO VERIFICADO]**; conferir.
- Para **competência** (JECrim — infração de menor potencial ofensivo, dada a pena máxima) e eventual **suspensão condicional do processo** (art. 89, Lei 9.099/95) e **ANPP** (art. 28-A, CPP): checar cabimento no caso e a jurisprudência atual via `jurisprudencia-stj-stf` (ver skills `justica-negocial`/`anpp` quando existirem).

## Consequências processuais a explorar

Dada a pena do art. 146 (**detenção de 3 meses a 1 ano, ou multa**), o crime é, em regra, **infração de menor potencial ofensivo** — o que abre portas úteis à defesa:

- **Competência do JECrim** (Lei 9.099/95) e possibilidade de **transação penal** (art. 76) e **composição civil**.
- **Suspensão condicional do processo** (art. 89, Lei 9.099/95), se preenchidos os requisitos.
- **ANPP** (art. 28-A, CPP), quando cabível.
- **Prescrição** — pena baixa favorece a **prescrição** (da pretensão punitiva ou executória); calcule sempre (método na skill `calculadora-prescricao`).

> Confirme, caso a caso, se a majorante do §1º ou a cumulação com a violência (§2º) altera a pena máxima e, com ela, a competência e os benefícios.

## Erros comuns e checklist

**Checklist da defesa (antes de peticionar):**

- [ ] Perguntou **"constrangimento para quê?"** — identificou eventual **crime-fim** que absorve o 146?
- [ ] Verificou se há **finalidade patrimonial** (→ 157/158) ou **sexual** (→ 213) ou **privação de liberdade** (→ 148)?
- [ ] Testou o **meio**: houve violência ou **grave ameaça atual**, ou o mal era **futuro/lícito** (→ 147 ou atipicidade)?
- [ ] Analisou as **exclusões do §3º** (intervenção médica em iminente perigo de vida; coação para impedir suicídio)?
- [ ] Avaliou **exercício regular de direito** / ameaça de mal **lícito** (art. 23, III)?
- [ ] Confirmou o **dolo** e afastou **erro de tipo/proibição**?
- [ ] Verificou **§1º** (concurso de +3 pessoas / armas) e **§2º** (cumulação com a violência) — impacto na pena e na competência?
- [ ] Explorou **JECrim / transação / suspensão do processo / ANPP** e a **prescrição** (pena baixa)?
- [ ] Passou **toda** citação de súmula/precedente pelo gate `jurisprudencia-stj-stf`?
- [ ] Marcou a peça como **rascunho sob revisão humana**?

**Anti-padrões (evitar):**

- Aceitar a **dupla imputação** (146 + crime-fim) sem invocar a consunção — é o erro que mais prejudica o réu.
- Tratar ameaça de **mal futuro** como constrangimento (é 147, se típico) — ou punir como crime a ameaça de exercer um **direito lícito**.
- Ignorar as **exclusões do §3º** em casos médicos ou de tentativa de suicídio.
- Esquecer que o tipo é **só doloso** — não há constrangimento culposo.
- Deixar de calcular a **prescrição** e de pleitear os **benefícios do JECrim** numa infração de menor potencial ofensivo.
- Citar acórdão/súmula **de memória** — sempre pelo gate de verificação.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à construção da tese, não substitui o juízo do(a) advogado(a) responsável nem a análise dos autos concretos (CED/OAB, art. 2º; **Provimento 205/2021** sobre publicidade e atuação).
- **Polo:** esta skill é de **DEFESA** (constrangimento ilegal é crime comum, fora do júri). Se o pedido vier do **polo acusatório** (MP/assistente de acusação), o roteador deve confirmar o polo e adaptar a abordagem — as teses aqui são construídas em favor do réu.
- **Citation Gate:** nenhuma súmula, tese ou precedente específico entra na peça sem passar por `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência alucinada por IA).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
