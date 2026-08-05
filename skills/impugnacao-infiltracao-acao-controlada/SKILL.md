---
name: impugnacao-infiltracao-acao-controlada
description: >-
  Use ao redigir a impugnação defensiva dos meios especiais de obtenção de prova da criminalidade
  organizada — infiltração de agentes (Lei 12.850/2013, arts. 10 a 14), infiltração VIRTUAL em meio
  cibernético (Lei 12.850, arts. 10-A a 10-D, inseridos pela Lei 13.964/2019; e, para crimes contra
  criança/adolescente, ECA, arts. 190-A a 190-E, da Lei 13.441/2017) e ação controlada / entrega
  vigiada (arts. 8º e 9º) —, com teses de… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, prova]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-impugnacao-infiltracao-acao-controlada"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["impugnacao-infiltracao-acao-controlada", "impugnacao infiltracao", "acao controlada"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Impugnação de Infiltração de Agentes e Ação Controlada (meios especiais de obtenção de prova)

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

Esta skill orienta a construção da **peça que ataca a prova produzida pelos meios especiais de obtenção da criminalidade organizada** — a **infiltração de agentes** (Lei 12.850/2013, arts. 10 a 14), a **infiltração virtual** em meio cibernético (arts. 10-A a 10-D da Lei 12.850, inseridos pela Lei 13.964/2019 — Pacote Anticrime; e, para crimes contra a criança e o adolescente, os arts. 190-A a 190-E do ECA, inseridos pela Lei 13.441/2017) e a **ação controlada / entrega vigiada** (arts. 8º e 9º). O eixo é a **ilegalidade da técnica de obtenção**: medida sem autorização judicial prévia e fundamentada, sem demonstração de subsidiariedade (indispensabilidade), com excesso de prazo ou de escopo, ou desvirtuada em **flagrante preparado** e **atuação de agente provocador** — culminando no pedido de **desentranhamento** com extensão às derivadas (CPP, art. 157 e §§).

> **Divisão de trabalho (não duplicar):** esta skill cuida do **vício da técnica investigativa especial** — a infiltração ou a ação controlada nasceu sem autorização, extrapolou os limites da ordem ou provocou o crime. O ataque à **interceptação/quebra de sigilo** (Lei 9.296/96, LC 105/2001, Marco Civil, extração de celular) mora na skill `impugnacao-interceptacao-sigilo`; o **vício de integridade** do material colhido (hash, lacre, dados brutos, elo a elo do art. 158-B) mora na skill `impugnacao-cadeia-custodia`. A **defesa do próprio tipo do art. 2º** da Lei 12.850 (requisitos estruturais, desclassificação) é da skill `defesa-organizacao-criminosa`. **Os vícios se cumulam, mas em capítulos distintos da mesma peça** — misturá-los enfraquece todos.

> **Lição central:** a ilegalidade de um meio especial **não se afirma em abstrato, demonstra-se na linha do tempo da operação** — representação, decisão judicial, escopo autorizado, prazos e prorrogações, relatório circunstanciado e cada ato do agente. E a fronteira decisiva é uma só: o agente **observou e documentou** o crime que já ia acontecer (flagrante esperado, lícito) ou **induziu** o alvo a praticá-lo (flagrante preparado, Súmula 145 do STF — prova imprestável)?

> **Cautela de vigência:** confira a redação dos arts. 3º, II e III, 8º, 9º, 10 a 14 e 10-A a 10-D da Lei 12.850/2013 via `lei-e-sumula` antes de citar — a Lei 13.964/2019 (Pacote Anticrime) e a Lei 13.441/2017 mexeram no tema, e o prazo de infiltração (seis meses, renovável) e as balizas da infiltração virtual têm redação própria. Precedente sobre agente provocador, alcance do "agente disfarçado" (figura introduzida pela Lei 13.964/2019 na Lei de Drogas e no Estatuto do Desarmamento — confira os dispositivos exatos via `lei-e-sumula`, [NÃO VERIFICADO]), limites da infiltração virtual ou consequência do excesso de escopo: **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até aprovação no `verificador-citacoes` — nenhum número de acórdão entra de memória.

## O instituto e a base legal — o mapa das técnicas

