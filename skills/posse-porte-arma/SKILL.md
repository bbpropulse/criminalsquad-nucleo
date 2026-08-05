---
name: posse-porte-arma
description: >-
  Use ao defender acusado por crime do Estatuto do Desarmamento (Lei 10.826/2003, arts. 12-18) —
  enquadramento correto do tipo, desclassificação (16→14/12) e teses de atipicidade em resposta à
  acusação, memoriais e habeas corpus. Gatilhos: Estatuto do Desarmamento, Lei 10.826, posse
  irregular de arma, porte ilegal de arma, disparo de arma de fogo, arma de uso restrito, arma de
  uso…. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-posse-porte-arma"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["posse-porte-arma", "posse porte", "porte arma"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Posse e Porte de Arma (Lei 10.826/2003 — defesa nos arts. 12-18)

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

Esta skill orienta a **defesa nos crimes do Estatuto do Desarmamento** — um dos maiores volumes da vara criminal comum. Entrega uma **metodologia de enquadramento** (qual tipo penal realmente incide), um **banco de teses defensivas** e a **estrutura forense** para usá-las em resposta à acusação, memoriais e habeas corpus. A devolução da arma apreendida é tratada na skill `restituicao-coisas-apreendidas` (CPP 118-124 e a corrida contra a destruição do art. 25); a soltura do preso, na skill `liberdade-provisoria-relaxamento` — aqui o objeto é a **tipicidade e a capitulação**.

> **Lição central:** nos crimes de arma, a defesa quase sempre se ganha (ou se perde) **no enquadramento**. Três variáveis definem tudo — **conduta** (guardar em casa × trazer consigo × disparar), **classificação da arma** (uso permitido × restrito × proibido) e **situação registral** (registrada, vencida, sem registro, CAC). Antes de qualquer tese, responda às três; a capitulação errada do MP é a primeira tese da defesa.

> **Natureza dos tipos:** são crimes de **perigo abstrato** e, nas modalidades posse/porte, **permanentes** (a consumação se protrai no tempo — flagrante a qualquer momento, com reflexos na prova e na busca domiciliar). Isso enfraquece teses de "ausência de perigo concreto", mas **não** imuniza a acusação contra atipicidade material, desclassificação e ilicitude da prova.

## O instituto e a base legal — mapa dos arts. 12 a 18

| Art. | Crime | Conduta nuclear | Pena | Notas defensivas |
|---|---|---|---|---|
| **12** | Posse irregular de arma de uso permitido | Possuir/manter sob guarda **no interior da residência ou local de trabalho** (sendo o titular/responsável) | Detenção 1-3 anos + multa | Cabe **ANPP** e **suspensão condicional do processo**; tese do registro vencido (abaixo) |
| **13** | Omissão de cautela | Deixar de impedir que menor de 18 ou pessoa com deficiência mental se apodere da arma | Detenção 1-2 anos + multa | Menor potencial ofensivo → **JECrim** (transação penal; a composição civil não extingue a punibilidade — ação pública incondicionada) |
| **14** | Porte ilegal de arma de uso permitido | Portar, deter, transportar, ceder, fornecer etc. **fora** de casa/trabalho, sem autorização | Reclusão 2-4 anos + multa | **Afiançável** — o STF derrubou a inafiançabilidade do parágrafo único na notória **ADI 3112**; cabe ANPP |
| **15** | Disparo de arma de fogo | Disparar em lugar habitado/adjacências ou via pública, **desde que a conduta não tenha como finalidade a prática de outro crime** | Reclusão 2-4 anos + multa | **Subsidiariedade expressa**; disparo absorve o porte do mesmo contexto |
| **16** | Posse/porte de uso restrito + equiparados (§1º) | Uso restrito; e as equiparadas: **numeração suprimida** (§1º, IV), arma modificada, artefato, munição restrita, venda a menor | Reclusão 3-6 anos + multa (caput e §1º) | §2º (uso **proibido**): pena maior (reclusão 4-12 anos, Lei 13.964/2019) e **hediondo** — conferir redação vigente via `lei-e-sumula` |
| **17** | Comércio ilegal | Adquirir/vender/expor à venda no exercício de atividade comercial | Reclusão elevada pelo Pacote Anticrime — conferir via `lei-e-sumula` | **Hediondo** (Lei 8.072, art. 1º, p.ú.) |
| **18** | Tráfico internacional | Importar/exportar sem autorização | Idem — conferir via `lei-e-sumula` | **Hediondo**; competência da **Justiça Federal** |

