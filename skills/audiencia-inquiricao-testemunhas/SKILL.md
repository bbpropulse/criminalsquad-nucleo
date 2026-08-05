---
name: audiencia-inquiricao-testemunhas
description: >-
  Use ao atuar AO VIVO na prova oral da audiência de instrução e julgamento (AIJ): inquirição direta
  e reperguntas das testemunhas (art. 212 do CPP e a nulidade da inversão da ordem), contradita e
  arguição de defeito de testemunha (art. 214 do CPP — antes do compromisso, sob pena de preclusão),
  acareação (arts. 229 e 230 do CPP) e consignação de protestos em ata para preservar nulidades.
  Gatilhos: inquirição de testemunhas… Não use para decisão final, assinatura, protocolo ou citação
  não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, audiencia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-audiencia-inquiricao-testemunhas"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["audiencia-inquiricao-testemunhas", "audiencia inquiricao", "inquiricao testemunhas"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Inquirição de Testemunhas na AIJ (arts. 212, 214, 229–230 do CPP)

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

Esta skill orienta a **execução ao vivo da prova oral** na audiência de instrução e julgamento: como conduzir a **inquirição direta** e as **reperguntas** (art. 212), como e **quando** fazer a **contradita** (art. 214 — janela que fecha em segundos), quando requerer **acareação** (arts. 229–230) e como **consignar protestos em ata** para que a nulidade sobreviva à audiência. Ela complementa — sem duplicar — a skill `preparacao-audiencia` (briefing e roteiro de perguntas **antes** do ato) e a skill `transcricao-audiencia` (registro estruturado **depois** do ato): aqui o foco é o **durante**, onde as preclusões são imediatas e não há segunda chance.

> **Síntese operacional:** na AIJ vigora o exame direto — **as partes perguntam diretamente à testemunha** (art. 212), e o juiz apenas **complementa** ao final (parágrafo único). Três atos têm janela fatal: (1) a **contradita** deve ser feita **antes de iniciado o depoimento** (art. 214), ou preclui; (2) a **inversão do art. 212** (juiz que abre a inquirição) deve ser **protestada na própria audiência**, com consignação em ata, ou a jurisprudência dominante a tratará como nulidade relativa preclusa; (3) **toda pergunta indeferida e todo protesto** devem ser **consignados na ata**, senão o prejuízo (art. 563) será indemonstrável no recurso. Quem sai da audiência sem ata registrando o vício sai, em regra, sem a nulidade.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 212, 213, 214, 217, 229, 230, 400 e 401 do CPP (as redações centrais vêm das Leis 11.690/2008 e 11.719/2008) e a Lei 13.431/2017 (depoimento especial de criança/adolescente). Sobre a **natureza da nulidade da inversão do art. 212** (relativa × absoluta) e sobre o interrogatório como último ato, a jurisprudência de STJ e STF evolui: **pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**. Toda citação passa pelo gate da best-practice `verificacao-citacoes` antes da entrega.

## O instituto e a base legal

A prova testemunhal na instrução é regida pelo Capítulo VI do Título VII do CPP. Mapa dos dispositivos que se aplicam **dentro da sala de audiência**:

