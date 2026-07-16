---
name: roadmap-leitura-inquerito
description: >-
  Use para ler de forma sistemática e cronológica os autos de um inquérito policial (IP) ou termo
  circunstanciado (TC) recém-obtidos — protocolo de leitura camada a camada (portaria, BO, oitivas,
  laudos, autos de apreensão, representações cautelares, indiciamento) montando linha do tempo, mapa
  de partes, índice de peças e checklist do que ler primeiro. Gatilhos: como ler o inquérito, por
  onde começar a analisar os autos… Não use para conclusão definitiva sem autos suficientes, fonte
  atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-roadmap-leitura-inquerito"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["roadmap-leitura-inquerito", "roadmap leitura", "leitura inquerito"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Roadmap de Leitura do Inquérito Policial (CPP, arts. 9º a 23; Lei 12.830/2013)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta o **método e a sequência de leitura** de autos de inquérito policial (IP) ou termo circunstanciado (TC) recém-obtidos. Não é peça: é o **protocolo cognitivo** que transforma centenas de páginas de PDF desorganizado em três produtos de trabalho — **linha do tempo**, **mapa de partes** e **índice de peças** — antes de o advogado começar a agir. É o passo anterior à atuação defensiva propriamente dita.

> **Lição central:** não leia os autos na ordem em que o cartório os digitalizou. Autos de IP quase nunca vêm em ordem cronológica ou lógica — vêm em ordem de juntada. **Primeiro construa o índice e a linha do tempo; só depois leia em profundidade.** Ler 800 páginas linearmente sem mapa é a forma mais rápida de perder o fio da investigação e não enxergar a tese.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 9º a 23 do CPP e da Lei 12.830/2013 (autoridade e função do delegado; indiciamento fundamentado). O IP é peça **inquisitiva, dispensável e sigilosa** por natureza, mas o acesso da defesa às provas já documentadas é garantido pela **Súmula Vinculante 14/STF**. Antes de invocar qualquer súmula, tese ou precedente, passe pela skill `jurisprudencia-stj-stf` (Citation Gate).

## Para que serve (e quando acionar)

Acione esta skill **no exato momento em que os autos chegam** — cópia integral do IP obtida na delegacia, extração do sistema (Eproc/PJe/SEEU), PDF entregue pelo cliente ou vista dos autos. O objetivo é **digerir antes de agir**: saber o que existe, em que ordem aconteceu, quem é quem e o que falta. Só depois disso a atuação (requerer diligências, acompanhar oitivas, investigação defensiva) é eficiente.

- **Distinta de `defesa-no-inquerito`:** aquela orienta a **atuação** defensiva (requerer, acompanhar, investigar), pressupondo o acesso já digerido. Esta é o passo **anterior**: como percorrer e mapear os autos.
- **Distinta de `ocr-autos-pdf`:** aquela apenas **digitaliza/transcreve** o PDF; não estrutura leitura jurídica. Use a `ocr-autos-pdf` como pré-requisito técnico quando o PDF for imagem não pesquisável; esta skill entra depois, sobre o texto já legível.

## Base legal — a estrutura do inquérito

O que você está lendo tem um esqueleto legal. Conhecê-lo é o que permite reconhecer cada peça e detectar o que falta.

- **Art. 5º, CPP** — formas de instauração (de ofício por portaria; requisição do MP/juiz; requerimento do ofendido; auto de prisão em flagrante).
- **Art. 6º, CPP** — providências da autoridade ao tomar conhecimento do fato (preservação do local, apreensão de objetos, oitivas, reconhecimento, identificação do indiciado).
- **Art. 9º, CPP** — todas as peças do IP são **reduzidas a escrito** e rubricadas.
- **Art. 10, CPP** — **prazos**: 10 dias com indiciado preso; 30 dias com indiciado solto (prorrogável). Contar o prazo é diagnóstico de excesso.
- **Art. 12, CPP** — o IP **acompanha a denúncia** sempre que servir de base.
- **Art. 13, CPP** — diligências requisitadas pela autoridade judiciária ou pelo MP.
- **Art. 14, CPP** — o ofendido/indiciado pode **requerer diligências** (gancho para `defesa-no-inquerito`).
- **Arts. 15 a 23, CPP** — curador, incomunicabilidade (superada pela CF/88), relatório final e remessa.
- **Lei 12.830/2013** — natureza jurídica da investigação criminal; **indiciamento** por ato **fundamentado** do delegado (art. 2º, §6º). Indiciamento sem fundamentação é atacável.
- **Súmula Vinculante 14/STF** — direito do defensor de **acesso amplo** aos elementos já documentados nos autos (não às diligências em curso). É a base do próprio direito de ler os autos.

