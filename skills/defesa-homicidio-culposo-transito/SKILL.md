---
name: defesa-homicidio-culposo-transito
description: >-
  Use para defender no homicídio culposo na direção de veículo automotor (art. 302 do CTB) — o
  coração da defesa é a discussão CULPA × DOLO EVENTUAL para manter a competência no juízo singular
  e EVITAR o Tribunal do Júri, além do ataque à negligência/imprudência/imperícia, ao nexo causal
  (concausas, culpa exclusiva/concorrente da vítima) e às majorantes do §1º e à qualificadora do §3º
  (embriaguez). Gatilhos: homicídio culposo… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, ctb, transito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-homicidio-culposo-transito"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-homicidio-culposo-transito", "defesa homicidio", "culposo transito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa — Homicídio Culposo na Direção de Veículo Automotor (art. 302 do CTB)

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

Esta skill orienta a **defesa técnica** no crime de **homicídio culposo na direção de veículo automotor** (art. 302 da Lei 9.503/97 — Código de Trânsito Brasileiro). O eixo estratégico não é apenas reduzir pena: é **manter o fato na moldura culposa** (art. 302 CTB, competência do juízo singular) e **impedir a migração para o dolo eventual** (art. 121, §2º, ou caput, do CP), que levaria o réu ao **Tribunal do Júri**. Aqui, portanto, **o objetivo é EVITAR o júri**, não ir a plenário.

> **Lição central:** a batalha decisiva é a **qualificação jurídica do elemento subjetivo**. Culpa consciente (o agente prevê o resultado mas confia sinceramente que não ocorrerá) mantém o art. 302 CTB; dolo eventual (o agente prevê e **assume/consente** no risco, é indiferente ao resultado) desloca para o Júri. **Trabalhe o caso concreto** — não há dolo eventual "automático" por embriaguez ou racha: o STF/STJ exigem elementos que demonstrem a **anuência ao resultado**. Construa a tese de culpa ANTES de discutir dosimetria ou benefícios.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 302 e §§ do CTB** e das penas — a **Lei 12.971/2014**, a **Lei 13.281/2016** e sobretudo a **Lei 13.546/2017** (que criou/reformulou a qualificadora do §3º para embriaguez e capacidade psicomotora alterada) alteraram o tipo. Confira também os arts. 291, 296 e 312-A do CTB. Toda súmula, tese, tema repetitivo ou acórdão citado passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (Citation Gate) antes de ir para a peça. Na dúvida sobre um número de HC/REsp/RE ou informativo, **omita e ensine a tese** — não invente.

---

## Base legal

- **Art. 302, caput, CTB** — homicídio culposo na direção de veículo automotor: pena de detenção de **2 a 4 anos** e suspensão/proibição de obter a permissão ou habilitação.
- **Art. 302, §1º, CTB** — **causas de aumento** de 1/3 a 1/2 (majorantes): (I) sem habilitação/permissão; (II) faixa de pedestres ou calçada; (III) omissão de socorro quando possível; (IV) no exercício de profissão/atividade conduzindo transporte de passageiros.
- **Art. 302, §3º, CTB (red. Lei 13.546/2017)** — **qualificadora**: se o agente conduz sob influência de **álcool ou qualquer substância psicoativa que determine dependência** — pena de **reclusão de 5 a 8 anos** (mais gravosa e em regime distinto). Ponto sensível: distinguir do caput e do dolo eventual.
- **Art. 121, caput e §2º, CP** — homicídio doloso (simples/qualificado) — a moldura que a acusação buscará via **dolo eventual** para levar ao Júri. É o que a defesa **afasta**.
- **Art. 18, I e II, CP** — dolo (inclusive eventual) e culpa (imprudência, negligência, imperícia). O divisor de águas do caso.
- **Art. 13 CP** — nexo de causalidade; **art. 13, §1º** — concausa relativamente independente (superveniência).
- **Art. 291, §1º, CTB** — hipóteses em que se aplicam os institutos despenalizadores (transação/susp. condicional) aos crimes de trânsito de lesão culposa; e as exceções.
- **Art. 44, CP** — substituição por penas restritivas de direitos (crime culposo, sem violência dolosa).
- **Art. 89 da Lei 9.099/95** — **suspensão condicional do processo** (pena mínima ≤ 1 ano); e **ANPP** (art. 28-A do CPP) quando cabível.

---

## O eixo da defesa: culpa consciente × dolo eventual (evitar o Júri)

