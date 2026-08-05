---
name: perdao-judicial-transito
description: >-
  Use ao requerer PERDÃO JUDICIAL nos crimes culposos de trânsito — homicídio culposo (art. 302 CTB
  c/c art. 121, §5º, CP) e lesão corporal culposa (art. 303 CTB c/c art. 129, §8º, CP) — quando as
  consequências da infração atingem o próprio agente de forma tão grave que a sanção penal se torna
  desnecessária. Gatilhos: perdão judicial no trânsito, art. 121 §5º CP, art. 129 §8º CP,
  consequências que atingem o próprio agente… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, transito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-perdao-judicial-transito"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["perdao-judicial-transito", "perdao judicial", "judicial transito"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Perdão Judicial em Crime Culposo de Trânsito (art. 121, §5º / art. 129, §8º, CP)

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

Esta skill orienta o **requerimento de perdão judicial** nos crimes culposos de trânsito — **homicídio culposo** (art. 302 do CTB, remetido ao art. 121, §5º, do CP) e **lesão corporal culposa** (art. 303 do CTB, remetido ao art. 129, §8º, do CP) — quando **as consequências da infração atingiram o próprio agente de modo tão grave que a pena se tornou desnecessária**. É causa **extintiva da punibilidade** (art. 107, IX, CP): o juiz reconhece o crime, mas **deixa de aplicar a pena**.

> **Lição central:** o perdão judicial **não discute o crime, discute a pena.** A tese admite o fato culposo e a autoria e sustenta que a sanção é **inútil** porque o próprio agente já sofreu de forma extraordinária (perdeu ente querido, ficou gravemente ferido, carrega sequela permanente). **Não confunda com a defesa que nega a culpa** — ali se ataca a tipicidade/imprudência; aqui se **admite** e se pede a dispensa. Escolha a via (ou proponha em ordem sucessiva: absolvição em primeiro lugar, perdão como pedido subsidiário).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **CTB (Lei 9.503/97)** — arts. 291 a 303 —, do **art. 121, §5º**, e do **art. 129, §8º, do CP**, bem como da **Súmula 18/STJ** e de qualquer tese repetitiva sobre perdão judicial. O CTB sofreu alterações relevantes (entre outras, **Leis 12.971/2014, 13.281/2016 e 13.546/2017**, esta última criando as figuras qualificadas de embriaguez/velocidade). Antes de fundamentar, passe todo dispositivo, súmula ou precedente pelo gate `verificacao-citacoes` e confirme overruling/vigência via `jurisprudencia-stj-stf`.

## Natureza jurídica — o que se está pedindo

- **Causa extintiva da punibilidade** (art. 107, IX, CP). Reconhecido o perdão, o Estado **abdica da pretensão punitiva**; o réu não cumpre pena.
- **Direito subjetivo do réu (não é favor discricionário):** presentes os pressupostos legais, o juiz **deve** conceder — não é mera faculdade de conveniência. A defesa sustenta o **dever** de conceder, não um pedido de clemência.
- **Sentença declaratória de extinção da punibilidade, não condenatória** — **Súmula 18/STJ**: *"a sentença concessiva do perdão judicial é declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório"*. Consequência prática decisiva: **não gera reincidência, não lança o nome no rol dos culpados, não obriga custas** e **não serve de título executivo** para a reparação civil. Sempre invocar a Súmula 18 para blindar o cliente dos efeitos secundários.
- **Momento e forma:** o perdão pode ser requerido na **resposta à acusação**, nas **alegações finais** e reconhecido na **sentença** (inclusive de ofício pelo juiz). Como o pressuposto é fático (a gravidade do que atingiu o agente), **em regra a instrução deve demonstrá-lo**; por isso o pedido costuma ser deduzido/reforçado nas **alegações finais**, embora deva ser semeado desde a resposta.

## Base legal

- **Art. 121, §5º, CP** — homicídio culposo: *"o juiz poderá deixar de aplicar a pena se as consequências da infração atingirem o próprio agente de forma tão grave que a sanção penal se torne desnecessária"*.
- **Art. 129, §8º, CP** — lesão corporal culposa: aplica-se **o disposto no art. 121, §5º** (mesma hipótese de perdão).
- **Art. 302 do CTB (Lei 9.503/97)** — homicídio culposo na direção de veículo automotor (remissão ao regime do CP, inclusive quanto ao perdão).
- **Art. 303 do CTB** — lesão corporal culposa na direção de veículo automotor.
- **Art. 291, caput e §1º, do CTB** — aplicação subsidiária do CP e do CPP; nas lesões culposas simples, cabimento da **transação/composição** e representação (ver adiante a interação com o perdão).
- **Art. 107, IX, CP** — o perdão judicial extingue a punibilidade.
- **Súmula 18/STJ** — natureza **declaratória** da sentença; **sem efeitos condenatórios**.

