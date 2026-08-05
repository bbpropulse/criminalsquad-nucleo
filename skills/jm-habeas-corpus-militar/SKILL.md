---
name: jm-habeas-corpus-militar
description: >-
  Use ao impetrar HABEAS CORPUS na Justiça Militar — relaxamento/revogação das prisões do CPPM
  (preventiva militar, menagem, prisão do desertor, prisão em flagrante militar), trancamento de IPM
  ou de ação penal militar por falta de justa causa, e definição do órgão competente
  (Auditoria/Conselho, TJM ou TJ, STM, STF). Cobre a fronteira do art. 142, §2º, CF: NÃO cabe HC
  contra o MÉRITO da punição disciplinar militar, MAS cabe… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, justica-militar, habeas-corpus]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-habeas-corpus-militar"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-habeas-corpus-militar", "habeas corpus", "corpus militar"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Habeas Corpus na Justiça Militar (art. 5º, LXVIII, CF; art. 466 e ss. do CPPM; art. 142, §2º, CF)

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

Esta skill orienta a impetração de **habeas corpus** no âmbito da **Justiça Militar** (da União e dos Estados) para tutelar a liberdade de locomoção do militar (e, no que couber, do civil processado na JMU) contra ilegalidade ou abuso de poder — em especial as **prisões próprias do CPPM** (Decreto-Lei 1.002/69), o **trancamento de IPM ou de ação penal militar** por falta de justa causa, e a **fixação da competência** do órgão do foro castrense. Cobre ainda a fronteira mais sensível da matéria: o **limite do art. 142, §2º, da CF**, que veda o HC contra o **mérito** da punição disciplinar militar — mas **não** contra sua legalidade.

> **Lição central:** o remédio muda conforme o **ato atacado** e o **foro**. Antes de redigir, responda em ordem: (1) o ato restringe a **liberdade de locomoção** (pressuposto do HC) ou é sanção administrativa cujo mérito é insindicável? (2) trata-se de **prisão do CPPM** (penal/processual-militar) ou de **punição disciplinar** (administrativa)? (3) quem é a **autoridade coatora** e, por consequência, qual o **órgão competente** (Auditoria/Conselho, TJM/TJ, STM ou STF)? Errar o objeto ou o foro é a causa nº 1 de não conhecimento.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **CPPM (Decreto-Lei 1.002/69)** — arts. 254 e ss. (prisão preventiva militar), 263 e ss. (menagem), 451 e ss. (deserção), 466 e ss. (habeas corpus na JM) —, do **CPM (Decreto-Lei 1.001/69)**, da **Lei 8.457/92** (organização da JMU, com as alterações da **Lei 13.774/2018** — juiz federal da Justiça Militar e competência monocrática), do **RISTM** e das **Constituições/Leis estaduais** que criam os TJMs (SP, MG, RS). Confira também o alcance atual do **art. 142, §2º, CF** e da **Súmula 694/STF** e demais súmulas/temas via a skill `jurisprudencia-stj-stf`. **Nenhum número de HC/RHC/informativo entra na peça sem passar pelo gate.**

---

## 1. Pressupostos e âmbito do HC militar

- **Objeto:** tutela da **liberdade de locomoção** (art. 5º, LXVIII, CF) ameaçada ou lesada por ilegalidade/abuso de poder de autoridade militar (ou judiciária castrense).
- **Base processual:** o HC no foro militar segue o **CPPM (arts. 466 a 480)**; subsidiariamente, os princípios do HC comum (CPP, arts. 647 e ss.) e a construção constitucional.
- **Legitimidade:** qualquer pessoa pode impetrar em favor de outrem (não exige advogado); o **MPM** também pode. Paciente pode ser **militar** (das Forças Armadas ou militar estadual) ou **civil** processado perante a JMU.
- **Espécies:** **liberatório** (cessar constrangimento já consumado — prisão) e **preventivo/salvo-conduto** (ameaça iminente e concreta à locomoção).
- **Não é via para:** reexame aprofundado de prova, dilação probatória, ou discussão do **mérito** de punição disciplinar (ver seção 4).

---

## 2. Base legal