**Majorantes dos arts. 19 e 20** (munição/acessório e agentes de segurança pública) tiveram a redação alterada pelo Pacote Anticrime — antes de transcrever, confira o texto vigente via agente `lei-e-sumula`.

**Regulamentação móvel:** o Estatuto é norma penal **em branco** — a classificação permitido/restrito/proibido vem de decreto. O marco atual é o **Decreto 11.615/2023** (que reverteu boa parte do regime 2019-2022 e reorganizou o controle de CACs); a defesa vive dessas transições (ver banco de teses). Toda referência a decreto nesta skill é "a confirmar": **cheque a redação vigente via `lei-e-sumula`** antes de citar.

## Metodologia de enquadramento — cinco perguntas antes de redigir

Responda **na ordem**; cada resposta abre ou fecha teses:

| # | Pergunta | O que define | Onde buscar nos autos |
|---|---|---|---|
| 1 | **Onde e como** estava a arma? | Posse (art. 12) × porte (art. 14/16) × disparo (art. 15). Interior de residência/trabalho do titular = **posse**, nunca porte | Auto de prisão em flagrante, auto de apreensão, depoimentos dos policiais |
| 2 | **Qual arma e qual calibre?** | Uso permitido × restrito × **proibido** (só o proibido é hediondo). Calibre reclassificado por decreto abre desclassificação | Laudo pericial; em falta, a própria denúncia — a dúvida favorece o tipo mais brando |
| 3 | **Qual a situação registral?** | Registrada (fato atípico), **registro vencido** (tese de atipicidade na posse), sem registro, CAC com guia de tráfego | SINARM/SIGMA, CRAF, guia de tráfego, documentos do acusado |
| 4 | **A arma funciona?** | Laudo de eficácia: arma **absolutamente inapta** = crime impossível (atipicidade); desmuniciada ≠ inapta | Laudo de eficiência e prestabilidade — exija-o se não estiver nos autos |
| 5 | **De quem era a disponibilidade?** | Autoria e dolo: residência compartilhada e veículo com vários ocupantes exigem **individualização** (ciência + disponibilidade) | Local exato da apreensão, titularidade de documentos, depoimentos, confissão de corréu |

> **Regra de ouro da capitulação:** o MP tende a denunciar pelo tipo mais grave que a descrição comporta (16 em vez de 14; porte em vez de posse). O confronto entre a **narrativa fática da denúncia** e a **capitulação** é o primeiro parágrafo do mérito defensivo.

## Estrutura forense — onde e como apresentar as teses

As teses desta skill se encaixam em três veículos; a moldura completa de cada peça está na skill própria — aqui vai **o que muda** nos crimes de arma:

**1. Resposta à acusação (CPP 396-A)** — prazo de **10 dias** da citação (CPP 396), contagem processual penal do CPP 798, §1º (exclui o dia do começo, inclui o do vencimento; prazo contínuo e peremptório) — **em dobro para a Defensoria Pública** (LC 80/94). Pedir **absolvição sumária** (CPP 397, III — fato atípico) nas teses de atipicidade documentais: registro vencido comprovado, abolitio criminis temporária, arma absolutamente inapta com laudo já juntado, CAC em trânsito autorizado. Arguir desde já a **ilicitude da prova** (busca domiciliar sem mandado e sem fundadas razões prévias) — não preclui, mas quanto antes, maior o efeito. Requerer o **laudo de eficácia** se ausente.

**2. Memoriais / alegações finais (skill `memoriais`)** — o veículo da **desclassificação** (16→14, 14→12) e da absolvição por fragilidade probatória: palavra isolada dos policiais sobre o local da apreensão (dentro × fora de casa define posse × porte), ausência de laudo, dúvida sobre a classificação do calibre. Cumular em ordem sucessiva: absolvição → desclassificação → dosimetria mínima (agente `dosimetria-pena`).

