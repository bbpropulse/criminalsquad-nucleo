---
name: agenda-semanal
description: >-
  Use para preparar e executar, com checkpoint, agenda semanal: Monta a visão da semana cruzando
  audiências e compromissos do Google Calendar com os prazos processuais correntes (DJEN/cálculo),
  destacando conflitos (duas audiências no mesmo horário, prazo no dia de audiência) e o que precisa
  ser preparado. Port do "weekly-agenda". Não use para compartilhamento de dados, promessa de
  resultado ou decisão jurídica sem autorização.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [agenda, prazos, planejamento, gestao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-agenda-semanal"]
  risk_level: "r4"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  positive_triggers: ["agenda-semanal", "agenda semanal"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
---

# Agenda Semanal

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `client-operations`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** identidade/representação e canal autorizado.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** verificar autorização, conflito, urgência e minimização de dados; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; resumo operacional sem promessa de resultado; urgências, pendências, responsável e prazo; checkpoint de autorização/revisão.
- **Gate:** comunicação externa sem aprovação. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

## When to use

Para uma visão consolidada da semana (segunda a domingo): audiências, prazos penais,
reuniões e diligências, com alertas de conflito. Acionada pela `secretaria-juridica`
("o que tenho essa semana?") — tipicamente na segunda de manhã ou na sexta para a semana seguinte.

## Inputs

- **Calendar:** eventos da semana via `agenda-juridica` (Google Calendar MCP).
- **Prazos:** radar de prazos — `_criminalsquad/_memory/djen-tracker.jsonl` (cache local, quando
  existir) e/ou squad `gestao-prazos-intimacoes`; cálculo por `gestao-prazos-processuais`.
- **Perfil/estado:** `company.md` e o post-it da `secretaria-juridica`.

## Workflow

1. **Listar eventos** de segunda a domingo (audiências, reuniões, diligências, sustentações).
2. **Cruzar os prazos penais** que vencem na semana (recurso, RESE, apelação, embargos, defesa
   prévia, contrarrazões), com a contagem correta (dias úteis, art. 798 CPP; dobro para
   Defensoria) — usar `gestao-prazos-processuais`.
3. **Detectar conflitos e riscos:** duas audiências no mesmo horário/comarcas distantes; prazo
   vencendo no **mesmo dia** de uma audiência; dia sobrecarregado; prazo sem peça iniciada.
4. **Montar o dia a dia** (um bloco por dia: **Compromissos** + **Prazos/Atos**).
5. **Prioridades e preparação:** o que exige `preparacao-audiencia`, quais peças precisam começar
   já, e onde há folga.

## Output Format

`AAAA-MM-DD — Agenda da Semana.md`:
- **Semana em resumo** — contagem de audiências/prazos, dias críticos, **conflitos** em destaque.
- **Por dia (seg–dom)** — Compromissos · Prazos/Atos.
- **Prioridades da semana** e **Preparação necessária** (audiências a preparar, peças a iniciar).

## Conformidade

- Prazo é dado crítico: **nunca** estimar sem `gestao-prazos-processuais`; marcar com folga.
- Sigilo nas descrições (`etica-oab-sigilo`). Saída é insumo para conferência humana.
