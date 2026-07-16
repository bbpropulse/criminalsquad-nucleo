---
name: defesa-crime-terrorismo
description: >-
  Use ao defender acusado de terrorismo ou atos preparatórios (Lei 13.260/2016) — atipicidade por
  ausência da finalidade específica (art. 2º: xenofobia, discriminação ou preconceito de raça, cor,
  etnia e religião), exclusão de movimentos sociais e manifestações político-sindicais (art. 2º,
  §2º), delimitação estrita dos atos preparatórios (art. 5º) e do financiamento (art. 6º). Gatilhos:
  terrorismo, Lei 13.260, ato terrorista… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, leis-penais-especiais, terrorismo]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crime-terrorismo"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crime-terrorismo", "defesa crime", "crime terrorismo"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos Crimes de Terrorismo (Lei 13.260/2016)

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

Esta skill orienta a **defesa técnica** do acusado de **terrorismo** e figuras conexas da **Lei 13.260/2016** (Lei Antiterrorismo, que regulamenta o art. 5º, XLIII, da CF): terrorismo consumado (art. 2º c/c art. 2º, §1º), **atos preparatórios** (art. 5º), **financiamento** (art. 6º) e demais condutas equiparadas. É crime **federal**, **equiparado a hediondo** e com **elemento subjetivo especial** próprio — o que abre teses de atipicidade inexistentes nos crimes comuns e na organização criminosa.

> **Lição central:** o coração da defesa é o **elemento subjetivo especial do tipo**. O terrorismo (art. 2º) só existe se a conduta for praticada **por razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião** E **com a finalidade de provocar terror social ou generalizado, expondo a perigo pessoa, patrimônio, a paz pública ou a incolumidade pública**. Faltando qualquer dessas finalidades específicas, **não há terrorismo** — resta, no máximo, o crime comum correspondente (dano, homicídio, incêndio, sequestro). **Prove primeiro a finalidade; só depois discuta a conduta.**

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente da Lei 13.260/2016 (arts. 2º, 3º, 5º e 6º) e verifique se há alteração posterior por lei nova ou por controle de constitucionalidade. A rotulação da Lei 13.260 como equiparada a hediondo decorre da **Lei 13.260/2016, art. 17** (que incluiu o terrorismo na Lei 8.072/90). Súmulas, temas, informativos e overruling passam **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes de irem à peça. **Terrorismo é matéria politicamente sensível e de jurisprudência escassa — na dúvida, omitir vence inventar.**

## Base legal

- **CF, art. 5º, XLIII** — o terrorismo é crime inafiançável e insuscetível de graça ou anistia; base constitucional da Lei 13.260/2016.
- **Lei 13.260/2016, art. 2º, caput** — define o terrorismo: prática de atos por **razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião**, com **finalidade de provocar terror social ou generalizado**.
- **Lei 13.260/2016, art. 2º, §1º** — enumera **taxativamente** os atos de terrorismo (usar armas/explosivos/agentes químicos, biológicos, nucleares; sabotar meios de transporte, comunicação, instalações; atentar contra a vida etc.).
- **Lei 13.260/2016, art. 2º, §2º** — **cláusula de exclusão:** não abrange a conduta individual ou coletiva de pessoas em **manifestações políticas, movimentos sociais, sindicais, religiosos, de classe ou de categoria profissional**, dirigidos por propósitos sociais ou reivindicatórios, visando a contestar, criticar, protestar ou apoiar, com o objetivo de defender direitos, garantias e liberdades constitucionais.
- **Lei 13.260/2016, art. 3º** — promover, constituir, integrar ou prestar auxílio a **organização terrorista**.
- **Lei 13.260/2016, art. 5º** — **atos preparatórios de terrorismo** com o propósito inequívoco de consumar o crime do art. 2º (pena do art. 2º **reduzida de um quarto até a metade**).
- **Lei 13.260/2016, art. 6º** — **financiamento** ao terrorismo: receber, prover, oferecer, obter, guardar, manter em depósito, solicitar, investir bens/direitos para o planejamento/execução.
- **Lei 13.260/2016, art. 11** — competência da **Justiça Federal** para processar e julgar os crimes da lei.
- **Lei 8.072/90 (por força do art. 17 da Lei 13.260/2016)** — equiparação a **hediondo** (reflexo na progressão, livramento, indulto).

## Estrutura do tipo — o mapa que decide a defesa

