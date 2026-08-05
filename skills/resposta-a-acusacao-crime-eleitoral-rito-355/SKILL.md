---
name: resposta-a-acusacao-crime-eleitoral-rito-355
description: >-
  Use ao atuar no RITO ESPECIAL da ação penal eleitoral (arts. 355-364 do Código Eleitoral, Lei
  4.737/65) — oferecimento e recebimento da denúncia, defesa/citação, instrução e aplicação apenas
  SUBSIDIÁRIA do CPP (art. 364 CE): resposta à acusação adaptada ao procedimento eleitoral,
  rejeição/inépcia da denúncia, nulidades próprias do rito, legitimidade do MP Eleitoral e
  articulação com a competência da Justiça Eleitoral… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, peca, rito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-resposta-a-acusacao-crime-eleitoral-rito-355"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["resposta-a-acusacao-crime-eleitoral-rito-355", "resposta acusacao", "eleitoral rito"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Rito e Resposta na Ação Penal Eleitoral (arts. 355-364 do Código Eleitoral — Lei 4.737/65)

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

Esta skill orienta a atuação **defensiva no rito especial da ação penal eleitoral** — o procedimento próprio dos **crimes eleitorais** (Lei 4.737/65, arts. 355-364), distinto do rito comum do CPP. O ponto central é dominar a **sequência procedimental própria** (oferecimento e recebimento da denúncia, defesa, instrução, sentença e recurso) e saber **quando e como o CPP entra apenas de forma subsidiária** (art. 364 CE), sem "importar" para o rito eleitoral fases que ele não tem.

> **Lição central:** o erro que arruína a peça é aplicar o rito comum do CPP (arts. 396 a 405) como se fosse o rito eleitoral. O procedimento dos arts. 355-364 do CE é **especial** — o CPP só supre lacunas (art. 364). **Ancore cada ato no artigo do Código Eleitoral primeiro; só recorra ao CPP para o que o CE silenciar.** Errar a sequência ou o prazo é convite à preclusão e à perda da tese.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 355-364 do Código Eleitoral e das **Resoluções do TSE** que disciplinam o procedimento penal eleitoral no ano do fato/da ação — o TSE regulamenta o rito por resolução, que se atualiza a cada ciclo. Confira também a **competência** (federal/estadual eleitoral, conexão com crime comum) e QUALQUER súmula, tema ou precedente do **TSE/STF/STJ** pela skill `jurisprudencia-stj-stf` **antes** de fundamentar. Na dúvida sobre um número de acórdão ou informativo: omita e ensine a tese pelo dispositivo.

## O que é (e o que não é) esta skill

- **É:** o **mapa procedimental** do processo penal eleitoral e a **resposta defensiva** que nele se encaixa — rejeição da denúncia, preliminares, nulidades do rito, teses de mérito por remissão.
- **Não é:** manual de um tipo penal específico. As **teses de mérito por crime** vivem nas skills próprias: `defesa-corrupcao-eleitoral-299` (art. 299 CE), `defesa-crimes-falsidade-eleitoral` (arts. 348-354 CE), `defesa-propaganda-eleitoral-irregular`. A **competência e conexão** vivem em `competencia-justica-eleitoral-conexao`. O **trancamento por HC** vive em `habeas-corpus-eleitoral-trancamento`.
- **Distinção-chave:** `resposta-preliminar` e `defesa-preliminar-estrategia` operam no **rito comum** (arts. 396-A e 397 do CPP e procedimentos especiais do CPP). **Esta** trata do **rito especial do Código Eleitoral**, em que o CPP é apenas fonte **subsidiária** (art. 364 CE).

## Base legal (o esqueleto do rito)

- **Art. 355, CE** — as infrações penais eleitorais processam-se pelo procedimento dos arts. 355 e seguintes (rito especial eleitoral).
- **Art. 356, CE** — dever de comunicação/representação de crime eleitoral à autoridade competente (notícia do fato).
- **Art. 357, CE** — o **Ministério Público Eleitoral** oferece a **denúncia** no prazo legal a partir do recebimento dos autos do inquérito/peças de informação (ação penal pública). Prevê hipótese de **ação penal subsidiária** em caso de inércia do MP.
- **Art. 358, CE** — a denúncia deve conter os requisitos legais (exposição do fato, qualificação, classificação, rol de testemunhas) — controle de **aptidão da inicial**.
- **Art. 359, CE** — recebida a denúncia, **citação** do réu e marcha do processo (interrogatório/defesa e instrução).
- **Art. 360, CE** — **audiência de instrução**: oitiva de testemunhas de acusação e defesa; produção da prova.
- **Art. 361, CE** — **alegações/diligências** e fase de razões finais.
- **Art. 362, CE** — **recurso**: da sentença cabe **apelação**, no prazo próprio (em regra 10 dias — conferir na redação vigente e nas Resoluções do TSE).
- **Art. 363-364, CE** — disposições finais; **art. 364:** aplicação **subsidiária** do **CPP** naquilo em que o Código Eleitoral for omisso.

