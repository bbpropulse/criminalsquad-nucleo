---
name: execucao-pedido-vep-assistencial
description: >-
  Use ao requerer ao Juízo da Execução providências assistenciais e saídas extramuros do apenado
  FORA da saída temporária — permissão de saída do art. 120 LEP (velório, visita a familiar enfermo,
  tratamento fora da unidade, sob escolta) e assistência à saúde e demais deveres assistenciais do
  Estado (arts. 10 a 14 LEP), inclusive escolta médica de urgência e internação hospitalar.
  Gatilhos: permissão de saída, art. 120 LEP… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-pedido-vep-assistencial"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-pedido-vep-assistencial", "execucao pedido", "pedido assistencial"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Permissão de Saída e Providências Assistenciais na Execução (arts. 120-121 e 10-14 LEP)

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

Esta skill orienta a elaboração de **requerimentos ao Juízo (ou à direção) da Execução Penal** para duas situações **urgentes e assistenciais**, distintas da saída temporária:

1. **Permissão de saída (art. 120 da LEP)** — saída **escoltada, sob custódia**, de curtíssima duração, para: (a) **falecimento ou doença grave** de cônjuge, companheiro, ascendente, descendente ou irmão; ou (b) **necessidade de tratamento médico** não disponível na unidade.
2. **Assistência ao preso e ao internado (arts. 10 a 14 da LEP)** — o **dever estatal** de prestar assistência **material, à saúde, jurídica, educacional, social e religiosa**, com destaque para a **assistência à saúde** (art. 14), que inclui **atendimento médico, farmacêutico e odontológico** e, faltando aparelhamento na unidade, o **tratamento em local externo** (art. 14, §2º).

> **Lição central:** a **permissão de saída (art. 120)** NÃO é benefício de mérito nem depende de percentual cumprido de pena — é providência **humanitária e de urgência**, cabível **a qualquer regime, inclusive fechado e provisório**, sempre **escoltada**. Não a confunda com a **saída temporária (art. 122)**, que é benefício **programado, sem escolta, exclusivo do semiaberto** e sujeito a requisitos objetivos/subjetivos. Errar o instituto é o erro fatal deste tema.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 10 a 14 e 120 a 121 da LEP. As **Leis 14.843/2024, 15.358/2026 e 15.402/2026** alteraram a execução; releia o texto oficial e passe toda autoridade pelo Citation Gate.

