---
step: "03b"
name: "Interpretação das Intimações"
type: agent
agent: intimacao
execution: subagent
model_tier: powerful
depends_on: step-03
description: A Iara interpreta cada intimação triada como PRAZO — natureza do ato, destinatário, termo inicial e vícios — para a Priscila contar.
---

# Step 03b: Iara Intimação — Interpretação das Intimações

## Para o Pipeline Runner

Executar a persona **Iara Intimação** (`agents/intimacao.custom.md`) sobre cada
publicação marcada `triagem: PRAZO` no Step 03.

Este step existe porque **a interpretação e a contagem são responsabilidades
distintas**, e a própria persona declara a divisão: *"A Iara interpreta; a
Priscila conta."* Enquanto o Step 04 apenas dizia "apoiando-se na Iara
Intimação", nenhuma persona da Iara era carregada — o runner só carrega o agente
declarado no frontmatter do step. Suas travas (intimação pessoal do CPP 370 § 4
× publicação do § 1, ciência simples × preclusiva do CPC 224 § 2, vício como
alerta) eram texto morto.

A Iara **não calcula data fatal**. Ela entrega o ato gerador, o marco e o regime;
a aritmética é do motor, no Step 04.

## Inputs para este Step

- `output/publicacoes.yaml` → publicações marcadas como `triagem: PRAZO` (Step 03)
- `output/carteira.md` → regime predominante e contexto (Step 01)

## Recursos a Referenciar (sem duplicar)

- Subagente nativo `.claude/agents/intimacao.md` → leitura/classificação do ato, destinatário, vícios
- Subagente nativo `.claude/agents/ciencia.md` → ciência simples × com efeito preclusivo (CPC 224 § 2)
- Best-practice `_criminalsquad/core/best-practices/gestao-prazos-processuais.md` → termo inicial penal, intimação CPP 370, ciência ficta

## Instructions

### Process

1. **Validar a intimação antes de tudo.** Conferir processo, parte e advogado
   intimado. Intimação dirigida a advogado sem poderes é nulidade — marcar
   `vicio` e sugerir o remédio (arguir e pedir devolução do prazo). Só nasce
   prazo de intimação válida.
2. **Identificar o meio.** Intimação pessoal (réu, defensor público, MP — CPP
   370 § 4) × defensor constituído por publicação (CPP 370 § 1) × eletrônica.
   Cada meio fixa o termo inicial de modo próprio.
3. **Nomear o ato gerador com fundamento.** "Resposta à acusação — CPP 396",
   "apelação criminal — CPP 593". O nome sozinho não serve à Priscila.
4. **Sinalizar o regime, sem fechá-lo.** `PENAL` (dias corridos, CPP 798),
   `CIVEL` (dias úteis, CPC 219) ou `ZONA_CINZENTA`. A confirmação é do Step 04.
5. **Ciência.** Onde houver pedido ou risco de ciência expressa, distinguir
   simples × com efeito preclusivo (CPC 224 § 2) e alertar **antes** de qualquer
   petição — ciência antecipada pode consumar preclusão.
6. **Gravar `output/intimacoes.yaml`** no formato abaixo.

## Expected Outputs

- `output/intimacoes.yaml` → um registro por publicação triada como PRAZO:

```yaml
gerado_em: "YYYY-MM-DD HH:MM"
intimacoes:
  - id: 1
    processo: "0000000-00.0000.0.00.0000"
    cliente: "Nome do cliente"
    advogado_intimado: "Nome + OAB"
    # NÃO é um "true" de conveniência. Traga a FONTE da conferência (procuração
    # nos autos, fls./id) ou escreva NAO_VERIFICADO. Este campo é a diferença
    # entre "a intimação é válida" e "eu presumi que fosse".
    poderes_conferidos: "procuração fls. NN"   # | NAO_VERIFICADO
    meio: "PUBLICACAO"          # PESSOAL | PUBLICACAO | ELETRONICA
    fundamento_meio: "CPP 370 § 1 — defensor constituído, por publicação"
    ato: "Resposta à acusação"
    fundamento_prazo: "CPP 396"
    data_intimacao: "DD/MM/AAAA"
    regime_sinalizado: "PENAL"  # PENAL | CIVEL | ZONA_CINZENTA — confirmação é do Step 04
    fundamento_regime: "CPP 798, caput — contínuo, dias corridos"
    vicio: null                 # ou: descrição + remédio sugerido
    ciencia: null               # ou: SIMPLES | PRECLUSIVA + alerta
    alerta: "observação para o checkpoint"
```

## Output Example

```yaml
gerado_em: "2026-07-27 09:12"
intimacoes:
  - id: 1
    processo: "0004521-33.2026.8.26.0050"
    cliente: "M. A. P."
    advogado_intimado: "Bruno Coutinho — OAB/SP 000.000"
    poderes_conferidos: "procuração fls. 14"
    meio: "PUBLICACAO"
    fundamento_meio: "CPP 370 § 1 — defensor constituído, intimação pelo órgão oficial"
    ato: "Resposta à acusação"
    fundamento_prazo: "CPP 396"
    data_intimacao: "14/07/2026"
    regime_sinalizado: "PENAL"
    fundamento_regime: "CPP 798, caput — prazo contínuo, em dias corridos"
    vicio: null
    ciencia: null
    alerta: "Confirmar no Step 04 se houve citação por hora certa — o marco muda e a contagem inteira se desloca."
  - id: 2
    processo: "0009087-11.2026.8.26.0100"
    cliente: "R. C. O."
    advogado_intimado: "Dra. Ana Lima — OAB/SP 111.111"
    poderes_conferidos: NAO_VERIFICADO
    meio: "PUBLICACAO"
    fundamento_meio: "CPP 370 § 1"
    ato: "Alegações finais"
    fundamento_prazo: "CPP 403 § 3"
    data_intimacao: "16/07/2026"
    regime_sinalizado: "PENAL"
    fundamento_regime: "CPP 798, caput"
    vicio: "Intimação dirigida a advogada que não consta com poderes nos autos — nulidade. Remédio: arguir a nulidade e requerer a devolução do prazo."
    ciencia: null
    alerta: "NÃO tomar ciência expressa antes de resolver o vício — ciência antecipada pode consumar a preclusão."
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O step calculou uma data fatal — a aritmética é do motor, no Step 04.
2. Algum registro traz o nome do ato **sem** o dispositivo que fixa o prazo.
3. A intimação foi tratada como válida sem conferir processo, parte e poderes do advogado intimado — ou `poderes_conferidos` saiu como `true` sem a fonte documental (procuração/fls.). Sem fonte, o valor é `NAO_VERIFICADO`.
4. Foi orientada ciência expressa sem antes mapear o efeito preclusivo (CPC 224 § 2).
5. O regime foi apresentado como decidido, e não como sinalização a confirmar no Step 04.

## Quality Criteria

- [ ] Cada intimação traz o meio e o fundamento do meio, não só a data
- [ ] Vício encontrado vem com o remédio sugerido, nunca só apontado
- [ ] Zona cinzenta entre regime penal e cível foi marcada como tal, não arbitrada
