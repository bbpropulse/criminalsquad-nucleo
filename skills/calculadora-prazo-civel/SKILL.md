---
name: calculadora-prazo-civel
description: >-
  Use para calcular prazo processual CÍVEL em dias úteis (CPC 219): dada a data de disponibilização
  no Diário eletrônico ou a data da publicação, devolve o marco (CPC 224, §§ 2º e 3º), a data-limite
  contando somente dias úteis (CPC 216: sábado e domingo são feriados forenses), aplica o recesso de
  20/12 a 20/01 (CPC 220) e as suspensões do tribunal, e diz se o protocolo foi tempestivo.
  Complementa a… Não use para escolha automática de lei, fração, marco ou consequência jurídica.
metadata:
  type: "script"
  version: "1.0.0"
  categories: [law, civel, calculo, prazos]
  script:
    path: scripts/prazo-civel.mjs
    runtime: node
    invoke: "node {skill_path}/scripts/prazo-civel.mjs '{json}'"
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-calculation"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-calculadora-prazo-civel"]
  risk_level: "r4"
  delivery_type: "audit-calculation"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["calculadora-prazo-civel", "calculadora prazo civel", "prazo civel dias uteis"]
  negative_triggers: ["prazo penal", "escolha automática de lei, marco ou consequência jurídica"]
  guard_triggers: ["regra, fonte oficial ou aplicabilidade não confirmada", "data ou valor material ausente/conflitante", "motor sem teste compatível ou memória reproduzível"]
---

# Calculadora de Prazo Cível (CPC 219 — dias úteis)

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

Motor de **datas** do prazo processual cível. Você informa o prazo em dias e o marco;
ele devolve a **data-limite** contando **somente dias úteis**, e diz se o protocolo foi
tempestivo.

> **Lição central — este motor NÃO é o penal com outro parâmetro.** No processo penal
> a contagem é **contínua** (CPP 798, caput): feriado no meio do prazo é irrelevante,
> só o vencimento se ajusta. No cível conta-se **só dia útil** (CPC 219), e **cada**
> feriado dentro do período empurra a data-limite em um dia. Usar um motor no lugar do
> outro não é aproximação: o erro **cresce com o tamanho do prazo**.

> **Cautela obrigatória — feriado municipal.** O motor não tem como conhecer os
> feriados estaduais e municipais nem as suspensões de expediente do seu tribunal.
> Sem a lista, ele **avisa que a data é provisória**. Passe `feriados` e `suspensoes`
> vindos da portaria antes de tratar a data como fatal.

## Quando usar

- Prazo processual cível: contestação, contrarrazões, apelação, embargos, manifestação.
- Carteira **mista** (penal + cível): use este para os cíveis e a
  `calculadora-tempestividade` para os penais. **Nunca** o mesmo para os dois.

## Quando NÃO usar

- Prazo **penal** de qualquer espécie → `calculadora-tempestividade`.
- Prazo de **prisão/custódia** ou de conclusão de inquérito → correm da prisão, não da
  intimação, e não estão no escopo de nenhum destes dois motores.
- Prazo **material** (prescrição, decadência) → contagem em dias corridos por outra regra.

## Uso

```bash
node skills/calculadora-prazo-civel/scripts/prazo-civel.mjs \
  '{"prazo_dias":15,"data_disponibilizacao":"2026-08-12","feriados":["2026-09-07"]}'
```

| Campo | Obrigatório | O que é |
|---|---|---|
| `prazo_dias` | sim | prazo em **dias úteis** (ex.: 15, do CPC 1.010 § 1º) |
| `data_disponibilizacao` | um dos dois | data no Diário eletrônico — o motor aplica o CPC 224 § 2º |
| `data_publicacao` | um dos dois | se você já tem a data da publicação |
| `feriados` | recomendado | `["AAAA-MM-DD"]` — nacionais, estaduais e **municipais** |
| `suspensoes` | não | `[["início","fim"]]` — suspensões declaradas pelo tribunal |
| `recesso_cpc_220` | não | `false` desliga o recesso de 20/12–20/01 (default `true`) |
| `data_protocolo` | não | se informado, devolve `tempestivo: true|false` |

## Saída

`data_limite` é a data fatal. `inicio_contagem` e `data_publicacao` mostram o marco
aplicado, `dias_nao_uteis_pulados` quantos dias a contagem saltou, e `avisos` traz as
premissas frágeis. **Grave a saída íntegra** como memória auditável — é o que permite
conferir a conta depois.

## Regras aplicadas (texto de lei)

- **CPC 219** — na contagem em dias, computam-se somente os dias úteis (parágrafo único: só prazos processuais).
- **CPC 216** — são feriados forenses os sábados, os domingos e os dias sem expediente forense.
- **CPC 224** — exclui o dia do começo, inclui o do vencimento. **§ 2º**: data da publicação é o 1º dia útil seguinte à disponibilização. **§ 3º**: a contagem inicia no 1º dia útil seguinte ao da publicação.
- **CPC 220** — suspende-se o curso do prazo entre 20 de dezembro e 20 de janeiro, inclusive.

## Anti-padrões

- Rodar este motor num prazo penal "porque conta dias" — **alarga** o prazo e perde recurso.
- Tratar a data como fatal sem passar a lista de feriados do tribunal.
- Descartar os `avisos`: eles apontam exatamente a premissa que pode mover a data.
