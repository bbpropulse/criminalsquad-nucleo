---
name: resposta-mutatio-emendatio
description: >-
  Use ao reagir à alteração da imputação no curso do processo — manifestação da defesa sobre
  aditamento da denúncia (mutatio libelli, CPP 384) e resposta à nova definição jurídica do fato
  (emendatio libelli, CPP 383): prazo de 5 dias, novo interrogatório, rearrolar até 3 testemunhas,
  Súmula 453 STF e pedido de suspensão condicional/transação/ANPP quando a nova capitulação admitir.
  Gatilhos: mutatio libelli, emendatio libelli… Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-resposta-mutatio-emendatio"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["resposta-mutatio-emendatio", "resposta mutatio", "mutatio emendatio"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Resposta à Mutatio e Emendatio Libelli (reação ao aditamento)

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

Esta skill orienta a **manifestação da defesa quando a imputação muda no meio do processo** — seja porque a prova revelou elementar ou circunstância nova e o MP aditou a denúncia (**mutatio libelli**, art. 384 do CPP), seja porque o juiz atribuiu ao mesmo fato definição jurídica diversa (**emendatio libelli**, art. 383 do CPP). É um momento de **prazo curto (5 dias)** e de **direitos que precluem** se não forem exercidos expressamente: novo interrogatório, até 3 testemunhas, continuação da audiência e benefícios despenalizadores.

> **Lição central:** o divisor entre os institutos é o **fato imputado**, não a capitulação. **Mesmo fato, novo rótulo → emendatio (juiz, na sentença, sem aditamento). Fato acrescido pela prova → mutatio (MP adita; defesa é ouvida; instrução reabre).** Se o juiz agrega elementar não descrita a pretexto de "requalificar", há **mutatio disfarçada** — nulidade por violação da correlação entre acusação e sentença (ampla defesa, CF, art. 5º, LV).

> **Princípio reitor (correlação/congruência):** o réu se defende **dos fatos narrados**, não dos artigos de lei. Ninguém pode ser condenado por fato que não lhe foi imputado formalmente — na denúncia original ou no aditamento regularmente processado. A sentença fica **adstrita aos termos do aditamento** (art. 384, §4º, parte final).

## Dois institutos, um divisor — compare antes de reagir

| Critério | **Emendatio libelli (art. 383)** | **Mutatio libelli (art. 384)** |
|---|---|---|
| O que muda | Só a **definição jurídica** do mesmo fato | O **fato**: elementar/circunstância nova revelada pela prova |
| Quem promove | O **juiz**, em regra na sentença | O **MP**, por aditamento (oral ou escrito) |
| Contraditório prévio | Em regra dispensado (*iura novit curia*) — há tese de oitiva prévia (vedação à decisão-surpresa) | **Obrigatório**: defesa ouvida em **5 dias** (§2º) |
| Pena mais grave | Possível (art. 383, *caput*) | Possível, nos limites do aditamento |
| Instrução | Não reabre | **Reabre**: novo interrogatório, até 3 testemunhas, debates |
| Em 2º grau | Cabível, limitada pela *ne reformatio in pejus* (art. 617) em recurso exclusivo da defesa | **Vedada** — Súmula 453 do STF |
| Benefícios | Art. 383, §1º (suspensão condicional; extensão a transação/ANPP) | Art. 384, §3º (remete aos §§1º e 2º do 383) |
| Competência | Nova capitulação de outro juízo → remessa (art. 383, §2º) | Idem, por força do art. 384, §3º |

**Cabimento da mutatio:** apenas em **ação penal pública** (e na privada subsidiária, em que o MP retoma a titularidade). Na ação **exclusivamente privada**, a doutrina majoritária a reputa incabível (princípio da oportunidade) — tese defensiva se o querelante tentar aditar.

## Emendatio libelli (CPP 383) — o juiz requalifica o mesmo fato

O juiz, **sem modificar a descrição do fato** contida na denúncia ou queixa, pode atribuir-lhe definição jurídica diversa, ainda que aplique **pena mais grave**. Como não há fato novo, a lei dispensa aditamento e, em regra, oitiva prévia. A defesa reage em **quatro frentes**:

