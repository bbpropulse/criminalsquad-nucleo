---
step: "01"
name: "Carteira / Critério de Busca"
type: checkpoint
---

# 🛑 Checkpoint: Carteira / Critério de Busca

## Para o Pipeline Runner

Coletar do usuário a carteira e o critério de varredura do DJEN antes de acionar a Mônica Monitoramento. Sem carteira definida não há busca. Registrar tudo em `output/carteira.md`.

## Formato de Apresentação ao Usuário

```
⚖️ Gestão de Prazos e Intimações — vamos varrer o DJEN da sua carteira.

Preciso de:
1️⃣ OAB do(s) advogado(s) responsável(is) — UF + número
2️⃣ CPF/CNPJ das partes a monitorar (opcional, além da OAB)
3️⃣ Números de processo (CNJ) específicos a acompanhar (opcional)
4️⃣ Período de varredura (hoje / últimos 7 dias / intervalo de datas)
5️⃣ Tribunais a varrer (DJEN cobre quase tudo; STF/STJ têm portal próprio residual)

⚠️ Lembrete: este squad trata prazo PENAL (CPP 798 — dias corridos). Se a carteira
   misturar processos cíveis, sinalize — o regime de contagem é diferente (CPC 219,
   dias úteis) e a Priscila Prazo precisa saber para não calcular errado.
```

## Inputs para este Step

- Resposta do usuário (OAB, CPF/CNPJ, processos, período, tribunais)
- `_criminalsquad/_memory/company.md` → escritório, advogados, contexto da carteira

## Expected Outputs

- `output/carteira.md` → carteira e critério de busca consolidados:

```markdown
# Carteira de Monitoramento — DJEN

- **OAB(s):** UF 000000 (Dr. Fulano)
- **CPF/CNPJ monitorados:** [lista ou "—"]
- **Processos específicos (CNJ):** [lista ou "—"]
- **Período de varredura:** [hoje | últimos 7 dias | DD/MM a DD/MM]
- **Tribunais:** [DJEN nacional | + STF/STJ portal | DJe estadual residual]
- **Regime predominante:** PENAL (dias corridos, CPP 798) | misto [sinalizar cíveis]
- **Definido em:** YYYY-MM-DD HH:MM
```

## Ação do Pipeline Runner após Confirmação

1. Salvar `output/carteira.md` com os dados acima.
2. Confirmar ao usuário a carteira registrada (eco curto).
3. Avançar para o Step 02 (Mônica Monitoramento — Varredura do DJEN).

## Quality Gate

Antes de avançar para o Step 02, verificar:
- [ ] `output/carteira.md` existe
- [ ] Há ao menos um critério de busca válido (OAB, CPF/CNPJ ou número de processo)
- [ ] Período de varredura definido
- [ ] Regime de contagem sinalizado (penal puro × misto com cíveis)

Se faltar critério ou período, perguntar novamente — não acionar a varredura com carteira vazia.

## Opções Especiais

- **"usar a carteira de ontem"** → reutilizar o `output/carteira.md` da última execução, apenas atualizando o período para hoje.
