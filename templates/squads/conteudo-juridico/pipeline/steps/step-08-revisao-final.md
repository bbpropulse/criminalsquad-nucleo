---
step: "08"
name: "Revisão Final + GATE ÉTICO"
type: agent
agent: revisor
optional: false
execution: subagent
model_tier: powerful
depends_on: step-07
on_reject: step-04
max_review_cycles: 3
---

# Step 08: Rita Revisão — Revisão Final + GATE ÉTICO

## Para o Pipeline Runner

Executar a revisão final pela persona **Rita Revisão** (`agents/revisor.custom.md`) em **contexto isolado/fresco** (subagente): quem escreveu o copy/criou os slides **não** é quem julga — princípio anti-viés. Esta revisão **não é opcional**. A Rita avalia copy + slides, roda o **GATE ÉTICO** (Provimento 205/2021) e emite um veredicto único: **APPROVE** ou **REJECT**.

> Este é o segundo ponto obrigatório do gate ético (o primeiro foi o Step 05). O gate é **soberano**: qualquer veto disparado = REJECT direto, sem compensação por qualidade. Aqui não há Citation Gate de peça — **o GATE ÉTICO do Provimento 205/2021 é o equivalente** e cumpre o mesmo papel de barreira inegociável.

## Inputs para este Step

- `output/copy.md` → copy final
- `output/slides/rendered/*.png` → imagens renderizadas
- `_criminalsquad/core/best-practices/conteudo-juridico-redes.md` → Quality Criteria (seção 5) + Gate Ético (seção 4)
- `_criminalsquad/core/best-practices/etica-oab-sigilo.md` → sigilo, LGPD e limites de publicidade

## GATE ÉTICO — Veto Conditions (qualquer item → REJECT e retorno ao Step 04)

- [ ] **VETO — Captação / mercantilização**
- [ ] **VETO — Promessa de resultado**
- [ ] **VETO — CTA comercial direto** (em vez de CTA educativo)
- [ ] **VETO — Menção a valores/honorários**
- [ ] **VETO — Caso/cliente identificável** (sigilo)
- [ ] **VETO — Sensacionalismo com crime/tragédia real**
- [ ] **VETO — Superlativos/autopromoção vedada** ("melhor", "nº 1", "líder")
- [ ] **VETO — Sigilo/LGPD**
- [ ] **VETO — Indução a erro**

## Expected Outputs

- `output/revisao-final.md`, começando por um **bloco YAML estruturado** que o Pipeline Runner parseia (não prosa livre):
  ```yaml
  verdict: APPROVE | REJECT
  fixes:
    - "{correção específica — o quê, onde, como — direcionada ao Step 04}"
  ```
  (em APPROVE, `fixes` fica vazio). Abaixo do bloco, o relatório:
  - **Checklist do Gate Ético** com cada Veto Condition marcada (livre/disparada)
  - **Quality check:** fonte citada, CTA educativo, disclaimer, precisão técnica, sobriedade visual

## Execution Mode

- **Modo:** Subagent — roda em **contexto isolado/fresco** (quem redigiu o copy/criou os slides não é quem revisa; anti-viés).
- **Skills:** Nenhuma (a publicação é o Step 09)

## Quality Gate

Antes de prosseguir:
- [ ] `output/revisao-final.md` existe
- [ ] O veredicto está claramente declarado como APPROVE ou REJECT (no bloco YAML do topo)
- [ ] Checklist do Gate Ético preenchido

### Se APPROVE:
- Avançar para o Step 09 (Publicação)

### Se REJECT (loop de revisão — on_reject: step-04, teto max_review_cycles=3 — inclusive por VETO ÉTICO):
- Retornar ao **Step 04** (Geração de Copy) passando **apenas** a lista `fixes` (feedback-delta) + o copy anterior — não "reescreva tudo".
- O Gustavo Gancho aplica APENAS as correções indicadas.
- A execução **retoma para a frente** pelo pipeline: copy corrigido → **Step 05 (gate ético + o usuário re-aprova o copy)** → Step 06/07 (re-renderização e aprovação das imagens) → Step 08 (nova revisão). O checkpoint humano a cada ciclo é **intencional**.
- **Detecção de não-convergência:** se um mesmo `fix` reaparecer entre ciclos, **escalar ao usuário imediatamente** com o histórico — não gastar os ciclos restantes.
- Repetir até APPROVE ou atingir o teto (3); no teto, **escalar ao usuário** com o histórico. **Nunca** publicar sem APPROVE.
