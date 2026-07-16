---
name: producao-antecipada-provas
description: >-
  Use ao requerer ou impugnar a produção antecipada de provas no processo penal (CPP, arts. 156, I,
  225 e 366; Súmula 455 STJ): demonstrar urgência e relevância concretas da prova, combater a
  fundamentação genérica fundada no mero decurso do tempo no caso do réu citado por edital que não
  comparece, e atuar como defensor nomeado no ato de oitiva antecipada. Gatilhos: produção
  antecipada de provas, prova antecipada, antecipação… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-producao-antecipada-provas"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["producao-antecipada-provas", "producao antecipada", "antecipada provas"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Produção Antecipada de Provas (CPP, arts. 156, I, 225 e 366 — Súmula 455 STJ)

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

Esta skill orienta o **incidente de produção antecipada de provas** no processo penal: quando **requerer** (demonstrando urgência e relevância concretas, prova a prova), quando **impugnar** (o alvo clássico é a antecipação genérica decretada contra o réu citado por edital — Súmula 455 STJ) e como **atuar no ato** de oitiva antecipada como defensor constituído ou nomeado. Ela **complementa — sem duplicar —** a skill `depoimento-especial-lei-13431`: lá a antecipação é ***ope legis*** (art. 11, §1º da Lei 13.431 — criança menor de 7 anos ou violência sexual, sem juízo de urgência); aqui está o **instituto geral do CPP**, que vive e morre pela **demonstração concreta** de urgência e relevância. Se a vítima/testemunha for criança ou adolescente em contexto de violência, migre para aquela skill.

> **Síntese operacional:** a antecipação é **cautelar probatória** — exceção ao momento natural da prova (a instrução, com o réu presente). Quem **requer** individualiza o risco de perecimento **por testemunha** (documento a documento: atestado, idade, comprovante de mudança); quem **impugna** ataca em três camadas sucessivas: (1) a **citação editalícia inválida** derruba a suspensão e a antecipação juntas; (2) a **fundamentação genérica** ("a memória se esvai com o tempo") é exatamente o que a Súmula 455 do STJ veda; (3) mantida a antecipação, exige-se **contraditório real no ato** — defensor com acesso prévio aos autos, perguntas, protestos e gravação audiovisual (art. 405, §1º).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 156, 225, 362, 366 e 405 do CPP via `lei-e-sumula` — o desenho do art. 156, I (atuação **de ofício** do juiz antes da ação penal) é fortemente questionado após a Lei 13.964/2019 (art. 3º-A — sistema acusatório e juiz das garantias), e o STF modulou esse regime ao julgar as ADIs do Pacote Anticrime: **pesquise o estado atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** o que não confirmar. O mesmo vale para a jurisprudência sobre oitiva antecipada de **policiais** e sobre o **limite temporal da suspensão da prescrição** (repercussão geral do STF que admite a limitação pelo máximo da pena em abstrato). Toda citação passa pelo gate da best-practice `verificacao-citacoes` antes da entrega.

## Instituto e base legal

