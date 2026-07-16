---
name: defesa-falsidade-atestado-medico
description: >-
  Use ao defender médico acusado de falsidade de atestado médico (CP, art. 302) ou o terceiro que
  dele se serve — teses de erro de diagnóstico x dolo, atestado de complacência, distinção do art.
  299 (lex specialis), majorante do fim de lucro (parágrafo único) e crime próprio de médico.
  Gatilhos: atestado médico falso, médico e atestado ideologicamente falso, atestado de
  complacência, distinção 302 x 299, fim de lucro, erro de… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica, crime-proprio]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-falsidade-atestado-medico"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-falsidade-atestado-medico", "defesa falsidade", "atestado medico"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Falsidade de Atestado Médico (CP, art. 302)

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

Esta skill orienta a **defesa** de quem responde pelo crime de **falsidade de atestado médico** (Código Penal, art. 302) — o médico que, **no exercício da profissão**, dá atestado falso, e o terceiro que **usa** esse atestado. É crime contra a **fé pública** (Título X do CP), *lex specialis* em relação à falsidade ideológica genérica do art. 299.

> **Lição central:** o eixo da defesa é o **dolo**. O art. 302 pune a falsidade **consciente e voluntária** do médico — atestar o que sabe ser inverídico. **Erro de diagnóstico, imperícia ou divergência técnica NÃO são crime**: podem gerar responsabilidade civil ou ético-disciplinar (CFM), jamais o tipo penal, que exige a *vontade de mentir no atestado*. Antes de discutir qualquer tese, **separe erro (atípico) de mentira dolosa (típica)**.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** do art. 302 do CP (caput e parágrafo único — majorante do fim de lucro) e do art. 299 na fonte oficial, bem como a pena atualmente cominada. Qualquer súmula, tema repetitivo, informativo ou acórdão (número de HC/REsp/RE) **não** entra na peça de memória — passa **obrigatoriamente** pelo gate `verificacao-citacoes` e, quando útil, pela skill `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** (há sanções reais por jurisprudência alucinada por IA).

## Base legal

- **Art. 302, caput, do CP** — "Dar o médico, no exercício da sua profissão, atestado falso." Crime **próprio de médico**.
- **Art. 302, parágrafo único, do CP** — **majorante** (aumento de pena / conversão em multa cumulativa, conforme redação vigente) quando o crime é praticado **com o fim de lucro**. Confirme o texto e o efeito exato na fonte oficial.
- **Art. 299 do CP** — falsidade ideológica **genérica** (tipo residual/geral). Só incide quando o fato **não** se enquadra no art. 302 (princípio da especialidade).
- **Art. 301, §1º, do CP** — certidão/atestado **falso** dado por funcionário público (contraponto: se o agente é servidor atestando *ex officio*, discuta o tipo aplicável).
- **Art. 304 do CP** — **uso** de documento falso (para o terceiro que apresenta o atestado — ver "Autoria e o terceiro que usa").
- **Art. 18, I e parágrafo único, do CP** — o art. 302 é **doloso**; não há forma culposa. Ausência de dolo = **atipicidade**.
- **Princípio da especialidade (art. 12 do CP)** — o art. 302 afasta o art. 299 quando presentes seus elementos especializantes (médico + exercício da profissão + atestado).

## O núcleo do tipo — três elementos cumulativos

Para haver crime do art. 302, a acusação precisa provar, **cumulativamente**:

1. **Sujeito ativo qualificado:** o agente é **médico** (crime próprio). Enfermeiro, dentista, terceiro que preenche formulário, "falso médico" que sequer tem registro — **não** cometem o art. 302 na condição de autor direto do caput (verifique a subsunção correta: pode ser art. 299, art. 304, exercício ilegal da medicina etc.).
2. **No exercício da profissão:** o atestado é expedido **na qualidade de médico**, dentro da atividade profissional. Documento firmado fora dessa qualidade escapa ao tipo especial.
3. **Atestado falso + dolo:** afirmação de fato **inverídico** sobre saúde/doença (existência, natureza, gravidade, período de afastamento) **que o médico sabe ser falsa**. Sem consciência e vontade de atestar o inverídico, **não há crime**.

> **Regra de ouro da defesa:** faltando **qualquer** um dos três, o fato é **atípico** pelo art. 302 — e a defesa deve dizê-lo expressamente, evitando que a acusação "salte" para o art. 299 sem base.

## Roteiro de análise e defesa (por eixo de tese)

### 1. Eixo do DOLO — erro de diagnóstico x mentira consciente (tese-mãe)

O art. 302 exige **dolo direto**: o médico **sabe** que o quadro não corresponde ao atestado e mesmo assim o firma. Portanto:

- **Erro de diagnóstico** (avaliou mal o paciente, mas de boa-fé) → **atipicidade** (falta o dolo). No máximo, responsabilidade civil/ético-disciplinar (CFM), nunca penal.
- **Divergência técnica** (outro perito discorda do afastamento concedido) → **atipicidade**: divergência de opinião médica não é falsidade.
- **Imperícia/negligência** (exame superficial) → não há tipo **culposo** no art. 302; culpa é irrelevante para o crime.
- **Tese:** a denúncia que não demonstra o **elemento subjetivo** (o *saber* que o atestado era falso) é **inepta** por descrever fato atípico; requer-se **rejeição** (art. 395, III, CPP) ou **absolvição** (art. 386, III — o fato não constitui infração penal — ou VII — insuficiência de prova do dolo).

### 2. Eixo da ESPECIALIDADE — 302 x 299 (a distinção que a spec cobra)

- O **art. 299** é a falsidade ideológica **genérica**; o **art. 302** é **especial** para o **atestado do médico**. Quando o agente é médico, no exercício da profissão, e o documento é atestado, **incide o 302** (afasta o 299 por especialidade — art. 12 CP).
- **Uso defensivo da distinção:** o art. 302 costuma cominar pena **menor** que o art. 299. Se a denúncia capitulou como **art. 299** um fato que é de **atestado médico**, a defesa **requer a desclassificação para o art. 302** (mais brando) — com reflexos em pena, prescrição e eventual competência.
- **Uso defensivo inverso (atipicidade pelo 302):** se **falta** algum especializante (não é médico, não é no exercício da profissão, não é propriamente um "atestado"), o fato **não** é art. 302 — e a defesa deve **impedir** a migração automática para o art. 299 sem que a acusação prove os elementos *desse* tipo.
- **Falso material x falso ideológico:** o art. 302 é **falso ideológico especial** (o documento é autêntico na forma, mas o **conteúdo** é mentiroso). Se houve **adulteração material** de um atestado verdadeiro (rasura, montagem, atestado de outro médico alterado), o enquadramento **não** é o art. 302 — discuta art. 297/298 (falso material) ou art. 304 (uso). Classifique corretamente antes de tudo.

### 3. Eixo do ATESTADO DE COMPLACÊNCIA (o tipo prático mais comum)

"Atestado de complacência" é o dado por **favor/amizade** ao paciente (ex.: afastamento sem doença real, "abono" de falta). Aqui a defesa distingue:

- **Complacência com consciência da falsidade** → em regra **típico** (o médico sabe que não há a doença atestada e atesta assim mesmo). A defesa foca em: (a) **prova do dolo** (a acusação demonstrou que o médico *sabia* da inexistência do quadro?); (b) **materialidade** (havia mesmo sintoma/queixa que justificasse a conduta médica?); (c) **causas de exclusão** (estado de necessidade de terceiro, erro sobre elemento do tipo — art. 20 CP — se o médico foi induzido a crer em quadro simulado pelo paciente).
- **Simulação pelo paciente:** se o **paciente simulou** sintomas e enganou o médico, o médico pode ter incorrido em **erro de tipo** (art. 20 CP) — **exclui o dolo** e, com ele, o crime. Já o **paciente** que simula e usa o atestado pode responder por **uso** (art. 304) ou pelo art. 299, conforme o caso.
- **Bagatela / princípio da insignificância:** avalie, com cautela e conforme a jurisprudência atual (passar por `jurisprudencia-stj-stf`), a tese de **insignificância** em falso de fé pública — é **controvertida** e frequentemente **rejeitada** por se tratar de crime contra bem jurídico coletivo. Não a apresente como certa.

### 4. Eixo do FIM DE LUCRO (majorante — parágrafo único)

- A majorante do **parágrafo único** exige **finalidade de lucro** (o médico agiu movido por proveito econômico próprio). É **elemento subjetivo especial** — precisa ser **provado**, não presumido.
- **Tese defensiva:** afastar a majorante quando não houver prova do **especial fim de lucro** (ex.: o pagamento da consulta comum não equivale a "fim de lucro" da falsidade). Cobrança de honorário regular ≠ finalidade lucrativa da mentira. Impugnar a incidência automática do parágrafo único.
- Confirme na fonte vigente **o efeito** da majorante (aumento de pena e/ou multa cumulativa) antes de dosá-la.

### 5. Autoria e o terceiro que usa (paciente, empregado, servidor)

- **O médico** é o autor do **caput** (crime próprio). O **terceiro não-médico** que apresenta/usa o atestado falso não é autor do art. 302, mas pode responder por **uso de documento falso (art. 304)** — cujo enquadramento e pena seguem os do documento usado — ou por **art. 299** conforme sua conduta.
- **Partícipe médico x autor:** só o médico pode ser **autor** do caput; terceiros podem ser **partícipes** (art. 29 CP) se concorrem para a expedição.
- **Servidor público:** médico **servidor** que atesta *ex officio* pode atrair o **art. 301, §1º** (certidão/atestado falso de funcionário público) — verifique a capitulação correta.
- **Consunção:** se o mesmo agente **falsifica e usa**, discuta se o uso é **post factum impunível** (consunção) — o falso absorve o uso pelo próprio autor (confirmar a orientação atual via `jurisprudencia-stj-stf`).

## Teses defensivas x contra-teses (acusação)

| Tese da DEFESA | Fundamento | Contra-tese (acusação) |
|---|---|---|
| **Atipicidade por ausência de dolo** (erro de diagnóstico/divergência técnica) | Art. 302 exige dolo direto; não há forma culposa (art. 18) | Prova de que o médico *sabia* da inexistência do quadro (mensagens, ausência de exame, reiteração) |
| **Erro de tipo** — paciente simulou e enganou o médico | Art. 20 CP exclui o dolo | Alegar dolo eventual/negligência qualificada — mas culpa não tipifica o 302 |
| **Desclassificação 299 → 302** (fato é de atestado médico) | Especialidade (art. 12); pena mais branda | Sustentar que não se trata de "atestado" em sentido técnico |
| **Atipicidade pelo 302** — falta especializante (não é médico / fora do exercício) | Crime próprio; elemento normativo "no exercício da profissão" | Requalificar para 299/304 — a defesa exige prova dos elementos desse tipo |
| **Afastar a majorante do fim de lucro** | Falta prova do especial fim de lucro (parágrafo único) | Honorário/vantagem indicaria o intuito lucrativo |
| **Falso material, não ideológico** (houve adulteração) | Enquadramento correto é 297/298/304, não 302 | Manter no 302 se o vício é só de conteúdo |
| **Inépcia da denúncia** — não descreve o dolo nem individualiza a conduta | Art. 41 e 395, III, CPP | Aditar/complementar a inicial |
| **Consunção** — uso pelo próprio falsário é *post factum* impunível | Absorção do art. 304 pelo falso | Concurso material/formal, conforme o caso |

## Estrutura da peça defensiva (resposta à acusação / alegações finais / recurso)

Adapte à fase processual; a lógica de fundamentação é comum.

1. **Síntese da imputação e da tese** — em uma linha, o que se imputa e a tese-mãe (dolo ausente / desclassificação / afastamento de majorante).
2. **Dos fatos** — narrativa técnica: houve consulta? queixa? exame? O que o médico efetivamente observou? Contexto da relação médico-paciente.
3. **Do direito:**
   - **(a) Preliminares** — inépcia (art. 41/395, III, CPP) se a denúncia não descreve o **dolo** e não individualiza a conduta; nulidades próprias (cadeia de custódia da prova documental — ver `cadeia-custodia`; perícia no atestado).
   - **(b) Mérito — atipicidade por ausência de dolo** (eixo 1): erro de diagnóstico/divergência técnica não é crime; inexistência de prova do *saber*.
   - **(c) Subsidiariamente — desclassificação/qualificação correta** (eixos 2 e 4): 299→302 (mais brando); falso material→tipo próprio; afastamento da majorante do fim de lucro.
   - **(d) Erro de tipo** (art. 20) se o paciente simulou o quadro.
   - **(e) Dosimetria e prescrição** — se houver condenação, requerer pena mínima e conferir **prescrição** (pena baixa do 302 favorece a prescrição da pretensão punitiva — usar a skill `calculadora-prescricao` e `analise-prescricao-virtual-antecipada`).
4. **Do pedido** — rejeição (art. 395, CPP) / absolvição (art. 386, III ou VII, CPP) / desclassificação / afastamento da majorante / reconhecimento da prescrição.

> **Cálculo determinístico (pena e prescrição):** esta skill **descreve o método**; o cálculo é remetido às calculadoras existentes — **`calculadora-dosimetria`** (dosar a pena do art. 302, incluindo o efeito do parágrafo único) e **`calculadora-prescricao`** (verificar a extinção da punibilidade). Não faça a conta aqui; aponte o valor conferido pela calculadora e mantenha a **revisão humana**.

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos de lei** citados acima (arts. 12, 18, 20, 29, 297–304 do CP; arts. 41, 386, 395 do CPP) são **notórios** e podem ser afirmados com certeza — confira apenas a **redação e a pena vigentes**.
- **Súmulas** eventualmente úteis (ex.: sobre competência em uso de documento falso, sobre falsidade documental) — **NÃO** cite número de memória. Verifique existência, texto e vigência via `jurisprudencia-stj-stf` / `verificacao-citacoes`.
- **Qualquer HC/REsp/RE, tema repetitivo ou informativo** (p. ex. sobre insignificância em fé pública, sobre consunção falso/uso, sobre dolo no atestado de complacência) → **[NÃO VERIFICADO]** até confirmação na fonte. **Prefira ensinar a TESE e o dispositivo** a arriscar um número de acórdão.

## Erros comuns e checklist da defesa

**Checklist antes de peticionar:**

- [ ] O agente é **médico** e agiu **no exercício da profissão**? (Se não → não é art. 302; barre a migração automática para o 299.)
- [ ] A denúncia **descreve o DOLO** (o *saber* da falsidade) e **individualiza** a conduta? (Se não → inépcia, art. 41/395, III, CPP.)
- [ ] A acusação **provou** o dolo, ou há apenas **erro de diagnóstico/divergência técnica**? (Sem dolo → atipicidade.)
- [ ] Houve **simulação pelo paciente** que induziu o médico? (→ erro de tipo, art. 20 CP.)
- [ ] O fato é falso **ideológico** (302) ou **material** (297/298/304)? Classificação correta.
- [ ] Se capitulado como **299**, cabe **desclassificação para o 302** (mais brando)?
- [ ] A **majorante do fim de lucro** (parágrafo único) tem **prova** do especial fim, ou foi presumida?
- [ ] **Prescrição** conferida com base na pena do 302 (skills `calculadora-prescricao` / `analise-prescricao-virtual-antecipada`)?
- [ ] **Cadeia de custódia** da prova documental e regularidade da perícia no atestado (skill `cadeia-custodia`)?
- [ ] Todas as súmulas/precedentes passaram por `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

