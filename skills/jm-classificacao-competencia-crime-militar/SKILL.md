---
name: jm-classificacao-competencia-crime-militar
description: >-
  Use como PORTA DE ENTRADA de todo caso na Justiça Militar — enquadra o fato como crime militar
  próprio ou impróprio (art. 9º do CPM) e fixa a competência: JME (art. 125, §4º e §5º, CF — civil
  NUNCA é réu), JMU (art. 124 CF — civil pode ser réu) ou Justiça comum (doloso contra a vida de
  civil desloca ao júri — art. 9º, §1º, CPM). Gatilhos: é crime militar ou comum, competência da
  auditoria militar, JME, JMU, Justiça Militar… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, justica-militar, competencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-jm-classificacao-competencia-crime-militar"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["jm-classificacao-competencia-crime-militar", "classificacao competencia", "crime militar"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Classificação do Crime Militar e Fixação de Competência (art. 9º do CPM; arts. 124 e 125, §4º/§5º, da CF)

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

Esta skill é a **porta de entrada** de todo caso que tramita — ou que se cogita tramitar — na **Justiça Militar**. Antes de discutir mérito, tese ou nulidade, é preciso responder a duas perguntas encadeadas: **(1) o fato é crime militar?** (subsunção ao art. 9º do CPM) e, se sim, **(2) qual o juízo competente?** — Justiça Militar da União (JMU), Justiça Militar Estadual (JME) ou Justiça comum (inclusive o **júri**, quando doloso contra a vida de civil). A resposta define o rito, o órgão julgador, as prerrogativas e até quem pode ser réu.

> **Lição central:** competência aqui é **matéria de ordem pública** e se afere pela **natureza do fato** (art. 9º do CPM), não pela vontade das partes nem pela farda do agente isoladamente. O erro clássico é presumir que "militar processa-se na Justiça Militar" — não é assim: há crime de militar que é **comum** (não previsto no CPM ou fora das hipóteses do art. 9º) e há crime **cometido por/contra militar** que a lei desloca à Justiça comum. **Classifique o fato primeiro; o juízo competente é consequência.**

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 9º do CPM**, alterado pela **Lei 13.491/2017** (que ampliou o conceito de crime militar impróprio para abarcar crimes previstos na "legislação penal comum", e não só no CPM) e pela **Lei 13.491/2017 no §2º** (competência do juiz singular, e não do Conselho, para dolosos contra a vida de civil praticados por militar das Forças Armadas em contexto específico). Confira também os arts. **124** e **125, §§4º e 5º**, da CF (redação da EC 45/2004) e todo precedente/súmula via a skill `jurisprudencia-stj-stf` antes de fundamentar a peça. Regra do CPP comum aplica-se subsidiariamente; o rito é o do **CPPM (Decreto-lei 1.002/69)**.

## Base legal

- **Art. 9º do CPM (Decreto-lei 1.001/69)**, redação da **Lei 13.491/2017** — define o **crime militar em tempo de paz** (o núcleo da subsunção). Incisos I, II e III e §§1º e 2º.
- **Art. 124 da CF** — competência da **Justiça Militar da União** (JMU): processar e julgar os **crimes militares definidos em lei**; **civil pode** ser réu perante a JMU.
- **Art. 125, §4º, da CF** — competência da **Justiça Militar Estadual** (JME): crimes militares definidos em lei praticados por **militares dos Estados** (PM e Bombeiro Militar); ressalva a competência do **júri** quando a vítima for **civil**.
- **Art. 125, §5º, da CF** — o **juiz de direito do juízo militar** (singular) processa e julga, isoladamente, os crimes militares **cometidos contra civis** e as ações judiciais contra atos disciplinares militares; ao **Conselho de Justiça** cabem os **demais** crimes militares.
- **Art. 9º, §1º, do CPM** — os crimes de que trata o inciso II, **quando dolosos contra a vida e cometidos por militares contra civil**, são da competência do **Tribunal do Júri** (Justiça comum).
- **CPPM (Decreto-lei 1.002/69)** — rito processual penal militar; aplicação subsidiária do CPP comum.
- **Súmula 297/STF, Súmula 6/STJ, Súmula 53/STJ, Súmula 90/STJ, Súmula 75/STJ** e demais — ver seção de súmulas (todas sob o Citation Gate).

