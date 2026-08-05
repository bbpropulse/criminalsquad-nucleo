---
name: defesa-crimes-dignidade-sexual-vulneravel-217a
description: >-
  Use ao defender réu acusado de crimes contra a dignidade sexual de vulnerável e correlatos —
  estupro de vulnerável (art. 217-A, CP), corrupção de menores (art. 218), satisfação de lascívia
  mediante presença de criança/adolescente (art. 218-A), favorecimento da prostituição de vulnerável
  (art. 218-B) e divulgação de cena de estupro/sexo/pornografia (art. 218-C). Gatilhos: estupro de
  vulnerável, menor de 14 anos, presunção de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-sexuais, vulneravel]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-dignidade-sexual-vulneravel-217a"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-dignidade-sexual-vulneravel-217a", "defesa crimes", "vulneravel 217a"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes contra a Dignidade Sexual — Vulnerável e Correlatos (arts. 217-A, 218, 218-A, 218-B e 218-C do CP)

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

Esta skill orienta a **estratégia de defesa** em crimes sexuais do recorte **vulnerável/menores** do Título VI, Capítulo II, do Código Penal (redação da **Lei 12.015/2009** e alterações posteriores). É recorte distinto da skill genérica `defesa-crimes-sexuais`: aqui o eixo é a **vulnerabilidade** (idade < 14, enfermidade/deficiência mental sem discernimento, ou impossibilidade de resistência), a **prova da idade**, o **regime probatório especial** (palavra da vítima; perícia) e as **teses etárias** próprias.

