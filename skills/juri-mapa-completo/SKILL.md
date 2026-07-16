---
name: juri-mapa-completo
description: >-
  Use ao navegar o rito COMPLETO do Tribunal do Júri (da denúncia à execução) e ao atuar nas fases
  que as skills específicas não cobrem — DESAFORAMENTO (arts. 427-428 CPP), pedido de julgamento
  imediato (art. 428, §2º), preparação do plenário (rol do art. 422, lista/relação de jurados,
  impedimento e suspeição de jurado, as 3 recusas peremptórias do art. 468, estouro de urna), ordem
  da sessão (arts. 472-497), apartes, algemas… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-mapa-completo"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-mapa-completo", "juri mapa", "mapa completo"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Júri — Mapa Completo (da denúncia à execução)

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

Esta skill é o **mapa mestre do Tribunal do Júri**: organiza o rito inteiro em uma **linha do tempo com o ato ou peça de cada fase** e aprofunda os territórios sem skill própria — **desaforamento** (arts. 427-428 CPP), **preparação do plenário** (rol do art. 422, lista de jurados, impedimentos, recusas peremptórias, estouro de urna), **fiscalização da sessão** (arts. 472-497, algemas, apartes) e o mapa da **apelação do veredicto** (art. 593, III). O cliente do júri atravessa **todas** as fases; as já cobertas por skill específica são **referenciadas, não duplicadas**.

> **Conhecimento do rito primeiro:** leia a best-practice `tribunal-do-juri` (princípios constitucionais, as quatro decisões da 1ª fase, recurso correto por decisão). Esta skill assume esse conhecimento e cuida da **navegação integral** e das **peças órfãs** do procedimento.

## Divisão de trabalho — o que cada skill cobre

| Território | Quem cobre |
|---|---|
| Alegações finais da 1ª fase (absolvição sumária, impronúncia, desclassificação) | skill `juri-pronuncia-defesa` |
| RESE contra a pronúncia (art. 581, IV) e contra a desclassificação (art. 581, II) | skill `rese` |
| Teses, tempos e roteiro dos debates em plenário (arts. 476-479 em profundidade) | skill `juri-plenario-debates` |
| Formulação, ordem e impugnação de quesitos (arts. 482-491) | skill `juri-quesitacao` |
| Redação da apelação (inclusive a do art. 593, III) | skill `apelacao` |
| **Desaforamento, preparação do plenário, jurados e recusas, ordem da sessão, mapa integral** | **esta skill** |

## Linha do tempo mestre — peça ou ato por fase

| # | Fase | Ato/peça da defesa | Prazo e base | Aprofundar em |
|---|---|---|---|---|
| 1 | Denúncia recebida | Resposta à acusação (obrigatória; até **8** testemunhas) | 10 dias — art. 406 | BP `tribunal-do-juri` |
| 2 | Instrução preliminar | Audiência una; interrogatório por último | art. 411 (fase encerra em 90 dias — art. 412) | BP `tribunal-do-juri` |
| 3 | Alegações finais da 1ª fase | Memoriais: absolvição sumária → impronúncia → desclassificação → decote | oral 20+10 min (art. 411, §4º) ou memoriais por analogia | skill `juri-pronuncia-defesa` |
| 4 | Decisão da 1ª fase | Pronúncia (413) · impronúncia (414) · absolvição sumária (415) · desclassificação (419) | — | BP `tribunal-do-juri` |
| 5 | Recurso da decisão | Pronúncia/desclassificação → **RESE**; impronúncia/absolvição sumária → **apelação** (416) | RESE 5+2; apelação 5+8 | skills `rese` e `apelacao` |
| 6 | Preclusão da pronúncia | Autos ao juiz-presidente (art. 421) — **abre a janela do desaforamento** | — | esta skill |
| 7 | Incidentes de foro | Pedido de **desaforamento** (427-428) ou de **julgamento imediato** (428, §2º) | ver seção própria | esta skill |
| 8 | Preparação do plenário | **Petição do art. 422**: até 5 testemunhas (imprescindibilidade), documentos, diligências | **5 dias** — art. 422 | esta skill |
| 9 | Pauta e sorteio | Relatório do processo (423); sorteio de **25** jurados (arts. 432-433, 447) | — | esta skill |
| 10 | Sessão — formação do Conselho | Instalação com **15** (463); impedimentos (448-449); **3 recusas** por parte (468); estouro de urna (469/471) | — | esta skill |
| 11 | Sessão — instrução e debates | Compromisso (472); instrução plenária (473-475; algemas — SV 11); debates (476-477); vedações (478-479) | 1h30/2h30 + réplica/tréplica | skill `juri-plenario-debates` |
| 12 | Quesitação e veredicto | Leitura, impugnação (art. 484) e votação dos quesitos (482-491) | — | skill `juri-quesitacao` |
| 13 | Sentença | Sentença do juiz-presidente (492), **lida em plenário (493) — vale como intimação das partes presentes** | — | esta skill |
| 14 | Apelação do veredicto | Apelação **vinculada** às alíneas do art. 593, III | 5 dias + 8 — arts. 593 e 600 | skill `apelacao` + esta skill |
| 15 | Execução | Execução imediata da condenação do júri (Tema 1.068/STF — confirmar inteiro teor) | — | skills de execução penal |