## Conceitos-chave — crime militar próprio × impróprio

| Conceito | Definição | Exemplos típicos |
|---|---|---|
| **Crime militar PRÓPRIO** | Só pode ser praticado por **militar**; a condição de militar é elementar do tipo; previsto **apenas** no CPM, sem correspondente na lei comum | Deserção (art. 187 CPM), motim (art. 149), abandono de posto (art. 195), violência contra superior (art. 157) |
| **Crime militar IMPRÓPRIO** | Tem previsão **também** na lei comum (ou passou a ter, pela Lei 13.491/17, quando previsto na "legislação penal" e praticado numa das hipóteses do art. 9º, II) | Homicídio, lesão, furto, roubo, estelionato, tortura — praticados **em serviço**, em local sujeito à administração militar, contra militar etc. |

> **A virada da Lei 13.491/2017.** Antes, o art. 9º, II, exigia que o crime estivesse **previsto no próprio CPM** (com igual definição na lei comum). A Lei 13.491/17 substituiu por crimes previstos "**neste Código e os previstos na legislação penal**", **ampliando** o rol de crimes militares impróprios para tipos que só existem na lei comum (ex.: **tortura**, **abuso de autoridade**, crimes da Lei de Drogas, do Estatuto do Desarmamento etc.), desde que praticados numa das **circunstâncias** do inciso II. Isso **deslocou para a Justiça Militar** condutas que antes iam à Justiça comum — ponto **sensível e controvertido** (confira o estado da arte via `jurisprudencia-stj-stf` antes de afirmar).

## Roteiro de subsunção — o art. 9º passo a passo

O art. 9º do CPM é a **chave mestra**. Percorra os incisos **na ordem**:

**Inciso I — crimes propriamente militares.** Crimes previstos **no CPM** de modo diverso da lei comum, ou nela **não previstos**, qualquer que seja o agente (regra: militar; excepcionalmente o civil, na JMU). Aqui mora o **crime propriamente militar**.

**Inciso II — crimes previstos no CPM e na legislação penal, praticados por MILITAR DA ATIVA em uma das situações (alíneas "a" a "e"):**
- **a)** contra militar na mesma situação (ativa) ou assemelhado;
- **b)** em **lugar sujeito à administração militar**, contra militar/assemelhado ou contra o patrimônio/ordem administrativa militar;
- **c)** em **serviço** ou atuando em razão da função, comissão de natureza militar ou em manobra/exercício, ainda que fora do lugar sujeito à administração militar;
- **d)** durante período de manobras/exercícios, contra militar da reserva/reformado ou civil;
- **e)** contra o **patrimônio sob administração militar** ou a **ordem administrativa militar**.

**Inciso III — crimes praticados por MILITAR DA RESERVA, REFORMADO ou CIVIL** contra as instituições militares, nas situações das alíneas "a" a "d" (ex.: contra o patrimônio sob administração militar; em lugar sujeito à administração militar contra militar em função de natureza militar). **É a porta pela qual o CIVIL responde na JMU.**

**§1º — deslocamento ao júri.** Os crimes do **inciso II**, quando **dolosos contra a vida** e cometidos **por militar contra CIVIL**, competem ao **Tribunal do Júri** (Justiça comum) — regra que hoje vale francamente para a **JME** (art. 125, §4º, in fine, CF). Para militares das **Forças Armadas**, atenção ao **§2º** e à controvérsia sobre a competência (juiz singular × júri) em contextos operacionais específicos — **verifique a redação e o entendimento vigente**.

## Fluxo de decisão (árvore de competência)

