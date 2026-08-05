---
step: "04"
name: "Cálculo de Prazos"
type: agent
agent: prazo
execution: subagent
model_tier: powerful
depends_on: step-03b
---

# Step 04: Priscila Prazo — Cálculo de Prazos

## Para o Pipeline Runner

Executar a Priscila Prazo para, sobre cada intimação já interpretada pela Iara no Step 03b (`output/intimacoes.yaml`), obter a data fatal **do motor determinístico** (nunca de contagem mental nem de código ad-hoc) e confirmar o regime de contagem que a Iara sinalizou. A Priscila apoia-se no subagente nativo `lembrete-prazo` e na best-practice `gestao-prazos-processuais`.

A interpretação do ato — meio da intimação, ato gerador, vícios — **não se refaz aqui**: ela chega pronta do Step 03b. O que a Priscila acrescenta é a confirmação do regime e a aritmética do motor.

⚠️ **A CONTA É DO MOTOR, O JUÍZO É DO AGENTE.** Erro de prazo é o único dano
irreversível deste squad. A divisão é rígida:

- **Do agente (juízo):** identificar o ato gerador, o marco da intimação, o
  regime (penal × cível × zona cinzenta) e o fundamento legal. Isso exige
  interpretação e não se automatiza.
- **Do motor (aritmética):** a data fatal. Para cada prazo, invoque a skill
  `calculadora-tempestividade` (`type: script`, testada — CPP 798 contínuo,
  prorrogação em dia não útil, dobro da Defensoria):

```bash
node skills/calculadora-tempestividade/scripts/tempestividade.mjs \
  '{"prazo_dias":<dias>,"data_intimacao":"AAAA-MM-DD"}'
```

  Acrescente `"prazo_dobro": true` **só** para Defensoria Pública / defensor
  dativo / núcleo de prática (LC 80/94). O **MP não tem prazo em dobro** no
  processo penal — o art. 180 do CPC é do cível.

Grave a saída íntegra de cada cálculo em `output/prazos-motor/<id>.json`. O
`data_limite` do motor é o que vai para `data_fatal` no `prazos.yaml`, e os
`avisos` do motor entram no registro — eles sinalizam premissa frágil (marco da
intimação, dia não útil) que o(a) advogado(a) precisa confirmar.

**Regime cível (dias úteis, CPC 219) está FORA deste motor** — ele conta em dias
corridos do CPP. Para prazo cível ou zona cinzenta, não force o motor: marque
`ZONA_CINZENTA`, registre `[A CONFERIR]` e leve ao checkpoint do Step 05.

⚠️ **CAUTELA MÁXIMA — REGIME DE CONTAGEM.** O prazo penal é **contínuo, em dias corridos** (CPP 798, caput; não se computa o dia do começo, computa-se o do vencimento — § 1º) e NÃO se suspende em feriados/recesso como o cível. O cível conta em **dias úteis** (CPC 219). Antes de cada cálculo, a Priscila CONFIRMA o regime do ato (penal × cível) e registra a fundamentação. Em zona cinzenta (aplicação subsidiária do CPC, parte civil, recursos discutidos), sinalizar e não assumir regime.

## Inputs para este Step

- `output/intimacoes.yaml` → intimações interpretadas: ato gerador, meio, termo inicial, regime sinalizado e vícios (Step 03b)
- `output/publicacoes.yaml` → publicações marcadas como `triagem: PRAZO` (Step 03)
- `output/carteira.md` → regime predominante e contexto (Step 01)

## Recursos a Referenciar (sem duplicar)

- Subagente nativo `.claude/agents/intimacao.md` → leitura/classificação do ato, destinatário, vícios
- Subagente nativo `.claude/agents/ciencia.md` → distinção ciência simples × com efeito preclusivo (CPC 224 § 2)
- Subagente nativo `.claude/agents/lembrete-prazo.md` → régua D-7/D-3/D-1/D-0 e feriados
- Motor **PENAL**: `skills/calculadora-tempestividade/scripts/tempestividade.mjs` (dias corridos, CPP 798)
- Motor **CÍVEL**: `skills/calculadora-prazo-civel/scripts/prazo-civel.mjs` (dias úteis, CPC 219)

> **Carteira mista tem DOIS motores, um por regime.** Cada prazo vai para o motor
> da sua família — nunca o mesmo para os dois. No penal a contagem é contínua e
> feriado no meio é irrelevante; no cível conta-se só dia útil e **cada** feriado
> empurra a data. Trocar um pelo outro não é aproximação: o erro cresce com o
> tamanho do prazo, e o motor errado **encurta ou alarga** a data fatal.
>
> **Medido no smoke-run de 27/07/2026:** o squad tinha só o motor penal, e o único
> prazo cível da rodada saiu contado à mão e foi para a agenda assim. Toda carteira
> mista repetiria isso. O motor cível existe desde então — use-o.
>
> Ele exige a **lista de feriados do tribunal**: sem ela a data sai marcada como
> provisória, porque feriado municipal desloca o resultado e o motor não o conhece.
- Best-practice `_criminalsquad/core/best-practices/gestao-prazos-processuais.md` → CPP 798, intimação penal (CPP 370), ciência ficta

## Expected Outputs

- `output/prazos.yaml` → um registro por prazo, com cálculo e fundamentação:

