---
name: defesa-crimes-tributarios-ordem-economica-relacoes-consumo
description: >-
  Use ao defender crimes contra a ORDEM ECONÔMICA (cartel/abuso de poder econômico — arts. 4º a 6º
  da Lei 8.137/1990), crimes contra as RELAÇÕES DE CONSUMO (art. 7º da Lei 8.137/1990) e crimes da
  Lei 8.176/1991 (usurpação de combustíveis/recursos minerais, adulteração de combustível):
  atipicidade, ausência de dolo, bis in idem com a lei antitruste (Lei 12.529/2011/CADE),
  individualização da conduta do dirigente, prova… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, penal-economico, leis-especiais, ordem-economica, consumo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-tributarios-ordem-economica-relacoes-consumo"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-tributarios-ordem-economica-relacoes-consumo", "defesa crimes", "relacoes consumo"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes contra a Ordem Econômica e as Relações de Consumo (Lei 8.137/1990, arts. 4º-7º) e Lei 8.176/1991

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

Esta skill orienta a **defesa criminal** de três núcleos de **direito penal econômico** frequentemente confundidos e mal delimitados na denúncia: (i) os **crimes contra a ordem econômica** — cartel, abuso de poder econômico, dumping, açambarcamento (Lei 8.137/1990, **arts. 4º a 6º**); (ii) os **crimes contra as relações de consumo** (mesma lei, **art. 7º**); e (iii) os **crimes da Lei 8.176/1991** — usurpação de recursos minerais, exploração de matéria-prima sem autorização e adulteração/revenda irregular de combustíveis. É o terreno *white-collar* típico de empresas, dirigentes e do setor de combustíveis/mineração, no qual a acusação costuma **penalizar o que é ilícito administrativo (CADE, ANP, ANM)** ou empilhar tipos que descrevem o mesmo fato.

> **Lição central:** o primeiro movimento defensivo é **delimitar o tipo e separar o penal do administrativo/regulatório**. Nem toda conduta anticompetitiva punível pelo CADE (Lei 12.529/2011) constitui crime; nem toda irregularidade da ANP/ANM é usurpação penal. **Classifique o tipo imputado, teste se cada elemento normativo (poder econômico, "domínio de mercado", ausência de "concorrência", "usurpação") está tecnicamente comprovado, e verifique o dolo** — antes de discutir mérito. Denúncia genérica de "cartel" ou "abuso de poder econômico", sem descrever o acordo concreto e o poder de mercado, tende a ser inepta.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 4º a 7º da Lei 8.137/1990** (o art. 4º foi **reescrito pela Lei 12.529/2011** — a antiga tipificação difusa de "abuso do poder econômico" foi enxugada; cite a redação atual, não a original de 1990) e da **Lei 8.176/1991**. Confira as **penas** e os patamares de suspensão condicional do processo / transação penal (Lei 9.099/95) e do **ANPP (art. 28-A do CPP)**. Toda súmula, tese ou precedente passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de ir para a peça. Na dúvida sobre um número de HC/REsp/RE, informativo ou tema, **omitir vence inventar**.

## Delimitação — o que esta skill cobre (e o que não)

- **Cobre:** crimes contra a **ordem econômica** (Lei 8.137/90, arts. 4º-6º — cartel/abuso de poder econômico, açambarcamento/venda acima de tabela); crimes contra as **relações de consumo** em nível de teses gerais (art. 7º); crimes da **Lei 8.176/91** (usurpação mineral, matéria-prima sem autorização, adulteração/revenda irregular de combustível). Cobre a **interface penal ↔ antitruste (CADE)** e **penal ↔ regulatório (ANP/ANM)**.
- **NÃO cobre (skills vizinhas):**
  - **Sonegação fiscal / ordem tributária** = Lei 8.137/90, **arts. 1º e 2º** → use `extincao-punibilidade-pagamento-tributario` (válvulas do pagamento, SV 24, parcelamento) e as teses de crime tributário. **Apesar do nome, esta skill NÃO trata dos arts. 1º-2º** — o rótulo "tributários" no identificador cobre o guarda-chuva penal-econômico da Lei 8.137, mas a matéria fiscal propriamente dita está na skill de extinção pelo pagamento.
  - **Detalhamento dos tipos do CDC e do art. 7º** (produto impróprio, publicidade enganosa, responsabilidade do dirigente no consumo) → skill dedicada **`defesa-crimes-consumidor`** (arts. 61-80 do CDC + art. 7º da Lei 8.137). Aqui o art. 7º entra em nível estratégico e de concurso de normas; para o mérito do consumo, remeta àquela skill.
  - **Crimes ambientais** (extração mineral como dano ambiental, Lei 9.605/98) → `crimes-ambientais-defesa` (confirmar nome no `skills/_index.yaml`). Extração de recursos minerais pode tangenciar **usurpação (Lei 8.176) + crime ambiental** em concurso — disputar a subsunção.
  - **Lavagem** decorrente do proveito econômico → `defesa-lavagem-capitais`.
