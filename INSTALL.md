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

Se você quer o CriminalSquad disponível em **qualquer conversa do Claude** (sem precisar
abrir uma pasta de projeto específica), rode **uma vez**:
```bash
npm install -g ./criminalsquad-0.1.0.tgz   # (ou via git, ver Opção 2)
criminalsquad install-global
```
Isso:
- cria a **casa padrão** `~/CriminalSquad/` (seus squads, agentes e acervo);
- instala a skill `/criminalsquad` em `~/.claude/skills/` e os agentes em `~/.claude/agents/`
  (**não** sobrescreve agentes seus que já existam);
- ativa o **chefe-roteador** em todas as conversas via um bloco delimitado em
  `~/.claude/CLAUDE.md` (idempotente — rodar de novo só atualiza o bloco).

Depois, em qualquer conversa do Claude: digite `/criminalsquad` para o menu, ou só descreva
o que precisa — o chefe-roteador assume e, em tarefas de várias etapas, conduz o loop
visível. Para **remover** do global, apague o bloco "CriminalSquad" em `~/.claude/CLAUDE.md`
(e, se quiser, as pastas em `~/.claude/skills/criminalsquad` e os agentes copiados).

> ⚠️ **Verificação de citações:** o hook determinístico anti-alucinação roda **só dentro da
> casa padrão/projeto** (em `squads/*/output/`). Em conversas **fora dela** NÃO há esse hook —
> confira manualmente toda súmula/precedente antes de usar. Para a checagem automática,
> trabalhe dentro de `~/CriminalSquad/` (ou de uma pasta de projeto).

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
