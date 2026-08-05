---
id: justica-negocial
name: "Justiça Penal Negocial (Estratégia)"
whenToUse: |
  Agentes que orientam a escolha entre os institutos consensuais do processo penal (ANPP, suspensão condicional do processo, transação penal, colaboração premiada), avaliam custo-benefício da negociação para o cliente, ou preparam a postura da defesa na negociação com o Ministério Público. Camada de ESTRATÉGIA — combina com a skill-peça `anpp` e com as best-practices transversais `etica-oab-sigilo` e `verificacao-citacoes`.
version: "1.0.0"
---

# Justiça Penal Negocial — Best Practices (Estratégia)

> **Best-practice de ESTRATÉGIA.** Este documento orienta a **decisão estratégica** sobre quando e como negociar no processo penal — não a redação da peça (para o ANPP, ver a skill `anpp`). A justiça negocial cresceu no Brasil (transação e suspensão desde 1995; ANPP e colaboração consolidados pelo Pacote Anticrime) e mudou a lógica defensiva: em muitos casos, o melhor resultado para o cliente **não é a sentença**, mas um **acordo bem negociado** — ou a recusa consciente de um acordo desvantajoso. A escolha errada de instituto, ou a adesão sem custo-benefício, prejudica o cliente de forma muitas vezes irreversível (confissão, renúncia a teses).

## Como Aplicar (Fluxo Operacional)

1. **Mapear antes de negociar.** Identificar **todos** os institutos potencialmente cabíveis ao caso (pena, fase, requisitos) antes de propor qualquer caminho. Negociar sem mapa leva a aceitar o primeiro acordo oferecido, que raramente é o mais favorável.
2. **Arquivamento/absolvição vencem o acordo.** Se há causa de **arquivamento** ou **tese absolutória sólida**, esse caminho é prioritário — não se troca uma provável absolvição por confissão e condições. O acordo é a melhor saída **quando a condenação é o cenário provável**.
3. **Custo-benefício documentado e decisão do cliente.** A análise de risco (confissão × chance de condenação, estigma, reincidência) é apresentada ao cliente de forma realista; a **decisão final é sempre dele**, por consentimento informado (sobrepõe-se `etica-oab-sigilo`).
4. **Bloqueio e escalonamento.** Diante de coação na negociação, proposta abusiva não sanável, ou conflito entre corréus, a squad **interrompe e escala** ao advogado responsável — não fecha acordo "no automático".

## Princípios

1. **Negociação é estratégia, não rendição.** Aderir a um instituto consensual é uma **decisão técnica** que pondera o risco do litígio. Não é "desistir de defender": frequentemente é a defesa mais eficaz (extinção da punibilidade sem condenação, no ANPP; ausência de antecedentes). Mas só é boa estratégia quando o **cenário alternativo** (a sentença) é realisticamente pior.

2. **O melhor caminho pode ser não negociar.** Arquivamento, atipicidade, prova ilícita (cadeia de custódia), prescrição e teses absolutórias sólidas **superam** qualquer acordo. Confessar para obter acordo quando havia caminho para absolvição é dano ao cliente. Mapear primeiro as **saídas sem ônus**.

3. **A defesa negocia — não homologa.** O Ministério Público formula a proposta, mas as **condições são negociáveis** (natureza, extensão, valor, proporcionalidade, capacidade econômica). O defensor que apenas repassa a proposta ao cliente não exerce a função: cabe **discutir, contrapropor e, se for o caso, recusar**.

4. **Consentimento informado é inegociável.** O cliente decide com base em informação **realista** sobre riscos e benefícios — sem promessa de êxito, sem minimizar a confissão, sem pressão (CED, art. 9º; `etica-oab-sigilo`). A confissão exigida pelo ANPP e os termos da colaboração têm efeitos que o cliente precisa compreender **antes** de assinar.

5. **A confissão tem peso e risco.** Nos institutos que exigem confissão/colaboração, o que se diz **pode ser usado** (no ANPP, em caso de descumprimento — Res. CNMP 289/2024, art. 18-F; na colaboração, contra coautores). Avaliar o risco de autoincriminação e o impacto sobre **corréus** antes de orientar a adesão.