## O pressuposto central — "consequências que atingem o próprio agente"

A lei exige que a consequência da infração recaia **sobre o próprio agente** de forma **tão grave** que a pena se torne **desnecessária**. Duas grandes situações fundam a tese:

1. **Consequência afetiva/moral (a mais forte):** morte ou lesão grave de **pessoa ligada ao agente por laço afetivo** — cônjuge, filho, pai/mãe, irmão, amigo próximo — transportada no veículo ou envolvida no acidente. A dor da perda é a própria punição; a pena estatal nada acrescenta.
2. **Consequência física ao próprio agente:** o condutor sai do acidente **gravemente ferido**, com **sequela permanente** (paraplegia, amputação, lesão incapacitante), de sorte que já carrega punição corporal severa.

Pontos técnicos que decidem o pedido:

- **Prova do laço afetivo é ônus da defesa** e deve ser robusta: certidão de nascimento/casamento, prova de convivência, depoimentos, laudos. Não basta parentesco formal distante — o que importa é o **vínculo real** cujo rompimento gera sofrimento extraordinário.
- **A gravidade se afere no caso concreto**, não em abstrato. Demonstrar, com laudos médicos e psicológicos, a **extensão do sofrimento** (físico e/ou psíquico) do agente.
- **Desnecessidade da pena** é o juízo final: articular que qualquer sanção seria **puni-lo duas vezes** pelo mesmo fato, sem função retributiva ou preventiva útil.

## Roteiro de análise e defesa (passo a passo)

1. **Classifique o tipo:** homicídio culposo (302 CTB → 121, §5º) ou lesão culposa (303 CTB → 129, §8º)? Confirme a **culpa** (imprudência/negligência/imperícia) e a **ausência de dolo** — o perdão é **incompatível com dolo** (inclusive dolo eventual: se a acusação imputa dolo eventual, ex. "racha"/embriaguez extrema, primeiro **desqualifique para culpa** — ver `defesa-homicidio-lesao-culposa-transito` e a linha divisória dolo eventual × culpa consciente).
2. **Escolha a via e a ordem dos pedidos:** (a) **absolvição** (atipicidade/ausência de culpa/causalidade) como principal; (b) **perdão judicial** como pedido **subsidiário**, para o caso de o juízo reconhecer a culpa. Deduzir os dois em ordem sucessiva é tecnicamente correto e não é contraditório (eventualidade da defesa).
3. **Identifique o pressuposto do perdão:** laço afetivo réu-vítima? Lesão grave ao próprio agente? Sequela permanente? Reúna a **prova** desde já.
4. **Afaste as figuras que impedem o perdão:** verifique se **não** há **embriaguez** (art. 302, §3º / art. 306 do CTB), **racha**, **velocidade excessiva qualificada** ou outra circunstância que revele **desvalor incompatível** com a desnecessidade da pena. Presença de embriaguez tende a **inviabilizar** o perdão (o Estado tem interesse na sanção) — nesse cenário, a estratégia migra para a dosimetria e o afastamento das qualificadoras.
5. **Demonstre a desnecessidade da pena:** articular a dupla punição, a inutilidade preventiva (o agente não é criminoso, é vítima do próprio infortúnio) e a **função da norma** do §5º.
6. **Invoque a Súmula 18/STJ** para garantir a natureza declaratória — **sem reincidência, sem efeitos condenatórios, sem título executivo cível.**
7. **Cuide da reparação civil e da vítima sobrevivente:** se há vítima **terceira** (não ligada ao agente) também atingida, a tese enfraquece — o perdão foca a consequência que recai sobre o **próprio** agente. Avaliar composição civil e, nas lesões leves, a interação com transação penal (art. 291, §1º, CTB c/c Lei 9.099/95).

## Teses típicas (defesa)

- **Perdão por consequência afetiva:** o agente perdeu, no acidente, [ente querido]; a perda é punição maior que qualquer pena; a sanção seria dupla punição e sem utilidade (art. 121, §5º / 129, §8º, CP).
- **Perdão por consequência física ao agente:** o condutor sofreu [lesão grave/sequela permanente]; a pena corpórea já lhe foi imposta pelo próprio fato.
- **Direito subjetivo, não faculdade:** presentes os pressupostos, o §5º impõe o **dever** de deixar de aplicar a pena; a negativa exige fundamentação idônea sob pena de nulidade.
- **Natureza declaratória (Súmula 18/STJ):** afastar de plano qualquer efeito condenatório (reincidência, rol dos culpados, custas, execução civil).
- **Pedido subsidiário à absolvição:** sem prejuízo da tese principal de atipicidade/ausência de culpa, requer-se o perdão para a hipótese de reconhecimento do crime.
- **Suspensão condicional do processo / ANPP como alternativas:** onde o perdão não for viável, avaliar **sursis processual** (art. 89 da Lei 9.099/95, cabível no 303 e, conforme a pena mínima, no 302) e **ANPP** (art. 28-A do CPP) — ver `sursis-processual` e `anpp`.