| Dispositivo | Conteúdo | Uso ao vivo |
|-------------|----------|-------------|
| **Art. 400** | Ordem da AIJ: ofendido → testemunhas de acusação → testemunhas de defesa → peritos → acareações/reconhecimentos → **interrogatório por último** | Fiscalizar a ordem; interrogatório antecipado é vício arguível |
| **Art. 212** | Perguntas formuladas **pelas partes diretamente**; juiz indefere as **indutivas**, as **sem relação com a causa** e as **repetitivas**; juiz **complementa** ao final (p. único) | Base do exame direto/cruzado e da tese de inversão |
| **Art. 213** | Juiz não permite **apreciações pessoais** da testemunha, salvo inseparáveis da narrativa | Objeção quando a testemunha "opina" contra o réu |
| **Art. 214** | **Contradita** e arguição de defeito — **antes de iniciado o depoimento**; consignação obrigatória; exclusão ou não deferimento de compromisso só nos casos dos **arts. 207 e 208** | Janela de preclusão mais curta da audiência |
| **Arts. 203, 206–208** | Compromisso; recusa de parentes; proibição de depor (sigilo profissional); dispensa de compromisso (menores de 14, deficiência mental, parentes do art. 206) | Fundamentos materiais da contradita |
| **Art. 209 e §§** | Testemunhas **do juízo** (caput) e **referidas** (§1º); não se computa quem nada sabe de útil (§2º) | Requerer oitiva de referida quando favorável |
| **Art. 210** | Depoimentos **separados**; incomunicabilidade das testemunhas | Fiscalizar salas/corredores; arguir quebra |
| **Art. 211** | **Falso testemunho**: juiz remete cópia do depoimento à **autoridade policial** para inquérito | Usar com parcimônia — e proteger a testemunha de defesa |
| **Art. 217** | Retirada do réu só se a presença causar temor/constrangimento; **videoconferência é preferencial**; tudo **consignado** | Vício comum: retirada sem fundamentação |
| **Arts. 229–230** | **Acareação** entre acusados, testemunhas, ofendido — quando divergirem sobre fatos relevantes; cabível por precatória | Ferramenta de confronto de versões divergentes |
| **Arts. 563, 571–572** | *Pas de nullité sans grief*; momentos de arguição; sanação | Por que o protesto em ata é vital |

**Número de testemunhas:** até **8 por fato** no rito ordinário (art. 401), **5** no sumário (art. 532); não se computam as que não prestam compromisso e as referidas (art. 401, §1º). No plenário do júri a inquirição também é direta, mas ali o **juiz presidente pergunta antes das partes** (art. 473, caput — a tese de inversão do art. 212 **não se transpõe** ao plenário) e os **jurados perguntam por intermédio do juiz presidente** (art. 473, §2º) — para a dinâmica de plenário, ver as skills `juri-plenario-debates` e `juri-quesitacao`.

## Cabimento — quando esta skill entra em cena

| Situação | Instrumento | Momento fatal |
|----------|-------------|---------------|
| Testemunha parcial, amiga íntima/inimiga, com interesse no litígio | **Contradita / arguição de defeito** (art. 214) | **Antes de iniciado o depoimento** (na prática: logo após a qualificação, antes do compromisso) |
| Juiz abre a inquirição e "esgota" a testemunha antes das partes | **Protesto por violação do art. 212** | Na própria audiência, consignado em ata |
| Juiz indefere pergunta legítima da defesa | **Protesto + consignação da pergunta indeferida** | Imediato, antes da pergunta seguinte |
| Depoimentos colidentes sobre fato relevante | **Acareação** (art. 229) | Na audiência (fase própria do art. 400) ou por petição antes do encerramento da instrução |
| Réu retirado da sala sem fundamentação ou sem tentar videoconferência | **Protesto por violação do art. 217** | Imediato, consignado |
| Testemunhas conversando entre si antes de depor | **Arguição de quebra de incomunicabilidade** (art. 210) | Assim que constatada, antes do depoimento seguinte |
| Testemunha de acusação menciona terceiro que presenciou os fatos | **Requerimento de oitiva de testemunha referida** (art. 209, §1º) | Antes do encerramento da instrução |

## Inquirição direta e reperguntas (art. 212) — técnica

**Quem pergunta e em que ordem.** Pela praxe consolidada do exame direto e cruzado: a parte que **arrolou** a testemunha pergunta primeiro (exame direto), depois a parte contrária (**repergunta**/exame cruzado) e, **só ao final**, o juiz complementa pontos não esclarecidos (art. 212, p. único). O roteiro de perguntas vem pronto do briefing — ver skill `preparacao-audiencia`; aqui a técnica é de **execução e adaptação em tempo real**.

