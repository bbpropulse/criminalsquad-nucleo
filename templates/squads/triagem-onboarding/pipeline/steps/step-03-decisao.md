---
step: "03"
name: "Decisão: Aceitar/Declinar"
type: checkpoint
depends_on: step-02
outputFile: squads/triagem-onboarding/output/decisao.md
---

# 🛑 Checkpoint: Decisão — Aceitar / Declinar

## Para o Pipeline Runner

Apresentar ao advogado a recomendação da triagem (`output/triagem.md`) e aguardar a **decisão sobre aceitar ou declinar** o caso. Este checkpoint é uma **bifurcação**: a resposta do advogado define se o pipeline continua (aceitar) ou encerra com carta de declínio (declinar/encaminhar).

## Formato de Apresentação ao Usuário

Ler `output/triagem.md` e apresentar no formato:

```
🗂️ Tânia Triagem concluiu a triagem do caso.

⚖️ **CONFLITO DE INTERESSES (EAOAB 17):** [livre / impedido — justificativa]
⏳ **PRESCRIÇÃO (CP 109):** [situação do prazo]
📊 **VIABILIDADE:** êxito [alta/média/baixa] | prazo [curto/médio/longo] | custo [baixo/médio/alto] | risco [...]

💡 **RECOMENDAÇÃO DA TRIAGEM:** [aceitar / declinar / encaminhar] — [fundamento em 1-2 linhas]

---
Qual a sua decisão sobre este caso?

1. ✅ ACEITAR → seguir para onboarding + proposta de honorários
2. ❌ DECLINAR → encerrar com carta de declínio respeitosa
3. ↪️ ENCAMINHAR → encerrar indicando colega/Defensoria (variação do declínio)

Lembrete ético: a decisão é sua. Em caso de impedimento (EAOAB 17) ou prescrição, o declínio é o caminho indicado. Nunca prometemos resultado ao cliente.
```

## Ação do Pipeline Runner após Decisão

1. Registrar a decisão do advogado em `output/decisao.md` (formato abaixo)

### Se opção 1 (ACEITAR):
- Avançar para o Step 04 (Olívia Onboarding — Onboarding do Cliente)

### Se opção 2 (DECLINAR) ou opção 3 (ENCAMINHAR):
- Gerar `output/carta-declinio.md` — carta de declínio **respeitosa**, que:
  - Agradece a confiança e a procura ao escritório
  - Comunica que o escritório não poderá assumir o caso (sem expor juízo de mérito que prejudique o cliente)
  - Quando aplicável, alerta de forma genérica sobre a existência de prazos a observar (sem orientar tecnicamente o caso) e sugere buscar outro advogado ou a Defensoria Pública
  - Mantém o sigilo do que foi informado (EAOAB / LGPD)
- **ENCERRAR o pipeline** — NÃO executar os Steps 04 a 07.

## Expected Outputs

- `output/decisao.md` → decisão registrada (aceitar / declinar / encaminhar) com justificativa do advogado
- `output/decisao.md.citation-gate.json` → manifesto do Citation Gate da decisão (obrigatório nos **três** caminhos — ver seção abaixo)
- `output/carta-declinio.md` → **somente** no caminho declinar/encaminhar: carta de declínio respeitosa pronta para envio

## Formato de Salvamento (decisao.md)

```markdown
# Decisão — Triagem de Novo Cliente

**Cliente:** [nome]
**Decisão:** [ACEITAR / DECLINAR / ENCAMINHAR]
**Data:** YYYY-MM-DD
**Justificativa do advogado:** [por que aceitou/declinou/encaminhou]
**Próximo passo:** [onboarding (Step 04) | pipeline encerrado com carta de declínio]
```

## Gravação de `decisao.md` + manifesto do Citation Gate

`output/decisao.md` é **artefato final** para a sentinela `.claude/hooks/verifica-citacoes.mjs` (o nome cai no padrão de peça jurídica). A gravação em `squads/triagem-onboarding/output/` é **bloqueada — exit 2** enquanto não existir, ao lado, `output/decisao.md.citation-gate.json`. Conferido com o próprio hook: sem o manifesto, este step trava em toda execução e o advogado não recebe a decisão registrada; os demais artefatos deste squad (`intake.md`, `triagem.md`, `carta-declinio.md`, `onboarding.md`, `proposta-honorarios.md`, `comunicacao.md`) passam livres.

O manifesto é o **último ato** do step, **nesta ordem**:

1. **Recolher as citações conferidas.** A fonte é a triagem do Step 02 (`output/triagem.md`): os dispositivos que a Tânia efetivamente **abriu** para checar conflito de interesses (EAOAB 17) e prescrição (CP 109). De cada um: `title` (identificação completa), `status` (`verificada` — alguém abriu a fonte primária e conferiu o teor; ou `acesso_falhou` — o portal não abriu), `source_url` (HTTPS de fonte oficial, ex.: Planalto) e `consulted_at` (ISO 8601 com fuso).
2. **Gravar `output/decisao.md`** no formato acima.
3. **Calcular o SHA-256 do arquivo já gravado** — `shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru`.

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
4. **Escrever `output/decisao.md.citation-gate.json`** conforme `scripts/citation-gate-manifest.schema.json` (doc: `scripts/CITATION-GATE.md`).

**Caso normal — justificativa sem dispositivo citado** (o advogado decidiu por área de atuação, agenda, viabilidade comercial):

```json
{
  "schema_version": "1",
  "kind": "criminalsquad.citation-gate-attestation",
  "artifact": "decisao.md",
  "artifact_sha256": "SHA256_HEXADECIMAL_DE_decisao.md",
  "gate_status": "aprovado",
  "verification_type": "material",
  "scope": "sem_citacoes_materiais",
  "verified_by": "pipeline-runner",
  "verified_at": "2026-07-26T18:00:00-03:00",
  "citations": []
}
```

**Caso com dispositivo na justificativa** (declínio por impedimento ou por prescrição, tipicamente): mantém-se todo o resto do manifesto e trocam-se dois campos — `scope` e um item em `citations` por dispositivo conferido:

```json
  "scope": "citacoes_materiais",
  "citations": [
    {
      "title": "art. 109, IV, do Código Penal (Decreto-Lei 2.848/1940)",
      "status": "verificada",
      "source_url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
      "consulted_at": "2026-07-26T17:45:00-03:00"
    }
  ]
```

Quatro coisas conferidas contra o hook, que reprovam este step:

- **Escolher o `scope` errado.** Com "art. 109, IV, do CP" no texto e `scope: "sem_citacoes_materiais"`, o gate bloqueia ("o artefato aparenta conter citação material"). Com dispositivo citado é preciso **ao menos uma** citação `verificada`.
- **Marcar `verificada` sem ter aberto a fonte.** Portal fora do ar, timeout, captcha: o valor honesto é `acesso_falhou` — e então **o dispositivo sai do texto** da decisão (reescreva a justificativa sem ele, mantendo `source_url` e `consulted_at` como registro da tentativa). Manter a citação no texto com `acesso_falhou` bloqueia.
- **Editar `decisao.md` depois do manifesto.** Qualquer alteração muda o SHA e o gate bloqueia ("artifact_sha256 não corresponde ao artefato atual") — recalcule e regrave o manifesto.
- **Renomear a decisão para "minuta"/"rascunho"** para escapar do gate: a isenção de rascunho existe para o trabalho iterativo, não para o registro que o advogado assina.

Conferência determinística antes de fechar o step (silêncio = aprovado; `CITATION GATE — BLOQUEADO` reprova):

```sh
node .claude/hooks/verifica-citacoes.mjs --check "$PECA"
```

## Quality Gate

- [ ] O usuário tomou uma decisão explícita (1, 2 ou 3)
- [ ] `output/decisao.md` existe e registra a decisão e a justificativa
- [ ] `output/decisao.md.citation-gate.json` existe e foi escrito **depois** de `output/decisao.md` — o `artifact_sha256` é o `shasum -a 256` do arquivo já gravado, na sua última versão
- [ ] O manifesto traz `schema_version: "1"`, `kind: "criminalsquad.citation-gate-attestation"`, `artifact: "decisao.md"`, `gate_status: "aprovado"`, `verification_type: "material"`, `verified_by` e `verified_at` preenchidos
- [ ] O `scope` corresponde ao texto da decisão: sem dispositivo citado → `sem_citacoes_materiais` com `citations: []`; com dispositivo → `citacoes_materiais` com ao menos uma citação `verificada`, e nenhuma `acesso_falhou` remanescente no texto
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` sai sem mensagem de bloqueio (exit 0)
- [ ] Se ACEITAR: o pipeline segue para o Step 04
- [ ] Se DECLINAR/ENCAMINHAR: `output/carta-declinio.md` existe, é respeitosa, preserva o sigilo e o pipeline é encerrado (Steps 04-07 não executados)
