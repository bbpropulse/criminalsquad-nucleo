---
name: relatorio-executivo-escritorio
description: >-
  Use para conduzir relatorio executivo escritorio: Gera um one-pager gerencial recorrente da
  carteira — produção do período, casos em risco, gargalos por fase, SLA de prazos e benefícios
  maturando — a partir do dataset consolidado e de métricas determinísticas. Não use para
  compartilhamento de dados, promessa de resultado ou decisão jurídica sem autorização.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [gestao, carteira, relatorio]
  positive_triggers: ["relatorio-executivo-escritorio", "relatório executivo", "visão gerencial da carteira", "one-pager do escritório"]
  negative_triggers: ["compartilhamento de dados, promessa de resultado ou decisão jurídica sem autorização"]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "client-operations"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "operational-brief"
  freshness_policy: "case-state-current"
  guard_triggers: ["destinatário ou representação não confirmados", "conflito de interesses não resolvido", "dados de outro cliente ou armazenamento fora do local sigiloso"]
  eval_case_ids: ["csq-v5-relatorio-executivo-escritorio"]
---

# Relatório Executivo do Escritório

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

## When to use

Quando a pergunta é **gerencial**, não de um caso: "como está a carteira esta semana?",
"o que está em risco?", "onde está o gargalo?", "quantos benefícios protocolamos × quantos
amadurecendo?". Substitui a reunião de status manual por um **one-pager recorrente** com
números reproduzíveis.

É **diferente** do que já existe:
- **Dashboards operacionais** (`execucao-dashboard-carteira`, `agenda-semanal`) = fila de
  casos e a semana — visão de operação.
- **Relatório ao cliente** (`execucao-relatorio-cliente`) = um caso, para o cliente.
- **Este** = visão **gerencial** da carteira inteira, para o(a) sócio(a)/gestor(a).

## Entradas mínimas

- **Dataset da carteira:** `acervo/casos/_carteira/carteira.json` (de `carteira-lote`). Se
  não existir ou estiver velho, rode `carteira-lote` antes.
- **Prazos:** o cache do monitor DJEN (`_criminalsquad/_memory/djen-tracker.jsonl`) via os
  helpers do orchestra.
- **Período:** a janela do relatório (semana, mês) e para quem é (sócio, comitê).

## Workflow

1. **Números determinísticos (não conte no olho):** rode
   `node scripts/orchestra/carteira-metricas.mjs --json` (ou `npm run carteira:metricas`).
   Ele devolve os agregados reproduzíveis: `total`, `por_fase` (gargalos), `em_risco`,
   `com_pendencia`, `com_prazo`/`sem_prazo`, `por_confianca`, `valor_total`.
2. **Prazos e SLA:** rode `node scripts/orchestra/prazos-hoje.mjs --json` e
   `prazos-semana.mjs --json` para a fila de vencimentos; derive o SLA (quantos prazos
   vencem no período, quantos sem folga, quantos já vencidos sem baixa).
3. **Produção do período:** conte, do dataset + `intimacoes-recentes.mjs`, o que entrou e o
   que avançou de fase na janela.
4. **Componha o one-pager** (uma página) nas seções abaixo — **narrativa gerencial curta**
   ancorada nos números do passo 1-3, não em impressão.
5. **Recomende:** 3-5 ações priorizadas (o que destravar primeiro), com o número que as
   justifica.

## Estrutura do one-pager

Marque a **fonte** de cada número. Só os agregados de `carteira-metricas.mjs` e dos helpers de
prazo são **reproduzíveis**; o resto é **contagem manual/estimativa** e vai **rotulado como tal**
— nunca apresentado como número do script (inventar aqui é o "erro de gestão" que a skill evita).

**Do script (reproduzíveis):**
- **Cabeçalho:** período; `total` de casos; **valor total** (`valor_total` — só valores numéricos).
- **Gargalos por fase:** distribuição `por_fase` (onde a carteira está represada).
- **Casos em risco:** `em_risco` (riscos mapeados no dossiê); some, à parte, os prazos sem folga.
- **Pendências:** `com_pendencia` ("o que falta nos autos") — diligências abertas.
- **SLA de prazos:** vencendo hoje/semana e vencidos, dos helpers `prazos-hoje`/`prazos-semana`.

**Contagem manual / estimativa rotulada (o script NÃO produz — não invente):**
- **Produção do período** (casos novos, avanços de fase, peças protocoladas): o dataset é um
  *snapshot*, sem data de entrada nem histórico de fase — **conte numa fonte auditável** (agenda,
  protocolos), não infira do dataset.
- **Réus presos** e **benefícios maturando × protocolados**: não há campo no `carteira-row.json`
  para isso — trate como **levantamento manual** até existir a flag; não estime de cabeça.

- **Recomendações:** 3-5 ações priorizadas, cada uma com o número (e a fonte) que a justifica.

## Conformidade

- **Use IDs internos — não guarde `processo`/`reu` reais no relatório.** Igual ao contrato do
  `execucao-dashboard-carteira` (que usa **apenas IDs internos** e mantém a referência ao caso
  sigiloso à parte): o one-pager referencia cada caso por **ID interno**, não por nome/nº
  integral. Vale **inclusive para o relatório interno** — agregar a carteira inteira num só
  arquivo amplifica o risco de vazamento em massa (LGPD).
- **Grave no local sigiloso gitignored.** Se o relatório precisar reter qualquer dado sensível,
  o arquivo vai para um caminho **gitignored** (`acervo/casos/_carteira/` ou
  `squads/{nome}/output/`) — nunca numa pasta versionada. "Pasta do projeto" **não basta**: só
  `acervo/casos/`, `squads/*/output/` e `_criminalsquad/_memory/` estão no `.gitignore`.
- **Sem promessa de resultado e sem decisão jurídica** — é gestão, não parecer. Números de
  prognóstico, se houver, são estimativas rotuladas.
- **Números reproduzíveis:** os agregados vêm do script determinístico — não recalcule no
  texto nem arredonde de cabeça; discrepância entre narrativa e número é erro de gestão.
