---
name: retratacao-cabal-honra-143
description: >-
  Use ao elaborar ou avaliar a RETRATAÇÃO CABAL do querelado nos crimes contra a honra — declaração
  do ofensor que extingue a punibilidade na CALÚNIA e na DIFAMAÇÃO (não na injúria): requisitos
  (cabal, antes da sentença, unilateral, independe de aceitação), retratação por rede
  social/imprensa pelos mesmos meios (art. 143, parágrafo único), diferença de mero pedido de
  desculpas. Rascunho para revisão humana. Gatilhos… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, crimes-contra-honra, extincao-punibilidade]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-retratacao-cabal-honra-143"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["retratacao-cabal-honra-143", "retratacao cabal", "cabal honra"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Retratação Cabal do Querelado nos Crimes contra a Honra (CP, art. 143)

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

Esta skill orienta a elaboração e a avaliação da **retratação cabal** do ofensor nos crimes contra a honra: o ato pelo qual o **querelado se desdiz**, retirando de forma completa a imputação ofensiva, antes da sentença, e com isso **extingue a punibilidade** (CP, art. 107, VI, c/c art. 143). É instituto do **ofensor** (não da vítima) e opera **apenas na calúnia e na difamação** — **jamais na injúria**.

> **Lição central:** retratar-se **não é pedir desculpas**. A retratação eficaz do art. 143 é **cabal** — retirada integral, incondicional e sem ressalvas da imputação —, feita **antes da sentença** (de 1º grau) e **por iniciativa unilateral** do querelado; **independe de aceitação** pela vítima. Um "peço desculpas se ofendi", condicionado ou parcial, **não** extingue a punibilidade. E ela **não alcança a injúria** (art. 140), porque na injúria não se atribui fato, e sim qualidade negativa: não há "fato" a desmentir.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 138 a 145 do CP** (calúnia, difamação, injúria e disposições comuns) e do **art. 143 e seu parágrafo único** (retratação pelos mesmos meios — incluído pela Lei 13.188/2015). Confira também o **art. 107, VI, CP** (retratação como causa extintiva) e o rito dos **arts. 519 a 523 do CPP** (procedimento dos crimes contra a honra). Súmulas, temas e eventual *overruling* passam pela skill `jurisprudencia-stj-stf` **antes** de fundamentar. Atenção ao debate sobre a descriminalização parcial da injúria simples e à **injúria racial** (hoje racismo, art. 2º-A da Lei 7.716/89, red. Lei 14.532/2023) — mudança que afeta o que ainda é "crime contra a honra" para fins do art. 143.

## Base legal

- **Art. 143 do CP** — "O querelado que, antes da sentença, se retrata cabalmente da calúnia ou da difamação, fica isento de pena." É a norma-núcleo. Repare: fala em **querelado** (ação penal privada), **antes da sentença**, **cabalmente**, e só em **calúnia ou difamação**.
- **Art. 143, parágrafo único, CP** (incluído pela **Lei 13.188/2015**) — nos crimes cometidos por meio de **rede social / meios de comunicação**, a retratação **dá-se, se assim desejar o ofendido, pelos mesmos meios** em que se praticou a ofensa. Traz a exigência de **publicidade equivalente** da retratação.
- **Art. 107, VI, CP** — a **retratação do agente**, nos casos em que a lei a admite, é **causa de extinção da punibilidade**. O art. 143 é justamente um desses casos.
- **Arts. 138, 139 e 140 do CP** — calúnia (imputar falsamente **fato definido como crime**), difamação (imputar **fato ofensivo à reputação**) e injúria (atribuir **qualidade negativa**, ofendendo a dignidade/decoro). A distinção é decisiva: só as duas primeiras admitem retratação.
- **Arts. 145 e 519 a 523 do CPP** — ação penal (em regra **privada**, mediante queixa) e **rito especial** dos crimes contra a honra (inclui a **audiência de reconciliação** do art. 520 CPP, momento estratégico para a retratação).

> **Distinção de institutos (não confundir):** esta skill trata da **retratação do OFENSOR** (art. 143 CP). É coisa distinta da **retratação da representação** pela VÍTIMA (art. 25 CPP — ação pública condicionada) e do **perdão do ofendido / perempção / renúncia** na ação privada (arts. 105, 106, 60 CP e 51-60 CPP). Confira o polo e o instituto correto antes de peticionar — o roteador deve conferir se o pedido é de retratação do querelado (aqui) ou de outro instituto.

