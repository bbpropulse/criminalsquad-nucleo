---
name: defesa-importunacao-sexual-215a
description: >-
  Use ao construir a DEFESA na importunação sexual (CP, art. 215-A, incluído pela Lei 13.718/2018) —
  praticar contra alguém e sem a sua anuência ato libidinoso, com o fim de satisfazer a lascívia
  própria ou de terceiro, quando o ato não constituir crime mais grave. Gatilhos: importunação
  sexual, art. 215-A, 215-A CP, Lei 13.718/2018, ato libidinoso sem anuência, satisfazer a lascívia,
  elemento subjetivo especial…. Não use para conclusão definitiva sem autos suficientes, fonte atual
  ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-sexuais]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-importunacao-sexual-215a"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-importunacao-sexual-215a", "defesa importunacao", "sexual 215a"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Importunação Sexual (CP, art. 215-A)

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

Esta skill orienta a construção da **defesa** no crime de **importunação sexual** — o tipo criado pela **Lei 13.718/2018** para punir o ato libidinoso praticado **sem anuência**, mas **sem violência ou grave ameaça** (o "ato de surpresa"). O entregável são **blocos de tese** para a **resposta à acusação** (CPP, art. 396-A), a condução da instrução e os **memoriais** — não uma peça única, e sim a espinha argumentativa que atravessa as fases. O foco aqui é o **polo defensivo**.

> **Lição central:** neste crime a defesa se ganha ou se perde na **classificação típica**. O art. 215-A é **expressamente subsidiário** ("se o ato não constitui crime mais grave") e vive espremido entre o **estupro** (213), o **assédio sexual** (216-A), o **ato obsceno** (233) e o **estupro de vulnerável** (217-A). **Classifique ANTES de tudo:** houve violência/grave ameaça? A vítima é vulnerável/menor de 14? Havia relação de poder laboral? O ato era libidinoso e visava lascívia? A resposta a essas quatro perguntas define o tipo — e o tipo define pena, hediondez, regime e cada benefício.

> **Cautela de vigência (obrigatória antes de citar):** o art. 215-A foi **incluído pela Lei 13.718/2018** (vigência a partir de 24/09/2018), que também **revogou o art. 61 da LCP** (importunação ofensiva ao pudor) e deu ao **art. 225 do CP** a redação que tornou os crimes contra a liberdade sexual de **ação penal pública incondicionada**. Para **fatos anteriores** à lei, faça a análise de **direito intertemporal** (ver seção própria). Confirme a redação vigente dos dispositivos e toda súmula/tese/precedente pela skill `jurisprudencia-stj-stf` antes de fundamentar.

## O tipo penal e seus elementos

> **Art. 215-A, CP** — "Praticar contra alguém e sem a sua anuência ato libidinoso com o objetivo de satisfazer a própria lascívia ou a de terceiro: Pena — reclusão, de 1 (um) a 5 (cinco) anos, **se o ato não constitui crime mais grave**."

Decomponha o tipo — cada elemento é um ponto de ataque:

- **"ato libidinoso"** — conduta objetivamente de conotação sexual. Roçar acidental, esbarrão em aglomeração ou gesto grosseiro sem carga sexual **não** preenchem o núcleo.
- **"contra alguém"** — exige **vítima determinada** (o que o distingue do ato obsceno, ofensa difusa ao pudor público).
- **"sem a sua anuência"** — o **dissenso é elementar**. Havendo anuência — ou **dúvida razoável** sobre ela —, a conduta é **atípica**.
- **"com o objetivo de satisfazer a própria lascívia ou a de terceiro"** — **elemento subjetivo especial** (especial fim de agir). Ato sem finalidade de prazer sexual (agressão, deboche, menosprezo) **não** completa o tipo.
- **"se o ato não constitui crime mais grave"** — **subsidiariedade expressa**: se o fato configura estupro (213) ou estupro de vulnerável (217-A), a importunação é **absorvida** — mas a recíproca é a tese-estrela da defesa (rebaixar a imputação a 215-A).

Crime **comum** (qualquer pessoa como autor/vítima), **instantâneo**, punido a título de **dolo** somado ao especial fim de agir. É crime **contra a liberdade sexual** (Capítulo I do Título VI), **não hediondo**.

## Base legal

