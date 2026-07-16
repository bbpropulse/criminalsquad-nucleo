---
step: "03"
name: "Triagem de Publicações"
type: checkpoint
depends_on: step-02
---

# 🛑 Checkpoint: Triagem de Publicações

## Para o Pipeline Runner

Apresentar ao usuário as publicações capturadas pela Mônica Monitoramento e aguardar a triagem: o usuário marca quais publicações viram prazo (e devem seguir para cálculo). A decisão editorial é do advogado — o squad não decide sozinho o que é prazo fatal.

## Formato de Apresentação ao Usuário

Ler `output/publicacoes.yaml` e apresentar no formato:

```
📡 Mônica varreu o DJEN e encontrou [N] publicações no período [DD/MM a DD/MM].

Marque quais viram PRAZO (os números). As pré-classificadas como "gera prazo" já
vêm sugeridas, mas a decisão é sua.

---
1️⃣ [tipo_ato]  ⚠️ [urgencia_preliminar]   (sugestão: vira prazo ✅)
   📂 Proc [processo] — [orgao]
   📅 Disponibilizado em [data_disponibilizacao]
   📝 [teor_resumo]
   🔗 [link]

---
2️⃣ [tipo_ato]   (sugestão: mero expediente — não gera prazo ⏭️)
   ...

---
Responda com os números que viram prazo (ex: "1, 3, 5").
Ou: "todos os sugeridos" | "nenhum" | "rebuscar [processo]"
```

## Ação do Pipeline Runner após Triagem

1. Marcar as publicações selecionadas pelo usuário em `output/publicacoes.yaml`, acrescentando a cada uma:

```yaml
    triagem: "PRAZO"   # ou "IGNORAR"
    triado_em: "YYYY-MM-DD HH:MM"
    nota_usuario: "ajuste/observação se houver"
```

2. Confirmar quantas publicações seguem para cálculo de prazo.
3. Avançar para o Step 04 (Priscila Prazo — Cálculo de Prazos).

## Quality Gate

Antes de avançar para o Step 04, verificar:
- [ ] Cada publicação tem `triagem` definida (PRAZO ou IGNORAR)
- [ ] Ao menos uma publicação marcada como PRAZO (se nenhuma, encerrar com aviso "nenhum prazo nesta rodada")
- [ ] Notas do usuário registradas quando houver ajuste

## Opções Especiais

- **"rebuscar [processo]"** → solicitar à Mônica nova captura focada naquele processo (volta ao Step 02 com escopo reduzido).
- **"todos os sugeridos"** → marcar como PRAZO todas as publicações com `gera_prazo: true`.
- **"nenhum"** → marcar tudo como IGNORAR e encerrar o pipeline informando que não há prazo a calcular no período.
