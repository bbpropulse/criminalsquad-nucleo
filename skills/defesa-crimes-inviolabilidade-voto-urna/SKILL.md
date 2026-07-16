---
name: defesa-crimes-inviolabilidade-voto-urna
description: >-
  Use ao defender acusado de crimes contra a inviolabilidade e o sigilo do voto e contra a urna
  (arts. 309 a 317 do Código Eleitoral) — votar/tentar votar por outrem ou com identidade falsa
  (art. 309), voto múltiplo, violação/inutilização de urna, fraude na votação e na apuração,
  atentado ao sigilo do voto: teses de atipicidade, ausência de dolo, erro de tipo/proibição,
  inexistência de dano ao resultado e fragilidade… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-inviolabilidade-voto-urna"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-inviolabilidade-voto-urna", "defesa crimes", "voto urna"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes contra a Inviolabilidade do Voto e a Urna (arts. 309-317 do Código Eleitoral)

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

Esta skill orienta a **defesa técnica** do acusado de crimes eleitorais que atingem o **núcleo do sistema democrático**: o voto (sua liberdade, seu sigilo, sua unicidade) e a urna (sua integridade). São tipos dos **arts. 309 a 317 da Lei 4.737/65 (Código Eleitoral)** — votação por outrem ou com identidade falsa, voto múltiplo, violação de urna, fraudes na votação e na apuração e atentado ao sigilo do voto. O foco é **defesa por tipo penal**: identificar o tipo correto, atacar a tipicidade e o dolo, e explorar a prova.

> **Lição central:** antes de discutir o mérito, **enquadre com precisão o tipo do art. 309-317**. Cada artigo protege um bem jurídico distinto (liberdade do voto ≠ sigilo do voto ≠ integridade da urna ≠ higidez da apuração) e exige **dolo específico** de fraudar o processo eleitoral. Muita imputação confunde mero **erro/irregularidade administrativa** (que gera nulidade da votação, matéria cível-eleitoral) com **crime** (que exige tipicidade estrita e dolo). Separar o ilícito eleitoral do ilícito penal é a primeira tese defensiva.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 309 a 317 do Código Eleitoral (Lei 4.737/65) e as alterações posteriores (Leis 9.504/97, 13.165/15, resoluções do TSE sobre urna eletrônica e apuração). O CE de 1965 foi redigido para **urna de papel/cédula**; a **urna eletrônica** deslocou parte da fática dos tipos de "violação de urna" e "fraude na apuração" — parte das condutas históricas hoje é fisicamente impossível ou migra para tipos de fraude em sistema informatizado. **Confira também súmulas, teses e o estado atual da jurisprudência do TSE/STF via a skill `jurisprudencia-stj-stf`** antes de fundamentar qualquer peça. Na dúvida sobre um número de acórdão, **omitir vence inventar**.

## Base legal

- **Arts. 309 a 317 do Código Eleitoral (Lei 4.737/65)** — o bloco dos crimes contra a inviolabilidade do voto e a urna (verificar redação e numeração vigentes):
  - **Art. 309** — votar ou tentar votar **mais de uma vez** (voto múltiplo), ou **em lugar de outrem** (personificação eleitoral).
  - **Art. 310** — praticar, ao votar, **fraude** (ex.: substituir a cédula/burlar o procedimento) — tipo residual de fraude na votação.
  - **Art. 311** — **votar em seção eleitoral em que não é inscrito**, sem autorização legal, ou fora do local designado.
  - **Art. 312** — **violar ou tentar violar o sigilo do voto**.
  - **Art. 313** — **deixar o juiz/mesário** de expedir talão/comprovante, quando obrigatório (omissão funcional).
  - **Art. 314** — **inutilizar, alterar ou perturbar** a **regularidade de ato eleitoral** ou impedir/embaraçar o seu exercício.
  - **Art. 315** — **impedir ou fraudar** a livre entrega/uso da cédula e a garantia do sigilo (obstrução da cabine/procedimento).
  - **Art. 316** — **não observar o mesário** a ordem/procedimento na recepção dos votos (dever funcional da mesa).
  - **Art. 317** — **violar ou tentar violar o sigilo da urna ou dos invólucros** (integridade da urna e do material lacrado).
  > Esta descrição é **mnemônica** — a subsunção exige leitura do **texto legal vigente** de cada artigo, artigo por artigo, no caso concreto. Confirme numeração e verbos nucleares antes de subsumir.