| Dispositivo | Conteúdo | Papel na skill |
|-------------|----------|----------------|
| **CPP, art. 156, I** | Faculta ordenar, **mesmo antes de iniciada a ação penal**, a produção antecipada de provas **urgentes e relevantes**, observadas **necessidade, adequação e proporcionalidade** | Regra-matriz: os três filtros são o roteiro do requerimento e da impugnação |
| **CPP, art. 225** | Testemunha que **houver de ausentar-se** ou, por **enfermidade ou velhice**, inspire receio de não existir ao tempo da instrução: depoimento antecipado, de ofício ou a requerimento | Hipóteses legais típicas de **urgência concreta** — a âncora de quem requer |
| **CPP, art. 366** | Réu **citado por edital** que não comparece **nem constitui advogado**: suspendem-se o processo e a prescrição, **podendo** o juiz determinar a antecipação das provas **urgentes** (e decretar preventiva nos termos do art. 312) | O cenário clássico do incidente — e da Súmula 455 |
| **Súmula 455 STJ** | A decisão que determina a antecipação com base no art. 366 **deve ser concretamente fundamentada**, não a justificando **unicamente o mero decurso do tempo** | O coração da impugnação defensiva |
| **CPP, arts. 92-93** | Suspensão por **questão prejudicial**, sem prejuízo da inquirição de testemunhas e provas **de natureza urgente** | Porta lateral, menos frequente |
| **Súmula 351 STF** | É **nula** a citação por edital de **réu preso** na mesma unidade da federação do juízo | Tese-preliminar: sem edital válido, não há suspensão nem antecipação |
| **Súmula 415 STJ** | O período de **suspensão da prescrição** é regulado pelo **máximo da pena cominada** | Consequência temporal do art. 366 — controlar o retorno do curso prescricional |
| **CPP, art. 405, §1º** | Registro dos depoimentos, **sempre que possível**, por gravação — **inclusive audiovisual** | Garantia-chave para o réu que reaparecer depois: requerer expressamente a modalidade audiovisual |
| **Lei 9.613/98, art. 2º, §2º** | Ao processo por **lavagem de capitais não se aplica o art. 366**: cita-se por edital e o feito **prossegue** com defensor dativo | Pegadinha de cabimento — conferir redação via `lei-e-sumula` |

## Requisitos — urgência e relevância são coisas distintas

O requerimento (e a decisão) só se sustenta se responder **afirmativamente às duas perguntas, prova a prova**:

| Requisito | Pergunta | O que demonstra (exemplos) |
|-----------|----------|---------------------------|
| **Urgência** | Há risco **concreto e atual** de a fonte de prova perecer antes da instrução? | Testemunha idosa ou gravemente enferma (atestado/laudo); mudança iminente para o exterior (passagem, transferência funcional); pessoa sem endereço fixo e de difícil relocalização; condição funcional de **policial** que atende inúmeras ocorrências análogas (fundamento admitido na jurisprudência do STJ — **confirme o estado atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**) |
| **Relevância** | O que essa testemunha prova influi no **julgamento do mérito**? | Testemunha presencial única; vítima; testemunha de álibi da defesa; elo específico entre o fato e a autoria |
| **Tríade do art. 156, I** | A medida é **necessária** (não há meio menos gravoso), **adequada** (apta ao fim) e **proporcional**? | Sem alternativa (ex.: videoconferência futura não elimina o risco de morte); limitada às testemunhas em risco — não à instrução inteira |

> **Regra de ouro:** a antecipação é **individualizada**. Requerimento ou decisão "em bloco" ("antecipem-se os depoimentos de todas as testemunhas arroladas") sem exame testemunha a testemunha é a face processual do fundamento genérico que a Súmula 455 rejeita.

## Cabimento — as portas de entrada

| Situação | Porta legal | Quem costuma requerer | Observação |
|----------|-------------|----------------------|------------|
| Investigação/antes da ação penal, prova em risco | Art. 156, I | MP, autoridade policial (representação), defesa | Atuação **de ofício** do juiz nessa fase é questionada pós-art. 3º-A — pesquisar via `jurisprudencia-stj-stf` |
| Testemunha que vai ausentar-se / enferma / idosa | Art. 225 | Qualquer das partes (inclusive a **defesa** — testemunha de álibi em risco) | Hipóteses legais de urgência; instruir com documentos |
| Réu citado por edital, não comparece nem constitui advogado | Art. 366 | MP (regra); assistente | Suspensão do processo + prescrição; antecipação **só** das provas urgentes, com fundamento concreto (S. 455) |
| Suspensão por questão prejudicial | Arts. 92-93 | Qualquer das partes | Somente provas de natureza urgente |
| Criança/adolescente vítima ou testemunha de violência | Lei 13.431, art. 11, §1º | — | **Não usar esta skill**: antecipação *ope legis* — ver `depoimento-especial-lei-13431` |

