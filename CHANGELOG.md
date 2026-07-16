# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- **Onda 4 de skills criminais (16 novas — a cauda MÉDIA/BAIXA por matéria):** fecha a varredura de amplitude com os nichos e institutos de menor volume que faltavam, gerada com o mesmo pipeline ancorado em skill-exemplar + **revisão jurídica adversarial embutida** (todas as 16 voltaram AJUSTADA; **42 correções jurídicas**, 34 suavizações e 46 melhorias aplicadas antes do commit; nenhum problema grave remanescente). Correções de destaque do revisor: em `suspensao-direito-dirigir`, o CP art. 47, III (suspensão/proibição de dirigir) estava descrito como o inciso II e o cabimento foi restrito aos crimes CULPOSOS de trânsito (Súmula 182/STJ como instrução de verificação); em `contravencoes-penais`, a LCP **não tem prescrição própria** (segue o CP arts. 109-119 por força do art. 1º da LCP) e o art. 7º trata de reincidência (não de detração), além do alerta de que a importunação do antigo art. 61 da LCP foi revogada e hoje é crime (CP art. 215-A, Lei 13.718/2018 — fora do JECRIM); em `crimes-ambientais-defesa`, o art. 28 da Lei 9.605 manda aplicar o art. 89 da Lei 9.099 com as modificações dos incisos I-V (não um sursis genérico), com o pressuposto de pena mínima ≤ 1 ano; prazo em dobro da Defensoria corrigido para LC 80/94 arts. 44/89/128, I conforme o ramo. **Matérias/institutos:** trânsito (`suspensao-direito-dirigir`), ambiental (`crimes-ambientais-defesa`), contravenções (`contravencoes-penais`), violência doméstica (`defesa-descumprimento-protetiva-24a` do art. 24-A LMP, `protetivas-lei-henry-borel` da Lei 14.344/22), ECA execução (`eca-execucao-medida-socioeducativa` SINASE), pessoa idosa (`crimes-contra-idoso`), econômico/patrimonial (`liberacao-bens-lavagem` art. 4º Lei 9.613, `apropriacao-indebita-previdenciaria` CP 168-A), prova especial (`impugnacao-infiltracao-acao-controlada` Lei 12.850), corporativo/consultivo (`investigacao-defensiva-corporativa`), ação privada (`perdao-perempcao-acao-privada`, `interpelacao-judicial-pedido-explicacoes` CP 144), registros (`retificacao-antecedentes-criminais`), investigação (`acompanhamento-depoimento-cpi-pic` CPI/PIC) e incidental (`justica-gratuita-isencao-custas-criminal`). Padrão preservado (type: prompt, "Aciona com:", estrutura forense, "Apoie-se em" com `verificador-citacoes` + régua `redacao-persuasiva-criminal`, cross-refs entre irmãs) e gate anti-julgado 16/16. **Resiliência:** a onda caiu por limite de sessão a meio caminho — 14/16 arquivos ficaram íntegros no disco (o gerador escreve antes de cair); após o reset, o workflow foi relançado em modo recuperação (gera só as 2 ausentes + revisa as 16, com instrução de completar qualquer arquivo truncado). Com a Onda 4, o acervo chega a **127 skills**
- **Onda 3 de skills criminais (23 novas — o backlog de FASES do processo):** fecha a espinha dorsal procedimental que faltava — da porta do inquérito ao STF —, gerada com o mesmo pipeline ancorado em skill-exemplar + **revisão jurídica adversarial embutida por skill** (todas voltaram AJUSTADA com correções substantivas aplicadas antes do commit, ex.: dever de motivação do indiciamento tratado como tese doutrinária e não "texto de lei" em `defesa-no-inquerito`; renumeração pós-Anticrime do CPP 312 §1º e SV 56 separada da LEP 117 em `prisao-domiciliar`; CPP 140 corrigido para garantias reparatórias em `levantamento-medidas-assecuratorias`; incisos V-VI do CPP 318 como acréscimo da Lei 13.257/2016). **Investigação/cautelares:** `defesa-no-inquerito`, `arquivamento-inquerito`, `impugnacao-interceptacao-sigilo`, `representacao-cautelares-mp`, `producao-antecipada-provas`, `prisao-domiciliar`, `levantamento-medidas-assecuratorias`, `pedido-diligencias`. **Instrução/incidentes:** `alegacoes-finais-orais`, `incidente-insanidade-mental`, `resposta-mutatio-emendatio`, `quesitos-pericia`, `incidente-falsidade-documental`. **Recursos/tribunais:** `recurso-extraordinario-criminal`, `reclamacao-constitucional`, `sustentacao-oral-tribunais`, `carta-testemunhavel`. **Execução/institutos:** `sursis-da-pena`, `reabilitacao-criminal`, `transferencia-direitos-preso`. **Polo ativo/consultivo:** `denuncia-mp`, `assistente-acusacao`, `parecer-juridico-criminal`. Padrão das existentes (type: prompt, gatilhos "Aciona com:", estrutura forense, seção "Apoie-se em" reusando `verificador-citacoes` e a régua `redacao-persuasiva-criminal`, cross-refs entre irmãs) e disciplina de citação preservada (nenhum julgado não-notório afirmado de memória — gate anti-julgado 23/23). Backlog restante: 16 MÉDIA/BAIXA para a Onda 4
- **Onda 2b — 4 skills encomendadas pelo operador:** `preparacao-interrogatorio-cliente` (prepara QUEM RESPONDE — silêncio total/seletivo, dinâmica CPP 185-196, simulação; fronteira ética blindada: orientar o ATO é lícito, moldar CONTEÚDO é CP 343, com tabela PODE/NÃO PODE), `juri-mapa-completo` (o mapa mestre do júri — desaforamento CPP 427-428, recusas do CPP 468, quóruns 25-15-7, apelação 593 III × soberania — conferido dispositivo a dispositivo e SEM duplicar as 3 skills de júri), `matriz-contradicoes-prova-oral` (o método declaração×declaração×prova convertido em peça — leva a capacidade do agente analise-contradicoes para o Claude Web) e `impugnacao-cadeia-custodia` (a peça da quebra — CPP 158-A a 158-F, lacres/hash, desentranhamento CPP 157). Revisão adversarial aplicou **14 correções jurídicas** (ex.: art. 188 é sistema presidencialista; exceção do art. 474 §1º no plenário; termo inicial do desaforamento no trânsito da pronúncia; compromisso não-elementar do CP 342 tratado como controvérsia). Geração resistiu a queda por limite de sessão (arquivos íntegros; revisão retomada após reset)
- **Onda 2 de skills criminais (15 novas — matérias de maior volume):** varredura de amplitude por MATÉRIA (4 eixos × inventário; 31 lacunas únicas) e geração da onda ALTA com **revisão jurídica adversarial embutida por skill** (lição da onda 1: o revisor confere cada artigo/prazo/súmula no ato — **65 correções jurídicas aplicadas** antes do commit, ex.: art. 15 do Estatuto do Desarmamento parafraseado errado; composição civil indevida em ação incondicionada; art. 11 IV×V da Maria da Penha; art. 233 CP não é contravenção; verbo "sabe" de redação revogada da lavagem; SV 24 restrita aos incisos I-IV) + 3 revisores de coerência de pares (protetivas vítima×defesa, digital imputação×produção, lavagem×orcrim). Skills: posse-porte-arma, impugnacao-prova-embriaguez, medidas-protetivas-urgencia, revogacao-flexibilizacao-protetivas, defesa-crimes-sexuais, depoimento-especial-lei-13431, eca-defesa-ato-infracional, defesa-lavagem-capitais, defesa-organizacao-criminosa, extincao-punibilidade-pagamento-tributario, defesa-fraude-eletronica, preservacao-prova-digital-defesa, inepcia-denuncia-generica, composicao-civil-danos-jecrim, plantao-pos-flagrante-primeiras-24h
- **Camada de maestria retórica — peças como obra-prima:** nova best-practice **`redacao-persuasiva-criminal`** (fonte única da ESCRITA forense, complementando peticao/recurso-criminal que dão a estrutura): teoria do caso em 1 frase, narrativa estratégica dos fatos (âncoras concretas, fato desfavorável enfrentado, mostrar-não-qualificar), **Regra do Porquê** (sem norma órfã nem fato órfão — subsunção explícita), bloco argumentativo padrão (afirmação → premissa → aplicação ao fato → consequência), arquitetura persuasiva (primazia/recência, transições, eventualidade sem autofagia, refutação antecipada, subtítulos que afirmam a tese), precedente narrado com similitude fática (nunca cascata de ementas) e mecânica de estilo. **Enforcement:** a `revisao-juridica` ganhou a **8ª dimensão (h) Qualidade da redação** com rubrica objetiva e severidade real (norma órfã em tese central/autofagia/objeção ignorada = ALTO; 3+ ALTOs = REJECT) — peça formalmente correta mas retoricamente rasa **deixa de passar**. **Cabeamento:** o runner injeta a BP em todo step que redige/revisa peça; o Arquiteto (build.prompt) gera steps de redação já com o padrão e o Gate 4 o valida; skill standalone **`redacao-persuasiva-criminal`** (mesma doutrina) criada; agentes redatores (`defesa-criminal-resposta-acusacao`, `habeas-corpus`) ganharam o bloco embutido "Padrão de redação — obra-prima" (espelhados no template); **45 skills de peça** apontam para a régua
- **Double-check de alto desempenho na onda ALTA (15 skills + 5 antigas):** revisão adversarial em duas camadas — 15 revisores jurídicos (1 por skill, verificando cada artigo/prazo/súmula com viés conservador: incerteza vira instrução de verificação, nunca palpite) + 4 revisores de coerência por família (a cadeia recursal conta uma única história de prazos/vias). Resultado: **32 correções jurídicas reais** (ex.: nulidade do EAOAB art. 7º movida do §12 para o inciso XXI; prazo de 90 dias no CPP 123, não 122; Turma Recursal não desafia REsp — Súmula 203 STJ; dobra da Defensoria com a base por ramo — LC 80/94 arts. 44/89/128; contagem penal do CPP 798 explicitada nos prazos de 2 e 5 dias), 13 suavizações e 66 melhorias (pegadinhas de preclusão/plantão, gatilhos, enxugamento). A coerência de família também **alinhou 5 skills antigas** (habeas-corpus, liberdade-provisoria-relaxamento, embargos-de-declaracao, preparacao/transcricao-audiencia) e o agente dosimetria-pena (espelhado no template)
- **Onda ALTA de skills criminais (15 novas)** — varredura de amplitude da prática criminal (4 fases mapeadas contra o inventário; 38 lacunas confirmadas lendo as skills existentes) e geração da onda prioritária: **tribunais superiores** (`recurso-especial-criminal`, `recurso-ordinario-hc`, `agravo-em-resp-re`, `agravo-regimental`, `embargos-prequestionamento`, `hc-tribunais-superiores` — completa a cadeia recursal que parava no 2º grau) + **prática diária de alto risco** (`audiencia-de-custodia`, `acesso-autos-investigacao` SV 14, `restituicao-coisas-apreendidas`, `excecoes-processuais`, `audiencia-inquiricao-testemunhas` CPP 212/214, `extincao-punibilidade-prescricao`, `execucao-provisoria-pena` Res. CNJ 417, `medida-seguranca-desinternacao`, `habilitacao-acesso-autos`). Padrão das existentes (type: prompt, gatilhos "Aciona com:", estrutura forense, seção "Apoie-se em" reusando agentes/BPs, referências cruzadas entre irmãs — ex.: ED-prequestionamento complementa `embargos-de-declaracao` sem duplicar) e **disciplina de citação**: nenhum julgado específico afirmado de memória (exceção: notórios como HC 143.641 e ADPF 347); precedente atual é instrução de pesquisa + `[NÃO VERIFICADO]`. Backlog mapeado: 19 MÉDIA + 4 BAIXA para ondas futuras
- **Operação — os 5 críticos da auditoria operacional:** (1) **dica pós-update corrigida** — apontava para `npx criminalsquad@latest`, pacote **inexistente** no registry público (erro garantido + janela de squatting); agora orienta o fluxo real ("peça `/criminalsquad atualizar`") e a string `updatePreserved` reflete as pastas realmente preservadas (3 locales); (2) **frescor do cache DJEN** — `prazos:hoje`/`prazos:semana`/`intimacoes` imprimem "última captura do DJEN: há N h" e **⚠️ monitoramento desatualizado** quando vazio ou >24h (cache velho respondia silêncio = falsa tranquilidade em prazo penal); a skill repassa o aviso e oferece acionar a varredura; (3) **processo de release** — `npm run release -- patch|minor|major` (`scripts/release.mjs`: bump do package.json + version file, move `[Unreleased]`→`[x.y.z]` datada no CHANGELOG, commit + tag, sem push) + check no `verify` de que package.json ↔ version file andam juntos + seção "Como cortar release" no CONTRIBUTING (sem release, alunos instalam HEAD com versão congelada); (4) **`/criminalsquad atualizar` atualiza também a instalação global** — re-roda `criminalsquad install-global` quando `~/.claude/skills/criminalsquad/` existe (antes a skill/agentes/hook globais ficavam velhos para sempre); (5) **varredura de run morto** — ao iniciar um run, se o `state.json` anterior ficou preso em `running`/`checkpoint` (sessão caiu), o runner avisa, encerra como Abortado (`squad-state fail`), arquiva e registra no `runs.md` (dashboard não fica "trabalhando" para sempre)
- **`state.json` determinístico (harness do produto) — contrato + escritor:** novo **`scripts/squad-state.mjs`** com comandos `init`/`step`/`checkpoint`/`complete`/`fail` que o runner **chama** em vez de montar o JSON na mão — timestamps reais, escrita **atômica** (tmp+rename), desks por índice e saída sempre válida contra o contrato único **`_criminalsquad/core/state.schema.json`** (mesmo shape lido pelo dashboard). O `step --from` colapsa o antigo handoff de dois passos (elimina a classe de bug de transição de estado escrita à prosa). O `runner.pipeline.md` passou a preferir o escritor em todas as transições (com fallback de escrita à mão pelo schema se Node faltar). Testes de ciclo de vida (`squad-state.test.js`) + parity raiz↔template; o `verify` exige o script e o schema no tarball. Espelhado em `templates/scripts/` (chega ao aluno e à casa global via `init`)
- **Gate único de verificação (`npm run verify`) — harness de código:** `scripts/verify.mjs` roda em sequência **lint + test + `tsc -b` do dashboard + higiene do tarball** (`npm pack`). Os testes já travavam sync do `build:ide` e parity raiz↔template; o gate acrescenta o que faltava: type-check do dashboard e checagem do `npm pack` (falha se `_criminalsquad/_memory`/`squads/*/_memory`/`templates/ide-assets` vazarem, ou se faltar `eval-resumo`/version/agentes). Novo teste de **parity do `eval-resumo`** (raiz↔template) na suíte. **CI consertado** (`.github/workflows/ci.yml`): disparava em `master` (o branch é `main`, então nunca rodava) e só fazia lint+test — agora dispara em `main`, instala deps do dashboard e roda `npm run verify`
- **Evals em lote + placar de regressão (finaliza a camada de medição):** `/criminalsquad eval <nome> --all` roda o `avaliador-squad` sobre **todos** os casos-ouro de `_evals/casos/` (juízes isolados, em paralelo) e reporta **placar agregado** (média, mín–máx, aprovados). Novo script determinístico **`npm run eval:resumo [squad]`** (`scripts/eval-resumo.mjs`) lê os `_evals/scores.md` e imprime `Squad | Avaliações | Média | Última | Min–Max | Aprovados`, marcando ⚠️ quando a última nota cai abaixo da média (pega regressão sem gastar IA)
- **Voting também na Verificação da Meta (goal-backward):** para squads cujo output é peça protocolável, o runner despacha `meta_verifiers` verificadores independentes em paralelo (default 1; 3 em squads de maior risco) com **consenso conservador** — o mesmo reforço anti-erro já usado no Citation Gate, agora também na conferência da meta antes de concluir
- **Context engineering — recuperação just-in-time:** o runner passa a carregar contexto sob demanda (lê primeiro o índice `acervo/_index.yaml` e só então os arquivos relevantes; só as best-practices do step; só o delta nos loops; peças longas por seção; subagentes para isolar contexto) em vez de pré-carregar tudo — mantém as janelas enxutas em peças longas
- **Evals de squad (juiz + casos-ouro):** subagente read-only **`avaliador-squad`** pontua o output contra os `success_criteria` do `squad.yaml` (a rubrica — fonte única), com nota por critério, nota geral 0–100 e verdict; comando **`/criminalsquad eval <squad>`** orquestra (output do run ou caso-ouro fictício → juiz isolado → registra em `_evals/scores.md` para pegar regressão). O Arquiteto cria `_evals/` (scores + caso-ouro) ao gerar squads; `defesa-criminal-completa` traz um caso-ouro de exemplo. Implementa a recomendação nº 1 da Anthropic: **medir**
- **Boas práticas de agentes (Anthropic) — orquestração/garantia:** (1) **voting no Citation Gate** — no gate final, N verificadores independentes (`citation_verifiers`, default 3) com consenso conservador (qualquer divergência = pendência), reforçando o anti-alucinação; (2) **verificação goal-backward** — squads declaram `goal` + `success_criteria` no `squad.yaml` e o runner confere o output contra a meta **antes de concluir** (concluir steps ≠ atingir a meta); (3) **relatório de execução auditável** (`RELATORIO.md` por run: etapas, decisões, citações conferidas, ciclos de revisão, verificação da meta) — rastro de confiança/auditoria para o jurídico. O Arquiteto (build/design/persona) passa a gerar `goal`/`success_criteria` (validado no Gate 4); **os 9 squads** já declaram `goal`/`success_criteria` verificáveis
- **Fan-out (paralelismo) ponta a ponta** — o runner agora especifica o `state.json` durante um `parallel_group` (TODOS os agentes do grupo como `working` ao mesmo tempo; `step.label` com a contagem; sem `handoff`) e documenta o **fan-out por itens** (N itens independentes → N subagentes do mesmo agente em paralelo, ex.: cálculo de N prazos, pesquisa de N teses). O **dashboard** representa multi-agente: vários sprites animam como `working` e o rodapé mostra "⚡ N em paralelo" (`getWorkingAgents`). **Adoção:** `gestao-prazos-intimacoes` step-04 calcula **N prazos em paralelo** (um subagente por intimação, fan-in consolidado), mantendo a dupla conferência de regime por prazo. O Arquiteto (design.prompt) passa a oferecer fan-out por steps e por itens
- **2 squads jurídicos novos** (padrão Gate 4, espelhados em `templates/squads/`): **`execucao-penal`** (do cálculo/guia de execução à petição do instituto cabível — progressão, livramento, remição, saída temporária, unificação, indulto/comutação, liberdade provisória; orienta agravo em execução) e **`negociacao-penal`** (ANPP, transação penal, suspensão condicional do processo, colaboração premiada — do cabimento à minuta do acordo). Reusam as skills de execução/negociação e os subagentes especialistas; revisão isolada + Citation Gate + checkpoints
- **Instalação global** (`criminalsquad install-global`) — disponibiliza `/criminalsquad` e o **chefe-roteador em TODAS as conversas do Claude**: cria a casa padrão `~/CriminalSquad/` (squads, agentes e acervo), instala a skill em `~/.claude/skills/` e os agentes em `~/.claude/agents/` (sem sobrescrever agentes seus) e ativa o chefe-roteador via bloco delimitado em `~/.claude/CLAUDE.md`. **Seguro:** idempotente (colapsa blocos duplicados, nunca empilha), faz **backup** (`.bak`) antes de tocar o `CLAUDE.md`, preserva quebras de linha (CRLF no Windows) e resolve o home cross-platform (`%USERPROFILE%` no Windows). O bloco global **só atua em pedidos jurídicos** — ignora conversas fora do domínio