1. **Nos memoriais/alegações finais** — antecipe a capitulação correta e as suas consequências (pena, regime, prescrição, benefícios). Emendatio favorável (desclassificação) é **tese a ser pedida**, não apenas sofrida. Ver skill `memoriais`.
2. **Contraditório prévio (tese moderna)** — sustentar que a requalificação sem oitiva das partes viola o sistema acusatório (art. 3º-A do CPP) e a vedação à decisão-surpresa (art. 10 do CPC c/c art. 3º do CPP). Não é consenso: pesquise o estado atual via agente `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até confirmar.
3. **Após a sentença** — embargos de declaração (omissão sobre benefícios da nova capitulação) e apelação (capitulação incorreta; mutatio disfarçada de emendatio).
4. **Emendatio antecipada (excepcional)** — em regra o momento é a sentença, mas admite-se a correção da capitulação antes disso quando repercute em **competência, cabimento de benefícios ou liberdade** (ex.: excesso acusatório que só serve para travar ANPP/suspensão). Tese defensiva a formular com cautela — confirme a jurisprudência via `jurisprudencia-stj-stf`.

**Consequências obrigatórias que o juiz não pode pular:**
- Nova definição que admita **suspensão condicional do processo** → o juiz procede conforme a lei (art. 383, §1º c/c art. 89 da Lei 9.099/95): abre-se vista ao MP para proposta.
- Nova definição da **competência de outro juízo** → remessa dos autos (art. 383, §2º) — desclassificação para infração de menor potencial ofensivo desloca o feito ao **JECrim**, com direito a **transação penal** e composição civil.

## Mutatio libelli (CPP 384) — a prova revela o que a denúncia não narrou

Encerrada a instrução, se surgir **prova de elemento ou circunstância não contida na acusação**, o MP **deve aditar** a denúncia em **5 dias** (aditamento espontâneo), reduzindo-se a termo se feito oralmente em audiência. Se o MP não aditar e o juiz reputar cabível, aplica-se o **art. 28 do CPP** (aditamento provocado — remessa à instância de revisão ministerial; a redação do art. 28 foi alterada pela Lei 13.964/2019 e teve vigência controvertida: **confira o texto e o regime vigentes via agente `lei-e-sumula`** antes de citar).

**Fluxo procedimental (cada etapa é um direito da defesa):**

1. **Aditamento oferecido** (oral ou escrito) →
2. **Defesa ouvida em 5 dias** (§2º) — é AQUI que entra a manifestação desta skill: admissibilidade + requerimentos subsidiários;
3. **Juiz decide**: rejeita (§5º — o processo simplesmente prossegue pela imputação original) ou **admite**;
4. **Admitido**: *a requerimento de qualquer das partes*, o juiz designa **continuação da audiência**, com inquirição de testemunhas, **novo interrogatório**, debates e julgamento (§2º);
5. **Cada parte pode arrolar até 3 testemunhas em 5 dias** (§4º);
6. **Sentença adstrita aos termos do aditamento** (§4º, parte final).

> **Atenção à expressão "a requerimento":** a continuação da audiência com nova instrução **não é automática** — sem requerimento expresso da defesa, o juiz pode seguir direto para julgamento. Requeira **sempre**, na própria manifestação: continuação da audiência, novo interrogatório (autodefesa — interrogatório como último ato da instrução) e a oitiva das testemunhas arroladas.

**Súmula 453 do STF — trave de segundo grau:** não se aplica o art. 384 em segunda instância. O Tribunal **não pode** dar nova definição jurídica ao fato com base em elementar não contida, explícita ou implicitamente, na denúncia. Se a condenação em 1º grau se apoiou em elementar **não aditada**, a solução em apelação é a **nulidade ou a absolvição/desclassificação para o fato efetivamente imputado** — nunca o "aditamento em grau recursal".

**Recorribilidade:** a decisão que **admite** o aditamento é, em regra, irrecorrível — impugna-se por **habeas corpus** quando houver ilegalidade flagrante (ex.: fato novo autônomo travestido de mutatio). Contra a que **rejeita**, há corrente admitindo RESE por interpretação extensiva do art. 581, I — questão controvertida (interesse do MP, não da defesa): confira via `jurisprudencia-stj-stf`.

## Prazos — todos correm em 5 dias e todos precluem

| Ato | Prazo | Base | Cautela prática |
|---|---|---|---|
| MP aditar (espontâneo) | 5 dias do encerramento da instrução | art. 384, *caput* | intempestividade é arguível, mas a jurisprudência tende a relativizar — não construa a defesa só sobre isso |
| **Manifestação da defesa sobre o aditamento** | **5 dias da vista** | art. 384, §2º | a peça desta skill; perder o prazo = perder a discussão de admissibilidade |
| **Arrolar até 3 testemunhas** | **5 dias** | art. 384, §4º | **arrole desde logo na própria manifestação**, por eventualidade — não espere a admissão para não arriscar preclusão |
| Requerer continuação da audiência / novo interrogatório | junto com a manifestação | art. 384, §2º | direito condicionado a **requerimento** — silêncio preclui |

> **Contagem (CPP, art. 798):** prazo processual penal é **contínuo e em dias corridos** — não se aplica a contagem em dias úteis do CPC. Exclui-se o dia do começo e inclui-se o do vencimento (§1º); termo final em domingo/feriado prorroga para o dia útil imediato (§3º). **Defensoria Pública:** todos os prazos **em dobro** e intimação **pessoal** (LC 80/94) — a manifestação do §2º e o rol do §4º correm em **10 dias**.

## A nova capitulação pode abrir benefícios — peça-os expressamente

Tanto na emendatio (art. 383, §1º) quanto na mutatio (art. 384, §3º), se a **nova definição jurídica** comportar benefício despenalizador, ele deve ser viabilizado **antes de o processo seguir**:

- **Suspensão condicional do processo** (art. 89, Lei 9.099/95) — pena mínima cominada ≤ 1 ano na nova capitulação. **Súmula 337 do STJ:** cabível a suspensão condicional do processo **na desclassificação do crime** e na procedência parcial da pretensão punitiva. Se o MP recusar proposta sem justificativa idônea, **Súmula 696 do STF:** o juiz, dissentindo, remete a questão ao Procurador-Geral por analogia ao art. 28. Detalhe na skill `suspensao-condicional-processo`.
- **Transação penal e composição civil** (arts. 72-76, Lei 9.099/95) — desclassificação para infração de menor potencial ofensivo desloca a competência ao JECrim (art. 383, §2º) e abre a via consensual. Detalhe na skill `transacao-penal`.
- **ANPP** (art. 28-A do CPP) — nova capitulação com pena mínima **inferior a 4 anos**, infração **sem violência ou grave ameaça**, mediante **confissão formal e circunstanciada**: requeira vista ao MP para proposta. A extensão dos §§ do 383/384 ao ANPP e o alcance temporal do acordo em processos em curso são construção jurisprudencial em evolução — **pesquise o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até confirmar. Requisitos e roteiro na skill `anpp`.

> **Não peça o benefício "se o juízo entender cabível" — demonstre o cabimento**: aponte a pena mínima da nova capitulação, os requisitos subjetivos preenchidos e requeira a **suspensão do feito até a deliberação** sobre a proposta.

## Estrutura forense da manifestação (art. 384, §2º)

Peça dirigida ao **juízo onde tramita a ação** (o mesmo da instrução). Organize em ordem de eventualidade: primeiro a inadmissibilidade do aditamento; subsidiariamente, os direitos instrutórios e os benefícios.

```
AO JUÍZO DA [N]ª VARA CRIMINAL DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a), por seu(sua) advogado(a), nos autos da ação penal
em epígrafe, vem, no prazo do art. 384, §2º, do CPP, apresentar

        MANIFESTAÇÃO SOBRE O ADITAMENTO À DENÚNCIA

