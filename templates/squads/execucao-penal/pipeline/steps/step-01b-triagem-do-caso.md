---
step: "01b"
name: "Triagem do Caso"
type: agent
agent: triagem
execution: subagent
model_tier: powerful
depends_on: step-01
description: A triagem que o checkpoint não podia fazer — conflito de interesses e estruturação dos dados reportados, sem escolher regra temporal.
---

# Step 01b: Cláudia Cálculo — Triagem do Caso

## Para o Pipeline Runner

Executar a triagem pela persona **Cláudia Cálculo** (`agents/triagem.custom.md`),
que se apoia nos subagentes nativos `.claude/agents/triagem-novo-caso.md`
(intake, conflito de interesses — EAOAB, art. 15, § 6º) e `.claude/agents/dosimetria-pena.md`
(estruturação de quantum e lapso).

Este step existe porque o Step 01 é `type: checkpoint`: ali o runner só apresenta
a mensagem, espera o input e grava a resposta — **não carrega persona nem roda
skill**. Toda a triagem que antes estava escrita dentro do checkpoint (e que, por
isso, nunca era executada) mora aqui.

NÃO calcular progressão, NÃO escolher data-base e NÃO redigir peça. A regra
temporal do art. 112 da LEP **começa e termina este step como BLOQUEADO** — quem
a decide é a etapa de pesquisa, com a matriz temporal em mãos.

## Context Loading

Load these files before executing:
- `output/foco-do-caso.md` — as respostas do operador no checkpoint de entrada
- `agents/triagem.custom.md` — a persona Cláudia Cálculo
- `acervo/legislacao/matriz-temporal-art-112-lep.md` — a matriz que este step **não** aplica, mas cuja existência ele registra na ficha

## Instructions

### Process

1. **Conflito de interesses (EAOAB, art. 15, § 6º; CED, arts. 19 a 21).** Confrontar apenado e demais
   partes com a carteira. Havendo impedimento, registrar `impedido` com a
   justificativa e **parar**.
2. **Estruturar os dados reportados.** Transcrever pena, regime, cronologia de
   prisões/solturas/trânsitos e faltas graves **com a origem documental de cada
   um**. Dado sem documento é `[A CONFERIR]`, nunca preenchido por inferência.
3. **Data-base.** A data-base indicada na guia entra rotulada `DADO_REPORTADO` +
   origem. Ela **não é validada aqui** — validá-la é decidir regra temporal.
4. **Elementos classificatórios.** Capitulação, violência/grave ameaça,
   hediondez/equiparação, resultado morte e títulos de reincidência entram como
   elementos documentados, **sem** concluir o inciso do art. 112.
5. **Gravar `output/caso.md`** no formato abaixo, com
   `Regra temporal do art. 112: BLOQUEADO`.

## Output Format

```markdown
# Caso — Execução Penal

**Apenado:** [nome]
**Autos de execução nº:** [número]
**Vara de Execução Penal / Comarca:** [vara/comarca]
**Instituto pretendido:** [progressão / livramento / remição / saída temporária / unificação / indulto-comutação / relaxamento]
**Pena total:** [anos/meses]
**Regime atual:** [fechado / semiaberto / aberto]
**Datas de cada fato:** [YYYY-MM-DD + documento]
**Prisões, solturas e trânsitos:** [cronologia + documentos]
**Data-base indicada na guia:** [DADO_REPORTADO + origem; não validada]
**Elementos classificatórios:** [capitulação; violência/grave ameaça; hediondez/equiparação; resultado morte + origem]
**Títulos para primariedade/reincidência:** [documentos; conclusão pendente]
**Faltas graves:** [datas ou "nenhuma"]
**Lapso já cumprido (do cálculo):** [a confirmar na pesquisa]
**Anexos:**
  - Guia de recolhimento: [caminho]
  - Atestado de pena/conduta: [caminho]
  - Cálculo de liquidação: [caminho]
  - Procuração: [caminho]
**Conflito de interesses (EAOAB 17):** [livre / impedido — justificativa]
**Perfil institucional:** [completo | BLOQUEADO]
**Autorização/representação:** [confirmada | pendente]
**Pilot opt-in:** [true | false]
**Regra temporal do art. 112:** BLOQUEADO | NÃO_APLICÁVEL [justificar]
**Matriz obrigatória:** acervo/legislacao/matriz-temporal-art-112-lep.md
**Observações da triagem:** [pontos de atenção; Leis 14.843/2024, 15.358/2026 e 15.402/2026]
```

