---
name: manifestacao-mp-custos-legis
description: >-
  Use ao elaborar a manifestação (parecer) do Ministério Público de 2º grau — Procuradoria de
  Justiça / PGR / PGJ — atuando como FISCAL DA ORDEM JURÍDICA (custos legis) em habeas corpus,
  apelação, RESE, agravo em execução e recursos aos tribunais superiores: relatório, juízo de
  admissibilidade e mérito, com opinativo pelo (des)provimento ou (des)conhecimento — distinto da
  atuação do MP como parte recorrente. Gatilhos: parecer… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, recurso]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-manifestacao-mp-custos-legis"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["manifestacao-mp-custos-legis", "manifestacao custos", "custos legis"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Manifestação do MP como *Custos Legis* em Recurso/HC (CF, arts. 127–129; CPP, art. 610)

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

> **⚖️ SKILL DO POLO ACUSATÓRIO — uso restrito ao Ministério Público.** Esta skill descreve a peça institucional **típica do MP de 2º grau** (Procuradoria de Justiça, PGJ, PGR) atuando como **fiscal da ordem jurídica**. **Só se aplica a quem integra o Ministério Público.** O roteiro do chefe-roteador deve **conferir o polo do usuário** (campo `polo` do `company.md`) **antes de sugerir esta skill**: se a instituição é **advocacia (OAB)** ou **Defensoria (LC 80/94)**, esta skill **não é a adequada** — para a atuação da defesa em recursos, use as skills de peça/recurso do polo defensivo. A ética aqui é a do **CNMP** (não OAB).

Esta skill orienta a redação da **manifestação (parecer)** do Ministério Público em **segundo grau** quando o órgão atua como ***custos legis*** — fiscal da ordem jurídica, e **não** como parte recorrente. É a rotina da **Procuradoria de Justiça** (e, nos tribunais superiores, da **PGR**): recebido o recurso ou o HC com vista ao MP, o Procurador exara **parecer** analisando admissibilidade e mérito e **opina** pelo conhecimento/desprovimento, provimento ou concessão da ordem.

> **Lição central:** o parecer do *custos legis* **não tem "lado" fixo**. O MP-fiscal opina **conforme a ordem jurídica**, podendo manifestar-se **a favor da defesa** (pela concessão do HC, pela absolvição, pela nulidade) sempre que o direito o impuser — a **imparcialidade objetiva** é o traço que o distingue do MP-parte de 1º grau. Confundir o parecer com uma segunda peça acusatória é o erro estrutural mais comum.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 610 do CPP** (vista ao Procurador em apelação/RESE), do **regimento interno** do tribunal (TJ/TRF/STJ/STF — prazos e forma da vista ao MP variam) e da **Lei 8.038/90** quanto ao rito dos recursos aos superiores. Confirme também a **atribuição** (qual câmara/turma, qual Procuradoria) e o **prazo** de vista no órgão de atuação. Toda súmula, tese ou precedente citado passa **obrigatoriamente** pelo gate da skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) — **omitir vence inventar**.

## Custos legis × MP-parte — a distinção que estrutura a peça

| Dimensão | MP **parte** (1º grau / recorrente) | MP ***custos legis*** (2º grau / fiscal) |
|---|---|---|
| Função | Titular da ação penal (CF, art. 129, I); acusa/recorre | **Fiscal da ordem jurídica** (CF, art. 127); opina |
| Peça | Denúncia, alegações finais, razões/contrarrazões de recurso **como parte** | **Parecer / manifestação** com opinativo |
| Postura | Interesse na condenação/no provimento do próprio recurso | **Imparcialidade objetiva** — opina conforme o direito, ainda que *pro reo* |
| Vínculo | Sustenta a tese acusatória | **Não vinculado** ao resultado; pode opinar pela absolvição, nulidade, concessão do HC |
| Base | Ação penal | **Intervenção obrigatória** nos feitos criminais em 2º grau (art. 610 CPP; regimentos) |

> **Atenção — MP-parte que também recorreu.** Quando o **próprio MP** foi o recorrente (apelação da acusação), quem oficia em 2º grau como *custos legis* é a **Procuradoria** — e pode, em tese, opinar **contra** o recurso interposto pelo Promotor de 1º grau, pois a **independência funcional** (CF, art. 127, §1º) e o papel de fiscal assim o autorizam. Não há hierarquia de convencimento entre o parecer e as razões da parte.

## Base legal

