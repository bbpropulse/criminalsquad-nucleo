---
name: impugnacao-cadeia-custodia
description: >-
  Use ao redigir a impugnação da quebra de cadeia de custódia de prova física ou digital (CPP, arts.
  158-A a 158-F — Pacote Anticrime): auditoria elo a elo do vestígio e preliminar/incidente com
  pedido de desentranhamento (CPP 157) e contaminação derivada. Gatilhos: quebra de cadeia de
  custódia, cadeia de custódia, arts. 158-A a 158-F, 158-B, 158-C, 158-D, 158-E, 158-F, Pacote
  Anticrime, lacre rompido, lacre…. Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-impugnacao-cadeia-custodia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["impugnacao-cadeia-custodia", "impugnacao cadeia", "cadeia custodia"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Impugnação da Quebra de Cadeia de Custódia (prova física e digital)

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

Esta skill orienta a construção da **peça que ataca a prova da acusação por quebra da cadeia de custódia** (CPP, arts. 158-A a 158-F, incluídos pela Lei 13.964/2019 — Pacote Anticrime): a auditoria **elo a elo** do trajeto do vestígio, a demonstração documental dos vícios e o pedido de **desentranhamento** (CPP, art. 157) com extensão às provas derivadas. Vale para prova **física** (droga, arma, mídia apreendida — onde o **lacre** é o coração) e **digital** (extração de celular, dados telemáticos — onde o **hash** é o coração).

> **Divisão de trabalho (não duplicar):** a best-practice e o agente `cadeia-custodia-prova-digital` fazem a **auditoria** — as 10 etapas do art. 158-B, os atributos da prova digital idônea e os limites do que se pode afirmar. A skill `preservacao-prova-digital-defesa` **produz** a prova da própria defesa com o mesmo rigor. **Esta skill é o destino forense da auditoria:** transforma o relatório de indícios na peça que impugna a prova da acusação. Rode a auditoria antes; redija a peça depois.

> **Lição central:** quebra de cadeia de custódia **não se declara, demonstra-se** — elo a elo, com folha/evento dos autos para cada afirmação. E o efeito não é automático: o STJ o afere caso a caso, com divergência entre as molduras da **inadmissibilidade** e da **valoração** — a peça apresenta as duas, em ordem sucessiva.

> **Cautela de vigência:** confira a redação dos arts. 157 e 158-A a 158-F do CPP via `lei-e-sumula` antes de citar. Estado atual da divergência entre as turmas do STJ sobre a consequência da quebra: **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até aprovação no gate do `verificador-citacoes` — nenhum número de julgado entra de memória.

## Instituto e base legal

- **Cadeia de custódia (art. 158-A):** conjunto de procedimentos para manter e documentar a história cronológica do vestígio, rastreando sua posse e manuseio do reconhecimento ao descarte. O rastro ininterrupto é o que permite afirmar que **o vestígio periciado é o mesmo que foi coletado** — sem ele, a identidade da fonte de prova fica indemonstrável.
- **As etapas (art. 158-B):** reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte — descrição de cada uma na BP `cadeia-custodia-prova-digital`. Impugnar é percorrer esse trajeto perguntando, a cada elo: *quem teve a posse, quando, e onde isso está registrado?*
- **Coleta e local (art. 158-C):** coleta **preferencialmente** por perito oficial (a lei não a torna exclusiva), com encaminhamento à central de custódia; é **proibida** a remoção de vestígios antes da liberação pelo perito responsável, e a remoção indevida é tipificada como fraude processual (§2º).
- **Acondicionamento e lacre (art. 158-D):** recipiente determinado pela natureza do material; **todos os recipientes selados com lacre de numeração individualizada** (§1º); abertura somente pelo perito ou por pessoa autorizada motivadamente (§3º); **cada rompimento registrado na ficha de acompanhamento**, com responsável (nome e matrícula), data, local, finalidade e o novo lacre utilizado (§4º).
- **Central de custódia (arts. 158-E e 158-F):** entrada e saída de vestígio protocoladas, identificação de todas as pessoas que acessarem o material, com registro de data e hora; após a perícia, o vestígio **retorna à central** e nela permanece. Acesso sem registro é elo quebrado — confira o parágrafo exato via `lei-e-sumula` ao citar.
- **Consequência (CF, art. 5º, LVI; CPP, art. 157):** provas obtidas em violação a normas constitucionais ou **legais** são inadmissíveis e devem ser **desentranhadas**; a ilicitude alcança as **derivadas** (§1º), salvo ausência de nexo causal ou fonte independente (§§1º e 2º); preclusa a decisão de desentranhamento, a prova é **inutilizada** (§3º).

## Cabimento — momento e veículo da impugnação

Prova inadmissível é matéria de ordem pública e pode ser atacada em qualquer fase — mas o **veículo** e a **força** mudam com o momento:

| Momento | Veículo | Observação |
|---|---|---|
| Investigação / antes da denúncia | Petição no IP: acesso aos **dados brutos** + quesitos ao perito | Sem a extração íntegra não há auditoria — Modelo 2 da skill `preservacao-prova-digital-defesa` |
| **Resposta à acusação (arts. 396/396-A)** | **Preliminar** de inadmissibilidade + desentranhamento | O momento ideal — prazo de 10 dias, contagem do art. 798 |
| Curso da instrução | **Petição incidental** (art. 157), tão logo a defesa acesse a documentação da prova | Não espere as alegações finais |
| Alegações finais / memoriais | Preliminar + tese de valoração | Força reduzida: o juiz já teve contato com a prova |
| Sentença condenatória | **Preliminar de apelação** | Cumular com o mérito; prequestionar para as vias extraordinárias |
| Prova viciada como único lastro da imputação/prisão | **Habeas corpus** | Trancamento/exclusão — ver skill própria de HC |
| Rito do júri | Arguir **antes da pronúncia** e do plenário | Prova inadmissível deve sair dos autos antes de chegar aos jurados |

**Os três pilares materiais da impugnação** (sem qualquer um deles, a peça não fica de pé):
1. **Vício documentado** — falha demonstrável nos autos, nunca conjectura, sempre com folha/evento;
2. **Comprometimento da confiabilidade** — por que aquele vício impede afirmar a integridade ou a identidade do vestígio;
3. **Prejuízo concreto** — a centralidade da prova viciada na imputação (quanto mais central, maior o prejuízo — e o art. 563 deixa de socorrer a acusação).

## Roteiro de auditoria elo a elo (insumo do capítulo II da peça)

Rode o agente `cadeia-custodia-prova-digital` e preencha a matriz — cada linha vira um parágrafo da peça:

| Elo (art. 158-B) | O que procurar nos autos | Vício potencial |
|---|---|---|
| Reconhecimento (com isolamento e fixação) | Auto de apreensão individualiza o vestígio (modelo, IMEI, estado, lacre)? Registro de isolamento (modo avião/bloqueio de rede no digital)? | Vestígio não individualizado; alteração antes do exame |
| Coleta | Quem coletou, e isso está registrado? Vestígio removido antes da liberação pelo perito (art. 158-C, §2º)? | Coleta sem registro do responsável; fraude processual sinalizável |
| Acondicionamento | Recipiente compatível com a natureza do material? Lacre numerado (art. 158-D, §1º)? | **Lacre ausente**; recipiente inadequado (contaminação) |
| Transporte | Registro de quem transportou, quando e como? | Elo temporal faltante |
| Recebimento | Termo formal entre custodiantes, com data, hora e responsável? | **Gap de custódia** (a passagem de mão sem registro) |
| Processamento | Laudo indica método, ferramenta/versão e **hash** (digital)? Rompimento de lacre com ficha de acompanhamento (art. 158-D, §§3º-4º)? | Hash ausente/divergente; **lacre rompido/renumerado sem registro** |
| Armazenamento | Central de custódia: entrada/saída protocoladas e acessos identificados (arts. 158-E/158-F)? | **Acesso não registrado** |
| Descarte | Destinação registrada, após cumprida a finalidade? | Descarte prematuro (inviabiliza a contraprova) |

Preencha cada linha com **status** (documentado / ausente / contraditório) e **fl./evento**. **Vícios específicos do digital** (regime completo na BP): hash não gerado na extração ou divergente da mídia dos autos; **espelhamento** em vez de extração forense (acesso bidirecional, manipulável — precedentes atuais via `jurisprudencia-stj-stf`, [NÃO VERIFICADO]); relatório em PDF **sem os dados brutos** disponibilizados à defesa; metadados alterados por manuseio sem isolamento.

## Estrutura forense da peça

Adapte o cabeçalho ao veículo (preliminar de resposta à acusação, petição incidental, preliminar recursal). Esqueleto do incidente:

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a) nos autos da ação penal em epígrafe, por seu(sua)
advogado(a) (procuração anexa), vem arguir a QUEBRA DA CADEIA DE CUSTÓDIA
da prova adiante identificada, com pedido de DESENTRANHAMENTO (CPP, art. 157),
pelas razões que seguem.