> **Trilha paralela do réu preso:** enquanto a linha do tempo corre, a cautelar tem vida própria (revisão de 90 dias, excesso de prazo) — skill `liberdade-provisoria-relaxamento`. O art. 428 (mora de 6 meses para o plenário) conversa diretamente com o excesso de prazo da custódia.

## Desaforamento (arts. 427-428 CPP) — a peça órfã do júri

O desaforamento **desloca o julgamento em plenário** — não o processo inteiro — para outra comarca **da mesma região**, onde não existam os motivos que o justificaram, com **preferência pela mais próxima** (art. 427, *caput*). É medida **excepcional**, porque derroga a regra do foro do local do fato (art. 70 CPP); por isso exige **prova pré-constituída** dos motivos, nunca conjectura.

### Cabimento — quatro hipóteses

| Hipótese | O que provar | Base |
|---|---|---|
| **Interesse da ordem pública** | Comoção/tumulto local que ameaça a regularidade e a segurança da sessão | art. 427, *caput* |
| **Dúvida sobre a imparcialidade do júri** | Contaminação do corpo de jurados: notoriedade do caso na comarca, influência do réu ou da vítima, campanha midiática local intensa | art. 427, *caput* |
| **Segurança pessoal do acusado** | Risco concreto à integridade do réu (ameaças documentadas, tentativas de agressão) | art. 427, *caput* |
| **Excesso de serviço** | Excesso **comprovado**, com julgamento não realizado em **6 meses** contados do **trânsito em julgado da pronúncia** (texto legal — tecnicamente, a preclusão); ouvidos o juiz-presidente e a parte contrária | art. 428, *caput* |

Regras operacionais:
- **Legitimidade:** MP, assistente, querelante e **acusado**; o juiz competente atua por **representação** (art. 427, *caput*).
- **Quem julga:** o **Tribunal de 2º grau** (Câmara/Turma criminal), com distribuição imediata e **preferência** de julgamento (art. 427, §1º).
- **Liminar:** sendo relevantes os motivos, o **relator pode suspender o julgamento pelo júri** (art. 427, §2º) — peça sempre a suspensão.
- **Contraditório:** ouve-se o juiz-presidente quando a medida não partiu dele (art. 427, §3º); e é **nulo o desaforamento decidido sem audiência da defesa** (**Súmula 712 STF**).
- **Momento:** só **após a preclusão da pronúncia**. **Não se admite** na pendência de recurso contra a pronúncia, nem depois de realizado o julgamento — salvo quanto a **fato ocorrido durante ou após julgamento anulado** (art. 427, §4º).
- **No art. 428:** na contagem dos 6 meses **não se computam** adiamentos, diligências e incidentes **de interesse da defesa** (art. 428, §1º).
- **Dois polos:** a defesa tanto **pede** o desaforamento (imparcialidade/segurança) quanto **resiste** ao pedido do MP/assistente — sustentando o juiz natural, a excepcionalidade da medida e a fragilidade da prova dos motivos.

