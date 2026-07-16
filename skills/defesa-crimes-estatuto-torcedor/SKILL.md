---
name: defesa-crimes-estatuto-torcedor
description: >-
  Use ao construir a DEFESA nos crimes do Estatuto de Defesa do Torcedor (Lei 10.671/2003, arts.
  41-B a 41-G) — três blocos distintos: (a) tumulto/violência/invasão em evento esportivo (41-B);
  (b) corrupção e fraude do resultado esportivo (41-C a 41-E), crimes de reclusão de 2 a 6 anos, sem
  multidão; (c) cambismo (41-F e 41-G). Eixos por bloco: no 41-B, individualização da conduta em
  multidão, ausência de dolo, mera presença… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.1.0"
  categories: [law, criminal, defesa, estatuto-torcedor]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-estatuto-torcedor", "defesa crimes", "estatuto torcedor"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-crimes-estatuto-torcedor"]
---

# Crimes do Estatuto do Torcedor — Defesa (Lei 10.671/2003)

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

Esta skill orienta a **defesa técnica** nos crimes do **Estatuto de Defesa do Torcedor** (Lei 10.671/2003), inseridos nos **arts. 41-B a 41-G** pela **Lei 12.299/2010**. O capítulo protege bens jurídicos **heterogêneos** — a segurança e a paz nos eventos esportivos (41-B), a **lisura e a autenticidade da competição** (41-C a 41-E) e o **acesso regular do torcedor ao evento** (cambismo, 41-F e 41-G). Por isso, **não existe uma única "tese-mãe"**: cada bloco tem elementos, penas e alavancas de defesa próprios. O erro mais comum é tratar todo o capítulo como se fosse "briga de torcida" — metade dele é **manipulação de resultado** (crime de colarinho branco, sem multidão) e **cambismo**.

> **Mapa dos três blocos (leia antes de qualquer tese):**
> - **Bloco A — 41-B (tumulto / violência / invasão):** fenômeno de **multidão**; a alavanca é a **individualização da conduta**. Menor potencial ofensivo.
> - **Bloco B — 41-C a 41-E (corrupção e fraude do resultado esportivo):** crimes de **manipulação de competição**, sem multidão; **reclusão de 2 a 6 anos** (não é menor potencial ofensivo). A alavanca é a prova do **ato destinado a alterar/falsear o resultado** e do **dolo específico**.
> - **Bloco C — 41-F e 41-G (cambismo):** venda/distribuição de ingresso por preço superior ao estampado. A alavanca é a prova do **sobrepreço** e a distinção da **revenda pelo valor de face**.

> **Correção material importante:** os arts. 41-C a 41-E **não** criminalizam "porte de artefato"; **não há crime de porte de instrumento de violência no Estatuto do Torcedor**. Onde a acusação (ou material antigo) descrever esses artigos como "porte/transporte de artefato", isso está **errado** — os núcleos são corrupção passiva desportiva (41-C), corrupção ativa desportiva (41-D) e fraude do resultado (41-E).

> **Cautela de vigência e redação (obrigatória antes de citar):** (1) confirme a **redação vigente** de cada artigo e os **exatos limites de pena** antes de calcular prescrição, competência do JECRIM e cabimento de transação/ANPP — os patamares abaixo refletem a redação verificada da Lei 12.299/2010, mas **reconfira** na fonte atual; (2) a Lei 12.299/2010 foi **publicada em 28/07/2010**; a **data exata de entrada em vigor** deve ser conferida na cláusula de vigência da lei **[A CONFERIR]** antes de usá-la como marco de irretroatividade (CF, art. 5º, XL) — não afirme a data de memória; (3) **todo precedente e súmula passam pela skill `jurisprudencia-stj-stf`** antes de ir à peça. Na dúvida, **omitir vence inventar**.

## Base legal

