---
step: "06"
name: "Gravação na Agenda"
type: agent
agent: agenda
depends_on: step-05
---

# Step 06: Aline Agenda — Gravação dos Eventos

## Para o Pipeline Runner

Executar a Aline Agenda (inline) para gravar, na agenda do escritório, um evento por prazo aprovado no Step 05 — com alerta antecipado (nunca no dia do vencimento). A captura/gravação usa a skill `agenda-juridica` (slot Google Calendar); a inteligência de preparação apoia-se no subagente nativo `agenda-audiencia` (sobretudo para atos com data designada, como audiências/AIJ).

## Inputs para este Step

- `output/prazos.yaml` → prazos com `aprovado: true` (Steps 04-05)
- `output/carteira.md` → contexto do escritório/cliente (Step 01)

## Recursos a Referenciar (sem duplicar)

- Skill `skills/agenda-juridica/SKILL.md` → gravação no Google Calendar / exportação `.ics`, alerta antecipado
- Subagente nativo `.claude/agents/agenda-audiencia.md` → ficha do ato, checklist D-7/D-3/D-1/D-0, presencial × videoconferência (quando o ato tiver data designada)

## Expected Outputs

- Eventos gravados na agenda (um por prazo aprovado), cada um com:
  - Título: `[ato] — Proc [processo] (cliente)`
  - Data: a `data_fatal` do prazo
  - Alertas: conforme a régua D-7/D-3/D-1/D-0 (alerta antecipado, nunca só no D-0)
  - Descrição: fundamento legal + regime, vinculada ao número do processo e ao cliente
- Atualização em `output/prazos.yaml` de cada prazo agendado:

```yaml
    agendado: true
    evento_id: "id do evento na agenda (ou caminho do .ics)"
    agendado_em: "YYYY-MM-DD HH:MM"
```

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** agenda-juridica

## Quality Gate

Antes de avançar para o Step 07, verificar:
- [ ] Um evento gravado por prazo `aprovado: true`
- [ ] Cada evento tem alerta ANTECIPADO (régua D-7/D-3/D-1), não apenas no dia fatal
- [ ] Evento vinculado ao número do processo e ao cliente
- [ ] `output/prazos.yaml` atualizado com `agendado: true` e `evento_id`
- [ ] Sigilo respeitado: descrição do evento não expõe dados sensíveis desnecessários (ver `etica-oab-sigilo`)

Se a ferramenta de agenda (slot) não estiver conectada, exportar `.ics` para `output/` e informar o usuário para importação manual — não pular o agendamento silenciosamente.