- **CF, art. 5º, LXVIII** — cabimento do HC contra ilegalidade/abuso de poder.
- **CF, art. 142, §2º** — "**Não caberá habeas corpus em relação a punições disciplinares militares.**" (limite nuclear — ver seção 4).
- **CF, art. 124 e art. 125, §§ 3º a 5º** — competência da Justiça Militar da União (crimes militares) e dos Estados (crimes militares dos militares estaduais + ações contra atos disciplinares, ressalvada a do júri).
- **CPPM (Decreto-Lei 1.002/69):**
  - **arts. 466 a 480** — habeas corpus na Justiça Militar (processamento, competência, salvo-conduto).
  - **arts. 254 a 262** — **prisão preventiva** militar (pressupostos e hipóteses próprias).
  - **arts. 263 a 271** — **menagem** (medida restritiva típica do processo penal militar).
  - **art. 244 e ss.** — prisão em flagrante no processo penal militar.
  - **arts. 451 a 465 / CPM, arts. 187-194** — **deserção** e a **prisão do desertor**.
- **CPM (Decreto-Lei 1.001/69)** — tipos penais militares (o objeto material do trancamento).
- **Lei 8.457/92 (org. da JMU), com a Lei 13.774/2018** — juiz federal da Justiça Militar, competência **monocrática** e dos **Conselhos**.
- **Súmula 694/STF** — orienta o cabimento de HC frente à punição disciplinar (conferir teor exato e alcance no gate).

---

## 3. Mapa de competência — QUEM julga o HC (decorar a lógica)

A competência do HC se fixa pela **autoridade coatora**. Erro de endereçamento gera não conhecimento ou remessa.

```
Coator é autoridade militar administrativa (comandante) ou o
JUIZ da Auditoria (1º grau)  ....................  HC no TRIBUNAL respectivo
   ├── Justiça Militar da UNIÃO ................  STM
   └── Justiça Militar ESTADUAL (SP/MG/RS) ....  TJM do Estado
        └── Estados sem TJM ...................  TJ (Câmara/Seção criminal)

Coator é o próprio TRIBUNAL (STM ou TJM/TJ) ou
seus membros / decisão colegiada ...............  STF (art. 102, I, "d"/"i", CF)
   └── (contra ato de Turma/decisão do STM em HC → STF)

Coator é Ministro de Estado / Comandante de Força
(dimensão federal de alta autoridade) ..........  conferir foro (STJ/STF) no gate
```

- **1º grau (Auditoria/Conselho):** o HC contra ato de **autoridade administrativa militar** (ex.: comandante que decreta prisão) processa-se, em regra, perante o **juízo/tribunal** conforme a hierarquia da coação — **confirme, no caso concreto e na lei de organização vigente, se cabe ao juiz da Auditoria ou já ao Tribunal**.
- **STM:** julga HC quando **coator** for autoridade a ele subordinada na estrutura da JMU ou o **juiz federal da Justiça Militar** (1º grau da União).
- **TJM (SP, MG, RS) ou TJ (demais Estados):** julga HC na Justiça Militar **estadual**.
- **STF:** HC contra ato do **STM**, de **TJM** (via recurso ordinário — art. 102, II, "a", quando denegatória) ou de autoridade com foro no Supremo.
- **STJ:** entra na cadeia quando o coator é **Tribunal** e a hipótese se enquadra no art. 105, I, "c"/"i", CF — **confirmar o desenho recursal no gate**, pois a matéria militar tem particularidades.

> **Regra prática:** identifique a **autoridade coatora** primeiro; a competência é **derivada** dela. Em dúvida entre juiz da Auditoria e Tribunal, enderece ao Tribunal com pedido subsidiário de declínio — evita a perda de tempo com a liberdade em jogo.

---

## 4. A FRONTEIRA do art. 142, §2º, CF — punição disciplinar (núcleo da skill)

O art. 142, §2º, CF veda o HC **"em relação a punições disciplinares militares"**. A jurisprudência consolidou uma **distinção decisiva**:

| Ataca-se... | Cabe HC? | Fundamento |
|---|---|---|
| O **mérito** da punição (conveniência, oportunidade, proporcionalidade da sanção; justiça da falta) | **NÃO** | art. 142, §2º, CF — insindicável pela via do HC |
| A **legalidade** / os **pressupostos** da punição: (i) **competência** da autoridade; (ii) **hierarquia/subordinação** (existência de relação que autorize punir); (iii) **legalidade estrita** (previsão da transgressão e da sanção); (iv) **pena susceptível de ser aplicada** (tipo/limite da sanção); (v) devido processo / ampla defesa mínima | **SIM** | o HC controla a **legalidade** do ato, não seu mérito — leitura consagrada do §2º |

