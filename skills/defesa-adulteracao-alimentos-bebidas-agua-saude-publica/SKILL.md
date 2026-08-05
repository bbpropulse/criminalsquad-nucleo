---
name: defesa-adulteracao-alimentos-bebidas-agua-saude-publica
description: >-
  Use ao defender acusado por adulteração/corrupção de alimentos e bebidas (CP, art. 272),
  envenenamento de água/substância alimentícia (art. 270) e corrupção ou poluição de água potável
  (art. 271). Recorte monográfico dos crimes de perigo comum contra a saúde pública que atingem
  água, comida e bebida — sem medicamentos (art. 273, skill própria). Eixos: materialidade e perícia
  bromatológica/toxicológica, elemento normativo… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, saude-publica, perigo-comum]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-adulteracao-alimentos-bebidas-agua-saude-publica"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-adulteracao-alimentos-bebidas-agua-saude-publica", "defesa adulteracao", "saude publica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa na adulteração de alimentos, bebidas e água (CP, arts. 270-272)

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

Esta skill orienta a **defesa** de acusado pelos crimes de **perigo comum contra a saúde pública** que recaem sobre **água, comida e bebida**: **envenenamento** de água potável ou de substância alimentícia (**art. 270**), **corrupção ou poluição** de água potável (**art. 271**) e **falsificação, corrupção, adulteração ou alteração** de substância ou produto alimentício e de bebidas (**art. 272**). São crimes cujo bem jurídico é a **incolumidade pública** — a saúde coletiva de um número indeterminado de pessoas, não a de uma vítima certa.

