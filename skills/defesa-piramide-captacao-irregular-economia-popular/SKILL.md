---
name: defesa-piramide-captacao-irregular-economia-popular
description: >-
  Use, na DEFESA, para definir o ENQUADRAMENTO e a COMPETÊNCIA em esquemas de pirâmide/Ponzi, 'bola
  de neve' e captação irregular de recursos — a disputa entre crime contra o Sistema Financeiro
  Nacional (Lei 7.492/86, art. 16 — Justiça Federal), crime contra a economia popular (Lei 1.521/51,
  art. 2º, IX — Justiça Estadual) e estelionato de massa (art. 171 do CP). Gatilhos: pirâmide
  financeira, esquema Ponzi, bola de neve… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, penal-economico, competencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-piramide-captacao-irregular-economia-popular"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-piramide-captacao-irregular-economia-popular", "defesa piramide", "economia popular"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Enquadramento e competência em pirâmide/Ponzi e captação irregular

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

Esta skill orienta a **defesa** na questão que decide o rumo desses processos: **qual crime** e **qual Justiça**. O mesmo fato — captar dinheiro do público prometendo rendimentos — pode ser lançado como crime contra o **SFN** (Lei 7.492/86, Justiça Federal), contra a **economia popular** (Lei 1.521/51, Justiça Estadual) ou como **estelionato de massa** (art. 171 do CP). A escolha do enquadramento define pena, benefícios, prescrição e o próprio juízo natural.

> **Lição central:** enquadramento não é rótulo — é **tudo**. Ele fixa a Justiça competente, a pena, a possibilidade de ANPP/transação e o prazo prescricional. **Parta da conduta concreta, não do *nomen iuris* da denúncia.** A pergunta decisiva é: houve **operação real no mercado financeiro/de capitais** (captação/intermediação de recursos de terceiros ou oferta pública de valores mobiliários → SFN → Federal), ou foi mero **recrutamento em cadeia** cujos ganhos vêm da entrada de novos aderentes (→ economia popular → Estadual)? Errar essa distinção entrega ao acusador a pena maior e o foro mais gravoso.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente da **Lei 7.492/86** (arts. 1º e 16), da **Lei 1.521/51** (art. 2º, IX), do **art. 171 do CP** (inclusive o §5º — representação, incluído pela Lei 14.155/2021) e do **marco legal dos ativos virtuais (Lei 14.478/2022)** e seu tipo penal de fraude com criptoativos — dispositivo, pena e data de vigência. Confira também as **Súmulas 498/STF** e **122/STJ** e a **linha atual do STJ** sobre conflito de competência em pirâmides com criptomoedas, tudo via `jurisprudencia-stj-stf` e o gate `verificacao-citacoes`. **Não cite precedente de memória.**

## Os três enquadramentos em disputa

| Enquadramento | Dispositivo | Pena | Justiça | Bem jurídico |
|---|---|---|---|---|
| **SFN — operar IF sem autorização** | Lei 7.492/86, art. 16 (+ art. 1º) | reclusão **1 a 4** anos e multa | **Federal** (art. 26; CF 109, VI) | higidez do Sistema Financeiro |
| **Economia popular — "bola de neve"** | Lei 1.521/51, art. 2º, IX | detenção **6 m a 2** anos e multa | **Estadual** (Súm. 498/STF) | economia popular / poupança do povo |
| **Estelionato (de massa)** | CP, art. 171 | reclusão **1 a 5** anos e multa | **Estadual** (regra); Federal se lesão a bem/interesse da União (CF 109, IV) | patrimônio individual das vítimas |

> **Atenção às escaladas de imputação (SFN):** o esquema costuma vir acompanhado de tipos **muito mais graves** da Lei 7.492 — **gestão fraudulenta** (art. 4º, reclusão **3 a 12** anos), **apropriação** (art. 5º, 2 a 6 anos) e **evasão de divisas** (art. 22). Trazer o caso para o SFN raramente é neutro: abre a porta desses tipos e do foro federal. Frequentemente o interesse defensivo é **afastar** o SFN.