## Natureza jurídica e efeitos

- **Causa pessoal de extinção da punibilidade** (art. 107, VI). O fato continua típico, ilícito e culpável; o que se afasta é a **punibilidade**. Por isso a lei diz "fica **isento de pena**".
- **Ato unilateral e incondicionado.** A retratação eficaz **não depende de aceitação** do ofendido para extinguir a punibilidade (a aceitação é da lógica do **perdão**, não da retratação). A vontade do ofendido só reaparece no **parágrafo único** para escolher se quer a retratação **pelos mesmos meios**.
- **Caráter personalíssimo e comunicabilidade no concurso.** Em regra é ato **pessoal** de cada querelado; havendo **coautoria/participação**, a retratação de um **não** aproveita automaticamente aos demais (é causa **pessoal**). Cada ofensor deve retratar-se. **[NÃO VERIFICADO]** quanto a eventual extensão em hipóteses específicas — confira posição atual via `jurisprudencia-stj-stf`.
- **Momento-limite:** **antes da sentença** de 1º grau. Retratação após a sentença é **intempestiva** para os fins do art. 143 (embora possa ter valor como circunstância atenuante genérica — art. 65, III, "b", CP — o que é efeito **diverso**, não extinção da punibilidade). Para aferir tempestividade de prazos processuais correlatos, use `calculadora-tempestividade`.

## Os requisitos da retratação cabal — checklist de subsunção

Para o art. 143 operar, **todos** os requisitos devem estar presentes:

1. **Crime admitido** — apenas **calúnia (art. 138)** ou **difamação (art. 139)**. **Injúria (art. 140) está fora** — não há fato a desmentir; a defesa que confundir isso perde o pedido.
2. **Sujeito** — quem se retrata é o **querelado (ofensor)**, réu na ação penal (em regra privada).
3. **"Cabalmente"** — retratação **completa, integral e inequívoca**: o ofensor **retira a imputação**, reconhece que o fato imputado é inverídico ou que não deveria tê-lo afirmado, **sem ressalvas, sem condicionantes e sem reafirmar a ofensa** de modo velado. Retratação **parcial, ambígua ou que reitera a ofensa** não é cabal.
4. **Tempestividade** — **antes da sentença** (de 1º grau).
5. **Forma e publicidade (quando aplicável)** — se a ofensa foi por **rede social / imprensa**, e **se o ofendido assim desejar**, a retratação deve ser feita **pelos mesmos meios** (parágrafo único) — mesma plataforma, alcance e destaque equivalentes.
6. **Voluntariedade** — ato do próprio querelado (por si ou por procurador com poderes), **independente de aceitação** da vítima para extinguir a punibilidade.

> **Retratação x pedido de desculpas x direito de resposta.** São três coisas diferentes. **Desculpar-se** ("lamento o ocorrido") é reconhecimento de mágoa, não desmentido do fato — **não** basta. **Retratar-se** é **desdizer o fato imputado**. O **direito de resposta** (Lei 13.188/2015) é remédio **da vítima** contra a ofensa na imprensa — não se confunde com a retratação do ofensor, embora o parágrafo único do art. 143 use a mesma lógica de "mesmos meios".

## Estrutura da peça — a petição/declaração de retratação

Não há forma sacramental, mas a retratação segura reúne: (i) **qualificação** e referência aos autos; (ii) **identificação exata da imputação** que se retrata (transcrever o teor caluniador/difamatório); (iii) **declaração cabal** de retirada da imputação; (iv) **fundamento** (art. 143 c/c art. 107, VI, CP); (v) se for o caso, **oferta de retratação pelos mesmos meios** (parágrafo único); (vi) **pedido de extinção da punibilidade**.

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA [VARA CRIMINAL/JUIZADO]
DA COMARCA DE [COMARCA]


Ação Penal Privada (Queixa-Crime) nº [Nº DOS AUTOS]
Querelante: [NOME]
Querelado: [NOME]


[NOME DO QUERELADO], já qualificado nos autos da ação penal privada em
epígrafe, por seu advogado que esta subscreve (procuração com poderes
especiais anexa), vem, respeitosamente, à presença de Vossa Excelência,
com fundamento no art. 143, caput [e parágrafo único], c/c o art. 107,
VI, ambos do Código Penal, apresentar

RETRATAÇÃO CABAL

com o consequente requerimento de EXTINÇÃO DA PUNIBILIDADE, pelas razões
de fato e de direito a seguir expostas.


