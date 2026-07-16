---
name: defesa-receptacao
description: >-
  Use ao defender RECEPTAÇÃO (art. 180 do CP) — impugnação do dolo (direto/eventual) do caput,
  desclassificação para a modalidade culposa (§3º) com ANPP/sursis, atipicidade por crime
  antecedente não comprovado, receptação qualificada (§1º, no exercício de atividade
  comercial/industrial), inversão indevida do ônus da prova pela mera posse e a autonomia do §4º.
  Gatilhos: receptação, art. 180, receptação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, patrimonio]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-receptacao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-receptacao", "defesa receptacao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Receptação (art. 180 do CP)

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

Esta skill orienta a **defesa técnica no crime de receptação** (art. 180 do Código Penal) — em suas modalidades **dolosa** (caput), **qualificada** (§1º), **culposa** (§3º) e nas regras de **autonomia** (§4º) e **privilégio/perdão** (§5º). É um dos crimes patrimoniais de maior frequência forense, e a batalha decisiva quase sempre é a **prova do dolo** e a **desclassificação do caput para a forma culposa**.

> **Lição central:** o coração da defesa é o **elemento subjetivo**. A acusação precisa provar que o réu **sabia** (dolo direto — "coisa que sabe ser produto de crime") ou **assumiu o risco de saber** (dolo eventual — "deve saber", na leitura dominante). A mera posse da coisa **não presume** o dolo: presumir dolo a partir da posse inverte indevidamente o ônus da prova e viola a presunção de inocência (CF, art. 5º, LVII). Classifique **antes de tudo** qual modalidade está imputada — caput (dolosa), §1º (qualificada) ou §3º (culposa) — porque isso define pena, cabimento de ANPP e a linha de defesa.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 180 do CP** e a pena de cada modalidade antes de fundamentar; e confira **súmulas, temas e eventual overruling** via a skill `jurisprudencia-stj-stf` antes de citar qualquer precedente. Este material descreve a estrutura clássica do tipo — **nenhum número de HC/REsp/RE, informativo ou tema é afirmado de memória**. Na dúvida, ensine a tese e o dispositivo; **omitir vence inventar**.

## Base legal

- **Art. 180, caput, CP** — receptação **dolosa** (adquirir, receber, transportar, conduzir ou ocultar, em proveito próprio ou alheio, coisa que **sabe** ser produto de crime; ou influir para que terceiro de boa-fé a adquira/receba/oculte). Pena de reclusão + multa.
- **Art. 180, §1º, CP** — receptação **qualificada**: adquirir/receber/etc. no **exercício de atividade comercial ou industrial**, coisa que **deve saber** ser produto de crime (pena mais grave). O §2º equipara atividade comercial à clandestina/irregular, inclusive exercida em residência.
- **Art. 180, §3º, CP** — receptação **culposa**: quando, pela **natureza** ou **desproporção** entre o valor e o preço, ou pela **condição** de quem oferece, deve-se presumir a origem criminosa (pena reduzida — detenção + multa; admite substituição/ANPP/sursis).
- **Art. 180, §4º, CP** — **autonomia**: a receptação é punível ainda que **desconhecido ou isento de pena** o autor do crime antecedente. Mas o crime antecedente **precisa ter existido** e ser **comprovado** (não basta suposição).
- **Art. 180, §5º, CP** — na **culposa**, aplica-se o **perdão judicial** (§5º, 1ª parte) se o réu é primário e as circunstâncias autorizam; na **dolosa**, se o criminoso é primário e a coisa de pequeno valor, pode incidir o **privilégio** (aplicação por analogia da regra do art. 155, §2º — furto privilegiado).
- **Art. 5º, LV e LVII, CF** — contraditório/ampla defesa e presunção de inocência (base do ataque à inversão do ônus).
- **Art. 156 do CPP** — o ônus da prova de alegação incumbe a quem a faz; a prova do **dolo** e da **origem criminosa** é da **acusação**.

## Anatomia do tipo — o que a acusação precisa provar