A acusação, sobretudo em casos de **embriaguez ao volante, "racha"/pega, alta velocidade ou fuga**, tende a **denunciar por homicídio doloso (dolo eventual)** para submeter o réu ao Júri. **Toda a arquitetura da defesa gira em torno de manter (ou restabelecer) a natureza culposa.**

**Diferença conceitual (art. 18 CP):**

| Elemento | Culpa consciente (art. 302 CTB) | Dolo eventual (art. 121 CP → Júri) |
|---|---|---|
| Previsão do resultado | Prevê a possibilidade | Prevê a possibilidade |
| Atitude anímica | **Confia sinceramente** que evitará; **não quer** e **não aceita** o resultado | **Consente / é indiferente**; "assume o risco de produzir" (aceita o resultado) |
| Fórmula de Frank | "Ainda que soubesse do resultado, não teria agido" | "Ainda que soubesse do resultado, teria agido do mesmo modo" |

**Teses defensivas para manter/reconhecer a CULPA (afastar o dolo eventual):**

1. **Ausência de anuência ao resultado.** Embriaguez, velocidade ou "racha" **não presumem, por si sós**, o consentimento com a morte. Exige-se **prova concreta** de que o agente **aceitou** o resultado (STF/STJ afastam o dolo eventual *in re ipsa*). O condutor confiava — ainda que levianamente — em sua habilidade/sorte para evitar o acidente: isso é **culpa consciente**, não dolo.
2. **Autoexposição ao risco.** O próprio agente se expôs ao perigo (frequentemente sai ferido). Quem assume o risco de matar não costuma expor a própria vida do mesmo modo — indício de que **não** havia indiferença ao resultado.
3. **Impronúncia / desclassificação na 1ª fase do Júri.** Se a denúncia foi por dolo eventual e o caso já está no rito do Júri, a defesa persegue a **desclassificação para o art. 302 CTB** (art. 419 CPP) já na **decisão de pronúncia**, retirando o feito do Conselho de Sentença. A pronúncia por dolo eventual exige **indícios suficientes de que o agente anuiu ao resultado** — não basta o risco criado.
4. **In dubio pro societate não autoriza salto qualitativo.** Mesmo no juízo de pronúncia, a dúvida entre culpa e dolo, sem substrato de anuência, **não** legitima pronunciar por dolo eventual — sob pena de submeter ao Júri um fato culposo. (Confira o estado atual da jurisprudência sobre o standard da pronúncia via `jurisprudencia-stj-stf`.)

> **Onde travar a discussão:** (a) **na denúncia/resposta à acusação** (art. 396-A CPP), pedindo o enquadramento no art. 302 CTB; (b) **na fase de pronúncia** (arts. 413/414/419 CPP), buscando **desclassificação** ou **impronúncia**; (c) em **RESE** contra a pronúncia (art. 581, IV, CPP). Se, apesar de tudo, o caso for a plenário, aciona-se então o repertório de Júri (`juri-plenario-debates`, `juri-quesitacao`) — mas o alvo **primário** desta skill é não chegar lá.

---

## Roteiro de análise da CULPA (imprudência/negligência/imperícia)

Reconhecida (ou pretendida) a moldura culposa, a defesa ataca **cada elemento do tipo culposo**. Basta derrubar um para absolver.

1. **Conduta voluntária + inobservância do dever de cuidado.** Identifique **qual** modalidade a acusação imputa:
   - **Imprudência** — ação afoita (excesso de velocidade, ultrapassagem proibida, avanço de sinal).
   - **Negligência** — omissão de cautela devida (freios/pneus sem manutenção, não reduzir sob chuva).
   - **Imperícia** — falta de aptidão técnica no exercício de arte/profissão (discussão delicada no trânsito comum, muitas vezes reconduzível a imprudência).
   - *Tese:* a denúncia deve **descrever concretamente** a conduta culposa; imputação genérica ("dirigia sem os cuidados devidos") é **inépcia** (ataca-se na resposta à acusação).

2. **Previsibilidade objetiva.** O resultado era previsível ao homem médio nas circunstâncias? **Evento imprevisível** (surgimento abrupto e inevitável do pedestre; falha mecânica oculta) **rompe a culpa**.

