# Guia do Aluno — Instalar e usar o CriminalSquad

Bem-vindo(a)! Este guia te coloca de pé com o **CriminalSquad** — uma plataforma multi-agente
de IA para **advocacia criminal**, dentro do **Claude Code**. A ideia é você aprender a usar o
Claude para **escalar o trabalho jurídico** (peças, pesquisa, prazos, gestão).

> **Material do Criminal Lab** — Núcleo de Prática Criminal com Claude, compartilhado para o seu uso.
> **Não repasse o material a terceiros.**

## 1. Pré-requisitos (instale uma vez)

- **Node.js 20+** — https://nodejs.org (versão **LTS**).
- **Claude Code** — https://claude.com/claude-code
- **GitHub CLI** (`gh`) — https://cli.github.com — facilita o acesso ao repositório privado.
- **Acesso ao repositório:** o mentor te adiciona como colaborador de leitura.

Autentique o GitHub uma vez:
```bash
gh auth login
```

---

## Modelo A (recomendado) — instalar **global** e chamar em **cada projeto**

Você instala o `criminalsquad` **uma vez** na máquina e usa em **qualquer pasta**.

### A.1 Instalar o comando global (uma vez)
```bash
npm install -g "git+https://github.com/bbpropulse/criminalsquad.git"
```
> Com o `gh auth login` feito, o `git+https` autentica sozinho. Alternativa com chave SSH:
> `npm install -g "git+ssh://git@github.com/bbpropulse/criminalsquad.git"`

Confira:
```bash
criminalsquad
```
(deve imprimir a ajuda do comando).

### A.2 Criar um projeto por caso/pasta
```bash
mkdir caso-fulano && cd caso-fulano
criminalsquad init          # escolha "Claude Code" quando perguntar a IDE
```
Isso monta o CriminalSquad **dentro daquela pasta** (agentes, skills, acervo, perfil).

### A.3 Usar
Abra a pasta no Claude Code e digite:
```
/criminalsquad
```
Na primeira vez, o assistente faz o **onboarding** (tipo de instituição, polo, OAB/cargo, comarcas).

### A.4 Atualizar
- **O comando global** (quando o mentor publicar melhorias): repita
  `npm install -g "git+https://github.com/bbpropulse/criminalsquad.git"`.
- **Um projeto existente** (puxar a nova versão do framework para a pasta, **preservando seus dados**):
  ```bash
  cd caso-fulano
  criminalsquad update
  ```

---

## Modelo B (alternativa) — clonar e usar direto

Bom se você prefere **um único workspace** em vez de uma pasta por caso.
```bash
gh repo clone bbpropulse/criminalsquad
```
Abra a pasta `criminalsquad` no Claude Code e digite `/criminalsquad`. Atualizar: `git pull`.
(Para **usar** assim, não precisa de `npm install` — o Claude Code lê tudo dos arquivos.)

---

## Primeiros comandos (qualquer modelo)

```
/criminalsquad                                 # menu principal
/criminalsquad rode o squad defesa-criminal-completa
use o agente secretaria-juridica               # triagem de e-mail, prazos, audiências (rascunho-primeiro)
use o agente acervo-busca                       # pesquisa no acervo, sempre citando as fontes
```
Você também pode só **descrever** o que precisa em português que o **Arquiteto** monta o squad.

## (Opcional) E-mail, agenda, Obsidian e terminal

- **E-mail e agenda:** conecte os MCPs de **Gmail** e **Google Calendar** no `.mcp.json` do projeto
  (vem só o `playwright`). Sem isso, as funções existem mas não acessam sua caixa/agenda reais.
  (O DJEN usa API pública, sem credencial.)
- **Obsidian (memória permanente):** rode a skill `obsidian-vault` para **conectar** (ou **replicar**)
  o seu vault. Opcional — dica: aponte vários projetos para **um mesmo vault** para não duplicar o acervo.
- **Comandos de terminal:** `npm run prazos:hoje`, `npm run prazos:semana`, `npm run indexar-acervo`.

## Manter atualizado, sem perder seus dados

Seus dados privados (perfil, casos, agenda, vault, estados) ficam **fora do versionamento**
(gitignored). Então `criminalsquad update` (Modelo A) ou `git pull` (Modelo B) atualizam o
**framework** sem tocar no que é seu.

## Conformidade (leia)

- Toda peça é **rascunho técnico** — a **revisão final do(a) advogado(a) é obrigatória**.
- **Nada de citação inventada:** o sistema verifica súmulas/precedentes (gate `verificacao-citacoes`).
- **Sigilo/LGPD:** dados de cliente ficam em `acervo/casos/` (privado, fora do git). **Nunca** commite dados de cliente.
- Publicidade conforme a OAB (Provimento 205/2021).

## Problemas comuns

- **`/criminalsquad` não aparece** → abra a **pasta do projeto** no Claude Code e reinicie o app.
- **`criminalsquad: command not found`** → o install global não entrou no PATH; reabra o terminal ou confira o `npm bin -g`.
- **O install/clone pede senha e falha** → o repo é privado; rode `gh auth login` (ou configure chave SSH).
- **`node: command not found`** → instale o Node.js 20+ e reabra o terminal.
- **E-mail/agenda não respondem** → falta conectar os MCPs de Gmail/Calendar.
