---
name: interface-penal-improbidade-administrativa
description: >-
  Use ao coordenar a defesa criminal com uma ação de improbidade administrativa paralela sobre os
  mesmos fatos (Lei 8.429/92 red. Lei 14.230/2021) — independência relativa das instâncias,
  aproveitamento do dolo específico e do fim da modalidade culposa, impacto da absolvição/prescrição
  penal sobre a improbidade, non bis in idem e cumulação de sanções. Produz NOTA DE ARTICULAÇÃO
  estratégica, não peça de improbidade. Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, white-collar, improbidade, estrategia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-interface-penal-improbidade-administrativa"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["interface-penal-improbidade-administrativa", "interface penal", "improbidade administrativa"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Interface Penal × Improbidade Administrativa (Lei 8.429/92, red. Lei 14.230/2021; CP, arts. 312-327; CF, art. 37, §4º)

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

Esta skill orienta a **coordenação estratégica** entre a **defesa criminal** e a **ação de improbidade administrativa** que corre em paralelo sobre os **mesmos fatos** — típico de crimes funcionais (peculato, corrupção passiva, concussão, prevaricação) que quase sempre geram, além da ação penal, uma ação de improbidade movida pelo Ministério Público ou pela pessoa jurídica lesada. O produto é uma **nota de articulação de instâncias** (mapa de riscos, teses de comunicação e cronograma), **não** uma peça de defesa na ação de improbidade. Foco majoritário em **DEFESA**.

> **Lição central:** as instâncias penal e de improbidade são **relativamente independentes** — mas a independência **não é absoluta**. A defesa vence quando **planeja a comunicação** em vez de sofrê-la: escolhe onde travar primeiro, protege o resultado penal para exportá-lo à improbidade (absolvição por negativa de fato/autoria vincula; art. 386, I e IV, CPP), e neutraliza o vazamento em sentido inverso. Trate o processo como **um só litígio em dois foros**, não como duas causas isoladas.

> **Cautela de vigência (obrigatória antes de citar):** a **Lei 14.230/2021** reformou profundamente a Lei 8.429/92 — **extinguiu a improbidade culposa** (passou a exigir **dolo específico**, art. 1º, §§1º a 3º), remodelou **prescrição** (art. 23) e **tipos** (arts. 9º a 11), e a **retroatividade** dessas mudanças a fatos anteriores foi decidida pelo STF no **Tema 1.199 [NAO VERIFICADO]**. Antes de afirmar retroatividade, prazo prescricional, exigência de dolo ou qualquer efeito de comunicação de instâncias, **confirme a redação vigente e o precedente atual via `jurisprudencia-stj-stf`**. Este material reflete o marco da Lei 14.230/2021; não cite números de tema/HC/REsp de memória.

---

## Base legal

- **CF, art. 37, §4º** — improbidade: suspensão de direitos políticos, perda da função, indisponibilidade de bens e ressarcimento, **"sem prejuízo da ação penal cabível"** (fundamento constitucional da independência).
- **Lei 8.429/92 (LIA), redação da Lei 14.230/2021:**
  - **Art. 1º, §§1º a 3º** — improbidade **exige dolo** (fim de obter proveito/benefício indevido); **fim da modalidade culposa**.
  - **Art. 9º** — enriquecimento ilícito; **art. 10** — dano ao erário; **art. 11** — violação de princípios (rol agora **taxativo**).
  - **Art. 12** — sanções (perda de bens, ressarcimento, perda da função, suspensão de direitos políticos, multa civil, proibição de contratar).
  - **Art. 17 e 17-B** — legitimidade (MP) e possibilidade de **acordo de não persecução cível (ANPC)**.
  - **Art. 21, §§3º e 4º** — a **absolvição criminal** só afasta a improbidade quando **negar a existência do fato ou a autoria**; e a sentença penal condenatória **não** é pressuposto da ação de improbidade.
  - **Art. 23** — **prescrição** (prazo e marcos remodelados pela reforma).