3. **Nexo de causalidade e concausas (art. 13 CP).**
   - **Culpa exclusiva da vítima** → **atipicidade** (rompe o nexo com a conduta do agente). Ex.: pedestre que se lança na via em local impróprio; ciclista na contramão sem sinalização.
   - **Culpa concorrente** → **não exclui** o crime, mas é fortíssimo argumento de **redução na dosimetria** (culpabilidade menor) e de **contexto** para afastar o dolo eventual.
   - **Concausa superveniente relativamente independente (art. 13, §1º)** → se a morte decorreu de causa que, por si só, produziu o resultado (ex.: erro médico grave e autônomo, infecção hospitalar independente), o agente **responde só pelos atos praticados** (eventualmente lesão, não homicídio). Exige laudo/prova robusta.
   - **Fato de terceiro** (outro veículo que deu causa efetiva).

4. **Ataque à prova técnica.** O laudo pericial (local, velocidade por vestígios, dinâmica do acidente) é o campo de batalha:
   - Impugnar **cálculo de velocidade** por frenagem/deformação sem base metodológica.
   - **Cadeia de custódia** dos vestígios e do etilômetro (ver skill `cadeia-de-custodia` se disponível).
   - Requerer **perícia complementar / assistente técnico** (arts. 159, §§, CPP).

---

## Defesa contra as MAJORANTES do §1º (art. 302, §1º, CTB)

Cada majorante é atacada isoladamente:

- **I — sem habilitação/permissão:** exige **falta efetiva** de CNH válida à época; CNH vencida/em processo administrativo nem sempre configura (discutir); **não** basta o mero porte esquecido. *Cuidado:* a ausência de habilitação **não** deve ser usada, por si só, para inferir dolo eventual.
- **II — sobre a faixa de pedestres ou calçada:** exige prova de que o atropelamento ocorreu **naquele local específico**; laudo de sítio é decisivo.
- **III — omissão de socorro possível:** **não incide** se o socorro era **impossível** (vítima com morte instantânea; risco concreto de linchamento; terceiros já socorrendo) ou se o agente **prestou** socorro. Atacar quando a fuga se deu por pânico/segurança e não por desídia; e afastar **bis in idem** com eventual imputação autônoma do art. 304 CTB.
- **IV — transporte de passageiros no exercício da atividade:** exige que o agente estivesse **efetivamente** no exercício profissional de transporte de passageiros no momento.

> **Regra de proporcionalidade:** majorantes **não** podem ser presumidas nem cumuladas sem lastro fático individualizado; a fração (1/3 a 1/2) deve ser **fundamentada** — atacar aumento no teto sem motivação concreta.

---

## Defesa contra a QUALIFICADORA do §3º — embriaguez / substância psicoativa (art. 302, §3º, CTB — Lei 13.546/2017)

A qualificadora eleva a pena para **reclusão de 5 a 8 anos**. É o ponto mais gravoso do tipo e alvo central da defesa.

**Teses:**

1. **Prova da influência do álcool/substância.** A qualificadora exige **comprovação idônea** da embriaguez/capacidade psicomotora alterada. Discutir:
   - **Etilômetro (bafômetro):** validade do aparelho, aferição pelo INMETRO, margem de erro, cadeia de custódia do resultado.
   - **Exame de sangue** (concentração): coleta, guarda e laudo.
   - **Prova indireta** (art. 306, §2º, CTB + Resolução CONTRAN): sinais notórios, vídeos, testemunhas — atacar quando **frágil ou contraditória**.
2. **Direito de não produzir prova contra si (nemo tenetur se detegere).** A **recusa** ao bafômetro/coleta **não pode ser usada** como confissão de embriaguez para fins penais; a qualificadora **não se presume** da recusa (a recusa gera consequências **administrativas**, não a prova penal automática da influência).
3. **Nexo entre a embriaguez e o resultado.** Não basta estar embriagado: discutir se a **alteração da capacidade psicomotora** teve relação com a dinâmica do acidente (embora o tipo seja de perigo abstrato quanto ao art. 306, para a **qualificadora do §3º** a defesa deve explorar a exigência de comprovação da influência).
4. **Vedação ao *bis in idem*.** A embriaguez que **qualifica** o homicídio (§3º) **não pode**, simultaneamente, agravar a pena por outra via (ex.: como circunstância judicial negativa ou fundamento do dolo eventual) — sob pena de dupla punição pelo mesmo fato.
5. **Retroatividade / irretroatividade (art. 5º, XL, CF).** Para fatos **anteriores à Lei 13.546/2017**, a qualificadora **não retroage** (lei penal gravosa é irretroativa) — enquadrar no caput da época. Conferir **data do fato** sempre.

