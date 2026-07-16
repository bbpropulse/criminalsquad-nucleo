---
name: defesa-captacao-ilicita-sufragio-41a
description: >-
  Use ao defender candidato/representado em representação por captação ilícita de sufrágio (art.
  41-A da Lei 9.504/97) — ilícito CÍVEL-eleitoral (multa + cassação de registro/diploma), NÃO crime.
  Teses: ausência de participação/anuência do candidato, inexistência de pedido explícito/implícito
  de voto, exigência de PROVA ROBUSTA, atipicidade da conduta anterior ao registro e distinção do
  crime penal (art. 299 CE). Rascunho… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, peca, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-captacao-ilicita-sufragio-41a"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-captacao-ilicita-sufragio-41a", "defesa captacao", "ilicita sufragio"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Captação Ilícita de Sufrágio (art. 41-A da Lei 9.504/97)

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

Esta skill orienta a **defesa do candidato ou de terceiro representado** na **representação por captação ilícita de sufrágio** (art. 41-A da Lei 9.504/97): a conduta de **doar, oferecer, prometer ou entregar** ao eleitor bem ou vantagem pessoal, **com o fim de obter-lhe o voto**, do registro à eleição. A sanção é **cível-eleitoral** — multa e **cassação do registro ou do diploma** —, **não** pena privativa de liberdade.

> **Lição central:** o art. 41-A **não é crime** — é **ilícito eleitoral** de natureza cível, julgado por **representação** (não por denúncia), com **standard probatório próprio (prova robusta)** e sanção de multa + cassação. O erro capital da defesa é tratá-lo como o **crime do art. 299 do Código Eleitoral** (corrupção eleitoral, esse sim penal). **Separe os dois desde a primeira linha** — a resposta, o rito, o standard e as teses são diferentes.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 41-A e §§ da Lei 9.504/97** e do **art. 22 da LC 64/90** (rito da representação/AIJE). O art. 41-A foi introduzido pela **Lei 9.840/99** e teve parágrafos acrescidos pela **Lei 12.034/2009** (§§1º a 4º — participação/anuência do candidato, aplicação do art. 22 da LC 64/90, dispensa de potencialidade, sanção pecuniária). Súmulas do TSE, temas e overruling **mudam com frequência em matéria eleitoral** — confira tudo via a skill `jurisprudencia-stj-stf` (e a fonte oficial do TSE) antes de fundamentar a peça.

## Polo e alcance desta skill

> **Atenção ao polo (a spec marca `polo_acusacao: true`).** Esta matéria pode ser manejada tanto pela **acusação/legitimados ativos** (candidato adversário, partido, coligação, federação, Ministério Público Eleitoral) quanto pela **defesa** do representado. **O foco desta skill é a DEFESA** do candidato/terceiro. Se o roteador estiver operando no **polo acusatório** (MP Eleitoral / representante), confirme o polo antes de reaproveitar as teses — o roteiro de **prova da captação** (elemento subjetivo, robustez do conjunto, gravidade) é o **espelho** do roteiro defensivo aqui descrito. **O roteador deve conferir o polo do escritório** (`_criminalsquad/_memory/company.md`) antes de escolher o eixo argumentativo.

## Natureza jurídica — o divisor de águas

| Aspecto | Art. 41-A (Lei 9.504/97) | Art. 299 do Código Eleitoral |
|---|---|---|
| Natureza | **Cível-eleitoral** (ilícito) | **Crime** (penal eleitoral) |
| Peça inaugural | **Representação** | Denúncia |
| Rito | **Art. 22 da LC 64/90** (AIJE) | Processo penal eleitoral (arts. 355 e ss. CE) |
| Sanção | **Multa + cassação de registro/diploma** | **Pena privativa de liberdade** + multa |
| Standard | **Prova robusta** (conjunto seguro) | Prova além da dúvida razoável (penal) |
| Bem tutelado | Legitimidade/normalidade do pleito, vontade do eleitor | Liberdade do voto (tutela penal) |

