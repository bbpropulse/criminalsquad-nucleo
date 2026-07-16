---
id: defesa-crimes-tributarios
name: "Crimes Tributários, Descaminho e Contrabando"
whenToUse: |
  Agentes que atuam em crimes contra a ordem tributária (Lei 8.137/1990), descaminho/contrabando (arts. 334 e 334-A CP) e lavagem conexa (Lei 9.613/1998). Camada de conhecimento do nicho: a Súmula Vinculante 24 e o lançamento definitivo, a extinção da punibilidade pelo pagamento, a (in)significância no descaminho e a autonomia da lavagem. Banco de teses verificadas em `acervo/teses-modelos/crime-tributarios.md` (fichas TRI-xxx).
version: "1.0.0"
---

# Crimes Tributários, Descaminho e Contrabando

Este arquivo consolida o **playbook do nicho econômico-tributário**. **Regra de ouro:** nos crimes **materiais** contra a ordem tributária (art. 1º da Lei 8.137/90), **não há crime antes do lançamento definitivo** do tributo (**Súmula Vinculante 24/STF**) — e o **pagamento integral extingue a punibilidade a qualquer tempo**. Essas duas chaves (constituição do crédito + pagamento) resolvem ou adiam a maioria dos casos; o descaminho segue lógica **distinta** (não se aplica nem a SV 24, nem a extinção pelo pagamento). Citação de súmula/tema/patamar é **hipótese a confirmar** (`verificacao-citacoes`).

## Marco Legal

| Dispositivo | Conduta | Nota crítica |
|---|---|---|
| **Lei 8.137/90, art. 1º (I-IV)** | Sonegação — crime **material** | Exige resultado (supressão/redução). **SV 24:** não se tipifica antes do **lançamento definitivo** |
| **Lei 8.137/90, art. 2º** | Condutas **formais** (incl. II — apropriação indébita tributária) | Independem de resultado. **RHC 163.334/STF:** não recolhimento de **ICMS declarado** pode ser crime **se contumaz e com dolo de apropriação** — *confirmar inteiro teor* |
| **CP, art. 334 (descaminho)** | Iludir tributo na importação/exportação | Crime tributário-aduaneiro: **dispensa** constituição definitiva (não incide SV 24 — TRI-003); pagamento **não** extingue a punibilidade (TRI-004) |
| **CP, art. 334-A (contrabando)** | Mercadoria **proibida/restrita** | Bem jurídico **além** do tributo → **não** admite insignificância (ex.: colete balístico sem autorização do Exército — TRI-005) |
| **Lei 9.613/98 (lavagem)** | Ocultar origem de valores | **Autônoma** em relação ao antecedente (TRI-006); **subsiste** à extinção da punibilidade do crime tributário antecedente (TRI-007) |

## Eixos da Estratégia Defensiva

1. **SV 24 e o lançamento definitivo (frente nº 1).** Nos crimes materiais (art. 1º), sem **crédito tributário definitivamente constituído** não há justa causa para a ação penal — argui-se **falta de condição objetiva de punibilidade**, trancamento por HC, suspensão do processo pela pendência administrativa. **Atenção às mitigações** reconhecidas no banco: a SV 24 é **mitigada** quando há **fraudes estruturadas** (empresas de fachada, laranjas — TRI-008), **indícios de crimes não tributários** (TRI-009) ou **investigação complexa** que justifique a apuração antes do lançamento (TRI-010).
2. **Extinção/suspensão pelo pagamento (frente nº 2).** O **pagamento integral** do débito extingue a punibilidade **a qualquer tempo** (mesmo após a sentença — art. 9º, §2º, Lei 10.684/03 — *confirmar*); o **parcelamento** regular **suspende** a pretensão punitiva enquanto vigente. É a tese de maior impacto prático no art. 1º. **Não vale para o descaminho** (TRI-004).
3. **(In)significância no descaminho (frente nº 3).** Aplicável ao **descaminho** (não ao contrabando). ⚠️ **Patamar controvertido:** as fichas registram o art. 18, §1º, da Lei 10.522/02 (R$ 100,00), mas a **jurisprudência majoritária** trabalha com o teto de **R$ 20.000,00** (art. 20 da Lei 10.522 c/c Portarias MF) — **confirmar o patamar vigente** antes de pleitear. A **contumácia/reiteração** afasta a insignificância (TRI-001).
4. **Autonomia da lavagem (frente nº 4 — contenção de danos).** Mesmo extinta a punibilidade do crime tributário antecedente, a lavagem **pode subsistir** (TRI-007); a defesa ataca a **tipicidade** da ocultação (dolo, atos autônomos de mascaramento) e a vinculação ao antecedente.

## Banco de Teses Verificadas (acervo)

Consulte **`acervo/teses-modelos/crime-tributarios.md`** antes da web — fichas **TRI-001 a TRI-010** (SV 24 e mitigações, pagamento, insignificância no descaminho, contrabando, lavagem autônoma), com os precedentes de origem. Cruze com `acervo/jurisprudencia/`. **Toda citação passa pelo gate `verificacao-citacoes`** — em especial o **patamar de insignificância** e os detalhes do **RHC 163.334**.

## Quality Criteria

- [ ] Verificada a **constituição definitiva do crédito** (SV 24) nos crimes materiais do art. 1º?
- [ ] Avaliadas as **mitigações da SV 24** (fraude estruturada, crimes não fiscais, investigação complexa) quando a acusação anteceder o lançamento?
- [ ] Explorado o **pagamento/parcelamento** (extinção × suspensão) — lembrando que **não** se aplica ao descaminho?
- [ ] No descaminho, **confirmado o patamar atual** de insignificância e checada a **contumácia**?
- [ ] Distinguidos **descaminho** (admite insignificância) × **contrabando** (não admite)?
- [ ] Tratada a **autonomia da lavagem** frente ao antecedente?
- [ ] Citações **verificadas** (`verificacao-citacoes`) e peça marcada para **revisão humana**?

## Anti-Patterns

1. **Denunciar/aceitar denúncia por crime material do art. 1º antes do lançamento definitivo.** Viola a SV 24 — mas **não** esquecer as mitigações (fraude estruturada, crimes não fiscais).
2. **Pleitear extinção pelo pagamento no descaminho.** Não há previsão; o pagamento **não** extingue a punibilidade do art. 334 (TRI-004).
3. **Invocar insignificância no contrabando.** O bem jurídico vai além do tributo; **não** se aplica (TRI-005).
4. **Citar o patamar de insignificância "de cor".** Há divergência (R$ 100 × R$ 20.000); **confirmar** antes de pleitear.
5. **Supor que a extinção do crime tributário arrasta a lavagem.** A lavagem é **autônoma** e pode subsistir (TRI-007).
6. **Tratar apropriação indébita tributária (ICMS declarado) como atípica sem enfrentar o RHC 163.334.** Há tese de tipicidade na contumácia com dolo de apropriação — *confirmar*.
7. **Citar súmula/tema de memória.** Nada à peça sem o acervo + `verificacao-citacoes` (risco de sanção, 2026).
