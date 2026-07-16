---
name: defesa-omissao-socorro-transito-304
description: >-
  Use para defender o condutor acusado de omissão de socorro no trânsito (art. 304 do CTB) —
  atipicidade por ausência de dolo, vítima já socorrida por terceiro ou já morta (impossibilidade do
  bem jurídico), impossibilidade material ou risco pessoal (parte final do tipo), distinção do art.
  304 CTB × art. 135 CP, distinção da fuga do local (art. 305 CTB), e a vedação de bis in idem com a
  causa de aumento de omissão de socorro… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.1.0"
  categories: [law, criminal, defesa, transito, ctb]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-omissao-socorro-transito-304"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-omissao-socorro-transito-304", "defesa omissao", "socorro transito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa — Omissão de Socorro no Trânsito (art. 304 do CTB)

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

Esta skill orienta a **defesa técnica do condutor acusado de omissão de socorro no trânsito** — o crime do **art. 304 da Lei 9.503/97 (CTB)**: deixar o condutor de veículo, na ocasião do acidente, de prestar imediato socorro à vítima, ou, não podendo fazê-lo diretamente, de solicitar auxílio da autoridade pública. É crime **omissivo próprio**, **doloso** e **autônomo**, que não se confunde com o homicídio/lesão culposos, nem com a fuga do local, nem com a causa de aumento de pena dos crimes culposos de trânsito.

> **Lição central:** o art. 304 do CTB **só incide quando o condutor NÃO deu causa** ao evento (não concorreu com culpa para o acidente) — porque, se causou o acidente culposamente, a omissão de socorro **já é causa de aumento** de pena dos arts. 302, §1º, ou 303 do CTB, e cobrar as duas coisas é **bis in idem**. A primeira pergunta da defesa é sempre: *o acusado deu causa ao acidente?* Se sim, o art. 304 não se aplica — a omissão é, no máximo, majorante do crime culposo, nunca crime autônomo.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 304 e dos arts. 302, 303 e 305 do CTB** (Lei 9.503/97), que sofreram alterações relevantes — em especial pela **Lei 13.281/2016** (nova pena do art. 305) e pela **Lei 14.071/2020** (reforma ampla do CTB, penas e §§ do art. 302). Antes de afirmar pena, causa de aumento ou tese, **confirme o texto atual na fonte oficial** e passe toda súmula/precedente/tese pela skill `verificacao-citacoes` (ou `jurisprudencia-stj-stf`). Na dúvida sobre um número de acórdão ou de súmula, **omitir vence inventar**.

## Base legal

- **Art. 304, CTB (Lei 9.503/97)** — tipo penal: *"Deixar o condutor do veículo, na ocasião do acidente, de prestar imediato socorro à vítima, ou, não podendo fazê-lo diretamente, por justa causa, deixar de solicitar auxílio da autoridade pública."* Pena de detenção + suspensão/proibição do direito de dirigir.
  - **Parágrafo único do art. 304 (conferir a redação oficial antes de citar):** a lei prevê que **o condutor incorre nas penas do artigo ainda que a sua omissão seja suprida por terceiros, ou que se trate de vítima com morte instantânea ou com ferimentos leves** — ponto sensível que se lê com o Citation Gate (ver abaixo, controvérsia sobre vítima morta / socorro por terceiro). **Copie o texto do parágrafo único da fonte oficial** (Planalto/legislação vigente) antes de reproduzi-lo na peça.
- **Art. 135, CP** — omissão de socorro comum (subsidiária): distingue-se do art. 304 pelo **contexto do acidente automobilístico** e pela **condição de condutor**. O art. 304 é **especial**; havendo acidente de trânsito e condutor, aplica-se o CTB (princípio da especialidade).
- **Art. 302, §1º, I, CTB** — homicídio culposo na direção com **causa de aumento** quando o agente **deixa de prestar socorro** à vítima (majorante, não crime autônomo).
- **Art. 303, §1º, CTB** — lesão corporal culposa na direção, com a **mesma causa de aumento** por omissão de socorro.
- **Art. 305, CTB** — **afastar-se o condutor do local do acidente** para fugir à responsabilidade penal ou civil (crime **distinto** — fugir ≠ deixar de socorrer).
- **Art. 13, §2º, CP** — dever de agir do garantidor (fundamento dogmático do crime omissivo próprio de trânsito).

## O tipo penal — anatomia para a defesa

O art. 304 é **omissivo próprio**: consuma-se com a **simples omissão** do dever de socorrer, independentemente de resultado. Isso significa que a defesa ataca os **elementos do tipo**, não o resultado. Decompor o tipo:

1. **Sujeito ativo:** só o **condutor do veículo** envolvido no acidente (crime próprio). Passageiro, pedestre ou terceiro não respondem por este tipo.
2. **Elemento temporal:** *"na ocasião do acidente"* — o dever nasce no momento e no contexto do sinistro. Fora dessa imediatidade, descaracteriza-se.
3. **Conduta:** deixar de prestar **imediato socorro**; ou, **não podendo** fazê-lo diretamente e **havendo justa causa**, deixar de **solicitar auxílio da autoridade pública** (a lei oferece uma alternativa — a defesa verifica se ela foi cumprida: chamou SAMU/polícia/bombeiros?).
4. **Elemento subjetivo:** **DOLO** — vontade livre e consciente de se omitir, ciente da situação de perigo e do dever. **Não há forma culposa.** Omissão por pânico, desconhecimento do dano à vítima, ou impossibilidade não é dolo.
5. **Cláusula de exclusão (parte final do próprio tipo):** *"não podendo fazê-lo diretamente"* e a **justa causa** — o tipo já embute causas de não exigibilidade da conduta direta (impossibilidade material, risco pessoal). É defesa **dentro do tipo**, não excludente externa.

## Roteiro de análise e defesa — teses por eixo

Percorra os eixos na ordem; cada um pode, sozinho, levar à absolvição ou ao trancamento.

### Eixo 1 — Bis in idem: o acusado deu causa ao acidente? (a tese mais forte)

- **Pergunta-chave:** o acusado **concorreu com culpa** para o acidente que vitimou a pessoa?
- **Se SIM** → a omissão de socorro é **causa de aumento** do art. 302, §1º (homicídio culposo) ou do art. 303, §1º (lesão culposa), e **NÃO** pode também configurar o crime autônomo do art. 304. Denunciar/condenar pelas duas figuras é **bis in idem** vedado.
- **Consequência processual:** se a denúncia imputa, sobre o **mesmo fato**, o crime culposo majorado pela omissão **e** o art. 304 autônomo, cabe **rejeição parcial / trancamento** quanto ao 304, ou pedido de **emendatio/mutatio** para afastar a dupla punição.
- **Tese central:** *"O art. 304 do CTB pressupõe condutor que NÃO deu causa ao acidente; tendo o acusado concorrido culposamente para o evento, a omissão de socorro é majorante (art. 302, §1º / 303, §1º), sob pena de bis in idem."*
- **Ancoragem da tese (sem número de memória):** esse é o entendimento consolidado na doutrina e na jurisprudência do STJ sobre a **relação entre o art. 304 e as majorantes de omissão de socorro dos crimes culposos** — o art. 304 não incide sobre o condutor que deu causa ao acidente. **Não é objeto de nenhuma súmula com número certo aqui;** para citar um julgado ou súmula concreto, **confirme o número e a ementa** via `verificacao-citacoes` / `jurisprudencia-stj-stf`. Sustente pela **tese + dispositivos** (art. 304 c/c arts. 302, §1º, e 303, §1º), não por um número de acórdão evocado de memória.

### Eixo 2 — Atipicidade por ausência de dolo

- O tipo é **exclusivamente doloso**. A defesa demonstra que **faltou a vontade consciente de se omitir**:
  - **Desconhecimento do dano:** o condutor não percebeu que houve vítima ferida (colisão de pequeno vulto, ausência de sinais de lesão).
  - **Estado de choque / pânico pós-trauma:** turbação psíquica que afasta a consciência plena do dever no momento.
  - **Erro de tipo (art. 20, CP):** representação equivocada da situação fática (ex.: acreditou que a vítima estava ilesa ou já assistida).
- **Tese:** ausente o dolo, **não há crime** — atipicidade subjetiva; não se pune omissão culposa de socorro.

### Eixo 3 — Vítima já socorrida por terceiro / socorro já prestado

- Fato: a vítima **já estava sendo socorrida** por terceiros (populares, outro motorista, SAMU já acionado por outrem) quando o acusado deixou o local.
- **Atenção à controvérsia:** o **parágrafo único do art. 304** prevê que a pena incide **ainda que a omissão seja suprida por terceiros** (confira a redação oficial). Portanto, a tese pura de "outro já socorreu" **não é automática** — há corrente que mantém a tipicidade. **A defesa a combina com ausência de dolo/inexigibilidade:** se o socorro **efetivo e suficiente** já estava em curso e o acusado disso tinha ciência, discute-se a **ausência de lesão ao bem jurídico** e a **inexigibilidade** de conduta redundante.
- **Tese (com cautela):** *"Prestado socorro tempestivo e suficiente por terceiro, com ciência do acusado, a intervenção adicional era inexigível e a omissão não lesou o bem jurídico tutelado"* — sustentar **junto** com atipicidade subjetiva, ciente do parágrafo único.

