---
name: extincao-punibilidade-prescricao
description: >-
  Use ao elaborar pedido autônomo de reconhecimento da EXTINÇÃO DA PUNIBILIDADE (art. 107 do CP),
  com foco em PRESCRIÇÃO — da pretensão punitiva em abstrato, superveniente/intercorrente,
  retroativa e da pretensão executória (arts. 109 a 119 do CP). Gatilhos: extinção da punibilidade,
  prescrição, PPP, PPE, prescrição da pretensão punitiva, prescrição da pretensão executória,
  prescrição retroativa…. Não use para decisão final, assinatura, protocolo ou citação não
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
  eval_case_ids: ["csq-v5-extincao-punibilidade-prescricao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["extincao-punibilidade-prescricao", "extincao punibilidade", "punibilidade prescricao"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Extinção da Punibilidade — Prescrição (pedido autônomo)

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

Esta skill orienta a construção do **pedido autônomo de reconhecimento da extinção da punibilidade** (art. 107 do CP), com foco na **prescrição** (arts. 109-119 do CP) — a causa extintiva mais frequente e mais mal manejada da prática. Ela preenche uma lacuna deliberada: o agente **dosimetria-pena** *calcula* a prescrição, mas **não redige a peça**; aqui está a metodologia de cálculo aplicada + a **estrutura forense** do requerimento, em qualquer fase e grau de jurisdição.

> **Lição central:** prescrição é **matéria de ordem pública** — cognoscível **de ofício, em qualquer fase do processo e em qualquer grau** (art. 61 do CPP). Não há preclusão. Mas o pedido só convence se vier com a **linha do tempo documentada** e o **cálculo demonstrado marco a marco** — peça de prescrição sem tabela de datas é peça fadada ao indeferimento.

> **Divisão de trabalho:** o cálculo aritmético (pena-base de referência, enquadramento no art. 109, intervalos entre marcos) é do agente **dosimetria-pena** — consulte-o **sempre** antes de redigir. Esta skill transforma o cálculo em peça.

## O instituto e a base legal

O art. 107 do CP traz o rol (exemplificativo) das **causas extintivas da punibilidade**: morte do agente (I); anistia, graça ou indulto (II); *abolitio criminis* (III); **prescrição, decadência e perempção** (IV); renúncia ao direito de queixa e perdão aceito (V); retratação, quando admitida (VI); e perdão judicial (IX). O foco desta skill é a **prescrição** — para indulto/anistia/comutação e para os incidentes da execução, o pedido é plugável no squad **execucao-penal**.

A prescrição é a perda do poder-dever de punir pela inércia estatal no tempo, e se divide em dois grandes ramos:

| Ramo | O que fulmina | Efeitos |
|---|---|---|
| **PPP — pretensão punitiva** (antes do trânsito em julgado definitivo) | O direito de **processar e condenar** | Apaga **todos** os efeitos, principais e secundários: não gera reincidência, maus antecedentes nem título executivo civil |
| **PPE — pretensão executória** (após o trânsito em julgado) | O direito de **executar a pena** | Extingue **só a pena**; subsistem os efeitos secundários (reincidência, antecedentes, obrigação de indenizar) |

**Espécies (não confundir — cada uma tem base de cálculo e janela próprias):**

| Espécie | Base de cálculo | Janela examinada | Base legal |
|---|---|---|---|
| PPP **em abstrato** | Pena **máxima** cominada | Qualquer intervalo entre os marcos do art. 117 | CP 109 |
| PPP **superveniente/intercorrente** | Pena **concreta** (transitada para a acusação) | Da publicação da sentença condenatória ao trânsito definitivo | CP 110, §1º |
| PPP **retroativa** | Pena **concreta** (transitada para a acusação) | Marcos **anteriores** à sentença — **nunca antes da denúncia ou queixa** para crimes posteriores à Lei 12.234/2010 (sobre a leitura do marco — oferecimento × recebimento —, confira via `lei-e-sumula`/`jurisprudencia-stj-stf`) | CP 110, §1º |
| **PPE** (executória) | Pena **concreta** aplicada (ou o **restante** dela, em caso de evasão — CP 113) | Do trânsito em julgado ao início do cumprimento | CP 110, *caput*; 112 |

**Prazos do art. 109 (regra geral, pela pena máxima ou concreta conforme a espécie):**

| Pena | Prazo prescricional |
|---|---|
| Inferior a 1 ano | 3 anos (era **2 anos** antes da Lei 12.234/2010 — aplicar a lei mais benéfica ao fato anterior a 5/5/2010) |
| 1 a 2 anos | 4 anos |
| Mais de 2 até 4 anos | 8 anos |
| Mais de 4 até 8 anos | 12 anos |
| Mais de 8 até 12 anos | 16 anos |
| Superior a 12 anos | 20 anos |

- **Multa:** prescreve em **2 anos** quando for a única cominada/aplicada; quando cumulada, **no mesmo prazo** da privativa de liberdade (CP 114).
- **Reincidência:** aumenta em **1/3 apenas o prazo da PPE** (CP 110, *caput*) — **não** influi na PPP (Súmula 220 do STJ).
- **Redução etária (CP 115):** prazos contados **pela metade** se o agente era **menor de 21 anos na data do fato** ou **maior de 70 na data da sentença**. A extensão do marco dos 70 anos à data do *acórdão* é construção jurisprudencial — pesquise via agente **jurisprudencia-stj-stf** e verifique com **verificador-citacoes**; marque [NÃO VERIFICADO] o que não confirmar.

## Termo inicial, interrupção e suspensão

**Termo inicial da PPP (CP 111):** consumação (I); último ato executório, na tentativa (II); cessação da permanência, nos crimes permanentes (III); data em que o fato se tornou conhecido, na bigamia e falsificação de registro (IV); e — pegadinha frequente — nos **crimes contra a dignidade sexual ou com violência contra criança e adolescente**, a data em que a **vítima completa 18 anos**, salvo se antes já proposta a ação penal (V).

**Termo inicial da PPE (CP 112):** literalmente, o trânsito em julgado **para a acusação** (I) ou a revogação de sursis/livramento, e o dia em que se interrompe a execução (II). **Atenção:** o STF, em repercussão geral, assentou entendimento de que o termo inicial da PPE é o trânsito em julgado **para ambas as partes**, com modulação temporal — o enquadramento do caso concreto na modulação é decisivo: pesquise o tema via agente **jurisprudencia-stj-stf** e verifique com **verificador-citacoes** antes de citar; marque [NÃO VERIFICADO] o que não confirmar.

**Marcos interruptivos (CP 117 — zeram o prazo, que recomeça do zero):**
- I — **recebimento** da denúncia ou queixa (não a mera oferta);
- II — **pronúncia** (interrompe mesmo se o júri desclassificar depois — Súmula 191 do STJ);
- III — decisão **confirmatória da pronúncia**;
- IV — publicação da **sentença ou acórdão condenatórios recorríveis** — o STF firmou que o acórdão condenatório interrompe **inclusive quando meramente confirmatório** da sentença: confirme o precedente e sua aplicação via **jurisprudencia-stj-stf** + **verificador-citacoes**;
- V — **início ou continuação do cumprimento** da pena (só PPE);
- VI — **reincidência** (só PPE).

> A interrupção comunica-se a **todos os autores** do crime, exceto nas hipóteses dos incisos V e VI (CP 117, §1º). Nos crimes conexos objeto do mesmo processo, a interrupção quanto a um estende-se aos demais.

**Causas suspensivas (CP 116 — o prazo congela e retoma de onde parou):** questão prejudicial (I); cumprimento de pena no estrangeiro (II); pendência de embargos de declaração ou recursos aos Tribunais Superiores, **quando inadmissíveis** (III — Pacote Anticrime); ANPP não cumprido nem rescindido (IV). Fora do CP: citação por edital sem comparecimento (CPP 366 — suspensão limitada no tempo: Súmula 415 do STJ, o período de suspensão é regulado pelo **máximo da pena cominada**) e sursis processual (Lei 9.099/95, art. 89, §6º).

## Metodologia de cálculo (roteiro em 8 passos)

Delegue a aritmética ao agente **dosimetria-pena** e confira o resultado com este roteiro:

1. **Defina a espécie** — há sentença? Transitou para a acusação? Transitou para ambos? Isso decide se a base é a pena **máxima** (abstrato) ou a **concreta** (retroativa/intercorrente/PPE).
2. **Ajuste a pena de referência** — no cálculo em abstrato, incidem **causas de aumento e de diminuição** (majorante no **máximo**, minorante no **mínimo** — tentativa reduz 1/3), mas **não** agravantes e atenuantes genéricas.
3. **Enquadre no art. 109** e anote o prazo.
4. **Aplique o art. 115** (metade) se couber; **acresça 1/3** se PPE de reincidente (CP 110).
5. **Fixe o termo inicial** (CP 111 ou 112) com documento que prove a data.
6. **Liste os marcos interruptivos** (CP 117) com as datas dos autos — recebimento da denúncia, pronúncia, sentença, acórdão.
7. **Desconte suspensões** (CP 116; CPP 366) — some o período congelado ao final do intervalo.
8. **Compare cada intervalo** entre marcos consecutivos com o prazo: **basta um intervalo igual ou superior ao prazo** para a extinção (mesmo critério do roteiro do agente `dosimetria-pena`). Em **concurso de crimes**, o cálculo é **por crime, isoladamente** (CP 119; na continuidade delitiva, a pena sem o acréscimo da continuação — Súmula 497 do STF).

> **Vedação absoluta — prescrição virtual/antecipada:** é inadmissível reconhecer a PPP com base em **pena hipotética** projetada (Súmula 438 do STJ). Não redija pedido de "prescrição em perspectiva"; se a pena provável indicar prescrição futura, a via é acompanhar o processo e requerer no momento próprio.

## Cabimento — onde e como arguir

| Situação | Veículo | Endereçamento |
|---|---|---|
| Inquérito ou ação penal em 1º grau | **Petição autônoma** nos autos (esta skill) ou preliminar de resposta à acusação/alegações finais | Juízo onde tramita o feito |
| Processo em grau recursal | **Preliminar de apelação/RESE** ou petição avulsa ao relator — plugável no squad **recurso-criminal** | Relator no Tribunal |
| Após trânsito em julgado (PPE) | **Petição ao juízo da execução** (LEP, art. 66, II); do indeferimento cabe **agravo em execução** (LEP, art. 197 — prazo de **5 dias**, Súmula 700 do STF; em dobro para a Defensoria — ver skill `agravo-em-execucao`) | Vara de Execuções Penais |
| Constrangimento ilegal evidente (preso por pena prescrita) | **Habeas corpus** — ver skill própria de HC | Tribunal competente |

## Estrutura da petição

Peça **enxuta e cronológica**: o coração é a **tabela de datas** + o **cálculo demonstrado**. Fundamentos longos de doutrina são dispensáveis; datas documentadas são indispensáveis.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA [CRIMINAL /
DE EXECUÇÕES PENAIS] DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO / EXECUÇÃO]