**Regras de ouro da inquirição pela defesa:**

1. **No exame direto** (testemunha de defesa): perguntas **abertas** ("o que o senhor viu?", "descreva…") — perguntas indutivas serão indeferidas (art. 212) e queimam a credibilidade da testemunha.
2. **Na repergunta** (testemunha de acusação): perguntas **fechadas e controladas**, uma premissa por pergunta, encadeadas para expor contradição — nunca pergunte o que não sabe a resposta, e **pare** quando obtiver a resposta útil (a pergunta a mais devolve a explicação à testemunha).
3. **Impeachment por declaração anterior:** confronte com o que a testemunha disse na delegacia/em juízo anterior — o roteiro de contradições vem do agente `analise-contradicoes` (gerado sobre os autos e sobre transcrições anteriores); em audiência, leia o trecho, peça confirmação e faça **consignar a divergência em ata**.
4. **Objeções:** quando o MP fizer pergunta indutiva, repetitiva ou sem relação com a causa, objete invocando o art. 212; quando a testemunha emitir opinião ("ele tem cara de bandido"), invoque o art. 213 e peça que a apreciação **não seja consignada como fato**.
5. **Não interrompa resposta favorável.** Silêncio também é técnica.

**A nulidade da inversão do art. 212.** Se o juiz **inicia** a inquirição, formula a maioria das perguntas e relega as partes a "reperguntas" residuais, subverte-se o sistema acusatório desenhado pela Lei 11.690/2008. A jurisprudência dominante do STJ trata a inversão como **nulidade relativa**: exige (a) **arguição na própria audiência** e (b) **demonstração de prejuízo concreto** (art. 563); há corrente minoritária pela nulidade absoluta. Consequência prática inegociável: **proteste no ato e faça consignar** (i) que o juiz iniciou e conduziu a inquirição, (ii) quais perguntas da defesa foram prejudicadas ou indeferidas e (iii) o prejuízo concreto (ponto que a defesa não pôde explorar). Sem essa ata, o tema morre. Para o estado atual da divergência, **pesquise via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar**.

## Contradita e arguição de defeito (art. 214)

**Momento:** *"antes de iniciado o depoimento"* — na dinâmica real, o instante entre a **qualificação** da testemunha e a tomada do **compromisso** (art. 203). Passou o compromisso e começou o relato, **precluiu**. É a preclusão mais rápida do processo penal: a defesa precisa chegar à audiência já sabendo **quem vai contraditar e por quê** (mapeamento feito na `preparacao-audiencia`).

**Duas figuras no mesmo artigo:**

| Figura | Hipótese | Efeito possível |
|--------|----------|-----------------|
| **Contradita em sentido estrito** | Testemunha **proibida de depor** (art. 207 — sigilo profissional) ou **sem compromisso** (art. 208 — menor de 14, deficiência mental, parentes do art. 206) | **Exclusão** (art. 207) ou oitiva **sem compromisso**, como **informante** (art. 208) |
| **Arguição de defeito** | Circunstâncias que tornem a testemunha **suspeita de parcialidade ou indigna de fé**: amizade íntima ou inimizade capital com as partes, interesse no resultado, promessa de vantagem, corrupção | **Não exclui nem retira o compromisso** — o juiz **consigna** a arguição e a resposta; o defeito pesa na **valoração** do depoimento (munição para memoriais e apelação) |

**Roteiro oral (fala em audiência), logo após a qualificação:**

```
"Excelência, antes do compromisso, a defesa CONTRADITA a testemunha, na forma
do art. 214 do CPP, porque [é irmã da vítima — art. 206 c/c 208 / mantém
inimizade capital com o réu, conforme boletim de ocorrência de agressão mútua
juntado à fl. X / tem interesse direto no resultado, pois figura como autora
de ação cível conexa]. Requer: (a) que a contradita e a resposta da testemunha
sejam CONSIGNADAS EM ATA; (b) [a exclusão da testemunha / que seja ouvida sem
compromisso, como mera informante]; (c) subsidiariamente, que o defeito seja
consignado para fins de valoração do depoimento."
```