### Eixo 4 — Impossibilidade material e risco pessoal (parte final do tipo)

- A **própria redação** admite: *"não podendo fazê-lo diretamente"*. São defesas **dentro do tipo**:
  - **Impossibilidade física:** o condutor também se feriu gravemente, ficou preso nas ferragens, desmaiou.
  - **Risco pessoal concreto:** ambiente hostil (risco de linchamento, via de alta periculosidade, incêndio do veículo), em que o socorro direto exporia o agente a perigo — **desde que** tenha **solicitado auxílio da autoridade** (a alternativa legal).
- **Verificar sempre:** o acusado **acionou** SAMU/polícia/bombeiros? O cumprimento da **conduta alternativa** (pedir auxílio) **afasta a tipicidade**, ainda que não tenha socorrido com as próprias mãos.
- **Tese:** *"Impossibilitado de socorro direto por [motivo], o acusado solicitou auxílio da autoridade pública (art. 304, parte final), cumprindo o dever legal na forma alternativa — conduta atípica."*

### Eixo 5 — Distinção do art. 305 (fuga do local) — não confundir

- **Fugir do local (art. 305)** ≠ **deixar de socorrer (art. 304)**: são condutas e bens jurídicos distintos. É possível **fugir sem deixar de socorrer** (socorreu e depois se evadiu para escapar da responsabilidade) e **deixar de socorrer sem fugir** (ficou no local, mas não prestou socorro).
- **Erro acusatório comum:** imputar art. 304 quando o fato descrito é, na verdade, **fuga** (art. 305), ou **acumular** os dois sobre a mesma conduta única sem base fática distinta.
- **Tese:** exigir a **correta capitulação**; se o núcleo do fato é a evasão, o tipo é o 305 (cuja constitucionalidade, aliás, já foi discutida — ver Citation Gate), não o 304. Impede-se a punição dúplice da mesma conduta.

### Eixo 6 — Vítima com morte instantânea

- Corrente clássica: se a **morte foi instantânea**, o socorro seria **inútil** e faltaria o objeto de proteção (não há vida a preservar).
- **Contraponto legal:** o **parágrafo único do art. 304** prevê que a pena incide **mesmo quando a vítima tem morte instantânea** (confira a redação oficial). Logo, **a tese de morte instantânea NÃO é liberação automática** — a jurisprudência diverge sobre a leitura desse parágrafo (perigo abstrato × ausência de bem jurídico).
- **Como sustentar:** condicionar à **prova pericial** de morte instantânea **e** combinar com **ausência de dolo** (o condutor não tinha como saber, no momento, se a vítima vivia — o dever de socorro persiste na dúvida, mas o **dolo de omissão** exige consciência da situação). **Não prometer resultado**: sinalizar a controvérsia e o Citation Gate.

## Teses e contra-teses (defesa × acusação)

| Tese de defesa | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Bis in idem — acusado deu causa ao acidente | Omissão é majorante (302 §1º / 303 §1º), não crime autônomo | Se realmente não concorreu com culpa, o 304 é autônomo e válido |
| Atipicidade por ausência de dolo | Crime só doloso; erro de tipo / choque | Dolo eventual: assumiu o risco de omitir-se ao evadir-se |
| Socorro já prestado por terceiro | Ausência de lesão ao bem jurídico + inexigibilidade | Parágrafo único: pena incide "ainda que suprida por terceiros" |
| Impossibilidade/risco pessoal | Parte final do tipo; solicitou autoridade | Não comprovou o risco nem o acionamento da autoridade |
| Morte instantânea → socorro inútil | Ausência do objeto de proteção | Parágrafo único: pena incide "mesmo com morte instantânea" |
| Fato é fuga (305), não omissão (304) | Condutas e bens jurídicos distintos | Houve tanto a fuga quanto a omissão, sobre suportes fáticos distintos |

> **Diretriz estratégica:** a tese **mais robusta e menos controvertida** é a do **Eixo 1 (bis in idem)** quando o acusado concorreu para o acidente, e a do **Eixo 4 (conduta alternativa cumprida)** quando ele acionou a autoridade. As teses dos Eixos 3 e 6 colidem com o **parágrafo único** do art. 304 e **nunca** devem ser sustentadas isoladamente — sempre acompanhadas de atipicidade subjetiva (dolo).

