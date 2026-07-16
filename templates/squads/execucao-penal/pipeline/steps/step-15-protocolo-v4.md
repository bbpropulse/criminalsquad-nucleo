---
step: "15"
name: "Versão Final e Checklist"
type: agent
agent: protocolo
execution: inline
depends_on: step-14
---

# Step 15 — Versão final e checklist de protocolo

## Hard stop terminal

Exija `APROVAR VERSÃO FINAL`, quatro reviews `APPROVE`, sidecar válido em `--release`, Citation Gate limpo e, quando houver art. 112, regra aprovada e revalidada na data corrente. Falha gera apenas `output/bloqueio-protocolo.md`; é proibido gerar arquivo protocolável.

## Outputs

- `output/peticao-execucao-final.md` — cópia limpa da minuta aprovada, sem alteração material;
- `output/checklist-protocolo.md` — sistema/classe, partes, autos, documentos, assinatura, prazo, comprovante e plano recursal condicionado;
- `output/entrega-juridica.json` — sidecar final, com revisão humana registrada.

Não envie, assine nem protocole. Qualquer ação externa exige novo checkpoint e autorização explícita do usuário.

Registre telemetria sem conteúdo do caso: skill, versão, duração, tokens, blockers, correções humanas e, se houver baseline informado, tempo comparável. Não grave nomes, fatos ou documentos em logs.
