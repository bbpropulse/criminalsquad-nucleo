---
name: cooperacao-transferencia-pessoas-condenadas-tratado
description: >-
  Use ao instruir e peticionar a TRANSFERÊNCIA DE PESSOAS CONDENADAS (repatriação para cumprir pena
  no país de nacionalidade) com base em tratado ou na Lei de Migração — instituto autônomo, distinto
  de extradição, expulsão e deportação. Cobre o requerimento à autoridade central (DRCI/MJ), o
  consentimento do condenado, a dupla incriminação, o saldo mínimo de pena, a homologação de
  sentença estrangeira no STJ (quando o Brasil… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, cooperacao-internacional, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-cooperacao-transferencia-pessoas-condenadas-tratado"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["cooperacao-transferencia-pessoas-condenadas-tratado", "cooperacao transferencia", "condenadas tratado"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Transferência de Pessoas Condenadas (Lei 13.445/2017, arts. 103-105; tratados)

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

Esta skill orienta a **instrução e o peticionamento da transferência de pessoas condenadas** — o instituto de cooperação jurídica internacional pelo qual quem foi **condenado por sentença transitada em julgado** em um Estado pode ser **transferido para cumprir a pena remanescente no Estado de que é nacional** (ou onde tem residência/vínculos), por razões **humanitárias e de ressocialização**: cumprir a pena perto da família, na própria língua e cultura. É **benefício** requerido em favor da pessoa presa — não medida coativa de entrega.

> **Lição central:** o primeiro erro é confundir institutos. **Transferência de condenado ≠ extradição ≠ expulsão ≠ deportação ≠ entrega ao TPI.** A transferência pressupõe **condenação definitiva já existente** e serve a que a pena seja executada em outro país; a **extradição** entrega alguém para ser **processado** ou para começar a cumprir pena no Estado requerente; a **expulsão/deportação** são medidas administrativas de retirada do território. Identifique o instituto certo **antes** de peticionar — cada um tem base legal, autoridade competente, rito, requisitos e efeitos distintos. Peticionar transferência no rito da extradição (ou vice-versa) é vício de origem.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Lei de Migração (Lei 13.445/2017), arts. 103 a 105**, do **Decreto 9.199/2017**, do tratado aplicável, do art. 9º do CP e da competência prevista no art. 105, I, "i", da CF. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução penal. Todo tratado, súmula, tema ou acórdão passa pelo Citation Gate. Na dúvida, **omitir vence inventar**.

> **Gate P0 do art. 112:** se a saída tocar progressão, percentual, lapso ou data de benefício após o recebimento no Brasil, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte as fontes oficiais no mesmo dia e registre regra intertemporal, alcance de decisões e revisor humano. Se faltar qualquer campo: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; não calcular nem preencher número em minuta.

## As duas direções (mapa de decisão)

```
1) ESTRANGEIRO condenado no BRASIL quer cumprir pena no país de origem?
   → TRANSFERÊNCIA "para fora". Autoridade central brasileira (DRCI/MJ)
     dialoga com o Estado de nacionalidade. Requisitos abaixo. O Brasil deixa
     de executar; entrega a execução ao outro Estado.

2) BRASILEIRO (ou residente) condenado NO EXTERIOR quer cumprir pena no BRASIL?
   → TRANSFERÊNCIA "para dentro". O Brasil RECEBE a execução. Em regra a
     sentença estrangeira é reconhecida (homologação no STJ, art. 105, I,
     'i', CF; art. 9º CP) e a pena é ADAPTADA ao ordenamento interno — o
     Brasil NÃO reexamina o mérito da condenação.
```

Antes de qualquer peça, **defina a direção** e **localize o tratado aplicável** (ou a ausência dele). A direção define quem é a autoridade central, quem consente e como a pena será executada.

## Base legal

- **Lei 13.445/2017 (Lei de Migração), arts. 103 a 105** — transferência de execução da pena e transferência de pessoa condenada; requisitos e via.
- **Decreto 9.199/2017** — regulamento da Lei de Migração (procedimento, autoridade central, instrução).
- **Tratado aplicável** — bilateral (Brasil ↔ Estado X) ou multilateral (p. ex. Convenção de Estrasburgo / OEA / CPLP, conforme o país seja parte). **O tratado é a fonte primária dos requisitos** — sobrepõe-se ao regime geral no que dispuser.
- **Art. 9º do CP** — eficácia, no Brasil, de sentença penal estrangeira (para obrigar à reparação e a efeitos civis; e, quando o Brasil recebe a execução, o reconhecimento da condenação).
- **CF, art. 105, I, "i"** — competência do **STJ** para a **homologação de sentença estrangeira**.
- **LEP (Lei 7.210/84)** — reger a execução da pena **após** o recebimento no Brasil (progressão, livramento, remição): interface com a skill `execucao-incidente-cumprimento-pena-estrangeiro-transferencia`.

## Requisitos cumulativos (checklist material)

A transferência, em regra (e conforme o tratado concreto), exige:

1. **Condenação transitada em julgado** — não cabe transferência de preso provisório/cautelar (para esse cenário, o caminho é outro).
2. **Existência de tratado** entre os Estados, **ou** acordo por reciprocidade/promessa (na falta de tratado, decisão discricionária de ambos os Estados).
3. **Dupla incriminação** — o fato que gerou a condenação deve ser **crime também no Estado de execução** (o país que vai receber a pena).
4. **Consentimento da pessoa condenada** — a transferência é **voluntária**; o consentimento deve ser **livre, expresso e informado** (ou, quando o tratado admitir, de representante legal). É requisito central e distingue o instituto da extradição.
5. **Concordância de ambos os Estados** — de execução e de condenação (é ato de dupla soberania; nenhum Estado é obrigado a aceitar).
6. **Saldo de pena mínimo remanescente** — a maioria dos tratados exige um **mínimo a cumprir** na data do pedido (frequentemente algo como um período mínimo remanescente); confira o **número exato no tratado aplicável** — não presuma.
7. **Ausência de pendências** que o tratado vede (p. ex. processos em curso não transitados no Estado de condenação, débitos, medidas incompatíveis) — checar caso a caso.

> **Regra de ouro dos requisitos:** o **tratado concreto** rege dupla incriminação, saldo mínimo, forma do consentimento e hipóteses de recusa. A Lei de Migração é o **regime geral supletivo**. Leia o tratado **antes** de afirmar qualquer requisito numérico ou prazo.

## Via e rito (quem faz o quê)

- **Autoridade central (Brasil): o Ministério da Justiça, via DRCI** (Departamento de Recuperação de Ativos e Cooperação Jurídica Internacional). É por ela que o pedido tramita e dialoga com o Estado estrangeiro.
- **Iniciativa:** o pedido pode partir **da pessoa condenada**, do Estado de condenação ou do Estado de execução (conforme o tratado). Na prática defensiva, formaliza-se **requerimento administrativo à autoridade central**, instruído com os documentos abaixo.
- **Fase administrativa primeiro:** a transferência é, na origem, **procedimento administrativo de cooperação** (autoridade central ↔ autoridade central). A judicialização ocorre nas **interfaces**: o **consentimento pode ser colhido/homologado judicialmente**; quando o Brasil **recebe** a execução, há **homologação da sentença estrangeira no STJ**; e a execução no Brasil corre depois na **VEP** competente.
- **Recebimento no Brasil e adaptação da pena:** ao receber a execução, o Brasil **reconhece a condenação** (não rejulga o mérito) e **adapta/converte** a pena e o regime ao ordenamento interno (respeitados limites do art. 75 CP e a vedação de agravamento). A execução passa a reger-se pela **LEP** — daí em diante, valem progressão, livramento e remição (ver `execucao-incidente-cumprimento-pena-estrangeiro-transferencia`).

## Metodologia forense (passo a passo)

1. **Qualificar a pessoa e a condenação:** nacionalidade/residência, país de condenação, crime, pena total, data do trânsito em julgado, saldo remanescente na data do pedido.
2. **Definir a direção** (para dentro / para fora) e **localizar o tratado** aplicável (ou constatar a ausência → via reciprocidade).
3. **Testar os requisitos** um a um (condenação definitiva, dupla incriminação, consentimento, saldo mínimo do tratado, ausência de vedações).
4. **Colher o consentimento** de forma documentada, livre e informada (traduzir/explicar consequências: a pena continua, apenas muda o país de execução).
5. **Instruir o requerimento** à autoridade central (DRCI) com os documentos (abaixo), com **tradução juramentada** do que vier em língua estrangeira.
6. **Se o Brasil recebe a execução:** encaminhar a **homologação da sentença estrangeira no STJ** e, homologada, requerer a **guia de recolhimento e a adaptação da pena** na VEP.
7. **Monitorar** a tramitação bilateral e, deferida a transferência, acompanhar a **execução no país de destino** e os benefícios cabíveis.

## Documentos a instruir

1. **Requerimento** à autoridade central (DRCI/MJ), com qualificação completa.
2. **Consentimento** da pessoa condenada, **por escrito, datado e assinado** (com prova de que foi informada das consequências).
3. **Cópia da sentença condenatória** com **certidão de trânsito em julgado**.
4. **Cálculo/atestado de pena** — pena total, tempo cumprido e **saldo remanescente**.
5. **Documento de nacionalidade/residência** (comprova o vínculo com o Estado de execução).
6. **Tradução juramentada** de todas as peças em língua estrangeira.
7. **Certidões** exigidas pelo tratado (ausência de outros processos, situação prisional, laudo de saúde quando pertinente).
8. **Procuração** e, se for o caso, autorização de familiar/representante legal.

## Teses e contra-teses (foco DEFESA / pessoa condenada)

- **Direito ao consentimento informado.** O consentimento deve ser **esclarecido**: a defesa sustenta que a pessoa entendeu que **a pena não é extinta nem reduzida pelo simples fato da transferência** — apenas muda o país de execução. Consentimento viciado (barreira de língua, ausência de intérprete) é fundamento para **refazer o ato**.
- **Finalidade ressocializadora e proximidade familiar.** Sustentar que a transferência realiza a **função ressocializadora da pena** e a **unidade familiar** — argumento humanitário central, alinhado à individualização da pena (CF, art. 5º, XLVI) e à dignidade da pessoa presa.
- **Adaptação da pena sem agravamento (transferência para dentro).** Ao receber a execução, o Brasil **não pode agravar** a pena imposta no exterior nem impor regime mais gravoso do que o cabível internamente; a adaptação é **conversão**, não novo julgamento (vedação da *reformatio in pejus* e do *bis in idem*).
- **Vedação de rejulgamento do mérito.** O Estado de execução **não reexamina** a culpa nem as provas da condenação estrangeira — apenas reconhece e executa. Impugnar tentativa de reabrir o mérito.
- **Cômputo do tempo já cumprido.** O tempo cumprido no Estado de condenação deve ser **integralmente computado** na execução do país de destino (detração internacional).
- **Contra-tese (recusa estatal).** Os Estados **não são obrigados** a aceitar; a discricionariedade é ampla, sobretudo **sem tratado**. A defesa combate recusas **imotivadas** exigindo fundamentação e demonstrando o preenchimento dos requisitos, mas deve calibrar a expectativa do cliente: **transferência não é direito subjetivo automático**.
- **Se o polo for acusatório/estatal:** esta skill é redigida **na perspectiva da pessoa condenada (defesa)**; para atuação do Estado (oposição/condições à transferência), o **roteador deve conferir o polo** e adaptar — os requisitos e vedações do tratado servem igualmente à recusa fundamentada.

## Distinção de institutos (não confundir)

| Instituto | Pressuposto | Sentido | Consentimento | Autoridade |
|---|---|---|---|---|
| **Transferência de condenado** | Condenação **definitiva** | Executar pena em outro país | **Exigido** (voluntária) | Autoridade central (DRCI) + STJ (homologação, se recebe) |
| **Extradição** | Processo **ou** condenação a cumprir no requerente | Entregar para processar/punir lá | Dispensável (pode ser coativa) | STF (extradição passiva) |
| **Expulsão** | Presença indesejada após pena | Retirar do território | Dispensável | Administrativa (MJ) |
| **Deportação** | Situação migratória irregular | Retirar do território | Dispensável | Administrativa (PF/MJ) |
| **Entrega ao TPI** | Crime de competência do TPI | Entregar à Corte internacional | Dispensável | Estatuto de Roma |

> A extradição e a cooperação **probatória** (auxílio direto/rogatória) têm skills próprias: `carta-rogatoria-penal-exequatur-stj`, `auxilio-direto-cooperacao-penal-mlat` e `conflito-jurisdicao-internacional-penal`. Esta skill trata **apenas** da transferência da **execução da pena** de pessoa **já condenada**.

## Cálculo do saldo remanescente (método — não inventar número do tratado)

O saldo de pena a cumprir na data do pedido define se o requisito do **mínimo remanescente** do tratado está satisfeito. É cálculo **determinístico** de execução:

```
saldo remanescente = pena total − tempo já cumprido (com detração)
```

- **Tempo cumprido** inclui a prisão cautelar e a detração aplicável (art. 42 CP), computados no país de condenação.
- **Comparar** o saldo com o **mínimo exigido pelo tratado concreto** (número que varia por instrumento — **conferir no texto do tratado**, não presumir).
- Para o cálculo detalhado de lapsos e benefícios **após** o recebimento no Brasil (progressão, livramento), usar a **calculadora de execução** correspondente [calculadora a implementar com testes] e a skill `execucao-progressao-regime`; esta skill **não** calcula percentuais do art. 112 — apenas o saldo bruto para aferir o requisito de admissibilidade.

## Súmulas e precedentes (sob o Citation Gate)

- **CF, art. 105, I, "i"** e **art. 9º do CP** são **dispositivos** (não jurisprudência) e podem ser citados com certeza quanto ao texto — mas **confirme a redação vigente**.
- **Qualquer** entendimento específico do STJ/STF sobre homologação de sentença estrangeira, sobre a extensão da adaptação da pena, sobre o cômputo do tempo cumprido ou sobre transferência sem tratado é **[NÃO VERIFICADO]** aqui e deve ser conferido via `jurisprudencia-stj-stf` **antes** de citar (número de HC/REsp/SEC/HDE, informativo ou tema).
- **Diretriz anti-alucinação:** prefira **ensinar a tese e apontar o dispositivo/tratado** a arriscar um número de acórdão. Precedente citado de memória é risco ético real (jurisprudência inventada por IA tem gerado sanções).

## Erros comuns / anti-padrões

- **Confundir com extradição** — pedir transferência quando o caso é entrega para processo (ou o inverso).
- **Ignorar o tratado concreto** — afirmar requisito numérico (saldo mínimo, prazo) sem ler o instrumento aplicável.
- **Consentimento sem informação** — colher assinatura sem intérprete/tradução e sem explicar que a pena continua.
- **Presumir direito automático** — vender ao cliente a transferência como certa; ela depende da concordância de dois Estados.
- **Tentar rejulgar o mérito** no Estado de execução (ou aceitar que o façam).
- **Esquecer a homologação no STJ** quando o Brasil recebe a execução.
- **Aceitar agravamento** da pena/regime na adaptação (vedado).
- **Não computar** o tempo já cumprido no exterior (detração internacional).
- **Peticionar para preso provisório** — sem condenação definitiva, não há transferência de execução.

## Checklist final

- [ ] Instituto correto identificado (transferência de execução, **não** extradição/expulsão)?
- [ ] Direção definida (para dentro / para fora)?
- [ ] Tratado aplicável localizado (ou constatada a ausência → reciprocidade)?
- [ ] Condenação **transitada em julgado** comprovada?
- [ ] **Dupla incriminação** verificada no Estado de execução?
- [ ] **Consentimento** livre, informado e documentado (com tradução/intérprete)?
- [ ] **Saldo remanescente** calculado e comparado ao **mínimo do tratado** (número conferido no texto)?
- [ ] Documentos com **tradução juramentada**?
- [ ] Requerimento endereçado à **autoridade central (DRCI/MJ)**?
- [ ] Se o Brasil recebe: **homologação no STJ** encaminhada e **adaptação da pena** (sem agravamento) requerida na VEP?
- [ ] Tratado/súmula/precedente conferido via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

Este material é **rascunho técnico de apoio, sob revisão humana obrigatória** — não substitui o juízo do profissional nem a leitura do **tratado concreto** e da **legislação vigente**. A responsabilidade pela peça e pela estratégia é sempre do **advogado** (Estatuto da OAB e Código de Ética; Provimento 205/2021 para comunicação). Se a atuação for **pelo polo estatal** (oposição à transferência ou fixação de condições), o **roteador deve conferir o polo** e ajustar a perspectiva — no MP aplicam-se as normas do CNMP; na Defensoria, a LC 80/94. Todo dado de assistido é sigiloso (LGPD) e não vai a repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
