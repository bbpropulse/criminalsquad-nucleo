# Schema canônico de marcos (`marcos.yaml`)

Contrato único de marcos processuais que a `linha-tempo-processual-autos` **emite** e as
calculadoras (`calculadora-prescricao`, `calculadora-tempestividade`,
`execucao-detracao-penal`, `calculadora-dosimetria`) **consomem** — para que a data seja
extraída e ancorada **uma vez** e nunca redigitada à mão. Redigitar data é a fonte nº 1
de erro em prescrição e tempestividade; um contrato compartilhado corta isso.

Persistência: grave em `acervo/casos/{numero-processo}/marcos.yaml` (sigiloso, gitignored).
É o mesmo conjunto de marcos que o `dossie-caso` referencia em `dossie.yaml → linha_tempo`;
mantenha os dois consistentes (o `marcos.yaml` é a fonte, o `dossie.yaml` cita).

## `marcos.yaml` — campos

```yaml
processo: "00008325520234013800"        # sem máscara
marcos:
  - data: "2023-05-10"                  # AAAA-MM-DD (a data que conta para o efeito)
    tipo_data: "publicacao"             # ato | juntada | disponibilizacao | publicacao | ciencia
    marco: "recebimento_denuncia"       # ver vocabulário abaixo
    efeito: "interrompe"                # termo_inicial | interrompe | suspende | neutro
    dispositivo: "art. 117, I, CP"      # base legal do efeito (vazio se neutro)
    ancora: "ev. 4 (fl. 2-9)"           # peça + fl./ev./ID verificável
    confianca: "alta"                   # alta | media | baixa
```

## Vocabulário de `marco`

`fato` (consumação; termo do art. 111 III) · `recebimento_denuncia` (art. 117 I) ·
`pronuncia` (117 II) · `confirmacao_pronuncia` (117 III) · `sentenca_condenatoria` (117 IV) ·
`acordao_condenatorio` (117 IV) · `inicio_cumprimento` (117 V) · `reincidencia` (117 VI) ·
`suspensao_116` (116) · `citacao` · `intimacao` · `interposicao_recurso` ·
`transito_julgado` · `prisao_cautelar` (detração) · `outro`.

## Como cada calculadora consome

- **`calculadora-prescricao`** — `marcos[]` da entrada = as datas dos marcos com
  `efeito: interrompe` (art. 117), em ordem; `data_fato` = o marco `fato`
  (`efeito: termo_inicial`). `suspende` (art. 116) entra como janela suspensiva.
- **`calculadora-tempestividade`** — usa o marco de `intimacao`/`publicacao` do ato
  recorrido (o `tipo_data` correto é decisivo: publicação × ciência mudam o termo).
- **`execucao-detracao-penal`** — usa os marcos `prisao_cautelar` (períodos de custódia).
- **`calculadora-dosimetria`** — usa `sentenca_condenatoria`/`reincidencia` quando datar
  agravantes/atenuantes temporais.

## Regras

- **Âncora obrigatória** em todo marco (`ancora`). Sem folha/evento/ID, o marco não entra
  no cálculo — sinalize lacuna, não invente data.
- **`tipo_data` é decisivo:** distinga data do ato × juntada × disponibilização ×
  publicação × ciência. O mesmo marco tem datas diferentes conforme o tipo, e o efeito
  jurídico depende disso.
- **Não escolher a modalidade nem a regra:** este schema entrega **datas ancoradas**; a
  escolha da lei/fração/modalidade é da calculadora + revisão humana.
- **Vigência:** o dispositivo citado (arts. 111-117 CP; Lei 11.419/06) passa por
  `verificacao-citacoes` antes de virar base do cálculo.