### Estrutura forense do pedido de desaforamento

```
AO TRIBUNAL DE JUSTIÇA DO ESTADO DE [UF] — [CÂMARA CRIMINAL COMPETENTE]

Referência: Ação Penal nº [...] — [N]ª Vara do Tribunal do Júri de [Comarca]

[NOME], já qualificado(a) nos autos em referência, por seu(sua) advogado(a),
vem, com fundamento no art. 427 [ou art. 428] do Código de Processo Penal
(CPP), requerer o DESAFORAMENTO do julgamento pelo Tribunal do Júri, pelas
razões que seguem:

I — DO CABIMENTO E DO MOMENTO
   [Pronúncia preclusa em (data); inexistência de recurso pendente
   (art. 427, §4º); sessão designada para (data), se houver.]

II — DOS MOTIVOS (prova pré-constituída)
   [Hipótese invocada + lastro documental: reportagens e alcance local,
   manifestações públicas, abaixo-assinados, atas de sessões anteriores,
   ameaças registradas (BO), certidões da comarca — anexar tudo.]

III — DOS PEDIDOS
   a) LIMINARMENTE, a suspensão da sessão designada (art. 427, §2º);
   b) a requisição de informações ao Juízo de origem (art. 427, §3º);
   c) o DESAFORAMENTO para comarca próxima da mesma região em que não
      subsistam os motivos (art. 427, caput).

[Local], [data]. — [Advogado(a)] — OAB/[UF] nº [...]
```

### O espelho do desaforamento: julgamento imediato (art. 428, §2º)

Não havendo excesso de serviço nem acúmulo de processos além da capacidade das reuniões periódicas, o acusado — sobretudo o **preso** — pode requerer ao Tribunal a **imediata realização do julgamento**. É a peça contra a mora que **não desloca** a comarca; cumule-a, quando for o caso, com a tese de excesso de prazo da custódia (skill `liberdade-provisoria-relaxamento`).

## Preparação do plenário — a fase mais preclusiva do rito

### Petição do art. 422 (5 dias): o rol de plenário

Preclusa a pronúncia, o juiz-presidente intima as partes para, em **5 dias**: **arrolar até 5 testemunhas** que deporão em plenário (não confundir com as **8** da 1ª fase), **juntar documentos** e **requerer diligências**. Perdido o prazo, **preclui** o rol de plenário.

Técnica defensiva indispensável (art. 461): arrolar a testemunha-chave **em caráter de imprescindibilidade**, **requerendo a intimação por mandado** e **indicando sua localização** — sem essa tríade, a ausência da testemunha **não adia** o julgamento. E lembre: documento ou mídia para **exibição em plenário** segue a regra dos **3 dias úteis** do art. 479, com ciência à outra parte (aprofundamento na skill `juri-plenario-debates`).

### Lista de jurados: fiscalize antes da sessão

- **Alistamento anual** por faixas populacionais (art. 425); lista geral publicada **até 10 de outubro**, alterável de ofício ou mediante **reclamação de qualquer do povo** ao juiz-presidente até **10 de novembro** (art. 426, §1º).
- Quem integrou Conselho de Sentença nos **12 meses anteriores** à publicação fica **excluído** da lista (art. 426, §4º).
- Para a reunião periódica sorteiam-se **25 jurados** (arts. 432-433; art. 447); a sessão só se instala com **no mínimo 15 presentes** (art. 463); sem quórum, sorteiam-se suplentes e designa-se nova data (art. 464).
- **Trabalho de base da defesa:** obter a relação dos 25 convocados com antecedência e mapear perfil, ocupação e vínculos (com a vítima, com a acusação, com o caso). É essa investigação que torna **racionais** as recusas do art. 468 — recusa peremptória sem estudo prévio é chute.

### Formação do Conselho: impedimentos, recusas e estouro de urna

