---
name: execucao-relatorio-cliente
description: >-
  Use para converter diagnóstico de execução penal já aprovado em relatório claro ao cliente ou
  família, com próximos passos e incertezas. Não use para compartilhamento de dados, promessa de
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
  aliases: [ep-parecer-cliente-linguagem-simples]
  positive_triggers: ["relatorio_cliente", "explicar_execucao", "atualizacao_familia"]
  negative_triggers: ["promessa_resultado", "diagnostico_nao_aprovado", "dado_de_terceiro"]
  eval_case_ids: ["ep-canon-relatorio-001"]
  type: "prompt"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
---

# Relatório claro ao cliente ou família

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

## Pré-condições

- identidade, autorização e destinatário confirmados;
- diagnóstico, cálculo e estratégia revisados pelo profissional;
- escopo de sigilo e informações compartilháveis definidos;
- nenhuma citação ou conclusão material pendente.

## Estrutura

1. situação atual em linguagem simples;
2. o que foi conferido e quais documentos sustentam a explicação;
3. oportunidades e riscos, sem promessa;
4. cenários de datas identificados como projeções condicionais;
5. documentos ou decisões ainda faltantes;
6. providências realizadas e próximas etapas;
7. responsável, prazo estimado interno e canal seguro de retorno;
8. aviso de que mudanças no processo ou na lei podem alterar a análise.

## Regras

Explique termos técnicos, não infantilize, não omita risco relevante e não transfira ao cliente a validação de citação/cálculo. Retire dados de terceiros e detalhes estratégicos cuja divulgação possa prejudicar o caso.

## Guard de entrada

Destinatário sem identidade, vínculo ou autorização confirmados gera `status: bloqueado`. Não revele nem resuma o caso; registre apenas que a comunicação precisa ser escalada ao profissional por canal seguro.

Saída é rascunho comunicacional para revisão e autorização humana antes do envio.
