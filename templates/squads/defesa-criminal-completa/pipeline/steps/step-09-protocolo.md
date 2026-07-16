---
step: "09"
name: "Checklist de Protocolo"
type: agent
agent: protocolo
depends_on: step-08
---

# Step 09: Pablo Protocolo — Checklist de Protocolo + Versão Final

## Para o Pipeline Runner

Executar a geração do checklist de protocolo e da versão final pela persona **Pablo Protocolo** (`agents/protocolo.custom.md`).

O Pablo Protocolo consolida a peça aprovada na **versão final protocolável** e gera o **checklist de protocolo** para os sistemas PJe / e-SAJ, garantindo que nada falte no momento de peticionar (tempestividade, documentos, assinatura, classificação).

## Inputs para este Step

- `output/resposta-acusacao-minuta.md` → peça aprovada (APPROVE no Step 07, validada no Step 08)
- `output/revisao-juridica.md` → confirmação do veredicto APPROVE
- `output/caso.md` → processo, vara/comarca, prazo (CPP 396), anexos a juntar
- Best-practice de referência (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md`

## Expected Outputs

- `output/resposta-acusacao-final.md` → versão final protocolável da resposta à acusação (texto definitivo, sem marcações de revisão)
- `output/checklist-protocolo.md` → checklist de protocolo (PJe / e-SAJ), contendo:
  - **Tempestividade:** prazo-fatal (CPP 396, 10 dias) vs. data de protocolo
  - **Sistema:** PJe ou e-SAJ (conforme tribunal) + classe/assunto/tipo de petição
  - **Documentos a anexar:** procuração, peça (PDF), substabelecimento (se houver), documentos de prova
  - **Assinatura:** assinatura digital (certificado ICP-Brasil) — verificar antes de protocolar
  - **Conferência final:** nº do processo, vara, partes, valor da causa (se aplicável)

## Execution Mode

- **Modo:** Inline
- **Skills:** Nenhuma

## Quality Gate

Para encerrar o pipeline:
- [ ] `output/resposta-acusacao-final.md` existe e está sem marcações de revisão
- [ ] `output/checklist-protocolo.md` existe
- [ ] A tempestividade foi conferida (prazo CPP 396 vs. data de protocolo)
- [ ] O sistema (PJe / e-SAJ) e a classe/assunto da petição estão indicados
- [ ] A lista de documentos a anexar está completa
- [ ] O item de assinatura digital (ICP-Brasil) consta no checklist

Concluído este step, o pipeline está finalizado: a resposta à acusação está pronta para protocolo.