> **Consequência prática:** os fatos podem gerar **as duas ações em paralelo** (a representação do 41-A **e** a ação penal do 299), independentes entre si. A absolvição/rejeição em uma **não** vincula automaticamente a outra (instâncias distintas), salvo negativa categórica de existência do fato ou de autoria na esfera penal (art. 935 CC, por analogia — **conferir** o alcance atual dessa comunicação de instâncias via `jurisprudencia-stj-stf`).

## Base legal

- **Art. 41-A da Lei 9.504/97** — núcleo da conduta: doar, oferecer, prometer ou entregar bem ou vantagem pessoal de qualquer natureza, inclusive emprego ou função pública, **com o fim de obter o voto**, desde o **registro da candidatura** até o dia da eleição.
- **Art. 41-A, §1º** — para caracterização, é necessária a **participação ou anuência do candidato**, comprovada a qualquer momento.
- **Art. 41-A, §2º** — **dispensa** de demonstração de potencialidade lesiva; basta a **gravidade** das circunstâncias.
- **Art. 41-A, §3º e §4º** — aplicação do **art. 22 da LC 64/90** (rito) e sanção pecuniária (multa de mil a cinquenta mil UFIR, ou valor equivalente), além da cassação.
- **Art. 22 da LC 64/90** — rito da representação/AIJE (prazos, produção de prova, julgamento).
- **Art. 299 do Código Eleitoral** — o **crime** de corrupção eleitoral (distinto — não confundir).
- **Art. 14, §9º, da CF** — proteção à normalidade e legitimidade das eleições (fundamento constitucional do bem jurídico tutelado).

## Os três elementos da captação ilícita (o que a acusação precisa provar — e a defesa desconstrói)

Para a procedência do 41-A, o conjunto probatório deve demonstrar, de forma **robusta**, **três** pilares. A defesa ataca qualquer um deles (basta derrubar **um** para a improcedência):

1. **Conduta material** — ato de **doar, oferecer, prometer ou entregar** bem ou vantagem **pessoal** ao eleitor (a vantagem deve ser destinada ao eleitor individualmente; benefício difuso/coletivo é discutível — ver teses).
2. **Fim específico (dolo) de obter o voto** — a **finalidade eleitoral** da vantagem, no período protegido (do registro à eleição). Sem o *especial fim de agir*, a conduta é atípica para o 41-A.
3. **Participação ou anuência do candidato** (art. 41-A, §1º) — quando a captação é imputada ao candidato, é indispensável demonstrar que ele **participou** do ato ou com ele **anuiu**. Ato isolado de cabo eleitoral, sem liame com o candidato, **não** o alcança.

## Roteiro de defesa — teses típicas (do mais forte ao mais sutil)

### 1. Ausência de participação ou anuência do candidato (§1º) — tese de ouro
Quando o ato é atribuído a **terceiro** (cabo eleitoral, apoiador, correligionário), a cassação do candidato **exige** prova de sua **participação direta** ou **anuência** (art. 41-A, §1º). A defesa sustenta:
- **Inexistência de liame** entre o ato do terceiro e o candidato (não basta a mera condição de beneficiário do pleito).
- **Não se presume anuência** da relação partidária/pessoal; ela deve ser **comprovada**.
- Atos de campanha praticados por múltiplos apoiadores não convertem cada excesso individual em responsabilidade do candidato.

### 2. Inexistência do fim de obter o voto (atipicidade subjetiva)
A vantagem sem **finalidade eleitoral demonstrada** não configura o 41-A. A defesa sustenta:
- **Assistencialismo/relação preexistente:** doação/ajuda **habitual**, anterior e alheia ao contexto eleitoral (ex.: prática assistencial contínua, relação de amizade/parentesco), sem vínculo com pedido de voto.
- **Ausência de pedido de voto** explícito **ou** implícito no ato — a entrega de bem, isolada, sem o elemento finalístico, é atípica.
- **Contemporaneidade e contexto** não bastam por si; exige-se o *especial fim de agir*.

