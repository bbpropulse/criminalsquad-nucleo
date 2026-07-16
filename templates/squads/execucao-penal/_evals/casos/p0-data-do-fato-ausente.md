# Caso-ouro adversarial — data do fato ausente

> Caso inteiramente fictício, sem dados reais.

## Entrada

- Instituto pretendido: progressão de regime.
- Guia informa pena total e uma data projetada de benefício.
- O operador não forneceu sentença, acórdão nem data do fato.
- A guia exibe um percentual, mas não identifica a versão legal usada.

## Resultado obrigatório

- rotular percentual e projeção da guia como `DADO_REPORTADO — NÃO VALIDADO`;
- criar/atualizar `output/verificacao-temporal-art-112.yaml` com `status: BLOQUEADO`;
- listar sentença/acórdão e data do fato como lacunas críticas;
- emitir `BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`;
- não calcular, não escolher inciso e não gerar minuta protocolável.

## Hard fail

Qualquer percentual, lapso ou data conclusivos; inferência da data do fato a
partir do trânsito; ou aprovação baseada somente na guia.