- **Lei 10.671/2003 (Estatuto de Defesa do Torcedor)**, arts. **41-B a 41-G** (incluídos pela **Lei 12.299/2010**):
  - **Art. 41-B** — promover **tumulto**, praticar ou **incitar a violência**, ou **invadir local restrito** aos competidores em evento esportivo; abrange, em regra, condutas nas **imediações** e no **trajeto** (conferir §§). **Pena de reclusão de 1 a 2 anos e multa** *(conferir redação vigente)*. O **§2º** admite converter a reclusão em **pena de impedimento de comparecimento** às proximidades do estádio.
  - **Art. 41-C** — **corrupção passiva desportiva:** *solicitar ou aceitar* vantagem ou promessa de vantagem patrimonial ou não patrimonial para qualquer ato ou omissão destinado a **alterar ou falsear o resultado** de competição esportiva. **Pena de reclusão de 2 a 6 anos e multa** *(conferir redação vigente)*.
  - **Art. 41-D** — **corrupção ativa desportiva:** *dar ou prometer* vantagem patrimonial ou não patrimonial com o fim de **alterar ou falsear o resultado** de competição esportiva. **Pena de reclusão de 2 a 6 anos e multa** *(conferir redação vigente)*.
  - **Art. 41-E** — **fraude do resultado:** *fraudar, por qualquer meio, ou contribuir* para que se fraude, de qualquer forma, o **resultado** de competição esportiva. **Pena de reclusão de 2 a 6 anos e multa** *(conferir redação vigente)*.
  - **Art. 41-F** — **cambismo:** *vender* ingressos de evento esportivo **por preço superior ao estampado no bilhete**. **Pena de reclusão de 1 a 2 anos e multa** *(conferir redação vigente)*.
  - **Art. 41-G** — **cambismo (facilitação):** *fornecer, desviar ou facilitar* a distribuição de ingressos para venda **por preço superior ao estampado no bilhete**. **Pena de reclusão de 2 a 4 anos e multa** *(conferir redação vigente)*, com **causa de aumento** quando o agente for dirigente, administrador de entidade de prática desportiva, integrante de torcida organizada ou servidor público (conferir o parágrafo).
- **Impedimento de comparecimento** — **efeito próprio do 41-B** (conversão da reclusão prevista no **§2º**); afastamento do agente das proximidades de eventos esportivos por prazo determinado; exige fundamentação e proporcionalidade. **Não se estende de ofício** aos crimes de corrupção/fraude do resultado (41-C a 41-E) nem ao cambismo (41-F/G) sem base legal expressa — **conferir**.
- **Interface com o Código Penal** — no 41-B, **lesão corporal** (art. 129), **dano** (art. 163) e **rixa** (art. 137) quando a violência concreta migra para tipo comum; nos 41-C a 41-E, possível interface com **corrupção**, **estelionato** e crimes contra a ordem econômica, a depender do arranjo (conferir concurso/absorção).
- **Lei 9.099/95** — **JECRIM, transação penal (art. 76) e suspensão condicional do processo (art. 89)**: aplicáveis **apenas** aos tipos que os autorizarem pelo teto/piso de pena (ver seção segmentada).
- **CPP** — **arts. 158-A a 158-F** (cadeia de custódia dos vestígios e da **prova documental/telemática**, sobretudo nos 41-C a 41-E); **arts. 240 e ss.** (busca e apreensão, quando houver).
- **Art. 109 do CP** — prescrição, **calculada pelo máximo de cada tipo** (ver seção).

## Anatomia dos tipos — roteiro de subsunção (o que a defesa disseca)

Cada artigo tem núcleo próprio; **teste elemento por elemento** e não trate o "contexto de torcida" como se fosse o tipo penal.

1. **Art. 41-B (tumulto / violência / invasão):**
   - **Conduta própria e determinada:** *promover* tumulto, *praticar* ou *incitar* violência, ou *invadir* local restrito. Exige **ato individualizado** — não a mera adesão a uma massa.
   - **Dolo:** vontade de promover o tumulto/violência ou de invadir. Estar presente, torcer, gritar ou reagir defensivamente **não** é, por si, o núcleo.
   - **Incitar** ≠ opinar/comemorar: exige estímulo concreto e idôneo à violência, dirigido a resultado.
