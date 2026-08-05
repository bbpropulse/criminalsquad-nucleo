---
name: queixa-crime
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de QUEIXA ou QUEIXA-CRIME no
  processo penal brasileiro — a petição inicial acusatória da AÇÃO PENAL PRIVADA, oferecida pelo
  querelante (a vítima) ao juiz. Gatilhos: queixa, queixa-crime, ação penal privada, querelante,
  querelado, oferecer queixa, art. 30 CPP, art. 41 CPP, art. 44 CPP (procuração com poderes…. Não
  use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-queixa-crime"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["queixa-crime", "queixa crime"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Queixa-Crime

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a construção da **Queixa** (ou **Queixa-Crime**), a **petição inicial acusatória da ação penal privada**, conforme a metodologia do Prof. Alexandre Salim no curso "Dominando as Peças Criminais". Aqui se advoga para a **vítima** (o querelante).

## Embasamento — espécies de ação penal privada

A ação penal pode ser pública (incondicionada — regra; condicionada à representação; condicionada à requisição do Ministro da Justiça) ou **privada**. Se a lei nada disser, é pública incondicionada; para ser condicionada ou privada, exige **expressa previsão legal**.

As **espécies de ação penal privada**:

- **(A) Exclusivamente privada / propriamente dita (regra).** Técnica legal: *"somente se procede mediante queixa"*. Cabem aqui: **representação** (art. 30 CPP), **sucessão processual** (art. 31 — macete **CADCI**: **C**ônjuge, **A**scendente, **D**escendente, **I**rmão) e **curador especial** (art. 33 — vítima menor de 18 ou com enfermidade mental sem representante, ou com interesses colidentes, ex.: o agressor é o próprio representante).
- **(B) Personalíssima.** Legitimidade **só do ofendido** — **não** cabe representação, sucessão nem curador especial. Se a vítima morre, **morre o direito de ação**. Único crime: **art. 236 CP** (induzimento a erro essencial / ocultação de impedimento; depende de queixa do contraente enganado, após trânsito em julgado da anulação do casamento).
- **(C) Subsidiária da pública (supletiva).** **Art. 5º, LIX, CF + art. 29 CPP.** Cabe quando o MP é **inerte/omisso** no prazo legal (não denunciou, não requisitou diligências, não arquivou). **Atenção:** se o MP **arquivou**, não cabe — ele não foi inerte.

## Princípios da ação penal privada

- **Oportunidade/conveniência** — o querelante não é obrigado a oferecer a queixa (diferente da obrigatoriedade do MP).
- **Disponibilidade** — pode desistir da ação já ajuizada.
- **Indivisibilidade** (art. 48 CPP) — havendo concurso de pessoas, ou processa **todos** ou não processa ninguém; deixar um de fora é **renúncia tácita**, que se estende a todos (art. 49 CPP) → arquivamento. O MP vela pela indivisibilidade.

## Endereçamento — ao JUIZ

A queixa é dirigida ao **juiz** (é inicial de ação penal): `Ao Juízo da [N]ª Vara Criminal da Comarca de [...]` ou `Ao Juízo do Juizado Especial Criminal da Comarca de [...]` (art. 319, I, CPC por analogia); ou, na fórmula clássica, `Excelentíssimo Senhor Doutor Juiz de Direito da [...]`.

> Crimes contra a honra (calúnia 138, difamação 139, injúria 140) têm, em regra, pena máxima baixa → **JECRIM** (IMPO: contravenções + crimes com pena máxima até 2 anos, art. 61 da 9.099). Atenção ao **concurso de crimes** (cúmulo material/exasperação) para fixar a competência.

## Estrutura da peça (petição única)

```
1. Endereçamento (ao juiz)
2. Preâmbulo: QUALIFICAR querelante + verbo OFERECER + fundamentos + procuração COM PODERES ESPECIAIS
   + tempestividade (6 meses) + qualificação do querelado
3. I — Dos Fatos
4. II — Do Direito (2.1 Do Cabimento da Queixa + 2.2 Da Adequação Típica)
5. III — Dos Pedidos
6. Fechamento
7. Rol de testemunhas — após a assinatura
```

### Preâmbulo

- **Qualificar o querelante** (a vítima/cliente) — **não** usar "já qualificado" (é a primeira manifestação; não há ação em curso). Qualificação completa pelo art. 319, II, CPC por analogia.
- Verbo **OFERECER** + `queixa-crime` + fundamentos (escolher entre: art. 30 CPP / art. 100, §2º, CP / art. 41 CPP / art. 145, caput, 1ª parte, CP, se crime contra a honra).
- `por seu(sua) advogado(a), conforme procuração anexa **com poderes especiais**` — **IMPRESCINDÍVEL** (art. 44 CPP: a procuração deve conter o **nome do querelante** e a **menção ao fato criminoso**).
- **Tempestividade:** `no prazo legal de 6 (seis) meses, contado do conhecimento da autoria, nos termos do art. 38 do CPP` (prazo **decadencial**).
- **Qualificar o querelado** (o réu da queixa) — art. 319, II, CPC.
- `pelas seguintes razões de fato e de direito:`

> **Verbo: OFERECER.** Vítima = **querelante**; réu = **querelado**. **Procuração com poderes especiais (art. 44)** é o ponto que mais cai.

### I — Dos Fatos

Resumo fático do caso (o que aconteceu no mundo dos fatos).

### II — Do Direito

- **2.1 — Do Cabimento da Queixa:** afirmar que se trata de **crime de ação penal privada**, com o respectivo fundamento (ex.: art. 145, caput, 1ª parte, CP), e que a titularidade é do querelante.
- **2.2 — Da Adequação Típica:** observar o **art. 41 CPP** — exposição do **fato criminoso com todas as circunstâncias que influem na pena** + a **capitulação** (tipificação penal). É a **subsunção típica** — sem repetir o item I.

### III — Dos Pedidos

`Ante o exposto, requer:`
- **a)** o **recebimento** da queixa;
- **b)** a designação de **audiência preliminar/de conciliação** (se IMPO/JECRIM);
- **c)** a **citação do querelado**;
- **d)** a **inquirição das testemunhas** adiante arroladas;
- **e)** a **procedência** da ação penal privada, com a **condenação do querelado** nas penas do(s) art(s). [...], e a **fixação de valor mínimo de indenização** (art. 387, IV, CPP).

