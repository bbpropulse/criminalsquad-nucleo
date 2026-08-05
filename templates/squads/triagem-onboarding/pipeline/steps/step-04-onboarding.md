---
step: "04"
name: "Onboarding do Cliente"
type: agent
agent: onboarding
depends_on: step-03
---

# Step 04: Olívia Onboarding — Onboarding do Cliente

## Para o Pipeline Runner

Executar o onboarding pela persona **Olívia Onboarding** (`agents/onboarding.custom.md`), que se apoia no subagente nativo `.claude/agents/onboarding-cliente.md`.

⚠️ **Este step só roda no caminho "ACEITAR"** (decisão do Step 03). Se a decisão foi declinar/encaminhar, o pipeline já foi encerrado no Step 03 com a carta de declínio.

A Olívia deve montar o **pacote de boas-vindas** e o **checklist de coleta de documentos** do cliente aceito — documentos a assinar (contrato de honorários, procuração ad judicia CPC 105, termo LGPD, declaração de hipossuficiência se gratuidade), abertura de pasta e cadência de comunicação. NÃO calcular honorários (Step 05) nem disparar e-mails (Step 07).

## Inputs para este Step

- `output/decisao.md` → confirmação de que o caso foi ACEITO
- `output/triagem.md` → ficha do caso, área, dados do cliente
- `output/intake.md` → dados de contato e documentos já trazidos
- `_criminalsquad/_memory/company.md` → padrões do escritório (software de gestão, SLAs)
- Best-practice de referência (não duplicar): `_criminalsquad/core/best-practices/atendimento-cliente-juridico.md`

## Expected Outputs

- `output/onboarding.md` → pacote de onboarding do cliente, contendo:
  - **Mensagem de boas-vindas** (acolhedora e profissional, sem promessa de resultado)
  - **Checklist de documentos a coletar/assinar:** contrato de honorários, procuração ad judicia et extra (CPC 105), termo de consentimento LGPD (Lei 13.709/2018), declaração de hipossuficiência (CPC 98 §3) se gratuidade, RG/CPF/comprovante de endereço
  - **Abertura de pasta** (estrutura de pasta do cliente)
  - **Cadência de comunicação** (canais + SLA: atualização mensal, resposta em 24h úteis)

## Execution Mode

- **Modo:** Inline
- **Skills:** Nenhuma
- **Apoio:** subagente nativo `onboarding-cliente`

## Quality Gate

Antes de avançar para o Step 05:
- [ ] `output/onboarding.md` existe
- [ ] A decisão de origem foi ACEITAR (caso contrário este step não deveria rodar)
- [ ] O checklist de documentos inclui contrato, procuração (CPC 105) e termo LGPD
- [ ] A mensagem de boas-vindas NÃO promete resultado
- [ ] A cadência de comunicação (canais + SLA) está definida