- **Art. 215-A, CP** (Lei 13.718/2018) — importunação sexual.
- **Art. 213, CP** — estupro (constrangimento **mediante violência ou grave ameaça**): a fronteira superior.
- **Art. 216-A, CP** — assédio sexual (exige **superioridade hierárquica/ascendência** no emprego, cargo ou função).
- **Art. 233, CP** — ato obsceno (lugar **público**, sem vítima determinada).
- **Art. 217-A, CP** — estupro de vulnerável (vítima menor de 14 ou vulnerável): a fronteira que **exclui** o 215-A.
- **Art. 225, CP** (red. Lei 13.718/2018) — **ação penal pública incondicionada**.
- **Art. 226, CP** — causas de aumento (concurso de agentes; autoridade/parentesco sobre a vítima) — aplicáveis ao capítulo; a defesa **afasta** sua incidência.
- **Art. 234-B, CP** — os processos correm em **segredo de justiça**.
- **Art. 61 da LCP** (Dec.-Lei 3.688/41) — importunação ofensiva ao pudor, **revogado** — relevante apenas para fatos anteriores.
- **Art. 28-A, CPP** (ANPP); **art. 89 da Lei 9.099/95** (suspensão condicional do processo); **arts. 44 e 33, §2º, CP** (substituição e regime).

## A jogada central — a fronteira típica decide tudo

| Tipo | Marca distintiva | O que muda para o réu |
|------|------------------|------------------------|
| **Estupro (213)** | há **violência ou grave ameaça** (constrangimento) | 6–10 anos, **hediondo** |
| **Importunação (215-A)** | **sem** violência/grave ameaça; ato de **surpresa** sem anuência | 1–5 anos, **não hediondo** |
| **Assédio sexual (216-A)** | **superioridade hierárquica/ascendência** laboral | 1–2 anos |
| **Ato obsceno (233)** | ato em **público**, **sem** vítima determinada | 3 meses–1 ano ou multa |
| **Estupro de vulnerável (217-A)** | vítima **menor de 14** ou vulnerável (consentimento irrelevante) | 8–15 anos, **hediondo** |

➡️ **Tese-estrela (desclassificação 213 → 215-A):** quando a denúncia imputa **estupro** mas o ato foi **inesperado, de surpresa, sem violência nem grave ameaça**, a capitulação correta é **importunação sexual**. **Surpresa não é violência nem grave ameaça** — sustentar o contrário esvaziaria o tipo novo, que existe justamente para essa faixa de conduta. O ganho é enorme: pena cai de 6–10 (hediondo) para 1–5 (não hediondo), abrindo ANPP, sursis processual, substituição e regime aberto.
➡️ **Contra-tese (acusação):** o "ato de surpresa" seria forma de violência/constrangimento → estupro. **Rebate:** a Lei 13.718/2018 criou o 215-A precisamente para punir o ato **sem** constrangimento violento; ler surpresa como violência revoga por via oblíqua o tipo recém-criado.

## Roteiro da defesa (ordem de ataque)

1. **Classifique o fato concreto** — percorra a tabela acima. A pergunta decisiva é: **houve violência ou grave ameaça?** Se não, o teto é 215-A (ou infração menor). Se a vítima é **menor de 14/vulnerável**, saia desta skill: é 217-A (veja `defesa-crimes-dignidade-sexual-vulneravel-217a`).
2. **Ataque a tipicidade** do próprio 215-A (as três atipicidades): **anuência**, **falta do elemento subjetivo especial**, **ausência de ato libidinoso**.
3. **Ative os benefícios** despenalizadores/negociais: **ANPP** (28-A CPP) e, subsidiariamente, **suspensão condicional do processo** (89 da Lei 9.099/95).
4. **Trabalhe a dosimetria** — pena-base no mínimo, **afastar os aumentos do art. 226**, regime **aberto**, **substituição por restritivas** (art. 44). O cálculo vai para a skill `calculadora-dosimetria`.
5. **Cuide da prova e do rito** — crime sexual costuma ser **palavra da vítima**; exija corroboração e observe o **segredo de justiça** (art. 234-B). O regime probatório detalhado está em `defesa-crimes-sexuais`.

## Teses defensivas × contra-teses