pelas razões que seguem:

I — SÍNTESE DO ADITAMENTO
Imputação original x imputação aditada: qual elementar/circunstância foi
acrescida, com base em qual prova produzida na instrução.

II — DA INADMISSIBILIDADE DO ADITAMENTO (desenvolver as que couberem)
   1. Fato novo autônomo — não é mutatio: fato diverso e independente exige
      NOVA DENÚNCIA com instrução própria, não aditamento do art. 384.
   2. Ausência de suporte probatório — a elementar deve emergir de "prova
      existente nos autos" (art. 384, caput); aditamento especulativo é inepto.
   3. Inépcia da imputação aditada — descrição genérica, sem fato certo e
      circunstanciado (art. 41 do CPP, por simetria; art. 395, I).
   4. Momento inadequado — instrução não encerrada / sentença já proferida /
      processo em grau recursal (Súmula 453 do STF).
   5. Violação da correlação — o aditamento tenta "legalizar" elementar que a
      sentença não poderia considerar; ou emendatio disfarçando mutatio.

III — SUBSIDIARIAMENTE: DOS REQUERIMENTOS INSTRUTÓRIOS (art. 384, §§2º e 4º)
   Caso admitido o aditamento, requer desde logo, por eventualidade:
   a) a CONTINUAÇÃO DA AUDIÊNCIA de instrução (§2º);
   b) a inquirição das TESTEMUNHAS abaixo arroladas (até 3 — qualificar:
      nome, CPF se possível, endereço, e o que cada uma esclarece);
   c) NOVO INTERROGATÓRIO do acusado, como último ato da instrução;
   d) as diligências decorrentes da nova imputação [perícia, juntada, ofício];
   e) prazo para debates/memoriais após a nova instrução.