## Expected Outputs

- `output/caso.md` → ficha do caso com instituto pretendido, dados do cálculo, classificação, caminhos dos anexos e dados do processo

## Output Example

```markdown
# Caso — Execução Penal

**Apenado:** R. C. O.
**Autos de execução nº:** 0000456-78.2026.8.26.0509
**Vara de Execução Penal / Comarca:** 1ª VEC — Comarca de São Paulo/SP
**Instituto pretendido:** progressão de regime
**Pena total:** 9 anos e 4 meses
**Regime atual:** fechado
**Datas de cada fato:** 2019-03-11 (roubo — fl. 12 da guia); 2021-08-02 (receptação — fl. 41 da guia)
**Prisões, solturas e trânsitos:** prisão preventiva 2021-09-14 (mandado, fl. 55); trânsito em julgado para a defesa 2023-02-20 (certidão, fl. 88); sem solturas registradas
**Data-base indicada na guia:** 2023-02-20 — DADO_REPORTADO, origem: guia de recolhimento fl. 3. Não validada neste step.
**Elementos classificatórios:** roubo simples — CP 157, caput (guia fl. 12); violência/grave ameaça: SIM (documentada na denúncia, fl. 4); hediondez/equiparação: não indicada; resultado morte: não
**Títulos para primariedade/reincidência:** certidão de antecedentes fl. 71 registra uma condenação anterior com trânsito em 2020-05-03 — conclusão sobre reincidência PENDENTE (é premissa do inciso, não deste step)
**Faltas graves:** nenhuma no atestado de conduta (fl. 96)
**Lapso já cumprido (do cálculo):** a confirmar na pesquisa
**Anexos:**
  - Guia de recolhimento: acervo/casos/rco/guia.pdf
  - Atestado de pena/conduta: acervo/casos/rco/atestado.pdf
  - Cálculo de liquidação: acervo/casos/rco/liquidacao.pdf
  - Procuração: acervo/casos/rco/procuracao.pdf
**Conflito de interesses (EAOAB 17):** livre — apenado e vítimas não constam na carteira do escritório
**Perfil institucional:** completo
**Autorização/representação:** confirmada
**Pilot opt-in:** false
**Regra temporal do art. 112:** BLOQUEADO — há fato de 2019 (anterior ao Pacote Anticrime na leitura mais favorável) e fato de 2021; a escolha do percentual depende da matriz e do desfecho sobre reincidência, e não se decide na triagem.
**Matriz obrigatória:** acervo/legislacao/matriz-temporal-art-112-lep.md
**Observações da triagem:** a data-base da guia não foi conferida contra a certidão de trânsito — divergência aqui move o lapso inteiro. Conferir na pesquisa o impacto das Leis 14.843/2024, 15.358/2026 e 15.402/2026 sobre fatos de 2019 e 2021.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O step **escolheu a regra temporal** do art. 112 ou o percentual — o campo tem de sair daqui como `BLOQUEADO` (ou `NÃO_APLICÁVEL` justificado).
2. A data-base foi apresentada como validada, sem o rótulo `DADO_REPORTADO` + origem.
3. Alguma conclusão sobre primariedade/reincidência foi fechada — aqui só entram os títulos documentados.
4. Algum dado sem documento foi preenchido por inferência em vez de `[A CONFERIR]`.
5. O conflito de interesses (EAOAB 17) ficou em branco ou como "não verificado".

## Quality Criteria

- [ ] Cada marco temporal traz a folha/documento de onde saiu
- [ ] O `instituto pretendido` está registrado (define a skill da etapa de redação)
- [ ] `pilot_opt_in` reflete o que o profissional respondeu, sem default silencioso