```yaml
gerado_em: "YYYY-MM-DD HH:MM"
prazos:
  - id: 1
    processo: "0000000-00.0000.0.00.0000"
    cliente: "Nome do cliente"
    ato: "Resposta à acusação"   # ex.: CPP 396 — 10 dias corridos
    regime: "PENAL"              # PENAL (dias corridos) | CIVEL (dias úteis) | ZONA_CINZENTA
    fundamento_regime: "CPP 798, caput — contínuo, dias corridos"
    fundamento_prazo: "CPP 396"
    data_intimacao: "DD/MM/AAAA"
    inicio_contagem: "DD/MM/AAAA"  # dia seguinte à intimação (CPP 798 §1)
    dias: 10
    data_fatal: "DD/MM/AAAA"
    regua_lembretes: { D-7: "DD/MM", D-3: "DD/MM", D-1: "DD/MM", D-0: "DD/MM" }
    # NÃO é um "true" que você liga sobre si mesmo. Ou traz as DUAS contas
    # (a do motor e a conferência do regime, com o fundamento de cada uma),
    # ou vale `NAO_VERIFICADO`. Flag sem lastro é garantia falsa.
    conferencia_dupla:
      regime_conferido_por: "CPP 798 caput (penal, corridos) × CPC 219 (cível, úteis)"
      data_do_motor: "DD/MM/AAAA"            # data_limite do <id>.json
      bate_com_o_registro: true              # data_fatal acima == data_limite do JSON
    # ou, quando não houver as duas contas:
    # conferencia_dupla: NAO_VERIFICADO
    alerta: "observação/risco — ex.: confirmar regime; verificar intimação pessoal x publicação"
```

## Execution Mode

- **Modo:** Subagente — com **fan-out por itens** quando houver muitos prazos.
- **Skills permitidas:** (nenhuma; usa Bash/Python via subagente `lembrete-prazo`)

### Fan-out por itens (N prazos em paralelo)

Os prazos são **independentes** entre si (o cálculo de um não afeta o outro). Por isso, para ganhar tempo sem perder a cautela:

- Se houver **N ≥ 3** publicações marcadas como `triagem: PRAZO` no Step 03, despache **N subagentes da Priscila Prazo em paralelo** (UMA mensagem com N chamadas `Task`), **um por publicação**. Cada subagente interpreta o ato, **confirma o regime** (penal × cível — dupla conferência, fundamento explícito) e obtém a data fatal **do motor** (`calculadora-tempestividade`), gravando **`output/prazos/{id}.yaml`** e a saída íntegra do motor em **`output/prazos-motor/{id}.json`** (um arquivo por prazo — **nunca** o mesmo arquivo, para evitar corrida de versão).
- **Fan-in (barreira):** aguarde TODOS, rode o gate `test -s` em cada `output/prazos/{id}.yaml` e **consolide** tudo em `output/prazos.yaml` (a lista completa abaixo) antes de avançar ao Step 05.
- Se houver **N < 3**, calcule em **série** (um único subagente) — mais simples e barato.
- No `state.json`, a Priscila fica `working` com `activity` = "calculando N prazos em paralelo".

A cautela do regime (penal = dias corridos × cível = dias úteis) vale **por prazo**, em cada ramo — o paralelismo nunca dispensa a dupla conferência.

## Quality Gate

Antes de avançar para o Step 05, verificar:
- [ ] `output/prazos.yaml` existe com um registro por publicação marcada como PRAZO
- [ ] **DUPLA CONFERÊNCIA DO REGIME:** cada prazo confirma penal (dias corridos) × cível (dias úteis) com fundamento legal explícito (`fundamento_regime`)
- [ ] Início da contagem no dia seguinte à intimação (CPP 798 § 1 para penal)
- [ ] `data_fatal` veio do motor (`data_limite`), com a saída íntegra gravada em `output/prazos-motor/<id>.json` — não de contagem mental nem de código ad-hoc
- [ ] **O motor foi chamado pelo `tipo`, não por `prazo_dias`, quando o ato tem tipo conhecido.** `{"tipo":"agravo_execucao",...}` carrega a Súmula 700/STF; `{"prazo_dias":5,...}` dá a mesma data e **perde a súmula**. Rodar `--help` do script para ver os tipos. Medido no smoke-run de 27/07: o output chamou de "premissa a confirmar" um prazo que o próprio motor já tinha sumulado — subinformou a advogada.
- [ ] **Os `avisos` do motor foram transcritos para o registro do prazo — TODOS.** Não é formalidade: no smoke-run de 27/07 o motor emitiu exatamente o alerta que faltava ("o marco muda: publicação no DJEN, intimação pessoal, ciência nos autos") num ato que era **citação**, e o aviso foi descartado no caminho. Aviso do motor descartado é o motor funcionando e ninguém ouvindo.
- [ ] **`conferencia_dupla` traz as duas contas, ou vale `NAO_VERIFICADO`.** Flag booleana que o próprio agente liga sobre si mesmo não é conferência — é autodeclaração, a família de defeito que este framework existe para impedir.
- [ ] Régua D-7/D-3/D-1/D-0 calculada para cada prazo
- [ ] Zona cinzenta sinalizada em `alerta` quando o regime não for inequívoco
- [ ] Prazo penal NÃO foi suspenso por feriado/recesso (erro grave aplicar regra cível)

Se qualquer prazo estiver em regime duvidoso, marcar `regime: ZONA_CINZENTA`, descrever em `alerta` e levar a decisão ao usuário no checkpoint do Step 05.
