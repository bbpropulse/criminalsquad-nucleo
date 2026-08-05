---
name: nulidades-busca-pessoal-abordagem-policial
description: >-
  Use ao arguir, analisar ou impugnar NULIDADES da busca pessoal e da abordagem policial — ausência
  de fundada suspeita (art. 244 CPP) e contaminação da prova ilícita por derivação (art. 157 CPP; CF
  art. 5º, LVI). Metodologia forense de defesa para atacar a legalidade da abordagem e requerer o
  desentranhamento da prova. Gatilhos: busca pessoal, revista, abordagem policial, fundada suspeita,
  faro policial, atitude suspeita… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, prova, nulidades]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-nulidades-busca-pessoal-abordagem-policial"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["nulidades-busca-pessoal-abordagem-policial", "nulidades busca", "abordagem policial"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Nulidades da Busca Pessoal e da Abordagem Policial

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

Esta skill orienta a **análise e a arguição de nulidades da busca pessoal e da abordagem policial** — o momento em que o Estado interpela e revista alguém em via pública, veículo ou local aberto. É metodologia de **defesa**: seu objetivo é aferir se a abordagem tinha **base jurídica idônea** e, não a tendo, obter o reconhecimento da **prova ilícita** (CF, art. 5º, LVI) e o **desentranhamento** de tudo o que dela derivou (art. 157 CPP).

> **Lição central:** ataque a **origem**, não só a apreensão. A pergunta decisiva é: *existia fundada suspeita ANTES da abordagem* — apoiada em elementos concretos e objetivos —, ou a suspeita foi **fabricada depois**, pelo que se encontrou? "Nervosismo", "atitude suspeita", "local conhecido pelo tráfico" e denúncia anônima genérica **não** são fundada suspeita. Sendo ilegal a busca, a ilicitude **contamina** a droga, a arma e a confissão que dela decorreram — e o flagrante cai por inteiro.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 244 e do art. 157 do CPP** e a **eficácia** das alterações da **Lei 13.964/2019 (Pacote Anticrime)** — inclusive o art. 157, §5º, e o juiz das garantias (arts. 3º-B a 3º-F), cuja aplicação foi objeto de ADIs no STF. Toda súmula, tese ou precedente citado nesta skill passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes de ir para a peça. Precedente cuja identificação exata você não confirmou entra como **[NÃO VERIFICADO]** — prefira sempre **tese + dispositivo** a número de acórdão.

## O que está em jogo

Busca pessoal é medida **cautelar probatória** que restringe a intimidade (CF, art. 5º, X) e a liberdade de locomoção. Por isso não é discricionária: a lei condiciona-a à **fundada suspeita**. Uma abordagem sem base idônea produz **prova ilícita**, e a ilicitude se projeta sobre tudo o que dela nascer (efeito à distância / *fruits of the poisonous tree*). O papel da defesa é reconstituir a **cronologia da diligência** e demonstrar que a suspeita não preexistia — foi construída *a posteriori*.

## Base legal

- **Art. 240, §2º, CPP** — conceito: busca pessoal cabe quando houver **fundada suspeita** de que a pessoa oculta consigo arma proibida ou objetos/papéis que constituam corpo de delito.
- **Art. 244, CPP** — dispensa de mandado: só quando houver **fundada suspeita**, no caso de **prisão**, ou no **curso de busca domiciliar**. Fora dessas hipóteses, a revista é ilegal.
- **Art. 249, CPP** — busca **em mulher** por outra mulher, salvo se importar retardamento ou prejuízo da diligência.
- **CF, art. 5º, LVI** — **inadmissíveis** as provas obtidas por meios ilícitos.
- **CF, art. 5º, X e XI** — intimidade/vida privada e inviolabilidade do domicílio (relevante quando a abordagem em via pública desdobra em ingresso em residência ou em veículo-moradia).
- **Art. 157, caput e §§, CPP** — prova ilícita e **prova ilícita por derivação**; exceções da **fonte independente** (§§1º e 2º); desentranhamento e inutilização (§3º).