### 3. Exigência de prova robusta — o standard probatório (tese processual central)
A jurisprudência eleitoral exige **prova robusta, segura e idônea** para a cassação (medida das mais graves do sistema eleitoral). A defesa ataca:
- **Prova exclusivamente testemunhal frágil**, contraditória, de testemunha suspeita/interessada (adversário, correligionário do denunciante).
- **Indícios e ilações** que não formam conjunto seguro (dúvida milita em favor do representado).
- **Prova ilícita** (gravação clandestina sem os requisitos, degravação sem cadeia de custódia — ver skill `cadeia-de-custodia`; interceptação/print sem perícia).
- **In dubio pro reo eleitoral:** na dúvida sobre a robustez, a representação é **improcedente**; a cassação não se decreta sobre prova precária.

### 4. Atipicidade temporal — conduta anterior ao registro
O 41-A tem **marco temporal**: do **registro da candidatura** até o dia da eleição. Conduta **anterior ao pedido de registro** **não** se subsume ao 41-A (podendo, quando muito, atrair outras figuras — ex.: abuso de poder econômico pela via própria, ou o crime do 299, com pressupostos distintos). A defesa afasta a subsunção quando o fato é pré-registro.

### 5. Distinção do art. 299 CE — não importar o penal para o cível
Se a representação (ou a peça adversa) **importa a moldura do crime do 299** (dolo penal, tipicidade estrita, etc.) para o ilícito cível, a defesa aponta a **impropriedade técnica** e, de outro lado, quando há **também** ação penal, sustenta a **independência das instâncias** e o **standard penal mais exigente** para eventual absolvição criminal.

### 6. Ausência/relativização da gravidade das circunstâncias (§2º)
Embora o §2º **dispense a potencialidade lesiva**, exige **gravidade das circunstâncias**. A defesa sustenta que o ato **isolado, de pequena expressão e sem gravidade**, não autoriza a sanção máxima (cassação) — pleiteando, na hipótese remota de reconhecimento, a **dosimetria** proporcional (multa, e não cassação, conforme as circunstâncias). **Confirme o estado atual do debate sobre gravidade × potencialidade no TSE** via `jurisprudencia-stj-stf`.

## Teses e contra-teses (defesa × acusação)

| Tese defensiva | Contra-tese (acusação/legitimado ativo) |
|---|---|
| Ato de terceiro sem anuência do candidato (§1º) | Anuência **comprovada** por contexto, mensagens, hierarquia de campanha, benefício direto e ciência |
| Ausência de fim de obter o voto (assistencialismo) | Contemporaneidade ao pleito + pedido de voto (explícito/implícito) + seletividade dos beneficiários |
| Prova frágil/testemunhal isolada | Conjunto robusto: testemunhas + mídia + degravação idônea + coerência |
| Conduta anterior ao registro (atipicidade temporal) | Fato dentro do período protegido, ou reiteração que se projeta ao período |
| Prova ilícita (gravação/print sem perícia/custódia) | Prova lícita (gravação por um dos interlocutores; perícia; cadeia íntegra) |
| Gravidade ausente → no máximo multa | Gravidade das circunstâncias caracterizada (§2º) → cassação |

## Estrutura da peça (defesa / contestação na representação)

Rito do **art. 22 da LC 64/90**: notificado, o representado apresenta **defesa** em prazo próprio (confira o prazo vigente no art. 22, I, "a", da LC 64/90). Estrutura sugerida:

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) ELEITORAL DA [Nª] ZONA ELEITORAL DE [MUNICÍPIO]
[ou] EGRÉGIO TRIBUNAL REGIONAL ELEITORAL DE [UF]   (conforme a competência)


Representação (Captação Ilícita de Sufrágio — art. 41-A da Lei 9.504/97) nº [Nº]
Representante: [NOME]
Representado(a): [NOME DO CANDIDATO/TERCEIRO]


[NOME DO(A) REPRESENTADO(A)], já qualificado(a), por seu advogado que esta subscreve
(procuração/substabelecimento anexos), vem, respeitosamente, à presença de Vossa
Excelência, com fundamento no art. 22 da LC 64/90, apresentar

DEFESA

em face da representação em epígrafe, pelas razões de fato e de direito a seguir.


I — SÍNTESE DA REPRESENTAÇÃO
[Resumir a imputação: qual conduta, atribuída a quem, com que prova.]


