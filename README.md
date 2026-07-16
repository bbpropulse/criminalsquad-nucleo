# CriminalSquad

Plataforma multi-agente de IA para **advocacia criminal** — direto da sua IDE.

CriminalSquad é um framework de orquestração multi-agente focado em **Direito Penal e Processual Penal** e na gestão do escritório/gabinete. Já vem equipado com subagentes jurídicos especialistas, **520 skills com contrato v5 auditável**, best-practices de domínio (inclusive **por nicho**), um **acervo de conhecimento local** e squads jurídicos prontos — e ainda permite criar novos squads, agentes e peças sob demanda (via **Arquiteto**), descrevendo o que você precisa em português. **Toda entrega é um rascunho técnico para revisão humana obrigatória.**

## O que é um Squad?

Um squad é uma equipe de agentes de IA que colaboram em uma tarefa. Cada agente tem um papel específico. Eles executam em pipeline com **checkpoints**, onde o agente pausa e pede sua aprovação antes de continuar. Os checkpoints são instruções no pipeline — o enforcement real de permissões depende da IDE host (ex.: Claude Code, Cursor).

Exemplo — squad **Defesa Criminal Completa** (da citação à resposta à acusação):

- **Triagem** organiza o caso, checa conflito de interesses (EAOAB 17) e classifica o nicho
- **Leitor dos autos** resume a denúncia e o inquérito
- **Pesquisador** levanta jurisprudência (STJ/STF) e consulta o acervo local
- **Redator** elabora a peça (preliminares CPP 395/397 + mérito + rol de testemunhas)
- **Revisor** confere preclusões, nulidades e o gate de citações antes da entrega

## Para quem?

Para profissionais do Direito Criminal — **advocacia (escritórios e autônomos), Ministério Público e Defensoria Pública** — que querem acelerar peças, pesquisa e gestão, sempre com revisão humana e conformidade ética. No onboarding, o sistema pergunta o **tipo de instituição** e o **polo de atuação** (defesa, acusação ou assistente) e se adapta a eles.

- **Defesa criminal** — da citação à resposta à acusação; recursos (apelação, RESE, embargos); habeas corpus; execução penal; tribunal do júri
- **Acusação / assistência** — análise e elaboração de denúncia/queixa, requerimento de investigação, atuação do assistente de acusação
- **Gestão do escritório/gabinete** — monitoramento do DJEN, prazos e intimações, triagem e onboarding de clientes
- **Autoridade digital** — conteúdo jurídico para redes respeitando o Provimento 205/2021 da OAB

## O que dá pra fazer?

- **Peças e recursos criminais** — resposta à acusação, alegações finais/memoriais, apelação, RESE, embargos, habeas corpus, queixa-crime, agravo em execução, revisão criminal
- **Pesquisa jurídica híbrida** — jurisprudência (STJ/STF), súmulas e teses, consultando o **acervo local antes da web**, sob o gate anti-alucinação `verificacao-citacoes`
- **Nichos verticais** — playbooks de defesa para Lei de Drogas, violência doméstica, crimes de trânsito, crimes tributários/econômicos e crimes contra a honra
- **Tribunal do júri** — 1ª fase (pronúncia, impronúncia, absolvição sumária, desclassificação) e plenário (tese e quesitação)
- **Execução penal** — progressão de regime, livramento condicional, remição, saída temporária, unificação de penas, indulto/comutação
- **Justiça penal negocial** — ANPP, suspensão condicional do processo, transação penal, colaboração premiada
- **Gestão de prazos e intimações** — captura do DJEN, cálculo de prazos penais e agenda
- **Triagem e onboarding** — intake, conflito de interesses (EAOAB 17), honorários
- **Conteúdo de autoridade** — carrosséis e posts jurídicos com gate ético embutido
- **E mais** — qualquer fluxo jurídico criado sob demanda pelo Arquiteto

## Para alunos

Recebeu acesso ao repositório? Siga o **[GUIA-ALUNO.md](GUIA-ALUNO.md)** — instalação passo a passo e primeiros comandos (do `git clone` ao `/criminalsquad`).

## Instalação

**Pré-requisitos:** Node.js 20+ e acesso ao repositório privado (`gh auth login`). Alunos: siga o **[GUIA-ALUNO.md](GUIA-ALUNO.md)**.

Instale o comando **global** (uma vez por máquina):

```bash
npm install -g "git+https://github.com/bbpropulse/criminalsquad.git"
```