- **Concurso aparente de normas** é tese central: um mesmo fato pode tangenciar arts. 4º-7º da Lei 8.137, a Lei 8.176 e tipos do CP/CDC. Definir **qual tipo incide** (especialidade, subsidiariedade, consunção) pode reduzir drasticamente a pena ou levar à absolvição.

## Base legal

- **Lei 8.137/1990, art. 4º** (redação da **Lei 12.529/2011**) — crimes contra a **ordem econômica**: abusar do poder econômico dominando o mercado ou eliminando total/parcialmente a concorrência mediante **ajuste/acordo entre empresas** (o **cartel**), controle regionalizado do mercado por rede de distribuição, controle em detrimento da concorrência etc. **Pena: reclusão, 2 a 5 anos, e multa** — conferir redação/pena vigentes.
- **Lei 8.137/1990, art. 5º** — condutas correlatas de abuso econômico (ex.: exigir exclusividade de propaganda, subordinar venda a condições, recusar injustificadamente venda direta) — **conferir vigência** (parte do art. 5º foi objeto de revogações/reformas).
- **Lei 8.137/1990, art. 6º** — **açambarcamento** e afins: vender mercadorias acima de tabela/preço oficial, aplicar fórmula de reajuste diversa da legal, exigir/receber vantagem indevida de preço.
- **Lei 8.137/1990, art. 7º** — crimes contra as **relações de consumo** (produto impróprio, indução a erro, sonegação de insumo etc.). **Mérito detalhado → `defesa-crimes-consumidor`.**
- **Lei 8.176/1991, art. 1º** — **usurpação**: produzir bens/explorar matéria-prima pertencentes à União (ex.: petróleo, gás, minerais) **sem autorização legal ou em desacordo** com ela; adquirir/distribuir/revender **combustível adulterado** ou fora de especificação da ANP.
- **Lei 8.176/1991, art. 2º** — usurpação de **recursos minerais** (jazida, mina) sem autorização/concessão/licença.
- **Lei 12.529/2011 (Lei de Defesa da Concorrência — CADE)** — repressão **administrativa** ao abuso do poder econômico. Marco central para separar o **ilícito antitruste (administrativo)** do **crime**, e para as teses de **non bis in idem**, **acordo de leniência** e **TCC** (Termo de Compromisso de Cessação).
- **CF, arts. 170 e 173, §4º** — a ordem econômica e a repressão ao abuso do poder econômico como **bem jurídico** (usar para calibrar a lesividade e a proporcionalidade).
- **CP, art. 13, §2º** — dever de agir/omissão relevante (filtro do dirigente omisso).
- **CP, arts. 18 e 20** — crime **doloso**, salvo previsão de culpa (os tipos econômicos são **dolosos**); **erro de tipo** exclui o dolo.
- **Lei 9.099/95, arts. 76, 89** — transação penal e suspensão condicional do processo (verificar cabimento pela pena mínima).
- **CPP, art. 28-A** — **ANPP**, cabível quando presentes os requisitos e ausente violência/grave ameaça (frequente nos crimes econômicos).

## Roteiro de análise e defesa (por eixo de tese)

O raciocínio vai do **mais radical** (não há crime) ao **subsidiário** (redução/benefício).

### 1. Atipicidade — elemento normativo não comprovado (a tese mais forte)