## Base legal

- **Lei 7.492/86, art. 1º** — define *instituição financeira*: quem tenha por atividade a **captação, intermediação ou aplicação de recursos financeiros de terceiros**, ou a **custódia, emissão, distribuição, negociação ou administração de valores mobiliários**. **Parágrafo único** — equipara a IF a **pessoa jurídica** que capte/administre recursos de terceiros e a **pessoa natural** que exerça tais atividades, **ainda que de forma eventual**.
- **Lei 7.492/86, art. 16** — *fazer operar, sem a devida autorização (ou com autorização obtida por declaração falsa), instituição financeira*. É o núcleo típico da captação clandestina.
- **Lei 7.492/86, art. 26** — ação penal pública promovida pelo **MPF, perante a Justiça Federal**.
- **Lei 1.521/51, art. 2º, IX** — *obter ou tentar obter ganhos ilícitos em detrimento do povo ou de número indeterminado de pessoas mediante especulações ou processos fraudulentos ("bola de neve", "cadeias", "pichardismo" e quaisquer outros equivalentes)*. É a tipificação **específica da pirâmide**.
- **CP, art. 171** — estelionato; **§5º** (Lei 14.155/2021) tornou a ação penal **pública condicionada à representação**, salvo as exceções legais (Administração Pública, vítima idosa ou vulnerável etc.).
- **CP, art. 12** — a **legislação especial** prevalece sobre a geral (base do concurso aparente de normas).
- **Lei 6.385/76, art. 2º, IX** — *contrato de investimento coletivo (CIC)* ofertado publicamente é **valor mobiliário** (competência da CVM) — chave para atrair, ou afastar, a lógica do mercado de capitais.
- **Lei 14.478/2022** — marco legal dos ativos virtuais; instituiu tipo penal de fraude com criptoativos. **[NÃO VERIFICADO — confirmar dispositivo, pena e vigência via `jurisprudencia-stj-stf`.]**

## Roteiro de enquadramento — a árvore de decisão

```
1) Houve OPERAÇÃO no mercado financeiro / de capitais?
   - captação/intermediação/aplicação de recursos de terceiros como ATIVIDADE (art. 1º, Lei 7.492); ou
   - OFERTA PÚBLICA de valores mobiliários / contrato de investimento coletivo (Lei 6.385/76, art. 2º, IX)?
   ├── SIM → tende a CRIME CONTRA O SFN (Lei 7.492/86, art. 16) → JUSTIÇA FEDERAL
   │         (verificar ausência de autorização de BACEN/CVM)
   └── NÃO → siga
2) O núcleo é RECRUTAMENTO em cadeia ("bola de neve"), com ganhos vindos
   da ENTRADA de novos aderentes — e não de atividade econômica real?
   ├── SIM → CRIME CONTRA A ECONOMIA POPULAR (Lei 1.521/51, art. 2º, IX) → JUSTIÇA ESTADUAL (Súm. 498/STF)
   └── NÃO → siga
3) Houve INDUÇÃO em erro de vítimas, com prejuízo e vantagem ilícita?
   └── SIM → ESTELIONATO (art. 171, CP), eventual "de massa" → JUSTIÇA ESTADUAL
            (regra; Federal só se houver lesão a bem/serviço/interesse da União — CF 109, IV)
4) CONCURSO APARENTE: o mesmo fato foi lançado em >1 tipo?
   → aplicar ESPECIALIDADE / CONSUNÇÃO → UM só crime (afastar bis in idem)
5) CRIPTO envolvida? Camada do marco legal (Lei 14.478/2022) — [confirmar tipo/pena].
   Lembrar: cripto, por si só, NÃO é valor mobiliário; sê-lo-á se estruturada como CIC ofertado ao público.
```