**3. Habeas corpus (skill `habeas-corpus`)** — para **trancamento** por atipicidade manifesta (registro vencido, abolitio temporária, inaptidão absoluta documentada) e para atacar prisão fundada em capitulação inflada (16 "hediondo" quando a arma é de uso restrito, não proibido). Combine com `liberdade-provisoria-relaxamento` quando houver custódia.

```
BLOCO-PADRÃO DA TESE DE ARMA (adaptar ao veículo):

I — DO ENQUADRAMENTO CORRETO
   Confronto narrativa × capitulação: [local da apreensão → posse, não porte];
   [classificação real do calibre → art. 14/12, não 16]; [restrito ≠ proibido →
   afastada a hediondez do §2º].

II — DA ATIPICIDADE (a que couber, em ordem de força)
   [registro vencido = irregularidade administrativa (posse)];
   [abolitio criminis temporária — Súmula 513/STJ e janelas legais];
   [inaptidão absoluta da arma — laudo de eficácia — crime impossível];
   [CAC em porte de trânsito autorizado — guia de tráfego anexa].

III — SUBSIDIARIAMENTE — DESCLASSIFICAÇÃO E CONSEQUÊNCIAS
   Desclassificação [16→14/12]; reflexos: pena, regime, afastamento de
   hediondez, cabimento de ANPP/suspensão condicional (justiça negocial).

IV — DA PROVA
   Ilicitude da busca; exigência do laudo; palavra isolada dos policiais.
```

## Banco de teses defensivas