2. **Arts. 41-C e 41-D (corrupção passiva/ativa desportiva):**
   - **Núcleo (41-C):** *solicitar* ou *aceitar* vantagem/promessa; **(41-D):** *dar* ou *prometer* vantagem. Não é crime de multidão — é **pacto de corrupção** entre pessoas determinadas.
   - **Finalidade específica:** a vantagem deve visar **ato ou omissão destinado a alterar ou falsear o resultado** da competição. Sem esse elo finalístico, a conduta é **atípica** (premiação lícita por desempenho, "bicho", bônus contratual **não** são corrupção).
   - **Prova do pacto e do nexo:** identificar a **vantagem**, o **destinatário do ato** e a **ligação com o resultado** — mensagens, transferências, testemunhos; discutir a **cadeia de custódia** da prova digital.
3. **Art. 41-E (fraude do resultado):**
   - **Núcleo:** *fraudar* ou *contribuir* para fraudar, por qualquer meio, o **resultado** da competição.
   - **Resultado como objeto:** o fim é **manipular o placar/desfecho** — não basta irregularidade administrativa ou disciplinar sem alcance sobre o resultado.
   - **Dolo:** vontade de falsear o resultado; erro, falha técnica ou lance esportivo legítimo **não** se subsumem.
4. **Arts. 41-F e 41-G (cambismo):**
   - **Núcleo (41-F):** *vender* ingresso **por preço superior ao estampado no bilhete**. **(41-G):** *fornecer, desviar ou facilitar* a distribuição de ingressos **para venda por preço superior ao estampado**.
   - **Elemento típico central:** o **sobrepreço** em relação ao valor **estampado no bilhete**. *(A expressão "fora dos pontos autorizados" pode não integrar o dispositivo — conferir a redação exata antes de invocá-la.)*
   - **Prova do sobrepreço e da finalidade:** distinguir a **revenda esporádica pelo valor de face** (atípica) do cambismo típico; no 41-G, provar a **facilitação/desvio** e a **destinação à venda** por sobrepreço.

**Método:** isole (a) a **conduta descrita** no tipo correto, (b) o **dolo/finalidade específica** de cada figura, (c) o **recorte fático** (multidão no 41-B; pacto/finalidade no 41-C a 41-E; sobrepreço no cambismo) e (d) a **prova de autoria**. A ausência de qualquer um leva à **atipicidade**, à **inépcia da denúncia** ou à **absolvição por insuficiência de prova**.

---

## Bloco A — Art. 41-B (tumulto / violência / invasão)

### A tese-mãe deste bloco: individualização da conduta em multidão

**Atenção: esta tese vale para o 41-B, não para todo o capítulo.** Em um tumulto com dezenas ou centenas de pessoas, a acusação frequentemente parte de **imagens genéricas**, **prisão em bloco** ou **pertencimento a torcida organizada** para imputar a todos o mesmo fato. A defesa desmonta isso:

- **Denúncia genérica é inepta** (art. 41 c/c art. 395, I, CPP): sem narrar **a conduta específica de cada réu**, não permite o exercício da ampla defesa → **rejeição da denúncia**, **absolvição sumária** (art. 397 CPP) ou **trancamento por HC**.
- **Responsabilidade penal é subjetiva e individual** — não há responsabilidade penal coletiva; vedado punir alguém pelo que **o grupo** fez.
- **Mera presença / pertencimento** a torcida organizada **não é crime** (liberdade de reunião e de associação — CF, art. 5º, XVI e XVII). O que se pune é o **ato de violência individualizado**, não o vínculo.
- **Prova por imagem** exige **identificação segura** do agente e do gesto que lhe é atribuído; multidão, baixa resolução, ângulo e ausência de datação/individualização **fragilizam** a autoria.
- **Prisão em flagrante em bloco:** questionar a **arbitrariedade** da detenção indistinta e a ausência de fato próprio no auto — insumo para relaxamento/liberdade.
- **Licitude da abordagem:** quando houver busca pessoal (art. 244 CPP), exigir a **fundada suspeita** concreta e individualizada; abordagem massiva e indiscriminada é campo para nulidade da prova daí derivada (art. 157 CPP).

