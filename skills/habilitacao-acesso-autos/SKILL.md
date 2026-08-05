---
name: habilitacao-acesso-autos
description: >-
  Use na rotina de ENTRADA do advogado no caso criminal — habilitação nos autos com juntada de
  procuração, lavratura de procuração criminal (inclusive com PODERES ESPECIAIS do art. 44 do CPP
  para queixa-crime, renúncia, perdão, retratação e acordos), substabelecimento com ou sem reservas,
  pedido de vista/carga/cópias e acesso a inquérito ou autos sigilosos (art. 7º do EAOAB — Lei
  8.906/94; Lei 13.245/2016; Súmula Vinculante… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, escritorio]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-habilitacao-acesso-autos"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["habilitacao-acesso-autos", "habilitacao acesso", "acesso autos"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Habilitação e Acesso aos Autos (entrada do advogado no caso)

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

Esta skill orienta a **rotina de entrada do advogado no processo ou investigação criminal**: lavrar a procuração correta (com ou sem poderes especiais), habilitar-se nos autos, substabelecer, pedir vista/carga/cópias e obter acesso a inquérito — inclusive sigiloso. É o primeiro ato de quase todo caso e o pedido mais recorrente do **plantão** (flagrante à noite/fim de semana). Para o aprofundamento do acesso à investigação (SV 14, restrições, reclamação constitucional), ver a skill **acesso-autos-investigacao**.

> **Lição central:** procuração errada é vício que **contamina tudo o que vem depois** — queixa-crime com procuração *ad judicia* genérica, exceção de suspeição sem poderes especiais ou substabelecimento sem reservas mal calculado geram rejeição, preclusão e até decadência. **Lavre o instrumento certo ANTES de redigir a peça.**

> **Princípio reitor (ampla defesa — CF, art. 5º, LV, e prerrogativas do advogado — Lei 8.906/94, art. 7º):** o acesso do defensor aos autos é condição de possibilidade da defesa. Negá-lo indevidamente configura **abuso de autoridade** (Lei 13.869/2019, art. 32) e **responsabilização criminal e funcional** do responsável, sem prejuízo do direito de requerer o acesso ao juiz competente (EAOAB, art. 7º, §12); a **nulidade** dos atos praticados sem esse acesso é tese defensiva a sustentar (ampla defesa + SV 14).

## Mapa — qual instrumento/pedido cabe em cada situação

| Situação concreta | Instrumento/pedido correto | Base legal |
|---|---|---|
| Cliente contratou; processo em curso | **Procuração *ad judicia* + petição de habilitação** | CPC 105 c/c CPP 3º; CPP 370, §1º |
| Réu indica o advogado no interrogatório/audiência | **Procuração *apud acta*** (dispensa instrumento) | CPP 266 |
| Vai oferecer **queixa-crime** | Procuração com **poderes especiais** (nome do querelante + menção ao fato criminoso) | CPP 44 — ver skill **queixa-crime** |
| Renúncia expressa ao direito de queixa / aceitação de perdão | Procurador com **poderes especiais** | CPP 50, 55 e 59 |
| **Exceção de suspeição** do juiz | Petição assinada pela **própria parte** ou procurador com **poderes especiais** | CPP 98 |
| **Arguição de falsidade** documental | Procurador com **poderes especiais** | CPP 146 |
| **ANPP** e acordos | Acordo firmado pelo MP, pelo **próprio investigado** e pelo defensor | CPP 28-A, §3º |
| Advogado transfere o caso mantendo-se nele | **Substabelecimento COM reservas** | CC 667; CED-OAB, art. 26 |
| Advogado sai do caso transferindo-o | **Substabelecimento SEM reservas** (ou renúncia) | EAOAB 5º, §3º; CED-OAB 26 |
| Examinar autos **sem procuração** (sem sigilo) | Direito de exame direto, físico ou eletrônico | EAOAB 7º, XIII (Lei 13.793/2019) |
| Examinar **inquérito/APF**, mesmo sem procuração | Direito de acesso aos elementos **já documentados** | EAOAB 7º, XIV (Lei 13.245/2016); SV 14 |
| Autos sob **sigilo** | Acesso mediante **procuração** | EAOAB 7º, §10 — ver skill **acesso-autos-investigacao** |
| Vista fora do cartório / **carga** | Retirada pelos prazos legais | EAOAB 7º, XV (exceções no §1º) |
| Autos **findos**, mesmo sem procuração | Carga por **10 dias** | EAOAB 7º, XVI |
| Negativa de acesso pela autoridade | Representação por **abuso de autoridade** + tese de nulidade; SV 14 → **Reclamação ao STF** | Lei 13.869/2019, art. 32; EAOAB 7º, §12 |

