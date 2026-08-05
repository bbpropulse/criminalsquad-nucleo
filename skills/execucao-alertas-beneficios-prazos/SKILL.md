---
name: execucao-alertas-beneficios-prazos
description: >-
  Use para gerar alertas internos recorrentes de benefícios e prazos da carteira de execução penal a
  partir de dados já validados. Não use para compartilhamento de dados, promessa de resultado ou
  decisão jurídica sem autorização.
metadata:
  schema_version: "5"
  lifecycle: "pilot"
  canonical: true
  version: "4.0.0"
  risk_level: "r4"
  legal_cutoff: "2026-07-09"
  last_verified: "2026-07-09"
  legal_freshness_gate: required
  aliases: [ep-alertas-beneficios-prazos]
  positive_triggers: ["alerta_de_beneficio", "prazo_da_carteira", "monitoramento_execucao"]
  negative_triggers: ["calculo_sem_regra", "peticao", "protocolo_automatico"]
  eval_case_ids: ["ep-canon-alertas-001"]
  type: "prompt"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
---

# Alertas de benefícios e prazos

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

Monitore eventos futuros sem transformar projeção em certeza jurídica. Carregue antes `execucao-penal-alta-performance`.

## Entradas obrigatórias

- identificador pseudonimizado do caso;
- benefício ou evento monitorado;
- data projetada e memória do cálculo aprovado;
- `regra_id`, fonte oficial, data de consulta e responsável pela validação;
- data da última atualização do processo e antecedências desejadas.

## Fluxo

1. Recuse registro sem fonte, memória ou revisão humana do cálculo.
2. Compare a atualização do processo com a versão que originou a projeção.
3. Gere alertas em camadas: revisão de dados, preparo documental e data crítica.
4. Marque como `revalidacao_obrigatoria` quando mudar pena, data-base, falta, remição, custódia, unificação, lei ou decisão.
5. Agrupe duplicatas por caso, benefício, regra e versão do cálculo.
6. Entregue fila priorizada; não envie mensagem nem crie evento externo sem checkpoint.

## Saída

Para cada alerta: `caso_id`, `evento`, `data_projetada`, `antecedencia`, `regra_id`, `calculo_versao`, `dados_atualizados_em`, `prioridade`, `status`, `blockers`, `proxima_acao`, `responsavel` e `revisao_humana_obrigatoria: true`.

Bloqueie se o processo estiver desatualizado, a data divergir do sistema oficial ou a regra jurídica não tiver sido revalidada no uso atual.
