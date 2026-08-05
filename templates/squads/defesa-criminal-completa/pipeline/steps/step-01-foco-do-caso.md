---
step: "01"
name: "Foco do Caso"
type: checkpoint
outputFile: squads/defesa-criminal-completa/output/foco-do-caso.md
description: O advogado informa o caso a ser defendido — tipo penal, data da citação e anexos (denúncia/IP).
---

# 🛑 Checkpoint: Foco do Caso

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline: ele **apenas coleta** as respostas do
usuário (advogado) e as grava em `output/foco-do-caso.md`.

> **Não carregue persona, não acione subagente e não rode motor aqui.** Em
> `type: checkpoint` o runner apresenta a mensagem, espera o input e grava a
> resposta — nada mais. A triagem (conflito de interesses EAOAB 17, prescrição
> CP 109) e o **cálculo do prazo-fatal pela `calculadora-tempestividade`** são
> trabalho de agente e moram no **Step 01b**, que lê este arquivo. Enquanto o
> cálculo esteve escrito aqui dentro, ele nunca rodou.

## Solicitação ao Usuário

⚖️ Vamos preparar a **resposta à acusação**.

Para começar, preciso de:

1. **Tipo penal / acusação** — qual crime é imputado ao réu? (ex: "furto qualificado — CP 155 §4º", "tráfico — Lei 11.343/2006 art. 33")
2. **Data da citação** — quando o réu foi citado? (define o prazo de 10 dias do art. 396 do CPP)
3. **Anexos** — informe os caminhos dos documentos do caso: **denúncia** e **inquérito policial (IP)**, além de procuração e outras peças. Coloque os arquivos em `acervo/casos/` (gitignored) e informe os caminhos aqui.
4. **Dados do réu e do processo** — nome do réu, nº do processo, vara/comarca (se já houver).

## Ação do Pipeline Runner

1. Receber as informações fornecidas pelo usuário
2. Gravar a resposta em `output/foco-do-caso.md` no formato abaixo
3. Avançar para o Step 01b (Tânia Triagem — Triagem e Prazo-Fatal)

## Expected Outputs

- `output/foco-do-caso.md` → as respostas do advogado, **como informadas**, sem triagem e sem cálculo

## Formato de Salvamento

```markdown
# Foco do Caso — Resposta à Acusação

**Réu:** [nome]
**Processo nº:** [número]
**Vara / Comarca:** [vara/comarca]
**Tipo penal / Acusação:** [crime + dispositivo]
**Data da citação:** YYYY-MM-DD
**Defesa por Defensoria Pública / dativo / núcleo de prática?:** [sim/não — define prazo em dobro, LC 80/94]
**Anexos:**
  - Denúncia: [caminho]
  - Inquérito Policial (IP): [caminho]
  - Procuração: [caminho]
  - Outros: [caminhos]
```

## Quality Gate

Antes de avançar para o Step 01b:
- [ ] `output/foco-do-caso.md` existe
- [ ] Tipo penal e dispositivo legal estão preenchidos
- [ ] Data da citação informada (ou explicitamente marcada como indisponível)
- [ ] Caminhos da denúncia e do IP informados e acessíveis

> Prazo-fatal e conflito de interesses **não** entram aqui — são produto do Step
> 01b, e o Quality Gate deste step não pode exigir o que este step não produz.
