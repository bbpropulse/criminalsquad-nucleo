---
name: ep-data-base-analyzer
description: >-
  Use para identificar, validar ou impugnar data-base na execução penal. Não use para escolha
  automática de lei, fração, marco ou consequência jurídica.
metadata:
  lifecycle: "preview"
  legal_freshness_gate: "required"
  source_package: "execucao-penal-skills-v3-alta-performance-73"
  source_archive_sha256: "4bbd6e2bd667f344a166dae5e14897ff893dc4959d95ddbad30b41e21d21c16a"
  imported_at: "2026-07-09"
  category: cálculo penal
  version: "3.0.0"
  risk_level: "r4"
  input_types:
    - sentenca
    - acordao
    - guia_recolhimento
    - calculo_oficial
    - atestado_pena
    - certidao_prisao
    - remicao
    - falta_grave
  output_types:
    - calculo_defensivo
    - memoria_calculo
    - divergencias
    - cenarios
    - beneficios_vencidos
  triggers:
    - calculo
    - data_base
    - fracao
    - remicao
    - detracao
    - progressao
    - livramento
    - termino
    - excesso
  compatible_modes:
    - parecer_interno
    - minuta_protocolavel
    - checklist
    - resumo_cliente
    - saida_estruturada
  next_skills_sugeridas:
    - ep-revisor-calculo
    - ep-beneficios-vencidos-detector
    - ep-peca-impugnacao-calculo
  type: "prompt"
  schema_version: "5"
  quality_profile: "legal-calculation"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-ep-data-base-analyzer"]
  delivery_type: "audit-calculation"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["calculo", "data_base", "fracao", "remicao", "detracao", "progressao", "livramento", "termino", "excesso"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["regra, fonte oficial ou aplicabilidade não confirmada", "data ou valor material ausente/conflitante", "motor sem teste compatível ou memória reproduzível"]
  engines: ["fraction-date"]
---

# Missão

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-calculation`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** modalidade do cálculo e pergunta exata.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** validar schema e recusar input incompleto ou conflitante; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; resultado e memória de cálculo reproduzível; regra_id, fontes, versão do motor e hash dos inputs; divergências, cenários e campo de revisão humana.
- **Gate:** pedido para declarar consequência jurídica automaticamente. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Analisar a data-base aplicável a cada benefício, verificando origem, alterações, efeitos de falta grave, nova condenação, regressão, progressão e erros no cálculo oficial.

# Quando usar

- Quando a data-base estiver controvertida.
- Em pedido de progressão, livramento, remição ou indulto.
- Após falta grave, nova condenação ou regressão.
- Quando o cálculo oficial usa data-base sem fundamentação clara.

# Entradas necessárias ou desejáveis

- Cálculo oficial.
- Atestado de pena.
- Decisões de progressão/regressão.
- Decisões de falta grave.
- Guias e novas condenações.
- Linha do tempo executória.

# Protocolo obrigatório

1. Identificar a data-base oficial indicada no cálculo.
2. Localizar o evento que teria originado ou alterado a data-base.
3. Verificar se há decisão fundamentada para alteração.
4. Separar data-base por benefício, quando os efeitos forem diferentes.
5. Analisar impacto de falta grave, nova condenação, progressão ou regressão.
6. Identificar se houve aplicação automática indevida.
7. Gerar data-base defensiva e, se necessário, cenários alternativos.
8. Indicar consequência prática sobre progressão, livramento, remição, indulto ou término.
9. Apontar documentos necessários para confirmar.

# Fontes normativas e jurisprudenciais a verificar

- Constituição Federal, LEP, Código Penal, Código de Processo Penal e legislação penal especial aplicável.
- Lei vigente na data do fato e lei vigente na data da análise, com avaliação de direito intertemporal.
- Atos normativos do CNJ, normas locais da execução penal e regras administrativas da unidade, quando relevantes.
- Jurisprudência atualizada do STF, STJ e tribunal local, separando precedente vinculante de precedente persuasivo.
- Decreto presidencial de indulto/comutação vigente, quando a matéria envolver clemência penal.

# Saída obrigatória

Responder preferencialmente em JSON, usando o padrão abaixo. Quando a tarefa exigir texto jurídico, colocar o texto dentro de `resultado.texto` ou `resultado.minuta`.

```json
{
  "skill": "ep-data-base-analyzer",
  "status": "concluido | concluido_com_ressalvas | bloqueado",
  "resultado": {
    "data_base": {
      "oficial": "",
      "origem_oficial": "",
      "defensiva": "",
      "beneficios_afetados": [],
      "eventos_que_alteraram": [],
      "eventos_que_nao_deveriam_alterar": [],
      "divergencias": [],
      "impacto_em_dias": ""
    }
  },
  "premissas": [],
  "fontes_documentais": [],
  "incertezas": [],
  "riscos": [],
  "documentos_faltantes": [],
  "proximas_acoes": [],
  "revisao_humana_obrigatoria": true
}
```

# Regras de segurança e antifalucinação

- Não inventar fatos, datas, penas, decisões, documentos, fundamentos legais ou precedentes.
- Separar rigorosamente: fato documental, inferência jurídica, tese defensiva e recomendação prática.
- Não afirmar que um benefício está vencido sem demonstrar as premissas de cálculo e a fonte documental.
- Quando houver dúvida, baixa legibilidade, documento ausente ou conflito entre documentos, marcar `revisao_humana_obrigatoria: true`.
- Não substituir a atuação do advogado responsável; entregar análise/minuta para conferência técnica humana.
- Antes de citar lei, súmula, tema repetitivo, repercussão geral, resolução ou decreto, exigir verificação da vigência e da aplicabilidade temporal.
- Sempre indicar documentos faltantes, riscos de indeferimento e próximos passos operacionais.
- Não misturar informações de processos, pessoas executadas ou clientes distintos.

# Critérios de qualidade

- A resposta deve ser útil para uma decisão prática imediata do operador do direito.
- A resposta deve ser auditável por documento, página, evento, data ou campo estruturado.
- A resposta deve evitar doutrina genérica quando o caso exigir cálculo, prova ou providência operacional.
- A resposta deve indicar o nível de confiança e os pontos que dependem de revisão humana.
- A análise deve diferenciar efeitos de data-base para progressão, livramento, indulto e comutação.


# Camada avançada obrigatória

Esta skill deve operar como competência de um criminalista sênior em execução penal. A resposta não pode ser apenas descritiva. Ela deve entregar produto técnico, auditável e acionável.

## Princípios de atuação

1. **Liberdade como eixo decisório:** toda análise deve perguntar se há excesso de execução, benefício vencido, regime mais gravoso, alvará pendente, cálculo incorreto ou restrição sem base legal suficiente.
2. **Premissa antes da conclusão:** antes de dizer que algo cabe ou não cabe, explicitar quais premissas foram usadas.
3. **Documento antes da afirmação:** fato sem documento deve ser tratado como alegação, não como fato processual.
4. **Cálculo antes da estratégia:** em execução penal, tese sem cálculo costuma ser incompleta.
5. **Data-base como ponto de controle:** sempre que a skill tocar em benefício, regressão, falta grave, remição, livramento ou indulto, verificar se a data-base usada é a correta para aquele efeito.
6. **Direito intertemporal:** se houver lei nova, alteração da LEP, decreto anual, mudança jurisprudencial ou fato antigo, separar norma vigente na data do fato, norma vigente na execução e eventual retroatividade benéfica ou irretroatividade gravosa.
7. **Tese principal e tese subsidiária:** sempre que houver risco de indeferimento, oferecer rota alternativa juridicamente compatível.
8. **Pedido operacional:** quando a skill gerar providência, ela deve indicar o ato concreto necessário: retificar cálculo, emitir novo atestado, requisitar certidão, intimar direção, expedir alvará, juntar PAD, abrir vista ao MP, realizar audiência, requisitar prontuário, etc.
9. **Controle de risco:** sinalizar risco processual, probatório, recursal, jurisprudencial, operacional e ético.
10. **Revisão humana obrigatória:** toda conclusão que afete liberdade, regressão, prazo, cálculo, saúde ou alvará deve exigir revisão humana.

## Padrão de confiança

- **Confiança alta:** há documento claro, data identificada, fonte precisa e coerência com o restante do processo.
- **Confiança média:** há documento, mas a informação depende de interpretação, cálculo, tese controvertida ou confronto com outro documento.
- **Confiança baixa:** documento ausente, ilegível, contraditório, incompleto ou baseado apenas em relato.
- **Bloqueado:** a tarefa exige conclusão que não pode ser dada sem documento essencial ou sem fonte normativa/jurisprudencial atualizada.

## Padrão de citação documental interna

Quando houver documentos, citar de forma interna e auditável:

```text
DOC-003, p. 12, evento 45, juntado em 10/03/2026
```

Se a fonte não tiver página, usar evento, ID interno, nome do arquivo, trecho ou metadado disponível. Não inventar página, evento ou ID.

## Matriz de risco mínima

Toda saída relevante deve preencher, ainda que de forma resumida:

```json
{
  "risco_calculo": "baixo | medio | alto | nao_aplicavel",
  "risco_prova": "baixo | medio | alto | nao_aplicavel",
  "risco_jurisprudencial": "baixo | medio | alto | nao_aplicavel",
  "risco_operacional": "baixo | medio | alto | nao_aplicavel",
  "risco_urgencia": "baixo | medio | alto | nao_aplicavel"
}
```

## Fontes oficiais e atualização

A skill deve exigir verificação em fonte atualizada quando o tema depender de norma ou jurisprudência vigente. Priorizar: LEP atualizada no Planalto, Código Penal, Código de Processo Penal, legislação especial aplicável, atos do CNJ, jurisprudência e súmulas do STJ, jurisprudência e temas do STF, tribunal local, decreto presidencial de indulto/comutação, normas administrativas estaduais e atos da unidade prisional quando necessários.

## Critérios universais de bloqueio

Bloquear ou devolver `concluido_com_ressalvas` quando:

- faltar sentença, guia, cálculo ou atestado em tarefa de cálculo;
- faltar decisão recorrida em tarefa recursal;
- faltar PAD ou decisão de homologação em tarefa de falta grave;
- faltar laudo/receita/prontuário em urgência de saúde;
- faltar prova de residência/trabalho quando a providência depender disso;
- houver divergência material de datas sem documento apto a resolver;
- houver necessidade de jurisprudência atualizada e a skill não tiver acesso a fonte de atualização;
- a conclusão depender de tese controvertida sem indicação de cenário alternativo.

## Checklist final antes de responder

1. Eu separei fato, prova, inferência e tese?
2. Eu indiquei documentos faltantes?
3. Eu marquei incertezas?
4. Eu conferi a data-base ou expliquei por que ela não se aplica?
5. Eu considerei remição, detração, falta grave e nova condenação quando relevantes?
6. Eu indiquei o efeito prático da conclusão?
7. Eu evitei citação normativa ou jurisprudencial não verificada?
8. Eu formulei pedido/providência operacional quando necessário?
9. Eu mantive revisão humana obrigatória nos pontos sensíveis?
10. Eu evitei promessa de resultado?


# Doutrina operacional da categoria: cálculo penal

As skills desta categoria são de risco máximo. Toda data deve ser explicável. Toda fração deve ter premissa. Todo resultado deve poder ser auditado. A skill deve evitar matemática oculta.

## Regras específicas da categoria

- Converter pena em dias apenas deixando claro o critério adotado e se há regra local/sistema oficial divergente.
- Separar pena total, pena cumprida, pena remanescente e pena considerada para cada benefício.
- Diferenciar data-base para progressão, livramento, indulto/comutação e término quando os efeitos não forem idênticos.
- Não descontar remição pendente como homologada; apresentar cenário separado.
- Não aplicar falta grave sem verificar existência, data, validade mínima e efeito jurídico específico.
- Em conflito de leis no tempo, gerar cenário conservador e cenário defensivo.


# Núcleo técnico avançado desta skill

Data-base é marco estratégico. A skill deve descobrir de onde ela veio, se foi alterada corretamente e para quais benefícios ela produz efeito.

## Perguntas críticas que a skill deve responder

- Qual é a data-base oficial?
- Qual documento fixou essa data?
- Ela decorre de prisão, progressão, regressão, falta grave ou nova condenação?
- A falta grave foi válida?
- A data-base serve para qual benefício?
- Houve interrupção indevida para livramento/indulto?
- Há data-base diferente por condenação?
- Há erro material?
- Qual seria a data-base defensiva?
- Qual impacto em dias?

## Documentos e dados específicos a procurar

- cálculo
- atestado
- decisão de falta grave
- decisão de regressão
- guia
- certidões
- decisões anteriores

## Protocolo ampliado de alta performance

1. Identificar data-base oficial
2. rastrear origem
3. classificar evento gerador
4. verificar validade
5. separar efeitos por benefício
6. comparar com jurisprudência aplicável
7. gerar cenário defensivo
8. calcular impacto
9. indicar impugnação

## Armadilhas e erros de alta gravidade

- data-base alterada sem decisão
- falta grave pendente usada como definitiva
- interrupção indevida de livramento
- nova condenação sem unificação formal
- data-base de benefício usada para término

## Campos especializados recomendados na saída

- data_base_oficial
- origem
- validade
- efeitos_por_beneficio
- data_base_defensiva
- impacto


# Saída especializada avançada

Além da saída obrigatória original, incluir quando aplicável:

```json
{
  "nivel_confianca": "alto | medio | baixo",
  "matriz_risco": {
    "risco_calculo": "baixo | medio | alto | nao_aplicavel",
    "risco_prova": "baixo | medio | alto | nao_aplicavel",
    "risco_jurisprudencial": "baixo | medio | alto | nao_aplicavel",
    "risco_operacional": "baixo | medio | alto | nao_aplicavel",
    "risco_urgencia": "baixo | medio | alto | nao_aplicavel"
  },
  "achados_criticos": [],
  "achados_relevantes": [],
  "documentos_faltantes_bloqueantes": [],
  "documentos_faltantes_recomendados": [],
  "providencia_operacional": [],
  "revisao_humana_obrigatoria": true
}
```


# Interface mínima para integração com orquestrador

A skill deve aceitar entrada textual ou estruturada. Quando o orquestrador enviar JSON, tratar como contrato preferencial:

```json
{
  "case_id": "",
  "task_id": "",
  "objetivo": "",
  "contexto": {
    "processo": "",
    "tribunal": "",
    "vara": "",
    "sistema": "",
    "regime_atual": "",
    "unidade_prisional": ""
  },
  "documentos": [
    {
      "id": "DOC-001",
      "tipo": "",
      "data": "",
      "evento": "",
      "texto": "",
      "fonte": ""
    }
  ],
  "dados_extraidos": {},
  "restricoes": {
    "usar_apenas_documentos_fornecidos": true,
    "exigir_fonte_documental": true,
    "marcar_incerteza": true,
    "nao_protocolar_sem_revisao_humana": true
  }
}
```

## Política de resposta quando faltar dado

A skill não deve parar em silêncio nem inventar. Deve responder em três camadas:

1. **O que já é possível concluir com segurança.**
2. **O que depende de documento, cálculo ou pesquisa atualizada.**
3. **Qual providência concreta destrava a análise.**

## Testes de aceitação

A saída da skill é considerada boa quando:

- identifica o produto pedido;
- respeita o escopo da skill;
- aponta documentos usados e documentos faltantes;
- apresenta premissas antes de conclusão;
- marca incertezas;
- indica risco e próxima ação;
- não usa jurisprudência ou lei sem recomendar verificação atualizada quando o ponto for sensível;
- mantém revisão humana obrigatória em impacto de liberdade, saúde, prazo ou cálculo.

A saída é considerada ruim ou bloqueável quando:

- entrega texto bonito, mas sem prova ou cálculo;
- transforma relato em fato;
- ignora data-base, remição, detração ou falta grave quando relevantes;
- não enfrenta o principal risco de indeferimento;
- formula pedido sem providência operacional;
- cita precedente, súmula, tema ou lei sem possibilidade de validação;
- omite que a conclusão depende de documento não fornecido.

# Protocolo de autocorreção

Antes da resposta final, a skill deve fazer autocheck interno e corrigir:

```json
{
  "autocheck": {
    "escopo_respeitado": true,
    "fontes_documentais_indicadas": true,
    "premissas_explicitas": true,
    "incertezas_marcadas": true,
    "riscos_mapeados": true,
    "providencia_operacional_incluida": true,
    "revisao_humana_marcada": true
  }
}
```


# Memória de cálculo exigida para skills de cálculo

Sempre que houver resultado numérico, incluir memória mínima:

```json
{
  "memoria_calculo": {
    "pena_base_usada": "",
    "unidade_de_calculo": "dias | anos_meses_dias | sistema_oficial",
    "data_base": "",
    "fracao_aplicada": "",
    "dias_exigidos": 0,
    "dias_cumpridos_ate_data_referencia": 0,
    "detracao_considerada": [],
    "remicao_homologada_considerada": [],
    "remicao_pendente_em_cenario_separado": [],
    "faltas_com_efeito_consideradas": [],
    "resultado": "",
    "formula_ou_logica": ""
  }
}
```

## Sinais de auditoria forte

- O cálculo oficial é tratado como hipótese, não como verdade.
- A skill demonstra de onde saiu cada data.
- Remição pendente aparece separada.
- Frações controversas aparecem em cenários.
- O impacto prático é medido em dias e em benefício afetado.

---

# Produção, auditoria e integração v3

Ler [o protocolo v3 completo](references/protocolo-v3.md) sempre que gerar saída final, integrar esta skill a um pipeline ou avaliar sua qualidade. O recurso contém o contrato estruturado, a taxonomia, os gates de bloqueio, a proteção contra instruções maliciosas em documentos, as regras de sigilo/LGPD, os testes de aceitação, o red team e os modos de entrega.
