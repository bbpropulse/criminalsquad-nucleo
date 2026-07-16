# Caso-ouro (FICTÍCIO) — Furto noturno

> Dados **fictícios** para avaliação/regressão do squad. **Não** é caso real (sigilo/LGPD).
> Use como input do Step 01 (Foco do Caso); depois avalie o output com `/criminalsquad eval defesa-criminal-completa`.

## Input do caso

- **Tipo penal:** furto qualificado pelo repouso noturno (CP art. 155, caput, c/c § 1º).
- **Fase:** citação recebida; prazo do art. 396 CPP correndo (resposta à acusação).
- **Síntese da denúncia:** acusado de subtrair, durante a madrugada, um aparelho celular deixado em veículo destrancado na via pública; preso em flagrante na posse do bem.
- **Réu:** primário, sem antecedentes; alega que encontrou o aparelho.
- **Provas citadas:** auto de prisão em flagrante, depoimento de um policial, ausência de imagens.

## Teses candidatas (a confirmar no Step 04)

- Atipicidade/princípio da insignificância (bem de pequeno valor) — STF/STJ.
- Afastamento da qualificadora do repouso noturno (controvérsia sobre via pública/veículo).
- Fragilidade probatória (depoimento policial isolado) — in dubio pro reo.

## O que um bom output deve conter (referência para o juiz)

Resposta à acusação tempestiva, endereçada corretamente, desenvolvendo **apenas** as teses
aprovadas, cada uma com fundamento citado e **verificado**, com rol de testemunhas e provas
requeridas — conforme os `success_criteria` do `squad.yaml`.
