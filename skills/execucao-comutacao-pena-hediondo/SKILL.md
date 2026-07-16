---
name: execucao-comutacao-pena-hediondo
description: >-
  Use quando a execução envolver crime hediondo ou equiparado e for necessário analisar
  classificação, progressão, livramento, indulto ou comutação. Exige matriz temporal do art. 112,
  rol legal vigente, decreto aplicável, fontes oficiais no mesmo dia e revisão humana. Não use para
  conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.1.0"
  categories: [law, criminal, analise, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-comutacao-pena-hediondo"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-comutacao-pena-hediondo", "execucao comutacao", "pena hediondo"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Execução penal em crimes hediondos ou equiparados

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

Esta skill organiza a análise de progressão e vedações relacionadas a crimes
hediondos ou equiparados. Não substitui as skills específicas de progressão,
livramento, indulto ou comutação.

> **GATE P0 DO ART. 112 — CORTE 2026-07-09.** A tabela baseada na Lei
> 13.964/2019 foi removida porque deixou de representar, sozinha, a redação
> formal após as Leis 15.358/2026 e 15.402/2026. Antes de afirmar inciso,
> percentual, fração, lapso ou data, leia
> `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte as fontes
> oficiais no mesmo dia e obtenha revisão humana. Se a regra temporal, o alcance
> de decisões ou a comparação intertemporal não estiverem completos, responda
> **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`** e não calcule.

## Separar os institutos

| Questão | Fonte primária a verificar | Saída |
|---|---|---|
| O delito é hediondo? | rol vigente da Lei 8.072/1990 | classificação documentada |
| O delito é equiparado? | Constituição e lei especial aplicável | classificação documentada |
| Qual regra de progressão? | art. 112 da LEP + matriz temporal | somente após gate P0 |
| Há livramento? | Código Penal + vedações específicas vigentes | parecer separado |
| Há indulto/comutação? | Constituição, LEP, lei especial e decreto anual | parecer separado por decreto |

Uma vedação de um instituto não deve ser transportada automaticamente a outro.

## Inputs obrigatórios

1. data de cada fato e capitulação definitiva;
2. sentença/acórdão e trânsito em julgado;
3. identificação da hipótese legal de hediondez/equiparação;
4. ocorrência e enquadramento de resultado morte;
5. primariedade/reincidência com títulos e datas;
6. guia, cálculo, pena total, saldo e data-base;
7. decreto de indulto/comutação do ano, quando pertinente;
8. decisões específicas da execução.

Se qualquer elemento classificatório estiver ausente, registrar a hipótese como
`INDETERMINADA`, sem escolher o patamar mais favorável ou mais severo.

## Roteiro de alta segurança

### 1. Confirmar a natureza do delito

- localizar o tipo no rol legal vigente na data relevante;
- verificar se houve alteração posterior do rol ou da classificação;
- distinguir tráfico privilegiado, formas equiparadas e qualificadoras somente
  com base no título e em fonte oficial;
- não classificar por rótulo do sistema eletrônico ou pena abstrata.

### 2. Executar a matriz temporal

Preencher integralmente o contrato de
`acervo/legislacao/matriz-temporal-art-112-lep.md`, incluindo:

- versões formais candidatas;
- efeito mais benéfico, mais gravoso, igual ou indeterminado;
- ADIs reconsultadas no mesmo dia;
- decisões específicas e respectivo alcance;
- regra escolhida e justificativa do revisor humano.

O texto formal consolidado não resolve, sozinho, a incidência sobre fato
anterior.

### 3. Examinar reincidência sem atalhos

- identificar a condenação anterior usada e a data de trânsito;
- testar se a reincidência é juridicamente existente e relevante para a hipótese;
- separar reincidência genérica e específica quando a redação aplicável exigir;
- tratar jurisprudência sobre lacunas de redações anteriores como material
  histórico até confirmar sua compatibilidade atual.

### 4. Examinar resultado morte e outras hipóteses

Não inferir resultado morte pela denominação genérica do crime. Ancorar no
título condenatório e conferir se o inciso/alínea escolhido efetivamente cobre
a hipótese sob a versão temporal aplicável.

### 5. Analisar cada benefício separadamente

Para livramento, indulto e comutação:

- consultar a lei específica vigente e, no indulto/comutação, o decreto anual;
- registrar a redação literal relevante e a data de consulta;
- verificar se a vedação alcança exatamente o tipo e a modalidade condenatória;
- separar tese principal, subsidiária e objeção provável;
- não usar a regra de progressão como substituta do requisito do outro benefício.

## Material histórico em quarentena

Percentuais, árvores e exemplos anteriores às Leis 15.358/2026 e 15.402/2026
foram retirados desta skill. Se forem necessários para comparação intertemporal:

1. buscar a versão oficial correspondente ao intervalo;
2. rotular `HISTORICO — NÃO APLICAR AUTOMATICAMENTE`;
3. comparar o regime integral, sem composição automática;
4. submeter a conclusão ao revisor humano.

O mesmo vale para precedentes que mencionem valores ou incisos sob redações
anteriores: confirmar existência, tese, vigência e aderência ao caso.

## Contraditório estruturado

### Hipóteses defensivas a investigar

- erro na classificação como hediondo/equiparado;
- ausência do elemento que desloca a hipótese legal;
- reincidência inexistente, genérica ou temporalmente irrelevante;
- incidência de lei posterior mais benéfica;
- decisão específica ou precedente aplicável que altere a leitura;
- decreto que não contenha a vedação afirmada pela parte contrária.

### Objeções prováveis

- rol legal e título condenatório sustentam a classificação;
- lei mais gravosa é ultrativa apenas para fatos posteriores, conforme a versão
  temporal indicada;
- benefício está expressamente vedado por lei/decreto aplicável;
- precedente invocado pertence a redação superada ou caso distinguível.

Não declare nenhuma hipótese vencedora sem fonte oficial e confronto com os
fatos documentados.

## Saída mínima

```yaml
status: "BLOQUEADO | DIAGNOSTICO_SUPERVISIONADO | REGRA_APROVADA_POR_HUMANO"
classificacao:
  hediondo_ou_equiparado: ""
  ancora_documental: ""
  resultado_morte: ""
  reincidencia: ""
matriz_temporal:
  verificado_em: ""
  versoes_comparadas: []
  adis_e_decisoes: []
  regra_aprovada: ""
beneficios:
  progressao: ""
  livramento: ""
  indulto_comutacao: ""
fontes_oficiais: []
pendencias: []
revisor_humano: "PENDENTE"
```

## Hard fails

- tabela histórica apresentada como vigente;
- percentual ou data sem matriz temporal completa;
- decisão individual generalizada para outros processos;
- hediondez, resultado morte ou reincidência presumidos;
- vedação de livramento transportada para indulto/comutação, ou vice-versa;
- decreto anual não consultado;
- precedente ou dispositivo citado de memória;
- ausência de revisão humana.

## Checklist

- [ ] Crime e modalidade ancorados no título?
- [ ] Rol legal verificado na data relevante?
- [ ] Matriz do art. 112 preenchida e fontes reconsultadas hoje?
- [ ] Direito intertemporal justificado sem combinação automática?
- [ ] ADIs e decisões específicas com alcance registrado?
- [ ] Livramento e indulto/comutação analisados por fontes próprias?
- [ ] Citation Gate sem pendência?
- [ ] Criminalista humano aprovou a conclusão?

Falha em qualquer item relativo à progressão mantém a saída em
**`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**.
