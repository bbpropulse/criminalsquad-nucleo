---
name: arquivamento-inquerito
description: >-
  Use ao promover, requerer ou impugnar o arquivamento do inquérito policial na sistemática do art.
  28 do CPP pós-Pacote Anticrime (Lei 13.964/2019) — promoção de arquivamento pelo MP, requerimento
  de arquivamento pela defesa e insurgência da vítima. Gatilhos: arquivamento do inquérito, promoção
  de arquivamento, art. 28 do CPP, instância de revisão do MP, homologação do arquivamento, PGJ,
  Câmara de…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-arquivamento-inquerito"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["arquivamento-inquerito", "arquivamento inquerito"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Arquivamento do Inquérito Policial (art. 28 do CPP)

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

Esta skill orienta o **encerramento da investigação sem acusação** na sistemática do **art. 28 do CPP com a redação da Lei 13.964/2019** (Pacote Anticrime): a **promoção de arquivamento** pelo Ministério Público (com remessa à instância de revisão ministerial), o **requerimento de arquivamento** formulado pela defesa e a **insurgência da vítima** contra o arquivamento. Cobre fundamentos, procedimento, efeitos (coisa julgada e desarquivamento) e a estrutura forense das três manifestações. Ela é o espelho de encerramento da skill `requerimento-investigacao`, que cuida da **abertura** da investigação pelo polo da vítima.

> **Síntese operacional:** desde o Pacote Anticrime, **arquivamento é ato do próprio MP, com controle interno** — o membro **ordena** o arquivamento fundamentadamente, comunica vítima, investigado e autoridade policial, e **remete os autos à instância de revisão** ministerial para homologação. O juiz **não arquiva, não indefere e não determina arquivamento**: o controle migrou do Judiciário para dentro do MP (sistema acusatório — art. 3º-A do CPP). Quem escreve nesse cenário precisa saber **a quem se dirige**: o MP fala com sua instância revisora; a defesa fala com o MP; a vítima fala com a instância de revisão, em **30 dias**.

> **Cautela de vigência (obrigatória antes de citar):** a eficácia do novo art. 28 ficou **suspensa por liminar** entre 2020 e a conclusão do julgamento das ADIs do Pacote Anticrime pelo STF (ADI 6.298 e conexas), que declarou a nova sistemática constitucional **com interpretação conforme** e regras de transição — **pesquise via `jurisprudencia-stj-stf` o teor exato do julgamento — inclusive se ficou exigida a comunicação do arquivamento também ao juízo competente — e a implementação atual no tribunal do caso, e marque [NÃO VERIFICADO] até validar**. Confira também, via `lei-e-sumula`, a redação vigente do art. 28 e a regulamentação interna do MP respectivo (lei orgânica, resoluções CNMP/Conselho Superior). Toda citação passa pelo gate da best-practice `verificacao-citacoes`.

## Instituto e base legal

- **Natureza:** o arquivamento é o **encerramento da persecução na fase investigativa**, por decisão fundamentada do titular da ação penal (MP — art. 129, I, da CF), quando não há base para acusar ou não há o que punir. Não é absolvição: é juízo negativo sobre a viabilidade da acusação naquele momento.
- **Sede normativa:** **art. 28 do CPP** (redação da Lei 13.964/2019) — o MP **ordena** o arquivamento do inquérito "ou de quaisquer elementos informativos da mesma natureza" (alcança PIC, notícia de fato, VPI), **comunica** vítima, investigado e autoridade policial e **encaminha os autos à instância de revisão ministerial** para homologação.
- **Instância de revisão:** no MP estadual, o **Procurador-Geral de Justiça** ou órgão com delegação (Conselho Superior/câmaras, conforme a lei orgânica local); no MPF, as **Câmaras de Coordenação e Revisão**. Identifique o órgão concreto **antes de endereçar** — varia por ramo e por estado (confira via `lei-e-sumula` a regulamentação interna).
- **Mudança de paradigma:** na redação original do art. 28, o MP **requeria** e o **juiz** decidia (discordando, remetia ao PGJ). Hoje o Judiciário está fora do circuito ordinário do arquivamento — com a ressalva construída pelo STF nas ADIs do Pacote Anticrime (interpretação conforme) quanto à possibilidade de provocação da revisão em caso de patente ilegalidade — **pesquise o alcance exato via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**.
- **Interseção com o ANPP:** o art. 28-A só entra em cena "**não sendo caso de arquivamento**". Arquivar é sempre **mais favorável** que negociar — a análise desta skill **antecede** a da skill `anpp`.

