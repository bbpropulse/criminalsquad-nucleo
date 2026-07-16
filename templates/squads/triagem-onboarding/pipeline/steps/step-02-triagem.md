---
step: "02"
name: "Triagem do Caso"
type: agent
agent: triagem
depends_on: step-01
---

# Step 02: Tânia Triagem — Triagem do Caso

## Para o Pipeline Runner

Executar a triagem do novo caso pela persona **Tânia Triagem** (`agents/triagem.custom.md`), que se apoia no subagente nativo `.claude/agents/triagem-novo-caso.md`.

A Tânia deve, a partir do `output/intake.md`, produzir a **ficha de triagem em 8 blocos**, verificar **conflito de interesses (EAOAB art. 17)**, checar **prescrição/decadência (CP 109)** e avaliar a **viabilidade** (procedência provável / prazo / custo / risco), encerrando com uma **recomendação fundamentada** de aceitar / declinar / encaminhar. NÃO decidir no lugar do advogado (isso é o checkpoint do Step 03) e NUNCA prometer resultado.

## Inputs para este Step

- `output/intake.md` → relato dos fatos, tipo penal aparente, urgência e documentos
- Documentos trazidos pelo cliente nos caminhos indicados (tipicamente sob `acervo/casos/`)
- `_criminalsquad/_memory/company.md` → contexto e áreas de atuação do escritório
- Best-practices de referência (não duplicar conteúdo):
  - `_criminalsquad/core/best-practices/atendimento-cliente-juridico.md`
  - `_criminalsquad/core/best-practices/etica-oab-sigilo.md` (sigilo + vedação de promessa de resultado)

## Expected Outputs

- `output/triagem.md` → ficha de triagem completa para a decisão do advogado, contendo:
  - **Ficha em 8 blocos** (dados, fatos, documentos, expectativa do cliente, etc.)
  - **Classificação por área** (criminal — subárea/tipo penal)
  - **Conflito de interesses (EAOAB 17):** livre / impedido + justificativa
  - **Prescrição/decadência (CP 109):** situação do prazo prescricional
  - **Viabilidade:** probabilidade de êxito (alta/média/baixa) + tempo + custo + risco
  - **Recomendação:** aceitar / declinar / encaminhar — fundamentada (sem promessa de resultado)

## Execution Mode

- **Modo:** Inline
- **Skills:** Nenhuma
- **Apoio:** subagente nativo `triagem-novo-caso`

## Quality Gate

Antes de avançar para o Step 03:
- [ ] `output/triagem.md` existe
- [ ] A ficha de triagem (8 blocos) está preenchida (campos sem dado marcados como "a definir")
- [ ] A verificação de conflito de interesses (EAOAB 17) foi concluída
- [ ] A prescrição/decadência (CP 109) foi checada
- [ ] A viabilidade (procedência / prazo / custo / risco) foi avaliada
- [ ] Há recomendação fundamentada (aceitar/declinar/encaminhar) SEM promessa de resultado
- [ ] Nenhum dado sigiloso do cliente foi exposto fora de `output/` interno (etica-oab-sigilo)

Se qualquer verificação falhar, solicitar que a Tânia Triagem refaça a ficha.
