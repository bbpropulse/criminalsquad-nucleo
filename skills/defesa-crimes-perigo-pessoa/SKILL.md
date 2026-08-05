---
name: defesa-crimes-perigo-pessoa
description: >-
  Use ao defender crimes de periclitação da vida e da saúde (CP, arts. 130 a 135) — perigo de
  contágio venéreo (130), perigo de contágio de moléstia grave (131), perigo para a vida ou saúde de
  outrem (132), abandono de incapaz (133), exposição/abandono de recém-nascido (134) e omissão de
  socorro (135). Teses típicas: atipicidade por ausência de perigo concreto/direto, ausência do dolo
  de perigo, inexistência do dever de… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-contra-pessoa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-perigo-pessoa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-perigo-pessoa", "defesa crimes", "perigo pessoa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes de Periclitação da Vida e da Saúde (CP, arts. 130 a 135)

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

Esta skill orienta a **defesa técnica nos crimes de perigo contra a pessoa** do Capítulo III do Título I da Parte Especial do CP — condutas que **expõem a vítima a risco** à vida ou à saúde **sem exigir dano efetivo**. São crimes de competência do **juízo singular** (não do júri), pois **não são dolosos contra a vida** — o dolo aqui é **de perigo**, não de dano. A defesa gira em torno de uma pergunta central: **houve, de fato, o perigo que o tipo exige — e o agente quis/assumiu esse perigo?**

> **Lição central:** o eixo de toda a defesa é a **estrutura do tipo de perigo**. Antes de qualquer tese, classifique: (1) o crime é de **perigo concreto** (exige perigo real, comprovado no caso — arts. 130, 131, 132, 133, 134, 135) ou de **perigo abstrato/presumido**? (2) o **dolo** é de perigo (o agente quer/aceita expor a risco) e **não** de dano (se houver dolo de matar/lesionar, o crime é outro)? (3) existe **posição de garante / dever de agir** (arts. 133 e 135)? Errar a natureza do tipo contamina toda a tese. **Perigo concreto não presumido = tese de atipicidade quando a prova não demonstra o risco real.**

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente dos arts. 130 a 135 do CP** e as majorantes/qualificadoras (resultado lesão grave ou morte — arts. 129 e 133, §§; art. 135, parágrafo único) na fonte oficial antes de peticionar. Confira ainda súmulas, temas repetitivos e eventual *overruling* pela skill `jurisprudencia-stj-stf` **antes de fundamentar**. Nenhum precedente entra na peça sem passar pelo gate de verificação de citações.

## Base legal

- **Art. 130, CP** — perigo de contágio venéreo (crime de perigo concreto; ação penal condicionada — §2º; forma qualificada pelo dolo de transmitir — §1º).
- **Art. 131, CP** — perigo de contágio de moléstia grave (crime de **dano** com dolo específico de transmitir moléstia grave — atenção: aqui a estrutura difere do 130).
- **Art. 132, CP** — perigo para a vida ou saúde de outrem (**subsidiário expresso**: "se o fato não constitui crime mais grave"; perigo concreto e **direto**; parágrafo único — transporte irregular de trabalhadores).
- **Art. 133, CP** — abandono de incapaz (**crime próprio** de quem tem o incapaz sob cuidado, guarda, vigilância ou autoridade; perigo concreto; formas qualificadas pelo resultado — §§1º e 2º; majorantes — §3º).
- **Art. 134, CP** — exposição ou abandono de recém-nascido (crime próprio, ligado à **causa honoris** — ocultar desonra própria; qualificado pelo resultado — §§1º e 2º).
- **Art. 135, CP** — omissão de socorro (**crime omissivo próprio**; dever geral de solidariedade; **dispensa posição de garante**; majorado se resulta lesão grave ou morte — parágrafo único).
- **Art. 135-A, CP** — condicionamento de atendimento médico-hospitalar emergencial (conferir vigência/redação — inserido por lei posterior).
- **Art. 13, §2º, CP** — cláusulas do **dever de agir** (garante): lei, assunção da responsabilidade, ingerência — base dogmática para os crimes comissivos por omissão (relevante no 133).
- **Art. 18, parágrafo único, CP** — só há crime doloso, salvo previsão de culpa (os crimes de perigo aqui, salvo o art. 130, exigem **dolo de perigo**; não há forma culposa típica).