[NOME], já qualificado(a) nos autos em epígrafe, por intermédio do(a)
advogado(a) que ao final subscreve (procuração anexa), vem, respeitosamente,
à presença de Vossa Excelência, requerer o RECONHECIMENTO DA EXTINÇÃO DA
PUNIBILIDADE PELA PRESCRIÇÃO [da pretensão punitiva / da pretensão
executória] (arts. 107, IV, 109 e seguintes do CP; art. 61 do CPP),
pelas razões a seguir:

I — DA LINHA DO TEMPO (fatos e marcos documentados)
Tabela: evento (fato / recebimento da denúncia / pronúncia / sentença /
acórdão / trânsito em julgado) — data — folha/ID do documento nos autos.

II — DO DIREITO
   1. Da espécie de prescrição e da base de cálculo
      [abstrato: pena máxima com majorantes/minorantes; retroativa ou
      intercorrente: pena concreta transitada para a acusação; PPE: pena
      aplicada, +1/3 se reincidente].
   2. Do prazo aplicável (art. 109) e das reduções/acréscimos
      [art. 115 — menor de 21 no fato / maior de 70 na sentença].
   3. Da demonstração do cálculo
      [intervalo entre o marco X (data) e o marco Y (data) = Z anos,
      superior ao prazo de W anos → prescrição consumada em DD/MM/AAAA;
      apontar inexistência de causa suspensiva no período].
   4. Do caráter de ordem pública (art. 61 do CPP)
      [cognoscível de ofício, a qualquer tempo e grau de jurisdição].

