---
step: "08"
name: "Aprovar Final"
type: checkpoint
depends_on: step-07
---

# 🛑 Checkpoint: Aprovar Final

## Para o Pipeline Runner

Apresentar ao advogado a peça já revisada (APPROVE pela Vera Veredito) e o relatório de revisão, e obter a aprovação final antes de gerar o checklist de protocolo e a versão protocolável.

## Formato de Apresentação ao Usuário

Ler `output/resposta-acusacao-minuta.md` e `output/revisao-juridica.md` e apresentar no formato:

```
✅ Vera Veredito aprovou a resposta à acusação (veredicto: APPROVE).

📄 Peça: output/resposta-acusacao-minuta.md
📋 Pontos confirmados na revisão:
[3-5 bullets do relatório de revisão]

⏰ Prazo (CPP 396): [data — de output/caso.md]

---
Aprovar a versão final e gerar o checklist de protocolo?

1. ✅ Aprovar final → Pablo Protocolo gera checklist + versão protocolável
2. 🔄 Pedir um último ajuste → volta ao Rafael Resposta (Step 05) e re-revisa
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar final):
- Avançar para o Step 09 (Pablo Protocolo — Checklist de Protocolo)

### Se opção 2 (Último ajuste):
- Coletar as instruções do usuário
- Retornar ao Step 05 (Redação da Minuta)
- Após o ajuste, a peça passa novamente pelo Step 07 (revisão) e Step 08

## Quality Gate

- [ ] O veredicto da revisão (Step 07) é APPROVE
- [ ] O usuário aprovou explicitamente a versão final (opção 1) antes de avançar