## Roteiro de análise e defesa por tipo penal

### 1) Classificar a estrutura do tipo (fazer sempre, antes de tudo)

| Eixo | Pergunta | Efeito defensivo |
|---|---|---|
| **Perigo concreto x abstrato** | O tipo exige risco real comprovado no caso? | Nos crimes concretos (130-135), sem prova do perigo real → **atipicidade** |
| **Dolo de perigo x dolo de dano** | O agente quis expor a risco ou quis o dano? | Se havia **animus** de matar/lesionar → o crime é homicídio/lesão (tentado ou consumado), não perigo; se não havia dolo algum → fato atípico (não há forma culposa) |
| **Posição de garante / dever de agir** | O agente tinha dever jurídico de proteger (133) ou dever geral (135)? | Sem o dever, no 133 há atipicidade; no 135 o dever é de todos, mas cede diante do **risco pessoal** |
| **Subsidiariedade / consunção** | O fato é absorvido por crime mais grave? | Art. 132 é **expressamente subsidiário**; perigo que é meio para lesão/homicídio é absorvido |

### 2) Art. 130 — perigo de contágio venéreo

- **Perigo concreto:** exige exposição real a contágio de **moléstia venérea** (o agente sabe ou deve saber que está contaminado). Sem prova da contaminação do agente **e** do ato capaz de transmitir → atipicidade.
- **Elemento normativo "sabe ou deve saber":** a defesa ataca o conhecimento — diagnóstico posterior, ausência de sintomas, desconhecimento legítimo da condição afastam o dolo/culpa exigidos.
- **§1º (forma mais grave):** intenção de transmitir. Se o dolo é de **transmitir** e a moléstia é **grave**, discutir deslocamento para o art. 131. Se há **intenção de matar** (ex.: doença letal usada como meio), discutir tentativa de homicídio — cada moldura muda a pena e o rito.
- **Ação penal (§2º):** procede mediante **representação** — verificar tempestividade/decadência (art. 38 CPP) como preliminar.

### 3) Art. 131 — perigo de contágio de moléstia grave

- **Atenção à natureza:** parte da doutrina o trata como **crime de dano com dolo de perigo/transmissão** e **dolo específico** ("com o fim de transmitir"). Sem esse **fim especial de transmitir**, a conduta é **atípica** neste tipo — tese central de defesa.
- Discutir **erro de tipo** quanto à gravidade da moléstia e ao poder de contágio do ato concreto.

### 4) Art. 132 — perigo para a vida ou saúde de outrem

- **Subsidiariedade expressa:** "se o fato não constitui crime mais grave". Se a mesma conduta configura lesão corporal, homicídio tentado, disparo de arma (Lei 10.826/03) ou crime de trânsito mais grave → o 132 é **absorvido**. Usar como tese de **atipicidade relativa/absorção**.
- **Perigo direto e concreto:** o risco deve recair sobre **pessoa(s) determinada(s)** e ser **real**, não presumido. Perigo genérico/difuso ou meramente potencial → atipicidade.
- **Dolo de perigo:** o agente deve querer ou assumir o risco de expor a vida/saúde alheia. Conduta **culposa** é atípica neste tipo (não há modalidade culposa).
- **Parágrafo único:** transporte de trabalhadores em desacordo com normas de segurança — verificar a **materialidade** do risco concreto no transporte.

### 5) Art. 133 — abandono de incapaz

