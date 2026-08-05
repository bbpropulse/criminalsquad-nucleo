---
name: resposta-a-acusacao
description: >-
  Use ao elaborar, redigir, estruturar ou revisar a peça criminal de RESPOSTA À ACUSAÇÃO do rito
  comum (ordinário e sumário) — a defesa apresentada em 10 dias DEPOIS do recebimento da denúncia ou
  queixa, nos termos dos arts. 396 e 396-A do CPP. Gatilhos: resposta à acusação, defesa após
  citação, art. 396, art. 396-A, absolvição sumária, art. 397, arrolar testemunhas na defesa, réu
  citado. Não use para decisão final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["resposta-a-acusacao", "resposta acusacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
  eval_case_ids: ["csq-v5-resposta-a-acusacao"]
---

# Resposta à Acusação (CPP, arts. 396 e 396-A)

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

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 395 a 397, 400, 401 e 532 do CPP na fonte oficial antes de peticionar — a sistemática atual vem da **Lei 11.719/2008**, e citar o rito anterior a ela é erro grave. Toda súmula, tema ou precedente passa **obrigatoriamente** pelo gate `verificacao-citacoes` antes do uso. Na dúvida, **omitir vence inventar**.

## O que é, e por que ela não pode faltar

A denúncia **já foi recebida**. O acusado foi citado e tem **10 dias** para responder por escrito (art. 396, *caput*). Esta é a **primeira** manifestação da defesa dentro da relação processual já instaurada — e é **obrigatória**: não apresentada no prazo, ou não constituído defensor, o juiz **nomeia defensor** e lhe abre vista por 10 dias (art. 396-A, § 2º). Processo que corre sem resposta à acusação é processo sem defesa.

**Citação por edital:** o prazo **não corre** da publicação — começa a fluir do **comparecimento pessoal** do acusado ou do defensor constituído (art. 396, parágrafo único).

## Não confunda com a Resposta Preliminar

É o erro de enquadramento mais comum, e ele troca o pedido da peça:

| | **Resposta à Acusação** | **Resposta Preliminar** |
|---|---|---|
| Momento | **Depois** do recebimento | **Antes** do recebimento |
| Ato que a convoca | **Citação** | **Notificação** |
| Base | CPP 396 e 396-A | CPP 514; Lei 9.099 art. 81; Lei 11.343 art. 55 |
| Desfecho possível | **Absolvição sumária** (art. 397) | **Rejeição / não recebimento** |
| Testemunhas | até **8** (ordinário, art. 401) | conforme o rito especial |

Pedir "rejeição da denúncia" aqui é pedir o que a fase já superou; pedir "absolvição sumária" na resposta preliminar é pedir o que a fase ainda não permite. Antes de redigir, confirme **qual ato citou o cliente** — citação ou notificação. Ver skill `resposta-preliminar`.

## O que cabe na peça (art. 396-A, *caput*)

O dispositivo é generoso e a defesa deve usá-lo por inteiro. Na resposta o acusado poderá:

1. **Arguir preliminares** — incompetência, litispendência, coisa julgada, ilegitimidade, nulidades da investigação e do recebimento, inépcia remanescente da inicial.
2. **Alegar tudo o que interesse à sua defesa** — cláusula aberta; é onde entram atipicidade, excludentes, negativa de autoria, teses de prova.
3. **Oferecer documentos e justificações.**
4. **Especificar as provas pretendidas** — perícia, diligências, acareação, prova emprestada.
5. **Arrolar testemunhas**, qualificando-as e requerendo intimação quando necessário.

**Exceções** (suspeição, incompetência, litispendência, ilegitimidade, coisa julgada) correm **em apartado**, na forma dos arts. 95 a 112 (art. 396-A, § 1º) — não as sepulte no corpo da resposta.

## ⚠️ O ponto que mais custa caro: as testemunhas

**Arrolar testemunha é ônus desta peça.** É aqui que a defesa indica quem quer ouvir; deixar para depois é arriscar a preclusão da prova oral inteira — o dano mais grave e mais irreversível que uma resposta à acusação mal feita produz.

- **Rito ordinário:** até **8** testemunhas de defesa (art. 401).
- **Rito sumário:** até **5** (art. 532).
- **Não entram na conta** as que não prestam compromisso e as **referidas** (art. 401, § 1º) — informante e testemunha referida são espaço extra que a defesa costuma desperdiçar.
- Qualifique cada uma e **requeira a intimação** quando não puder trazê-la; testemunha arrolada sem pedido de intimação é testemunha que pode não comparecer.

## Absolvição sumária — quatro hipóteses, e só quatro (art. 397)

Cumprido o art. 396-A, o juiz **deverá** absolver sumariamente quando verificar:

- **I** — existência **manifesta** de causa excludente da **ilicitude** do fato;
- **II** — existência **manifesta** de causa excludente da **culpabilidade** do agente, **salvo inimputabilidade**;
- **III** — que o fato narrado **evidentemente não constitui crime**;
- **IV** — **extinta a punibilidade** do agente.

> ⚠️ **Insuficiência de prova NÃO é hipótese de absolvição sumária.** Prova frágil se resolve em **sentença** (art. 386), depois da instrução — não aqui. Pedir absolvição sumária "para fechar a estrutura da peça", quando o vício é probatório, é formular pedido que o juízo indefere de plano e enfraquecer o que a peça tem de bom.
>
> A inimputabilidade também está **fora**: o inciso II a excetua expressamente, porque a absolvição imprópria com medida de segurança pressupõe instrução.
>
> Note o rigor dos advérbios — **"manifesta"**, **"evidentemente"**. A lei exige que o vício salte dos autos como estão. Se a tese depende de produzir prova, ela é tese de mérito para as alegações finais, e o que se pede aqui é **a produção dessa prova**.

## Estrutura da peça

**Endereçamento** ao juízo do processo (não ao tribunal), com número dos autos, nome e qualificação do acusado, e o defensor com OAB.

**I — Síntese da imputação.** Curta e fiel: o que a denúncia narra e como capitula. Não repita a denúncia inteira.

**II — Preliminares** (se houver). Uma por tópico, cada qual com o pedido próprio. Nulidade da investigação, quebra de cadeia de custódia, incompetência, inépcia remanescente.

**III — Do mérito.** Aqui mora a tese: atipicidade (formal ou material), excludente, negativa de autoria, erro, ausência de dolo. **Diga desde já se a tese comporta absolvição sumária ou se depende de instrução** — essa honestidade organiza o pedido e evita o pedido impossível.

**IV — Das provas.** Especifique o que quer produzir e **por quê**: cada diligência ligada a um ponto controvertido. Prova pedida sem finalidade declarada é prova indeferida.

**V — Dos pedidos.** Na ordem: acolhimento das preliminares → absolvição sumária **quando couber** em uma das quatro hipóteses → subsidiariamente, o prosseguimento com a produção das provas especificadas e a intimação das testemunhas arroladas.

**Rol de testemunhas** ao final, numerado, com qualificação e endereço, indicando quais precisam de intimação.

## Checklist final

- [ ] Confirmado que o cliente foi **citado** (e não notificado) — a peça é mesmo a resposta à acusação?
- [ ] Prazo de **10 dias** conferido; se citação por edital, contado do **comparecimento** (art. 396, p.ú.)?
- [ ] **Testemunhas arroladas** com qualificação e pedido de intimação, dentro do teto do rito (8 no ordinário; 5 no sumário)?
- [ ] Informantes e referidas aproveitados **fora** do teto (art. 401, § 1º)?
- [ ] Preliminares separadas do mérito, e **exceções** deduzidas em apartado (art. 396-A, § 1º)?
- [ ] Pedido de absolvição sumária formulado **apenas** se o caso se enquadra em uma das quatro hipóteses do art. 397 — e **não** por insuficiência de prova?
- [ ] Cada prova requerida está **ligada a um ponto controvertido** declarado?
- [ ] Documentos e justificações juntados (art. 396-A)?
- [ ] Toda lei, súmula ou precedente citado passou pelo gate `verificacao-citacoes`?
- [ ] Peça protocolável: endereçamento, qualificação, fecho, data, assinatura e **OAB**?

## Lembretes finais

- **A peça é obrigatória** — sua falta leva à nomeação de defensor (art. 396-A, § 2º), e processo sem defesa é nulo.
- **Arrolar testemunha é agora.** É o único ônus desta peça que, perdido, não se recupera.
- **Quatro hipóteses de absolvição sumária, taxativas.** Prova fraca é art. 386, em sentença.
- **Enfrentar o art. 397 não é o mesmo que pedi-lo.** Diga por que cabe ou por que não cabe — as duas respostas fortalecem a peça; o silêncio, não.
- **Rascunho técnico para revisão humana obrigatória.** A decisão e a assinatura são do(a) advogado(a) responsável.