- **CP:**
  - **Art. 91, I e II** — efeitos genéricos da condenação penal: tornar certa a obrigação de **reparar o dano** e **perda** de produto/proveito.
  - **Art. 92, I** — **perda do cargo/função** como efeito específico da condenação penal (interface direta com a sanção de improbidade).
  - **Arts. 312 a 327** — crimes funcionais (peculato, concussão, corrupção passiva, prevaricação etc.), núcleo fático comum com a improbidade.
- **CPP:**
  - **Art. 386, I e IV** — absolvição por **inexistência do fato** ou por **não ter o réu concorrido** para a infração (as hipóteses que **vinculam** o juízo cível — art. 935 do CC).
  - **Art. 66** — ação civil **não** obstada quando a decisão penal reconhece que o fato não é crime (mas pode ser ilícito civil/administrativo).
  - **Arts. 63-68** — efeitos civis da sentença penal (título executivo; suspensão do curso da ação civil — art. 64, parágrafo único).
- **CC, art. 935** — a responsabilidade civil é **independente** da criminal, mas **não se pode questionar** mais a **existência do fato** ou **quem seja o autor** quando decididos no juízo criminal.
- **CTB / leis extravagantes** — quando o fato funcional envolve tipo específico, conferir sobreposição própria.

> **Regra de ouro da comunicação (art. 935 CC + art. 386, I/IV, CPP):** só a **negativa categórica de existência do fato** ou de **autoria** na esfera penal **importa** para fora (vincula a improbidade). Absolvição por **insuficiência de provas** (art. 386, VII), por **atipicidade penal** ou por **prescrição** **não** vincula a improbidade — a ação de improbidade **pode prosseguir**.

---

## Mapa das instâncias — o que se comunica e o que não

| Da esfera penal para a improbidade | Comunica? | Base |
|---|---|---|
| Absolvição por **inexistência do fato** (art. 386, I) | **SIM — vincula** | CC 935; CPP 386, I; LIA 21, §4º |
| Absolvição por **negativa de autoria** (art. 386, IV) | **SIM — vincula** | CC 935; CPP 386, IV; LIA 21, §4º |
| Absolvição por **insuficiência de provas** (art. 386, VII) | **NÃO vincula** | improbidade prossegue |
| Absolvição por **atipicidade penal** (fato não é crime) | **NÃO vincula** (pode ser ímprobo) | CPP 66 |
| **Prescrição penal** | **NÃO vincula** (prescrição é autônoma — LIA 23) | independência dos prazos |
| **Condenação penal** por crime funcional | **NÃO é pressuposto** da improbidade; mas gera efeitos civis (reparação — CP 91, I) | LIA 21, §3º; CP 91 |

> **Assimetria estratégica:** a **absolvição penal certa** (fato/autoria) é a **munição mais valiosa** que a defesa pode produzir para a improbidade — persiga-a explicitamente e faça constar da sentença qual foi o **fundamento** (I ou IV, não VII). Já a **condenação penal** não determina a procedência da improbidade, mas alimenta o ressarcimento — daí a assimetria a favor da defesa quando o objetivo é blindar o cível.

---

## A virada de 2021 — dolo específico e fim da culpa (a tese central)

A **Lei 14.230/2021** é o coração desta skill. Antes dela, o art. 10 admitia improbidade **culposa** (dano ao erário por negligência/imperícia). **Depois dela:**

- **Improbidade exige DOLO** — e não qualquer dolo, mas o **dolo específico** (art. 1º, §§1º a 3º): a vontade livre e consciente de alcançar o **resultado ilícito** tipificado, com a **finalidade** de obter proveito/benefício indevido. **Mero erro, culpa, ilegalidade ou dano ao erário, isoladamente, não bastam.**
- **Fim da modalidade culposa** — condutas antes enquadradas como improbidade culposa **deixaram de ser ímprobas** (podem, no máximo, gerar responsabilização administrativa/civil comum).
- **Rol taxativo do art. 11** — a violação de princípios não é mais cláusula aberta; exige subsunção a inciso específico.

