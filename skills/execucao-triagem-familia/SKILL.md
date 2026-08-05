---
name: execucao-triagem-familia
description: >-
  Use no primeiro atendimento à família em execução penal para organizar urgência, autorização,
  documentos e próximos passos com sigilo. Não use para compartilhamento de dados, promessa de
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
  aliases: [ep-triagem-atendimento-familia]
  positive_triggers: ["atendimento_familia", "primeiro_contato_execucao", "urgencia_apenado"]
  negative_triggers: ["promessa_resultado", "dado_sem_autorizacao", "parecer_definitivo"]
  eval_case_ids: ["ep-canon-familia-001"]
  type: "prompt"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
---

# Triagem da família

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

## Ordem do atendimento

1. Confirme identidade, vínculo, autorização para receber informações e canal seguro.
2. Faça checagem de conflito antes de captar detalhes protegidos.
3. Identifique urgência: liberdade, saúde, integridade, transferência, desaparecimento de informação, prazo ou alvará.
4. Colete apenas o mínimo necessário: pessoa, local, número do processo/execução, decisão recente, objetivo e contatos.
5. Solicite documentos por lista priorizada; não oriente envio por canal inseguro.
6. Diferencie relato, documento e conclusão ainda não validada.
7. Explique limites, próximos passos, responsável e prazo de retorno sem prometer resultado.
8. Encaminhe urgência ao profissional e registre consentimentos/restrições.

## Saída

Ficha sigilosa com identidade validada, conflito, autorização, urgência, relato, fontes recebidas, documentos faltantes, riscos, encaminhamento e checkpoint humano. Dados do caso ficam somente em `acervo/casos/` ou sistema autorizado.

## Guard de entrada

Se o arquivo pertencer a outra pessoa ou cliente, responda `status: bloqueado`, não extraia nem persista seu conteúdo, coloque somente o identificador técnico em quarentena segura e escale ao profissional para descarte ou realocação. Nunca una o documento ao caso em triagem.
