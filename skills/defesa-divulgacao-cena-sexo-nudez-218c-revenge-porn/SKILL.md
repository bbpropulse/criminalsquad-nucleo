---
name: defesa-divulgacao-cena-sexo-nudez-218c-revenge-porn
description: >-
  Use ao construir a DEFESA na divulgação de cena de estupro, de sexo, de nudez ou de pornografia
  sem consentimento — o "revenge porn" do art. 218-C do CP (Lei 13.718/2018): consentimento na
  DIVULGAÇÃO (não só na produção), autoria e prova digital (metadados, cadeia de custódia,
  montagem/deepfake), dolo e conhecimento da ausência de consentimento, a excludente do §2º,
  distinção da mera posse, e o deslocamento para o ECA quando… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, divulgacao-cena, dignidade-sexual]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-divulgacao-cena-sexo-nudez-218c-revenge-porn", "defesa divulgacao", "revenge porn"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
  eval_case_ids: ["csq-v5-defesa-divulgacao-cena-sexo-nudez-218c-revenge-porn"]
---

# Divulgação de cena de estupro/sexo/nudez (revenge porn) — Defesa (CP art. 218-C)

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

Esta skill orienta a **defesa técnica** no crime de **registro e divulgação não consentida de cena de sexo, nudez ou pornografia** — o art. 218-C do CP, incluído pela **Lei 13.718/2018** entre os crimes contra a dignidade sexual (Capítulo I-A, "Da exposição da intimidade sexual"). O bem jurídico é a **dignidade e a intimidade sexual** da vítima e o direito de dispor da própria imagem íntima. O entregável são **blocos de tese** para a resposta à acusação (CPP, art. 396-A), a condução da instrução e os memoriais — não uma peça única, e sim a espinha argumentativa. O foco é o **polo defensivo**.

> **Lição central (só para cena de SEXO, NUDEZ ou PORNOGRAFIA):** nessa modalidade, o núcleo do tipo é a **ausência de consentimento para a DIVULGAÇÃO**, e não para a produção. Uma imagem íntima **produzida com anuência** (o casal filmou junto) pode ter sido **divulgada sem anuência** — e é a divulgação que se pune. O primeiro erro da acusação (e a primeira alavanca da defesa) é confundir os dois consentimentos. **ATENÇÃO — a tese do consentimento NÃO se aplica à cena de estupro/estupro de vulnerável:** na redação vigente, a elementar "sem o consentimento da vítima" **qualifica apenas** a cena de sexo, nudez ou pornografia; a divulgação de **cena de estupro ou de estupro de vulnerável** (bem como o registro que **faça apologia ou induza** a sua prática) é **típica independentemente de consentimento** — logo, não sustente atipicidade por anuência nessa hipótese. Antes de qualquer tese, separe quatro planos: **(1) qual é a cena** (estupro/estupro de vulnerável — onde o consentimento é irrelevante — versus sexo/nudez/pornografia — onde o dissenso é elementar), **(2) quem produziu e com que anuência**, **(3) quem divulgou e com que dolo**, e **(4) a vítima é maior ou menor de 18?** — porque se for menor, o fato **sai do 218-C e cai no ECA** (art. 241 e correlatos), com pena maior e outra estratégia.

> **Cautela de vigência (obrigatória antes de citar):** o art. 218-C foi **incluído pela Lei 13.718**, **datada de 24/09/2018 e publicada no DOU de 25/09/2018** (vigência na data da publicação, salvo conferência). **Antes de fundamentar a tese intertemporal (item 10 do catálogo), confirme a data exata de publicação/entrada em vigor** — a data-limite do fato é decisiva para a irretroatividade da lei mais grave. Para **fatos anteriores** à vigência, faça o cotejo de direito intertemporal: a conduta pode ter sido capitulada como outro tipo (injúria, difamação, ou o crime da Lei 12.737/2012), e **a lei penal mais grave não retroage** (CF, art. 5º, XL). Confira a **redação vigente** do caput, do §1º e do §2º, a **pena** e a **subsidiariedade** ("se o fato não constitui crime mais grave") e **todo precedente ou súmula pela skill `jurisprudencia-stj-stf`** antes de fundamentar. Jurisprudência sobre tipo recente oscila — **omitir vence inventar**.

## Base legal