```
1) O fato subsume-se a alguma hipótese do art. 9º do CPM?
   ├── NÃO → CRIME COMUM → Justiça comum (estadual/federal), NÃO a Militar.
   └── SIM → é crime militar. Siga.

2) Quem é o agente e a que instituição pertence?
   ├── Militar das FORÇAS ARMADAS (Exército/Marinha/Aeronáutica) OU civil
   │   contra instituição militar da União → competência da JMU (art. 124 CF).
   │   (civil PODE ser réu na JMU)
   └── Militar ESTADUAL (PM/Bombeiro Militar) → competência da JME (art. 125,§4º CF).
       (civil NUNCA é réu na JME — vai à Justiça comum)

3) A vítima é CIVIL e o crime é DOLOSO CONTRA A VIDA?
   ├── SIM (militar estadual contra civil) → desloca ao TRIBUNAL DO JÚRI
   │   (art. 9º,§1º, CPM + art. 125,§4º, CF). Justiça comum.
   ├── SIM (militar das FA contra civil) → verificar §2º do art. 9º e a
   │   controvérsia juiz singular × júri (CONFERIR entendimento vigente).
   └── NÃO → segue na Justiça Militar.

4) Dentro da Justiça Militar: a vítima é CIVIL (crime não doloso contra a vida)?
   ├── SIM → JUIZ DE DIREITO do juízo militar, isoladamente (art. 125,§5º CF).
   └── NÃO → CONSELHO DE JUSTIÇA (demais crimes militares).
```

## Teses e contra-teses (foco majoritário: DEFESA)

**Tese 1 — Incompetência absoluta da Justiça Militar (o fato NÃO é crime militar).**
Sustentar que a conduta **não se enquadra** em nenhuma alínea do art. 9º (ex.: militar de folga, fora do serviço, com arma particular, por motivação estritamente pessoal, contra civil, fora de lugar sujeito à administração militar). Consequência: nulidade *ab initio* e remessa à Justiça comum. Competência é **matéria de ordem pública**, arguível a qualquer tempo (exceção de incompetência — ver skill `excecoes-processuais`; adaptar ao CPPM).
- *Ancoragem clássica:* motivação pessoal e ausência de nexo com a função afastam o art. 9º, II — **[NÃO VERIFICADO]** conferir precedentes atuais de STJ/STF/STM via `jurisprudencia-stj-stf`.

**Tese 2 — Deslocamento ao Tribunal do Júri (doloso contra a vida de civil).**
Militar (sobretudo **estadual**) que dolosamente atenta contra a vida de **civil** deve ser julgado pelo **júri**, não pela auditoria militar (art. 9º, §1º, CPM; art. 125, §4º, CF). Tese de garantia do **juiz natural** e da soberania dos veredictos.
- *Cuidado:* a lesão/tentativa **não** consumada segue a lógica do doloso contra a vida (tentativa de homicídio → júri). **Confirmar** o tratamento do concurso (crime militar + doloso contra a vida) e eventual **separação de processos**.

**Tese 3 — Não incidência retroativa gravosa da Lei 13.491/2017.**
Para fatos **anteriores** a 16/10/2017 (vigência), a ampliação do art. 9º, II, **não pode retroagir** para deslocar à Justiça Militar (ou para agravar) — **irretroatividade da lei penal/processual penal material mais gravosa** (CF, art. 5º, XL). Aferir se a mudança de competência, no caso, produz efeito material gravoso.
- *Contraponto:* norma **processual** aplica-se de imediato (*tempus regit actum*); a controvérsia é se a alteração é puramente processual ou tem carga material. **[NÃO VERIFICADO]** conferir o entendimento consolidado.

**Tese 4 — Civil não pode ser réu na JME.**
Na **Justiça Militar Estadual**, o **civil nunca** é réu (art. 125, §4º, CF — só militares dos Estados). Se a denúncia imputa a civil crime perante a JME, há **incompetência absoluta**: o feito vai à Justiça comum.