III — DOS PEDIDOS
Ante o exposto, requer-se:
   a) o RECONHECIMENTO DA EXTINÇÃO DA PUNIBILIDADE pela prescrição
      [espécie], nos termos do art. 107, IV, do CP;
   b) [se preso] a imediata expedição de ALVARÁ DE SOLTURA, se por outro
      motivo não estiver preso;
   c) o RECOLHIMENTO de eventuais mandados de prisão e a baixa nas
      anotações e restrições decorrentes do feito;
   d) [se PPP] a declaração de que a extinção apaga TODOS os efeitos,
      inclusive para fins de reincidência e antecedentes;
   e) as comunicações de praxe [IIRGD/institutos de identificação,
      cartório distribuidor, tribunal de origem].

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; certidões que provem as **datas** (recebimento da denúncia, publicação da sentença/acórdão, **certidão de trânsito em julgado** — indispensável na PPE); extrato de andamento processual; cálculo de pena/atestado da execução, quando na VEC; certidão de nascimento (art. 115 — menor de 21) ou documento de idade (maior de 70).

## Teses típicas da prática

- **Retroativa entre a denúncia e a sentença** — a mais comum: pena concreta baixa reenquadra o prazo no art. 109 e o intervalo recebimento→sentença o supera. Para **fatos até 5/5/2010**, testar também o intervalo **fato→denúncia** (a Lei 12.234/2010 não retroage em prejuízo).
- **Intercorrente** — acusação não recorreu (ou recurso improvido no ponto) e o processo demorou entre a sentença e o trânsito definitivo.
- **PPE do condenado que nunca foi preso** — mandado nunca cumprido; contar do trânsito em julgado, atento à controvérsia do termo inicial (ambas as partes × acusação) e à modulação — verificar via **jurisprudencia-stj-stf**.
- **Evasão** — prescrição regulada pelo **restante da pena** (CP 113), não pela pena total.
- **Redução do art. 115** esquecida pelo juízo — réu que tinha 20 anos na data do fato corta todos os prazos pela metade.
- **Prescrição da multa isolada** em 2 anos (CP 114, I) — frequente em transações e condenações antigas.
- **Crime conexo menos grave** já prescrito dentro de processo com crime maior — pedir a extinção **parcial**, crime a crime (CP 119).
- **Na execução:** a extinção da pena de um dos títulos altera o somatório e destrava benefícios — articular com o squad **execucao-penal**.