- **Art. 218-C, caput, CP (Lei 13.718/2018)** — oferecer, trocar, disponibilizar, transmitir, vender ou expor à venda, distribuir, publicar ou **divulgar**, por qualquer meio (inclusive comunicação de massa ou sistema de informática/telemática), **fotografia, vídeo ou outro registro audiovisual**. O caput abrange **duas hipóteses com regimes distintos quanto ao consentimento**:
  - **(a) cena de estupro ou de estupro de vulnerável — ou registro que faça apologia ou induza a sua prática:** **típica INDEPENDENTEMENTE do consentimento da vítima**. Aqui **não cabe** a tese de atipicidade por anuência à divulgação. A modalidade de **apologia/indução** é figura própria (distinta do "revenge porn") e não deve ser omitida ao recortar o preceito.
  - **(b) cena de sexo, de nudez ou de pornografia:** só é típica **quando praticada "sem o consentimento da vítima"** — é nesta hipótese que a **ausência de consentimento à divulgação** funciona como elementar (o terreno próprio do "revenge porn").
  - **Verificar pena e a cláusula de subsidiariedade "se o fato não constitui crime mais grave" na redação vigente** via `jurisprudencia-stj-stf`.
- **Art. 218-C, §1º, CP** — **causa de aumento de pena** quando o agente **mantém ou manteve relação íntima de afeto** com a vítima **ou** age **com o fim de vingança ou humilhação** — é o núcleo do "**revenge porn**". **Conferir a fração de aumento na redação vigente.**
- **Art. 218-C, §2º, CP** — **exclusão de crime**: não há crime quando o agente pratica as condutas em **publicação de natureza jornalística, científica, cultural ou acadêmica** com emprego de recurso que **impossibilite a identificação da vítima**, ou com **prévia autorização** dela. Excludente típica/de ilicitude — **conferir redação exata**.
- **Art. 225, CP** — **ação penal pública INCONDICIONADA** nos crimes contra a dignidade sexual (redação da Lei 13.718/2018): não depende de representação da vítima.
- **Art. 234-B, CP** — os processos correm em **segredo de justiça**.
- **ECA (Lei 8.069/90), art. 241 e correlatos (241-A a 241-E)** — se a vítima é **criança ou adolescente**, a cena de sexo/pornografia infantil desloca a tipificação para o ECA (**pena maior**) — **fora desta skill**.
- **Lei 12.737/2012 (invasão de dispositivo)** — interface quando o registro foi **obtido por invasão** de aparelho/contas (concurso ou crime autônomo).
- **Arts. 158-A a 158-F, CPP** — **cadeia de custódia** dos vestígios digitais (eixo probatório central).
- **Art. 109 do CP** — prescrição, a calibrar pela pena da redação vigente.

## Anatomia do tipo — roteiro de subsunção (o que a defesa disseca)

Praticar **(1) uma das condutas-núcleo** (divulgar/transmitir/vender/expor etc.), tendo por objeto **(2) um registro** que contenha **(3) a cena típica**, **(4) — apenas na cena de sexo/nudez/pornografia — sem o consentimento da vítima** para essa divulgação, com **(5) dolo** (vontade de divulgar, com conhecimento das elementares):

1. **Conduta-núcleo:** verbos alternativos — basta **um** (oferecer, trocar, disponibilizar, transmitir, vender, expor à venda, distribuir, publicar, **divulgar**), por **qualquer meio**. Tipo de ação múltipla/conteúdo variado: uma só divulgação consuma; múltiplos envios do mesmo material tendem a **crime único**, não concurso — explorar contra a soma de penas.
2. **Objeto:** **registro** (foto, vídeo, outro registro audiovisual). **Mera posse** do arquivo **não** é conduta-núcleo — sem ato de divulgação/oferta, o tipo **não** se completa (ver "Distinção").
3. **Conteúdo — duas classes com regimes distintos:** **(3a) cena de estupro ou de estupro de vulnerável**, ou registro que **faça apologia ou induza** a sua prática — típica **independentemente de consentimento**; **(3b) cena de sexo, nudez ou pornografia** — típica **apenas se ausente o consentimento** (elemento 4). Discutir se a imagem preenche o conceito de "nudez/pornografia" ou é apenas sugestiva — e, na classe (3a), qual é a cena efetivamente registrada.
4. **Ausência de consentimento — para a DIVULGAÇÃO (só na classe 3b: sexo/nudez/pornografia):** elemento **normativo e elementar** *dessa* modalidade. O consentimento para **produzir** não presume consentimento para **divulgar**. Havendo anuência à divulgação — ou **dúvida razoável** sobre ela —, a conduta é **atípica**. **Não** se aplica à cena de estupro/estupro de vulnerável (nem à apologia/indução), onde o consentimento é irrelevante.
5. **Dolo:** vontade de divulgar **com conhecimento** (ao menos eventual) das elementares — inclusive, na classe (3b), da ausência de consentimento. **Não há forma culposa** — o reenvio inadvertido, o encaminhamento sem ciência do conteúdo ou a crença legítima na autorização atacam o elemento subjetivo.

