---
step: "04"
name: "Seleção de Teses"
type: checkpoint
depends_on: step-03
---

# 🛑 Checkpoint: Seleção de Teses

## Para o Pipeline Runner

Apresentar ao advogado as teses candidatas levantadas na pesquisa (`output/pesquisa-juridica.md`) cruzadas com as fragilidades do resumo (`output/resumo-autos.md`), e aguardar a decisão sobre **quais teses irão para a peça** antes de redigir.

## Formato de Apresentação ao Usuário

Ler `output/pesquisa-juridica.md` e `output/resumo-autos.md` e apresentar no formato:

```
🔍 Júlia Jurisprudência concluiu a pesquisa. Teses candidatas para a resposta à acusação:

PRELIMINARES (CPP 395 — rejeição da denúncia)
1. ❓ Inépcia da denúncia (CPP 41 + 395 I) — [aplicável? base: ...]
2. ❓ Falta de justa causa (CPP 395 III) — [aplicável? base: ...]
3. ❓ Incompetência / litispendência / coisa julgada — [aplicável? base: ...]

ABSOLVIÇÃO SUMÁRIA (CPP 397) E MÉRITO
4. ❓ Atipicidade material — bagatela (Tema 1.099 STF; HC 84.412/SP) — [aplicável? base: ...]
5. ❓ Excludentes de ilicitude/culpabilidade (CP 23, 26-28) — [aplicável? base: ...]
6. ❓ Prescrição (CP 109) — [aplicável? base: ...]
7. ❓ Nulidade do reconhecimento — sem observância do CPP 226 (Tema 1.016 STJ) — [aplicável? base: ...]

---
Quais teses você quer incluir na resposta à acusação?
Responda com os números (ex: "1, 4, 7") ou descreva ajustes.

Lembrete: a peça SEMPRE inclui rol de até 8 testemunhas (CPP 401) e provas requeridas.
```

## Ação do Pipeline Runner após Decisão

1. Registrar as teses escolhidas pelo usuário (com a base jurídica de cada uma vinda da pesquisa)
2. Salvar em `output/teses-selecionadas.md` no formato abaixo
3. Avançar para o Step 05 (Rafael Resposta — Redação da Minuta)

## Expected Outputs

- `output/teses-selecionadas.md` → teses aprovadas pelo advogado, na ordem de apresentação na peça, cada uma com seu fundamento (súmula/precedente/dispositivo da pesquisa)

## Formato de Salvamento

```markdown
# Teses Selecionadas — Resposta à Acusação

## Preliminares (CPP 395)
- [tese] — fundamento: [súmula/precedente/dispositivo + origem]

## Absolvição sumária / mérito (CPP 397)
- [tese] — fundamento: [...]

## Tese principal
- [a tese mais forte que estrutura a peça]

## Provas e testemunhas
- Rol de testemunhas (até 8 — CPP 401): [lista ou "a definir com o cliente"]
- Provas requeridas: [perícias, diligências, juntada de documentos]
```

## Quality Gate

Antes de avançar para o Step 05:
- [ ] `output/teses-selecionadas.md` existe
- [ ] Pelo menos uma tese foi selecionada pelo advogado
- [ ] Cada tese tem fundamento jurídico vinculado (vindo da pesquisa)
- [ ] A tese principal está identificada
- [ ] Rol de testemunhas (até 8) e provas requeridas estão indicados
