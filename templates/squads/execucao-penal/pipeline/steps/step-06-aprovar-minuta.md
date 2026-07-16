---
step: "06"
name: "Aprovar Minuta"
type: checkpoint
depends_on: step-05
---

# 🛑 Checkpoint: Aprovar Minuta

## Para o Pipeline Runner

Apresentar ao operador a minuta completa (`output/peticao-execucao-minuta.md`) e aguardar aprovação antes de enviar para a revisão jurídica formal.

## Formato de Apresentação ao Usuário

Ler `output/peticao-execucao-minuta.md` e apresentar no formato:

```
✍️ Pedro Progressão concluiu a minuta da petição de [INSTITUTO]!

📄 **ENDEREÇAMENTO:** [Vara de Execução / comarca, autos, apenado]

📄 **FATOS:** [pena, regime atual, dies a quo por detração — 1-2 linhas]

⏱️ **GATE TEMPORAL DO ART. 112:** [REGRA_APROVADA_POR_HUMANO | NAO_APLICAVEL] · verificado/aprovado em [data] · revisor [nome/OAB ou cargo]

📄 **REQUISITO OBJETIVO:** [regra aprovada, base, data-base e memória] — fontes/documentos: [...]

📄 **REQUISITO SUBJETIVO:** [conduta carcerária] — fundamento: [...]

📄 **TESES ACESSÓRIAS:** [se houver; indicar versão temporal e fonte oficial]

📄 **PEDIDO:** [deferimento do instituto + guia atualizada + juntada de documentos]

---
A minuta está pronta para a revisão jurídica?

1. ✅ Aprovar e enviar para revisão (Vânia Veredito)
2. 🔄 Pedir ajustes na minuta → Pedro Progressão refaz apenas o solicitado
3. ↩️ Voltar aos requisitos → revisar o cabimento/fundamentação (Step 04)
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar):
- Avançar para o Step 07 (Vânia Veredito — Revisão Jurídica)

### Se opção 2 (Ajustes na minuta):
- Coletar as instruções específicas do usuário
- Retornar ao Step 05 com o contexto das correções solicitadas
- O Pedro Progressão refaz APENAS as partes indicadas
- Após correções, retornar ao Step 06

### Se opção 3 (Rever requisitos):
- Retornar ao Step 04 (requisitos do instituto)
- Preservar `output/pesquisa-juridica.md` e `output/resumo-execucao.md` existentes

## Quality Gate

- [ ] O usuário tomou uma decisão explícita (1, 2 ou 3)
- [ ] Se houver art. 112, o gate temporal está aprovado por revisor humano, na data corrente e sem pendências
- [ ] Se o gate estiver ausente/expirado, não oferecer a opção de aprovar; retornar ao Step 03/04 com status `BLOQUEADO`
- [ ] Em caso de ajuste, as instruções específicas foram registradas para o Step 05/04