### Changed
- **Chefe-roteador é o modo de operação padrão** (sempre-carregado no `CLAUDE.md`): para qualquer pedido em linguagem natural — **sem digitar `/criminalsquad`** — ele assume e, em tarefas abertas/multi-etapa, conduz um **loop de orquestração visível** (anuncia o plano e reporta cada ciclo). Antes, esse comportamento só existia ao invocar a skill, então o loop "não aparecia" numa conversa comum
- A skill resolve a **raiz do workspace** (projeto atual com `_criminalsquad/`, ou a casa padrão `~/CriminalSquad/`) — o mesmo corpo serve instalação por projeto e global
- **Onboarding agora fecha todas as perguntas** (revisão multi-agente): lista explícita de campos obrigatórios + **Portão de completude mecânico** (`grep '<[^>]+>'` após salvar — antes o gate procurava strings literais que não batiam com os placeholders do seed e passava com o arquivo incompleto); cobre campos órfãos (proposta de valor, agenda, redes); trigger amplo (todas as seções obrigatórias, não só Identidade); seção dedicada de `edit-company`
- **Squads elevados ao padrão "alta performance"** (`recurso-criminal`, `investigacao-acusacao-privada`, `tribunal-juri`, `conteudo-juridico`): revisão roda como **subagente** (contexto fresco, anti-viés), **veredito YAML** estruturado (`verdict`/`fixes`) + **teto de ciclos** (`max_review_cycles: 3`), e `on_reject` que retoma pelo checkpoint humano. No júri, `on_reject` **condicional por fase** (1ª fase→Step 05; plenário→Step 07)
- **`tribunal-juri` agora é distribuído** (estava só no repo, ausente em `templates/squads/`) — passa a chegar ao aluno via `init`/npm
- **Só `/criminalsquad` aparece**: as skills de **desenvolvimento** (`criminalsquad-dev`, `criminalsquad-dashboard-design`) saíram de `.claude/skills/` para `dev-skills/` — assim o Claude Code não as descobre como comandos e o operador do direito vê apenas `/criminalsquad`. Elas seguem versionadas (uso interno) e nunca foram distribuídas (já estavam fora do tarball npm). Guarda continua valendo: `init`/`install-global` copiam só `criminalsquad`
- **Arquiteto cria no padrão de alta performance por padrão** — antes ele *planejava* qualidade mas não a *garantia* ao gerar; agora: o `build.prompt.md` tem **Gate 4 (BLOCKING) de Conformidade & Qualidade Jurídica** (valida revisão isolada como subagente, veredito YAML parseável, `on_reject`+`max_review_cycles`, Citation Gate explícito e checkpoint antes do irreversível) + requisitos jurídicos embutidos nos steps gerados (marcação `[NÃO VERIFICADO]`, acionar `verificador-citacoes`); o `design.prompt.md` ganhou o **pipeline jurídico padrão-ouro** (espelha `defesa-criminal-completa`); e o `architect.agent.yaml` ancora o padrão como princípio. Agentes jurídicos gerados trazem disciplina de citação ("todo argumento tem fundamento", "escopo é lei")