Cada meio especial tem regime próprio. Errar o regime é errar a tese:

| Medida | Base legal | Ordem judicial prévia? | Balizas principais |
|---|---|---|---|
| Ação controlada / flagrante diferido | Lei 12.850/2013, art. 8º | **Não** — mas **comunicação prévia** ao juiz, que estabelece limites (art. 8º, §1º) | Retardar a intervenção para colher mais provas; distribuição sigilosa (§2º); acesso restrito até o encerramento (§3º); auto circunstanciado ao término (§4º) |
| Entrega vigiada (modalidade de ação controlada) | Lei 12.850/2013, art. 9º; Convenções de Palermo e de Mérida | Idem art. 8º; cooperação internacional quando transnacional | Vigilância do trânsito de bens/valores/pessoas sem apreensão imediata |
| Infiltração de agentes (policial) | Lei 12.850/2013, arts. 10 a 14 | **Sempre — autorização judicial prévia, circunstanciada, motivada e sigilosa** (art. 10) | Requerida por delegado (ouvido o MP) ou pelo MP; prazo de **6 meses, renovável**, comprovada a necessidade (art. 10, §3º) |
| Infiltração virtual (meio cibernético — orcrim) | Lei 12.850/2013, arts. 10-A a 10-D (inseridos pela Lei 13.964/2019) | **Sempre** — autorização judicial prévia e circunstanciada | Prazo de **6 meses, renovável, com teto de 720 dias** (art. 10-A, §4º); registro/preservação dos atos eletrônicos; confira redação e limites via `lei-e-sumula` |
| Infiltração virtual (crimes contra criança/adolescente) | ECA, arts. 190-A a 190-E (Lei 13.441/2017) | **Sempre** — autorização judicial, requerimento do MP ou representação do delegado | Prazo de **90 dias**, renovável até o limite legal; hipóteses taxativas |
| "Agente disfarçado" (venda/aquisição simulada) | Legislação esparsa (ex.: Estatuto do Desarmamento e Lei de Drogas, redações via `lei-e-sumula`) | Regra própria — **não confundir** com o agente infiltrado da 12.850 | Regime e limites controvertidos — pesquisar [NÃO VERIFICADO] |

**As balizas comuns a toda infiltração (art. 10 e §§):**
1. **Subsidiariedade (indispensabilidade):** a infiltração só é admitida se a prova **não puder ser produzida por outros meios disponíveis** (art. 10, §2º) — é *ultima ratio*, nunca a primeira diligência;
2. **Autorização judicial prévia, circunstanciada, motivada e sigilosa** (art. 10, *caput*) — sem decisão fundamentada, a operação é ilegal;
3. **Prazo determinado** — até **6 meses**, renovável mediante comprovação da necessidade (art. 10, §3º), com o total submetido a controle;
4. **Delimitação do alcance** das tarefas do agente e dos limites da atuação;
5. **Relatório circunstanciado** ao final (art. 10, §4º — findo o prazo, apresentado ao juiz, que cientifica o MP), somado ao **relatório de atividade requisitável a qualquer tempo** durante a operação (art. 10, §5º), pilares do controle judicial e ministerial.

O art. 13 fixa a **fronteira de responsabilidade do agente**: ele não pratica crime no exercício legítimo da infiltração quando guarda proporcionalidade com a finalidade — mas **responde pelos excessos**. É desse dispositivo que nasce a distinção defensiva entre a observação lícita e a provocação (agente provocador).

## Mapa — situação concreta → providência → onde aprofundar

| Na operação surgiu... | Providência defensiva | Onde aprofundar |
|---|---|---|
| Infiltração sem decisão judicial prévia (ou decisão genérica) | Ilicitude da obtenção + desentranhamento (art. 157) | Capítulo III desta skill |
| Infiltração que foi a **primeira** diligência, sem esgotar outros meios | Tese de falta de subsidiariedade (art. 10, §2º) | Capítulo III |
| Operação que passou dos 6 meses sem renovação motivada | Excesso de prazo → prova a partir do termo viciada | Capítulo III |
| Agente **induziu** o alvo ao crime | Flagrante preparado (Súmula 145/STF) — atipicidade/imprestabilidade | Teses típicas, abaixo |
| Ação controlada **sem comunicação** prévia ao juiz | Vício do art. 8º, §1º — desentranhamento do que dela decorreu | Capítulo III |
| Interceptação, quebra de sigilo ou celular usados **junto** | Capítulo próprio, não nesta skill | Skill `impugnacao-interceptacao-sigilo` |
| Dúvida sobre integridade do material colhido pelo agente | Capítulo próprio de cadeia de custódia | Skill `impugnacao-cadeia-custodia` |
| Ataque ao **tipo** de orcrim (4 agentes, estabilidade…) | Não é vício de prova — é mérito da tipicidade | Skill `defesa-organizacao-criminosa` |