> **Tese central da defesa:** o art. 142, §2º **não blinda a ilegalidade**. Cabe HC para aferir os **pressupostos de validade** da prisão disciplinar — sobretudo **competência**, **hierarquia**, **legalidade estrita** (transgressão prevista + sanção prevista) e **duração legal**. Excedido qualquer pressuposto (ex.: prisão sem previsão regulamentar, por autoridade incompetente, além do prazo do regulamento, ou sem defesa mínima), o ato é **ilegal** e o HC é a via idônea. Conferir a **Súmula 694/STF** e a jurisprudência atual do STF/STM **no gate**.

- **Ponto de virada:** não peticione contra "a injustiça" ou "a severidade" da punição — isso é mérito e leva ao **não conhecimento**. Ataque a **ilegalidade objetiva** (falta de competência, ausência de previsão legal/regulamentar, excesso de prazo, nulidade do procedimento).
- **Contra-tese (autoridade/PGJ/PGR):** a matéria é **disciplinar** e o pedido, sob a roupagem de "legalidade", quer rediscutir o mérito — incidindo a vedação do §2º. **A defesa precisa demonstrar, ponto a ponto, que ataca pressuposto de validade, não conveniência.**

---

## 5. Objetos típicos do HC militar e roteiro de teses (foco em DEFESA)

### 5.1 Prisão preventiva militar (CPPM, arts. 254-262)
- **Pressupostos:** só cabe nas hipóteses e requisitos legais; exige **fundamentação concreta** (não abstrata) e **contemporaneidade**.
- **Teses:** ausência de fundamentação idônea; ausência dos pressupostos (fumus/periculum próprios do CPPM); cabimento de **menagem** ou de **medidas menos gravosas**; **excesso de prazo** na formação da culpa; desproporcionalidade.
- **Diálogo com o CPP comum:** discutir, no gate, a aplicação supletiva das cautelares e da lógica de excepcionalidade da prisão (a prisão como *ultima ratio*) ao processo penal militar.

### 5.2 Menagem (CPPM, arts. 263-271)
- Medida restritiva típica (permanência em local determinado). **Teses:** concessão da menagem em vez da preventiva; ilegalidade das condições impostas; revogação indevida sem fundamentação.

### 5.3 Prisão em flagrante militar (CPPM, art. 244 e ss.)
- **Teses:** atipicidade militar do fato; inobservância das formalidades do auto; ausência de nota de culpa; **relaxamento** por ilegalidade; ausência de situação flagrancial.

### 5.4 Prisão do desertor (CPM, arts. 187-194; CPPM, arts. 451-465)
- A deserção tem procedimento e prazo de graça (art. 187 CPM). **Teses:** não configuração do prazo de graça; nulidade da inspeção de saúde/instrução provisória; **excesso de prazo**; extinção da punibilidade; inexigibilidade de conduta diversa em situação concreta. **Cuidar da regra de reinclusão e da prisão como pressuposto processual** — conferir no gate a leitura atual.

### 5.5 Trancamento de IPM ou de ação penal militar (falta de justa causa)
- **Via excepcional:** o trancamento por HC só cabe quando a **atipicidade**, a **extinção da punibilidade** ou a **falta de justa causa** for **manifesta e demonstrável de plano** (sem dilação probatória).
- **Teses:** **atipicidade** do fato como crime militar (não é crime militar, é comum — declinar à Justiça comum); **ausência de justa causa** (denúncia inepta, sem lastro mínimo); **extinção da punibilidade** (prescrição — ver skill própria; anistia; morte); **coisa julgada**; ilegitimidade; nulidade insanável do IPM.
- **Competência do crime militar (art. 9º CPM):** discutir se o fato é **crime militar** — se não for, a JM é incompetente e cabe **declínio** (tese frequente após as alterações do art. 9º CPM pela **Lei 13.491/2017**, que ampliou o conceito de crime militar; confirmar alcance e limites no gate, sobretudo quanto a crimes dolosos contra a vida de civil, cuja competência é do **júri** — art. 9º, §1º, CPM).

### 5.6 Prisão disciplinar (transgressão) — sempre pelo filtro do §2º
- **Só ataque LEGALIDADE** (seção 4): autoridade incompetente; transgressão/sanção sem previsão; excesso do prazo regulamentar; ausência de defesa mínima; desvio de finalidade. **Nunca** o mérito.

---

## 6. Teses e contra-teses (síntese)

