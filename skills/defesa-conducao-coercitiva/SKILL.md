---
name: defesa-conducao-coercitiva
description: >-
  Use ao IMPUGNAR ou prevenir a condução coercitiva do investigado/réu para INTERROGATÓRIO (CPP,
  art. 260) — orientar o cliente intimado sob risco de condução, arguir a nulidade/ilegalidade da
  medida, provocar responsabilização por abuso (Lei 13.869/2019) e distinguir da condução legítima
  para outros atos. Fundamento central: o STF, na ADPF 395 e na ADPF 444, declarou NÃO RECEPCIONADA
  a condução coercitiva para… Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, inquerito, analise, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-conducao-coercitiva"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-conducao-coercitiva", "defesa conducao", "conducao coercitiva"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa contra Condução Coercitiva (CPP, art. 260; STF ADPF 395 e 444)

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

Esta skill orienta a **impugnação e a prevenção da condução coercitiva** do investigado ou réu **para interrogatório**. Condução coercitiva é o ato de conduzir alguém, sob força policial, à presença da autoridade — sem prisão formal. A skill entrega três frentes: **orientação preventiva** ao cliente intimado sob ameaça de condução, **arguição de nulidade/ilegalidade** da medida (via habeas corpus ou nos próprios autos) e **provocação de responsabilização por abuso de autoridade** (Lei 13.869/2019). É conteúdo substantivo do instituto — o habeas corpus é apenas o veículo.

> **Lição central:** o STF (ADPF 395 e ADPF 444) declarou que a condução coercitiva **para interrogatório** não foi recepcionada pela Constituição — ela viola o **direito ao silêncio** e a **presunção de não culpabilidade**, porque ninguém é obrigado a produzir prova contra si (*nemo tenetur se detegere*), e o interrogatório é meio de defesa, não de prova. **Ninguém pode ser conduzido à força só para ser interrogado.** Antes de qualquer coisa, distinga: condução **para interrogatório** (vedada) × condução para **outro ato** legítimo (reconhecimento, acareação, exame — controvertida, mas fora do núcleo das ADPFs).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 260 do CPP** e a **eficácia/modulação** das ADPF 395 e 444 (decisão de plenário do STF, com efeito vinculante e *erga omnes*, mas cujo alcance exato quanto a atos diversos do interrogatório deve ser conferido). Confira também a **Lei 13.869/2019** (Lei de Abuso de Autoridade) e qualquer tese/tema superveniente via a skill `jurisprudencia-stj-stf` **antes de fundamentar a peça**. Não cite número de acórdão de memória.

## Base legal

- **Art. 260 do CPP** — autoriza a condução coercitiva do acusado que, intimado, não comparecer sem motivo justificado ("se o acusado não atender à intimação para o interrogatório, reconhecimento ou qualquer outro ato que, sem ele, não possa ser realizado, a autoridade poderá mandar conduzi-lo à sua presença"). **É este dispositivo que o STF reputou não recepcionado na parte "para o interrogatório".**
- **CF, art. 5º, LXIII** — direito de o preso permanecer calado (direito ao silêncio, extensível ao investigado/réu solto).
- **CF, art. 5º, LVII** — presunção de não culpabilidade (ninguém será considerado culpado até o trânsito em julgado).
- **CF, art. 5º, LIV** — devido processo legal; **LXVI** — não recolhimento à prisão quando cabível liberdade.
- **Pacto de São José da Costa Rica (CADH), art. 8º, 2, "g"** — direito de não ser obrigado a depor contra si mesmo (base convencional do *nemo tenetur*).
- **STF — ADPF 395 e ADPF 444 (Pleno, 2018)** — declararam a **não recepção** da expressão "para o interrogatório" do art. 260 do CPP; a condução coercitiva para interrogatório é ilícita e enseja responsabilidade. [NÃO VERIFICADO: conferir data, relatoria, tese exata de julgamento e eventual modulação via `jurisprudencia-stj-stf`.]
- **Lei 13.869/2019 (Abuso de Autoridade)** — tipifica condutas do agente público que executa medida privativa de liberdade ou constrição sem os pressupostos legais; base para a responsabilização de quem determina/executa condução ilegal. **Conferir o tipo penal específico aplicável ao caso** (ex.: constrangimento a depor sob ameaça; execução de medida com abuso).

