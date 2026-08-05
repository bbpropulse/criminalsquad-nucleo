---
name: defesa-crimes-software-pirataria-lei-9609
description: >-
  Use ao construir a DEFESA na violação de direito autoral de programa de computador — art. 12 da
  Lei 9.609/1998 (Lei do Software): atipicidade por falta de prova pericial da originalidade e da
  materialidade (corpo de delito), natureza da ação penal (regra: privada; incondicionada só nas
  hipóteses do §3º) e decadência da queixa, licença/uso autorizado, ausência de finalidade comercial
  ("para fins de comércio") e quebra da… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, propriedade-industrial, direito-autoral]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-software-pirataria-lei-9609", "defesa crimes", "pirataria 9609"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-crimes-software-pirataria-lei-9609"]
---

# Violação de direito autoral de programa de computador (Lei do Software) — Defesa

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

Esta skill orienta a **defesa técnica** no crime de **violação de direito de autor de programa de computador**, tipificado no **art. 12 da Lei 9.609/1998** (Lei do Software). O bem jurídico é o **direito de autor sobre o programa** — não a coisa material, mas a criação intelectual protegida. A Lei 9.609/98 é norma **especial** frente à Lei 9.610/98 (direitos autorais em geral) e ao **art. 184 do CP** (violação de direito autoral genérica): tratando-se de **software**, a capitulação correta é o art. 12 da lei especial, não o 184 do CP.

> **Lição central:** neste crime a defesa se ganha ou se perde em **duas travas de admissibilidade que vêm ANTES do mérito**. Primeira, a **prova pericial**: a violação de direito autoral de software é crime que **deixa vestígio** — sem **exame de corpo de delito** que demonstre a **materialidade** (a cópia/reprodução efetiva) e a **originalidade/autoria** do programa dito violado, a condenação é insustentável (CPP, art. 158). Segunda, a **ação penal e a decadência**: o art. 12 é, em regra, de **ação penal privada** — sem **queixa tempestiva** do titular legitimado, extingue-se a punibilidade. Antes de discutir licença ou dolo, ataque **perícia** e **queixa/prazo**.

> **Cautela de vigência (obrigatória antes de citar):** (1) **Não afirme a natureza da ação penal de memória** — o art. 12, §3º, prevê **ação penal privada como regra** e **pública incondicionada** em hipóteses específicas (violação de direito de entidade de direito público/administração pública direta ou indireta, sonegação fiscal, e as demais do §3º na **redação vigente**); confira o texto atual do §3º antes de sustentar decadência ou legitimidade. (2) A **Súmula 574/STF** — sobre necessidade de exame pericial e prova da materialidade em crimes de reprodução — deve ter **redação, alcance e vigência conferidos** via `jurisprudencia-stj-stf`, **[NÃO VERIFICADO]** aqui. (3) Interface com o **art. 184, §§2º-3º, do CP** e com a **Lei 9.610/98** exige checar qual norma incide sobre o objeto concreto (programa x obra comum). Na dúvida, **omitir vence inventar**.

## Base legal

