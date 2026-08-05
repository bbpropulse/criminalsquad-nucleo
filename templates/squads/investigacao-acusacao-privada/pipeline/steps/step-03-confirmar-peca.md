---
step: "03"
name: "Confirmar Peça"
type: checkpoint
depends_on: step-02
---

# 🛑 Checkpoint: Confirmar Peça

## Para o Pipeline Runner

Apresentar ao advogado a peça indicada pela Cida Cabimento e o prazo decadencial calculado, e aguardar confirmação antes de acionar a pesquisa e a redação.

## Formato de Apresentação ao Usuário

Ler `output/cabimento.md` e apresentar no formato:

```
🧭 Cida Cabimento analisou os fatos e o tipo penal.

ESPÉCIE DE AÇÃO: [pública incondicionada | pública condicionada à representação | privada | privada subsidiária]
PEÇA CABÍVEL: [Oferecimento de Representação | Requerimento de Instauração de Investigação | Queixa-Crime | Retratação/Renúncia da Representação] ([fundamento legal])
ENDEREÇAMENTO: [Delegado de Polícia / MP — "Excelentíssimo" | Juiz (Vara Criminal ou JECRIM)]
DECADÊNCIA: prazo de 6 meses — termo inicial [DD/MM/AAAA] → data-limite [DD/MM/AAAA]
SITUAÇÃO DO PRAZO: [✅ dentro do prazo | ⚠️ ATENÇÃO: prazo vencido — decadência consumada]

[Se houver concurso de pessoas: alerta de INDIVISIBILIDADE — processar todos ou ninguém (CPP 48)]

Confirma esta peça? (responda "sim" para seguir, ou indique outra peça)
```

Exemplo: "Queixa-Crime (CPP, art. 41 + art. 44), endereçada ao Juízo da Vara Criminal; prazo decadencial de 6 meses contado do conhecimento da autoria (CPP, art. 38)."

## Ação do Pipeline Runner após Confirmação

1. Registrar a peça confirmada (e eventuais ajustes do advogado).
2. Atualizar `output/cabimento.md` com os campos `peca_confirmada` e `confirmado_em`.
3. Avançar para o Step 04 (Pesquisadora — Precedentes).

## Quality Gate

- [ ] A peça a redigir está definida e registrada
- [ ] **VERIFICAÇÃO DE DECADÊNCIA (crítico):** o advogado foi alertado sobre o prazo de 6 meses e a data-limite antes de confirmar. Se a data-limite já passou (decadência consumada), exigir confirmação explícita de que deseja prosseguir mesmo assim, ciente da extinção da punibilidade (CP art. 107, IV).

## Opções Especiais

- **"outra peça"** → registrar a peça escolhida pelo advogado e a justificativa; seguir com a peça indicada por ele.
- **"autoria ainda desconhecida"** → confirmar o Requerimento de Instauração de Investigação (apurar materialidade e autoria) em vez da queixa-crime.
- **"a vítima quer desistir"** → confirmar a Retratação/Renúncia da Representação; conferir o momento (antes do oferecimento da denúncia; Maria da Penha, antes do recebimento — Lei 11.340 art. 16).
- **"há mais de um ofensor"** → na queixa-crime, reforçar a INDIVISIBILIDADE (CPP art. 48): a queixa deve incluir todos os coautores/partícipes conhecidos.
