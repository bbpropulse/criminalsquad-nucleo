---
step: "03"
name: "Confirmar Peça"
type: checkpoint
depends_on: step-02
---

# 🛑 Checkpoint: Confirmar Peça Recursal

## Para o Pipeline Runner

Apresentar ao advogado a peça indicada pela Cida Cabimento e o prazo calculado, e aguardar confirmação antes de acionar a pesquisa e a redação.

## Formato de Apresentação ao Usuário

Ler `output/cabimento.md` e apresentar no formato:

```
🧭 Cida Cabimento analisou a decisão atacada.

PEÇA CABÍVEL: [nome da peça] ([fundamento legal])
FORMA: [bipartida — interposição (juízo a quo) + razões (tribunal) | peça única (JECRIM)]
PRAZO: [prazo legal] — termo inicial [DD/MM/AAAA] → data-limite [DD/MM/AAAA]
TEMPESTIVIDADE: [✅ dentro do prazo | ⚠️ atenção: prazo vencido/iminente]

[Se houver recurso prévio ou alternativo, listar aqui]

Confirma esta peça? (responda "sim" para seguir, ou indique outra peça)
```

Exemplo: "Apelação (CPP, art. 593, I), prazo de 5 dias para interpor + 8 dias para as razões (art. 600)."

## Ação do Pipeline Runner após Confirmação

1. Registrar a peça confirmada (e eventuais ajustes do advogado).
2. Atualizar `output/cabimento.md` com o campo `peca_confirmada` e `confirmado_em`.
3. Avançar para o Step 04 (Pesquisador — Precedentes).

## Quality Gate

- [ ] A peça a redigir está definida e registrada
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** o advogado foi alertado sobre o prazo e a data-limite antes de confirmar. Se o prazo estiver vencido, exigir confirmação explícita de que deseja prosseguir mesmo assim.

## Opções Especiais

- **"outra peça"** → registrar a peça escolhida pelo advogado e a justificativa; seguir com a peça indicada por ele.
- **"embargos primeiro"** → se houver vício de integração, confirmar Embargos de Declaração como peça desta rodada (interrompe o prazo dos demais recursos — CPP 619).
- **"contrarrazões"** → quando o cliente é o recorrido, confirmar a peça de contrarrazões correspondente (apelação/RESE/agravo).
