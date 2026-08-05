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
Responda com os números que viram PRAZO (ex: "1, 3, 5").
Se algum for apenas CIÊNCIA (audiência/perícia designada), diga: "5 é ciência".
Ou: "todos os sugeridos" | "nenhum" | "rebuscar [processo]"
```

## Ação do Pipeline Runner após Triagem

1. Marcar as publicações selecionadas pelo usuário em `output/publicacoes.yaml`, acrescentando a cada uma:

```yaml
    # TRÊS vias, não duas — é o que o success_criteria do squad exige:
    #   PRAZO      → gera prazo preclusivo, segue para interpretação e cálculo
    #   CIENCIA    → ato com data designada ou mera comunicação: vira COMPROMISSO
    #                de agenda (audiência, perícia), não data fatal
    #   IGNORAR    → mero expediente ou ruído de captura (homonímia, processo
    #                alheio à carteira) — justifique em `nota_usuario`
    # Medido no smoke-run de 27/07: o step só previa PRAZO|IGNORAR, a rubrica
    # exigia três, e a execução teve de improvisar CIENCIA fora do contrato.
    triagem: "PRAZO"   # PRAZO | CIENCIA | IGNORAR
    triado_em: "YYYY-MM-DD HH:MM"
    nota_usuario: "ajuste/observação se houver"
```

2. Confirmar quantas publicações seguem para cálculo de prazo, quantas viraram ciência e quantas foram descartadas — as três contas, não só a primeira.
3. Toda publicação marcada `CIENCIA` com data designada segue para o Step 06 e entra no `.ics` como compromisso; ela NÃO passa pelo cálculo de prazo.
4. Avançar para o Step 03b (Iara Intimação — Interpretação das Intimações).

## Quality Gate

Antes de avançar para o Step 04, verificar:
- [ ] Cada publicação tem `triagem` definida (PRAZO ou IGNORAR)
- [ ] Ao menos uma publicação marcada como PRAZO (se nenhuma, encerrar com aviso "nenhum prazo nesta rodada")
- [ ] Notas do usuário registradas quando houver ajuste

## Opções Especiais

- **"rebuscar [processo]"** → solicitar à Mônica nova captura focada naquele processo (volta ao Step 02 com escopo reduzido).
- **"todos os sugeridos"** → marcar como PRAZO todas as publicações com `gera_prazo: true`.
- **"nenhum"** → marcar tudo como IGNORAR e encerrar o pipeline informando que não há prazo a calcular no período.