## Fundamentos do arquivamento — e o que cada um preclui

O CPP não traz rol expresso; a prática consolidou os fundamentos por espelho da rejeição da denúncia (art. 395) e da absolvição sumária (art. 397). O fundamento escolhido **define a estabilidade** do arquivamento:

| Fundamento | Conteúdo | Coisa julgada / desarquivamento |
|------------|----------|--------------------------------|
| **Atipicidade** (formal ou material) | Fato não é crime; insignificância (mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade, inexpressividade da lesão) | **Coisa julgada material** — entendimento consolidado STF/STJ; não se reabre nem com novas provas |
| **Extinção da punibilidade** | Prescrição, morte do agente, decadência etc. (art. 107 do CP) | **Coisa julgada material** — salvo a hipótese notória da **certidão de óbito falsa**, que não impede a retomada (confirmar via `jurisprudencia-stj-stf`) |
| **Excludente de ilicitude** | Legítima defesa, estado de necessidade etc. evidenciados na investigação | O STF firmou que **não faz coisa julgada material** — desarquivável com novas provas; **pesquise o precedente atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** |
| **Excludente de culpabilidade** | Coação moral irresistível, erro de proibição escusável etc. — **exceto inimputabilidade** do art. 26, que reclama processo (absolvição imprópria) | Tratamento análogo ao da ilicitude — cautela redobrada na escolha do fundamento |
| **Falta de justa causa** | Ausência de lastro probatório mínimo de autoria ou materialidade, esgotadas as diligências viáveis | **Não** faz coisa julgada: desarquivamento com **novas provas** (Súmula 524/STF) e novas diligências se houver notícia de outras provas (art. 18 do CPP) |

> **Escolha estratégica do fundamento:** quem redige (MP ou defesa) deve buscar o fundamento **mais estável** que o conjunto probatório sustente honestamente. Para a defesa, arquivamento por **atipicidade** vale mais que por falta de justa causa — o primeiro fecha a porta; o segundo a deixa encostada (art. 18 + Súmula 524/STF). Para o MP, fundamentar com precisão evita a não homologação e o retrabalho.

## Procedimento pós-Pacote Anticrime

```
MP examina o inquérito relatado
        │
        ├── Elementos para acusar → DENÚNCIA (ou ANPP, se cabível — skill anpp)
        │
        └── Causa de arquivamento → MP ORDENA o arquivamento, FUNDAMENTADAMENTE
                 │
                 ├── COMUNICA vítima, investigado e autoridade policial
                 │
                 └── REMETE os autos à INSTÂNCIA DE REVISÃO ministerial
                          │   (PGJ/órgão delegado no MP estadual; CCR no MPF)
                          │
                          ├── VÍTIMA (ou representante legal) pode submeter a
                          │   matéria à revisão em 30 DIAS do RECEBIMENTO da
                          │   comunicação (art. 28, §1º)
                          │
                          ├── Crime em detrimento de União/Estado/Município:
                          │   a chefia da representação judicial do ente pode
                          │   provocar a revisão (art. 28, §2º)
                          │
                          ▼
                 INSTÂNCIA DE REVISÃO decide:
                          │
                          ├── HOMOLOGA → arquivamento consumado
                          │      (reabertura só nos limites do art. 18 do CPP
                          │       e da Súmula 524/STF — novas provas)
                          │
                          └── NÃO HOMOLOGA → designa outro membro para
                                 oferecer denúncia ou prosseguir na investigação
                                 (o designado atua por delegação do órgão revisor)
```