**O que NÃO entra pelo art. 366** (erros de enquadramento que a defesa deve denunciar):
- **Citação pessoal + não comparecimento** → revelia (art. 367): o processo **segue**, sem suspensão nem antecipação cautelar.
- **Citado por edital que comparece OU constitui advogado** → os dois requisitos negativos são **cumulativos**; presente qualquer um deles, o feito segue sem suspensão.
- **Citação por hora certa** (art. 362, parágrafo único) → nomeia-se defensor dativo e o processo **segue** — não há suspensão do 366.
- **Lavagem de capitais** (Lei 9.613/98, art. 2º, §2º) → o art. 366 é expressamente afastado.
- **Interrogatório do réu ausente** → ato personalíssimo de autodefesa; **não se antecipa**.
- **Perícias urgentes** (corpo de delito etc.) → correm naturalmente na investigação (arts. 6º e 158 e seguintes); o objeto típico da antecipação é a **prova oral**.

## Súmula 455 STJ — genérico não antecipa, concreto antecipa

A linha divisória que decide o incidente do art. 366:

| Fundamentação **genérica** (inidônea — S. 455) | Fundamentação **concreta** (idônea) |
|------------------------------------------------|-------------------------------------|
| "A memória humana se esvai com o tempo" | Testemunha com 78 anos e cardiopatia documentada (art. 225) |
| "O processo pode ficar suspenso por anos" | Testemunha estrangeira com retorno ao país de origem comprovado |
| "A antecipação garante a efetividade da persecução" | Vítima única do fato, sem outra fonte de prova da autoria |
| "As testemunhas podem mudar de endereço" | Testemunha em situação de rua, localizada com dificuldade pela primeira vez |
| Decisão em bloco, sem exame por testemunha | Condição funcional de policial com múltiplas ocorrências análogas — **[NÃO VERIFICADO] até pesquisar via `jurisprudencia-stj-stf`** |

> **Para a defesa:** o mero decurso do tempo é **inerente a toda suspensão do art. 366** — se bastasse, a antecipação seria automática e a súmula não existiria. Exija da decisão o **fato específico** que diferencia aquela testemunha da situação-padrão. **Para quem requer:** não escreva uma linha sequer de "fragilidade da memória"; abra um subitem por testemunha com o risco documentado.

## Estrutura forense — os três entregáveis

**(A) Requerimento de produção antecipada** (MP/assistente — ou **defesa**, para testemunha defensiva em risco). Estrutura de peça de 1º grau conforme a best-practice `peticao-criminal`:

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]   [na investigação: juízo competente
                                  para a cautelar — juiz das garantias,
                                  onde implantado]

Autos nº [Nº DO PROCESSO/INQUÉRITO]