- **Impedimentos entre jurados** (art. 448): não servem no mesmo Conselho cônjuges/companheiros, ascendente e descendente, sogro e genro/nora, irmãos e cunhados, tio e sobrinho, padrasto/madrasta/enteado; aplicam-se aos jurados **os impedimentos, a suspeição e as incompatibilidades dos juízes togados** (art. 448, §2º).
- **Vedações do art. 449:** não serve o jurado que (I) funcionou em **julgamento anterior do mesmo processo**; (II) no concurso de pessoas, integrou o Conselho que **julgou corréu**; (III) manifestou **prévia disposição** de condenar ou absolver.
- **Arguição rejeitada não suspende o julgamento**, mas o fundamento e a decisão **constam da ata** (art. 470) — exija a consignação: é ela que sustenta a futura apelação pela alínea "a".
- **Recusas peremptórias (art. 468):** lida cada cédula sorteada, fala **primeiro a DEFESA e depois o MP** — cada parte recusa **até 3 jurados sem motivar**. O recusado sai daquela sessão (art. 468, p.ú.). Recusas **motivadas** (impedimento/suspeição) não têm limite numérico — fundamente-as.
- **Estouro de urna:** se, por impedimentos, dispensas e recusas, não restarem **7** para compor o Conselho, o julgamento é **adiado** para o primeiro dia desimpedido, sorteando-se suplentes (art. 471 c/c 464). Com **2 ou mais réus**, as recusas podem ser feitas por um só defensor (art. 469, *caput*); não havendo acordo, a **separação dos julgamentos** só ocorre se as recusas inviabilizarem os 7 (art. 469, §1º), julgando-se primeiro o acusado a quem atribuída a autoria do fato (art. 469, §2º) — o estouro de urna é, portanto, **ferramenta tática** em julgamentos com corréus, mas de uso responsável.
- **Presenças:** o não comparecimento do **réu solto** regularmente intimado **não adia** a sessão (art. 457). Falta do **defensor** sem escusa legítima: comunica-se a OAB, **adia-se uma única vez** e intima-se a **Defensoria Pública** para o novo julgamento, com antecedência mínima de 10 dias (art. 456).

## A sessão de julgamento, ato a ato (arts. 472-497)

1. **Advertências e incomunicabilidade** (art. 466 e §1º): sorteados, os jurados são advertidos dos impedimentos e ficam **incomunicáveis** sobre o processo — a quebra é nulidade (fiscalize e consigne).
2. **Compromisso** (art. 472) e entrega a cada jurado de **cópia da pronúncia e do relatório** do processo (art. 472, p.ú.).
3. **Instrução plenária** (art. 473): ofendido e testemunhas; os jurados perguntam **por intermédio do juiz**; a **leitura de peças** em instrução restringe-se às colhidas por **carta precatória** e às provas **cautelares, antecipadas ou não repetíveis** (art. 473, §3º).
4. **Interrogatório por último** (art. 474). **Algemas vedadas** no plenário, salvo absoluta necessidade concreta (art. 474, §3º; **Súmula Vinculante 11**) — réu algemado sem justificativa idônea é tese de nulidade; e a decisão sobre algemas **não pode virar argumento** perante os jurados (art. 478, I).
5. **Debates** (arts. 476-477): ordem da palavra, tempos, réplica e tréplica — skill `juri-plenario-debates`.
6. **Apartes**: regulados pelo juiz-presidente, **até 3 minutos** cada, acrescidos ao tempo de quem detém a palavra (art. 497, XII — confira a redação vigente via agente `lei-e-sumula`). Aparte não concedido ou abusivo: requerer registro em ata.
7. **Vedações do art. 478** (pronúncia e silêncio como argumento de autoridade) e **regra dos 3 dias úteis do art. 479**: protesto imediato + consignação — detalhes na skill `juri-plenario-debates`.
8. **Fiscalização da leitura** (art. 480): qualquer parte pode exigir que o orador **indique a folha dos autos** da peça lida ou citada; os jurados podem pedir esclarecimentos pelo juiz. **Diligência essencial** impossível de realizar na hora → **dissolução do Conselho** (art. 481).
9. **Quesitação** (arts. 482-491): leitura, impugnação no momento do art. 484 e votação — skill `juri-quesitacao`.
10. **Sentença** (art. 492) **lida em plenário** (art. 493): as partes presentes **saem intimadas** — o prazo recursal corre daí, não de publicação posterior.
11. **Ata da sessão** (arts. 494-495): confira-a antes de encerrar — requerimentos, protestos, indeferimentos e incidentes registrados são a **munição da apelação pela alínea "a"**.
12. **Réu indefeso** (art. 497, V): o juiz-presidente pode declarar o réu indefeso e **dissolver o Conselho**, nomeando novo defensor — defesa deficiente em plenário é nulidade.

