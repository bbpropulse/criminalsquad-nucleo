---
step: "06"
name: "Aprovar Proposta/Onboarding"
type: checkpoint
depends_on: step-05
---

# 🛑 Checkpoint: Aprovar Proposta / Onboarding

## Para o Pipeline Runner

Apresentar ao advogado o pacote de onboarding (`output/onboarding.md`) e a proposta de honorários (`output/proposta-honorarios.md`) e aguardar a aprovação antes de o Edu E-mail comunicar ao cliente.

## Formato de Apresentação ao Usuário

Ler `output/onboarding.md` e `output/proposta-honorarios.md` e apresentar no formato:

```
🤝 Olívia Onboarding e 💼 Hugo Honorários concluíram o pacote de entrada do cliente!

📋 **ONBOARDING:**
- Documentos a assinar: [contrato, procuração CPC 105, termo LGPD, ...]
- Cadência: [canais + SLA]

💼 **PROPOSTA DE HONORÁRIOS:**
- Entrada: [valor]  | Êxito: [percentual, se houver]
- Pagamento: [à vista / parcelado]
- Custas/despesas: [resumo]

---
O pacote está pronto para ser enviado ao cliente?

1. ✅ Aprovar e enviar (Edu E-mail dispara boas-vindas + proposta/contrato)
2. 🔄 Ajustar honorários → Hugo Honorários refaz apenas o solicitado
3. 🔄 Ajustar onboarding → Olívia Onboarding refaz apenas o solicitado

Lembrete ético: confira que a proposta não promete resultado e respeita o piso da OAB seccional.
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar):
- Avançar para o Step 07 (Edu E-mail — Comunicação ao Cliente)

### Se opção 2 (Ajustar honorários):
- Coletar as instruções específicas do usuário
- Retornar ao Step 05 com o contexto das correções; o Hugo refaz APENAS o solicitado
- Após correções, retornar ao Step 06

### Se opção 3 (Ajustar onboarding):
- Coletar as instruções específicas do usuário
- Retornar ao Step 04 com o contexto das correções; a Olívia refaz APENAS o solicitado
- Após correções, retornar ao Step 06

## Quality Gate

- [ ] O usuário tomou uma decisão explícita (1, 2 ou 3)
- [ ] A proposta apresentada não promete resultado e respeita o piso da OAB seccional
- [ ] Em caso de ajuste, as instruções específicas foram registradas para o Step 05 ou 04
