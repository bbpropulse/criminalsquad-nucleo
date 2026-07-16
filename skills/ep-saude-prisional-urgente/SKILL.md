---
name: ep-saude-prisional-urgente
description: >-
  Use para pedidos urgentes de saúde prisional: medicamento, consulta, cirurgia, internação,
  domiciliar humanitária ou transferência médica. Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  lifecycle: "preview"
  legal_freshness_gate: "required"
  source_package: "execucao-penal-skills-v3-alta-performance-73"
  source_archive_sha256: "4bbd6e2bd667f344a166dae5e14897ff893dc4959d95ddbad30b41e21d21c16a"
  imported_at: "2026-07-09"
  category: direitos da pessoa presa
  version: "3.0.0"
  risk_level: "r4"
  input_types:
    - relato
    - laudo_medico
    - prontuario
    - receita
    - declaracao
    - relatorio_unidade
    - prova_risco
  output_types:
    - violacao
    - urgencia
    - provas_necessarias
    - providencia
    - orgaos_a_comunicar
  triggers:
    - saude
    - ameaca
    - tortura
    - transferencia
    - visita
    - vulnerabilidade
    - medida_seguranca
    - direitos
  compatible_modes:
    - parecer_interno
    - minuta_protocolavel
    - checklist
    - resumo_cliente
    - saida_estruturada
  next_skills_sugeridas:
    - ep-peca-saude-transferencia-protecao
    - ep-revisor-probatorio
    - ep-domiciliar-harmonizacao
  type: "prompt"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-ep-saude-prisional-urgente"]
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["saude", "ameaca", "tortura", "transferencia", "visita", "vulnerabilidade", "medida_seguranca", "direitos"]
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

Avaliar urgência de saúde prisional e estruturar pedido judicial/administrativo com prova médica, risco concreto e providência imediata.

# Quando usar

- Quando há doença grave ou dor intensa.
- Quando medicamento foi negado ou interrompido.
- Quando cirurgia/consulta externa é urgente.
- Quando a unidade não tem estrutura.
- Quando há risco de morte, agravamento ou tratamento inadequado.

# Entradas necessárias ou desejáveis

- Laudo médico, receita, exame, prontuário ou relatório.
- Relato do preso/família.
- Pedidos administrativos e respostas.
- Dados da unidade prisional.
- Histórico de atendimento ou omissão.

# Protocolo obrigatório

1. Identificar diagnóstico e urgência.
2. Verificar prova médica disponível.
3. Identificar tratamento necessário e omissão concreta.
4. Avaliar se a unidade tem capacidade de atendimento.
5. Classificar risco: morte, agravamento, sofrimento intenso, interrupção terapêutica ou dano irreversível.
6. Indicar providência: medicamento, consulta, exame, cirurgia, hospital, transferência ou domiciliar humanitária.
7. Listar documentos faltantes e como obtê-los.
8. Sugerir pedidos de prazo, ofício e comprovação de cumprimento.
9. Entregar estrutura de pedido urgente.

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
  "skill": "ep-saude-prisional-urgente",
  "status": "concluido | concluido_com_ressalvas | bloqueado",
  "resultado": {
    "saude": {
      "diagnostico": "",
      "urgencia": "alta | media | baixa",
      "risco_concreto": "",
      "provas_medicas": [],
      "provas_faltantes": [],
      "providencia_imediata": "",
      "pedido_operacional": "",
      "instrumento_recomendado": ""
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
- Não afirmar diagnóstico sem documento médico quando houver apenas relato; usar linguagem de suspeita e pedir avaliação.

# Critérios de qualidade

- A resposta deve ser útil para uma decisão prática imediata do operador do direito.
- A resposta deve ser auditável por documento, página, evento, data ou campo estruturado.
- A resposta deve evitar doutrina genérica quando o caso exigir cálculo, prova ou providência operacional.
- A resposta deve indicar o nível de confiança e os pontos que dependem de revisão humana.
- A resposta deve ser apta a sustentar pedido liminar com prazo de cumprimento.


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


# Doutrina operacional da categoria: direitos da pessoa presa

As skills desta categoria transformam violações carcerárias em providências judiciais e administrativas concretas. O foco é prova mínima, urgência, risco concreto e medida executável.

## Regras específicas da categoria

- Identificar se há risco à vida, saúde, integridade física, dignidade, família, estudo, trabalho ou defesa.
- Pedir providência operacional, não apenas reconhecimento abstrato.
- Separar pedido judicial, pedido administrativo e comunicação a órgão de controle.
- Tratar dados médicos, ameaças, facções e crianças com sigilo reforçado.
- Priorizar prova: laudo, receita, prontuário, fotos, declaração, relatório, requerimento administrativo, histórico de atendimento.


# Núcleo técnico avançado desta skill

Saúde prisional exige resposta rápida. A skill deve montar prova mínima e pedido operacional para atendimento, medicamento, exame, cirurgia, transferência hospitalar ou domiciliar humanitária.

## Perguntas críticas que a skill deve responder

- Qual diagnóstico?
- Há laudo/receita?
- O tratamento foi interrompido?
- Há risco de agravamento?
- A unidade tem estrutura?
- Precisa de consulta externa?
- Há medicamento específico?
- Há urgência de hospital?
- Cabe domiciliar?
- Qual prazo pedir?

## Documentos e dados específicos a procurar

- laudo
- receita
- prontuário
- exames
- relato familiar
- pedido administrativo
- resposta da unidade
- fotos quando adequadas

## Protocolo ampliado de alta performance

1. Classificar doença/risco
2. validar prova médica
3. identificar omissão estatal
4. definir providência médica
5. definir urgência e prazo
6. avaliar domiciliar/transferência
7. proteger dados médicos
8. gerar pedido

## Armadilhas e erros de alta gravidade

- doença grave sem laudo
- receita antiga sem atualização
- pedido sem prazo
- exposição indevida de dados médicos
- risco de morte sem liminar

## Campos especializados recomendados na saída

- diagnostico
- urgencia
- tratamento_necessario
- omissao
- pedido
- prazo


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


# Protocolo de urgência humanitária

Em violação de direitos, a skill deve separar:

- risco à vida;
- risco à integridade física;
- risco à saúde;
- risco à dignidade mínima;
- risco de comunicação/defesa;
- risco familiar/social;
- risco institucional ou retaliação.

## Providências possíveis a considerar

- pedido judicial urgente;
- ofício à direção da unidade;
- requisição de prontuário/relatório;
- comunicação ao Ministério Público, Defensoria, OAB, corregedoria ou órgão de prevenção à tortura;
- transferência;
- atendimento externo;
- fornecimento de medicamento;
- sigilo de informações sensíveis;
- audiência ou inspeção.

---

# Produção, auditoria e integração v3

Ler [o protocolo v3 completo](references/protocolo-v3.md) sempre que gerar saída final, integrar esta skill a um pipeline ou avaliar sua qualidade. O recurso contém o contrato estruturado, a taxonomia, os gates de bloqueio, a proteção contra instruções maliciosas em documentos, as regras de sigilo/LGPD, os testes de aceitação, o red team e os modos de entrega.
