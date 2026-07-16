---
name: "Gestão de Prazos e Intimações"
description: "Monitoramento de DJEN, contagem de prazos penais, ciência e disciplina de carteira"
whenToUse: |
  Agentes que monitoram publicações (DJe/DJEN), interpretam intimações, calculam prazos processuais penais e agendam atos.
version: "1.0.0"
---

# Gestão de Prazos e Intimações

> Best-practice para agentes do CriminalSquad que lidam com o ciclo de vida do prazo
> penal: capturar a publicação, interpretar a intimação, calcular a data fatal e
> garantir o cumprimento do ato. Prazo perdido é dano irreversível.

## Princípios Fundamentais

1. **Prazo é matéria de sobrevivência.** A perda de prazo no processo penal gera
   preclusão temporal (art. 798, caput, do CPP — o prazo, salvo disposição em
   contrário, é contínuo e improrrogável) e expõe o advogado à responsabilidade
   civil, disciplinar (EAOAB, art. 32 e art. 34, IX) e até criminal (patrocínio
   infiel). Trate cada prazo como fatal até prova documental em contrário.

2. **Contagem correta exclui o dia do começo e inclui o do vencimento.** Regra do
   art. 798, § 1º, do CPP: não se computa no prazo o dia do começo, computando-se,
   porém, o do vencimento. O termo inicial é o dia da intimação, mas a contagem
   começa a fluir no dia seguinte.

3. **Cuidado com o regime de contagem (penal × cível).** O prazo penal clássico do
   CPP é **contínuo, em dias corridos** (art. 798, caput), e NÃO se suspende em
   feriados ou recessos como o cível. Já o CPC (art. 219) conta prazos processuais
   em **dias úteis**. NUNCA assuma um regime sem confirmar: existem zonas cinzentas
   (ações penais que tramitam com aplicação subsidiária do CPC, prazos para a parte
   civil, embargos infringentes, prazos recursais discutidos em doutrina e
   jurisprudência). Antes de calcular, identifique a natureza do ato e o diploma
   que o rege.

4. **A intimação é o termo inicial — e ela tem espécies.** O prazo só nasce de uma
   intimação válida. Distinga: intimação pessoal (réu, defensor público, MP — art.
   370, § 4º, CPP), intimação do defensor constituído por publicação no diário
   (art. 370, § 1º, CPP) e intimação eletrônica. Cada espécie tem regra própria de
   fixação do termo inicial.

5. **Ciência ficta × ciência efetiva.** Na intimação eletrônica (Lei 11.419/2006,
   art. 5º), considera-se realizada no dia da consulta ao teor da comunicação; se
   não houver consulta em 10 dias corridos da disponibilização, opera-se a ciência
   ficta (presumida) ao fim desse prazo. A ciência ficta é uma armadilha: o relógio
   corre mesmo sem ninguém ter aberto a intimação. Estabilize a leitura em até 24h
   da disponibilização e não trate os 10 dias como "tempo extra".

6. **Redundância de conferência é obrigatória.** Todo cálculo de prazo penal deve
   passar por dupla checagem: regime de contagem, termo inicial e data fatal
   conferidos por dois caminhos (cálculo manual + verificação independente, ou dois
   responsáveis). Erro de contagem é a causa nº 1 de perda de prazo, e em matéria
   penal não há "devolução automática".

7. **DJEN é o canal oficial.** Desde a vigência das Resoluções CNJ 455/2022 e
   569/2024, o Diário de Justiça Eletrônico Nacional (DJEN) é o canal único e
   oficial das comunicações processuais (salvo exceções residuais, como STF e STJ
   por seus portais). Monitorar apenas o canal oficial e fontes íntegras — jamais
   confiar em e-mail informal, captura de tela de terceiro ou "aviso de cartório".

8. **Documente tudo.** Print da disponibilização, data da consulta, número CNJ,
   defensor intimado e cadeia de cálculo. Em caso de falha sistêmica do tribunal, a
   prova documental sustenta o pedido de justa causa (CPP, art. 798, § 4º).

## Contagem de Prazos Penais

### Regra-mestre (CPP, art. 798)

```
ART. 798 CPP — PRAZO PENAL
caput    Salvo disposição em contrário, os prazos correm em cartório e são
         CONTÍNUOS e IMPRORROGÁVEIS, não se interrompendo por férias, domingo
         ou feriado (regra clássica: dias CORRIDOS).
§ 1º     Não se computa no prazo o dia do começo, INCLUINDO-SE, porém, o do
         vencimento.
§ 3º     O prazo que terminar em domingo ou feriado considera-se PRORROGADO até
         o dia útil imediato (prorrogação do VENCIMENTO, não da contagem).
§ 4º     Justa causa: a parte provará o impedimento por força maior para
         devolução do prazo (não é automática).
```