## A questão da competência (Federal x Estadual)

- **SFN → Justiça Federal.** Lei 7.492, art. 26, e CF, art. 109, VI. É a competência que a acusação busca quando quer o foro federal e os tipos graves da 7.492.
- **Economia popular → Justiça Estadual.** **Súmula 498/STF**: compete à Justiça dos Estados o processo e julgamento dos crimes contra a economia popular. A pirâmide "pura" (Lei 1.521, art. 2º, IX) é estadual.
- **Estelionato → Justiça Estadual, como regra.** Só migra para a Federal se houver efetiva lesão a bem, serviço ou interesse da União (CF 109, IV) — a **mera** prática pela internet ou com criptomoeda **não** federaliza. (A competência **territorial** do estelionato — local da consumação/prejuízo — é outro eixo; ver `triagem-competencia-foro-criminal`.)
- **A arma da acusação — conexão (Súmula 122/STJ):** havendo crime federal conexo a crime estadual, a **Justiça Federal atrai** o conjunto. **Resposta da defesa:** só há atração se existir **crime federal real** (SFN efetivamente configurado); inexistente a operação de instituição financeira ou a oferta pública de valores mobiliários, não há o que federalizar — a pluralidade de vítimas em vários Estados não cria, por si, competência federal.

## Camada cripto (Lei 14.478/2022) — a aplicação contemporânea

A quase totalidade dos casos atuais envolve **criptoativos**. Pontos que a defesa deve dominar:

- **Cripto não é, por si só, valor mobiliário.** A moeda/token, isoladamente, não atrai a competência federal. O que pode atraí-la é a **estrutura de contrato de investimento coletivo** (Lei 6.385/76, art. 2º, IX) **ofertado publicamente** — promessa de rendimento derivada do esforço do empreendedor/terceiro. **Exija da acusação a prova dessa oferta pública**; sem ela, remanesce a pirâmide comum (economia popular/estelionato → Estadual).
- **"Trading" e "arbitragem" de fachada.** Quando não há operação real e os "lucros" vêm apenas da **entrada de novos aportes**, o caso é **"bola de neve"** (Lei 1.521, art. 2º, IX), ainda que rotulado de fundo de investimento cripto.
- **Tipo penal específico.** A Lei 14.478/2022 inseriu figura de **fraude com ativos virtuais** no ordenamento; **[NÃO VERIFICADO — confirmar dispositivo, pena, competência e vigência]** via `jurisprudencia-stj-stf`. Atenção à **irretroatividade** (CF, art. 5º, XL): fatos anteriores à vigência não podem ser por ele apenados.
- **Lavagem quase sempre imputada em conjunto.** A movimentação dos aportes tende a gerar imputação de **lavagem de capitais** (Lei 9.613/98) — competência frequentemente **federal** e que **agrava** o quadro. Trabalhe em conjunto com `defesa-lavagem-capitais` antes de decidir a estratégia de foro.

## Teses defensivas