Para condenar por receptação **dolosa** (caput), o Ministério Público precisa demonstrar, **além de dúvida razoável**:

1. **Existência do crime antecedente** (a coisa é **produto de crime** — furto, roubo, estelionato, apropriação etc.), materialmente comprovado (§4º não dispensa a prova do antecedente, só dispensa a identificação/punição do autor).
2. **Conduta típica** — adquirir, receber, transportar, conduzir, ocultar (ou influir para terceiro de boa-fé).
3. **Dolo** — conhecimento (direto) ou, na leitura dominante, dolo eventual da origem criminosa **no momento da conduta**.
4. **Proveito próprio ou alheio** (elemento subjetivo do injusto no caput).

➡️ **Falha em qualquer elo = absolvição ou desclassificação.** A defesa mapeia qual elo é o mais frágil no caso concreto e concentra fogo nele.

## Roteiro de defesa por eixo de ataque

### 1. Atacar o dolo (o eixo central)

- **Tese-mãe:** a posse da coisa **não prova** que o réu sabia (ou devia saber) da origem criminosa. Circunstâncias de aquisição plausível, preço compatível, vendedor aparentemente idôneo, ausência de sinais de adulteração — tudo afasta o dolo.
- **Dolo direto ("sabe") x dolo eventual ("deve saber"):** o caput exige que o réu **saiba**; a jurisprudência majoritária admite dolo eventual, mas **a dúvida sobre a ciência milita a favor do réu** (in dubio pro reo). Se a prova é ambígua, não se condena pelo caput.
- **Erro de tipo (art. 20 do CP):** se o réu **desconhecia** a origem criminosa (acreditava lícita a procedência), há **erro sobre elemento do tipo** — exclui o dolo. Se o erro era **evitável**, remanesce, no máximo, a forma **culposa** (§3º), nunca a dolosa.
- **Momento do dolo:** o dolo deve existir **ao tempo da aquisição/recebimento**. Ciência **posterior** da origem ilícita não configura receptação dolosa do caput (embora possa suscitar outras figuras — analisar).

### 2. Desclassificar caput → culposa (§3º) — a virada mais valiosa

- **Por quê:** a culposa tem pena muito menor (detenção), admite **substituição por restritivas**, **sursis**, **perdão judicial (§5º)** e, quando cabível, **ANPP** (art. 28-A do CPP) — mudança radical de cenário.
- **Como:** demonstrar que o réu **não sabia**, mas **deveria presumir** a origem criminosa pela **natureza da coisa**, pela **desproporção preço/valor** ou pela **condição de quem oferecia** — os três indicadores do §3º. É negligência, não conhecimento.
- **Ponto fino:** a acusação frequentemente descreve fatos que, no máximo, caracterizam **culpa** (preço abaixo do mercado, vendedor de rua) e ainda assim pede condenação **dolosa**. A defesa sustenta a **desclassificação** como pedido subsidiário firme.

### 3. Atacar o crime antecedente (atipicidade)

- **§4º não dispensa a prova do antecedente:** a receptação pune-se mesmo que o autor do crime anterior seja **desconhecido ou isento de pena**, mas **é indispensável a prova de que a coisa é produto de crime**. Se o antecedente **não está comprovado** (não há registro de furto/roubo, laudo, boletim, vítima), falta elementar do tipo → **atipicidade**.
- **Coisa não é "produto de crime":** origem lícita, coisa achada e não devolvida (pode configurar outra figura — apropriação de coisa achada, art. 169, II, não receptação), objeto de ilícito **civil/administrativo** que não seja crime.

### 4. Receptação qualificada (§1º) — reduzir o alcance

