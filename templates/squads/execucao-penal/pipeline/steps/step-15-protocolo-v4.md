---
step: "15"
name: "Versão Final e Checklist"
type: agent
agent: protocolo
execution: inline
depends_on: step-14
---

# Step 15 — Versão final e checklist de protocolo

## Hard stop terminal

Exija `APROVAR VERSÃO FINAL`, quatro reviews `APPROVE`, sidecar válido em `--release`, Citation Gate limpo e, quando houver art. 112, regra aprovada e revalidada na data corrente. Falha gera apenas `output/bloqueio-protocolo.md`; é proibido gerar arquivo protocolável.

## Outputs

- `output/peticao-execucao-final.md` — cópia limpa da minuta aprovada, sem alteração material;
- `output/peticao-execucao-final.md.citation-gate.json` — manifesto do Citation Gate, gravado **depois** da peça;
- `output/checklist-protocolo.md` — sistema/classe, partes, autos, documentos, assinatura, prazo, comprovante e plano recursal condicionado;
- `output/entrega-juridica.json` — sidecar final, com revisão humana registrada.

## Manifesto do Citation Gate — nesta ordem, sem exceção

O hook `.claude/hooks/verifica-citacoes.mjs` (PostToolUse) bloqueia `peticao-execucao-final.md` enquanto não existir, ao lado, `peticao-execucao-final.md.citation-gate.json` válido. Sem o manifesto o pipeline não fecha no último step e o profissional nunca recebe a entrega.

1. **Colha do Step 13** (`output/revisao-citacoes/relatorio.md`) cada citação material afirmada na peça: título completo, `status`, `source_url` HTTPS e `consulted_at` ISO 8601 com fuso. `verificada` só quando alguém abriu a fonte primária e conferiu o teor; fonte que não abriu (timeout, portal fora do ar, captcha) é `acesso_falhou` — e então **a citação sai do texto da peça**. Mantida no texto, o gate bloqueia, e é para bloquear.
2. **Grave a peça** em `output/peticao-execucao-final.md`, texto definitivo, sem marcador de pendência.
3. **Calcule o SHA-256 do arquivo já gravado** e só então escreva o manifesto:

```sh
shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
```

```json
{
  "schema_version": "1",
  "kind": "criminalsquad.citation-gate-attestation",
  "artifact": "peticao-execucao-final.md",
  "artifact_sha256": "<hash do passo 3>",
  "gate_status": "aprovado",
  "verification_type": "material",
  "scope": "citacoes_materiais",
  "verified_by": "verificador-citacoes",
  "verified_at": "<ISO 8601 com fuso>",
  "citations": [
    {
      "title": "<identificação completa da norma, súmula, tema ou precedente>",
      "status": "verificada",
      "source_url": "https://<fonte primária consultada>",
      "consulted_at": "<ISO 8601 com fuso>"
    }
  ]
}
```

Nenhum campo além dos do schema (`scripts/citation-gate-manifest.schema.json`; doc completo em `scripts/CITATION-GATE.md`). Peça sem norma, súmula, tema ou precedente: `scope: "sem_citacoes_materiais"` e `citations: []` — declaração rejeitada se o texto trouxer citação material, e petição de execução quase sempre traz (o art. 112 da LEP já basta). Com `scope: "citacoes_materiais"`, ao menos uma citação `verificada`.

Qualquer edição posterior da peça invalida o SHA: regrave a peça, recalcule o hash, regrave o manifesto. **O manifesto é o último ato do step.**

Não renomeie a peça para "minuta"/"rascunho" para escapar do gate — a isenção de rascunho existe para o trabalho iterativo, não para a entrega — e não escreva `verificada` sem ter aberto a fonte.

## Quality Gate

- [ ] `output/peticao-execucao-final.md` existe, sem marcador de pendência, e foi gravado **antes** do manifesto;
- [ ] `output/peticao-execucao-final.md.citation-gate.json` existe e seu `artifact_sha256` é igual à saída de `shasum -a 256` sobre a peça final já em disco;
- [ ] cada citação do manifesto veio do relatório do Step 13, com `source_url` HTTPS e `consulted_at` preenchidos; nenhuma `acesso_falhou` segue citada no texto;
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` encerra sem bloqueio (exit 0);
- [ ] `output/checklist-protocolo.md` e `output/entrega-juridica.json` gerados.

Não envie, assine nem protocole. Qualquer ação externa exige novo checkpoint e autorização explícita do usuário.

Registre telemetria sem conteúdo do caso: skill, versão, duração, tokens, blockers, correções humanas e, se houver baseline informado, tempo comparável. Não grave nomes, fatos ou documentos em logs.

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
