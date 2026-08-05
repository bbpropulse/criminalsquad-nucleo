# Formato do arquivo de task

> Extraído do `build.prompt.md` por ser **forma, não regra** — ver o cabeçalho de
> `agente.md` para o porquê. As decisões (o que vira task, o que é veto) ficam no
> prompt.

Toda task vive em `agents/{agent}/tasks/` e segue este formato. Alvo: 50-80 linhas.

```markdown
---
task: "Task Name"
order: 1
input: |
  - field_name: Description of expected input
  - optional_field: Description (optional)
output: |
  - field_name: Description of produced output
  - another_field: Description
---

# Task Name

[Concise description of what this task does — 2-3 sentences]

## Process

1. [Concrete step with specific action]
2. [Step with decision points]
3. [Step with expected intermediate output]
(Minimum 3 steps)

## Output Format

```yaml

```

## Output Example

> Use as quality reference, not as rigid template.

[Complete, realistic example — 15+ lines showing expected quality and depth]

## Quality Criteria

- [ ] [Specific, measurable criterion]
- [ ] [Specific, measurable criterion]
- [ ] [Specific, measurable criterion]
(Minimum 3 criteria)

## Veto Conditions

Reject and redo if ANY are true:
1. [Specific condition that makes output unacceptable]
2. [Specific condition that makes output unacceptable]
(Minimum 2 conditions)
```
