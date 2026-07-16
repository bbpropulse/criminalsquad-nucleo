---
step: "01"
name: "Foco do Caso"
type: checkpoint
description: O advogado define o caso e os dados que triam o instituto negocial — natureza do crime, pena cominada, primariedade, disposição a confessar e anexos.
---

# 🛑 Checkpoint: Foco do Caso

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar do usuário (advogado) as informações mínimas para avaliar a justiça penal consensual, com apoio dos subagentes nativos `.claude/agents/negociacao-penal.md` (estratégia/triagem do instituto) e `.claude/agents/triagem-novo-caso.md` (intake), executados pela persona **Cíntia Cabimento** (`agents/triagem.custom.md`).

A Cíntia Cabimento aciona `triagem-novo-caso` (ficha, conflito de interesses — EAOAB art. 17, prescrição/decadência — CP 109) e `negociacao-penal` para **triar o instituto candidato** (ANPP × transação × sursis × colaboração) pelos critérios legais. NÃO redigir minuta aqui; apenas montar a base do caso e a hipótese de instituto. A decisão de aceitar acordo é sempre do cliente.

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
2. Acionar `triagem-novo-caso` (conflito de interesses, prescrição) e `negociacao-penal` (instituto candidato) via persona Cíntia Cabimento
3. Salvar o resultado em `output/caso.md` no formato abaixo
4. Avançar para o Step 02 (Lucas Leitura — Resumo dos Autos)

## Expected Outputs

- `output/caso.md` → ficha do caso com tipo penal, pena cominada, natureza, primariedade, fase, disposição do cliente, instituto candidato triado e caminhos dos anexos

## Formato de Salvamento

```markdown
# Caso — Negociação Penal

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
**Instituto candidato (triagem):** [ANPP / transação penal / sursis processual / colaboração premiada — + justificativa do critério]
**Anexos:**
  - Denúncia: [caminho]
  - Inquérito/PIC: [caminho]
  - Procuração: [caminho]
  - Outros: [caminhos]
**Conflito de interesses (EAOAB 17):** [livre / impedido — justificativa]
**Observações da triagem:** [arquivamento/absolvição mais favorável? prescrição CP 109? pontos de atenção]
```

## Quality Gate

Antes de avançar para o Step 02:
- [ ] `output/caso.md` existe
- [ ] Tipo penal e pena cominada (mínima e máxima) estão preenchidos
- [ ] Natureza (violência/grave ameaça; concurso de agentes) e primariedade informadas
- [ ] Instituto candidato triado com a justificativa do critério legal
- [ ] Caminhos da denúncia e do IP/PIC informados e acessíveis
- [ ] Verificação de conflito de interesses concluída (EAOAB art. 17)