- **Art. 12, caput, da Lei 9.609/1998** — violar direitos de autor de programa de computador: pena de **detenção de 6 meses a 2 anos ou multa** (crime de menor potencial ofensivo — JECRIM).
- **Art. 12, §1º, da Lei 9.609/1998** — figura **qualificada**: reproduzir programa, por qualquer meio, **no todo ou em parte, para fins de comércio, sem autorização expressa** do autor ou de quem o represente — pena de **reclusão de 1 a 4 anos e multa**. Atenção: o elemento subjetivo especial é a **finalidade comercial ("para fins de comércio")**, e **não** o "intuito de lucro" do art. 184, §2º, do CP — conceitos distintos que não se confundem.
- **Art. 12, §2º, da Lei 9.609/1998** — mesma pena do §1º a quem **vende, expõe à venda, introduz no País, adquire, oculta ou tem em depósito, para fins de comércio**, original ou cópia produzida com violação de direito autoral.
- **Art. 12, §3º, da Lei 9.609/1998** — **ação penal**: privada como regra; **incondicionada** nas hipóteses ali previstas (prejuízo a entidade de direito público/administração, sonegação fiscal etc.) — **conferir a redação vigente**.
- **Lei 9.610/1998** (direitos autorais em geral) e **art. 184 do CP** — normas de **interface**; a lei do software é **especial** e prefere para o objeto "programa de computador".
- **CPP, art. 158** — **exame de corpo de delito** obrigatório em infração que deixa vestígio; **arts. 530-B a 530-H** — **rito especial** e diligências de busca, apreensão e **perícia** nos crimes de violação de direito autoral (procedimento dos arts. 524 e ss.).
- **CPP, arts. 158-A a 158-F** — **cadeia de custódia** dos vestígios (aqui, digitais).
- **CPP, art. 38** — **decadência** do direito de queixa/representação (6 meses), relevante na ação privada.

## Anatomia do tipo — roteiro de subsunção (o que a defesa disseca)

O art. 12 protege o **direito de autor de programa**. Decomponha por figura:

1. **Caput (violar direito de autor de programa):** conduta genérica de violação; **objeto** = programa **protegido** (original, autoria comprovada); **elemento subjetivo = dolo**. Não exige finalidade comercial. Pena baixa → **JECRIM**.
2. **§1º (reprodução para fins de comércio):** exige **(a) reprodução** — total ou parcial —, **(b) ausência de autorização expressa** do autor/titular e **(c) o especial fim de "para fins de comércio" (finalidade comercial)**. A falta de **qualquer** um desloca para o caput ou para a atipicidade.
3. **§2º (comercialização/depósito):** condutas de circulação (vender, expor, importar, adquirir, ocultar, ter em depósito) da cópia/original **produzido com violação**, também **para fins de comércio** e com **conhecimento** da origem ilícita.

**Pressupostos objetivos comuns (materialidade):**
- **Existência de programa protegido** — obra original, com **titularidade** identificada (a proteção nasce da criação; art. 2º da Lei 9.609/98).
- **Reprodução/violação efetiva** — cópia idêntica ou substancialmente equivalente do código/obra; não basta similaridade funcional (a lei protege a **expressão**, não a **ideia/função**).
- **Ausência de autorização** — inexistência de licença, cessão ou uso permitido.

**Método:** teste **materialidade** (há perícia demonstrando reprodução e originalidade?) → **autoria/titularidade** → **autorização/licença** → **finalidade comercial ("para fins de comércio")** (nas figuras qualificadas) → **dolo**. A ausência de qualquer elemento leva à **atipicidade** ou à **desclassificação** para figura menos grave.

## A prova pericial como trava (corpo de delito e Súmula 574/STF)

Este é o **eixo-mãe da defesa**. A violação de direito autoral de software **deixa vestígio material** (a cópia, a mídia, o disco, os arquivos) — logo, **exige exame de corpo de delito** (CPP, art. 158). O que a perícia precisa demonstrar, e o que a defesa cobra:

- **Materialidade da reprodução:** o laudo deve comparar o programa apreendido com o **original protegido** e concluir pela **identidade/derivação**, não por mera suposição de que "era pirata". Laudo por amostragem, genérico ou que não individualiza cada exemplar é **impugnável**.
- **Originalidade e titularidade do programa violado:** é preciso demonstrar **qual** obra foi violada e **quem** é o titular — sem isso, não há objeto material do crime.
- **Instalação/uso x reprodução:** distinguir **uso de cópia** (que pode ser lícito por licença) de **reprodução não autorizada**. A perícia deve indicar a conduta técnica concreta.
- **Súmula 574/STF [NÃO VERIFICADO]:** enunciado sobre **necessidade de exame pericial e prova da materialidade** em crimes de reprodução — **conferir redação, alcance e vigência** via `jurisprudencia-stj-stf` antes de invocar.

