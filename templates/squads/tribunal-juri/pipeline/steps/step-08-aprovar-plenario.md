---
step: "08"
name: "Aprovar Plenário"
type: checkpoint
depends_on: step-07
---

# 🛑 Checkpoint: Aprovar Preparação de Plenário

## Para o Pipeline Runner
Apresentar `output/plenario.md` para aprovação.

## Formato de Apresentação ao Usuário
"Aqui está a preparação de plenário (tese, debates e quesitação). Aprovar para revisão, ou ajustar?"

## Ação do Pipeline Runner após a resposta
1. Se aprovado: avançar para o Step 09 (revisão).
2. Se ajustes: registrar e retornar ao Step 07.

## Quality Gate
- [ ] Advogado aprovou a preparação ou indicou ajustes