## O que o STF decidiu — o núcleo das ADPF 395 e 444

- A condução coercitiva **para interrogatório** foi declarada **não recepcionada** pela CF/88 (incompatível com o direito ao silêncio e a presunção de inocência).
- **Fundamento:** o interrogatório é **meio de defesa** (não de prova) e o investigado tem o direito de **não comparecer** e de **permanecer calado**. Forçar o comparecimento apenas para interrogar viola o *nemo tenetur se detegere*.
- **Consequências fixadas:** a condução ilegal pode gerar **responsabilidade disciplinar, civil e penal** do agente, **ilicitude da prova** eventualmente obtida e **nulidade** dos atos dela decorrentes.
- **Efeito:** decisão de **controle concentrado**, com eficácia **vinculante e erga omnes** — vale para todo o país. [NÃO VERIFICADO: confirmar alcance e eventual modulação temporal via `jurisprudencia-stj-stf`.]

> **A distinção que decide o caso.** As ADPFs trataram da condução **para interrogatório**. A condução para **outros atos** (reconhecimento pessoal, acareação, exame de corpo de delito que dependa da presença) **não foi objeto direto** da declaração de não recepção — o art. 260, nessa parte, segue existindo, embora sujeito a controle de necessidade, proporcionalidade e à impossibilidade de o ato ser realizado sem a pessoa. **Classifique o ato ANTES de escolher a tese:** se é interrogatório → tese constitucional das ADPFs (vedação direta); se é outro ato → atacar necessidade, proporcionalidade e ausência dos pressupostos do art. 260.

## Metodologia — três frentes de atuação

### Frente 1 — Orientação preventiva (cliente intimado sob risco de condução)

1. **Ler a intimação:** qual o ato designado? (interrogatório, oitiva, reconhecimento?) Quem intima (delegado, MP, juiz)? Há menção a condução coercitiva em caso de não comparecimento?
2. **Se o ato é interrogatório do investigado/réu:** orientar que **há direito de não comparecer** e de permanecer em silêncio (CF, art. 5º, LXIII). Recomenda-se **peticionar previamente** informando que o cliente exercerá o direito ao silêncio e/ou apresentará defesa por escrito, **prevenindo** a condução (que seria ilegal à luz das ADPFs).
3. **Comunicação formal à autoridade:** protocolar petição/ofício invocando as ADPF 395/444 e requerendo que **não se expeça mandado de condução para interrogatório**, sob pena de responsabilização.
4. **Preparar o HC preventivo** (salvo-conduto) se houver ameaça concreta e iminente de condução ilegal (ver Frente 2).
5. **Cautela:** o direito de não comparecer ao **interrogatório** não se estende automaticamente a **outros atos** nem dispensa o cliente de justificar ausências a atos legítimos. Avaliar caso a caso.

### Frente 2 — Impugnação (a medida foi determinada ou executada)

**Via preventiva (ameaça iminente):** **Habeas corpus preventivo** (salvo-conduto), para impedir a expedição/cumprimento do mandado de condução para interrogatório. Cabível quando há **justo receio** de coação ilegal à liberdade de locomoção (CF, art. 5º, LXVIII; CPP, art. 647-648).

**Via repressiva (medida já executada):**
1. **Habeas corpus liberatório/corretivo** — para cessar a coação, se ainda em curso, e **declarar a ilegalidade** da condução consumada, com os efeitos de nulidade.
2. **Arguição de nulidade nos próprios autos** — requerer o **reconhecimento da ilicitude** da condução e o **desentranhamento/inutilização** de toda prova dela derivada (teoria dos frutos da árvore envenenada — art. 157, §1º, CPP).
3. **Pedido de responsabilização** — representação ao órgão correcional e/ou notícia-crime por abuso de autoridade (Frente 3).

**Fundamentos da peça (interrogatório):**
- Não recepção do art. 260 do CPP, parte "para o interrogatório" (ADPF 395/444).
- Violação do direito ao silêncio e da presunção de não culpabilidade (CF, art. 5º, LXIII e LVII).
- Ilicitude da prova obtida e nulidade dos atos derivados (art. 157, CPP).