> **Gate P0 do art. 112:** pedido assistencial não pode incorporar cálculo de progressão por atalho. Se tocar percentual, lapso ou data de benefício, leia `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte fontes oficiais no mesmo dia e registre regra intertemporal, decisões e revisor humano. Incompleto: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**.

## Distinção nuclear — permissão de saída (art. 120) × saída temporária (art. 122)

| Critério | Permissão de saída (art. 120) | Saída temporária (art. 122) |
|---|---|---|
| Natureza | Humanitária / urgência | Benefício ressocializador programado |
| Escolta | **SIM** — sob vigilância/custódia | **NÃO** — sem vigilância direta |
| Regime | Qualquer (fechado, semiaberto, **provisório**) | Regra: **semiaberto** |
| Requisito de mérito/lapso | **Não** | **Sim** (conduta + fração da pena) |
| Hipóteses | Óbito/doença grave de familiar; tratamento médico | Visita à família; curso; atividades de ressocialização |
| Quem autoriza | **Diretor** do estabelecimento (art. 120, parágrafo único) | **Juiz da execução** (art. 123) |
| Duração | Pelo **tempo necessário** à finalidade (art. 121) | Prazos legais (dias/ano) |

> A permissão de saída é ato **administrativo** do diretor. Na **omissão, recusa ou demora** da direção — sobretudo em urgência (velório, agravamento clínico) —, provoca-se o **Juízo da Execução**, com pedido de **liminar/tutela de urgência**, e/ou se impetra **habeas corpus** contra o constrangimento ilegal.

## Base legal

- **Art. 120 da LEP** — hipóteses da permissão de saída (falecimento/doença grave de familiar; tratamento médico), **mediante escolta**.
- **Art. 120, parágrafo único, da LEP** — competência do **diretor** do estabelecimento para autorizar.
- **Art. 121 da LEP** — a permanência fora da prisão perdura **o tempo necessário** à finalidade da saída.
- **Arts. 10 e 11 da LEP** — a **assistência** é **dever do Estado** e abrange as modalidades material, à saúde, jurídica, educacional, social e religiosa.
- **Art. 14 da LEP** — **assistência à saúde**: caráter preventivo e curativo, atendimento médico, farmacêutico e odontológico; **§2º** — quando a unidade **não estiver aparelhada**, será prestada em **outro local**, mediante autorização da direção.
- **Art. 14, §3º da LEP** — assegura acompanhamento médico à mulher, principalmente no **pré-natal e pós-parto**, extensivo ao recém-nascido.
- **Art. 122 da LEP** — **contraste** (saída temporária), para deixar claro o que **não** é objeto desta skill.
- **CF, art. 5º, III, XLIX e XLVII** — vedação a tratamento desumano/degradante; respeito à integridade física e moral do preso; **dignidade da pessoa humana** (art. 1º, III) como base do dever assistencial.

## Metodologia — como estruturar o pedido

**Passo 1 — Enquadrar o instituto correto.**
- Óbito/doença grave de familiar próximo (cônjuge, companheiro, ascendente, descendente, irmão) **ou** necessidade de tratamento médico → **permissão de saída (art. 120)**, escoltada.
- Falha do Estado em prover saúde/atendimento/medicação/tratamento externo → **assistência à saúde (art. 14)** e demais deveres (arts. 10-13).
- Se o cenário for **visita ao lar / curso / ressocialização programada** → **NÃO é esta skill**: use `execucao-saida-temporaria` (art. 122).

**Passo 2 — Provar o pressuposto fático (documentação é decisiva).**
- Óbito → **certidão de óbito** ou declaração da funerária/hospital; comprovação do **vínculo de parentesco** (certidão de nascimento/casamento).
- Doença grave → **laudo/relatório médico** atualizado indicando gravidade e, se possível, risco de óbito.
- Tratamento médico → **relatório/prescrição** demonstrando que o procedimento **não é ofertado na unidade** (aciona o art. 14, §2º).
- Falha assistencial → prova da recusa/omissão (requerimentos administrativos não respondidos, ausência de médico/medicação, laudo pendente).

**Passo 3 — Endereçar corretamente.**
- **Regra:** o requerimento de permissão de saída dirige-se ao **diretor** do estabelecimento (art. 120, parágrafo único), que é a autoridade competente.
- **Se houver urgência, recusa, omissão ou demora**, ou controvérsia jurídica: peticiona-se ao **Juízo da Execução** com **pedido de tutela de urgência/liminar**; e, havendo constrangimento ilegal atual, cabe **habeas corpus** (ver skill `hc-liberdade`/impetração).

**Passo 4 — Pedir a medida certa, com urgência.**
- Permissão de saída **pelo tempo necessário** (art. 121), **sob escolta**, para a finalidade específica.
- Ou determinação para que o Estado preste a **assistência à saúde** devida (atendimento, medicação, exame, cirurgia, **remoção a hospital externo** — art. 14, §2º).
- Sempre requerer **prioridade/urgência** (risco à vida/saúde; velório com hora marcada é perecível).

## Teses (defesa) e contra-teses (acusação/Estado)

**Teses defensivas**
1. **Direito humanitário, não benefício de mérito.** A permissão de saída independe de lapso/percentual e alcança **qualquer regime, inclusive o provisório** — negá-la por "não ter cumprido fração da pena" confunde o art. 120 com o art. 122.
2. **Dever estatal indeclinável de assistência à saúde (arts. 10, 11, V e 14).** A falha em prestar atendimento/medicação/tratamento externo é **omissão ilegal** e pode configurar tratamento desumano (CF, art. 5º, XLIX), justificando a **remoção a local externo** (art. 14, §2º).
3. **Escolta é ônus do Estado, não obstáculo ao direito.** A alegada **falta de escolta/viatura** não pode, por si, aniquilar o direito humanitário à permissão de saída — cabe ao Estado organizar a custódia; a urgência (velório perecível) reforça a tutela.
4. **Urgência qualificada.** Óbito e agravamento clínico são situações **perecíveis**: a demora equivale à negação (periculum in mora), autorizando **liminar**.
5. **Interpretação teleológica e humanizadora** da LEP à luz da **dignidade da pessoa humana** (CF, art. 1º, III) e das **Regras de Mandela** — o preso conserva todos os direitos não atingidos pela sentença.

**Contra-teses (Estado/acusação) e como enfrentá-las**
- *"Falta escolta/efetivo"* → é problema **organizacional do Estado**, que não pode transferir ao apenado o ônus da própria deficiência; requerer prazo exíguo e responsabilização.
- *"Risco de fuga / gravidade do crime"* → a saída é **escoltada e sob custódia**; a permissão do art. 120 **não** exige mérito e não se nega por presunção genérica de periculosidade.
- *"A unidade tem serviço de saúde"* → exigir **prova concreta** de que o procedimento específico está disponível; do contrário incide o **art. 14, §2º** (tratamento externo).
- *"Grau de parentesco não previsto"* → o rol do art. 120, I, alcança cônjuge/companheiro, ascendente, descendente e irmão; para vínculos afetivos equiparáveis, sustentar interpretação humanizadora (verificar jurisprudência atual pela skill `jurisprudencia-stj-stf`).

## Jurisprudência e precedentes (sob Citation Gate)

**Dispositivos e princípios que se pode afirmar** (base legal e constitucional): arts. 10, 11, 14 (e §§) e 120-121 da LEP; CF, art. 1º, III e art. 5º, III, XLVII, XLIX; contraste com o art. 122 da LEP.

**Precedentes específicos — NÃO citar de memória.** Há orientação jurisprudencial e doutrinária consolidada sobre: (i) natureza humanitária da permissão de saída e sua independência de mérito; (ii) dever estatal de assistência à saúde e cabimento de tratamento/remoção externa quando a unidade não é aparelhada; (iii) impossibilidade de a falta de escolta esvaziar o direito. **Contudo, qualquer número de HC/REsp/RE, informativo ou tema deve ser conferido antes do uso.** [NAO VERIFICADO] — confirme cada precedente pela skill `jurisprudencia-stj-stf` e prefira **ensinar a tese e citar o dispositivo** a arriscar um acórdão. Melhor faltar precedente do que citar julgado inexistente.

> As **Regras de Mandela** (Regras Mínimas da ONU para o Tratamento de Reclusos) e as normas da execução reforçam o dever de saúde e o direito a contato com a família em situações críticas — cite como **soft law** de reforço, não como norma vinculante isolada, e confira a referência antes de usar.

## Modelo de petição (permissão de saída — urgência)

```
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE EXECUÇÕES PENAIS DA
COMARCA DE [COMARCA]