1. **Desclassificar para economia popular (Lei 1.521, art. 2º, IX).** Quando a conduta é **recrutamento em cadeia** sem captação no mercado de capitais nem valores mobiliários. Ganhos: pena **muito menor** (detenção 6 m–2 a), enquadramento como **infração de menor potencial ofensivo** (JECRIM, transação penal — confirmar compatibilidade com o rito especial da Lei 1.521), **prescrição em 4 anos** e deslocamento para a **Justiça Estadual**.
2. **Atipicidade quanto ao SFN.** O agente/PJ **não operou instituição financeira** no sentido do art. 1º da Lei 7.492: não houve captação/intermediação/aplicação de recursos como **atividade financeira** regulada, nem **valores mobiliários** ofertados. Sem esse substrato, **não incide o art. 16** — e cai o foro federal.
3. **Concurso aparente de normas — afastar o bis in idem.** É vedado punir o mesmo fato cumulativamente por Lei 7.492 **+** Lei 1.521 **+** art. 171. Aplicar **especialidade/consunção** para reter **um só tipo** — em regra o **especial** (a 1.521 e a 7.492 são especiais frente ao estelionato).
4. **Incompetência da Justiça Federal.** Correto o enquadramento como economia popular ou estelionato, a competência é **estadual**. Suscitar **exceção de incompetência** (CPP, art. 95, II) ou **conflito**. Reconhecida a incompetência, os **atos decisórios** são nulos; os **não decisórios** podem ser ratificados (CPP, art. 567) — atacar especialmente decretos de prisão e medidas cautelares proferidos por juízo incompetente.
5. **Prescrição.** No enquadramento como economia popular (máx. 2 anos), a prescrição corre em **4 anos** (CP, art. 109, V) — muitos esquemas antigos já estão prescritos. **Calcule com a skill `calculadora-prescricao`** e confira marcos interruptivos; contraste com os prazos bem maiores do SFN (art. 16 → 8 anos) e do estelionato (→ 12 anos).
6. **Estelionato — falta de representação (art. 171, §5º).** Sendo a imputação de estelionato, exigir a **representação** das vítimas como condição de procedibilidade (salvo exceções legais); sua ausência tranca a ação. (Conferir a jurisprudência sobre alcance e sobre a situação de processos anteriores à Lei 14.155/2021 via `jurisprudencia-stj-stf`.)
7. **Individualização da autoria — inépcia da denúncia genérica.** Em esquemas com muitos envolvidos, **afastar a responsabilidade objetiva**: distinguir **sócio-administrador/gestor** de **mero divulgador/promotor** ou **investidor**. A denúncia deve estabelecer o mínimo liame entre cada acusado e a conduta; imputação por “ser sócio” é inepta.
8. **Benefícios despenalizadores.** Mesmo mantido o SFN (art. 16, mín. 1 ano) ou o estelionato (mín. 1 ano), **cabe ANPP** (CPP, art. 28-A; pena mínima < 4 anos) — ver skill `anpp`. Na economia popular, além da ANPP, transação/suspensão condicional do processo.

> **Cuidado com o "tiro pela culatra":** nem sempre a Justiça Estadual é melhor. Avalie caso a caso — prescrição, teto de pena, foro, existência de outros réus e de **lavagem de capitais** (produto da pirâmide → ver `defesa-lavagem-capitais`, que costuma ser competência federal e agrava o quadro). A escolha do enquadramento é **decisão estratégica**, não automática.

## Contra-teses (acusação) e como respondê-las

| Tese da acusação | Resposta da defesa |
|---|---|
| **Súmula 122/STJ**: conexão federaliza tudo | Exigir **crime federal real**; sem operação de IF nem valor mobiliário, não há competência federal a atrair. |
| **CIC = valor mobiliário** (Lei 6.385/76, IX): oferta pública atrai o mercado de capitais | Exigir prova de **oferta pública** e de rendimento advindo do **esforço do empreendedor/terceiro**; o mero recrutamento em cadeia **não é** CIC. |
| **Estelionato absorve/concorre** com a economia popular | Opor **especialidade** e **bis in idem**: o fato é único; retém-se **um** tipo. |
| **Crime continuado / concurso** eleva pena e prescrição | Discutir os requisitos do **art. 71 do CP** (mesmas condições de tempo, lugar e maneira de execução) e a individualização de cada conduta. |
| **Cripto** atrai competência federal por si só | A criptomoeda **não é**, por si, valor mobiliário; sem estrutura de CIC ofertado ao público, permanece a competência **estadual**. |

## Súmulas e precedentes (sob Citation Gate)

> **Nada de número de acórdão citado de memória.** Prefira **tese + dispositivo**; confira cada item via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de peticionar.