## Erros comuns e pegadinhas

- **Confundir PPP com PPE** — pedir "prescrição da pena" quando o trânsito ainda não ocorreu (ou vice-versa) troca a base de cálculo, o termo inicial e os efeitos. Consequência prática: PPP apaga a condenação para **todos** os fins; PPE mantém reincidência e antecedentes — não prometa ao cliente o efeito errado.
- **Prescrição virtual** — pedido juridicamente impossível (Súmula 438 do STJ). Não formule.
- **Aplicar a retroativa antes da denúncia em crime pós-2010** — vedado pelo CP 110, §1º, na redação da Lei 12.234/2010.
- **Somar 1/3 de reincidência na PPP** — o acréscimo é **só da PPE** (Súmula 220 do STJ).
- **Ignorar suspensões** — período do CPP 366, do sursis processual ou do ANPP congela o prazo; cálculo que não desconta a suspensão será desmontado pelo MP.
- **Esquecer marcos interruptivos "invisíveis"** — decisão confirmatória da pronúncia e acórdão confirmatório da condenação interrompem; conferir a jurisprudência atual via **jurisprudencia-stj-stf**.
- **Contar o prazo como processual** — o prazo prescricional segue a contagem **penal** (CP 10): inclui-se o dia do começo e não há prorrogação por feriado ou fim de semana; errar isso desloca a consumação em dias decisivos.
- **Tomar a intimação como marco da sentença** — o marco do CP 117, IV, é a **publicação** da sentença (entrega em cartório/lançamento no sistema), não a intimação das partes.
- **Errar o termo inicial nos crimes sexuais contra vulnerável** — o prazo só corre da data em que a vítima completa 18 anos (CP 111, V).
- **Endereçamento errado** — após o trânsito, o pedido é ao **juízo da execução** (LEP 66, II), não ao juízo da condenação; em grau recursal, ao **relator**. Peça no juízo errado perde tempo de prisão indevida.
- **Peça sem certidões** — afirmar datas sem documento; o cálculo só vale com prova das datas nos autos.
- **Confundir prescrição com decadência** — a decadência (6 meses para queixa/representação, CPP 38) também extingue a punibilidade (CP 107, IV), mas tem regime próprio: não se interrompe nem se suspende.
- **Não pedir alvará e recolhimento de mandados** — reconhecida a extinção, a soltura e a baixa das restrições devem constar expressamente dos pedidos.
- **Citar precedente de memória** — números de HC/REsp/AgRg específicos **nunca** de memória: pesquise via agente **jurisprudencia-stj-stf** e verifique com **verificador-citacoes**; marque [NÃO VERIFICADO] o que não confirmar. Dispositivo recente/incomum: confira via **lei-e-sumula** antes de afirmar.