## Súmulas, precedentes e temas (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei podem ser citados com certeza (conferida a vigência); **qualquer número específico de súmula, HC, REsp, RE, informativo ou tema** deve ser **confirmado** via `verificacao-citacoes` / `jurisprudencia-stj-stf` **antes de ir para a peça**. Prefira ensinar a **tese e o dispositivo** a arriscar um número de súmula ou acórdão. **Nunca vincule um número de súmula a este tipo penal de memória** — foi exatamente esse o erro que o gate existe para barrar.

- **Bis in idem entre o art. 304 e a majorante de omissão de socorro (Eixo 1):** a tese de que **o art. 304 não incide sobre o condutor que deu causa ao acidente** (porque a omissão, aí, é majorante dos arts. 302, §1º, e 303, §1º) é **entendimento real** da doutrina e da jurisprudência do STJ. **Não decorre de nenhuma súmula específica** — sustente-a pela **tese + dispositivos** (art. 304 c/c 302, §1º / 303, §1º). Se quiser ancorar em um julgado ou enunciado, **busque e confirme o número e a ementa** no gate. [NAO VERIFICADO — nenhum número de súmula/acórdão deve ser afirmado sem passar pelo `verificacao-citacoes`]
- **Constitucionalidade do art. 305 (fuga):** houve **debate sobre a constitucionalidade** da tipificação da fuga do local (autoincriminação × nemo tenetur se detegere), com pronunciamento do STF em repercussão geral. **Não citar número de tema/RE de memória** — [NAO VERIFICADO — conferir tema de repercussão geral e resultado via `jurisprudencia-stj-stf`].
- **Distinção 304 CTB × 135 CP:** princípio da **especialidade** — jurisprudência pacífica de que, havendo condutor e acidente de trânsito, aplica-se o CTB. Tese doutrinária e legal segura (art. 12 do CP + especialidade); **não** depende de acórdão específico.
- **Divergência sobre morte instantânea e socorro suprido por terceiro:** há **posições divergentes** nos tribunais sobre a leitura do parágrafo único (crime de perigo abstrato × exigência de bem jurídico tutelável). **Antes de afirmar a posição dominante, conferir o estado atual da jurisprudência** — [NAO VERIFICADO].

## Estrutura da peça de defesa (adaptar ao momento processual)

A tese cabe em **diferentes peças**, conforme a fase — identifique a peça correta antes de redigir:

1. **Resposta à acusação (art. 396-A, CPP)** — arguir atipicidade (ausência de dolo, bis in idem), preliminares e requerer **absolvição sumária** (art. 397, CPP) quando manifesta a atipicidade.
2. **Habeas corpus / trancamento da ação penal** — quando a atipicidade (ex.: bis in idem, imputação de 304 a quem deu causa ao acidente) é **flagrante e comprovável de plano**, sem revolvimento de prova.
3. **Alegações finais (art. 403 / memoriais)** — consolidar a prova produzida em favor da atipicidade subjetiva e da inexigibilidade.
4. **Apelação (art. 593, CPP)** — em caso de condenação, atacar a subsunção (dolo, bis in idem, capitulação 304 × 305).

**Esqueleto argumentativo (para qualquer dessas peças):**

```
I — DOS FATOS
   Narrar o acidente, o contexto e a conduta concreta do condutor
   (percebeu a vítima? feriu-se? acionou socorro? terceiro já socorria?).

II — DO DIREITO
   a) Da natureza do art. 304 (omissivo próprio, DOLOSO, autônomo)
   b) [Eixo 1] Do bis in idem — o acusado concorreu para o acidente;
      a omissão é majorante (art. 302, §1º / 303, §1º), não crime autônomo
      (art. 304 não incide sobre quem deu causa ao acidente — sustentar pela
      tese + dispositivos; CONFERIR no gate qualquer súmula/acórdão a citar).
   c) [Eixo 2] Da atipicidade subjetiva — ausência de dolo / erro de tipo
      (art. 20, CP); estado de choque; desconhecimento do dano.
   d) [Eixo 4] Da impossibilidade / risco pessoal e do cumprimento da
      conduta alternativa (art. 304, parte final) — acionamento da autoridade.
   e) [Eixo 5] Da correta capitulação — distinção do art. 305 (fuga).

III — DO PEDIDO
   Absolvição sumária (art. 397, CPP) / trancamento (HC) / absolvição
   (art. 386, III — atipicidade) / desclassificação ou afastamento do 304.
```

> **Campos a confirmar antes de protocolar:** peça correta para a fase; capitulação da denúncia (304 autônomo? 302/303 majorado? 305?); prova do acionamento da autoridade; laudo pericial (morte instantânea, dinâmica do acidente, culpa do condutor).

