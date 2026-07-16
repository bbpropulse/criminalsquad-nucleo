---
name: defesa-honra-internet-redes-sociais
description: >-
  Use ao defender querelado/réu por crime contra a honra (calúnia 138, difamação 139, injúria 140)
  praticado pela INTERNET / REDES SOCIAIS — recorte digital transversal: aumento do art. 141, §2º
  (meio que facilita a divulgação), autoria em ambiente digital (IP, conta, cadeia de custódia),
  autenticidade de print, competência territorial da ofensa online, retratação pelos mesmos meios
  (art. 143, p.u.), Marco Civil da Internet… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, honra, digital, defesa]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-honra-internet-redes-sociais"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-honra-internet-redes-sociais", "defesa honra", "redes sociais"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Crimes contra a Honra pela Internet e Redes Sociais (arts. 138-140, 141, §2º, e 143, p.u., CP; Lei 12.965/2014 — Marco Civil)

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

Esta skill reúne o **recorte digital** da defesa nos crimes contra a honra — calúnia (art. 138), difamação (art. 139) e injúria (art. 140) — quando a ofensa ocorre em **rede social, aplicativo de mensagens, blog, comentário ou qualquer meio online**. Não repete as elementares de cada tipo (isso é das skills `defesa-calunia-138`, `defesa-difamacao-139` e da análise de tipicidade). Concentra o que só o ambiente digital traz: a **majorante do art. 141, §2º**, a **autoria em rede** (IP, conta, cadeia de custódia do print), a **competência territorial** da ofensa remota, a **retratação pelos mesmos meios** e a **obtenção de dados** sob o Marco Civil.

> **Lição central:** no digital, quem acusa carrega dois ônus que a defesa deve cobrar em cada peça — **autenticidade da prova** (o print/URL é íntegro? há cadeia de custódia?) e **autoria** (quem controlava a conta/IP no momento? conta pode ser falsa, invadida, compartilhada). Antes de discutir mérito da ofensa, ataque **prova** e **autoria**: muitas queixas caem só aí.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 138 a 145 do CP (em especial o **art. 141, §2º**, incluído pela Lei 13.964/2019) e dos arts. 10, 15, 22 e 23 da **Lei 12.965/2014 (Marco Civil da Internet)**. Súmulas, teses, temas e qualquer precedente (número de HC/REsp/RE, informativo, CC) passam **obrigatoriamente** pelo gate `verificacao-citacoes` e pela conferência via `jurisprudencia-stj-stf` antes de fundamentar a peça. Na dúvida, **ensine a tese e cite o dispositivo — não arrisque um número de acórdão**.

## Base legal

- **Arts. 138, 139, 140, CP** — calúnia, difamação, injúria (elementares em `defesa-calunia-138` / `defesa-difamacao-139` / análise de tipicidade).
- **Art. 141, CP** — causas de aumento. **§1º** (contra Presidente, funcionário público em razão da função, etc.) e, sobretudo, o **§2º** (ver abaixo).
- **Art. 141, §2º, CP (Lei 13.964/2019)** — pena **em triplo** se o crime é cometido ou divulgado em **quaisquer modalidades das redes sociais da rede mundial de computadores**. É o coração desta skill.
- **Art. 142, CP** — imunidades/exclusão do crime na injúria e difamação (crítica, juízo em processo, opinião de servidor).
- **Art. 143 e parágrafo único, CP** — **retratação** cabível em calúnia e difamação; o **p.u.** manda que, quando a ofensa foi feita por **meio de comunicação**, a retratação se dê **pelos mesmos meios** em que se praticou a ofensa.
- **Art. 145, CP + art. 100 CP** — em regra ação penal **privada** (queixa-crime); condicionada/pública nas exceções (injúria racial e funcional têm regime próprio — conferir texto vigente).
- **Marco Civil da Internet (Lei 12.965/2014):** **art. 10 e §1º** (proteção de registros; dados só por ordem judicial), **art. 15** (guarda de registros de acesso a aplicação por 6 meses), **art. 22** (requisitos da requisição de registros: indícios do ilícito, período, motivação) e **art. 23** (sigilo).
- **CPP:** **art. 70** (competência pelo lugar da consumação) e **art. 73** (na ação privada, o querelante pode preferir o foro do domicílio/residência do réu). **Prazo decadencial** de 6 meses da ação privada → tratado na skill `decadencia-honra-controle-prazo`.

