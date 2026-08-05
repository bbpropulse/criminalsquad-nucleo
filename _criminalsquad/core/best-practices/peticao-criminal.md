---
name: "Peça Criminal (1º grau)"
description: "Estrutura, técnica e padrões de qualidade para redação de peças penais de primeiro grau"
whenToUse: |
  Agentes que redigem peças penais de primeiro grau (resposta à acusação, defesa preliminar, queixa-crime, representação, requerimentos, memoriais/alegações finais).
version: "1.0.0"
---

## Princípios Fundamentais

1. **Endereçamento correto ao juízo competente.** Toda peça penal começa pela autoridade a quem é dirigida. O cabeçalho deve identificar a vara e a comarca exatas (ex.: "Excelentíssimo Senhor Doutor Juiz de Direito da 2ª Vara Criminal da Comarca de São Paulo/SP"). A competência é fixada pelas regras dos arts. 69 a 83 do CPP (lugar da infração, domicílio do réu, prevenção, conexão e continência) e, em crimes dolosos contra a vida, pela competência do Tribunal do Júri (CF, art. 5º, XXXVIII). Endereçar à autoridade errada gera devolução, retarda o feito e, em sede de defesa, pode caracterizar incompetência a ser arguida como preliminar.

2. **Qualificação completa das partes.** Identifique réu, querelante, querelado ou representante com nome civil, nacionalidade, estado civil, profissão, RG, CPF e endereço, na medida do que constar dos autos. Na denúncia/queixa, a qualificação do acusado é requisito do art. 41 do CPP; na defesa, o cliente já está "qualificado nos autos" — basta remeter à qualificação existente. Dados incompletos comprometem a citação, a individualização da conduta e a própria validade da peça inicial.

3. **Narrativa fática estratégica.** A seção "Dos Fatos" não é cópia da denúncia: é a versão da parte, em ordem cronológica, clara e coerente com a tese jurídica que será sustentada. Na acusação, descreve-se o fato criminoso com todas as suas circunstâncias (art. 41 do CPP); na defesa, apresenta-se o contraponto, expondo o que efetivamente ocorreu e plantando os elementos que sustentarão atipicidade, excludentes ou dúvida razoável. Fato bem narrado é metade da tese.

4. **Fundamentação jurídica com âncora legal.** Toda tese deve estar amarrada a dispositivo expresso. Não se argumenta "no vácuo": cita-se o artigo do CP, do CPP, da CF ou a súmula que ampara a alegação. Atipicidade material remete ao princípio da insignificância (HC 84.412/SP, STF); excludentes de ilicitude ao art. 23 do CP; excludentes de culpabilidade aos arts. 26 a 28 do CP; prescrição ao art. 109 do CP; nulidades aos arts. 564 e seguintes do CPP. A âncora legal transforma opinião em argumento jurídico.

5. **Princípio da eventualidade.** Tudo o que puder ser alegado deve ser alegado na mesma oportunidade, sob pena de preclusão. As teses são deduzidas de forma escalonada: pede-se o principal e, "subsidiariamente" ou "sucessivamente", as alternativas. Assim, levantam-se todas as preliminares cabíveis (art. 395 do CPP), todas as causas de absolvição sumária (art. 397 do CPP) e, por eventualidade, requer-se a instrução. A defesa que aposta numa única tese e silencia sobre as demais joga contra o próprio cliente.

6. **Pedidos claros e exauríveis.** O capítulo "Dos Pedidos" deve fechar a peça com requerimentos objetivos, numerados e completos: recebimento/processamento, mérito (acolhimento da preliminar, absolvição, rejeição, condenação na inicial acusatória), produção de provas e oitiva de testemunhas. Pedido genérico ou incompleto não obriga o juízo a deferir o que não foi requerido. O que não se pede, não se obtém.

7. **Tempestividade e capacidade postulatória.** A peça deve indicar e respeitar o prazo legal (resposta à acusação: 10 dias após citação, art. 396 do CPP; defesa prévia na Lei de Drogas: 10 dias, art. 55 da Lei 11.343/2006; resposta do funcionário público: 15 dias, art. 514 do CPP). Deve estar acompanhada de procuração ou instrumento de mandato, salvo quando a defesa decorrer de nomeação. Peça intempestiva ou sem habilitação não produz efeito.

## Estrutura da Peça

A anatomia de uma peça penal de primeiro grau segue uma ordem lógica que conduz o juízo do cabeçalho aos pedidos. Cada bloco tem função própria:

- **Endereçamento** — autoridade judiciária, vara e comarca competentes; número do processo e nome das partes.
- **Preâmbulo/qualificação** — identificação da parte, capacidade postulatória (advogado, procuração inclusa), verbo de apresentação ("vem apresentar", "vem oferecer") e fundamento legal da peça, com afirmação de tempestividade.
- **Dos Fatos** — relato cronológico da versão da parte, base fática da tese.
- **Do Direito** — dividido em (a) preliminares, quando cabíveis, e (b) mérito.
  - *Preliminares de rejeição (art. 395 do CPP):* inépcia da inicial (art. 41 c/c art. 395, I), ausência de pressuposto processual ou condição da ação (art. 395, II), falta de justa causa (art. 395, III). Some-se incompetência, litispendência e coisa julgada.
  - *Absolvição sumária (art. 397 do CPP):* I — existência manifesta de excludente de ilicitude (art. 23 do CP); II — existência manifesta de excludente de culpabilidade, salvo inimputabilidade (arts. 26 a 28 do CP); III — fato que não constitui crime (atipicidade); IV — extinta a punibilidade (prescrição e demais causas do art. 107 do CP).
  - *Mérito:* tese central (atipicidade material, negativa de autoria, dúvida razoável, excludentes), com fundamentação legal e jurisprudencial.
- **Das Provas** — rol de testemunhas (até 8 no rito ordinário — art. 401 do CPP; até 5 no rito sumário — art. 532 do CPP; até 5 na defesa prévia da Lei de Drogas), distinguindo testemunhas compromissadas, referidas (art. 209, § 1º, do CPP) e informantes (art. 206 do CPP); requerimento de perícia com quesitos; acareação, reconhecimento (art. 226 do CPP) e demais diligências.
- **Dos Pedidos** — pedido principal e pedidos subsidiários por eventualidade.
- **Fechamento** — "Termos em que pede deferimento", local, data, assinatura do advogado e número de inscrição na OAB.

Esqueleto de referência:

```
EXMO. SR. DR. JUIZ DE DIREITO DA ___ª VARA CRIMINAL DA COMARCA DE ___

Processo nº ___

FULANO DE TAL, já qualificado nos autos da ação penal que lhe move
o Ministério Público, por seu advogado que esta subscreve (procuração
inclusa), vem, respeitosamente, à presença de Vossa Excelência, com
fundamento nos arts. 396 e 396-A do CPP, no prazo legal de 10 (dez)
dias, apresentar

                        RESPOSTA À ACUSAÇÃO

pelas razões de fato e de direito a seguir expostas.

I — DOS FATOS
[versão da defesa, relato cronológico e objetivo]

II — DO DIREITO
2.1. DAS PRELIMINARES
   2.1.1. Inépcia da denúncia (art. 41 c/c art. 395, I, do CPP)
   2.1.2. Falta de justa causa (art. 395, III, do CPP)
   2.1.3. [incompetência / litispendência / outras cabíveis]
2.2. DA ABSOLVIÇÃO SUMÁRIA (art. 397 do CPP)
   [excludente de ilicitude — art. 23 CP / excludente de culpabilidade
    — arts. 26-28 CP / atipicidade / extinção da punibilidade — art. 107 CP]
2.3. DO MÉRITO
   [tese central + fundamentação legal e jurisprudencial]

III — DAS PROVAS
   - Rol de testemunhas (até 8 — art. 401 do CPP)
   - Perícia requerida, com quesitos (em anexo, se for o caso)
   - Demais diligências (acareação, reconhecimento — art. 226 CPP)

IV — DOS PEDIDOS
   a) o recebimento e processamento da presente resposta;
   b) o acolhimento das preliminares, com a rejeição da denúncia
      (art. 395 do CPP);
   c) subsidiariamente, a absolvição sumária (art. 397 do CPP);
   d) sucessivamente, a designação de audiência de instrução, com a
      oitiva das testemunhas arroladas e a produção das provas requeridas.

Termos em que pede deferimento.
[Local], [data].
[Advogado] — OAB/__ nº ___
```

## Diretrizes de Redação

