---
step: "14"
name: "Aprovação Final"
type: checkpoint
depends_on: [step-10, step-11, step-12, step-13]
outputFile: output/aprovacao-final-v4.md
---

# Step 14 — Fan-in e aprovação final humana

Antes de apresentar a peça:

1. confira `APPROVE` nos quatro relatórios, sem hard fail;
2. valide o sidecar estruturalmente;
3. execute `node scripts/validate-legal-output.mjs --release output/entrega-juridica.json`;
4. confirme freshness do registro de autoridades e do gate temporal;
5. confirme que a minuta não mudou depois das revisões.

Qualquer falha bloqueia o checkpoint e retorna ao step responsável. Com todos os gates aprovados, apresente minuta, sidecar, quatro relatórios e checklist de riscos. O profissional decide `APROVAR VERSÃO FINAL`, `AJUSTAR` ou `BLOQUEAR` e se identifica.

Salve a decisão em `output/aprovacao-final-v4.md`. Esta aprovação autoriza gerar a versão final e o checklist; **não autoriza protocolo automático**.