- **Cartel (art. 4º):** a elementar é o **acordo/ajuste entre concorrentes** apto a **dominar mercado ou eliminar a concorrência** com **abuso de poder econômico**. A defesa exige prova concreta do **ajuste** (não mero paralelismo de conduta ou coincidência de preços) e do **poder de mercado**. **Paralelismo consciente lícito** (empresas que seguem o líder de preços sem acordo) **não** é cartel. Sem prova do concerto de vontades e da aptidão lesiva ao mercado, **a conduta é atípica**.
- **Abuso de poder econômico (arts. 4º-5º):** "domínio de mercado" e "eliminação da concorrência" são elementos que dependem de **definição do mercado relevante** e de **poder econômico real** — questões técnico-econômicas que, em regra, reclamam **prova pericial/econômica**. Denúncia que afirma abuso sem delimitar mercado relevante e participação é frágil.
- **Açambarcamento / venda acima de tabela (art. 6º):** pressupõe **preço/tabela oficial** vigente e vinculante. Em economia de preços liberados, **não há tabela** a violar — o tipo pode ser **inaplicável** ao caso concreto (atipicidade por ausência de elementar normativa).
- **Usurpação (Lei 8.176):** a elementar é a **falta de autorização/concessão** ou o **desacordo** com ela. Se havia **título habilitante** (autorização da ANP/ANM, licença), ou se a irregularidade é meramente **formal/administrativa** (documentação, prazo), discutir a **atipicidade** — a mera infração regulatória não é, por si, usurpação penal. Na adulteração de combustível, a **impropriedade/desacordo com a especificação** é **elementar** e **só se prova por laudo idôneo** — ataque a cadeia de custódia da amostra (skill `cadeia-custodia`).
- **Regra transversal — o penal é a *ultima ratio*:** exigir da acusação a **subsunção exata** ao núcleo típico, e não a genérica "prática anticompetitiva" ou "irregularidade no setor". Ilícito administrativo (CADE, ANP, ANM) **não** equivale a crime.

### 2. Ausência de dolo / erro de tipo

- Os crimes econômicos são **dolosos** (CP, art. 18, I). A defesa demonstra que o agente **não tinha consciência** da ilicitude do acordo/da irregularidade, ou agiu em **erro sobre elemento do tipo** (CP, art. 20) — ex.: gestor que confiou em parecer jurídico/econômico sobre a licitude da prática comercial, ou revendedor que recebeu combustível lacrado com certificado de conformidade do distribuidor.
- **Culpa in vigilando / falha de compliance não é dolo:** deficiência no controle interno não converte, por si, o dirigente em autor doloso. O dolo há de ser **do agente concreto**, sobre o fato concreto.

### 3. Non bis in idem e a relação com a esfera administrativa (CADE/ANP/ANM)

- **Independência x proporcionalidade:** vigora, em regra, a **independência das instâncias** (penal, administrativa, civil). Contudo, a defesa explora a **proporcionalidade e a coerência sistêmica**: sanção antitruste pesada do CADE + persecução penal pelo mesmo cartel podem suscitar debate sobre **excesso punitivo** e sobre o **acordo de leniência/TCC** como fator de mitigação ou de extinção da pretensão punitiva. **[O alcance da leniência do CADE sobre a esfera penal — se e como blinda dirigentes signatários — é tema sensível e específico; conferir a disciplina legal vigente e a posição atual do STJ/STF via `jurisprudencia-stj-stf` antes de afirmar.]**
- **Prova emprestada do processo administrativo:** frequentemente a denúncia se lastreia em dados do CADE/ANP. A defesa fiscaliza a **licitude e a cadeia da prova** trazida da esfera administrativa e a necessidade de sua **judicialização** com contraditório.

### 4. Individualização da conduta do dirigente — combater a imputação por cargo

- **Não há responsabilidade penal objetiva.** A denúncia que imputa o crime ao sócio/diretor **só pela posição** na empresa é **inepta**: exige-se a descrição do **vínculo concreto** entre a conduta do dirigente e o fato (quem participou do ajuste, quem decidiu, quem tinha poder de evitar).
- **Crime societário / de gabinete:** admite-se certa **flexibilização** na descrição, mas **não a supressão** do liame mínimo com o fato. Faltando a mínima individualização, cabem **HC para trancamento** ou **rejeição/absolvição sumária**. Ferramenta: skill `inepcia-denuncia-generica`. **[Standard de denúncia em crime societário — conferir precedentes atuais via `jurisprudencia-stj-stf`.]**
- **Dirigente omisso (CP, art. 13, §2º):** só responde por omissão quem **tinha conhecimento** da prática e **poder de determinar** a correção e **omitiu-se**. Sem ciência e sem poder de agir, não há crime omissivo impróprio.

