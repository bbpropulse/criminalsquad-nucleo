# Schema do índice estruturado dos autos (`indice-autos.yaml`)

Artefato que `ocr-autos-pdf` grava ao lado do texto pesquisável, em
`acervo/casos/{numero-processo}/`. Transforma o PDF (que a máquina lê linearmente) num
**mapa navegável de peças** com âncoras prontas para citação e comparação. É o que
viabiliza a leitura-delta: `resumo-processo`, as calculadoras e o monitor de prazos
consultam o índice em vez de reprocessar o PDF inteiro.

`acervo/casos/` é **sigiloso e gitignored** — este schema é versionado; os índices
reais nunca entram no repositório.

## `indice-autos.yaml` — campos

```yaml
processo: "00008325520234013800"       # sem máscara
tipo_autos: "eletronico"               # eletronico (eventos) | fisico (folhas) | misto
extraido_ate:                          # controla a leitura-delta
  folha: 412                           # última folha indexada, se físico
  evento: 37                           # último evento indexado, se eletrônico
  data_extracao: "2026-07-14"
qualidade_ocr: "boa"                   # boa | media | ruim (digitalização de baixa qualidade)
pecas:
  - tipo: "denuncia"                   # ver vocabulário abaixo
    descricao: "Denúncia do MPF"
    faixa_folhas: [2, 9]               # [inicial, final] — se físico
    evento: 4                          # se eletrônico
    ancora: "ev. 4 (fl. 2-9)"          # âncora citável, pronta para máquina
    offset_texto: 1520                 # posição no autos-texto.md (opcional, para salto direto)
    ilegibilidade: false               # true se OCR incerto nesta peça
  - tipo: "depoimento"
    descricao: "Termo de declaração da vítima"
    evento: 30
    ancora: "ev. 30"
    ilegibilidade: false
alertas:                               # o que a leitura seguinte precisa saber
  - "fls. 210-214 ilegíveis (manuscrito) — conferir no original"
  - "mídia em anexo (ev. 33) não OCRável — vídeo"
```

## Vocabulário de `tipo` (peça)

`despacho` · `decisao` · `sentenca` · `acordao` · `denuncia` · `queixa` ·
`manifestacao_mp` · `defesa` · `recurso` · `depoimento` · `interrogatorio` ·
`laudo` · `pericia` · `documento` · `certidao` · `mandado` · `auto` · `peticao` ·
`intimacao` · `outro`

## Regras

- **Âncora sempre citável.** `ancora` deve permitir localizar a peça no original
  (evento e/ou faixa de folhas). É o que torna verificável tudo que o dossiê afirma.
- **`extraido_ate`** habilita o delta: a próxima corrida de OCR indexa só o que veio
  depois desse marco e faz append; não reprocessa o já indexado.
- **Não invente estrutura.** Se o tipo de uma peça não é claro, use `outro` com
  `descricao` — não force uma classificação.
- **Marque a incerteza.** `ilegibilidade: true` e `alertas[]` sinalizam ao leitor
  seguinte o que precisa de conferência no original — OCR erra justamente em números,
  nomes e datas, que é o que mais importa no criminal.
