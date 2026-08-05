---
step: "05"
name: "Redação da Peça"
type: agent
agent: redator
depends_on: step-04
---

# Step 05: Quim Queixa — Redação da Peça

## Para o Pipeline Runner

Executar o Redator (Quim Queixa). Ele deve **carregar a skill correspondente à peça confirmada** e redigir a peça completa da fase pré-processual/ação penal privada, no padrão de petição única da skill.

## Carregamento Condicional da Skill (obrigatório)

Conforme a peça confirmada em `output/cabimento.md`, o Quim CARREGA exatamente uma destas skills antes de redigir:

| Peça confirmada | Skill a carregar |
|---|---|
| Oferecimento de Representação | `skills/representacao` |
| Requerimento de Instauração de Investigação | `skills/requerimento-investigacao` |
| Queixa-Crime | `skills/queixa-crime` |
| Retratação / Renúncia da Representação | `skills/retratacao-representacao` |

## Inputs para este Step

- `output/cabimento.md` → espécie de ação, peça confirmada, fundamento, endereçamento e prazo decadencial
- `output/fatos.md` → relato, tipo penal, provas e qualificação das partes (a narrativa deve refletir os fatos)
- `output/precedentes.md` → precedentes e roteiro de citação para a fundamentação
- Best-practice `peticao-criminal` → estrutura e padrões da peça penal de 1º grau
- Best-practice `revisao-juridica` e `etica-oab-sigilo` → padrão de qualidade e dever de sigilo

## Expected Outputs

- `output/peca.md` → peça completa no padrão da skill carregada (endereçamento → preâmbulo → Dos Fatos → Do Direito → Dos Pedidos → fechamento → rol de testemunhas quando cabível)
- `output/peca.md.citation-gate.json` → manifesto do Citation Gate, gravado **depois** da peça, atestando o SHA-256 do arquivo exato e as citações conferidas (ver seção própria abaixo)

## Citation Gate (obrigatório após a redação)

Após gravar `output/peca.md`, o Pipeline Runner executa o **Citation Gate** (Passo 4.5 do runner) antes de avançar ao checkpoint:

1. Acionar o subagente `verificador-citacoes` (read-only, contexto fresco) passando `output/peca.md` + `output/precedentes.md`. Ele devolve, por citação: VERIFICADA / DIVERGENTE / NÃO ENCONTRADA.
2. Toda citação DIVERGENTE/NÃO ENCONTRADA é marcada na peça com `[DIVERGENTE]`/`[NÃO VERIFICADO]` (ver best-practice `verificacao-citacoes`). Citações vindas do Step 04 marcadas `[NÃO VERIFICADO]` só perdem a marca após conferência da fonte.
3. **Loop gerador→verificador (teto 3):** se houver pendências, devolver ao Quim Queixa apenas as citações problemáticas para correção/remoção e reverificar. Pare em APROVADO; no teto, escalar ao usuário. O hook `verifica-citacoes` bloqueia a gravação final enquanto restar qualquer marcador.

## Manifesto do Citation Gate (último ato do step — sem ele a peça não fecha)

O nome `peca.md` dispara o Citation Gate: o hook `.claude/hooks/verifica-citacoes.mjs` (PostToolUse) **bloqueia** `output/peca.md` enquanto não existir, ao lado, `output/peca.md.citation-gate.json` amarrado ao SHA-256 do arquivo exato. Sem este manifesto o pipeline trava aqui, sempre, e o advogado nunca recebe a peça. Renomear a peça para "minuta"/"rascunho" não é saída: a isenção de rascunho existe para o trabalho iterativo, não para a entrega.

Ordem obrigatória — o manifesto é o **último** ato, depois do Citation Gate aprovado:

1. **Gravar `output/peca.md`** já sem nenhum marcador de pendência (o hook barra `[NÃO VERIFICADO]`/`[DIVERGENTE]` antes mesmo de a peça chegar ao disco).
2. **Calcular o hash do arquivo gravado:**
   ```sh
   shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
   ```
3. **Gravar o manifesto** conforme `scripts/citation-gate-manifest.schema.json` (doc completo: `scripts/CITATION-GATE.md`):
   ```json
   {
     "schema_version": "1",
     "kind": "criminalsquad.citation-gate-attestation",
     "artifact": "peca.md",
     "artifact_sha256": "{os 64 hex devolvidos pelo shasum acima}",
     "gate_status": "aprovado",
     "verification_type": "material",
     "scope": "citacoes_materiais",
     "verified_by": "verificador-citacoes",
     "verified_at": "2026-07-26T15:40:00-03:00",
     "citations": [
       {
         "title": "Súmula 714 do STF",
         "status": "verificada",
         "source_url": "https://{URL da fonte primária aberta pelo verificador}",
         "consulted_at": "2026-07-26T15:20:00-03:00"
       }
     ]
   }
   ```

Regras que valem tanto quanto o formato:

- `citations[]` traz **apenas o que o `verificador-citacoes` conferiu** no Citation Gate acima (e que a Vera Veredito reconfere no Step 07): `title` com identificação completa da súmula/precedente/dispositivo, `status`, `source_url` **HTTPS** da fonte primária e `consulted_at` da consulta. Citação que não passou pelo verificador não entra no manifesto — nem na peça.
- `status: "verificada"` só quando alguém **abriu a fonte e conferiu o teor**. Portal do STJ/STF fora do ar, timeout, captcha: o valor honesto é `"acesso_falhou"` — e então **a citação sai da peça**; mantê-la no texto com esse status bloqueia, e é isso mesmo. Peça com citação material precisa de ao menos uma `verificada`.
- Peça que não cita norma, súmula, tema nem precedente (hipótese estreita — retratação/renúncia puramente factual): `scope: "sem_citacoes_materiais"` e `citations: []`. Se o texto trouxer citação material, a sentinela rejeita essa declaração.
- **Qualquer edição posterior da peça invalida o SHA.** No loop de revisão (Step 07 REJECT → Step 05), depois de aplicar os `fixes` e regravar `output/peca.md`, **recalcular o hash e regravar o manifesto**: manifesto com hash velho bloqueia igual a manifesto ausente.

Conferência determinística antes de avançar ao Step 06:

```sh
node .claude/hooks/verifica-citacoes.mjs --check "$PECA"
```

Saída limpa (exit 0) = gate fechado. `exit=2` diz a razão exata (manifesto ausente, hash divergente, campo inválido, marcador remanescente, citação afirmada na peça e pendente noutro arquivo do run) — corrija o manifesto ou a peça, **nunca o nome do arquivo e nunca o hook**.

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** a skill da peça (carregada conforme tabela acima)

## Quality Gate

Antes de avançar para o Step 06, verificar:
- [ ] `output/peca.md` existe
- [ ] A skill correta da peça foi carregada e a estrutura segue o modelo dela
- [ ] **Endereçamento correto:** delegado/MP com "Excelentíssimo" (Lei 12.830/2013) na representação e no requerimento; **juiz** na queixa-crime; delegado/MP/juiz na retratação. Nunca "Ao Juízo" para delegado/MP.
- [ ] **Verbo e nomenclatura das partes corretos:** OFERECER/representado (representação); APRESENTAR/requerido (requerimento); OFERECER/querelante × querelado (queixa); APRESENTAR/representado (retratação).
- [ ] **Adequação típica** observa a exposição do fato criminoso com todas as circunstâncias + capitulação (na queixa, CPP art. 41).
- [ ] **Se QUEIXA-CRIME:** querelante qualificado (não "já qualificado"); **procuração com PODERES ESPECIAIS** mencionada no preâmbulo (CPP art. 44 — nome do querelante + menção ao fato); pedidos incluem recebimento + citação + testemunhas + procedência/condenação + indenização (CPP art. 387, IV); **rol de testemunhas após a assinatura**; respeito à INDIVISIBILIDADE (todos os ofensores — CPP art. 48).
- [ ] **Se RETRATAÇÃO/RENÚNCIA:** distinção correta (renúncia = não oferecida; retratação = já oferecida); momento (antes do oferecimento da denúncia; Maria da Penha, antes do recebimento — Lei 11.340 art. 16); pedido de acolhimento + arquivamento; **SEM rol de testemunhas**.
- [ ] Os precedentes do Step 04 foram incorporados à fundamentação (Do Direito).
- [ ] **VERIFICAÇÃO DE DECADÊNCIA (crítico):** o tópico "Do Direito" afirma a TEMPESTIVIDADE — peça oferecida no prazo de 6 meses contado do conhecimento da autoria (CP art. 103 / CPP art. 38), ou do esgotamento do prazo do MP na subsidiária. Se o prazo estiver vencido, isso é sinalizado em destaque (risco de decadência).
- [ ] **MANIFESTO DO CITATION GATE (crítico — sem ele o step não fecha):** `output/peca.md.citation-gate.json` existe ao lado da peça, foi gravado **depois** dela, e `artifact_sha256` é o hash do arquivo final — conferir rodando `shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru` e comparando com o campo. Após qualquer correção na peça (inclusive vinda do Step 06 ou do REJECT do Step 07), recalcular e regravar.
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` sai sem bloqueio (exit 0). Se der `exit=2`, corrigir o que a mensagem apontar — cada item de `citations[]` veio do `verificador-citacoes`, com `source_url` HTTPS e `status` honesto (`acesso_falhou` ⇒ a citação saiu do texto da peça).

Se qualquer verificação falhar, solicitar que o Quim Queixa corrija o item antes de prosseguir.

## Nota Especial

O Quim deve auto-verificar contra o **checklist final da skill da peça** antes de entregar. Se concluir que há itens a corrigir, deve iterar autonomamente antes de declarar a task concluída. O Pipeline Runner aguarda a entrega final, não o primeiro rascunho. A peça da queixa é a única dirigida ao juiz e a única que exige procuração com poderes especiais (CPP art. 44) — não esquecer.