## Roteiro de defesa — ordem de ataque (do mais forte ao mérito)

Ataque nesta ordem; cada camada pode encerrar a queixa antes de discutir a ofensa em si.

**1) Prova digital — autenticidade e cadeia de custódia.**
O print isolado é a prova mais frágil e mais comum. Exija:
- **Print não é original.** Imagem de tela é editável; sem a **fonte** (URL ativa, ata notarial, extração forense, resposta do provedor) e sem **metadados**, a integridade não se presume. Consuma aqui as skills `leitura-autenticidade-print-conversa` e `impugnacao-cadeia-custodia`.
- **Ata notarial / verificação por servidor da conta** e a **preservação tempestiva** do conteúdo (que some quando o autor apaga a publicação).
- **Contexto suprimido:** conversa recortada muda de sentido; a defesa exige o **fio completo** (mensagens anteriores/posteriores, quem iniciou, provocação recíproca).
- **Contra-tese:** ausência de exame de integridade → **prova imprestável**; requerer desentranhamento ou seu valor probatório reduzido.

**2) Autoria digital.**
"Foi daquela conta" não é "foi aquela pessoa". Fiscalize:
- **Conta ≠ pessoa:** perfil falso, homônimo, conta invadida (phishing/vazamento de senha), aparelho ou senha **compartilhados** (familiar, funcionário, casal), acesso de terceiro.
- **IP não identifica pessoa:** IP dinâmico, **CGNAT** (vários usuários por IP), rede pública/Wi-Fi aberto, VPN. Ligar IP a autor exige **porta lógica + horário exato** e a quebra em cadeia (IP → provedor de aplicação → provedor de conexão → assinante) — **cada elo** deve estar documentado e obtido **com ordem judicial** (Marco Civil).
- **Dados obtidos sem ordem judicial** ou **fora dos requisitos do art. 22 do Marco Civil** → **ilicitude da prova** (art. 5º, LVI, CF; art. 157 CPP); ataque a derivação (`impugnacao-prova-ilicita-derivada`, se existente).

**3) Majorante do art. 141, §2º — cabimento e alcance.**
- **Só incide se o meio for efetivamente "rede social"** e houver **divulgação** — não é qualquer mensagem privada. Ofensa em **conversa privada 1-a-1** (DM, WhatsApp individual) **não tem a lesividade da divulgação em massa** que a majorante quer punir. **Tese:** afastar o §2º quando não há real potencial de difusão/publicização.
- **Grupo privado × publicação aberta:** grupo fechado e pequeno tem alcance limitado; a defesa distingue o **grupo restrito** (poucos participantes, expectativa de privacidade) da **publicação aberta/feed público**. Discutir se há a "divulgação" que qualifica.
- **Bis in idem:** se a "divulgação em rede" já foi usada para caracterizar a própria ofensa/elementar, cuidado com a dupla valoração ao aplicar ainda o aumento — sustentar a vedação ao bis in idem.
- **Dosimetria:** o §2º triplica a pena — impugnar aplicação automática; exigir fundamentação concreta do alcance/dano (consumir `calculadora-dosimetria` para conferir o cálculo do aumento).

**4) Competência territorial da ofensa online.**
- Regra: **art. 70 CPP** — lugar da **consumação**. Na honra, a consumação se dá quando **um terceiro toma conhecimento** da ofensa (difamação/calúnia) ou quando a vítima é atingida (injúria) — e no online isso pode ocorrer em qualquer lugar.
- **Ação privada:** **art. 73 CPP** permite ao querelante optar pelo **foro do domicílio/residência do réu**. Discutir o foro quando a queixa foi ajuizada em comarca sem conexão real com os fatos ou com o réu (forum shopping).
- Consumir a skill `competencia-acao-penal-crimes-honra` para o desenho completo do foro; aqui, o recorte é a **volatilidade do lugar da consumação online**.

**5) Retratação pelos mesmos meios (art. 143, p.u.).**
- Cabível em **calúnia e difamação** (não na injúria). Sendo a ofensa por rede social, a retratação deve ser **feita pelos mesmos meios** — mesma plataforma, mesmo alcance (post público, story, etc.). Providenciar retratação tempestiva **extingue a punibilidade** (art. 107, VI, CP) nesses tipos.
- **Estratégia:** em difamação/calúnia digital, avaliar cedo a **retratação cabal** (antes da sentença) como saída — apagar não basta; deve retratar-se **publicamente** e do mesmo modo.

