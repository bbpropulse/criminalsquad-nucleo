---
step: "05"
name: "Redação do Recurso"
type: agent
agent: redator
depends_on: step-04
---

# Step 05: Rafael Recurso — Redação da Peça Bipartida

## Para o Pipeline Runner

Executar o Redator (Rafael Recurso). Ele deve **carregar a skill correspondente à peça confirmada** e redigir a peça completa: **interposição** (dirigida ao juízo *a quo*) **+ razões** (dirigidas ao tribunal *ad quem*). No JECRIM, redigir peça única (interposição com razões).

## Carregamento Condicional da Skill (obrigatório)

Conforme a peça confirmada em `output/cabimento.md`, o Rafael CARREGA exatamente uma destas skills antes de redigir:

| Peça confirmada | Skill a carregar |
|---|---|
| Apelação | `skills/apelacao` |
| Recurso em Sentido Estrito (RESE) | `skills/rese` |
| Embargos de Declaração | `skills/embargos-de-declaracao` |
| Embargos Infringentes e de Nulidade | `skills/embargos-infringentes` |
| Agravo em Execução | `skills/agravo-em-execucao` |
| Revisão Criminal | `skills/revisao-criminal` |
| Contrarrazões de Apelação | `skills/contrarrazoes-apelacao` |
| Contrarrazões de RESE | `skills/contrarrazoes-rese` |
| Contrarrazões de Agravo em Execução | `skills/contrarrazoes-agravo` |

## Inputs para este Step

- `output/cabimento.md` → peça confirmada, fundamento, prazo, forma (bipartida/única)
- `output/decisao.md` → decisão atacada (a impugnação deve atacar seus fundamentos — dialeticidade)
- `output/precedentes.md` → precedentes e roteiro de citação para as razões
- Best-practice `recurso-criminal` → estrutura da peça bipartida e princípios
- Best-practice `revisao-juridica` e `etica-oab-sigilo` → padrão de qualidade e dever de sigilo

## Expected Outputs

- `output/recurso.md` → peça completa: PARTE 1 (interposição, juízo a quo) + PARTE 2 (razões, tribunal). No JECRIM, peça única.

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** a skill da peça (carregada conforme tabela acima)

## Quality Gate

Antes de avançar para o Step 06, verificar:
- [ ] `output/recurso.md` existe
- [ ] A skill correta da peça foi carregada e a estrutura segue o modelo dela
- [ ] A peça é BIPARTIDA — interposição (juízo a quo) E razões (tribunal) em seções separadas (ou peça única, se JECRIM)
- [ ] As razões atacam especificamente os fundamentos da decisão (dialeticidade)
- [ ] Quando houver efeito regressivo (RESE/agravo), a interposição pede a retratação (CPP 589)
- [ ] As teses estão escalonadas (principal → subsidiárias) pelo princípio da eventualidade
- [ ] Os precedentes do Step 04 foram citados nas razões
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** a interposição registra a data da intimação e afirma a tempestividade (dentro do prazo legal). Se o prazo estiver vencido, isso é sinalizado em destaque.

Se qualquer verificação falhar, solicitar que o Rafael Recurso corrija o item antes de prosseguir.

## Citation Gate (na redação)

- As citações vindas de `output/precedentes.md` que estiverem marcadas com `[NÃO VERIFICADO]` / `[DIVERGENTE]` **não** entram nas razões como fundamento — devem ser confirmadas (e a marcação removida) ou substituídas/removidas antes de citar.
- Nenhuma súmula/precedente é citado "de memória": tudo deriva da pesquisa do Step 04. O hook `verifica-citacoes` bloqueia a gravação final enquanto restar qualquer marcador pendente na peça.

## Loop de Revisão (entrada por REJECT do Step 07)

Quando este step é reexecutado por `on_reject: step-05` (REJECT da Vera Veredito), o Rafael recebe **apenas** a lista `fixes` (feedback-delta) + a peça anterior — **não reescreve do zero**. Aplica somente as correções indicadas (que podem incluir corrigir/remover citações apontadas pelo `verificador-citacoes`) e devolve a peça revisada. A execução então retoma para a frente pelo Step 06 (re-aprovação) e Step 07 (nova revisão).

## Nota Especial

O Rafael deve auto-verificar contra a checklist da skill da peça antes de entregar. Se concluir que há itens a corrigir, deve iterar autonomamente antes de declarar a task concluída. O Pipeline Runner aguarda a entrega final, não o primeiro rascunho.