- **Registro vencido = mera irregularidade administrativa (posse — art. 12).** Entendimento consolidado no STJ: quem **possui em casa** arma registrada com **CRAF vencido** comete infração administrativa, não crime — a arma já passou pelo controle estatal; a omissão é de renovação. **Limite da tese:** não se estende pacificamente ao **porte** (art. 14) nem à arma jamais registrada — para o estado atual dessa fronteira, pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] o que não confirmar.
- **Abolitio criminis temporária (Súmula 513/STJ).** As janelas de entrega/regularização dos arts. 30-32 da Lei 10.826 (e prorrogações) tornaram **atípica a posse** em períodos determinados; a Súmula 513/STJ fixa o alcance para arma com numeração raspada até 23/10/2005. Vale para **posse**, não para porte. Fatos antigos reabertos (desmembramentos, prescrição interrompida) ainda a atraem — confira as datas exatas das prorrogações via `lei-e-sumula`.
- **Entrega espontânea (art. 32) — atipicidade na posse.** A redação dada pela Lei 11.706/2008 ao art. 32 da Lei 10.826 permite a entrega espontânea da arma **sem prazo final** (diferente das janelas temporárias dos arts. 30-31), e há reconhecimento de atipicidade da posse quando comprovada a boa-fé de quem detinha a arma para entregá-la. O alcance exato (inclusive para quem é flagrado no trajeto da entrega) é casuístico: confira a redação vigente via `lei-e-sumula` e o estado da jurisprudência via `jurisprudencia-stj-stf`; marque [NÃO VERIFICADO] o que não confirmar.
- **Erro de tipo (CP 20).** Os crimes do Estatuto **não têm modalidade culposa**: o erro sobre elementar do tipo exclui o dolo e torna o fato atípico — herdeiro/viúva que guarda a arma do falecido supondo situação regular, ou quem ignora a natureza restrita do calibre. Tese probatória e casuística; não confunda com o **erro de proibição** (CP 21), subsidiário e de efeito menor (isenção ou redução de pena).
- **Arma absolutamente inapta = crime impossível.** Se o **laudo de eficácia** atesta inaptidão total para o disparo, não há objeto material idôneo — atipicidade. **Não confunda:** arma **desmuniciada** é conduta típica na jurisprudência consolidada (perigo abstrato); arma **desmontada** com peças aptas tende a ser típica. A tese forte é a **inaptidão absoluta pericial** — as demais, use como reforço de dosimetria, não como pedido principal.
- **Desclassificação por reclassificação de calibre (16→14/12).** Decretos de 2019 tornaram de **uso permitido** calibres antes restritos (ex.: 9mm, .40) — quem respondia pelo art. 16 passou a amoldar-se ao 14/12, com debate sobre **retroatividade benéfica** da norma integradora e sobre os efeitos da reversão pelo Decreto 11.615/2023 para fatos do interregno. Tese viva e sensível a datas: **pesquise o estado atual via `jurisprudencia-stj-stf` e confira os decretos via `lei-e-sumula`; marque [NÃO VERIFICADO] o que não confirmar.**
- **Uso restrito ≠ uso proibido — hediondez contida.** O Pacote Anticrime tornou hediondo o art. 16 **§2º** (arma de uso **proibido**), não o caput (uso restrito). Denúncia/sentença que trata arma de uso restrito como hedionda infla regime, progressão e temporais da execução — ataque por HC ou nos memoriais. Confira a redação vigente da Lei 8.072, art. 1º, p.ú., via `lei-e-sumula`.
- **Crime único na pluralidade de armas/munições.** Apreensão de várias armas ou munições **no mesmo contexto fático** tende a configurar crime único (não concurso); a controvérsia está na mistura de calibres permitidos e restritos (um ou dois crimes?). Pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Munição ínfima desacompanhada de arma.** Há precedentes reconhecendo **atipicidade material** (ausência de lesividade) na posse de pequena quantidade de munição sem arma apta — tese excepcional, casuística: pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]; nunca a apresente como consolidada.
- **CAC em porte de trânsito (Decreto 11.615/2023).** Colecionador, atirador e caçador com **CR válido** transportando arma **desmuniciada** e munição acondicionada em separado, no trajeto autorizado e com **guia de tráfego**, exerce atividade regular — fato atípico. O Decreto 11.615/2023 alterou órgão de registro, validades e regras de transporte do regime anterior: confira ponto a ponto via `lei-e-sumula` antes de afirmar a regularidade, e junte CR + guia + comprovação do trajeto. Divergências sobre guia vencida/trajeto desviado = **erro de proibição** subsidiário (regime em transição).
- **Autoria na arma achada em residência compartilhada.** A posse exige **ciência e disponibilidade** sobre a arma — a responsabilidade penal é subjetiva; denúncia que imputa o art. 12 a todos os moradores pela mera localização do objeto na casa é genérica (combine com a skill `inepcia-denuncia-generica`). O campo de batalha probatório é a individualização (quarto, cofre, titularidade de documento, confissão de um dos moradores) — o mesmo raciocínio vale para o **porte compartilhado** em veículo com vários ocupantes. Estado da jurisprudência via `jurisprudencia-stj-stf`; marque [NÃO VERIFICADO] o que não confirmar.
- **Ilicitude da busca domiciliar.** Posse é crime permanente — o flagrante autoriza o ingresso —, mas a jurisprudência exige **fundadas razões prévias e demonstráveis** para a entrada sem mandado; denúncia anônima isolada não basta. Prova ilícita derruba a materialidade inteira. Estado da arte via `jurisprudencia-stj-stf` (pesquise e marque [NÃO VERIFICADO] o não confirmado).
- **Consunção.** O **disparo (art. 15) absorve o porte** do mesmo contexto (subsidiariedade expressa: "desde que essa conduta não tenha como finalidade a prática de outro crime"); porte usado exclusivamente como meio de crime mais grave tende à absorção. Em concurso com **tráfico de drogas**, atenção: a arma a serviço do tráfico pode virar **majorante da Lei 11.343 (art. 40, IV)** em vez de crime autônomo — o que for melhor ao réu deve ser calculado caso a caso (agente `dosimetria-pena`).
- **Justiça negocial.** Arts. 12, 13 e 14 comportam **ANPP** (pena mínima inferior a 4 anos, sem violência ou grave ameaça — CPP 28-A); os arts. 12 e 13 comportam também **suspensão condicional do processo** (mínima de 1 ano — Lei 9.099, art. 89); o art. 13 é do JECrim. No art. 16, o caput (mínima de 3 anos) admite ANPP em tese; o §2º (mínima de 4 anos, hediondo) não — mais um dividendo prático da desclassificação.