**Pontos de atenção do procedimento:**
- **Fundamentação é requisito, não estilo.** A promoção lacônica ("falta de provas") convida à não homologação e à insurgência da vítima. O padrão é demonstrar **diligência esgotada + fundamento jurídico preciso**.
- **O prazo de 30 dias da vítima corre do RECEBIMENTO da comunicação** (§1º), contado na forma do art. 798, §1º, do CPP (exclui-se o dia do começo, inclui-se o do vencimento; prazo contínuo e peremptório — art. 798, caput). Para o MP, comunicar mal é fragilizar o procedimento revisional; para quem assiste a vítima, **anotar a data da ciência é a primeira providência**. Vítima assistida pela **Defensoria Pública**: verifique via `lei-e-sumula`/`jurisprudencia-stj-stf` se o **prazo em dobro** (LC 80/94, arts. 44, I, 89, I e 128, I) alcança essa via revisional interna do MP — [NÃO VERIFICADO]; na dúvida, protocole dentro dos 30 dias simples.
- **O membro designado pela instância revisora não pode se recusar** a oferecer a denúncia: atua como **longa manus** do órgão de revisão (princípio da devolução) — dinâmica herdada da sistemática antiga e mantida na nova.
- **Regras de transição:** unidades judiciárias e ramos do MP implementaram a nova sistemática em ritmos diferentes após o julgamento das ADIs — **confirme como o tribunal e o MP do caso operam hoje** antes de endereçar a peça (pesquise via `jurisprudencia-stj-stf` e `lei-e-sumula`; marque [NÃO VERIFICADO] o que não conferir).

## Três polos, três manifestações

### MP — promoção de arquivamento (peça principal desta skill)

Ato **privativo e fundamentado** do membro com atribuição. Estrutura forense:

```
PROMOÇÃO DE ARQUIVAMENTO
Inquérito Policial nº [Nº] — [COMARCA/SEÇÃO JUDICIÁRIA]
Investigado(a): [NOME] · Vítima: [NOME]

I — RELATÓRIO
Síntese objetiva: notícia do fato, diligências realizadas (rol expresso:
oitivas, perícias, quebras, buscas), resultado de cada uma.

II — FUNDAMENTOS
a) Fundamento central [ATIPICIDADE / EXTINÇÃO DA PUNIBILIDADE / EXCLUDENTE /
   FALTA DE JUSTA CAUSA], com subsunção explícita: o que a investigação
   apurou + por que isso NÃO autoriza a acusação;
b) Demonstração de que as diligências viáveis foram ESGOTADAS (afasta a
   pecha de arquivamento prematuro e blinda contra a não homologação);
c) Se falta de justa causa: registro expresso de que o arquivamento se dá
   SEM prejuízo do art. 18 do CPP (novas provas).

III — CONCLUSÃO E ENCAMINHAMENTOS
a) ORDENA-SE o arquivamento do IP nº [Nº], com fundamento em [FUNDAMENTO];
b) COMUNIQUE-SE a vítima (cientificando-a do prazo de 30 dias do art. 28,
   §1º), o investigado e a autoridade policial;
c) REMETAM-SE os autos à [INSTÂNCIA DE REVISÃO COMPETENTE] para homologação,
   na forma do art. 28 do CPP.

[LOCAL], [DATA]. [MEMBRO DO MP] — [CARGO]
```

### Defesa — requerimento de arquivamento

Não há previsão expressa, mas a via decorre do **direito de petição** (art. 5º, XXXIV, da CF) e das prerrogativas do advogado na investigação (art. 7º, XXI, do EAOAB — apresentar razões e quesitos). **Endereçamento correto: ao Ministério Público**, titular da ação penal — **não ao juiz**, que não arquiva na nova sistemática. Estrutura compacta:

- **I — Legitimidade e acesso:** procuração; acesso aos elementos documentados (Súmula Vinculante 14).
- **II — Fatos e diligências:** o que a investigação já produziu e o que ela **não** produziu contra o cliente.
- **III — Fundamento do arquivamento:** priorizar **atipicidade/extinção da punibilidade** (coisa julgada material); usar o filtro de justa causa do agente `analise-denuncia` em espelho — os mesmos vícios que tornariam a denúncia rejeitável (art. 395) fundamentam o arquivamento pedido antes dela.
- **IV — Pedidos:** (a) a **promoção do arquivamento** com o fundamento indicado; (b) subsidiariamente, se sobrevier denúncia, que estas razões sejam consideradas na cota; (c) juntada da manifestação aos autos.
- **Via paralela (distinguir, não confundir):** se o MP **insiste** em investigação manifestamente ilegal (fato atípico, punibilidade extinta, ausência absoluta de justa causa), a via judicial é o **trancamento do inquérito por habeas corpus** — medida excepcional, tratada na skill `habeas-corpus`. O requerimento ao MP é a via ordinária e **não preclui** o HC; usá-las em sequência (primeiro provocar o titular, depois atacar o constrangimento) fortalece a narrativa de ilegalidade.

### Vítima — insurgência contra o arquivamento

- **Instrumento:** petição de **submissão da matéria à instância de revisão** (art. 28, §1º) — legitimados: vítima ou seu representante legal —, no prazo de **30 dias do recebimento da comunicação**, endereçada **à instância revisora** (PGJ/órgão delegado ou CCR), não ao juiz.
- **Conteúdo que convence:** apontar **diligências viáveis não realizadas** (o arquivamento prematuro é o flanco mais vulnerável), contradições entre a promoção e os elementos dos autos, e a existência de lastro mínimo para a denúncia.
- **O que a via NÃO é:** não é recurso judicial nem abre, por si, a **ação penal privada subsidiária da pública** (art. 5º, LIX, da CF; art. 29 do CPP) — a subsidiária pressupõe **inércia** do MP, e arquivamento é o oposto de inércia (entendimento consolidado). Perdido o prazo de 30 dias, resta noticiar **fatos novos** (art. 18 do CPP) ou provocar o órgão revisor por representação atípica, sem garantia de conhecimento.

## Teses típicas

1. **Atipicidade material pela insignificância** — desenvolver os quatro vetores consolidados pelo STF (mínima ofensividade, nenhuma periculosidade social, reduzido grau de reprovabilidade, inexpressividade da lesão); para o estado atual em furto qualificado, reincidência e crimes específicos, **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]**.
2. **Falta de justa causa após diligências esgotadas** — a tese exige demonstrar o **esgotamento**: listar cada diligência e seu resultado negativo. Investigação inconclusa não sustenta arquivamento nem convence o órgão revisor.
3. **Extinção da punibilidade pela prescrição** — calcular pela pena **máxima em abstrato** (art. 109 do CP) na fase investigativa. **Vedado** fundamentar em prescrição virtual/antecipada com base em pena hipotética (Súmula 438/STJ).
4. **Excludente de ilicitude evidente** (legítima defesa estampada nos autos) — cabível, mas alertar o cliente/órgão: **não** gera coisa julgada material (ver tabela) e o caso pode voltar com novas provas.
5. **Espelho da justa causa** — para a defesa, importar do agente `analise-denuncia` o teste de viabilidade acusatória: se a denúncia hipotética seria inepta ou rejeitável por falta de justa causa (art. 395 do CPP), o arquivamento é o desfecho tecnicamente devido **antes** dela.

## Erros comuns e pegadinhas

