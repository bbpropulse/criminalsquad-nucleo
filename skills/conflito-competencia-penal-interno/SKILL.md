---
name: conflito-competencia-penal-interno
description: >-
  Use ao suscitar, contra-arrazoar ou estudar CONFLITO DE COMPETÊNCIA (ou de jurisdição) interno no
  processo penal — a divergência entre dois ou mais juízos/tribunais sobre quem processa o mesmo
  fato (arts. 113-117 CPP). Gatilhos: conflito de competência, conflito de jurisdição, conflito
  positivo, conflito negativo, suscitar conflito, art. 114 CPP, art. 115 CPP, art. 116 CPP…. Não use
  para conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, processo-penal, competencia, incidentes]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-conflito-competencia-penal-interno"]
  risk_level: "r4"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["conflito-competencia-penal-interno", "conflito competencia", "penal interno"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Conflito de Competência e de Jurisdição no Processo Penal (arts. 113-117 CPP)

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

Esta skill orienta o **incidente de conflito de competência/jurisdição**: a divergência entre **dois ou mais órgãos jurisdicionais** sobre quem deve processar e julgar o **mesmo fato criminoso**, dirimida por um tribunal hierarquicamente superior a ambos. É via autônoma prevista no art. 113 CPP, ao lado da exceção de incompetência (art. 108).

> **Lição central:** conflito pressupõe **divergência efetiva entre juízos** — não é sucedâneo de recurso nem de exceção. Antes de suscitar, confirme três coisas: (1) há **dois juízos manifestando posição** sobre o mesmo fato (no conflito **negativo**, o segundo juízo já **recusou** expressamente — sem a recusa, ainda não há conflito); (2) **não** há sentença transitada em julgado de um deles (Súm. 59/STJ); (3) você identificou o **tribunal certo** para dirimir (STF/STJ/TRF/TJ), sob pena de não conhecimento.

> **Cautela de vigência (obrigatória antes de citar):** o **art. 117 CPP** tem redação de 1941 (fala em "avocação" pelo STF e "recurso" ao tribunal de apelação) e está **superado** pela CF/88, que redistribuiu a competência para dirimir conflitos (CF art. 102, I, "o"; art. 105, I, "d"; art. 108, I, "e"). Cite a **moldura constitucional vigente**, não a literalidade do art. 117. Toda súmula, tese ou precedente passa pelo gate `jurisprudencia-stj-stf` antes do uso. Precedente específico incerto → marque **[NÃO VERIFICADO]** e prefira **tese + dispositivo** a número de acórdão.

## Perspectiva e polo

O conflito é incidente **bilateral e neutro**: pode ser suscitado por qualquer parte, pelo MP ou pelo próprio juízo (art. 115). Esta skill assume, por padrão, o **polo de defesa** (foco em deslocar o feito para o juízo natural e afastar juízo incompetente), mas as técnicas servem à acusação e à assistência. Toda entrega é **rascunho para revisão humana**.

## Conceitos que não podem se confundir

- **Jurisdição × competência.** A jurisdição é **una** (poder-dever de dizer o direito); a competência é a sua **medida/distribuição**. O CPP diz "conflito de jurisdição" (linguagem de 1941), mas a prática de STF/STJ consagra **"conflito de competência"** quando entre juízos da mesma Justiça; reserva-se "jurisdição" ao dissídio entre órgãos de Justiças diferentes (ex.: comum × militar; juiz × tribunal).
- **Conflito × exceção de incompetência (art. 108).** A **exceção** é oposta pela parte **dentro de um único juízo**, para que ele **decline**. O **conflito** pressupõe **dois juízos em dissídio**, resolvido por tribunal superior. Escolha o instrumento certo.
- **Conflito de competência × conflito de ATRIBUIÇÕES.** Competência é entre **órgãos jurisdicionais** (juízes/tribunais). **Atribuição** é entre **órgãos do Ministério Público** (quem investiga/denuncia). São incidentes distintos, com foros distintos — **não confundir** (ver adiante).

## Base legal

- **Art. 113 CPP** — as questões de competência resolvem-se pela **exceção** própria e também pelo **conflito** positivo ou negativo.
- **Art. 114 CPP** — hipóteses: (I) duas ou mais autoridades se dizem **competentes ou incompetentes** para o mesmo fato; (II) controvérsia sobre **unidade de juízo, junção ou separação** de processos.
- **Art. 115 CPP** — legitimados: **parte interessada** (inclui defesa, querelante, assistente), **órgãos do MP** junto a qualquer dos juízos, e **qualquer dos juízes/tribunais** em causa.
- **Art. 116 CPP** — forma: **representação** (juízes) ou **requerimento** (partes), escrito e circunstanciado, com documentos; §1º negativo pode ser suscitado **nos próprios autos**; §2º positivo → relator **pode suspender** o processo; §§3º-5º requisição de informações, oitiva do Procurador-Geral e julgamento; §6º execução da decisão.
- **Art. 567 CPP** — a incompetência do juízo **anula só os atos decisórios**; os instrutórios são ratificáveis, e o processo segue ao juiz competente.
- **Arts. 69 a 91 CPP** — critérios de competência (lugar da infração, domicílio, natureza, distribuição, conexão/continência, prevenção, prerrogativa) que servem de **fundamento material** do conflito.
- **CF art. 102, I, "o"; art. 105, I, "d"; art. 108, I, "e"** — a quem compete **dirimir** o conflito (ver tabela).

## Espécies de conflito

| Espécie | Configuração | Risco prático |
|---|---|---|
| **Positivo** | Dois ou mais juízos se declaram **competentes** para o mesmo fato | Atos simultâneos / *bis in idem* processual → pedir **suspensão** (art. 116, §2º) |
| **Negativo** | Dois ou mais juízos se declaram **incompetentes** (ninguém quer o feito) | Paralisação; exige que o **2º juízo já tenha recusado** para configurar |

## Quem dirime o conflito (endereçamento) — conferir via `jurisprudencia-stj-stf`

| Órgãos em conflito | Tribunal competente | Fundamento |
|---|---|---|
| STJ × qualquer tribunal; entre Tribunais Superiores | **STF** | CF art. 102, I, "o" |
| Tribunais diversos; tribunal × juízes não vinculados; **juízes vinculados a tribunais diversos** (ex.: juiz estadual × juiz federal) | **STJ** | CF art. 105, I, "d" |
| **Juízes federais** vinculados ao mesmo TRF (e juiz estadual investido de jurisdição federal, na região) | **TRF** | CF art. 108, I, "e"; **Súm. 3/STJ** |
| **Juízes estaduais** do mesmo Tribunal de Justiça | **TJ** | CF art. 125; regimento/Constituição estadual |

> Endereçar ao tribunal **errado** leva ao **não conhecimento**. Defina a vinculação dos juízos **antes** de peticionar. Sobre juizado especial federal × juízo federal comum, há evolução jurisprudencial — **[NÃO VERIFICADO]**: confira a orientação atual (competência do TRF) via `jurisprudencia-stj-stf` antes de afirmar.

## Metodologia — passo a passo para suscitar

```
1) Há divergência EFETIVA entre dois+ juízos sobre o MESMO fato?
   - Positivo: ambos se afirmam competentes.
   - Negativo: o 1º declinou E o 2º RECUSOU. (Sem recusa do 2º → ainda não há conflito.)
2) Há sentença transitada em julgado de um dos juízos? → Súm. 59/STJ: NÃO cabe conflito.
3) Classifique a competência em disputa:
   - ABSOLUTA (matéria/pessoa/funcional) → arguível a qualquer tempo; nulidade absoluta.
   - RELATIVA (territorial/prevenção) → sujeita à preclusão (Súm. 33/STJ; Súm. 706/STF).
4) Identifique o TRIBUNAL competente para dirimir (STF/STJ/TRF/TJ) pela vinculação dos juízos.
5) Escolha o instrumento: conflito (dois juízos) × exceção de incompetência (art. 108, no próprio juízo).
6) Suscite: requerimento (parte) ou representação (juiz). No POSITIVO, peça suspensão (art. 116, §2º)
   e a designação de um juízo para atos urgentes (art. 3º CPP c/c art. 955 CPC, por analogia).
7) Instrua com documentos (decisões de declínio/recusa, denúncia, peças-chave) — art. 116.
```

## Tramitação no tribunal (o que esperar)

1. **Distribuição** a relator. 2. No **positivo**, eventual **suspensão** do processo e designação de juízo para medidas urgentes. 3. **Requisição de informações** às autoridades em conflito (§3º). 4. **Parecer** do Procurador-Geral (PGJ/PGR, conforme o tribunal — §5º). 5. **Julgamento**, declarando o juízo competente. 6. **Execução**: remessa de cópias às autoridades (§6º). Efeito: aplica-se o **art. 567 CPP** — preservam-se atos instrutórios, anulam-se os decisórios do juízo declarado incompetente.

## Teses e contra-teses

**Da defesa (deslocar ao juízo natural — CF art. 5º, LIII):**
- **Incompetência absoluta** (razão da matéria, da pessoa/prerrogativa ou funcional) pode ser suscitada **a qualquer tempo** e gera **nulidade absoluta** dos atos decisórios (art. 567) — não preclui.
- **Justiça comum × Justiça Federal** (CF art. 109): interesse da União/autarquia/empresa pública federal, crimes previstos em tratado, etc. deslocam à Federal.
- **Justiça comum × Justiça Militar:** crime militar próprio/impróprio (definição legal) fixa a especializada.
- **Conexão/continência (arts. 76-82):** pleitear **reunião** (economia/uniformidade) ou **separação** (art. 80) de processos conforme o interesse da defesa.
- **Foro por prerrogativa de função:** presença de agente com prerrogativa desloca a competência originária.

**Contra-teses (frequentes da acusação):**
- **Competência territorial é relativa** — se não arguida no momento próprio, **preclui** e **não se declara de ofício** (Súm. 33/STJ); o conflito não recupera prazo perdido.
- **Prevenção** fixa a competência entre juízos igualmente competentes; sua inobservância é **nulidade relativa** (Súm. 706/STF), dependente de prejuízo.
- **Súm. 122/STJ:** havendo conexão entre crime federal e estadual, a **Justiça Federal** julga ambos, afastada a regra do art. 78, II, "a", CPP.

## Súmulas aplicáveis (sob Citation Gate — conferir via `jurisprudencia-stj-stf`)

- **Súm. 59/STJ** — não há conflito de competência quando já existe **sentença com trânsito em julgado** proferida por um dos juízos em conflito.
- **Súm. 3/STJ** — compete ao **TRF** dirimir conflito, na respectiva região, entre **juiz federal e juiz estadual investido de jurisdição federal**.
- **Súm. 122/STJ** — Justiça Federal processa e julga **unificadamente** os crimes conexos de competência federal e estadual (afasta o art. 78, II, "a", CPP).
- **Súm. 706/STF** — é **relativa** a nulidade decorrente de inobservância da competência penal por **prevenção**.
- **Súm. 33/STJ** — a **incompetência relativa não pode ser declarada de ofício** (só por arguição da parte).

> Prefira citar **a tese + o dispositivo** (ex.: "art. 105, I, 'd', CF"). Números de súmula/acórdão só após conferência. Na dúvida, **omitir vence inventar**.

## Distinção crítica — conflito de ATRIBUIÇÕES do MP

Quando a divergência é sobre **qual órgão do Ministério Público** tem atribuição para investigar/denunciar (e não sobre qual juízo processa), o incidente é de **atribuições**, não de competência:
- Entre membros do **mesmo MP** (estadual ou federal) → resolve o respectivo **Procurador-Geral** (PGJ ou PGR).
- Entre **MPs de estados diferentes** ou entre **MPF e MPE** → **[NÃO VERIFICADO]**: a orientação do STF evoluiu (tendência de atribuir a decisão ao **PGR**, e não ao próprio STF). **Confirme o entendimento atual** via `jurisprudencia-stj-stf` antes de endereçar. O erro de tratar atribuição como competência (ou vice-versa) leva ao não conhecimento.

## Modelo de petição — suscitação de conflito (requerimento da parte)

```
EXCELENTÍSSIMO SENHOR MINISTRO PRESIDENTE DO [SUPERIOR TRIBUNAL DE JUSTIÇA /
TRIBUNAL DE JUSTIÇA DO ESTADO DE ... / TRIBUNAL REGIONAL FEDERAL DA ... REGIÃO]

[NOME], já qualificado nos autos [Nº DO PROCESSO], por seu advogado (procuração
anexa), com fundamento nos arts. 113, 114, [I ou II], 115, I, e 116 do Código de
Processo Penal, vem SUSCITAR

CONFLITO [POSITIVO / NEGATIVO] DE COMPETÊNCIA

entre o JUÍZO [SUSCITADO 1] e o JUÍZO [SUSCITADO 2], pelas razões a seguir.

I — DAS AUTORIDADES EM CONFLITO
Figuram como suscitados o [JUÍZO 1] e o [JUÍZO 2], ambos manifestando-se
[COMPETENTES / INCOMPETENTES] para processar e julgar o mesmo fato (autos [Nº]).

II — DOS FATOS
[Narrar a origem do dissídio: o declínio do 1º juízo (doc. __) e a recusa expressa
do 2º juízo (doc. __), no conflito negativo; ou a dupla afirmação de competência,
no positivo. Indicar o fato criminoso e as decisões que documentam a divergência.]

III — DO DIREITO
a) Do cabimento — configura-se conflito [positivo/negativo] (art. 114, [I/II], CPP),
   pois [demonstrar a divergência efetiva; inexistência de trânsito em julgado —
   Súm. 59/STJ].
b) Da competência deste Tribunal para dirimir — [CF art. 105, I, "d" / art. 108, I,
   "e" / art. 102, I, "o" / Súm. 3/STJ], conforme a vinculação dos juízos.
c) Do juízo competente — [sustentar qual juízo deve prevalecer e por quê:
   natureza da matéria, foro do lugar/ domicílio, conexão/continência, prerrogativa].

IV — DOS PEDIDOS
Requer: (a) o conhecimento do conflito; (b) [se positivo] a SUSPENSÃO do processo
(art. 116, §2º, CPP) e a designação de um dos juízos para as medidas urgentes;
(c) a requisição de informações às autoridades em conflito (art. 116, §3º);
(d) ao final, a DECLARAÇÃO da competência do [JUÍZO INDICADO].

Termos em que pede deferimento.
[LOCAL], [DATA]. [ADVOGADO] — OAB/[UF] nº [Nº]
```

**Campos a preencher:** [TRIBUNAL], [Nº DO PROCESSO], [NOME], [JUÍZO SUSCITADO 1/2], [natureza positivo/negativo], [inciso do art. 114], [fundamento constitucional], [juízo que deve prevalecer], [LOCAL], [DATA], [ADVOGADO/UF/Nº OAB].

## Documentos a instruir (art. 116)

1. Procuração. 2. Cópia das **decisões de declínio e de recusa** (ou das duas afirmações de competência). 3. Denúncia/queixa e peça acusatória. 4. Peças que demonstrem o critério de competência invocado (lugar do fato, prerrogativa, conexão). 5. Certidão de **inexistência de trânsito em julgado** (afasta a Súm. 59/STJ).

## Erros comuns e checklist

- [ ] Há **divergência efetiva** entre dois juízos (no negativo, o 2º **recusou** expressamente)?
- [ ] **Sem** sentença transitada em julgado de um dos juízos (Súm. 59/STJ)?
- [ ] **Tribunal competente** para dirimir corretamente identificado (STF/STJ/TRF/TJ)?
- [ ] Instrumento certo: **conflito** (dois juízos) e não **exceção** (art. 108, um juízo)?
- [ ] Não se está confundindo com **conflito de atribuições** do MP?
- [ ] Competência classificada como **absoluta** ou **relativa** (define preclusão)?
- [ ] No **positivo**, pedido de **suspensão** (art. 116, §2º) formulado?
- [ ] Documentos comprobatórios anexados (art. 116)?
- [ ] Súmulas/precedentes conferidos via `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Suscitar conflito **negativo** sem que o segundo juízo tenha recusado — falta divergência.
- Usar o conflito como **sucedâneo de recurso** contra decisão de competência.
- Confundir **conflito de competência** (juízes) com **conflito de atribuições** (MP).
- Endereçar ao **tribunal errado** (ignorar a vinculação dos juízos) → não conhecimento.
- Suscitar após o **trânsito em julgado** de um dos juízos (Súm. 59/STJ).
- Tratar incompetência **territorial** (relativa) como se fosse absoluta, ignorando a preclusão (Súm. 33/STJ).
- Esquecer de pedir a **suspensão** no conflito positivo, permitindo atos por juízo que pode vir a ser declarado incompetente.
- Citar a literalidade do **art. 117 CPP** (superado) em vez da moldura constitucional vigente.

## Nota de conformidade

- **Revisão humana obrigatória:** este material é apoio à preparação do incidente, não substitui o juízo do advogado responsável (CED/EAOAB) nem a análise dos autos concretos.
- **Citation Gate:** nenhuma súmula, tese ou acórdão é citado de memória — tudo passa por `jurisprudencia-stj-stf`; precedente incerto recebe **[NÃO VERIFICADO]** e privilegia-se **tese + dispositivo**.
- **Ética conforme o polo:** a instituição é de defesa (padrão). Se atuar como assistente de acusação ou órgão acusatório, ajuste o interesse e o pedido, mantendo a boa-fé processual.

## Lembretes finais

- **Conflito = divergência entre juízos**; exceção = declínio dentro de um juízo; atribuições = MP.
- **Positivo** (ambos competentes) → pedir **suspensão** (art. 116, §2º); **negativo** (ambos incompetentes) → exigir a **recusa** do 2º juízo.
- **Súm. 59/STJ:** sem conflito após trânsito em julgado de um dos juízos.
- **Tribunal que dirime** varia com a vinculação (CF art. 102/105/108; Súm. 3/STJ) — errar o foro = não conhecimento.
- **Competência absoluta** não preclui (art. 567); **relativa** (territorial/prevenção) preclui (Súm. 33/STJ; Súm. 706/STF).
- **Sempre conferir vigência** do art. 117 CPP (superado) e das súmulas via `jurisprudencia-stj-stf` antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
