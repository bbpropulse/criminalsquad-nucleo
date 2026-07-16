---
step: "08"
name: "Aprovar Final"
type: checkpoint
depends_on: step-07
---

# 🛑 Checkpoint: Aprovar Final

## Para o Pipeline Runner

Apresentar ao advogado a minuta já revisada (APPROVE pela Vera Veredito) e o relatório de revisão, e obter a aprovação final **antes de gerar o checklist de encaminhamento** ao MP / à audiência de homologação. Este é o checkpoint humano imediatamente anterior ao encaminhamento (ato irreversível).

## Formato de Apresentação ao Usuário

Ler `output/acordo-minuta.md` e `output/revisao-juridica.md` e apresentar no formato:

```
✅ Vera Veredito aprovou a minuta (veredicto: APPROVE) e o Citation Gate não
   encontrou pendências.

📄 Peça: output/acordo-minuta.md
📋 Pontos confirmados na revisão:
[3-5 bullets do relatório de revisão]

🤝 Instituto: [ANPP / transação / sursis / colaboração]
📬 Destinatário: [MP / juízo / autoridade policial]
⚠️ Decisão de aceitar o acordo: do cliente (consentimento informado).

---
Aprovar a versão final e gerar o checklist de encaminhamento?

1. ✅ Aprovar final → Edu Encaminhamento gera checklist + versão final
2. 🔄 Pedir um último ajuste → volta à Nara Negociação (Step 05) e re-revisa
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar final):
- Avançar para o Step 09 (Edu Encaminhamento — Checklist de Encaminhamento)

### Se opção 2 (Último ajuste):
- Coletar as instruções do usuário
- Retornar ao Step 05 (Redação da Minuta)
- Após o ajuste, a peça passa novamente pelo Step 07 (revisão) e Step 08

## Output Format

```
Decisão registrada: [1 | 2]
Instruções (se opção 2): [texto literal do usuário]
```

## Output Example

```
Decisão registrada: 1
Instruções: —
```

## Veto Conditions

Reject and redo if ANY are true:
1. O veredicto da revisão (Step 07) não é APPROVE.
2. O usuário não aprovou explicitamente a versão final (opção 1) antes de avançar ao encaminhamento.

## Quality Criteria

- [ ] O veredicto da revisão (Step 07) é APPROVE
- [ ] O usuário aprovou explicitamente a versão final (opção 1) antes de avançar
