---
name: jm-defesa-crimes-propriamente-militares-servico-sentinela
description: >-
  Use ao defender militar acusado de crime PROPRIAMENTE militar de serviço/sentinela no CPM
  (Decreto-Lei 1.001/69) — embriaguez em serviço (art. 202), dormir em serviço (art. 203), abandono
  de posto (art. 195), crimes da sentinela (arts. 196-199 e agravantes do art. 203/204), extravio,
  furto, dano ou apropriação de material bélico (arts. 240, 259-266), receptação militar (art. 254),
  uso indevido de uniforme/insígnia (art… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, defesa, crimes-militares]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-crimes-propriamente-militares-servico-sentinela"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-crimes-propriamente-militares-servico-sentinela", "defesa crimes", "servico sentinela"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes Propriamente Militares de Serviço e Sentinela (CPM — DL 1.001/69)

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

Esta skill orienta a **defesa técnica** de militar acusado de **crimes propriamente militares** ligados ao **serviço** e à **função de sentinela/vigia**, que compõem o catálogo residual do Código Penal Militar não coberto pelas skills de deserção, insubmissão, insubordinação e violência contra superior. Abrange, em especial: **embriaguez em serviço** (art. 202), **dormir em serviço** (art. 203), **abandono de posto** (art. 195), **crimes do vigia/sentinela** (arts. 196-199 e agravantes correlatas), **extravio, furto, dano e apropriação de material bélico ou de armamento** (arts. 240, 259-266 e correlatos), **receptação militar** (art. 254) e **uso indevido de uniforme/insígnia** (art. 172).

> **Lição central:** o primeiro trabalho da defesa nesses tipos não é o mérito, é a **moldura**. Confirme (1) que o fato é mesmo **crime propriamente militar** e não conduta administrativa/transgressão disciplinar, (2) a **competência** da Justiça Militar (art. 124/125 CF + art. 9º CPM) e (3) se o elemento normativo do tipo — **"em serviço"**, **"em ocasião de serviço"**, **"posto"**, **"material bélico"** — está concretamente comprovado. Muitos casos morrem na tipicidade e na moldura, antes do mérito.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos artigos do **CPM (DL 1.001/69)** e do **CPPM (DL 1.002/69)**, além da **EC 45/2004** e da **Lei 13.491/2017** (que ampliou o conceito de crime militar impróprio) e da **Lei 13.774/2018** (organização da JMU). Confirme súmulas, teses e overruling do STF/STM/STJ pela skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. A base normativa desta skill é o CPM/CPPM originais com as alterações legislativas correntes — sempre reconfira o texto atual na fonte oficial.

## Moldura antes do mérito — três filtros de entrada

1. **É crime militar? (art. 9º CPM)** — o fato só é crime militar se se enquadrar em uma das hipóteses do art. 9º (crime propriamente militar praticado por militar; crime militar em situação de atividade, em lugar sujeito à administração militar, contra o patrimônio sob administração militar etc.). Crimes **propriamente militares** (só o militar pode praticar, previstos apenas no CPM) têm regime próprio; **crimes impróprios** (também previstos na lei comum) exigem o elemento de conexão do art. 9º, II.
2. **Transgressão disciplinar × crime.** Boa parte das condutas de serviço tem correspondente **administrativo-disciplinar** (RDE/RDM). A defesa deve verificar se o fato não é **mera transgressão** — o que afasta a persecução penal (princípio da subsidiariedade/última ratio) — e alegar **bis in idem** vedado quando cabível a distinção de esferas.
3. **Competência.** Justiça Militar da **União** (crimes militares federais — Exército, Marinha, Aeronáutica) × Justiça Militar **Estadual** (militares dos Estados — PM e Bombeiro Militar; art. 125, §4º e §5º CF). Confirme o juízo natural; incompetência é nulidade.

## Base legal (conferir redação vigente)

- **CF, arts. 124 e 125, §§3º a 5º** — competência da Justiça Militar da União e dos Estados.
- **CPM (DL 1.001/69)** — Parte Geral (arts. 1º a 135) e os tipos específicos:
  - **Art. 9º** — definição de crime militar em tempo de paz (a moldura de tudo).
  - **Art. 172** — uso indevido de uniforme, distintivo ou insígnia militar.
  - **Art. 195** — abandono de posto e de outros lugares de serviço.
  - **Arts. 196 a 199** — descumprimento de missão; retenção indevida; omissão de eficiência da força; omissão de providências para evitar danos.
  - **Art. 202** — embriaguez em serviço.
  - **Art. 203** — dormir em serviço (agravado se sentinela/vigia).
  - **Art. 240** — furto (com aplicação ao patrimônio sob administração militar).
  - **Art. 248-249** — apropriação indébita e correlatos, quando aplicável.
  - **Art. 254** — receptação (dolosa e culposa) no CPM.
  - **Arts. 259 a 266** — dano, inclusive **dano em material ou aparelhamento de guerra** e **em navio, aeronave ou engenho de guerra motomecanizado**.
  - **Arts. 265 e correlatos** — extravio, sonegação ou inutilização de material bélico/armamento e munição.