IV — DOS BENEFÍCIOS DECORRENTES DA NOVA DEFINIÇÃO JURÍDICA (art. 384, §3º
     c/c art. 383, §§1º e 2º) — desenvolver o que couber
   Suspensão condicional do processo (Súmula 337 STJ) / remessa ao JECrim
   com transação penal / vista ao MP para proposta de ANPP (art. 28-A) —
   demonstrando pena mínima da nova capitulação e requisitos subjetivos.

V — DOS PEDIDOS (em ordem sucessiva)
   a) a REJEIÇÃO do aditamento (art. 384, §5º), prosseguindo o feito pela
      imputação original;
   b) subsidiariamente, admitido o aditamento, o deferimento dos
      requerimentos instrutórios do item III, sob pena de nulidade;
   c) reconhecida definição jurídica que os admita, a suspensão do feito
      para proposta de [suspensão condicional / transação / ANPP], ou a
      remessa dos autos ao juízo competente (art. 383, §2º);
   d) protesta pela manifestação após a nova instrução, em debates ou
      memoriais.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos/cautelas anexas:** cópia do termo de audiência com o aditamento oral reduzido a termo; rol de testemunhas qualificado; procuração nos autos; se pedir benefício, certidões que demonstrem os requisitos subjetivos (antecedentes, primariedade).

## Teses típicas da defesa

- **Fato novo autônomo ≠ mutatio** — se o "aditamento" descreve fato histórico diverso e independente (outro roubo, outra vítima, outro contexto), exige-se **denúncia nova**, com recebimento, resposta à acusação e instrução próprias. O art. 384 só cobre elementar/circunstância **do mesmo fato**.
- **Mutatio disfarçada de emendatio** — sentença que condena por fato com elementar não narrada nem aditada é nula (correlação). Ataque em apelação; em 2º grau **não se convalida** (Súmula 453 STF).
- **Aditamento sem lastro na prova da instrução** — o *caput* exige "prova existente nos autos"; aditamento fundado em suposição, em elemento exclusivo do inquérito ou em prova ilícita não se admite. Use o agente `analise-denuncia` para confrontar imputação aditada x prova efetivamente produzida.
- **Inépcia do aditamento** — a imputação nova deve ser tão certa e circunstanciada quanto uma denúncia (art. 41); aditamento genérico repete o vício da denúncia genérica.
- **Cerceamento de defesa por instrução não reaberta** — admitido o aditamento e requerida a continuação da audiência, o indeferimento do novo interrogatório ou das testemunhas tempestivamente arroladas é nulidade por cerceamento (art. 5º, LV, CF).
- **Benefício sonegado** — desclassificação (na sentença ou pelo aditamento) que comporta suspensão condicional/transação/ANPP sem que se abra a via consensual: Súmulas 337 STJ e 696 STF; em embargos ou apelação, a omissão é vício sanável com retorno dos autos.
- **Excesso acusatório instrumental** — capitulação inflada apenas para bloquear benefícios; pleitear o ajuste (emendatio antecipada, excepcional) com a cautela de verificação já apontada.

## Erros comuns e pegadinhas