## Erros comuns e checklist

**Anti-padrões (evitar):**

- Sustentar "outro já socorreu" ou "morte instantânea" **isoladamente**, ignorando o **parágrafo único** do art. 304 (que prevê a pena nessas hipóteses) — sempre combinar com **ausência de dolo/inexigibilidade**.
- Confundir **art. 304 (deixar de socorrer)** com **art. 305 (fugir)** — capitulações e bens jurídicos distintos.
- Aceitar a **dupla punição**: art. 304 autônomo **+** majorante de omissão do 302/303 sobre o **mesmo fato** (bis in idem).
- Tratar o crime como se admitisse **forma culposa** — não admite; ele é **exclusivamente doloso**.
- Esquecer a **conduta alternativa legal** (solicitar auxílio da autoridade) — o acionamento afasta a tipicidade.
- **Vincular um número de súmula ao art. 304 ou à tese de bis in idem** — não há súmula com número certo aqui; citar qualquer súmula/HC/tema **de memória** é o erro exato que o `verificacao-citacoes` existe para barrar.
- Ignorar a **vigência** — penas e §§ dos arts. 302/305 mudaram (Leis 13.281/2016 e 14.071/2020).

**Checklist antes de peticionar:**

- [ ] O acusado **deu causa** ao acidente? (Se sim → bis in idem; a omissão é majorante, não o art. 304.)
- [ ] O tipo imputado é o correto (304 × 305 × majorante do 302/303)?
- [ ] Há prova do **dolo** de omissão, ou é sustentável a **atipicidade subjetiva** (erro de tipo, choque, desconhecimento)?
- [ ] O condutor **acionou a autoridade** (SAMU/polícia/bombeiros)? Há registro?
- [ ] Havia **impossibilidade material** ou **risco pessoal** concreto (parte final do tipo)?
- [ ] A tese de "socorro por terceiro" / "morte instantânea" está **combinada** com atipicidade subjetiva (não isolada)?
- [ ] A **peça** é a adequada à fase (resposta à acusação / HC / memoriais / apelação)?
- [ ] **Vigência** dos arts. 302, 303, 304 e 305 do CTB conferida (Leis 13.281/2016 e 14.071/2020)?
- [ ] Redação do **parágrafo único do art. 304** copiada da **fonte oficial** (não parafraseada de memória)?
- [ ] Todo **número de súmula/precedente/tema** (bis in idem; constitucionalidade do 305) **verificado** via `verificacao-citacoes` / `jurisprudencia-stj-stf` — e nenhum número afirmado sem confirmação?
- [ ] Passou pela **revisão humana** do advogado responsável antes do protocolo?

## Lembretes finais

- **Primeira pergunta:** o acusado deu causa ao acidente? Se sim, o art. 304 **cede** à majorante — bis in idem (Eixo 1). Sustente pela **tese + dispositivos** (art. 304 c/c 302, §1º / 303, §1º); não invoque número de súmula de memória.
- **Crime DOLOSO e omissivo próprio** — não há socorro culposo; ataque o dolo.
- **Conduta alternativa** (pedir auxílio à autoridade) **afasta** a tipicidade — verifique sempre.
- **Parágrafo único** do art. 304 é a armadilha: neutraliza "terceiro socorreu" e "morte instantânea" **isolados** — combine com dolo/inexigibilidade (e copie a redação da fonte oficial).
- **304 ≠ 305** (deixar de socorrer ≠ fugir) — exija a capitulação correta.
- **Vigência + Citation Gate** antes de qualquer citação — omitir vence inventar; **nunca** ligue um número de súmula a este crime sem passar pelo gate.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela tese, pela capitulação e pelo protocolo é sempre do **advogado** (EAOAB; CED). Nenhuma peça é protocolada sem revisão final do profissional responsável.
- **Skill do polo de DEFESA.** Voltada ao patrocínio do condutor acusado. Caso a instituição atue no **polo acusatório** (Ministério Público / assistente de acusação), o chefe-roteador deve **conferir o polo** no `company.md` e reorientar o enquadramento — aqui o foco é a defesa por atipicidade e por vedação de bis in idem.
- **Citation Gate:** toda súmula, tese ou acórdão passa **obrigatoriamente** por `verificacao-citacoes` (ou `jurisprudencia-stj-stf`) antes do uso — há sanções reais por jurisprudência inventada por IA. Marcações **[NAO VERIFICADO]** neste material sinalizam pontos a confirmar. **Não existe súmula com número específico atribuível ao art. 304 nesta skill**; qualquer número (súmula, HC, tema, REsp) só entra na peça depois de confirmado no gate.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