## Checklist antes de protocolar

- [ ] Espécie de prescrição correta (abstrato / retroativa / intercorrente / PPE)?
- [ ] Base de cálculo certa (pena máxima com majorantes/minorantes × pena concreta transitada para a acusação)?
- [ ] Cálculo conferido com o agente **dosimetria-pena**?
- [ ] Art. 115 (menor de 21 / maior de 70) testado? 1/3 de reincidente (só PPE) aplicado?
- [ ] Todos os marcos do art. 117 mapeados **com certidão/ID dos autos**?
- [ ] Suspensões (CP 116; CPP 366; sursis processual; ANPP) descontadas?
- [ ] Lei no tempo verificada (Lei 12.234/2010 — prazo de 2 anos e retroativa pré-denúncia para fatos antigos)?
- [ ] Concurso de crimes calculado **por crime** (CP 119)?
- [ ] Endereçamento correto (juízo do feito / relator / VEC)?
- [ ] Pedidos completos (extinção + alvará + recolhimento de mandados + baixas + efeitos da PPP)?
- [ ] Nenhuma súmula/precedente citado de memória — tudo passou pelo **verificador-citacoes**?

## Lembretes finais

- **PPP apaga tudo; PPE só apaga a pena** — escolha a espécie certa e prometa o efeito certo ao cliente.
- **Cálculo é do dosimetria-pena; peça é desta skill** — sempre em conjunto.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes do protocolo.

## Apoie-se em

- **Agente `dosimetria-pena`** — referência **obrigatória**: executa o cálculo da prescrição (pena de referência, enquadramento no art. 109, intervalos entre marcos) que esta skill transforma em peça.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais (termo inicial da PPE, acórdão confirmatório, extensão do art. 115) antes de citar qualquer julgado.
- **Agente `lei-e-sumula`** — conferência de vigência e redação de dispositivos e súmulas antes da citação.
- **Agente `verificador-citacoes`** — gate final: nenhuma citação entra na peça sem verificação; o que não confirmar recebe [NÃO VERIFICADO].
- **Best-practice `peticao-criminal`** — forma, endereçamento e técnica de petição criminal.
- **Best-practice `verificacao-citacoes`** — disciplina de citação (sanção real por jurisprudência inventada).
- **Squads:** plugável no **execucao-penal** (PPE, unificação e reflexos nos benefícios) e no **recurso-criminal** (prescrição como **preliminar** de apelação/RESE).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
