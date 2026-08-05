---
name: defesa-estelionato-171
description: >-
  Use ao defender ESTELIONATO comum (CP 171) e ao trabalhar a ação penal condicionada à
  representação do §5º (Lei 13.964/19) — decadência, retratação, retroatividade da representação a
  processos em curso —, além da atipicidade por ausência do binômio ardil→erro→vantagem→prejuízo,
  dolo antecedente x mero inadimplemento civil, torpeza recíproca, privilégio (§1º) e as figuras do
  §2º (cheque sem fundo, Súmula 554 STF). Gatilhos… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, patrimonio]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-estelionato-171"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-estelionato-171", "defesa estelionato"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Estelionato (CP, art. 171) e a ação penal do §5º

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

Esta skill orienta a **defesa técnica no crime de estelionato comum** (CP, art. 171) e o manejo das teses processuais e materiais mais decisivas: a **ação penal condicionada à representação** introduzida pelo **§5º** (Lei 13.964/19 — Pacote Anticrime), a **atipicidade por quebra do nexo fraude→erro→vantagem→prejuízo**, a distinção entre **dolo antecedente** (crime) e **inadimplemento contratual** (ilícito civil), a **torpeza recíproca**, o **privilégio** do §1º e as figuras equiparadas do §2º.

> **Lição central:** antes de discutir mérito, **verifique a legitimidade e a tempestividade da ação penal**. Após a Lei 13.964/19, o estelionato comum é, em regra, de **ação penal pública condicionada à representação** (§5º). Falta de representação tempestiva, decadência ou retratação **extinguem a punibilidade** e resolvem a causa sem entrar no ardil. Só depois disso ataque o mérito: **não há estelionato sem o binômio completo** ardil/erro/vantagem ilícita/prejuízo alheio, com **dolo desde o início**.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do art. 171 do CP e do seu §5º (incluído pela Lei 13.964/19) e das exceções do próprio §5º. Confira também se há alteração legislativa posterior, o teor atual das súmulas invocadas (ex.: Súmulas 24, 244, 246, 521, 554 do STF; Súmula 17 do STJ) e o estado da jurisprudência sobre **retroatividade da representação** aos processos em curso — tudo via a skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes`. Não afirme número de HC/REsp/RE, informativo ou tema sem verificação.

---

## ⚠️ Polo e escopo desta skill

- **Foco majoritário: DEFESA.** O roteiro, as teses e o checklist abaixo são pensados para o **acusado**.
- **Atenção ao polo (spec `polo_acusacao: true`):** o conteúdo serve **também ao polo acusatório** (Ministério Público / assistente de acusação) na leitura invertida das mesmas teses (comprovar o binômio, demonstrar dolo antecedente, afastar a atipicidade). **O chefe-roteador deve conferir o polo da instituição** (`_criminalsquad/_memory/company.md`) antes de orientar a redação: se acusatório, aplique a **ética do MP/assistente** (CNMP) e a lógica probatória de acusação; se defesa, a ética da advocacia (OAB + Provimento 205/2021) ou Defensoria (LC 80/94).
- Toda entrega é **rascunho técnico sob revisão humana obrigatória**.

---

## Base legal

- **CP, art. 171, *caput*** — estelionato: "obter, para si ou para outrem, **vantagem ilícita**, em **prejuízo alheio**, induzindo ou mantendo alguém em **erro**, mediante **artifício, ardil ou qualquer outro meio fraudulento**". Pena de reclusão e multa.
- **CP, art. 171, §1º** — **estelionato privilegiado**: se o criminoso é primário e é de **pequeno valor** o prejuízo, o juiz pode aplicar a pena do furto privilegiado (§2º do art. 155) — redução, substituição por multa ou reclusão diminuída.
- **CP, art. 171, §2º** — figuras equiparadas (mesma pena do *caput*): I — disposição de coisa alheia como própria; II — alienação/oneração fraudulenta de coisa própria; III — defraudação de penhor; IV — fraude na entrega de coisa; V — fraude para recebimento de indenização/seguro; **VI — emissão de cheque sem suficiente provisão de fundos / frustração do pagamento**.
- **CP, art. 171, §2º-A e §2º-B** — **fraude eletrônica** (Lei 14.155/2021). **Fora do escopo desta skill** — ver `defesa-fraude-eletronica`. Esta skill trata do estelionato **clássico** e do §5º, que se aplica a **todo** o art. 171.
- **CP, art. 171, §4º** — causa de aumento (1/3 ao dobro) se o crime é cometido **contra idoso ou vulnerável** (conferir redação vigente e a interseção com o Estatuto do Idoso).
- **CP, art. 171, §5º (Lei 13.964/19)** — **ação penal pública condicionada à representação**, salvo se a vítima for: **Administração Pública** (direta ou indireta); **criança ou adolescente**; **pessoa com deficiência mental**; ou **maior de 70 anos ou incapaz** (conferir o rol exato na redação vigente).
- **CP, art. 103 e art. 107, IV/V** — prazo **decadencial de 6 meses** para representar (a contar do conhecimento da autoria) e a **decadência/retratação** como causas de extinção da punibilidade; **art. 104** — retratação da representação (antes do oferecimento da denúncia).
- **CP, art. 2º, parágrafo único / art. 5º, XL, CF** — retroatividade da lei penal/processual mais benéfica (relevante ao §5º).

---

## 1) Primeiro filtro — a ação penal condicionada (§5º)

O **§5º** é a tese processual mais recente e frequentemente decisiva. Antes de qualquer mérito, percorra:

**a) O caso exige representação?** Sim, salvo se a vítima estiver numa das exceções do §5º (Administração Pública; criança/adolescente; pessoa com deficiência mental; maior de 70/incapaz — **conferir o rol vigente**). Nessas exceções, a ação permanece **pública incondicionada**.

**b) Houve representação válida e tempestiva?** A representação prescinde de forma sacramental (basta manifestação inequívoca de vontade de ver apurado o fato — cf. entendimento consolidado, **conferir via `jurisprudencia-stj-stf`**), mas deve existir e respeitar o **prazo decadencial de 6 meses** (art. 103 CP) contado do conhecimento da autoria. **Ausência ou intempestividade → decadência → extinção da punibilidade** (art. 107, IV, CP).

**c) Cabe retratação?** A representação é **retratável até o oferecimento da denúncia** (art. 104 CP). Retratada, extingue-se a punibilidade. Útil em composição civil/ressarcimento.

**d) Retroatividade a processos anteriores à Lei 13.964/19 (2019).** Ponto sensível: para ações **já em curso** quando a lei entrou em vigor, discutiu-se se e como a vítima deveria ser intimada a representar e qual o *dies a quo* do prazo. **Há divergência e evolução jurisprudencial** — a orientação predominante e o marco temporal **devem ser confirmados via `jurisprudencia-stj-stf`** antes de sustentar em juízo. **Tese defensiva:** exigir a manifestação da vítima e arguir a extinção quando ausente, invocando a natureza mista (penal + processual) e a retroatividade benéfica (art. 5º, XL, CF). **[NÃO VERIFICADO — confirmar o precedente e o marco atual do STF/STJ sobre retroatividade do §5º]**

> **Regra de ouro:** o §5º é **filtro de admissibilidade**. Resolvido a favor da defesa (falta/decadência/retratação da representação), **encerra-se o caso sem julgamento de mérito** — mais econômico e seguro do que a tese material.

---

## 2) Segundo filtro — o binômio e a atipicidade material

O estelionato exige uma **cadeia causal íntegra**. A defesa ataca o **elo mais frágil**:

```
MEIO FRAUDULENTO (artifício/ardil)  →  ERRO da vítima  →  VANTAGEM ILÍCITA  →  PREJUÍZO alheio
        (idôneo a enganar)          (induzido/mantido)      (do agente)         (efetivo)