## Contra-teses (acusação) e como neutralizá-las

- **"Havia embriaguez / racha / velocidade excessiva":** circunstância que revela maior desvalor e afasta a desnecessidade da pena. **Neutralização:** impugnar a prova da qualificadora (cadeia de custódia do etilômetro/exame; ausência de perícia de velocidade), desqualificar para a figura simples, e sustentar que o pressuposto do §5º é a **consequência que atinge o agente**, não a conduta.
- **"A vítima é terceiro estranho ao agente":** sem laço afetivo, falta o pressuposto afetivo. **Neutralização:** deslocar a tese para a **consequência física** ao próprio agente (lesão/sequela), se houver; ou reforçar vínculo afetivo real ainda que não parente (amigo, companheiro).
- **"Perdão é faculdade discricionária":** **Neutralização:** sustentar tratar-se de **direito subjetivo** quando presentes os pressupostos; a discricionariedade é vinculada aos requisitos legais.
- **"Há necessidade preventiva (reiteração no trânsito)":** **Neutralização:** demonstrar primariedade, bons antecedentes, ausência de risco de reiteração e que o sofrimento sofrido já cumpre função preventiva especial.

## Súmulas e precedentes (sob o Citation Gate)

- **Súmula 18/STJ** — sentença concessiva de perdão judicial é **declaratória** da extinção da punibilidade, **sem efeitos condenatórios**. (Súmula notória; ainda assim, confirmar redação vigente.)
- **Art. 107, IX; art. 121, §5º; art. 129, §8º, CP; arts. 291-303 CTB** — dispositivos de lei citáveis com certeza, sempre na **redação vigente**.
- **Precedentes específicos** (números de HC/REsp, informativos, temas repetitivos sobre extensão do perdão, sobre perdão × embriaguez, sobre alcance do laço afetivo): **[NÃO VERIFICADO]** — **não citar de memória**. Confirmar existência, número, órgão e teor via `jurisprudencia-stj-stf` e passar pelo gate `verificacao-citacoes` antes de usar. **Prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.**

## Estrutura da peça (requerimento / capítulo de alegações finais)

Estrutura sugerida para o **capítulo de perdão judicial** (em alegações finais ou petição autônoma). Adaptar ao caso concreto; toda citação passa pelo gate.

```
[ENDEREÇAMENTO — Juízo competente: Vara Criminal / Juizado Especial Criminal,
conforme a pena — art. 291 CTB]

Processo nº [Nº]

[RÉU], já qualificado, por seu advogado (procuração anexa), nos autos da ação
penal que lhe move o Ministério Público, vem expor e requerer:

I — SÍNTESE DOS FATOS
Descrever o acidente, a natureza CULPOSA da conduta e, sobretudo, a CONSEQUÊNCIA
que atingiu o próprio agente [perda de ente querido / lesão grave / sequela].

II — DA TIPIFICAÇÃO CULPOSA (pressuposto do perdão)
Reafirmar a ausência de dolo (inclusive eventual) — o perdão é incompatível com
dolo. [Se a acusação imputa dolo eventual, remeter à desqualificação para culpa.]

III — DO PEDIDO PRINCIPAL (se for o caso: absolvição por atipicidade/ausência de
culpa) — art. 386, [inciso], CPP.

IV — DO PERDÃO JUDICIAL (art. 121, §5º / art. 129, §8º, CP) — pedido [principal/
subsidiário]
a) Do pressuposto: as consequências da infração atingiram o próprio agente de
   forma tão grave que a sanção se tornou desnecessária.
b) Da prova do laço afetivo / da lesão ao agente (docs. anexos: [certidões,
   laudos médicos, relatório psicológico, depoimentos]).
c) Da desnecessidade da pena: a punição estatal seria dupla punição, sem função
   retributiva ou preventiva útil.
d) Do caráter de direito subjetivo: presentes os pressupostos, impõe-se deixar
   de aplicar a pena.
e) Da natureza declaratória: Súmula 18/STJ — sem reincidência, sem efeitos
   condenatórios, sem título executivo cível.

V — DOS PEDIDOS
Requer:
a) [principal] a absolvição, nos termos do art. 386, [inciso], CPP; OU
b) [subsidiário] o reconhecimento do PERDÃO JUDICIAL (art. 121, §5º / 129, §8º,
   CP), com a consequente extinção da punibilidade (art. 107, IX, CP), operando
   a sentença efeitos meramente declaratórios (Súmula 18/STJ);
c) a juntada dos documentos anexos.

Termos em que, pede deferimento.
[LOCAL], [DATA]. [ADVOGADO] — OAB/[UF] nº [Nº]
```

