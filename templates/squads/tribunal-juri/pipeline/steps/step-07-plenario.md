---
step: "07"
name: "Preparação de Plenário"
type: agent
agent: plenario
depends_on: step-06
---

# Step 07: Plenário — Tese e Quesitação

## Para o Pipeline Runner
Executar o agente `plenario` (Paulo Plenário) — SOMENTE se o réu foi pronunciado. Carrega as skills `juri-plenario-debates` e `juri-quesitacao`.

## Inputs
- `output/caso.md` (confirmar pronúncia), `output/resumo-autos.md`, `output/pesquisa.md`

## Expected Outputs
- `output/plenario.md` — tese de plenário, roteiro de debates (art. 477) e quesitação comentada com pontos de impugnação (art. 482-491).

## Quality Gate
- [ ] Executado apenas com pronúncia confirmada
- [ ] Tese de defesa clara + subsidiárias hierarquizadas

### Quesitação — checklist POR QUESITO, não só a ordem

> **Por que por quesito.** Este gate dizia apenas "quesitação na ordem cogente" —
> media a **ordem** e não olhava a **redação**, que é onde a nulidade nasce.
> Medido no smoke-run de 27/07/2026 (nota 30): a peça **enunciou** o art. 482,
> parágrafo único e o violou dois parágrafos depois.

Carregue `skills/juri-quesitacao/SKILL.md` e confronte **cada** quesito:

- [ ] **Materialidade é IMPESSOAL.** Pergunta se o fato existiu, com data, local e
      a folha do laudo — **sem o nome do réu**. Medido: o quesito saiu como "*O
      acusado efetuou disparos…*", o que antecipa a autoria e deixa o quesito
      seguinte tautológico; pior, "sim" no 1º e "não" no 2º viram respostas
      contraditórias (art. 490) **criadas pelo próprio questionário**.
- [ ] **Autoria tem conteúdo próprio** — "O acusado produziu tais ferimentos?",
      referida ao fato do quesito anterior.
- [ ] **Um fato por quesito.** Nenhum reúne duas indagações (ex.: "houve excesso"
      + "o excesso foi culposo").
- [ ] **Proposição AFIRMATIVA.** Nenhum quesito começa por negativa. Para
      desclassificação, "O acusado quis apenas lesionar a vítima?" — **nunca**
      "agiu sem a intenção de matar".
- [ ] **Elementar do tipo completa** no quesito do crime conexo. Medido: saiu
      "sem autorização legal" onde a Lei 10.826/2003, art. 14 exige "sem
      autorização **e em desacordo com determinação legal ou regulamentar**".
- [ ] **Linguagem de leigo** — sem jargão ("culpa", "animus") no corpo do quesito.
- [ ] **Nenhum quesito sobre qualificadora excluída** em recurso (art. 483, § 3º, II).
- [ ] **Quesito absolutório único e genérico**, não desdobrado por tese.
- [ ] **A posição do quesito de desclassificação (art. 483, § 4º) foi DECIDIDA e
      JUSTIFICADA por escrito** — não basta transcrever "após o 2º ou o 3º,
      conforme o caso". Medido: a peça deixou o quesito de desclassificação
      **antes** do absolutório; respondido "sim", a votação encerra, a competência
      passa ao juiz-presidente (art. 492, § 1º) e o réu é **condenado por culposo
      sem que os jurados sejam perguntados se o absolvem** — a ordem sepultou a
      tese principal da própria defesa.
- [ ] **Art. 483, § 1º enunciado**: resposta negativa a materialidade **ou**
      autoria por mais de 3 jurados encerra a votação e absolve.
- [ ] **Série do crime conexo é autônoma** e votada depois.
- [ ] **Impugnações antecipadas** com art. 484, registro em ata e alerta de
      preclusão — art. 571, **V e VIII** (os dois, não só o VIII).