## Cabimento — momento e veículo da impugnação

Prova ilícita é matéria de ordem pública, arguível a qualquer tempo — mas o veículo e a força mudam com o momento:

| Momento | Veículo | Observação |
|---|---|---|
| Investigação (operação em segredo de justiça) | Petição de **habilitação e acesso** aos autos apartados da medida + relatório circunstanciado | SV 14: acesso ao já documentado; sem a linha do tempo não há auditoria |
| **Resposta à acusação (arts. 396/396-A)** | **Preliminar** de ilicitude + desentranhamento | O momento ideal — 10 dias, contagem do art. 798, §1º |
| Curso da instrução | **Petição incidental** (art. 157), assim que a defesa acesse decisão e relatórios | Não espere as alegações finais |
| Alegações finais / memoriais | Preliminar + subsidiária de imprestabilidade; flagrante preparado como **absolvição** (atipicidade) | Força reduzida se a prova já operou na convicção |
| Sentença condenatória | **Preliminar de apelação** + mérito | Prequestionar para REsp/RE |
| Flagrante preparado / prova ilícita como lastro único da denúncia ou da prisão | **Habeas corpus** | Trancamento/exclusão — ver skill própria de HC |
| Rito do júri | Arguir **antes da pronúncia** | Relato do agente exibido em plenário não se "desouve" |

**Os três pilares da impugnação** (sem qualquer um, a peça não fica de pé): (1) **vício documentado** na linha do tempo da operação, com fl./evento; (2) **violação de regra da técnica especial** — qual requisito legal faltou, em qual decisão ou ato; (3) **prejuízo concreto** — a centralidade da prova viciada na imputação (quanto mais central, menos socorre a acusação o art. 563).

## Auditoria da operação — linha do tempo ato a ato

Monte a cronologia completa antes de redigir — cada linha vira parágrafo do capítulo II da peça:

| Marco | O que procurar nos autos | Vício potencial |
|---|---|---|
| Origem / notícia-crime | O que existia **antes** do pedido? Diligências prévias de corroboração? | Denúncia anônima como fundamento único; *fishing expedition* |
| Representação/requerimento | Indispensabilidade justificada? Outros meios testados? Alcance da atuação delimitado? | Subsidiariedade descumprida (art. 10, §2º); pedido genérico |
| **Decisão judicial de infiltração** | Fundamentação **concreta e própria**, circunstanciada e sigilosa (art. 10)? Prazo fixado? Limites das tarefas? | Ausência de decisão; fundamentação genérica; *per relationem* sem base empírica |
| Ação controlada — comunicação prévia | Houve comunicação ao juiz **antes** do retardo (art. 8º, §1º)? Limites fixados? | Flagrante diferido sem comunicação = ação controlada ilegal |
| Execução da infiltração | Os atos do agente batem com o escopo e o período autorizados? | Excesso de escopo (alvos, fatos, período além do autorizado) |
| **Cada renovação** | Decisão própria, com comprovação renovada da necessidade (art. 10, §3º)? Total dentro do teto? | "Copia e cola"; excesso de prazo dos 6 meses sem motivação nova |
| Conduta do agente no fato imputado | O agente **observou** conduta preexistente ou **induziu/instigou** o alvo? Quem propôs, forneceu meios, marcou o encontro? | **Flagrante preparado** (Súmula 145/STF); agente provocador; excesso (art. 13) |
| Relatório circunstanciado | Relatório final (art. 10, §4º) nos autos ao término, e relatórios de atividade (§5º) durante a operação, com controle do MP e do juiz? | Ausência de relatório; controle judicial inexistente na operação |
| Autos apartados e sigilo | Medida documentada em apenso próprio e sigiloso? | Extravio de decisões = trajeto indemonstrável |
| Acesso da defesa | Defesa recebeu decisão, relatórios e limites da operação? | Cerceamento — e ponte para a auditoria de integridade (skill `impugnacao-cadeia-custodia`) |