### Fixed
- **Citation Gate explícito** em `recurso-criminal` e `investigacao-acusacao-privada` (peças protocoláveis cheias de precedentes não acionavam o `verificador-citacoes`): a pesquisa marca `[NÃO VERIFICADO]`/`[DIVERGENTE]` e a revisão condiciona o APPROVE ao verificador
- **Instalação global instala o hook do Citation Gate** em `~/.claude/hooks/` + registra `PostToolUse` no `~/.claude/settings.json` (idempotente, com backup, caminho absoluto) — antes o gate determinístico não rodava fora da casa padrão
- `catalog-scout` usava `model: fast` (inválido no Claude Code) → **`haiku`**
- **Runner grava estado terminal** (`status: failed` + `failedAt` + cleanup) ao abortar — antes o `state.json` ficava preso em `running` (dashboard pulsando eterno); dashboard ganhou o status `failed`
- Guard contra **corrida de versão** (`vN`) no fan-out paralelo (evita sobrescrita silenciosa de peça); Playwright `channel: chrome` removido (quebrava o Sherlock no Windows sem Chrome)

#### Revisão + debug (caça-bugs adversarial)
- **Prazos em UTC** (`scripts/orchestra/_lib.mjs`): `today()` usava data UTC — à noite (após ~21h BRT) `prazos:hoje` podia **omitir um vencimento do dia**. Agora usa data **local** (grave numa ferramenta de prazos penais)
- **Backup `.bak` preservado**: `install-global` e `update` não sobrescrevem mais um `.bak` existente em re-execução — o backup mantém o conteúdo **original** do usuário, não uma cópia já modificada
- **Dashboard — feed por squad**: o feed de atividades agora é por-squad (não mistura eventos de squads diferentes nem vaza ao trocar de seleção) e **popula no modo polling** (o `setSnapshot` passou a derivar eventos); o **cronômetro congela** ao concluir/falhar (usa `completedAt`/`failedAt`) em vez de contar para sempre
- **Runner**: a montagem do `state.json` usa as colunas `id`/`name` da `squad-party.csv` (antes derivava de `.agent.md`/`displayName`, quebrando o casamento de agente — os squads usam `.custom.md`); os gates `test -s` agora derivam o caminho do `output.artifacts` do `pipeline.yaml` quando o step não declara `inputFile`/`outputFile` (rede "fail fast" volta a valer nos squads feitos à mão)
- **Onboarding cross-platform**: o gate de completude usa a ferramenta **Grep da IDE** (padrão `<[^>]+>`) em vez de `grep` de shell (que pode falhar no Windows dos alunos)
- **Catálogo de squads** na apresentação da skill atualizado para os 9 squads (+ aponta `/criminalsquad list` dinâmico)
- CLI: `criminalsquad runs` não duplica mais o cabeçalho do squad; recusar reinstalar uma skill/agent já instalado deixou de retornar **exit 1**
- Coerência dos squads novos: `gestao-prazos` step-04 sem o "(inline)" contraditório; `execucao-penal` step-05 sem `on_reject` auto-referente
- **Dashboard — identidade do squad**: o watcher lia `squad.yaml` por uma chave aninhada (`parsed.squad.code`) num YAML que é **top-level**, então caía no fallback e a sidebar mostrava o **nome da pasta + ícone 📋** em vez do `name`/`icon` reais. Corrigido o parse (top-level) e adotada a chave canônica = `code` em `activeStates`/SQUAD_UPDATE/SQUAD_INACTIVE (antes a chave era o nome da pasta) — se algum `code` divergir da pasta, o estado ainda casa. Guarda no `integridade.test.js`: `code` (top-level) deve == nome da pasta em `squads/` e `templates/squads/`