- **Crime próprio:** só o comete quem tem o incapaz **sob cuidado, guarda, vigilância ou autoridade**. Ausente essa relação → **atipicidade** (o terceiro que não tinha o dever responde, se for o caso, por omissão de socorro do 135, não pelo 133).
- **Incapacidade de defesa:** a vítima deve ser **incapaz de defender-se** dos riscos do abandono no momento e lugar concretos. Se a vítima podia proteger-se, ou o abandono não gerou perigo real → atipicidade (perigo concreto não demonstrado).
- **Perigo concreto:** o abandono precisa **expor a perigo** efetivo — a mera ausência temporal, sem risco real, não basta.
- **Dolo:** vontade de abandonar **ciente** da incapacidade e do risco. Abandono **culposo** ou por força maior/estado de necessidade (ex.: fuga de risco maior) afasta o crime.
- **Formas qualificadas pelo resultado (§§1º e 2º):** lesão grave ou morte **culposas** (preterdolo) — atacar o **nexo causal** entre o abandono e o resultado (o resultado deve decorrer do abandono, não de causa independente).
- **Majorantes (§3º):** abandono em lugar ermo, por ascendente/descendente/cônjuge/irmão/tutor/curador, ou vítima maior de 60 anos — conferir a **incidência concreta** e evitar bis in idem com a elementar.

### 6) Art. 134 — exposição ou abandono de recém-nascido

- **Elemento subjetivo especial (causa honoris):** "para ocultar desonra própria". **Sem esse fim específico**, não há o tipo privilegiado do 134 — a conduta migra para o 133 (abandono de incapaz) ou 135. A presença/ausência da *causa honoris* é **tese estruturante**.
- **Sujeito ativo restrito:** ligado à relação com o recém-nascido e ao motivo de ocultar a desonra.
- **Formas qualificadas pelo resultado (§§1º e 2º):** mesmo tratamento preterdoloso — atacar nexo causal.
- **Fronteira com o infanticídio (art. 123):** se houve **dolo de matar** sob influência do estado puerperal, o crime é infanticídio (doloso contra a vida → **júri**), não abandono. Distinção crucial para o rito.

### 7) Art. 135 — omissão de socorro

- **Crime omissivo próprio:** consuma-se pela **simples omissão** do dever de agir; **dispensa posição de garante** (é dever de solidariedade de **qualquer pessoa**). Por isso a defesa aqui **não** discute garante, e sim as **excludentes do dever**.
- **Vítimas típicas:** criança abandonada/extraviada, pessoa inválida/ferida ao desamparo, pessoa em grave e iminente perigo.
- **"Risco pessoal":** o dever cede quando o socorro direto expõe o omitente a **risco pessoal**. Comprovado o risco pessoal, subsiste apenas o dever de **pedir socorro à autoridade** — e, cumprido esse dever subsidiário, há atipicidade.
- **Impossibilidade material:** ausência de percepção do perigo, socorro já prestado por terceiro, impossibilidade física de agir → atipicidade.
- **Subsidiariedade:** se o omitente tinha **posição de garante** e o dever de impedir o resultado (art. 13, §2º), responde pelo **crime comissivo por omissão** (homicídio/lesão), não pelo 135 — o que muda radicalmente a pena; a defesa avalia qual moldura é menos gravosa e mais aderente à prova.
- **Majorante (parágrafo único):** pena aumentada se da omissão resulta **lesão grave** (metade) ou **morte** (triplica) — atacar o **nexo** entre a omissão e o agravamento (o resultado teria ocorrido mesmo com o socorro?).

## Teses típicas de defesa e contra-teses

| # | Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|---|
| 1 | **Atipicidade por ausência de perigo concreto** | Tipos de perigo concreto (130-135) exigem risco real comprovado; prova não o demonstra | Perigo evidenciado pelas circunstâncias; laudo/testemunhas apontam risco |
| 2 | **Ausência do dolo de perigo** | Não houve vontade nem assunção do risco; conduta culposa é atípica (sem forma culposa) | Dolo eventual: o agente assumiu o risco de expor a vítima |
| 3 | **Inexistência de posição de garante / dever de cuidado (133)** | Agente não tinha o incapaz sob cuidado/guarda/vigilância/autoridade | Relação de fato/vigilância demonstrada nos autos |
| 4 | **Subsidiariedade e absorção (132)** | "Se o fato não constitui crime mais grave" — perigo absorvido por lesão/homicídio/porte | Autonomia da conduta de perigo em relação ao resultado |
| 5 | **Consunção (perigo como meio)** | Perigo é fase/meio de crime-fim mais grave → absorção | Pluralidade de bens jurídicos; concurso, não consunção |
| 6 | **Risco pessoal / impossibilidade (135)** | Socorro direto exporia o omitente a risco pessoal; dever cede ao de pedir socorro | Havia meio seguro de socorrer; risco pessoal não comprovado |
| 7 | **Ausência da causa honoris (134)** | Sem o fim de ocultar desonra própria, não há o tipo do 134 | Motivação honoris extraída do contexto |
| 8 | **Rompimento do nexo causal (formas preterdolosas)** | Lesão grave/morte decorreu de causa independente, não do abandono/omissão | Nexo direto entre a conduta e o resultado agravador |
| 9 | **Desclassificação para tipo menos grave** | Fato se ajusta ao 135 (dever geral) e não ao 133 (garante), ou vice-versa | Enquadramento no tipo mais grave é o correto |
| 10 | **Decadência / falta de representação (130)** | Ação condicionada; representação intempestiva (art. 38 CPP) | Representação tempestiva/ação adequada |