I — DA IMPUTAÇÃO OBJETO DA RETRATAÇÃO

Imputa-se ao querelado a prática de [CALÚNIA (art. 138) / DIFAMAÇÃO
(art. 139)] do Código Penal, consistente em [DESCREVER/TRANSCREVER a
afirmação ofensiva — o exato teor do fato imputado], veiculada em
[DATA/LOCAL/MEIO — ex.: postagem na rede social X].


II — DA RETRATAÇÃO CABAL (art. 143 do CP)

O querelado, por este ato e ANTES DA SENTENÇA, RETRATA-SE CABALMENTE da
[calúnia/difamação] acima, DECLARANDO que a imputação [é inverídica /
não corresponde à realidade / não deveria ter sido feita] e que a RETIRA
de forma integral, incondicional e sem qualquer ressalva, reconhecendo a
[honra/reputação] do querelante.

Trata-se de retratação CABAL, tempestiva (anterior à sentença) e
voluntária, que independe de aceitação do querelante para produzir seus
efeitos (art. 143 c/c art. 107, VI, do CP).


III — DA RETRATAÇÃO PELOS MESMOS MEIOS (art. 143, parágrafo único) [se aplicável]

Tendo a ofensa sido veiculada por [rede social / meio de comunicação],
e caso assim deseje o ofendido, o querelado desde já se dispõe a divulgar
esta retratação PELOS MESMOS MEIOS em que se praticou a ofensa, com
destaque e alcance equivalentes, nos termos do art. 143, parágrafo único,
do CP.


IV — DO PEDIDO

Diante do exposto, requer:

a) o recebimento e a homologação da presente RETRATAÇÃO CABAL;
b) a consequente DECLARAÇÃO DE EXTINÇÃO DA PUNIBILIDADE do querelado, com
   fundamento no art. 107, VI, c/c o art. 143 do Código Penal;
c) [se aplicável] a fixação de forma e prazo para a divulgação da
   retratação pelos mesmos meios (art. 143, parágrafo único, do CP).

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [Nº DOS AUTOS], [NOMES], [DISPOSITIVO — calúnia/difamação], [TEOR DA IMPUTAÇÃO], [DATA/LOCAL/MEIO], [LOCAL], [DATA], [ADVOGADO], [UF], [NÚMERO] OAB.

> **Redação da declaração — cuidado com o "veneno da ressalva".** Fórmulas como "retiro o que disse, **mas mantenho minha opinião**", "**se** houve ofensa, retiro" ou "não quis ofender, **mas os fatos são verdadeiros**" **descaracterizam** a retratação (não é cabal / reafirma a imputação). A declaração deve **desdizer o fato**, não reafirmá-lo com verniz de cortesia.

## Momento processual: a audiência de reconciliação (art. 520 CPP)

No rito dos crimes contra a honra de ação privada, antes de receber a queixa o juiz oferece às partes **oportunidade de reconciliação** (art. 520 CPP). É o **momento estratégico natural** para articular a retratação: composição pode encerrar o feito com **extinção da punibilidade** sem desgaste. Registre em ata o teor exato da retratação e a manifestação do querelante sobre o parágrafo único (mesmos meios).

## Teses e contra-teses

**Teses do querelado (defesa):**
- **Retratação cabal e tempestiva** → extinção da punibilidade (art. 143 c/c 107, VI). Núcleo do pedido.
- **Independência de aceitação:** a extinção opera pela só retratação eficaz; a recusa do querelante em "aceitar" não obsta o reconhecimento (a aceitação é da lógica do perdão, não da retratação).
- **Ofensa de difamação, não injúria** (quando houver dúvida de enquadramento): se a imputação é de **fato**, cabe difamação e, com ela, a retratação — sustentar a correta subsunção para **abrir** a via do art. 143.
- **Cabimento pelos mesmos meios como suficiente** (art. 143, p.u.): oferta de retratação pública equivalente satisfaz a exigência quando o ofendido a deseja.

**Contra-teses (querelante/acusação privada):**
- **Retratação não cabal:** parcial, condicionada, ambígua ou que **reitera** a ofensa — não extingue a punibilidade.
- **Intempestividade:** retratação **após a sentença** não se enquadra no art. 143 (só atenua, art. 65, III, "b").
- **Crime de injúria:** se a imputação é de **qualidade** (não de fato), **não há retratação possível** (art. 143 não alcança o art. 140).
- **Descumprimento do parágrafo único:** oferta de retratação em meio de menor alcance que a ofensa original, quando o ofendido pediu os "mesmos meios".

