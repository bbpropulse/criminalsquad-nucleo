---
step: "04"
name: "Geração de Ângulos + Copy"
type: agent
agent: copywriter
depends_on: step-03
---

# Step 04: Gustavo Gancho — Ângulos e Copy de Autoridade

## Para o Pipeline Runner

Executar a persona **Gustavo Gancho** (`agents/copywriter.custom.md`). Em uma única passagem, o copywriter:

1. Gera **exatamente 5 ângulos** distintos para o tema selecionado (ganchos informativos, não sensacionalistas).
2. Escolhe (ou recomenda) um ângulo e escreve o **copy completo** do carrossel/post: gancho (capa) → contexto → desenvolvimento didático (um ponto por slide) → fonte/fundamento → conclusão útil → **CTA EDUCATIVO** → legenda com **disclaimer**.

> Tudo no espírito advogado-autoridade: **informar e educar, nunca captar**. Em conflito entre persuasão e ética, a ética prevalece.

## Inputs para este Step

- `output/tema-selecionado.yaml` → tema escolhido (fonte e contexto)
- `_criminalsquad/core/best-practices/conteudo-juridico-redes.md` → estrutura de autoridade + Gate Ético (seção 4) — auto-verificação obrigatória
- `_criminalsquad/core/best-practices/copywriting.md` → técnica de ganchos e clareza
- `_criminalsquad/core/best-practices/instagram-feed.md` → forma do carrossel/feed
- `_criminalsquad/_memory/company.md` → contexto e tom do escritório

## Expected Outputs

- `output/copy.md` → contendo, nesta ordem:
  1. **5 ângulos** (título + tipo + gancho rascunho + força/risco de cada)
  2. **Ângulo escolhido** (com justificativa)
  3. **Copy de todos os slides** numerados (1 capa + desenvolvimento + conclusão + CTA educativo)
  4. **Legenda** completa com hashtags sóbrias
  5. **Disclaimer**: "Conteúdo informativo. Não constitui consulta jurídica nem cria relação advogado-cliente. Cada caso exige análise individual."

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** web_search (apenas para confirmar dados/fonte adicionais, se necessário)

## Quality Gate

Antes de avançar para o Step 05:
- [ ] `output/copy.md` existe com 5 ângulos distintos + copy do ângulo escolhido
- [ ] Capa tem gancho **informativo** (desperta vontade de aprender, não de temer)
- [ ] Há slide com **fonte/fundamento** citado (lei/súmula/tema/órgão/data)
- [ ] Há **conclusão útil** e **CTA EDUCATIVO** (nunca comercial)
- [ ] **Disclaimer** informativo presente na legenda ou no slide final
- [ ] Auto-verificação do Gate Ético feita: **nenhum** veto disparado (captação, promessa de resultado, valores, caso identificável, sensacionalismo, superlativos)

Se qualquer verificação falhar, solicitar que Gustavo Gancho revise o item específico antes de prosseguir. O Pipeline Runner aguarda a entrega final, não o primeiro rascunho.