- **Parte Geral do CP (aplicação subsidiária — art. 287 do CE / art. 12 CP)** — dolo (art. 18, I), erro de tipo (art. 20), erro de proibição (art. 21), tentativa (art. 14, II), concurso de crimes.
- **Competência da Justiça Eleitoral** para processar e julgar os crimes eleitorais (CF, art. 121; CE, arts. 35 e ss.) — **checar competência é tese preliminar** (ver adiante).
- **Ação penal pública incondicionada**, promovida pelo **Ministério Público Eleitoral** (CE, arts. 355 e ss.; rito dos arts. 355-364 do CE).

## Bem jurídico e classificação do tipo (mapa para a defesa)

| Bloco | Artigos (verificar) | Bem jurídico protegido | Conduta nuclear |
|-------|---------------------|------------------------|-----------------|
| Liberdade / unicidade do voto | 309, 311 | Um eleitor, um voto; voto pessoal | Votar por outrem, votar 2x, votar onde não inscrito |
| Fraude na votação | 310, 314, 315 | Higidez do ato de votar | Fraudar cédula, perturbar/embaraçar o ato, obstruir a cabine |
| Sigilo do voto | 312, 315 (parte) | Segredo do sufrágio | Devassar/quebrar o sigilo do voto |
| Integridade da urna | 317 | Inviolabilidade da urna e dos lacres | Violar/tentar violar urna ou invólucros |
| Deveres da mesa | 313, 316 | Regularidade funcional da votação | Omissão/desvio do mesário ou juiz |

➡️ **Uso defensivo do mapa:** confirme se a conduta imputada corresponde ao **verbo nuclear** e ao **bem jurídico** do artigo indicado na denúncia. **Imputação por artigo errado** (ex.: enquadrar mera irregularidade de mesa no art. 309) é atipicidade por falta de subsunção — pedir **rejeição da denúncia** (art. 395, III, CPP) ou **absolvição sumária** (art. 397 CPP).

## Roteiro de análise e defesa por tipo penal

### 1) Art. 309 — votar por outrem / voto múltiplo (o mais frequente)
- **Elemento subjetivo:** exige **dolo** de votar no lugar de outro ou mais de uma vez, com consciência da fraude ao processo eleitoral. **Não há forma culposa.**
- **Teses de atipicidade / defesa:**
  - **Erro de tipo (art. 20 CP):** eleitor que comparece de boa-fé a seção errada por **orientação equivocada de mesário/aplicativo**, ou homônimo confundido no caderno de votação — falta o dolo de "votar por outrem".
  - **Ausência de fraude ao sistema:** a **urna eletrônica** com **biometria** torna faticamente difícil o voto por outrem sem coação — questionar como, no caso, teria ocorrido sem burla biométrica.
  - **Tentativa impunível/atípica:** votar "por outrem" barrado pela biometria pode configurar **crime impossível (art. 17 CP)** por absoluta ineficácia do meio, se a urna jamais permitiria a duplicidade.
  - **Coação:** eleitor **coagido** a votar por terceiro pode ser **vítima** (o crime é de quem coage — ver tipos de corrupção/coação eleitoral, arts. 299 e 301 CE), não autor.

### 2) Art. 311 — votar em seção onde não é inscrito / fora do local
- **Tese central:** distinguir **irregularidade administrativa autorizada** (voto em trânsito, mesa receptora especial, transferência não processada) de **conduta dolosa** de burlar a inscrição. Sem dolo de fraudar, é **atipicidade**.
- **Erro de proibição (art. 21 CP):** eleitor que **desconhece a exigência** de votar apenas na seção de inscrição, induzido por informação oficial contraditória.