- **Mantenha tom técnico-formal e impessoal.** Use linguagem jurídica precisa, tratamento respeitoso ao juízo ("Vossa Excelência") e estilo sóbrio. Evite coloquialismos, ironias e adjetivação excessiva; o peso vem do argumento, não da retórica inflamada.
- **Cite o dispositivo legal sempre que afirmar uma tese.** Cada alegação deve vir acompanhada do artigo, inciso ou parágrafo que a sustenta (CP, CPP, CF, leis especiais). Afirmação sem âncora normativa é frágil e facilmente rejeitada.
- **Não deixe precluir provas e testemunhas.** Arrole todas as testemunhas no momento próprio (resposta à acusação ou defesa prévia) e requeira desde logo as perícias e diligências necessárias. A omissão acarreta preclusão, e o juízo não está obrigado a produzir prova não requerida.
- **Use linguagem objetiva e períodos curtos.** Prefira frases diretas a parágrafos longos e subordinados. Clareza é técnica de persuasão: o magistrado precisa apreender a tese sem reler.
- **Estruture a peça com títulos e numeração.** Divida em seções (Dos Fatos, Do Direito, Das Provas, Dos Pedidos) e numere subtópicos. A organização facilita a leitura e demonstra domínio técnico.
- **Confronte a acusação concreta.** A defesa deve dialogar com os fatos e provas efetivamente imputados na denúncia, e não apresentar tese genérica. Ataque o ponto fraco específico da imputação (frágil lastro probatório, contradição entre depoimentos, reconhecimento irregular — art. 226 do CPP).
- **Escalone as teses por eventualidade.** Apresente o pedido principal e, em seguida, os subsidiários com os marcadores "subsidiariamente" e "sucessivamente". Isso preserva todas as linhas de defesa e respeita o princípio da eventualidade.
- **Requeira perícia sempre com quesitos.** Ao pedir exame pericial (arma, local, documentos, exame contábil, corpo de delito), formule os quesitos que orientarão o perito. Perícia sem quesitos perde força probatória e pode ser indeferida.
- **Junte os documentos com a peça.** Na resposta à acusação, é o momento de juntar documentos (art. 396-A do CPP): procuração, comprovantes de álibi, laudos. Documento mencionado e não juntado não convence.
- **Revise tempestividade, qualificação e assinatura.** Antes de protocolar, confirme prazo, dados das partes, fundamento legal, presença do rol após a assinatura (quando exigido pelo rito) e a inscrição na OAB. Erros formais comprometem peça tecnicamente sólida.

## Quality Criteria

- [ ] Endereçamento correto ao juízo competente (vara e comarca), conforme os arts. 69 a 83 do CPP
- [ ] Partes qualificadas (ou remissão à qualificação dos autos) e capacidade postulatória demonstrada (procuração/mandato)
- [ ] Tempestividade indicada e respeitada, com o fundamento legal da peça (ex.: arts. 396 e 396-A do CPP)
- [ ] Seção "Dos Fatos" com narrativa cronológica e coerente com a tese sustentada
- [ ] Todas as preliminares cabíveis levantadas (inépcia, falta de justa causa, incompetência etc. — art. 395 do CPP)
- [ ] Causas de absolvição sumária analisadas quando aplicáveis (excludentes, atipicidade, extinção da punibilidade — art. 397 do CPP)
- [ ] Fundamentação amparada em dispositivos do CPP/CP/CF e súmulas pertinentes
- [ ] Rol de testemunhas presente, dentro do limite do rito (até 8 — art. 401 do CPP), com qualificação
- [ ] Perícias e diligências requeridas, e perícia acompanhada de quesitos
- [ ] Pedidos claros, numerados, com pedido principal e pedidos subsidiários por eventualidade
- [ ] Fechamento completo: "pede deferimento", local, data, assinatura e número da OAB

## Anti-Patterns

- **Esquecer o rol de testemunhas → preclusão.** A omissão do rol na resposta à acusação ou na defesa prévia acarreta a perda do direito de produzir prova testemunhal (art. 401 do CPP). É um dos erros mais graves e irreversíveis da defesa de primeiro grau.
- **Pedir perícia sem quesitos.** Requerer exame pericial genérico, sem formular os quesitos, esvazia a prova e dá margem ao indeferimento ou a laudo inútil para a tese. Quesitos bem elaborados direcionam o resultado da perícia.
- **Peça genérica que não confronta a acusação concreta.** Defesa de modelo, que repete teses abstratas e não dialoga com os fatos e provas imputados na denúncia, falha em demonstrar a fragilidade específica da imputação e enfraquece a persuasão perante o juízo.
- **Misturar teses incompatíveis sem eventualidade.** Sustentar simultaneamente negativa de autoria e legítima defesa (que pressupõe a autoria) sem escaloná-las por eventualidade gera contradição interna e mina a credibilidade da peça. As teses alternativas devem vir como subsidiárias.
- **Não levantar todas as preliminares cabíveis.** Deixar de arguir inépcia, falta de justa causa, incompetência ou nulidades no momento próprio acarreta preclusão e desperdiça oportunidades de extinção precoce do feito (arts. 395 e 397 do CPP).
- **Pedidos incompletos ou genéricos.** Encerrar a peça sem requerer expressamente recebimento, produção de provas, oitiva de testemunhas e o resultado de mérito pretendido deixa o juízo sem o que decidir. O que não se pede, não se defere.
- **Confundir o momento processual da peça.** Tratar resposta à acusação (após o recebimento da denúncia — arts. 396 e 396-A do CPP) como defesa preliminar (anterior ao recebimento — art. 514 do CPP, art. 55 da Lei 11.343/2006), ou vice-versa, leva a fundamento legal errado e a teses no lugar indevido (ex.: prescrição como preliminar na defesa prévia e como absolvição sumária na resposta à acusação).
- **Inventar jurisprudência ou citar dispositivo inexistente.** Atribuir entendimento a tribunal sem respaldo real, ou citar artigo equivocado, destrói a credibilidade da peça e pode configurar litigância de má-fé. Cite apenas dispositivos e súmulas efetivamente vigentes e verificados.
