---
step: "01"
name: "Decisão Atacada"
type: checkpoint
description: O advogado anexa a decisão adversa e informa os dados que definem o cabimento e a tempestividade.
---

# 🛑 Checkpoint: Decisão Atacada

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar a decisão adversa e os dados mínimos que o Classificador precisa para indicar a peça cabível e o prazo. **Não avançar enquanto a data da intimação não estiver registrada** — sem ela é impossível conferir a tempestividade.

## Solicitação ao Usuário

⚖️ Vamos identificar e redigir o recurso correto contra a decisão adversa.

Para começar, preciso que você informe:

1. **A decisão atacada** — cole o inteiro teor (ou anexe o arquivo) da sentença, acórdão ou decisão interlocutória que se quer recorrer.
2. **Natureza da decisão** — é sentença condenatória/absolutória? acórdão de tribunal? decisão interlocutória? decisão do juiz da execução? Já transitou em julgado?
3. **Foi proferida no JECRIM (Lei 9.099/95)?** — sim ou não (muda o prazo e a forma da peça).
4. **Se for acórdão: a votação foi unânime ou por maioria (2x1)?** — e, se por maioria, o voto vencido foi favorável ao réu?
5. **Posição do cliente** — réu/recorrente ou parte que precisa apresentar contrarrazões?
6. **Data da intimação/publicação** da decisão (para contar o prazo).

## Ação do Pipeline Runner

1. Receber e registrar os dados fornecidos.
2. Salvar a decisão e os metadados em `output/decisao.md` no formato abaixo.
3. Avançar para o Step 02 (Classificador — Cabimento).

## Formato de Salvamento (`output/decisao.md`)

```markdown
# Decisão Atacada

**Natureza:** [sentença condenatória | sentença absolutória | acórdão | decisão interlocutória | decisão da execução]
**Órgão prolator:** [juízo singular | Tribunal do Júri | TJ/TRF | juiz da execução]
**JECRIM (Lei 9.099):** [sim | não]
**Transitou em julgado:** [sim | não]
**Votação (se acórdão):** [unânime | maioria 2x1 — voto vencido favorável ao réu? sim/não]
**Posição do cliente:** [recorrente/réu | recorrido (contrarrazões)]
**Data da intimação/publicação:** [DD/MM/AAAA]
**Recebido em:** YYYY-MM-DD

## Inteiro teor da decisão
[colar/transcrever o conteúdo da decisão atacada]
```

## Quality Gate

Antes de avançar para o Step 02, verificar:
- [ ] `output/decisao.md` existe
- [ ] O inteiro teor (ou resumo substancial) da decisão está registrado
- [ ] A natureza da decisão está identificada
- [ ] O campo JECRIM (sim/não) está preenchido
- [ ] Se for acórdão, a votação (unânime/maioria) está registrada
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** a data da intimação/publicação está preenchida. Sem ela, NÃO avançar — solicitar a data ao usuário.

Se qualquer verificação falhar, repetir a solicitação do dado faltante antes de prosseguir.

## Opções Especiais

- **"não sei a data da intimação"** → orientar o usuário a localizar no andamento processual / DJe antes de prosseguir, pois é o dado mais crítico para o recurso.
- **Decisão com vício de integração (omissão/contradição/obscuridade)** → sinalizar ao Classificador que pode ser caso de Embargos de Declaração (CPP 619) antes do recurso principal.