**Pontos táticos:**
- **Prove na hora:** contradita sem lastro é rejeitada de plano. Leve o documento (certidão, print, BO, árvore genealógica do vínculo) já separado no material da audiência.
- **A rejeição não encerra o tema:** mesmo indeferida, a contradita **consignada** autoriza atacar a valoração do depoimento em memoriais e em apelação. A consignação é o objetivo mínimo.
- **Cuidado reverso:** o MP também pode contraditar as testemunhas da defesa — prepare cada testemunha para responder com calma sobre vínculos (negar vínculo real é caminho para o art. 211).
- **Informante não é testemunha:** depoimento sem compromisso não se computa no número legal (art. 401, §1º) e tem valor probatório reduzido — tese útil quando a condenação se apoia em informantes.

## Acareação (arts. 229–230)

**Cabimento:** entre acusados, entre acusado e testemunha, entre testemunhas, entre acusado ou testemunha e o ofendido, e entre ofendidos — **sempre que divergirem sobre fatos ou circunstâncias relevantes** (art. 229). Os acareados são reperguntados para explicar os pontos de divergência, **reduzindo-se a termo** (art. 229, p. único). Testemunha ausente: acareação por precatória, se não trouxer demora ou prejuízo (art. 230).

**Técnica e cálculo de risco:**
- Requeira na **fase própria do art. 400** (após as oitivas, antes do interrogatório) ou tão logo a divergência se materialize; especifique **ponto a ponto** a divergência (data, local, dinâmica, quem estava presente) — pedido genérico é indeferido como protelatório (art. 400, §1º).
- **Só acareie quando a divergência favorece a defesa** e a testemunha "sua" é mais firme: acareação é confronto físico de versões e pode reforçar a versão acusatória se mal calculada.
- Indeferida a acareação, **proteste e consigne** o requerimento, os pontos divergentes e o prejuízo — o indeferimento imotivado de prova pertinente é tese de cerceamento de defesa para a apelação.

## Estrutura forense — consignação de protestos em ata

A "peça" desta skill é atípica: nasce **oralmente** e vive na **ata da audiência**. Quando o registro oral for insuficiente (juiz que resume, ata lacônica de sistema), a defesa apresenta **petição de consignação na própria audiência** (ditada ao escrivão ou juntada no ato). Estrutura adaptada:

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL DA
COMARCA DE [COMARCA] — UF          [enderece ao juízo DA AUDIÊNCIA — o
                                    protesto é incidente do ato, não recurso]

Autos nº [Nº DO PROCESSO] — Audiência de instrução de [DATA]

[NOME DO RÉU], já qualificado(a), por seu(sua) advogado(a), vem, na própria
audiência, REQUERER A CONSIGNAÇÃO EM ATA dos seguintes protestos:

I — DOS FATOS OCORRIDOS NO ATO
[Descrever objetivamente: a) o juízo iniciou e conduziu a inquirição da
testemunha [NOME], formulando [Nº] perguntas antes de facultar a palavra às
partes; b) foram indeferidas as seguintes perguntas da defesa: "[TRANSCREVER
CADA PERGUNTA INDEFERIDA]"; c) a contradita da testemunha [NOME] foi rejeitada;
d) o réu foi retirado da sala sem tentativa de videoconferência.]

II — DOS FUNDAMENTOS
Violação do art. 212 do CPP (inversão da ordem legal de inquirição) [e/ou]
art. 214 (contradita) [e/ou] art. 217 (retirada do réu sem fundamentação e
sem a via preferencial da videoconferência) [e/ou] cerceamento de defesa
pelo indeferimento de perguntas pertinentes (arts. 212 e 400, §1º, a
contrario sensu).

