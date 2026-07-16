---
name: obtencao-prova-exterior-defesa
description: >-
  Use quando a DEFESA precisa produzir ou trazer prova do exterior — documento, testemunha, laudo,
  registro bancário/societário — pelos canais de cooperação (auxílio direto, rogatória ativa) ou por
  investigação defensiva transnacional lícita, cuidando de legalização (Apostila de Haia), tradução
  juramentada, admissibilidade e paridade de armas. Gatilhos: prova no exterior a favor da defesa,
  rogatória ativa da defesa, oitiva de… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, cooperacao-internacional, prova, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-obtencao-prova-exterior-defesa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["obtencao-prova-exterior-defesa", "obtencao prova", "exterior defesa"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Obtenção Defensiva de Prova no Exterior (cooperação a favor da defesa — CF art. 5º, LV e LVI; CPP arts. 780-790; Res. CNJ 481/2022)

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

Esta skill é o **playbook estratégico da DEFESA** para produzir ou trazer prova que está fora do Brasil — a favor do réu/investigado. Os *canais* neutros (auxílio direto/MLAT e carta rogatória) são descritos nas skills próprias (`auxilio-direto-cooperacao-penal-mlat` e `carta-rogatoria-penal-exequatur-stj`); aqui o foco é **usá-los a favor**: o que pedir, como legalizar, como garantir **admissibilidade** e como reequilibrar a **paridade de armas**, já que a cooperação penal costuma ser desenhada para a acusação.

> **Lição central:** a assimetria é real — a máquina cooperativa (MP, Autoridade Central, tratados) foi montada para a persecução. A defesa que quer prova exculpatória no exterior tem de **provocar o canal** (não pode passivamente esperar), escolher o **veículo certo** (auxílio direto x rogatória), **legalizar e traduzir** corretamente e **blindar a admissibilidade** desde a origem. Prova estrangeira mal legalizada é prova que o juiz ignora.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 780 a 790 do CPP**, da **Resolução CNJ nº 481/2022** (tramitação da cooperação) e dos **tratados aplicáveis ao país de destino** (MLAT bilateral, Convenção de Palermo, Convenção de Mérida, Protocolo de San Luis/Mercosul, Convenção Interamericana sobre Cartas Rogatórias). Confira também a vigência da **Convenção da Apostila de Haia** para o país envolvido e súmulas/temas via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de fundamentar qualquer peça.

## Base legal

- **CF, art. 5º, LV** — contraditório e ampla defesa (fundamento da paridade de armas na produção de prova); **LVI** — inadmissibilidade da prova ilícita (limite também para a prova estrangeira).
- **CPP, arts. 780-790** — cartas rogatórias em matéria penal (expedição, requisitos, tramitação por via diplomática/autoridade central).
- **CPP, art. 368** — citação por rogatória (paralelo procedimental útil de tramitação).
- **CPC, arts. 26-41** (aplicação subsidiária) — cooperação internacional, auxílio direto, autoridade central, rol do art. 27; **arts. 960-965** — homologação e concessão de exequatur (para prova *vinda* de fora que dependa de ato decisório estrangeiro).
- **Resolução CNJ nº 481/2022** — disciplina a tramitação dos pedidos de cooperação jurídica internacional no Judiciário brasileiro. [conferir vigência/número atualizado]
- **Convenção da Apostila de Haia** (Dec. 8.660/2016) — dispensa a legalização consular entre países signatários, substituída pela **Apostila**. Para país **não signatário**, segue-se a **legalização consular** tradicional.
- **Tratados de auxílio mútuo (MLAT)** e convenções multilaterais (Palermo — Dec. 5.015/2004; Mérida — Dec. 5.687/2006) — base para o **auxílio direto**, canal mais rápido que a rogatória.
- **Autoridade Central:** em regra o **DRCI/Ministério da Justiça** (SENAJUS); confira a autoridade central designada no tratado específico.

## O primeiro cruzamento — auxílio direto x carta rogatória

A escolha do veículo é a decisão mais importante e define prazo, custo e admissibilidade.

| Critério | Auxílio direto (MLAT) | Carta rogatória ativa |
|---|---|---|
| Natureza | Pedido de **cooperação administrativa/judicial** entre autoridades centrais | **Comissão judicial** a autoridade estrangeira |
| Quando cabe | Ato **sem juízo de valor** ou que a autoridade estrangeira pode praticar com seus próprios poderes (ex.: obter documento, registro, quebra segundo a lei local) | Ato que exige a **prática de ato judicial** no estrangeiro conforme a *lex diligentiae* |
| Velocidade | Em regra **mais rápido** (autoridade central) | Em regra **mais lento** (via diplomática/central + juízo estrangeiro) |
| Iniciativa da defesa | A defesa **requer ao juízo/autoridade central** que provoque o pedido | A defesa **requer ao juízo** a expedição da rogatória |
| Base | Tratado bilateral/multilateral | CPP arts. 780-790 + tratado/reciprocidade |

> **Regra prática de escolha:** havendo tratado de auxílio mútuo com o país de destino e sendo o ato compatível, **prefira o auxílio direto** — é mais célere e menos formal. Sem tratado adequado, ou sendo indispensável ato tipicamente jurisdicional no estrangeiro (ex.: oitiva formal com compromisso perante juiz local), vá de **rogatória ativa**. Detalhe cada canal nas skills `auxilio-direto-cooperacao-penal-mlat` e `carta-rogatoria-penal-exequatur-stj`.

## Roteiro estratégico da defesa — do plano à admissibilidade

### 1) Mapear a prova e o país
- **O que** existe no exterior (documento, testemunha, laudo, registro societário/bancário, extrato, filmagem, e-mail em provedor estrangeiro)?
- **Onde** (país e, se possível, cidade/órgão custodiante)?
- **Por que é exculpatória/relevante** (relevância e pertinência — a defesa terá de justificar o pedido ao juízo).
- **Há tratado** com o país? Ele **é signatário da Apostila de Haia**?

### 2) Escolher o veículo (tabela acima) e provocar o canal
- **Petição fundamentada ao juízo do processo** requerendo a expedição da rogatória **ou** a provocação do auxílio direto via Autoridade Central, com **quesitos claros** e indicação precisa do ato pretendido.
- Requerer, quando cabível, a **participação da defesa** no ato no exterior (presença/formulação de perguntas na oitiva), como corolário do contraditório.

### 3) Legalizar e traduzir (o passo que mais reprova prova)
- **País signatário da Apostila de Haia:** o documento estrangeiro recebe a **Apostila** da autoridade competente do país de origem — dispensa consularização.
- **País não signatário:** **legalização consular** (reconhecimento pela repartição consular brasileira no país de origem).
- **Tradução:** documento em língua estrangeira deve vir com **tradução por tradutor público juramentado** (CPC art. 192, par. único, aplicável subsidiariamente) para ser juntado e valorado — sem tradução juramentada, a defesa arrisca a inadmissão ou a desconsideração.

### 4) Blindar a admissibilidade desde a origem
- **Licitude na origem:** a prova deve ser obtida **conforme a lei do país onde é produzida** (*locus regit actum*) **e** compatível com o **devido processo brasileiro** (CF art. 5º, LVI). Prova exculpatória obtida por meio ilícito no estrangeiro contamina-se igualmente.
- **Cadeia de custódia:** documentar origem, custodiante, forma de coleta e trânsito do elemento — dialoga com as skills `impugnacao-cadeia-custodia` e `preservacao-prova-digital-defesa` (para dados/registros eletrônicos em provedor estrangeiro).
- **Contraditório:** garantir que a prova ingresse com oportunidade de manifestação da outra parte; prova produzida à revelia do contraditório é frágil.

### 5) Antecipar a urgência (prova perecível/testemunha que sai do país)
- Havendo risco de perecimento (testemunha idosa/doente, documento que será destruído, dado que expira), avaliar **produção antecipada de prova** (CPP art. 366, por analogia, e a lógica da skill `producao-antecipada-provas`) **combinada** com o canal internacional, requerendo urgência ao juízo e à Autoridade Central.

## Teses típicas da defesa (paridade de armas)

1. **Direito à cooperação em favor da defesa.** A cooperação jurídica internacional **não é monopólio da acusação**: o contraditório e a ampla defesa (CF art. 5º, LV) impõem que o juízo **provoque o canal** também para prova exculpatória. Negar sem fundamento idôneo é **cerceamento de defesa**.
2. **Relevância presumida a favor do réu.** Diante de dúvida sobre a pertinência de prova exculpatória no exterior, resolve-se **pro reo**; o indeferimento exige fundamentação concreta de impertinência/protelação, não mera conveniência.
3. **Participação no ato no exterior.** A defesa tem direito a **formular perguntas/quesitos** na oitiva rogada e a ser **cientificada** da data do ato, sob pena de nulidade por afronta ao contraditório.
4. **Igualdade de acesso à Autoridade Central.** Se o MP obteve prova por auxílio direto, a defesa pode **exigir o mesmo canal** para diligência simétrica — a assimetria de meios viola a paridade de armas.
5. **Prova estrangeira favorável não pode ser descartada por formalismo suprível.** Falha de tradução/legalização é, em regra, **vício sanável** (abrir prazo para regularizar), não causa automática de desentranhamento — sobretudo quando a prova beneficia o réu.

## Contra-teses (acusação/juízo) e como enfrentá-las

- **"Pedido protelatório / genérico."** → Enfrentar com **especificidade**: indicar o ato exato, o custodiante, os quesitos e a **exculpatoriedade** concreta; oferecer prazo e assumir custos quando possível.
- **"Ato inútil / prova impertinente."** → Demonstrar **nexo** com a tese defensiva e o **ônus** que recai sobre a acusação (in dubio pro reo).
- **"Prova estrangeira não legalizada é inadmissível."** → Sustentar a **suprimibilidade do vício** (abertura de prazo para Apostila/tradução) antes do desentranhamento; distinguir vício **formal** (sanável) de **ilicitude** (insanável).
- **"Falta de reciprocidade / ausência de tratado."** → Invocar a **cooperação por reciprocidade** e as convenções multilaterais aplicáveis; a ausência de tratado bilateral não veda a rogatória (CPP arts. 780-790).

## Súmulas, precedentes e temas (sob o Citation Gate — conferir em `jurisprudencia-stj-stf`)

> **Regra do gate:** NÃO cite número de HC/REsp/RE, informativo ou tema de memória. Os itens abaixo são **pontos de pesquisa** a confirmar antes de usar. Prefira ensinar a **tese e o dispositivo** a arriscar um acórdão.

- **Competência do STJ** para conceder **exequatur a cartas rogatórias** e **homologar sentença estrangeira** (CF, art. 105, I, "i") — relevante quando a prova depende de ato decisório estrangeiro a ser reconhecido no Brasil. [dispositivo constitucional — citar com certeza]
- **Prova ilícita e sua derivação** (teoria dos frutos da árvore envenenada — CPP art. 157) aplicada também à prova produzida no exterior. [tese/dispositivo — citar; precedentes específicos NÃO VERIFICADOS, conferir]
- Jurisprudência do **STJ/STF sobre nulidade por ausência de intimação da defesa** quanto ao ato rogado (oitiva no exterior) e sobre **exigência ou dispensa de tradução juramentada**. [NÃO VERIFICADO — conferir número/informativo em `jurisprudencia-stj-stf`]
- Entendimento sobre **cabimento de auxílio direto x rogatória** conforme a natureza do ato (com/sem juízo de delibação). [NÃO VERIFICADO — conferir]
- Disciplina infralegal atual da tramitação (**Resolução CNJ 481/2022** e portarias do DRCI). [conferir número/vigência]

## Erros comuns / anti-padrões

- **Escolher o veículo errado** (rogatória onde bastaria auxílio direto) — perde meses de prazo.
- **Esquecer a Apostila/legalização** ou juntar documento estrangeiro **sem tradução juramentada** — prova ignorada ou desentranhada.
- **Não pedir a intimação da defesa** para o ato no exterior — perde o contraditório e enfraquece a prova.
- **Passividade:** esperar que o juízo/MP provoque o canal — a defesa tem de **requerer** expressamente e com quesitos.
- **Ignorar a licitude na origem** (*locus regit actum*) — prova exculpatória obtida ilicitamente lá fora também se contamina.
- **Tratar vício formal como se fosse ilicitude** — não brigar pela **regularização** (prazo) antes de aceitar o desentranhamento.
- **Não documentar a cadeia de custódia** do elemento estrangeiro — abre flanco para impugnação simétrica.
- **Perder o timing da urgência** — prova perecível/testemunha que sai do país exige produção antecipada combinada ao canal.

## Checklist da defesa

- [ ] Prova mapeada: **o quê, onde, custodiante, por que é exculpatória**?
- [ ] **Tratado** com o país verificado? País **signatário da Apostila de Haia**?
- [ ] **Veículo escolhido** com justificativa (auxílio direto x rogatória — tabela)?
- [ ] Petição ao juízo **fundamentada**, com **quesitos claros** e pedido de **provocação da Autoridade Central** quando for auxílio direto?
- [ ] Requerida a **intimação/participação da defesa** no ato no exterior (contraditório)?
- [ ] Plano de **legalização** (Apostila **ou** consularização) e **tradução juramentada** definido?
- [ ] **Licitude na origem** (*locus regit actum*) e **cadeia de custódia** documentadas?
- [ ] **Urgência** avaliada (produção antecipada se prova perecível)?
- [ ] Contra-teses de "protelação/impertinência" antecipadas com **especificidade**?
- [ ] Citações (dispositivos, súmulas, temas) **conferidas** via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de peticionar?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Skills relacionadas

- `auxilio-direto-cooperacao-penal-mlat` — o **canal** do auxílio direto (descrição neutra do procedimento).
- `carta-rogatoria-penal-exequatur-stj` — o **canal** da rogatória e do exequatur no STJ.
- `cooperacao-transferencia-pessoas-condenadas-tratado` — cooperação em execução penal (correlata, não sobre prova).
- `investigacao-defensiva-corporativa` — investigação defensiva **interna**, sem dimensão transnacional (distinta desta).
- `producao-antecipada-provas` — quando a prova é perecível.
- `preservacao-prova-digital-defesa` / `impugnacao-cadeia-custodia` — para dados/registros eletrônicos e cadeia de custódia da prova estrangeira.
- `redacao-persuasiva-criminal` — padrão de redação da petição (teoria do caso, subsunção, coesão).

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à estratégia e à redação; a decisão sobre o veículo, o conteúdo dos quesitos e a admissibilidade concreta é sempre do **advogado responsável** (CED/EAOAB; **Provimento OAB 205/2021** para atuação e comunicação).
- **Polo:** skill de **DEFESA** (`polo_acusacao: false`). O roteador deve **conferir o polo** da instituição no `company.md` — MP/assistente de acusação também podem cooperar no exterior, mas por outro enquadramento ético (CNMP); Defensoria sob a LC 80/94.
- **Citation Gate inegociável:** nenhuma súmula/precedente/tese citada de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.
- **Sigilo/LGPD:** dados do assistido e do caso não vão para repositório público; documentos estrangeiros com dados pessoais seguem a mesma cautela.