#### Revisão completa adversarial (23 achados confirmados — segurança, bugs, distribuição)
Segurança / LGPD-sigilo:
- **`squads/*/_memory/` versionado** (runs.md/memories.md podem trazer o tema/caso real): agora ignorado no `.gitignore` da raiz **e** no seed do aluno (`_criminalsquad/core/seeds/gitignore`); os runtime da raiz saíram do índice git (o scaffold do produto segue em `templates/squads/*/_memory/`)
- **Dado pessoal no tarball npm**: `_criminalsquad/_memory/` (com `company.md`/`preferences.md` do dev) ia no pacote porque `files[]` whitelistava `_criminalsquad/` inteiro — `files[]` agora é **granular** (`_criminalsquad/core/` + `_criminalsquad/config/`), idem `templates/` (sem `templates/ide-assets/`). Confirmado por `npm pack`: `_memory` e `ide-assets` fora do tarball
- **`runs.md` da raiz** com colunas `Caso | Instituto` (convidava identificador de cliente) alinhado ao schema canônico do runner (`| Data | Run ID | Tema | Output | Resultado |`)

Bugs (HIGH):
- **`init` sobrescrevia skills editadas** pelo usuário (re-rodar `init` apagava edições em `skills/<id>/`): a instalação de skills virou **idempotente** (pula o que já existe, como `update`/`copyCommonTemplates`)
- **Comando `agents install/remove/update` quebrado** (bundle vazio + destino divergente): o registry de agentes passou a usar a **fonte real** (template `claude-code/.claude/agents/*.md`, layout flat) e o **destino real** (`.claude/agents/*.md`); `agents` (list) agora reflete os agentes instalados (sem o `README` índice)

