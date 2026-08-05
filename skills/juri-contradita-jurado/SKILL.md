---
name: juri-contradita-jurado
description: >-
  Use ao formular a CONTRADITA de um jurado no ato do sorteio do Conselho de Sentença — exclusão
  motivada por incompatibilidade, falta de requisito ou vínculo comprometedor (arts. 448-449, 466
  CPP), com fundamentação oral, decisão de plano do juiz-presidente e registro em ata para preservar
  a nulidade. Gatilhos: contradita de jurado, habilitação de jurados, sorteio do Conselho de
  Sentença, recusa motivada, recusa… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-contradita-jurado"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-contradita-jurado", "juri contradita", "contradita jurado"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Contradita de Jurado (arts. 448-449 e 466 CPP)

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

Esta skill orienta a **formulação da contradita** — o ato **oral** de impugnação de um jurado **no momento em que ele é sorteado** para compor o Conselho de Sentença, na 2ª fase do júri. A contradita é o instrumento pelo qual a parte pede a **exclusão motivada** de um jurado incompatível, impedido, suspeito ou sem os requisitos legais, **decidida de plano** pelo juiz-presidente (art. 449). Distingue-se da recusa peremptória (imotivada), e sua má execução — sem consignar o motivo e o inconformismo em ata — **mata a nulidade** em eventual recurso.

> **Lição central:** a contradita é **motivada** e **não gasta** recusa peremptória. O erro fatal é impugnar o jurado (por suspeição, parentesco, requisito faltante) **sem exigir o registro em ata** do fundamento, da decisão do juiz e do protesto. Sem ata, a matéria **preclui** e o vício da composição do Conselho morre no plenário. **Contraditar é fácil; blindar o registro é o que preserva a nulidade.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 436, 448, 449, 466 e 467 do CPP — a sistemática do júri foi reescrita pela **Lei 11.689/2008** e há alterações pontuais posteriores. Confira também súmulas, temas e overruling via a skill `jurisprudencia-stj-stf` (ou o gate `verificacao-citacoes`) antes de sustentar qualquer tese. Na dúvida, **omitir precedente vence inventar julgado**.

## O que é (e o que NÃO é) a contradita

A formação do Conselho de Sentença é feita por **sorteio** das cédulas com os nomes dos jurados presentes (art. 467). A cada nome sorteado, **antes de o jurado ser incluído no Conselho**, abre-se a oportunidade de:

- **Recusa peremptória (imotivada):** cada parte pode recusar **até 3 jurados sem declarar motivo** (art. 468). É direito potestativo — não se discute, não se decide, apenas se exerce.
- **Contradita (motivada):** impugnação **fundamentada**, quando o jurado é **impedido, suspeito, incompatível** com outro já sorteado, ou **não reúne os requisitos** do art. 436. **Não consome** recusa peremptória e é **decidida de plano** pelo juiz-presidente (art. 449).

> **A distinção que a spec exige (não confundir):** a **contradita** é ato **ORAL de habilitação**, no sorteio, decidido de plano em plenário (art. 449). A arguição de **suspeição/impedimento como PEÇA ESCRITA**, em autos apartados (arts. 95-112 CPP), é objeto da skill `excecoes-processuais` — dinâmica, prazo e registro **próprios e distintos**. Aqui tratamos do ato de plenário, não da exceção formal.

## Base legal (âncoras)

- **Art. 448, CPP** — **incompatibilidade entre jurados**: não podem servir no mesmo Conselho cônjuges/companheiros e parentes (ascendente/descendente, sogro e genro/nora, irmãos, cunhados durante o cunhadio, tio e sobrinho, padrasto/madrasta e enteado). Ausência de outra causa: o **primeiro sorteado** exclui o segundo (art. 448, §1º). Aplica-se também quem tenha, **com o acusado ou a vítima, relação** de parentesco/afinidade análoga (art. 448, §2º).
- **Art. 449, CPP** — não pode servir o jurado que **funcionou em julgamento anterior do mesmo processo**, que integrou o Conselho no **mesmo dia** (salvo desnecessidade de recusas) ou que manifestou **prévia disposição** para condenar/absolver. É o núcleo da **imparcialidade** do jurado.
- **Art. 466, CPP** — antes do sorteio, o juiz-presidente **adverte** os jurados sobre **impedimentos, suspeição e incompatibilidades** (art. 448-449) e sobre o dever de **incomunicabilidade** (§1º). A incomunicabilidade é causa de **dissolução do Conselho** se violada.
- **Art. 467, CPP** — o sorteio das cédulas e a formação do Conselho (7 jurados).
- **Art. 436 e §§, CPP** — **requisitos do jurado**: cidadão maior de 18 anos, de **notória idoneidade**; vedada exclusão por preconceito (§1º); ninguém é isento por cor/etnia, raça, credo, sexo, profissão, classe social/econômica, origem ou grau de instrução.
- **Arts. 447-448 / 462-463** — funcionamento da sessão, verificação de presença e quórum (mínimo de **15 jurados** para instalar; **estouro de urna** se não alcançado).
- **Arts. 254 e 252, CPP (por analogia)** — hipóteses de **suspeição** e **impedimento** aplicáveis, no que couber, ao jurado como julgador.

