---
name: execucao-monitoracao-eletronica
description: >-
  Use ao pleitear, condicionar, impugnar ou revogar a MONITORAÇÃO ELETRÔNICA (tornozeleira) como
  condição na EXECUÇÃO penal — cabimento na saída temporária e na prisão domiciliar do apenado
  (arts. 146-B a 146-D LEP; Dec. 7.627/2011), vedação de uso como pena autônoma, proporcionalidade
  da imposição, deveres do monitorado e revogação por descumprimento, e sobretudo a DEFESA contra
  falha/defeito do equipamento imputada como… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, analise, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-monitoracao-eletronica"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-monitoracao-eletronica", "execucao monitoracao", "monitoracao eletronica"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Monitoração Eletrônica na Execução Penal (arts. 146-B a 146-D da LEP)

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

Esta skill orienta a atuação sobre a **monitoração eletrônica** — a "tornozeleira" — como **condição imposta na execução penal**: sua imposição, seus limites, sua revogação e, sobretudo, a **defesa do apenado quando a falha do equipamento é convertida em falta grave**. Aplica-se ao Juízo da Execução Penal, nas duas hipóteses legais: **saída temporária** e **prisão domiciliar do apenado** (LEP, art. 146-B, II e IV).

> **Lição central:** a tornozeleira **não é pena nem regime** — é meio de fiscalização (medida de vigilância). Por isso: (1) só cabe **nas hipóteses e nos limites do art. 146-B**, com **proporcionalidade** e **decisão fundamentada**; e (2) a **falha do equipamento não pode virar falta grave objetiva** — a falta grave exige **conduta voluntária** do apenado (dolo/culpa), não o mero defeito técnico, a bateria descarregada ou a perda de sinal por causa alheia à sua vontade. **Ônus de provar a violação dolosa é da execução, não do apenado.**

> **Cautela de vigência (obrigatória antes de citar):** confira os **arts. 146-B, 146-C e 146-D da LEP** e o **Decreto 7.627/2011**. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução. Confira toda autoridade no Citation Gate. Na dúvida, **omitir vence inventar**.

> **Gate P0 do art. 112:** monitoração não define a regra de progressão. Se a saída depender de percentual, lapso ou data de benefício, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte fontes oficiais no mesmo dia e registre regra intertemporal, decisões e revisor humano. Incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**.

## O que é (e o que não é)

- **É** meio técnico de **fiscalização à distância** do cumprimento de deveres impostos na execução (LEP, art. 146-B). O equipamento (tornozeleira) e a central de monitoramento apenas **verificam** presença/ausência do apenado em locais e horários definidos.
- **NÃO é pena** — não existe "pena de monitoração eletrônica" como sanção autônoma no ordenamento; é **acessório** de um benefício ou de um regime.
- **NÃO é regime** — não substitui, por si, a análise do regime; é condição que **viabiliza** a saída temporária ou a domiciliar.
- **NÃO transforma domiciliar em prisão** — o monitorado em domiciliar **não** está "preso em casa" no sentido cautelar; cumpre pena em local e sob fiscalização definidos pelo juízo.

## Base legal (âncoras)

- **Art. 146-B da LEP (Lei 7.210/84, incluído pela Lei 12.258/2010)** — hipóteses de monitoração na execução: **II — saída temporária** (regime semiaberto) e **IV — prisão domiciliar**. (Confira a redação vigente: os incisos I e III foram vetados na origem.)
- **Art. 146-C da LEP** — **deveres do monitorado** (receber visitas do servidor, atender contatos, cuidar do equipamento) e **consequências do descumprimento** (regressão, revogação da autorização de saída, revogação da domiciliar, advertência por escrito), sempre **ouvido o MP e a defesa** e por **decisão motivada**.
- **Art. 146-D da LEP** — hipóteses de **revogação da monitoração**: (a) por desnecessidade/inadequação; (b) por violação dos deveres, **ouvidos o MP e a defesa**.
- **Decreto 7.627/2011** — regulamenta a monitoração; fixa que a fiscalização deve preservar **dignidade, integridade física, moral e social** do monitorado (proporcionalidade e vedação a estigmatização).
- **Art. 122 da LEP** — **saída temporária** no regime semiaberto (pressuposto do art. 146-B, II). Ver skill `execucao-saida-temporaria`.
- **Art. 117 da LEP** — hipóteses de **prisão domiciliar** do apenado no regime aberto (idoso, doente grave, gestante, mãe/pai de filho menor/deficiente), base da domiciliar do art. 146-B, IV; e a domiciliar **por falta de vaga** em regime adequado (SV 56/STF). Ver skill `execucao-prisao-domiciliar`.
- **Princípios:** proporcionalidade, individualização da pena (CF, art. 5º, XLVI), dignidade da pessoa humana (CF, art. 1º, III), presunção de inocência e **culpabilidade** (não há falta grave sem conduta voluntária).