I — DA PROVA IMPUGNADA E DE SUA CENTRALIDADE NA IMPUTAÇÃO
[Identificar a prova (o quê, fl./evento) e demonstrar seu peso na acusação:
se é o lastro principal da materialidade ou da autoria, o prejuízo da
quebra é evidente e o desentranhamento esvazia a imputação.]

II — DO TRAJETO DO VESTÍGIO — AUDITORIA ELO A ELO (CPP, art. 158-B)
[Transcrever a matriz de auditoria: para cada elo, o que os autos documentam,
o que falta e onde o registro deveria estar. A lacuna se prova pela ausência —
aponte a folha em que o termo deveria constar e não consta.]

III — DOS VÍCIOS CONCRETOS
[Um subtítulo afirmativo por vício, sempre com fl./evento. Exemplos:]
   III.1 — O lacre não garante a inviolabilidade do vestígio
           [ausente / rompido sem registro / renumerado sem ficha de
           acompanhamento — art. 158-D, §§ 1º, 3º e 4º]
   III.2 — A integridade do dado digital não foi demonstrada
           [hash não documentado na extração ou divergente; método não
           auditável nem reprodutível]
   III.3 — Há elo temporal sem registro de posse
           [gap entre a apreensão e a perícia — art. 158-B, VI e VII]
   III.4 — O armazenamento não foi controlado
           [acesso não registrado na central de custódia — arts. 158-E e 158-F]

