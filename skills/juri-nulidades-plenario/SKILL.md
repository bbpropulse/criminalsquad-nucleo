---
name: juri-nulidades-plenario
description: >-
  Use para identificar, arguir NA HORA e REGISTRAR EM ATA as nulidades ocorridas na sessão de
  julgamento do Tribunal do Júri (2ª fase / plenário) — leitura de peça vedada, referência à decisão
  de pronúncia como argumento de autoridade, uso indevido de algemas, cerceamento de defesa, aparte
  abusivo, quebra da incomunicabilidade dos jurados — preservando a matéria para a apelação pela
  alínea 'a' do art. 593, III, CPP. Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, juri, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-nulidades-plenario"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-nulidades-plenario", "juri nulidades", "nulidades plenario"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Nulidades no Plenário do Júri (arts. 480-497, 563-564, 571 e 593, III, 'a', CPP)

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

Esta skill é um **checklist operacional de sala**: como **identificar** os vícios que ocorrem durante a sessão de julgamento do Tribunal do Júri (2ª fase), **arguí-los no momento exato** e, sobretudo, **consigná-los em ATA** para que a nulidade não precluia e a **apelação pela alínea 'a' do art. 593, III, CPP** (nulidade posterior à pronúncia) sobreviva.

> **Lição central:** no júri, **nulidade não registrada em ata é nulidade morta.** As nulidades ocorridas *depois* da pronúncia — inclusive as da sessão — precisam ser arguidas **logo depois de ocorrerem** (art. 571, VIII, CPP), sob pena de **preclusão**. O que não está na ata **não aconteceu** para o Tribunal *ad quem*. A régua de ouro é sempre a mesma: **arguir na hora → exigir consignação em ata → protestar se indeferido.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 478 a 497 e 563 a 571 do CPP — a sistemática do procedimento do júri foi reescrita pela **Lei 11.689/2008** (é dela que vêm as vedações de leitura do art. 478 e a disciplina atual dos apartes). Confira também súmulas, súmulas vinculantes, temas e eventual *overruling* via a skill `jurisprudencia-stj-stf` **antes** de fundamentar. Na dúvida sobre qualquer precedente específico, **omitir vence inventar**.

## Base legal

- **Arts. 480-484 CPP** — condução da sessão: apartes e reperguntas (art. 480), leitura de documento não juntado com 3 dias de antecedência (art. 479), esclarecimentos e leitura dos quesitos (art. 484).
- **Arts. 478-479 CPP** — **leituras e referências VEDADAS** em plenário (núcleo desta skill — ver abaixo).
- **Art. 474, §3º CPP** — vedação ao **uso de algemas** durante o período em que o réu permanece no plenário, salvo necessidade justificada (dialoga com a **SV 11/STF**).
- **Art. 497 CPP** — poderes e deveres do **juiz-presidente** (regula a sessão, resolve incidentes, mantém a ordem — inclusive a disciplina dos apartes).
- **Art. 466 CPP** — **incomunicabilidade dos jurados** após o sorteio (a quebra é causa de nulidade).
- **Art. 563 CPP** — princípio do prejuízo: *pas de nullité sans grief* (não há nulidade sem demonstração de prejuízo).
- **Art. 564 CPP** — rol (não exaustivo) das nulidades processuais.
- **Art. 571, VIII CPP** — **momento de arguição**: as nulidades ocorridas **depois da pronúncia** (as da sessão de julgamento) devem ser arguidas **logo depois de anunciado o julgamento e apregoadas as partes** (art. 571, V) e, quanto às da própria sessão, **logo que ocorram** — daí a exigência de protesto imediato em ata.
- **Art. 593, III, 'a' CPP** — cabimento da **apelação** quando "ocorrer nulidade **posterior** à pronúncia" (é a via recursal que o registro em ata alimenta).
- **CF, art. 5º, XXXVIII** — soberania dos veredictos, plenitude de defesa, sigilo das votações (parâmetros constitucionais que muitas nulidades violam).