## As duas frentes desta skill

1. **Frente de acesso/proporcionalidade** — pleitear ou **dispensar** a monitoração: usá-la como **alternativa menos gravosa** para obter saída temporária ou domiciliar; ou, ao contrário, impugnar imposição **desproporcional/imotivada**.
2. **Frente defensiva do incidente** — quando a **falha do equipamento** (defeito, bateria, sinal, rompimento) é imputada como **falta grave**: afastar a falta, evitar a regressão e a interrupção de benefícios.

---

## Frente 1 — Imposição e proporcionalidade

### Quando a monitoração FAVORECE a defesa

A tornozeleira é frequentemente o **caminho para o benefício**: quando o juízo hesita em conceder saída temporária ou domiciliar por "risco", a defesa oferece a **monitoração como contrapartida** — medida menos gravosa que viabiliza a liberdade fiscalizada. Nesse cenário, **pleiteie** a monitoração como condição.

- **Falta de vaga em regime adequado (SV 56/STF):** vedada a manutenção em regime mais gravoso; a **domiciliar monitorada** é a solução adequada. A monitoração aqui é **argumento de acesso**, não de restrição.
- **Domiciliar humanitária (art. 117 LEP):** idoso, doente grave, gestante, mãe/pai de menor/deficiente — a tornozeleira ampara a concessão diante de eventual resistência.

### Quando a defesa IMPUGNA a imposição

- **Falta de previsão legal para a hipótese:** o art. 146-B é **taxativo** (saída temporária e domiciliar). Impor tornozeleira fora dessas hipóteses — ou como "condição genérica" de progressão sem previsão — é **ilegal**. Ataque a imposição sem base no art. 146-B.
- **Ausência de fundamentação/proporcionalidade:** a imposição exige **decisão motivada** que demonstre **necessidade e adequação**. Monitoração automática, "de praxe", sem análise do caso concreto, viola o dever de fundamentar (CF, art. 93, IX) e a proporcionalidade.
- **Excesso na condição:** condições de horário/perímetro **irrazoáveis** (que inviabilizam trabalho, tratamento de saúde, estudo) podem ser **revistas** — pleiteie ajuste, não a manutenção de restrição desproporcional.
- **Custo do equipamento ao apenado:** a monitoração é dever do **Estado** (Dec. 7.627/2011); não pode ser transferida ao apenado como ônus financeiro condicionante do benefício.

---

## Frente 2 — Defesa no incidente de falta grave (o litígio central)

Esta é a razão de existir da skill. Na prática, a **central de monitoramento** reporta "eventos" (perda de sinal, bateria baixa, saída de perímetro, violação/rompimento) e o Juízo instaura **incidente de falta grave** (que pode gerar **regressão de regime**, interrupção do prazo de progressão com nova data-base — Súmula 534/STJ — e revogação de benefícios). A defesa precisa **descolar o defeito técnico da conduta voluntária**.

### Regra de ouro: falta grave exige conduta voluntária

A falta grave é **infração disciplinar** e, como tal, pressupõe **conduta atribuível ao apenado (dolo ou culpa)**. **Defeito, mau funcionamento ou limitação técnica do equipamento — sem ato voluntário do monitorado — NÃO constitui falta grave.** O ônus de demonstrar a **violação dolosa** é da **acusação/execução**, não cabendo ao apenado provar que "não rompeu".

### Cenários típicos e a tese defensiva

