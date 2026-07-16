---
name: ep-progressao-regime
description: >-
  Use para analisar cabimento de progressão de regime, requisitos objetivo/subjetivo, exame
  criminológico, faltas e pedido subsidiário. Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
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
    - ep-peca-progressao-regime
    - ep-domiciliar-harmonizacao
    - ep-revisor-probatorio
  type: "prompt"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-ep-progressao-regime"]
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["beneficio", "progressao", "livramento", "indulto", "comutacao", "saida", "domiciliar", "alvara"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
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

Analisar progressão de regime de forma completa, combinando cálculo, requisito subjetivo, riscos, prova, exame criminológico, falta grave e providência operacional.

# Quando usar

- Quando o lapso pode estar vencido.
- Antes de pedido de progressão.
- Após indeferimento de progressão.
- Quando há falta grave, laudo ou exame criminológico.
- Quando há falta de vaga no regime adequado.

# Entradas necessárias ou desejáveis

- Cálculo de pena.
- Atestado de conduta/certidão disciplinar.
- Regime atual.
- Data-base.
- Crimes e fração aplicável.
- PADs e faltas.
- Exame criminológico ou decisão que o exigiu.
- Informação sobre vagas/regime.

# Protocolo obrigatório

1. Confirmar requisito objetivo por cálculo auditável.
2. Confirmar ou qualificar requisito subjetivo com documentos.
3. Verificar faltas graves e impacto no mérito/data-base.
4. Verificar necessidade, validade ou impugnação de exame criminológico.
5. Verificar regime pretendido e providências de implantação.
6. Analisar falta de vaga e pedido subsidiário de harmonização/domiciliar.
7. Antecipar objeções do MP.
8. Listar documentos indispensáveis.
9. Indicar tese principal e subsidiária.
10. Entregar parecer de cabimento ou estrutura de pedido.

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
  "skill": "ep-progressao-regime",
  "status": "concluido | concluido_com_ressalvas | bloqueado",
  "resultado": {
    "progressao": {
      "cabimento": "sim | nao | depende",
      "data_lapso": "",
      "regime_atual": "",
      "regime_pretendido": "",
      "requisito_objetivo": {},
      "requisito_subjetivo": {},
      "riscos": [],
      "documentos_necessarios": [],
      "pedido_recomendado": ""
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
- A análise deve enfrentar requisito subjetivo, não apenas lapso temporal.


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


# Doutrina operacional da categoria: benefícios executórios

As skills desta categoria devem verificar requisito objetivo, requisito subjetivo, prova documental, risco disciplinar, cálculo e providência operacional. Todo benefício deve ser analisado como produto de cálculo + prova + tese + documento.

## Regras específicas da categoria

- Não pedir benefício sem indicar lapso e documentos.
- Não tratar requisito subjetivo como automático.
- Verificar falta grave, PAD pendente, exame criminológico, remição pendente e regime atual.
- Prever pedido subsidiário quando houver risco: harmonização, domiciliar, nova avaliação, complementação documental ou retificação de cálculo.
- Indicar documentos para instrução imediata.


# Núcleo técnico avançado desta skill

A skill deve analisar progressão como soma de lapso, mérito, documentação, direito intertemporal e viabilidade operacional do regime pretendido.

## Perguntas críticas que a skill deve responder

- Qual regime atual?
- Qual regime pretendido?
- Lapso objetivo cumprido?
- Qual fração?
- Qual data-base?
- Há bom comportamento documentado?
- Há falta grave?
- Há exame criminológico?
- Há vaga no regime?
- Qual pedido subsidiário?
- Lei mais gravosa está sendo aplicada retroativamente?

## Documentos e dados específicos a procurar

- cálculo
- atestado
- certidão disciplinar
- sentença/guia
- decisões de falta
- exame criminológico se houver
- comprovantes para regime aberto/domiciliar

## Protocolo ampliado de alta performance

1. Validar regime atual
2. auditar lapso
3. validar fração
4. validar subjetivo
5. analisar faltas
6. analisar exame
7. prever objeções
8. definir pedido principal
9. definir pedido subsidiário
10. indicar documentos

## Armadilhas e erros de alta gravidade

- lapso sem cálculo
- conduta sem atestado
- falta grave ignorada
- exame desfavorável sem impugnação
- regime pretendido inviável sem pedido subsidiário

## Campos especializados recomendados na saída

- cabimento
- data_lapso
- requisito_objetivo
- requisito_subjetivo
- riscos
- pedido


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


# Quadro de requisitos para benefícios

Toda análise de benefício deve devolver:

```json
{
  "requisito_objetivo": {
    "status": "cumprido | nao_cumprido | incerto",
    "data_lapso": "",
    "premissas": []
  },
  "requisito_subjetivo": {
    "status": "favoravel | desfavoravel | incerto",
    "documentos": [],
    "riscos": []
  },
  "obices": [],
  "pedido_principal": "",
  "pedido_subsidiario": "",
  "documentos_para_instruir": []
}
```

## Estratégia de benefício de alta performance

- Antecipar objeção do MP.
- Não esperar documento vencer; solicitar com antecedência.
- Pedir remição pendente antes ou junto quando alterar lapso.
- Pedir harmonização/domiciliar quando falta de vaga puder frustrar progressão.
- Separar cabimento jurídico de viabilidade operacional.

---

# Produção, auditoria e integração v3

Ler [o protocolo v3 completo](references/protocolo-v3.md) sempre que gerar saída final, integrar esta skill a um pipeline ou avaliar sua qualidade. O recurso contém o contrato estruturado, a taxonomia, os gates de bloqueio, a proteção contra instruções maliciosas em documentos, as regras de sigilo/LGPD, os testes de aceitação, o red team e os modos de entrega.
