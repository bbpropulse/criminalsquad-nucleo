---
name: gestao-narrativa-caso-midiatico
description: >-
  Use ao definir a estratégia de comunicação e narrativa em caso de repercussão — a coordenação
  entre a defesa técnica nos autos e a exposição pública, protegendo o cliente da condenação
  midiática sem violar sigilo, presunção de inocência ou o Provimento 205/2021 da OAB (CF, art. 5º,
  LVII; EAOAB, art. 7º; CED). Gatilhos: caso midiático, repercussão na imprensa, nota à imprensa, o
  que falar para a mídia, condenação midiática… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, estrategia, etica, comunicacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-gestao-narrativa-caso-midiatico"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["gestao-narrativa-caso-midiatico", "gestao narrativa", "caso midiatico"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Gestão da Narrativa em Caso Midiático (CF, art. 5º, LVII; EAOAB, art. 7º; Provimento OAB 205/2021)

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

Esta skill orienta a **estratégia de comunicação extraprocessual** em casos de repercussão: como coordenar a defesa técnica dentro dos autos com a exposição pública (imprensa, redes, opinião pública) **sem** comprometer a defesa, violar sigilo ou infringir a ética profissional. É a resposta ao problema real de todo caso midiático — a **condenação antecipada pela mídia**, que corrói a presunção de inocência antes de qualquer sentença.

O produto desta skill **não é uma peça processual**. É um **plano de comunicação de crise jurídica**: quem pode falar, o que pode ser dito, com qual autorização, por qual canal, e o que jamais pode ser dito. Serve tanto para a fase pré-processual (inquérito, operação policial, prisão em flagrante) quanto para a instrução e o julgamento.

> **Lição central:** em caso midiático, **o silêncio raramente é neutro** e **a exposição raramente é grátis**. A pergunta certa não é "devo falar?", mas "**qual é o mínimo necessário para conter o dano, dito por quem, com que autorização e sem munição para a acusação?**". Comunicação pública é decisão **estratégica** (pode ajudar ou afundar a tese) e **ética** (Provimento 205/2021 e sigilo) ao mesmo tempo — nunca improvise no calor do plantão.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **Provimento 205/2021 do Conselho Federal da OAB** (publicidade e sigilo na advocacia), do **Código de Ética e Disciplina da OAB (CED)** e do **art. 7º do EAOAB (Lei 8.906/94)**, além da **LGPD (Lei 13.709/2018)**. Regulamentos deontológicos e a jurisprudência sobre publicidade opressiva mudam — confirme via a skill `jurisprudencia-stj-stf` antes de fundamentar qualquer manifestação ou representação.

## Escopo e polo

- **Esta skill é da DEFESA (advocacia criminal).** Pressupõe advogado(a) atuando pelo acusado/investigado. A régua ética é a da advocacia: **EAOAB + CED + Provimento 205/2021**.
- Instituições de **polo acusatório** (MP) e a **Defensoria** têm regimes próprios de comunicação (CNMP; LC 80/94) — o chefe-roteador deve **conferir o polo do usuário** no `company.md` antes de aplicar o roteiro deontológico aqui descrito. As **técnicas** de gestão de narrativa (mapear públicos, conter dano, checklist de crise) são transponíveis; a **régua ética**, não.

## Base legal e deontológica (âncoras)