- **Atipicidade por anuência** — o dissenso é elementar; provada a anuência (ou instaurada dúvida razoável), impõe-se a absolvição (CPP, art. 386, III). *Contra-tese:* dissenso presumido do contexto; *rebate:* ônus da acusação sobre a elementar.
- **Atipicidade por ausência de lascívia** — o ato não visava satisfação sexual (agressão, brincadeira grosseira, desforço). Sem o especial fim de agir, não há 215-A; quando muito, **vias de fato** (art. 21 LCP) ou **injúria** (art. 140).
- **Atipicidade por ausência de ato libidinoso** — contato fortuito, roçar acidental em aglomeração, esbarrão. Não atinge o patamar típico.
- **Desclassificação de estupro (213)** — sem violência/grave ameaça, é 215-A (a tese-estrela, acima).
- **Reenquadramento lateral** — para **assédio (216-A)** se houver relação hierárquica laboral; para **ato obsceno (233)** se o ato foi difuso, em público, sem vítima determinada.
- **Afastamento das majorantes do art. 226** — negar concurso de agentes ou a relação de autoridade/parentesco alegada.
- **Insignificância — tese fraca:** a jurisprudência **dominante rejeita** o princípio da insignificância nos crimes contra a dignidade sexual. **Não** ancore a defesa nela; use, no lugar, atipicidade material por ausência de elemento do tipo.

## Benefícios despenalizadores e negociais

- **Não é hediondo** — o 215-A **não** consta do rol da Lei 8.072/90 (diferente do estupro e do estupro de vulnerável). Afasta a hediondez alegada por arrasto quando há desclassificação.
- **ANPP (art. 28-A, CPP)** — cabível **em tese**: crime **sem violência ou grave ameaça** (é da essência do 215-A) e **pena mínima de 1 ano** (inferior a 4). Havendo recusa do MP por política em crime sexual (sem vedação legal expressa), requerer a **remessa ao órgão revisor** (art. 28-A, §14). Aprofunde na skill `anpp`.
- **Suspensão condicional do processo (art. 89, Lei 9.099/95)** — a **pena mínima é igual a 1 ano**, no limite legal do benefício; pleitear como alternativa/subsidiária ao ANPP. Ver `suspensao-condicional-processo`.
- **Não é infração de menor potencial ofensivo** — pena máxima de 5 anos afasta transação penal e o rito do JECRIM.
- **Substituição por restritivas (art. 44, CP)** — crime **sem violência/grave ameaça** e pena tendencialmente **≤ 4 anos**: substituição **cabível em tese**, sujeita ao juízo de suficiência (art. 44, III). **Regime** inicial **aberto** quando a pena não exceder 4 anos e o réu não for reincidente (art. 33, §2º, "c"). Rode os números em `calculadora-dosimetria`.

## Lei penal no tempo (fatos anteriores a 24/09/2018)

- Se, **antes** da Lei 13.718/2018, a conduta era mera **contravenção** (art. 61 da LCP — pena de multa), o art. 215-A é **novatio legis in pejus** e **não retroage** (CF, art. 5º, XL); o fato anterior segue sob a lei mais benéfica (contravenção, hoje revogada, por ultratividade).
- Se a conduta vinha sendo capitulada como **estupro (213)**, o 215-A pode ser **mais benéfico** e **retroagir in mellius**.
- **Confira sempre a data do fato** e faça o cotejo concreto de penas antes de definir a capitulação. Passe pela skill `jurisprudencia-stj-stf`.

## Súmulas e precedentes (sob Citation Gate)

- **Súmula 593/STJ** *(conferir vigência)* — no estupro de vulnerável, é **irrelevante** o consentimento ou a experiência sexual da vítima **menor de 14 anos**. Relevante para a **fronteira negativa**: sendo a vítima menor de 14, **não** é 215-A, e sim 217-A.
- **Precedentes específicos sobre o art. 215-A** (ex.: "encoxada"/frotteurismo em transporte público; beijo lascivo roubado; apalpar por surpresa tratados como importunação e não como estupro; cabimento de ANPP em crime sexual; incidência do art. 226 sobre o 215-A) **[NÃO VERIFICADO]** — por ser tipo recente, há oscilação. **Não cite número de acórdão de memória**; confirme a **tese + dispositivo** pela skill `jurisprudencia-stj-stf` antes de levar à peça. **Omitir vence inventar.**

## Esqueleto argumentativo (resposta à acusação / memoriais)

