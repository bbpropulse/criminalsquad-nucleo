---
name: defesa-crimes-propriedade-industrial-marca-patente
description: >-
  Use ao defender acusado de crime contra a propriedade industrial (arts. 183-194 da Lei 9.279/96 —
  patente, desenho industrial, marca, indicação geográfica) e ao explorar as portas de saída típicas
  desses delitos: AÇÃO PENAL PRIVADA (art. 199 LPI), decadência, exigência de perícia como corpo de
  delito (arts. 525/527/529 CPP) e invalidade/caducidade do registro no INPI (art. 205 LPI).
  Gatilhos: crime contra marca, contrafação… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, propriedade-industrial]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-propriedade-industrial-marca-patente"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-propriedade-industrial-marca-patente", "defesa crimes", "marca patente"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa de crimes contra a propriedade industrial (arts. 183-194 da LPI)

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

Esta skill orienta a **defesa** do acusado nos crimes contra a propriedade industrial da **Lei 9.279/96 (LPI)** — violação de patente e de modelo de utilidade (arts. 183-186), de desenho industrial (arts. 187-188), de **marca** (arts. 189-190), e as demais indicações e falsas procedências (arts. 191-194). São crimes de **penas ínfimas** e cercados de **barreiras preliminares específicas** que, bem exploradas, encerram o caso antes do mérito.

