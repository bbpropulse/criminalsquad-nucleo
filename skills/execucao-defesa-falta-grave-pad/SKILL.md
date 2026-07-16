---
name: execucao-defesa-falta-grave-pad
description: >-
  Use ao apresentar defesa técnica no Procedimento Administrativo Disciplinar (PAD) por falta grave
  e ao impugnar a homologação judicial da falta perante o Juízo da Execução — rol taxativo do art.
  50 da LEP, defesa técnica obrigatória por advogado, contraditório e oitiva do sindicado, prazo
  prescricional da falta e proporcionalidade da sanção (art. 57 LEP). Gatilhos: falta grave, PAD,
  procedimento administrativo disciplinar… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, analise, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-defesa-falta-grave-pad"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-defesa-falta-grave-pad", "execucao defesa", "falta grave"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa em Falta Grave e PAD — Procedimento Administrativo Disciplinar (arts. 44-60 da LEP)

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

Esta skill orienta a **defesa técnica no Procedimento Administrativo Disciplinar (PAD)** por suposta **falta grave** e a **impugnação da homologação judicial** dessa falta perante o Juízo da Execução Penal. Ataca-se **o reconhecimento da própria falta** — mérito (a conduta não é falta grave, ou não ocorreu) e procedimento (nulidades do PAD, ausência de defesa técnica, contraditório frustrado) — e não apenas os efeitos já consumados.

Distinção crucial: esta skill **impugna a existência da falta**. Skills como `execucao-remicao` e `execucao-progressao-regime` tratam dos **efeitos** de uma falta **já reconhecida** (perda de dias remidos, nova data-base). Aqui o objetivo é anterior: **evitar que a falta seja reconhecida** — ou desconstituí-la.

> **Lição central:** ataque em **duas frentes independentes**. (1) **Mérito** — a conduta se subsume a algum inciso do art. 50 da LEP (rol **taxativo**)? Faltou dolo, houve subsanção, é fato atípico disciplinar? (2) **Procedimento** — houve PAD regular, com **defesa técnica por advogado**, contraditório e oitiva do sindicado? A falha em **qualquer** das frentes derruba a falta. E, mesmo perdendo as duas, ainda restam a **prescrição** e a **proporcionalidade da sanção**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 44 a 60 da LEP e o alcance atual da exigência de defesa técnica no PAD — a matéria é **jurisprudencial** e oscila (a incidência ou não da SV 5/STF ao PAD executório é o ponto mais sensível). Confira súmulas, temas e eventual *overruling* pela skill `jurisprudencia-stj-stf` **antes** de fundamentar a peça. Nada de precedente citado de memória.

## Base legal

- **Art. 50 da LEP** — rol **taxativo** das faltas graves do condenado à pena privativa de liberdade (incisos I a VIII; o inc. VII abrange posse de aparelho de comunicação; parágrafo único estende ao preso provisório).
- **Art. 51 da LEP** — faltas graves do condenado a pena restritiva de direitos.
- **Art. 52 da LEP** — falta grave por crime doloso que ocasione subversão da ordem/disciplina (regime disciplinar diferenciado — RDD; redação da Lei 13.964/2019).
- **Art. 53 da LEP** — sanções disciplinares (advertência, repreensão, suspensão/restrição de direitos, isolamento, RDD).
- **Art. 54 da LEP** — competência para aplicar as sanções (isolamento/RDD por ato motivado do diretor; RDD por **prévio despacho judicial**).
- **Art. 57 da LEP** — na aplicação das sanções, consideram-se a **natureza**, os **motivos**, as **circunstâncias** e as **consequências** do fato, e a **pessoa** do faltoso e seu tempo de prisão (**proporcionalidade**).
- **Art. 59 da LEP** — o procedimento disciplinar deve apurar a falta e a pessoa do faltoso **assegurado o direito de defesa** (parágrafo único: a decisão será motivada).
- **Art. 118, I, da LEP** — a falta grave autoriza a **regressão de regime** — efeito que também exige contraditório e decisão fundamentada.
- **CF, art. 5º, LIV e LV** — devido processo legal, contraditório e ampla defesa (fundamento constitucional da defesa técnica no PAD).

## Metodologia de análise — roteiro em 6 passos

