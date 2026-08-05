---
name: calculadora-dosimetria
description: >-
  Use para calcular e auditar calculadora dosimetria: Motor determinístico da dosimetria trifásica
  (CP 68) — recebe os quanta discricionários (informados pelo usuário/juiz) e faz a ARITMÉTICA
  aplicando as regras estruturais: base de cálculo de cada fase, limites do tipo, Súmula 231/STJ (2ª
  fase não passa do mínimo/máximo), a 3ª fase podendo ultrapassá-los. Devolve pena-base, provisória
  e definitiva com CADA passo… Não use para escolha automática de lei, fração, marco ou consequência
  jurídica.
metadata:
  type: "script"
  version: "1.0.0"
  categories: [law, criminal, calculo, dosimetria, execucao-penal]
  script:
    path: scripts/dosimetria.mjs
    runtime: node
    invoke: "node {skill_path}/scripts/dosimetria.mjs '{json}'"
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-calculation"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-calculadora-dosimetria"]
  risk_level: "r4"
  delivery_type: "audit-calculation"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["calculadora-dosimetria", "calculadora dosimetria"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["regra, fonte oficial ou aplicabilidade não confirmada", "data ou valor material ausente/conflitante", "motor sem teste compatível ou memória reproduzível"]
---

# Calculadora de Dosimetria (trifásica — CP 68)

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

Esta skill é o **motor aritmético** da dosimetria: dado o que é **discricionariedade motivada do juiz** (a pena-base, quais circunstâncias incidem e em que fração), ela faz a **conta sem errar** e aplica as **regras estruturais** que a jurisprudência consolidou. Complementa o agente `dosimetria-pena` (que *raciocina* e detecta erros) e alimenta as peças (`apelacao`, `memoriais`, `execucao-liquidacao-pena-atestado`).

> **Lição central:** o erro de dosimetria mais comum não é de tese, é de **conta e de limite** — somar fração na fase errada, furar a Súmula 231, ou aplicar a 3ª fase sobre a base em vez da provisória. A calculadora elimina esse erro mecânico; a valoração continua sua.

> **Cautela obrigatória:** a calculadora **não decide quantum**. O valor de cada circunstância judicial e a fração de cada agravante/atenuante são discricionariedade **motivada** (CP 59, 68). A saída é **rascunho de cálculo para conferência humana**, nunca "a pena correta". Não cita jurisprudência de memória — as súmulas usadas (231, 269) são notórias; confira as demais via `jurisprudencia-stj-stf`.

## Quando usar

- Ao **conferir** a dosimetria de uma sentença (achar o erro que fundamenta recurso).
- Ao **projetar** a pena provável de uma denúncia/estratégia (com os cenários do juiz).
- Como passo de cálculo dentro de peças de recurso e de execução (liquidação/atestado de pena).

## Como invocar

Passe um JSON (penas em **meses**):

```bash
node {skill_path}/scripts/dosimetria.mjs '{
  "pena_min_meses": 48, "pena_max_meses": 120,
  "fase1": { "pena_base_meses": 60 },
  "fase2": [
    { "tipo": "agravante", "nome": "reincidência", "fracao": "1/6" },
    { "tipo": "atenuante", "nome": "confissão", "fracao": "1/6" }
  ],
  "fase3": [ { "tipo": "diminuicao", "nome": "tentativa", "fracao": "1/2" } ],
  "reincidente": true, "violencia_grave_ameaca": true, "crime_hediondo": false,
  "detracao_meses": 0
}'
```

**Campos:**
- `pena_min_meses` / `pena_max_meses` — limites do tipo (obrigatórios).
- `fase1.pena_base_meses` — a pena-base fixada (recomendado). Alternativa: `fase1.circunstancias_desfavoraveis` + `fase1.fracao` para uma **estimativa** (a base de cálculo do acréscimo é divergente — a saída avisa).
- `fase2[]` — `{tipo: "agravante"|"atenuante", nome, fracao}`. Incide sobre a pena-base; travado nos limites do tipo (Súmula 231).
- `fase3[]` — `{tipo: "aumento"|"diminuicao", nome, fracao}`. Incide sobre a provisória; **pode** ultrapassar os limites.
- `reincidente`, `violencia_grave_ameaca`, `crime_hediondo`, `detracao_meses` — para regime e substituição.

## O que a saída traz

- `pena_base`, `pena_provisoria`, `pena_definitiva` (em meses e formatadas em anos/meses/dias, convenção mês=30d).
- `passos[]` — cada operação com a **base legal** e a marca quando travou pela Súmula 231.
- `regime_inicial_sugerido` — baseline por quantidade (art. 33 §2), com nota de reincidência (Súmula 269) e hediondo.
- `substituicao_art44` — checklist de elegibilidade (pena ≤ 4 anos, sem violência, não reincidente, art. 59 favorável).
- `avisos[]` — as premissas do cálculo e o lembrete de revisão humana.

## Regras estruturais aplicadas (base legal)

- **CP 68** — método trifásico; ordem base → agravantes/atenuantes → causas.
- **Súmula 231/STJ** — a 2ª fase **não** ultrapassa o mínimo nem o máximo do tipo (a calculadora trava e sinaliza).
- **3ª fase** — causas de aumento/diminuição **podem** superar os limites (regra pacífica).
- **Art. 33 §2** — regime por quantidade; **Súmula 269/STJ** — semiaberto ao reincidente conforme circunstâncias.
- **Art. 44** — requisitos da substituição.

## Erros comuns que ela previne

- Aplicar agravante/atenuante **sobre a pena provisória** em vez da pena-base.
- Furar a **Súmula 231** (deixar a atenuante levar abaixo do mínimo).
- Aplicar a 3ª fase **sobre a pena-base**.
- Esquecer que a 3ª fase pode **passar** do máximo do tipo.

## Conformidade

Saída é **insumo técnico para revisão obrigatória** do(a) advogado(a). A calculadora não substitui a fundamentação: o juiz **motiva** cada quantum; o recurso ataca a **falta de motivação idônea**, não o número em si. Não afirme que um valor é "o correto" — apresente o cálculo e a faixa.