## A procuração criminal

### Ad judicia (regra) e cláusulas específicas

A procuração geral para o foro (**cláusula *ad judicia***) habilita a praticar **todos os atos ordinários do processo** (CPC 105, aplicável por força do art. 3º do CPP). Exigem **cláusula específica/poderes especiais**, entre outros: transigir, desistir, renunciar, receber e dar quitação, firmar compromisso e **assinar declaração de hipossuficiência** (relevante para justiça gratuita do cliente).

**Boas práticas na lavratura criminal:**
- Qualificação completa do outorgante (RG, CPF, endereço — facilita a habilitação e o alvará futuro).
- Finalidade indicada ("para defesa nos autos nº X" ou "na investigação Y") — **obrigatória** nos poderes especiais do CPP 44 (menção ao fato criminoso); nos autos sigilosos o §10 do EAOAB 7º exige a **procuração**, e indicar a finalidade evita impugnação ao acesso.
- Se o outorgante estiver **preso**, a procuração pode ser colhida no estabelecimento prisional (direito de entrevista pessoal e reservada — EAOAB 7º, III); no plantão, a jurisprudência aceita a atuação urgente com juntada posterior — mas **regularize imediatamente**.
- **Familiar não outorga pela pessoa presa** (salvo mandato próprio ou situações excepcionais): quem constitui o defensor é o próprio acusado; o familiar contrata, mas a procuração é do preso.

### Poderes especiais (o quadro que mais derruba peça)

| Ato | O que a procuração deve conter | Base |
|---|---|---|
| Oferecer **queixa-crime** | Poderes especiais + **nome do querelante** + **menção ao fato criminoso** | CPP 44 |
| **Renúncia expressa** ao direito de queixa | Poderes especiais | CPP 50 |
| **Aceitar perdão** do ofendido | Poderes especiais | CPP 55 e 59 |
| **Exceção de suspeição** | Poderes especiais (ou assinatura da própria parte) | CPP 98 |
| **Arguição de falsidade** | Poderes especiais | CPP 146 |
| **Retratação da representação** | Prudência recomenda poderes especiais expressos — confira o entendimento atual via agente **lei-e-sumula** antes de dispensar | CPP 25 (analogia c/ 44) |
| **ANPP / colaboração** | Assinatura do **próprio investigado** + defensor (procuração não substitui) | CPP 28-A, §3º; Lei 12.850/2013, art. 6º |

> Os requisitos do CPP 44 **aplicados à peça acusatória privada** (preâmbulo, tempestividade, decadência) estão detalhados na skill **queixa-crime** — não duplique: aqui o foco é **lavrar** o instrumento; lá, **usá-lo**.

## Substabelecimento

- **COM reservas de poderes:** o substabelecente **permanece** no feito; o substabelecido atua em conjunto ou em atos determinados (audiência, carga, sustentação). É a regra da colaboração entre escritórios/correspondentes. Honorários do substabelecido dependem da intervenção do substabelecente (EAOAB, art. 26).
- **SEM reservas:** o substabelecente **sai** do processo — equivale à transferência do mandato. Pelo Código de Ética (CED-OAB, art. 26), exige **prévio e inequívoco conhecimento do cliente**.
- **Renúncia ao mandato** (alternativa à saída): o advogado continua representando o cliente pelos **10 dias seguintes à notificação** da renúncia, salvo substituição antes disso (EAOAB, art. 5º, §3º). Em processo criminal com réu preso, **não abandone**: peticione comunicando a renúncia e requeira a intimação do réu para constituir novo defensor, sob pena de nomeação de defensor dativo (CPP 263).
- O substabelecimento **acompanha os limites da procuração**: quem não tem poderes especiais **não os transmite**. Substabelecimento para queixa-crime exige que a cadeia inteira contenha os requisitos do CPP 44.