## Metodologia — 4 passadas (nunca uma só)

A leitura eficiente de autos volumosos é feita em **camadas sucessivas**, não em leitura corrida. Cada passada tem um objetivo distinto.

### Passada 1 — Varredura estrutural (montar o índice)

Objetivo: saber **o que existe**, sem ler o conteúdo. Percorra o PDF do início ao fim apenas identificando **tipos de peça** e páginas/eventos. Produto: **índice de peças** (ver modelo abaixo).

- Localize a **peça inaugural** (portaria, auto de flagrante, requisição do MP) — ela define **o marco zero** e a **capitulação inicial**.
- Marque toda peça-âncora: **BO**, **oitivas** (vítima, testemunhas, indiciado), **laudos** (perícia, IML, toxicológico, balística), **autos** (apreensão, exibição, reconhecimento), **representações cautelares** (prisão, busca, quebra de sigilo), **decisões judiciais**, **indiciamento** e **relatório final** (art. 12).
- Anote os **números de página do PDF E os números de evento/folha dos autos** — eles divergem, e você citará os dois.

### Passada 2 — Linha do tempo (o quê, quando, quem)

Objetivo: reordenar os fatos **cronologicamente**, ignorando a ordem de juntada. Produto: **linha do tempo** com duas trilhas.

- **Trilha dos fatos** (o crime): data/hora do fato, sequência dos eventos narrados.
- **Trilha dos atos investigativos** (o procedimento): data de instauração, de cada oitiva, de cada laudo, das cautelares, do indiciamento. Aqui você já enxerga **excesso de prazo** (art. 10) e **atos fora de ordem**.
- Cruze as duas trilhas: a prova que fundamentou a cautelar já existia na data em que ela foi decretada? A oitiva do indiciado veio antes ou depois do indiciamento?

### Passada 3 — Mapa de partes e vínculos

Objetivo: saber **quem é quem** e como se relacionam. Produto: **mapa de partes**.

- Liste **investigados/indiciados**, **vítimas**, **testemunhas**, **autoridades** (delegado, peritos, MP) e **defensores**.
- Para cada pessoa: qualificação, papel processual, **em quais peças aparece** e **o que disse**.
- Marque **contradições entre depoimentos** (a mesma testemunha muda a versão? vítima e testemunha divergem?), **vínculos** (parentesco, sociedade, inimizade) e **quem imputa o quê a quem**.

### Passada 4 — Leitura profunda dirigida (só agora, e só o que importa)

Objetivo: ler **em profundidade** as peças que decidem a tese, guiado pelo que as três passadas anteriores revelaram. Não é leitura corrida; é leitura **cirúrgica**.

- Priorize: **peça inaugural**, **prova que sustenta a autoria/materialidade**, **cautelares e suas fundamentações**, **indiciamento** e **relatório final**.
- Em cada peça, pergunte: qual **fato** ela prova? qual **vício** de forma ou de cadeia de custódia ela pode ter? ela **corrobora ou contradiz** outra peça? o que **falta** para fechar o raciocínio da autoridade?

## O que procurar em cada camada de peça (roteiro de leitura)

| Camada | Peça | O que ler / anotar | Sinais de alerta |
|---|---|---|---|
| Instauração | Portaria / flagrante / requisição | Marco zero, capitulação inicial, quem instaurou | Flagrante forjado; capitulação inflada; ausência de justa causa |
| Notícia-crime | BO, representação da vítima | Versão original dos fatos | Divergência entre BO e depoimento posterior |
| Prova oral | Oitivas (vítima, testemunhas, indiciado) | Quem disse o quê, quando, contradições | Depoimento induzido; reconhecimento viciado (art. 226 CPP) |
| Prova técnica | Laudos (perícia, IML, toxicológico, balística) | Conclusão pericial, data, cadeia de custódia | Laudo ausente; **quebra da cadeia de custódia** (arts. 158-A a 158-F CPP) |
| Apreensão | Autos de apreensão / exibição | O que foi apreendido, por quem, quando | Ausência de mandado; nulidade da busca |
| Cautelares | Representações e decisões (prisão, busca, sigilo) | Fundamentação, base probatória, contemporaneidade | Fundamentação genérica; ausência de contemporaneidade (art. 312 CPP) |
| Indiciamento | Despacho de indiciamento | Fundamentação (Lei 12.830/13, art. 2º, §6º) | Indiciamento imotivado; imputação sem lastro |
| Encerramento | Relatório final (art. 12) | Conclusão da autoridade, capitulação final | Salto lógico entre prova e conclusão |