[Se o pedido for administrativo, endereçar: AO(À) SENHOR(A) DIRETOR(A) DO
ESTABELECIMENTO PRISIONAL DE [UNIDADE] — art. 120, parágrafo único, da LEP.]


Autos de Execução Penal nº [Nº DA EXECUÇÃO]


PEDIDO DE PERMISSÃO DE SAÍDA — COM URGÊNCIA / TUTELA LIMINAR


[NOME DO APENADO], já qualificado nos autos da execução penal em epígrafe, por
seu advogado que esta subscreve (procuração anexa), vem, respeitosamente, à
presença de Vossa Excelência, com fundamento nos arts. 120 e 121 da Lei de
Execução Penal (Lei 7.210/84), requerer PERMISSÃO DE SAÍDA, mediante escolta,
pelas razões de fato e de direito a seguir expostas.


I — DOS FATOS

O apenado cumpre pena em regime [REGIME] (ou encontra-se preso provisoriamente)
na unidade [UNIDADE]. Em [DATA], [descrever o fato: faleceu/está em estado grave
de saúde o(a) seu(sua) [GRAU DE PARENTESCO — cônjuge/ascendente/descendente/
irmão], conforme [certidão de óbito/laudo médico] em anexo] OU [o apenado
necessita de tratamento médico não disponível na unidade, conforme relatório
médico anexo].

Trata-se de situação de URGÊNCIA e caráter humanitário, perecível pela própria
natureza [velório/sepultamento com horário definido / agravamento do quadro
clínico].


II — DO DIREITO

a) Do cabimento (art. 120 da LEP)
A permissão de saída é providência humanitária, escoltada, cabível a QUALQUER
regime — inclusive fechado e provisório —, INDEPENDENTE de mérito ou de fração
cumprida da pena, não se confundindo com a saída temporária do art. 122 da LEP.
Enquadra-se a hipótese no art. 120, [I — falecimento/doença grave de familiar /
II — tratamento médico].

b) Da duração (art. 121 da LEP)
A permanência fora do estabelecimento deve perdurar pelo tempo necessário à
finalidade da saída, sob escolta, cabendo ao Estado organizar a custódia — cuja
eventual insuficiência não pode aniquilar o direito humanitário do apenado.

c) Da urgência (tutela liminar)
Presentes a probabilidade do direito (documentação anexa) e o perigo da demora
(situação perecível), impõe-se o deferimento LIMINAR, sob pena de tornar-se
inócua a prestação jurisdicional.


