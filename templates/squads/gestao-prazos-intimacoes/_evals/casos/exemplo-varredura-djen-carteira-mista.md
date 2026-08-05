# Caso-ouro (FICTÍCIO) — Varredura DJEN com carteira mista

> Dados **fictícios** para avaliação/regressão do squad. **Não** é caso real (sigilo/LGPD).
> Use como input do Step 01 (Carteira / Critério de Busca); depois avalie o output com
> `/criminalsquad eval gestao-prazos-intimacoes`.
>
> Como o DJEN é fonte externa e viva, este caso **também fornece o retorno simulado da varredura**
> (bloco "Publicações capturadas"), para que o Step 02 seja reprodutível. Em execução real a
> Mônica captura do DJEN; aqui ela recebe estas publicações como se fossem a captura do período.

## Input do caso

### 1) Carteira / critério de busca (Step 01)

- **Escritório:** Vilanova & Prado Advocacia Criminal (advocacia privada constituída — **não** é Defensoria, **não** é núcleo de prática, **não** é dativo).
- **OAB monitorada:** OAB/SP 412.336 (Dra. Helena Prado).
- **CPF/CNPJ monitorados:** —
- **Processos específicos (CNJ):** — (varredura por OAB).
- **Período de varredura:** 10/08/2026 a 14/08/2026 (segunda a sexta). Rodada executada na sexta, 14/08/2026, às 18h.
- **Tribunais:** DJEN nacional (Comunica API CNJ).
- **Regime predominante:** PENAL — **mas a carteira é mista**: a Dra. Helena também responde por uma ação cível de reparação de danos derivada de um dos casos criminais. O usuário sinaliza isso expressamente no Step 01.
- **Calendário:** não há feriado nacional, estadual ou municipal entre 10/08/2026 e 04/09/2026 (confirmado na portaria do tribunal); tampouco há suspensão de expediente forense no período. Sábados e domingos permanecem dias não úteis. O feriado nacional seguinte é 07/09/2026 (Independência — Lei 662/1949), uma segunda-feira, **posterior a todas as datas fatais deste caso**.

### 2) Publicações capturadas no período (retorno simulado do Step 02)

| # | Processo (CNJ) | Órgão | Disponibilização no DJEN | Ato publicado | Cliente |
|---|----------------|-------|--------------------------|---------------|---------|
| 1 | 0007542-18.2026.8.26.0361 | 2ª Vara Criminal da Comarca de Serra Verde/SP | 11/08/2026 (ter) | Citação/intimação para apresentar **resposta à acusação** | Adenor Vilas Boas |
| 2 | 0002218-45.2025.8.26.0361 | 1ª Vara Criminal da Comarca de Serra Verde/SP | 12/08/2026 (qua) | **Sentença condenatória** publicada (furto qualificado); intimação da defesa | Marlene Sotero |
| 3 | 0000318-92.2024.8.26.0509 | Vara de Execuções Criminais de Serra Verde/SP | 13/08/2026 (qui) | **Decisão que indeferiu progressão de regime** ao sentenciado | Genésio Braga |
| 4 | 1004977-63.2025.8.26.0361 | 3ª Vara Cível da Comarca de Serra Verde/SP | 12/08/2026 (qua) | Intimação do apelado para **contrarrazões de apelação cível** (ação de reparação de danos) | Marlene Sotero |
| 5 | 0007542-18.2026.8.26.0361 | 2ª Vara Criminal da Comarca de Serra Verde/SP | 13/08/2026 (qui) | Despacho que **designa audiência de instrução e julgamento para 22/09/2026, às 14h**, com intimação das partes | Adenor Vilas Boas |
| 6 | 0002218-45.2025.8.26.0361 | 1ª Vara Criminal da Comarca de Serra Verde/SP | 11/08/2026 (ter) | Despacho de mero expediente: *"Junte-se. Ao Ministério Público para ciência."* | Marlene Sotero |
| 7 | 0009911-04.2026.8.26.0361 | 4ª Vara Criminal da Comarca de Serra Verde/SP | 12/08/2026 (qua) | Intimação dirigida a **"Helena Prado — OAB/MG 98.144"**, em processo de parte desconhecida do escritório (captura por homonímia) | — |

### 3) Restrições da rodada

- A ferramenta de agenda (Google Calendar) **não está conectada** nesta execução.
- Nenhum e-mail pode sair sem aprovação: a rodada não foi autorizada como execução agendada autônoma.

---

> **O gabarito deste caso está em `exemplo-varredura-djen-carteira-mista.gabarito.md`.**
> Ele é do JUIZ. Quem executa o squad lê **apenas este arquivo** — receber a
> lista de armadilhas junto com o caso faz a nota medir transcrição.
