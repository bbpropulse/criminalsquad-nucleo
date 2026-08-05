---
name: obsidian-vault
description: >-
  Use para criar ou operar obsidian vault: Ativa/configura a integração FACULTATIVA com um vault
  Obsidian, que vira a memória permanente e a base de conhecimento do escritório (casos, audiências,
  transcrições, dados, comunicações, CRM, acervo). Conecta a um vault existente ou replica a
  estrutura num vault novo. Gera o `vault-map.yaml`. Sem isso, o sistema segue local (padrão). Não
  use para mutação de produção, duplicação de capability ou dependência presumida sem validação.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [obsidian, memoria, conhecimento, configuracao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "system-orchestration"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-obsidian-vault"]
  risk_level: "r2"
  delivery_type: "system-artifact"
  freshness_policy: "dependency-state-current"
  positive_triggers: ["obsidian-vault", "obsidian vault"]
  negative_triggers: ["mutação de produção, duplicação de capability ou dependência presumida sem validação"]
  guard_triggers: ["capability equivalente não auditada", "dependência, ferramenta ou permissão presumida", "teste usa dado real/sigiloso ou contamina o ambiente"]
---

# Integração com Obsidian (setup)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `system-orchestration`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, escopo, ambiente e critérios de aceite.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** reusar antes de adaptar e adaptar antes de criar; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; artefato versionado e critérios de aceite; logs/testes sem segredos e dependências declaradas; riscos, rollback e próxima ação.
- **Gate:** mutação externa/produção sem aprovação. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

## When to use

Quando o(a) advogado(a) quiser **ligar** (ou desligar) a integração com Obsidian — para ter
uma memória permanente e um segundo cérebro jurídico. É **opcional**: sem isso, o CriminalSquad
funciona normalmente com `acervo/` + `_criminalsquad/_memory/`. Ver a best-practice
`integracao-obsidian`.

## Modos

- **Conectar** — você já usa um vault Obsidian; mapeamos suas pastas **sem renomear** nada.
- **Replicar** — começar do zero: criamos a estrutura jurídica dentro de um vault novo/escolhido.
- **Desativar** — esvaziar `vault_root` no `vault-map.yaml` (volta ao modo local).

## Workflow

1. **Perguntar o modo** (Conectar / Replicar / Desativar) e o **caminho absoluto** do vault.
2. **Conectar:** liste as pastas existentes do vault e **case por aliases** com os tokens-papel
   (ex.: `Jurisprudência`/`Julgados`/`Acórdãos` → `{{jurisprudencia}}`; `Clientes`/`Pessoas` →
   `{{pessoas}}`; `Casos`/`Processos` → `{{casos}}`). Pastas sem correspondência ficam como estão.
3. **Replicar:** crie a estrutura jurídica (`Acervo/`, `Casos/`, `Pessoas/`, `Audiências/`,
   `Transcrições/`, `Comunicações/`, `Dados/`, `Memória/`, `Templates/`, `Meta/`) e templates base.
4. **Gerar `_criminalsquad/_memory/vault-map.yaml`** (a partir do exemplo em
   `_criminalsquad/core/seeds/vault-map.example.yaml`), preenchendo `vault_root` e os tokens.
5. **Mostrar o mapa e confirmar** com o usuário (`AskUserQuestion`): "sua pasta de teses se chama
   `Modelos`, não `Teses`?" — ajustar conforme a resposta.
6. **(Opcional) Semear conhecimento:** oferecer copiar o `acervo/` atual para `{{acervo}}` do vault,
   e migrar a memória (`company.md`, estados) para `{{memoria}}`.
7. **Lembrar do sigilo** (passo obrigatório): o vault é **local e privado**; **não** versione no git
   nem copie `{{casos}}`/`{{comunicacoes}}` para o repositório do produto.

## Output

- `_criminalsquad/_memory/vault-map.yaml` (gitignored) com `vault_root` + tokens.
- No modo Replicar: a árvore de pastas + templates no vault.
- A partir daí, todos os agentes resolvem os tokens automaticamente (best-practice `integracao-obsidian`).

## Conformidade

- O vault **nunca** entra no repositório do CriminalSquad (sigilo/LGPD).
- Confirme o `vault_root` antes de escrever; no modo Conectar, **não renomeie** pastas do usuário.