### 3) Arts. 310, 314, 315 — fraude/perturbação na votação e obstrução do sigilo
- **Materialidade concreta:** exigir a **descrição precisa** da fraude/perturbação — "embaraçar o ato" é elemento normativo que **não pode ser presumido**. Ato meramente incômodo ou irregular ≠ perturbação típica.
- **Princípio da lesividade:** conduta que **não afetou concretamente** a regularidade do ato (ex.: reclamação verbal na fila, atraso sem prejuízo) é atípica por ausência de ofensa ao bem jurídico.
- **Boca de urna / propaganda no dia:** atenção — **boca de urna** é tipo **próprio** (art. 39, §5º, da Lei 9.504/97), **não** se confunde com fraude na votação; conferir o enquadramento e afastar a subsunção equivocada.

### 4) Art. 312 — atentado ao sigilo do voto
- **Bem jurídico:** o **segredo** do sufrágio. Exige conduta dirigida a **devassar** como alguém votou (ex.: instalar dispositivo na cabine, fotografar a tela da urna com intenção de comprovar voto para terceiro).
- **Teses:** distinguir **curiosidade/registro pessoal** sem finalidade de quebra do sigilo alheio de **conduta dolosa** de devassar o voto de outrem. Selfie na cabine, isoladamente, precisa de **dolo específico** de violar o sigilo — discutir atipicidade quando ausente a finalidade típica.

### 5) Art. 317 — violação da urna e dos invólucros
- **Materialidade técnica:** urna eletrônica é **lacrada e auditada**; a acusação deve provar **rompimento de lacre / adulteração** por perícia. **Sem laudo pericial idôneo** que ateste a violação, há **fragilidade probatória** — atacar a cadeia de custódia do equipamento (ver skill `cadeia-de-custodia`).
- **Tentativa:** o tipo pune "tentar violar" — mas exige **início de execução** inequívoco; **atos preparatórios** são impuníveis.

### 6) Arts. 313 e 316 — deveres do juiz/mesário
- **Sujeito ativo próprio:** só o **agente da mesa/juiz** pratica; particular não é autor direto (pode responder por participação, se comprovado o liame subjetivo).
- **Teses:** **ausência de dolo** (erro escusável no procedimento, sobrecarga da seção), **inexigibilidade de conduta diversa**, e **atipicidade** quando a omissão não gerou prejuízo à votação.

## Teses transversais (valem para todo o bloco)

1. **Atipicidade por ausência de dolo específico** — todos os tipos são **dolosos**; nenhum admite forma culposa. Erro operacional, boa-fé e desconhecimento afastam o dolo.
2. **Erro de tipo (art. 20 CP)** e **erro de proibição (art. 21 CP)** — muito comuns em eleitor leigo diante do procedimento eleitoral.
3. **Princípio da insignificância / lesividade** — condutas que **não afetaram o resultado** nem a regularidade concreta do pleito. (Aplicação da insignificância a crime eleitoral é **controvertida** — sustentar com cautela, ancorada na **ausência de ofensa ao bem jurídico**, não apenas no valor.)
4. **Crime impossível (art. 17 CP)** — meio absolutamente ineficaz (biometria/lacre da urna eletrônica que torna a fraude inviável).
5. **Fragilidade probatória** — exigir **prova concreta** da conduta e do dolo; presunções e prova indiciária isolada não bastam para condenação (in dubio pro reo).
6. **Preliminares processuais:**
   - **Competência:** confirmar se o fato é **crime eleitoral** (Justiça Eleitoral) ou comum (falta a conexão eleitoral) — declínio pode ser tese.
   - **Inépcia da denúncia** (art. 395 CPP) por não descrever o verbo nuclear ou o dolo.
   - **Prescrição** — verificar as penas cominadas (em regra baixas) e o **método de contagem**; para o cálculo, ver a skill `calculadora-prescricao`. Crimes com pena máxima baixa prescrevem rápido — sempre checar.
   - **Rito do CE (arts. 355-364)** — nulidades por inobservância do procedimento eleitoral próprio.

