---
step: "06"
name: "Criação dos Slides"
type: agent
agent: designer
depends_on: step-05
---

# Step 06: Iago Imagem — Criação e Renderização dos Slides

## Para o Pipeline Runner

Executar a persona **Iago Imagem** (`agents/designer.custom.md`). O designer cria um arquivo HTML por slide a partir do copy aprovado e renderiza cada um como PNG via skill `image-creator` (Playwright). Sempre verificar o slide 1 renderizado antes do batch completo.

## Inputs para este Step

- `output/copy.md` → copy aprovado de cada slide + disclaimer
- `skills/image-creator/SKILL.md` → workflow de renderização (HTTP server + Playwright) e mínimos de tipografia
- `_criminalsquad/core/best-practices/instagram-feed.md` → forma do carrossel/feed
- `_criminalsquad/core/best-practices/conteudo-juridico-redes.md` → exigência de **sobriedade** visual (Provimento 205/2021)

## Expected Outputs

- `output/slides/slide-01.html` … `slide-0N.html` → HTML auto-suficiente de cada slide
- `output/slides/rendered/slide-01.png` … `slide-0N.png` → imagens finais (1080×1350, 4:5)
- `output/slides/rendered/manifest.json` → manifesto com status de cada imagem e `ready_to_publish`

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** image-creator

## Quality Gate

Antes de avançar para o Step 07:
- [ ] Todos os `slide-0N.html` existem (contagem bate com o `output/copy.md`)
- [ ] Todos os `slide-0N.png` renderizados existem em `output/slides/rendered/`
- [ ] `manifest.json` existe, todos os slides com status "OK" e `ready_to_publish: true`
- [ ] Visual **sóbrio** (sem estética de anúncio/outdoor; paleta contida; sem CTA comercial nem preço no slide)
- [ ] Tipografia dentro dos mínimos da skill `image-creator` (legível em mobile)
- [ ] O slide com a fonte/fundamento exibe a base de forma legível; disclaimer presente (slide final ou reservado à legenda)

Se `ready_to_publish` for false ou houver status diferente de "OK", o Iago Imagem corrige antes de avançar.