**Ponte com o penal (a tese de dolo unificado):** os crimes funcionais dolosos (peculato, corrupção, concussão) e a improbidade agora **compartilham a exigência de dolo**. Isso cria **duas frentes de aproveitamento**:

1. **Aproveitar a absolvição penal por ausência de dolo** para sustentar que **também não há dolo específico de improbidade** — não vincula automaticamente (a improbidade não depende de condenação penal), mas é **poderoso argumento persuasivo** de que o mesmo substrato fático foi julgado atípico por falta do elemento subjetivo.
2. **Atacar a improbidade pela ausência de dolo específico** mesmo quando o fato é incontroverso — provar **ilegalidade sem finalidade ilícita** (o gestor errou, mas não quis se beneficiar nem beneficiar terceiro) desmonta a improbidade pós-2021, ainda que a conduta administrativa tenha sido irregular.

> **Tese defensiva forte:** "Fato provado + ilegalidade administrativa **não é improbidade** sem **dolo específico** (art. 1º, §§1º a 3º, LIA red. 2021). A conduta pode ser irregular, anulável ou geradora de ressarcimento comum — mas a **sanção de improbidade** pressupõe a vontade de obter proveito indevido, ausente no caso." Espelha, no cível, a defesa penal de **ausência de dolo** no crime funcional.

---

## Retroatividade da reforma — o ponto sensível

A Lei 14.230/2021 é **mais benéfica** ao réu (extingue a culpa, exige dolo específico, encurta/remodela a prescrição). Discute-se sua **retroatividade** a fatos e processos anteriores. O STF fixou tese no **Tema 1.199 [NAO VERIFICADO]** — em linhas gerais: (a) a exigência de dolo e o **fim da improbidade culposa** alcançam atos **anteriores** ainda **não transitados em julgado** (processos em curso); (b) os **novos prazos prescricionais** têm regra de transição/aplicação prospectiva própria. **A tese exata, seus limites e o marco temporal precisam ser confirmados via `jurisprudencia-stj-stf` antes de qualquer citação** — é o ponto de maior risco de erro de vigência desta skill.

> **Uso defensivo (com verificação):** em ação de improbidade **culposa** ainda em curso ajuizada por fato anterior a 2021, sustentar a **extinção** pela impossibilidade superveniente (fim da modalidade culposa) — sempre ancorado no precedente **conferido**, não de memória.

---

## Non bis in idem e cumulação de sanções

- **Cumulação é a regra:** por serem instâncias autônomas, o mesmo fato pode gerar **sanção penal** (pena) **e** **sanção de improbidade** (perda da função, suspensão de direitos políticos, multa civil) **e** sanção administrativa disciplinar — **sem** bis in idem em tese, porque as naturezas são distintas (CF, art. 37, §4º, "sem prejuízo da ação penal").
- **O ponto de fricção — sobreposição de efeitos idênticos:** quando a **perda do cargo** já foi decretada como **efeito da condenação penal** (CP, art. 92, I) **e** também pretendida como **sanção de improbidade** (art. 12, LIA), há **sobreposição do mesmo efeito material**. A defesa deve suscitar a **incidência única** do efeito já esgotado — não se perde duas vezes o mesmo cargo. O mesmo vale para o **ressarcimento**: o valor reparado no juízo penal (CP, art. 91, I) **abate** o ressarcimento na improbidade (vedação ao **enriquecimento do erário** / bis in idem reparatório).
- **Multa civil × pena de multa:** naturezas diversas; em regra cumuláveis, mas a **proporcionalidade global** das sanções pode ser suscitada.

> **Tese defensiva:** "As sanções cumuláveis não autorizam a **dupla imposição do mesmo efeito**. Decretada a perda do cargo na esfera penal (CP, art. 92, I) e já ressarcido o erário (CP, art. 91, I), a ação de improbidade **não pode reimpor** perda de função nem ressarcimento em duplicidade — sob pena de **bis in idem material** e enriquecimento sem causa do erário."