## Fundamentos de contradita — o que autoriza excluir o jurado

Organize a checagem em quatro blocos. Se **qualquer** deles falhar, há fundamento para contraditar.

1. **Falta de requisito (art. 436):** não é cidadão, menor de 18, **sem idoneidade notória** (ex.: fato concreto e público que comprometa a idoneidade — nunca preconceito, vedado pelo §1º).
2. **Impedimento (art. 449 + art. 252 por analogia):** já **funcionou em julgamento anterior do mesmo processo**; integrou o Conselho **no mesmo dia** (fora das exceções); é **parente/cônjuge de quem atua** no feito (juiz, MP, defensor, vítima, acusado, testemunha).
3. **Suspeição (art. 254 por analogia):** **amizade íntima ou inimizade capital** com parte; interesse no julgamento; **manifestação prévia** de disposição para condenar ou absolver (art. 449, III); vínculo com a vítima ou o acusado.
4. **Incompatibilidade entre jurados (art. 448):** dois jurados sorteados são **cônjuges/companheiros ou parentes** nas hipóteses do art. 448 — o **primeiro sorteado permanece**, o segundo é excluído (art. 448, §1º).

> **Onde a suspeição do jurado "aparece" na prática:** manifestações em redes sociais, declarações à imprensa, relação de vizinhança/trabalho com a família da vítima, participação em movimento pró-vítima/pró-réu. A defesa deve **chegar com o fundamento pronto** — o momento do sorteio é curto e não comporta diligência.

## Metodologia — passo a passo no plenário

O ato é **rápido e sequencial**; cada cédula sorteada abre uma janela mínima de reação. Roteiro:

```
1) ADVERTÊNCIA (art. 466): confira se o juiz advertiu os jurados sobre
   impedimentos, suspeição, incompatibilidades e incomunicabilidade.
   (Omissão da advertência é vício — registre.)

2) SORTEIO DA CÉDULA (art. 467): o juiz sorteia e lê o nome do jurado.

3) JANELA DE REAÇÃO — nesta ordem prática:
   a) Há FUNDAMENTO de contradita (requisito/impedimento/suspeição/
      incompatibilidade)?  → CONTRADITAR (motivada, não gasta peremptória).
   b) Não há fundamento, mas a parte quer excluir?
      → RECUSA PEREMPTÓRIA (imotivada, até 3 — economize-as).

4) FUNDAMENTAÇÃO ORAL: declare o motivo de forma objetiva
   (ex.: "Contradito o jurado, por suspeição — art. 254, I, c/c art. 449,
   III, CPP: manifestou publicamente disposição para condenar").

5) CONTRADITÓRIO: a parte contrária pode se manifestar; o juiz decide
   DE PLANO (art. 449). Prova sumária, se houver, apresenta-se na hora.

6) DECISÃO DO JUIZ-PRESIDENTE:
   ├── ACOLHE → jurado excluído; volta a cédula à urna; segue o sorteio.
   └── REJEITA → EXIGIR consignação em ata do fundamento, da decisão e do
       PROTESTO (para preservar a nulidade — art. 593, III, "a").

7) REGISTRO EM ATA (crítico): nome do jurado, fundamento invocado,
   decisão do juiz e protesto. Sem isso → PRECLUSÃO.

8) COMPLETAR 7 JURADOS: repete-se até formar o Conselho de Sentença.
```

> **Ordem prática entre contradita e recusa:** se há **fundamento**, **contradite primeiro** — a contradita **não consome** as suas 3 recusas peremptórias, que ficam preservadas para jurados que você só quer afastar por **estratégia**, sem motivo legal. Gastar peremptória onde cabia contradita é desperdício tático.

## O núcleo da nulidade — por que a ATA é tudo