```

Faltando **qualquer** elo — ou o **nexo causal** entre eles —, o fato é **atípico**. Teses típicas:

- **Ausência de fraude idônea.** O meio empregado não era apto a iludir pessoa de diligência mediana; ou a vítima **não foi enganada** (sabia da realidade, ou o erro decorreu de sua própria desídia, não do ardil).
- **Ausência de nexo entre fraude e disposição patrimonial.** A vantagem não decorreu do erro, mas de outra causa (a vítima entregou o bem por liberalidade, garantia, negócio distinto).
- **Ausência de prejuízo alheio efetivo** (dano patrimonial) ou de **vantagem ilícita** — se houve contrapartida real, discute-se a atipicidade.
- **Crime impossível (CP, art. 17):** meio absolutamente ineficaz ou objeto absolutamente impróprio (ex.: fraude grosseira, facilmente perceptível). Conferir a jurisprudência sobre "fraude grosseira" no estelionato via `jurisprudencia-stj-stf`.

---

## 3) Dolo antecedente × mero inadimplemento civil (tese-chave)

O núcleo do estelionato é o **dolo desde o início** — a intenção de fraudar **preexistente** ao negócio. Distingue-se do **inadimplemento contratual** (ilícito civil), em que o dolo, se surge, é **posterior** (o agente contrata de boa-fé e depois não cumpre).

- **Tese defensiva:** o cliente celebrou negócio **de boa-fé** e só depois se viu impossibilitado de cumprir (dificuldade financeira superveniente, caso fortuito, frustração do próprio negócio). **Inadimplemento não é crime** — a responsabilização é **civil**, não penal. Cabe extinção/absolvição por **atipicidade** (falta de dolo antecedente) ou por **falta de justa causa**.
- **Indicadores a explorar (defesa):** existência de contrato real e contraprestação; tentativas de pagamento/renegociação; histórico idôneo; ausência de identidade falsa ou de simulação na origem; prejuízo decorrente de fato superveniente.
- **Contra-tese (acusação / assistente):** o dolo antecedente se prova por **indícios** — identidade/documento falso na origem, empresa de fachada, ausência absoluta de intenção ou de meios de cumprir desde o início, reiteração do modus operandi, ocultação/fuga. A acusação demonstra que a fraude **precedeu e causou** a disposição patrimonial.

> **Distinção prática:** *dolo na origem* = estelionato; *dolo superveniente / simples não pagamento* = ilícito civil. É onde a defesa mais vence por atipicidade.

---

## 4) Torpeza recíproca

Quando **ambas as partes agem de má-fé** (a "vítima" também buscava vantagem ilícita ou participava do esquema fraudulento):

- **Tese:** a chamada **torpeza recíproca** afasta ou fragiliza a tipicidade do estelionato, pois falta a **vítima de boa-fé induzida em erro** — quem se envolve conscientemente em negócio ilícito não é "enganado" no sentido do tipo. Há forte controvérsia doutrinária e jurisprudencial; **confirme o entendimento atual do tribunal de atuação via `jurisprudencia-stj-stf`** antes de sustentar, pois parte da jurisprudência **não** exclui o crime pela mera torpeza da vítima. **[NÃO VERIFICADO — verificar posição atual STJ/STF sobre torpeza recíproca no estelionato]**
- **Uso tático:** ainda quando não excluir o crime, a má-fé da vítima serve à **valoração da culpabilidade**, à dosimetria e à narrativa (teoria do caso).

---

## 5) Privilégio (§1º) e figuras do §2º

**Estelionato privilegiado (§1º):** réu **primário** + prejuízo de **pequeno valor**. Consequência: pena do furto privilegiado (art. 155, §2º) — substituição por multa, ou reclusão diminuída de 1/3 a 2/3, ou só multa. **Sempre pleitear subsidiariamente** quando presentes os requisitos, mesmo defendendo a atipicidade em primeiro plano.

**Figuras equiparadas (§2º) — cuidados próprios:**
- **Cheque sem fundos (§2º, VI).** Duas balizas súmulares clássicas (**conferir vigência**):
  - **Súmula 554/STF:** o **pagamento do cheque emitido sem fundos, antes do recebimento da denúncia**, obsta a ação penal (afasta a justa causa). **Tese defensiva forte:** comprovar a quitação anterior à denúncia. **[conferir teor e vigência via `jurisprudencia-stj-stf`]**
  - **Súmula 246/STF:** sendo o cheque **pós-datado/emitido como garantia de dívida** (não como ordem de pagamento à vista), descaracteriza-se o estelionato do §2º, VI. **[conferir]**
  - **Súmula 521/STF / Súmula 244/STJ (competência):** o crime de cheque sem fundos consuma-se no **local da recusa do pagamento** (agência sacada) — relevante para **exceção de incompetência**. **[conferir teor e vigência]**
- **Disposição de coisa alheia como própria (§2º, I) e fraude na entrega (IV):** exigem a mesma cadeia fraude→erro→prejuízo; atacar a ausência de fraude idônea ou de prejuízo.

---

## 6) Teses de defesa × contra-teses (acusação)

| Tese de defesa | Fundamento | Contra-tese (acusação/assistente) |
|---|---|---|
| **Falta/decadência da representação (§5º)** | Art. 171, §5º + art. 103/107, IV, CP | Vítima está em exceção do §5º (ação incondicionada) ou representou a tempo |
| **Retratação da representação** | Art. 104 CP (até a denúncia) | Retratação após a denúncia → sem efeito |
| **Atipicidade — binômio incompleto** | Art. 171, *caput* (falta fraude/erro/prejuízo/nexo) | Cadeia causal íntegra e comprovada |
| **Mero inadimplemento civil (sem dolo antecedente)** | Ausência de dolo na origem | Dolo antecedente por indícios (fachada, ID falso, modus) |
| **Crime impossível / fraude grosseira** | Art. 17 CP | Fraude idônea a enganar vítima concreta |
| **Torpeza recíproca** | Ausência de vítima de boa-fé | Corrente que mantém o crime apesar da má-fé da vítima |
| **Estelionato privilegiado (subsidiária)** | Art. 171, §1º (primário + pequeno valor) | Prejuízo não é de pequeno valor / réu não primário |
| **Cheque pago antes da denúncia / garantia** | Súmulas 554 e 246/STF | Cheque como ordem de pagamento à vista, não pago |
| **Incompetência (cheque)** | Local da recusa (Súm. 521/STF; 244/STJ) | Competência corretamente fixada |

---

## 7) Súmulas e precedentes sob o Citation Gate

**Cite apenas após conferir teor e vigência via `jurisprudencia-stj-stf` / `verificacao-citacoes`.** Prefira ensinar a **tese e o dispositivo** a arriscar número de acórdão.

- **Súmula 554/STF** — pagamento do cheque sem fundos **antes do recebimento da denúncia** obsta a ação penal. *[conferir]*
- **Súmula 246/STF** — cheque dado em **garantia**/pós-datado descaracteriza o estelionato do §2º, VI. *[conferir]*
- **Súmula 521/STF** e **Súmula 244/STJ** — competência: consumação no **local da recusa** do cheque. *[conferir teor/redação]*
- **Súmula 24/STF** — aplica-se ao estelionato do §2º, VI a súmula sobre cheque (conferir alcance). *[conferir]*
- **Súmula 17/STJ** — quando a falsificação (de documento) **se exaure no estelionato**, sem outra potencialidade lesiva, o falso é **absorvido** (princípio da consunção) — tese relevante em concurso falso+estelionato. *[conferir teor/vigência]*
- **Retroatividade do §5º / representação em processos em curso** — orientação do STF/STJ **[NÃO VERIFICADO — confirmar precedente e marco atual]**.
- **"Fraude grosseira" e crime impossível no estelionato** — há jurisprudência dos tribunais superiores; **verificar antes de citar número/tema**. **[NÃO VERIFICADO]**

> **Diretriz anti-alucinação:** nunca invente número de HC/REsp/RE, informativo ou tema. Onde não houver certeza absoluta, escreva a tese e o dispositivo de lei, e marque **[NÃO VERIFICADO]** orientando conferência via `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** — há sanções reais por jurisprudência inventada por IA.

