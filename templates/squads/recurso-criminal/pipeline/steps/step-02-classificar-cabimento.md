---
step: "02"
name: "Classificação do Cabimento"
type: agent
agent: classificador
depends_on: step-01
---

# Step 02: Cida Cabimento — Classificação do Cabimento e Prazo

## Para o Pipeline Runner

Executar o Classificador (Cida Cabimento). A partir da decisão registrada, ela deve **(1)** aplicar o mapa de manifestações judiciais e indicar a **peça recursal cabível**, **(2)** calcular o **prazo** (CPP × JECRIM) a partir da data da intimação e **(3)** apontar se há recurso prévio cabível (ex.: Embargos de Declaração contra vício de integração).

## Inputs para este Step

- `output/decisao.md` → decisão atacada e metadados (natureza, JECRIM, votação, data da intimação)
- Best-practice `recurso-criminal` → mapa de cabimento e tabela de prazos (CPP 581/593/416; LEP 197; CPP 619/621)

## Expected Outputs

- `output/cabimento.md` → peça recursal indicada + fundamento legal + prazo calculado + alertas de tempestividade e cabimento

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** nenhuma

## Quality Gate

Antes de avançar para o Step 03, verificar:
- [ ] `output/cabimento.md` existe
- [ ] Indica exatamente UMA peça cabível principal (com fundamento: artigo do CPP/LEP/Lei 9.099)
- [ ] Quando aplicável, sinaliza recurso prévio (Embargos de Declaração) ou recurso alternativo
- [ ] Confirma se a peça é bipartida (interposição + razões) ou peça única (JECRIM)
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** o prazo está calculado com termo inicial (data da intimação), prazo legal e data-limite explícita. Se a data-limite já tiver passado, o output DEVE registrar alerta de possível intempestividade e preclusão.

Se qualquer verificação falhar, solicitar que a Cida Cabimento complete o item antes de prosseguir.
