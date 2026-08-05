---
name: jm-defesa-desercao
description: >-
  Use ao defender militar acusado de DESERÇÃO na Justiça Militar (arts. 187-194 CPM) — ausência do
  serviço/lugar por mais de oito dias (prazo de graça): contagem do prazo e termo de deserção,
  exigência de praça e de estabilidade, procedimento especial (art. 451 e ss. CPPM), prisão do
  desertor, teses de atipicidade (não decurso integral do prazo, força maior, erro), extinção da
  punibilidade pela reinclusão e nulidades… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, defesa, tipicidade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-defesa-desercao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-defesa-desercao", "defesa desercao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Deserção (arts. 187 a 194 do Código Penal Militar)

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

Esta skill orienta a **defesa técnica do militar acusado de deserção** perante a Justiça Militar (da União ou dos Estados). Deserção é a **ausência do militar, sem licença, do serviço ou do lugar em que deve permanecer, por mais de oito dias** (CPM, art. 187). É o crime militar mais frequente das auditorias — e tem **tipicidade e procedimento próprios**, sem equivalente no processo penal comum.

> **Lição central:** deserção **não se consuma no primeiro dia de ausência**. Ela exige o **decurso integral do "prazo de graça"** — oito dias contados a partir da falta. A defesa começa **contando o prazo dia a dia** e conferindo o **termo de deserção**: se o oitavo dia não se completou por inteiro, o fato é **atípico** como deserção (podendo, no máximo, configurar transgressão disciplinar ou ausência). Classifique **antes de tudo**: quem é o agente (oficial ou praça? estável ou não?), qual a modalidade (comum, art. 187; especial, art. 190; ou figuras equiparadas) e se o prazo se esgotou.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 187 a 194 do CPM (Decreto-Lei 1.001/1969) e dos arts. 451 a 465 do CPPM (Decreto-Lei 1.002/1969) antes de fundamentar. Confira também Súmulas do STM e a jurisprudência atual do **STM, STF e STJ** sobre deserção — em especial a exigência de **estabilidade/condição de praça** e a natureza da reinclusão — pela skill `jurisprudencia-stj-stf` (e, para o STM, pela pesquisa jurisprudencial do acervo). A redação base desta skill é a dos Decretos-Lei de 1969, com as alterações supervenientes; **não cite número de acórdão, informativo ou Súmula do STM de memória**.

## Foco e polo

Esta skill é de **DEFESA** (advocacia / Defensoria Pública da União ou estadual). O militar pode ser assistido por advogado constituído, defensor público ou defensor dativo/ad hoc designado pela auditoria. As contra-teses do Ministério Público Militar aparecem apenas para **antecipar** o embate — não converta esta skill em peça acusatória.

## Base legal

- **CPM, art. 187** — deserção (tipo básico): ausentar-se o militar, sem licença, da unidade em que serve, ou do lugar em que deve permanecer, por mais de **oito dias**. Pena: detenção, de seis meses a dois anos; se oficial, agravada (conferir a redação).
- **CPM, art. 188** — casos assimilados (deserção por não se apresentar ao término de licença/férias/trânsito; por deixar de se apresentar à autoridade competente etc.). Conferir cada inciso.
- **CPM, art. 189** — deserção com circunstâncias que **atenuam ou agravam** (ex.: apresentação voluntária dentro de certo prazo reduz a pena; concurso de agentes agrava).
- **CPM, art. 190** — **deserção especial** (ausência por ocasião de deslocamento/movimentação da unidade, embarque, manobra, guarnição em operação): consuma-se **de imediato** (não depende do prazo de graça), com regramento próprio.
- **CPM, arts. 191 a 194** — figuras correlatas (concerto para deserção; deserção de praça especial/aspirante; deserção de evadido/foragido; e outras). Conferir o dispositivo exato ao caso.
- **CPPM, arts. 451 a 465** — **procedimento especial da deserção**: lavratura do **termo de deserção** (que tem natureza de instrução provisória e vale como instauração), **exclusão/agregação** do desertor, prisão, apresentação/captura e o rito perante o Conselho.
- **CPM, art. 132** — prescrição da deserção só começa a correr quando o desertor **atinge a idade-limite** de permanência na reserva (ou é excluído), regra especial que afasta a contagem comum — **conferir a redação vigente**.
- **CF, art. 5º, LXI + art. 5º, §2º; CPPM, art. 452 e ss.** — a **prisão do desertor** independe de flagrante ou ordem judicial escrita comum (é medida administrativo-processual militar), mas submete-se a controle de legalidade.

