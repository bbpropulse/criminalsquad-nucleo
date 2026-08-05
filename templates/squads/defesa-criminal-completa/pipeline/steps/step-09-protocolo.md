---
step: "09"
name: "Checklist de Protocolo"
type: agent
agent: protocolo
depends_on: step-08
---

# Step 09: Pablo Protocolo — Checklist de Protocolo + Versão Final

## Para o Pipeline Runner

Executar a geração do checklist de protocolo e da versão final pela persona **Pablo Protocolo** (`agents/protocolo.custom.md`).

O Pablo Protocolo consolida a peça aprovada na **versão final protocolável**, lavra o **manifesto do Citation Gate** que acompanha essa versão e gera o **checklist de protocolo** para os sistemas PJe / e-SAJ, garantindo que nada falte no momento de peticionar (tempestividade, documentos, assinatura, classificação).

> **Este é o step de ENTREGA — sem o manifesto o pipeline não fecha.** O hook `.claude/hooks/verifica-citacoes.mjs` (PostToolUse) bloqueia a gravação de `output/resposta-acusacao-final.md` — nome de peça (`resposta-acusacao`) e nome com `final` — **enquanto não existir, ao lado, `output/resposta-acusacao-final.md.citation-gate.json`**. O `output/checklist-protocolo.md` fica fora do gate (nome interno, `checklist`) e não leva manifesto.

## Inputs para este Step

