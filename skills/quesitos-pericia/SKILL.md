---
name: quesitos-pericia
description: >-
  Use ao formular quesitos e indicar assistente técnico na perícia penal (CPP, art. 159, §§ 3º a 7º
  — Lei 11.690/2008), requerer esclarecimentos do perito em audiência (CPP, arts. 159, §5º, I, e
  400, §2º) ou provocar complementação e novo exame de laudo omisso, obscuro ou contraditório (CPP,
  art. 181). Gatilhos: quesitos, quesitos ao perito, quesitos periciais, assistente técnico,
  indicação de assistente técnico, parecer… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-quesitos-pericia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["quesitos-pericia", "quesitos pericia"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Quesitos e Assistente Técnico na Perícia Penal

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **intervenção da parte na produção da prova pericial** (CPP, art. 159, §§ 3º a 7º, na redação da Lei 11.690/2008): a formulação de **quesitos**, a indicação e o manejo do **assistente técnico**, o pedido de **esclarecimentos do perito** em audiência e a provocação de **laudo complementar ou novo exame** (art. 181). O foco é a ótica da defesa, mas o § 3º faculta os mesmos instrumentos ao MP, ao assistente de acusação, ao ofendido e ao querelante.

> **Divisão de trabalho (não duplicar):** a BP e o agente `cadeia-custodia-prova-digital` auditam o **trajeto do vestígio** (arts. 158-A a 158-F) e a skill `impugnacao-cadeia-custodia` transforma essa auditoria na peça de **desentranhamento** (art. 157); o agente `analise-contradicoes` confronta o **laudo pronto** com a prova oral, depois da instrução. Esta skill atua **antes e durante**: disputa a pauta da perícia, coloca um técnico da parte dentro do jogo e cobra do laudo o que ele não respondeu. Vício de **integridade do vestígio** → `impugnacao-cadeia-custodia`; vício de **conteúdo ou forma do laudo** → esta skill.

> **Lição central:** o laudo responde ao que se pergunta. Sem quesitos da defesa, a perícia nasce pautada apenas pelas perguntas da autoridade e da acusação — e o silêncio do laudo sobre os pontos que interessam à defesa vira, na sentença, "ausência de prova" contra o réu. Formular quesitos é **disputar a pauta da prova técnica**, não um ato protocolar.

> **Cautela de vigência:** confira a redação dos arts. 158 a 184 do CPP via `lei-e-sumula` antes de transcrever. Precedente atual sobre qualquer ponto controvertido (indeferimento de quesitos, laudo definitivo em drogas, insanidade): **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até aprovação no gate do `verificador-citacoes` — nenhum número de julgado entra de memória.

## Instituto e base legal — a Lei 11.690/2008 abriu a perícia ao contraditório

- **Faculdade das partes (art. 159, § 3º):** formulação de quesitos e indicação de assistente técnico — a tradução processual do contraditório na prova técnica e da paridade de armas (CF, art. 5º, LV; CADH, art. 8.2.f — direito de obter o comparecimento de peritos que possam lançar luz sobre os fatos).
- **Momento dos quesitos (art. 176):** a autoridade e as partes podem formular quesitos **até o ato da diligência**. Depois de realizado o exame, o veículo muda: esclarecimentos e laudo complementar (art. 159, § 5º, I) ou suprimento de vícios (art. 181).
- **O laudo responde aos quesitos (art. 160):** os peritos descrevem minuciosamente o que examinarem **e respondem aos quesitos formulados**, no prazo de 10 dias, prorrogável. Quesito ignorado é omissão a atacar pelo art. 181.
- **Perito oficial único; não oficiais aos pares (art. 159, caput e § 1º):** o exame é feito por perito oficial com diploma superior; na falta dele, por **duas** pessoas idôneas com diploma superior, preferencialmente na área específica. Laudo subscrito por **um só perito não oficial é nulo** (Súmula 361 do STF — anterior à reforma e ainda aplicável aos não oficiais; o impedido é também o que funcionou na apreensão).
- **Vícios do laudo (art. 181):** inobservância de formalidade, omissão, obscuridade ou contradição → o juiz manda **suprir, complementar ou esclarecer**; pode ordenar **novo exame por outros peritos** (parágrafo único). Divergência entre peritos segue o art. 180.
- **Livre valoração (art. 182):** o juiz **não fica adstrito ao laudo** — pode aceitá-lo ou rejeitá-lo, no todo ou em parte. É a porta pela qual o parecer do assistente técnico e as contradições entram na decisão.
- **Controle judicial (art. 184):** salvo o exame de corpo de delito — indispensável nas infrações que deixam vestígios (art. 158) —, o juiz pode negar a perícia requerida quando não necessária ao esclarecimento da verdade. Fundamente a **pertinência** de cada requerimento.

## Cabimento — cada momento tem seu veículo

| Momento | Veículo | Base / observação |
|---|---|---|
| Inquérito policial | Requerimento de diligência à autoridade policial, com quesitos anexos (veículo na skill `pedido-diligencias`) | CPP, arts. 14 e 176; deferimento a juízo do delegado — se indeferida perícia relevante, reiterar ao juiz; acesso ao já documentado pela SV 14 |
| Resposta à acusação (arts. 396/396-A) | Especificação de provas: requerer a perícia, **formular quesitos e indicar assistente técnico** desde logo | Momento ideal para instalar o contraditório técnico; prazo de 10 dias (contagem do art. 798) |
| Perícia deferida no curso do processo | Petição com quesitos **antes do ato da diligência** | Art. 176 — depois do exame, resta o § 5º do art. 159 |
| Laudo já juntado aos autos | Petição: admissão do assistente, acesso ao material (§ 6º), parecer técnico (§ 5º, II), esclarecimentos do perito | Art. 159, §§ 4º a 6º |
| Audiência de instrução | Oitiva do perito para responder a quesitos — **prévio requerimento** e intimação com **antecedência mínima de 10 dias** | Arts. 159, § 5º, I, e 400, § 2º |
| Laudo omisso, obscuro ou contraditório | Petição incidental: complementação/esclarecimento ou **novo exame** | Art. 181, caput e parágrafo único |
| Dúvida sobre a higidez mental do acusado | **Incidente de insanidade mental** (exame médico-legal com quesitos) | Arts. 149 a 154 — cabe desde o inquérito (art. 149, § 1º); suspende o processo, se já iniciado (§ 2º); instrumentalização na skill `incidente-insanidade-mental` |
| Rito do júri | Tudo antes da pronúncia e do plenário | Prova técnica mal formada chega pronta aos jurados; **quesitos periciais ≠ quesitação do júri** (esta é a skill `juri-quesitacao`) |

## O assistente técnico penal tem regime próprio — e ele é traiçoeiro

O assistente técnico do processo penal **não** replica o modelo do CPC. Quatro diferenças que derrubam peças desatentas:

1. **Atua só depois de admitido pelo juiz e após a conclusão do laudo oficial** (art. 159, § 4º) — ele **não acompanha** a perícia em tempo real. A intervenção da defesa *durante* a produção se faz pelos **quesitos**, não pelo assistente.
2. **O acesso ao material depende de requerimento** (art. 159, § 6º): o material probatório é disponibilizado **no ambiente do órgão oficial**, sob guarda deste e na presença de perito oficial, salvo impossibilidade de conservação. Sem esse requerimento expresso, o parecer nasce cego.
3. **Manifesta-se por parecer em prazo fixado pelo juiz ou por inquirição em audiência** (art. 159, § 5º, II) — peça as duas vias.
4. **É profissional de confiança da parte, sem compromisso legal** — o peso do parecer vem da qualificação e do método, não do cargo. Anexe currículo e credenciais; em **perícia complexa** — a que abrange mais de uma área de conhecimento especializado —, indique mais de um assistente (art. 159, § 7º).

**Função estratégica:** o assistente é o **tradutor técnico da teoria do caso** — converte a intuição da defesa em linguagem que o juiz pode adotar (art. 182), formula com o advogado a bateria de quesitos e prepara a inquirição do perito em audiência.

## O quesito certo é técnico, fechado e ancorado na teoria do caso

- **Pergunta técnica, nunca jurídica.** "Houve dolo?", "o réu é culpado?" — o perito não responde questão de direito, e o quesito jurídico convida ao indeferimento e desgasta a defesa. Pergunte sobre **fatos verificáveis**: método, medida, compatibilidade, margem de erro.
- **Fechado e objetivo.** Quesito aberto ("o que o perito pode dizer sobre a dinâmica?") colhe resposta genérica. Prefira formulações respondíveis por sim/não/medida, com pedido de justificativa do método.
- **Derivado da teoria do caso.** Cada quesito ou **abre uma porta** para a versão da defesa (compatibilidade com legítima defesa, com a distância alegada, com a autoria diversa) ou **fecha uma porta** da acusação (método inconclusivo, margem de erro, ausência de exame). Quesito sem função na tese é ruído.
- **Arma de dois gumes.** Não pergunte o que não se quer ouvir: quesito cuja resposta provável confirma a acusação trabalha contra o cliente. Estime a resposta antes de formular — com apoio do agente `ciencia` e do assistente técnico.
- **Sempre inclua os quesitos de método:** qual a técnica empregada, se é reconhecida e reprodutível, qual a taxa de erro conhecida, quais exames **deixaram de ser realizados** e por quê. São as perguntas que sustentam a dúvida razoável mesmo quando o mérito do laudo resiste.

## Baterias de quesitos por tipo de perícia

Ponto de partida — adapte ao caso com o assistente técnico e valide os fundamentos com o agente `ciencia`:

**Corpo de delito / lesões corporais (IML):**
natureza, sede e extensão das lesões; instrumento ou meio provável (e compatibilidade com o objeto apreendido); **datação** das lesões (compatível com a data do fato?); compatibilidade da dinâmica com a versão da defesa (queda, luta corporal, revide, autolesão); presença de lesões de defesa; critério **técnico-objetivo** do resultado qualificador afirmado (perigo de vida concreto ou presumido? debilidade/deformidade **permanente** com base em quê? incapacidade para as ocupações habituais por mais de 30 dias aferida como? — CP, art. 129, §§ 1º e 2º); exames complementares realizados e faltantes (art. 168).

**Balística e residuográfico:**
aptidão da arma para disparos (eficiência); confronto balístico projétil × arma — **conclusivo ou apenas compatível**, e por qual método; estado do projétil permite confronto?; **distância** do disparo (resíduos, zona de tatuagem/esfumaçamento); trajetória e posição relativa atirador–vítima; número e sequência de disparos; no exame residuográfico (GSR): elementos detectados, técnica empregada, possibilidade de **transferência secundária e contaminação**, janela temporal de persistência dos resíduos e taxa de falso positivo — as limitações do GSR são clássicas; fundamentos no agente `ciencia`.

**Digital (extração de dados):**
ferramenta e versão utilizadas; tipo de extração (física, lógica, sistema de arquivos) — **extração forense ou mero espelhamento?**; **hash** gerado no ato da extração e método; metadados (criação/edição) e possibilidade de alteração; é tecnicamente possível afirmar **quem operava** o dispositivo?; possibilidade de inserção remota ou sincronização em nuvem; geolocalização: método e **margem de erro**; os **dados brutos** foram preservados e disponibilizados? — se as respostas revelarem quebra de integridade, o ataque migra para a skill `impugnacao-cadeia-custodia`.

**Contábil:**
universo documental examinado (íntegro? o que faltou e por quê?); metodologia e critério de apuração do dano/proveito; os valores incluem tributos, multas, correção, **estimativas ou projeções**?; os lançamentos são compatíveis com mero inadimplemento ou revelam artifício fraudulento?; é possível **individualizar** quem tinha poder de gestão sobre as contas no período?; período exato abrangido; existem lançamentos ou documentos que infirmem a conclusão?

**Psiquiátrica (incidente de insanidade — arts. 149 a 154):**
os quesitos gravitam em torno do art. 26 do CP — portador de doença mental ou desenvolvimento mental incompleto/retardado?; **ao tempo da ação ou omissão**, era inteiramente incapaz de entender o caráter ilícito do fato?; ou de determinar-se de acordo com esse entendimento?; a capacidade era ao menos **reduzida** (parágrafo único — semi-imputabilidade)?; há dependência de drogas que exclua ou reduza a capacidade (Lei 11.343/2006, arts. 45 e 46)?; necessidade e modalidade de tratamento. Lembretes: a instauração **exige dúvida razoável** sobre a integridade mental — não é automática, e o juiz pode indeferir fundamentadamente (estado atual via `jurisprudencia-stj-stf` [NÃO VERIFICADO]); determinado o exame, nomeia-se curador e **suspende-se o processo, se já iniciado** (art. 149, § 2º); o exame não dura mais de 45 dias, salvo necessidade de prazo maior demonstrada pelos peritos (art. 150, § 1º). Peça própria do incidente: skill `incidente-insanidade-mental`.

**Toxicológica (drogas):** natureza e quantidade da substância, princípio ativo e potencial lesivo; distinção entre **laudo de constatação** provisório (Lei 11.343/2006, art. 50, § 1º — basta ao flagrante e à denúncia) e **laudo definitivo**, que a condenação em regra exige — temperamentos jurisprudenciais via `jurisprudencia-stj-stf` [NÃO VERIFICADO].

## Estrutura forense da petição

Veículo principal: petição de quesitos + indicação de assistente técnico (adapte para o pedido de esclarecimentos ou para o incidente do art. 181 — a arquitetura da BP `peticao-criminal` vale para todos):

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a) nos autos em epígrafe, por seu(sua) advogado(a)
(procuração anexa), vem, com fundamento no art. 159, §§ 3º a 6º, do CPP,
FORMULAR QUESITOS e INDICAR ASSISTENTE TÉCNICO, expondo o que segue.

