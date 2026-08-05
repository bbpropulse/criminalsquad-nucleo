# Instalar / Reproduzir o CriminalSquad em outro computador

O CriminalSquad é distribuído como um pacote npm com um instalador (`criminalsquad init`)
que **reproduz todo o sistema** em qualquer pasta/máquina.

## O que o instalador reproduz
- skill `/criminalsquad` (ponto de entrada no Claude Code)
- dezenas de subagentes jurídicos (`.claude/agents/`)
- dezenas de skills (peças criminais + integrações + herdadas)
- dezenas de best-practices (incl. as jurídicas) + catálogo
- 6 squads jurídicos prontos (`squads/`)
- `acervo/` (estrutura da base de conhecimento local)
- `_criminalsquad/_memory/company.md` (perfil do escritório, com placeholders) e `.gitignore`
- `.mcp.json` (Playwright) e o dashboard

## Requisitos (no computador de destino)
- Node.js >= 20
- Claude Code (ou outra IDE suportada)
- Acesso à internet para `npm install` e `playwright install`

## Gerar o pacote (uma vez, nesta máquina)
```bash
cd app
npm pack            # gera criminalsquad-0.1.0.tgz (o instalador portátil)
```

## Opção 1 — Pacote portátil (.tgz)  [recomendado: privado e offline]
Copie o `criminalsquad-0.1.0.tgz` para o outro computador e:
```bash
npm install -g ./criminalsquad-0.1.0.tgz
mkdir meu-escritorio && cd meu-escritorio
criminalsquad init          # escolha idioma + IDE (Claude Code)
npm install
npx playwright install chromium
```
Abra a pasta no Claude Code e digite `/criminalsquad`.

## Instalação global — `/criminalsquad` em TODAS as conversas  [recomendado p/ uso pessoal]

Se você quer o CriminalSquad disponível em **qualquer conversa** — sem precisar abrir uma
pasta de projeto —, rode **uma vez**:
```bash
npm i -g github:bbpropulse/criminalsquad-nucleo
criminalsquad install-global
```

O comando instala **as duas IDEs suportadas**, Claude Code e Cursor. Ele instala **apenas a
superfície de comando**: nenhuma pasta de dados é criada fora do projeto — cada pasta em que
você usar o `/criminalsquad` vira um projeto autocontido e se inicializa sozinha.

**No Claude Code (`~/.claude/`)**

| o quê | onde |
|---|---|
| skill `/criminalsquad` | `~/.claude/skills/criminalsquad/` |
| agentes especialistas | `~/.claude/agents/` — **nunca sobrescreve** um agente seu |
| gate de citações | `~/.claude/hooks/` + entrada `PostToolUse` no `settings.json` |
| chefe-roteador | bloco delimitado em `~/.claude/CLAUDE.md` (**sempre ativo**) |

**No Cursor (`~/.cursor/`)**

| o quê | onde |
|---|---|
| skill `criminalsquad` | `~/.cursor/skills/criminalsquad/` |
| comando `/criminalsquad` | `~/.cursor/commands/criminalsquad.md` |
| subagentes especialistas | `~/.cursor/agents/` — **nunca sobrescreve** um agente seu |
| gate de citações | `~/.cursor/hooks/` + `afterFileEdit` no `~/.cursor/hooks.json` |
| chefe-roteador | `~/.cursor/rules/criminalsquad.mdc` (**sob demanda**, `alwaysApply: false`) |

Tudo é **idempotente**: rodar de novo atualiza o que é do produto e preserva o que é seu.
Arquivos que já existiam (`settings.json`, `hooks.json`, `CLAUDE.md`) são copiados para
`.bak` antes de qualquer alteração.

### Duas diferenças deliberadas entre as IDEs

**O chefe-roteador é sempre ativo no Claude Code e sob demanda no Cursor.** No Claude Code
ele vive no `CLAUDE.md`, que já é carregado em toda conversa. No Cursor, forçar
`alwaysApply: true` injetaria contexto jurídico em projeto que não é jurídico — com
`false`, a regra entra quando o pedido casa com a descrição dela.

**O gate de citações global apenas alerta; quem bloqueia é o do projeto.** Globalmente ele
roda como `afterFileEdit` (Cursor) e `PostToolUse` (Claude Code) — observa e avisa. O
bloqueio *antes da escrita* (`preToolUse` com `failClosed`) é instalado pelo
`criminalsquad init` **dentro do projeto**, onde faz sentido. Um gate global bloqueante
barraria escrita em qualquer pasta da máquina, jurídica ou não — e gate que atrapalha é
gate que o usuário desliga no dia seguinte.

Depois disso, em qualquer conversa: digite `/criminalsquad` para o menu, ou só descreva o
que precisa — o chefe-roteador assume e, em tarefas de várias etapas, conduz o loop visível.

**Para remover do global:** apague o bloco "CriminalSquad" em `~/.claude/CLAUDE.md` e o
arquivo `~/.cursor/rules/criminalsquad.mdc`; se quiser, remova também
`~/.claude/skills/criminalsquad`, `~/.cursor/skills/criminalsquad`,
`~/.cursor/commands/criminalsquad.md` e os agentes copiados.

> ⚠️ **A conferência final de citações é sempre humana.** O gate é rede de segurança
> determinística, não substituto de revisão: ele pega marcador de pendência e manifesto
> ausente ou desatualizado, mas não confere se a súmula existe. Nenhuma peça vai a
> protocolo sem leitura do(a) advogado(a) responsável.

## Opção 2 — Repositório Git privado
```bash
# nesta máquina (uma vez):
cd app && git init && git add -A && git commit -m "chore: CriminalSquad inicial"
# crie um repositório PRIVADO (GitHub/GitLab) e faça o push

# no outro computador:
git clone <seu-repo-privado> criminalsquad && cd criminalsquad
npm install && npx playwright install chromium
```
A pasta clonada **já é** o sistema completo. Use direto, ou rode `criminalsquad init`
em outra pasta para criar um workspace novo a partir dela.

## Opção 3 — npm  [opcional]
Publicar permitiria `npx criminalsquad init` de qualquer lugar.
> ℹ️ Produto **proprietário do Criminal Lab** (peças, agentes e best-practices jurídicas
> são ativos do escritório). Recomenda-se **registry privado** ou pacote/git privados
> para manter o conteúdo restrito ao seu uso.

## Pós-instalação (em cada computador)
1. Preencha os campos `<...>` em `_criminalsquad/_memory/company.md` (nome, OAB, comarcas).
2. O `acervo/` já vem com jurisprudência e teses-modelos. Para **complementar com material próprio** (jurisprudência de tribunais locais, suas peças-modelo, legislação do nicho), coloque os arquivos na pasta certa e peça **`/criminalsquad indexar-acervo`** — ele reindexa sozinho, sem comandos técnicos. (Opcional.)
3. Defina a ferramenta de e-mail/agenda (Gmail/Calendar MCP ou Resend) na 1ª execução de um squad que use.

## Notas
- `criminalsquad init` é **idempotente**: não sobrescreve arquivos já existentes (seguro re-rodar).
- Dados sensíveis de cliente ficam em `acervo/casos/` e `squads/*/output/` — já ignorados pelo `.gitignore`, nunca versionados.