## Produtos de trabalho — modelos

### Índice de peças (produto da Passada 1)

```
ÍNDICE DE PEÇAS — IP nº [NÚMERO] | Delegacia: [DELEGACIA] | Investigado(s): [NOMES]

Nº | Peça                          | Data       | pág. PDF | ev./fl. autos | Camada
---|-------------------------------|------------|----------|---------------|-------------
01 | Portaria de instauração       | dd/mm/aaaa | 001      | ev. 1         | Instauração
02 | Boletim de ocorrência         | dd/mm/aaaa | 004      | ev. 1.2       | Notícia-crime
03 | Oitiva da vítima              | dd/mm/aaaa | 012      | ev. 3         | Prova oral
04 | Laudo pericial [tipo]         | dd/mm/aaaa | 045      | ev. 8         | Prova técnica
05 | Representação por [cautelar]  | dd/mm/aaaa | 060      | ev. 11        | Cautelares
06 | Despacho de indiciamento      | dd/mm/aaaa | 088      | ev. 15        | Indiciamento
07 | Relatório final (art. 12)     | dd/mm/aaaa | 100      | ev. 18        | Encerramento
```

### Linha do tempo (produto da Passada 2)

```
LINHA DO TEMPO — IP nº [NÚMERO]

[TRILHA DOS FATOS]
dd/mm/aaaa hh:mm — [evento do crime, conforme peça nº __]
dd/mm/aaaa hh:mm — [evento seguinte, conforme peça nº __]

[TRILHA DOS ATOS INVESTIGATIVOS]
dd/mm/aaaa — Instauração (peça 01) → INÍCIO do prazo do art. 10 CPP
dd/mm/aaaa — Oitiva da vítima (peça 03)
dd/mm/aaaa — Laudo (peça 04)
dd/mm/aaaa — Cautelar decretada (peça 05) → conferir contemporaneidade da prova
dd/mm/aaaa — Indiciamento (peça 06)
dd/mm/aaaa — Relatório final (peça 07)

[CRUZAMENTOS / ANOMALIAS]
- Prazo do art. 10 excedido? (preso: 10d / solto: 30d) → [SIM/NÃO]
- Cautelar fundada em prova preexistente à sua data? → [SIM/NÃO]
- Indiciamento posterior à oitiva do indiciado? → [SIM/NÃO]
```

### Mapa de partes (produto da Passada 3)

```
MAPA DE PARTES — IP nº [NÚMERO]

INVESTIGADO(S)
- [NOME] | qualificação | indiciado? [SIM/NÃO] | aparece nas peças: [nºs] | o que disse: [síntese]

VÍTIMA(S)
- [NOME] | aparece nas peças: [nºs] | versão: [síntese] | contradições: [se houver]

TESTEMUNHAS
- [NOME] | vínculo com as partes: [parentesco/inimizade/nenhum] | o que disse: [síntese] | corrobora/contradiz: [quem]

AUTORIDADES
- Delegado(a): [NOME] | Peritos: [NOMES] | MP: [NOME]

VÍNCULOS E CONTRADIÇÕES RELEVANTES
- [descrever cruzamentos de depoimentos, interesses, versões conflitantes]
```

## Diagnósticos que a leitura estruturada revela (ganchos de tese)

O roadmap não é só organização: cada anomalia mapeada vira um gancho para uma tese ou uma diligência. Reconheça-os durante as passadas.

