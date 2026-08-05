---
step: "01"
name: "Caso do Júri"
type: checkpoint
outputFile: squads/tribunal-juri/output/foco-do-caso.md
---

# 🛑 Checkpoint: Caso do Júri

## Para o Pipeline Runner
Apresentar ao usuário e **apenas coletar** os dados do caso, gravando a resposta
em `output/foco-do-caso.md`.

> **Não carregue persona e não acione subagente aqui.** Em `type: checkpoint` o
> runner apresenta a mensagem, espera o input e grava a resposta — nada mais. A
> triagem (conflito de interesses EAOAB 17 e, sobretudo, a **classificação da
> fase**, que bifurca o pipeline inteiro) é trabalho de agente e mora no
> **Step 01b**, que lê este arquivo.

## Formato de Apresentação ao Usuário
"Vamos preparar a defesa no Tribunal do Júri. Preciso de:
1. Crime imputado (doloso contra a vida e conexos) e qualificadoras
2. FASE atual: (a) 1ª fase (judicium accusationis) ou (b) réu JÁ PRONUNCIADO (plenário)
3. Anexar: denúncia, peças do inquérito e, se houver, a decisão de pronúncia
4. Cliente: réu/assistente de acusação?"

## Ação do Pipeline Runner após a resposta
1. Gravar a resposta em `output/foco-do-caso.md`, **como informada**.
2. Avançar para o Step 01b (Júlia Júri — Triagem do Caso).

## Expected Outputs
- `output/foco-do-caso.md` → as respostas do usuário, sem triagem e sem classificação de fase

## Quality Gate
- [ ] `output/foco-do-caso.md` existe
- [ ] Crime e qualificadoras registrados
- [ ] Fase informada pelo usuário (a confirmar contra os autos no Step 01b)
- [ ] Denúncia (e pronúncia, se houver) anexadas

> A **confirmação** da fase e a bifurcação do fluxo não entram aqui — são produto
> do Step 01b, e o Quality Gate deste step não pode exigir o que este step não
> produz.