## O conceito de "fundada suspeita" (art. 244)

"Fundada suspeita" é **standard objetivo**: exige **elementos concretos, articuláveis e verificáveis**, anteriores à abordagem, que apontem para posse de arma proibida ou de corpo de delito. Não se satisfaz com intuição, faro policial ou juízo genérico de periculosidade. O **ônus de demonstrar a licitude** da abordagem é da **acusação** — não cabe ao réu provar a ilegalidade.

| NÃO caracteriza fundada suspeita (por si só) | PODE compor fundada suspeita (com concretude) |
|---|---|
| "Atitude suspeita" / "nervosismo" ao ver a viatura | Denúncia com **dados específicos e verificáveis** (roupa, local exato, horário) **corroborada** in loco |
| Estar em "local conhecido pela mercancia de drogas" | **Visualização direta** de arma, volume compatível ou ato de mercancia |
| Denúncia anônima **genérica** e não confirmada | Fuga associada a **outro** elemento objetivo concreto |
| Perfil físico, vestimenta, **cor da pele** (filtragem racial) | Reação a **ordem legítima** somada a indício material objetivo |
| "Faro policial" / experiência subjetiva do agente | Fato criminoso **em curso** presenciado pelo agente |

➡️ **Filtragem racial e por perfil:** abordagem escolhida por cor, aparência ou território é **discriminatória** e juridicamente **inidônea** — ofende a igualdade (CF, art. 5º, caput) além do art. 244. É tese autônoma de nulidade e deve ser suscitada expressamente.

## Metodologia forense — reconstituir a diligência (roteiro)

1. **Isole o motivo declarado da abordagem.** Extraia dos autos (BO, auto de prisão em flagrante, depoimentos dos policiais, laudo, imagens de câmera corporal/segurança) a **razão explícita** pela qual aquela pessoa foi parada. Se o motivo é padronizado/genérico ("atitude suspeita"), sinalize.
2. **Fixe a cronologia (ex ante × ex post).** O elemento concreto **precedeu** a busca ou só apareceu **depois** dela? Suspeita que só existe porque "acharam algo" é justificativa retroativa — **vício de origem**.
3. **Teste a concretude.** Os elementos são **objetivos e verificáveis**, ou adjetivos subjetivos? Confronte o depoimento com a prova material e com eventual **vídeo** (câmera corporal, viatura, comércio).
4. **Examine o consentimento, se invocado.** O ônus de provar consentimento **livre, informado e inequívoco** é do **Estado**. Consentimento presumido, obtido sob coação ambiental (cercado por policiais armados) ou não documentado é frágil — ataque.
5. **Verifique a cadeia de custódia** do objeto apreendido (arts. 158-A a 158-F CPP): quem colheu, lacrou, transportou. Ruptura reforça a impugnação.
6. **Mapeie a prova derivada.** Liste tudo que decorreu da abordagem — apreensão, confissão informal, reconhecimento, depoimentos — e trace o **nexo causal** com a busca ilegal (art. 157, §1º).
7. **Antecipe a exceção da acusação.** Verifique se há **fonte independente** ou **descoberta inevitável** real; se não houver, a contaminação persiste.

## Roteiro por cenário

- **Parada em via pública.** Núcleo do art. 244: exija a motivação concreta e anterior. Sem ela, revista e apreensão são ilícitas.
- **Busca em veículo.** Automóvel comum **não** é domicílio (CF, art. 5º, XI), mas a revista veicular também reclama **fundada suspeita** por analogia ao art. 244. Veículo usado como **moradia** (cabine de caminhão, motorhome) atrai a proteção domiciliar — exige mandado ou consentimento válido/flagrante próprio.
- **Abordagem que vira ingresso em domicílio.** Se a revista pessoal serve de pretexto para entrar na casa, incidem as exigências da **busca domiciliar** (mandado, flagrante com justa causa prévia, consentimento documentado). Trate na skill de busca/violação de domicílio e confirme os precedentes via `jurisprudencia-stj-stf`.
- **Denúncia anônima.** Isolada, **não** autoriza a busca; exige **diligências prévias de confirmação**. Aponte a ausência de corroboração.
- **Revista íntima** (visitantes de presídio, unidades prisionais). Submete-se a **dignidade** e **proporcionalidade**; revista vexatória/desnudamento sem base legal é ilícita e nula. Confirme a legislação estadual e os precedentes atuais.
- **Blitz / operação.** A abordagem coletiva não converte suspeita genérica em fundada; cada revista individual precisa de motivação própria.

