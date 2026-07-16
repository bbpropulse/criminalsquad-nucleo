---
step: "05"
name: "Redação da Peça"
type: agent
agent: redator
depends_on: step-04
---

# Step 05: Quim Queixa — Redação da Peça

## Para o Pipeline Runner

Executar o Redator (Quim Queixa). Ele deve **carregar a skill correspondente à peça confirmada** e redigir a peça completa da fase pré-processual/ação penal privada, no padrão de petição única da skill.

## Carregamento Condicional da Skill (obrigatório)

Conforme a peça confirmada em `output/cabimento.md`, o Quim CARREGA exatamente uma destas skills antes de redigir:

| Peça confirmada | Skill a carregar |
|---|---|
| Oferecimento de Representação | `skills/representacao` |
| Requerimento de Instauração de Investigação | `skills/requerimento-investigacao` |
| Queixa-Crime | `skills/queixa-crime` |
| Retratação / Renúncia da Representação | `skills/retratacao-representacao` |

## Inputs para este Step

- `output/cabimento.md` → espécie de ação, peça confirmada, fundamento, endereçamento e prazo decadencial
- `output/fatos.md` → relato, tipo penal, provas e qualificação das partes (a narrativa deve refletir os fatos)
- `output/precedentes.md` → precedentes e roteiro de citação para a fundamentação
- Best-practice `peticao-criminal` → estrutura e padrões da peça penal de 1º grau
- Best-practice `revisao-juridica` e `etica-oab-sigilo` → padrão de qualidade e dever de sigilo

## Expected Outputs

- `output/peca.md` → peça completa no padrão da skill carregada (endereçamento → preâmbulo → Dos Fatos → Do Direito → Dos Pedidos → fechamento → rol de testemunhas quando cabível)

## Citation Gate (obrigatório após a redação)

Após gravar `output/peca.md`, o Pipeline Runner executa o **Citation Gate** (Passo 4.5 do runner) antes de avançar ao checkpoint:

1. Acionar o subagente `verificador-citacoes` (read-only, contexto fresco) passando `output/peca.md` + `output/precedentes.md`. Ele devolve, por citação: VERIFICADA / DIVERGENTE / NÃO ENCONTRADA.
2. Toda citação DIVERGENTE/NÃO ENCONTRADA é marcada na peça com `[DIVERGENTE]`/`[NÃO VERIFICADO]` (ver best-practice `verificacao-citacoes`). Citações vindas do Step 04 marcadas `[NÃO VERIFICADO]` só perdem a marca após conferência da fonte.
3. **Loop gerador→verificador (teto 3):** se houver pendências, devolver ao Quim Queixa apenas as citações problemáticas para correção/remoção e reverificar. Pare em APROVADO; no teto, escalar ao usuário. O hook `verifica-citacoes` bloqueia a gravação final enquanto restar qualquer marcador.

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** a skill da peça (carregada conforme tabela acima)

## Quality Gate

Antes de avançar para o Step 06, verificar:
- [ ] `output/peca.md` existe
- [ ] A skill correta da peça foi carregada e a estrutura segue o modelo dela
- [ ] **Endereçamento correto:** delegado/MP com "Excelentíssimo" (Lei 12.830/2013) na representação e no requerimento; **juiz** na queixa-crime; delegado/MP/juiz na retratação. Nunca "Ao Juízo" para delegado/MP.
- [ ] **Verbo e nomenclatura das partes corretos:** OFERECER/representado (representação); APRESENTAR/requerido (requerimento); OFERECER/querelante × querelado (queixa); APRESENTAR/representado (retratação).
- [ ] **Adequação típica** observa a exposição do fato criminoso com todas as circunstâncias + capitulação (na queixa, CPP art. 41).
- [ ] **Se QUEIXA-CRIME:** querelante qualificado (não "já qualificado"); **procuração com PODERES ESPECIAIS** mencionada no preâmbulo (CPP art. 44 — nome do querelante + menção ao fato); pedidos incluem recebimento + citação + testemunhas + procedência/condenação + indenização (CPP art. 387, IV); **rol de testemunhas após a assinatura**; respeito à INDIVISIBILIDADE (todos os ofensores — CPP art. 48).
- [ ] **Se RETRATAÇÃO/RENÚNCIA:** distinção correta (renúncia = não oferecida; retratação = já oferecida); momento (antes do oferecimento da denúncia; Maria da Penha, antes do recebimento — Lei 11.340 art. 16); pedido de acolhimento + arquivamento; **SEM rol de testemunhas**.
- [ ] Os precedentes do Step 04 foram incorporados à fundamentação (Do Direito).
- [ ] **VERIFICAÇÃO DE DECADÊNCIA (crítico):** o tópico "Do Direito" afirma a TEMPESTIVIDADE — peça oferecida no prazo de 6 meses contado do conhecimento da autoria (CP art. 103 / CPP art. 38), ou do esgotamento do prazo do MP na subsidiária. Se o prazo estiver vencido, isso é sinalizado em destaque (risco de decadência).

Se qualquer verificação falhar, solicitar que o Quim Queixa corrija o item antes de prosseguir.

## Nota Especial

O Quim deve auto-verificar contra o **checklist final da skill da peça** antes de entregar. Se concluir que há itens a corrigir, deve iterar autonomamente antes de declarar a task concluída. O Pipeline Runner aguarda a entrega final, não o primeiro rascunho. A peça da queixa é a única dirigida ao juiz e a única que exige procuração com poderes especiais (CPP art. 44) — não esquecer.
