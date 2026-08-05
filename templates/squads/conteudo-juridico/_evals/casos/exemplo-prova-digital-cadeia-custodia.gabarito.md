# Gabarito — Caso-ouro (FICTÍCIO) — Prova digital e cadeia de custódia

> **Arquivo do JUIZ.** Não deve ser carregado por nenhum step do pipeline nem
> lido por quem executa o squad. O enunciado está em `exemplo-prova-digital-cadeia-custodia.md`.

## Pontos de decisão

### Checkpoints humanos (respostas simuladas, para a execução ser reprodutível)

- **Step 03 (selecionar tema):** escolher o tema mais bem ranqueado **cuja fonte oficial esteja
  efetivamente verificada** (URL acessível de STJ/STF/Planalto). Se o primeiro colocado do ranking
  tiver fonte que não se confirma, descer para o próximo — nunca publicar fonte não conferida.
- **Step 05 (aprovar copy):** aprovar (opção 1) **somente** se o gate ético passar sem nenhum veto;
  caso contrário, devolver ao Step 04 com o veto apontado.
- **Step 07 (aprovar imagens):** aprovar os slides renderizados antes de qualquer publicação.
- **Step 09 (publicar):** publicação apenas com `verdict: APPROVE` no Step 08.

### Base normativa que o conteúdo deve amarrar (dispositivos reais)

- **CPP, art. 158-A** — define cadeia de custódia como o conjunto de procedimentos que documenta a
  história cronológica do vestígio (redação da Lei 13.964/2019).
- **CPP, art. 158-B** — lista as **dez etapas** de rastreamento do vestígio, do reconhecimento e
  isolamento ao armazenamento e descarte (incisos I a X).
- **CPP, art. 157** — inadmissibilidade das provas ilícitas e, no § 1º, das provas dela derivadas.
- **CF, art. 5º, XII e LVI** — sigilo das comunicações e inadmissibilidade de provas obtidas por
  meios ilícitos.
- **Lei 9.296/1996, art. 1º, parágrafo único** — a lei da interceptação aplica-se também ao
  **fluxo de comunicações em sistemas de informática e telemática** (reserva de jurisdição).
- **Lei 12.965/2014 (Marco Civil da Internet), art. 7º, II e III** — inviolabilidade e sigilo do
  fluxo das comunicações pela internet (II) e das **comunicações privadas armazenadas** (III),
  salvo por ordem judicial.
- **Provimento 205/2021 (CFOAB)** — moldura ética da publicidade que o conteúdo tem de respeitar.

### Ponto sensível (tratar sem afirmar o que não está pacificado)

Há **controvérsia** sobre a necessidade de autorização judicial específica para o acesso ao
conteúdo de aparelho apreendido em flagrante, e sobre a **consequência processual** da quebra da
cadeia de custódia (nulidade/inadmissibilidade x valoração do peso da prova). O copy deve
apresentar isso como **debate em aberto**, sem número de precedente citado de memória e **sem**
afirmar desfecho — do contrário viola o critério de fidelidade à fonte e o veto de indução a erro.

### Armadilhas éticas que o GATE (Steps 05 e 08) tem de barrar

Formulações tentadoras que **não** podem sobreviver no output final:

- "Teve o celular apreendido? Fale agora com nosso time." → **captação / CTA comercial**.
- "Prova sem cadeia de custódia é absolvição garantida." → **promessa de resultado + indução a erro**.
- "Primeira consulta sem custo." → **menção a valores/honorários**.
- "O escritório mais experiente em prova digital do país." → **superlativo / autopromoção vedada**.
- Print de processo, nome de cliente/vítima ou caso notório usado como gancho → **sigilo/LGPD e sensacionalismo**.

## O que um bom output deve conter (referência para o juiz)

`output/foco.md` com área/objetivo/período/formato; `output/temas.yaml` com 5 a 7 temas ranqueados
por potencial de autoridade, cada um com fonte completa e URL oficial acessível, e
`output/tema-selecionado.yaml` registrando a escolha do
usuário; `output/copy.md` com 5 ângulos, o ângulo escolhido justificado e o copy didático e **fiel à
fonte** — slide de fonte/fundamento identificando lei/órgão/data, **CTA educativo** e **disclaimer**,
sem promessa de resultado e sem captação; **nenhuma** citação marcada `[NÃO VERIFICADO]` ou
`[DIVERGENTE]` e nenhum número de precedente citado sem conferência; slides renderizados em
`output/slides/rendered/` **aprovados pelo usuário antes** da publicação; e o **gate ético do
Provimento 205/2021 cumprido nos dois pontos** — pré-checagem no Step 05 e `output/revisao-final.md`
do Step 08 com bloco YAML `verdict: APPROVE` e o checklist de vetos preenchido — conforme os
`success_criteria` do `squad.yaml`.