| Evento reportado | Tese defensiva |
|---|---|
| **Bateria descarregada / falha de carga** | Falha do equipamento ou instrução deficiente do Estado; sem prova de sabotagem, não há conduta voluntária → **não é falta grave**. Verificar se o Estado orientou/forneceu meios de recarga. |
| **Perda/ausência de sinal (GPS/GSM)** | Limitação técnica de cobertura, zona de sombra, área sem sinal — **fato alheio à vontade** do apenado; a central deve comprovar deslocamento indevido, não mera perda de sinal. |
| **Rompimento/violação do dispositivo** | Distinguir **rompimento acidental/defeito de fabricação** de **violação dolosa**. Exigir **laudo técnico** que ateste a natureza do rompimento. Sem prova de ato voluntário, não há falta grave. |
| **Saída de perímetro pontual** | Verificar **erro de calibração**, imprecisão do GPS (margem de metros), ou justificativa (emergência médica, trabalho, ordem judicial). Aferir **proporcionalidade** da sanção. |
| **Atraso no recarregamento / não atender contato** | Descumprimento de **dever do art. 146-C** admite gradação (advertência escrita) — **não** necessariamente falta grave/regressão; exigir **proporcionalidade** e contraditório. |

### Roteiro de defesa no incidente (passo a passo)

1. **Exigir o contraditório prévio (arts. 146-C e 146-D LEP):** nenhuma sanção sem **oitiva do MP E da defesa** e **decisão motivada**. Falta de contraditório = **nulidade**.
2. **Pedir a documentação técnica completa:** relatório integral da central de monitoramento (não só o "print" do evento), **logs**, histórico de manutenção do equipamento e **laudo técnico** sobre o alegado rompimento/defeito. Sem prova técnica robusta da **violação dolosa**, a falta não se sustenta.
3. **Requerer a apuração em PAD (procedimento administrativo disciplinar) com defesa técnica:** a falta grave depende de apuração regular; exija a instauração/regularidade e a **participação de advogado/Defensoria** (contraditório e ampla defesa — CF, art. 5º, LV).
4. **Descolar defeito de dolo:** sustentar que o **evento técnico não equivale a conduta voluntária**; o ônus da prova da violação dolosa é da execução.
5. **Atacar a automaticidade:** impugnar decisão que reconhece falta grave **só com base no relatório da central**, sem laudo e sem individualizar a conduta.
6. **Proporcionalidade da sanção:** ainda que reconhecido algum descumprimento de dever (art. 146-C), pleitear a sanção **menos gravosa** cabível (advertência escrita) em vez de regressão automática.
7. **Se já houve regressão/interrupção:** impugnar a **nova data-base** e o recálculo (Súmula 534/STJ só incide se houver **falta grave válida**); afastada a falta, **restabelece-se** o marco.

> **Não confundir com o livramento condicional:** falta grave **não interrompe** o livramento (Súmula 441/STJ) nem comutação/indulto (Súmula 535/STJ). Se o benefício em risco for livramento, o efeito interruptivo alegado pela execução não se aplica.

---

## Teses (defesa) e contra-teses (acusação)

**Teses defensivas (fortes):**
- **T1 — Falta grave exige voluntariedade:** defeito/falha técnica do equipamento, sem prova de conduta dolosa, **não configura falta grave**. Ônus da prova da violação é da execução.
- **T2 — Taxatividade do art. 146-B:** monitoração só cabe em **saída temporária** e **domiciliar**; imposição fora dessas hipóteses é ilegal.
- **T3 — Contraditório indispensável (arts. 146-C e 146-D):** sanção sem oitiva de MP e defesa e sem decisão motivada é **nula**.
- **T4 — Monitoração como alternativa menos gravosa:** oferecer a tornozeleira para **destravar** saída temporária/domiciliar (inclusive por falta de vaga — SV 56).
- **T5 — Proporcionalidade e dignidade (Dec. 7.627/2011):** condições e sanções devem ser adequadas, sem estigmatização nem restrição desnecessária.
- **T6 — Dever estatal do equipamento:** manutenção e custeio são do Estado; falha logística estatal não pode ser imputada como falta do apenado.