- **CPPM (DL 1.002/69)** — rito, prisão, IPM (inquérito policial militar), citação, instrução e nulidades.
- **Lei 13.491/2017** — ampliou o rol de crimes militares impróprios (crimes da legislação penal comum praticados nas hipóteses do art. 9º) — atenção à repercussão em competência.

> Observação: a numeração exata de alguns tipos de material bélico/armamento (arts. 259-266) e o alcance de agravantes variam conforme a conduta — **confira sempre o artigo correto e a redação atual** antes de subsumir; não afirme número de artigo de memória.

## Roteiro de defesa por tipo penal

### 1) Embriaguez em serviço (art. 202 CPM)

- **Elemento nuclear:** estar **embriagado** *durante o serviço* (ou apresentar-se para ele embriagado). A embriaguez fora do serviço não é este crime.
- **Teses típicas:**
  - **Prova do estado de embriaguez.** Exigir prova técnica (etilômetro/exame) ou testemunhal robusta; impugnar laudo sem cadeia de custódia (integrar com `cadeia-custodia`) ou constatação meramente subjetiva do superior.
  - **Nexo com o serviço.** Se o militar não estava efetivamente **em serviço** (folga, dispensa, trânsito), atacar a elementar "em serviço".
  - **Embriaguez patológica/involuntária** (art. 49 CPM — isenção/redução por embriaguez completa proveniente de caso fortuito ou força maior) — sustentar inimputabilidade/semi-imputabilidade quando cabível.
  - **Insignificância/mínima ofensividade** ao bem jurídico (regularidade e disciplina do serviço) quando não houve risco concreto — tese de aplicação **excepcional** e controversa na JM.
- **Contra-tese (acusação):** basta o estado de embriaguez em serviço, crime de perigo abstrato/dever funcional; prescinde de dano concreto.

### 2) Dormir em serviço (art. 203 CPM)

- **Elemento nuclear:** **dormir**, o militar, quando **em serviço como oficial de quarto ou em função equivalente**, ou **dormir a sentinela/vigia** no posto — a condição de **sentinela** costuma **agravar**.
- **Teses típicas:**
  - **Sono × cochilo × desatenção.** Distinguir o efetivo estado de sono (com perda da consciência vigilante) de mera desatenção momentânea — atipicidade por ausência da elementar.
  - **Ausência de dolo / condição fisiológica.** Discutir exaustão imposta por escala irregular, dobra de serviço, privação de sono determinada pela própria administração — pode afastar reprovabilidade ou configurar **inexigibilidade de conduta diversa**.
  - **Qualidade de sentinela.** Se o militar **não estava formalmente designado** como sentinela/vigia no momento, afastar a **agravação** própria da função.
- **Contra-tese (acusação):** o dever de vigilância é absoluto na função de guarda; o resultado (dormir no posto) já lesa a segurança militar.

### 3) Abandono de posto (art. 195 CPM)

- **Elemento nuclear:** **abandonar o posto** ou lugar de serviço que devia manter, ou **afastar-se** do serviço para o qual foi designado.
- **Teses típicas:**
  - **Definição de "posto" e de "abandono".** Distância mínima, tempo de afastamento, necessidade fisiológica momentânea, substituição informal — nem todo afastamento configura "abandono".
  - **Estado de necessidade / dever de socorro** (arts. 43 e ss. CPM) — afastamento para atender emergência.
  - **Ordem superior / rendição.** Se houve autorização, rendição ou determinação superior, afasta-se a tipicidade.
- **Contra-tese (acusação):** o crime é de perigo; o abandono, ainda que breve, compromete a segurança do local.

### 4) Crimes do vigia/sentinela e omissões de serviço (arts. 196 a 199 CPM)

- **Núcleos variados:** descumprir missão; reter indevidamente pessoa/coisa; omitir providência para evitar dano; omitir eficiência da força. Sempre **checar a subsunção exata** — são tipos de conteúdo distinto, não intercambiáveis.
- **Teses típicas:**
  - **Erro de subsunção.** Denúncia que confunde os tipos (ex.: descrever abandono como omissão de providência) — pedir absolvição/rejeição por atipicidade da conduta narrada frente ao artigo capitulado.
  - **Ausência de resultado ou de dever concreto.** Nos tipos omissivos, exigir a demonstração do **dever específico** de agir e da **possibilidade** de agir.
  - **Erro de proibição/mandamento** (art. 35-36 CPM) — o militar desconhecia o alcance da ordem/missão.