## Teses e contra-teses

➡️ **Tese 1 — Ausência de fundada suspeita (art. 244):** a abordagem apoiou-se em elemento subjetivo ("atitude suspeita"/"nervosismo") ou em local, sem fato concreto anterior; logo a busca é **ilícita** (CF, art. 5º, LVI).
- **Contra-tese (acusação):** havia elementos concretos (denúncia específica corroborada, visualização direta, flagrante em curso) que legitimaram a diligência.

➡️ **Tese 2 — Justificativa retroativa:** a "suspeita" só se formou **depois** da apreensão; inverteu-se a lógica cautelar — vício insanável de origem.
- **Contra-tese:** a narrativa policial descreve elementos **prévios**, coerentes com a prova material e as imagens.

➡️ **Tese 3 — Prova ilícita por derivação (art. 157, §1º):** droga/arma, confissão informal e demais elementos derivam diretamente da busca ilegal; devem ser **desentranhados**, e o flagrante, **relaxado**.
- **Contra-tese:** incide **fonte independente/descoberta inevitável** (art. 157, §§1º e 2º) — a prova seria obtida por via autônoma.

➡️ **Tese 4 — Filtragem racial/por perfil:** o critério de seleção foi discriminatório, o que torna a abordagem inidônea já na origem (CF, art. 5º, caput e LVI).
- **Contra-tese:** o critério foi comportamental/situacional, não pessoal.

➡️ **Tese 5 — Consentimento inválido:** o Estado não comprovou consentimento livre e informado para a busca/ingresso; presunção não basta.
- **Contra-tese:** o consentimento consta do auto/está documentado.

## A exceção da fonte independente — e como neutralizá-la

O art. 157, §1º, admite a prova derivada quando **não evidenciado o nexo causal** com a ilícita **ou** quando obtível por **fonte independente** (§2º: via que, por si só, seguindo os trâmites de praxe, conduziria ao fato). A **descoberta inevitável** é construção correlata, aplicada com cautela. **O ônus de demonstrar a exceção é da acusação.** A defesa deve exigir a **prova concreta** dessa via autônoma — hipótese abstrata ("de todo modo se chegaria à droga") **não** rompe a contaminação.

## Momento e via processual (defesa)

- **Resposta à acusação (art. 396-A, CPP):** suscitar a ilicitude como **preliminar** e requerer o desentranhamento (art. 157).
- **Audiência de custódia / pedido de relaxamento:** flagrante originado de busca ilegal é **prisão ilegal** — cabe **relaxamento** (CF, art. 5º, LXV).
- **Habeas corpus:** quando a ilicitude é aferível de plano (prova pré-constituída).
- **Alegações finais / memoriais e apelação (art. 593, CPP):** reiterar para evitar preclusão e sustentar a absolvição por insuficiência probatória após o expurgo.
- **Incidente de desentranhamento (art. 157, §3º):** requerer a inutilização da prova declarada inadmissível.

Registre a impugnação **por escrito e desde cedo**; renove-a em cada fase para preservar a matéria (evita alegação de preclusão em nulidade relativa).

## Súmulas e precedentes (sob Citation Gate)

Esta matéria é regida sobretudo por **precedentes**, não por súmulas específicas sobre "fundada suspeita" — **não invente enunciado**. Diretrizes de tese, a **confirmar** antes de citar:

- **STJ — busca pessoal exige fundada suspeita com base em elementos concretos e objetivos; nervosismo/atitude suspeita e "local de tráfico" não bastam.** Leading case atribuído à 6ª Turma, Rel. Min. Rogerio Schietti (por ex., **HC 625.816/SP [NÃO VERIFICADO]**). **Cite a tese, confira o número/turma/data via `jurisprudencia-stj-stf`.**
- **STJ — ingresso domiciliar por consentimento deve ser documentado, com ônus do Estado** (analogia útil quando a abordagem vira busca em casa; por ex., **HC 598.051/SP [NÃO VERIFICADO]**). Confirmar antes de usar.
- **STF/STJ — denúncia anônima isolada não autoriza medida invasiva sem diligências prévias de confirmação.** Sustente a **tese**; confira precedente atual.
- **STF — CF, art. 5º, LVI e teoria dos frutos da árvore envenenada** (prova derivada). Base **constitucional/legal** (art. 157 CPP) — segura; o alcance concreto, conferir.

Regra de ouro do gate: **na dúvida, omitir vence inventar.** Prefira "o STJ firmou que fundada suspeita exige elementos concretos (art. 244 CPP)" a arriscar número de acórdão não verificado.

## Erros comuns / checklist

- [ ] Você identificou o **motivo declarado** da abordagem nos autos (BO, APF, depoimentos, vídeo)?
- [ ] A **fundada suspeita** era **anterior** à busca (ex ante) e apoiada em **elementos concretos** — não em nervosismo/local/perfil?
- [ ] Confrontou o depoimento policial com a **prova material** e eventuais **imagens** (câmera corporal/segurança)?
- [ ] Atribuiu à **acusação** o ônus de provar a licitude da abordagem (e não ao réu o de provar a ilicitude)?
- [ ] Se houve "consentimento", exigiu prova de que foi **livre, informado e documentado**?
- [ ] Mapeou toda a **prova derivada** e o **nexo causal** com a busca (art. 157, §1º)?
- [ ] Testou e **neutralizou** a exceção de **fonte independente/descoberta inevitável**?
- [ ] Verificou a **cadeia de custódia** (arts. 158-A e ss. CPP) do objeto apreendido?
- [ ] Pediu o **desentranhamento** (art. 157) **e** o **relaxamento** do flagrante ilegal?
- [ ] Suscitou a nulidade **na primeira oportunidade** e a **renovou** nas fases seguintes?
- [ ] Todas as súmulas/precedentes passaram pela skill `jurisprudencia-stj-stf`, com os incertos marcados **[NÃO VERIFICADO]**?

**Anti-padrões (evitar):**
- Aceitar a narrativa de "atitude suspeita" como se fosse fundada suspeita.
- Atacar só a apreensão e esquecer de pedir o expurgo da **prova derivada**.
- Deixar a acusação transferir para o réu o ônus de provar a ilegalidade.
- Tratar automóvel como domicílio (ou ignorar a proteção quando é veículo-moradia).
- Conceder que a "descoberta inevitável" rompe a contaminação sem prova concreta da via autônoma.
- Citar número de acórdão de memória — o gate de citações é inegociável.

## Nota de conformidade

- **Revisão humana obrigatória.** Este material é **rascunho técnico** de apoio à tese; a decisão sobre arguir, o momento e a redação são do **advogado responsável** (CED/EAOAB), à luz dos autos concretos.
- **Ética por polo.** Esta skill é redigida para o **polo de defesa** (impugnar a legalidade da abordagem e excluir a prova). Atuando pela **acusação/controle de legalidade** (MP/assistente), o mesmo roteiro serve para **aferir e sanar** a idoneidade da diligência antes de sustentar a prova — sob os deveres do art. 129 CF e da promoção da legalidade, jamais para validar prova ilícita.
- **Citation Gate.** Nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf`; o incerto entra como **[NÃO VERIFICADO]** ou é omitido.

**Padrão de redação:** ao converter estas teses em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita ao art. 244 e ao art. 157, coesão e persuasão (a régua de obra-prima que a revisão cobra).