[PARTE/NOME], nos autos em epígrafe [se art. 366: "suspensos na forma do
art. 366 do CPP"], vem requerer a PRODUÇÃO ANTECIPADA DE PROVA, com
fundamento nos arts. 156, I, e 225 [e/ou 366] do CPP, expondo:

I — DO CABIMENTO
   [identificar a porta: art. 156, I (pré-processual) / art. 225
   (testemunha em risco) / art. 366 (feito suspenso, réu citado por
   edital) — com a cronologia processual que a comprova].

II — DA URGÊNCIA CONCRETA — POR TESTEMUNHA
   1. [NOME/INICIAIS] — [risco específico: idade + enfermidade (atestado
      anexo) / mudança iminente (comprovante) / condição funcional] ;
   2. [repetir a individualização para cada testemunha — nunca em bloco].

III — DA RELEVÂNCIA PARA O MÉRITO
   [o que cada depoimento prova e por que influi no julgamento:
   testemunha presencial única, álibi, elo de autoria].

IV — DA NECESSIDADE, ADEQUAÇÃO E PROPORCIONALIDADE (art. 156, I)
   [ausência de meio menos gravoso; limitação do pedido às testemunhas
   em risco — não à instrução inteira].

V — DOS PEDIDOS
   a) a designação de AUDIÊNCIA DE PRODUÇÃO ANTECIPADA para oitiva de
      [ROL LIMITADO], intimadas as partes;
   b) [se réu ausente] a NOMEAÇÃO DE DEFENSOR para o ato, com vista
      prévia dos autos;
   c) o registro do ato por GRAVAÇÃO AUDIOVISUAL (art. 405, §1º, CPP),
      com preservação da mídia nos autos;
   d) ciência ao Ministério Público [ou à defesa, conforme o polo].

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [SUBSCRITOR(A)] — [OAB/MP/DP]
```

**(B) Impugnação pela defesa** (petição nos autos contra o requerimento do MP ou pedido de reconsideração da decisão; havendo constrangimento ilegal patente, a via célere é o HC — ver skill `habeas-corpus`):

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO]

[NOME], por seu(sua) defensor(a) [constituído(a)/nomeado(a)], nos autos
em epígrafe, vem IMPUGNAR [o requerimento ministerial de produção
antecipada de provas / a decisão que a determinou, requerendo
RECONSIDERAÇÃO], pelas razões seguintes:

I — DA NULIDADE DA CITAÇÃO POR EDITAL (preliminar, se houver o vício)
   [esgotamento das diligências de localização não demonstrado; endereço
   constante dos autos não diligenciado; réu PRESO na mesma unidade da
   federação — Súmula 351 STF]. Sem citação editalícia válida, não há
   suspensão (art. 366) — e cai, com ela, a antecipação.

II — DA FUNDAMENTAÇÃO GENÉRICA — SÚMULA 455 DO STJ
   [transcrever o trecho genérico da decisão/requerimento e demonstrar
   que se resume ao decurso do tempo/fragilidade da memória, sem fato
   específico por testemunha].

III — DA AUSÊNCIA DE URGÊNCIA E RELEVÂNCIA CONCRETAS (art. 156, I)
   [nenhuma testemunha em hipótese do art. 225; ausência de exame
   individualizado; desproporcionalidade de antecipar a instrução
   inteira].

IV — SUBSIDIARIAMENTE — DAS GARANTIAS DO ATO
   Mantida a antecipação, requer-se: intimação da defesa com
   antecedência e VISTA INTEGRAL dos autos; oitiva sob o rito dos
   arts. 212 e seguintes do CPP; GRAVAÇÃO AUDIOVISUAL integral
   (art. 405, §1º) com fornecimento de cópia; e consignação de que a
   participação da defesa NÃO convalida os vícios ora arguidos.

V — DOS PEDIDOS (sucessivos)
   a) o reconhecimento da nulidade da citação editalícia, com renovação
      do ato citatório; b) o indeferimento/reconsideração da produção
   antecipada (Súmula 455 STJ); c) subsidiariamente, as garantias do
   item IV.

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**(C) Atuação do defensor no ato de oitiva antecipada** (constituído ou nomeado — o briefing logístico do ato está na skill `preparacao-audiencia`; a mecânica de inquirição, contradita e protesto em ata, na skill `audiencia-inquiricao-testemunhas`):

1. **Antes:** exigir vista integral dos autos com antecedência real — defensor nomeado "na porta da sala" é contraditório de fachada: consignar. Se o nomeado for **defensor público**, exigir **intimação pessoal com entrega dos autos** e contagem **em dobro** dos prazos (LC 80/94, arts. 44, I, 89, I e 128, I). Preparar perguntas por testemunha (mapa do que cada uma pode provar).
2. **Durante:** inquirir sob o art. 212 (perguntas diretas); contraditar quando couber; pergunta indeferida → **transcrição literal em ata + protesto**; fiscalizar a gravação audiovisual desde o início.
3. **Ao final:** requerer cópia da mídia e consignar que a atuação não convalida os vícios da decisão de antecipação (ressalva expressa).

## Teses típicas

**Da defesa (impugnação):**
- **Citação por edital nula** (diligências não esgotadas; réu preso — Súmula 351 STF) → cai a suspensão e a antecipação por arrastamento.
- **Fundamentação genérica** — decisão apoiada só no decurso do tempo/fragilidade da memória → Súmula 455 STJ; prova colhida assim é **nula**: postular o desentranhamento e a imprestabilidade para a condenação.
- **Decisão em bloco**, sem individualização por testemunha → ausência dos requisitos do art. 156, I.
- **Antecipação decretada de ofício** na fase pré-processual → tensão com o art. 3º-A do CPP (sistema acusatório) — estado da jurisprudência via `jurisprudencia-stj-stf`, marcando [NÃO VERIFICADO] o que não confirmar.
- **Réu que reaparece:** requerer a retomada do feito, a renovação/complementação da prova oral sob contraditório real e o interrogatório ao final; a jurisprudência sobre o direito à repetição é casuística — pesquisar antes de prometer o resultado.
- **Preventiva no bojo do 366:** a prisão não é automática — exige os requisitos do art. 312; para o pedido de soltura, ver a skill `liberdade-provisoria-relaxamento`.
- **Prescrição:** controlar o período de suspensão pela Súmula 415 STJ (máximo da pena cominada); o STF, em repercussão geral, tratou do limite temporal — confirmar tema e tese via `jurisprudencia-stj-stf`.

**De quem requer (MP/assistente — ou defesa com testemunha própria em risco):**
- Urgência ancorada no **art. 225** com prova documental (atestado, laudo, comprovante de viagem/transferência).
- Relevância demonstrada pela **posição da testemunha na cadeia probatória** (presencial única, vítima, álibi).
- Pedido **limitado e proporcional** — só as testemunhas em risco, com rol enxuto.

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|------|--------------|----------|
| Fundamentar (ou aceitar) a antecipação no "tempo que apaga a memória" | Nulidade da decisão — Súmula 455 STJ | Fato específico e documentado **por testemunha** |
| Impugnar a antecipação sem antes atacar a **citação editalícia** | Perde-se a preliminar mais barata | Checar diligências de localização e a Súmula 351 STF **antes** do mérito |
| Interpor **RESE** contra a decisão que defere a antecipação | Não cabe: a hipótese não consta do rol **taxativo** do art. 581 do CPP | Reconsideração nos autos; constrangimento patente → **HC**; residualmente, mandado de segurança |
| Confundir com a antecipação da **Lei 13.431** (criança/adolescente) | Exigir "urgência concreta" onde a lei não pede → tese natimorta | Ali é *ope legis*: usar `depoimento-especial-lei-13431` |
| Confundir com a produção antecipada do **CPC** (ação probatória autônoma) | Peça com fundamento e rito errados | No processo penal o incidente é regido pelo CPP (156, I; 225; 366) |
| Aplicar o art. 366 a réu citado **pessoalmente** ou **por hora certa** | Enquadramento errado: nesses casos o feito segue (arts. 367 e 362, p.ú.) | Conferir a modalidade de citação nos autos |
| Requerer antecipação em **lavagem de capitais** via art. 366 | Inaplicável — Lei 9.613/98, art. 2º, §2º | O feito prossegue com defensor dativo |
| Defesa **não comparecer** ao ato para "não convalidar" | O ato vale com defensor nomeado; a defesa só perde o contraditório | Participar, inquirir e **protestar com ressalva expressa** |
| Não protestar no ato nem consignar em ata | Vício tratado como nulidade relativa preclusa, sem prejuízo demonstrado | Protesto imediato + transcrição literal (mecânica em `audiencia-inquiricao-testemunhas`) |
| Não requerer **gravação audiovisual** nem cópia da mídia | Réu que reaparece não consegue auditar a colheita | Art. 405, §1º — requerer registro integral e preservação |
| Quem requer **demora meses** após o risco surgir | Incoerência que esvazia a urgência alegada | Protocolar tão logo documentado o risco |
| Antecipar o **interrogatório** do ausente | Ato personalíssimo — inviável | Interrogatório só com o réu presente, ao final da instrução retomada |
| Citar precedente sobre oitiva de policiais **de memória** | Jurisprudência oscilante; credibilidade perdida | Pesquisar via `jurisprudencia-stj-stf` + `verificador-citacoes`; sem confirmação → [NÃO VERIFICADO] |

## Checklist antes de protocolar

- [ ] Porta de cabimento identificada (156, I / 225 / 366 / 92-93) — e conferido que **não** é caso da Lei 13.431?
- [ ] (Art. 366) Citação por edital **válida**? Diligências esgotadas, réu não preso (Súmula 351 STF), não comparecimento + não constituição de advogado?
- [ ] (Quem requer) Urgência **documentada por testemunha** + relevância para o mérito + tríade do art. 156, I?
- [ ] (Quem impugna) Trecho genérico da decisão/requerimento transcrito e confrontado com a Súmula 455 STJ?
- [ ] Pedidos em **ordem sucessiva** (nulidade da citação → indeferimento → garantias do ato)?
- [ ] Gravação audiovisual (art. 405, §1º), vista prévia dos autos e cópia da mídia requeridas?
- [ ] Suspensão da prescrição sob controle (Súmula 415 STJ) e preventiva, se houver, tratada pela skill própria?
- [ ] Dispositivos conferidos via `lei-e-sumula`; precedentes via `jurisprudencia-stj-stf` e `verificador-citacoes` (sem confirmação → [NÃO VERIFICADO])?

## Lembretes finais

- **Urgência + relevância, prova a prova** — a antecipação individualiza ou não se sustenta; "em bloco" é o vício, dos dois lados do balcão.
- **O decurso do tempo não fundamenta nada** (Súmula 455 STJ): ele é o pressuposto da suspensão, não a justificativa da antecipação.
- **Ataque em camadas:** citação editalícia → fundamentação concreta → garantias do ato — pedidos sucessivos, sob eventualidade.
- **Participar não é convalidar:** a defesa comparece, inquire, protesta e ressalva — ausência estratégica só entrega o ato sem resistência.
- **A mídia é o seguro do ausente:** a gravação do art. 405, §1º é o que permitirá ao réu que reaparecer auditar a prova colhida sem ele.
- **Enquadramento antes da tese:** hora certa, revelia do citado pessoalmente, lavagem de capitais e Lei 13.431 têm regimes próprios — errar a porta mata a peça.
- Toda entrega é **rascunho para revisão humana**; nenhuma citação sai sem passar pelo gate de verificação.

## Apoie-se em

- **Skill `preparacao-audiencia`** — briefing completo do ato de oitiva antecipada: dados do ato, partes, atos anteriores e roteiro de perguntas.
- **Skill `depoimento-especial-lei-13431`** — complementa esta skill: antecipação *ope legis* de criança/adolescente vítima ou testemunha de violência (sem juízo de urgência), com rito protetivo próprio.
- **Skill `audiencia-inquiricao-testemunhas`** — mecânica da inquirição (art. 212), contradita e protestos/consignação em ata durante o ato antecipado.
- **Skill `habeas-corpus`** — via célere contra a decisão de antecipação que gere constrangimento ilegal patente.
- **Skill `liberdade-provisoria-relaxamento`** — pedido de soltura quando, no bojo do art. 366, houver decreto de prisão preventiva.
- **Best-practice `peticao-criminal`** — endereçamento, qualificação, eventualidade e anatomia da peça de 1º grau usada nos dois modelos.
- **Agente `lei-e-sumula`** — redação vigente dos arts. 156, 225, 362, 366 e 405 do CPP e texto integral das Súmulas 455/415 STJ e 351 STF.
- **Agente `jurisprudencia-stj-stf`** — estado atual sobre oitiva antecipada de policiais, antecipação de ofício pós-Pacote Anticrime e limite da suspensão da prescrição, sempre com número e ementa reais.
- **Best-practice `verificacao-citacoes` / agente `verificador-citacoes`** — gate obrigatório antes da entrega; o que não confirmar sai marcado **[NÃO VERIFICADO]**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