O art. 2º é um **tipo de dupla exigência subjetiva** acumulada. A acusação precisa provar **as duas** finalidades, e a conduta precisa estar no rol **taxativo** do §1º:

```
TERRORISMO (art. 2º) = conduta do rol §1º
                     + motivação: xenofobia/discriminação/preconceito
                       (raça, cor, etnia, religião)
                     + finalidade: provocar terror social ou generalizado
                       expondo a perigo pessoa/patrimônio/paz/incolumidade
                     − (NÃO ser) movimento social/manifestação política (§2º)
```

- Falta a **motivação** (xenofobia/preconceito) → **atipicidade do terrorismo**; sobra o crime comum.
- Falta a **finalidade de terror** generalizado → **atipicidade**; sobra o crime comum.
- A conduta **não está no rol taxativo do §1º** → **atipicidade** (o rol é fechado, não admite analogia *in malam partem*).
- A conduta é **movimento social/manifestação** (§2º) → **exclusão típica expressa**.

> **Distinção crucial (vs. `defesa-organizacao-criminosa`):** a Lei 12.850/2013 pune a associação estável para infrações graves **sem** exigir motivação de preconceito nem finalidade de terror, e **não tem** a cláusula de exclusão de movimentos sociais. Se a denúncia não prova as finalidades especiais do art. 2º, uma via defensiva é **desqualificar** o terrorismo para, quando muito, o crime comum ou a associação criminosa — com pena e regime substancialmente menores. Confira sempre qual lei a denúncia efetivamente capitulou.

## Roteiro de defesa por figura típica

### 1) Terrorismo consumado (art. 2º)

**Teses típicas de atipicidade (ataque ao elemento subjetivo):**
1. **Ausência de motivação discriminatória** — os atos não foram praticados por xenofobia, raça, cor, etnia ou religião. Sem essa razão, o fato **não é terrorismo**, ainda que grave (ex.: vingança pessoal, motivação patrimonial, disputa criminal comum).
2. **Ausência de finalidade de terror social/generalizado** — a conduta visava alvo específico e determinado, sem intenção de disseminar pânico coletivo. Atentado pessoal ≠ terror generalizado.
3. **Conduta fora do rol taxativo do §1º** — o ato imputado não se enquadra em nenhum dos incisos; rol fechado veda analogia *in malam partem* (legalidade estrita, CF, art. 5º, XXXIX).
4. **Exclusão do §2º** — a conduta integra manifestação política, movimento social, sindical, religioso ou de categoria, com propósito reivindicatório/de protesto; **exclusão típica expressa**.

**Subsidiárias (se a materialidade do ato é inegável):**
- **Desclassificação para crime comum** (dano, incêndio, explosão, homicídio, lesão, constrangimento, sequestro) — a subtração da finalidade especial devolve o fato ao Código Penal ou à lei especial correspondente, com pena menor.
- **Concurso de agentes / autoria** — distinguir o autor do mero partícipe; afastar a coautoria por presunção.

### 2) Atos preparatórios (art. 5º)

O art. 5º é figura **excepcional** (o Direito Penal, em regra, não pune a preparação). Por isso a defesa exige **rigor máximo**:
- **Propósito inequívoco** de consumar o terrorismo do art. 2º — a preparação atípica ou ambígua **não** basta. Cogitação, comentário, adesão ideológica ou material de leitura **não** são ato preparatório punível (liberdade de expressão e pensamento — CF, art. 5º, IV e IX).
- **Nexo com o art. 2º** — o ato preparatório só existe se a finalidade última for o terrorismo do art. 2º (com todas as suas exigências subjetivas). Sem terrorismo-fim possível, não há preparação punível.
- **Redução obrigatória** — condenação pelo art. 5º impõe a pena do art. 2º **reduzida de um quarto até a metade**; sustentar a **fração máxima (metade)** e afastar a punição pela pena cheia. Ver o método de dosimetria adiante.
- **Distinção tentativa × preparação** — não confundir ato preparatório (art. 5º) com tentativa do art. 2º (art. 14, II, CP); o iter criminis define a capitulação e a pena.

### 3) Financiamento e apoio (arts. 3º e 6º)

