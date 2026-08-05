---
step: "06"
name: "Aprovar Peça"
type: checkpoint
depends_on: step-05
---

# 🛑 Checkpoint: Aprovar Peça

## Para o Pipeline Runner

Apresentar ao advogado a peça redigida e aguardar aprovação antes da revisão final. Esta é a oportunidade do advogado pedir ajustes de mérito (narrativa dos fatos, tipificação, pedidos, provas) antes do veredicto da revisora.

## Formato de Apresentação ao Usuário

Ler `output/peca.md` e apresentar no formato:

```
✍️ Quim Queixa redigiu a peça.

PEÇA: [Oferecimento de Representação | Requerimento de Instauração de Investigação | Queixa-Crime | Retratação/Renúncia] ([fundamento legal])
ENDEREÇAMENTO: [delegado/MP | juiz]
ESTRUTURA: Endereçamento | Preâmbulo | Dos Fatos | Do Direito | Dos Pedidos | Fechamento [| Rol de testemunhas]
PONTOS-CHAVE: [tipificação, legitimidade da vítima e — na queixa — procuração com poderes especiais]
DECADÊNCIA: data-limite [DD/MM/AAAA] — [✅ dentro do prazo | ⚠️ vencido]

[Trecho de abertura da peça]

Aprova a peça para revisão final? (responda "sim", ou descreva os ajustes desejados)
```

## Ação do Pipeline Runner após Aprovação

1. Registrar a aprovação (ou os ajustes solicitados).
2. Se houver ajustes → devolver ao Step 05 com as instruções específicas antes de seguir.
3. Se aprovado → avançar para o Step 07 (Revisão Final).

## Quality Gate

- [ ] O advogado visualizou a peça
- [ ] **VERIFICAÇÃO DE DECADÊNCIA (crítico):** a data-limite do prazo de 6 meses foi reapresentada ao advogado antes da aprovação.

## Opções Especiais

- **"ajustar [ponto]"** → registrar o ajuste e retornar ao Step 05 (Quim Queixa) com a instrução.
- **"falta um pedido"** → encaminhar ao Step 05 para completar os pedidos (ex.: na queixa, indenização — CPP art. 387, IV; no requerimento/representação, perícia, indiciamento).
- **"incluir outro ofensor"** → na queixa-crime, devolver ao Step 05 para garantir a INDIVISIBILIDADE (CPP art. 48): todos os coautores/partícipes conhecidos.
