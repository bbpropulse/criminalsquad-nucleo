---
step: "04"
name: "Cálculo de Prazos"
type: agent
agent: prazo
execution: subagent
model_tier: powerful
depends_on: step-03
---

# Step 04: Priscila Prazo — Cálculo de Prazos

## Para o Pipeline Runner

Executar a Priscila Prazo para, sobre cada publicação marcada como PRAZO no Step 03, (a) interpretar a intimação e identificar o ato gerador — apoiando-se na Iara Intimação — e (b) calcular a data fatal com Python passo a passo. A Priscila apoia-se no subagente nativo `lembrete-prazo` e na best-practice `gestao-prazos-processuais`.

⚠️ **CAUTELA MÁXIMA — REGIME DE CONTAGEM.** O prazo penal é **contínuo, em dias corridos** (CPP 798, caput; não se computa o dia do começo, computa-se o do vencimento — § 1º) e NÃO se suspende em feriados/recesso como o cível. O cível conta em **dias úteis** (CPC 219). Antes de cada cálculo, a Priscila CONFIRMA o regime do ato (penal × cível) e registra a fundamentação. Em zona cinzenta (aplicação subsidiária do CPC, parte civil, recursos discutidos), sinalizar e não assumir regime.

## Inputs para este Step

- `output/publicacoes.yaml` → publicações marcadas como `triagem: PRAZO` (Step 03)
- `output/carteira.md` → regime predominante e contexto (Step 01)

## Recursos a Referenciar (sem duplicar)

- Subagente nativo `.claude/agents/intimacao.md` → leitura/classificação do ato, destinatário, vícios
- Subagente nativo `.claude/agents/ciencia.md` → distinção ciência simples × com efeito preclusivo (CPC 224 § 2)
- Subagente nativo `.claude/agents/lembrete-prazo.md` → motor de cálculo Python, feriados, régua D-7/D-3/D-1/D-0
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
    conferencia_dupla: true        # ver Quality Gate
    alerta: "observação/risco — ex.: confirmar regime; verificar intimação pessoal x publicação"
```

## Execution Mode

- **Modo:** Subagente — com **fan-out por itens** quando houver muitos prazos.
- **Skills permitidas:** (nenhuma; usa Bash/Python via subagente `lembrete-prazo`)

### Fan-out por itens (N prazos em paralelo)

Os prazos são **independentes** entre si (o cálculo de um não afeta o outro). Por isso, para ganhar tempo sem perder a cautela:

- Se houver **N ≥ 3** publicações marcadas como `triagem: PRAZO` no Step 03, despache **N subagentes da Priscila Prazo em paralelo** (UMA mensagem com N chamadas `Task`), **um por publicação**. Cada subagente interpreta o ato, **confirma o regime** (penal × cível — dupla conferência, fundamento explícito) e calcula a data fatal em Python, gravando **`output/prazos/{id}.yaml`** (um arquivo por prazo — **nunca** o mesmo arquivo, para evitar corrida de versão).
- **Fan-in (barreira):** aguarde TODOS, rode o gate `test -s` em cada `output/prazos/{id}.yaml` e **consolide** tudo em `output/prazos.yaml` (a lista completa abaixo) antes de avançar ao Step 05.
- Se houver **N < 3**, calcule em **série** (um único subagente) — mais simples e barato.
- No `state.json`, a Priscila fica `working` com `activity` = "calculando N prazos em paralelo".

A cautela do regime (penal = dias corridos × cível = dias úteis) vale **por prazo**, em cada ramo — o paralelismo nunca dispensa a dupla conferência.

## Quality Gate

Antes de avançar para o Step 05, verificar:
- [ ] `output/prazos.yaml` existe com um registro por publicação marcada como PRAZO
- [ ] **DUPLA CONFERÊNCIA DO REGIME:** cada prazo confirma penal (dias corridos) × cível (dias úteis) com fundamento legal explícito (`fundamento_regime`)
- [ ] Início da contagem no dia seguinte à intimação (CPP 798 § 1 para penal)
- [ ] Cálculo feito em Python e a `data_fatal` confere com o passo a passo
- [ ] Régua D-7/D-3/D-1/D-0 calculada para cada prazo
- [ ] Zona cinzenta sinalizada em `alerta` quando o regime não for inequívoco
- [ ] Prazo penal NÃO foi suspenso por feriado/recesso (erro grave aplicar regra cível)

Se qualquer prazo estiver em regime duvidoso, marcar `regime: ZONA_CINZENTA`, descrever em `alerta` e levar a decisão ao usuário no checkpoint do Step 05.