## Teses e contra-teses (defesa × acusação)

| Tese defensiva | Fundamento | Contra-tese (MP Eleitoral) |
|----------------|-----------|-----------------------------|
| Atipicidade — mera irregularidade administrativa | Falta subsunção ao verbo nuclear; sem dolo | A conduta preencheu o tipo e visou fraudar o pleito |
| Erro de tipo — votou em seção/lugar errado de boa-fé | Art. 20 CP; orientação equivocada | Havia consciência da irregularidade (dolo) |
| Crime impossível — biometria/lacre impediam a fraude | Art. 17 CP; ineficácia absoluta do meio | O meio era idôneo; houve início de execução punível |
| Ausência de lesão ao resultado/regularidade | Lesividade; sem ofensa ao bem jurídico | Crime é de perigo/formal — dispensa dano efetivo |
| Fragilidade probatória / sem perícia da urna | In dubio pro reo; cadeia de custódia | Prova indiciária robusta e coerente |
| Prescrição | Penas baixas; marcos ultrapassados | Marcos interruptivos preservam a pretensão |

> **Observação sobre "crime formal/de perigo":** vários tipos do bloco são **formais** (consumam-se com a conduta, independente de dano ao resultado do pleito). Por isso a tese de "não alterou o resultado" **nem sempre gera atipicidade** — direcione-a à **dosimetria** (menor reprovabilidade, art. 59 CP) e à **insignificância/lesividade** quando a conduta for de mínima ofensividade. **Confirme a natureza (formal × material) de cada tipo no caso concreto.**

## Súmulas e precedentes (sob o Citation Gate)

- **Aplicação subsidiária do CP e do CPP** aos crimes eleitorais — decorre do **art. 287 do CE** e do **art. 364 do CE** (rito), princípios notórios; ainda assim, **confirmar a redação vigente**.
- **Insignificância em crime eleitoral, competência da Justiça Eleitoral por conexão, alcance da tentativa nos tipos de urna eletrônica** — são temas **controvertidos e casuísticos**. Qualquer **número de HC/REsp/RE/AgR, informativo, tema ou resolução do TSE** citado deve ser **[NÃO VERIFICADO]** até conferência na fonte oficial.
- ➡️ **Regra do gate:** **não invente jurisprudência.** Ensine a **tese** e cite o **dispositivo de lei** com segurança; para **qualquer precedente específico**, marque **[NÃO VERIFICADO]** e confira via a skill `jurisprudencia-stj-stf` (TSE/STF/STJ) antes de peticionar. Prefira a tese ao número de acórdão.

## Estrutura da peça (resposta à acusação / alegações finais / HC)

1. **Preliminares** — competência; inépcia da denúncia (art. 395 CPP); prescrição (ver `calculadora-prescricao`); nulidades do rito eleitoral (arts. 355-364 CE).
2. **Mérito — tipicidade:** demonstrar que a conduta **não preenche o verbo nuclear** do artigo imputado (mapa do bem jurídico acima).
3. **Mérito — elemento subjetivo:** ausência de **dolo específico**; erro de tipo (art. 20) / de proibição (art. 21).
4. **Mérito — lesividade / crime impossível:** ausência de ofensa concreta; ineficácia absoluta do meio (art. 17 CP).
5. **Prova:** fragilidade, ausência de perícia (urna), cadeia de custódia (skill `cadeia-de-custodia`), in dubio pro reo.
6. **Subsidiariamente — dosimetria:** menor reprovabilidade (art. 59 CP), primariedade, atenuantes; **substituição/suspensão** e cabimento de **ANPP** (art. 28-A CPP) diante das penas em regra baixas (ver skill de ANPP, se disponível).
7. **Pedido:** rejeição da denúncia / absolvição sumária / absolvição (art. 386 CPP) / declínio de competência / reconhecimento da prescrição, conforme a fase.