Preencha cada linha com **status** (documentado / ausente / contraditório) e **fl./evento**. A lacuna se prova pela ausência: aponte a folha onde a decisão de infiltração ou a comunicação da ação controlada deveria estar e não está.

## Estrutura forense da peça

Adapte o cabeçalho ao veículo (preliminar de resposta à acusação, incidente, preliminar recursal). Esqueleto do incidente:

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO] (e apenso da medida sigilosa nº [Nº])

[NOME], já qualificado(a), por seu(sua) advogado(a) (procuração anexa), vem
arguir a ILICITUDE DA PROVA obtida por [infiltração de agentes / infiltração
virtual / ação controlada — entrega vigiada], com pedido de DESENTRANHAMENTO
(CPP, art. 157), pelas razões que seguem.

I — DA PROVA IMPUGNADA E DE SUA CENTRALIDADE NA IMPUTAÇÃO
[Identificar a medida (autos apartados, período, escopo, fl./evento) e
demonstrar o peso do material na denúncia: se a imputação se ergue sobre o
relato do agente ou sobre o flagrante retardado, o desentranhamento a esvazia.]

II — DA LINHA DO TEMPO DA OPERAÇÃO
[Transcrever a auditoria: origem, representação, decisão judicial, escopo,
execução, cada renovação, conduta do agente no fato, relatório circunstanciado
e acesso da defesa — com fl./evento.]

III — DOS VÍCIOS DE OBTENÇÃO
[Um subtítulo afirmativo por vício, sempre com fl./evento. Exemplos:]
   III.1 — A infiltração operou sem autorização judicial prévia e
           circunstanciada (Lei 12.850/2013, art. 10)
   III.2 — A infiltração foi a primeira diligência: faltou subsidiariedade
           (art. 10, §2º — indispensabilidade não demonstrada)
   III.3 — A operação extrapolou os 6 meses / o escopo sem renovação
           motivada (art. 10, §3º)
   III.4 — A ação controlada não foi comunicada previamente ao juízo
           (art. 8º, §1º)

IV — DO FLAGRANTE PREPARADO E DO AGENTE PROVOCADOR
[Demonstrar, com o relato do agente e a cronologia do fato, que a conduta foi
INDUZIDA (quem propôs, forneceu meios, marcou o encontro), e não meramente
observada. Súmula 145 do STF: a preparação torna o crime impossível de se
consumar e a prova imprestável. Distinguir do flagrante esperado (lícito) e do
excesso do agente (art. 13).]

V — DA ILICITUDE E DA CONTAMINAÇÃO DAS DERIVADAS
[CF, art. 5º, LVI; CPP, art. 157: inadmissibilidade e desentranhamento.
Mapear a árvore da contaminação (§1º) — denúncia, buscas, prisões e laudos que
só existiram por causa da operação viciada — e desmontar antecipadamente a
fonte independente e a descoberta inevitável (§§1º e 2º).]

VI — DOS PEDIDOS
a) o reconhecimento da ILICITUDE da prova obtida pela medida [X] e/ou a
   ATIPICIDADE decorrente do flagrante preparado;
b) o DESENTRANHAMENTO da prova e das DERIVADAS do item V (art. 157, caput e
   §1º), com inutilização após a preclusão (§3º);
c) subsidiariamente, a declaração de imprestabilidade do material para
   qualquer juízo condenatório;
d) o acesso da defesa à INTEGRALIDADE da decisão, das renovações, do relatório
   circunstanciado e dos registros da operação (SV 14);
