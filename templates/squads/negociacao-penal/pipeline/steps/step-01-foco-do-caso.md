---
step: "01"
name: "Foco do Caso"
type: checkpoint
outputFile: squads/negociacao-penal/output/foco-do-caso.md
description: O advogado informa os dados que triam o instituto negocial — natureza do crime, pena cominada, primariedade, disposição a confessar e anexos.
---

# 🛑 Checkpoint: Foco do Caso

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline: ele **apenas coleta** as respostas do
usuário (advogado) e as grava em `output/foco-do-caso.md`.

> **Não carregue persona, não acione subagente e não rode skill aqui.** Em
> `type: checkpoint` o runner apresenta a mensagem, espera o input e grava a
> resposta — nada mais. A triagem (conflito de interesses EAOAB 17, prescrição
> CP 109, instituto candidato) é trabalho de agente e mora no **Step 01b**, que
> lê este arquivo.

## Solicitação ao Usuário

🤝 Vamos avaliar a **negociação / justiça penal consensual** do caso.

Para começar, preciso de:

1. **Tipo penal / acusação** — qual crime e dispositivo? (ex: "furto — CP 155", "estelionato — CP 171", "associação para o tráfico — Lei 11.343 art. 35")
2. **Pena cominada** — pena **mínima** e **máxima** do tipo (e eventuais causas de aumento/diminuição aplicáveis). Define ANPP (mínima < 4 anos), transação (máxima ≤ 2 anos) e sursis (mínima ≤ 1 ano).
3. **Natureza do crime** — houve **violência ou grave ameaça à pessoa**? Há **concurso de agentes** (relevante para colaboração premiada)?
4. **Primariedade / antecedentes** — réu primário? Reincidente? Já foi beneficiado por ANPP/transação/sursis nos últimos 5 anos? É caso de violência doméstica?
5. **Disposição do cliente** — o cliente está ciente e disposto a **confessar** (ANPP) e/ou **colaborar** (delação)? Decisão é dele, com consentimento informado.
6. **Fase processual** — investigação/IP, denúncia já oferecida/recebida? (define ANPP/transação antes × sursis após o recebimento)
7. **Anexos** — caminhos da **denúncia** e do **inquérito/PIC** (coloque em `acervo/casos/`, gitignored) + dados do réu e do processo.

## Ação do Pipeline Runner

1. Receber as informações fornecidas pelo usuário
2. Gravar a resposta em `output/foco-do-caso.md` no formato abaixo
3. Avançar para o Step 01b (Cíntia Cabimento — Triagem do Caso)

## Expected Outputs

- `output/foco-do-caso.md` → as respostas do advogado, **como informadas**, sem triagem nem análise

## Formato de Salvamento

```markdown
# Foco do Caso — Negociação Penal

**Investigado/Réu:** [nome]
**Processo/IP/PIC nº:** [número]
**Vara / Comarca / Promotoria:** [órgão]
**Tipo penal / Acusação:** [crime + dispositivo]
**Pena cominada:** mínima [__] / máxima [__] (+ causas de aumento/diminuição: [__])
**Violência ou grave ameaça à pessoa?:** [sim/não]
**Concurso de agentes?:** [sim/não — relevante p/ colaboração]
**Primariedade / antecedentes:** [primário/reincidente; benefício negocial nos últimos 5 anos: sim/não]
**Violência doméstica?:** [sim/não — afasta transação/sursis/ANPP]
**Fase processual:** [investigação / denúncia oferecida / denúncia recebida]
**Disposição do cliente:** [disposto a confessar? a colaborar? — consentimento informado a colher]
**Anexos:**
  - Denúncia: [caminho]
  - Inquérito/PIC: [caminho]
  - Procuração: [caminho]
  - Outros: [caminhos]
```

## Quality Gate

Antes de avançar para o Step 01b:
- [ ] `output/foco-do-caso.md` existe
- [ ] Tipo penal e pena cominada (mínima e máxima) estão preenchidos
- [ ] Natureza (violência/grave ameaça; concurso de agentes) e primariedade informadas
- [ ] Caminhos da denúncia e do IP/PIC informados e acessíveis

> Instituto candidato e conflito de interesses **não** entram aqui — são produto
> da triagem do Step 01b, e o Quality Gate deste step não pode exigir o que este
> step não produz.
