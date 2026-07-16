---
step: "02"
name: "Resumo dos Autos"
type: agent
agent: leitor
execution: subagent
model_tier: powerful
depends_on: step-01
---

# Step 02: Lucas Leitura — Resumo dos Autos

## Para o Pipeline Runner

Executar a leitura e o resumo dos autos pela persona **Lucas Leitura** (`agents/leitor.custom.md`), que se apoia nos subagentes nativos `.claude/agents/resumo-processo.md` e `.claude/agents/analise-denuncia.md`.

O Lucas Leitura deve ler a denúncia e o inquérito/PIC indicados em `output/caso.md` e produzir um resumo estruturado **voltado para a negociação** — fatos imputados, capitulação e pena cominada, presença de violência/grave ameaça, concurso de agentes, força/fragilidade do lastro probatório e eventual causa de arquivamento. NÃO triar o instituto nem redigir a minuta; apenas mapear os autos.

## Inputs para este Step

- `output/caso.md` → tipo penal, pena cominada, instituto candidato e caminhos dos anexos (denúncia/IP/PIC)
- Denúncia e IP/PIC nos caminhos indicados (tipicamente sob `acervo/casos/`)
- `_criminalsquad/_memory/company.md` → contexto do escritório
- Best-practice de referência (não duplicar conteúdo): `_criminalsquad/core/best-practices/etica-oab-sigilo.md` (sigilo na manipulação dos autos)

## Expected Outputs

- `output/resumo-autos.md` → resumo estruturado dos autos para a negociação, contendo:
  - Fatos imputados (narrativa da denúncia)
  - Capitulação jurídica, dispositivos e **pena cominada (mínima/máxima)**
  - **Violência ou grave ameaça à pessoa** (sim/não — decisivo para o ANPP)
  - **Concurso de agentes** (relevante para colaboração premiada)
  - Lastro probatório do IP/PIC e sua **força ou fragilidade** (custo-benefício acordo × mérito)
  - Eventual causa de arquivamento ou tese absolutória aparente
  - Antecedentes/primariedade que constem dos autos

## Output Format

```
# Resumo dos Autos — Negociação Penal

## Fatos imputados
[narrativa objetiva da denúncia]

## Capitulação e pena
- Tipo: [crime + dispositivo]; pena mínima [__] / máxima [__]
- Causas de aumento/diminuição aparentes: [__]

## Natureza
- Violência/grave ameaça à pessoa: [sim/não]
- Concurso de agentes: [sim/não]

## Lastro probatório
- Provas que sustentam a acusação: [__]
- Força/fragilidade: [forte/média/frágil — por quê]

## Arquivamento / mérito mais favorável?
- [atipicidade / prescrição / ausência de justa causa / nulidade aparente — ou "não identificado"]

## Antecedentes nos autos
- [primário/reincidente; benefício negocial anterior se constar]
```

## Output Example

> Resumo de referência (qualidade esperada).

```
# Resumo dos Autos — Negociação Penal

## Fatos imputados
Denúncia imputa a João da Silva o furto de um celular avaliado em R$ 900, em
estabelecimento comercial, mediante destreza, sem violência ou grave ameaça.

## Capitulação e pena
- Tipo: furto simples — CP art. 155, caput; pena mínima 1 ano / máxima 4 anos.
- Causas de aumento/diminuição aparentes: tentativa não configurada; possível
  aplicação do furto privilegiado (§2º), réu primário e coisa de pequeno valor.

## Natureza
- Violência/grave ameaça à pessoa: não.
- Concurso de agentes: não (réu único).

## Lastro probatório
- Provas que sustentam a acusação: auto de prisão em flagrante, depoimento do
  segurança, imagens de CFTV.
- Força/fragilidade: média — o reconhecimento decorre de CFTV, sem perícia das
  imagens; cadeia de custódia da gravação não documentada.

## Arquivamento / mérito mais favorável?
- Possível tese de furto privilegiado/insignificância a comparar com o acordo;
  não há causa clara de arquivamento.

## Antecedentes nos autos
- Réu primário; sem benefício negocial anterior registrado nos autos.
```

## Veto Conditions

Reject and redo if ANY are true:
1. O resumo inventa fatos, provas, antecedentes ou testemunhas que não constam dos autos.
2. Falta a indicação de violência/grave ameaça e da pena cominada (dados decisivos para a triagem do instituto).

## Quality Criteria

- [ ] `output/resumo-autos.md` existe
- [ ] Fatos imputados, capitulação e pena cominada (mínima/máxima) descritos
- [ ] Violência/grave ameaça e concurso de agentes indicados
- [ ] Força/fragilidade do lastro probatório avaliada (insumo do custo-benefício)
- [ ] Eventual causa de arquivamento/mérito mais favorável sinalizada
- [ ] Nenhum dado sigiloso do cliente exposto fora de `output/` interno (etica-oab-sigilo)