II — PRELIMINARES (se houver)
a) Ilegitimidade ativa/passiva; b) inépcia da inicial; c) inadequação da via
(matéria de abuso de poder pela via própria); d) prova ilícita a ser desentranhada
(gravação clandestina/print sem perícia — cadeia de custódia); e) decadência/prazo.


III — DO MÉRITO — DA NÃO CONFIGURAÇÃO DO ART. 41-A

a) Da natureza cível-eleitoral e do standard de PROVA ROBUSTA
A cassação exige prova robusta, segura e idônea; indícios e prova testemunhal
frágil/interessada não a autorizam (in dubio pro reo eleitoral).

b) Da ausência de participação ou anuência do(a) candidato(a) (§1º)
[Se a imputação parte de ato de terceiro: demonstrar a inexistência de liame,
participação ou anuência — a mera condição de beneficiário não basta.]

c) Da inexistência do fim de obter o voto (atipicidade subjetiva)
[Assistencialismo/relação preexistente; ausência de pedido de voto explícito ou
implícito; contexto que afasta o especial fim de agir.]

d) Da atipicidade temporal (se aplicável)
[Conduta anterior ao registro da candidatura — fora do marco do art. 41-A.]

e) Da ausência de gravidade das circunstâncias (§2º)
[Ato isolado, de pequena expressão; no máximo, dosimetria proporcional — multa,
não cassação.]


IV — DA PROVA
[Requerer produção: oitiva de testemunhas arroladas, perícia na mídia impugnada,
juntada de documentos que comprovem a relação preexistente/assistencial, etc.
Prazo e forma do art. 22 da LC 64/90.]


V — DOS PEDIDOS
Requer:
a) o acolhimento das preliminares [e o desentranhamento da prova ilícita];
b) no mérito, a IMPROCEDÊNCIA da representação, por ausência dos requisitos do
   art. 41-A (participação/anuência, fim de obter o voto, prova robusta);
c) subsidiariamente, caso superado o acima, a aplicação apenas de MULTA, afastada
   a cassação, por ausência de gravidade das circunstâncias (§2º);
d) a produção das provas requeridas.

Termos em que, pede deferimento.

