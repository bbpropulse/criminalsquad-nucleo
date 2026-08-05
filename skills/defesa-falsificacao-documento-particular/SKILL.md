---
name: defesa-falsificacao-documento-particular
description: >-
  Use ao defender em falsificação de documento particular (CP, art. 298) — falsificar, no todo ou em
  parte, ou alterar documento particular verdadeiro, inclusive a figura EQUIPARADA do cartão de
  crédito/débito (parágrafo único, Lei 12.737/2012). Eixos: distinção do art. 297 (documento
  público, pena maior), potencialidade de dano (imitatio veri), consunção do falso pelo crime-fim
  (Súm. 17/STJ), exame… Gatilhos: falsificação de… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, fe-publica, documentoscopia]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-falsificacao-documento-particular"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-falsificacao-documento-particular", "defesa falsificacao", "documento particular"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa em Falsificação de Documento Particular (CP, art. 298)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **defesa técnica** no crime de **falsificação de documento particular** (art. 298 do CP — *falsificar, no todo ou em parte, documento particular ou alterar documento particular verdadeiro*), crime contra a **fé pública** (Título X do CP). Abrange também a **figura equiparada do cartão de crédito ou débito** (parágrafo único, inserido pela Lei 12.737/2012 — "Lei Carolina Dieckmann"). O eixo da defesa gira em torno de três decisões que mudam tudo: **o documento é particular ou público? há potencialidade de dano? o falso se exauriu em outro crime (consunção)?**

> **Lição central:** classifique o documento e o iter criminis ANTES de qualquer tese. **Documento particular = art. 298** (pena 1 a 5 anos); **documento público (ou a ele equiparado) = art. 297** (pena 2 a 6 anos) — a capitulação errada muda pena, prescrição e competência. E, se o falso foi **meio para outro crime e nele se esgotou** (típico: estelionato), incide a **consunção** (Súmula 17/STJ), afastando a punição autônoma pelo art. 298. Errar essas duas triagens desperdiça a melhor defesa.

> **Cautela de vigência (obrigatória antes de citar):** confirme a redação vigente do **art. 298 e seu parágrafo único** do CP (o parágrafo único foi **inserido pela Lei 12.737/2012**), bem como do **art. 297** (comparação de pena) e do **art. 171** (estelionato, para a tese de consunção). Todo precedente, súmula, tema ou informativo específico passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) antes de ir para a peça. Na dúvida sobre um número de acórdão, **omitir vence inventar** — há sanção real por jurisprudência alucinada por IA.

## Base legal

- **CP, art. 298** — falsificar, no todo ou em parte, documento particular ou alterar documento particular verdadeiro. Pena: reclusão, **1 a 5 anos, e multa**.
- **CP, art. 298, parágrafo único** — **figura equiparada** (Lei 12.737/2012): para os fins do artigo, equipara-se a documento particular o **cartão de crédito ou de débito**.
- **CP, art. 297** — falsificação de **documento público** (pena 2 a 6 anos) e o **§2º**, que equipara a documento público certos documentos (ex.: os emanados de entidade paraestatal, títulos ao portador, ações de sociedade comercial, livros mercantis, testamento particular — **conferir o rol vigente**). É a fronteira que separa o 298 do 297.
- **CP, art. 299** — falsidade **ideológica** (o documento é formalmente autêntico, mas o **conteúdo** é falso) — distinta da falsidade **material** do art. 298 (adulteração da forma/suporte). Ver skill `defesa-falsidade-ideologica`, se disponível.
- **CP, art. 171** — estelionato: base da tese de **consunção** quando o falso é meio para a fraude patrimonial.
- **CP, art. 304** — uso de documento falso: quem apenas **usa** o documento falsificado por outrem responde pelo art. 304 (com a pena do crime de falso correspondente), não pelo 298. Triagem importante para individualizar a conduta.
- **CPP, arts. 158 e ss.** — exame de corpo de delito; a materialidade da falsidade **material** reclama, em regra, **perícia documentoscópica/grafotécnica**.

## Passo 1 — classificar o documento (298 × 297) e a conduta (falsificar × usar × ideológico)