I — DO CABIMENTO E DA TEMPESTIVIDADE
[Perícia determinada à fl./evento X e diligência ainda não realizada
(art. 176) — ou laudo juntado à fl./evento Y, abrindo-se as faculdades
do art. 159, §§ 4º a 6º. Uma linha sobre a pertinência da intervenção
para o esclarecimento da verdade (art. 184).]

II — DA INDICAÇÃO DE ASSISTENTE TÉCNICO
[Nome, formação, registro profissional e experiência na área específica
(currículo anexo). Requerer: (a) a ADMISSÃO (art. 159, § 4º), com intimação
das partes da decisão; (b) a DISPONIBILIZAÇÃO do material probatório no
órgão oficial para exame (art. 159, § 6º); (c) prazo para PARECER TÉCNICO
e/ou inquirição em audiência (art. 159, § 5º, II). Em perícia complexa,
indicar mais de um assistente (§ 7º).]

III — DOS QUESITOS
[Bateria numerada, técnica e fechada — ver seção própria. Encerrar sempre
com os quesitos de método: técnica empregada e sua taxa de erro; exames
não realizados e a razão da omissão.]

IV — DOS PEDIDOS
a) a juntada dos QUESITOS anexos, para resposta fundamentada no laudo
   (CPP, art. 160);