- **Excesso de prazo (art. 10 CPP):** conte os dias desde a instauração; com indiciado preso, o excesso é gancho para relaxamento (encaminhar a `defesa-no-inquerito` / habeas corpus).
- **Falta de justa causa / capitulação inflada:** a peça inaugural imputa mais do que a prova sustenta.
- **Quebra da cadeia de custódia (arts. 158-A a 158-F CPP):** vestígios/laudos sem rastreabilidade — tese de inadmissibilidade da prova.
- **Cautelar sem contemporaneidade (art. 312, §2º, CPP):** decretada com base em fato/prova não atual.
- **Reconhecimento viciado (art. 226 CPP):** procedimento de reconhecimento pessoal em desacordo com o rito legal.
- **Indiciamento imotivado (Lei 12.830/13, art. 2º, §6º):** despacho sem fundamentação individualizada.
- **Prova produzida sem contraditório diferido quando exigível:** identificar o que é elemento informativo (não repetível) e o que precisará ser refeito em juízo (art. 155 CPP — o IP, isolado, não condena).

## Erros comuns (anti-padrões)

- **Ler na ordem do PDF.** A ordem de juntada não é a ordem dos fatos. Sempre reordene na linha do tempo.
- **Ler tudo em profundidade de uma vez.** Sem o índice e a linha do tempo antes, você relê as mesmas páginas e perde o excesso de prazo e as contradições.
- **Confundir número de página do PDF com folha/evento dos autos.** Anote os dois; a citação processual usa o evento/folha.
- **Ignorar o que falta.** O vício muitas vezes está na **ausência** (laudo não juntado, mandado inexistente, cadeia de custódia não documentada), não no que está escrito.
- **Tratar o IP como se condenasse.** Elemento informativo colhido sem contraditório não fundamenta condenação por si (art. 155 CPP) — mas mapear isso é justamente o valor da leitura.
- **Deixar de registrar contradições entre depoimentos no ato da leitura.** Depois, no volume, elas se perdem.
- **Agir antes de mapear.** Requerer diligência ou impetrar HC sem a linha do tempo pronta desperdiça o timing.

## Checklist final (antes de partir para a atuação)

- [ ] **Índice de peças** completo, com página do PDF **e** evento/folha dos autos?
- [ ] **Linha do tempo** com as duas trilhas (fatos e atos investigativos) e os cruzamentos anotados?
- [ ] **Mapa de partes** com papéis, o que cada um disse e as contradições marcadas?
- [ ] **Peça inaugural** identificada (marco zero e capitulação inicial)?
- [ ] **Prazo do art. 10** conferido (excesso? indiciado preso?)?
- [ ] **Cautelares** localizadas e sua fundamentação/contemporaneidade avaliadas?
- [ ] **Indiciamento** conferido quanto à fundamentação (Lei 12.830/13)?
- [ ] **Relatório final (art. 12)** lido — a conclusão decorre da prova ou há salto lógico?
- [ ] **O que falta** anotado (laudos, mandados, cadeia de custódia)?
- [ ] **Diagnósticos/ganchos de tese** listados para encaminhar a `defesa-no-inquerito`?
- [ ] Todo dispositivo/súmula/precedente que se pretenda usar **passou pelo Citation Gate** (`jurisprudencia-stj-stf`)?

## Encaminhamentos (para onde ir depois)

- **`defesa-no-inquerito`** — de posse do mapa, atuar: requerer diligências (art. 14 CPP), acompanhar oitivas, investigação defensiva.
- **`ocr-autos-pdf`** — se o PDF for imagem não pesquisável, digitalizar antes desta leitura.
- **`jurisprudencia-stj-stf`** — Citation Gate para qualquer súmula/tese/precedente antes de fundamentar.
- **Habeas corpus / relaxamento** — se a leitura revelar excesso de prazo, prisão sem contemporaneidade ou prova ilícita.

## Nota de conformidade

Este material é **apoio metodológico à leitura dos autos** — rascunho técnico sob **revisão humana obrigatória**. Não substitui o exame direto das peças pelo advogado responsável, a quem cabe toda decisão de atuação (CED/OAB; Provimento 205/2021 na publicidade). Nenhum dispositivo, súmula ou precedente aqui referido deve ser citado em peça sem passar pelo Citation Gate (`jurisprudencia-stj-stf`). Dados do investigado/cliente extraídos dos autos são sigilosos e nunca vão para repositório público (LGPD; `acervo/casos/` é gitignored).
