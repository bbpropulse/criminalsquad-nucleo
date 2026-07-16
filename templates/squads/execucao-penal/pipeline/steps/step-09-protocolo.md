---
step: "09"
name: "Checklist de Protocolo"
type: agent
agent: protocolo
execution: inline
depends_on: step-08
---

# Step 09: Tadeu Trâmite — Checklist de Protocolo + Versão Final

## Para o Pipeline Runner

Executar a geração do checklist de protocolo e da versão final pela persona **Tadeu Trâmite** (`agents/protocolo.custom.md`), que **carrega a skill `agravo-em-execucao`** (`skills/agravo-em-execucao/SKILL.md`) para a orientação recursal.

O Tadeu Trâmite consolida a peça aprovada na **versão final protocolável** e gera o **checklist de protocolo** para os sistemas do Juízo da Execução (PJe / e-SAJ / SEEU), garantindo que nada falte ao peticionar (documentos da execução, assinatura, classificação), além da **orientação de agravo em execução** (art. 197 LEP) caso o instituto seja indeferido.

**Hard stop:** se a peça contiver art. 112, inciso, valor, lapso ou data de progressão, validar antes de qualquer arquivo final `output/verificacao-temporal-art-112.yaml` e a conferência do Step 07. O gate deve estar `REGRA_APROVADA_POR_HUMANO`, na data corrente e sem pendências. Caso contrário, gerar somente `output/bloqueio-protocolo.md` com **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; é proibido gerar `peticao-execucao-final.md`.

## Inputs para este Step

- `output/peticao-execucao-minuta.md` → peça aprovada (APPROVE no Step 07, validada no Step 08)
- `output/revisao-juridica.md` → confirmação do veredicto APPROVE e do Citation Gate
- `output/verificacao-temporal-art-112.yaml` → obrigatório quando houver art. 112; conferir status, freshness e revisor
- `output/caso.md` → autos de execução, Vara/comarca, instituto, anexos a juntar
- Skill carregada: `skills/agravo-em-execucao/SKILL.md`
- Best-practices de referência (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md` e `recurso-criminal.md`

## Expected Outputs

- `output/peticao-execucao-final.md` → versão final protocolável da petição (texto definitivo, sem marcações de revisão)
- `output/checklist-protocolo.md` → checklist de protocolo, contendo:
  - **Sistema:** PJe / e-SAJ / SEEU (conforme tribunal) + classe/assunto (incidente de execução)
  - **Documentos a anexar:** procuração, peça (PDF), cálculo de liquidação atualizado, atestado de conduta carcerária, guia de recolhimento, folha de antecedentes
  - **Assinatura:** assinatura digital (certificado ICP-Brasil) — verificar antes de protocolar
  - **Conferência final:** nº dos autos de execução, Vara, partes, instituto
  - **Plano B — Agravo em Execução (art. 197 LEP):** se o Juízo indeferir, interpor agravo no **prazo de 5 dias** (Súm. 700/STF), peça **bipartida** (interposição à VEC + razões ao tribunal), com pedido de **retratação** (efeito regressivo, art. 589 CPP)

## Execution Mode

- **Modo:** Inline
- **Skills:** agravo-em-execucao

## Quality Gate

Para encerrar o pipeline:
- [ ] `output/peticao-execucao-final.md` existe e está sem marcações de revisão
- [ ] Se houver art. 112, o Temporal Gate está aprovado por humano, vigente e registrado no relatório do Step 07
- [ ] Se o gate falhou, apenas `output/bloqueio-protocolo.md` foi gerado e nenhum arquivo protocolável existe
- [ ] `output/checklist-protocolo.md` existe
- [ ] O sistema (PJe / e-SAJ / SEEU) e a classe/assunto estão indicados
- [ ] A lista de documentos da execução a anexar está completa (cálculo, atestado, guia)
- [ ] O item de assinatura digital (ICP-Brasil) consta no checklist
- [ ] A orientação de agravo em execução (art. 197 LEP, 5 dias — Súm. 700) consta para o caso de indeferimento

Concluído sem bloqueios, a peça está pronta **para revisão final do profissional e posterior protocolo humano**. O sistema não protocola automaticamente.