> **Cuidado com o "salto" para o dolo:** a acusação usa a embriaguez ora para **qualificar** o art. 302 (§3º), ora para **denunciar por dolo eventual** (Júri). A defesa deve **fixar o debate no CTB** e afastar o dolo eventual (ver eixo acima) — a embriaguez, isoladamente, **não** demonstra anuência ao resultado.

---

## Teses × contra-teses (mapa rápido)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Culpa consciente, não dolo eventual | Art. 18 CP; ausência de anuência ao resultado | Risco criado extremo (racha/embriaguez) revela indiferença |
| Desclassificação para art. 302 CTB na pronúncia | Art. 419 CPP; falta de indício de anuência | *In dubio pro societate*; competência do Júri |
| Culpa exclusiva da vítima → atipicidade | Art. 13 CP (rompe o nexo) | Culpa apenas concorrente; agente também descuidou |
| Concausa superveniente (art. 13, §1º) | Erro médico/infecção autônoma | Morte é desdobramento normal da lesão |
| Recusa ao bafômetro não prova embriaguez penal | Nemo tenetur se detegere | Prova indireta (art. 306, §2º) supre |
| Qualificadora §3º irretroativa | Art. 5º, XL, CF | Fato posterior à Lei 13.546/2017 |
| Majorantes não presumidas / sem *bis in idem* | Legalidade; proporcionalidade | Circunstâncias do laudo autorizam o aumento |

---

## Dosimetria, benefícios e institutos despenalizadores (método — usar calculadoras)

Reconhecida a culpa (caput ou §1º), a pena é baixa e há espaço para benefícios. **O cálculo é determinístico** — descreva o método e **use a calculadora existente**:

- **Dosimetria (art. 68 CP):** método trifásico — aponte para a skill **`calculadora-dosimetria`**. Circunstâncias judiciais do art. 59: culpa concorrente da vítima e menor grau de reprovabilidade favorecem a base; atenuantes (confissão, art. 65 CP); majorantes do §1º na 3ª fase.
- **Prescrição:** conferir os marcos e prazos com a skill **`calculadora-prescricao`** (pena baixa do caput tende à prescrição em prazos curtos — **art. 109 CP**; atenção à prescrição em concreto/retroativa).
- **Tempestividade de recurso** (RESE/apelação): **`calculadora-tempestividade`**.
- **Substituição (art. 44 CP):** crime culposo → cabível a substituição por restritivas de direitos (independe do quantum, por ser culposo) — pleitear.
- **Suspensão condicional do processo (art. 89 da Lei 9.099/95):** cabível quando a **pena mínima ≤ 1 ano** — no **caput** do art. 302 (mínimo de 2 anos) **não cabe** diretamente; avaliar o cabimento apenas em figuras/hipóteses compatíveis. Confirmar o enquadramento concreto.
- **ANPP (art. 28-A CPP):** avaliar quando a **pena mínima < 4 anos**, sem violência **dolosa** (o homicídio culposo não é violência dolosa) e presentes os requisitos — **o §3º (mínimo de 5 anos) inviabiliza**; no **caput** (mínimo 2 anos) discutir o cabimento. Passa pelo controle do art. 28-A.
- **Regime e suspensão da CNH:** o §3º prevê **reclusão** (regime distinto do caput, que é **detenção**); a suspensão/proibição de dirigir é **efeito automático** do art. 302 — discutir proporcionalidade do prazo (art. 293 CTB).

> Se algum cálculo específico não tiver calculadora, marque **[calculadora a implementar com testes]** e não improvise número na peça.

---

## Súmulas, teses e precedentes (sob o Citation Gate)

> **Não cite de memória.** Os itens abaixo são **dispositivos de lei notórios** (uso seguro) e **temas de tese** (a confirmar). Todo **número** de HC/REsp/RE, informativo, tema repetitivo ou súmula específica deve ser conferido na skill `jurisprudencia-stj-stf` antes de entrar na peça.

**Dispositivos seguros (lei):**
- **Art. 302, caput, §1º e §3º, CTB** — o tipo e suas figuras.
- **Art. 18, I e II, CP** — dolo eventual × culpa.
- **Art. 13 e §1º, CP** — nexo e concausa.
- **Art. 306 e 291, §1º, CTB** — embriaguez ao volante e institutos despenalizadores.
- **Art. 419 e 413-414 CPP** — desclassificação/impronúncia na pronúncia.
- **Art. 5º, XL e LXIII, CF** — irretroatividade da lei gravosa e não autoincriminação.

