---
step: "05"
name: "Redação do Recurso"
type: agent
agent: redator
depends_on: step-04
---

# Step 05: Rafael Recurso — Redação da Peça Bipartida

## Para o Pipeline Runner

Executar o Redator (Rafael Recurso). Ele deve **carregar a skill correspondente à peça confirmada** e redigir a peça completa: **interposição** (dirigida ao juízo *a quo*) **+ razões** (dirigidas ao tribunal *ad quem*). No JECRIM, redigir peça única (interposição com razões).

## Carregamento Condicional da Skill (obrigatório)

Conforme a peça confirmada em `output/cabimento.md`, o Rafael CARREGA exatamente uma destas skills antes de redigir:

| Peça confirmada | Skill a carregar |
|---|---|
| Apelação | `skills/apelacao` |
| Recurso em Sentido Estrito (RESE) | `skills/rese` |
| Embargos de Declaração | `skills/embargos-de-declaracao` |
| Embargos Infringentes e de Nulidade | `skills/embargos-infringentes` |
| Agravo em Execução | `skills/agravo-em-execucao` |
| Revisão Criminal | `skills/revisao-criminal` |
| Contrarrazões de Apelação | `skills/contrarrazoes-apelacao` |
| Contrarrazões de RESE | `skills/contrarrazoes-rese` |
| Contrarrazões de Agravo em Execução | `skills/contrarrazoes-agravo` |

## Inputs para este Step

- `output/cabimento.md` → peça confirmada, fundamento, prazo, forma (bipartida/única)
- `output/decisao.md` → decisão atacada (a impugnação deve atacar seus fundamentos — dialeticidade)
- `output/precedentes.md` → precedentes e roteiro de citação para as razões
- Best-practice `recurso-criminal` → estrutura da peça bipartida e princípios
- Best-practice `revisao-juridica` e `etica-oab-sigilo` → padrão de qualidade e dever de sigilo

## Expected Outputs

- `output/recurso.md` → peça completa: PARTE 1 (interposição, juízo a quo) + PARTE 2 (razões, tribunal). No JECRIM, peça única.
- `output/recurso.md.citation-gate.json` → manifesto do Citation Gate da peça gravada (ver seção própria abaixo). **Sem ele a peça não fica gravada** e o pipeline não chega ao Step 06.

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** a skill da peça (carregada conforme tabela acima)

## Quality Gate

Antes de avançar para o Step 06, verificar:
- [ ] `output/recurso.md` existe
- [ ] A skill correta da peça foi carregada e a estrutura segue o modelo dela
- [ ] A peça é BIPARTIDA — interposição (juízo a quo) E razões (tribunal) em seções separadas (ou peça única, se JECRIM)
- [ ] As razões atacam especificamente os fundamentos da decisão (dialeticidade)
- [ ] Quando houver efeito regressivo (RESE/agravo), a interposição pede a retratação (CPP 589)
- [ ] As teses estão escalonadas (principal → subsidiárias) pelo princípio da eventualidade
- [ ] Os precedentes do Step 04 foram citados nas razões
- [ ] **VERIFICAÇÃO DE TEMPESTIVIDADE (crítico):** a interposição registra a data da intimação e afirma a tempestividade (dentro do prazo legal). Se o prazo estiver vencido, isso é sinalizado em destaque.
- [ ] **MANIFESTO DO CITATION GATE (crítico — sem ele a peça não fica gravada):** `output/recurso.md.citation-gate.json` existe e foi gravado **depois** de `output/recurso.md`, com `artifact_sha256` igual ao hash do arquivo final (conferir com `shasum -a 256` / `certutil`; hash estimado ou herdado de versão anterior reprova)
- [ ] `node .claude/hooks/verifica-citacoes.mjs --check "$PECA"` roda **sem bloqueio (exit 0)** — se bloquear, a peça não avança para o Step 06
- [ ] Toda citação que permaneceu nas razões consta do manifesto como `verificada`, com `source_url` HTTPS e `consulted_at` preenchidos; nenhuma citação marcada `acesso_falhou` sobrou no texto da peça

Se qualquer verificação falhar, solicitar que o Rafael Recurso corrija o item antes de prosseguir.

## Citation Gate (na redação)

- As citações vindas de `output/precedentes.md` que estiverem marcadas com `[NÃO VERIFICADO]` / `[DIVERGENTE]` **não** entram nas razões como fundamento — devem ser confirmadas (e a marcação removida) ou substituídas/removidas antes de citar.
- Nenhuma súmula/precedente é citado "de memória": tudo deriva da pesquisa do Step 04. O hook `verifica-citacoes` bloqueia a gravação final enquanto restar qualquer marcador pendente na peça.

## Manifesto do Citation Gate (último ato do step — sem ele a peça não fica gravada)

`recurso.md` é nome de peça: o hook `verifica-citacoes` (PostToolUse) **bloqueia a gravação com `exit=2`** enquanto não existir, ao lado, `output/recurso.md.citation-gate.json` atestando o SHA-256 **do arquivo exato**. Como o hash só existe depois da gravação, a ordem abaixo não é sugestão — invertê-la trava o step, e o advogado nunca recebe a peça.

