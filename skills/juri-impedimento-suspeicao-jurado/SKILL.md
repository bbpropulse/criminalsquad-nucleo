---
name: juri-impedimento-suspeicao-jurado
description: >-
  Use ao arguir IMPEDIMENTO/SUSPEIÇÃO de jurado no momento do sorteio da 2ª fase do júri. Mapa
  correto dos dispositivos (Lei 11.689/2008): art. 449 CPP — jurado que já funcionou em julgamento
  anterior do mesmo processo (I), que integrou Conselho que julgou o corréu (II) ou que manifestou
  prévia disposição para condenar/absolver (III); art. 450 CPP — remissão aos impedimentos,
  suspeições e incompatibilidades dos arts. 252-254… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.1.0"
  categories: [law, criminal, juri, analise]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-impedimento-suspeicao-jurado"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-impedimento-suspeicao-jurado", "juri impedimento", "suspeicao jurado"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Impedimento e Suspeição de Jurado (arts. 448-452 CPP)

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

Esta skill orienta a **arguição de impedimento e de suspeição de jurado** no momento do **sorteio dos 7 jurados** que formarão o **Conselho de Sentença** (2ª fase do Tribunal do Júri, plenário). Impedimento e suspeição são **vícios de parcialidade tipificados**: quando um jurado sorteado se enquadra numa das hipóteses legais, a parte o argui na hora e o juiz-presidente o **exclui**, sorteando outro em seu lugar.