| Tese da defesa (impetrante) | Contra-tese (coator / MPM / PGJ) |
|---|---|
| Prisão preventiva militar sem fundamentação concreta e contemporânea | Fundamentação presente; gravidade e disciplina militar justificam |
| Cabimento de menagem / medida menos gravosa | Insuficiência das cautelares para a ordem/disciplina castrense |
| Excesso de prazo na formação da culpa | Complexidade / atos imputáveis à defesa |
| Fato não é crime militar (art. 9º CPM) → declínio | Enquadramento no art. 9º (inclusive pós-Lei 13.491/2017) |
| Trancamento por atipicidade / falta de justa causa manifesta | Necessidade de instrução; via estreita do HC não comporta |
| Prisão disciplinar **ilegal** (competência/previsão/prazo) — controle de legalidade | Matéria de mérito disciplinar, vedado o HC (art. 142, §2º) |
| Extinção da punibilidade (prescrição/anistia) demonstrável de plano | Ausência dos requisitos; matéria de mérito |

---

## 7. Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** dispositivos de lei e súmulas notórias podem ser citados com certeza; **qualquer número de HC/RHC/RE/REsp, informativo ou tema entra apenas [NAO VERIFICADO]** e deve ser conferido via `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir à peça. Prefira ensinar a **tese** e o **dispositivo** a arriscar um número.

- **Súmula 694/STF** — sobre o cabimento de HC frente à punição disciplinar militar (o controle de legalidade). **Conferir teor exato e alcance no gate.**
- **CF, art. 142, §2º** — vedação do HC contra punição disciplinar (dispositivo, citável com certeza).
- **CPPM, arts. 254-262 (preventiva), 263-271 (menagem), 466-480 (HC), 451-465 (deserção)** — dispositivos, citáveis com certeza (confira a redação vigente).
- **Art. 9º do CPM** (crime militar) — dispositivo; a **interpretação pós-Lei 13.491/2017** e a competência do júri para doloso contra a vida de civil devem ser **conferidas no gate**.
- **Excesso de prazo / trancamento por falta de justa causa** — há entendimentos consolidados de STF/STM/STJ; **todo acórdão ou súmula específica → [NAO VERIFICADO] até o gate.**

> Se precisar de precedente numérico específico (ex.: leading case do STF sobre o alcance do §2º, ou do STM sobre excesso de prazo em deserção), **marque [NAO VERIFICADO]** e delegue a conferência a `jurisprudencia-stj-stf`. **Omitir vence inventar.**

---

## 8. Estrutura da petição de HC militar

```
EXCELENTÍSSIMO SENHOR DOUTOR DESEMBARGADOR PRESIDENTE DO [SUPERIOR TRIBUNAL
MILITAR / TRIBUNAL DE JUSTIÇA MILITAR DO ESTADO DE [UF] / TRIBUNAL DE JUSTIÇA
DO ESTADO DE [UF]]   [endereçar ao órgão competente conforme a seção 3]


[NOME DO IMPETRANTE], [qualificação / OAB se advogado], vem impetrar

HABEAS CORPUS [LIBERATÓRIO / PREVENTIVO, com pedido de LIMINAR]

em favor de [NOME DO PACIENTE], [posto/graduação, unidade / ou civil qualificado],
apontando como autoridade coatora [AUTORIDADE COATORA — cargo e órgão], pelas
razões de fato e de direito a seguir.


I — DA TEMPESTIVIDADE E DO CABIMENTO
   (HC não se sujeita a prazo; demonstrar a ilegalidade/ameaça atual à
    locomoção — art. 5º, LXVIII, CF; art. 466 e ss. do CPPM.)
   [Se ato disciplinar: demonstrar que se ataca a LEGALIDADE/pressupostos, e
    NÃO o mérito — afastando a vedação do art. 142, §2º, CF.]

II — DA COMPETÊNCIA DESTE E. TRIBUNAL
   (Fixar a competência pela autoridade coatora — seção 3.)

III — DOS FATOS
   (Narrar o ato coator: prisão/ameaça, data, autoridade, fundamento invocado.)

IV — DO DIREITO
   a) Da ilegalidade [do ato / da prisão / da instauração]
      (Desenvolver a tese — seção 5: ausência de pressupostos da preventiva;
       cabimento de menagem; excesso de prazo; atipicidade militar / declínio;
       falta de justa causa; ilegalidade da prisão disciplinar por
       incompetência/ausência de previsão/excesso de prazo.)
   b) [Dispositivos: CF, art. 5º, LXVIII; art. 142, §2º (se disciplinar);
       CPPM art. [___]; CPM art. [___]. Súmulas/precedentes SÓ após o gate.]

V — DA LIMINAR
   (fumus boni iuris = ilegalidade demonstrada de plano; periculum in mora =
    lesão iminente/atual à liberdade. Requerer salvo-conduto ou soltura.)

VI — DOS PEDIDOS
   a) concessão da LIMINAR para [expedir salvo-conduto / relaxar / revogar /
      suspender o ato coator];
   b) requisição de informações à autoridade coatora (CPPM, art. [___]);
   c) vista ao MPM/PGJ;
   d) no mérito, a CONCESSÃO DA ORDEM para [confirmar a liminar / trancar o
      IPM/ação penal / declarar a ilegalidade da prisão];
   e) [subsidiariamente, o DECLÍNIO à Justiça comum, se o fato não for crime
      militar — art. 9º do CPM].

   Termos em que, pede deferimento.
   [LOCAL], [DATA].  [IMPETRANTE] — OAB/[UF] [Nº] (se advogado)
```