IV — DO ÔNUS DA ACUSAÇÃO E DA CONSEQUÊNCIA DA QUEBRA
[Apontada a falha documental, desloca-se ao Estado o encargo de comprovar a
higidez da prova — não cabe à defesa provar a adulteração. Desenvolver as
DUAS molduras, em ordem sucessiva:
 (a) INADMISSIBILIDADE — prova produzida em violação aos arts. 158-A a 158-F
     é ilícita por violação a norma legal (CF, art. 5º, LVI; CPP, art. 157)
     e deve ser desentranhada;
 (b) SUBSIDIARIAMENTE, VALORAÇÃO — a confiabilidade comprometida esvazia o
     peso probatório: elemento imprestável para sustentar condenação.
Estado atual da divergência entre as turmas do STJ: citar somente precedente
pesquisado via jurisprudencia-stj-stf e aprovado no verificador-citacoes.]

V — DA CONTAMINAÇÃO DAS PROVAS DERIVADAS (CPP, art. 157, §1º)
[Mapear tudo o que derivou da prova viciada — laudos, relatórios, diligências
que só existiram por causa dela — e demonstrar o nexo causal; antecipar e
desmontar a alegação de fonte independente ou descoberta inevitável (§§1º e 2º).]

VI — DOS PEDIDOS
a) o reconhecimento da QUEBRA DA CADEIA DE CUSTÓDIA da prova [X];
b) o DESENTRANHAMENTO da prova viciada e das DERIVADAS indicadas no item V
   (art. 157, caput e §1º), com inutilização após a preclusão (§3º);
c) subsidiariamente, a declaração de imprestabilidade do elemento para
   qualquer juízo condenatório, ante a confiabilidade comprometida;
d) a intimação do perito para esclarecimentos, com os QUESITOS anexos
   (método, ferramenta e versão, hash, lacres, fichas de acompanhamento,
   registros da central de custódia);
