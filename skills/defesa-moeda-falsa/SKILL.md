---
name: defesa-moeda-falsa
description: >-
  Use ao defender acusado de moeda falsa — falsificação, fabricação, alteração, importação, guarda,
  introdução em circulação (CP 289, caput e §§). Teses próprias: imitação grosseira →
  desclassificação para estelionato (Súmula 73/STJ, competência estadual); ausência de dolo de
  circular na guarda; crime impossível por meio inidôneo; boa-fé de quem recebeu e repassou (CP 289,
  §2º); atipicidade da quantidade ínfima; ataque ao… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica, competencia-federal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-moeda-falsa"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-moeda-falsa", "defesa moeda", "moeda falsa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Moeda Falsa (CP, art. 289)

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

Esta skill orienta a **estratégia e a redação da defesa** em crimes de moeda falsa (**CP, art. 289**) — desde a resposta à acusação e memoriais até teses de nulidade e recurso. Moeda falsa é **crime contra a fé pública** (Título X do CP), de **competência da Justiça Federal** (CF, art. 109, IV) quando ofende a fé pública da moeda emitida pela União — e por isso mesmo carrega teses **próprias** que decidem o caso já no enquadramento: **imitação grosseira**, **dolo de circular**, **crime impossível** e o **laudo pericial**.

> **Lição central:** a defesa em moeda falsa se ganha (ou se perde) no **enquadramento**, antes do mérito. Duas perguntas comandam tudo: (1) a falsificação é **apta a enganar o homem comum** ou é **grosseira**? e (2) quem **guardava/portava** tinha **dolo de introduzir em circulação**? Da primeira pergunta nasce a **desclassificação para estelionato** (Súmula 73/STJ) — que **desloca a competência para a Justiça Estadual**; da segunda, a **atipicidade** da mera posse sem finalidade de circular. Classifique a conduta e a aptidão da falsificação **antes** de discutir prova.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do **art. 289 do CP** e de eventuais alterações legislativas, bem como a **redação atual e o status** de toda súmula, tema repetitivo ou precedente antes de fundamentar a peça. Súmulas e teses do STJ/STF podem ter sido revistas ou superadas. **Toda** citação de súmula, informativo, tema ou acórdão passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (Citation Gate). Na dúvida, **ensinar a tese e citar o dispositivo de lei vence arriscar um número de acórdão**.

## Base legal

- **CP, art. 289, caput** — falsificar, fabricando-a ou alterando-a, moeda metálica ou papel-moeda de curso legal no país ou no estrangeiro (pena base do crime).
- **CP, art. 289, §1º** — equipara ao caput quem **importa, exporta, adquire, vende, troca, cede, empresta, guarda ou introduz em circulação** moeda falsa (as condutas de circulação/posse — onde vivem as teses de dolo).
- **CP, art. 289, §2º** — figura **privilegiada / boa-fé posterior**: quem **recebe de boa-fé** moeda falsa como verdadeira e, **depois de conhecer a falsidade**, a **restitui à circulação** — pena muito menor (detenção e multa). É a "cédula que caiu na mão do comerciante".
- **CP, art. 289, §3º e §4º** — figuras próprias do **funcionário/diretor de estabelecimento emissor** que fabrica/emite além da autorização ou desvia cunho (conferir a redação e os limites de cada parágrafo antes de usar).
- **CF, art. 109, IV** — competência da **Justiça Federal** para crimes que ofendem bens/serviços/interesse da União (a fé pública da moeda nacional).
- **CP, art. 17** — **crime impossível** por ineficácia absoluta do meio (falsificação inidônea).
- **CPP, arts. 158-159** — exame de corpo de delito e **perícia** (base para atacar/exigir o laudo).
- **Crimes correlatos para desclassificação/absorção:** **CP, art. 171** (estelionato — para onde migra a imitação grosseira); **CP, art. 290** (crimes assimilados: cédulas recolhidas, vales etc.); **CP, art. 293** (falsificação de papéis públicos — distinguir do objeto "moeda").

## Elementos do tipo — o que a acusação precisa provar

Para condenar pelo **caput** (falsificar) ou pelo **§1º** (circular/guardar), a acusação deve demonstrar, cumulativamente:

1. **Objeto material:** moeda metálica ou papel-moeda **de curso legal** (nacional ou estrangeira). Cédula **fora de circulação**, recolhida ou sem curso legal migra para outra figura (art. 290) — verificar.
2. **Materialidade da falsidade:** que a moeda é **falsa** — e, sobretudo, **apta a iludir** (aqui mora a imitação grosseira). Prova por **perícia** (laudo).
3. **Autoria** e vínculo com a conduta típica (fabricar, alterar, guardar, introduzir…).
4. **Dolo:** consciência da falsidade **e**, nas condutas do §1º (guardar, portar, adquirir), **vontade/finalidade de introduzir em circulação** como verdadeira. Falsificação sabidamente inservível ou posse sem destinação de circular quebra o dolo.

➡️ A defesa ataca **cada** elemento; basta romper um para inviabilizar a condenação pelo tipo imputado.

## Roteiro de teses da defesa

### 1. Imitação grosseira → desclassificação para estelionato (a tese-mãe)

O art. 289 tutela a **fé pública** — a confiança geral na autenticidade da moeda. Se a falsificação é **grosseira**, incapaz de enganar o **homem médio** (não engana "qualquer um"), **não há ofensa à fé pública**: o fato **não é** moeda falsa. Duas saídas:

- **Se a cédula grosseira serviu para enganar uma vítima concreta** (o falsário passou a nota "capenga" a um comerciante desatento), o fato se desloca para **estelionato (CP, art. 171)** — lesão ao patrimônio individual, não à fé pública. Consequência processual **decisiva**: a competência **deixa de ser federal e passa à Justiça Estadual** (**Súmula 73/STJ** — a falsificação grosseira capaz de configurar estelionato compete à Justiça Estadual). [confirmar redação e vigência via `jurisprudencia-stj-stf`]
- **Se a falsificação grosseira não enganou ninguém** (foi percebida de pronto), pode configurar **crime impossível** (art. 17 — meio absolutamente inidôneo) → **atipicidade**, absolvição.