Robustez / bugs (MEDIUM):
- **`update` preservava o `package.json` do usuário** só via `.bak`: agora faz **merge** (mantém scripts/deps do aluno e entrega os do CriminalSquad)
- **`eval-resumo`**: nota `"85/100"` virava `85100` e placeholders (`n/a`, `—`, `TBD`) contavam como `0` — parsing trocado por extração do 1º número (`85/100`→85, `8,5`→8.5, não-numérico ignorado)
- **Dashboard (polling)**: `setSnapshot` agora reconcilia squad removido — limpa o feed órfão (sem vazamento de memória) e a seleção órfã, espelhando o `SQUAD_INACTIVE` do WebSocket
- **Dashboard**: `isValidState` valida o **shape completo** do `state.json` (status no enum, `step` com current/total/label, cada agente com id/name/status/desk) — evita `undefined` no feed e crash da cena Phaser
- **`ide-assets/`** (fonte build-time) não é mais copiada ao projeto do aluno (init/update)
- **Runner — voting**: os knobs `citation_verifiers`/`meta_verifiers` agora são **gerados** pelo Arquiteto (documentados no `build.prompt.md`) e declarados no squad-modelo `defesa-criminal-completa` (`meta_verifiers: 3`); texto do runner esclarece que **N=1 não tem voting** (consenso só em N≥3) e corrige a instrução residual de "Model tiers" (arquivo inexistente)

