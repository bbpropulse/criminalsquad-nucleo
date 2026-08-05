# Subagentes Jurídicos — CriminalSquad

Estes são **subagentes nativos do Claude Code** (`.claude/agents/*.md`), especialistas em advocacia criminal e gestão de escritório. São acionados **automaticamente** quando você descreve uma tarefa compatível, ou **manualmente** com `use o agente <nome>`.

Biblioteca de subagentes jurídicos do **Criminal Lab**, integrada ao CriminalSquad. Os agentes foram desenhados para operar em **enxame** — vários citam e escalam para outros (ex.: a `defesa-criminal-resposta-acusacao` escala para `apelacao`/`habeas-corpus`).

> Os subagentes entregam **rascunho técnico profissional**. A revisão final do(a) advogado(a) responsável é **obrigatória** antes de protocolar/enviar.

## Gestão de escritório e processual

| Agente | Função |
|--------|--------|
| `secretaria-juridica` | **Orquestra o dia a dia** (e-mail + agenda): triagem da caixa, preparação de audiência, agenda da semana e radar de prazos — sempre *draft-first* via MCP de Gmail/Calendar |
| `catalog-scout` | **Suporte ao Arquiteto** (read-only): dado um propósito, devolve a *shortlist* do que reaproveitar (subagentes/skills/best-practices). Usado na Discovery para garantir reuso |
| `monitor-dje-djen` | Monitora publicações no DJe/DJEN e classifica por urgência |
| `lembrete-prazo` | Calcula prazos processuais (dias úteis, dobrado) e gera lembretes |
| `andamento-processual` | Lê e resume movimentações processuais |
| `intimacao` | Interpreta intimações e dispara o início de prazo |
| `ciencia` | Distingue ciência ficta × efetiva |
| `triagem-novo-caso` | Ficha de triagem, conflito de interesses (EAOAB 17), viabilidade |
| `onboarding-cliente` | Boas-vindas e coleta de documentos do cliente |
| `follow-up-cliente` | Acompanhamento periódico do cliente |
| `cobranca-honorarios` | Régua de cobrança de honorários |
| `agenda-audiencia` | Agendamento de audiências |
| `resumo-processo` | Resume autos completos (leitor reutilizável) |
| `backup-escritorio` | Rotina de backup do escritório |

## Pesquisa e conhecimento jurídico

| Agente | Função |
|--------|--------|
| `jurisprudencia-stj-stf` | Pesquisa acórdãos, repetitivos, repercussão geral, súmulas |
| `doutrina` | Levanta posições doutrinárias |
| `lei-e-sumula` | Texto de lei e súmulas atualizadas |
| `ementario` | Monta ementário temático |
| `verificador-citacoes` | **Gate anti-alucinação** (read-only): confere cada citação (lei/súmula/tese/acórdão) contra a fonte e emite veredito VERIFICADA/DIVERGENTE/NÃO ENCONTRADA. Roda no *Citation Gate* do runner, junto ao hook `verifica-citacoes` |

> Estes agentes devem consultar **primeiro** o acervo local (`acervo/`) e **depois** as fontes oficiais online (STJ/STF/DJEN). Ver best-practice `pesquisa-jurisprudencial`.

## Grafo de conhecimento (acervo / Obsidian)

| Agente | Função |
|--------|--------|
| `acervo-busca` | Busca + síntese no acervo local **antes da web**, citando as fontes (`## Fontes`); reforça o gate `verificacao-citacoes` |
| `acervo-conexoes` | Tece o grafo: wikilinks tese↔precedente↔caso↔pessoa; sugere antes de gravar |
| `acervo-curadoria` | Saúde do acervo: dedup, links quebrados, precedentes superados, tags — conservador (nunca apaga, só arquiva) |

> Operam sobre o `acervo/` e, quando ativada, a integração **opcional** com Obsidian (best-practice `integracao-obsidian`; setup pela skill `obsidian-vault`). Distintos do `jurisprudencia-stj-stf`, que pesquisa nas **fontes oficiais online**.

## Peças criminais (redatores)

| Agente | Função |
|--------|--------|
| `defesa-criminal-resposta-acusacao` | Resposta à acusação (CPP 396/396-A), preliminares, absolvição sumária |
| `habeas-corpus` | HC liberatório/preventivo (CF 5º LXVIII; CPP 647-667) |

> O **conhecimento de cabimento/estrutura** de cada peça vive nas skills `skills/<peça>/` (apelação, RESE, embargos, agravo em execução, revisão criminal, contrarrazões, queixa-crime, representação, etc.). Os agentes redatores carregam essas skills ao produzir.

## Contratos

| Agente | Função |
|--------|--------|
| `comparacao-contratos` | Compara versões de contratos |
| `minuta-contrato-servicos` | Minuta de contrato de prestação de serviços advocatícios |

## Conformidade

Todos os agentes operam sob sigilo profissional e LGPD. Dados de cliente nunca devem ir para repositório público (ver `acervo/casos/` — gitignored). Publicidade jurídica deve respeitar o Código de Ética da OAB e o Provimento 205/2021.