> **Distinção operacional.** `juri-plenario-debates` prepara a **tese e a oralidade**; `juri-quesitacao` cuida das nulidades **de quesitação** (formulação e ordem dos quesitos). **Esta skill** cobre o universo mais amplo de nulidades da **SESSÃO** — leitura vedada, referência à pronúncia, algemas, cerceamento, incomunicabilidade — e a **técnica de consigná-las em ata** para a apelação da alínea 'a'.

---

## 🎯 As leituras e referências VEDADAS — arts. 478-479 CPP (o coração da skill)

O art. 478 do CPP proíbe que as partes, **durante os debates**, façam **referências**, **sob pena de nulidade**, a três núcleos:

```
I  — à DECISÃO DE PRONÚNCIA, às decisões posteriores que julgaram
     admissível a acusação OU à determinação do uso de algemas,
     como ARGUMENTO DE AUTORIDADE que beneficie ou prejudique o acusado;
II — ao SILÊNCIO do acusado ou à ausência de interrogatório por falta
     de requerimento, em seu prejuízo.
```

E o **art. 479 CPP** veda a **leitura de documento ou a exibição de objeto** que **não tenha sido juntado aos autos com a antecedência mínima de 3 dias úteis**, dando ciência à outra parte (inclui vídeos, gravações, laudos novos, mídias).

> **Por que a referência à pronúncia é o vício mais comum.** A pronúncia é decisão de **mera admissibilidade** (juízo de indícios, *in dubio pro societate* na 1ª fase). Usá-la em plenário **como argumento de autoridade** ("o juiz já disse que ele é o autor") **contamina a soberania e a íntima convicção** dos jurados leigos, que passam a decidir com base no aval de um magistrado togado. Por isso a lei a proíbe **expressamente** — e o momento de reagir é **imediato**, com protesto em ata.

**O que a defesa fiscaliza durante os debates (art. 478):**
1. O acusador **leu ou invocou a pronúncia** (ou o acórdão que a confirmou) como argumento de autoridade? → nulidade do art. 478, I.
2. Referiu-se à **decisão que determinou algemas** para prejudicar o réu? → nulidade do art. 478, I.
3. Explorou o **silêncio** do réu em seu prejuízo? → nulidade do art. 478, II.
4. Foi **lido documento/exibida mídia** não juntado com 3 dias úteis de antecedência? → nulidade do art. 479.

---

## ⛓️ Uso de algemas — art. 474, §3º CPP + SV 11/STF

- O réu **não pode permanecer algemado** durante o tempo em que estiver no plenário, **salvo se absolutamente necessário** à ordem dos trabalhos, à segurança das testemunhas ou à garantia da integridade física dos presentes (art. 474, §3º).
- A **SV 11/STF** exige **justificação por escrito** para o uso de algemas, sob pena de **nulidade** do ato e responsabilidade. Manter o réu algemado à vista dos jurados, sem fundamentação concreta e individualizada, **prejudica a presunção de inocência** e influi no ânimo do Conselho.
- **Reação:** arguir a nulidade **no ato**, exigir que a **justificativa (ou a ausência dela)** conste em ata, e protestar. O prejuízo à imparcialidade dos jurados é o argumento central.

---

## 🚫 Cerceamento de defesa, apartes e incomunicabilidade