### 5. Concurso aparente de normas e dosimetria

- **Definir o tipo único aplicável:** um mesmo fato de "combustível adulterado" pode ser lido como Lei 8.176 (usurpação/desacordo com especificação), art. 7º da Lei 8.137 (relação de consumo) e/ou crime ambiental. Sustentar **especialidade/consunção** para afastar a cumulação e reduzir a pena.
- **Extração mineral irregular:** disputar se o fato é **usurpação (Lei 8.176)** ou **crime ambiental (Lei 9.605/98)** — ou concurso — conforme o bem jurídico predominante e a descrição concreta.
- **Dosimetria (defesa):** afastar a exasperação por "gravidade em abstrato" do crime econômico; discutir a **efetiva lesão ao mercado/consumidor**, colaboração, reparação e primariedade. Método detalhado → `calculadora-dosimetria`.

### 6. Teses processuais e de prova

- **Competência:** crime contra a ordem econômica/consumo em regra é da **Justiça Estadual**; a **usurpação de bens da União (Lei 8.176)** e o interesse federal (ANP, monopólio da União sobre petróleo/minerais) podem atrair a **Justiça Federal** (CF, art. 109). **Verificar caso a caso — a competência define nulidades.** **[Competência federal na usurpação de recursos da União / combustível — conferir posição atual via `jurisprudencia-stj-stf`.]**
- **Perícia é o coração da prova econômica:** definição de mercado relevante, poder de mercado, especificação técnica de combustível/mineral. Exigir perícia técnica, contraditório sobre o laudo e assistente técnico.
- **Cadeia de custódia** da amostra de combustível/mineral e dos documentos apreendidos (skill `cadeia-custodia`) — vício aqui derruba a prova da impropriedade/desacordo.
- **Extinção da punibilidade / prescrição:** dado o rito e os patamares de pena, checar prescrição (`extincao-punibilidade-prescricao`, `calculadora-prescricao`) e as válvulas negociais (ANPP; sursis processual).

## Teses e contra-teses (mapa rápido)

| Tese (defesa) | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Cartel não provado — só paralelismo | art. 4º; necessidade de prova do ajuste | Provas indiretas/econômicas indicam concerto |
| Abuso de poder econômico sem mercado relevante definido | arts. 4º-5º; elemento normativo | Poder de mercado demonstrado por participação |
| Açambarcamento inaplicável — preços liberados, sem tabela | art. 6º; ausência de elementar | Existência de norma de controle/reajuste |
| Usurpação atípica — havia autorização / vício meramente formal | Lei 8.176; ausência da elementar "sem autorização" | Exploração à revelia do título/desacordo material |
| Impropriedade do combustível não comprovada por laudo idôneo | elemento normativo; cadeia de custódia | Laudo oficial atesta desconformidade |
| Ausência de dolo / erro de tipo | CP arts. 18, 20 | Dolo evidenciado pelo modus e reiteração |
| Non bis in idem / mitigação pela leniência-TCC do CADE | Lei 12.529/2011; proporcionalidade | Independência das instâncias |
| Denúncia genérica — sem individualização do dirigente | CP art. 13, §2º; inépcia | Flexibilização admissível em crime societário |
| Concurso aparente — um só tipo incide | especialidade/consunção | Concurso formal/material de crimes |

> Toda linha desta tabela é **ponto de partida argumentativo**, não citação. Antes de levar qualquer precedente ou súmula à peça, passe pelo gate.

## Súmulas e precedentes — sob o Citation Gate

- **Dispositivos de lei e princípios** citados acima (arts. 4º-7º da Lei 8.137/90; arts. 1º-2º da Lei 8.176/91; Lei 12.529/2011; CP, arts. 13, §2º, 18 e 20; CF, arts. 170 e 173, §4º) podem ser afirmados **com certeza**, sempre conferida a **redação vigente**.
- **Qualquer precedente específico** (número de HC/REsp/RE, informativo, tema repetitivo/repercussão geral) **NÃO** deve ser inventado. Os temas quentes a pesquisar — todos via `jurisprudencia-stj-stf` — são:
  - Standard de **denúncia em crime societário** (individualização mínima da conduta do dirigente).
  - **Competência (Estadual x Federal)** na usurpação da Lei 8.176 e nos crimes de combustível.
  - **Alcance penal da leniência/TCC do CADE** e **non bis in idem** antitruste-penal.
  - **Necessidade de laudo/perícia** para a elementar "impropriedade"/"desacordo com especificação".
  - **Insignificância** e lesividade em crimes econômicos (aplicabilidade restrita).