**Tese 5 — Crime praticado por civil contra as Forças Armadas: excepcionalidade e interpretação restritiva.**
Na **JMU**, o civil só responde nas hipóteses **estritas** do art. 9º (em regra pelo inciso III), com **interpretação restritiva** — exigir efetivo atentado às instituições militares, e não mera conexão circunstancial. Discutir a **excepcionalidade** do julgamento de civil por corte castrense (garantia do juiz natural e do devido processo).

**Contra-tese (acusação — MP/MPM):** o fato preenche a alínea do art. 9º, II (praticado em serviço, em lugar sujeito à administração militar ou em razão da função), atraindo a competência castrense; a Lei 13.491/17 legitimou expressamente o alcance a crimes da legislação comum. **Este material é majoritariamente de DEFESA** — se a atuação for do **polo acusatório**, o roteador deve confirmar o polo (o flag `polo_acusacao` desta skill é **false**).

## Nulidades e vícios próprios (o que a defesa fiscaliza)

- **Incompetência do juízo** (absoluta): denúncia oferecida na Justiça Militar para fato comum, ou na JME contra civil, ou perante o Conselho quando a vítima é civil (deveria ser o juiz singular — art. 125, §5º). Vício **insanável**, arguível a qualquer tempo; leva à remessa e pode contaminar atos decisórios.
- **Órgão julgador errado dentro da JM:** Conselho de Justiça julgando o que competia ao **juiz de direito** singular (crime contra civil — art. 125, §5º, CF/EC 45), ou vice-versa.
- **Ausência de deslocamento ao júri** no doloso contra a vida de civil (juiz natural violado).
- **Aplicação retroativa gravosa** da Lei 13.491/17 a fato anterior.
- **Rito equivocado:** aplicar o CPP comum onde incide o **CPPM** (ou o inverso) em ato essencial.

> Vícios de competência absoluta **não precluem** e dispensam demonstração de prejuízo específico; ainda assim, **argua na primeira oportunidade** e consigne, para robustez recursal. Confirme, caso a caso, a natureza (absoluta × relativa) do vício concreto via `jurisprudencia-stj-stf`.

## Súmulas e precedentes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula 297/STF** — "Oficiais e praças das milícias dos Estados, no exercício de função policial civil, não são considerados militares para efeitos penais, sendo competente a Justiça comum para julgar os crimes cometidos por ou contra eles." **[CONFERIR ALCANCE ATUAL]** — dispositivo antigo, ler à luz da EC 45/2004 e da jurisprudência posterior.
- **Súmula 6/STJ** — "Compete à Justiça Comum estadual processar e julgar delito decorrente de acidente de trânsito envolvendo viatura de polícia militar, salvo se autor e vítima forem policiais militares em situação de atividade." **[NAO VERIFICADO — conferir redação/vigência]**
- **Súmula 53/STJ** — "Compete à Justiça Comum estadual processar e julgar civil acusado de prática de crime contra instituições militares estaduais." **[NAO VERIFICADO — conferir]**
- **Súmula 75/STJ** — competência para crime cometido a bordo de embarcação/porto etc. **[NAO VERIFICADO — conferir redação exata; pode não se aplicar]**
- **Súmula 90/STJ** — "Compete à Justiça Estadual Militar processar e julgar o policial militar pela prática do crime militar, e à Comum pela prática do crime comum simultâneo àquele." **[NAO VERIFICADO — conferir; base da separação de processos]**
- **Precedentes de deslocamento ao júri, alcance da Lei 13.491/17 e julgamento de civil pela JMU:** **[NAO VERIFICADO]** — não citar número de HC/RE/RHC/CC, informativo ou tema sem conferência. Ensine a **tese e o dispositivo**; o número específico passa **obrigatoriamente** por `jurisprudencia-stj-stf`.