**Teses jurisprudenciais a confirmar (ensinar a tese, verificar o número):**
- **Dolo eventual não se presume da embriaguez/velocidade** — exige-se demonstração da anuência ao resultado. [NÃO VERIFICADO — confirmar acórdãos do STF/STJ via `jurisprudencia-stj-stf`.]
- **Standard da pronúncia por dolo eventual** — necessidade de indícios de consentimento com o resultado para submeter ao Júri. [NÃO VERIFICADO — conferir.]
- **Constitucionalidade/limites da qualificadora do §3º (Lei 13.546/2017)** e sua irretroatividade. [NÃO VERIFICADO — conferir.]
- **Súmula sobre suspensão condicional do processo / competência dos crimes de trânsito.** [NÃO VERIFICADO — conferir a numeração e o alcance antes de citar; prefira o dispositivo à súmula duvidosa.]

---

## Erros comuns / checklist da defesa

- [ ] **Elemento subjetivo definido primeiro?** Culpa consciente × dolo eventual é a questão-mãe — não pular para dosimetria antes de travar a natureza culposa.
- [ ] Denúncia por **dolo eventual**? Combater desde a resposta à acusação e mirar **desclassificação/impronúncia** na pronúncia (art. 419 CPP) — objetivo: **não ir ao Júri**.
- [ ] **Modalidade de culpa** (imprudência/negligência/imperícia) descrita **concretamente** na denúncia? Se genérica, arguir **inépcia**.
- [ ] **Nexo causal** examinado — culpa exclusiva da vítima (atipicidade) ou concorrente (dosimetria)? Concausa superveniente (art. 13, §1º)?
- [ ] **Laudo pericial** impugnado (velocidade, dinâmica, sítio, cadeia de custódia)? Assistente técnico requerido?
- [ ] **Majorantes do §1º** atacadas **uma a uma** e sem presunção? Fração fundamentada?
- [ ] **Qualificadora §3º:** prova da embriaguez idônea? Recusa ao bafômetro **não** usada como confissão? Sem **bis in idem**? Irretroativa se fato anterior a 2017?
- [ ] **Data do fato** conferida para a lei aplicável (Leis 12.971/14, 13.281/16, 13.546/17)?
- [ ] **Benefícios** avaliados — substituição (art. 44 CP), ANPP (art. 28-A CPP), suspensão condicional (art. 89) conforme o enquadramento? **Prescrição** (art. 109 CP) verificada?
- [ ] **Cálculos** feitos pelas calculadoras (`calculadora-dosimetria`, `calculadora-prescricao`, `calculadora-tempestividade`) — nunca "no olho"?
- [ ] **Citações** conferidas via `jurisprudencia-stj-stf` (nada de súmula/precedente de memória)?

**Anti-padrões (evitar):**
- Aceitar passivamente a imputação de **dolo eventual** por haver embriaguez/racha, sem exigir prova da **anuência** ao resultado.
- Tratar a **recusa ao bafômetro** como prova de embriaguez para fins penais.
- Deixar a **qualificadora do §3º** retroagir a fato anterior à Lei 13.546/2017.
- Cumular **majorantes** presumidas ou usar a embriaguez duas vezes (**bis in idem**).
- Ignorar a **culpa exclusiva da vítima** (que gera **atipicidade**, não mera atenuação).
- Ir direto à dosimetria sem **fixar a natureza culposa** e sem tentar **evitar o Júri**.
- Citar HC/REsp/RE "de cabeça" — risco de sanção por jurisprudência inventada.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Todo enquadramento, tese e peça produzidos com esta skill são **hipóteses a confirmar**; a revisão final e a responsabilidade pela atuação são sempre do **advogado** (CED/EAOAB; Provimento OAB 205/2021). Esta skill é **do polo de DEFESA** — o chefe-roteador deve **confirmar o polo** da instituição em `company.md` antes de acionar (se a atuação for do polo acusatório, MP/assistente, usar as skills próprias de acusação).
- **Citation Gate inegociável:** nenhuma súmula, tese, tema ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf`. Prefira ensinar a tese e o dispositivo a arriscar um número.
- **Sigilo e LGPD:** dados do assistido e das vítimas nunca em repositório público.
- **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).
