---
name: acao-penal-retratacao-violencia-domestica
description: >-
  Use ao classificar a AÇÃO PENAL de um crime praticado no contexto de violência doméstica e
  familiar (Lei 11.340/2006) e ao avaliar a possibilidade, o momento e a técnica da
  RETRATAÇÃO/renúncia à representação — não há uma regra única: cada tipo penal tem a sua ação
  penal. Lesão corporal (art. 129, §9º) é pública INCONDICIONADA (ADI 4424 / ADC 19; Súmula
  542/STJ), independe de representação e NÃO admite retratação; ameaça… Não use para conclusão
  definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, violencia-domestica, acao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-acao-penal-retratacao-violencia-domestica"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["acao-penal-retratacao-violencia-domestica", "acao penal", "violencia domestica"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Ação Penal e Retratação na Violência Doméstica (Lei 11.340/2006)

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

Esta skill é a **metodologia forense** para responder a duas perguntas que precedem qualquer peça em caso de violência doméstica e familiar contra a mulher: **(1) qual é a ação penal daquele crime concreto** (pública incondicionada, pública condicionada à representação ou privada) e **(2) se — e como — cabe a retratação/renúncia à representação**. Não é a peça de retratação em si (para redigi-la, ver `retratacao-representacao`), mas o diagnóstico que decide se essa peça sequer é cabível.

> **Lição central:** **não existe "a ação penal da violência doméstica".** Cada tipo penal conserva a sua natureza de ação. O erro mais grave — e mais comum — é tratar **lesão corporal leve** como condicionada à representação: ela é **pública INCONDICIONADA** (ADI 4424 / ADC 19; Súmula 542/STJ), não depende da vontade da vítima e **não admite retratação**. Classifique o crime **antes** de cogitar retratação.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do **art. 16 da Lei 11.340/2006** e da natureza da ação de cada tipo (o **art. 225 do CP**, red. da **Lei 13.718/2018**, tornou os crimes sexuais **incondicionados**; a **Lei 14.994/2024** criou o feminicídio autônomo, art. 121-A). Toda súmula, ADI/ADC/ADPF, tema ou acórdão passa pelo gate `jurisprudencia-stj-stf` e por `verificacao-citacoes` **antes** de ir à peça — há sanções reais por jurisprudência inventada por IA.

> **Dupla perspectiva (defesa × assistência/acusação).** O tema serve aos dois polos: a **defesa do acusado** costuma buscar a retratação e o arquivamento; a **assistência à vítima / o MP** fiscaliza para impedir retratação onde ela é vedada (lesão leve) e para que a audiência do art. 16 não seja desvirtuada. A skill expõe as duas teses — **a ética é definida pelo polo em que você atua** (ver Nota de conformidade).

## Mapa da decisão — qual é a ação penal? (classificar crime a crime)

| Crime (contexto de VD) | Base | Ação penal | Retratável? |
|---|---|---|---|
| **Lesão corporal (art. 129, §9º)** — leve, grave ou gravíssima | ADI 4424 / ADC 19; **Súm. 542/STJ** | **Pública INCONDICIONADA** | **NÃO** — independe de representação |
| **Ameaça (art. 147)** | art. 147, § único, CP | **Pública CONDICIONADA à representação** | **SIM** — nos limites do art. 16 |
| **Crimes sexuais (art. 213 ss.)** | **art. 225 CP** (red. Lei 13.718/18) | **Pública INCONDICIONADA** | **NÃO** |
| **Descumprimento de medida protetiva (art. 24-A da Lei 11.340)** | Lei 11.340 | **Pública INCONDICIONADA** | **NÃO** |
| **Feminicídio / crime doloso contra a vida** | Júri (art. 121-A CP) | **Pública INCONDICIONADA** | **NÃO** |
| **Crimes contra a honra (arts. 138-140)** | art. 145 CP | Em regra **PRIVADA** (queixa) | Retratação segue o **art. 143 CP** (querelado) — não o art. 16 |
| **Violência patrimonial / dano (art. 163)** | art. 167 CP | Classificar o tipo (dano simples é privada) | Conforme a ação do tipo concreto |

> **Leitura da tabela:** a coluna "Retratável?" só se abre quando a ação é **condicionada à representação**. Nos crimes **incondicionados**, a vontade da vítima é irrelevante para a persecução — não há representação a retratar, nem audiência do art. 16 a designar.

## Base legal