- **CF, art. 5º, LVII** — presunção de inocência (não culpabilidade): ninguém será considerado culpado antes do trânsito em julgado. É o valor que a **condenação midiática** viola.
- **CF, art. 5º, IX, XIV e art. 220** — liberdade de expressão e de imprensa (o contrapeso: a defesa não pode censurar a imprensa; move-se **dentro** da liberdade de informar).
- **CF, art. 5º, X** — inviolabilidade da intimidade, vida privada, honra e imagem (base de eventual reação a excessos).
- **EAOAB (Lei 8.906/94), art. 7º** — prerrogativas do advogado; **inviolabilidade** por manifestações no exercício da profissão (nos limites da lei) e **sigilo profissional**.
- **Provimento 205/2021 (CFOAB)** — disciplina a **publicidade e a informação na advocacia**: regula manifestações do advogado na imprensa e redes, veda sensacionalismo, mercantilização e captação de causa, e exige **sobriedade e discrição**.
- **CED (Código de Ética e Disciplina da OAB)** — sigilo profissional, dever de urbanidade, vedação à captação de clientela e à exposição indevida do cliente.
- **LGPD (Lei 13.709/2018)** — dados pessoais do cliente/assistido (e de terceiros/vítimas) não podem ser expostos sem base legal; **consentimento informado** é necessário para divulgar informação do próprio cliente.
- **CPP, art. 20 e art. 234-A e ss.** — sigilo do inquérito e das investigações; a defesa não deve alimentar vazamentos nem confirmá-los.
- **CP, arts. 138-140 (calúnia, difamação, injúria) e art. 154 (violação de segredo profissional)** — o advogado que expõe o cliente ou terceiros pode responder; conhecer os limites protege o profissional.

## Conceito operacional — o que é "condenação midiática"

A **publicidade opressiva** (ou *trial by media*) é a formação de um veredicto social **antes** do devido processo: manchetes, "júri de rede social", vazamento seletivo de trechos de autos, exibição do investigado algemado. Ela contamina testemunhas, pressiona autoridades, antecipa a pena (estigma) e, no **Tribunal do Júri**, pode atingir o próprio conselho de sentença (daí a possibilidade de **desaforamento** — art. 427 CPP — quando a imparcialidade dos jurados está comprometida pela repercussão local). Gerir a narrativa é **conter esse dano** dentro dos limites éticos, não "ganhar a opinião pública a qualquer custo".

## Metodologia — plano de comunicação em 7 passos

### Passo 1 — Diagnóstico da crise (triagem)
Antes de qualquer palavra pública, mapear:
- **Fase**: pré-inquérito, inquérito/operação, ação penal, júri, execução? (o sigilo e o risco variam).
- **Exposição atual**: já há matéria publicada? Vazamento de autos? Imagem do cliente circulando? Nome divulgado?
- **Públicos**: imprensa, opinião pública, vítima/família, autoridades (delegado, MP, juiz), o próprio cliente e a família dele, eventuais corréus.
- **Risco processual**: o que dito hoje pode virar **prova** contra o cliente amanhã? Há delação, colaboração ou corréu com interesse oposto?
- **Objetivo realista**: conter dano à imagem, corrigir informação falsa, restabelecer a presunção de inocência — **não** "provar inocência" na imprensa.

### Passo 2 — Consentimento informado do cliente (inegociável)
Nenhuma manifestação pública sobre o caso sem **autorização expressa e informada** do cliente (idealmente por escrito). Explicar: benefícios, riscos, irreversibilidade de declarações e o direito do cliente ao **silêncio público** (que espelha o direito ao silêncio processual — CF, art. 5º, LXIII). O cliente decide se aparece, se fala, se autoriza foto. **Sigilo profissional pertence ao cliente** — só ele pode dispensá-lo, e ainda assim o advogado avalia o risco.

### Passo 3 — Definir o porta-voz (quem fala)
- **Regra**: quem fala é o **advogado**, não o cliente. O cliente exposto ao microfone tende a produzir prova contra si.
- Manifestação do advogado deve ser **técnica, sóbria e restrita ao processo** (Provimento 205/2021): comentar a **estratégia jurídica** e o **respeito ao devido processo**, não antecipar mérito nem atacar pessoas.
- Em estruturas maiores, designar **um único** porta-voz evita ruído e contradição. Assessoria de imprensa, se houver, atua **sob** orientação jurídica.

