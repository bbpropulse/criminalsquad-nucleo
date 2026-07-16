---
step: "07"
name: "Aprovar Imagens"
type: checkpoint
depends_on: step-06
---

# 🛑 Checkpoint: Aprovar Imagens

## Para o Pipeline Runner

Apresentar ao usuário as imagens renderizadas e aguardar aprovação explícita antes da revisão final.

## Formato de Apresentação ao Usuário

```
🎨 Iago Imagem concluiu os slides!

🖼️ SLIDES RENDERIZADOS (output/slides/rendered/):
- slide-01.png
- slide-02.png
- ... (total: N slides)

📝 COPY APROVADO
Capa: [headline da capa]
...

📄 DISCLAIMER: [presente]
📱 LEGENDA: [primeiros ~200 chars]...

---
As imagens estão aprovadas para a revisão final + gate ético?

1. ✅ Aprovar e avançar para a Revisão Final (Rita Revisão)
2. 🔄 Pedir ajustes nas imagens → Iago refaz o solicitado e re-renderiza
3. 📝 Pedir ajustes no texto → voltar ao Step 04 (copy), depois recriar os slides
```

## Ação do Pipeline Runner após Decisão

### Se opção 1 (Aprovar):
- Avançar para o Step 08 (Rita Revisão — Revisão Final + Gate Ético)

### Se opção 2 (Ajustes visuais):
- Coletar instruções específicas e retornar ao Step 06 (Iago refaz apenas os slides indicados e re-renderiza). Depois, retornar ao Step 07.

### Se opção 3 (Ajustes de texto):
- Retornar ao Step 04 (copy). Após correções e novo gate no Step 05, voltar ao Step 06 (re-renderizar) e então ao Step 07.

## Quality Gate

Antes de avançar para o Step 08:
- [ ] As imagens em `output/slides/rendered/` foram apresentadas ao usuário
- [ ] Aprovação explícita do usuário registrada
- [ ] `manifest.json` com `ready_to_publish: true`