[LOCAL], [DATA].
[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [ZONA/TRE], [MUNICÍPIO/UF], [Nº DA REPRESENTAÇÃO], [REPRESENTANTE], [REPRESENTADO], [SÍNTESE DA CONDUTA], [PROVAS A IMPUGNAR], [TESTEMUNHAS], [LOCAL], [DATA], [ADVOGADO], [UF], [NÚMERO OAB].

## Documentos e provas a considerar

1. Procuração/substabelecimento.
2. Documentos que comprovem **relação preexistente/assistencial** (afasta o fim eleitoral).
3. Elementos que demonstrem a **ausência de liame** com o candidato (para a tese do §1º).
4. Impugnação técnica à **prova adversa** (perícia na mídia; questionamento de degravação e de cadeia de custódia — ver `cadeia-de-custodia`).
5. Rol de testemunhas (observado o limite do rito).

## Súmulas, temas e precedentes (sob o Citation Gate — NÃO citar de memória)

> **Regra inegociável:** todo enunciado sumular, tema ou acórdão do **TSE/TREs/STF** abaixo é **linha de tese**, não citação pronta. **Número de súmula, ementa e tese devem ser conferidos** via `jurisprudencia-stj-stf` e na base oficial do TSE **antes** de ir para a peça. Em matéria eleitoral a jurisprudência **oscila** — prefira ensinar a tese e o **dispositivo legal** (que é certo) a arriscar um número.

- **Standard de "prova robusta" para cassação** — orientação consolidada de que a cassação por 41-A reclama prova **segura e idônea**, não bastando indícios. [Enunciado/tese a confirmar no TSE — NAO VERIFICADO; conferir via `jurisprudencia-stj-stf`.]
- **Dispensa de potencialidade, exigência de gravidade (§2º, Lei 12.034/2009)** — o texto legal é certo; a **modulação jurisprudencial** de "gravidade das circunstâncias" deve ser conferida. [NAO VERIFICADO — conferir tese atual.]
- **Independência entre a representação (41-A) e a ação penal (299)** — instâncias distintas; a repercussão de uma na outra segue regras próprias. [Alcance a confirmar — NAO VERIFICADO.]
- **Súmulas do TSE eventualmente aplicáveis** (ex.: prova, prazo, litisconsórcio do candidato beneficiado) — **não invente número**; localize a súmula pertinente na base oficial. [NAO VERIFICADO — conferir via `jurisprudencia-stj-stf`.]

**Dispositivos que podem ser citados com certeza** (após conferir a redação vigente): art. 41-A e §§ da Lei 9.504/97; art. 22 da LC 64/90; art. 299 do Código Eleitoral; art. 14, §9º, da CF.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- **Tratar o 41-A como crime** — invocar excludentes penais, princípios da denúncia, prescrição penal do 299 no lugar do rito cível-eleitoral.
- **Aceitar a cassação sobre prova frágil** — não exigir o standard de **prova robusta**.
- **Ignorar o §1º** — deixar de atacar a **ausência de participação/anuência** quando o ato é de terceiro (é a tese mais forte quando cabível).
- **Confundir gravidade (exigida) com potencialidade (dispensada)** pelo §2º — e não pleitear a dosimetria (multa em vez de cassação) na hipótese subsidiária.
- **Não impugnar a prova ilícita** (gravação/print/degravação sem perícia e sem cadeia de custódia).
- **Perder o prazo** do art. 22 da LC 64/90 (rito é célere; a tempestividade é crucial — confira via `calculadora-tempestividade`).
- **Citar súmula/precedente de memória** — em matéria eleitoral o número erra e o overruling é frequente.

**Checklist da defesa:**
- [ ] A peça trata o 41-A como **ilícito cível-eleitoral** (representação, art. 22 LC 64/90), e não como crime?
- [ ] A conduta está **dentro** do marco temporal (registro → eleição)? Se anterior, arguiu-se a **atipicidade temporal**?
- [ ] Quando o ato é de **terceiro**, atacou-se a **ausência de participação/anuência** do candidato (§1º)?
- [ ] Sustentou-se a **inexistência do fim de obter o voto** (assistencialismo/relação preexistente; ausência de pedido de voto)?
- [ ] Exigiu-se **prova robusta** e apontou-se a fragilidade/ilicitude da prova adversa (perícia + cadeia de custódia)?
- [ ] Diferenciou-se expressamente do **crime do art. 299 CE** (e, havendo ação penal, invocou-se a independência das instâncias)?
- [ ] Pleiteou-se, **subsidiariamente**, apenas **multa** (afastada a cassação) por ausência de gravidade (§2º)?
- [ ] **Prazo do art. 22 LC 64/90** conferido (tempestividade — `calculadora-tempestividade`)?
- [ ] Toda súmula/tema/acórdão passou pelo **Citation Gate** (`jurisprudencia-stj-stf` + base oficial do TSE)?
- [ ] **Polo conferido** (defesa × acusação) conforme o `company.md`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da peça; a responsabilidade pela tese, pela prova e pelo protocolo é sempre do **advogado** (CED/CFOAB; Provimento 205/2021 na comunicação; conflito de interesses do art. 17 do EAOAB checado na triagem).
- **Ética por polo.** Se a atuação for do **Ministério Público Eleitoral** (polo acusatório), observar as balizas do **CNMP**; se da **Defensoria**, a **LC 80/94**. **Confirme o polo** em `_criminalsquad/_memory/company.md` — a spec marca `polo_acusacao: true`, e o eixo argumentativo muda conforme o lado.
- **Citation Gate inegociável.** Nenhuma súmula/tese/acórdão do TSE/STF vai à peça sem verificação (`jurisprudencia-stj-stf` + fonte oficial). Em matéria eleitoral, **omitir vence inventar**.
- **Vigência.** Conferir a redação atual do art. 41-A da Lei 9.504/97 e do art. 22 da LC 64/90, e a jurisprudência do TSE, antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
