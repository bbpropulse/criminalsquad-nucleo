---
step: "01"
name: "Foco do Caso"
type: checkpoint
description: O advogado define o caso a ser defendido — tipo penal, data da citação e anexos (denúncia/IP).
---

# 🛑 Checkpoint: Foco do Caso

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar do usuário (advogado) as informações mínimas para iniciar a defesa, com apoio do subagente nativo de intake `.claude/agents/triagem-novo-caso.md`, executado pela persona **Tânia Triagem** (`agents/triagem.custom.md`).

A Tânia Triagem aciona o subagente `triagem-novo-caso` para estruturar a coleta (ficha de triagem, classificação por área, verificação de conflito de interesses — EAOAB art. 17 — e checagem de prescrição/decadência — CP 109). NÃO redigir peça aqui; apenas montar a base do caso.

## Solicitação ao Usuário

⚖️ Vamos preparar a **resposta à acusação**.

Para começar, preciso de:

1. **Tipo penal / acusação** — qual crime é imputado ao réu? (ex: "furto qualificado — CP 155 §4º", "tráfico — Lei 11.343/2006 art. 33")
2. **Data da citação** — quando o réu foi citado? (define o prazo de 10 dias do art. 396 do CPP)
3. **Anexos** — informe os caminhos dos documentos do caso: **denúncia** e **inquérito policial (IP)**, além de procuração e outras peças. Coloque os arquivos em `acervo/casos/` (gitignored) e informe os caminhos aqui.
4. **Dados do réu e do processo** — nome do réu, nº do processo, vara/comarca (se já houver).

## Ação do Pipeline Runner

1. Receber as informações fornecidas pelo usuário
2. Acionar `triagem-novo-caso` (via persona Tânia Triagem) para validar conflito de interesses e prazo
3. Salvar o resultado em `output/caso.md` no formato abaixo
4. Avançar para o Step 02 (Marcos Memória — Resumo dos Autos)

## Expected Outputs

- `output/caso.md` → ficha do caso com tipo penal, data da citação, prazo-fatal calculado, caminhos dos anexos e dados do processo

## Formato de Salvamento

```markdown
# Caso — Resposta à Acusação

**Réu:** [nome]
**Processo nº:** [número]
**Vara / Comarca:** [vara/comarca]
**Tipo penal / Acusação:** [crime + dispositivo]
**Data da citação:** YYYY-MM-DD
**Prazo (CPP 396, 10 dias):** YYYY-MM-DD  ← prazo-fatal
**Anexos:**
  - Denúncia: [caminho]
  - Inquérito Policial (IP): [caminho]
  - Procuração: [caminho]
  - Outros: [caminhos]
**Conflito de interesses (EAOAB 17):** [livre / impedido — justificativa]
**Observações da triagem:** [pontos de atenção, prescrição/decadência CP 109]
```

## Quality Gate

Antes de avançar para o Step 02:
- [ ] `output/caso.md` existe
- [ ] Tipo penal e dispositivo legal estão preenchidos
- [ ] Data da citação informada e prazo-fatal (10 dias, CPP 396) calculado
- [ ] Caminhos da denúncia e do IP informados e acessíveis
- [ ] Verificação de conflito de interesses concluída (EAOAB art. 17)
