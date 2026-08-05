---
name: defesa-crimes-responsabilidade-prefeito-dl-201
description: >-
  Use ao defender prefeito ou ex-prefeito acusado de crime do art. 1º do Decreto-Lei 201/67
  (impropriamente chamados 'crimes de responsabilidade') — natureza penal (crime comum, não infração
  político-administrativa do art. 4º), competência e foro por prerrogativa (TJ / TRF / TRE), rito
  com defesa prévia e teses de mérito. Gatilhos: crime de responsabilidade de prefeito, DL 201/67,
  Decreto-Lei 201/1967 art. 1º, foro do… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, agentes-politicos, dl-201]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-responsabilidade-prefeito-dl-201"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-responsabilidade-prefeito-dl-201", "defesa crimes", "responsabilidade prefeito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa dos crimes de responsabilidade de prefeito (art. 1º do DL 201/67)

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

Esta skill orienta a **defesa** do prefeito ou ex-prefeito acusado dos crimes do **art. 1º do Decreto-Lei 201/1967**. Apesar do nome legal, são **crimes comuns** (crimes funcionais próprios do chefe do Executivo municipal), de **ação penal pública incondicionada**, processados e julgados pelo **Poder Judiciário** — e não infrações políticas julgadas pela Câmara. A skill é de **perspectiva defensiva**: mapeia preliminares (competência/foro, rito) antes do mérito.

