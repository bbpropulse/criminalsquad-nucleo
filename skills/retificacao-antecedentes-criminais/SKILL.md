---
name: retificacao-antecedentes-criminais
description: >-
  Use ao pleitear a RETIFICAÇÃO da folha de antecedentes ou o SIGILO de registros criminais:
  exclusão/sigilo de anotações após absolvição, arquivamento, prescrição ou reabilitação; sigilo do
  art. 202 da LEP após cumprida ou extinta a pena; retirada de inquéritos e ações em andamento da
  certidão destinada a fins civis (respeitada a Súmula 444 do STJ); e correção de dados incorretos,
  inclusive na identificação criminal (Lei… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, registros]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-retificacao-antecedentes-criminais"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["retificacao-antecedentes-criminais", "retificacao antecedentes", "antecedentes criminais"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Retificação de antecedentes e sigilo de registros criminais

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

Esta skill orienta a **correção e o sigilo do registro criminal em si** — a folha de antecedentes, os atestados e as certidões emitidos pelos institutos de identificação e bancos de dados do Judiciário/Executivo. O foco é a **exclusão/sigilo de anotações** (após absolvição, arquivamento, prescrição, reabilitação), a **retirada de inquéritos e ações em curso** da certidão destinada a fins civis e a **correção de dados incorretos**. Não confunda com a `reabilitacao-criminal`, que cuida do **sigilo dos registros da condenação e da recuperação dos efeitos do art. 92 do CP** (arts. 93-95 do CP): lá o objeto é o instituto da reabilitação; **aqui** o objeto é a ficha, o dado e a via — administrativa ou judicial — para consertá-los.

> **Lição central:** o problema quase nunca é de *direito material* — é de **dado errado ou anotação que não deveria mais aparecer**. Antes de redigir qualquer coisa, **puxe as certidões reais** do cliente (fins civis **e** criminais, de cada esfera: estadual, federal, eleitoral) e identifique **o quê** aparece, **onde** aparece e **por quê**. Metade dos casos se resolve por **via administrativa** (petição ao instituto de identificação ou à corregedoria), sem processo — e a via judicial precisa provar que a administrativa **falhou** ou é insuficiente.

> **Divisão de trabalho:** o marco extintivo que autoriza o sigilo (trânsito da absolvição, arquivamento, extinção pela prescrição) vem de outra skill. A **declaração de extinção pela prescrição** mora em `extincao-punibilidade-prescricao`; a **reabilitação e os efeitos do art. 92** moram em `reabilitacao-criminal`. Esta skill começa **depois** que o marco existe: pega o registro que persiste indevidamente e o retifica.

## O instituto e a base legal

Não há um "código da folha de antecedentes": o regime nasce da combinação de dispositivos.

| Dispositivo | O que garante / exige |
|---|---|
| **LEP, art. 202** | Cumprida ou extinta a pena, **não constarão** da folha corrida, atestados ou certidões notícias da condenação — salvo para instruir processo penal ou nos casos expressos em lei. Sigilo **automático**, sem requisitos, no dia da extinção |
| **CP, art. 93** (e `reabilitacao-criminal`) | Sigilo dos registros **da condenação** pela reabilitação — instituto autônomo; a certidão do juízo só menciona a condenação por requisição de juiz criminal (CPP 748) |
| **CF, art. 5º, LVII** (presunção de inocência) | Fundamento para excluir/sigilar anotações de **inquéritos e ações sem trânsito** de certidões destinadas a fins civis; ninguém é culpado antes do trânsito |
| **Súmula 444 do STJ** (confira o enunciado via `lei-e-sumula`) | Veda o uso de **inquéritos e ações penais em curso** para agravar a pena-base a título de maus antecedentes. Baliza o mérito, mas **não** determina, por si, a baixa da anotação — não confunda os planos |
| **Lei 12.037/2009** | Disciplina a **identificação criminal** (datiloscópica e fotográfica) e suas hipóteses de cabimento; base para a **retificação de dados incorretos** e, como **tese**, para a exclusão/retirada da identificação criminal após arquivamento/absolvição — confirme a disciplina da exclusão dos dados no caso concreto (lei estadual/regulamento do instituto e jurisprudência) via `lei-e-sumula` / `jurisprudencia-stj-stf` [NÃO VERIFICADO] |
| **CF, art. 5º, LXXII + Lei 9.507/97 (habeas data)** | Acesso e **retificação de dados** em bancos de caráter público; via específica quando o registro é incorreto e a administração recusa a correção |
| **CF, art. 5º, LXIX + Lei 12.016/2009 (mandado de segurança)** | Impugnação do **ato administrativo** ilegal/omissivo do instituto de identificação ou da corregedoria que recusa a baixa/correção — direito líquido e certo demonstrável documentalmente |