**Contra-teses (acusação) — antecipar:**
- **CT1:** o rompimento/evento, por si, comprova a violação e a falta grave (responsabilidade "objetiva"). **Rebater:** falta grave não é objetiva; exige conduta voluntária e laudo.
- **CT2:** o apenado tinha o **dever** de zelar pelo equipamento (art. 146-C, V) e falhou. **Rebater:** descumprimento de dever admite **gradação** (advertência) e depende de prova de negligência/dolo; não gera regressão automática.
- **CT3:** perda de sinal reiterada indica tentativa de burla. **Rebater:** exigir prova de **deslocamento indevido** correspondente, não mera falha de cobertura.

---

## Súmulas e precedentes RELEVANTES (conferir vigência via `jurisprudencia-stj-stf`)

Súmulas **notórias** (cite com segurança, mas confirme a redação):
- **Súmula 534/STJ** — falta grave **interrompe** o prazo da progressão e fixa nova data-base (só incide se a falta for **válida**; afastada a falta técnica, não há interrupção).
- **Súmula 441/STJ** — falta grave **não interrompe** o livramento condicional.
- **Súmula 535/STJ** — falta grave **não interrompe** comutação/indulto.
- **Súmula 526/STJ** — o reconhecimento de falta grave **decorrente de novo crime doloso** depende do trânsito em julgado (paralelo útil: falta grave não se presume; exige apuração idônea).
- **SV 56/STF** — a falta de estabelecimento adequado **não autoriza** regime mais gravoso (fundamenta a domiciliar monitorada).

Precedentes específicos sobre **defeito de tornozeleira / falta grave por evento técnico**, números de HC/REsp/Tema e informativos: **[NÃO VERIFICADO]** — **não** cite número de acórdão de memória. Há decisões de tribunais estaduais e do STJ afastando falta grave por falha do equipamento e exigindo prova da conduta voluntária, mas **confirme o julgado atual e sua vigência via a skill `jurisprudencia-stj-stf`** antes de fundamentar. Prefira sustentar a **tese e o dispositivo** (arts. 146-B a 146-D LEP + culpabilidade da falta disciplinar) a arriscar um número de julgado.

---

## Modelo — impugnação de falta grave por falha da tornozeleira (esqueleto)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]
Incidente de Apuração de Falta Grave nº [Nº DO INCIDENTE]


[NOME DO APENADO], já qualificado, por seu advogado que esta subscreve
(procuração anexa), vem, respeitosamente, apresentar

DEFESA / MANIFESTAÇÃO no incidente de falta grave

pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O apenado cumpre pena em regime [SEMIABERTO/ABERTO/DOMICILIAR], sujeito a
monitoração eletrônica (art. 146-B, [II/IV], da LEP), imposta como condição de
[SAÍDA TEMPORÁRIA / PRISÃO DOMICILIAR]. Em [DATA], a central de monitoramento
registrou [EVENTO — ex.: perda de sinal / bateria descarregada / alerta de
violação], a partir do que se instaurou o presente incidente de falta grave.


II — DO DIREITO

a) Falta grave exige conduta voluntária
A falta grave é infração disciplinar e pressupõe conduta atribuível ao apenado
(dolo ou culpa). O mero evento técnico registrado pelo equipamento — [defeito /
bateria / perda de sinal / rompimento não periciado] — NÃO constitui, por si,
conduta voluntária de violação. O ônus de comprovar a violação dolosa é da
execução, e não do apenado.

b) Ausência de prova técnica idônea
Não há laudo técnico que ateste a natureza [do rompimento / da falha], tampouco
relatório integral da central, logs e histórico de manutenção do equipamento.
[Requer-se a juntada da documentação técnica completa; sem ela, a falta não se
sustenta.]

c) Contraditório e proporcionalidade (arts. 146-C e 146-D da LEP)
Eventual descumprimento de dever do art. 146-C admite gradação (advertência
escrita), sendo desproporcional a regressão automática. A sanção depende de
oitiva do MP e da defesa e de decisão motivada.


III — DO PEDIDO

Requer:
a) o RECONHECIMENTO DA INEXISTÊNCIA DE FALTA GRAVE, ante a ausência de conduta
   voluntária e de prova técnica da violação;
