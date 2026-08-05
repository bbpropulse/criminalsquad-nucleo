# Formato do arquivo de step do pipeline

> Extraído do `build.prompt.md` por ser **forma, não regra** — ver o cabeçalho de
> `agente.md` para o porquê.
>
> **Continuam NO PROMPT, porque são decisão e não molde:** a regra do
> `outputFile` e a Output Path Transformation; CHECKPOINT NÃO EXECUTA TRABALHO;
> a REGRA DE CLASSIFICAÇÃO (o que é veto e o que é critério); a regra do OUTPUT
> EXAMPLE; e os requisitos jurídicos do step.

## 1. Frontmatter (todo step, exceto checkpoint)

```yaml
---
execution: subagent   # subagent = runs in background via Task tool; inline = runs in the main conversation
agent: {agent-id}     # the agent's id (matches the id field in their .agent.md frontmatter)
format: {format-id}   # OPTIONAL — e.g., "instagram-feed". Pipeline Runner auto-injects from _criminalsquad/core/best-practices/
                      # Use for content creation steps where platform-specific rules should guide the agent
                      # Omit for non-content steps (research, analysis, review without platform context)
inputFile: squads/{code}/output/{filename}.{ext}   # path to input file from previous step — MUST use output/ prefix
outputFile: squads/{code}/output/{filename}.{ext}  # path where this step saves its output — MUST use output/ prefix
                                                    # NEVER use pipeline/data/ for outputFile — that folder is for static
                                                    # reference materials only. The Pipeline Runner's path transformation
                                                    # only applies to paths starting with squads/{code}/output/,
                                                    # so any path outside output/ will bypass run_id scoping entirely.
model_tier: fast      # ONLY for execution: subagent. fast = lightweight model; powerful = default model
                      # Set fast for: investigator agents (data extraction, Sherlock subagents)
                      # Set powerful for: writer, creator, reviewer, strategy, researcher agents
                      # Omit model_tier for execution: inline steps
on_reject: {step-id}  # OPTIONAL — loop de revisão: em REJECT, o runner volta a {step-id} passando só os `fixes`
max_review_cycles: 3  # OPTIONAL — teto do loop de revisão (default 3 se ausente); aqui ou no pipeline.yaml
parallel_group: {nome} # OPTIONAL — steps com o MESMO parallel_group rodam EM PARALELO (fan-out). Só para
                       # execution: subagent independentes (sem depends_on entre si, sem o mesmo outputFile)
depends_on: step-x    # OPTIONAL — string = dependência única (execução em série, padrão)
                      #            lista [a, b] = fan-in (este step espera TODOS os steps do grupo paralelo)
---
```

## 2. Frontmatter de checkpoint

```markdown
# Step NN: {Step Name}

## Context Loading

Load these files before executing:
- `{path/to/input-file}` — [description of what this file contains]
- `{path/to/reference-material}` — [description]
- `{path/to/data-file}` — [description]
(Explicit file list — every file the agent needs must be listed here.)

## Instructions

### Process
1. [Concrete step with specific action — not vague directives]
2. [Concrete step with decision points noted]
3. [Concrete step with expected intermediate output described]
(Minimum 3 concrete steps. Each must be specific enough to follow without interpretation.)

## Output Format

The output MUST follow this exact structure:
```

## 3. Corpo do step

Todo step MUST conter TODAS as seções abaixo. Alvo: 60-120 linhas.

```

## Output Example

[A COMPLETE, realistic example of what this step should produce.
This is not a template — it's a fully realized output with realistic content.
Must be 20+ lines and demonstrate the expected quality, depth, and formatting.
The agent uses this as a reference for what "good" looks like.]

## Veto Conditions

Reject and redo if ANY of these are true:
1. [Specific condition that makes the output unacceptable]
2. [Specific condition that makes the output unacceptable]
(Minimum 2 veto conditions. These are hard blockers — if true, the step fails.)

## Quality Criteria

- [ ] [Criterion 1 — specific and checkable]
- [ ] [Criterion 2 — specific and checkable]
- [ ] [Criterion 3 — specific and checkable]
(These are soft criteria — the output should meet most but doesn't auto-fail.)
```