| Vício da sessão | Descrição | Base | Reação imediata |
|---|---|---|---|
| **Referência à pronúncia** | Acusação usa a pronúncia/acórdão confirmatório como argumento de autoridade | art. 478, I | Protesto em ata **na hora**; requerer que o juiz advirta os jurados |
| **Leitura de documento novo** | Leitura/exibição de peça, mídia ou objeto não juntado com 3 dias úteis | art. 479 | Impugnar antes/no ato da leitura; consignar |
| **Exploração do silêncio** | Referência ao silêncio do réu em seu prejuízo | art. 478, II | Protesto em ata; pedir advertência ao Conselho |
| **Algemas indevidas** | Réu algemado sem justificação escrita | art. 474, §3º; SV 11 | Arguir no ato; exigir justificativa em ata |
| **Aparte abusivo** | Aparte não autorizado, sucessivo ou usado para tumultuar/prejudicar | art. 497 (poder do juiz) | Reclamar ao juiz-presidente; consignar o excesso |
| **Cerceamento do tempo/da palavra** | Defesa impedida de falar, de replicar ou de usar o tempo legal | plenitude de defesa (CF, art. 5º, XXXVIII) | Protesto em ata; documentar o quanto foi tolhido |
| **Quebra da incomunicabilidade** | Jurado se comunica sobre o processo após o sorteio | art. 466 CPP | Arguir no ato; requerer providências; consignar |
| **Violação do sigilo das votações** | Ato que expõe o voto individual do jurado | CF, art. 5º, XXXVIII, 'b' | Consignar imediatamente |
| **Julgamento sem defensor efetivo** | Defesa meramente formal / réu indefeso | art. 564, III, 'c' | Súmula 523/STF — nulidade absoluta |

> **Sobre apartes.** O aparte é tolerado como interrupção breve e pontual, mas **cabe ao juiz-presidente** regular a palavra (art. 497). Aparte **sucessivo, agressivo ou usado para tumultuar** a fala da parte contrária pode configurar **cerceamento** — reclame ao juiz **no momento** e exija consignação do excesso e da decisão presidencial.

---

## ⚖️ Nulidade absoluta × relativa e a demonstração de prejuízo (art. 563)

O eixo de toda arguição no júri passa por três perguntas:

1. **O vício é absoluto ou relativo?**
   - **Absoluta:** viola garantia fundamental (plenitude de defesa, soberania, imparcialidade, ampla defesa). Em tese, **não preclui** e o **prejuízo é presumido** — mas, na prática, o STJ/STF frequentemente ainda exige alguma demonstração de prejuízo concreto. **Confirme o enquadramento do vício concreto na jurisprudência atual** via `jurisprudencia-stj-stf`.
   - **Relativa:** **preclui** se não arguida no momento próprio (art. 571, VIII) e **exige prova do prejuízo** (art. 563 — *pas de nullité sans grief*).
2. **O prejuízo está demonstrado (art. 563)?** Mesmo na nulidade absoluta, **descreva o prejuízo concreto** — como o vício afetou o resultado ou a imparcialidade do Conselho. Alegação genérica de nulidade tende a naufragar.
3. **A arguição foi tempestiva e consignada?** As nulidades da **sessão** devem ser arguidas **logo que ocorrem** (art. 571, VIII). Sem protesto imediato em ata, a **relativa preclui** e a apelação da alínea 'a' perde a base fática.

> **Regra de ouro (repetir sempre):** trate **toda** nulidade como se fosse relativa — **argua na hora, demonstre o prejuízo e consigne em ata**. Assim você preserva a matéria seja qual for o enquadramento que o tribunal vier a dar. É mais seguro consignar a mais do que perder por preclusão.

---

## 🛠️ A TÉCNICA DE CONSIGNAÇÃO EM ATA (o passo que salva a apelação)

A **ata da sessão** (art. 495 CPP) é a prova do que ocorreu no plenário. É ela que instrui a **apelação da alínea 'a'**. Sem registro, o Tribunal presume que o vício não existiu.

**Roteiro do protesto em ata (memorizar):**
```
1) IDENTIFICAR o vício no instante em que ocorre (não deixar passar).
2) ARGUIR ORALMENTE, de forma fundamentada, dirigindo-se ao juiz-presidente
   ("Excelência, a defesa argui a nulidade decorrente de [vício], com
   fundamento no art. [478, I / 479 / 474, §3º...] do CPP").
3) REQUERER EXPRESSAMENTE a consignação em ata do FATO, da ARGUIÇÃO da defesa
   E da DECISÃO do juiz-presidente (deferimento/indeferimento).
4) Se pertinente, REQUERER a PROVIDÊNCIA (ex.: advertência aos jurados para
   desconsiderarem a referência; retirada das algemas; dissolução do Conselho).
5) Indeferida a arguição, PROTESTAR e exigir que o PROTESTO conste da ata —
   é o protesto que mantém a matéria viva para o art. 593, III, 'a'.
6) CONFERIR a ata antes de assiná-la: se o registro estiver incompleto ou
   incorreto, requerer retificação ANTES do encerramento da sessão.
```