### Frente 3 — Responsabilização por abuso (Lei 13.869/2019)

1. **Documentar** a ilegalidade (cópia do mandado, boletim, testemunhas, horário, uso de força).
2. **Representação disciplinar** à corregedoria (Polícia/MP) e, se for o caso, **notícia-crime** por abuso de autoridade.
3. **Requerer a responsabilização** já na própria peça de impugnação (o STF, nas ADPFs, afirmou o cabimento de responsabilidade do agente).
4. **Cautela:** o abuso de autoridade exige **dolo específico/elemento subjetivo especial** (a lei veda a criminalização por mera divergência de interpretação — conferir o tipo e o elemento subjetivo aplicável). Não prometer condenação; sustentar a tese com prudência.

## Teses

**Teses defensivas (fortes):**
- **Tese constitucional (interrogatório):** a condução coercitiva para interrogatório é **ilícita** (ADPF 395/444); o investigado tem direito de não comparecer e de calar (CF, art. 5º, LXIII e LVII). É a tese-mãe.
- **Ilicitude probatória:** prova obtida na/pela condução ilegal é **ilícita** e contamina os atos derivados (art. 157 e §1º, CPP) — desentranhamento.
- **Salvo-conduto preventivo:** havendo ameaça concreta de condução para interrogatório, cabe **HC preventivo** para obstá-la.
- **Ausência de pressupostos (outros atos):** mesmo fora do interrogatório, a condução exige que o ato **não possa ser realizado sem a pessoa** e observe **necessidade e proporcionalidade** (art. 260, parte final) — atacar quando o ato podia ser feito de outro modo ou a pessoa sequer foi previamente intimada.
- **Falta de intimação prévia válida:** o art. 260 pressupõe **intimação regular** e **ausência injustificada**; sem intimação válida (ou havendo justificativa), a condução é ilegal por si.

**Contra-teses (acusação) e como respondê-las:**
- *"A condução foi para outro ato, não interrogatório."* → Verificar a **finalidade real**: se, a pretexto de reconhecimento/oitiva, o objetivo era **interrogar**, incide a vedação das ADPFs (fraude à decisão do STF). Exigir demonstração da imprescindibilidade do ato.
- *"Houve mera intimação, sem coação."* → Se houve **força/ameaça de força** ou mandado de condução, houve constrição da liberdade de locomoção — cabe HC.
- *"A prova seria descoberta de qualquer modo."* → Discutir a **fonte independente / descoberta inevitável** (art. 157, §§, CPP) com rigor: o ônus de demonstrar a fonte lícita autônoma é da acusação.

## Modelo — Habeas Corpus (preventivo/liberatório) — esqueleto

```
EXCELENTÍSSIMO SENHOR DOUTOR DESEMBARGADOR RELATOR DO [TRIBUNAL COMPETENTE]
[ou JUIZ, conforme a autoridade coatora]

[IMPETRANTE — advogado], inscrito na OAB/[UF] nº [Nº], vem impetrar

HABEAS CORPUS [PREVENTIVO / LIBERATÓRIO], com pedido de LIMINAR,

em favor de [PACIENTE], apontando como autoridade coatora [DELEGADO/MP/JUÍZO],
pelas razões a seguir.

I — DOS FATOS
[Narrar: intimação, ato designado (interrogatório), ameaça/expedição de mandado
de condução coercitiva; se já executada, descrever a execução, força empregada,
horário e testemunhas.]

II — DO DIREITO
a) A condução coercitiva para interrogatório não foi recepcionada pela CF/88
   (STF, ADPF 395 e 444) — [conferir e citar via jurisprudencia-stj-stf].
b) Violação do direito ao silêncio (CF, art. 5º, LXIII) e da presunção de não
   culpabilidade (art. 5º, LVII); nemo tenetur se detegere (CADH, art. 8º, 2, "g").
c) [Se já executada:] ilicitude da prova e nulidade dos atos derivados (art. 157, CPP).
d) [Preventivo:] justo receio de coação iminente à liberdade de locomoção.

III — DA LIMINAR
Presentes o fumus boni iuris (vedação das ADPFs) e o periculum in mora (iminência
da condução), requer-se liminarmente [salvo-conduto para impedir a condução para
interrogatório / a cessação imediata da coação].

IV — DO PEDIDO
a) concessão da LIMINAR [salvo-conduto / cessação];
b) no mérito, a CONCESSÃO DA ORDEM para [obstar / declarar ilegal] a condução
   coercitiva para interrogatório;
c) [se cabível] o reconhecimento da ilicitude da prova dela derivada e seu
   desentranhamento (art. 157, CPP);
d) a comunicação à corregedoria para apuração de eventual abuso (Lei 13.869/2019).

Termos em que, pede deferimento.
[LOCAL], [DATA]. [ADVOGADO] — OAB/[UF] nº [Nº]
```