b) subsidiariamente, a aplicação da sanção MENOS GRAVOSA cabível (advertência
   escrita — art. 146-C), afastada a regressão de regime;
c) a juntada do relatório integral da central de monitoramento, logs, histórico
   de manutenção e laudo técnico sobre o alegado [evento];
d) [se já houve interrupção do prazo:] o restabelecimento da data-base anterior,
   afastada a incidência da Súmula 534/STJ por inexistência de falta válida.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [Nº DO INCIDENTE], [NOME DO APENADO], [REGIME], [II/IV], [SAÍDA TEMPORÁRIA / PRISÃO DOMICILIAR], [EVENTO], [DATA], [LOCAL], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a requerer/anexar

1. Procuração.
2. **Relatório integral** da central de monitoramento (não apenas o print do evento).
3. **Logs** e histórico técnico do equipamento; registros de manutenção/substituição.
4. **Laudo técnico/perícia** sobre o alegado rompimento/defeito (natureza acidental x dolosa).
5. Comprovantes de justificativa, se houver (atestado médico, ordem de trabalho, autorização judicial de deslocamento).
6. Cálculo de liquidação de pena (para aferir impacto de eventual interrupção).

## Erros comuns / checklist final

- [ ] Verificou que a hipótese está **dentro do art. 146-B** (saída temporária ou domiciliar) — e não uma imposição sem base legal?
- [ ] Exigiu **contraditório prévio** (oitiva de MP e defesa) e **decisão motivada** (arts. 146-C e 146-D)?
- [ ] Requereu o **relatório integral + logs + laudo técnico** — e não aceitou só o "print" do evento?
- [ ] Sustentou que **falta grave exige conduta voluntária** e que o **ônus da prova** é da execução?
- [ ] Distinguiu **defeito/falha técnica** de **violação dolosa** (bateria, sinal, rompimento)?
- [ ] Pleiteou **proporcionalidade** — advertência escrita (art. 146-C) em vez de regressão automática?
- [ ] Se houve interrupção, impugnou a **nova data-base** (Súmula 534 só com falta válida) e checou que **não** se aplica ao livramento (Súm. 441) nem a indulto/comutação (Súm. 535)?
- [ ] **Não citou precedente de memória** — passou tudo pelo gate `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Tratar o evento da central como falta grave **automática/objetiva** (sem laudo e sem conduta voluntária).
- Aceitar sanção **sem contraditório** de MP e defesa.
- Confundir a **domiciliar cautelar** (substitutiva da preventiva) com a **monitoração na execução** — são institutos distintos (ver skill `execucao-prisao-domiciliar`).
- Aplicar a Súmula 534 ao **livramento** (lá vale a Súmula 441) ou a **indulto/comutação** (Súm. 535).
- Impugnar a monitoração quando ela é o **caminho do benefício** (às vezes convém **pleiteá-la**, não afastá-la).
- Aceitar transferência ao apenado do **custo/manutenção** do equipamento (dever estatal).

## Lembretes finais

- **Tornozeleira = fiscalização, não pena nem regime.** Só cabe nas hipóteses do art. 146-B.
- **Falta grave = conduta voluntária.** Defeito técnico não é falta; o ônus da prova da violação é da execução.
- **Contraditório é inegociável** (arts. 146-C e 146-D): sem oitiva de MP e defesa e sem motivação, há nulidade.
- **Peça sempre a prova técnica completa** (relatório integral, logs, laudo) — o "print" do evento não basta.
- **Proporcionalidade:** advertência escrita antes de regressão automática.
- **Confira a vigência** dos arts. 146-B a 146-D LEP, do Dec. 7.627/2011 e das súmulas via `jurisprudencia-stj-stf` antes de peticionar.

## Nota de conformidade

Este material é **rascunho técnico** e apoio à preparação — **não substitui** o juízo do profissional nem a **revisão humana obrigatória** antes de protocolar. Toda súmula, tese ou acórdão passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf`/`verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). A responsabilidade pela atuação é sempre do **advogado** (Estatuto da OAB, CED e Provimento 205/2021); no Ministério Público, observância do CNMP; na Defensoria, da LC 80/94. Preserve o sigilo e a LGPD: dados do assistido nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
