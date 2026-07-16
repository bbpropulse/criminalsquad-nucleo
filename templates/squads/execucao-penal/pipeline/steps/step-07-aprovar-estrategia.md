---
step: "07"
name: "Aprovar Estratégia"
type: checkpoint
depends_on: step-06
outputFile: output/estrategia-aprovada.md
---

# Step 07 — Checkpoint humano da estratégia

Apresente ao profissional, de forma compacta:

- status e blockers;
- cronologia e divergências materiais;
- regra temporal e cálculo usados;
- tese principal, subsidiárias, objeção do MP e risco;
- pedido pretendido, documentos, próxima ação e prazo;
- eventual uso de skill `pilot` e o fallback ativo.

Solicite decisão explícita: `APROVAR`, `AJUSTAR` ou `BLOQUEAR`. Salve a resposta, identidade funcional do revisor, data e ajustes em `output/estrategia-aprovada.md`.

Só avance com `APROVAR`, sidecar sem hard fail e nenhuma regra/citação material pendente. Aprovação genérica não valida percentual, cálculo ou fonte que estejam ausentes.