A composição irregular do Conselho de Sentença é vício que, **se não arguido no momento do sorteio e consignado em ata, preclui** (nulidade em regra **relativa**, sujeita ao *pas de nullité sans grief* — art. 563 CPP). Daí a regra de ouro:

- **Impugne no ato** (na leitura da cédula, antes de o jurado ser aceito) — não depois.
- **Exija a consignação em ata** do (i) nome do jurado, (ii) fundamento concreto, (iii) decisão do juiz-presidente e (iv) **protesto** em caso de indeferimento.
- **O protesto mantém a matéria viva** para a **apelação (art. 593, III, "a" — nulidade posterior à pronúncia)**.

> **Relativa x absoluta.** Em regra o vício de composição é **nulidade relativa** (exige arguição tempestiva + prejuízo). Mas há situações que a jurisprudência trata com mais rigor (ex.: jurado **impedido** que efetivamente votou, quebra de imparcialidade demonstrada). **Confirme, no caso concreto e na jurisprudência atual do STJ/STF, se o vício é tido por absoluto ou relativo** — passe pelo gate `verificacao-citacoes`. Independentemente da classificação, **arguir e consignar sempre** é o que garante o conhecimento em recurso.

## Teses e contra-teses

**Teses (defesa que contradita):**
- **Suspeição por manifestação prévia (art. 449, III):** jurado que declarou, publicamente ou em juízo, disposição para condenar/absolver não pode servir — a imparcialidade é pressuposto do julgamento.
- **Impedimento por atuação anterior (art. 449, I):** jurado que já votou no **mesmo processo** (julgamento anulado e renovado) está impedido.
- **Incompatibilidade (art. 448):** parentesco entre jurados sorteados — exclui-se o **segundo** (art. 448, §1º).
- **Requisito de idoneidade (art. 436):** fato concreto e público que comprometa a idoneidade — sem tangenciar preconceito (vedado pelo §1º).
- **Cerceamento da recusa:** se o juiz **nega a contradita fundada** e obriga a defesa a **gastar peremptória** para afastar jurado que deveria ter sido excluído de ofício, há prejuízo à defesa — consignar.

**Contra-teses / riscos a antecipar (o que o adversário ou o juiz oporá):**
- **Ausência de prova sumária:** contradita por suspeição **sem lastro** (mera alegação) tende a ser rejeitada de plano — chegue com o elemento (print, notícia, declaração).
- **Preclusão:** vício **não arguido no ato** do sorteio não se conhece depois — o adversário invocará a intempestividade.
- **Falta de prejuízo (art. 563):** sendo nulidade relativa, exige-se demonstração de **prejuízo concreto** à parte — articule o prejuízo (imparcialidade comprometida, quebra da paridade).
- **Vedação de exclusão discriminatória (art. 436, §1º):** contradita que, no fundo, discrimina por cor, credo, sexo, classe, profissão ou instrução é **ilegal** e será (com razão) indeferida.

## Limites éticos (perfilamento e conduta com jurados)

Esta é uma zona de **risco ético e penal elevado**. A preparação da contradita e de recusas **jamais** pode tangenciar a manipulação do Conselho.

- **Perfilamento só com dados públicos e lícitos.** Levantar informações sobre jurados (para fundamentar contradita ou orientar a recusa peremptória) usa **exclusivamente** fontes **públicas e obtidas por meio lícito** — não se admite invasão de privacidade, dados sigilosos, engenharia social ou vigilância.
- **Vedado abordar, contatar, pressionar ou influenciar jurado.** É **proibido** qualquer contato — direto ou por interposta pessoa — com jurado, antes, durante ou depois da sessão, para induzir voto, colher informação ou "sentir" tendência. Isso pode configurar crime e infração ética grave.
- **Nada que comprometa a imparcialidade ou o sigilo.** É vedado tudo que possa quebrar a **incomunicabilidade** (art. 466, §1º), o **sigilo da votação** (sala secreta) ou a **imparcialidade** do Conselho de Sentença. Suspeita de contato indevido → comunicar ao juízo, não explorar.
- **Recusa peremptória: imotivada, sim; discriminatória, não.** A recusa dispensa motivo (art. 468), mas **não pode ter finalidade discriminatória ilícita** (afastar sistematicamente jurados por cor, credo, sexo, origem — a lógica do art. 436, §1º irradia sobre o exercício das recusas). Estratégia de exclusão **não é** libré para discriminar.
- **Revisão humana e responsabilidade do advogado.** A atuação em plenário, a decisão de contraditar e o exercício das recusas são de responsabilidade **pessoal e indelegável** do advogado (CED/EAOAB), sob o Provimento OAB **205/2021** quando houver componente digital de pesquisa. Este material é apoio à preparação, não substitui o juízo profissional na sessão.

