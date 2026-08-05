---
step: "05"
name: "Alegações da 1ª Fase"
type: agent
agent: redator-1fase
depends_on: step-04
---

# Step 05: Redator — Alegações da 1ª Fase

## Para o Pipeline Runner
Executar o agente `redator-1fase` (Rafael Pronúncia). Carrega as skills `juri-pronuncia-defesa` e `memoriais`; segue `peticao-criminal`. É o ponto de retorno do loop de revisão.

## Inputs
- `output/teses-1fase.md`, `output/resumo-autos.md`, `output/pesquisa.md`
- No retorno do loop (REJECT no Step 09): `output/revisao.md` — a lista `fixes` e a conferência de citações do revisor

## Expected Outputs
- `output/alegacoes-1fase.md` — alegações finais da 1ª fase (petição única), só com as teses aprovadas, na ordem da eventualidade, cada uma com fundamento citado.
- `output/alegacoes-1fase.md.citation-gate.json` — manifesto do Citation Gate do arquivo acima, conforme `scripts/citation-gate-manifest.schema.json`.

## Entrega: a peça e, logo depois, o manifesto

`alegacoes-1fase.md` é peça final. O hook `.claude/hooks/verifica-citacoes.mjs` (PostToolUse) **bloqueia a gravação** (exit 2) enquanto não existir, ao lado, `alegacoes-1fase.md.citation-gate.json` válido. Sem o manifesto o pipeline trava aqui e o advogado não recebe a peça. Na ordem:

1. **Reunir as citações conferidas.** De `output/pesquisa.md` (tabela de precedentes já submetida ao gate `verificacao-citacoes`) e, nos ciclos de retorno, da conferência de citações de `output/revisao.md`. Para cada súmula, tema, precedente ou dispositivo que a peça cita: `title` (identificação completa — tribunal, classe, nº, relator, órgão, data; ou o dispositivo com o diploma), `status` (`verificada` ou `acesso_falhou`), `source_url` (HTTPS da fonte primária) e `consulted_at` (ISO 8601).
2. **Gravar a peça** em `output/alegacoes-1fase.md`, sem nenhum marcador de pendência (`[NÃO VERIFICADO]`, `[DIVERGENTE]`, `[CONFERIR]`) — esses o hook barra **antes** da gravação. Fonte que não abriu (portal fora do ar, timeout, captcha) é `acesso_falhou`, e então **a citação sai do texto**: mantê-la citada com esse status bloqueia.
3. **Calcular o SHA-256 do arquivo gravado** — `shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru` — e gravar o manifesto com esse hash:

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
   ```json
   {
     "schema_version": "1",
     "kind": "criminalsquad.citation-gate-attestation",
     "artifact": "alegacoes-1fase.md",
     "artifact_sha256": "<hash do passo 3>",
     "gate_status": "aprovado",
     "verification_type": "material",
     "scope": "citacoes_materiais",
     "verified_by": "verificador-citacoes",
     "verified_at": "<ISO 8601 com fuso>",
     "citations": [
       {
         "title": "Súmula 713 do STF",
         "status": "verificada",
         "source_url": "https://portal.stf.jus.br/...",
         "consulted_at": "<ISO 8601 com fuso>"
       }
     ]
   }
   ```
   `verified_by` nomeia quem conferiu materialmente, não quem redigiu. Se a peça não trouxer nenhuma citação material — raro nesta fase, em que impronúncia, absolvição sumária e desclassificação andam com os arts. 414-419 do CPP —, use `"scope": "sem_citacoes_materiais"` e `"citations": []`.

O manifesto é o **último ato** do step: qualquer retoque posterior na peça muda o SHA e obriga a regravá-lo. No retorno do Step 09 (REJECT) vale o mesmo ciclo — aplicar os `fixes`, regravar a peça, recalcular o hash, regravar o manifesto. **Não** renomeie a peça para "minuta"/"rascunho" para escapar do gate: a isenção de rascunho existe para o trabalho iterativo, não para a entrega.

## Quality Gate
- [ ] Apenas teses aprovadas no Step 04
- [ ] Cada tese com fundamento de output/pesquisa.md
- [ ] Estrutura e linguagem conforme peticao-criminal
- [ ] Nenhum marcador de pendência no texto da peça (`[NÃO VERIFICADO]`/`[DIVERGENTE]`/`[CONFERIR]`)
- [ ] `output/alegacoes-1fase.md.citation-gate.json` existe, foi gravado **depois** da peça e seu `artifact_sha256` é o `shasum -a 256` do arquivo final; toda citação que ficou no texto consta em `citations[]`, com ao menos uma `verificada`
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` sai com código 0 (executar; exit 2 é entrega travada, e a correção é o step — nunca o nome do arquivo e nunca o hook)

## Limpeza da peça — o que NÃO pode ir para o protocolo

O arquivo final é o que o profissional envia ao juízo ou ao MP. Tudo que serviu ao
pipeline e não à peça sai **antes** de gravar:

- [ ] **Front-matter YAML removido** (`---\ncitation_gate: ...\n---`) — ele é controle interno, não parte da petição.
- [ ] **Nenhum jargão de pipeline no corpo:** `STATUS:`, `Step NN`, nome de squad, nome de agente, caminho de skill, `run_id`, `vN`.
- [ ] **Histórico de versões, notas de estratégia e comentários de revisão** removidos.
- [ ] **Bloco de metadado sobre uso de IA** fora do corpo da peça — se o escritório exigir essa menção, ela é decisão do profissional sobre onde e como consta, não texto que o pipeline injeta.
- [ ] **Fecho completo:** local e data, assinatura, nome do(a) advogado(a) e **número de OAB**.
- [ ] **Endereçamento** correto para a via (juízo × MP × delegacia) e número dos autos.
- [ ] **Rol de testemunhas** ao final, quando a peça o comportar.

> ⚠️ **A peça não pode afirmar anexo que não existe.** Se o checklist de encaminhamento
> registra um documento como pendência bloqueante, a peça **não** diz que ele "segue anexo".
> Contradição entre a peça e o checklist do mesmo run é defeito de entrega — foi medido:
> a peça afirmava consentimento anexo enquanto o próprio run o declarava não colhido.

> ⚠️ **Campo em branco é melhor que campo inventado.** Faltando qualificação, número dos
> autos ou data, deixe o marcador visível (`____`) e liste no checklist. Preencher de
> memória é o defeito que nenhum gate posterior pega.
