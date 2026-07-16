---
name: ep-pena-multa
description: >-
  Analisa execução da pena de multa, pagamento, parcelamento, hipossuficiência, extinção e reflexos
  na execução penal. Não use para conclusão definitiva sem autos suficientes, fonte atual ou revisão
  profissional.
metadata:
  lifecycle: "preview"
  legal_freshness_gate: "required"
  source_package: "execucao-penal-skills-v3-alta-performance-73"
  source_archive_sha256: "4bbd6e2bd667f344a166dae5e14897ff893dc4959d95ddbad30b41e21d21c16a"
  imported_at: "2026-07-09"
  category: benefícios executórios
  version: "3.0.0"
  risk_level: "r3"
  input_types:
    - calculo_defensivo
    - atestado_pena
    - certidao_disciplinar
    - conduta
    - remicao
    - decisoes
    - laudos
  output_types:
    - cabimento
    - requisitos
    - riscos
    - documentos_faltantes
    - pedido_recomendado
  triggers:
    - beneficio
    - progressao
    - livramento
    - indulto
    - comutacao
    - saida
    - domiciliar
    - alvara
  compatible_modes:
    - parecer_interno
    - minuta_protocolavel
    - checklist
    - resumo_cliente
    - saida_estruturada
  next_skills_sugeridas:
    - ep-matriz-prova-alegacao
    - ep-revisor-probatorio
    - ep-peca-progressao-regime
  type: "prompt"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-ep-pena-multa"]
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["beneficio", "progressao", "livramento", "indulto", "comutacao", "saida", "domiciliar", "alvara"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Missão

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Executar a competência especializada `ep-pena-multa` em execução penal brasileira, com foco em prova, cálculo quando aplicável, risco, providência concreta e revisão humana.

# Quando usar

- Quando a tarefa envolver analisa execução da pena de multa, pagamento, parcelamento, hipossuficiência, extinção e reflexos na execução penal.
- Quando houver documento, decisão, omissão ou evento processual que exija análise específica dessa matéria.
- Quando a questão puder afetar liberdade, regime, prazo, extinção, benefício, cálculo, sanção, sigilo ou integridade da pessoa presa.

# Entradas necessárias ou desejáveis

- Documentos do processo relacionados ao tema.
- Sentença/acórdão, guia, cálculo, atestado e decisões relevantes quando impactarem pena ou benefício.
- Certidões, relatórios, laudos, comprovantes, movimentações e manifestações processuais disponíveis.
- Normas e jurisprudência atualizadas fornecidas pelo sistema ou pelo usuário, quando a conclusão depender de fonte vigente.

# Protocolo obrigatório

1. Identificar o ato, omissão, documento ou evento que originou a análise.
2. Separar fato documentado, alegação, inferência jurídica e tese.
3. Verificar documentos essenciais e lacunas bloqueantes.
4. Identificar impacto prático na liberdade, regime, prazo, benefício, extinção, sanção, saúde ou sigilo.
5. Criar conclusões seguras e conclusões dependentes de confirmação.
6. Indicar providência operacional: peticionar, pedir certidão, retificar, recorrer, requisitar documento, comunicar órgão ou revisar cálculo.
7. Sugerir próximas skills compatíveis.
8. Exigir revisão humana antes de protocolo, decisão estratégica ou comunicação sensível.

# Saída obrigatória

Responder em JSON conforme contrato v3 desta skill, podendo acrescentar minuta ou checklist quando o modo exigir.


---

# Produção, auditoria e integração v3

Ler [o protocolo v3 completo](references/protocolo-v3.md) sempre que gerar saída final, integrar esta skill a um pipeline ou avaliar sua qualidade. O recurso contém o contrato estruturado, a taxonomia, os gates de bloqueio, a proteção contra instruções maliciosas em documentos, as regras de sigilo/LGPD, os testes de aceitação, o red team e os modos de entrega.