> **Cuidado prático:** não basta "reclamar" — é preciso **requerer a consignação** e **verificar** se o escrivão de fato registrou. Ata redigida pelo cartório sob a direção do juiz pode omitir o que foi dito; a conferência antes da assinatura é responsabilidade da defesa.

---

## ⚔️ Teses e contra-teses (recursais)

**Teses defensivas (apelação, art. 593, III, 'a'):**
- **Referência à pronúncia como argumento de autoridade** (art. 478, I): contaminou a soberania e a íntima convicção dos jurados leigos — nulidade, com protesto consignado.
- **Leitura de documento não juntado com 3 dias úteis** (art. 479): rompeu o contraditório e a paridade de armas — nulidade.
- **Algemas sem justificação escrita** (art. 474, §3º; SV 11): comprometeu a presunção de inocência perante o Conselho.
- **Cerceamento de defesa / réu indefeso**: violação da plenitude de defesa (CF, art. 5º, XXXVIII) e do art. 564, III, 'c' — nulidade absoluta (**Súmula 523/STF**: a falta de defesa constitui nulidade absoluta; a deficiência só a anula se houver prejuízo).
- **Quebra da incomunicabilidade** (art. 466): jurado comunicou-se sobre o feito — nulidade da própria composição do Conselho.

**Contra-tese (acusação) e como preveni-la:**
- A acusação sustentará **preclusão** (falta de protesto tempestivo, art. 571, VIII) e **ausência de prejuízo** (art. 563). **A defesa neutraliza isso com o protesto imediato consignado em ata e a descrição concreta do prejuízo** — é exatamente para vencer essa contra-tese que o registro existe.

---

## 🔎 Roteiro de análise (uso da skill)

Diante do relato de uma sessão de júri, siga:

```
1) MAPEAR os atos da sessão em ordem cronológica (instrução → debates →
   quesitação → votação → ata).
2) Para CADA ato, perguntar: houve leitura/referência vedada, algemas,
   cerceamento, aparte abusivo ou quebra de incomunicabilidade?
3) Enquadrar o vício no dispositivo (art. 478, I/II; 479; 474, §3º; 466;
   564; plenitude de defesa).
4) Classificar em absoluta × relativa (e CONFERIR na jurisprudência atual).
5) Verificar se houve ARGUIÇÃO TEMPESTIVA e CONSIGNAÇÃO EM ATA — se sim,
   a matéria está viva; se não, avaliar preclusão (relativa) x
   irrelevância da preclusão (absoluta, a confirmar).
6) DESCREVER O PREJUÍZO concreto (art. 563) para cada vício.
7) Redigir a fundamentação da APELAÇÃO pela alínea 'a' (art. 593, III),
   apontando fato + dispositivo + protesto em ata (fl./ev.) + prejuízo.
```

---

## ❌ Erros comuns (anti-padrões)

- **Não arguir na hora** e "guardar" a nulidade para a apelação — a relativa **preclui** (art. 571, VIII).
- **Reclamar sem exigir a consignação em ata** — o vício some do processo.
- **Não conferir a ata** antes de assinar — o registro incompleto inutiliza o protesto.
- **Alegar nulidade genérica**, sem descrever o **prejuízo concreto** (art. 563) — mesmo a absoluta costuma exigir demonstração.
- **Confundir a apelação da alínea 'a'** (nulidade posterior à pronúncia) com a **'d'** (decisão manifestamente contrária à prova) ou a **'b'/'c'** (erro na aplicação da pena/injustiça) — a via muda conforme o vício.
- **Tratar a pronúncia como prova** de autoria em plenário — é decisão de admissibilidade; invocá-la como argumento de autoridade é o próprio vício do art. 478, I.
- **Deixar passar o uso de algemas** sem exigir a justificação escrita (SV 11).
- **Citar a sistemática anterior à Lei 11.689/2008** — erro grave de vigência.

