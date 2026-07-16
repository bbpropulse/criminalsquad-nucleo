---
step: "03"
name: "Decisão: Aceitar/Declinar"
type: checkpoint
depends_on: step-02
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

## Quality Gate

- [ ] O usuário tomou uma decisão explícita (1, 2 ou 3)
- [ ] `output/decisao.md` existe e registra a decisão e a justificativa
- [ ] Se ACEITAR: o pipeline segue para o Step 04
- [ ] Se DECLINAR/ENCAMINHAR: `output/carta-declinio.md` existe, é respeitosa, preserva o sigilo e o pipeline é encerrado (Steps 04-07 não executados)