> **Lição central:** **não corra para o mérito da contrafação.** Quase todo o poder da defesa está nas **preliminares**, e elas são próprias destes crimes: (1) são de **ação penal PRIVADA** (art. 199 LPI, salvo o art. 191) — sindique **legitimidade do querelante, decadência de 6 meses e o prazo de 30 dias do art. 529 CPP**; (2) a **materialidade depende de PERÍCIA** (corpo de delito, art. 525 CPP) — sem laudo idôneo de contrafação, a queixa não é recebida; (3) o **registro/patente precisa estar VIGENTE** no INPI — **nulidade e caducidade são matéria de defesa** (art. 205 LPI). Some-se a isso a **prescrição rápida** (penas máximas de 1 ano ou de 3 meses). O réu absolvido no crime **não** invalida o registro — a nulidade civil corre em ação própria (art. 205, parte final).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 183-199 da LPI** e do **procedimento dos crimes contra a propriedade imaterial (arts. 524-530-I do CPP)** — o rito muda conforme a ação seja privada (LPI, regra) ou pública. **Súmulas 502 e 574 do STJ tratam de DIREITO AUTORAL (art. 184 do CP), não da LPI** — cite-as só por analogia e com ressalva expressa. Todo precedente, súmula, tese ou tema passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` antes de ir para a peça.

## Não confundir: propriedade industrial × direito autoral

- **Direito autoral (art. 184 do CP + Lei 9.610/98):** obra intelectual, artística, software, cópia de CD/DVD, "camelô". Ação penal em regra **pública** (art. 186 do CP).
- **Propriedade industrial (LPI, arts. 183-194):** **marca, patente, desenho industrial, indicação geográfica**. Ação penal **privada** (art. 199), salvo o art. 191 (pública). Regime, legitimidade e prazos são **diferentes** — tratar um pelo outro é erro grosseiro.

## Base legal

- **Arts. 183-186 da LPI** — crimes contra as patentes e modelos de utilidade.
- **Arts. 187-188 da LPI** — crimes contra o desenho industrial.
- **Arts. 189-190 da LPI** — crimes contra a **marca** (o núcleo prático da matéria).
- **Arts. 191-194 da LPI** — armas/brasões oficiais (art. 191), indicação geográfica (art. 192) e falsas indicações/procedências (arts. 193-194).
- **Art. 195 da LPI** — concorrência desleal (correlato; verificar imputação conexa).
- **Art. 196 da LPI** — **causa de aumento (1/3 à metade)**: agente representante/mandatário/preposto/sócio/empregado do titular; ou marca de alto renome/notória/de certificação/coletiva.
- **Art. 199 da LPI** — **ação penal PRIVADA**, salvo o art. 191 (ação pública). Regra que comanda toda a estratégia.
- **Art. 205 da LPI** — a **nulidade da patente/registro** pode ser matéria de defesa no crime; a absolvição **não** anula o registro (ação própria).
- **Arts. 524-530-I do CPP** — procedimento dos crimes contra a propriedade imaterial (perícia, busca e apreensão, prazos).
- **Arts. 20, 92-94 do CPP; art. 107 do CP; art. 109 do CP** — erro de tipo, questão prejudicial, extinção da punibilidade, prescrição.

## Panorama dos tipos e das penas (define prescrição e rito)

| Art. | Conduta (síntese) | Pena | Prescrição (art. 109 CP) |
|------|-------------------|------|--------------------------|
| 183 | fabricar/usar produto ou processo **patenteado** sem autorização | detenção 3 meses–1 ano, ou multa | 4 anos (inc. V) |
| 184 | vender/expor/importar produto que viola patente | detenção 1–3 meses, ou multa | 3 anos (inc. VI) |
| 187 | fabricar produto com **desenho industrial** registrado / imitação | detenção 3 meses–1 ano, ou multa | 4 anos (inc. V) |
| 189 | reproduzir/imitar **marca** registrada; alterar marca aposta | detenção 3 meses–1 ano, ou multa | 4 anos (inc. V) |
| 190 | vender/expor/ter em estoque produto com marca ilícita | detenção 1–3 meses, ou multa | 3 anos (inc. VI) |
| 191 | reproduzir armas/brasões/distintivos oficiais | detenção 1–3 meses, ou multa | **ação PÚBLICA** |
| 192-194 | falsa indicação geográfica / de procedência | detenção 1–3 meses, ou multa | 3 anos (inc. VI) |

> **Consequência prática:** todos são **infrações de menor potencial ofensivo** (pena máxima ≤ 2 anos) → competência do **JECRIM** (Lei 9.099/95), com **transação penal** e **suspensão condicional do processo** na mesa. E a prescrição é curta — **rastreie as datas desde o primeiro dia.**

## Metodologia — roteiro de defesa (na ordem de eficácia)

```
FASE 1 — ADMISSIBILIDADE DA QUEIXA (antes do mérito)
  1) É ação privada (art. 199)?  → SIM (arts. 183-190, 192-194) | art. 191 = pública
  2) Legitimidade: quem oferece a queixa é o TITULAR do registro/patente
     vigente (ou licenciado com poderes)? Prova documental do INPI juntada?
  3) DECADÊNCIA: passaram-se 6 meses do conhecimento da autoria (art. 38 CPP)?
  4) Prazo do art. 529 CPP: a queixa foi ajuizada em até 30 dias da homologação
     do laudo pericial? Excedido → decadência específica.
  5) PERÍCIA (corpo de delito, art. 525 CPP): há laudo que ateste a contrafação?
     Sem laudo idôneo → queixa não pode ser recebida (rejeição, art. 395 CPP).

FASE 2 — VALIDADE DO DIREITO (art. 205 LPI)
  6) O registro/patente está VIGENTE? Venceu (marca: 10 anos; patente: 20)?
     Houve renovação? Está registrado na CLASSE do produto imputado?
  7) CADUCIDADE (marca, arts. 142-146 LPI): uso não iniciado/interrompido > 5 anos?
  8) NULIDADE (arts. 165-175 LPI): registro concedido em desacordo com a lei?
     → matéria de defesa; se há ação de nulidade na Justiça Federal, avaliar
       questão prejudicial (art. 93 CPP) e suspensão do processo penal.

FASE 3 — TIPICIDADE E DOLO
  9) Especialidade: a marca protege só a CLASSE registrada (salvo alto renome,
     art. 125, e marca notória, art. 126). Uso em classe diversa, sem confusão
     → atipicidade.
 10) Imitação x reprodução: há efetivo risco de confusão do consumidor médio?
     Meras semelhanças de elementos de uso comum não configuram o crime.
 11) DOLO: revendedor de boa-fé com nota fiscal regular, sem ciência da
     falsidade → erro de tipo (art. 20 CP), exclui o dolo.