➡️ **Tese central de defesa:** ausência ou insuficiência do **exame pericial** que comprove materialidade e originalidade → **absolvição por falta de prova** (CPP, art. 386, II/VII) ou **nulidade** por ausência de corpo de delito (art. 564, III, "b").

## Cadeia de custódia dos vestígios digitais

Software é **vestígio digital** — frágil e manipulável. A defesa deve auditar toda a cadeia (CPP, arts. 158-A a 158-F):

- **Apreensão e lacre:** regularidade da busca e apreensão (mandado, hipóteses de flagrante), identificação e lacre das mídias/equipamentos.
- **Preservação e integridade:** uso de **hash/imagem forense** antes da análise; ausência de espelhamento íntegro compromete a prova (risco de alteração dos arquivos analisados).
- **Rastreabilidade:** quem coletou, transportou, custodiou e periciou — elos ausentes geram **quebra da cadeia** e pedido de **desentranhamento/desvalorização** da prova.
- **Prova ilícita:** acesso a equipamentos/contas sem autorização judicial quando exigida (art. 5º, XII, CF; art. 157 do CPP).

Ver as skills de **análise de provas** e **cadeia de custódia** do acervo para o detalhamento técnico e a **leitura crítica do laudo** (`leitura-interpretacao-laudo-pericial-defesa`).

## Ação penal, legitimidade e decadência

- **Regra: ação penal PRIVADA (§3º).** Depende de **queixa-crime** do **titular legitimado** (autor/titular dos direitos ou quem a lei indicar). Terceiro sem titularidade **não** tem legitimidade ativa.
- **Decadência (art. 38 do CPP):** **6 meses** do conhecimento da autoria → tese de **extinção da punibilidade** se ultrapassado o prazo, na ação privada.
- **Hipóteses de ação PÚBLICA INCONDICIONADA (§3º):** prejuízo a entidade de direito público/administração, sonegação fiscal e as demais previstas — **conferir a redação vigente** antes de afirmar. Nesses casos, **não** há decadência de queixa (age o MP).
- **Requisitos formais da queixa:** individualização dos fatos, procuração com poderes especiais, tempestividade; **inépcia** e **ilegitimidade** são preliminares fortes.
- **Perempção e renúncia/perdão** (na ação privada) — verificar causas extintivas.

## Institutos despenalizadores e dosimetria

- **Caput (6 meses–2 anos):** **infração de menor potencial ofensivo** → **JECRIM**, **transação penal** e **composição** (Lei 9.099/95, arts. 76 e 74), **suspensão condicional do processo** (art. 89) e **ANPP** (art. 28-A do CPP) em tese cabíveis.
- **§§1º-2º (1–4 anos, reclusão):** não é IMPO; mas **pena mínima inferior a 4 anos** → **ANPP** cabível em tese (crime sem violência/grave ameaça); **suspensão condicional do processo** apenas se a **pena mínima ≤ 1 ano** — no §1º a mínima é de 1 ano, **avaliar** cabimento.
- **Substituição por restritivas (art. 44 do CP)** e **regime aberto** (art. 33, §2º) — cabíveis em tese, crime **sem violência/grave ameaça**; rodar números em `calculadora-dosimetria`.
- **Prescrição (art. 109 do CP):** penas baixas → prazos curtos; checar **prescrição retroativa/intercorrente**, sobretudo no caput.

## Catálogo de teses defensivas