> Distinção que organiza todo o resto: **certidão para fins civis** (concursos, empregos, vida civil) x **folha/certidão para fins criminais** (instruir processo penal). A LEP 202 e a presunção de inocência esvaziam a **primeira**; a **segunda** legitimamente registra mais, porque serve ao próprio sistema de justiça. Peça a baixa **na certidão certa**.

## Mapa — situação concreta → providência → onde aprofundar

| O que aparece na ficha | Providência | Onde aprofundar |
|---|---|---|
| **Condenação já cumprida/extinta** ainda na folha civil | Invocar **LEP 202** (sigilo automático) via petição administrativa; se falhar, via judicial | esta skill; efeito do art. 92 → `reabilitacao-criminal` |
| **Inquérito arquivado** ou **ação penal em curso** na certidão para fins civis | Pedir a exclusão/sigilo com base na **presunção de inocência** (CF 5º, LVII); certidão para fins civis não deve espelhar processo sem trânsito | esta skill |
| **Absolvição** transitada que segue anotada como pendência | Requerer a **baixa/atualização** do desfecho no banco de dados; anexar certidão de trânsito | esta skill |
| **Prescrição** que ainda não foi reconhecida | Primeiro **declarar a extinção**; depois retificar | `extincao-punibilidade-prescricao` |
| **Sigilo da condenação** + recuperar habilitação/investidura (art. 92) | Ajuizar **reabilitação** | `reabilitacao-criminal` |
| **Dado incorreto**: homonímia, CPF/nome trocado, tipificação errada, desfecho desatualizado | **Retificação** (Lei 12.037/2009 / habeas data); anexar documento que prova o dado correto | esta skill |
| Administração **recusou** ou **silenciou** a correção devida | **Mandado de segurança** contra o ato/omissão | esta skill |

## Teses e fundamentos

- **Sigilo automático da LEP 202** — a mais forte e a mais esquecida: cumprida/extinta a pena, a condenação **sai** da folha corrida, atestados e certidões, **independentemente** de reabilitação, biênio ou bom comportamento. Se ainda aparece na certidão civil, o registro é **ilegal**, não meramente indevido.
- **Presunção de inocência (CF 5º, LVII)** — inquérito arquivado e ação sem trânsito **não** são antecedentes; certidão para fins civis que os exibe viola a presunção de inocência. Distinga do plano da dosimetria: a **Súmula 444 do STJ** já veda usá-los como maus antecedentes na pena — argumento de reforço, não a causa de pedir da baixa.
- **Absolvição e arquivamento como marco** — trânsito da absolvição (CPP 386) ou decisão de arquivamento esvaziam a legitimidade da anotação para fins civis; instrua com a **certidão de trânsito/arquivamento**.
- **Retificação de dado incorreto (Lei 12.037/2009 e habeas data)** — homonímia, tipificação equivocada, desfecho desatualizado, identificação criminal feita fora das hipóteses legais: o direito é à **correção**, e a via natural é administrativa; o habeas data cabe quando a administração **recusa** e o dado é comprovadamente incorreto.
- **Direito ao esquecimento penal** — invocável com parcimônia e **sempre** ancorado na LEP 202 e na presunção de inocência, não como tese autônoma; sobre o estado atual do tema no STF/STJ, pesquise via `jurisprudencia-stj-stf`, verifique com `verificador-citacoes` e marque [NÃO VERIFICADO] o que não confirmar.
- **Identificação criminal indevida** — colhida sem enquadramento nas hipóteses da Lei 12.037/2009, ou mantida após arquivamento/absolvição: pleitear a **exclusão** dos dados datiloscópicos/fotográficos do banco. O direito à exclusão nesses casos é **tese** a sustentar (não decorre de comando literal inequívoco da Lei 12.037); confirme o regramento aplicável e o estado da jurisprudência via `lei-e-sumula` / `jurisprudencia-stj-stf` [NÃO VERIFICADO].