```
1) O documento é PÚBLICO ou a ele equiparado (art. 297, §2º)?
   ├── SIM → art. 297 (pena 2-6 anos) — NÃO é esta skill (ver defesa doc. público)
   └── NÃO → é PARTICULAR → art. 298
             │
             2) A falsidade é MATERIAL (adultera forma/suporte: assinatura, valor,
                data, papel) ou IDEOLÓGICA (forma autêntica, conteúdo mentiroso)?
                ├── IDEOLÓGICA → art. 299 (ver defesa-falsidade-ideologica)
                └── MATERIAL   → art. 298 (esta skill)
                   │
                   3) O agente FALSIFICOU/ALTEROU ou apenas USOU documento
                      falsificado por terceiro?
                      ├── só USOU  → art. 304 (uso de documento falso)
                      └── FALSIFICOU/ALTEROU → art. 298
```

**Cartão de crédito/débito (parágrafo único).** A clonagem/adulteração do **cartão** físico ou de seus dados de banda/chip é tratada como falsificação de documento particular por **equiparação legal** (Lei 12.737/2012). Antes dessa lei havia intensa controvérsia sobre o enquadramento — por isso, para **fatos anteriores a 2013**, confira a lei aplicável ao tempo do fato (**irretroatividade da lei penal mais gravosa** — CF, art. 5º, XL). Atenção à possível **concorrência/consunção** com fraude eletrônica e furto/estelionato praticados com o cartão clonado (ver `defesa-fraude-eletronica` e `defesa-estelionato-171`, se disponíveis).

## Passo 2 — os elementos do tipo que a defesa ataca

1. **Objeto: documento particular verdadeiro (para alterar) ou apto (para falsificar).** É preciso um documento no sentido jurídico — escrito, com autor determinável, juridicamente relevante. Rascunhos, documentos nulos por vício essencial ou peças sem qualquer aptidão probatória podem afastar a tipicidade.
2. **Potencialidade de dano (imitatio veri).** A falsificação grosseira, perceptível *a olho nu* por qualquer pessoa, **não** tem idoneidade para enganar e é **atípica** (falta a potencialidade lesiva à fé pública). Tese central de **atipicidade material** — sustentar com apoio na perícia.
3. **Dolo.** Exige-se a vontade livre e consciente de falsificar/alterar. **Não há forma culposa.** Erro de tipo (crer que assinava documento legítimo, que a alteração era autorizada, que o dado inserido era verdadeiro) exclui o dolo.
4. **Alteração de documento verdadeiro × criação de documento falso.** A modalidade "alterar" pressupõe documento **verdadeiro** preexistente adulterado; "falsificar" pressupõe a **contrafação**. Verificar a correspondência entre a conduta narrada e o verbo típico imputado.
5. **Consumação e tentativa.** O crime consuma-se com a **contrafação/alteração** apta a enganar, independentemente do uso ou do efetivo prejuízo (crime **formal/de perigo** à fé pública). A tentativa é admissível quando o iter é interrompido antes de concluída a falsificação idônea.

## Passo 3 — teses defensivas típicas

### A) Atipicidade (ataque à existência do crime)

1. **Falsificação grosseira → ausência de potencialidade de dano.** Se a perícia (ou a simples inspeção) revela adulteração perceptível a olho nu, falta *imitatio veri*: **fato atípico** perante o art. 298. Pode remanescer, quando muito, tentativa de estelionato (crime impossível por ineficácia absoluta do meio — art. 17, CP — conforme o caso). **Tese forte.**
2. **Ausência de dolo / erro de tipo.** O agente ignorava a falsidade, supunha autorização para alterar, ou preencheu o documento crendo verdadeiro o conteúdo. Sem dolo, não há crime (não há modalidade culposa).
3. **Documento sem relevância jurídica ou inapto.** Escrito que não serve de prova de fato juridicamente relevante, documento já nulo ou destituído de aptidão probatória — afasta o objeto material do tipo.
4. **Falsidade inócua / irrelevante.** Alteração que não muda o sentido jurídico do documento nem cria risco de dano à fé pública (ex.: correção de dado imaterial) — sustentar a atipicidade por ausência de lesividade.

### B) Desclassificação / correta capitulação