## Anatomia do tipo — os quatro elementos que a defesa ataca

1. **Condição de militar (sujeito ativo próprio).** Deserção é **crime militar próprio**: só o militar o pratica. Verificar a **situação funcional** na data dos fatos (na ativa? já excluído/licenciado? incorporado regularmente?). Militar já **desligado** ou nunca validamente incorporado não comete deserção.
2. **Ausência sem licença.** A ausência deve ser **injustificada** — sem licença, dispensa, ordem ou causa legítima. Licença, missão, internação hospitalar, prisão por outra causa, ordem superior de afastamento **descaracterizam** a ausência voluntária.
3. **Decurso do prazo de graça (mais de oito dias).** O núcleo temporal. Contam-se **oito dias completos** a partir da falta; a deserção só se consuma **no oitavo dia** (a contagem exclui/inclui conforme a técnica — **conferir**). Antes disso: ausência/transgressão disciplinar, não crime.
4. **Dolo (vontade de ausentar-se do serviço).** Exige-se a **vontade livre e consciente** de romper o vínculo de presença. Ausência por **força maior**, **erro**, **doença incapacitante** ou **impossibilidade material** de retorno afasta o dolo.

## O "prazo de graça" e o termo de deserção — o coração da defesa

> **Prazo de graça (art. 187, CPM).** É o período de **oito dias** que a lei concede antes de a ausência virar crime. Consumação = **decurso integral** do prazo. A defesa **reconta o prazo** a partir da data e hora exatas da falta constante da documentação militar (parte de ausência, alteração, boletim), e confronta com a data lançada no **termo de deserção**.

> **Termo de deserção (CPPM, arts. 451-456).** Findo o prazo, a autoridade militar lavra o **termo de deserção**, que funciona como **instrução provisória** e **condição de procedibilidade/instauração** do processo, promovendo a **exclusão** (praça sem estabilidade) ou **agregação** (oficial e praça estável) do desertor. A defesa fiscaliza: (a) se o prazo foi corretamente contado; (b) se o termo foi lavrado por autoridade competente e com os requisitos legais; (c) se houve a devida **exclusão/agregação**; (d) a data que fixa o marco da consumação e da prescrição especial (art. 132).

**Regra prática de contagem (didática — sempre conferir a técnica do juízo):**
```
Falta constatada:            dia D (data/hora do não comparecimento ao serviço)
Prazo de graça:              8 dias
Consumação (deserção):       ao término do 8º dia — antes disso, NÃO há crime
Termo de deserção:           lavrado a partir da consumação
```
> **Não é cálculo de pena ou de prescrição comum.** A contagem do prazo de graça é jurídica e depende dos documentos militares e da data/hora exatas. **Para a prescrição da deserção (art. 132, CPM) e eventual dosimetria**, descreva o método e aponte a `calculadora-prescricao` / `calculadora-dosimetria`; a prescrição da deserção tem **termo inicial especial** (idade-limite/exclusão) e **[calculadora a implementar com testes]** para esse regime próprio, se necessário.

## A grande exigência jurisprudencial — praça, estabilidade e "condição de militar"

Há entendimento consolidado no **STM e no STF** de que, para o processo por deserção prosseguir e para a condenação, o réu deve **ostentar a condição de militar** (estar reincluído/na ativa) — daí a exigência, na praxe, da **reinclusão** ou nova incorporação do desertor para que responda ao processo, sobretudo quanto à praça **sem estabilidade**, que é **excluída** pelo termo de deserção.