b) a ADMISSÃO do assistente técnico indicado, com as providências dos
   §§ 4º a 6º do art. 159;
c) [se o laudo já está nos autos] a intimação do perito para AUDIÊNCIA,
   com antecedência mínima de 10 dias e encaminhamento dos quesitos, ou
   resposta em LAUDO COMPLEMENTAR (art. 159, § 5º, I);
d) [se há vício] a COMPLEMENTAÇÃO/ESCLARECIMENTO do laudo quanto às
   omissões, obscuridades ou contradições apontadas e, subsidiariamente,
   a realização de NOVO EXAME por outros peritos (art. 181, caput e
   parágrafo único).

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [ADVOGADO(A)], OAB/[UF] nº [NÚMERO]
```

**Anexos:** rol de quesitos numerado; currículo e registro do assistente técnico; documentos que fundamentam quesitos específicos (prontuários, extratos, fotografias); no incidente do art. 181, quadro apontando cada omissão/contradição do laudo com fl./evento.

## Teses típicas

- **Quesito ignorado é omissão sindicável.** O art. 160 obriga o perito a responder aos quesitos formulados; a resposta ausente ou evasiva abre o art. 181 (complementação e, se conveniente, novo exame) — e documenta o cerceamento se o juízo negar tudo.
- **O juiz não está adstrito ao laudo (art. 182).** Parecer do assistente + contradições internas + limitações de método = base concreta para a livre valoração afastar a conclusão pericial, sem precisar "vencer" o perito no campo técnico.
- **Compatível não é conclusivo.** Grande parte dos laudos afirma compatibilidade (confronto balístico, dinâmica de lesões, GSR) — o quesito que obriga o perito a **classificar o grau de certeza** do próprio método transforma "prova técnica" em indício, com efeito direto no standard probatório.
- **A ausência de exame também é resultado.** Exame residuográfico não realizado, confronto impossível pelo estado do projétil, datação não feita: quesitos que documentam o **não produzido** sustentam a dúvida razoável nas alegações finais e nos recursos.
- **Laudo por um só perito não oficial é nulo** (art. 159, § 1º; Súmula 361 do STF) — verifique sempre quem subscreve e a habilitação (diploma superior, preferencialmente na área específica).
- **Nemo tenetur na colheita de padrões.** O acusado não é obrigado a fornecer material para exame que dependa da sua colaboração ativa (padrões gráficos — art. 174; etilômetro — ver skill `impugnacao-prova-embriaguez`); a recusa não autoriza presunção de culpa.
- **Individualização na perícia contábil e digital.** O quesito sobre **quem** tinha gestão sobre as contas ou operava o dispositivo ataca o elo mais fraco das imputações coletivas: a autoria.

## Erros comuns e pegadinhas

- **Tratar as faculdades do art. 159 como direito subjetivo no inquérito.** O § 5º é textualmente restrito ao "curso do processo judicial"; na fase policial, quesitos e perícias entram como **requerimento de diligência** (art. 14), a juízo do delegado — não brigue por "cerceamento de defesa" no IP, documente o indeferimento e reitere ao juiz.
- **Perder o "até o ato da diligência" (art. 176).** Realizado o exame, precluiu a formulação originária — resta o § 5º do art. 159 (esclarecimentos, laudo complementar) e o art. 181. Peticione **assim que a perícia for determinada**, não quando o laudo chegar.
- **Pedir esclarecimentos do perito na véspera da audiência.** O art. 159, § 5º, I exige encaminhamento do mandado e dos quesitos com **antecedência mínima de 10 dias**, e o art. 400, § 2º condiciona os esclarecimentos a **prévio requerimento**. Fora disso, o indeferimento é legítimo.
- **Indicar o assistente e parar por aí.** Sem requerer a admissão (§ 4º), o acesso ao material no órgão oficial (§ 6º) e o prazo para o parecer (§ 5º, II), a indicação é inócua — o assistente não tem ingresso automático a nada.
- **Esperar que o assistente acompanhe a perícia em tempo real.** No processo penal ele atua **após o laudo oficial** (§ 4º) — quem intervém antes é o advogado, pelos quesitos. Planejar como no CPC frustra a estratégia.
- **Formular quesito jurídico ou conclusivo.** Além do indeferimento, sinaliza ao juízo que a defesa não tem pergunta técnica real.
- **Formular quesito sem estimar a resposta.** A resposta desfavorável entra no laudo com selo de prova técnica — e foi a defesa que a pediu.
- **Confundir os remédios.** Integridade/identidade do vestígio (lacre, hash, gap de custódia) → skill `impugnacao-cadeia-custodia` (arts. 158-A a 158-F; desentranhamento, art. 157). Conteúdo/forma do laudo (omissão, obscuridade, contradição, método) → art. 181 + quesitos + esclarecimentos. Misturar os capítulos enfraquece ambos.
- **Atacar o laudo sem lastro técnico.** Impugnação leiga contra perito oficial raramente prospera; a via é parecer do assistente + quesitos de método + contradições documentadas (agente `analise-contradicoes` após a instrução).
- **Deixar tudo para as alegações finais.** Vícios da perícia arguíveis na instrução sujeitam-se à lógica do art. 571 e à exigência de prejuízo (art. 563); a inércia pesa na aferição do cerceamento. Argua no primeiro momento e **renove** em memoriais e apelação.
- **Errar a contagem.** Prazo processual penal exclui o dia do começo e inclui o do vencimento, contínuo e peremptório (art. 798, § 1º). **Defensoria Pública: prazo em dobro e intimação pessoal** (LC 80/94, arts. 44, I, 89, I, e 128, I).
- **Requerer perícia sem demonstrar necessidade.** O art. 184 autoriza o indeferimento (salvo corpo de delito) — fundamente a pertinência de cada exame e de cada quesito na teoria do caso.
- **Tratar o incidente de insanidade como direito potestativo.** Exige dúvida razoável; instaurado, suspende o processo e demanda curador (art. 149, § 2º) — avalie o custo estratégico (tempo, medida de segurança possível) antes de requerer.
- **Confundir quesitos periciais com a quesitação do júri.** Os quesitos do art. 483 são dirigidos aos jurados — skill `juri-quesitacao`; homônimos, institutos distintos.

## Checklist antes de protocolar

- [ ] Momento identificado (antes da diligência × laudo juntado) e veículo correto escolhido (art. 176 × art. 159, § 5º × art. 181)?
- [ ] Quesitos técnicos, fechados, numerados, sem questão jurídica, cada um com função na teoria do caso?
- [ ] Quesitos de método incluídos (técnica, taxa de erro, exames não realizados)?
- [ ] Resposta provável de cada quesito estimada com o agente `ciencia` / assistente técnico (nenhum tiro no pé)?
- [ ] Assistente técnico: qualificação anexada + pedidos de admissão (§ 4º), acesso ao material (§ 6º) e prazo para parecer (§ 5º, II)?
- [ ] Oitiva do perito requerida com antecedência mínima de 10 dias e prévio requerimento (arts. 159, § 5º, I, e 400, § 2º)?
- [ ] Vícios do laudo mapeados com fl./evento e pedidos do art. 181 em ordem sucessiva (complementar → novo exame)?
- [ ] Integridade do vestígio auditada (agente `cadeia-custodia-prova-digital`) — havendo quebra, peça própria via `impugnacao-cadeia-custodia`?
- [ ] Habilitação e número de subscritores do laudo conferidos (art. 159, caput e § 1º; Súmula 361 STF)?
- [ ] Redações conferidas via `lei-e-sumula`; precedentes pesquisados via `jurisprudencia-stj-stf`, marcados [NÃO VERIFICADO] e aprovados no `verificador-citacoes`?
- [ ] Entrega marcada como **rascunho para revisão humana** — a estratégia probatória e o risco de cada quesito são do(a) advogado(a)?

## Apoie-se em

- **Agente e BP `cadeia-custodia-prova-digital`** — auditoria do trajeto do vestígio (arts. 158-A a 158-F): os achados dela viram quesitos de integridade aqui; as respostas do perito aos quesitos alimentam a auditoria de volta.
- **Skill `impugnacao-cadeia-custodia`** (complementar — não duplicar): quando as respostas revelam quebra de integridade/identidade do vestígio, o ataque migra para lá (desentranhamento, art. 157); esta skill intervém **na produção** da prova.
- **Agente `analise-contradicoes`** — depois do laudo e da prova oral: confronta laudo × autos × depoimentos; as contradições encontradas viram quesitos de esclarecimento (art. 159, § 5º, I) e matéria de memoriais.
- **Agente `ciencia`** — fundamentos técnico-científicos das baterias (limitações do GSR, hash e extração forense, datação de lesões, métodos contábeis): valida cada quesito antes do protocolo.
- **BP `peticao-criminal`** — arquitetura padrão da petição (endereçamento, qualificação, fundamentação, pedidos) aplicável a todos os veículos desta skill.
- **Agentes `lei-e-sumula`, `jurisprudencia-stj-stf` e `verificador-citacoes`** — vigência dos dispositivos, pesquisa de precedentes e gate obrigatório de toda citação antes da entrega.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima da peça final: teoria do caso, subtítulos afirmativos, subsunção explícita e persuasão (aplicar SEMPRE ao redigir).