Higiene (LOW):
- backup do `settings.json` no `install-global` agora grava os **bytes originais** (não uma versão reserializada)
- `.npmignore` `dashboard/test-results/` (era `dashboards/`, plural morto) + `test-results` excluído do copy do dashboard
- removido o `.criminalsquad-version` **stale (0.1.0)** da raiz — fonte única em `templates/` (0.3.0)
- usage strings de skills mostram as duas formas (`install` e `skills install`)
- `FRONTMATTER_RE` do gerador tolera CRLF (Windows) — não derruba mais frontmatter por EOL
- `indexar-acervo`: removido import `existsSync` não usado (raiz + espelho)
- `lint` agora cobre `scripts/` (com globals Node no `eslint.config.js`)
- numeração corrigida na seção "Dashboard Handoff" do runner (dois itens "2")

## [0.3.0] - 2026-06-24

### Added
- **Chefe-roteador** — agente que coordena toda interação em runtime: classifica o pedido e designa (squad existente, agente especialista ou loop ad-hoc), recebe os reports e, quando é recorrente e nada cobre, **propõe criar** um squad (com checkpoint → Arquiteto). Com auditoria (`_criminalsquad/logs/roteamento.jsonl`) e gates mantidos (revisão humana, Citation Gate, checkpoint antes de criar/enviar)
- Comandos amigáveis (o usuário não toca em npm — o Claude roda nos bastidores): `/criminalsquad indexar-acervo`, `/criminalsquad atualizar`, `/criminalsquad prazos` (hoje/semana) e `/criminalsquad intimações`
- Gerador de **fonte única multi-IDE**: `templates/ide-assets/` + `npm run build:ide` (um corpo → todas as IDEs e as cópias do repo); teste de paridade trava a drift
- Validação de **wikilinks** no indexador do acervo (consciente do vault; `--strict` para CI)