## Apelação do veredicto (art. 593, III) — limites de cada alínea × soberania

A apelação do júri é **vinculada e taxativa**: só cabe pelas quatro alíneas, e a devolutividade fica **adstrita aos fundamentos da interposição** (**Súmula 713 STF**) — errar a alínea na interposição esvazia o recurso. A **redação** da peça é da skill `apelacao`; aqui, o mapa dos limites:

| Alínea | Vício atacado | Efeito do provimento | Limite (soberania) |
|---|---|---|---|
| **"a"** | Nulidade **posterior à pronúncia** (formação do Conselho, arts. 478/479, quesitação, defesa deficiente) | **Anula** o julgamento → novo júri | Em regra exige protesto/consignação em ata e prejuízo |
| **"b"** | Sentença do **juiz-presidente** contrária à lei expressa ou à decisão dos jurados | Tribunal **retifica** (art. 593, §1º) — sem novo júri | Não toca o mérito do veredicto |
| **"c"** | Erro ou injustiça na **aplicação da pena** ou medida de segurança | Tribunal **corrige** a sanção (art. 593, §2º) — sem novo júri | Só a dosimetria |
| **"d"** | Decisão dos **jurados manifestamente contrária à prova** dos autos | **Novo júri** (art. 593, §3º) | **Uma única vez** pelo mesmo motivo; o tribunal **não absolve nem condena** |

- **"Manifestamente contrária"** = veredicto **sem qualquer apoio** na prova. Havendo duas versões plausíveis, a escolha dos jurados prevalece (soberania) — construa a alínea "d" demonstrando que a versão acolhida não tem lastro **algum**, não que a sua era melhor.
- **Prazos:** interposição em **5 dias** (art. 593, *caput*) + razões em **8 dias** (art. 600); termo inicial na **leitura da sentença em plenário** (art. 493).
- **Execução imediata:** a condenação pelo júri autoriza execução imediata independentemente do total da pena (**Tema 1.068/STF**, tese de repercussão geral de 2024 — confirme o inteiro teor e desdobramentos atuais via agente `jurisprudencia-stj-stf` antes de usar; marque **[NÃO VERIFICADO]** até conferir).

## Teses típicas desta camada do rito

- **Desaforamento defensivo** por dúvida sobre imparcialidade: comarca pequena + caso de grande repercussão local + vínculos da vítima/família com a comunidade → prova pré-constituída da contaminação do corpo de jurados.
- **Resistência ao desaforamento acusatório:** juiz natural (art. 70 CPP), excepcionalidade da medida e insuficiência da prova dos motivos; nulidade se decidido **sem oitiva da defesa** (Súmula 712 STF).
- **Julgamento imediato** (art. 428, §2º) para réu preso, cumulado com excesso de prazo da custódia.
- **Nulidade na formação do Conselho:** jurado impedido/vedado (arts. 448-449) ou quebra de incomunicabilidade — arguição imediata + consignação (art. 470) + apelação pela alínea "a".
- **Algemas sem justificativa concreta** (SV 11; art. 474, §3º): protesto, consignação e tese de nulidade — reforçada se a acusação explorar a imagem do réu contido.
- **Testemunha imprescindível ausente** (art. 461, com a tríade cumprida): adiamento obrigatório; indeferido, protesto para a alínea "a".
- **Alínea "d" preparada em plenário:** a apelação por veredicto contrário à prova nasce dos debates — amarre cada tese à prova dos autos (skill `juri-plenario-debates`) para demonstrar depois a ausência de lastro do veredicto.

## Erros comuns e pegadinhas

