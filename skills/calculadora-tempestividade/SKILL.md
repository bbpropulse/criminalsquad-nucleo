---
name: calculadora-tempestividade
description: >-
  Use para calcular e auditar calculadora tempestividade: Motor determinístico da tempestividade
  recursal penal (CPP 798) — dado o tipo de recurso (ou o prazo em dias) e a data de intimação,
  calcula a data-limite com a contagem CONTÍNUA do processo penal (dias corridos, exclui o dia do
  começo, inclui o do vencimento), prorroga o vencimento em dia não útil para o próximo dia útil,
  aplica prazo em dobro (Defensoria) e diz se o… Não use para escolha automática de lei, fração,
  marco ou consequência jurídica.
metadata:
  type: "script"
  version: "1.0.0"
  categories: [law, criminal, calculo, prazos, recurso]
  script:
    path: scripts/tempestividade.mjs
    runtime: node
    invoke: "node {skill_path}/scripts/tempestividade.mjs '{json}'"
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-calculation"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-calculadora-tempestividade"]
  risk_level: "r4"
  delivery_type: "audit-calculation"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["calculadora-tempestividade", "calculadora tempestividade"]
  negative_triggers: ["escolha automática de lei, fração, marco ou consequência jurídica"]
  guard_triggers: ["regra, fonte oficial ou aplicabilidade não confirmada", "data ou valor material ausente/conflitante", "motor sem teste compatível ou memória reproduzível"]
---

# Calculadora de Tempestividade Recursal (CPP 798)

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

Motor de **datas** dos prazos recursais penais. Você informa o recurso e a data de intimação; ela devolve a **data-limite** com as regras do art. 798 CPP e diz se o protocolo foi **tempestivo**. Elimina o erro de contagem que derruba recurso na porta (preliminar de intempestividade). Complementa as skills de recurso (`apelacao`, `rese`, `embargos-de-declaracao`, etc.) e a rotina de prazos do DJEN.

> **Lição central:** o processo **penal** conta prazo em **dias corridos** (art. 798 CPP: contínuos, não se interrompem por férias, sábado, domingo ou feriado) — **diferente** do processo civil (dias úteis). Confundir os dois é a causa nº 1 de recurso intempestivo.

> **Cautela obrigatória:** saída é **rascunho de conferência**. O marco da intimação (publicação no DJEN × intimação pessoal × ciência nos autos) muda a data; confirme-o. A tese de dias úteis no penal é majoritariamente **rejeitada** pelo STJ/STF — não conte com ela; protocole por dias corridos.

## Como invocar

```bash
node {skill_path}/scripts/tempestividade.mjs '{
  "tipo": "apelacao",
  "data_intimacao": "2026-03-02",
  "prazo_dobro": false,
  "feriados": ["2026-04-21"],
  "data_protocolo": "2026-03-06"
}'
```

- `tipo` — um dos prazos conhecidos, **ou** use `prazo_dias` para informar o prazo direto.
- `data_intimacao` — `AAAA-MM-DD`. Se cair em dia não útil, a contagem inicia no próximo útil (sinalizado).
- `prazo_dobro` — dobra o prazo. Cabe à **Defensoria Pública** (LC 80/94) e a defensores dativos/núcleos de prática jurídica. O **Ministério Público NÃO tem prazo em dobro no processo penal** (o art. 180 do CPC é do cível) — não use para o MP.
- `feriados` — lista de feriados (`AAAA-MM-DD`) para a prorrogação; inclua os locais/forenses.
- `data_protocolo` — se informada, retorna `tempestivo` e `dias_de_folga`.

> **Fonte da data (não redigite):** havendo `acervo/casos/{processo}/marcos.yaml` (de
> `linha-tempo-processual-autos`, contrato em
> `skills/linha-tempo-processual-autos/references/marcos-schema.md`), tome `data_intimacao`
> do marco de intimação/publicação do ato recorrido — respeitando o `tipo_data`
> (publicação × ciência mudam o termo). É o mesmo insumo já ancorado uma vez.

## Prazos conhecidos (dias)

`apelacao` 5 (razões +8) · `apelacao_jecrim` 10 · `rese` 5 (razões +2) · `agravo_execucao` 5 (Súmula 700/STF) · `embargos_declaracao` 2 · `embargos_infringentes` 10 · `carta_testemunhavel` 2 (48h — confira em horas) · `recurso_especial`/`recurso_extraordinario` 15 · `agravo_em_recurso_esp_ext` 15 · `agravo_regimental` 5 (varia por regimento).

## O que a saída traz

- `data_limite` (já prorrogada) e `vencimento_bruto` (antes da prorrogação).
- `inicio_contagem` (deslocado se a intimação foi em dia não útil).
- `prorrogado_por_dia_nao_util` (booleano).
- `tempestivo` + `dias_de_folga` (se houver `data_protocolo`).
- `avisos[]` — a regra dos dias corridos, o alerta sobre o marco da intimação e a divergência dias úteis × corridos.

## Regras aplicadas (art. 798 CPP)

- **§1** — exclui o dia do começo, inclui o do vencimento.
- **caput** — dias **contínuos** (corridos), sem interrupção por férias/fim de semana/feriado.
- **§3** — vencimento em dia não útil prorroga para o próximo dia útil.
- Prazo em **dobro** para a Defensoria (LC 80/94).

## Conformidade

Conferência técnica para **revisão obrigatória**. Não substitui a checagem do marco de intimação nem do calendário forense local. Na dúvida, **protocole no menor prazo** possível e sinalize.