- **Lei 11.340/2006, art. 16** — a renúncia à representação, nos crimes de ação **condicionada**, só perante o **juiz**, em **audiência especialmente designada**, **antes do recebimento** da denúncia, **ouvido o MP**.
- **Lei 11.340/2006, art. 41** — **afasta a Lei 9.099/95** (sem transação penal, sem suspensão condicional do processo, sem composição civil) — reforça que o rito não é o dos JECrim.
- **CP, art. 100, §1º / CPP, art. 24** — regra geral: ação pública condicionada depende de representação.
- **CP, art. 129, §9º** — lesão corporal no âmbito doméstico (tipo qualificado).
- **CP, art. 147, § único** — ameaça: ação pública **condicionada à representação**.
- **CP, art. 102 / CPP, art. 25** — regra geral da (ir)retratabilidade: retratável **até o oferecimento** da denúncia (o art. 16 desloca o marco para **antes do recebimento**).
- **CP, art. 103 / CPP, art. 38** — **decadência** do direito de representação em **6 meses** contados do conhecimento da autoria.
- **CP, art. 225** (red. Lei 13.718/18) — crimes contra a dignidade sexual: ação **incondicionada**.

## Metodologia — roteiro em 4 passos

**Passo 1 — Isolar e classificar cada crime.** Um mesmo fato pode reunir vários tipos (ex.: ameaça + lesão + dano). Separe-os: a ação penal e a retratabilidade são aferidas **tipo a tipo**, nunca "por bloco".

**Passo 2 — Determinar a natureza da ação daquele tipo** (incondicionada / condicionada / privada), consultando o Mapa da decisão acima.
- Atenção ao ponto-chave: a **Lei Maria da Penha não transforma**, por si, ação condicionada em incondicionada. Quem tornou a **lesão leve** incondicionada foi a **interpretação conforme da ADI 4424** (com a ADC 19) e, consolidando, a **Súmula 542/STJ** — não o mero enquadramento na Lei 11.340.

**Passo 3 — Se (e só se) a ação for CONDICIONADA (ameaça), avaliar a retratação:**
- Verificar a **tempestividade** pelo marco especial do art. 16 (**antes do recebimento** da denúncia — não do oferecimento).
- Verificar se ainda não houve **decadência** (6 meses — art. 38 CPP) para a representação inicial.
- Exigir/observar os **requisitos cumulativos** da audiência do art. 16 (abaixo).

**Passo 4 — Se a ação for INCONDICIONADA, comunicar o limite ao cliente/vítima.** Não há retratação possível (lesão, sexual, protetiva). A eventual manifestação de desinteresse da vítima **não arquiva** o feito — no máximo é elemento de prova/dosimetria, e a persecução segue de ofício. Registrar isso evita expectativa indevida e responsabilidade profissional.

## Lesão corporal leve — por que é INCONDICIONADA

- **STF, ADI 4424 e ADC 19 (Pleno, 2012):** o Tribunal deu **interpretação conforme** aos arts. 12, I; 16; e 41 da Lei 11.340 para **afastar a exigência de representação** na lesão corporal (ainda que leve) praticada com violência doméstica contra a mulher, e para afastar a Lei 9.099/95. *(confirmar via gate)*
- **Súmula 542/STJ:** *"A ação penal relativa ao crime de lesão corporal resultante de violência doméstica contra a mulher é pública incondicionada."* *(confirmar via gate)*
- **Consequências práticas:** (i) o inquérito/ação prossegue **independentemente** de representação; (ii) **não se designa** audiência do art. 16; (iii) a vítima **não pode retratar**; (iv) eventual "desistência" da vítima não vincula o MP.

## Ameaça (art. 147) — condicionada e retratável

- A ameaça é o **caso típico** em que a retratação é juridicamente possível no contexto de VD, porque a ação é **condicionada à representação** (art. 147, § único, CP).
- A retratação, aqui, submete-se ao **art. 16 da Lei 11.340** (marco e forma especiais), e **não** apenas à regra geral do art. 25 CPP.
- Cuidado com o **concurso de crimes**: se, no mesmo episódio, houver ameaça (condicionada) **e** lesão leve (incondicionada), a retratação da ameaça **não** encerra o processo quanto à lesão.

## A audiência do art. 16 — requisitos cumulativos

Para ser válida, a renúncia/retratação da representação na Lei Maria da Penha exige **todos** os requisitos, **cumulativamente**:

1. **Perante o JUIZ** — não vale perante o delegado nem o promotor (diferente da regra geral, em que a retratação pode ser manifestada na fase de investigação).
2. **Em audiência especialmente designada** com essa finalidade — ato solene e específico, não um simples termo nos autos.
3. **Antes do RECEBIMENTO da denúncia** — marco temporal próprio (a regra geral do art. 25 CPP/art. 102 CP fala em "antes do oferecimento"; o art. 16 é **mais elástico**, indo até o recebimento).
4. **Ouvido o Ministério Público** — a manifestação do MP é pressuposto do ato.

> **ADI 7.217/STF — leitura estrita do art. 16** *(confirmar via gate):* **só a ofendida** pode requerer a audiência de renúncia; é **vedado** ao juiz designá-la **de ofício** ou a requerimento de terceiro; e o **não comparecimento** da vítima **não** gera retratação/renúncia **tácita**. A tese central: audiência do art. 16 é **direito da vítima**, não instrumento de pressão para desistência.

## Renúncia × retratação e o marco temporal

- **Terminologia:** o art. 16 fala em "**renúncia** à representação", mas a jurisprudência e a doutrina o aplicam também à **retratação**. Distinção clássica (regra geral): **renúncia** = a representação ainda **não foi oferecida**; **retratação** = a representação **já foi oferecida** e é **retirada**. Na Maria da Penha, ambas cabem na janela "**antes do recebimento** da denúncia".
- **Decadência (art. 38 CPP):** independentemente da retratação, o direito de **representar** decai em **6 meses** do conhecimento da autoria; escoado o prazo, extingue-se a punibilidade dos crimes condicionados (útil como tese autônoma — ver `estrategia-representacao-decadencia-crimes-pessoa`).
- Para a **redação da peça** de retratação/renúncia (endereçamento, preâmbulo, pedido de arquivamento), aplicar a skill `retratacao-representacao`.

## Teses e contra-teses

**Defesa do acusado (busca a retratação/arquivamento):**
- Nos crimes **condicionados** (ameaça), pleitear a designação da audiência do art. 16 **a pedido da vítima** e o **arquivamento** por ausência/retirada de representação, se tempestivo.
- Suscitar **decadência** (art. 38 CPP) quando ultrapassados os 6 meses sem representação válida.
- Em concurso, delimitar que a persecução só subsiste quanto aos crimes **incondicionados**, extinguindo-se quanto aos condicionados retratados.

**Contra-tese (assistência à vítima / MP):**
- Na **lesão corporal** (qualquer grau), opor a **Súmula 542/STJ** e a **ADI 4424**: ação **incondicionada**, sem espaço para retratação — a vontade da vítima é irrelevante para a persecução.
- Impedir audiência do art. 16 **de ofício** ou por provocação de terceiros; exigir requerimento **da própria ofendida** (ADI 7.217).
- Rechaçar **retratação tácita** por ausência da vítima à audiência.
- Barrar despenalizadores da Lei 9.099 (transação, SCP, composição) — **vedados** (art. 41; **Súmula 536/STJ**).

## Súmulas e precedentes aplicáveis (sob Citation Gate)

> Cite tese + dispositivo, não número de acórdão de memória. Confirme cada item via `jurisprudencia-stj-stf` / `verificacao-citacoes`.

- **Súmula 542/STJ** — lesão corporal em VD contra a mulher é ação pública **incondicionada**.
- **Súmula 536/STJ** — a suspensão condicional do processo e a transação penal **não se aplicam** na Lei Maria da Penha.
- **Súmula 589/STJ** — **inaplicável a insignificância** aos crimes/contravenções praticados contra a mulher no âmbito das relações domésticas *(tangencial — confirmar)*.
- **ADI 4424 / ADC 19 (STF, Pleno)** — lesão leve em VD é **incondicionada**; afastada a Lei 9.099/95.
- **ADI 7.217 (STF)** — art. 16 em leitura **estrita** (só a ofendida requer; vedado de ofício; sem retratação tácita).
- **ADPF 779 (STF)** — "legítima defesa da honra" é **inconstitucional** *(relevante quando há feminicídio conexo — confirmar)*.
- Precedente específico de STJ/STF de que você **não** tenha certeza do número/teor → **[NÃO VERIFICADO]** e conferir via `jurisprudencia-stj-stf` antes de usar.

## Erros comuns (anti-padrões)