## Súmulas, precedentes e doutrina (sob o Citation Gate)

> **Citation Gate — inegociável.** Os **dispositivos legais** acima (arts. 138–145, 107 VI CP; 519–523 CPP) são citáveis com segurança porque são texto de lei. **Qualquer precedente específico** (número de HC/REsp/RE, informativo, tema repetitivo, enunciado de súmula sobre retratação) **NÃO deve ser citado de memória**. Marque **[NAO VERIFICADO]** e confira via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de usar. **Ensine a tese e o dispositivo — não arrisque um número de acórdão.**

- **Retratação x aceitação da vítima:** a doutrina majoritária sustenta que a retratação do art. 143 é **unilateral** e **independe de aceitação** — diferentemente do perdão. Se for citar acórdão que afirme isso, marque **[NAO VERIFICADO]** e verifique.
- **Alcance do parágrafo único (Lei 13.188/2015):** discute-se se a exigência de "mesmos meios" é **requisito de eficácia** da retratação ou **faculdade** exercível a pedido do ofendido (o texto diz "**se assim desejar o ofendido**", sugerindo faculdade do ofendido, não condição imposta ao ofensor). Sustente a leitura literal e confira jurisprudência específica — **[NAO VERIFICADO]**.
- **Injúria racial → racismo:** com a Lei 14.532/2023, a antiga injúria racial (art. 140, §3º) passou a ser tratada como **racismo** (Lei 7.716/89, art. 2º-A) — crime **inafiançável e imprescritível**, de **ação pública**, ao qual **não** se aplica a retratação do art. 143. Confirme a moldura vigente antes de qualquer conclusão — **[NAO VERIFICADO]** quanto a decisões de transição.

## Erros comuns / anti-padrões (evitar)

- **Confundir retratação com pedido de desculpas** — desculpar-se não desdiz o fato; não extingue a punibilidade.
- **Aplicar o art. 143 à injúria** — erro grave: injúria (art. 140) **não** admite retratação; não há "fato" a retirar.
- **Retratação condicionada ou parcial** ("retiro, mas...") — descaracteriza a "cabalidade".
- **Retratar-se após a sentença** e pleitear extinção da punibilidade — intempestivo (só rende atenuante, art. 65, III, "b").
- **Confundir com a retratação da representação (art. 25 CPP)** ou com **perdão/perempção/renúncia** — institutos, polos e efeitos diferentes.
- **Ignorar o parágrafo único** quando a ofensa foi em rede social/imprensa e o ofendido pediu "mesmos meios".
- **Reafirmar a ofensa** no corpo da própria "retratação" (autossabotagem) — nova conduta potencialmente ofensiva.
- **Citar acórdão/súmula de memória** — passa obrigatoriamente pelo gate de verificação.

## Checklist final

- [ ] O crime é **calúnia ou difamação** (não injúria)?
- [ ] A retratação é **cabal** — integral, incondicional, sem ressalva e **sem reafirmar** a ofensa?
- [ ] É **anterior à sentença** de 1º grau (tempestividade)?
- [ ] Está claro que **independe de aceitação** do querelante para extinguir a punibilidade?
- [ ] Se a ofensa foi por rede social/imprensa: há **oferta de retratação pelos mesmos meios** (art. 143, p.u.), respeitado o desejo do ofendido?
- [ ] Fundamentação correta: **art. 143 c/c art. 107, VI, CP**?
- [ ] Pedido expresso de **declaração de extinção da punibilidade**?
- [ ] Registro em **ata** (se em audiência do art. 520 CPP)?
- [ ] Todo precedente/súmula passou por `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio metodológico à redação da retratação e à análise de sua eficácia; **não** substitui o juízo do advogado, a leitura dos autos concretos nem a conferência da moldura legal vigente.
- **Citation Gate:** dispositivos de lei citados com certeza; **nenhum** número de acórdão, informativo, tema ou súmula usado de memória — tudo conferido via `jurisprudencia-stj-stf` / `verificacao-citacoes`.
- **Ética por polo.** Foco majoritário em **defesa** (querelado), sob **OAB/EAOAB e Provimento 205/2021**. Se a atuação for do **querelante/assistente de acusação** (avaliar a eficácia da retratação alheia, impugná-la como não cabal), observe a ética do respectivo polo — e o roteador deve **conferir o polo** antes de designar a peça.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
