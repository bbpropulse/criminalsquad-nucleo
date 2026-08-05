---
name: execucao-excesso-de-execucao
description: >-
  Use ao suscitar o incidente de EXCESSO ou DESVIO de execução perante o Juízo da Execução — quando
  a execução da pena viola a LEP, a sentença ou o título executivo em prejuízo do apenado (arts. 185
  e 186 da LEP): cumprimento além do devido, regime mais gravoso que o fixado, condição não prevista
  no título, negativa de benefício já implementado ou de assistência/direitos do preso. Gatilhos:
  excesso de execução, desvio de… Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, analise, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-excesso-de-execucao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-excesso-de-execucao", "execucao excesso", "excesso execucao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Excesso ou Desvio de Execução (arts. 185 e 186 da LEP)

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

Esta skill orienta a suscitação, na **origem** (1º grau, Juízo da Execução), do **incidente de excesso ou desvio de execução** — o instrumento pelo qual se corrige qualquer ato de execução que **contrarie a LEP, a sentença condenatória ou o título executivo** em prejuízo do apenado. É a concretização do **princípio da legalidade da execução** (art. 5º, XXXIX e XLVI, da CF; arts. 1º e 3º da LEP): ninguém cumpre pena além, aquém ou de modo diverso do que o título determina.

> **Lição central:** o incidente exige que você **identifique o parâmetro violado**. Excesso/desvio não é "achismo" — é a comparação entre **o que o título/LEP determina** e **o que está sendo executado**. Aponte com precisão: *este ato* viola *este dispositivo* / *esta parte do título*, e *por isso* há excesso (cumprimento além do devido) **ou** desvio (cumprimento por forma diversa da fixada). Sem o parâmetro, o pedido é indeferido.

> **Cautela de vigência (obrigatória antes de citar):** confira os **arts. 185, 186 e 66 da LEP** e o parâmetro material aplicável. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução. Confira toda autoridade no Citation Gate. Esta skill não substitui o agravo em execução contra decisão já proferida.