> **Lição central:** decida **duas coisas antes de qualquer tese de mérito** — (1) a **natureza** (é crime do art. 1º, que vai ao Judiciário, ou infração político-administrativa do art. 4º, que vai à Câmara para cassação?) e (2) a **competência e o foro** (TJ? TRF? TRE? 1º grau?). Errar a natureza ou o foro contamina toda a defesa e é a nulidade que a acusação mais explora. Só depois classifique o **tipo** e escolha as teses.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **DL 201/67** (arts. 1º a 3º) e as interações com leis posteriores — a **Lei 14.133/2021** reorganizou os crimes de licitação (que dialogam com o art. 1º, XI), a **Lei 14.230/2021** é de **improbidade** (esfera **não penal**, independente), e a jurisprudência restringiu o foro por prerrogativa (**AP 937 QO/STF**). Toda súmula, tese ou acórdão passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` antes de fundamentar a peça. Prefira citar **tese + dispositivo** a número de acórdão.

## Natureza jurídica — crime (art. 1º) x infração política (art. 4º)

O erro conceitual mais comum é tratar o art. 1º como juízo político. Não é. Separe:

| | **Art. 1º — crimes** | **Art. 4º — infrações político-administrativas** |
|---|---|---|
| Natureza | **Penal** (crime comum/funcional) | **Política** (juízo de conveniência) |
| Julga | **Poder Judiciário** (com foro) | **Câmara Municipal** |
| Sanção | Pena privativa de liberdade + efeitos (§2º) | **Cassação do mandato** |
| Ação | Pública incondicionada (**MP**) | Processo político na Câmara |
| Independe do mandato? | **Sim** (processa ex-prefeito) | Não (pressupõe mandato em curso) |

- **Súmula 703/STF** (conferir número via gate): *a extinção do mandato do prefeito não impede a instauração de processo pela prática dos crimes do art. 1º do DL 201/67*. Ou seja, o **ex-prefeito responde** normalmente — a defesa não pode confiar no fim do mandato como causa extintiva.
- O *nomen iuris* "crime de responsabilidade" é **impróprio**: os verdadeiros crimes de responsabilidade (sentido político) são os do art. 4º. Use a distinção para afastar confusões de competência e de rito.

## Base legal

- **DL 201/67, art. 1º** — os tipos (incisos I a XXIII) e, no **§1º**, a **ação pública** e as **penas**; **§2º** — efeitos da condenação (**perda do cargo** e **inabilitação por 5 anos** para função pública).
- **DL 201/67, art. 2º** — **rito** (defesa prévia, decisão sobre prisão/afastamento, prosseguimento pelo procedimento comum).
- **CF, art. 29, X** — julgamento do prefeito **perante o Tribunal de Justiça** (foro por prerrogativa nos crimes comuns estaduais).
- **CPP** — aplicação **subsidiária** (rito comum, respostas, nulidades).
- **Súmulas** 702 e 703/STF; 208 e 209/STJ (todas sob o gate).

## Competência e foro — o coração da preliminar

O prefeito tem **foro por prerrogativa de função**. A pergunta não é "tem foro?", mas "**foro em qual tribunal?**", e isso depende da **natureza da matéria** e da **origem da verba**:

- **CF, art. 29, X** + **Súmula 702/STF** (conferir): a competência do **TJ** para julgar prefeitos **restringe-se aos crimes de competência da Justiça comum estadual**; nos demais casos, a competência originária cabe ao **respectivo tribunal de 2º grau** — **TRF** (crime federal) ou **TRE** (crime eleitoral).
- **Origem da verba desviada** define Justiça Federal x Estadual:
  - **Súmula 208/STJ** (conferir): desvio de verba **sujeita a prestação de contas perante órgão federal** → **Justiça Federal** (logo, foro no **TRF**).
  - **Súmula 209/STJ** (conferir): verba federal **transferida e já incorporada ao patrimônio municipal** → **Justiça Estadual** (foro no **TJ**).
- **Perda do foro ao deixar o cargo:** cessado o mandato, cessa, em regra, a prerrogativa; o processo **desce à 1ª instância**. Não confunda com a Súmula 703 (que trata da *possibilidade* de processar o ex-prefeito, não do *foro*).
- **Restrição do foro (AP 937 QO/STF):** o STF passou a restringir o foro a crimes **cometidos no cargo e em razão da função**, com regra de prorrogação após a instrução. A **aplicação específica a prefeitos** e o exato marco de fixação/prorrogação da competência são pontos sensíveis — trate como tese e **confira o estado atual via gate** `jurisprudencia-stj-stf` (e a skill `triagem-competencia-foro-criminal`).

➡️ **Tese defensiva (preliminar):** suscitar a **incompetência** sempre que o juízo não corresponder à matéria/origem da verba — declínio ao TRF (verba federal, Súm. 208) ou ao TJ, ou remessa ao 1º grau (ex-prefeito). Denúncia recebida por juízo incompetente é **nulidade**.

## Penas e por que a prescrição vem cedo (art. 1º, §1º)

Confira a redação vigente, mas a régua de partida é:

- **Incisos I e II** (apropriação/desvio de bens ou rendas; uso indevido) → **reclusão de 2 a 12 anos**.
- **Demais incisos** → **detenção de 3 meses a 3 anos**.

Consequência prática decisiva: nos crimes punidos com **detenção de 3 meses a 3 anos**, a pena máxima abstrata (3 anos) leva à **prescrição da pretensão punitiva** em **8 anos** (art. 109, IV, CP — conferir), e a **prescrição retroativa/intercorrente** pela pena concreta costuma ser ainda menor. Processos por fatos antigos de gestão frequentemente **já prescreveram**. **Calcule a prescrição logo no início** com a skill `calculadora-prescricao` (e veja `extincao-punibilidade-prescricao`).

## Rito processual (art. 2º) e a defesa prévia

O processo dos crimes do art. 1º tem **procedimento especial** com garantia relevante para a defesa:

- **Defesa prévia antes do recebimento (art. 2º, I):** o acusado é notificado para apresentar **defesa por escrito** no prazo legal (**conferir o prazo na redação vigente**) — é a janela para pedir **rejeição da denúncia** por inépcia, falta de justa causa ou atipicidade, análoga à resposta preliminar dos crimes funcionais (art. 514 CPP). Explore com a skill `defesa-preliminar-estrategia`.
- **Prisão e afastamento (art. 2º, II):** o dispositivo previa manifestação sobre **prisão preventiva** e **afastamento do cargo**. Sua aplicação deve observar a **CF/88** (presunção de inocência, cautelaridade e fundamentação concreta — art. 312 CPP) — **não há automatismo**. A defesa ataca prisão/afastamento **decretados sem fundamentação cautelar idônea**. Confira a leitura atual (constitucionalidade e requisitos) via gate.
- **Prosseguimento:** recebida a denúncia, segue-se, no que couber, o **procedimento comum** do CPP.

## Panorama dos tipos do art. 1º e a tese de cada (defesa)

Todos os tipos são **dolosos** — **não há forma culposa**. "Irregularidade administrativa" não é crime; a fronteira é o **dolo**.

| Inciso (síntese) | Conduta | Vetor defensivo principal |
|---|---|---|
| **I / II** | Apropriar-se ou desviar bens/rendas; usar indevidamente (≈ peculato) | Ausência de apropriação/desvio e de **proveito**; mera falha contábil; ver `defesa-peculato` |
| **III** | Desviar ou aplicar indevidamente rendas/verbas | Aplicação em **finalidade pública** (ainda que com vício formal); ausência de dolo de desvio |
| **V** | Ordenar despesa não autorizada / fora das normas financeiras | Existência de autorização/dotação; **parecer técnico-financeiro favorável**; boa-fé |
| **VI / VII** | Deixar de prestar contas (anuais / de convênio) | Crime **omissivo próprio**: contas **efetivamente prestadas** (ainda que intempestivas); **força maior**; responsabilidade de **outro agente/órgão** |
| **XI** | Obras, serviços ou compras **sem licitação** exigida | **Hipótese de dispensa/inexigibilidade**; ausência de dolo; **parecer jurídico** que orientou o ato; ver `defesa-crimes-licitacao-14133` |
| **XIII** | Nomear/admitir contra disposição de lei | **Interpretação razoável** da norma; ausência de dolo de fraudar |
| **XIV** | Descumprir lei/ordem judicial sem justificar por escrito | **Justificativa apresentada**; **impossibilidade material/orçamentária** de cumprir |

> Os incisos exatos e suas redações **mudam** — confirme a numeração e o texto vigentes antes de subsumir. A subsunção do art. 1º muitas vezes **concorre** com tipos do CP (peculato, art. 312) e da Lei de Licitações; discuta **especialidade/consunção** e evite dupla imputação.

## Roteiro de defesa (passo a passo)

1. **Classifique a natureza** — art. 1º (crime, Judiciário) x art. 4º (infração política, Câmara). Se a peça acusatória mistura as esferas, ataque.
2. **Fixe o foro/competência** — matéria (Súm. 702) e **origem da verba** (Súm. 208/209); ex-prefeito → 1º grau. Suscite **incompetência** como preliminar.
3. **Calcule a prescrição** — penas baixas nos incisos de detenção; use `calculadora-prescricao`. Prescrição extingue e encerra a discussão.
4. **Ataque a admissibilidade na defesa prévia (art. 2º, I)** — inépcia, falta de justa causa, atipicidade; `defesa-preliminar-estrategia`.
5. **Combata prisão/afastamento automáticos (art. 2º, II)** — exija fundamentação cautelar concreta (art. 312 CPP).
6. **Desconstrua o dolo** — todos os tipos são dolosos; pareceres técnicos/jurídicos, dotação orçamentária e boa-fé afastam o elemento subjetivo.
7. **Prova** — desvio/apropriação exige prova do **proveito** e do **dolo**; questione perícia contábil e nexo; veja `estrategia-probatoria-defesa`.
8. **Separe as instâncias** — improbidade (Lei 14.230/21) e TCE são **não penais**; use `interface-penal-improbidade-administrativa` para evitar contaminação e discutir repercussão.
9. **Efeitos da condenação (§2º)** — se houver condenação, discuta a **motivação específica** da perda do cargo/inabilitação (paralelo com o art. 92 CP e sua exigência de fundamentação).

## Teses defensivas transversais x contra-teses (antecipar a acusação)

- **Prescrição** (defesa) → **independência de instâncias e marcos interruptivos** (acusação sustenta recebimento/pronúncia como marcos e nega retroatividade).
- **Atipicidade / ausência de dolo** (defesa: irregularidade ≠ crime, parecer favorável) → **dolo genérico basta** e **crimes formais/omissivos** dispensam dano (VI/VII consumam-se pela **mera omissão**).
- **Incompetência / foro** (defesa) → acusação sustenta competência do juízo e a **prorrogação** pós-instrução (AP 937).
- **Insignificância** (defesa, com **cautela**) → **Súmula 599/STJ** (conferir): *o princípio da insignificância é inaplicável aos crimes contra a Administração Pública* — há exceções pontuais no STF, mas sustente com parcimônia e sempre via gate.
- **Bis in idem / dupla punição** (defesa) → acusação invoca a **independência** entre penal, improbidade e controle externo.

## Súmulas e precedentes sob Citation Gate

Nenhum número abaixo entra na peça sem passar por `jurisprudencia-stj-stf`. Cite a **tese**; o número é secundário.

- **Súmula 702/STF** — competência do TJ para prefeitos restrita à Justiça comum estadual; demais, tribunal de 2º grau respectivo.
- **Súmula 703/STF** — extinção do mandato não impede processo pelos crimes do art. 1º.
- **Súmula 208/STJ** — verba sujeita a prestação de contas a órgão **federal** → Justiça **Federal**.
- **Súmula 209/STJ** — verba federal **incorporada ao patrimônio municipal** → Justiça **Estadual**.
- **Súmula 599/STJ** — insignificância inaplicável a crimes contra a Administração (sustentar exceções com cautela).
- **AP 937 QO/STF** — restrição do foro a crimes no cargo e em razão da função (**aplicação a prefeito = [NÃO VERIFICADO]** quanto ao alcance atual; confirmar).
- Enunciados **antigos** sobre prefeito (ex.: súmulas anteriores à CF/88) podem estar **superados** — **não citar sem verificar**. Na dúvida, **omitir vence inventar**.

## Esqueleto da defesa prévia / resposta (enxuto)

```
EXCELENTÍSSIMO(A) SENHOR(A) DESEMBARGADOR(A) RELATOR(A) / JUIZ(A) DE DIREITO [conforme o foro]