1. **Ausência de exame pericial / corpo de delito** — sem laudo que prove **materialidade** (reprodução efetiva) e **originalidade/titularidade**, impõe-se absolvição (art. 386, II/VII) ou nulidade (art. 564, III, "b").
2. **Laudo genérico/por amostragem** — perícia que não individualiza cada exemplar nem compara com o original é imprestável; requerer **perícia complementar/nova perícia** (CPP, art. 168) e **assistente técnico** (art. 159).
3. **Licença/uso autorizado** — existência de **licença**, **cessão**, período de avaliação (trial), software **livre/open source** ou autorização do titular → atipicidade (ausência do "sem autorização").
4. **Ausência de finalidade comercial ("para fins de comércio")** — nas figuras do §1º/§2º, sem a **destinação comercial** exigida pelo tipo não há a qualificadora → **desclassificação** para o caput (IMPO) ou atipicidade. Não confundir com o "intuito de lucro" do art. 184, §2º, do CP: a lei especial exige **fins de comércio**, elemento próprio e mais restrito.
5. **Uso pessoal x reprodução para comércio** — instalar/usar cópia licenciada não é reproduzir para vender; distinguir a conduta técnica concreta.
6. **Atipicidade por ausência de originalidade/objeto protegido** — programa não protegido, banal, de domínio público, ou mera **função/ideia** (a lei protege a **expressão** do código).
7. **Ausência de dolo / erro** — desconhecimento da origem ilícita (§2º) ou crença legítima na regularidade da licença → erro de tipo.
8. **Ilegitimidade ativa / decadência** — queixa por quem não é titular, ou fora do prazo de 6 meses (art. 38 do CPP) na ação privada.
9. **Quebra da cadeia de custódia** — vestígio digital sem hash/lacre/rastreabilidade → desvalorização/desentranhamento (arts. 158-A ss.; art. 157).
10. **Especialidade x art. 184 do CP** — impugnar capitulação no 184 do CP quando o objeto é **programa** (incide o art. 12 da lei especial), com reflexos na pena e na ação penal.
11. **Extinção da punibilidade** — decadência, perempção, renúncia/perdão (ação privada) e **prescrição** (penas baixas).
12. **Despenalizadores** — transação/sursis processual/ANPP conforme a figura, e dosimetria mínima com substituição.

## Contra-teses da acusação (antecipar)

- **Perícia positiva** com comparação ao original e identificação de cópias não autorizadas em quantidade e contexto comercial.
- **Finalidade comercial presumida** do volume, do estoque, da exposição à venda ou da atividade empresarial (§§1º-2º).
- **Conhecimento da origem ilícita** inferido de nota fiscal ausente, preço vil, canais informais.
- **Ação pública incondicionada** (§3º) afastando a decadência — prejuízo a ente público ou sonegação fiscal.
- **Interface com sonegação/estelionato** e concurso de crimes.

A defesa **ataca cada uma na origem**: qualidade e individualização do laudo; prova concreta (não presumida) da **finalidade comercial** e do conhecimento; enquadramento correto da ação penal; e cadeia de custódia íntegra dos vestígios.

## Distinção de figuras próximas

| Tipo | Objeto / marca distintiva | Uso pela defesa |
|---|---|---|
| **Art. 12 da Lei 9.609/98** | violação de direito de autor de **programa de computador** (lei especial) | Capitulação correta quando o objeto é **software** |
| **Art. 184 do CP** | violação de direito autoral **em geral** (obras da Lei 9.610/98) | Impugnar quando imputado a software → prevalece a lei especial |
| **Art. 12, §1º/§2º (qualificadas)** | reprodução/comércio **para fins de comércio** (finalidade comercial) | Sem a finalidade comercial → **desclassificar** para o caput (IMPO) |
| **Art. 12, caput** | violação **sem** finalidade comercial | Base para atipicidade material e despenalizadores |
| **Contrafação x ilícito civil** | uso irregular sem dolo penal | Deslocar para a **esfera cível** (indenização), afastando o crime |

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** **não cite súmula, tese ou acórdão de memória.** Marque **[NÃO VERIFICADO]** e confirme **redação, alcance e vigência** via `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`) antes de levar à peça.