- **Confundir os institutos** — pedir "rejeição da emendatio" (não existe: emendatio não depende de aceitação) ou silenciar diante de aditamento tratando-o como mera requalificação.
- **Deixar correr os 5 dias** — o prazo do §2º corre no meio da instrução, muitas vezes da própria audiência em que o aditamento foi oral. Anote o termo inicial no ato.
- **Não arrolar as testemunhas desde logo** — o prazo do §4º também é de 5 dias; a prática segura é arrolar **na própria manifestação**, por eventualidade, qualificando cada testemunha e indicando o que esclarece.
- **Esquecer o requerimento expresso de continuação da audiência e novo interrogatório** — o §2º condiciona a nova instrução a **requerimento**; o silêncio preclui e valida o julgamento direto.
- **Aceitar mutatio em 2º grau** — Súmula 453 STF: vedação absoluta; nem o Tribunal nem o MP em contrarrazões podem "completar" a imputação.
- **Endereçar errado após desclassificação** — nova capitulação de competência do JECrim (ou de outro juízo) impõe remessa (art. 383, §2º); prosseguir no juízo incompetente contamina os atos decisórios.
- **Não pedir os benefícios** — a defesa que não demonstra o cabimento de suspensão condicional/transação/ANPP na nova capitulação perde o momento processual; depois, restará discutir a omissão por via recursal, com custo de tempo de processo (e de prisão, se houver cautelar).
- **Ignorar a adstrição da sentença ao aditamento** (§4º, parte final) — se a condenação extrapolar os termos aditados, há nova violação de correlação: guarde a tese para apelação.
- **Construir a defesa apenas na intempestividade do aditamento do MP** — o prazo de 5 dias do *caput* é tido por relativizável; use como reforço, nunca como tese única.

## Checklist antes de protocolar

- [ ] Identifiquei corretamente: é **emendatio** (mesmo fato) ou **mutatio** (elementar nova)?
- [ ] O aditamento descreve **fato novo autônomo**? → tese de inadmissibilidade + exigência de denúncia nova
- [ ] A elementar aditada tem **suporte em prova da instrução** (não só do inquérito)?
- [ ] Imputação aditada é **certa e circunstanciada** (art. 41)?
- [ ] Prazo de **5 dias** da vista (§2º) sob controle — termo inicial anotado? (dias **corridos**, art. 798; **em dobro** se Defensoria)
- [ ] **Até 3 testemunhas arroladas e qualificadas** na própria manifestação (§4º)?
- [ ] **Continuação da audiência + novo interrogatório** requeridos expressamente (§2º)?
- [ ] Nova capitulação admite **suspensão condicional (Súmula 337 STJ) / transação / ANPP**? Cabimento demonstrado?
- [ ] Recusa injustificada do MP à proposta → **Súmula 696 STF** invocada?
- [ ] Nova capitulação desloca **competência** (JECrim/outro juízo)? Remessa pedida (art. 383, §2º)?
- [ ] Pedidos em **ordem sucessiva** (rejeição → instrução → benefícios)?
- [ ] Estamos em **2º grau**? → mutatio vedada (Súmula 453 STF); a via é contrarrazões/HC, não manifestação do 384
- [ ] Precedentes atuais sobre ANPP na desclassificação e contraditório prévio na emendatio **verificados** via `jurisprudencia-stj-stf` (nada citado de memória; pendências marcadas [NÃO VERIFICADO])?
- [ ] Redação do art. 28 do CPP (pós-Lei 13.964/2019) **conferida** via `lei-e-sumula` antes de citar?

## Apoie-se em

- **Agente `analise-denuncia`** — confronto entre a imputação aditada e a prova dos autos: é a base técnica das teses de inadmissibilidade (fato novo, falta de lastro, inépcia).
- **Agente `defesa-criminal-resposta-acusacao`** — estrutura defensiva da resposta à acusação (CPP 396-A); esta skill cobre o momento **posterior** (reação ao aditamento no curso da instrução) — não duplique: para a RA, use o agente.
- **Skill `memoriais`** — alegações finais: é lá que se antecipa a emendatio favorável e se consolida a tese de violação da correlação; esta skill alimenta aquele momento.
- **Skill `suspensao-condicional-processo`** — requisitos, condições e roteiro do art. 89 da Lei 9.099/95 quando a nova capitulação o admitir.
- **Skill `transacao-penal`** — via consensual no JECrim após desclassificação para menor potencial ofensivo.
- **Skill `anpp`** — requisitos do art. 28-A e roteiro de negociação quando a nova definição jurídica couber no acordo.
- **Agentes `jurisprudencia-stj-stf` e `lei-e-sumula`** — verificação obrigatória de precedentes (ANPP na desclassificação, contraditório prévio na emendatio, RESE contra rejeição de aditamento) e da redação vigente do art. 28 do CPP.
- **Agente `verificador-citacoes`** — Citation Gate antes do protocolo: toda súmula (453 STF, 337 STJ, 696 STF), artigo e precedente citado na peça passa pela verificação; nada vai de memória.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima da peça: teoria do caso, narrativa, subsunção explícita e persuasão. **Aplique sempre.**