> **Regra de ouro da desclassificação:** nos crimes de perigo, mover a imputação **para baixo** (do dano para o perigo, ou do tipo qualificado para o simples) só é vitória se a **prova do dolo de dano** não se sustenta. Se, ao contrário, há elementos de **dolo de matar/lesionar**, cuidado: sustentar "era só perigo" pode ser refutado e piorar a posição. Ancore a tese na **prova concreta do elemento subjetivo**.

## Nulidades e questões processuais próprias

- **Ação penal do art. 130 (condicionada à representação):** verificar **legitimidade** e **tempestividade** da representação; decadência é matéria de **atipicidade da persecução** (extinção da punibilidade — art. 107, IV, CP). Preliminar de mérito.
- **Competência:** por **não** serem dolosos contra a vida, correm no **juízo singular** — eventual pronúncia/júri seria nulidade por incompetência. Se a denúncia tentar levar perigo (132/133) ao júri, arguir a competência do juiz singular.
- **Inépcia da denúncia:** exigir a **descrição do perigo concreto** e do **dolo de perigo**. Denúncia que apenas narra a conduta sem indicar o risco real e o elemento subjetivo é **inepta** (art. 41 CPP) — pedir rejeição/absolvição sumária.
- **Prova pericial:** nos tipos que dependem de laudo (contágio no 130/131; risco no 132/133) a **ausência ou insuficiência do exame** compromete a materialidade — atacar a **cadeia de custódia** e a idoneidade do laudo (skills de prova).
- **Prescrição:** penas relativamente baixas (especialmente 130, 132, 134, 135 simples) → **conferir prescrição** (retroativa/intercorrente) como primeira triagem. Ver skill/`calculadora-prescricao` para o cálculo determinístico do prazo.

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** nenhum número de HC/REsp/RE, informativo ou tema entra na peça sem confirmação na fonte oficial via `jurisprudencia-stj-stf`. Prefira **ensinar a tese e o dispositivo** a arriscar um acórdão de memória. Abaixo, apenas eixos temáticos a **verificar**, não citações prontas.

- **Perigo concreto exige prova do risco real** — orientação consolidada de que, nos crimes de perigo concreto, a exposição a risco deve ser **demonstrada**, não presumida. **[NÃO VERIFICADO]** — localizar precedente atual do STJ/STF sobre o art. 132 e confirmar antes de citar.
- **Dolo de perigo x dolo de dano na fronteira com homicídio/lesão** — a distinção entre expor a risco (132) e tentar matar/lesionar depende do **elemento subjetivo**; há julgados sobre desclassificação. **[NÃO VERIFICADO]** — conferir.
- **Omissão de socorro e posição de garante (135 x comissivo por omissão)** — quem tem dever de garante responde pelo resultado, não pelo 135. **[NÃO VERIFICADO]** — buscar precedente aplicável.
- **Abandono de incapaz e nexo causal nas formas preterdolosas (133, §§)** — o resultado agravador deve decorrer do abandono. **[NÃO VERIFICADO]** — verificar.

