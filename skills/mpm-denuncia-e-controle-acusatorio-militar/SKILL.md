---
name: mpm-denuncia-e-controle-acusatorio-militar
description: >-
  Use para redigir ou estruturar mpm denuncia e controle acusatorio militar: [POLO ACUSATÓRIO] Use
  quando o MPM (JMU) ou o MP estadual (JME) atuar sobre IPM/solução do encarregado: decidir entre
  DENUNCIAR, requerer ARQUIVAMENTO ou pedir DILIGÊNCIAS; redigir a denúncia militar com a descrição
  do fato e o enquadramento no art. 9º do CPM; requisitar IPM; aferir justa causa castrense e a
  fronteira de atribuição (MPM na JMU × MP… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, justica-militar, acusacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-mpm-denuncia-e-controle-acusatorio-militar"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["mpm-denuncia-e-controle-acusatorio-militar", "denuncia controle", "acusatorio militar"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Denúncia do MPM e Controle Acusatório na Justiça Militar (art. 9º CPM; arts. 30 e 77 do CPPM)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

> ⚠️ **SKILL DO POLO ACUSATÓRIO.** Esta metodologia é do **órgão de acusação** perante a Justiça Militar: o **Ministério Público Militar (MPM)** na Justiça Militar da União (JMU) e o **Ministério Público estadual** na Justiça Militar Estadual (JME). **Antes de usá-la, o roteador deve confirmar o polo da instituição** (`_criminalsquad/_memory/company.md`). Se a instituição for a **defesa**, use as skills `jm-defesa-*` e `jm-resposta-a-acusacao-cppm`.

Esta skill orienta o **juízo de opinio delicti castrense**: recebido o **IPM** (Inquérito Policial Militar) com a **solução do encarregado**, o membro do MP decide se **oferece denúncia**, **requer arquivamento** ou **pede diligências / requisita novo IPM**. É o exercício do controle acusatório na esfera militar, com base no **CPM** (tipos e o filtro do art. 9º) e no **CPPM** (rito), e não no CP/CPP comuns.

> **Lição central:** o primeiro filtro não é a autoria — é a **competência material**. Antes de denunciar, responda: **este fato é crime militar?** A resposta depende do **art. 9º do CPM** (crime militar em tempo de paz) e do recorte constitucional de competência (CF, art. 124 para a JMU; CF, art. 125, §§4º e 5º para a JME). Errar aqui contamina toda a denúncia — e desloca a atribuição para o MP comum.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 9º do CPM** — foi alterado pelas **Leis 13.491/2017** (ampliou o conceito de crime militar para abarcar crimes previstos na "legislação penal" comum quando praticados nas circunstâncias do art. 9º) e **13.964/2019** (§§ sobre crimes dolosos contra a vida de civil por militar das Forças Armadas). Confira também o **art. 125, §§4º e 5º, da CF** (competência da JME, redação da EC 45/2004). Toda súmula, tese ou precedente citado nesta skill passa **obrigatoriamente** pela best-practice `verificacao-citacoes` (gate) antes de ir para a peça. Na dúvida sobre um número de acórdão/informativo/tema, **omitir vence inventar**.

---

## Base legal

- **CPM (Decreto-Lei 1.001/69):**
  - **Art. 9º** — define o **crime militar em tempo de paz** (o filtro central). Red. Lei 13.491/2017 e Lei 13.964/2019.
  - **Art. 10** — crime militar em tempo de guerra.
  - **Arts. 122 a 125** — prescrição no CPM (regramento próprio; **confira sempre** contra as regras gerais).
  - Parte especial — tipos castrenses (ex.: deserção art. 187; peculato-militar art. 303; violência contra superior art. 157; etc.).
- **CPPM (Decreto-Lei 1.002/69):**
  - **Arts. 9º a 28** — o **IPM** (instauração, encarregado, prazos, solução).
  - **Art. 30** — **requisitos da denúncia** militar (o equivalente ao art. 41 do CPP comum).
  - **Art. 33** — prazos para o oferecimento da denúncia.
  - **Art. 77** — **denúncia**: início da ação penal militar.
  - **Arts. 397 e 439** — hipóteses de absolvição/rejeição que balizam o juízo de admissibilidade.
- **Constituição:**
  - **Art. 124** — competência da **Justiça Militar da União** (crimes militares definidos em lei).
  - **Art. 125, §4º** — competência da **Justiça Militar Estadual** (militares dos Estados: PM e Bombeiro Militar) + ressalva do **dolo contra a vida de civil** (júri).
  - **Art. 125, §5º** — competência **monocrática do juiz de direito** do juízo militar para julgar, singularmente, crimes militares cometidos **contra civis** e as ações judiciais contra atos disciplinares.
  - **Art. 128, I, "c"** — o **MPM** como ramo do Ministério Público da União.

> **Distinção fundamental (não confundir):** as skills `denuncia-mp`, `controle-imputacao-mp` e `arquivamento-inquerito` operam sobre **CP/CPP e inquérito comum**. Aqui a base é **IPM/CPPM** e a tipificação passa pelo **art. 9º do CPM**. A confusão entre os regimes é o erro nº 1.

---

## Passo 0 — Fronteira de atribuição: MPM (JMU) × MP estadual (JME) × MP comum

Antes de qualquer análise de mérito, defina **quem tem atribuição** e **qual Justiça é competente**:

| Autor / vítima / contexto | Justiça competente | Órgão acusador |
|---|---|---|
| Militar **das Forças Armadas** (Exército, Marinha, Aeronáutica), crime militar do art. 9º CPM | **JMU** (CF, art. 124) | **MPM** |
| Militar **estadual** (PM / Bombeiro Militar), crime militar do art. 9º CPM | **JME** (CF, art. 125, §4º) | **MP estadual** |
| Crime **não** enquadrável no art. 9º CPM (comum) | Justiça comum (estadual/federal) | MP comum |
| Crime militar **contra civil** (JME) | **Juiz de direito** singular do juízo militar (CF, art. 125, §5º) | MP estadual |
| Militar (FA) em crime **doloso contra a vida de civil** | **Tribunal do Júri** (art. 9º, §único, CPM red. Lei 13.491/17 + Lei 13.964/19 — regra e exceções) — **confira a redação vigente** | MP comum / MPM conforme o recorte legal |

> **Regra prática:** se o fato **não** passar pelo filtro do art. 9º do CPM, o MP militar é **incompetente por atribuição** — o correto é **declinar** e remeter ao MP comum, não denunciar na Justiça Militar. Denunciar fora da atribuição gera nulidade e é matéria de conflito.

---

## O filtro do art. 9º do CPM — o coração da análise

O art. 9º arrola as **circunstâncias** que transformam uma conduta em **crime militar em tempo de paz**. A metodologia é subsumir o fato a **um dos incisos**:

1. **Inciso I** — crimes **propriamente militares** e os previstos **exclusivamente** no CPM (só existem como crime militar: ex.: deserção, insubmissão, dormir em serviço). Basta a previsão no CPM.
2. **Inciso II** — crimes previstos no CPM (mesmo com igual definição na lei comum) quando praticados em **uma das situações de conexão castrense** (por militar em situação de atividade contra militar; em lugar sujeito à administração militar; em serviço/atuando em razão da função; contra o patrimônio/ordem administrativa militar; etc. — **conferir as alíneas vigentes**).
3. **Inciso III** — crimes praticados por **militar da reserva/reformado ou civil** contra as instituições militares, nas hipóteses das alíneas (ex.: contra o patrimônio sob administração militar; em lugar sujeito à administração militar). **Na JME não há crime militar praticado por civil** — atenção à distinção JMU × JME.
4. **Ampliação da Lei 13.491/2017** — o inciso II passou a alcançar crimes previstos na **"legislação penal"** comum (não só no CPM), desde que praticados nas circunstâncias do art. 9º. Isso **ampliou** o rol de tipos que podem ser militares (ex.: tortura, abuso, crimes da Lei de Drogas em contexto castrense) — **confirme os limites dessa ampliação na jurisprudência atual** (gate `verificacao-citacoes`).

> **Roteiro de subsunção (fazer expressamente na denúncia):**
> 1. Identifique **o tipo** (CPM ou, pós-13.491/17, legislação penal comum).
> 2. Aponte **o inciso e a alínea** do art. 9º que enquadram o fato.
> 3. Descreva a **circunstância de conexão castrense** (militar em serviço? lugar sujeito à administração militar? em razão da função? contra a ordem administrativa militar?).
> 4. Descreva a **relação hierárquica** (superior/inferior/igual) quando o tipo a exigir (ex.: violência contra superior, art. 157 CPM; contra inferior, art. 175).
> 5. Só então narre autoria e materialidade.

---

## Metodologia — do IPM à decisão (opinio delicti)

```
1) RECEBER o IPM + a solução do encarregado (arts. 9º-28 CPPM).
2) COMPETÊNCIA/ATRIBUIÇÃO (Passo 0): é crime militar do art. 9º? JMU ou JME?
   ├── NÃO → declinar / remeter ao MP comum (não denunciar na JM).
   └── SIM → segue.
3) JUSTA CAUSA CASTRENSE: há prova da materialidade + indícios suficientes de autoria?
   ├── NÃO, mas há diligência útil → REQUISITAR diligências / novo IPM (art. 26 CPPM).
   ├── NÃO, e o fato é atípico/insubsistente/prescrito → requerer ARQUIVAMENTO.
   └── SIM → segue.
4) EXTINÇÃO DA PUNIBILIDADE: prescrição (arts. 122-125 CPM), morte, anistia?
   → Se extinta, requerer arquivamento/declaração; NÃO denunciar.
5) DENÚNCIA: redigir conforme art. 30 CPPM (ver estrutura abaixo).
```

> **Prazo (art. 33 CPPM):** confira o prazo vigente para oferecer denúncia (réu preso/solto) — o descumprimento tem consequências (relaxamento, etc.). Passe a contagem pela `calculadora-tempestividade` quando o prazo for crítico.

---

## Estrutura da denúncia militar (art. 30 do CPPM)

O art. 30 do CPPM exige, para a denúncia: (a) **exposição do fato criminoso com todas as suas circunstâncias**; (b) **qualificação do acusado ou esclarecimentos que o identifiquem**; (c) **classificação do crime** (o tipo + o enquadramento no art. 9º CPM); (d) **rol de testemunhas** (quando houver). É o análogo militar do art. 41 do CPP.

```
EXCELENTÍSSIMO SENHOR JUIZ-AUDITOR DA [Nª] AUDITORIA DA [Nª] CIRCUNSCRIÇÃO
JUDICIÁRIA MILITAR   [JMU]
— OU —
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DO JUÍZO MILITAR DA COMARCA DE
[COMARCA]   [JME]


IPM nº [Nº] / Autos nº [Nº]


O MINISTÉRIO PÚBLICO MILITAR [ou: O MINISTÉRIO PÚBLICO DO ESTADO DE [UF]], por seu
[Procurador/Promotor] de Justiça [Militar] signatário, no uso de suas atribuições
legais, com base no incluso Inquérito Policial Militar, vem, perante Vossa
Excelência, oferecer

DENÚNCIA

em face de [NOME COMPLETO], [posto/graduação], [identidade militar], [demais
dados de qualificação], pelos fatos a seguir narrados.


I — DOS FATOS

No dia [DATA], por volta das [HORA], em [LOCAL — indicar se lugar sujeito à
administração militar], o denunciado [POSTO/GRADUAÇÃO] [NOME], [estando em serviço/
em razão da função/ etc.], [NARRAR a conduta com todas as circunstâncias — art. 30,
"a", CPPM]. [Descrever a RELAÇÃO HIERÁRQUICA entre autor e vítima, se o tipo a
exigir.]

A materialidade está demonstrada por [laudo/auto/documento — fls./ev.]; a autoria,
pelos [depoimentos/interrogatório/prova — fls./ev.].


II — DO ENQUADRAMENTO COMO CRIME MILITAR (art. 9º do CPM)

A conduta constitui CRIME MILITAR nos termos do art. 9º, [INCISO], [alínea], do CPM,
porque [descrever a circunstância de conexão castrense — praticado por militar em
situação de atividade / em lugar sujeito à administração militar / em razão da função
/ contra a ordem administrativa militar]. A competência é da [Justiça Militar da
União (CF, art. 124) / Justiça Militar Estadual (CF, art. 125, §4º)], sendo a
atribuição do [MPM / Ministério Público do Estado].


III — DA CLASSIFICAÇÃO (art. 30, "c", CPPM)

Assim agindo, o denunciado incorreu nas penas do art. [Nº] do Código Penal Militar
[ou: art. [Nº] da [lei penal comum], por força do art. 9º, II, do CPM, red. Lei
13.491/2017].


IV — DO REQUERIMENTO

Requer o Ministério Público:
a) o RECEBIMENTO da denúncia e a instauração da ação penal militar;
b) a CITAÇÃO do denunciado para responder à acusação;
c) a INQUIRIÇÃO das testemunhas abaixo arroladas;
d) ao final, a CONDENAÇÃO nas penas do art. [Nº] do CPM.

Rol de testemunhas: [nomes e qualificação — art. 30, "d", CPPM].

[LOCAL], [DATA].

[NOME]
[Procurador / Promotor de Justiça Militar]
```

**Campos a preencher:** [AUDITORIA/CIRCUNSCRIÇÃO ou COMARCA], [Nº IPM/AUTOS], [NOME/POSTO/GRADUAÇÃO], [DATA], [HORA], [LOCAL], [INCISO/ALÍNEA art. 9º], [Nº do tipo — CPM ou lei comum], [testemunhas], [LOCAL], [DATA], [assinatura].

---

## Teses acusatórias típicas × contra-teses defensivas

Como polo acusatório, antecipe a defesa e blinde a denúncia. Como filtro de admissibilidade, saiba onde ela costuma falhar.

| Tese acusatória | Contra-tese defensiva (antecipar) | Como blindar a denúncia |
|---|---|---|
| Fato é crime militar (art. 9º) | "Não é crime militar; competência do MP comum" | Fundamentar **inciso + alínea + circunstância de conexão** expressamente |
| Justa causa presente | "Denúncia inepta / falta de justa causa" | Descrever materialidade e autoria com lastro no IPM (fls./ev.) |
| Autoria de militar em serviço | "Estava de folga / fora da função" | Provar a **situação de atividade/função** com documento (escala, ordem de serviço) |
| Peculato-militar (art. 303) | "Fato civil / competência comum" | Demonstrar o **patrimônio sob administração militar** |
| Violência contra superior (art. 157) | "Ausência de relação hierárquica no ato" | Provar a **hierarquia e o contexto funcional** no momento do fato |
| Aplicação da Lei 13.491/17 (tipo comum como militar) | "Ampliação não alcança este tipo / inconstitucional" | Vincular o tipo comum à circunstância do art. 9º e conferir a jurisprudência atual |

> **Erro que a defesa explora — e que o acusador deve evitar:** denúncia que **presume** o caráter militar sem demonstrar a circunstância do art. 9º. A jurisprudência exige **motivação concreta** do enquadramento castrense. Uma denúncia que só cita "art. 9º do CPM" sem descrever a conexão é vulnerável à rejeição por inépcia (aplicação analógica da lógica do art. 30 CPPM / art. 395 do CPP à Justiça Militar).

---

## Arquivamento e requisição de diligências (as outras saídas do opinio delicti)

Nem toda solução do IPM leva à denúncia. O membro do MP também:

- **Requer arquivamento** quando o fato é **atípico**, **não é crime militar** (declinar), **falta justa causa** (sem materialidade/indícios de autoria), **está extinta a punibilidade** (prescrição — arts. 122-125 CPM; morte; anistia) ou **há excludente evidente**. O arquivamento do IPM segue o **CPPM** e o regime de controle do arquivamento aplicável — **confira o procedimento vigente** (a sistemática de homologação/revisão do arquivamento passou por alterações; verifique se e como o art. 28 do CPP e/ou norma interna do MP incidem na esfera militar). Ver skill `arquivamento-inquerito` para o método geral, sempre adaptando ao CPPM.
- **Requisita diligências / novo IPM** (art. 26 e correlatos do CPPM) quando o IPM é insuficiente mas **sanável**: oitivas faltantes, perícia, juntada de escala de serviço, laudo. É a saída correta quando **falta lastro**, mas o fato é promissor.

> **Regra de ouro do controle:** **na dúvida sobre a existência de crime militar, não se força a denúncia** — declina-se ou arquiva-se, preservando a legalidade. E **na dúvida sobre lastro probatório de um crime que é militar**, requisita-se diligência antes de denunciar. Denunciar sem justa causa é abuso; deixar de denunciar havendo justa causa é omissão. O fiel da balança é o **art. 9º + justa causa**.

---

## Prescrição e prazos na esfera militar (aponta para a calculadora)

A prescrição no CPM tem **regramento próprio (arts. 122 a 125)** — **não presuma** que os prazos e marcos do CP comum se aplicam de forma idêntica. Antes de denunciar, verifique se a pretensão punitiva **não está prescrita** (causa de arquivamento). O **cálculo determinístico** (prazos, marcos interruptivos, prescrição da pretensão punitiva pela pena máxima em abstrato) deve ser feito pela `calculadora-prescricao` — **confirme que ela cobre o regime do CPM**; se não cobrir, trate como **[calculadora a implementar com testes: regime prescricional do CPM, arts. 122-125]** e faça o cálculo manual documentado, sempre passando a fundamentação normativa pelo gate `verificacao-citacoes`. Para a **tempestividade** do oferecimento da denúncia (art. 33 CPPM), use `calculadora-tempestividade`. Esta skill **não** calcula pena/prescrição por conta própria — descreve o método e aponta a ferramenta.

---

## Súmulas e precedentes (sob o Citation Gate)

> **Citation Gate (inegociável):** os itens abaixo são **âncoras de raciocínio**, não citações prontas. Dispositivos de lei (CPM, CPPM, CF) e o teor de **súmulas notórias** podem ser afirmados com certeza; **qualquer número específico de HC/RE/REsp, informativo ou tema é [NÃO VERIFICADO]** e deve ser conferido via `verificacao-citacoes` / skill `jurisprudencia-stj-stf` antes de entrar na peça. **Prefira ensinar a tese e citar o dispositivo a arriscar um número de acórdão.**

- **Súmula 297 do STF** — "Oficiais e praças das milícias dos Estados, no exercício de função policial civil, não são considerados militares para efeitos penais, sendo competente a Justiça Comum para julgar os crimes cometidos por ou contra eles." (Súmula clássica; **conferir alcance atual** frente à CF/88 e à jurisprudência posterior — gate.)
- **Súmula 6 do STJ** — "Compete à Justiça Comum estadual processar e julgar delito decorrente de acidente de trânsito envolvendo viatura de polícia militar, salvo se autor e vítima forem policiais militares em situação de atividade." (**Conferir vigência/atualidade** — gate.)
- **Súmula 53 do STJ** — "Compete à Justiça Comum estadual processar e julgar civil acusado de prática de crime contra instituições militares estaduais." (Reflete a **ausência de crime militar praticado por civil na JME**; **conferir** — gate.)
- **Súmula 90 do STJ** — sobre concurso de crime militar e comum / competência (**conferir teor e vigência** — gate).
- **Tese da Lei 13.491/2017** — ampliação do conceito de crime militar (tipos da legislação penal comum nas circunstâncias do art. 9º) — os **limites e a constitucionalidade** dessa ampliação, bem como o alcance quanto a **crime doloso contra a vida de civil**, são objeto de julgados específicos do STF/STJ: **[NÃO VERIFICADO — conferir número e teor via `jurisprudencia-stj-stf` antes de citar]**.
- **Competência para dolo contra a vida de civil por militar** — a interação entre art. 9º, §único, do CPM (red. 13.491/17 e 13.964/19), o art. 125, §4º, da CF (JME) e a competência do júri é **sensível e mutável**: **[NÃO VERIFICADO — confira a redação legal vigente e a jurisprudência atual antes de fixar a competência]**.

---

## Erros comuns / checklist do acusador militar

- [ ] **Competência/atribuição** confirmada **antes** do mérito? (crime militar do art. 9º? JMU × JME? autor militar da FA ou estadual?)
- [ ] **Inciso e alínea do art. 9º** identificados e a **circunstância de conexão castrense** descrita expressamente (não apenas citada)?
- [ ] **Redação vigente do art. 9º** conferida (Leis 13.491/2017 e 13.964/2019)?
- [ ] **Relação hierárquica** descrita quando o tipo a exige (arts. 157, 175, 303 etc.)?
- [ ] **Justa causa castrense** presente — materialidade + indícios de autoria com lastro no IPM (fls./ev.)?
- [ ] **Prescrição** aferida pelo **regime do CPM (arts. 122-125)**, não pelo CP comum?
- [ ] **Tempestividade** da denúncia conferida (art. 33 CPPM)?
- [ ] **Requisitos do art. 30 CPPM** cumpridos (fato + circunstâncias, qualificação, classificação, rol)?
- [ ] Se **não** é crime militar → **declinou** ao MP comum em vez de denunciar na JM?
- [ ] Se falta lastro sanável → **requisitou diligências** em vez de denunciar sem justa causa?
- [ ] **Toda súmula/precedente** passou pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Denunciar na Justiça Militar fato que **não** passa pelo filtro do art. 9º (competência do MP comum).
- Citar "art. 9º do CPM" sem **descrever a circunstância** de conexão castrense (denúncia genérica → inépcia).
- Aplicar o regime prescricional **do CP comum** a crime militar (o CPM tem regramento próprio).
- Confundir **JMU × JME** (na JME **não** há crime militar praticado por **civil**; regras de competência distintas).
- Presumir que a **Lei 13.491/2017** militariza qualquer crime comum praticado por militar — a circunstância do art. 9º é **indispensável**.
- Reutilizar modelos de **denúncia comum (art. 41 CPP)** sem adaptar ao **art. 30 do CPPM**.
- Calcular pena/prescrição "no olho" — usar `calculadora-prescricao`/`calculadora-dosimetria` e marcar [calculadora a implementar] quando o regime CPM não estiver coberto.

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Toda denúncia, promoção de arquivamento ou requisição é **hipótese técnica a confirmar** — a decisão e a assinatura são do **membro do Ministério Público** competente. Este material apoia a preparação; não substitui o juízo funcional nem a leitura integral do IPM concreto.
- **Ética por polo (acusação).** A atuação do MPM/MP estadual rege-se pelo **regime do Ministério Público** (LC 75/93 e Lei 8.625/93; deveres funcionais e resoluções do **CNMP**), **não** pelo Estatuto da Advocacia. O membro do MP atua com **independência funcional** e no **interesse da lei e da justiça** — pode e deve requerer o **arquivamento** ou a **absolvição** quando o caso o exigir. (As skills de **defesa** militar seguem OAB + Provimento 205/2021 CFOAB, ou LC 80/94 na Defensoria — não confundir os regimes.)
- **Citação verificada e sigilo.** Nenhuma súmula/tese/acórdão citado de memória (há sanção real por jurisprudência inventada por IA) — tudo pelo gate `verificacao-citacoes`. Dados de investigados/vítimas jamais em repositório público (LGPD; `acervo/casos/` é sigiloso).

---

## Lembretes finais

- **Competência primeiro, mérito depois** — o filtro do **art. 9º do CPM** é o primeiro passo; sem ele, a atribuição não é do MP militar.
- **Descrever, não apenas citar** o enquadramento castrense (inciso + alínea + circunstância de conexão) — é o que blinda a denúncia contra inépcia.
- **JMU (MPM) × JME (MP estadual)** — regimes de competência distintos; **na JME não há crime militar praticado por civil**.
- **Três saídas do opinio delicti:** denunciar (com justa causa), requisitar diligências (lastro sanável) ou arquivar/declinar (atípico, não militar, prescrito, sem justa causa).
- **Prescrição pelo CPM (arts. 122-125)**, não pelo CP comum — e cálculo pela calculadora (ou [a implementar]).
- **Conferir vigência** do art. 9º CPM (Leis 13.491/17 e 13.964/19) e **toda** jurisprudência pelo gate antes de peticionar.

**Padrão de redação:** ao redigir a denúncia, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso (aqui, da acusação), narrativa dos fatos, subsunção explícita ao tipo e ao art. 9º, coesão e persuasão (a régua de obra-prima que a revisão cobra). Para a moldura de competência, cruze com `jm-classificacao-competencia-crime-militar` e `jm-crime-militar-competencia-jme-vs-comum-cf125`.
