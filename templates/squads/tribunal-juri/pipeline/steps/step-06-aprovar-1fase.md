---
step: "06"
name: "Aprovar 1ª Fase"
type: checkpoint
depends_on: step-05
---

# 🛑 Checkpoint: Aprovar Alegações da 1ª Fase

## Para o Pipeline Runner
Apresentar `output/alegacoes-1fase.md` para aprovação do advogado.

## Formato de Apresentação ao Usuário
"Aqui está a minuta das alegações da 1ª fase. Aprovar para revisão, ou pedir ajustes?"

## Ação do Pipeline Runner após a resposta
1. Se aprovado: avançar para o Step 09 (revisão). (Plenário, Step 07, só após eventual pronúncia.)
2. Se ajustes: registrar e retornar ao Step 05.

## Quality Gate
- [ ] Advogado aprovou a minuta ou indicou ajustes