Depois, em **cada pasta de projeto/caso**, gere o ambiente:

```bash
criminalsquad init        # escolha sua IDE (ex.: Claude Code)
```

Abra a pasta na sua IDE e digite `/criminalsquad`. O comando `/criminalsquad` só fica disponível dentro de uma pasta inicializada.

Para atualizar: reinstale o comando global (mesmo comando acima) e rode `criminalsquad update` em cada projeto (preserva seus dados).

## IDEs Suportadas

| IDE | Status |
|-----|--------|
| Claude Code | Disponível |
| Cursor | Disponível |
| VS Code + Copilot | Disponível |
| Codex (OpenAI) | Disponível |
| Open Code | Disponível |
| Antigravity | Disponível |
| Gemini CLI | Disponível |
| Qwen Code | Disponível |
| Trae | Disponível |

## Acervo de Conhecimento (consultado antes da web)

O `acervo/` é a base local que os agentes de pesquisa consultam **antes** de irem à internet:

- `acervo/jurisprudencia/` — STF/STJ (informativos por ano), tribunais locais
- `acervo/teses-modelos/` — banco de teses criminais por eixo (drogas, júri, dosimetria, nulidades...)
- `acervo/doutrina/`, `acervo/legislacao/`
- `acervo/casos/` — **dados de cliente (sigiloso, fora do versionamento)**

Depois de adicionar material, atualize o índice:

```bash
npm run indexar-acervo
```

## Ferramentas e Integrações

| Área | Ferramenta / skill |
|------|--------------------|
| Intimações / DJEN | `djen-api-oficial`, `monitor-dje` (API oficial do DJEN) |
| Pesquisa | acervo local + STJ/STF (web), sob `verificacao-citacoes` |
| Documentos | `ocr-autos-pdf` (leitura de autos), geração/edição de peças (Word/PDF), `assinatura-peca` |
| E-mail | `email-juridico` — Gmail via MCP, ou Resend |
| Agenda | `agenda-juridica` — Google Calendar via MCP |
| Redes (autoridade) | `publicacao-redes` — sob o gate ético do Provimento 205/2021 |

> As integrações que dependem de credenciais (Gmail, Calendar, Resend) são configuradas na 1ª execução de um squad que as utilize.

## O Arquiteto e o Sherlock

O CriminalSquad é **extensível**: o que não vem pronto, você pede — e o sistema constrói.

- **Arquiteto** — cria e evolui o sistema sob demanda. Descreva em português o que precisa e ele projeta novos **squads, agentes, skills e peças**, pesquisando na web, consultando as best-practices e **reaproveitando** os componentes que já existem antes de criar algo novo.
- **Sherlock** — o investigador que **pesquisa na web** durante a criação: analisa perfis de referência (Instagram, LinkedIn, X/Twitter, YouTube) e temas, extraindo padrões reais que alimentam o Arquiteto. Serve tanto para o squad de conteúdo de autoridade quanto para levantar contexto antes de montar um novo componente.

## Criando e Executando Squads

Abra o menu:

```
/criminalsquad
```

Para criar um squad, selecione a opção (ou descreva o que precisa) e o **Arquiteto** faz algumas perguntas, **reaproveita** os agentes e skills já existentes, projeta o squad e configura tudo. Você aprova o design antes de qualquer execução.

Para executar:

```
/criminalsquad rode o squad <nome-do-squad>
```

O squad executa automaticamente, pausando nos checkpoints onde o agente pede sua aprovação.

### Exemplos

```
/criminalsquad
/criminalsquad crie um squad que monta a resposta à acusação a partir da denúncia e do inquérito
/criminalsquad quero um squad que varre o DJEN, calcula prazos penais e agenda os atos
/criminalsquad crie um squad de recurso criminal (apelação/RESE) com pesquisa no acervo
/criminalsquad crie um squad de defesa em tribunal do júri (1ª fase e plenário)
/criminalsquad roda o squad defesa-criminal-completa
```

## Comandos

| Comando | O que faz |
|---------|-----------|
| `/criminalsquad` | Abre o menu principal |
| `/criminalsquad help` | Mostra todos os comandos |
| `/criminalsquad create` | Cria um novo squad |
| `/criminalsquad run <nome>` | Executa um squad |
| `/criminalsquad list` | Lista seus squads |
| `/criminalsquad edit <nome>` | Modifica um squad |
| `/criminalsquad skills` | Navega pelas skills instaladas |
| `/criminalsquad indexar-skills` | Atualiza e valida o catálogo de descoberta |
| `/criminalsquad contract-skills` | Aplica o contrato operacional v5 (estrutural) a skills novas e reindexa |
| `/criminalsquad auditar-skills` | Mede contratos, hard fails e evidência comportamental |
| `/criminalsquad edit-company` | Edita o perfil da instituição |
| `/criminalsquad install <nome>` | Instala uma skill do catálogo |
| `/criminalsquad uninstall <nome>` | Remove uma skill instalada |