- **Regra de ouro:** prefira **ensinar a tese e citar o dispositivo** a arriscar um número de acórdão. Se não há certeza absoluta, escreva **[NÃO VERIFICADO]** e remeta à verificação. Há sanções reais por jurisprudência inventada por IA.

## Erros comuns / checklist (defesa)

- [ ] **Tipo corretamente delimitado?** (ordem econômica art. 4º-6º x consumo art. 7º x usurpação Lei 8.176 x tributário arts. 1º-2º — este último **não** é desta skill).
- [ ] **Redação vigente conferida?** (art. 4º na redação da **Lei 12.529/2011**, não a original de 1990).
- [ ] **Elemento normativo comprovado tecnicamente?** (ajuste/cartel, mercado relevante, poder econômico, impropriedade/desacordo — com perícia).
- [ ] **Ilícito administrativo (CADE/ANP/ANM) foi indevidamente tratado como crime?** (separar as esferas).
- [ ] **Dolo do agente concreto demonstrado**, ou há erro de tipo / mera falha de compliance?
- [ ] **Dirigente individualizado** na denúncia, ou imputação por cargo (inépcia)?
- [ ] **Non bis in idem / leniência-TCC do CADE** avaliados como mitigação/extinção?
- [ ] **Concurso aparente** examinado (especialidade/consunção) para afastar cumulação de tipos?
- [ ] **Competência** (Estadual x Federal) verificada — define nulidades?
- [ ] **Cadeia de custódia** da amostra/documentos íntegra?
- [ ] **Prescrição e válvulas negociais** (ANPP, sursis processual) checadas?
- [ ] **Citações verificadas** (`jurisprudencia-stj-stf` / `verificacao-citacoes`) e **revisão humana** do advogado responsável?

**Anti-padrões (evitar):**
- Tratar esta skill como skill de **sonegação fiscal** (arts. 1º-2º) — não é; use as skills tributárias.
- Citar o **art. 4º na redação original de 1990** (revogada pela Lei 12.529/2011).
- Aceitar denúncia de "cartel" baseada em **paralelismo de preços** sem prova do ajuste.
- Confundir **ilícito antitruste do CADE** ou **irregularidade da ANP/ANM** com crime consumado.
- Deixar passar **imputação por cargo** ao dirigente sem exigir individualização.
- Não disputar o **concurso aparente de normas** (deixar acumular Lei 8.176 + art. 7º + ambiental).
- Arriscar **número de acórdão** de memória — passar tudo pelo gate.

## Lembretes finais

- **Delimitar o tipo primeiro; separar o penal do administrativo depois** — é o que mais decide o caso.
- **Elemento normativo (mercado, poder, impropriedade) exige prova técnica** — sem perícia idônea, a defesa ataca a atipicidade.
- **Dirigente não responde por cargo** — exigir individualização da conduta (CP, art. 13, §2º).
- **CADE (Lei 12.529/2011) é administrativo** — explorar leniência/TCC e non bis in idem, mas conferir o alcance penal via gate.
- **Concurso aparente** pode reduzir drasticamente a pena — disputar especialidade/consunção.
- **Conferir vigência** (art. 4º pós-Lei 12.529/2011) e **verificar toda jurisprudência** via `jurisprudencia-stj-stf` antes de peticionar.
- **Mérito do consumo (art. 7º/CDC)** → `defesa-crimes-consumidor`; **sonegação/válvulas fiscais** → `extincao-punibilidade-pagamento-tributario`.

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação da defesa**, sujeito a **revisão humana obrigatória** — toda peça/parecer é hipótese a confirmar, e a responsabilidade pela atuação é sempre do **advogado** (CED/OAB, art. 2º; Estatuto da OAB; Provimento 205/2021 sobre publicidade, quando aplicável). Nenhuma súmula, tese ou precedente vai à peça sem passar pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`. Dados de cliente/assistido não circulam em repositório público (LGPD).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
