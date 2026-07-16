---
step: "07"
name: "Comunicação ao Cliente"
type: agent
agent: comunicador
depends_on: step-06
---

# Step 07: Edu E-mail — Comunicação ao Cliente

## Para o Pipeline Runner

Executar a redação e o envio das comunicações pela persona **Edu E-mail** (`agents/comunicador.custom.md`), que carrega a skill `email-juridico` e se apoia no subagente nativo `.claude/agents/follow-up-cliente.md`.

O Edu deve redigir o **e-mail de boas-vindas** ao cliente e enviar, em anexo/corpo, a **proposta de honorários + minuta de contrato** (`output/proposta-honorarios.md`) e o **checklist de onboarding** (`output/onboarding.md`), exatamente como aprovados no Step 06. NÃO alterar valores, prazos ou condições; NUNCA prometer resultado.

## Inputs para este Step

- `output/onboarding.md` → pacote de boas-vindas e checklist aprovados
- `output/proposta-honorarios.md` → proposta + minuta de contrato aprovadas
- `output/intake.md` → contato do cliente (e-mail/telefone)
- Skill `email-juridico` (`skills/email-juridico/SKILL.md`) → tom, estrutura e formalidade
- Best-practice de referência (não duplicar): `_criminalsquad/core/best-practices/atendimento-cliente-juridico.md`

## Expected Outputs

- `output/comunicacao.md` → registro das comunicações ao cliente, contendo:
  - **E-mail de boas-vindas** (assunto + corpo, tom acolhedor e profissional, sem promessa de resultado)
  - **Anexos/itens enviados:** proposta de honorários + minuta de contrato + checklist de documentos
  - **Próximos passos** comunicados ao cliente (assinatura, envio de documentos, canais e SLA)
  - **Registro do envio** (destinatário, data/hora, canal) — ou status "pronto para envio" se o envio for manual

## Execution Mode

- **Modo:** Inline
- **Skills:** `email-juridico`
- **Apoio:** subagente nativo `follow-up-cliente`

## Quality Gate

Para encerrar o pipeline:
- [ ] `output/comunicacao.md` existe
- [ ] O e-mail de boas-vindas tem assunto e corpo claros e NÃO promete resultado
- [ ] A proposta/contrato e o checklist de onboarding aprovados estão referenciados como enviados
- [ ] Os valores e condições conferem com `output/proposta-honorarios.md` (sem alteração)
- [ ] Os próximos passos (assinatura, documentos, canais/SLA) foram comunicados
- [ ] O registro de envio (ou status "pronto para envio") está preenchido

Concluído este step, o pipeline está finalizado: o novo cliente foi triado, aceito, onboardado e recebeu as boas-vindas com a proposta de honorários.