### Changed
- `.gitignore` do projeto: criação/**merge idempotente** no `init` — garante `acervo/casos/` e `_criminalsquad/logs/` mesmo se o usuário já tiver um `.gitignore`; o seed passa a ser a fonte única (removido o `templates/.gitignore` divergente)

### Fixed
- **Gate de Citações no Windows** — o hook não reconhecia caminhos com `\` e ficava inerte; normalizado (cross-platform)
- 6 bugs de revisão adversarial: preferências JSON parciais (merge com o `.md`), merge dos `settings.json` de IDE no `update`, `ides` não-array, normalização de extensões no indexador (citações com ponto), embeds de mídia em wikilinks, e isolamento de teste
- `npm audit`: brace-expansion 5.0.4 → 5.0.6 (ReDoS/DoS, dependência só de dev)

## [0.2.0] - 2026-06-21

Primeira versão do **CriminalSquad** (fork autoral do opensquad, focado em advocacia
criminal) após a onda de melhorias de engenharia. Resume as mudanças notáveis desde
o início do projeto.

### Added
- **Gate de Citações anti-alucinação** — hook `verifica-citacoes` (PostToolUse, bloqueia peças com marcadores pendentes) + subagente read-only `verificador-citacoes`, acionados pelo runner (Citation Gate)
- **Domínio jurídico de 1ª classe** na Discovery (tipo de peça/recurso, polo, fase, prazo, conflito EAOAB) + subagente `catalog-scout` (shortlist de reuso)
- **Secretária jurídica** e integrações de agenda/e-mail/prazos; scripts `scripts/orchestra/` com cache local de intimações (DJEN)
- **Integração opcional com Obsidian** (memória permanente + grafo de conhecimento) + agentes Connector/Librarian/Seeker; skill de transcrição de audiências
- Onboarding por **tipo de instituição e polo**; indexador do acervo; nichos verticais de defesa; tribunal do júri, justiça negocial e analíticos de IA
- `init --skip-deps` e `preferences.json` como fonte canônica de preferências
- Testes de integridade de conteúdo, de CLI, de instalador e de **paridade multi-IDE** (trava drift no CI)

### Changed
- **Loops de revisão como máquina de estados** (veredicto estruturado, teto de ciclos, feedback-delta) + **paralelismo** fan-out/fan-in no pipeline; revisor roda em subcontexto isolado
- **Arquiteto** com gate de reuso bloqueante (reaproveita subagentes/skills antes de criar)
- **CLI deduplicado**: `registry.js` + `frontmatter.js` + `path-safe.js` + `resource-cli.js` de fonte única; `bin` com tabela de comandos
- **Update incremental**: pula cópia e `.bak` de arquivos não alterados (antes gerava `.bak` para todos)
- Os 3 merges de `settings.json` (vscode/qwen/gemini) unificados em `mergeJsonSetting`
- Instalação de dependências resiliente (cada passo é best-effort, não aborta o init)

### Fixed
- Validação fantasma de `performance_mode` na Discovery (gate sempre-falho)
- Dashboard: README alinhado ao fluxo real (experimental), remoção de código morto e do campo `gender` órfão; resíduo `opensquad-dashboard` no lock
- Versão dessincronizada entre `package.json` e `.criminalsquad-version`

## [0.1.15] - 2026-04-10

### Added
- Gemini CLI IDE support — templates, settings merge, and Playwright MCP config
- Qwen Code IDE support — templates, settings merge, and Playwright MCP config
- Trae IDE support — rules and MCP config templates
- New IDEs listed in README compatibility table (PT-BR and EN)
- Post-init instructions for Gemini CLI, Qwen Code, and Trae
- Locale strings for new IDE setup steps (en, es, pt-BR)
- Tests covering new IDE template installation and settings merge

## [0.1.14] - 2026-03-30

### Added
- Resend email skill — send emails through Resend's MCP server (single, batch, scheduling, attachments)
- "Para quem?" and "O que da pra fazer?" sections in README
- IDE working directory note in README English section

### Fixed
- `.gitignore` and `.npmignore` updated to exclude test artifacts and local settings

## [0.1.13] - 2026-03-30

Major release with security, transparency, and token optimization improvements — inspired by the thorough audit from [@morpheus-zion](https://github.com/morpheus-zion) in [#18](https://github.com/bbpropulse/criminalsquad/issues/18). Thank you for the contribution that directly shaped this release.

### Added
- SECURITY.md covering browser sessions, image hosting, skills, checkpoints, and tokens
- Token cost warning displayed in README and during `npx criminalsquad init`
- "About" section in README with maintainer disclosure
- Skill security checklist in CONTRIBUTING.md
- Token consumption impact section in CONTRIBUTING.md
- Browser session consent — Sherlock now asks before persisting cookies
- Bash validation gates in runner (pre-step input + post-step output)
- `/criminalsquad` command files for Cursor and OpenCode IDEs
- OpenCode template with AGENTS.md
- Template designer skill with image-based design and guidelines
- Squad memory system (`memories.md` + `runs.md` per squad)
- File links included when requesting user approval
- All squad creation options contextualized with examples
- Investigation always offered as an option during discovery

### Changed
- **Dashboard fully rewritten from PixiJS to Phaser** with pixel art sprite assets
- Isometric office layout with furniture, walls, and depth sorting
- Gender-aware character assignment with proper sprite sheets
- Image hosting migrated from catbox.moe to imgBB (user-owned API key)
- Sherlock refactored from monolithic prompt into platform-specific extractors
- Squad creation refactored into phased orchestration (discovery → design → build)
- Investigation depth reduced from 5-10 to max 3 posts per profile
- Checkpoint description rewritten (semantic instructions, not programmatic guards)
- Antigravity templates rewritten (rules + workflows, inline subagent fallback)
- Hardcoded model names removed — generic tiers across all IDEs
- Template designer uses direct image rendering instead of a server
- Template duplication eliminated — init/update copy from canonical sources
- Architect uses natural language, auto-detects tools
- Research phase tightened with efficiency directives
- Runner handoff sleep delay (3s) removed
- image-generator skill renamed to image-ai-generator
- Artificial agent count limit removed in design phase
- Performance modes removed, agile philosophy adopted
- `README.md` protected from overwrite on init
- `.bak` backups created before overwriting on update

### Fixed
- Squad name collisions prevented; template preview links fixed
- Round-robin gender-aware character assignment in dashboard
- Template designer runs server in background on Windows

## [0.1.12] - 2026-03-22

### Added
- Isometric office scene with depth sorting and furniture placement
- Phaser-based dashboard replacing PixiJS procedural rendering
- AgentSprite with avatar animations and status badges
- Template designer skill with HTTP server, image guidelines, and base templates
- Platform-specific Sherlock extractors (split from monolithic prompt)
- Phased squad creation workflow (discovery, design, build)
- Gender-aware sprite selection with male/female character sets
- Memory system: auto-generated `memories.md` and `runs.md` per squad
- Dashboard design skill Phase 7: full sprite review workflow
- Pre-step input validation and post-step output validation bash gates in runner

### Changed
- Dashboard rewritten from PixiJS to Phaser game engine
- Sherlock prompt split into platform-specific files
- Architect communication style updated to natural language
- Template duplication eliminated: init/update now copy from canonical sources
- Character sprites renamed to Male1-4/Female1-6

### Fixed
- Gray backgrounds removed from sprites
- Dashboard skill loop guards and trigger scope tightened
- Memory step ordering and reverse-chron log clarified

## [0.1.11] - 2026-03-20

### Added
- Dashboard visual upgrade: Gather.town-level detail with name cards, desk accessories, and detailed workstations
- Character sprites rewritten at 48x48 with shading, working, and done poses
- Image generator skill added

### Changed
- Runner output path transformation improved for task-based execution chains

### Fixed
- Instagram publisher: use `CAROUSEL` instead of `CAROUSEL_ALBUM`
- Update command now auto-imports skills with env requirements
- Runner: fix sequencing, placeholder convention, and checkpoint outputFile paths

## [0.1.10] - 2026-03-18

### Fixed
- Dashboard validates `state.json` before sending to frontend

## [0.1.9] - 2026-03-17

### Added
- Dashboard HTTP polling fallback with `/api/snapshot` REST endpoint
- `runs` command for execution history
- State.json archival to output folder after pipeline completion
- CLI execution logger
- ESLint and GitHub Actions CI
- CONTRIBUTING.md with philosophy, contribution paths, and governance

### Changed
- SquadWatcher plugin callers converted to async IO
- Process-local metadata cache added for agents and skills
- Dashboard file watching switched from `fs.watch` to chokidar

### Fixed
- Dashboard StrictMode WebSocket error resolved
- 5 failing test expectations corrected
- Node v24 CI test pattern fixed (single glob)
- `ERR_FS_CP_EINVAL` prevented when running init from inside the criminalsquad repo

## [0.1.8] - 2026-03-12

_Version bump only (syncing criminalsquad-version to 0.1.7)._

## [0.1.7] - 2026-03-12

_Tag-only release._

## [0.1.5] - 2026-03-11

### Added
- Cursor IDE support: locale strings, rules, MCP config, and `.cursorignore`
- VS Code Copilot IDE support with `mergeVsCodeSettings()` and `criminalsquad.prompt.md`
- Codex agent skill for `$criminalsquad` in Codex CLI

### Changed
- Removed OpenCode and Windsurf from init IDE options

### Fixed
- Missing `skills/` directory entry in Cursor rules template
- Architect: blocking outputFile path check in Gate 3
- Pipeline PATH RULE: researcher outputFile must use `output/`, not `pipeline/data/`
- Architect: creator owns angle generation for news-based squads

## [0.1.4] - 2026-03-05

### Added
- CriminalSquad Skills Engine and related workflows
- Single bilingual README template (PT/EN)

### Changed
- CriminalSquad renamed to CriminalSquad in README template

## [0.1.1] - 2026-03-05

### Fixed
- Normalize bin path and repository URL in `package.json`

## [0.1.0] - 2026-02-23

### Added
- Initial release
- npm package with `npx criminalsquad init` CLI
- Architect agent (Atlas) and Pipeline Runner
- Instagram Content Creator squad (definition, 4 agents, 6-step pipeline)
- Prompt templates: researcher, writer, reviewer, analyst
- SquadOS skill entry point and CLAUDE.md instructions
- 30 template files with full test coverage

[Unreleased]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.13...HEAD
[0.1.13]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.12...v0.1.13
[0.1.12]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.11...v0.1.12
[0.1.11]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.10...v0.1.11
[0.1.10]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.9...v0.1.10
[0.1.9]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.5...v0.1.7
[0.1.5]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.1...v0.1.4
[0.1.1]: https://github.com/bbpropulse/criminalsquad/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/bbpropulse/criminalsquad/releases/tag/v0.1.0
