# Gabarito — Caso-ouro (FICTÍCIO) — Estelionato em inquérito (novo cliente)

> **Arquivo do JUIZ.** Não deve ser carregado por nenhum step do pipeline nem
> lido por quem executa o squad. O enunciado está em `exemplo-estelionato-inquerito.md`.

## Pontos de decisão (o que a triagem tem de enfrentar)

- **Conflito de interesses:** dois investigados do mesmo inquérito (Ricardo e Damares) com versões que se acusam mutuamente — as defesas são colidentes e a defesa conjunta pelo mesmo advogado é inviável; a triagem deve concluir que só um pode ser assistido, resguardado o sigilo profissional do que o outro informou na ligação de 17/07/2026 (checagem do EAOAB, art. 15, § 6º, e CED, arts. 19 a 21 — conflito entre constituintes e dever de sigilo). Quanto à vítima e a seus sócios, a checagem contra a base de clientes deve ser explicitada (livre / impedido), não presumida.
- **Prescrição (CP art. 109):** o estelionato do art. 171, caput, é apenado com reclusão de 1 a 5 anos e multa; a pena máxima de 5 anos é superior a 4 e não excede 8 → prazo prescricional de 12 anos (CP art. 109, III), contado da consumação (CP art. 111, I; último fato em 26/08/2024) e ainda sem marco interruptivo, já que a instauração de inquérito não consta do rol do CP art. 117. **Não** prescrito (termo final em 2036) — a triagem deve dizer isso com o cálculo, não apenas "não prescrito".
- **Decadência (a tese mais sensível do caso):** o estelionato aqui é de ação penal pública **condicionada à representação** (CP art. 171, § 5º — a Núcleo Alfa é pessoa jurídica de direito privado e não se enquadra em nenhuma das exceções dos incisos I a IV). O prazo decadencial é de 6 meses contados do dia em que a vítima soube quem era o autor do crime (CPP art. 38). Se o marco for a auditoria encerrada em 12/11/2025, a representação de 20/01/2026 é tempestiva; se for o e-mail interno de 30/04/2025, que já apontava nominalmente o Ricardo, o prazo teria se esgotado em 30/10/2025, antes da representação. Ponto controverso a levantar como tese, **sem** afirmar desfecho.
- **Viabilidade:** fase de inquérito, sem preso, prova essencialmente documental e disputa entre corréus; prazo curto até 04/08/2026 (defesa técnica no depoimento).
- **Caminho negocial:** cabimento **em tese** de acordo de não persecução penal (CPP art. 28-A) — pena mínima de 1 ano, inferior a 4, e crime sem violência ou grave ameaça —, condicionado à confissão formal e circunstanciada do investigado e à reparação do dano à vítima (CPP art. 28-A, caput e inciso I), o que colide com a negativa do cliente. Registrar como cenário, nunca como promessa.
- **Honorários:** cliente com capacidade de pagamento; escopo = atuação no inquérito (acompanhamento do depoimento, requerimentos, eventual ANPP), com previsão de novo ajuste se houver denúncia.

### Respostas esperadas nos checkpoints (para tornar a avaliação reprodutível)

- **Step 03 (decisão):** opção **1 — ACEITAR** o caso de Ricardo Menezes Fialho, declinando de Damares Sampaio por conflito.
- **Step 06 (aprovação):** opção **1 — Aprovar e enviar**.

## O que um bom output deve conter (referência para o juiz)

Ficha de triagem completa em 8 blocos extraída **apenas** destes dados (campos sem informação marcados como "a definir"); verificação explícita de conflito de interesses (EAOAB, art. 15, § 6º, com o conflito entre corréus enfrentado e a base de clientes checada), da prescrição pelo CP art. 109 com o prazo calculado e da viabilidade (êxito / prazo / custo / risco); recomendação e decisão de aceitar fundamentadas, sem promessa de resultado; e, no caminho "aceitar", o pacote de onboarding (checklist com contrato, procuração ad judicia et extra do CPC art. 105 e termo LGPD da Lei 13.709/2018, além de cadência e SLA), a proposta de honorários coerente com a viabilidade (entrada, parcelamento, custas separadas e minuta de contrato conforme o EAOAB art. 22) e o e-mail de boas-vindas com os mesmos valores e condições aprovados — conforme os `success_criteria` do `squad.yaml`.