---

## 8) Roteiro de análise/defesa (ordem de trabalho)

1. **Qualificar a vítima** — está em alguma exceção do §5º (Administração Pública; criança/adolescente; deficiência mental; ≥70/incapaz)? Define se a ação é **condicionada** ou **incondicionada**.
2. **Se condicionada:** houve **representação válida e tempestiva** (6 meses, art. 103)? Cabe **decadência**? Cabe **retratação** (art. 104, até a denúncia)? — **prioridade máxima**.
3. **Retroatividade do §5º** para processos anteriores a 2019 — arguir extinção se ausente a manifestação da vítima **[conferir marco atual]**.
4. **Testar o binômio** — mapear fraude → erro → vantagem → prejuízo e identificar o **elo ausente** ou o **nexo quebrado**.
5. **Dolo antecedente × inadimplemento civil** — reunir prova de boa-fé na origem e de fato superveniente; sustentar atipicidade/falta de justa causa.
6. **Crime impossível / fraude grosseira** (art. 17), se o meio era inidôneo.
7. **Torpeza recíproca**, se a vítima também agiu de má-fé **[conferir posição do tribunal]**.
8. **Figuras do §2º** — se cheque, aplicar Súmulas 554/246 e a competência (521/244); se falso absorvido, Súmula 17/STJ (consunção).
9. **Subsidiárias:** **privilégio (§1º)**; afastamento do **aumento do §4º** (idoso/vulnerável) se não configurado; **dosimetria** (skill `calculadora-dosimetria`).
10. **Prescrição** — sempre checar (skill `calculadora-prescricao`) e **tempestividade** de eventuais recursos (skill `calculadora-tempestividade`).
11. **Verificar todas as citações** (gate) e submeter a **revisão humana**.