> **Dispositivos de lei e regras dogmáticas** (perigo concreto x abstrato; dolo de perigo; art. 13, §2º; subsidiariedade do 132; ação condicionada do 130) podem ser afirmados com segurança — são **texto de lei e teoria consolidada**, não jurisprudência específica. O gate incide sobre **números de julgados, súmulas e informativos**.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar crime de **perigo concreto como se fosse abstrato** — presumir o risco em vez de exigir prova.
- Confundir **dolo de perigo com dolo de dano** — e, com isso, aceitar o enquadramento no tipo mais grave (ou, pior, sustentar "era só perigo" quando a prova aponta dolo de matar).
- Esquecer a **subsidiariedade expressa do art. 132** — deixar de pedir a absorção pelo crime mais grave (a favor do réu quando o mais grave não se prova; contra, se o 132 seria autônomo).
- Imputar o **art. 133** a quem **não tinha** posição de garante (cuidado/guarda/vigilância/autoridade).
- Ignorar a **causa honoris** do art. 134 e deixar o fato no tipo errado.
- No **art. 135**, discutir posição de garante (que ali é dispensada) em vez de **risco pessoal / impossibilidade / socorro já prestado**.
- Deixar de arguir **decadência** no art. 130 (ação condicionada) e **prescrição** nos tipos de pena baixa.
- Aceitar denúncia **inepta** que não descreve o **perigo concreto** nem o **dolo de perigo**.

**Checklist da defesa:**
- [ ] Estrutura do tipo classificada (perigo concreto x abstrato; dolo de perigo x dano; garante; subsidiariedade)?
- [ ] Prova do **perigo concreto real** exigida/atacada (laudo, testemunhas, circunstâncias)?
- [ ] **Elemento subjetivo** (dolo de perigo) atacado — afastada a hipótese de tipo mais grave e a de fato atípico (sem culpa típica)?
- [ ] No 133, verificada a **posição de garante** e a **incapacidade concreta** de defesa da vítima?
- [ ] No 134, verificada a presença/ausência da **causa honoris** e a fronteira com o **infanticídio (art. 123 → júri)**?
- [ ] No 135, exploradas **risco pessoal**, impossibilidade, socorro por terceiro e a fronteira com o **comissivo por omissão**?
- [ ] **Subsidiariedade/consunção** do 132 avaliada (absorção pelo crime mais grave)?
- [ ] **Nexo causal** atacado nas formas **preterdolosas** (lesão grave/morte)?
- [ ] **Competência do juízo singular** assegurada (não é crime do júri)?
- [ ] **Decadência** (130) e **prescrição** conferidas? (ver `calculadora-prescricao`)
- [ ] **Denúncia** examinada quanto à inépcia (descrição do perigo e do dolo — art. 41 CPP)?
- [ ] Toda **súmula/precedente** conferido via `jurisprudencia-stj-stf` (Citation Gate)?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Skills relacionadas e limites

- **`defesa-maus-tratos`** cobre o **art. 136** (maus-tratos), com lógica de **guarda/autoridade** distinta — não confundir com o abandono do 133.
- **`suspensao-direito-dirigir`** e **`impugnacao-prova-embriaguez`** tratam de **crimes de trânsito** (perigo no CTB), matéria diversa deste capítulo do CP.
- Fronteiras com **homicídio/lesão** (dolo de dano) → skills de **júri** (se doloso contra a vida) ou de **lesão corporal**; a **desclassificação** correta define o rito.
- Cálculo de **prescrição/pena** → `calculadora-prescricao` e `calculadora-dosimetria` (método determinístico com testes).

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à construção da tese; a responsabilidade pela peça, pela estratégia e pela leitura do caso concreto é **sempre do advogado** (EAOAB e Código de Ética; **Provimento 205/2021** quanto à publicidade).
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf`/`verificacao-citacoes` antes do uso (há sanções reais por jurisprudência inventada por IA). **Omitir vence inventar.**
- **Vigência:** confirmar a redação atual dos arts. 130 a 135 (e do 135-A) do CP e das majorantes na fonte oficial antes de peticionar.
- **Foco em defesa.** Para atuação do polo acusatório (MP/assistente) neste capítulo, o roteador deve confirmar o **polo** da instituição no `company.md` e acionar a skill de acusação pertinente — a presente skill é **do polo defensivo**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