➡️ **Tese central do bloco A:** ausência de **conduta individualizada e dolosa** → atipicidade/inépcia; subsidiariamente, **insuficiência de prova da autoria** (in dubio pro reo, art. 386, V e VII, CPP).

### A pena de impedimento de comparecimento (efeito do 41-B)

O **§2º do 41-B** admite converter a reclusão em **impedimento de comparecimento** às proximidades de eventos esportivos. **É efeito próprio do 41-B** — não pressuponha que se aplique aos demais tipos do capítulo. A defesa atua em três frentes:

- **Fundamentação concreta:** a medida não é automática; exige **motivação idônea** ligada à conduta provada, e não à torcida ou ao clamor.
- **Proporcionalidade e duração:** o **prazo** e o alcance devem guardar proporção com a gravidade do ato individualizado; combater excessos e prazos padronizados.
- **Contraditório e revisão:** cabível impugnar a imposição/renovação e pleitear revogação quando cessada a necessidade; verificar a **natureza** (cautelar × pena substitutiva do §2º) na **redação vigente** e na jurisprudência (**Citation Gate**).

### Despenalizadores e prescrição — 41-B

- **Menor potencial ofensivo:** com **pena máxima de 2 anos**, o 41-B é **infração de menor potencial ofensivo** → **JECRIM**, com **transação penal** (art. 76) e composição *(conferir o teto na redação vigente)*.
- **Suspensão condicional do processo** (art. 89): cabível se a **pena mínima ≤ 1 ano** — provável no 41-B *(conferir eventual causa de aumento)*.
- **Prescrição:** máximo de 2 anos → **prazo de 4 anos** (art. 109, V, CP) *(recalcular na skill `calculadora-dosimetria`)*.

---

## Bloco B — Arts. 41-C a 41-E (corrupção e fraude do resultado esportivo)

**São crimes de manipulação de competição — não de multidão.** Aqui **não** cabe a tese de individualização em tumulto: o eixo é a **prova do pacto/da fraude** e do **dolo específico** de alterar o resultado. São **crimes de colarinho branco**, com **reclusão de 2 a 6 anos** — **não** são de menor potencial ofensivo.

**Teses defensivas próprias:**

- **Atipicidade por ausência de finalidade de alterar/falsear o resultado:** vantagem, prêmio ou pagamento **não** ligado ao desfecho da competição (bônus por desempenho, "bicho", premiação regular) é **atípico** — o elo finalístico com o resultado é elementar.
- **Ausência de prova do pacto (41-C/41-D):** identificar concretamente a **vantagem**, o **ato/omissão** contratado e o **nexo** com o resultado; conversas ambíguas, ilações e "clima de suspeita" não bastam.
- **Ausência de fraude idônea ao resultado (41-E):** irregularidade administrativa, disciplinar ou de arbitragem **sem aptidão** para manipular o placar/desfecho não configura o tipo; lance esportivo legítimo e erro humano não são fraude.
- **Prova digital/documental e cadeia de custódia (arts. 158-A a 158-F CPP):** a materialidade costuma nascer de mensagens, extratos e mídias — impugnar **coleta, preservação e rastreabilidade**; quebra ou lacuna compromete a confiabilidade.
- **Autoria e concurso:** delimitar a participação de cada acusado; afastar imputação por mera proximidade ao arranjo (dirigentes, empresários) sem ato próprio.
- **Correta classificação / bis in idem:** o mesmo fato pode ser indevidamente imputado como 41-C/D/E **e** corrupção/estelionato — definir concurso ou absorção.

**Despenalizadores e prescrição — 41-C a 41-E:**

- **NÃO são de menor potencial ofensivo** (reclusão de 2 a 6 anos): **não cabem JECRIM nem transação penal**.
- **Suspensão condicional do processo (art. 89):** **incabível** — a **pena mínima (2 anos) supera 1 ano**.
- **ANPP (art. 28-A CPP):** **avaliável**, pois a pena mínima (2 anos) é **inferior a 4 anos** e trata-se, em regra, de crime **sem violência ou grave ameaça à pessoa** — conferir vedações e requisitos do caso.
- **Prescrição:** máximo de 6 anos → **prazo de 12 anos** (art. 109, III, CP). **Não** são "prazos curtos" *(recalcular na skill `calculadora-dosimetria`)*.

