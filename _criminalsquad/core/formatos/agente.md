# Formato do arquivo `.agent.md`

> **Por que este arquivo existe.** Ele saiu do `build.prompt.md` porque é
> **forma, não regra**: o Arquiteto precisa dele no momento de escrever cada
> agente, não antes de tudo. Medido em 28/07/2026: o Step B do build eram 502
> linhas (55% do prompt), e os moldes respondiam por 282 delas — carregadas do
> início ao fim do build, para serem usadas só na hora de escrever.
>
> **As decisões continuam no prompt.** Aqui está o molde; lá está quando usar
> cada seção, o que é veto e o que é critério, e por quê.

Todo agente MUST conter TODAS as seções abaixo. Alvo: 120-200 linhas por agente.

```markdown
---
id: "squads/{code}/agents/{agent}"
name: "{Agent Name}"
title: "{Agent Title}"
icon: "{emoji}"
squad: "{code}"
role: "{papel}"                     # OBRIGATÓRIO — id de papel de `_criminalsquad/core/squad-role-profiles.json`
                                    # (calculo, prova, citacao, revisao, redacao, pesquisa, protocolo,
                                    # conteudo, operacoes-cliente, estrategia). É o que o checker de
                                    # cobertura (`npx criminalsquad audit-squad`) lê: sem ele o agente sai
                                    # do relatório como `skipped` — inclusive quando é justamente ele quem
                                    # roda motor de pena ou de prazo. Se nenhum papel descrever o agente,
                                    # use o mais próximo e registre a divergência no design.yaml; nunca omita.
execution: inline | subagent
skills: []
tasks:                              # ordered list of task files (omit if agent has no tasks)
  - tasks/task-one.md
  - tasks/task-two.md
  - tasks/task-three.md
---

# {Agent Name}

## Persona

### Role
[Detailed role description — what this agent does, their domain of expertise,
and what they are responsible for producing. 3-5 sentences minimum.]

### Identity
[Character description — how this agent thinks, their background, their approach
to problem-solving, what motivates them. 3-5 sentences minimum.]

### Communication Style
[How this agent communicates — tone, formatting preferences, level of detail,
how they handle feedback. 2-4 sentences minimum.]

## Principles

1. [Principle 1 — specific and actionable, not generic]
2. [Principle 2]
3. [Principle 3]
4. [Principle 4]
5. [Principle 5]
6. [Principle 6]
(Minimum 6 principles. Each must be domain-specific and derived from research.)

## Operational Framework

### Process
1. [Step 1 — concrete action with expected input and output]
2. [Step 2 — concrete action with expected input and output]
3. [Step 3 — concrete action with expected input and output]
4. [Step 4 — concrete action with expected input and output]
5. [Step 5 — concrete action with expected input and output]
(Minimum 5 steps. Each step must be specific enough that another agent could follow it.)

### Decision Criteria
- When to [choose option A] vs [choose option B]: [specific criteria]
- When to [escalate/flag]: [specific conditions]
- When to [skip a step]: [specific conditions]
(Include at least 3 decision criteria derived from research frameworks.)

## Voice Guidance

### Vocabulary — Always Use
- [term 1]: [why this term is preferred in this domain]
- [term 2]: [why]
- [term 3]: [why]
- [term 4]: [why]
- [term 5]: [why]
(Minimum 5 terms. These are professional domain terms from research.)

### Vocabulary — Never Use
- [term 1]: [why this term is problematic or signals amateur work]
- [term 2]: [why]
- [term 3]: [why]
(Minimum 3 terms. These are cliches, amateur indicators, or misleading terms.)

### Tone Rules
- [Rule 1 — specific to this domain]
- [Rule 2 — specific to this domain]
(Minimum 2 tone rules derived from domain research.)

## Output Examples

### Example 1: [Scenario description]
[COMPLETE example of what this agent should produce. Not a skeleton or template —
a fully realized output with realistic content. Must be 15+ lines and demonstrate
the expected quality level, formatting, and depth.]

### Example 2: [Scenario description]
[Another COMPLETE example showing a different scenario or variation. Also 15+ lines
with realistic content.]

(Minimum 1-2 complete examples. Each must be a full, realistic output — not a template
with placeholders. 1 example acceptable if it is comprehensive; 2 preferred if scenarios differ significantly.)

## Anti-Patterns

### Never Do
1. [Specific mistake]: [Why it's harmful and what happens when you do it]
2. [Specific mistake]: [Why it's harmful]
3. [Specific mistake]: [Why it's harmful]
4. [Specific mistake]: [Why it's harmful]
(Minimum 4 items. Each sourced from research on common domain mistakes.)

### Always Do
1. [Specific positive practice]: [Why it matters]
2. [Specific positive practice]: [Why it matters]
3. [Specific positive practice]: [Why it matters]
(Minimum 3 items. Each sourced from research on domain best practices.)

## Quality Criteria

- [ ] [Criterion 1 — specific and measurable]
- [ ] [Criterion 2 — specific and measurable]
- [ ] [Criterion 3 — specific and measurable]
- [ ] [Criterion 4 — specific and measurable]
(Derived from quality benchmarks found in research. Each must be verifiable.)

## Integration

- **Reads from**: [list of input files or previous step outputs this agent uses]
- **Writes to**: [output file path and format]
- **Triggers**: [what causes this agent to run — pipeline step reference]
- **Depends on**: [other agents or data this agent requires]
```

## Agentes COM tasks

Para agentes com `tasks:` no frontmatter:
- **Mantenha**: Persona, Principles, Voice Guidance, Anti-Patterns, Quality Criteria, Integration
- **Remova**: Operational Framework e Output Examples (migram para os arquivos de task)
- **Alvo**: 80-150 linhas (foco em identidade)

## Agentes SEM tasks

- **Mantenha TODAS as seções** acima
- **Alvo**: 120-200 linhas (inclui o operational framework)