> **Método de cálculo (sem código aqui):** dosimetria da pena, multa, prescrição e prazos são **cálculos determinísticos** — descreva o método na peça e **aponte para as calculadoras existentes** (`calculadora-dosimetria`, `calculadora-prescricao`, `calculadora-tempestividade`). Não improvise números.

---

## 9) Erros comuns / checklist

- [ ] Verifiquei se a ação é **condicionada** (§5º) e se a **representação** foi válida e tempestiva (6 meses — art. 103)?
- [ ] Conferi se a vítima está em **exceção do §5º** (ação incondicionada) antes de arguir decadência?
- [ ] Avaliei **retratação** (art. 104, até a denúncia) como via de extinção?
- [ ] Sustentei a **retroatividade do §5º** aos processos em curso, com o **marco atual conferido** via `jurisprudencia-stj-stf`?
- [ ] Mapeei o **binômio completo** e apontei o **elo/nexo ausente**?
- [ ] Distingui **dolo antecedente** (crime) de **inadimplemento civil** (atipicidade) com prova de boa-fé na origem?
- [ ] Considerei **crime impossível/fraude grosseira** (art. 17) e **torpeza recíproca** (conferindo a posição do tribunal)?
- [ ] No **§2º, VI (cheque)**: pagamento antes da denúncia (Súm. 554), garantia (Súm. 246) e competência (Súm. 521/244)?
- [ ] **Falso absorvido** pelo estelionato → consunção (Súmula 17/STJ)?
- [ ] Pleiteei o **privilégio (§1º)** subsidiariamente (primário + pequeno valor)?
- [ ] Afastei/analisei o **aumento do §4º** (idoso/vulnerável)?
- [ ] Deleguei **dosimetria/prescrição/tempestividade** às calculadoras próprias?
- [ ] Passei **todas as citações** pelo gate `verificacao-citacoes` e submeti à **revisão humana**?

