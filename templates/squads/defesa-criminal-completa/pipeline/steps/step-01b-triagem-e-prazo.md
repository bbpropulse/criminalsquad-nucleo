---
step: "01b"
name: "Triagem e Prazo-Fatal"
type: agent
agent: triagem
execution: subagent
model_tier: powerful
depends_on: step-01
description: A triagem e o cálculo que o checkpoint não podia executar — conflito de interesses, prescrição e prazo-fatal pelo motor determinístico.
---

# Step 01b: Tânia Triagem — Triagem e Prazo-Fatal

## Para o Pipeline Runner

Executar a triagem pela persona **Tânia Triagem** (`agents/triagem.custom.md`),
que se apoia no subagente nativo de intake `.claude/agents/triagem-novo-caso.md`
(ficha de triagem, classificação por área, conflito de interesses — EAOAB art.
17 — e prescrição/decadência — CP 109).

Este step existe porque o Step 01 é `type: checkpoint`: ali o runner só apresenta
a mensagem, espera o input e grava a resposta — **não carrega persona e não roda
motor**. Enquanto o cálculo do prazo esteve escrito dentro do checkpoint, ele
nunca rodou, e o prazo-fatal chegava à ficha sem ter sido calculado por ninguém.

NÃO redigir peça aqui; apenas montar a base do caso.

## Context Loading

Load these files before executing:
- `output/foco-do-caso.md` — as respostas do advogado no checkpoint de entrada
- `agents/triagem.custom.md` — a persona Tânia Triagem

## Instructions

### Process

1. **Conflito de interesses (EAOAB, art. 15, § 6º; CED, arts. 19 a 21).** Confrontar réu, vítima e demais
   partes com a carteira do escritório. Havendo impedimento, registrar
   `impedido` com a justificativa e **parar** — não seguir com a defesa.
2. **Prescrição e decadência (CP 109).** A partir do tipo penal e da pena
   cominada, registrar risco prescricional aparente. Sem data segura no
   `foco-do-caso.md`, escrever `[A CONFERIR]`.
3. **Prazo-fatal — OBRIGATÓRIO via motor determinístico** (ver abaixo).
4. **Gravar `output/caso.md`** e `output/prazo-fatal.json`.

### Cálculo do prazo-fatal — OBRIGATÓRIO via motor determinístico

Erro de prazo é o único dano **irreversível** deste pipeline: perdido, não se
recupera. Por isso a data não pode sair de contagem mental do agente.

Invoque a skill `calculadora-tempestividade` (`type: script`, testada):

```bash
node skills/calculadora-tempestividade/scripts/tempestividade.mjs \
  '{"prazo_dias":10,"data_intimacao":"AAAA-MM-DD"}'
```

- `data_intimacao` = **data da citação** informada pelo usuário no Step 01.
- `prazo_dias: 10` = CPP 396 (resposta à acusação). Se o rito for outro, ajuste o
  número **com fundamento explícito** — não presuma.
- Acrescente `"prazo_dobro": true` **somente** se a defesa é da Defensoria Pública
  ou de defensor dativo/núcleo de prática (LC 80/94) — o campo correspondente do
  `foco-do-caso.md` é a fonte. O **MP não tem prazo em dobro** no processo penal.

Grave a saída íntegra do motor em `output/prazo-fatal.json` e transcreva
`data_limite` para a ficha. Os `avisos` do motor vão para "Observações da
triagem" — eles apontam premissas frágeis (marco da intimação, dia não útil) que
o(a) advogado(a) precisa confirmar.

Se o motor falhar ou faltar a data de citação, **não invente a data**: registre
`[A CONFERIR]` e leve ao checkpoint humano.

## Output Format

```markdown
# Caso — Resposta à Acusação

**Réu:** [nome]
**Processo nº:** [número]
**Vara / Comarca:** [vara/comarca]
**Tipo penal / Acusação:** [crime + dispositivo]
**Data da citação:** YYYY-MM-DD
**Prazo (CPP 396, 10 dias):** YYYY-MM-DD  ← prazo-fatal (`data_limite` do motor, não calculado à mão)
**Anexos:**
  - Denúncia: [caminho]
  - Inquérito Policial (IP): [caminho]
  - Procuração: [caminho]
  - Outros: [caminhos]
**Conflito de interesses (EAOAB 17):** [livre / impedido — justificativa]
**Observações da triagem:** [pontos de atenção, prescrição/decadência CP 109, avisos do motor]
```

## Expected Outputs

- `output/caso.md` → ficha do caso com tipo penal, data da citação, prazo-fatal calculado, caminhos dos anexos e dados do processo
- `output/prazo-fatal.json` → saída íntegra da `calculadora-tempestividade` (memória auditável do cálculo)

## Output Example

```markdown
# Caso — Resposta à Acusação

**Réu:** M. A. P.
**Processo nº:** 0007890-12.2026.8.26.0050
**Vara / Comarca:** 1ª Vara Criminal — Comarca de São Paulo/SP
**Tipo penal / Acusação:** Furto qualificado por rompimento de obstáculo — CP art. 155, §4º, I
**Data da citação:** 2026-07-14
**Prazo (CPP 396, 10 dias):** 2026-07-24  ← prazo-fatal (`data_limite` do motor, não calculado à mão)
**Anexos:**
  - Denúncia: acervo/casos/map/denuncia.pdf
  - Inquérito Policial (IP): acervo/casos/map/ip-0345-2026.pdf
  - Procuração: acervo/casos/map/procuracao.pdf
  - Outros: —
**Conflito de interesses (EAOAB 17):** livre — nem o réu nem a vítima constam como cliente atual ou anterior do escritório
**Observações da triagem:** prescrição não é risco próximo (pena máxima de 8 anos prescreve em 12 anos — CP 109, III; fatos de 2026). Aviso do motor: o marco adotado foi a data da citação informada; se a citação foi por hora certa ou edital, o marco muda e o cálculo precisa ser refeito. Defesa constituída (não Defensoria), logo **sem** prazo em dobro.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O prazo-fatal foi escrito **sem** a saída do motor em `output/prazo-fatal.json` — data contada de cabeça reprova, ainda que esteja certa.
2. `prazo_dobro: true` foi usado sem que o `foco-do-caso.md` indicasse Defensoria, dativo ou núcleo de prática.
3. Faltava a data de citação e o step produziu uma data mesmo assim, em vez de `[A CONFERIR]`.
4. O conflito de interesses (EAOAB 17) ficou em branco ou como "não verificado".

## Quality Criteria

- [ ] Os `avisos` do motor foram transcritos para "Observações da triagem", não descartados
- [ ] O fundamento do `prazo_dias` está explícito (CPP 396 ou o rito que o substitua)
- [ ] O risco prescricional foi avaliado com o dispositivo (CP 109) e não por impressão
