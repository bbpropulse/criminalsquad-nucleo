---
step: "01b"
name: "Triagem do Caso"
type: agent
agent: triagem
execution: subagent
model_tier: powerful
depends_on: step-01
description: A triagem que o checkpoint não podia fazer — conflito de interesses e a classificação da fase, que bifurca o pipeline inteiro.
---

# Step 01b: Júlia Júri — Triagem do Caso

## Para o Pipeline Runner

Executar a triagem pela persona **Júlia Júri** (`agents/triagem.custom.md`), que
se apoia no subagente nativo `.claude/agents/triagem-novo-caso.md` (ficha de
triagem, conflito de interesses — EAOAB, art. 15, § 6º) e na best-practice
`tribunal-do-juri` para situar a fase.

Este step existe porque o Step 01 é `type: checkpoint`: ali o runner só apresenta
a mensagem, espera o input e grava a resposta — **não carrega persona nem aciona
subagente**. A persona da Júlia declara "Produz `output/caso.md`" e nunca era
carregada: a decisão que **bifurca o pipeline inteiro** — 1ª fase × já
pronunciado — vinha da resposta do usuário, sem ninguém a conferir contra os
autos.

NÃO pesquisar e NÃO redigir. NÃO emitir juízo de mérito — isso é dos demais
agentes.

## Context Loading

Load these files before executing:
- `output/foco-do-caso.md` — as respostas do usuário no checkpoint de entrada
- `agents/triagem.custom.md` — a persona Júlia Júri

## Instructions

### Process

1. **Conflito de interesses (EAOAB, art. 15, § 6º; CED, arts. 19 a 21).** Confrontar réu, vítima e demais
   partes com a carteira. Havendo impedimento, registrar `impedido` com a
   justificativa e **parar**. Tratar os dados sob `etica-oab-sigilo`.
2. **Confirmar a fase contra os autos, não contra a memória do usuário.**
   Havendo decisão de pronúncia anexada, a fase é **plenário**; sem ela, é **1ª
   fase (judicium accusationis)**. Se o usuário informou uma coisa e os anexos
   dizem outra, **prevalece o documento** e a divergência vai registrada.
3. **Documentos essenciais.** Sem a denúncia (e a pronúncia, quando a fase for
   plenário), sinalizar a pendência de forma explícita — não avançar em silêncio.
4. **Posição do cliente.** Réu ou assistente de acusação — muda a estratégia de
   todo o pipeline.
5. **Gravar `output/caso.md`** no formato abaixo.

## Output Format

```markdown
# Caso — Tribunal do Júri

**Réu:** [nome]
**Processo nº:** [número]
**Vara do Júri / Comarca:** [órgão]
**Crime imputado:** [doloso contra a vida + dispositivo]
**Qualificadoras:** [incisos + dispositivo, ou "nenhuma"]
**Crimes conexos:** [dispositivos, ou "nenhum"]
**FASE:** [1ª FASE (judicium accusationis) | PLENÁRIO (réu pronunciado)]
**Base da classificação da fase:** [documento que a comprova + divergência com o informado, se houver]
**Posição do cliente:** [réu | assistente de acusação]
**Anexos:**
  - Denúncia: [caminho]
  - Inquérito/peças: [caminho]
  - Decisão de pronúncia: [caminho ou "não há"]
  - Procuração: [caminho]
**Conflito de interesses (EAOAB 17):** [livre / impedido — justificativa]
**Pendências documentais:** [o que falta, ou "nenhuma"]
**Observações da triagem:** [pontos de atenção]
```

## Expected Outputs

- `output/caso.md` → ficha do caso com crime, qualificadoras, **fase confirmada**, posição do cliente, anexos e conflito de interesses

## Output Example

```markdown
# Caso — Tribunal do Júri

**Réu:** L. F. M.
**Processo nº:** 0003377-45.2025.8.26.0502
**Vara do Júri / Comarca:** 1ª Vara do Júri — Comarca de Sorocaba/SP
**Crime imputado:** Homicídio — CP art. 121, § 2º
**Qualificadoras:** motivo fútil (§ 2º, II) e recurso que dificultou a defesa da vítima (§ 2º, IV)
**Crimes conexos:** porte ilegal de arma de fogo de uso permitido — Lei 10.826/2003, art. 14
**FASE:** PLENÁRIO (réu pronunciado)
**Base da classificação da fase:** decisão de pronúncia de 2026-04-18 anexada (fls. 512-529), com trânsito para a defesa em 2026-05-06. O usuário informou "1ª fase" no checkpoint — **prevalece o documento**; a divergência provavelmente vem de o recurso em sentido estrito ter sido interposto e já julgado.
**Posição do cliente:** réu
**Anexos:**
  - Denúncia: acervo/casos/lfm/denuncia.pdf
  - Inquérito/peças: acervo/casos/lfm/ip-0221-2025.pdf
  - Decisão de pronúncia: acervo/casos/lfm/pronuncia.pdf
  - Procuração: acervo/casos/lfm/procuracao.pdf
**Conflito de interesses (EAOAB 17):** livre — réu e família da vítima não constam na carteira do escritório
**Pendências documentais:** falta a ata da audiência de instrução da 1ª fase, necessária para mapear contradições no plenário
**Observações da triagem:** como a fase real é plenário, o fluxo salta a etapa de alegações da 1ª fase. Confirmar com o(a) advogado(a) antes de seguir — a divergência com o informado precisa ser resolvida por quem conhece o histórico do caso.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. A fase foi classificada **apenas** pelo que o usuário informou, sem confronto com os anexos.
2. Há decisão de pronúncia anexada e a fase saiu como "1ª fase" (ou o inverso) sem a divergência registrada.
3. O conflito de interesses (EAOAB 17) ficou em branco ou como "não verificado".
4. O step emitiu juízo de mérito sobre teses, provas ou qualificadoras.
5. Falta a denúncia (ou a pronúncia, em plenário) e o step avançou sem sinalizar a pendência.

## Quality Criteria

- [ ] A base documental da classificação da fase está nomeada (documento e folhas)
- [ ] Qualificadoras vêm com o inciso, não só o nome
- [ ] A posição do cliente (réu × assistente) está registrada