> **Nota de leitura:** os artigos acima dão a **espinha dorsal**; a **numeração e os prazos exatos de cada ato** devem ser confirmados na **redação vigente** do CE e nas **Resoluções do TSE** do ciclo, porque há divergência doutrinária sobre a inteireza do rito (ver adiante). **Não decore prazo de cabeça — confira.**

## A sequência procedimental (marcha do rito)

```
1) NOTÍCIA / INQUÉRITO POLICIAL ELEITORAL  → apuração (Polícia Federal, em regra)
2) OFERECIMENTO DA DENÚNCIA (MP Eleitoral) → art. 357 CE
        └─ inércia do MP → ação penal subsidiária (art. 357, §§, CE)
3) CONTROLE DE ADMISSIBILIDADE → recebimento OU rejeição (art. 358/359 CE)
4) CITAÇÃO do réu → art. 359 CE
5) DEFESA / INTERROGATÓRIO → (aqui entra a RESPOSTA defensiva)
6) INSTRUÇÃO → audiência, testemunhas (art. 360 CE)
7) DILIGÊNCIAS + ALEGAÇÕES FINAIS → art. 361 CE
8) SENTENÇA
9) APELAÇÃO → art. 362 CE (prazo próprio — conferir vigência)
```

> **A grande controvérsia — há "resposta à acusação" prévia ao recebimento?** O rito literal do CE (redação original, anos 1960) **não prevê** a fase de resposta à acusação nos moldes dos arts. 396/396-A do CPP (inseridos pela Lei 11.719/2008), nem a absolvição sumária do art. 397 do CPP. Doutrina e jurisprudência divergem sobre **integrar** o rito eleitoral com essas fases modernas do CPP (via art. 364 CE) ou aplicar o rito eleitoral "puro". **Postura prática defensiva:** requerer a **aplicação subsidiária** dos arts. 396-A e 397 do CPP (mais garantista para a defesa) **e**, simultaneamente, apresentar defesa no momento próprio do rito eleitoral — cobrindo os dois cenários e **consignando o requerimento** para não precluir. **Confirme a orientação atual do TSE/TRE de atuação antes de definir a estratégia** (`jurisprudencia-stj-stf`).

## Estrutura da resposta/defesa eleitoral (o que a peça precisa cobrir)

Independentemente do enquadramento (resposta à acusação subsidiária do CPP ou defesa no rito eleitoral), a peça defensiva deve percorrer, nesta ordem lógica:

1. **Endereçamento e competência** — dirigir ao **Juízo Eleitoral competente** (Juiz Eleitoral da zona; TRE nos casos de foro; TSE em foro especial). Aferir se há **conexão com crime comum** que atraia (ou não) a competência eleitoral (Súmula 122/STJ, [NAO VERIFICADO] — conferir alcance atual; ver `competencia-justica-eleitoral-conexao`). A competência eleitoral é **absoluta**; sua violação é nulidade insanável.
2. **Preliminares de admissibilidade (pedir a REJEIÇÃO da denúncia — CPP art. 395 subsidiário, art. 358 CE):**
   - **Inépcia da inicial** (art. 358 CE / art. 395, I, CPP): fato não descrito com todas as circunstâncias, ausência de individualização de conduta em coautoria, imputação genérica.
   - **Falta de pressuposto processual ou condição da ação** (art. 395, II, CPP): ilegitimidade, ausência de representação onde exigida, litispendência/coisa julgada.
   - **Falta de justa causa** (art. 395, III, CPP): ausência de lastro probatório mínimo (inquérito eleitoral vazio; prova ilícita; atipicidade evidente).
3. **Nulidades próprias do rito** (ver seção específica adiante).
4. **Mérito por remissão ao tipo** — atipicidade, ausência de dolo específico eleitoral, excludentes. **Não reescrever a tese de tipo aqui**: remeter à skill do crime (`defesa-corrupcao-eleitoral-299`, `defesa-crimes-falsidade-eleitoral`, `defesa-propaganda-eleitoral-irregular`).
5. **Provas e testemunhas** — arrolar testemunhas de defesa no momento e no número admitidos (conferir na redação vigente/Resolução TSE); requerer diligências.
6. **Pedidos** — rejeição da denúncia; subsidiariamente, aplicação dos arts. 396-A/397 do CPP e, no mérito, absolvição.