**Método:** teste cada elemento em separado. A ausência **de qualquer um** leva à atipicidade. Na cena de sexo/nudez/pornografia, a defesa ataca, em regra, **(4) o consentimento para divulgar** e **(5) o dolo/autoria**; na cena de estupro/estupro de vulnerável e na apologia/indução, o eixo migra para **(3) o conteúdo**, **(5) o dolo** e a **autoria** — o consentimento deixa de ser porta de atipicidade.

## Os dois consentimentos — a tese-mãe da atipicidade

A distinção decisiva do 218-C é temporal e funcional:

- **Consentimento para a PRODUÇÃO** — a vítima anuiu em ser filmada/fotografada. **Irrelevante isoladamente**: não autoriza divulgar.
- **Consentimento para a DIVULGAÇÃO** — a vítima anuiu (expressa ou tacitamente) em **tornar pública/compartilhar** aquela cena. **É o elemento do tipo.**

➡️ **Desdobramentos defensivos:**
- **Havia autorização para divulgar** (mensagem, contexto, prática do casal de compartilhar) → **atipicidade** por presença do consentimento elementar (CPP, art. 386, III).
- **Dúvida razoável sobre a anuência à divulgação** → **in dubio pro reo** sobre a elementar; o ônus de provar o **dissenso** é da acusação.
- **§2º — prévia autorização** da vítima para a publicação afasta o crime expressamente.

**Atenção:** o consentimento é **revogável** e **específico**; não sustentar que "ela deixou filmar, logo autorizou tudo" — a tese correta é a **anuência concreta e atual à própria divulgação**, provada por elementos objetivos, e não a inferência moralizante sobre a conduta pregressa da vítima (revitimização, além de fraca).

## Autoria e prova digital — o segundo eixo

Crime praticado em ambiente digital: **quem** divulgou é frequentemente o ponto mais frágil da acusação.

- **Autoria:** posse de aparelho/conta **não** prova autoria da divulgação (contas compartilhadas, acesso de terceiros, dispositivo desbloqueado, perfil clonado/falso). Exigir **individualização** de quem praticou o ato — IP, número, device, com laudo.
- **Cadeia de custódia digital (arts. 158-A a 158-F, CPP):** questionar coleta, lacre, hash, preservação e continuidade dos vestígios (prints, exportações de conversa, arquivos). Print sem perícia e sem cadeia é prova frágil.
- **Montagem / deepfake / edição:** a defesa deve levantar a **hipótese de adulteração** — a cena pode ter sido **fabricada** (rosto sobreposto, IA generativa) ou **descontextualizada**. Requerer **perícia** de autenticidade e integridade do arquivo e dos **metadados** (EXIF, data, origem).
- **Prova ilícita:** impugnar acesso indevido a aparelho/contas e quebra de sigilo sem autorização judicial (CF, art. 5º, XII; CPP, art. 157) — inclusive quando a **própria vítima ou terceiro** acessou o dispositivo do réu para obter o material.
- Ver as skills de análise probatória, `leitura-interpretacao-laudo-pericial-defesa` e cadeia de custódia do acervo para o detalhamento técnico.

## Distinção de figuras próximas

| Tipo / situação | Traço distintivo | Uso pela defesa |
|---|---|---|
| **Mera posse do registro** | guardar o arquivo, **sem** oferta/divulgação | Sem conduta-núcleo → **atípico** no 218-C (vítima adulta) |
| **ECA, art. 241 e correlatos** | vítima **criança/adolescente** | Sai do 218-C (pena maior; outra skill) — mas afastar bis in idem e conferir a idade |
| **Invasão de dispositivo (Lei 12.737/2012)** | **obter** o registro invadindo aparelho/conta | Crime autônomo/concurso — separar o "obter" do "divulgar" |
| **Crimes contra a honra (138-140)** | ofensa à reputação/decoro | Se a essência é ofender e não expor cena sexual sem consentimento |
| **Estupro (213) / registrado** | violência ou grave ameaça no ato sexual | "Crime mais grave" que **absorve** — mas discutir a subsidiariedade e o bis in idem |
| **Crime mais grave (subsidiariedade)** | cláusula "se o fato não constitui crime mais grave" | Impedir **dupla punição**: o 218-C é subsidiário |

