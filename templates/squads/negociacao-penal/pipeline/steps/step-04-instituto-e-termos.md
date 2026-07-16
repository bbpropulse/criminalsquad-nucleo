---
step: "04"
name: "Instituto e Termos"
type: checkpoint
depends_on: step-03
---

# 🛑 Checkpoint: Instituto e Termos

## Para o Pipeline Runner

Apresentar ao advogado a triagem do instituto (`output/caso.md`) cruzada com a pesquisa de requisitos (`output/pesquisa-juridica.md`) e o resumo (`output/resumo-autos.md`), e aguardar a decisão sobre **qual instituto será conduzido e com quais condições/termos** antes de redigir. A decisão de aceitar acordo é sempre do cliente — este checkpoint confirma a estratégia com o advogado.

## Formato de Apresentação ao Usuário

Ler `output/pesquisa-juridica.md`, `output/caso.md` e `output/resumo-autos.md` e apresentar no formato:

```
🔍 Júlia Jurisprudência concluiu a pesquisa. Síntese de cabimento dos institutos:

INSTITUTOS NEGOCIAIS (✅ cabível / ❌ inviável / ❓ a confirmar)
1. ANPP (art. 28-A CPP) — [✅/❌/❓] sem violência? pena mín < 4 anos? sem óbices §2º? base: ...
2. Transação penal (Lei 9.099 art. 76) — [✅/❌/❓] pena máx ≤ 2 anos / contravenção? base: ...
3. Suspensão condicional do processo (art. 89) — [✅/❌/❓] pena mín ≤ 1 ano? denúncia recebida? base: ...
4. Colaboração premiada (Lei 12.850) — [✅/❌/❓] concurso de agentes + resultados a entregar? base: ...

⚠️ Alternativa de mérito: [arquivamento/absolvição/prescrição mais favorável? — do resumo]
⚠️ Riscos: [confissão no ANPP / delação na colaboração — consentimento informado do cliente]

---
Qual instituto você quer conduzir, e com quais condições/termos?
Responda com o instituto (ex: "ANPP") e as condições desejadas, ou descreva ajustes.

Lembrete: a decisão de aceitar é do cliente; a confissão (ANPP) e a delação (colaboração) têm riscos a alertar.
```

## Ação do Pipeline Runner após Decisão

1. Registrar o instituto escolhido e as condições/termos definidos pelo advogado, com a base jurídica de cada um vinda da pesquisa
2. Salvar em `output/instituto-e-termos.md` no formato abaixo
3. Avançar para o Step 05 (Nara Negociação — Redação da Minuta)

## Expected Outputs

- `output/instituto-e-termos.md` → instituto aprovado + requisitos a demonstrar + condições/termos a negociar, cada item com seu fundamento (dispositivo/súmula/precedente da pesquisa)

## Output Format

```markdown
# Instituto e Termos — Negociação Penal

## Instituto escolhido
- [ANPP / transação penal / sursis processual / colaboração premiada]
- Skill a carregar pelo redator: [anpp / transacao-penal / suspensao-condicional-processo / colaboracao-premiada]
- Destinatário: [Ministério Público / juízo / autoridade policial]

## Requisitos a demonstrar
- [requisito] — fundamento: [dispositivo/súmula/precedente + origem]

## Ausência de óbices
- [óbice afastado] — fundamento: [...]

## Condições / termos a negociar
- [condição/cláusula] — fundamento e parâmetro: [...]

## Riscos e consentimento do cliente
- [confissão / delação / renúncias — alerta a registrar na peça]
```

## Output Example

> Decisão de referência (qualidade esperada).

```markdown
# Instituto e Termos — Negociação Penal

## Instituto escolhido
- ANPP (art. 28-A CPP)
- Skill a carregar pelo redator: anpp
- Destinatário: Ministério Público (proposta privativa do MP — §3º), com pedido
  subsidiário de remessa ao órgão superior (§14)

## Requisitos a demonstrar
- Sem violência/grave ameaça — fundamento: CPP art. 28-A, caput (acervo)
- Pena mínima < 4 anos (cálculo §1º) — fundamento: CPP art. 28-A, §1º (acervo)
- Disposição a confessar formal e circunstanciadamente — consentimento informado

## Ausência de óbices
- Não reincidência/habitualidade — fundamento: art. 28-A §2º II; IPs sem trânsito
  não contam (Súmula 444/STJ por analogia) [a confirmar na revisão]
- Sem benefício negocial no quinquênio — art. 28-A §2º III

## Condições / termos a negociar
- Reparação do dano (inciso I) — restituição do bem; demonstrar capacidade
- Prestação pecuniária proporcional (inciso IV, c/c CP 45) — cabe parcelamento

## Riscos e consentimento do cliente
- Confissão pode servir de suporte probatório se descumprido (Res. 289/2024 art.
  18-F) — registrar impugnação e o consentimento informado do cliente
```

## Veto Conditions

Reject and redo if ANY are true:
1. Nenhum instituto foi escolhido ou a `skill a carregar` não está indicada (o redator precisa dela no Step 05).
2. Uma condição/requisito foi registrado sem fundamento jurídico vinculado à pesquisa.

## Quality Criteria

- [ ] `output/instituto-e-termos.md` existe
- [ ] O instituto e a skill correspondente estão definidos
- [ ] O destinatário (MP/juízo/autoridade policial) está indicado
- [ ] Cada requisito/condição tem fundamento jurídico vinculado (vindo da pesquisa)
- [ ] Riscos da confissão/delação e o consentimento do cliente estão registrados
