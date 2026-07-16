---
name: impugnacao-ata-termo-interrogatorio
description: >-
  Use ao AUDITAR e IMPUGNAR o termo/ata do interrogatório ou oitiva na fase policial — cotejar o que
  foi dito com o que foi reduzido a termo, apontar omissão de perguntas indeferidas e protestos,
  divergência entre a gravação audiovisual e a transcrição, ausência de assinatura ou de advertência
  do direito ao silêncio, e requerer retificação ou desentranhamento por vício de forma (CPP art.
  6º; art. 405 e §§ por analogia; art… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, analise, inquerito, multimodal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-impugnacao-ata-termo-interrogatorio"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["impugnacao-ata-termo-interrogatorio", "impugnacao termo", "termo interrogatorio"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Impugnação da Ata/Termo do Interrogatório Policial (CPP, art. 6º; art. 405 e §§ por analogia; arts. 195 e 186)

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

Esta skill orienta a **auditoria e a impugnação do documento-termo** que registra o interrogatório do investigado ou a oitiva de testemunhas na **fase policial** (inquérito). O termo é a **materialização escrita** de um ato oral, e frequentemente **diverge do que efetivamente ocorreu**: perguntas indeferidas que somem, protestos não consignados, respostas resumidas ou deturpadas, ausência de advertências obrigatórias e de assinaturas. A tarefa aqui é **posterior** ao ato: confrontar o termo com a gravação (quando houver), mapear os vícios e redigir a peça de **retificação** ou **impugnação/desentranhamento**.

> **Lição central:** o vício não está no que o termo diz, mas frequentemente no que ele **cala**. Audite por **cotejo**, não por leitura passiva: coloque lado a lado a **gravação audiovisual** (ou o áudio) e a **transcrição/redução a termo**, marque cada divergência com **timestamp** e **linha do termo**, e só então classifique o defeito (omissão, deturpação, vício de forma). Sem o cotejo documentado, a impugnação vira alegação genérica e não prospera.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do art. 6º, do art. 195 e do art. 186 do CPP e do art. 405 e §§ (registro audiovisual) — este último foi introduzido/alterado pela **Lei 11.719/2008** e cuida do processo, aplicando-se ao ato policial **por analogia**. Verifique também eventuais **Resoluções do CNJ/CNMP** e provimentos locais sobre registro e gravação de atos, além de súmulas, temas e overruling, via a skill `jurisprudencia-stj-stf`, antes de fundamentar a peça.

## O que esta skill é — e o que não é

- **É:** auditoria do **documento** já produzido (o termo/ata escrito) e a peça que ataca seus vícios — cotejo com a gravação, apontamento de omissões e requerimento de retificação/desentranhamento.
- **Não é** atuação **ao vivo** durante a oitiva pedindo consignação em tempo real — isso é da skill `acompanhamento-interrogatorio-policial`.
- **Não é** registro de atos **judiciais** gravados (audiência de instrução) — isso é da skill `transcricao-audiencia`.
- **Não é** ataque à prova **material** e à sua rastreabilidade — isso é da skill `impugnacao-cadeia-custodia`.

## Base legal

- **Art. 6º do CPP** — providências da autoridade policial ao tomar conhecimento da infração; base da colheita e do registro dos atos na fase de investigação (inclusive oitiva do indiciado e de testemunhas — incisos IV e V).
- **Art. 405 e §§ do CPP (por analogia)** — registro dos depoimentos, admitindo o **registro audiovisual** (gravação magnética/estenotipia/imagem), dispensando a transcrição quando há gravação. Norma processual aplicável ao ato policial por analogia (art. 3º do CPP).
- **Art. 195 do CPP** — se o interrogando **não souber ou não puder assinar**, o termo será assinado a rogo por pessoa idônea; disciplina a **assinatura** do termo de interrogatório.
- **Art. 186 do CPP** — antes do interrogatório, o acusado/investigado deve ser **informado do direito de permanecer calado** e de não responder às perguntas, sem que o silêncio importe confissão ou prejuízo (advertência do direito ao silêncio — CF, art. 5º, LXIII).
- **CF, art. 5º, LXIII** — direito ao silêncio e à assistência de advogado; **LV** — contraditório e ampla defesa; **LXIV** — identificação dos responsáveis pela prisão/interrogatório policial.
- **Art. 6º, V, do CPP c/c a técnica do art. 405** — as perguntas e respostas devem ser **fielmente** reduzidas a termo.

## Metodologia de auditoria (passo a passo)

O trabalho tem duas frentes: **(A)** auditar o termo e **(B)** redigir a peça.

### A. Auditoria do termo (cotejo)

1. **Reunir o material.** Obter (i) o **termo/ata escrito** juntado aos autos do IP e (ii) a **gravação audiovisual/áudio** do ato, se existente (CPP, art. 405, §1º/§2º, por analogia). Não havendo gravação, esse **é, por si, um ponto de impugnação** — a ausência de registro fiel impede a defesa de conferir a fidelidade.
2. **Verificar as formalidades essenciais** (checklist de forma):
   - Consta a **advertência do direito ao silêncio** (art. 186)? Registrada **antes** das perguntas de mérito?
   - Consta a **presença/ciência de advogado ou defensor** (CF, art. 5º, LXIII), ou renúncia informada?
   - O termo está **assinado** pelo interrogando, pela autoridade e por quem mais deva assinar? Havendo impossibilidade de assinar, há **assinatura a rogo** (art. 195)?
   - Há **data, hora de início e de término**, local e **identificação** dos presentes (art. 5º, LXIV, CF)?
   - Foi consignado que o interrogando **leu ou lhe foi lido** o termo antes de assinar?
3. **Cotejar oralidade x escrita** (o núcleo). Com a gravação em mãos, percorrer o ato marcando:
   - **Perguntas indeferidas** pela autoridade que **não foram consignadas** (a defesa/investigado pediu e ficou de fora do termo).
   - **Protestos e ressalvas** feitos e não registrados.
   - **Respostas resumidas, deturpadas ou "traduzidas"** para linguagem que altera o sentido (ex.: transformar "não me lembro" em "não vi", ou afirmação condicional em categórica).
   - **Trechos suprimidos** favoráveis à defesa (negativas, álibis, retificações espontâneas).
   - **Inserções** não ditas (perguntas sugestivas embutidas, "confissão" que a fala não sustenta).
4. **Registrar cada divergência** numa tabela de cotejo: `timestamp da gravação | trecho falado (transcrição fiel) | o que consta no termo (linha/fl.) | tipo de vício | relevância`.
5. **Classificar o defeito** e escolher o remédio (retificação, complementação, desentranhamento, ou reconhecimento de nulidade/imprestabilidade).

### Tabela-modelo de cotejo (preencher por divergência)

```
| # | Timestamp (min:seg) | O que foi dito (transcrição fiel) | O que consta no termo (fl./linha) | Tipo de vício            | Relevância para a defesa      |
|---|---------------------|-----------------------------------|-----------------------------------|--------------------------|-------------------------------|
| 1 | 12:41               | "eu não estava no local"          | "o indiciado confirmou presença"  | deturpação (inversão)    | ALTA — inverte a negativa     |
| 2 | 18:03               | pergunta da defesa indeferida     | ausente                           | omissão de indeferimento | MÉDIA — cerceia contraditório |
| 3 | 00:00               | (sem advertência do silêncio)     | ausente                           | vício de forma (art.186) | ALTA — nulidade do ato        |
```

## Tipologia de vícios e o remédio adequado

| Vício no termo | Fundamento | Remédio típico |
|---|---|---|
| Ausência de advertência do direito ao silêncio | Art. 186 CPP; CF 5º, LXIII | Impugnação; imprestabilidade do interrogatório como prova de confissão |
| Termo sem assinatura (do interrogando/autoridade) | Art. 195 CPP | Retificação/complementação; se insanável, desentranhamento |
| Impossibilidade de assinar sem assinatura a rogo | Art. 195 CPP | Retificação com assinatura a rogo por pessoa idônea |
| Perguntas (da defesa) indeferidas não consignadas | Art. 6º, V; art. 405 (analogia); CF 5º, LV | Retificação/complementação do termo com o indeferimento |
| Protestos/ressalvas não registrados | CF 5º, LV | Retificação para consignar |
| Transcrição divergente da gravação | Art. 405, §1º/§2º (analogia) | Retificação para conformar à gravação; prevalência do audiovisual |
| Resposta deturpada/resumida que altera o sentido | Art. 6º, V (fidelidade) | Retificação; impugnação do trecho |
| Ausência de qualquer gravação/registro fiel | Art. 405 (analogia); CF 5º, LV | Impugnação da fidelidade; pedido de reprodução do ato |
| Perguntas sugestivas/capciosas embutidas no termo | Ampla defesa; lealdade | Impugnação do trecho e do valor probatório |

> **Regra de prevalência.** Havendo **gravação audiovisual**, ela é o registro **primário e fiel** do ato; a transcrição é instrumento acessório. Divergência entre ambos resolve-se **em favor da gravação** — a transcrição é que deve ser retificada para conformar-se ao que foi efetivamente dito e ouvido (racional do art. 405, §2º, por analogia). Sustente isso ao pedir retificação.

## Teses (defensivas) e contra-teses

**Teses defensivas:**

1. **Nulidade/imprestabilidade do interrogatório sem advertência do silêncio (art. 186; CF 5º, LXIII).** A falta da advertência **prévia** contamina o valor do ato como prova de confissão — o silêncio não pode ser presumido renunciado sem aviso formal.
2. **Prevalência da gravação sobre a transcrição (art. 405, §2º, analogia).** A redução a termo que diverge do audiovisual deve ser retificada; o que foi **dito e gravado** é o que vale, não o que o escrivão resumiu.
3. **Cerceamento do contraditório pela omissão de perguntas indeferidas/protestos (CF 5º, LV).** A ata que apaga o indeferimento impede a defesa de discutir a pertinência da pergunta e de recorrer — deve ser complementada.
4. **Vício de assinatura (art. 195).** Termo sem assinatura, ou com impossibilidade de assinar sem a **assinatura a rogo**, é formalmente defeituoso — retificação e, se insanável, desentranhamento.
5. **Deturpação/edição do conteúdo.** A "confissão" ou a afirmação incriminadora que a gravação **não sustenta** é inservível; requer-se a exclusão do trecho e o cotejo pericial se necessário.

**Contra-teses (acusação) — antecipe-as:**

- **"Mera irregularidade sem prejuízo" (*pas de nullité sans grief*, art. 563 CPP).** Rebata demonstrando o **prejuízo concreto**: a divergência muda o sentido da prova, embasa a denúncia, ou cerceia a defesa. A régua é o prejuízo — por isso o **cotejo documentado** é decisivo.
- **"Valor renovável em juízo".** O interrogatório policial é peça de informação e será renovado sob contraditório judicial. Responda que o **vício documental** persiste como fonte de contaminação (ex.: denúncia lastreada em confissão deturpada) e que a retificação/desentranhamento evita que o vício se propague.
- **"Ausência de gravação não é obrigatória na fase policial".** Sustente que, **existindo** gravação, prevalece sobre a transcrição; e que a **inexistência** de qualquer registro fiel, somada a divergências relevantes, compromete a confiabilidade do ato (CF 5º, LV).

## Estrutura da peça (petição de retificação/impugnação)

Endereçada, conforme a fase, à **autoridade policial** (retificação do termo no IP) ou ao **Juízo** competente (quando os autos já estão em juízo, para desentranhamento/impugnação probatória). Estrutura:

1. **Endereçamento** e qualificação (autos do IP nº / autos do processo nº).
2. **I — Dos fatos:** descrever o ato (interrogatório/oitiva), a data, e a existência (ou não) de gravação.
3. **II — Do cotejo (gravação x termo):** apresentar a **tabela de divergências** com timestamps e folhas, item a item.
4. **III — Do direito:** subsumir cada divergência ao fundamento (arts. 6º, 186, 195, 405 §§; CF 5º, LV/LXIII), pedindo o remédio próprio; sustentar a **prevalência da gravação**.
5. **IV — Do pedido:** retificação/complementação do termo; subsidiariamente, **desentranhamento** e reconhecimento da imprestabilidade; requerer a **juntada da mídia** e, se necessário, **perícia** de cotejo.

```
[AUTORIDADE POLICIAL / EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA
[VARA] DA COMARCA DE [COMARCA]]


Inquérito Policial nº [Nº DO IP] / Autos nº [Nº DO PROCESSO]


[NOME DO INVESTIGADO/RÉU], já qualificado, por seu advogado que esta subscreve
(procuração anexa), vem, respeitosamente, com fundamento nos arts. 6º, 186, 195
e 405, §§, do Código de Processo Penal e no art. 5º, LV e LXIII, da Constituição
Federal, requerer a

RETIFICAÇÃO / IMPUGNAÇÃO DA ATA/TERMO DO INTERROGATÓRIO (OITIVA)

realizado em [DATA], pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

Em [DATA], foi realizado o [interrogatório do investigado / a oitiva de
testemunha] perante a autoridade policial, ato [gravado em meio audiovisual,
conforme mídia de fl./ev. [...] / não gravado], cuja redução a termo consta de
fls./ev. [...].

Ao cotejar a gravação com o termo, constatou-se que este NÃO reproduz fielmente
o que foi dito e ocorrido no ato, incorrendo nos vícios abaixo demonstrados.


II — DO COTEJO (GRAVAÇÃO x TERMO)

[Inserir a tabela de divergências: timestamp | trecho falado | o que consta no
termo (fl./linha) | tipo de vício | relevância. Um item por divergência.]

[Item 1 — ex.: aos 12min41s, o interrogando afirma "eu não estava no local",
ao passo que o termo (fl. [...]) registra "o indiciado confirmou presença" —
inversão que altera o sentido em prejuízo da defesa.]

[Item 2 — ex.: aos 18min03s, foi indeferida pergunta formulada pela defesa,
indeferimento NÃO consignado no termo, em afronta ao contraditório.]

[Item 3 — ex.: não consta do termo a advertência do direito ao silêncio
(art. 186 do CPP), que a gravação demonstra não ter sido feita antes das
perguntas de mérito.]


III — DO DIREITO

a) Da fidelidade do registro e da prevalência da gravação (art. 405, §§, do CPP,
por analogia — art. 3º do CPP). Existindo gravação audiovisual, ela é o registro
fiel do ato; a transcrição divergente deve conformar-se ao que foi efetivamente
dito.

b) Da advertência do direito ao silêncio (art. 186 do CPP; art. 5º, LXIII, da
CF). A ausência de advertência prévia compromete o valor do ato como prova de
confissão.

c) Do contraditório e da consignação (art. 6º, V, do CPP; art. 5º, LV, da CF).
Perguntas indeferidas e protestos devem ser consignados; sua omissão cerceia a
defesa.

d) Da assinatura (art. 195 do CPP). [Se for o caso: o termo carece de assinatura
/ da assinatura a rogo por pessoa idônea, sendo formalmente defeituoso.]

[Rebater desde já eventual alegação de "mera irregularidade sem prejuízo"
(art. 563 do CPP), demonstrando o prejuízo concreto acima apontado.]


IV — DO PEDIDO

Diante do exposto, requer:

a) a RETIFICAÇÃO/COMPLEMENTAÇÃO do termo de fls./ev. [...], conformando-o à
   gravação e consignando as perguntas indeferidas, os protestos e as
   advertências;
b) subsidiariamente, caso insanável o vício, o DESENTRANHAMENTO do termo e o
   reconhecimento de sua imprestabilidade como elemento de convicção;
c) a juntada/preservação da mídia audiovisual do ato (fl./ev. [...]);
d) se necessário, a realização de PERÍCIA de cotejo entre a gravação e a
   transcrição.

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [AUTORIDADE/JUÍZO], [COMARCA], [Nº DO IP], [Nº DO PROCESSO], [NOME DO INVESTIGADO/RÉU], [DATA do ato], folhas/eventos, timestamps, [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. **Mídia audiovisual/áudio** do ato (ou a informação de sua inexistência/negativa de acesso).
3. **Transcrição fiel** dos trechos divergentes (feita pela defesa), com timestamps.
4. **Tabela de cotejo** (gravação x termo).
5. Cópia do **termo/ata** impugnado (com as folhas/linhas destacadas).

## Precedentes e súmulas (conferir vigência via `jurisprudencia-stj-stf`)

> **Citation Gate.** Os dispositivos de lei acima (CPP arts. 6º, 186, 195, 405; CF art. 5º, LV, LXIII, LXIV) podem ser citados livremente. **Qualquer precedente específico** (número de HC/RHC/REsp/RE, informativo ou tema) deve ser **conferido** antes de ir para a peça — prefira ensinar a **tese** e ancorá-la no **dispositivo**.

- **Direito ao silêncio e sua advertência:** a exigência de informar o direito de calar antes do interrogatório é jurisprudência consolidada a partir da leitura do art. 186 do CPP com o art. 5º, LXIII, da CF. Para citar acórdão específico do STF/STJ sobre nulidade do interrogatório sem advertência, **confira o número e o teor** via `jurisprudencia-stj-stf`. [NÃO VERIFICADO — não citar número de acórdão sem conferência.]
- **Valor do interrogatório policial e renovação em juízo:** há entendimento de que elementos do inquérito, não repetidos sob contraditório, não bastam **isoladamente** para condenar (racional do art. 155 do CPP). O número de precedente específico deve ser **verificado**. [NÃO VERIFICADO]
- **Prevalência do registro audiovisual e desnecessidade de transcrição:** decorre do art. 405, §§, do CPP; para amparar em julgado concreto sobre divergência transcrição x gravação, **confira** via `jurisprudencia-stj-stf`. [NÃO VERIFICADO]

**Não invente número de HC/REsp/tema/informativo.** Melhor faltar precedente do que citar julgado inexistente — há sanções reais por jurisprudência fabricada por IA.

## Erros comuns (anti-padrões)

- **Impugnar por leitura passiva**, sem o cotejo com a gravação — vira alegação genérica e não demonstra prejuízo.
- **Não pedir/preservar a mídia** audiovisual, deixando a divergência sem prova.
- **Confundir os planos:** atacar o **documento-termo** (esta skill) quando o problema é a atuação **ao vivo** (`acompanhamento-interrogatorio-policial`) ou a prova **material** (`impugnacao-cadeia-custodia`).
- **Alegar nulidade sem apontar o prejuízo concreto** (art. 563 CPP) — a régua é o *grief*.
- **Tratar tudo como nulidade absoluta:** parte dos vícios é sanável por **retificação/complementação**; peça o remédio proporcional e reserve o desentranhamento para o insanável.
- **Deixar de consignar timestamps e folhas** — sem ancoragem, o juízo não confere e o cotejo perde força.
- **Citar precedente de memória** sem passar pela verificação de citações.

## Checklist final

- [ ] Reuni o **termo escrito** e a **gravação** (ou registrei a inexistência desta)?
- [ ] Verifiquei as **formalidades**: advertência do silêncio (186), assinatura (195), data/hora/identificação (CF 5º, LXIV)?
- [ ] Fiz o **cotejo** e preenchi a **tabela de divergências** com timestamps e folhas?
- [ ] Classifiquei cada vício e escolhi o **remédio proporcional** (retificação › complementação › desentranhamento)?
- [ ] Demonstrei o **prejuízo concreto** de cada divergência (art. 563 CPP)?
- [ ] Sustentei a **prevalência da gravação** sobre a transcrição (art. 405, §§, analogia)?
- [ ] Requeri a **juntada/preservação da mídia** e, se preciso, a **perícia** de cotejo?
- [ ] Passei toda súmula/precedente/tese pelo gate `jurisprudencia-stj-stf` (nenhum número de acórdão de memória)?
- [ ] Submeti à **revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. A responsabilidade pela atuação, pelas afirmações e pelas impugnações é sempre do **advogado** (Estatuto da OAB e Código de Ética; **Provimento CFOAB 205/2021** quanto à publicidade e à atuação profissional). Nenhuma súmula, precedente ou tese é citado de memória: tudo passa **obrigatoriamente** pelo gate de verificação de citações (`jurisprudencia-stj-stf`) — há **sanções reais** por jurisprudência inventada por IA. Preserve o **sigilo** e a **LGPD**: dados do investigado/assistido nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