- **CF, art. 127** — o MP é instituição permanente, incumbido da defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis; **§1º** — princípios da **unidade, indivisibilidade e independência funcional**.
- **CF, art. 129** — funções institucionais (I — ação penal pública; II — zelar pelo efetivo respeito aos direitos assegurados; entre outras).
- **CPP, art. 610** — na apelação/RESE, os autos vão **com vista ao Procurador-Geral** (hoje, à Procuradoria de Justiça) para **parecer**, antes do julgamento. *(Confirmar a redação e a praxe regimental vigentes.)*
- **CPP, arts. 619–620** — embargos de declaração no 2º grau (o MP também se manifesta).
- **Lei 8.038/90** — rito dos recursos e ações originárias no **STJ/STF** (prazos e vista ao MP/PGR).
- **LC 75/93** (MPU/MPF) e **Lei 8.625/93** (Lei Orgânica Nacional do MP dos Estados) — **regime do órgão**: atribuições da Procuradoria, independência funcional, dever de fundamentar.
- **RISTJ / RISTF / Regimento do TJ/TRF** — forma, prazo e momento da **vista ao MP** em cada tribunal (varia — conferir).

## Quando o MP oficia como *custos legis* em 2º grau (casos típicos)

1. **Apelação criminal** (do réu **ou** do MP) — vista para parecer antes do julgamento pela câmara/turma (art. 610 CPP).
2. **Recurso em sentido estrito (RESE)** — mesma sistemática de vista/parecer.
3. **Agravo em execução** (LEP, art. 197) — parecer sobre a decisão do juízo das execuções.
4. **Habeas corpus** de competência do tribunal — parecer da Procuradoria (ou da PGR nos superiores) opinando pela concessão/denegação da ordem, pelo não conhecimento etc.
5. **Recurso especial / extraordinário / agravos** aos tribunais superiores — parecer da **PGR** (Lei 8.038/90).
6. **Embargos de declaração / infringentes / revisão criminal** — manifestação conforme o regimento.

## Estrutura da peça — o parecer do *custos legis*

A manifestação segue estrutura opinativa própria (distinta das razões de parte). Ordem usual:

```
1) ENDEREÇAMENTO / CABEÇALHO
   - Órgão (Câmara/Turma, Relator), nº do feito, classe (HC/apelação/RESE/agravo/REsp).
   - Identificação do Procurador oficiante e da Procuradoria.

2) RELATÓRIO
   - Síntese objetiva e IMPARCIAL do processado: denúncia, sentença/decisão
     recorrida, razões do recorrente e contrarrazões do recorrido.
   - "É o relatório." (ou remissão ao relatório do Relator, quando cabível.)

3) ADMISSIBILIDADE (juízo prévio)
   - Cabimento do recurso/ação; tempestividade; legitimidade e interesse;
     preparo (quando exigível); regularidade formal.
   - No HC: se é a via adequada; se há constrangimento ilegal aparente;
     se não substitui recurso próprio (conferir a orientação vigente).

4) MÉRITO
   - Análise fundamentada das teses, com subsunção ao direito e à prova.
   - Enfrentar CADA fundamento do recurso/impetração (dever de completude).
   - Indicar dispositivos e — sob o gate — súmulas/precedentes pertinentes.

5) OPINATIVO / CONCLUSÃO
   - Manifestação clara: pelo NÃO CONHECIMENTO / DESPROVIMENTO /
     PROVIMENTO / CONCESSÃO PARCIAL ou TOTAL DA ORDEM / CONCESSÃO DE HABEAS
     CORPUS DE OFÍCIO (se detectada ilegalidade não arguida).
   - Fecho: "É o parecer." + local, data, nome e cargo do Procurador.
```

## Metodologia — passo a passo do parecer

1. **Conferir a atribuição e o prazo de vista.** Qual Procuradoria/turma; prazo regimental; se há réu preso (prioridade). Erro de atribuição gera devolução.
2. **Ler os autos e mapear as teses** do recorrente/impetrante e do recorrido — **todas** devem ser enfrentadas no mérito (parecer omisso é parecer incompleto).
3. **Redigir o relatório imparcial** — sem adjetivação acusatória; espelho fiel do processado. O relatório do *custos legis* não "acusa": descreve.
4. **Analisar a admissibilidade** antes do mérito (cabimento, tempestividade, adequação da via no HC).
5. **Enfrentar o mérito tese a tese**, com subsunção explícita à lei e à prova, indicando dispositivos e — sob o gate — súmulas/precedentes.
6. **Opinar conforme a ordem jurídica** — inclusive *pro reo* quando o direito impuser (concessão de HC, reconhecimento de nulidade, prescrição, atipicidade, absolvição).
7. **Verificar de ofício** ilegalidades flagrantes não arguidas (ex.: prescrição, incompetência absoluta, cerceamento de defesa) — o *custos legis* pode **sugerir a concessão de HC de ofício** ou o reconhecimento da matéria de ordem pública.
8. **Fundamentar tudo** (dever constitucional de motivação; independência funcional não dispensa fundamentação) e **passar as citações pelo gate**.
9. **Concluir com opinativo inequívoco** e fecho formal ("É o parecer.").

