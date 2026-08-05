---
name: calculadora-prescricao
description: >-
  Calcula intervalos de prescrição penal a partir de modalidade, regra validada, pena e marcos
  interruptivos explicitamente informados. Use quando o pedido envolver prescrição em abstrato,
  retroativa, intercorrente ou executória e for necessário produzir memória reproduzível. Não use
  para escolha automática de lei, fração, marco ou consequência jurídica.
metadata:
  engines: ["executory-limitation"]
  risk_level: "r4"
  type: "script"
  version: "1.0.0"
  categories: [law, criminal, calculo, prescricao, execucao-penal]
  script:
    path: scripts/prescricao.mjs
    runtime: node
    invoke: "node {skill_path}/scripts/prescricao.mjs '{json}'"
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-calculation"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-calculadora-prescricao"]
  delivery_type: "audit-calculation"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["calculadora-prescricao", "calculadora prescricao"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["regra, fonte oficial ou aplicabilidade não confirmada", "data ou valor material ausente/conflitante", "motor sem teste compatível ou memória reproduzível"]
---

# Calculadora de Prescrição (CP 109-119)

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

Motor de **datas** da prescrição: você informa a pena e os **marcos interruptivos** (art. 117), e a calculadora enquadra no art. 109, aplica os ajustes (art. 110/115) e diz **em qual intervalo** o prazo estourou. É a triagem que evita o pior erro do penalista: **deixar prescrever sem perceber** (ou pedir arquivamento por prescrição que não ocorreu). Complementa a skill `extincao-punibilidade-prescricao` (a peça) e o agente `dosimetria-pena`.

> **Lição central:** prescrição é **aritmética de datas contra o prazo do art. 109** — mas o que trava a maioria é escolher a **modalidade certa** e **quais marcos** contam. A conta a calculadora faz; a escolha da modalidade é sua.

> **Cautela obrigatória:** saída é **rascunho de triagem para conferência humana**. Confirme o marco exato (a divergência publicação × intimação muda a data) e a modalidade. As súmulas/temas sobre marcos e retroativa devem ser conferidos via `jurisprudencia-stj-stf`.

> **Prescrição executória:** prefira `scripts/legal-calculators/executory-limitation-engine.mjs`. Ele recebe período e políticas de eventos já verificados, exige fonte oficial e confirmação humana de aplicabilidade e não declara extinção da punibilidade. O script legado abaixo permanece para regressão/triagem das demais modalidades; não substitui a escolha jurídica atual.

## As modalidades e quais marcos informar

| Modalidade (`modalidade`) | Pena a informar | Marcos típicos (art. 117) |
|---|---|---|
| `PPP_abstrata` | **máxima em abstrato** | data do fato → recebimento da denúncia → pronúncia → confirmação da pronúncia → sentença condenatória recorrível |
| `PPP_retroativa` | **aplicada** (concreta) | do **recebimento** em diante (Lei 12.234/2010 veda período anterior para fatos ≥ 06/05/2010) |
| `intercorrente` | **aplicada** | publicação da sentença condenatória → trânsito para as partes |
| `PPE` | **aplicada** | trânsito para a acusação → início/continuação do cumprimento (reincidente: +1/3, art. 110) |

## Como invocar

```bash
node {skill_path}/scripts/prescricao.mjs '{
  "modalidade": "PPP_abstrata",
  "pena": { "anos": 4 },
  "data_fato": "2010-01-01",
  "reu_data_nascimento": "1992-05-10",
  "data_sentenca": null,
  "reincidente": false,
  "marcos": [
    { "tipo": "recebimento_denuncia", "data": "2019-06-01" }
  ],
  "data_referencia": "2026-07-06"
}'
```

- `pena` — objeto `{anos,meses,dias}` **ou** número em anos. Máxima em abstrato (PPP abstrata) ou aplicada (demais).
- `data_fato` — início da PPP em abstrato e base do art. 115/Lei 12.234.
- `marcos[]` — datas dos marcos **em ordem cronológica** (`AAAA-MM-DD`).
- `data_referencia` — opcional; se informado, entra como último marco (útil para "já prescreveu até hoje?"). A calculadora **não** lê o relógio sozinha (resultado reprodutível).
- `reu_data_nascimento` + `data_sentenca` — para o art. 115 (metade).
- `reincidente` — para a PPE (+1/3).

> **Fonte dos marcos (não redigite datas):** quando houver `acervo/casos/{processo}/marcos.yaml`
> (emitido por `linha-tempo-processual-autos`, contrato em
> `skills/linha-tempo-processual-autos/references/marcos-schema.md`), monte a entrada dele:
> `data_fato` = marco com `efeito: termo_inicial`; `marcos[]` = os marcos com
> `efeito: interrompe` (art. 117), em ordem. Isso corta a fonte nº 1 de erro (data redigitada).

## O que a saída traz

- `prazo_art109_base_anos` e `prazo_aplicavel_anos` (após art. 110/115).
- `prescrito` (booleano) e `intervalos[]` — para cada par de marcos: anos decorridos, a **data-limite** e se prescreveu ali.
- `avisos[]` — premissas, a regra do art. 10 (inclui o dia do começo) e as sinalizações de vedação.

## Regras aplicadas

- **Art. 109** — prazos por faixa de pena (pena < 1 ano = 3 anos; 2 anos para fatos pré-Lei 12.234/2010).
- **Art. 110** — PPE do reincidente: prazo + 1/3.
- **Art. 115** — metade se o réu era < 21 no fato ou > 70 na sentença.
- **Art. 117** — cada marco interrompe e **zera** a contagem (a calculadora trata cada intervalo isolado).
- **Lei 12.234/2010** — veda a retroativa em período anterior ao recebimento (fatos ≥ 06/05/2010).

## Conformidade

Triagem técnica para **revisão obrigatória**. A extinção da punibilidade é declarada pelo juízo; a calculadora orienta a tese e o requerimento, não a substitui. Na dúvida sobre o marco, **conte a favor da contagem menos favorável** e sinalize.