1. **Tratar lesão corporal leve como condicionada à representação.** É **incondicionada** (Súm. 542/STJ; ADI 4424) — erro grosseiro que pode induzir o cliente a expectativa indevida de arquivamento.
2. **Achar que "toda ação em VD" tem a mesma natureza.** Classificar tipo a tipo — condicionada só a ameaça (e afins), não a lesão/sexual/protetiva.
3. **Designar/realizar a audiência do art. 16 de ofício.** Só **a pedido da vítima** (ADI 7.217).
4. **Confundir o marco temporal:** regra geral = antes do **oferecimento** (art. 25 CPP); Maria da Penha = antes do **recebimento** (art. 16).
5. **Aceitar retratação tácita** pela ausência da vítima — vedado (ADI 7.217).
6. **Oferecer/aceitar despenalizadores** (transação, SCP, composição) — vedados (art. 41; Súm. 536/STJ).
7. **Ignorar a decadência** (art. 38 CPP) nos crimes condicionados.
8. **Citar súmula/precedente de memória** — tudo pelo gate `verificacao-citacoes`.

## Checklist

- [ ] Cada crime do fato foi **isolado e classificado** quanto à ação penal (não "por bloco")?
- [ ] Confirmada a natureza da ação de **cada** tipo (incondicionada / condicionada / privada)?
- [ ] **Lesão corporal** tratada como **incondicionada** (Súm. 542/STJ; ADI 4424) — sem prometer retratação?
- [ ] Retratação cogitada **apenas** nos crimes **condicionados** (ameaça)?
- [ ] Se retratação: **tempestiva** (antes do **recebimento** — art. 16) e sem **decadência** (art. 38 CPP)?
- [ ] Requisitos cumulativos do art. 16 presentes (juiz + audiência específica + antes do recebimento + oitiva do MP)?
- [ ] Audiência requerida **pela ofendida** (não de ofício) e sem presunção de retratação tácita (ADI 7.217)?
- [ ] Nenhum despenalizador da Lei 9.099 pleiteado (art. 41; Súm. 536)?
- [ ] Em concurso, delimitado que os crimes **incondicionados** subsistem apesar da retratação dos condicionados?
- [ ] **Polo** identificado e ética correspondente observada?
- [ ] Citações **verificadas** (`jurisprudencia-stj-stf` / `verificacao-citacoes`) e peça marcada para **revisão humana**?

## Nota de conformidade

- **Revisão humana obrigatória.** Este material é apoio à análise; a decisão sobre ação penal, retratação e arquivamento é sempre do profissional responsável, à luz dos autos concretos.
- **Ética por polo.** Na **defesa**, o dever é o melhor interesse do acusado (EAOAB/CED). Na **assistência à vítima**, o dever é a proteção da ofendida e o interesse na persecução; **jamais** instrumentalizar a audiência do art. 16 para pressionar a vítima à desistência — a renúncia é **direito dela**, livre e informado.
- **Vítima vulnerável.** Cuidado redobrado com pressão externa, retratações motivadas por dependência econômica/emocional ou risco; sinais de coação afastam a validade da renúncia e exigem a atuação da rede protetiva.
- **Citation Gate.** Nenhuma súmula, ADI/ADC/ADPF, tese ou acórdão vai à peça sem passar por `verificacao-citacoes`; na dúvida, **omitir vence inventar**.

## Lembretes finais

- **Não há regra única:** classifique **crime a crime** — condicionada é a ameaça; **lesão é incondicionada**.
- **Lesão corporal (qualquer grau) = incondicionada** (Súm. 542/STJ; ADI 4424): sem representação, sem retratação, sem audiência do art. 16.
- **Retratação só nos condicionados**, perante o **juiz**, em **audiência designada**, **antes do recebimento**, **ouvido o MP** (art. 16).
- **ADI 7.217:** audiência **só a pedido da ofendida**; **sem** retratação tácita por ausência.
- **Decadência** em 6 meses (art. 38 CPP) é tese autônoma nos condicionados.
- **Concurso:** retratar a ameaça **não** encerra o feito quanto à lesão/sexual/protetiva.
- **Confira vigência** (art. 16 da 11.340; art. 225 CP; súmulas) via `jurisprudencia-stj-stf` antes de peticionar.

**Padrão de redação:** ao converter o diagnóstico em peça (retratação, manifestação de arquivamento, resposta), aplique também `retratacao-representacao` (estrutura da peça) e `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
