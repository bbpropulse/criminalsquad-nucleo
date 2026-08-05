---
step: "02"
name: "Varredura do DJEN"
type: agent
agent: monitor
depends_on: step-01
---

# Step 02: Mônica Monitoramento — Varredura do DJEN

## Para o Pipeline Runner

Executar a Mônica Monitoramento (subagente) para varrer o DJEN/DJe conforme a carteira definida no Step 01 e estruturar todas as publicações do período. A captura técnica usa a skill `monitor-dje`; a classificação de urgência apoia-se no subagente nativo `monitor-dje-djen`.

A Mônica deve capturar TODAS as publicações do período da carteira e estruturá-las — sem decidir ainda o que vira prazo (isso é da triagem do usuário no Step 03). Faz uma pré-classificação de urgência e diferencia intimação (gera prazo) × despacho de mero expediente (não gera).

## Inputs para este Step

- `output/carteira.md` → OAB, CPF/CNPJ, processos, período, tribunais (Step 01)
- `_criminalsquad/_memory/company.md` → contexto do escritório

## Recursos a Referenciar (sem duplicar)

- Skill `skills/monitor-dje/SKILL.md` → captura técnica (Playwright/Apify), slot de ferramenta
- Subagente nativo `.claude/agents/monitor-dje-djen.md` → inteligência de classificação por urgência, Comunica API CNJ, tabelas de regime legal

## Expected Outputs

- `output/publicacoes.yaml` → todas as publicações capturadas, estruturadas e pré-classificadas:

```yaml
periodo: "DD/MM a DD/MM/AAAA"
fonte: "DJEN (Comunica API CNJ) [+ portal STF/STJ se aplicável]"
total: N
publicacoes:
  - id: 1
    processo: "0000000-00.0000.0.00.0000"
    orgao: "Vara/Tribunal"
    data_disponibilizacao: "DD/MM/AAAA"
    partes: "Autor x Réu (cliente: ___)"
    tipo_ato: "Intimação para resposta à acusação / Sentença / Despacho mero expediente / ..."
    teor_resumo: "1-2 linhas"
    gera_prazo: true   # false para mero expediente
    urgencia_preliminar: "CRITICA | ALTA | MEDIA | BAIXA"
    link: "URL oficial da publicação"
```

## Execution Mode

- **Modo:** Subagente
- **Skills permitidas:** monitor-dje

## Quality Gate

Antes de avançar para o Step 03, verificar:
- [ ] `output/publicacoes.yaml` existe
- [ ] Cada publicação tem: processo, orgao, data_disponibilizacao, tipo_ato, gera_prazo, link
- [ ] As publicações são do período definido em `output/carteira.md`
- [ ] Fontes são oficiais (DJEN/DJe; portal STF/STJ quando aplicável) — sem URL inventada
- [ ] Intimação (gera_prazo: true) está diferenciada de despacho de mero expediente (false)
- [ ] Sigilo respeitado: não expor dados sensíveis além do necessário (ver `etica-oab-sigilo`)

Se a varredura não retornar publicações, registrar `total: 0` e informar o usuário (carteira sem movimentação no período) — não inventar publicações.