## Eixos de análise recorrentes no parecer criminal

- **Preliminares e nulidades** — competência, cerceamento de defesa/acusação, cadeia de custódia da prova (CPP, arts. 158-A a 158-F), nulidade de interceptação/busca, ausência de fundamentação (CF, art. 93, IX). O *custos legis* **aponta a nulidade mesmo que favoreça a defesa**.
- **Matérias de ordem pública (de ofício)** — **prescrição** (CP, arts. 107, IV, e 109–119), **atipicidade**, **incompetência absoluta**, causas extintivas de punibilidade — conhecíveis independentemente de arguição.
- **Prova e mérito** — suficiência probatória; *in dubio pro reo*; standard de condenação; dosimetria (CP, arts. 59 e 68) e regime inicial (CP, art. 33).
- **Habeas corpus** — existência de constrangimento ilegal (CPP, art. 648); adequação da via; excesso de prazo; ilegalidade da prisão preventiva (CPP, arts. 312–316); (des)proporcionalidade da medida cautelar.
- **Execução penal (agravo)** — progressão, livramento, remição, falta grave — conferir a redação vigente da LEP e as skills de execução penal do sistema.

## Teses e contrapontos frequentes (o parecer sopesa os dois lados)

- **Não conhecimento do HC substitutivo** — quando a impetração faz as vezes de recurso próprio cabível. **Contraponto:** ainda assim, cabe **conceder a ordem de ofício** se houver ilegalidade flagrante. *(Confirmar a orientação atual do STJ/STF via o gate.)*
- **Excesso de prazo na formação da culpa** — analisar à luz da razoabilidade e da complexidade (súmulas sobre excesso — **conferir**). O *custos legis* pode **opinar pelo relaxamento** se o excesso for injustificado.
- **Nulidade sem prejuízo** — princípio *pas de nullité sans grief* (CPP, art. 563; **Súmula 523/STF** — no processo penal, a falta de defesa constitui nulidade absoluta, mas a sua deficiência só a anula se houver prova de prejuízo). Sopesar se o vício apontado gerou prejuízo real.
- **Dosimetria** — revisar a valoração das circunstâncias judiciais; opinar pela **redução** quando a fundamentação da pena-base for genérica.
- **Prescrição superveniente / retroativa** — reconhecível de ofício; o parecer deve **suscitá-la** ainda que a defesa não a tenha arguido.

## Súmulas e dispositivos frequentemente pertinentes (conferir vigência via `jurisprudencia-stj-stf`)

Cite **livremente** os dispositivos de lei abaixo (certeza normativa). Para **qualquer súmula específica ou precedente**, confirme número e teor no gate antes de usar.

- **CPP, art. 610** — vista ao MP (parecer) na apelação/RESE.
- **CPP, art. 648** — hipóteses de coação ilegal (base do mérito do HC).
- **CPP, arts. 564 e 563** — nulidades e o princípio do prejuízo (*pas de nullité sans grief*).
- **CPP, arts. 158-A a 158-F** — cadeia de custódia (base de nulidades probatórias).
- **CP, arts. 107, IV, e 109–119** — prescrição (matéria de ordem pública, de ofício).
- **Súmula 523/STF** — falta de defesa = nulidade absoluta; deficiência da defesa só anula com prova de prejuízo. *(Confirmar redação.)*
- **Súmula 707/STF** — nulidade por falta de intimação do defensor para a sessão de julgamento. **[VERIFICAR número e teor no gate antes de citar.]**
- **[NÃO VERIFICADO]** Súmulas do STJ sobre **HC substitutivo de recurso próprio** e sobre **excesso de prazo** — não afirme número/teor de memória; confirme em `jurisprudencia-stj-stf`. Prefira **ensinar a tese** (não conhecimento do substitutivo, mas concessão de ofício se houver ilegalidade) a arriscar um enunciado.
- **[NÃO VERIFICADO]** Precedentes sobre a **desnecessidade de vinculação** do julgador ao parecer do MP — conferir no gate; na dúvida, sustente pela **lei** (independência funcional, CF, art. 127, §1º).