- **Dolo específico e ciência da destinação** — punível quem age **sabendo** que os bens/valores se destinam ao terrorismo. Doação, remessa ou custódia sem conhecimento da finalidade terrorista é **atípica** (afastar dolo eventual presumido).
- **Distinção do art. 6º frente à lavagem** (Lei 9.613/98) e ao financiamento genérico — a capitulação correta muda pena e competência.
- **Organização terrorista (art. 3º)** — exigir a demonstração de **estrutura terrorista real**, com as finalidades do art. 2º; simples grupo, coletivo ou associação **sem** propósito terrorista não configura o tipo (risco de criminalizar dissidência/protesto).

## Teses × contra-teses

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Falta motivação de preconceito (art. 2º) | Elemento subjetivo especial cumulativo | Motivação inferida do contexto/discurso do agente |
| Falta finalidade de terror generalizado | Alvo específico ≠ terror coletivo | Efeito difuso do ato basta ao terror social |
| Conduta fora do rol taxativo (§1º) | Legalidade estrita; veda analogia | Interpretação extensiva do inciso |
| Exclusão de movimento social (§2º) | Cláusula legal expressa | Extrapolação do protesto para "atos violentos" fora da tutela |
| Ato preparatório atípico (art. 5º) | Não punição da cogitação/liberdade de expressão | Propósito inequívoco demonstrado por atos concretos |
| Desclassificação para crime comum | Ausência das finalidades do art. 2º | Manutenção do terrorismo pela gravidade objetiva |
| Ausência de ciência da destinação (art. 6º) | Dolo específico; afasta dolo presumido | Cegueira deliberada / dolo eventual |

> **Fio condutor:** a acusação tende a **presumir** as finalidades especiais a partir da gravidade objetiva do ato. A defesa deve **exigir prova direta** de cada finalidade — motivação de preconceito e intenção de terror generalizado — e denunciar a **presunção** como violação da legalidade estrita e do ônus probatório da acusação (CPP, art. 156).

## Nulidades próprias e questões processuais

- **Competência da Justiça Federal (art. 11)** — reconhecer/impugnar; capitulação como terrorismo desloca a competência. Se afastado o terrorismo, discutir a competência estadual do crime comum remanescente.
- **Provas de inteligência e infiltração** — em investigações de terrorismo é comum o uso de agente infiltrado, interceptações e provas de fontes de inteligência (ABIN). Atacar **cadeia de custódia** (CPP, arts. 158-A a 158-F), autorização judicial, e provas obtidas por **flagrante preparado/provocado** (crime impossível — Súmula 145/STF, conferir via `jurisprudencia-stj-stf`).
- **Liberdade de expressão × apologia** — distinguir manifestação, crítica política ou adesão ideológica (protegidas pela CF, art. 5º, IV e IX) de conduta típica. A criminalização do pensamento/discurso é inconstitucional.
- **Prazo prescricional e cautelares** — o método de contagem de prazos (prescrição, tempestividade recursal) está nas skills de cálculo; aplicá-las quando pertinente (ver seção de conformidade).

## Dosimetria e execução (método — apontar para as calculadoras)

Esta skill **não** calcula pena: descreve o método e aponta para as calculadoras deterministas do acervo.

- **Dosimetria (art. 68 CP)** — as penas dos arts. 2º, 3º, 5º e 6º têm faixas próprias na Lei 13.260/2016; a fixação em três fases e a redução do art. 5º (1/4 a 1/2) devem ser calculadas na skill `calculadora-dosimetria`. **Tese:** no art. 5º, buscar a fração de redução **máxima (1/2)**.
- **Multa** — quando cabível, apurar dias-multa/valor unitário com `calculadora-pena-multa`.
- **Prescrição** — regulada pelo art. 109 do CP em função da pena; aferir na `calculadora-prescricao`. Atenção: **anistia e graça** são vedadas (CF, art. 5º, XLIII), mas a **prescrição** corre normalmente.
- **Tempestividade recursal** — conferir prazos com `calculadora-tempestividade`.
- **Execução (equiparado a hediondo)** — progressão de regime, livramento e indulto seguem o regime dos hediondos (percentuais do art. 112 da LEP; livramento pode ser vedado conforme o caso). Ver a skill `execucao-progressao-regime` para o cálculo do lapso e das teses de execução.

## Súmulas, precedentes e dispositivos (sob o Citation Gate)

**Dispositivos de lei — citar com segurança:**
- CF, art. 5º, XXXIX (legalidade estrita), XLIII (inafiançabilidade, vedação de graça/anistia), IV e IX (liberdade de expressão/pensamento).
- Lei 13.260/2016, arts. 2º (caput, §§1º e 2º), 3º, 5º, 6º e 11.
- CP, arts. 14, II (tentativa), 68 (dosimetria), 109 (prescrição), 156 CPP (ônus da prova).
- CPP, arts. 158-A a 158-F (cadeia de custódia).