## Erros comuns e pegadinhas

- **Pedir desclassificação de numeração raspada.** Arma de uso permitido com **numeração suprimida** é art. 16, **§1º, IV** — equiparada por lei; não desclassifica para o 14 por ser calibre permitido. Não desperdice a peça: nesse cenário, as teses são outras (prova da supressão, laudo, dosimetria).
- **Tratar como posse a arma do empregado no trabalho.** O art. 12 exige que o agente seja **titular ou responsável legal** do estabelecimento; empregado ou terceiro com arma no local de trabalho responde por **porte (art. 14)** na leitura dominante. O inverso também vale: não aceite a capitulação em porte quando o cliente é o dono do estabelecimento.
- **Gastar tese com o que nem é arma de fogo.** **Simulacro/arma de brinquedo** não é arma de fogo — fato **atípico** no Estatuto (pode repercutir em outros crimes, como o roubo, mas não gera crime autônomo de porte). **Arma branca** tampouco é Estatuto — a discussão é a contravenção do art. 19 da LCP, com controvérsia própria: pesquise via `jurisprudencia-stj-stf` antes de afirmar tipicidade. Armas de pressão/airsoft têm regime regulamentar próprio — confira via `lei-e-sumula` antes de qualquer conclusão [NÃO VERIFICADO].
- **Confundir restrito com proibido.** Só o **proibido** (§2º) é hediondo. Aceitar a etiqueta "hediondo" para arma de uso restrito custa regime e execução — confira a classificação no decreto vigente antes de conceder o ponto.
- **Chamar de "posse" a arma no carro.** Veículo não é residência nem local de trabalho do titular — arma no automóvel configura **porte/transporte** (art. 14/16) na leitura dominante; sustentar art. 12 nesse cenário queima credibilidade. A exceção discutida (veículo como local de trabalho do profissional) é tese em disputa: pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Sustentar atipicidade da arma desmuniciada.** Tese consolidadamente rejeitada (perigo abstrato). Usá-la como pedido principal queima credibilidade; desloque o argumento para a dosimetria (menor reprovabilidade) ou para a desnecessidade de prisão cautelar.
- **Invocar insignificância.** Em regra **rejeitada** nos crimes de arma (bem jurídico: incolumidade pública). A exceção casuística é a munição ínfima sem arma — e mesmo essa exige pesquisa atual, nunca citação de memória.
- **Esticar o registro vencido para o porte.** A atipicidade consolidada é da **posse** (art. 12). Transportar arma com registro vencido fora de casa continua porte ilegal na jurisprudência dominante — trate a extensão como tese em disputa, com pesquisa e [NÃO VERIFICADO].
- **Perder a arma para a destruição.** Após o laudo, a arma que não interessa mais à persecução vai ao Comando do Exército para destruição/doação (Lei 10.826, art. 25). Cliente com registro regular (ou CAC) que quer o bem de volta precisa do pedido de restituição **antes** do encaminhamento — rito, tripé e pegadinhas na skill `restituicao-coisas-apreendidas`; arma cujo porte seja em si ilícito não se restitui (CP 91, II, *a*).
- **Esquecer a fiança na delegacia.** O porte do art. 14 é **afiançável** (a inafiançabilidade do parágrafo único foi derrubada pelo STF na ADI 3112, julgado notório) — a fiança arbitrada pelo delegado (pena máxima ≤ 4 anos, CPP 322) evita a noite no sistema. Se o delegado recusar, o pedido ao juiz acompanha a peça de soltura (`liberdade-provisoria-relaxamento`).
- **Deixar a ilicitude da busca para a apelação.** A tese nasce documentada (ou não nasce): consigne em audiência de custódia, argua na resposta à acusação e reforce nos memoriais — a versão dos policiais sobre as "fundadas razões" se cristaliza cedo.
- **Endereçamento e competência.** Art. 13 → JECrim; art. 18 (tráfico internacional) → **Justiça Federal**; conexão com crime doloso contra a vida → júri arrasta o crime de arma. Errar o juízo na denúncia é tese; errar na defesa é prazo perdido.
- **Aceitar a denúncia sem laudo.** Sem laudo de eficácia, exija-o; a condenação sem prova da potencialidade lesiva é atacável, mas o entendimento sobre a **imprescindibilidade** da perícia oscila por cenário (arma apreendida × não apreendida) — pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Aceitar ANPP antes de atacar a capitulação.** O ANPP exige **confissão formal e circunstanciada** (CPP 28-A) — confessar um art. 16 desclassificável para 14/12 trava a tese e piora as condições do acordo. Primeiro o enquadramento, depois a negociação; a desclassificação muda a moldura do acordo (e pode abrir sursis processual ou JECrim).
- **Aferir a abolitio pela data errada.** A abolitio criminis temporária e a reclassificação de calibres se aferem pela **data do fato** (teoria da atividade — CP, art. 4º), não pela data da denúncia ou da sentença; em crime permanente, pela **cessação da permanência**. Reconstitua a linha do tempo antes de invocar ou descartar a tese.
- **Citar decreto revogado.** O regime 2019-2022 foi profundamente alterado pelo Decreto 11.615/2023 e atos posteriores. **Nenhuma transcrição de decreto sem conferência via `lei-e-sumula`** — a regulamentação de armas é o terreno mais móvel do direito penal brasileiro.