- **Tese defensiva (relevante):** se o réu **não foi reincluído** / **não readquiriu a condição de militar**, falta **condição de procedibilidade/prosseguibilidade**, impondo-se a **suspensão** ou o **arquivamento**, conforme o caso. Confirmar o estágio processual e a exigência concreta no tribunal de atuação.
- **[NÃO VERIFICADO]** A existência de Súmula do STM sobre a exigência de reinclusão/condição de militar e os precedentes do STF (HC) que a fundamentam devem ser **conferidos** via `jurisprudencia-stj-stf` (e pesquisa do STM) — **não cite número de HC, Súmula ou informativo de memória**.

> **Distinção oficial × praça.** A praça **sem estabilidade** é **excluída** do serviço ativo pelo termo de deserção; o **oficial** e a praça **estável** são **agregados** (mantêm o vínculo, afastados temporariamente). Isso muda o regime de prisão, de reinclusão e a dinâmica da condição de procedibilidade — **classifique o agente antes de traçar a tese**.

## Extinção da punibilidade e causas de não-persecução

- **Reinclusão / reaquisição da condição de militar:** conforme o entendimento sobre condição de procedibilidade, a **não reinclusão** pode obstar o processo; e há teses sobre os efeitos da reinclusão/nova incorporação na persecução. **Conferir o alcance atual (extinção, suspensão ou mera condição) na jurisprudência** — não afirmar de memória.
- **Prescrição especial (art. 132, CPM):** o prazo prescricional da deserção **só começa a correr** quando o militar **atinge a idade-limite** para permanência na reserva (ou é excluído). É defesa frequente em casos antigos — **calcular pelo regime especial**, não pela regra comum do art. 125.
- **Apresentação voluntária (art. 189, CPM):** a apresentação espontânea, dentro dos parâmetros legais, **atenua** a pena (não extingue). Documentar a data e o modo da apresentação.
- **Anistia / indulto:** eventual anistia específica a desertores (leis pontuais e periódicas) pode extinguir a punibilidade — **conferir vigência de lei de anistia aplicável** ao caso concreto.

## Teses de defesa por eixo (com contra-teses)

### Eixo 1 — Atipicidade temporal (o prazo não se completou)
- **Tese:** a ausência **não atingiu mais de oito dias** completos; consumação inexistente; o fato é, no máximo, **transgressão disciplinar** ou ausência (não crime). Recontar a partir da data/hora exatas.
- **Contra-tese (MPM):** o termo de deserção fixa a consumação; a contagem oficial prevalece. → **Rebater** com a documentação militar (parte de ausência, boletim) que fixe a data/hora real da falta.

### Eixo 2 — Ausência justificada / exclusão do dolo (força maior, erro, doença)
- **Tese:** a ausência decorreu de **força maior** (impossibilidade material de retorno), **doença incapacitante**, **prisão por outra causa**, **ordem/licença** ou **erro** quanto ao dever de apresentação — falta o **dolo de desertar**.
- **Contra-tese (MPM):** o dolo se presume da ausência prolongada. → **Rebater**: dolo não se presume; provar a causa impeditiva (atestado médico, boletim de ocorrência, comprovante de internação, testemunhas).

### Eixo 3 — Ausência de condição de militar / falta de condição de procedibilidade
- **Tese:** réu **não reincluído** / **excluído** e não reintegrado / nunca validamente incorporado → **falta condição** para o processo prosseguir; suspensão ou arquivamento.
- **Contra-tese (MPM):** basta a condição na data do fato. → **Rebater** com o entendimento (a conferir) que exige a condição de militar **também no curso do processo**.

### Eixo 4 — Nulidades do termo de deserção e do procedimento (CPPM 451 e ss.)
- **Tese:** vícios no **termo de deserção** (autoridade incompetente, requisitos ausentes, data errada), falta de **exclusão/agregação** regular, cerceamento de defesa, ausência de defensor no ato → **nulidade**.
- **Contra-tese (MPM):** meras irregularidades formais, sem prejuízo. → **Rebater** demonstrando **prejuízo concreto** (o CPPM também exige *pas de nullité sans grief*, mas o termo é peça essencial de procedibilidade).

