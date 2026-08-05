# Gabarito — Caso-ouro (FICTÍCIO) — Varredura DJEN com carteira mista

> **Arquivo do JUIZ.** Não deve ser carregado por nenhum step do pipeline nem
> lido por quem executa o squad. O enunciado está em `exemplo-varredura-djen-carteira-mista.md`.

## Pontos de decisão / armadilhas do caso

1. **Disponibilização ≠ publicação.** A contagem parte da **data da publicação** — primeiro dia útil seguinte à disponibilização no DJEN (Lei 11.419/2006, art. 4º, §§ 3º e 4º) —, não da data de disponibilização.
2. **Regime penal é contínuo.** Prazo penal corre em dias corridos, não se interrompendo por sábado, domingo ou feriado (CPP, art. 798, caput); exclui-se o dia do começo e inclui-se o do vencimento (§ 1º); vencimento em dia não útil prorroga para o dia útil imediato (§ 3º). Aplicar dias úteis aqui é o erro mais grave possível.
3. **Publicação 4 é CÍVEL.** Contrarrazões de apelação cível: 15 dias (CPC, art. 1.010, § 1º) contados em **dias úteis** (CPC, art. 219). Está fora do motor penal (`calculadora-tempestividade`) — deve ser marcada como regime diverso / zona cinzenta, com `[A CONFERIR]`, e levada ao checkpoint em vez de calculada pelo motor de dias corridos.
4. **Prazo em dobro NÃO se aplica.** O escritório é advocacia privada constituída; o dobro é da Defensoria Pública, defensor dativo e núcleo de prática jurídica (LC 80/94, arts. 44, I, e 128, I). Também não há dobro para o Ministério Público no processo penal.
5. **Publicação 3 tem prazo com premissa a confirmar.** A LEP não fixa prazo para o agravo em execução (art. 197 apenas afirma o cabimento, sem efeito suspensivo); o prazo praticado é o do recurso em sentido estrito (CPP, art. 586 — 5 dias), por analogia consolidada nos tribunais. Registrar como premissa explícita a confirmar — **sem citar número de precedente ou súmula**.
6. **Publicação 3 cai numa sexta e expõe a premissa do marco inicial.** A publicação do item 3 é 14/08/2026 (sexta), de modo que o dia seguinte é sábado. Há duas leituras: (a) CPP art. 798, § 1º — exclui-se o dia do começo e a contagem segue corrida a partir do dia imediato, ainda que não útil (resultado: 19/08); (b) Lei 11.419/2006, art. 4º, § 4º — o prazo tem início no primeiro dia útil seguinte ao da publicação (resultado: 21/08). O motor determinístico do squad adota (a), que é a **data mais curta e, portanto, a segura para o protocolo** — a leitura alternativa só alarga o prazo, nunca o encurta. O output deve adotar 19/08 e **registrar a premissa como alerta a confirmar**; omitir a divergência é falha, mas adotar a data mais longa como fatal é falha pior.
7. **Publicação 5 é ciência com data designada**, não prazo preclusivo: gera compromisso de agenda (AIJ em 22/09/2026), não data fatal.
8. **Publicações 6 e 7 são descartáveis:** a 6 é mero expediente; a 7 é ruído de homonímia (OAB de UF diversa, processo alheio à carteira) e não pode virar prazo nem ser tratada como da carteira.
9. **Régua curta.** Nos prazos 2 e 3 o marco D-7 já está no passado na data da rodada (14/08/2026) — a régua precisa registrar isso e converter o aviso em alerta imediato, em vez de omitir o lembrete vencido.
10. **Agenda sem slot conectado.** Sem Google Calendar, exportar `.ics` para `output/` e avisar o usuário — nunca pular o agendamento silenciosamente nem declarar evento gravado.
11. **Comunicação sob aprovação.** Nenhum e-mail sai sem o "sim" do usuário: o esperado é rascunho ao advogado responsável e ao cliente, sóbrio, sem promessa de resultado e sem expor dado sigiloso de um cliente a outro — a Marlene aparece em dois processos (um penal, um cível), que não podem ser misturados numa mesma comunicação a terceiro.

## Gabarito de datas (referência para o juiz)

Prazos penais calculados pelo motor determinístico `calculadora-tempestividade` (dias corridos, CPP art. 798):

| # | Ato / fundamento do prazo | Publicação (1º dia útil após a disponibilização) | Dias | Data fatal |
|---|---------------------------|--------------------------------------------------|------|------------|
| 1 | Resposta à acusação — CPP, art. 396 | 12/08/2026 (qua) | 10 (corridos) | **24/08/2026** (venceria em 22/08, sábado → prorrogado). **Cuidado com o fundamento:** o § 3º do art. 798 nomeia "domingo ou dia feriado"; sábado NÃO está no dispositivo. A prorrogação por sábado apoia-se na ausência de expediente forense e é premissa a confirmar — um output que citar o § 3º para sábado deve perder ponto. |
| 2 | Apelação (interposição) — CPP, art. 593, I; razões em 8 dias depois, CPP art. 600 | 13/08/2026 (qui) | 5 (corridos) | **18/08/2026** |
| 3 | Agravo em execução — LEP art. 197 (prazo por analogia ao CPP art. 586) | 14/08/2026 (sex) | 5 (corridos) | **19/08/2026** (premissa do marco inicial a confirmar — ver ponto 6) |
| 4 | Contrarrazões de apelação **cível** — CPC art. 1.010 § 1º | 13/08/2026 (qui) | 15 **dias úteis** (CPC art. 219) | **03/09/2026 — [A CONFERIR]**, fora do motor penal |

Triagem esperada: **prazo** = 1, 2, 3, 4 · **ciência** = 5 · **descartável** = 6, 7.

## O que um bom output deve conter (referência para o juiz)

Uma rodada em que as sete publicações do período aparecem triadas e classificadas nas três
categorias (prazo × ciência × descartável), com as descartáveis justificadas; em que **cada** prazo
traz o regime conferido e fundamentado (penal em dias corridos, CPP art. 798, × cível em dias
úteis, CPC art. 219), com a data fatal dos prazos penais vinda do motor determinístico executável
(`calculadora-tempestividade`, jamais de contagem mental ou de código improvisado) — e a saída
íntegra gravada em `output/prazos-motor/<id>.json` —, enquanto o prazo cível é sinalizado como
regime diverso/zona cinzenta e levado ao usuário em vez de forçado no motor penal; em que cada
prazo tem régua de lembretes D-7/D-3/D-1/D-0, com os marcos já vencidos explicitamente
sinalizados; e em que, após a aprovação do usuário, os atos aprovados são gravados na agenda
(ou exportados em `.ics`, já que o slot não está conectado, com aviso ao usuário) e comunicados
ao advogado responsável e ao cliente em rascunho sóbrio, sem promessa de resultado e sem expor
dado sigiloso a terceiro — tudo consolidado em `output/relatorio-prazos.md`, conforme os
`success_criteria` do `squad.yaml`.