---

## Prescrição — dois relógios independentes

- **Penal:** prescrição pela pena (CP, arts. 109-110), com marcos próprios (recebimento da denúncia, sentença etc.).
- **Improbidade:** prescrição do **art. 23 da LIA (red. 2021)** — prazo e marcos **próprios e autônomos**, remodelados pela reforma (incluída a figura da **prescrição intercorrente**). **A prescrição penal NÃO arrasta a de improbidade e vice-versa.**
- **Consequência estratégica:** a **prescrição penal** extingue a punibilidade **penal** mas **não** encerra a improbidade (que segue seu próprio relógio). Não confie que "prescreveu o crime, acabou tudo" — **verifique o art. 23 da LIA separadamente**.

> Para o cálculo penal, o método está em `calculadora-prescricao` (prescrição da pretensão punitiva/executória). Para a prescrição de improbidade (art. 23 LIA), **não** há calculadora determinística nesta base — **[calculadora a implementar com testes]**; enquanto isso, descrever o método (identificar o marco inicial do art. 23, o prazo aplicável e eventual intercorrente) e conferir a redação vigente via `jurisprudencia-stj-stf`.

---

## Roteiro de articulação (defesa) — passo a passo

1. **Mapear as duas ações:** identificar processo penal (vara criminal) e ação de improbidade (vara de fazenda pública), objeto, autor, fatos e sobreposição. Montar a **linha do tempo unificada**.
2. **Classificar o fato funcional:** qual crime do CP (arts. 312-327) e qual tipo de improbidade (arts. 9º/10/11) espelham o mesmo substrato? Onde a prova é comum?
3. **Escolher a frente prioritária:** onde a absolvição/improcedência é mais provável e mais **exportável**? Em regra, buscar **primeiro** a **absolvição penal por fato/autoria** (vincula) e usá-la na improbidade.
4. **Blindar o resultado penal para exportação:** ao pedir absolvição, **requerer expressamente** o fundamento do **art. 386, I ou IV** (não se contentar com o VII), para que a coisa julgada penal **vincule** o cível (CC 935; LIA 21, §4º).
5. **Frente de dolo específico na improbidade:** independentemente do penal, atacar a improbidade pela **ausência de dolo específico** (art. 1º, §§1º a 3º) — ilegalidade sem finalidade de proveito não é ímproba.
6. **Suscitar comunicação favorável / conter a desfavorável:** requerer **suspensão** da ação de improbidade quando pendente questão prejudicial penal cuja solução vincule o cível (art. 313, V, "a", CPC / art. 64, parágrafo único, CPP — **conferir cabimento**); resistir a que condenação penal seja usada como automatismo de procedência.
7. **Controlar a cumulação:** identificar efeitos idênticos já esgotados (perda do cargo — CP 92, I; ressarcimento — CP 91, I) e opor a **incidência única**.
8. **Vigiar os dois relógios de prescrição** (CP e art. 23 LIA) — separadamente.
9. **Avaliar consensualidade coordenada:** ANPP no penal (se cabível) e **ANPC** na improbidade (art. 17-B, LIA) — **negociar em conjunto** para evitar que a confissão/aceitação num foro prejudique o outro. Ponderar com `anpp` (esfera penal) e as regras do art. 17-B.
10. **Produzir a nota de articulação** (estrutura abaixo) e submetê-la à **revisão humana** antes de qualquer ato.

---

## Estrutura da NOTA DE ARTICULAÇÃO (o entregável)

> **Não é peça** de improbidade nem de defesa penal — é um **documento interno de estratégia** que orienta as duas defesas e o cliente. Não vai aos autos.

