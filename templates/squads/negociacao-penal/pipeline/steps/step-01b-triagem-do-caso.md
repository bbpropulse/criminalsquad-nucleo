---
step: "01b"
name: "Triagem do Caso"
type: agent
agent: triagem
execution: subagent
model_tier: powerful
depends_on: step-01
description: A triagem que o checkpoint não podia fazer — conflito de interesses, prescrição e instituto candidato, a partir do que o advogado informou.
---

# Step 01b: Cíntia Cabimento — Triagem do Caso

## Para o Pipeline Runner

Executar a triagem pela persona **Cíntia Cabimento** (`agents/triagem.custom.md`),
que se apoia nos subagentes nativos `.claude/agents/triagem-novo-caso.md` (ficha,
conflito de interesses — EAOAB, art. 15, § 6º, prescrição/decadência — CP 109) e
`.claude/agents/negociacao-penal.md` (triagem do instituto).

Este step existe porque o Step 01 é `type: checkpoint`: ali o runner só apresenta
a mensagem, espera o input e grava a resposta — **não carrega persona nem roda
skill**. Toda a triagem que antes estava escrita dentro do checkpoint (e que, por
isso, nunca era executada) mora aqui.

NÃO redigir minuta. Apenas montar a ficha do caso e a hipótese de instituto. A
decisão de aceitar qualquer acordo é sempre do cliente.

## Context Loading

Load these files before executing:
- `output/foco-do-caso.md` — as respostas do advogado no checkpoint de entrada
- `agents/triagem.custom.md` — a persona Cíntia Cabimento

## Instructions

### Process

1. **Conflito de interesses (EAOAB, art. 15, § 6º; CED, arts. 19 a 21).** Confrontar as partes informadas
   com a carteira do escritório. Se houver impedimento, marcar `impedido` com a
   justificativa e **parar** — não seguir para a triagem do instituto.
2. **Prescrição e decadência (CP 109).** A partir do tipo penal, da pena cominada
   e da fase processual, registrar se há risco prescricional aparente. Sem data
   segura no `foco-do-caso.md`, escrever `[A CONFERIR]` — nunca estimar.
3. **Mérito mais favorável.** Perguntar antes de negociar: arquivamento ou
   absolvição são caminho melhor que o acordo? Se sim, registrar — é a hipótese
   que o advogado precisa descartar conscientemente.
4. **Instituto candidato.** Triar ANPP × transação × sursis processual ×
   colaboração premiada pelos critérios legais (ANPP: pena mínima < 4 anos e sem
   violência/grave ameaça — CPP 28-A; transação: pena máxima ≤ 2 anos — Lei 9.099
   art. 76; sursis: pena mínima ≤ 1 ano — art. 89; colaboração: Lei 12.850).
   Registrar o critério que decidiu, não só o nome do instituto.
5. **Gravar `output/caso.md`** no formato abaixo.

## Output Format

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

## Expected Outputs

- `output/caso.md` → ficha do caso com tipo penal, pena cominada, natureza, primariedade, fase, disposição do cliente, instituto candidato triado e caminhos dos anexos

## Output Example

```markdown
# Caso — Negociação Penal

**Investigado/Réu:** J. R. S.
**Processo/IP/PIC nº:** 0001234-56.2026.8.26.0100
**Vara / Comarca / Promotoria:** 2ª Vara Criminal — Comarca de São Paulo/SP
**Tipo penal / Acusação:** Estelionato — CP art. 171, caput
**Pena cominada:** mínima 1 ano / máxima 5 anos (+ causas de aumento/diminuição: nenhuma indicada na denúncia)
**Violência ou grave ameaça à pessoa?:** não
**Concurso de agentes?:** não
**Primariedade / antecedentes:** primário; sem benefício negocial nos últimos 5 anos
**Violência doméstica?:** não
**Fase processual:** denúncia oferecida, ainda não recebida
**Disposição do cliente:** disposto a confessar formal e circunstancialmente; consentimento informado a colher por escrito
**Instituto candidato (triagem):** ANPP — critério decisivo: pena mínima de 1 ano, inferior a 4 anos (CPP art. 28-A, caput), sem violência ou grave ameaça, réu primário e denúncia ainda não recebida. Transação penal está afastada porque a pena máxima (5 anos) excede 2 anos (Lei 9.099 art. 76).
**Anexos:**
  - Denúncia: acervo/casos/jrs/denuncia.pdf
  - Inquérito/PIC: acervo/casos/jrs/ip-0012-2025.pdf
  - Procuração: acervo/casos/jrs/procuracao.pdf
  - Outros: —
**Conflito de interesses (EAOAB 17):** livre — nenhuma das partes ou vítimas consta como cliente atual ou anterior do escritório
**Observações da triagem:** arquivamento pouco provável (há prova documental do proveito); prescrição não é risco próximo — pena máxima de 5 anos prescreve em 12 anos (CP 109, III) e os fatos são de 2025. Confirmar com o cliente que confessar é condição do ANPP (CPP 28-A, caput) e que isso é decisão dele.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O instituto candidato foi indicado **sem** o critério legal que o decidiu (o nome do instituto sozinho não é triagem).
2. Alguma data ou quantum foi estimado quando o `foco-do-caso.md` não trazia o dado — o lugar disso é `[A CONFERIR]`, nunca um número inventado.
3. O conflito de interesses (EAOAB 17) ficou em branco ou como "não verificado".
4. O step redigiu minuta, cláusula ou proposta de acordo — isso é do Step 05.

## Quality Criteria

- [ ] A hipótese de arquivamento/absolvição mais favorável foi considerada e registrada
- [ ] Os institutos descartados aparecem com o motivo do descarte, não só o escolhido
- [ ] O consentimento informado do cliente está sinalizado como pendência a colher