**Campos a preencher:** [ÓRGÃO], [UF], [IMPETRANTE], [PACIENTE], [POSTO/GRADUAÇÃO], [UNIDADE], [AUTORIDADE COATORA], [DATA DO ATO], [CPPM/CPM arts.], [LOCAL], [DATA], [OAB].

---

## 9. Documentos e providências

1. **Prova pré-constituída** da ilegalidade (o HC não admite dilação): cópia do ato coator, ordem de prisão, portaria de IPM, nota de culpa, boletim/regulamento disciplinar aplicado.
2. **Identificação precisa da autoridade coatora** e do órgão (define a competência).
3. **Procuração** (se advogado; dispensável para impetração por terceiro).
4. **Documentos do paciente** (identificação militar, unidade, situação funcional).
5. **Regulamento disciplinar** invocado (para atacar competência/previsão/prazo, se ato disciplinar).

---

## 10. Erros comuns / checklist

- [ ] **Objeto certo:** ataca-se **liberdade de locomoção** (não uma sanção pecuniária/funcional que não prende)?
- [ ] Se **disciplinar**: a peça ataca **LEGALIDADE/pressupostos** (competência, previsão, prazo, defesa) e **NÃO o mérito** (art. 142, §2º)?
- [ ] **Competência** endereçada à autoridade coatora certa (STM / TJM / TJ / STF — seção 3)?
- [ ] Fato é mesmo **crime militar** (art. 9º CPM) — ou cabe **declínio** à Justiça comum (ou ao **júri**, se doloso contra a vida de civil)?
- [ ] Prova da ilegalidade **pré-constituída** (sem necessidade de dilação)?
- [ ] Prisão preventiva militar atacada por **ausência de pressupostos / fundamentação concreta / excesso de prazo** — e pleiteada a **menagem** subsidiariamente?
- [ ] **Liminar** com fumus (ilegalidade de plano) e periculum (lesão iminente à locomoção) bem demonstrados?
- [ ] Todo **precedente numérico** marcado **[NAO VERIFICADO]** e conferido via `jurisprudencia-stj-stf`?
- [ ] Redação vigente do **CPPM/CPM/Lei 8.457/92** conferida (alterações da Lei 13.774/2018 e da Lei 13.491/2017)?

**Anti-padrões (evitar):**
- Impetrar contra a **injustiça/severidade** da punição disciplinar (é mérito → não conhecimento pelo art. 142, §2º).
- Endereçar ao órgão errado por não identificar a **autoridade coatora**.
- Pedir trancamento de IPM/ação por tese que **exige instrução** (o HC não comporta dilação probatória).
- Tratar todo fato praticado por militar como **crime militar** sem checar o **art. 9º do CPM** (perde a tese de declínio/júri).
- Citar acórdão/informativo **de memória** sem passar pelo gate.
- Confundir a sistemática do **CPPM** com a do **CPP comum** sem conferir o dispositivo militar específico.

---

## 11. Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da impetração; a responsabilidade pela peça, pela tese e pelo endereçamento é sempre do **profissional responsável** (advocacia: EAOAB + CED, art. 2º; Provimento OAB 205/2021 na comunicação; Ministério Público Militar/CNMP; Defensoria: LC 80/94). Confirme o **polo** com o roteador — esta skill é majoritariamente de **defesa** (impetração em favor do paciente), embora o **MPM** também possa impetrar HC.
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA). Na dúvida, **omitir vence inventar**.
- **Cautelas de vigência:** CPPM, CPM, Lei 8.457/92 (com Lei 13.774/2018), art. 9º do CPM (com Lei 13.491/2017), Súmula 694/STF e o alcance do art. 142, §2º, CF devem ser confirmados na fonte oficial antes de fundamentar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
