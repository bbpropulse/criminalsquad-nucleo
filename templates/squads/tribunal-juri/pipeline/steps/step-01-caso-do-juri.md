---
step: "01"
name: "Caso do Júri"
type: checkpoint
---

# 🛑 Checkpoint: Caso do Júri

## Para o Pipeline Runner
Apresentar ao usuário e coletar os dados do caso antes de iniciar a análise.

## Formato de Apresentação ao Usuário
"Vamos preparar a defesa no Tribunal do Júri. Preciso de:
1. Crime imputado (doloso contra a vida e conexos) e qualificadoras
2. FASE atual: (a) 1ª fase (judicium accusationis) ou (b) réu JÁ PRONUNCIADO (plenário)
3. Anexar: denúncia, peças do inquérito e, se houver, a decisão de pronúncia
4. Cliente: réu/assistente de acusação?"

## Ação do Pipeline Runner após a resposta
1. Registrar tudo em `output/caso.md`, com destaque para a FASE.
2. **Bifurcação:** se "já pronunciado", o fluxo seguirá do Step 04 direto ao Step 07 (plenário); se "1ª fase", seguirá 05→06.
3. Avançar para o Step 02.

## Quality Gate
- [ ] Crime e qualificadoras registrados
- [ ] Fase processual identificada (1ª fase ou pronunciado)
- [ ] Denúncia (e pronúncia, se houver) anexadas
