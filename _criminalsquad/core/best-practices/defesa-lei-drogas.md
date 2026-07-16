---
id: defesa-lei-drogas
name: "Defesa — Lei de Drogas (Lei 11.343/2006)"
whenToUse: |
  Agentes que atuam em crimes da Lei 11.343/2006 — tráfico (art. 33), tráfico privilegiado (§4º), associação (art. 35), porte para consumo (art. 28) e majorantes (art. 40). Camada de conhecimento do nicho: marco legal, estratégia defensiva, dosimetria, prova/nulidades típicas e o banco de teses verificadas do acervo (`acervo/teses-modelos/crime-drogas.md`). A redação da peça vem das skills-peça (resposta-à-acusação, memoriais, HC, apelação).
version: "1.0.0"
---

# Defesa — Lei de Drogas (Lei 11.343/2006)

Este arquivo consolida o **playbook defensivo do nicho de drogas**: o marco legal estável, os institutos que decidem o caso (privilégio, desclassificação, prova da abordagem) e os erros que enfraquecem a peça. **Não reproduz o banco de teses** — esse fica em `acervo/teses-modelos/crime-drogas.md` (50+ fichas DRG-xxx, cada uma com seu precedente). **Regra de ouro do nicho:** quase todo caso de drogas se ganha em **três frentes** — (1) a **licitude da prova/abordagem**, (2) a **desclassificação 33→28** ou o **reconhecimento do privilégio (§4º)**, e (3) a **dosimetria** (afastar a dupla valoração da quantidade). Toda citação de súmula/tema/precedente é **hipótese a confirmar** sob o gate `verificacao-citacoes` antes do protocolo.

## Marco Legal

| Dispositivo | Conduta | Notas de defesa |
|---|---|---|
| **Art. 28** | Porte para **consumo pessoal** | Despenalizado (sem prisão; penas restritivas/advertência). **RE 635.659 (Tema 506, STF):** porte de **maconha** para uso pessoal é ilícito **não criminal** (natureza administrativa), com parâmetro de referência para presunção de uso — *confirmar inteiro teor, a gramatura e a modulação de efeitos*. Demais drogas seguem no art. 28 |
| **Art. 33, caput** | Tráfico (18 núcleos — crime de **ação múltipla**) | Pena 5–15 anos. Perigo **abstrato/presumido**; consumação **independe** da tradição ao destinatário (DRG-013); materialidade pode ser indireta (DRG-021, ARE 1.476.455 — *confirmar*) |
| **Art. 33, §4º** | **Tráfico privilegiado** | Redução de **1/6 a 2/3**. Requisitos **cumulativos**: primário + bons antecedentes + **não se dedicar** a atividades criminosas + não integrar organização. **NÃO é hediondo** (STF; Súmula 512/STJ **cancelada**) |
| **Art. 34** | Maquinário/petrechos | Pode ser absorvido pelo tráfico (consunção) quando crime-meio |
| **Art. 35** | **Associação** para o tráfico | Autônomo; exige **estabilidade e permanência** do vínculo (≠ concurso eventual de pessoas, que não tipifica o art. 35) |
| **Art. 40** | Majorantes (1/6 a 2/3) | III — proximidade de escola (independe de ciência/alvo do agente — DRG-028); V — interestadualidade (dispensa transposição efetiva de divisa — DRG-030) |
| **Art. 42** | Pena-base | **Natureza e quantidade preponderam** sobre as do art. 59 CP — e **só podem ser valoradas uma vez** |

## Eixos da Estratégia Defensiva

1. **Licitude da prova e da abordagem (frente nº 1).** Entrada em domicílio exige **fundadas razões** devidamente justificadas, sob pena de prova ilícita e nulidade (Tema 280/STF — DRG-026 — *confirmar*). Atacar: consentimento viciado, ausência de flagrante real, denúncia anônima isolada, busca pessoal sem justa causa. Depoimento de policiais é prova **idônea**, mas a defesa exige **corroboração** e expõe contradições (DRG-012).
2. **Desclassificação 33 → 28 (frente nº 2a).** Pequena quantidade, ausência de petrechos de mercancia (balança, embalagens fracionadas), ausência de investigação prévia e contexto de usuário → porte para consumo (DRG-046). É a tese que muda a natureza do processo (despenalização).
3. **Tráfico privilegiado §4º (frente nº 2b).** Quando a desclassificação não é viável, busca-se a minorante no **patamar máximo (2/3)**. Pontos-chave do banco:
   - Quantidade/natureza **por si só não afastam** o privilégio nem definem a fração (DRG-001/007/008/020).
   - **Inquéritos e ações penais em curso não** caracterizam dedicação ao crime nem afastam a minorante (**Tema 1139/STJ** — DRG-051; DRG-003 — *confirmar*).
   - A **modulação da fração** exige fundamentação concreta; reduzir abaixo de 2/3 sem motivo idôneo é ilegal (DRG-006).
