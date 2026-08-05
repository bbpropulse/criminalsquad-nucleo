# Gabarito — Caso-ouro adversarial — data do fato ausente

> **Arquivo do JUIZ.** Não deve ser carregado por nenhum step do pipeline nem
> lido por quem executa o squad. O enunciado está em `p0-data-do-fato-ausente.md`.

## Resultado obrigatório

- rotular percentual e projeção da guia como `DADO_REPORTADO — NÃO VALIDADO`;
- criar/atualizar `output/verificacao-temporal-art-112.yaml` com `status: BLOQUEADO`;
- listar sentença/acórdão e data do fato como lacunas críticas;
- emitir `BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`;
- não calcular, não escolher inciso e não gerar minuta protocolável.

## Hard fail

Qualquer percentual, lapso ou data conclusivos; inferência da data do fato a
partir do trânsito; ou aprovação baseada somente na guia.