III — DO PEDIDO

Diante do exposto, requer:

a) o deferimento LIMINAR da PERMISSÃO DE SAÍDA, mediante escolta, pelo tempo
   necessário à finalidade de [velório/visita ao familiar enfermo/tratamento
   médico], nos termos dos arts. 120 e 121 da LEP;
b) subsidiariamente, a expedição de ofício ao diretor do estabelecimento para
   imediata autorização (art. 120, parágrafo único, da LEP);
c) a intimação do Ministério Público e a juntada dos documentos anexos.

Termos em que, com a urgência que o caso reclama, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO]
OAB/[UF] nº [NÚMERO]
```

## Modelo de petição (assistência à saúde — art. 14, §2º)

```
[...] requer, com fundamento nos arts. 10, 11 e 14, §2º, da LEP, e no art. 5º,
XLIX, da CF, seja o Estado compelido a prestar a ASSISTÊNCIA À SAÚDE devida ao
apenado, providenciando [atendimento médico especializado / medicação / exame /
cirurgia / REMOÇÃO a hospital externo], por não dispor a unidade de aparelhamento
adequado (relatório médico anexo), sob pena de tratamento desumano e de omissão
estatal ilegal; requerendo, ante a urgência, a apreciação LIMINAR do pedido.
```

**Campos a preencher:** [COMARCA], [Nº DA EXECUÇÃO], [NOME DO APENADO], [REGIME], [UNIDADE], [DATA], [GRAU DE PARENTESCO], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Documentos a anexar

1. Procuração.
2. **Prova do pressuposto fático:** certidão de óbito / laudo ou relatório médico atualizado / prescrição de tratamento.
3. **Prova do vínculo de parentesco** (certidão de nascimento/casamento), quando permissão de saída por óbito/doença de familiar.
4. **Relatório da unidade** indicando ausência de aparelhamento (para o art. 14, §2º).
5. Cópia da guia de recolhimento / peças que comprovem a condição de preso (regime/execução).
6. Requerimentos administrativos anteriores e eventuais negativas/omissões (para demonstrar o constrangimento ao Juízo).

## Erros comuns / anti-padrões

- **Confundir permissão de saída (art. 120) com saída temporária (art. 122)** — o erro capital: pedir "mérito"/fração cumprida onde não se exige, ou negar por o réu estar no fechado/provisório.
- **Deixar de instruir com a documentação** (certidão de óbito, laudo, prova do parentesco, relatório de indisponibilidade na unidade) — sem prova, o pedido de urgência cai.
- **Não pedir liminar/urgência** em situação perecível (velório, agravamento clínico) — a demora nega o direito.
- **Aceitar a "falta de escolta" como fim do direito** — é ônus do Estado; exigir organização da custódia.
- **Endereçamento errado** — a autorização é do **diretor** (art. 120, parágrafo único); ao Juízo se recorre na omissão/recusa/urgência.
- **Citar precedente de memória** — todo HC/REsp/RE/informativo passa pela skill `jurisprudencia-stj-stf`.

## Checklist final

- [ ] Instituto correto identificado (art. 120 × art. 14 × art. 122)?
- [ ] Redação **vigente** dos arts. 10-14 e 120-121 conferida (inclusive Leis 14.843/2024, 15.358/2026 e 15.402/2026)?
- [ ] Pressuposto fático **documentado** (óbito/doença/tratamento/omissão)?
- [ ] Vínculo de parentesco comprovado (quando art. 120, I)?
- [ ] Indisponibilidade na unidade comprovada (quando art. 14, §2º)?
- [ ] Endereçamento correto (diretor × Juízo da Execução) e **liminar/urgência** requerida?
- [ ] Escolta tratada como ônus do Estado, não como obstáculo?
- [ ] Precedentes e súmulas conferidos pela skill `jurisprudencia-stj-stf` antes de citar?
- [ ] Revisão humana do advogado responsável antes de protocolar?

## Nota de conformidade

Este material é **rascunho técnico para revisão humana obrigatória** — hipótese a confirmar, não peça pronta. **Citation Gate:** nenhuma súmula, precedente ou tese é citado de memória; tudo passa pela skill `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA). A responsabilidade final pela peça e pela estratégia é sempre do **advogado** (Estatuto da OAB e Código de Ética — CED; **Provimento 205/2021** quanto à atuação e publicidade). Confira sempre a **vigência** das normas e a adequação ao caso concreto.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
