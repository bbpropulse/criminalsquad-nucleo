---
step: "04"
name: "Requisitos do Instituto"
type: checkpoint
depends_on: step-03
---

# 🛑 Checkpoint: Requisitos do Instituto

## Para o Pipeline Runner

Apresentar os requisitos cruzando pesquisa e documentos. Quando houver art. 112, este é também o **checkpoint jurídico humano da regra temporal**: não basta “confirmar o cabimento”; o revisor deve se identificar e aprovar expressamente a versão, o alcance das decisões e a justificativa intertemporal.

## Formato de Apresentação ao Usuário

Ler `output/pesquisa-juridica.md`, `output/resumo-execucao.md` e, quando aplicável, `output/verificacao-temporal-art-112.yaml`. Se a verificação não for da data corrente ou possuir pendência crítica, mostrar apenas o estado `BLOQUEADO` e retornar ao Step 03. Caso contrário, apresentar:

```
🔍 Sílvia Súmula concluiu a pesquisa. Cabimento do [INSTITUTO] — requisitos a confirmar:

FRESHNESS GATE DO ART. 112
- Verificado em: [data/hora corrente]
- Versões oficiais comparadas: [URLs]
- Direito intertemporal: [justificativa]
- ADIs/decisões específicas e alcance: [processos]
- Regra candidata: [inciso/valor, sem aprovação ainda]
- Pendências: [nenhuma | lista → BLOQUEADO]

REQUISITO OBJETIVO
- Regra candidata e fonte oficial: [...]
- Base e data-base candidatas + documentos: [...]
- Memória de cálculo: [somente após aprovação humana]

REQUISITO SUBJETIVO (mérito carcerário)
- Atestado de conduta: [presente/ausente] — fonte: [...]
- Exame criminológico/requisito vigente: [redação legal + autoridade atual verificada]

PONTOS DE ATENÇÃO / TESES ACESSÓRIAS
- [teses candidatas e objeções, sem transportar solução de redação histórica]
- [marcações [NÃO VERIFICADO] pendentes da pesquisa, se houver]

---
Se houver art. 112: informe nome e OAB/UF ou cargo do revisor humano e confirme expressamente a regra temporal + justificativa. Sem identificação e justificativa, o caso permanece BLOQUEADO.

Depois, confirme o cabimento ou indique ajustes.
```

## Ação do Pipeline Runner após Decisão

1. Se houver art. 112, verificar que não há pendência e registrar no YAML `status: REGRA_APROVADA_POR_HUMANO`, `aprovado_em`, `revisor_humano` e `justificativa_aprovacao`
2. Registrar os requisitos confirmados, cada um com fundamento e documento
3. Salvar em `output/requisitos-instituto.md`
4. Avançar ao Step 05 somente se o gate for `REGRA_APROVADA_POR_HUMANO` ou `NAO_APLICAVEL` com justificativa

## Expected Outputs

- `output/requisitos-instituto.md` → requisitos confirmados pelo operador, cada um com fundamento (súmula/SV/tema/dispositivo da pesquisa) e o status do preenchimento
- `output/verificacao-temporal-art-112.yaml` → atualizado pelo revisor humano quando aplicável; nunca autoaprovado

## Formato de Salvamento

```markdown
# Requisitos Confirmados — [INSTITUTO]

## Requisito objetivo
- Inciso/fração: [...] — fundamento: [art./súmula + origem]
- Base de cálculo: [pena total / saldo] — [...]
- Lapso exigido × cumprido: [...] — preenchido: [sim/não]

## Regra temporal do art. 112
- Status: [REGRA_APROVADA_POR_HUMANO | NAO_APLICAVEL]
- Verificado/aprovado em: [...]
- Revisor humano: [nome + OAB/UF ou cargo]
- Versões, decisões e justificativa: [referência ao YAML]

## Requisito subjetivo
- Conduta carcerária: [atestado] — fundamento: [art. 112, §1º, LEP]
- Exame criminológico/requisito vigente: [fonte oficial e aplicação]

## Teses acessórias confirmadas
- [tese] — fundamento: [...]
```

## Quality Gate

Antes de avançar para o Step 05:
- [ ] `output/requisitos-instituto.md` existe
- [ ] O usuário confirmou explicitamente o cabimento do instituto
- [ ] Se houver art. 112, o gate foi verificado na data corrente e não possui pendência
- [ ] Se houver art. 112, o revisor humano está identificado e aprovou expressamente regra + justificativa; status é `REGRA_APROVADA_POR_HUMANO`
- [ ] Se não houver art. 112, `NAO_APLICAVEL` tem justificativa e não há comparação numérica com progressão
- [ ] O requisito objetivo, a base, a data-base e a memória estão fundamentados e documentados
- [ ] O requisito subjetivo (conduta) está indicado e fundamentado
- [ ] Cada requisito/tese tem fundamento jurídico vinculado (vindo da pesquisa)

Falha em qualquer item temporal: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; não criar `output/requisitos-instituto.md` como confirmado nem avançar.