**Anti-padrões (evitar):**

- Tratar **erro de diagnóstico** como crime — o art. 302 não tem forma culposa; sem dolo, é atípico.
- Aceitar a capitulação no **art. 299** quando o fato é de **atestado médico** (302, mais brando) — deixar de pedir a desclassificação.
- Ignorar que o crime é **próprio de médico** e deixar de atacar a autoria quando o agente não é médico.
- Aceitar a **majorante do fim de lucro** sem prova do **especial fim** — confundir honorário regular com intuito lucrativo da falsidade.
- Confundir **falso ideológico** (302 — conteúdo mentiroso) com **falso material** (297/298 — adulteração da forma).
- Esquecer a **prescrição**: a pena do 302 é baixa e frequentemente já prescreveu — não checar é perder a tese mais forte.
- Citar **número de acórdão/súmula** de memória, sem passar pelo Citation Gate.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio metodológico à preparação da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é **sempre do advogado** (EAOAB; CED, art. 2º; Provimento OAB 205/2021). Não substitui o exame do caso concreto, dos autos e da prova pericial.
- **Polo:** esta skill é de **DEFESA** (advocacia criminal). O paciente/assistido presume-se inocente; a atuação observa a ética da advocacia. Se o pedido vier do **polo acusatório** (MP/assistente de acusação), **o roteador deve confirmar o polo** e adaptar — as teses aqui são majoritariamente defensivas.
- **Citation Gate inegociável:** nenhuma súmula, tese, tema ou acórdão citado de memória — tudo passa por `verificacao-citacoes`. Há **sanções reais** por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
