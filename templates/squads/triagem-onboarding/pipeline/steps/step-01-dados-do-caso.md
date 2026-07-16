---
step: "01"
name: "Dados do Caso"
type: checkpoint
description: O advogado registra o relato do novo cliente — relato dos fatos, tipo penal aparente e urgência.
---

# 🛑 Checkpoint: Dados do Caso

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar do usuário (advogado) o relato do novo cliente que procurou o escritório — base para a triagem do Step 02. NÃO triar nem decidir aceitar/declinar aqui; apenas registrar os dados de entrada em `output/intake.md`.

A triagem propriamente dita (ficha em 8 blocos, conflito de interesses, viabilidade) acontece no Step 02 com a persona **Tânia Triagem**.

## Solicitação ao Usuário

🤝 Vamos fazer a **triagem de um novo cliente**.

Para começar, preciso de:

1. **Relato dos fatos** — o que o cliente narrou? (resumo do que aconteceu, com datas se houver)
2. **Tipo penal aparente** — qual crime parece estar em jogo? (ex: "furto — CP 155", "lesão corporal — CP 129", "ainda a classificar")
3. **Urgência** — há réu preso, prazo correndo, audiência marcada ou medida cautelar? (alta / média / baixa + detalhe)
4. **Dados do cliente** — nome, contato e, se houver, nº de processo/inquérito e comarca.
5. **Documentos** — caminhos de quaisquer documentos que o cliente trouxe (BO, intimação, denúncia). Coloque em `acervo/casos/` (gitignored) e informe os caminhos.

## Ação do Pipeline Runner

1. Receber as informações fornecidas pelo usuário
2. Salvar o relato em `output/intake.md` no formato abaixo
3. Avançar para o Step 02 (Tânia Triagem — Triagem do Caso)

## Expected Outputs

- `output/intake.md` → relato de entrada do novo cliente com fatos, tipo penal aparente, urgência, dados do cliente e caminhos dos documentos

## Formato de Salvamento

```markdown
# Intake — Novo Cliente

**Cliente:** [nome]
**Contato:** [telefone / e-mail]
**Processo / Inquérito nº:** [número ou "ainda não há"]
**Comarca / Vara:** [se houver]
**Tipo penal aparente:** [crime + dispositivo, ou "a classificar"]
**Urgência:** [alta / média / baixa] — [réu preso? prazo? audiência? cautelar?]

## Relato dos fatos
[narrativa do que o cliente contou, com datas]

## Documentos trazidos
- [tipo]: [caminho]
- [tipo]: [caminho]
```

## Quality Gate

Antes de avançar para o Step 02:
- [ ] `output/intake.md` existe
- [ ] O relato dos fatos está preenchido
- [ ] O tipo penal aparente foi informado (ou marcado como "a classificar")
- [ ] O nível de urgência foi indicado (com detalhe se alta)
- [ ] Os caminhos dos documentos trazidos (se houver) estão informados e acessíveis