> **Lição central — pinçar o dispositivo certo.** No sorteio, três institutos operam e não se confundem. **Impedimento/suspeição** (arts. 448-450, com remissão aos arts. 252-254) têm **hipóteses tipificadas** e podem ser arguidos pela parte ou reconhecidos de ofício; a **contradita** (art. 466, §2º — ver skill própria) é a impugnação por falta de requisito de habilitação; a **recusa peremptória** (art. 468) é imotivada e limitada a **3 por parte**. Pinçar o instituto **e o artigo** certos é o que garante a exclusão — arguir "suspeição" onde o caso é de recusa peremptória desperdiça fundamento; usar recusa onde havia impedimento gasta uma das três recusas à toa; citar o artigo errado no requerimento reduzido a termo entrega ao adversário a impugnação da própria arguição.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 448 a 452 do CPP** (Capítulo "Do Tribunal do Júri", com a sistemática dada pela **Lei 11.689/2008**) e das hipóteses de impedimento, suspeição e incompatibilidade dos **arts. 252 a 254 do CPP**, aplicáveis ao jurado **por remissão expressa do art. 450 do CPP**. Toda súmula, tese ou acórdão passa **obrigatoriamente** pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf` antes de uso. Na dúvida, **omitir vence inventar**.

## Onde isso acontece — a linha do sorteio

Na sessão de julgamento, presentes ao menos **15 jurados** (art. 463), o juiz-presidente procede ao **sorteio de 7** para o Conselho de Sentença (art. 467). **À medida que cada cédula é sorteada e o nome lido**, abre-se a janela para a parte se manifestar sobre aquele jurado — é o momento de arguir impedimento, suspeição, incompatibilidade, contraditar ou recusar (arts. 468-469). Fora desse momento, sobrevém **preclusão**. Por isso a regra de ouro: **decidir sobre cada jurado na hora em que o nome é lido, e consignar tudo em ata**.

## Base legal — o mapa correto dos dispositivos

- **Art. 448 do CPP** — **parentesco entre jurados do mesmo Conselho.** Não podem servir no **mesmo Conselho** marido e mulher, ascendente e descendente, sogro e genro/nora, irmãos e cunhados (durante o cunhadio), tio e sobrinho, padrasto/madrasta e enteado (§§ 1º e 2º). **Atenção:** o art. 448 **não tem incisos I-III** e **não trata** de vínculo do jurado com as partes nem de julgamento anterior — cuida **só** da relação de parentesco **entre os próprios jurados**.
- **Art. 449 do CPP** — **três hipóteses de jurado que NÃO poderá servir** naquele julgamento:
  - **I** — o jurado que **houver funcionado em julgamento anterior do mesmo processo**, independentemente da causa determinante do julgamento posterior (ex.: júri anulado e refeito);
  - **II** — o jurado que, no caso de **concurso de pessoas**, houver **integrado o Conselho de Sentença que julgou o outro acusado** (o corréu);
  - **III** — o jurado que **manifestou prévia disposição** para condenar ou absolver o acusado.
- **Art. 450 do CPP** — **remissão aos arts. 252-254.** Aplicam-se aos jurados os **impedimentos, as suspeições e as incompatibilidades** previstos nos **arts. 252 a 254 do CPP**. É **daqui** — do art. 450, não do art. 448 — que se extrai a aplicação ao jurado da **suspeição por amizade íntima ou inimizade capital** (art. 254, I) e das demais hipóteses do juiz.
- **Art. 451 do CPP** — **recusa conjunta por interesse comum.** Quando os jurados excluídos por impedimento, suspeição ou incompatibilidade forem em número que impeça a formação do Conselho, o julgamento é **adiado** para o primeiro dia desimpedido, após sorteados os suplentes.
- **Art. 452 do CPP** — o jurado que serviu num julgamento **não fica impedido** de participar de outros dentro do mesmo período de reunião (não se confunde com o art. 449, I, que veda servir **duas vezes no mesmo processo**).
- **Arts. 252 a 254 do CPP** (aplicáveis por remissão do **art. 450**) — hipóteses gerais de **impedimento (252-253)**, **incompatibilidade** e **suspeição (254)** do juiz, estendidas ao jurado por exercer função judicante. É a fonte da **suspeição por amizade íntima/inimizade capital** (art. 254, I).
- **Art. 466, §1º, do CPP** — o juiz-presidente **adverte os jurados** dos impedimentos, suspeições e incompatibilidades, determinando que informem se incidem em alguma hipótese — dever de **auto-revelação** do jurado. O **§2º** trata da **incomunicabilidade**.
- **Art. 470 do CPP** — desacolhida a arguição, o julgamento **prossegue**, consignando-se o incidente; guarda relação com a preservação da matéria para eventual nulidade.
- **CF, art. 5º, XXXVIII e LIII** — soberania do júri e **juiz natural/imparcial**; a imparcialidade do jurado é projeção do juiz natural sobre o julgador leigo.

## As hipóteses — mapa para pinçar o vício certo

### A) IMPEDIMENTO / NÃO-SERVIR (arts. 448 e 449 CPP) — objetivo, presunção absoluta

Aqui o vício decorre de **vínculo objetivo** que a lei presume incompatível com o julgamento — **não se discute prova de parcialidade concreta**, basta o fato.

| Fonte | Hipótese | Racional |
|---|----------|----------|
| **Art. 448** | **Parentesco ENTRE jurados** — marido e mulher, ascendente/descendente, sogro/genro/nora, irmãos/cunhados (durante o cunhadio), tio/sobrinho, padrasto/madrasta/enteado — quando **ambos** servirem no **mesmo Conselho** | Impedir a concentração de vínculo familiar na formação do veredicto |
| **Art. 449, I** | **Já funcionou em julgamento anterior do mesmo processo** — jurado que integrou o Conselho de sessão anterior do **mesmo caso** (ex.: júri anulado e refeito) | Evita o jurado que já formou convicção sobre aquele processo concreto |
| **Art. 449, II** | **Integrou o Conselho que julgou o corréu** — no concurso de pessoas, jurado que já julgou o **outro acusado** do mesmo fato | Evita convicção previamente formada sobre a mesma empreitada criminosa |
| **Art. 449, III** | **Manifestou prévia disposição** para condenar ou absolver o acusado | Garantia contra o **pré-juízo** declarado |

> **Não confunda os dispositivos.** Parentesco **entre jurados** é o **art. 448** (sem incisos). Julgamento anterior do mesmo processo, julgamento do corréu e prévia disposição são as **três hipóteses do art. 449** (incisos I, II e III). O vínculo do jurado **com as partes** (parentesco/amizade/inimizade com réu, vítima, defensor, MP ou juiz) **não** está no art. 448 — vem do **art. 450 c/c arts. 252-254** (item B abaixo).

### B) IMPEDIMENTO E SUSPEIÇÃO POR VÍNCULO COM AS PARTES (art. 450 c/c arts. 252-254 CPP)

O **art. 450** manda aplicar ao jurado **todos** os impedimentos, suspeições e incompatibilidades dos arts. 252-254 do CPP. Daí decorrem:

- **Impedimentos objetivos do jurado quanto às partes** (art. 450 c/c art. 252) — parentesco do jurado com o **juiz, MP, defensor, réu ou vítima**; jurado que serviu como testemunha, perito ou já atuou de outro modo no processo. Presunção absoluta, dispensa prova de parcialidade.
- **Suspeição por amizade íntima ou inimizade capital** (art. 450 c/c **art. 254, I**) — a hipótese **mais comum e mais disputada** no plenário: o jurado que é amigo próximo da família da vítima, ou desafeto notório do réu. É **subjetiva** e, em regra, **reclama alguma prova**.
- **Interesse no julgamento** (art. 450 c/c **art. 254, IV e V**) — jurado (ou cônjuge/parente até 3º grau) que responde a processo semelhante, tem demanda sobre questão análoga a decidir, ou é **credor/devedor/tutor/curador** de alguma parte.
- **Aconselhamento prévio** (art. 450 c/c **art. 254, II**) — jurado que **aconselhou** qualquer das partes sobre o objeto do processo.

> **Impedimento × suspeição — a distinção que importa.** Impedimento (arts. 448, 449 e 450 c/c art. 252) é **objetivo** (o fato basta; presunção *iuris et de iure*), argúvel a qualquer tempo e **reconhecível de ofício**. Suspeição (art. 450 c/c art. 254) é **subjetiva** (liga-se ao ânimo/relação pessoal), pode **precluir** se não arguida no momento próprio e, em regra, **reclama alguma prova** (a inimizade "capital", a amizade "íntima" — não o mero conhecimento). **Classificar corretamente muda o ônus e o momento.**

### C) O que NÃO é impedimento/suspeição (não confundir)

- **Falta de requisito de habilitação** (idoneidade, capacidade civil, restrição legal para servir) → é **contradita** (art. 466, §2º) — ver skill `juri-contradita-jurado`.
- **Antipatia estratégica, "cara" do jurado, palpite de perfil** → não é vício; se a parte quer excluir sem motivo tipificado, usa a **recusa peremptória** (art. 468), imotivada, **até 3** por parte.
- **Parcialidade do JUIZ-PRESIDENTE ou do MP** → não se resolve por este incidente oral; segue o **rito escrito de exceção de suspeição/impedimento** (arts. 95-112 CPP) — ver skill `excecoes-processuais`.

## Metodologia — passo a passo no sorteio

1. **Antes da sessão:** cruze a **lista de jurados alistados** (que a defesa/acusação tem direito de consultar) com os dados públicos do caso — nomes de vítima, familiares, testemunhas, corréus e do próprio réu. Monte um **quadro de riscos** por jurado, com a hipótese legal potencial ao lado de cada nome (só com dados públicos lícitos — ver *Limites éticos*).
2. **No sorteio, a cada nome lido:** verifique (a) impedimento/não-servir dos arts. 448 e 449 (parentesco entre jurados; julgamento anterior do processo; julgamento do corréu; prévia disposição); (b) impedimento/suspeição por vínculo com as partes (art. 450 c/c arts. 252-254); (c) se dois jurados já sorteados são parentes entre si (art. 448).
3. **Ao identificar o vício:** **antes de o jurado ser incluído no Conselho**, formule **requerimento oral fundamentado**, apontando o **dispositivo/hipótese** e o **fato** que o preenche.
4. **Ofereça a prova possível de plano** (documento, a própria auto-revelação do jurado provocada pelo juiz nos termos do art. 466, §1º, testemunho do escrivão, print de registro público). Impedimento objetivo em regra dispensa prova além do fato notório; suspeição costuma exigir lastro.
5. **Exija a consignação em ATA** do requerimento **e** da decisão do juiz-presidente (acolhimento/rejeição) — é pressuposto de futura **nulidade/apelação (art. 593, III, "a")**.
6. **Rejeitada a arguição:** registre **protesto** em ata, mantendo a matéria viva. O julgamento prossegue (art. 470), mas a questão fica preservada para o recurso.
7. **Ordem prática:** decidido o incidente (acolhido → jurado excluído e sorteado outro; rejeitado → segue), só então se passa à **contradita** e, por fim, à **recusa peremptória** daquele jurado.

### Modelo de requerimento oral (redução a termo)

> "Excelência, com fundamento no **art. 450 c/c o art. 254, I, do CPP**, arguo a **suspeição** do jurado [NOME], por manter **inimizade capital** com o réu, conforme [fato/prova]. Requeiro a exclusão do jurado do Conselho de Sentença e a consignação em ata do requerimento e da respectiva decisão."

Ajuste o dispositivo à hipótese concreta:

- **Parentesco entre dois jurados sorteados** → *"com fundamento no **art. 448 do CPP**, arguo o impedimento, pois os jurados [X] e [Y] são [irmãos], não podendo ambos servir no mesmo Conselho."*
- **Jurado que já julgou o mesmo processo** → *"com fundamento no **art. 449, I, do CPP**, o jurado [X] funcionou no julgamento anterior deste mesmo processo (sessão anulada em [data]) e não pode servir."*
- **Jurado que julgou o corréu** → *"com fundamento no **art. 449, II, do CPP**, o jurado [X] integrou o Conselho que julgou o corréu [NOME], no mesmo concurso de pessoas."*
- **Prévia disposição de condenar/absolver** → *"com fundamento no **art. 449, III, do CPP**, o jurado [X] manifestou prévia disposição para [condenar/absolver], conforme [fato/prova]."*
- **Amizade íntima do jurado com a família da vítima** → *"com fundamento no **art. 450 c/c o art. 254, I, do CPP**, arguo a suspeição do jurado [X], por amizade íntima com a família da vítima, conforme [fato/prova]."*
- **Parentesco do jurado com uma das partes** → *"com fundamento no **art. 450 c/c o art. 252, I, do CPP**, arguo o impedimento do jurado [X], por ser [irmão da vítima / cônjuge do assistente de acusação etc.]."*

## Teses e contra-teses

**Teses defensivas (arguir a exclusão):**
- **Impedimento objetivo dispensa prova de dano concreto** (arts. 448, 449 e 450 c/c art. 252): reconhecido o vínculo (parentesco entre jurados; julgamento anterior; julgamento do corréu; parentesco com a parte), a exclusão é **automática**, sem discutir se o jurado "seria" parcial — a presunção é absoluta.
- **Suspeição por inimizade capital com o réu** (art. 450 c/c art. 254, I): demonstrada a inimizade **notória e grave** (não mera divergência), o jurado deve ser excluído; a plenitude de defesa (CF, art. 5º, XXXVIII, "a") reforça o padrão rigoroso de imparcialidade no júri.
- **Jurado que já funcionou no mesmo processo ou julgou o corréu** (art. 449, I e II): em júri anulado e refeito, o jurado do Conselho anterior **não pode** reintegrar o novo; e o jurado que já julgou o corréu do mesmo fato **não pode** servir — pré-juízo presumido.
- **Prévia disposição de condenar/absolver** (art. 449, III): manifestação anterior do jurado sobre o mérito impede sua participação — garantia contra o pré-juízo.
- **Nulidade por jurado impedido/suspeito que votou:** se o vício era conhecido/arguível e o jurado integrou o Conselho, há **quebra da imparcialidade** — matéria de nulidade (a natureza absoluta/relativa **depende da hipótese e do registro tempestivo** — confira caso a caso via `jurisprudencia-stj-stf`).

**Contra-teses (acusação / manutenção do jurado):**
- **Preclusão da suspeição não arguida no momento próprio:** a suspeição subjetiva (art. 450 c/c art. 254), se conhecida e não arguida quando o nome foi lido, **preclui** (diferente do impedimento objetivo).
- **Ausência de prova da amizade íntima / inimizade capital:** mero conhecimento, relação de vizinhança ou simpatia difusa **não** configuram a hipótese do art. 254, I — exige-se vínculo **qualificado**.
- ***Pas de nullité sans grief* (art. 563 CPP):** para vícios de índole relativa, sem **demonstração de prejuízo** concreto, não se anula o julgamento (a defesa deve, por isso, sempre demonstrar o prejuízo à imparcialidade).

## Súmulas e precedentes relevantes

O terreno aqui é sobretudo **legal** (arts. 448-452 c/c 252-254 CPP) — prefira fundamentar na **lei e na tese**, não em número de acórdão. Não há súmula notória específica sobre impedimento/suspeição de **jurado** de que se possa afirmar com certeza; **não invente**.

- **[NÃO VERIFICADO]** Precedentes do STJ/STF sobre (i) natureza **absoluta ou relativa** da nulidade por jurado suspeito que integrou o Conselho, (ii) exigência de **prova da inimizade capital**, e (iii) **preclusão** da suspeição não arguida no sorteio. **Confira número, teor e vigência via a skill `jurisprudencia-stj-stf` antes de citar.**
- **[NÃO VERIFICADO]** Eventual entendimento sobre aplicação dos arts. 252-254 ao jurado (por força do art. 450) e sobre o alcance do dever de auto-revelação (art. 466, §1º). **Verificar antes de usar.**

> Regra do Citation Gate: cite **livremente os dispositivos do CPP/CF** (verificáveis na fonte oficial); **qualquer número de HC/REsp/RE, informativo ou tema** só entra na peça depois de conferido em `jurisprudencia-stj-stf`. Melhor faltar precedente do que citar julgado inexistente.

## Limites éticos (perfilamento e seleção de jurados)

O trabalho de mapear jurados para decidir impedimentos, suspeições, contraditas e recusas é **legítimo e recomendável** — mas tem **fronteiras rígidas**:

- **Somente dados públicos e lícitos.** O perfilamento usa apenas a **lista oficial de jurados alistados** e informações de **acesso público** (registros públicos, o que consta dos autos, a auto-revelação provocada pelo juiz). **Vedado** obter dados por meios ilícitos, invasão de privacidade, engenharia social ou fontes não autorizadas.
- **Proibido abordar, contatar, pressionar ou influenciar jurado.** Nenhum contato direto ou indireto com jurado (ou seus familiares) antes, durante ou depois da sessão. Tentar influenciar o Conselho **fora dos autos** é **ilícito** e pode configurar crime e infração ética grave.
- **Nada que comprometa a imparcialidade do Conselho ou o sigilo.** É vedado qualquer ato tendente a quebrar a **incomunicabilidade** dos jurados (art. 466, §2º) ou o **sigilo das votações** (art. 485).
- **Recusa peremptória: imotivada, mas não discriminatória.** A recusa do art. 468 dispensa motivação, porém **não pode ter finalidade discriminatória ilícita** (excluir jurado por raça, cor, religião, gênero, origem — vedação constitucional, CF, art. 3º, IV, e art. 5º, caput). A ausência de motivação **não é salvo-conduto** para discriminação.
- **Revisão humana e responsabilidade do advogado.** A atuação em plenário e as arguições são sempre do **advogado responsável** (CED/OAB, art. 2º; Provimento 205/2021 quanto à conduta e à publicidade). Este material é **apoio à preparação**, não substitui o juízo profissional nem a leitura do caso concreto.

## Erros comuns (anti-padrões)

- **Confundir os dispositivos** — atribuir ao **art. 448** o vínculo do jurado com as partes ou o julgamento anterior (o art. 448 cuida **só** de parentesco **entre jurados**), ou citar a suspeição por amizade/inimizade "por remissão do art. 448" (a remissão aos arts. 252-254 é do **art. 450**).
- **Confundir os três institutos** — arguir "suspeição" onde cabia contradita (falta de requisito) ou desperdiçar uma **recusa peremptória** onde havia impedimento objetivo gratuito.
- **Tratar impedimento como se exigisse prova de parcialidade** — o vínculo objetivo dos arts. 448/449 e do art. 450 c/c art. 252 **basta**; discutir "se o jurado seria parcial" enfraquece o requerimento.
- **Perder o momento** — arguir depois de o jurado já integrar o Conselho: a suspeição **preclui**; consigne **na hora em que o nome é lido**.
- **Não consignar em ata** — sem o registro do requerimento **e** da decisão, não há munição para a apelação por nulidade (art. 593, III, "a").
- **Alegar inimizade "capital" com base em simpatia difusa** — sem vínculo qualificado (amizade íntima/inimizade grave e notória), a hipótese do art. 254, I, não se sustenta.
- **Levar parcialidade do JUIZ/MP para este incidente** — é rito escrito de exceção (arts. 95-112) — skill `excecoes-processuais`, não o incidente oral do sorteio.
- **Citar acórdão de memória** — todo precedente passa por `jurisprudencia-stj-stf`.

## Checklist final (no sorteio)

- [ ] **Quadro de riscos por jurado** montado antes da sessão, só com **dados públicos lícitos**?
- [ ] A cada nome lido, checado **parentesco entre jurados (art. 448)**, **hipóteses do art. 449 (I julgamento anterior / II corréu / III prévia disposição)** e **vínculo com as partes (art. 450 c/c arts. 252-254)**?
- [ ] Vício **classificado corretamente** com o **dispositivo certo** (art. 448 × art. 449 × art. 450 c/c 252-254 × contradita × recusa peremptória)?
- [ ] Requerimento **oral fundamentado** com **dispositivo/hipótese + fato** que o preenche?
- [ ] **Prova possível oferecida de plano** (auto-revelação do art. 466, §1º; documento; registro público)?
- [ ] Requerimento **e decisão** do juiz-presidente **consignados em ATA**?
- [ ] **Protesto registrado** em caso de rejeição (preservar para o recurso — art. 593, III, "a")?
- [ ] Arguição feita **no momento próprio**, antes de o jurado integrar o Conselho (sem preclusão)?
- [ ] **Recusa peremptória** reservada e usada sem finalidade **discriminatória**?
- [ ] **Nenhum contato** com jurado; **incomunicabilidade** e **sigilo** preservados?
- [ ] **Citações verificadas** (`jurisprudencia-stj-stf`) e **revisão humana** do advogado responsável?

## Nota de conformidade

Rascunho técnico sob **revisão humana obrigatória** — não substitui o juízo do advogado responsável nem a leitura do caso concreto em plenário. **Conferir sempre a redação vigente** dos arts. 448-452 e 252-254 do CPP na fonte oficial e passar toda súmula/precedente/tese pelo gate `jurisprudencia-stj-stf` antes de citar (há sanções reais por jurisprudência inventada por IA). Ética conforme o polo: **OAB + Provimento 205/2021** na advocacia; **CNMP** no Ministério Público; **LC 80/94** na Defensoria. Os **limites éticos de perfilamento e seleção de jurados** (dados públicos lícitos; vedação de contato/influência; sigilo e incomunicabilidade; recusa não discriminatória) são **inegociáveis**.

**Padrão de redação:** ao reduzir a arguição a termo ou fundamentar a nulidade em recurso, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, subsunção explícita e persuasão (a régua que a revisão cobra).