- **Contra-tese (acusação):** o serviço militar impõe deveres funcionais estritos; a omissão do garante configura o crime.

### 5) Extravio, furto, dano e apropriação de material bélico/armamento (arts. 240, 259-266 e correlatos)

- **Elementos nucleares:** a **natureza militar/bélica** do material (armamento, munição, engenho de guerra, material da Fazenda Nacional sob administração militar) e a conduta (extraviar, furtar, danificar, apropriar-se, receptar).
- **Teses típicas:**
  - **Qualidade do objeto.** Impugnar a classificação do bem como "material bélico" ou "de guerra" quando se trata de material comum administrativo — reclassificação para tipo mais brando ou atipicidade militar.
  - **Extravio culposo × doloso.** Diferenciar mera perda/negligência de apropriação dolosa — pedir desclassificação para a modalidade culposa (pena menor) ou atipicidade quando ausente o dever de custódia direto.
  - **Princípio da insignificância** — tese **restrita e controversa** na JM; o STF já admitiu em hipóteses excepcionais, mas o STM tende a rejeitar em matéria de armamento/munição pela relevância do bem jurídico (disciplina, hierarquia, segurança). Marque qualquer precedente como **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`.
  - **Cadeia de custódia do bem apreendido** e da prova pericial (integrar `cadeia-custodia`).
- **Contra-tese (acusação):** material bélico é bem jurídico de alta relevância; a defesa da insignificância não prospera em armamento/munição.

### 6) Receptação militar (art. 254 CPM)

- **Elemento nuclear:** adquirir, receber ou ocultar coisa proveniente de crime, no âmbito militar; há modalidade **culposa**.
- **Teses típicas:**
  - **Ausência de dolo / desconhecimento da origem** — atipicidade da modalidade dolosa; se muito, culposa.
  - **Prova da origem criminosa** do bem — sem crime antecedente comprovado, não há receptação.

### 7) Uso indevido de uniforme, distintivo ou insígnia (art. 172 CPM)

- **Elemento nuclear:** usar, sem direito, uniforme/distintivo/insígnia militar, ou usar indevidamente os que tem direito.
- **Teses típicas:**
  - **Atipicidade por finalidade lícita/inofensiva** ou ausência de dolo de ludibriar.
  - **Insignificância** e ausência de lesão à fé pública militar em casos periféricos.

## Teses transversais (valem para todos os tipos)

- **Atipicidade formal e material** — a conduta narrada não preenche a elementar ("em serviço", "posto", "sentinela", "material bélico") ou não ofende o bem jurídico.
- **Princípio da insignificância na JM** — admitido em caráter **excepcional** pelo STF; recepção **restritiva** no STM, sobretudo em armamento/munição e em condutas que atingem hierarquia/disciplina. Sustente com parcimônia e sempre subsidiariamente. **[Precedentes específicos: NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`.]**
- **Transgressão disciplinar, não crime** — a conduta é falta administrativa (RDE/RDM), não crime militar; requer arquivamento/absolvição por atipicidade penal.
- **Inexigibilidade de conduta diversa / coação / estado de necessidade** (arts. 38-43 CPM) — escalas abusivas, privação de sono, ordens contraditórias.
- **Erro de tipo e erro de proibição** (arts. 32-36 CPM) — desconhecimento do dever ou falsa percepção da situação.
- **Excludentes e causas de diminuição da Parte Geral do CPM** — legítima defesa, estrito cumprimento do dever legal, obediência hierárquica (art. 38 CPM), coação irresistível.
- **Nulidades processuais do CPPM** — vícios no **IPM** (inquérito policial militar), cerceamento de defesa, incompetência de juízo, ausência de defesa técnica no Conselho de Justiça, quebra de cadeia de custódia.
- **Dosimetria e substituição** — atenuantes do art. 72 CPM; **suspensão condicional da pena (sursis) do CPM (arts. 84 e ss.)**; regime; efeitos secundários. **Atenção:** no CPM **não** se aplica automaticamente a transação/suspensão da Lei 9.099/95 aos crimes militares (há vedação legal e jurisprudencial) — **não** prometa benefícios da Lei dos Juizados sem conferir; o rito é o do CPPM.
- **Perda de posto/patente e do oficialato** — como **efeito** possível da condenação (representação e julgamento próprios); a defesa deve monitorar e combater a imposição automática, exigindo o procedimento específico (arts. 142, §3º, VI/VII CF; e procedimento no STM/TJM).

