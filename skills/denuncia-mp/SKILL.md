---
name: denuncia-mp
description: >-
  Use ao elaborar, estruturar ou revisar a DENÚNCIA — peça acusatória inicial da ação penal pública,
  oferecida pelo Ministério Público (CF 129, I; CPP 24 e 41): requisitos do art. 41, justa causa e
  lastro probatório mínimo, individualização de condutas (inclusive crimes societários),
  capitulação, rol de testemunhas, cumulação com cautelares e o dever de análise prévia de
  arquivamento (art. 28) e ANPP (art. 28-A). Gatilhos… Não use para decisão final, assinatura,
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
  eval_case_ids: ["csq-v5-denuncia-mp"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["denuncia-mp", "denuncia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Denúncia (peça acusatória do Ministério Público — CPP, art. 41)

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

Esta skill orienta a construção da **denúncia**, a petição inicial da **ação penal pública** (CF, art. 129, I; CPP, art. 24), pelo polo da **acusação**. Cobre o caminho completo: os filtros prévios (arquivar, negociar ou denunciar), os requisitos do art. 41, a justa causa, a individualização das condutas, a capitulação, os requerimentos cumulados e o aditamento. Para a **inicial acusatória privada** (querelante), a estrutura espelho está na skill `queixa-crime`.

> **Lição central:** a denúncia de qualidade é a que **sobrevive à sua própria leitura defensiva**. Escreva-a contra o checklist de inépcia do agente `analise-denuncia` (o mesmo que a defesa usará): para cada denunciado, a peça responde *o que fez, quando, como, com que poder e com que dolo* — e aponta *qual prova* sustenta cada resposta. O ataque defensivo correspondente está na skill `inepcia-denuncia-generica`; conheça-o para blindar a peça.

> **Régua acusatória (CPP, art. 3º-A):** o MP acusa quando há **fato típico narrável + lastro probatório mínimo + viabilidade da ação**. Denunciar sem justa causa é constrangimento ilegal (CPP 395, III e 648, I); deixar de analisar as alternativas legais (arquivamento, ANPP, suspensão) é vício de fundamentação. A denúncia é ato de responsabilidade, não de rotina.

## Instituto e base legal

| Norma | Conteúdo |
|---|---|
| **CF, art. 129, I** | Função institucional **privativa** do MP: promover a ação penal pública |
| **CPP, art. 24** | A ação pública é promovida por **denúncia** do MP; quando a lei exigir, depende de **representação** do ofendido ou **requisição** do Ministro da Justiça |
| **CPP, art. 41** | Conteúdo obrigatório: **exposição do fato criminoso com todas as circunstâncias**, qualificação do acusado (ou esclarecimentos que o identifiquem), **classificação do crime** e, quando necessário, **rol de testemunhas** |
| **CPP, art. 46** | Prazo: **5 dias** (réu preso) / **15 dias** (réu solto ou afiançado); ritos especiais têm prazos próprios (ex.: **10 dias** na Lei de Drogas, art. 54) |
| **CPP, art. 395** | Espelho negativo — a denúncia é rejeitada se: **I** inépcia; **II** falta de pressuposto processual ou condição da ação; **III** falta de **justa causa** |
| **CPP, arts. 28 e 28-A** | Alternativas prévias obrigatoriamente analisadas: **arquivamento** e **ANPP** |
| **CPP, arts. 384 e 569** | Correção da imputação: **aditamento** por fato novo (mutatio) e suprimento de **omissões** |

## Cabimento — três filtros antes de denunciar

| Filtro | Pergunta | Consequência da falha |
|---|---|---|
| **1. Condições da ação e procedibilidade** | O MP é legitimado (ação pública)? Há **representação**/requisição quando exigida? Não houve **decadência** (6 meses — CPP 38)? | Rejeição (CPP 395, II). Lembrete: a representação é **retratável até o oferecimento** (CPP 25); nos crimes contra a honra de servidor público em razão da função, a legitimidade é **concorrente** (Súmula 714 STF) |
| **2. Justa causa** | Há **materialidade demonstrada + indícios suficientes de autoria** por elementos concretos dos autos? | Rejeição (CPP 395, III) e HC de trancamento |
| **3. Viabilidade da imputação** | A narrativa individualiza condutas e a capitulação decorre dos fatos? | Inépcia (CPP 41 c/c 395, I) |

**Prescrição e punibilidade antes de tudo:** o **oferecimento não interrompe** a prescrição — só o **recebimento** (CP, art. 117, I). Calcule a prescrição pela pena máxima em abstrato antes de denunciar; se extinta a punibilidade, o caminho é o arquivamento.

## O caminho decisório — denunciar é a última das quatro portas

Antes da denúncia, o MP percorre, nesta ordem, as saídas legais — e **motiva** por que cada uma não se aplica:

| Alternativa | Quando | Base | Providência na prática |
|---|---|---|---|
| **Arquivamento** | Atipicidade, excludente manifesta, extinção da punibilidade, ausência de justa causa | CPP, art. 28 | Nova sistemática pós-Pacote Anticrime (comunicação à vítima e revisão interna ministerial) teve o alcance moldado pelo STF nas ADIs do Pacote Anticrime — **confira a redação vigente e o procedimento via agente `lei-e-sumula` antes de citar** |
| **ANPP** | Sem violência/grave ameaça + pena mínima < 4 anos + confissão + demais requisitos | CPP, art. 28-A | **Dever de análise prévia**: cabível, proponha; incabível, **fundamente o óbice na própria denúncia** (caput e §2º; a regulamentação interna via resolução do CNMP — número e vigência conferidos por `lei-e-sumula` [NÃO VERIFICADO]). Requisitos, condições e controle da recusa na skill `anpp` |
| **Transação penal** | Infração de menor potencial ofensivo (JECRIM) | Lei 9.099/95, art. 76 | Precede a denúncia oral (art. 77); frustrada, denuncia-se de imediato |
| **Suspensão condicional do processo** | Pena mínima ≤ 1 ano | Lei 9.099/95, art. 89 | A proposta acompanha o **oferecimento da denúncia** (ou a recusa vem motivada); recusa imotivada → analogia ao art. 28 (Súmula 696 STF) |

> **Não se negocia o que se arquiva:** presente causa de arquivamento, ela **prevalece** sobre ANPP e transação (o próprio caput do 28-A condiciona o acordo a "não sendo caso de arquivamento").

## Justa causa — lastro probatório mínimo, prova por prova

Justa causa é **suporte probatório mínimo** ligando cada denunciado ao fato: não é prova plena (isso é da sentença), mas também não é ilação. Na peça, **amarre cada imputação ao elemento que a sustenta** (laudo, interceptação, quebra de sigilo, documento, depoimento) — a denúncia que *narra e lastreia* resiste ao 395, III e ao HC de trancamento.

- **Crimes tributários materiais (Lei 8.137/90, art. 1º, I a IV):** sem **lançamento definitivo** do crédito não há crime consumado nem justa causa — **Súmula Vinculante 24 (STF)**. Aguarde a constituição definitiva; verifique parcelamento/pagamento (que suspendem/extinguem a punibilidade) antes de denunciar.
- **Elementos frágeis não lastreiam:** reconhecimento fotográfico sem o rito do CPP 226, denúncia anônima isolada, ou mera posição societária **não** constituem lastro — antecipe o ataque e reforce com prova autônoma.
- **Inquérito é dispensável** (CPP 39, §5º; 46, §1º) se as peças de informação já trazem o lastro — mas a justa causa nunca é.

## Individualização de condutas — a fronteira entre a denúncia geral e a genérica

Em concurso de agentes, a peça válida atribui a **cada** denunciado a sua contribuição (CP, art. 29). A distinção operacional — **denúncia geral (válida) × denúncia genérica (inepta)** — está desenvolvida, pelo ângulo defensivo, na skill `inepcia-denuncia-generica`: domine-a como **pauta de qualidade invertida**.

**Standard mínimo por denunciado:** ato concreto (ou fato único comum e delimitado) + época + modo de concorrer + liame subjetivo. Em **crimes societários**, a mitigação jurisprudencial da individualização **nunca dispensa o vínculo mínimo**: descreva a gestão real (quem assinava, quem decidia, alçadas, atas, procurações) e o nexo entre esse poder e o fato. Se invocar a **teoria do domínio do fato**, descreva **em que consistiu o domínio** (posição + poder concreto de determinar o curso do fato) — a invocação vazia confessa a genérica e derruba a peça; a formulação atual dos limites vai pesquisada via `jurisprudencia-stj-stf` e marcada [NÃO VERIFICADO] até validação.

## Capitulação — classifica, define o rito e os benefícios

A classificação (CPP 41) não vincula o juiz (*emendatio libelli* — CPP 383), mas **define competência, rito, cabimento de ANPP/transação/suspensão e regime de prazos**. Capitule pelo que a **narrativa sustenta**: some qualificadoras, majorantes e concurso (CP 69/70/71) apenas quando descritos nos fatos. **Capitulação inflada** para bloquear benefícios é controlável judicialmente e mina a credibilidade da peça; capitulação tímida desloca o rito e pode gerar nulidade e retrabalho.

## Estrutura forense da denúncia

```
AO JUÍZO DA [N]ª VARA CRIMINAL DA COMARCA DE [COMARCA] — [UF]
[ou: Vara Federal / JVDFM / Juizado Especial Criminal / Vara do Júri,
conforme a competência — endereçamento errado = incompetência]

Autos nº [inquérito policial / APF / PIC nº ...]

O MINISTÉRIO PÚBLICO DO ESTADO DE [UF], por seu(sua) Promotor(a) de Justiça
[federal: O MINISTÉRIO PÚBLICO FEDERAL, por seu(sua) Procurador(a) da
República], no exercício de suas atribuições (CF, art. 129, I; CPP, arts. 24
e 41), com base no incluso [IP/APF/PIC], vem OFERECER DENÚNCIA em face de:

1. [NOME], [nacionalidade, estado civil, profissão, RG/CPF, filiação,
   endereço — ou esclarecimentos que permitam identificá-lo: CPP 41 e 259];
2. [DENUNCIADO 2 ...];

pela prática dos fatos delituosos a seguir narrados:

I — DOS FATOS
Narrativa completa (quem / o quê / quando / onde / como / por quê — todas
as circunstâncias, CPP 41). Em concurso de agentes, um bloco por denunciado:
ato, época, modo de concorrer, poder de decisão, liame subjetivo. Em crimes
societários, o vínculo entre a gestão real e o fato. Ao fim de cada
imputação, a prova que a lastreia (fls./ID — justa causa demonstrada).

II — DA JUSTA CAUSA E DO DIREITO [recomendável em casos complexos]
Amarrar materialidade e indícios de autoria elemento a elemento; enfrentar
desde logo os pontos que a defesa atacará (individualização, dolo, nexo).

III — DA CAPITULAÇÃO
Denunciado 1: art. [tipo + qualificadora/majorante], c/c art. [69/70/71 CP];
Denunciado 2: [...]. — capitulação POR RÉU, decorrente da narrativa.

IV — DA NÃO PROPOSITURA DO ANPP [sempre que a pena mínima permitir a dúvida]
Fundamentar o óbice concreto (art. 28-A, caput e §2º): pena mínima ≥ 4 anos,
violência/grave ameaça, reincidência/habitualidade, benefício nos 5 anos
anteriores, violência doméstica. [Pena mínima ≤ 1 ano: formular a proposta
de suspensão condicional do processo (Lei 9.099, art. 89) ou motivar a recusa.]

V — DOS REQUERIMENTOS CAUTELARES [quando necessários]
a) prisão preventiva (CPP 311, 312 e 313) OU cautelares do art. 319, com
   fundamentação CONCRETA e CONTEMPORÂNEA (o juiz não decreta de ofício);
b) medidas assecuratórias: sequestro (CPP 125), hipoteca legal (134),
   arresto (136) — garantia da reparação e do perdimento;
c) [segredo de justiça / prioridade de réu preso / afastamento de função].

VI — DOS PEDIDOS
a) o RECEBIMENTO da denúncia, a citação do(s) denunciado(s) para responder
   à acusação e o processamento pelo rito [ordinário/sumário/especial],
   até final CONDENAÇÃO nas penas dos dispositivos capitulados;
b) a fixação de VALOR MÍNIMO de reparação dos danos (CPP, art. 387, IV) —
   pedido EXPRESSO, com valor indicado quando mensurável [dano moral em
   violência doméstica: o pedido expresso basta — Tema Repetitivo 983 STJ];
c) a intimação da vítima (CPP 201, §2º) e demais providências de estilo.

[LOCAL], [DATA].
[PROMOTOR(A) DE JUSTIÇA / PROCURADOR(A) DA REPÚBLICA]

ROL DE TESTEMUNHAS (após a assinatura — arrolar JÁ NA DENÚNCIA, sob preclusão):
1. [nome, qualificação e endereço] — até 8 no rito ordinário (CPP 401);
   5 no sumário (CPP 532); 8 na 1ª fase do júri (CPP 406, §2º).
```

**No JECRIM:** frustrada a transação, a denúncia é **oral** (Lei 9.099, art. 77), reduzida a termo, dispensado o inquérito se o termo circunstanciado bastar.

## Aditamento e correção da imputação

| Instrumento | Hipótese | Regime |
|---|---|---|
| ***Emendatio libelli*** (CPP 383) | Fatos idênticos, capitulação diversa | Ato do **juiz na sentença**; não reabre defesa (réu se defende dos fatos) |
| ***Mutatio libelli*** (CPP 384) | **Fato ou elementar nova** surgida na instrução, não contida na denúncia | O **MP adita em 5 dias** (espontânea ou provocadamente); reabre defesa: nova resposta, novas testemunhas, reinquirições. **Vedada em 2º grau** (Súmula 453 STF) — o que não foi aditado no 1º grau não se recupera |
| **Suprimento de omissões** (CPP 569) | Omissões **formais/acidentais** da denúncia (dado de qualificação, circunstância acessória) | Suprível **a todo tempo, antes da sentença final**; não serve para inserir fato ou réu novo |
| **Aditamento na queixa subsidiária** (CPP 29) | MP inerte → vítima ofereceu queixa subsidiária | O MP **adita, repudia e oferece denúncia substitutiva**, intervém em todos os termos e **retoma a ação** na negligência do querelante — estrutura na skill `queixa-crime` |

**Efeitos do aditamento que mudam o jogo:** alterada a capitulação, **reavalie ANPP e suspensão condicional** — para a suspensão, a Súmula 337 STJ é expressa (cabível na desclassificação e na procedência parcial); para a reanálise do ANPP, a formulação atual vai por `jurisprudencia-stj-stf` [NÃO VERIFICADO]. Quanto à interrupção da prescrição pelo recebimento do aditamento, a regra varia conforme se trate de fato novo ou mera retificação — pesquise antes de afirmar.

## Teses e standards típicos da acusação

**1. Justa causa demonstrada, não afirmada.** Cada imputação sai da peça com o seu lastro indicado (fls./ID). Denúncia que só adjetiva ("fraudou", "integrava organização") sem apontar prova convida o trancamento.

**2. Denúncia geral é válida — sustente-a como tal.** Fato **único, certo e delimitado** atribuído a todos (assinatura coletiva, deliberação em ata) não é genérica: cada réu sabe do que se defende. Enfrente a preliminar defensiva com a distinção explícita.

**3. Vínculo mínimo em societários — sempre descrito.** A mitigação da individualização autoriza detalhe menor, nunca imputação pelo cargo. Contrato social indica o círculo possível de autores; a **conduta** vem da gestão real documentada.

**4. Domínio do fato só com domínio descrito.** Use a teoria para distinguir autor de partícipe — nunca como presunção de autoria do dirigente.

**5. Cautelar fundamentada e contemporânea.** Pós-Pacote Anticrime, **sem requerimento não há preventiva** (CPP 311): se a custódia é necessária, o requerimento vem na denúncia, com *periculum* concreto e atual — nunca gravidade abstrata (a régua defensiva está na skill `liberdade-provisoria-relaxamento`; escreva o requerimento que resiste a ela).

**6. Pedidos patrimoniais desde a inicial.** Valor mínimo do art. 387, IV com **pedido expresso** (a sentença não o fixa de ofício) e medidas assecuratórias para garantir reparação e perdimento.

## Erros comuns e pegadinhas

- **Prescrição corre até o recebimento** (CP 117, I) — o oferecimento não interrompe. Denúncia parada no gabinete é punibilidade evaporando.
- **Prazo do art. 46 é impróprio, mas cobra caro:** réu preso + inércia = excesso de prazo → **relaxamento** da prisão; e a inércia abre a **queixa subsidiária** ao ofendido (CF 5º, LIX; CPP 29 e 38 — 6 meses do fim do prazo do MP): a titularidade escapa. Estrutura da subsidiária na skill `queixa-crime`.
- **Rol de testemunhas fora da denúncia = preclusão.** Depois, a oitiva só como testemunha **do juízo** (CPP 209) — faculdade do julgador, não direito da parte. Arrole na peça, dentro do teto do rito.
- **Condição de procedibilidade esquecida:** sem representação (quando exigida) a denúncia é rejeitada (395, II); confira também a decadência (CPP 38) e lembre que a representação se torna **irretratável com o oferecimento** (CPP 25) — protocolar cristaliza.
- **Decadência conta-se como prazo material** (CP 10): **inclui o dia do começo** e **não se prorroga** para o dia útil seguinte — regra oposta à dos prazos processuais (CPP 798, §1º: exclui o dia do começo). Errar a contagem por um dia mata a condição de procedibilidade.
- **Qualificação incompleta não trava** (CPP 41 e 259: bastam esclarecimentos que identifiquem) — mas erro sobre a pessoa denunciada é vício insanável por 569.
- **Omissão da análise do ANPP:** denunciar sem enfrentar o art. 28-A quando a pena mínima permite a dúvida gera incidente, conversão em diligência e risco de nulidade (a resolução do CNMP que disciplina o ANPP — número e vigência via `lei-e-sumula` [NÃO VERIFICADO]). Motive o óbice **na própria peça**; fundamentos na skill `anpp`.
- **Capitulação inflada para matar benefício** (ANPP, suspensão, transação): controlável pelo juízo e pelas instâncias revisoras — a capitulação decorre dos fatos narrados, não da estratégia.
- **Endereçamento e atribuição:** foro por prerrogativa de função (denúncia pela chefia do MP no tribunal competente), JVDFM na violência doméstica, Justiça Federal (CF 109) — erro aqui anula recebimento e atos seguintes. Membro que atuou na investigação **não** está impedido de denunciar (Súmula 234 STJ).
- **Rejeitada a denúncia, o recurso é do MP:** RESE (CPP 581, I), com **contrarrazões do denunciado** obrigatórias (Súmula 707 STF); provido, **o acórdão vale como recebimento**, salvo quando nula a decisão de 1º grau (Súmula 709 STF).
- **Mutatio em 2º grau é porta fechada** (Súmula 453 STF): fato novo se adita **durante a instrução** — vigilância do MP em audiência, não na apelação.
- **Arquivamento pela sistemática antiga:** o rito do art. 28 mudou com o Pacote Anticrime e foi moldado pelo STF — **não descreva o procedimento de memória**; confira a redação e o alcance vigentes via `lei-e-sumula`.
- **Precedente citado de cor:** limites da denúncia geral, domínio do fato e reanálise de ANPP oscilam — todo julgado atual vai por `jurisprudencia-stj-stf`, marcado [NÃO VERIFICADO] até o `verificador-citacoes` aprovar.

## Checklist antes de protocolar (a denúncia blindada)

- [ ] Alternativas percorridas e motivadas: arquivamento (art. 28), **ANPP** (art. 28-A), transação/suspensão (Lei 9.099)?
- [ ] Prescrição calculada pela pena máxima em abstrato — recebimento chegará a tempo (CP 117, I)?
- [ ] Condições de procedibilidade: representação/requisição presentes, decadência conferida (CPP 25 e 38)?
- [ ] Justa causa **amarrada** prova a prova (SV 24 conferida nos tributários materiais)?
- [ ] Um bloco de conduta **por denunciado** (ato, época, modo, poder, dolo) — teste invertido do agente `analise-denuncia` aplicado?
- [ ] Capitulação por réu, decorrente da narrativa, com reflexo em rito/competência conferido?
- [ ] Rol de testemunhas **na peça**, dentro do teto do rito (8/5/8)?
- [ ] Cautelares requeridas expressamente, com fundamentação concreta e contemporânea?
- [ ] Pedido expresso do valor mínimo (387, IV) formulado?
- [ ] Precedentes pesquisados via `jurisprudencia-stj-stf` e validados pelo `verificador-citacoes` — nada de memória?

## Apoie-se em

- **Agente `analise-denuncia`** — o checklist de inépcia **invertido como pauta de qualidade**: rode-o sobre a minuta antes de protocolar; a denúncia pronta é a que ele não derruba.
- **Skill `inepcia-denuncia-generica`** — a leitura defensiva desta mesma peça (denúncia geral × genérica, domínio do fato, responsabilidade objetiva): esta skill ensina a construir; aquela, o que a defesa desmontará — escreva contra ela.
- **Skill `queixa-crime`** — estrutura espelho da inicial acusatória **privada** e destino da inércia ministerial (queixa subsidiária, CPP 29).
- **Skill `anpp`** — o dever de análise prévia do acordo antes de denunciar: requisitos, óbices do §2º e controle da recusa (art. 28-A, §14).
- **Skill `liberdade-provisoria-relaxamento`** — a régua defensiva das cautelares: o requerimento de preventiva na denúncia deve sobreviver a ela.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais (denúncia geral, domínio do fato, reanálise de ANPP), sempre marcados [NÃO VERIFICADO] até validação.
- **Agente `verificador-citacoes`** — gate obrigatório: nenhuma súmula, tema ou julgado entra na peça sem verificação.
- **Agente `lei-e-sumula`** — conferência de redação vigente (art. 28 pós-ADIs do Pacote Anticrime, resolução do CNMP sobre o ANPP, prazos de ritos especiais).
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima: teoria do caso, narrativa dos fatos, subsunção explícita e persuasão na redação final (aplicar SEMPRE).