III — DO PREJUÍZO (art. 563 do CPP)
[Indicar CONCRETAMENTE o que a defesa deixou de provar/explorar: a pergunta
indeferida visava demonstrar [PONTO]; a condução judicial impediu o exame
cruzado sobre [PONTO].]

IV — DOS PEDIDOS
a) a consignação INTEGRAL destes protestos e das perguntas indeferidas, com
   sua transcrição literal em ata;
b) [se o ato for gravado] a preservação da mídia audiovisual da audiência;
c) a ressalva de que a defesa NÃO renuncia às nulidades ora protestadas,
   que serão reiteradas em alegações finais e em eventual recurso.

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [Nº DO PROCESSO], [COMARCA], [DATA], [NOME do réu e das testemunhas], perguntas indeferidas **literais**, [PONTO] do prejuízo, dados do(a) advogado(a).

**Por que isso importa:** o art. 571 fixa os momentos de arguição das nulidades da instrução, e a jurisprudência exige arguição **oportuna** + prejuízo (art. 563), sob pena de sanação (art. 572). A ata (ou a mídia preservada) é a **única prova** de que a defesa arguiu no momento certo — reitere depois em alegações finais/memoriais (ver skill `memoriais`) e no recurso.

## Teses típicas da prática

- **Inversão do art. 212** com prejuízo demonstrado em ata → nulidade da audiência a partir da oitiva viciada.
- **Indeferimento de perguntas pertinentes** da defesa → cerceamento de defesa (arts. 212 e 261; contraditório — art. 5º, LV, CF).
- **Condenação lastreada em informantes** (art. 208) ou em testemunha com defeito consignado (art. 214) → fragilidade probatória; *in dubio pro reo* em memoriais/apelação.
- **Retirada do réu sem fundamentação ou sem tentar videoconferência** (art. 217) → nulidade do depoimento colhido; violação da autodefesa (presença).
- **Quebra de incomunicabilidade** (art. 210) consignada → descrédito dos depoimentos alinhados.
- **Interrogatório fora do último lugar** (art. 400) → violação da ampla defesa; o STF consolidou o interrogatório como ato final da instrução — pesquise o precedente via agente `jurisprudencia-stj-stf` e verifique com `verificador-citacoes`; marque [NÃO VERIFICADO] o que não confirmar.
- **Depoimento especial irregular** de criança/adolescente (Lei 13.431/2017 — protocolo, profissional capacitado, sala adequada) → impugnar a colheita.
- Para transformar cada vício consignado em **capítulo de nulidade** com análise de prejuízo, acione o agente `mapa-nulidades`.

## Erros comuns e pegadinhas

| Erro | Consequência | Antídoto |
|------|--------------|----------|
| Contraditar **depois** do compromisso/início do relato | **Preclusão** (art. 214: "antes de iniciado o depoimento") | Checklist de contraditas pronto antes do ato (via `preparacao-audiencia`) |
| Protestar oralmente e **não conferir a ata** antes de assinar | Ata lacônica = protesto inexistente para o tribunal | Ler a ata; se incompleta, recusar assinatura sem ressalva e ditar complemento; pedir preservação da mídia |
| Arguir a inversão do 212 **só na apelação** | Nulidade relativa preclusa; prejuízo indemonstrável | Protesto + consignação na própria audiência |
| Não transcrever **literalmente** a pergunta indeferida | Tribunal não afere pertinência nem prejuízo | Ditar a pergunta ao escrivão, palavra por palavra |
| "Guardar" a contradição para os memoriais sem confrontar a testemunha | A testemunha explica a divergência depois, por escrito, com calma | Impeachment em audiência + consignação da divergência |
| Acarear com testemunha adversa mais firme que a própria | Reforço da versão acusatória reduzido a termo | Cálculo de risco prévio; acareação é exceção, não rotina |
| Endereçar o protesto ao **tribunal** ou fazê-lo por petição dias depois | Incidente do ato deve ser decidido pelo juízo da audiência, no ato | Enderece ao juízo da vara, na própria audiência |
| Pedir a condenação da testemunha adversa por falso testemunho como tática | Hostiliza o juízo; o art. 211 é faculdade **do juiz** | Demonstrar a mentira e pedir só a consignação |
| Esquecer que o prazo/momento de arrolar testemunha já passou | Rol é da resposta à acusação (art. 396-A) — em audiência restam **referidas** (art. 209, §1º) e diligências do art. 402 | Requerer oitiva de referida assim que o nome surgir |
| Anuir com a **desistência** (pelo MP) de testemunha que interessava à defesa | Oitiva perdida sem registro; tema precluso | Não anuir; requerer a oitiva como **testemunha do juízo** (art. 209, caput) e consignar |