```
1) DELIMITAÇÃO — o fato concreto e o que a denúncia imputa (213? 217-A? 215-A?).

2) PRELIMINAR/PREJUDICIAL DE CLASSIFICAÇÃO
   - Ausência de violência ou grave ameaça → não é estupro (213).
   - Vítima não vulnerável / maior de 14 → não é estupro de vulnerável (217-A).
   - Sem relação hierárquica laboral → não é assédio (216-A).
   - Capitulação correta (se típico): importunação sexual (art. 215-A).

3) MÉRITO — ATIPICIDADE (subsidiária à desclassificação)
   a) anuência da vítima / dúvida sobre o dissenso (elementar);
   b) ausência do especial fim de satisfazer a lascívia;
   c) ausência de ato libidinoso (contato fortuito / vias de fato / injúria).

4) BENEFÍCIOS — ANPP (28-A CPP); subsidiariamente, sursis processual (89/9.099).

5) EVENTUAL CONDENAÇÃO — pena-base no mínimo; afastar aumentos (art. 226);
   regime aberto (art. 33, §2º, "c"); substituição por restritivas (art. 44).

6) PROVA — palavra da vítima exige corroboração; in dubio pro reo sobre o dissenso.
```

> Adapte à fase (resposta à acusação, alegações finais, memoriais) e ao caso concreto. O detalhamento do **regime probatório** dos crimes sexuais está em `defesa-crimes-sexuais`.

## Erros comuns e checklist

- [ ] O fato foi **classificado ANTES** da tese de mérito (213 / 217-A / 216-A / 233 / 215-A)?
- [ ] Confirmou **ausência de violência ou grave ameaça** para sustentar a desclassificação de estupro?
- [ ] Confirmou que a vítima **não é menor de 14/vulnerável** (senão é 217-A — outra skill)?
- [ ] Atacou as **três atipicidades** (anuência, lascívia, ato libidinoso) quando cabíveis?
- [ ] Pleiteou **ANPP** e, subsidiariamente, **suspensão condicional do processo**?
- [ ] Sustentou que o crime **não é hediondo** e **não cometido com violência** (para regime e substituição)?
- [ ] **Afastou** os aumentos do **art. 226**?
- [ ] Verificou a **data do fato** para o direito intertemporal (art. 61 LCP revogado)?
- [ ] Observou o **segredo de justiça** (art. 234-B) nas petições?
- [ ] Toda súmula/tese/precedente passou pelo gate `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aceitar a capitulação de **estupro** sem testar a ausência de violência/grave ameaça (a desclassificação é a maior alavanca da defesa).
- Tratar como 215-A um fato contra **menor de 14/vulnerável** (é 217-A, hediondo — e a atenuante de "consentimento" é irrelevante, Súm. 593).
- Apostar na **insignificância** (rejeitada em crimes sexuais) em vez da **atipicidade por falta de elemento do tipo**.
- Esquecer o **ANPP**/sursis processual — o 215-A é campo fértil para ambos.
- Confundir com **assédio (216-A)** sem a relação hierárquica laboral, ou com **ato obsceno (233)** havendo vítima determinada.
- Citar precedente sobre 215-A **de memória** — tipo recente, jurisprudência instável.

## Conformidade e ética

- **Revisão humana obrigatória:** este material é apoio à preparação; toda tese é **hipótese a confirmar**, e a peça final é do **advogado** responsável (CED, art. 2º).
- **Citação verificada:** nenhuma súmula, tese ou acórdão vai à peça sem passar pelo gate `jurisprudencia-stj-stf`. Há sanção real por jurisprudência inventada.
- **Ética do polo defensivo:** a defesa técnica é dever; conduza a desclassificação e a atipicidade com lastro fático, sem revitimização gratuita — o ataque é à **qualificação jurídica** e à **prova do dissenso**, não à honra da vítima. Observe o **segredo de justiça** (art. 234-B) e o sigilo dos dados.

## Lembretes finais

- **Classificação primeiro** — violência/grave ameaça (213), vulnerável (217-A), hierarquia (216-A), público sem vítima (233) ou nada disso (215-A).
- **Surpresa não é violência** — é o coração da desclassificação 213 → 215-A.
- **Três atipicidades:** anuência · lascívia · ato libidinoso.
- **Não é hediondo** — e é **sem violência**, o que destrava ANPP, sursis processual, substituição e regime aberto.
- **Data do fato** manda no direito intertemporal (art. 61 LCP revogado em 2018).
- **Cálculo** de pena/regime/substituição → `calculadora-dosimetria`; **prova** dos crimes sexuais → `defesa-crimes-sexuais`; **verificação** → `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
