---
step: "07"
name: "Notificação de Prazos"
type: agent
agent: notificador
depends_on: step-06
---

# Step 07: Edu E-mail — Notificação de Prazos

## Para o Pipeline Runner

Executar o Edu E-mail (inline) para disparar os lembretes e comunicações dos prazos agendados no Step 06 e consolidar o relatório final da rodada. O envio usa a skill `email-juridico` (slot Gmail/Resend); a régua de comunicação apoia-se no subagente nativo `follow-up-cliente`.

⚠️ **Rascunho antes do envio.** E-mail ao cliente é ato sensível. O Edu gera o draft e — fora de execução agendada autônoma — confirma com o usuário antes de enviar. Sem promessa de resultado, sem expor dados sigilosos a terceiros (ver `etica-oab-sigilo`).

## Inputs para este Step

- `output/prazos.yaml` → prazos com `agendado: true` (Step 06)
- `output/carteira.md` → advogado responsável e clientes (Step 01)
- `_criminalsquad/_memory/company.md` → assinatura/identidade do escritório

## Recursos a Referenciar (sem duplicar)

- Skill `skills/email-juridico/SKILL.md` → redação + envio (Gmail/Resend), rascunho-primeiro
- Subagente nativo `.claude/agents/follow-up-cliente.md` → régua de comunicação, tradução de juridiquês, modelos prontos

## Expected Outputs

- E-mails/lembretes disparados (ou rascunhados para aprovação):
  - **Interno (advogado responsável):** resumo dos prazos críticos da rodada + datas fatais + régua
  - **Cliente (quando aplicável):** comunicação sóbria do andamento/prazo, sem juridiquês e sem garantir resultado
- `output/relatorio-prazos.md` → relatório consolidado da rodada:

```markdown
# Relatório de Prazos — [DD/MM/AAAA]

## Resumo
- Publicações varridas: N | Marcadas como prazo: N | Agendadas: N

## Prazos da rodada
| Processo | Cliente | Ato | Regime | Data fatal | Agendado | Notificado |
|----------|---------|-----|--------|-----------|----------|------------|
| ...      | ...     | ... | PENAL  | DD/MM     | ✅        | ✅          |

## Alertas / Zonas cinzentas
- [prazos que exigiram confirmação de regime, vícios de intimação, etc.]

## Próxima varredura sugerida
- [data] (rotina diária recomendada — ciência ficta de 10 dias é tempo perigoso)
```

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** email-juridico

## Quality Gate

Ao concluir o Step 07, verificar:
- [ ] `output/relatorio-prazos.md` existe e lista todos os prazos da rodada
- [ ] Notificação interna ao advogado enviada/rascunhada com os prazos críticos
- [ ] Comunicação ao cliente (quando houver) é sóbria, sem promessa de resultado e sem expor dado sigiloso a terceiro
- [ ] `output/prazos.yaml` atualizado com `notificado: true` por prazo comunicado
- [ ] Nenhum e-mail ao cliente enviado sem aprovação (salvo execução agendada explicitamente autorizada)

Em falha de envio, registrar o erro no relatório, sugerir a correção e perguntar ao usuário os próximos passos — não reportar sucesso sem confirmação real do envio.
