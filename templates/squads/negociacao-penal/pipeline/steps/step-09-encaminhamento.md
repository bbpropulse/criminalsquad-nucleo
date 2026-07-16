---
step: "09"
name: "Checklist de Encaminhamento"
type: agent
agent: encaminhamento
execution: inline
depends_on: step-08
---

# Step 09: Edu Encaminhamento — Checklist + Versão Final

## Para o Pipeline Runner

Executar a geração do checklist de encaminhamento e da versão final pela persona **Edu Encaminhamento** (`agents/encaminhamento.custom.md`).

O Edu Encaminhamento consolida a peça aprovada na **versão final protocolável** e gera o **checklist de encaminhamento** ao destinatário correto do instituto (Ministério Público / juízo / autoridade policial) e à **audiência de homologação**, garantindo que nada falte no ato de encaminhar (destinatário, documentos, audiência, assinatura, prazos, consentimento informado).

## Context Loading

Load these files before executing:
- `output/acordo-minuta.md` — minuta aprovada (APPROVE no Step 07, validada no Step 08)
- `output/revisao-juridica.md` — confirmação do veredicto APPROVE
- `output/instituto-e-termos.md` — instituto e destinatário
- `output/caso.md` — processo, órgão, fase, prazos, anexos a juntar
- Best-practice (não duplicar): `_criminalsquad/core/best-practices/peticao-criminal.md`

## Instructions

### Process

1. Consolidar `output/acordo-minuta.md` na versão final limpa (sem marcações de revisão) em `output/acordo-final.md`.
2. Identificar o **destinatário e o rito de homologação** conforme o instituto (ANPP → MP + homologação judicial art. 28-A §4º; transação/sursis → juízo/JECRIM; colaboração → MP/autoridade policial + homologação sigilosa art. 4º §7º / art. 7º).
3. Montar o checklist acionável: destinatário, documentos a anexar, audiência de homologação a designar, assinatura digital (ICP-Brasil), consentimento informado do cliente, prazos/quinquênio e conferência de partes/processo.
4. Salvar `output/checklist-encaminhamento.md`.

## Output Format

```
# Checklist de Encaminhamento — Negociação Penal
Instituto: [__]  |  Destinatário: [MP / juízo / autoridade policial]

## Destinatário e rito
- [ ] Peça dirigida a [__]; homologação: [__]

## Documentos a anexar
- [ ] Procuração
- [ ] Consentimento informado do cliente (confissão/delação)
- [ ] Certidão de antecedentes
- [ ] Comprovantes de capacidade econômica (ANPP/transação) / elementos de corroboração (colaboração)
- [ ] [outros conforme o instituto]

## Audiência e assinatura
- [ ] Audiência de homologação a designar
- [ ] Assinatura digital (certificado ICP-Brasil)

## Prazos e conferência
- [ ] Prazos/quinquênio conferidos
- [ ] Nº do processo, órgão e partes conferidos
```

## Output Example

> Checklist de referência (qualidade esperada).

```
# Checklist de Encaminhamento — Negociação Penal
Instituto: ANPP (art. 28-A CPP)  |  Destinatário: Ministério Público

## Destinatário e rito
- [ ] Manifestação dirigida ao(à) Promotor(a) de Justiça (proposta privativa do
      MP — §3º); pedido subsidiário de remessa ao órgão superior (§14).
- [ ] Homologação judicial em audiência (§4º) — voluntariedade e legalidade.

## Documentos a anexar
- [ ] Procuração
- [ ] Consentimento informado do cliente quanto à confissão (impugnação ao art.
      18-F da Res. 289/2024 registrada)
- [ ] Certidão de antecedentes (primariedade e ausência de benefício no quinquênio)
- [ ] Comprovantes de capacidade econômica (prestação pecuniária / reparação)

## Audiência e assinatura
- [ ] Audiência de homologação a designar após a proposta do MP
- [ ] Assinatura digital (certificado ICP-Brasil) conferida

## Prazos e conferência
- [ ] Quinquênio do §2º III conferido (sem ANPP/transação/sursis nos últimos 5 anos)
- [ ] Nº do inquérito, promotoria e qualificação do investigado conferidos
```

## Veto Conditions

Reject and redo if ANY are true:
1. `output/acordo-final.md` contém marcações de revisão/comentários, ou o destinatário do checklist está errado para o instituto (ex.: ANPP dirigido ao juízo).
2. Falta o item de consentimento informado (confissão/delação) ou o de assinatura digital (ICP-Brasil) no checklist.

## Quality Criteria

- [ ] `output/acordo-final.md` existe e está sem marcações de revisão
- [ ] `output/checklist-encaminhamento.md` existe
- [ ] Destinatário e rito de homologação corretos para o instituto
- [ ] Lista de documentos a anexar completa (inclui consentimento informado)
- [ ] Item de assinatura digital (ICP-Brasil) consta no checklist
- [ ] Prazos/quinquênio e partes/processo conferidos
