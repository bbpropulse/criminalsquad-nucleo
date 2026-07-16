---
name: execucao-dashboard-carteira
description: >-
  Use para especificar um painel interno e pseudonimizado da carteira de execução penal, com
  prioridades, blockers, eventos e revisão. Não use para compartilhamento de dados, promessa de
  resultado ou decisão jurídica sem autorização.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r3"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-dashboard-carteira]
  positive_triggers: ["painel_execucao", "carteira_execucao", "fila_prioridades"]
  negative_triggers: ["dados_publicos", "calculo_juridico", "envio_automatico"]
  eval_case_ids: ["ep-canon-dashboard-001"]
  type: "prompt"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
---

# Dashboard da carteira de execução

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

## Princípios

- minimização de dados, controle de acesso, pseudonimização e trilha de auditoria;
- cada indicador deriva de artefato validado, nunca de inferência invisível;
- prioridade combina impacto sobre liberdade, urgência, prazo, confiabilidade e esforço;
- projeção jurídica exibe regra, versão, última atualização e status de revisão.

## Visões mínimas

1. fila crítica: liberdade, excesso, saúde, alvará, prazo e regime mais gravoso;
2. casos bloqueados por documento, fonte, cálculo ou revisão;
3. benefícios em preparação, sob análise, protocolados e decididos;
4. divergências entre sistema oficial e cálculo auditado;
5. freshness de dados, regras e autoridades;
6. retrabalho, tempo, correções humanas e hard fails por competência.

## Contrato de dados

Use apenas IDs internos; armazene referência segura para o caso sigiloso. Cada cartão informa `caso_id`, `evento`, `status`, `prioridade`, `dados_em`, `regra_id`, `calculo_versao`, `blockers`, `responsavel`, `prazo` e `proxima_acao`.

## Guard de entrada

Se a entrada trouxer nome, CPF, endereço, prontuário, número integral ou outro identificador desnecessário, responda `status: bloqueado`, não gere o painel e solicite pseudonimização e proveniência. Não copie o dado sensível para logs, exemplos ou saída de erro.

Esta skill especifica e audita o painel. Criar alertas, integrações ou automações recorrentes exige aprovação explícita do usuário e testes de sigilo.