### Passo 4 — Definir a mensagem (o que se diz)
Ancorar toda mensagem em **princípios**, não em fatos do mérito:
- **Presunção de inocência** ("meu cliente é inocente até prova em contrário, e confia no Judiciário").
- **Confiança no devido processo** ("os fatos serão esclarecidos nos autos, não na imprensa").
- **Colaboração com a Justiça** (quando verdadeira e estratégica).
- **Correção de informação falsa/ilegal** (quando há erro material ou vazamento ilícito) — sem entrar no mérito.
- **Nunca**: confessar, negar fatos específicos, revelar tese, atacar a vítima, comentar prova, prometer resultado.

### Passo 5 — Escolher o canal e o formato
- **Nota à imprensa (release)**: canal preferencial. Escrito, controlado, sem perguntas, revisado. É o formato mais seguro.
- **Coletiva/entrevista**: alto risco (perguntas fora do roteiro). Só com preparação, mensagem fechada e treino de "ponte" (voltar sempre à mensagem-âncora). Evitar quando o silêncio é mais seguro.
- **Redes sociais**: sob o **Provimento 205/2021** — sobriedade, sem sensacionalismo, sem transformar a defesa em espetáculo ou marketing pessoal. Alto risco de perpetuidade e descontextualização.
- **Off / silêncio estratégico**: muitas vezes a melhor decisão. "Nada a declarar por respeito ao sigilo e ao devido processo" é uma resposta legítima e forte.

### Passo 6 — Gerir vazamentos e ilícitos
- **Não confirmar nem comentar** conteúdo de autos sigilosos vazados (confirmar valida o vazamento e pode alimentar a narrativa acusatória).
- Avaliar reação **processual e não midiática**: representação por **quebra de sigilo** (art. 20 CPP; abuso de autoridade — Lei 13.869/2019, se cabível), pedido de apuração, direito de resposta (Lei 13.188/2015) contra informação **comprovadamente falsa**.
- Ponderar: reagir amplifica ("efeito Streisand"). Às vezes a melhor resposta é registrar formalmente o ilícito nos autos e **não** dar palco.

### Passo 7 — Documentar e revisar
- **Registrar** por escrito a autorização do cliente, a mensagem aprovada e o que foi divulgado (proteção do advogado).
- **Revisão humana obrigatória** de toda nota antes de sair: um erro público é irreversível.
- Monitorar o retorno e ajustar; alinhar a comunicação à evolução processual (o que se diz na fase de inquérito difere do que se diz após a sentença).

## Matriz de decisão — falar ou silenciar?

| Situação | Tendência | Racional |
|---|---|---|
| Informação **falsa** circulando, com dano concreto | Corrigir (nota sóbria) | Direito de resposta; restaurar presunção de inocência |
| Vazamento de autos sigilosos | **Não comentar** o conteúdo; reagir nos autos | Confirmar valida o vazamento; efeito Streisand |
| Cliente sendo exibido/algemado, imagem explorada | Reação **processual** (habeas corpus/representação) + nota sóbria | CF, art. 5º, X e LVII; Súmula Vinculante 11 (uso de algemas) |
| Pressão para o cliente "dar sua versão" na TV | **Silêncio** do cliente; porta-voz é o advogado | Declaração vira prova; direito ao silêncio |
| Repercussão local intensa antes do júri | Monitorar; avaliar **desaforamento** (art. 427 CPP) | Imparcialidade do conselho de sentença |
| Mérito ainda em aberto, tudo sob sigilo | **Off / "nada a declarar"** | Não entregar tese; sigilo do inquérito |

## Teses e posições (defesa) × contrapontos

