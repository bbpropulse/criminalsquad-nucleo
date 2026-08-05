---
step: "06"
name: "Aprovar Minuta"
type: checkpoint
depends_on: step-05
---

# 🛑 Checkpoint: Aprovar Minuta

## Para o Pipeline Runner

Apresentar ao advogado a minuta completa (`output/acordo-minuta.md`) e aguardar aprovação antes de enviar para a revisão jurídica formal.

## Formato de Apresentação ao Usuário

Ler `output/acordo-minuta.md` e apresentar no formato:

```
✍️ Nara Negociação concluiu a minuta do acordo/manifestação!

📄 **INSTITUTO:** [ANPP / transação / sursis / colaboração]
📄 **DESTINATÁRIO:** [MP / juízo / autoridade policial]

📄 **CABIMENTO:** [1-2 linhas — critério atendido]
📄 **REQUISITOS DEMONSTRADOS:** [um bullet por requisito, com fundamento]
📄 **ÓBICES AFASTADOS:** [um bullet por óbice]
📄 **CONDIÇÕES PROPOSTAS:** [lista]
📄 **RISCOS/CONSENTIMENTO:** [confissão/delação — alerta registrado]

---
A minuta está pronta para a revisão jurídica?

1. ✅ Aprovar e enviar para revisão (Vera Veredito)
2. 🔄 Pedir ajustes na minuta → Nara Negociação refaz apenas o solicitado
3. ↩️ Voltar à escolha do instituto → revisar instituto/condições
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar):
- Avançar para o Step 07 (Vera Veredito — Revisão Jurídica)

### Se opção 2 (Ajustes na minuta):
- Coletar as instruções específicas do usuário
- Retornar ao Step 05 com o contexto das correções solicitadas
- A Nara Negociação refaz APENAS as partes indicadas
- Após correções, retornar ao Step 06

### Se opção 3 (Rever instituto):
- Retornar ao Step 04 (instituto e termos)
- Preservar `output/pesquisa-juridica.md` e `output/resumo-autos.md` existentes

## Output Format

```
Decisão registrada: [1 | 2 | 3]
Instruções (se opção 2/3): [texto literal do usuário]
```

## Output Example

```
Decisão registrada: 2
Instruções: "Reduzir a prestação pecuniária e demonstrar a capacidade econômica
limitada do cliente; manter o restante."
```

## Veto Conditions

Reject and redo if ANY are true:
1. O usuário não tomou uma decisão explícita (1, 2 ou 3).
2. Em caso de ajuste, as instruções específicas não foram registradas para o Step 05/04.

## Quality Criteria

- [ ] O usuário tomou uma decisão explícita (1, 2 ou 3)
- [ ] Em caso de ajuste, as instruções específicas foram registradas para o Step 05/04