4. **Dosimetria — vedação do bis in idem (frente nº 3).** A **mesma** quantidade **não pode** exasperar a pena-base (art. 42) **e** ao mesmo tempo reduzir a fração do privilégio: é dupla valoração vedada (DRG-052/053). Quantidade não expressiva não justifica exasperação da base (apreensão é inerente ao tipo).
5. **Liberdade.** Tráfico sem violência, quantidade não expressiva, réu primário → **cautelares do art. 319 CPP** em vez da preventiva (DRG-044/046); a prisão exige **periculum libertatis concreto**, não gravidade abstrata ou presunção de reiteração (DRG-045/048/049). **Prisão domiciliar** a gestante/mãe de criança (art. 318 CPP; HC 143.641/STF — DRG-050 — *confirmar*).

## Prova e Nulidades Típicas

- **Laudo toxicológico definitivo:** indispensável à materialidade; juntada tardia **não** é nulidade absoluta sem demonstração de **prejuízo** (DRG-010).
- **Ordem dos atos (especialidade):** a Lei 11.343 prevê o interrogatório no início da audiência (art. 57), mas há forte entendimento de aplicação do **art. 400 CPP** (interrogatório como **último** ato, em favor da ampla defesa) — *confirmar o estado atual antes de arguir nulidade*.
- **Cadeia de custódia** da droga e dos aparelhos celulares apreendidos: ver best-practice `cadeia-custodia-prova-digital` (arts. 158-A a 158-F CPP).
- **Insignificância:** **não** se aplica ao tráfico nem ao porte (perigo abstrato — DRG-016).

## Banco de Teses Verificadas (acervo)

Antes da web, consulte **`acervo/teses-modelos/crime-drogas.md`** — fichas DRG-001 a DRG-054+ (privilégio, desclassificação, prova da abordagem, prisão cautelar, dosimetria), cada uma com o precedente de origem. Cruze com `acervo/jurisprudencia/stj/` e `acervo/jurisprudencia/stf/` (informativos por ano). **Toda ficha citada em peça passa pelo gate `verificacao-citacoes`.**

## Quality Criteria

- [ ] Atacada a **licitude da abordagem/prova** (domicílio, busca pessoal, flagrante)?
- [ ] Avaliada a **desclassificação 33→28** antes de partir para o privilégio?
- [ ] Requisitos do **§4º** enfrentados um a um (primariedade, antecedentes, não-dedicação, não-organização)?
- [ ] Afastado o **bis in idem** da quantidade (art. 42 × fração do §4º)?
- [ ] Pleito de **liberdade** fundado em ausência de *periculum* concreto (não gravidade abstrata)?
- [ ] **Não** invocada Súmula 512/STJ como vigente (foi **cancelada**) nem o privilégio como hediondo?
- [ ] Citações (tema/súmula/ARE) **verificadas** (`verificacao-citacoes`) — inclusive a modulação do RE 635.659?
- [ ] Peça marcada para **revisão humana** antes do protocolo?

## Anti-Patterns

1. **Tratar o tráfico privilegiado como crime hediondo.** Está superado; a Súmula 512/STJ foi **cancelada**. Erro que compromete a credibilidade da peça.
2. **Aceitar a fração mínima do §4º sem brigar pelo patamar de 2/3.** A redução depende de fundamentação concreta; quantidade isolada não a modula (DRG-001/006/008).
3. **Deixar a quantidade valer duas vezes.** Usá-la na pena-base (art. 42) **e** para reduzir o privilégio é bis in idem (DRG-052/053).
4. **Pedir absolvição genérica ignorando a desclassificação 33→28.** A tese mais forte muitas vezes é mudar a natureza do fato (usuário), não a negativa de autoria.
5. **Aceitar a prisão preventiva fundada em gravidade abstrata.** Exige-se *periculum libertatis* concreto (DRG-045/048).
6. **Não questionar a entrada no domicílio.** Sem fundadas razões justificadas, a prova é ilícita (Tema 280/STF) — é a frente que pode derrubar todo o conjunto probatório.
7. **Citar quantidade/precedente "de memória".** Sob risco de sanção (2026), nada vai à peça sem passar pelo acervo + `verificacao-citacoes`.