- `output/resposta-acusacao-minuta.md` → peça aprovada (APPROVE no Step 07, validada no Step 08)
- `output/revisao-juridica.md` → confirmação do veredicto APPROVE **e a conferência de citações da Vera Veredito** (cada súmula/precedente × `output/pesquisa-juridica.md`): é dela que sai o `citations[]` do manifesto
- `output/pesquisa-juridica.md` → identificação completa de cada fonte, URL oficial (STJ/STF) e a data/hora em que foi consultada
- `output/caso.md` → processo, vara/comarca, prazo (CPP 396), anexos a juntar
- Best-practice de referência (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md`
- Contrato do manifesto (não duplicar): `scripts/CITATION-GATE.md` e `scripts/citation-gate-manifest.schema.json`

## Expected Outputs

- `output/resposta-acusacao-final.md` → versão final protocolável da resposta à acusação (texto definitivo, sem marcações de revisão)
- `output/resposta-acusacao-final.md.citation-gate.json` → manifesto do Citation Gate vinculado, pelo SHA-256, exatamente a essa versão da peça
- `output/checklist-protocolo.md` → checklist de protocolo (PJe / e-SAJ), contendo:
  - **Tempestividade:** prazo-fatal (CPP 396, 10 dias) vs. data de protocolo
  - **Sistema:** PJe ou e-SAJ (conforme tribunal) + classe/assunto/tipo de petição
  - **Documentos a anexar:** procuração, peça (PDF), substabelecimento (se houver), documentos de prova
  - **Assinatura:** assinatura digital (certificado ICP-Brasil) — verificar antes de protocolar
  - **Conferência final:** nº do processo, vara, partes, valor da causa (se aplicável)

## Ordem de gravação da entrega (o manifesto é o último ato)

Nesta ordem, sem inverter — o manifesto atesta o hash do arquivo **já gravado**:

**1. Reunir as citações conferidas.** Para cada súmula/tema/precedente/dispositivo que a peça final cita, extrair da conferência da Vera Veredito (`output/revisao-juridica.md`) e do registro da Júlia Jurisprudência (`output/pesquisa-juridica.md`):

- `title` — identificação completa, no mesmo formato em que a peça cita: `"{tribunal}, Súmula n. {nº}"`, `"{tribunal}, Tema {nº}"`, `"{tribunal}, {classe} {nº}/{UF}, {órgão julgador}"`;
- `status` — `verificada` quando alguém **abriu a fonte primária e conferiu o teor**; `acesso_falhou` quando a fonte não abriu (portal fora do ar, timeout, captcha, erro de rede);
- `source_url` — URL **HTTPS** da fonte oficial;
- `consulted_at` — data/hora ISO 8601 da consulta (`date -Iseconds`).

`acesso_falhou` é o valor honesto quando a fonte não abriu — e **obriga a tirar a citação do texto da peça**. Mantê-la citada com esse status bloqueia, e é para bloquear: seria uma peça a juízo apoiada em algo que ninguém leu. Peça com citação material precisa de **ao menos uma** citação `verificada`; nunca escrever `verificada` sem ter aberto a fonte.

**2. Gravar a peça final** em `output/resposta-acusacao-final.md` (texto definitivo, sem marcações de revisão e sem nenhum marcador de pendência — `[NÃO VERIFICADO]`, `[DIVERGENTE]`, `[CONFERIR]` — que o hook já barra antes mesmo de a peça chegar ao disco).

**3. Calcular o SHA-256 do arquivo gravado e escrever o manifesto** ao lado, conforme `scripts/citation-gate-manifest.schema.json`:

```sh
shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
```

```json
{
  "schema_version": "1",
  "kind": "criminalsquad.citation-gate-attestation",
  "artifact": "resposta-acusacao-final.md",
  "artifact_sha256": "SHA256_HEXADECIMAL_DO_ARQUIVO_GRAVADO",
  "gate_status": "aprovado",
  "verification_type": "material",
  "scope": "citacoes_materiais",
  "verified_by": "verificador-citacoes",
  "verified_at": "2026-07-26T18:00:00-03:00",
  "citations": [
    {
      "title": "identificação completa da norma ou julgado citado na peça",
      "status": "verificada",
      "source_url": "https://fonte-primaria.example/documento",
      "consulted_at": "2026-07-26T17:45:00-03:00"
    }
  ]
}
```

`verified_by` nomeia **quem fez a conferência material** (o revisor + o verificador de citações), não quem gravou o arquivo. Se a peça final não citar norma, súmula, tema ou precedente, use `"scope": "sem_citacoes_materiais"` com `"citations": []` — a sentinela recusa essa declaração se reconhecer citação material no texto. Não acrescente campo fora do schema (`additionalProperties: false`) e não escreva marcador de pendência dentro do manifesto: ele também é inspecionado.

**Qualquer edição posterior da peça invalida o SHA** — se o texto mudar, recalcular o hash e regravar o manifesto. Por isso o manifesto é o último ato do step, e nunca se grava o manifesto antes da peça.

**Não renomeie a peça para "minuta"/"rascunho" para escapar do gate.** A isenção de rascunho existe para o trabalho iterativo dos Steps 05–07; a entrega do Step 09 é peça final e passa pelo gate como peça final.

## Execution Mode

- **Modo:** Inline
- **Skills:** Nenhuma

## Quality Gate

Para encerrar o pipeline:
- [ ] `output/resposta-acusacao-final.md` existe e está sem marcações de revisão
- [ ] `output/resposta-acusacao-final.md.citation-gate.json` existe ao lado da peça
- [ ] A peça foi gravada **antes** do manifesto e o vínculo confere: o `shasum -a 256` da peça é igual ao `artifact_sha256` do manifesto (manifesto lavrado sobre versão anterior = SHA divergente = bloqueio)
- [ ] Cada item de `citations[]` tem `title`, `status` (`verificada` ou `acesso_falhou`), `source_url` HTTPS e `consulted_at`; nenhuma citação `acesso_falhou` continua no texto da peça; há ao menos uma `verificada` — ou, sem citação material, `scope: "sem_citacoes_materiais"` com `citations: []`
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` foi **executado** e saiu com exit 0 (rodar, não presumir)
- [ ] `output/checklist-protocolo.md` existe
- [ ] A tempestividade foi conferida (prazo CPP 396 vs. data de protocolo)
- [ ] O sistema (PJe / e-SAJ) e a classe/assunto da petição estão indicados
- [ ] A lista de documentos a anexar está completa
- [ ] O item de assinatura digital (ICP-Brasil) consta no checklist

Concluído este step, o pipeline está finalizado: a resposta à acusação está pronta para protocolo.

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