---

## ✅ Checklist final (DEFESA em plenário)

- [ ] Acompanhei **cada ato** da sessão pronto para identificar vícios **no instante**?
- [ ] Houve **referência à pronúncia** (ou ao acórdão confirmatório) como argumento de autoridade (art. 478, I)? → protestei em ata?
- [ ] Houve **exploração do silêncio** do réu em seu prejuízo (art. 478, II)?
- [ ] Foi **lido documento/exibida mídia** sem juntada com 3 dias úteis (art. 479)?
- [ ] O réu ficou **algemado** sem justificação escrita (art. 474, §3º; SV 11)?
- [ ] Houve **aparte abusivo** ou **cerceamento** da palavra/tempo da defesa?
- [ ] Houve **quebra da incomunicabilidade** dos jurados (art. 466)?
- [ ] Para cada vício: **arguição oral fundamentada** dirigida ao juiz-presidente?
- [ ] **Requeri a consignação em ata** do fato, da arguição **e** da decisão presidencial?
- [ ] Indeferido: **protesto consignado** para o art. 593, III, 'a'?
- [ ] Descrevi o **prejuízo concreto** (art. 563) de cada nulidade?
- [ ] **Conferi a ata** (art. 495) antes de assiná-la e requeri retificação, se necessário?
- [ ] Enquadramento absoluta × relativa e todos os precedentes **conferidos** via `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável antes de recorrer?

---

## ⚠️ Cautelas e diretriz anti-alucinação

- **Confira a redação vigente dos arts. 478-497 e 563-571 do CPP.** A disciplina atual das vedações de leitura (art. 478), da leitura de documentos (art. 479) e das algemas (art. 474, §3º) vem da **Lei 11.689/2008**. Antes de afirmar qualquer regra, confirme o texto atual na fonte oficial.
- **Toda súmula, súmula vinculante, tese ou acórdão** (ex.: SV 11 sobre algemas; Súmula 523/STF sobre falta/deficiência de defesa; jurisprudência do STJ/STF sobre a natureza absoluta ou relativa de cada vício da sessão) passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes do uso. Não cite número de HC, REsp, RE, informativo ou tema **de memória**. Na dúvida, **omitir vence inventar** — melhor faltar precedente do que citar julgado inexistente.
- **Revisão humana obrigatória.** A responsabilidade pela atuação em plenário, pelas arguições e pelos protestos é sempre do **advogado** (CED, art. 2º; EAOAB; Provimento 205/2021). Este material é apoio à preparação de sala e à análise recursal — **não** substitui o juízo profissional nem a leitura da ata concreta.

---

## Lembretes finais

- **Nulidade sem ata é nulidade morta** — arguir na hora → consignar → protestar.
- **Momento de arguição:** vícios da sessão, **logo que ocorrem** (art. 571, VIII), sob pena de preclusão (na relativa).
- **Vedação-mãe:** **não referir a pronúncia como argumento de autoridade** (art. 478, I) — é o vício mais frequente e o mais lesivo à soberania dos jurados.
- **Documento novo** só entra em plenário se juntado com **3 dias úteis** de antecedência (art. 479).
- **Algemas** exigem **justificação escrita** (art. 474, §3º; SV 11).
- **Prejuízo concreto sempre** (art. 563) — mesmo na nulidade absoluta.
- **A via recursal é a apelação da alínea 'a'** (art. 593, III) — e ela se alimenta da ata.
- **Conferir vigência e precedentes** via `jurisprudencia-stj-stf` antes de recorrer.

**Padrão de redação:** ao redigir a apelação ou as razões de nulidade, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