### Passo 1 — A conduta é falta grave? (mérito / tipicidade disciplinar)

O art. 50 é **rol taxativo**. Não há falta grave por analogia ou por conduta "assemelhada". Verifique:
- A conduta imputada corresponde **literalmente** a um inciso do art. 50 (I a VIII)?
- Falta grave exige, em regra, **dolo** — a conduta meramente culposa ou fortuita não a configura.
- **Fuga** (art. 50, II) x recambiamento/atraso justificado no retorno de saída temporária: analisar se houve efetivo animus de subtrair-se à execução.
- **Posse de aparelho celular / componentes** (art. 50, VII): discutir posse compartilhada, ausência de individualização, chip sem aparelho, aparelho inservível — a **prova** deve individualizar o sindicado.
- **Descumprimento de condições** do regime aberto/monitoração: nem todo descumprimento é falta grave — separar falta grave (art. 50) de mera infração administrativa leve/média (regimento interno).

### Passo 2 — Houve PAD regular? (nulidades procedimentais)

Fiscalizar a existência e a regularidade do procedimento:
- **Instauração formal** do PAD/sindicância com portaria e imputação clara.
- **Oitiva do sindicado** — o preso foi ouvido sobre os fatos?
- **Contraditório** — teve ciência da imputação e oportunidade de produzir/contrariar prova?
- **Defesa técnica** — foi **assistido por advogado** (constituído, dativo ou Defensoria)? (ponto nevrálgico — Passo 3).
- **Motivação** da decisão administrativa (art. 59, parágrafo único).
- **Prazo** de conclusão e eventual excesso.

### Passo 3 — Houve defesa técnica por advogado? (o coração da nulidade)

A tese defensiva mais forte: o reconhecimento de falta grave e a imposição de sanções com reflexo na execução (regressão, perda de remição, nova data-base) **exigem defesa técnica por advogado** no PAD — não basta a autodefesa do preso nem a atuação de comissão disciplinar sem advogado.

- **SV 5/STF** ("A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição") foi editada para o **PAD de servidor público** e **não se estende automaticamente** ao PAD da execução penal, cujo desfecho restringe a **liberdade** de quem já cumpre pena. **A posição consolidada no STJ é de exigir defesa técnica no PAD executório** [NÃO VERIFICADO — confira a Súmula do STJ sobre defesa técnica no PAD e a distinção quanto à SV 5 via `jurisprudencia-stj-stf` antes de citar número/enunciado].
- **Tese:** a ausência de advogado no PAD que reconheceu a falta grave é **nulidade**, por violação ao contraditório e à ampla defesa em procedimento cujo resultado repercute na liberdade (CF, art. 5º, LV).

### Passo 4 — A falta prescreveu?

A LEP **não fixa** prazo específico de prescrição da falta grave. A jurisprudência supre a lacuna pelo **menor prazo do art. 109 do CP** (aplicado por analogia), contado da data do fato até o reconhecimento/homologação.
- Levantar a **data do fato** e a **data do reconhecimento** da falta.
- Aplicar o **menor prazo prescricional do art. 109, CP** (por analogia) [NÃO VERIFICADO — confira o parâmetro prescricional adotado hoje pelo STJ para falta grave via `jurisprudencia-stj-stf`; há divergência sobre qual inciso do art. 109 incide].
- **Tese:** decorrido o prazo entre o fato e o reconhecimento, a falta está **prescrita** e não pode gerar efeitos.

### Passo 5 — A homologação judicial observou o contraditório?

O reconhecimento administrativo da falta **não se homologa automaticamente**. O Juízo da Execução deve:
- **Oitiva prévia da defesa** (e do apenado) antes de homologar a falta e antes da regressão (art. 118, §2º, LEP — oitiva prévia à regressão).
- **Decisão fundamentada** que enfrente as teses defensivas.
- **Tese:** homologação da falta e/ou regressão **sem oitiva prévia da defesa** é nula (violação ao contraditório).

### Passo 6 — A sanção é proporcional? (art. 57 da LEP)

Ainda que reconhecida a falta, a sanção deve observar o art. 57 — **natureza, motivos, circunstâncias, consequências e a pessoa do faltoso**.
- **Subsanção / reparação**: falta reparada ou de mínima ofensividade autoriza sanção mais branda.
- **Primariedade disciplinar**: histórico prisional imaculado milita a favor.
- **Vedação ao automatismo**: a falta não impõe, por si, a sanção máxima nem a regressão obrigatória ao regime mais gravoso — cabe **dosimetria disciplinar** motivada.