> **Não invente número de acórdão.** Qualquer precedente sobre exclusão de inquéritos da certidão civil, alcance do art. 202 da LEP ou direito ao esquecimento é **instrução de pesquisa** via `jurisprudencia-stj-stf` — nunca afirmação de memória. Súmula 444 do STJ pode ser citada pelo nome; confira o enunciado via `lei-e-sumula`.

## Via administrativa — o primeiro caminho (quase sempre)

Antes do Judiciário, o pedido vai ao **órgão que detém o dado**. Barato, rápido e, se negado ou ignorado, **constrói o interesse de agir** para a via judicial.

| Órgão / sistema | O que corrige |
|---|---|
| **Instituto de Identificação** (IIRGD/SP e congêneres estaduais; INI/Polícia Federal) | Folha de antecedentes estadual/federal; identificação criminal (datiloscopia); baixa por LEP 202 |
| **Corregedoria do Tribunal / sistema do PJe (SAJ, PROJUDI, Eproc)** | Anotações e desfechos nos bancos do Judiciário; atualização do resultado (absolvição, arquivamento, extinção) |
| **Justiça Eleitoral / TSE** | Certidão de crimes eleitorais e situação de direitos políticos |
| **Cartório distribuidor** | Certidão de distribuição de feitos criminais; averbação do desfecho |

- **Peça administrativa:** requerimento fundamentado (LEP 202 / CF 5º, LVII / Lei 12.037), instruído com **a certidão "suja"** (prova do que aparece) + **o documento do marco** (trânsito da absolvição, portaria de arquivamento, sentença de extinção) + documentos de identificação do requerente.
- **Guarde o protocolo e a resposta** — o **indeferimento expresso** ou o **silêncio** (após prazo razoável) é o que legitima a via judicial. Sem essa etapa, o juízo tende a extinguir por falta de interesse.

## Via judicial — quando a administrativa falha ou é insuficiente

| Veículo | Quando usar | Endereçamento |
|---|---|---|
| **Pedido incidental** nos próprios autos criminais | Absolvição/arquivamento/extinção **no mesmo processo**: requerer a comunicação de baixa aos órgãos, com ofícios | Juízo do feito (ou da execução, se pós-trânsito) |
| **Mandado de segurança** (Lei 12.016/2009) | **Ato administrativo** ilegal/omissivo do instituto de identificação ou da corregedoria que recusou a baixa/correção — direito líquido e certo documentado | Vara/Câmara competente para a autoridade coatora; prazo **decadencial de 120 dias** do ato (Lei 12.016, art. 23) — atenção quando houver ato comissivo datado |
| **Habeas data** (Lei 9.507/97) | Acesso e **retificação de dado incorreto** em banco público, após recusa administrativa (a jurisprudência do STJ exige a **prévia recusa** administrativa como condição da ação — confira o enunciado sumular aplicável via `lei-e-sumula` [NÃO VERIFICADO]) | Conforme a autoridade/entidade detentora |
| **Ação declaratória/cominatória** | Baixa/atualização de registro sem trânsito, quando não couber MS nem HD | Juízo cível competente |

- **Escolha do veículo** é decisão fina: erro comum é impetrar **MS** para *retificar dado* (via do **habeas data**) ou **HD** para *impugnar ato de recusa* (via do **MS**). Case a via ao pedido: **corrigir dado** → HD/administrativo; **derrubar ato de recusa/omissão** → MS.
- **Legitimidade passiva:** identifique a **autoridade coatora certa** (diretor do instituto de identificação, corregedor) — MS contra parte ilegítima é extinto sem mérito.

## Procedimento, prazos e pegadinhas de preclusão/competência

- **Prazo do MS:** **120 dias** contados do ato coator (Lei 12.016, art. 23) — decadencial. Na **omissão continuada** (silêncio persistente) a jurisprudência distingue do ato comissivo único; pesquise o tratamento atual via `jurisprudencia-stj-stf` antes de afirmar que "não corre prazo".
- **Contagem em processo penal:** eventuais prazos recursais penais correm pelo **CPP 798, § 1º** (exclui-se o dia do começo); no MS e no HD, aplicam-se os prazos das leis próprias e do CPC.
- **Competência:** dado **federal** (INI/PF, crimes federais) → Justiça Federal; dado **estadual** → Justiça Estadual; **eleitoral** → Justiça Eleitoral. MS segue a hierarquia da autoridade coatora. Errar a esfera custa meses.
- **Interesse de agir:** sem a **tentativa administrativa** documentada, o pedido incidental/MS tende a naufragar por falta de interesse — salvo omissão evidente e ilegal.
- **Certidão para fins criminais permanece registrando** — não prometa "ficha zerada" para todos os fins: o sistema de justiça continua enxergando o histórico para instruir processo penal (LEP 202, parte final). O ganho é na **certidão civil**.
- **Absolvição por prova x absolvição por atipicidade** — desfechos diferentes podem justificar tratamento diferente na anotação; leia o **fundamento** do CPP 386 antes de padronizar o pedido.