### Fechamento

`Termos em que pede deferimento. Local e data. Advogado(a). OAB.`

### Rol de testemunhas

**Após o fechamento** (depois da assinatura): testemunha 1 (nome e qualificação); testemunha 2 (...); etc.

## Variação — QUEIXA SUBSIDIÁRIA (art. 5º, LIX, CF / art. 29 CPP)

Mesmo esquema, com **três diferenças**:
1. **Fundamento** da peça: art. 5º, LIX, CF, e art. 29 CPP.
2. **Tempestividade** diferente: 6 meses contados **do dia em que se esgotou o prazo do MP** (não do conhecimento da autoria) — art. 38, parte final, CPP.
3. Acrescentar no item II um **tópico sobre o cabimento da queixa subsidiária**, explicando que se trata de crime de ação **pública** em que o MP, no prazo legal, **não denunciou, não requisitou diligências e não arquivou** (foi inerte). De resto, é tudo igual.

## Checklist final

- [ ] Espécie correta de ação privada (propriamente dita / personalíssima / subsidiária)?
- [ ] Endereçada ao **juiz** (Vara Criminal ou JECRIM)?
- [ ] **Querelante qualificado** (não "já qualificado")?
- [ ] Verbo **OFERECER**; vítima = querelante, réu = querelado?
- [ ] **Procuração com poderes especiais (art. 44 CPP)** mencionada no preâmbulo?
- [ ] Tempestividade: **6 meses** (do conhecimento da autoria; ou do esgotamento do prazo do MP, se subsidiária)?
- [ ] Direito com **Cabimento da Queixa + Adequação Típica (art. 41 CPP)**?
- [ ] Pedidos: recebimento + (audiência preliminar) + citação + testemunhas + procedência/condenação + indenização (387, IV)?
- [ ] **Rol de testemunhas após o fechamento**?
- [ ] Atenção à **indivisibilidade** (processar todos os autores)?

## Lembretes finais

- **Inicial da ação penal privada; dirigida ao JUIZ; verbo: oferecer.**
- **Querelante (vítima/cliente) × Querelado (réu).** Qualificar ambos — sem "já qualificado".
- **Procuração com PODERES ESPECIAIS (art. 44 CPP)** — nome do querelante + menção ao fato.
- **Tempestividade: 6 meses** (decadencial) — diferente na subsidiária.
- **Adequação típica observa o art. 41 CPP** (fato criminoso + circunstâncias + capitulação).
- **Indivisibilidade (48 CPP):** todos os autores ou nenhum; renúncia a um se estende a todos (49).
- **Pedir condenação + indenização (387, IV, CPP).**
- **Rol de testemunhas sempre após a assinatura.**
- **Subsidiária:** MP inerte (não arquivamento), art. 5º, LIX, CF / 29 CPP, tempestividade do esgotamento do prazo do MP.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
