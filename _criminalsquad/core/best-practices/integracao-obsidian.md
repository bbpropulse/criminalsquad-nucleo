---
id: integracao-obsidian
name: "Integração com Obsidian (memória e conhecimento — FACULTATIVA)"
whenToUse: |
  TRANSVERSAL — qualquer agente que leia/escreva conhecimento, memória, casos, audiências,
  transcrições, dados ou registros de comunicação. Define COMO o CriminalSquad usa (ou não)
  um vault Obsidian como camada durável. É OPCIONAL: se não houver vault configurado, tudo
  funciona localmente em `acervo/` e `_criminalsquad/_memory/` (comportamento padrão).
version: "1.0.0"
---

# Integração com Obsidian — Memória e Conhecimento (FACULTATIVA)

O CriminalSquad pode operar **com** ou **sem** Obsidian. Quando ativado, um **vault Obsidian local do(a) advogado(a)** vira a **memória permanente** e a **base de conhecimento** do escritório/gabinete — acumulando, ao longo do tempo e ligados por wikilinks: **casos, audiências, transcrições, dados, registros completos de comunicação, pessoas (CRM), acervo e diário/memória**. Quando desativado, nada muda: o sistema usa `acervo/` e `_criminalsquad/_memory/` como hoje.

> **Regra de ouro:** o vault é **opcional** e **local/privado**. Ele **nunca** é versionado no repositório do CriminalSquad. Casos, comunicações e dados de cliente que vão para o vault ficam **só** na máquina do(a) profissional (sigilo/LGPD).

## Três estados

| Estado | Quando | Onde vive o conhecimento |
|---|---|---|
| **Desativado (padrão)** | Não há `vault-map.yaml` (ou `vault_root` vazio) | `acervo/` + `_criminalsquad/_memory/` (local ao projeto) |
| **Conectar** | O(a) advogado(a) já usa um vault Obsidian | O vault existente, mapeado **sem renomear** nada |
| **Replicar** | Quer começar um vault do zero | Estrutura jurídica criada dentro de um vault novo/escolhido |

A configuração e a troca de estado são feitas pela skill **`obsidian-vault`** (detecta o vault, gera o mapa, cria a estrutura).

## O mapa (`vault-map.yaml`) e a resolução de tokens

O arquivo **`_criminalsquad/_memory/vault-map.yaml`** (gitignored — caminho privado) tokeniza as pastas do vault. Modelo em `_criminalsquad/core/seeds/vault-map.example.yaml`. Cada agente, ao iniciar:

1. Lê `vault-map.yaml`. Se **ausente ou `vault_root` vazio** → modo **Desativado** (usa as pastas locais; sem erro).
2. Se presente → resolve os **tokens-papel** `{{casos}}`, `{{audiencias}}`, `{{transcricoes}}`, `{{comunicacoes}}`, `{{acervo}}`, `{{memoria}}`, etc. para os nomes reais de pasta do vault, **antes** de ler/gravar.

**Substitua APENAS os tokens-papel da tabela.** Nunca toque em `{{date}}`, `{{processo}}`, `{{Nome}}` ou outros placeholders de template.

### Tokens-papel (jurídicos)

| Token | Papel | Sigilo |
|---|---|---|
| `{{acervo}}` (e `{{jurisprudencia}}`, `{{teses}}`, `{{doutrina}}`, `{{legislacao}}`) | Conhecimento jurídico reutilizável | público ao escritório |
| `{{casos}}` | Autos, andamentos e estratégia por processo | **SIGILOSO** |
| `{{pessoas}}` | CRM: clientes, juízes, promotores, peritos, testemunhas | **SIGILOSO** |
| `{{audiencias}}` | Notas e briefings de audiências/sessões | **SIGILOSO** |
| `{{transcricoes}}` | Transcrições de audiências, depoimentos, reuniões | **SIGILOSO** |
| `{{comunicacoes}}` | Registros de e-mail/contato (triagem, follow-ups) | **SIGILOSO** |
| `{{dados}}` | Planilhas, anexos, evidências | conforme o caso |
| `{{memoria}}` / `{{diario}}` | Estados dos agentes, decisões, diário do escritório | privado |
| `{{templates}}`, `{{meta}}` | Modelos e configuração do vault | — |

## Como os agentes usam (quando ativado)

- **Memória permanente:** estados de agente (ex.: `states/secretaria.md`), decisões e o diário passam a viver em `{{memoria}}` — persistem entre sessões e ficam pesquisáveis/linkáveis.
- **Captura contínua:** os outputs do dia a dia se acumulam no lugar certo — `triagem-email` → `{{comunicacoes}}`; `preparacao-audiencia` → `{{audiencias}}`; transcrições → `{{transcricoes}}`; novo cliente → `{{pessoas}}`; novo julgado/tese → `{{acervo}}`.
- **Wikilinks:** ligue com `[[...]]` para formar o grafo (`[[Tese — nulidade da busca]]` ↔ `[[HC 123.456 STJ]]` ↔ `[[Caso 2024-031]]` ↔ `[[Cliente Fulano]]`). Prepara o terreno para os agentes de grafo (Connector/Librarian/Seeker).
- **Pesquisa:** a best-practice `pesquisa-jurisprudencial` continua valendo — acervo (no vault, se ativo) **antes** da web; toda citação passa por `verificacao-citacoes`.

## Quality Criteria

- [ ] O agente checou `vault-map.yaml` e degradou para **local** se ausente (sem quebrar)?
- [ ] Resolveu **apenas** os tokens-papel (não tocou em `{{date}}`/`{{processo}}` etc.)?
- [ ] Conteúdo sigiloso (`{{casos}}`, `{{comunicacoes}}`, `{{pessoas}}`) ficou **só no vault local**, nunca no repo?
- [ ] Onde fez sentido, criou **wikilinks** em vez de texto solto?

## Anti-Patterns

1. **Exigir** Obsidian — é opcional; o padrão é funcionar sem ele.
2. **Versionar** o vault (ou copiar casos/comunicações para o repositório do produto) — quebra o sigilo.
3. Resolver tokens que não são papéis (`{{date}}`, `{{Nome}}`) — corrompe templates.
4. Renomear as pastas do advogado no modo **Conectar** — o mapa adapta-se ao layout existente.
5. Tratar o vault como obrigatório num squad — sempre haver o fallback local.