**Anti-padrões (evitar):**
- Ir ao mérito **sem antes** checar representação/decadência/retratação (§5º) — perde-se a via mais econômica.
- Arguir decadência **ignorando** que a vítima está em exceção do §5º (ação incondicionada).
- Confundir **dolo superveniente/inadimplemento** com estelionato (ou o inverso, na acusação).
- Citar **Súmula 554/246/521/244** sem conferir teor e vigência atuais.
- Afirmar **retroatividade do §5º** com um número de precedente **não verificado**.
- Improvisar **cálculo** de pena/multa/prescrição na peça em vez de usar as calculadoras.
- Esquecer o **privilégio (§1º)** e a **prescrição** como teses subsidiárias sempre disponíveis.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória:** toda peça/parecer é hipótese a confirmar; a revisão final do profissional responsável é indispensável antes de protocolar.
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Há **sanções reais** por jurisprudência inventada por IA.
- **Ética por polo:** **advocacia** — OAB / Provimento 205/2021 (comunicação e publicidade); **Ministério Público/assistente** — CNMP; **Defensoria** — LC 80/94. O chefe-roteador confirma o **polo** em `_criminalsquad/_memory/company.md` antes de orientar a redação (esta skill tem `polo_acusacao: true` — serve a ambos os polos, com foco majoritário em defesa).
- **Sigilo e LGPD:** dados de cliente/assistido nunca em repositório público (`acervo/casos/` é gitignored).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