> **Lição central:** aqui a defesa raramente começa negando o fato — começa **classificando com precisão** e **descendo a escada**. Pergunte, nesta ordem: houve **veneno** (art. 270, pena 10-15) ou apenas **adulteração/corrupção** (art. 272, pena 4-8)? A alteração tornou o produto **efetivamente nocivo à saúde ou reduziu o valor nutritivo** (elemento normativo do tipo), ou é mera **impropriedade ao consumo** — produto vencido, deteriorado, mal conservado — que migra para o **art. 7º, IX, da Lei 8.137/90** (detenção 2-5) ou para a **infração sanitária administrativa** (atipicidade penal)? Classifique **antes**; a pena e a tese vêm depois.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 270, 271 e **272** (este com a redação da **Lei 9.677/1998**, que elevou as penas e inseriu o §1º-A) e dos arts. **258 e 285** (majoração pelo resultado). Confirme que **270-272 NÃO integram o rol de hediondos** (Lei 8.072/90, art. 1º — só o **art. 267, §1º**, epidemia com morte, e o **art. 273**, medicamentos, são hediondos no Capítulo). Toda súmula, tema, informativo, tese ou número de acórdão passa **obrigatoriamente** pelos gates `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de ir à peça. Na dúvida sobre o número, **ensine a tese e cite o dispositivo — não arrisque o acórdão**.

## Recorte desta skill (e o que fica nas vizinhas)

- **Aqui:** água, alimento e bebida (arts. 270-272) — a mecânica fina da perícia, do elemento normativo e da desclassificação.
- **`defesa-falsificacao-medicamentos-art-273`:** objeto **terapêutico/medicinal** (art. 273 e §§) — hediondo, com a tese-matriz de desproporcionalidade do preceito secundário. Se o objeto é remédio/insumo, é lá.
- **`defesa-crimes-saude-publica`:** panorama de **todo** o Capítulo (arts. 267-285: epidemia, exercício ilegal da medicina, charlatanismo etc.).
- **`defesa-crimes-consumidor` / `defesa-crimes-tributarios-ordem-economica-relacoes-consumo`:** o destino da desclassificação para **relações de consumo** (Lei 8.137/90, art. 7º).
- **`crimes-ambientais-defesa`:** poluição hídrica **ambiental** (Lei 9.605/98, art. 54) — distinta da corrupção de água **potável destinada a consumo** (art. 271).

## Base legal

- **CP, art. 270** — envenenar água potável (de uso comum ou particular) ou substância alimentícia/medicinal destinada a consumo. Pena: **reclusão 10-15 anos**. **§1º:** equipara quem entrega a consumo ou tem em depósito para distribuir a água/substância envenenada. **§2º (culposo):** detenção 6 meses-2 anos.
- **CP, art. 271** — corromper ou poluir água potável, **tornando-a imprópria para consumo ou nociva à saúde**. Pena: **reclusão 2-5 anos**. **Parágrafo único (culposo):** detenção 2 meses-1 ano.
- **CP, art. 272** — corromper, adulterar, falsificar ou alterar substância ou produto alimentício destinado a consumo, **tornando-o nocivo à saúde ou reduzindo-lhe o valor nutritivo**. Pena: **reclusão 4-8 anos, e multa**. **§1º-A:** equipara quem fabrica, vende, expõe à venda, importa, tem em depósito para vender, distribui ou entrega a consumo o produto já viciado. **§1º:** as mesmas penas às **bebidas, com ou sem teor alcoólico**. **§2º (culposo):** detenção 1-2 anos, e multa.
- **CP, art. 285 c/c art. 258** — **majoração pelo resultado**: se do crime **doloso** resulta lesão grave, pena **+1/2**; se resulta morte, pena **em dobro**; nas modalidades **culposas**, aumentos próprios (art. 258, parte final).
- **CPP, arts. 158, 158-A a 158-F e 159** — exame de corpo de delito, **cadeia de custódia** e perícia/contraprova (o coração da materialidade).
- **Lei 8.137/90, art. 7º, IX** — vender/ter em depósito/expor à venda mercadoria **em condições impróprias ao consumo** (detenção **2-5 anos, ou multa**) — o principal degrau de desclassificação do art. 272.
- **CP, arts. 19 e 20** — vedação da responsabilidade objetiva (o resultado agravador exige ao menos culpa) e erro de tipo (afasta o dolo).
- **CF, art. 5º, XXXIX (legalidade), XLVI (individualização), LIV (proporcionalidade/devido processo)** — âncoras de tipicidade e de dosimetria.

## A escada de desclassificação (organize a defesa por ela)

O ganho defensivo mora em **descer o tipo** — cada degrau reduz drasticamente a pena. Prove que o degrau superior não se configura.

```
ALIMENTO / BEBIDA:
  270 (envenenar — 10-15) → 272 (adulterar/corromper, nocivo à saúde
       ou ↓ valor nutritivo — 4-8) → art. 7º, IX, Lei 8.137/90
       (impróprio ao consumo — det. 2-5) → infração sanitária (atipicidade penal)

ÁGUA POTÁVEL:
  270 (envenenar água — 10-15) → 271 (corromper/poluir, imprópria/nociva — 2-5)
       → infração sanitária / crime ambiental (art. 54, Lei 9.605/98)
