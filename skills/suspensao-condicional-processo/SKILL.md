---
name: suspensao-condicional-processo
description: >-
  Use ao manifestar-se sobre proposta de suspensão condicional do processo (sursis processual — art.
  89 da Lei 9.099/95): crimes com pena mínima ≤ 1 ano, abrangidos ou não pela Lei 9.099/95. Cobre
  cabimento, requisitos do art. 77 do CP, proposta do MP, condições, período de prova (2 a 4 anos),
  revogação obrigatória/facultativa e extinção da punibilidade. Gatilhos: suspensão condicional do
  processo, sursis processual, art. 89… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, justica-negocial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-suspensao-condicional-processo"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["suspensao-condicional-processo", "suspensao condicional", "condicional processo"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Suspensão Condicional do Processo (sursis processual — art. 89 da Lei 9.099/95)

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

Esta skill orienta a manifestação da defesa sobre a **suspensão condicional do processo** (sursis processual): instituto despenalizador que, **recebida a denúncia**, suspende o curso da ação penal por um **período de prova** mediante condições; cumpridas, **extingue a punibilidade** sem que haja sentença condenatória, sem reincidência e sem maus antecedentes.

> **Lição central:** não confunda com a **transação penal** (art. 76). A transação ocorre **antes** da denúncia e impõe pena restritiva/multa de imediato; o sursis processual ocorre **depois do recebimento** da denúncia e apenas **suspende** o processo, sem aplicação de pena. O critério de cabimento também difere: transação olha a **pena máxima** (≤ 2 anos); o sursis olha a **pena mínima** (≤ 1 ano).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 89 da Lei 9.099/95 e do art. 77 do CP, bem como a sobrevida das Súmulas 337/STJ, 723/STF, 243/STJ e do enunciado da Súmula Vinculante 35 (esta relativa à transação). Verifique súmulas, temas repetitivos e eventual *overruling* pela skill `verificacao-citacoes` antes de fundamentar. Atenção: o **ANPP** (art. 28-A do CPP) é instituto distinto e, em geral, anterior à denúncia — não se confunde com o sursis processual.

## Natureza e momento processual

O sursis processual **não** é direito subjetivo automático do réu, mas também **não** é faculdade discricionária pura do MP: presentes os requisitos legais, a proposta é **obrigatória**, e a recusa imotivada do MP é controlável (art. 28 do CPP por analogia; ver Súmula 696/STF). Trata-se de **transação processual** que pressupõe **aceitação do acusado e de seu defensor**.

| Eixo | Transação penal (art. 76) | Suspensão condicional do processo (art. 89) |
|---|---|---|
| **Momento** | Antes da denúncia (fase preliminar) | Após o **recebimento** da denúncia |
| **Critério** | Pena **máxima** ≤ 2 anos (menor potencial ofensivo) | Pena **mínima** ≤ 1 ano (qualquer rito) |
| **Efeito** | Aplica pena restritiva/multa de imediato | **Suspende** o processo; não há pena nem condenação |
| **Resultado do cumprimento** | Extingue a punibilidade | Extingue a punibilidade (art. 89, §5º) |

## Cabimento — pena mínima ≤ 1 ano

Cabe sursis processual nos crimes cuja **pena mínima cominada seja igual ou inferior a 1 ano**, **abrangidos ou não** pela Lei 9.099/95 (art. 89, *caput*). Logo, o instituto **não se restringe ao JECRIM**: aplica-se também na Justiça Comum, desde que respeitado o limite da pena mínima.

**Como aferir a pena mínima (regras consolidadas):**
- **Causas de aumento/diminuição:** consideram-se no cálculo. Incidem sobre a pena mínima no **mínimo** (para as majorantes) e no **máximo** (para as minorantes) — **Súmula 723/STF**: não cabe sursis quando, com a causa de aumento, a pena mínima superar 1 ano.
- **Concurso de crimes:** somam-se (material) ou exaspera-se (formal/continuado) a pena mínima. **Súmula 243/STJ**: incabível o sursis quando, no concurso, a pena mínima ultrapassar 1 ano.
- **Qualificadoras:** alteram os próprios limites da pena — considera-se a pena mínima do tipo qualificado.

> **Limites materiais:** o sursis **não se aplica** a crimes de violência doméstica e familiar contra a mulher (art. 41 da Lei 11.340/2006 afasta a Lei 9.099/95 — Súmula 536/STJ), nem aos crimes militares (art. 90-A da Lei 9.099/95).

## Requisitos (art. 89, *caput*, c/c art. 77 do CP)

Cumulativos. A ausência de qualquer um inviabiliza a proposta:

1. **Pena mínima ≤ 1 ano** (cominada ao crime, com as regras acima).
2. **Não estar sendo processado** por outro crime (litispendência de ação penal) — observada a **presunção de inocência**: processos sem trânsito não geram, por si, antecedentes, mas o requisito é legal e expresso.
3. **Não ter sido condenado** por outro crime.
4. **Requisitos do art. 77 do CP** (os mesmos do sursis da pena): culpabilidade, antecedentes, conduta social, personalidade do agente, motivos e circunstâncias **autorizem** a concessão.

> **Súmula 337/STJ:** é cabível a suspensão condicional do processo **na desclassificação do crime e na procedência parcial da pretensão punitiva** — ou seja, se ao longo do feito a imputação se reduz a delito cuja pena mínima se enquadra, abre-se a oportunidade do sursis ainda que antes não coubesse.

## Proposta do Ministério Público

Ao oferecer a denúncia, **se presentes os requisitos**, o MP **deve** propor a suspensão (art. 89, *caput*). A proposta integra a denúncia ou é formalizada na sequência. Pontos de controle pela defesa:

- **Proposta obrigatória, não discricionária:** havendo requisitos, a recusa exige fundamentação idônea; recusa imotivada ou baseada em critério vedado (ex.: gravidade abstrata) é controlável — **Súmula 696/STF** (discordância defesa × MP remete ao art. 28 do CPP por analogia).
- **Ação penal privada:** prevalece o entendimento de que cabe o sursis, com legitimidade do **querelante** para a proposta.
- **Aceitação:** depende da concordância do **acusado e do defensor** (art. 89, §1º). A defesa deve garantir **decisão informada do cliente** sobre as condições e seus efeitos.

## Condições (art. 89, §1º e §2º)

Aceita a proposta e suspenso o processo, o juiz fixará as **condições legais** (§1º) e poderá especificar **outras condições** (§2º), adequadas ao fato e à situação pessoal:

**Condições legais (§1º):**
- I — **reparação do dano**, salvo impossibilidade de fazê-lo;
- II — **proibição de frequentar** determinados lugares;
- III — **proibição de ausentar-se** da comarca onde reside, sem autorização do juiz;
- IV — **comparecimento pessoal e obrigatório** a juízo, mensalmente, para informar e justificar suas atividades.

**Condições facultativas (§2º):** quaisquer outras adequadas ao fato e à situação pessoal do acusado, observada a **proporcionalidade**. Não podem converter o sursis em pena antecipada (ex.: prestação pecuniária ou prestação de serviços impostas como condição são admitidas pela jurisprudência quando proporcionais, mas a defesa deve impugnar exigências desarrazoadas).

## Período de prova (2 a 4 anos)

O processo fica suspenso por **2 (dois) a 4 (quatro) anos** (art. 89, *caput*). Durante esse prazo:
- corre o cumprimento das condições;
- **não há sentença** de mérito;
- a **prescrição fica suspensa** (art. 89, §6º) — não corre durante o período de prova.

## Revogação

**Revogação OBRIGATÓRIA (art. 89, §3º):** a suspensão **será** revogada se, no curso do prazo, o beneficiário:
- vier a ser **processado por outro crime**; ou
- **não efetuar, sem motivo justificado, a reparação do dano**.

**Revogação FACULTATIVA (art. 89, §4º):** a suspensão **poderá** ser revogada se o acusado:
- vier a ser **processado por contravenção**; ou
- **descumprir qualquer outra condição** imposta.

> **Revogação após o término do período de prova:** admite-se a revogação **mesmo após o decurso do prazo**, desde que os fatos ensejadores (ex.: processo por outro crime) tenham ocorrido **dentro** do período de prova e a punibilidade ainda não tenha sido formalmente declarada extinta — entendimento consolidado no STJ/STF. A defesa deve postular a **extinção** tão logo cumprido o prazo, justamente para estabilizar a situação.

## Extinção da punibilidade (art. 89, §5º)

**Expirado o prazo sem revogação**, o juiz declarará **extinta a punibilidade**. Efeitos:
- **não gera reincidência**;
- **não gera maus antecedentes** (não houve condenação);
- a aceitação da proposta **não importa confissão** nem reconhecimento de culpa.

## Estrutura da manifestação

A peça é **manifestação/requerimento** dirigida ao juízo do feito. Há três cenários típicos: (a) **concordar** com a proposta do MP; (b) **requerer** o sursis quando o MP, devendo, não propôs; (c) **impugnar condições** desproporcionais.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
[ou DO JUIZADO ESPECIAL CRIMINAL] DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a) nos autos da ação penal em epígrafe, por seu(sua)
advogado(a) que esta subscreve (procuração anexa), vem, respeitosamente,
à presença de Vossa Excelência, MANIFESTAR-SE acerca da SUSPENSÃO
CONDICIONAL DO PROCESSO (art. 89 da Lei 9.099/95), pelas razões a seguir:

I — DO CABIMENTO
   O delito imputado [tipificação] comina pena mínima de [___], igual/inferior
   a 1 (um) ano (art. 89, caput), sendo o instituto cabível ainda que o crime
   não esteja abrangido pela Lei 9.099/95.
   [Se for o caso] Em razão da desclassificação/procedência parcial, abre-se a
   oportunidade do sursis (Súmula 337/STJ).

II — DOS REQUISITOS
   O(a) acusado(a) NÃO está sendo processado(a) nem foi condenado(a) por outro
   crime, preenchendo, ademais, os requisitos do art. 77 do CP (bons
   antecedentes, conduta social e personalidade favoráveis).

III — [escolher o pedido]
   (a) Da concordância com a proposta: aceita a proposta ofertada pelo MP,
       comprometendo-se ao cumprimento das condições do art. 89, §1º.
   (b) Do requerimento (MP não propôs, devendo): presentes os requisitos, a
       proposta é obrigatória; requer-se a abertura de vista ao MP e, persistindo
       a recusa imotivada, a aplicação do art. 28 do CPP (Súmula 696/STF).
   (c) Da impugnação de condições: as condições [especificar] são
       desproporcionais (art. 89, §2º), pelo que se requer sua adequação/exclusão.

IV — DOS PEDIDOS
   Requer-se: a) a SUSPENSÃO CONDICIONAL DO PROCESSO pelo período de prova de
   [2 a 4] anos, com as condições legais do art. 89, §1º; b) a suspensão da
   prescrição (art. 89, §6º); c) ao final do período, a DECLARAÇÃO DE EXTINÇÃO
   DA PUNIBILIDADE (art. 89, §5º).

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; certidão de antecedentes criminais; comprovante de residência; documentos que demonstrem os requisitos do art. 77 do CP (conduta social, ocupação lícita); quando houver dano, comprovante de reparação ou demonstração de impossibilidade.

## Checklist de teses (verificar antes de protocolar)

**Cabimento:**
- [ ] Pena **mínima** ≤ 1 ano, considerando majorantes (Súm. 723/STF) e concurso (Súm. 243/STJ)?
- [ ] Houve **desclassificação** ou **procedência parcial** que agora viabilize o sursis (Súm. 337/STJ)?
- [ ] Não se trata de violência doméstica (Súm. 536/STJ) nem crime militar (art. 90-A)?
- [ ] A denúncia já foi **recebida** (momento correto do instituto)?

**Requisitos:**
- [ ] Acusado **não** está sendo processado nem foi condenado por outro crime?
- [ ] Requisitos do **art. 77 do CP** preenchidos (antecedentes, conduta, personalidade)?

**Proposta e condições:**
- [ ] MP propôs? Se não, e havendo requisitos, acionar art. 28 do CPP (Súm. 696/STF)?
- [ ] **Decisão informada do cliente** quanto a condições e efeitos colhida?
- [ ] Condições do §2º **proporcionais**? Há exigência desarrazoada a impugnar?
- [ ] Reparação do dano viável, ou demonstrada a **impossibilidade** (art. 89, §1º, I)?

**Período de prova e desfecho:**
- [ ] Período de prova entre **2 e 4 anos** adequadamente fixado?
- [ ] Atenção às causas de **revogação obrigatória** (§3º) e **facultativa** (§4º)?
- [ ] Cumprido o prazo, requerida a **extinção da punibilidade** (§5º)?

## Lembretes finais

- **Sursis processual ≠ transação:** depois do recebimento da denúncia; olha a pena **mínima** (≤ 1 ano); **suspende** o processo, não aplica pena.
- **Proposta obrigatória** presentes os requisitos — recusa imotivada do MP é controlável (Súm. 696/STF; art. 28 do CPP).
- **Aceitação não é confissão** e o cumprimento **não gera reincidência nem maus antecedentes**.
- **Súmula 337/STJ** abre o sursis na desclassificação e na procedência parcial.
- **Súmulas 723/STF e 243/STJ** — majorantes e concurso entram no cálculo da pena mínima.
- **Prescrição suspensa** no período de prova (§6º); revogação possível mesmo após o prazo se o fato ocorreu **dentro** dele.
- Garantir **decisão informada do cliente** sobre condições, prazo e consequências da revogação.
- **Conferir vigência** do art. 89, do art. 77 do CP e das súmulas pela skill `verificacao-citacoes`, adaptando sempre ao caso concreto.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