**Campos a preencher:** [Nº do processo], [RÉU], [descrição do acidente], [consequência ao agente], [documentos de prova], [inciso do art. 386 CPP], [LOCAL], [DATA], [ADVOGADO], [UF], [Nº OAB].

## Documentos a anexar (a prova é o coração do pedido)

1. Procuração.
2. **Prova do laço afetivo:** certidão de nascimento/casamento, prova de convivência/dependência, fotos, depoimentos.
3. **Laudos médicos** do agente (lesões, sequelas, incapacidade) — comprovam a consequência física.
4. **Relatório/laudo psicológico** demonstrando o sofrimento e o luto do agente.
5. Certidão de óbito da vítima (nos casos de homicídio culposo com laço afetivo).
6. Folha de antecedentes (primariedade — reforça a desnecessidade preventiva).
7. Boletim de ocorrência e laudo pericial do acidente (afastam dolo; demonstram a dinâmica culposa).

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Pedir perdão **negando a culpa na mesma linha argumentativa** — o perdão pressupõe o fato culposo; usar **ordem sucessiva** (absolvição principal, perdão subsidiário), sem contradição.
- Tentar perdão em cenário com **dolo eventual não afastado** (racha, embriaguez extrema) — primeiro desqualificar para culpa.
- Alegar laço afetivo sem **prova robusta** do vínculo real.
- Esquecer a **Súmula 18/STJ** e deixar o cliente exposto a reincidência/efeitos condenatórios.
- Insistir no perdão quando a vítima é **terceiro estranho** e não há lesão ao próprio agente — a tese não se sustenta; migrar para dosimetria/sursis/ANPP.
- Ignorar a interação com **embriaguez/qualificadoras** (art. 302, §3º; art. 306 CTB), que tende a inviabilizar o perdão.
- Citar número de HC/REsp/informativo **de memória** — passar pelo gate.

**Checklist:**
- [ ] Tipo classificado (302/121, §5º ou 303/129, §8º) e **culpa** confirmada (sem dolo/dolo eventual)?
- [ ] Pressuposto identificado (laço afetivo réu-vítima **ou** lesão grave/sequela ao próprio agente)?
- [ ] **Prova** do pressuposto reunida e anexada (certidões, laudos médicos e psicológicos, depoimentos)?
- [ ] Circunstâncias impeditivas (embriaguez, racha, velocidade qualificada) **afastadas** ou atacadas?
- [ ] Pedido deduzido em **ordem sucessiva** (absolvição principal → perdão subsidiário), sem contradição?
- [ ] **Súmula 18/STJ** invocada para blindar efeitos condenatórios?
- [ ] Alternativas avaliadas onde o perdão não couber (**sursis processual**, **ANPP**, dosimetria)?
- [ ] Redação vigente do CTB, do CP e da Súmula 18 **conferida** (Leis 12.971/2014, 13.281/2016, 13.546/2017)?
- [ ] Todo dispositivo/súmula/precedente passou por `verificacao-citacoes` e `jurisprudencia-stj-stf`?
- [ ] Revisão humana do advogado responsável antes de protocolar?

## Lembretes finais

- **O perdão discute a pena, não o crime** — admite o fato culposo e pede a **dispensa da sanção** por desnecessidade.
- **Pressuposto:** consequência que atinge o **próprio agente** (afetiva ou física) de forma extraordinária.
- **Direito subjetivo** quando presentes os requisitos — não mera faculdade.
- **Súmula 18/STJ:** sentença **declaratória**, **sem efeitos condenatórios** (sem reincidência, custas ou título cível).
- **Incompatível com dolo** (inclusive eventual) e **fragilizado por embriaguez/qualificadoras** — afastá-las primeiro.
- **Ordem sucessiva de pedidos:** absolvição em primeiro lugar, perdão como subsidiário.
- **Prova é tudo** — o pressuposto é fático; sem laudos e certidões, o pedido cai.
- **Conferir vigência** do CTB e das súmulas via `jurisprudencia-stj-stf`; **nunca** citar precedente de memória.

## Nota de conformidade

Este material é **apoio metodológico e rascunho técnico**, sujeito a **revisão humana obrigatória** — a responsabilidade pela peça e pela estratégia é sempre do **advogado** (EAOAB; CED; Provimento OAB 205/2021). Esta skill é de **polo de defesa** (o roteador deve confirmar o polo da instituição em `_criminalsquad/_memory/company.md`; havendo atuação do polo acusatório, adaptar). Nenhuma súmula, tese ou acórdão pode ser citado de memória: tudo passa pelo gate `verificacao-citacoes` e é conferido em `jurisprudencia-stj-stf`. Na dúvida sobre vigência ou número de precedente, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
