---
step: "02"
name: "Resumo dos Autos"
type: agent
agent: leitor
depends_on: step-01
---

# Step 02: Marcos Memória — Resumo dos Autos

## Para o Pipeline Runner

Executar a leitura e o resumo dos autos pela persona **Marcos Memória** (`agents/leitor.custom.md`), que se apoia no subagente nativo `.claude/agents/resumo-processo.md`.

O Marcos Memória deve ler a denúncia e o inquérito policial indicados em `output/caso.md` e produzir um resumo estruturado **voltado para a defesa** — fatos imputados, qualificação jurídica, lastro probatório do IP, lacunas e pontos frágeis da acusação. NÃO redigir teses nem a peça; apenas mapear os autos.

## Inputs para este Step

- `output/caso.md` → tipo penal, data da citação e caminhos dos anexos (denúncia/IP)
- Denúncia e IP nos caminhos indicados (tipicamente sob `acervo/casos/`)
- `_criminalsquad/_memory/company.md` → contexto do escritório
- Best-practice de referência (não duplicar conteúdo): `_criminalsquad/core/best-practices/etica-oab-sigilo.md` (sigilo na manipulação dos autos)

## Expected Outputs

- `output/resumo-autos.md` → resumo estruturado dos autos para a defesa, contendo:
  - Fatos imputados (narrativa da denúncia)
  - Capitulação jurídica e dispositivos
  - Lastro probatório do IP (provas que sustentam a acusação)
  - Cadeia de prova e eventual reconhecimento (verificar observância do CPP 226)
  - Lacunas / fragilidades / contradições da acusação
  - Testemunhas arroladas pela acusação

## Execution Mode

- **Modo:** Subagente
- **Skills:** Nenhuma (leitura local dos autos)
- **Apoio:** subagente nativo `resumo-processo`

## Quality Gate

Antes de avançar para o Step 03:
- [ ] `output/resumo-autos.md` existe
- [ ] Fatos imputados e capitulação jurídica estão descritos
- [ ] Lastro probatório do IP foi mapeado
- [ ] Lacunas/fragilidades da acusação foram identificadas (insumo para as teses)
- [ ] Testemunhas da acusação listadas
- [ ] Nenhum dado sigiloso do cliente foi exposto fora de `output/` interno (etica-oab-sigilo)

Se qualquer verificação falhar, solicitar que o Marcos Memória refaça o resumo.