5. **Desclassificação de 297 para 298.** Se a acusação capitulou como **documento público** algo que é **particular**, requerer a desclassificação para o art. 298 (**pena menor, prescrição menor**). Ataque à *emendatio/mutatio* indevida — primeira linha quando a moldura fática comporta o tipo menos grave.
6. **Falsidade material (298) × ideológica (299).** Se o documento é formalmente autêntico e só o **conteúdo** é falso, a capitulação correta é o **art. 299**, não o 298 — o que altera a moldura e as teses. Verificar qual verbo típico a conduta realiza.
7. **Uso, não falsificação (art. 304).** Se o assistido apenas **apresentou/usou** documento falsificado **por terceiro**, responde pelo art. 304, e há espaço para discutir o **conhecimento** da falsidade (dolo) e a autoria da contrafação.

### C) Consunção — a tese mais decisiva na prática

8. **Falso absorvido pelo crime-fim (Súmula 17/STJ).** Quando o falso é praticado **como meio** para outro crime (tipicamente o **estelionato**, art. 171) e **nele se exaure**, sem outra potencialidade lesiva, o falso é **absorvido** pelo crime-fim — não há punição autônoma pelo art. 298 (princípio da consunção). **Tese central quando há fraude patrimonial.**
   - **Requisito da consunção:** o falso deve **esgotar-se** no crime-fim. Se o documento falso tem **potencialidade lesiva autônoma** (pode ser reutilizado, ofende a fé pública além do caso concreto), a jurisprudência tende a admitir o **concurso** — a defesa sustenta o esgotamento no caso concreto. **Ponto sensível; conferir o estado atual via `jurisprudencia-stj-stf`.**
   - Efeito prático: reconhecida a consunção, discute-se apenas o crime-fim (com sua própria pena, prescrição e, no estelionato, possíveis benefícios — ANPP, reparação, etc.).

### D) Teses processuais e periciais

9. **Ausência/insuficiência de exame documentoscópico-grafotécnico.** A materialidade da falsidade **material** reclama, em regra, **perícia** (art. 158, CPP). Sem laudo idôneo — ou com laudo inconclusivo quanto à autoria da grafia/adulteração — a materialidade e/ou a autoria ficam fragilizadas. Requerer/impugnar a perícia; explorar a **cadeia de custódia** do documento apreendido (ver `cadeia-de-custodia`, se disponível).
10. **Autoria não demonstrada.** Possuir/usar não prova ter **falsificado**. Exigir prova de que foi o assistido quem produziu a contrafação (o grafotécnico frequentemente não conclui pela autoria da assinatura falsa).
11. **Nulidades da apreensão do documento** — regularidade da coleta, quebra da cadeia de custódia, prova ilícita (ver `nulidades-processuais`, se disponível).

### E) Dosimetria e benefícios (subsidiário)

12. **Pena-base no mínimo** — atacar valoração negativa de circunstâncias já elementares; ausência de circunstâncias judiciais desfavoráveis idôneas.
13. **Substituição por restritivas de direitos** (art. 44, CP) e **suspensão condicional da pena** (art. 77, CP) — cabíveis na moldura do 298 (pena mínima de 1 ano; réu primário, sem violência).
14. **ANPP** (art. 28-A, CPP) — o art. 298 tem pena mínima de 1 ano (< 4 anos) e é crime sem violência/grave ameaça: **avaliar o cabimento** do acordo de não persecução penal, se preenchidos os requisitos (ver skill de ANPP, se houver).
15. **Prescrição** — descrever o **método** (marco inicial, causas interruptivas, pena em concreto) e, para o cálculo determinístico, apontar a **`calculadora-prescricao`** [calculadora existente] em vez de calcular à mão. Atenção: a **pena máxima menor** do 298 (5 anos) frente ao 297 (6 anos) muda o prazo prescricional — mais um motivo para brigar pela correta capitulação.

## Teses × contra-teses (mapa rápido)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Falsificação grosseira → atipicidade | Ausência de potencialidade de dano (*imitatio veri*); perícia | A idoneidade se afere in concreto perante a vítima; havia aptidão para enganar |
| Consunção pelo estelionato (Súm. 17/STJ) | Falso foi meio e se exauriu no crime-fim | Documento com potencialidade lesiva autônoma → concurso de crimes |
| Desclassificação 297 → 298 | Documento é particular, não público | Enquadramento no art. 297, §2º (equiparado a público) |
| Falsidade ideológica (299), não material (298) | Forma autêntica, só o conteúdo é falso | A conduta adulterou a materialidade do documento |
| Uso (304), não falsificação (298) | Agente só apresentou documento falsificado por terceiro | Coautoria/participação na contrafação |
| Autoria não provada | Grafotécnico não conclui pela autoria da grafia | Prova indiciária robusta da autoria |