## Catálogo de teses defensivas

1. **Atipicidade por consentimento à divulgação** — a vítima autorizou (ou há dúvida razoável) o compartilhamento; o dissenso é elementar e seu ônus é da acusação.
2. **Atipicidade por ausência de conduta-núcleo (mera posse)** — o réu **detinha** o arquivo, mas não há prova de **ato de divulgação/oferta**.
3. **Ausência/fragilidade de autoria** — conta/aparelho compartilhado, acesso de terceiro, perfil falso; individualização não demonstrada.
4. **Ausência de dolo** — reenvio inadvertido, encaminhamento sem ciência do conteúdo, crença legítima na autorização (erro de tipo sobre a elementar do consentimento).
5. **Adulteração / montagem / deepfake** — o registro não é autêntico ou foi descontextualizado; requer perícia.
6. **Incidência do §2º (exclusão de crime)** — publicação jornalística/científica/cultural/acadêmica com identidade preservada, **ou** prévia autorização da vítima.
7. **Subsidiariedade e ne bis in idem** — cláusula "crime mais grave" e vedação de punir duas vezes o mesmo fato (218-C + honra, ou + invasão, ou + estupro).
8. **Prova ilícita / cadeia de custódia rompida** — nulidade da prova digital (arts. 157 e 158-A ss., CPP); acesso ilegal ao dispositivo.
9. **Afastamento da causa de aumento do §1º** — negar a "relação íntima de afeto" ou o "fim de vingança/humilhação" quando não provados (dosimetria).
10. **Direito intertemporal** — fatos anteriores a 24/09/2018 não se tipificam no 218-C (irretroatividade da lei mais grave).
11. **Extinção da punibilidade** — **prescrição** (calibrar pela pena da redação vigente; conferir termo inicial).
12. **Dosimetria** — pena-base no mínimo; afastar aumentos do §1º mal fundamentados; regime aberto e substituição por restritivas (art. 44, CP), quando não obstadas.

## Contra-teses da acusação (antecipar)

- **Consentimento só para produzir, nunca para divulgar** — a acusação sustentará que a anuência à filmagem não alcança a exposição, e que o silêncio da vítima não é autorização.
- **Autoria demonstrada** por vínculo do número/conta/IP ao réu e pela sequência de mensagens.
- **Dolo evidenciado** pelo contexto de **ruptura do relacionamento** e pelas mensagens de teor de vingança/humilhação (que ainda **agravam** pelo §1º).
- **§1º incidente** — relação íntima de afeto e finalidade de humilhação como causa de aumento.
- **Rejeição da montagem** — perícia atestando autenticidade do arquivo.

A defesa deve **atacar cada uma na origem**: qualidade e cadeia de custódia da prova digital; ambiguidade da anuência **à divulgação**; individualização da autoria; e a delimitação do fato único para evitar dupla punição — **sem** transformar a defesa em ataque à honra ou à conduta sexual pregressa da vítima (revitimização é antiético e contraproducente).

## Interface com o ECA (vítima menor de 18)

Se a cena envolve **criança ou adolescente**, o fato **não** é 218-C: desloca-se para o **ECA (art. 241 e correlatos, 241-A a 241-E)**, com **pena maior** e regime probatório próprio.

- **Confira a idade da vítima na data do fato** — é a primeira triagem. Erro de capitulação para maior/menor muda tudo.
- Cuidado com o **bis in idem**: não se pune pelo 218-C **e** pelo ECA pelo mesmo registro.
- A defesa deve **conferir** competência, pena e tese aplicável via `jurisprudencia-stj-stf` e migrar para a skill de crimes sexuais contra vulnerável quando for o caso.

## Jurisprudência e súmulas (sob Citation Gate)

> **Regra:** por ser crime de 2018, a jurisprudência do STJ/STF sobre o **218-C está em consolidação e não há súmula específica conhecida**. **Não cite acórdão sobre revenge porn de memória.** Marque **[NÃO VERIFICADO]** e confira **tese + dispositivo** via `jurisprudencia-stj-stf` antes de levar à peça.