```

- **270 → 272:** "envenenar" exige introdução de **veneno** — substância que, por natureza, lesa a saúde/vida. Se a substância adicionada **não é tecnicamente veneno**, ou falta prova pericial do seu potencial tóxico/letal, **não há envenenamento**: a conduta é, no máximo, adulteração (272), com pena bem menor. (Ex.: caso de **metanol em bebida** — sustentar 272, §1º, salvo prova cabal do caráter e da idoneidade venenosa que atraia o 270.)
- **272 → art. 7º, IX, Lei 8.137/90:** o art. 272 pune a **alteração intrínseca** que torna o alimento **nocivo** ou lhe **reduz o valor nutritivo**. Produto apenas **vencido, deteriorado ou mal conservado**, exposto à venda sem adulteração dolosa do gênero, tende ao **crime contra as relações de consumo** (art. 7º, IX) — de pena muito inferior.
- **272/271 → administrativo:** irregularidade de **rotulagem, registro, higiene ou padrão de identidade e qualidade (PIQ)**, sem risco real à saúde, é **ilícito sanitário** (Lei 6.437/77) — não crime (subsidiariedade / intervenção mínima / *ultima ratio*).

## Metodologia forense (roteiro em eixos)

**Eixo 1 — Materialidade e perícia (comece por aqui).** Crime que deixa vestígio exige **exame de corpo de delito** (CPP, art. 158); a confissão não o supre. Exija o **laudo bromatológico/toxicológico/químico** que comprove o núcleo típico. Impugne: método, amostragem representativa, laboratório oficial, **direito à contraprova** (CPP, art. 159) e à **assistência técnica**. Se a amostra foi **integralmente consumida/destruída** sem contraprova → cerceamento de defesa. Confira a **cadeia de custódia** (arts. 158-A a 158-F): coleta, acondicionamento, transporte, armazenamento — a quebra fragiliza ou inutiliza a prova (ver `analise-quebra-cadeia-custodia-vestigios`, `analise-confiabilidade-prova-cientifica-dna-toxicologia`).

**Eixo 2 — Elemento normativo e perigo.** O tipo **não se satisfaz com a mera manipulação**: exige o **resultado normativo**. Ataque a falta de prova de que a substância se tornou **nociva à saúde** (271, 272), **imprópria para consumo** (271) ou teve **valor nutritivo reduzido** (272). No art. 270, exija a demonstração pericial da **idoneidade venenosa**. Explore o debate **perigo abstrato × concreto**: sem risco minimamente aferível à incolumidade pública, discuta a **atipicidade material** (princípio da ofensividade).

**Eixo 3 — Desclassificação.** Percorra a escada acima e requeira a **reclassificação** para o degrau efetivamente provado (272, art. 7º IX, ou infração administrativa), com os reflexos de pena, prescrição e benefícios.

**Eixo 4 — Dolo e culpa.** As três figuras têm **modalidade culposa** (270 §2º; 271 §único; 272 §2º), de pena muito menor. Afaste o dolo → desclassifique para culposa; afaste também a culpa (caso fortuito, contaminação sem violação de dever de cuidado) → **atipicidade**. No §1º-A do 272 (fabricar, vender, ter em depósito para vender, distribuir), o **comerciante de boa-fé** que **desconhecia** o vício não responde pela figura dolosa (erro de tipo, CP, art. 20): a batalha é **dolo eventual × culpa consciente**.

**Eixo 5 — Autoria na cadeia.** Fabricante, distribuidor e comerciante têm condutas distintas: exija a **individualização** (CP, art. 29) e a demonstração do nexo entre a conduta concreta de cada um e o vício. Denúncia que imputa em bloco a sócios/administradores **pelo mero cargo** é **inepta** (vedada a responsabilidade objetiva).

**Eixo 6 — Resultado agravador (arts. 285 + 258).** Se sobrevém lesão grave/morte de consumidor, a pena é majorada — mas o resultado é **preterdoloso**: exige, no mínimo, **culpa** (CP, art. 19). Ataque o **nexo causal** (concausa, consumo de outro produto, doença preexistente); sem nexo comprovado, cai a majorante e afasta-se eventual imputação de homicídio/lesão em concurso.

**Eixo 7 — Pena, prescrição e benefícios.** **270-272 não são hediondos** → regime, progressão e livramento comuns. Note as portas de saída pela pena mínima: **ANPP** cabível no art. 271 (mínimo 2 anos) e nas culposas, **incabível** no art. 272 caput (mínimo 4) e no 270; **suspensão condicional do processo** (Lei 9.099/95, art. 89) nas figuras de pena mínima ≤ 1 ano (culposas; 271 culposo). Delegue os números às calculadoras (adiante) e a `analise-viabilidade-suspensao-beneficios-processuais`.

## Teses e contra-teses (quadro)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|----------------|-----------|------------------------|
| Ausência de materialidade (laudo faltante/viciado; quebra da cadeia de custódia) | CPP, arts. 158 e 158-A a 158-F | Prova documental/testemunhal supre (CPP, art. 167) |
| Atipicidade: não há nocividade real nem redução do valor nutritivo | elemento normativo do tipo (271/272) | crime de perigo; basta a idoneidade da adulteração |
| Desclassificação 270 → 272 (substância não é "veneno") | "envenenar" exige veneno idôneo; falta prova toxicológica | dolo de envenenar e potencial letal demonstrados |
| Desclassificação 272 → art. 7º, IX, Lei 8.137/90 (produto vencido/impróprio) | impropriedade ≠ adulteração intrínseca nociva | subsunção direta ao 272; risco à saúde presumido |
| Mera irregularidade sanitária (rotulagem, registro, PIQ) → atipicidade penal | subsidiariedade / *ultima ratio* (Lei 6.437/77) | tipicidade formal do art. 272 |
| Erro de tipo / desclassificação para a culposa (comerciante de boa-fé) | CP, arts. 20 e 272, §2º | dolo eventual: assumiu o risco ao vender produto de origem duvidosa |
| Afastamento da majoração do resultado (285 + 258) | ausência de nexo causal; vedação à responsabilidade objetiva (art. 19) | nexo demonstrado entre o produto e a lesão/morte |
| Inépcia por não individualização da conduta na cadeia | CPP, art. 41; CP, art. 29 | responsabilidade do gestor pelo controle da produção |

## Súmulas, temas e precedentes — sob Citation Gate

> A matéria dos arts. 270-272 **não se resolve por súmula célebre**: apoia-se em **tipicidade, perícia e dosimetria**. Trate cada referência abaixo como **hipótese a confirmar** no gate `jurisprudencia-stj-stf` / `verificacao-citacoes`. **Não** invente número de HC/REsp/RE, tema ou informativo.

- **Distinção art. 272 do CP × art. 7º, IX, da Lei 8.137/90** (produto vencido/impróprio vs adulteração nociva) — há **julgados do STJ**; a orientação e o critério de subsunção **[NÃO VERIFICADO — confirmar tese e precedente atuais no gate; ensine a distinção pelo dispositivo, não pelo número]**.
- **Perigo abstrato × concreto nos crimes contra a saúde pública** — tese doutrinária e jurisprudencial sobre a exigência (ou não) de demonstração do risco concreto. **[Confirmar o estado da arte no gate antes de cravar como pacífico.]**
- **Desproporcionalidade do preceito secundário do art. 273, §1º-B** (RE 979.962/RS — Tema 1003, STF) — é do **art. 273 (medicamentos)**, não dos arts. 270-272; serve apenas de **argumento de proporcionalidade por analogia**. **[NÃO VERIFICADO — confirmar número/estado no gate; não transplantar automaticamente a solução para o 272.]**
- **Competência (Estadual × Federal)** — regra geral Justiça Estadual; desloca-se à Federal havendo **transnacionalidade** ou lesão a bem/serviço/interesse da União. **[Confirmar o critério e eventual enunciado no gate — evite cravar número de súmula de memória.]**
- **Inaplicabilidade da insignificância** ao bem jurídico coletivo (saúde pública) — tendência dominante; **[confirmar no gate; a bagatela costuma ser rejeitada, mas o baixo alcance influi na dosimetria].**

## Erros comuns / checklist da defesa

- [ ] **Objeto material** corretamente identificado — água (270-271), alimento/bebida (272)? Se **medicamento**, é o art. 273 (skill própria), não esta.
- [ ] **Classificação na escada** feita — há **veneno** (270) ou só **adulteração** (272)? Só **adulteração nociva** (272) ou **mera impropriedade** (art. 7º, IX, Lei 8.137/90)? Só **irregularidade sanitária** (atipicidade)?
- [ ] **Elemento normativo** enfrentado — o laudo comprova **nocividade à saúde / redução do valor nutritivo / impropriedade**? Sem isso, atipicidade.
- [ ] **Perícia** existente e hígida, com **cadeia de custódia** preservada e **contraprova/assistência técnica** garantidas?
- [ ] **Dolo** demonstrado, ou há **erro de tipo** / boa-fé do comerciante → desclassificação para a **culposa**?
- [ ] **Autoria individualizada** na cadeia (fabricante/distribuidor/comerciante) — nada de imputação pelo mero cargo?
- [ ] **Majoração do resultado** (285 + 258) atacada pelo **nexo causal** e pela vedação à responsabilidade objetiva (art. 19)?
- [ ] **Não hediondez** de 270-272 registrada, com reflexos em regime/progressão/livramento?
- [ ] **ANPP / suspensão condicional do processo** avaliados conforme a pena mínima do tipo remanescente (`analise-viabilidade-suspensao-beneficios-processuais`)?
- [ ] **Dosimetria e prescrição** delegadas às calculadoras — **nenhum número improvisado** na peça?
- [ ] **Toda** súmula/precedente/tema conferido em `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Aceitar a imputação do art. 270 (10-15 anos) sem exigir prova pericial de que a substância é **veneno idôneo** — quando o caso é adulteração (272).
- Tratar **produto vencido/deteriorado** como art. 272 sem testar a desclassificação para o art. 7º, IX, da Lei 8.137/90.
- Discutir só o direito e **ignorar a perícia** e a cadeia de custódia num crime que depende do exame do produto.
- Confundir a alteração **nociva/redutora do valor nutritivo** (272) com **impropriedade ao consumo** (Lei 8.137/90) ou com mera **infração sanitária**.
- Aceitar a **majoração pelo resultado** (285 + 258) sem enfrentar o nexo causal (responsabilidade objetiva é vedada — art. 19).
- Tratar 270-272 como **hediondos** (não são) ou, ao contrário, deixar de sinalizar a gravidade da pena do 270.
- Citar número de HC/REsp/RE, tema ou informativo **de memória** — inclusive transplantar a tese do art. 273 (Tema 1003) para o 272 sem verificação.

