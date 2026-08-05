# Gabarito — Caso-ouro (FICTÍCIO) — ANPP em estelionato

> **Arquivo do JUIZ.** Não deve ser carregado por nenhum step do pipeline nem
> lido por quem executa o squad. O enunciado está em `exemplo-anpp-estelionato.md`.

## Teses candidatas / Pontos de decisão

- **ANPP (CPP art. 28-A)** — instituto principal: sem violência/grave ameaça, pena
  mínima de 1 ano (inferior a 4 anos pelo cálculo do § 1º) e confissão disponível.
- **Óbices do § 2º a afastar um a um:** (I) transação penal não é cabível — a pena
  máxima de 5 anos afasta a competência do JECRIM; (II) não é reincidente, e o
  inquérito arquivado de 2024 não configura conduta habitual, reiterada ou
  profissional — há controvérsia sobre o peso de inquéritos sem condenação
  definitiva, e o entendimento invocado deve sair da pesquisa verificada (acervo
  primeiro, web depois), nunca de memória; (III) a transação de 2017 é anterior ao
  quinquênio contado do fato (12/03/2026); (IV) não há violência doméstica.
- **Transação penal (Lei 9.099/95 art. 76)** — inviável: a pena máxima de 5 anos
  ultrapassa o teto do art. 61 da mesma lei.
- **Suspensão condicional do processo (Lei 9.099/95 art. 89)** — cabível em tese
  (pena mínima igual a 1 ano), mas só depois do oferecimento/recebimento da
  denúncia; deve ser tratada como alternativa subsidiária, já que o ANPP evita o
  processo. Ponto de decisão explícito.
- **Colaboração premiada (Lei 12.850/2013)** — inviável: são apenas dois agentes,
  sem organização criminosa nos termos do art. 1º, § 1º, da lei, e não há resultado
  do art. 4º a entregar.
- **Condições a calibrar:** reparação do dano (art. 28-A, I) de R$ 8.000 com
  correção, parcelada conforme capacidade econômica; prestação de serviços à
  comunidade (inciso III, c/c CP art. 46) pela pena mínima de 1 ano diminuída de
  1/3 a 2/3 — ou seja, **entre 4 e 8 meses**; prestação pecuniária (inciso IV,
  c/c CP art. 45, cujo § 1º fixa o piso de 1 salário mínimo) em valor proporcional
  à renda declarada.
- **Forma e homologação:** o acordo é formalizado por escrito e firmado pelo membro
  do MP, pelo investigado e pelo defensor (art. 28-A, § 3º, do CPP), com posterior
  audiência de homologação em que o juiz verifica voluntariedade e legalidade
  (§ 4º).
- **Riscos a registrar:** a confissão exigida pelo ANPP pode ser usada contra o
  cliente se o acordo for descumprido e a denúncia vier a ser oferecida; a proposta
  é privativa do MP, cabendo, na recusa, o requerimento de remessa dos autos ao
  órgão superior (art. 28-A, § 14, do CPP). Nenhuma promessa de resultado.
- **Pontos éticos a checar na revisão:** conflito de interesses (escritório livre em
  relação à vítima e ao coinvestigado); tratativas com o coinvestigado somente por
  meio do advogado dele; consentimento informado escrito quanto à confissão e às
  condições; dados do caso mantidos em `acervo/casos/` (sigiloso, fora do
  repositório público); entrega tratada como rascunho sujeito a revisão humana
  obrigatória, sem garantia de aceitação pelo MP ou de homologação.

## O que um bom output deve conter (referência para o juiz)

Manifestação/minuta de **ANPP dirigida ao Ministério Público** (não ao juízo), com o
instituto confirmado e os concorrentes descartados por critério legal; demonstração
requisito a requisito do art. 28-A do CPP — ausência de violência ou grave ameaça,
pena mínima inferior a 4 anos pelo cálculo do § 1º, confissão formal e
circunstancial — e afastamento expresso dos quatro óbices do § 2º; condições
propostas proporcionais e dentro dos limites legais (reparação do dano, prestação de
serviços entre 4 e 8 meses, prestação pecuniária acima do piso do CP art. 45, § 1º),
cada uma com fundamento vinculado à pesquisa; registro do consentimento informado
quanto à confissão, sem promessa de resultado; pedido subsidiário de remessa ao
órgão superior (§ 14) e menção à formalização escrita (§ 3º) e à homologação
judicial (§ 4º). Todo entendimento jurisprudencial invocado deve vir da pesquisa
verificada, sem citação marcada como `[NÃO VERIFICADO]`/`[DIVERGENTE]`, e a revisão
jurídica isolada deve fechar em veredito APPROVE com a checagem ética (conflito de
interesses, sigilo dos dados do caso, consentimento informado, revisão humana
obrigatória) — conforme os `success_criteria` do `squad.yaml`.

