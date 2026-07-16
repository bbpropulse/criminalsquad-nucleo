---
step: "01"
name: "Foco do Caso"
type: checkpoint
description: O operador define o instituto e coleta documentos, fatos e marcos temporais; regra do art. 112 começa bloqueada.
---

# 🛑 Checkpoint: Foco do Caso

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar do usuário (operador da execução) as informações mínimas para iniciar o pleito, com apoio dos subagentes nativos `.claude/agents/triagem-novo-caso.md` (intake/conflito) e `.claude/agents/dosimetria-pena.md` (quantum/lapso), executados pela persona **Cláudia Cálculo** (`agents/triagem.custom.md`).

**Preflight bloqueante:** leia `_criminalsquad/_memory/company.md`. Para caso real, se tipo de instituição, polo, responsável, jurisdição ou tribunais continuarem com placeholders, interrompa e complete o onboarding antes de receber dados sensíveis. Não fabrique o perfil.

A Cláudia Cálculo aciona esses subagentes para estruturar a coleta e verificar conflito de interesses. NÃO calcular progressão, escolher data-base ou redigir peça aqui; apenas montar a base documental e registrar o **instituto pretendido**.

## Solicitação ao Usuário

⛓️ Vamos preparar a **petição da execução penal**.

Para começar, preciso de:

1. **Instituto pretendido** — qual benefício/medida? (progressão de regime, livramento condicional, remição, saída temporária, unificação de penas, indulto/comutação, relaxamento/cautelares)
2. **Marcos documentais** — pena, regime, datas de cada fato, prisões/solturas, trânsitos, mudanças de regime, faltas e decisões sobre detração/data-base. Valor já exibido no cálculo deve ser rotulado `DADO_REPORTADO`.
3. **Elementos para classificação** — capitulação definitiva, violência/grave ameaça, hediondez/equiparação, resultado morte e títulos de reincidência. Não concluir o inciso nesta etapa.
4. **Anexos** — caminhos dos documentos: **guia de recolhimento**, **atestado de pena/conduta** e **cálculo de liquidação**, além de procuração. Coloque os arquivos em `acervo/casos/` (gitignored) e informe os caminhos aqui.
5. **Dados do apenado e do processo** — nome, nº dos autos de execução, Vara de Execução Penal/comarca.
6. **Pilotos v4** — perguntar se o profissional autoriza uso supervisionado de skills `pilot`. Sem “sim” explícito, usar somente skills `active` e registrar `pilot_opt_in: false`.

## Ação do Pipeline Runner

1. Receber as informações fornecidas pelo usuário
2. Acionar `triagem-novo-caso` e `dosimetria-pena` para validar conflito e estruturar os dados reportados, sem escolher regra temporal
3. Salvar o resultado em `output/caso.md` no formato abaixo
4. Avançar para o Step 02 (classificação, extração e cronologia)

## Expected Outputs

- `output/caso.md` → ficha do caso com instituto pretendido, dados do cálculo, classificação, caminhos dos anexos e dados do processo

## Formato de Salvamento

```markdown
# Caso — Execução Penal

**Apenado:** [nome]
**Autos de execução nº:** [número]
**Vara de Execução Penal / Comarca:** [vara/comarca]
**Instituto pretendido:** [progressão / livramento / remição / saída temporária / unificação / indulto-comutação / relaxamento]
**Pena total:** [anos/meses]
**Regime atual:** [fechado / semiaberto / aberto]
**Datas de cada fato:** [YYYY-MM-DD + documento]
**Prisões, solturas e trânsitos:** [cronologia + documentos]
**Data-base indicada na guia:** [DADO_REPORTADO + origem; não validada]
**Elementos classificatórios:** [capitulação; violência/grave ameaça; hediondez/equiparação; resultado morte + origem]
**Títulos para primariedade/reincidência:** [documentos; conclusão pendente]
**Faltas graves:** [datas ou "nenhuma"]
**Lapso já cumprido (do cálculo):** [a confirmar na pesquisa]
**Anexos:**
  - Guia de recolhimento: [caminho]
  - Atestado de pena/conduta: [caminho]
  - Cálculo de liquidação: [caminho]
  - Procuração: [caminho]
**Conflito de interesses (EAOAB 17):** [livre / impedido — justificativa]
**Perfil institucional:** [completo | BLOQUEADO]
**Autorização/representação:** [confirmada | pendente]
**Pilot opt-in:** [true | false]
**Regra temporal do art. 112:** BLOQUEADO | NÃO_APLICÁVEL [justificar]
**Matriz obrigatória:** acervo/legislacao/matriz-temporal-art-112-lep.md
**Observações da triagem:** [pontos de atenção; Leis 14.843/2024, 15.358/2026 e 15.402/2026]
```

## Quality Gate

Antes de avançar para o Step 02:
- [ ] `output/caso.md` existe
- [ ] O `instituto pretendido` está registrado (define a skill do Step 05)
- [ ] Pena, regime e cronologia dos marcos estão preenchidos; data-base da guia está rotulada `DADO_REPORTADO`
- [ ] Elementos classificatórios e títulos de reincidência estão documentados, sem conclusão presumida
- [ ] Caminhos da guia, atestado e cálculo informados e acessíveis
- [ ] Verificação de conflito de interesses concluída (EAOAB art. 17)
- [ ] Perfil institucional, polo e autorização/representação estão confirmados para o caso real
- [ ] Uso de `pilot` foi autorizado explicitamente ou registrado como `false`
- [ ] Se houver art. 112, `regra_temporal_status: BLOQUEADO` foi registrado