```
NOTA DE ARTICULAÇÃO — INTERFACE PENAL × IMPROBIDADE
Cliente/assistido: [NOME]  |  Fatos: [SÍNTESE]  |  Data: [DATA]

1. AS DUAS AÇÕES
   - Penal: [vara, nº, tipo(s) do CP, fase, autor]
   - Improbidade: [vara de fazenda, nº, tipo LIA (art. 9/10/11), fase, autor]
   - Substrato fático comum: [descrever a sobreposição]

2. LINHA DO TEMPO UNIFICADA
   - [marcos das duas ações; datas de prescrição penal e do art. 23 LIA]

3. MATRIZ DE COMUNICAÇÃO (o que se exporta)
   - Resultado penal buscado: [absolvição art. 386, I/IV → vincula]
   - Riscos de vazamento reverso: [condenação penal → reparação; etc.]

4. TESES POR FRENTE
   a) Penal: [ausência de dolo / atipicidade / negativa de autoria...]
   b) Improbidade: [ausência de dolo específico (art. 1º, §§1-3);
      fim da culpa; retroatividade benéfica (Tema 1.199 [conferir]);
      incidência única de efeitos; prescrição art. 23]

5. CUMULAÇÃO DE SANÇÕES — CONTROLE
   - Efeitos idênticos já esgotados: [perda do cargo CP 92, I;
     ressarcimento CP 91, I] → opor incidência única.

6. PRESCRIÇÃO — DOIS RELÓGIOS
   - Penal: [método via calculadora-prescricao]
   - Improbidade: [art. 23 LIA — marco/prazo; conferir vigência]

7. CONSENSUALIDADE COORDENADA
   - ANPP (penal) × ANPC (art. 17-B LIA) — riscos cruzados da confissão.

8. RECOMENDAÇÃO E PRÓXIMOS PASSOS
   - [frente prioritária; pedidos de suspensão; provas comuns a produzir]

REVISÃO HUMANA OBRIGATÓRIA — rascunho técnico, hipótese a confirmar.
```

**Campos a preencher:** [NOME], [SÍNTESE DOS FATOS], dados das duas ações, marcos temporais, teses selecionadas, [DATA].

---

## Teses e contra-teses

| Tese defensiva | Contra-tese (acusação/MP) | Como decidir |
|---|---|---|
| Absolvição penal por fato/autoria (386, I/IV) **vincula** a improbidade | Absolvição foi por insuficiência de provas (386, VII) → não vincula | Ler o **fundamento** da sentença; só I e IV vinculam (CC 935) |
| Ilegalidade **sem dolo específico** não é improbidade (art. 1º, §§1-3, red. 2021) | Houve dano ao erário → basta o resultado | Pós-2021 o dano isolado **não basta**; exige-se **finalidade de proveito** |
| Retroatividade benéfica extingue a improbidade **culposa** anterior | Reforma não retroage a processos em curso | **Tema 1.199 [conferir via `jurisprudencia-stj-stf`]** — não citar de memória |
| Perda do cargo já decretada no penal (CP 92, I) → **incidência única** | Sanções são autônomas e cumuláveis | Autonomia não autoriza **duplicar o mesmo efeito material** |
| Prescrição penal reconhecida | Improbidade prescreve por prazo próprio | Relógios separados — verificar **art. 23 LIA** isoladamente |
| Suspender improbidade por prejudicial penal (fato/autoria) | Independência das instâncias dispensa suspensão | Cabível quando a solução penal **vincular** o cível — conferir art. 313, V, CPC |

---

## Súmulas e precedentes (sob o Citation Gate)

> **Cite apenas dispositivos de lei e súmulas notórias com certeza. Para QUALQUER número de tema/HC/REsp/RE, informativo ou súmula da qual não tenha certeza absoluta, marque [NAO VERIFICADO] e confira via `jurisprudencia-stj-stf`. Ensine a TESE e o dispositivo antes de arriscar um número de acórdão.**