---

## Bloco C — Arts. 41-F e 41-G (cambismo)

Venda/distribuição de ingresso por **preço superior ao estampado no bilhete**. **Atenção às penas diferentes:** o **41-F** (venda direta) é **reclusão de 1 a 2 anos** (menor potencial ofensivo); o **41-G** (fornecer/desviar/facilitar) é **reclusão de 2 a 4 anos** (**não** é menor potencial ofensivo, com causa de aumento).

**Teses defensivas próprias:**

- **Descaracterização do sobrepreço:** provar que a venda/revenda foi **pelo valor estampado** (valor de face) — sem sobrepreço, não há tipo.
- **Revenda esporádica × cambismo:** afastar a habitualidade/organização quando a conduta é ocasional e sem sobrepreço.
- **Ausência de facilitação/desvio (41-G):** exigir prova concreta do ato de **fornecer, desviar ou facilitar** a distribuição **para venda por sobrepreço** — não basta posse de ingressos.
- **Combater a causa de aumento do 41-G:** afastar a qualidade especial invocada (dirigente, administrador, integrante de torcida organizada, servidor público) quando não comprovada, ou impugnar sua incidência na dosimetria.
- **Licitude da apreensão dos ingressos** e cadeia de custódia, quando a materialidade decorrer de apreensão.

**Despenalizadores e prescrição — cambismo:**

- **41-F (1 a 2 anos):** **menor potencial ofensivo** → **JECRIM**, **transação** (art. 76) e, cabível a **suspensão condicional do processo** (art. 89, pena mínima de 1 ano). **Prescrição: 4 anos** (art. 109, V, CP).
- **41-G (2 a 4 anos):** **não** é menor potencial ofensivo; **não** cabe JECRIM/transação; **sursis processual incabível** (pena mínima 2 anos > 1 ano); **ANPP avaliável** (pena mínima 2 < 4 anos, sem violência à pessoa). **Prescrição: 8 anos** (art. 109, IV, CP), **antes** de eventual aumento *(recalcular na `calculadora-dosimetria`)*.

---

## Distinção de figuras próximas

| Conduta / tipo | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Lesão corporal (CP 129)** | ofensa à integridade física de vítima determinada | No contexto do 41-B, discutir **concurso × absorção** e a pena/rito próprios; evitar **dupla imputação** pelo mesmo fato |
| **Dano (CP 163)** | destruição/deterioração de coisa (cadeira, patrimônio do estádio) | Reconduzir ao tipo comum quando não configurado o núcleo do 41-B; discutir dolo específico |
| **Rixa (CP 137)** | participação em briga generalizada | Distinguir do tumulto do 41-B; a **mera participação** tem regramento próprio |
| **Resistência/desacato (CP 329/331)** | oposição a ato de autoridade | Não confundir reação pontual a abordagem com "promover tumulto" |
| **Corrupção (CP 317/333) / estelionato (CP 171)** | corrupção de agente público / fraude patrimonial genérica | Nos 41-C a 41-E, definir **concurso ou absorção**; evitar dupla imputação pelo mesmo pacto |
| **Cambismo (41-F/41-G)** | venda/distribuição por preço superior ao estampado | Afastar quando a venda foi **pelo valor de face**; distinguir 41-F (venda) de 41-G (facilitação) |
| **Mera presença / torcer** | exercício de liberdade de reunião | **Atípico** — não há tipo de "pertencer a torcida" |

## Catálogo de teses defensivas (segmentado por bloco)