## Teses defensivas (e as contra-teses da acusação)

| # | Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|----------------|-----------|------------------------|
| 1 | Conduta não se subsume ao rol **taxativo** do art. 50 (atipicidade disciplinar) | Art. 50, LEP (taxatividade) | Enquadramento em inciso específico, com prova individualizada |
| 2 | **Ausência de defesa técnica** por advogado no PAD → nulidade | CF, art. 5º, LV; posição do STJ; SV 5 não se aplica | SV 5/STF; autodefesa do preso teria suprido |
| 3 | **PAD inexistente/irregular** — sem instauração, oitiva ou contraditório | Art. 59, LEP; CF, art. 5º, LV | Formalidades observadas; ata da comissão disciplinar |
| 4 | **Prescrição** da falta grave (menor prazo do art. 109, CP, por analogia) | Analogia in bonam partem | Prazo não escoado; marco interruptivo |
| 5 | **Homologação/regressão sem oitiva prévia** da defesa | Art. 118, §2º, LEP; contraditório | Oitiva realizada; regressão fundamentada |
| 6 | **Ausência de dolo** / fato fortuito / subsanção | Arts. 50 e 57, LEP | Dolo demonstrado pelas circunstâncias |
| 7 | **Desproporcionalidade** da sanção (art. 57) | Art. 57, LEP | Dosimetria adequada à gravidade |
| 8 | **Posse compartilhada / não individualizada** de celular (inc. VII) | Ônus da prova; individualização | Apreensão vinculada ao sindicado |

## Estrutura da peça — Defesa no PAD e/ou Impugnação da homologação

A depender do momento processual, a peça é: **(a) defesa escrita no PAD** (fase administrativa) ou **(b) manifestação/impugnação perante o Juízo da Execução** contra a homologação da falta (fase judicial). Sugestão de estrutura:

```
I  — SÍNTESE DO IMPUTADO
    (qual falta, quando, qual inciso do art. 50, qual sanção pretendida/aplicada)

II — DAS NULIDADES PROCEDIMENTAIS (frente processual)
    a) ausência de defesa técnica por advogado no PAD
    b) ausência/irregularidade do PAD, da oitiva e do contraditório
    c) ausência de oitiva prévia da defesa antes da homologação/regressão

III — DO MÉRITO (frente material)
    a) atipicidade disciplinar — a conduta não integra o rol taxativo do art. 50
    b) ausência de dolo / fato fortuito / subsanção
    c) prova não individualizada (esp. posse de celular)

IV — DA PRESCRIÇÃO DA FALTA GRAVE
    (menor prazo do art. 109, CP, por analogia; data do fato x reconhecimento)

V  — DA PROPORCIONALIDADE (art. 57 da LEP)
    (afastar automatismo; dosimetria disciplinar; subsanção; primariedade)

VI — DOS PEDIDOS
    a) não reconhecimento / desconstituição da falta grave
    b) subsidiariamente, declaração de nulidade do PAD e renovação
    c) subsidiariamente, prescrição
    d) subsidiariamente, sanção proporcional (afastada a regressão automática)
```

**Ordem tática:** enfrente primeiro as **nulidades** (podem encerrar sem exame de mérito), depois o **mérito**, e **sempre** deixe **prescrição** e **proporcionalidade** como pedidos subsidiários — capturam o caso mesmo quando as demais teses caem.

## Súmulas e enunciados relevantes (conferir vigência via `jurisprudencia-stj-stf`)

Sob o **Citation Gate**: cite livremente os dispositivos legais acima. Para os enunciados abaixo, **confirme número e teor** antes de usar — não os reproduza de memória em peça protocolada.