### Qualidade das skills

O catálogo separa disponibilidade de evidência: `active` não significa desempenho comprovado. `contracted` possui estrutura, blockers, guards e especificações de contrato; `verified` exige envelope versionado, execução comportamental, artefatos hasheados, baseline, revisão independente e regressão; `certified` acrescenta a revisão humana exigida pelo risco e pacote limpo. Arquiteto, Sherlock e sidecars só priorizam `verified`/`certified` quando `high_performance_eligible: true`.

O runtime recalcula o gate pelos arquivos reais antes de injetar uma skill: `preview`, `quarantined` e `legacy` são bloqueadas; `pilot` exige opt-in e fallback; `contracted` exige supervisão explícita. Alterar apenas o rótulo do frontmatter não promove nem habilita invocação implícita.

A descoberta também é progressiva: `search-skills` consulta localmente as 520 entradas e devolve no máximo uma shortlist compacta, sem carregar os 597 KB do índice completo nem os bodies das skills no prompt.

## Conformidade e Ética (obrigatória)

- **Revisão humana obrigatória.** Toda peça/parecer é "hipótese a confirmar" — a revisão final do(a) profissional é indispensável antes de protocolar.
- **Verificação de citações.** Nenhuma súmula, precedente ou tese citado de memória: tudo passa pela best-practice `verificacao-citacoes` (há **sanções reais** por jurisprudência inventada por IA).
- **Sigilo e LGPD.** Dados de cliente/assistido nunca em repositório público (`acervo/casos/` é gitignored).
- **Moldura ética conforme a instituição.** OAB + Provimento 205/2021 (advocacia), CNMP (Ministério Público), LC 80/94 (Defensoria). Conflito de interesses (art. 17 EAOAB) é checado na triagem.

## Custo de Tokens

As stacks pagas (ex.: Claude Code com Claude Pro/Max, API da OpenAI) consomem tokens a cada execução — o volume depende do número de agentes, da complexidade do pipeline e do modelo. Stacks como Google Antigravity (free tier) ou OpenCode com LLMs locais (Ollama, LM Studio) permitem uso sem custo de tokens. Geração de imagens e navegação de perfis (para conteúdo de autoridade) são as operações mais intensivas. Monitore o consumo na sua IDE ou no painel do provedor.

## Privacidade e Sessões de Navegador

O **Sherlock** usa um navegador headless (Playwright) para pesquisar na web e analisar perfis de referência (Instagram, LinkedIn, X/Twitter, YouTube) — na criação de squads e na produção de conteúdo de autoridade.

- **Login manual:** na primeira vez que uma plataforma exige login, o CriminalSquad pede para você entrar manualmente e pergunta se deseja salvar a sessão.
- **Cookies persistentes:** se autorizado, ficam em `_criminalsquad/_browser_profile/` (nunca commitado — `.gitignore`).
- **Revogar:** apague `_criminalsquad/_browser_profile/` para remover as sessões salvas.

## Sobre

CriminalSquad é um **produto proprietário do Criminal Lab**, voltado à prática do Direito Criminal brasileiro. Nasceu da necessidade real de acelerar a produção de peças, a pesquisa jurídica e a gestão do escritório/gabinete com agentes de IA — sempre sob revisão humana e conformidade ética.

## Licença

Software **proprietário — Criminal Lab**. Uso restrito conforme autorização do titular; não redistribuir sem permissão. Consulte o [INSTALL.md](INSTALL.md) para as formas de instalação.

---

> **English:** CriminalSquad is an AI multi-agent framework for **Brazilian criminal-law practice** (defense, prosecution, and public defenders), running inside your IDE. It ships with specialized legal subagents, criminal-pleading skills, domain best-practices (including per-niche playbooks), a local knowledge base (`acervo/`), and ready-made legal squads — and can build new ones on demand via the **Architect**. All outputs are technical drafts requiring **mandatory human review**. Interface and outputs are in Portuguese (Brazil). Proprietary software — Criminal Lab.