**6) Mérito — atipicidade e excludentes (mesmo do tipo, aplicadas ao digital).**
- **Animus** ausente: *jocandi* (brincadeira), *narrandi* (relato), *criticandi* (crítica), *corrigendi/consulendi* — o tom da rede (memes, ironia, debate) reforça a ausência de dolo específico de ofender.
- **Liberdade de expressão e crítica** (art. 5º, IV e IX, CF; art. 142, CP) — opinião, crítica a agente público, sátira. Ver `analise-tipicidade-honra-liberdade-expressao`.
- **Exceção da verdade** na calúnia (art. 138, §3º) e, restritamente, na difamação a funcionário público (art. 139, p.u.).
- **Injúria ≠ mera grosseria/desabafo:** nem todo comentário rude é injúria penal; falta a intenção de rebaixar a dignidade.

## Teses e contra-teses (quadro rápido)

| Tese defensiva | Fundamento | Contra-tese acusatória |
|---|---|---|
| Prova (print) sem integridade → imprestável | art. 157 CPP; cadeia de custódia | Print corroborado por outras provas/ata notarial |
| Autoria não demonstrada (conta ≠ pessoa; CGNAT) | in dubio pro reo; Marco Civil arts. 10/22 | IP + cadastro + horário fecham a autoria |
| Dados obtidos sem ordem judicial → prova ilícita | art. 5º LVI CF; MCI art. 10, §1º | Dados públicos/voluntariamente expostos |
| §2º do art. 141 não incide (mensagem privada/grupo restrito) | ausência de "divulgação" em rede | Grupo/rede tem alcance e publicização |
| Bis in idem ao aplicar o §2º | vedação à dupla valoração | Aumento é circunstância autônoma |
| Incompetência territorial / forum shopping | arts. 70 e 73 CPP | Consumação onde a vítima reside/foi vista |
| Retratação cabal pelos mesmos meios | art. 143, p.u.; art. 107, VI, CP | Retratação intempestiva ou parcial |
| Ausência de animus (jocandi/criticandi) | atipicidade subjetiva | Contexto revela intenção de ofender |
| Decadência (6 meses) | art. 38 CPP; art. 103 CP | Termo inicial deslocado (conhecimento tardio) |

## Súmulas, dispositivos e precedentes (sob o Citation Gate)

**Dispositivos de citação segura** (conferir apenas a redação vigente):
- **Art. 141, §2º, CP** — majorante da rede social (redação da Lei 13.964/2019).
- **Art. 143 e p.u., CP** — retratação pelos mesmos meios.
- **Arts. 10, 15, 22 e 23 da Lei 12.965/2014** — obtenção de registros só por ordem judicial; requisitos.
- **Arts. 70 e 73 CPP** — competência e opção de foro na ação privada.
- **Art. 157 CPP / art. 5º, LVI, CF** — prova ilícita.

**Súmulas notórias (conferir vigência via `jurisprudencia-stj-stf`):**
- **Súmula 714/STF** — na injúria/difamação **contra funcionário público em razão da função**, há **legitimidade concorrente** do ofendido (queixa) e do MP (mediante representação). Relevante para definir a via processual quando a ofensa online mira agente público.

**Teses/precedentes a confirmar (NÃO citar de memória):**
- Alcance do **art. 141, §2º** a **mensagem privada** × **publicação aberta**, e a exigência de "divulgação" → **[NÃO VERIFICADO]** — conferir posição atual do STJ/STF via `jurisprudencia-stj-stf`.
- **Competência** na ofensa consumada online (lugar do conhecimento pela vítima/terceiro) → **[NÃO VERIFICADO]** — há conflitos de competência (CC) no STJ sobre o tema; confira o entendimento vigente antes de citar número.
- Regime de ação penal da **injúria racial/qualificada** e sua interação com o ambiente digital → **[NÃO VERIFICADO]** — conferir a legislação e a jurisprudência atuais (houve alterações recentes de classificação/imprescritibilidade).
- Necessidade e limites da **quebra de sigilo telemático** e da requisição de dados a provedores (proporcionalidade, art. 22 MCI) → **[NÃO VERIFICADO]** — confirmar precedentes.

