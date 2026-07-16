---
step: "06"
name: "Aprovar Peça"
type: checkpoint
depends_on: step-05
---

# 🛑 Checkpoint: Aprovar Peça

## Para o Pipeline Runner

Apresentar ao advogado a peça redigida e aguardar aprovação antes da revisão final. Esta é a oportunidade do advogado pedir ajustes de mérito (teses, ênfase, pedidos) antes do veredicto da revisora.

## Formato de Apresentação ao Usuário

Ler `output/recurso.md` e apresentar no formato:

```
✍️ Rafael Recurso redigiu a peça.

PEÇA: [nome da peça] ([fundamento legal])
ESTRUTURA: Parte 1 — Interposição (juízo a quo) | Parte 2 — Razões (tribunal)
TESES PRINCIPAIS: [lista resumida das teses]
PRAZO/TEMPESTIVIDADE: [data-limite] — [✅/⚠️]

[Trecho de abertura da interposição e das razões]

Aprova a peça para revisão final? (responda "sim", ou descreva os ajustes desejados)
```

## Ação do Pipeline Runner após Aprovação

1. Registrar a aprovação (ou os ajustes solicitados).
2. Se houver ajustes → devolver ao Step 05 com as instruções específicas antes de seguir.
3. Se aprovado → avançar para o Step 07 (Revisão Final).

## Quality Gate

- [ ] O advogado visualizou a peça (interposição + razões)
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** a data-limite do prazo foi reapresentada ao advogado antes da aprovação.

## Opções Especiais

- **"ajustar [ponto]"** → registrar o ajuste e retornar ao Step 05 (Rafael Recurso) com a instrução.
- **"adicionar tese subsidiária"** → encaminhar ao Step 05 para escalonar a nova tese pelo princípio da eventualidade.