- **Desaforamento na pendência do RESE da pronúncia** → inadmissível (art. 427, §4º). Antes da pronúncia, tampouco: a janela abre com a **preclusão**.
- **"Reaforamento"** (retorno à comarca de origem) **não tem previsão legal** — para sustentar qualquer retorno, pesquise o estado atual via agente `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**.
- **Confundir os quóruns do júri:** **25** sorteados para a reunião (art. 447) ≠ **15** para instalar a sessão (art. 463) ≠ **7** do Conselho de Sentença. E os **6 meses** do art. 428 contam do **trânsito em julgado/preclusão da pronúncia** — não da data da decisão.
- **Perder os 5 dias do art. 422** → preclusão do rol de plenário. É o prazo mais esquecido do rito.
- **Arrolar sem a tríade do art. 461** (imprescindibilidade + mandado + localização) → a falta da testemunha **não adia** o julgamento.
- **Art. 479 conta em dias ÚTEIS** — contagem diversa da regra geral do **art. 798 CPP** (prazos **contínuos e peremptórios**, sem interrupção por férias, domingo ou feriado; **exclui-se o dia do começo e inclui-se o do vencimento**, §1º; vencimento em domingo/feriado prorroga ao dia útil seguinte, §3º). Não misture os dois regimes.
- **Defensoria Pública: prazo em dobro** para todas as manifestações e intimação pessoal (LC 80/94, arts. 44, I, 89, I e 128, I) — vale para o art. 422 e para a apelação. O MP **não** tem dobra no processo penal.
- **Esperar a publicação da sentença do júri** → o prazo correu da **leitura em plenário** (art. 493). Apelação intempestiva.
- **Ordem das recusas invertida:** a **defesa recusa primeiro**, depois o MP (art. 468) — se o juiz colher primeiro a acusação, impugne e consigne.
- **Impedimento de jurado não arguido na hora** → risco concreto de preclusão; o regime do vício (nulidade absoluta × relativa) varia conforme o caso — pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**. Regra de ouro: arguir imediatamente e consignar (art. 470).
- **Alínea errada na interposição** → devolutividade esvaziada (Súmula 713 STF). E **segunda apelação pela alínea "d" pelo mesmo motivo não cabe** (art. 593, §3º).
- **Pedir que o tribunal absolva na alínea "d"** → viola a soberania: o efeito é **novo júri**, nunca a substituição do veredicto.
- **"Protesto por novo júri"** → recurso **abolido** (Lei 11.689/2008); hoje "novo júri" é apenas o **efeito** do provimento da alínea "d".
- **Dispositivo com redação incerta** (arts. 425-426, 449, 461, 469-471, 497, XII): o rito foi reescrito pela Lei 11.689/2008 — **confira o texto vigente** via agente `lei-e-sumula` antes de citar.

## Apoie-se em

- **Skill `juri-pronuncia-defesa`** — alegações finais da 1ª fase (absolvição sumária, impronúncia, desclassificação, decote).
- **Skill `juri-quesitacao`** — formulação, ordem do art. 483 e impugnação dos quesitos (art. 484).
- **Skill `juri-plenario-debates`** — teses de plenário, tempos do art. 477, vedações dos arts. 478-479 em profundidade e roteiro de oralidade.
- **Skill `rese`** — recurso contra a pronúncia (art. 581, IV) e contra a desclassificação (art. 581, II), com pedido de retratação.
- **Skill `apelacao`** — redação da apelação, inclusive a do júri (art. 593, III) e a das decisões do art. 416.
- **Best-practice `tribunal-do-juri`** — rito bifásico, princípios, quadro de prazos e anti-patterns do procedimento.
- **Agente `jurisprudencia-stj-stf`** — pesquisa de precedente atual (desaforamento, jurados, alínea "d", Tema 1.068); enquanto não verificado, marque **[NÃO VERIFICADO]**.
- **Agente `verificador-citacoes`** — gate obrigatório: nenhuma lei, súmula ou julgado citado de memória; na dúvida, **omitir vence inventar**.
- **Skill `redacao-persuasiva-criminal`** — SEMPRE, ao redigir qualquer peça deste mapa: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).

**Toda entrega é rascunho técnico:** revisão humana obrigatória pelo(a) advogado(a) responsável (CED, art. 2º) antes de qualquer protocolo.