- **Endereçar ao juiz o pedido de arquivamento** (defesa) ou a insurgência (vítima): pós-2019, o circuito é interno ao MP. Peça dirigida ao juízo pedindo que "determine o arquivamento" nasce errada — o juiz não tem esse poder na sistemática nova.
- **Perder os 30 dias do §1º** (vítima): o prazo corre do **recebimento da comunicação** (contagem do art. 798, §1º, do CPP); a via revisional preclui. Documentar a data da ciência e protocolar antes — sem contar com dobra de prazo não confirmada.
- **Prescrição virtual** como fundamento: Súmula 438/STJ veda extinção da punibilidade por pena hipotética. Fundamento sedutor e nulo.
- **Confundir arquivamento com inércia**: arquivamento **não** abre a ação penal privada subsidiária (art. 29 do CPP exige inércia). Prometer a subsidiária à vítima inconformada é erro técnico com dano ao cliente.
- **Arquivamento implícito não existe**: se o MP denuncia por um crime e silencia sobre outro fato/investigado, **não há arquivamento tácito** do que ficou de fora (entendimento consolidado STF/STJ) — o fato omitido continua acusável. Não construir defesa sobre essa areia.
- **Escolher fundamento fraco quando havia forte**: arquivar por falta de justa causa o que era atípico desperdiça a coisa julgada material. A defesa deve **pedir expressamente** o fundamento mais estável e impugnar a promoção que rebaixe o fundamento.
- **Desarquivar sem prova nova**: a retomada exige **novas provas** — substancialmente inovadoras, não requentadas (Súmula 524/STF); o art. 18 autoriza novas **diligências** se houver notícia de outras provas. Denúncia oferecida após arquivamento homologado, sem prova nova, é atacável (rejeição/trancamento — skill `habeas-corpus`).
- **Arquivar o que comportava ANPP — ou negociar o que devia ser arquivado**: a ordem legal é arquivamento → ANPP → denúncia. Inverter prejudica o investigado (skill `anpp`: "não se negocia o que deveria ser arquivado").

## Checklist antes de protocolar

**Para o MP (promoção):**
- [ ] Diligências viáveis **esgotadas** e listadas uma a uma no relatório?
- [ ] Fundamento **preciso** (atipicidade / extinção / excludente / justa causa) com subsunção explícita?
- [ ] Comunicações determinadas (vítima — com ciência do prazo de 30 dias —, investigado, autoridade policial)?
- [ ] Remessa à **instância de revisão correta** do ramo (PGJ/órgão delegado ou CCR)?

**Para a defesa (requerimento):**
- [ ] Endereçado ao **MP** (não ao juiz)?
- [ ] Fundamento mais **estável** possível pedido expressamente (atipicidade > justa causa)?
- [ ] Teste de justa causa espelhado no agente `analise-denuncia`?
- [ ] Avaliada a via paralela do **trancamento por HC** (skill `habeas-corpus`) para o caso de insistência ilegal — sem confundi-la com a via ordinária?

**Para a vítima (insurgência):**
- [ ] Dentro dos **30 dias do recebimento** da comunicação (art. 28, §1º; contagem do art. 798, §1º, do CPP)?
- [ ] Endereçada à **instância de revisão** competente?
- [ ] Apontadas **diligências não realizadas** e o lastro mínimo existente?

**Para todos:**
- [ ] Vigência do art. 28, estágio pós-ADIs e regulamentação interna do MP conferidos (`lei-e-sumula` + `jurisprudencia-stj-stf`)?
- [ ] Súmulas e precedentes validados pelo gate `verificacao-citacoes` — nada citado de memória?

## Apoie-se em

- **Agente `analise-denuncia`** — o mesmo filtro de justa causa e viabilidade acusatória que disseca a denúncia fundamenta, em espelho, o arquivamento pedido antes dela.
- **Agentes `lei-e-sumula` e `jurisprudencia-stj-stf`** — redação vigente do art. 28, regulamentação interna do MP (lei orgânica, resoluções) e estado atual dos precedentes (ADIs do Pacote Anticrime, excludente de ilicitude, insignificância).
- **Skill `habeas-corpus`** — via judicial **paralela e excepcional** (trancamento do inquérito) quando o MP insiste em investigação manifestamente ilegal; distinguir sempre da via ordinária desta skill.
- **Best-practice `peticao-criminal`** — arquitetura geral da petição criminal (endereçamento, qualificação, fatos, fundamentos, pedidos).
- **Best-practice `verificacao-citacoes` + agente `verificador-citacoes`** — gate obrigatório: nenhuma súmula, precedente ou dispositivo citado sem verificação; o que não foi conferido sai marcado [NÃO VERIFICADO].
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima da redação: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão. Aplicar em **toda** peça gerada por esta skill.
- **Complementares:** skill `requerimento-investigacao` (abertura da investigação pelo polo da vítima — esta skill é o seu espelho de encerramento) e skill `anpp` (a análise do arquivamento **antecede** a do acordo: não se negocia o que deve ser arquivado).