## Súmulas e precedentes (sob o Citation Gate)

**Dispositivos (citar com segurança, conferida a redação vigente):**
- **CP, art. 298 e parágrafo único** (equiparação do cartão — Lei 12.737/2012).
- **CP, arts. 297, 299, 304, 171 e 17** — fronteiras típicas e base da consunção/crime impossível.
- **CPP, art. 158** — exame de corpo de delito (perícia na falsidade material).

**Súmula notória (confirmar a redação atual via `jurisprudencia-stj-stf` antes de citar):**
- **Súmula 17/STJ** — *quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido*. Núcleo da tese de consunção. Confirme o **enunciado literal** e a jurisprudência de aplicação antes de reproduzir.

**Orientações jurisprudenciais (ENSINAR A TESE; confirmar número/atualidade via `jurisprudencia-stj-stf`):**
- Atipicidade da **falsificação grosseira** por ausência de potencialidade de dano — entendimento reiterado de STF/STJ. **[NÃO VERIFICADO — confirmar acórdão/tema antes de citar número]**.
- Enquadramento da **clonagem de cartão** no art. 298, parágrafo único (pós-Lei 12.737/2012) e sua eventual relação de consunção/concurso com estelionato/furto mediante fraude. **[NÃO VERIFICADO — conferir precedente e súmula pertinente, ex.: eventual enunciado sobre cartão/estelionato, antes de citar]**.
- Distinção **falso absorvido × falso com potencialidade autônoma** para fins de consunção. **[NÃO VERIFICADO — buscar o precedente/Tema aplicável]**.
- Competência (Justiça Estadual, em regra, para o 298 sem lesão a bem/serviço/interesse da União). **[NÃO VERIFICADO — confirmar antes de afirmar]**.

> **Regra do Citation Gate:** não escreva número de HC/REsp/RE, informativo ou tema sem confirmação. Prefira redigir *"conforme entendimento consolidado do STJ sobre a consunção do falso pelo estelionato (Súmula 17/STJ — a conferir e citar via `jurisprudencia-stj-stf`)"* a arriscar um acórdão inexistente. Ensine a **tese** e o **dispositivo**; deixe o **número** para depois da verificação.

## Estrutura da peça (resposta à acusação / memoriais / apelação)

1. **Endereçamento e qualificação** — Juízo competente (em regra estadual); autos.
2. **Síntese da imputação** — o que a denúncia capitula (298? 297? com o parágrafo único?) e sobre qual documento.
3. **Preliminares** — competência, inépcia, nulidades da apreensão/perícia, cadeia de custódia do documento.
4. **Mérito — classificação** — sustentar, quando cabível, a **desclassificação** (297→298; 298→299; 298→304) ou a **atipicidade**.
5. **Atipicidade** — falsificação grosseira (ausência de potencialidade de dano), ausência de dolo/erro de tipo, inaptidão do documento.
6. **Consunção** — falso absorvido pelo crime-fim (Súmula 17/STJ), quando houver fraude patrimonial que o exauriu.
7. **Prova pericial** — ausência/insuficiência do exame grafotécnico-documentoscópico; autoria não demonstrada.
8. **Subsidiariamente — dosimetria e benefícios** — pena mínima, substituição (art. 44), sursis (art. 77), ANPP (art. 28-A, CPP); prescrição via **`calculadora-prescricao`**.
9. **Pedidos** — absolvição (art. 386, CPP), desclassificação, reconhecimento da consunção ou extinção da punibilidade e, subsidiariamente, pena mínima e benefícios.

> **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua que a revisão cobra).

## Erros comuns / checklist da defesa

