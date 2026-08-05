---
step: "03"
name: "Pesquisa Jurídica"
type: agent
agent: pesquisador
execution: subagent
model_tier: powerful
depends_on: step-02
---

# Step 03: Sílvia Súmula — Pesquisa Jurídica

## Para o Pipeline Runner

Executar a pesquisa de súmulas, súmulas vinculantes e temas pela persona **Sílvia Súmula** (`agents/pesquisador.custom.md`), que se apoia no subagente nativo `.claude/agents/jurisprudencia-stj-stf.md`.

Este step usa o **modelo mais potente (`model_tier: powerful`)** pela complexidade de vigência, eficácia, alcance e direito intertemporal das Leis 14.843/2024, 15.358/2026 e 15.402/2026.

### Estratégia HÍBRIDA obrigatória (acervo local ANTES da web)

1. **PRIMEIRO**, consultar o acervo local: ler `acervo/_index.yaml` e fazer Grep por `tema`/`tags` pertinentes ao instituto e aos requisitos do `output/resumo-execucao.md`. Ler os documentos relevantes em `acervo/jurisprudencia/`, `acervo/doutrina/`, `acervo/legislacao/`, `acervo/teses-modelos/`.
2. **DEPOIS**, somente para o que faltar, buscar nas fontes oficiais online (STJ, STF, DJEN) com `web_search` e `web_fetch`.

### Citation Gate na origem (obrigatório)

Marcar **`[NÃO VERIFICADO]`** toda súmula/SV/tema/dispositivo não confirmado no acervo ou em fonte oficial, e **`[DIVERGENTE]`** quando a fonte não bate com o que se pretende citar. Na dúvida, `[NÃO VERIFICADO]`. Ver `_criminalsquad/core/best-practices/verificacao-citacoes.md` e `_criminalsquad/core/best-practices/pesquisa-jurisprudencial.md`.

### Freshness Gate do art. 112 (bloqueante)

Se o caso tocar progressão ou usar o art. 112:

1. ler `acervo/legislacao/matriz-temporal-art-112-lep.md`;
2. reconsultar **no mesmo dia** a LEP consolidada, as publicações originais e os processos oficiais de controle concentrado;
3. separar vigência formal, eficácia geral, decisão específica e direito intertemporal;
4. produzir `output/verificacao-temporal-art-112.yaml` com `status: BLOQUEADO` e regras candidatas;
5. não concluir percentual nem alterar o status para aprovado — isso exige o checkpoint e revisor humano do Step 04.

Decisão em outra execução penal não tem alcance geral por presunção. ADI pendente não suspende a lei automaticamente.

## Inputs para este Step

- `output/resumo-execucao.md` → requisitos do instituto que demandam fundamento
- `output/caso.md` → instituto pretendido e classificação
- `acervo/_index.yaml` → índice do acervo local (consultar PRIMEIRO)
- `acervo/legislacao/matriz-temporal-art-112-lep.md` → matriz obrigatória quando houver art. 112
- Best-practices: `_criminalsquad/core/best-practices/pesquisa-jurisprudencial.md` e `verificacao-citacoes.md`

## Expected Outputs

- `output/pesquisa-juridica.md` → fontes jurídicas organizadas por requisito do instituto, contendo para cada item:
  - Requisito / fundamento (ex: percentual do art. 112 LEP; SV 26/Súm. 439 para exame criminológico; Súm. 534/441/535 para falta grave; Súm. 491 per saltum; SV 56 falta de vaga; Súm. 715 soma na unificação; Súmulas 40 e 520 saída temporária; Súm. 631 indulto)
  - Súmula / SV / tema / dispositivo (com identificação completa: tribunal, nº, órgão)
  - Origem: **acervo local** (caminho do arquivo) ou **web** (URL oficial)
  - Status de verificação: confirmado, ou `[NÃO VERIFICADO]` / `[DIVERGENTE]`
  - Aplicação ao caso concreto (como sustenta o requisito frente ao resumo da execução)
- `output/verificacao-temporal-art-112.yaml` → quando aplicável, no formato mínimo:
  ```yaml
  status: BLOQUEADO
  verificado_em: "YYYY-MM-DDTHH:MM:SS-03:00"
  data_dos_fatos: []
  fontes_oficiais: []
  versoes_comparadas: []
  efeito_intertemporal: "INDETERMINADO"
  adis_consultadas: []
  decisoes_especificas: []
  alcance_confirmado: []
  regra_candidata: ""
  justificativa: ""
  pendencias: []
  revisor_humano: PENDENTE
  ```

## Execution Mode

- **Modo:** Subagente
- **Modelo:** powerful
- **Skills permitidas:** web_search, web_fetch
- **Apoio:** subagente nativo `jurisprudencia-stj-stf`

## Quality Gate

Antes de avançar para o Step 04:
- [ ] `output/pesquisa-juridica.md` existe
- [ ] O acervo local foi consultado ANTES da web (origem indicada em cada item)
- [ ] Cada fonte tem identificação completa (tribunal, nº, órgão) e status de verificação
- [ ] Toda citação não confirmada está marcada `[NÃO VERIFICADO]`/`[DIVERGENTE]`
- [ ] Quando houver art. 112, a matriz foi lida e as fontes oficiais foram reconsultadas na data corrente
- [ ] `output/verificacao-temporal-art-112.yaml` existe com versões, regra intertemporal, ADIs, decisões/alcance e `status: BLOQUEADO`
- [ ] Nenhuma suspensão individual foi generalizada e nenhuma ADI pendente foi tratada como suspensão automática
- [ ] A redação vigente do art. 112 e o status das autoridades foram conferidos (Leis 14.843/2024, 15.358/2026 e 15.402/2026)
- [ ] Há ao menos uma fonte por requisito (objetivo e subjetivo) do instituto

Se qualquer verificação falhar, refazer/completar a pesquisa. Sem contrato temporal válido, emitir **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`** e não avançar para confirmação numérica.