- **CC, art. 935** e **CPP, art. 386, I e IV** — a comunicação penal→cível só ocorre por **negativa de fato ou autoria** (dispositivos legais — citar com segurança).
- **CF, art. 37, §4º** — independência da improbidade em relação à ação penal (dispositivo constitucional — seguro).
- **LIA, art. 21, §§3º e 4º** (red. 2021) — condenação penal **não** é pressuposto; absolvição só afasta a improbidade se negar fato/autoria (dispositivo — seguro).
- **Tema 1.199/STF [NAO VERIFICADO]** — retroatividade da Lei 14.230/2021 (dolo específico, fim da culpa, prescrição). **Conferir a tese e os limites via `jurisprudencia-stj-stf`.**
- Precedentes do STJ sobre **independência das instâncias**, **vinculação da absolvição** por fato/autoria e **sobreposição de perda do cargo** existem, mas **qualquer número específico deve ser verificado** — **[NAO VERIFICADO]**.

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar as duas ações como **isoladas**, sem linha do tempo e matriz de comunicação unificadas.
- Contentar-se com absolvição penal por **insuficiência de provas** (386, VII) quando havia como obter **fato/autoria** (I/IV) — perde-se a vinculação.
- Supor que **prescrição penal encerra a improbidade** — os relógios são independentes (art. 23 LIA).
- Ignorar a exigência de **dolo específico** pós-2021 e continuar defendendo (ou atacando) sob a lógica da improbidade culposa revogada.
- Citar a **retroatividade** (Tema 1.199) **de memória** — é o maior foco de erro de vigência.
- Aceitar **dupla imposição** do mesmo efeito (perda do cargo / ressarcimento) sem opor a incidência única.
- Fechar **ANPP** ou **ANPC** isoladamente, deixando a confissão de um foro contaminar o outro.
- Produzir **peça de improbidade** — esta skill entrega **nota de articulação**; a defesa na ação de improbidade tem rito próprio (LIA, art. 17).

**Checklist:**
- [ ] Mapeadas as **duas ações** (penal e improbidade) e o **substrato fático comum**?
- [ ] **Linha do tempo unificada** com os **dois** marcos de prescrição (CP e art. 23 LIA)?
- [ ] Absolvição penal buscada com fundamento **exportável** (386, I ou IV, não VII)?
- [ ] Frente de **dolo específico** (art. 1º, §§1-3, red. 2021) trabalhada na improbidade?
- [ ] **Retroatividade** (Tema 1.199) conferida via `jurisprudencia-stj-stf` — **não citada de memória**?
- [ ] **Cumulação** controlada — efeitos idênticos (CP 92, I; CP 91, I) com incidência única?
- [ ] **Consensualidade** (ANPP × ANPC) coordenada para não haver contaminação cruzada?
- [ ] Súmulas/temas/acórdãos passaram pelo **Citation Gate** (`jurisprudencia-stj-stf`)?
- [ ] Entregue **nota de articulação** (não peça de improbidade)?
- [ ] **Revisão humana** do advogado responsável registrada?

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Esta nota de articulação é **hipótese a confirmar**, não decisão final; a estratégia entre instâncias deve ser validada pelo advogado responsável antes de qualquer ato processual.
- **Citação verificada.** Nenhuma súmula, tema, informativo ou acórdão é citado de memória — tudo passa pelo gate `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Em especial, a **retroatividade da Lei 14.230/2021 (Tema 1.199 [NAO VERIFICADO])** deve ser conferida antes de qualquer uso.
- **Ética por polo.** Esta skill é de **DEFESA** (polo passivo). A atuação segue o **EAOAB e o Provimento OAB 205/2021**; havendo atuação do polo acusatório (MP/assistente de acusação), o **roteador deve conferir o polo** e adaptar os deveres (CNMP para o MP; LC 80/94 para a Defensoria). O manejo coordenado de **ANPP** (art. 28-A, CPP) e **ANPC** (art. 17-B, LIA) observa os limites legais de cada acordo.
- **Sigilo e LGPD.** Dados do assistido e detalhes das duas ações nunca em repositório público; a nota de articulação é documento **interno** e não vai aos autos.

**Padrão de redação:** ao converter qualquer frente desta nota em peça (defesa penal ou defesa na ação de improbidade), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
