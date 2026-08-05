# Gabarito — Caso-ouro (FICTÍCIO) — Homicídio qualificado, réu pronunciado (plenário)

> **Arquivo do JUIZ.** Não deve ser carregado por nenhum step do pipeline nem
> lido por quem executa o squad. O enunciado está em `exemplo-homicidio-plenario.md`.

## Teses candidatas / Pontos de decisão

**Teses de plenário (hierarquizar):**

1. **Principal — legítima defesa (CP art. 25, c/c art. 23, II):** agressão injusta atual da vítima, armada com garrafa quebrada; lesão defensiva no réu; trajeto do projétil compatível com confronto frontal. Absolvição pelo **quesito genérico** (CPP art. 483, § 2º).
2. **Subsidiária — legítima defesa putativa / erro sobre a situação de fato (CP art. 20, § 1º)** ou **excesso na reação defensiva**. Atenção à técnica: o **CP art. 23, parágrafo único**, disciplina apenas o **excesso punível** (o agente "responderá pelo excesso doloso ou culposo"); o chamado *excesso escusável* por medo, surpresa ou perturbação de ânimo é **tese doutrinária** (inexigibilidade de conduta diversa), **sem previsão expressa no CP** — logo, não pode ser apresentada como texto de lei. Se acolhido o **excesso culposo**, a consequência é a **desclassificação** para homicídio culposo (**CP art. 121, § 3º**), o que exige quesito próprio de desclassificação (**CPP art. 483, § 4º**).
3. **Subsidiária — homicídio privilegiado (CP art. 121, § 1º):** domínio de violenta emoção logo em seguida a injusta provocação da vítima → **quesito de causa de diminuição** (CPP art. 483, § 3º, I).
4. **Subsidiária — afastamento do motivo fútil (CP art. 121, § 2º, II):** discussão prévia e prolongada por dívida afasta a futilidade; há ainda a **controvérsia** sobre a incompatibilidade entre o privilégio e a qualificadora **subjetiva** (mencionar a tese, **sem** número de precedente).
5. **Quanto ao conexo (Lei 10.826/2003, art. 14):** série de quesitos **autônoma**, votada após a do crime doloso contra a vida.

**Pontos de decisão / impugnação que o caso exige:**

- A qualificadora do **art. 121, § 2º, IV** foi **excluída no acórdão do RESE**: quesito sobre ela é **incabível** (CPP art. 483, § 3º, II — só qualificadora reconhecida na pronúncia ou em decisão posterior que julgou admissível a acusação).
- Quesito **complexo** (juntando motivo fútil e surpresa, ou tese defensiva e desclassificação) viola o CPP art. 482, parágrafo único (proposições **afirmativas, simples e distintas**).
- O quesito absolutório é **único e genérico** — não pode ser desdobrado por tese.
- Vedações dos debates: **CPP art. 478** (não usar a pronúncia/decisões posteriores como argumento de autoridade, nem o silêncio do réu em seu prejuízo), **art. 479** (documento não juntado com 3 dias úteis de antecedência), **art. 480** (pedir indicação da folha lida).
- Tempos do **art. 477** (1h30 para cada parte; 1h de réplica e outro tanto de tréplica) e o cuidado com a tréplica.
- **Ordem do quesito de desclassificação:** sustentada a desclassificação para crime de competência do juiz singular (p. ex., homicídio culposo por excesso culposo), o quesito é respondido **após o 2º ou o 3º quesito, conforme o caso** (**CPP art. 483, § 4º**); havendo divergência sobre a tipificação **dentro** da competência do júri, o quesito vem **após o 2º** (**art. 483, § 5º**).
- Reclamação/requerimento sobre os quesitos na forma do **art. 484**, com registro em **ata**; nulidade ocorrida **no julgamento em plenário** deve ser arguida **logo depois de ocorrer** (**CPP art. 571, VIII**), sob pena de preclusão — as posteriores à pronúncia, mas anteriores ao julgamento, seguem o art. 571, V (logo depois de anunciado o julgamento e apregoadas as partes).
- Respostas contraditórias → **CPP art. 490**.
- Em caso de condenação: **CPP art. 492**, inclusive a **controvérsia** sobre a execução provisória na hipótese de pena igual ou superior a 15 anos (art. 492, I, "e"), e o cabimento de apelação por decisão manifestamente contrária à prova dos autos (**CPP art. 593, III, "d"**) — tudo **sem citar número de precedente**.

## O que um bom output deve conter (referência para o juiz)

Um `output/plenario.md` que (i) registre expressamente a **fase corrente** — réu pronunciado, preclusa a pronúncia — e entregue a **peça de plenário** (e não alegações de 1ª fase); (ii) traga **tese principal e subsidiárias hierarquizadas** com o roteiro de debates ancorado nas provas por folha e nas vedações dos arts. 477-480 do CPP; (iii) apresente a **quesitação completa na ordem cogente do art. 483** (materialidade → autoria → [quesito de desclassificação, se sustentada — § 4º] → "O jurado absolve o acusado?" → causa de diminuição → qualificadora), com **série autônoma para o crime conexo**, redação em proposições afirmativas, simples e distintas (art. 482, parágrafo único) e **impugnações antecipadas** — sobretudo contra quesito sobre a qualificadora já excluída no RESE —, com registro em ata (art. 484) e alerta de preclusão (art. 571, VIII); (iv) tenha **toda citação verificada**, sem marcas `[NÃO VERIFICADO]`/`[DIVERGENTE]` e **sem número de precedente inventado**; e (v) passe pela **revisão jurídica isolada** com veredito **APPROVE** — conforme os `success_criteria` do `squad.yaml`.

