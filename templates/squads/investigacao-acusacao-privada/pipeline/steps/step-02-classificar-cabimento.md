---
step: "02"
name: "Classificação do Cabimento"
type: agent
agent: classificador
depends_on: step-01
---

# Step 02: Cida Cabimento — Espécie de Ação Penal e Peça Cabível

## Para o Pipeline Runner

Executar a Classificadora (Cida Cabimento). A partir do relato registrado, ela deve **(1)** distinguir a espécie de ação penal — **pública incondicionada × pública condicionada à representação × privada** —, **(2)** indicar a **peça correta** da fase pré-processual/ação privada e seu fundamento legal e **(3)** calcular e alertar sobre a **DECADÊNCIA** (prazo de 6 meses, fatal) a partir da data do conhecimento da autoria.

## Inputs para este Step

- `output/fatos.md` → relato, tipo penal provável, autoria, contexto Maria da Penha, atuação do MP, objetivo e data do conhecimento da autoria
- Best-practice `peticao-criminal` → técnica e padrões da peça penal de 1º grau
- Skills de peça (mapa de distinção): `skills/representacao`, `skills/requerimento-investigacao`, `skills/queixa-crime`, `skills/retratacao-representacao`

## Expected Outputs

- `output/cabimento.md` → espécie de ação penal + peça indicada + fundamento legal + cálculo do prazo decadencial (termo inicial, 6 meses, data-limite) + alertas (decadência e indivisibilidade)

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** nenhuma

## Quality Gate

Antes de avançar para o Step 03, verificar:
- [ ] `output/cabimento.md` existe
- [ ] Declara a espécie de ação penal (pública incondicionada | pública condicionada à representação | privada | privada subsidiária)
- [ ] Indica exatamente UMA peça cabível principal, com fundamento legal expresso (artigo):
  - Pública condicionada → **Oferecimento de Representação** (CPP art. 5º, §4º)
  - Pública incondicionada ou privada, autoria a apurar → **Requerimento de Instauração de Investigação** (CPP art. 5º, II / art. 5º, §5º)
  - Privada, autoria conhecida → **Queixa-Crime** (CPP art. 41 + art. 44)
  - Vítima quer desistir → **Retratação/Renúncia da Representação** (CPP art. 25 / CP art. 102; Maria da Penha art. 16)
- [ ] Aponta o endereçamento correto (delegado/MP para representação e requerimento — "Excelentíssimo", Lei 12.830/2013; juiz para a queixa-crime; delegado/MP/juiz para a retratação)
- [ ] **VERIFICAÇÃO DE DECADÊNCIA (crítico):** o prazo de 6 meses está calculado com termo inicial (data do conhecimento da autoria — ou esgotamento do prazo do MP, na subsidiária), prazo legal (CP art. 103 / CPP art. 38) e **data-limite explícita**. Se a data-limite já tiver passado, o output DEVE registrar alerta de DECADÊNCIA consumada (extinção da punibilidade — CP art. 107, IV).
- [ ] Quando houver concurso de pessoas (mais de um ofensor) na queixa, registra alerta de **INDIVISIBILIDADE** (CPP art. 48): processar todos ou ninguém.

Se qualquer verificação falhar, solicitar que a Cida Cabimento complete o item antes de prosseguir.

## Nota Especial

A distinção da espécie de ação é a decisão central: se a lei nada disser, a ação é **pública incondicionada**; só é condicionada ou privada com **previsão legal expressa**. Crimes contra a honra (CP 138/139/140) são, em regra, de **ação privada** (CP 145) — atenção às exceções (injúria real, injúria preconceituosa, funcionário público em razão das funções — Súmula 714 STF). Ameaça (CP 147, §2º) e stalking (CP 147-A, §3º) são **condicionados à representação** — salvo violência doméstica contra a mulher (incondicionada).