**Como sustentar:** provocar/valorizar a **perícia** sobre a **qualidade** da imitação (papel, marca d'água, fio de segurança, impressão, numeração); juntar as próprias cédulas apreendidas; demonstrar que o exame do homem comum revelaria a falsidade. A **grosseria é questão pericial e de fato** — trabalhe o laudo.

### 2. Ausência de dolo de circular (guarda/porte sem finalidade)

As condutas do **§1º** (guardar, portar, adquirir) só são típicas se acompanhadas do **dolo de introduzir em circulação** a moeda **como verdadeira**. Não basta ter a cédula falsa consigo.

- **Teses:** posse de nota reconhecidamente falsa **guardada como curiosidade/lembrança/prova**; réu que ignorava a falsidade (erro de tipo — CP, art. 20); ausência de qualquer ato ou contexto de circulação. **Quantidade e circunstâncias** (uma única cédula, guardada em casa, sem tentativa de repasse) reforçam a atipicidade da finalidade.
- **Cuidado:** a jurisprudência tende a **presumir** o dolo de circular quando há **pluralidade de cédulas** e contexto de repasse — por isso a defesa deve **contextualizar** a posse e afastar a destinação circulatória.

### 3. Crime impossível — meio absolutamente inidôneo (art. 17)

Quando a falsificação é **tão** deficiente que jamais poderia enganar (impressão caseira, papel comum, tamanho/cor destoantes), o **meio é absolutamente inidôneo** para ofender a fé pública → **crime impossível (art. 17)**, atipicidade. Distingue-se da desclassificação para estelionato: aqui **nem estelionato** se configura, porque **nada** e **ninguém** foi (ou poderia ser) enganado.

### 4. Boa-fé posterior — o privilégio do §2º

Quem **recebeu de boa-fé** a moeda como verdadeira e, **só depois** de descobrir a falsidade, a **repassou**, responde pela **figura privilegiadíssima do §2º** (detenção + multa), **não** pelo caput/§1º. Típico do comerciante que recebe a nota falsa no troco e a repassa adiante.

- **Tese principal:** requalificação do caput/§1º para o **§2º** (pena drasticamente menor, viabiliza transação/suspensão e prescrição mais curta).
- **Tese subsidiária:** se **não sabia** da falsidade ao repassar, **erro de tipo** (art. 20) → **atipicidade** (não há o §2º sem o conhecimento superveniente).

### 5. Quantidade ínfima / princípio da insignificância

A **fé pública** é bem coletivo e imaterial — a jurisprudência **majoritariamente rejeita** a insignificância em moeda falsa, mesmo para uma única cédula de baixo valor, por não ser lesão de cunho patrimonial mensurável. **Não é a tese principal.** Use com cautela e **sempre** como **reforço** da tese de **imitação grosseira** ou **ausência de dolo de circular** — é nessas que o pequeno número/valor tem peso real. Verifique o estado atual do entendimento via `jurisprudencia-stj-stf` antes de sustentar. [NÃO VERIFICADO — conferir posição atual de STJ/STF]

### 6. Ataque ao laudo pericial / cadeia de custódia

A materialidade da moeda falsa depende de **perícia** (CPP, art. 158). A defesa deve:

- **Exigir o laudo** (em regra do **Banco Central** / perito oficial) e impugnar sua **ausência, insuficiência ou tardança**; sem exame idôneo da autenticidade e da **aptidão de iludir**, a materialidade é frágil.
- Verificar a **cadeia de custódia** da(s) cédula(s) (CPP, arts. 158-A a 158-F) — apreensão, lacre, identificação, trânsito até a perícia. Rompimentos geram nulidade da prova (aplicar a skill `cadeia-de-custodia` se disponível).
- **Requerer quesitos** ao perito sobre a **qualidade** da imitação (é apta a enganar o homem comum?) — é o dado técnico que sustenta a **imitação grosseira**.

### 7. Teses processuais e de aplicação da pena

- **Competência:** se a tese de **estelionato** vinga (imitação grosseira), **suscitar a incompetência da Justiça Federal** e a remessa à Estadual (Súmula 73/STJ). Fazê-lo **cedo** (preliminar da resposta à acusação).
- **Concurso/absorção:** o **uso/repasse** posterior pela mesma pessoa que **falsificou** costuma ser **absorvido** pelo art. 289 (o repasse é o exaurimento) — evitar dupla punição; e o **estelionato** praticado com a cédula grosseira **não** coexiste com o art. 289 (ou é um, ou é outro). Cuidar do **bis in idem**.
- **Dosimetria:** aplicar a skill `calculadora-dosimetria` para o cálculo (método, circunstâncias do art. 59, atenuantes, causas). Verificar **confissão** (atenuante) e, no §2º, o patamar próprio muito inferior.
- **ANPP / benefícios:** avaliar cabimento de **acordo de não persecução penal** e de **suspensão condicional do processo** — sobretudo se a requalificação para o **§2º** trouxer a pena mínima para a faixa admissível (aplicar a skill de ANPP, se houver, e a `calculadora-tempestividade`/`calculadora-prescricao` para prazos e prescrição).

## Teses e contra-teses (mapa rápido)

| Tese da defesa | Fundamento | Contra-tese usual da acusação | Como blindar |
|---|---|---|---|
| Imitação grosseira → estelionato (competência estadual) | Súmula 73/STJ; ausência de ofensa à fé pública | Falsificação "razoável", apta a iludir o homem médio | Laudo pericial sobre a qualidade; exame do homem comum; juntar as cédulas |
| Imitação grosseira → crime impossível | CP, art. 17 (meio inidôneo) | Alguém quase foi enganado / aptidão relativa | Demonstrar que a falsidade era perceptível de pronto; ninguém enganado |
| Guarda sem dolo de circular | §1º exige finalidade de circular; erro de tipo (art. 20) | Pluralidade de cédulas presume o dolo de repasse | Contextualizar a posse; poucas cédulas; sem ato de circulação |
| Boa-fé posterior (§2º) | CP, art. 289, §2º | Sabia da falsidade desde o início | Prova do recebimento de boa-fé; conhecimento só superveniente |
| Erro de tipo (não sabia da falsidade) | CP, art. 20 | Circunstâncias indicavam a falsidade | Origem lícita/verossímil da cédula; ausência de indícios ao réu |
| Nulidade do laudo / cadeia de custódia | CPP, arts. 158 e 158-A a 158-F | Laudo válido; irregularidade sem prejuízo | Apontar o vício concreto e o prejuízo; exigir perícia idônea |

## Súmulas e precedentes (sob o Citation Gate)

> **Regra dura:** cite abaixo apenas o que confirmar na fonte. **Não** reproduza número de HC/REsp/RE, informativo ou tema **sem** conferência. Tudo passa por `jurisprudencia-stj-stf`.

- **Súmula 73/STJ** — a falsificação **grosseira**, capaz de configurar **estelionato**, é da competência da **Justiça Estadual**. É a **âncora** da tese de desclassificação. [confirmar redação/vigência via `jurisprudencia-stj-stf`]
- **Súmula 546/STF** — enunciado clássico sobre moeda falsa/estelionato e competência. **Conferir teor e vigência exatos antes de citar** — não reproduzir de memória. [NÃO VERIFICADO]
- **Súmula 17/STJ** — quando o falso se **exaure** no estelionato, sem mais potencialidade lesiva, é por este **absorvido** — útil para o argumento de absorção. **Confirmar redação e adequação ao caso.** [NÃO VERIFICADO]
- Qualquer **tema repetitivo, informativo ou acórdão** sobre imitação grosseira, dolo de circular, insignificância em moeda falsa ou competência: **buscar e verificar** via `jurisprudencia-stj-stf`. **Não** invente número. Prefira ensinar a **tese** e citar o **dispositivo** (art. 289 e seus §§; art. 17; art. 20; Súmula 73/STJ).

## Erros comuns / checklist da defesa

- [ ] A **aptidão de iludir** foi periciada? (é o que separa moeda falsa de estelionato/crime impossível) — **exigir o laudo** e formular quesitos sobre a qualidade da imitação.
- [ ] Cabe **desclassificação para estelionato** (imitação grosseira que enganou vítima concreta) e, com ela, **incompetência da Justiça Federal** (Súmula 73/STJ)? Suscitar **na resposta à acusação**.
- [ ] Nas condutas do **§1º** (guardar/portar/adquirir), há prova do **dolo de introduzir em circulação**? Sem ele, **atipicidade**.
- [ ] Cabe **erro de tipo** (art. 20) — o réu **desconhecia** a falsidade?
- [ ] Cabe a **figura privilegiada do §2º** (recebeu de boa-fé e só depois repassou)? Requalificar — abre transação/suspensão e reduz prescrição.
- [ ] A **cadeia de custódia** da(s) cédula(s) está íntegra (CPP, 158-A a 158-F)? Vício → nulidade da prova.
- [ ] Evitou-se **bis in idem** (falso absorvido pelo estelionato, ou repasse absorvido pela falsificação)?
- [ ] A **dosimetria** foi conferida com `calculadora-dosimetria` e a **prescrição** com `calculadora-prescricao`?
- [ ] **Toda** súmula/tese/acórdão passou por `jurisprudencia-stj-stf`? (Prefira dispositivo de lei a número de acórdão incerto.)

**Anti-padrões (evitar):**
- Ir ao mérito sem antes disputar o **enquadramento** (grosseira? dolo de circular?) — é onde a defesa é mais forte.
- Confiar em **insignificância** como tese principal em moeda falsa (a jurisprudência majoritária rejeita) — usar só como reforço.
- Aceitar a **competência federal** sem examinar a tese de estelionato (Súmula 73/STJ) quando a falsificação for grosseira.
- Tratar **§1º** (guardar) como se dispensasse o **dolo de circular**.
- Não impugnar **laudo ausente/deficiente** — sem perícia idônea, a materialidade cai.
- Reproduzir **número de súmula/acórdão de memória** — só após `jurisprudencia-stj-stf`.

## Distinção de escopo

- **Não confundir** com `defesa-fraude-eletronica`, que trata de **crimes patrimoniais digitais**: moeda falsa é crime contra a **fé pública**, com **competência, teses e perícia próprias** (aqui a moeda física e a aptidão de iludir; lá o meio eletrônico e o patrimônio).
- Objeto **moeda** (art. 289) ≠ **papéis públicos** (art. 293) ≠ **cédulas recolhidas/vales** (art. 290) — verifique o objeto material antes de fixar o tipo.

## Nota de conformidade

- **Polo:** esta skill é de **DEFESA** (advocacia criminal). O foco é o acusado de moeda falsa. Se o roteador identificar atuação do **polo acusatório** (MP/assistente), **confirme o polo** e adote a skill correspondente — as teses aqui são majoritariamente defensivas.
- **Rascunho sob revisão humana obrigatória:** todo conteúdo é **hipótese técnica a confirmar**; a peça só é protocolada após revisão do(a) advogado(a) responsável (EAOAB; CED; Provimento OAB 205/2021). Este material é apoio à preparação, não substitui o juízo profissional.
- **Citation Gate inegociável:** nenhuma súmula, tese, informativo, tema ou acórdão é citado de memória — **tudo** passa por `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Dispositivos de lei e súmulas notórias podem ser citados com certeza; **precedentes específicos, só após verificação**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