> **Regra de ouro:** prefira **ensinar a tese e apontar o dispositivo** a arriscar um número de HC/REsp/RE. Todo precedente específico é marcado `[NÃO VERIFICADO]` até passar por `verificacao-citacoes` / `jurisprudencia-stj-stf`.

## Erros comuns / checklist

**Anti-padrões (evitar):**
- Discutir o mérito da ofensa **sem antes** atacar autenticidade da prova e autoria.
- Aceitar **print isolado** como prova íntegra, sem exigir fonte/ata/metadados.
- Confundir **conta com pessoa** — deixar passar a hipótese de conta falsa, invadida ou compartilhada.
- Tratar **IP como identidade** ignorando CGNAT, IP dinâmico, VPN e rede compartilhada.
- Aceitar o **art. 141, §2º** automaticamente, mesmo em **mensagem privada 1-a-1** ou **grupo restrito** sem real divulgação.
- Aplicar o §2º **e** valorar a "divulgação" na própria elementar (**bis in idem**).
- Ignorar a **competência** e não impugnar foro escolhido por conveniência do querelante.
- Esquecer a **retratação pelos mesmos meios** (art. 143, p.u.) como via de extinção da punibilidade em calúnia/difamação.
- Perder o **prazo decadencial de 6 meses** da queixa (ver `decadencia-honra-controle-prazo`).
- Citar **precedente de cabeça** — todo número passa pelo gate.

**Checklist da defesa (marcar antes de peticionar):**
- [ ] A **origem da prova** (print/URL) foi questionada — há ata notarial, extração forense, metadados? Cadeia de custódia íntegra?
- [ ] A **autoria** foi realmente demonstrada (conta ≠ pessoa; CGNAT; conta compartilhada/invadida afastadas)?
- [ ] Os **dados do provedor** foram obtidos **com ordem judicial** e nos **requisitos do art. 22 MCI**? Se não, arguir ilicitude.
- [ ] O **art. 141, §2º** cabe no caso concreto (houve real **divulgação** em rede, não mera mensagem privada)? Há **bis in idem**?
- [ ] A **competência territorial** (arts. 70/73 CPP) está correta ou houve forum shopping?
- [ ] Cabe **retratação pelos mesmos meios** (calúnia/difamação) como saída (art. 143, p.u.; art. 107, VI, CP)?
- [ ] **Animus** de ofender está ausente (jocandi/narrandi/criticandi) — atipicidade subjetiva sustentável?
- [ ] **Decadência** (6 meses) conferida? Termo inicial correto?
- [ ] Aplica-se alguma **imunidade** do art. 142 CP?
- [ ] O **cálculo do aumento** do §2º (triplo) e a dosimetria foram conferidos (`calculadora-dosimetria`)?
- [ ] Todos os **precedentes/súmulas** conferidos via `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do advogado responsável realizada?

## Skills relacionadas (consumir/encadear)

- `defesa-calunia-138` / `defesa-difamacao-139` / `analise-tipicidade-honra-liberdade-expressao` — elementares e atipicidade de cada tipo.
- `leitura-autenticidade-print-conversa` / `impugnacao-cadeia-custodia` — análises de prova que esta skill consome.
- `competencia-acao-penal-crimes-honra` — desenho completo do foro.
- `retratacao-representacao` / `decadencia-honra-controle-prazo` — extinção da punibilidade e prazo.
- `calculadora-dosimetria` — cálculo do aumento do §2º e da pena.
- `verificacao-citacoes` / `jurisprudencia-stj-stf` — gate obrigatório de citações.
- `redacao-persuasiva-criminal` — padrão de redação da peça (aplicar sempre).

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material apoia a preparação da defesa; a peça final, a estratégia e cada afirmação de fato/prova são de responsabilidade do **advogado** (CED/OAB, art. 2º; Provimento 205/2021 quanto à divulgação e à publicidade).
- **Polo:** esta skill é de **DEFESA** (querelado/réu). O espelho acusatório (querelante/assistente) está em `acusacao-queixa-honra-estrategia-ativa` — o roteador deve **conferir o polo** da instituição (`_criminalsquad/_memory/company.md`) antes de aplicar.
- **Citation Gate inegociável:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).
- **Sigilo/LGPD:** dados do assistido e prints do caso são sigilosos — nunca em repositório público (`acervo/casos/` é gitignored).