**Bloco A — 41-B:**
1. **Inépcia da denúncia / atipicidade por ausência de conduta individualizada** — imputação genérica ao grupo, sem narrar o ato próprio do réu (a tese-mãe do 41-B).
2. **Insuficiência de prova da autoria** — imagem genérica, prisão em bloco, ausência de identificação segura → in dubio pro reo (art. 386, V/VII, CPP).
3. **Atipicidade por ausência de dolo** — presença, comemoração ou reação defensiva, sem vontade de promover violência/tumulto.
4. **Ilicitude da abordagem/busca pessoal** — art. 244 CPP: falta de fundada suspeita individualizada → nulidade da prova derivada (art. 157 CPP).
5. **Impugnação e proporcionalidade do impedimento de comparecimento (§2º)** — fundamentação, prazo, alcance e revisão.

**Bloco B — 41-C a 41-E:**
6. **Atipicidade por ausência de finalidade de alterar/falsear o resultado** — vantagem/pagamento desligado do desfecho da competição.
7. **Ausência de prova do pacto de corrupção (41-C/D) ou de fraude idônea (41-E)** — falta de vantagem, ato contratado ou nexo com o resultado.
8. **Quebra da cadeia de custódia da prova digital/documental** (arts. 158-A ss. CPP).
9. **Correta classificação / bis in idem** — mesmo pacto imputado também como corrupção/estelionato.

**Bloco C — 41-F/41-G:**
10. **Descaracterização do cambismo** — venda pelo valor de face; ausência de prova do sobrepreço; distinção da revenda esporádica.
11. **Afastamento da facilitação/desvio (41-G)** e da **causa de aumento** (qualidade especial não comprovada).

**Transversais:**
12. **Atipicidade temporal** — fatos anteriores à **entrada em vigor** da Lei 12.299/2010 (irretroatividade da lei penal mais grave; **conferir a data exata de vigência** — publicada em 28/07/2010).
13. **Excludentes** — legítima defesa, estado de necessidade, exercício regular de direito (art. 23 CP), sobretudo no 41-B.
14. **Institutos despenalizadores segmentados** — transação/sursis apenas no 41-B e 41-F; **ANPP** avaliável no 41-C a 41-E e no 41-G (ver seções).
15. **Extinção da punibilidade** — **prescrição** calculada pelo tipo correto (4 anos no 41-B/41-F; 8 anos no 41-G; 12 anos no 41-C a 41-E), inclusive retroativa/intercorrente.
16. **Dosimetria** — pena-base no mínimo, afastar agravantes/aumentos mal fundamentados (inclusive o aumento do 41-G), regime e substituição por restritivas quando cabível (art. 44 CP).

## Contra-teses da acusação (antecipar)

- **41-B — individualização por imagem/depoimento:** vídeos, reconhecimento por agentes de segurança, fotos que atribuem gesto específico ao réu → a defesa exige identificação segura e datação.
- **41-B — liderança/organização:** imputação ao "coordenador" da torcida como promotor do tumulto → a defesa exige **ato concreto**, não rótulo.
- **41-C a 41-E — arranjo de manipulação:** mensagens, transferências e "combinações" → a defesa ataca o **nexo finalístico com o resultado**, a cadeia de custódia da prova digital e a autoria individual.
- **41-F/41-G — apreensão de ingressos e sobrepreço:** a defesa discute a **prova do valor** superior ao estampado e a distinção venda × facilitação.

A defesa deve **atacar cada uma na origem**, sempre no tipo correto — sem importar teses de um bloco para outro.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** **não cite acórdão, tese ou súmula de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo + vigência** via `jurisprudencia-stj-stf` antes de levar à peça.

Temas a pesquisar (sempre verificando o precedente **atual**):
- **Individualização da conduta em tumulto** e **inépcia da denúncia genérica** no crime de multidão (41-B) — **[NÃO VERIFICADO]**.
- **Natureza, requisitos e proporcionalidade do impedimento de comparecimento** (41-B, §2º) — **[NÃO VERIFICADO]**.
- **Contornos típicos da corrupção/fraude do resultado** (41-C a 41-E) e prova do nexo finalístico — **[NÃO VERIFICADO]**.
- **Cambismo (41-F/41-G):** prova do sobrepreço e distinção venda × facilitação — **[NÃO VERIFICADO]**.

