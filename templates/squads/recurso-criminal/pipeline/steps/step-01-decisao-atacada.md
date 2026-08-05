---
step: "01"
name: "Decisão Atacada"
type: checkpoint
description: O advogado anexa a decisão adversa e informa os dados que definem o cabimento e a tempestividade.
---

# 🛑 Checkpoint: Decisão Atacada

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar a decisão adversa e os dados mínimos que o Classificador precisa para indicar a peça cabível e o prazo. **Não avançar enquanto a data da intimação não estiver registrada** — sem ela é impossível conferir a tempestividade.

## Solicitação ao Usuário

⚖️ Vamos identificar e redigir o recurso correto contra a decisão adversa.

Para começar, preciso que você informe:

1. **A decisão atacada** — cole o inteiro teor (ou anexe o arquivo) da sentença, acórdão ou decisão interlocutória que se quer recorrer.
2. **Natureza da decisão** — é sentença condenatória/absolutória? acórdão de tribunal? decisão interlocutória? decisão do juiz da execução? Já transitou em julgado?
3. **Foi proferida no JECRIM (Lei 9.099/95)?** — sim ou não (muda o prazo e a forma da peça).
4. **Se for acórdão: a votação foi unânime ou por maioria (2x1)?** — e, se por maioria, o voto vencido foi favorável ao réu?
5. **Posição do cliente** — réu/recorrente ou parte que precisa apresentar contrarrazões?
6. **Data da intimação/publicação** da decisão (para contar o prazo).

## Ação do Pipeline Runner

1. Receber e registrar os dados fornecidos.
2. Conferir em fonte oficial os dispositivos e precedentes que a decisão invoca (ver "Manifesto do Citation Gate", abaixo) — é a primeira leitura crítica da decisão atacada, não burocracia.
3. Salvar a decisão e os metadados em `output/decisao.md` no formato abaixo.
4. Calcular o SHA-256 do arquivo gravado e escrever `output/decisao.md.citation-gate.json` — **nesta ordem**, e só então o registro está de pé.
5. Avançar para o Step 02 (Classificador — Cabimento).

## Formato de Salvamento (`output/decisao.md`)

```markdown
# Decisão Atacada

**Natureza:** [sentença condenatória | sentença absolutória | acórdão | decisão interlocutória | decisão da execução]
**Órgão prolator:** [juízo singular | Tribunal do Júri | TJ/TRF | juiz da execução]
**JECRIM (Lei 9.099):** [sim | não]
**Transitou em julgado:** [sim | não]
**Votação (se acórdão):** [unânime | maioria 2x1 — voto vencido favorável ao réu? sim/não]
**Posição do cliente:** [recorrente/réu | recorrido (contrarrazões)]
**Data da intimação/publicação:** [DD/MM/AAAA]
**Recebido em:** YYYY-MM-DD

## Inteiro teor da decisão
[colar/transcrever o conteúdo da decisão atacada]
```

## Manifesto do Citation Gate (obrigatório — `decisao.md` é nome de peça)

O hook `verifica-citacoes` (PostToolUse) trata `output/decisao.md` como artefato final e **bloqueia a gravação com `exit=2`** enquanto não existir, ao lado, `output/decisao.md.citation-gate.json` atestando o SHA-256 **do arquivo exato**. Sem ele o pipeline trava já no primeiro step: a decisão nem chega à Cida Cabimento.

O que se atesta aqui é **o que o Pipeline Runner conferiu**, não o que o juízo escreveu. A decisão é documento de terceiro e seu inteiro teor é transcrito **sem cortes** — é dele que sai a dialeticidade do Step 05. Daí as regras próprias deste step:

- Entram no manifesto os dispositivos e precedentes **invocados pela decisão que foram abertos em fonte oficial** (Planalto para lei; STJ/STF para súmula, tema e acórdão), com `status: "verificada"`, `source_url` HTTPS e `consulted_at`. Conferir é abrir a fonte: marcar `verificada` "porque é artigo conhecido" é exatamente a mentira que o gate existe para impedir.
- **Não use `acesso_falhou` aqui.** Esse status obriga a retirar a citação do texto, e mutilar a decisão atacada destruiria o insumo do recurso. A citação que não abriu simplesmente **não entra no manifesto** e segue para os Steps 02/04 como ponto a conferir — súmula superada ou dispositivo revogado no fundamento da decisão é tese recursal, não detalhe.
- **Não anote a transcrição** com `[A CONFERIR]`, `[NÃO VERIFICADO]` ou similares: marcador de pendência bloqueia a gravação antes mesmo do disco (PreToolUse). Pendência de conferência é anotada na conversa e repassada ao Step 02, nunca dentro de `decisao.md`.