> **Regra de ouro do Citation Gate:** melhor faltar precedente do que citar julgado inexistente. Ensine a **tese e o dispositivo**; **numere acórdão/HC/REsp/Tema/Informativo apenas após confirmação** via `jurisprudencia-stj-stf`. Há sanções reais por jurisprudência inventada por IA.

## Erros comuns (anti-padrões)

- **Transformar o parecer em segunda peça acusatória** — o *custos legis* **não é parte**; opina conforme o direito, inclusive *pro reo*.
- **Relatório parcial/adjetivado** — o relatório deve ser espelho imparcial do processado.
- **Deixar teses sem enfrentamento** — parecer omisso quanto a fundamento do recurso é incompleto (dever de completude).
- **Ignorar matéria de ordem pública** — não suscitar prescrição/atipicidade/incompetência conhecíveis de ofício.
- **Não separar admissibilidade de mérito** — opinar sobre o mérito sem antes examinar cabimento/adequação da via (sobretudo no HC).
- **Confundir vista de parte com vista de fiscal** — quando o próprio MP recorreu, a Procuradoria oficia como fiscal e **pode divergir** das razões da parte.
- **Citar súmula/precedente de memória** — violação do Citation Gate.
- **Opinativo ambíguo** — a conclusão deve ser inequívoca (não conhecer / desprover / prover / conceder a ordem / conceder HC de ofício).

## Checklist final

- [ ] **Atribuição e prazo** de vista conferidos (turma/câmara certa; réu preso = prioridade)?
- [ ] **Relatório imparcial**, fiel ao processado, sem adjetivação?
- [ ] **Admissibilidade** examinada antes do mérito (cabimento, tempestividade, via adequada no HC)?
- [ ] **Todas as teses** do recorrente/impetrante e do recorrido enfrentadas no mérito?
- [ ] **Matérias de ordem pública** verificadas de ofício (prescrição, atipicidade, incompetência, nulidade absoluta)?
- [ ] **Opinou conforme a ordem jurídica**, admitindo posição *pro reo* quando o direito impõe (concessão de HC, nulidade, absolvição)?
- [ ] **Fundamentação completa** (CF, art. 93, IX; independência funcional não dispensa motivar)?
- [ ] **Súmulas/precedentes** conferidos via `jurisprudencia-stj-stf` — nada citado de memória; itens `[NÃO VERIFICADO]` resolvidos ou removidos?
- [ ] **Opinativo inequívoco** e fecho formal ("É o parecer." + cargo)?
- [ ] **Revisão humana** pelo Procurador oficiante antes de exarar?

## Lembretes finais

- **Fiscal, não parte** — o parecer opina conforme a ordem jurídica, podendo favorecer a defesa.
- **Admissibilidade antes do mérito** — sobretudo no HC (adequação da via; substitutivo × concessão de ofício).
- **Enfrentar tese a tese** e **verificar de ofício** matéria de ordem pública (prescrição, atipicidade, incompetência).
- **Independência funcional (CF, art. 127, §1º)** — o Procurador pode divergir das razões do MP-parte; mas **sempre fundamenta**.
- **Conferir vigência** do art. 610 CPP, dos regimentos e da Lei 8.038/90, e **passar toda citação** pelo gate `jurisprudencia-stj-stf`.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta manifestação é hipótese de trabalho; a responsabilidade pelo teor e pelo opinativo é sempre do **Procurador oficiante**.
- **Ética institucional do MP (CNMP)** — não OAB. Regem a atuação a **CF (arts. 127–129)**, a **LC 75/93** (MPU) e a **Lei 8.625/93** (MPs estaduais), com os princípios da **unidade, indivisibilidade e independência funcional** e o dever de **fundamentação**. O parecer é peça de **fiscal da ordem jurídica**, não de acusador.
- **Polo confirmado** — skill de **uso restrito ao Ministério Público**; o chefe-roteador deve conferir o `polo` do `company.md` antes de sugeri-la. Instituições de advocacia (OAB) ou Defensoria (LC 80/94) **não** usam esta peça.
- **Citation Gate** — nenhuma súmula, tese ou precedente citado de memória; tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir o parecer, aplique também a skill `redacao-persuasiva-criminal` — clareza, subsunção explícita, coesão e técnica opinativa (a régua que a revisão cobra), adaptada ao registro **institucional e imparcial** do *custos legis*.