## Cálculo e dosimetria (aponta para as calculadoras)

Esta skill **não** calcula pena, prazo ou prescrição — descreve o **método** e delega às calculadoras determinísticas:

- **Dosimetria** (trifásica, art. 59 e ss.): `calculadora-dosimetria` — refazer sobre a moldura do tipo **desclassificado** quando a tese for acolhida.
- **Prescrição** (a pena concreta desloca o prazo do art. 109 do CP): `calculadora-prescricao` — inclusive em perspectiva/retroativa após a desclassificação.
- **Tempestividade** de recurso/pedido: `calculadora-tempestividade`.

> Se algum cálculo específico não estiver coberto, marque **[calculadora a implementar com testes]** e **não** improvise número na peça.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Todo produto desta skill é **hipótese técnica a confirmar** — a peça só é protocolada após revisão do(a) advogado(a) responsável (CED/EAOAB, art. 2º).
- **Citation Gate inegociável.** Dispositivos de lei podem ser citados com certeza; **qualquer** precedente específico (número de acórdão, tema de repercussão geral, informativo, súmula) passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso. Há sanções reais por jurisprudência inventada por IA — **omitir vence inventar**.
- **Polo:** esta skill é de **DEFESA**. O chefe-roteador deve **conferir o polo** da instituição no `company.md` antes de acioná-la; se o pedido for do **polo acusatório** (MP/assistente de acusação), redirecionar para as skills próprias da acusação — o material aqui é escrito da perspectiva da defesa.
- **Ética por polo:** advocacia — EAOAB/CED + Provimento 205/2021; Defensoria — LC 80/94; Ministério Público — CNMP. Conflito de interesses (art. 17, EAOAB) checado na triagem.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