e) sendo o flagrante preparado o lastro único, a ABSOLVIÇÃO (CPP, art. 386, III).

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [ADVOGADO(A)], OAB/[UF] nº [NÚMERO]
```

**Anexos:** linha do tempo referenciada por fl./evento; cópia da decisão e das renovações; comprovante do pedido de acesso à íntegra (e da negativa, se houver); trechos do relatório do agente que evidenciem a indução.

## Teses típicas

**Contra a infiltração (arts. 10 a 14):**
- **Sem autorização judicial prévia e circunstanciada não há infiltração lícita.** O art. 10 exige decisão fundamentada, motivada e sigilosa **antes** da atuação do agente — infiltração de fato, sem ordem, é prova ilícita a desentranhar.
- **Infiltração como primeira diligência viola a subsidiariedade.** O art. 10, §2º, condiciona a medida à impossibilidade de prova por outros meios: investigação que **começa** pelo agente infiltrado inverte a lógica de *ultima ratio*.
- **Excesso de prazo dos 6 meses sem renovação motivada.** O art. 10, §3º, admite prorrogação, mas com comprovação **renovada** da necessidade a cada período; atuação além do prazo autorizado macula a prova a partir do termo.
- **Excesso de escopo é atuação fora da ordem.** O agente autorizado a apurar o fato A que produz prova do fato B, ou alcança alvos não delimitados, extrapola os limites da decisão — o material excedente segue a régua do desvio de finalidade (pesquisar recorte atual, [NÃO VERIFICADO]).
- **Ausência de relatório circunstanciado inviabiliza o controle.** O relatório final ao término da infiltração (art. 10, §4º) e o relatório de atividade requisitável a qualquer tempo pelo juiz e pelo MP (art. 10, §5º) são condição de legitimidade; operação sem controle documental é caixa-preta.
- **Excesso do agente (art. 13) contamina a prova.** O agente responde pelos atos que ultrapassam a proporcionalidade com a finalidade — e o crime por ele induzido não pode lastrear condenação do alvo.

**Contra a infiltração virtual:**
- **Infiltração virtual sem decisão prévia e sem hipótese legal é ilícita.** Os arts. 10-A a 10-D da Lei 12.850 e os arts. 190-A a 190-E do ECA (Lei 13.441/2017) têm hipóteses e prazos taxativos — atuação em meio cibernético fora dessas balizas é prova viciada (confira redação e limites via `lei-e-sumula`; recorte jurisprudencial [NÃO VERIFICADO]).
- **Perfil falso operado sem ordem não é diligência válida.** A criação e o uso de identidade virtual pelo agente pressupõem a autorização legal específica; sem ela, o material colhido no ambiente digital é ilícito — e sua **integridade** ainda corre pela skill `impugnacao-cadeia-custodia`.

**Contra a ação controlada / entrega vigiada (arts. 8º e 9º):**
- **Flagrante diferido sem comunicação prévia ao juiz é ilegal.** O art. 8º, §1º, exige comunicação **prévia** ao juízo, que fixará os limites; retardar a intervenção sem esse controle desnatura a ação controlada e contamina o flagrante subsequente.
- **Entrega vigiada exige base e, se transnacional, cooperação regular.** O art. 9º e as convenções internacionais pressupõem trânsito vigiado com autorização e, no plano internacional, cooperação formal — a ausência é vício autônomo.

**Flagrante preparado × esperado (o coração da defesa):**
- **Flagrante preparado é crime impossível e prova imprestável (Súmula 145/STF).** Quando o agente **induz** o alvo à prática e ao mesmo tempo torna a consumação impossível pela vigilância montada, não há crime a punir — a tese é de **atipicidade/absolvição**, não só de exclusão de prova. Demonstre quem teve a **iniciativa**: quem propôs, forneceu meios, marcou local e hora.
- **Flagrante esperado é lícito — não gaste a tese à toa.** Se o agente apenas **observou e documentou** conduta que já ia acontecer (o alvo já traficava, já vendia a arma), o flagrante é válido; a Súmula 145 não socorre. Separe com rigor indução de observação: confundir os dois desmoraliza a peça.
- **Nos crimes permanentes, cuidado com a régua.** Em tráfico (posse/guarda) e em orcrim (integrar), a permanência já configurada permite prisão a qualquer tempo — a provocação relevante é a que induz **ato novo** (uma venda que não ocorreria), não a que flagra o estado permanente. Delimite exatamente o ato imputado.

## Erros comuns e pegadinhas

- **Confundir flagrante preparado com flagrante esperado.** É o erro que mais custa: atacar como provocado um flagrante que foi apenas observado convida ao indeferimento e queima credibilidade. A pergunta é sempre: **de quem partiu a iniciativa do ato imputado?**
- **Confundir agente infiltrado com "agente disfarçado".** A infiltração da 12.850 tem regime rígido (autorização judicial, prazo, relatório); a figura do agente disfarçado em venda/aquisição simulada (legislação esparsa) tem outro regime e outros limites — aplicar uma régua no lugar da outra erra a tese (confirme via `lei-e-sumula`, [NÃO VERIFICADO]).
- **Tratar ação controlada como se exigisse autorização judicial prévia.** O art. 8º pede **comunicação** prévia ao juiz (que fixa limites), não uma decisão autorizativa como a da infiltração. Fundar a nulidade na "falta de autorização" da ação controlada, quando a lei pede comunicação, entrega o indeferimento — ataque a **ausência da comunicação** e dos limites.
- **Presumir ilícito todo encontro fortuito da operação.** Fato diverso descoberto durante infiltração lícita pode ser aproveitado; a tese forte é o **excesso de escopo dirigido** desde a origem a fato diverso do autorizado — pesquisar recorte atual [NÃO VERIFICADO].
- **Misturar obtenção com integridade.** Falta de autorização da infiltração é um capítulo; hash ausente e gap de custódia no material colhido são outro (skill `impugnacao-cadeia-custodia`). Cumular sim, fundir nunca.
- **Misturar o vício da técnica com o mérito do tipo.** A ilicitude da infiltração vive nesta skill; a atipicidade do art. 2º (4 agentes, estabilidade, estrutura, divisão de tarefas) vive na skill `defesa-organizacao-criminosa`. São frentes distintas — não empilhe uma na outra.
- **Pedir "nulidade do processo" em vez de desentranhamento.** O remédio do art. 157 é a exclusão da prova e das derivadas; anulação de atos é pedido diverso. No flagrante preparado, some o pedido de **absolvição** (art. 386, III) — atipicidade não é mera nulidade de prova.
- **Esquecer derivadas e inutilização.** Desentranhar o relato do agente e deixar a denúncia, as buscas e as prisões que dele nasceram é vitória de papel (art. 157, §§1º e 3º).
- **Deixar para as alegações finais.** Sem preclusão formal, mas com custo real: o juiz decide com o relato do agente na cabeça. Argua no primeiro momento e **renove** em memoriais e apelação.
- **Errar prazo e endereçamento do veículo.** Prazo processual penal exclui o dia do começo e inclui o do vencimento, contínuo e peremptório (CPP, art. 798, §1º); resposta à acusação em 10 dias (art. 396). **Defensoria: prazo em dobro e intimação pessoal** (LC 80/94). A petição vai ao **juízo da causa** (com referência ao apenso sigiloso); ilegalidade flagrante → HC ao tribunal.
- **Ignorar a competência e o segredo de justiça.** Operações de orcrim tramitam em autos apartados e sigilosos; requerer acesso na forma correta (SV 14, sem quebrar o sigilo de terceiros) é pré-condição da auditoria — pedido atabalhoado de acesso pode ser indeferido.

## Antes de protocolar

- [ ] Linha do tempo completa (origem → decisão → escopo → renovações → conduta do agente → relatório → acesso) com status e fl./evento por marco?
- [ ] Regime correto identificado (infiltração × infiltração virtual × ação controlada × entrega vigiada × agente disfarçado) — e a régua legal certa aplicada a cada um?
- [ ] Autorização judicial prévia e circunstanciada (art. 10) auditada decisão a decisão, e a **comunicação prévia** da ação controlada (art. 8º, §1º) verificada?
- [ ] Subsidiariedade (art. 10, §2º), prazo dos 6 meses/renovações (art. 10, §3º) e relatório circunstanciado ao final (art. 10, §4º) + relatórios de atividade (§5º) checados?
- [ ] Flagrante preparado × esperado decidido com base em **quem teve a iniciativa** do ato imputado — e, sendo preparado, pedido de absolvição (Súmula 145/STF; art. 386, III) somado ao desentranhamento?
- [ ] Vício da técnica separado do vício de integridade (skill `impugnacao-cadeia-custodia`) e do vício de interceptação/sigilo (skill `impugnacao-interceptacao-sigilo`), em capítulos distintos?
- [ ] Derivadas mapeadas com nexo causal + pedido de inutilização (art. 157, §§1º e 3º)?
- [ ] Pedidos em ordem sucessiva (ilicitude/atipicidade → desentranhamento → imprestabilidade), sem afirmação de nulidade automática?
- [ ] Momento/veículo correto, prazo pelo art. 798, §1º (dobra da Defensoria, quando o caso)?
- [ ] Tese integrada ao inventário do agente `mapa-nulidades` (a ilicitude conversa com as demais preliminares)?
- [ ] Dispositivos conferidos via `lei-e-sumula`; precedentes pesquisados via `jurisprudencia-stj-stf`, marcados [NÃO VERIFICADO] e aprovados no `verificador-citacoes`?

## Lembretes finais

- **A fronteira é a iniciativa, não o disfarce.** Agente disfarçado que observa é lícito; agente que provoca é ilícito. Toda a peça gira em torno de reconstruir de quem partiu o ato imputado.
- **Autorização e prazo primeiro; provocação depois.** Se a infiltração já nasceu sem ordem ou fora do prazo, a prova cai por ilicitude de obtenção antes mesmo de se discutir provocação — organize os capítulos do vício formal ao material.
- **Cumule frentes, não as funda.** Ilicitude da técnica (esta skill), integridade do material (`impugnacao-cadeia-custodia`), interceptação/sigilo (`impugnacao-interceptacao-sigilo`) e mérito do tipo (`defesa-organizacao-criminosa`) são capítulos autônomos da mesma defesa.
- **Nenhum número de acórdão de memória.** Agente provocador, excesso de escopo, infiltração virtual e alcance do agente disfarçado são temas em movimento — tudo pesquisado e verificado antes da entrega.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** — a escolha das teses, a leitura dos autos e o risco são do(a) advogado(a).

## Apoie-se em

- **Skill `impugnacao-interceptacao-sigilo`** — quando a operação também usou interceptação telefônica/telemática, quebra de sigilo bancário/fiscal ou extração de celular: o ataque a esses meios corre por lá, em capítulo próprio da mesma peça.
- **Skill `impugnacao-cadeia-custodia`** — quando, além do vício da técnica, a **preservação** do material colhido pelo agente (hash, lacre, dados brutos, elo a elo do art. 158-B) estiver comprometida: a auditoria e a peça de integridade correm por lá.
- **Skill `defesa-organizacao-criminosa`** — o mérito do tipo do art. 2º da Lei 12.850 (4 agentes, estabilidade, estrutura ordenada, divisão de tarefas, desclassificação e bis in idem): frente distinta da ilicitude da prova especial.
- **BP `cadeia-custodia-prova-digital`** — regimes por tipo de prova digital e atributos de idoneidade, insumo quando o agente infiltrado colhe material digital.
- **BP `peticao-criminal`** — padrão estrutural da petição criminal (endereçamento, qualificação, pedidos) que sustenta o esqueleto acima.
- **Agente `mapa-nulidades`** — integra a ilicitude ao inventário geral de nulidades do processo, ordenando as preliminares por força e momento.
- **Agente `lei-e-sumula`** — confirmação da redação vigente dos arts. 8º, 9º, 10 a 14 e 10-A a 10-D da Lei 12.850, dos arts. 190-A a 190-E do ECA e da Súmula 145 do STF.
- **Agente `jurisprudencia-stj-stf`** — pesquisa do estado atual: agente provocador, excesso de escopo, limites da infiltração virtual e alcance do agente disfarçado.
- **Agente `verificador-citacoes`** — gate obrigatório de toda lei, súmula, tema e precedente antes da entrega.

**Padrão de redação:** aplique SEMPRE a skill `redacao-persuasiva-criminal` ao redigir a peça final — teoria do caso, subtítulos afirmativos, subsunção explícita e persuasão são o que transforma a auditoria da operação em impugnação que convence.