➡️ **Tese (defesa):** a **presunção de inocência (CF, art. 5º, LVII)** é oponível também no espaço público; a publicidade opressiva viola a não culpabilidade e pode gerar nulidades/prejuízos processuais aferíveis (contaminação de prova, do júri).
➡️ **Tese (defesa):** a manifestação **técnica e sóbria** do advogado é **prerrogativa** (EAOAB, art. 7º) e está **dentro** do Provimento 205/2021 quando restrita ao processo e sem sensacionalismo.
➡️ **Contraponto (a antecipar):** **liberdade de imprensa (CF, art. 220)** protege a cobertura; a defesa não censura a mídia — atua corrigindo ilícito/falsidade e blindando o processo, não silenciando o jornalismo.
➡️ **Risco deontológico (autocontrole):** exposição excessiva pode configurar **publicidade indevida/captação de causa** (Provimento 205/2021; CED) ou **quebra de sigilo** (CP, art. 154). O limite é o interesse do cliente e a sobriedade — nunca o marketing do advogado.

## Estrutura de uma nota à imprensa (modelo comentado)

```
NOTA À IMPRENSA

A defesa de [NOME/INICIAIS DO CLIENTE, conforme autorização], por seus
advogados, vem a público esclarecer, nos estritos limites do que é ético e
possível diante do sigilo que ampara o caso:

1. [PRINCÍPIO] Reafirma-se a PRESUNÇÃO DE INOCÊNCIA (art. 5º, LVII, da
   Constituição): [nome do cliente] é inocente até que se prove o contrário,
   em regular processo, com contraditório e ampla defesa.

2. [DEVIDO PROCESSO] Os fatos serão esclarecidos NOS AUTOS, perante o Poder
   Judiciário — e não na imprensa. A defesa confia na apuração isenta e no
   respeito às garantias constitucionais.

3. [CORREÇÃO, se houver] Registra-se que a informação segundo a qual [FATO
   FALSO/ERRO MATERIAL] NÃO corresponde à realidade. [Sem entrar no mérito.]

4. [SIGILO] Por respeito ao sigilo legal que protege as investigações e à
   própria estratégia de defesa, não serão prestados esclarecimentos sobre o
   conteúdo dos autos.

A defesa permanece à disposição para os esclarecimentos cabíveis pelas vias
adequadas.

[LOCAL], [DATA].
[NOME(S) DO(S) ADVOGADO(S)] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [NOME/INICIAIS DO CLIENTE], [FATO FALSO/ERRO MATERIAL], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

**Regras de ouro da nota:** curta; ancorada em princípios; **sem** fato do mérito; **sem** ataque a pessoas; revisada por humano; autorizada pelo cliente.

## Erros comuns / anti-padrões

- **Deixar o cliente falar** na imprensa — declaração espontânea vira prova (e não há contraditório na TV).
- **Antecipar a tese** para a mídia — entrega a estratégia à acusação antes da hora.
- **Negar fatos específicos** publicamente — cria compromisso que a prova pode desmentir; melhor ancorar em princípios.
- **Confirmar/comentar autos vazados** — valida o vazamento e a narrativa acusatória.
- **Transformar a defesa em marketing pessoal** — risco de publicidade indevida/captação (Provimento 205/2021; CED) e de desgaste com o juízo.
- **Atacar a vítima ou sua família** publicamente — desumaniza a defesa, gera revitimização e pode configurar crime contra a honra (CP, arts. 138-140).
- **Divulgar dado do cliente/terceiro sem consentimento/base legal** — viola LGPD e o sigilo (CP, art. 154).
- **Reagir a tudo** — amplifica o dano (efeito Streisand); nem todo ataque merece resposta.
- **Ignorar a repercussão local antes do júri** — perder o momento de avaliar o **desaforamento** (art. 427 CPP).
- **Improvisar no plantão** (prisão em flagrante, operação de madrugada) — é quando mais se erra; ter um protocolo pronto.

## Checklist final (antes de qualquer manifestação pública)

- [ ] Há **autorização expressa e informada** do cliente, registrada?
- [ ] O **porta-voz** é o advogado (e não o cliente)?
- [ ] A mensagem está ancorada em **princípios** (presunção de inocência, devido processo) e **não** em fatos do mérito?
- [ ] Nada revela **tese**, **prova** ou **estratégia** de defesa?
- [ ] Nada viola **sigilo** (autos, cliente, terceiros) nem a **LGPD**?
- [ ] O tom é **sóbrio e técnico**, conforme o **Provimento 205/2021** (sem sensacionalismo, sem captação)?
- [ ] Não há **ataque à vítima**, à família ou a autoridades?
- [ ] O **canal** escolhido é o de menor risco (nota escrita > coletiva)? O silêncio foi considerado?
- [ ] Se há vazamento/ilícito, a reação é **processual** (representação, HC, direito de resposta) e não só midiática?
- [ ] Em caso de júri: a repercussão local foi avaliada para eventual **desaforamento** (art. 427 CPP)?
- [ ] Houve **revisão humana** da nota antes de publicar?
- [ ] Toda base legal/precedente foi conferida via `jurisprudencia-stj-stf`?

## Súmulas e precedentes relevantes (conferir vigência via `jurisprudencia-stj-stf`)

- **Súmula Vinculante 11/STF** — o **uso de algemas** só se justifica com fundamentação escrita; exibição desnecessária do preso algemado à imprensa é ilícita e ofende a imagem/presunção de inocência (âncora para reação contra exposição vexatória).
- **ADPF 130/STF** — não recepção da Lei de Imprensa; parâmetro de que a liberdade de imprensa é ampla, mas convive com honra e presunção de inocência (contrapeso a considerar). **[Verificar aplicação ao caso — passar pelo gate.]**
- Jurisprudência sobre **nulidade por publicidade opressiva** no júri e sobre **desaforamento (art. 427 CPP)** por comprometimento da imparcialidade: **[NÃO VERIFICADO — não citar número de HC/REsp/tema de memória. Conferir tese e precedente atual via `jurisprudencia-stj-stf`.]**
- Precedentes do CFOAB/Tribunais de Ética sobre **publicidade indevida e Provimento 205/2021**: **[NÃO VERIFICADO — confirmar teor e vigência antes de citar.]**

> Prefira **ensinar a tese e o dispositivo** (CF, art. 5º, LVII; SV 11; art. 427 CPP; Provimento 205/2021) a arriscar número de acórdão. **Omitir vence inventar.**

## Lembretes finais

- **Comunicação pública é decisão jurídica**, não de assessoria — quem manda é a defesa técnica, sempre à luz do interesse do cliente.
- **Silêncio é opção legítima** e muitas vezes a mais forte.
- **Princípios, não mérito**; **advogado, não cliente**; **nota escrita, não improviso**.
- **Provimento 205/2021 + CED + sigilo** são a régua — sobriedade acima de tudo; nunca marketing pessoal sobre a dor alheia.
- **LGPD e consentimento informado** antes de qualquer exposição de dado do cliente.
- **Vazamento**: reação processual, não confirmação midiática.
- **Júri**: repercussão local → avaliar **desaforamento** (art. 427 CPP).
- **Conferir vigência** do Provimento 205/2021, do CED e de qualquer precedente via `jurisprudencia-stj-stf` antes de agir.

## Nota de conformidade

Este material é **rascunho técnico de apoio à estratégia de comunicação**, sob **revisão humana obrigatória**. Não substitui o juízo do advogado responsável, que responde pela manifestação (CED; EAOAB, art. 7º). A régua ética aqui é a da **advocacia** (EAOAB + CED + **Provimento 205/2021**); instituições de **outro polo** (MP — CNMP; Defensoria — LC 80/94) têm regime próprio, e o chefe-roteador deve conferir o **polo do usuário** antes de aplicar o roteiro deontológico. Toda citação legal, sumular ou jurisprudencial passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf`/`verificacao-citacoes` antes do uso; sigilo profissional e LGPD são invioláveis.