## Checklist antes de protocolar

- [ ] **Prazo** conferido (resposta à acusação: 10 dias, CPP 396; contagem do CPP 798, §1º; Defensoria em dobro)?
- [ ] **Objeto** conferido: é mesmo arma de fogo (não simulacro, arma branca ou artefato de regime próprio)?
- [ ] **Enquadramento** conferido pelas 5 perguntas (conduta × classificação × registro × eficácia × autoria)?
- [ ] Situação registral **documentada** (extrato SINARM/SIGMA, CRAF) — requisitada se ausente dos autos?
- [ ] Capitulação da denúncia **confrontada** com a narrativa fática?
- [ ] **Laudo de eficácia** nos autos (ou requerido)?
- [ ] Classificação do calibre conferida no **decreto vigente** (via `lei-e-sumula`)?
- [ ] Hediondez só admitida para uso **proibido** (§2º)?
- [ ] Teses cumuladas **em ordem sucessiva** (atipicidade → desclassificação → dosimetria/negocial)?
- [ ] Ilicitude da busca arguida **no primeiro veículo disponível**?
- [ ] CAC: CR, guia de tráfego e trajeto **documentados** em anexo?
- [ ] Restituição da arma avaliada **antes** da destinação do art. 25 (`restituicao-coisas-apreendidas`)?
- [ ] Precedentes **verificados** (Citation Gate) — nada de memória; o não confirmado saiu ou está [NÃO VERIFICADO]?

## Apoie-se em

- **Skill `restituicao-coisas-apreendidas`** — devolução da arma/acervo CAC apreendido (CPP 118-124) e a corrida contra a destruição do art. 25; esta skill cuida da tipicidade, aquela do bem.
- **Skill `memoriais`** — moldura completa das alegações finais onde vivem a desclassificação e a absolvição probatória.
- **Skill `habeas-corpus`** — trancamento por atipicidade manifesta e ataque à capitulação inflada com reflexo na prisão.
- **Agente `lei-e-sumula`** — redação vigente da Lei 10.826 (arts. 17-20 pós-Anticrime), Lei 8.072 (hediondez), Decreto 11.615/2023 e janelas da abolitio temporária.
- **Agente `jurisprudencia-stj-stf`** — estado atual das teses vivas: registro vencido no porte, retroatividade da reclassificação de calibres, crime único, munição ínfima, fundadas razões na busca domiciliar.
- **Agente `verificador-citacoes`** — Citation Gate obrigatório: nenhum julgado citado de memória; o que não for confirmado sai da peça ou recebe [NÃO VERIFICADO].
- **Agente `dosimetria-pena`** — reflexos da desclassificação e das majorantes dos arts. 19-20 na pena, no regime e no cabimento da justiça negocial.
- **Skill `redacao-persuasiva-criminal`** — padrão de redação de toda peça: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