- **Súmula 574/STF** *(conferir)* **[NÃO VERIFICADO]** — sobre **necessidade de exame pericial e prova da materialidade** na reprodução; central para a **tese da ausência de corpo de delito**. Verificar redação e aplicação a software antes de invocar.
- **Enunciados/precedentes sobre exame pericial em pirataria** (individualização do laudo, perícia por amostragem, prova da originalidade) **[NÃO VERIFICADO]** — há oscilação; confirmar tese + dispositivo.
- **Natureza da ação penal do art. 12, §3º** **[NÃO VERIFICADO]** — jurisprudência sobre as hipóteses de ação incondicionada e legitimidade; conferir antes de sustentar decadência.

## Checklist e anti-padrões

- [ ] **Perícia:** há **exame de corpo de delito** provando **materialidade** (reprodução) e **originalidade/titularidade**? O laudo **individualiza** cada exemplar?
- [ ] **Assistente técnico e quesitos** suplementares indicados (CPP, art. 159)? Cabe **nova perícia** (art. 168)?
- [ ] **Ação penal:** é **privada** (regra) ou **incondicionada** (§3º)? **Queixa tempestiva** e por **titular legitimado** (decadência — art. 38 do CPP)?
- [ ] **Licença/autorização** verificada (contrato, trial, open source)?
- [ ] **Finalidade comercial ("para fins de comércio")** provada (não presumida) nas figuras do §1º/§2º? (não confundir com o "intuito de lucro" do art. 184 do CP)
- [ ] **Capitulação:** é art. 12 da lei especial (software) e não o art. 184 do CP?
- [ ] **Cadeia de custódia** digital íntegra (hash, lacre, rastreabilidade — arts. 158-A ss.)? Prova lícita?
- [ ] **Despenalizadores** (transação, sursis, ANPP) e **dosimetria** avaliados conforme a figura?
- [ ] **Prescrição** e demais causas extintivas (perempção, renúncia) verificadas?
- [ ] **Súmulas/precedentes conferidos** via `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- Aceitar condenação **sem perícia** ou com **laudo genérico/por amostragem** — o corpo de delito é a maior alavanca da defesa.
- Afirmar a **natureza da ação penal** sem checar o **§3º** na redação vigente (decadência x ação pública).
- Confundir **uso de cópia licenciada** com **reprodução não autorizada**.
- Presumir **finalidade comercial ("para fins de comércio")** sem prova concreta — ou trocá-la pelo "intuito de lucro" do art. 184 do CP — destravando a qualificadora sem base.
- Capitular como **art. 184 do CP** o que é **software** (lei especial prevalece).
- Ignorar a **cadeia de custódia** dos vestígios digitais (hash/lacre/rastreabilidade).
- Citar **Súmula 574/STF** ou qualquer precedente **sem** passar pelo gate de jurisprudência.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Material de apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público** ou em **ação penal privada pelo titular**, a lógica probatória se **inverte** — o ônus de demonstrar **materialidade (perícia)**, **titularidade**, **ausência de autorização** e **finalidade comercial ("para fins de comércio")** é da acusação; espelhar as teses acima como pontos a **provar**, e não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf`. Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido, do titular e do material apreendido não vão a repositório público.

## Lembretes finais

- **Perícia primeiro:** sem **corpo de delito** que prove **materialidade** e **originalidade**, não há condenação segura (CPP, art. 158; Súmula 574/STF — conferir).
- **Ação penal e prazo:** regra é **privada** (§3º) — cheque **legitimidade** e **decadência** (art. 38 do CPP) antes do mérito; só é **incondicionada** nas hipóteses do §3º (conferir redação vigente).
- **Sem finalidade comercial ("para fins de comércio"), sem qualificadora** — desclassifica do §1º/§2º para o caput (IMPO); não confundir com o "intuito de lucro" do art. 184 do CP.
- **Lei especial vence:** software é **art. 12 da Lei 9.609/98**, não art. 184 do CP.
- **Vestígio digital** exige **cadeia de custódia** íntegra (arts. 158-A ss.).
- **Sem jurisprudência de memória** — confira tudo via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
