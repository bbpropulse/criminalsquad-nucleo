---
step: "09"
name: "Checklist de Encaminhamento"
type: agent
agent: encaminhamento
execution: inline
depends_on: step-08
---

# Step 09: Edu Encaminhamento — Checklist + Versão Final

## Para o Pipeline Runner

Executar a geração do checklist de encaminhamento e da versão final pela persona **Edu Encaminhamento** (`agents/encaminhamento.custom.md`).

O Edu Encaminhamento consolida a peça aprovada na **versão final protocolável** e gera o **checklist de encaminhamento** ao destinatário correto do instituto (Ministério Público / juízo / autoridade policial) e à **audiência de homologação**, garantindo que nada falte no ato de encaminhar (destinatário, documentos, audiência, assinatura, prazos, consentimento informado). O **último ato** do step é gravar o manifesto do Citation Gate ao lado do acordo final — sem ele a entrega não fecha (o hook `verifica-citacoes` bloqueia a gravação).

## Context Loading

Load these files before executing:
- `output/acordo-minuta.md` — minuta aprovada (APPROVE no Step 07, validada no Step 08)
- `output/revisao-juridica.md` — confirmação do veredicto APPROVE **e a tabela do Citation Gate** (título, status, fonte, consulta de cada citação conferida) que alimenta o manifesto
- `output/instituto-e-termos.md` — instituto e destinatário
- `output/caso.md` — processo, órgão, fase, prazos, anexos a juntar
- Best-practice (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md`
- Formato do manifesto (não duplicar): `scripts/citation-gate-manifest.schema.json` e `scripts/CITATION-GATE.md`

## Instructions

### Process

1. Consolidar `output/acordo-minuta.md` na versão final limpa (sem marcações de revisão) em `output/acordo-final.md`.
2. Identificar o **destinatário e o rito de homologação** conforme o instituto (ANPP → MP + homologação judicial art. 28-A §4º; transação/sursis → juízo/JECRIM; colaboração → MP/autoridade policial + homologação sigilosa art. 4º §7º / art. 7º).
3. Montar o checklist acionável: destinatário, documentos a anexar, audiência de homologação a designar, assinatura digital (ICP-Brasil), consentimento informado do cliente, prazos/quinquênio e conferência de partes/processo.
4. Salvar `output/checklist-encaminhamento.md`.
5. **Colher as citações conferidas** na seção "Citation Gate" de `output/revisao-juridica.md`: para cada uma, título completo, `status` (`verificada` quando alguém abriu a fonte primária e conferiu o teor; `acesso_falhou` quando o portal não abriu — e então a citação **não pode** permanecer no texto do acordo), `source_url` HTTPS e `consulted_at`. Não promova nada a `verificada` por dedução: o que ninguém abriu é `acesso_falhou`, e sai da peça.
6. **Gravar o manifesto do Citation Gate — último ato do step.** Com `output/acordo-final.md` já gravado e sem nenhuma alteração pendente, calcular o hash do arquivo e escrever o manifesto ao lado, em `output/acordo-final.md.citation-gate.json`, conforme o formato abaixo:
   ```sh
   shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
   ```
   O `artifact_sha256` é o hash do **arquivo gravado**, não da minuta nem do texto em memória. Qualquer retoque posterior no acordo invalida o manifesto e obriga a recalcular o hash e regravá-lo. O `scope` é `citacoes_materiais` sempre que o acordo invocar norma, súmula, tema ou precedente — o que é a regra neste squad (art. 28-A do CPP; art. 76/89 da Lei 9.099; Lei 12.850). `sem_citacoes_materiais` com `citations: []` só quando o texto realmente não invoca nenhuma; a sentinela rejeita a declaração se reconhecer citação no corpo.
7. **Conferir que a entrega fecha**, antes de anunciar o encerramento:
   ```sh
   node .claude/hooks/verifica-citacoes.mjs --check "$PECA"; echo "exit=$?"
   ```
   `exit=0` libera a entrega para a revisão humana. `exit=2` é a sentinela dizendo o que falta (manifesto ausente, hash divergente, citação `acesso_falhou` ainda citada no texto) — corrija o que ela apontou. **Nunca** renomeie `acordo-final.md` para "minuta"/"rascunho" para escapar do gate: a isenção de rascunho existe para o trabalho iterativo, não para a entrega.

## Output Format

```
# Checklist de Encaminhamento — Negociação Penal
Instituto: [__]  |  Destinatário: [MP / juízo / autoridade policial]

## Destinatário e rito
- [ ] Peça dirigida a [__]; homologação: [__]

## Documentos a anexar
- [ ] Procuração
- [ ] Consentimento informado do cliente (confissão/delação)
- [ ] Certidão de antecedentes
- [ ] Comprovantes de capacidade econômica (ANPP/transação) / elementos de corroboração (colaboração)
- [ ] [outros conforme o instituto]

## Audiência e assinatura
- [ ] Audiência de homologação a designar
- [ ] Assinatura digital (certificado ICP-Brasil)

## Prazos e conferência
- [ ] Prazos/quinquênio conferidos
- [ ] Nº do processo, órgão e partes conferidos
```

E o manifesto do Citation Gate, gravado por último em `output/acordo-final.md.citation-gate.json`:

```json
{
  "schema_version": "1",
  "kind": "criminalsquad.citation-gate-attestation",
  "artifact": "acordo-final.md",
  "artifact_sha256": "[64 dígitos hexadecimais de shasum -a 256 do arquivo gravado]",
  "gate_status": "aprovado",
  "verification_type": "material",
  "scope": "citacoes_materiais",
  "verified_by": "revisor",
  "verified_at": "[AAAA-MM-DDTHH:MM:SS-03:00]",
  "citations": [
    {
      "title": "[identificação completa da norma, súmula, tema ou precedente]",
      "status": "verificada",
      "source_url": "https://[fonte primária oficial]",
      "consulted_at": "[AAAA-MM-DDTHH:MM:SS-03:00]"
    }
  ]
}
```

## Output Example

> Checklist de referência (qualidade esperada).

```
# Checklist de Encaminhamento — Negociação Penal
Instituto: ANPP (art. 28-A CPP)  |  Destinatário: Ministério Público

## Destinatário e rito
- [ ] Manifestação dirigida ao(à) Promotor(a) de Justiça (proposta privativa do
      MP — §3º); pedido subsidiário de remessa ao órgão superior (§14).
- [ ] Homologação judicial em audiência (§4º) — voluntariedade e legalidade.

## Documentos a anexar
- [ ] Procuração
- [ ] Consentimento informado do cliente quanto à confissão (impugnação ao art.
      18-F da Res. 289/2024 registrada)
- [ ] Certidão de antecedentes (primariedade e ausência de benefício no quinquênio)
- [ ] Comprovantes de capacidade econômica (prestação pecuniária / reparação)

## Audiência e assinatura
- [ ] Audiência de homologação a designar após a proposta do MP
- [ ] Assinatura digital (certificado ICP-Brasil) conferida

## Prazos e conferência
- [ ] Quinquênio do §2º III conferido (sem ANPP/transação/sursis nos últimos 5 anos)
- [ ] Nº do inquérito, promotoria e qualificação do investigado conferidos
```

Manifesto correspondente, gravado depois do acordo e conferido com `--check`
(`output/acordo-final.md.citation-gate.json`):

```json
{
  "schema_version": "1",
  "kind": "criminalsquad.citation-gate-attestation",
  "artifact": "acordo-final.md",
  "artifact_sha256": "9f2c4b7a1d8e5306af41c9b2d7e0835164ac9f2b3d8e7104a5c6b9d2e8f30714",
  "gate_status": "aprovado",
  "verification_type": "material",
  "scope": "citacoes_materiais",
  "verified_by": "revisor",
  "verified_at": "2026-07-14T16:40:00-03:00",
  "citations": [
    {
      "title": "Art. 28-A, §§1º, 2º III, 4º e 14, do Código de Processo Penal (redação da Lei 13.964/2019)",
      "status": "verificada",
      "source_url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm",
      "consulted_at": "2026-07-14T16:12:00-03:00"
    },
    {
      "title": "Súmula 444 do STJ",
      "status": "acesso_falhou",
      "source_url": "https://scon.stj.jus.br/SCON/",
      "consulted_at": "2026-07-14T16:25:00-03:00"
    }
  ]
}
```

> Leitura do exemplo: a Súmula 444/STJ foi apontada `[NÃO VERIFICADO]` no Step 03,
> o portal não abriu na reconferência e por isso ela **saiu do texto** do acordo —
> o registro da tentativa fica no manifesto como `acesso_falhou`. O art. 28-A, que
> sustenta o pedido, foi aberto no Planalto e conferido: é ele que dá ao manifesto
> a citação `verificada` sem a qual a peça não passa.

## Veto Conditions

Reject and redo if ANY are true:
1. `output/acordo-final.md` contém marcações de revisão/comentários, ou o destinatário do checklist está errado para o instituto (ex.: ANPP dirigido ao juízo).
2. Falta o item de consentimento informado (confissão/delação) ou o de assinatura digital (ICP-Brasil) no checklist.
3. `output/acordo-final.md.citation-gate.json` não existe, ou o `artifact_sha256` não é o hash do acordo já gravado — manifesto escrito antes da peça, ou peça retocada depois do manifesto.
4. Alguma citação está `verificada` sem que a fonte primária tenha sido aberta, ou está `acesso_falhou` e continua citada no acordo; ou o artefato foi renomeado para "minuta"/"rascunho" para escapar do gate.

## Quality Criteria

- [ ] `output/acordo-final.md` existe e está sem marcações de revisão
- [ ] `output/checklist-encaminhamento.md` existe
- [ ] Destinatário e rito de homologação corretos para o instituto
- [ ] Lista de documentos a anexar completa (inclui consentimento informado)
- [ ] Item de assinatura digital (ICP-Brasil) consta no checklist
- [ ] Prazos/quinquênio e partes/processo conferidos
- [ ] `output/acordo-final.md.citation-gate.json` existe ao lado do acordo e o `artifact_sha256` bate com `shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru` — prova de que o acordo foi gravado ANTES do manifesto e não mudou depois
- [ ] Cada citação do manifesto traz título, `status` (`verificada`/`acesso_falhou`), `source_url` HTTPS e `consulted_at`, transcritos da seção Citation Gate do Step 07; nenhuma `acesso_falhou` remanesce citada no acordo
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` retorna `exit=0`

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