## Teses típicas da resposta eleitoral (e contra-teses)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| **Inépcia por imputação genérica** (coautoria sem individualizar conduta) | art. 358 CE + art. 395, I, CPP | descrição suficiente do vínculo e do fim eleitoral |
| **Falta de justa causa** — inquérito eleitoral sem lastro | art. 395, III, CPP (subsidiário) | indícios de autoria e prova da materialidade |
| **Incompetência da Justiça Eleitoral** (fato é crime comum, sem conexão eleitoral) | competência absoluta; ver `competencia-justica-eleitoral-conexao` | conexão eleitoral atrai a competência especializada |
| **Atipicidade / ausência de dolo específico eleitoral** | remissão à skill do tipo (ex.: art. 299 CE) | dolo e fim eleitoral comprovados |
| **Nulidade por inobservância do rito especial** | arts. 355-362 CE | ausência de prejuízo (art. 563 CPP — *pas de nullité sans grief*) |
| **Aplicação garantista do CPP (396-A/397)** | art. 364 CE (integração *in bonam partem*) | rito eleitoral é especial e completo; CPP não se aplica na fase |
| **Prescrição eleitoral** | prazos do CP aplicáveis ao preceito secundário do tipo eleitoral | marco interruptivo válido; prazo não escoou |

> **Prescrição:** os crimes eleitorais não têm prazos prescricionais próprios distintos — aplica-se a **prescrição do Código Penal** (arts. 109 e ss., CP) calculada sobre a pena do tipo eleitoral. Para o cálculo, use o **método** da skill `calculadora-prescricao` (ou `[calculadora a implementar com testes]` se ainda não houver a versão eleitoral); e confira a **tempestividade** de recursos/peças pela `calculadora-tempestividade`. **Não calcule prazo de cabeça** na peça.

## Nulidades próprias do rito eleitoral (fiscalizar)

- **Denúncia oferecida por autoridade sem atribuição eleitoral** — legitimidade do **MP Eleitoral** (o Promotor Eleitoral atua por delegação do MPF na 1ª instância; Procurador Regional Eleitoral no TRE). Denúncia por órgão sem atribuição eleitoral é vício grave.
- **Ausência ou defeito da citação** (art. 359 CE) — cerceamento de defesa.
- **Supressão de fase instrutória** (art. 360 CE) — indeferimento imotivado de testemunhas/diligências da defesa.
- **Incompetência absoluta** — processar crime **comum** na Justiça Eleitoral (ou vice-versa) sem a devida conexão; nulidade insanável desde o recebimento.
- **Prova ilícita** — quebra de cadeia de custódia, interceptação sem autorização judicial eleitoral (ver `cadeia-de-custodia` / skills de prova).
- **Inobservância do procedimento subsidiário** — quando aplicável o CPP (art. 364), o descumprimento de garantia importada (ex.: interrogatório ao final da instrução, art. 400 CPP) também vicia.

> **Nulidade relativa × absoluta.** Vícios de competência absoluta e de legitimidade tendem a ser **absolutos** (independem de prejuízo demonstrado); os demais reclamam **arguição tempestiva** e demonstração de **prejuízo** (art. 563 CPP — *pas de nullité sans grief*). **Argua e consigne sempre no momento próprio** sob pena de preclusão. **Confirme, caso a caso, na jurisprudência atual (TSE/STF), se o vício concreto é tido por absoluto ou relativo** — passe por `jurisprudencia-stj-stf`.

## Legitimidade e ação penal (pontos sensíveis)

- **Ação penal pública incondicionada**, em regra, nos crimes eleitorais — titularidade do **MP Eleitoral** (art. 357 CE).
- **Ação penal subsidiária da pública** (art. 357, §§, CE): admitida diante da **inércia** do MP no prazo legal — controlar o prazo e a legitimidade do querelante subsidiário.
- **Foro por prerrogativa de função** (prefeitos, deputados, etc.): desloca a competência para **TRE/TSE**, alterando o rito e o órgão do MP (Procurador Regional/Procurador-Geral Eleitoral).

## Súmulas e precedentes (todos sob o Citation Gate)

> **NÃO cite de memória.** Ensine a tese e o dispositivo; para números de súmula/acórdão/informativo/tema, confirme em `jurisprudencia-stj-stf` antes de usar.

- **Competência eleitoral × conexão com crime comum** — orientação do **STF** no julgamento sobre a **competência da Justiça Eleitoral para julgar crimes comuns conexos a crimes eleitorais** [NAO VERIFICADO] (INQ/AP — conferir número, ementa e atualidade em `jurisprudencia-stj-stf`; ver `competencia-justica-eleitoral-conexao`).
- **Súmula 122/STJ** [NAO VERIFICADO] — conexão entre crime federal e estadual atrai a Justiça Federal; verificar aplicação analógica/limites no contexto eleitoral antes de citar.
- **Aplicação subsidiária do CPP ao rito eleitoral** — há precedentes de tribunais admitindo a integração garantista (arts. 396-A/397 CPP) [NAO VERIFICADO]; confirmar a posição atual do **TSE/TRE** de atuação antes de sustentar como regra.