- **Súmula 498/STF** — crimes contra a **economia popular** são de competência da **Justiça Estadual**, em ambas as instâncias. *(Conferir vigência.)*
- **Súmula 122/STJ** — **conexão** entre crime de competência federal e estadual → processo **unificado na Justiça Federal**. *(Conferir vigência.)*
- **Contrato de investimento coletivo como valor mobiliário** — leading case reconhecendo CICs (ex.: contratos de investimento agropecuário) como valores mobiliários sujeitos à CVM. **[NÃO VERIFICADO — confirmar o precedente específico.]**
- **STJ — conflitos de competência em pirâmide com criptomoedas** — linha no sentido de que, **ausentes** oferta pública de valores mobiliários e operação de instituição financeira, a competência é **estadual** (economia popular/estelionato). **[NÃO VERIFICADO — confirmar os CC específicos e a orientação atual, que evolui.]**

## Erros comuns e checklist (defesa)

- [ ] **Partiu da conduta concreta** (o que efetivamente se fez com o dinheiro do público), e não do rótulo da denúncia?
- [ ] Verificou se houve **operação de instituição financeira** (art. 1º/16 da 7.492) ou **oferta pública de valores mobiliários** (Lei 6.385/76, IX) — o que separa SFN (Federal) de economia popular (Estadual)?
- [ ] Testou a **desclassificação** para a **Lei 1.521, art. 2º, IX** (pena menor, JECRIM, prescrição em 4 anos)?
- [ ] Identificou **cumulação indevida** (7.492 + 1.521 + 171) e opôs **concurso aparente / bis in idem**?
- [ ] Avaliou a **exceção de incompetência** e a **nulidade dos atos decisórios** de juízo incompetente (CPP, art. 567)?
- [ ] Calculou a **prescrição** com `calculadora-prescricao`, por enquadramento?
- [ ] Sendo estelionato, exigiu a **representação** (art. 171, §5º)?
- [ ] **Individualizou a autoria** e atacou a **denúncia genérica** (afastar responsabilidade objetiva de divulgadores/investidores)?
- [ ] Confirmou o **tipo penal da Lei 14.478/2022** (cripto) e as **Súmulas 498/STF e 122/STJ** via `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Aceitar o foro federal sem checar se há **crime contra o SFN real** (operação de IF / valor mobiliário).
- Confundir **pirâmide "pura"** (economia popular) com **captação regulada** (SFN) — são regimes, penas e Justiças diferentes.
- Deixar passar a **cumulação** de tipos sobre o mesmo fato (bis in idem).
- Tratar **criptomoeda** como valor mobiliário automático (federalização indevida).
- Esquecer a **prescrição** curta da economia popular e a **representação** no estelionato.
- Escolher a Justiça "mais leve" sem checar **lavagem de capitais** conexa (pode agravar e federalizar — `defesa-lavagem-capitais`).

## Nota de conformidade e lembretes finais

- **Perspectiva de defesa.** Esta skill assume o **polo defensivo**. Atuando na acusação (MP), o eixo se inverte — a análise de enquadramento/competência deve observar o interesse público e a estrita legalidade, com as skills próprias do polo acusatório.
- **Revisão humana obrigatória.** Todo enquadramento, tese de incompetência e cálculo aqui é **hipótese a confirmar** — a responsabilidade pela peça é sempre do **advogado(a)** (CED, art. 2º). Este material apoia a preparação; não substitui o exame do caso concreto e dos autos.
- **Citation Gate.** Lei, súmula, tese ou acórdão **só** entram na peça após passarem por `jurisprudencia-stj-stf` / `verificacao-citacoes`. **Na dúvida, omitir vence inventar** (há sanções reais por jurisprudência inventada por IA).
- **Enquadramento primeiro, estratégia depois** — é a decisão que define pena, foro, benefícios e prescrição.

**Padrão de redação:** ao converter a análise em peça (exceção de incompetência, resposta à acusação, alegações finais, memoriais), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
