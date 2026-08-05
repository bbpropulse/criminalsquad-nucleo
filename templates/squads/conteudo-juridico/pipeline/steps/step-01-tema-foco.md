---
step: "01"
name: "Tema/Foco"
type: checkpoint
description: O usuário define a área jurídica e o objetivo do conteúdo a ser transformado em carrossel/post de autoridade.
---

# 🛑 Checkpoint: Tema/Foco

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar do usuário a **área jurídica** e o **objetivo** do conteúdo. NÃO pesquisar nada aqui — apenas definir o foco.

## Solicitação ao Usuário

📣 Vamos criar um conteúdo jurídico de **autoridade** para as redes (carrossel ou post).

Para começar, me diga:

1. **Área / tema jurídico** — qual ramo ou assunto? (ex: "direito do consumidor", "novidades no CPP", "uma tese recente do STJ sobre prova digital")
2. **Objetivo do conteúdo** — o que o público deve aprender? (ex: "explicar um direito pouco conhecido", "traduzir uma decisão nova", "esclarecer os efeitos de uma lei recente")
3. **Período** (opcional) — quão recente deve ser o material? (ex: "últimos 30 dias", "2026", "qualquer data")
4. **Formato** (opcional) — carrossel (padrão) ou post único?

> Lembrete: este squad produz conteúdo **informativo/educativo**, nunca de captação. O objetivo é construir autoridade informando o público — não angariar clientela (Provimento 205/2021 da OAB).

## Ação do Pipeline Runner

1. Receber a área, o objetivo e (se houver) período/formato
2. Salvar em `output/foco.md` no formato abaixo
3. Avançar para o Step 02 (Júlia Jurisprudência — Pesquisa de Julgados)

## Expected Outputs

- `output/foco.md` → área, objetivo, período e formato definidos pelo usuário

## Formato de Salvamento

```markdown
# Foco do Conteúdo

**Área / tema:** [área jurídica fornecida pelo usuário]
**Objetivo:** [o que o público deve aprender]
**Período:** [período fornecido, ou "qualquer data"]
**Formato:** [carrossel (padrão) | post]
**Data:** YYYY-MM-DD
```

## Quality Gate

Antes de avançar para o Step 02:
- [ ] `output/foco.md` existe
- [ ] Área/tema jurídico está preenchido
- [ ] Objetivo informativo/educativo está claro (não é objetivo comercial/captação)