- Alcance do **§2º** (excludente jornalística/prévia autorização), tratamento do **consentimento à divulgação**, exigência de **perícia** em prova digital, incidência do **§1º** e a fronteira com o **ECA** e com a **Lei 12.737/2012** → **[NÃO VERIFICADO]** — buscar precedente atual antes de afirmar.
- Súmula/tese sobre **cadeia de custódia** e **nulidade de prova digital** (STJ) → **conferir vigência/redação** via `jurisprudencia-stj-stf`. **Omitir vence inventar.**

## Checklist e anti-padrões

- [ ] Separou **consentimento para produzir** de **consentimento para divulgar** (o elementar é o segundo)?
- [ ] Confirmou a **idade da vítima** (maior/menor) para 218-C x ECA?
- [ ] Há prova de **conduta-núcleo de divulgação**, ou apenas **posse**?
- [ ] **Autoria** individualizada (conta/aparelho/IP/device com laudo), ou presumida?
- [ ] **Cadeia de custódia** e **autenticidade** do vestígio digital íntegras (arts. 158-A ss.)? Levantou **montagem/deepfake**?
- [ ] Testou a **excludente do §2º** (publicação lícita com identidade preservada / prévia autorização)?
- [ ] Afastou o **bis in idem** e observou a **subsidiariedade** ("crime mais grave")?
- [ ] Verificou a **data do fato** (irretroatividade; Lei 13.718/2018 desde 24/09/2018)?
- [ ] Calibrou a **prescrição** pela pena da redação vigente?
- [ ] Afastou/discutiu o **§1º** (relação íntima / vingança-humilhação) na dosimetria?
- [ ] Observou o **segredo de justiça** (art. 234-B) e toda citação passou por `jurisprudencia-stj-stf`?

**Anti-padrões (evitar):**
- Confundir **consentimento na produção** com **consentimento na divulgação** (são planos distintos).
- Tratar **mera posse** do arquivo como se fosse o crime consumado (falta a conduta-núcleo).
- Aceitar **autoria** a partir da simples titularidade do aparelho/conta, sem individualização.
- Ignorar a hipótese de **montagem/deepfake** e a **cadeia de custódia** do vestígio digital.
- Punir **duas vezes** o mesmo fato (218-C + honra + invasão) sem enfrentar a subsidiariedade e o bis in idem.
- Aplicar o 218-C a **fatos anteriores** a 24/09/2018.
- Tratar como 218-C um fato contra **menor de 18** (é ECA, pena maior).
- Construir a defesa sobre a **conduta sexual pregressa** ou a "reputação" da vítima — revitimização gratuita, antiética e persuasivamente fraca. Ataque a **qualificação jurídica**, a **autoria** e a **prova do dissenso**.
- Citar precedente sobre revenge porn **de memória** — tipo recente, jurisprudência instável.

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Este material é apoio metodológico à **defesa** (a spec indica **polo defensivo**); não substitui o juízo do(a) advogado(a) responsável (CED/EAOAB).
- **Polo e ética:** confira o **polo da instituição** em `_criminalsquad/_memory/company.md`. Atuando como **assistente de acusação / Ministério Público**, a lógica probatória se **inverte** — o ônus de demonstrar a **ausência de consentimento à divulgação**, a **autoria** e o **dolo** é da acusação; espelhar as teses acima como pontos a **provar**, e não a atacar.
- **Citation Gate:** nenhuma súmula, tese ou precedente vai à peça sem passar por `jurisprudencia-stj-stf` (e pela best-practice `verificacao-citacoes`). Há sanção real por jurisprudência inventada por IA.
- **Sigilo/LGPD e vítima:** processo em **segredo de justiça** (art. 234-B); dados e imagens íntimas da vítima e do assistido **jamais** em repositório público — o próprio manuseio do material sensível exige cautela redobrada de custódia.

## Lembretes finais

- **Dois consentimentos** — produzir ≠ divulgar; o elementar é a **anuência à divulgação**.
- **Posse não é divulgação** — sem conduta-núcleo, não há 218-C.
- **Autoria e prova digital** — individualize; questione cadeia de custódia, metadados e montagem/deepfake.
- **§2º** é excludente expressa (publicação lícita com identidade preservada / prévia autorização).
- **Menor de 18 → ECA** (pena maior; outra skill) — confira a idade primeiro.
- **Subsidiariedade e bis in idem** — não punir o mesmo fato duas vezes; cláusula "crime mais grave".
- **Vigência:** conferir redação, pena e §§ do 218-C; **não retroagir** a lei mais grave a fatos anteriores a 24/09/2018.
- **Sem jurisprudência de memória** — confira via `jurisprudencia-stj-stf`.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