Autos nº [...] — Denúncia por crime do art. 1º, [INCISO], do DL 201/67

I — PRELIMINARES
   a) INCOMPETÊNCIA — [TJ/TRF/TRE/1º grau], conforme a matéria (Súm. 702/STF)
      e a origem da verba (Súm. 208 ou 209/STJ); [ex-prefeito → declínio ao 1º grau].
   b) PRESCRIÇÃO — pena do inciso é [detenção 3 meses–3 anos / reclusão 2–12],
      PPP em [prazo, art. 109 CP]; fato datado de [...] → [prescrito / a prescrever].
   c) INÉPCIA / FALTA DE JUSTA CAUSA — a denúncia não descreve [dolo / proveito /
      conduta individualizada]; rejeição (art. 395 CPP).

II — MÉRITO (subsidiário)
   Atipicidade por ausência de dolo: [parecer técnico/jurídico; dotação; boa-fé].
   [Se licitação (XI): hipótese de dispensa/inexigibilidade — ver skill própria.]
   [Se prestação de contas (VI/VII): contas prestadas / força maior / outro agente.]

III — PEDIDOS
   Reconhecimento da [incompetência / prescrição]; rejeição da denúncia; subsidiariamente,
   absolvição sumária (art. 397 CPP) e produção das provas [...].