> **Citation Gate (inegociável):** nenhuma súmula ou precedente acima entra em peça sem conferência de **redação, vigência e alcance** na fonte oficial. Súmulas de competência da Justiça Militar sofreram releitura após a **EC 45/2004** e a **Lei 13.491/2017** — o risco de citar tese superada é alto. **Na dúvida, omitir vence inventar.**

## Erros comuns / checklist

- [ ] O fato foi **subsumido ao art. 9º do CPM** (inciso e alínea identificados), e não presumido militar pela farda do agente?
- [ ] Distinguiu **crime militar próprio** (só CPM) de **impróprio** (também na lei comum / Lei 13.491/17)?
- [ ] Identificou a **instituição** do agente — **Forças Armadas (JMU)** × **militar estadual (JME)**?
- [ ] Se **JME**: confirmou que **nenhum civil** figura como réu (senão vai à Justiça comum)?
- [ ] Se **JMU**: o civil só responde nas hipóteses **estritas** do art. 9º (interpretação restritiva)?
- [ ] **Doloso contra a vida de CIVIL** por militar → verificou o **deslocamento ao júri** (art. 9º, §1º; art. 125, §4º, CF)?
- [ ] Dentro da JM: crime **contra civil** → **juiz de direito singular** (art. 125, §5º), e não o Conselho?
- [ ] Fato **anterior a 16/10/2017** → avaliou a **não retroatividade gravosa** da Lei 13.491/17?
- [ ] Rito correto (**CPPM**, subsidiariamente CPP) e órgão julgador correto (Conselho × juiz singular)?
- [ ] Súmulas/precedentes conferidos via `jurisprudencia-stj-stf` **antes** de citar (nada de memória)?

**Anti-padrões (evitar):**
- Presumir competência militar só porque o agente **é** militar (há crime de militar que é **comum**).
- Ignorar o **deslocamento ao júri** no doloso contra a vida de civil.
- Aceitar **civil como réu na JME** (vedado — art. 125, §4º).
- Mandar ao **Conselho** crime cometido contra **civil** (é do juiz singular — art. 125, §5º).
- Aplicar a **Lei 13.491/17 retroativamente** para agravar/deslocar fato anterior sem análise de irretroatividade.
- Citar súmula de competência **pré-EC 45/2004** como se vigente sem conferência.
- Confundir **CPPM** com CPP comum em ato essencial do rito.

## Encaminhamento (o que fazer depois de classificar)

1. **Fato = crime comum** → sair da Justiça Militar; seguir com `diagnostico-inicial-viabilidade-defesa` e `selecao-tese-por-tipo-penal` no rito comum.
2. **Fato = crime militar, competência equivocada** → arguir **exceção de incompetência** (adaptar `excecoes-processuais` ao CPPM) e/ou **habeas corpus** por juiz incompetente.
3. **Doloso contra a vida de civil** → preparar o deslocamento ao **júri** (skills `juri-*`).
4. **Confirmado o juízo militar** → seguir para as skills de mérito/defesa aplicáveis ao tipo, sempre sob o **CPPM**.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Esta skill é apoio à **classificação e à fixação de competência** — hipótese a confirmar, jamais peça pronta. A responsabilidade final é sempre do **profissional** que subscreve.
- **Citation Gate:** toda súmula, tese, tema ou acórdão passa por `jurisprudencia-stj-stf` antes de uso; o alto risco decorre da releitura pós-EC 45/2004 e pós-Lei 13.491/2017.
- **Ética por polo:** **advocacia** — OAB / EAOAB e Provimento 205/2021; **Ministério Público (MPM/MP)** — CNMP; **Defensoria** — LC 80/94. Esta skill é **majoritariamente de DEFESA** (`polo_acusacao: false`); se a atuação for acusatória, o roteador deve **confirmar o polo** antes de usar as contra-teses.
- **Sigilo e LGPD:** dados do assistido nunca em repositório público.

**Padrão de redação:** ao converter a classificação em peça (exceção de incompetência, HC, resposta à acusação no rito do CPPM), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita ao art. 9º do CPM, coesão e persuasão.