### Eixo 5 — Prescrição pelo regime especial (art. 132, CPM)
- **Tese:** decurso do prazo prescricional contado do **termo inicial especial** (idade-limite/exclusão) → extinção da punibilidade.
- **Contra-tese (MPM):** prescrição não iniciada porque não atingida a idade-limite. → **Rebater** com a certidão de exclusão/idade e o cálculo pelo regime do art. 132.

### Eixo 6 — Desclassificação para deserção atenuada ou figura diversa
- **Tese:** os fatos, se típicos, enquadram-se em modalidade **atenuada** (apresentação voluntária — art. 189) ou **figura diversa** (não a especial do art. 190), afastando a maior reprimenda.
- **Contra-tese (MPM):** incidência da forma mais grave (deserção especial, art. 190, consumação imediata). → **Rebater** afastando os pressupostos da forma especial (deslocamento/operação/embarque) quando ausentes.

## Roteiro de análise e defesa (passo a passo)

1. **Classificar o agente:** oficial ou praça? **Estável** ou não? Praça especial/aspirante? Isso define exclusão × agregação e a condição de procedibilidade.
2. **Reconstituir a linha do tempo:** data/hora exatas da falta (parte de ausência, boletim, alteração) → contar o **prazo de graça** → conferir a data do **termo de deserção**.
3. **Testar a atipicidade temporal:** o oitavo dia se completou por inteiro? Se não, **atipicidade**.
4. **Investigar causas de justificação/exclusão do dolo:** doença, prisão, licença, força maior, erro — reunir prova documental.
5. **Aferir a condição de militar no curso do processo:** houve **reinclusão**? Sem ela, arguir falta de condição de procedibilidade/prosseguibilidade.
6. **Fiscalizar o termo de deserção e o rito do CPPM (451 e ss.):** competência, requisitos, exclusão/agregação, defensor, prazos.
7. **Calcular a prescrição pelo regime especial (art. 132):** termo inicial próprio; usar `calculadora-prescricao` com a ressalva do regime militar.
8. **Definir a estratégia:** absolvição por atipicidade/ausência de dolo › extinção (prescrição/anistia) › nulidade › desclassificação/atenuação (art. 189) › dosimetria favorável.
9. **Passar tudo pelo Citation Gate** (`jurisprudencia-stj-stf` + acervo STM) antes de citar Súmula/precedente.

## Estrutura da peça de defesa (resposta/alegações perante o Conselho)

> Peça sob o rito do CPPM (resposta à acusação/defesa prévia e, ao final, alegações escritas perante o **Conselho de Justiça**). Adaptar à fase e à praxe da auditoria.

1. **Endereçamento** ao Juízo/Auditoria da Justiça Militar competente (da União — Auditoria Militar; ou Estadual — Auditoria de Justiça Militar).
2. **Qualificação** do acusado, com **situação funcional** (posto/graduação; estável/não; unidade).
3. **Síntese da imputação** (modalidade de deserção; data da consumação segundo o termo).
4. **Dos fatos** — linha do tempo da ausência, com a documentação militar.
5. **Do direito** — teses por eixo (atipicidade temporal; exclusão do dolo; condição de militar/procedibilidade; nulidades; prescrição especial; desclassificação/atenuação), com **subsunção explícita** ao art. 187 (ou 188/190) e ao CPPM 451 e ss.
6. **Das provas** — rol de testemunhas, documentos (atestados, boletins, comprovantes), requerimento de diligências.
7. **Dos pedidos** — absolvição (art. 439, CPPM — conferir a alínea) por atipicidade/ausência de dolo; ou extinção da punibilidade (prescrição/anistia); ou nulidade; subsidiariamente, desclassificação/atenuação e dosimetria mínima.
8. **Fecho** — local, data, advogado/defensor, OAB/identificação funcional.

> **Não reproduzir modelo pronto de quesito ou de sentença.** A redação da peça segue o caso concreto e a fase; aplique a skill `redacao-persuasiva-criminal` para teoria do caso, narrativa e persuasão.

## Súmulas e precedentes (sob o Citation Gate)

