---
step: "05"
name: "Aprovar Copy + GATE ÉTICO"
type: checkpoint
depends_on: step-04
---

# 🛑 Checkpoint: Aprovar Copy + GATE ÉTICO (Provimento 205/2021)

## Para o Pipeline Runner

Apresentar ao usuário o copy completo (`output/copy.md`) e aguardar aprovação antes de passar para o designer. **Antes de pedir a aprovação, o Pipeline Runner roda o GATE ÉTICO sobre o copy.** Este é um dos dois pontos obrigatórios do gate (o outro é o Step 08).

> O gate aqui é uma **pré-checagem de bloqueio**: se qualquer Veto Condition disparar, NÃO apresentar o copy como aprovável — devolver ao Step 04 com a instrução de correção. Não se aprova "com ressalva".

## GATE ÉTICO — Veto Conditions (qualquer item BLOQUEIA e retorna ao Step 04)

Validar o copy contra `_criminalsquad/core/best-practices/conteudo-juridico-redes.md` (seção 4) e `_criminalsquad/core/best-practices/etica-oab-sigilo.md`:

- [ ] **VETO — Captação / mercantilização:** oferta de serviço, "contrate/agende/fale agora", advocacia tratada como produto.
- [ ] **VETO — Promessa de resultado:** êxito, absolvição, indenização provável, % de vitórias, prazo certo de desfecho.
- [ ] **VETO — CTA comercial direto:** chamada de venda ou gatilho de urgência/escassez em vez de CTA educativo.
- [ ] **VETO — Menção a valores/honorários:** preço, desconto, parcelamento, "consulta grátis", promoção.
- [ ] **VETO — Caso/cliente identificável:** nome, processo, print, foto ou dado que identifique cliente/vítima/parte/testemunha sem autorização.
- [ ] **VETO — Sensacionalismo:** crime/tragédia/caso notório como gancho de engajamento ou autopromoção.
- [ ] **VETO — Superlativos/autopromoção vedada:** "melhor", "nº 1", "líder", "imbatível", "o mais experiente".
- [ ] **VETO — Sigilo/LGPD:** dado conhecido em razão da profissão revelado, ou dado pessoal/sensível sem base legal e anonimização.
- [ ] **VETO — Indução a erro:** simplificação que afirma algo juridicamente incorreto.

**Também confirmar (ausência = devolver ao Step 04):** fonte/fundamento citado, **CTA educativo** ("salve", "compartilhe", "comente a dúvida") e **disclaimer** informativo presentes.

> Em caso de incerteza sobre limite de publicidade, sigilo ou correção técnica: **parar e escalar** ao advogado responsável antes de seguir.

## Formato de Apresentação ao Usuário (somente se o gate passar)

```
✍️ Gustavo Gancho concluiu o copy. ✅ Gate ético: aprovado (nenhum veto).

📝 CAPA (gancho informativo):
[copy completo da capa]

📝 SLIDES (resumo):
[um bullet por slide com o ponto central]

🏛️ FONTE CITADA: [lei/súmula/tema/órgão/data]
🟢 CTA EDUCATIVO: [o CTA usado]
📄 DISCLAIMER: [presente — legenda/slide final]

📱 LEGENDA: [primeiros ~200 chars]...

---
O copy está aprovado para o Designer criar as imagens?
1. ✅ Aprovar e avançar para o Designer
2. 🔄 Pedir ajustes no texto → Gustavo refaz apenas o solicitado
3. ↩️ Trocar de ângulo/tema → voltar ao Step 04 (ou Step 03)
```

## Ação do Pipeline Runner após Decisão

### Se o GATE reprovar (antes de mostrar ao usuário):
- Retornar ao Step 04 com a lista exata de vetos disparados e como corrigir. Repetir até o gate passar.

### Se opção 1 (Aprovar):
- Avançar para o Step 06 (Iago Imagem — Criação dos Slides)

### Se opção 2 (Ajustes de texto):
- Coletar as instruções específicas e retornar ao Step 04 (Gustavo refaz apenas o indicado). Depois, retornar ao Step 05 (gate roda de novo).

### Se opção 3 (Novo ângulo/tema):
- Retornar ao Step 04 (novo ângulo) ou Step 03 (novo tema), preservando o `output/tema-selecionado.yaml` quando aplicável.

## Quality Gate

Antes de avançar para o Step 06:
- [ ] GATE ÉTICO executado e **nenhum** veto disparado
- [ ] Fonte, CTA educativo e disclaimer confirmados no copy
- [ ] Aprovação explícita do usuário registrada