## Erros comuns (anti-padrões)

- **Contraditar sem exigir registro em ata** → a nulidade morre no plenário (preclusão). É o erro nº 1.
- **Gastar recusa peremptória onde cabia contradita** → perde-se uma das 3 recusas sem necessidade (a contradita não as consome).
- **Chegar sem prova sumária** da suspeição/impedimento → contradita indeferida de plano por falta de lastro.
- **Confundir contradita (oral, no sorteio, art. 449) com exceção escrita** de suspeição/impedimento em autos apartados (arts. 95-112) → skill errada, rito errado.
- **Deixar de arguir no momento exato** (após a leitura da cédula, antes da aceitação) → intempestividade.
- **Não protestar** após o indeferimento → matéria não fica viva para a apelação (art. 593, III, "a").
- **Fundamentar contradita em preconceito** (art. 436, §1º) → ilegal e contraproducente.
- **Ignorar a advertência do art. 466** (impedimentos/incomunicabilidade) — sua omissão é vício que também se registra.
- **Esquecer a incompatibilidade entre jurados (art. 448)** quando dois parentes são sorteados → o segundo deve ser excluído.

## Checklist final (no plenário)

- [ ] O juiz **advertiu** os jurados (art. 466) sobre impedimentos, suspeição, incompatibilidades e **incomunicabilidade**?
- [ ] Levantei o **perfil dos jurados** apenas por **fontes públicas e lícitas** (sem qualquer contato)?
- [ ] Para cada cédula sorteada, avaliei **requisito (436) / impedimento (449) / suspeição (254) / incompatibilidade (448)**?
- [ ] Havendo fundamento, **contraditei** (motivada) **antes** de gastar recusa peremptória?
- [ ] Apresentei **prova sumária** do fundamento (print, notícia, declaração), quando exigível?
- [ ] Exigi a **consignação em ata**: nome do jurado + fundamento + decisão do juiz + **protesto**?
- [ ] Preservei minhas **3 recusas peremptórias** para uso estratégico (imotivado, não discriminatório)?
- [ ] Atentei à **incompatibilidade entre jurados** (art. 448) — excluído o **segundo** sorteado?
- [ ] Verifiquei **quórum** (mínimo 15 presentes) — sob pena de **estouro de urna**?
- [ ] **Nenhuma** exclusão fundada em preconceito (art. 436, §1º)?
- [ ] Toda base normativa/jurisprudencial passou pelo gate `verificacao-citacoes`?

## Lembretes finais

- **Contradita = motivada, decidida de plano (art. 449); recusa peremptória = imotivada, até 3 (art. 468).** Não se confundem e não se consomem.
- **Fundamento nos quatro blocos:** requisito (436), impedimento (449), suspeição (254 por analogia), incompatibilidade entre jurados (448).
- **Incompatibilidade → exclui o segundo sorteado** (art. 448, §1º).
- **A ata é a munição da apelação** (art. 593, III, "a"): fundamento + decisão + **protesto**, sempre.
- **Vício de composição em regra é nulidade relativa** — arguir no ato e demonstrar prejuízo (art. 563); confirmar caso a caso se é absoluta.
- **Ética inegociável:** perfilamento só com dado público lícito; **nunca** abordar/pressionar jurado; recusa imotivada **não** pode ser discriminatória.
- **Não é peça escrita** — para suspeição/impedimento em autos apartados, use `excecoes-processuais`.
- **Conferir vigência** dos arts. 436, 448-449, 466-467 CPP e das súmulas via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de sustentar.

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação para o plenário do júri**, sujeito a **revisão humana obrigatória** — a decisão de contraditar, o exercício das recusas e a fiscalização da formação do Conselho são de responsabilidade **pessoal e indelegável do advogado** (CED/EAOAB; Provimento OAB 205/2021 no que toca à pesquisa digital de jurados). Nenhuma súmula, tese ou precedente deve ser citado de memória: tudo passa pelo gate `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). O perfilamento de jurados restringe-se a **fontes públicas e lícitas**; é **vedado** qualquer contato, pressão ou influência sobre jurado, bem como qualquer conduta que comprometa a incomunicabilidade, o sigilo da votação ou a imparcialidade do Conselho de Sentença.