**Súmula notória (conferir vigência):**
- **Súmula 145/STF** — não há crime quando a preparação do flagrante torna impossível a consumação (flagrante provocado). Útil quando a atuação de agente infiltrado configura provocação. **Conferir redação e aplicabilidade via `jurisprudencia-stj-stf`.**

> **Precedentes específicos (HC/REsp/RE, temas, informativos): [NÃO VERIFICADO].** A jurisprudência sobre a Lei 13.260/2016 é **escassa e recente**; **não** cite número de acórdão, tema repetitivo ou informativo de memória. Antes de fundamentar qualquer precedente concreto, **confirme obrigatoriamente via `jurisprudencia-stj-stf`**. Prefira ensinar a **tese e o dispositivo** a arriscar um número — há sanções reais por jurisprudência inventada por IA.

## Erros comuns / checklist

- [ ] Verifiquei se a denúncia prova **cumulativamente** a motivação (preconceito) **e** a finalidade (terror generalizado) do art. 2º?
- [ ] Confirmei se a conduta imputada está **efetivamente** no rol **taxativo** do art. 2º, §1º (sem analogia *in malam partem*)?
- [ ] Avaliei a **cláusula de exclusão do §2º** (movimento social/manifestação política)?
- [ ] No art. 5º, exigi **propósito inequívoco** e sustentei a **redução máxima (1/2)** da pena?
- [ ] No art. 6º/art. 3º, afastei o **dolo presumido** e exigi ciência da destinação terrorista?
- [ ] Considerei a **desclassificação para crime comum** como via subsidiária?
- [ ] Impugnei a **cadeia de custódia** e a legalidade das provas de inteligência/infiltração (flagrante provocado — Súmula 145/STF)?
- [ ] Distingui **liberdade de expressão/adesão ideológica** de conduta típica?
- [ ] Conferi a **competência federal** (art. 11) e seu deslocamento se afastado o terrorismo?
- [ ] Encaminhei dosimetria/prescrição/tempestividade às **calculadoras** próprias?
- [ ] **Todo** precedente passou pelo gate `jurisprudencia-stj-stf` antes de citar?

**Anti-padrões (evitar):**
- Aceitar a presunção da finalidade de terror a partir da mera gravidade objetiva do ato.
- Tratar o rol do §1º como exemplificativo (ele é **taxativo**).
- Confundir terrorismo (finalidades especiais) com organização criminosa comum (Lei 12.850) — são tipos distintos.
- Punir cogitação, adesão ideológica ou material de leitura como ato preparatório do art. 5º.
- Deixar de sustentar a **redução máxima** no art. 5º.
- Citar precedente de terrorismo de memória (jurisprudência escassa e sensível).
- Ignorar a cláusula de exclusão de movimentos sociais em casos de protesto.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado** responsável (Estatuto da OAB e Código de Ética; observância do Provimento OAB 205/2021 na comunicação/publicidade). Nenhuma peça é protocolada sem revisão final humana.
- **Polo:** esta é uma skill de **defesa** (advocacia do acusado). Não é do polo acusatório. O chefe-roteador deve conferir, no `company.md`, o **polo** e o **tipo de instituição** antes de aplicá-la (Defensoria segue a LC 80/94; eventual atuação do MP/assistente exigiria skill própria do polo acusatório).
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf`. Na dúvida sobre número/vigência, **omitir vence inventar**.
- **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita e persuasão (a régua de obra-prima que a revisão cobra).

## Lembretes finais

- **Finalidade primeiro, conduta depois** — sem motivação de preconceito **e** finalidade de terror generalizado, **não há terrorismo**.
- **Rol do §1º é taxativo** — fora dele, atipicidade.
- **§2º exclui movimentos sociais e manifestações políticas** — tese central em casos de protesto.
- **Art. 5º pune preparação só com propósito inequívoco** — e com redução de 1/4 a 1/2 (buscar a metade).
- **Distinga do art. 6º / da lavagem / da organização criminosa** — capitulação certa muda pena e competência.
- **Crime federal, equiparado a hediondo** — reflexo na execução; use as calculadoras e a skill de progressão.
- **Confirme vigência e cite sob o gate** — jurisprudência escassa e sensível; revisão humana sempre.