1. **Reunir as citações conferidas.** Saem de `output/precedentes.md` — apenas as entradas **limpas** (sem `[NÃO VERIFICADO]` / `[DIVERGENTE]`), que é o que a Júlia Jurisprudência confirmou em fonte idônea no Step 04 —, mais os dispositivos legais invocados nas razões. Para cada uma: identificação completa (tribunal, classe, número, relator e data; ou súmula/tema; ou o dispositivo com a lei), `source_url` **HTTPS** da fonte oficial que foi aberta e `consulted_at` em ISO 8601 com fuso.
   - `status: "verificada"` só para quem **abriu a fonte e conferiu o teor**. Repetir a citação porque "estava na tabela do Step 04" não é conferência.
   - `status: "acesso_falhou"` quando o portal não abriu (timeout, indisponibilidade, captcha) — e então **a citação sai das razões**. Mantê-la no texto com esse status bloqueia, e é isso mesmo: razão recursal apoiada em julgado que ninguém leu é exatamente o que gera sanção.
   - **Toda citação que permanece nas razões precisa constar do manifesto como `verificada`.** Se `output/precedentes.md` marcou a mesma súmula/REsp como pendente e a peça a afirma sem atestação, o hook bloqueia por contradição do próprio run.
2. **Gravar `output/recurso.md`** — a peça bipartida completa, conforme os itens acima.
3. **Calcular o SHA-256 do arquivo gravado** (do arquivo, nunca "de cabeça"):
   ```sh
   shasum -a 256 "$PECA"   # $PECA = caminho REAL da peça gravada (com {run_id}/vN), não o caminho cru          # macOS/Linux

> **O caminho é o REAL, não o canônico.** O runner injeta `{run_id}/vN/` em todo `outputFile` (Output Path Transformation, `runner.pipeline.md`). Rodar `shasum` no caminho cru devolve `exit=1` — arquivo inexistente — e o manifesto nunca é gravado: o pipeline não fecha. Use o caminho em que você acabou de gravar a peça, e grave o manifesto **ao lado dela**.
   certutil -hashfile squads\recurso-criminal\output\recurso.md SHA256   # Windows
   ```
4. **Gravar `output/recurso.md.citation-gate.json`** conforme `scripts/citation-gate-manifest.schema.json` (doc completo em `scripts/CITATION-GATE.md`), sem nenhum campo fora do schema:
   ```json
   {
     "schema_version": "1",
     "kind": "criminalsquad.citation-gate-attestation",
     "artifact": "recurso.md",
     "artifact_sha256": "<hash hexadecimal calculado no passo 3>",
     "gate_status": "aprovado",
     "verification_type": "material",
     "scope": "citacoes_materiais",
     "verified_by": "pipeline-runner",
     "verified_at": "<ISO 8601 com fuso>",
     "citations": [
       {
         "title": "<identificação completa — ex.: Súmula n. <nº> do STJ; ou REsp n. <nº>/<UF>, Rel. Min. <nome>, j. <DD/MM/AAAA>; ou art. <nº> do CPP>",
         "status": "verificada",
         "source_url": "https://<fonte-oficial>/<documento>",
         "consulted_at": "<ISO 8601 com fuso>"
       }
     ]
   }
   ```
   - `verified_by` identifica quem conferiu e quem gravou — veredito sem dono não é auditável.
   - `scope: "citacoes_materiais"` com `citations` não vazio é o caso normal deste squad: razões sem súmula, tema, precedente ou dispositivo praticamente não existem. `scope: "sem_citacoes_materiais"` com `citations: []` só se a peça, conferida, realmente não invocar nenhum — o hook reconhece citação material no texto e rejeita a declaração de ausência.
5. **Conferir com o próprio hook** antes de declarar o step concluído:
   ```sh
   node .claude/hooks/verifica-citacoes.mjs --check "$PECA"
   ```
   Sem saída e `exit=0` → gravação liberada. Qualquer `CITATION GATE — BLOQUEADO` diz exatamente o que falta (hash divergente, citação atestada como `acesso_falhou` ainda presente no texto, marcador pendente): corrija e repita.

**Qualquer edição posterior da peça invalida o SHA.** Ajuste pedido no Step 06, correção do ciclo de REJECT do Step 07, vírgula trocada à mão: regrave a peça e, **na sequência**, regrave o manifesto. Manifesto velho com peça nova bloqueia igual a manifesto ausente — por isso o manifesto é sempre o último ato do step.

## Loop de Revisão (entrada por REJECT do Step 07)

Quando este step é reexecutado por `on_reject: step-05` (REJECT da Vera Veredito), o Rafael recebe **apenas** a lista `fixes` (feedback-delta) + a peça anterior — **não reescreve do zero**. Aplica somente as correções indicadas (que podem incluir corrigir/remover citações apontadas pelo `verificador-citacoes`) e devolve a peça revisada. A execução então retoma para a frente pelo Step 06 (re-aprovação) e Step 07 (nova revisão).

A cada ciclo, o manifesto é **refeito junto com a peça**: novo texto → novo SHA-256 → novo `output/recurso.md.citation-gate.json`, com `citations` atualizado (citação que o `verificador-citacoes` derrubou sai das razões **e** do manifesto). Reaproveitar o manifesto do ciclo anterior bloqueia a gravação por hash divergente.

## Nota Especial

O Rafael deve auto-verificar contra a checklist da skill da peça antes de entregar. Se concluir que há itens a corrigir, deve iterar autonomamente antes de declarar a task concluída. O Pipeline Runner aguarda a entrega final, não o primeiro rascunho.

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