Ordem obrigatória, depois de gravar `output/decisao.md`:

```sh
shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru          # macOS/Linux

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
certutil -hashfile squads\recurso-criminal\output\decisao.md SHA256   # Windows
```

Com o hash em mãos, gravar `output/decisao.md.citation-gate.json` conforme `scripts/citation-gate-manifest.schema.json` (doc completo em `scripts/CITATION-GATE.md`), sem nenhum campo fora do schema:

```json
{
  "schema_version": "1",
  "kind": "criminalsquad.citation-gate-attestation",
  "artifact": "decisao.md",
  "artifact_sha256": "<hash hexadecimal do arquivo gravado>",
  "gate_status": "aprovado",
  "verification_type": "material",
  "scope": "citacoes_materiais",
  "verified_by": "pipeline-runner",
  "verified_at": "<ISO 8601 com fuso>",
  "citations": [
    {
      "title": "<dispositivo ou julgado invocado pela decisão — ex.: art. <nº> do CPP; Súmula n. <nº> do STJ>",
      "status": "verificada",
      "source_url": "https://<fonte-oficial>/<documento>",
      "consulted_at": "<ISO 8601 com fuso>"
    }
  ]
}
```

`scope: "citacoes_materiais"` é o caso normal — decisão penal sem dispositivo citado praticamente não existe. Só declare `scope: "sem_citacoes_materiais"` com `citations: []` se a decisão realmente não invocar norma, súmula, tema ou precedente algum: o hook reconhece citação material no texto e rejeita a declaração de ausência.

Conferir com o próprio hook antes de avançar:

```sh
node .claude/hooks/verifica-citacoes.mjs --check "$PECA"
```

Sem saída e `exit=0` → registro liberado. Se o advogado corrigir a transcrição ou completar a data depois, **o SHA muda**: regrave o arquivo e, na sequência, o manifesto.

## Quality Gate

Antes de avançar para o Step 02, verificar:
- [ ] `output/decisao.md` existe
- [ ] O inteiro teor (ou resumo substancial) da decisão está registrado
- [ ] A natureza da decisão está identificada
- [ ] O campo JECRIM (sim/não) está preenchido
- [ ] Se for acórdão, a votação (unânime/maioria) está registrada
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** a data da intimação/publicação está preenchida. Sem ela, NÃO avançar — solicitar a data ao usuário.
- [ ] **MANIFESTO DO CITATION GATE (crítico — sem ele a decisão não fica gravada):** `output/decisao.md.citation-gate.json` existe e foi gravado **depois** de `output/decisao.md`, com `artifact_sha256` igual ao hash do arquivo final (conferido por `shasum -a 256` / `certutil`; hash estimado ou de versão anterior reprova)
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` roda **sem bloqueio (exit 0)**
- [ ] Cada citação do manifesto tem `status: "verificada"`, `source_url` HTTPS e `consulted_at` — o que não foi aberto ficou de fora do manifesto e foi repassado ao Step 02 como ponto a conferir

Se qualquer verificação falhar, repetir a solicitação do dado faltante antes de prosseguir.

## Opções Especiais

- **"não sei a data da intimação"** → orientar o usuário a localizar no andamento processual / DJe antes de prosseguir, pois é o dado mais crítico para o recurso.
- **Decisão com vício de integração (omissão/contradição/obscuridade)** → sinalizar ao Classificador que pode ser caso de Embargos de Declaração antes do recurso principal. **A sede depende do grau:** contra decisão/sentença de **1º grau** é o **CPP 382** (2 dias); o **CPP 619 é para embargos contra ACÓRDÃO**. Invocar o 619 numa decisão de primeiro grau é erro de via — medido no smoke-run de 28/07/2026, onde este step apontava o 619 para uma pronúncia.
- **Excesso de linguagem NÃO é vício de integração** — é nulidade, e a via é o recurso próprio da decisão, não os embargos.