e) caso ainda não disponibilizada, a entrega da CÓPIA FORENSE INTEGRAL
   (dados brutos com hash) para exame por assistente técnico (CPP, art. 159,
   §§ 3º a 6º; Súmula Vinculante 14).

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [ADVOGADO(A)], OAB/[UF] nº [NÚMERO]
```

**Anexos:** matriz de auditoria referenciada por fl./evento; quesitos ao perito; parecer/manifestação do assistente técnico, se houver; cópia dos documentos que evidenciam a lacuna (auto de apreensão sem lacre, laudo sem hash).

## Teses típicas

- **O ônus da integridade é do Estado.** Quando a acusação apresenta a prova, é dela o encargo de demonstrar integridade e confiabilidade; à defesa basta **apontar a falha documental** para inverter o jogo (enquadramento na BP `cadeia-custodia-prova-digital`; precedente atual via `jurisprudencia-stj-stf`, [NÃO VERIFICADO]).
- **Sem lacre íntegro não há identidade da fonte de prova.** Lacre ausente, rompido sem registro ou renumerado sem ficha de acompanhamento (art. 158-D, §§1º, 3º e 4º) impede afirmar que o material periciado é o apreendido — ataca a própria **materialidade** (decisivo em drogas, armas e mídias).
- **Gap de custódia é trajeto indemonstrável.** Entre a apreensão e a perícia alguém teve a posse; sem termo de recebimento (art. 158-B, VII), o percurso do vestígio é uma caixa-preta — e caixa-preta não autentica prova.
- **Hash é a impressão digital do dado.** Sem código de integridade gerado na extração — ou com divergência entre extração e mídia dos autos —, não se afirma que o conteúdo apresentado é o que estava no dispositivo.
- **Espelhamento não é extração.** Acesso bidirecional (tipo WhatsApp Web) permite inserir e apagar sem rastro; extração forense gera cópia estática com hash. Regimes distintos, consequências distintas (BP; precedentes e eventual repetitivo pendente via `jurisprudencia-stj-stf`, [NÃO VERIFICADO]).
- **A negativa dos dados brutos é quebra epistêmica.** Relatório em PDF é recorte unilateral; negar a extração íntegra à defesa impede o exame independente e cerceia a defesa (SV 14; CPP, art. 159, §§3º-6º).
- **Duas molduras, ordem sucessiva.** Principal: inadmissibilidade + desentranhamento (art. 157). Subsidiária: imprestabilidade/valoração zero. Apresentar as duas nunca enfraquece — cobre os dois entendimentos em disputa no STJ.
- **Centralidade = prejuízo.** Demonstre que a condenação não fica de pé sem a prova viciada: é a resposta antecipada ao argumento do *pas de nullité sans grief* (art. 563) e ao apelo à "prova independente".

## Erros comuns e pegadinhas

- **Declarar "prova ilícita" como certeza.** A quebra gera **indício a arguir**; o efeito é decidido caso a caso pelo juízo. Peça que afirma nulidade automática perde credibilidade — formule com as duas molduras (anti-patterns na BP).
- **Impugnar por conjectura.** "Provavelmente houve manipulação" não é tese. Cada vício com fl./evento — inclusive a lacuna (aponte onde o registro deveria estar).
- **Transformar o "preferencialmente" do art. 158-C em nulidade.** A coleta por policial não perito **não é vício automático** — a lei diz "preferencialmente por perito oficial". O que se ataca é a coleta **sem registro** de quem, quando e como; fundar a tese só na ausência de perito convida ao indeferimento.
- **Confundir vício de obtenção com vício de integridade.** Falta de autorização judicial para acessar o aparelho é ilicitude clássica; quebra de cadeia é falha na **preservação**. Cumulam-se, mas são capítulos distintos — misturá-los enfraquece ambos.
- **Aplicar a régua estatal ao print do particular.** Print enviado pela vítima tem regime próprio (admissível sem o rigor do 158-B se não há indício de adulteração — BP); exigir dele a cadeia integral convida ao indeferimento. Ataque-o pelo contraditório e pela exibição do original.
- **Deixar para as alegações finais.** O desentranhamento (art. 157) pode ser requerido a qualquer tempo — matéria de ordem pública, sem preclusão formal —, mas retardar tem custo real: o juiz já formou convicção com a prova nos autos, e a inércia pesa contra a defesa na aferição do prejuízo. Pior: se o juízo enquadrar a falha como **nulidade relativa** de ato da instrução, incide a janela preclusiva do art. 571 do CPP. Argua no **primeiro momento** (resposta à acusação) e **renove** em memoriais e apelação.
- **Errar a contagem do prazo do veículo.** No processo penal o prazo **exclui o dia do começo e inclui o do vencimento** (CPP, art. 798, §1º) e corre de forma **contínua e peremptória** (caput) — não há regra de dias úteis do CPC. Resposta à acusação: 10 dias (art. 396). **Defensoria Pública: prazo em dobro e intimação pessoal** (LC 80/94, arts. 44, I, 89, I, e 128, I) — a dobra vale para a resposta e para os recursos que veiculam a impugnação.
- **Pedir "nulidade do processo" em vez de desentranhamento.** O remédio do art. 157 é a exclusão da **prova** (e derivadas); a anulação de atos processuais é pedido diverso, com outros pressupostos. Escolher o remédio errado é entregar o indeferimento.
- **Esquecer as derivadas e a inutilização.** Desentranhar o laudo e deixar nos autos o relatório que o reproduz é vitória de papel. Mapeie a árvore da contaminação (§1º) e peça a inutilização (§3º).
- **Ignorar a prova independente.** Se a imputação se sustenta em lastro autônomo, o desentranhamento não tranca a ação — calibre a expectativa do cliente e ataque também o conjunto remanescente.
- **Validar (ou atacar) o hash tecnicamente na peça.** O advogado constata presença, ausência ou divergência **documental**; validação técnica é do perito/assistente técnico — transforme a dúvida em **quesitos**.
- **No júri, deixar a prova viciada chegar ao plenário.** Uma vez exibida aos jurados, o desentranhamento posterior não apaga a impressão — argua antes da pronúncia.
- **Contentar-se com a existência do laudo.** Laudo existir não é cadeia documentada: laudo **sem hash, sem ficha de lacre e sem termos de custódia** é exatamente o vício a explorar.
- **Em drogas, dormir na destruição.** A destruição exige **guarda de amostra** necessária ao laudo definitivo (Lei 11.343/2006, art. 50, §3º) — e, na prática, à contraprova —, com procedimento e registros próprios (§4º): destruição sem amostra preservada, ou sem os registros exigidos, inviabiliza o exame pelo assistente técnico e é vício autônomo a arguir.
- **Aplicar os arts. 158-A a 158-F a vestígio coletado antes da vigência da Lei 13.964/2019.** Norma processual segue o *tempus regit actum*: para coleta anterior à vigência, a jurisprudência tende a afastar a exigência formal desses artigos — confirme o estado atual via `jurisprudencia-stj-stf` [NÃO VERIFICADO] e, nesses casos, ataque pela via geral (integridade indemonstrada, art. 157 e valoração), não pela literalidade do Pacote Anticrime.

## Checklist antes de protocolar

- [ ] Auditoria elo a elo rodada (agente `cadeia-custodia-prova-digital`), com status e fl./evento por elo?
- [ ] Dados brutos da extração requeridos/obtidos (Modelo 2 da skill `preservacao-prova-digital-defesa`) antes de fechar a auditoria digital?
- [ ] Cada vício sustentado nos três pilares (documentado + confiabilidade comprometida + prejuízo/centralidade)?
- [ ] Vício de obtenção (autorização judicial) e vício de integridade tratados em capítulos separados, quando coexistirem?
- [ ] Duas molduras em ordem sucessiva (inadmissibilidade → valoração), sem afirmação de nulidade automática?
- [ ] Derivadas mapeadas com nexo causal + pedido de inutilização (art. 157, §§1º e 3º)?
- [ ] Quesitos ao perito anexados (método, ferramenta/versão, hash, lacres, registros da central)?
- [ ] Momento/veículo correto e prazo contado pelo art. 798, §1º (dobra da Defensoria, quando o caso)?
- [ ] Quebra integrada ao mapa geral do caso via agente `mapa-nulidades` (a tese conversa com as demais preliminares)?
- [ ] Redações dos arts. 157 e 158-A a 158-F conferidas via `lei-e-sumula`; precedentes pesquisados via `jurisprudencia-stj-stf`, marcados [NÃO VERIFICADO] e aprovados no `verificador-citacoes`?
- [ ] Entrega marcada como **rascunho para revisão humana** — a escolha da moldura e o risco são do(a) advogado(a)?

## Apoie-se em

- **BP `cadeia-custodia-prova-digital`** — a base de conhecimento desta peça: as 10 etapas do art. 158-B, os atributos da prova digital idônea, o efeito caso a caso e os anti-patterns (o que a peça **não** pode afirmar). Esta skill é o braço de peça daquela auditoria.
- **Agente `cadeia-custodia-prova-digital`** — executa a auditoria documental elo a elo; o relatório dele preenche a matriz e o capítulo II da peça.
- **Skill `preservacao-prova-digital-defesa`** — o lado espelho: produz e preserva a prova **da defesa** e fornece o Modelo 2 (requisição dos dados brutos) que alimenta esta impugnação.
- **Agente `mapa-nulidades`** — integra a quebra ao inventário geral de nulidades do processo, ordenando as preliminares por força e momento.
- **Agente `jurisprudencia-stj-stf`** — pesquisa do estado atual da divergência (inadmissibilidade × valoração) e dos precedentes sobre espelhamento, hash e dados brutos.
- **Agente `verificador-citacoes`** — gate obrigatório de toda lei, súmula e precedente antes da entrega.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima da peça final: teoria do caso, subtítulos afirmativos, subsunção explícita e persuasão (aplicar SEMPRE ao redigir).
