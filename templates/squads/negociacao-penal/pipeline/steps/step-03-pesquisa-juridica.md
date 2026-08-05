---
step: "03"
name: "Pesquisa Jurídica"
type: agent
agent: pesquisador
execution: subagent
model_tier: powerful
depends_on: step-02
---

# Step 03: Júlia Jurisprudência — Pesquisa Jurídica

## Para o Pipeline Runner

Executar a pesquisa de requisitos legais e precedentes pela persona **Júlia Jurisprudência** (`agents/pesquisador.custom.md`), que se apoia no subagente nativo `.claude/agents/jurisprudencia-stj-stf.md`.

Este step usa o **modelo mais potente (`model_tier: powerful`)** pela complexidade do raciocínio jurídico (cada instituto tem requisitos próprios e cumulativos).

### Estratégia HÍBRIDA obrigatória (acervo local ANTES da web)

1. **PRIMEIRO**, consultar o acervo local: ler `acervo/_index.yaml` e fazer Grep por `tema`/`tags` pertinentes ao instituto candidato do `output/caso.md`. Ler os documentos relevantes em `acervo/jurisprudencia/`, `doutrina/`, `legislacao/`, `teses-modelos/`.
2. **DEPOIS**, somente para o que faltar, buscar nas fontes oficiais online (STJ, STF, CNMP, Planalto) com `web_search` e `web_fetch`.

Ver a best-practice (não duplicar conteúdo): `_criminalsquad/core/best-practices/pesquisa-jurisprudencial.md`.

### Citation Gate (obrigatório)

Marcar **`[NÃO VERIFICADO]`** toda citação (lei, súmula, tese, acórdão, resolução) não confirmada no acervo ou em fonte oficial, e **`[DIVERGENTE]`** quando a fonte não bate com o que se quer afirmar. Na dúvida, `[NÃO VERIFICADO]`. Ver `_criminalsquad/core/best-practices/verificacao-citacoes.md`. Atenção à vigência: art. 28-A CPP + Res. CNMP 289/2024; art. 76/61 + SV 35 Lei 9.099; art. 89 + art. 77 CP + Súmulas 337/STJ, 723/STF, 243/STJ, 696/STF; Lei 12.850 (redação do Pacote Anticrime) + regra de corroboração art. 4º §16.

## Inputs para este Step

- `output/caso.md` → instituto candidato, tipo penal, pena cominada
- `output/resumo-autos.md` → natureza, força da prova e pontos que demandam fundamento
- `acervo/_index.yaml` → índice do acervo local (consultar PRIMEIRO)
- Best-practices: `_criminalsquad/core/best-practices/pesquisa-jurisprudencial.md` e `verificacao-citacoes.md`

## Expected Outputs

- `output/pesquisa-juridica.md` → fontes jurídicas organizadas por **requisito/condição do instituto candidato**, contendo para cada item:
  - Requisito / condição (ex.: ANPP — pena mínima < 4 anos calculada pelo §1º; ausência de óbices do §2º; sursis — pena mínima ≤ 1 ano com Súmula 723/STF; colaboração — eficácia art. 4º I-V e corroboração §16)
  - Dispositivo / súmula / precedente (identificação completa: tribunal, nº, órgão, artigo)
  - Origem: **acervo local** (caminho do arquivo) ou **web** (URL oficial)
  - Status de verificação: verificado ou `[NÃO VERIFICADO]`/`[DIVERGENTE]`
  - Aplicação ao caso concreto (como sustenta o cabimento/condição)

## Output Format

```
# Pesquisa Jurídica — Negociação Penal
Instituto candidato: [ANPP / transação / sursis / colaboração]

## Requisito: [nome do requisito/condição]
- Fundamento: [dispositivo/súmula/precedente — identificação completa]
- Origem: [acervo: caminho | web: URL oficial]
- Verificação: [verificado | [NÃO VERIFICADO] | [DIVERGENTE]]
- Aplicação ao caso: [como sustenta o cabimento/condição]

(repetir por requisito e por condição negociável)
```

## Output Example

> Pesquisa de referência (qualidade esperada).

```
# Pesquisa Jurídica — Negociação Penal
Instituto candidato: ANPP (art. 28-A CPP)

## Requisito: pena mínima inferior a 4 anos (cálculo do §1º)
- Fundamento: CPP art. 28-A, caput e §1º (aumentos na fração mínima, diminuições
  na máxima).
- Origem: acervo: acervo/legislacao/cpp-28a.md
- Verificação: verificado
- Aplicação ao caso: furto simples (CP 155) tem pena mínima de 1 ano; com o
  privilégio (§2º) o piso cai ainda mais — cabimento confortável.

## Requisito: ausência de óbices (§2º)
- Fundamento: CPP art. 28-A, §2º, I a IV; inquéritos sem trânsito não configuram
  habitualidade (Súmula 444/STJ, por analogia).
- Origem: web: https://www.stj.jus.br (Súmula 444) [NÃO VERIFICADO]
- Verificação: [NÃO VERIFICADO] — confirmar redação/aplicabilidade antes da peça
- Aplicação ao caso: réu primário, sem benefício negocial no quinquênio; afastar
  uso de IPs em curso como "conduta habitual".

## Condição: prestação pecuniária proporcional (inciso IV)
- Fundamento: CPP art. 28-A, IV, c/c CP art. 45.
- Origem: acervo: acervo/legislacao/cpp-28a.md
- Verificação: verificado
- Aplicação ao caso: dimensionar conforme capacidade econômica; cabe parcelamento.
```

## Veto Conditions

Reject and redo if ANY are true:
1. A web foi consultada sem antes esgotar o acervo local (origem não registrada em cada item).
2. Alguma citação não confirmada ficou **sem** o marcador `[NÃO VERIFICADO]`/`[DIVERGENTE]`.

## Quality Criteria

- [ ] `output/pesquisa-juridica.md` existe
- [ ] O acervo local foi consultado ANTES da web (origem indicada em cada item)
- [ ] Cada fonte tem identificação completa (tribunal, nº, órgão/artigo)
- [ ] Citações não confirmadas estão marcadas `[NÃO VERIFICADO]`/`[DIVERGENTE]`
- [ ] Há ao menos uma fonte por requisito/óbice do instituto candidato
- [ ] URLs (quando da web) apontam para fontes oficiais (STJ/STF/CNMP/Planalto)