> **Gate P0 do art. 112:** excesso baseado em lapso só pode ser concluído após ler `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsultar fontes oficiais no mesmo dia e registrar regra intertemporal, alcance de decisões e revisor humano. Sem isso: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; não afirmar excesso numérico nem projetar benefício.

## O que é — e o que não é

- **Excesso de execução (art. 185, LEP):** ocorre quando o ato de execução vai **ALÉM** do título — cumpre-se **mais** do que a sentença/LEP autoriza. Ex.: manter o preso após o cumprimento integral da pena; exigir lapso maior que o legal para um benefício; contar mal a detração e prolongar a prisão; aplicar regime **mais gravoso** que o fixado.
- **Desvio de execução:** ocorre quando o ato **se afasta da FORMA** determinada pelo título/LEP — cumpre-se de **modo diverso** do fixado. Ex.: executar em regime fechado pena fixada em semiaberto; inserir condição não prevista na sentença; negar assistência/direito material assegurado ao preso (arts. 10 a 27 da LEP); descumprir o plano individualizador.
- **NÃO é recurso.** O incidente **suscita na origem** a correção do ato; ele **antecede** ou **dispensa** o recurso. Se o juiz **já decidiu** e você quer reformar a decisão, o caminho é o **agravo em execução** (art. 197 LEP). O incidente e o agravo se articulam: suscita-se o incidente → o juiz decide → da decisão cabe agravo.

## Base legal

- **Art. 185 da LEP** — define o **excesso ou desvio**: "Há excesso ou desvio de execução sempre que algum ato for praticado além dos limites fixados na sentença, em normas legais ou regulamentares".
- **Art. 186 da LEP** — **legitimidade** para suscitar: (I) o **Ministério Público**; (II) o **Conselho Penitenciário**; (III) o **sentenciado** (e, por extensão, sua defesa/Defensoria); (IV) demais órgãos da execução (arts. 61 e seguintes).
- **Art. 66, III e IV, da LEP** — **competência do Juízo da Execução** para decidir sobre a soma/unificação de penas, regime, e para zelar pelo correto cumprimento da pena e da medida de segurança (dever de correção de ofício).
- **Arts. 1º e 3º da LEP** — objetivos da execução e vedação de tratamento além do fixado; **arts. 10 a 27** — direitos e assistência ao preso (parâmetro clássico de desvio).
- **CF, art. 5º, XXXIX, XLVI e XLIX** — legalidade, individualização da pena e respeito à integridade física e moral do preso.

## Metodologia — roteiro de análise e suscitação

**Passo 1 — Reunir o parâmetro (o "dever ser").** Levante o **título executivo**: sentença/acórdão condenatório com trânsito (ou guia de recolhimento provisória/definitiva), o **cálculo de liquidação de pena** e a **decisão** que fixou regime, detração e condições. O parâmetro é o que o título + a LEP determinam.

**Passo 2 — Reunir o executado (o "ser").** Levante o que **efetivamente está ocorrendo**: regime em que o apenado se encontra, data-base e lapsos aplicados, condições impostas, negativa de benefício/assistência, tempo já cumprido. Documente com a folha de execução, o atestado de pena a cumprir e as certidões.

**Passo 3 — Confrontar e classificar.** Coloque parâmetro × executado lado a lado. A divergência é **excesso** (além/mais) ou **desvio** (forma diversa)? Nomeie o dispositivo/parte do título violado. **Esta subsunção é o coração da peça.**

**Passo 4 — Verificar a legitimidade e a via.** Confirme que você é legitimado (art. 186 — em regra, defesa pelo apenado). Confirme que **ainda não há decisão a recorrer** sobre o ponto (se houver, é agravo, art. 197). Sendo caso, o incidente é autuado e processado nos **autos da execução**.

**Passo 5 — Suscitar com pedido de correção imediata.** Peça a **correção do ato** e, quando houver risco à liberdade (excesso que prolonga indevidamente a prisão), **a expedição imediata do que for devido** (alvará de soltura, guia retificada, transferência de regime), inclusive com pedido de **urgência**.

## Hipóteses típicas (mapa de subsunção)

| Situação | Espécie | Parâmetro violado |
|---|---|---|
| Preso mantido após cumprir toda a pena | **Excesso** | Título + art. 66/LEP (extinção pelo cumprimento) |
| Regime fechado quando a sentença fixou semiaberto | **Desvio** | Sentença + art. 33 CP |
| Regime mais gravoso por **falta de vaga** | **Desvio/Excesso** | SV 56/STF; sentença |
| Lapso de benefício calculado a mais | **Excesso** | Art. 112 LEP + cálculo |
| Detração ignorada, prolongando a prisão | **Excesso** | Art. 42 CP / art. 387, §2º, CPP |
| Condição imposta na execução, ausente do título | **Desvio** | Sentença (limite do título) |
| Negativa de assistência/direito material ao preso | **Desvio** | Arts. 10 a 27 LEP; CF, art. 5º, XLIX |
| Data-base recalculada indevidamente após falta | **Excesso** | Súm. 534/STJ (limites do recálculo) |
| Soma de penas mal feita (unificação) prolonga a pena | **Excesso** | Art. 66, III, LEP; art. 75 CP |

## Teses defensivas e contra-teses

➡️ **Tese (defesa) — legalidade estrita da execução:** nenhum ato de execução pode ir **além** ou **desviar** do título; o excesso/desvio é ilegal e deve ser corrigido de imediato, independentemente de recurso, porque toca a liberdade (arts. 185-186 LEP; CF, art. 5º, XXXIX/XLVI).

➡️ **Tese — o Juízo da Execução não pode inovar o título:** ao juiz da execução **não** é dado criar condição, agravar regime ou impor exigência ausente da sentença condenatória; fazê-lo é **desvio**. A execução é serva do título, não sua fonte.

➡️ **Tese — vaga é ônus do Estado (SV 56/STF):** a falta de estabelecimento adequado **não** autoriza manter o condenado em regime mais gravoso; cabe prisão domiciliar/monitoração, jamais o regime fechado como paliativo.

➡️ **Tese — correção de ofício:** ainda que ninguém suscite, o juiz da execução tem o **dever** de zelar pela correta execução (art. 66, LEP); requerer que o Juízo, verificando o excesso, corrija-o **de ofício** reforça o pedido.

➡️ **Contra-tese (acusação/Estado) e resposta:** costuma-se opor que "o ponto já foi decidido" (então seria agravo) ou que "há discricionariedade administrativa". **Resposta:** se **não houve decisão** sobre o ato concreto, o incidente é a via própria; e a legalidade da execução **não é discricionária** — o excesso/desvio é matéria de ordem pública, corrigível a qualquer tempo.

## Súmulas e precedentes relevantes (sob o Citation Gate)

Cite livremente os **dispositivos** (arts. 185, 186, 66 LEP; art. 5º CF; art. 42 CP). Para súmulas notórias abaixo, **confirme a vigência** via `jurisprudencia-stj-stf` antes de fundamentar:

- **Súmula Vinculante 56/STF** — a falta de estabelecimento penal adequado **não** autoriza a manutenção do condenado em regime mais gravoso (parâmetro central do **desvio** por falta de vaga).
- **Súmula 715/STF** — em concurso/unificação, a base de cálculo de benefícios é a **soma** das penas (parâmetro contra excesso na unificação — ver skill `execucao-unificacao-penas`).
- **Súmula 534/STJ** — falta grave interrompe o prazo da progressão e fixa nova data-base sobre o **saldo**; recálculo **além** desses limites configura **excesso** (ver skill `execucao-remicao-falta-grave`).
- **Súmula 441/STJ** — falta grave **não** interrompe o livramento condicional (recálculo que a aplica ao livramento é excesso).
- **Súmula 535/STJ** — falta grave **não** interrompe indulto/comutação.

> **Precedentes específicos (números de HC/REsp, informativos, temas):** [NÃO VERIFICADO] — o STJ e os TJs têm reiterada jurisprudência reconhecendo excesso/desvio em casos de regime mais gravoso por falta de vaga, condição não prevista no título e manutenção de prisão após o cumprimento, mas **não cite número de acórdão de memória**. Confirme cada julgado pela skill `jurisprudencia-stj-stf` antes de inserir na peça. **Melhor faltar o precedente do que citar julgado inexistente** — a tese e o dispositivo já sustentam o pedido.

## Estrutura da peça (petição de suscitação nos autos da execução)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento nos arts. 185 e 186, III, da Lei
de Execução Penal (Lei 7.210/84), suscitar o presente

INCIDENTE DE EXCESSO [OU DESVIO] DE EXECUÇÃO

pelas razões de fato e de direito a seguir expostas.


I — DO TÍTULO E DO PARÂMETRO (o que a sentença/LEP determina)

O apenado cumpre pena de [PENA TOTAL], fixada em regime [REGIME DO TÍTULO],
pela prática do crime de [CRIME], conforme sentença/acórdão de [DATA] (doc.
anexo). O título determina [DESCREVER O QUE O TÍTULO/LEP FIXA quanto ao ponto
controvertido — regime, detração, condições, lapso].


II — DO ATO IMPUGNADO (o que está sendo executado)

Ocorre que, na execução, [DESCREVER O ATO CONCRETO que diverge — ex.: o apenado
permanece em regime fechado embora a sentença tenha fixado o semiaberto; ou o
cálculo aplicou lapso superior ao devido; ou foi mantido preso após o
cumprimento integral da pena], conforme [FOLHA DE EXECUÇÃO / ATESTADO / CÁLCULO
anexos].


III — DO EXCESSO [OU DESVIO] DE EXECUÇÃO (a subsunção)

Nos termos do art. 185 da LEP, há excesso ou desvio sempre que o ato for
praticado além dos limites fixados na sentença, em normas legais ou
regulamentares. No caso, [SUBSUNÇÃO EXPLÍCITA: confrontar o parâmetro (item I)
com o ato (item II) e demonstrar que se cumpre ALÉM do devido — excesso — OU por
FORMA DIVERSA da fixada — desvio], em afronta a [DISPOSITIVO/PARTE DO TÍTULO].

[Se regime mais gravoso por falta de vaga: invocar a SV 56/STF.]
[Se condição não prevista no título: sustentar que ao Juízo da Execução não é
dado inovar o título condenatório.]
[Se prisão mantida após o cumprimento: requerer soltura imediata (item IV).]

Cumpre lembrar que o correto cumprimento da pena é dever do próprio Juízo (art.
66 da LEP), cabendo a correção do excesso/desvio, se necessário, até de ofício.


IV — DO PEDIDO

Diante do exposto, requer:

a) o recebimento e processamento do presente incidente nos autos da execução
   (arts. 185 e 186, III, da LEP);
b) a CORREÇÃO do excesso/desvio, determinando-se [O QUE DEVE SER FEITO — ex.:
   a transferência ao regime [X]; a retificação do cálculo; a exclusão da
   condição não prevista; a expedição de alvará de soltura];
c) [havendo prisão indevida ou risco iminente à liberdade] a apreciação em
   caráter de URGÊNCIA, com a imediata [soltura / transferência / retificação];
d) a intimação do Ministério Público e a juntada dos documentos anexos.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [PENA TOTAL], [REGIME DO TÍTULO], [CRIME], [DATA], [DESCRIÇÃO DO PARÂMETRO], [DESCRIÇÃO DO ATO IMPUGNADO], [DISPOSITIVO VIOLADO], [O QUE DEVE SER FEITO], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. Sentença/acórdão condenatório (o **título** — parâmetro do excesso/desvio).
3. Guia de recolhimento (provisória ou definitiva).
4. Cálculo de liquidação de pena / atestado de pena a cumprir (evidencia o executado).
5. Folha de execução e certidões do ponto controvertido (regime, data-base, condições).
6. Documento que comprove o ato impugnado (ex.: negativa de assistência, decisão administrativa que agravou o regime, certidão de falta de vaga).

## Erros comuns / checklist final

- [ ] O **parâmetro** (o que o título/LEP determina) está identificado com precisão?
- [ ] O **ato impugnado** (o que está sendo executado) está documentado?
- [ ] A **subsunção** classifica corretamente como **excesso** (além) ou **desvio** (forma diversa)?
- [ ] O dispositivo/parte do título violado foi **nomeado** (arts. 185/186 + parâmetro concreto)?
- [ ] A via está certa — **incidente na origem** (sem decisão a recorrer), e **não** agravo (art. 197)?
- [ ] A **legitimidade** (art. 186 — em regra, o apenado/defesa) está afirmada?
- [ ] Havendo prisão indevida, pediu-se **soltura/urgência** de forma expressa?
- [ ] Súmulas e julgados conferidos via `jurisprudencia-stj-stf` **antes** de citar (nada de número de memória)?

**Anti-padrões (evitar):**
- Suscitar excesso/desvio **sem apontar o parâmetro** violado (o pedido vira alegação genérica e é indeferido).
- Confundir **excesso** (quantidade — cumprir mais) com **desvio** (forma — cumprir de modo diverso).
- Usar o incidente quando **já há decisão** sobre o ponto — nesse caso o instrumento é o **agravo em execução** (art. 197 LEP).
- Duplicar skills de benefício específico: se o problema é o **lapso da progressão** em si, use `execucao-progressao-regime`; o incidente de excesso serve ao **desvio genérico do título**, não ao mérito de cada benefício.
- Aceitar regime mais gravoso por **falta de vaga** sem invocar a SV 56/STF.
- Tolerar condição ou exigência **inventada pelo Juízo da Execução**, ausente do título condenatório.
- Citar número de HC/REsp/tema **de memória** — passe tudo pelo Citation Gate.

## Distinção prática (para o roteador e para a defesa)

- **Excesso/desvio de execução (esta skill):** suscita na **origem** o vício de um ato de execução que extrapola o título/LEP (arts. 185-186). É o **incidente-guarda** de todo desvio do título.
- **Agravo em execução** (`agravo-em-execucao`): **recurso** contra **decisão já proferida** pelo juiz da execução (art. 197 LEP).
- **Progressão / remição / livramento / unificação** (skills próprias): tratam do **mérito** de um benefício específico. Quando o vício é justamente o **cálculo ou o lapso** desses benefícios, aplique a skill do benefício; quando é o **desvio genérico do título** (regime, condição, prisão além do devido), aplique esta.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Esta peça é hipótese técnica a confirmar; a revisão final pelo advogado responsável, antes de protocolar, é indispensável (CED/OAB, art. 2º).
- **Citation Gate inegociável.** Nenhuma súmula, tese ou precedente vai à peça sem passar pela skill `jurisprudencia-stj-stf` / `verificacao-citacoes` — há sanções reais por jurisprudência inventada por IA. Na dúvida, **omitir vence inventar**.
- **Vigência.** Confirme a redação atual dos arts. 185, 186, 66 e 112 da LEP (Leis 14.843/2024, 15.358/2026 e 15.402/2026) antes de fundamentar.
- **Ética por polo.** Esta é skill **defensiva** (apenado/defesa). Advocacia: OAB + Provimento 205/2021; Defensoria: LC 80/94; Ministério Público (que também é legitimado, art. 186, I): CNMP. O roteador deve conferir o polo do usuário, mas o uso típico aqui é do apenado/defesa.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