6. **Cada instituto tem seu tempo e sua sede.** Transação e suspensão têm momento próprio (oferecimento/recebimento); o ANPP é pré-processual (mas retroage a casos sem trânsito em julgado); a colaboração pode ocorrer em fases distintas. Perder o momento ou confundir o rito compromete o benefício.

7. **Conflito de interesses redobra a cautela.** Em coautoria, a colaboração de um pode **prejudicar** o outro; corréus com teses incompatíveis exigem defensores distintos. Antes de negociar por mais de um cliente no mesmo fato, confirmar a compatibilidade (sobrepõe-se `etica-oab-sigilo`).

## Mapa dos Institutos

Tabela-guia para identificar o instituto cabível. Conferir sempre a **redação vigente** e os requisitos do caso concreto (gate `verificacao-citacoes`).

| Instituto | Cabimento (resumo) | Exige confissão? | Efeito principal |
|-----------|--------------------|------------------|------------------|
| **Transação penal** (Lei 9.099/95, art. 76) | Infrações de **menor potencial ofensivo** (pena máxima ≤ 2 anos), competência dos Juizados Especiais Criminais | **Não** (não há assunção de culpa) | Aplicação imediata de pena restritiva/multa; **não** gera reincidência nem antecedentes; não há processo |
| **Suspensão condicional do processo (sursis processual)** (Lei 9.099/95, art. 89) | Crimes com **pena mínima ≤ 1 ano**; já oferecida a denúncia | **Não** | Suspende o processo por 2 a 4 anos sob condições; cumprido → **extinção da punibilidade** sem condenação |
| **ANPP** (CPP, art. 28-A; Res. CNMP 289/2024) | Infração **sem violência/grave ameaça**, **pena mínima inferior a 4 anos**, não cabível arquivamento; observados os óbices do §2º | **Sim** — formal e circunstanciada | Cumprido → **extinção da punibilidade**; sem denúncia, sem reincidência, sem antecedentes (§12/§13) |
| **Colaboração premiada** (Lei 12.850/13, arts. 4º e ss.) | Organização criminosa e crimes correlatos; colaboração **efetiva** que produza resultados (identificação de coautores, recuperação de produto etc.) | **Sim** — e exige fornecer prova/resultado | Redução de pena, perdão judicial ou não denúncia, conforme resultados; é **meio de obtenção de prova** |

> **Ordem prática de avaliação (do mais favorável ao mais oneroso ao cliente):** (1) **arquivamento/absolvição** sem ônus → (2) **transação penal** (sem culpa, infração mínima) → (3) **suspensão condicional do processo** (sem confissão) → (4) **ANPP** (exige confissão, mas extingue a punibilidade) → (5) **colaboração premiada** (último recurso, alto custo de exposição, só quando o cenário é grave e a colaboração é viável e segura). Subir nessa escala só quando o degrau anterior não couber.

> **Distinções que orientam a escolha:** transação e suspensão **não exigem confissão** — são preferíveis quando cabíveis. O ANPP exige confissão, mas alcança crimes de pena mínima maior (até < 4 anos) e produz extinção da punibilidade. A colaboração é qualitativamente distinta: é **meio de prova**, exige **resultado** e expõe o colaborador — reservada a contextos graves (criminalidade organizada) e nunca banalizada.

## Análise de Custo-Benefício para o Cliente

A decisão de negociar é, no fundo, uma **comparação de cenários**: o que o cliente obtém pelo acordo versus o que arrisca no litígio. A análise deve ser feita **caso a caso**, registrada por escrito e apresentada ao cliente em linguagem clara. Eixos de ponderação:

| Fator | A favor de negociar | Contra negociar (litigar) |
|-------|---------------------|---------------------------|
| **Risco de condenação** | Prova robusta da acusação; tese defensiva fraca | Prova frágil/ilícita; tese absolutória sólida; causa de arquivamento ou prescrição |
| **Peso da confissão** | Fatos já admitidos/incontroversos; baixo risco de uso futuro | Cliente nega autoria; coautoria em que a confissão prejudica ou expõe o cliente |
| **Reincidência e antecedentes** | Acordo evita condenação → preserva primariedade e folha limpa | Cliente já condenado (acordo pode ser inviável; conferir óbices) |
| **Estigma e tempo** | Encerra rápido, sem audiência de instrução, sem exposição pública prolongada | Litígio com chance real de absolvição compensa o desgaste |
| **Capacidade de cumprir** | Condições compatíveis com a renda e a rotina do cliente | Condições desproporcionais que o cliente provavelmente descumprirá (descumprir reabre a denúncia) |

> **Regra de ouro do custo-benefício:** o acordo só é bom negócio quando o **cenário alternativo (a sentença) é realisticamente pior** para o cliente. Pesar (i) a **probabilidade de condenação** contra a **certeza das condições** do acordo; (ii) o **risco da confissão** (autoincriminação, uso no descumprimento, efeito sobre corréus) contra o **ganho da extinção da punibilidade sem antecedentes**; (iii) o **estigma e o tempo** do processo contra o desgaste de cumprir as condições. Quando os pratos se equilibram, a decisão — sempre do cliente — tende ao caminho que melhor preserva sua liberdade e sua folha.

## Estratégia de Negociação

**Preparação (antes de falar com o MP):**
- **Levantar requisitos e óbices** de cada instituto cabível (pena, antecedentes, quinquênio, natureza do crime). Para o ANPP, rodar o checklist da skill `anpp`.
- **Mapear o cenário alternativo:** qual a probabilidade real de condenação? Há prova ilícita, causa de arquivamento, prescrição? Quanto pior a sentença provável, maior o valor do acordo — e vice-versa.
- **Reunir prova da capacidade econômica** do cliente (para dimensionar prestação pecuniária e reparação) e da sua situação pessoal.

**Postura na mesa com o Ministério Público:**
- **Discutir condições, não apenas aceitá-las.** Pleitear a fração menor de prestação de serviços, valor de prestação pecuniária compatível com a renda (com parcelamento), reparação proporcional e afastamento de condições atípicas desproporcionais (ANPP, inciso V).
- **Sustentar o cabimento com técnica:** cálculo da pena mínima (art. 28-A, §1º — aumentos na fração mínima, diminuições na máxima); afastamento da "habitualidade" baseada em inquéritos sem trânsito em julgado (§2º, II); insignificância das infrações pretéritas.
- **Tom institucional e cooperativo, sem renúncia de direitos.** Negociar não é ceder em tudo: é buscar o ponto proporcional. Registrar por escrito as contrapropostas.

**Controle da recusa:**
- Se o MP **recusa** propor o ANPP a quem preenche os requisitos, requerer a **remessa ao órgão superior** (art. 28-A, §14, c/c art. 28 do CPP); a recusa **sempre** deve ser fundamentada (Res. CNMP 289/2024, art. 18-G). Recusa genérica é controlável.

**Decisão do cliente:**
- Apresentar, por escrito, **risco × benefício**: o que se ganha (extinção da punibilidade, sem antecedentes) × o que se cede (confissão e seus riscos, condições a cumprir). A escolha é do cliente; o defensor recomenda, mas **não decide por ele** nem garante resultado.

## Quality Criteria

Checklist antes de orientar adesão a qualquer instituto negocial:

- [ ] **Todos os institutos cabíveis foram mapeados** (transação, suspensão, ANPP, colaboração) e o **mais favorável** ao cliente foi identificado?
- [ ] **Saídas sem ônus foram descartadas primeiro** — não há causa de arquivamento, tese absolutória sólida, prova ilícita ou prescrição que torne o acordo desnecessário?
- [ ] **Custo-benefício documentado** — risco de condenação, peso da confissão, estigma e (in)existência de reincidência foram avaliados e registrados?
- [ ] **Requisitos e óbices conferidos** na redação vigente (ex.: ANPP — caput, §1º e §2º) via `verificacao-citacoes`?
- [ ] **Condições negociadas** quanto a proporcionalidade e **capacidade econômica** do cliente — e não apenas aceitas como propostas?
- [ ] **Riscos da confissão/colaboração explicados** ao cliente (uso probatório no descumprimento; efeito sobre corréus)?
- [ ] **Consentimento informado** obtido, por escrito, **sem coação** e **sem promessa de êxito** (`etica-oab-sigilo`)?
- [ ] **Conflito de interesses checado** em coautoria (teses incompatíveis → defensores distintos)?
- [ ] **Controle da recusa previsto** (remessa ao órgão superior — §14) quando o MP nega acordo cabível?
- [ ] **Decisão final registrada como do cliente**, não do escritório?

## Anti-Patterns

Padrões proibidos — a ocorrência de qualquer um deles **bloqueia a orientação** e exige escalonamento ao advogado responsável:

- **Aceitar o primeiro acordo oferecido** sem mapear institutos mais favoráveis nem negociar condições. O defensor não é correio de propostas do MP.
- **Confessar para obter ANPP quando havia caminho para absolvição/arquivamento.** Trocar provável absolvição por confissão e condições é dano ao cliente.
- **Tratar a confissão como inócua.** Omitir do cliente que a confissão pode ser usada no descumprimento (Res. 289/2024, art. 18-F) ou contra corréus (art. 18-D) viola o dever de informação.
- **Decidir pelo cliente** ou pressioná-lo a aceitar/recusar. A escolha é dele, após informação realista — sem coação, sem garantir resultado.
- **Confundir os institutos** — propor ANPP onde cabe transação (menor potencial), ou suspensão onde a pena mínima excede 1 ano. Cada instituto tem seu requisito e sede.
- **Banalizar a colaboração premiada** — tratá-la como acordo comum, sem avaliar exposição, segurança, viabilidade do resultado e impacto sobre coautores.
- **Negociar em conflito de interesses** — atuar por corréus com teses incompatíveis, ou orientar colaboração de um cliente que incrimina outro do mesmo escritório.
- **Garantir resultado da negociação** — "o MP vai aceitar", "isso extingue na hora". O resultado depende do MP, do juízo (homologação/voluntariedade) e do cumprimento; assegurá-lo é infração ética.

## Referência Cruzada

- **`anpp`** (skill-peça) — execução técnica do ANPP: cabimento, requisitos negativos, condições, procedimento, modelo de manifestação e checklist de elegibilidade. Esta best-practice decide **se e como** negociar; a skill executa.
- **`etica-oab-sigilo`** (transversal) — consentimento informado, vedação de promessa de êxito, sigilo e conflito de interesses sobrepõem-se a toda negociação.
- **`verificacao-citacoes`** (transversal) — todo requisito legal, súmula ou precedente invocado na estratégia ou na peça passa pelo gate anti-alucinação antes da entrega.
- **`atendimento-cliente-juridico`** — a avaliação de viabilidade e a comunicação do custo-benefício ao cliente seguem o padrão de intake e de expectativa realista.

---

> **Em caso de dúvida, escale.** Diante de incerteza sobre o instituto cabível, sobre o custo-benefício para o cliente, ou sobre possível conflito de interesses na negociação, a squad **para e consulta o advogado responsável** antes de orientar adesão. A presunção é pró-cliente: na dúvida entre negociar e litigar, prevalece a opção que melhor preserva os direitos do investigado, decidida por ele com informação completa.
>
> **Base normativa:** CPP, art. 28-A (Lei 13.964/2019); Resolução CNMP nº 289/2024 (arts. 18-A a 18-G); Lei 9.099/95 (transação penal — art. 76; suspensão condicional do processo — art. 89); Lei 12.850/2013 (colaboração premiada — arts. 4º e ss.); CED da OAB (esp. art. 9º). Orientação de estratégia; não substitui análise do caso concreto.