## Súmulas e precedentes sob o Citation Gate

> **NÃO invente jurisprudência.** Cite dispositivos de lei com certeza; para **qualquer** número de HC/RE/REsp, informativo, tema ou súmula específica sem certeza absoluta, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`. Prefira ensinar a **tese e o dispositivo** a arriscar o número do acórdão.

- **Insignificância na Justiça Militar** — há orientação do **STF** admitindo excepcionalmente e do **STM** com forte resistência em armamento/munição. **[Números de julgados e súmulas: NÃO VERIFICADO — conferir.]**
- **Competência e crime militar (art. 9º CPM; Lei 13.491/2017)** — há teses fixadas sobre a ampliação do conceito de crime militar impróprio; **[verificar tema/precedente antes de citar].**
- **Súmula(s) do STM/STF sobre serviço/sentinela** — havendo enunciado aplicável, só citar após verificação. **[NÃO VERIFICADO.]**
- **Aplicabilidade da Lei 9.099/95 aos crimes militares** — orientação consolidada de **inaplicabilidade** aos crimes militares (há dispositivo legal expresso vedando); confirmar redação e súmula/tese correspondente antes de afirmar. **[Conferir o dispositivo e o enunciado exatos.]**

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Tratar o fato como crime militar sem checar o **art. 9º CPM** e a **competência** (JMU × JME).
- Confundir **transgressão disciplinar** com crime — deixar de arguir a atipicidade penal.
- Prometer benefícios da **Lei 9.099/95** (transação/suspensão) em crime militar — em regra **vedado**.
- Alegar **insignificância** de forma genérica em armamento/munição, onde o STM resiste.
- Aceitar laudo de embriaguez ou perícia de material sem checar **cadeia de custódia**.
- Ignorar a **modalidade culposa** (extravio, receptação) quando a desclassificação reduz a pena.
- Não distinguir os tipos dos **arts. 195-199** entre si (abandono × omissão × descumprimento) — cada um tem elementar própria.
- Deixar passar a **perda de posto/patente** como efeito automático, sem exigir o procedimento próprio.
- Citar número de julgado/súmula de memória sem passar pelo Citation Gate.

**Checklist da defesa:**
- [ ] Fato enquadrado no **art. 9º CPM**? Competência (JMU/JME) conferida?
- [ ] Conduta é **crime** ou mera **transgressão disciplinar** (RDE/RDM)?
- [ ] Elementar do tipo comprovada (**"em serviço"**, **"posto"**, **"sentinela"**, **"material bélico"**)?
- [ ] Cabível **desclassificação** para modalidade culposa (extravio/receptação) ou tipo mais brando?
- [ ] **Insignificância** aplicável e sustentável neste caso concreto (excepcional na JM)?
- [ ] Excludentes/causas de diminuição da Parte Geral do CPM examinadas (arts. 32-49, 72)?
- [ ] **Cadeia de custódia** da prova (embriaguez, material apreendido) íntegra?
- [ ] Nulidades do **IPM/CPPM** verificadas (defesa técnica no Conselho, cerceamento, incompetência)?
- [ ] **Sursis do CPM** (arts. 84 e ss.) e dosimetria (art. 72) considerados; benefícios da Lei 9.099 **não** prometidos indevidamente?
- [ ] **Perda de posto/patente** combatida por procedimento próprio, se ameaçada?
- [ ] Toda súmula/precedente/tese verificado via `jurisprudencia-stj-stf` antes de citar?
- [ ] Revisão humana do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pelas teses e pela atuação é sempre do **advogado** (EAOAB/CED; Provimento 205/2021 da OAB). Não substitui o exame do caso concreto, dos autos do IPM/ação penal militar nem a leitura da legislação vigente.
- **Foco em defesa.** Esta skill é do **polo defensivo** (militar acusado). Se o pedido for do polo acusatório, o chefe-roteador deve conferir o polo e acionar a skill acusatória correspondente.
- **Citation Gate inegociável.** Nenhuma súmula, tema, informativo ou número de acórdão é citado de memória — tudo passa por `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** (há sanções por jurisprudência inventada por IA).
- **Verificação de vigência.** CPM, CPPM e as Leis 13.491/2017 e 13.774/2018, além das regras de competência (CF, arts. 124-125), devem ter a redação vigente conferida na fonte oficial antes da subsunção.

**Padrão de redação:** ao redigir a peça (resposta à acusação, alegações finais, apelação ao STM/TJM, HC), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