> **ATENÇÃO — penal × cível.** A contagem penal clássica (art. 798 CPP) é em
> **dias corridos/contínuos**, sem suspensão em feriados. O CPC (art. 219) conta
> em **dias úteis**. São regimes diferentes. NÃO afirme "dias úteis" para um prazo
> penal sem confirmar a natureza do ato e eventual aplicação subsidiária do CPC
> (art. 3º do CPP admite aplicação analógica e subsidiária). Há divergência
> doutrinária e jurisprudencial em pontos específicos — quando houver dúvida,
> sinalize-a expressamente ao usuário e recomende confirmação antes de protocolar.

### Termo inicial conforme o tipo de intimação (CPP, art. 798, § 5º)

```
a) intimação por mandado / pessoal      → corre do dia em que for feita a intimação
b) intimação por carta precatória       → do dia da juntada da carta cumprida
c) intimação por edital                 → do dia do término do prazo do edital
   (intimação por publicação no diário) → do dia útil seguinte ao da publicação
                                           (aplicável aos defensores constituídos)
```

### Prazo em dobro

```
Defensoria Pública / defensor dativo     prazo em DOBRO para todas as manifestações
                                         (LC 80/94, art. 44, I; art. 128, I; e
                                         art. 5º, § 5º, da Lei 1.060/50)
Núcleos de prática jurídica conveniados  prazo em dobro (mesma lógica da DP)
Litisconsortes com defensores distintos  no penal, NÃO há regra automática como a
                                         do CPC 229 — verificar caso a caso; em
                                         autos eletrônicos a contagem dobrada do
                                         CPC não se aplica de forma geral
MP                                        intimação pessoal; prazo simples
```

> O prazo em dobro segue a **parte/órgão**, não o advogado em si. Confirme quem
> atua: defensor público e dativo têm a prerrogativa; advogado constituído, em
> regra, não.

### Tabela de prazos penais comuns

| Ato | Prazo | Fundamento | Regime |
|-----|-------|-----------|--------|
| Resposta à acusação | 10 dias | CPP, art. 396 e 396-A | corridos |
| Apelação (interposição) | 5 dias | CPP, art. 593 | corridos |
| Razões de apelação | 8 dias | CPP, art. 600 | corridos |
| Razões (contravenção) | 3 dias | CPP, art. 600 | corridos |
| Recurso em sentido estrito (RESE) | 5 dias | CPP, art. 586 | corridos |
| Razões do RESE | 2 dias | CPP, art. 588 | corridos |
| Embargos de declaração (penal) | 2 dias | CPP, art. 619 | corridos |
| Embargos infringentes/nulidade | 10 dias | CPP, art. 609, p. único | corridos |
| Carta testemunhável | 48 horas | CPP, art. 640 | horas |
| Queixa-crime (decadência) | 6 meses | CPP, art. 38 | decadencial |
| Alegações finais (memoriais) | 5 dias | CPP, art. 403, § 3º | corridos |
| Defesa prévia (Lei de Drogas) | 10 dias | Lei 11.343/06, art. 55 | corridos |
| Habeas corpus | sem prazo | CPP, art. 647 e ss. | — |
| Revisão criminal | sem prazo | CPP, art. 622 | — |
| Recurso especial / extraordinário | 15 dias | Lei 8.038/90 e RISTJ/RISTF | corridos* |
| Agravo em REsp / RE | 15 dias | art. 1.042 CPC (subsidiário) | confirmar* |

> \* Recursos aos tribunais superiores em matéria penal são ponto de divergência:
> parte da jurisprudência aplica a contagem do CPC. **Confirme o entendimento do
> tribunal de destino e a Súmula/precedente vigente antes de fixar a data fatal.**

## Monitoramento de Publicações (DJEN)

Fluxo operacional padrão (cada etapa gera registro):

```
1. CAPTURA
   → Consultar o DJEN diariamente (canal oficial — Res. CNJ 455/2022 e 569/2024).
   → Buscar por OAB (UF + número), CPF/CNPJ da parte, número CNJ e palavra-chave.
   → Verificar portais residuais (STF, STJ) se houver processo na origem.

2. IDENTIFICAÇÃO
   → Vincular cada publicação ao processo e à parte correta da carteira.
   → Conferir se o defensor intimado é quem tem poderes nos autos (evita vício e
     evita que outro colega leia e não repasse).

3. CLASSIFICAÇÃO
   → Separar mero expediente (sem prazo) de ato com prazo, e identificar a
     natureza penal do ato e o regime de contagem aplicável.

4. CÁLCULO
   → Aplicar art. 798 CPP (exclui dia do começo, inclui o do vencimento),
     verificar prazo em dobro (Defensoria/dativo), prorrogar vencimento em
     domingo/feriado (§ 3º) e sinalizar zonas cinzentas (possível CPC).

5. AGENDAMENTO + ALERTA
   → Lançar a data fatal e a régua antecipada (D-7, D-3, D-1, D-0) com folga;
     notificar responsável e cliente e reforçar alerta em prazos críticos.
```

### Disciplina de carteira

- Manter cadastro atualizado das OABs, CPFs e CNPJs monitorados (incluir todos os
  advogados da banca que assinam nos autos).
- Garantir que cada novo processo entre na rotina de busca antes de o escritório
  assumir o caso.