**Campos a preencher:** [TRIBUNAL/JUÍZO], [IMPETRANTE], [UF], [Nº OAB], [PACIENTE], [AUTORIDADE COATORA], fatos, [LOCAL], [DATA].

> **Onde protocolar:** a competência para o HC depende da **autoridade coatora** (delegado/MP → 1ª instância; juiz de 1º grau → tribunal; e assim por diante). Confirmar a competência antes de impetrar.

## Documentos a instruir

1. Procuração/substabelecimento (ou impetração por qualquer pessoa, já que o HC dispensa advogado — mas identificar o impetrante).
2. Cópia da **intimação** e do **mandado de condução** (se existir).
3. **Prova da ameaça** (preventivo) ou da **execução** (liberatório): boletim, relato, testemunhas, mídia.
4. Documentos que comprovem a condição de investigado/réu (se necessário à demonstração de que o ato é interrogatório).

## Erros comuns / anti-padrões (evitar)

- **Confundir condução para interrogatório (vedada) com condução para outro ato** — a tese muda; identifique a finalidade real.
- **Aceitar rótulo formal** ("é só uma oitiva") quando o objetivo real é interrogar — apontar a fraude à decisão do STF.
- **Orientar o cliente a simplesmente "não aparecer" sem peticionar** — o correto é **comunicar formalmente** o exercício do direito ao silêncio/não comparecimento, criando prova e prevenindo a condução.
- **Impetrar HC na instância errada** — a competência segue a autoridade coatora.
- **Prometer condenação por abuso de autoridade** — o tipo exige elemento subjetivo especial e a lei veda criminalizar a mera interpretação; sustentar com prudência.
- **Citar número de ADPF/HC de memória** — passar tudo por `jurisprudencia-stj-stf`; melhor faltar precedente do que inventar.
- **Esquecer de pedir o desentranhamento** da prova ilícita derivada quando a condução já foi executada (art. 157, CPP).

## Checklist final

- [ ] Qual o **ato** designado — interrogatório (vedação direta) ou outro ato (necessidade/proporcionalidade)?
- [ ] Houve **intimação prévia válida** e **ausência injustificada** (pressupostos do art. 260)?
- [ ] A ameaça é **iminente** (HC preventivo) ou a medida já foi **executada** (HC liberatório + nulidade)?
- [ ] A **autoridade coatora** foi corretamente identificada e a **competência** do HC conferida?
- [ ] Fundamentos: **ADPF 395/444** + CF, art. 5º, LXIII e LVII + **art. 157 CPP** (se houver prova a desentranhar)?
- [ ] Pedido de **responsabilização por abuso** (Lei 13.869/2019), com prudência sobre o elemento subjetivo?
- [ ] Petição preventiva de **comunicação formal** à autoridade (exercício do silêncio) protocolada, quando cabível?
- [ ] **Citações conferidas** via `jurisprudencia-stj-stf` e **revisão humana** do advogado responsável?

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho, não peça final. A responsabilidade pela impetração, pela estratégia e pelas afirmações é sempre do **advogado** (EAOAB e Código de Ética — CED). **Nenhum precedente (número de ADPF/HC, informativo, tema) deve ser citado de memória:** toda jurisprudência e o alcance atual das ADPF 395/444 passam **obrigatoriamente** pelo gate da skill `jurisprudencia-stj-stf` antes do uso. Na dúvida, **omitir vence inventar**. Confira sempre a **vigência** do art. 260 do CPP e da Lei 13.869/2019 antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