- **Súmula 533/STJ** — para o reconhecimento da falta grave decorrente do cometimento de fato definido como crime doloso, é **imprescindível a instauração de PAD**, assegurada a defesa. [Confirmar teor e vigência via `jurisprudencia-stj-stf`.]
- **Súmula 526/STJ** — o reconhecimento de falta grave por **novo crime doloso** no curso da execução **dispensa o trânsito em julgado** da ação penal respectiva. [Confirmar — é enunciado que **restringe** a defesa; conheça-o para antecipar a contra-tese.]
- **Súmula 534/STJ** — a falta grave **interrompe** o prazo da **progressão** (não o do livramento — Súm. 441 — nem o de comutação/indulto — Súm. 535). [Interface com `execucao-progressao-regime`.]
- **Súmula 535/STJ** e **Súmula 441/STJ** — falta grave **não interrompe** comutação/indulto nem livramento condicional. [Úteis para limitar os **efeitos** da falta, se reconhecida.]
- **Súmula Vinculante 5/STF** — falta de defesa técnica no PAD **de servidor** não ofende a CF; **discutir sua não extensão** ao PAD da execução penal. [Central para a tese de defesa técnica — ver Passo 3.]
- **Exigência de defesa técnica no PAD executório** — há enunciado sumular do STJ nesse sentido. [NÃO VERIFICADO — confirmar número/teor via `jurisprudencia-stj-stf` antes de citar.]

> Prefira, na dúvida, **ensinar a tese e citar o dispositivo** a arriscar um número de acórdão ou informativo. Faltar precedente é reparável; **citar julgado inexistente é sanção real**.

## Documentos a reunir (instrução da defesa)

1. Cópia integral do **PAD/sindicância** (portaria, oitivas, ata, decisão).
2. **Procuração** e comprovante de intimação da defesa.
3. **Prova da individualização** (ou de sua ausência) da conduta imputada.
4. **Atestado de conduta carcerária** e **folha disciplinar** (para o art. 57 e a proporcionalidade).
5. **Cálculo/guia** para dimensionar o efeito da falta (perda de remição, data-base).
6. Documentos de **subsanção/reparação**, se houver.

## Erros comuns / anti-padrões

- Aceitar a falta grave sem checar a **taxatividade** do art. 50 (enquadramento por analogia).
- Deixar de arguir a **ausência de defesa técnica** por advogado no PAD (a nulidade mais frequente e mais forte).
- Confundir os regimes das súmulas: a **534** vale para a **progressão**; **não** aplicar seu efeito interruptivo ao **livramento** (Súm. 441) nem a indulto/comutação (Súm. 535).
- Esquecer a **prescrição** da falta (analogia ao menor prazo do art. 109, CP).
- Deixar de exigir **oitiva prévia da defesa** antes da homologação e da **regressão** (art. 118, §2º).
- Tratar a sanção/regressão como **automática**, sem dosimetria do art. 57.
- Citar **súmula ou acórdão de memória** — passar tudo por `jurisprudencia-stj-stf`.
- Ignorar a **Súmula 526/STJ** (dispensa de trânsito em julgado para falta por novo crime doloso) e ser surpreendido pela contra-tese.

## Checklist final (defesa)

- [ ] Conduta confrontada com o **rol taxativo** do art. 50 (há inciso exato?)?
- [ ] Verificado se houve **PAD instaurado**, com **oitiva** e **contraditório**?
- [ ] Arguida a **ausência de defesa técnica** por advogado (SV 5 não se aplica ao PAD executório)?
- [ ] Analisada a **prescrição** (data do fato x reconhecimento; menor prazo do art. 109, CP)?
- [ ] Exigida **oitiva prévia** da defesa antes da homologação/regressão (art. 118, §2º)?
- [ ] Enfrentada a **proporcionalidade** da sanção (art. 57 da LEP), afastado o automatismo?
- [ ] Prova da conduta **individualizada** (esp. celular — inc. VII)?
- [ ] Pedidos **escalonados** (não reconhecimento → nulidade → prescrição → sanção proporcional)?
- [ ] Súmulas/precedentes **conferidos** via `jurisprudencia-stj-stf` antes de citar?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

Este material é **rascunho técnico sob revisão humana obrigatória** — hipótese de trabalho a ser confirmada pelo advogado responsável antes de qualquer protocolo. Nenhuma súmula, tese ou precedente deve ser citado de memória: toda citação passa pela skill `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). A responsabilidade pela peça e pela estratégia é sempre do profissional (Código de Ética e Disciplina da OAB; Provimento 205/2021 na advocacia). Sigilo e LGPD: dados do assistido nunca em repositório público.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
