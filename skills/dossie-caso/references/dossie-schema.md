# Schema do dossiê do caso (`dossie.yaml` + `dossie.md`)

Contrato do artefato persistente que `resumo-processo` grava em
`acervo/casos/{numero-processo}/`. O `.md` é a versão legível para o profissional;
o `.yaml` é o consumo por máquina (calculadoras, monitor de prazos, mail-merge,
dashboard de carteira). Os dois derivam da mesma síntese e devem ficar consistentes.

`acervo/casos/` é **sigiloso e gitignored** — este schema é versionado e distribuído;
os dossiês reais nunca entram no repositório.

## Estrutura de pastas do caso

```
acervo/casos/{numero-processo}/       # sem máscara no nome da pasta
├── dossie.md                         # síntese legível
├── dossie.yaml                       # síntese estruturada (máquina)
├── autos-texto.md                    # texto pesquisável (de ocr-autos-pdf)
└── indice-autos.yaml                 # índice estruturado de peças (de ocr-autos-pdf)
```

## `dossie.yaml` — campos

```yaml
processo: "00008325520234013800"      # sem máscara
numero_com_mascara: "0000832-55.2023.4.01.3800"
polo: "defesa"                        # defesa | acusacao | assistente
sintetizado_ate:                      # controla a leitura-delta
  folha: 412                          # última folha sintetizada (autos físicos)
  evento: 37                          # ou último evento (autos eletrônicos)
  data: "2026-07-14"
partes:
  - papel: "reu"                      # reu | querelado | mp | querelante | assistente | vitima
    nome: "..."
    representacao: "Defensoria|OAB 00000/UF|—"
imputacao:
  - tipo_penal: "art. 157, §2º, II, CP"
    fato: "..."
    data_fato: "2023-01-15"
    valor: null
    causas: ["concurso de pessoas"]
linha_tempo:                          # marcos com âncora — insumo das calculadoras
  - marco: "recebimento_denuncia"
    data: "2023-05-10"
    ancora: "ev. 4"
    efeito: "interrompe prescrição (art. 117, I, CP)"
matriz_fato_prova:                    # o núcleo
  - fato: "subtração mediante grave ameaça"
    sustenta: true                    # true = prova a favor da imputação; false = infirma
    prova: "auto de reconhecimento fotográfico"
    ancora: "fl. 88"
    forca: "media"                    # forte | media | fraca | contestavel
teses:
  - tese: "nulidade do reconhecimento (art. 226 CPP não observado)"
    polo: "defesa"
    sustentacao_ancora: ["fl. 88", "fl. 90"]
    risco: "STJ tem exigido observância; TJ local oscila — verificar"
    status: "hipotese_a_confirmar"
riscos:
  - tipo: "prazo"                     # prazo | nulidade | cadeia_custodia | cautelar | prescricao
    descricao: "réu preso — excesso de prazo em formação da culpa maturando"
    ancora: "ev. 30"
o_que_falta:                          # seção obrigatória — o silêncio dos autos é informação
  - "laudo de exame do celular apreendido não juntado"
  - "cadeia de custódia da arma não documentada entre apreensão e perícia"
confianca: "media"                    # alta | media | baixa
```

## Regras

- **Âncora obrigatória** em todo fato, prova, marco e tese. Sem folha/evento/ID
  verificável, registre `ancora: "nao_localizado"` — nunca invente localização.
- **`sintetizado_ate`** é o que viabiliza a leitura-delta: na próxima passada,
  `resumo-processo` lê só o que veio depois desse marco.
- **Nada de citação de memória:** súmulas/precedentes em `teses[].risco` passam por
  `verificacao-citacoes` antes de entrar.
- **`o_que_falta` nunca é omitida.** Se os autos estão completos, registre
  `o_que_falta: []` explicitamente.
