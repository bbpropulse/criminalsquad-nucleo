---
step: "05"
name: "Aprovar Agendamentos / Alertas"
type: checkpoint
depends_on: step-04
---

# 🛑 Checkpoint: Aprovar Agendamentos / Alertas

## Para o Pipeline Runner

Apresentar ao usuário os prazos calculados pela Priscila Prazo e aguardar aprovação antes de gravar qualquer evento na agenda (Step 06) ou disparar qualquer notificação (Step 07). Gravar agenda e enviar e-mail são atos que geram efeitos — nada acontece sem o "ok" explícito do usuário.

## Formato de Apresentação ao Usuário

Ler `output/prazos.yaml` e apresentar no formato:

```
⏰ Priscila calculou [N] prazos. Confira ANTES de eu agendar e notificar.

---
1️⃣ [ato] — Proc [processo] (cliente: [cliente])
   ⚖️ Regime: [PENAL — dias corridos | CIVEL — dias úteis | ⚠️ ZONA CINZENTA]
   📚 Fundamento: [fundamento_regime] / [fundamento_prazo]
   📅 Intimação: [data_intimacao] → Início: [inicio_contagem] → 🔴 FATAL: [data_fatal]
   🔔 Régua: D-7 [..] | D-3 [..] | D-1 [..] | D-0 [..]
   ⚠️ [alerta, se houver]

---
2️⃣ ...

---
⚠️ Atenção a prazos marcados como ZONA CINZENTA — confirme o regime antes de eu agendar.

Aprovar tudo? Responda:
"aprovar todos" | "aprovar 1,2" | "corrigir [n]: [o que mudar]" | "cancelar"
```

## Ação do Pipeline Runner após Aprovação

1. Marcar em `output/prazos.yaml` cada prazo com:

```yaml
    aprovado: true            # ou false
    aprovado_em: "YYYY-MM-DD HH:MM"
    correcao_usuario: "se houve recálculo pedido pelo usuário"
```

2. Se o usuário pediu correção de regime/data, devolver ao Step 04 para recálculo da Priscila e voltar a este checkpoint.
3. Avançar para o Step 06 (Aline Agenda) apenas com os prazos `aprovado: true`.

## Quality Gate

Antes de avançar para o Step 06, verificar:
- [ ] Cada prazo tem `aprovado` (true/false)
- [ ] Nenhum prazo em `regime: ZONA_CINZENTA` segue como aprovado sem confirmação expressa do usuário
- [ ] Ao menos um prazo aprovado (se nenhum, encerrar sem agendar/notificar)

## Opções Especiais

- **"corrigir [n]: ..."** → registrar a correção e retornar ao Step 04 para a Priscila recalcular o prazo `n`.
- **"cancelar"** → encerrar o pipeline sem gravar agenda nem notificar; manter `output/prazos.yaml` para revisão manual.