## Checklist de audiência (prova oral)

- [ ] Briefing e roteiro de perguntas prontos (skill `preparacao-audiencia`) + mapa de contradições por testemunha (agente `analise-contradicoes`)?
- [ ] Lista de **quem contraditar**, com fundamento (207/208/defeito) e **documento de prova** separado?
- [ ] Incomunicabilidade fiscalizada (art. 210) antes de cada depoimento?
- [ ] Cada pergunta indeferida **transcrita literalmente** em ata, com protesto?
- [ ] Inversão do 212 / retirada do réu (217) / indeferimentos → **protesto + prejuízo concreto consignados**?
- [ ] Divergências relevantes mapeadas → acareação requerida (ponto a ponto) ou descartada por risco?
- [ ] Ata **lida antes de assinar**; mídia audiovisual com preservação requerida?
- [ ] Registro pós-ato estruturado (skill `transcricao-audiencia`) alimentando memoriais e recurso?
- [ ] Citações e precedentes do que será sustentado conferidos via `verificacao-citacoes`?

## Lembretes finais

- **A audiência não perdoa:** contradita antes do compromisso, protesto no ato, pergunta indeferida transcrita. O que não está na ata **não aconteceu**.
- **Art. 212 = as partes perguntam primeiro;** o juiz complementa. Inversão → protesto imediato + prejuízo concreto, ou o tema preclui.
- **Contradita indeferida ainda serve:** consignada, vira argumento de valoração em memoriais e apelação.
- **Acareação é bisturi, não porrete** — só quando a divergência favorece a defesa.
- **Prejuízo (art. 563) se constrói em audiência,** não se inventa no recurso: consigne o que a defesa deixou de provar.
- Esta skill é o **durante**; o antes é `preparacao-audiencia`, o depois é `transcricao-audiencia`.
- **Conformidade transversal:** toda entrega é rascunho para revisão humana; aplicar `etica-oab-sigilo` e o gate `verificacao-citacoes`.

## Apoie-se em

- **Agente `analise-contradicoes`** — gera o roteiro de impeachment e reperguntas a partir das divergências entre depoimentos e a prova dos autos.
- **Agente `mapa-nulidades`** — transforma os protestos consignados (art. 212, retirada do réu, indeferimentos) em capítulos de nulidade com análise de prejuízo.
- **Skill `preparacao-audiencia`** — briefing completo do ato (partes, atos anteriores, teses, roteiro de perguntas) **antes** da audiência.
- **Skill `transcricao-audiencia`** — registro estruturado do ato (falas, pontos-chave, contradições, citações a verificar) **depois** da audiência.
- **Best-practice `pesquisa-jurisprudencial`** — estratégia híbrida (acervo local → web) para o estado atual da jurisprudência sobre o art. 212, contradita e depoimento especial.
- **Agente `jurisprudencia-stj-stf`** — localiza os precedentes atuais de STJ/STF sobre a inversão do art. 212, o interrogatório como último ato e o depoimento especial, sempre com número e ementa reais.
- **Agente `verificador-citacoes` / Best-practice `verificacao-citacoes`** — gate obrigatório antes da entrega: todo precedente que sustentar protesto, memoriais ou recurso passa pela verificação; o que não confirmar sai marcado **[NÃO VERIFICADO]**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