- **Requisito do comércio/indústria:** o §1º só incide sobre quem age **no exercício de atividade comercial ou industrial** (equiparada à clandestina/irregular pelo §2º). Se o réu **não é comerciante** naquele ato, **não cabe a qualificadora** — desclassifica-se para o caput ou para a culposa.
- **"Deve saber" x "sabe":** a redação do §1º ("coisa que **deve saber** ser produto de crime") gerou intensa controvérsia sobre proporcionalidade da pena (qualificada com pena maior que o caput doloso, punindo estado anímico aparentemente menos intenso). Há discussão constitucional relevante sobre a interpretação e a pena do §1º — **sustente a tese e verifique o estado atual da jurisprudência do STF/STJ via `jurisprudencia-stj-stf`** (não afirme desfecho sem conferir).

### 5. Inversão indevida do ônus da prova

- **Tese constitucional:** condenar com base **apenas na posse** da coisa, exigindo que o réu **prove** a licitude da aquisição, **inverte o ônus** e viola a presunção de inocência (CF, art. 5º, LVII) e o art. 156 do CPP. A prova do **dolo** e da **origem criminosa** é da acusação.
- **Limite prático:** a posse **injustificada** é **indício** que pode compor o conjunto probatório, mas **não presunção absoluta** de dolo. A defesa distingue **indício** (valorável no todo) de **presunção de culpa** (inconstitucional). Reforça-se a tese quando a versão do réu sobre a aquisição é plausível e não foi refutada.

## Nulidades e questões processuais próprias

- **Cadeia de custódia da coisa apreendida (arts. 158-A a 158-F do CPP):** apreensão, laudo, vinculação do objeto ao réu. Quebra na cadeia enfraquece a materialidade — ver skill `cadeia-de-custodia`.
- **Prova da origem criminosa:** ausência de laudo, de boletim de ocorrência do crime antecedente, de identificação da vítima/coisa — impugnar a materialidade do antecedente.
- **Busca e apreensão:** se a coisa foi obtida em diligência ilegal (sem mandado/fora das hipóteses de flagrante), **ilicitude da prova** (art. 157 do CPP) contamina a materialidade.
- **Confissão qualificada / interrogatório:** distinguir "sabia" de "comprei achando lícito"; explorar a versão exculpatória.

## Teses e contra-teses (mapa rápido)

| Eixo | Tese defensiva | Contra-tese (acusação) |
|---|---|---|
| **Dolo** | Posse não presume dolo; in dubio pro reo; erro de tipo (art. 20) | Dolo eventual pela desproporção de preço/condições; posse injustificada como indício robusto |
| **Desclassificação** | Fatos revelam, no máximo, culpa (§3º) — desclassificar | Circunstâncias evidenciam ciência efetiva (caput) |
| **Antecedente** | §4º não dispensa a prova do crime anterior; sem materialidade do antecedente, atipicidade | Autonomia do §4º; prova indiciária do antecedente basta |
| **Qualificadora (§1º)** | Réu não age no exercício de comércio/indústria → afastar §1º | Atividade clandestina/irregular equiparada (§2º) |
| **Ônus** | Condenar só pela posse inverte o ônus (CF 5º, LVII; CPP 156) | Posse injustificada + silêncio compõem o standard probatório |
| **Pena (§1º)** | Desproporção do preceito secundário do §1º frente ao caput | Opção legislativa válida |

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** **não** invente número de acórdão, informativo ou tema. Cite **dispositivos de lei** com certeza; para **qualquer precedente específico** (HC, REsp, RE, súmula com número, tema de repercussão geral/recurso repetitivo), marque **[NAO VERIFICADO]** e confirme na skill `jurisprudencia-stj-stf` antes de levar à peça.

- **Autonomia do crime antecedente:** decorre expressamente do **art. 180, §4º, CP** (dispositivo — citar com segurança). A tese de que o antecedente **precisa estar provado** apesar da autonomia é pacífica na doutrina; para precedente específico, **[NAO VERIFICADO]** → conferir.
- **Proporcionalidade/interpretação do §1º ("deve saber"):** há debate constitucional relevante no STF sobre o preceito do §1º. **[NAO VERIFICADO]** — verificar o estado atual (tese firmada, modulação, overruling) via `jurisprudencia-stj-stf` antes de afirmar qualquer desfecho.
- **Posse e ônus da prova:** a vedação à presunção de dolo a partir da mera posse ancora-se na **presunção de inocência (CF, art. 5º, LVII)** e no **art. 156 do CPP** (dispositivos — citar com segurança). Para súmula/precedente específico sobre valoração da posse injustificada, **[NAO VERIFICADO]** → conferir.
- **Privilégio/pequeno valor:** analogia com o **art. 155, §2º, CP** (furto privilegiado) e o **art. 180, §5º, CP**. Para jurisprudência sobre extensão do privilégio à receptação, **[NAO VERIFICADO]** → conferir.