> **Lição central:** no estupro de vulnerável a discussão sobre **consentimento** e sobre **violência real** é, em regra, **irrelevante** — o tipo protege quem a lei presume incapaz de consentir. Por isso, a defesa raramente vence "provando que houve consentimento": ela vence atacando (a) a **prova da conjunção/ato libidinoso**, (b) a **prova da idade/vulnerabilidade**, (c) a **autoria**, (d) o **elemento subjetivo** (dolo/erro de tipo quanto à idade ou à condição de vulnerável) e (e) **nulidades** de prova (cadeia de custódia, perícia, depoimento especial). Escolha a tese pela **fragilidade concreta dos autos**, não pela narrativa do cliente.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 217-A a 218-C do CP e do rol de **hediondos** (Lei 8.072/90, art. 1º) — houve sucessivas alterações (Lei 12.015/2009 criou o 217-A; a **Lei 13.718/2018** reformou o Capítulo, criou a **ação penal pública incondicionada** para os crimes sexuais e o art. 218-C; a **Lei 13.964/2019** e leis posteriores mexeram em penas/execução). Para fato **anterior**, aplique a **lei mais benéfica** (CF, art. 5º, XL) — verifique sempre a data do fato. Toda súmula, tese ou precedente **passa obrigatoriamente** pela skill `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de ir para a peça. Na dúvida sobre número de acórdão/tema/informativo, **omita e ensine a tese** — não invente.

---

## Base legal (conferir redação vigente)

- **Art. 217-A, CP** — estupro de vulnerável: ter conjunção carnal ou praticar outro ato libidinoso com **menor de 14 anos** (*caput*) ou com quem, por **enfermidade/deficiência mental**, não tem o necessário discernimento, ou que **por qualquer outra causa não pode oferecer resistência** (§1º). Formas qualificadas pelo resultado (lesão grave / morte) nos §§ 3º e 4º.
- **Art. 218, CP** — corrupção de menores: induzir menor de 14 anos a satisfazer a lascívia de outrem.
- **Art. 218-A, CP** — satisfação de lascívia mediante presença de criança ou adolescente (praticar ou induzir menor de 14 a presenciar conjunção/ato libidinoso).
- **Art. 218-B, CP** — favorecimento da prostituição ou exploração sexual de criança, adolescente ou vulnerável (inclui o §2º, que pune **quem se aproveita** — cliente).
- **Art. 218-C, CP** (Lei 13.718/2018) — divulgação de cena de estupro, de estupro de vulnerável, de sexo, nudez ou pornografia sem consentimento ("revenge porn"), com **causa de aumento** quando praticado no contexto de violência doméstica/familiar ou para vingança/humilhação.
- **Art. 226, CP** — causas de aumento (concurso de agentes; ascendente/padrasto/madrasta/tutor/preceptor/empregador ou quem tenha autoridade sobre a vítima).
- **Art. 234-A, CP** — aumentos (ex.: gravidez; transmissão de doença).
- **Art. 225, CP** (red. Lei 13.718/2018) — **ação penal pública incondicionada** em todos os crimes do Capítulo. (Atenção à data do fato: antes da Lei 13.718/2018 havia hipóteses condicionadas.)
- **Lei 8.072/90, art. 1º** — estupro e estupro de vulnerável são **hediondos** (reflexos em regime, progressão, livramento — ver `execucao-progressao-regime` e `execucao-livramento-condicional`).
- **CPP:** art. 158 (exame de corpo de delito nos crimes que deixam vestígio) e art. 167 (prova indireta supre o exame quando desaparecem os vestígios); **arts. 158-A a 158-F** (cadeia de custódia); **Lei 13.431/2017** (depoimento especial / escuta especializada da criança e do adolescente vítima).

---

## Roteiro de defesa por tipo penal

### 1) Estupro de vulnerável (art. 217-A) — o núcleo

Estrutura de análise em cinco frentes (ataque à prova, não ao "consentimento"):

**(a) Materialidade — houve conjunção carnal ou ato libidinoso?**
- Exigir **exame de corpo de delito** (CPP, art. 158); na ausência de vestígios, avaliar se a prova indireta (art. 167) é **idônea e robusta** ou meramente conjectural. Perícia inconclusiva/ausente é ponto de dúvida.
- Definir o que é "ato libidinoso" no caso concreto: o STJ tem entendimento de que **atos libidinosos diversos da conjunção** (ex.: contatos, toques) configuram o 217-A [checar alcance atual em `jurisprudencia-stj-stf`]. A defesa discute a **prova** e a **tipicidade** do ato imputado, evitando presunções.

**(b) Prova da idade / da vulnerabilidade — pressuposto do tipo.**
- A **idade da vítima** é elementar. Exigir **prova documental** (certidão de nascimento / documento oficial) — a idade não se presume por aparência. Súmula 74/STJ [checar]: a prova da menoridade far-se-á por documento hábil.
- Vulnerabilidade do §1º (enfermidade/deficiência/impossibilidade de resistência) **deve ser demonstrada** por perícia/laudo — não se presume da mera embriaguez ou situação. Atacar laudo genérico ou ausência de perícia sobre o discernimento.

**(c) Palavra da vítima e depoimento especial — valor e limites.**
- Em crimes sexuais, a **palavra da vítima** tem valor probatório reforçado, **mas** deve ser **coerente, harmônica com o conjunto** e **não contraditória**; contradições relevantes, retratação, incompatibilidade com a perícia ou motivação espúria minam a condenação. In dubio pro reo permanece.
- Fiscalizar o rito da **Lei 13.431/2017** (depoimento especial / escuta especializada): forma de colheita, presença de profissional habilitado, ausência de contaminação/sugestionamento, revitimização. Vício no procedimento é material de nulidade.

**(d) Autoria.**
- Reconhecimento de pessoas com observância do **art. 226 do CPP** — o STJ endureceu a exigência de formalidade do reconhecimento [conferir precedentes atuais em `jurisprudencia-stj-stf`]. Reconhecimento viciado é frágil como prova única.
- Álibi, prova digital de localização, ausência de vestígio biológico compatível.

**(e) Elemento subjetivo — dolo e erro de tipo quanto à idade.**
- **Súmula 593/STJ:** o crime do art. 217-A configura-se com a conjunção/ato libidinoso com menor de 14 anos, **sendo irrelevantes** o eventual **consentimento** da vítima, sua **experiência sexual anterior** ou **relacionamento amoroso** com o agente [confirmar teor/vigência em `jurisprudencia-stj-stf`]. Ou seja: "namoro" e "consentimento" **não** são teses absolutórias.
- Espaço legítimo remanescente: **erro de tipo quanto à idade** (art. 20, CP) — o agente que **desconhecia e não tinha como saber** que a vítima era menor de 14 (ex.: vítima muito próxima do limiar, com documento/aparência/contexto que induzem a crença fundada de idade superior) pode alegar erro que exclui o dolo. É tese **excepcional, de prova difícil** e sensível — sustentar só com base fática concreta e verificável, jamais como narrativa de conveniência.

### 2) Corrupção de menores (art. 218) e satisfação de lascívia por presença (art. 218-A)
- Discutir a **prova do induzimento** (218) e da **prática/indução a presenciar** o ato (218-A). Verificar se a conduta não é, em verdade, subsumível a outro tipo (evitar dupla imputação / bis in idem).
- Elementar etária (< 14) — mesma exigência de **prova documental** da idade.

### 3) Favorecimento da prostituição/exploração sexual de vulnerável (art. 218-B)
- Distinguir **agenciamento/favorecimento** (caput) do **aproveitamento** pelo cliente (§2º). Atacar prova do **dolo específico** e da condição de vulnerável.
- Verificar concurso aparente com outros tipos e a correta capitulação.

### 4) Divulgação de cena de sexo/nudez/pornografia — art. 218-C ("revenge porn")
- Elementos: **registro** + **divulgação/publicação/venda/oferta** **sem consentimento** da vítima. Discutir: (i) **autoria da divulgação** (quem efetivamente publicou — prova digital, IP, perícia em dispositivo); (ii) **consentimento** para a divulgação (distinto do consentimento para o registro); (iii) **cadeia de custódia digital** do material (arts. 158-A a 158-F, CPP) e licitude da obtenção da prova (quebra de sigilo com ordem judicial?).
- Cautela: se a vítima for **menor de 14** ou material de pornografia infantil, atrai o **ECA (Lei 8.069/90, arts. 240/241 e seguintes)** — capitulação e regime próprios; verificar a correta tipificação.

---

## Teses de defesa mais comuns × contra-teses da acusação

| Tese defensiva | Fundamento | Contra-tese (acusação) / cautela |
|---|---|---|
| **Insuficiência de prova da materialidade** | Perícia ausente/inconclusiva; ato libidinoso não provado; in dubio pro reo | Palavra da vítima + contexto podem bastar (art. 167 CPP); exigir coerência do conjunto |
| **Falta de prova documental da idade** | Idade é elementar; Súmula 74/STJ [checar] | Certidão juntada; prova testemunhal/documental supletiva conforme o caso |
| **Vulnerabilidade do §1º não demonstrada** | Enfermidade/impossibilidade de resistência exige laudo | Prova pericial/contexto; embriaguez extrema pode configurar |
| **Autoria frágil / reconhecimento viciado** | Art. 226 CPP não observado | Prova biológica, testemunhal e digital de suporte |
| **Erro de tipo quanto à idade (art. 20 CP)** | Crença fundada e escusável de idade ≥ 14 | Súmula 593/STJ afasta consentimento; erro exige base fática robusta — não basta alegar |
| **Nulidade do depoimento especial** | Violação da Lei 13.431/2017; sugestionamento; revitimização | Vício sanável / ausência de prejuízo (art. 563 CPP) — exigir demonstração de prejuízo |
| **Ilicitude da prova digital (218-C)** | Quebra de sigilo sem ordem; cadeia de custódia rompida | Fonte independente; descoberta inevitável — combater a exceção |
| **Retratação / contradições da vítima** | Abala a palavra reforçada | Retratação em crime de ação pública incondicionada não extingue punibilidade |
| **Dosimetria excessiva** | Circunstâncias mal valoradas; bis in idem entre elementar e majorante | Gravidade concreta; ver `calculadora-dosimetria` |

> **Teses que NÃO funcionam (evitar):** "houve consentimento", "namoravam", "a vítima já tinha vida sexual" — todas **repelidas** pela Súmula 593/STJ [confirmar]. Sustentá-las como absolutórias enfraquece a defesa e irrita o juízo. O terreno útil é **prova, idade, autoria, dolo/erro e nulidade**.

---

## Causas de aumento, concurso e dosimetria (método — usar a calculadora)

- **Majorantes:** art. 226 (concurso de agentes; autoridade/ascendência sobre a vítima — comum no recorte intrafamiliar) e art. 234-A (gravidez; transmissão de doença). Fiscalizar **bis in idem** quando a circunstância já integra o tipo.
- **Continuidade delitiva x concurso** (art. 71 vs. 69): abusos reiterados contra a mesma vítima frequentemente rendem continuidade — discutir os requisitos (mesmas condições de tempo, lugar, maneira de execução).
- **Hediondez:** reflexos em regime inicial, progressão (percentuais maiores) e livramento — a defesa trabalha a **dosimetria** para reduzir a base e discute a **execução** nas skills próprias.
- **Cálculo:** não faça a conta "de cabeça". Para pena/multa, aplique o **método trifásico (art. 68, CP)** e use a **`calculadora-dosimetria`**; para prazos de prescrição, **`calculadora-prescricao`**; para tempestividade recursal, **`calculadora-tempestividade`**.

---

## Nulidades e questões processuais próprias

1. **Exame de corpo de delito** (CPP, art. 158) — sua ausência, sem justificativa idônea e sem prova indireta robusta (art. 167), é vetor de dúvida.
2. **Cadeia de custódia** (CPP, arts. 158-A a 158-F) — crucial em prova biológica e **prova digital** (218-C). Ruptura → questionar admissibilidade/valoração.
3. **Depoimento especial / escuta especializada** (Lei 13.431/2017) — rito, profissional habilitado, não sugestionamento; vício → nulidade a ser arguida no momento próprio e demonstrado o prejuízo (art. 563, CPP).
4. **Reconhecimento de pessoas** (CPP, art. 226) — formalidade exigida pela jurisprudência atual do STJ [conferir]; reconhecimento informal como prova única é frágil.
5. **Ação penal** — pública **incondicionada** (art. 225, red. Lei 13.718/2018): retratação da vítima **não** extingue a punibilidade; atenção à data do fato para regime anterior.
6. **Segredo de justiça e proteção da vítima** — respeitar; não expor dados da vítima/assistido (LGPD, sigilo — `acervo/casos/` gitignored).

---

## Súmulas e precedentes sob o Citation Gate

Cite apenas com certeza; para número/teor exato, **confirme antes** em `jurisprudencia-stj-stf` / `verificacao-citacoes`.

- **Súmula 593/STJ** — estupro de vulnerável (art. 217-A) configura-se com conjunção/ato libidinoso com menor de 14 anos, **irrelevantes consentimento, experiência sexual anterior e relacionamento amoroso**. [Confirmar teor e vigência.]
- **Súmula 74/STJ** — a menoridade penal (aqui, a idade da vítima) prova-se por **documento hábil**. [Confirmar aplicabilidade ao contexto etário da vítima.]
- **Súmula 608/STF** — (estupro e ação penal — contexto histórico anterior à Lei 13.718/2018). **[NÃO VERIFICADO para o caso concreto]** — cuidado com vigência/aplicação após a mudança para ação incondicionada; conferir.
- **Tese sobre "ato libidinoso diverso da conjunção" e sua tipicidade no 217-A** — há orientação do STJ; **[NÃO VERIFICADO]** o número/precedente específico — conferir antes de citar.
- **Endurecimento do reconhecimento de pessoas (art. 226 CPP)** — mudança jurisprudencial recente do STJ; **[NÃO VERIFICADO]** o acórdão/tema exato — conferir em `jurisprudencia-stj-stf`.

> Regra de ouro: **prefira ensinar a TESE e citar o DISPOSITIVO de lei** (que se confirma na fonte oficial) a arriscar um número de HC/REsp/RE, informativo ou tema sem certeza absoluta. Número inventado = risco ético e processual real.

---

## Erros comuns / Checklist da defesa

- [ ] Escolheu a tese pela **fragilidade concreta dos autos** (prova, idade, autoria, dolo/erro, nulidade) — e não por "consentimento/namoro"?
- [ ] Conferiu a **redação vigente** dos arts. 217-A a 218-C e do rol de hediondos, considerando a **data do fato**?
- [ ] Verificou se há **prova documental da idade** da vítima (elementar do tipo)?
- [ ] Exigiu/analisou o **exame de corpo de delito** (art. 158) ou a idoneidade da prova indireta (art. 167)?
- [ ] Avaliou a **coerência da palavra da vítima** e o rito do **depoimento especial** (Lei 13.431/2017)?
- [ ] Checou a **cadeia de custódia** (arts. 158-A a 158-F), inclusive **digital** no 218-C?
- [ ] Analisou o **reconhecimento de autoria** à luz do art. 226 do CPP?
- [ ] Considerou **erro de tipo quanto à idade** apenas com **base fática robusta e verificável**?
- [ ] Fiscalizou **bis in idem** e a correta incidência das majorantes (arts. 226 e 234-A)?
- [ ] Calculou pena/prazos com **`calculadora-dosimetria`** / **`calculadora-prescricao`**, não "de cabeça"?
- [ ] Passou **toda** súmula/precedente/tese pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] Preservou **sigilo e dados da vítima** (segredo de justiça, LGPD)?

**Anti-padrões (evitar):**
- Insistir em "consentimento/namoro/vida sexual pregressa" como tese absolutória (Súmula 593/STJ afasta).
- Presumir a idade/vulnerabilidade sem prova documental/pericial.
- Tratar a palavra da vítima como intocável **ou**, no oposto, ignorá-la — o correto é **testar sua coerência** com o conjunto.
- Alegar erro de tipo quanto à idade sem lastro fático (narrativa de conveniência enfraquece a defesa).
- Ignorar a cadeia de custódia digital no 218-C.
- Citar súmula/acórdão de memória (ex.: Súmula 608/STF pós-2018 sem conferência).
- Fazer dosimetria/prescrição sem a calculadora.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; não substitui o exame do caso concreto, dos autos e o juízo do(a) advogado(a) responsável (CED/OAB, art. 2º).
- **Ética por polo — DEFESA.** Esta skill é do **polo defensivo** (advocacia/Defensoria). Ainda que o tema envolva vítima vulnerável, a atuação técnica da defesa é **legítima e devida** (ampla defesa, CF, art. 5º, LV), exercida com **urbanidade e respeito à vítima**, vedada a **revitimização** e o ataque gratuito à honra da vítima. Observar OAB/Provimento 205/2021; se Defensoria, LC 80/94; se, em algum fluxo, atuar assistência de acusação, **o roteador deve conferir o polo** e acionar skill acusatória própria.
- **Citation Gate inegociável:** nenhuma súmula/tese/precedente vai para a peça sem passar por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