**Regra de ouro:** prefira ancorar em **dispositivo do CE + dispositivo do CPP subsidiário** (que são verificáveis com certeza) do que arriscar um número de precedente. Onde precisar do precedente, marque **[NAO VERIFICADO]** e conferência obrigatória.

## Erros comuns / anti-padrões

- **Aplicar o rito comum do CPP como se fosse o eleitoral** — inverter a lógica do art. 364 (o CPP é subsidiário, não principal).
- **Errar o prazo de um ato** por decorá-lo em vez de conferir a redação vigente do CE e a Resolução do TSE do ciclo.
- **Ignorar a controvérsia da resposta à acusação** — não requerer a aplicação garantista dos arts. 396-A/397 CPP e, ao mesmo tempo, não se defender no momento do rito eleitoral (fica-se sem defesa em nenhum dos cenários).
- **Reescrever a tese de tipo penal aqui** em vez de remeter à skill própria (duplicação e risco de incoerência).
- **Não checar a legitimidade do MP Eleitoral** que ofereceu a denúncia (atribuição eleitoral × comum).
- **Confundir competência eleitoral com comum** sem analisar a conexão (competência absoluta — nulidade insanável).
- **Citar precedente eleitoral de memória** — sanção real por jurisprudência inventada; tudo pela `jurisprudencia-stj-stf`.
- **Esquecer a prescrição** — calculável pela pena do tipo (CP, arts. 109 e ss.); usar a calculadora, não a memória.

## Checklist da peça (defesa)

- [ ] Endereçamento ao **Juízo Eleitoral competente** conferido (zona/TRE/TSE conforme foro)?
- [ ] **Competência eleitoral × comum** analisada (há conexão? é absoluta?) — ver `competencia-justica-eleitoral-conexao`?
- [ ] **Legitimidade do MP Eleitoral** que denunciou verificada (atribuição eleitoral)?
- [ ] **Admissibilidade** atacada: inépcia (art. 358 CE / 395, I), condição da ação (395, II), justa causa (395, III)?
- [ ] **Nulidades do rito** (citação, instrução, competência, prova ilícita) fiscalizadas e arguidas no momento próprio?
- [ ] Requerida, subsidiariamente, a **aplicação dos arts. 396-A/397 CPP** (art. 364 CE) e consignada para não precluir?
- [ ] **Mérito por remissão** à skill do tipo penal (299/falsidade/propaganda) — sem reescrever a tese?
- [ ] **Testemunhas** arroladas no número/momento admitidos (redação vigente/Resolução TSE)?
- [ ] **Prescrição** conferida pelo método da `calculadora-prescricao` e **tempestividade** pela `calculadora-tempestividade`?
- [ ] **Prazos e numeração do rito** conferidos na **redação vigente** do CE e nas **Resoluções do TSE** do ciclo?
- [ ] **Toda** súmula/precedente/tese passou pela `jurisprudencia-stj-stf` (números marcados [NAO VERIFICADO] resolvidos)?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Lembretes finais

- **Rito especial primeiro, CPP depois** — o Código Eleitoral rege; o CPP só supre lacunas (art. 364 CE).
- **Confirme prazos e numeração** na redação vigente do CE e nas **Resoluções do TSE** do ciclo — nunca de cabeça.
- **Cubra a controvérsia da resposta à acusação**: requeira a via garantista (396-A/397 CPP) **e** defenda-se no rito eleitoral, consignando tudo.
- **Competência eleitoral é absoluta** — analisar conexão com crime comum é passo obrigatório (`competencia-justica-eleitoral-conexao`).
- **Mérito por remissão** às skills de tipo (299, falsidade, propaganda) — esta skill é o **rito**, não o tipo.
- **Prescrição e tempestividade** pelas calculadoras, não pela memória.
- **Citation Gate inegociável**: nenhum precedente eleitoral citado sem passar por `jurisprudencia-stj-stf`.

## Nota de conformidade

Este material é **rascunho técnico para revisão humana obrigatória** — hipótese de trabalho a confirmar, não peça pronta para protocolo. A responsabilidade pela estratégia, pelas arguições e pelo protocolo é sempre do **advogado** (Estatuto da OAB e CED, art. 2º; Provimento 205/2021 quanto à publicidade). Atuando o **Ministério Público Eleitoral** ou a **Defensoria**, observar CNMP e LC 80/94, respectivamente. **Esta skill é de polo DEFENSIVO** (defesa do acusado no rito eleitoral); o roteador deve confirmar o polo da instituição em `_criminalsquad/_memory/company.md` antes de aplicá-la. Nenhuma súmula, tese ou precedente pode ser citado de memória — tudo passa **obrigatoriamente** pela `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). Na dúvida, **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
