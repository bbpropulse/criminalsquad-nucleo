---
name: aditamento-denuncia
description: >-
  Use quando o MINISTÉRIO PÚBLICO (ou o assistente de acusação) for ADITAR a denúncia — aditamento
  próprio (fato/réu novo revelado pela prova, mutatio libelli, art. 384 CPP) e impróprio (correção
  de erro material ou inclusão de circunstância), na forma oral em audiência ou escrita, com
  requerimento de novo interrogatório, testemunhas e reabertura da instrução. É peça do POLO
  ACUSATÓRIO. Gatilhos: aditamento da denúncia… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, acusacao, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-aditamento-denuncia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["aditamento-denuncia", "aditamento denuncia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Aditamento da Denúncia (*mutatio libelli* — arts. 384 e 569 do CPP)

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

Esta skill orienta a **redação do aditamento da denúncia pelo Ministério Público** (ou pelo assistente de acusação, no que couber): o ato pelo qual a acusação **amplia, corrige ou complementa** a imputação inicial. Distinguem-se dois tipos: o **aditamento próprio** (*mutatio libelli* — surge, na prova, **elementar ou circunstância nova** que muda a definição jurídica, art. 384) e o **aditamento impróprio** (correção de **erro material**, esclarecimento ou inclusão de circunstância que **não** altera o fato — arts. 569 e 45). É a peça **ativa** da acusação — aquela que a defesa vai responder (skill `resposta-mutatio-emendatio`).

> **Aviso de polo (obrigatório):** esta é uma skill do **POLO ACUSATÓRIO**. Só se aplica a quem atua na acusação — **Ministério Público** (regido pelo CNMP) ou **assistente de acusação** habilitado. O roteador deve **conferir o polo do usuário** (perfil em `company.md`) antes de sugeri-la; para quem atua na **defesa**, a peça correlata é `resposta-mutatio-emendatio` (a reação ao aditamento).

> **Lição central:** antes de redigir, **decida o tipo** — próprio ou impróprio. O aditamento **próprio** (*mutatio*) exige **fato/elementar novo revelado na instrução** e dispara todo o rito do art. 384 (prazo de 5 dias à defesa, novo interrogatório, 3 testemunhas, reabertura). O **impróprio** apenas corrige o que já estava no fato narrado e **não** reabre a instrução. Confundir os dois gera nulidade — por excesso (mudar o fato sem o rito) ou por defeito (aditar de menos e a sentença condenar por fato não descrito).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 383 a 385 e 569 do CPP** — a sistemática atual da *mutatio libelli* decorre da **reforma da Lei 11.719/2008**, que **acabou com a antiga baixa dos autos ao MP com possível recurso do juiz** e passou o aditamento a **iniciativa exclusiva da acusação**. Citar o regime **anterior** a 2008 é erro grave. Toda súmula, tese ou acórdão passa pelo gate `verificacao-citacoes` antes do uso.

## Base legal

- **Art. 384, *caput*, do CPP** — *mutatio libelli*: surgindo, na prova, **elementar ou circunstância** não contida na denúncia, o MP **aditará** a denúncia no prazo de **5 dias**.
- **Art. 384, §1º** — se o MP **não** aditar, aplica-se o **art. 28** (remessa à instância de revisão do MP).
- **Art. 384, §2º** — ouvido o defensor no prazo de **5 dias** e admitido o aditamento, o juiz designará dia e hora para **continuação da audiência**, com **inquirição de testemunhas, novo interrogatório do acusado, debates e julgamento**.
- **Art. 384, §3º** — aplica-se o **§2º do art. 383** (aditamento pode implicar remessa a juízo competente).
- **Art. 384, §4º** — havendo aditamento, cada parte poderá **arrolar até 3 testemunhas** no prazo de 5 dias.
- **Art. 384, §5º** — não recebido o aditamento, o processo prossegue.
- **Art. 385 do CPP** — o juiz pode condenar por circunstâncias não alegadas / reconhecer agravantes de ofício (limite da correlação — pano de fundo).
- **Art. 383 do CPP** — *emendatio libelli* (nova **definição jurídica** sem mudar o fato; **não** exige aditamento — contraste didático).
- **Art. 569 do CPP** — as **omissões da denúncia** podem ser **supridas a todo tempo, antes da sentença final** (base do aditamento impróprio).
- **Art. 45 do CPP** — aditamento na **ação penal privada** e a atuação do MP; interfaces com o art. 46 (prazos).
- **CF, art. 5º, LV** (contraditório/ampla defesa) e o **princípio da correlação** entre acusação e sentença — razão de ser de todo o instituto.

## *Mutatio* × *Emendatio* — a distinção que decide tudo

| Critério | *Emendatio libelli* (art. 383) | *Mutatio libelli* (art. 384) |
|---|---|---|
| O que muda | **Só a definição jurídica** (a capitulação) | **O próprio fato** (elementar/circunstância nova) |
| Fato narrado | Permanece **idêntico** | **Ganha elemento novo** revelado na prova |
| Precisa aditar? | **Não** — o juiz aplica a lei ao fato já descrito | **Sim** — MP **deve** aditar (art. 384) |
| Rito | Aplicado na sentença; sem novo contraditório específico | Prazo de 5 dias à defesa + novo interrogatório + testemunhas + reabertura |
| Exemplo | Denúncia por furto; juiz vê que é apropriação indébita (mesmo fato, outro *nomen*) | Na instrução surge que houve **grave ameaça** → furto vira **roubo** (elementar nova) |

> **Regra de ouro:** *narra mihi factum, dabo tibi ius* vale para a *emendatio* (o fato manda, o direito o juiz aplica). Já na *mutatio*, **o fato mudou** — e ninguém pode ser condenado por fato que não lhe foi imputado e sobre o qual não se defendeu. Por isso o aditamento é **dever** da acusação, não faculdade discricionária livre.

## Aditamento PRÓPRIO × IMPRÓPRIO

- **Próprio (*mutatio libelli*, art. 384):** acrescenta **fato novo** ou **elementar/circunstância nova** à imputação — inclui **novo corréu**, **novo crime conexo** revelado na prova, ou **elementar** que altera a tipificação (ex.: surge o emprego de arma; surge a fraude; surge o resultado morte). **Dispara o rito completo** do art. 384 (contraditório de 5 dias, novo interrogatório, testemunhas, reabertura).
- **Impróprio (arts. 569 e 45):** **corrige ou completa** a denúncia **sem** alterar o fato — sana **erro material** (nome, data, capitulação equivocada), esclarece a narrativa ou inclui **circunstância que já constava implicitamente** dos autos. **Não** reabre a instrução, mas, por prudência e contraditório, **abre-se vista à defesa**.

> **Quando o "fato novo" é autônomo e não conexo:** se a prova revela crime **inteiramente diverso e sem conexão** com o objeto do processo, o caminho **não** é o art. 384 no mesmo feito — é **nova denúncia** (ou requisição de investigação). O art. 384 pressupõe que o fato novo integre o **mesmo contexto** da imputação em julgamento.

## Requisitos do aditamento próprio (art. 384)

1. **Fato surgido na instrução** — a elementar/circunstância deve ter sido **revelada pela prova** produzida em juízo, não algo que já constava do inquérito e foi ignorado na denúncia (nesse caso, discute-se aditamento impróprio ou aditamento por omissão, art. 569).
2. **Iniciativa da acusação** — desde a Lei 11.719/2008, aditar é **exclusividade do MP** (na privada, do querelante, art. 45). O juiz **não** adita de ofício nem baixa os autos para provocar o aditamento; se entender cabível e o MP recusar, aplica-se o **art. 28** (art. 384, §1º).
3. **Prazo de 5 dias** para o MP oferecer o aditamento (art. 384, *caput*).
4. **Individualização da nova imputação** — descrever o fato novo com **todas as suas circunstâncias** (art. 41 CPP aplicado ao aditamento): quem, o quê, quando, onde, como, o nexo com o fato originário e a **nova capitulação**.
5. **Requerimento expresso** de: (a) **oitiva da defesa** em 5 dias (§2º); (b) **novo interrogatório** do acusado; (c) **inquirição de testemunhas** — até 3 por parte (§4º); (d) **designação de nova audiência** para continuação, debates e julgamento (§2º).

## Estrutura da peça — aditamento próprio (escrito)

```
EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA [Nª] VARA CRIMINAL
DA COMARCA DE [COMARCA]


Autos nº [Nº DO PROCESSO]


O MINISTÉRIO PÚBLICO DO ESTADO DE [UF], por seu Promotor de Justiça que esta
subscreve, nos autos da ação penal em epígrafe, vem, com fundamento no art. 384
do Código de Processo Penal, ADITAR A DENÚNCIA, pelas razões de fato e de
direito a seguir expostas.


I — DO FATO NOVO REVELADO NA INSTRUÇÃO

Durante a instrução criminal, notadamente [na oitiva da testemunha X / no laudo
Y / no interrogatório], revelou-se [ELEMENTAR OU CIRCUNSTÂNCIA NOVA — ex.: que o
agente empregou grave ameaça mediante arma de fogo], circunstância não contida
na denúncia originária e que altera a definição jurídica do fato.


II — DA NOVA IMPUTAÇÃO

Diante do fato ora revelado, imputa-se ao acusado [NOME], já qualificado, a
prática de [NOVA CAPITULAÇÃO — ex.: art. 157, §2º-A, I, do CP], porquanto
[descrição completa e individualizada do fato novo, com todas as circunstâncias:
tempo, lugar, modo de execução e nexo com o fato originário].

[Se INCLUSÃO DE CORRÉU: qualificar o novo denunciado e descrever sua conduta e
o liame com os demais.]


III — DO PROCEDIMENTO (art. 384, §§ 2º e 4º)

Requer o Ministério Público:

a) a ABERTURA DE VISTA À DEFESA para manifestação no prazo de 5 (cinco) dias
   (art. 384, §2º);
b) o RECEBIMENTO do presente aditamento;
c) a designação de audiência em continuação para NOVO INTERROGATÓRIO do acusado,
   INQUIRIÇÃO DE TESTEMUNHAS, debates e julgamento (art. 384, §2º);
d) a faculdade de arrolar até 3 (três) testemunhas, ora indicadas: [ROL], nos
   termos do art. 384, §4º, do CPP.


IV — DO PEDIDO

Requer o recebimento do aditamento e o regular prosseguimento do feito com
observância do rito do art. 384 do CPP, a fim de que ao final o acusado seja
condenado nas penas do [NOVA CAPITULAÇÃO].


[LOCAL], [DATA].

[NOME DO PROMOTOR DE JUSTIÇA]
Promotor(a) de Justiça
```

**Campos a preencher:** [COMARCA], [VARA], [Nº DO PROCESSO], [UF], [NOME DO ACUSADO], [ELEMENTAR/CIRCUNSTÂNCIA NOVA], [NOVA CAPITULAÇÃO], [ROL DE TESTEMUNHAS], [LOCAL], [DATA], [NOME DO PROMOTOR].

## Aditamento oral em audiência

Quando a elementar nova surge **durante a própria audiência** (ex.: na oitiva da vítima), o MP pode **aditar oralmente**, ditando o aditamento a termo. Neste caso:

- **Consignar o aditamento em ata**, com a descrição do fato novo e a nova capitulação.
- **Assegurar o prazo de 5 dias à defesa** (art. 384, §2º) — a defesa **não** é obrigada a responder na hora; a audiência é suspensa/redesignada para garantir o contraditório.
- **Requerer, em ata**, o novo interrogatório e as testemunhas (§4º).
- Cuidado: aditamento oral que **suprime o prazo de defesa** é **nulidade** (cerceamento — CF, art. 5º, LV).

## Estrutura da peça — aditamento IMPRÓPRIO (art. 569)

```
[...] vem, com fundamento no art. 569 do CPP, ADITAR A DENÚNCIA para SUPRIR
[erro material / omissão — ex.: corrigir a data do fato de 10/03 para 13/03; ou
esclarecer a capitulação para art. X], sem alteração do fato imputado, pelo que
requer a abertura de vista à defesa e o regular prosseguimento do feito. [...]
```

> No impróprio, **não** se reabre a instrução — mas **abrir vista à defesa** é boa técnica e resguarda o contraditório. Se a "correção" na verdade **muda o fato**, ela **não** é impróprio: é *mutatio* e exige o rito do art. 384.

## Teses da acusação (e contra-teses da defesa a antecipar)

**A favor do aditamento (acusação):**
- A elementar/circunstância **surgiu na prova** e integra o mesmo contexto fático — cabível o art. 384; negar o aditamento seria **impunidade por tecnicismo**.
- A **individualização** do fato novo está completa (art. 41) e o **contraditório** foi assegurado (5 dias + novo interrogatório + testemunhas) — não há prejuízo.
- Correlação preservada: a sentença poderá abranger o fato **porque foi aditado e defendido**.

**Contra-teses que a defesa oporá (antecipe-as):**
- **Fato preexistente ao processo** (já constava do inquérito): não é "revelado na instrução"; discutir se cabe *mutatio* ou se houve inércia acusatória.
- **Fato sem conexão** com o objeto do processo → exige **nova ação**, não aditamento no mesmo feito.
- **Supressão do prazo de defesa** ou do novo interrogatório → nulidade (art. 564, IV; CF, art. 5º, LV).
- **Aditamento que é, na verdade, *emendatio*** (só muda a capitulação, não o fato) → desnecessário e não pode servir para agravar sem base fática nova.
- Vedação de **novo aditamento após a sentença** — as omissões suprem-se **antes da sentença final** (art. 569).

## Correlação acusação-sentença — o *para quê* do instituto

O aditamento existe para **preservar a correlação**: a sentença só pode condenar por fato **descrito e defendido**. Sem aditamento, se o juiz percebe elementar nova, **não pode** condenar por ela (sob pena de sentença *extra/ultra petita* e nulidade). A **Súmula 453 do STF `[NAO VERIFICADO]`** — *"Não se aplicam à segunda instância o art. 384 e parágrafo único do CPP, que possibilitam dar nova definição jurídica ao fato delituoso, em virtude de circunstância elementar não contida, explícita ou implicitamente, na denúncia ou queixa"* `[NAO VERIFICADO]` — veda a *mutatio* em **grau de recurso** (o aditamento é ato do **primeiro grau**, sob contraditório pleno). Confirmar existência, redação e alcance atual via `verificacao-citacoes` antes de usar — jamais citar de memória.

## Erros comuns (anti-padrões da acusação)

- **Tratar como impróprio (art. 569) o que é *mutatio* (art. 384):** mudar o fato "por correção" e pular o rito do contraditório → nulidade.
- **Aditar por fato que já constava do inquérito** e alegar que "surgiu na instrução" — a defesa desmonta.
- **Aditar fato sem conexão** no mesmo processo (o certo é nova denúncia).
- **Suprimir o prazo de 5 dias à defesa** ou o **novo interrogatório** no aditamento oral.
- **Individualização deficiente** do fato novo (aditamento genérico viola o art. 41 e é inepto).
- **Esquecer de arrolar as testemunhas** no prazo do §4º (preclui a prova nova).
- **Aditar em segundo grau** — vedado (Súmula 453/STF `[NAO VERIFICADO]`).
- **Aditar após a sentença** (art. 569 limita ao "antes da sentença final").
- **Deixar de aplicar o art. 28** (art. 384, §1º) quando o MP recusa aditar e o juiz discorda — não cabe ao juiz aditar de ofício.

## Checklist final (acusação)

- [ ] **Polo conferido** — o usuário atua na acusação (MP/assistente)? (Defesa → `resposta-mutatio-emendatio`.)
- [ ] **Tipo definido** — próprio (*mutatio*, art. 384) ou impróprio (art. 569)?
- [ ] Se próprio: a elementar/circunstância **surgiu na prova** produzida em juízo?
- [ ] O fato novo tem **conexão** com o objeto do processo (senão, nova ação)?
- [ ] **Fato novo individualizado** (art. 41): quem, o quê, quando, onde, como, nexo, nova capitulação?
- [ ] Requerida a **vista à defesa por 5 dias** (§2º)?
- [ ] Requeridos **novo interrogatório** e **audiência em continuação** (§2º)?
- [ ] **Testemunhas arroladas** (até 3) no prazo do §4º?
- [ ] **Aditamento oral** consignado em **ata**, com prazo de defesa preservado?
- [ ] Nada de **aditar em 2º grau** (Súmula 453/STF `[NAO VERIFICADO]`) nem **após a sentença** (art. 569)?
- [ ] Se o MP **não** vai aditar e o juiz discorda: previsto o **art. 28** (§1º)?
- [ ] **Citações verificadas** (`verificacao-citacoes`) e **revisão humana** do membro/servidor responsável?

## Nota de conformidade

Rascunho técnico sob **revisão humana obrigatória** — a responsabilidade pela peça e pelo ato é sempre do **membro do Ministério Público** (ou do advogado do assistente de acusação). **Ética por polo:** atuação do MP regida pelo **CNMP** (LC 75/93 e Lei 8.625/93; princípios institucionais do art. 127 da CF); o assistente de acusação, se advogado, submete-se à **OAB** e ao **Provimento 205/2021**. Nenhuma súmula, tese ou precedente citado de memória: tudo passa pelo gate `verificacao-citacoes` (há sanções por jurisprudência inventada por IA). Confira sempre a **redação vigente** dos arts. 383-385 e 569 do CPP antes de protocolar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