- [ ] **Documento classificado** (particular = 298 × público/equiparado = 297) **antes** de qualquer tese?
- [ ] Verificada a **falsidade material (298) × ideológica (299)** — o verbo típico corresponde à conduta?
- [ ] Distinguido **falsificar/alterar (298)** de **apenas usar (304)**?
- [ ] **Cartão de crédito/débito** enquadrado no **parágrafo único** e checada a **lei ao tempo do fato** (Lei 12.737/2012; irretroatividade da mais gravosa para fatos anteriores a 2013)?
- [ ] Analisada a **potencialidade de dano** — a falsificação era **grosseira** (atipicidade) ou idônea a enganar?
- [ ] Examinada a **consunção** pelo crime-fim (Súmula 17/STJ) quando há estelionato/fraude que exauriu o falso?
- [ ] Confirmado o **enunciado literal da Súmula 17/STJ** e a jurisprudência de aplicação (Citation Gate)?
- [ ] **Perícia documentoscópica/grafotécnica** existente, idônea e conclusiva quanto à **autoria**? Cadeia de custódia do documento íntegra?
- [ ] **Dolo** presente — ou há erro de tipo/ausência de vontade de falsificar?
- [ ] **Prescrição** calculada pela **`calculadora-prescricao`** (não à mão), atenta à pena máxima **menor** do 298?
- [ ] **ANPP / substituição / sursis** avaliados subsidiariamente?
- [ ] Todo **precedente/súmula/tema** passou por `jurisprudencia-stj-stf` (Citation Gate) antes de ir à peça?

**Anti-padrões (evitar):**
- Aceitar a capitulação no **art. 297** sem checar se o documento é, na verdade, **particular** (298 tem pena e prescrição menores).
- Confundir falsidade **material** (298) com **ideológica** (299) — muda o tipo, a tese e a prova.
- Punir autonomamente o **falso** que se **exauriu** no estelionato, ignorando a **consunção** (Súmula 17/STJ).
- Sustentar tipicidade em **falsificação grosseira**, sem atacar a **potencialidade de dano**.
- Presumir a **autoria** da contrafação a partir da mera **posse/uso** do documento (o 304 e a falta de grafotécnico conclusivo podem mudar o quadro).
- Aplicar a equiparação do **cartão** (parágrafo único) a **fatos anteriores** à Lei 12.737/2012 (retroatividade gravosa vedada).
- Citar número de acórdão/informativo de memória, sem passar pelo Citation Gate.
- Calcular prescrição manualmente em vez de usar a **`calculadora-prescricao`**.

## Lembretes finais

- **Classificação primeiro, tese depois** — particular × público (298 × 297), material × ideológica (298 × 299), falsificar × usar (298 × 304).
- **Potencialidade de dano** é o coração da atipicidade: falsificação **grosseira** não é crime de falso.
- **Consunção (Súmula 17/STJ)** é a tese que mais muda o resultado quando há estelionato — verifique o esgotamento do falso no crime-fim.
- **Cartão de crédito/débito** = documento particular por **equiparação** (Lei 12.737/2012) — cuidado com a **data do fato**.
- **Perícia grafotécnica**: sem laudo conclusivo quanto à **autoria**, a acusação fragiliza-se.
- **Conferir vigência** dos arts. 298/297/299/304/171 e o **enunciado das súmulas** via `jurisprudencia-stj-stf` antes de peticionar.
- **Cálculos deterministas** (prescrição/pena) → **`calculadora-prescricao`** / **`calculadora-dosimetria`** [calculadoras existentes], nunca à mão.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade pela peça, pela estratégia e pelas citações é sempre do **advogado** (Estatuto da OAB; Código de Ética; Provimento 205/2021). Não substitui a leitura integral dos autos nem o juízo profissional.
- **Polo:** skill de **DEFESA** (réu/assistido). O **roteador deve conferir o polo** da instituição em `company.md` — se a atuação for do **polo acusatório** (MP/assistente de acusação), adaptar as teses (o núcleo classificatório — 298 × 297 × 299 × 304 e a consunção — serve aos dois polos, mas a orientação argumentativa aqui é defensiva). Ética por polo: OAB/Prov. 205/2021 (advocacia); CNMP (Ministério Público); LC 80/94 (Defensoria).
- **Citation Gate:** nenhuma súmula, tema, informativo ou acórdão citado sem confirmação por `jurisprudencia-stj-stf` / `verificacao-citacoes`. Há sanções reais por jurisprudência inventada por IA.