> Para a **redação persuasiva** (teoria do caso, narrativa, subsunção explícita), aplique também a skill `redacao-persuasiva-criminal`. Para o **cálculo de prescrição/tempestividade**, use `calculadora-prescricao` e `calculadora-tempestividade` — não calcule prazos "de cabeça".

## Erros comuns / checklist

- [ ] **Tipo correto identificado?** Confirmado o **verbo nuclear** e o **bem jurídico** do artigo exato (309-317), na **redação vigente**?
- [ ] Distinguiu **irregularidade administrativa/nulidade eleitoral** (matéria cível-eleitoral) de **crime** (tipicidade + dolo)?
- [ ] Afastou tipo **conexo mas diverso** (ex.: boca de urna — art. 39, §5º, Lei 9.504/97; corrupção eleitoral — art. 299 CE; coação — art. 301 CE)?
- [ ] Verificou **ausência de dolo específico** (nenhum tipo é culposo) — erro de tipo/proibição?
- [ ] Avaliou **crime impossível** (biometria/lacre da urna eletrônica) e **atos preparatórios impuníveis**?
- [ ] Exigiu **perícia/laudo** para violação de urna (art. 317) e checou a **cadeia de custódia**?
- [ ] Testou **competência** (Justiça Eleitoral × comum) e **inépcia da denúncia**?
- [ ] Calculou **prescrição** (penas baixas prescrevem rápido) via `calculadora-prescricao`?
- [ ] Considerou **ANPP** e benefícios (penas em regra baixas)?
- [ ] **Nenhuma** súmula/precedente/tese citado de memória — tudo sob o Citation Gate (`jurisprudencia-stj-stf`) e marcado **[NÃO VERIFICADO]** quando incerto?

**Anti-padrões (evitar):**
- Tratar toda irregularidade da votação como crime (confundir nulidade eleitoral com tipicidade penal).
- Aceitar imputação genérica sem exigir a descrição do **verbo nuclear** e do **dolo**.
- Sustentar "não alterou o resultado" como atipicidade em **crime formal** — redirecionar para lesividade/dosimetria.
- Ignorar a **prescrição** em tipos de pena baixa.
- Citar acórdão/tema/informativo do TSE/STF **sem verificação** — risco de sanção por jurisprudência inventada.
- Confundir **boca de urna** e **corrupção eleitoral** com os crimes dos arts. 309-317.

## Lembretes finais

- **Enquadre o tipo primeiro** — bem jurídico e verbo nuclear definem toda a defesa (mapa dos arts. 309-317).
- **Dolo específico é o calcanhar da acusação** — nenhum tipo admite culpa; erro e boa-fé absolvem.
- **Urna eletrônica muda a fática** — biometria e lacre abrem crime impossível e exigem perícia.
- **Prescrição sempre** — penas baixas caducam rápido; calcule via `calculadora-prescricao`.
- **Citation Gate inegociável** — TSE/STF/STJ conferidos via `jurisprudencia-stj-stf`; na dúvida, omitir vence inventar.

## Nota de conformidade

Este material é **rascunho técnico para revisão humana obrigatória** — hipótese de defesa a confirmar, jamais peça final. Skill do **polo de defesa** (advocacia criminal): a atuação e as teses são de responsabilidade do **advogado** subscritor (EAOAB e **Provimento 205/2021 da OAB**); se a instituição usuária for **Ministério Público Eleitoral** (CNMP) ou **Defensoria** (LC 80/94), o **chefe-roteador deve conferir o polo** antes de aplicar — esta skill foca a **defesa** do acusado. Toda citação normativa e jurisprudencial passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes do uso; nenhum número de acórdão foi afirmado aqui sem a marca [NÃO VERIFICADO]. Sigilo e LGPD: dados do assistido nunca em repositório público.