```

> Esqueleto **didático** — adapte ao foro concreto, ao inciso e à prova dos autos. A redação final passa por `redacao-persuasiva-criminal`.

## Erros comuns e checklist

- [ ] Distinguiu **art. 1º (crime)** de **art. 4º (infração política, Câmara)**?
- [ ] Fixou o **foro correto** — matéria (Súm. 702) e **origem da verba** (Súm. 208/209); ex-prefeito → 1º grau?
- [ ] **Calculou a prescrição** logo de início (penas baixas nos incisos de detenção)?
- [ ] Usou a **defesa prévia do art. 2º, I** para pedir rejeição da denúncia?
- [ ] Atacou **prisão/afastamento automáticos** exigindo fundamentação cautelar (art. 312 CPP)?
- [ ] Discutiu **dolo** (todos os tipos são dolosos; irregularidade ≠ crime)?
- [ ] Separou **penal x improbidade x TCE** (independência de instâncias)?
- [ ] Conferiu **numeração dos incisos e das súmulas** na redação/jurisprudência vigentes via `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Tratar o art. 1º como juízo político da Câmara (é crime, vai ao Judiciário).
- Confiar no fim do mandato como causa extintiva (Súm. 703 permite processar o ex-prefeito).
- Aceitar competência de 1º grau havendo foro no TJ — ou insistir no TJ após o fim do mandato.
- Ignorar a origem federal da verba (declínio à Justiça Federal — Súm. 208).
- Deixar de calcular a prescrição em fatos antigos de gestão.
- Confundir a esfera penal com a improbidade (Lei 14.230/21) — são independentes.
- Citar súmula ou inciso **de memória**, sem conferir vigência e número.

## Nota de conformidade

- **Revisão humana obrigatória.** Este material é apoio à estratégia de defesa, não substitui o juízo do advogado responsável (CED, art. 2º) nem a leitura dos autos concretos.
- **Perspectiva de defesa** (polo defensivo). A skill não presta assessoria à acusação; as "contra-teses" servem apenas para o defensor **antecipar** o argumento adversário.
- **Citation Gate:** toda súmula, tese ou acórdão (702/703 STF, 208/209 STJ, 599/STJ, AP 937) é conferido em `jurisprudencia-stj-stf` **antes** de ir à peça. Há sanção real por jurisprudência inventada por IA.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
