---
name: restauracao-autos-penais-extraviados
description: >-
  Use ao conduzir ou impugnar a RESTAURAÇÃO de autos penais extraviados ou destruídos (CPP, arts.
  541 a 548) — iniciativa e autuação do incidente, fontes admissíveis das cópias e certidões,
  garantia do contraditório na reconstrução, efeitos do extravio sobre a prisão cautelar e a
  prescrição, nulidades por reconstrução incompleta, provas não recuperáveis e favor rei, e
  peculiaridades do processo eletrônico (PJe/Eproc)… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, processo, restauracao-autos, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["restauracao-autos-penais-extraviados", "restauracao autos", "penais extraviados"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-restauracao-autos-penais-extraviados"]
---

# Restauração de autos penais extraviados ou destruídos — Procedimento

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

Esta skill orienta a atuação técnica no **incidente de restauração de autos** penais que se **extraviaram** (perda física ou digital) ou foram **destruídos** — regulado pelos **arts. 541 a 548 do CPP**. O incidente é um **procedimento-meio**: não julga o mérito da imputação, mas **reconstrói o suporte documental** do processo para que ele possa prosseguir. O bem jurídico processual em jogo é a **integridade do devido processo** — não se pode julgar (nem manter alguém preso) sobre um processo que, materialmente, deixou de existir.

> **Lição central:** a restauração **reconstrói o continente, nunca o conteúdo perdido**. Ela recompõe peças a partir de **cópias e certidões idôneas**, mas **não recria a prova que não foi documentada**. O eixo de atuação é duplo: (1) exigir que a reconstrução seja **completa e contraditória** — só vai aos autos restaurados o que tiver **fonte verificável**; e (2) fazer valer o **favor rei** sobre tudo que se perdeu e **não pode ser refeito**. Prova irrecuperável que fundamentava a acusação **não ressuscita por presunção**: o vazio probatório milita a favor do réu, não contra ele.

> **Cautela de vigência (obrigatória antes de citar):** o procedimento dos arts. 541-548 é **estável e antigo**, mas seus **efeitos** — sobretudo sobre a **prescrição** e sobre a **manutenção da prisão cautelar** durante o extravio — dependem de **jurisprudência específica**. Antes de afirmar qualquer efeito prescricional (suspensão, interrupção, cômputo do prazo enquanto os autos estão sumidos), **confira a tese e o dispositivo pela skill `jurisprudencia-stj-stf`**. Não cite súmula, tema ou acórdão de memória. Na dúvida, **omitir vence inventar**.

## Base legal

- **CPP, art. 541** — **iniciativa e autuação** do incidente de restauração dos autos extraviados ou destruídos: a restauração pode ser promovida **de ofício** ou **a requerimento das partes**; instaura-se o incidente e procede-se à sua **autuação** autônoma.
- **CPP, arts. 542 a 544** — **instrução da restauração**: reúnem-se **certidões, cópias autênticas** e demais elementos de que se tenha registro (traslados, contrafés, atos praticados, decisões publicadas), ouvindo-se as partes; concluída a coleta, o juiz **julga a restauração** e os autos restaurados **valem pelos originais**.
- **CPP, arts. 546 a 547** — **custas** do incidente (responsabilidade por quem deu causa/extravio) e **prosseguimento do feito** após restaurado, retomando o curso do ponto reconstruído; **art. 548** — regra de encerramento (aparecimento dos autos originais, apensamento).
- **Efeitos sobre a prisão e a prescrição** — o extravio **não é causa autônoma de soltura**, mas repercute na **duração razoável** e na **legalidade da custódia** enquanto o processo não pode andar; e projeta-se sobre o **cômputo da prescrição** (art. 109 do CP e marcos do art. 117). **Cada efeito passa pelo Citation Gate.**
- **CPP, arts. 798 e ss.** — **contagem de prazos** processuais, relevante para aferir a paralisação e a eventual prescrição durante o extravio.
- **Lei 11.419/2006** (processo eletrônico) — **extravio de autos digitais**: corrupção de arquivos, indisponibilidade do sistema, perda de dados no **PJe/Eproc**; a lógica dos arts. 541-548 se **aplica por analogia**, com as peculiaridades da fonte digital (backups, logs, assinatura eletrônica).

## Anatomia do incidente — roteiro do procedimento (o que se disseca)

Trate a restauração como um procedimento com **cinco momentos verificáveis**. Em cada um há uma frente de atuação.

1. **Fato gerador — extravio ou destruição (art. 541).** Confirmar o quê se perdeu: autos **integrais** ou **parciais**? Quando? Como (sinistro, furto, falha de sistema)? A **certidão do cartório/secretaria** sobre o extravio é o documento-base. Sem clareza sobre a extensão da perda, não há como controlar a completude da reconstrução.
2. **Iniciativa e autuação (art. 541).** O incidente pode ser instaurado **de ofício** pelo juiz ou **provocado** pela parte. A defesa tem **interesse ativo** em provocá-lo quando o vazio favorece a extinção/soltura, e **interesse fiscalizatório** quando é a acusação quem promove a reconstrução.
3. **Instrução — coleta das fontes (arts. 542-544).** Reúnem-se as **cópias e certidões idôneas**: traslados, contrafés, peças em poder das partes, decisões publicadas em diário, cópias do MP/OAB, registros de sistema. **Aqui mora o contraditório**: cada peça reintroduzida deve ter **origem identificável** e ser **submetida às partes**.
4. **Julgamento da restauração (arts. 543-544).** O juiz decide o que **integra** os autos restaurados. Peça sem fonte idônea **não entra**. Os autos restaurados **substituem os originais** para todos os efeitos.
5. **Prosseguimento e encerramento (arts. 546-548).** O feito **retoma** do ponto reconstruído; definem-se **custas**; se os **originais reaparecem**, faz-se o cotejo/apensamento (art. 548).

**Método:** teste cada momento em separado. A frente decisiva de atuação está nos passos **3 e 4** — a **completude** e a **idoneidade da fonte** de cada peça reintroduzida.

## Roteiro tático (frentes de atuação)

1. **Fixar a extensão exata da perda.** Requerer **certidão detalhada** do que existia e do que se perdeu (índice/andamentos anteriores ao extravio). Sem esse mapa, qualquer reconstrução é arbitrária. Comparar o índice pré-extravio com o que se pretende restaurar.
2. **Exigir fonte idônea para cada peça (arts. 542-544).** Toda peça reintroduzida deve vir de **cópia autêntica ou certidão** com origem verificável. **Impugnar** documento avulso, cópia sem autenticação, "reconstituição de memória" ou peça trazida unilateralmente sem submissão à parte contrária.
3. **Assegurar o contraditório na reconstrução.** Requerer **vista** de tudo que se pretende inserir e **manifestação prévia** ao julgamento da restauração. A reconstrução feita **sem** ouvir a defesa é nulidade (ver seção própria).
4. **Mapear a prova irrecuperável e invocar o favor rei.** Identificar o que **não pode ser refeito** (mídia de audiência perdida, laudo original sumido, documento único destruído). Prova acusatória irrecuperável **não se presume** — sustentar que o vazio **não** pode ser suprido em desfavor do réu e, conforme o caso, **repetição do ato** (nova oitiva, nova perícia) sob contraditório, ou reconhecimento da **insuficiência probatória**.
5. **Controlar a prisão cautelar durante o extravio.** Se há **réu preso** e o processo **não pode andar** por falta de autos, atacar o **excesso de prazo** e a **falta de justa causa para a manutenção** da custódia enquanto não restaurado — via pedido de relaxamento/revogação e, se preciso, **HC**. O extravio não pode virar fundamento oculto de prisão indefinida.
6. **Trabalhar a prescrição (sob o gate).** Levantar o **período de paralisação** e cotejar com os marcos do **art. 117 do CP** e os prazos do **art. 109**. Verificar se o extravio gerou **paralisação computável** para a prescrição — **sem afirmar efeito** sem checar a jurisprudência atual via `jurisprudencia-stj-stf`.
7. **Cuidar do meio digital (Lei 11.419/06).** Em PJe/Eproc, requerer **restauração a partir de backups, logs e cópias de segurança** do próprio tribunal; questionar **integridade e autenticidade** dos arquivos recuperados (hash, assinatura eletrônica, cadeia de custódia digital). O extravio digital raramente é total — exija do sistema o que ele guarda.
8. **Definir custas e responsabilidade (arts. 546-547).** Aferir **quem deu causa** ao extravio para fins de custas e, se houver **negligência do Estado/serventia**, registrar para as consequências cabíveis.

## Contra-teses (antecipar a posição adversa)

Conduzindo a restauração **em favor da acusação/prosseguimento**, ou antecipando o que a parte contrária sustentará:

- **"A cópia idônea supre o original."** Verdadeiro para peças **documentadas** — a restauração existe justamente para isso. A defesa **rebate** apenas quanto ao que **não** tem cópia/certidão idônea; não se opõe à reintrodução de peça com fonte verificável.
- **"O ato já praticado é válido e não se repete."** Atos **regularmente documentados** e reconstituídos por certidão preservam sua validade. O ataque da defesa se concentra no ato **cuja prova se perdeu** e cuja **repetição** é necessária ao contraditório.
- **"O extravio não beneficia o réu."** Correto para a **forma** (o processo se reconstrói); **incorreto** para o **conteúdo probatório irrecuperável**, onde o ônus é da acusação e o vazio favorece o réu.
- **"A prescrição não corre / fica suspensa."** **Não afirmar** em nenhum sentido sem checar a jurisprudência específica — este é o ponto mais sensível, e a posição varia. Passe pelo gate.

## Distinção de figuras próximas

| Instituto | Traço distintivo | Consequência prática |
|---|---|---|
| **Restauração de autos (arts. 541-548)** | autos **existiam** e se **perderam/destruíram** | reconstrói-se o suporte; feito **prossegue** do ponto reconstruído |
| **Desentranhamento/prova ilícita (art. 157)** | peça **retirada** por ilicitude, deliberadamente | não é perda — é **exclusão** com efeito de contaminação |
| **Nulidade processual (arts. 563 ss.)** | ato **existe** mas é **viciado** | anula-se o ato; não se reconstrói suporte |
| **Suspensão do processo (ex.: art. 366)** | processo **para** por causa legal específica | não há perda de autos; regime próprio de prescrição |
| **Extravio parcial vs. total** | perda de **algumas peças** vs. **do processo** | parcial: restaura-se o faltante; total: reconstrói-se o feito e revê-se a base da custódia/prescrição |

**Uso:** não confundir **perda** (restauração) com **exclusão** (prova ilícita) nem com **vício** (nulidade). Cada um tem via e efeito distintos.

## Nulidades típicas da reconstrução (o que impugnar)

- **Reconstrução sem contraditório** — peças inseridas **sem** vista prévia às partes → nulidade por violação da ampla defesa (arts. 563 ss.).
- **Fonte inidônea** — documento avulso, cópia não autenticada, "memória" da serventia, peça trazida unilateralmente → **impugnar a inclusão**.
- **Reconstrução incompleta apresentada como completa** — julgar restaurados autos com **lacunas** relevantes sem ressalva → prosseguir sobre base falsamente íntegra é vício.
- **Repetição negada de ato irrecuperável** — indeferir nova oitiva/perícia quando a prova original se perdeu e o ato é essencial ao contraditório.
- **Prosseguimento com réu preso** sem reexame da justa causa da custódia à luz do extravio.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** o **procedimento** dos arts. 541-548 é estável, mas os **efeitos** (prescrição durante o extravio, manutenção da prisão, ônus da reconstrução, validade de peças digitais recuperadas) têm **jurisprudência específica e nem sempre uniforme**. **Não cite súmula, tema ou acórdão de memória.** Marque **[NÃO VERIFICADO]** e confirme **tese + dispositivo** via `jurisprudencia-stj-stf` antes de levar à peça.

- Efeito do extravio sobre a **prescrição** (se e como o período de paralisação se computa) → **[NÃO VERIFICADO]** — conferir.
- **Excesso de prazo** e relaxamento da prisão por impossibilidade de andamento durante o extravio → **[NÃO VERIFICADO]** — conferir.
- **Validade e integridade** de peças recuperadas de backup/log em processo eletrônico (Lei 11.419/06) → **[NÃO VERIFICADO]** — conferir.

Qualquer precedente citado como exemplo **passa pelo gate** — não há afirmação de efeito prescricional ou cautelar sem verificação atual.

## Checklist e anti-padrões

- [ ] **Extensão da perda** certificada (índice pré-extravio × o que se pretende restaurar)?
- [ ] **Iniciativa** correta (de ofício ou a requerimento) e **autuação** regular do incidente (art. 541)?
- [ ] **Cada peça reintroduzida** tem **fonte idônea** (cópia autêntica/certidão) e origem verificável (arts. 542-544)?
- [ ] **Contraditório** garantido — vista e manifestação das partes antes do julgamento da restauração?
- [ ] **Prova irrecuperável** mapeada e **favor rei** invocado; repetição do ato requerida quando essencial?
- [ ] **Réu preso** — justa causa da custódia e **excesso de prazo** reexaminados diante do extravio?
- [ ] **Prescrição** — período de paralisação levantado e **conferido** via `jurisprudencia-stj-stf` (nada afirmado de memória)?
- [ ] **Meio digital** — backups/logs requeridos e **integridade/autenticidade** dos arquivos recuperados questionadas (Lei 11.419/06)?
- [ ] **Custas** e responsabilidade pelo extravio aferidas (arts. 546-547)?
- [ ] **Súmulas/precedentes** sobre efeitos conferidos pelo gate — nada citado de memória?

**Anti-padrões (evitar):**
- Aceitar peças reconstituídas **sem fonte idônea** ou por "memória" da serventia.
- Deixar a reconstrução correr **sem contraditório** e só reclamar depois.
- Presumir que a **prova acusatória irrecuperável** se mantém — o vazio é do ônus da acusação, não do réu.
- **Afirmar efeito prescricional** (suspensão, interrupção, contagem) **sem** passar pelo gate.
- Tolerar **prisão cautelar** mantida por inércia enquanto os autos estão sumidos, sem atacar o excesso de prazo.
- Tratar **extravio digital** como perda total sem exigir do tribunal **backups, logs e cópias de segurança**.
- Confundir **restauração** (perda) com **prova ilícita** (exclusão) ou **nulidade** (vício).

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Apoio metodológico ao incidente de restauração; não substitui o juízo do(a) profissional responsável (CED/EAOAB).
- **Polo (spec: neutro-defensivo):** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. O incidente é, em si, **neutro** — reconstrói o processo. Mas a **leitura probatória se inverte** conforme o polo: para a **defesa**, o vazio irrecuperável milita a favor do réu e cada peça reintroduzida deve provar sua fonte; atuando como **acusação / Ministério Público**, o dever é **reconstruir de forma completa e idônea**, garantindo o contraditório, sem se valer de presunção contra o réu. Ajuste a ênfase ao polo antes de redigir.
- **Citation Gate:** nenhuma súmula, tese ou precedente — em especial sobre **efeitos na prescrição e na prisão** — vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** peças e dados reconstituídos do assistido não vão a repositório público; observe eventual segredo de justiça do feito original.

## Lembretes finais

- **Reconstrói-se o continente, não o conteúdo perdido** — fonte idônea para cada peça, favor rei sobre o irrecuperável.
- **Contraditório na reconstrução** é inegociável — vista e manifestação antes do julgamento da restauração.
- **Extensão da perda primeiro** — sem o mapa do que existia, não se controla a completude.
- **Réu preso** exige reexame imediato da justa causa e do excesso de prazo durante o extravio.
- **Prescrição e efeitos** — nunca de memória; sempre pelo gate `jurisprudencia-stj-stf`.
- **Digital não é perda total** — exija backups, logs e a integridade dos arquivos recuperados (Lei 11.419/06).

**Padrão de redação:** ao redigir a peça (requerimento de instauração, impugnação à restauração, pedido de relaxamento por excesso de prazo), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