## Estrutura da petição de habilitação

Peça simples, dirigida ao **juízo onde tramita o feito** (ou à **autoridade policial**, se inquérito na delegacia; ou ao **juízo de custódia/plantão**, se flagrante). Em autos eletrônicos, a habilitação é feita pelo peticionamento de "habilitação de advogado" no sistema (PJe/eproc/ESAJ) **com a mesma petição** anexa.

```
AO JUÍZO DA [N]ª VARA CRIMINAL DA COMARCA DE [COMARCA] — [UF]
[se inquérito na delegacia: À AUTORIDADE POLICIAL — DELEGADO(A) DE POLÍCIA DA
 [N]ª DP DE (...); se flagrante no plantão: AO JUÍZO DE PLANTÃO / DE CUSTÓDIA]

Autos nº [Nº DO PROCESSO / INQUÉRITO / APF]

[NOME DO(A) ADVOGADO(A)], inscrito(a) na OAB/[UF] sob o nº [N], com escritório
em [ENDEREÇO], vem, respeitosamente, informar que foi constituído(a) por
[NOME DO CLIENTE], [réu/investigado/vítima] nos autos em epígrafe, conforme
instrumento de procuração anexo [ou: substabelecimento anexo], requerendo:

a) a sua HABILITAÇÃO nos autos, com a anotação no sistema/na capa;

b) que TODAS as intimações e publicações sejam feitas EXCLUSIVAMENTE em nome
   do(a) subscritor(a), OAB/[UF] nº [N], sob pena de nulidade
   (CPP, art. 370, §1º; CPC, art. 272, §§2º e 5º, c/c CPP, art. 3º);

c) VISTA dos autos [acesso integral eletrônico / carga pelos prazos legais —
   EAOAB, art. 7º, XIII, XV] e, tratando-se de autos físicos, a extração de
   CÓPIAS [inclusive de mídias: interceptações, câmeras, laudos];

d) [se inquérito/APF] o ACESSO AMPLO aos elementos de prova JÁ DOCUMENTADOS
   (EAOAB, art. 7º, XIV; Súmula Vinculante 14), inclusive em meio digital;

e) [se sigilo decretado] o acesso mediante a procuração anexa (EAOAB, art. 7º,
   §10) — ver skill acesso-autos-investigacao para o pedido aprofundado.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração (ou substabelecimento com a procuração da cadeia); se sigilo, procuração com finalidade indicada; carteira OAB dispensável em regra, mas exigida por alguns sistemas no primeiro cadastro.

### Variante de plantão (flagrante) — o pedido recorrentíssimo

No flagrante, o tempo é o inimigo: o APF vai ao juiz em **24h** (CPP 306, §1º) e a audiência de custódia ocorre em **24h** (CPP 310 — termo inicial da contagem e roteiro de atuação no ato: ver skill **audiencia-de-custodia**). Rotina mínima:

1. **Na delegacia:** requerer verbalmente e por escrito o acesso ao APF e a entrevista reservada com o preso (EAOAB 7º, III e XIV). Negativa → invocar Lei 13.869/2019, art. 32, e certidão da recusa.
2. **Habilitar-se no sistema** do juízo de custódia assim que o APF for distribuído — sem habilitação, o advogado não é intimado da audiência.
3. Colher **procuração** (do preso; se impossível antes da custódia, atuar como defensor e regularizar).
4. Preparar desde já o pedido de soltura — ver skill **liberdade-provisoria-relaxamento** (relaxamento/liberdade provisória/cautelares).

## Vista, carga e cópias (EAOAB, art. 7º)

- **XIII** — examinar autos **sem procuração**, físicos ou **eletrônicos** (redação da Lei 13.793/2019), salvo sigilo.
- **XIV** — examinar autos de **investigação de qualquer natureza** (inquérito, PIC do MP; sobre o alcance exato em CPIs e procedimentos administrativos, ver skill **acesso-autos-investigacao**), findos ou em andamento, **mesmo sem procuração**, quanto aos elementos **já documentados** (redação da Lei 13.245/2016); podendo copiar e tomar apontamentos, inclusive em meio digital.
- **XV** — **vista fora do cartório/carga** pelos prazos legais. Exceções do **§1º**: segredo de justiça, documentos originais de difícil restauração ou circunstância relevante reconhecida em despacho motivado.
- **XVI** — autos **findos**: carga por **10 dias**, mesmo sem procuração.
- **§10** — autos sob **sigilo**: exige **procuração**.
- **§11** — a autoridade pode delimitar o acesso quanto às **diligências em andamento e ainda não documentadas**, quando o acesso puder comprometer sua eficácia — é o limite da SV 14 ("já documentados"); o enfrentamento dessa restrição é objeto da skill **acesso-autos-investigacao**.
- **§12** — negativa, fornecimento incompleto ou retirada de peças já incluídas → **responsabilização criminal e funcional por abuso de autoridade**, sem prejuízo do direito de requerer o acesso ao juiz competente; a **nulidade** dos elementos colhidos em prejuízo da defesa é tese construída sobre a SV 14 e a ampla defesa, não texto do §12.

> **Carga com prazo comum às partes:** autos físicos só saem em conjunto ou por prévio ajuste (CPC 107, §2º, c/c CPP 3º); sem ajuste, cabe a **carga rápida** — retirada por 2 a 6 horas, só para cópias, independentemente de ajuste (CPC 107, §3º). Devolução retardada gera sanções processuais e disciplinares e a perda da carga rápida no processo (CPC 107, §4º) — nunca segure autos além do prazo.

## Teses típicas da prática

- **Publicação em nome de advogado errado é nula** quando houve pedido expresso de intimação exclusiva (CPC 272, §§2º e 5º, c/c CPP 3º; CPP 370, §1º) — tese de restituição de prazo. Para o precedente atual, pesquise via agente **jurisprudencia-stj-stf** e verifique com **verificador-citacoes**; marque [NÃO VERIFICADO] o que não confirmar.
- **Negativa de acesso ao APF/inquérito documentado viola a SV 14** — cabe **Reclamação diretamente ao STF**, além da responsabilização do agente (EAOAB 7º, §12), da representação por abuso (Lei 13.869/2019, art. 32) e da tese de nulidade do que foi colhido sem defesa. Detalhamento na skill **acesso-autos-investigacao**.
- **Vício de procuração na queixa é sanável (CPP 568), mas só dentro do prazo decadencial** — a ratificação tardia não salva a queixa da decadência (CPP 38). Confirme o entendimento atual via agente **jurisprudencia-stj-stf** + **verificador-citacoes** antes de citar julgado.
- **HC dispensa procuração** (CPP 654 — qualquer pessoa pode impetrar): no plantão, se a procuração ainda não veio, o HC é a via que não espera o instrumento.
- **Defensor constituído *apud acta*** (CPP 266) vale como constituição plena — útil quando o réu preso indica o advogado em audiência.

## Erros comuns e pegadinhas

- **Procuração *ad judicia* genérica para queixa-crime** → falta de pressuposto (CPP 44); se a decadência consumar antes de sanar, o caso morre. *Lavre com poderes especiais + nome do querelante + menção ao fato desde o primeiro dia.*
- **Substabelecer poderes que não se tem** — a cadeia transmite apenas o que a procuração original contém.
- **Substabelecimento sem reservas sem ciência do cliente** → infração ética (CED-OAB 26).
- **Renunciar e sumir** — o dever persiste por 10 dias (EAOAB 5º, §3º); em réu preso, comunicar o juízo para não caracterizar abandono (multa do CPP 265).
- **Esquecer o pedido de intimação exclusiva** na habilitação → publicações saem em nome do antigo advogado ou do primeiro da lista → prazo perdido sem tese sólida de restituição.
- **Habilitar-se só no papel e não no sistema eletrônico** (PJe/eproc/ESAJ) → o advogado não recebe intimação eletrônica nem enxerga expedientes; a habilitação eletrônica é a que conta na prática.
- **Pedir "vista" quando o que se quer é cópia da mídia** — interceptações, vídeos e laudos em anexo digital exigem pedido específico de **cópia integral das mídias**, sob pena de acesso "amplo" apenas nominal.
- **Confundir sigilo com vedação**: sigilo exige procuração (§10), não elimina o acesso; e a delimitação do §11 só alcança **diligências em andamento**, nunca o que já está documentado (SV 14).
- **Endereçamento errado no inquérito**: pedido de acesso na fase policial vai à **autoridade policial** (ou ao juízo competente, se houver decisão judicial de sigilo); habilitação em processo vai ao **juízo do feito** — trocar os destinatários atrasa o que era urgente.
- **Aceitar procuração assinada por familiar** do preso como se fosse do preso — regularize com instrumento do próprio outorgante no presídio.

## Checklist (antes de protocolar a habilitação)

- [ ] Procuração do **próprio cliente**, com qualificação completa e finalidade indicada?
- [ ] O ato que virá exige **poderes especiais** (CPP 44/50/55/59/98/146)? Estão expressos?
- [ ] Se substabelecimento: **com ou sem reservas** decidido conscientemente? Cliente ciente (CED-OAB 26)? Cadeia de poderes íntegra?
- [ ] Pedido de **intimação exclusiva** em nome do advogado, sob pena de nulidade?
- [ ] Pedido de **vista/carga/cópias** (inclusive **mídias digitais**) formulado?
- [ ] Se inquérito/APF: acesso pela via certa (autoridade policial × juízo) e fundado no **EAOAB 7º, XIV + SV 14**?
- [ ] Se sigilo: procuração anexada (EAOAB 7º, §10)? Aprofundamento → skill **acesso-autos-investigacao**?
- [ ] **Habilitação eletrônica** feita no sistema do tribunal (não só a petição)?
- [ ] Conflito de interesses checado na triagem (CED-OAB, art. 17 — agente **triagem-novo-caso**)?

## Lembretes finais

- **Instrumento antes da peça:** a procuração certa (com os poderes certos) precede qualquer petição — vício aqui contamina tudo.
- **Poderes especiais** são a pegadinha nº 1: queixa (44), renúncia (50), perdão (55/59), suspeição (98), falsidade (146).
- **Substabelecimento com reservas mantém; sem reservas transfere** — e exige ciência do cliente.
- **Intimação exclusiva** é cláusula obrigatória da habilitação — é ela que protege o prazo.
- **Acesso à investigação documentada independe de procuração** (EAOAB 7º, XIV; SV 14); **sigilo exige procuração** (§10); diligências em andamento podem ser delimitadas (§11) — aprofundar na skill **acesso-autos-investigacao**.
- **Negativa de acesso = abuso de autoridade (Lei 13.869/2019, art. 32) + responsabilização do agente (EAOAB 7º, §12); sustente a nulidade do que foi colhido sem defesa** — documente a recusa.
- **No plantão:** acesso ao APF + entrevista reservada + habilitação no sistema + procuração o quanto antes; o HC (CPP 654) não espera procuração.
- **Conferir vigência** de dispositivos e verificar qualquer precedente via **jurisprudencia-stj-stf** + **verificador-citacoes** antes de citar.

## Apoie-se em

- **Agente `onboarding-cliente`** — gera o pacote de entrada do cliente (contrato, procuração, ficha, documentos); esta skill define **qual** procuração esse pacote deve conter.
- **Agente `triagem-novo-caso`** — checagem prévia de conflito de interesses (CED-OAB, art. 17) antes de aceitar o mandato.
- **Skill `queixa-crime`** — aplicação dos requisitos do CPP 44 na petição inicial da ação penal privada (preâmbulo, tempestividade, decadência).
- **Skill `acesso-autos-investigacao`** (desta onda) — aprofundamento da SV 14: limites, diligências em andamento, reclamação constitucional e estratégias na investigação sigilosa.
- **Best-practice `peticao-criminal`** — padrões formais de redação e protocolo das peças.
- **Best-practice `etica-oab-sigilo`** — deveres éticos, sigilo profissional e manejo de dados do cliente (LGPD).
- **Agentes `jurisprudencia-stj-stf` + `verificador-citacoes`** — pesquisa e verificação de todo precedente antes da citação (Citation Gate).
- **Agente `lei-e-sumula`** — conferência de vigência e teor de dispositivos legais e súmulas.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
