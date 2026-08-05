---
step: "07"
name: "Notificação de Prazos"
type: agent
agent: notificador
depends_on: step-06
---

# Step 07: Edu E-mail — Notificação de Prazos

## Para o Pipeline Runner

Executar o Edu E-mail (inline) para disparar os lembretes e comunicações dos prazos agendados no Step 06 e consolidar o relatório final da rodada. O envio usa a skill `email-juridico` (slot Gmail/Resend); a régua de comunicação apoia-se no subagente nativo `follow-up-cliente`.

⚠️ **Rascunho antes do envio.** E-mail ao cliente é ato sensível. O Edu gera o draft e — fora de execução agendada autônoma — confirma com o usuário antes de enviar. Sem promessa de resultado, sem expor dados sigilosos a terceiros (ver `etica-oab-sigilo`).

## OS NÚMEROS DO RELATÓRIO SAEM DO MOTOR — GATE BLOQUEANTE

**Antes de escrever o relatório, e de novo depois de escrevê-lo**, rode:

```bash
node scripts/legal-calculators/conferir-rodada.mjs \
  output/prazos.yaml output/prazos.ics output/relatorio-prazos.md
```

- **`exit=0`** → pode entregar. Use os números de `resumo_para_o_relatorio`
  **literalmente**; não os reescreva de memória.
- **`exit=1`** → **não entregue.** Leia `bloqueio`, `problemas` e `divergencias`,
  conserte **o artefato** (nunca o texto que o descreve) e rode de novo.

O conferidor **falha fechado se o `prazos.yaml` não parsear** — aspas duplas
aninhadas ou `": "` solto num escalar tornam o arquivo ilegível, e aí todo gate a
jusante que diz "ler o prazos.yaml" vira decoração. Campo com texto longo usa
block scalar (`>-`).

> **Por que isto virou motor e não mais uma proibição.** Este squad foi julgado
> três vezes (50, 63, 63) e o **mesmo** defeito reapareceu nas três: o relatório
> afirmando o que os artefatos desmentiam — "prazo não agendado" com o evento no
> `.ics`, "cada um com régua D-7/D-3/D-1/D-0" com 3 de 5 sem ela, "2 rascunhos"
> ao lado de "3" e de três blocos existentes. A cada rodada o texto proibitivo
> aqui ficou mais explícito, e a cada rodada o defeito voltou.
>
> Contagem é aritmética, e aritmética sai da mão do modelo — pela mesma razão que
> a data-limite e o `.ics` já saíram.

Para as datas, o conferidor exige que **todo** prazo tenha `motor_json`, régua e
os `avisos` do motor transcritos. Divergiu, o relatório não sai.

**Proibido no relatório:**

- dizer que um prazo "não foi agendado" sem procurar o `UID` dele no `.ics`;
- dizer "cada evento com alerta D-7/D-3/D-1/D-0" sem contar os `TRIGGER` de **cada** um;
- atribuir ao motor um fundamento que o JSON do motor não contém;
- afirmar qualquer contagem ("N eventos", "N prazos") sem tê-la extraído do arquivo;
- registrar `aprovado: true` de um checkpoint que não ocorreu — em rodada de teste
  o valor é `SIMULADO`, e o relatório diz que a aprovação é simulada.

> **Medido no smoke-run de 27/07/2026 (nota 63, REPROVADO):** o relatório dizia
> que o prazo cível "não foi calculado nem agendado" enquanto o `.ics` o trazia
> agendado; dizia "cada um com alerta D-7/D-3/D-1/D-0" quando 3 dos 5 eventos não
> tinham a régua completa; e atribuía ao motor uma súmula que só existia em
> comentário de código. Três afirmações, três artefatos que as desmentiam.
>
> O relatório é o que o(a) advogado(a) lê. Quando ele e o `.ics` discordam, a
> pessoa confia no texto — e a agenda dispara outra coisa.

## Inputs para este Step

- `output/prazos.yaml` → prazos com `agendado: true` (Step 06)
- `output/prazos.ics` → **releia**: é o que efetivamente vai para a agenda
- `output/prazos-motor/*.json` → memória auditável das datas; confronte antes de citar
- `output/carteira.md` → advogado responsável e clientes (Step 01)
- `_criminalsquad/_memory/company.md` → assinatura/identidade do escritório

## Recursos a Referenciar (sem duplicar)

- Skill `skills/email-juridico/SKILL.md` → redação + envio (Gmail/Resend), rascunho-primeiro
- Subagente nativo `.claude/agents/follow-up-cliente.md` → régua de comunicação, tradução de juridiquês, modelos prontos

## Expected Outputs

- E-mails/lembretes disparados (ou rascunhados para aprovação):
  - **Interno (advogado responsável):** resumo dos prazos críticos da rodada + datas fatais + régua
  - **Cliente — UM RASCUNHO POR CLIENTE COM PRAZO FATAL, sem exceção.** Comunicação
    sóbria do andamento, sem juridiquês e sem garantir resultado.

> **A cobertura é por CLIENTE, não por "quando aplicável".** Toda pessoa com prazo
> fatal nesta rodada recebe rascunho. Se algum cliente **não** vai receber, o
> relatório diz **quem** e **por quê**, em seção própria — omissão silenciosa é
> pior que omissão declarada, porque ninguém sabe que ela existe.
>
> Confira contando: clientes distintos em `prazos.yaml` com `data_fatal` × número
> de rascunhos. Os números têm de fechar, ou a diferença está justificada.
>
> **Medido no smoke-run de 27/07/2026:** dos três clientes com prazo fatal, só um
> recebeu rascunho. Os dois esquecidos eram justamente os dos **prazos mais
> curtos** da rodada — a condenada com apelação em 18/08 e o apenado com agravo em
> 19/08. O relatório não mencionou a ausência.
>
> **Sigilo ao juntar:** um mesmo cliente pode figurar em processos de naturezas
> diferentes (um penal, um cível). São comunicações separadas; e nada de um
> cliente aparece na comunicação de outro.
- `output/relatorio-prazos.md` → relatório consolidado da rodada:

```markdown
# Relatório de Prazos — [DD/MM/AAAA]

## Resumo
- Publicações varridas: N | Marcadas como prazo: N | Agendadas: N

## Prazos da rodada
| Processo | Cliente | Ato | Regime | Data fatal | Agendado | Notificado |
|----------|---------|-----|--------|-----------|----------|------------|
| ...      | ...     | ... | PENAL  | DD/MM     | ✅        | ✅          |

## Alertas / Zonas cinzentas
- [prazos que exigiram confirmação de regime, vícios de intimação, etc.]

## Próxima varredura sugerida
- [data] (rotina diária recomendada — ciência ficta de 10 dias é tempo perigoso)
```

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** email-juridico

## Quality Gate

Ao concluir o Step 07, verificar:
- [ ] `output/relatorio-prazos.md` existe e lista todos os prazos da rodada
- [ ] Notificação interna ao advogado enviada/rascunhada com os prazos críticos
- [ ] Comunicação ao cliente (quando houver) é sóbria, sem promessa de resultado e sem expor dado sigiloso a terceiro
- [ ] `output/prazos.yaml` atualizado com `notificado: true` por prazo comunicado
- [ ] Nenhum e-mail ao cliente enviado sem aprovação (salvo execução agendada explicitamente autorizada)

Em falha de envio, registrar o erro no relatório, sugerir a correção e perguntar ao usuário os próximos passos — não reportar sucesso sem confirmação real do envio.
