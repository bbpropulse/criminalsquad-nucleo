# Schema da linha-plana da carteira (`carteira-row.json`)

Cada caso do lote grava um `acervo/casos/{numero-processo}/carteira-row.json` — uma
**linha plana** (JSON, sem aninhamento profundo) que o consolidador determinístico
`scripts/orchestra/carteira-consolidar.mjs` lê para montar a tabela
`acervo/casos/_carteira/carteira.{json,csv}`.

Por que uma linha-plana separada do `dossie.yaml`: o dossiê é rico e **autorado** (YAML
com listas/mapas), difícil de parsear por script sem dependência. A linha-plana é o
**recorte tabular** do dossiê — poucos campos, JSON puro (`JSON.parse` basta) — para que
a consolidação seja determinística, testável e barata. É derivada do `dossie.yaml` e do
`marcos.yaml`; em conflito, o dossiê prevalece (a linha é o resumo, não a fonte).

## `carteira-row.json` — campos (todos planos)

```json
{
  "processo": "00008325520234013800",   // sem máscara — chave
  "polo": "defesa",                       // defesa | acusacao | assistente
  "reu": "Fulano de Tal",                 // parte principal do polo (ou querelado)
  "tipos_penais": ["art. 157, §2º, CP"],  // lista de tipos imputados
  "data_fato": "2023-01-15",              // AAAA-MM-DD (do marco `fato`)
  "valor": null,                          // valor envolvido: número (reais) ou null. Aceita
                                          // string BR ("R$ 1.500.000,00", "50.000") — o
                                          // consolidador normaliza; o que não for número vira null.
  "fase": "instrucao",                    // inquerito | denuncia | instrucao | recurso | execucao | arquivado
  "proximo_ato": "alegações finais",      // próxima peça/ato esperado (texto curto)
  "prazo_fatal": "2026-07-20",            // AAAA-MM-DD do prazo mais urgente, ou null
  "riscos_n": 2,                          // nº de itens em dossie.yaml → riscos[]
  "o_que_falta_n": 1,                     // nº de itens em dossie.yaml → o_que_falta[]
  "confianca": "media",                   // alta | media | baixa
  "atualizado_em": "2026-07-14"           // data da última consolidação deste caso
}
```

O consolidador tolera ausências: se `riscos_n`/`o_que_falta_n` faltarem mas houver as
listas (`riscos`/`o_que_falta`), ele conta; **contagens totalmente ausentes viram `0`**;
os demais campos vazios viram **célula vazia** no CSV — inclusive `confianca`: não se
inventa um nível não avaliado.

## Alinhamento com o contrato do dashboard

As colunas mapeiam o "Contrato de dados" de `execucao-dashboard-carteira`
(`caso_id`, `fase`, `prazo`, `proxima_acao`, `prioridade`…). Para exibição em painel ou
relatório que saia da máquina, **pseudonimize** `processo`/`reu` (o dataset bruto vive só
em `acervo/casos/_carteira/`, gitignored). `prazo_fatal` pode ser cruzado com o
`_criminalsquad/_memory/djen-tracker.jsonl` (campo `fatal`) quando o monitor de prazos já
tiver a data oficial.

## Regras

- **Uma linha por caso**, gravada na pasta do próprio caso (evita corrida de escrita no lote).
- **`processo` é obrigatório** — sem ele, o consolidador pula a linha (com aviso).
- **Não é a fonte da verdade** — é o recorte tabular do `dossie.yaml`; decisões usam o dossiê + revisão humana.
- **Sigiloso** — `acervo/casos/` é gitignored; a linha-plana contém dado de cliente e nunca sai da máquina.