FASE 4 — CONCURSO, CONSUNÇÃO E PORTAS DE SAÍDA
 12) Produto pirata importado → verificar descaminho/contrabando (arts. 334/334-A
     CP) e relação de consumo (art. 7º, Lei 8.137/90): consunção ou bis in idem?
     (ver `defesa-contrabando-descaminho` e
      `defesa-crimes-tributarios-ordem-economica-relacoes-consumo`).
 13) JECRIM: transação penal (art. 76) e suspensão condicional (art. 89).
 14) PRESCRIÇÃO: calcular retroativa/superveniente (`calculadora-prescricao`).
```

## Teses defensivas e contra-teses da acusação

**1. Decadência (a mais letal).**
➡️ **Defesa:** ação privada; o querelante deixou passar os **6 meses** (art. 38 CPP) do conhecimento da autoria, **ou** ultrapassou o **prazo de 30 dias do art. 529 CPP** (contado da homologação do laudo). Extinção da punibilidade (art. 107, IV, CP).
➡️ **Contra-tese:** conhecimento inequívoco da autoria só se deu na data X; o termo do art. 529 conta da homologação, não da apreensão. **Ataque a data de ciência** documentalmente.

**2. Ausência/insuficiência da perícia (corpo de delito).**
➡️ **Defesa:** crime que deixa vestígio exige **exame pericial** dos objetos (art. 525 CPP); laudo genérico, sem análise técnica da contrafação da marca/patente concreta, não comprova a materialidade — **rejeição da queixa** (art. 395 CPP) ou absolvição (art. 386, II/VII, CPP).
➡️ **Contra-tese:** invoca-se, por analogia, a **Súmula 574/STJ** (perícia por amostragem no direito autoral). **Distinga:** é súmula do art. 184 do CP; na LPI a perícia deve individualizar o registro violado.

**3. Registro inválido, caduco ou vencido (art. 205 LPI).**
➡️ **Defesa:** sem registro/patente **vigente e regular**, não há elementar do tipo. Alegue nulidade/caducidade como **matéria de defesa**; havendo ação de nulidade na Justiça Federal, requeira a **prejudicial** (art. 93 CPP).
➡️ **Contra-tese:** presunção de validade do ato do INPI; a absolvição penal não anula o registro (art. 205, parte final). **Rebata** com prova documental do INPI (vencimento, caducidade declarada, ação de nulidade).

**4. Especialidade / ausência de confusão (atipicidade).**
➡️ **Defesa:** a marca é protegida **na classe** em que registrada; uso em ramo distinto, sem risco de confusão ao consumidor médio, é atípico.
➡️ **Contra-tese:** marca de **alto renome** (art. 125) tem proteção em todos os ramos; ou notoriamente conhecida (art. 126). **Verifique** se o alto renome foi reconhecido pelo INPI.

**5. Erro de tipo / boa-fé do revendedor.**
➡️ **Defesa:** o comerciante que adquire e revende com **nota fiscal regular**, sem ciência da falsidade, incide em erro de tipo (art. 20 CP) — exclui o dolo.
➡️ **Contra-tese:** preço vil, origem clandestina e volume revelariam o dolo eventual. **Prove a cadeia de aquisição regular.**

**6. Insignificância (controvertida).**
➡️ **Defesa:** lesão ínfima, ausência de reprovabilidade penal.
➡️ **Contra-tese:** por analogia à **Súmula 502/STJ** (direito autoral), afasta-se a bagatela porque o tipo também tutela o consumidor e a ordem econômica. **Tese de aplicação restrita** — sustente só em quadro fático realmente insignificante e com a ressalva de que a súmula não é da LPI.

## Súmulas e precedentes (conferir SEMPRE via `jurisprudencia-stj-stf`)

- **Súmula 502/STJ** — típica a exposição à venda de CD/DVD "pirata" (art. 184, §2º, do CP): afasta insignificância. **É DIREITO AUTORAL, não LPI** — a acusação a invoca por analogia; distinga.
- **Súmula 574/STJ** — perícia por amostragem no crime de violação de **direito autoral**. Mesma ressalva: art. 184 do CP, não a LPI.
- **Súmula 122/STJ** — conexão entre crime federal e estadual atrai a competência da **Justiça Federal** (relevante quando há descaminho/contrabando conexo).
- **Competência (regra):** crime contra a propriedade industrial é, em regra, da **Justiça Estadual** (lesão a particular); Federal apenas com interesse da União ou conexão federal. Confirmar o enquadramento concreto — **[NÃO VERIFICADO]** quanto a precedente específico.
- **Decadência do art. 529 do CPP, nulidade do registro (art. 205) e princípio da especialidade:** há jurisprudência do STJ; **prefira citar a tese e o dispositivo** a apostar em número de acórdão. Precedente específico incerto → **[NÃO VERIFICADO]** + confirmar via `jurisprudencia-stj-stf`.

## Erros comuns e checklist da defesa

- [ ] Confirmou que é **ação privada** (art. 199) e verificou a **legitimidade** do querelante (titular do registro vigente)?
- [ ] Contou a **decadência de 6 meses** (art. 38 CPP) **e** o **prazo de 30 dias** do art. 529 do CPP?
- [ ] Exigiu o **laudo pericial** (corpo de delito, art. 525 CPP) e atacou a materialidade sem ele?
- [ ] Puxou a certidão do **INPI** — vigência, classe, renovação, **caducidade** e eventual **ação de nulidade** (art. 205)?
- [ ] Testou a **especialidade** (classe) e o **risco real de confusão**? Avaliou alto renome/notoriedade?
- [ ] Avaliou **erro de tipo** (revendedor de boa-fé, nota fiscal) e a **prova da cadeia de aquisição**?
- [ ] Verificou **concurso/consunção** com descaminho/contrabando e crime de consumo (competência e bis in idem)?
- [ ] Calculou a **prescrição** (retroativa/superveniente) com a `calculadora-prescricao`?
- [ ] Ofereceu/negociou **transação penal** (art. 76) ou **suspensão condicional** (art. 89) no JECRIM, quando cabível?
- [ ] Passou **toda** citação pela skill `jurisprudencia-stj-stf` antes de peticionar?

**Anti-padrões (evitar):**
- Discutir o mérito da imitação antes de esgotar decadência, perícia e validade do registro.
- Tratar o caso como **direito autoral** (art. 184 CP) — regime e ação são diferentes.
- Aceitar laudo pericial genérico que não individualiza o registro/patente violado.
- Ignorar a **caducidade** (5 anos sem uso) ou o **vencimento** da marca/patente.
- Deixar de invocar a **especialidade** quando o uso é em classe diversa.
- Confundir o prazo do **art. 529 CPP (30 dias)** com a decadência geral de 6 meses — são cumulativos e ambos fulminam a queixa.
- Perder a **prescrição** por não datar o início (fato/ciência) desde o começo.

## Lembretes finais

- **Preliminar primeiro, mérito depois** — decadência, perícia e validade do registro decidem a maioria dos casos.
- **Ação privada (art. 199)** abre um leque próprio: renúncia, perdão, perempção (art. 60 CPP) e as duas decadências.
- **Materialidade = perícia** (art. 525 CPP); **elementar = registro vigente** (art. 205 LPI).
- **Penas ínfimas → prescrição curta e JECRIM** — trate a saída consensual e a prescrição como teses de primeira linha.
- **Distinga súmulas de direito autoral** (502 e 574/STJ) do regime da LPI.
- **Conferir vigência** dos arts. 183-199 da LPI e do rito (arts. 524-530-I do CPP), e **toda** citação via `jurisprudencia-stj-stf`, antes de protocolar.

## Nota de conformidade

Este material é **rascunho técnico de apoio**, sujeito a **revisão humana obrigatória** pelo advogado responsável (CED/OAB, art. 2º) antes de qualquer protocolo. Atuação no **polo da defesa**. Nenhuma súmula, tese ou precedente vai para a peça sem passar pela skill `jurisprudencia-stj-stf`; na dúvida, **omitir vence inventar** (há sanções por jurisprudência inventada por IA). Preserve o **sigilo/LGPD** dos dados do assistido.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
