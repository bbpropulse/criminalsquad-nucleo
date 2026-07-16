---
step: "06"
name: "Aprovar Minuta"
type: checkpoint
depends_on: step-05
---

# 🛑 Checkpoint: Aprovar Minuta

## Para o Pipeline Runner

Apresentar ao advogado a minuta completa (`output/resposta-acusacao-minuta.md`) e aguardar aprovação antes de enviar para a revisão jurídica formal.

## Formato de Apresentação ao Usuário

Ler `output/resposta-acusacao-minuta.md` e apresentar no formato:

```
✍️ Rafael Resposta concluiu a minuta da resposta à acusação!

📄 **ENDEREÇAMENTO:** [vara/comarca, processo, réu]

📄 **PRELIMINARES (CPP 395):**
[um bullet por preliminar com o ponto central]

📄 **ABSOLVIÇÃO SUMÁRIA / MÉRITO (CPP 397):**
[um bullet por tese, com o fundamento]

📄 **TESE PRINCIPAL:** [resumo em 1-2 linhas]

📄 **ROL DE TESTEMUNHAS (CPP 401):** [n testemunhas]
📄 **PROVAS REQUERIDAS:** [lista]

---
A minuta está pronta para a revisão jurídica?

1. ✅ Aprovar e enviar para revisão (Vera Veredito)
2. 🔄 Pedir ajustes na minuta → Rafael Resposta refaz apenas o solicitado
3. ↩️ Voltar à seleção de teses → revisar quais teses entram na peça
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar):
- Avançar para o Step 07 (Vera Veredito — Revisão Jurídica)

### Se opção 2 (Ajustes na minuta):
- Coletar as instruções específicas do usuário
- Retornar ao Step 05 com o contexto das correções solicitadas
- O Rafael Resposta refaz APENAS as partes indicadas
- Após correções, retornar ao Step 06

### Se opção 3 (Rever teses):
- Retornar ao Step 04 (seleção de teses)
- Preservar `output/pesquisa-juridica.md` e `output/resumo-autos.md` existentes

## Quality Gate

- [ ] O usuário tomou uma decisão explícita (1, 2 ou 3)
- [ ] Em caso de ajuste, as instruções específicas foram registradas para o Step 05/04