- **Dispositivos de lei (citar com segurança, conferida a redação):** CPM arts. 187-194, 132; CPPM arts. 451-465; CF art. 5º, LXI e §2º; CF art. 124 (competência da Justiça Militar da União) e art. 125, §4º (Justiça Militar estadual).
- **Súmulas do STM / STF sobre deserção, exigência de condição de militar e reinclusão:** **[NÃO VERIFICADO]** — **não cite número** sem conferir. Passe por `jurisprudencia-stj-stf` e pela pesquisa do acervo (STM). Prefira **ensinar a tese** (exigência da condição de militar no curso do processo; natureza do termo de deserção como condição de procedibilidade) a arriscar um número de Súmula ou HC.
- **Precedentes do STF (HC) sobre prisão do desertor e condição de procedibilidade:** **[NÃO VERIFICADO]** — conferir número, órgão e vigência antes de citar.

> **Regra de ouro do Citation Gate:** dispositivo de lei e princípio, sim; **número de acórdão/Súmula/informativo, só depois de verificado**. Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência fabricada por IA.

## Erros comuns e anti-padrões (evitar)

- Tratar a ausência como crime **desde o primeiro dia** — ignora o prazo de graça (mais de oito dias).
- **Não reconferir a contagem** do prazo a partir da data/hora reais da falta (confiar cegamente no termo).
- Presumir o **dolo** a partir da mera ausência prolongada, sem investigar força maior/doença/erro.
- Ignorar a exigência de **condição de militar / reinclusão** no curso do processo (condição de procedibilidade).
- Aplicar a **prescrição comum** (art. 125) em vez do **regime especial** do art. 132 (termo inicial na idade-limite/exclusão).
- Confundir **deserção comum** (art. 187, prazo de graça) com **deserção especial** (art. 190, consumação imediata).
- Confundir oficial/praça estável (**agregação**) com praça sem estabilidade (**exclusão**) — muda todo o regime.
- Deixar de arguir **nulidades do termo de deserção** e do rito do CPPM no momento próprio (risco de preclusão).
- Citar **Súmula do STM ou HC do STF de memória** — sempre passar pelo Citation Gate.

## Checklist de defesa

- [ ] Situação funcional do réu na data do fato **e** no curso do processo verificada (oficial/praça; estável?; reincluído?)?
- [ ] Data/hora exatas da falta reconstituídas pela documentação militar (parte, boletim, alteração)?
- [ ] **Prazo de graça** recontado — o oitavo dia se completou por inteiro (consumação)?
- [ ] Causas de **exclusão do dolo/justificação** investigadas (doença, prisão, licença, força maior, erro) e provadas?
- [ ] **Condição de militar / reinclusão** aferida — cabe arguir falta de condição de procedibilidade?
- [ ] **Termo de deserção** e rito do CPPM (arts. 451 e ss.) fiscalizados (competência, requisitos, exclusão/agregação, defensor)?
- [ ] **Prescrição especial** (art. 132) calculada pelo termo inicial próprio (`calculadora-prescricao`, ressalva militar)?
- [ ] Modalidade correta (comum art. 187 × especial art. 190 × assimilada art. 188) e eventual **atenuação** (art. 189)?
- [ ] Pedidos escalonados: absolvição › extinção › nulidade › desclassificação/atenuação › dosimetria mínima?
- [ ] Súmulas/precedentes (STM/STF/STJ) **verificados** via `jurisprudencia-stj-stf` + acervo antes de citar?
- [ ] **Revisão humana** do advogado/defensor responsável realizada?

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa, não substitui o juízo do profissional nem a leitura dos autos concretos.
- **Ética por polo:** atuação de **advocacia** sob o Estatuto da OAB e o **Provimento 205/2021** (uso de IA no exercício da advocacia); **Defensoria Pública da União/estadual** sob a **LC 80/94**. Vedada a citação de jurisprudência não verificada.
- **Citation Gate inegociável:** dispositivos de lei e Súmulas notórias com certeza; **qualquer** precedente específico (HC/REsp/RE, informativo, Súmula do STM) marcado como **[NÃO VERIFICADO]** e conferido via `jurisprudencia-stj-stf` e pesquisa do acervo (STM) antes do uso.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
