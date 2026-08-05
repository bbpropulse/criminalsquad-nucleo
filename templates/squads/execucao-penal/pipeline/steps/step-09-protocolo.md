---
step: "09"
name: "Checklist de Protocolo"
type: agent
agent: protocolo
execution: inline
depends_on: step-08
---

# Step 09: Tadeu Trâmite — Checklist de Protocolo + Versão Final

## Para o Pipeline Runner

Executar a geração do checklist de protocolo e da versão final pela persona **Tadeu Trâmite** (`agents/protocolo.custom.md`), que **carrega a skill `agravo-em-execucao`** (`skills/agravo-em-execucao/SKILL.md`) para a orientação recursal.

O Tadeu Trâmite consolida a peça aprovada na **versão final protocolável** e gera o **checklist de protocolo** para os sistemas do Juízo da Execução (PJe / e-SAJ / SEEU), garantindo que nada falte ao peticionar (documentos da execução, assinatura, classificação), além da **orientação de agravo em execução** (art. 197 LEP) caso o instituto seja indeferido.

**Hard stop:** se a peça contiver art. 112, inciso, valor, lapso ou data de progressão, validar antes de qualquer arquivo final `output/verificacao-temporal-art-112.yaml` e a conferência do Step 07. O gate deve estar `REGRA_APROVADA_POR_HUMANO`, na data corrente e sem pendências. Caso contrário, gerar somente `output/bloqueio-protocolo.md` com **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**; é proibido gerar `peticao-execucao-final.md`.

## Inputs para este Step

- `output/peticao-execucao-minuta.md` → peça aprovada (APPROVE no Step 07, validada no Step 08)
- `output/revisao-juridica.md` → confirmação do veredicto APPROVE e do Citation Gate
- `output/verificacao-temporal-art-112.yaml` → obrigatório quando houver art. 112; conferir status, freshness e revisor
- `output/caso.md` → autos de execução, Vara/comarca, instituto, anexos a juntar
- Skill carregada: `skills/agravo-em-execucao/SKILL.md`
- Best-practices de referência (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md` e `recurso-criminal.md`

## Expected Outputs

- `output/peticao-execucao-final.md` → versão final protocolável da petição (texto definitivo, sem marcações de revisão)
- `output/peticao-execucao-final.md.citation-gate.json` → manifesto do Citation Gate, gravado **depois** da peça (ver seção abaixo)
- `output/checklist-protocolo.md` → checklist de protocolo, contendo:
  - **Sistema:** PJe / e-SAJ / SEEU (conforme tribunal) + classe/assunto (incidente de execução)
  - **Documentos a anexar:** procuração, peça (PDF), cálculo de liquidação atualizado, atestado de conduta carcerária, guia de recolhimento, folha de antecedentes
  - **Assinatura:** assinatura digital (certificado ICP-Brasil) — verificar antes de protocolar
  - **Conferência final:** nº dos autos de execução, Vara, partes, instituto
  - **Plano B — Agravo em Execução (art. 197 LEP):** se o Juízo indeferir, interpor agravo no **prazo de 5 dias** (Súm. 700/STF), peça **bipartida** (interposição à VEC + razões ao tribunal), com pedido de **retratação** (efeito regressivo, art. 589 CPP)

## Manifesto do Citation Gate — nesta ordem, sem exceção

O hook `.claude/hooks/verifica-citacoes.mjs` (PostToolUse) bloqueia `peticao-execucao-final.md` enquanto não existir, ao lado, `peticao-execucao-final.md.citation-gate.json` válido. Sem o manifesto o pipeline trava no último step e o profissional nunca recebe a entrega.

1. **Colher de `output/revisao-juridica.md`** cada citação material afirmada na peça: título completo, `status`, `source_url` HTTPS e `consulted_at` ISO 8601 com fuso. `verificada` só quando alguém abriu a fonte primária e conferiu o teor; fonte que não abriu (timeout, portal fora do ar, captcha) é `acesso_falhou` — e então **a citação sai do texto da peça**. Mantida no texto, o gate bloqueia, e é para bloquear.
2. **Gravar a peça** em `output/peticao-execucao-final.md`, texto definitivo, sem marcação de revisão nem marcador de pendência.
3. **Calcular o SHA-256 do arquivo já gravado** e só então escrever o manifesto:

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
  "verified_by": "revisor",
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

Qualquer edição posterior da peça invalida o SHA: regravar a peça, recalcular o hash, regravar o manifesto. **O manifesto é o último ato do step.** Não renomear a peça para "minuta"/"rascunho" para escapar do gate — a isenção de rascunho existe para o trabalho iterativo, não para a entrega — e não escrever `verificada` sem ter aberto a fonte.

## Execution Mode

- **Modo:** Inline
- **Skills:** agravo-em-execucao

## Quality Gate

Para encerrar o pipeline:
- [ ] `output/peticao-execucao-final.md` existe e está sem marcações de revisão
- [ ] `output/peticao-execucao-final.md.citation-gate.json` existe e seu `artifact_sha256` é igual à saída de `shasum -a 256` sobre a peça final já em disco — a peça foi gravada **antes** do manifesto
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` encerra sem bloqueio (exit 0)
- [ ] Se houver art. 112, o Temporal Gate está aprovado por humano, vigente e registrado no relatório do Step 07
- [ ] Se o gate falhou, apenas `output/bloqueio-protocolo.md` foi gerado e nenhum arquivo protocolável existe
- [ ] `output/checklist-protocolo.md` existe
- [ ] O sistema (PJe / e-SAJ / SEEU) e a classe/assunto estão indicados
- [ ] A lista de documentos da execução a anexar está completa (cálculo, atestado, guia)
- [ ] O item de assinatura digital (ICP-Brasil) consta no checklist
- [ ] A orientação de agravo em execução (art. 197 LEP, 5 dias — Súm. 700) consta para o caso de indeferimento

Concluído sem bloqueios, a peça está pronta **para revisão final do profissional e posterior protocolo humano**. O sistema não protocola automaticamente.

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
