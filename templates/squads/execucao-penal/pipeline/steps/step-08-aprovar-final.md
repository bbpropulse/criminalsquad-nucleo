---
step: "08"
name: "Aprovar Final"
type: checkpoint
depends_on: step-07
---

# 🛑 Checkpoint: Aprovar Final

## Para o Pipeline Runner

Apresentar ao operador a peça já revisada (APPROVE pela Vânia Veredito, com Citation Gate satisfeito) e o relatório de revisão, e obter a aprovação final **antes de gerar a versão protocolável** (último checkpoint humano antes do passo de protocolo).

## Formato de Apresentação ao Usuário

Ler `output/peticao-execucao-minuta.md` e `output/revisao-juridica.md` e apresentar no formato:

```
✅ Vânia Veredito aprovou a petição de [INSTITUTO] (veredicto: APPROVE).

📄 Peça: output/peticao-execucao-minuta.md
📋 Pontos confirmados na revisão:
[3-5 bullets do relatório de revisão]
🔎 Citation Gate: [todas as citações VERIFICADAS — verificador-citacoes]
⏱️ Temporal Gate do art. 112: [REGRA_APROVADA_POR_HUMANO | NAO_APLICAVEL] · verificado em [data corrente] · revisor [identificação]

⛓️ Instituto: [INSTITUTO] · Autos: [nº] · Vara de Execução: [comarca]

---
Aprovar a versão final e gerar o checklist de protocolo?

1. ✅ Aprovar final → Tadeu Trâmite gera checklist + versão protocolável (+ orientação de agravo)
2. 🔄 Pedir um último ajuste → volta ao Pedro Progressão (Step 05) e re-revisa
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar final):
- Avançar para o Step 09 (Tadeu Trâmite — Checklist de Protocolo)

### Se opção 2 (Último ajuste):
- Coletar as instruções do usuário
- Retornar ao Step 05 (Redação do Pedido)
- Após o ajuste, a peça passa novamente pelo Step 07 (revisão + Citation Gate) e Step 08

## Quality Gate

- [ ] O veredicto da revisão (Step 07) é APPROVE
- [ ] O Citation Gate foi satisfeito (nenhuma citação pendente)
- [ ] Se houver art. 112/número de progressão, o Temporal Gate foi satisfeito na data corrente e consta do relatório de revisão
- [ ] Gate temporal ausente ou expirado impede mostrar a opção de gerar versão final; retornar ao Step 03/04 como `BLOQUEADO`
- [ ] O usuário aprovou explicitamente a versão final (opção 1) antes de avançar