## Justiça negocial e dosimetria (apontadores)

- **ANPP (art. 28-A do CPP):** especialmente viável na **receptação culposa (§3º)** e mesmo na dolosa simples quando a pena mínima cominada for **inferior a 4 anos** e ausente violência/grave ameaça — verificar cabimento e requisitos (confissão formal, primariedade, etc.). Ver skill de justiça negocial/ANPP.
- **Dosimetria:** cálculo de pena e frações não são resolvidos aqui — descreva o método (trifásico) e **acione a skill `calculadora-dosimetria`** para a conta; para prazos prescricionais, `calculadora-prescricao`. Esta skill é **metodológica**, não faz cálculo determinístico.

## Erros comuns e checklist

**Checklist de defesa:**

- [ ] **Qual modalidade** foi imputada — caput (dolosa), §1º (qualificada) ou §3º (culposa)? (Define pena, ANPP e linha de defesa.)
- [ ] O **crime antecedente** está **materialmente comprovado** (não basta o §4º)?
- [ ] A acusação provou o **dolo** ao tempo da conduta, ou apenas presumiu a partir da **posse**?
- [ ] Cabe **erro de tipo** (art. 20) afastando o dolo — e, no máximo, remanescendo culpa?
- [ ] Há base para **desclassificar** caput → **culposa (§3º)** como pedido subsidiário?
- [ ] Se imputado o **§1º**, o réu **realmente age no exercício de comércio/indústria** (ou é caso de afastar a qualificadora)?
- [ ] A **cadeia de custódia** da coisa apreendida está íntegra (arts. 158-A a 158-F CPP)?
- [ ] A prova foi obtida por **busca/apreensão lícita** (art. 157 CPP)?
- [ ] Cabe **ANPP / sursis / perdão judicial (§5º) / privilégio**?
- [ ] **Todo** dispositivo citado confere na redação vigente e **todo** precedente passou por `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**

- Aceitar a **presunção de dolo pela mera posse** sem impugnar a inversão do ônus.
- Tratar o **§4º** como se dispensasse a **prova do crime antecedente** (não dispensa — só dispensa identificar/punir o autor).
- Deixar de formular a **desclassificação para culposa** como pedido subsidiário (é frequentemente a melhor saída realista).
- Aceitar a **qualificadora do §1º** sem checar se o réu efetivamente agia no exercício de atividade comercial/industrial.
- Confundir receptação com **apropriação de coisa achada** (art. 169, II) ou com **favorecimento real** (art. 349) — conferir a subsunção correta.
- Citar precedente sobre a proporcionalidade do §1º **de memória** — sempre passar por `jurisprudencia-stj-stf`.
- Esquecer de checar **ANPP / privilégio / perdão judicial** — benefícios que mudam completamente o desfecho.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória:** este material é apoio à preparação da defesa, **não substitui** o juízo do advogado responsável nem a análise do caso concreto (autos, provas, versão do assistido).
- **Citation Gate:** nenhuma súmula, tese ou acórdão é afirmado de memória; **todo** precedente específico passa pela skill `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Prefira a **tese e o dispositivo** ao número de acórdão incerto.
- **Ética (polo de defesa):** atuação regida pelo **EAOAB e pelo Código de Ética (CED)** — ampla defesa exercida nos limites da lei; na Defensoria, **LC 80/94**. A responsabilidade pela peça e pela estratégia é sempre do profissional habilitado (**revisão humana final antes de protocolar**).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