- Conferir cobertura: DJEN cobre Justiça Estadual, Federal, Trabalhista e
  Eleitoral; STF/STJ têm canais próprios.
- Acúmulo de publicações não lidas é risco direto — a primeira que escapar pode
  virar infração disciplinar (EAOAB, art. 34).

### Execução autônoma (rotina diária não-assistida)

O maior ganho de produtividade no controle de prazos não é calcular mais rápido — é
**não depender de o operador lembrar de rodar a varredura**. A rotina deve rodar
sozinha e só interromper o profissional quando há decisão a tomar:

1. **Agende a varredura diária, headless** — ligue a captura (`djen-api-oficial` /
   agente `monitor-dje-djen`) ao `scheduled-tasks` MCP do ambiente (ex.: dias úteis,
   início da manhã) ou ao loop agendado do CriminalSquad. O objetivo é que a leitura se
   estabilize em ≤ 24h da disponibilização **sem** intervenção — a ciência ficta corre
   de qualquer forma.
2. **Torne a corrida idempotente** — grave cada ato no cache local
   `_criminalsquad/_memory/djen-tracker.jsonl` (via `scripts/orchestra/djen-tracker-add.mjs`;
   dedupe por processo + teor). Rodar duas vezes no mesmo dia não duplica alerta, e as
   consultas (`prazos-hoje`/`prazos-semana`) respondem sem re-chamar a API.
3. **Suba ao humano só as exceções** — a rotina calcula e agenda o rotineiro sozinha;
   escala para revisão **apenas** prazo novo, **zona cinzenta** de contagem (possível
   aplicação subsidiária do CPC), réu preso, ato crítico (razões, memoriais) ou conflito
   de agenda. O resto segue registrado, sem ruído.
4. **Régua de alerta antecipado** — programe D-7/D-3/D-1/D-0 para cada data fatal e
   reforço nos críticos. A mesma régua serve a follow-ups que hoje dependem de memória
   (retorno ao cliente, diligência pendente, benefício maturando).

> A automação **não** dispensa a dupla conferência nem a revisão humana: ela remove o
> trabalho mecânico e garante que nada passe despercebido, mas a data fatal de todo ato
> crítico é confirmada por pessoa antes de o prazo ser tratado como fechado.

## Quality Criteria

- [ ] Regime de contagem **confirmado** (penal/dias corridos × cível/dias úteis), com a fonte legal identificada
- [ ] Termo inicial correto conforme a espécie de intimação (pessoal, publicação, edital, eletrônica)
- [ ] Regra do art. 798, § 1º aplicada (exclui dia do começo, inclui o do vencimento)
- [ ] Prazo em dobro verificado (Defensoria/dativo/NPJ) e atribuído à parte certa
- [ ] Vencimento em domingo/feriado prorrogado para o dia útil seguinte (art. 798, § 3º)
- [ ] Ato corretamente classificado (mero expediente × ato com prazo)
- [ ] Ciência (efetiva × ficta) identificada e a disponibilização datada
- [ ] Agendado com folga e alerta antecipado (D-7/D-3/D-1/D-0)
- [ ] Dupla conferência do cálculo realizada (dois caminhos ou dois responsáveis)
- [ ] Zonas cinzentas (aplicação subsidiária do CPC) sinalizadas ao usuário
- [ ] Publicação proveniente de canal oficial (DJEN/portal), com print/registro arquivado

## Anti-Patterns

- **Assumir dias úteis em prazo penal sem confirmar.** A regra clássica do CPP
  (art. 798) é de dias corridos/contínuos. Aplicar a lógica do CPC (dias úteis) a
  um prazo penal por hábito é erro grave que pode antecipar ou atrasar a data fatal.
- **Contar a partir da publicação errada.** Usar a data de disponibilização como
  termo inicial quando a regra é o dia útil seguinte, ou ignorar a espécie de
  intimação (pessoal × por publicação × edital × eletrônica).
- **Ignorar o prazo em dobro.** Deixar de aplicar a contagem dobrada da Defensoria
  Pública/defensor dativo, ou aplicá-la a quem não tem a prerrogativa.
- **Agendar sem margem.** Lançar apenas o D-0: para um ato penal complexo (razões
  de apelação, memoriais), o dia do vencimento é tarde demais para começar.
- **Confiar em canal não-oficial.** Calcular prazo a partir de e-mail, print de
  terceiro ou aviso informal de cartório, em vez do DJEN/portal oficial.
- **Tratar a ciência ficta como folga.** Esperar os 10 dias da consulta presumida
  como se fosse prazo extra, deixando a intimação sem leitura e o prazo correndo às
  cegas.
- **Não documentar nem revisar.** Calcular sem dupla conferência e sem arquivar a
  prova da disponibilização — inviabiliza pedido de justa causa (art. 798, § 4º) se
  houver falha do sistema.
- **Confundir prorrogação do vencimento com suspensão da contagem.** No penal, o
  feriado no meio do prazo NÃO suspende a contagem; apenas o vencimento em
  domingo/feriado é prorrogado (art. 798, § 3º).
