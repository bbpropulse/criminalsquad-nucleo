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

## O `.ics` SAI DO MOTOR, NÃO DA SUA MÃO

Sem slot de agenda conectado, **não escreva iCalendar à mão**. Invoque o gerador
determinístico:

```bash
node skills/agenda-juridica/scripts/gerar-ics.mjs '{"calendario":"Prazos — rodada DD/MM/AAAA","eventos":[
  {"uid":"prazo-1","titulo":"FATAL — <ato> (<cliente>)","data":"AAAA-MM-DD",
   "descricao":"Proc <CNJ>; <órgão> | <fundamento legal + regime>","alarmes_dias":[7,3,1,0]}
]}' > squads/{code}/output/prazos.ics
```

- **Um evento por prazo `aprovado: true`, incluindo os `[A CONFERIR]`** (passe
  `"a_conferir": true`) — prazo fora do motor é o que mais se esquece, e deixá-lo
  fora do arquivo é deixá-lo fora da agenda.
- `alarmes_dias` recebe a **régua do `prazos.yaml`**. Régua vazia sai com aviso.
- Ato com hora designada (audiência) usa `inicio` + `fuso_offset` (ex.: `-03:00`).

> **Medido no smoke-run de 27/07/2026 (nota 50):** o `.ics` escrito à mão saiu
> **sem um único VALARM** e sem `DTSTAMP`. A régua D-7/D-3/D-1/D-0 vivia no
> `prazos.yaml` e morria na entrega — o squad agendava datas que ninguém seria
> lembrado de cumprir. Formato com regra (RFC 5545) é trabalho de motor, pela
> mesma razão que a data é: o modelo erra o que não pode errar.

## Recursos a Referenciar (sem duplicar)

- Skill `skills/agenda-juridica/SKILL.md` → gravação no Google Calendar / exportação `.ics`, alerta antecipado
- Script `skills/agenda-juridica/scripts/gerar-ics.mjs` → emissão determinística do `.ics` com VALARM por régua
- Subagente nativo `.claude/agents/agenda-audiencia.md` → ficha do ato, checklist D-7/D-3/D-1/D-0, presencial × videoconferência (quando o ato tiver data designada)

## Expected Outputs

- Eventos gravados na agenda (um por prazo aprovado), cada um com:
  - Título: `[ato] — Proc [número do processo]` — **sem o nome do cliente**. O
    título aparece na notificação de tela bloqueada e na agenda compartilhada com
    a secretaria; nome ao lado do ato criminal ali é exposição desnecessária
    (dever de sigilo do EAOAB; Provimento 205/2021). O nome vai no campo
    `cliente`, que o motor põe na **descrição** — visível só para quem abre o
    evento. O gerador **avisa** se o nome vazar para o título.
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