## Estrutura da peça (via judicial)

Peça **documental**: o coração é o par **certidão que mostra o problema** + **documento que prova o marco/dado correto**. Retórica não supre certidão.

```
[Requerimento administrativo] AO(À) ILUSTRÍSSIMO(A) SENHOR(A) DIRETOR(A) DO
INSTITUTO DE IDENTIFICAÇÃO [ÓRGÃO] — ou —
[Mandado de segurança] EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) [DE DIREITO/
FEDERAL] DA [N]ª VARA [...] DA COMARCA/SEÇÃO DE [LOCAL] — [UF]

[NOME], [qualificação], por seu(sua) advogado(a) (procuração anexa), vem
requerer a RETIFICAÇÃO/SIGILO de seu registro de antecedentes criminais
[e/ou a exclusão da anotação relativa a ...], pelas razões seguintes:

I — DO REGISTRO IMPUGNADO (o que aparece, onde e desde quando)
Tabela: certidão (fins civis/criminais, esfera) — anotação impugnada
(inquérito/ação/condenação) — nº do feito — desfecho — ID do documento.

II — DO MARCO QUE AUTORIZA A BAIXA/CORREÇÃO
[extinção da pena (LEP 202) / absolvição transitada (CPP 386) /
arquivamento / dado comprovadamente incorreto (homonímia, tipificação)] —
com a certidão/documento que o prova.

III — DO DIREITO
   1. [LEP 202 — sigilo automático da condenação cumprida/extinta] e/ou
   2. [Presunção de inocência (CF 5º, LVII) — inquérito/ação sem trânsito
      fora da certidão civil; reforço: Súmula 444 do STJ] e/ou
   3. [Lei 12.037/2009 / habeas data — retificação do dado incorreto].
   4. [Se judicial] Do esgotamento/insuficiência da via administrativa
      (protocolo e resposta/silêncio anexos) — interesse de agir.

IV — DOS PEDIDOS
   a) a EXCLUSÃO/SIGILO da anotação [descrever] na certidão para fins civis;
      ou a RETIFICAÇÃO do dado [de X para Y];
   b) a expedição de OFÍCIOS aos órgãos detentores [instituto de
      identificação, corregedoria, distribuidor, TSE] para cumprimento;
   c) [MS] a concessão de LIMINAR para imediata suspensão da publicidade
      indevida, presentes fumus boni iuris e periculum in mora;
   d) a MANUTENÇÃO do registro apenas para fins de instrução penal, na
      forma da parte final do art. 202 da LEP.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; **certidões atuais** (fins civis e criminais; estadual, federal, eleitoral — as que exibem o problema); documento do **marco** (certidão de trânsito da absolvição, portaria de arquivamento, sentença de extinção da pena/prescrição); prova do **dado correto**, na retificação (documento de identidade, certidão de homonímia); **protocolo e resposta administrativa** (indispensável no MS/HD); documentos de qualificação.

## Erros comuns e pegadinhas

- **Confundir com a reabilitação** — reabilitação (CP 93-95) dá sigilo da **condenação** e recupera efeitos do art. 92; **não** é o instrumento para tirar **inquérito arquivado** ou **ação em curso** da certidão civil. Cada objeto tem sua via.
- **Prometer "ficha limpa" para todos os fins** — a LEP 202, parte final, preserva o registro para instruir processo penal; o ganho real é na **certidão civil**. Prometer mais é enganar o cliente.
- **Pular a via administrativa** — sem protocolo e recusa/silêncio documentados, o MS/HD cai por falta de interesse de agir.
- **Trocar as vias MS x habeas data** — HD retifica **dado**; MS derruba **ato de recusa/omissão**. Casar mal a via ao pedido é causa de extinção sem mérito.
- **Autoridade coatora errada** — MS contra quem não detém o dado é extinto; identifique o diretor do instituto/corregedor certo.
- **Perder o prazo de 120 dias do MS** — decadencial (Lei 12.016, art. 23); atenção ao ato comissivo datado.
- **Esfera errada** — dado federal → Justiça Federal; estadual → Estadual; eleitoral → Eleitoral. Endereçar mal custa meses.
- **Usar a Súmula 444 como causa de pedir da baixa** — ela veda os maus antecedentes na **dosimetria**; a baixa da anotação apoia-se na **presunção de inocência** e na LEP 202. Não misture os planos.
- **Não juntar a certidão "suja"** — a prova do que aparece é o interesse de agir; sem ela, não há o que retificar.
- **Ignorar o fundamento da absolvição** (CPP 386) — atipicidade, prova insuficiente e negativa de autoria podem justificar pedidos distintos.
- **Citar precedente de memória** — número de HC/REsp/RE/RMS **nunca** de memória: pesquise via `jurisprudencia-stj-stf`, verifique com `verificador-citacoes` e marque [NÃO VERIFICADO] o não confirmado. Súmula/dispositivo incerto: confira via `lei-e-sumula`.

## Antes de protocolar

- [ ] **Certidões reais** do cliente puxadas (fins civis **e** criminais; estadual, federal, eleitoral) — identificado o quê/onde/por quê?
- [ ] Marco que autoriza a baixa **documentado** (trânsito da absolvição, arquivamento, extinção da pena/prescrição)?
- [ ] Fundamento certo para a certidão certa (LEP 202 para condenação extinta; CF 5º, LVII para inquérito/ação sem trânsito)?
- [ ] Via administrativa **tentada e documentada** (protocolo + recusa/silêncio) antes da judicial?
- [ ] Veículo judicial correto (incidental / MS / habeas data / declaratória) casado ao pedido?
- [ ] Autoridade coatora e **esfera/competência** corretas? Prazo de 120 dias do MS observado?
- [ ] Na retificação: **documento que prova o dado correto** anexado (homonímia, identidade, tipificação)?
- [ ] Pedidos completos (exclusão/sigilo/retificação + **ofícios** aos órgãos detentores + ressalva da parte final da LEP 202)?
- [ ] Cliente orientado sobre o alcance real (certidão civil x criminal) e sobre a diferença para a reabilitação?
- [ ] Nenhuma súmula/precedente citado de memória — tudo passou pelo `verificador-citacoes`?

## Lembretes finais

- **O caso é de dado, não de tese** — a certidão real do cliente é a peça de prova nº 1; sem ela, não se sabe o que retificar.
- **LEP 202 é sigilo automático** — para condenação cumprida/extinta, a anotação civil já é ilegal; não é preciso reabilitar para exigir a baixa.
- **Via administrativa primeiro** — barata, rápida e constrói o interesse de agir para o Judiciário.
- Toda entrega é **rascunho técnico para revisão humana obrigatória** antes do protocolo.

## Apoie-se em

- **Skill `reabilitacao-criminal`** — fronteira: sigilo da **condenação** e recuperação dos efeitos do art. 92 (CP 93-95). Quando o objetivo inclui devolver habilitação/investidura, o instrumento é a reabilitação — não duplique aqui o cálculo do biênio nem os requisitos do art. 94.
- **Skill `extincao-punibilidade-prescricao`** — obtém a **declaração de extinção pela prescrição** que **abre** o marco para o sigilo; esta skill cuida da retificação **posterior**. O cálculo prescricional mora lá.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais (exclusão de inquéritos da certidão civil, alcance do art. 202 da LEP, direito ao esquecimento, prazo do MS na omissão) antes de citar qualquer julgado.
- **Agente `lei-e-sumula`** — conferência do enunciado da Súmula 444 do STJ, da redação da LEP 202 e da Lei 12.037/2009, e de qualquer dispositivo incerto.
- **Agente `verificador-citacoes`** — gate final: nenhuma citação entra na peça sem verificação; o que não confirmar recebe [NÃO VERIFICADO].
- **Best-practice `peticao-criminal`** — forma, endereçamento e técnica de petição/impetração.
- **Best-practice `verificacao-citacoes`** — disciplina de citação (sanção real por jurisprudência inventada).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