Não há, aqui, súmula própria a citar de memória — **qualquer enunciado invocado passa pelo gate**.

## Checklist e anti-padrões

- [ ] Foi identificado o **tipo correto** (41-B tumulto? 41-C a 41-E manipulação de resultado? 41-F/41-G cambismo?) — sem importar tese de bloco errado?
- [ ] **(41-B)** A denúncia descreve a **conduta individual e dolosa** deste réu, ou imputa o fato ao **grupo/à presença**?
- [ ] **(41-B)** Houve **abordagem com fundada suspeita** individualizada (art. 244/157 CPP)?
- [ ] **(41-C a 41-E)** Há prova do **ato destinado a alterar/falsear o resultado** e do **dolo específico**? A cadeia de custódia da **prova digital** está íntegra?
- [ ] **(41-F/41-G)** Há prova do **sobrepreço** em relação ao valor estampado? Distinguiu-se **venda (41-F)** de **facilitação (41-G)** e a causa de aumento?
- [ ] O fato é **posterior à entrada em vigor** da Lei 12.299/2010 (data exata **conferida**)?
- [ ] Os **despenalizadores** foram avaliados **por tipo** (JECRIM/transação só no 41-B e 41-F; ANPP no 41-C a 41-E e 41-G)?
- [ ] A **prescrição** foi calculada pelo **máximo do tipo correto** (4 / 8 / 12 anos)?
- [ ] O mesmo fato foi imputado também como crime comum (lesão/dano no 41-B; corrupção/estelionato no 41-C a 41-E) — bis in idem / concurso?
- [ ] Toda **súmula/precedente** passou por `jurisprudencia-stj-stf` — nada citado de memória?

**Anti-padrões (evitar):**
- **Tratar todo o capítulo como "briga de torcida"** — os 41-C a 41-E são manipulação de resultado (colarinho branco), sem multidão.
- **Afirmar que os 41-C a 41-E punem "porte de artefato"** — não existe esse crime no Estatuto.
- **Descrever o 41-G como "reunir torcedores para violência"** — 41-G é **cambismo** (facilitação de venda por sobrepreço).
- **Importar a tese de individualização em multidão** para crimes que não têm multidão (41-C a 41-E, 41-F/41-G).
- **Tratar todos os tipos como menor potencial ofensivo** — só o 41-B e o 41-F o são; 41-C a 41-E e 41-G **não** cabem JECRIM/transação, e a prescrição **não** é curta.
- **Estender o impedimento de comparecimento** a corrupção/fraude do resultado sem base legal.
- **Afirmar a data de vigência da Lei 12.299/2010 de memória** — publicada em 28/07/2010; conferir a cláusula de vigência.
- Aceitar a **imputação coletiva** no 41-B sem exigir individualização.
- Afirmar limites de pena ou precedente **sem conferir a redação vigente** e o gate de jurisprudência.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de individualizar a conduta (41-B), provar o pacto/fraude e o dolo específico (41-C a 41-E), demonstrar o sobrepreço (41-F/G) e a licitude da prova é da acusação; espelhe as teses acima como pontos a **provar**, não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD:** dados do assistido e de terceiros não vão a repositório público.

## Lembretes finais

- **Primeiro classifique o bloco** — 41-B (tumulto), 41-C a 41-E (manipulação de resultado) ou 41-F/41-G (cambismo); cada um tem elementos, penas e teses próprios.
- **41-B:** individualização é tudo; mera presença/pertencimento não é crime; impedimento (§2º) exige fundamentação e proporcionalidade.
- **41-C a 41-E:** o elo é a **finalidade de alterar/falsear o resultado**; reclusão de 2 a 6 anos; **sem** JECRIM/transação; prescrição de **12 anos**; ANPP avaliável.
- **41-F/41-G:** o eixo é o **sobrepreço**; só o 41-F é menor potencial ofensivo; 41-G tem pena maior e causa de aumento.
- **Vigência e verificação** — conferir a data exata de entrada em vigor da Lei 12.299/2010 (publicada em 28/07/2010); nada de jurisprudência de memória (use `jurisprudencia-stj-stf`).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
